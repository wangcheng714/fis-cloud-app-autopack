define("taxi:widget/settings/settings.js",function(t,i,n){"use strict";var e=t("common:widget/cookie/cookie.js"),i=(t("common:widget/popup/popup.js"),{create:function(){var t=$(".taxi-widget-settings"),i=t.find(".input-phone"),n=t.find(".btn-modify"),o=t.find(".btn-help"),a=t.find(".btn-terms");i.val(e.get("BAIDU_TAXI_PHONE")),Taxi.validatePhone(i.val())||n.attr("disabled","disabled"),n.on("click",$.proxy(this.onBtnModifyClick,this)),i.on("keyup",$.proxy(this.onInputPhoneKeyup,this)),o.on("click",$.proxy(this.onArticleButtonClick,this)),a.on("click",$.proxy(this.onArticleButtonClick,this)),this.$el=t,this.$btnModify=n,this.$inputPhone=i},onArticleButtonClick:function(t){var i=t.currentTarget.className.split("-")[1];LoadManager.loadPage("about",{type:i})},onBtnModifyClick:function(){var t=this.$inputPhone.val();LoadManager.loadPage("verify",{phone:t,referrer:"settings"})},onInputPhoneKeyup:function(){Taxi.validatePhone(this.$inputPhone.val())?this.$btnModify.removeAttr("disabled"):this.$btnModify.attr("disabled","disabled")},init:function(){this.create()}});n.exports=i});