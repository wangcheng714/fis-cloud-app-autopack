{%style id="/widget/streetview/streetview.inline.less"%}.detail-widget-streetscape {
  background: -webkit-gradient(linear, 0 100%, 0 0, from(#eeeeee), to(#fdfdfd));
  border: 1px solid #838991;
  border-radius: .25em;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.143em;
  color: #333;
  text-align: center;
  cursor: pointer;
}
.detail-widget-streetscape a {
  display: block;
  padding: .4em 0;
}
.detail-widget-streetscape span.streetscape-icon {
  background: url(/static/place/images/place_streetscape_icon_6d073c4.png);
  background-size: 15px 20px;
  width: 15px;
  height: 20px;
  position: relative;
  top: 3px;
}
.detail-widget-streetscape span {
  display: inline-block;
}
{%/style%}<div class="detail-widget-streetscape" id="detail-streetscape">
    <a href="{%$street_url%}">
       <span class="streetscape-icon"></span>
       <span>进入全景</span>
   </a>
</div>
