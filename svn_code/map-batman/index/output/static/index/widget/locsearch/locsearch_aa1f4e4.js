define("index:widget/locsearch/locsearch.js",function(e,t,o){var a=$(".index-widget-locsearch"),r="输入城市或者其他位置",n=e("common:widget/geolocation/location.js"),i=e("common:widget/url/url.js"),c="_refer_query",l="_refer_pagestate";o.exports.init=function(){u(),s()};var u=function(){var e=$("#search-input"),t=a.find("#search-button"),o=a.find("form");e.on("focus",$.proxy(d,this)),e.on("blur",f),e.on("foucs",d),t.on("click",p),o.on("submit",p)},s=function(){window.localStorage.removeItem(c),window.localStorage.removeItem(l)},d=function(e){var t=$(e.target);t.val()===r&&(t.val(""),t.removeClass("ipt"))},f=function(e){var t=$(e.target);""===$.trim(t.val())&&(t.val(r),t.addClass("ipt"))},g=function(e){var t={qt:"s",wd:$.trim(e),c:n.getCityCode()};return t},p=function(e){var t=$("#search-input"),o=t.val(),a=g(o),r=i.get().pageState||{};window.localStorage.setItem(c,r.refer_query),window.localStorage.setItem(l,r.refer_pagestate),i.update({module:"place",action:"selectpoint",query:a,pageState:{}},{queryReplace:!0,pageStateReplace:!0}),e.preventDefault()}});