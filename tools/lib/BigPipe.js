var BigPipe = function() {

    var pagelets = [],
        container,
        containerId,
        onReady;

    function parseJSON (json) {
        return window.JSON? JSON.parse(json) : eval('(' + json + ')');
    }


    function ajax(url, cb, data) {
        var xhr = new (window.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP");

        xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
                cb(this.responseText);
            }
        };
        xhr.open(data?'POST':'GET', url + '&t=' + ~~(Math.random() * 1e6), true);

        if (data) {
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send(data);
    }

    function getCommentById(html_id) {
        //
        // 取出html_id元素内保存的注释内容
        //
        var dom = document.getElementById(html_id);
        if (!dom) {
            throw Error('[BigPipe] Cannot find comment `' + html_id + '`');
        }
        var html = dom.firstChild.nodeValue;
        html = html.substring(1, html.length - 1).
            replace(/\\([\s\S]|$)/g,'$1');
        dom.parentNode.removeChild(dom);
        return html;
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
        if (!dom) {
            dom = document.createElement('div');
            dom.id = obj.id;
            if (container) {
                container.appendChild(dom);
            } else {
                document.body.appendChild(dom);
            }
        }

        dom.innerHTML = obj.html || getCommentById(obj.html_id);
    }


    function render() {
        var i, n = pagelets.length;
        var pageletsMap = {};
        var rendered = {};

        //
        // pagelet.id => pagelet 映射表
        //
        for(i = 0; i < n; i++) {
            var obj = pagelets[i];
            pageletsMap[obj.id] = obj;
        }

        for(i = 0; i < n; i++) {
            renderPagelet(pagelets[i], pageletsMap, rendered);
        }
    }


    function process(rm, cb) {
        if (rm.async) {
            require.resourceMap(rm.async);
        }

        function loadNext() {
            if (rm.style) {
                var dom = document.createElement('style');
                dom.innerHTML = rm.style;
                document.getElementsByTagName('head')[0].appendChild(dom);
            }

            cb();

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
            ? LazyLoad.css(rm.css.reverse(), loadNext)
            : loadNext();
    }

    function init(arg) {

    }

    /**
     *
     */
    function register(obj) {
        process(obj, function() {
            render();
            onReady();
        });
    }

    function fetch(url, id) {
        //
        // Quickling请求局部
        //
        containerId = id;
        ajax(url, function(data) {
            if (id == containerId) {
                var json = parseJSON(data);
                onPagelets(json, id);
            }
        });
    }

    function refresh(url, id) {
        fetch(url, id);
    }

    /**
     * 异步加载pagelets
     */
    function asyncLoad(pageletIDs) {
        if (!(pageletIDs instanceof Array)) {
            pageletIDs = [pageletIDs];
        }

        var i, args = [];
        for(i = pageletIDs.length - 1; i >= 0; i--) {
            var id = pageletIDs[i].id;
            if (!id) {
                throw Error('[BigPipe] missing pagelet id');
            }
            args.push('pagelets[]=' + id);
        }

        var url = location.href.split('#')[0] +
            (location.search? '&' : '?') + "fis_widget=true&" + args.join('&');



        // 异步请求pagelets
        ajax(url, function(res) {
            var data = parseJSON(res);
            pagelets = data.pagelets;
            process(data.resource_map, function() {
                render();
            });
        });
    }

    /**
     * 添加一个pagelet到缓冲队列
     */
    function onPageletArrived(obj) {
        pagelets.push(obj);
    }

    function onPagelets(obj, id) {
        //
        // Quickling请求响应
        //
        if (obj.title) {
            document.title = obj.title;
        }

        //
        // 清空需要填充的DOM容器
        //
        container = document.getElementById(id);
        container.innerHTML = '';
        pagelets = obj.pagelets;

        process(obj.resource_map, function() {
            render();
        });
    }

    function onPageReady(f) {
        onReady = f;
    }

    function onPageChange(pid) {
        fetch(location.pathname +
            (location.search? location.search + '&' : '?') + 'pagelets=' + pid);
    }


    // -------------------- 事件队列 --------------------
    var SLICE = [].slice;
    var events = {};

    function trigger(type /* args... */) {
        var list = events[type];
        if (!list) {
            return;
        }

        var arg = SLICE.call(arguments, 1);
        for(var i = 0, j = list.length; i < j; i++) {
            var cb = list[i];
            if (cb.f.apply(cb.o, arg) === false) {
                break;
            }
        }
    }

    function on(type, listener, context) {
        var queue = events[type] || (events[type] = []);
        queue.push({f: listener, o: context});
    }


    return {
        init: init,
        asyncLoad: asyncLoad,
        register: register,
        refresh: refresh,

        onPageReady: onPageReady,
        onPageChange: onPageChange,

        onPageletArrived: onPageletArrived,
        onPagelets: onPagelets,
        on: on
    }
}();
