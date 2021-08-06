!function(a,b,c,d,e,f,g,h,i,j,k,l){a[f]=a[f]||[],k=a[f];try{k.push(a.localStorage)}catch(a){}try{k.push(a.sessionStorage)}catch(a){}k.push({setItem:function(a,d,s,e,f,g,r){r="",e=new Date,f=typeof d,g="object"===f&&"undefined"!==f?JSON.stringify({v:d}):d,e.setTime(e.getTime()+1e11);for(key in s){if(key.toLowerCase() == "secure" && s[key] && location.protocol != "https:") {delete s[key];continue;}r+=key+"="+s[key]+";"}b[c]=a+"="+encodeURIComponent(g)+"; expires="+e.toUTCString()+"; path=/;"+r;},getItem:function(a){for(var f=a+"=",g=b[c].split(";"),h="",j={},k=0;k<g[d];k++){for(var m=g[k];" "==m.charAt(0);)m=m[e](1,m[d]);if(0===m.indexOf(f)){if(h=decodeURIComponent(m[e](f[d],m[d])),"{"==h[e](0,1))try{if("v"in(j=JSON.parse(h)))return j.v}catch(a){return h}return"undefined"==h?l:h}}return null}}),k.get=function(a,b){for(i=0;i<k[d];i++)if(b=k[i]){try{b=b.getItem(a)}catch(a){}if(b)return k.set(a,b),b}},k.set=function(a,b,s){for(i=0;i<k[d];i++)if(result=k[i],result)try{result.setItem(a,b,s)}catch(a){}}}(window,document,"cookie","length","substring","APC");


if(typeof(window.waitForApuID) == 'undefined'){
    window.functionCallbacks = [];
    window.functionLock = false;
    window.apuidExists = typeof(window.apuid) != 'undefined' &&  window.apuid;
    function getApuID () {
        var userId = '';
        try{
            userId = APC.get('lapuid');
            var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
            if (typeof userId !== "string" || !pattern.test(userId)){
                userId = '';
            }
        }
        catch(e){}
        if (userId === '' ) {
            var d = new Date().getTime();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
                d += performance.now(); //use high-precision timer if available
            }
            userId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d/16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            try{
                APC.set('lapuid', userId, {secure: true, sameSite: 'none'});
            }catch(e){
            }
        }
        return userId;
    }
    window.waitForApuID = function (callback) {
        if (apuidExists){
            callback();
        } else if (functionLock) {
            functionCallbacks.push(callback);
        } else {
            functionLock = true;
            functionCallbacks.push(callback);
            window.apuid = getApuID();
            window.apuidExists = true;
            while (functionCallbacks.length) {
                var thisCallback = functionCallbacks.pop();
                thisCallback();
            }
            functionLock = false;
        }
    };
}

if(typeof(loadedBanners) == 'undefined') {
    var loadedBanners = [];
}

