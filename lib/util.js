
module.exports.array_intersect_key = function (arr1) {
    var retArr = {},
        argl = arguments.length,
        arglm1 = argl - 1,
        k1 = '',
        arr = {},
        i = 0,
        k = '';

    arr1keys: for (k1 in arr1) {
        arrs: for (i = 1; i < argl; i++) {
            arr = arguments[i];
            for (k in arr) {
                if (k === k1) {
                    if (i === arglm1) {
                        retArr[k1] = arr1[k1];
                    }
                    continue arrs;
                }
            }
            continue arr1keys;
        }
    }

    return retArr;
}

module.exports.array_diff_key  = function(arr1) {
    var argl = arguments.length,
        retArr = {},
        k1 = '',
        i = 1,
        k = '',
        arr = {};

    arr1keys: for (k1 in arr1) {
        for (i = 1; i < argl; i++) {
            arr = arguments[i];
            for (k in arr) {
                if (k === k1) {
                    continue arr1keys;
                }
            }
            retArr[k1] = arr1[k1];
        }
    }
    return retArr;
}

module.exports.removeByIndex = function(arr, index){
    arr.splice(index, 1);
    return arr;
};

module.exports.array_unique = function(arr) {
    var newArr = [],
        map = {};
    for(var i=0; i<arr.length; i++){
        if(typeof map[arr[i]] == "undefined"){
            newArr.push(arr[i]);
            map[arr[i]] = 1;
        }
    }
    return newArr;
}

module.exports.trim = function(str){
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
}

