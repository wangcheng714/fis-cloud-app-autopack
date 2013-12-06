var autoPackager = require("fis-auto-packager"),
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

function downloadSvn(svn, project, callback){
    var source = svnSource + project + "/",
        downloadCmd = "svn co " + svn + " " + source + " --non-interactive --trust-server-cert --username " + username + " --password " + password;

    if(fis.util.exists(source)){
        fis.util.del(source);
    }
    exec(downloadCmd, function(error, stdout, stderr){
        callback(stderr, source); 
    });
}

function buildProject(svn, project, callback){
    downloadSvn(svn, project, function(error, source){
        if(error){
            callback(error, null); 
        }else{
            var shFile = source + "auto-package.sh",
                buildCmd = "sh " + shFile;
            if(fis.util.exists(shFile)){
                var options = {
                    cwd : source
                };
                exec(buildCmd, options, function(error, stdout, stderr){
                    var outputDir = source + "output/";
                    callback(stderr, outputDir);                
                }); 
            }else{
                callback(shFile + " not exist!", null);
            }
        }
    });
}

//todo : 是否需要添加时间戳

module.exports = function(req, res, app){
    initViews(app);
    if(req.method == "GET"){
        res.render("package");
    }else if(req.method == "POST"){
        var svn = req.param("svn"),
            project = req.param("project");

        buildProject(svn, project, function(error, outputDir){
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
                autoPackager.package(outputDir, resultDir, project, url, function(error, result){
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
