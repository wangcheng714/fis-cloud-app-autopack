{%style id="/widget/addestop/addestop.inline.less"%}.index-widget-addestop .adddesktop-con{position:fixed;left:3px;z-index:1000;box-shadow:0 0 20px #ccc;opacity:.9;border-radius:4px;background-color:#606060;color:#fff}.index-widget-addestop .adddesktop-con .adddesktop{width:175px;height:75px;position:relative;display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-pack:center;-webkit-box-align:center}.index-widget-addestop .adddesktop-con .adddesktop .appicon{width:46px;height:46px;background:url(/static/index/images/appicon_c52d7f3.png) no-repeat;margin-right:6px;display:inline-block;background-size:46px 46px}.index-widget-addestop .adddesktop-con .adddesktop .adddesktop-con-star{height:20px;width:20px;display:inline-block;background-size:20px 20px;margin-left:3px;vertical-align:top;line-height:20px}.index-widget-addestop .ucaddbg{background:url(/static/index/images/ucaddbg_6e28e6a.png) no-repeat}.index-widget-addestop .iphoneaddbg{background:url(/static/index/images/iphoneaddbg_5230857.png) no-repeat}.index-widget-addestop .ios7addbg{background:url(/static/index/images/iosaddbg_786f6f3.png) no-repeat}.index-widget-addestop .adddesktop-con .adddesktop .txt{height:22px;line-height:22px;display:inline-block;float:left}.index-widget-addestop .adddesktop-con .adddesktop #adddesktop-con-tip{border-color:transparent transparent #606060;border-style:dashed dashed solid;border-width:10px;position:absolute;line-height:0;left:10px;top:-19px;-webkit-transform:rotate(1deg)}.index-widget-addestop #adddestop_close_con{position:absolute;top:10px;right:0;width:30px;height:30px}.index-widget-addestop .adddestop_close{display:block;margin:0 auto;width:11px;height:12px;background:url(/static/index/images/adddestop_close_4ee1f2e.png) no-repeat 0 0;background-size:11px 12px}{%/style%}
<div class="index-widget-addestop">
<hgroup class="adddesktop-con" id="adddesktop-con" style="display:none">
<section class="adddesktop">
<span id="adddesktop-con-tip"></span>
<span class="appicon"></span>
<article>
<header>
<span class="txt">先点击</span>
<span id="adddesktop-con-star"></span>
</header>
<footer>
<span class="txt" id="addestop">再" 发送至桌面"</span>
</footer></article>
<section id="adddestop_close_con">
<span class="adddestop_close"></span>
<section>
</section>
</hgroup>
</div>
{%script%}
    (require("index:widget/addestop/addestop.js")).init();
{%/script%}