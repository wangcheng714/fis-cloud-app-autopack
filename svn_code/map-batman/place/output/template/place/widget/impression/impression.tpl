{%style id="/widget/impression/impression.inline.less"%}.place-widget-cater{border-bottom:1px solid #e1e1e1}.place-widget-cater h2{margin:0 5px 15px;font-size:16px;color:#303235;line-height:1.2}.place-widget-cater ul{list-style:none;margin:0 22px 9px;color:#c46221}.place-widget-cater ul li{background-color:#fbf7e9;display:inline-block;height:25px;line-height:25px;margin-bottom:10px;margin-right:7px;padding:0 5px;border:solid 1px #f1d1b5;border-radius:3px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.place-widget-cater ul li em{background-color:#f0e5c0;width:16px;height:16px;margin-left:5px;border-radius:16px;line-height:16px;vertical-align:2px;font-size:10px;font-style:normal;text-align:center}{%/style%}{%* 餐饮大家印象widget *%}
{%if ($data.widget.impression)%}
<div class="place-widget-cater">
<h2>大家印象</h2>
<ul>
{%foreach from=$widget_data item=data%}
<li>{%$data.keyword|f_escape_xml%}<em>{%$data.keyword_num|f_escape_xml%}</em></li>
{%/foreach%}
</ul>
</div>
{%/if%}