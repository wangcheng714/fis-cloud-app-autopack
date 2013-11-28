//todo : download shell copy old version
var File = require("./lib/file.js"),
    Record = require("./lib/record.js"),
    packager = require("./packager/profitPackager.js"),
    packageUtil = require("./lib/util.js");
    JsonUtil = require("./lib/jsonUtil.js"),
    fs = require("fs"),
    request = require("request"),
    AdmZip = require('adm-zip'),
    zip = new AdmZip();

var depsTable = {},
    handleingDeps = {},
    hashTable = {},
    resources = {};

//todo 正式版本去除到
var fis = require("C:/Users/wangcheng/AppData/Roaming/npm/node_modules/fis-cloud/node_modules/fis-cloud-kernel/fis-cloud-kernel.js");



function mergeDeps(deps1, deps2){
    if(deps1["deps"] || deps2["deps"]){
        deps1["deps"] = deps1["deps"] ? deps1["deps"].concat(deps2["deps"]) : deps2["deps"].concat(deps1["deps"]);
    }
    if(deps1["async"] || deps2["async"]){
        deps1["async"] = deps1["async"] ? deps1["async"].concat(deps2["async"]) : deps2["async"].concat(deps1["async"]);
    }
    return deps1;
}

function _getDeps(file, filetype, files){
    var deps = {};
    if(handleingDeps[file]){
        return {};
    }else if(depsTable[file] ){
        return depsTable[file];
    }else{
        var fileinfo = files[file];
        handleingDeps[file] = true;
        if(fileinfo){
            if(fileinfo["deps"]){
                for(var i=0; i<fileinfo["deps"].length; i++){
                    deps = mergeDeps(deps, _getDeps(fileinfo["deps"][i], "deps", files, deps));
                }
                if(filetype != "async"){
                    if(deps["deps"]){
                        deps["deps"] = deps["deps"].concat(fileinfo["deps"]);
                    }else{
                        deps["deps"] = fileinfo["deps"];
                    }
                }else{
                    if(deps["async"]){
                        deps["async"] = deps["async"].concat(fileinfo["deps"]);
                    }else{
                        deps["async"] = fileinfo["deps"];
                    }
                }
            }
            if(fileinfo["extras"] && fileinfo["extras"]["async"]){
                for(var i=0; i<fileinfo["extras"]["async"].length; i++){
                    deps = mergeDeps(deps, _getDeps(fileinfo["extras"]["async"][i], "async",  files));
                }
                if(deps["async"]){
                    deps["async"] = deps["async"].concat(fileinfo["extras"]["async"]);
                }else{
                    deps["async"] = fileinfo["extras"]["async"];
                }
            }
        }
        if(deps["deps"]){
            deps["deps"] =  packageUtil.array_unique(deps["deps"]);
        }
        if(deps["async"]){
            deps["async"] = packageUtil.array_unique(deps["async"]);
        }
        depsTable[file] = deps;
        handleingDeps[file] = false;
        return deps;
    }
}

function getResource(dir){
    var configDir = dir + "/config";
    
    var configReg = /\w+\-map\.json$/,
        configFiles = fis.util.find(configDir, configReg),
        configRes = {},
        files = {};

    if(configFiles.length > 0){
        for(var i =0; i<configFiles.length; i++){
            var config = fis.util.readJSON(configFiles[i]),
                tmpRes = config["res"];
            configRes = fis.util.merge(configRes, tmpRes);
        }
        for(fileId in configRes){
            if(configRes.hasOwnProperty(fileId)){
                var fileProperty = configRes[fileId],
                    widgetPreg = /\w+\/widget\/.+\.tpl$/,
                    filepath;

                //widget page uri is different, so add template
                if(widgetPreg.test(fileProperty["uri"])){
                    filepath = dir + "/template/" + fileProperty["uri"];
                }else{
                    filepath = dir + "/" + fileProperty["uri"];
                }
                    
                var stat = fs.statSync(filepath),
                    filesize = stat["size"],
                    deps = [];

                if(depsTable[fileId]){
                    deps = depsTable[fileId];
                }else{
                    deps = _getDeps(fileId, "deps", configRes);
                }
                hashTable[fileProperty["hash"]] = {
                    "res" : deps,
                    "name" : fileId
                };
                files[fileId] = new File(fileId, fileProperty["type"], fileProperty["hash"], fileProperty["uri"], filesize, deps);
            }
        }
    }
    return files;
}

function miniteDate(num){
    var date = new Date();
    var yesterday_milliseconds=date.getTime()-1000*60*60*24*num;
    var yesterday = new Date();
    yesterday.setTime(yesterday_milliseconds);
    var strYear = yesterday.getFullYear();
    var strDay = yesterday.getDate();
    var strMonth = yesterday.getMonth()+1;
    if(strMonth<10){
        strMonth="0"+strMonth;
    }
    if(strDay<10){
        strDay="0"+strDay;
    }
    datastr = strYear+"-"+strMonth+"-"+strDay;
    return datastr;
}

