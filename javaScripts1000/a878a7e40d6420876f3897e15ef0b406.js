<!doctype html>
<!--[if lt IE 7]> 
<html class="ie6 oldie" lang="zh" version="HTML+RDFa 1.1"> <![endif]-->
<!--[if IE 7]>    
<html class="ie7 oldie" lang="zh" version="HTML+RDFa 1.1"> <![endif]-->
<!--[if IE 8]>    
<html class="ie8 oldie" lang="zh" version="HTML+RDFa 1.1"> <![endif]-->
<!--[if IE 9]>    
<html class="ie9" lang="zh" version="HTML+RDFa 1.1"> <![endif]-->
<!--[if gt IE 9]><!--> 
<html lang="zh" version="HTML+RDFa 1.1"> <!--<![endif]-->

<head><meta http-equiv="x-dns-prefetch-control" content="on">
<link rel="dns-prefetch" href="http://static-tw.zacdn.com">
<link rel="dns-prefetch" href="https://dynamic.zacdn.com">
<link rel="dns-prefetch" href="//tags.tiqcdn.com"><!--[if IE 9]>
<link rel="prefetch" href="http://static-tw.zacdn.com">
<link rel="prefetch" href="https://dynamic.zacdn.com">
<link rel="prefetch" href="//tags.tiqcdn.com"><![endif]-->
<link rel="preconnect" href="//static.dynamicyield.com">

<link rel="preconnect" href="//st.dynamicyield.com">

