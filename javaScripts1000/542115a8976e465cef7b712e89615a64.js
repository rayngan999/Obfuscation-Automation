String.prototype.replaceAll = function (AFindText, ARepText) {
    raRegExp = new RegExp(AFindText, "g");
    return this.replace(raRegExp, ARepText);
};
/**
 * å¬å±æ¹æ³çå°è£:
 * isPhone:å¤æ­æ¯å¦æ¯PHONE
 * isphoneNum: å¤æ­æ¯ææºå·
 * trim:å é¤è¾å¥æ¡ååç©ºæ ¼
 * isNullOrEmpty:å¤æ­æ¯å¦ä¸ºnullæç©º
 * getValue: æ¸é¤ç¹æ®å­ç¬¦
 * getTimestamp: æ¶é´æ³è½¬æ¶é´
 * tpl: è·åå¯¹è±¡ä¸­å¨æåé
 * jsonValue: è§£å¼èµå¼
 * replacelinkHtmlï¼æ¿æ¢é¾æ¥ä¸­çhtml
 * replaceEmoticonï¼è¡¨æä»£ç æ¿æ¢è¡¨æå¾ç
 * replaceHtmlï¼urlæ¿æ¢è½¬ä¹å­ç¬¦
 * matchReg: å»é¤æ ç­¾
 * getStorage: è·åæ¬å°å­å¨
 * parcent25: è½¬ä¹ %-%25
 * getStrï¼è·åæå®åæ°
 * date2Text: æ¶é´è½¬æ¢
 * ...
 * **/
