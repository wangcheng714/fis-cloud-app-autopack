
var async = require('async'),
    fs = require("fs"),
    dir = __dirname + "/files/";

function testReadFile(filename, callback){
    var file = dir + filename;
    fs.readFile(file, function(error, content){
        console.log(content);
        callback(error, content);
    });
}



var files = ["1.json","2.json","3.json","4.json", "5.json"];

var count = 0;

async.whilst(
    function(){
        console.log(count);
        return count < files.length;
    },
    function(callback){
        testReadFile(files[count], callback);
        count++;
    },
    function(error, results){
        console.log(error);
        console.log(results);
    }
)