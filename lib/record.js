
var Record = function(hash, sync, async, pv, url){
    this.hash = hash;
    this.sync = sync;
    this.async = async;
    this.pv = pv;
    this.url = url;
    //去除async中已经存在sync中的资源
    this.async = remove_intersect(this.sync, this.async);
}

Record.prototype.get = function(key){
    return this[key];
}


function remove_intersect(array1, array2){
    for(var i=0; i<array1.length; i++){
        var index = fis.util.array_search(array1[i], array2)
        if(index){
            array2.splice(index, 1);
        }
    }
    return array2;
}

module.exports = Record;
