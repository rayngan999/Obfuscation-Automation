$(function () {
	$("a").on('click',function(){
		var url = $(this).attr("href");
		var title = $(this).find('img').attr("alt");
		if(!title){
		 title = $(this).find('img').attr('title');
		}
		if(!title){
		 title = $(this).html();
		}
		if(url.indexOf("?") > -1 ) { 
		 url = url+'&title='+encodeURIComponent(title);
		}else{
		 url = url+'?title='+encodeURIComponent(title);
		}
		if(url !== '/k/swt.html'){
		 $(this).attr('target','_self');
		}
		window.location.href = url;
		return false;
	});
    $(".tzbox1").hide();
    $("head").append('<link rel="stylesheet" type="text/css" href="/k/css/box.css" />')
    $("body").prepend('<div id="zjh_toppic"></div>');
    // $("#zjh_toppic").load("/k/html/top_zjh.html");//é¡¶é¨åºå®å¹¿åæ 
    //$("#zjh_toppic").load("/k/html/xctop.html");//é¡¶é¨åºå®å¹¿åæ 

    $("<div />").appendTo($("body")).load("/k/html/leftkf.html");//å·¦ä¾§å®¢æ

    // $("<div />").appendTo($("body")).load("/k/html/xcLeft.html");//å·¦ä¾§å®¢æ æ°æ¥


    $("<div />").appendTo($("body")).load("/k/html/rightnav.html");//å³ä¾§å¯¼èªæ 
    // $("<div />").appendTo($("body")).load("/k/html/bottom.html");//åºé¨æäº¤æ¡

    // $("<div />").appendTo($("body")).load("/k/html/bdtchu.html");//è¡¨åæäº¤æ¡  å¼¹åºå±

    $("<div />").attr({id:"csswt"}).appendTo($("body")).load("/k/html/xxtanc1.html");//swtå¼¹çª
    // $("<div />").attr({id:"csswt"}).appendTo($("body")).load("/k/html/xcTchu.html");// è½¦ç¥¨å¼¹çª

});


/*ç¾åº¦ç»è®¡å¼å§422*/
/*var _hmt = _hmt || [];
(function() { var hm = document.createElement("script");
 hm.src = "https://hm.baidu.com/hm.js?0548a92750769be59f8ea363f41cf1b3";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(hm, s);
 })();*/

//ç¦»çº¿å®  2019-12-27   å»æ
// var _lxbhmt = _lxbhmt || [];
// (function () {
//     var lxbhm = document.createElement("script");
//     lxbhm.src = "http://lxbjs.baidu.com/lxb.js?sid=10604441";
//     var lxbs = document.getElementsByTagName("script")[0];
//     lxbs.parentNode.insertBefore(lxbhm, lxbs);
// })();

/*2019-07-08 ARIC*/
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?48cb035f917e107abd1c7976b8da5688";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


/*ç¾åº¦æå½æ¨é(æ¹æ­2017.4.23)*/
(function () {

    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
/*ç¾åº¦ç»è®¡ç»æ*/
// JavaScript Document
$(function () {
    if ($("#kbxxtitle").size() > 0) {
        $("#kbxxtitle").html(new Date().getMonth() + 1 + 'æç­åæ¨è');
    }
    if ($("#fenxiao").size() > 0) {
        $('#fenxiao').mouseover(function () {
            $('.fenxiaobox').show();
        }).mouseout(function () {
            $('.fenxiaobox').hide();
        });
    }
    if ($("#lh_nav li").size() > 0) {
        $("#lh_nav li").mouseover(function () {
            $(this).find("#lh_zinavs").show();
        }).mouseout(function () {
            $(this).find("#lh_zinavs").hide();
        });
    }
    if ($("#lh_nav li").size() > 0) {
        $("#lh_nav li").mouseover(function () {
            $(this).find(".lh_zinavs").show();
        }).mouseout(function () {
            $(this).find(".lh_zinavs").hide();
        });
    }
});

//è¡¨åéªè¯
function yanzheng(_this, type) {
    var tip = _this.attr('tip') ? _this.attr('tip') : '';
    if (type == 1) {
        if (_this.attr("reg") == 1) {
            if (_this.val().replace(" ", "")) {
                _this.css({"border": "1px solid #ddd"});
            } else {
                _this.css({"border": "1px solid #f00"});
                if (tip) alert(tip);
            }
        } else if (_this.attr("reg") == 2) {
            var myreg = /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|15[0-9]\d{8}|14[0-9]\d{8}|17[0-9]\d{8}|18[0-9]\d{8}$/;
            if (!myreg.test(_this.val())) {
                _this.css({"border": "1px solid #f00"});
                if (tip) alert(tip);
            } else {
                _this.css({"border": "1px solid #ddd"});
            }
        }
    } else if (type == 2) {
        var is = 0;
        _this.find("input,select,textarea").each(function () {
            var tip = $(this).attr('tip') ? $(this).attr('tip') : '';
            if ($(this).attr("reg") == 1) {
                if ($(this).val().replace(" ", "")) {
                    $(this).css({"border": "1px solid #ddd"});
                } else {
                    $(this).css({"border": "1px solid #f00"});
                    is = 1;
                    if (tip) alert(tip);
                }
            } else if ($(this).attr("reg") == 2) {
                var myreg = /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|15[0-9]\d{8}|14[0-9]\d{8}|17[0-9]\d{8}|18[0-9]\d{8}$/;
                if (!myreg.test($(this).val())) {
                    $(this).css({"border": "1px solid #f00"});
                    is = 1;
                    if (tip) alert(tip);
                } else {
                    $(this).css({"border": "1px solid #ddd"});
                }
            }
        });
        return is;
    }
}

function time_range(beginTime, endTime) {
    var strb = beginTime.split(":");
    if (strb.length != 2) {
        return false;
    }
    var stre = endTime.split(":");
    if (stre.length != 2) {
        return false;
    }
    var b = new Date();
    var e = new Date();
    var n = new Date();
    b.setHours(strb[0]);
    b.setMinutes(strb[1]);
    e.setHours(stre[0]);
    e.setMinutes(stre[1]);
    if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
        return true;
    } else {
        return false;
    }
}

//è®¾ç½®cookie
function setCookie(name, value, exp, path) {
    var expDays = exp * 24 * 60 * 60 * 1000;  //1å¤©ææ
    var expDate = new Date();
    expDate.setTime(expDate.getTime() + expDays);
    var expString = ((exp == null) ? "" : (";expires=" + expDate.toGMTString()));
    var pathString = ((path == null) ? "/" : (";path=" + path));
    return document.cookie = name + "=" + escape(value) + expString + pathString;
}

//è¯»åcookie
function getCookie(name) {
    var result = null;
    var myCookie = document.cookie + ";";
    var searchName = name + "=";
    var startOfCookie = myCookie.indexOf(searchName);
    var endOfCookie;
    if (startOfCookie != -1) {
        startOfCookie += searchName.length;
        endOfCookie = myCookie.indexOf(";", startOfCookie);
        result = unescape(myCookie.substring(startOfCookie, endOfCookie));
    }
    return result;
}

function loadjs(src, box) {
    $("<scri" + "pt>" + "</scr" + "ipt>").attr({src: src, type: 'text/javascript'}).appendTo($(box));
}

function detectOS() {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
    }
    return "other";
}

loadjs('/k/script/in_ajax.js', 'head');

loadjs('/k/script/tel.js', 'head');

var _cnt = _cnt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "http://s.kawaedu.com/Visit/cnt?r=" + encodeURIComponent(document.referrer);
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

//ç¾åº¦é¾æ¥æäº¤
(function () {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();


