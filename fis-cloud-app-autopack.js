var autoPackager = require("fis-auto-packager");

function initViews(app){
    app.engine('.html', require('ejs').__express);
    app.set('views', __dirname + "/template");
    app.set('view engine', 'html');
}

function downloadSvn(svn, project){
    var source = "";
    //todo : download work
    return source;
}

function buildProject(svn, project){
    var source = downloadSvn(svn, project),
        output = "C:/Users/wangcheng/AppData/Roaming/npm/node_modules/fis-cloud/node_modules/fis-cloud-kernel/node_modules/fis-cloud-app-autopack/node_modules/fis-auto-packager/test/reference/map-batman-old/output";

    //todo : build source
    return output;
}

//todo : 是否需要添加时间戳
var resultDir = __dirname + "/package_result/"

module.exports = function(req, res, app){
    initViews(app);
    if(req.method == "GET"){
        res.render("package");
    }else if(req.method == "POST"){
        var svn = req.param("svn"),
            project = req.param("project");

        var outputSource = buildProject(svn, project),
            descriptions = {
                "urlPv" : "url的pv统计文件",
                "staticUrlMap" : "url使用静态资源的情况统计表",
                "packagePredict" : "打包结果预测",
                "packageConf" : "打包配置文件"
            };

        autoPackager.package(outputSource, resultDir, project, null, function(error, result){
            res.render("result", {
                "descs" : descriptions,
                "files" : result
            });
        })
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