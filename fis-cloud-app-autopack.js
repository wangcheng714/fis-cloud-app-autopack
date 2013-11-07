
var svnPath = "http://baidu.com/repos/doc/wangcheng/map-batman/common",
    moduleName = "common";

var exec = require("child_process").exec,
    request = require("request"),
    File = require("./lib/file.js");



function buildModule(svnPath, moduleName, callback){
    var svnCommand = "svn co " + svnPath + " " + moduleName,
        fisCommand = "cd " + moduleName + ";fisp release " + moduleName;

    exec(svnCommand, function(error, stdout, stderr){

        if(error){
            //todo error handle
            console.log(stderr);
            callback(stderr);
        }else{
            exec(fisCommand, function(error, stdout, stderr){
                if(error){
                    //todo error handle
                    console.log(stderr);
                    callback(stderr);
                }else{
                    callback(null);
                }
            });
        }
    });
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
        logTime = miniteDate(3),
        logUrl = logUrlPrefix + logTime;

    request(logUrl, function(error, response, body){
        if(error){
            callback(error);
        }else{
            console.log(body);
        }
    });
}


module.exports.getLogData = getLogData;