//todo : 记录打包中的各个过程
var autoPackager = require("fis-auto-packager"),
    async = require("async"),
    exec = require("child_process").exec;

var svnSource = __dirname + "/svn_source/",
    resultDir = __dirname + "/package_result/",
    username = "wangcheng",
    password = "890714";

function initViews(app){
    app.engine('.html', require('ejs').__express);
    app.set('views', __dirname + "/template");
    app.set('view engine', 'html');
}

function buildProject(svns, project, callback){
    analyzeSvns(svns, project, function(error, source, modules){
        if(error){
            callback(error);
        }else{
            var shFile = source + "auto-pack.sh",
                buildCmd = "sh " + shFile;
            if(fis.util.exists(shFile)){
                var options = {
                    cwd : source
                };
                exec(buildCmd, options, function(error, stdout, stderr){
                    var outputDir = source + "output/";
                    callback(stderr, outputDir, modules);
                }); 
            }else{
                callback(shFile + " not exist!", null);
            }
        }
    });
}

function downloadSvn(svn, project, downloadDir, callback){
    var source = "";
    if(downloadDir){    
        source = downloadDir;
    }else{
        source = svnSource + project + "_" + getTimeStamp() + "/";
        //source = svnSource + project + "/";
    }
    var downloadCmd = "svn co " + svn + " " + source + " --non-interactive --trust-server-cert --username " + username + " --password " + password;


    if(fis.util.exists(source)){
        fis.util.del(source);
    }
    exec(downloadCmd, function(error, stdout, stderr){
        callback(stderr, source); 
    });
}

//不添加年和月避免路径过长，linux下 svn co失败
function getTimeStamp(){
	var date = new Date();
	return "" + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
}


var svn_num = 15;

function analyzeSvns(svns, project, callback){
    var svn = svns[0],
        tmptrunk = svn.replace(/branches/, "trunk"),
        tokens = tmptrunk.split("/");

    tokens.splice(tokens.length -2, 2);

    var trunkSvn = tokens.join("/"),
        modules = {},
        packageModules = [];

    for(var i=0; i<svns.length; i++){
        var svn = svns[i],
            svnTokens = svn.split("/"),
            namespace = svnTokens[svnTokens.length - 2];
        modules[namespace] = svn;
        packageModules.push(namespace);
    }

    downloadSvn(trunkSvn, project, null, function(error, source){
        var moduleDirs = [],
            downloadSvns = [];
        fis.util.map(modules, function(module, svn){
            var moduleDir = source + module;
            if(fis.util.exists(moduleDir)){
                moduleDirs.push(moduleDir);
                downloadSvns.push(svn);
                fis.util.del(moduleDir);
            }else{
                //todo
                console.log("do not find the svn module");
            }
        });
        var count = 0;
        async.whilst(
            function(){
                return count < moduleDirs.length;
            },
            function(callback){
                downloadSvn(downloadSvns[count], null, moduleDirs[count], callback);
                count++;
            },
            function(error){
                callback(error, source, packageModules);
            }
        );
    });
}

//todo : 1. 添加各种容错处理
//todo : 2. 通用性考虑，后续和持续集成app或者icafe结合
module.exports = function(req, res, app){
    initViews(app);
    if(req.method == "GET"){
        res.render("package");
    }else if(req.method == "POST"){
        var svns = [],
            project = req.param("project");
        for(var i=1; i<=svn_num; i++){
            var svn = req.param("svn" + i);
            if(svn){
                svns.push(svn);
            }
        }

        buildProject(svns, project, function(error, outputDir, modules){
            if(error){
                res.send(500, error);
            }else{
                var descriptions = {
                    "urlPv" : "url的pv统计文件",
                    "staticUrlMap" : "url使用静态资源的情况统计表",
                    "packagePredict" : "打包结果预测",
                    "packageConf" : "打包配置文件"
                };
                //todo : 测试阶段添加特殊url后续会删除
                var url = "http://wangcheng.fe.baidu.com/Fis_Static_Count.201311160000";
                autoPackager.package(outputDir, resultDir, project, modules, url, function(error, result){
                    res.render("result", {
                        "descs" : descriptions,
                        "files" : result
                    });
                })
            }
        });
    }
}

module.exports.download = function(req, res, app){
    var file = req.query.file;
    if(fis.util.exists(file)){
        res.download(file, function(err){
            if(err){
                console.log(err);
            }
        });
    }
}
