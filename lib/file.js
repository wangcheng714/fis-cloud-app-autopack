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
    this.size = size;
    this.deps = deps;

    this.loadType = "";
    this.pv = 0; //pv 表示为资源理论应该被被下载的次数
    this.module = parseModule(id);
};

function parseModule(id){
    var modulePreg = /(\w+):[^:]*/,
        matchResult = id.match(modulePreg);
    if(matchResult){
        return matchResult[1];
    }
    return null;
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

File.prototype.get = function(key){
    return this[key];
}

module.exports = File;
