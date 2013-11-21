{%style id="/widget/movienews/movienews.inline.css"%}.place-widget-movienews{
    border-radius: .25em;  
    overflow: hidden;     
    background-color: #f2f2f2;      
}
    .place-widget-movienews em{
        display: inline;
        font-style: normal;
        color: black;
    }
    .place-widget-movienews .movienews-loading{
        background-color: #FFF;
        padding: 30px 0;
        text-align: center;
    }
    .place-widget-movienews .movienews-content{
        margin: 0 1px;
        border-top: none;
    }
    .movienews-content .tab{
        height: 42px;
        overflow: hidden;
        border: solid 1px #e4e4e4;
        border-radius: 0.25em 0.25em 0 0;
    }
        .movienews-content .tab_wrapper{   
            position: relative;     
            height: 42px;
        }
        .movienews-content .slide:after{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 25px;
            height: 40px;
            background: -webkit-gradient(linear, right top, left top, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0)));
            z-index: 1;
        }
        .movienews-content .slide:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 25px;
            height: 40px;
            background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,1)), color-stop(100%,rgba(255,255,255,0)));
            z-index: 1;
        }
            .movienews-content .calendar_tab{
                background-color: #ffffff;
                height: 40px;
                line-height: 40px;
                padding: 0 4px;
                display: -moz-box; 
                display: -webkit-box; 
                display: box;
            }
            .movienews-content .slide .calendar_tab{
                display: block;
            }
                .movienews-content .calendar_tab li{
                    text-align: center;                                   
                    font-size: 14px;
                    color: #333;
                    -moz-box-flex: 1; 
                    -webkit-box-flex: 1; 
                    box-flex: 1; 
                }
                .movienews-content .slide .calendar_tab li{
                    display: inline-block;
                    width: 75px;
                    margin-top: 0;
                }
                .movienews-content .calendar_tab .current{                
                    position: relative;
                }
                .movienews-content .calendar_tab .current:before{
                    content: attr(data-text);
                    position: absolute;
                    top: 9px;
                    left: 0;
                    width: 100%;
                    height: 23px;
                    line-height: 23px;
                    background-color: #45A3E6; 
                    border-radius: 2px;
                    color: #fff;
                }
    .place-widget-movienews .cover{
        position: relative;
        height: 84px;
        padding: 8px 0 16px;
        overflow: hidden;
    }
        .place-widget-movienews .cover .cover-wrapper{
            position:absolute;            
            top:10px;    
            bottom:15px;    
            height: 84px;
            z-index:1;
        }
            .place-widget-movienews .cover .cover-scroller{
                height: 100%;
            }
                .place-widget-movienews .cover img{
                    background-color: #999;
                    float: left;
                    width: 69px;
                    height: 84px;
                    margin-right: 10px;
                    -webkit-transform:translate3d(0,0,0);
                    -webkit-box-shadow: 0px 4px 3px -1px #ccc;
                    box-shadow: 0px 4px 3px -1px #ccc;
                }
                .place-widget-movienews .cover .new_icon{
                    background: url('/static/place/images/movie_photo_icons_b549531.png') -18px 0 no-repeat; 
                    background-size: 32px 21px;
                    display: inline-block;
                    position:absolute;
                    width:15px;
                    height:21px;
                    z-index: 2;
                    margin-left: -28px
                }
    .place-widget-movienews .info-tip{
        background-color: #FFF;
        display: none;
        height: 110px;      
        padding: 0 0 20px;
        text-align: center;
    }    
    .place-widget-movienews .info{
        background-color: #fff;
        position: relative;
        padding-top: 12px;  
        border:solid 1px #dedede;
        -webkit-border-bottom-left-radius: 5px;
        -webkit-border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .place-widget-movienews .info:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        overflow: hidden;
    }
    .place-widget-movienews .info:before{
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAAOCAYAAABgtf1lAAADFElEQVRoQ+1Yv2sUQRT+ZndvsRGRpFBQGyEWWomKQWNn/AVaJAEthIB/QCCgrYUaLCwkVboUIQpRJP4IYhrBQrAyKJgQExFNEC0tEs3d5vne7M5l9u5iYpiIF2dgmG/ezL5979vvze2tgm/OGaDZcUIQQG3fo5w79w6rGPAkOxYFfRojetYLpZjak91QO/Z6jh1zXOnOE+yYYOq7SMUD7VClBURvRoALt6A2N3qeHfNsu/PkOiSXBrsp2bINyenLAAHho2sIk59Q7Tc8zw559ifxOpFJo72UfJ1G0tYDFDYBItv574iGriBoOgLV0umFvE7ce2IdEEuvnxC9HESp4yaoYRfArxK6FWKo2XFEw1ehTnRBNR31fDvg25/Ejkmkz2+JHl5H6XgXqKkZWMgEbO4TxwjGniJ6dRfo6IFq2OmF7PgZKOK25JOhNUvtYjB2ezR2sUlfrDHaNsHcFy2b+NVz041Ps6fiHjqczGbHZMKsDj6L32KtKr81MqoCFuwc8KIfyb5WJIfPA8Vi9f3kK0VYQDh6G+G3KaClM6PVVSCriD9XNmbCo4bWqHG2LqPunKe2WVjbuPNnxHS9xry8Zq7L/OT8Gb8mDis2k5aJ5zdpqsnJKWps2JoJ1dazLaBUVErEpoWXlAWpiLHMs64WS0DCnUelx2I2it1gfti8puQatqVY9qZ+bCwC1/tsoVsFk8Zki9voyNgrs3cnHvkCEew+iOTYpaUCrkV2EOo8w+d9SGbeaVH/3Wap2IgzEyzlxJoXJUnc0jneMg4YS/yhrEWMYyCS9YhtjGVvKNjsYyz79HqGlVxrioAxx8Af1lOb1rMpHME1hJ2Rp3j/3PwPqDv3hqnt7Kk/5NQmpVwy1T5yVWQqfJn9q6i49OT4x5rUhBSi/YNWK0R5MBE/xHpoK9V5Va72L3jlQWgnnK3l/K90s+UJi+MCxiemoIYePKZzZ1rrgVofo2cgx0BcKGDi/bQXsddF/TJQFvH94ZE1vE7Ub+I+8g3EAL+CTn/4CNU/METNh/ZvoMx8Kv8LAxH/x5iZ/YJf0DJSRC4/nyYAAAAASUVORK5CYII=);
        background-size: 150px 12px;
        content: '';
        position: absolute;
        left: 25%;
        top: -7px;
        margin-left: -65px;
        width: 130px;
        height: 8px;
        z-index: 2;
        background-position: -10px 0;
    }    
        .place-widget-movienews .info dt,
        .place-widget-movienews .info p{
            width: 100%;     
            border: solid transparent 10px;
            border-top: 0 none;       
            text-overflow: ellipsis;
            overflow:hidden;
            white-space: nowrap;
            -webkit-box-sizing:border-box;
            box-sizing:border-box; 
        }
        .place-widget-movienews .info p{
            border-width: 8px;
        }
            .place-widget-movienews .info-actors{
                float: left;
                padding: 0;
            }
            .place-widget-movienews .info-name{
                display: block;                
                padding-left: 37px;                
            }
        .place-widget-movienews .info dt{
            font-size: 16px;
        }
            .place-widget-movienews .info em{
                display: inline;
                color: black;
            }
            .place-widget-movienews .info em.tit{
                font-weight: 600;
            }
            .place-widget-movienews .info em.sco{
                color:#FD4F02;
                font-size:14px;
            }
            .place-widget-movienews .info em.des{
                float:right;
                color:#1D86FC;
                font-size:12px;
                height: 18px;
            }
        .place-widget-movienews .info ul{      
            background-color: #fff;       
            overflow: hidden;
            margin-bottom: -1px;
            border-bottom: solid 1px #ccc;
        }
        .place-widget-movienews .info.info-unbook ul{
            border-top: solid 1px #ccc;
            max-height: none;
        }
            .place-widget-movienews .info li{                
                display: block;
                height: 55px;
                line-height: 32px;
                padding: 10px;
                border-top: solid 1px #ccc;
                -webkit-box-sizing:border-box;
                box-sizing:border-box;
                font-size: 14px;
                overflow: hidden;
            }  
                .place-widget-movienews .info .meta{
                    float: left;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .place-widget-movienews .info .meta-extend{
                    display: block;
                    text-align: right;
                    overflow: hidden;
                    white-space: nowrap;
                    direction:rtl;
                    font-family: arial;
                    color:#FE9601;
                }
                    .place-widget-movienews .info .time{
                        display: inline-block;
                        vertical-align: middle;
                        position: relative;
                        top: -2px;
                        min-width: 40px;
                        margin-right: 15px;
                        font-size: 20px;
                        color: #000;
                    }
                    .place-widget-movienews .info .btn-book{
                        background: #fdb036;
                        position: relative;
                        display: inline-block;
                        width: 77px;
                        height: 33px;
                        margin-left: 20px;
                        padding: 0;
                        text-align: center;
                        vertical-align: middle;
                        border: 0;
                        color: #fff;
                        border-radius: 5px;
                    }
                    
                    /*.place-widget-movienews .info .btn-book{
                        background: url('btn_movie_book.png') 0 0 no-repeat;
                        background-size: 77px 33px;
                        position: relative;
                        display: inline-block;
                        width: 77px;
                        height: 33px;
                        margin-left: 20px; 
                        padding: 0;
                        text-align: center;
                        vertical-align: middle;
                        border: 0;
                        color: #000;
                    }*/
                    .place-widget-movienews .info .btn-exchange{
                        background-color:#FD4A4D;
                        border-radius: 3px;
                        position: relative;
                        display: inline-block;
                        height: 33px;
                        margin-left: 20px; 
                        padding: 0 10px;
                        text-align: center;
                        vertical-align: middle;
                        border: 0;
                        color: #fff;
                    }
                    .place-widget-movienews .info .btn-book.unbook{
                        background-image: url('/static/place/widget/movienews/btn_movie_unbook_e285bb2.png');
                    }                    
            .place-widget-movienews .info-unbook li{
                float: left;
                width: 50%;
                margin-top: -1px;
                border-right: 1px solid #ccc;
                border-bottom: solid 1px #ccc;
                text-align: center;
            }
            .place-widget-movienews .info-unbook li:nth-child(2n){
                border-right: none;
            }
                .place-widget-movienews .info-unbook .meta-extend{
                    display: none;
                }
    .place-widget-movienews.movienews-empty .info-tip{
        display: block;        
    }
    .place-widget-movienews.movienews-empty .cover,
    .place-widget-movienews.movienews-empty .info{
        display: none;
    }
    .place-widget-movienews .info .list-opt{
        position: relative;
        top: -1px;
        overflow: hidden;
    }
        .place-widget-movienews .info .btn-more, 
        .place-widget-movienews .info .btn-close{
            background-color: #f2f2f2;
            width: 100%;
            padding: 7px 0;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            color: black;
            border: none;
            border-top: solid 1px #d2d2d2;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
.moviebook-popup-wrapper{
    display: none;
    position: absolute;
    top: -8px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 11;
}
.moviebook-popup,
.movietip-popup{
    background: #F2F2F2;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    margin-top: -90px;
    width: 300px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    -webkit-border-radius: 3px;
            border-radius: 3px;
}
    .moviebook-popup .header,
    .movietip-popup .header{
        background: #f1f1f1;
        position: relative;
        height: 36px;
        line-height: 26px;
        padding: 5px;
        border-bottom: solid 1px #bfbfbf;
        text-align: center;
        color: #010101;
        font-size: 16px;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
    }
    .moviebook-popup .btn-close,
    .movietip-popup .btn-close{
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzNjM2RjY3OEM3MTExRTJBQTA1REE3Qzk0OUZBREE0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzNjM2RjY4OEM3MTExRTJBQTA1REE3Qzk0OUZBREE0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzM2MzZGNjU4QzcxMTFFMkFBMDVEQTdDOTQ5RkFEQTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzM2MzZGNjY4QzcxMTFFMkFBMDVEQTdDOTQ5RkFEQTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4uqJ+1AAAABlBMVEWMjIz///8fMh9uAAAAAnRSTlP/AOW3MEoAAAA8SURBVHjadI8xDgAwCAKP/3+6g9gQ0jIBBlQALTBK2jBdw+qSscmcRitaokr6zCtf/bW/73vcn/8dAQYAL9AAZV3WpaIAAAAASUVORK5CYII=) no-repeat center center;        
        position: absolute;
        right: 0;
        top: 0;
        width: 35px;
        height: 35px;        
        z-index: 1;
    }
    .moviebook-popup .content{        
        padding: 14px 0 0 16px;
    }    
            .moviebook-popup .content p{
                margin-bottom: 27px;
            }
            .moviebook-popup .content p:nth-child(2){
                display: none;
            }
                .moviebook-popup .content label,
                .moviebook-popup .content input,
                .moviebook-popup .content button{
                    font-size: 14px;
                    color: #434343;
                }
                .moviebook-popup .content input{
                    width: 200px;
                    height: 26px;
                    padding: 4px 8px;
                    border: solid 1px #ccc;
                    -webkit-border-radius: 5px;
                            border-radius: 5px;
                }
                .moviebook-popup .content img{
                    vertical-align: middle;
                }
                #valid-number{
                    width: 90px;
                    margin-right: 5px;
                }
                .moviebook-popup .content button{
                    position: static;
                    border: none;
                    text-align: center;
                    font-size: 16px;
                    color: #fff;      
                }
                .moviebook-popup .content .tip{
                    display: none;
                    float: left;
                    margin-left: 50px;
                    margin-top: 5px;
                    color: #e60012;
                }
                .moviebook-popup .content .submit-btn{
                    background-color: #8cbddc;
                    width: 155px;
                    height: 37px;
                    margin-left: 70px;                    
                    -webkit-border-radius: 5px;
                                 border-radius: 5px;
                }

    
.moviedes_popup{
    background-color: #fff;
    width: 280px;
    text-align: left;
    border-radius: 5px;
    overflow: hidden;
    position: absolute;
    left:50%;
    margin-left:-140px;
}
    .moviedes_popup .header{
        text-align: center;
        background:#f1f1f1;
        border-bottom:1px solid #BFBFBF;
        height: auto;
        padding:5px 13px;
    }
        .moviedes_popup .header .btn_close{
            background: none;
            line-height: 1;
            font-size: 16px;
            text-decoration: none;
            color: #000;
            opacity: 0.7;
            font-weight: 600;
            right: 0px;
            position: absolute;
            width: 35px;
            height: 30px;
        }
        .moviedes_popup .header .logo{
            background: url(../../images/movie_popup_log.png) no-repeat 0 0;
            background-size: 66px 32px;
            position: absolute;
            display: block;
            width: 66px;
            height: 32px;
            top: 7px;
            left: 10px;
        }
        .moviedes_popup.header .sco{
            color: #FD4F02;
            font-size: 14px;
        }

 
    .moviedes_popup .content{                    
        padding:13px;
        color:#373737;
    }
        .moviedes_popup .content table td{
            padding:4px 0;
        }
        .moviedes_popup .content .name{
            color:#5E5D5D;
            font-weight: 600;
        }
        .moviedes_popup .content .title1{
            font-size: 14px;
            color: #399700;
        }
        .moviedes_popup .content .title2{
            font-size: 20px;
            color: #ff6600;
        }
    .moviedes_popup .footer{
        background-color: #7659b1;
        height: auto;
        line-height: 1;
        padding: 10px 0;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        display: block;
    }
        .moviedes_popup .footer a{
            background-color: #fdb913;
            display: inline-block;
            width: 70px;
            height: 20px;            
            line-height: 20px;
            font-size: 12px;
            cursor:pointer;
            color: #fff;
        } 

{%/style%}{%* 参数：$widget_data *%}
{%if ($data.widget.movienews)%}
<div class="place-widget-movienews">
    <div class="movienews-content">
    </div>
    <div class="movienews-loading">
        正在获取实时影讯信息...
    </div>
</div>
{%script%}
    require.async(['place:widget/movienews/movienews.js'], function(m) {
        m.init("{%$widget_data.uid%}", "{%$widget_data.other_info.webview_style%}", "{%$smarty.now|date_format:"%Y-%m-%d"%}");
    });
{%/script%}
{%/if%}
