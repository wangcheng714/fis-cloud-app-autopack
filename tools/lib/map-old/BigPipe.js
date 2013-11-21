var BigPipe = function() {
    var idMaps = {};
    function ajax(url, cb, data) {
        var xhr = new (window.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP");

        xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
                cb(this.responseText);
            }
        };
        xhr.open(data?'POST':'GET', url + '&t=' + ~~(1e6 * Math.random()), true);

        if (data) {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(data);
    }


    function renderPagelet(obj, pageletsMap, rendered) {
        if (obj.id in rendered) {
            return;
        }
        rendered[obj.id] = true;

        if (obj.parent_id) {
            renderPagelet(
                pageletsMap[obj.parent_id], pageletsMap, rendered);
        }

        //
        // 将pagelet填充到对应的DOM里
        //
        var dom = document.getElementById(obj.id);
        var idMap = idMaps[obj.id];
        if (idMap && idMap.html_id) {
            dom = document.getElementById(idMap.html_id);
        }

        if (!dom) {
            dom = document.createElement('div');
            dom.id = obj.id;
            document.body.appendChild(dom);
        }

        dom.innerHTML = obj.html;

        var scriptText = dom.getElementsByTagName('script');
        for (var i = scriptText.length - 1; i >= 0; i--) {
            node = scriptText[i];
            text = node.text || node.textContent || node.innerHTML || "";
            window[ "eval" ].call( window, text );
        };
    }


    function render(pagelets) {
        var i, n = pagelets.length;
        var pageletsMap = {};
        var rendered = {};

        //
        // 初始化 pagelet.id => pagelet 映射表
        //
        for(i = 0; i < n; i++) {
            var obj = pagelets[i];
            pageletsMap[obj.id] = obj;
        }

        for(i = 0; i < n; i++) {
            renderPagelet(pagelets[i], pageletsMap, rendered);
        }
    }


    function process(data) {
        var rm = data.resource_map;

        if (rm.async) {
            require.resourceMap(rm.async);
        }

        function loadNext() {
            if (rm.style) {
                var dom = document.createElement('style');
                dom.innerHTML = rm.style;
                document.getElementsByTagName('head')[0].appendChild(dom);
            }
            render(data.pagelets);

            if (rm.js) {
                LazyLoad.js(rm.js, function() {
                    rm.script && window.eval(rm.script);
                });
            }
            else {
                rm.script && window.eval(rm.script);
            }
        }

        rm.css
            ? LazyLoad.css(rm.css, loadNext)
            : loadNext();
    }


    function asyncLoad(arg, param) {
        if (!(arg instanceof Array)) {
            arg = [arg];
        }
        var obj, arr = [];
        for (var i = arg.length - 1; i >= 0; i--) {
            obj = arg[i];
            if (!obj.id) {
                throw new Error('missing pagelet id');
            }

            idMaps[obj.id] = obj;
            arr.push('pagelets[]=' + obj.id);
        }

        var url = location.href.split('#')[0] + '&' + arr.join('&') + '&force_mode=1&is_widget=true' + '&' + param;

        ajax(url, function(res) {
            var data = window.JSON?
                JSON.parse(res) :
                eval('(' + res + ')');

            process(data);
        });
    }

    return {
        asyncLoad: asyncLoad
    }
}();


//test +lazyload.js
//document.write('<script src="lazyload.js"></script>');

//test 执行textarea的内容
/*window.onload = function() {
    var els = document.getElementsByClassName('g_fis_bigrender');
    for(var i = 0; i < els.length; i++) {
        window.eval(els[i].value);
    }
}*/
