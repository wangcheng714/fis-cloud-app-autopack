define("place:static/lib/template.js",function(){window.baidu=window.baidu||{},baidu.template=baidu.template||{},baidu.template._encodeHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\\/g,"&#92;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},baidu.template._encodeEventHTML=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\\\\/g,"\\").replace(/\\\//g,"/").replace(/\\n/g,"\n").replace(/\\r/g,"\r")}});