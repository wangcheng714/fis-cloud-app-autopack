{%style id="/widget/seacrhnave/seacrhnave.inline.less"%}.place-widget-seacrhnave {
  /*
     * @fileoverview 搜索框样式 选择器命名均以se开头
     * author: jican
     * date: 2013/01/22
     */

  /* 搜索框Tab切换 end */

  /* 搜索框外框 start */

  /* 搜索框外框 end */

  /* 搜索框内框 start */

  /* 搜索框选择城市 start */

  /* 搜索框选择城市 end */

  /**
     * @fileOverview 搜索框线路部分样式
     */

  /*
    #se_dir_reverse .btn-icon{
        background-position: 0 -268px;
        height: 25px;
        margin: 3px 4px;
    }
    */

}
.place-widget-seacrhnave .pagebody {
  /*min-height: 563px;*/

}
.place-widget-seacrhnave .se-box {
  width: 100%;
  background-color: #fff;
}
.place-widget-seacrhnave .se-box .ipt-icon {
  position: absolute;
  top: 6px;
  left: 6px;
  width: 19px;
  height: 19px;
  color: #FFF;
  font-size: 12px;
  border-radius: 2px;
  line-height: 19px;
}
.place-widget-seacrhnave .se-box .ipt-icon.start {
  background-color: #62B211;
}
.place-widget-seacrhnave .se-box .ipt-icon.end {
  background-color: #F50;
}
.place-widget-seacrhnave .se-wrap {
  /*border-bottom: 1px solid #cecece;background-color: #ededed;*/

  position: relative;
}
.place-widget-seacrhnave .se-wrap .se-poi-form {
  height: 36px;
  background-color: #ffffff;
  position: relative;
}
.place-widget-seacrhnave .se-wrap .btn-clear {
  position: absolute;
  right: 0.286em;
  top: 50%;
  margin-top: -0.714em;
  width: 1.464em;
  height: 1.464em;
  display: none;
  background-position: 0 -5.964em;
  z-index: 100000;
}
.place-widget-seacrhnave .se-wrap input {
  width: 100%;
  height: 100%;
  /*padding-left:0.25em;*/

  color: #333333;
  border: none;
  background: none;
}
.place-widget-seacrhnave .se-wrap input.geo {
  color: #4C78CE;
}
.place-widget-seacrhnave #se_dir {
  padding: 8px;
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.18);
  top: 1px;
  position: relative;
  height: 79px;
}
.place-widget-seacrhnave .se-inner {
  height: 32px;
  padding-left: 26px;
  position: relative;
  background: #FFF;
  border: 1px solid #D9D9D9;
  width: auto;
  left: 0px;
  top: 2px;
}
.place-widget-seacrhnave .se-poi-form input {
  padding: 5px;
  height: 27px;
  /*line-height: 27px;*/

}
.place-widget-seacrhnave .se-poi table {
  border: 1px solid #9a9a9a;
  background: #fff;
}
.place-widget-seacrhnave #se_poi_submit {
  height: 36px;
  width: 49px;
  border-left: 1px solid #9a9a9a;
  background: -webkit-gradient(linear, 0 100%, 0 0, from(#e7e7e7), to(#f5f5f5));
}
.place-widget-seacrhnave #se_poi .active {
  background: none;
  background-color: #e7e7e7;
}
.place-widget-seacrhnave .se-btn b {
  display: inline-block;
  width: 23px;
  height: 23px;
  margin-top: 6px;
  margin-left: 14px;
  background: url(/static/index/images/search_ico_0190136.png) no-repeat;
  /*    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAADdklEQVR42tWZD2hNcRTH790wGLRGhEx7BSEWVVoLQAjAbEsQVaOiNQClDAWKUImNDLZFGSoWYKmUFrIFwZRYM2+8F0bzPe2o9fJ+f+793bfr1Kfi/O719bvnd37nnGfPzV5ptaVdLD7u6Lk46z+1dg6f6whGg6FgAOgObBAEteAZeAB++kF4AsgEWWA8/1lkjeAGuAJKQcikcJVQaQ/WgTfgFJimIJqsG5gPCsE7sBl0ipVwCocqcAD0dvHvJIECDqFxXgvPBZUcx6YsBVSATV4J3wmOgA4enKt4sIvfb5sUvhFsiUFGy+UQNCJ8Bu9GrGztvJxVS9wK7wmKFD/fd3AWZIMA6MLP9QJTeCc/KWo4CvED3QjfC5IVniniSycHnAOvQJh9dZy78wCJ2aZwCSWCg06FDwGyT/YDUGGzXHE3w3zIJ4CPkrWzsetjnQjPk6TG32AROOEgHCs5dwcl69brCu/MokS2A1x2cQhrOLSaBWumY9eTdYRPBl0Fa56DPQYyyFVQIikt5ugIl13BlCGaDKW/Aol/oo7wUQL/L3DBYN5+Ap4K/MN0hAcE/sfgi+FL557AF9ARniTw13pwW74XNSg4oImqwkU1coMHwj+baG7iWt160epo0yZ7Z5Oq8HqBv78HwkXvDKPrD6kKfyHwjwA9DAvPEPhe6hzOh5KiP9Og6DRJR/VIR/htyZp8xeZYxTZI/Ld0hN+UnPRUEz0iX+eimojK33Id4fRAsWTdVjDLhejhPNoQWRkOZoOOcLL9fL2LYr2UKzxdGwOu85wlmjVzI6Ndj7/lrltk1PGf4a4nVeHdlI12g/sKM5nT2O0qp63bdsl1/NcWg2r6tGAp/ycS+Kv0pboaHAKveWKgMuIo1P2MdsSYOYMPa7wVW/tALR52vcbpeOIuWCbpVLywPrRhKLAGuxkIURyv5j7Tt+KjNcjHwEKrZVTsS/Gizv4SX9F3DAr7Zkq8bMxMwx4a4mdJWi6ZUfG0AvTj9OhavMpgnw7qea4UJ4GTnAVkVsfnZSYYxCkvyOnStXjbxa9ulL/ppSlWyxiNLMR3QTWPNaJlJxqHXAPpTlOl3YY/F+qIp80YCfH1OqHilX3VCBs6G2t0Y9wv4tP8JJx+WVYV3+gr4RriS3wnPEJ8xT/c++Av96XwVuKnggXgMDcX6fj7/Mi1fwB+qdLHhB0tNQAAAABJRU5ErkJggg==") no-repeat;*/

  background-size: 23px 23px;
}
.place-widget-seacrhnave .se-city {
  height: 36px;
  display: -webkit-box;
  width: 68px;
  -webkit-box-align: center;
  z-index: 10000;
  line-height: 36px;
}
.place-widget-seacrhnave .se-city span {
  display: inline-block;
  height: 22px;
  line-height: 22px;
  white-space: nowrap;
  /*background-color: #efefef;*/

  max-width: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #343434;
  -webkit-border-radius: 3px;
  padding: 0 20px 0 5px;
  position: relative;
}
.place-widget-seacrhnave .se-city span:after {
  content: "";
  position: absolute;
  width: 7px;
  height: 4px;
  top: 9px;
  right: 8px;
  background: url("data:image/gif;base64,R0lGODlhDQAHAIABAJqamv///yH5BAEAAAEALAAAAAANAAcAAAIPhI8XyeGs3GtSpoojrmAXADs=") no-repeat;
  background-size: 7px 4px;
}
.place-widget-seacrhnave .route-pic {
  background: url(/static/index/images/2_0fcd474.png) no-repeat;
  /*background: url("data:image/png;base64,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") no-repeat;*/

  background-size: 20px 156px;
}
.place-widget-seacrhnave .se-dir-form {
  position: relative;
}
.place-widget-seacrhnave .se-dir-form input {
  height: 2.071em;
}
.place-widget-seacrhnave #se_dir_submit {
  width: 35px;
  height: 70px;
  border: 1px solid #9a9a9a;
  background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#f7f6f6), to(#dfdfdf), color-stop(0.5, #eeeeee));
  margin-left: 6px;
  vertical-align: middle;
}
.place-widget-seacrhnave #se_dir_reverse {
  margin-right: 15px;
  margin-left: 6px;
}
.place-widget-seacrhnave #se_dir_reverse.active {
  background: #e7e7e7;
  -webkit-box-shadow: inset 0px 0px 2px #e3e3e3;
}
.place-widget-seacrhnave .se-rev-icon {
  border: 1px solid #D9D9D9;
  width: 34px;
  height: 40px;
  margin-top: 4px;
  background-image: url("http://s1.map.bdimg.com/mobile/static/common/ui/images/ui3/reverse_6baf6812.png");
  background-size: 34px 40px;
}
.place-widget-seacrhnave .tactics {
  display: -webkit-box;
  border-top: 1px solid #E5E5E5;
  border-bottom: 1px solid #B9B9B9;
  height: 49px;
  font-size: 15px;
  color: #636363;
  height: 48px;
  line-height: 48px;
  background-color: #F9F9F9;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.18);
}
.place-widget-seacrhnave .se-bus-btn,
.place-widget-seacrhnave .se-drive-btn,
.place-widget-seacrhnave .se-walk-btn {
  color: #636363;
  display: block;
  width: 32%;
  height: 100%;
  text-align: center;
  -webkit-box-flex: 1;
}
.place-widget-seacrhnave .se-bus-btn {
  border-right: 1px solid #E5E5E5;
}
.place-widget-seacrhnave .se-drive-btn {
  border-right: 1px solid #E5E5E5;
}
.place-widget-seacrhnave .se-bus-btn.active {
  background: #f5f6f7;
}
.place-widget-seacrhnave .se-drive-btn.active {
  background: #f5f6f7;
}
.place-widget-seacrhnave .se-walk-btn.active {
  background: #f5f6f7;
}
.place-widget-seacrhnave .se-bus-btn .se-bus-icon {
  display: inline-block;
  margin-right: 9px;
  height: 14px;
  width: 14px;
  vertical-align: middle;
  margin-top: -5px;
  background-position: 1px -81px;
}
.place-widget-seacrhnave .se-drive-btn .se-drive-icon {
  display: inline-block;
  margin-right: 9px;
  height: 14px;
  width: 14px;
  vertical-align: middle;
  margin-top: -5px;
  background-position: 0 -98px;
}
.place-widget-seacrhnave .se-walk-btn .se-walk-icon {
  display: inline-block;
  margin-right: 7px;
  height: 14px;
  width: 14px;
  vertical-align: middle;
  margin-top: -5px;
  background-position: 0 -137px;
}
.place-widget-seacrhnave .se-tabgroup .active {
  background-color: #373b42;
}
.place-widget-seacrhnave .route-wrapper {
  padding: 10px 8px;
  color: #515a64;
}
.place-widget-seacrhnave .route-wrapper .nb-station {
  font-size: 13px;
}
.place-widget-seacrhnave .route-wrapper .st {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid #adadad;
  background: -webkit-gradient(linear, 0 100%, 0 0, from(#f5f6f8), to(#fbfbfb));
  margin-left: -4px;
  /*弥补缺了一小块*/

}
.place-widget-seacrhnave .route-wrapper .sw-btn {
  margin-top: 14px;
  height: 33px;
  line-height: 33px;
  border: 1px solid #adadad;
  font-size: 14px;
  text-align: center;
  border-radius: 2px;
  background: -webkit-gradient(linear, 0 100%, 0 0, from(#f1f1f1), to(#f8f8f8));
}
.place-widget-seacrhnave .route-wrapper .sw-btn.active {
  background: #F2F2F2;
}
.place-widget-seacrhnave .route-wrapper .sw-btn em {
  display: inline-block;
  width: 14px;
  height: 16px;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 7px;
  background-position: 0px -117px;
}
{%/style%}<div class="pagebody place-widget-seacrhnave">
    <div id="se_box" class="se-box">
        <div id="se_wrap" class="se-wrap">
            <div id="se_dir">
                <table>
                    <tr>
                        <td>
                            <div id="se_dir_reverse" class="se-btn">
                                <div class="route-pic se-rev-icon"></div>
                            </div>
                        </td>
                        <td width="100%">
                            <div class="se-inner" style="margin-bottom: 6px;">
                                <em class="ipt-icon start">起</em>
                                <form id="se_start_form" class="se-dir-form">
                                    <input type="text" key="start" id="se_txt_start" class="se_txt_start" style="position: absolute; top: 0px; left: 0px; width: auto; right: 40px;">
                                </form>
                            </div>
                            <div class="se-inner">
                                <em class="ipt-icon end">终</em>
                                <form id="se_end_form" class="se-dir-form">
                                    <input type="text" key="end" id="se_txt_end" class="se_txt_end"/>
                                </form>
                            </div>
                        </td>
                    </tr>
                </table>              
            </div>
            <div class='tactics' style="text-align:center;"> 
                 <span class="se-bus-btn se-btn-tr" data-value="1"><em class="route-pic se-bus-icon"></em>公交</span>
                 <span class="se-drive-btn se-btn-tr" data-value="2"><em class="route-pic se-drive-icon"></em>驾车</span> 
                 <span class="se-walk-btn se-btn-tr" data-value="3"><em class="route-pic se-walk-icon"></em>步行</span>
          </div> 
        </div>
    </div>
</div>
{%script%}
    (require("index:widget/seacrhnave/seacrhnave.js")).init();
{%/script%}