window['initRtb1627933115992154113'] = (function(options) {
    window['shownAds' + options.placeId] = [options.shownAds];
    var place = document.getElementById('adpartner-jsunit-' + options.placeId);
    var iabStartTime = false;
    var setStyle = function(place, data) {
        var style = document.createElement("style");
        var str = '';
        for (i = 0; i < data.length; i++) {
            str += data[i];
        }
        style.appendChild(document.createTextNode(str));
        place.appendChild(style);
    };
    var inView = function() {
        var rect = place.getBoundingClientRect();
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
    };
    var setIframe = function(url) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute('src', url);
        iframe.setAttribute('width', '0');
        iframe.setAttribute('height', '0');
        iframe.setAttribute('style', 'display:none;');
        document.body.appendChild(iframe);
    };
    var init = function() {
        var preStyle = [options.preCustomStyle];
        setStyle(place, preStyle);
        var width = parseInt(place.getBoundingClientRect().right - place.getBoundingClientRect().left);
        if (width == 0) {
            width = 300;
        }

        var setCookie = function(name,value,expires) {
    expires = "; max-age=" + expires;
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
};
var getCookie = function(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
};

var getSessionData = function() {
    var timestamp = Math.round(+new Date()/1000);
    var sessionId = getCookie('session_id');
    var sessionPageview = window.sessionPageview || 1;
    if (!sessionId) {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        sessionId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d/16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        setCookie('session_id', sessionId, 1800);
        setCookie('session_pageview', timestamp + ".1", 1800);
    } else {
        setCookie('session_id', sessionId, 1800);
        var pvData = getCookie('session_pageview');
        if (window.sessionPageview) {
            sessionPageview = window.sessionPageview;
        } else if (pvData) {
            pvData = pvData.split(".");
            if (timestamp - pvData[0] < 5) {
                sessionPageview = pvData[1];
            } else {
                sessionPageview = parseInt(pvData[1]) + 1;
                setCookie('session_pageview', timestamp + "." + sessionPageview, 1800)
            }
        }
    }
    var siteVisitedData = getCookie('site_visited');
    var siteVisited = 1;
    if (siteVisitedData) {
        siteVisitedData = siteVisitedData.split(".");
        if (parseInt(siteVisitedData[0]) > timestamp) {
            siteVisited = siteVisitedData[1];
        } else {
            siteVisited = parseInt(siteVisitedData[1]) + 1;
            setCookie('site_visited', (timestamp + 86400) + "." + siteVisited, 2592000)
        }
    } else {
        setCookie('site_visited', (timestamp + 86400) + ".1", 2592000)
    }

    return [sessionId, sessionPageview, siteVisited]
};
        sessionData = getSessionData();

        
        setIframe(options.informerUrl + options.localStorageUrl +
            '?jsunit=' + options.placeId +
            '&unit_id=' + options.unitId +
            '&shown=' + options.shownAds +
            '&session_pageview=' + sessionData[1] +
            '&session_id=' + sessionData[0] +
            '&site_visited=' + sessionData[2] +
            '&apuid=' + window.apuid +
            '&width=' + width +
            '&screen_width=' + window.innerWidth +
            '&reload_count=' + options.reloadCount +
            '&banner_num=' + options.bannerNum +
            '&is_in_viewport=' + (inView() ? 1 : 0) +
            '&ref=' + encodeURIComponent(document.referrer) +
            '&location=' + encodeURIComponent(window.location.href)
        );

        window.addEventListener("message", function(event){

            if (typeof event.data != 'string') {
                return;
            }

            var messageRegexp = new RegExp("^user_id_([0-9A-Za-z-]+)$", "g");
            var message = messageRegexp.exec(event.data.trim());
            if (message != undefined) {
                window.apuid = message[1];
                try{
                    APC.set('lapuid', window.apuid, {secure: true, sameSite: 'none'});
                }catch(e){}
                return;
            }

            var messageRegexp = new RegExp("var bannerNum = ([0-9]+)", "g");
            var banners = messageRegexp.exec(event.data.trim());
            if(banners && banners[1] && typeof(loadedBanners[banners[1]]) == 'undefined'){
                loadedBanners[banners[1]] = 1;
                eval(event.data.trim());
            }

        }, false);
        
    };
    var reload = function() {
        if (!(options.useReload && options.reloadCount < 3)) {
            return;
        }
        var needReload = function() {
            if (!iabStartTime && inView()) {
                iabStartTime = new Date().getTime();
            }
            if (!inView()) {
                iabStartTime = false;
                return false;
            }
            var timeNow = new Date().getTime();
            if (timeNow - iabStartTime >= options.reloadSeconds * 1000) {
                return true;
            }
            return false;
        };

        var reloadCount = options.reloadCount + 1;
        if (!needReload()) {
            setTimeout("window['initRtb1627933115992154113'].reload()", 1000);
            return;
        }

        place.innerHTML = "";
        place.setAttribute('id', 'adpartner-jsunit-' + options.placeId);
        place.setAttribute('style', '');

        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = options.informerUrl + "/jsunit?id=" + options.placeId +
            "&ref=" + encodeURIComponent(document.referrer) +
            "&reload_count=" + reloadCount + "&shown=" + window['shownAds' + options.placeId].join(',') +
            "&" + Math.random();
        head.appendChild(script);
    };
    return {
        init: init,
        reload: reload
    }
})({
    shownAds: "",
    reloadCount: 0,
    preCustomStyle: "",
    placeId: 3935,
    unitId: 7024,
    bannerNum: "1627933115992154113",
    useReload: true,
    informerUrl: "https://a4p.adpartner.pro",
    localStorageUrl: "/jsunit/ls",
    reloadSeconds: 30,
    reloadCount: 0
});

waitForApuID(window['initRtb1627933115992154113'].init);

var scr = "";
var div = document.createElement('div');
document.body.appendChild(div);
div.innerHTML = scr;
var x = div.getElementsByTagName("script");
var len = x.length;
for(var i=0;i<len;i++)
{
    if (x[i].src != ""){
        var newScript = document.createElement("script");
        newScript.src = x[i].src;
        div.appendChild(newScript);
    } else {
        window.eval(x[i].text);
    }
}