jesong.commonFun = {
    isPhone: function () {
        if (typeof msgStyle != undefined && msgStyle == "phone") {
            return true;
        } else {
            return false;
        }
    },
    isphoneNum: function (inputString) {
        var partten = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
        var fl = false;
        if (partten.test(inputString)) {
            return true;
        } else {
            return false;
        }
    },
    trim: function (str) {
        str = str + "";
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    isNullOrEmpty: function (prop) {
        if (prop == null || this.trim(prop) == "" || prop == undefined) {
            return true;
        } else {
            return false;
        }
    },
    getValue: function(str) {
        str = str.replace(/[\-\ï¼\,\s]*/g, "");
        var m = str.match(/\d{11}/g);
        return (m && m[0]) || '';
    },
    getTimestamp: function (v) {
        var now = new Date();
        if (typeof v == 'number') {
            now.setTime(v);
        }
        var h = now.getHours();
        var mm = now.getMinutes();
        return (h > 9 ? h : "0" + h) + ":" + (mm > 9 ? mm : "0" + mm);
    },
    tpl: function (s, obj) {
        return s.replace(/\{([a-zA-z0-9]*)\}/ig, function ($1, $2) {
            var v = jesong.commonFun.jsonValue(obj, $2);
            return v;
        });
    },
    jsonValue: (function () {
        var existProp = function (obj, t) {
            return typeof obj[t] != 'undefined';
        };
        var ignoreCase = function (obj, t) {
            if (existProp(obj, t)) return obj[t];
            if (existProp(obj, t.toLowerCase())) return obj[t.toLowerCase()];
            return obj[t.toUpperCase()];
        };
        return function (obj, key, def) {
            var tokens = key.split(".");
            for (var i = 0; i < tokens.length; i++) {
                var t = tokens[i];
                obj = ignoreCase(obj, t);
                if (obj == undefined) break;
            }
            return obj == undefined ? def : obj;
        };
    })(),
    replacelinkHtml: function (s) {
        var reg = /(http:\/\/|https:\/\/|ftp:\/\/|www)((?:\&amp;|[\w\.\:\/=%_\-,~\?\&\*])*)/g;
        s = s.replace(reg, function ($0, $1, $2) {
            $2 = $2.replace(/\&amp;/g, function (s) {
                return '&';
            });
            var u = ($1 == 'www' ? 'http://www' : $1) + $2;
            return '<a class="linkText" href="' + u + '" target="_blank">' + u + '</a>';
        });
        return s;
    },
    replaceEmoticon: function (msg) {
        var reg = /\[\d\d\]/g;
        return msg.replace(reg, function (a, b, c) {
            return "<img src=\"" + jesong.env.server.file + "/emoticon/" + a.substring(1, 3) + ".png\"></img>";
        });
    },
    replaceHtml: function (msg) {
        var string = msg + "";
        string = string.replaceAll("&", "&amp;");
        string = string.replaceAll("<", "&lt;");
        string = string.replaceAll(">", "&gt;");
        string = string.replaceAll("\r", "");
        string = string.replaceAll("\n", " ");
        string = string.replaceAll("\"", "&quot;");
        return string;
    },
    jesongGetDomain: function (url) {
        var domain = url.match(/(\w+):\/\/([^\:|\/]+)(\:\d*)?(.*\/)([^#|\?|\n]+)?(#.*)?(\?.*)?/i);
        if (domain.length > 2) {
            return domain[2];
        } else {
            return null;
        }
    },
    getPageRefer: function () {
        if (document.referrer) {
            try {
                var refer = document.referrer;
                if (refer) {
                    var referDomain = this.jesongGetDomain(refer);
                    var currDomain = window.location.host;
                    if (referDomain && referDomain == currDomain) {
                        refer = "";
                    }
                }
                if (refer != "") {
                    return refer;
                }
            } catch (e) {
            }
            ;
        }
        return "";
    },
    getCook: function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        arr = document.cookie.match(reg);
        if (arr) {
            return unescape(arr[2]);
        } else {
            return null;
        }
    },
    setCook: function (name, value, t) {
        if (typeof t == 'undefined' || t == null) t = 60 * 30 * 24 * 60 * 60 * 1000;
        var exp = new Date();
        exp.setTime(exp.getTime() + t);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    initJesongRefer: function () {
        var refer = this.getPageRefer();
        if (refer != "") {
            this.setCook('im_refer', refer, 10 * 60 * 1000);
        }
    },
    matchReg: function (str) {
        var reg = /<\/?.+?\/?>/g;
        return str.replace(reg, '')
    },
    getStorage: function (arg) {
        return sessionStorage.getItem(arg);
    },
    parcent25: function (str) {
        if (str.indexOf("%") > -1) {
            return str.replace(/%/g, "%25")
        } else {
            return str;
        }
    },
    getStr: function (str) {
        var url = window.location.search;
        url = this.parcent25(url);
        var r = decodeURI(url);
        if (r != null) {
            return r.split(str)[1];
        } else {
            return null;
        }
    },
    date2Text: function(v, fmt) {
        var fv = function(s){
            if(s<10){
                return '0'+s;
            }else{
                return s;
            }
        };
        if(typeof v=='string'){
            return v;
        }
        if (typeof v == 'number'){
            var v1 = new Date();
            v1.setTime(v);
            v = v1;
        }
        if(v&&typeof v == 'object'){
            var fmtItem = ['yyyy','MM','dd','hh','mm','ss'];
            if(!fmt){
                fmt = 'yyyy-MM-dd';
            }
            var exp = new RegExp('(' + fmtItem.join('|') + ')', "g");
            var fv = function(v) {
                return v < 10 ? ('0' + v) : v;
            };
            return fmt.replace(exp, function($1, $2) {
                switch ($2) {
                    case 'yyyy':return v.getFullYear();
                    case 'MM':return fv(v.getMonth() + 1);
                    case 'dd':return fv(v.getDate());
                    case 'hh':return fv(v.getHours());
                    case 'mm':return fv(v.getMinutes());
                    case 'ss':return fv(v.getSeconds());
                }
            });
        }else{
            return '';
        }
    }
}

/**
 * éè¯·éç½®æå¼å¯¹è¯
 * openJesongChatByCus:æå¼å¯¹è¯æ¡æ¥å¥å°æå®çå®¢æ
 cId:å¬å¸id
 tarï¼å®¢æç»éè´¦å·
 tag:æ ç­¾ID
 msg:å¾åéæ¶æ¯
 * openJesongChatByGroupï¼æå¼å¯¹è¯æ¡æ¥å¥å°æå®çå®¢æåç»
 cId:å¬å¸id
 tarï¼å®¢æåç»ID
 tag:æ ç­¾ID
 msg:å¾åéæ¶æ¯
 * openJesongChatï¼æå¼å¯¹è¯é»è¾
 * openNoJesongJsChatï¼å¨å±çªå£
 *
 * **/
var easyliao = {
    openJesongChatByCus: function (cId, tar, tag, msg) {
        return this.openJesongChat(cId, 'c', tar, tag, msg);
    },
    openJesongChatByGroup: function (cId, tar, tag, msg) {
        return this.openJesongChat(cId, 'g', tar, tag, msg);
    },
    openJesongChat: function (cId, c, tar, tag, msg) {
        var param = '';
        if (c == 'c') {
            param += 'n=' + tar;
        } else if (c == 'g') {
            param += 'g=' + tar;
        }
        if (tag) {
            param += '&tag=' + tag;
        }
        if (msg) {
            param += '&msg=' + window.encodeURIComponent(msg);
        }
        if ("undefined" == typeof jesong || !jesong.util || !jesong.util.openChat) {
            this.openNoJesongJsChat(cId, param);
        } else {
            jesong.util.openChat(param);
        }
        return false;
    },
    openNoJesongJsChat: function (cId, params) {
        var url = "http://live.jswebcall.com/live/" + 'chat.do?c=' + cId;
        url = url + "&chatUrl=" + window.decodeURIComponent(jesong.commonFun.parcent25(window.location.href));

        if (typeof params == 'string' && params.length != 0) {
            url += '&' + params;
        }

        if (jesong.commonFun.getCook('JESONG_VISITOR_ID')) {
            url = url + "&v=" + jesong.commonFun.getCook('JESONG_VISITOR_ID');
        }
        if (jesong.commonFun.getCook('JESONG_USER_ID')) {
            url = url + "&u=" + jesong.commonFun.getCook('JESONG_USER_ID');
        }

        if (jesong.commonFun.getCook("im_refer")) {
            url = url + "&ref=" + window.encodeURIComponent(jesong.commonFun.getCook("im_refer"));
        } else {
            var refer = jesong.commonFun.getPageRefer();
            if (refer != "") {
                url = url + "&ref=" + window.encodeURIComponent(refer);
            }
        }

        var exts = null;
        if (jesong.commonFun.getCook("JESONG_EXT_DATA")) {
            exts = jesong.commonFun.getCook("JESONG_EXT_DATA");
        }
        if (typeof (JESONG_EXT_DATA) != "undefined") {
            exts = JESONG_EXT_DATA;
        }
        try {
            if (exts != null && typeof exts == "object") {
                var _ext = "#params:";
                var _i = 0;
                for (var key in exts) {
                    if (_i > 0) {
                        _ext += ",";
                    }
                    _ext = _ext + key + "," + exts[key];
                    _i++;
                }
                exts = _ext;
            }
            if (exts != null && exts != "") {
                url = url + "&ext=" + window.encodeURIComponent(exts);
            }
        } catch (e) {
        }
        try {
            var _scripts = document.getElementsByTagName("script");
            var _reg = /http[s]?:\/\/scripts\.easyliao\.com\/[0-9]+\/([0-9]+)\.js/;
            for (var i = 0; i < _scripts.length; i++) {
                var _url = _scripts[i].src;
                if (_url && _reg.test(_url)) {
                    var _config = _url.match(_reg);
                    if (_config.length == 2) {
                        url = url + "&config=" + _config[1];
                        break;
                    }
                }
            }
        } catch (e) {
        }
        var p = "height=600,width=800,directories=no,location=no,menubar=no,resizeable=no,status=no,toolbar=no,top=100,left=200";

        if (jesong.browserFun.easyliaoIsPC()) {
            try {
                var cw = window.open(jesong.util.filterXSS(url), jesong.util.filterXSS('chat_' + cId), p);
                cw.focus();
            } catch (e) {
                window.location = jesong.util.filterXSS(url);
            }
        } else {
            window.location = jesong.util.filterXSS(url);
        }
    }
}

/**
 * æµè§å¨å¼å®¹æ¹æ³
 * æ ¹æ®æµè§å¨çä¸ååæ ¸ãç±»åãçæ¬è¿è¡ ä¸åçééä»£ç 
 *
 * **/
jesong.browserFun = {
    sUsrAg: window.navigator.userAgent,
    baiduBrowser: navigator.userAgent.indexOf('baidubrowser') > -1,
    ucBrowser: navigator.userAgent.indexOf('UCBrowser') > -1,
    huaweiBrowser: navigator.userAgent.indexOf('HuaweiBrowser') > -1,
    getIOSVersion: function () { //è·åIOSçæ¬
        var ua = navigator.userAgent;
        var match = ua.match(/OS ((\d+_?){2,3})\s/i);
        return match ? match[1].replace(/_/g, '.') : 'unknown';
    },
    needScroll: function () { //æå®IOSçæ¬
        var iosVsn = this.getIOSVersion().split('.');
        return +iosVsn[0] == 11 && +iosVsn[1] >= 0 && +iosVsn[1] < 3;
    },
    kernel: function () {
    }, //è·åå½åæµè§å¨åæ ¸
    version: function () {
    },//è·åå½åæµè§å¨çæ¬
    getBody: function () { //å¤æ­IEå¼å®¹æ¨¡å¼ BackCompatï¼æ åå¼å®¹æ¨¡å¼å³é­ãCSS1Compatï¼æ åå¼å®¹æ¨¡å¼å¼å¯
        return (document.compatMode != "CSS1Compat") ? document.body : document.documentElement;
    },
    pcM: function () { //å¤æ­æ¯ç§»å¨è¿æ¯PC
        if (!!this.sUsrAg.match(/AppleWebKit.*Mobile.*/)) {
            return "M"
        } else if (this.sUsrAg.indexOf('iPad') > -1) {
            return "IPAD"
        } else {
            return "PC"
        }
    },
    phoneSystem: function () { //å¤æ­å½åææºç³»ç»
        if (!!this.sUsrAg.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            //æ¹åiosçalertæ ·å¼
            window.alert = function(name){
                var iframe = document.createElement("IFRAME");
                iframe.style.display="none";
                iframe.setAttribute("src", 'data:text/plain,');
                document.documentElement.appendChild(iframe);
                window.frames[0].window.alert(name);
                iframe.parentNode.removeChild(iframe);
            };
            return "IOS"
        } else if (this.sUsrAg.indexOf('Android') > -1 || this.sUsrAg.indexOf('Linux') > -1) { //androidç»ç«¯æèucæµè§å¨
            return "ANDROID"
        }
    },
    type: function () { //è·åå½åæµè§å¨ç±»å
        if (this.sUsrAg.indexOf("QQBrowser") >= 0 || this.sUsrAg.indexOf("QQ") >= 0) {
            return "è¾è®¯QQ";
        } else if (this.sUsrAg.indexOf('Android') > -1 && this.sUsrAg.indexOf('UCBrowser') > -1) {
            return "UC";
        } else if (this.sUsrAg.indexOf("Safari") >= 0 && this.sUsrAg.indexOf("MetaSr") >= 0) {
            return "æç";
        } else if (this.sUsrAg.indexOf("HuaweiBrowser") >= 0) {
            return "åä¸º";
        } else if (!!window.ActiveXObject || "ActiveXObject" in window) {//IE
            if (!window.XMLHttpRequest) {
                return "IE6";
            } else if (window.XMLHttpRequest && !document.documentMode) {
                return "IE7";
            } else if (!-[1,] && document.documentMode && !("msDoNotTrack" in window.navigator)) {
                return "IE8";
            } else {//IE9 10 11
                var hasStrictMode = (function () {
                    "use strict";
                    return this === undefined;
                }());
                if (hasStrictMode) {
                    if (!!window.attachEvent) {
                        return "IE10";
                    } else {
                        return "IE11";
                    }
                } else {
                    return "IE9";
                }
            }
        } else {
            return null
        }
    },
    easyliaoIsPC: function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    },
    huaweiPhone:function(){
        //è§£å³åä¸ºææºå¯¼èªæ åé®çé®æ¡é¡µé¢çé®é¢
        if(/57.0.2987.132/.test(jesong.browserFun.sUsrAg)){
            JS("jesong_chat_layout").css('bottom','8%');
        }
    },
    //å¤çæºåãåçæ¬å·å¤çå¯¹åºè½¯é®çé«åº¦
    getPhoneKeyboardHight:function(){
        var UA = window.navigator.userAgent.toLocaleLowerCase();
        var height = 0;
        if (/mp1709/.test(UA)){ //ç¾å¾ææº 1
            height = 210;
        }else if(/vivobrowser/.test(UA)){
            if(/vivo x21a/.test(UA)){ // vivoææº 1
                height = 230;
            }else if(/v1838a/.test(UA)){ // vivoææºx27
                height = 200;
            }else if(/vivo y85a/.test(UA)){ // vivoææºy85a
                height = 200;
            }else if(/vivo v3maxa/.test(UA)){ //VIVO V3MaxA   1
                height = 6;
            }else if(/vivo x7plus/.test(UA)){ //VIVO NEX 1
                height = 10;
            }else if(/v1836a|v1914a/.test(UA)){ //vivo X27 Pro 1  x7plus /VIVO IQOO NEO 1
                height = 5;
            }else if(/v1911a/.test(UA)){ ///vivo Z5x 1
                height = 225;
            }else if(/vivo nex/.test(UA)){ ///vivo Z5x 1
                height = 200;
            }else if(/vivo x9/.test(UA)){ //vivo x9
                height = 226;
            }
        }else if(/vivo x510t/.test(UA)&&/4\.0 mobile safari\/534\.30/.test(UA)){
            height = 5;
            setTimeout(function () {
                window.scrollTo(0, 9999);
            },200);
        }else if(/oppo a37m/.test(UA)&&/oppobrowser/.test(UA)){ // OPPO 37M   1
            height = 220;
        }else if(/letv x501/.test(UA)&&/eui/.test(UA)){ //vivo X27 Pro 1  x7plus /VIVO IQOO NEO 1
            height = 5;
        }else if(/xiaomi/.test(UA)&&/miuibrowser\/14/.test(UA)){
            height = 230;
        }
        return height
    },
    // å¤çè½¯é®çé®é¢
    onKeybord:function($inputs,id){
        // å¤æ­è®¾å¤ç±»å
        var judgeDeviceType = function () {
            var ua = window.navigator.userAgent.toLocaleLowerCase();
            var isIOS = /iphone|ipad|ipod/.test(ua);
            var isAndroid = /android/.test(ua);
            var isMiuiBrowser = /miuibrowser/.test(ua);
            var isVivoBrowser =navigator.userAgent.indexOf('VivoBrowser') >= -1;
            var isSafari = /Safari/i.test(ua) && !/Chrome/i.test(ua);
            return {
                isIOS: isIOS,
                isAndroid: isAndroid,
                isMiuiBrowser: isMiuiBrowser,
                isVivoBrowser: isVivoBrowser,
                isSafari: isSafari
            }
        }()
        // è·åå°ç¦ç¹åç´ æ»å¨å°å¯è§åº
        function activeElementScrollIntoView(activeElement, delay, scrollOption) {
            var editable = activeElement.getAttribute('contenteditable');

            // è¾å¥æ¡ãtextareaæå¯ææ¬è·åç¦ç¹åæ²¡æå°è¯¥åç´ æ»å¨å°å¯è§åº
            if (activeElement.tagName == 'INPUT' || activeElement.tagName == 'TEXTAREA' || editable === '' || editable) {
                setTimeout(function () {
                    activeElement.scrollIntoView(scrollOption);
                }, delay)
            }
        }
        function listenKeybord($input) {
            // Andriod é®çæ¶èµ·ï¼Andriod é®çå¼¹èµ·ææ¶èµ·é¡µé¢é«åº¦ä¼åçååï¼ä»¥æ­¤ä¸ºä¾æ®è·ç¥é®çæ¶èµ·
            if (judgeDeviceType.isAndroid) {
                var height = jesong.browserFun.getPhoneKeyboardHight();
                if(height){
                    if(id == 'jesong_opinion_reason_text'){
                        JS("jesong_mask").css('top','0');
                    }
                    JS("jesong_chat_layout").css('height', JS("jesong_chat_layout").height()+height + "px");
                    var UA = window.navigator.userAgent.toLocaleLowerCase();
                    if(/xiaomi/.test(UA)&&/miuibrowser\/14/.test(UA)&&(/mi 10/.test(UA)||/mi 9/.test(UA)||/m2102j2sc/.test(UA)||/redmi k20 pro/.test(UA)||/m2007j22c/.test(UA)||/redmi k30 pro/.test(UA))){
                        JS('jesong_chat_input_compatible').show();
                    }
                    activeElementScrollIntoView($input, 1000);
                }
                var originHeight = document.documentElement.clientHeight || document.body.clientHeight;
                window.addEventListener('resize', function () {
                    var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;
                    if (originHeight < resizeHeight) {
                        // Android é®çæ¶èµ·åæä½
                        // ä¿®å¤å°ç±³æµè§å¨ä¸ï¼è¾å¥æ¡ä¾æ§è¢«è¾å¥æ³é®æ¡é®é¢
                        // if (judgeDeviceType.isMiuiBrowser) {
                        //     document.body.style.marginBottom = '0px';
                        // }
                    } else {
                        // Android é®çå¼¹èµ·åæä½
                        // ä¿®å¤å°ç±³æµè§å¨ ä¸ï¼è¾å¥æ¡ä¾æ§è¢«è¾å¥æ³é®æ¡é®é¢
                        // if (judgeDeviceType.isMiuiBrowser) {
                        //     document.body.style.marginBottom = '40px';
                        // }
                        activeElementScrollIntoView($input, 1000);
                    }

                    originHeight = resizeHeight;
                }, false)



            }
        }
        for (var i = 0; i < $inputs.length; i++) {
            listenKeybord($inputs[i]);
        }
    }
}

/**
 * ä¿¡æ¯è½¬ä¹
 * **/
var JSLang = {
    en: {
        softLogo: "EASYLIAO Software",
        newMessage: "New Message",
        online: "Online Service",
        welcome: "Welcome",
        you: "You",
        transchatTo: "Transfering the dialogue to ",
        transchatSuccess: "Transfering the dialogue successfully",
        closeChatConfirm: " Confirm to fininsh the dialogue?",
        opinionText: "Please rate our service, maximum 5 points",
        opinionLevel5: "Very satisfied",
        opinionLevel4: "Satisfaction",
        opinionLevel3: "Quite satisfied",
        opinionLevel2: "General",
        opinionLevel1: "Poor attitude",
        cancel: "Cancel",
        chatOpinioned: "You have rate this service, repeated ratings are not available.",
        chatOpinionedSuccess: "Thanks for your rating, if has the deficiency, we will try our best to improve it.",
        chatOpinionedDescription: "Please leave your valuable comments if has any deficiency. Thank you!",
        textareaDefault: "Please input the question you want to consultâ¦",
        send: "Send",
        name: "Name",
        mobile: "Contact",
        telephone: "Landline telephone:",
        verifying: "Verifying code:",
        namePrompt: "Please input your title",
        contactsPrompt: "Please input your contact information",
        contentPrompt: "Please input the content of message",
        submit: "Submit",
        nameWarning: "Name can not be empty with no more than 20 characters",
        content: "Content",
        contractsWarning: "Please enter the correct contact information",
        contentWarning: "Please input the content of message",
        leaveMsgSuccess: "Your question has been submitted successfully, we will process it asap, please wait for our customer service reply.",
        uploadWarning: "Please select a file you want to upload!",
        screenWarning1: "You havenât set up the screenshot plug-in as detected, please ",
        screenWarning2: "download",
        screenWarning3: " the screenshot plug-in and set up now.",
        queuePrompt1: "Sorry, the online customer service is busy now, still ",
        queuePrompt2: " client waiting ahead of you.",
        newMessage: "You have a new message",
        sameChat: "A new dialogue is established and the current dialogue has finished",
        downloadFile1: "The customer service representative has sent a file to you , please click to ",
        downloadFile2: "download",
        customerImgSuss: "You send a file to the other party",
        opinion1: "Please rate this service. ",
        opinion2: "Rate",
        chatClosed: "Your connection with any customer service representative can not be made currently!",
        inputting: "Inputting...",
        msgSendError: "Message sending failed. Please check your network connection, or try again later.",
        chatToolFace: "Expression",
        chatToolFile: "Send file",
        chatToolScreen: "Screenshot",
        chatToolOpinion: "Rate customer service",
        chatToolQuiet: "Quiet",
        chatToolPhone: "Free call",
        queueing: "You are in the queue, please try again later!",

        phoneNotNull: "Mobile number cannot be empty!",
        codeNotNull: "Verification code cannot be empty!",
        codeError: "Verification code error. Please re-enter.",
        timeOut: "Verification code timeout, please resend!",
        codeUndefind: "Verification code does not exist, please resend!",
        formatError: "Wrong mobile number, please re-enter",
        sendCode: "Send",
        resetSend: "Resend in seconds",
        checkSuccess: "Verification succeeded, please continue the conversation",
        confirm: "Determine",
        cancel: "cancel",
        tips: "Please input the verification code you received before sending the mobile number",
        codeSuccess: "Verification code sent successfully",
        codeSendError: "Failed to send verification code, please resend",
        exceed: "Try again in a minute",
        placeholder: "Please enter the verification code",
        copySuccess: "Copy successful",
        weChat: "WeChat copy",
        weChatCode:"Sweep the code plus WeChat",
        weChatGroupCode:'Scan code + WeChat group',
        tencentGroupQrcode:'Scan the code to pay attention to WeChat public number',
        qqGroupQrcode:'Code + qq group',
        qq: "QQ copy",
        telephoneConsultation: "Telephone consultation",
        sent: "Sent",
        closeWinTips: "Customer service staff is replying to your question. Are you sure you want to minimize the window?",
        msgNotEmpty: "Message cannot be empty",
        customer:"Customer",
        aboutUS:"About us",
        telTitle: "This call is free, please feel free to dial!",
        telType:"mobile",
        telExample: "example",
        telCurrent: "This call",
        telFree: "the entire free",
        telInfo: "prompt",
        telMethod: "Please enter your number and we will call you back immediately",
        telTodo:"call",
        telPlaceholder: "Please enter your mobile phone number",

        baiduTitle:'Please enter your address',
        site:'address',
        cityTitle:'Please enter the city name',
        selectAddress:'Please select address',
        house:'House number',
        houseTitle:"For example, Room 203, Building 1",
        addressSub:'Submit the address',
        msgNotEmpty: "Message cannot be empty",

        pasteCon:'Are you sure you want to send the screenshot?',
        movieTips:'Your browser does not support video viewing, please use another browser'
    },
    sc: {
        softLogo: "\u6613\u804A\u79D1\u6280\u63D0\u4F9B\u6280\u672F\u652F\u6301",
        newMessage: "\u60a8\u6709\u65b0\u7684\u6d88\u606f",
        online: "\u5728\u7ebf\u5ba2\u670d",
        welcome: "\u6b22\u8fce\u54a8\u8be2",
        you: "\u60a8",
        transchatTo: "\u6b63\u5728\u8f6c\u79fb\u5bf9\u8bdd\u7ed9",
        transchatSuccess: "\u8f6c\u79fb\u5bf9\u8bdd\u6210\u529f",
        closeChatConfirm: "\u786e\u5b9a\u7ed3\u675f\u5f53\u524d\u5bf9\u8bdd\uff1f",
        opinionText: "\u8bf7\u5bf9\u6211\u4eec\u7684\u670d\u52a1\u8fdb\u884c\u8bc4\u4ef7",
        opinionLevel5: "\u975e\u5e38\u6ee1\u610f",
        opinionLevel4: "\u6ee1\u610f",
        opinionLevel3: "\u6bd4\u8f83\u6ee1\u610f",
        opinionLevel2: "\u4e00\u822c",
        opinionLevel1: "\u6001\u5ea6\u8f83\u5dee",
        cancel: "\u53d6\u6d88",
        chatOpinioned: "\u60a8\u5df2\u7ecf\u5bf9\u5ba2\u670d\u8fdb\u884c\u4e86\u8bc4\u4ef7,\u4e0d\u80fd\u518d\u8fdb\u884c\u8bc4\u4ef7",
        chatOpinionedSuccess: "\u611f\u8c22\u60a8\u5bf9\u672c\u6b21\u670d\u52a1\u505a\u51fa\u8bc4\u4ef7\uff0c\u5982\u6709\u4e0d\u8db3\uff0c\u6211\u4eec\u4f1a\u5c3d\u529b\u5b8c\u5584\u63d0\u9ad8\u3002",
        chatOpinionedDescription: "\u60A8\u8BA4\u4E3A\u6211\u4EEC\u8FD8\u6709\u54EA\u4E9B\u4E0D\u8DB3\uFF0C\u8BF7\u7559\u4E0B\u60A8\u7684\u5B9D\u8D35\u610F\u89C1\uFF0C\u8C22\u8C22\uFF01",
        textareaDefault: "\u8bf7\u8f93\u5165\u60a8\u8981\u54a8\u8be2\u7684\u5185\u5bb9...",
        send: "\u53d1\u9001",
        name: "\u60a8\u7684\u59d3\u540d",
        mobile: "\u8054\u7cfb\u65b9\u5f0f",
        telephone: "\u56fa\u5b9a\u7535\u8bdd\uff1a",
        verifying: "\u9a8c\u8bc1\u7801\uff1a",
        namePrompt: "\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d",
        content: "\u7559\u8a00\u5185\u5bb9",
        contactsPrompt: "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7\u7801\u6216\u90ae\u4ef6\u5730\u5740",
        contentPrompt: "\u8bf7\u8f93\u5165\u60a8\u7684\u7559\u8a00\u5185\u5bb9",
        submit: "\u63d0\u4ea4",
        nameWarning: "\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a\u4e14\u4e0d\u80fd\u8d85\u8fc720\u4e2a\u5b57\u7b26",
        contractsWarning: "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7\u7801\u6216\u5ea7\u673a\u7535\u8bdd, \u5750\u673a\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u683c\u5f0f:\u533a\u53f7-\u5ea7\u673a\u53f7-\u5206\u673a\u53f7",
        contentWarning: "\u8bf7\u8f93\u5165\u7559\u8a00\u5185\u5bb9",
        leaveMsgSuccess: "\u60a8\u7684\u95ee\u9898\u5df2\u7ecf\u6210\u529f\u63d0\u4ea4\uff0c \u6211\u4eec\u5c06\u5c3d\u5feb\u5904\u7406\u5b8c\u6bd5\uff0c\u8bf7\u60a8\u7b49\u5019\u5ba2\u670d\u7684\u6d88\u606f\u901a\u77e5\u3002",
        uploadWarning: "\u8bf7\u9009\u62e9\u4e00\u4e2a\u8981\u4e0a\u4f20\u7684\u6587\u4ef6\uff01",
        screenWarning1: "\u7cfb\u7edf\u63d0\u793a\uff1a\u7cfb\u7edf\u68c0\u6d4b\u5230\u60a8\u5c1a\u672a\u5b89\u88c5\u622a\u5c4f\u63d2\u4ef6\uff0c \u8bf7\u5148",
        screenWarning2: "\u4e0b\u8f7d",
        screenWarning3: "\u622a\u5c4f\u63d2\u4ef6\u5e76\u5b89\u88c5",
        queuePrompt1: "\u5bf9\u4e0d\u8d77\uff0c\u76ee\u524d\u5728\u7ebf\u5ba2\u670d\u7e41\u5fd9\uff0c\u60a8\u524d\u9762\u6709",
        queuePrompt2: "\u4f4d\u5ba2\u6237\u7b49\u5f85\u3002",
        newMessage: "\u60a8\u6709\u65b0\u7684\u6d88\u606f",
        sameChat: "\u60a8\u4e0e\u5ba2\u670d\u53c8\u5efa\u7acb\u4e86\u4e00\u4e2a\u5bf9\u8bdd\uff0c \u5f53\u524d\u5bf9\u8bdd\u5df2\u7ed3\u675f",
        downloadFile1: "\u5bf9\u65b9\u7ed9\u60a8\u4f20\u9001\u4e86\u4e00\u4e2a\u6587\u4ef6\uff0c\u8bf7\u70b9\u51fb",
        downloadFile2: "\u4e0b\u8f7d",
        customerImgSuss: "\u60a8\u7ed9\u5bf9\u65b9\u4f20\u9001\u4e00\u4e2a\u6587\u4ef6",
        opinion1: "\u5bf9\u65b9\u8bf7\u4f60\u5bf9\u6b64\u6b21\u670d\u52a1\u8fdb\u884c",
        opinion2: "\u8bc4\u4ef7",
        chatClosed: "\u5bf9\u8bdd\u5df2\u7ecf\u7ed3\u675f\uff01",
        inputting: "\u6b63\u5728\u8f93\u5165...",
        msgSendError: "\u6d88\u606f\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u6216\u8005\u7a0d\u5019\u518d\u8bd5",
        chatToolFace: "\u8868\u60C5",
        chatToolFile: "\u4F20\u9001\u6587\u4EF6",
        chatToolScreen: "\u622A\u56FE",
        chatToolOpinion: "\u8BC4\u4EF7\u5BA2\u670D",
        chatToolQuiet: "\u9759\u97F3",
        chatToolPhone: "\u62d4\u6253\u7535\u8bdd",
        queueing: "\u60a8\u5728\u6392\u961f\u4e2d\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01",

        phoneNotNull: "\u624b\u673a\u53f7\u4e0d\u80fd\u4e3a\u7a7a\uff01",
        codeNotNull: "\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a",
        codeError: "\u9a8c\u8bc1\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
        timeOut: "\u9a8c\u8bc1\u7801\u8d85\u65f6\uff0c\u8bf7\u91cd\u65b0\u53d1\u9001\uff01",
        codeUndefind: "\u9a8c\u8bc1\u7801\u4e0d\u5b58\u5728\uff0c\u8bf7\u91cd\u65b0\u53d1\u9001\uff01",
        formatError: "\u624b\u673a\u53f7\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165",
        sendCode: "\u53d1\u9001\u9a8c\u8bc1\u7801\uff01",
        resetSend: "\u0073\u540e\u91cd\u65b0\u53d1\u9001",
        checkSuccess: "\u9a8c\u8bc1\u6210\u529f\uff0c\u8bf7\u7ee7\u7eed\u5bf9\u8bdd",
        confirm: "\u786e\u5b9a",
        cancel: "\u53d6\u6d88",
        tips: "\u53d1\u9001\u624b\u673a\u53f7\u524d\uff0c\u8bf7\u5148\u8f93\u5165\u4f60\u6536\u5230\u7684\u9a8c\u8bc1\u7801",
        codeSuccess: "\u9a8c\u8bc1\u7801\u53d1\u9001\u6210\u529f",
        codeSendError: "\u9a8c\u8bc1\u7801\u53d1\u9001\u5931\u8d25\uff0c\u8bf7\u91cd\u65b0\u53d1\u9001",
        exceed: "\u4e00\u5206\u949f\u540e\u518d\u8bd5",
        placeholder: "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",
        copySuccess: "\u590d\u5236\u6210\u529f",
        weChat: "\u5fae\u4fe1\u590d\u5236",
        weChatCode:"\u626b\u7801\u002b\u5fae\u4fe1",
        weChatGroupCode:'\u626b\u7801\u002b\u5fae\u4fe1\u7fa4',
        tencentGroupQrcode:'\u626b\u7801\u5173\u6ce8\u5fae\u4fe1\u516c\u4f17\u53f7',
        qqGroupQrcode:'\u626b\u7801\u002b\u0071\u0071\u7fa4',
        telephoneConsultation: "\u7535\u8bdd\u54a8\u8be2",
        sent: "\u53d1\u9001\u5b8c\u6bd5",
        closeWinTips: "\u5ba2\u670d\u4eba\u5458\u6b63\u5728\u56de\u590d\u60a8\u7684\u95ee\u9898\uff0c\u786e\u5b9a\u8981\u6700\u5c0f\u5316\u7a97\u53e3\u5417\uff1f",
        msgNotEmpty: "\u6d88\u606f\u4e0d\u80fd\u4e3a\u7a7a",

        telTitle: "\u672c\u6b21\u901a\u8bdd\u5168\u7a0b\u514d\u8d39\uff0c\u8bf7\u60a8\u653e\u5fc3\u62e8\u6253\uff01",
        telType:"\u624b\u673a",
        telExample: "\u5982",
        telCurrent: "\u672c\u6b21\u901a\u8bdd",
        telFree: "\u5168\u7a0b\u514d\u8d39",
        telInfo: "\u63d0\u793a",
        telMethod: "\u8bf7\u8f93\u5165\u60a8\u7684\u53f7\u7801\u002c\u6211\u4eec\u5c06\u7acb\u5373\u7ed9\u60a8\u56de\u7535",
        telTodo:"\u62e8\u6253",
        telPlaceholder: "\u8bf7\u8f93\u5165\u60a8\u7684\u624b\u673a\u53f7",

        baiduTitle:"\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740",
        site:'\u5730\u5740',
        cityTitle:'\u8BF7\u8F93\u5165\u5E02\u7EA7\u540D\u79F0',
        selectAddress:'\u8BF7\u9009\u62E9\u5730\u5740',
        house:'\u95E8\u724C\u53F7',
        houseTitle:"\u4F8B\u5982\uFF1A1\u53F7\u697C203\u5BA4",
        addressSub:'\u63D0\u4EA4\u5730\u5740',
        customer:'\u5BA2\u670D\u4FE1\u606F',
        aboutUS:'\u5173\u4E8E\u6211\u4EEC',
        pasteCon:"\u786e\u5b9a\u8981\u53d1\u9001\u8be5\u622a\u56fe\u5417\uff1f",
        movieTips:"\u4f60\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u89c6\u9891\u67e5\u770b\uff0c\u8bf7\u4f7f\u7528\u5176\u5b83\u6d4f\u89c8\u5668"
    }
};

/**
 * doméæ©å¨å°è£
 * **/
var JS = function (selector,parentNode) {
    if (window == this) {
        return new JS(selector);
    };
    if(jesong.commonFun.isNullOrEmpty(parentNode)){
        this.dom = document.getElementById(selector);
    }else{
        if (parentNode.getElementsByClassName) {
            // ä½¿ç¨ç°ææ¹æ³
            this.dom = parentNode.getElementsByClassName(selector);
        } else {
            var results = new Array();
            var elems = parentNode.getElementsByTagName("*");
            for (var i = 0; i < elems.length; i++) {
                if (elems[i].className.indexOf(selector) != -1) {
                    results[results.length] = elems[i];
                }
            }
            this.dom = results;
        }
    }

    return this;
};
JS.prototype = {
    exist: function () {
        if (this.dom) {
            return true;
        } else {
            return false;
        }
    }, html: function (html) {
        if (html && this.dom) {
            this.dom.innerHTML = html;
        } else if (this.dom) {
            return this.dom.innerHTML;
        } else {
            return "";
        }
    }, bind: function (event, fn) {
        if (this.dom) {
            if (fn) {
                if (this.dom.attachEvent) {
                    this.dom.attachEvent("on" + event, function (e) {
                        if(event == 'click'){
                            e.cancelBubble = true
                        }
                        return fn.apply(Chat, [e]);
                    });
                } else if (this.dom.addEventListener) {
                    this.dom.addEventListener(event, function (e) {
                        if(event == 'click'){
                            e.stopPropagation();
                        }
                        return fn.apply(Chat, [e]);
                    });
                }
            } else {
                if (document.all) {
                    this.dom.click();
                } else {
                    var evt = document.createEvent("MouseEvents");
                    evt.initEvent(event, false, true);
                    this.dom.dispatchEvent(evt);
                }
            }
        }
        return this;
    }, unbind: function (event) {
        if (this.dom) {
            if (this.dom.attachEvent) {
                this.dom.attachEvent("on" + event, null);
            } else if (this.dom.addEventListener) {
                this.dom.addEventListener(event, null);
            }
        }
    }, click: function (fn) {
        return this.bind("click", fn);
    }, focus: function (fn) {
        if (fn) {
            return this.bind("focus", fn);
        } else {
            this.dom.focus();
            return this;
        }
    }, hover: function (fn1, fn2) {
        this.bind("mouseover", fn1);
        this.bind("mouseout", fn2);
        return this;
    }, blur: function (fn) {
        if (fn) {
            return this.bind("blur", fn);
        } else {
            this.dom.blur();
            return this;
        }
    }, keydown: function (fn) {
        return this.bind("keydown", fn);
    }, hasClass: function (cls) {
        if (this.dom) {
            return this.dom.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        } else {
            return false;
        }
    }, addClass: function (cls) {
        if (this.dom) {
            if (!this.hasClass(cls)) {
                this.dom.className += " " + cls;
            }
            return this;
        }
    }, css: function (key, value) {
        if (this.dom) {
            this.dom.style[key] = value;
            return this;
        }
    }, width: function () {
        if (this.dom) {
            return this.dom.offsetWidth;
        } else {
            return 0;
        }
    }, height: function () {
        if (this.dom) {
            return this.dom.offsetHeight;
        } else {
            return 0;
        }
    }, removeClass: function (cls) {
        if (this.hasClass(cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            this.dom.className = this.dom.className.replace(reg, ' ');
        }
    }, scrollTop: function (top) {
        if (top != undefined) {
            this.dom.scrollTop = top;
        } else {
            return this.dom.scrollTop;
        }
    }, hide: function () {
        if (this.dom) {
            this.dom.style.display = "none";
        }
        return this;
    }, isHidden: function () {
        if (this.dom) {
            return this.dom.style.display == "none";
        }
    }, show: function () {
        if (this.dom) {
            this.dom.style.display = "block";
        }
        return this;
    }, toggle: function () {
        if (this.dom) {
            this.dom.style.display == "block"? this.dom.style.display = "none": this.dom.style.display = "block";
        }
    }, remove: function () {
        if (this.dom) {
            this.dom.parentNode.removeChild(this.dom);
        }
    }, val: function (data) {
        if (this.dom) {
            if (data != undefined) {
                this.dom.value = data;
            } else {
                return this.dom.value;
            }
        }
    }, attr: function (data) {
        if (this.dom) {
            var m = this.dom.attributes[data];
            if (m) {
                return m.value;
            }
        }
    }, append: function (html) {

        var div = document.createElement("div");
        div.innerHTML = html;
        this.dom.appendChild(div);
    }, empty: function () {
        this.dom.innerHTML = "";
        return this;
    }, ajax: function (url, data, func, error, uploadFile) {
        var parseData = function (data) {
            var ret = "";
            if (typeof data === "string") {
                ret = data;
            } else if (typeof data === "object") {
                for (var key in data) {
                    ret += "&" + key + "=" + encodeURIComponent(data[key]);
                }
                ret = ret.substr(1);
            }
            ret += "&_t=" + new Date().getTime();
            return ret;
        };
        url = url + (url.indexOf("?") == -1 ? "?" : "&") + parseData(data);
        var callback = "jsonp_" + new Date().getTime() + "_" + Math.random().toString().substr(2);
        url = url + "&callback=" + callback;
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = "id_" + callback;
        script.onerror = error;
        window[callback] = function (json) {
            window[callback] = undefined;
            var elem = document.getElementById("id_" + callback);
            var parent = elem.parentNode;
            if (parent && parent.nodeType != 11) {
                parent.removeChild(elem);
            }
            if (func) {
                func.apply(this, [json]);
            }
            //func(json);
        };

        // å¨headéé¢æå¥scriptåç´ 
        var head = document.getElementsByTagName("head");
        if (head && head[0]) {
            head[0].appendChild(script);
        }
    }, setTextValuePosition:function(spos){
        if(spos<0)
            spos = this.dom.value.length;
        if(this.dom.setSelectionRange){ //å¼å®¹ç«ç,è°·æ­
            var that = this;
            setTimeout(function(){
                    that.dom.setSelectionRange(spos, spos);
                    that.dom.focus();}
                ,0);
        }else if(this.dom.createTextRange){ //å¼å®¹IE
            var rng = this.dom.createTextRange();
            rng.move('character', spos);
            rng.select();
        }
    },
};
JS.ajax = JS.prototype.ajax;
JS.getCookie = function (name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    arr = document.cookie.match(reg);
    if (arr) {
        return unescape(arr[2]);
    } else {
        return null;
    }
};
JS.setCookie = function (name, value, t) {
    if (typeof t == 'undefined' || t == null) t = 60 * 30 * 24 * 60 * 60 * 1000;
    var exp = new Date();
    exp.setTime(exp.getTime() + t);
    document.cookie = name + "=" + escape(value) + ";domain=" + jesong.util.getCookieDomain() + ";expires=" + exp.toGMTString() + ";path=/";
};

/**
 * htmlç»æ:
 * phoneMinChatï¼ç§»å¨ç«¯å¤å±ç»æ
 * pcMinChat:pcç«¯å¤å±ç»æ
 * emoticonHTML:è¡¨æç»æ
 * pasteHtmlï¼å¾çé»è´´å¼¹çªç»æ
 * opinionHTML:çè¨ç»æ
 * soundHTML:å£°é³ç»æ
 * backHTML:è¿åå¼¹çªç¡®è®¤ç»æ
 * phoneMinChatConï¼ç§»å¨ç«¯åå±å¯¹è¯ç»æ
 * pcMinChatCon:pcç«¯åå±å¯¹è¯ç»æ
 * user_tpl:å®¢ææ°æ³¡
 * visitor_tpl:è®¿å®¢æ°æ³¡
 * system_tplï¼ç³»ç»æ°æ³¡
 * user_tpl_inputing_phone: ææºç«¯æ­£å¨è¾å¥æ°æ³¡
 * weixinPhoneHtml: å¸¦å¾®ä¿¡ãææºå·ç»æ
 * baiduMapHTML: ç¾åº¦å°å¾ç»æ
 * formHTMLï¼è¡¨åç»æ
 * getChatToolï¼ å¯¹è¯æå¥æ«æäºç»´ç æé®ç»æ
 * **/
jesong.UI = {
    telResponse: [],
    quickColsList:[],
    phoneMinChat: function (chatWidth, chatHeight, chatBg, pageTitle) {
        return "<div id=\"jesong_mask\" style=\"width:" + chatWidth + "px;height:" + chatHeight + "px;position: absolute; bottom: 0px; right: 0px; z-index: 100; opacity: 0.5; filter:alpha(opacity=50); background: rgb(0, 0, 0);background:#000000;display:none;\"></div>" +
            "<div class=\"jesong-full-top\" style=\"position:relative;background-color:" + chatBg + ";border-color:" + chatBg + ";\">" +
            "<div style=\"position:absolute;top:0px;left:80px;right:80px;height:100%;line-height:45px;font-size:16px;text-align:center;color:#ffffff;\">" + (pageTitle == "" ? JSLang[jesong.language].online : pageTitle) + "</div>" +
            "<div id=\"jesong_chat_min_btn\"  class=\"jesong-min-btn\"></div>" +
            "<div id=\"jesong_chat_min_phone_btn\"  class=\"jesong-min-phone-btn\"></div>" +

            "</div>" +
            "<div id=\"jesong_chat_body\" class=\"jesong-full-main\" style=\"height:" + (chatHeight - 10) + "px;\">" +
            "</div>" +
            "<div id=\"jesong_chat_input_compatible\"><span>ç¹å»æ¶èµ·</span></div>"
    },
    pcMiniChat: function (chatWidth, chatHeight, chatBg, pageTitle, defaultLogo) {
        return "<div id=\"jesong_mask\" style=\"width:" + chatWidth + "px;height:" + chatHeight + "px;position: absolute; bottom: 0px; right: 0px; z-index: 100; opacity: 0.5; filter:alpha(opacity=50); background: rgb(0, 0, 0);background:#000000;display:none;\"></div>" +
            "<div class=\"jesong-container-mini-inner\">" +
            "<div class=\"jesong-container-mini-main\">" +
            "<div id=\"jesong-mini-main-top\" class=\"jesong-mini-main-top\" style=\"background-color:" + chatBg + ";\">" +
            "<div class=\"jesong-brand\">" +
            "<img src=\"" + defaultLogo + "\" alt=\"\"/>" +
            "</div>" +
            "<div class=\"jesong-abstract\">" +
            "<p class=\"jesong-abstract-con\" style=\"margin-top:15px;font-size: 14px;\">" + (pageTitle == "" ? JSLang[jesong.language].online : pageTitle) + "</p>" +
            "</div>" +
            "<div class=\"jesong-custom\">" +
            "<div id=\"jesong_chat_close\"></div>" +
            "<div id=\"jesong_chat_max_btn\"></div>" +
            "<div id=\"jesong_chat_min_btn\"></div>" +
            "</div>" +
            "</div>" +
            "<div id=\"jesong_chat_body\"></div>" +
            "</div>" +
            "<div>" +

            "<div style=\"display:none;\"><iframe id=\"jesong_frame\" src = \"about:blank\"></iframe></div>";
    },
    emoticonHTML: function () {
        return "<div id=\"jesong_emoticon_layout\" class=\"jesong-emoticon-layout jesong-pop-window\">" +
            "<div id=\"jesong_emoticons\" class=\"jesong-emoticons\"></div>" +
            "</div>";
    },
    pasteHTML: function () {
        return "<div id=\"jesong_paste_layout\" class=\"jesong-paste-layout jesong-pop-window\">" +
            "<div id=\"jesong_paste_reason_cancel\" class=\"jesong-paste-close\"></div>" +
            "<div class=\"jesong-desp\">" + JSLang[jesong.language].pasteCon + "</div>" +
            "<div style=\"width:80%;margin:0 auto;overflow:hidden; padding-top:20px\">" +
            "<button id=\"jesong_paste2_reason_cancel\" class=\"jesong-commit\" style=\"float:left; background-color:" + jesong.autochat.bgcolor + ";border-color:" + jesong.autochat.bgcolor + ";\">" + JSLang[jesong.language].cancel + "</button>" +
            "<button id=\"jesong_paste_reason_commit\" onclick=\"Chat.pasteFile()\" class=\"jesong-commit\" style=\"background-color:#ffffff; color:"+ jesong.autochat.bgcolor +"; float:right; border-color:" + jesong.autochat.bgcolor + ";\">" + JSLang[jesong.language].confirm + "</button>" +

            "</div>" +
            "</div>";
    },
    opinionHTML: function () {
        return "<div id=\"jesong_opinion_layout\" class=\"jesong-opinion-layout jesong-pop-window\">" +
            "<div id=\"jesong_opinion_reason_cancel\" class=\"jesong-opinion-close\"></div>" +
            "<div class=\"jesong-opinion-icon\"></div>" +
            "<div id=\"jesong_opinion_score\" class=\"jesong-score\">" +
            "<div class=\"jesong-desp\">" + JSLang[jesong.language].opinionText + "</div>" +
            "<div class=\"jesong-star-box\" style=\"width:100%;text-align:center;margin-top:20px;height:40px;\">" +
            "<span id=\"jesong_op0\" class=\"jesong-star jesong-star-1\"></span>" +
            "<span id=\"jesong_op1\" class=\"jesong-star jesong-star-1\"></span>" +
            "<span id=\"jesong_op2\" class=\"jesong-star jesong-star-1\"></span>" +
            "<span id=\"jesong_op3\" class=\"jesong-star jesong-star-1\"></span>" +
            "<span id=\"jesong_op4\" class=\"jesong-star jesong-star-1\"></span>" +
            "</div>" +
            "<div id=\"jesong_opinion_result\" class=\"jesong-result\">" +
            "<span id=\"jesong-op-box\" style=\"display:block;\">" + JSLang[jesong.language].opinionLevel5 + "</span>" +
            "</div>" +
            "</div>" +
            "<div id=\"jesong_opinion_reason\" class=\"jesong-reason\">" +
            "<textarea rows=\"5\" id=\"jesong_opinion_reason_text\" placeholder=\"" + JSLang[jesong.language].chatOpinionedDescription + "\"></textarea>" +
            "</div>" +
            "<div style=\"width:100%;text-align:center;margin-top:20px;\">" +
            "<button id=\"jesong_opinion_reason_commit\" class=\"jesong-commit\" style=\"background-color:" + jesong.autochat.bgcolor + ";border-color:" + jesong.autochat.bgcolor + ";\">" + JSLang[jesong.language].submit + "</button>" +
            "</div>" +
            "</div>";
    },
    soundHTML: function () {
        return "<div id=\"jesong_sound\" style=\"display:none;\"><audio id=\"jesong_audio\" src=\"" + jesong.env.server.file + "wav/sound.wav" + "\"></audio></div>";
    },
    backHTML: function () {
        return "<div id=\"jesong_back_layout\" class=\"jesong-back-layout jesong-pop-window\">" +
            "<div id=\"jesong_back_reason_cancel\" class=\"jesong-back-close\"></div>" +
            "<div class=\"jesong-desp\">" + JSLang[jesong.language].closeWinTips + "</div>" +
            "<div style=\"width:80%;margin:0 auto;overflow:hidden; padding-top:20px\">" +
            "<button id=\"jesong_back2_reason_cancel\" class=\"jesong-commit\" style=\"float:left; background-color:" + jesong.autochat.bgcolor + ";border-color:" + jesong.autochat.bgcolor + ";\">" + JSLang[jesong.language].cancel + "</button>" +
            "<button id=\"jesong_back_reason_commit\" class=\"jesong-commit\" style=\"background-color:#ffffff; color:"+ jesong.autochat.bgcolor +"; float:right; border-color:" + jesong.autochat.bgcolor + ";\">" + JSLang[jesong.language].confirm + "</button>" +
            "</div>" +
            "</div>";
    },
    phoneMinChatCon: function (softLogo) {
        return "<div id=\"jesong_chat_record\" class=\"jesong-mini-main-middle test-1\" style=\"height:" + (jesong.autochat.height - 142) + "px\">" +
            "</div>" + jesong.UI.emoticonHTML() + jesong.UI.opinionHTML() +
            "<div id=\"jesong_chat_phone_bottom\" class=\"jesong-mini-main-footer\" style=\"border:0px;height:135px;\">" +
            "<div class=\"jesong-operation-header\">" +
            "<div id=\"jesong_tools_emoticons\" title=\"" + JSLang[jesong.language].chatToolFace + "\"></div>" +
            "<div id=\"jesong_tools_opinion\" title=\"" + JSLang[jesong.language].chatToolOpinion + "\"></div>" +
            "<div id=\"jesong_tools_sound\" title=\"" + JSLang[jesong.language].chatToolQuiet + "\"></div>" +
            "<div id=\"jesong_tools_quiet\" title=\"" + JSLang[jesong.language].chatToolQuiet + "\"></div>" +
            "</div>" +
            "<div class=\"jesong-operation-main\" style=\"position:relative;\">" +
            "<div class=\"jesong-main-import\" >" +
            "<textarea id=\"jesong_message\" style=\"width:" + (jesong.autochat.width - 90) + "px;\" class=\"test-1\" placeholder=\"" + JSLang[jesong.language].textareaDefault + "\"></textarea>" +
            "</div>" +
            "<button id=\"jesong_chat_send_btn\" class=\"jesong-btn-info\" style=\"background-color:" + jesong.autochat.bgcolor + ";border:1px solid " + jesong.autochat.bgcolor + ";line-height: 15px;border-radius:3px;color: #fff;position:absolute;top:20px;right:10px;width:60px;height:30px;font-size:14px; outline: none\">" + JSLang[jesong.language].send + "</button>" +
            "</div>" +
            "<div class=\"jesong-operation-footer\" style=\"background:#fafaf8;border-top:1px solid #eee;text-align:center;\">" +
            "<span class=\"jesong-help-block\">" + softLogo + "</span>" +
            "</div>" +
            "</div>" + jesong.UI.soundHTML() + jesong.UI.backHTML()
    },
    pcMinChatCon: function (softLogo) {
        return "<div class=\"jesong-chat-main\" style=\"height:" + (jesong.autochat.height - 180) + "px\">" +
            "<div id=\"jesong_chat_record\" class=\"jesong-mini-main-middle test-1\" style=\"height:" + (jesong.autochat.height - 180) + "px\">" +
            "</div>" +
            "<div id=\"jesong_chat_advertising\" >" +
                "<div class=\"easyliao-nav\">" +
                    "<div id=\"jesong_chat_customer\" class=\"nav-tabs easyliao-active\"> " + JSLang[jesong.language].customer +"</div>" +
                    "<div id=\"jesong_chat_aboutUS\" class=\"nav-tabs\">" + JSLang[jesong.language].aboutUS +"</div>" +
                "</div>"+
                "<div class=\"tab-content \">" +
                    "<div class=\"easyliao-tabs easyliao-show\" id=\"jesong_chat_advertising-info\">" +
                    "<p class=\"service-icon\" id=\"jesong_chat_custHeadBox\">" +
                    "</p>" +
                    "<h4 id=\"jesong_chat_custName_content\" class=\"service-number\">å®¢æ <span id=\"jesong_chat_custName\">é»è®¤å®¢æ</span></h4>" +
                    "<p id=\"jesong_chat_custDept_content\"><span class=\"icon-1\">é¨é¨ </span><span id=\"jesong_chat_custDept\">é»è®¤é¨é¨</span></p>" +
                    "<p id=\"jesong_chat_custTel_content\"><span class=\"icon-11\">çµè¯ </span><span id=\"jesong_chat_custTel\">é»è®¤çµè¯</span></p>" +
                    "</div>" +
                    "<div class=\"easyliao-tabs\" id=\"about-us\">" +
                    "</div>" +
                "</div>"+
            "</div>" +
            "</div>"+  jesong.UI.emoticonHTML() + jesong.UI.opinionHTML() +
            "<div id=\"jesong_file_layout\" class=\"jesong-file-layout jesong-pop-window\" style=\"width:" + jesong.autochat.width + "px;\">" +
            "<iframe id=\"jesong_file_frame\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" style=\"width:100%;height:28px;margin-top:6px;border:0px;overflow:hidden;\"></iframe>" +
            "</div>" +
            "<div class=\"jesong-chat-footer\">" +
                "<div class=\"jesong-mini-main-footer\">" +
                "<div id=\"freecall_info\" class=\"freecall-info\">\n" +
                    "<p class=\"info-title\">" + JSLang[jesong.language].telTitle + "</p>\n" +
                    "<div>\n" +
                    "<p class=\"phone\">" + JSLang[jesong.language].telMethod + "</p>\n" +
                    "<p class=\"info\">" + JSLang[jesong.language].telInfo + "</p>\n" +
                    "<p>" + JSLang[jesong.language].telType + ":<span>139********</span>ï¼" + JSLang[jesong.language].telExample + ":<span>13987459698</span></p>\n" +
                    " <p><b>" + JSLang[jesong.language].telCurrent + "<span>" + JSLang[jesong.language].telFree + "!</span></b></p>\n" +
                "</div>\n" +
                "</div>"+
                "<div class=\"jesong-operation-header\">" +
                "<div id=\"jesong_tools_emoticons\" title=\"" + JSLang[jesong.language].chatToolFace + "\"></div>" +
                "<div id=\"jesong_tools_file\" title=\"" + JSLang[jesong.language].chatToolFile + "\"></div>" +
                "<div id=\"jesong_tools_screen\" title=\"" + JSLang[jesong.language].chatToolScreen + "\"></div>" +
                "<div id=\"jesong_tools_opinion\" title=\"" + JSLang[jesong.language].chatToolOpinion + "\"></div>" +
                "<div id=\"jesong_tools_sound\" title=\"" + JSLang[jesong.language].chatToolQuiet + "\"></div>" +
                "<div id=\"jesong_tools_quiet\" title=\"" + JSLang[jesong.language].chatToolQuiet + "\"></div>" +
                "<div id=\"free_tel\" title=\"" + JSLang[jesong.language].chatToolPhone + "\"><input id=\"pc_phone_num\" type=\"text\">\n" +
                "                    <span id=\"pc_phone\" class=\"phone-icon\"></span></div>" +
                "</div>" +
                "<div class=\"jesong-operation-main\">" +
                "<div class=\"jesong-main-import\">" +
                "<textarea id=\"jesong_message\" class=\"test-1\" placeholder=\"" + JSLang[jesong.language].textareaDefault + "\"></textarea>" +
                "</div>" +
                "</div>" +
                "<div class=\"jesong-operation-footer\">" +
                    "<span class=\"jesong-help-block\">" + softLogo + "</span>" +
                    "<button id=\"jesong_chat_send_btn\" class=\"jesong-btn-info\" style=\"background-color:" + jesong.autochat.bgcolor + ";border-color:" + jesong.autochat.bgcolor + "\">" + JSLang[jesong.language].send + "</button>" +
                "</div>" +
            "</div>" +
            "<div class=\"jesong-chat-footer-advertising\" id=\"jesong-chat-footer-advertising\"></div>" +
            "</div>" + jesong.UI.soundHTML() + jesong.UI.backHTML() + jesong.UI.pasteHTML()
    },
    user_tpl: function () {
        return "<div class=\"jesong-service-bubble\" id=\"{recoderId}\">" +
            "<div class=\"jesong-service-bubble-icon\">" +
            "<img src=\"" + jesong.autochat.userHead + "\" alt=\"\"/>" +
            "</div>" +
            "<div class=\"jesong-service-bubble-con\">" +
            "<div class=\"jesong-service-session\"><span class=\"service-nickname\">{nickName}</span><span>{time}</span></div>" +
            "<div class=\"jesong-service-session-con jesong-user-msg svcText\">{msg}</div>" +
            "</div>" +
            "</div>"
    },
    visitor_tpl: function () {
        return "<div class=\"jesong-service-bubble\">" +
            "<div class=\"jesong-service-bubble-icon\" style=\"visibility:hidden;\"></div>" +
            "<div class=\"jesong-service-bubble-con\">" +
            "<div class=\"jesong-service-session jesong-float-right\"><span>" + JSLang[jesong.language].you + "</span><span>{time}</span></div>" +
            "<div class=\"jesong-service-session-con jesong-visitor-session-con vstText jesong-float-right\">{msg}</div>" +
            "</div>" +
            "</div>";
    },
    system_tpl: function (status,message) {
        if(status){
            var str = ""
            if(status == 'error'){
                str = "<span  class=\"bubble-dot-error\"></span>"
            }else if(status == 'success'){
                str = "<span  class=\"bubble-dot-success\"></span>"
            }
            return "<div class=\"jesong-finish-bubble\"> "+str+ message + "</div>";
        }else{
            return "<div class=\"jesong-finish-bubble\">{msg}</div>";
        }
    },
    user_tpl_inputing_phone: function () {
        return "<div id=\"jesong_inputing\" class=\"jesong-service-bubble\">" +
            "<div class=\"jesong-service-bubble-icon\"><img src=\"" + jesong.autochat.userHead + "\"/></div>" +
            "<div class=\"jesong-service-bubble-con\">" +
            "<div class=\"jesong-service-session\"><span class=\"service-nickname\">{nickName}</span><span></span></div>" +
            "<div class=\"jesong-service-session-con\"><img src=\"" + jesong.env.server.file + "static/2019/image/inputting.gif\" alt=\"\" style=\"width:14px;height:14px;\"/><span style=\"line-height:14px;padding-left:4px;\">" + JSLang[jesong.language].inputting + "</span></div>" +
            "</div>" +
            "</div>";
    },
    sendMsgQt: function (type,_this,index) {
        if(type == "rows"){
            Chat.sendMessage(_this.innerHTML);
            jesong.UI.telResponse.length = 0;
            var el = document.getElementsByClassName('msgBtn')
            for (var i = 0; i < el.length; i++) {
                el[i].style.display = 'none'
            }
        }else{
            Chat.sendMessage(jesong.UI.quickColsList[index].substring(2));
            jesong.UI.quickColsList.length = 0;
            _this.parentNode.parentNode.style.display='none';
        }


    },
    weixinPhoneHtml: function (params) {
        var phoneHide = "none !important";
        var weixinHide = "none !important";
        var qqHide = "none !important";
        var qqGroupHide = 'none !important';
        var responseHide = 'none !important';
        var responseHtml = '';
        var quickList = '';
        var weixinWake = "javascript:void(0)";
        var weixinTarget = "_self";
        var btnText = "";


        if (jesong.env.isPhone && jesong.config.canCall == true && params.phone != null) {
            phoneHide = "inline-block !important";
        }
        if (jesong.config.copyWechat == true && params.weixin != null) {
            weixinHide = "inline-block !important";
            btnText = JSLang[jesong.language].weChat
        }
        if (jesong.env.isPhone) {
            if (jesong.browserFun.ucBrowser) {
                weixinWake = "javascript:void(0)";
                weixinTarget = "_self";
            }else {
                weixinWake = "weixin://";
                weixinTarget = "_blank";
            }


        }
        if (jesong.config.copyQq == true && params.qq != null) {
            qqHide = "inline-block !important";
            btnText = 'QQå¤å¶';
        }
        if(params.groupQqAccout != null){
            qqGroupHide = "inline-block !important";
        }

        //å¦ææå¹éå°å¿«æ·åå¤æ¶æ¯åæ¾ç¤º
        if (jesong.UI.telResponse.length > 0) {
            responseHide = "inline-block !important";
            for (var i = 0; i < jesong.UI.telResponse.length; i++) {
                if(jesong.UI.telResponse[i].indexOf('=') != -1){
                    var chat  = jesong.UI.telResponse[i].split("=");
                    var color = "#"+ chat[1];
                    responseHtml += "<a href=\"javascript:void(0)\" target=\"_self\"  onclick=\"jesong.UI.sendMsgQt('rows',this," + i + ")\" class=\" msgBtn \"   style=\"display:" + responseHide + ";background-color:"+ color +";border:1px solid "+  color +"!important;color:#FFFFFF !important;text-decoration:none;\">" + chat[0].substring(2) + "</a>"
                }else {
                    responseHtml += "<a href=\"javascript:void(0)\" target=\"_self\" onclick=\"jesong.UI.sendMsgQt('rows',this," + i + ")\" class=\" msgBtn \"   style=\"display:" + responseHide + ";text-decoration:none;\">" + jesong.UI.telResponse[i].substring(2) + "</a>"
                }
            }
        }

        //å¦ææå¹éå°å¿«æ·åå¤æ¶æ¯åæ¾ç¤ºï¼ç«åï¼
        if(jesong.UI.quickColsList.length>0){
            responseHide = "inline-block";
            quickList+= "<div class=\"quickList\">";
            quickList+= "<ul>";
            for(var i =0; i <jesong.UI.quickColsList.length;i++ ){
                quickList += "<li onclick=\"jesong.UI.sendMsgQt('cols',this," + i + ")\" style=\"display:" + responseHide + "\">" + jesong.UI.quickColsList[i].substring(2) + "</li>";
            }
            quickList+= "</ul>";
            quickList+= "<div class=\"hotTheme\">";
            quickList+= "	ç­é¨é®é¢";
            // quickList+= "	<div class='repalceList' onclick=\"Chat.replaceBatch()\">";
            // quickList+= "	<img id='custHead' src='" + filePathUserIcon  + "static/2019/images/replace.png' alt=''/>";
            // quickList+= "	<span>æ¢ä¸æ¹</span>";
            // quickList+= "	</div>";
            quickList+= "	</div>";
            quickList+= "</div>";
        }

        return "<div class=\"jesong-service-bubble\" id=" + params.recoderId + ">" +
            "<div class=\"jesong-service-bubble-icon\">" +
            "<img src=\"" + jesong.autochat.userHead + "\" alt=\"\"/>" +
            "</div>" +
            "<div class=\"jesong-service-bubble-con\">" +
            "<div class=\"jesong-service-session\"><span  class=\"service-nickname\">" + params.nickName + "</span><span>" + params.time + "</span></div>" +
            "<div class=\"jesong-service-session-con jesong-user-msg svcText\">" + params.msg + "</div>" +
            "<div class=\"jesong-service-phone\">" +
            responseHtml +
            "<a href=\"" + weixinWake + "\" target=\"" + weixinTarget + "\" style=\"display:" + weixinHide + "\" id=\"" + params.recoderId + "1\" setWeixin=\"" + params.weixin + "\">å¾®ä¿¡å¤å¶</a>" +
            "<a href=\"javascript:void(0)\"  target=\"_self\"  style=\"display:" + qqHide + "\" id=\"" + params.recoderId + "3\" setQq=\"" + params.qq + "\">" + btnText + "</a>" +
            "<a href=\"javascript:void(0)\"  target=\"_self\"  style=\"display:" + qqGroupHide + "\" id=\"" + params.recoderId + "4\" setQqGroup=\"" + params.groupQqAccout + "\">å¤å¶ç¾¤å·</a>"+
            "<div style=\"display:inline-block;\" id=\"chatTool" + params.recoderId + "\">" +
            "<a href=\"javascript:void(0)\" style=\"display:" + phoneHide + "\"  id=\"" + params.recoderId + "Tel\" setTel=\"tel:" + params.phone + "\">" + JSLang[jesong.language].telephoneConsultation + "</a>" +
            jesong.UI.getDateHTML(params.dateType,params.recoderId) +
            "</div>" +
            quickList+
            "</div>" +
            "</div>";
    },
    getDateHTML:function(dateType,recorderId){
        var getDateHtml = '';
        var dateType = dateType;
        var recorderId = recorderId;
        var first = dateType == 'dateRange'?'inline-block':'none';
        if(dateType){
            if(jesong.jsType == 1 && jesong.env.isPhone){
                getDateHtml = "<div id=\"dateMain"+recorderId+"\" class=\"date\" style='display: inline-block'>" +
                    "<a href=\"javascript:void(0)\" target=\"_self\" data-id=\""+ recorderId +"\" data-type=\""+ dateType +"\" id=\"dateEmit"+recorderId+"1\" onclick=\"Chat.sendMsgDate(event,this,1)\" style=display:"+ first +">ä¸æ¬¡æç»æ¥æ</a>" +
                    "<a href=\"javascript:void(0)\" target=\"_self\" data-id=\""+ recorderId +"\" data-type=\""+ dateType +"\" id=\"dateEmit"+recorderId+"2\" onclick=\"Chat.sendMsgDate(event,this,2)\"  >æ«æ¬¡æç»æ¥æ</a>" +
                    "<input type=\"text\" style=\"display: none\" id=\"dateOn"+recorderId+"1\" />"+
                    "<input type=\"text\" style=\"display: none\" id=\"dateOn"+recorderId+"2\" />"+
                    "<div>"
            }else {
                getDateHtml = "<div id=\"dateMain"+recorderId+"\" class=\"easyliao-date-main\">" +
                    "<a href=\"javascript:void(0)\" target=\"_self\" data-id=\""+ recorderId +"\" data-type=\""+ dateType +"\" id=\"dateEmit"+recorderId+"1\" onclick=\"Chat.sendMsgDate(event,this,1)\" style=display:"+ first +">ä¸æ¬¡æç»æ¥æ</a>" +
                    "<a href=\"javascript:void(0)\" target=\"_self\" data-id=\""+ recorderId +"\" data-type=\""+ dateType +"\" id=\"dateEmit"+recorderId+"2\" onclick=\"Chat.sendMsgDate(event,this,2)\"  >æ«æ¬¡æç»æ¥æ</a>" +
                    "<input type=\"text\" style=\"display: none\" id=\"dateOn"+recorderId+"1\" />"+
                    "<input type=\"text\" style=\"display: none\" id=\"dateOn"+recorderId+"2\" />"+
                    "<div>"
            }

        }
        return getDateHtml
    },
    baiduMapHTML: function (type,id) {
        return "<div id=\"baiduMap"+id+"\" class=\"map-content map-content-"+type+"\">" +
                "<div class=\"map-content-title map-content-title-"+ type +"\">" +
                "<div class=\"location-icon\"></div>"+ JSLang[jesong.language].baiduTitle +"</div>" +
                "<div class=\"map-location\"> " +
                "<div class=\"location-label location-label-"+ type + "\">"+ JSLang[jesong.language].site +"<span class=\"red location-label-require\">*</span> " +
                "</div><div class=\"location-input location-input-"+ type +"\">" +
                "<div class=\"mapCity\"><div id=\"searchCity"+id+"\" class=\"city-show-content\"><span type=\"text\" id=\"search-city"+id+"\" class=\"easyliao-p10 easyliao-bs city-show-"+ type +"\"></span></div>  <span id=\"cityCheck"+id+"\" class=\"easyliao-triangle\"></span>" +
                "<div id=\"popupCity"+id+"\" class=\"easyliao-popup \">" +
                "<div  class=\"popup-search\">" +
                "<input type=\"text\" placeholder=\""+ JSLang[jesong.language].cityTitle +"\" id=\"searchVal"+id+"\" /> " +
                "<i class=\"search-icon\"></i></div>" +
                "<div id=\"cityList"+id+"\"></div></div>\</div><div class=\"mapSite\">" +
                "<div class=\"overflowH\"><input type=\"text\" id=\"search-site"+id+"\" class=\"site-input\" placeholder=\""+ JSLang[jesong.language].selectAddress +"\"/></div>" +
                "<i class=\"delete-icon delete-site-icon\" id=\"delete-site"+ id +"\"></i>" +
                "<div id=\"popupSite"+id+"\" class=\"easyliao-popup easyliao-left0\">" +
                "<div id=\"siteList"+id+"\"></div></div></div></div></div>" +
                "<div class=\"map-location easyliao-mt15 mt-"+ type +"\">" +
                "<div class=\"location-label location-label-"+type+"\">"+ JSLang[jesong.language].house +" </div>" +
                "<div class=\"location-input location-input-"+type+"\">" +
                "<input type=\"text\" id=\"search-house"+id+"\" class=\"easyliao-p10\" placeholder=\""+ JSLang[jesong.language].houseTitle +"\"/>" +
                "<i class=\"delete-icon delete-house-icon\" id=\"delete-house"+ id +"\"></i>" +
                "</div></div><div class=\"easyliao-footer-btn footer-btn-"+ type +"\">" +
                "<button id=\"siteSave"+id+"\" class=\"save-button\">"+ JSLang[jesong.language].addressSub +"</button></div></div>"
    },
    getCityStyleDiv: function(data,type,id){
        var str = '';
        var val = !type? JS('searchVal'+id).val(): JS('search-site'+id).val();
        for (var i = 0;i<data.length;i++){
            var address = !data[i].address?'':data[i].address;
            str+="<div class=\"map-select-option\" id=\"selectOption"+type+"\"value=\" " + (!type?data[i]:data[i].name) + " \">" +
                (!type?data[i].replace(val,"<span class=\"easyliao-highlight\">" + val + "</span>") :"" +
                    "<p class=\"option-title\">"+ data[i].name.replace(val,"<span class=\"easyliao-highlight\">" + val + "</span>") + "</p>" +
                    "<p class=\"option-address\">"+ address + "</p>") +
                "</div>"
        }
        return "<div class=\"map-select " + (!type?"":"site") + "\">" + str +  "</div>";
    },
    getTooltipStyleDiv:function (type,msg,num) {
        return "<div  id=\""+ num +"\" class=\"easyliao-tooltip tooltip-" + type  + "\"> <div>" + msg + "</div></div>";
    },
    formHTML:function (type,id,msg) {
        return "<div id=\"formHTML" + id + "\" class=\"map-content map-content-"+type+ " "+"form-content-"+type+"\">" +msg +"</div></div>"
    },
    getChatTool:function (recorderId,type,data) {
        var getChatToolHtml = '';
        if(data){
            getChatToolHtml+= "<div  style=\"display:inline-block;\" id=\"chatTool"+recorderId+"\">";
            if(type == 'qrcode'){
                getChatToolHtml+= "<div class=\"wechatQRcode\" style=\"display:inline-block;\">" +
                    "<div class=\"QRcode\" id=\"QRcode"+type+recorderId+"\"><img src=\""+data+"\"/></div>"+
                    "<a href=\"javascript:void(0)\" target=\"_self\"  id=\"qrcode"+recorderId+"\" >"+ JSLang[jesong.language].weChatCode +"</a>" +
                    "</div>"+
                    "</div>";
            }
            if(type == 'weChatGroupQrcode'){
                getChatToolHtml+= "<div class=\"wechatQRcode\" style=\"display:inline-block;\">" +
                    "<div class=\"QRcode\" id=\"QRcode"+type+recorderId+"\"><img src=\""+data+"\"/></div>"+
                    "<a href=\"javascript:void(0)\" target=\"_self\"  id=\"weChatGroupQrcode"+recorderId+"\" >"+ JSLang[jesong.language].weChatGroupCode +"</a>" +
                    "</div>"+
                    "</div>";
            }
            if(type == 'tencentGroupQrcode'){
                getChatToolHtml+= "<div class=\"wechatQRcode\" style=\"display:inline-block;\">" +
                    "<div class=\"QRcode\" id=\"QRcode"+type+recorderId+"\"><img src=\""+data+"\"/></div>"+
                    "<a href=\"javascript:void(0)\" target=\"_self\" id=\"tencentGroupQrcode"+recorderId+"\" >"+JSLang[jesong.language].tencentGroupQrcode+"</a>" +
                    "</div>"+
                    "</div>";
            }
            if(type == 'qqGroupQrcode'){
                getChatToolHtml+= "<div class=\"wechatQRcode\" style=\"display:inline-block;\">" +
                    "<div class=\"QRcode\" id=\"QRcode"+type+recorderId+"\"><img src=\""+data+"\"/></div>"+
                    "<a href=\"javascript:void(0)\" target=\"_self\"  id=\"qqGroupQrcode"+recorderId+"\" >"+JSLang[jesong.language].qqGroupQrcode+"</a>" +
                    "</div>"+
                    "</div>";
            }
            getChatToolHtml+= "</div>"
        }
        return getChatToolHtml
    },
};

/**
 * APIè¯·æ±
 * chat: å»ºç«å¯¹è¯
 * addMessageï¼è®¿å®¢æ¶æ¯æäº¤
 * getMessage: è·åå®¢æ·ç«¯æ¶æ¯
 * exitQueueï¼éåºåé
 * endChat: éåºå¯¹è¯
 * sendFocus: çæµè¯·æ±
 * verifyMobileCodeï¼ææºå·ãéªè¯ç ç¡®è®¤
 * sendVerificationCodeï¼è·åææºéªè¯ç 
 * savePhoneï¼ä¿å­ææºå·
 * isChatExistï¼æ¯å¦å­å¨å¯¹è¯
 * waitQueue: ç­å¾æé
 * getBaiduMap :è·åå°å
 * getMapCity :è·ååå¸
 * getVisitorsAddress: è·åè®¿å®¢ipçå°å
 * getWechatQrcode:è·åå®¢æäºç»´ç 
 * fileUploadï¼pasteå¾çä¸ä¼ 
 * **/
var ApiFun = {
    freeCall:function(params,type){//æ¨æåè´¹çµè¯
        Chat.ajax("chat/freeCall", params, function (resp) {
            if(resp.code){
                //error
                var _tpl = jesong.UI.system_tpl("error", resp.msg);
                JS("jesong_chat_record").append(jesong.commonFun.tpl(_tpl));
            }else{
                //success
                var _tpl = jesong.UI.system_tpl("success", resp.data.msg);
                JS("jesong_chat_record").append(jesong.commonFun.tpl(_tpl));
            }
            alert(resp.msg)
            if(type == 'PC'){
                JS("pc_phone_num").val("")
            }else if(type == 'Mobile'){
                JS("jesong_chat_dialog").hide()
                JS("phone_num").val("")
            }
        });
    },
    getCustomer:function(isDelay){
        Chat.ajax("chat/getCustomer", {
            c: Chat.companyId,
            cId: Chat.customerId,
            isDelay:isDelay?1:0,
            u: Chat.visitorStaticId,
        }, function (resp) {
            var data = resp.data
            Chat.showCustomerInfo(data.userInfo);
        });
    },
    chat: function (params) {
        Chat.ajax("chat/chat", params, function (rs) {
            if (rs.data.type == "CHATING") {
                //å¯¹è¯å»ºç«æå
                Chat.connectSuccess(rs);
                JS.setCookie("jesong_lastServiceUser", rs.data.userId);
            }
            Chat.isRepeatChat = false;
            this.requesting = false;
        });
    },
    chatLogic: function (params) {
        //å¤æ­å·²å¨æ§è¡åå»ºå¯¹è¯çé»è¾
        if(Chat.isRepeatChat){
            return
        } else {
            Chat.isRepeatChat = true
        }
        Chat.ajax("chat/chat", params, function (rs) {
            if(!rs.code){
                Chat.groupId = rs.data.groupId;
                if (rs.data.type == "WAIT_QUEUE") {
                    Chat.initChatUI();
                    Chat.status = 1;
                    JS.setCookie("jesong_queue_" + Chat.companyId + "_id", Chat.groupId, 60 * 10 * 1000);
                    if (rs.data.waitSendMessage && rs.data.waitSendMessage != "") {
                        jesong.autochat.waitSendMsg = rs.data.waitSendMessage;
                    }
                    Chat.handlerWaitQueue(rs);
                } else if (rs.data.type == "CHATING") {
                    //å¯¹è¯å»ºç«æå
                    if (rs.data.visitorId) {
                        visitorId = rs.data.visitorId;
                    }
                    if (!rs.data.isChatExists && rs.data.waitSendMessage != "") {
                        jesong.autochat.waitSendMsg = rs.data.waitSendMessage;
                    }
                    Chat.initChatUI();
                    Chat.connectSuccess(rs);
                    window.clearTimeout(this.autoPopMWinTimeout);
                    window.clearTimeout(this.modalFun);
                    Chat.sendkeyWord(rs.data.keyWord);
                    JS.setCookie("jesong_lastServiceUser", rs.data.userId);
                } else if (rs.data.type == "ERROR") {
                    alert("\u914d\u7f6e\u9519\u8bef\u5bfc\u81f4\u521b\u5efa\u5bf9\u8bdd\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u76f8\u5e94\u7684\u914d\u7f6e");
                } else {
                    //ä¸å¨çº¿ï¼ è½¬çè¨
                    Chat.initLeaveMsgUI();
                    JS("jesong_lm_content").val(jesong.autochat.waitSendMsg);
                    jesong.autochat.waitSendMsg = "";
                    JS("jesong_lm_content").focus();
                    JS("jesong_chat_min_phone_btn").hide();
                }
                Chat.showChatLayout();
                Chat.requesting = false;
            }else{
                console.log(rs.msg)
            }
            Chat.isRepeatChat = false
        });
    },
    addMessage: function (message,isInsert) {
        Chat.receiveSelfMessageNum++;
        Chat.ajax('chat/addMessage', {
            c: Chat.companyId,
            cId: Chat.chatId,
            v: Chat.visitorId,
            msg: jesong.commonFun.replaceHtml(message)
        }, function (resp) {
            if(isInsert == undefined){
                isInsert = true
            }
            if (resp.data.res == 0) { //å¦æå½åå¯¹è¯å­å¨
                if(isInsert){ //æ¯å¦æå¥æ¶æ¯
                    Chat.addMessage(jesong.commonFun.replaceEmoticon(jesong.commonFun.replacelinkHtml(message)), "visitor");
                }
            } else if (resp.data.res == 1) { //
                Chat.receiveSelfMessageNum--;
                if (Chat.status == 2) {
                    Chat.status = 3;
                    if(isInsert){
                        Chat.addMessage(Chat.words.disconnect, "system");
                    }
                    Chat.closeChat();
                }
            }else {
                Chat.receiveSelfMessageNum--;
            }
        }, function () { //å¤±è´¥ èªå¨è¯·æ±
            Chat.receiveSelfMessageNum--;
            window.setTimeout(function () {
                Chat.sendMessage.apply(Chat, [message, times + 1]);
                JS("jesong_message").val(message);
            }, 500);
        });
    },
    getMessage: function (params, s, s1) {
        Chat.ajax("chat/getMessage", params, function (resp) {
            if (s == Chat.receivemessageNum && s1 == Chat.receiveSelfMessageNum) {
                Chat.lastGetMessageTime = null;
                Chat.processMessage(resp.data.msgs || []);
                Chat.firstGetMessage = false;
            } else {
                Chat.getMessage();
            }
        });
    },
    exitQueue: function () {
        Chat.ajax("chat/exitQueue", {
            c: Chat.companyId,
            v: Chat.visitorId,
            g: Chat.groupId
        }, function (rs) {
        });
    },
    endChat: function () {
        Chat.ajax("chat/endChat", {
            c: Chat.companyId,
            cId: Chat.chatId,
            v: Chat.visitorId,
            u: Chat.visitorStaticId,
            type: "force"
        }, function () {
        });
    },
    sendFocus: function (msg) {
        Chat.receiveSelfMessageNum++;
        Chat.ajax(
            'chat/addEvent',
            {
                c: Chat.companyId,
                cId: Chat.chatId,
                v: Chat.visitorId,
                cusId: Chat.customerId,
                msg: msg,
                type: "EVENT_GETFOCUS"
            },
            function (resp) {
                if(resp.data.res != '0'){
                    Chat.receiveSelfMessageNum--;
                }
            }
        );
        if (this.focusTimeout) {
            window.clearInterval(Chat.focusTimeout);
            Chat.focusTimeout = null;
        }
        Chat.lastGetFocusTime = new Date().getTime();
    },
    verifyMobileCode: function (phoneM, code) {
        Chat.ajax(Chat.screenUrl + 'verifyMobile/verifyMobileCode?c=' + Chat.companyId + '&m=' + phoneM + '&vsid=' + Chat.visitorId + '&cid=' + Chat.chatId + '&state=0&code=' + code,
            '',
            function (data) {
                if (data.code == 0) {
                    var list = data.data;
                    msg = JS("jesong_message").val();
                    if (data.code == 0 && list.verify == true) {
                        var getPhone = sessionStorage.getItem('phone');
                        Chat.phoneArr.push(list.mobile);
                        JS("yl_msgBox").remove();
                        sessionStorage.setItem('phone', JSON.stringify(Chat.phoneArr));
                        Chat.clearTime();
                        JS("tips").html("");
                        JS("jesong_message").val("");
                        Chat.sendMessage(msg);
                        Chat.addMessage(JSLang[jesong.language].checkSuccess, "system");


                    } else {
                        if (list.state == 1000) {
                            JS("tips").html(JSLang[jesong.language].timeOut);
                        } else if (list.state == 1001) {
                            JS("tips").html(JSLang[jesong.language].codeUndefind);
                        } else if (list.state == 1002) {
                            JS("tips").html(JSLang[jesong.language].codeError);
                        }
                    }
                }
            })
    },
    sendVerificationCode: function (phoneNum) {
        Chat.ajax(Chat.screenUrl + 'verifyMobile/sendVerificationCode?c=' + Chat.companyId + '&m=' + phoneNum + '&cid=' + Chat.chatId, '',
            function (data) {
                if (data.code == 0) {
                    if (data.data.code == 0) {
                        document.getElementById('tips').innerHTML = '';
                        Chat.getRandomCode();
                    } else {
                        JS("tips").addClass("red").removeClass("el_green");
                        JS("tips").html(JSLang[jesong.language].exceed);
                    }
                }
            })
    },
    savePhone: function (phone) {
        Chat.ajax(Chat.screenUrl + 'verifyMobile/saveMobile?c=' + Chat.companyId + '&m=' + phone + '&vsid=' + Chat.visitorId + '&cid=' + Chat.chatId + '&state=0', '', function () {
        })
    },
    isChatExist: function () {
        Chat.ajax("chat/isChatExist", {vId: Chat.visitorId, uId: Chat.visitorStaticId}, function (resp) {
            if (resp.data.exist) {
                if (resp.data.visitorId) {
                    Chat.visitorId = resp.data.visitorId;
                }
                Chat.connect(resp.data.chatId, resp.data.customerId);
            } else {
                this.firstGetMessage = false;
                Chat.initWaitQueue();
            }
        });
    },
    waitQueue: function (first) {
        Chat.ajax("chat/waitQueue", {
            c: Chat.companyId,
            v: Chat.visitorId,
            u: Chat.visitorStaticId,
            g: Chat.groupId
        }, function (rs) {
            Chat.handlerWaitQueue(rs, first);
        });
    },
    opinion: function (data) {
        Chat.ajax("chat/opinion", data, function (resp) {
            Chat.ajax(
                'chat/addEvent',
                {
                    c: Chat.companyId,
                    cId: Chat.chatId,
                    v: Chat.visitorId,
                    cusId: Chat.customerId,
                    msg: "finn",
                    type: "EVENT_OPINION"
                },
                function () {
                    Chat.addMessage(JSLang[jesong.language].chatOpinionedSuccess, "system");
                }
            );
            Chat.setOpinioned();
            JS("jesong_opinion_layout").hide();
            JS("jesong_mask").hide();
        });
    },
    leaveMessage: function (phone, category, name, email, content) {
        Chat.ajax("leaveMessage/leaveWord", {
            companyId: Chat.companyId,
            groupId: Chat.groupId,
            phone: phone,
            category: category,
            name: name,
            email: email,
            subject: "",
            message: content,
            v: Chat.visitorId,
            u: Chat.visitorStaticId,
            sid: jesong.env.sid,
            promotionId: jesong.env.promotionId,
            chatUrl: window.decodeURIComponent(jesong.commonFun.parcent25(window.location.href)),
            ref: jesong.env.refer ? jesong.env.refer : "",
            first: jesong.env.firstPage,
            sf: jesong.env.spreadFlag ? jesong.env.spreadFlag : ""
        }, function (resp) {
            alert(JSLang[jesong.language].leaveMsgSuccess);//æ¨çé®é¢å·²ç»æåæäº¤ï¼ æä»¬å°å°½å¿«å¤çå®æ¯ï¼è¯·æ¨ç­åå®¢æçæ¶æ¯éç¥ã
            Chat.hideChatLayout();
            Chat.leaveMsgFlag = false;
        });
    },
    liveCopyCount: function (mobileCount, wxCount,qqCount,type) {
        if(!jesong.commonFun.isNullOrEmpty(mobileCount) ||!jesong.commonFun.isNullOrEmpty(wxCount)||!jesong.commonFun.isNullOrEmpty(qqCount)){
            var coincide = window.btoa(''+Chat.chatId);
            Chat.ajax('chat/liveCopyCount?c=' + Chat.companyId + '&copy_mobile_times=' + mobileCount + '&copy_weixin_times=' + wxCount +'&copy_qq_times=' + qqCount+'&copy_type=' + type +  '&cId=' + Chat.chatId+'&coincide=' +coincide, '', function () {
            })
        }
    },
    getBaiduMap: function (params, callback) {
        Chat.ajax("chat/baiduMap/query", params, callback);
    },
    getMapCity:function (params, callback) {
        Chat.ajax("chat/baiduMap/cityQuery", params,callback);
    },
    getVisitorsAddress:function (id,params) {
        Chat.ajax("chat/baiduMap/current", params,function (resp) {
            if(resp.code == 0){
                JS('search-city'+id).html(resp.data.city)
            }
        });
    },
    fileUpload: function(File){
        var formData= new FormData();
        formData.append('file',File);
        var xhr = new XMLHttpRequest();
        xhr.open('post', jesong.env.server.chat+'fileupload/receive2?fileType=.png&chatId='+Chat.chatId+"&cId="+Chat.companyId+"&vId="+Chat.visitorId);
        xhr.send(formData);
    },
    getWechatQrcode:function (weixin,cusId,type,recoderId) {
        var params = {account:weixin,cusId:cusId,type:type};
        //ææºä¸æ§è¡
        if(jesong.jsType == 1 && jesong.env.isPhone){
            return
        }
        Chat.ajax("chat/qrCode", params,function (res) {
            if(res.code == 0){
                var url = res.data;
                var toolType = '';
                switch (type) {
                    case 1:
                        toolType = 'qrcode'; //å¾®ä¿¡
                        break;
                    case 2:
                        toolType = 'weChatGroupQrcode';
                        break;
                    case 3:
                        toolType = 'qqGroupQrcode';
                        break;
                    case 4:
                        toolType = 'tencentGroupQrcode';
                        break;
                }
                var msg = jesong.UI.getChatTool(recoderId,toolType,url);
                var div = document.createElement("div");
                div.innerHTML = msg;
                div.style.display = 'inline-block';
                JS('chatTool'+recoderId).dom.appendChild(div);
                JS(toolType+ recoderId ).hover(function () {
                    JS('QRcode'+toolType+recoderId).addClass("overQrcode");
                }, function () {
                    JS('QRcode'+toolType+recoderId).removeClass("overQrcode");
                })
            }
            if(res.code == -1) Chat[toolType] = false;
        });
    }
}

/**
 * ä¸»å¯¹è¯é»è¾ï¼
 * init: åå§å¯¹è¯çªå£
 * setAutoPopMWinTimes: è®¾ç½®èªå¨å¼¹åºçªå£æ¶é´
 * exitQueueï¼éåºæé
 * sendMessage:è®¿å®¢åéæ¶æ¯å¤ç
 * msgCheck:åéæ¶æ¯ææºéªè¯åè½
 * windowFun:ææºéªè¯ é»è¾ä»£ç 
 * clearCustInputing:éèæ­£å¨è¾å¥æ°æ³¡
 * showCustInputingï¼å±ç¤ºæ­£å¨è¾å¥æ°æ³¡
 * getfocusï¼è·åè¾å¥æ¡ç¦ç¹
 * sendFocusï¼åéç»å®¢æ·ç«¯å½ååå®¹ å±ç¤ºé¢ç¥è¾å¥åå®¹
 * timeClickï¼æ¨¡æç¹å»åæ¶ææºéªè¯çªå£
 * clearTime: æ¸é¤è¨æå¨
 * hideChatï¼éèçªå£
 * closeChatï¼ç»æå¯¹è¯
 * stopReceiveMessageï¼åæ­¢æ¥æ¶æ¶æ¯
 * initChatï¼å½åæ¯å¦å­å¨å¯¹è¯
 * initWaitQueue: åå§åç­å¾æé
 * sendkeyWord: åéå³é®å­
 * getWinChatParam: è·åèå¤©çªå£åæ°
 * waitQueue: æéè¯·æ±
 * handlerWaitQueue: æéå¤ç
 * initAutochat: åå§èªå¨å¯¹è¯
 * showUnReadMessageï¼å¢å æªè¯»æ¶æ¯
 * resetUnReadMessageï¼éç½®æªè¯»æ¶æ¯
 * showUnReadMessageï¼å±ç¤ºæªè¯»æ¶æ¯
 * showChatLayoutï¼æ¾ç¤ºå¯¹è¯çªå£ç»æ
 * hideChatLayoutï¼éèå°çªå£ç»æ
 * addTopImage: æå¥çªå£å¾ç
 * isOpinionedï¼æ¯å¦å·²è¯ä»·
 * setOpinioned: cookie set å·²è¯ä»·
 * addMessage: æ¶æ¯åéè§£æ
 * flashTitleï¼å¨æå±ç¤ºç½é¡µtitle
 * showPopMessageï¼å±ç¤ºæ¶æ¯
 * playSoundï¼å£°é³æ­æ¾
 * clearFlashTitleï¼å é¤ç½é¡µå¨ætitle
 * hideChatLayoutï¼éèå¯¹è¯çªå£
 * isChatLayoutShowï¼å¤æ­å¯¹è¯çªå£æ¯å¦å±ç¤º
 * connect å¯¹è¯è¯·æ±è¿æ¥
 * connectSuccessï¼å»ºç«å¯¹è¯æå
 * startReceiveMessageï¼è·åå®¢æåéçæ¶æ¯
 * getMessage: è·åå®¢ææ¶æ¯è¯·æ±
 * processMessage: å¤çè·åå°å®¢ææ¶æ¯
 * initChatUI: åå§å¯¹è¯UI
 * initLeaveMsgUIï¼åå§åå°çªçè¨+é»è¾
 * initChatEvent: åå§å¯¹è¯UIäºä»¶
 * commitOpinionï¼æäº¤è¯ä»·ä¿¡æ¯
 * openchat: æå¼çªå£
 * setFocusï¼è¾å¥åºè·åç¦ç¹æ¹æ³
 * getRandomCode:åéææºéªè¯ç åè®¡æ¶
 * showSearchList:å±ç¤ºæç´¢çä¸æ
 * initMapEvent: åå§åå°å¾
 * throttle :èæµ
 * selectComfirm: ä¸æéé¡¹çç¡®è®¤
 * setSite: å°åæ¥è¯¢çå¤ç
 * pasteFileï¼ä¸ä¼ ç¡®è®¤æ¹æ³
 * initFormEvent:åå§åè¡¨å
 * showCustomerInfo : å®¢ææ¶æ¯æ´æ¹
 * **/
var Chat = {
    url: jesong.env.server.chat + jesong.version + "/" + jesong.env.compId + "/",
    screenUrl: jesong.env.server.chat, //éªè¯ api url
    chatId: null,
    companyId: jesong.env.compId, //å¬å¸id
    status: 0, //0æªå»ºç«å¯¹è¯ï¼ 1æéï¼ 2å»ºç«å¯¹è¯ï¼ 3å¯¹è¯ç»æ
    visitorId: jesong.env.vId, //è®¿å®¢id
    visitorStaticId: jesong.env.uId, //è®¿å®¢éæid
    leaveMsgFlag: false, //æ¯å¦ä¸ºç¦»çº¿
    siteId: jesong.env.sid,
    firstGetMessage: true, //ç¬¬ä¸æ¬¡è¯·æ±å¯¹è¯
    uiReady: false, //uiæ¯å¦åå§å®æ
    receiveMessageInterval: null, //æ¥æ¶æ¶æ¯æ¶é´æ³ï¼apiè¯·æ±ï¼
    screenActiveX : false, // æªå¾
    screenActiveXTime : null, // æªå¾
    receiveSelfMessageNum: 0,//è®¿å®¢åéæ¶æ¯æ°
    systemMessageNum: 0, //CRMç³»ç»æ¶æ¯æ°
    time: 60, //éªè¯ç åè®¡æ¶
    t: null,
    f: null, //ä¸ä¼ æä»¶æ°æ®åæ°
    customerId: "",//å®¢æid
    customerNick: "",//å®¢ææµç§°
    requesting: false,//æ­£å¨è¯·æ±å¯¹è¯
    jsConfig: jesong.env.confId, //js config id
    phoneArr: [], //éªè¯ææºå·æ°ç»
    userMessageStep: 0, //å®¢æåéæ¶æ¯æ¡æ°
    flashUserMessageColor: ["#000000", "#190707", "#3B0B0B", "#8A0808", "#DF0101", "#FE2E2E"], //å®¢ææ¶æ¯æå­éªçè²å¼
    flashUserMessageInterval: -1, //æ¶é´
    flashtitleInterval: -1, //å¨ætitile
    windowFocus: true, //çªå£ç¦ç¹
    unReadMsgStep: 1, //æªè¯»æ¶æ¯æ°
    etext:"", //è¾å¥åºåå®¹
    unReadMsgTitle: JSLang[jesong.language].newMessage,//ãæ¨ææ°çæ¶æ¯ã
    commonTitle: document.title, //ææ¡£title
    mobileCount: 0,
    wxCount: 0,
    qqCount: 0,
    transferMark: 0, //è½¬æ¥å¯¹è¯ç¶æ 0ä¸ºç©º  1ä¸ºè½¬ç§»å¯¹è¯ 2ä¸ºcloseå»é¤ä¸æ¡å¯¹è¯æ è®°
    opinionValue: 4, //è¯ä»·é»è®¤åæ°
    modalFlagPc: null, //pcç«¯å¼¹çªè®¡æ°
    modalFlagM: null, //ç§»å¨ç«¯å¼¹çªè®¡æ°
    mapLogo:null, // å°å¾æ è¯
    qrcode:true, // å¾®ä¿¡äºç»´ç æ è¯
    weChatGroupQrcode:true, //æ¯å¦æ¥è¯¢äºç»´ç éç½® å¾®ä¿¡ç¾¤å·
    tencentGroupQrcode:true, //æ¯å¦æ¥è¯¢äºç»´ç éç½® å¾®ä¿¡å¬ä¼å·
    qqGroupQrcode:true, //æ¯å¦æ¥è¯¢äºç»´ç éç½® qqç¾¤å·
    isLoadDate:false,
    closeTimeOut:null, //è¿æ¯æ°æ³¡éèè§¦åå®æ¶å¨
    words: {
        disconnect: jesong.words.disconnect,
        welcome: jesong.words.welcome,
        greeting: jesong.words.greeting,
        transchat: jesong.words.transchat,
        transchatTo: JSLang[jesong.language].transchatTo,//æ­£å¨è½¬ç§»å¯¹è¯ç»
        transchatSuccess: JSLang[jesong.language].transchatSuccess//è½¬ç§»å¯¹è¯æå
    },
    dateList:{},  //ç§»å¨ç«¯æ¥ææ¶é´å¤çlist
    datePickerType:'',
    isRepeatChat:false, // å¤æ­å¯¹è¯æ¯å¦å·²ç»åå»ºå®æï¼ä¸åéå¤è°ç¨
    modalFun:null, // å¼¹åºçå®æ¶å¨
    ajax: function (cmd, data, fun, error) {
        if (typeof data == 'object') {
            data.force = "1";
        } else if (typeof data == "string") {
            data += "&force=1";
        }
        var type = jesong.browserFun.type();
        var url = '';
        if(type && type.indexOf('IE') !=-1){
            url = encodeURI(this.url + cmd);
        }else {
            url =  this.url + cmd
        }
        JS.ajax(url, data, function (resp) {
            fun.apply(Chat, [resp]);
        }, function () {
            if (error) {
                error.apply(Chat, []);
            }
        });
    },
    init: function () {
        /**
         * jesong.autochat.width å°çªå£å®½åº¦
         * jesong.autochat.height å°çªå£é«åº¦
         * jesong.autochat.bgcolor çªå£èæ¯è²
         * jesong.autochat.phoneHeight ææºå°çªå£é«åº¦(%)Â Â Â 
         * jesong.autochat.pageTitle é¡µé¢æ é¢
         */
        var chatWidth = jesong.autochat.width;
        var chatHeight = jesong.autochat.height;
        var chatBg = jesong.autochat.bgcolor;
        var getBody = jesong.browserFun.getBody();
        var pageTitle = jesong.autochat.pageTitle;
        var style = "4";
        var logoStyle = "";

        if (chatWidth > getBody.clientWidth) {
            chatWidth = getBody.clientWidth;
        }
        if (chatWidth < 270) { //æå°å®½åº¦
            chatWidth = 270;
        }
        if (chatHeight > getBody.clientHeight) {
            chatHeight = getBody.clientHeight;
        }
        if (chatHeight < 300) { //æå°é«åº¦
            chatHeight = 300;
        }

        //å¦ææ²¡æè®¾ç½®çªå£è²å¼ï¼æ·»å é»è®¤è²å¼
        if (chatBg == "") {
            chatBg = "#3097ef";
        }

        //å¦æä¸ºç§»å¨ç«¯
        if (jesong.jsType == 1 && jesong.env.isPhone) {
            JS("jesong_chat_layout").addClass("jesong-container-full");
            jesong.autochat.height = parseInt(getBody.clientHeight * jesong.autochat.phoneHeight / 100);
            jesong.autochat.width = getBody.clientWidth;
            JS("jesong_chat_layout").css("height", (jesong.autochat.height + 35) + "px").html(jesong.UI.phoneMinChat(jesong.autochat.width, jesong.autochat.height, chatBg, pageTitle));
        } else {
            var defaultLogo = jesong.env.server.file + "static/2019/image/icon.png";
            if (jesong.autochat.pcMinLogo != "") {
                defaultLogo = jesong.autochat.pcMinLogo;
            }
            JS("jesong_chat_layout").addClass("jesong-container-mini");
            // å¤æ­å°çªå£å­å¨å¹¿åé¡µ ä»£ç 
            JS("jesong_chat_layout").html(jesong.UI.pcMiniChat(chatWidth, chatHeight, chatBg, pageTitle, defaultLogo));

            //æå¥miniçªå£
            JS("jesong_chat_min").addClass("jesong-container-mini-badge").css("backgroundColor", jesong.autochat.bgcolor).html(
                "<div class=\"jesong-badge-warning\" id=\"jesong_unread\">0</div>" +
                "<div class=\"jesong-badge-brand\"><img src=\"" + defaultLogo + "\" alt=\"\"/></div>" +
                "<div class=\"jesong-badge-con\" id=\"jesong_chat_min_text\">" + (jesong.autochat.pageTitle == "" ? JSLang[jesong.language].online : jesong.autochat.pageTitle) + "</div>" +
                "<span class=\"jesong-badge-icon\"></span>");
            JS("jesong_chat_min").hide();
        }

        if (jesong.autochat.closeBtn == "0") {
            JS("jesong_chat_close").hide();
            JS("jesong_chat_min_close").hide();
        }

        if (jesong.autochat.minBtn == "0") {
            JS("jesong_chat_min_btn").hide();
        }

        if (!jesong.autochat.maxBtn) {
            JS("jesong_chat_max_btn").hide();
        }

        this.initChat();

        JS("jesong_chat_min_phone_btn").click(function () {
            JS("jesong_chat_dialog").show()
        })
        JS("close_dialog").click(function () {
            JS("jesong_chat_dialog").hide()
        })

        //pcãç§»å¨çªå£æå°æé®äºä»¶
        JS("jesong_chat_min_btn").click(function () {
            //æå°åæé®å¼¹çªæéæ¯å¦å¼å¯ 0å³é­/1å¼å¯
            if (jesong.config.phoneMinimizeTip == 1) {
                //å¯¹è¯idä¸ç­null--å¯¹è¯idã0
                if (this.chatId != null && this.chatId > 0) {
                    if (JS("jesong_opinion_layout").isHidden()) {
                        JS("jesong_file_layout").hide();
                        JS("jesong_emoticon_layout").hide();
                        JS("jesong_opinion_layout").hide();
                        JS("jesong_mask").show();

                        JS("jesong_back_layout").show();
                        var _w = JS("jesong_back_layout").width();
                        var _h = JS("jesong_back_layout").height();
                        JS("jesong_back_layout").css("left", (jesong.autochat.width - _w) / 2 + "px").css("top", (jesong.autochat.height - _h) / 2 + "px");
                    } else {
                        JS("jesong_back_layout").hide();
                    }
                }else{
                    this.hideChatLayout();
                }
            } else {
                this.hideChatLayout();
                this.showUnReadMessage();
                window.clearTimeout(this.modalFun);
                var modalNumM = JS.getCookie("autoAlertNum_M_" + Chat.companyId);
                //å¦ææ¯PC
                if (!(jesong.jsType == 1 && jesong.env.isPhone)) {
                    if (this.status == 2) {
                        //å¦ææ­£å¨å¯¹è¯ å±ç¤ºæ¡å¹
                        JS("jesong_chat_min").show();
                        /**
                         * èªå¨å¼¹åºæ¬¡æ°åè½
                         * èªå¨å¼¹åºå»¶è¿æ¶é´
                         */
                        var modalNumPc = JS.getCookie("autoAlertNum_PC_" + Chat.companyId);
                        if (!(jesong.jsType == 1 && jesong.env.isPhone) && modalNumPc > 0) {
                            this.modalFun = window.setTimeout(function () {
                                //pcå°çªå£
                                if (!jesong.commonFun.isNullOrEmpty(modalNumPc)) {
                                    Chat.showChatLayout.apply(Chat, []);
                                    modalNumPc--;
                                    JS.setCookie("autoAlertNum_PC_" + Chat.companyId, modalNumPc);
                                }
                            }, jesong.autochat.autoPopMWinPeroidPC * 1000)
                        }
                    }
                }else if (jesong.jsType == 1 && jesong.env.isPhone && modalNumM > 0) {
                    this.modalFun = window.setTimeout(function () {
                        //ç§»å¨å°çªå£
                        if (!jesong.commonFun.isNullOrEmpty(modalNumM)) {
                            Chat.showChatLayout.apply(Chat, []);
                            modalNumM--;
                            JS.setCookie("autoAlertNum_M_" + Chat.companyId, modalNumM);
                        }
                    }, jesong.autochat.autoPopMWinPeroid * 1000)
                }
            }
        });
        JS("jesong_chat_max_btn").click(function () {
            var url = jesong.util.getChatUrl('g='+jesong.env.groupId);
            url = url + "&sound=" + (this.sound ? "1" : "0");
            jesong.util.openWindowChat(url);
        });
        var closeFun = function () {
            //closePopTipä¸º1å¼å¯ç¡®è®¤æé 0 å³é­ 1å¼å¯
            if (this.status == 2) {
                //å¤æ­å³é­æé®çåè½
                if(jesong.config.closeFn == 1){
                    if (jesong.config.closePopTip){
                        if (window.confirm(JSLang[jesong.language].closeChatConfirm)) {//ç¡®å®ç»æå½åå¯¹è¯ï¼
                            chatClose();
                        }
                    }else{
                        chatClose();
                    }
                }else {
                    chatHide();
                }
               function chatHide() {
                   Chat.hideChatLayout();
                   Chat.showUnReadMessage();
                   window.clearTimeout(Chat.modalFun);
                   var modalNumM = JS.getCookie("autoAlertNum_M_" + Chat.companyId);
                   //å¦ææ¯PC
                   if (!(jesong.jsType == 1 && jesong.env.isPhone)) {
                       if (Chat.status == 2) {
                           //å¦ææ­£å¨å¯¹è¯ å±ç¤ºæ¡å¹
                           JS("jesong_chat_min").show();
                           /**
                            * èªå¨å¼¹åºæ¬¡æ°åè½
                            * èªå¨å¼¹åºå»¶è¿æ¶é´
                            */
                           var modalNumPc = JS.getCookie("autoAlertNum_PC_" + Chat.companyId);
                           if (!(jesong.jsType == 1 && jesong.env.isPhone) && modalNumPc > 0) {
                               Chat.modalFun = window.setTimeout(function () {
                                   //pcå°çªå£
                                   if (!jesong.commonFun.isNullOrEmpty(modalNumPc)) {
                                       Chat.showChatLayout.apply(Chat, []);
                                       modalNumPc--;
                                       JS.setCookie("autoAlertNum_PC_" + Chat.companyId, modalNumPc);
                                   }
                               }, jesong.autochat.autoPopMWinPeroidPC * 1000)
                           }
                       }
                   }
                }

                function chatClose() {
                    Chat.closeChat();
                    Chat.addMessage(jesong.words.disconnect, "system");
                    if (Chat.isOpinioned()) {
                        Chat.hideChatLayout();
                        JS("jesong_chat_min_close").hide();
                    } else {
                        JS("jesong_chat_min_close").hide();
                        Chat.showChatLayout();
                        JS("jesong_file_layout").hide();
                        JS("jesong_emoticon_layout").hide();
                        if (!(jesong.autochat.tools && jesong.autochat.tools.opinion == "0") && jesong.callerOpinion == "1") {
                            JS("jesong_mask").show();
                            JS("jesong_tools_opinion").click();
                        } else {
                            Chat.hideChatLayout();
                            JS("jesong_chat_min_close").hide();
                        }
                    }
                }
            } else {
                this.hideChatLayout();
                JS("jesong_chat_min_close").hide();
                if (this.status == 1) {
                    this.exitQueue();
                }
            }
        };
        JS("jesong_chat_close").click(closeFun);
        JS("jesong_chat_min_close").click(closeFun);
        if (jesong.jsType != 1 && !jesong.env.isPhone && !(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0")) {
            JS("jesong_chat_logo").bind("mousedown", function (e) {
                var e = e || window.event;
                var disX = e.clientX;
                var disY = e.clientY;
                var right = JS("jesong_chat_layout").dom.style.right.replace("px", "");
                var bottom = JS("jesong_chat_layout").dom.style.bottom.replace("px", "");
                var left = JS("jesong_chat_layout").dom.style.left.replace("px", "");
                if (right == "") {
                    right = 1;
                }
                if (bottom == "") {
                    bottom = 1;
                }
                if (left == "") {
                    left = 1;
                }
                document.onmousemove = function (e) {
                    var e = e || window.event;
                    var r = disX - e.clientX + parseInt(right);
                    var b = disY - e.clientY + parseInt(bottom);
                    var l = -disX + e.clientX + parseInt(left);
                    if (r < 0) {
                        r = 0;
                    } else if (r > jesong.browserFun.getBody().clientWidth - jesong.autochat.width) {
                        r = jesong.browserFun.getBody().clientWidth - jesong.autochat.width;
                    }
                    if (b < 0) {
                        b = 0;
                    } else if (b > jesong.browserFun.getBody().clientHeight - jesong.autochat.height) {
                        b = jesong.browserFun.getBody().clientHeight - jesong.autochat.height;
                    }
                    if (l < 0) {
                        l = 0;
                    } else if (l > jesong.util.getBody().clientWidth - jesong.autochat.width) {
                        l = jesong.util.getBody().clientWidth - jesong.autochat.width;
                    }
                    if (jesong.env.pos == "2" || jesong.env.pos == "3") {
                        JS("jesong_chat_layout").css("left", l + "px");
                    } else {
                        JS("jesong_chat_layout").css("right", r + "px");
                    }
                    JS("jesong_chat_layout").css("bottom", b + "px")
                        .css("_top", "expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,10)||0)-" + b + "-(parseInt(this.currentStyle.marginBottom,10)||0)))");
                    return false;
                };
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
                return false;
            });
        }
    },
    exitQueue: function () {
        this.status = 0;
        window.clearTimeout(this.waitQueueTimeout);
        JS.setCookie("jesong_queue_" + this.companyId + "_id", "", -1);
        ApiFun.exitQueue();
    },
    sendMessage: function (message, times) {
        if (!message) {
            message = JS("jesong_message").val();
        }
        if (!times) {
            times = 1;
        }
        if (times > 3) {
            alert(JSLang[jesong.language].msgSendError);
            return;
        }

        var rel = JS("jesong_message").attr("rel");
        if (!jesong.commonFun.isNullOrEmpty(message) && message != rel) {
            JS("jesong_chat_min").hide();
            this.showChatLayout();
            //é¾æ¥æå
            if (this.status == 2) {
                //å¦æå¼å¯äºç­ä¿¡éªè¯åè½
                var msg = JS("jesong_message").val();
                var phoneNum = jesong.commonFun.getValue(msg);
                var sessionBox = sessionStorage.getItem('phone');
                if (jesong.commonFun.isNullOrEmpty(sessionBox)) {
                    sessionBox = [];
                }

                //ç­ä¿¡é©è­åè½æ³¨é
                // if (jesong.visitorPhoneVerification == 1 && jesong.commonFun.isphoneNum(phoneNum) && sessionBox.indexOf(phoneNum) == -1) {
                // 	this.msgCheck(msg);
                // 	return false;
                // }

                //æ¥æ¶å°çæ¶æ¯  æäº¤ç»åå°  éªè¯æ¯å¦é¾æ¥ä¸­
                ApiFun.addMessage(message);

                ApiFun.sendFocus(""); //æ´æ°å¯¹è¯ç¶æ
                JS("jesong_message").val("");
                if (jesong.jsType == 1 && jesong.env.isPhone) {
                } else {
                    JS("jesong_message").focus();
                }
                window.setTimeout(function () {
                    JS("jesong_message").val("");
                }, 100);
                flag = true;
            } else if (this.status == 1) {
                //æ­£å¨æé
                alert(JSLang[jesong.language].queueing);
            } else {
                //éæ°åå»ºå¯¹è¯
                jesong.util.openChat("g=" + Chat.groupId);
                jesong.autochat.waitSendMsg = message;
            }

        }else{
            alert(JSLang[jesong.language].msgNotEmpty)
        }
    },
    msgCheck: function (msg) {
        var t;
        var msg = JS("jesong_message").val();
        var phoneNum = jesong.commonFun.getValue(msg);
        var html = '<div id="yl_msgBox"><div id="msgCheck">' +
            '<div class="msgCon">' +
            '<p><b><img src="' + jesong.env.server.file + 'static/2019/image/pcWarning.png" alt=""/></b>' + JSLang[jesong.language].tips + '</p>' +
            '<input type="text" placeholder="' + JSLang[jesong.language].placeholder + '" id="msgPhone"/>' +
            '<div class="vcodeBox">' +
            '<input id="codeVal" type="text" />' +
            '<a href="javascript:void(0)" target=\"_self\" id="sedMsg">' + JSLang[jesong.language].sendCode + '</a>' +
            '</div>' +
            '<div class="tips el_green" id="tips"></div>' +
            '</div>' +
            '<div class="msgBtn">' +
            '<a href="javascript:void(0)" target=\"_self\" id="msgCancel">' + JSLang[jesong.language].cancel + '</a>' +
            '<a href="javascript:void(0)" target=\"_self\" id="msgConfirm">' + JSLang[jesong.language].confirm + '</a>' +
            '</div>' +
            '</div></div>';
        JS("yl_msgBox").remove();
        this.clearTime();
        JS("jesong_chat_record").append(html);
        JS("msgPhone").val(phoneNum);
        clearTimeout(t);
        t = setTimeout(this.timeClick(), 300000);
        this.windowFun();
        JS("jesong_chat_record").scrollTop(JS("jesong_chat_record").scrollTop() + 100000);
        return false;
    },
    windowFun: function () {
        //åæ¶æé®
        JS("msgCancel").click(function () {
            var cancelMsg = JS("jesong_message").val();
            var phoneM = JS("msgPhone").val();
            this.clearTime();
            if (jesong.commonFun.isphoneNum(phoneM)) {
                // ApiFun.savePhone(phoneM); //ææºå·ä¿å­æ³¨é
                JS("jesong_message").val(cancelMsg);
            }
            JS("yl_msgBox").remove();
        })

        //ç¡®è®¤æé®
        JS("msgConfirm").click(function () {
            var phoneM = JS("msgPhone").val();
            var code = JS("codeVal").val();
            JS("tips").addClass("red").removeClass("el_green");
            if (jesong.commonFun.isNullOrEmpty(phoneM)) {
                JS("tips").html(JSLang[jesong.language].phoneNotNull);
            }
            if (jesong.commonFun.isNullOrEmpty(code)) {
                JS("tips").html(JSLang[jesong.language].codeNotNull);
            } else if (code.length != 4) {
                JS("tips").html(JSLang[jesong.language].codeError);
            } else {
                ApiFun.verifyMobileCode(phoneM, code);
            }
        })

        //éªè¯ç æé®è§¦å
        JS("sedMsg").click(function () {
            var phoneNum = JS("msgPhone").val();
            if (jesong.commonFun.isphoneNum(phoneNum)) {
                ApiFun.sendVerificationCode(phoneNum);
            } else {
                JS("tips").addClass("red").removeClass("el_green");
                JS("tips").html(JSLang[jesong.language].formatError);
            }
        })
    },
    clearCustInputing: function () {
        JS("jesong_inputing").remove();
    },
    showCustInputing: function () {
        this.clearCustInputing();
        JS("jesong_chat_record").append(jesong.commonFun.tpl(jesong.UI.user_tpl_inputing_phone(), {
            msg: "\u6b63\u5728\u8f93\u5165...",
            nickName: this.customerNick
        }));
        JS("jesong_chat_record").scrollTop(JS("jesong_chat_record").scrollTop() + 100000);
    },
    getfocus: function () {
        var message = JS("jesong_message").val();
        var now = new Date().getTime();
        var rel = JS("jesong_message").attr("rel");
        if (message == rel) {
            message = "";
        }
        if ((this.lastGetFocusTime == null || now - this.lastGetFocusTime > 2000) && this.status == 2 && message != this.etext) {
            this.etext=message;
            // if (jesong.inputText == 1) { //ææºéªè¯æ³¨é
            // 	if (jesong.visitorPhoneVerification == 1 && !getFiveEle(message) || jesong.visitorPhoneVerification == 0) {
            ApiFun.sendFocus(message);
            // }
            // }
        }
        this.focusTimeout = window.setTimeout(function () {
            Chat.getfocus.apply(Chat, []);
        }, 3000);
    },
    timeClick: function () {
        JS("msgCancel").click();
    },
    clearTime: function () {//æ¸ç©ºè®¡æ¶å¨
        clearTimeout(Chat.t);
        Chat.time = 60;
        JS("sedMsg").removeClass("el_gray");
        JS("sedMsg").html(JSLang[jesong.language].sendCode);
    },
    hideChat: function () {
        JS("jesong_chat_layout").hide();
        JS("jesong_chat_min").hide();
    },
    closeChat: function () {
        if (this.status == 2) {
            if (this.chatId != null && this.chatId != '') {
                ApiFun.endChat();
            }
        }
        JS.setCookie("jesong_chat_" + this.companyId + "_id", "", -1);
        JS.setCookie("jesong_chat_user_" + this.companyId + "_id", "", -1);
        this.status = 3;
        this.stopReceiveMessage();
        JS("jesong_chat_mask").hide();
    },
    stopReceiveMessage: function () {
        if (this.receiveMessageInterval) {
            window.clearInterval(this.receiveMessageInterval);
            this.receiveMessageInterval = null;
        }
    },
    setAutoPopMWinTimes: function () {
        if (jesong.jsType == 1 && jesong.env.isPhone && this.status == 2 && jesong.autochat.autoPopMWinTime > 0 && jesong.autochat.autoPopMWinPeroid > 0) {
            var _key = "jesong_autopopMWin_" + this.chatId;
            var autoPopMWinTimes = JS.getCookie(_key);
            if (autoPopMWinTimes) {
                autoPopMWinTimes = parseInt(autoPopMWinTimes);
            } else {
                autoPopMWinTimes = 0;
            }
            window.clearTimeout(this.autoPopMWinTimeout);
            if (autoPopMWinTimes < jesong.autochat.autoPopMWinTime) {
                if (jesong.env.min == 1) {
                    this.autoPopMWinTimeout = window.setTimeout(function () {
                        JS.setCookie(_key, autoPopMWinTimes + 1, 60 * 60 * 1000);
                        Chat.showChatLayout.apply(Chat, []);
                    }, jesong.autochat.autoPopMWinPeroid * 1000);
                } else {
                    this.autoPopMWinTimeout = window.setTimeout(function () {
                        JS.setCookie(_key, autoPopMWinTimes + 1, 60 * 60 * 1000);
                        jesong.util.openChat({});
                    }, jesong.autochat.autoPopMWinPeroid * 1000);
                }
            }
        }
    },
    initChat: function () {
        if (jesong.commonFun.isNullOrEmpty(Chat.modalFlagPc)) {
            JS.setCookie("autoAlertNum_PC_" + this.companyId, jesong.autochat.autoPopMWinTimePC, 12 * 60 * 60 * 1000);
        }
        if (jesong.commonFun.isNullOrEmpty(Chat.modalFlagM)) {
            JS.setCookie("autoAlertNum_M_" + this.companyId, jesong.autochat.autoPopMWinTime, 12 * 60 * 60 * 1000);
        }
        if (this.status != 2) {
            ApiFun.isChatExist();
        } else {
            if (jesong.autochat.connect == "1") {
                jesong.util.openChat({});
            }
        }
    },
    initWaitQueue: function () {
        var waitGroupId = JS.getCookie("jesong_queue_" + this.companyId + "_id");
        if (waitGroupId && waitGroupId > 0) {
            this.groupId = waitGroupId;
            ApiFun.waitQueue(true);
        } else {
            var execFun = function () {
                var flag = Chat.initAutochat.apply(Chat, []);
                if (flag && jesong.autochat.connect == "1") {
                    jesong.util.openChat({});
                } else {
                    Chat.sendkeyWord.apply(Chat, [jesong.autochat.keyWord]);
                }
            };

            if (jesong.autochat.delay > 0) {
                window.setTimeout(execFun, jesong.autochat.delay * 1000);
            } else {
                execFun();
            }
        }
    },
    sendkeyWord: function (keyWord) {
        if (document.referrer && jesong.env.min == 1 && jesong.autochat.sendkeyWord == 1 && keyWord) {
            var reg = /[\u4e00-\u9fa5]/g;
            if (reg.test(keyWord)) {
                jesong.autochat.sendkeyWord = 0;
                this.sendMessage(keyWord);
            }
        }
    },
    getWinChatParam: function () {
        if (jesong.env.min != 1) {
            this.hideChat();
        }
        if (this.status == 2) {
            return {
                chatting: true,
                customerId: this.customerId,
                chatId: this.chatId,
                sound: (this.sound ? "1" : "0")
            };
        } else {
            return {
                chatting: false,
                sound: (this.sound ? "1" : "0")
            };
        }
    },
    handlerWaitQueue: function (rs, first) {
        if (first && (rs.type == "CHATING" || rs.type == "WAIT_QUEUE")) {
            this.initChatUI();
            this.showChatLayout();
        }
        if (rs.type == "CHATING") {
            this.connectSuccess(rs);
        } else if (rs.type == "WAIT_QUEUE") {
            this.status = 1;
            var i = rs.waitIndex;
            //å¯¹ä¸èµ·ï¼ç®åå¨çº¿å®¢æç¹å¿ï¼æ¨åé¢æ ä½å®¢æ·ç­å¾
            if (JS("jesong_wait_text").exist()) {
                JS("jesong_wait_text").html(JSLang[jesong.language].queuePrompt1 + '<font id="jesong_wait_num" color="red">' + i + '</font>' + JSLang[jesong.language].queuePrompt2);
            } else {
                this.addMessage('<span id="jesong_wait_text">' + JSLang[jesong.language].queuePrompt1 + '<font id="jesong_wait_num" color="red">' + i + '</font>' + JSLang[jesong.language].queuePrompt2 + '</span>', "system");
            }
            this.waitQueueTimeout = window.setTimeout(function () {
                if (Chat.status == 1) {
                    Chat.showChatLayout.apply(Chat, []);
                    Chat.waitQueue.apply(Chat, []);
                } else {
                    Chat.hideChatLayout().apply(Chat, []);
                }
            }, 3000);
        } else if (rs.type == "OFFLINE") {
            //æ­¤æ¶éåºæéæèå»ºç«äºå¯¹è¯
            JS.setCookie("jesong_queue_" + this.companyId + "_id", "", -1);
        }
    },
    increaseUnReadMessage: function () {
        var num = JS.getCookie("jesong_chat_unread_" + this.chatId);
        if ((num && num != "") || num == null) {
            if(num == null) num = 0;
            JS.setCookie("jesong_chat_unread_" + this.chatId, parseInt(num) + 1, 60 * 60 * 1000);
        }
    },
    resetUnReadMessage: function () {
        JS.setCookie("jesong_chat_unread_" + this.chatId, "0", 60 * 60 * 1000);
        if(jesong.jsType == 1 && jesong.env.isPhone){
            JS("jesong_msgNumPrompt").hide();
        }else {
            JS("jesong_unread").hide();
        }
    },
    showUnReadMessage: function () {
        var num = JS.getCookie("jesong_chat_unread_" + this.chatId);
        if (num && num != "") {
            num = parseInt(num);
        } else {
            num = 0;
        }
        if (num == 0) {
            if(jesong.jsType == 1 && jesong.env.isPhone){
                JS("jesong_msgNumPrompt").hide();
            }else {
                JS("jesong_unread").hide();
            }
        } else {
            if(jesong.jsType == 1 && jesong.env.isPhone){
                JS("jesong_msgNumPrompt").show().html(num > 99 ? "99+" : num);
            }else {
                JS("jesong_unread").show().html(num > 99 ? "99+" : num);
            }
        }
    },
    showChatLayout: function () {
        if (jesong.autochat && jesong.autochat.hideMonitor) {
            jesong.monitor.hide();
        }
        if (jesong.jsType == 1 && jesong.env.isPhone) {
            var _mask = document.getElementById("jesong_phone_mask");
            if (!_mask || _mask.length == 0) {
                var _div = document.createElement("div");
                _div.id = "jesong_phone_mask";
                _div.className = "jesong_phone_mask";
                document.body.appendChild(_div);

                var _phone_div = document.createElement("div");
                _phone_div.id = "jesong_chat_dialog";
                _phone_div.className = "jesong-min-dialog";
                document.body.appendChild(_phone_div);
                var _phone_html= '<div class="inner-content">' +
                    '<span id="close_dialog" class="icon-close"></span>'+
                    '<p class="inner-title">' + JSLang[jesong.language].telTitle + '</p>' +
                    '<div class="dialog-content">'+
                    '<div><input id="phone_num" placeholder="' + JSLang[jesong.language].telPlaceholder + '"  type="text" /><span id="dialog_call" class="dialog-call">æ¨æ</span></div>'+
                    "                    <p class=\"info\">" + JSLang[jesong.language].telInfo + "</p><div class=\"main-footer\">\n" +
                    "                    <p>" + JSLang[jesong.language].telType + ":<span>139********</span>ï¼" + JSLang[jesong.language].telExample + ":<span>13987459698</span></p>\n" +
                    "                    <p><b>" + JSLang[jesong.language].telCurrent + "<span>" + JSLang[jesong.language].telFree + "!</span></b></p></div></div>\n" +
                    '</div>'
                JS("jesong_chat_dialog").append(_phone_html);
                JS("close_dialog").bind( 'click',function () {
                    JS("jesong_chat_dialog").hide()
                })
                JS("dialog_call").bind( 'click',function () {
                    var phone = JS("phone_num").val()
                    if(phone){
                        var params = {
                            cusId: Chat.customerId,
                            phone: phone,
                            chatId:Chat.chatId,
                            v:Chat.visitorId,
                            u:Chat.visitorStaticId
                        };
                        ApiFun.freeCall(params,'Mobile');

                    }else{
                        alert('è¯·è¾å¥ææºå·')
                    }
                })

            }
            this.wapScrollTop = document.documentElement.scrollTop || document.body.scrollTop;//document.body.scrollTop;
            var bodyclass = document.getElementsByTagName("body")[0].className;
            if (bodyclass.indexOf("jesong_full_body") == -1) {
                document.getElementsByTagName("body")[0].className += " jesong_full_body";
            }
            JS("jesong_chat_layout").css("position", "fixed");
        }
        Chat.resetUnReadMessage();
        JS("jesong_pop_msg").hide();
        JS('jesong_chat_min').hide();
        window.clearTimeout(this.closeTimeOut);
        JS("jesong_chat_layout").show();
    },
    hideChatLayout: function () {
        if (jesong.jsType == 1 && jesong.env.isPhone) {
            var cls = "jesong_full_body";
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className.replace(reg, ' ');
            if(navigator.userAgent.indexOf('baiduboxapp') == -1&&navigator.userAgent.indexOf('UCBrowser') == -1){
                document.body.scrollTop = parseInt(this.wapScrollTop);
            }
            document.documentElement.scrollTop = parseInt(this.wapScrollTop);
            JS("jesong_chat_layout").css("position", "fixed");
            document.body.removeChild(document.getElementById("jesong_phone_mask"));
        }
        JS("jesong_chat_layout").hide();
    },
    initAutochat: function () {
        //æ¯å¦å è½½äºéç½®-æ¯å¦å¯ç¨äºèªå¨å¯¹è¯-æ¯å¦éç½®äºåç»
        if (jesong.autochat && jesong.autochat.use == 1 && jesong.monitor.config && jesong.monitor.config.group) {
            var now = new Date();
            var nh = now.getHours(),
                nm = now.getMinutes();

            function tonum(s) {
                var s1 = s.replace(/:/g, '');
                while (s1.charAt(0) == '0' && s1.length > 1)
                    s1 = s1.substring(1);
                return parseInt(s1);
            }

            var h1 = tonum(jesong.autochat.start);
            var h2 = tonum(jesong.autochat.end);
            var n = tonum(nh + ":" + ((nm < 10) ? ('0' + nm) : nm));
            var _flag = false;
            //å¤æ­èªå¨å¯¹è¯æ¶é´æ®µ æ¯å¦å¨åå»ºèå´
            //if å¼å§æ¶é´å¤§äºç»ææ¶é´ ï¼å¼å§æ¶é´å°äºå½åæ¶é´ï¼ || å½åæ¶é´å¤§äº0 && å°äºç»ææ¶é´
            if (h1 > h2 && ((h1 <= n && n < 2359) || (n > 0 && n <= h2))) {
                _flag = true;
            } else if (h1 <= n && h2 >= n) {
                _flag = true;
            }
            var times = JS.getCookie("jesong_autochat_" + this.companyId + "_time");
            Chat.modalFlagPc = JS.getCookie("autoAlertNum_PC_" + this.companyId);
            Chat.modalFlagM = JS.getCookie("autoAlertNum_M_" + this.companyId);
            //å¤æ­æ¯å¦å¯åå»ºå¯¹è¯
            if ((times == null || jesong.autochat.times == -1 || parseInt(times) < jesong.autochat.times) && _flag) {
                if (jesong.env.min == 1) { //å°çªå£
                    this.initChatUI();
                    this.addTopImage();
                    if (this.words.welcome != "") {
                        this.addMessage(this.words.welcome, "welcome");
                    }
                    //å¦æèªå¨å¼¹çªæ¬¡æ°ä¸ä¸ºç©º
                    if (jesong.commonFun.isNullOrEmpty(Chat.modalFlagPc)) {
                        JS.setCookie("autoAlertNum_PC_" + this.companyId, jesong.autochat.autoPopMWinTimePC, 12 * 60 * 60 * 1000);
                    }
                    if (jesong.commonFun.isNullOrEmpty(Chat.modalFlagM)) {
                        JS.setCookie("autoAlertNum_M_" + this.companyId, jesong.autochat.autoPopMWinTime, 12 * 60 * 60 * 1000);
                    }

                    //å¯ç¨å¯¹è¯æå cookieå¼+1
                    JS.setCookie("jesong_autochat_" + this.companyId + "_time", (times == null ? "1" : parseInt(times) + 1), 12 * 60 * 60 * 1000);
                    return true;
                    //å¦æå¤§çªå£å¹¶ä¸åµå¥ç±»åæ¯ç§»å¨ç«¯æ¯ææº å¹¶ä¸ æ¯ç´æ¥å»ºç«å¯¹è¯
                } else if (jesong.env.min == 0 && jesong.jsType == 1 && jesong.env.isPhone && jesong.autochat.connect == "1") {
                    jesong.util.openChat("g=" + jesong.monitor.config.group);
                    JS.setCookie("jesong_autochat_" + this.companyId + "_time", (times == null ? "1" : parseInt(times) + 1), 12 * 60 * 60 * 1000);
                    return false;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    },
    addTopImage: function () {
        var img = jesong.autochat.topImage;
        if((jesong.jsType == 1 && jesong.env.isPhone) || jesong.env.min == 1){
            img = jesong.autochat.topImageMin ? jesong.autochat.topImageMin : jesong.autochat.topImage;
        }
        if (!jesong.commonFun.isNullOrEmpty(img)) {
            JS("jesong_chat_record").append("<div class=\"jesong-top-image\"><img src=\"" + img + "\"></div>");
        }
    },
    isOpinioned: function () {
        return "true" == JS.getCookie("jesong_chat_opinioned_" + this.chatId);
    },
    setOpinioned: function () {
        JS.setCookie("jesong_chat_opinioned_" + this.chatId, "true", 60 * 60 * 1000);
    },
    addMessage: function (msg, type, time, recoderId,datePickerType) {
        var dateType = '';
        if(datePickerType!=null||datePickerType!=undefined){
            dateType = datePickerType?'date':'dateRange';
        }
        var flag = true;
        var basicMsg = msg;
        var _tpl;
        if (time) {
            time = jesong.commonFun.getTimestamp(time);
        } else {
            time = jesong.commonFun.getTimestamp();
        }

        if (!this.firstGetMessage /*&& jesong.jsType == 1 && jesong.env.isPhone*/) {
            if (type == "visitor") {
                window.setTimeout(function(){
                    Chat.showCustInputing.apply(Chat, []);
                }, 2000);
            }else{
                this.clearCustInputing();
            }
        }

        msg = jesong.commonFun.matchReg(msg);

        msg = msg.replace(/\s|[]|[&nbsp;]{6}/ig, '');
        /*
        * å¤æ­å¯¹è¯æ¡ä¸å·¥å·å±ç¤ºé»è¾
        * */
        //åå·
        var regS = msg.match(/([ææºå¾®ä¿¡çµè¯]{2}[(ï¼]{1}[å¾®ä¿¡ææºçµè¯]{2}[)ï¼]{1}[ï¼:]{1})[-_0-9]{6,19}|([ææºå¾®ä¿¡çµè¯]{2}[\/][å¾®ä¿¡ææºçµè¯]{2}[ï¼:]{1})[-_0-9]{6,19}|([å][å¾®ä¿¡ææºçµè¯]{2}[ï¼:]{1})[-_0-9]{6,19}|([å¾®ä¿¡ææºçµè¯]{2}[åå·åæ­¥]{2}[ï¼:]{1})[-_0-9]{6,19}|([å¾®ä¿¡ææºçµè¯]{2}[å¾®ä¿¡ææºçµè¯]{2}[åå·åæ­¥]{2}[ï¼:]{1})[-_0-9]{6,19}|([ææºçµè¯]{2}[å¾®ä¿¡åå·][ï¼:]{1})[-_0-9]{6,19}|([å¾®ä¿¡]{2}[(ï¼]{1}[çµè¯ææº]{2}[åå·]{2}[)ï¼]{1}[ï¼:]{1})[-_0-9]{6,19}|([çµè¯ææº]{2}[(ï¼]{1}[å¾®ä¿¡]{2}[åå·]{2}[)ï¼]{1}[ï¼:]{1})[-_0-9]{6,19}/g);
        //å¾®ä¿¡
        var regW = msg.match(/((å¨ä¿¡|å¾®ä¿¡|VX|vx|wx|WX)[ï¼:])[-_a-zA-Z0-9]{6,19}|((å¨ä¿¡|å¾®ä¿¡|VX|vx|wx|WX)[å·æ¯æ][ï¼:])[-_a-zA-Z0-9]{6,19}|((å¨ä¿¡|å¾®ä¿¡|VX|vx|wx|WX)[æ²å·][éæ¯][ï¼:])[-_a-zA-Z0-9]{6,19}/g);
        //QQ
        var regQQ = msg.match(/((qq|QQ)[ï¼:])[1-9][0-9]{4,11}/g);
        //ææº
        var regP = msg.match(/([ææº][:ï¼])(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[1-9])[0-9]{8}|([ææº][å·æ¯æ][:ï¼])(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[1-9])[0-9]{8}|([ææº][å·æ²][éæ¯][:ï¼])(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[1-9])[0-9]{8}/g);
        //çµè¯
        var regT = msg.match(/([çµè¯][:ï¼])0\d{2,3}-[1-9]\d{6,7}|([çµè¯][å·æ¯æ][:ï¼])0\d{2,3}-[1-9]\d{6,7}|([çµè¯][å·æ²][éæ¯][:ï¼])0\d{2,3}-[1-9]\d{6,7}}|400((\-[016789]\d{2}-\d{3,4})|[016789]\d{6})/g);
        // å¾®ä¿¡ç¾¤ å¾®ä¿¡å¬ä¼å· qqç¾¤+ç¾¤å·
        var groupRegQQ = msg.match(/((qqç¾¤|QQç¾¤|ç¾¤å·)[ï¼:])[1-9][0-9]{4,11}/g); //qqç¾¤
        var wechatGroup = msg.indexOf('å¾®ä¿¡ç¾¤') != -1;
        var tencentGroup = msg.indexOf('å¾®ä¿¡å¬ä¼å·') != -1;

        //å¿«æ·åå¤--å¹éä»¥**å¼å¤´ ä»¥#ç»å°¾çå¿«æ·åå¤è¯
        var resR = msg.match(/(\*\*).*?(?=\#)/g);
        var quickColsVal = basicMsg.indexOf("quickList");

        var phoneReg = /(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[1-9])[0-9]{8}/;
        var wechatReg = /[-_a-zA-Z0-9]{6,19}/;
        var qqReg = /[1-9][0-9]{4,11}/;
        var telReg = /0\d{2,3}-[1-9]\d{6,7}|400((\-[016789]\d{2}-\d{3,4})|[016789]\d{6})/;

        var wechatAccout = null;
        var phoneAccout = null;
        var qqAccout = null;
        var groupQqAccout = null;
        var telResponse = [];
        var quickColsList = [];
        if (msg.match(wechatReg) != null) {
            if (regS != null) {
                try {
                    wechatAccout = phoneAccout = regS[0].match(phoneReg)[0];
                    if (regW != null) {
                        wechatAccout = regW[0].match(wechatReg)[0];
                    }
                } catch (error) {
                }
            } else if (regW != null) {
                wechatAccout = regW[0].match(wechatReg)[0];
            }
            if (regP != null) {
                phoneAccout = regP[0].match(phoneReg)[0];
            } else if (regT != null) {
                phoneAccout = regT[0].match(telReg)[0];
            } else if (msg.match(phoneReg) != null && wechatAccout == null) {
                phoneAccout = msg.match(phoneReg)[0];
            }

            // if (jesong.browserFun.ucBrowser) {
            //     wechatAccout = null
            // }
        }
        jesong.UI.telResponse.length = 0;
        jesong.UI.quickColsList.length = 0;
        if(regQQ != null){
            qqAccout = regQQ[0].match(qqReg)[0];
        }
        if(groupRegQQ != null){
            groupQqAccout =  groupRegQQ[0].match(qqReg)[0];
        }
        if (resR != null) {
            if(quickColsVal == -1){
                telResponse = resR;
                jesong.UI.telResponse = telResponse;
            }else{
                quickColsVal = resR;
                jesong.UI.quickColsList = quickColsVal;
            }
        }
        /*å¤æ­ç»æ*/
        /*åæ°ä¼ é è·åè¾åºçdomç»æ*/
        var m = {
            msg: basicMsg,
            nickName: this.customerNick,
            time: time,
            path: jesong.env.server.file,
            weixin: wechatAccout,
            phone: phoneAccout
        };
        var vpParams = {
            nickName: this.customerNick,
            time: time,
            msg: basicMsg,
            weixin: wechatAccout,
            phone: phoneAccout,
            recoderId: recoderId,
            qq:qqAccout,
            dateType:dateType,
            groupQqAccout:groupQqAccout
        };
        if (jesong.jsType == 1 && jesong.env.isPhone) {
            if (type == "user") {
                _tpl = jesong.UI.weixinPhoneHtml(vpParams);
            } else if (type == "system") {
                _tpl = jesong.UI.system_tpl();
            } else if (type == "welcome") {
                _tpl = jesong.UI.weixinPhoneHtml(vpParams);
                m["welcome"] = JSLang[jesong.language].welcome;
            } else {
                _tpl = jesong.UI.visitor_tpl();
                flag = false;
            }
        } else {
            if (type == "user") {
                vpParams.phone = null;
                _tpl = jesong.UI.weixinPhoneHtml(vpParams);
            } else if (type == "system") {
                _tpl = jesong.UI.system_tpl();
            } else if (type == "welcome") {
                _tpl = jesong.UI.weixinPhoneHtml(vpParams);
                m["welcome"] = JSLang[jesong.language].welcome;
            } else {
                _tpl = jesong.UI.visitor_tpl();
                flag = false;
            }
        }
        if (this.firstGetMessage) {
            flag = false;
        }
        var lazy = !this.isChatLayoutShow();
        /*if(jesong.jsType == 1 && jesong.env.isPhone){
             if(!this.firstGetMessage || jesong.newChat || (jesong.autochat && jesong.autochat.use == 1)){
                 Chat.showChatLayout.apply(Chat, []);
                 //lazy = true;
             }
         }*/

        if(lazy && !this.firstGetMessage){
            this.increaseUnReadMessage();
        }
        /*ç»æ*/
        //å¾®ä¿¡ãçµè¯è®°æ° å¤å¶ä»¥ååå§åäºä»¶
        var execFun = function(){
            var wxCount = Chat.wxCount
            var qqCount = Chat.qqCount
            var mobileCount = Chat.mobileCount
            JS("jesong_chat_record").append(jesong.commonFun.tpl(_tpl, m));
            JS("jesong_chat_record").scrollTop(JS("jesong_chat_record").scrollTop() + 100000);
            if(dateType){
                var url = '',css='';
                if(jesong.jsType == 1 && jesong.env.isPhone){ // pc/phone
                    url = jesong.env.server.file + 'static/2019/js/calendar.js';
                    css = jesong.env.server.file +  'static/2019/css/LCalender.css'
                }else {
                    url = jesong.env.server.file + 'static/2019/js/datepicker.js';
                    css = jesong.env.server.file +  'static/2019/css/datepicker.css'
                }
                if(!Chat.isLoadDate){ // æ¯å¦å è½½è¿js
                    Chat.dynamicLoadCss(css);
                    Chat.loadJS(url,function () {
                        Chat.initDatePicker(recoderId,dateType)
                    });
                    Chat.isLoadDate = true
                }else {
                    Chat.initDatePicker(recoderId,dateType)
                }
            }

            JS(recoderId+"Tel").click(function(){
                mobileCount++;
                sessionStorage.setItem("mobileCount", mobileCount);
                mobileCount = jesong.commonFun.getStorage("mobileCount") != null ? jesong.commonFun.getStorage("mobileCount") : 0;
                wxCount = jesong.commonFun.getStorage("wxCount") != null ? jesong.commonFun.getStorage("wxCount") : 0;
                qqCount = jesong.commonFun.getStorage("qqCount") != null ? jesong.commonFun.getStorage("qqCount") : 0;
                // æ¨æçµè¯
                ApiFun.liveCopyCount(mobileCount, wxCount,qqCount,0);
                var get_tel = JS(recoderId+"Tel").attr("setTel");
                var a = document.createElement('a');
                a.setAttribute('href', get_tel);
                a.setAttribute('target', "_self");
                // é²æ­¢åå¤æ·»å 
                if(document.getElementById('startTelMedicine')) {
                    document.body.removeChild(document.getElementById('startTelMedicine'));
                }
                document.body.appendChild(a);
                a.click();
            })
            JS(recoderId+"1").click(function(event){
                event.stopPropagation();
                var systemBubble = "<div class=\"jesong-finish-bubble\">"+ JSLang[jesong.language].copySuccess +"</div>";
                var input = document.createElement("input");
                var currentFocus =  JS(recoderId+"1");
                var getWx = JS(recoderId+"1").attr("setWeixin");
                document.body.appendChild(input);
                input.readOnly = 'readonly';
                input.value = getWx==null?phoneAccout:getWx;
                input.focus();
                if (input.setSelectionRange)
                    input.setSelectionRange(0, input.value.length);
                else
                    input.select();
                try {
                    var flag = document.execCommand("Copy");
                } catch (eo) {
                    var flag = false;
                }
                input.blur();
                document.body.removeChild(input);
                currentFocus.focus();
                currentFocus.blur();
                JS("jesong_chat_record").append(systemBubble);

                        //å¾®ä¿¡è®°æ°
                        wxCount++;
                        sessionStorage.setItem("wxCount", wxCount);
                        mobileCount = jesong.commonFun.getStorage("mobileCount") != null ? jesong.commonFun.getStorage("mobileCount") : 0;
                        wxCount = jesong.commonFun.getStorage("wxCount") != null ? jesong.commonFun.getStorage("wxCount") : 0;
                        qqCount = jesong.commonFun.getStorage("qqCount") != null ? jesong.commonFun.getStorage("qqCount") : 0;

                        ApiFun.liveCopyCount(mobileCount, wxCount,qqCount,1);
            });

            JS(recoderId+"3").click(function(event){
                event.stopPropagation();
                var systemBubble = "<div class=\"jesong-finish-bubble\">"+ JSLang[jesong.language].copySuccess +"</div>";
                var input = document.createElement("input");
                var currentFocus =  JS(recoderId+"3");
                var getWx = JS(recoderId+"3").attr("setQq");
                document.body.appendChild(input);
                input.readOnly = 'readonly';
                input.value = getWx==null?phoneAccout:getWx;
                input.focus();
                if (input.setSelectionRange)
                    input.setSelectionRange(0, input.value.length);
                else
                    input.select();
                try {
                    var flag = document.execCommand("Copy");
                } catch (eo) {
                    var flag = false;
                }
                input.blur();
                document.body.removeChild(input);
                currentFocus.focus();
                currentFocus.blur();
                JS("jesong_chat_record").append(systemBubble);

                // -- qqè®¡æ°
                qqCount++;
                sessionStorage.setItem("qqCount", qqCount);
                mobileCount = jesong.commonFun.getStorage("mobileCount") != null ? jesong.commonFun.getStorage("mobileCount") : 0;
                wxCount = jesong.commonFun.getStorage("wxCount") != null ? jesong.commonFun.getStorage("wxCount") : 0;
                qqCount = jesong.commonFun.getStorage("qqCount") != null ? jesong.commonFun.getStorage("qqCount") : 0;
                ApiFun.liveCopyCount(mobileCount, wxCount,qqCount,2);
            });

            JS(recoderId+"4").click(function(event){
                event.stopPropagation();
                var systemBubble = "<div class=\"jesong-finish-bubble\">"+ JSLang[jesong.language].copySuccess +"</div>";
                var input = document.createElement("input");
                var currentFocus =  JS(recoderId+"4");
                var getWx = JS(recoderId+"4").attr("setQqGroup");
                document.body.appendChild(input);
                input.readOnly = 'readonly';
                input.value = getWx==null?phoneAccout:getWx;
                input.focus();
                if (input.setSelectionRange)
                    input.setSelectionRange(0, input.value.length);
                else
                    input.select();
                try {
                    var flag = document.execCommand("Copy");
                } catch (eo) {
                    var flag = false;
                }
                input.blur();
                document.body.removeChild(input);
                currentFocus.focus();
                currentFocus.blur();
                JS("jesong_chat_record").append(systemBubble);
            });


            if(flag){
                Chat.flashTitle.apply(Chat, []);
                Chat.playSound.apply(Chat, [msg]);
            }
        };

        /*
        *  æ§è¡æå¥domç»æ å¤æ­æ¯å¦å»è§¦åè·åäºç»´ç æ è¯  //è®¿å®¢æ¶æ¯åå¤æ­
        * */
        if(type != 'visitor' && jesong.jsType == 0 && !jesong.env.isPhone&& (vpParams.weixin&&Chat.qrcode||vpParams.groupQqAccout&&Chat.qqGroupQrcode||Chat.weChatGroupQrcode&&wechatGroup||Chat.tencentGroupQrcode&&tencentGroup)){
            // wechatQRcode
            _tpl = jesong.UI.weixinPhoneHtml(vpParams);
            if (!this.firstGetMessage && type == "user" && lazy) {
                window.setTimeout(execFun, 1000);
            } else {
                execFun();
            }

            if(vpParams.weixin&&Chat.qrcode){
                ApiFun.getWechatQrcode(vpParams.weixin,Chat.customerId,1,vpParams.recoderId)
            }
            if(Chat.weChatGroupQrcode&&wechatGroup) {
                ApiFun.getWechatQrcode('',Chat.customerId,2,vpParams.recoderId)
            }
            if(Chat.qqGroupQrcode&&vpParams.groupQqAccout) {
                ApiFun.getWechatQrcode(vpParams.groupQqAccout,Chat.customerId,3,vpParams.recoderId)
            }
            if(Chat.tencentGroupQrcode&&tencentGroup){
                ApiFun.getWechatQrcode('',Chat.customerId,4,vpParams.recoderId)
            }
        }else{
            if (!this.firstGetMessage && type == "user" && lazy) {
                window.setTimeout(execFun, 1000);
            } else {
                execFun();
            }
        }

        if (type == "user") {
            this.flashLastUserMessage();
        } else {
            this.stopFlashLastUserMessage();
        }

        // //å¾®ä¿¡ãçµè¯è®°æ°
        // var execFun = function () {
        //     console.log('å¾®ä¿¡ãçµè¯è®°æ°')
        //     JS("jesong_chat_record").append(jesong.commonFun.tpl(_tpl, m));
        //     JS("jesong_chat_record").scrollTop(JS("jesong_chat_record").scrollTop() + 100000);
        //     JS(recoderId + "2").click(function () {
        //         this.mobileCount++;
        //         sessionStorage.setItem("this.mobileCount", this.mobileCount);
        //         this.mobileCount = jesong.commonFun.getStorage("this.mobileCount") != null ? jesong.commonFun.getStorage("this.mobileCount") : 0;
        //         wxCount = jesong.commonFun.getStorage("wxCount") != null ? jesong.commonFun.getStorage("wxCount") : 0;
        //         ApiFun.liveCopyCount(mobileCount, wxCount)
        //     })
        //     JS(recoderId + "1").click(function () {
        //         var systemBubble = "<div class=\"jesong-finish-bubble\">" + JSLang[jesong.language].copySuccess + "</div>";
        //         var input = document.createElement("input");
        //         var getWx = JS(recoderId + "1").attr("setWeixin");
        //         var currentFocus = document.activeElement;
        //         document.body.appendChild(input);
        //         input.readOnly = 'readonly';
        //         input.value = getWx == null ? phoneAccout : getWx;
        //         input.focus();
        //         if (input.setSelectionRange)
        //             input.setSelectionRange(0, input.value.length);
        //         else
        //             input.select();
        //         try {
        //             var flag = document.execCommand("copy");
        //         } catch (eo) {
        //             var flag = false;
        //         }
        //         input.blur();
        //         document.body.removeChild(input);
        //         currentFocus.focus();
        //         currentFocus.blur();
        //         JS("jesong_chat_record").append(systemBubble);
        //
        //         //å¾®ä¿¡è®°æ°
        //         wxCount++;
        //         sessionStorage.setItem("wxCount", wxCount);
        //         mobileCount = jesong.commonFun.getStorage("mobileCount") != null ? jesong.commonFun.getStorage("mobileCount") : 0;
        //         wxCount = jesong.commonFun.getStorage("wxCount") != null ? jesong.commonFun.getStorage("wxCount") : 0;
        //         ApiFun.liveCopyCount(mobileCount, wxCount);
        //     });
        //
        //
        //     if (flag) {
        //         Chat.flashTitle.apply(Chat, []);
        //         Chat.playSound.apply(Chat, [msg]);
        //     }
        // };

    },
    setDocumentTitle:function() {
        if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
            var i = document.createElement('iframe');
            i.src = '/favicon.ico';
            i.style.display = 'none';
            i.onload = function() {
                setTimeout(function(){
                    i.remove();
                }, 9)
            }
            document.body.appendChild(i);
        }
    },
    flashTitle: function () {
        window.focus();
        if (this.windowFocus == false) {
            this.unReadMsgStep++;
            if (this.unReadMsgStep == 3) {
                this.unReadMsgStep = 1;
            }
            if (this.unReadMsgStep == 1) {
                //å¤æ­æ¯å¦å¼å¯æ°æ¶æ¯æé
                if((!(jesong.jsType == 1 && jesong.env.isPhone)&&jesong.config.pcPageReminderNew == 1)||(jesong.jsType == 1 && jesong.env.isPhone&&jesong.config.pageReminderNew == 1)){
                    document.title = this.unReadMsgTitle;
                    Chat.setDocumentTitle()
                }
            }
            if (this.unReadMsgStep == 2) {
                document.title = this.commonTitle;
                Chat.setDocumentTitle()
            }
            if (this.flashtitleInterval == -1) {
                this.flashtitleInterval = window.setInterval(function () {
                    try {
                        Chat.flashTitle.apply(Chat, []);
                    } catch (e) {
                    }
                }, 500);
            }
        }
    },
    playSound: function (msg) {
        if (this.sound) {
            var wav = jesong.env.server.file + "wav/sound.wav";
            var borswer = window.navigator.userAgent.toLowerCase();
            try {
                if (borswer.indexOf("ie") >= 0) {
                    JS("jesong_sound").empty().html('<bgsound src="' + wav + '"/>');
                } else {
                    if (document.getElementById("jesong_audio").paused) {
                        document.getElementById("jesong_audio").play();
                    }
                }
            } catch (e) {
            }
            // try {
            //     if (navigator.vibrate) {
            //         navigator.vibrate(500);
            //     } else if (navigator.webkitVibrate) {
            //         navigator.webkitVibrate(500);
            //     }
            // } catch (e) {
            // }
        }
        if (jesong.jsType == 1 && jesong.env.isPhone) {
            if (!this.isChatLayoutShow()) {
                this.showPopMessage(msg);
                this.showUnReadMessage();
            }
        } else {
            if (!JS("jesong_chat_min").isHidden()) {
                this.showUnReadMessage();
                JS("jesong_chat_min").css("backgroundColor", "#FF7E00").css("borderColor", "#FF7E00");
                JS("jesong_chat_min_text").html(JSLang[jesong.language].newMessage);
            }
        }
    },
    // å¼¹åºä½ç½®
    pop_msg:function(){
        var style = {};
        // è·éå¾è¡¨
        var con = jesong.icon.config;
        var panel = jesong.panel.config;
        var msgBubble = jesong.msg.remind;
        if(msgBubble.msgBubblePos == 3){
            if(!!con){
                switch (panel.position){
                    case 0:
                    case 1:
                        style.top = (panel.vertical - 85) + 'px';
                        break ;
                    case -1:
                        style.top = (con.height + 10) + 'px';
                        break;
                    case 2:
                    case 3:
                        let num = panel.vertical + con.height + 20
                        style.bottom = num +'px';
                        style.top = 'auto';
                        break;
                    case 4:
                    case 5:
                        style.bottom = con.height +'px';
                        style.top = 'auto';
                        break;
                }
            }else {
                style.top = '10px';
            }
        }else{
            switch (msgBubble.msgBubblePos){
                case 0:
                    style.top = '10px';
                    break;
                case 1:
                    style.top = '50%';
                    style['margin-top'] = '-32.5px'
                    break;
                case 2:
                    style.bottom = '10px';
                    style.top = 'auto'
                    break
            }
        }
        return style
    },
    showPopMessage: function (content) {
        // ä¸æ¾ç¤ºæ°æ³¡
        try{
            window.clearTimeout(this.closeTimeOut);
            if(jesong.msg.remind.msgAlertBubble == 0){
                return
            }
            if (content != null) {
                if (content.length > 20) {
                    content = content.substring(0, 18) + "...";
                }
                var jesongPopMsgHead = jesong.autochat.popMsg.head;
                if (jesongPopMsgHead == "") {
                    jesongPopMsgHead = jesong.env.server.file + "/images/chat/201805/head.png";
                }
                var jesongPopMsgTitle = jesong.autochat.popMsg.title;
                if (jesongPopMsgTitle == "") {
                    jesongPopMsgTitle = "\u60a8\u6709\u65b0\u7684\u5ba2\u6237\u6d88\u606f\uff0c\u8bf7\u6ce8\u610f\u67e5\u770b\uff01";
                }
                var jesongPopMsgBgColor = jesong.autochat.popMsg.bgColor;
                var jesongPopMsgColor = jesong.autochat.popMsg.color;
                var jesongPopMsgOpacity = jesong.autochat.popMsg.opacity;

                var style = this.pop_msg()
                if(style['margin-top']) JS("jesong_pop_msg").css('margin-top',style['margin-top']);
                if(style['top']) JS("jesong_pop_msg").css('top',style['top']);
                if(style['bottom']) JS("jesong_pop_msg").css('bottom',style['bottom']);

                JS("jesong_pop_msg").show().css("opacity", jesongPopMsgOpacity/100).css("filter", "alpha(opacity:"+jesongPopMsgOpacity+")")
                    .css("backgroundColor", jesongPopMsgBgColor).css("color", jesongPopMsgColor)
                    .html("<div class=\"jesong-top-bubble\">" +
                        "<div class=\"jesong-top-bubble-icon\">" +
                        "<img src=\"" + jesongPopMsgHead + "\" alt=\"\">" +
                        "</div>" +

                        "<div class=\"jesong-top-bubble-con\">" +
                        "<div class=\"el-title\">" +
                        "<div class=\"el-title-h4\">" + jesongPopMsgTitle + "</div><span id=\"jesong-top-bubble-con-close\"></span>" +
                        "</div>" +
                        "</div>" +
                        "<h4 class=\"jesong-top-text-content\">" + window.decodeURIComponent(content) + "</h4>" +
                        "</div>"
                    );

                JS('jesong-top-bubble-con-close').click(function (e) {
                    JS('jesong_pop_msg').hide()
                    window.clearTimeout(this.closeTimeOut);
                    e.stopPropagation();
                })
                if(jesong.msg.remind.msgBubbleTime == 1){
                    this.closeTimeOut = window.setTimeout(function () {
                        JS('jesong_pop_msg').hide()
                    },1000*(jesong.msg.remind.msgBubbleTimeNum/1))
                }
            }
        }catch (e) {
            console.log(e)
        }
    },
    clearFlashTitle: function () {
        document.title = this.commonTitle;
        Chat.setDocumentTitle()
        if (this.flashtitleInterval == -1) {
            return;
        }
        window.clearInterval(this.flashtitleInterval);
        this.flashtitle = -1;
    },
/*    hideChatLayout: function () {
        if (jesong.jsType == 1 && jesong.env.isPhone) {
            var cls = "jesong_full_body";
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            document.getElementsByTagName("body")[0].className = document.getElementsByTagName("body")[0].className.replace(reg, ' ');
            document.body.scrollTop = this.wapScrollTop;
            document.documentElement.scrollTop = this.wapScrollTop;
            JS("jesong_chat_layout").css("position", "fixed");
            document.body.removeChild(document.getElementById("jesong_phone_mask"));
        }
        JS("jesong_chat_layout").hide();
    },*/
    isChatLayoutShow: function () {
        return !JS("jesong_chat_layout").isHidden();
    },
    connect: function (chatId, customerId) {
        this.firstGetMessage = true;
        this.initChatUI();
        if (jesong.jsType != 1 || !jesong.env.isPhone) {
            this.showChatLayout();
        }
        if (this.requesting == true) {
            return;
        }
        this.requesting = true;
        JS("jesong_chat_record").empty();
        this.visitorId = jesong.env.vId;
        this.visitorStaticId = jesong.env.uId;
        var tag = JS.getCookie("jesong_chat_tag_" + chatId);
        var params = {
            chatUrl: window.decodeURIComponent(jesong.commonFun.parcent25(window.location.href)),
            keys: ["chat_url"],
            values: [window.location.href],
            c: this.companyId,
            v: this.visitorId,
            u: this.visitorStaticId,
            sid: this.siteId,
            cId: chatId,
            n: customerId,
            promotionId: jesong.env.promotionId,
            sf: jesong.env.spreadFlag,
            tag: tag == null || tag == "" ? 0 : tag,
            _CR: "1"
        };
        if (Chat.jsConfig) {
            params["fid"] = Chat.jsConfig;
        }
        if (jesong.env.spreadFlag) {
            params["sf"] = jesong.env.spreadFlag;
        }
        if (jesong.env.firstPage) {
            params["first"] = jesong.env.firstPage;
        } else {
            params["first"] = window.location.href;
        }
        if (jesong.util.getCookie('JESONG_VC')) {
            params["vc"] = jesong.util.getCookie("JESONG_VC");
        }
        var str = jesong.commonFun.getStr('?refer=');
        if (!jesong.commonFun.isNullOrEmpty(str)) {
            params["ref"] = str;
        } else if (jesong.env.refer && jesong.env.refer != "") {
            params["ref"] = jesong.env.refer;
        } else if (document.referrer) {
            try {
                var refer = document.referrer;
                if (refer) {
                    var referDomain = jesong.util.getDomain(refer);
                    var currDomain = window.location.host;
                    if (referDomain && referDomain == currDomain) {
                        refer = "";
                    }
                }
                if (refer != "") {
                    params["ref"] = refer;
                }
            } catch (e) {
            }
            ;
        }
        // å¢å å»¶è¿åéé»è¾
        if(jesong.util.getCookie('jesong_lastServiceUser')){
            params['lastServiceUser'] = jesong.util.getCookie('jesong_lastServiceUser')
        }
        var ext = jesong.util.getReseveKey();
        if (ext != null && ext != "") {
            params["ext"] = ext;
        }
        ApiFun.chat(params);
    },
    connectSuccess: function (rs) {
        this.chatId = rs.data.chatId;
        if (rs.data.groupId) {
            this.groupId = rs.data.groupId;
        }
        if(rs.data.userInfo){
            this.customerId = rs.data.userInfo.userId;
            this.customerNick = rs.data.userInfo.nickName;
            //åå¥å®¢æä¿¡æ¯
            Chat.showCustomerInfo(rs.data.userInfo)
        }else {
            Chat.showCustomerInfo();
            Chat.customerId = '';
            this.customerNick = 'å®¢æ';
        }
        JS.setCookie("jesong_queue_" + this.companyId + "_id", "", -1);
        //åéå¯¹è¯æ¥éè¯­
        this.receivemessageNum = 0;
        this.receiveSelfMessageNum = 0;
        this.status = 2;
        if (rs.data.visitorId) {
            this.visitorId = rs.data.visitorId;
        }
        this.firstGetMessage = true;
        this.startReceiveMessage();
        JS("jesong_chat_record").empty();
        this.addTopImage();
        if(rs.data.userInfo){
            if (rs.data.userInfo.tagMessage) {
                this.addMessage(rs.data.userInfo.tagMessage, "welcome");
            } else {
                var welcome = this.words.welcome;
                if ((jesong.jsType == 1 && jesong.env.isPhone) || jesong.env.min == 1) {
                    welcome = jesong.words.welcomeMin ? jesong.words.welcomeMin : jesong.words.welcome;
                }
                if (welcome != "") {
                    this.addMessage(welcome, "welcome");
                }
            }
            if (rs.data.userInfo.tag) {
                JS.setCookie("jesong_chat_tag_" + this.chatId, rs.data.userInfo.tag, 60 * 60 * 1000);
            } else {
                JS.setCookie("jesong_chat_tag_" + this.chatId, "", -1);
            }
        }else {
            var welcome = this.words.welcome;
            if ((jesong.jsType == 1 && jesong.env.isPhone) || jesong.env.min == 1) {
                welcome = jesong.words.welcomeMin ? jesong.words.welcomeMin : jesong.words.welcome;
            }
            if (welcome != "") {
                this.addMessage(welcome, "welcome");
            }
            JS.setCookie("jesong_chat_tag_" + this.chatId, "", -1);
        }

        //}
        if (jesong.autochat.waitSendMsg != "") {
            this.sendMessage(jesong.autochat.waitSendMsg);
            jesong.autochat.waitSendMsg = "";
        }

        if (jesong.autochat.mask == "1") {
            if (!JS("jesong_chat_mask").exist()) {
                var _div = document.createElement("div");
                _div.id = "jesong_chat_mask";
                _div.className = "jesong_chat_mask";
                document.body.appendChild(_div);
            }

            var b = jesong.util.getBody();
            JS("jesong_chat_mask").show()
                .css("width", Math.max(b.scrollWidth, b.clientWidth) + "px")
                .css("height", Math.max(b.scrollHeight, b.clientHeight) + "px");
        }
        this.setAutoPopMWinTimes();
    },
    startReceiveMessage: function () {
        Chat.getMessage.apply(Chat, []);
        if (!this.receiveMessageInterval) {
            this.receiveMessageInterval = window.setInterval(function () {
                Chat.getMessage.apply(Chat, []);
            }, 3000);
        }
    },
    getMessage: function () {
        var now = new Date().getTime();
        //é¿åç±äºä¸ä¸æ¬¡è¯·æ±æªå¨æ¬æ¬¡è¯·æ±åè¿åï¼èåºç°éå¤æ¶æ¯çé®é¢
        if (this.lastGetMessageTime != null && now - this.lastGetMessageTime < 6000) {
            return;
        }
        var s = this.receivemessageNum;
        var s1 = this.receiveSelfMessageNum;
        this.lastGetMessageTime = now;
        var params = {
            c: this.companyId,
            v: this.visitorId,
            u: this.visitorStaticId,
            cId: this.chatId,
            start: this.receivemessageNum,
            vstart: this.receiveSelfMessageNum,
            sstart: this.systemMessageNum
        };
        ApiFun.getMessage(params, s, s1);
    },
    processMessage: function (msgs) {
        var reg = /(http|https)?(\.gif|\.jpeg|\.png|\.jpg|\.bmp)$/g;
        for (var i = 0; i < msgs.length; i++) {
            var msg = msgs[i];
            var target = "user";
            var msgCon = msg.message;
            try {
                if (msgCon.match(reg) && msg.type != "RECORD_SCREENSHOTS") {
                    msg.type = "RECORD_FILE";
                }
            } catch (error) {
                msg.type = msg.type;
            }
            if (msg.fromUserId == this.visitorId) {
                target = "visitor";
                this.receiveSelfMessageNum++;
            } else if(msg.type == "EVENT_TAKEOVERCHAT"){
                this.receiveSelfMessageNum++;
            }else if(msg.type != "RECORD_SYSTEM"){
                this.receivemessageNum++;
            }
            if (msg.type == "EVENT_CLOSE" || msg.type == "EVENT_END") {
                if (this.status == 2) {
                    this.status = 3;
                    this.addMessage(this.words.disconnect, "system", msg.createTime);
                    this.closeChat();
                } else {
                    this.receivemessageNum--;
                    if (this.transferMark == 1) {
                        this.transferMark = 2;
                    }
                }
            } else if (msg.type == "EVENT_SAMEVISITOR") {
                this.addMessage(JSLang[jesong.language].sameChat, target, msg.createTime);
                this.closeChat();
                this.status = 3;
            } else if (msg.type == "EVENT_TRANSCHAT") {
                this.customerId = msg.exts.customerId;
                this.chatId = msg.exts.chatId;
                JS.setCookie("jesong_chat_" + this.companyId + "_id", this.chatId);

                if (this.customerId.indexOf("/") > 0) {
                    this.customerId = this.customerId.substring(0, this.customerId.indexOf("/"));
                }
                JS.setCookie("jesong_chat_" + this.companyId + "_id", this.chatId);
                JS.setCookie("jesong_chat_user_" + this.companyId + "_id", this.customerId);

                var hidden = msg.exts.hidden;
                if (!hidden) {
                    this.customerNick = msg.exts.nickName;
                    if (jesong.config.showTransferMsg == true) {
                        if (JESONG_MESSAGE_TEXT.msgOfTrans) {
                            this.addMessage(JESONG_MESSAGE_TEXT.msgOfTrans, "system", msg.createTime);
                        }
                        this.addMessage(this.words.transchatTo + this.customerNick, "system", msg.createTime);
                    }
                    this.transHidden = false;
                } else {
                    this.transHidden = true;
                }
                this.status = 3;
                this.receivemessageNum = 0;
                this.receiveSelfMessageNum = 0;
                this.transferMark = 1;
            } else if (msg.type == "EVENT_TRANSCHAT_SUCCESS") {
                if (this.status != 2) {
                    if (!this.transHidden && jesong.config.showTransferMsg == true) {
                        this.addMessage(this.words.transchatSuccess, "system", msg.createTime);
                    }
                    this.status = 2;
                    this.transferMark = 0;
                    this.resetOpinioned()
                }
            } else if (msg.type == "RECORD_FILE") {
                var url = msg.message;
                var patt = /(.flv|.mp4|.MP4|.ogg)$/;
                if (jesong.commonFun.isNullOrEmpty(msg.message)) {
                    return false;
                }
                if (!url.indexOf("https") == 0) {
                    url = url.replace("http", jesong.env.scheme);
                    url = url.replace(":80", ":" + jesong.env.schemePort);
                }
                if (patt.test(msg.message) == true) {
                    this.addMessage("<video style='width:200px' src=" + msg.message + " controls=controls>"+ JSLang[jesong.language].movieTips +"</video>", "user", msg.createTime, msg.recorderId);
                } else {
                    if(target == "visitor"){
                        this.addMessage(JSLang[jesong.language].customerImgSuss, target, msg.createTime, msg.recorderId);
                    }else{
                        this.addMessage(JSLang[jesong.language].downloadFile1 + "<a style='color: inherit;text-decoration: underline;' href=\"" + url + "\" target=\"_blank\">" + JSLang[jesong.language].downloadFile2 + "</a>\u3002", target, msg.createTime, msg.recorderId);
                    }

                }
            } else if (msg.type == "RECORD_SCREENSHOTS" || msg.type == "EVENT_SCREENSHOTS_SELF") {
                var url = msg.message;
                var bubbleArea = JS("jesong-service-bubble-con").width();
                var imgWidth = null;
                if (jesong.commonFun.isNullOrEmpty(msg.message)) {
                    return false;
                }
                if (!url.indexOf("https") == 0) {
                    url = url.replace("http", jesong.env.scheme);
                    url = url.replace(":80", ":" + jesong.env.schemePort);
                }
                if(jesong.config.imgSizeDefault == false){
                    imgWidth = 100;
                }else{
                    imgWidth = jesong.autochat.width >= bubbleArea?jesong.autochat.width:bubbleArea;
                }
                var msgHtml = '<a href="' + url + '" target="_blank"><img src="' + url + '" width="'+ imgWidth +'" ';
                msgHtml += '  border="0"></a>';
                if (msg.type == "RECORD_SCREENSHOTS"||msg.type == "EVENT_SCREENSHOTS_SELF") {
                    this.screenActiveX = true;
                    if (this.screenActiveXTime) {
                        window.clearTimeout(this.screenActiveXTime);
                        this.screenActiveXTime = null;
                    }
                    target = "visitor";
                }
                this.addMessage(msgHtml, target, msg.createTime, msg.recorderId);
            } else if (msg.type == "EVENT_OPINION") {
                if(msg.senderType == 0){
                    this.addMessage(JSLang[jesong.language].opinion1 + "<a href=\"javascript:void(0);\" target=\"_self\" onclick=\"Chat.clickOpinion()\" >" + JSLang[jesong.language].opinion2 + "</a>", target, msg.createTime, msg.recorderId);
                }
            } else if (msg.type == "RECORD_RECORD" || msg.type == "RECORD_SYSTEM") {
                if(msg.type == "RECORD_SYSTEM"){
                    Chat.systemMessageNum++;
                    if(msg.fromUserId != 'system'){
                        return
                    }
                }
                var m = msg.message;
                m = m.replaceAll("/live/emoticon/new/", "/emoticon/");
                if(m.indexOf('data-form')!= -1||m.indexOf('domFilter')!= -1){
                    var left = m.replace(/\&lt\;/g,'<');
                    var right = left.replace(/\&gt\;/g,'>');
                    var quotation = right.replace(/\&quot\;/g,'"');
                    m = quotation
                }
                this.addMessage(m, target, msg.createTime, msg.recorderId);
            } else if (msg.type == "RECORD_RICH_TEXT") {
                var m = msg.message;
                //å¹éæ¥æ-æ¥æèå´
                var s_datePicker = null;
                var s_dateRangePicker = null;
                if(!JS.getCookie('jesong_DatePicker'+msg.recorderId)){
                    s_datePicker =  m.indexOf("s_datePicker");
                }
                if(!JS.getCookie('jesong_DateRangePicker'+msg.recorderId)){
                    s_dateRangePicker = m.indexOf("s_dateRangePicker");
                }
                var dateBol = s_datePicker&&s_datePicker != -1 //åæ¥æå¤æ­
                var dateRangeBol = s_dateRangePicker&&s_dateRangePicker != -1 //æ¥æèå´å¤æ­
                // å¤æ­ä¸ºè¡¨åä¿¡æ¯
                //å¤çmsgè½¬ä¹
                var richMsg = ''
                var left = m.replace(/\&lt\;/g,'<');
                var right = left.replace(/\&gt\;/g,'>');
                var quotation = right.replace(/\&quot\;/g,'"');
                if(/data\-flag\=\"form\-info\"/g.test(quotation)){
                    richMsg =  quotation;
                    if(!JS.getCookie('jesong_formHTML'+ msg.recorderId)){
                        if(jesong.jsType == 1 && jesong.env.isPhone){
                            JS('jesong_chat_record').append(jesong.UI.formHTML('phone',msg.recorderId,richMsg));
                        }else {
                            JS('jesong_chat_record').append(jesong.UI.formHTML('pc',msg.recorderId,richMsg));
                        }
                        var url = '';
                        var equipmentType = '';
                        var css = '';
                        if (jesong.jsType == 1 && jesong.env.isPhone) { // pc/phone
                            url = jesong.env.server.file + 'static/2019/js/calendar.js';
                            equipmentType = 'phone';
                            css = jesong.env.server.file + 'static/2019/css/LCalender.css'
                        } else {
                            url = jesong.env.server.file + 'static/2019/js/datepicker.js';
                            equipmentType = 'pc';
                            css = jesong.env.server.file + 'static/2019/css/datepicker.css'
                        }
                        if(!Chat.isLoadDate){
                            Chat.dynamicLoadCss(css);
                            var formHtmlId = msg.recorderId;
                            Chat.loadJS(url,function () {
                                Chat.initFormEvent(formHtmlId,equipmentType);
                            })
                            Chat.isLoadDate = true
                        }else {
                            Chat.initFormEvent(msg.recorderId,equipmentType);

                        }
                    }
                }else if(dateBol||dateRangeBol){
                    richMsg =  quotation;
                    this.addMessage(richMsg, 'user', msg.createTime, msg.recorderId,dateBol);
                }
                else {
                    m = m.replaceAll("/live/emoticon/new/", "/emoticon/");
                    var patt = m;
                    //å¦æåå«å¾ç åè·åå¾çurl éæ°ç¼è¾ç»æ
                     richMsg = patt.replace(new RegExp(/<img/g), "<img ");
                    this.addMessage(richMsg, target, msg.createTime, msg.recorderId);
                }

            } else if (msg.type == "EVENT_GETFOCUS") {
                if (!this.firstGetMessage) {
                    this.showCustInputing();
                }
            } else if (msg.type == "EVENT_RECORD_REVOKE") {
                var oCarouselBox = document.getElementById(msg.message);
                if (oCarouselBox) {
                    oCarouselBox.parentNode.removeChild(oCarouselBox);
                    JS('baiduMap'+msg.message).hide()
                }
            }else if(msg.type == "EVENT_ACCEPT"){
                if(!this.customerId){
                    this.customerId = msg.fromUserId;
                    JS.setCookie('jesong_lastServiceUser',this.customerId)
                    this.customerNick = msg.viewUserId;
                    var nickName =  document.getElementsByClassName('service-nickname')
                    for (var i = 0; i < nickName.length; i++) {
                        nickName[i].innerHTML = this.customerNick
                    }
                    //
                    ApiFun.getCustomer(1)
                }
            }
            try{
                if(msg.userMessage&&(this.companyId == '25093'||this.companyId == '10793')&&(msg.message == ''||msg.length == 0)&&(msg.type == 'RECORD_RECORD'||msg.type == 'RECORD_RICH_TEXT')){
                    window.sendJesongError(1, "webError-force " + 'msg-blank');
                }
            }catch(e){
                console.log(e)
            }
            if(jesong.config.baiduMap){
                //å°å¾å¹é
                var regBaidu = /è¯·é®æ¨çå°åå¨åªéå¢\ï¼è¡æ¿åº\+å°åº\/è¡é\ï¼è¿è¾¹æ¥è¯¢ä¸æ¯å¦å¨æå¡èå´/g;
                if(regBaidu.test(msg.message)){
                    Chat.mapLogo = msg.recorderId;
                    if(!JS.getCookie('jesong_baiduMap'+ Chat.mapLogo)){
                        // å¤æ­å è½½ pc/phoneçå¼¹åºæ¡
                        if(jesong.jsType == 1 && jesong.env.isPhone){
                            JS('jesong_chat_record').append(jesong.UI.baiduMapHTML('phone',Chat.mapLogo))
                        }else {
                            JS('jesong_chat_record').append(jesong.UI.baiduMapHTML('pc',Chat.mapLogo));
                        }
                        Chat.initMapEvent(Chat.mapLogo);
                    }
                }
            }
        }
    },
    // ç§»å¨å¯¹è¯çª
    dragChat:function(){
        var drag = document.getElementById('jesong_chat_layout');
        // //ç¹å»æç©ä½æ¶ï¼ç¨dragå¯¹è±¡å³å¯ï¼moveåupæ¯å¨å±åºåï¼
        // ä¹å°±æ¯æ´ä¸ªææ¡£éç¨ï¼åºè¯¥ä½¿ç¨documentå¯¹è±¡èä¸æ¯dragå¯¹è±¡(å¦åï¼éç¨dragå¯¹è±¡æ¶ç©ä½åªè½å¾å³æ¹æä¸æ¹ç§»å¨)
        drag.onmousedown = function (event) {
            if(event.target.tagName == 'IMG'||(event.target.className !='jesong-abstract'&&event.target.className !='jesong-abstract-con')){
                return
            }
            var event = event || window.event;  //å¼å®¹IEæµè§å¨
            //    é¼ æ ç¹å»ç©ä½é£ä¸å»ç¸å¯¹äºç©ä½å·¦ä¾§è¾¹æ¡çè·ç¦»=ç¹å»æ¶çä½ç½®ç¸å¯¹äºæµè§å¨æå·¦è¾¹çè·ç¦»-ç©ä½å·¦è¾¹æ¡ç¸å¯¹äºæµè§å¨æå·¦è¾¹çè·ç¦»
            var diffX = event.clientX - drag.offsetLeft;
            var diffY = event.clientY - drag.offsetTop;
            if (typeof drag.setCapture !== 'undefined') {
                drag.setCapture();
            }
            document.onmousemove = function (event) {
                var event = event || window.event;
                var moveX = event.clientX - diffX;
                var moveY = event.clientY - diffY;
                if (moveX < 0) {
                    moveX = 0
                } else if (moveX > window.innerWidth - drag.offsetWidth) {
                    moveX = window.innerWidth - drag.offsetWidth
                }
                if (moveY < 0) {
                    moveY = 0
                } else if (moveY > window.innerHeight - drag.offsetHeight) {
                    moveY = window.innerHeight - drag.offsetHeight
                }
                drag.style.left = moveX + 'px';
                drag.style.top = moveY + 'px'
            }
            document.onmouseup = function (event) {
                this.onmousemove = null;
                this.onmouseup = null;
                //ä¿®å¤ä½çæ¬ie bug
                if (typeof drag.releaseCapture != 'undefined') {
                    drag.releaseCapture();
                }
            }
        }
    },
    pcAdvertising:function(){
        // å¹¿ååºå¤æ­
        if(jesong.autochat.showCustomerInfoMin||jesong.autochat.showAboutUsMin){
            JS('jesong_chat_advertising').show()
            if(jesong.autochat.showCustomerInfoMin){
                JS('jesong_chat_customer').show();
                JS('jesong_chat_customer').addClass('easyliao-active')
            }else {
                JS('jesong_chat_customer').hide();
                JS('jesong_chat_advertising-info').removeClass('easyliao-show')
            }
            if(jesong.autochat.showAboutUsMin) {
                JS('jesong_chat_aboutUS').show();
                if(!jesong.autochat.showCustomerInfoMin) {
                    JS('jesong_chat_aboutUS').addClass('easyliao-active')
                    JS('about-us').addClass('easyliao-show')
                }
            }else {
                JS('jesong_chat_aboutUS').hide();
            }
            JS('jesong-chat-footer-advertising').show()
            //å¹¿ååºä¸å¾ç
            if(!jesong.autochat.ad2ImageURLMin){
                JS('jesong-chat-footer-advertising').html('<img src="' + jesong.env.server.file +'/live/static/2019/images/ad-space.png" alt=""/>')
            }else {
                var html = '';
                if(jesong.autochat.ad2ImageLinkMin){
                    html = '<a href="'+ jesong.autochat.ad2ImageLinkMin +'" target="_blank"><img src="' + jesong.autochat.ad2ImageURLMin +'" alt=""/><\/a>'
                }else {
                    html = '<img src="' + jesong.autochat.ad2ImageURLMin +'" alt=""/>'
                }
                JS('jesong-chat-footer-advertising').html(html)
            }
            //å³äºæä»¬çåå®¹åé¿ç­å¾ç å¹¿ååºä¸å¾çå½±å
            if(jesong.autochat.aboutusLongImgMin != null && jesong.autochat.aboutusLongImgMin != ""){
                JS('about-us').html('<img src="'+ jesong.autochat.aboutusLongImgMin + '">');
                JS('jesong-chat-footer-advertising').html('  ');
            }else if(jesong.autochat.aboutusShortImgMin != null && jesong.autochat.aboutusShortImgMin != ""){
                JS('about-us').html('<img src="'+ jesong.autochat.aboutusShortImgMin + '">');
            }else{
                JS('about-us').html(jesong.autochat.aboutUs);
            }
        }else {
            JS('jesong_chat_advertising').hide()
            JS('jesong-chat-footer-advertising').hide()
        }
        // ç¹å»åæ¢
        JS('jesong_chat_customer').click(function () {
            JS('jesong_chat_customer').addClass('easyliao-active');
            JS('jesong_chat_aboutUS').removeClass('easyliao-active');
            JS('jesong_chat_advertising-info').addClass('easyliao-show')
            JS('about-us').removeClass('easyliao-show')
        });
        JS('jesong_chat_aboutUS').click(function () {
            JS('jesong_chat_customer').removeClass('easyliao-active');
            JS('jesong_chat_aboutUS').addClass('easyliao-active');
            JS('jesong_chat_advertising-info').removeClass('easyliao-show')
            JS('about-us').addClass('easyliao-show')
        });
    },
    initChatUI: function () {
        if (this.uiReady) {
            return;
        }

        var softLogo = JSLang[jesong.language].softLogo;
        if (jesong.autochat.softLogoLicense) {
            softLogo = jesong.autochat.softLogo;
        }

        //åå§å¸å±
        if (jesong.jsType == 1 && jesong.env.isPhone) {
            JS("jesong_chat_body").empty().html(
                jesong.UI.phoneMinChatCon(softLogo)
            );
            // //å¤æ­PCåè´¹çµè¯æ¯å¦å¼å¯
            if(jesong.config.freeCall){
                JS("jesong_chat_min_phone_btn").show();
            }else{
                JS("jesong_chat_min_phone_btn").hide();
            }
        } else {
            JS("jesong_chat_layout")
                .css("width", jesong.autochat.width + "px")
                .css("height", jesong.autochat.height + "px")
                .show();
            JS("jesong_chat_body")
                .css("height", (jesong.autochat.height - 48) + "px");

            JS("jesong_chat_body").empty().html(
                jesong.UI.pcMinChatCon(softLogo)
            );
            // å¹¿ååºè®¾ç½®
            this.pcAdvertising();
            this.dragChat();
            //æªå¾é»è´´å°ææ¬ååéæªå¾
            document.getElementById('jesong_message').addEventListener('paste',function(e){
                if ( !(e.clipboardData && e.clipboardData.items) ) {
                    return;
                }
                for (var i = 0, len = e.clipboardData.items.length; i < len; i++) {
                    var item = e.clipboardData.items[i];
                    if (item.kind === "file") {
                        Chat.f= item.getAsFile();
                        JS("jesong_mask").show();
                        JS("jesong_paste_layout").show();
                        JS("jesong_paste2_reason_cancel").click(function(){
                            JS("jesong_mask").hide();
                            JS("jesong_paste_layout").hide();
                        })
                        JS("jesong_paste_reason_cancel").click(function(){
                            JS("jesong_mask").hide();
                            JS("jesong_paste_layout").hide();
                        })
                    }
                }
            });

            JS("free_tel").bind('mouseenter',function () {
                JS("freecall_info").show()
            })
            JS("free_tel").bind('mouseleave',function () {
                JS("freecall_info").hide()
            })
            JS("pc_phone").bind( 'click',function () {
                var phone = JS("pc_phone_num").val()
                if(phone){
                    var phoneReg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
                    var result = phoneReg.test(phone)
                    var params = {
                        cusId: Chat.customerId,
                        phone: phone,
                        chatId:Chat.chatId,
                        v:Chat.visitorId,
                        u:Chat.visitorStaticId
                    };
                    ApiFun.freeCall(params,'PC');
                }else{
                    alert('è¯·è¾å¥ææºå·')
                }
            })

            JS("jesong_mask").hide();
            JS("jesong_back_layout").hide();
/*            JS("jesong_back_reason_commit").click(hideModal);
            var hideModal = function () {
                this.hideChatLayout();
                this.showUnReadMessage();
                if (!(jesong.jsType == 1 && jesong.env.isPhone)) {
                    if (this.status == 2) {
                        JS("jesong_chat_min").show();
                    } else if (jesong.env.min == 1) {
                        var times = JS.getCookie("jesong_autochat_" + this.companyId + "_time");
                        if (times != null && (jesong.autochat.times == -1 || parseInt(times) < jesong.autochat.times) && jesong.autochat.delay > 0) {
                            window.setTimeout(function () {
                                Chat.showChatLayout.apply(Chat, []);
                            }, jesong.autochat.delay * 1000);
                            JS.setCookie("jesong_autochat_" + this.companyId + "_time", (times == null ? "1" : parseInt(times) + 1), 1 * 60 * 60 * 1000);
                        }
                    }
                } else {
                    this.setAutoPopMWinTimes();
                }
            }*/
            //å¤æ­ç§»å¨åè´¹çµè¯æ¯å¦å¼å¯
            if(jesong.config.freeCall){
                JS("free_tel").show();
            }else{
                JS("free_tel").hide();
            }
        };
        var emoticonHTML = "";
        for (var i = 1; i < 16; i++) {
            var e = jesong.env.server.file + "/emoticon/" + (i > 9 ? i : "0" + i) + ".png";
            var style = "";
            if ((i - 1) % 5 == 0) {
                style = "clear:both;";
            }
            emoticonHTML += "<div id=\"jesong_emoticon_" + i + "\" class=\"jesong-emot\" style=\"" + style + "\"><img src=\"" + e + "\"></img></div>";
        }
        JS("jesong_emoticons").html(emoticonHTML);
        var setEvent = function (id, i) {
            JS(id).hover(function () {
                JS(id).addClass("hover");
            }, function () {
                JS(id).removeClass("hover");
            }).click(function () {
                var message = JS("jesong_message").val();
                var rel = JS("jesong_message").attr("rel");
                if (message == rel) { //åå§å¯¹è¯çé¢UIäºä»¶
                    message = "";
                }
                JS("jesong_message").val(message + i);
                // TODO å¤çåæ ä½ç½®
                JS("jesong_message").setTextValuePosition(JS("jesong_message").val().length);
            });
        };
        for (var i = 1; i < 16; i++) {
            setEvent("jesong_emoticon_" + i, "[" + (i > 9 ? i : "0" + i) + "]");
        }

        //åå§å¯¹è¯çé¢UIäºä»¶
        this.initChatEvent();
        jesong.browserFun.huaweiPhone();
        this.setFocus("jesong_message");
        this.setFocus("jesong_opinion_reason_text");
        this.uiReady = true;
        if (jesong.jsType != 1 || !jesong.env.isPhone) {
            if (jesong.env.pos == "2") {//å±ä¸­
                var left = -jesong.autochat.width / 2 + jesong.util.getBody().clientWidth / 2;
                var top = -jesong.autochat.height / 2 + jesong.util.getBody().clientHeight / 2;
                JS("jesong_chat_layout").css("left", left + "px").css("bottom", top + "px");
                // JS("jesong_chat_min").css("left", left + "px");
            } else if (jesong.env.pos == "3") {//å·¦ä¸è§
                JS("jesong_chat_layout").css("left", "1px");
                // JS("jesong_chat_min").css("left", "1px");
            }
        }
    },
    initLeaveMsgUI: function () {
        var _w = jesong.autochat.width - 110;
        var _h = 140;
        if (!(jesong.jsType == 1 && jesong.env.isPhone)) {
            _h = jesong.autochat.height - 270;
        }
        var _w2 = jesong.autochat.width - 20;
        var clientHeight = jesong.util.getBody().clientHeight;
        var rate = (jesong.autochat.height/clientHeight) * 100;
        JS("jesong_chat_layout")
            .css("width", jesong.autochat.width + "px")
            .css("height", rate + "%").show();
        JS("jesong_chat_body").css("background", "#f5f8fa")
            .css("height", "calc(100% - 45px)");

        JS("jesong_chat_body").empty().html(
            "<div class=\"" + (jesong.jsType == 1 && jesong.env.isPhone ? "jesong-leave-phone" : "jesong-leave-pc") + "\">" +
            "<div class=\"jesong-leave-field\" style=\"height:30px;width:" + _w2 + "px\">" +
            "<div class=\"jesong-leave-title\">" + JSLang[jesong.language].name + "</div>" +//æ¨çå§åï¼\u60a8\u7684\u59d3\u540d\uff1a
            "<div class=\"jesong-leave-content\"><input type=\"text\" id=\"jesong_lm_name\" style=\"width:" + _w + "px;\" rel=\"" + JSLang[jesong.language].namePrompt + "\"/></div>" +//è¯·è¾å¥æ¨çå§å
            "</div>" +
            "<div class=\"jesong-leave-field\" style=\"height:30px;width:" + _w2 + "px\">" +
            "<div class=\"jesong-leave-title\">" + JSLang[jesong.language].mobile + "</div>" +//èç³»æ¹å¼ï¼\u8054\u7cfb\u65b9\u5f0f\uff1a
            "<div class=\"jesong-leave-content\"><input type=\"text\" id=\"jesong_lm_contact\" style=\"width:" + _w + "px;\" rel=\"" + JSLang[jesong.language].contactsPrompt + "\"/></div>" +//è¯·è¾å¥æ¨çææºå·ç æé®ä»¶å°å
            "</div>" +
            "<div class=\"jesong-leave-field\" style=\"height:" + _h + "px;width:" + _w2 + "px\">" +
            "<div class=\"jesong-leave-title\">" + JSLang[jesong.language].content + "</div>" +//çè¨åå®¹ï¼\u7559\u8a00\u5185\u5bb9\uff1a
            "<div class=\"jesong-leave-content\"><textarea id=\"jesong_lm_content\" style=\"width:" + _w + "px;height:" + _h + "px;\" rel=\"" + JSLang[jesong.language].contentPrompt + "\"></textarea></div>" +//è¯·è¾å¥æ¨ççè¨åå®¹
            "</div>" +
            "<div class=\"jesong-leave-btn\"  style=\"width:" + _w2 + "px\">" +
            "<button id=\"jesong_commit\" class=\"jesong-commit\" style=\"background-color:" + jesong.autochat.bgcolor + ";border-color:" + jesong.autochat.bgcolor + ";\">" + JSLang[jesong.language].submit + "</button>" +
            "</div>" +
            "</div>"
        );
        this.setFocus("jesong_lm_name");
        this.setFocus("jesong_lm_contact");
        this.setFocus("jesong_lm_content");
        JS("jesong_commit").hover(function () {
            JS("jesong_commit").addClass("hover");
        }, function () {
            JS("jesong_commit").removeClass("hover");
        }).click(function () {
            if (this.leaveMsgFlag == false) {
                this.leaveMsgFlag = true;

                function _getValue(id) {
                    var value = JS(id).val();
                    var rel = JS(id).attr("rel");
                    if (value != rel) {
                        return value;
                    } else {
                        return "";
                    }
                }

                var name = _getValue("jesong_lm_name");
                var contact = _getValue("jesong_lm_contact");
                var content = _getValue("jesong_lm_content");
                if (name == "" || name.length > 20) {
                    alert(JSLang[jesong.language].nameWarning);//å§åä¸è½ä¸ºç©ºä¸ä¸è½è¶è¿20ä¸ªå­ç¬¦
                    JS("jesong_lm_name").focus();
                    this.leaveMsgFlag = false;
                    return false;
                }
                var category = 0;
                var email = "";
                var phone = "";
                var isPhone = /^(13|14|15|16|17|18|19)\d{9}$/i.test(contact) || /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(contact);
                var isEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(contact);
                if (isPhone) {
                    phone = contact;
                } else if (isEmail) {
                    category = 1;
                    email = contact;
                } else {
                    alert(JSLang[jesong.language].contractsWarning);//è¯·è¾å¥æ­£ç¡®çææºå·ç æé®ä»¶å°å
                    JS("jesong_lm_contact").focus();
                    this.leaveMsgFlag = false;
                    return false;
                }
                if (content == "") {
                    alert(JSLang[jesong.language].contentWarning);//è¯·è¾å¥çè¨åå®¹
                    JS("jesong_lm_content").focus();
                    this.leaveMsgFlag = false;
                    return false;
                }
                ApiFun.leaveMessage(phone, category, name, email, content);
            }
        });
    },
    initChatEvent: function () {
        var setHover = function (id) {
            JS(id).hover(function () {
                JS(id).addClass("hover");
            }, function () {
                JS(id).removeClass("hover");
            });
        };
        setHover("jesong_tools_emoticons");
        setHover("jesong_tools_screen");
        setHover("jesong_tools_opinion");
        setHover("jesong_tools_file");
        setHover("jesong_chat_send_btn");
        var soundFlag = JS.getCookie("jesong_chat_sound");
        if (soundFlag == null || soundFlag == "1") {
            this.sound = true;
        } else {
            this.sound = false;
        }
        if (this.sound) {
            JS("jesong_tools_sound").show();
            JS("jesong_tools_quiet").hide();
        } else {
            JS("jesong_tools_quiet").show();
            JS("jesong_tools_sound").hide();
        }
        var setSound = function () {
            if (this.sound) {
                this.sound = false;
                JS.setCookie("jesong_chat_sound", "-1");
                JS("jesong_tools_quiet").show();
                JS("jesong_tools_sound").hide();
            } else {
                this.sound = true;
                JS.setCookie("jesong_chat_sound", "1");
                JS("jesong_tools_sound").show();
                JS("jesong_tools_quiet").hide();
            }
        };
        if (jesong.autochat.tools && jesong.autochat.tools.quiet == "0") {
            this.sound = false;
            JS("jesong_tools_quiet").hide();
            JS("jesong_tools_sound").hide();
        } else {
            JS("jesong_tools_sound").click(setSound);
            JS("jesong_tools_quiet").click(setSound);
        }
        var maxFun = function () {
            if (jesong.jsType == 1 && jesong.env.isPhone && jesong.env.min == 0) {
                try {
                    Chat.resetUnReadMessage();
                }catch (e) {console.log(e)}
                jesong.util.openChat();
            } else {
                JS("jesong_chat_min").hide();
                this.showChatLayout();
                JS("jesong_chat_min").css("backgroundColor", jesong.autochat.bgcolor).css("borderColor", jesong.autochat.bgcolor);
                JS("jesong_chat_min_text").html(jesong.autochat.pageTitle == "" ? JSLang[jesong.language].online : jesong.autochat.pageTitle);

                JS("jesong_pop_msg").hide();
                window.clearTimeout(this.closeTimeOut);
                JS("jesong_chat_record").scrollTop(JS("jesong_chat_record").scrollTop() + 9999);
            }
        };
        JS("jesong_pop_msg").click(maxFun);
        JS("jesong_chat_min").click(maxFun);
        JS("jesong_chat_min_max").click(maxFun);

        //åéäºä»¶ 
        var Button = document.getElementById("jesong_chat_send_btn");
        var clickEvent = (function () {
            if ('ontouchstart' in document.documentElement === true) {
                return 'touchstart';
            } else {
                return 'click';
            }
        })();

        Button.addEventListener(clickEvent, function (e) {
            Chat.sendMessage.apply(Chat, []);
        })

        JS("jesong_message").keydown(function (e) {
            if (e.keyCode == 13) {
                this.sendMessage();
                var event = arguments.callee.caller.arguments[0] || e;
                if (event && event.preventDefault) {
                    event.preventDefault();
                } else if (window.event) {
                    window.event.cancelBubble = true;
                }
                return false;
            } else {
                this.getfocus();
            }
            return true;
        }).focus(function (e) {
            JS("jesong_opinion_layout").hide();
            JS("jesong_file_layout").hide();
            JS("jesong_emoticon_layout").hide();
        });

        //è¯ä»· è¯åäº¤äº
        var choose = function (opinion) {
            var ch = opinion - 1;
            if (ch < 0 && ch == 0) {
                ch = 0;
            }
            for (var i = 0; i < 5; i++) {
                JS("jesong_op" + i).removeClass("jesong-star-1");
                JS("jesong_op" + i).removeClass("jesong-star-2");
                if (i <= ch) {
                    JS("jesong_op" + i).addClass("jesong-star-1");
                } else {
                    JS("jesong_op" + i).addClass("jesong-star-2");
                }
            }
            var opinionCon = "JSLang[jesong.language].opinionLevel"+(opinion);
            JS("jesong-op-box").html(eval(opinionCon))
            Chat.opinionValue = opinion;
        };
        JS("jesong_op4").click(function () {
            choose(5);
        });
        JS("jesong_op3").click(function () {
            choose(4);
        });
        JS("jesong_op2").click(function () {
            choose(3);
        });
        JS("jesong_op1").click(function () {
            choose(2);
        });
        JS("jesong_op0").click(function () {
            choose(1);
        });

        var hiddenOpinionLayout = function () {
            JS("jesong_mask").hide();
            JS("jesong_opinion_score").show();
            JS("jesong_opinion_reason").hide();
            JS("jesong_opinion_layout").hide();
        };
        var hiddenBackLayout = function () {
            JS("jesong_mask").hide();
            JS("jesong_back_layout").hide();
        };
        JS("jesong_op_cancel").click(hiddenOpinionLayout);
        JS("jesong_opinion_reason_cancel").click(hiddenOpinionLayout);
        JS("jesong_back_reason_cancel").click(hiddenBackLayout);
        JS("jesong_back2_reason_cancel").click(hiddenBackLayout);
        JS("jesong_back_reason_commit").click(function(){
            this.hideChatLayout();
            this.showUnReadMessage();
            JS("jesong_mask").hide();
            JS("jesong_back_layout").hide();
            var modalFun = null;
            var modalNumM = JS.getCookie("autoAlertNum_M_" + Chat.companyId);
            //å¦ææ¯PC
            window.clearTimeout(this.modalFun);
            if (!(jesong.jsType == 1 && jesong.env.isPhone)) {
                //å¦ææ­£å¨å¯¹è¯ å±ç¤ºæ¡å¹
                JS("jesong_chat_min").show();
                /**
                 * èªå¨å¼¹åºæ¬¡æ°åè½
                 * èªå¨å¼¹åºå»¶è¿æ¶é´
                 */
                var modalNumPc = JS.getCookie("autoAlertNum_PC_" + Chat.companyId);
                if (!(jesong.jsType == 1 && jesong.env.isPhone) && modalNumPc > 0) {
                    this.modalFun = window.setTimeout(function () {
                        //pcå°çªå£
                        if (!jesong.commonFun.isNullOrEmpty(modalNumPc)) {
                            Chat.showChatLayout.apply(Chat, []);
                            modalNumPc--;
                            JS.setCookie("autoAlertNum_PC_" + Chat.companyId, modalNumPc);
                        }
                    }, jesong.autochat.autoPopMWinPeroidPC * 1000)
                }
            }else if (jesong.jsType == 1 && jesong.env.isPhone && modalNumM > 0) {
                this.modalFun = window.setTimeout(function () {
                    //ç§»å¨å°çªå£
                    if (!jesong.commonFun.isNullOrEmpty(modalNumM)) {
                        Chat.showChatLayout.apply(Chat, []);
                        modalNumM--;
                        JS.setCookie("autoAlertNum_M_" + Chat.companyId, modalNumM);
                    }
                }, jesong.autochat.autoPopMWinPeroid * 1000)
            }
        });

        JS("jesong_opinion_reason_commit").click(function () {
            if (this.opinionValue != undefined) {
                var desp = JS("jesong_opinion_reason_text").val();
                var rel = JS("jesong_opinion_reason_text").attr("rel");
                if (desp == rel) {
                    desp = "";
                }
                if (desp.replace(/\s/g,'') == "") {
                    if (this.opinionValue == 1 || this.opinionValue == -1) {
                        JS("jesong_opinion_score").hide();
                        JS("jesong_opinion_reason").show();
                    } else {
                        Chat.commitOpinion.apply(Chat, [this.opinionValue, desp]);
                    }
                } else {
                    Chat.commitOpinion.apply(Chat, [this.opinionValue, desp]);
                }
            }
        });


        if (jesong.autochat.tools && jesong.autochat.tools.opinion == "0") {
            JS("jesong_tools_opinion").hide();
        } else {
            JS("jesong_tools_opinion").click(function () {
                if (!this.isOpinioned() && this.chatId != null && this.chatId > 0) {
                    if (JS("jesong_opinion_layout").isHidden()) {
                        JS("jesong_file_layout").hide();
                        JS("jesong_emoticon_layout").hide();
                        JS("jesong_mask").show();

                        JS("jesong_opinion_layout").show();
                        var _w = JS("jesong_opinion_layout").width();
                        var _h = JS("jesong_opinion_layout").height();
                        JS("jesong_opinion_layout").css("left", (jesong.autochat.width - _w) / 2 + "px")
                            .css("top", (jesong.autochat.height - _h) / 2 + "px");
                        //å®¢æç»æå¯¹è¯ è®¿å®¢éæ°åçæ¶æ¯ chatIdåçåå isOpinionedå¯ä»¥è¿å¥ è¯ä»·å±ç¤ºåºç°ä¸æ¬¡æä½ç»æ
                        choose(5)
                    } else {
                        JS("jesong_opinion_layout").hide();
                    }
                } else if (this.chatId != null && this.chatId > 0 && this.isOpinioned()) {
                    alert(JSLang[jesong.language].chatOpinioned);
                }
            });
        }
        JS("jesong_opinion_layout").hide();
        if (jesong.autochat.tools && jesong.autochat.tools.emoticons == "0") {
            JS("jesong_tools_emoticons").hide();
        } else {
            JS("jesong_tools_emoticons").click(function () {
                if (JS("jesong_emoticon_layout").isHidden()) {
                    JS("jesong_opinion_layout").hide();
                    JS("jesong_file_layout").hide();
                    JS("jesong_emoticon_layout").show();
                } else {
                    JS("jesong_emoticon_layout").hide();
                }
            });
        }
        if (jesong.autochat.tools && jesong.autochat.tools.file == "0") {
            JS("jesong_tools_file").hide();
        } else {
            JS("jesong_tools_file").click(function () {
                if (this.chatId != null && this.chatId > 0) {
                    if (JS("jesong_file_layout").isHidden()) {
                        JS("jesong_opinion_layout").hide();
                        JS("jesong_emoticon_layout").hide();
                        JS("jesong_file_layout").show();
                        document.getElementById("jesong_file_frame").src = jesong.env.server.chat + "fileupload/file?chatId=" + this.chatId + "&cId=" + this.companyId + "&vId=" + this.visitorId + "&lang=" + jesong.language;
                    } else {
                        JS("jesong_file_layout").hide();
                    }
                }
            });
        }

        JS("jesong_file_layout").hide();
        JS("jesong_emoticon_layout").hide();

        JS("jesong_file_btn").click(function () {
            if (this.chatId != null && this.chatId > 0) {
                var fileFullPath = JS("jesong_file_input").val();
                if (fileFullPath == '') {
                    alert(JSLang[jesong.language].uploadWarning);//è¯·éæ©ä¸ä¸ªè¦ä¸ä¼ çæä»¶ï¼
                    return false;
                }
                var fileType = fileFullPath.substring(fileFullPath.lastIndexOf('.'));
                var action = jesong.env.server.chat + '/fileupload/receive?fileType=' + fileType + '&chatId=' + this.chatId + '&cId=' + this.companyId;
                var uploadForm = document.getElementById("jesong_file_form");
                uploadForm.action = action;
                uploadForm.submit();
            }
        });

        if (jesong.autochat.tools && jesong.autochat.tools.screen == "0") {
            JS("jesong_tools_screen").hide();
        } else {
            JS("jesong_tools_screen").click(function () {
                if (this.status == 2) {
                    var url = "ScreenCat://" + this.screenUrl
                        + "/fileupload/screenUpload?c=" + this.companyId + "&cId=" + this.chatId + "&v=" + this.visitorId + "&n=" + this.customerId;
                    document.getElementById("jesong_frame").src = url;
                    if (this.screenActiveX == false && this.screenActiveXTime == null) {
                        this.screenActiveXTime = window.setTimeout(function () {
                            Chat.screenActiveXTime = null;
                            //var msg="ç³»ç»æç¤ºï¼ç³»ç»æ£æµå°æ¨å°æªå®è£æªå±æä»¶ï¼ è¯·å<a href=\""+Chat.screenUrl+"/jesong-screen-1.0.rar\" target=\"jesong_frame\">ä¸è½½</a>æªå±æä»¶å¹¶å®è£";
                            var msg = JSLang[jesong.language].screenWarning1 + "<a href=\"https://glive.easyliao.com/live/jesong-screen-1.1.rar\" target=\"jesong_frame\">"
                                + JSLang[jesong.language].screenWarning2 + "</a>" + JSLang[jesong.language].screenWarning3;
                            Chat.addMessage.apply(Chat, [msg, "system"]);
                        }, 15000);
                    }
                }
            });
        }
    },
    commitOpinion: function (op, desp) {
        var data = {
            cId: this.chatId, c: this.companyId, op: op, b_op: 4, desp: desp, v: this.visitorId, u: this.visitorStaticId
        };
        ApiFun.opinion(data);
        if (this.status != 2) {
            JS("jesong_chat_min").hide();
            this.hideChatLayout();
        }
    },
    openchat: function (params) {
        if (this.requesting == false) {
            this.requesting = true;

            if (typeof params == "object") {
                params["_CR"] = "1";
                if (jesong.ocpc) {
                    params.ocpcPlatform = jesong.ocpc.platform;
                    params.ocpcCondition = jesong.ocpc.condition;
                    params.ocpcConfigId = jesong.ocpc.configId;
                }
                ;
                if (Chat.jsConfig != null && Chat.jsConfig != "") {
                    params["fid"] = Chat.jsConfig;
                }
                if(jesong.util.getCookie('jesong_lastServiceUser')){
                    params['lastServiceUser'] = jesong.util.getCookie('jesong_lastServiceUser')
                }
            } else if (typeof params == "string") {
                params += "&_CR=1";
                if (jesong.ocpc) {
                    params += "&ocpcPlatform=" + jesong.ocpc.platform;
                    params += "&ocpcCondition=" + jesong.ocpc.condition;
                    params += "&ocpcConfigId=" + jesong.ocpc.configId;
                }
                if (Chat.jsConfig != null && Chat.jsConfig != "") {
                    params += "&fid=" + Chat.jsConfig;
                }
                if(jesong.util.getCookie('jesong_lastServiceUser')){
                    var lastServiceUser = '&lastServiceUser=' + jesong.util.getCookie('jesong_lastServiceUser')
                    params += lastServiceUser
                }
            }

            ApiFun.chatLogic(params);
        }
    },
    setFocus: function (id) {
        JS(id).focus(function () {
            JS(id).removeClass("jesong_text_blur");
            if (id == "jesong_message") {
                if (jesong.jsType == 1 && jesong.env.isPhone) {
                    JS("jesong_chat_phone_bottom").css("position", "absolute").css("bottom", "0px").css("left", "0px").css("right", "0px");
                    if (jesong.browserFun.phoneSystem() == "IOS" && (jesong.browserFun.baiduBrowser || (jesong.browserFun.ucBrowser))) {
                        if (this.firstMessageFocus) {
                            window.setTimeout(function () {
                                JS("jesong_message").blur();
                            }, 100);
                            this.firstMessageFocus = false;
                        }
                    } else if (navigator.userAgent.indexOf('VivoBrowser') != -1) {
                        var n = 0;
                        timer = setInterval(function () {
                            if (n < 3) {
                                n++;
                            } else {
                                clearInterval(timer);
                            }
                            document.body.scrollTop = document.body.scrollHeight;
                        }, 300);
                    } else if (jesong.browserFun.phoneSystem() == "ANDROID") {
                        setTimeout(function () {
                            document.activeElement.scrollIntoViewIfNeeded();
                            document.activeElement.scrollIntoView();
                        }, 500);
                    }
                    var $inputs = document.querySelectorAll('#jesong_message');
                    jesong.browserFun.onKeybord($inputs,id);
                    window.setTimeout(function () {
                        if (!jesong.browserFun.needScroll()) {
                            document.getElementById("jesong_message").scrollIntoView();
                        }
                    }, 600);
                }
            }else if(id == 'jesong_opinion_reason_text'){
                if (jesong.jsType == 1 && jesong.env.isPhone) {
                    var $inputs = document.querySelectorAll('#jesong_opinion_reason_text');
                    jesong.browserFun.onKeybord($inputs,id);
                }
            }
        }).blur(function () {
            if (id == "jesong_message") {
                if (jesong.jsType == 1 && jesong.env.isPhone) {
                    var height = jesong.browserFun.getPhoneKeyboardHight();
                    if(height){
                        document.body.style.marginBottom = '0px';
                        JS("jesong_chat_layout").css('height', JS("jesong_chat_layout").height()-height + "px");
                        var UA = window.navigator.userAgent.toLocaleLowerCase();
                        if(/xiaomi/.test(UA)&&/miuibrowser\/14/.test(UA)&&(/mi 10/.test(UA)||/mi 9/.test(UA)||/m2102j2sc/.test(UA)||/redmi k20 pro/.test(UA)||/m2007j22c/.test(UA)||/redmi k30 pro/.test(UA))){
                            JS('jesong_chat_input_compatible').hide();
                        }
                    }
                    JS("jesong_chat_layout").css("bottom", "0px");
                    JS("jesong_chat_phone_bottom").css("position", "absolute").css("bottom", "0px").css("left", "0px").css("right", "0px");
                }
            }else if(id == 'jesong_opinion_reason_text') {
                var height = jesong.browserFun.getPhoneKeyboardHight();
                if(height){
                    JS("jesong_mask").css('top', 'none');
                    JS("jesong_chat_layout").css('height', JS("jesong_chat_layout").height()-height + "px");
                }
            }
            if (JS(id).val() == "") {
                JS(id).addClass("jesong_text_blur");
            }
        });
        JS(id).addClass("jesong_text_blur");
    },
    stopFlashLastUserMessage: function () {
        if (this.flashUserMessageInterval != -1) {
            window.clearInterval(this.flashUserMessageInterval);
            this.flashUserMessageInterval = -1;
        }
    },
    flashLastUserMessage: function () {
        if (this.userMessageStep >= this.flashUserMessageColor.length) {
            this.userMessageStep = 0;
        }
        var getChildrenByClassName = function (parent, selects, parentClassName) {
            var arr = [];
            for (var i = 0; i < parent.children.length; i++) {
                var child = parent.children[i];
                var className = parentClassName;
                if (child.className != "") {
                    if (parentClassName != "") {
                        className = parentClassName + " ";
                    }
                    className += child.className;
                }
                if (className == selects) {
                    arr.push(child);
                } else {
                    arr = arr.concat(getChildrenByClassName(child, selects, className));
                }
            }
            return arr;
        };
        this.userMessageStep++;
        var records = getChildrenByClassName(document.getElementById("jesong_chat_record"), "jesong-service-bubble jesong-service-bubble-con jesong-service-session-con jesong-user-msg", "");
        for (var i = 0; i < records.length; i++) {
            if (i == records.length - 1) {
                records[i].style.color = this.flashUserMessageColor[this.userMessageStep];
            } else {
                records[i].style.color = "#000000";
            }
        }
        if (this.flashUserMessageInterval == -1) {
            this.flashUserMessageInterval = window.setInterval(function () {
                Chat.flashLastUserMessage.apply(Chat, []);
            }, 300);
        }
    },
    getRandomCode: function () {
        JS("tips").html("");
        if (Chat.time === 0) {
            Chat.time = 60;
            JS("sedMsg").removeClass("el_gray");
            JS("sedMsg").html(JSLang[jesong.language].sendCode);
            return;
        } else {
            JS("sedMsg").addClass("el_gray");
            Chat.time--;
            JS("sedMsg").html(Chat.time + JSLang[jesong.language].resetSend);
        }
        Chat.t = setTimeout(function () {
            Chat.getRandomCode();
        }, 1000);
    },
    initMapEvent: function (id) {
        JS('baiduMap'+id).show();
        JS('search-site'+id).val('');
        JS('search-house'+id).val('');
        JS('cityCheck'+id).bind('click',function () {
            Chat.showSearchList('popupCity',id);
            JS('cityList'+id).empty()
            JS('searchVal'+id).val('');
        })
        Chat.selectComfirm('cityList','popupCity','search-city',id)
        JS('searchVal'+id).bind('input',Chat.throttle(function () {
            var value = JS('searchVal'+id).val();
            if(!value){
                JS('cityList'+id).empty();
                return
            }
            ApiFun.getMapCity({'keyword':value},function (res) {
                if(res.code == 0){
                    var str = jesong.UI.getCityStyleDiv(res.data.city,0,id);
                    JS('cityList'+id).html(str)
                }
            })
        },100));
        JS('search-site'+id).bind('focus',function () {
            JS('popupCity'+id).hide();
            Chat.showSearchList('popupSite',id);
            Chat.setSite(id);
            JS('delete-site' + id).show()
        });
        Chat.selectComfirm('siteList','popupSite','search-site',id)
        JS('search-site'+id).bind('blur',function () {
            setTimeout(function () {
                Chat.showSearchList('popupSite',id);
                JS('siteList'+id).empty();
                JS('delete-site' + id).hide()
            },200);
        });
        JS('search-site'+id).bind('input',Chat.throttle(function () {
            Chat.setSite(id)
            if(JS('search-site'+id).val()){
                JS('delete-site' + id).show()
            }else {
                JS('delete-site' + id).hide()
            }
        },100));
        JS('siteSave'+id).bind('click',function () {
            Chat.saveSite(id)
        });
        JS('searchCity'+id).bind('click',function () {
            Chat.showSearchList('popupCity',id);
            JS('cityList'+id).empty();
            JS('searchVal'+id).val('');
        });
        //å é¤çç¹å»æ¹æ³
        JS('delete-site' + id).bind('click',function (){
            JS('search-site'+id).val('');
            JS('search-site'+id).focus()
        });
        JS('search-house'+id).bind('blur',function () {
            setTimeout(function () {
                JS('delete-house' + id).hide()
            },200);
        });
        JS('search-house'+id).bind('focus',function () {
            JS('delete-house' + id).show()
        });
        JS('search-house'+id).bind('input',function () {
            if(JS('search-house'+id).val()){
                JS('delete-house' + id).show()
            }else {
                JS('delete-house' + id).hide()
            }
        })
        JS('delete-house' + id).bind('click',function (){
            JS('search-house'+id).val('');
            JS('search-house'+id).focus();
        });
        ApiFun.getVisitorsAddress(id,{})
    },
    showSearchList: function (type,id) {
        JS(type+id).toggle();
        if(type == 'popupCity') {
            JS('cityCheck'+id).css('border-top-color') == "rgb(221, 221, 221)"?
                JS('cityCheck'+id).css('border-top-color',"#7ec2f3"):
                JS('cityCheck'+id).css('border-top-color',"rgb(221, 221, 221)")
        }
    },
    selectComfirm:function(type,name,echoName,id){
        JS(type+id).bind('click',function (event) {
            var target = event.target;
            if(target.tagName == 'DIV'||target.tagName == 'P'||target.tagName == 'SPAN'){
                event.stopPropagation();
                var text = '';
                if(echoName == ('search-site')){
                    var last = target.lastChild;
                    text = last.textContent;
                    if(!text){
                        var first = target.firstChild;
                        text = last.textContent;
                    }
                    JS(echoName+id).val(text);
                }else{
                    text = target.innerText;
                    Chat.showSearchList(name,id)
                    JS(echoName+id).html(text);
                }

            }
        });
    },
    setSite:function (id) {
        var value =JS('search-site'+id).val();
        if(!value){
            JS('search-site'+id).html('');
            return
        }
        ApiFun.getBaiduMap({'query':value,'region':JS('search-city'+id).html()},function (res) {
            if(res.code == 0){
                var str = jesong.UI.getCityStyleDiv(res.data.site,1,id);
                JS('siteList'+id).html(str)
            }
        })
    },
    throttle:function(fn,wait){
        var timer = null;
        return function(){
            var context = this;
            var args = arguments;
            if(!timer){
                timer = setTimeout(function(){
                    fn.apply(context,args);
                    timer = null;
                },wait)
            }
        }
    },
    saveSite:function (id) {
        var type = ''
        var msg = ''
        if(JS('search-site'+id).val() == ''){
            type = 'error';
            msg='å°åæªå¡«åï¼ä¸å¯æäº¤ä¿¡æ¯ã';
        }else {
            type = 'success';
            msg='å°åæäº¤æå'
        }
        var num = Math.random();
        JS("jesong_chat_record").append(jesong.UI.getTooltipStyleDiv(type,msg,num));
        setTimeout(function () {
            JS(num).remove()
        },2000);
        if(!JS('search-site'+id).val()){
            return
        }
        var msg = JS('search-city'+id).html() + JS('search-site'+id).val() + JS('search-house'+id).val();
        ApiFun.addMessage(msg);
        JS.setCookie('jesong_baiduMap'+Chat.mapLogo,Chat.visitorId,1*60*60*1000)
        JS('baiduMap'+id).hide()
    },
    // å¤çéè¯·è¯ä»·å±ç¤ºé®é¢
    clickOpinion:function(){
        // document.getElementById('jesong_opinion_layout').style.display='block';
        JS("jesong_mask").show();
        JS("jesong_opinion_layout").show()
        var _w = JS("jesong_opinion_layout").width();
        var _h = JS("jesong_opinion_layout").height();
        JS("jesong_opinion_layout").css("left", (jesong.autochat.width - _w) / 2 + "px")
            .css("top", (jesong.autochat.height - _h) / 2 + "px");
    },
    pasteFile:function (){
        JS("jesong_mask").hide();
        JS("jesong_paste_layout").hide();
        ApiFun.fileUpload(Chat.f);
    },
    initFormEvent:function (id,type) {
        if(id == 0) {return}
        var dom = JS('formHTML'+id).dom;
        var list = dom.querySelectorAll('[data-picker="datePicker"]')
        //å¤æ­æ¯å¦å«ææ¥ææ°æ®
        if(list && list.length){
            for(var i = 0;i<list.length;i++){
                var str = 'datePicker-'+id +'-'+i;
                list[i].setAttribute('id','datePicker-'+id +'-'+i);
                if(type == 'pc'){
                    jeDate('#datePicker-'+id +'-'+i,{
                        format:"YYYY-MM-DD",
                        toggle: function(obj){//è¿éæ¯å¯¹è±¡
                        }
                    })
                }else {
                    var calendar = new LCalendar();
                    calendar.init({
                        'trigger': '#datePicker-'+id +'-'+i,//æ ç­¾id
                        'type': 'date',//date è°åºæ¥æéæ© datetime è°åºæ¥ææ¶é´éæ© time è°åºæ¶é´éæ© ym è°åºå¹´æéæ©
                    });
                }
            }
        }
        var btn = JS('formHTML'+id).dom.querySelectorAll("span[class='btnClick']")[0];
        btn.setAttribute("id",('submit-'+id +'-btn'));
        JS('submit-'+id +'-'+'btn').bind('click',function () {
            //è·åæ°æ®
            var data = Chat.getform(JS('formHTML'+id));
            var msg_type = '';
            var msg_title = '';
            if(data.bol){
                ApiFun.addMessage(data.params,false);
                JS.getCookie('jesong_formHTML_'+id,Chat.visitorId,1*60*60*1000);
                JS('formHTML'+id).hide();
                msg_type = 'success';
                msg_title='æäº¤æå'
            }else {
                msg_type = 'error';
                msg_title='æªå¡«åè¡¨åï¼ä¸å¯æäº¤ä¿¡æ¯ã';
            }
            var num = Math.random();
            JS("jesong_chat_record").append(jesong.UI.getTooltipStyleDiv(msg_type,msg_title,num));
            setTimeout(function () {
                JS(num).remove()
            },2000);
        })
    },
    getform: function (dom) {
        var inputList = dom.dom.querySelectorAll("input");
        var selectList = dom.dom.querySelectorAll('select');
        var textareaList = dom.dom.querySelectorAll('textarea');
        // var dateList = dom.dom.querySelectorAll("div[data-picker='datePicker']");
        var params = {};
        var bol = false;
        var str = ''
        if(inputList && inputList.length){
            for(var i = 0;i<inputList.length;i++){
                if(inputList[i].value){
                    params[inputList[i].name] = inputList[i].value
                    str += (inputList[i].getAttribute('placeholder') + ':' +  inputList[i].value + ';');
                    bol = true
                }
            }
        }
        if(selectList && selectList.length){
            for(var i = 0;i<selectList.length;i++){
                if(selectList[i].value) {
                    params[selectList[i].name] = selectList[i].value
                    str += (selectList[i].getAttribute('data-placeholder') + ':' +  selectList[i].value + ';');
                    bol = true
                }
            }
        }
        if(textareaList && textareaList.length){
            for(var i = 0;i<textareaList.length;i++){
                if(textareaList[i].value){
                    params[textareaList[i].name] = textareaList[i].value
                    str += (textareaList[i].getAttribute('placeholder') + ':' +  textareaList[i].value + ';');
                    bol = true
                }
            }
        }
        var msg = Object.assign({},params,{"data-flag": "form-info"});
        var html = '<div data-form='+ JSON.stringify(msg) + '>'+ str +'</div>';
        return {params:html,bol:bol}
    },
    loadJS:function(url,callback){
        var script = document.createElement('script'),
            fn = callback || function(){};
        script.type = 'text/javascript';
        //IE
        if(script.readyState){
            script.onreadystatechange = function(){
                if( script.readyState == 'loaded' || script.readyState == 'complete' ){
                    script.onreadystatechange = null;
                    fn();
                }
            };
        }else{
            //å¶ä»æµè§å¨
            script.onload = function(){
                fn();
            };
        }
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    },
    dynamicLoadCss:function(url) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.type='text/css';
        link.rel = 'stylesheet';
        link.href = url;
        head.appendChild(link);
    },
    initDatePicker:function(id,dateType){
        if(jesong.jsType == 1 && jesong.env.isPhone){
            if(dateType == 'dateRange'){
                var calendar = new LCalendar();
                calendar.init({
                    'trigger':'#dateOn'+id+'1',//æ ç­¾id
                    'title':'ä¸æ¬¡æç»æ¥æ',
                    'type': 'date',//date è°åºæ¥æéæ© datetime è°åºæ¥ææ¶é´éæ© time è°åºæ¶é´éæ© ym è°åºå¹´æéæ©
                    'submitCallBack':function (val) {
                        if(Chat.dateList[id]){  //å¤æ­æ°æ®å­å¨
                            Chat.dateList[id].start = val; //èµå¼
                            if(Chat.dateList[id].start&&Chat.dateList[id].end){ //å¤æ­å¼å§æ¶é´å·²éæ©
                                var start = Chat.dateList[id].start.split('-');
                                var end = Chat.dateList[id].end.split('-');
                                var obj = {date:[{"YYYY":start[0],"MM":start[1],"DD":start[2]},{"YYYY":end[0],"MM":end[1],"DD":end[2]}]};
                                Chat.setDateMsg(obj.id)
                            }else if(!Chat.dateList[id].end){
                                setTimeout(function () {
                                    JS('dateOn'+id+'2').click()
                                },300)
                            }
                        }else {
                            Chat.dateList[id] = {start:val,end:''};
                            setTimeout(function () {
                                JS('dateOn'+id+'2').click()
                            },300)
                        }
                    }
                });
            }
            var calendar = new LCalendar();
            calendar.init({
                'trigger':'#dateOn'+id+'2',//æ ç­¾id
                'title':'æ«æ¬¡æç»æ¥æ',
                'type': 'date',//date è°åºæ¥æéæ© datetime è°åºæ¥ææ¶é´éæ© time è°åºæ¶é´éæ© ym è°åºå¹´æéæ©
                'submitCallBack':function (val) {
                    if(Chat.dateList[id]){  //å¤æ­æ°æ®å­å¨
                        if(dateType == 'dateRange'){
                            Chat.dateList[id].end = val; //èµå¼
                            if(Chat.dateList[id].start&&Chat.dateList[id].end){ //å¤æ­å¼å§æ¶é´å·²éæ©
                                var start = Chat.dateList[id].start.split('-');
                                var end = Chat.dateList[id].end.split('-');
                                var obj = {date:[{"YYYY":start[0],"MM":start[1],"DD":start[2]},{"YYYY":end[0],"MM":end[1],"DD":end[2]}]};
                                Chat.setDateMsg(obj,id)
                            }else if(!Chat.dateList[id].start){
                                setTimeout(function () {
                                    JS('dateOn'+id+'1').click()
                                },300)
                            }
                        }else {
                            if(Chat.dateList[id]) {
                                Chat.dateList[id] = {start:val}
                                var start = Chat.dateList[id].start.split('-');
                                var obj = {date:[{"YYYY":start[0],"MM":start[1],"DD":start[2]}]};
                                Chat.setDateMsg(obj,id)
                            }
                        }
                    }else {
                        if(dateType == 'dateRange'){
                            Chat.dateList[id] = {start:'',end:val};
                            setTimeout(function () {
                                JS('dateOn'+id+'1').click()
                            },300)
                        }else {
                            Chat.dateList[id] = {start:val};
                            var start = Chat.dateList[id].start.split('-');
                            var obj = {date:[{"YYYY":start[0],"MM":start[1],"DD":start[2]}]};
                            Chat.setDateMsg(obj,id)
                        }

                    }
                }
            });
            setTimeout(function () {
                JS('dateOn'+id+(dateType == 'dateRange'?'1':'2')).click()
            },300);

        }else {
            var obj1 = {
                format:"YYYY-MM-DD",
                isToday:false,
                isYes:true,
                isClear:false,
                isTitle: true,
                title:'ä¸æ¬¡æç»æ¶é´',
                donefun: function(obj){//è¿éæ¯å¯¹è±¡
                    if(Chat.dateList[id]){  //å¤æ­æ°æ®å­å¨
                        Chat.dateList[id].start = obj.date[0]; //èµå¼
                        if(Chat.dateList[id].start&&Chat.dateList[id].end){ //å¤æ­å¼å§æ¶é´å·²éæ©
                            var data = {date:[Chat.dateList[id].start,Chat.dateList[id].end]};
                            Chat.setDateMsg(data,id)
                        }else if(!Chat.dateList[id].end){
                            setTimeout(function () {
                                JS('dateOn'+id+'2').click()
                            },300)
                        }
                    }else {
                        Chat.dateList[id] = {start:obj.date[0],end:''};
                        setTimeout(function () {
                            JS('dateOn'+id+'2').click()
                        },300)
                    }
                }
            };
            var obj2 = {
                format:"YYYY-MM-DD",
                isToday:false,
                isYes:true,
                isClear:false,
                isTitle: true,
                title:'æ«æ¬¡æç»æ¶é´',
                donefun: function(obj){//è¿éæ¯å¯¹è±¡
                    if(Chat.dateList[id]){  //å¤æ­æ°æ®å­å¨
                        if(dateType == 'dateRange'){
                            Chat.dateList[id].end = obj.date[0]; //èµå¼
                            if(Chat.dateList[id].start&&Chat.dateList[id].end){ //å¤æ­å¼å§æ¶é´å·²éæ©
                                var data = {date:[Chat.dateList[id].start,Chat.dateList[id].end]};
                                Chat.setDateMsg(data,id)
                            }else if(!Chat.dateList[id].start){
                                setTimeout(function () {
                                    JS('dateOn'+id+'1').click()
                                },300)
                            }
                        }else {
                            if(Chat.dateList[id]) {
                                Chat.dateList[id] = {start:obj.date[0]};
                                var data = {date:[Chat.dateList[id].start]};
                                Chat.setDateMsg(data,id)
                            }
                        }
                    }else {
                        if(dateType == 'dateRange'){
                            Chat.dateList[id] = {start:'',end:obj.date[0]};
                            setTimeout(function () {
                                JS('dateOn'+id+'1').click()
                            },300)
                        }else {
                            Chat.dateList[id] = {start:obj.date[0]};
                            var data = {date:[Chat.dateList[id].start]};
                            Chat.setDateMsg(data,id)
                        }
                    }
                }
            }
            if(dateType == 'dateRange'){
                // obj.multiPane = false;
                jeDate('#dateOn'+id+'1' ,obj1);
            }
            jeDate('#dateOn'+id+'2' ,obj2);
            setTimeout(function () {
                var idObject = document.getElementById('jedate');
                if (idObject != null){
                    idObject.parentNode.removeChild(idObject);
                };
                JS('dateOn'+id+(dateType == 'dateRange'?'1':'2')).click()
            },0);
        }
    },
    sendMsgDate: function(e,_this,type){
        console.log(_this,type);
        var el = e.currentTarget;
        console.log(el,e)
        var id = el.dataset.id;
        // var id = _that.attr('data-id');
        JS('dateOn'+id+type).click()
    },
    setDateMsg:function(obj,id){
        var data = Chat.getDateData(obj);
        var html = '<div dom-type="domFilter" data-date='+ JSON.stringify(data.data) + '>'+ data.str +'</div>';
        ApiFun.addMessage(html);
        JS('dateMain' + id).css('display','none');
        JS.setCookie('jesong_'+(obj.date.length == 2?'DateRangePicker':'DatePicker')+id,Chat.visitorId,1*60*60*1000)
    },
    getDateData:function(obj){ //è·åæ¶é´è®¡ç®ç»æ
        var data = {};
        var str = '';
        var time = new Date(obj.date[0]['YYYY']+'/'+obj.date[0]['MM']+'/'+obj.date[0]['DD']).getTime();
        if(obj.date.length == 2){
            str = 'ä¸æ¬¡æç»æ¶é´æ¯'+obj.date[0]['YYYY']+'å¹´'+obj.date[0]['MM'] +'æ'+obj.date[0]['DD']+ 'æ¥,æ¬æ¬¡æç»æ¶é´æ¯'+obj.date[1]['YYYY']+'å¹´'+obj.date[1]['MM']+'æ'+obj.date[1]['DD']+'æ¥'
            var inAdvance = (time+(28*1000*60*60*24) - (new Date(obj.date[1]['YYYY']+'/'+obj.date[1]['MM']+'/'+obj.date[1]['DD']).getTime()))/(1000*60*60*24)
            if(inAdvance>=0) {
                data.inAdvanceDate = Math.floor(inAdvance)
            }else {
                data.inAdvanceDate = 'æ°æ®éè¯¯'
            }
        }else {
            str = obj.date[0]['YYYY']+'å¹´'+obj.date[0]['MM']+'æ'+obj.date[0]['DD']+'æ¥';

            data.ovulatoryPeriodStart = Chat.getNowDateBySpecialFormat(new Date(time+(28*1000*60*60*24)-(14*1000*60*60*24)-(5*1000*60*60*24)));
            data.ovulatoryPeriodEnd = Chat.getNowDateBySpecialFormat(new Date(time+(28*1000*60*60*24)-(14*1000*60*60*24)+(4*1000*60*60*24)));
            data.safePeriodState =  Chat.getNowDateBySpecialFormat(new Date(new Date(data.ovulatoryPeriodStart.replace(/\-/g,'/')).getTime() - (5*1000*60*60*24)))   +  'è³' +  Chat.getNowDateBySpecialFormat(new Date(new Date(data.ovulatoryPeriodStart.replace(/\-/g,'/')).getTime() - (1*1000*60*60*24)));
            data.safePeriodEnd =  Chat.getNowDateBySpecialFormat(new Date(new Date(data.ovulatoryPeriodEnd.replace(/\-/g,'/')).getTime() + (1*1000*60*60*24)))   +  'è³' +  Chat.getNowDateBySpecialFormat(new Date(new Date(data.ovulatoryPeriodEnd.replace(/\-/g,'/')).getTime() + (10*1000*60*60*24)))
            var year = '',month = '',date = '';
            if(1<=obj.date[0]['MM']/1&&obj.date[0]['MM']/1 <=3){
                year = obj.date[0]['YYYY'];
                month = obj.date[0]['MM']/1+9;
            }else if(4<=obj.date[0]['MM']/1&&obj.date[0]['MM']/1 <=12){
                year = (obj.date[0]['YYYY']/1 + 1);
                month = obj.date[0]['MM']/1-3;
            }
            var num = new Date(obj.date[0]['YYYY'],obj.date[0]['MM'], 0).getDate()
            switch (num) {
                case 31:
                    if(1<=obj.date[0]['DD']&&obj.date[0]['DD']<=24){
                        date = obj.date[0]['DD']/1 + 7
                    }else if(25<=obj.date[0]['DD']&&obj.date[0]['DD']<=31) {
                        date = obj.date[0]['DD']/1 - 24;
                    }
                    break;
                case 30:
                    if(1<=obj.date[0]['DD']&&obj.date[0]['DD']<=23){
                        date = obj.date[0]['DD']/1 + 7
                    }else if(24<=obj.date[0]['DD']&&obj.date[0]['DD']<=30) {
                        date = obj.date[0]['DD']/1 - 23;
                    }
                    break;
                case 28:
                    if(1<=obj.date[0]['DD']&&obj.date[0]['DD']<=21){
                        date = obj.date[0]['DD']/1 + 7
                    }else if(22<=obj.date[0]['DD']&&obj.date[0]['DD']<=28) {
                        date = obj.date[0]['DD']/1 - 21;
                    }
                    break;
            }
            if(date<10){ date = '0' + date }
            data.expectedDate = year + '-' + month + '-' + date;

            if(((new Date().getTime()) - (time + 28*1000*60*60*24)) >= 0 ){
                data.postponeDate = Math.floor((new Date().getTime() - (time + 28*1000*60*60*24))/(1000*60*60*24))
            }else {
                data.postponeDate = 'æ°æ®éè¯¯'
            }

        }
        return {str:str,data:data}
    },
    getNowDateBySpecialFormat:function(nowDate) {
        var s = "-";
        var year    = nowDate.getFullYear();
        var month   = nowDate.getMonth() + 1;
        var strDate = nowDate.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var backDate = year + s + month + s + strDate;
        return backDate;
    },
    // å¤çå®¢ææ¶æ¯ææ¡æ´æ¹
    showCustomerInfo:function (obj) {

        if(obj){
            JS('jesong_chat_custName').html(obj.nickName);
            JS('jesong_chat_custDept').html(obj.department);
            if(obj.phoneNumber){
                JS("jesong_chat_custTel_content").show()
                JS('jesong_chat_custTel').html(obj.phoneNumber);
            }else {
                JS("jesong_chat_custTel_content").hide()
            }
            // if(obj.mail){
            //     JS("jesong_chat_custMail_content").show()
            //     JS("jesong_chat_custMail").html(obj.email);
            // }else {
            //     JS("jesong_chat_custMail_content").hide()
            // }
            JS('jesong_chat_custName_content').show()
            JS('jesong_chat_custDept_content').show()
            if (obj.customerCardImg && obj.customerCardImg != "") {
                JS("jesong_chat_custHeadBox").html("<img id='custHead' src='" + obj.customerCardImg + "' alt=''/>")
            } else {
                JS("jesong_chat_custHeadBox").html("<img id='custHead' src='" + jesong.env.server.file  + "live/static/2019/images/portrait.png' alt=''/>")
            }
        }else {
            JS("jesong_chat_custHeadBox").html("<img id='custHead' src='" + jesong.env.server.file  + "live/static/2019/images/portrait.png' alt=''/>")
            JS('jesong_chat_custName_content').hide()
            JS('jesong_chat_custDept_content').hide()
            JS("jesong_chat_custTel_content").hide()
        }

    }
};


(function () {
    try {
        window.clearTimeout(window.jesongErrorTimeout);
        Chat.init();
        jesong.force = Chat;
    } catch (e) {
        window.sendJesongError(1, "webError-force " + e.message);
        setTimeout(function () {
            Chat.init();
            jesong.force = Chat;
        }, 1000)
    }

    window.onblur = function () {
        Chat.windowFocus = false;
    };
    window.onfocus = function () {
        Chat.windowFocus = true;
        Chat.clearFlashTitle.apply(Chat, []);
    };
})()