function getLogData(callback){
    var logUrlPrefix = "http://logdata.baidu.com/?m=Data&a=GetData&token=ns_j0vmor9lig2czsfdk78ueqbh3yapw&product=ns&item=Fis_Static_Count&date=",
        logTime = miniteDate(7),
        logUrl = logUrlPrefix + logTime;
        logUrl = "http://wangcheng.fe.baidu.com/Fis_Static_Count.201311160000";

    request(logUrl, function(error, response, body){
        if(error){
            callback(error);
        }else{
            var records = processLogData(body);
            callback(null, records);
        }
    });
}

function processLogData(data){
    var lines = data.split(/\n|\r\n/),
        records = [];
    for(var i=0; i<lines.length; i++){
        if(packageUtil.trim(lines[i]) != ""){
            var urlTokens = lines[i].split(/\s+|\t/),
                statics = urlTokens[2].split(/,/),
                syncDepsRes = [],
                asyncDepsRes = [];
            for(var j=0; j<statics.length; j++){
                var resource = hashTable[statics[j]];
                if(resource){
                    syncDepsRes.push(resource["name"]);
                    if(resource["res"]["deps"]){
                        syncDepsRes = syncDepsRes.concat(resource["res"]["deps"]);
                    }
                    if(resource["res"]["async"]){
                        asyncDepsRes = asyncDepsRes.concat(resource["res"]["async"]);
                    }
                }
            }
            records.push(new Record(urlTokens[1], packageUtil.array_unique(syncDepsRes), packageUtil.array_unique(asyncDepsRes), urlTokens[3], urlTokens[4]));
        }
    }
    return records;
}

function printUrlPvs(records){
    var urlPvs = [],
        urlStrs = "",
        infoFile = __dirname + "/test/map-info.txt";
    fis.util.map(records, function(index, record){
        urlPvs.push({
            "url" : record.get("url"),
            "pv" : record.get("pv")
        });
    });
    urlPvs.sort(function(recordA, recordB){
        return recordB["pv"] - recordA["pv"];
    });
    fis.util.map(urlPvs, function(index, record){
        urlStrs += "\n" + record["url"] + "\t" + record["pv"];
    });
    fis.util.write(infoFile, urlStrs);
}

function build(dir){
    resources = getResource(dir);
    getLogData(function(error, records){
        printUrlPvs(records);
        for(var i=0; i<records.length; i++){
            var record = records[i],
                syncStatics = record.get("sync"),
                asyncStatics = record.get("async");

            for(var j=0; j<syncStatics.length; j++){
                var resource = resources[syncStatics[j]];
                if(resource){
                    resource.addPage(record.get("hash"), record.get("pv"));
                    resource.addPv(record.get("pv"));
                    resource.setLoadType("sync");
                }
            }
            for(var k=0; j<asyncStatics.length; k++){
                var resource = resources[asyncStatics[k]];
                if(resource){
                    resource.addPv(record.get("pv"));
                    resource.setLoadType("async");
                }
            }
        }
        createCsvFile(resources, records);

        var packageResults = packager.package(resources);
        createPackConf(packageResults);
    });
}

/**
 * @param resources
 *  数据结构 ：
 *      {"common_asnyc_js" : [pkg1,pkg2]}
 */
function createPackConf(resources){
    var packResults = {};

    fis.util.map(resources, function(packageKeyPrefix, packages){
        var tokens = packageKeyPrefix.split("_"),
            module = tokens[0],
            type = tokens[2];
        if(!packResults[module]){
            packResults[module] = {};
        }
        fis.util.map(packages, function(index, pkgFile){
            var files = pkgFile.get("mergedStatic"),
                packageKey = "pkg/" + packageKeyPrefix + "_" + index + "." + type;

            packResults[module][packageKey] = [];

            fis.util.map(files, function(index, file){
                packResults[module][packageKey].push(file.replace(/\w+:/, "/"));
            });

        })
    });

    fis.util.map(packResults, function(module, packResult){
        var packStr = JsonUtil.convertToString(packResult),
            //fileName = __dirname + "/test/pack/" + module + "/" + "fis-pack.json";
            fileName = module + "/" + "fis-pack.json";
        zip.addFile(fileName, new Buffer(packStr));
    });

    //todo : 路径正式化
    var zipFile = __dirname + "/test/pack/map.zip";
    zip.writeZip(zipFile);
}

function createCsvFile(resources, records){
    var csvHeader = " ,",
        csvBody = "",
        file = __dirname + "/test/staticUsed.csv";
    for(var i=0; i<records.length; i++){
        if(records[i].get("pv") > 0){
            csvHeader += records[i].get("hash") + "_" + records[i].get("pv") + ",";
        }
    }

    for(id in resources){
        var resource = resources[id];
        if(resource.get("type") == "js"){
            csvBody += resource.get("id");
            for(var j=0; j<records.length; j++ ){
                if(records[j].get("pv") > 0){
                    var urlHash = records[j].get("hash"),
                        pages = resource.get("pages");
                    if(pages[urlHash]){
                        csvBody += ",1";
                    }else{
                        csvBody += ", ";
                    }
                }
            }
            csvBody += "\n";
        }
    }
    fis.util.write(file, csvHeader + "\n" + csvBody);
}

module.exports.build = build;
