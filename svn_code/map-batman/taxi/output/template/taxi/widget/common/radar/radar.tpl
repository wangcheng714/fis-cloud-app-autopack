{%style id="/widget/common/radar/radar.inline.less"%}.taxi-widget-radar{visibility:hidden;position:absolute;width:100%;top:50px;display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;box-align:center;box-pack:center;display:-o-box;display:box;background:url(/static/taxi/widget/common/radar/images/bg_852f82d.png) no-repeat center center;background-size:cover}.taxi-widget-radar .inner{width:184px;height:184px;margin:0 auto;background:url(/static/taxi/widget/common/radar/images/radar_b40b7b3.png) no-repeat center center;background-size:184px 1656px}{%/style%}<div class="taxi-widget-radar">
<div class="inner"></div>
</div>
{%script%}
require('taxi:widget/common/radar/radar.js').init();
{%/script%}