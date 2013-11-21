{%style id="/widget/streetview/streetview.inline.less"%}#main {
  position: relative;
}
#main #street-holder {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 51px;
  overflow: hidden;
  z-index: 0;
}
#main #street-holder .sc {
  width: 100%;
  height: 100%;
  position: relative;
}
#main #street-holder #streetview-container {
  width: 100%;
  height: 100%;
}
#main #street-holder #eagleeye-container {
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 100px;
  height: 100px;
  background: red;
  z-index: 21;
  /*显示再街景组件之上*/

  border: 1px solid #adadad;
  background: #fff;
}
#main #street-holder #eagleeye-map {
  position: absolute;
  right: 1px;
  top: 1px;
  left: 1px;
  bottom: 1px;
  border: 1px solid #adadad;
}
#main #street-holder .mode {
  position: absolute;
  left: 5px;
  bottom: 120px;
  width: 37px;
  height: 37px;
  -webkit-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 21;
}
#main #street-holder .night {
  background-image: url(/static/common/images/night_67bc519.png);
}
#main #street-holder .day {
  background-image: url(/static/common/images/day_94cdb19.png);
}
#main #street-holder #eagleeye-container.exp {
  width: auto !important;
  right: 5px;
}
#main #street-holder .addr {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: none;
  background: #6a6d70;
  z-index: 21;
  border-radius: 3px;
  font-size: 16px;
  line-height: 34px;
  color: #fffef3;
  padding: 0 10px;
}
#back_nav.hide,
#iscroll-container.hide {
  display: none !important;
}
.common-widget-footer {
  display: none;
}
.common-widget-popup {
  z-index: 100;
}
{%/style%}<div id="street-holder">
    <div class="sc">
        <div id="streetview-container"></div>
        <div id="eagleeye-container">
            <div id="eagleeye-map"></div>
        </div>
        <div class="mode"></div>
        <span class="addr"></span>
    </div>
</div>