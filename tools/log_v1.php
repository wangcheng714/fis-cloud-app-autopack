<?php

/* <?php /*/
/*
 * FIS日志汇总
 * @author 王程
 * @version 2013.04.22
 * @copyright (c) 2013, Baidu Inc, All rights reserved.
 */

/*
 172.22.184.185 - - [07/May/2013:12:59:00 +0800] "GET /u.gif?pid=242&v=1&fid=fis_id&data={%22static%22:{%22photo%22:{%22ui%22:{%22f%22:[%22tip_merge%22]}}}}!js&stage=before_tti&seq=js0&sid=0.21828030212782323&type=705310236 HTTP/1.1" 200 2160 "http://localhost:8080/photo/page_use_page_js" "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"
 172.22.184.185 - - [07/May/2013:12:59:00 +0800] "GET /u.gif?pid=242&v=1&fid=fis_id&data={%22static%22:{%22photo%22:{%22ui%22:{%22f%22:[%22tip_merge1%22]},%22f%22:[%22page_use_page_js%22]}}}!js&stage=after_tti&seq=js0&sid=0.9613181503955275&type=705310236 HTTP/1.1" 200 2160 "http://localhost:8080/photo/page_use_page_js" "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"
 172.22.184.185 - - [07/May/2013:12:59:00 +0800] "GET /u.gif?pid=242&v=1&fid=fis_id&data={%22static%22:{%22widget%22:{%22common%22:{%22f%22:[%22menu%22]}},%22photo%22:{%22ui%22:{%22f%22:[%22tip_merge%22]},%22f%22:[%22page_use_page_js%22]}}}!css&stage=before_tti&seq=css0&sid=0.14387418190017343&type=705310236 HTTP/1.1" 200 2160 "http://localhost:8080/photo/page_use_page_js" "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"
 172.22.184.185 - - [07/May/2013:12:59:04 +0800] "GET /u.gif?pid=242&v=1&fid=fis_id&data={%22static%22:{%22photo%22:{%22ui%22:{%22f%22:[%22tip_merge%22]}}}}!js&stage=before_tti&seq=js0&sid=0.6708262048196048&type=705310236 HTTP/1.1" 200 2160 "http://localhost:8080/photo/page_use_page_js" "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"
 172.22.184.185 - - [07/May/2013:12:59:04 +0800] "GET /u.gif?pid=242&v=1&fid=fis_id&data={%22static%22:{%22photo%22:{%22ui%22:{%22f%22:[%22tip_merge1%22]},%22f%22:[%22page_use_page_js%22]}}}!js&stage=after_tti&seq=js0&sid=0.7760830915067345&type=705310236 HTTP/1.1" 200 2160 "http://localhost:8080/photo/page_use_page_js" "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"
 172.22.184.185 - - [07/May/2013:12:59:04 +0800] "GET /u.gif?pid=242&v=1&fid=fis_id&data={%22static%22:{%22widget%22:{%22common%22:{%22f%22:[%22menu%22]}},%22photo%22:{%22ui%22:{%22f%22:[%22tip_merge%22]},%22f%22:[%22page_use_page_js%22]}}}!css&stage=before_tti&seq=css0&sid=0.5576370332855731&type=705310236 HTTP/1.1" 200 2160 "http://localhost:8080/photo/page_use_page_js" "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31"
*/

