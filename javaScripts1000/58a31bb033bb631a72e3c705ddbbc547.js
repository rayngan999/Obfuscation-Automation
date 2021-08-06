<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title>QQå¨çº¿ç¶æ</title>
  <link rel="stylesheet" type="text/css" href="//pub.idqqimg.com/wpa/css/open_webaio.css?t=20130131001">
</head>
<body>
<div class="header">
  <div class="header_content container">
    <div class="logo"></div>
    <div class="link">
      <a href="/help.php" target="_blank" hidefocus="true">å¸¸è§é®é¢è§£ç­</a> <span>|</span> <a href="//support.qq.com/portal/discuss_pdt/515_1.html" target="_blank" hidefocus="true">åé¦å»ºè®®</a>
    </div>
  </div>
</div>
<div class="container">
  <div class="inner_box">
    <div id="info-icon"></div>
    <div class="tips">
      <p><span id="tip_word"></span>å¦ææ æ³æå¼èå¤©çªå£ï¼è¯·ä¸è½½ææ°çQQ</p>
      <p>ç»§ç»­ä¸&nbsp;<span id="toUser"></span>&nbsp;ä¼è¯ã</p>
    </div>
    <div class="btns">
      <!-- <a href="javascript:void(0);" id="open-webaio" hidefocus="true">åèµ·ç½é¡µèå¤©</a> -->
      <!-- <a href="javascript:void(0);" id="close-btn" hidefocus="true">å³é­</a> -->
    </div>
  </div>
</div>
<script type="text/javascript" src="//pub.idqqimg.com/lib/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript">
  $.extend({
    stringify  : function stringify(obj) {
      if ("JSON" in window) {
        return JSON.stringify(obj);
      }

      var t = typeof (obj);
      if (t != "object" || obj === null) {
        // simple data type
        if (t == "string") obj = '"' + obj + '"';

        return String(obj);
      } else {
        // recurse array or object
        var n, v, json = [], arr = (obj && obj.constructor == Array);

        for (n in obj) {
          v = obj[n];
          t = typeof(v);
          if (obj.hasOwnProperty(n)) {
            if (t == "string") {
              v = '"' + v + '"';
            } else if (t == "object" && v !== null){
              v = $.stringify(v);
            }

            json.push((arr ? "" : '"' + n + '":') + String(v));
          }
        }

        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
      }
    }
  });
  var g = {
    closeWindow: function() {
      var browserName = navigator.appName;
      if(browserName == "Netscape"){
        window.open('', '_self', '');
        window.close();
      } else if(browserName == "Microsoft Internet Explorer") {
        window.opener = null;
        window.open('', '_top');
        window.top.close();
      }
    },
    getCookieValue: function (n) {
      var m = document.cookie.match(new RegExp("(^| )" + n + "=([^;]*)(;|$)"));
      return !m ? "" : unescape(m[2]);
    },
    getQueryValue : function (n){
      var m = window.location.search.replace(/(^\?+)|(#\S+$)/g,"")
      m = m.match(new RegExp("(^|&)" + n + "=([^&]*)(&|$)"));
      return ! m ? "": decodeURIComponent(m[2]);
    },
    getUserNick : function(uin) {
      $.getJSON('/wpa/user/online_state?callback=?', {
        retype : 2,
        uin : uin
      }, function(json){
        var nick = 'å¯¹æ¹';
        if(json.retcode == 0){
          nick = json.result.nick;
          $('#toUser').text(nick + '(' + uin + ')');
        } else {
          $('#toUser').text(uin);
        }
      });
    },
    addEvent : function(el, type, func){
      if(el.addEventListener){
        el.addEventListener(type, func, false);
      } else if(el.attachEvent){
        el.attachEvent("on" + type, func);
      } else {
        el["on" + type] = func;
      }
    },
    report : function(id){
      var timestamp = +new Date(),
          img = new Image();
      img.src = '//cgi.connect.qq.com/report/report?strValue=0&nValue=' + id + '&tag=0&t=' + timestamp;
    },
    reportGdt : function(qz_gdt){ //add by bizai å¹¿ç¹éç»ä»¶è½¬æ¢ä¸æ¥
      var timestamp = +new Date(),
          img = new Image();
      img.src = '//c.gdt.qq.com/gdt_trace_a.fcg?client=33&actionid=65&clickid='+ qz_gdt + '&t=' + timestamp;
    },
    reportTdw : function(table, fields, data){
      var timestamp = +new Date(),
          img = new Image();
      img.src = '//cgi.connect.qq.com/report/tdw/report?table=' + table + '&fields=' + $.stringify(fields) + '&datas=' + encodeURIComponent($.stringify(data)) + '&t=' + timestamp;
    }
  };
  window.onload = function() {
    var sigt = g.getQueryValue("sigt"),
        sigu = g.getQueryValue("sigu"),
        tuin = g.getQueryValue("tuin"),
        //openBtn = document.getElementById("open-webaio"),
        ua = navigator.userAgent.toLowerCase();
    var timestamp = +new Date();
    g.report(10723);

    //add by bizai (æ°æ®ä¸åç¡®ï¼ä¸æ)
    // var qz_gdt = g.getCookieValue('qz_gdt');
    // if(qz_gdt) {
    //   g.reportGdt(qz_gdt);
    // }else{
    //   qz_gdt = '';
    // }

    // g.reportTdw('dc00005', ['uin', 'opername','module','action','ts','ver1','obj1', 'obj2', 'obj3'], [[g.getCookieValue("uin").replace(/^[o0]+/i,''), 'wpa','chat','gdt_chat_click',timestamp,qz_gdt,'','','']]);

    if(/webkit/.test(ua)){g.report(10764);}
    if(/firefox/.test(ua)){g.report(10765);}
    // if(!$.browser.msie){
    //   $('#tip_word').text('å¦æ');
    // }
    g.getUserNick(tuin);

    // g.addEvent(openBtn, "click", function(){
    //   g.report(10724);
    //   if(/webkit/.test(ua)){g.report(10766);}
    //   if(/firefox/.test(ua)){g.report(10767);}
    //   var openUrl ='', windowName = +new Date();
    //   if(g.getCookieValue("skey")){
    //     g.report(10729);
    //     openUrl = '//connect.qq.com/widget/wpa/chat.html?tuin=' + tuin + "&sigT=" + sigt + "&sigU=" + sigu;
    //   } else {
    //     g.report(10730);
    //     openUrl = '//connect.qq.com/widget/wpa/login.html?tuin=' + tuin + "&sigT=" + sigt + "&sigU=" + sigu;
    //   }
    //   window.open(openUrl, windowName, "width=603,height=489,location=yes,status=yes,toolbar=no,resizable=no");
    //   setTimeout(function(){
    //     g.closeWindow();
    //   }, 200);
    // });

    setTimeout(function(){
      g.closeWindow();
    }, 1000 * 10);
  };
</script>
</body>
</html>