<link rel="preconnect" href="//px.dynamicyield.com">    <base href="https://www.zalora.com.tw" target="_self">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>ZALORA æå°æé£¾è³¼ç©ç¶²ç« - å°ç£é¦é¸ç·ä¸è³¼ç©æè£æé»</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"dde1018d87",applicationID:"951751434"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(){}function i(t,e,n){return function(){return o(t,[u.now()].concat(f(arguments)),e?null:this,n),e?void 0:this}}var o=t("handle"),a=t(8),f=t(9),c=t("ee").get("tracer"),u=t("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(t,e){s[e]=i(p+e,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),e.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(l+"tracer",[u.now(),t,n],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(l+e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),o("err",[t,u.now(),!1,e])}},{}],2:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],3:[function(t,e,n){function r(){return f.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,f=t(10);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],4:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],5:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?d("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&d("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||d("cls",[t])})}function a(t){if(t instanceof m&&!g){var e=Math.round(t.timeStamp),n={type:t.type};e<=p.now()?n.fid=p.now()-e:e>p.offset&&e<=Date.now()?(e-=p.offset,n.fid=p.now()-e):e=p.now(),g=!0,d("timing",["fi",e,n])}}function f(t){"hidden"===t&&d("pageHide",[p.now()])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var c,u,s,d=t("handle"),p=t("loader"),l=t(7),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){c=new PerformanceObserver(r);try{c.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,h=["click","keydown","mousedown","pointerdown","touchstart"];h.forEach(function(t){document.addEventListener(t,a,!1)})}l(f)}},{}],6:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}e.exports={agent:i,version:o,match:r}},{}],7:[function(t,e,n){function r(t){function e(){t(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,e,!1)}e.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],8:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],9:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],10:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?u(t,c,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){t&&a&&t(n,r,i);for(var f=e(i),c=v(n),u=c.length,s=0;s<u;s++)c[s].apply(f,r);var p=d[w[n]];return p&&p.push([b,n,r,f]),f}}function o(t,e){y[t]=v(t).concat(e)}function m(t,e){var n=y[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function v(t){return y[t]||[]}function g(t){return p[t]=p[t]||i(n)}function h(t,e){l.aborted||s(t,function(t,n){e=e||"feature",w[n]=e,e in d||(d[e]=[])})}var y={},w={},b={on:o,addEventListener:o,removeEventListener:m,emit:n,get:g,listeners:v,context:e,buffer:h,abort:f,aborted:!1};return b}function o(t){return u(t,c,a)}function a(){return new r}function f(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var c="nr@context",u=t("gos"),s=t(8),d={},p={},l=e.exports=i();e.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!R++){var t=M.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();c(E,function(e,n){t[e]||(t[e]=n)});var n=a();f("mark",["onload",n+M.offset],null,"api"),f("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=l+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===v.readyState&&o()}function o(){f("mark",["domContent",a()+M.offset],null,"api")}var a=t(3),f=t("handle"),c=t(8),u=t("ee"),s=t(6),d=t(4),p=t(2),l=p.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,g="addEventListener",h="attachEvent",y=m.XMLHttpRequest,w=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var x=""+location,E={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1210.min.js"},O=y&&w&&w[g]&&!/CriOS/.test(navigator.userAgent),M=e.exports={offset:a.getLastTimestamp(),now:a,origin:x,features:{},xhrWrappable:O,userAgent:s,disabled:b};if(!b){t(1),t(5),v[g]?(v[g]("DOMContentLoaded",o,!1),m[g]("load",r,!1)):(v[h]("onreadystatechange",i),m[h]("onload",r)),f("mark",["firstbyte",a.getLastTimestamp()],null,"api");var R=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,c],s],t)}f(n+"start",[o,a,c],s,u);try{return p=e.apply(a,o)}catch(m){throw f(n+"err",[o,a,m],s,u),m}finally{f(n+"end",[o,a,p],s,u)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var f,c,u,s="-"===r.charAt(0);for(u=0;u<e.length;u++)c=e[u],f=t[c],a(f)||(t[c]=n(f,s?c+r:r,i,c,o))}function f(n,r,o,a){if(!m||e){var f=m;m=!0;try{t.emit(n,r,o,e,a)}catch(c){i([c,n,r,o],t)}m=f}}return t||(t=s),n.inPlace=r,n.flag=p,n}function i(t,e){e||(e=s);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function f(t,e){var n=e(t);return n[p]=t,o(t,n,s),n}function c(t,e,n){var r=t[e];t[e]=f(r,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var s=t("ee"),d=t(9),p="nr@original",l=Object.prototype.hasOwnProperty,m=!1;e.exports=r,e.exports.wrapFunction=f,e.exports.wrapInPlace=c,e.exports.argsToArray=u},{}]},{},["loader"]);</script>
        <meta name="viewport" content="width=1024">
    <meta name="google-site-verification" content="ngsph6dQXafglSovR_vzUJPupBiubuJD4V_T-hhjzHA" />
    <meta name="description" content="ZALORA å°ç£é¦é¸æå°è³¼ç©æé»ï¼âæ»¿é¡åé âè²¨å°ä»æ¬¾ â30å¤©åè²»éè²¨ âåéèæ¬ååçï¼ç«å³é»æ ZALORA å®ç¶²ç·ä¸é¸è³¼ææµè¡å®åï¼è¼é¬èµ°æå°è·¯ï¼" />
    <meta name="keywords" content="" />
    <meta name="robots" content="index,follow" />
            <meta id="zalora-referrer-policy" name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="msvalidate.01" content="8CF0ACFD88ED7509A3CF332BB2FA159C" />
            <meta property="fb:app_id" content="" />
                    
<link rel="canonical" href="https://www.zalora.com.tw/" />
                
<link rel="alternate" href="android-app://com.zalora.android/zalora/tw//seg_s/m/" />
        
<link rel="alternate" href="ios-app://624639017/zalora/tw//seg_s/m/" />
        <meta name="custom-apple-itunes-app" content="app-id=624639017"
              app-argument="">
    <meta name="google-play-app" content="app-id=com.zalora.android" app-argument="https://www.zalora.com.tw/">
    
<link href="https://www.zalora.com.hk/kids/" hreflang="en-HK" rel="alternate">
<link href="https://zh.zalora.com.hk/kids/" hreflang="zh-HK" rel="alternate">
<link href="https://www.zalora.co.id/kids/" hreflang="id-ID" rel="alternate">
<link href="https://www.zalora.com.my/kids/" hreflang="en-MY" rel="alternate">
<link href="https://www.zalora.com.ph/kids/" hreflang="en-PH" rel="alternate">
<link href="https://www.zalora.sg/kids/" hreflang="en-SG" rel="alternate">
<link href="https://www.zalora.com.tw/kids/" hreflang="zh-TW" rel="alternate">    
<link rel="shortcut icon" type="image/png" href="https://static-tw.zacdn.com/images/favicon.png" />
    
<link rel="apple-touch-icon-precomposed" href="https://static-tw.zacdn.com/images/apple-touch-icon-precomposed.png">
    
<link rel="apple-touch-icon" href="https://static-tw.zacdn.com/images/apple-touch-icon.png">
<meta property="fb:app_id" content="863987917015369">
<meta property="al:ios:app_store_id" content="624639017" />
<meta property="al:ios:app_name" content="ZALORA æå° è³¼ç©" />
    <meta property="al:ios:url" content="zalora://tw//seg_s/m/" />
    <meta property="al:android:url" content="zalora://tw//seg_s/m/">
<meta property="al:android:package" content="com.zalora.android">
<meta property="al:android:app_name" content="ZALORA æå° è³¼ç©">
    <meta property="og:title" content="ZALORA æå°æé£¾è³¼ç©ç¶²ç« - å°ç£é¦é¸ç·ä¸è³¼ç©æè£æé»"/>
<meta property="og:type" content="website" />
            <meta property="og:image" content="https://static-tw.zacdn.com/images/logo.jpg"/>
        <meta property="og:description" content="ZALORA å°ç£é¦é¸æå°è³¼ç©æé»ï¼âæ»¿é¡åé âè²¨å°ä»æ¬¾ â30å¤©åè²»éè²¨ âåéèæ¬ååçï¼ç«å³é»æ ZALORA å®ç¶²ç·ä¸é¸è³¼ææµè¡å®åï¼è¼é¬èµ°æå°è·¯ï¼"/>
    <meta property="og:url" content="https://www.zalora.com.tw/"/>

<link rel="stylesheet" type="text/css" href="https://static-tw.zacdn.com/css/release/alice-twfas-core-14a7577c63fc83950b51.css" media="all" />
<link rel="stylesheet" type="text/css" href="https://static-tw.zacdn.com/css/release/alice-twfas-home-d7770421c5c1dc25cde6.css" media="all" /><!--[if lt IE 10]>
    <script src="https://static-tw.zacdn.com/js/modernizr.custom.52848.js" type="text/javascript"></script>
<![endif]-->
    <script src="https://static-tw.zacdn.com/js/jquery-1.7.min.js" type="text/javascript"></script>
<script>
 /*! LAB.js (LABjs :: Loading And Blocking JavaScript)
    v2.0.1 (c) Kyle Simpson
    MIT License
 */
(function(o){var K=o.$LAB,y="UseLocalXHR",z="AlwaysPreserveOrder",u="AllowDuplicates",A="CacheBust",B="BasePath",C=/^[^?#]*\//.exec(location.href)[0],D=/^\w+\:\/\/\/?[^\/]+/.exec(C)[0],i=document.head||document.getElementsByTagName("head"),L=(o.opera&&Object.prototype.toString.call(o.opera)=="[object Opera]")||("MozAppearance"in document.documentElement.style),q=document.createElement("script"),E=typeof q.preload=="boolean",r=E||(q.readyState&&q.readyState=="uninitialized"),F=!r&&q.async===true,M=!r&&!F&&!L;function G(a){return Object.prototype.toString.call(a)=="[object Function]"}function H(a){return Object.prototype.toString.call(a)=="[object Array]"}function N(a,c){var b=/^\w+\:\/\//;if(/^\/\/\/?/.test(a)){a=location.protocol+a}else if(!b.test(a)&&a.charAt(0)!="/"){a=(c||"")+a}return b.test(a)?a:((a.charAt(0)=="/"?D:C)+a)}function s(a,c){for(var b in a){if(a.hasOwnProperty(b)){c[b]=a[b]}}return c}function O(a){var c=false;for(var b=0;b<a.scripts.length;b++){if(a.scripts[b].ready&&a.scripts[b].exec_trigger){c=true;a.scripts[b].exec_trigger();a.scripts[b].exec_trigger=null}}return c}function t(a,c,b,d){a.onload=a.onreadystatechange=function(){if((a.readyState&&a.readyState!="complete"&&a.readyState!="loaded")||c[b])return;a.onload=a.onreadystatechange=null;d()}}function I(a){a.ready=a.finished=true;for(var c=0;c<a.finished_listeners.length;c++){setTimeout(a.finished_listeners[c],0)}a.ready_listeners=[];a.finished_listeners=[]}function P(d,f,e,g,h){setTimeout(function(){var a,c=f.real_src,b;if("item"in i){if(!i[0]){setTimeout(arguments.callee,25);return}i=i[0]}a=document.createElement("script");if(f.type)a.type=f.type;if(f.charset)a.charset=f.charset;if(h){if(r){e.elem=a;if(E){a.preload=true;a.onpreload=g}else{a.onreadystatechange=function(){if(a.readyState=="loaded")g();a.onreadystatechange=null}}a.src=c}else if(h&&c.indexOf(D)==0&&d[y]){b=new XMLHttpRequest();b.onreadystatechange=function(){if(b.readyState==4){b.onreadystatechange=function(){};e.text=b.responseText+"\n//@ sourceURL="+c;g()}};b.open("GET",c);b.send()}else{a.type="text/cache-script";t(a,e,"ready",function(){i.removeChild(a);g()});a.src=c;i.insertBefore(a,i.firstChild)}}else if(F){a.async=false;t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}else{t(a,e,"finished",g);a.src=c;i.insertBefore(a,i.firstChild)}},0)}function J(){var l={},Q=r||M,n=[],p={},m;l[y]=true;l[z]=false;l[u]=false;l[A]=false;l[B]="";function R(a,c,b){var d;function f(){if(d!=null){I(b);d=null}}if(p[c.src].finished)return;if(!a[u])p[c.src].finished=true;d=b.elem||document.createElement("script");if(c.type)d.type=c.type;if(c.charset)d.charset=c.charset;t(d,b,"finished",f);if(b.elem){b.elem=null}else if(b.text){d.onload=d.onreadystatechange=null;d.text=b.text}else{d.src=c.real_src}i.insertBefore(d,i.firstChild);if(b.text){f()}}function S(c,b,d,f){var e,g,h=function(){b.ready_cb(b,function(){R(c,b,e)})},j=function(){b.finished_cb(b,d)};b.src=N(b.src,c[B]);b.real_src=b.src+(c[A]?((/\?.*$/.test(b.src)?"&_":"?_")+~~(Math.random()*1E9)+"="):"");if(!p[b.src])p[b.src]={items:[],finished:false};g=p[b.src].items;if(c[u]||g.length==0){e=g[g.length]={ready:false,finished:false,ready_listeners:[h],finished_listeners:[j]};P(c,b,e,((f)?function(){e.ready=true;for(var a=0;a<e.ready_listeners.length;a++){setTimeout(e.ready_listeners[a],0)}e.ready_listeners=[]}:function(){I(e)}),f)}else{e=g[0];if(e.finished){setTimeout(j,0)}else{e.finished_listeners.push(j)}}}function v(){var e,g=s(l,{}),h=[],j=0,w=false,k;function T(a,c){a.ready=true;a.exec_trigger=c;x()}function U(a,c){a.ready=a.finished=true;a.exec_trigger=null;for(var b=0;b<c.scripts.length;b++){if(!c.scripts[b].finished)return}c.finished=true;x()}function x(){while(j<h.length){if(G(h[j])){try{h[j]()}catch(err){}}else if(!h[j].finished){if(O(h[j]))continue;break}j++}if(j==h.length){w=false;k=false}}function V(){if(!k||!k.scripts){h.push(k={scripts:[],finished:true})}}e={script:function(){for(var f=0;f<arguments.length;f++){(function(a,c){var b;if(!H(a)){c=[a]}for(var d=0;d<c.length;d++){V();a=c[d];if(G(a))a=a();if(!a)continue;if(H(a)){b=[].slice.call(a);b.push(d,1);c.splice.call(c,b);d--;continue}if(typeof a=="string")a={src:a};a=s(a,{ready:false,ready_cb:T,finished:false,finished_cb:U});k.finished=false;k.scripts.push(a);S(g,a,k,(Q&&w));w=true;if(g[z])e.wait()}})(arguments[f],arguments[f])}return e},wait:function(){if(arguments.length>0){for(var a=0;a<arguments.length;a++){h.push(arguments[a])}k=h[h.length-1]}else k=false;x();return e}};return{script:e.script,wait:e.wait,setOptions:function(a){s(a,g);return e}}}m={setGlobalDefaults:function(a){s(a,l);return m},setOptions:function(){return v().setOptions.apply(null,arguments)},script:function(){return v().script.apply(null,arguments)},wait:function(){return v().wait.apply(null,arguments)},queueScript:function(){n[n.length]={type:"script",args:[].slice.call(arguments)};return m},queueWait:function(){n[n.length]={type:"wait",args:[].slice.call(arguments)};return m},runQueue:function(){var a=m,c=n.length,b=c,d;for(;--b>=0;){d=n.shift();a=a[d.type].apply(null,d.args)}return a},noConflict:function(){o.$LAB=K;return m},sandbox:function(){return J()}};return m}o.$LAB=J();(function(a,c,b){if(document.readyState==null&&document[a]){document.readyState="loading";document[a](c,b=function(){document.removeEventListener(c,b,false);document.readyState="complete"},false)}})("addEventListener","DOMContentLoaded")})(this);
</script>
<!-- INITIALIZE RICH RELEVANCE -->
<script type="text/javascript" src='//media.richrelevance.com/rrserver/js/1.2/p13n.js'></script>   
<script charset="utf-8" type="text/javascript">
    try {
        const R3_COMMON = new r3_common();

        R3_COMMON.setApiKey('543bc648e01ba835');
        R3_COMMON.setBaseUrl(window.location.protocol + '//recs.richrelevance.com/rrserver/');
        R3_COMMON.setClickthruServer(window.location.protocol + '//' + window.location.host);
        R3_COMMON.setSessionId('4k1XMmg4RRhczdjv7Ia4Tq5JE7jrYbRi');
        R3_COMMON.setUserId('');
        R3_COMMON.setRegionId('zh-TW');
        R3_COMMON.apiClientKey = 'ddf2e7d041fb1620';

        window.R3_COMMON = R3_COMMON;
    } catch (e) {
        Raven.captureException('Cannot init core integration of Rich Relevance: ' + e.message);
    }
</script>


                              <script>!function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="WV643-RD4VJ-ZCK6D-ACTWH-PLJCM",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"WV643-RD4VJ-ZCK6D-ACTWH-PLJCM",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e=""=="true"?1:0,t="",n="o7wglkdijscf2yiiilba-f-4f578ae3d-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"32","ak.cp":"426839","ak.ai":parseInt("268869",10),"ak.ol":"0","ak.cr":14,"ak.ipv":4,"ak.proto":"h2","ak.rid":"7f33422","ak.r":31212,"ak.a2":e,"ak.m":"dscx","ak.n":"essl","ak.bpcip":"119.236.101.0","ak.cport":53838,"ak.gh":"23.43.48.68","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.csrc":"-","ak.acc":"","ak.t":"1627931330","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==FoBziCUwxHk7mdNqVm0A/wz9tM9aNFER6kN7Z7AFCe5fvjAs7DtS6NzbEX5HZzVmJ65sHY5yNUNIJoh5zi18cgfp2Ey8HT59f0eSQ2QU7VXFPzci4E7jWLqxFURLb9KogkIqX4bjKN0YJ38OpT6S8FCBvOep3+g8Hi4HkMU9Iwg2CEFvu6E3s51Cp+brz4odnKnXOiBffU80MW1H29mV0AfPDEAGcWmUKxXs4xvUQUeVHGP/3vebBJBh5CV6LQSGVN5cH+teCdMnoxsfnuj91hd9tybcZ0c1jr46AMNzLujNE/JNfk2z0SwUD0SDQ5bXhglWWX9CVyBd9P6ysWPAuLsGO0dGLU1bb1+XDCCRE6xKFgFcVVkT9g1ikeFncx21+q7G6xr4XxzryUCBVIwbVQXFn3vYk47WIy2vd+OCv38=","ak.pv":"25","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script><script >bazadebezolkohpepadr="403004729"</script><script type="text/javascript" src="https://www.zalora.com.tw/akam/11/18055eab"  defer></script></head>
<body class="no-js l-full-hd ui-page-bg  firefox-52 thm-core thm-local thm-twfas  l-hasSidebar">
<script>document.body.className = document.body.className.replace('no-js', 'js');</script>


<!-- TRACKING START -->
<!-- Google Tag Manager Begin - Route default > index > index -->
<script>
    dataLayer = [{
        'pr_sub_status': 'O',
        'Site_Language': 'zh',
        'Gender_Category': '',
        'Landingpage_ID': '',
        'Country-Province': 'TW',
        'Page_Type': 'homepage',
        'Catalog_Type': 'Main',
        'Site_Section': 'Main',
        'Product_Category': '',
        'Product_Subcategory': '',

        'Device_Type': 'PC',
        'Device_OS': 'Macintosh',
        'Device_Model': '',
        'ZNOW_Sub_Status' : 'non-subscriber',
        'ZNOW_Days_To_Expiry': '',
        'ZNOW_Auto_Renew' : '0',
        'Customer_Type': '4',
        'Gender_User': '',
        'Year_of_Birth': '',
        'User_ID': '',
        'Zuid': '',
        'First_Visit': '0',
        'Page_Count': '1',
        'Visitor_ID': '440418406.1627931330',
        'Birthday': '',
        
        

    }];

    if(dataLayer[0] && dataLayer[0].items) {
        dataLayer[0].items = JSON.parse(dataLayer[0].items);
    }


</script>
<noscript>
    <iframe src="//www.googletagmanager.com/ns.html?id=GTM-WN9XFH"
            height="0" width="0" style="display:none; visibility:hidden">
    </iframe></noscript>
<script>
    (function(w,d,s,l,i){w[l]=w[l]||[];
    w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WN9XFH');
</script>
<!-- Google Tag Manager End -->

    <script src="https://www.google-analytics.com/cx/api.js"></script>
    <script type="text/javascript">
    if (typeof cxApi !== 'undefined') {
        cxApi.setChosenVariation(0, 'GTM-N3RJ5MG');
    }
    </script>
<!-- GoogleAnalytics Begin - Route: default > index > index -->
<script type="text/javascript">
    
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    
    ga('create', 'UA-28787518-1', 'auto');
    ga('require', 'GTM-N3RJ5MG');
    ga('set', 'contentGroup1', 'homepage');
    ga('set', 'contentGroup2', 'Main.Main.desktop.homepage.https://www.zalora.com.tw/.');
    ga('require', 'linkid', 'linkid.js');
    ga('require', 'displayfeatures');
    ga('require', 'ec');
    ga('require', 'linker');
    ga('linker:autoLink', ['.zalora.com.tw']);
    
    
        ga('set', 'exp', '3Cm_z-mkSUOus3IYd28oMQ.0');    
    ga('set', 'dimension8', '');
    ga('set', 'dimension17', '');
    ga('set', 'dimension26', '4');
    ga('set', 'dimension29', 'Main');
    ga('set', 'dimension9', 'Main');

    
        
    ga('set', 'dimension6', 'x'); 



    ga('send', 'pageview', location.pathname + location.search + (location.search.search(/(\&|\?)utm_.*?=/) != -1 ? location.hash : ""));

    
</script>
<!-- GoogleAnalytics End -->

<!-- Tealium Begin - Route default > index > index -->
<script type="text/javascript">
    var utag_data = {
        'pr_sub_status': 'O',
        'Site_Language': 'zh',
        'Gender_Category': '',
        'Landingpage_ID': '',
        'Country_Province': 'TW',
        'Page_Type': 'homepage',
        'Catalog_Type': 'Main',
        'Site_Section': 'Main',
        'Page_Name': document.title,
        'Module_Name': 'default',
        'Controller_Name': 'index',
        'Action_Name': 'index',
        'Transaction_Currency_Code': 'TWD',
        'Product_Category': [''],
        'Product_Subcategory': [''],

        'Device_Type': 'PC',
        'Device_OS': 'Macintosh',
        'Device_Model': '',
        'ZNOW_Sub_Status' : 'non-subscriber',
        'ZNOW_Days_To_Expiry': '',
        'ZNOW_Auto_Renew' : '0',
        'Customer_Type': '4',
        'Gender_User': '',
        'Year_of_Birth': '',
        'User_ID': '',
        'Zuid': '',
        'First_Visit': '0',
        'Page_Count': '1',
        'Visitor_ID': '440418406.1627931330',

    }
</script>

<script type="text/javascript">
    (function(a,b,c,d){
        a='//tags.tiqcdn.com/utag/zalora/main/prod/utag.js';
        b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
        a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
    })();
</script>
<!-- Tealium End -->

<script>
    var Zalora = Zalora || {};
    (function(Zalora) {
        Zalora.store = Zalora.store || {};
        Zalora.store.onDOMReadyCallbackQueue = Zalora.store.onDOMReadyCallbackQueue || [];
        Zalora.Tracking = Zalora.Tracking || {};
        Zalora.Tracking.Tealium = Zalora.Tracking.Tealium || {};
        Zalora.Tracking.Tealium.zuidData = function() {
            $ = $ || jQuery;
            var savedZuidData = $.cookie('zuidData');
            var zuid = utag_data.Zuid;
            var isZuidDataUpdated = zuid ? false : true;
            var pushZuidData = function(zuidData) {
                if (typeof utag !== 'undefined') {
                    utag.link({
                        'event_name': 'zuid_data',
                        'customerIdentifier': zuidData.email,
                        'customerIdentifier2': zuidData.emailMd5,
                        'firstName': zuidData.firstName,
                        'lastName': zuidData.lastName,
                        'timestampOfSubscription': zuidData.createdAt
                    });
                }

                if (typeof dataLayer !== 'undefined') { // TO BE REMOVED WHEN GTM IS REMOVED
                    dataLayer.push({
                        'customerIdentifier': zuidData.email,
                        'customerIdentifier2': zuidData.emailMd5,
                        'customerIdentifier3': zuidData.emailSha256,
                        'firstName': zuidData.firstName,
                        'customerIdentifierfname3': zuidData.firstNameSha256,
                        'lastName': zuidData.lastName,
                        'customerIdentifierlname3': zuidData.lastNameSha256,
                        'timestampOfSubscription': zuidData.createdAt
                    });
                }
            };

            // check if an ajax call is required
            if (savedZuidData) {
                zuidData = $.parseJSON(savedZuidData);
                if (zuid == zuidData.zuid && zuidData.emailMd5 && zuidData.emailSha256) {
                    pushZuidData(zuidData);
                    isZuidDataUpdated = true;
                }
            }

            if (!isZuidDataUpdated) {
                $.ajax({
                    url: '/newsletter/getzuiddata',
                    data: {zuid: zuid, cookie: true},
                    async: true
                }).success(function(values) {
                    zuidData = $.parseJSON(values);
                    if (zuidData) {
                        pushZuidData(zuidData);
                    }
                });
            }
        };
        if (typeof $ === 'function' && typeof $.cookie === 'function') {
            $(document).ready(function() {
                Zalora.Tracking.Tealium.zuidData();
            });
        } else {
            Zalora.store.onDOMReadyCallbackQueue.push('Zalora.Tracking.Tealium.zuidData');
        }
    })(Zalora);

    
    </script>
<!-- Citrus tracking Begin - Route: default > index > index -->

<script type="text/javascript" src="https://tracking.ads.global-fashion-group.com/static/gap.js"> </script>
<script type="text/javascript">
    (function(window, urlBase) {
        if(!window.citrusAd && typeof CitrusAd != 'undefined'){
            window.citrusAd = CitrusAd.init(urlBase,{
                disableTracking: false
            });
        }
    })(window, 'https://tracking.ads.global-fashion-group.com/v1');
</script>
<!-- SegmentAnalytics Start -->
<script type="text/javascript">
        !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.13.1";
          analytics.load('wXmXu63ztlsLtL3dgyHatD9e9zbsIRRl');
          analytics.page();
        }}();                
</script>
<!-- SegmentAnalytics End -->

<!-- TRACKING END  -->
<div id="message-popup">
    <div class="content">
        <div class="js-message popup-message">
        </div>
        <div class="action">
            <button class="js-popup-button btn btn--special"></button>
        </div>
    </div>
</div>
<div id="page" class="l-page">
    
<header id="navigation-bar" class="body__header header__skeleton">
    <!-- SEGMENT BAR -->
    <div class="js-floatMenu cms-banner-color">
    <div id="seg-bar__main" class="seg-bar">
    <span id="seg-bar__logo" class="seg-bar__black-logo">
                    <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 21" class="zalora-logo zalora-logo--white pts">
                    <polygon points="18.523,1.054 18.518,0.265 0.719,0.265 0.719,1.93 15.282,1.93 0,20.07 0,20.735 18.626,20.735
            18.626,19.07 3.248,19.07"/>
<path d="M36.263,0.118l-9.709,20.617h2.081l3.269-6.956h9.838l3.269,6.956h2.081L37.383,0.118H36.263z
             M40.963,12.114h-8.281l4.126-8.833L40.963,12.114z"/>
<polygon points="58.669,0.265 56.686,0.265 56.686,20.735 68.87,20.735 68.87,19.07 58.669,19.07   "/>
<path d="M88.688,0c-6.217,0-11.087,4.612-11.087,10.5c0,5.888,4.87,10.5,11.087,10.5
            c6.251,0,11.147-4.612,11.147-10.5C99.836,4.612,94.939,0,88.688,0z M88.749,19.188c-5.071,0-9.044-3.816-9.044-8.688
            c0-4.872,3.973-8.688,9.044-8.688c5.037,0,8.983,3.816,8.983,8.688C97.732,15.372,93.786,19.188,88.749,19.188z"/>
<path d="M119.743,10.567c2.457-0.985,3.702-2.642,3.702-4.93c0-3.363-2.628-5.371-7.031-5.371h-5.487v20.469h1.983
            v-9.638h2.596c2.432,0,3.181,0.348,5.592,4.042l3.658,5.597h2.33l-4.854-7.242C121.318,12.157,120.58,11.136,119.743,10.567z
             M112.909,1.93h3.171c3.392,0,5.26,1.327,5.26,3.736c0,2.428-1.846,3.765-5.199,3.765h-3.231V1.93z"/>
<path d="M144.291,0.118h-1.121l-9.709,20.617h2.081l3.269-6.956h9.838l3.269,6.956H154L144.291,0.118z
             M147.871,12.114h-8.281l4.126-8.833L147.871,12.114z"/>                </svg>
            </a>
            </span>
    <ul id="seg-txt__default" class="seg-bar__content seg-text__transition">
        	        <li class="segSelect txtCenter prl js-header__segment-women">
	            <a class="a-white b-header__clickable b-header__segment-text txtUpper"
	                href="/women/?from=header">å¥³è£</a>
	        </li>
	    	        <li class="segSelect txtCenter prl js-header__segment-men">
	            <a class="a-white b-header__clickable b-header__segment-text txtUpper"
	                href="/men/?from=header">ç·è£</a>
	        </li>
	    	        <li class="segSelect txtCenter prl js-header__segment-luxury">
	            <a class="a-white b-header__clickable b-header__segment-text txtUpper"
	                href="/luxury/?from=header">åéç²¾å</a>
	        </li>
	    	        <li class="segSelect txtCenter prl js-header__segment-kids">
	            <a class="a-white b-header__clickable b-header__segment-text txtUpper"
	                href="/kids/?from=header">åç«¥</a>
	        </li>
	        </ul>
    <span id="seg-bar__search" class="js-seg-bar__search seg-bar__search">
                    <form id="onsiteSearch" action="/catalog/" method="get" autocapitalize="on"
                  autocorrect="on">
                <input class="lfloat js-seg-bar-search__selSearchInput seg-bar-search__selSearchInput" name="q"
                       type="text"
                       placeholder="æå°ååãé¢¨æ ¼ååç"
                       autocomplete="off">
                <div class="js-search-segment-select"
                     data-segment=""></div>
                <button class="rfloat seg-bar-search__selSearchButton" type="submit">
                    <i class="icon_loupe-dark"></i>
                    <span class="hdSearchButton"></span>
                </button>
                <div class="js-searchsuggest__popup searchsuggest__popup display-none"></div>
                                    <div class="js-recent-search__popup searchsuggest__popup display-none"></div>
                            </form>
            </span>
    <ul id="seg-bar__utils" class="seg-bar__content">
            <li class="pll">
                <!-- ACCOUNT DROPDOWN START-->
                                    <i id="account__icon" class="js-seg-bar__account seg-bar__account icon_user"></i>
                                <div class="account-menu__popup txtLeft  b-header-shadow" style="display:none">
                    <div class="account-menu__head pal pts txtUpper fontsizeM">
                        æ­¡è¿                    </div>
                    <div class="account-menu__body phl pal fontsizeS txtUpper">
                        <ul role="menu" aria-labelledby="dLabel">
                                                            <li class="pbm">
                                    <a class=""
                                       href="customer/account/login/?from=header"
                                       title="ç»å¥" rel="follow"
                                       id="account-menu-login-btn">
                                        ç»å¥                                    </a>
                                </li>
                                <li class="pbm">
                                    <a href="customer/account/create/?from=header"
                                       title="è¨»å" rel="follow"
                                       id="account-menu-register-btn">
                                        è¨»å                                    </a>
                                </li>
                                <li class="pbm">
                                    <a href="#boxTrackOrder" class="js-trackOrder" data-toggle="modal"
                                       data-target="#boxTrackOrder" id="account-menu-orders-track-btn">
                                        è¿½è¹¤è¨å®                                    </a>
                                </li>
                                

                                <li class="pbm">
                                    <a href="https://support-tw.zalora-ops.com/zh-TW/support/home" target="_blank"
                                       title="å¸¸è¦åé¡" rel="follow noopener"
                                       id="account-menu-help-btn">
                                        å¸¸è¦åé¡                                    </a>
                                </li>

                            
                                                    </ul>
                    </div>
                </div>
                <!-- ACCOUNT DROPDOWN END-->
            </li>
            <li class="pll">
                <a id="wishlist__icon" class="js-seg-bar__wishlist icon_favourites" href="/customer/wishlist/?from=header">
                    <div class="seg-bar__wl-count js-seg-bar__wl-count"></div>
                </a>
                <div id="wishlist__popup" class="b-header-shadow" style="display:none">
                    <div id="wishlist__popup-message" class="wl-info__head pal pas txtUpper fontsizeM"></div>
                </div>
            </li>
            <!--MINI CART START-->
            <li class="seg-bar__cart mll">
                <a id="minicart__icon" class="icon_bag" href="/cart/?from=header">
    <div class="seg-bar__mini-cart-count js-seg-bar__mini-cart-count" id="shopping-bag-qty"></div>
</a>
<div id="minicart__arrow" class="minicart__arrow">
    <svg class="segment-bar__arrow">
        <polygon points="10 0 20 10 0 10 "></polygon>
    </svg>
</div>
<div id="minicart__popup" class="minicart__popup txtLeft b-header-shadow">
    <div class="minicart__head pal pts txtUpper txtLeft fontsizeM">
    è³¼ç©è» <text class='js-seg-bar__mini-cart-count-dropdown'>0</text> åå</div>
<div id="js-minicart-message-content">
    </div>
    </div>
            </li>
            <!--MINI CART END-->
        </ul>
</div>

<!--REPLACEMENT OF SEGMENT LIST IN SCMALL SCREEN-->
<ul id="seg-txt__replace" class="seg-bar seg-bar__content seg-text__transition" style="display: none;">
    	        <li class="segSelect txtCenter prl js-header__segment-women">
	            <a class="a-white b-header__clickable b-header__segment-text txtUpper"
	                href="/women/?from=header">å¥³è£</a>
	        </li>
	    	        <li class="segSelect txtCenter prl js-header__segment-men">
	            <a class="a-white b-header__clickable b-header__segment-text txtUpper"
	                href="/men/?from=header">ç·è£</a>
	        </li>
	    	        <li class="segSelect txtCenter prl js-header__segment-luxury">
	            <a class="a-white b-header__clickable b-header__segment-text txtUpper"
	                href="/luxury/?from=header">åéç²¾å</a>
	        </li>
	    	        <li class="segSelect txtCenter prl js-header__segment-kids">
	            <a class="a-white b-header__clickable b-header__segment-text txtUpper"
	                href="/kids/?from=header">åç«¥</a>
	        </li>
	    </ul>
    </div>
    <!-- CATEGORY BAR -->
    <div class="b-header__category-bar js-floatMenu js-header__category-bar">
            </div>
</header>

<!--NEWSLETTER POPUP-->

<div class="js-newsletter__slide" class="b-newsletterSlide">
    <div class="js-stickyLink b-stickyLink">
        <a href="javascript:void(0)" id="js-stickyLink--btn">
            <div class="b-stickyLink__icon"></div>
        </a>
    </div>

    <div class="b-stickyNewsletter js-stickyNewsletter box">
        <div id="nl_slider_notification"  class="b-stickyNewsletter__noti js-stickyNewsletter__formNoti">
            <div class="b-stickyNewsletterNoti__wrapper">
                <div id="js-successNoti" class="b-successNoti">
                    <div class="b-successNoti__header">
                        æ¨çåªæ å¸å¨å¯éä¸­                    </div>
                    <div class="b-successNoti__body">
                        æ¥çæ¨çä¿¡ç®±ï¼åæ¬åå¾éµä»¶ç®±ï¼ä»¥é ååªæ å¸ï¼ç¶å¾éå§è³¼ç©å§ï¼                    </div>

                </div>
                <div id="js-resubscribedNoti" class="b-resubscribedNoti">
                    <div class="b-resubscribedNoti__header">
                        å¾é«èè¦å°æ¨åä¾ï¼                    </div>
                    <div class="b-resubscribedNoti__body">
                        æ¥çæ¨çä¿¡ç®±ä»¥æ¥æ¶æå°æ½®æµåç¨å®¶åªæ çè³è¨ï¼                    </div>
                    <div class="b-resubscribedNoti__hint">
                        (NT$ 260 ææ£åªæ å¸åéé¦æ¬¡è¨é±èä½¿ç¨)                    </div>
                </div>
                <div id="js-alreadySubscribedNoti" class="b-alreadySubscribedNoti">
                    <div class="b-alreadySubscribedNoti__header">
                        æ¨å·²ç¶è¨é±                    </div>

                </div>
                <div class="b-stickyNewsletterNoti__ok">
                    <button id="js-stickyNewsletterNoti__ok--btn" class="btn btn--inverted btn--fluid">OK</button>
                </div>
            </div>
        </div>
        <div class="b-stickyNewsletter__form js-stickyNewsletter__form">
            <a href="javascript:void(0)" id="js-stickyNewsletter__close--btn" class="b-stickyNewsletter__close--btn">éé</a>
            <div class="b-stickyNewsletterForm__wrapper">
                <!-- span class="s-newsletter i-newsletterBig"></span -->
                <div class="b-stickyNewsletter__formInfo">
                    <div class="b-stickyNewsletterForm__header">
                        æ¨çä¸ä¸åè¨å®<br>äº«ç¨ NT$ 260 ææ£                    </div>
                    <div class="b-stickyNewsletterForm__body">
                        è¼¸å¥æ¨çé»éµå°åä»¥æ¥æ¶ZALORAææ°è³è¨ååªæ                     </div>
                </div>
                <form class="b-stickyNewsletterForm__inputs newsletter-signup" method="post" action="/newsletter/validate//" position="nl_slider_notification">
    <input type="hidden" value="dea1d49d6ef44fe4faee78cd8407aa9b3a056f57" name="YII_CSRF_TOKEN" />
    <div class="b-stickyNewsletterForm__email">
        <input class="js-emailInputText" placeholder="è¼¸å¥é»éµé»å" required="required" name="newsletter[email]" id="newsletterOfferInput" data-errormessage-value-missing="è«å¡«å¯«æ­¤æ¬" type="email" />        <div class="b-stickyNewsletterForm__email--suggestion">
            <div class="js-emailSuggestion emailSuggestion hide">
    æ¨æ¯å¦æ    <p class="js-emailSuggestion-accept suggestedDomain"></p>?
</div>
        </div>
    </div>
    <div id="js-stickyNewsletterForm__radio" class="b-stickyNewsletterForm__radio">
        <div class="b-stickyNewsletterForm__radio--label">
            <label for="newsletter[gender]">é¸ææ§å¥:</label>
            <label for="newsletter[gender]" class="fsm">(åäººåå§å®¹)</label>
        </div>
        <input type="radio" name="newsletter[gender]" value="female"> å¥³è£        <input type="radio" name="newsletter[gender]" value="male" class="mls"> ç·è£    </div>
    <div class="b-stickyNewsletterForm__submit">
        <button id="newsletter-submit-btn" class="btn btn--inverted btn--fluid" type="submit">æäº¤</button>
    </div>
</form>
                <div class="b-stickyNewsletterForm__footer">
                    éé¦æ¬¡è¨é±è                </div>
            </div>

        </div>
    </div>

</div>

<!--WALLET POPUP-->

<!--USP BLOCKS-->
<div class="js-bottomHeader">
                        <script>
    $(document).mouseup(function ()
    {
        $(".cms-app-badge-vc").hide();
        $(".cms-arrow-up").hide();
        $(".cms-30days-return").hide();
        $(".cms-arrow-up2").hide();
    });
    $(document).ready(function () {
        $("#js-tooltip-interact").click(function () {
            $(".cms-app-badge-vc").toggle();
            $(".cms-arrow-up").toggle();
            $("a.js-tooltip-header.mkt-type-link").text('KIDS');
            $("a.js-tooltip-header.ctl-type-link").text('OUTLET');
        });
    });

    $(document).ready(function () {
        $("#js-tooltip-interact2").click(function () {
            $(".cms-30days-return").toggle();
            $(".cms-arrow-up2").toggle();
        });
    });
</script>
<script>
var a = document.querySelector('a[href="https://support.zalora.com.tw/hc/zh-tw/categories/201101798-éè²¨åéæ¬¾ç¨åº?_ga=2.197036261.810807911.1606971433-2109561331.1606383478"]');
if (a) {
  a.setAttribute('href', 'https://support-tw.zalora-ops.com/zh-TW/support/solutions/articles/76000018081')
}
</script>




<style>
    .cms-usp-block-container{
        width: 994px;
        height: 30px;
        margin: 0 auto;
        padding: 10px 0px;
    }
    .cms-usp-name{
        font-size: 11px;
        margin-left: 5px;
        padding-top: 4px;
        margin-right: 25px;
        border-bottom: 1px solid #000;
        -webkit-transition:all .3s ease-out;
        -moz-transition:all .3s ease-out;
        -o-transition:all .3s ease-out;
        transition:all .3s ease-out  
    }
    .cms-app-badge {
        background: #5C5C5C;
        font-size: 11px;
        display: inline-block;
        margin-right: 0px;
        margin-top: -2px;
        opacity: 0.8;
        padding-top: 8px;
        padding-bottom: 6px;
        padding-left: 15px;
        padding-right: 8px;        
        color: #fff;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        -webkit-transition:all .3s ease-out;
        -moz-transition:all .3s ease-out;
        -o-transition:all .3s ease-out;
        transition:all .3s ease-out  
    }
    .cms-app-badge:hover, .cms-30days-badge:hover{
        cursor: pointer;
        opacity: 0.6;
    }
    .cms-app-icon {
        margin-top: -8px;
        padding-left: 6px;
    }
    .cms-app-badge-vc{
        position: absolute;
        margin-left: 793px;
        margin-top: 40px;
        z-index: 9;
        width: 182px;
        padding: 17px 10px;
        background: #ccc;
        text-align: center;
        -webkit-box-shadow: 0px 3px 5px 0px rgba(215,215,215,1);
        -moz-box-shadow: 0px 3px 5px 0px rgba(215,215,215,1);
        box-shadow: 0px 3px 5px 0px rgba(215,215,215,1);
        display: none;
    }
    .cms-30days-return {
        position: absolute;
        margin-left: -32px;
        margin-top: 40px;
        z-index: 9;
        width: 190px;
        padding: 17px 10px;
        background: #ccc;
        text-align: center;
        -webkit-box-shadow: 0px 3px 5px 0px rgba(215,215,215,1);
        -moz-box-shadow: 0px 3px 5px 0px rgba(215,215,215,1);
        box-shadow: 0px 3px 5px 0px rgba(215,215,215,1);
        display: none;
    }
    .cms-arrow-up {
        position: absolute;
        margin-left: 882px;
        margin-top: 29px;
        width: 0;
        height: 0;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 13px solid #ccc;
        display: none;
    }

    .cms-arrow-up2 {
        position: absolute;
        margin-left: 60px;
        margin-top: 29px;
        width: 0;
        height: 0;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 13px solid #ccc;
        display: none;
    }
    .cms-icon-scaler {
        transform: scale(0.76);
        margin-top: 4px;
    } 
    .btn.btn--secondary.btn--inverted {
        color:#FFF;
        background:transparent;
    }
    .cms-usp-visitfaqs:hover{
        text-decoration:none;
        cursor:pointer;
        opacity:0.6;
    }
    .cms-usp-name{
        font-size: 11px;
        margin-left: 5px;
        padding-top: 4px;
        margin-right: 25px;
        border-bottom: 1px solid #000;
        -webkit-transition:all .3s ease-out;
        -moz-transition:all .3s ease-out;
        -o-transition:all .3s ease-out;
        transition:all .3s ease-out  
    }
</style>
<div class="cms-usp-block-container">
    <!--
    <div id="js-tooltip-interact2" class="cms-30days-badge"> 
        <div class="lfloat icon_usp_30return cms-icon-scaler"></div>
        <div class="lfloat cms-usp-name txtUpper" style="border-bottom: 1px solid #000">å¤©å§åè²»éè²¨</div>
    </div>
    <div class="cms-arrow-up2"></div>
    <div class="cms-30days-return">
        <div>
           æåçºæ¨æä¾æ¹ä¾¿çéè²¨æå
 
        </div>
      
       <div class="mts">
           å¡«å¯«<a href="https://www.zalora.com.tw/customer/exchange_return/index" target="_blank"><u><b>ç¶²è·¯éè²¨ç³è«è¡¨å®</b></u></a><br>
ç¶å¾7æ¥å§æå¸¶æ¨çiBONç·¨ç¢¼å°é°è¿7-11è¼é¬è¾¦çéè²¨!<br>
  <div>
            <img src="https://static-sg.zacdn.com/cms/StaticPages/7-Eleven-Logo-Type-Face_nowhiteline.png" width="100" height="35">
        </div>

            è©³æè«åé±<a href="https://support-tw.zalora-ops.com/zh-TW/support/home" target="_blank"><u><b>å¸¸è¦åé¡</b></u></a>
        </div>
        
    </div> 
    -->    
    <a href="https://support-tw.zalora-ops.com/zh-TW/support/solutions/articles/76000018078/?from=onsite-usp" target="_blank">
        <div class="lfloat icon_usp_30return cms-icon-scaler"></div>
        <div class="lfloat cms-usp-name txtUpper">å¤©ååè²» 7-11 éè²¨ä¾¿</div>
    </a>
    <a href="https://support-tw.zalora-ops.com/zh-TW/support/solutions/articles/76000018079/?from=onsite-usp" target="_blank">
        <div class="lfloat icon_usp_deliveryfree cms-icon-scaler"></div>
        <div class="lfloat cms-usp-name txtUpper">è³¼ç©æ»¿899ååè²»å®é/è¶ååè²¨</div>
    </a>
    <a href="https://support-tw.zalora-ops.com/zh-TW/support/solutions/articles/76000018025/?from=onsite-usp" target="_blank">
        <div class="lfloat icon_usp_cod cms-icon-scaler"></div>
        <div class="lfloat cms-usp-name txtUpper">è²¨å°ä»æ¬¾</div>
    </a>
    <div class="cms-usp-visitfaqs lfloat">
        <div class="lfloat cms-usp-icon"><img src="https://static-tw.zacdn.com/cms/FAQicon.png"></div>
        <a class="lfloat cms-usp-visitfaqs" href="https://support-tw.zalora-ops.com/zh-TW/support/home" target="_blank"><div class="cms-usp-name" style="border-bottom: 1px solid #000; padding-top:4px">çè¦½å¸¸è¦åé¡</div></a>
    </div>
     <div class="cms-usp-visitfaqs lfloat">
        <div class="lfloat cms-usp-icon"><img src="https://static-tw.zacdn.com/cms/2020/uspbaricon/sustainability_icon3.png" width="24" height="24"></div>
        <a class="lfloat cms-usp-visitfaqs" href="https://www.zalora.com.tw/sustainability/?from=header" target="_blank"><div class="cms-usp-name" style="border-bottom: 1px solid #000; padding-top:4px"> å¯æçºç¼å± </div></a> <!-- SUSTAINABILITY -->
    </div>

    <div id="js-tooltip-interact" class="rfloat cms-app-badge txtUpper txtCenter cms-animate strong">
        <span> å¨ç¶²75æ + 10% ç¾éåé¥</span>
        <span><img src="https://static-tw.zacdn.com/cms/orignal_appicon.png" class="cms-app-icon"></span>
    </div>

    <div class="cms-arrow-up"></div>
    <div class="cms-app-badge-vc">
        <div class="txtUpper">
            å¨ç¶²75æ + 10% ç¾éåé¥
        </div>
        <div class="mts txtUpper">
            é¦æ¬¡æç¨ç¨å¼è¨å®<br>
            ä½¿ç¨åªæ ç¢¼: 1STAPP
        </div>
 <div class="small txtUpper mtm mbm">
           åªæ éé¡èç¾éåé¥æé«é NT$700,<br> åé©ç¨æ¼ ZALORA åºå®ç¢å. æ¯åæ°ç¨æ¶éå®æ¬¡ä½¿ç¨.
        </div>
        <div class="small txtUpper mtm mbm">
            é©ç¨æ¼iOSåANDROID
        </div>
        <span><a href="https://app.adjust.com/qudp0h?campaign=USPBar" target="_blank"><img src="https://static-tw.zacdn.com/cms/cms-usp-sprite-appstore.png"></a>   <a href="https://app.adjust.com/xsbfsd?campaign=USPBar" target="_blank"><img src="https://static-tw.zacdn.com/cms/cms-usp-sprite-googleplay.png"></a></span>
    </div>
</div>                
    <!-- BANNERS -->
        <script type="text/template" id="suggested-product-template">
        <li class="ssg-item js-search__product_suggest" id="ac-<%= index %>">
            <a title="<%= name %>" href="<%= url %>">
                <img src="<%= image %>" class="ssg-item__product-image" />
                <div class="ssg-item__product-info">
                    <div class="ssg-item__product-name"><%= name %></div>
                    <div class="ssg-item__product-prices">
                        <span class="ssg-item__product-price <% if (specialPrice) {%>ssg-item__product-price--old<% } %>">
                            <%= price %>
                        </span>
                        <% if (specialPrice) { %>
                        <span class="ssg-item__product-price ssg-item__product-price--special">
                            <%= nowLabel %> <%= specialPrice %>
                        </span>
                        <% } %>
                    </div>
                </div>
            </a>
        </li>
    </script>
    <script type="text/template" id="suggested-term-template">
        <li class="ssg-item <%= className %>" id="ac-<%= index %>">
            <a title="<%= title %>" href="<%= url %>" result-count="<%= typeof(resultCount)!== 'undefined' ?  resultCount : 0 %>">
                <%= keyword %>
            </a>
        </li>
    </script>
    <script type="text/template" id="suggested-brand-template">
        <li class="ssg-item <%= className %>" id="ac-<%= index %>">
            <a title="<%= title %>" href="<%= url %>" result-count="<%= resultCount %>">
                <%= keyword %>
            </a>
        </li>
    </script>
    <script type="text/template" id="suggested-autocomplete-template">
        <li class="ssg-item <%= className %>" id="ac-<%= index %>">
            <a title="<%= title %>" href="<%= url %>">
                <%= keyword %>
            </a>
        </li>
    </script>
</div>
         <div role="main" id="content">
                        
<script type="application/ld+json">
{
   "@context": "http://schema.org",
   "@type": "WebSite",
   "url": "https://www.zalora.com.tw/",
   "potentialAction": {
       "@type": "SearchAction",
       "target": "https://www.zalora.com.tw/catalog/?q={search_term_string}",
       "query-input": "required name=search_term_string"
    }
}
</script>

<div id="fallback-banners" class="l-pageWrapper"></div>


<!-- Removed by JP on 25 Jan 2021--> 
<!-- Unisex content temporary migrated to homepage_zh cms block due to RR migration-->
<!-- Revert back Revision to refer back on content--> <div class="b-seo">
    
<link rel="stylesheet" href="//static.zalora.com/css/onsite.css">

<link rel="stylesheet" href="https://zalora-mktg.s3-ap-southeast-1.amazonaws.com/bannerfeed/swiper.min.css">

<style>
    #rr-banner {
        display: none;
    }

    .cms-third-lfloat {
        float: left;
        width: 33%;
    }

    .cms-third-pl {
        padding-left: 0.5%;
    }

    .cms-hp-3brow {
        top: 0;
        width: 322px;
        height: 300px
    }

    .cms-hp-p13-bg {
        position: absolute;
        z-index: 3;
        width: 322px;
        height: 322px
    }

    .cms-hp-p13-bg-copy {
        position: absolute;
        z-index: 3;
        width: 322px;
        margin-top: 322px;
    }

    .cms-hp-p13 {
        position: absolute;
        z-index: 2;
        width: 322px;
        height: 270px
    }

    .cms-hp-nl-form {
        width: 566px;
        height: 300px;
        padding-left: 430px
    }

    .cms-underline-copy {
        display: inline-block;
        padding-bottom: 1px;
        border-bottom: 1px solid #000;
    }

    body {
        background: #fff !important
    }

    .cms-fallback {
        display: none;
    }

    .cms-section-heading {
        text-transform: none;
        font-size: 28px;
        padding-bottom: 0px;
        border-bottom: 0px;
    }

    .cms-hp-brandsize {
        height: 83px;
        width: 137px;
    }

    #cms-special-skinny a:hover {
        text-decoration: none !important
    }

    .cms-skinnyfull {
        background: url("https://static-hk.zacdn.com/cms/cw27/SKINNY_SLICED_996x25-womens.jpg");
        width: 996px;
        height: 25px;
    }

    .cms-text {
        color: #3D3D6F;
        padding-left: 275px;
        font-size: 14px;
        line-height: 1.8em;
    }

    #cms-special-skinny a:hover {
        text-decoration: none !important
    }

    .wrapper {
        position: relative;
    }

    < !--new css->html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%
    }

    img {
        max-width: 100%;
        height: auto
    }

    .block {
        display: block
    }

    .flex {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .px-4 {
        padding-left: 0.5rem;
        padding-right: 0.5rem
    }

    .l-pageWrapper {
        width: 100%;
    }

    .cms-col-3 {
        display: inline-block;
        width: 32%;
        padding: 0;
        margin-right: 1.6%;
    }

    .cms-col-3:nth-child(3) {
        margin-right: 0;
    }

    .cms-animate {
        transition: all .3s ease-out;
    }

    .img-gap {
        margin: 10px 0px 15px;
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>
<!-- Skinny Start -->
<div class="cms-sb-container">
    <div id="dy-dsk-skinny-full"></div>

    <div id="dy-dsk-skinny-half-left"></div>
    <div id="dy-dsk-skinny-half-right"></div>
</div>

<div class="cms-container" style="visibility:visible">
    <!-- 1111 TEASER -->
    <div class='cms-row'>
        <div class='cms-full'>
            <div class="swiper-container">
                <div class="swiper-wrapper">


                    <a class="swiper-slide" href="/all-products/">
                        <img src="https://static-tw.zacdn.com/cms/2021/cw32/LAUNCH/DEKSTOP-HERO_996X500.gif
">
                    </a>

                    <a class="swiper-slide" href="new-customer/?from=homepage">
                        <img src="https://static-tw.zacdn.com/cms/Jun21/CW25/NCZBFS/SET1/DESKTOP_Hero_TW.gif">
                    </a>


                    <!--RESERVE FOR ANY CODED HERO NEEDED - DON'T DELETE-->
                    <!-- <a class="swiper-slide" href="" >
<div class=""> 
<img src="https://static-my.zacdn.com/cms/2021/HOMEPAGE/REVAMP/TEST1.jpg">
<div class="cms-hero-text">
<h1 style="font-size:40px">ZALORA BIRTHDAY</h1>
<p>Share happiness with a huge cashback with zalora</p>
<button>Shop Now > </button>
</div>
</div>
</a> -->

                </div>
                <!-- Add Pagination -->
                <!-- <div class="swiper-pagination"></div> -->
                <!-- Add Arrows -->
                <!-- <div class="swiper-button-next"></div>
<div class="swiper-button-prev"></div> -->
            </div>
        </div>
    </div>
    <!-- 996 Hero from DY-->
    <div class='cms-row'>
        <div class='cms-full mtl'>
            <div class="cms-col-3">
                <a href="/women/?from=homepage" target="_blank">
                    <img src="https://static-tw.zacdn.com/cms/2020/CW42/HOMEPAGEREVAMP/NEW/Women_Homepage_370x430.jpg">
                </a>
            </div>
            <div class="cms-col-3">
                <a href="/men/?from=homepage" target="_blank">
                    <img src="https://static-tw.zacdn.com/cms/2020/CW42/HOMEPAGEREVAMP/NEW/Men_Homepage_370x430.jpg">
                </a>
            </div>
            <div class="cms-col-3">
                <a href="/kids/?from=homepage" target="_blank">
                    <img src="https://static-tw.zacdn.com/cms/2020/CW42/HOMEPAGEREVAMP/Kids_Homepage_370x430.jpg">
                </a>
            </div>
        </div>
    </div>
    <!-- <div class="cms-row">
<div class='cms-full mtl mbl'>
<a href="/chinese-new-year" target="_parent">
<img src="https://static-hk.zacdn.com/cms/2021/CW05/CNYSTATICPAGE/w/en/DESKTOP_Fat-Skinny.gif" ></a>
</div>
</div>-->


    <!--NCVC-->
    <!-- <div class="cms-row">
<div class='cms-full mtl'>
<a href="/new-customer/">
<img src="https://static-hk.zacdn.com/cms/2021/cw9/NCVC/en/DESKTOP_Fat_Skinny_HKEN.jpg"></a>
</div>
</div> -->

    <!-- GET THE LOOK-->
    <!-- <div class="cms-row">
<div class='cms-full mtl'>
<a href="/women/getthelook/" target="_parent">
<img src="https://static-tw.zacdn.com/cms/2020/CW39/GTL/W/DESKTOP_Fat_Skinny.gif" ></a>
</div>
</div> -->

    <div class='cms-row'>
        <div class='cms-full mtl'>
            <div class="swiper-container">
                <div class="swiper-wrapper">


                    <a class="swiper-slide" href="/all-products/?vc_applicable=true">
                        <img src="https://static-tw.zacdn.com/cms/2020/CW39/GTL/W/DESKTOP_Fat_Skinny.gif">
                    </a>

                    <a class="swiper-slide" href="/trend-inspiration//?from=homepage">
                        <img src="https://static-tw.zacdn.com/cms/2021/CW23/TRENDSINSPO/DESKTOP_Fat_Skinny.jpg">
                    </a>


                    <!--RESERVE FOR ANY CODED HERO NEEDED - DON'T DELETE-->
                    <!-- <a class="swiper-slide" href="" >
<div class=""> 
<img src="https://static-my.zacdn.com/cms/2021/HOMEPAGE/REVAMP/TEST1.jpg">
<div class="cms-hero-text">
<h1 style="font-size:40px">ZALORA BIRTHDAY</h1>
<p>Share happiness with a huge cashback with zalora</p>
<button>Shop Now > </button>
</div>
</div>
</a> -->

                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
                <!-- Add Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </div>



    <!---fat skinny end-->
    <!-- Brands we love -->
    <div class="cms-container2" style="visibility:visible">
        <div class="cms-row">
            <div class="cms-full mtxxl txtCenter">
                <div class="cms-section-heading">
                    <span>ç±éåç</span>
                </div>
                <div class="cms-spacer-25"></div>
                <div class="cms-spacer-25"></div>
            </div>
            <div id="dy-cms-featured-brands" style="width:996px;">
                <!-- <div class="cms-fallback"> -->
                <div class="cms-full txtCenter cms-top-brands">
                    <span>
                        <a href="/topshop-taiwan/">
                            <img src="http://zstatictw01-a.akamaihd.net/cms/cw4/TOPSHOP-JAN18-BRAND-LOGO.jpg">
                        </a>
                    </span>
                    <span>
                        <a href="/zalora/">
                            <img src="http://zstatictw01-a.akamaihd.net/cms/Evergage/orignal_r4_zalora.jpg">
                        </a>
                    </span>
                    <span>
                        <a href="/hollister/">
                            <img src="https://static-tw.zacdn.com/cms/brands/mobile_brands_Hollister.png" width="137">
                        </a>
                    </span>
                    <span>
                        <a href="/women/miss-selfridge/">
                            <img src="http://zstatictw01-a.akamaihd.net/cms/Evergage/orignal_r4_missselfridge.jpg">
                        </a>
                    </span>
                    <span>
                        <a href="/ivy-park/">
                            <img src="http://zstatictw01-a.akamaihd.net/cms/brands/ivyparklogo.jpg">
                        </a>
                    </span>
                    <span>
                        <a href="/dorothy-perkins-taiwan/">
                            <img src="http://zstatictw01-a.akamaihd.net/cms/Evergage/orignal_r4_dp.jpg">
                        </a>
                    </span>
                    <span>
                        <a href="/women/clothing/warehouse/">
                            <img src="http://zalora-media-live-hk.s3.amazonaws.com/cms/brandbanners/r4_warehouse.jpg">
                        </a>
                    </span>
                </div>
                <div class="cms-full mbxxl txtCenter cms-top-brands">
                    <span>
                        <a href="/superdry-taiwan/">
                            <img src="http://zstatictw01-a.akamaihd.net/cms/Evergage/r4_Superdry.jpg">
                        </a>
                    </span>
                    <span>
                        <a href="/adidas/">
                            <img src="https://zstaticmy01-a.akamaihd.net/cms/dy/ADIDAS-JULY17-BRAND-HOMEPAGE.png">
                        </a>
                    </span>
                    <span>
                        <a
                            href="/abercrombie-fitch/?getSKU=AB423AA63GNWMY--AB423AA48EMPMY--AB423AA83GNCMY--AB423AA24GLNMY--AB423AA58GOBMY--AB423AA30GLHMY">
                            <img src="https://static-sg.zacdn.com/cms/Fallback/mobile_brands_Aandf.gif" width="137">
                        </a>
                    </span>
                    <span>
                        <a href="/river-island-taiwan/">
                            <img src="http://zstatichk01-a.akamaihd.net/cms/orignal_r4_riverisland.jpg">
                        </a>
                    </span>
                    <span>
                        <a href="/topman-taiwan/">
                            <img src="http://zstatictw01-a.akamaihd.net/cms/cw4/TOPMAN-JAN18-BRAND-LOGO.jpg">
                        </a>
                    </span>
                    <span>
                        <a href="/esprit/">
                            <img src="http://zstatictw01-a.akamaihd.net/cms/Evergage/r4_esprit.jpg">
                        </a>
                    </span>
                    <span>
                        <a href="/aldo/">
                            <img src="http://zstatictw01-a.akamaihd.net/cms/Evergage/orignal_r4_aldo.jpg">
                        </a>
                    </span>
                </div>
                <!-- </div> -->
            </div>
        </div>

        <!-- NEW THIS WEEEK -->
        <div class="cms-row">
            <div class="cms-full txtCenter">
                <div class="cms-section-heading">
                    <span>ZALORA æ°åä¸å¸</span>
                </div>
                <div class="cms-spacer-25"></div>
                <div class="cms-spacer-25"></div>
            </div>
            <div class="cms-full mbxxl cms-top-brands">
                <!-- <div id="dy-cms-b1" class="lfloat" style="width:322px;"> -->
                <div class="lfloat" style="width:322px;">
                    <!-- <div class="cms-fallback"> -->
                    <div class="lfloat txtCenter">
                        <a href="/women/clothing/dresses/?from=unisexhomepage">
                            <img src="https://static-tw.zacdn.com/cms/DY/2020/Subcat_1_Dresses-min.jpg" width="322"
                                height="300">
                        </a>
                        <div class="cms-spacer-35"></div>
                        <div class="cms-hp-b13-headline"><span>æ´è£ ä½è³5æ</span></div>
                        <div class="cms-spacer-15"></div>
                        <p>æ§ææåªéï¼ä¸ä»¶å¼æ´è£çµ¦å¦³æ³è¦çé¢¨æ ¼</p>
                    </div>
                    <!-- </div> -->
                </div>
                <!-- <div id="dy-cms-b2" class="lfloat"> -->
                <div id="dy-cms-b2" class="lfloat">
                    <!-- <div class="cms-fallback"> -->
                    <div class="lfloat cms-spacer-3grid txtCenter">
                        <a href="/men/sports/all-products/?from=unisexhomepage">
                            <img src="https://static-tw.zacdn.com/cms/DY/2020/Subcat_2_Men_Sports-min.jpg" width="322"
                                height="300">
                        </a>
                        <div class="cms-spacer-35"></div>
                        <div class="cms-hp-b13-headline"><span>éåè£å ä½è³3æ</span></div>
                        <div class="cms-spacer-15"></div>
                        <p>æºåå°±ç·ï¼ç¡æç¼æ®è¡¨ç¾</p>
                    </div>
                    <!-- </div> -->
                </div>
                <!-- <div id="dy-cms-b3" class="lfloat" > -->
                <div id="dy-cms-b3" class="lfloat">
                    <!-- <div class="cms-fallback"> -->
                    <div class="lfloat cms-spacer-3grid txtCenter">
                        <a href="/all-products/?category_id=4--4195--4241--4232&from=unisexhomepage">
                            <img src="https://static-tw.zacdn.com/cms/DY/June20/cw7_unisex_SUBCAT_3-min.jpg" width="322"
                                height="300">
                        </a>
                        <div class="cms-spacer-35"></div>
                        <div class="cms-hp-b13-headline"><span>éå­ ä½è³5æ</span></div>
                        <div class="cms-spacer-15"></div>
                        <p>æå°ä¹è¡å§æ¼è¶³ä¸</p>
                    </div>
                    <!-- </div> -->
                </div>
            </div>
        </div>
        <!--megazine
<div class="cms-row">
<div class="cms-full txtCenter">
<a href="https://thread.zalora.com.hk/">
<img src="https://static-hk.zacdn.com/cms/2018/cw48/u_thread_EN_Desktop.jpg"/>
</a>
</div>
</div>-->
        <style type="text/css">
            .cms-promo {
                width: 996px;
                margin: 0 auto;
            }

            .cms-promo-deals {
                display: inline-block;
                width: 32.4%;
                padding-right: 1%;
            }

            .cms-promo-deals:nth-child(3) {
                padding-right: 0;
            }

            .cms-promo-deals img {
                display: block;
                width: 100%;
            }
        </style>
        <div class="cms-row">
            <div class="cms-full mtl txtCenter">
                <div class="cms-section-heading">æ¨å»£ååªæ </div>
            </div>
            <!-- Search for promotions & deals in DY -->
            <div class="cms-full mtl mbxxl">
                <div class="cms-promo">
                    <div class="cms-promo-deals">
                        <a href="/promotions/">
                            <img class="cms-animate"
                                src="https://static-tw.zacdn.com/cms/2020/CW22/PROMOANDDEALS/W/PROMOTION___DEALS_Banner.jpg">
                        </a>
                    </div>
                    <div class="cms-promo-deals">
                        <a href="/sell-with-us/">
                            <img class="cms-animate"
                                src="https://static-tw.zacdn.com/cms/2020/CW22/PROMOANDDEALS/W/SELL_WITH_US_Banner.jpg">
                        </a>
                    </div>
                    <div class="cms-promo-deals">
                        <a href="https://thread.zalora.com.tw/">
                            <img class="cms-animate"
                                src="https://static-tw.zacdn.com/cms/2020/CW22/PROMOANDDEALS/W/THREAD_MAGAZINE_Banner.jpg">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://zalora-mktg.s3-ap-southeast-1.amazonaws.com/bannerfeed/swiper.min.js"></script>

    <script>
        $(document).ready(function () {

            var swiper = new Swiper('.swiper-container', {
                spaceBetween: 30,
                speed: 600,
                centeredSlides: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

        });


        $(document).ready(function () {

            var swiper = new Swiper('.swiper-container2', {
                spaceBetween: 30,
                speed: 600,
                centeredSlides: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

        });


    </script>
    <script>
        $(document).ready(function () {
            $("#home-elm").hide();
        });
    </script>

    <style>
        .b-seo {
            text-align: center
        }

        .b-seo h1 {
            font-size: 16px;
            font-weight: 700
        }
    </style>
    <h1>ZALORA ç·ä¸è³¼ç©æ°æé»</h1>
    <p>æ­¡è¿èè¨å°ç£æå°ç¶²è³¼æ°æé»ï¼ZALORAä»¥é©äººçéåº¦å¨ç­æéåæç²äºæ´²æå¤§çç·ä¸æå°è³¼ç©å¹³èºä¹ä¸ï¼ææé¾ç¾ç¥ååçæ©«è·¨ç·å¥³æé£¾ãéå­ãé£¾åãéä»¶åç¾å¦ç­ååç³»åãç¡è«æ¯ç©©éç¥æ§çæ­£è£ãä¼éè¡é ­é¢¨ççä»è¤²ãå¤å­£çæ­¡çæ¯åºå°¼ãé®é½æåçå¤ªé½ç¼é¡ãç´³å£«æ·å¥³å°å±¬å¸½å­éæ¯å¬å¤©ç¦¦å¯çåå·¾åå¤å¥ï¼æ¨é½è½å¨ä¸ç«ä¸æ¬¡æ§éé½å¨ï¼ææææ°æhotçæµè¡åç´ ï¼è®æ¨æ¶åè¸å¥æ½®æµè¶¨å¢ï¼è·ZALORAèæ­¥ä¸èµ·å¼é äºæ´²æå°ä¸å¥ä¸å§ä¹ä½ã
    </p>
    <h2>å¨çäººæ°£åçç¡å¨ZALORAå°ç£</h2>
    <p>ä¸éèåæ æå°ç©¿æ¢­æ¼åå¤§åå ´æå³çµ±å¯¦é«åºï¼è¦è¦å°æ¾èæåç®çä»£è³¼è³¼è²·åå¤åçï¼ç¾å¨æ¨å¨å®¶é»æZALORAå°ç£ï¼ææçæçåéåæ¬ååçåçï¼å¦ EspritãRay Banï¼è±ååç
        SuperdryãTopshopãRiver Islandï¼éååç ReebokãNew BalanceãRip Curlã<a href="https://www.zalora.com.tw/adidas/"
            title="adidas">adidas</a>ï¼éæå°å¤©åæ³°åçµ²ææç Kedsãæµè¡å¤©åç¢§æçµ²èªåµç Ivy Park éææ´å¤æ´å¤ï¼éäºæ¨é½å¯ä»¥è¼é¬é¸è³¼ï¼èä¸ç¢åæ¯éå°ä½ éå£çå¦ï¼</p>
    <h2>ZALORAèºç£</h2>
    <p>çºäºè®æ¨æææ´è±å¯ãæ´å¤åçé¸æï¼ä¸ç®¡æ¯é å¨å°çå¦ä¸ç«¯çæå°åçï¼éæ¯æåèªå®¶ååï¼ZALORAå®ç¶²é½çºæ¨ä¸ä¸ç»ä¸ï¼è®æ¨è¶³ä¸åºæ¶å³å¯äº«åè³¼ç©çæ¨è¶£ï¼é¤äºåéç¥ååççæå°å®åï¼æåå¨ç¶²ä¸éèª ZALORA THREAD
        å°ç£ä¹ç¶å¸¸åäº«åç¨®ä¸»é¡æ§æç« ï¼æä¾ææ°çæ´»ãæå°ãå¥åº·ç¾é«ãå¨æ¨è³è¨åå¯¦ç¨çç©¿æ­æåç­ãå¸¶æ¨é²å¥ä¸å ´åä¸å ´çæå°é¥å®´æ¯æåçæ¦®å¹¸ï¼çµ¦æ¨äº«åç¨ä¸ç¡äºçè³¼ç©é«é©æ¯æåçå æã</p>
    <h2>åææªæçç·ä¸è³¼ç©é«é©</h2>
    <p>ç¶ç¶ï¼æåä¹ä¸å¿æå»éæ­¥å®åZALORAçå®¢æ¶æåãçºäºè®æ¨å®å¿é¸è³¼ï¼æåæä¾æ¶è²»èå¤ç¨®ä»æ¬¾æ¹å¼ï¼åæ¬äºä¿¡ç¨å¡ä»æ¬¾ãPayPalä»æ¬¾åè²¨å°ä»æ¬¾ç­é¸é ãè¥æ¨å°è¨è³¼ååæå°ä¸æ»¿æï¼å¨30å¤©å§å¯ä»¥åè²»è¾¦çéè²¨ãäºè§£é¡§å®¢è¿«ä¸åå¾æ³æ¶å°ååçå¿æï¼å¨ééæåä¸æåä¹ç¡åæ»¿è¶³ï¼åªéåå°ä¸åå·¥ä½å¤©å³å¯æååéå°æ¨çæä¸ãéåä¸åå­£ç¯ãç¹å®ç¯æ¥ååå¼ä¸»é¡ï¼ZALORAä¹æ¨åºç²¾é¸ååç®éãé©ååªæ æ´»åä»¥ååç¨®å¥½åº·ææ£è®æ¨éå°ç¡åéæ¯çå¾å¤§ï¼ç¾å¨ï¼æ¨åªéæ¶è²»æ»¿å°å¹£699åå³å¯åéè²»ï¼èä¸æ°å å¥ZALORAå°ç£çæå¡éå¯ä»¥äº«æé¦æ¬¡æ¶è²»åªæ çç¦å©ï¼
    </p>
    <h2>è¯çµ¡æå</h2>
    <p>æåè¡·å¿å¸ææ¨å¨æ­¤æåç¾å¥½çç¶²ä¸è³¼ç©ç¶é©ï¼è¥æ¨æ¾ä¸å°æ³è¦çååï¼æå°æåçååèä»æ¬¾/éé/éè²¨æåæçåãæ¨ä¹å¯å°ä»»ä½çæä¹èå³éè³www.zalora.com.tw/contactï¼æå¨æåçå®æ¹èæ¸çè¨è©¢åãZALORAå°ç£éå¸¸æ¨æçºæ¨æä¾æåï¼æ¨å°å®¢æå°ç·çä½¿ç¨ãææ´èæ¯æï¼æåé½ææ¿ä¸ç¡ï¼
    </p></div>
         </div>
    <footer id="footer" class="b-footer">
    <section class="b-footer__light ptxl pbxl">
        <div class="container-fluid">
                            <div class="flex-row">
                    <div class="b-footer__topBrands col-lg-6 col-sm-8">
                                                <div class="b-footer__title--secondary">ç±éåç</div>
                        <div id="b-footer__topBrands--wrapper" class="b-footer__topBrands--wrapper collapsed flex-row">
                                                            <ul class="col-lg-4 col-sm-2 b-footer__topBrands--list">
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/abercrombie-fitch/" title="Abercrombie & Fitch">
                                                Abercrombie & Fitch                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/adidas/" title="Adidas">
                                                Adidas                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/agnes-b/" title="agnÃ¨s b.">
                                                agnÃ¨s b.                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/aldo/" title="ALDO">
                                                ALDO                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/bally/" title="BALLY">
                                                BALLY                                            </a>
                                        </li>
                                                                    </ul>
                                                            <ul class="col-lg-4 col-sm-2 b-footer__topBrands--list">
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/birkenstock/" title="Birkenstock">
                                                Birkenstock                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/calvin-klein/" title="Calvin Klein">
                                                Calvin Klein                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/defacto/" title="DeFacto">
                                                DeFacto                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/desigual/" title="Desigual">
                                                Desigual                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/ferragamo/" title="Ferragamo">
                                                Ferragamo                                            </a>
                                        </li>
                                                                    </ul>
                                                            <ul class="col-lg-4 col-sm-2 b-footer__topBrands--list">
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/gap/" title="GAP">
                                                GAP                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/guess/" title="GUESS">
                                                GUESS                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/hollister/" title="Hollister">
                                                Hollister                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/longchamp/" title="LONGCHAMP">
                                                LONGCHAMP                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/mango/" title="Mango">
                                                Mango                                            </a>
                                        </li>
                                                                    </ul>
                                                            <ul class="col-lg-4 col-sm-2 b-footer__topBrands--list">
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/new-balance/" title="New Balance">
                                                New Balance                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/puma/" title="PUMA">
                                                PUMA                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/reebok/" title="Reebok">
                                                Reebok                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/sisley/" title="Sisley">
                                                Sisley                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/superdry/" title="SUPERDRY">
                                                SUPERDRY                                            </a>
                                        </li>
                                                                    </ul>
                                                            <ul class="col-lg-4 col-sm-2 b-footer__topBrands--list">
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/timberland/" title="Timberland">
                                                Timberland                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/tommy-hilfiger/" title="Tommy Hilfiger">
                                                Tommy Hilfiger                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/tory-burch/" title="TORY BURCH">
                                                TORY BURCH                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/trendyol/" title="Trendyol">
                                                Trendyol                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/twenty-eight-shoes/" title="Twenty Eight Shoes">
                                                Twenty Eight Shoes                                            </a>
                                        </li>
                                                                    </ul>
                                                            <ul class="col-lg-4 col-sm-2 b-footer__topBrands--list">
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/under-armour/" title="Under Armour">
                                                Under Armour                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/united-colors-of-benetton/" title="United Colors of Benetton">
                                                United Colors of Benetton                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/veja/" title="Veja">
                                                Veja                                            </a>
                                        </li>
                                                                            <li>
                                            <a class="b-footer__topSearches--item" href="/zalora-basics/" title="ZALORA BASICS">
                                                ZALORA BASICS                                            </a>
                                        </li>
                                                                    </ul>
                                                    </div><!--b-footer__topBrands--wrapper-->
                                            </div><!--b-footer__topBrands-->
                        <div class="b-footer__topSearches col col-sm-8">
        <div class="b-footer__title--secondary">äººæ°£æå°</div>
        <div id="b-footer__topSearches--wrapper" class="b-footer__topSearches--wrapper collapsed flex-row">
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/beauty/" title="ç¾å®¹ä¿é¤">
                                ç¾å®¹ä¿é¤                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/shoes/flats/" title="å¹³åºé">
                                å¹³åºé                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/grooming/" title="ç·å£«è­·ç">
                                ç·å£«è­·ç                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/clothing/" title="æé£¾">
                                æé£¾                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/accessories/" title="é£¾åéä»¶">
                                é£¾åéä»¶                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/sports/backpacks/" title="å¾èå">
                                å¾èå                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/accessories/bracelets-bangles/" title="æç°">
                                æç°                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/shoes/" title="éé¡">
                                éé¡                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/shoes/oxford-lace-up/" title="çæ´¥é">
                                çæ´¥é                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/grooming/fragrance/" title="é¦æ°´">
                                é¦æ°´                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/12-12-sale/" title="é 12 åªæ ">
                                é 12 åªæ                             </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/special-price/" title="åªæ ç¢å">
                                åªæ ç¢å                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/new-products/" title="ææ°ç¢å">
                                ææ°ç¢å                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/sports/" title="éåç³»å">
                                éåç³»å                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/bags/" title="åå">
                                åå                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/evening-dresses/" title="æå®´ç¦®æ">
                                æå®´ç¦®æ                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/bags/hand-bags/" title="ææå">
                                ææå                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/clothing/polos/" title="Poloè¡«">
                                Poloè¡«                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/bras/" title="éåå§è¡£">
                                éåå§è¡£                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/playsuits-jumpsuits/" title="é£èº«è¤²">
                                é£èº«è¤²                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/shoes/sports-shoes/" title="éåé">
                                éåé                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/jackets-coats/" title="é¢¨è¡£">
                                é¢¨è¡£                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/beauty/bb-cc-creams/" title="CCé">
                                CCé                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/work-dresses/" title="æ­£å¼æ´è£">
                                æ­£å¼æ´è£                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/beauty/lip-glosses/" title="åè">
                                åè                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/shoes/high-heels/" title="é«è·é">
                                é«è·é                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/wide-legged-pants/" title="å¯¬è¤²">
                                å¯¬è¤²                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/accessories/sunglasses/" title="å¤ªé½ç¼é¡">
                                å¤ªé½ç¼é¡                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/shoes/formal-shoes/" title="ç®é">
                                ç®é                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/bags/leather-bags/" title="ç®é©å">
                                ç®é©å                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/shoes/ankle-boots/" title="åè¸é´">
                                åè¸é´                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/accessories/watches/" title="æé¶">
                                æé¶                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/beauty/tools-brushes/" title="æ´èæ©">
                                æ´èæ©                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/sports/waistpouches/" title="è°å">
                                è°å                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/beauty/mascaras/" title="ç«æ¯è">
                                ç«æ¯è                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/accessories/belts/" title="ç®å¸¶">
                                ç®å¸¶                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/dresses/" title="é·æ´è£">
                                é·æ´è£                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/bags/purses/" title="é·å¤¾">
                                é·å¤¾                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/panties/" title="å§è¤²">
                                å§è¤²                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/clothing/shirts/" title="ç´ è²è¥¯è¡«">
                                ç´ è²è¥¯è¡«                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/beauty/brows/" title="çç­">
                                çç­                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/sleepwear/" title="ç¡è¡£">
                                ç¡è¡£                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/accessories/aviator-sunglasses/" title="é£è¡å¡å¤ªé½ç¼é¡">
                                é£è¡å¡å¤ªé½ç¼é¡                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/leather-jackets/" title="ç®é©å¤å¥">
                                ç®é©å¤å¥                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/beauty/makeup-bags-cases/" title="åå¦å">
                                åå¦å                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/skinny-jeans/" title="ç·èº«çä»è¤²">
                                ç·èº«çä»è¤²                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/bags/tote-bags/" title="æç¹å">
                                æç¹å                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/swimwear-beachwear/" title="æ³³è¡£">
                                æ³³è¡£                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/swimsuits/" title="æ³³è£">
                                æ³³è£                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/sports/training-bottoms/" title="æ¢è·è¤²">
                                æ¢è·è¤²                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/clothing/suit-jacket/" title="è¥¿è£å¤å¥">
                                è¥¿è£å¤å¥                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/bags/duffle-bags/" title="å¸å¸å">
                                å¸å¸å                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/bags/backpacks/" title="èå">
                                èå                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/shoes/sandals/" title="æ¶¼é">
                                æ¶¼é                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/men/bags/messenger-bags/" title="éµå·®å">
                                éµå·®å                            </a>
                        </li>
                                    </ul>
                            <ul class="col-lg-4 col-sm-2 b-footer__topSearches--list">
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/midi-skirts/" title="åèè£">
                                åèè£                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/bikinis/" title="æ¯åºå°¼">
                                æ¯åºå°¼                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/clothing/down-jackets/" title="ç¾½çµ¨å¤å¥">
                                ç¾½çµ¨å¤å¥                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/accessories/eyewear/" title="ç¼é¡">
                                ç¼é¡                            </a>
                        </li>
                                            <li>
                            <a class="b-footer__topSearches--item" href="/women/accessories/rings/" title="ææ">
                                ææ                            </a>
                        </li>
                                    </ul>
                    </div><!--b-footer__topSearches--wrapper-->
                    <a class="b-collapse__toggle" data-toggle="collapse" data-target="#b-footer__topSearches--wrapper">
                å±é            </a>
            </div><!--b-footer__topSearches-->
                </div>
                        <hr class="col-lg-12 col-sm-8"/>
            <div class="flex-row">
                <div class="col-lg-2 col-sm-4 order-sm-first">
                    <div class="flex-row"><!--CMS-->
                        <div class="b-footer__gfg col-lg-12 col-sm-4">
                            <div class="b-footer__title">GFGæå¡</div>
<svg class="icon_gfg"></svg>                        </div>
                        <div class="b-footer__bap col-lg-12 col-sm-4">
                                                    </div>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-2">
                    <div class="b-footer__title">æå¨å°å</div>
                    <div class="flex-row justify-content-start">
                        <div class="col col-auto">
                            <a title="zalora.sg" href="https://www.zalora.sg">
                                <svg class="icon_sgflag b-footer__squareIcon"></svg>
                            </a>
                            <a title="zalora.com.my" href="https://www.zalora.com.my">
                                <svg class="icon_myflag b-footer__squareIcon"></svg>
                            </a>
                            <a title="zalora.co.id" href="https://www.zalora.co.id">
                                <svg class="icon_idflag b-footer__squareIcon"></svg>
                            </a>
                            <a title="zalora.com.tw" href="https://www.zalora.com.tw">
                                <svg class="icon_twflag b-footer__squareIcon"></svg>
                            </a>
                        </div>
                        <div class="col col-auto">
                            <a title="zalora.com.ph" href="https://www.zalora.com.ph">
                                <svg class="icon_phflag b-footer__squareIcon"></svg>
                            </a>
                            <a title="zalora.com.hk" href="https://www.zalora.com.hk">
                                <svg class="icon_hkflag b-footer__squareIcon"></svg>
                            </a>
                            <a title="zalora.com.hk" href="https://www.zalora.com.hk">
                                <svg class="icon_mcflag b-footer__squareIcon"></svg>
                            </a>
                        </div>
                    </div>

                </div>
                <div class="col-lg-2 col-sm-2">
                    <div class="b-footer__title">ä»æ¬¾æ¹æ³</div>
<div class="flex-row justify-content-start">
    <div class="col col-auto">
        <svg class="icon_master_card b-footer__squareIcon"></svg>
        <svg class="icon_american_express b-footer__squareIcon"></svg>
        <svg class="icon_jcb b-footer__squareIcon"></svg>
        <!-- <svg class="icon_cup b-footer__squareIcon"></svg> -->
        <svg class="icon_google_pay b-footer__squareIcon"></svg>
    </div>
    <div class="col col-auto">
        <svg class="icon_visa b-footer__squareIcon"></svg>
        <svg class="icon_paypal b-footer__squareIcon"></svg>
        <svg class="icon_cod b-footer__squareIcon"></svg>
        <!-- <svg class="icon_google_pay b-footer__squareIcon"></svg> -->
    </div>
</div>                </div>
                <div class="col-lg-2 col-sm-2">
                    <div class="b-footer__title">éè²¨æåä¾æå</div>
<div class="flex-row justify-content-start">
    <div class="col col-auto">
        <svg class="icon_SF_Express b-footer__squareIcon"></svg>
        <img src="https://static-tw.zacdn.com/cms/2019/ups-logo-min.png" class="icon_ups b-footer__squareIcon" width="26px;">
    </div>
    <div class="col col-auto">
        <svg class="icon_Kerry_Express b-footer__squareIcon"></svg>
    </div>
</div>

<style>
.js-seoText h1,.js-seoText h2{font-size:12px;text-transform:uppercase;font-weight:700;margin-top:40px}.js-seoText p{font-size:12px;text-align:justify}

.icon_ups {
    display: block;
    width: 26px !important;
    height: auto !important;
    margin: 0 auto;
</style>                </div>
                <div class="col-lg-2 col-sm-2">
                                    </div>
                <div class="col-lg-2 col-sm-4 order-sm-first">
                    <div class="b-footer__title">å®å¨ç³»çµ±</div><!--CMS-->
                    <div class="flex-row">
                        <div class="col-lg-12 col-sm-6">
                            <ul class="b-footer__securityList">
                                <li>PCI Security Standard</li>
<li>Cardholder Protection</li>
<li>Encrypted Network</li>                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="b-footer__dark ptxl pbxl">
        <div class="container-fluid">
            <div class="flex-row">
                <div class="col-lg-4 col-sm-8">
                    <svg class="zalora_logo"></svg>
                    <div class="mrxl">ZALORA ä½æ¼æ±åäºæå¤§çæå°æ½®æµç¶²è³¼å¹³èºï¼ç®ååå¥å¨äºæ´²ä¸åå°åï¼å¦å°ç£ãæ°å å¡ãå°å°¼ãé¦¬ä¾è¥¿äºãæ±¶è±ãè²å¾è³åé¦æ¸¯ç­é½æåèªçç©©å®å¸å ´ï¼åè³ªèæåçå æå¤§åå®¢æ¶ææ´ï¼å¤æ¨£åç¢åé¸æè®ç·ç·å¥³å¥³é½è½éå¿éãé¤äºæ¯ææ¬å°åçä¹å¤ï¼åéåçä¹ææç¡æï¼è®ä½ åé¨æé¨å°é½è½æ¾å°åæçè·¨åç¢åãå¨å¹´è·èZALORA å°ç£ææ°æå°é¢¨èµ°å§ï¼ææ½®åè²»è³è¨ç¡å¨æåçå®æ¹ç¶²ç«ï¼<span class="strong">è·è ZALORA, ä½ ææ¡ææ!</span></div>                    <div class="flex-row">
                                            </div>
                </div>
                <div class="col-lg-2 col-sm-4">
                    <div class="b-footer__title--inverted">å®¢æ¶æå</div>
<div class="flex-row">
    <ul class="col-sm-4">
      <li><a href="https://support-tw.zalora-ops.com/zh-TW/support/home">å¸¸è¦åé¡</a></li>
      <li><a href="https://support-tw.zalora-ops.com/zh-TW/support/solutions/76000002680">å°ºå¯¸æå</a></li>
    </ul>
    <ul class="col-sm-4">
      <li><a href="https://www.zalora.com.tw/contact/">è¯çµ¡æå</a></li>
      <li><a href="https://www.zalora.com.tw/product-index/">ç¢åç®é</a></li>
      <li><a href="https://support-tw.zalora-ops.com/zh-TW/support/solutions/articles/76000018086">è¿½è¹¤è¨å®</a></li>
    </ul>
</div>                </div>
                <div class="col-lg-2 col-sm-4">
                    <div class="b-footer__title--inverted">éæ¼ZALORA</div>
<div class="flex-row">
    <ul class="col-sm-4">
      <li><a href="https://www.zalora.com.tw/promotions/">åªæ æ´»å</a></li>
      <li><a href="https://careers.zalora.com">äººææå</a></li>
      <li><a href="https://www.zalora.com.tw/partner/">ä¼ä¼´åä½è¨ç«</a></li>
      <li><a href="https://www.zalora.com.tw/influencer/">ç¤¾ç¾¤æè¦é è¢è¨å</a></li>
      <li><a href="https://www.zalora.com.tw/sell-with-us/">æçºè³£å®¶</a></li>
      <li><a href="https://ads.zalora.com/">åçæ¨å»£è¨å</a></li>
    </ul>
    <ul class="col-sm-4">
      <li><a href="https://www.zalora.com.tw/terms-of-use/">æåæ¢æ¬¾</a></li>
      <li><a href="https://www.zalora.com.tw/pdp/">é±ç§è²æ</a></li>
      <li><a href="https://www.zalora.com.tw/responsible-disclosure/">Responsible Disclosure</a></li>
      <li><a href="https://thread.zalora.com.tw/">ZALORAç¤¾ç¾¤</a></li>
    </ul>
</div>                </div>
                <div class="col-lg-4">
                    <div class="newsletter__wrapper">
    <div class="b-footer__title--inverted">
        ZALORAæ°æå¡    </div>
    <div class="newsletter__content">
        <div class="newsletter__voucher">
                è¨é±é»å­å ±å³äº«<span class="text-highlight">NT$ 260 ææ£ç¦®å¸</span>ï¼ä¸¦å¾ç¥æµè¡è¶¨å¢åæ°åä¸å¸çææ°è³è¨ï¼ï¼        </div>
        <div class="collection">
            <form class="js-footer__newsletterSignUp" action="https://www.zalora.com.tw/newsletter/validate/"
      method="post" position="nl_footer_notification">
    <label class="mtl mbs">æ¨çé»éµ</label>
    <input type="hidden" value="dea1d49d6ef44fe4faee78cd8407aa9b3a056f57" name="YII_CSRF_TOKEN"/>
    <div class="flex-row">
        <div class="col-lg-12 col-sm-4">
            <input class="b-footer__newsletterInput js-disableEnterKeyForTextBox js-emailInputText " placeholder="someone@example.com" required="required" name="newsletter[email]" data-errormessage-value-missing="è«å¡«å¯«æ­¤æ¬" id="newsletter_email" type="email" />            <div class="js-emailSuggestion emailSuggestion hide">
    æ¨æ¯å¦æ    <p class="js-emailSuggestion-accept suggestedDomain"></p>?
</div>
            <div id="nl_footer_notification" class="b-footer__newsletterInfo">
            </div>
        </div>
        <div class="col-lg-12 col-sm-4">
            <div class="flex-row justify-content-between">
                <div class="col mrl">
                    <button class="btn btn-outline-light btn--fluid" type="submit" name="newsletter[gender]"
                            value="female">
                        å¥³è£                    </button>
                </div>
                <div class="col">
                    <button class="btn btn-outline-light btn--fluid" type="submit" name="newsletter[gender]"
                            value="male">
                        ç·è£                    </button>
                </div>
            </div>
        </div>
    </div>
</form>
        </div>
    </div>
</div>
                </div>
            </div>
            <div class="flex-row">
                <div class="col-lg-5">
                    <div class="b-footer__title--inverted">èæåè¯ç¹«</div>
<div class="w-100"></div>
<a href="https://www.zalora.com.tw/mobile-apps/"><svg class="icon_mobile_app"></svg></a>
<a href="https://www.facebook.com/ZaloraTaiwan"><svg class="icon_fb"></svg></a>
<a href="https://www.instagram.com/zalorazh/"><svg class="icon_ins"></svg></a>
<a href="https://www.youtube.com/user/zalora"><svg class="icon_youtube-light"></svg></a>
<a href="https://www.linkedin.com/company/zalora-sea/"><svg class="icon_linkedin"></svg></a>
<a href="https://twitter.com/ZALORA"><svg class="icon_twitter-light"></svg></a>                </div>
                <div class="offset-lg-3 col-lg-4">
                    <div class="b-footer__title--inverted">é¦¬ä¸ä¸è¼ ZALORA APP</div>
<a href="https://www.zalora.com.tw/mobile-apps/">
    <img style="width:100%; vertical-align:top;" src="https://static-tw.zacdn.com/cms/2020/footer/Download_zalora_app.png
">
</a>                </div>
            </div>
            <div class="b-footer__bar">
                <div class="flex-row no-gutters justify-content-lg-between justify-content-sm-start">
<div class="d-sm-none col-lg-6">
    å¦æä»»ä½çå, æåå¾æ¨æçºä½ æä¾åå©ã
</div>
<div class="col-lg-6 col-sm-auto txtRight order-sm-1">
  <a href="/about">éæ¼</a>Â Â |Â Â 
  <a href="/pdp">é±ç§</a>Â Â |Â Â 
  <a href="https://www.zalora.com.tw/terms-of-use/">æåæ¢æ¬¾</a>
</div>
<div class="col-lg-6 col-sm-auto order-sm-0">
  <a href="/contact">è¯çµ¡</a>Â Â |Â Â 
  <a href="https://support-tw.zalora-ops.com/zh-TW/support/home">å¸¸è¦åé¡</a>
  <span class="d-lg-none">Â Â |Â Â </span>
</div>
<div class="col-lg-auto col-sm-8 order-sm-2">Â© 2012, 2021 Zalora</div>
</div>
<script>
(function () {
  if (['search', 'cat', 'brand'].indexOf(dataLayer[0].Page_Type) < 0) {
    return;
  }

  const REMOVE_LIST = [
    '_dy_cs_cookie_items',
    '_dy_cs_image_url',
    '_dy_csc_ses',
    '_dy_lu_ses',
    '_dy_soct',
    '_dyjsession',
    '_pxb',
    'boxx_token_id',
    'bxSesC',
    'cto_bundle',
    'dy_fs_page',
    'dy_timer1',
    'fbm_546514708728143',
    'fbsr_546514708728143',
    'fs_uid',
    'id5id.1st',
    'id5id.1st_123_nb',
    'id5id.1st_last',
    'mako_fpc_id',
    'new-cust-kids',
    'new-cust-men',
    'new-cust-women',
    'zuid_md5_persist',
    'optimizelyEndUserId',
    'viz_sent',
    'ak_bmsc',
    '2943.vst',
    'bm_sv',
    '_vz',
    'RT',
    'cto_bundle',
    'mf_f60a37ec-bf1e-4ac3-80ec-727946420a4b',
  ];
  const basicHost = window.location.host;
  const DOMAINS = [basicHost, basicHost.replace('www', '')];
  const PATHNAME = window.location.pathname;

  function eraseCookieFromPath(name, domain) {
    // This function will attempt to remove a cookie from all paths.
    const pathBits = PATHNAME.split('/');
    let pathCurrent = ' path=';

    // do a simple pathless delete first.

    document.cookie =
      name + '=; Domain=' + domain + '; expires=Thu, 01-Jan-1970 00:00:01 GMT;';
    for (var i = 0; i < pathBits.length; i++) {
      pathCurrent += (pathCurrent.substr(-1) != '/' ? '/' : '') + pathBits[i];
      document.cookie =
        name +
        '=; Domain=' +
        domain +
        '; expires=Thu, 01-Jan-1970 00:00:01 GMT;' +
        pathCurrent +
        ';';
      document.cookie =
        name +
        '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' +
        pathCurrent +
        ';'
    }
  }

  document.cookie = 'id5id.1st=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/;'; 
  REMOVE_LIST.forEach(function (cookieName) {
    if (document.cookie.indexOf(cookieName) < 0) {
      return;
    }

    try {
      DOMAINS.forEach(function (domain) {
        eraseCookieFromPath(cookieName, domain);
      });
    } catch (e) {
      Raven.captureException(e);
    }
  });
})();
</script>            </div>
        </div>
        
    </section>
</footer>
<div id="boxTrackOrder" class="tracking-form modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="tracking-form__header modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    <i class="icon_close-medium-light"></i>
                </button>
                <div class="tracking-form__header--title">è¿½è¹¤æ¨çè¨å®</div>
            </div>
            <div class="tracking-form__body modal-body">
                <div class="tracking-form__body--error">
        <div id="orderAjaxMessage" class="box mts msgBox nl_inline_notification pas s-error" >
            </div>
</div>
<form class="orderTrackerForm" action="/customer/ordertracking/validate/" method="post" >
    <input type="hidden" value="dea1d49d6ef44fe4faee78cd8407aa9b3a056f57" name="YII_CSRF_TOKEN" />
    <div class="ui-formRow mtm mbn">
        <div class="tracking-form__body--title">è¨å®èç¢¼</div>
        <div>
            <input class="ui-inputText mbm bottom-newsletter-input" placeholder="è¨å®èç¢¼" required="required" name="trackOrder[orderId]" data-errormessage-value-missing="è«å¡«å¯«æ­¤æ¬" value="" id="trackOrder_orderId" type="text" />        </div>
    </div>

    <div class="mtm mbs tracking-form__body--submit">
        <button id="buttonViewOrderStatus" type="submit" class="btn btn--fluid">æ¥çè¨å®çæ³</button>
    </div>
</form>            </div>
        </div>
    </div>
</div><div id="boxResultTrackOrder" class="modal"></div>
</div>

<script crossorigin="anonymous" src="https://static-tw.zacdn.com/js/release/alice-twfas-core-a647d022a67bf0330699.js" type="text/javascript"></script><script crossorigin="anonymous" src="https://static-tw.zacdn.com/js/release/alice-twfas-home-85ae35540620722dd818.js" type="text/javascript"></script><script>
            if (typeof homepage !== 'undefined' && typeof homepage.initialize !== 'undefined') {
                $(function() {
                    homepage.initialize(window.store);
                });
            }
            </script><script type="text/javascript"> $(document).ready(function() { 
$(document).on('readystatechange', function () { Zalora.Header.HeaderController.init({"language":"zh","countryIso":"TW","currentPageType":"mainshop","firstName":null,"lastName":null,"walletBalance":null,"wishlistCount":null,"cartCount":0,"currentCatalog":null,"currentSegment":null,"cmsLogo":{"flag":false}}); })


    if (typeof(Zalora) !== 'undefined' && typeof(Zalora.AbandonedFormTracking) !== 'undefined') {
        Zalora.AbandonedFormTracking.initialize();
    }
 });</script><script type="text/javascript">
            var expiration = new Date();
            var minutes = 30;
            expiration.setTime(expiration.getTime() + 1800000);

            document.cookie = 'sessionCount' + '=' + '1' +
             '; path=/; secure; domain=' + '.zalora.com.tw';
            document.cookie = 'pageCount' + '=' + '1' +
             '; expires=' + expiration.toUTCString() +'; path=/; secure; domain=' + '.zalora.com.tw';
        </script>
<script type="text/javascript">
(function (window) {
    var Zalora = window.Zalora || {};
    Zalora.jsStore = Zalora.jsStore || {};
    Zalora.jsStore["country_iso"] = "TW";
    Zalora.jsStore["language"] = "zh";
    Zalora.jsStore["pixel_beacon_path"] = "";
    Zalora.jsStore["pixel_ns"] = "";
    Zalora.jsStore["costa_spell_check"] = 0;
    Zalora.jsStore["costa_spell_check_with_suggestion"] = 0;
    Zalora.jsStore["zalora_now_link"] = 0;
    Zalora.jsStore["catalogtype"] = "Main";
    Zalora.jsStore["currency_format"] = "<span>NT$ <%=meta.price%></span>";
    Zalora.jsStore["search_suggestion_label"] = "å»ºè­°æå°";
    Zalora.jsStore["product_suggestion_label"] = "å»ºè­°åå";
    Zalora.jsStore["recent_search_title_label"] = "æè¿æå°";
    Zalora.jsStore["recent_search_clear_label"] = "æ¸é¤å¨é¨";
    Zalora.jsStore["now_label"] = "ç¾å®";
    Zalora.jsStore["in_label"] = "-";
    Zalora.jsStore["shoptype"] = 1;
    Zalora.jsStore["use_search_throttle"] = 0;
    Zalora.jsStore["gender"] = null;
    Zalora.jsStore["get_the_look_edit_on_pdv"] = 0;
    Zalora.jsStore["costa_autocomplete"] = 1;
    Zalora.jsStore["enableTextPromotion"] = 1;
    Zalora.jsStore["isWebMobileIPay88BankEnabled"] = 0;
    Zalora.jsStore["isDesktopEnableRRAutocomplete"] = 0;
    Zalora.jsStore["sessionId"] = "Bhj_wAaAk160YiiMJn5Mtf8WJzykrYHg";
    Zalora.jsStore["userId"] = "";
    Zalora.jsStore["isDesktopEnableV2GenericSearch"] = 1;
    Zalora.jsStore["search_config"] = {"config":{"search_num_of_spellcheck_item":"3","search_num_of_brand_item":"3","search_num_of_category_item":"3"},"label":{"searchOnZalora":"\u5728ZALORA\u4e0a\u641c\u5c0b","cancel":"\u53d6\u6d88","brands":"\u54c1\u724c","categories":"\u985e\u5225","didYouMean":"\u60a8\u662f\u5426\u6307","searchSuggestions":"\u5efa\u8b70\u641c\u7d22","in":"\u4e2d\u7684"}};
    Zalora.jsStore["customer_email"] = "";
    Zalora.jsStore["customer_id"] = "";
    Zalora.jsStore["customer_firstname"] = "";
    Zalora.jsStore["customer_lastname"] = "";
    Zalora.jsStore["cdn_url"] = "https://static-tw.zacdn.com";
    Zalora.jsStore["platform_name"] = "desktop";
    Zalora.jsStore["isSearchShownByDefault"] = 0;
    Zalora.jsStore["call_zrs_from_client_side"] = 1;
    Zalora.jsStore["zrs_url"] = {"similar_items":"https:\/\/zrs.zalora.net\/similar-items?style=json_slide&limit=30&country=tw&rec=similar_items&lang=zh","just_for_you":"https:\/\/zrs.zalora.net\/youmayalsolike?style=json_slide&limit=30&country=tw&rec=justforyou&lang=zh"};
    Zalora.jsStore["is_double_currency"] = 0;
    Zalora.jsStore["timezone_offset"] = "+08";
    Zalora.jsStore["cms_fallback_banners"] = "";
    Zalora.jsStore["just_arrived"] = "ç²¾é¸ç¦é»";
    Zalora.jsStore["trending_now"] = "æ¬é±ç¦é»";
    Zalora.jsStore["featured_brands"] = "ç²¾é¸åç";
    Zalora.jsStore["shop_by_categories"] = "æé¡å¥é¸è³¼";
    Zalora.jsStore["top_categories"] = "ç±éé¡å¥";
    Zalora.jsStore["top_searches_this_week"] = "Top Searches This Week";
    Zalora.jsStore["hour_abbreviation"] = "å°æ";
    Zalora.jsStore["minute_abbreviation"] = "åé";
    Zalora.jsStore["second_abbreviation"] = "ç§";
    Zalora.jsStore["from_price_format"] = "å¾ %s èµ·";
    Zalora.jsStore["now_price_format"] = "ç¾å® %s";
    Zalora.jsStore["zrs_recommend_enabled"] = 0;
    Zalora.jsStore["isSegmentpage"] = 1;
    Zalora.jsStore["isIndexPage"] = 1;
    Zalora.jsStore["raven_script_url"] = "https://cdn.ravenjs.com/3.4.0/raven.min.js";
    Zalora.jsStore["sentry_hub_url"] = "https://e95419dc1dea4dcebe39e36d8c4efba9@sentry.prod.zalora.io/10";
    Zalora.jsStore["rr_engage_source_url"] = "//cdn.richrelevance.com/dashboard/applications/clientjs-dev/client.js";
    Zalora.jsStore["wishlist_count_message"] = "åææ¸å®å§æ %s ä»¶è²¨å";
    Zalora.jsStore["wishlist_empty_message"] = "æ¨çåææ¸å®æ«ç¡ä»»ä½åå";
    Zalora.jsStore["nl_subscribe_discount_amount"] = 260;
    Zalora.jsStore["popupSubscription"] = {"showSubscription":false,"delay":0};
    Zalora.jsStore["newsletter_link"] = "<a class=\'closePopup\'>Click here</a> to continue shopping.";
    Zalora.jsStore["show_more"] = "å±é";
    Zalora.jsStore["show_less"] = "æ¶èµ·";
    Zalora.jsStore["env"] = "live";
    window.Zalora = Zalora;
    window.store = Zalora.jsStore;
})(window);</script>

<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","licenseKey":"dde1018d87","applicationID":"951751434","transactionName":"M1VQYEYFXxFVAEMNXAofcUFHEF4PGwpZAFYcH1taUAFJ","queueTime":0,"applicationTime":402,"atts":"HxJHFg4fTE4WAhVeSBlN","errorBeacon":"bam-cell.nr-data.net","agent":""}</script><noscript><img src="https://www.zalora.com.tw/akam/11/pixel_18055eab?a=dD0xZjFiZTBhOTE5ZmM4NjM4YTRiMmIwMDgwMmUzMzQyNjkyYzUxNjJkJmpzPW9mZg==" style="visibility: hidden; position: absolute; left: -999px; top: -999px;" /></noscript><script type="text/javascript"  src="/LcDNXK/aI-/sOf/J798mw/NumuQkGJfO/GgwNV3ll/dW9lQ/h5aXhQ"></script></body>
</html>


