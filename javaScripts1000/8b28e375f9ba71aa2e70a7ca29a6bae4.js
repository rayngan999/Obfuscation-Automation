<!DOCTYPE html>
<html lang="tr">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /><script type="text/javascript">
	(function () {
		var mobileDomain = "m.haberturk.com";
		var desktopDomain = "www.haberturk.com";
var hostname=window.location.hostname,redirect=function(e,o){hostname!==o?window.location.href=window.location.href.replace(e,o):window.location.hostname!=desktopDomain||"www.haberturk.com"!=desktopDomain&&"haberturk.stage"!=desktopDomain||!navigator.userAgent.match(/iPad/i)&&!navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i)||document.querySelector("meta[name=viewport]").setAttribute("content","width=device-width, initial-scale=0.75, maximum-scale=0.75, user-scalable=0")};-1===["preview."].indexOf(hostname)&&(hostname.indexOf(desktopDomain)>-1||hostname.indexOf(mobileDomain)>-1)&&(window.matchMedia("screen and (max-width: 760px)").matches?redirect(desktopDomain,mobileDomain):redirect(mobileDomain,desktopDomain));})(); </script>
<script type="text/javascript" src="https://im.haberturk.com/assets/js/adblock.js?v=3977" async></script><script type="text/javascript" src="https://im.haberturk.com/assets/js/ads-prebid.js?v=3977" async></script>    <meta charset="utf-8" />


    <title>HABERTÃRK Haber - Haberler, son dakika ve gÃ¼ndemin merkezi</title>
    <meta name="description" content="HABERTÃRK - FlaÅ geliÅme ve en son haberler ilk Ã¶nce HABERTÃRK'Ã¼n haber sayfalarÄ±nda. En hÄ±zlÄ± son dakika, gÃ¼ncel gÃ¼ndem, magazin, spor, ekonomi haberlerini buradan okuyun." />
    <meta name="keywords" content="" />

    <meta http-equiv="x-dns-prefetch-control" content="on" />
    <link rel="dns-prefetch" href="https://im.haberturk.com" />
    <link rel="dns-prefetch" href="//im.hthayat.com" />
    <link rel="dns-prefetch" href="//adsp.haberturk.com" />

    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="expires" content="-1" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="content-language" content="tr" />
    <!--<meta http-equiv="Refresh" content="180" />-->
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <meta property="fb:page_id" content="161827680527303" />
    <meta property="fb:pages" content="161827680527303" />
    <link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.haberturk.com/" />
    <script>
        //var masthead_currentTime = new Date().getTime();
        //var workerenable = true;
        if (typeof window.Worker != 'undefined') {
            var worker = new Worker('/scripts/worker.js?v=4');
            worker.addEventListener('message', function(e) {
                if (e.data == 'adInstall') {
                    var gads = document.createElement('script');
                    gads.async = true;
                    gads.type = 'text/javascript';
                    var useSSL = 'https:' == document.location.protocol;
                    gads.src = (useSSL ? 'https:' : 'http:') +
                        '//www.googletagservices.com/tag/js/gpt.js';
                    var node = document.getElementsByTagName('script')[0];
                    node.parentNode.insertBefore(gads, node);
                }
            });
            worker.postMessage('adInstall');

        } else {
            setTimeout(function() {
                var gads = document.createElement('script');
                gads.async = true;
                gads.type = 'text/javascript';
                var useSSL = 'https:' == document.location.protocol;
                gads.src = (useSSL ? 'https:' : 'http:') +
                    '//www.googletagservices.com/tag/js/gpt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(gads, node);
            }, 0);
        }

        /*! head.load - v1.0.3 */
(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);    </script>

    <script type="text/javascript">
    var pbjs = pbjs || {que: []};
    var googletag = googletag || {cmd: []};
    var _avp = _avp || [];
    (function () {
        var dfpPrvOptions = {"2224":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/Masthead_2","width":970,"height":250,"mediaType":"MastHead","visibleContainerClass":"masthead-content"},"1272":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/970x90\/\/Gobek","width":970,"height":90,"prebid":"1252464","dimensions":[[0,0],[970,250],[970,90],[728,90]]},"1273":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x250","width":300,"height":250,"prebid":"8004","admaticid":"532394"},"1932":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x600","width":300,"height":600,"prebid":"1252461"},"1929":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x250_3","width":300,"height":250},"2153":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x250_3","width":300,"height":250},"1274":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x250_2","width":300,"height":250,"prebid":"1252462"},"1930":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x250_4","width":300,"height":250,"prebid":"1252462"},"1931":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x250_5","width":300,"height":250,"prebid":"1252462"},"1967":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x250_7","width":300,"height":250,"prebid":"1252462"},"1933":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x600_2","width":300,"height":600,"prebid":"1252461"},"1275":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/160x600\/\/Sag","width":160,"height":600,"mediaType":"Pageskin","prebid":"8004","dimensions":[[[1700,575],[[300,600],[160,600],[120,600]]],[[0,0],[[160,600],[120,600]]]]},"1560":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/970x90\/\/Gobek_2","width":970,"height":90,"prebid":"1252464","dimensions":[[[0,0],[[970,250],[970,90],[728,90]]]]},"1279":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/Masthead","width":970,"height":250,"mediaType":"MastHead","visibleContainerClass":"masthead-content"},"1951":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/300x250_6","width":300,"height":250,"prebid":"1252462"},"1276":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/160x600\/\/Sol","width":160,"height":600,"prebid":"8004","dimensions":[[[0,0],[[160,600],[120,600]]]]},"2154":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/970x90\/\/Gobek_2","width":970,"height":90,"prebid":"1252464","dimensions":[[[0,0],[[970,250],[970,90],[728,90]]]]},"2155":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/970x90\/\/Gobek_2","width":970,"height":90,"prebid":"1252464","dimensions":[[[0,0],[[970,250],[970,90],[728,90]]]]},"2156":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/970x90\/\/Gobek_2","width":970,"height":90,"prebid":"1252464","dimensions":[[[0,0],[[970,250],[970,90],[728,90]]]]},"2157":{"dfpZone":"\/31903365\/Haberturk\/\/Anasayfa\/\/970x90\/\/Gobek_2","width":970,"height":90,"prebid":"1252464","dimensions":[[[0,0],[[970,250],[970,90],[728,90]]]]}};
        var adspPrvOptions = {"2016":[],"1549":[],"1277":{"width":1,"height":1},"1737":[],"2097":{"width":640,"height":70},"2112":{"width":310,"height":50},"2140":{"width":350,"height":300}};
        var settingUsePrebid = true;
        var settingPrebidDebug = false;
        var autoLoadZoneList = [1279,1278,1549,2016,2165,2097,2112,1275,1277,1737];

            head.load("https:\/\/im.haberturk.com\/assets\/js\/prebid3.24.0.js");
!function(e,n,t){var i,r=(new Date).getTime(),a=n.documentElement,o=function(){return googletag},d=function(){return googletag.pubads()},s=function(e){googletag.cmd.push(e)},l=function(e){for(var t=n.cookie.split("; "),i=0;i<t.length;i++){var r=t[i].split("=");if(r.length>1&&e==r[0])return unescape(r[1])}return null},u=null,f=function(){if(!u){var e=l("uidAge")||"",n=l("uidGender")||"";u={age:e,gender:n}}return u},c=function(){return(new Date).getTime()},v=[],p=function(e,n){var t,i=o();return void 0===n.mediaType||"Interstitial"!=n.mediaType&&"OutOfPage"!=n.mediaType?(t=i.defineSlot(n.dfpZone,[n.width,n.height],e),void 0!==n.dimensions&&n.dimensions.length&&t.defineSizeMapping(n.dimensions)):t=i.defineOutOfPageSlot(n.dfpZone,e),n.hasOwnProperty("refreshTime")&&n.refreshTime>0&&t.setTargeting("refresh",!0),t.addService(d()),v[e]=t,t},g=new function(){var e=window.innerWidth,n=window.innerHeight,t=function(e){return Array.isArray(e)},i=function(e,n){return t(e)&&e.length==n},r=function(e){return i(e,2)&&!t(e[0])&&!t(e[1])&&!isNaN(e[0])&&!isNaN(e[1])},a=function(e){return r(e)?[e]:function(e){if(!t(e))return!1;for(var n=e.length,i=0;i<n;i++)if(!r(e[i]))return!1;return!0}(e)?e:null};this.mapSize=function(t){var o=a(t);if(null!=o)return o;for(var d=t.length,s=null,l=0;l<d;l++){var u=t[l];if(i(u,2)){var f=u[0],c=a(u[1]);if(r(f)&&null!=c&&(null==s&&(s=c),e>=f[0]&&n>=f[1]))return c}}return s}},h=[{bidder:"criteo",optid:"prebid",param:"zoneId",forceInt:!0},{bidder:"criteo",optid:"crnwid",param:"networkId",forceInt:!0},{bidder:"turktelekom",optid:"ttauid",param:"uid",forceInt:!0},{bidder:"adtarget",optid:"admaticid",param:"aid",forceInt:!0}],m=function(e,n){for(var t=[],i=0;i<h.length;i++){var r=h[i],a=r.optid;if(void 0!==n[a]&&n[a]){var o={},d=n[a];r.forceInt&&(d=parseInt(d)),isNaN(d)||(o[r.param]=d,t.push({bidder:r.bidder,params:o}))}}if(t.length){var s=n.dimensions||[[n.width,n.height]],l=g.mapSize(s);return null==l?null:{code:e,mediaTypes:{banner:{sizes:l}},bids:t}}return null},b=function(e){return n.getElementById(e)},y=function(e){var n=b(e);n&&n.parentNode.removeChild(n)},_=function(e,n){var t=b(e);t&&(t.style.minHeight=n)},T=function(e,n){var t=b(e);t&&(t.style.display=n?"block":"none")},P=function(e,n){var t=b(e);t&&(t.classList?t.classList.add(n):t.className+=" "+n)},I=function(e,n){var t=b(e);return t&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")),this},A=function(e,n,t){e.addEventListener?e.addEventListener(n,t):e.attachEvent&&e.attachEvent(n,t)},L=function(e,n,t){e.removeEventListener?e.removeEventListener(n,t):e.detachEvent&&e.detachEvent(n,t)},M=function(){return e.scrollY?e.scrollY:a.scrollTop},E=null,z=null,k=!1,O=!1,R=function(){if(E&&!k&&!O){var e=b(E),t=n.createElement("div");t.id="MustHeadPrependDiv",t.style.height="255px";var i=n.createElement("div");i.id="masthead_scroll_div",i.style.position="fixed",i.style.top="0",i.style.height="265px",i.style.width="100%",i.style.backgroundColor="#000",i.style.opacity="0.3",i.style.zIndex="999999",e.parentNode.insertBefore(t,e),n.body.appendChild(i),P(E,"masthead_fixed_scroll"),e.style.position="fixed",e.style.top="7px",e.style.zIndex="9999999",k=!0,setTimeout(function(){C(),O=!0},1200)}},C=function(){if(E){var e=b(E);I(E,"masthead_fixed_scroll"),e.style.position="relative",e.style.top="7px",e.style.zIndex="99",y("masthead_scroll_div"),y("MustHeadPrependDiv")}},H=function(){M()>130?R():(C(),k=!1)},N=function(n){var a=n.slot.getSlotElementId(),o=b(a);if(!n.isEmpty&&a==z){var d=c(),s=parseInt(d-r),l=d-i;"undefined"!=typeof workerenable&&(console.log("MainPageMasthead_Page_Load_To_Render",s),console.log("MainPageMasthead_Init_To_Render",l),worker.postMessage("allJsLoad")),A(e,"scroll",H),M()>130&&R(),_(a,"");try{if(e.ga){var u=ga.getAll()[0].get("name");ga(u+".send","event","Ad Load Info","MainPageMasthead_Page_Load_To_Render",s,s),ga(u+".send","event","Ad Load Info","MainPageMasthead_Init_To_Render",l,l)}}catch(e){}head.ready("mpfooter",function(){void 0===window.adblockDetector?C():window.adblockDetector.init({found:function(){C()}})})}var f=o.getAttribute("onRenderEnded");f&&t(f)},j=function(n){var t=n.slot.getSlotElementId();if(t==z){var a=c(),o=parseInt(a-i),d=a-r;"undefined"!=typeof workerenable&&(console.log("MainPageMasthead_Init_To_Viewable",o),console.log("MainPageMasthead_Page_Load_To_Viewable",d)),_(t,""),setTimeout(function(){L(e,"scroll",H)},1200);try{if(e.ga){var s=ga.getAll()[0].get("name");ga(s+".send","event","Ad Load Info","MainPageMasthead_Init_To_Viewable",o,o),ga(s+".send","event","Ad Load Info","MainPageMasthead_Page_Load_To_Viewable",d,d)}}catch(e){}}},S=function(e,n){if(void 0!==adspPrvOptions[n]){var t=f();_avp.push({tagid:e,alias:"/advertpro",type:"banner",zid:n,pid:0,custom8:t.age,custom9:t.gender})}else void 0!==dfpPrvOptions[n]&&s(function(){void 0!==v[e]&&o().display(e)})},x=function(e,n,t){if(void 0!==dfpPrvOptions[n]){var i=dfpPrvOptions[n];s(function(){var n=o();n.pubadsReady||(D(),n.enableServices());var r=null;if(void 0===v[e]?(r=p(e,i),n.display(e)):t&&(r=v[e]),r){var a=function(){r&&(d().refresh([r],{changeCorrelator:!1}),r=null)},s=m(e,i);settingUsePrebid&&null!=s?pbjs.que.push(function(){pbjs.addAdUnits([s]),pbjs.requestBids({timeout:1e3,adUnitCodes:[e],bidsBackHandler:function(){pbjs.setTargetingForGPTAsync([e]),a()}}),setTimeout(a,2e3)}):a()}})}else void 0!==adspPrvOptions[n]&&S(e,n)},B=function(){pbjs.initAdserverSet||(pbjs.initAdserverSet=!0,s(function(){pbjs.que.push(function(){pbjs.setTargetingForGPTAsync(),d().refresh()})}))},D=function(){var e=d(),n="1"==l("npa")?1:0,t=0;"undefined"!=typeof performance&&void 0!==performance.navigation?t=performance.navigation.type:document.referrer===w.location.href&&(t=1),e.setTargeting("nt",t+"");var i=f();i.age&&e.setTargeting("age",i.age),i.gender&&e.setTargeting("gender",i.gender),e.setRequestNonPersonalizedAds(n),e.addEventListener("slotRenderEnded",N),e.addEventListener("impressionViewable",j),e.disableInitialLoad(),e.collapseEmptyDivs(!0,!0),e.enableSingleRequest()};e.cbgAds={AdsInline:function(e){S("zone_"+e,e)},MastHeadClose:function(){if(E){var e=z;T(E+"_btn",!0),P(E,"MustHeadClose"),C(),s(function(){v[e]&&d().clear([v[e]])})}},customZoneClose:function(e){T(e+"_btn",!0),document.getElementById(e).innerHTML="";var n=b(e+"_btnopen");n&&(n.onclick=function(n){T(e+"_btn",!1),s(function(){d().refresh([v[e]])})})},zoneAutoRefresh:function(e){for(var n=e.length,t=0;t<n;t++){var i=e[t];if(void 0!==dfpPrvOptions[i]){var r=dfpPrvOptions[i];r.hasOwnProperty("refreshTime")&&setInterval(function(){cbgAds.refreshZone(i)},r.refreshTime)}}},refreshZone:function(e){x("zone_"+e,e,!0)},RefreshZone:function(e){cbgAds.refreshZone(e)},initMasthead:function(e){E=e,z=e+"_mhc",s(function(){o().display(z),i=c()});var n=b(E+"_btnopen");n&&(n.onclick=function(e){T(E+"_btn",!1),I(E,"MustHeadClose"),s(function(){d().refresh([v[z]])})})},AdsHeader:function(e){for(var n=e.length,t=[],i=[],r=0;r<n;r++){var a=e[r];if(dfpPrvOptions[a]){var d=dfpPrvOptions[a],l="zone_"+a,u="MastHead"==d.mediaType;u&&(l+="_mhc"),i.push({divID:l,isMasthead:u,prvOptions:d});var f=m(l,d);null!=f&&t.push(f)}}var c=i.length;settingUsePrebid&&(pbjs.que.push(function(){pbjs.setConfig({priceGranularity:"high",bidderTimeout:1e3,debug:settingPrebidDebug}),pbjs.addAdUnits(t),pbjs.requestBids({bidsBackHandler:B})}),setTimeout(B,2e3)),s(function(){var e=o(),n=e.pubadsReady;n||D();for(var t=0;t<c;t++){var r=i[t],a=p(r.divID,r.prvOptions);r.isMasthead&&a.setCollapseEmptyDiv(!0)}n||e.enableServices()})},AdsBody:function(){settingUsePrebid||s(function(){0}),q.initLazyLoad(),head.ready("mpfooter",function(){Z.initLazyLoad()})}};var q=new function(){var t=[],i=[],r=c(),a=!1,o=null,d=function(n){var r=e.innerHeight,d=M(),l=d-150,u=d+r+150,f=0;for(var c in t)if(void 0===i[c]){var v=t[c],p=v.getBoundingClientRect().top+d,g=v.getAttribute("data-zone-id");l<p&&p<u?(i[c]=1,I(c,"lazy-init"),x(c,g,!1)):f++}0==f&&(a=!1,L(e,"scroll",s)),n&&(o=null)},s=function(){var e=c(),n=e-r;o&&(clearTimeout(o),o=null),n<40?o=setTimeout(function(){d(!0)},40):(r=e,d(!1))};this.initLazyLoad=function(){for(var r=n.getElementsByClassName("lazy-init"),o=r.length,l=0;l<o;l++){var u=r[l],f=u.id;void 0===t[f]&&(t[f]=u)}if(!a){var c=!1;for(var v in t)if(void 0===i[v]){c=!0;break}c&&(d(),a=!0,A(e,"scroll",s))}}},Z=new function(){var t=[],i=[],r=c(),a=!1,o=null,d=function(n){var r=e.innerHeight,d=M(),l=d+r+150,u=0;for(var f in t)if(void 0===i[f]){var c=t[f],v=null;try{v=c.getBoundingClientRect()}catch(e){i[f]=1;continue}var p=v.top+d,g=c.getAttribute("data-htsrc");p<l?(g&&(c.setAttribute("src",g),c.setAttribute("data-htsrc","")),i[f]=1):u++}0==u&&(a=!1,L(e,"scroll",s)),n&&(o=null)},s=function(){var e=c(),n=e-r;o&&(clearTimeout(o),o=null),n<40?o=setTimeout(function(){d(!0)},40):(r=e,d(!1))};this.initLazyLoad=function(){for(var r=n.getElementsByTagName("img"),o=r.length,l=0;l<o;l++){var u=r[l];if(u.getAttribute("data-htsrc")){var f="imglazy_"+l;u.id=f,t[f]=u}}if(!a){var c=!1;for(var v in t)if(void 0===i[v]){c=!0;break}c&&(d(),a=!0,A(e,"scroll",s))}}}}(window,document,function(p){eval(p)});        cbgAds.AdsHeader(autoLoadZoneList);
    })();
</script><link rel="canonical" href="https://www.haberturk.com/" />
<link rel="stylesheet" type="text/css" href="https://im.haberturk.com/assets/css/desktop/v4/main-page.min.css?v=3977" />        <script>
var allnewsImpressionArray = (typeof allnewsImpressionArray != 'undefined' && allnewsImpressionArray instanceof Array) ? allnewsImpressionArray : [];
var allnewsImpressionArrayKey = (typeof allnewsImpressionArrayKey != 'undefined' && allnewsImpressionArrayKey instanceof Array) ? allnewsImpressionArrayKey : [];
var globalBrand = 'Main';
        </script>		<!-- Begin Gtm Variables -->
		<script type="text/javascript">
			var HtIsProduction = true,
	            HtIsHomePage = true,
	            HtIsNewsPage = false,
              HtIsSpecialNews = false;
        </script>
		<!-- End Gtm Variables --><!-- Begin OGEZIO-ASYNC-OPTION Tag -->
<script type="text/javascript">
var __OGEZIO_ASYNC_OPTIONS = {"m1":100,"m2":1,"m3":""};
</script>
<!-- End OGEZIO-ASYNC-OPTION Tag -->
    <script>
        var GLOBAL_YAYIN_ID = "100";

            var layoutLoading = "https://im.haberturk.com/assets/js/desktop/v4/main-page-header.min.js?v=3977";
            var mspfooterjs = "https://im.haberturk.com/assets/js/desktop/v4/main-page-footer.min.js?v=3977";
            var mspheaderJs = "https://im.haberturk.com/assets/js/desktop/v4/header.min.js?v=3977";
            var sondakikaLoading = "/widgetjs/sondakikaTicker.js";
            var libcode3Loading = "//adsp.haberturk.com/advertpro/js/libcode3.js";
            var socketIoLoading = "https://im.haberturk.com/assets/js//socket.io/WebsocketConnection.min.js?v=3977";
            var nchanUniversalJs = "https://im.haberturk.com/assets/js//socket.io/NchanUniversal.min.js?v=3977";
            dataLayer = [];
    </script>

    <script>
        var pp_gemius_identifier = 'oqWQbT_Id5D3A_ZrIT8s6GaE.D6ZrVhAGa0wPTAId67.z7';

            function gemius_pending(i) {
                window[i] = window[i] || function() {
                    var x = window[i + '_pdata'] = window[i + '_pdata'] || [];
                    x[x.length] = arguments;
                };
            };

            function gemius_player_pending(obj, fun) {
                obj[fun] = obj[fun] || function() {
                    var x = window['gemius_player_data'] = window['gemius_player_data'] || [];
                    x[x.length] = [this, fun, arguments];
                };
            }

            window.onload = function(e) {

                allnewsArray = (typeof allnewsArray != 'undefined' && allnewsArray instanceof Array) ? allnewsArray : [];

                setTimeout(function() {
					setTimeout(function(){
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NCHP7Z9');
                var autoRefreshType = "";                if (typeof head != "undefined") {
					if (typeof autoRefreshInit != "undefined") {
							autoRefreshType = HTGlobal.AutoRefresh.init(180000);
							dataLayer.push({'Auto Refresh':autoRefreshType});
					} else {
	                	setTimeout(function() {
							autoRefreshType = HTGlobal.AutoRefresh.init(180000);
							dataLayer.push({'Auto Refresh':autoRefreshType});
    	                },3000);
					}

                } else {
	                	setTimeout(function() {
							autoRefreshType = HTGlobal.AutoRefresh.init(180000);
							dataLayer.push({'Auto Refresh':autoRefreshType});
    	                },3000);
                }                dataLayer.push({
                    'hierarchy': 'Anasayfa',
                    'category1': '',
                    'category2': '',
                    'category3': '',
                    'category4': '',
                    'detailType': '',
                    'layoutType': '',
                    'categoryOrder': '',
                    'newsID': '',
                    'newsTitle': '',
                    'editorID': '',
                    'textLength': 0,
                    'commentCount': '',
                    'photoTotalCount': '',
                    'currentPhotoNo': '',
                    'columnistName': '',
                    'adBlockUser': '',
                'loginStatus': '',
                'memberId': '',
                    'gender': '',
                    'platform': 'Desktop',
                    'cinerSource': 'Haberturk',
                    'nativeAd': 'No',
                    'pageType': 'Ana Sayfa',
                    'videoIncluded': 'No',
                    'webVersion': '98482',
                    'mobileVersion': '2',
                    'jsVersion': '98481',
                    'cssVersion': '98481',
                    'mvcVersion': '97957',
                    'modulesVersion': '97975',
                    'ageGroup' : '',
                    'disYazarlar' : '',
                    'dateCreated' : '',
                    'dateModified' : '2021-08-03 09:04'
                    
                });
}, 0);


setTimeout(function() {
    ! function() {
        var t = function(t) {
                return (document.cookie.match("(^|; )" + t + "=([^;]*)") || 0)[2]
            },
            e = function(t, o, e, n) {
                n = void 0 === n ? "" : "domain=" + n + ";";
                var i = new Date;
                i.setDate(i.getDate() + e);
                var a = escape(o) + (null === e ? "" : "; expires=" + i.toUTCString());
                document.cookie = t + "=" + a + ";" + n + "path=/"
            };
        var o = !1;
        void 0 === window.adblockDetector ? o = !0 : window.adblockDetector.init({
            debug: !0,
            found: function() {
                o = !0
            },
            notFound: function() {
                o = !1
            }
        }), e("ad_blocker", o, 30, window.location.host.replace("www.", ""))
    }()
}, 0);
if( window.canRunAds === undefined ){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event' : 'adblock-detected'
    });
}
                }, 0);
                
                head.load([{
                    layout: layoutLoading
                }, {
                    libcode: libcode3Loading
                }], function() {
                    var autoRefreshInit = true;
                    setTimeout(function() {
                        MainSliderInit();
                    }, 0);

                    
                    setTimeout(function() {
                        gemius_pending('gemius_hit');
                        gemius_pending('gemius_event');
                        gemius_pending('pp_gemius_hit');
                        gemius_pending('pp_gemius_event');
                        (function(d, t) {
                            try {
                                var gt = d.createElement(t),
                                    s = d.getElementsByTagName(t)[0],
                                    l = 'http' + ((location.protocol == 'https:') ? 's' : '');
                                gt.setAttribute('async', 'async');
                                gt.setAttribute('defer', 'defer');
                                gt.src = l + '://tr.hit.gemius.pl/xgemius.js';
                                s.parentNode.insertBefore(gt, s);
                            } catch (e) {}
                        })(document, 'script');

                        ;
                        gemius_player_pending(window, "GemiusPlayer");
                        gemius_player_pending(GemiusPlayer.prototype, "newProgram");
                        gemius_player_pending(GemiusPlayer.prototype, "newAd");
                        gemius_player_pending(GemiusPlayer.prototype, "adEvent");
                        gemius_player_pending(GemiusPlayer.prototype, "programEvent");
                        (function(d, t) {
                            try {
                                var gt = d.createElement(t),
                                    s = d.getElementsByTagName(t)[0],
                                    l = 'http' + ((location.protocol == 'https:') ? 's' : '');
                                gt.setAttribute('async', 'async');
                                gt.setAttribute('defer', 'defer');
                                gt.src = l + '://gatr.hit.gemius.pl/gplayer.js';
                                s.parentNode.insertBefore(gt, s);
                            } catch (e) {}
                        })(document, 'script');
                    }, 200);
                });
            };
            

            var HaberSonDakika = [];
            var HotTopics = [{"hottopics_ayar":1},{"id":"3151353","url":"cbg:\/\/news\/3151353","topic":"Son dakika haberi 2 ayr\u0131 FET\u00d6 soru\u015fturmas\u0131! 13 ilde 40 g\u00f6zalt\u0131 karar\u0131","hottopic_url":"\/son-dakika-haberi-2-ayri-feto-sorusturmasi-13-ilde-40-gozalti-karari-3151353"},{"id":"3151325","url":"cbg:\/\/news\/3151325","topic":"Adana'da 5.7 milyonluk tefeci vurgunu! G\u00f6zalt\u0131lar var","hottopic_url":"\/57-milyonluk-tefeci-vurgunu-gozaltilar-var-3151325"},{"id":"3151318","url":"cbg:\/\/news\/3151318","topic":"Meteoroloji'den Karadeniz i\u00e7in sa\u011fanak, Akdeniz ve Ege i\u00e7in kuvvetli r\u00fczgar uyar\u0131s\u0131","hottopic_url":"\/meteoroloji-den-son-dakika-karadeniz-icin-saganak-akdeniz-ve-ege-icin-kuvvetli-ruzgar-uyarisi-hava-durumu-3151318"},{"id":"3151324","url":"cbg:\/\/news\/3151324","topic":"T\u00fcrkiye yan\u0131yor! Yang\u0131nlarda 7'nci g\u00fcn","hottopic_url":"\/turkiye-yaniyor-son-dakika-yanginlarda-7-nci-gun-iste-son-gelismeler-3151324"},{"id":"3151319","url":"cbg:\/\/news\/3151319","topic":"\u0130stanbul merkezli 4 ilde FET\u00d6\/PDY operasyonu","hottopic_url":"\/istanbul-merkezli-4-ilde-fetopdy-operasyonu-3151319"},{"id":"3151315","url":"cbg:\/\/news\/3151315","topic":"Fatih'te iki \u00e7ocu\u011funu rehin al\u0131p pencereden rastgele ate\u015f a\u00e7an \u015f\u00fcpheli yakaland\u0131","hottopic_url":"\/fatih-te-iki-cocugunu-rehin-alip-pencereden-rastgele-ates-acan-supheli-yakalandi-3151315"},{"id":"3150267","url":"cbg:\/\/news\/3150267","topic":"Orman yang\u0131nlar\u0131nda 7'nci g\u00fcn! S\u00f6nd\u00fcrme \u00e7al\u0131\u015fmalar\u0131 s\u00fcr\u00fcyor","hottopic_url":"\/orman-yanginlarinda-6-nci-gun-sondurme-calismalari-7-noktada-suruyor-3150267"},{"id":"3151302","url":"cbg:\/\/news\/3151302","topic":"A\u011fr\u0131'da 4 ya\u015f\u0131ndaki \u00e7ocu\u011fu d\u00f6vd\u00fc\u011f\u00fc iddia edilen anne ve \u00fcvey baba tutukland\u0131","hottopic_url":"\/agri-da-4-yasindaki-cocugunu-dovdugu-iddia-edilen-anne-ve-uvey-baba-tutuklandi-3151302"},{"id":"3151310","url":"cbg:\/\/news\/3151310","topic":"ABD, 16 \u00fclke ve aday\u0131 \"y\u00fcksek riskli \u00fclkeler\" listesine ekledi","hottopic_url":"\/abd-16-ulke-ve-adayi-yuksek-riskli-ulkeler-listesine-ekledi-3151310"},{"id":"3151301","url":"cbg:\/\/news\/3151301","topic":"Son dakika: Dat\u00e7a a\u00e7\u0131klar\u0131nda 4,3 b\u00fcy\u00fckl\u00fc\u011f\u00fcnde deprem","hottopic_url":"\/son-dakika-datca-aciklarinda-4-3-buyuklugunde-deprem-3151301"}];
            var CoronaDatas = {"3150791":{"id":"3150791","topic":"Covid-19'un yay\u0131lmas\u0131n\u0131 engelleyecek a\u015f\u0131 izin bekliyor \n","hottopic_url":"\/covid-19-un-yayilmasini-engelleyecek-asi-klinik-calisma-icin-izin-bekliyor-3150791","date":"02.08","image":"https:\/\/im.haberturk.com\/2021\/08\/02\/ver1627910667\/3150791_100x100.jpg","time":"16:02","year":"2021"},"3150769":{"id":"3150769","topic":"Vaka say\u0131s\u0131 geriliyor!","hottopic_url":"https:\/\/www.haberturk.com\/2-agustos-korona-tablosu-2021-aciklaniyor-son-dakika-corona-vaka-sayisi-kac-3150954","date":"02.08","image":"https:\/\/im.haberturk.com\/2021\/08\/02\/ver1627917425\/3150769_100x100.jpg","time":"15:28","year":"2021"},"3150647":{"id":"3150647","topic":"Bilim Kurulu \u00dcyesi Turan'dan kritik a\u015f\u0131 a\u00e7\u0131klamas\u0131","hottopic_url":"\/tek-doz-korur-mu-bilim-kurulu-uyesi-turan-dan-kritik-asi-aciklamasi-haberler-3150647","date":"02.08","image":"https:\/\/im.haberturk.com\/2021\/08\/02\/ver1627902633\/3150647_100x100.jpg","time":"13:57","year":"2021"},"3150583":{"id":"3150583","topic":"A\u015f\u0131 olmayana ekmek sat\u0131lmayacak!","hottopic_url":"\/asi-olmayana-ekmek-satilmayacak-haberler-3150583","date":"02.08","image":"https:\/\/im.haberturk.com\/2021\/08\/02\/ver1627911713\/3150583_100x100.jpg","time":"13:01","year":"2021"},"3150577":{"id":"3150577","topic":"Pekin'e ula\u015f\u0131m k\u0131smen durduruldu","hottopic_url":"\/cin-in-baskenti-pekin-e-ulasim-covid-19-tedbirleri-kapsaminda-kismen-durduruldu-3150577","date":"02.08","image":"https:\/\/im.haberturk.com\/2021\/08\/02\/ver1627898448\/3150577_100x100.jpg","time":"12:51","year":"2021"},"3150313":{"id":"3150313","topic":"A\u015f\u0131da en \u00e7ok merak edilen soru!","hottopic_url":"\/prof-dr-tanir-ucuncu-doz-asida-biontech-ya-da-sinovac-tercihi-fark-etmez-3150313","date":"02.08","image":"https:\/\/im.haberturk.com\/2021\/08\/02\/ver1627886804\/3150313_100x100.jpg","time":"09:32","year":"2021"},"3150293":{"id":"3150293","topic":"Korona a\u015f\u0131lar\u0131na zam geldi!\n","hottopic_url":"\/koronavirus-asilarina-zam-geldi-3150293","date":"02.08","image":"https:\/\/im.haberturk.com\/2021\/08\/02\/ver1627886825\/3150293_100x100.jpg","time":"09:10","year":"2021"}};
    </script>


    
            <script type="application/ld+json">
            {"name":"Haberturk.com","url":"https:\/\/www.haberturk.com\/","logo":"https:\/\/im.haberturk.com\/assets\/images\/ht_logo.png","address":{"@type":"PostalAddress","addressLocality":"\u0130stanbul","addressRegion":"TR","postalCode":"34430","streetAddress":"Habert\u00fcrk Gazetecilik A.\u015e. Abd\u00fclhakhamit Caddesi No: 25 Taksim\/Beyo\u011flu"},"sameAs":["https:\/\/www.facebook.com\/haberturk","https:\/\/twitter.com\/haberturk","https:\/\/tr.pinterest.com\/haberturk","https:\/\/www.instagram.com\/haberturk"],"@type":"Organization","@context":"http:\/\/schema.org"}
            </script>
            <script type="application/ld+json">
             {"@context":"http:\/\/schema.org","@type":"WebSite","url":"https:\/\/www.haberturk.com\/","potentialAction":{"@type":"SearchAction","target":"https:\/\/www.haberturk.com\/arama\/{queryKeyword}","query-input":"required name=queryKeyword"}}
            </script><script type="application/ld+json">{"@context":"http:\/\/schema.org","@type":"ItemList","itemListElement":[{"@type":"ListItem","position":1,"url":"https:\/\/www.haberturk.com\/turkiye-yaniyor-son-dakika-yanginlarda-7-nci-gun-iste-son-gelismeler-3151324"},{"@type":"ListItem","position":2,"url":"https:\/\/www.haberturk.com\/meteoroloji-den-son-dakika-karadeniz-icin-saganak-akdeniz-ve-ege-icin-kuvvetli-ruzgar-uyarisi-hava-durumu-3151318"},{"@type":"ListItem","position":3,"url":"https:\/\/www.haberturk.com\/orman-yanginlari-neden-artiyor-hangi-yikici-sonuclari-beraberinde-getiriyor-3150874"},{"@type":"ListItem","position":4,"url":"https:\/\/www.haberturk.com\/manavgat-ta-havaalanina-giden-otobus-takla-atti-3-olu-5-yarali-3151005"},{"@type":"ListItem","position":5,"url":"https:\/\/www.haberturk.com\/5-puanlik-prim-indiriminde-yeni-donem-3150786-ekonomi"},{"@type":"ListItem","position":6,"url":"https:\/\/www.haberturk.com\/57-milyonluk-tefeci-vurgunu-gozaltilar-var-3151325"},{"@type":"ListItem","position":7,"url":"https:\/\/www.haberturk.com\/universiteli-azra-5-gundur-haber-yok-3150403"},{"@type":"ListItem","position":8,"url":"https:\/\/www.haberturk.com\/son-dakika-cumhurbaskani-erdogan-tunus-cumhurbaskani-ile-telefonda-gorustu-3151128"},{"@type":"ListItem","position":9,"url":"https:\/\/www.haberturk.com\/van-da-bulunan-goktasi-uluslararasi-meteorit-veri-bulteni-ne-islendi-3150790"},{"@type":"ListItem","position":10,"url":"https:\/\/www.haberturk.com\/berna-lacin-ile-gulben-ergen-arasindaki-roma-yi-yakarim-polemigi-magazin-haberleri-3150308-magazin"},{"@type":"ListItem","position":11,"url":"https:\/\/www.haberturk.com\/sahan-gokbakar-duyurdu-su-anda-bu-yapilan-cok-onemli-magazin-haberleri-3150799-magazin"},{"@type":"ListItem","position":12,"url":"https:\/\/www.haberturk.com\/azra-ya-kahrolurken-bir-kayip-haberi-daha-haberler-3150851"},{"@type":"ListItem","position":13,"url":"https:\/\/www.haberturk.com\/canli-yayinda-alevler-buyudu-haberler-3150913"},{"@type":"ListItem","position":14,"url":"https:\/\/www.haberturk.com\/son-dakika-koronavirus-salgininda-yeni-vaka-sayisi-3150992"},{"@type":"ListItem","position":15,"url":"https:\/\/www.haberturk.com\/yazarlar\/kemal-ozturk\/3150487-konya-katliami-irkci-saldiri-mi-aileler-arasinda-husumet-mi"},{"@type":"ListItem","position":16,"url":"https:\/\/www.haberturk.com\/galatasaray-aliou-dieng-transferi-icin-teklif-yapti-3151206-spor"},{"@type":"ListItem","position":17,"url":"https:\/\/www.haberturk.com\/ankara-da-nallihan-kus-cenneti-nde-cikan-yangin-kontral-altina-alindi-3151100"},{"@type":"ListItem","position":18,"url":"https:\/\/www.haberturk.com\/son-dakika-haberi-galatasaray-ve-fenerbahce-nin-rakipleri-belli-oldu-3150656-spor"},{"@type":"ListItem","position":19,"url":"https:\/\/www.haberturk.com\/son-dakika-haberi-bakan-bilgin-den-memur-zammi-aciklamasi-3150466-ekonomi"},{"@type":"ListItem","position":20,"url":"https:\/\/www.haberturk.com\/son-dakika-haberi-yasemin-adar-bronz-madalya-kazandi-3150694-spor"}]}</script>        <script>(function(){/*

Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},l=this||self,m=/^[\w+/_-]+[=]{0,2}$/,p=null,q=function(){},r=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var v=function(a,b){Object.defineProperty(l,a,{configurable:!1,get:function(){return b},set:q})};var y=function(a,b){this.b=a===w&&b||"";this.a=x},x={},w={};var aa=function(a,b){a.src=b instanceof y&&b.constructor===y&&b.a===x?b.b:"type_error:TrustedResourceUrl";if(null===p)b:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&m.test(b)){p=b;break b}p=""}b=p;b&&a.setAttribute("nonce",b)};var z=function(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^+new Date).toString(36)};var A=function(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)},B=function(a){this.a=a||l.document||document};B.prototype.appendChild=function(a,b){a.appendChild(b)};var C=function(a,b,c,d,e,f){try{var k=a.a,h=A(a.a,"SCRIPT");h.async=!0;aa(h,b);k.head.appendChild(h);h.addEventListener("load",function(){e();d&&k.head.removeChild(h)});h.addEventListener("error",function(){0<c?C(a,b,c-1,d,e,f):(d&&k.head.removeChild(h),f())})}catch(n){f()}};var ba=l.atob("aHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vaW1hZ2VzL2ljb25zL21hdGVyaWFsL3N5c3RlbS8xeC93YXJuaW5nX2FtYmVyXzI0ZHAucG5n"),ca=l.atob("WW91IGFyZSBzZWVpbmcgdGhpcyBtZXNzYWdlIGJlY2F1c2UgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlIGlzIGludGVyZmVyaW5nIHdpdGggdGhpcyBwYWdlLg=="),da=l.atob("RGlzYWJsZSBhbnkgYWQgb3Igc2NyaXB0IGJsb2NraW5nIHNvZnR3YXJlLCB0aGVuIHJlbG9hZCB0aGlzIHBhZ2Uu"),ea=function(a,b,c){this.b=a;this.f=new B(this.b);this.a=null;this.c=[];this.g=!1;this.i=b;this.h=c},F=function(a){if(a.b.body&&!a.g){var b=
function(){D(a);l.setTimeout(function(){return E(a,3)},50)};C(a.f,a.i,2,!0,function(){l[a.h]||b()},b);a.g=!0}},D=function(a){for(var b=G(1,5),c=0;c<b;c++){var d=H(a);a.b.body.appendChild(d);a.c.push(d)}b=H(a);b.style.bottom="0";b.style.left="0";b.style.position="fixed";b.style.width=G(100,110).toString()+"%";b.style.zIndex=G(2147483544,2147483644).toString();b.style["background-color"]=I(249,259,242,252,219,229);b.style["box-shadow"]="0 0 12px #888";b.style.color=I(0,10,0,10,0,10);b.style.display=
"flex";b.style["justify-content"]="center";b.style["font-family"]="Roboto, Arial";c=H(a);c.style.width=G(80,85).toString()+"%";c.style.maxWidth=G(750,775).toString()+"px";c.style.margin="24px";c.style.display="flex";c.style["align-items"]="flex-start";c.style["justify-content"]="center";d=A(a.f.a,"IMG");d.className=z();d.src=ba;d.style.height="24px";d.style.width="24px";d.style["padding-right"]="16px";var e=H(a),f=H(a);f.style["font-weight"]="bold";f.textContent=ca;var k=H(a);k.textContent=da;J(a,
e,f);J(a,e,k);J(a,c,d);J(a,c,e);J(a,b,c);a.a=b;a.b.body.appendChild(a.a);b=G(1,5);for(c=0;c<b;c++)d=H(a),a.b.body.appendChild(d),a.c.push(d)},J=function(a,b,c){for(var d=G(1,5),e=0;e<d;e++){var f=H(a);b.appendChild(f)}b.appendChild(c);c=G(1,5);for(d=0;d<c;d++)e=H(a),b.appendChild(e)},G=function(a,b){return Math.floor(a+Math.random()*(b-a))},I=function(a,b,c,d,e,f){return"rgb("+G(Math.max(a,0),Math.min(b,255)).toString()+","+G(Math.max(c,0),Math.min(d,255)).toString()+","+G(Math.max(e,0),Math.min(f,
255)).toString()+")"},H=function(a){a=A(a.f.a,"DIV");a.className=z();return a},E=function(a,b){0>=b||null!=a.a&&0!=a.a.offsetHeight&&0!=a.a.offsetWidth||(fa(a),D(a),l.setTimeout(function(){return E(a,b-1)},50))},fa=function(a){var b=a.c;var c="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];b=c?c.call(b):{next:g(b)};for(c=b.next();!c.done;c=b.next())(c=c.value)&&c.parentNode&&c.parentNode.removeChild(c);a.c=[];(b=a.a)&&b.parentNode&&b.parentNode.removeChild(b);a.a=null};var ia=function(a,b,c,d,e){var f=ha(c),k=function(n){n.appendChild(f);l.setTimeout(function(){f?(0!==f.offsetHeight&&0!==f.offsetWidth?b():a(),f.parentNode&&f.parentNode.removeChild(f)):a()},d)},h=function(n){document.body?k(document.body):0<n?l.setTimeout(function(){h(n-1)},e):b()};h(3)},ha=function(a){var b=document.createElement("div");b.className=a;b.style.width="1px";b.style.height="1px";b.style.position="absolute";b.style.left="-10000px";b.style.top="-10000px";b.style.zIndex="-10000";return b};var K={},L=null;var M=function(){},N="function"==typeof Uint8Array,O=function(a,b){a.b=null;b||(b=[]);a.j=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var c=a.a[b];if(!(null===c||"object"!=typeof c||Array.isArray(c)||N&&c instanceof Uint8Array)){a.g=b-a.f;a.c=c;break a}}a.g=Number.MAX_VALUE}a.i={}},P=[],Q=function(a,b){if(b<a.g){b+=a.f;var c=a.a[b];return c===P?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===P?a.c[b]=[]:c},R=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=Q(a,c);d&&(a.b[c]=new b(d))}return a.b[c]};
M.prototype.h=N?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!L){L={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));K[e]=f;for(var k=0;k<f.length;k++){var h=f[k];void 0===L[h]&&(L[h]=k)}}}b=K[b];c=[];for(d=0;d<this.length;d+=3){var n=this[d],t=(e=d+1<this.length)?this[d+1]:0;h=(f=d+2<this.length)?this[d+2]:0;k=n>>2;n=(n&
3)<<4|t>>4;t=(t&15)<<2|h>>6;h&=63;f||(h=64,e||(t=64));c.push(b[k],b[n],b[t]||"",b[h]||"")}return c.join("")};try{return JSON.stringify(this.a&&this.a,S)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.a&&this.a,S)};var S=function(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};M.prototype.toString=function(){return this.a.toString()};var T=function(a){O(this,a)};u(T,M);var U=function(a){O(this,a)};u(U,M);var ja=function(a,b){this.c=new B(a);var c=R(b,T,5);c=new y(w,Q(c,4)||"");this.b=new ea(a,c,Q(b,4));this.a=b},ka=function(a,b,c,d){b=new T(b?JSON.parse(b):null);b=new y(w,Q(b,4)||"");C(a.c,b,3,!1,c,function(){ia(function(){F(a.b);d(!1)},function(){d(!0)},Q(a.a,2),Q(a.a,3),Q(a.a,1))})};var la=function(a,b){V(a,"internal_api_load_with_sb",function(c,d,e){ka(b,c,d,e)});V(a,"internal_api_sb",function(){F(b.b)})},V=function(a,b,c){a=l.btoa(a+b);v(a,c)},W=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];e=l.btoa(a+b);e=l[e];if("function"==r(e))e.apply(null,d);else throw Error("API not exported.");};var X=function(a){O(this,a)};u(X,M);var Y=function(a){this.h=window;this.a=a;this.b=Q(this.a,1);this.f=R(this.a,T,2);this.g=R(this.a,U,3);this.c=!1};Y.prototype.start=function(){ma();var a=new ja(this.h.document,this.g);la(this.b,a);na(this)};
var ma=function(){var a=function(){if(!l.frames.googlefcPresent)if(document.body){var b=document.createElement("iframe");b.style.display="none";b.style.width="0px";b.style.height="0px";b.style.border="none";b.style.zIndex="-1000";b.style.left="-1000px";b.style.top="-1000px";b.name="googlefcPresent";document.body.appendChild(b)}else l.setTimeout(a,5)};a()},na=function(a){var b=Date.now();W(a.b,"internal_api_load_with_sb",a.f.h(),function(){var c;var d=a.b,e=l[l.btoa(d+"loader_js")];if(e){e=l.atob(e);
e=parseInt(e,10);d=l.btoa(d+"loader_js").split(".");var f=l;d[0]in f||"undefined"==typeof f.execScript||f.execScript("var "+d[0]);for(;d.length&&(c=d.shift());)d.length?f[c]&&f[c]!==Object.prototype[c]?f=f[c]:f=f[c]={}:f[c]=null;c=Math.abs(b-e);c=1728E5>c?0:c}else c=-1;0!=c&&(W(a.b,"internal_api_sb"),Z(a,Q(a.a,6)))},function(c){Z(a,c?Q(a.a,4):Q(a.a,5))})},Z=function(a,b){a.c||(a.c=!0,a=new l.XMLHttpRequest,a.open("GET",b,!0),a.send())};(function(a,b){l[a]=function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];l[a]=q;b.apply(null,d)}})("__d3lUW8vwsKlB__",function(a){"function"==typeof window.atob&&(a=window.atob(a),a=new X(a?JSON.parse(a):null),(new Y(a)).start())});}).call(this);

window.__d3lUW8vwsKlB__("WyJhM2U1ZDlkNGJmNzUzZTJkIixbbnVsbCxudWxsLG51bGwsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2YvQUdTS1d4VWJsT3BOWTNoeTZyME1Sa205MXBGZFJiRzdHbVRNWmJ4SVo4WVR2cFpuQy0xaFBad201THZyT2x2WEhlV2RlMFpnZVJhZ05JWkxvZzFKOTZpM0plQVx1MDAzZCJdCixbMjAsImRpdi1ncHQtYWQiLDEwMCwiWVRObE5XUTVaRFJpWmpjMU0yVXlaQVx1MDAzZFx1MDAzZCIsW251bGwsbnVsbCxudWxsLCJodHRwczovL3d3dy5nc3RhdGljLmNvbS8wZW1uL2YvcC9hM2U1ZDlkNGJmNzUzZTJkLmpzP3VzcXBcdTAwM2RDQkEiXQpdCiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hYN0tVQnROaGx2bDF6ck01cHF0c3lrMXFxOXo3aUQydkdNLVM3UmF3ekpLMlc4a1hSMS1oZFV6T2tnS1F4S19RaFhTc2RoSGpYVksyV2dfV2ZrP2FiXHUwMDNkMSIsImh0dHBzOi8vZnVuZGluZ2Nob2ljZXNtZXNzYWdlcy5nb29nbGUuY29tL2wvQUdTS1d4WGw2c0pjVzJIOWNSNGJIRjBQT2FTQVB5TTM4RGpWNURwQVpkZENYcVJSLW9TTmNxSkNBN1FWUERWODRsY1pCQW5hc05oam9udFBnaW9sXy1KeT9hYlx1MDAzZDJcdTAwMjZzYmZcdTAwM2QxIiwiaHR0cHM6Ly9mdW5kaW5nY2hvaWNlc21lc3NhZ2VzLmdvb2dsZS5jb20vbC9BR1NLV3hYaGROYjZxR3pJdDNYTnBBWl9uWS1BMzNGQ2gzcXlKZDl0VlZwUmIwWlh1V3ZwdkJFY3RZWVRQR0ZiWUdlY3FtT2FNTmVZaC0zVlU3U2s3UW9IP3NiZlx1MDAzZDIiXQo=");</script>
    
</head>

<body class="body-main-page">
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCHP7Z9" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="MarketHorizontal" class="">
<div class="borsa-widget-top">
    <div class="borsa-widget-wrapper">
        <div class="left">
            <span>TÃRKÄ°YE'NÄ°N EN BÃYÃK Ä°NTERNET GAZETESÄ°</span>
        </div>
        <div class="right">
            <div class="borsa-widget-group">

                                    <a id="bist-100" href="/ekonomi/borsa" alt="Bist 100 borsa" target="_blank" class="live-bist-100 gtm-tracker notr" data-newsVariant="markethorizontal-bist100">
                        <span class="name">BÄ°ST 100</span>
                        <span class="rate notr LastPrice">1.399,65</span>
                        <span class="PercentChange">%0,00</span>
                    </a>
                
                                    <a id="dolar" href="/ekonomi/piyasa/88-dolar" alt="Dolar" target="_blank" class="live-dolar gtm-tracker up" data-newsVariant="markethorizontal-usd">
                        <span class="name">Dolar</span>
                        <span class="rate up LastPrice">8,3562</span>
                        <span class="PercentChange">%0,02</span>
                    </a>
                
                                    <a id="euro" href="/ekonomi/piyasa/89-euro" alt="Euro" target="_blank" class="live-euro gtm-tracker up" data-newsVariant="markethorizontal-euro">
                        <span class="name">Euro</span>
                        <span class="rate up LastPrice">9,9281</span>
                        <span class="PercentChange">%0,06</span>
                    </a>
                
                                    <a id="gram-altin" href="/ekonomi/altin" alt="AltÄ±n" target="_blank" class="live-gram-altin gtm-tracker down" data-newsVariant="markethorizontal-altin">
                        <span class="name">AltÄ±n</span>
                        <span class="rate down LastPrice">486,35</span>
                        <span class="PercentChange">%-0,08</span>
                    </a>
                
                                    <a id="faiz" href="/ekonomi/piyasa/1947-faiz" alt="Faiz" target="_blank" class="live-faiz gtm-tracker notr" data-newsVariant="markethorizontal-faiz">
                        <span class="name">Faiz</span>
                        <span class="rate notr LastPrice">18,59</span>
                        <span class="PercentChange">%0,00</span>
                    </a>
                
                                    <a id="faiz" href="/ekonomi/piyasa/2211-bitcoin" alt="Bitcoin" target="_blank" class="live-faiz gtm-tracker down" data-newsVariant="markethorizontal-bitcoin">
                        <span class="name">Bitcoin</span>
                        <span class="rate down LastPrice">38.291,75</span>
                        <span class="PercentChange">%-1,45</span>
                    </a>
                
                <!--
                <a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=23856&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" class="live-su-endeks gtm-tracker" rel="nofollow" target="_blank">
                    <div class="rate-icon"><img src="https://im.haberturk.com/assets/images/borsa/ht-finishsuindeksi.png"></div>
                    <img src="https://adsp.haberturk.com/advertpro/servlet/view/banner/image/media?mid=23856&pid=0&position=1&date=(date)&uuid=(email)" hspace="0" vspace="0" border="0" alt="SU ENDEKSÄ°"> 
                    <span class="su-value">84,33</span>
                </a>
                -->

                <a href="/ekonomi/borsa" target="_blank" class="gtm-tracker" data-newsVariant="markethorizontal-borsa">
                    <div>
                        <span class="name">Borsa</span>
                        <span class="ion-stats-bars"></span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
</div><div id="AuthPopup" class=""><div id="ht-auth-popup" class="ht-auth-popup" style="display: none;">
    <div class="ha-container">
        <div class="ha-tab">
            <a href="#" data-show-login>GÄ°RÄ°Å YAP</a>
            <a href="#" data-show-register>ÃYE OL</a>
            <a href="#" data-close-popup class="close">
                <img src="https://im.haberturk.com/assets/images/auth-popup/close-white.svg" alt="Kapat" width="20" />
            </a>
        </div>
        <div class="ha-form">
            <form action="/uyelik/login" data-login-form>
                <div class="ha-form-group">
                    <input class="full" type="text" name="username" placeholder="E-posta adresi" />
                </div>
                <div class="ha-form-group">
                    <input class="full" type="password" autocomplete="off" name="password" placeholder="Åifre" />
                </div>
                <div class="ha-form-group">
                    <button data-login-submit class="submit">GÄ°RÄ°Å YAP</button>
                </div>
                <div class="ha-form-group">
                    <a href="#" class="forgot" data-show-reset>Åifremi unuttum</a>
                </div>
            </form>
            <form action="/uyelik/save" data-register-form>
                <div class="ha-form-group">
                    <input class="half" type="text" name="name" placeholder="Ä°sim" />
                    <input class="half" type="text" name="surname" placeholder="Soyisim" />
                </div>
<!--
                <div class="ha-form-group">
                    <input class="full" type="text" name="usernick" placeholder="KullanÄ±cÄ± adÄ±" />
                </div>
-->
                <div class="ha-form-group">
                    <input class="full" type="email" name="email" placeholder="E-posta adresi" />
                </div>
                <div class="ha-form-group">
                    <input class="half" type="password" autocomplete="off" name="password" placeholder="Åifre" />
                    <input class="half" type="password" autocomplete="off" name="password_confirm" placeholder="Åifre tekrar" />
                </div>

				<div class="ha-form-group">
										<input class="half" type="text" readonly name="t1" value="1" /> <span style="font-size: 36px;padding: 0px 10px;">+</span>
					<input class="half" type="text" readonly name="t2" value="7" /> <span style="font-size: 36px;padding: 0px 10px;">=</span>
					<input class="half" type="text"  name="t3" />
				</div>


                <div class="ha-form-group">
                    <input class="inline" name="confirmed" type="checkbox" id="confirmed" value="1" />
                    <label for="confirmed">
                        <a href="https://www.haberturk.com/kullanimkosullari" target="_blank" title="KullanÄ±m KoÅullarÄ±">KullanÄ±m KoÅullarÄ±nÄ±</a> ve
                        <a href="https://www.haberturk.com/privacy" target="_blank" title="Gizlilik PolitikasÄ±">Gizlilik PolitikasÄ±nÄ±</a> okudum, kabul ediyorum.
                    </label>
                </div>
                <div class="ha-form-group">
                    <input class="inline" name="bulten_none" type="checkbox" id="bulten_none" value="1" />
                    <label for="bulten_none"> TarafÄ±ma bÃ¼ltenler ve ticari iletiler gÃ¶nderilmesini istemiyorum.</label>
					<input  type="hidden" name="rvalidCx" value="OA==" />
                </div>
                <div class="ha-form-group">
                    <button data-register-submit class="submit">ÃYE OL</button>
                </div>
            </form>
            <form action="/uyelik/reset" data-reset-form>
                <div class="ha-form-group">
                    <a href="#" class="close" data-close-reset>
                        <img src="https://im.haberturk.com/assets/images/auth-popup/close-black.svg" alt="Kapat" width="12" />
                    </a>
                </div>
                <div class="ha-form-description">
                    <h4>ÅÄ°FREMÄ° UNUTTUM</h4>
                    <p>Åifrenizi sÄ±fÄ±rlamak iÃ§in oturum aÃ§arken kullandÄ±ÄÄ±nÄ±z e-posta adresinizi giriniz</p>
                </div>
                <div class="ha-form-group">
                    <input class="full" type="text" name="email" placeholder="E-posta adresi" />
                </div>
                <div class="ha-form-group">
                    <button data-reset-submit class="submit">ÅÄ°FREMÄ° GÃNDER</button>
                </div>
            </form>
        </div>
        <div class="ha-footer">
			<button data-go-google class="social google">
				<img src="https://im.haberturk.com/assets/images/auth-popup/google-white.svg" alt="Gmail" width="18" />
                <span>GOOGLE Ä°LE GÄ°RÄ°Å YAP</span>
            </button>
            <button data-go-facebook class="social facebook">
                <img src="https://im.haberturk.com/assets/images/auth-popup/facebook.svg" alt="Facebook" width="18" />
                <span>FACEBOOK Ä°LE GÄ°RÄ°Å YAP</span>
            </button>
            <button data-go-twitter class="social twitter">
                <img src="https://im.haberturk.com/assets/images/auth-popup/twitter.svg" alt="Twitter" width="18" />
                <span>TWITTER Ä°LE GÄ°RÄ°Å YAP</span>
            </button>
        </div>
        <div class="ha-message" id="ht-auth-message">
            <a href="#" data-close-message class="close">
                <img src="https://im.haberturk.com/assets/images/auth-popup/close-white.svg" alt="Kapat" width="12" />
            </a>
            <p data-message-text></p>
        </div>
    </div>
</div>
<script>

    var isAutoJsLoaded = false;
    if (typeof authWidget === 'undefined') {
        var authWidgetJs = 'https://im.haberturk.com/assets/js/auth-popup/auth.min.js?v=3977';
        var authWidgetCss = 'https://im.haberturk.com/assets/css/auth-popup/auth.min.css?v=3977';
        if (typeof head !== 'undefined') {

            var waitForreadyStateCompleteCount = 0;
            var waitForreadyStateComplete = function () {
                if (document.readyState == "complete") {
                    if (document.getElementsByClassName('other-category-menu').length > 0 || document.getElementsByClassName('menu-icon').length > 0) {

                        var waitForreadyOpenLoginFunctionCount = 0;
                        var waitForreadyOpenLoginFunction = function () {
                          if (typeof openLoginModal != "undefined") {

                              openLoginModal = openLoginForOtherPlaces;

                          }  else {
                              setTimeout(function () {
                                  waitForreadyOpenLoginFunctionCount++;
                                  if (waitForreadyOpenLoginFunctionCount < 100) {
                                      waitForreadyOpenLoginFunction();
                                  }else{
                                      authPopupLoadAndInit();
                                  }
                              }, 1000);
                          }
                        };
                        waitForreadyOpenLoginFunction();

                        var menu_button;
                        if (document.getElementsByClassName('menu-icon').length > 0){
                            menu_button = document.querySelector('.menu-icon');
                        }else{
                            menu_button = document.querySelector('.login-modal-btn');
                            if (document.getElementById('userLogin')) {
                                document.querySelector('#userLogin').addEventListener("click", function (e) {
                                    openLoginForOtherPlaces();
                                }, false);
                            }
                        }
                        if (menu_button) {
                            menu_button.addEventListener("click", function (e) {
                                authPopupLoadAndInit();
                            }, false);
                        }
                    }else{
                        authPopupLoadAndInit();
                    }
                } else {
                    setTimeout(function () {
                        waitForreadyStateCompleteCount++;
                        if (waitForreadyStateCompleteCount < 100) {
                            waitForreadyStateComplete();
                        }else{
                            authPopupLoadAndInit();
                        }
                    }, 100);
                }
            };
            waitForreadyStateComplete();

        } else {

            var authWidgetScript = document.createElement("script");
            authWidgetScript.type = "text/javascript";
            authWidgetScript.async = true;
            authWidgetScript.src = authWidgetJs;
            document.head.appendChild(authWidgetScript);

            var authWidgetStyle = document.createElement("link");
            authWidgetStyle.type = "text/css";
            authWidgetStyle.rel = 'stylesheet';
            authWidgetStyle.href = authWidgetCss;
            document.head.appendChild(authWidgetStyle);

            var authWidgetScriptLoaded = false;
            authWidgetScript.onreadystatechange = authWidgetScript.onload = function() {
                if (! authWidgetScriptLoaded) {
                    initAuthPopup();
                }
                authWidgetScriptLoaded = true;
            }
        }

        function initAuthPopup () {
            if (! isAutoJsLoaded) {
                isAutoJsLoaded = true;
                var isWidgetReadyInterval = setInterval(function () {
                    if (typeof AuthPopup !== 'undefined') {
                        clearInterval(isWidgetReadyInterval);
                        window.authWidget = new AuthPopup;

                        document.getElementById('ht-auth-popup').style.display = '';
                    }
                }, 50);
            }
        }

        function authPopupLoadAndInit() {
            head.load([authWidgetJs, authWidgetCss], function () {
                initAuthPopup();
            });
        }

        function openLoginForOtherPlaces() {
            if (typeof head !== 'undefined') {
                head.load([authWidgetJs, authWidgetCss], function () {
                    initAuthPopup();
                    var maxIntevalRetry = 200; // 20 sn
                    var isAuthWidgetReady = setInterval(function () {
                        if (typeof authWidget !== 'undefined') {
                            authWidget.show();
                            clearInterval(isAuthWidgetReady);
                        }
                        maxIntevalRetry--;
                        if (maxIntevalRetry === 0) {
                            clearInterval(isAuthWidgetReady);
                        }
                    }, 100);
                });
            }else{
                if (typeof event !== 'undefined') {
                    event.preventDefault();
                }
                var maxIntevalRetry = 200; // 20 sn
                var isAuthWidgetReady = setInterval(function () {;
                    if (typeof authWidget !== 'undefined') {
                        authWidget.show();
                        clearInterval(isAuthWidgetReady);
                    }
                    maxIntevalRetry--;
                    if (maxIntevalRetry === 0) {
                        clearInterval(isAuthWidgetReady);
                    }
                }, 100);
            }
        }
    }


</script>
</div>

<link rel="stylesheet" type="text/css" href="https://im.haberturk.com/assets/css/desktop/v4/header.min.css?v=3977" /><header class="header-new headerSelector  ">
    <div class="wrapper">
        <div class="primary position">
            <div class="wrapper">
                <div class="left">
                    <ul>
                        <li class="type1"><a class="link" href="/canliyayin" target="_blank">
                                <img width="50" src="https://im.haberturk.com/assets/images/v4/canli-yayin-logo.svg" alt="CanlÄ± YayÄ±n">
                            </a></li>
                            <li class="type2 video-icon">
        <a href="/video" title="HT Video" target="_blank">
            <img src="https://im.haberturk.com/assets/images/header/htvideo-logo-symbol-white-alt.svg" alt="HabertÃ¼rk Video" />
        </a>
    </li>

                    </ul>
                </div>
                <div class="center">
                    <a href="/" class="logo">
                        <img width="80" src="https://im.haberturk.com/assets/images/logo/haberturk-logo-v1.svg" alt="HabertÃ¼rk Logo">
                    </a>
                </div>
                <div class="right other-menu">
                    <ul>
                        <li class="member-login-btn"><span class="link login-btn" data-newsVariant="Header">
                                <img src="https://im.haberturk.com/assets/images/icon/icon-avatar-white.svg" alt="Login">
                            </span></li>
                        <li class="my-account-btn"><a href="/uyelik/bilgi_guncelle" class="link login-btn" data-newsVariant="Header">
                                <img src="https://im.haberturk.com/assets/images/icon/icon-avatar-white.svg" alt="Login">
                            </a></li>
                        <li><span class="link search-btn">
                                <img src="https://im.haberturk.com/assets/images/icon/icon-search-white.svg" alt="Search">
                            </span></li>
                        <li><span class="link menu-btn">
                                <img src="https://im.haberturk.com/assets/images/icon/icon-menu-white.svg" alt="Menu">
                            </span></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="secondary position">
            <div class="wrapper">
                <ul class="primary">
                                                                                                                                                                                                                                            <li class="primary  sub">
                                                                            <a class="name " href="/gundem" target="_blank" title="GÃ¼ndem">
                                            GÃ¼ndem                                        </a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/politika" target="_blank" title="Politika">
                                                    Politika                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/ucuncu-sayfa" target="_blank" title="3.Sayfa">
                                                    3.Sayfa                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/egitim" target="_blank" title="EÄitim">
                                                    EÄitim                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/guvenlik" target="_blank" title="GÃ¼venlik">
                                                    GÃ¼venlik                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/inanc" target="_blank" title="Ä°nanÃ§">
                                                    Ä°nanÃ§                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/ankara" target="_blank" title="Ankara">
                                                    Ankara                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/istanbul" target="_blank" title="Ä°stanbul">
                                                    Ä°stanbul                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/ege" target="_blank" title="Ege">
                                                    Ege                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/cevre" target="_blank" title="Ãevre">
                                                    Ãevre                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/gundem/vefat" target="_blank" title="Vefat">
                                                    Vefat                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                                            <li class="primary  sub">
                                                                            <a class="name " href="/ekonomi" target="_blank" title="Ekonomi">
                                            Ekonomi                                        </a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/altin" target="_blank" title="AltÄ±n">
                                                    AltÄ±n                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/doviz" target="_blank" title="DÃ¶viz">
                                                    DÃ¶viz                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/borsa" target="_blank" title="Borsa">
                                                    Borsa                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/kripto-para" target="_blank" title="Kripto Para">
                                                    Kripto Para                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/is-yasam" target="_blank" title="Ä°Å-YaÅam">
                                                    Ä°Å-YaÅam                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/otomobil" target="_blank" title="Otomobil">
                                                    Otomobil                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/turizm" target="_blank" title="Turizm">
                                                    Turizm                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary sub">
                                                <a class="name" href="/ekonomi/enerji" target="_blank" title="Enerji">
                                                    Enerji                                                </a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/savunma-sanayi" target="_blank" title="Savunma Sanayi">Savunma Sanayi</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary sub">
                                                <a class="name" href="/ekonomi/emlak" target="_blank" title="Emlak">
                                                    Emlak                                                </a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/projeler/cekmekoy" target="_blank" title="Projeler">Projeler</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/girisimcilik" target="_blank" title="GiriÅimcilik">
                                                    GiriÅimcilik                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/sigorta" target="_blank" title="Sigorta">
                                                    Sigorta                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary sub">
                                                <a class="name" href="/ekonomi/sosyal-guvenlik" target="_blank" title="Sosyal GÃ¼venlik">
                                                    Sosyal GÃ¼venlik                                                </a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/genel-saglik-sigortasi" target="_blank" title="Genel SaÄlÄ±k SigortasÄ±">Genel SaÄlÄ±k SigortasÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/emekli" target="_blank" title="Emekli">Emekli</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/memur" target="_blank" title="Memur">Memur</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/isci" target="_blank" title="Ä°ÅÃ§i">Ä°ÅÃ§i</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/esnaf" target="_blank" title="Esnaf">Esnaf</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/isveren" target="_blank" title="Ä°Åveren">Ä°Åveren</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/issiz" target="_blank" title="Ä°Åsiz">Ä°Åsiz</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/yargi-kararlari" target="_blank" title="YargÄ± KararlarÄ±">YargÄ± KararlarÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/personel-alimi" target="_blank" title="Personel AlÄ±mÄ±">Personel AlÄ±mÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/soru-cevap" target="_blank" title="Soru Cevap">Soru Cevap</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                                            <li class="primary  ">
                                                                            <a class="name " href="/dunya" target="_blank" title="DÃ¼nya">
                                            DÃ¼nya                                        </a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                                            <li class="primary  sub">
                                                                            <a class="name " href="/spor" target="_blank" title="Spor">
                                            Spor                                        </a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary sub">
                                                <a class="name" href="/spor/futbol" target="_blank" title="Futbol">
                                                    Futbol                                                </a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/super_lig" target="_blank" title="SÃ¼per Lig">SÃ¼per Lig</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/sampiyonlar_ligi" target="_blank" title="Åampiyonlar Ligi">Åampiyonlar Ligi</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/turkiye_kupasi" target="_blank" title="TÃ¼rkiye KupasÄ±">TÃ¼rkiye KupasÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/avrupa_ligi" target="_blank" title="Avrupa Ligi">Avrupa Ligi</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/ispanya" target="_blank" title="Ä°spanya">Ä°spanya</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/ingiltere" target="_blank" title="Ä°ngiltere">Ä°ngiltere</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/almanya" target="_blank" title="Almanya">Almanya</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/italya" target="_blank" title="Ä°talya">Ä°talya</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/fransa" target="_blank" title="Fransa">Fransa</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/1_lig" target="_blank" title="TFF 1. Lig">TFF 1. Lig</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/tff_2_lig" target="_blank" title="TFF 2. Lig">TFF 2. Lig</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/tff_3_lig" target="_blank" title="TFF 3. Lig">TFF 3. Lig</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary sub">
                                                <a class="name" href="/spor/basketbol/stbl" target="_blank" title="Basketbol">
                                                    Basketbol                                                </a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/tkbl" target="_blank" title="TBKL">TBKL</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/euroleague" target="_blank" title="Euro League">Euro League</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/eurocup" target="_blank" title="Euro Cup">Euro Cup</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/dunya_sampiyonasi" target="_blank" title="DÃ¼nya ÅampiyonasÄ±">DÃ¼nya ÅampiyonasÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/sampiyonlar_lig" target="_blank" title="Åampiyonlar Ligi">Åampiyonlar Ligi</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/kadinlar_euroleague" target="_blank" title="KadÄ±nlar Euro League">KadÄ±nlar Euro League</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/milli_takim" target="_blank" title="Milli TakÄ±m">Milli TakÄ±m</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/diger" target="_blank" title="DiÄer">DiÄer</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary sub">
                                                <a class="name" href="/spor/tenis" target="_blank" title="Tenis">
                                                    Tenis                                                </a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/wta" target="_blank" title="WTA">WTA</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/atp" target="_blank" title="ATP">ATP</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/grand_slams" target="_blank" title="GRAND SLAM">GRAND SLAM</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/istanbul_cup" target="_blank" title="Ä°STANBUL CUP">Ä°STANBUL CUP</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/diger" target="_blank" title="DÄ°ÄER">DÄ°ÄER</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/spor/voleybol" target="_blank" title="Voleybol">
                                                    Voleybol                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/spor/basketbol/nba" target="_blank" title="NBA">
                                                    NBA                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/spor/2020-tokyo-olimpiyatlari" target="_blank" title="Tokyo 2020">
                                                    Tokyo 2020                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/spor/fikstur/1-turkiye-super-lig" target="_blank" title="FikstÃ¼r">
                                                    FikstÃ¼r                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/spor/yazarlar" target="_blank" title="Yazarlar">
                                                    Yazarlar                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/spor" target="_blank" title="Video">
                                                    Video                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                                            <li class="primary  sub">
                                                                            <a class="name " href="/magazin" target="_blank" title="Magazin">
                                            Magazin                                        </a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary ">
                                                <a class="name" href="https://htkulup.haberturk.com/" target="_blank" title="HT KulÃ¼p">
                                                    <img src=https://im.haberturk.com/assets/images/v4/brand/htkulup.svg style="height:25px">                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="https://hthayat.haberturk.com/" target="_blank" title="Moda">
                                                    Moda                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/magazin/televizyon" target="_blank" title="Televizyon">
                                                    Televizyon                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/magazin/dunyadan" target="_blank" title="DÃ¼nyadan">
                                                    DÃ¼nyadan                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/magazin/cemiyet-hayati" target="_blank" title="Cemiyet HayatÄ±">
                                                    Cemiyet HayatÄ±                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/galeri/magazin" target="_blank" title="Galeri">
                                                    Galeri                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/magazin/roportajlar" target="_blank" title="RÃ¶portajlar">
                                                    RÃ¶portajlar                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/magazin/muzik" target="_blank" title="MÃ¼zik">
                                                    MÃ¼zik                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                                                                                                                                                                                    <li class="primary  ">
                                                                            <a class="name " href="https://hthayat.haberturk.com/" target="_blank" title="KadÄ±n">
                                            KadÄ±n                                        </a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                                            <li class="primary  sub">
                                                                            <a class="name " href="/saglik" target="_blank" title="SaÄlÄ±k">
                                            SaÄlÄ±k                                        </a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary ">
                                                <a class="name" href="/saglik/genel-saglik" target="_blank" title="Genel SaÄlÄ±k">
                                                    Genel SaÄlÄ±k                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/saglik/anne-ve-cocuk" target="_blank" title="Anne Ve Ãocuk">
                                                    Anne Ve Ãocuk                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/saglik/kalp-sagligi" target="_blank" title="Kalp SaÄlÄ±ÄÄ±">
                                                    Kalp SaÄlÄ±ÄÄ±                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/saglik/saglikli-beslenme" target="_blank" title="Beslenme">
                                                    Beslenme                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/saglik/kanser" target="_blank" title="Kanser">
                                                    Kanser                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/saglik/cinsel-saglik" target="_blank" title="Cinsel SaÄlÄ±k">
                                                    Cinsel SaÄlÄ±k                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/saglik/estetik-cerrahi" target="_blank" title="Estetik Cerrahi">
                                                    Estetik Cerrahi                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                                            <li class="primary  ">
                                                                            <a class="name " href="/htyazarlar" target="_blank" title="Yazarlar">
                                            Yazarlar                                        </a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                                                                                                                                                                                    <li class="primary  sub">
                                                                            <a class="name " href="/ekonomi/teknoloji" target="_blank" title="Teknoloji">
                                            Teknoloji                                        </a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/teknoloji/internet" target="_blank" title="Ä°nternet">
                                                    Ä°nternet                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/teknoloji/sosyal-medya" target="_blank" title="Sosyal Medya">
                                                    Sosyal Medya                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/teknoloji/mobil" target="_blank" title="Mobil">
                                                    Mobil                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/teknoloji/bilisim" target="_blank" title="BiliÅim">
                                                    BiliÅim                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/teknoloji/cihaz" target="_blank" title="Cihaz">
                                                    Cihaz                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/teknoloji/oyun" target="_blank" title="Oyun">
                                                    Oyun                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/ekonomi/teknoloji/uygulama" target="_blank" title="Uygulama">
                                                    Uygulama                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                            <li class="primary  ">
                                                                            <a class="name thy" href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24031&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank" title="Gastro">
                                            Gastro                                            <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://adsp.haberturk.com/advertpro/servlet/view/banner/image/media?mid=24031&pid=0&position=1&date=(date)&uuid=(email)" hspace="0" vspace="0" border="0" alt="Click Here!">
                                        </a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                                            <li class="primary  sub">
                                                                            <a class="name " href="/video" target="_blank" title="Video">
                                            Video                                        </a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/haber" target="_blank" title="Haber">
                                                    Haber                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/ekonomi" target="_blank" title="Ekonomi">
                                                    Ekonomi                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/spor" target="_blank" title="Spor">
                                                    Spor                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/magazin" target="_blank" title="Magazin">
                                                    Magazin                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/sinema" target="_blank" title="Sinema">
                                                    Sinema                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/eglence" target="_blank" title="EÄlence">
                                                    EÄlence                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/saglik" target="_blank" title="SaÄlÄ±k">
                                                    SaÄlÄ±k                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/tv" target="_blank" title="TV">
                                                    TV                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary ">
                                                <a class="name" href="/video/panorama" target="_blank" title="Panorama">
                                                    Panorama                                                </a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </ul>
            </div>
        </div>
        <div class="search position">
            <div class="wrapper">
                <input type="text" id="headerSearchInput" placeholder="Haberturk'te ara...">
                <button type="button" id="headerSearchButton">Ara</button>
            </div>
        </div>
    </div>

    <div class="mega-menu type1">
        <div class="content">
            <div class="first">
                <div class="head position">
                    <div class="login">
                        <a href="javascript:void();" title="Ãye GiriÅi" class="member-login-btn">
                            <span class="icon"></span>
                            <span class="title">Ãye GiriÅi</span>
                        </a>
                        <a href="/uyelik/bilgi_guncelle" title="HesabÄ±m" class="my-account-btn">
                            <span class="icon"></span>
                            <span class="title">HesabÄ±m</span>
                        </a>
                    </div>
                    <span class="close">
                        <span class="icon"></span>
                    </span>
                </div>
                <div class="menu-search position">
                    <input type="text" id="megaMenuSearchInput" placeholder="HabertÃ¼rk'te Ara...">
                    <button type="button" id="megaMenuSearchButton">Ara</button>
                </div>
            </div>
            <div class="menu-list">
                <ul class="primary">
                                                                            <li class="primary ">
                                                                            <a class="name " href="/sondakika" target="_blank" title="Son Dakika">Son Dakika</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/canliyayin" target="_blank" title="CanlÄ± YayÄ±n">CanlÄ± YayÄ±n</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="/gundem" target="_blank" title="GÃ¼ndem">GÃ¼ndem</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/politika" target="_blank" title="Politika">Politika</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/ucuncu-sayfa" target="_blank" title="3.Sayfa">3.Sayfa</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/egitim" target="_blank" title="EÄitim">EÄitim</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/guvenlik" target="_blank" title="GÃ¼venlik">GÃ¼venlik</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/inanc" target="_blank" title="Ä°nanÃ§">Ä°nanÃ§</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/ankara" target="_blank" title="Ankara">Ankara</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/istanbul" target="_blank" title="Ä°stanbul">Ä°stanbul</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/ege" target="_blank" title="Ege">Ege</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/cevre" target="_blank" title="Ãevre">Ãevre</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/gundem/vefat" target="_blank" title="Vefat">Vefat</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="/ekonomi" target="_blank" title="Ekonomi">Ekonomi</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/altin" target="_blank" title="AltÄ±n">AltÄ±n</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/doviz" target="_blank" title="DÃ¶viz">DÃ¶viz</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/borsa" target="_blank" title="Borsa">Borsa</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/kripto-para" target="_blank" title="Kripto Para">Kripto Para</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/is-yasam" target="_blank" title="Ä°Å-YaÅam">Ä°Å-YaÅam</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/otomobil" target="_blank" title="Otomobil">Otomobil</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/turizm" target="_blank" title="Turizm">Turizm</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/enerji" target="_blank" title="Enerji">Enerji</a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/savunma-sanayi" target="_blank" title="Savunma Sanayi">Savunma Sanayi</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/emlak" target="_blank" title="Emlak">Emlak</a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/projeler/cekmekoy" target="_blank" title="Projeler">Projeler</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/girisimcilik" target="_blank" title="GiriÅimcilik">GiriÅimcilik</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/sigorta" target="_blank" title="Sigorta">Sigorta</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/sosyal-guvenlik" target="_blank" title="Sosyal GÃ¼venlik">Sosyal GÃ¼venlik</a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/genel-saglik-sigortasi" target="_blank" title="Genel SaÄlÄ±k SigortasÄ±">Genel SaÄlÄ±k SigortasÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/emekli" target="_blank" title="Emekli">Emekli</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/memur" target="_blank" title="Memur">Memur</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/isci" target="_blank" title="Ä°ÅÃ§i">Ä°ÅÃ§i</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/esnaf" target="_blank" title="Esnaf">Esnaf</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/isveren" target="_blank" title="Ä°Åveren">Ä°Åveren</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/issiz" target="_blank" title="Ä°Åsiz">Ä°Åsiz</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/yargi-kararlari" target="_blank" title="YargÄ± KararlarÄ±">YargÄ± KararlarÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/personel-alimi" target="_blank" title="Personel AlÄ±mÄ±">Personel AlÄ±mÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/ekonomi/sosyal-guvenlik/soru-cevap" target="_blank" title="Soru Cevap">Soru Cevap</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/dunya" target="_blank" title="DÃ¼nya">DÃ¼nya</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="/spor" target="_blank" title="Spor">Spor</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/spor/futbol" target="_blank" title="Futbol">Futbol</a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/super_lig" target="_blank" title="SÃ¼per Lig">SÃ¼per Lig</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/sampiyonlar_ligi" target="_blank" title="Åampiyonlar Ligi">Åampiyonlar Ligi</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/turkiye_kupasi" target="_blank" title="TÃ¼rkiye KupasÄ±">TÃ¼rkiye KupasÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/avrupa_ligi" target="_blank" title="Avrupa Ligi">Avrupa Ligi</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/ispanya" target="_blank" title="Ä°spanya">Ä°spanya</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/ingiltere" target="_blank" title="Ä°ngiltere">Ä°ngiltere</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/almanya" target="_blank" title="Almanya">Almanya</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/italya" target="_blank" title="Ä°talya">Ä°talya</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/fransa" target="_blank" title="Fransa">Fransa</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/1_lig" target="_blank" title="TFF 1. Lig">TFF 1. Lig</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/tff_2_lig" target="_blank" title="TFF 2. Lig">TFF 2. Lig</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/futbol/tff_3_lig" target="_blank" title="TFF 3. Lig">TFF 3. Lig</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/spor/basketbol/stbl" target="_blank" title="Basketbol">Basketbol</a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/tkbl" target="_blank" title="TBKL">TBKL</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/euroleague" target="_blank" title="Euro League">Euro League</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/eurocup" target="_blank" title="Euro Cup">Euro Cup</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/dunya_sampiyonasi" target="_blank" title="DÃ¼nya ÅampiyonasÄ±">DÃ¼nya ÅampiyonasÄ±</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/sampiyonlar_lig" target="_blank" title="Åampiyonlar Ligi">Åampiyonlar Ligi</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/kadinlar_euroleague" target="_blank" title="KadÄ±nlar Euro League">KadÄ±nlar Euro League</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/milli_takim" target="_blank" title="Milli TakÄ±m">Milli TakÄ±m</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/basketbol/diger" target="_blank" title="DiÄer">DiÄer</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/spor/tenis" target="_blank" title="Tenis">Tenis</a>
                                                <ul class="tertiary">
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/wta" target="_blank" title="WTA">WTA</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/atp" target="_blank" title="ATP">ATP</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/grand_slams" target="_blank" title="GRAND SLAM">GRAND SLAM</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/istanbul_cup" target="_blank" title="Ä°STANBUL CUP">Ä°STANBUL CUP</a>
                                                        </li>
                                                                                                            <li class="tertiary">
                                                            <a class="name" href="/spor/tenis/diger" target="_blank" title="DÄ°ÄER">DÄ°ÄER</a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/spor/voleybol" target="_blank" title="Voleybol">Voleybol</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/spor/basketbol/nba" target="_blank" title="NBA">NBA</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/spor/2020-tokyo-olimpiyatlari" target="_blank" title="Tokyo 2020">Tokyo 2020</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/spor/fikstur/1-turkiye-super-lig" target="_blank" title="FikstÃ¼r">FikstÃ¼r</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/spor/yazarlar" target="_blank" title="Yazarlar">Yazarlar</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/spor" target="_blank" title="Video">Video</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="/magazin" target="_blank" title="Magazin">Magazin</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="https://htkulup.haberturk.com/" target="_blank" title="HT KulÃ¼p">HT KulÃ¼p</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="https://hthayat.haberturk.com/" target="_blank" title="Moda">Moda</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/magazin/televizyon" target="_blank" title="Televizyon">Televizyon</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/magazin/dunyadan" target="_blank" title="DÃ¼nyadan">DÃ¼nyadan</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/magazin/cemiyet-hayati" target="_blank" title="Cemiyet HayatÄ±">Cemiyet HayatÄ±</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/magazin" target="_blank" title="Galeri">Galeri</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/magazin/roportajlar" target="_blank" title="RÃ¶portajlar">RÃ¶portajlar</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/magazin/muzik" target="_blank" title="MÃ¼zik">MÃ¼zik</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name akademi" href="/akademi" target="_blank" title="Soru BankasÄ±">Soru BankasÄ±</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name thy" href="/htgastro" target="_blank" title="Gastro">Gastro</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="https://hthayat.haberturk.com/" target="_blank" title="KadÄ±n">KadÄ±n</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="/saglik" target="_blank" title="SaÄlÄ±k">SaÄlÄ±k</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/saglik/genel-saglik" target="_blank" title="Genel SaÄlÄ±k">Genel SaÄlÄ±k</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/saglik/anne-ve-cocuk" target="_blank" title="Anne Ve Ãocuk">Anne Ve Ãocuk</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/saglik/kalp-sagligi" target="_blank" title="Kalp SaÄlÄ±ÄÄ±">Kalp SaÄlÄ±ÄÄ±</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/saglik/saglikli-beslenme" target="_blank" title="Beslenme">Beslenme</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/saglik/kanser" target="_blank" title="Kanser">Kanser</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/saglik/cinsel-saglik" target="_blank" title="Cinsel SaÄlÄ±k">Cinsel SaÄlÄ±k</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/saglik/estetik-cerrahi" target="_blank" title="Estetik Cerrahi">Estetik Cerrahi</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/htyazarlar" target="_blank" title="Yazarlar">Yazarlar</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/yasam" target="_blank" title="YaÅam">YaÅam</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/cocuk" target="_blank" title="Ãocuk">Ãocuk</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="/ekonomi/teknoloji" target="_blank" title="Teknoloji">Teknoloji</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/teknoloji/internet" target="_blank" title="Ä°nternet">Ä°nternet</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/teknoloji/sosyal-medya" target="_blank" title="Sosyal Medya">Sosyal Medya</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/teknoloji/mobil" target="_blank" title="Mobil">Mobil</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/teknoloji/bilisim" target="_blank" title="BiliÅim">BiliÅim</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/teknoloji/cihaz" target="_blank" title="Cihaz">Cihaz</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/teknoloji/oyun" target="_blank" title="Oyun">Oyun</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/ekonomi/teknoloji/uygulama" target="_blank" title="Uygulama">Uygulama</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/kultur-sanat" target="_blank" title="KÃ¼ltÃ¼r Sanat">KÃ¼ltÃ¼r Sanat</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/roportaj" target="_blank" title="RÃ¶portajlar">RÃ¶portajlar</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/haberturk-infografikleri-2608405" target="_blank" title="Grafik Haber">Grafik Haber</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="/galeri" target="_blank" title="Galeri">Galeri</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/gundem" target="_blank" title="GÃ¼ndem">GÃ¼ndem</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/ekonomi" target="_blank" title="Ekonomi">Ekonomi</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/spor" target="_blank" title="Spor">Spor</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/komedi" target="_blank" title="Komedi">Komedi</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/magazin" target="_blank" title="Magazin">Magazin</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/yasam" target="_blank" title="YaÅam">YaÅam</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/seyahat" target="_blank" title="Seyahat">Seyahat</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/teknoloji" target="_blank" title="Teknoloji">Teknoloji</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/galeri/diger" target="_blank" title="DiÄer">DiÄer</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                                                                <li class="primary sub">
                                                                            <a class="name " href="/video" target="_blank" title="Video">Video</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/haber" target="_blank" title="Haber">Haber</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/ekonomi" target="_blank" title="Ekonomi">Ekonomi</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/spor" target="_blank" title="Spor">Spor</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/magazin" target="_blank" title="Magazin">Magazin</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/sinema" target="_blank" title="Sinema">Sinema</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/eglence" target="_blank" title="EÄlence">EÄlence</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/saglik" target="_blank" title="SaÄlÄ±k">SaÄlÄ±k</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/tv" target="_blank" title="TV">TV</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/video/panorama" target="_blank" title="Panorama">Panorama</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="/yenimedya/akil-oyunlari" target="_blank" title="AkÄ±l OyunlarÄ±">AkÄ±l OyunlarÄ±</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/bulmaca" target="_blank" title="Bulmaca">Bulmaca</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/bulmaca/sudoku" target="_blank" title="Sudoku">Sudoku</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/bulmaca/cengel" target="_blank" title="Ãengel Bulmaca">Ãengel Bulmaca</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/yerel-haberler" target="_blank" title="Yerel Haberler">Yerel Haberler</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="#" target="_blank" title="Servisler">Servisler</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/nobetci-eczaneler" target="_blank" title="NÃ¶betÃ§i Eczaneler">NÃ¶betÃ§i Eczaneler</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/havadurumu" target="_blank" title="Hava Durumu">Hava Durumu</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/yol-durumu/istanbul" target="_blank" title="Yol Durumu">Yol Durumu</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/astroloji" target="_blank" title="Astroloji">Astroloji</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/secim" target="_blank" title="SeÃ§im SonuÃ§larÄ±">SeÃ§im SonuÃ§larÄ±</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/namaz-vakitleri" target="_blank" title="Namaz Vakitleri">Namaz Vakitleri</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/yemek-tarifleri" target="_blank" title="Yemek Tarifleri">Yemek Tarifleri</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/canliyayin" target="_blank" title="CanlÄ± YayÄ±n">CanlÄ± YayÄ±n</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/tv-rehberi" target="_blank" title="TV Rehberi">TV Rehberi</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/sans-oyunlari" target="_blank" title="Åans OyunlarÄ±">Åans OyunlarÄ±</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="#" target="_blank" title="Portallar">Portallar</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/yenimedya" target="_blank" title="Yeni Medya">Yeni Medya</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/habertuneli" target="_blank" title="Haber TÃ¼neli">Haber TÃ¼neli</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/dosya" target="_blank" title="Dosya Haber">Dosya Haber</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="http://htkulup.haberturk.com" target="_blank" title="HT KulÃ¼p">HT KulÃ¼p</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="https://hthayat.haberturk.com" target="_blank" title="HT Hayat">HT Hayat</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="secondary">
                                                <a class="name" href="/tv" target="_blank" title="Haberturk TV">Haberturk TV</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/hafta-sonu" target="_blank" title="Hafta Sonu">Hafta Sonu</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary sub">
                                                                            <a class="name " href="#" target="_blank" title="7x24">7x24</a>
                                                                        <ul class="secondary">
                                                                                    <li class="secondary">
                                                <a class="name" href="/7x24/yavuz-barlas" target="_blank" title="Yavuz Barlas">Yavuz Barlas</a>
                                                <ul class="tertiary">
                                                                                                    </ul>
                                            </li>
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/gundem/vefat" target="_blank" title="Vefat">Vefat</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                                                                    <li class="primary ">
                                                                            <a class="name " href="/kunye" target="_blank" title="KÃ¼nye">KÃ¼nye</a>
                                                                        <ul class="secondary">
                                                                            </ul>
                                </li>
                                                            </ul>
            </div>
            <div class="last">
                <div class="whatsapp-alert position">
                    <a href="https://wa.me/905362667969" target="_blank" title="">
                        <i class="icon-whatsapp">
                            <img src="https://im.haberturk.com/assets/images/common/icon/icon-whatsapp-white.svg" alt="">
                        </i>
                        <span class="wrapper">
                            <span>Whatsapp HattÄ±</span>
                            <span>0536 266 79 69</span>
                        </span>
                    </a>
                </div>
                <div class="social-list position">
                    <ul>
                        <li><a href="https://www.facebook.com/Haberturk" target="_blank" class="icon-facebook" title="HabertÃ¼rk Facebook"></a></li>
                        <li><a href="https://twitter.com/haberturk" target="_blank" class="icon-twitter" title="HabertÃ¼rk Twitter"></a></li>
                        <li><a href="https://www.instagram.com/haberturk" target="_blank" class="icon-instagram" title="HabertÃ¼rk Instagram"></a></li>
                        <li><a href="https://www.youtube.com/user/gucuozgurlugunde" target="_blank" class="icon-youtube" title="HabertÃ¼rk Youtube"></a></li>
                        <li><a href="https://flipboard.com/@HaberTurk" target="_blank" class="icon-flipboard" title="HabertÃ¼rk Flipboard"></a></li>
                    </ul>
                </div>
                <div class="app-list position">
                    <div class="info"> GÃ¼nlÃ¼k geliÅmeleri takip edebilmek iÃ§in habertÃ¼rk uygulamasÄ±nÄ± indirin</div>
                    <ul>
                        <li><a href="https://play.google.com/store/apps/details?id=cbg.android.haberturk&amp;hl=tr" target="_blank"><img src="https://im.haberturk.com/assets/images/mobile/app/google-play-logo.svg" alt="HabertÃ¼rk Android UygulamasÄ±"></a></li>
                        <li><a href="https://apps.apple.com/tr/app/haberturk/id341081552?l=tr" target="_blank"><img src="https://im.haberturk.com/assets/images/mobile/app/apple-appstore-logo.svg" alt="HabertÃ¼rk iPhone UygulamasÄ±"></a></li>
                        <li><a href="https://appgallery.cloud.huawei.com/ag/n/app/C101192597?locale=tr_TR&source=appshare&subsource=C101192597" target="_blank">
                                <img src="https://im.haberturk.com/assets/images/mobile/app/huawei-app-logo-dark.svg" alt="HabertÃ¼rk Huawei UygulamasÄ±">
                            </a></li>
                    </ul>
                </div>
                <div class="copyright position">
                    <span class="info">
                        Copyright Â© 2020 - TÃ¼m haklarÄ± saklÄ±dÄ±r. <br> HabertÃ¼rk Gazetecilik A.Å.
                    </span>
                </div>
            </div>
        </div>
    </div>
</header>    <!-- ALL CONTENT head-->
    <div class="containerSelector all-content category-hide">
        <div class="page-skin-content fixed"><div class="page-skin-left"><div id="zone_1276" zone-id="1276" class="no-init" zone-viewtype="banner"></div></div><script type="text/javascript">function renderPageSkinLeft() { if (!window.rightAdsIsPageskin) { cbgAds.RefreshZone(1276); }}</script>
<div class="page-skin-right"><div id="zone_1275" zone-id="1275" class="ads-zone" zone-viewtype="banner" onRenderEnded="renderPageSkinLeft();"><script type="text/javascript">cbgAds.AdsInline(1275);</script></div></div><div id="zone_1277" zone-id="1277" class="ads-zone page-skin-top" zone-viewtype="banner"><script type="text/javascript">cbgAds.AdsInline(1277);</script></div></div><script type="text/javascript">cbgAds.zoneAutoRefresh([1275, 1276]);</script><div id="zone_1279" class="ads-zone MustHead">
	<div class="admh_buttons" id="zone_1279_btn" style="position:relative;height:16px;overflow:hidden;margin-right:15px;display:none;">
		<a href="javascript:;" class="admh_open" id="zone_1279_btnopen" style="position:absolute;right:0;top:0;background:#000;color:#CCCCCC;text-decoration:none;font:10px/16px Arial,sans-serif;z-index:1;display:block;">
			<span style="display:inline-block;background:#666666;color:#cccccc;padding:0 3px;">â¼</span><span style="padding:0 3px;">ReklamÄ± AÃ§</span>
		</a>
	</div>
	<div id="zone_1279_mhc" style="min-height:250px;"></div>
</div>
<script type="text/javascript">cbgAds.initMasthead('zone_1279');</script>


<div class="box-row">
    <div class="box column-12 mb-10">
        <div class="box-row">
            <div class="widget-box-news type1" id="TopSlider">

                                <div class="box column-3 type-2 color-white">
                    <a  href="/imf-den-tarihi-karar-650-milyar-dolarlik-ozel-cekme-hakki-tahsisi-onaylandi-3151312-ekonomi" target="_blank" title="IMF'den 650 milyar dolarlÄ±k tarihi onay!" class="gtm-tracker" data-newsPosition="1" data-newsId="3151312" data-newsName="IMF\'den 650 milyar dolarlÄ±k tarihi onay!" data-newsVariant="slider-image" data-newsList="TopSlider" data-newsCategory="Ekonomi/Ä°Å-YaÅam">
                        <figure>
                            <div class="img img-16x9">
                                <img src="https://im.haberturk.com/2021/08/03/ver1627958846/3151312_300x169.jpg" alt="IMF'den 650 milyar dolarlÄ±k tarihi onay!">
                            </div>
                                                        <figcaption>
                                <span class="title">IMF'den 650 milyar dolarlÄ±k tarihi onay!</span>
                            </figcaption>
                                                    </figure>
                    </a>
                </div>
                                <div class="box column-3 type-2 color-white">
                    <a  href="/tsk-yangin-sondurme-ve-tahliye-calismalarina-destek-vermeyi-surduruyor-3151288" target="_blank" title="MSB: 400'den fazla MehmetÃ§ik alevlere mÃ¼dahale ediyor" class="gtm-tracker" data-newsPosition="2" data-newsId="3151288" data-newsName="MSB: 400\'den fazla MehmetÃ§ik alevlere mÃ¼dahale ediyor" data-newsVariant="slider-image" data-newsList="TopSlider" data-newsCategory="GÃ¼ndem/GÃ¼venlik">
                        <figure>
                            <div class="img img-16x9">
                                <img src="https://im.haberturk.com/2021/08/03/ver1627944749/3151288_300x169.jpg" alt="MSB: 400'den fazla MehmetÃ§ik alevlere mÃ¼dahale ediyor">
                            </div>
                                                        <figcaption>
                                <span class="title">MSB: 400'den fazla MehmetÃ§ik alevlere mÃ¼dahale ediyor</span>
                            </figcaption>
                                                    </figure>
                    </a>
                </div>
                                <div class="box column-3 type-2 color-white">
                    <a  href="/fatih-te-iki-cocugunu-rehin-alip-pencereden-rastgele-ates-acan-supheli-yakalandi-3151315" target="_blank" title="Ä°ki Ã§ocuÄunu rehin aldÄ±, pencereden rastgele ateÅ aÃ§tÄ±" class="gtm-tracker" data-newsPosition="3" data-newsId="3151315" data-newsName="Ä°ki Ã§ocuÄunu rehin aldÄ±, pencereden rastgele ateÅ aÃ§tÄ±" data-newsVariant="slider-image" data-newsList="TopSlider" data-newsCategory="GÃ¼ndem/3. Sayfa">
                        <figure>
                            <div class="img img-16x9">
                                <img src="https://im.haberturk.com/2021/08/03/ver1627960942/3151315_300x169.jpg" alt="Ä°ki Ã§ocuÄunu rehin aldÄ±, pencereden rastgele ateÅ aÃ§tÄ±">
                            </div>
                                                        <figcaption>
                                <span class="title">Ä°ki Ã§ocuÄunu rehin aldÄ±, pencereden rastgele ateÅ aÃ§tÄ±</span>
                            </figcaption>
                                                    </figure>
                    </a>
                </div>
                                <div class="box column-3 type-2 color-white">
                    <a  href="/marmaris-te-orman-yangininda-gorevli-azerbaycanli-itfaiyecilerin-turk-bayragi-duyarliligi-3151136" target="_blank" title="Azeri itfaiyecilerin TÃ¼rk bayraÄÄ± duyarlÄ±lÄ±ÄÄ±" class="gtm-tracker" data-newsPosition="4" data-newsId="3151136" data-newsName="Azeri itfaiyecilerin TÃ¼rk bayraÄÄ± duyarlÄ±lÄ±ÄÄ±" data-newsVariant="slider-image" data-newsList="TopSlider" data-newsCategory="GÃ¼ndem">
                        <figure>
                            <div class="img img-16x9">
                                <img src="https://im.haberturk.com/2021/08/02/ver1627932050/3151136_300x169.jpg" alt="Azeri itfaiyecilerin TÃ¼rk bayraÄÄ± duyarlÄ±lÄ±ÄÄ±">
                            </div>
                                                        <figcaption>
                                <span class="title">Azeri itfaiyecilerin TÃ¼rk bayraÄÄ± duyarlÄ±lÄ±ÄÄ±</span>
                            </figcaption>
                                                    </figure>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
</div>

<div class="mb-20" id="highlight-widgets-parent-div">

    <div class="widget-hottopics-min highlight-widgets-parent-div-type2" id="widget-hottopics-min">
        <div class="info">
            <a href="/son-dakika-haberleri" title="Son Dakika Haberler">
                <h1 class="title">SON DAKÄ°KA</h1>
            </a>
        </div>
        <div class="swiper-container slider">
            <div class="swiper-wrapper">
            </div>
            <div class="indicator type1 right horizontal">
                <div class="swiper-button-prev navigation"></div>
                <div class="swiper-button-next navigation"></div>
            </div>
        </div>
    </div>

    <div class="widget-highlights-min " id="widget-highlights-min">
        <div class="info">
            <h1 class="title" title="Son Dakika Haberler">SON DAKÄ°KA</h1>

        </div>
        <div class="swiper-container slider">
            <div class="swiper-wrapper">
            </div>
            <div class="indicator type1 right horizontal">
                <div class="swiper-button-prev navigation"></div>
                <div class="swiper-button-next navigation"></div>
            </div>
        </div>
    </div>
        <div class="weatherLayer">
        <div class="widget-weather-forecast-type2">
            <section class="weather-forecast-min-type2">
                <ul id="weatherIndex-type2">

                    <li>
                        <a class="gtm-tracker" data-newsVariant="anasayfa-havadurumu" href="/havadurumu/Turkiye-TR/Istanbul/LTSI" title="Ä°stanbul iÃ§in Hava Durumu">
                            <div class="img"><img class="icon" data-htsrc="https://im.haberturk.com/assets/images/havadurumu/1.png?v=1" alt="" src="https://im.haberturk.com/assets/images/v3/transparent.gif">
                            </div>
                            <span  class="degree">36Â°</span>
                            <span class="city">Istanbul<small>Az Bulutlu</small></span>
                        </a>
                    </li>
                    <li>
                        <a class="gtm-tracker" data-newsVariant="anasayfa-havadurumu" href="/havadurumu/Turkiye-TR/Ankara/LTAD" title="Ankara iÃ§in Hava Durumu">
                            <div class="img"><img class="icon" data-htsrc="https://im.haberturk.com/assets/images/havadurumu/1.png?v=1" alt="" src="https://im.haberturk.com/assets/images/v3/transparent.gif">
                            </div>
                            <span class="degree">37Â°</span>
                            <span class="city">Ankara<small>Az Bulutlu</small></span>
                        </a>
                    </li>
                    <!-- <iframe style="display: none" src="https://adsp.haberturk.com/advertpro/servlet/view/banner/url/media?mid=23494&pid=0"></iframe>
                    <li class="sponsor-vestel">
                        <div class="sponsor-logo">
                            <a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=23683&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
                                <img src="https://im.haberturk.com/assets/images/brand-other/logo-vestel-black.svg" alt="Vestel" />
                            </a>
                        </div>
                    </li> -->
                </ul>
            </section>
        </div>
    </div>
</div>



<div class="box-row">
    <div class="box column-3 widget-small-slider-wrapper mb-0">
    <div class="box column-12">
        <div class="box-row" id="MansetSolYani">

                            <div class="widget-small-slider type1 slide-type1 mb-20">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">

                                                            <div class="swiper-slide item color-white">
                                    <a href="/ab-turkiye-delegasyonu-ndan-demet-akalin-a-cevap-3151103" title="AB TÃ¼rkiye Delegasyonu'ndan Demet AkalÄ±n'a cevap" target="_blank" class="gtm-tracker" data-newsPosition="0" data-newsId="3151103" data-newsName="AB TÃ¼rkiye Delegasyonu\'ndan Demet AkalÄ±n\'a cevap" data-newsVariant="box-news" data-newsList="MansetSolYani" data-newsCategory="GÃ¼ndem">
                                        <div class="img">
                                                                                            <img src="https://im.haberturk.com/2021/08/02/ver1627928697/3151103_300x300.jpg" alt="AB TÃ¼rkiye Delegasyonu'ndan Demet AkalÄ±n'a cevap">
                                                                                    </div>
                                        <figure>
                                            <figcaption>
                                                <span class="title">AB TÃ¼rkiye Delegasyonu'ndan Demet AkalÄ±n'a cevap</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                            <div class="swiper-slide item color-yellow">
                                    <a href="/help-turkey-turkiye-ye-yardim-et-etiketi-unlu-isimleri-ikiye-boldu-magazin-haberleri-3150930-magazin" title="&quot;CayÄ±r cayÄ±r yanan canlarÄ± izlemek zorunuza gitsin!&quot;" target="_blank" class="gtm-tracker" data-newsPosition="1" data-newsId="3150930" data-newsName="&quot;CayÄ±r cayÄ±r yanan canlarÄ± izlemek zorunuza gitsin!&quot;" data-newsVariant="box-news" data-newsList="MansetSolYani" data-newsCategory="Magazin">
                                        <div class="img">
                                                                                            <img class="swiper-lazy" src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/2021/08/02/ver1627918618/3150930_300x300.jpg" alt="&quot;CayÄ±r cayÄ±r yanan canlarÄ± izlemek zorunuza gitsin!&quot;">
                                                                                    </div>
                                        <figure>
                                            <figcaption>
                                                <span class="title">"CayÄ±r cayÄ±r yanan canlarÄ± izlemek zorunuza gitsin!"</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                            <div class="swiper-slide item color-white">
                                    <a href="/video/spor/izle/macaristan-fatihi-esteban-ocon--damali-bayrak/731107" title="Macaristan fatihi Esteban Ocon! " target="_blank" class="gtm-tracker" data-newsPosition="2" data-newsId="3151001" data-newsName="Macaristan fatihi Esteban Ocon!" data-newsVariant="box-news" data-newsList="MansetSolYani" data-newsCategory="Spor/Motor SporlarÄ±/Formula 1">
                                        <div class="img">
                                                                                            <img class="swiper-lazy" src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/2021/08/02/ver1627919577/3151001_300x300.jpg" alt="Macaristan fatihi Esteban Ocon! ">
                                                                                    </div>
                                        <figure>
                                            <figcaption>
                                                <span class="title">Macaristan fatihi Esteban Ocon! </span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            
                        </div>
                        <div class="pagination-type1 pagination swiper-pagination"></div>
                        <div class="navigation-type1 prev swiper-button-prev"></div>
                        <div class="navigation-type1 next swiper-button-next"></div>
                    </div>
                </div>

                <script>
                    head.ready("layout", function () {
                        var swiper = new Swiper('.widget-small-slider.type1.slide-type1  .swiper-container', {
                            navigation: {
                                nextEl: '.widget-small-slider.type1.slide-type1 .swiper-button-next',
                                prevEl: '.widget-small-slider.type1.slide-type1 .swiper-button-prev',
                            },
                            loop: true,
                            preloadImages: false,
                            slidesPerView: 1,
                            //paginationClickable: true,
                            mousewheelControl: true,
                            lazy: {
                                loadPrevNext: true,
                                loadPrevNextAmount: 2
                            },
                            pagination: {
                                el: '.widget-small-slider.type1.slide-type1 .swiper-pagination',
                                clickable: true,
                            }
                        });
                    });
                </script>
            
                            <div class="widget-box-news type1">

                                            <a href="https://hthayat.haberturk.com/gunluk-burc-yorumlari-3-agustos-2021-sali-1077282" target="_blank" title="GÃ¼nlÃ¼k burÃ§ yorumlarÄ±!" class="gtm-tracker color-white" data-newsPosition="3" data-newsId="3151316" data-newsName="GÃ¼nlÃ¼k burÃ§ yorumlarÄ±!" data-newsVariant="box-news" data-newsList="MansetSolYani" data-newsCategory="YaÅam/Astroloji">
                            <figure>
                                <div class="img img-16x9">
                                    <img src="https://im.haberturk.com/2021/08/03/ver1627963530/3151316_300x169.jpg" alt="GÃ¼nlÃ¼k burÃ§ yorumlarÄ±!">
                                </div>
                                <figcaption>
                                    <span class="title">GÃ¼nlÃ¼k burÃ§ yorumlarÄ±!</span>
                                </figcaption>
                            </figure>
                        </a>
                                            <a href="/video/saglik/izle/hangi-yag-daha-saglikli/730675" target="_blank" title="Hangi yaÄ daha saÄlÄ±klÄ±?	" class="gtm-tracker color-white" data-newsPosition="4" data-newsId="3150847" data-newsName="Hangi yaÄ daha saÄlÄ±klÄ±?" data-newsVariant="box-news" data-newsList="MansetSolYani" data-newsCategory="SaÄlÄ±k/SaÄlÄ±klÄ± Beslenme">
                            <figure>
                                <div class="img img-16x9">
                                    <img src="https://im.haberturk.com/2021/08/02/ver1627911194/3150847_300x169.jpg" alt="Hangi yaÄ daha saÄlÄ±klÄ±?	">
                                </div>
                                <figcaption>
                                    <span class="title">Hangi yaÄ daha saÄlÄ±klÄ±?	</span>
                                </figcaption>
                            </figure>
                        </a>
                    
                </div>
            

        </div>
    </div>
</div><div class="box column-6 mb-0">
    <div class="box-row">
        <div class="box column-12">

            <div class="section featured featuredBlock" id="MansetBlock">
                <div class="widget-main-slider-new type1" id="MainSlider">

                    <div class="swiper-container slider" id="mainSlider1">
                        <div class="swiper-wrapper">
                                                                                            <div class="swiper-slide item  color-white" data-url="/turkiye-yaniyor-son-dakika-yanginlarda-7-nci-gun-iste-son-gelismeler-3151324">
                                    <a href="/turkiye-yaniyor-son-dakika-yanginlarda-7-nci-gun-iste-son-gelismeler-3151324" target="_blank" title="TÃ¼rkiye yanÄ±yor! YangÄ±nlarda 7'nci gÃ¼n" class="gtm-tracker MainSliderLink" data-newsPosition="1" data-newsId="3151324" data-newsName="TÃ¼rkiye yanÄ±yor! YangÄ±nlarda 7\'nci gÃ¼n" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="GÃ¼ndem" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img src="https://im.haberturk.com/2021/08/03/ver1627967279/3151324_640x640.jpg" alt="TÃ¼rkiye yanÄ±yor! YangÄ±nlarda 7nci gÃ¼n" class="main-img-first">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/meteoroloji-den-son-dakika-karadeniz-icin-saganak-akdeniz-ve-ege-icin-kuvvetli-ruzgar-uyarisi-hava-durumu-3151318">
                                    <a href="/meteoroloji-den-son-dakika-karadeniz-icin-saganak-akdeniz-ve-ege-icin-kuvvetli-ruzgar-uyarisi-hava-durumu-3151318" target="_blank" title="Karadeniz iÃ§in saÄanak, Akdeniz ve Ege iÃ§in kuvvetli rÃ¼zgar uyarÄ±sÄ±" class="gtm-tracker MainSliderLink" data-newsPosition="2" data-newsId="3151318" data-newsName="Karadeniz iÃ§in saÄanak, Akdeniz ve Ege iÃ§in kuvvetli rÃ¼zgar uyarÄ±sÄ±" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="GÃ¼ndem/Hava Durumu"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img src="https://im.haberturk.com/2021/08/03/ver1627967393/3151318_640x640.jpg" alt="Karadeniz iÃ§in saÄanak, Akdeniz ve Ege iÃ§in kuvvetli rÃ¼zgar uyarÄ±sÄ±" class="main-img-first">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/orman-yanginlari-neden-artiyor-hangi-yikici-sonuclari-beraberinde-getiriyor-3150874">
                                    <a href="/orman-yanginlari-neden-artiyor-hangi-yikici-sonuclari-beraberinde-getiriyor-3150874" target="_blank" title="DÃ¼nya genelinde orman yangÄ±nlarÄ± neden artÄ±yor?" class="gtm-tracker MainSliderLink" data-newsPosition="3" data-newsId="3150874" data-newsName="DÃ¼nya genelinde orman yangÄ±nlarÄ± neden artÄ±yor?" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="BBC/DÃ¼nya"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627967780/3150874_640x640.jpg" alt="DÃ¼nya genelinde orman yangÄ±nlarÄ± neden artÄ±yor?" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/manavgat-ta-havaalanina-giden-otobus-takla-atti-3-olu-5-yarali-3151005">
                                    <a href="/manavgat-ta-havaalanina-giden-otobus-takla-atti-3-olu-5-yarali-3151005" target="_blank" title="Manavgat'ta feci kaza! ÃlÃ¼ler ve yaralÄ±lar var" class="gtm-tracker MainSliderLink" data-newsPosition="4" data-newsId="3151005" data-newsName="Manavgat\'ta feci kaza! ÃlÃ¼ler ve yaralÄ±lar var" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="GÃ¼ndem"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627930254/3151005_640x640.jpg" alt="Manavgatta feci kaza! ÃlÃ¼ler ve yaralÄ±lar var" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-yellow" data-url="/5-puanlik-prim-indiriminde-yeni-donem-3150786-ekonomi">
                                    <a href="/5-puanlik-prim-indiriminde-yeni-donem-3150786-ekonomi" target="_blank" title="5 puanlÄ±k prim indiriminde yeni dÃ¶nem" class="gtm-tracker MainSliderLink" data-newsPosition="5" data-newsId="3150786" data-newsName="5 puanlÄ±k prim indiriminde yeni dÃ¶nem" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="Ekonomi/Sosyal GÃ¼venlik/Ä°Åveren"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627966974/3150786_640x640.jpg" alt="5 puanlÄ±k prim indiriminde yeni dÃ¶nem" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/57-milyonluk-tefeci-vurgunu-gozaltilar-var-3151325">
                                    <a href="/57-milyonluk-tefeci-vurgunu-gozaltilar-var-3151325" target="_blank" title="5.7 milyonluk tefeci vurgunu! GÃ¶zaltÄ±lar var" class="gtm-tracker MainSliderLink" data-newsPosition="6" data-newsId="3151325" data-newsName="5.7 milyonluk tefeci vurgunu! GÃ¶zaltÄ±lar var" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="GÃ¼ndem/3. Sayfa"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/03/ver1627967457/3151325_640x640.jpg" alt="5.7 milyonluk tefeci vurgunu! GÃ¶zaltÄ±lar var" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/universiteli-azra-5-gundur-haber-yok-3150403">
                                    <a href="/universiteli-azra-5-gundur-haber-yok-3150403" target="_blank" title="Ãniversiteli Azra vahÅete kurban gitmiÅ!" class="gtm-tracker MainSliderLink" data-newsPosition="7" data-newsId="3150403" data-newsName="Ãniversiteli Azra vahÅete kurban gitmiÅ!" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="GÃ¼ndem/3. Sayfa"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627922012/3150403_640x640.jpg" alt="Ãniversiteli Azra vahÅete kurban gitmiÅ!" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/son-dakika-cumhurbaskani-erdogan-tunus-cumhurbaskani-ile-telefonda-gorustu-3151128">
                                    <a href="/son-dakika-cumhurbaskani-erdogan-tunus-cumhurbaskani-ile-telefonda-gorustu-3151128" target="_blank" title="CumhurbaÅkanÄ± ErdoÄan, Tunus CumhurbaÅkanÄ± ile gÃ¶rÃ¼ÅtÃ¼" class="gtm-tracker MainSliderLink" data-newsPosition="8" data-newsId="3151128" data-newsName="CumhurbaÅkanÄ± ErdoÄan, Tunus CumhurbaÅkanÄ± ile gÃ¶rÃ¼ÅtÃ¼" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="DÃ¼nya"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627945043/3151128_640x640.jpg" alt="CumhurbaÅkanÄ± ErdoÄan, Tunus CumhurbaÅkanÄ± ile gÃ¶rÃ¼ÅtÃ¼" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-yellow" data-url="/van-da-bulunan-goktasi-uluslararasi-meteorit-veri-bulteni-ne-islendi-3150790">
                                    <a href="/van-da-bulunan-goktasi-uluslararasi-meteorit-veri-bulteni-ne-islendi-3150790" target="_blank" title="Piknik yaparken fark etti, kayÄ±tlara geÃ§ti" class="gtm-tracker MainSliderLink" data-newsPosition="9" data-newsId="3150790" data-newsName="Piknik yaparken fark etti, kayÄ±tlara geÃ§ti" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="YaÅam"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627915904/3150790_640x640.jpg" alt="Piknik yaparken fark etti, kayÄ±tlara geÃ§ti" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-yellow" data-url="/berna-lacin-ile-gulben-ergen-arasindaki-roma-yi-yakarim-polemigi-magazin-haberleri-3150308-magazin">
                                    <a href="/berna-lacin-ile-gulben-ergen-arasindaki-roma-yi-yakarim-polemigi-magazin-haberleri-3150308-magazin" target="_blank" title="&quot;Roma'yÄ± yakarÄ±m!&quot; polemiÄi" class="gtm-tracker MainSliderLink" data-newsPosition="10" data-newsId="3150308" data-newsName="&quot;Roma\'yÄ± yakarÄ±m!&quot; polemiÄi" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="Magazin"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627889277/3150308_640x640.jpg" alt="RomayÄ± yakarÄ±m! polemiÄi" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-yellow" data-url="/sahan-gokbakar-duyurdu-su-anda-bu-yapilan-cok-onemli-magazin-haberleri-3150799-magazin">
                                    <a href="/sahan-gokbakar-duyurdu-su-anda-bu-yapilan-cok-onemli-magazin-haberleri-3150799-magazin" target="_blank" title="&quot;Åu anda bu yapÄ±lan Ã§ok Ã¶nemli!&quot;" class="gtm-tracker MainSliderLink" data-newsPosition="11" data-newsId="3150799" data-newsName="&quot;Åu anda bu yapÄ±lan Ã§ok Ã¶nemli!&quot;" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="Magazin"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627914724/3150799_640x640.jpg" alt="Åu anda bu yapÄ±lan Ã§ok Ã¶nemli!" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/azra-ya-kahrolurken-bir-kayip-haberi-daha-haberler-3150851">
                                    <a href="/azra-ya-kahrolurken-bir-kayip-haberi-daha-haberler-3150851" target="_blank" title="Azra'ya kahrolurken bir kayÄ±p haberi daha!" class="gtm-tracker MainSliderLink" data-newsPosition="12" data-newsId="3150851" data-newsName="Azra\'ya kahrolurken bir kayÄ±p haberi daha!" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="GÃ¼ndem/3. Sayfa"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627927927/3150851_640x640.jpg" alt="Azraya kahrolurken bir kayÄ±p haberi daha!" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/canli-yayinda-alevler-buyudu-haberler-3150913">
                                    <a href="/canli-yayinda-alevler-buyudu-haberler-3150913" target="_blank" title="CanlÄ± yayÄ±nda alevler bÃ¼yÃ¼dÃ¼! " class="gtm-tracker MainSliderLink" data-newsPosition="13" data-newsId="3150913" data-newsName="CanlÄ± yayÄ±nda alevler bÃ¼yÃ¼dÃ¼!" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="GÃ¼ndem/3. Sayfa"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627927380/3150913_640x640.jpg" alt="CanlÄ± yayÄ±nda alevler bÃ¼yÃ¼dÃ¼! " src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/son-dakika-koronavirus-salgininda-yeni-vaka-sayisi-3150992">
                                    <a href="/son-dakika-koronavirus-salgininda-yeni-vaka-sayisi-3150992" target="_blank" title="Yeni gÃ¼nlÃ¼k vaka sayÄ±sÄ± aÃ§Ä±klandÄ±" class="gtm-tracker MainSliderLink" data-newsPosition="14" data-newsId="3150992" data-newsName="Yeni gÃ¼nlÃ¼k vaka sayÄ±sÄ± aÃ§Ä±klandÄ±" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="SaÄlÄ±k"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627927262/3150992_640x640.jpg" alt="Yeni gÃ¼nlÃ¼k vaka sayÄ±sÄ± aÃ§Ä±klandÄ±" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  " data-url="/yazarlar/kemal-ozturk/3150487-konya-katliami-irkci-saldiri-mi-aileler-arasinda-husumet-mi">
                                    <a href="/yazarlar/kemal-ozturk/3150487-konya-katliami-irkci-saldiri-mi-aileler-arasinda-husumet-mi" target="_blank" title="Konya katliamÄ±â¦  IrkÃ§Ä± saldÄ±rÄ± mÄ±, aileler arasÄ±nda husumet mi?" class="gtm-tracker MainSliderLink" data-newsPosition="15" data-newsId="3150487" data-newsName="Kemal ÃztÃ¼rk" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="Yazarlar"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627896724/3150487_640x640.jpg" alt="Konya katliamÄ±â¦  IrkÃ§Ä± saldÄ±rÄ± mÄ±, aileler arasÄ±nda husumet mi?" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/galatasaray-aliou-dieng-transferi-icin-teklif-yapti-3151206-spor">
                                    <a href="/galatasaray-aliou-dieng-transferi-icin-teklif-yapti-3151206-spor" target="_blank" title="Galatasaray'da sÄ±cak geliÅme!" class="gtm-tracker MainSliderLink" data-newsPosition="16" data-newsId="3151206" data-newsName="Galatasaray\'da sÄ±cak geliÅme!" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Galatasaray"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627934286/3151206_640x640.jpg" alt="Galatasarayda sÄ±cak geliÅme!" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/ankara-da-nallihan-kus-cenneti-nde-cikan-yangin-kontral-altina-alindi-3151100">
                                    <a href="/ankara-da-nallihan-kus-cenneti-nde-cikan-yangin-kontral-altina-alindi-3151100" target="_blank" title="NallÄ±han KuÅ Cenneti'ndeki yangÄ±n kontrol altÄ±nda" class="gtm-tracker MainSliderLink" data-newsPosition="17" data-newsId="3151100" data-newsName="NallÄ±han KuÅ Cenneti\'ndeki yangÄ±n kontrol altÄ±nda" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="GÃ¼ndem/3. Sayfa"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627930538/3151100_640x640.jpg" alt="NallÄ±han KuÅ Cennetindeki yangÄ±n kontrol altÄ±nda" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/son-dakika-haberi-galatasaray-ve-fenerbahce-nin-rakipleri-belli-oldu-3150656-spor">
                                    <a href="/son-dakika-haberi-galatasaray-ve-fenerbahce-nin-rakipleri-belli-oldu-3150656-spor" target="_blank" title="Galatasaray ve FenerbahÃ§e'nin rakipleri belli oldu" class="gtm-tracker MainSliderLink" data-newsPosition="18" data-newsId="3150656" data-newsName="Galatasaray ve FenerbahÃ§e\'nin rakipleri belli oldu" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Avrupa Ligi/Galatasaray/FenerbahÃ§e"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627907122/3150656_640x640.jpg" alt="Galatasaray ve FenerbahÃ§enin rakipleri belli oldu" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-yellow" data-url="/son-dakika-haberi-bakan-bilgin-den-memur-zammi-aciklamasi-3150466-ekonomi">
                                    <a href="/son-dakika-haberi-bakan-bilgin-den-memur-zammi-aciklamasi-3150466-ekonomi" target="_blank" title="Bakan Bilgin'den memur zammÄ± aÃ§Ä±klamasÄ±" class="gtm-tracker MainSliderLink" data-newsPosition="19" data-newsId="3150466" data-newsName="Bakan Bilgin\'den memur zammÄ± aÃ§Ä±klamasÄ±" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="Ekonomi/Sosyal GÃ¼venlik/Memur"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627909404/3150466_640x640.jpg" alt="Bakan Bilginden memur zammÄ± aÃ§Ä±klamasÄ±" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                                                            <div class="swiper-slide item  color-white" data-url="/son-dakika-haberi-yasemin-adar-bronz-madalya-kazandi-3150694-spor">
                                    <a href="/son-dakika-haberi-yasemin-adar-bronz-madalya-kazandi-3150694-spor" target="_blank" title="Yasemin Adar'dan tarihi madalya!" class="gtm-tracker MainSliderLink" data-newsPosition="20" data-newsId="3150694" data-newsName="Yasemin Adar\'dan tarihi madalya!" data-newsVariant="Slider-image" data-newsList="MainSlider" data-newsCategory="Spor/2020 Tokyo OlimpiyatlarÄ±"  data-newscollect="1" >
                                        <figure>
                                            <div class="img">
                                                                                                    <img data-src="https://im.haberturk.com/2021/08/02/ver1627909093/3150694_640x640.jpg" alt="Yasemin Adardan tarihi madalya!" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                                                                            </div>
                                            <figcaption>
                                                <span class="title"></span>
                                                                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                            
                            <!-- <div class="swiper-slide" data-url="/kesfet">
                                <a href="/kesfet" target="_blank"
                                   title="KeÅfet" class="gtm-tracker" data-newsposition="21"
                                   data-newsid="" data-newsname="KeÅfet"
                                   data-newsvariant="Slider-image" data-newslist="MainSlider"
                                   data-newscategory="" data-newscollect="1">
                                    <figure>
                                        <div class="img">
                                            <img data-src="https://im.haberturk.com/assets/images/tummansetler_new.jpg?v=3977"
                                                 alt="KeÅfet"
                                                 src="https://im.haberturk.com/assets/images/v3/transparent.gif"
                                                 class="main-img swiper-lazy">
                                        </div>
                                    </figure>
                                </a>
                            </div> -->

                            <div class="swiper-slide item special" data-url="/tummansetler">
                                <a href="/tummansetler" target="_blank" title="TÃ¼m ManÅetler" class="gtm-tracker" data-newsposition="21" data-newsid="999992" data-newsname="TÃ¼m ManÅetler" data-newsvariant="Slider-image" data-newslist="MainSlider" data-newscategory="" data-newscollect="1">
                                    <figure>
                                        <div class="img">
                                            <img data-src="https://im.haberturk.com/assets/images/tumMansetler_desktop.jpg?v=1627970700" alt="TÃ¼m ManÅetler" src="https://im.haberturk.com/assets/images/v3/transparent.gif" class="main-img swiper-lazy">
                                        </div>
                                    </figure>
                                </a>
                            </div>

                        </div>
                        <div class="navigation-type1 prev swiper-button-prev"></div>
                        <div class="navigation-type1 next swiper-button-next"></div>
                        <div class="pagination-type1 swiper-pagination"></div>
                    </div>
                    <script>
                        head.ready("layout", function() {
                            var player = false;
                            
                            var swiper = new Swiper('.widget-main-slider-new .slider', {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                loop: true,
                                navigation: {
                                    nextEl: '.widget-main-slider-new .swiper-button-next',
                                    prevEl: '.widget-main-slider-new .swiper-button-prev',
                                },
                                lazy: {
                                    loadPrevNext: true,
                                    loadPrevNextAmount: 2
                                },
                                on: {
                                    init: function() {
                                        var swiper = this;
                                        var slideHover = function() {
                                            if (!swiper.pagination.bullets || swiper.pagination.bullets.length === 0) {
                                                return setTimeout(slideHover, 200);
                                            }
                                            $(swiper.pagination.bullets).on("mouseover", function() {
                                                swiper.slideTo($(this).attr("data-id"));
                                            });
                                        };
                                        setTimeout(slideHover, 50);
                                    },
                                    slideChange: function() {
                                        var slideLink = this.slides[this.activeIndex].querySelector("a");
                                        slideLink.removeAttribute("data-newscollect");
                                        HTGlobal.GtmTracker.CollectImpression();
                                        HTGlobal.GtmTracker.PushImpression();
                                        if (player) {
                                            player.pause();
                                        }
                                    }
                                },
                                pagination: {
                                    el: '.widget-main-slider-new .swiper-pagination',
                                    renderBullet: function(index, className) {
                                        var realIndex = index;
                                        if (this.params.loop) {
                                            realIndex = index + 1;
                                            realIndex = realIndex > (this.slides.length - 3) ?
                                                0 : realIndex;
                                        }
                                        var slideLink = this.slides[realIndex].querySelector("a");
                                        var buttonHtml = '<span data-id="' + (index + 1) + '" class="' + className + '"></span>';
                                        if (slideLink) {
                                            buttonHtml = '<a href="' +
                                                slideLink.getAttribute("href") + '" target="' +
                                                slideLink.getAttribute("target") + '">' + buttonHtml + "</a>";
                                        }
                                        return buttonHtml;
                                    },
                                }
                            });
                        });
                    </script>

                </div>

                                            </div>

        </div>


    </div>
</div>

<div class="box column-3">
    <div class="box-row">
        <div class="box column-12">

            <div class="widget-box-news-column">
                <div class="box column-12">
                    <div class="box-row" id="MansetSagYani">

                                                    <div class="widget-box-news type1 mb-20">

                                                                    <a  href="/istanbul-merkezli-4-ilde-fetopdy-operasyonu-3151319" target="_blank" title="Ä°stanbul merkezli 4 ilde FETÃ/PDY operasyonu" id="rklmnews1"                                                    class="mb-20 gtm-tracker color-white" data-newsPosition="0" data-newsId="3151319" data-newsName="Ä°stanbul merkezli 4 ilde FETÃ/PDY operasyonu" data-newsVariant="box-news-image" data-newsList="MansetSagYani" data-newsCategory="GÃ¼ndem/GÃ¼venlik">
                                        <figure>
                                            <div class="img img-16x9">
                                                <img src="https://im.haberturk.com/2021/08/03/ver1627966806/3151319_300x169.jpg" alt="Ä°stanbul merkezli 4 ilde FETÃ/PDY operasyonu">
                                            </div>
                                            <figcaption>
                                                <span class="title">Ä°stanbul merkezli 4 ilde FETÃ/PDY operasyonu</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                                                    <a  href="/agri-da-4-yasindaki-cocugunu-dovdugu-iddia-edilen-anne-ve-uvey-baba-tutuklandi-3151302" target="_blank" title="4 yaÅÄ±ndaki Ã§ocuÄa Åiddet iddiasÄ±: Anne ve Ã¼vey baba tutuklandÄ±"                                                     class="mb-20 gtm-tracker color-white" data-newsPosition="1" data-newsId="3151302" data-newsName="4 yaÅÄ±ndaki Ã§ocuÄa Åiddet iddiasÄ±: Anne ve Ã¼vey baba tutuklandÄ±" data-newsVariant="box-news-image" data-newsList="MansetSagYani" data-newsCategory="GÃ¼ndem">
                                        <figure>
                                            <div class="img img-16x9">
                                                <img src="https://im.haberturk.com/2021/08/03/ver1627959155/3151302_300x169.jpg" alt="4 yaÅÄ±ndaki Ã§ocuÄa Åiddet iddiasÄ±: Anne ve Ã¼vey baba tutuklandÄ±">
                                            </div>
                                            <figcaption>
                                                <span class="title">4 yaÅÄ±ndaki Ã§ocuÄa Åiddet iddiasÄ±: Anne ve Ã¼vey baba tutuklandÄ±</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                
                            </div>
                        
                                                    <div class="widget-small-slider  type1 slide-type1">
                                <div class="swiper-container">
                                    <div class="swiper-wrapper">

                                                                                    <div class="swiper-slide item color-white">
                                                <a  href="/abd-16-ulke-ve-adayi-yuksek-riskli-ulkeler-listesine-ekledi-3151310" target="_blank" title="ABD'den 16 Ã¼lke ve ada iÃ§in &quot;yÃ¼ksek riskli Ã¼lkeler&quot; kararÄ±" target="_blank"
                                                                class="gtm-tracker" data-newsPosition="2" data-newsId="3151310" data-newsName="ABD\'den 16 Ã¼lke ve ada iÃ§in &quot;yÃ¼ksek riskli Ã¼lkeler&quot; kararÄ±" data-newsVariant="box-news" data-newsList="MansetSagYani" data-newsCategory="DÃ¼nya/Amerika">
                                                    <div class="img">
                                                                                                                    <img src="https://im.haberturk.com/2021/08/03/ver1627957987/3151310_300x300.jpg"
                                                                 alt="ABD'den 16 Ã¼lke ve ada iÃ§in &quot;yÃ¼ksek riskli Ã¼lkeler&quot; kararÄ±">
                                                                                                            </div>
                                                    <figure>
                                                        <figcaption>
                                                            <span class="title">ABD'den 16 Ã¼lke ve ada iÃ§in "yÃ¼ksek riskli Ã¼lkeler" kararÄ±</span>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                                                                    <div class="swiper-slide item color-white">
                                                <a  href="/disisleri-bakani-mevlut-cavusoglu-muhittin-bey-e-hic-yakismadi-bu-soylemler-3151017" target="_blank" title="ÃavuÅoÄlu'ndan Muhittin BÃ¶cek'e sitem" target="_blank"
                                                                class="gtm-tracker" data-newsPosition="3" data-newsId="3151017" data-newsName="ÃavuÅoÄlu\'ndan Muhittin BÃ¶cek\'e sitem" data-newsVariant="box-news" data-newsList="MansetSagYani" data-newsCategory="GÃ¼ndem/Politika">
                                                    <div class="img">
                                                                                                                    <img class="swiper-lazy"
                                                                 src="https://im.haberturk.com/assets/images/v3/transparent.gif"
                                                                 data-src="https://im.haberturk.com/2021/08/02/ver1627943720/3151017_300x300.jpg"
                                                                 alt="ÃavuÅoÄlu'ndan Muhittin BÃ¶cek'e sitem">
                                                                                                            </div>
                                                    <figure>
                                                        <figcaption>
                                                            <span class="title">ÃavuÅoÄlu'ndan Muhittin BÃ¶cek'e sitem</span>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                                                                    <div class="swiper-slide item color-yellow">
                                                <a  href="/iste-online-orman-yanginlari-son-durum-haritalari-haberler-3148055-teknoloji" target="_blank" title="Online haritalar da alev alev!" target="_blank"
                                                                class="gtm-tracker" data-newsPosition="4" data-newsId="3148055" data-newsName="Online haritalar da alev alev!" data-newsVariant="box-news" data-newsList="MansetSagYani" data-newsCategory="Ekonomi/Teknoloji/Ä°nternet">
                                                    <div class="img">
                                                                                                                    <img class="swiper-lazy"
                                                                 src="https://im.haberturk.com/assets/images/v3/transparent.gif"
                                                                 data-src="https://im.haberturk.com/2021/07/30/ver1627648670/3148055_300x300.jpg"
                                                                 alt="Online haritalar da alev alev!">
                                                                                                            </div>
                                                    <figure>
                                                        <figcaption>
                                                            <span class="title">Online haritalar da alev alev!</span>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                        

                                    </div>
                                    <div class="pagination-type1 pagination swiper-pagination"></div>
                                    <div class="navigation-type1 prev swiper-button-prev"></div>
                                    <div class="navigation-type1 next swiper-button-next"></div>
                                </div>
                            </div>

                            <script>
                                // head.ready("layout", function () {
                                //     var swiper = new Swiper('.widget-small-slider.type1 .swiper-container', {
                                //         navigation: {
                                //             nextEl: '.widget-small-slider.type1 .swiper-button-next',
                                //             prevEl: '.widget-small-slider.type1 .swiper-button-prev',
                                //         },
                                //         loop: true,
                                //         preloadImages: false,
                                //         lazy: {
                                //             loadPrevNext: true,
                                //             loadPrevNextAmount: 2
                                //         },
                                //         on: {
                                //             init: function() {
                                //                 var swiper = this;
                                //                 var slideHover = function() {
                                //                     if (!swiper.pagination.bullets || swiper.pagination.bullets.length === 0) {
                                //                         return setTimeout(slideHover, 200);
                                //                     }
                                //                     $(swiper.pagination.bullets).on("mouseover", function() {
                                //                         var index = parseInt($(this).attr("data-id"));
                                //                         if (swiper.loopedSlides) {
                                //                             index = (index + 1)
                                //                         }
                                //                         swiper.slideTo(index);
                                //                     });
                                //                 };
                                //                 setTimeout(slideHover, 50);
                                //             }
                                //         },
                                //         pagination: {
                                //             el: '.widget-small-slider.type1 .swiper-pagination',
                                //             clickable: true,
                                //         }
                                //     });
                                // });
                            </script>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
</div></div>

<section class="advertisement mt-20 mb-20" id="index970x90_1-1" style="text-align:center;">
    <div class="admh_buttons" id="zone_2224_btn" style="position:relative;height:16px;overflow:hidden;margin-right:15px;display:none;">
        <a href="javascript:;" class="admh_open" id="zone_2224_btnopen" style="position:absolute;right:0;top:0;background:#000;color:#CCCCCC;text-decoration:none;font:10px/16px Arial,sans-serif;z-index:1;display:block;">
            <span style="display:inline-block;background:#666666;color:#cccccc;padding:0 3px;">â¼</span><span style="padding:0 3px;">ReklamÄ± AÃ§</span>
        </a>
    </div>
    <div id="zone_2224" data-zone-id="2224" class="ads-zone lazy-init"></div></section>
<div class="box-row" id="0">
	<div class="fl">

		<div class="box column-12" style="margin-bottom:0;">
			<div class="box-row">

				


				<div class="box column-3" style="float:right;">


					<!--yazarlar-->
					<div class="widget-author-vertical" id="MainWriters">
						<div class="authorHead">
							<h2>
								<a href="/htyazarlar">
									YAZARLAR
								</a>
							</h2>
						</div>
						<div class="swiper-container widget-author-vertical-slider">
							<div class="swiper-wrapper">

								
									<div class="swiper-slide">
										<a href="/yazarlar/fatih-altayli-1001/3150314-yerli-yangin-ucagi-projesi-ne-zaman-durdu" title="Yerli yangÄ±n uÃ§aÄÄ± projesi ne zaman durdu" target="_blank"
										   class="gtm-tracker " data-newsPosition="1001" data-newsId="3150314" data-newsName="Yerli yangÄ±n uÃ§aÄÄ± projesi ne zaman durdu" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/fatih-altayli-1001-165x165.png?v=1613738137"
														alt="Fatih AltaylÄ±"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">FATÄ°H ALTAYLI</span>
												<!--<span class="title">Yerli yangÄ±n uÃ§aÄÄ± projesi ne zaman durdu</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/murat-bardakci/3148930-once-kitap-sonra-da-orman-yakan-cocuklar-yetistirmekle-ne-kadar-iftihar-etsek-azdir" title="Ãnce kitap, sonra da orman yakan Ã§ocuklar yetiÅtirmekle ne kadar iftihar etsek azdÄ±r!" target="_blank"
										   class="gtm-tracker " data-newsPosition="1002" data-newsId="3148930" data-newsName="Ãnce kitap, sonra da orman yakan Ã§ocuklar yetiÅtirmekle ne kadar iftihar etsek azdÄ±r!" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/murat-bardakci-165x165.png?v=1539077773"
														alt="Murat BardakÃ§Ä±"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">MURAT BARDAKÃI</span>
												<!--<span class="title">Ãnce kitap, sonra da orman yakan Ã§ocuklar yetiÅtirmekle ne kadar iftihar etsek azdÄ±r!</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/nagehan-alci/3150994-bodrum-belediye-baskani-ahmet-aras-alevler-yaliciftlige-ilerliyor-acil-hava-destegi-lazim" title="   Bodrum Belediye BaÅkanÄ± Ahmet Aras: Alevler YalÄ±Ã§iftliÄe ilerliyor, acil hava desteÄi lazÄ±m" target="_blank"
										   class="gtm-tracker " data-newsPosition="2433" data-newsId="3150994" data-newsName="Bodrum Belediye BaÅkanÄ± Ahmet Aras: Alevler YalÄ±Ã§iftliÄe ilerliyor, acil hava desteÄi lazÄ±m" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/nagehan-alci-165x165.png?v=1577435978"
														alt="Nagehan AlÃ§Ä±"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">NAGEHAN ALÃI</span>
												<!--<span class="title">   Bodrum Belediye BaÅkanÄ± Ahmet Aras: Alevler YalÄ±Ã§iftliÄe ilerliyor, acil hava desteÄi lazÄ±m</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/kubra-par-2561/3150363-cay-dagitmanin-yeri-ve-zamani-degildi" title="Ãay daÄÄ±tmanÄ±n yeri ve zamanÄ± deÄildi" target="_blank"
										   class="gtm-tracker " data-newsPosition="2561" data-newsId="3150363" data-newsName="Ãay daÄÄ±tmanÄ±n yeri ve zamanÄ± deÄildi" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/kubra-par-2561-165x165.png?v=1588661086"
														alt="KÃ¼bra Par"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">KÃBRA PAR</span>
												<!--<span class="title">Ãay daÄÄ±tmanÄ±n yeri ve zamanÄ± deÄildi</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/serdar-ali-celikler-1034/3149717-ali-koc-un-tff-aciklamalari-ve-transfer" title="Ali KoÃ§'un TFF AÃ§Ä±klamalarÄ± ve transfer" target="_blank"
										   class="gtm-tracker " data-newsPosition="1034" data-newsId="3149717" data-newsName="Ali KoÃ§\'un TFF AÃ§Ä±klamalarÄ± ve transfer" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Spor">
											<figure>
                                                <span class=" sport "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/serdar-ali-celikler-1034-165x165.png?v=1538487438"
														alt="Serdar Ali Ãelikler"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">SERDAR ALÄ° ÃELÄ°KLER</span>
												<!--<span class="title">Ali KoÃ§'un TFF AÃ§Ä±klamalarÄ± ve transfer</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/oray-egin/3150222-parayla-saadet" title="Parayla saadet" target="_blank"
										   class="gtm-tracker " data-newsPosition="2397" data-newsId="3150222" data-newsName="Parayla saadet" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/oray-egin-165x165.png?v=1601559016"
														alt="Oray EÄin"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">ORAY EÄÄ°N</span>
												<!--<span class="title">Parayla saadet</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/sevilay-yilman-2383/3150315-mahalle-yanarken-sac-tarayan-lafini-da-pratige-doktunuz-ya-pes" title="Mahalle yanarken saÃ§ tarayan lafÄ±nÄ± da pratiÄe dÃ¶ktÃ¼nÃ¼z ya! Pes!" target="_blank"
										   class="gtm-tracker " data-newsPosition="2383" data-newsId="3150315" data-newsName="Mahalle yanarken saÃ§ tarayan lafÄ±nÄ± da pratiÄe dÃ¶ktÃ¼nÃ¼z ya! Pes!" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/sevilay-yilman-2383-165x165.png?v=1535963051"
														alt="Sevilay YÄ±lman"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">SEVÄ°LAY YILMAN</span>
												<!--<span class="title">Mahalle yanarken saÃ§ tarayan lafÄ±nÄ± da pratiÄe dÃ¶ktÃ¼nÃ¼z ya! Pes!</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/muharrem-sarikaya/3149556-bir-kira-kac-ucak-eder" title="Bir kira, kaÃ§ uÃ§ak eder?" target="_blank"
										   class="gtm-tracker " data-newsPosition="1067" data-newsId="3149556" data-newsName="Bir kira, kaÃ§ uÃ§ak eder?" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/muharrem-sarikaya-165x165.png?v=1478010403"
														alt="Muharrem SarÄ±kaya"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">MUHARREM SARIKAYA</span>
												<!--<span class="title">Bir kira, kaÃ§ uÃ§ak eder?</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/prof-dr-kursad-zorlu/3151257-thknin-sondurme-ucaklari-kullanilabilir-miydi" title="THKânÄ±n sÃ¶ndÃ¼rme uÃ§aklarÄ± kullanÄ±labilir miydi?" target="_blank"
										   class="gtm-tracker animated" data-newsPosition="2560" data-newsId="3151257" data-newsName="THKânÄ±n sÃ¶ndÃ¼rme uÃ§aklarÄ± kullanÄ±labilir miydi?" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="GÃ¼ndem">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HT/prof-dr-kursad-zorlu-165x165.png?v=1615963338"
														alt="Prof. Dr. KÃ¼rÅad Zorlu"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">PROF. DR. KÃRÅAD ZORLU</span>
												<!--<span class="title">THKânÄ±n sÃ¶ndÃ¼rme uÃ§aklarÄ± kullanÄ±labilir miydi?</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/nihal-bengisu-karaca/3148730-mordor-diyarinda-siradan-bir-gundu" title="Mordor diyarÄ±nda sÄ±radan bir gÃ¼ndÃ¼" target="_blank"
										   class="gtm-tracker " data-newsPosition="1004" data-newsId="3148730" data-newsName="Mordor diyarÄ±nda sÄ±radan bir gÃ¼ndÃ¼" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/nihal-bengisu-karaca-165x165.png?v=1580834182"
														alt="Nihal Bengisu Karaca"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">NÄ°HAL BENGÄ°SU KARACA</span>
												<!--<span class="title">Mordor diyarÄ±nda sÄ±radan bir gÃ¼ndÃ¼</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/abdurrahman-yildirim-1018/3149910-ormanlarda-yangin-tl-de-sonumlenme" title="Ormanlarda yangÄ±n, TL'de sÃ¶nÃ¼mlenme" target="_blank"
										   class="gtm-tracker " data-newsPosition="1018" data-newsId="3149910" data-newsName="Ormanlarda yangÄ±n, TL\'de sÃ¶nÃ¼mlenme" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="">
											<figure>
                                                <span class=" economy "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/abdurrahman-yildirim-1018-165x165.png?v=1539077987"
														alt="Abdurrahman YÄ±ldÄ±rÄ±m"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">ABDURRAHMAN YILDIRIM</span>
												<!--<span class="title">Ormanlarda yangÄ±n, TL'de sÃ¶nÃ¼mlenme</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/serdar-turgut-2025/3150223-beat-kusagi-modern-cazin-hayattaki-ulumasidir" title="Beat KuÅaÄÄ± modern cazÄ±n hayattaki 'UlumasÄ±dÄ±r'" target="_blank"
										   class="gtm-tracker " data-newsPosition="2025" data-newsId="3150223" data-newsName="Beat KuÅaÄÄ± modern cazÄ±n hayattaki \'UlumasÄ±dÄ±r\'" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/serdar-turgut-2025-165x165.png?v=1551027781"
														alt="Serdar Turgut"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">SERDAR TURGUT</span>
												<!--<span class="title">Beat KuÅaÄÄ± modern cazÄ±n hayattaki 'UlumasÄ±dÄ±r'</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/prof-dr-temel-yilmaz/3123350-dorduncu-dalga-kapimizda-devlet-denenmis-etkili-olmamis-onlemler-yerine-daha-stratejik-kararlar-alma" title="DÃ¶rdÃ¼ncÃ¼ dalga kapÄ±mÄ±zda; devlet denenmiÅ, etkili olmamÄ±Å Ã¶nlemler yerine daha stratejik kararlar almalÄ±" target="_blank"
										   class="gtm-tracker " data-newsPosition="2340" data-newsId="3123350" data-newsName="DÃ¶rdÃ¼ncÃ¼ dalga kapÄ±mÄ±zda; devlet denenmiÅ, etkili olmamÄ±Å Ã¶nlemler yerine daha stratejik kararlar almalÄ±" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/prof-dr-temel-yilmaz-165x165.png?v=1602535276"
														alt="Prof. Dr. Temel YÄ±lmaz"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">PROF. DR. TEMEL YILMAZ</span>
												<!--<span class="title">DÃ¶rdÃ¼ncÃ¼ dalga kapÄ±mÄ±zda; devlet denenmiÅ, etkili olmamÄ±Å Ã¶nlemler yerine daha stratejik kararlar almalÄ±</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/kemal-ozturk/3150487-konya-katliami-irkci-saldiri-mi-aileler-arasinda-husumet-mi" title="Konya katliamÄ±â¦  IrkÃ§Ä± saldÄ±rÄ± mÄ±, aileler arasÄ±nda husumet mi?" target="_blank"
										   class="gtm-tracker " data-newsPosition="2562" data-newsId="3150487" data-newsName="Konya katliamÄ±â¦  IrkÃ§Ä± saldÄ±rÄ± mÄ±, aileler arasÄ±nda husumet mi?" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/kemal-ozturk-165x165.png?v=1600951261"
														alt="Kemal ÃztÃ¼rk"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">KEMAL ÃZTÃRK</span>
												<!--<span class="title">Konya katliamÄ±â¦  IrkÃ§Ä± saldÄ±rÄ± mÄ±, aileler arasÄ±nda husumet mi?</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/cetiner-cetin/3150349-almanyada-turk-basbakan-mi" title="Almanyaâda TÃ¼rk baÅbakan mÄ±?" target="_blank"
										   class="gtm-tracker " data-newsPosition="2484" data-newsId="3150349" data-newsName="Almanyaâda TÃ¼rk baÅbakan mÄ±?" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="GÃ¼ndem">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HT/cetiner-cetin-165x165.png?v=1547037498"
														alt="Ãetiner Ãetin"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">ÃETÄ°NER ÃETÄ°N</span>
												<!--<span class="title">Almanyaâda TÃ¼rk baÅbakan mÄ±?</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/esin-ovet-1064/3151291-ne-hissettigimi-bilmiyorum" title="Ne hissettiÄimi bilmiyorum" target="_blank"
										   class="gtm-tracker animated" data-newsPosition="1064" data-newsId="3151291" data-newsName="Ne hissettiÄimi bilmiyorum" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Magazin">
											<figure>
                                                <span class=" magazine "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/esin-ovet-1064-165x165.png?v=1617797256"
														alt="Esin Ãvet"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">ESÄ°N ÃVET</span>
												<!--<span class="title">Ne hissettiÄimi bilmiyorum</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/guntay-simsek-1019/3150658-yangin-tartismasi-nereye-gidiyor" title="YangÄ±n tartÄ±ÅmasÄ± nereye gidiyor?" target="_blank"
										   class="gtm-tracker " data-newsPosition="1019" data-newsId="3150658" data-newsName="YangÄ±n tartÄ±ÅmasÄ± nereye gidiyor?" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="">
											<figure>
                                                <span class=" economy "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/guntay-simsek-1019-165x165.png?v=1478010561"
														alt="GÃ¼ntay ÅimÅek"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">GÃNTAY ÅÄ°MÅEK</span>
												<!--<span class="title">YangÄ±n tartÄ±ÅmasÄ± nereye gidiyor?</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/mehmet-acar/3151077-gerceklerden-kacmak-isteyenlere" title="GerÃ§eklerden kaÃ§mak isteyenlere" target="_blank"
										   class="gtm-tracker animated" data-newsPosition="1032" data-newsId="3151077" data-newsName="GerÃ§eklerden kaÃ§mak isteyenlere" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Magazin">
											<figure>
                                                <span class=" magazine "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/mehmet-acar-165x165.png?v=1563267805"
														alt="Mehmet AÃ§ar"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">MEHMET AÃAR</span>
												<!--<span class="title">GerÃ§eklerden kaÃ§mak isteyenlere</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/ayse-ozek-karasu/3149014-onumuzdeki-yanginlara-bakalim" title="ÃnÃ¼mÃ¼zdeki yangÄ±nlara bakalÄ±m" target="_blank"
										   class="gtm-tracker " data-newsPosition="1043" data-newsId="3149014" data-newsName="ÃnÃ¼mÃ¼zdeki yangÄ±nlara bakalÄ±m" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/ayse-ozek-karasu-165x165.png?v=1545135272"
														alt="AyÅe Ãzek Karasu"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">AYÅE ÃZEK KARASU</span>
												<!--<span class="title">ÃnÃ¼mÃ¼zdeki yangÄ±nlara bakalÄ±m</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/muhsin-kizilkaya-2291/3149527-vedat-turkaliden-mehmed-uzuna-mektup" title="Vedat TÃ¼rkaliâden Mehmed Uzunâa mektup!" target="_blank"
										   class="gtm-tracker " data-newsPosition="2291" data-newsId="3149527" data-newsName="Vedat TÃ¼rkaliâden Mehmed Uzunâa mektup!" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/muhsin-kizilkaya-2291-165x165.png?v=1533821897"
														alt="Muhsin KÄ±zÄ±lkaya"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">MUHSÄ°N KIZILKAYA</span>
												<!--<span class="title">Vedat TÃ¼rkaliâden Mehmed Uzunâa mektup!</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/gokhan-sen/3150916-cin-tekno-kapitalizme-karsi" title="Ãin, tekno-kapitalizme karÅÄ±" target="_blank"
										   class="gtm-tracker animated" data-newsPosition="2460" data-newsId="3150916" data-newsName="Ãin, tekno-kapitalizme karÅÄ±" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="">
											<figure>
                                                <span class=" economy "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/gokhan-sen-165x165.png?v=1538468350"
														alt="GÃ¶khan Åen"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">GÃKHAN ÅEN</span>
												<!--<span class="title">Ãin, tekno-kapitalizme karÅÄ±</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/yasemin-guneri/3145446-hastaneler-kapanma-noktasina-gelmeden-okullar-kapatilmamali" title="&quot;Hastaneler kapanma noktasÄ±na gelmeden, okullar kapatÄ±lmamalÄ±&quot;" target="_blank"
										   class="gtm-tracker " data-newsPosition="2509" data-newsId="3145446" data-newsName="&quot;Hastaneler kapanma noktasÄ±na gelmeden, okullar kapatÄ±lmamalÄ±&quot;" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="GÃ¼ndem">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HT/yasemin-guneri-165x165.png?v=1563269746"
														alt="Yasemin GÃ¼neri"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">YASEMÄ°N GÃNERÄ°</span>
												<!--<span class="title">&quot;Hastaneler kapanma noktasÄ±na gelmeden, okullar kapatÄ±lmamalÄ±&quot;</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/kadir-kaymakci/3148770-165-yil-once-iklim-degisikligini-haber-veren-kadin" title="165 yÄ±l Ã¶nce iklim deÄiÅikliÄini haber veren kadÄ±n" target="_blank"
										   class="gtm-tracker " data-newsPosition="1092" data-newsId="3148770" data-newsName="165 yÄ±l Ã¶nce iklim deÄiÅikliÄini haber veren kadÄ±n" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Magazin">
											<figure>
                                                <span class=" magazine "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/kadir-kaymakci-165x165.png?v=1607671575"
														alt="Kadir KaymakÃ§Ä±"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">KADÄ°R KAYMAKÃI</span>
												<!--<span class="title">165 yÄ±l Ã¶nce iklim deÄiÅikliÄini haber veren kadÄ±n</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/cuneyt-basaran/3114130-nato-uyeligi-ve-gocmen-konusu" title="NATO Ã¼yeliÄi ve gÃ¶Ã§men konusu" target="_blank"
										   class="gtm-tracker " data-newsPosition="2282" data-newsId="3114130" data-newsName="NATO Ã¼yeliÄi ve gÃ¶Ã§men konusu" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="">
											<figure>
                                                <span class=" economy "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/cuneyt-basaran-165x165.png?v=1604426318"
														alt="CÃ¼neyt BaÅaran"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">CÃNEYT BAÅARAN</span>
												<!--<span class="title">NATO Ã¼yeliÄi ve gÃ¶Ã§men konusu</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/osman-gencer/3151295-2040-a-kadar-boyle" title="2040'a kadar bÃ¶yle" target="_blank"
										   class="gtm-tracker animated" data-newsPosition="1015" data-newsId="3151295" data-newsName="2040\'a kadar bÃ¶yle" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Gazete">
											<figure>
                                                <span class=" agenda "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/osman-gencer-165x165.png?v=1547044786"
														alt="Osman GenÃ§er"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">OSMAN GENÃER</span>
												<!--<span class="title">2040'a kadar bÃ¶yle</span>-->
																							</figcaption>
										</a>
									</div>


								
									<div class="swiper-slide">
										<a href="/yazarlar/ibrahim-yildiz/3147335-turk-futbolunda-yeni-donem" title="TÃ¼rk futbolunda yeni dÃ¶nem" target="_blank"
										   class="gtm-tracker " data-newsPosition="2298" data-newsId="3147335" data-newsName="TÃ¼rk futbolunda yeni dÃ¶nem" data-newsVariant="slider" data-newsList="MainWriters" data-newsCategory="HT Spor">
											<figure>
                                                <span class=" sport "><img
														class="swiper-lazy"
														src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-src="https://im.haberturk.com/yazarlar/HTGazete/ibrahim-yildiz-165x165.png?v=1545135166"
														alt="Ä°brahim YÄ±ldÄ±z"></span>
												<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
													 xml:space="preserve">
                                                    <circle cx="50" cy="50" r="47"></circle>
                                                </svg>
											</figure>
											<figcaption>
												<span
													class="name">Ä°BRAHÄ°M YILDIZ</span>
												<!--<span class="title">TÃ¼rk futbolunda yeni dÃ¶nem</span>-->
																							</figcaption>
										</a>
									</div>


								
							</div>
						</div>
						<div class="swiper-button-prev"></div>
						<div class="swiper-button-next"></div>
					</div>

											<script>
                            head.ready("layout", function () {
                                var swiper = new Swiper('.widget-author-vertical-slider', {
                                    direction: 'vertical',
                                    slidesPerView: 'auto',
                                    slidesPerColumn: 2,
                                    observer: true,
                                    observeParents: true,
                                    allowTouchMove: false,
                                    //centeredSlides: true,
                                    lazy: {
                                        loadPrevNext: true,
                                        loadPrevNextAmount: 12
                                    },
                                    watchSlidesVisibility: true,
                                    navigation: {
                                        nextEl: '.widget-author-vertical .swiper-button-next',
                                        prevEl: '.widget-author-vertical .swiper-button-prev',
                                    }
                                });

                            });
						</script>
										<!--yazarlar finish-->


				</div>

				<div class="box column-9 two" id="MansetAlti">
					<div class="box-row">
						<div class="box column-4 type1 box-4-medium">
														<a  href="/altin-fiyatlari-dibe-vurdu-son-dakika-ceyrek-ve-gram-altin-fiyatlari-3-agustos-guncel-3151338-ekonomi" target="_blank" title="AltÄ±n fiyatlarÄ±nda sert dÃ¼ÅÃ¼Å" class="gtm-tracker" data-newsPosition="0" data-newsId="3151338" data-newsName="AltÄ±n fiyatlarÄ±nda sert dÃ¼ÅÃ¼Å" data-newsVariant="box-news-image" data-newsList="MansetAlti" data-newsCategory="Ekonomi/AltÄ±n">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/03/ver1627969383/3151338_400x400.jpg" alt="AltÄ±n fiyatlarÄ±nda sert dÃ¼ÅÃ¼Å"/></div>
									<figcaption>
										<span class="category  economy ">AltÄ±n</span>
										<span class="title">AltÄ±n fiyatlarÄ±nda sert dÃ¼ÅÃ¼Å</span>
									</figcaption>
								</figure>
							</a>
						</div>
						<div class="box column-4 type1 ad-ver-ti-se-ment-ucyuz-small">
							<div class=" ad-ver-ti-se-ment adv300250">
								<div id="zone_1273" data-zone-id="1273" class="ads-zone lazy-init"></div>							</div>
						</div>
						<div class="box column-4 type1 box-4-small">
														<a  href="/yks-tercih-kilavuzu-2021-yks-tercih-kilavuzu-osym-tarafindan-yayinlandi-mi-3151347" target="_blank" title="YKS tercih kÄ±lavuzu yayÄ±nda mÄ±?" class="gtm-tracker" data-newsPosition="1" data-newsId="3151347" data-newsName="YKS tercih kÄ±lavuzu yayÄ±nda mÄ±?" data-newsVariant="box-news-image" data-newsList="MansetAlti" data-newsCategory="GÃ¼ndem/EÄitim">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/03/ver1627970487/3151347_400x400.jpg" alt="YKS tercih kÄ±lavuzu yayÄ±nda mÄ±?"/></div>
									<figcaption>
										<span class="category  agenda ">GÃ¼ndem</span>
										<span class="title">YKS tercih kÄ±lavuzu yayÄ±nda mÄ±?</span>
									</figcaption>
								</figure>
							</a>
						</div>
						<!-- <div class="box column-8 ad-ver-ti-se-ment-ucyuz-large">
							<div class="box-row">



							</div>
						</div> -->

					</div>
				</div>

				<div class="box column-9 mb-0">
					<div class="box-row">

						<div class="box column-4 type1">
														<a  href="/son-dakika-nedret-guvenc-son-yolculuguna-ugurlandi-magazin-haberleri-3150778-magazin" target="_blank" title="Usta oyuncuya veda" class="gtm-tracker" data-newsPosition="2" data-newsId="3150778" data-newsName="Usta oyuncuya veda" data-newsVariant="box-news-image" data-newsList="MansetAlti" data-newsCategory="Magazin/Fiskos">
								<figure>
									<div class="img img-1x1-4"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627909499/3150778_400x400.jpg" alt="Usta oyuncuya veda"/></div>
									<figcaption>
										<span class="category  magazine ">Fiskos</span>
										<span class="title">Usta oyuncuya veda</span>
									</figcaption>
								</figure>
							</a>
						</div>

						<div class="box column-4 type1">
														<a  href="/besiktas-ta-valentin-rosier-takimla-calisti-3151124-spor" target="_blank" title="BeÅiktaÅ'ta Rosier, takÄ±mla Ã§alÄ±ÅtÄ±" class="gtm-tracker" data-newsPosition="3" data-newsId="3151124" data-newsName="BeÅiktaÅ\'ta Rosier, takÄ±mla Ã§alÄ±ÅtÄ±" data-newsVariant="box-news-image" data-newsList="MansetAlti" data-newsCategory="Spor/Futbol/SÃ¼per Lig/BeÅiktaÅ">
								<figure>
									<div class="img img-1x1-4"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627930006/3151124_400x400.jpg" alt="BeÅiktaÅ'ta Rosier, takÄ±mla Ã§alÄ±ÅtÄ±"/>
									</div>
									<figcaption>
										<span class="category  sport ">Futbol</span>
										<span class="title">BeÅiktaÅ'ta Rosier, takÄ±mla Ã§alÄ±ÅtÄ±</span>
									</figcaption>
								</figure>
							</a>
													</div>

						<div class="box column-4 type1">
														<a  href="/galatasaray-st-johnstone-maci-hazirliklarini-surdurdu-3151117-spor" target="_blank" title=" Galatasaray'da St. Johnstone hazÄ±rlÄ±klarÄ±" class="gtm-tracker" data-newsPosition="4" data-newsId="3151117" data-newsName="Galatasaray\'da St. Johnstone hazÄ±rlÄ±klarÄ±" data-newsVariant="box-news-image" data-newsList="MansetAlti" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Galatasaray">
								<figure>
									<div class="img img-1x1-4"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627929545/3151117_400x400.jpg" alt="Galatasaray'da St. Johnstone hazÄ±rlÄ±klarÄ±"/>
									</div>
									<figcaption>
										<span class="category  sport ">Futbol</span>
										<span class="title">Galatasaray'da St. Johnstone hazÄ±rlÄ±klarÄ±</span>
									</figcaption>
								</figure>
							</a>
													</div>

					</div>
				</div>


				<div class="box column-12">
					<div class="widget-best-selling-books">
						<div class="head">
							<div class="logo">
								<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24138&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
									<img alt="Trendyol" src="https://im.haberturk.com/assets/images/logo/ty-logo.svg">
								</a>
							</div>
							<div class="title">
								<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24138&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">AyÄ±n en Ã§ok satan kitaplarÄ± Trendyol'da</a>
							</div>
						</div>
						<div class="swiper-container slider">
							<div class="swiper-wrapper">
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24140&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">1.</span>
											<span class="name">KayÄ±p TanrÄ±lar Ãlkesi</span>
										<span class="title">Ahmet Ãmit</span>
									</a>
								</div>
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24141&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">2.</span>
										<span class="name">Åeker PortakalÄ± Ciltsiz</span>
										<span class="title">Jose Mauro De Vasconcelos</span>
									</a>
								</div>
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24142&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">3.</span>
										<span class="name">Hayvan ÃiftliÄi</span>
										<span class="title">George Orwell</span>
									</a>
								</div>
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24143&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">4.</span>
										<span class="name">Seyir</span>
										<span class="title">Piraye</span>
									</a>
								</div>
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24144&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">5.</span>
										<span class="name">1984</span>
										<span class="title">George Orwell</span>
									</a>
								</div>
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24145&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">6.</span>
										<span class="name">Tutunamayanlar</span>
										<span class="title">OÄuz Atay</span>
									</a>
								</div>
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24146&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">7.</span>
										<span class="name">Ä°Ã§imizdeki Åeytan</span>
										<span class="title">Sabahattin Ali</span>
									</a>
								</div>
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24147&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">8.</span>
										<span class="name">Arsen Lupen Seti (ciltsiz) (3 KÄ°TAP)</span>
										<span class="title">Arsen Lupen</span>
									</a>
								</div>
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24148&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">9.</span>
										<span class="name">OlaÄanÃ¼stÃ¼ Bir Gece</span>
										<span class="title">Stefan Zweig</span>
									</a>
								</div>
								<div class="swiper-slide item">
									<a href="https://adsp.haberturk.com/advertpro/servlet/click/media?mid=24149&pid=0&lookup=true&position=1&date=(date)&uuid=(email)" rel="nofollow" target="_blank">
										<span class="number">10.</span>
										<span class="name">SimyacÄ±</span>
										<span class="title">Paulo Coelho</span>
									</a>
								</div>
							</div>
						</div>
						<img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://adsp.haberturk.com/advertpro/servlet/view/banner/image/media?mid=24138&pid=0&position=1&date=(date)&uuid=(email)" hspace="0" vspace="0" border="0" alt="Click Here!">
					</div>
					<script>
                        head.ready("layout", function () {
                            setTimeout(function () {
                                var swiperExchange = new Swiper('.widget-best-selling-books .slider', {
                                    slidesPerView: 'auto',
                                    spaceBetween: 10,
                                    speed: 6000,
                                    autoplay: {
                                        delay: 1,
                                    },
                                    loop: true,
                                    disableOnInteraction: false
                                });
                            }, 2000);
                        });
					</script>
				</div>


				<div class="box column-6">
											<div class="widget-top-ten type1">
							<div class="head">
								<img src="https://im.haberturk.com/assets/images/logo/en-10-logo.svg"/>
							</div>
							<div class="swiper-container slider">
								<div class="swiper-wrapper">
																			<div class="swiper-slide item">
											<a title="AFGANÄ°STAN"
											   href="/dosya/dunya/afganistan/237" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">AFGANÄ°STAN</a>
										</div>
																			<div class="swiper-slide item">
											<a title="KANAL Ä°STANBUL"
											   href="/dosya/gundem/kanal-istanbul/213" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">KANAL Ä°STANBUL</a>
										</div>
																			<div class="swiper-slide item">
											<a title="BOÄAZÄ°ÃÄ° ÃNÄ°VERSÄ°TESÄ°"
											   href="/dosya/gundem/bogazici-universitesi/157" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">BOÄAZÄ°ÃÄ° ÃNÄ°VERSÄ°TESÄ°</a>
										</div>
																			<div class="swiper-slide item">
											<a title="KKTC"
											   href="/dosya/gundem/kktc/243" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">KKTC</a>
										</div>
																			<div class="swiper-slide item">
											<a title="RECEP TAYYÄ°P ERDOÄAN"
											   href="/dosya/gundem/recep-tayyip-erdogan/139" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">RECEP TAYYÄ°P ERDOÄAN</a>
										</div>
																			<div class="swiper-slide item">
											<a title="SEL FELAKETLERÄ°"
											   href="/dosya/gundem/sel-felaketleri/246" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">SEL FELAKETLERÄ°</a>
										</div>
																			<div class="swiper-slide item">
											<a title="ORMAN YANGINLARI"
											   href="/dosya/gundem/orman-yanginlari/245" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">ORMAN YANGINLARI</a>
										</div>
																			<div class="swiper-slide item">
											<a title="METE GAZOZ"
											   href="/dosya/spor/mete-gazoz/247" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">METE GAZOZ</a>
										</div>
																			<div class="swiper-slide item">
											<a title="FÄ°LENÄ°N SULTANLARI"
											   href="/dosya/spor/filenin-sultanlari/244" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">FÄ°LENÄ°N SULTANLARI</a>
										</div>
																			<div class="swiper-slide item">
											<a title="THODEX"
											   href="/dosya/ekonomi/thodex/220" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">THODEX</a>
										</div>
																			<div class="swiper-slide item">
											<a title="ELON MUSK"
											   href="/dosya/ekonomi/elon-musk/228" class="title gtm-tracker"
											   target="_blank" data-newsVariant="widget-top-ten-desktop">ELON MUSK</a>
										</div>
																	</div>
							</div>
						</div>
										<script>
                        head.ready("layout", function () {
                            var swiper = new Swiper('.widget-top-ten.type1 .slider', {
                                slidesPerView: "auto",
                                freeMode: true,
                                spaceBetween: 10,
                                speed: 1000,
                                autoplay: {
                                    delay: 2500,
                                    disableOnInteraction: false,
                                },
                            });
                        });
					</script>
				</div>

                				<div class="box column-6">
					<div class="widget-economy-list-data">
                        <a class="head" href="/ekonomi/kripto-para" title="Kripto Paralar" target="_blank">
                            <img src="https://im.haberturk.com/assets/images/borsa/cyripto-coin-bg.jpg" alt="" />
                            <span>KRÄ°PTO PARALAR</span>
                        </a>
						<div class="swiper-container">
							<div class="swiper-wrapper">

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="Tether Kripto Para">
											<span class="name"><i><image  src="https://vmcdn.ciner.com.tr/ht/coingecko/logo/tether.png" /></i>Tether</span>
											<span class="value down">$1</span>
											<span class="percent down">-0,13%</span>
										</a>
									</div>

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="Bitcoin Kripto Para">
											<span class="name"><i><image  src="https://vmcdn.ciner.com.tr/ht/coingecko/logo/bitcoin.png" /></i>Bitcoin</span>
											<span class="value down">$38.375</span>
											<span class="percent down">-3,63%</span>
										</a>
									</div>

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="Ethereum Kripto Para">
											<span class="name"><i><image  src="https://vmcdn.ciner.com.tr/ht/coingecko/logo/ethereum.png" /></i>Ethereum</span>
											<span class="value down">$2.480,72</span>
											<span class="percent down">-3,21%</span>
										</a>
									</div>

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="Nothing Kripto Para">
											<span class="name"><i><image  src="" /></i>Nothing</span>
											<span class="value down">$6,93E-7</span>
											<span class="percent down">-7,91%</span>
										</a>
									</div>

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="Binance USD Kripto Para">
											<span class="name"><i><image  src="https://vmcdn.ciner.com.tr/ht/coingecko/logo/binance-usd.png" /></i>Binance USD</span>
											<span class="value up">$1</span>
											<span class="percent up">0,18%</span>
										</a>
									</div>

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="Super Shiba Kripto Para">
											<span class="name"><i><image  src="" /></i>Super Shiba</span>
											<span class="value up">$2,99E-6</span>
											<span class="percent up">2,63%</span>
										</a>
									</div>

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="XRP Kripto Para">
											<span class="name"><i><image  src="https://vmcdn.ciner.com.tr/ht/coingecko/logo/ripple.png" /></i>XRP</span>
											<span class="value down">$0,719866</span>
											<span class="percent down">-2,30%</span>
										</a>
									</div>

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="Bitcoin Cash Kripto Para">
											<span class="name"><i><image  src="https://vmcdn.ciner.com.tr/ht/coingecko/logo/bitcoin-cash.png" /></i>Bitcoin Cash</span>
											<span class="value down">$530,12</span>
											<span class="percent down">-1,10%</span>
										</a>
									</div>

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="DKK Token Kripto Para">
											<span class="name"><i><image  src="https://vmcdn.ciner.com.tr/ht/coingecko/logo/dkk-token.png" /></i>DKK Token</span>
											<span class="value down">$0,153062</span>
											<span class="percent down">0,00%</span>
										</a>
									</div>

								
									<div class="swiper-slide">
										<a class="item" href="/ekonomi/kripto-para" target="_blank" title="ZBG Token Kripto Para">
											<span class="name"><i><image  src="https://vmcdn.ciner.com.tr/ht/coingecko/logo/ztcoin.jpg" /></i>ZBG Token</span>
											<span class="value down">$0,03178605</span>
											<span class="percent down">-4,04%</span>
										</a>
									</div>

								


							</div>
						</div>
					</div>
					<script>
                        head.ready("layout", function () {
                            setTimeout(function () {
                                var swiperExchange = new Swiper('.widget-economy-list-data .swiper-container', {
                                    slidesPerView: 'auto',
                                    spaceBetween: 0,
                                    speed: 6000,
                                    autoplay: {
                                        delay: 1,
                                    },
                                    loop: true,
                                    disableOnInteraction: false
                                });
                            }, 2000);
                        });
					</script>
				</div>
                
				<div class="box column-12 mb-0">
					<div class="box-row" id="3">
						<div class="box column-8">
							<div class="box-row">
								<div class="box column-3 mb-bot-0">
									<div class="box-row">
										<div class="box column-12 two type1 block-item custom-type1">
											<div class="widget-corona-vertical-banner type1 mb-20">
												<a href="/haberleri/corona-virusu" target="_blank"
												   class="corona-bg title gtm-tracker" data-newsposition="0"
												   data-newsid="999994" data-newsname="Korona Haberleri"
												   data-newsvariant="box-news" data-newslist="KoronaHaberleriMobilBtn"
												   data-newscategory="GÃ¼ndem">
													<div class="img img-1x1">
														<img
															src="https://im.haberturk.com/assets/images/corona/common/corona-bg-vertical.png">
													</div>
												</a>
											</div>

											<div class="box-row">
												<div class="box column-12 type1">
																										<a  href="/angelina-jolie-kizi-shiloh-ile-venedik-te-magazin-haberleri-3150765-magazin" target="_blank" title="Annesinin boyunu geÃ§ti"
																	class="gtm-tracker" data-newsPosition="0" data-newsId="3150765" data-newsName="Annesinin boyunu geÃ§ti" data-newsVariant="box-news-image" data-newsList="0" data-newsCategory="Magazin/DÃ¼nyadan">
														<figure>
															<div class="img img-1x1"><img
																	src="https://im.haberturk.com/assets/images/v3/transparent.gif"
																	data-htsrc="https://im.haberturk.com/2021/08/02/ver1627910424/3150765_200x240.jpg" alt="Annesinin boyunu geÃ§ti"/>
															</div>
															<figcaption>
																<span
																	class="category  magazine ">DÃ¼nyadan</span>
																<span class="title">Annesinin boyunu geÃ§ti</span>
															</figcaption>
														</figure>
													</a>
												</div>
											</div>
										</div>
									</div>

								</div>
								<div class="box column-9 type1">

																			<div class="widget-other-slider type1">
											<div class="swiper-container slider">
												<div class="swiper-wrapper" id="MainSlider2">
																											<div class="swiper-slide">
															<a href="/son-dakika-haberi-riza-kayaalp-ten-bronz-madalya-3150660-spor" target="_blank"
															   title="RÄ±za bronz aldÄ±"
															   class="gtm-tracker" data-newsPosition="0" data-newsId="1" data-newsName="RÄ±za bronz aldÄ±" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627911274/3150660_640x640.jpg"
																			 alt="RÄ±za bronz aldÄ±"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/yanan-ormanlari-kac-yilda-kazaniriz-haberler-3149786" target="_blank"
															   title="Yanan ormanlarÄ± kaÃ§ yÄ±lda kazanÄ±rÄ±z?"
															   class="gtm-tracker" data-newsPosition="1" data-newsId="2" data-newsName="Yanan ormanlarÄ± kaÃ§ yÄ±lda kazanÄ±rÄ±z?" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/01/ver1627887968/3149786_640x640.jpg"
																			 alt="Yanan ormanlarÄ± kaÃ§ yÄ±lda kazanÄ±rÄ±z?"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/ormanlar-elimizden-alindiginda-giden-sadece-agaclar-degil-iste-ormanin-agaclarin-sayisiz-faydalari-3150473" target="_blank"
															   title="Ormanlar elimizden alÄ±ndÄ±ÄÄ±nda giden sadece aÄaÃ§lar deÄil!"
															   class="gtm-tracker" data-newsPosition="2" data-newsId="3" data-newsName="Ormanlar elimizden alÄ±ndÄ±ÄÄ±nda giden sadece aÄaÃ§lar deÄil!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627898849/3150473_640x640.jpg"
																			 alt="Ormanlar elimizden alÄ±ndÄ±ÄÄ±nda giden sadece aÄaÃ§lar deÄil!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/manavgat-ta-alevler-hiz-kesmiyor-haberler-3150905" target="_blank"
															   title="Manavgat'ta alevler hÄ±z kesmiyor!"
															   class="gtm-tracker" data-newsPosition="3" data-newsId="4" data-newsName="Manavgat'ta alevler hÄ±z kesmiyor!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627927670/3150905_640x640.jpg"
																			 alt="Manavgat'ta alevler hÄ±z kesmiyor!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/son-dakika-haberi-elektrik-kesintileri-yasaniyor-3150405" target="_blank"
															   title="TÃ¼rkiye genelinde elektrik kesintileri yaÅandÄ±"
															   class="gtm-tracker" data-newsPosition="4" data-newsId="5" data-newsName="TÃ¼rkiye genelinde elektrik kesintileri yaÅandÄ±" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627911106/3150405_640x640.jpg"
																			 alt="TÃ¼rkiye genelinde elektrik kesintileri yaÅandÄ±"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/son-dakika-30-bin-632-hektarin-yandigi-manavgat-ta-yuzey-sicakligi-95-dereceye-ulasmis-haberler-3150591" target="_blank"
															   title="Manavgat'Ä±n kahreden haritasÄ±! YÃ¼zey sÄ±caklÄ±ÄÄ± 95 dereceye ulaÅmÄ±Å!"
															   class="gtm-tracker" data-newsPosition="5" data-newsId="6" data-newsName="Manavgat'Ä±n kahreden haritasÄ±! YÃ¼zey sÄ±caklÄ±ÄÄ± 95 dereceye ulaÅmÄ±Å!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627900859/3150591_640x640.jpg"
																			 alt="Manavgat'Ä±n kahreden haritasÄ±! YÃ¼zey sÄ±caklÄ±ÄÄ± 95 dereceye ulaÅmÄ±Å!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/manavgat-ta-yurek-yakan-tablo-haberler-3150592" target="_blank"
															   title="Manavgat'ta yÃ¼rek yakan tablo!"
															   class="gtm-tracker" data-newsPosition="6" data-newsId="7" data-newsName="Manavgat'ta yÃ¼rek yakan tablo!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627907929/3150592_640x640.jpg"
																			 alt="Manavgat'ta yÃ¼rek yakan tablo!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/asi-olmayanlara-ekmek-verilmeyecek-denilmisti-aciklama-geldi-haberler-3150878" target="_blank"
															   title="'AÅÄ± olmayanlara ekmek verilmeyecek' denilmiÅti! AÃ§Ä±klama geldi"
															   class="gtm-tracker" data-newsPosition="7" data-newsId="8" data-newsName="'AÅÄ± olmayanlara ekmek verilmeyecek' denilmiÅti! AÃ§Ä±klama geldi" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627912988/3150878_640x640.jpg"
																			 alt="'AÅÄ± olmayanlara ekmek verilmeyecek' denilmiÅti! AÃ§Ä±klama geldi"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/genc-cift-ile-cocuklarini-ayiran-feci-kaza-3150654" target="_blank"
															   title="GenÃ§ Ã§ift ile Ã§ocuklarÄ±nÄ± ayÄ±ran feci kaza"
															   class="gtm-tracker" data-newsPosition="8" data-newsId="9" data-newsName="GenÃ§ Ã§ift ile Ã§ocuklarÄ±nÄ± ayÄ±ran feci kaza" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627908239/3150654_640x640.jpg"
																			 alt="GenÃ§ Ã§ift ile Ã§ocuklarÄ±nÄ± ayÄ±ran feci kaza"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/yargitay-dan-kiralik-arac-karari-cezalardan-kiralayan-sorumlu-3150339" target="_blank"
															   title="YargÄ±tay'dan kiralÄ±k araÃ§ kararÄ±!"
															   class="gtm-tracker" data-newsPosition="9" data-newsId="10" data-newsName="YargÄ±tay'dan kiralÄ±k araÃ§ kararÄ±!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627888755/3150339_640x640.jpg"
																			 alt="YargÄ±tay'dan kiralÄ±k araÃ§ kararÄ±!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/besledigi-keklikleri-alevler-aldi-haberler-3150668" target="_blank"
															   title="BeslediÄi keklikleri alevler aldÄ±!"
															   class="gtm-tracker" data-newsPosition="10" data-newsId="11" data-newsName="BeslediÄi keklikleri alevler aldÄ±!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627907899/3150668_640x640.jpg"
																			 alt="BeslediÄi keklikleri alevler aldÄ±!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/45-kecisi-ile-magarada-mahsur-kaldi-haberler-3150648" target="_blank"
															   title="45 keÃ§isi ile maÄarada mahsur kaldÄ±!"
															   class="gtm-tracker" data-newsPosition="11" data-newsId="12" data-newsName="45 keÃ§isi ile maÄarada mahsur kaldÄ±!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627907869/3150648_640x640.jpg"
																			 alt="45 keÃ§isi ile maÄarada mahsur kaldÄ±!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/bagirsaklari-delinerek-alindi-cocuklardan-uzak-tutun-3150774" target="_blank"
															   title="BaÄÄ±rsaklarÄ± delinerek alÄ±ndÄ±! Ãocuklardan uzak tutun
"
															   class="gtm-tracker" data-newsPosition="12" data-newsId="13" data-newsName="BaÄÄ±rsaklarÄ± delinerek alÄ±ndÄ±! Ãocuklardan uzak tutun
" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627908357/3150774_640x640.jpg"
																			 alt="BaÄÄ±rsaklarÄ± delinerek alÄ±ndÄ±! Ãocuklardan uzak tutun
"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/besiktas-ta-son-dakika-simdi-gozler-diego-costa-da-3150391-spor" target="_blank"
															   title="Åimdi gÃ¶zler Diego Costa'da!"
															   class="gtm-tracker" data-newsPosition="13" data-newsId="14" data-newsName="Åimdi gÃ¶zler Diego Costa'da!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627894037/3150391_640x640.jpg"
																			 alt="Åimdi gÃ¶zler Diego Costa'da!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/hesap-kavgasina-kurban-gitti-3150490" target="_blank"
															   title="Hesaba itiraz etti, sonrasÄ± korkunÃ§!"
															   class="gtm-tracker" data-newsPosition="14" data-newsId="15" data-newsName="Hesaba itiraz etti, sonrasÄ± korkunÃ§!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627898423/3150490_640x640.jpg"
																			 alt="Hesaba itiraz etti, sonrasÄ± korkunÃ§!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/son-dakika-haberi-filenin-sultanlari-rusya-yi-devirdi-3150397-spor" target="_blank"
															   title="Filenin SultanlarÄ±, Rusya'yÄ± devirdi"
															   class="gtm-tracker" data-newsPosition="15" data-newsId="16" data-newsName="Filenin SultanlarÄ±, Rusya'yÄ± devirdi" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627918622/3150397_640x640.jpg"
																			 alt="Filenin SultanlarÄ±, Rusya'yÄ± devirdi"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/renault-megane-sedan-i-karsan-uretecek-haberler-3150338-ekonomi" target="_blank"
															   title="BursalÄ± Megane'da Karsan dÃ¶nemi!"
															   class="gtm-tracker" data-newsPosition="16" data-newsId="17" data-newsName="BursalÄ± Megane'da Karsan dÃ¶nemi!" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627904511/3150338_640x640.jpg"
																			 alt="BursalÄ± Megane'da Karsan dÃ¶nemi!"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/tek-doz-korur-mu-bilim-kurulu-uyesi-turan-dan-kritik-asi-aciklamasi-haberler-3150647" target="_blank"
															   title="Bilim Kurulu Ãyesi Turan'dan kritik aÅÄ± aÃ§Ä±klamasÄ±"
															   class="gtm-tracker" data-newsPosition="17" data-newsId="18" data-newsName="Bilim Kurulu Ãyesi Turan'dan kritik aÅÄ± aÃ§Ä±klamasÄ±" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627902633/3150647_640x640.jpg"
																			 alt="Bilim Kurulu Ãyesi Turan'dan kritik aÅÄ± aÃ§Ä±klamasÄ±"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/son-dakika-haberi-burak-elmas-tan-morutan-aciklamasi-3150597-spor" target="_blank"
															   title="Burak Elmas'tan Morutan aÃ§Ä±klamasÄ±"
															   class="gtm-tracker" data-newsPosition="18" data-newsId="19" data-newsName="Burak Elmas'tan Morutan aÃ§Ä±klamasÄ±" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627907207/3150597_640x640.jpg"
																			 alt="Burak Elmas'tan Morutan aÃ§Ä±klamasÄ±"/>
																	</div>
																</figure>
															</a>
														</div>
																												<div class="swiper-slide">
															<a href="/temmuz-ayi-ihracat-rakamlari-aciklandi-3150441-ekonomi" target="_blank"
															   title="Ä°hracatta tarihi rekor kÄ±rÄ±ldÄ±"
															   class="gtm-tracker" data-newsPosition="19" data-newsId="20" data-newsName="Ä°hracatta tarihi rekor kÄ±rÄ±ldÄ±" data-newsVariant="box-news" data-newsList="MainSlider2" data-newsCategory="">
																<figure>
																	<div class="img">
																		<img class="swiper-lazy"
																			 data-src="https://im.haberturk.com/2021/08/02/ver1627903253/3150441_640x640.jpg"
																			 alt="Ä°hracatta tarihi rekor kÄ±rÄ±ldÄ±"/>
																	</div>
																</figure>
															</a>
														</div>
														
													<div class="swiper-slide" data-url="/kesfet">
														<a href="/kesfet" target="_blank" title="TÃ¼m ManÅetler"
														   class="gtm-tracker" data-newsposition="21" data-newsid=""
														   data-newsname="TÃ¼m ManÅetler" data-newsvariant="Slider-image"
														   data-newslist="MainSlider2" data-newscategory=""
														   data-newscollect="1">
															<figure>
																<div class="img">
																	<img
																		data-src="https://im.haberturk.com/assets/images/tummansetler_new.jpg?v=3977"
																		alt="TÃ¼m ManÅetler"
																		src="https://im.haberturk.com/assets/images/v3/transparent.gif"
																		class="main-img swiper-lazy">
																</div>
															</figure>
														</a>
													</div>
												</div>
												<div class="swiper-pagination pagination-type1"></div>
												<div class="swiper-button-prev navigation"></div>
												<div class="swiper-button-next navigation"></div>
											</div>
										</div>
																	</div>
							</div>
						</div>

						<div class="box column-4">
							<div class="box-row mb-bot-0">
								<div class="box column-12 type1">
									<div class="ad-ver-ti-se-ment adv300250">
										<div id="zone_1274" data-zone-id="1274" class="ads-zone lazy-init"></div>									</div>
								</div>
								<div class="box column-12 type1">
																		<a  href="/kubali-guresci-lopez-den-tarihi-basari-3150794-spor" target="_blank" title="Lopez'den tarihi baÅarÄ±"
													class="gtm-tracker" data-newsPosition="0" data-newsId="3150794" data-newsName="Lopez\'den tarihi baÅarÄ±" data-newsVariant="box-news-image" data-newsList="0" data-newsCategory="Spor/2020 Tokyo OlimpiyatlarÄ±">
										<figure>
											<div class="img img-16x9"><img
													src="https://im.haberturk.com/assets/images/v3/transparent.gif"
													data-htsrc="https://im.haberturk.com/2021/08/02/ver1627910166/3150794_300x169.jpg" alt="Lopez'den tarihi baÅarÄ±"/></div>
											<figcaption>
												<span
													class="category  sport ">2020 Tokyo OlimpiyatlarÄ±</span>
												<span class="title">Lopez'den tarihi baÅarÄ±</span>
											</figcaption>
										</figure>
									</a>
								</div>
							</div>
						</div>
					</div>
					<script>
                        head.ready("layout", function () {
                            var widgetWeatherForecast = document.querySelector(".widget-other-slider");
                            if (widgetWeatherForecast) {
                                var swiper = new Swiper('.widget-other-slider .slider', {
                                    slidesPerView: 1,
                                    loop: true,
                                    navigation: {
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev',
                                    },
                                    on: {
                                        init: function () {
                                            var swiper = this;
                                            var slideHover = function () {
                                                if (!swiper.pagination.bullets || swiper.pagination.bullets.length === 0) {
                                                    return setTimeout(slideHover, 200);
                                                }
                                                $(swiper.pagination.bullets).on("mouseover", function () {
                                                    swiper.slideTo($(this).attr("data-id"));
                                                });
                                            };
                                            setTimeout(slideHover, 50);
                                        },
                                    },
                                    lazy: {
                                        loadPrevNext: true
                                    },
                                    pagination: {
                                        el: '.widget-other-slider .swiper-pagination',
                                        renderBullet: function (index, className) {
                                            var realIndex = index;
                                            if (this.params.loop) {
                                                realIndex = index + 1;
                                                realIndex = realIndex > (this.slides.length - 3) ?
                                                    0 : realIndex;
                                            }
                                            var slideLink = this.slides[realIndex].querySelector("a");
                                            if (index == 20) {
                                                var buttonHtml = '<span data-id="' + (index + 1) + '" class="' + className + '">+</span>';
                                            } else {
                                                var buttonHtml = '<span data-id="' + (index + 1) + '" class="' + className + '"></span>';
                                            }
                                            if (slideLink) {
                                                buttonHtml = '<a href="' +
                                                    slideLink.getAttribute("href") + '" target="' +
                                                    slideLink.getAttribute("target") + '">' + buttonHtml + "</a>";
                                            }
                                            return buttonHtml;
                                        }
                                    }
                                });
                            }
                        });
					</script>
				</div>

				<div class="box column-12">
					<div class="widget-special-author-slider type1">
						<div class="swiper-container slider">
							<div class="swiper-wrapper">
								<div class="swiper-slide item type1">
									<a href="/yazar-ozel/murat-bardakci" title="Yazar Ãzel Murat BardakÃ§i"
									   target="_blank" class="gtm-tracker" data-newsposition="0" data-newsid="999995"
									   data-newsname="YazarOzelMuratBardakci" data-newsvariant="box-news"
									   data-newslist="YazarOzel" data-newscategory="YaÅam">
										<div class="img">
											<img alt="Yazar Ãzel Murat BardakÃ§i" class="lazy-bg-img"
												 src="https://im.haberturk.com/assets/images/v4/yazar-ozel/slider/murat-bardakci.jpg">
										</div>
									</a>
								</div>
								<div class="swiper-slide item type1">
									<a href="/rahim-ak-ile-yatirimci-rehberi" title="Yazar Ãzel Rahim Ak"
									   target="_blank" class="gtm-tracker" data-newsposition="0" data-newsid="999996"
									   data-newsname="YazarOzelRahimAk" data-newsvariant="box-news"
									   data-newslist="YazarOzel" data-newscategory="YaÅam">
										<div class="img">
											<img alt="Yazar Ãzel Rahim Ak" class="lazy-bg-img"
												 src="https://im.haberturk.com/assets/images/v4/yazar-ozel/slider/rahim-ak.jpg">
										</div>
									</a>
								</div>
								<div class="swiper-slide item type1">
									<a href="/ceyda-erenoglu-ile-saglik" title="Yazar Ãzel Ceyda ErenoÄlu"
									   target="_blank" class="gtm-tracker" data-newsposition="0" data-newsid="999997"
									   data-newsname="YazarOzelCeydaErenoglu" data-newsvariant="box-news"
									   data-newslist="YazarOzel" data-newscategory="YaÅam">
										<div class="img">
											<img alt="Yazar Ãzel Ceyda ErenoÄlu" class="lazy-bg-img"
												 src="https://im.haberturk.com/assets/images/v4/yazar-ozel/slider/ceyda-erenoglu.jpg">
										</div>
									</a>
								</div>
								<div class="swiper-slide item type1">
									<a href="/necdet-caliskan-ile-teknoloji" title="Yazar Ãzel Necdet ÃalÄ±Åkan"
									   target="_blank" class="gtm-tracker" data-newsposition="0" data-newsid="999997"
									   data-newsname="YazarOzelNecdetÃalÄ±Åkan" data-newsvariant="box-news"
									   data-newslist="YazarOzel" data-newscategory="YaÅam">
										<div class="img">
											<img alt="Yazar Ãzel Necdet ÃalÄ±Åkan" class="lazy-bg-img"
												 src="https://im.haberturk.com/assets/images/v4/yazar-ozel/slider/necdet-caliskan-1.jpg">
										</div>
									</a>
								</div>
								<div class="swiper-slide item type1">
									<a href="/ahmet-kivanc-ile-sosyal-guvenlik" title="Yazar Ãzel Ahmet KÄ±vanÃ§"
									   target="_blank" class="gtm-tracker" data-newsposition="0" data-newsid="999997"
									   data-newsname="YazarOzelAhmetKÄ±vanÃ§" data-newsvariant="box-news"
									   data-newslist="YazarOzel" data-newscategory="YaÅam">
										<div class="img">
											<img alt="Yazar Ãzel Ahmet KÄ±vanÃ§" class="lazy-bg-img"
												 src="https://im.haberturk.com/assets/images/v4/yazar-ozel/slider/ahmet-kivanc.jpg">
										</div>
									</a>
								</div>
								<div class="swiper-slide item type1">
									<a href="/esra-bogazliyan-ile-yerel-aktorler" title="Yazar Ãzel Esra BoÄazlÄ±yan"
									   target="_blank" class="gtm-tracker" data-newsposition="0" data-newsid="999997"
									   data-newsname="YazarOzelEsraBoÄazlÄ±yan" data-newsvariant="box-news"
									   data-newslist="YazarOzel" data-newscategory="YaÅam">
										<div class="img">
											<img alt="Yazar Ãzel Esra BoÄazlÄ±yan" class="lazy-bg-img"
												 src="https://im.haberturk.com/assets/images/v4/yazar-ozel/slider/esra-bogazliyan.jpg">
										</div>
									</a>
								</div>
							</div>
							<div class="navigation prev swiper-button-prev"></div>
							<div class="navigation next swiper-button-next"></div>
						</div>
					</div>
					<script>
                        head.ready("layout", function () {
                            var swiper = new Swiper('.widget-special-author-slider.type1 .swiper-container', {
                                navigation: {
                                    nextEl: '.widget-special-author-slider.type1 .swiper-button-next',
                                    prevEl: '.widget-special-author-slider.type1 .swiper-button-prev',
                                },
                                slidesPerView: "auto",
                                loop: true,
                                freeMode: true,
                                spaceBetween: 20,
                                speed: 1000,
                                autoplay: {
                                    delay: 5000,
                                    disableOnInteraction: false,
                                },
                                lazy: {
                                    loadPrevNext: true,
                                    loadPrevNextAmount: 2
                                }
                            });
                        });
					</script>
				</div>

				<div class="box column-12 mb-0">
					<div class="box-row">

						<div class="box column-3 type1">
														<a  href="/alperen-duymaz-fethiye-de-yangin-sondurme-calismalarinda-ormanimiz-yaniyor-magazin-haberleri-3150477-magazin" target="_blank" title="ÃnlÃ¼ oyuncu yangÄ±n sÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ±nda!" class="gtm-tracker" data-newsPosition="5" data-newsId="3150477" data-newsName="ÃnlÃ¼ oyuncu yangÄ±n sÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ±nda!" data-newsVariant="box-news-image" data-newsList="MansetAlti" data-newsCategory="Magazin/Fiskos">
								<figure>
									<div class="img img-1x1-4"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627897382/3150477_300x300.jpg" alt="ÃnlÃ¼ oyuncu yangÄ±n sÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ±nda!"/></div>
									<figcaption>
										<span class="category  magazine ">Fiskos</span>
										<span class="title">ÃnlÃ¼ oyuncu yangÄ±n sÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ±nda!</span>
									</figcaption>
								</figure>
							</a>
													</div>

						<div class="box column-3 type1">
														<a  href="/can-yaman-a-tolga-gulec-ten-buyuk-tepki-su-dunyaya-bir-katkin-olsun-magazin-haberleri-3150371-magazin" target="_blank" title="&quot;Åu dÃ¼nyaya bir katkÄ±n olsun!&quot;" class="gtm-tracker" data-newsPosition="6" data-newsId="3150371" data-newsName="&quot;Åu dÃ¼nyaya bir katkÄ±n olsun!&quot;" data-newsVariant="box-news-image" data-newsList="MansetAlti" data-newsCategory="Magazin">
								<figure>
									<div class="img img-1x1-4"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627893279/3150371_300x300.jpg" alt="&quot;Åu dÃ¼nyaya bir katkÄ±n olsun!&quot;"/></div>
									<figcaption>
										<span class="category  magazine ">Magazin</span>
										<span class="title">"Åu dÃ¼nyaya bir katkÄ±n olsun!"</span>
									</figcaption>
								</figure>
							</a>
						</div>

						<div class="box column-3 type1">
														<a  href="/trabzonspor-molde-fk-maci-hazirliklarini-surdurdu-3151126-spor" target="_blank" title="Trabzonspor'da Molde maÃ§Ä± hazÄ±rlÄ±klarÄ±" class="gtm-tracker" data-newsPosition="7" data-newsId="3151126" data-newsName="Trabzonspor\'da Molde maÃ§Ä± hazÄ±rlÄ±klarÄ±" data-newsVariant="box-news-image" data-newsList="MansetAlti" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Trabzonspor">
								<figure>
									<div class="img img-1x1-4"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627930173/3151126_300x300.jpg" alt="Trabzonspor'da Molde maÃ§Ä± hazÄ±rlÄ±klarÄ±"/>
									</div>
									<figcaption>
										<span class="category  sport ">Futbol</span>
										<span class="title">Trabzonspor'da Molde maÃ§Ä± hazÄ±rlÄ±klarÄ±</span>
									</figcaption>
								</figure>
							</a>
													</div>

						<div class="box column-3 type1">
														<a  href="/galatasaray-sportif-as-de-gorev-dagilimi-yapildi-3151227-spor" target="_blank" title=" Sportif AÅ'de gÃ¶rev daÄÄ±lÄ±mÄ± yapÄ±ldÄ±" class="gtm-tracker" data-newsPosition="8" data-newsId="3151227" data-newsName="Sportif AÅ\'de gÃ¶rev daÄÄ±lÄ±mÄ± yapÄ±ldÄ±" data-newsVariant="box-news-image" data-newsList="MansetAlti" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Galatasaray">
								<figure>
									<div class="img img-1x1-4"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627935947/3151227_300x300.jpg" alt="Sportif AÅ'de gÃ¶rev daÄÄ±lÄ±mÄ± yapÄ±ldÄ±"/>
									</div>
									<figcaption>
										<span class="category  sport ">Futbol</span>
										<span class="title">Sportif AÅ'de gÃ¶rev daÄÄ±lÄ±mÄ± yapÄ±ldÄ±</span>
									</figcaption>
								</figure>
							</a>
													</div>

					</div>
				</div>
			</div>

		</div>


		<div class="box column-4 type1" id="EkonomiFinans">

			<div class="box column-12 categoryType">

				<h2 class="economy"><a href="/ekonomi">EKONOMÄ° FÄ°NANS</a></h2>

				<div class="box column-12 type1">
										<a  href="/dolarda-son-durum-3151333-ekonomi" target="_blank" title="Dolar gÃ¼ne nasÄ±l baÅladÄ±?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151333" data-newsName="Dolar gÃ¼ne nasÄ±l baÅladÄ±?" data-newsVariant="box-news-image" data-newsList="EkonomiFinans" data-newsCategory="Ekonomi/DÃ¶viz">
						<figure>
							<div class="img img-16x9"><img
									src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/03/ver1627969031/3151333_300x169.jpg" alt="Dolar gÃ¼ne nasÄ±l baÅladÄ±?"/></div>
							<figcaption>
								<span class="category  economy ">DÃ¶viz</span>
								<span class="title">Dolar gÃ¼ne nasÄ±l baÅladÄ±?</span>
							</figcaption>
						</figure>
					</a>
									</div>

				<div class="box column-12 two">
					<div class="box-row">
						<!-- left -->
						<div class="box column-6 type1">
														<a  href="/bitcoin-fiyati-dusmeye-devam-ediyor-3151336-ekonomi" target="_blank" title="Bitcoin'de dÃ¼ÅÃ¼Å sÃ¼rÃ¼yor" class="gtm-tracker" data-newsPosition="1" data-newsId="3151336" data-newsName="Bitcoin\'de dÃ¼ÅÃ¼Å sÃ¼rÃ¼yor" data-newsVariant="box-news-image" data-newsList="EkonomiFinans" data-newsCategory="Ekonomi/Kripto Para">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/03/ver1627968717/3151336_200x240.jpg" alt="Bitcoin'de dÃ¼ÅÃ¼Å sÃ¼rÃ¼yor"/></div>
									<figcaption>
										<span class="category  economy ">Kripto Para</span>
										<span class="title">Bitcoin'de dÃ¼ÅÃ¼Å sÃ¼rÃ¼yor</span>
									</figcaption>
								</figure>
							</a>
													</div>
						<!-- right -->
						<div class="box column-6 type1">
														<a  href="/altinda-hafif-gerileme-3151342-ekonomi" target="_blank" title="AltÄ±nda gÃ¶zler kritik seviyede" class="gtm-tracker" data-newsPosition="2" data-newsId="3151342" data-newsName="AltÄ±nda gÃ¶zler kritik seviyede" data-newsVariant="box-news-image" data-newsList="EkonomiFinans" data-newsCategory="Ekonomi/AltÄ±n">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/03/ver1627969894/3151342_200x240.jpg" alt="AltÄ±nda gÃ¶zler kritik seviyede"/></div>
									<figcaption>
										<span class="category  economy ">AltÄ±n</span>
										<span class="title">AltÄ±nda gÃ¶zler kritik seviyede</span>
									</figcaption>
								</figure>
							</a>
													</div>
					</div>
				</div>

			</div>
		</div>

		<div class="box column-4 type1 ads-index-99" id="EkonomiFinansYani">
			<div class="box-row">
				<div class="box column-12 two">
					<div class="box-row">
						<!-- left -->
						<div class="box column-6 type1">
														<a  href="/esra-dermancioglu-nun-kizi-refia-dermancioglu-koronaviruse-yakalandi-magazin-haberleri-3150328-magazin" target="_blank" title="&quot;AyrÄ± odalardan yazÄ±ÅÄ±yoruz!&quot;" class="gtm-tracker" data-newsPosition="0" data-newsId="3150328" data-newsName="&quot;AyrÄ± odalardan yazÄ±ÅÄ±yoruz!&quot;" data-newsVariant="box-news-image" data-newsList="EkonomiFinansYani" data-newsCategory="Magazin/Fiskos">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627887350/3150328_200x240.jpg" alt="&quot;AyrÄ± odalardan yazÄ±ÅÄ±yoruz!&quot;"/></div>
									<figcaption>
										<span class="category  magazine ">Fiskos</span>
										<span class="title">"AyrÄ± odalardan yazÄ±ÅÄ±yoruz!"</span>
									</figcaption>
								</figure>
							</a>
													</div>
						<!-- right -->
						<div class="box column-6 type1">
														<a  href="/camila-cabello-bizler-gercek-kadinlariz-magazin-haberleri-3150374-magazin" target="_blank" title="&quot;Bizler gerÃ§ek kadÄ±nlarÄ±z!&quot;" class="gtm-tracker" data-newsPosition="1" data-newsId="3150374" data-newsName="&quot;Bizler gerÃ§ek kadÄ±nlarÄ±z!&quot;" data-newsVariant="box-news-image" data-newsList="EkonomiFinansYani" data-newsCategory="Magazin/DÃ¼nyadan">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627891451/3150374_200x240.jpg" alt="&quot;Bizler gerÃ§ek kadÄ±nlarÄ±z!&quot;"/></div>
									<figcaption>
										<span class="category  magazine ">DÃ¼nyadan</span>
										<span class="title">"Bizler gerÃ§ek kadÄ±nlarÄ±z!"</span>
									</figcaption>
								</figure>
							</a>
													</div>
					</div>
				</div>
			</div>
		</div>

		<div class="box column-4 type1">
			<img class="lazyload-image lzldcntrtp" width="1" height="1"
				 data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif"
				 onload="CbgSliders.mainSliderPopcorn('.technology-popcorn-slider')" onerror=""/>
			<div class="widget-popcorn widget widget-popcorn-TypeTechnology technology-popcorn-slider"
				 id="TeknolojiDunyasiWidget">
				<div class="head special-a-d-v">
					<a href="/ekonomi/teknoloji" class="gtm-tracker" data-newsvariant="TeknolojiDunyasiWidget"
					   target="_blank" title="Teknoloji DÃ¼nyasÄ±">
						<div class="title headTitleType">
							TEKNOLOJÄ° DÃNYASI
						</div>
					</a>
					<script>
                        head.ready("layout", function () {
                            $(document).on("mouseover", '.widget-popcorn-TypeTechnology .special-a-d-v img', function () {
                                $.post("https://adsp.haberturk.com/advertpro/servlet/click/media?mid=23456&pid=0&lookup=true&position=1&date=(date)&uuid=(email)", function (data) {
                                });
                            });
                        });
					</script>
				</div>
				<div class="content">
					<div class="swiper-container slider">
						<div class="swiper-wrapper">
							<!--item-->
															<div class="swiper-slide">
									<a  href="/iste-online-orman-yanginlari-son-durum-haritalari-haberler-3148055-teknoloji" target="_blank" title="Online haritalar da alev alev!"
													class="gtm-tracker" data-newsPosition="0" data-newsId="3148055" data-newsName="Online haritalar da alev alev!" data-newsVariant="box-news-image" data-newsList="TeknolojiDunyasiWidget" data-newsCategory="Ekonomi/Teknoloji/Ä°nternet">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/30/ver1627648670/3148055_300x169.jpg"
																				   alt="Online haritalar da alev alev!"/></div>
											<figcaption>
												<span class="title">Online haritalar da alev alev!</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
															<div class="swiper-slide">
									<a  href="/siber-suclular-olimpiyat-oyunlarinda-bu-5-yontemi-kullaniyor-haberler-3147885-teknoloji" target="_blank" title="Olimpiyatlarâda kurulan 5 siber tuzak"
													class="gtm-tracker" data-newsPosition="1" data-newsId="3147885" data-newsName="Olimpiyatlarâda kurulan 5 siber tuzak" data-newsVariant="box-news-image" data-newsList="TeknolojiDunyasiWidget" data-newsCategory="Ekonomi/Teknoloji/BiliÅim">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/30/ver1627638805/3147885_300x169.jpg"
																				   alt="Olimpiyatlarâda kurulan 5 siber tuzak"/></div>
											<figcaption>
												<span class="title">Olimpiyatlarâda kurulan 5 siber tuzak</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
															<div class="swiper-slide">
									<a  href="/facebook-tan-manavgat-icin-guvenlik-durumu-kontrolu-ozelligi-haberler-3147805-teknoloji" target="_blank" title="Facebook da TÃ¼rkiyeâdeki yangÄ±nlar iÃ§in harekete geÃ§ti"
													class="gtm-tracker" data-newsPosition="2" data-newsId="3147805" data-newsName="Facebook da TÃ¼rkiyeâdeki yangÄ±nlar iÃ§in harekete geÃ§ti" data-newsVariant="box-news-image" data-newsList="TeknolojiDunyasiWidget" data-newsCategory="Ekonomi/Teknoloji/Sosyal Medya">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/30/ver1627635664/3147805_300x169.jpg"
																				   alt="Facebook da TÃ¼rkiyeâdeki yangÄ±nlar iÃ§in harekete geÃ§ti"/></div>
											<figcaption>
												<span class="title">Facebook da TÃ¼rkiyeâdeki yangÄ±nlar iÃ§in harekete geÃ§ti</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
															<div class="swiper-slide">
									<a  href="/iphone-larin-guvenligi-icin-kritik-olan-ios-14-7-1-yayinladi-haberler-3145985-teknoloji" target="_blank" title="iPhone kullananlara kritik uyarÄ±!"
													class="gtm-tracker" data-newsPosition="3" data-newsId="3145985" data-newsName="iPhone kullananlara kritik uyarÄ±!" data-newsVariant="box-news-image" data-newsList="TeknolojiDunyasiWidget" data-newsCategory="Ekonomi/Teknoloji">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/28/ver1627481243/3145985_300x169.jpg"
																				   alt="iPhone kullananlara kritik uyarÄ±!"/></div>
											<figcaption>
												<span class="title">iPhone kullananlara kritik uyarÄ±!</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
															<div class="swiper-slide">
									<a  href="/facebook-ofise-donecek-calisanlarin-asi-yaptirmasi-gerektigini-acikladi-3146491-teknoloji" target="_blank" title="Ofise dÃ¶nmek iÃ§in aÅÄ± Åart"
													class="gtm-tracker" data-newsPosition="4" data-newsId="3146491" data-newsName="Ofise dÃ¶nmek iÃ§in aÅÄ± Åart" data-newsVariant="box-news-image" data-newsList="TeknolojiDunyasiWidget" data-newsCategory="Ekonomi/Teknoloji">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/29/ver1627552524/3146491_300x169.jpg"
																				   alt="Ofise dÃ¶nmek iÃ§in aÅÄ± Åart"/></div>
											<figcaption>
												<span class="title">Ofise dÃ¶nmek iÃ§in aÅÄ± Åart</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
							

						</div>
						<!-- Pagination & Navigation -->
						<ul class="indicator type1 bottom">
							<li>
								<div class="swiper-button-prev navigation"></div>
							</li>
							<li>
								<div class="swiper-pagination pagination"></div>
							</li>
							<li>
								<div class="swiper-button-next navigation"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<img class="lazyload-image lzldcntrft" width="1" height="1"
				 data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif"
				 onload="CbgSliders.mainSliderPopcorn('.technology-popcorn-slider')" onerror=""/>
		</div>

		<div class="box column-4 type1 enzone">
			<img class="lazyload-image lzldcntrtp" width="1" height="1"
				 data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif"
				 onload="CbgSliders.mainSliderPopcorn('.widget-sosyalguvenlik')" onerror=""/>
			<div class="widget-sosyalguvenlik widget-popcorn widget widget-popcorn-TypeTechnology"
				 id="SosyalGuvenlikWidget">
				<div class="head">
					<a href="/ekonomi/sosyal-guvenlik" class="gtm-tracker" data-newsvariant="SosyalGuvenlikWidget"
					   target="_blank" title="Sosyal GÃ¼venlik">
						<div class="title headTitleType">SOSYAL GÃVENLÄ°K</div>
					</a>
				</div>
				<div class="content">
					<div class="swiper-container slider">
						<div class="swiper-wrapper">
							<!--item-->
															<div class="swiper-slide">
									<a  href="/son-dakika-haberi-memur-sen-in-zam-talebi-belli-oldu-3143488-ekonomi" target="_blank" title="Memur-Sen'in zam talebi belli oldu"
													class="gtm-tracker" data-newsPosition="0" data-newsId="3143488" data-newsName="Memur-Sen\'in zam talebi belli oldu" data-newsVariant="box-news-image" data-newsList="SosyalGuvenlikWidget" data-newsCategory="Ekonomi/Sosyal GÃ¼venlik/Memur">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/26/ver1627287497/3143488_300x169.jpg"
																				   alt="Memur-Sen'in zam talebi belli oldu"/></div>
											<figcaption>
												<span class="title">Memur-Sen'in zam talebi belli oldu</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
															<div class="swiper-slide">
									<a  href="/sendikali-isci-sayisi-2-milyonu-asti-3147702-ekonomi" target="_blank" title="SendikalÄ± iÅÃ§i sayÄ±sÄ± 2 milyonu aÅtÄ±"
													class="gtm-tracker" data-newsPosition="1" data-newsId="3147702" data-newsName="SendikalÄ± iÅÃ§i sayÄ±sÄ± 2 milyonu aÅtÄ±" data-newsVariant="box-news-image" data-newsList="SosyalGuvenlikWidget" data-newsCategory="Ekonomi/Sosyal GÃ¼venlik/Ä°ÅÃ§i">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/30/ver1627631763/3147702_300x169.jpg"
																				   alt="SendikalÄ± iÅÃ§i sayÄ±sÄ± 2 milyonu aÅtÄ±"/></div>
											<figcaption>
												<span class="title">SendikalÄ± iÅÃ§i sayÄ±sÄ± 2 milyonu aÅtÄ±</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
															<div class="swiper-slide">
									<a  href="/son-dakika-kidem-tazminati-dovizle-odenebilecek-haberler-3139278-ekonomi" target="_blank" title="YargÄ±tay'dan flaÅ tazminat kararÄ±"
													class="gtm-tracker" data-newsPosition="2" data-newsId="3139278" data-newsName="YargÄ±tay\'dan flaÅ tazminat kararÄ±" data-newsVariant="box-news-image" data-newsList="SosyalGuvenlikWidget" data-newsCategory="Ekonomi/Sosyal GÃ¼venlik/Ä°ÅÃ§i">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/20/ver1626774383/3139278_300x169.jpg"
																				   alt="YargÄ±tay'dan flaÅ tazminat kararÄ±"/></div>
											<figcaption>
												<span class="title">YargÄ±tay'dan flaÅ tazminat kararÄ±</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
															<div class="swiper-slide">
									<a  href="/memur-ve-memur-emeklisinin-zam-pazarligi-basliyor-3137480-ekonomi" target="_blank" title="Zam pazarlÄ±ÄÄ± baÅlÄ±yor"
													class="gtm-tracker" data-newsPosition="3" data-newsId="3137480" data-newsName="Zam pazarlÄ±ÄÄ± baÅlÄ±yor" data-newsVariant="box-news-image" data-newsList="SosyalGuvenlikWidget" data-newsCategory="Ekonomi/Sosyal GÃ¼venlik/Memur">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/18/ver1626597596/3137480_300x169.jpg"
																				   alt="Zam pazarlÄ±ÄÄ± baÅlÄ±yor"/></div>
											<figcaption>
												<span class="title">Zam pazarlÄ±ÄÄ± baÅlÄ±yor</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
															<div class="swiper-slide">
									<a  href="/calisma-ve-sosyal-guvenlik-bakanligi-asgari-ucret-destegi-surecek-3137427-ekonomi" target="_blank" title="Asgari Ã¼cret desteÄi 2021'de de sÃ¼recek"
													class="gtm-tracker" data-newsPosition="4" data-newsId="3137427" data-newsName="Asgari Ã¼cret desteÄi 2021\'de de sÃ¼recek" data-newsVariant="box-news-image" data-newsList="SosyalGuvenlikWidget" data-newsCategory="Ekonomi/Sosyal GÃ¼venlik/Ä°ÅÃ§i">
										<figure>
											<div class="img img-16x9"><img class="swiper-lazy"
																				   data-src="https://im.haberturk.com/2021/07/18/ver1626600186/3137427_300x169.jpg"
																				   alt="Asgari Ã¼cret desteÄi 2021'de de sÃ¼recek"/></div>
											<figcaption>
												<span class="title">Asgari Ã¼cret desteÄi 2021'de de sÃ¼recek</span>
												<!--  <span class="description"></span> -->
											</figcaption>
										</figure>
									</a>
								</div>
							

						</div>
						<!-- Pagination & Navigation -->
						<ul class="indicator type1 bottom">
							<li>
								<div class="swiper-button-prev navigation"></div>
							</li>
							<li>
								<div class="swiper-pagination pagination"></div>
							</li>
							<li>
								<div class="swiper-button-next navigation"></div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<img class="lazyload-image lzldcntrft" width="1" height="1"
				 data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif"
				 onload="CbgSliders.mainSliderPopcorn('.widget-sosyalguvenlik')" onerror=""/>

		</div>

		<div class="box column-4 type1" id="SosyalGuvenlikYani">

			<div class="box-row">
				<div class="box column-12 two">
					<div class="box-row">
						<!-- left -->
						<div class="box column-6 type1">
														<a  href="/serdar-dursun-baba-oldu-3151231-spor" target="_blank" title="Serdar Dursun baba oldu" class="gtm-tracker" data-newsPosition="0" data-newsId="3151231" data-newsName="Serdar Dursun baba oldu" data-newsVariant="box-news-image" data-newsList="SosyalGuvenlikYani" data-newsCategory="Spor/Futbol/SÃ¼per Lig/FenerbahÃ§e">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627936114/3151231_200x240.jpg" alt="Serdar Dursun baba oldu"/></div>
									<figcaption>
										<span class="category  sport ">Futbol</span>
										<span class="title">Serdar Dursun baba oldu</span>
									</figcaption>
								</figure>
							</a>
						</div>
						<!-- right -->
						<div class="box column-6 type1">
														<a  href="/menemensporlu-domgjoni-isvicre-temsilcisi-luzern-e-transfer-oldu-3151212-spor" target="_blank" title="Menemensporlu Domgjoni Luzern'in yolunu tuttu " class="gtm-tracker" data-newsPosition="1" data-newsId="3151212" data-newsName="Menemensporlu Domgjoni Luzern\'in yolunu tuttu" data-newsVariant="box-news-image" data-newsList="SosyalGuvenlikYani" data-newsCategory="Spor/Futbol/1. Lig/Menemen Bld.">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627934765/3151212_200x240.jpg" alt="Menemensporlu Domgjoni Luzern'in yolunu tuttu "/></div>
									<figcaption>
										<span class="category  sport ">Futbol</span>
										<span class="title">Menemensporlu Domgjoni Luzern'in yolunu tuttu </span>
									</figcaption>
								</figure>
							</a>
						</div>
					</div>
				</div>
			</div>


		</div>


					<div class="box column-12">
				<div class="box-row">
					<div class="box column-12">
						<div class="widget-show-news-slider type1">
							<div class="left">
								<div class="logo">
									<img
										src="https://im.haberturk.com/assets/images/v4/show-news/show-news-logo.png"/>
								</div>
							</div>
							<div class="right">
								<div class="swiper-container slider">
									<div class="swiper-wrapper">

																					<div class="swiper-slide item">
												<a  href="/dgs-2021-taban-puanlari-ve-tavan-puanlari-nedir-2021-dgs-sozel-ve-sayisal-kontenjanlari-3138472" target="_blank" title="2021 DGS kontenjanlarÄ± belli oldu!"
																class="gtm-tracker" data-newsPosition="0" data-newsId="3138472" data-newsName="2021 DGS kontenjanlarÄ± belli oldu!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/07/19/ver1626852021/3138472_300x169.jpg"
																							   alt="2021 DGS kontenjanlarÄ± belli oldu!"/>
														</div>
														<figcaption>
															<span class="title">2021 DGS kontenjanlarÄ± belli oldu!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/herkesin-gozu-onunde-annesini-darbeden-sahis-tutuklandi-3132554" target="_blank" title="
VicdansÄ±z evlat annesini darbetti!"
																class="gtm-tracker" data-newsPosition="1" data-newsId="3132554" data-newsName="VicdansÄ±z evlat annesini darbetti!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem/3. Sayfa">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/07/13/ver1626200242/3132554_300x169.jpg"
																							   alt="
VicdansÄ±z evlat annesini darbetti!"/>
														</div>
														<figcaption>
															<span class="title">
VicdansÄ±z evlat annesini darbetti!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/oglunu-oz-babasindan-korumak-isterken-hayatini-kaybetti-3132547" target="_blank" title="ÃocuÄunu korurken canÄ±nÄ± verdi"
																class="gtm-tracker" data-newsPosition="2" data-newsId="3132547" data-newsName="ÃocuÄunu korurken canÄ±nÄ± verdi" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem/3. Sayfa">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/07/13/ver1626199698/3132547_300x169.jpg"
																							   alt="ÃocuÄunu korurken canÄ±nÄ± verdi"/>
														</div>
														<figcaption>
															<span class="title">ÃocuÄunu korurken canÄ±nÄ± verdi</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/8-5-yasindaki-kucuk-kagan-bademcik-ameliyatindan-hayatini-kaybetti-3126535" target="_blank" title="Bademcik ameliyatÄ±ndan sonra Ã¶ldÃ¼!
"
																class="gtm-tracker" data-newsPosition="3" data-newsId="3126535" data-newsName="Bademcik ameliyatÄ±ndan sonra Ã¶ldÃ¼!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem/3. Sayfa">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/07/07/ver1625682980/3126535_300x169.jpg"
																							   alt="Bademcik ameliyatÄ±ndan sonra Ã¶ldÃ¼!
"/>
														</div>
														<figcaption>
															<span class="title">Bademcik ameliyatÄ±ndan sonra Ã¶ldÃ¼!
</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/alisverise-giderek-aracin-bagajinda-unuttugu-kopek-havasizliktan-can-verdi-3126549" target="_blank" title="KÃ¶peÄi unutun AVM'ye gitti!"
																class="gtm-tracker" data-newsPosition="4" data-newsId="3126549" data-newsName="KÃ¶peÄi unutun AVM\'ye gitti!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/07/07/ver1625683971/3126549_300x169.jpg"
																							   alt="KÃ¶peÄi unutun AVM'ye gitti!"/>
														</div>
														<figcaption>
															<span class="title">KÃ¶peÄi unutun AVM'ye gitti!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/mustakbel-esinin-gozluk-kullandigini-ogrenen-kadin-evlilikten-vazgecti-3118189" target="_blank" title="GÃ¶zlÃ¼k kullanÄ±yor diye evlenmedi!"
																class="gtm-tracker" data-newsPosition="5" data-newsId="3118189" data-newsName="GÃ¶zlÃ¼k kullanÄ±yor diye evlenmedi!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="DÃ¼nya">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/28/ver1624904756/3118189_300x169.jpg"
																							   alt="GÃ¶zlÃ¼k kullanÄ±yor diye evlenmedi!"/>
														</div>
														<figcaption>
															<span class="title">GÃ¶zlÃ¼k kullanÄ±yor diye evlenmedi!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/alkollu-kadin-surucu-bir-arabayi-bir-arabayi-maddi-hasara-ugratirken-bir-kisiyi-de-canindan-ediyordu-3118204" target="_blank" title="Otoparkta terÃ¶r estirdi!"
																class="gtm-tracker" data-newsPosition="6" data-newsId="3118204" data-newsName="Otoparkta terÃ¶r estirdi!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/28/ver1624905558/3118204_300x169.jpg"
																							   alt="Otoparkta terÃ¶r estirdi!"/>
														</div>
														<figcaption>
															<span class="title">Otoparkta terÃ¶r estirdi!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/ayse-comert-internetten-100-tl-lik-hgs-yukledi-ancak-gelen-fatura-soke-etti-3113356" target="_blank" title="Ä°nternetteki tuzaÄa yakalandÄ±"
																class="gtm-tracker" data-newsPosition="7" data-newsId="3113356" data-newsName="Ä°nternetteki tuzaÄa yakalandÄ±" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem/3. Sayfa">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/23/ver1624470504/3113356_300x169.jpg"
																							   alt="Ä°nternetteki tuzaÄa yakalandÄ±"/>
														</div>
														<figcaption>
															<span class="title">Ä°nternetteki tuzaÄa yakalandÄ±</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/ekmeginin-pesinde-gorevinin-basindaki-muhabirlere-basin-emekcilerine-saldirilar-bitmek-bilmiyor-3113360" target="_blank" title="Ãekim yapan muhabire saldÄ±rÄ±"
																class="gtm-tracker" data-newsPosition="8" data-newsId="3113360" data-newsName="Ãekim yapan muhabire saldÄ±rÄ±" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/23/ver1624471174/3113360_300x169.jpg"
																							   alt="Ãekim yapan muhabire saldÄ±rÄ±"/>
														</div>
														<figcaption>
															<span class="title">Ãekim yapan muhabire saldÄ±rÄ±</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/kagithane-deki-vatandaslar-kopru-uzerinden-5-dakikada-karsiya-gececekleri-yerde-yarim-saat-dolasiyor-3107532" target="_blank" title="Mahallelinin kÃ¶prÃ¼ isyanÄ±!"
																class="gtm-tracker" data-newsPosition="9" data-newsId="3107532" data-newsName="Mahallelinin kÃ¶prÃ¼ isyanÄ±!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem/Ä°stanbul">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/17/ver1623957455/3107532_300x169.jpg"
																							   alt="Mahallelinin kÃ¶prÃ¼ isyanÄ±!"/>
														</div>
														<figcaption>
															<span class="title">Mahallelinin kÃ¶prÃ¼ isyanÄ±!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/komsularin-arasinda-sozlu-tartisma-bir-anda-meydan-savasina-dondu-3107515" target="_blank" title="Meydan savaÅÄ± deÄil park kavgasÄ±!"
																class="gtm-tracker" data-newsPosition="10" data-newsId="3107515" data-newsName="Meydan savaÅÄ± deÄil park kavgasÄ±!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem/Ä°stanbul">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/17/ver1623954418/3107515_300x169.jpg"
																							   alt="Meydan savaÅÄ± deÄil park kavgasÄ±!"/>
														</div>
														<figcaption>
															<span class="title">Meydan savaÅÄ± deÄil park kavgasÄ±!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/metrobuste-taciz-ettigi-kadini-oldurmekle-tehdit-etti-3105332" target="_blank" title="GenÃ§ kadÄ±nÄ± hem taciz hem de tehdit etti
"
																class="gtm-tracker" data-newsPosition="11" data-newsId="3105332" data-newsName="GenÃ§ kadÄ±nÄ± hem taciz hem de tehdit etti" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/15/ver1623781267/3105332_300x169.jpg"
																							   alt="GenÃ§ kadÄ±nÄ± hem taciz hem de tehdit etti
"/>
														</div>
														<figcaption>
															<span class="title">GenÃ§ kadÄ±nÄ± hem taciz hem de tehdit etti
</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/beden-ogretmeni-olan-banu-sencer-in-at-sevgisi-ona-yeni-bir-dunyanin-kapilarini-acti-3105312" target="_blank" title="At sevgisi ona yeni bir meslek kazandÄ±rdÄ±"
																class="gtm-tracker" data-newsPosition="12" data-newsId="3105312" data-newsName="At sevgisi ona yeni bir meslek kazandÄ±rdÄ±" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/15/ver1623780656/3105312_300x169.jpg"
																							   alt="At sevgisi ona yeni bir meslek kazandÄ±rdÄ±"/>
														</div>
														<figcaption>
															<span class="title">At sevgisi ona yeni bir meslek kazandÄ±rdÄ±</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/damla-babasina-carpip-olduren-surucunun-ceza-almamasina-isyan-ediyor-3100526" target="_blank" title="Damla adalet arÄ±yor"
																class="gtm-tracker" data-newsPosition="13" data-newsId="3100526" data-newsName="Damla adalet arÄ±yor" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem/3. Sayfa">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/10/ver1623348176/3100526_300x169.jpg"
																							   alt="Damla adalet arÄ±yor"/>
														</div>
														<figcaption>
															<span class="title">Damla adalet arÄ±yor</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/istanbul-daki-oto-galericiye-kes-yapistir-arac-sattilar-3099408" target="_blank" title="ArkasÄ± 2016 Ã¶nÃ¼ 2014 model!"
																class="gtm-tracker" data-newsPosition="14" data-newsId="3099408" data-newsName="ArkasÄ± 2016 Ã¶nÃ¼ 2014 model!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem/3. Sayfa">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/09/ver1623267410/3099408_300x169.jpg"
																							   alt="ArkasÄ± 2016 Ã¶nÃ¼ 2014 model!"/>
														</div>
														<figcaption>
															<span class="title">ArkasÄ± 2016 Ã¶nÃ¼ 2014 model!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/sancaktepe-deki-insaat-temeli-adeta-olum-goletine-donustu-3099368" target="_blank" title="Ä°nÅaat deÄil Ã¶lÃ¼m havuzu"
																class="gtm-tracker" data-newsPosition="15" data-newsId="3099368" data-newsName="Ä°nÅaat deÄil Ã¶lÃ¼m havuzu" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/09/ver1623263120/3099368_300x169.jpg"
																							   alt="Ä°nÅaat deÄil Ã¶lÃ¼m havuzu"/>
														</div>
														<figcaption>
															<span class="title">Ä°nÅaat deÄil Ã¶lÃ¼m havuzu</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/bakir-ailesi-nin-vazgecilmezi-haline-gelen-3-aylik-kuzu-gorenleri-sasirtiyor-3098273" target="_blank" title="O nereye, kuzusu oraya!"
																class="gtm-tracker" data-newsPosition="16" data-newsId="3098273" data-newsName="O nereye, kuzusu oraya!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/08/ver1623182075/3098273_300x169.jpg"
																							   alt="O nereye, kuzusu oraya!"/>
														</div>
														<figcaption>
															<span class="title">O nereye, kuzusu oraya!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/sariyer-deki-hirsiz-magazada-bulunan-degerli-cantayi-alip-kayboldu-3098260" target="_blank" title="250 bin liralÄ±k Ã§antayÄ± kaptÄ± kaÃ§tÄ±!"
																class="gtm-tracker" data-newsPosition="17" data-newsId="3098260" data-newsName="250 bin liralÄ±k Ã§antayÄ± kaptÄ± kaÃ§tÄ±!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/08/ver1623178980/3098260_300x169.jpg"
																							   alt="250 bin liralÄ±k Ã§antayÄ± kaptÄ± kaÃ§tÄ±!"/>
														</div>
														<figcaption>
															<span class="title">250 bin liralÄ±k Ã§antayÄ± kaptÄ± kaÃ§tÄ±!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/kina-gecelerinin-yasaklanmasi-esnafi-zor-duruma-dusurdu-3097213" target="_blank" title="EsnafÄ±n kÄ±na isyanÄ±!"
																class="gtm-tracker" data-newsPosition="18" data-newsId="3097213" data-newsName="EsnafÄ±n kÄ±na isyanÄ±!" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/07/ver1623098171/3097213_300x169.jpg"
																							   alt="EsnafÄ±n kÄ±na isyanÄ±!"/>
														</div>
														<figcaption>
															<span class="title">EsnafÄ±n kÄ±na isyanÄ±!</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide item">
												<a  href="/midesinde-96-adet-uyusturucu-kapsul-bulundu-3097191" target="_blank" title="400 bin liralÄ±k uyuÅturucu yuttu"
																class="gtm-tracker" data-newsPosition="19" data-newsId="3097191" data-newsName="400 bin liralÄ±k uyuÅturucu yuttu" data-newsVariant="box-news-image" data-newsList="ShowHaberWidget" data-newsCategory="GÃ¼ndem/3. Sayfa">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/06/07/ver1623095491/3097191_300x169.jpg"
																							   alt="400 bin liralÄ±k uyuÅturucu yuttu"/>
														</div>
														<figcaption>
															<span class="title">400 bin liralÄ±k uyuÅturucu yuttu</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
										

									</div>
								</div>
								<div class="swiper-pagination pagination-type1"></div>
								<div class="swiper-button-prev navigation-type1 prev"></div>
								<div class="swiper-button-next navigation-type1 next"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<script>
                head.ready("layout", function () {
                    var swiper = new Swiper('.widget-show-news-slider.type1 .slider', {
                        slidesPerView: 4,
                        spaceBetween: 15,
                        freeMode: true,
                        pagination: {
                            el: '.widget-show-news-slider.type1 .swiper-pagination',
                            clickable: true,
                        },
                        navigation: {
                            nextEl: '.widget-show-news-slider.type1 .swiper-button-next',
                            prevEl: '.widget-show-news-slider.type1 .swiper-button-prev',
                        },
                        lazy: true,
                    });
                });
			</script>

		

		<div class="box column-4 type1">
			<div class="box-row">


				<div class="box column-12 type1" id="BulmacaAkilOyunlariDesk">

					<div class="widget-crossword widget heightTypeAuto type1">
						<div class="content">
							<a href="/yenimedya/akil-oyunlari" title="AkÄ±l OyunlarÄ±" target="_blank" class="gtm-tracker"
							   data-newsposition="0" data-newsid="999992" data-newsname="AkÄ±l OyunlarÄ± Desktop"
							   data-newsvariant="box-news" data-newslist="BulmacaAkilOyunlariDesk"
							   data-newscategory="YaÅam">
								<img class=""
									 src="https://im.haberturk.com/assets/images/v3/transparent.gif"
									 data-htsrc="https://im.haberturk.com/assets/images/bulmaca/ht-akil-oyunlari.png"
									 alt="AkÄ±l OyunlarÄ±">
							</a>
							<a href="/bulmaca" title="HT Bulmaca" target="_blank" class="gtm-tracker"
							   data-newsposition="0" data-newsid="999991" data-newsname="Bulmaca Desktop"
							   data-newsvariant="box-news" data-newslist="BulmacaAkilOyunlariDesk"
							   data-newscategory="YaÅam">
								<img class=""
									 src="https://im.haberturk.com/assets/images/v3/transparent.gif"
									 data-htsrc="https://im.haberturk.com/assets/images/bulmaca/ht-bulmaca.png"
									 alt="HT Bulmaca">
							</a>
							<a href="/bulmaca/sudoku" title="Sudoku" target="_blank" class="gtm-tracker"
							   data-newsposition="0" data-newsid="999993" data-newsname="Sudoku Desktop"
							   data-newsvariant="box-news" data-newslist="BulmacaAkilOyunlariDesk"
							   data-newscategory="YaÅam">
								<img class=""
									 src="https://im.haberturk.com/assets/images/v3/transparent.gif"
									 data-htsrc="https://im.haberturk.com/assets/images/bulmaca/ht-sudoku.png"
									 alt="Sudoku">
							</a>
							<a href="/bulmaca/cengel" title="Ãengel Bulmaca" target="_blank" class="gtm-tracker"
							   data-newsposition="0" data-newsid="999993" data-newsname="Sudoku Desktop"
							   data-newsvariant="box-news" data-newslist="BulmacaAkilOyunlariDesk"
							   data-newscategory="YaÅam">
								<img class=""
									 src="https://im.haberturk.com/assets/images/v3/transparent.gif"
									 data-htsrc="https://im.haberturk.com/assets/images/bulmaca/ht-cengel-bulmaca.png"
									 alt="Ãengel Bulmaca">
							</a>
						</div>
					</div>
				</div>

				<div class="box column-12 two">
											<div class="widget-popcorn widget widget-popcorn-TypeTechnology technology-popcorn-slider"
							 id="TeknolojiDunyasiWidget">
							<div class="head special-a-d-v">
								<a href="/cocuk" class="gtm-tracker" data-newsvariant="HTCocukWidget" target="_blank"
								   title="HT Ãocuk">
									<div class="title headTitleType">
										HT ÃOCUK
									</div>
								</a>
							</div>
							<div class="content">
								<div class="swiper-container slider">
									<div class="swiper-wrapper">
										<!--item-->
																					<div class="swiper-slide">
												<a  href="/disci-korkusu-babadan-gecmis-bir-gen-olabilir-3029788" target="_blank" title="Zeka Ã§ocuÄa anneden geÃ§iyor"
																class="gtm-tracker" data-newsPosition="0" data-newsId="3029788" data-newsName="Zeka Ã§ocuÄa anneden geÃ§iyor" data-newsVariant="box-news-image" data-newsList="HTCocukWidget" data-newsCategory="YaÅam/Ãocuk">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/04/06/ver1627952633/3029788_300x169.jpg"
																							   alt="Zeka Ã§ocuÄa anneden geÃ§iyor"/>
														</div>
														<figcaption>
															<span class="title">Zeka Ã§ocuÄa anneden geÃ§iyor</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide">
												<a  href="/yaz-sanat-okulu-agustos-programi-3151274" target="_blank" title="Yaz sanat okulu aÄustos programÄ±"
																class="gtm-tracker" data-newsPosition="1" data-newsId="3151274" data-newsName="Yaz sanat okulu aÄustos programÄ±" data-newsVariant="box-news-image" data-newsList="HTCocukWidget" data-newsCategory="YaÅam/Ãocuk">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/08/03/ver1627948293/3151274_300x169.jpg"
																							   alt="Yaz sanat okulu aÄustos programÄ±"/>
														</div>
														<figcaption>
															<span class="title">Yaz sanat okulu aÄustos programÄ±</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide">
												<a  href="/esra-sasmaz-dan-fareli-koyun-kavalcisi-3148204" target="_blank" title="Esra ÅaÅmaz'dan Fareli KÃ¶yÃ¼n KavalcÄ±sÄ±"
																class="gtm-tracker" data-newsPosition="2" data-newsId="3148204" data-newsName="Esra ÅaÅmaz\'dan Fareli KÃ¶yÃ¼n KavalcÄ±sÄ±" data-newsVariant="box-news-image" data-newsList="HTCocukWidget" data-newsCategory="YaÅam/Ãocuk">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/07/30/ver1627948134/3148204_300x169.jpg"
																							   alt="Esra ÅaÅmaz'dan Fareli KÃ¶yÃ¼n KavalcÄ±sÄ±"/>
														</div>
														<figcaption>
															<span class="title">Esra ÅaÅmaz'dan Fareli KÃ¶yÃ¼n KavalcÄ±sÄ±</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide">
												<a  href="/khan-academy-nin-kurucusundan-uzaktan-egitim-tuyolari-3145303" target="_blank" title="Khan Academy kurucusundan tavsiyeler"
																class="gtm-tracker" data-newsPosition="3" data-newsId="3145303" data-newsName="Khan Academy kurucusundan tavsiyeler" data-newsVariant="box-news-image" data-newsList="HTCocukWidget" data-newsCategory="YaÅam/Ãocuk">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/07/28/ver1627553896/3145303_300x169.jpg"
																							   alt="Khan Academy kurucusundan tavsiyeler"/>
														</div>
														<figcaption>
															<span class="title">Khan Academy kurucusundan tavsiyeler</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
																					<div class="swiper-slide">
												<a  href="/basarili-ogretmenlerin-farkli-yaptigi-25-sey-3145283" target="_blank" title="BaÅarÄ±lÄ± Ã¶Äretmenler neyi farklÄ± yapÄ±yor?"
																class="gtm-tracker" data-newsPosition="4" data-newsId="3145283" data-newsName="BaÅarÄ±lÄ± Ã¶Äretmenler neyi farklÄ± yapÄ±yor?" data-newsVariant="box-news-image" data-newsList="HTCocukWidget" data-newsCategory="YaÅam/Ãocuk">
													<figure>
														<div class="img img-16x9"><img class="swiper-lazy"
																							   data-src="https://im.haberturk.com/2021/07/28/ver1627468154/3145283_300x169.jpg"
																							   alt="BaÅarÄ±lÄ± Ã¶Äretmenler neyi farklÄ± yapÄ±yor?"/>
														</div>
														<figcaption>
															<span class="title">BaÅarÄ±lÄ± Ã¶Äretmenler neyi farklÄ± yapÄ±yor?</span>
															<!--  <span class="description"></span> -->
														</figcaption>
													</figure>
												</a>
											</div>
										

									</div>
									<!-- Pagination & Navigation -->
									<ul class="indicator type1 bottom">
										<li>
											<div class="swiper-button-prev navigation"></div>
										</li>
										<li>
											<div class="swiper-pagination pagination"></div>
										</li>
										<li>
											<div class="swiper-button-next navigation"></div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					
				</div>

			</div>
		</div>

		<div class="box column-4 type1">

			<div class="box column-12 categoryType" id="KulturSanat">

				<h2 class="art"><a href="/kultur-sanat">KÃLTÃR SANAT</a></h2>
				<div class="box column-12 two">
					<div class="box-row">
						<!-- left -->
						<div class="box column-6 type1">
														<a  href="/kiyidan-kiyiya-turkiye-yunanistan-film-festivali-cesme-de-gerceklesecek-3150384" target="_blank" title="ÃeÅme'de dÃ¼zenlenecek" class="gtm-tracker" data-newsPosition="0" data-newsId="3150384" data-newsName="ÃeÅme\'de dÃ¼zenlenecek" data-newsVariant="box-news-image" data-newsList="KulturSanat" data-newsCategory="KÃ¼ltÃ¼r-Sanat/Sinema">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627890387/3150384_200x240.jpg" alt="ÃeÅme'de dÃ¼zenlenecek"/></div>
									<figcaption>
										<span class="category  art ">KÃ¼ltÃ¼r-Sanat</span>
										<span class="title">ÃeÅme'de dÃ¼zenlenecek</span>
									</figcaption>
								</figure>
							</a>
													</div>
						<!-- right -->
						<div class="box column-6 type1">
														<a  href="/haftanin-kitaplari-3147925" target="_blank" title="HaftanÄ±n KitaplarÄ±" class="gtm-tracker" data-newsPosition="1" data-newsId="3147925" data-newsName="HaftanÄ±n KitaplarÄ±" data-newsVariant="box-news-image" data-newsList="KulturSanat" data-newsCategory="KÃ¼ltÃ¼r-Sanat/Edebiyat">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/30/ver1627679269/3147925_200x240.jpg" alt="HaftanÄ±n KitaplarÄ±"/></div>
									<figcaption>
										<span class="category  art ">KÃ¼ltÃ¼r-Sanat</span>
										<span class="title">HaftanÄ±n KitaplarÄ±</span>
									</figcaption>
								</figure>
							</a>
													</div>
					</div>
				</div>

				<div class="box column-12 type1">
										<a  href="/yasemin-sakallioglu-anlatti-dogru-koca-nasil-secilir-3149187" target="_blank" title="DoÄru Koca NasÄ±l SeÃ§ilir?" class="gtm-tracker" data-newsPosition="2" data-newsId="3149187" data-newsName="DoÄru Koca NasÄ±l SeÃ§ilir?" data-newsVariant="box-news-image" data-newsList="KulturSanat" data-newsCategory="KÃ¼ltÃ¼r-Sanat/Ãne ÃÄ±kanlar">
						<figure>
							<div class="img img-16x9"><img
									src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627738374/3149187_300x169.jpg" alt="DoÄru Koca NasÄ±l SeÃ§ilir?"/></div>
							<figcaption>
								<span class="category  art ">KÃ¼ltÃ¼r-Sanat</span>
								<span class="title">DoÄru Koca NasÄ±l SeÃ§ilir?</span>
							</figcaption>
						</figure>
					</a>
									</div>

			</div>
		</div>

		<div class="box column-4 widget-mainpage-infografik" id="infografikHaberler">
			<div class="box-row">
				<div class="box column-12 type2 type4">
										<figure>
						<div class="img left img-1x2">
							<a  href="/ormanlar-icin-en-buyuk-tehlike-yangin-degil-3150323" target="_blank" title="Ormanlar iÃ§in en bÃ¼yÃ¼k tehlike yangÄ±n deÄil" class="gtm-tracker" data-newsPosition="0" data-newsId="3150323" data-newsName="Ormanlar iÃ§in en bÃ¼yÃ¼k tehlike yangÄ±n deÄil" data-newsVariant="box-news-image" data-newsList="infografikHaberler" data-newsCategory="GÃ¼ndem/Ä°nfo Grafik">
								<img src="https://im.haberturk.com/assets/images/v3/transparent.gif"
									 data-htsrc="https://im.haberturk.com/2021/08/02/ver1627886351/3150323_252x629.jpg" alt="Ormanlar iÃ§in en bÃ¼yÃ¼k tehlike yangÄ±n deÄil"/>
							</a>
						</div>
						<div class="img right img-1x2">
							<a  href="/ormanlar-icin-en-buyuk-tehlike-yangin-degil-3150323" target="_blank" title="Ormanlar iÃ§in en bÃ¼yÃ¼k tehlike yangÄ±n deÄil" class="gtm-tracker" data-newsPosition="0" data-newsId="3150323" data-newsName="Ormanlar iÃ§in en bÃ¼yÃ¼k tehlike yangÄ±n deÄil" data-newsVariant="box-news-image" data-newsList="infografikHaberler" data-newsCategory="GÃ¼ndem/Ä°nfo Grafik">
								<img src="https://im.haberturk.com/assets/images/v3/transparent.gif"
									 data-htsrc="https://im.haberturk.com/assets/images/v4/infografik/infografik-image-desktop-banner.jpg"
									 alt=""/>
							</a>
						</div>
					</figure>
				</div>
			</div>
		</div>


	</div>
</div><section class="advertisement adv-970" id="index970x90_1">
    <div id="zone_1272" data-zone-id="1272" class="ads-zone lazy-init"></div></section>


<div class="box-row" id="1">
    <!-- left -->
    <div class="box column-4">
        <div class="box-row">

            <div class="box column-12 type1">
                <img class="lazyload-image lzldcntrtp" width="1" height="1" data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif" onload="CbgSliders.mainSliderPopcorn('.widget-popcorn-Typehthayat')" onerror="" />


                <div class="widget-popcorn widget widget-popcorn-Typehthayat" id="HtHayatWidget">
                    <div class="head">
                        <a href="https://hthayat.haberturk.com" class="gtm-tracker" data-newsvariant="hthayat" target="_blank" title="HT HAYAT">
                            <div class="img-brand">
                                <img data-htsrc="https://im.haberturk.com/assets/images/v4/brand/hthayat.svg" alt="HT Hayat" src="https://im.haberturk.com/assets/images/v3/transparent.gif" />
                            </div>
                        </a>
                    </div>
                    <div class="content">

                        <div class="swiper-container slider">
                            <div class="swiper-wrapper">
                                <!--item-->
                                                                        <div class="swiper-slide">
                                            <a href="https://hthayat.haberturk.com/ingilizce-ogrenmenin-10-sira-disi-yolu-1076889?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Ä°ngilizce Ã¶Ärenmenin 10 sÄ±ra dÄ±ÅÄ± yolu" class="gtm-tracker" data-newsPosition="0" data-newsId="1" data-newsName="Ä°ngilizce Ã¶Ärenmenin 10 sÄ±ra dÄ±ÅÄ± yolu" data-newsVariant="box-news" data-newsList="HtHayatWidget" data-newsCategory="HTHayat">
                                                <figure>
                                                    <div class="img">
                                                        <img class="swiper-lazy" data-src="https://hthayat.haberturk.com/im/2021/06/07/ver1627938204/1076889_300x169.jpg" alt="Ä°ngilizce Ã¶Ärenmenin 10 sÄ±ra dÄ±ÅÄ± yolu" />
                                                    </div>
                                                    <figcaption>
                                                        <span class="title">Ä°ngilizce Ã¶Ärenmenin 10 sÄ±ra dÄ±ÅÄ± yolu</span>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                                                        <div class="swiper-slide">
                                            <a href="https://hthayat.haberturk.com/dusta-yuzunuzu-yikiyorsaniz-1077142?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="DuÅta yÃ¼zÃ¼nÃ¼zÃ¼ yÄ±kÄ±yorsanÄ±z..." class="gtm-tracker" data-newsPosition="1" data-newsId="2" data-newsName="DuÅta yÃ¼zÃ¼nÃ¼zÃ¼ yÄ±kÄ±yorsanÄ±z..." data-newsVariant="box-news" data-newsList="HtHayatWidget" data-newsCategory="HTHayat">
                                                <figure>
                                                    <div class="img">
                                                        <img class="swiper-lazy" data-src="https://hthayat.haberturk.com/im/2021/07/13/ver1627900038/1077142_300x169.jpg" alt="DuÅta yÃ¼zÃ¼nÃ¼zÃ¼ yÄ±kÄ±yorsanÄ±z..." />
                                                    </div>
                                                    <figcaption>
                                                        <span class="title">DuÅta yÃ¼zÃ¼nÃ¼zÃ¼ yÄ±kÄ±yorsanÄ±z...</span>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                                                        <div class="swiper-slide">
                                            <a href="https://hthayat.haberturk.com/uyku-aliskanligin-senin-ve-sagligin-hakkinda-neler-soyluyor-1077105?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Uyku alÄ±ÅkanlÄ±ÄÄ±n senin ve saÄlÄ±ÄÄ±n hakkÄ±nda neler sÃ¶ylÃ¼yor?" class="gtm-tracker" data-newsPosition="2" data-newsId="3" data-newsName="Uyku alÄ±ÅkanlÄ±ÄÄ±n senin ve saÄlÄ±ÄÄ±n hakkÄ±nda neler sÃ¶ylÃ¼yor?" data-newsVariant="box-news" data-newsList="HtHayatWidget" data-newsCategory="HTHayat">
                                                <figure>
                                                    <div class="img">
                                                        <img class="swiper-lazy" data-src="https://hthayat.haberturk.com/im/2021/07/07/ver1627765377/1077105_300x169.jpg" alt="Uyku alÄ±ÅkanlÄ±ÄÄ±n senin ve saÄlÄ±ÄÄ±n hakkÄ±nda neler sÃ¶ylÃ¼yor?" />
                                                    </div>
                                                    <figcaption>
                                                        <span class="title">Uyku alÄ±ÅkanlÄ±ÄÄ±n senin ve saÄlÄ±ÄÄ±n hakkÄ±nda neler sÃ¶ylÃ¼yor?</span>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                                                        <div class="swiper-slide">
                                            <a href="https://hthayat.haberturk.com/vucudunuzdaki-bakterileri-olduren-9-dogal-antibiyotik-1077174?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Bakterileri Ã¶ldÃ¼ren 9 doÄal antibiyotik" class="gtm-tracker" data-newsPosition="3" data-newsId="4" data-newsName="Bakterileri Ã¶ldÃ¼ren 9 doÄal antibiyotik" data-newsVariant="box-news" data-newsList="HtHayatWidget" data-newsCategory="HTHayat">
                                                <figure>
                                                    <div class="img">
                                                        <img class="swiper-lazy" data-src="https://hthayat.haberturk.com/im/2021/07/16/ver1627467358/1077174_300x169.jpg" alt="Bakterileri Ã¶ldÃ¼ren 9 doÄal antibiyotik" />
                                                    </div>
                                                    <figcaption>
                                                        <span class="title">Bakterileri Ã¶ldÃ¼ren 9 doÄal antibiyotik</span>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                                                        <div class="swiper-slide">
                                            <a href="https://hthayat.haberturk.com/yiyecek-atiklarini-nasil-degerlendirebilirsiniz-1074926?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Yiyecek atÄ±klarÄ± nasÄ±l deÄerlendirilir?" class="gtm-tracker" data-newsPosition="4" data-newsId="5" data-newsName="Yiyecek atÄ±klarÄ± nasÄ±l deÄerlendirilir?" data-newsVariant="box-news" data-newsList="HtHayatWidget" data-newsCategory="HTHayat">
                                                <figure>
                                                    <div class="img">
                                                        <img class="swiper-lazy" data-src="https://hthayat.haberturk.com/im/2020/09/20/ver1627333611/1074926_300x169.jpg" alt="Yiyecek atÄ±klarÄ± nasÄ±l deÄerlendirilir?" />
                                                    </div>
                                                    <figcaption>
                                                        <span class="title">Yiyecek atÄ±klarÄ± nasÄ±l deÄerlendirilir?</span>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                
                            </div>


                            <ul class="indicator type1 bottom">
                                <li>
                                    <div class="swiper-button-prev navigation"></div>
                                </li>
                                <li>
                                    <div class="swiper-pagination pagination"></div>
                                </li>
                                <li>
                                    <div class="swiper-button-next navigation"></div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <img class="lazyload-image lzldcntrft" width="1" height="1" data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif" onload="CbgSliders.mainSliderPopcorn('.widget-popcorn-Typehthayat')" onerror="" />
            </div>




















                        <div class="box column-12 type1 caricature" id="karikatur">
                                <a href="/can-baytak-karikaturleri-temmuz-2021-3119524" target="_blank" title="Can Baytak karikatÃ¼rleri (Temmuz 2021)" class="gtm-tracker" data-newsPosition="1" data-newsId="3119524" data-newsName="Can Baytak karikatÃ¼rleri (Temmuz 2021)" data-newsVariant="box-news-image" data-newsList="karikatur" data-newsCategory="KarikatÃ¼r">
                    <figure>
                        <div class="img "><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/01/ver1627912642/3119524_400x400.jpg" alt="Can Baytak karikatÃ¼rleri (Temmuz 2021)" /></div>
                    </figure>
                </a>
            </div>
            





            <div class="box column-12 two">
                <div class="box-row">
                    <!-- left -->
                    <div class="box column-6 type1">
                                                <a  href="/son-dakika-haberi-on-numara-sonuclari-aciklaniyor-2-agustos-2021-canli-on-numara-cekilis-sonucu-sorgulama-buyuk-ikramiye-3151059" target="_blank" title="On Numara'da kazandÄ±ran numaralar..." class="gtm-tracker" data-newsPosition="1" data-newsId="3151059" data-newsName="On Numara\'da kazandÄ±ran numaralar..." data-newsVariant="box-news-image" data-newsList="1" data-newsCategory="YaÅam/On Numara">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627924241/3151059_200x240.jpg" alt="On Numara'da kazandÄ±ran numaralar..." /></div>
                                <figcaption>
                                    <span class="category  life ">YaÅam</span>
                                    <span class="title">On Numara'da kazandÄ±ran numaralar...</span>
                                </figcaption>
                            </figure>
                        </a>
                                            </div>
                    <!-- right -->
                    <div class="box column-6 type1">
                                                <a  href="/kan-donduran-cinayet-azra-gulendam-haytaoglu-vahsete-kurban-gitti-3151007" target="_blank" title="Azra GÃ¼lendam HaytaoÄlu vahÅete kurban gitti!" class="gtm-tracker" data-newsPosition="2" data-newsId="3151007" data-newsName="Azra GÃ¼lendam HaytaoÄlu vahÅete kurban gitti!" data-newsVariant="box-news-image" data-newsList="1" data-newsCategory="GÃ¼ndem">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627920233/3151007_200x240.jpg" alt="Azra GÃ¼lendam HaytaoÄlu vahÅete kurban gitti!" /></div>
                                <figcaption>
                                    <span class="category  agenda ">GÃ¼ndem</span>
                                    <span class="title">Azra GÃ¼lendam HaytaoÄlu vahÅete kurban gitti!</span>
                                </figcaption>
                            </figure>
                        </a>
                                            </div>
                </div>
            </div>


        </div>
    </div>


    <!-- center -->
    <div class="box column-4">
        <div class="box-row">


            <div class="box column-12 categoryType">

                <h2 class="health"><a href="/saglik">YAÅAM - SAÄLIK</a></h2>

                <div class="box column-12 type1">
                                        <a  href="/orman-yangini-sirasinda-oncesinde-ve-sonrasinda-ne-yapilmali-haberler-3149067" target="_blank" title="TÃ¼rkiye alev alev! BunlarÄ± herkes Ã¶Ärenmeli" class="gtm-tracker" data-newsPosition="5" data-newsId="3149067" data-newsName="TÃ¼rkiye alev alev! BunlarÄ± herkes Ã¶Ärenmeli" data-newsVariant="box-news-image" data-newsList="1" data-newsCategory="SaÄlÄ±k">
                        <figure>
                            <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627738040/3149067_300x169.jpg" alt="TÃ¼rkiye alev alev! BunlarÄ± herkes Ã¶Ärenmeli" /></div>
                            <figcaption>
                                <span class="category  health ">SaÄlÄ±k</span>
                                <span class="title">TÃ¼rkiye alev alev! BunlarÄ± herkes Ã¶Ärenmeli</span>
                            </figcaption>
                        </figure>
                    </a>
                                    </div>

                <div class="box column-12 two">
                    <div class="box-row">
                        <!-- left -->
                        <div class="box column-6 type1">
                                                        <a  href="/2600-yillik-perinthos-antik-kenti-ndeki-tiyatro-alani-gun-yuzune-cikarilacak-3150295" target="_blank" title="MarmaraereÄlisi'nde heyecan verici keÅif" class="gtm-tracker" data-newsPosition="6" data-newsId="3150295" data-newsName="MarmaraereÄlisi\'nde heyecan verici keÅif" data-newsVariant="box-news-image" data-newsList="1" data-newsCategory="YaÅam">
                                <figure>
                                    <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627886776/3150295_200x240.jpg" alt="MarmaraereÄlisi'nde heyecan verici keÅif" /></div>
                                    <figcaption>
                                        <span class="category  life ">YaÅam</span>
                                        <span class="title">MarmaraereÄlisi'nde heyecan verici keÅif</span>
                                    </figcaption>
                                </figure>
                            </a>
                                                    </div>
                        <!-- right -->
                        <div class="box column-6 type1">
                                                        <a  href="/ardahan-da-bir-gunlukler-in-olum-ucusu-basladi-3150309" target="_blank" title="Her yÄ±l aynÄ± zamanda oluyor... 'ÃlÃ¼m uÃ§uÅu' baÅladÄ±" class="gtm-tracker" data-newsPosition="7" data-newsId="3150309" data-newsName="Her yÄ±l aynÄ± zamanda oluyor... \'ÃlÃ¼m uÃ§uÅu\' baÅladÄ±" data-newsVariant="box-news-image" data-newsList="1" data-newsCategory="YaÅam">
                                <figure>
                                    <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627885733/3150309_200x240.jpg" alt="Her yÄ±l aynÄ± zamanda oluyor... 'ÃlÃ¼m uÃ§uÅu' baÅladÄ±" /></div>
                                    <figcaption>
                                        <span class="category  life ">YaÅam</span>
                                        <span class="title">Her yÄ±l aynÄ± zamanda oluyor... 'ÃlÃ¼m uÃ§uÅu' baÅladÄ±</span>
                                    </figcaption>
                                </figure>
                            </a>
                                                    </div>
                    </div>
                </div>

            </div>












                        <div class="box column-12 type1">
                <a href="/arda-esen-cennetti-cehenneme-dondu-mandira-filozofu-orada-cekilmisti-magazin-haberleri-3150935-magazin" target="_blank" title="&quot;Cennetti, cehenneme dÃ¶ndÃ¼!&quot;" class="gtm-tracker" data-newsPosition="3" data-newsId="3150935" data-newsName="&quot;Cennetti, cehenneme dÃ¶ndÃ¼!&quot;" data-newsVariant="box-news-image" data-newsList="1" data-newsCategory="Magazin/Fiskos">
                    <figure>
                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627918643/3150935_300x300.jpg" alt="&quot;Cennetti, cehenneme dÃ¶ndÃ¼!&quot;" /></div>
                        <figcaption>
                            <span class="title">"Cennetti, cehenneme dÃ¶ndÃ¼!"</span>
                        </figcaption>
                    </figure>
                </a>
            </div>

        </div>
    </div>

    <!-- right -->
    <div class="box column-4">
        <div class="box-row">
            <!-- item -->
            <div class="box column-12 type1">

                                <a  href="/fenerbahce-erkek-voleybol-takimi-kaan-gurbuz-u-renklerine-bagladi-3151064-spor" target="_blank" title="Kaan GÃ¼rbÃ¼z, FenerbahÃ§e'de" class="gtm-tracker" data-newsPosition="3" data-newsId="3151064" data-newsName="Kaan GÃ¼rbÃ¼z, FenerbahÃ§e\'de" data-newsVariant="box-news-image" data-newsList="1" data-newsCategory="Spor/Voleybol">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627924457/3151064_300x169.jpg" alt="Kaan GÃ¼rbÃ¼z, FenerbahÃ§e'de" /></div>
                        <figcaption>
                            <span class="category  sport ">Voleybol</span>
                            <span class="title">Kaan GÃ¼rbÃ¼z, FenerbahÃ§e'de</span>
                        </figcaption>
                    </figure>
                </a>
            </div>

            <!-- item -->
            <div class="box column-12 type1">
                <div class=" ad-ver-ti-se-ment adv300600">
                    <div id="zone_1932" data-zone-id="1932" class="ads-zone lazy-init"></div>                </div>
            </div>
        </div>
    </div>
</div><div class="box-row" id="2"> 
   
    <!-- left -->
    <div class="box column-4">
        <div class="box-row">
            <!-- item -->
            <div class="box column-12 two" id="httv-cift">
                <div class="box-row">
                                            <div class="box column-12 type3 ">
                            <a href="/video/haber/izle/susayan-kopege-elleriyle-su-icirdi/730195" target="_blank" title="Susayan kÃ¶peÄe elleriyle su iÃ§irdi" class="gtm-tracker"
                                data-newsPosition="1" data-newsId="730195" data-newsName="Susayan kÃ¶peÄe elleriyle su iÃ§irdi" data-newsVariant="box-news" data-newsList="httv-cift" data-newsCategory="httv">
                                <figure>
                                    <div class="img ">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif"
                                             data-htsrc="https://mo.ciner.com.tr/video/2021/07/24/ver1627133158/B58FEE8FCB1FB80A3C7A6616474DC886_400x400.jpg" alt="Susayan kÃ¶peÄe elleriyle su iÃ§irdi" />
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">Ht TV</span>
                                        <span class="title">Susayan kÃ¶peÄe elleriyle su iÃ§irdi</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                                            <div class="box column-12 type3 reverse">
                            <a href="/video/haber/izle/avustralyada-kovid-19-kisitlamalari-protesto-edildi/730192" target="_blank" title="Avustralya'da Kovid-19 kÄ±sÄ±tlamalarÄ± protesto edildi!" class="gtm-tracker"
                                data-newsPosition="1" data-newsId="730192" data-newsName="Avustralya'da Kovid-19 kÄ±sÄ±tlamalarÄ± protesto edildi!" data-newsVariant="box-news" data-newsList="httv-cift" data-newsCategory="httv">
                                <figure>
                                    <div class="img ">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif"
                                             data-htsrc="https://mo.ciner.com.tr/video/2021/07/24/ver1627131145/1BDB12429DBE82F571ECE6A8CDAD73FC_400x400.jpg" alt="Avustralya'da Kovid-19 kÄ±sÄ±tlamalarÄ± protesto edildi!" />
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">Ht TV</span>
                                        <span class="title">Avustralya'da Kovid-19 kÄ±sÄ±tlamalarÄ± protesto edildi!</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                                    </div>
            </div>

            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/cankiri-nin-hosmerim-tatlisi-cografi-isaret-tescil-belgesi-aldi-3146975" target="_blank" title="ÃankÄ±rÄ±'nÄ±n hÃ¶Åmerim tatlÄ±sÄ± tescillendi" class="gtm-tracker" data-newsPosition="1" data-newsId="3146975" data-newsName="ÃankÄ±rÄ±\'nÄ±n hÃ¶Åmerim tatlÄ±sÄ± tescillendi" data-newsVariant="box-news-image" data-newsList="2" data-newsCategory="YaÅam">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/29/ver1627567454/3146975_300x300.jpg" alt="ÃankÄ±rÄ±'nÄ±n hÃ¶Åmerim tatlÄ±sÄ± tescillendi" /></div>
                            <figcaption>
                                <span class="category  life ">YaÅam</span>
                                <span class="title">ÃankÄ±rÄ±'nÄ±n hÃ¶Åmerim tatlÄ±sÄ± tescillendi</span>
                            </figcaption>
                        </figure>
                    </a>        
            </div>
        </div>
    </div>

    <!-- center -->
    <div class="box column-4">
        <div class="box-row">
            
            
            <div class="box column-12 type1">
                                <a  href="/demet-akalin-gozyaslarini-tutamadi-magazin-haberleri-3150632-magazin" target="_blank" title="GÃ¶zyaÅlarÄ±yla anlattÄ±: Bodrum'a yardÄ±m gÃ¶nderiyorum" class="gtm-tracker" data-newsPosition="2" data-newsId="3150632" data-newsName="GÃ¶zyaÅlarÄ±yla anlattÄ±: Bodrum\'a yardÄ±m gÃ¶nderiyorum" data-newsVariant="box-news-image" data-newsList="2" data-newsCategory="Magazin/Fiskos">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627905743/3150632_300x300.jpg" alt="GÃ¶zyaÅlarÄ±yla anlattÄ±: Bodrum'a yardÄ±m gÃ¶nderiyorum" /></div>
                            <figcaption>
                                <span class="category  magazine ">Fiskos</span>
                                <span class="title">GÃ¶zyaÅlarÄ±yla anlattÄ±: Bodrum'a yardÄ±m gÃ¶nderiyorum</span>
                            </figcaption>
                        </figure>
                    </a>        
            </div>



            
            
            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/senay-akay-ile-tarik-soner-evlendi-ilk-isi-bu-oldu-magazin-haberleri-3150289-magazin" target="_blank" title="Nikah sonrasÄ± ilk hamle" class="gtm-tracker" data-newsPosition="3" data-newsId="3150289" data-newsName="Nikah sonrasÄ± ilk hamle" data-newsVariant="box-news-image" data-newsList="2" data-newsCategory="Magazin">
                        <figure>
                            <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627893061/3150289_300x169.jpg" alt="Nikah sonrasÄ± ilk hamle" /></div>
                            <figcaption>
                                <span class="category  magazine ">Magazin</span>
                                <span class="title">Nikah sonrasÄ± ilk hamle</span>
                            </figcaption>
                        </figure>
                    </a>        
            </div>


        </div>
    </div>

    <!-- right -->
    <div class="box column-4">
        <div class="box-row">

            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/goztepe-atakan-cankayayi-kadrosuna-katti-3150999-spor" target="_blank" title="GÃ¶ztepe, Atakan ÃankayaâyÄ± kiraladÄ±" class="gtm-tracker" data-newsPosition="4" data-newsId="3150999" data-newsName="GÃ¶ztepe, Atakan ÃankayaâyÄ± kiraladÄ±" data-newsVariant="box-news-image" data-newsList="2" data-newsCategory="Spor/Futbol/SÃ¼per Lig/GÃ¶ztepe">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627918912/3150999_300x169.jpg" alt="GÃ¶ztepe, Atakan ÃankayaâyÄ± kiraladÄ±" /></div>
                        <figcaption>
                            <span class="category  sport ">Futbol</span>
                            <span class="title">GÃ¶ztepe, Atakan ÃankayaâyÄ± kiraladÄ±</span>
                        </figcaption>
                    </figure>
                </a>
            </div>

            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/a-milli-kadin-voleybol-takimi-nin-rakibi-guney-kore-oldu-3150962-spor" target="_blank" title="Rakibimiz GÃ¼ney Kore oldu" class="gtm-tracker" data-newsPosition="5" data-newsId="3150962" data-newsName="Rakibimiz GÃ¼ney Kore oldu" data-newsVariant="box-news-image" data-newsList="2" data-newsCategory="Spor/Voleybol/2020 Tokyo OlimpiyatlarÄ±">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627917554/3150962_300x300.jpg" alt="Rakibimiz GÃ¼ney Kore oldu" /></div>
                            <figcaption>
                                <span class="category  sport ">Voleybol</span>
                                <span class="title">Rakibimiz GÃ¼ney Kore oldu</span>
                            </figcaption>
                        </figure>
                    </a>        
            </div>


        </div>
    </div>
    
</div>
<div class="box-row" id="htgastro">
	            <!-- left -->
            <div class="box column-4">
                <div class="box-row">
                    <!-- item -->
                    <div class="box column-12 type1">
                        <a href="https://www.haberturk.com/htgastro/seyahat/iliskinizi-yeni-bastan-yaratacak-tatil-onerileri-3124378?utm_source=haberturk_anasayfa&utm_medium=htgastro" target="_blank" title="Ä°liÅkinizi yeni baÅtan yaratacak tatil Ã¶nerileri" class="gtm-tracker" data-newsPosition="0" data-newsId="1" data-newsName="Ä°liÅkinizi yeni baÅtan yaratacak tatil Ã¶nerileri" data-newsVariant="box-news" data-newsList="HtGastroNews" data-newsCategory="">
                            <figure>
                                <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/06/ver1627939822/3124378_300x169.jpg" alt="Ä°liÅkinizi yeni baÅtan yaratacak tatil Ã¶nerileri" /></div>
                                <figcaption>
                                    <span class="title">Ä°liÅkinizi yeni baÅtan yaratacak tatil Ã¶nerileri</span>
                                </figcaption>
                            </figure>
                        </a>

                    </div>
                </div>
            </div>

		            <!-- left -->
            <div class="box column-4">
                <div class="box-row">
                    <!-- item -->
                    <div class="box column-12 type1">
                        <a href="https://www.haberturk.com/htgastro/seyahat/ishak-pasa-sarayi-nerede-3150596?utm_source=haberturk_anasayfa&utm_medium=htgastro" target="_blank" title="OsmanlÄ± mimarisinin eÅsiz Ã¶rneÄi: Ä°shak PaÅa SarayÄ±" class="gtm-tracker" data-newsPosition="1" data-newsId="2" data-newsName="OsmanlÄ± mimarisinin eÅsiz Ã¶rneÄi: Ä°shak PaÅa SarayÄ±" data-newsVariant="box-news" data-newsList="HtGastroNews" data-newsCategory="">
                            <figure>
                                <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627940703/3150596_300x169.jpg" alt="OsmanlÄ± mimarisinin eÅsiz Ã¶rneÄi: Ä°shak PaÅa SarayÄ±" /></div>
                                <figcaption>
                                    <span class="title">OsmanlÄ± mimarisinin eÅsiz Ã¶rneÄi: Ä°shak PaÅa SarayÄ±</span>
                                </figcaption>
                            </figure>
                        </a>

                    </div>
                </div>
            </div>

		            <!-- left -->
            <div class="box column-4">
                <div class="box-row">
                    <!-- item -->
                    <div class="box column-12 type1">
                        <a href="https://www.haberturk.com/htgastro/arkeoloji/malatya-arslantepe-hoyugu-unesco-dunya-mirasi-kalici-listesinde-3146787?utm_source=haberturk_anasayfa&utm_medium=htgastro" target="_blank" title="Tarih kitaplarÄ±nÄ± deÄiÅtiren Arslantepe artÄ±k bir dÃ¼nya mirasÄ±" class="gtm-tracker" data-newsPosition="2" data-newsId="3" data-newsName="Tarih kitaplarÄ±nÄ± deÄiÅtiren Arslantepe artÄ±k bir dÃ¼nya mirasÄ±" data-newsVariant="box-news" data-newsList="HtGastroNews" data-newsCategory="">
                            <figure>
                                <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/29/ver1627680925/3146787_300x169.jpg" alt="Tarih kitaplarÄ±nÄ± deÄiÅtiren Arslantepe artÄ±k bir dÃ¼nya mirasÄ±" /></div>
                                <figcaption>
                                    <span class="title">Tarih kitaplarÄ±nÄ± deÄiÅtiren Arslantepe artÄ±k bir dÃ¼nya mirasÄ±</span>
                                </figcaption>
                            </figure>
                        </a>

                    </div>
                </div>
            </div>

		</div>
<section class="advertisement adv-970" id="index970x90_2">
    <div id="zone_1560" data-zone-id="1560" class="ads-zone lazy-init"></div></section>
<div class="box-row" id="4">

	<!-- left -->
	<div class="box column-4">
		<div class="box-row">
			<!-- item -->
			<div class="box column-12 type1 dimensions-3">


				<img class="lazyload-image lzldcntrtp" width="1" height="1"
					 data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif"
					 onload="CbgSliders.mainSliderSites('.widget-300x600-slider.showtv')" onerror=""/>
				<div class="widget-300x600-slider widget showtv" id="ShowtvWidget">
					<div class="content">
						<div class="img-brand">
							<img
								data-htsrc="https://im.haberturk.com/assets/images/v4/brand/showtv.svg"
								alt="Show TV"
								src="https://im.haberturk.com/assets/images/v3/transparent.gif"/>
						</div>
						<div class="swiper-container slider">
							<div class="swiper-wrapper">
								<!--item-->
																		<div class="swiper-slide">
											<a href="https://www.showtv.com.tr/programlar/fragman/didem-arslan-yilmazla-vazgecme-9-agustos-pazartesi-show-tvde-basliyor/97498?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Didem Arslan YÄ±lmaz'la VazgeÃ§me Pazartesi Show TV'de baÅlÄ±yor!"
											   class="gtm-tracker" data-newsPosition="0" data-newsId="1" data-newsName="Didem Arslan YÄ±lmaz'la VazgeÃ§me Pazartesi Show TV'de baÅlÄ±yor!" data-newsVariant="box-news" data-newsList="ShowtvWidget" data-newsCategory="" >
												<figure>

													<div class="img">
														<img data-htsrc="https://im.showtv.com.tr/images/others/2021/07/30/ddht.jpg" alt="Didem Arslan YÄ±lmaz'la VazgeÃ§me Pazartesi Show TV'de baÅlÄ±yor!"/>
													</div>
													<figcaption>
														<span class="title">Didem Arslan YÄ±lmaz'la VazgeÃ§me Pazartesi Show TV'de baÅlÄ±yor!</span>
														<span class="description"></span>
													</figcaption>
												</figure>
											</a>
										</div>
																				<div class="swiper-slide">
											<a href="https://www.showtv.com.tr/programlar/sahne/olimpiyat-sampiyonu-mete-gazoz-bu-sabaha-konustu/97527?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Olimpiyat Åampiyonu Mete Gazoz Bu Sabah'a konuÅtu!"
											   class="gtm-tracker" data-newsPosition="1" data-newsId="2" data-newsName="Olimpiyat Åampiyonu Mete Gazoz Bu Sabah'a konuÅtu!" data-newsVariant="box-news" data-newsList="ShowtvWidget" data-newsCategory="" >
												<figure>

													<div class="img">
														<img data-htsrc="https://im.showtv.com.tr/images/others/2021/08/02/sd.jpg" alt="Olimpiyat Åampiyonu Mete Gazoz Bu Sabah'a konuÅtu!"/>
													</div>
													<figcaption>
														<span class="title">Olimpiyat Åampiyonu Mete Gazoz Bu Sabah'a konuÅtu!</span>
														<span class="description">.</span>
													</figcaption>
												</figure>
											</a>
										</div>
																				<div class="swiper-slide">
											<a href="https://www.showtv.com.tr/dizi/fragman/cam-tavanlar-final-2-fragmani/97513?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="''O cam tavanlarÄ± gerekirse yerle bir edeceÄim!''"
											   class="gtm-tracker" data-newsPosition="2" data-newsId="3" data-newsName="''O cam tavanlarÄ± gerekirse yerle bir edeceÄim!''" data-newsVariant="box-news" data-newsList="ShowtvWidget" data-newsCategory="" >
												<figure>

													<div class="img">
														<img data-htsrc="https://im.showtv.com.tr/images/others/2021/07/31/ctht8.jpg" alt="''O cam tavanlarÄ± gerekirse yerle bir edeceÄim!''"/>
													</div>
													<figcaption>
														<span class="title">''O cam tavanlarÄ± gerekirse yerle bir edeceÄim!''</span>
														<span class="description"></span>
													</figcaption>
												</figure>
											</a>
										</div>
																				<div class="swiper-slide">
											<a href="https://www.showtv.com.tr/dizi/fragman/sahsiyet-6-bolum-fragmani/97460?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="&quot;ZayÄ±f olan gÃ¼Ã§lÃ¼ olanÄ± yeniyor...&quot;"
											   class="gtm-tracker" data-newsPosition="3" data-newsId="4" data-newsName="&quot;ZayÄ±f olan gÃ¼Ã§lÃ¼ olanÄ± yeniyor...&quot;" data-newsVariant="box-news" data-newsList="ShowtvWidget" data-newsCategory="" >
												<figure>

													<div class="img">
														<img data-htsrc="https://im.showtv.com.tr/images/others/2021/07/28/cansu_dere.jpg" alt="&quot;ZayÄ±f olan gÃ¼Ã§lÃ¼ olanÄ± yeniyor...&quot;"/>
													</div>
													<figcaption>
														<span class="title">"ZayÄ±f olan gÃ¼Ã§lÃ¼ olanÄ± yeniyor..."</span>
														<span class="description"></span>
													</figcaption>
												</figure>
											</a>
										</div>
																				<div class="swiper-slide">
											<a href="https://www.showtv.com.tr/programlar/fragman/bu-sabah-26-temmuz-pazartesiden-itibaren-hafta-ici-her-gun-show-tvde/97357?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="''Bu Sabah'' hafta iÃ§i her gÃ¼n 08.30'da Show TV'de!"
											   class="gtm-tracker" data-newsPosition="4" data-newsId="5" data-newsName="''Bu Sabah'' hafta iÃ§i her gÃ¼n 08.30'da Show TV'de!" data-newsVariant="box-news" data-newsList="ShowtvWidget" data-newsCategory="" >
												<figure>

													<div class="img">
														<img data-htsrc="https://im.showtv.com.tr/images/others/2021/07/17/bubu.jpg" alt="''Bu Sabah'' hafta iÃ§i her gÃ¼n 08.30'da Show TV'de!"/>
													</div>
													<figcaption>
														<span class="title">''Bu Sabah'' hafta iÃ§i her gÃ¼n 08.30'da Show TV'de!</span>
														<span class="description"></span>
													</figcaption>
												</figure>
											</a>
										</div>
										
							</div>

							<div class="swiper-button-prev navigation-left"></div>
							<div class="swiper-button-next navigation-right"></div>

							<ul class="indicator type1 bottom">
								<li>
									<div class="swiper-button-prev navigation"></div>
								</li>
								<li>
									<div class="swiper-pagination pagination"></div>
								</li>
								<li>
									<div class="swiper-button-next navigation"></div>
								</li>
							</ul>

						</div>
					</div>
				</div>
				<img class="lazyload-image lzldcntrft" width="1" height="1"
					 data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif"
					 onload="CbgSliders.mainSliderSites('.widget-300x600-slider.showtv')" onerror=""/>


			</div>
			<!-- item -->
			<div class="box column-12 type1 dimensions-1">
				<div class=" ad-ver-ti-se-ment adv300250">
					<div id="zone_1931" data-zone-id="1931" class="ads-zone lazy-init"></div>				</div>
			</div>
		</div>
	</div>

	<!-- center -->
	<div class="box column-4">
		<div class="box-row">

			<div class="box column-12 type1">
								<a  href="/tugba-ozay-manavgat-a-gitti-felc-gecirmemi-istediniz-magazin-haberleri-3150589-magazin" target="_blank" title="&quot;FelÃ§ geÃ§irmemi istediniz!&quot;" class="gtm-tracker" data-newsPosition="0" data-newsId="3150589" data-newsName="&quot;FelÃ§ geÃ§irmemi istediniz!&quot;" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="Magazin">
					<figure>
						<div class="img img-1x1"><img
								src="https://im.haberturk.com/assets/images/v3/transparent.gif"
								data-htsrc="https://im.haberturk.com/2021/08/02/ver1627905521/3150589_300x300.jpg" alt="&quot;FelÃ§ geÃ§irmemi istediniz!&quot;"/></div>
						<figcaption>
							<span class="category  magazine ">Magazin</span>
							<span class="title">"FelÃ§ geÃ§irmemi istediniz!"</span>
						</figcaption>
					</figure>
				</a>
			</div>

			<div class="box column-12 two">
				<div class="box-row">
					<!-- left -->
					<div class="box column-6 type1">
												<a  href="/onur-buyuktopcu-isyan-etti-yeter-artik-delirttiniz-adami-magazin-haberleri-3150522-magazin" target="_blank" title="&quot;Yeter artÄ±k, delirttiniz adamÄ±!&quot;" class="gtm-tracker" data-newsPosition="1" data-newsId="3150522" data-newsName="&quot;Yeter artÄ±k, delirttiniz adamÄ±!&quot;" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="Magazin">
							<figure>
								<div class="img img-1x1"><img
										src="https://im.haberturk.com/assets/images/v3/transparent.gif"
										data-htsrc="https://im.haberturk.com/2021/08/02/ver1627905853/3150522_200x240.jpg" alt="&quot;Yeter artÄ±k, delirttiniz adamÄ±!&quot;"/></div>
								<figcaption>
									<span class="category  magazine ">Magazin</span>
									<span class="title">"Yeter artÄ±k, delirttiniz adamÄ±!"</span>
								</figcaption>
							</figure>
						</a>
					</div>
					<!-- right -->
					<div class="box column-6 type1">
												<a  href="/jennifer-lopez-ile-ben-affleck-in-tatili-duygusal-bitti-magazin-haberleri-3150763-magazin" target="_blank" title="Duygusal veda" class="gtm-tracker" data-newsPosition="2" data-newsId="3150763" data-newsName="Duygusal veda" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="Magazin/DÃ¼nyadan">
							<figure>
								<div class="img img-1x1"><img
										src="https://im.haberturk.com/assets/images/v3/transparent.gif"
										data-htsrc="https://im.haberturk.com/2021/08/02/ver1627914390/3150763_200x240.jpg" alt="Duygusal veda"/></div>
								<figcaption>
									<span class="category  magazine ">DÃ¼nyadan</span>
									<span class="title">Duygusal veda</span>
								</figcaption>
							</figure>
						</a>
					</div>
				</div>
			</div>


			<div class="box column-12 type1">


								<a href="/video/haber/izle/sariyerde-arizalanan-iett-otobusunu-yolcularin-ittigi-anlar-kamerada/730170" target="_blank" title="SarÄ±yer'de arÄ±zalanan Ä°ETT otobÃ¼sÃ¼nÃ¼ yolcularÄ±n ittiÄi anlar kamerada"
				   class="gtm-tracker" data-newsPosition="3" data-newsId="730170" data-newsName="SarÄ±yer\'de arÄ±zalanan Ä°ETT otobÃ¼sÃ¼nÃ¼ yolcularÄ±n ittiÄi anlar kamerada" data-newsVariant="video-image" data-newsList="4" data-newsCategory="Haber/TÃ¼rkiye">
					<figure>
						<div class="img img-16x9"><img
								src="https://im.haberturk.com/assets/images/v3/transparent.gif"
								data-htsrc="https://mo.ciner.com.tr/video/2021/07/24/ver1627114252/C0A15CA8333CD0BF4A505EE5C766EA19_360x203.jpg" alt="SarÄ±yer'de arÄ±zalanan Ä°ETT otobÃ¼sÃ¼nÃ¼ yolcularÄ±n ittiÄi anlar kamerada"/></div>
						<figcaption>
							<span class="title">SarÄ±yer'de arÄ±zalanan Ä°ETT otobÃ¼sÃ¼nÃ¼ yolcularÄ±n ittiÄi anlar kamerada</span>
						</figcaption>
					</figure>
				</a>
			</div>
		</div>
	</div>
	<!-- right -->
	<div class="box column-4">
		<div class="box-row">
			<!-- item -->
			<div class="box column-12 type1">
								<a  href="/aticilikta-elemeleri-gecemedik-3150336-spor" target="_blank" title="AtÄ±cÄ±lÄ±kta elemeleri geÃ§emedik" class="gtm-tracker" data-newsPosition="4" data-newsId="3150336" data-newsName="AtÄ±cÄ±lÄ±kta elemeleri geÃ§emedik" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="Spor/2020 Tokyo OlimpiyatlarÄ±">
					<figure>
						<div class="img img-16x9"><img
								src="https://im.haberturk.com/assets/images/v3/transparent.gif"
								data-htsrc="https://im.haberturk.com/2021/08/02/ver1627886768/3150336_300x169.jpg" alt="AtÄ±cÄ±lÄ±kta elemeleri geÃ§emedik"/></div>
						<figcaption>
							<span class="category  sport ">2020 Tokyo OlimpiyatlarÄ±</span>
							<span class="title">AtÄ±cÄ±lÄ±kta elemeleri geÃ§emedik</span>
						</figcaption>
					</figure>
				</a>

			</div>
			<!-- item -->


			<!-- item -->
			<div class="box column-12 type1">
								<a  href="/onyekuru-olympiakos-a-transfer-oldu-3150572-spor" target="_blank" title="Onyekuru imzayÄ± attÄ±" class="gtm-tracker" data-newsPosition="5" data-newsId="3150572" data-newsName="Onyekuru imzayÄ± attÄ±" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="Spor/Futbol/DÃ¼nya Futbolu">
					<figure>
						<div class="img img-1x1"><img
								src="https://im.haberturk.com/assets/images/v3/transparent.gif"
								data-htsrc="https://im.haberturk.com/2021/08/02/ver1627898048/3150572_300x300.jpg" alt="Onyekuru imzayÄ± attÄ±"/></div>
						<figcaption>
							<span class="category  sport ">Futbol</span>
							<span class="title">Onyekuru imzayÄ± attÄ±</span>
						</figcaption>
					</figure>
				</a>
			</div>

			<!-- item -->
			<div class="box column-12 type1">
								<a  href="/tatli-dan-hakemlere-ovgu-3150895-spor" target="_blank" title="TatlÄ±'dan hakemlere Ã¶vgÃ¼" class="gtm-tracker" data-newsPosition="6" data-newsId="3150895" data-newsName="TatlÄ±\'dan hakemlere Ã¶vgÃ¼" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="Spor/Futbol/SÃ¼per Lig">
					<figure>
						<div class="img img-16x9"><img
								src="https://im.haberturk.com/assets/images/v3/transparent.gif"
								data-htsrc="https://im.haberturk.com/2021/08/02/ver1627913148/3150895_300x169.jpg" alt="TatlÄ±'dan hakemlere Ã¶vgÃ¼"/></div>
						<figcaption>
							<span class="category  sport ">Futbol</span>
							<span class="title">TatlÄ±'dan hakemlere Ã¶vgÃ¼</span>
						</figcaption>
					</figure>
				</a>
			</div>


		</div>
	</div>
</div>


<div class="box-row" id="4_2">
	<div class="box column-4">
		<div class="box-row">
			<div class="box column-12 two">
				<div class="box-row">
					<!-- left -->
											<div class="box column-6 type1">
														<a  href="/taha-akgul-un-maci-ne-zaman-saat-kacta-2020-tokyo-olimpiyatlari-taha-akgul-maci-hangi-kanalda-yayinlanacak-3151290-spor" target="_blank" title="Taha AkgÃ¼l'Ã¼n maÃ§Ä± ne zaman, saat kaÃ§ta? " class="gtm-tracker" data-newsPosition="1" data-newsId="3151290" data-newsName="Taha AkgÃ¼l\'Ã¼n maÃ§Ä± ne zaman, saat kaÃ§ta?" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="Spor/2020 Tokyo OlimpiyatlarÄ±">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif"
											data-htsrc="https://im.haberturk.com/2021/08/03/ver1627945167/3151290_200x240.jpg" alt="Taha AkgÃ¼l'Ã¼n maÃ§Ä± ne zaman, saat kaÃ§ta? "/></div>
									<figcaption>
										<span class="category  sport ">2020 Tokyo OlimpiyatlarÄ±</span>
										<span class="title">Taha AkgÃ¼l'Ã¼n maÃ§Ä± ne zaman, saat kaÃ§ta? </span>
									</figcaption>
								</figure>
							</a>
						</div>
										<!-- right -->
											<div class="box column-6 type1">
														<a href="https://hthayat.haberturk.com/yasam/kultur-sanat/haber/1044139-kadinlarin-yalnizken-izlemeleri-gereken-10-film?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="KadÄ±nlarÄ±n yalnÄ±zken izlemeleri gereken 10 film" class="gtm-tracker">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif"
											data-htsrc="https://hthayat.haberturk.com/im/2017/01/03/ver1627282968/1044139_300x410.jpg" alt="KadÄ±nlarÄ±n yalnÄ±zken izlemeleri gereken 10 film"/></div>
									<figcaption>
										<span class="title">KadÄ±nlarÄ±n yalnÄ±zken izlemeleri gereken 10 film</span>
									</figcaption>
								</figure>
							</a>
						</div>
									</div>
			</div>
							<div class="box column-12 type1">
										<a href="https://hthayat.haberturk.com/hayat-kolaylastiran-10-cozum-onerisi-1075886?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Hayat kolaylaÅtÄ±ran bu hileleri biliyor musunuz?" class="gtm-tracker">
						<figure>
							<div class="img img-1x1"><img
									src="https://im.haberturk.com/assets/images/v3/transparent.gif"
									data-htsrc="https://hthayat.haberturk.com/im/2021/01/16/ver1627017172/1075886_300x300.jpg" alt="Hayat kolaylaÅtÄ±ran bu hileleri biliyor musunuz?"/></div>
							<figcaption>
								<span class="category">2020 Tokyo OlimpiyatlarÄ±</span>
								<span class="title">Hayat kolaylaÅtÄ±ran bu hileleri biliyor musunuz?</span>
							</figcaption>
						</figure>
					</a>
				</div>
					</div>
	</div>
	<div class="box column-4">
		<div class="box-row">
						<div class="box column-12 type1">
								<a  href="/son-dakika-dunyanin-en-yalniz-evi-internette-ilgi-gordu-haberler-3128103" target="_blank" title="DÃ¼nyanÄ±n en yalnÄ±z evi!" class="gtm-tracker" data-newsPosition="0" data-newsId="3128103" data-newsName="DÃ¼nyanÄ±n en yalnÄ±z evi!" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="YaÅam/Seyahat">
					<figure>
						<div class="img img-16x9"><img
								src="https://im.haberturk.com/assets/images/v3/transparent.gif"
								data-htsrc="https://im.haberturk.com/2021/07/09/ver1625817252/3128103_300x169.jpg" alt="DÃ¼nyanÄ±n en yalnÄ±z evi!"/></div>
						<figcaption>
							<span class="category  life ">YaÅam</span>
							<span class="title">DÃ¼nyanÄ±n en yalnÄ±z evi!</span>
						</figcaption>
					</figure>
				</a>
			</div>
			
			<div class="box column-12 type1">
				
    <img class="lazyload-image lzldcntrtp" width="1" height="1" data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif" onload="CbgSliders.mainSliderAstrology('.widget-horoscope')" onerror="" />

    <div class="widget-horoscope horoscopeHeightFix" id="HoroscopeWidget">
        <div class="head">
            <div class="title">
                GÃNLÃK BURÃ YORUMU
            </div>
        </div>

        <div class="content">
            <div class="swiper-container slider">
                <div class="swiper-wrapper">
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/koc" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/koc-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">KoÃ§</span>
                                        <span class="spot-title">21 Mart - 20 Nisan</span>
                                        <span class="description">GÃ¼nlÃ¼k KoÃ§ burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/boga" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/boga-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">BoÄa</span>
                                        <span class="spot-title">21 Nisan - 20 MayÄ±s</span>
                                        <span class="description">GÃ¼nlÃ¼k BoÄa burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/ikizler" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/ikizler-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">Ä°kizler</span>
                                        <span class="spot-title">21 MayÄ±s - 21 Haziran</span>
                                        <span class="description">GÃ¼nlÃ¼k Ä°kizler burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/yengec" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/yengec-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">YengeÃ§</span>
                                        <span class="spot-title">22 Haziran - 22 Temmuz</span>
                                        <span class="description">GÃ¼nlÃ¼k YengeÃ§ burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/aslan" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/aslan-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">Aslan</span>
                                        <span class="spot-title">23 Temmuz - 22 AÄustos</span>
                                        <span class="description">GÃ¼nlÃ¼k Aslan burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/basak" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/basak-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">BaÅak</span>
                                        <span class="spot-title">23 AÄustos - 22 EylÃ¼l</span>
                                        <span class="description">GÃ¼nlÃ¼k BaÅak burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/terazi" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/terazi-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">Terazi</span>
                                        <span class="spot-title">23 EylÃ¼l - 23 Ekim</span>
                                        <span class="description">GÃ¼nlÃ¼k Terazi burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/akrep" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/akrep-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">Akrep</span>
                                        <span class="spot-title">24 Ekim - 22 KasÄ±m</span>
                                        <span class="description">GÃ¼nlÃ¼k Akrep burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/yay" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/yay-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">Yay</span>
                                        <span class="spot-title">23 KasÄ±m - 21 AralÄ±k</span>
                                        <span class="description">GÃ¼nlÃ¼k Yay burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/oglak" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/oglak-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">OÄlak</span>
                                        <span class="spot-title">22 AralÄ±k - 20 Ocak</span>
                                        <span class="description">GÃ¼nlÃ¼k OÄlak burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/kova" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/kova-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">Kova</span>
                                        <span class="spot-title">21 Ocak - 18 Åubat</span>
                                        <span class="description">GÃ¼nlÃ¼k Kova burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                        <!--item-->
                        <div class="swiper-slide">
                                                      <a href="https://hthayat.haberturk.com/astroloji/index/balik" target="_blank" class="gtm-tracker" data-newsVariant="HoroscopeWidget">
                                <figure>
                                    <div class="img">
                                        <img class="swiper-lazy" data-src="https://im.haberturk.com/assets/images/horoscope/balik-white-1.svg" />
                                        
                                        
                                        
                                        
                                    </div>
                                    <figcaption>
                                        <span class="title">BalÄ±k</span>
                                        <span class="spot-title">19 Åubat - 20 Mart</span>
                                        <span class="description">GÃ¼nlÃ¼k BalÄ±k burcu yorumlarÄ±nÄ± okuyabilirsiniz.</span>
                                        <!-- <span class="btn more">DEVAMI</span> -->
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    
                </div>
                    <div class="swiper-button-prev navigation"></div>
                    <div class="swiper-pagination pagination"></div>
                    <div class="swiper-button-next navigation"></div>

            </div>
        </div>

    </div>     

    <img class="lazyload-image lzldcntrft" width="1" height="1" data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif" onload="CbgSliders.mainSliderAstrology('.widget-horoscope')" onerror="" />


			</div>
		</div>
	</div>
	<div class="box column-4">
		<div class="box-row">
					<div class="box column-12 type1">
								<a  href="/ruyada-balik-gormek-ne-anlama-gelir-ruyada-balik-yemek-yakalamak-temizlemek-tutmak-ne-demek-3119083" target="_blank" title="RÃ¼yada balÄ±k gÃ¶rmek ne anlama gelir?" class="gtm-tracker" data-newsPosition="0" data-newsId="3119083" data-newsName="RÃ¼yada balÄ±k gÃ¶rmek ne anlama gelir?" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="YaÅam/Seyahat">
					<figure>
						<div class="img img-16x9"><img
								src="https://im.haberturk.com/assets/images/v3/transparent.gif"
								data-htsrc="https://im.haberturk.com/2021/06/29/ver1624976965/3119083_300x169.jpg" alt="RÃ¼yada balÄ±k gÃ¶rmek ne anlama gelir?"/></div>
						<figcaption>
							<span class="category  life ">YaÅam</span>
							<span class="title">RÃ¼yada balÄ±k gÃ¶rmek ne anlama gelir?</span>
						</figcaption>
					</figure>
				</a>
			</div>
			
			<div class="box column-12 type1">
								<a  href="/sivasspor-teknik-direktoru-calimbay-in-hedefi-tur-atlamak-3150576-spor" target="_blank" title="ÃalÄ±mbay'Ä±n hedefi tur atlamak" class="gtm-tracker" data-newsPosition="6" data-newsId="3150576" data-newsName="ÃalÄ±mbay\'Ä±n hedefi tur atlamak" data-newsVariant="box-news-image" data-newsList="4" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Sivasspor">
					<figure>
						<div class="img img-1x1"><img
								src="https://im.haberturk.com/assets/images/v3/transparent.gif"
								data-htsrc="https://im.haberturk.com/2021/08/02/ver1627898059/3150576_300x300.jpg" alt="ÃalÄ±mbay'Ä±n hedefi tur atlamak"/></div>
						<figcaption>
							<span class="category  sport ">Futbol</span>
							<span class="title">ÃalÄ±mbay'Ä±n hedefi tur atlamak</span>
						</figcaption>
					</figure>
				</a>
			</div>





		</div>
	</div>
</div><section class="advertisement adv-970" id="index970x90_3">
    <div id="zone_2154" data-zone-id="2154" class="ads-zone lazy-init"></div></section>

<div class="box-row" id="5">

	<!-- left -->
	<div class="box column-4">
		<div class="box-row">

			<!-- item -->

			<div class="box column-12 type1">
									<a href="https://hthayat.haberturk.com/gunluk-burc-yorumlari-3-agustos-2021-sali-1077282?utm_source=haberturk_anasayfa&utm_medium=section5" target="_blank" title="YÄ±ldÄ±zÄ±nÄ±z bugÃ¼n neler sÃ¶ylÃ¼yor?" class="gtm-tracker">
						<figure>
							<div class="img img-1x1"><img
									src="https://im.haberturk.com/assets/images/v3/transparent.gif"
									data-htsrc="https://hthayat.haberturk.com/im/2021/08/02/ver1627903368/1077282_300x300.jpg" alt="YÄ±ldÄ±zÄ±nÄ±z bugÃ¼n neler sÃ¶ylÃ¼yor?"/></div>
							<figcaption>
								<span class="title">YÄ±ldÄ±zÄ±nÄ±z bugÃ¼n neler sÃ¶ylÃ¼yor?</span>
							</figcaption>
						</figure>
					</a>
							</div>

			<!-- item -->
			<div class="box column-12 two">
				<div class="box-row">
					<!-- left -->
					<div class="box column-6 type1">
												<a  href="/pigmeler-binlerce-yillik-ilkel-yasam-tarzlarindan-vazgecmiyor-3150429" target="_blank" title="YeryÃ¼zÃ¼nÃ¼n en kÄ±sa insanlarÄ± burada yaÅÄ±yor!" class="gtm-tracker" data-newsPosition="0" data-newsId="3150429" data-newsName="YeryÃ¼zÃ¼nÃ¼n en kÄ±sa insanlarÄ± burada yaÅÄ±yor!" data-newsVariant="box-news-image" data-newsList="5" data-newsCategory="YaÅam">
							<figure>
								<div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627906394/3150429_200x240.jpg" alt="YeryÃ¼zÃ¼nÃ¼n en kÄ±sa insanlarÄ± burada yaÅÄ±yor!" /></div>
								<figcaption>
									<span class="category  life ">YaÅam</span>
									<span class="title">YeryÃ¼zÃ¼nÃ¼n en kÄ±sa insanlarÄ± burada yaÅÄ±yor!</span>
								</figcaption>
							</figure>
						</a>
					</div>
					<!-- right -->
					<div class="box column-6 type1">
												<a  href="/kazakistanda-eski-turk-donemine-ait-tas-heykel-bulundu-3149196" target="_blank" title="YÃ¼ksekliÄi 1 metre! &quot;DiÄerlerine gÃ¶re daha farklÄ±&quot;" class="gtm-tracker" data-newsPosition="1" data-newsId="3149196" data-newsName="YÃ¼ksekliÄi 1 metre! &quot;DiÄerlerine gÃ¶re daha farklÄ±&quot;" data-newsVariant="box-news-image" data-newsList="5" data-newsCategory="YaÅam">
							<figure>
								<div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627737688/3149196_200x240.jpg" alt="YÃ¼ksekliÄi 1 metre! &quot;DiÄerlerine gÃ¶re daha farklÄ±&quot;" /></div>
								<figcaption>
									<span class="category  life ">YaÅam</span>
									<span class="title">YÃ¼ksekliÄi 1 metre! "DiÄerlerine gÃ¶re daha farklÄ±"</span>
								</figcaption>
							</figure>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- center -->
	<div class="box column-4">
		<div class="box-row">
			<!-- item -->


			<div class="box column-12 two">
				<div class="box-row">

					<!-- left -->
											<div class="box column-6 type1">
														<a  href="/ardahan-nerede-hangi-bolgede-ardahan-nin-gezilecek-yerleri-ve-ilceleri-3115312" target="_blank" title="Ardahan hakkÄ±nda merak edilenler" class="gtm-tracker" data-newsPosition="1" data-newsId="3115312" data-newsName="Ardahan hakkÄ±nda merak edilenler" data-newsVariant="box-news-image" data-newsList="5" data-newsCategory="YaÅam/Seyahat">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif"
											data-htsrc="https://im.haberturk.com/2021/06/25/ver1624625791/3115312_200x240.jpg" alt="Ardahan hakkÄ±nda merak edilenler"/></div>
									<figcaption>
										<span class="category  life ">YaÅam</span>
										<span class="title">Ardahan hakkÄ±nda merak edilenler</span>
									</figcaption>
								</figure>
							</a>
						</div>
										<!-- right -->

											<div class="box column-6 type1">
														<a  href="/help-turkey-ne-demek-global-call-help-turkey-nedir-ne-anlama-geliyor-3150514" target="_blank" title="Global Call (Help Turkey) nedir?" class="gtm-tracker" data-newsPosition="2" data-newsId="3150514" data-newsName="Global Call (Help Turkey) nedir?" data-newsVariant="box-news-image" data-newsList="5" data-newsCategory="GÃ¼ndem">
								<figure>
									<div class="img img-1x1"><img
											src="https://im.haberturk.com/assets/images/v3/transparent.gif"
											data-htsrc="https://im.haberturk.com/2021/08/02/ver1627896453/3150514_200x240.jpg" alt="Global Call (Help Turkey) nedir?"/></div>
									<figcaption>
										<span class="category  agenda ">GÃ¼ndem</span>
										<span class="title">Global Call (Help Turkey) nedir?</span>
									</figcaption>
								</figure>
							</a>
						</div>
									</div>
			</div>




			<div class="box column-12 type1">

				<img class="lazyload-image lzldcntrtp" width="1" height="1" data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif" onload="CbgSliders.mainSliderPopcorn('.sinema-dunyasi-popcorn')" onerror="" />
				<div class="widget-popcorn sinema-dunyasi-popcorn widget" id="PopCornWidget">
					<div class="head">
						<a href="/kultur-sanat" target="_blank" title="KÃ¼ltÃ¼r Sanat">
							<div class="title headTitleType">SÄ°NEMA DÃNYASI</div>
						</a>
					</div>
					<div class="content">
						<div class="swiper-container slider">
							<div class="swiper-wrapper">
								<!--item-->
																	<div class="swiper-slide">
										<a  href="/sisay-genel-sekreteri-fevzi-genc-boyle-bir-yetkimiz-yok-3144897" target="_blank" title="KararÄ± bakanlÄ±k verecek" class="gtm-tracker" data-newsPosition="0" data-newsId="3144897" data-newsName="KararÄ± bakanlÄ±k verecek" data-newsVariant="box-news-image" data-newsList="PopCornWidget" data-newsCategory="KÃ¼ltÃ¼r-Sanat/Sinema">
											<figure>
												<div class="img img-16x9"><img class="swiper-lazy" data-src="https://im.haberturk.com/2021/07/27/ver1627457306/3144897_300x169.jpg" alt="KararÄ± bakanlÄ±k verecek" /></div>
												<figcaption>
													<span class="title">KararÄ± bakanlÄ±k verecek</span>
													<!--  <span class="description"></span> -->
												</figcaption>
											</figure>
										</a>
									</div>
																	<div class="swiper-slide">
										<a  href="/nurdan-ulu-horozoglu-salon-sahiplerinin-islemlerini-dijitallestirmesi-gerekiyor-3145761" target="_blank" title="Ãnemli aÃ§Ä±klamalarda bulundu" class="gtm-tracker" data-newsPosition="1" data-newsId="3145761" data-newsName="Ãnemli aÃ§Ä±klamalarda bulundu" data-newsVariant="box-news-image" data-newsList="PopCornWidget" data-newsCategory="KÃ¼ltÃ¼r-Sanat/Sinema">
											<figure>
												<div class="img img-16x9"><img class="swiper-lazy" data-src="https://im.haberturk.com/2021/07/28/ver1627472655/3145761_300x169.jpg" alt="Ãnemli aÃ§Ä±klamalarda bulundu" /></div>
												<figcaption>
													<span class="title">Ãnemli aÃ§Ä±klamalarda bulundu</span>
													<!--  <span class="description"></span> -->
												</figcaption>
											</figure>
										</a>
									</div>
																	<div class="swiper-slide">
										<a  href="/ceviz-agaci-nin-festival-yolculugu-devam-ediyor-3145778" target="_blank" title="Festival yolculuÄu devam ediyor " class="gtm-tracker" data-newsPosition="2" data-newsId="3145778" data-newsName="Festival yolculuÄu devam ediyor" data-newsVariant="box-news-image" data-newsList="PopCornWidget" data-newsCategory="KÃ¼ltÃ¼r-Sanat/Sinema">
											<figure>
												<div class="img img-16x9"><img class="swiper-lazy" data-src="https://im.haberturk.com/2021/07/28/ver1627471018/3145778_300x169.jpg" alt="Festival yolculuÄu devam ediyor " /></div>
												<figcaption>
													<span class="title">Festival yolculuÄu devam ediyor </span>
													<!--  <span class="description"></span> -->
												</figcaption>
											</figure>
										</a>
									</div>
																	<div class="swiper-slide">
										<a  href="/okul-tirasi-pali-te-odule-layik-goruldu-3144928" target="_blank" title="PalÄ±Ä'ten Ã¶dÃ¼l kazandÄ±" class="gtm-tracker" data-newsPosition="3" data-newsId="3144928" data-newsName="PalÄ±Ä\'ten Ã¶dÃ¼l kazandÄ±" data-newsVariant="box-news-image" data-newsList="PopCornWidget" data-newsCategory="KÃ¼ltÃ¼r-Sanat/Sinema">
											<figure>
												<div class="img img-16x9"><img class="swiper-lazy" data-src="https://im.haberturk.com/2021/07/27/ver1627393762/3144928_300x169.jpg" alt="PalÄ±Ä'ten Ã¶dÃ¼l kazandÄ±" /></div>
												<figcaption>
													<span class="title">PalÄ±Ä'ten Ã¶dÃ¼l kazandÄ±</span>
													<!--  <span class="description"></span> -->
												</figcaption>
											</figure>
										</a>
									</div>
																	<div class="swiper-slide">
										<a  href="/975-meksika-dan-odul-3143757" target="_blank" title="'9.75'e Meksika'dan Ã¶dÃ¼l

 " class="gtm-tracker" data-newsPosition="4" data-newsId="3143757" data-newsName="\'9.75\'e Meksika\'dan Ã¶dÃ¼l" data-newsVariant="box-news-image" data-newsList="PopCornWidget" data-newsCategory="KÃ¼ltÃ¼r-Sanat/Sinema">
											<figure>
												<div class="img img-16x9"><img class="swiper-lazy" data-src="https://im.haberturk.com/2021/07/26/ver1627398725/3143757_300x169.jpg" alt="'9.75'e Meksika'dan Ã¶dÃ¼l

 " /></div>
												<figcaption>
													<span class="title">'9.75'e Meksika'dan Ã¶dÃ¼l

 </span>
													<!--  <span class="description"></span> -->
												</figcaption>
											</figure>
										</a>
									</div>
								

							</div>
							<!-- Pagination & Navigation -->
							<ul class="indicator type1 bottom">
								<li><div class="swiper-button-prev navigation"></div></li>
								<li><div class="swiper-pagination pagination"></div></li>
								<li><div class="swiper-button-next navigation"></div></li>
							</ul>
						</div>
					</div>
				</div>
				<img class="lazyload-image lzldcntrft" width="1" height="1" data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif" onload="CbgSliders.mainSliderPopcorn('.sinema-dunyasi-popcorn')" onerror="" />
			</div>
		</div>
	</div>

	<!-- right -->
	<div class="box column-4">
		<div class="box-row">
			<!-- item -->
			<div class="box column-12 type1">
								<a  href="/gunes-ten-hakemlere-var-tavsiyesi-3150825-spor" target="_blank" title="GÃ¼neÅ'ten hakemlere VAR tavsiyesi" class="gtm-tracker" data-newsPosition="2" data-newsId="3150825" data-newsName="GÃ¼neÅ\'ten hakemlere VAR tavsiyesi" data-newsVariant="box-news-image" data-newsList="Section5" data-newsCategory="Spor/Futbol/Milli TakÄ±m">
					<figure>
						<div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627910863/3150825_300x169.jpg" alt="GÃ¼neÅ'ten hakemlere VAR tavsiyesi" /></div>
						<figcaption>
							<span class="category  sport ">Futbol</span>
							<span class="title">GÃ¼neÅ'ten hakemlere VAR tavsiyesi</span>
						</figcaption>
					</figure>
				</a>
			</div>
			<!-- item -->
			<div class="box column-12 type2">
								<a  href="/tofas-abd-li-basketbolcu-jeremy-simmons-ile-sozlesme-yeniledi-3150215-spor" target="_blank" title="Jeremy Simmons ile 1 yÄ±l daha" class="gtm-tracker" data-newsPosition="5" data-newsId="3150215" data-newsName="Jeremy Simmons ile 1 yÄ±l daha" data-newsVariant="box-news-image" data-newsList="Section5" data-newsCategory="Spor/Basketbol/STBL">
					<figure>
						<div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627852063/3150215_300x169.jpg" alt="Jeremy Simmons ile 1 yÄ±l daha" /></div>
						<figcaption>
							<span class="category  sport ">Basketbol</span>
							<span class="title">Jeremy Simmons ile 1 yÄ±l daha</span>
						</figcaption>
					</figure>
				</a>
			</div>
			<div class="box column-12 type1">
				<div class="widget-map" id="RoadMapWidget">
    <a href="/yol-durumu/istanbul" target="_blank" title="Yol Durumu" class="gtm-tracker" data-newsVariant="yoldurumuWidget">
        <figure>
            <img class="lazy-bg-img" src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/assets/images/v4/map/yandex-yol-bg.jpg" />
            <div class="logo">
                <img data-htsrc="https://im.haberturk.com/assets/images/map/yandex-yol-logo.png" alt="Yol Durumu" src="https://im.haberturk.com/assets/images/v3/transparent.gif">
            </div>
            <figcaption>
                <div class="left">
                    <span class="title">Yol Durumu</span>
                    <span class="description">Trafik durumunu HT Yol Durumu sayfasÄ±ndan Ã¶Ärenin</span>
                </div>
                <div class="right">
                    <i class="icon"></i>
                </div>
            </figcaption>
        </figure>
    </a>
</div>
			</div>
		</div>
	</div>

</div><div class="box-row" id="6"> 
    <!-- left -->
    <div class="box column-4">
        <div class="box-row">
            
            <div class="box column-12 type1 dimensions-3">
                <div class="widget-bloomberght">
                    <div class="head">
                        <img data-htsrc="https://im.haberturk.com/assets/images/brand/bloomberght.svg" alt="Bloomberg HT" class="logo" src="https://im.haberturk.com/assets/images/v3/transparent.gif">
                    </div>
                    <ul class="content">

                                                        <li>
                                    <a href="https://www.bloomberght.com/petrol-delta-endiseleriyle-kayiplarini-surdurdu-2285111?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Petrol delta endiÅeleriyle kayÄ±plarÄ±nÄ± sÃ¼rdÃ¼rdÃ¼" class="gtm-tracker" data-newsPosition="0" data-newsId="1" data-newsName="Petrol delta endiÅeleriyle kayÄ±plarÄ±nÄ± sÃ¼rdÃ¼rdÃ¼" data-newsVariant="box-news" data-newsList="BloombergWidget" data-newsCategory="" >

                                        <figure>
                                            <div class="img">
                                                <img data-htsrc="https://geoim.bloomberght.com/2021/08/03/ver1627968727/2285111_130x130.jpg" alt="Petrol delta endiÅeleriyle kayÄ±plarÄ±nÄ± sÃ¼rdÃ¼rdÃ¼" />
                                            </div>
                                            <figcaption>
                                                <span class="title">Petrol delta endiÅeleriyle kayÄ±plarÄ±nÄ± sÃ¼rdÃ¼rdÃ¼</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                                                <li>
                                    <a href="https://www.bloomberght.com/avustralya-merkez-bankasi-faiz-degistirmedi-2285107?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Avustralya Merkez BankasÄ± faiz deÄiÅtirmedi ama ekonomistleri ÅaÅÄ±rttÄ±" class="gtm-tracker" data-newsPosition="1" data-newsId="2" data-newsName="Avustralya Merkez BankasÄ± faiz deÄiÅtirmedi ama ekonomistleri ÅaÅÄ±rttÄ±" data-newsVariant="box-news" data-newsList="BloombergWidget" data-newsCategory="" >

                                        <figure>
                                            <div class="img">
                                                <img data-htsrc="https://geoim.bloomberght.com/2021/08/03/ver1627970408/2285107_130x130.jpg" alt="Avustralya Merkez BankasÄ± faiz deÄiÅtirmedi ama ekonomistleri ÅaÅÄ±rttÄ±" />
                                            </div>
                                            <figcaption>
                                                <span class="title">Avustralya Merkez BankasÄ± faiz deÄiÅtirmedi ama ekonomistleri ÅaÅÄ±rttÄ±</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                                                <li>
                                    <a href="https://www.bloomberght.com/altin-2285106?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="AltÄ±n yatÄ±rÄ±mcÄ±larÄ± dÃ¼ÅÃ¼k reel faizden umut buldu" class="gtm-tracker" data-newsPosition="2" data-newsId="3" data-newsName="AltÄ±n yatÄ±rÄ±mcÄ±larÄ± dÃ¼ÅÃ¼k reel faizden umut buldu" data-newsVariant="box-news" data-newsList="BloombergWidget" data-newsCategory="" >

                                        <figure>
                                            <div class="img">
                                                <img data-htsrc="https://geoim.bloomberght.com/2021/08/03/ver1627968715/2285106_130x130.jpg" alt="AltÄ±n yatÄ±rÄ±mcÄ±larÄ± dÃ¼ÅÃ¼k reel faizden umut buldu" />
                                            </div>
                                            <figcaption>
                                                <span class="title">AltÄ±n yatÄ±rÄ±mcÄ±larÄ± dÃ¼ÅÃ¼k reel faizden umut buldu</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                                                <li>
                                    <a href="https://www.bloomberght.com/jpmorgan-butcede-hukumetten-daha-iyimser-2285084?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="JPMorgan, bÃ¼tÃ§ede hÃ¼kÃ¼metten daha iyimser " class="gtm-tracker" data-newsPosition="3" data-newsId="4" data-newsName="JPMorgan, bÃ¼tÃ§ede hÃ¼kÃ¼metten daha iyimser " data-newsVariant="box-news" data-newsList="BloombergWidget" data-newsCategory="" >

                                        <figure>
                                            <div class="img">
                                                <img data-htsrc="https://geoim.bloomberght.com/2021/08/02/ver1627911319/2285084_130x130.jpg" alt="JPMorgan, bÃ¼tÃ§ede hÃ¼kÃ¼metten daha iyimser " />
                                            </div>
                                            <figcaption>
                                                <span class="title">JPMorgan, bÃ¼tÃ§ede hÃ¼kÃ¼metten daha iyimser </span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                                                <li>
                                    <a href="https://www.bloomberght.com/piyasanin-enflasyon-beklentisi-faiz-sinirinda-2285083?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="PiyasanÄ±n enflasyon beklentisi faize dayandÄ±" class="gtm-tracker" data-newsPosition="4" data-newsId="5" data-newsName="PiyasanÄ±n enflasyon beklentisi faize dayandÄ±" data-newsVariant="box-news" data-newsList="BloombergWidget" data-newsCategory="" >

                                        <figure>
                                            <div class="img">
                                                <img data-htsrc="https://geoim.bloomberght.com/2021/08/02/ver1627913780/2285083_130x130.jpg" alt="PiyasanÄ±n enflasyon beklentisi faize dayandÄ±" />
                                            </div>
                                            <figcaption>
                                                <span class="title">PiyasanÄ±n enflasyon beklentisi faize dayandÄ±</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </li>
                                
                    </ul>
                </div>           
            </div>           



        </div>
    </div>

    <!-- center -->
    <div class="box column-4">
        <div class="box-row">

            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/fatma-toptas-ile-gurkan-topcu-nikah-tarihlerini-ucuncu-kez-erteledi-magazin-haberleri-3150459-magazin" target="_blank" title="Nikah tarihi Ã¼Ã§Ã¼ncÃ¼ kez ertelendi" class="gtm-tracker" data-newsPosition="0" data-newsId="3150459" data-newsName="Nikah tarihi Ã¼Ã§Ã¼ncÃ¼ kez ertelendi" data-newsVariant="box-news-image" data-newsList="6" data-newsCategory="Magazin">
                    <figure>
                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627895066/3150459_300x300.jpg" alt="Nikah tarihi Ã¼Ã§Ã¼ncÃ¼ kez ertelendi" /></div>
                        <figcaption>
                            <span class="category  magazine ">Magazin</span>
                            <span class="title">Nikah tarihi Ã¼Ã§Ã¼ncÃ¼ kez ertelendi</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>

            <!-- item -->
            <div class="box column-12 two">
                <div class="box-row">
                    <!-- left -->
                    <div class="box column-6 type1">
                                                <a  href="/billie-eilish-bedenimden-memnun-degilim-magazin-haberleri-3150417-magazin" target="_blank" title="&quot;Bedenimden memnun deÄilim&quot;" class="gtm-tracker" data-newsPosition="1" data-newsId="3150417" data-newsName="&quot;Bedenimden memnun deÄilim&quot;" data-newsVariant="box-news-image" data-newsList="6" data-newsCategory="Magazin/DÃ¼nyadan">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627892692/3150417_200x240.jpg" alt="&quot;Bedenimden memnun deÄilim&quot;" /></div>
                                <figcaption>
                                    <span class="category  magazine ">DÃ¼nyadan</span>
                                    <span class="title">"Bedenimden memnun deÄilim"</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                    <!-- right -->
                    <div class="box column-6 type1">
                                                <a  href="/seyma-subasi-ya-buyuk-tepki-magazin-haberleri-3149696-magazin" target="_blank" title="Åeyma SubaÅÄ±'ya bÃ¼yÃ¼k tepki!" class="gtm-tracker" data-newsPosition="2" data-newsId="3149696" data-newsName="Åeyma SubaÅÄ±\'ya bÃ¼yÃ¼k tepki!" data-newsVariant="box-news-image" data-newsList="6" data-newsCategory="Magazin">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627893996/3149696_200x240.jpg" alt="Åeyma SubaÅÄ±'ya bÃ¼yÃ¼k tepki!" /></div>
                                <figcaption>
                                    <span class="category  magazine ">Magazin</span>
                                    <span class="title">Åeyma SubaÅÄ±'ya bÃ¼yÃ¼k tepki!</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                </div>
            </div>
            
            
            
        </div>
    </div>

    <!-- right -->
    <div class="box column-4">
        <div class="box-row">
            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/trabzonsporda-54uncu-yildonumu-coskusu-3150581-spor" target="_blank" title="TrabzonsporÂ´da 54Â´Ã¼ncÃ¼ yÄ±l coÅkusu" class="gtm-tracker" data-newsPosition="3" data-newsId="3150581" data-newsName="TrabzonsporÂ´da 54Â´Ã¼ncÃ¼ yÄ±l coÅkusu" data-newsVariant="box-news-image" data-newsList="6" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Trabzonspor">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627898349/3150581_300x169.jpg" alt="TrabzonsporÂ´da 54Â´Ã¼ncÃ¼ yÄ±l coÅkusu" /></div>
                        <figcaption>
                            <span class="category  sport ">Futbol</span>
                            <span class="title">TrabzonsporÂ´da 54Â´Ã¼ncÃ¼ yÄ±l coÅkusu</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>
            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/ahmet-agaoglu-biz-futbolda-adalet-ve-hakkaniyet-istiyoruz-3150804-spor" target="_blank" title="&quot;Futbolda adalet ve hakkaniyet istiyoruzâ" class="gtm-tracker" data-newsPosition="4" data-newsId="3150804" data-newsName="&quot;Futbolda adalet ve hakkaniyet istiyoruzâ" data-newsVariant="box-news-image" data-newsList="6" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Trabzonspor">
                    <figure>
                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627910595/3150804_300x300.jpg" alt="&quot;Futbolda adalet ve hakkaniyet istiyoruzâ" /></div>
                        <figcaption>
                            <span class="category  sport ">Futbol</span>
                            <span class="title">"Futbolda adalet ve hakkaniyet istiyoruzâ</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>
        </div>
        <img class="lazyload-image lzldcntrft" width="1" height="1" data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif" onload="CbgSliders.mainSliderMovies('.widget-movies-in-theaters')" onerror="" />
    </div>

</div>
<div class="box-row" id="7"> 

    <!-- left -->
    <div class="box column-4">
        <div class="box-row">

            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/tonya-ve-barut-suclulara-goz-actirmiyor-3149236" target="_blank" title="'Tonya' ve 'Barut' suÃ§lulara gÃ¶z aÃ§tÄ±rmÄ±yor" class="gtm-tracker" data-newsPosition="0" data-newsId="3149236" data-newsName="\'Tonya\' ve \'Barut\' suÃ§lulara gÃ¶z aÃ§tÄ±rmÄ±yor" data-newsVariant="box-news-image" data-newsList="7" data-newsCategory="YaÅam">
                    <figure>
                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627739923/3149236_300x300.jpg" alt="'Tonya' ve 'Barut' suÃ§lulara gÃ¶z aÃ§tÄ±rmÄ±yor" /></div>
                        <figcaption>
                            <span class="category  life ">YaÅam</span>
                            <span class="title">'Tonya' ve 'Barut' suÃ§lulara gÃ¶z aÃ§tÄ±rmÄ±yor</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>

            <!-- item -->
            <div class="box column-12 two">
                <div class="box-row">
                    <!-- left -->
                    <div class="box column-6 type1">
                                                <a  href="/traktorun-romorkunu-cocuklar-icin-havuz-cevirdi-3149113" target="_blank" title="Denize gidemeyen Ã§ocuklarÄ± iÃ§in yaptÄ±" class="gtm-tracker" data-newsPosition="1" data-newsId="3149113" data-newsName="Denize gidemeyen Ã§ocuklarÄ± iÃ§in yaptÄ±" data-newsVariant="box-news-image" data-newsList="7" data-newsCategory="YaÅam">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627732946/3149113_200x240.jpg" alt="Denize gidemeyen Ã§ocuklarÄ± iÃ§in yaptÄ±" /></div>
                                <figcaption>
                                    <span class="category  life ">YaÅam</span>
                                    <span class="title">Denize gidemeyen Ã§ocuklarÄ± iÃ§in yaptÄ±</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                    <!-- right -->
                    <div class="box column-6 type1">
                                                <a  href="/kus-dilinin-kullanildigi-kuskoy-turizme-kazandiriliyor-3148999" target="_blank" title="IslÄ±k dili ile tÃ¼rkÃ¼ sÃ¶yleyerek kutladÄ±lar" class="gtm-tracker" data-newsPosition="2" data-newsId="3148999" data-newsName="IslÄ±k dili ile tÃ¼rkÃ¼ sÃ¶yleyerek kutladÄ±lar" data-newsVariant="box-news-image" data-newsList="7" data-newsCategory="YaÅam">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627726350/3148999_200x240.jpg" alt="IslÄ±k dili ile tÃ¼rkÃ¼ sÃ¶yleyerek kutladÄ±lar" /></div>
                                <figcaption>
                                    <span class="category  life ">YaÅam</span>
                                    <span class="title">IslÄ±k dili ile tÃ¼rkÃ¼ sÃ¶yleyerek kutladÄ±lar</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- center -->
    <div class="box column-4">
        <div class="box-row">
            <!-- item -->
            
            <div class="box column-12 type1" >
                                <a href="/video/haber/izle/kemeri-yanlis-baglanan-go-kart-olduruyordu/730174" target="_blank" title="Kemeri yanlÄ±Å baÄlanan go-kart Ã¶ldÃ¼rÃ¼yordu" class="gtm-tracker" data-newsPosition="3" data-newsId="730174" data-newsName="Kemeri yanlÄ±Å baÄlanan go-kart Ã¶ldÃ¼rÃ¼yordu" data-newsVariant="video-image" data-newsList="7" data-newsCategory="Haber/TÃ¼rkiye">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://mo.ciner.com.tr/video/2021/07/24/ver1627117170/40C53F3AD85D7FD651FD2B307235331C_360x203.jpg" alt="Kemeri yanlÄ±Å baÄlanan go-kart Ã¶ldÃ¼rÃ¼yordu" /></div>
                        <figcaption>
                            <span class="title">Kemeri yanlÄ±Å baÄlanan go-kart Ã¶ldÃ¼rÃ¼yordu</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>
            
            <div class="box column-12 type1">
                                
                                <a  href="/pelin-karahan-dan-esi-bedri-guntay-a-destek-biz-de-magdur-olan-taraftayiz-magazin-haberleri-3150500-magazin" target="_blank" title="&quot;Biz de maÄdur olan taraftayÄ±z&quot;" class="gtm-tracker" data-newsPosition="4" data-newsId="3150500" data-newsName="&quot;Biz de maÄdur olan taraftayÄ±z&quot;" data-newsVariant="box-news-image" data-newsList="7" data-newsCategory="Magazin/Fiskos">
                    <figure>
                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627896664/3150500_300x300.jpg" alt="&quot;Biz de maÄdur olan taraftayÄ±z&quot;" /></div>
                        <figcaption>
                            <span class="category  magazine ">Fiskos</span>
                            <span class="title">"Biz de maÄdur olan taraftayÄ±z"</span>
                        </figcaption>
                    </figure>
                </a>                   
                
                
            </div>

        </div>
    </div>

    <!-- right -->
    <div class="box column-4">
        <div class="box-row">
            <!-- item -->
            <div class="box column-12 dimensions-1">
                <div class=" ad-ver-ti-se-ment adv300250">
                   <div id="zone_1951" data-zone-id="1951" class="ads-zone lazy-init"></div> 
                </div>           
            </div>
            
            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/kayserispor-a-kolombiyali-golcu-3150370-spor" target="_blank" title="Kayserispor'a KolombiyalÄ± golcÃ¼" class="gtm-tracker" data-newsPosition="5" data-newsId="3150370" data-newsName="Kayserispor\'a KolombiyalÄ± golcÃ¼" data-newsVariant="box-news-image" data-newsList="7" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Kayserispor">
                    <figure>
                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627889384/3150370_300x300.jpg" alt="Kayserispor'a KolombiyalÄ± golcÃ¼" /></div>
                        <figcaption>
                            <span class="category  sport ">Futbol</span>
                            <span class="title">Kayserispor'a KolombiyalÄ± golcÃ¼</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>
        </div>
    </div>

</div><section class="advertisement adv-970" id="index970x90_4">
    <div id="zone_2155" data-zone-id="2155" class="ads-zone lazy-init"></div></section>
<div class="box-row" id="8"> 

    <!-- left -->
    <div class="box column-4">
        <div class="box-row">
            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/erciyes-in-temiz-havasi-kampcilarin-gozdesi-oldu-3149012" target="_blank" title="Erciyes'in temiz havasÄ±, kampÃ§Ä±larÄ±n gÃ¶zdesi oldu" class="gtm-tracker" data-newsPosition="0" data-newsId="3149012" data-newsName="Erciyes\'in temiz havasÄ±, kampÃ§Ä±larÄ±n gÃ¶zdesi oldu" data-newsVariant="box-news-image" data-newsList="8" data-newsCategory="YaÅam">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627727768/3149012_300x169.jpg" alt="Erciyes'in temiz havasÄ±, kampÃ§Ä±larÄ±n gÃ¶zdesi oldu" /></div>
                        <figcaption>
                            <span class="category  life ">YaÅam</span>
                            <span class="title">Erciyes'in temiz havasÄ±, kampÃ§Ä±larÄ±n gÃ¶zdesi oldu</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>
            <!-- item -->
            <div class="box column-12 type1 dimensions-3">
                <div class=" ad-ver-ti-se-ment adv300600">
                    <div id="zone_1933" data-zone-id="1933" class="ads-zone lazy-init"></div>                </div>
            </div>
        </div>
    </div>


    <!-- center -->
    <div class="box column-4">
        <div class="box-row">
            <!-- item -->
            <div class="box column-12 two">
                <div class="box-row">
                    <!-- left -->
                    <div class="box column-6 type1">
                                                <a  href="/dua-lipa-bella-hadid-michele-morrone-ve-lewis-hamiltondan-turkiye-mesaji-3149583-magazin" target="_blank" title="TÃ¼rkiye iÃ§in dua istediler" class="gtm-tracker" data-newsPosition="1" data-newsId="3149583" data-newsName="TÃ¼rkiye iÃ§in dua istediler" data-newsVariant="box-news-image" data-newsList="8" data-newsCategory="Magazin">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627798569/3149583_200x240.jpg" alt="TÃ¼rkiye iÃ§in dua istediler" /></div>
                                <figcaption>
                                    <span class="category  magazine ">Magazin</span>
                                    <span class="title">TÃ¼rkiye iÃ§in dua istediler</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                    <!-- right -->
                    <div class="box column-6 type1">
                                                <a  href="/sarkici-gokce-gozyaslarina-boguldu-yardim-istedi-magazin-haberleri-3149075-magazin" target="_blank" title="GÃ¶zyaÅlarÄ± iÃ§inde yardÄ±m istedi" class="gtm-tracker" data-newsPosition="2" data-newsId="3149075" data-newsName="GÃ¶zyaÅlarÄ± iÃ§inde yardÄ±m istedi" data-newsVariant="box-news-image" data-newsList="8" data-newsCategory="Magazin">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627732709/3149075_200x240.jpg" alt="GÃ¶zyaÅlarÄ± iÃ§inde yardÄ±m istedi" /></div>
                                <figcaption>
                                    <span class="category  magazine ">Magazin</span>
                                    <span class="title">GÃ¶zyaÅlarÄ± iÃ§inde yardÄ±m istedi</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                </div>
            </div>

            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/nil-burak-hastaneye-kaldirildi-3149870-magazin" target="_blank" title="ÃnlÃ¼ sanatÃ§Ä± hastaneye kaldÄ±rÄ±ldÄ±" class="gtm-tracker" data-newsPosition="3" data-newsId="3149870" data-newsName="ÃnlÃ¼ sanatÃ§Ä± hastaneye kaldÄ±rÄ±ldÄ±" data-newsVariant="box-news-image" data-newsList="8" data-newsCategory="Magazin">
                    <figure>
                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627820451/3149870_300x300.jpg" alt="ÃnlÃ¼ sanatÃ§Ä± hastaneye kaldÄ±rÄ±ldÄ±" /></div>
                        <figcaption>
                            <span class="category  magazine ">Magazin</span>
                            <span class="title">ÃnlÃ¼ sanatÃ§Ä± hastaneye kaldÄ±rÄ±ldÄ±</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>

            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/burak-hakki-kendimizi-zehirliyoruz-magazin-haberleri-3149607-magazin" target="_blank" title="'OÄluma bir Åey bÄ±rakmak istedim'" class="gtm-tracker" data-newsPosition="4" data-newsId="3149607" data-newsName="\'OÄluma bir Åey bÄ±rakmak istedim\'" data-newsVariant="box-news-image" data-newsList="8" data-newsCategory="Magazin">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627802112/3149607_300x169.jpg" alt="'OÄluma bir Åey bÄ±rakmak istedim'" /></div>
                        <figcaption>
                            <span class="category  magazine ">Magazin</span>
                            <span class="title">'OÄluma bir Åey bÄ±rakmak istedim'</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>

        </div>
    </div>

    <!-- right -->
    <div class="box column-4">
        <div class="box-row">
            <!-- item -->
            <!-- <div class="box column-12 type2">
                                <a  href="/fatih-terim-den-transfer-aciklamasi-3150021-spor" target="_blank" title="Terim'den transfer sÃ¶zleri!" class="gtm-tracker" data-newsPosition="5" data-newsId="3150021" data-newsName="Terim\'den transfer sÃ¶zleri!" data-newsVariant="box-news-image" data-newsList="8" data-newsCategory="Spor/Futbol/SÃ¼per Lig/Galatasaray">
                    <figure>
                        <div class="img img-1x2"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627837419/3150021_3x6.jpg" alt="Terim'den transfer sÃ¶zleri!" /></div>
                        <figcaption>
                            <span class="category  sport ">Futbol</span>
                            <span class="title">Terim'den transfer sÃ¶zleri!</span>
                        </figcaption>
                    </figure>
                </a>        
            </div> -->      
            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/yasemin-adar-bronz-madalya-macina-cikacak-3150303-spor" target="_blank" title="Yasemin tuÅla kazandÄ±" class="gtm-tracker" data-newsPosition="6" data-newsId="3150303" data-newsName="Yasemin tuÅla kazandÄ±" data-newsVariant="box-news-image" data-newsList="8" data-newsCategory="Spor/2020 Tokyo OlimpiyatlarÄ±">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627894070/3150303_300x169.jpg" alt="Yasemin tuÅla kazandÄ±" /></div>
                        <figcaption>
                            <span class="category  sport ">2020 Tokyo OlimpiyatlarÄ±</span>
                            <span class="title">Yasemin tuÅla kazandÄ±</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>  
            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/9-gunde-12-sporcumuz-yaristi-3150133-spor" target="_blank" title="9. gÃ¼nde 12 sporcumuz yarÄ±ÅtÄ±" class="gtm-tracker" data-newsPosition="6" data-newsId="3150133" data-newsName="9. gÃ¼nde 12 sporcumuz yarÄ±ÅtÄ±" data-newsVariant="box-news-image" data-newsList="8" data-newsCategory="Spor/DiÄer">
                    <figure>
                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627842834/3150133_300x300.jpg" alt="9. gÃ¼nde 12 sporcumuz yarÄ±ÅtÄ±" /></div>
                        <figcaption>
                            <span class="category  sport ">DiÄer</span>
                            <span class="title">9. gÃ¼nde 12 sporcumuz yarÄ±ÅtÄ±</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>    
            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/paletli-yuzmede-turkiye-rekoru-kirildi-3150103-spor" target="_blank" title="Paletli yÃ¼zmede TÃ¼rkiye rekoru!" class="gtm-tracker" data-newsPosition="6" data-newsId="3150103" data-newsName="Paletli yÃ¼zmede TÃ¼rkiye rekoru!" data-newsVariant="box-news-image" data-newsList="8" data-newsCategory="Spor/DiÄer/YÃ¼zme">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627838606/3150103_300x169.jpg" alt="Paletli yÃ¼zmede TÃ¼rkiye rekoru!" /></div>
                        <figcaption>
                            <span class="category  sport ">DiÄer</span>
                            <span class="title">Paletli yÃ¼zmede TÃ¼rkiye rekoru!</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>  
        </div>
    </div>
</div>
<div class="box-row character-lenght-1" id="9">

            <div class="box column-4 type1">
            <a  href="/masterchef-fikret-kimdir-masterchef-fikret-nereli-3151210-magazin" target="_blank" title="MasterChef Fikret kimdir?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151210" data-newsName="MasterChef Fikret kimdir?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="Magazin/Televizyon">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627934568/3151210_300x169.jpg" alt="MasterChef Fikret kimdir?" /></div>
                    <figcaption>
                        <span class="title">MasterChef Fikret kimdir?</span>
                    </figcaption>
                </figure>
            </a>
        </div>
    
    <div class="box column-4 two">
        <div class="box-row">

                        <div class="box column-6 type1">
                <a  href="/masterchef-sergen-kimdir-kac-yasinda-masterchef-sergen-nereli-3151219-magazin" target="_blank" title="MasterChef Sergen kimdir?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151219" data-newsName="MasterChef Sergen kimdir?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="Magazin/Televizyon">
                    <figure>
                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627935149/3151219_200x240.jpg" alt="MasterChef Sergen kimdir?" /></div>
                        <figcaption>
                            <span class="title">MasterChef Sergen kimdir?</span>
                        </figcaption>
                    </figure>
                </a>
            </div>
            
			                <div class="box column-6 type1">
                    <a  href="/izmir-yangin-son-dakika-bakan-acikladi-kontrol-altinda-3151287" target="_blank" title="Ä°zmir'de orman yangÄ±nÄ±" class="gtm-tracker" data-newsPosition="0" data-newsId="3151287" data-newsName="Ä°zmir\'de orman yangÄ±nÄ±" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/03/ver1627944181/3151287_200x240.jpg" alt="Ä°zmir'de orman yangÄ±nÄ±" /></div>
                            <figcaption>
                                <span class="title">Ä°zmir'de orman yangÄ±nÄ±</span>
                            </figcaption>
                        </figure>
                    </a>
                </div>
			        </div>
    </div>

	        <div class="box column-4 type1">
            <a  href="/masterchef-tunahan-kimdir-kac-yasinda-3151277-magazin" target="_blank" title="MasterChef Tunahan kimdir?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151277" data-newsName="MasterChef Tunahan kimdir?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="Magazin/Televizyon">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/03/ver1627942485/3151277_300x169.jpg" alt="MasterChef Tunahan kimdir?" /></div>
                    <figcaption>
                        <span class="title">MasterChef Tunahan kimdir?</span>
                    </figcaption>
                </figure>
            </a>
        </div>
	


	        <div class="box column-4 type1">
            <a  href="/askin-tarifi-9-yeni-bolum-fragmani-yayinda-askin-tarif-8-son-bolum-3151267-magazin" target="_blank" title="AÅkÄ±n Tarifi fragmanÄ± geldi" class="gtm-tracker" data-newsPosition="0" data-newsId="3151267" data-newsName="AÅkÄ±n Tarifi fragmanÄ± geldi" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="Magazin/Televizyon">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/03/ver1627940607/3151267_300x169.jpg" alt="AÅkÄ±n Tarifi fragmanÄ± geldi" /></div>
                    <figcaption>
                        <span class="title">AÅkÄ±n Tarifi fragmanÄ± geldi</span>
                    </figcaption>
                </figure>
            </a>
        </div>
	
    <div class="box column-4 two">
        <div class="box-row">

			                <div class="box column-6 type1">
                    <a  href="/kalp-yarasi-6-yeni-bolum-fragmani-yayinda-mi-kalp-yarasi-5-son-bolum-3151262-magazin" target="_blank" title="Kalp YarasÄ± fragman yayÄ±nda mÄ±?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151262" data-newsName="Kalp YarasÄ± fragman yayÄ±nda mÄ±?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="Magazin/Televizyon">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/03/ver1627939889/3151262_200x240.jpg" alt="Kalp YarasÄ± fragman yayÄ±nda mÄ±?" /></div>
                            <figcaption>
                                <span class="title">Kalp YarasÄ± fragman yayÄ±nda mÄ±?</span>
                            </figcaption>
                        </figure>
                    </a>
                </div>
			
			                <div class="box column-6 type1">
                    <a  href="/masterchef-kim-kazandi-masterchef-turkiye-finale-kim-kaldi-3151251-magazin" target="_blank" title="MasterChef kim kazandÄ±?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151251" data-newsName="MasterChef kim kazandÄ±?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="Magazin/Televizyon">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627939074/3151251_200x240.jpg" alt="MasterChef kim kazandÄ±?" /></div>
                            <figcaption>
                                <span class="title">MasterChef kim kazandÄ±?</span>
                            </figcaption>
                        </figure>
                    </a>
                </div>
			        </div>
    </div>

	        <div class="box column-4 type1">
            <a  href="/orman-yanginlari-dunyayi-etkisi-altina-aldi-avustralya-yunanistan-ispanya-italya-3151146" target="_blank" title="Orman yangÄ±nlarÄ± dÃ¼nyayÄ± etkisi altÄ±na aldÄ±!" class="gtm-tracker" data-newsPosition="0" data-newsId="3151146" data-newsName="Orman yangÄ±nlarÄ± dÃ¼nyayÄ± etkisi altÄ±na aldÄ±!" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="DÃ¼nya">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627932910/3151146_300x169.jpg" alt="Orman yangÄ±nlarÄ± dÃ¼nyayÄ± etkisi altÄ±na aldÄ±!" /></div>
                    <figcaption>
                        <span class="title">Orman yangÄ±nlarÄ± dÃ¼nyayÄ± etkisi altÄ±na aldÄ±!</span>
                    </figcaption>
                </figure>
            </a>
        </div>
	



	        <div class="box column-4 type1">
            <a  href="/yagmur-duasi-turkce-okunusu-yagmur-duasi-nasil-yapilir-3151119" target="_blank" title="YaÄmur duasÄ± nasÄ±l yapÄ±lÄ±r?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151119" data-newsName="YaÄmur duasÄ± nasÄ±l yapÄ±lÄ±r?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="NasÄ±l YapÄ±lÄ±r">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627932543/3151119_300x169.jpg" alt="YaÄmur duasÄ± nasÄ±l yapÄ±lÄ±r?" /></div>
                    <figcaption>
                        <span class="title">YaÄmur duasÄ± nasÄ±l yapÄ±lÄ±r?</span>
                    </figcaption>
                </figure>
            </a>
        </div>
	
    <div class="box column-4 two">
        <div class="box-row">

			                <div class="box column-6 type1">
                    <a  href="/son-dakika-isparta-da-yangin-isparta-sutculerdeki-yangin-genisliyor-3151127" target="_blank" title="Isparta'da yangÄ±n!" class="gtm-tracker" data-newsPosition="0" data-newsId="3151127" data-newsName="Isparta\'da yangÄ±n!" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627930521/3151127_200x240.jpg" alt="Isparta'da yangÄ±n!" /></div>
                            <figcaption>
                                <span class="title">Isparta'da yangÄ±n!</span>
                            </figcaption>
                        </figure>
                    </a>
                </div>
			
			                <div class="box column-6 type1">
                    <a  href="/paella-tarifi-paella-nasil-yapilir-3151113" target="_blank" title="Paella nasÄ±l yapÄ±lÄ±r?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151113" data-newsName="Paella nasÄ±l yapÄ±lÄ±r?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="Yemek Yapma">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627928582/3151113_200x240.jpg" alt="Paella nasÄ±l yapÄ±lÄ±r?" /></div>
                            <figcaption>
                                <span class="title">Paella nasÄ±l yapÄ±lÄ±r?</span>
                            </figcaption>
                        </figure>
                    </a>
                </div>
			        </div>
    </div>

	        <div class="box column-4 type1">
            <a  href="/emine-gokkiz-a-ne-oldu-emine-gokkiz-in-cansiz-bedeni-bulundu-3151099" target="_blank" title="Emine GÃ¶kkÄ±z'a ne oldu?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151099" data-newsName="Emine GÃ¶kkÄ±z\'a ne oldu?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627927021/3151099_300x169.jpg" alt="Emine GÃ¶kkÄ±z'a ne oldu?" /></div>
                    <figcaption>
                        <span class="title">Emine GÃ¶kkÄ±z'a ne oldu?</span>
                    </figcaption>
                </figure>
            </a>
        </div>
	


	        <div class="box column-4 type1">
            <a  href="/kabine-toplantisi-ne-zaman-kabine-toplantisi-hangi-gun-duzenlenecek-3151014" target="_blank" title="Kabine toplantÄ±sÄ± ne zaman?" class="gtm-tracker" data-newsPosition="0" data-newsId="3151014" data-newsName="Kabine toplantÄ±sÄ± ne zaman?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627921989/3151014_300x169.jpg" alt="Kabine toplantÄ±sÄ± ne zaman?" /></div>
                    <figcaption>
                        <span class="title">Kabine toplantÄ±sÄ± ne zaman?</span>
                    </figcaption>
                </figure>
            </a>
        </div>
	
    <div class="box column-4 two">
        <div class="box-row">

			                <div class="box column-6 type1">
                    <a  href="/yanginda-son-durum-marmaris-fethiye-bodrum-antalya-yanginlarinda-son-durum-3151061" target="_blank" title="Ä°Åte yangÄ±nlarda son durum!" class="gtm-tracker" data-newsPosition="0" data-newsId="3151061" data-newsName="Ä°Åte yangÄ±nlarda son durum!" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627923600/3151061_200x240.jpg" alt="Ä°Åte yangÄ±nlarda son durum!" /></div>
                            <figcaption>
                                <span class="title">Ä°Åte yangÄ±nlarda son durum!</span>
                            </figcaption>
                        </figure>
                    </a>
                </div>
			
			                <div class="box column-6 type1">
                    <a  href="/dgs-sonuclari-aciklandi-mi-dgs-sonuclari-ne-zaman-aciklanacak-2021-dgs-sonuc-tarihi-aciklandi-3150578" target="_blank" title="DGS sonuÃ§ tarihi aÃ§Ä±klandÄ±!" class="gtm-tracker" data-newsPosition="0" data-newsId="3150578" data-newsName="DGS sonuÃ§ tarihi aÃ§Ä±klandÄ±!" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem/EÄitim">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627900950/3150578_200x240.jpg" alt="DGS sonuÃ§ tarihi aÃ§Ä±klandÄ±!" /></div>
                            <figcaption>
                                <span class="title">DGS sonuÃ§ tarihi aÃ§Ä±klandÄ±!</span>
                            </figcaption>
                        </figure>
                    </a>
                </div>
			        </div>
    </div>

	        <div class="box column-4 type1">
            <a  href="/azra-gulendam-haytaoglu-kimdir-azra-gulendam-haytaoglu-hayati-hakkinda-3150676" target="_blank" title="Azra GÃ¼lendam HaytaoÄlu kimdir?" class="gtm-tracker" data-newsPosition="0" data-newsId="3150676" data-newsName="Azra GÃ¼lendam HaytaoÄlu kimdir?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem/3. Sayfa">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627907340/3150676_300x169.jpg" alt="Azra GÃ¼lendam HaytaoÄlu kimdir?" /></div>
                    <figcaption>
                        <span class="title">Azra GÃ¼lendam HaytaoÄlu kimdir?</span>
                    </figcaption>
                </figure>
            </a>
        </div>
	












            <div class="box column-4 type1">
            <a  href="/cumartesi-bankalar-acik-mi-banka-calisma-saatleri-degisti-bankalar-kacta-aciliyor-kacta-kapaniyor-3148737-ekonomi" target="_blank" title="Bankalar hafta sonu aÃ§Ä±k mÄ±?" class="gtm-tracker" data-newsPosition="0" data-newsId="3148737" data-newsName="Bankalar hafta sonu aÃ§Ä±k mÄ±?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="Ekonomi/Merak Edilenler">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627712484/3148737_300x169.jpg" alt="Bankalar hafta sonu aÃ§Ä±k mÄ±?" /></div>
                    <figcaption>
                        <span class="title">Bankalar hafta sonu aÃ§Ä±k mÄ±?</span>
                    </figcaption>
                </figure>
            </a>
        </div>
    
    <div class="box column-4 two">
        <div class="box-row">

                            <div class="box column-6 type1">
                    <a  href="/31-temmuz-istanbul-da-sular-ne-zaman-gelecek-iski-son-dakika-istanbul-su-kesintisi-duyurulari-3148784" target="_blank" title="Ä°STANBULLULAR DÄ°KKAT! Ä°SKÄ° su kesintileri" class="gtm-tracker" data-newsPosition="0" data-newsId="3148784" data-newsName="Ä°STANBULLULAR DÄ°KKAT! Ä°SKÄ° su kesintileri" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627887869/3148784_200x240.jpg" alt="Ä°STANBULLULAR DÄ°KKAT! Ä°SKÄ° su kesintileri" /></div>
                            <figcaption>
                                <span class="title">Ä°STANBULLULAR DÄ°KKAT! Ä°SKÄ° su kesintileri</span>
                            </figcaption>
                        </figure>
                    </a>
                </div>
            
                            <div class="box column-6 type1">
                    <a  href="/31-temmuz-istanbul-da-elektrik-ne-zaman-gelecek-ayedas-bedas-istanbul-elektrik-kesintisi-sorgula-3148750" target="_blank" title="Ä°stanbul'da elektrikler ne zaman gelecek? " class="gtm-tracker" data-newsPosition="0" data-newsId="3148750" data-newsName="Ä°stanbul\'da elektrikler ne zaman gelecek?" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem">
                        <figure>
                            <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627713464/3148750_200x240.jpg" alt="Ä°stanbul'da elektrikler ne zaman gelecek? " /></div>
                            <figcaption>
                                <span class="title">Ä°stanbul'da elektrikler ne zaman gelecek? </span>
                            </figcaption>
                        </figure>
                    </a>
                </div>
                    </div>
    </div>

            <div class="box column-4 type1">
            <a  href="/osym-duyurdu-2021-kpss-yokdil-sinavlari-ne-zaman-2021-ales-tus-sts-yds-basvurulari-ve-2021-osym-sinav-takvimi-3148814" target="_blank" title="2021 ÃSYM sÄ±nav takvimi" class="gtm-tracker" data-newsPosition="0" data-newsId="3148814" data-newsName="2021 ÃSYM sÄ±nav takvimi" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="GÃ¼ndem">
                <figure>
                    <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627809983/3148814_300x169.jpg" alt="2021 ÃSYM sÄ±nav takvimi" /></div>
                    <figcaption>
                        <span class="title">2021 ÃSYM sÄ±nav takvimi</span>
                    </figcaption>
                </figure>
            </a>
        </div>
    







    <div class="box column-12">
        <div class="box-row">
            <div class="box column-4 two">
                <div class="box-row">
                    <!-- item -->
                    <div class="box column-6 type1">
                                                <a  href="/2-bin-400-yillik-mezar-gun-yuzune-cikti-3148891" target="_blank" title="BalÄ±kesir'de ortaya Ã§Ä±karÄ±ldÄ±... 2 bin 400 yÄ±llÄ±k!" class="gtm-tracker" data-newsPosition="0" data-newsId="3148891" data-newsName="BalÄ±kesir\'de ortaya Ã§Ä±karÄ±ldÄ±... 2 bin 400 yÄ±llÄ±k!" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="YaÅam">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627720388/3148891_200x240.jpg" alt="BalÄ±kesir'de ortaya Ã§Ä±karÄ±ldÄ±... 2 bin 400 yÄ±llÄ±k!" /></div>
                                <figcaption>
                                    <span class="category  life ">YaÅam</span>
                                    <span class="title">BalÄ±kesir'de ortaya Ã§Ä±karÄ±ldÄ±... 2 bin 400 yÄ±llÄ±k!</span>
                                </figcaption>
                            </figure>
                        </a>
                    </div>

                    <div class="box column-6 type1">
                                                <a  href="/riza-kayaalp-finale-cikamadi-3149590-spor" target="_blank" title="RÄ±za Kayaalp finale Ã§Ä±kamadÄ±!" class="gtm-tracker" data-newsPosition="3" data-newsId="3149590" data-newsName="RÄ±za Kayaalp finale Ã§Ä±kamadÄ±!" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="Spor/2020 Tokyo OlimpiyatlarÄ±">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627822880/3149590_200x240.jpg" alt="RÄ±za Kayaalp finale Ã§Ä±kamadÄ±!" /></div>
                                <figcaption>
                                    <span class="category  sport ">2020 Tokyo OlimpiyatlarÄ±</span>
                                    <span class="title">RÄ±za Kayaalp finale Ã§Ä±kamadÄ±!</span>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
                </div>

            <!-- item -->
            <div class="box column-4 two">
                <div class="box-row">
                    <!-- left -->
                    <div class="box column-6 type1">
                                                <a  href="/gabon-daki-ivindo-ulusal-parki-unesco-dunya-mirasi-listesi-ne-alindi-3147981" target="_blank" title="Ä°vindo Ulusal ParkÄ± UNESCO'ya girdi" class="gtm-tracker" data-newsPosition="1" data-newsId="3147981" data-newsName="Ä°vindo Ulusal ParkÄ± UNESCO\'ya girdi" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="YaÅam">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/30/ver1627647822/3147981_200x240.jpg" alt="Ä°vindo Ulusal ParkÄ± UNESCO'ya girdi" /></div>
                                <figcaption>
                                    <span class="category  life ">YaÅam</span>
                                    <span class="title">Ä°vindo Ulusal ParkÄ± UNESCO'ya girdi</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                    <!-- right -->
                    <div class="box column-6 type1">
                                                <a  href="/aizanoi-antik-kenti-ndeki-zeus-tapinagi-nin-anitsal-kutsal-alan-giris-yapisi-bulundu-3147924" target="_blank" title="Heyecan verici keÅif! GiriÅ yapÄ±sÄ± bulundu" class="gtm-tracker" data-newsPosition="2" data-newsId="3147924" data-newsName="Heyecan verici keÅif! GiriÅ yapÄ±sÄ± bulundu" data-newsVariant="box-news-image" data-newsList="9" data-newsCategory="YaÅam">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/30/ver1627643291/3147924_200x240.jpg" alt="Heyecan verici keÅif! GiriÅ yapÄ±sÄ± bulundu" /></div>
                                <figcaption>
                                    <span class="category  life ">YaÅam</span>
                                    <span class="title">Heyecan verici keÅif! GiriÅ yapÄ±sÄ± bulundu</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                </div>
            </div>


            <div class="box column-4 dimensions-1">
                <div class=" ad-ver-ti-se-ment adv300250">
					<div id="zone_1967" data-zone-id="1967" class="ads-zone lazy-init"></div>                </div>
            </div>
        </div>
    </div>






</div><div class="box-row" id="10"> 

    <!-- left -->
    <div class="box column-4" >
        <div class="box-row">

            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/diana-ve-charlesin-dugun-pastasi-acik-artirmaya-cikiyor-3147819" target="_blank" title="40 yÄ±l saklanan pasta satÄ±Åa Ã§Ä±kÄ±yor... BakÄ±n kime ait!" class="gtm-tracker" data-newsPosition="0" data-newsId="3147819" data-newsName="40 yÄ±l saklanan pasta satÄ±Åa Ã§Ä±kÄ±yor... BakÄ±n kime ait!" data-newsVariant="box-news-image" data-newsList="10" data-newsCategory="YaÅam">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/30/ver1627635827/3147819_300x169.jpg" alt="40 yÄ±l saklanan pasta satÄ±Åa Ã§Ä±kÄ±yor... BakÄ±n kime ait!" /></div>
                        <figcaption>
                            <span class="category  life ">YaÅam</span>
                            <span class="title">40 yÄ±l saklanan pasta satÄ±Åa Ã§Ä±kÄ±yor... BakÄ±n kime ait!</span>
                        </figcaption>
                    </figure>
                </a>        

            </div>
            <!-- item -->





            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/dogunun-masal-diyari-goz-kamastiriyor-3148149" target="_blank" title="DoÄunun masal diyarÄ±!" class="gtm-tracker" data-newsPosition="1" data-newsId="3148149" data-newsName="DoÄunun masal diyarÄ±!" data-newsVariant="box-news-image" data-newsList="10" data-newsCategory="YaÅam">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/30/ver1627651583/3148149_300x169.jpg" alt="DoÄunun masal diyarÄ±!" /></div>
                        <figcaption>
                            <span class="category  life ">YaÅam</span>
                            <span class="title">DoÄunun masal diyarÄ±!</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>



        </div>
    </div>

    <!-- center -->
    <div class="box column-4">
        <div class="box-row">

            <div class="box column-12 type1">
                                <a href="/video/haber/izle/kanyonda-ayagi-kaydi-4-saat-suren-operasyonla-kurtarildi/730158" target="_blank" title="Kanyon'da ayaÄÄ± kaydÄ±, 4 saat sÃ¼ren operasyonla kurtarÄ±ldÄ±" class="gtm-tracker" data-newsPosition="2" data-newsId="730158" data-newsName="Kanyon\'da ayaÄÄ± kaydÄ±, 4 saat sÃ¼ren operasyonla kurtarÄ±ldÄ±" data-newsVariant="video-image" data-newsList="10" data-newsCategory="Haber/TÃ¼rkiye">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://mo.ciner.com.tr/video/2021/07/24/ver1627110102/31C13369BE5123DCFD1BA0F82ACA9B5C_360x203.jpg" alt="Kanyon'da ayaÄÄ± kaydÄ±, 4 saat sÃ¼ren operasyonla kurtarÄ±ldÄ±" /></div>
                        <figcaption>
                            <span class="title">Kanyon'da ayaÄÄ± kaydÄ±, 4 saat sÃ¼ren operasyonla kurtarÄ±ldÄ±</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>

            <div class="box column-12 two">
                <div class="box-row">
                    <!-- left -->
                    <div class="box column-6 type1">
                                                <a  href="/gokhan-aklan-ile-nesrin-cavadzade-evleniyor-magazin-haberleri-3149117-magazin" target="_blank" title="Evleniyorlar!" class="gtm-tracker" data-newsPosition="3" data-newsId="3149117" data-newsName="Evleniyorlar!" data-newsVariant="box-news-image" data-newsList="10" data-newsCategory="Magazin">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627762167/3149117_200x240.jpg" alt="Evleniyorlar!" /></div>
                                <figcaption>
                                    <span class="category  magazine ">Magazin</span>
                                    <span class="title">Evleniyorlar!</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                    <!-- right -->
                    <div class="box column-6 type1">
                                                <a  href="/aleyna-derelioglu-oyunculuk-teklifleri-geliyor-magazin-haberleri-3149177-magazin" target="_blank" title="&quot;Oyunculuk teklifleri geliyor&quot;" class="gtm-tracker" data-newsPosition="4" data-newsId="3149177" data-newsName="&quot;Oyunculuk teklifleri geliyor&quot;" data-newsVariant="box-news-image" data-newsList="10" data-newsCategory="Magazin">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627738994/3149177_200x240.jpg" alt="&quot;Oyunculuk teklifleri geliyor&quot;" /></div>
                                <figcaption>
                                    <span class="category  magazine ">Magazin</span>
                                    <span class="title">"Oyunculuk teklifleri geliyor"</span>
                                </figcaption>
                            </figure>
                        </a>        
                    </div>
                </div>
            </div>



        </div>
    </div>

    <!-- right -->
    <div class="box column-4">
        <div class="box-row">
            <!-- item -->
            <div class="box column-12 type1">
                                <a  href="/gencler-avrupa-judo-kupasi-ni-9-madalyayla-tamamladik-3150117-spor" target="_blank" title="9 madalyayla dÃ¶nÃ¼yorlar!" class="gtm-tracker" data-newsPosition="5" data-newsId="3150117" data-newsName="9 madalyayla dÃ¶nÃ¼yorlar!" data-newsVariant="box-news-image" data-newsList="10" data-newsCategory="Spor/DiÄer">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627840774/3150117_300x169.jpg" alt="9 madalyayla dÃ¶nÃ¼yorlar!" /></div>
                        <figcaption>
                            <span class="category  sport ">DiÄer</span>
                            <span class="title">9 madalyayla dÃ¶nÃ¼yorlar!</span>
                        </figcaption>
                    </figure>
                </a>        

            </div>

            <div class="box column-12 type1">
                                <a  href="/milli-motosikletci-bahattin-sofuoglu-italya-sampiyonasi-nin-ikinci-yarisinda-ikinci-oldu-3150148-spor" target="_blank" title="Ä°talya'da 2. yarÄ±ÅÄ±nda 2. oldu" class="gtm-tracker" data-newsPosition="6" data-newsId="3150148" data-newsName="Ä°talya\'da 2. yarÄ±ÅÄ±nda 2. oldu" data-newsVariant="box-news-image" data-newsList="10" data-newsCategory="Spor/Motor SporlarÄ±">
                    <figure>
                        <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627844340/3150148_300x169.jpg" alt="Ä°talya'da 2. yarÄ±ÅÄ±nda 2. oldu" /></div>
                        <figcaption>
                            <span class="category  sport ">Motor SporlarÄ±</span>
                            <span class="title">Ä°talya'da 2. yarÄ±ÅÄ±nda 2. oldu</span>
                        </figcaption>
                    </figure>
                </a>        
            </div>


        </div>
    </div>

</div><div class="box-row" id="11"> 
    <div class="box column-12">
    
        <div class="box-row"> 
            <div class="box column-4" >
                <div class=" ad-ver-ti-se-ment adv300250">
                    <div id="zone_1929" data-zone-id="1929" class="ads-zone lazy-init"></div>  
                </div>
            </div>

            <div class="box column-4" >
                <div class="box-row">

                    <!-- item -->
                    <div class="box column-12 type1">
                                                <a  href="/pertek-ve-mazgirt-in-tarihi-ve-dogal-guzellikleri-havadan-goruntulendi-3146999" target="_blank" title="Tarihi ve doÄal gÃ¼zellikleri helikopterle gÃ¶rÃ¼ntÃ¼lendi" class="gtm-tracker" data-newsPosition="0" data-newsId="3146999" data-newsName="Tarihi ve doÄal gÃ¼zellikleri helikopterle gÃ¶rÃ¼ntÃ¼lendi" data-newsVariant="box-news-image" data-newsList="11" data-newsCategory="YaÅam">
                            <figure>
                                <div class="img img-16x9"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/29/ver1627564126/3146999_300x169.jpg" alt="Tarihi ve doÄal gÃ¼zellikleri helikopterle gÃ¶rÃ¼ntÃ¼lendi" /></div>
                                <figcaption>
                                    <span class="category  life ">YaÅam</span>
                                    <span class="title">Tarihi ve doÄal gÃ¼zellikleri helikopterle gÃ¶rÃ¼ntÃ¼lendi</span>
                                </figcaption>
                            </figure>
                        </a>        

                    </div>
                    <!-- item -->
                </div>
            </div>

            <div class="box column-4" >
                <div class=" ad-ver-ti-se-ment adv300250">
                    <div id="zone_2153" data-zone-id="2153" class="ads-zone lazy-init"></div>  
                </div>
            </div>
        </div>

        <div class="box-row">
            <div class="box column-4 two">
                <div class="box-row">
                    <div class="box column-6 type1">
                                                <a  href="/yeliz-yesilmen-kizi-asya-tuana-ile-bodrum-da-magazin-haberleri-3148921-magazin" target="_blank" title="Anne-kÄ±zÄ±n tatil keyfi" class="gtm-tracker" data-newsPosition="2" data-newsId="3148921" data-newsName="Anne-kÄ±zÄ±n tatil keyfi" data-newsVariant="box-news-image" data-newsList="11" data-newsCategory="Magazin">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627732504/3148921_200x240.jpg" alt="Anne-kÄ±zÄ±n tatil keyfi" /></div>
                                <figcaption>
                                    <span class="category  magazine ">Magazin</span>
                                    <span class="title">Anne-kÄ±zÄ±n tatil keyfi</span>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div class="box column-6 type1">
                                                <a  href="/pinar-deniz-ile-yigit-kirazci-ilk-kez-el-ele-goruntulendi-magazin-haberleri-3148831-magazin" target="_blank" title="AÅÄ±klar ilk kez el ele!" class="gtm-tracker" data-newsPosition="4" data-newsId="3148831" data-newsName="AÅÄ±klar ilk kez el ele!" data-newsVariant="box-news-image" data-newsList="11" data-newsCategory="Magazin">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627721610/3148831_200x240.jpg" alt="AÅÄ±klar ilk kez el ele!" /></div>
                                <figcaption>
                                    <span class="category  magazine ">Magazin</span>
                                    <span class="title">AÅÄ±klar ilk kez el ele!</span>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>

            <div class="box column-4 two">
                <div class="box-row">
                    <div class="box column-6 type1">
                                                <a  href="/riza-kocaoglu-kilolari-geri-aldi-magazin-haberleri-3148642-magazin" target="_blank" title="Hazal gitti, gÃ¶bek geldi!" class="gtm-tracker" data-newsPosition="2" data-newsId="3148642" data-newsName="Hazal gitti, gÃ¶bek geldi!" data-newsVariant="box-news-image" data-newsList="11" data-newsCategory="Magazin">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627722992/3148642_200x240.jpg" alt="Hazal gitti, gÃ¶bek geldi!" /></div>
                                <figcaption>
                                    <span class="category  magazine ">Magazin</span>
                                    <span class="title">Hazal gitti, gÃ¶bek geldi!</span>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                    <div class="box column-6 type1">
                                                <a  href="/heidi-klum-ile-tom-kaulitz-guvertede-aska-geldi-magazin-haberleri-3149007-magazin" target="_blank" title="ÃnlÃ¼ Ã§ift gÃ¼vertede aÅka geldi!" class="gtm-tracker" data-newsPosition="4" data-newsId="3149007" data-newsName="ÃnlÃ¼ Ã§ift gÃ¼vertede aÅka geldi!" data-newsVariant="box-news-image" data-newsList="11" data-newsCategory="Magazin/DÃ¼nyadan">
                            <figure>
                                <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627733280/3149007_200x240.jpg" alt="ÃnlÃ¼ Ã§ift gÃ¼vertede aÅka geldi!" /></div>
                                <figcaption>
                                    <span class="category  magazine ">DÃ¼nyadan</span>
                                    <span class="title">ÃnlÃ¼ Ã§ift gÃ¼vertede aÅka geldi!</span>
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>

            <div class="box column-4 two">
                <div class="box-row">
                    <div class="box column-6 type1">
                                                        <a  href="/songul-karli-fethiye-deki-yangini-goruntuledi-3148900-magazin" target="_blank" title="YangÄ±nÄ± gÃ¶rÃ¼ntÃ¼ledi: Oteller boÅaltÄ±lÄ±yor!" class="gtm-tracker" data-newsPosition="3" data-newsId="3148900" data-newsName="YangÄ±nÄ± gÃ¶rÃ¼ntÃ¼ledi: Oteller boÅaltÄ±lÄ±yor!" data-newsVariant="box-news-image" data-newsList="11" data-newsCategory="Magazin">
                                <figure>
                                    <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627722981/3148900_200x240.jpg" alt="YangÄ±nÄ± gÃ¶rÃ¼ntÃ¼ledi: Oteller boÅaltÄ±lÄ±yor!" /></div>
                                    <figcaption>
                                        <span class="category  magazine ">Magazin</span>
                                        <span class="title">YangÄ±nÄ± gÃ¶rÃ¼ntÃ¼ledi: Oteller boÅaltÄ±lÄ±yor!</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>
                    <div class="box column-6 type1">
                        <div class="box-row">
                            <!-- item -->
                            <div class="box column-12 type1">
                                                                <a  href="/golfte-altin-schauffele-nin-3150002-spor" target="_blank" title="Golfte altÄ±n Schauffele'nin" class="gtm-tracker" data-newsPosition="2" data-newsId="3150002" data-newsName="Golfte altÄ±n Schauffele\'nin" data-newsVariant="box-news-image" data-newsList="11" data-newsCategory="Spor/DiÄer/Golf">
                                    <figure>
                                        <div class="img img-1x1"><img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/01/ver1627829576/3150002_200x240.jpg" alt="Golfte altÄ±n Schauffele'nin" /></div>
                                        <figcaption>
                                            <span class="category  sport ">DiÄer</span>
                                            <span class="title">Golfte altÄ±n Schauffele'nin</span>
                                        </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div><div class="box-row" id="12">

    <div class="box column-4">
        <div class="widget-local-news widget dimensions-3" id="YerelHaberlerWidget">
            <div class="head">
                <a href="/yerel-haberler" target="_blank" class="title" title="Yerel Haberler">YEREL HABERLER</a>
            </div>
            <div class="widget-local-news-scroll type1">
                <div class="swiper-container slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="content">
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/kirsehir-haberleri">
                                            KIRÅEHÄ°R                                        </a>
                                        <span class="date">08:59</span>
                                        <a class="title gtm-tracker" target="_blank" title="KAEÃ, tercih yapacak aday Ã¶Ärencilerle bir araya geliyor" href="/kirsehir-haberleri/89499442-kaeu-tercih-yapacak-aday-ogrencilerle-bir-araya-geliyor" data-newsPosition="1" data-newsId="89499442" data-newsName="KAEÃ, tercih yapacak aday Ã¶Ärencilerle bir araya geliyor" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetKirsehir" data-newsCategory="yerelhaber">
                                            KAEÃ, tercih yapacak aday Ã¶Ärencilerle bir araya geliyor                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/nevsehir-haberleri">
                                            NEVÅEHÄ°R                                        </a>
                                        <span class="date">08:53</span>
                                        <a class="title gtm-tracker" target="_blank" title="UÃ§hisarâda uyuÅturucudan yabancÄ± uyruklu 16 kiÅi yakalandÄ±" href="/nevsehir-haberleri/89499376-uchisarda-uyusturucudan-yabanci-uyruklu-16-kisi-yakalandi" data-newsPosition="2" data-newsId="89499376" data-newsName="UÃ§hisarâda uyuÅturucudan yabancÄ± uyruklu 16 kiÅi yakalandÄ±" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetNevsehir" data-newsCategory="yerelhaber">
                                            UÃ§hisarâda uyuÅturucudan yabancÄ± uyruklu 16 kiÅi yakalandÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/kayseri-haberleri">
                                            KAYSERÄ°                                        </a>
                                        <span class="date">08:52</span>
                                        <a class="title gtm-tracker" target="_blank" title="Kayseri Ä°tfaiyesi yangÄ±n bÃ¶lgesinde Ã§alÄ±ÅmalarÄ±nÄ± sÃ¼rdÃ¼rÃ¼yor
Ekipler hem alevlerle mÃ¼cadele ediyor hem de canlÄ±larÄ±n zarar gÃ¶rmemesi iÃ§in Ã§alÄ±ÅÄ±yor" href="/kayseri-haberleri/89499367-kayseri-itfaiyesi-yangin-bolgesinde-calismalarini-surduruyorekipler-hem-alevlerle-mucadele" data-newsPosition="3" data-newsId="89499367" data-newsName="Kayseri Ä°tfaiyesi yangÄ±n bÃ¶lgesinde Ã§alÄ±ÅmalarÄ±nÄ± sÃ¼rdÃ¼rÃ¼yor
Ekipler hem alevlerle mÃ¼cadele ediyor hem de canlÄ±larÄ±n zarar gÃ¶rmemesi iÃ§in Ã§alÄ±ÅÄ±yor" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetKayseri" data-newsCategory="yerelhaber">
                                            Kayseri Ä°tfaiyesi yangÄ±n bÃ¶lgesinde Ã§alÄ±ÅmalarÄ±nÄ± sÃ¼rdÃ¼rÃ¼yor
Ekipler hem alevlerle mÃ¼cadele ediyor hem de canlÄ±larÄ±n zarar gÃ¶rmemesi iÃ§in Ã§alÄ±ÅÄ±yor                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/nevsehir-haberleri">
                                            NEVÅEHÄ°R                                        </a>
                                        <span class="date">08:52</span>
                                        <a class="title gtm-tracker" target="_blank" title="Avanosâta uyuÅturucudan 2 ÅÃ¼pheli tutuklandÄ±" href="/nevsehir-haberleri/89499364-avanosta-uyusturucudan-2-supheli-tutuklandi" data-newsPosition="4" data-newsId="89499364" data-newsName="Avanosâta uyuÅturucudan 2 ÅÃ¼pheli tutuklandÄ±" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetNevsehir" data-newsCategory="yerelhaber">
                                            Avanosâta uyuÅturucudan 2 ÅÃ¼pheli tutuklandÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/adana-haberleri">
                                            ADANA                                        </a>
                                        <span class="date">08:30</span>
                                        <a class="title gtm-tracker" target="_blank" title="Adanaâda tefeci operasyonu
Tefecilik yaptÄ±klarÄ± iddia edilen 17 kiÅinin yakalanmasÄ± iÃ§in Åafak vakti operasyon yapÄ±ldÄ±" href="/adana-haberleri/89499181-adanada-tefeci-operasyonutefecilik-yaptiklari-iddia-edilen-17-kisinin-yakalanmasi-icin" data-newsPosition="5" data-newsId="89499181" data-newsName="Adanaâda tefeci operasyonu
Tefecilik yaptÄ±klarÄ± iddia edilen 17 kiÅinin yakalanmasÄ± iÃ§in Åafak vakti operasyon yapÄ±ldÄ±" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetAdana" data-newsCategory="yerelhaber">
                                            Adanaâda tefeci operasyonu
Tefecilik yaptÄ±klarÄ± iddia edilen 17 kiÅinin yakalanmasÄ± iÃ§in Åafak vakti operasyon yapÄ±ldÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/adana-haberleri">
                                            ADANA                                        </a>
                                        <span class="date">08:30</span>
                                        <a class="title gtm-tracker" target="_blank" title="Kozan ÃlkÃ¼ OcaklarÄ±ndan yangÄ±nzedelere 1 tÄ±r dolusu yardÄ±m" href="/adana-haberleri/89499178-kozan-ulku-ocaklarindan-yanginzedelere-1-tir-dolusu-yardim" data-newsPosition="6" data-newsId="89499178" data-newsName="Kozan ÃlkÃ¼ OcaklarÄ±ndan yangÄ±nzedelere 1 tÄ±r dolusu yardÄ±m" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetAdana" data-newsCategory="yerelhaber">
                                            Kozan ÃlkÃ¼ OcaklarÄ±ndan yangÄ±nzedelere 1 tÄ±r dolusu yardÄ±m                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/denizli-haberleri">
                                            DENÄ°ZLÄ°                                        </a>
                                        <span class="date">08:22</span>
                                        <a class="title gtm-tracker" target="_blank" title="Denizli'nin 2 projesi, Ä°mam Hatip OkullarÄ± BaÅarÄ±lÄ± Ãrnekler Sergisine seÃ§ildi" href="/denizli-haberleri/89499076-denizlinin-2-projesi-imam-hatip-okullari-basarili-ornekler-sergisine-secildi" data-newsPosition="7" data-newsId="89499076" data-newsName="Denizli\'nin 2 projesi, Ä°mam Hatip OkullarÄ± BaÅarÄ±lÄ± Ãrnekler Sergisine seÃ§ildi" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetDenizli" data-newsCategory="yerelhaber">
                                            Denizli'nin 2 projesi, Ä°mam Hatip OkullarÄ± BaÅarÄ±lÄ± Ãrnekler Sergisine seÃ§ildi                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/adana-haberleri">
                                            ADANA                                        </a>
                                        <span class="date">08:22</span>
                                        <a class="title gtm-tracker" target="_blank" title="Seyhan Belediyesiânde gÃ¼ndem orman yangÄ±nlarÄ± oldu" href="/adana-haberleri/89499070-seyhan-belediyesinde-gundem-orman-yanginlari-oldu" data-newsPosition="8" data-newsId="89499070" data-newsName="Seyhan Belediyesiânde gÃ¼ndem orman yangÄ±nlarÄ± oldu" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetAdana" data-newsCategory="yerelhaber">
                                            Seyhan Belediyesiânde gÃ¼ndem orman yangÄ±nlarÄ± oldu                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/denizli-haberleri">
                                            DENÄ°ZLÄ°                                        </a>
                                        <span class="date">08:22</span>
                                        <a class="title gtm-tracker" target="_blank" title="Pamukkaleâden yangÄ±n bÃ¶lgelerine tam destek" href="/denizli-haberleri/89499061-pamukkaleden-yangin-bolgelerine-tam-destek" data-newsPosition="9" data-newsId="89499061" data-newsName="Pamukkaleâden yangÄ±n bÃ¶lgelerine tam destek" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetDenizli" data-newsCategory="yerelhaber">
                                            Pamukkaleâden yangÄ±n bÃ¶lgelerine tam destek                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/adana-haberleri">
                                            ADANA                                        </a>
                                        <span class="date">08:19</span>
                                        <a class="title gtm-tracker" target="_blank" title="Kozan Belediyesinde borÃ§lanma yetkisi reddedildi" href="/adana-haberleri/89498992-kozan-belediyesinde-borclanma-yetkisi-reddedildi" data-newsPosition="10" data-newsId="89498992" data-newsName="Kozan Belediyesinde borÃ§lanma yetkisi reddedildi" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetAdana" data-newsCategory="yerelhaber">
                                            Kozan Belediyesinde borÃ§lanma yetkisi reddedildi                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/sakarya-haberleri">
                                            SAKARYA                                        </a>
                                        <span class="date">08:04</span>
                                        <a class="title gtm-tracker" target="_blank" title="AkÄ±ntÄ±ya kapÄ±ldÄ±, yÃ¼zmekten bitkin dÃ¼ÅtÃ¼ÄÃ¼ anda kurtarÄ±ldÄ±Â " href="/sakarya-haberleri/89498863-akintiya-kapildi-yuzmekten-bitkin-dustugu-anda-kurtarildi" data-newsPosition="11" data-newsId="89498863" data-newsName="AkÄ±ntÄ±ya kapÄ±ldÄ±, yÃ¼zmekten bitkin dÃ¼ÅtÃ¼ÄÃ¼ anda kurtarÄ±ldÄ±Â " data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetSakarya" data-newsCategory="yerelhaber">
                                            AkÄ±ntÄ±ya kapÄ±ldÄ±, yÃ¼zmekten bitkin dÃ¼ÅtÃ¼ÄÃ¼ anda kurtarÄ±ldÄ±Â                                         </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/adana-haberleri">
                                            ADANA                                        </a>
                                        <span class="date">07:56</span>
                                        <a class="title gtm-tracker" target="_blank" title="5 milyon 700 bin lira vurgun yapan tefeci Ã§etesine operasyon" href="/adana-haberleri/89498767-5-milyon-700-bin-lira-vurgun-yapan-tefeci-cetesine-operasyon" data-newsPosition="12" data-newsId="89498767" data-newsName="5 milyon 700 bin lira vurgun yapan tefeci Ã§etesine operasyon" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetAdana" data-newsCategory="yerelhaber">
                                            5 milyon 700 bin lira vurgun yapan tefeci Ã§etesine operasyon                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/kars-haberleri">
                                            KARS                                        </a>
                                        <span class="date">07:53</span>
                                        <a class="title gtm-tracker" target="_blank" title="Anadoluânun ilk TÃ¼rk camisinden ezan sesi yankÄ±landÄ±" href="/kars-haberleri/89498806-anadolunun-ilk-turk-camisinden-ezan-sesi-yankilandi" data-newsPosition="13" data-newsId="89498806" data-newsName="Anadoluânun ilk TÃ¼rk camisinden ezan sesi yankÄ±landÄ±" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetKars" data-newsCategory="yerelhaber">
                                            Anadoluânun ilk TÃ¼rk camisinden ezan sesi yankÄ±landÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/mugla-haberleri">
                                            MUÄLA                                        </a>
                                        <span class="date">06:39</span>
                                        <a class="title gtm-tracker" target="_blank" title="Milas'taki yangÄ±nda 3'Ã¼ncÃ¼ gÃ¼n; havadan mÃ¼dahale yeniden baÅladÄ± (4)" href="/mugla-haberleri/89498155-milastaki-yanginda-3uncu-gun-havadan-mudahale-yeniden-basladi-4" data-newsPosition="14" data-newsId="89498155" data-newsName="Milas\'taki yangÄ±nda 3\'Ã¼ncÃ¼ gÃ¼n; havadan mÃ¼dahale yeniden baÅladÄ± (4)" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetMugla" data-newsCategory="yerelhaber">
                                            Milas'taki yangÄ±nda 3'Ã¼ncÃ¼ gÃ¼n; havadan mÃ¼dahale yeniden baÅladÄ± (4)                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="city" target="_blank" href="/mugla-haberleri">
                                            MUÄLA                                        </a>
                                        <span class="date">05:58</span>
                                        <a class="title gtm-tracker" target="_blank" title="Seydikemerâde sÃ¶ndÃ¼rme ekipleri ile halk seferber oldu, yangÄ±nlar kontrol altÄ±na alÄ±ndÄ±" href="/mugla-haberleri/89497921-seydikemerde-sondurme-ekipleri-ile-halk-seferber-oldu-yanginlar-kontrol-altina-alindi" data-newsPosition="15" data-newsId="89497921" data-newsName="Seydikemerâde sÃ¶ndÃ¼rme ekipleri ile halk seferber oldu, yangÄ±nlar kontrol altÄ±na alÄ±ndÄ±" data-newsVariant="box-news" data-newsList="YerelHaberlerWidgetMugla" data-newsCategory="yerelhaber">
                                            Seydikemerâde sÃ¶ndÃ¼rme ekipleri ile halk seferber oldu, yangÄ±nlar kontrol altÄ±na alÄ±ndÄ±                                        </a>
                                    </div>
                                                            </div>
                        </div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="box column-4 type1">
        <img class="lazyload-image lzldcntrtp" width="1" height="1" data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif" onload="CbgSliders.mainSliderSites('.widget-300x600-slider.htkulup')" onerror="" />           
        <div class="widget-300x600-slider widget htkulup dimensions-3" id="HtKulupWidget">
            <div class="content">
                <div class="img-brand">
                    <img data-htsrc="https://im.haberturk.com/assets/images/v4/brand/htkulup.svg" alt="HT KulÃ¼p" src="https://im.haberturk.com/assets/images/v3/transparent.gif" />
                </div>
                <div class="swiper-container slider">
                    <div class="swiper-wrapper">
                        <!--item-->
                                                        <div class="swiper-slide">
                                    <a href="https://htkulup.haberturk.com/guncel/haber/3150341-koc-tan-fidan-bagisi?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="KoÃ§'tan ormanlarÄ±mÄ±za fidan baÄÄ±ÅÄ±!" class="gtm-tracker" data-newsPosition="0" data-newsId="1" data-newsName="KoÃ§'tan ormanlarÄ±mÄ±za fidan baÄÄ±ÅÄ±!" data-newsVariant="box-news" data-newsList="HtKulupWidget" data-newsCategory="">
                                        <figure>
                                            <div class="img">
                                                <img class="swiper-lazy" data-src="https://im.haberturk.com/2021/08/02/ver1627888412/3150341_3x6.jpg" alt="KoÃ§'tan ormanlarÄ±mÄ±za fidan baÄÄ±ÅÄ±!" />
                                            </div>
                                            <figcaption>
                                                <span class="title">KoÃ§'tan ormanlarÄ±mÄ±za fidan baÄÄ±ÅÄ±!</span>
                                                <span class="description">KoÃ§ Holding YÃ¶netim Kurulu Ãyesi Caroline KoÃ§ yangÄ±nda...</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                        <div class="swiper-slide">
                                    <a href="https://htkulup.haberturk.com/guncel/haber/3150447-turkiye-tek-yurek?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="TÃ¼rkiye tek yÃ¼rek!" class="gtm-tracker" data-newsPosition="1" data-newsId="2" data-newsName="TÃ¼rkiye tek yÃ¼rek!" data-newsVariant="box-news" data-newsList="HtKulupWidget" data-newsCategory="">
                                        <figure>
                                            <div class="img">
                                                <img class="swiper-lazy" data-src="https://im.haberturk.com/2021/08/02/ver1627894594/3150447_3x6.jpg" alt="TÃ¼rkiye tek yÃ¼rek!" />
                                            </div>
                                            <figcaption>
                                                <span class="title">TÃ¼rkiye tek yÃ¼rek!</span>
                                                <span class="description">Ä°Å ve cemiyet hayatÄ±nÄ±n Ã¼nlÃ¼ isimleri TÃ¼rkiye'yi saran...</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                        <div class="swiper-slide">
                                    <a href="https://htkulup.haberturk.com/guncel/haber/3150307-yangini-goruntulediler?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="YangÄ±nÄ± gÃ¶rÃ¼ntÃ¼lediler!" class="gtm-tracker" data-newsPosition="2" data-newsId="3" data-newsName="YangÄ±nÄ± gÃ¶rÃ¼ntÃ¼lediler!" data-newsVariant="box-news" data-newsList="HtKulupWidget" data-newsCategory="">
                                        <figure>
                                            <div class="img">
                                                <img class="swiper-lazy" data-src="https://im.haberturk.com/2021/08/02/ver1627886340/3150307_3x6.jpg" alt="YangÄ±nÄ± gÃ¶rÃ¼ntÃ¼lediler!" />
                                            </div>
                                            <figcaption>
                                                <span class="title">YangÄ±nÄ± gÃ¶rÃ¼ntÃ¼lediler!</span>
                                                <span class="description">TÃ¼rkiye'nin yangÄ±n bÃ¶lgelerinden gÃ¶rÃ¼ntÃ¼ler paylaÅan iÅ...</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                        <div class="swiper-slide">
                                    <a href="https://htkulup.haberturk.com/davetler/haber/3148740-balpinardan-acik-hava-retrospektif-sergisi?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="BalpÄ±narâdan aÃ§Ä±k hava retrospektif sergisi" class="gtm-tracker" data-newsPosition="3" data-newsId="4" data-newsName="BalpÄ±narâdan aÃ§Ä±k hava retrospektif sergisi" data-newsVariant="box-news" data-newsList="HtKulupWidget" data-newsCategory="">
                                        <figure>
                                            <div class="img">
                                                <img class="swiper-lazy" data-src="https://im.haberturk.com/2021/07/31/ver1627712116/3148740_3x6.jpg" alt="BalpÄ±narâdan aÃ§Ä±k hava retrospektif sergisi" />
                                            </div>
                                            <figcaption>
                                                <span class="title">BalpÄ±narâdan aÃ§Ä±k hava retrospektif sergisi</span>
                                                <span class="description">Ä°stanbulâ74 tarafÄ±ndan dÃ¼zenlenen, dÃ¼nya Ã§apÄ±nda tanÄ±nan...</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                                                        <div class="swiper-slide">
                                    <a href="https://htkulup.haberturk.com/guncel/haber/3148765-kosifler-tatilde?utm_source=haberturk_anasayfa&utm_medium=slidernews" target="_blank" title="Kosifler tatilde..." class="gtm-tracker" data-newsPosition="4" data-newsId="5" data-newsName="Kosifler tatilde..." data-newsVariant="box-news" data-newsList="HtKulupWidget" data-newsCategory="">
                                        <figure>
                                            <div class="img">
                                                <img class="swiper-lazy" data-src="https://im.haberturk.com/2021/07/31/ver1627713553/3148765_3x6.jpg" alt="Kosifler tatilde..." />
                                            </div>
                                            <figcaption>
                                                <span class="title">Kosifler tatilde...</span>
                                                <span class="description">Melda Kosif ailece, tekneyle Ã§Ä±ktÄ±klarÄ± Ege tatilinden...</span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                </div>
                        
                    </div>

                    <!-- Pagination & Navigation -->
                    <div class="swiper-button-prev navigation-left"></div>
                    <div class="swiper-button-next navigation-right"></div>

                    <ul class="indicator type1 bottom">
                        <li>
                            <div class="swiper-button-prev navigation"></div>
                        </li>
                        <li>
                            <div class="swiper-pagination pagination"></div>
                        </li>
                        <li>
                            <div class="swiper-button-next navigation"></div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <img class="lazyload-image lzldcntrft" width="1" height="1" data-htsrc="https://im.haberturk.com/assets/images/v3/transparent.gif" onload="CbgSliders.mainSliderSites('.widget-300x600-slider.htkulup')" onerror="" />     
    </div>

    <div class="box column-4">
        <div class="widget-local-news widget dimensions-3" id="ajansHaberleri">
            <div class="head">
                <a href="/yerel-haberler" target="_blank" class="title" title="Yerel Haberler">AJANS HABERLERÄ°</a>
            </div>
            <div class="widget-local-news-scroll type1">
                <div class="swiper-container slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="content">
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Van'Ä±n 2 ilÃ§esinde sel nedeniyle evleri su bastÄ±, kÃ¼Ã§Ã¼kbaÅ hayvanlar telef oldu" href="/van-in-2-ilcesinde-sel-nedeniyle-evleri-su-basti-kucukbas-hayvanlar-telef-oldu-3150225" data-newsPosition="1" data-newsId="3150225" data-newsName="Van\'Ä±n 2 ilÃ§esinde sel nedeniyle evleri su bastÄ±, kÃ¼Ã§Ã¼kbaÅ hayvanlar telef oldu" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Van'Ä±n 2 ilÃ§esinde sel nedeniyle evleri su bastÄ±, kÃ¼Ã§Ã¼kbaÅ hayvanlar telef oldu                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Bursa'da minibÃ¼s otoparktaki araÃ§lara ve yayalara Ã§arptÄ±: 1'i aÄÄ±r 8 yaralÄ±" href="/bursa-da-minibus-otoparktaki-araclara-ve-yayalara-carpti-1-i-agir-8-yarali-3150227" data-newsPosition="2" data-newsId="3150227" data-newsName="Bursa\'da minibÃ¼s otoparktaki araÃ§lara ve yayalara Ã§arptÄ±: 1\'i aÄÄ±r 8 yaralÄ±" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Bursa'da minibÃ¼s otoparktaki araÃ§lara ve yayalara Ã§arptÄ±: 1'i aÄÄ±r 8 yaralÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Sakarya'da hafif ticari aracÄ±n Ã§arptÄ±ÄÄ± kiÅi hayatÄ±nÄ± kaybetti" href="/sakarya-da-hafif-ticari-aracin-carptigi-kisi-hayatini-kaybetti-3150228" data-newsPosition="3" data-newsId="3150228" data-newsName="Sakarya\'da hafif ticari aracÄ±n Ã§arptÄ±ÄÄ± kiÅi hayatÄ±nÄ± kaybetti" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Sakarya'da hafif ticari aracÄ±n Ã§arptÄ±ÄÄ± kiÅi hayatÄ±nÄ± kaybetti                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Azerbaycan'dan TÃ¼rkiye'ye orman yangÄ±nlarÄ±yla mÃ¼cadelede destek" href="/azerbaycan-dan-turkiye-ye-orman-yanginlariyla-mucadelede-destek-3150243" data-newsPosition="4" data-newsId="3150243" data-newsName="Azerbaycan\'dan TÃ¼rkiye\'ye orman yangÄ±nlarÄ±yla mÃ¼cadelede destek" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Azerbaycan'dan TÃ¼rkiye'ye orman yangÄ±nlarÄ±yla mÃ¼cadelede destek                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="KahramanmaraÅ'ta iki otomobil Ã§arpÄ±ÅtÄ±: 6 yaralÄ±" href="/kahramanmaras-ta-iki-otomobil-carpisti-6-yarali-3150245" data-newsPosition="5" data-newsId="3150245" data-newsName="KahramanmaraÅ\'ta iki otomobil Ã§arpÄ±ÅtÄ±: 6 yaralÄ±" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            KahramanmaraÅ'ta iki otomobil Ã§arpÄ±ÅtÄ±: 6 yaralÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Ä°Ã§iÅleri Bakan YardÄ±mcÄ±sÄ± Muhterem Ä°nce, Van'daki sel bÃ¶lgesinde incelemelerde bulundu" href="/icisleri-bakan-yardimcisi-muhterem-ince-van-daki-sel-bolgesinde-incelemelerde-bulundu-3150249" data-newsPosition="6" data-newsId="3150249" data-newsName="Ä°Ã§iÅleri Bakan YardÄ±mcÄ±sÄ± Muhterem Ä°nce, Van\'daki sel bÃ¶lgesinde incelemelerde bulundu" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Ä°Ã§iÅleri Bakan YardÄ±mcÄ±sÄ± Muhterem Ä°nce, Van'daki sel bÃ¶lgesinde incelemelerde bulundu                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="CumhurbaÅkanlÄ±ÄÄ± Ä°letiÅim BaÅkanÄ± Altun: &quot;35 ilimizde 129 yangÄ±nÄ±n 122'si kontrol altÄ±na alÄ±nmÄ±ÅtÄ±r&quot;" href="/cumhurbaskanligi-iletisim-baskani-altun-35-ilimizde-129-yanginin-122-si-kontrol-altina-alinmistir-3150252" data-newsPosition="7" data-newsId="3150252" data-newsName="CumhurbaÅkanlÄ±ÄÄ± Ä°letiÅim BaÅkanÄ± Altun: &quot;35 ilimizde 129 yangÄ±nÄ±n 122\'si kontrol altÄ±na alÄ±nmÄ±ÅtÄ±r&quot;" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            CumhurbaÅkanlÄ±ÄÄ± Ä°letiÅim BaÅkanÄ± Altun: "35 ilimizde 129 yangÄ±nÄ±n 122'si kontrol altÄ±na alÄ±nmÄ±ÅtÄ±r"                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Bodrum'daki orman yangÄ±nÄ±nÄ± sÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ± aralÄ±ksÄ±z sÃ¼rÃ¼yor" href="/bodrum-daki-orman-yanginini-sondurme-calismalari-araliksiz-suruyor-3150255" data-newsPosition="8" data-newsId="3150255" data-newsName="Bodrum\'daki orman yangÄ±nÄ±nÄ± sÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ± aralÄ±ksÄ±z sÃ¼rÃ¼yor" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Bodrum'daki orman yangÄ±nÄ±nÄ± sÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ± aralÄ±ksÄ±z sÃ¼rÃ¼yor                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="MÄ±sÄ±r CumhurbaÅkanlÄ±ÄÄ±: MÄ±sÄ±r ile Cezayir, Tunus CumhurbaÅkanÄ± Said'e &quot;tam destek&quot; konusunda anlaÅtÄ±" href="/misir-cumhurbaskanligi-misir-ile-cezayir-tunus-cumhurbaskani-said-e-tam-destek-konusunda-anlasti-3150256" data-newsPosition="9" data-newsId="3150256" data-newsName="MÄ±sÄ±r CumhurbaÅkanlÄ±ÄÄ±: MÄ±sÄ±r ile Cezayir, Tunus CumhurbaÅkanÄ± Said\'e &quot;tam destek&quot; konusunda anlaÅtÄ±" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            MÄ±sÄ±r CumhurbaÅkanlÄ±ÄÄ±: MÄ±sÄ±r ile Cezayir, Tunus CumhurbaÅkanÄ± Said'e "tam destek" konusunda anlaÅtÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Ä°Ã§iÅleri BakanÄ± Soylu, MuÄla'da orman yangÄ±nÄ± bÃ¶lgesinde incelemelerini sÃ¼rdÃ¼rdÃ¼" href="/icisleri-bakani-soylu-mugla-da-orman-yangini-bolgesinde-incelemelerini-surdurdu-3150261" data-newsPosition="10" data-newsId="3150261" data-newsName="Ä°Ã§iÅleri BakanÄ± Soylu, MuÄla\'da orman yangÄ±nÄ± bÃ¶lgesinde incelemelerini sÃ¼rdÃ¼rdÃ¼" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Ä°Ã§iÅleri BakanÄ± Soylu, MuÄla'da orman yangÄ±nÄ± bÃ¶lgesinde incelemelerini sÃ¼rdÃ¼rdÃ¼                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Ä°stanbul'da servis aracÄ±yla minibÃ¼s Ã§arpÄ±ÅtÄ±: 1 Ã¶lÃ¼, 6 yaralÄ±" href="/istanbul-da-servis-araciyla-minibus-carpisti-1-olu-6-yarali-3150269" data-newsPosition="11" data-newsId="3150269" data-newsName="Ä°stanbul\'da servis aracÄ±yla minibÃ¼s Ã§arpÄ±ÅtÄ±: 1 Ã¶lÃ¼, 6 yaralÄ±" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Ä°stanbul'da servis aracÄ±yla minibÃ¼s Ã§arpÄ±ÅtÄ±: 1 Ã¶lÃ¼, 6 yaralÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="ABD'nin California eyaletinde helikopterin dÃ¼Åmesi sonucu 4 kiÅi hayatÄ±nÄ± kaybetti" href="/abd-nin-california-eyaletinde-helikopterin-dusmesi-sonucu-4-kisi-hayatini-kaybetti-3150284" data-newsPosition="12" data-newsId="3150284" data-newsName="ABD\'nin California eyaletinde helikopterin dÃ¼Åmesi sonucu 4 kiÅi hayatÄ±nÄ± kaybetti" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            ABD'nin California eyaletinde helikopterin dÃ¼Åmesi sonucu 4 kiÅi hayatÄ±nÄ± kaybetti                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Liselere yerleÅtirmede birinci nakil sonuÃ§larÄ± aÃ§Ä±klandÄ±" href="/liselere-yerlestirmede-birinci-nakil-sonuclari-aciklandi-3150287" data-newsPosition="13" data-newsId="3150287" data-newsName="Liselere yerleÅtirmede birinci nakil sonuÃ§larÄ± aÃ§Ä±klandÄ±" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Liselere yerleÅtirmede birinci nakil sonuÃ§larÄ± aÃ§Ä±klandÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="Ä°zmir'de sinyalizasyon kablolarÄ±nÄ±n Ã§alÄ±nmasÄ± Ä°ZBAN seferlerini aksattÄ±" href="/izmir-de-sinyalizasyon-kablolarinin-calinmasi-izban-seferlerini-aksatti-3150312" data-newsPosition="14" data-newsId="3150312" data-newsName="Ä°zmir\'de sinyalizasyon kablolarÄ±nÄ±n Ã§alÄ±nmasÄ± Ä°ZBAN seferlerini aksattÄ±" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            Ä°zmir'de sinyalizasyon kablolarÄ±nÄ±n Ã§alÄ±nmasÄ± Ä°ZBAN seferlerini aksattÄ±                                        </a>
                                    </div>
                                                                    <div class="list">
                                        <a class="title gtm-tracker" target="_blank" title="BeÅir DerneÄi'nin, &quot;GeleceÄe Nefes OlalÄ±m&quot; projesiyle her yÄ±l 100 bin fidan yetiÅecek" href="/besir-dernegi-nin-gelecege-nefes-olalim-projesiyle-her-yil-100-bin-fidan-yetisecek-3150310" data-newsPosition="15" data-newsId="3150310" data-newsName="BeÅir DerneÄi\'nin, &quot;GeleceÄe Nefes OlalÄ±m&quot; projesiyle her yÄ±l 100 bin fidan yetiÅecek" data-newsVariant="box-news" data-newsList="ajansHaberleri" data-newsCategory="Ajans Haberleri">
                                            BeÅir DerneÄi'nin, "GeleceÄe Nefes OlalÄ±m" projesiyle her yÄ±l 100 bin fidan yetiÅecek                                        </a>
                                    </div>
                                                            </div>
                        </div>
                    </div>
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
    </div>

</div>


<script>
    head.ready("layout", function() {
        var swiper = new Swiper('.widget-local-news-scroll.type1 .slider', {
            direction: 'vertical',
            slidesPerView: 'auto',
            roundLengths: true,
            observer: true,
            observeParents: true,
            freeMode: true,
            scrollbar: {
                el: '.widget-local-news-scroll.type1 .swiper-scrollbar',
                draggable: true,
                snapOnRelease: false,
            },
            mousewheel: true,
        });
    });
</script><section class="advertisement adv-970" id="index970x90_5">
    <div id="zone_2156" data-zone-id="2156" class="ads-zone lazy-init"></div></section>


    <div class="box-row widget-most-news" id="MostContent">
        <!-- most comment -->
        <div class="box column-4">
            <div class="box-row">
                <!-- head -->
                <div class="box column-12 head">
                    <div class="title"><b>EN ÃOK YORUMLANAN</b> HABERLER</div>
                </div>

                
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/demet-akalin-gozyaslarini-tutamadi-magazin-haberleri-3150632-magazin" target="_blank" title="Demet AkalÄ±n gÃ¶zyaÅlarÄ±nÄ± tutamadÄ± - Magazin haberleri" class="gtm-tracker" data-newsPosition="0" data-newsId="3150632" data-newsName="GÃ¶zyaÅlarÄ±yla anlattÄ±: Bodrum\'a yardÄ±m gÃ¶nderiyorum" data-newsVariant="box-news-image" data-newsList="mostReadCommented" data-newsCategory="Magazin/Fiskos">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627905743/3150632_300x169.jpg" alt="Demet AkalÄ±n gÃ¶zyaÅlarÄ±nÄ± tutamadÄ± - Magazin haberleri">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">Fiskos</span>
                                        <span class="title">GÃ¶zyaÅlarÄ±yla anlattÄ±: Bodrum'a yardÄ±m gÃ¶nderiyorum</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/cumhurbaskani-erdogan-ormanlarimizi-yakanlari-bulup-cigerlerini-yakmak-boynumuzun-borcudur-3149408" target="_blank" title="SON DAKÄ°KA YANGIN: CumhurbaÅkanÄ± ErdoÄan orman yangÄ±nÄ± bÃ¶lgesinde!" class="gtm-tracker" data-newsPosition="1" data-newsId="3149408" data-newsName="CumhurbaÅkanÄ± ErdoÄan: CiÄerlerini yakmak boynumuzun borcu" data-newsVariant="box-news-image" data-newsList="mostReadCommented" data-newsCategory="GÃ¼ndem/Politika">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627763853/3149408_300x169.jpg" alt="SON DAKÄ°KA YANGIN: CumhurbaÅkanÄ± ErdoÄan orman yangÄ±nÄ± bÃ¶lgesinde!">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">GÃ¼ndem</span>
                                        <span class="title">CumhurbaÅkanÄ± ErdoÄan: CiÄerlerini yakmak boynumuzun borcu</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/bolu-belediye-baskani-tanju-ozcan-dediklerimin-arkasindayim-bedel-odemeye-hazirim-3144582" target="_blank" title="Bolu Belediye BaÅkanÄ±'ndan son dakika aÃ§Ä±klama: Bedel Ã¶demeye hazÄ±rÄ±m" class="gtm-tracker" data-newsPosition="2" data-newsId="3144582" data-newsName="Tanju Ãzcan: Dediklerimin arkasÄ±ndayÄ±m, bedel Ã¶demeye hazÄ±rÄ±m" data-newsVariant="box-news-image" data-newsList="mostReadCommented" data-newsCategory="GÃ¼ndem/GÃ¼ncel">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/27/ver1627389873/3144582_300x169.jpg" alt="Bolu Belediye BaÅkanÄ±'ndan son dakika aÃ§Ä±klama: Bedel Ã¶demeye hazÄ±rÄ±m">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">GÃ¼ndem</span>
                                        <span class="title">Tanju Ãzcan: Dediklerimin arkasÄ±ndayÄ±m, bedel Ã¶demeye hazÄ±rÄ±m</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/universiteli-azra-5-gundur-haber-yok-3150403" target="_blank" title="VAHÅETÄ°N SATIRLARI! Son Dakika: Azra GÃ¼lendam HaytaoÄlu cinayeti... 5 gÃ¼ndÃ¼r aranÄ±yordu" class="gtm-tracker" data-newsPosition="3" data-newsId="3150403" data-newsName="Ãniversiteli Azra vahÅete kurban gitmiÅ!" data-newsVariant="box-news-image" data-newsList="mostReadCommented" data-newsCategory="GÃ¼ndem/3. Sayfa">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627922012/3150403_300x169.jpg" alt="VAHÅETÄ°N SATIRLARI! Son Dakika: Azra GÃ¼lendam HaytaoÄlu cinayeti... 5 gÃ¼ndÃ¼r aranÄ±yordu">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">GÃ¼ndem</span>
                                        <span class="title">Ãniversiteli Azra vahÅete kurban gitmiÅ!</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
            </div>
        </div>

        <!-- most read -->
        <div class="box column-4">
            <div class="box-row">
                <!-- head -->
                <div class="box column-12 head">
                    <div class="title"><b>EN ÃOK OKUNAN</b> HABERLER</div>
                </div>

                
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/orman-yanginlarinda-6-nci-gun-sondurme-calismalari-7-noktada-suruyor-3150267" target="_blank" title="Orman yangÄ±nlarÄ±nda 7'nci gÃ¼n! SÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ± sÃ¼rÃ¼yor" class="gtm-tracker" data-newsPosition="0" data-newsId="3150267" data-newsName="Orman yangÄ±nlarÄ±nda 7\'nci gÃ¼n! SÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ± sÃ¼rÃ¼yor" data-newsVariant="box-news-image" data-newsList="mostRead" data-newsCategory="GÃ¼ndem/Ãevre">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627960255/3150267_300x169.jpg" alt="Orman yangÄ±nlarÄ±nda 7'nci gÃ¼n! SÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ± sÃ¼rÃ¼yor">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">GÃ¼ndem</span>
                                        <span class="title">Orman yangÄ±nlarÄ±nda 7'nci gÃ¼n! SÃ¶ndÃ¼rme Ã§alÄ±ÅmalarÄ± sÃ¼rÃ¼yor</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/son-dakika-haberi-konya-daki-katliam-goruntuleri-ortaya-cikti-3149279" target="_blank" title="VAHÅET ANLARI KAMERADA! Son dakika haberi: Konya'daki katliam gÃ¶rÃ¼ntÃ¼leri ortaya Ã§Ä±ktÄ±" class="gtm-tracker" data-newsPosition="1" data-newsId="3149279" data-newsName="Konya\'daki katliam gÃ¶rÃ¼ntÃ¼leri ortaya Ã§Ä±ktÄ±" data-newsVariant="box-news-image" data-newsList="mostRead" data-newsCategory="GÃ¼ndem/3. Sayfa">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627748564/3149279_300x169.jpg" alt="VAHÅET ANLARI KAMERADA! Son dakika haberi: Konya'daki katliam gÃ¶rÃ¼ntÃ¼leri ortaya Ã§Ä±ktÄ±">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">GÃ¼ndem</span>
                                        <span class="title">Konya'daki katliam gÃ¶rÃ¼ntÃ¼leri ortaya Ã§Ä±ktÄ±</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/son-dakika-haberi-elektrik-kesintileri-yasaniyor-3150405" target="_blank" title="SON DAKÄ°KA! Elektrik kesintileri yaÅanÄ±yor - HABERLER" class="gtm-tracker" data-newsPosition="2" data-newsId="3150405" data-newsName="TÃ¼rkiye genelinde elektrik kesintileri yaÅandÄ±" data-newsVariant="box-news-image" data-newsList="mostRead" data-newsCategory="GÃ¼ndem">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627911106/3150405_300x169.jpg" alt="SON DAKÄ°KA! Elektrik kesintileri yaÅanÄ±yor - HABERLER">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">GÃ¼ndem</span>
                                        <span class="title">TÃ¼rkiye genelinde elektrik kesintileri yaÅandÄ±</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/son-dakika-koronavirus-salgininda-yeni-vaka-sayisi-22-bin-332-3149334" target="_blank" title="SON DAKÄ°KA VAKA SAYISI: 31 Temmuz korona tablosu 2021 aÃ§Ä±klandÄ±" class="gtm-tracker" data-newsPosition="3" data-newsId="3149334" data-newsName="KoronavirÃ¼ste yeni vaka sayÄ±sÄ± aÃ§Ä±klandÄ±" data-newsVariant="box-news-image" data-newsList="mostRead" data-newsCategory="SaÄlÄ±k">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/07/31/ver1627753184/3149334_300x169.jpg" alt="SON DAKÄ°KA VAKA SAYISI: 31 Temmuz korona tablosu 2021 aÃ§Ä±klandÄ±">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">SaÄlÄ±k</span>
                                        <span class="title">KoronavirÃ¼ste yeni vaka sayÄ±sÄ± aÃ§Ä±klandÄ±</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        

            </div>
        </div>

        <!-- most share -->
        <div class="box column-4">
            <div class="box-row">
                <!-- head -->
                <div class="box column-12 head">
                    <div class="title"><b>EN ÃOK PAYLAÅILAN</b> HABERLER</div>
                </div>

                
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/canli-yayinda-alevler-buyudu-haberler-3150913" target="_blank" title="Marmaris Son Dakika yangÄ±n: Marmaris HisarÃ¶nÃ¼'nde feci anlar!" class="gtm-tracker" data-newsPosition="0" data-newsId="3150913" data-newsName="CanlÄ± yayÄ±nda alevler bÃ¼yÃ¼dÃ¼!" data-newsVariant="box-news-image" data-newsList="mostShared" data-newsCategory="GÃ¼ndem/3. Sayfa">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627927380/3150913_300x169.jpg" alt="Marmaris Son Dakika yangÄ±n: Marmaris HisarÃ¶nÃ¼'nde feci anlar!">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">GÃ¼ndem</span>
                                        <span class="title">CanlÄ± yayÄ±nda alevler bÃ¼yÃ¼dÃ¼! </span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/marmaris-te-yanan-ormanlar-boyle-goruntulendi-3150352" target="_blank" title="NEYDÄ°, NE OLDU? Son dakika: Marmaris'te yanan ormanlar bÃ¶yle gÃ¶rÃ¼ntÃ¼lendi" class="gtm-tracker" data-newsPosition="1" data-newsId="3150352" data-newsName="Marmaris\'te yanan ormanlar bÃ¶yle gÃ¶rÃ¼ntÃ¼lendi" data-newsVariant="box-news-image" data-newsList="mostShared" data-newsCategory="GÃ¼ndem/Ãevre">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627891715/3150352_300x169.jpg" alt="NEYDÄ°, NE OLDU? Son dakika: Marmaris'te yanan ormanlar bÃ¶yle gÃ¶rÃ¼ntÃ¼lendi">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">GÃ¼ndem</span>
                                        <span class="title">Marmaris'te yanan ormanlar bÃ¶yle gÃ¶rÃ¼ntÃ¼lendi</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/yazarlar/nagehan-alci/3150232-alevler-kemerkoy-termik-santraline-ne-kadar-yaklasti-bodrum-da-son-durum-ne" target="_blank" title="   Alevler KemerkÃ¶y Termik Santraline ne kadar yaklaÅtÄ±? Bodrum'da son durum ne?" class="gtm-tracker" data-newsPosition="2" data-newsId="3150232" data-newsName="Alevler KemerkÃ¶y Termik Santraline ne kadar yaklaÅtÄ±? Bodrum\'da son durum ne?" data-newsVariant="box-news-image" data-newsList="mostShared" data-newsCategory="HT Gazete">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/yazarlar/HTGazete/nagehan-alci-640x320.jpg?v=1577435978" alt="   Alevler KemerkÃ¶y Termik Santraline ne kadar yaklaÅtÄ±? Bodrum'da son durum ne?">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">HT Gazete</span>
                                        <span class="title">   Alevler KemerkÃ¶y Termik Santraline ne kadar yaklaÅtÄ±? Bodrum'da son durum ne?</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                        
                        <!-- item -->
                        <div class="box column-12 type1">
                            <a  href="/esra-dermancioglu-nun-kizi-refia-dermancioglu-koronaviruse-yakalandi-magazin-haberleri-3150328-magazin" target="_blank" title="Esra DermancÄ±oÄlu'nun kÄ±zÄ± Refia DermancÄ±oÄlu koronavirÃ¼se yakalandÄ± - Magazin haberleri" class="gtm-tracker" data-newsPosition="3" data-newsId="3150328" data-newsName="&quot;AyrÄ± odalardan yazÄ±ÅÄ±yoruz!&quot;" data-newsVariant="box-news-image" data-newsList="mostShared" data-newsCategory="Magazin/Fiskos">
                                <figure>
                                    <div class="img img-16x9">
                                        <img src="https://im.haberturk.com/assets/images/v3/transparent.gif" data-htsrc="https://im.haberturk.com/2021/08/02/ver1627887350/3150328_300x169.jpg" alt="Esra DermancÄ±oÄlu'nun kÄ±zÄ± Refia DermancÄ±oÄlu koronavirÃ¼se yakalandÄ± - Magazin haberleri">
                                    </div>
                                    <figcaption>
                                        <span class="category agenda">Fiskos</span>
                                        <span class="title">"AyrÄ± odalardan yazÄ±ÅÄ±yoruz!"</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </div>

                                        


            </div>
        </div>

    </div>
<div id="zone_1549" zone-id="1549" class="ads-zone" zone-viewtype="banner"><script type="text/javascript">head.ready('layout', function () {cbgAds.AdsInline(1549);});</script></div><div id="zone_2016" zone-id="2016" class="ads-zone" zone-viewtype="banner"><script type="text/javascript">head.ready('layout', function () {cbgAds.AdsInline(2016);});</script></div><section class="advertisement adv-970" id="index970x90_6">
    <div id="zone_2157" data-zone-id="2157" class="ads-zone lazy-init"></div></section>        <div class="scroll-top cd-is-visible cd-fade-out" title="YukarÄ± Git"></div>
    </div>

    
<link rel="stylesheet" type="text/css" href="https://im.haberturk.com/assets/css/desktop/v4/footer.min.css?v=3977" /><footer class="">
    <!-- newsletter -->
    <div class="newsletter">
        <div class="content">
            <a href="/" class="logo"></a>
            <div class="description">âGÃ¼nÃ¼n manÅetlerini ve en Ã§ok okunan haberlerini her sabah e-postanÄ±zdan takip etmek iÃ§in HabertÃ¼rk bÃ¼ltene Ã¼ye olun.â</div>
            <div class="newsletter-form">
                <form id="bultenForm" action="/uyelik/bulten" method="POST">
                    <input type="text" name="email" placeholder="E-posta adresinizi yazÄ±nÄ±z!">
                    <button type="submit" class="gtm-tracker" data-newsVariant="footer-newsletter" data-newsHref="haberturk"></button>
                </form> 
            </div>
        </div>
    </div>

    <!-- brand list-->
    <div class="brand">
        <div class="content">
            <ul class="list">
                <li class="logo-showtv">
                    <a href="https://www.showtv.com.tr?utm_source=haberturk" class="gtm-tracker" data-newsVariant="footer-brand" title="Show TV" target="_blank"></a>
                </li>

                <li class="logo-showmax">
                    <a href="http://www.showmax.com.tr?utm_source=haberturk" class="gtm-tracker" data-newsVariant="footer-brand" title="Show Max" target="_blank"></a>
                </li>

                <li class="logo-showturk">
                    <a href="http://www.showturk.com.tr?utm_source=haberturk" class="gtm-tracker" data-newsVariant="footer-brand" title="Show TÃ¼rk" target="_blank"></a>
                </li>

                <li class="logo-httv">
                    <a href="https://www.haberturk.com/tv" class="gtm-tracker" data-newsVariant="footer-brand" title="HabertÃ¼rk Tv" target="_blank"></a>
                </li>

                <li class="logo-bloomberght">
                    <a href="https://www.bloomberght.com?utm_source=haberturk&utm_medium=footerlogo" class="gtm-tracker" data-newsVariant="footer-brand" title="Bloomberg" target="_blank"></a>
                </li>

                <li class="logo-hthayat">
                    <a href="//hthayat.haberturk.com?utm_source=haberturk" class="gtm-tracker" data-newsVariant="footer-brand" title="HTHayat" target="_blank"></a>
                </li>

                <li class="logo-htkulup">
                    <a href="https://htkulup.haberturk.com?utm_source=haberturk" class="gtm-tracker" data-newsVariant="footer-brand" title="HTKulÃ¼p" target="_blank"></a>
                </li>

            </ul>
        </div>
    </div>

    <!-- category list -->
    <div class="category-list">
        <div class="content">
            <ul>

            <ol>
                <li><a href="/son-dakika-haberleri" class="gtm-tracker" data-newsVariant="footer-menu" title="Son Dakika Haberler">Son Dakika Haberler</a></li>
                <li><a href="/gundem" class="gtm-tracker" data-newsVariant="footer-menu" title="GÃ¼ncel Haberler">GÃ¼ncel Haberler</a></li>
                <li><a href="/corona-virusu" class="gtm-tracker" data-newsVariant="footer-menu" title="KoronavirÃ¼s HaritasÄ±">KoronavirÃ¼s HaritasÄ±</a></li>
                <li><a href="/havadurumu/Turkiye-TR/Istanbul/LTSI" class="gtm-tracker" data-newsVariant="footer-menu" title="Hava Durumu">Hava Durumu</a></li>
                <li><a href="/yol-durumu/istanbul" class="gtm-tracker" data-newsVariant="footer-menu" title="Yol Durumu">Yol Durumu</a></li>
                <li><a href="/son-depremler" class="gtm-tracker" data-newsVariant="footer-menu" title="Son Depremler">Son Depremler</a></li>
                <li><a href="/e-devlet-giris" class="gtm-tracker" data-newsVariant="footer-menu" title="E Devlet GiriÅ">E Devlet GiriÅ</a></li>
            </ol>
            <ol>
                <li><a href="/e-okul-veli-bilgilendirme-sistemi" class="gtm-tracker" data-newsVariant="footer-menu" title="E Okul VBS">E Okul VBS</a></li>
                <li><a href="/eba-giris" class="gtm-tracker" data-newsVariant="footer-menu" title="EBA GiriÅ CanlÄ± Ders">EBA GiriÅ CanlÄ± Ders</a></li>
                <li><a href="/nobetci-eczaneler" class="gtm-tracker" data-newsVariant="footer-menu" title="NÃ¶betÃ§i Eczaneler">NÃ¶betÃ§i Eczaneler</a></li>
                <li><a target="_blank" href="https://hthayat.haberturk.com/astroloji/genel-burc-yorumlari" class="gtm-tracker" data-newsVariant="footer-menu" title="GÃ¼nlÃ¼k BurÃ§ YorumlarÄ±">GÃ¼nlÃ¼k BurÃ§ YorumlarÄ±</a></li>
                <li><a href="/namaz-vakitleri" class="gtm-tracker" data-newsVariant="footer-menu" title="Namaz Vakitleri">Namaz Vakitleri</a></li>
                <li><a href="/yemek-yapma" class="gtm-tracker" data-newsVariant="footer-menu" title="Yemek Tarifleri">Yemek Tarifleri</a></li>
                <li><a href="/instagram-dondurma" class="gtm-tracker" data-newsVariant="footer-menu" title="Instagram Dondurma" target="_blank">Instagram Dondurma</a></li>
            </ol>
            <ol>
                <li><a href="/instagram-silme" class="gtm-tracker" data-newsVariant="footer-menu" title="Instagram Silme">Instagram Silme</a></li>
                <li><a href="/tv-rehberi" class="gtm-tracker" data-newsVariant="footer-menu" title="TV YayÄ±n AkÄ±ÅÄ±u">TV YayÄ±n AkÄ±ÅÄ±</a></li>
                <li><a href="/sans-oyunlari/sayisal-loto" class="gtm-tracker" data-newsVariant="footer-menu" title="SayÄ±sal Loto SonuÃ§larÄ±">SayÄ±sal Loto SonuÃ§larÄ±</a></li>
                <li><a href="/sans-oyunlari/milli-piyango" class="gtm-tracker" data-newsVariant="footer-menu" title="Milli Piyango Sorgulama">Milli Piyango Sorgulama</a></li>
                <li><a href="/ekonomi/altin" class="gtm-tracker" data-newsVariant="footer-menu" title="AltÄ±n FiyatlarÄ±">AltÄ±n FiyatlarÄ±</a></li>
                <li><a href="/ekonomi/doviz" class="gtm-tracker" data-newsVariant="footer-menu" title="DÃ¶viz Kuru">DÃ¶viz Kuru</a></li>
                <li><a href="/ekonomi/piyasa/88-dolar" class="gtm-tracker" data-newsVariant="footer-menu" title="Dolar Kuru" target="_blank">Dolar Kuru</a></li>
            </ol>
            <ol>
                <li><a href="/ekonomi/1-dolar-ne-kadar" class="gtm-tracker" data-newsVariant="footer-menu" title="Dolar KaÃ§ TL">Dolar KaÃ§ TL</a></li>
                <li><a href="/ekonomi/1-euro-ne-kadar" class="gtm-tracker" data-newsVariant="footer-menu" title="Euro KaÃ§ TL">Euro KaÃ§ TL</a></li>
                <li><a href="/spor/iddaa" class="gtm-tracker" data-newsVariant="footer-menu" title="Ä°ddaa ProgramÄ±">Ä°ddaa ProgramÄ±</a></li>
                <li><a href="/spor/iddaa/canlisonuclar" class="gtm-tracker" data-newsVariant="footer-menu" title="CanlÄ± Skor">CanlÄ± Skor</a></li>
                <li><a href="/spor/iddaa/puandurumu/1/turkiye-super-lig" class="gtm-tracker" data-newsVariant="footer-menu" title="SÃ¼per Lig Puan Durumu">SÃ¼per Lig Puan Durumu</a></li>
                <li><a href="/ekonomi/sosyal-guvenlik" class="gtm-tracker" data-newsVariant="footer-menu" title="Memur ve Emekli Haberleri">Memur ve Emekli Haberleri</a></li>
            </ol>
            <ol>
                <li><a href="/kullanimkosullari" class="gtm-tracker" data-newsVariant="footer-menu" title="KullanÄ±m KoÅullarÄ±" target="_blank">KullanÄ±m KoÅullarÄ±</a></li>
                <li><a href="/privacy" class="gtm-tracker" data-newsVariant="footer-menu" title="Gizlilik SÃ¶zleÅmesi" target="_blank">Gizlilik ve KVK PolitikasÄ±</a></li>
                <li><a href="/cerez-politikasi" class="gtm-tracker" data-newsVariant="footer-menu" title="Ãerez PolitikasÄ±" target="_blank">Ãerez PolitikasÄ±</a></li>
                <li><a href="/aydinlatma-metni" class="gtm-tracker" data-newsVariant="footer-menu" title="AydÄ±nlatma Metni" target="_blank">AydÄ±nlatma Metni</a></li>
                <li><a href="/kunye" class="gtm-tracker" data-newsVariant="footer-menu" target="_blank" title="KÃ¼nye">KÃ¼nye</a></li>
                <li><a href="#"><span>OKUR HATTI:<br />(0212) 313 60 00 PBX</span></a></li>
            </ol>                
                
            </ul>
        </div>
    </div>

    <!-- social list -->
    <div class="social-list">
        <div class="content">
            <ul>
                <li><a href="https://www.facebook.com/Haberturk" target="_blank" class="icon-facebook gtm-tracker" title="HabertÃ¼rk Facebook" data-newsVariant="footer-social-icons" ></a></li>
                <li><a href="https://twitter.com/haberturk" target="_blank" class="icon-twitter gtm-tracker" title="HabertÃ¼rk Twitter" data-newsVariant="footer-social-icons" ></a></li>
                <li><a href="https://www.instagram.com/haberturk" target="_blank" class="icon-instagram gtm-tracker" title="HabertÃ¼rk Instagram" data-newsVariant="footer-social-icons" ></a></li>
                <li><a href="https://www.youtube.com/user/gucuozgurlugunde" target="_blank" class="icon-youtube gtm-tracker" title="HabertÃ¼rk Youtube" data-newsVariant="footer-social-icons" ></a></li>
                <li><a href="https://flipboard.com/@HaberTurk" target="_blank" class="icon-flipboard gtm-tracker" title="HabertÃ¼rk Flipboard" data-newsVariant="footer-social-icons" ></a></li>
                <li><a href="/rss/anasayfa" target="_blank" class="icon-rss gtm-tracker" title="HabertÃ¼rk Rss" data-newsVariant="footer-social-icons" ></a></li>
            </ul>
        </div>
    </div>

    <!-- copyright -->
    <div class="copyright">
        <div class="content">
            <div>
                <a href="/" class="gtm-tracker" data-newsVariant="footer-copyright">www.haberturk.com</a> 
                internet sitesinde yayÄ±nlanan yazÄ±, haber, video ve fotoÄraflarÄ±n her tÃ¼rlÃ¼ hakkÄ± Haberturk Gazetecilik A.Å.âye aittir.<br>
                Ä°zin alÄ±nmadan, kaynak gÃ¶sterilerek dahi iktibas edilemez.
            </div>
            <div>Copyright Â©  2021 - TÃ¼m haklarÄ± saklÄ±dÄ±r. HabertÃ¼rk Gazetecilik A.Å.</div>
            <div>
                <p>Ãretim ve TasarÄ±m.
                    <a href="http://www.cinergroup.com.tr" class="gtm-tracker" data-newsVariant="footer-copyright" target="_blank">
                        <img width="60" src="https://im.haberturk.com/assets/images/brand/ciner-logo.svg" class="footer-ciner-logo" alt="Ciner Bilgi Grubu">
                    </a>
                    Bilgi Grubu</p>
            </div>
        </div>
    </div>
</footer>



<div id="zone_1278" zone-id="1278" class="ads-zone" zone-viewtype="banner"><script type="text/javascript">head.ready('layout', function () {cbgAds.AdsInline(1278);});</script></div><div id="zone_1737" zone-id="1737" class="ads-zone" zone-viewtype="banner"><script type="text/javascript">cbgAds.AdsInline(1737);</script></div>
    <span id="page_load_complated"></span>

    <script>
        head.ready('layout', function() {
            head.load([
                {mpheader: mspheaderJs},
                {mpfooter: mspfooterjs}
        ], function() {});
        });
        if (typeof cbgmbAlternate === "function") {
            cbgmbAlternate("#lnkMobileAlternate");
        }
        cbgAds.AdsBody();

        var waitForElement = function(selector, callback) {
            if (jQuery(selector).length) {
                callback();
            } else {
                setTimeout(function() {
                    waitForElement(selector, callback);
                }, 100);
            }
        };

        head.ready("layout", function() {

            head.ready('mpfooter', function() {

                jQuery("#other-category-menu-tag").click(function() {
                    waitForElement(".login-modal-btn", function() {
                        HTGlobal.Auth.init();
                    });
                });
                HTGlobal.HTWeather.addTask({
                    targetId: 'weatherIndex-type2',
                    templateId: 'weatherTemp',
                    insertType: 'innerHTML',
                    callback: function() {}
                });
                HTGlobal.HTWeather.make();

            });
        });
    </script>


    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCHP7Z9" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div id="cookiePolicy" class="">
</div>

	<!-- Firebase App (the core Firebase SDK) is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js"></script>
	<script src="https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js"></script>
	<script src="/scripts/webpush.js?v=34"></script>

</body>

</html>
<!--~CBG GEN~ / at: 2021-08-03 09:05:27 -->