function processLog($fields){

    $line = $fields["_Line"]; //原始的apache log日志
    //1. 申明所有可以从log日志收集到的变量
    $res['_OriginalLogLine'] = $line;
    $res['_OriginalLogLength'] = strlen($line);
    $line = str_replace("\\x","%",$line); //以\x开头的需要换乘%才能解析出汉字
    $res['_UrlPre'] = null;
    $res['_UrlFields'] = array();
    $res['_ClientIp'] = null;
    $res['_ClientIpInLong'] = null;
    $res['_AccessTimeHour'] = null;
    $res['_AccessTimeMinute'] = null;
    $res['_AccessTimeSecond'] = null;
    $res['_TimeZone'] = null;
    $res['_Method'] = null;
    $res['_Url'] = null;
    $res['_HttpVersion'] = null;
    $res['_StatusCode'] = null;
    $res['_Referer'] = null;
    $res['_Cookie'] = null;
    $res['_BaiduId'] = null;
    $res['_Site'] = null;
    $res['_UserAgent'] = null;

    //2.书写匹配apache log日志的规则，并将匹配出来的结果赋给变量
    if(!preg_match('/(\d+\.\d+\.\d+\.\d+) .*?\[.*?:(\d+):(\d+):(\d+) (.*?)\] \"(.*?) (.*?) .TTP\/(.*?)\" (.*?) .*?\"(.*?)\"(.*?) \"(.*)\"/', $line, $out)){
        return null;
    }
    $res['_ClientIp'] = $out[1];
    $res['_ClientIpInLong'] = ip2long($out[1]);
    $res['_AccessTimeHour'] = $out[2];
    $res['_AccessTimeMinute'] = $out[3];
    $res['_AccessTimeSecond'] = $out[4];
    $res['_TimeZone'] = $out[5];
    $res['_Method'] = $out[6];
    $res['_Url'] = $out[7];
    $res['_HttpVersion'] = $out[8];
    $res['_StatusCode'] = $out[9];
    $res['_Referer'] = $out[10];
    $res['_Cookie'] = $out[11];
    $res['_UserAgent'] = $out[12];

    $url = $res['_Url'];
    if(strpos($url, '?') > 0){
        $res['_UrlPre'] = substr($url, 0, strpos($url,'?'));
    }else{
        $res['_UrlPre'] = $url;
    }
    //将url参数拆分出来
    if(strpos($url, '?') > 0){
        $url = substr($url, strpos($url, '?') + 1, strlen($url) - 1);
        $tmp = explode('&', $url);
        foreach($tmp as $tt){
            $ttt = explode('=', $tt);
            $ttt[1] = urldecode($ttt[1]);
            $res['_UrlFields'][$ttt[0]] = $ttt[1];
        }
    }
    if(preg_match("/BAIDUID=(.*?)[: ]/", $res['_Cookie'], $out)){
        $res['_BaiduId'] = $out[1];
    }
    if(preg_match("/USERID=(.*?)[; ]/", $res['_Cookie'], $out)){
        $res['_UserId'] = $out[1];
    }
    if(preg_match('/http:\/\/([^\/]*)/', urldecode($res['_Url']), $out)){
        $res['_Site'] = $out[1];
    }
//\Utils::trace($res);
    return $res;
}

//分析切割后的结果，从中挑选出计算数据所需要的字段
function splitData($fields){
    if($fields['_UrlFields']['type'] && $fields['_UrlFields']['data'] && $fields['_UrlFields']['fid']){
        $data = $fields['_UrlFields']['data'];
        if(preg_match('/([^!]*)!(js|css)/', $data, $dataInfo)){
            $result = array();
            $staticArray = json_decode($dataInfo[1], true);
            $staticType = $dataInfo[2];
            $statics = convertToStatic($staticArray, "", $staticType);
            foreach($statics as $static){
                $result[] = array(
                    'fid' => $fields['_UrlFields']['fid'],
                    'type' => $fields['_UrlFields']['type'],
                    'static' => $static,
                    'stage' => $fields['_UrlFields']['stage'],
                    'url' => $fields['_Referer']
                );
            }
//\Utils::trace($result);
            return $result;
        }else{
            return null;
        }
    }
    return null;
}

//对前端js压缩后的数据解压缩，还原静态资源数据
function convertToStatic($staticInfos, $prefix, $type, &$result=array()){
    foreach($staticInfos as $token=>$subArray){
        if($token == 'f'){
            if(count($subArray) > 0){
                $lastToken = array_pop($subArray);
                if(strpos($lastToken, ".")){
                    $filePath = "{$prefix}/{$lastToken }";
                    $result[] = $filePath;
                }else{
                    $filePath = "{$prefix}/{$lastToken }/{$lastToken }.{$type}";
                    $result[] = $filePath;
                }
            }
        }else{
            $subPrefix = "{$prefix}/{$token}";
            convertToStatic($subArray, $subPrefix, $type, $result);
        }
    }
    return $result;
}

$fisData = DQuery::input()->select('processLog');
$fisData->select('splitData')->
    group(array('fid','type','static'))->
    countEach('*', 'count')->
    select(array('fid','type','static','count','stage', 'url'))->
    outputAsFile("Fis_Static_Count", "Fis产品线静态资源使用统计", null, true);