
var bannerNum = 1627933115992154113;
var bannerId = '7024_1627933115992154113';

    var NativeAdManager = (function () {
    var iabStartTime = [];
    var trackedEvent = {'unit_iab_show': 0, 'ad_iab_show': []};
    var ads;
    var options = {
        "useTitle": false,
        "titleText": '',
        "usePromo": false,
        "promoLink": '',
        "useFonts": false,
        "fonts": '',
        "ads": "",
        "place": {},
        "placeId": 0,
        "eTrack": {},
        "bannerId": '',
        "bannerNum": '',
        "mainFunc": {}
    },
    inView = function(el) {
        var rect = el.getBoundingClientRect();
        var clientWidth = (window.innerWidth || document.documentElement.clientWidth);
        var clientHeight = (window.innerHeight || document.documentElement.clientHeight);
        var width = rect.right - rect.left;
        var height = rect.bottom - rect.top;
        var cropLeft = rect.left < 0 ? 0 - rect.left : 0;
        var cropRight = rect.right > clientWidth ? rect.right - clientWidth : 0;
        var inViewWidth = width - cropLeft - cropRight;
        var cropTop = rect.top < 0 ? 0 - rect.top : 0;
        var cropBotoom = rect.bottom > clientHeight ? rect.bottom - clientHeight : 0;
        var inViewHeight = height - cropTop - cropBotoom;
        return (inViewWidth * inViewHeight) >= (width * height / 2);
    },
    iabCheck = function(el, index) {
            if (!iabStartTime[index] && inView(el)) {
                iabStartTime[index] = new Date().getTime();
            }
            if (!inView(el)) {
                iabStartTime[index] = false;
                return false;
            }
            var timeNow = new Date().getTime();
            if (timeNow - iabStartTime[index] >= 1000) {
                return true;
            }
            return false;
        },
        iabEvent = function(){
            var ads = options.place.getElementsByClassName('t-wrp');
            for(var i = 0; i < ads.length; i++) {
                if(iabCheck(ads[i], i) && !trackedEvent['ad_iab_show'][i]) {
                    trackedEvent['ad_iab_show'][i] = 1;
                    options.mainFunc.setAdByNum(i);
                    if (options.eTrack.ads[i].ad_id > 0) {
                        window['shownAds' + options.placeId].push(options.eTrack.ads[i].ad_id);
                    }
                    options.mainFunc.sendEventTizer('ad_iab_show');
                }
            }

            if(!iabCheck(options.place, ads.length + 1)) {
                return;
            }

            if(!trackedEvent['unit_iab_show']) {
                trackedEvent['unit_iab_show'] = 1;
                options.mainFunc.sendEventTizer('unit_iab_show');
            }
    },
    addEvent = function(a,b,c){
        try {
            a.addEventListener(b,c,!1)
        } catch(d) {
            a.attachEvent('on'+b,c)
        }
    },
    addToTop = function(place, e) {
        if(typeof(place.childNodes[0]) == 'undefined') {
            place.appendChild(e);
        } else {
            place.insertBefore(e, place.childNodes[0]);
        }
    },
    setAds = function(place, data) {
        ads = document.createElement("div");
        ads.setAttribute('class', 'adpartner-wrapper box-pad');
        var str = '';
        for (i = 0; i < data.length; i++) {
            str += data[i];
        }
        ads.innerHTML = str;
        addToTop(place, ads);
    },
    setSign = function(place) {
        var sign = document.createElement("div");
        sign.setAttribute('class', 'ap-sign bottom-right-logo');
        sign.setAttribute('style', 'bottom:0; right:0; ');
        sign.innerHTML = '<a target="_blank" href="' + options.promoLink + '"></a>';
        place.getElementsByClassName('box-pad')[0].appendChild(sign);
    },
    setTitle = function(place, text) {
        var title = document.createElement("div");
        title.setAttribute('class', 'box-title');
        title.innerText = text;
        addToTop(place, title);
    },
    setFont = function(place) {
        if (!options.useFonts || options.fonts === '') {
            return;
        }
        var link = document.createElement("link");
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', options.fonts);
        addToTop(place, link);
    },
    addClickEvent = function() {
        addEvent(options.place, "click", function(e) {
            var el = e.target;
            while(el.parentElement != null){
                if(el.parentElement.getAttribute("data-id")){
                    window['banner' + options.bannerId].clickEvent(
                        el.parentElement.getAttribute("data-id"),
                        el.parentElement.getAttribute("data-show-id") || ''
                    );
                    return;
                }
                el = el.parentElement;
            }
        });
    },
    init = function() {
        setTimeout('window[\'initRtb' + options.bannerNum + '\'].reload()', 1000);
        setAds(options.place, options.ads);
        if (options.usePromo) {
            setSign(options.place);
        }
        if (options.useTitle) {
            setTitle(options.place, options.titleText);
        }
        setFont(options.place);
        if (options.mainFunc.isRtbFloat()) {
            options.mainFunc.setCloseBtn(ads);
            document.body.appendChild(options.place);
        }
        options.mainFunc.sendEventTizer('load');
        options.mainFunc.showEvent();
        addClickEvent();
        setInterval('window[\'banner' + options.bannerNum + '\'].iabEvent()',500);
    };

    return {
        init: function(o){
            options = o;
            init();
        },
        iabEvent: iabEvent
    };
}());

