var packageUtil = require("./util.js");

/**
 *
 * @param id
 * @param type 文件类型
 * @param hash
 * @param url
 * @param size
 * @param deps
 * @constructor
 */
var File = function(id, type, hash, url, size, deps){
    this.id = id;
    this.type = type;
    this.hash = hash;
    this.url = url;
    this.deps = deps;

    this.size = fixStaticSize(size);
    this.pages = {};
    this.loadType = "";
    this.pv = 0; //pv 表示为资源理论应该被被下载的次数
    this.module = parseModule(id);
    this.mergedStatic = [id];
    this.benefit = 0;
};

function parseModule(id){
    var modulePreg = /(\w+):[^:]*/,
        matchResult = id.match(modulePreg);
    if(matchResult){
        return matchResult[1];
    }
    return null;
}

function fixStaticSize(size){
    var size =  size / 1024;
    return size;
}

File.prototype.addPage = function(hash, pv){
    this.pages[hash] = pv;
}

File.prototype.addPv = function(value){
    this.pv += parseInt(value);
};

// loadType : sync和async, sync模式优先考虑
File.prototype.setLoadType = function(loadType){
    if(this.loadType != "sync"){
        this.loadType = loadType;
    }
}

/**
 * 合并静态资源 ：
 *   id ：
 *   size ： 相加
 *   pages ： 取并集
 *   pv ： pages并集的累加
 *   benefit ： 各自benefit + 合并benefit
 *   mergedStatic ： 数组合并排重
 *   loadType : 合并前已经按照loadType进行了分组，所以loadType都是相同不需要处理
 *   deps ： 不影响打包暂时不考虑
 * @param fileB
 * @param benefit
 */
File.prototype.mergeStatic = function(fileB, benefit){
    this.size = this.size + fileB.get("size");
    this.pages = fis.util.merge(this.pages, fileB.get("pages"));
    this.pv = 0;
    fis.util.map(this.pages, function(page, pv){
        this.pv = parseInt(this.pv) + parseInt(pv);
    }.bind(this));
    this.benefit += fileB.get("benefit") + benefit;
    this.mergedStatic = packageUtil.array_unique(this.mergedStatic.concat(fileB.get("mergedStatic")));
    var idTokens = fileB.get("id").split("/"),
        name = idTokens.pop();
    this.id = this.id + "_" + name;
}

File.prototype.get = function(key){
    return this[key];
}

module.exports = File;
