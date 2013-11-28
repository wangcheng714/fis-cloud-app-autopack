/**
 * FAQ :
 *  1. 两个静态资源合并收益计算时为什么不用考虑依赖关系？
 *      模型采用动态规划算法，正常计算依赖一定会和资源本身合并到一起，因为收益必然是最大的
 *
 */
var benefitMap = {},
    packageUtil = require("../lib/util.js");

var RTT = 2,  //round trip time 不能包含建立tcp链接的时间，因为http 1.1都是用了 keep-alive 没有tcp建立的开销
    SPEED = 20,
    benefitMap = {};

module.exports.package = function(resources){
    var newResources = partResources(resources),
        mergedResult = {};

    newResources = sortByPv(newResources);

    fis.util.map(newResources, function(packageKey, partResource){
        var packageResult = [];
        if(partResource.length >= 2){
            mergedResult[packageKey] = mergePackage(partResource.shift(), partResource, packageResult);
        }else{
            mergedResult[packageKey] = [partResource.pop()];
        }
    });
    return mergedResult;
}


function partResources(resources){
    var newResources = {};
    for(var id in resources){
        var resource = resources[id];
        //排除掉非 js和css的文件
        if(resources.hasOwnProperty(id) && resource.get("module") && (resource.get("type") == "js" || resource.get("type") == "css")){
            if(resource.get("loadType") == ""){
                resource.setLoadType("sync");
            }
            var partKey = resource.get("module") + "_" + resource.get("loadType") + "_" + resource.get("type");
            if(!newResources[partKey]){
                newResources[partKey] = [];
            }
            newResources[partKey].push(resource);
        }
    }
    return newResources;
}


function sortByPv(resources){
    for(var key in resources){
        if(resources.hasOwnProperty(key)){
            resources[key].sort(function(a, b){
                return b.get("pv") - a.get("pv");
            });
        }
    }
    return resources;
}

/**
 * 计算两个静态资源合并的收益
 *      计算收益 ：
 *          找到两个静态资源的公共page，计算节省的请求数，转化为时间
 *      计算损失 ：
 *          计算 a-b的差值 遍历计算浪费的b的字节数
 *          计算 b-a的差值 遍历计算浪费的a的字节数
 *          浪费字节数/网速 计算出浪费的时间
 * @param staticA
 * @param staticB
 */
function getBenefit(staticA, staticB){
    if(benefitMap[staticA.get("id") + staticB.get("id")]){
        return benefitMap[staticA.get("id") + staticB.get("id")];
    }
    //计算收益
    var commonPages = packageUtil.array_intersect_key(staticA.get("pages"), staticB.get("pages")),
        commonPv = 0,
        benefitTime = 0;
    fis.util.map(commonPages, function(page, pagePv){
        commonPv = commonPv + parseInt(pagePv);
    });
    benefitTime = commonPv * RTT;

    //计算损失
    var singleAPages = packageUtil.array_diff_key(staticA.get("pages"), staticB.get("pages")),
        singleBPages = packageUtil.array_diff_key(staticB.get("pages"), staticA.get("pages")),
        wasteStaticA = 0,
        wasteStaticB = 0,
        wasteTime = 0;
    fis.util.map(singleAPages, function(page, pagePv){
        wasteStaticB = wasteStaticB + parseInt(pagePv) * parseFloat(staticB.get("size"));
    });
    fis.util.map(singleBPages, function(page, pagePv){
        wasteStaticA = wasteStaticA + parseInt(pagePv) * parseFloat(staticA.get("size"));
    });
    wasteTime = (wasteStaticA + wasteStaticB) / SPEED;

    //最终收益
    var finalBenefit = benefitTime - wasteTime;
    benefitMap[staticA.get("id") + staticB.get("id")] = finalBenefit;

    return finalBenefit;
}

// module.exports.getBenefit = getBenefit;

/**
 * 返回合并收益最大的资源以及收益 : 从上述算法中可以分析出没有没有损失的合并一定是收益最大的，所以不用单独考虑没有损失的资源合并情况
 * @param staticA
 * @param {Array} resources
 */
function getLargestBenefit(staticA, resources){
    var largestBenefit = 0,
        largestResource = null,
        resourceIndex = null;
    fis.util.map(resources, function(index, resource){
        if(staticA.get("id") != resource.get("id")){
            var tmpBenefit = getBenefit(staticA, resource);
            if(tmpBenefit >= largestBenefit){
                largestBenefit = tmpBenefit;
                largestResource = resource;
                resourceIndex = index;
            }
        }
    });
    return {
        "benefit" : largestBenefit,
        "resource" : largestResource,
        "index" : resourceIndex
    };
}

//module.exports.getLargestBenefit = getLargestBenefit;

/**
 *
 * @param originStatic
 * @param {Array} resources
 * @param mergedStatics
 */
function mergePackage(originStatic, resources, mergedStatics){
    var mergeResult = getLargestBenefit(originStatic, resources),
        oldMergeStatic = mergeResult["resource"],
        oldMergeBenefit = mergeResult["benefit"],
        oldStaticIndex = mergeResult["index"];

    if(oldMergeStatic == null){ //没有找到适合合并的静态资源
        mergedStatics.push(originStatic);
        if(resources.length >= 2){
            var originStatic = resources.shift();
            mergePackage(originStatic, resources, mergedStatics);
        }else if(resources.length == 1){
            mergedStatics.push(resources.pop());
        }
    }else{ //找到适合合并的静态资源
        var newMergeResult = getLargestBenefit(oldMergeStatic, resources),
            newMergeStatic = newMergeResult["resource"],
            newMergeBenefit = newMergeResult["benefit"],
            newStaticIndex = newMergeResult["index"];

        if(newMergeBenefit > oldMergeBenefit){
            //首先移除后面item,否则会导致误删除其他的item
            if(newStaticIndex > oldStaticIndex){
                resources = packageUtil.removeByIndex(resources, newStaticIndex);
                resources = packageUtil.removeByIndex(resources, oldStaticIndex);
            }else{
                resources = packageUtil.removeByIndex(resources, oldStaticIndex);
                resources = packageUtil.removeByIndex(resources, newStaticIndex);
            }
            oldMergeStatic.mergeStatic(newMergeStatic, newMergeBenefit);
            resources.unshift(oldMergeStatic);
            mergePackage(originStatic, resources, mergedStatics);
        }else{
            originStatic.mergeStatic(oldMergeStatic, oldMergeBenefit);
            resources = packageUtil.removeByIndex(resources, oldStaticIndex);
            mergePackage(originStatic, resources, mergedStatics);
        }
    }
    return mergedStatics;
}

//module.exports.mergePackage = mergePackage;