var MainFuncInterface = function () {
    function ImplementMe() {
        console.log("Method Not Implement")
    }

    return {
        sendEventTizer: ImplementMe,
        showEvent: ImplementMe,
        setAdByNum: ImplementMe,
        setCloseBtn: ImplementMe,
        setObjStyle: ImplementMe,
        isRtbFloat: ImplementMe
    }
}();

window['banner' + bannerId] = (function(){
    var o = {};
    var MobileDevice = 'mobile';
    var TabletDevice = 'tablet';
    var DesktopDevice = 'desktop';
    var events = {'show': 0, 'click': []};
    var eTrack;
    var place;
    var deviceType = 'desktop';
    var adManager;
    var isRtbFloat = function() {return false;};

    function addMatchingPixels(place) {
        var div = document.createElement("div");
        var pixels = ['https://t.trafmag.com/images/1px-matching-adpartner.gif?id=(apuid)', 'https://cm.mgid.com/m?cdsp=363190&adu=https://a4p.adpartner.pro/ssp/match?dsp_id=10&user_id=(apuid)', 'https://cm.mgid.com/m?cdsp=363190&adu=https://a4p.adpartner.pro/ssp/match?dsp_id=9&user_id=(apuid)', 'https://s.uuidksinc.net/match/272/(apuid)', 'https://recreativ.ru/mtch/31/(apuid)', 'https://dsp-trk.eskimi.com/pix?e=24&exuid=(apuid)', 'https://px.adhigh.net/p/cm/adpdigital', 'https://dm.hybrid.ai/match?id=177&vid=(apuid)', 'https://match.new-programmatic.com/userbind?src=adpartner&id=(apuid)', 'https://www.acint.net/rmatch?dp=152&r=https%3A%2F%2Fa4p.adpartner.pro%2Fssp%2Fmatch%3Fdsp_id%3D53%26user_id%3D%24%7BUSER_ID%7D', 'https://www.acint.net/rmatch?dp=152&r=https%3A%2F%2Fa4p.adpartner.pro%2Fssp%2Fmatch%3Fdsp_id%3D55%26user_id%3D%24%7BUSER_ID%7D', 'https://ads.betweendigital.com/match?bidder_id=44053&callback_url=https%3A%2F%2Fa4p.adpartner.pro%2Fssp%2Fmatch%3Fdsp_id%3D47%26user_id%3D%24%7BUSER_ID%7D%26redirect%3Dhttps%253A%252F%252Fa4p.adpartner.pro%252Fssp%252Fmatch%253Fdsp_id%253D57%2526user_id%253D%24%7BUSER_ID%7D', 'https://exchange.buzzoola.com/cookiesync/redirect/adpartner?redirect_url=https%3A%2F%2Fa4p.adpartner.pro%2Fssp%2Fmatch%3Fdsp_id%3D63%26user_id%3D%24%7BUUID%7D', 'https://exchange.buzzoola.com/cookiesync/redirect/adpartner?redirect_url=https%3A%2F%2Fa4p.adpartner.pro%2Fssp%2Fmatch%3Fdsp_id%3D64%26user_id%3D%24%7BUUID%7D'];
        var html = '';
        for(var i = 0; i < pixels.length; i++) {
            if (pixels[i] != '') {
                html += '<img src="' + pixels[i].replace('(apuid)', apuid) + '" width="0" height="0" style="display:block;float:left;width:0 !important;height:0 !important;border:0 !important; margin: 0 !important; padding: 0 !important;" />';
            }
        }
        div.innerHTML = html;
        place.appendChild(div);

        var div = document.createElement("div");
        div.innerHTML = "";
        place.appendChild(div);
        var x = div.getElementsByTagName("script");
        var len = x.length;
        for (var i=0;i<len;i++) {
            if (x[i].src != ""){
                var newScript = document.createElement("script");
                newScript.src = x[i].src;
                div.appendChild(newScript);
            } else {
                window.eval(x[i].text);
            }
        }
    }
    function setStyle() {
        var data = [
            "#adpartner-jsunit-7024_1627933115992154113 div {display: block;}#adpartner-jsunit-7024_1627933115992154113 {box-sizing: border-box;max-width:100%;margin:0 auto;}#adpartner-jsunit-7024_1627933115992154113 .box-pad{box-sizing: border-box; box-shadow: 0 0 0 #000000;border-radius: 0px !important;border:  0px solid  ;padding: 0px 0px 0px 0px;margin: 0px 0px 0px 0px;position: relative; overflow: hidden;}#adpartner-jsunit-7024_1627933115992154113 .t-img {box-sizing: border-box;transition-duration: 0.3s;transition-property: all;overflow: hidden;width: 100%;max-width:400px;margin:0 auto;box-shadow: 0 0 0 #000000;border-radius: 0px !important;border:  0px solid  #000000;}#adpartner-jsunit-7024_1627933115992154113 .t-img figure {box-sizing: border-box;margin: 0;transition-duration: 0.3s;transition-property: all;background-size: cover;-moz-background-size: cover;background-position: center; padding-top:76.19%; }#adpartner-jsunit-7024_1627933115992154113 .t-wrp{box-sizing: border-box;position:relative;float: left;width:100%}#adpartner-jsunit-7024_1627933115992154113 .t-pad{box-sizing: border-box;transition-duration: 0.3s;transition-property: all;overflow: hidden;box-shadow: 0 0 10px #b3b3b3;border-radius: 0px !important;border:  0px solid  #ababab;padding: 0px 0px 3px 2px;margin: 4px 2px 6px 2px;background: #ffffff;}#adpartner-jsunit-7024_1627933115992154113 .t-title{box-sizing: border-box;text-decoration: none;overflow:hidden;text-overflow:ellipsis;height: 56px;font-style: normal;text-align:left;font-weight: 600;font-size: medium;line-height: 18px;font-family: Roboto Condensed;color: #292929;padding-top: 2px;max-width:400px;margin:1% auto;display: block;}#adpartner-jsunit-7024_1627933115992154113 .t-title:hover {color: #32739c;text-decoration: none;}#adpartner-jsunit-7024_1627933115992154113 .t-text{box-sizing: border-box;text-decoration: none;overflow:hidden;text-overflow:ellipsis;height: 53px;font-style: normal;text-align:left;font-weight: 400;font-size: small;line-height: 17px;font-family: Arial;color: #737373;padding-top: 2px;max-width:400px;margin:1% auto;display: block;}#adpartner-jsunit-7024_1627933115992154113 .t-text:hover {color: #112b75;text-decoration: underline;}#adpartner-jsunit-7024_1627933115992154113 .t-link{box-sizing: border-box;text-decoration: underline;overflow:hidden;text-overflow:ellipsis;font-style:normal;text-align:right;font-weight: 400;font-size: small;font-family:Roboto Condensed;color: #ffffff;padding-top:2px;max-width:400px;margin:1% auto;display: none;}#adpartner-jsunit-7024_1627933115992154113 .t-link:hover {color: #ffffff;text-decoration: underline;}#adpartner-jsunit-7024_1627933115992154113 .t-btn{box-sizing: border-box;height: 17px;line-height: 17px;}#adpartner-jsunit-7024_1627933115992154113 .box-title{overflow:hidden;text-overflow:ellipsis;font-style: normal;text-align:left;font-weight: 400;font-size: medium;font-family:Arial;color: #000000;}#adpartner-jsunit-7024_1627933115992154113 .adpartner-under{padding: 0px 3px 0px 0px;}#adpartner-jsunit-7024_1627933115992154113 .zero {width: 1px;height: 1px;position:absolute;left:-9999px;}#adpartner-jsunit-7024_1627933115992154113 .ap-sign{position:absolute;text-align:right;font-size:11px;}#adpartner-jsunit-7024_1627933115992154113 .top-left-logo, .bottom-left-logo {background:rgba(255,255,255,0.5) url('//file.adpartner.pro/logo_right.gif') 5px 2px no-repeat;}#adpartner-jsunit-7024_1627933115992154113 .top-left-logo a, .bottom-left-logo a{display:block;width: 25px;height: 23px;}#adpartner-jsunit-7024_1627933115992154113 .top-left-logo a:hover, .bottom-left-logo a:hover{width: 140px;}#adpartner-jsunit-7024_1627933115992154113 .top-right-logo, .bottom-right-logo {background:rgba(255,255,255,0.5) url('//file.adpartner.pro/logo_left.gif') -115px 2px no-repeat;}#adpartner-jsunit-7024_1627933115992154113 .top-right-logo a, .bottom-right-logo a{display:block;width: 25px;height: 23px;}#adpartner-jsunit-7024_1627933115992154113 .top-right-logo a:hover, .bottom-right-logo a:hover{width: 140px;}#adpartner-jsunit-7024_1627933115992154113 .top-right-logo:hover, .bottom-right-logo:hover {background-position: 0px 2px;} #adpartner-jsunit-7024_1627933115992154113 .horizontal .t-img{width:35%;position: relative;float: left;margin-right: 20px;} #adpartner-jsunit-7024_1627933115992154113 .horizontal .t-link {margin-left: 40%;}#adpartner-jsunit-7024_1627933115992154113 .t-pad:hover{box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);}#adpartner-jsunit-7024_1627933115992154113 .t-img:hover figure {transform:scale(1.1);}#adpartner-jsunit-7024_1627933115992154113 a {text-decoration: none;}",
            "#adpartner-jsunit-7024_1627933115992154113 .horizontal .t-img {     width: 56%;     margin-right: 5px; } #adpartner-jsunit-7024_1627933115992154113 .t-title {     line-height: 18px; }"
        ];
        var style = document.createElement("style");
        var str = '';
        for (i = 0; i < data.length; i++) {
            str += data[i];
        }
        style.appendChild(document.createTextNode(str));
        document.body.appendChild(style);
    }

    function addToTop(place, e) {
        if(typeof(place.childNodes[0]) == 'undefined') {
            place.appendChild(e);
        } else {
            place.insertBefore(e, place.childNodes[0]);
        }
    }

    function isScrolledIntoView(e) {
        return (e.getBoundingClientRect().top >= 0) && (e.getBoundingClientRect().bottom <= window.innerHeight);
    }

    var showEvent = function() {
        
            if(isScrolledIntoView(place) && !events['show']) {
                events['show'] = 1;
                sendEventTizer('show');
            } else {
                window.setTimeout(getFunctionStrCall('showEvent'), 50);
            }
        
    };

    var getFunctionStrCall = function(name, args){
        if (args === undefined) {
            return 'banner' + o.bannerId + '.' + name + '()';
        }
        return 'banner' + o.bannerId + '.' + name + '(' + args + ')';
    };
    var clickEvent =  function(ad_id, apsid){
        eTrack.setAdId(ad_id);
        sendEventTizer('click', apsid);
        iframeClickEvent(ad_id);
    };
    function iframeClickEvent(ad_id){
        var iframe = document.createElement("iframe");
        iframe.setAttribute('src', 'https://a4p.adpartner.pro/ls?click=' + ad_id);
        iframe.setAttribute('id', 'clickFrame' + ad_id);
        iframe.setAttribute('width', '0');
        iframe.setAttribute('height', '0');
        iframe.setAttribute('style', 'display:none;');
        place.appendChild(iframe);
    }
    function setAdByNum(num) {
        eTrack.setAdByNum(num);
    }
    function sendEventTizer(event, apsid) {
        var n = Math.floor(Math.random()*11);
        var k = Math.floor(Math.random()*1000000);
        var id = n+k;
        var ad_ids = (event == 'load' || event == 'show' || event == 'unit_iab_show') ? eTrack.ads : eTrack.activeAd;
        if (apsid === undefined) {
            apsid = '';
        }
        var data = {
            "apuid": window.apuid ? window.apuid : '',
            "event": event,
            "ad_id": ad_ids,
            "unit_id": o.unitId,
            "region_id": o.regionId,
            "sub_region_id": o.subRegionId,
            "city_id": o.cityId,
            "is_refresh": o.isRefresh,
            "apsid": apsid,
            "url": encodeURIComponent(document.location.href)
        };
        iframeSendTizer(id, JSON.stringify(data));
    }
    function iframeSendTizer(id, data){
        var formHolder = document.getElementById('form-holder');
        var div = document.createElement("div");
        var form = document.createElement("form");
        var input = document.createElement("input");
        var iframe = document.createElement("iframe");
        form.setAttribute('action', 'https://a4p.adpartner.pro/tracker/if');
        form.setAttribute('method', 'get');
        form.setAttribute('enctype', 'application/x-www-form-urlencoded');
        form.setAttribute('target', 'eframe' + id);
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', "data");
        input.setAttribute('value', data);
        iframe.setAttribute('name', 'eframe' + id);
        iframe.setAttribute('style', 'display:none;');
        form.appendChild(input);
        div.appendChild(iframe);
        formHolder.appendChild(div);

        var iframeDocument = (iframe.contentWindow || iframe.contentDocument);
        if (iframeDocument.document) iframeDocument = iframeDocument.document;
        if (!iframeDocument.body) {
            var body = iframeDocument.createElement('body');
            iframeDocument.appendChild(body);
        }
        iframeDocument.body.appendChild(form);
        form.submit();
    }

    function setObjStyle(container, params) {
        for (key in params) {
            container.style[key] = params[key];
        }
    }

    function setObjAttr(container, params) {
        for (key in params) {
            container.setAttribute(key, params[key]);
        }
    }

    function destroyContainer(id) {
        id = 'adpartner-jsunit-' + id;
        element = document.getElementById(id);
        element && element.parentNode && element.parentNode.removeChild(element);
    }

    function setCloseBtn(place) {
        closeBtn = document.createElement('div');
        setObjStyle(closeBtn, {"max-width": "100%", "margin": "0 auto"});
        var btn = document.createElement('div');
        btn.innerHTML = 'x';
        var attr = {
            onclick: 'return banner' + o.bannerId + '.destroyContainer("' + o.bannerId + '");',
            id: 'clBtnAp'
        };

        if (deviceType == MobileDevice || deviceType == TabletDevice) {
            closeBtnWrapper = document.createElement('div');
            setObjStyle(closeBtnWrapper, {"position": "absolute", "padding": "14px", "cursor": "pointer",
                "margin-top": "-40px", "left": "100%", "margin-left": "-55px", "z-index": "65000"});
            setObjAttr(closeBtnWrapper, {onclick: 'return banner' + o.bannerId + '.destroyContainer("' + o.bannerId + '");'});
            setObjAttr(btn, {id: 'clBtnAp'});
            var style = {"max-width":"100%", "width":"26px", "height":"26px",
                "cursor": "pointer", "color": "#fff", "z-index": "999", "font-size": "18px", "line-height": "25px",
                "background-color":"grey", "border-radius":"13px", "font-family": "arial", "text-align": "center"};
            setObjStyle(btn, style);
            closeBtnWrapper.appendChild(btn);
            closeBtn.appendChild(closeBtnWrapper);
        } else {
            var style = {"position":"relative", "float":"right", "max-width":"100%", "margin-top": "-28px",
                "width":"26px", "height":"26px", "cursor": "pointer", "color": "#fff", "z-index": "999",
                "font-size": "18px", "line-height": "25px", "background-color":"grey", "border-radius":"13px",
                "font-family": "arial", "text-align": "center"};
            setObjStyle(btn, style);
            setObjAttr(btn, attr);
            closeBtn.appendChild(btn);
        }
        addToTop(place, closeBtn);
    }

    var init = function(options){
        o = options;
        document.getElementById('adpartner-jsunit-' + o.placeId).setAttribute('id', 'adpartner-jsunit-' + o.unitId);
        place = document.getElementById('adpartner-jsunit-' + o.unitId);

        if (!place) {
            place = document.getElementsByClassName('adpartner-jsunit-' + o.unitId)[0];
            place.className = '';
        }

        place.id = 'adpartner-jsunit-' + o.bannerId;
        place.innerHTML = '';

        eTrack = {
            activeAd: [],
            ads: o.adData,
            setAdId: function(ad_id){
                var i;
                for (i = 0; i < this.ads.length; i++) {
                    if(this.ads[i].ad_id == ad_id){
                        this.activeAd = [this.ads[i]]
                        break;
                    }
                }
            },
            setAdByNum: function(num) {
                this.activeAd = [this.ads[num]]
            },
        };

        var div = document.createElement("div");
        div.setAttribute('id', 'form-holder');
        document.body.appendChild(div);

        window.apuid = '82ac22db-ea93-4de7-981c-06f0f25fdc8b';
        setStyle();
        addMatchingPixels(place);
        
            adManager.init({
                "useTitle": false,
                "titleText": '',
                "usePromo": false,
                "promoLink": 'https://adp.digital',
                "useFonts": true,
                "fonts": 'https://fonts.googleapis.com/css?family=Roboto+Condensed',
                "ads": ["<div class=\"t-wrp horizontal half\"><div class=\"t-pad\"><a data-id=\"1513372\" data-show-id=\"5b15a964-74bc-411b-92ae-677bda8d33cf\" href=\"https://a4p.adpartner.pro/click/7024/1513372/6fd94c1b-d077-488f-a8d7-4fa1d15caa7c?data=eyJjcmVhdGVkX2F0IjoxNjI3OTMzMTE3LCJzaG93X2lkIjoiNmZkOTRjMWItZDA3Ny00ODhmLWE4ZDctNGZhMWQxNWNhYTdjIiwiYWRfdW5pdF9pZCI6NzAyNCwicnVsZV9pZCI6MCwiYWRfaWQiOjE1MTMzNzIsImRhdGFfc291cmNlIjoiYXBwLWpzdS11YS0wNjp0aXplcl9hZCIsInBsYXRmb3JtX2lkIjoxLCJvc19pZCI6NiwiYnJvd3Nlcl9pZCI6NCwiY3VzdG9tZXJfaWQiOiI4MmFjMjJkYi1lYTkzLTRkZTctOTgxYy0wNmYwZjI1ZmRjOGIiLCJyZWdpb25faWQiOjIzOSwic3ViX3JlZ2lvbl9pZCI6MCwiY2l0eV9pZCI6MCwiaXNfcmVmcmVzaCI6ZmFsc2V9&hash=80b6c9bd52ec1a45055f7e2e1aaaa14a\" target=\"_blank\" rel=\"nofollow\"><div class=\"adpartner-box\"><div class=\"t-img\"><figure style=\"background-image:url('//img.adpartner.pro/1513/1513372_2116.jpeg');\"></figure></div><div class=\"adpartner-under full-box\"><div class=\"t-title\">ÐÐµÐ½ÑÐ¸Ð½Ð°, ÐºÐ¾ÑÐ¾ÑÑÑ ÑÑÐ¸ÑÐ°ÑÑ ÑÐ°Ð¼Ð¾Ð¹ ÐºÑÐ°ÑÐ¸Ð²Ð¾Ð¹ Ð½Ð° Ð¿Ð»Ð°Ð½ÐµÑÐµ</div><div class=\"t-text\"><div class=\"adpartner-text\">Ð¢Ð¾Ð¿-50 ÑÐ°Ð¼ÑÑ ÐºÑÐ°ÑÐ¸Ð²ÑÑ Ð¶ÐµÐ½ÑÐ¸Ð½ Ð½Ð° ÐÐµÐ¼Ð»Ðµ.</div></div><div class=\"t-link\"><div class=\"t-btn\"><div class=\"adpartner-link-for-show\">Ð¿Ð¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ</div></div></div></div></div></a></div></div>","<div class=\"t-wrp horizontal half\"><div class=\"t-pad\"><a data-id=\"1578620\" data-show-id=\"7e66719b-1e6e-44d0-8b5d-da3b64acc73f\" href=\"https://a4p.adpartner.pro/click/7024/1578620/db299b9b-b4d5-4346-b81f-b5d984ec174b?data=eyJjcmVhdGVkX2F0IjoxNjI3OTMzMTE3LCJzaG93X2lkIjoiZGIyOTliOWItYjRkNS00MzQ2LWI4MWYtYjVkOTg0ZWMxNzRiIiwiYWRfdW5pdF9pZCI6NzAyNCwicnVsZV9pZCI6MCwiYWRfaWQiOjE1Nzg2MjAsImRhdGFfc291cmNlIjoiYXBwLWpzdS11YS0wNjp0aXplcl9hZCIsInBsYXRmb3JtX2lkIjoxLCJvc19pZCI6NiwiYnJvd3Nlcl9pZCI6NCwiY3VzdG9tZXJfaWQiOiI4MmFjMjJkYi1lYTkzLTRkZTctOTgxYy0wNmYwZjI1ZmRjOGIiLCJyZWdpb25faWQiOjIzOSwic3ViX3JlZ2lvbl9pZCI6MCwiY2l0eV9pZCI6MCwiaXNfcmVmcmVzaCI6ZmFsc2V9&hash=41c6bc52d48fd1a2ecce06df07b0d621\" target=\"_blank\" rel=\"nofollow\"><div class=\"adpartner-box\"><div class=\"t-img\"><figure style=\"background-image:url('//img.adpartner.pro/1578/1578620_2116.jpeg');\"></figure></div><div class=\"adpartner-under full-box\"><div class=\"t-title\">Ð¡Ð°Ð¼ÑÐµ Ð¶ÐµÑÑÐºÐ¸Ðµ ÑÐ¾ÑÐ¾ ÑÐ¾ ÑÐ²Ð°Ð´ÑÐ±Ñ</div><div class=\"t-text\"><div class=\"adpartner-text\">ÐÐµ ÐºÐ°Ð¶Ð´ÑÐ¹ Ð·Ð°ÑÐ¾ÑÐµÑ ÑÐ°ÐºÑÑ ÑÐ²Ð°Ð´ÑÐ±Ñ.</div></div><div class=\"t-link\"><div class=\"t-btn\"><div class=\"adpartner-link-for-show\">Ð¿Ð¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ</div></div></div></div></div></a></div></div>","<div class=\"t-wrp horizontal half\"><div class=\"t-pad\"><a data-id=\"1717112\" data-show-id=\"899a7205-cd93-48d9-ac78-a4e854453e3a\" href=\"https://a4p.adpartner.pro/click/7024/1717112/d52824d9-1470-465c-97d9-d97e0bccf1b1?data=eyJjcmVhdGVkX2F0IjoxNjI3OTMzMTE3LCJzaG93X2lkIjoiZDUyODI0ZDktMTQ3MC00NjVjLTk3ZDktZDk3ZTBiY2NmMWIxIiwiYWRfdW5pdF9pZCI6NzAyNCwicnVsZV9pZCI6MCwiYWRfaWQiOjE3MTcxMTIsImRhdGFfc291cmNlIjoiYXBwLWpzdS11YS0wNjp0aXplcl9hZCIsInBsYXRmb3JtX2lkIjoxLCJvc19pZCI6NiwiYnJvd3Nlcl9pZCI6NCwiY3VzdG9tZXJfaWQiOiI4MmFjMjJkYi1lYTkzLTRkZTctOTgxYy0wNmYwZjI1ZmRjOGIiLCJyZWdpb25faWQiOjIzOSwic3ViX3JlZ2lvbl9pZCI6MCwiY2l0eV9pZCI6MCwiaXNfcmVmcmVzaCI6ZmFsc2V9&hash=f1899e361371e748b480545968cbf40b\" target=\"_blank\" rel=\"nofollow\"><div class=\"adpartner-box\"><div class=\"t-img\"><figure style=\"background-image:url('//img.adpartner.pro/1717/1717112_2116.jpeg');\"></figure></div><div class=\"adpartner-under full-box\"><div class=\"t-title\">ÐÑÐ°ÑÐ¸Ð²ÑÐµ Ð´ÐµÐ²ÑÑÐºÐ¸ Ð¾Ð³Ð¾Ð»Ð¸Ð»Ð¸ÑÑ Ð½Ð° Ð¿Ð»ÑÐ¶Ðµ</div><div class=\"t-text\"><div class=\"adpartner-text\">ÐÑÐ¿Ð°Ð»ÑÐ½Ð¸ÐºÐ¸ Ð´Ð¾Ð²Ð¾Ð»ÑÐ½Ð¾ ÑÑÐ»Ð¾Ð²Ð½Ð¾ Ð¿ÑÐ¸ÐºÑÑÐ²Ð°ÑÑ ÑÐµÐ»Ð¾.</div></div><div class=\"t-link\"><div class=\"t-btn\"><div class=\"adpartner-link-for-show\">Ð¿Ð¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ</div></div></div></div></div></a></div></div>","<div class=\"t-wrp horizontal half\"><div class=\"t-pad\"><a data-id=\"1586868\" data-show-id=\"e6b666e2-68af-40ff-898a-eb7032d94a8c\" href=\"https://a4p.adpartner.pro/click/7024/1586868/41dd618b-dce9-4853-ac09-980d14abb000?data=eyJjcmVhdGVkX2F0IjoxNjI3OTMzMTE3LCJzaG93X2lkIjoiNDFkZDYxOGItZGNlOS00ODUzLWFjMDktOTgwZDE0YWJiMDAwIiwiYWRfdW5pdF9pZCI6NzAyNCwicnVsZV9pZCI6MCwiYWRfaWQiOjE1ODY4NjgsImRhdGFfc291cmNlIjoiYXBwLWpzdS11YS0wNjp0aXplcl9hZCIsInBsYXRmb3JtX2lkIjoxLCJvc19pZCI6NiwiYnJvd3Nlcl9pZCI6NCwiY3VzdG9tZXJfaWQiOiI4MmFjMjJkYi1lYTkzLTRkZTctOTgxYy0wNmYwZjI1ZmRjOGIiLCJyZWdpb25faWQiOjIzOSwic3ViX3JlZ2lvbl9pZCI6MCwiY2l0eV9pZCI6MCwiaXNfcmVmcmVzaCI6ZmFsc2V9&hash=30d37b9f475588cc1d3ed7b87f8a4d2e\" target=\"_blank\" rel=\"nofollow\"><div class=\"adpartner-box\"><div class=\"t-img\"><figure style=\"background-image:url('//img.adpartner.pro/1586/1586868_2116.jpeg');\"></figure></div><div class=\"adpartner-under full-box\"><div class=\"t-title\">Ð§ÐµÐ»Ð¾Ð²ÐµÑÐµÑÑÐ²Ð° Ð½Ðµ Ð±ÑÐ»Ð¾, Ð° Ð¾Ð½Ð¸ Ð±ÑÐ»Ð¸</div><div class=\"t-text\"><div class=\"adpartner-text\">ÐÐ¸Ð²Ð¾ÑÐ½ÑÐµ, ÐºÐ¾ÑÐ¾ÑÑÐµ Ð¿Ð¾ÑÐ²Ð¸Ð»Ð¸ÑÑ Ð¿ÐµÑÐ²ÑÐ¼Ð¸.</div></div><div class=\"t-link\"><div class=\"t-btn\"><div class=\"adpartner-link-for-show\">Ð¿Ð¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ</div></div></div></div></div></a></div></div>"],
                "place": place,
                "placeId": 3935,
                "eTrack": eTrack,
                "bannerId": o.bannerId,
                "bannerNum": "1627933115992154113",
                "mainFunc": this
            });
        
        window['banner1627933115992154113'] = adManager;
    };
    
        adManager = NativeAdManager;
    
return {
        init: init,
        showEvent: showEvent,
        clickEvent: clickEvent,
        destroyContainer: destroyContainer,
        sendEventTizer: sendEventTizer,
        setAdByNum: setAdByNum,
        adManager: adManager,
        setCloseBtn: setCloseBtn,
        setObjStyle: setObjStyle,
        isRtbFloat: isRtbFloat
    }
})();
window["banner" + bannerId].init({
    bannerId: bannerId,
    unitId: 7024,
    placeId: 3935,
    adData: [{"ad_id":1513372,"cost":0.000206207,"dsp_id":8,"rule_id":0,"show_id":"5b15a964-74bc-411b-92ae-677bda8d33cf"},{"ad_id":1578620,"cost":0.000205768,"dsp_id":8,"rule_id":0,"show_id":"7e66719b-1e6e-44d0-8b5d-da3b64acc73f"},{"ad_id":1717112,"cost":0.000205154,"dsp_id":8,"rule_id":0,"show_id":"899a7205-cd93-48d9-ac78-a4e854453e3a"},{"ad_id":1586868,"cost":0.000180093,"dsp_id":8,"rule_id":0,"show_id":"e6b666e2-68af-40ff-898a-eb7032d94a8c"}],
    regionId: 239,
    subRegionId: 0,
    cityId: 0,
    isRefresh: false
});
