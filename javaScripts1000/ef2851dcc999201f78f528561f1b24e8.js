



<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class=""> <!--<![endif]-->
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"c73cf706bc",applicationID:"383589324"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(){}function i(t,e,n){return function(){return o(t,[u.now()].concat(f(arguments)),e?null:this,n),e?void 0:this}}var o=t("handle"),a=t(8),f=t(9),c=t("ee").get("tracer"),u=t("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(t,e){s[e]=i(p+e,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),e.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(l+"tracer",[u.now(),t,n],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(l+e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),o("err",[t,u.now(),!1,e])}},{}],2:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],3:[function(t,e,n){function r(){return f.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,f=t(10);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],4:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],5:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?d("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&d("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||d("cls",[t])})}function a(t){if(t instanceof m&&!g){var e=Math.round(t.timeStamp),n={type:t.type};e<=p.now()?n.fid=p.now()-e:e>p.offset&&e<=Date.now()?(e-=p.offset,n.fid=p.now()-e):e=p.now(),g=!0,d("timing",["fi",e,n])}}function f(t){"hidden"===t&&d("pageHide",[p.now()])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var c,u,s,d=t("handle"),p=t("loader"),l=t(7),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){c=new PerformanceObserver(r);try{c.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,h=["click","keydown","mousedown","pointerdown","touchstart"];h.forEach(function(t){document.addEventListener(t,a,!1)})}l(f)}},{}],6:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}e.exports={agent:i,version:o,match:r}},{}],7:[function(t,e,n){function r(t){function e(){t(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,e,!1)}e.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],8:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],9:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],10:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?u(t,c,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){t&&a&&t(n,r,i);for(var f=e(i),c=v(n),u=c.length,s=0;s<u;s++)c[s].apply(f,r);var p=d[w[n]];return p&&p.push([b,n,r,f]),f}}function o(t,e){y[t]=v(t).concat(e)}function m(t,e){var n=y[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function v(t){return y[t]||[]}function g(t){return p[t]=p[t]||i(n)}function h(t,e){l.aborted||s(t,function(t,n){e=e||"feature",w[n]=e,e in d||(d[e]=[])})}var y={},w={},b={on:o,addEventListener:o,removeEventListener:m,emit:n,get:g,listeners:v,context:e,buffer:h,abort:f,aborted:!1};return b}function o(t){return u(t,c,a)}function a(){return new r}function f(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var c="nr@context",u=t("gos"),s=t(8),d={},p={},l=e.exports=i();e.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!R++){var t=M.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();c(E,function(e,n){t[e]||(t[e]=n)});var n=a();f("mark",["onload",n+M.offset],null,"api"),f("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=l+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===v.readyState&&o()}function o(){f("mark",["domContent",a()+M.offset],null,"api")}var a=t(3),f=t("handle"),c=t(8),u=t("ee"),s=t(6),d=t(4),p=t(2),l=p.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,g="addEventListener",h="attachEvent",y=m.XMLHttpRequest,w=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var x=""+location,E={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1210.min.js"},O=y&&w&&w[g]&&!/CriOS/.test(navigator.userAgent),M=e.exports={offset:a.getLastTimestamp(),now:a,origin:x,features:{},xhrWrappable:O,userAgent:s,disabled:b};if(!b){t(1),t(5),v[g]?(v[g]("DOMContentLoaded",o,!1),m[g]("load",r,!1)):(v[h]("onreadystatechange",i),m[h]("onload",r)),f("mark",["firstbyte",a.getLastTimestamp()],null,"api");var R=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,c],s],t)}f(n+"start",[o,a,c],s,u);try{return p=e.apply(a,o)}catch(m){throw f(n+"err",[o,a,m],s,u),m}finally{f(n+"end",[o,a,p],s,u)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var f,c,u,s="-"===r.charAt(0);for(u=0;u<e.length;u++)c=e[u],f=t[c],a(f)||(t[c]=n(f,s?c+r:r,i,c,o))}function f(n,r,o,a){if(!m||e){var f=m;m=!0;try{t.emit(n,r,o,e,a)}catch(c){i([c,n,r,o],t)}m=f}}return t||(t=s),n.inPlace=r,n.flag=p,n}function i(t,e){e||(e=s);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function f(t,e){var n=e(t);return n[p]=t,o(t,n,s),n}function c(t,e,n){var r=t[e];t[e]=f(r,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var s=t("ee"),d=t(9),p="nr@original",l=Object.prototype.hasOwnProperty,m=!1;e.exports=r,e.exports.wrapFunction=f,e.exports.wrapInPlace=c,e.exports.argsToArray=u},{}]},{},["loader"]);</script><script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","errorBeacon":"bam-cell.nr-data.net","licenseKey":"c73cf706bc","applicationID":"383589324","transactionName":"blYGbUpQDxZYUU1eC1ccIkxWUhUMVlwWQAVeRwVQVB8CCktXF0ENXEQXA0tUExNc","queueTime":0,"applicationTime":938,"agent":""}</script>

        <title>Philadelphia local news, sports, business, entertainment, restaurants, food &amp; drink | PhillyVoice</title>

        <meta name="keywords" content="philadelphia, news, philly, philadelphia, news, sports, culture, health, events, things to do" />
        <meta name="description" content="Your source for Philadelphia and South Jerseyâs breaking news, sports, entertainment, business, things to do, events, culture, and more from PhillyVoice.com." />
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="msapplication-config" content="https://media.phillyvoice.com/static/global/config/browserconfig.xml" />

        <link rel="apple-touch-icon" sizes="57x57" href="https://media.phillyvoice.com/static/global/images/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="114x114" href="https://media.phillyvoice.com/static/global/images/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="72x72" href="https://media.phillyvoice.com/static/global/images/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="144x144" href="https://media.phillyvoice.com/static/global/images/apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="60x60" href="https://media.phillyvoice.com/static/global/images/apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="120x120" href="https://media.phillyvoice.com/static/global/images/apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="76x76" href="https://media.phillyvoice.com/static/global/images/apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="152x152" href="https://media.phillyvoice.com/static/global/images/apple-touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="https://media.phillyvoice.com/static/global/images/apple-touch-icon-180x180.png">
        <link rel="shortcut icon" href="https://media.phillyvoice.com/static/global/images/favicon.ico">
        <link rel="icon" type="image/png" href="https://media.phillyvoice.com/static/global/images/favicon-192x192.png" sizes="192x192">
        <link rel="icon" type="image/png" href="https://media.phillyvoice.com/static/global/images/favicon-160x160.png" sizes="160x160">
        <link rel="icon" type="image/png" href="https://media.phillyvoice.com/static/global/images/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="https://media.phillyvoice.com/static/global/images/favicon-16x16.png" sizes="16x16">
        <link rel="icon" type="image/png" href="https://media.phillyvoice.com/static/global/images/favicon-32x32.png" sizes="32x32">
        <meta name="msapplication-TileColor" content="#603cba">
        <meta name="msapplication-TileImage" content="https://media.phillyvoice.com/static/global/images/mstile-144x144.png">
        <meta name="msapplication-square70x70logo" content="https://media.phillyvoice.com/static/global/images/mstile-70x70.png">
        <meta name="msapplication-square150x150logo" content="https://media.phillyvoice.com/static/global/images/mstile-150x150.png">
        <meta name="msapplication-square310x310logo" content="https://media.phillyvoice.com/static/global/images/mstile-310x310.png">
        <meta name="msapplication-wide310x150logo" content="https://media.phillyvoice.com/static/global/images/mstile-310x150.png">

        <meta name="google-site-verification" content="eWg_5HU7qyxLIjJ6ohS8pXIxrquJK4ZaWrLrk50o0Ss" />
        <meta name="msvalidate.01" content="4D5580B7E87BE36A95828119B7AB1BE3" />
        <meta name="p:domain_verify" content="eecb67825f8dac79c48fd3fd2c5a2a10"/>
        <meta property="fb:pages" content="1427192720893416">

        <script type="text/javascript">
            var _iub = _iub || [];
            _iub.csConfiguration = {"gdprAppliesGlobally":false,"enableCcpa":true,"consentOnContinuedBrowsing":false,"perPurposeConsent":true,"enableCMP":true,"googleAdditionalConsentMode":true,"isTCFConsentGlobal":false,"ccpaAcknowledgeOnDisplay":true,"whitelabel":false,"lang":"en","siteId":1954179,"countryDetection":true,"cookiePolicyId":79968850, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"rejectButtonDisplay":true,"position":"float-bottom-center" }};
        </script>
        <script type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stub-v2.js"></script>
        <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
        <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>

    
        <link rel="canonical" href="https://www.phillyvoice.com/" />
    

        <script id="cs-script" type="text/javascript" async src="https://www.civicscience.com/jspoll/4/civicscience-widget.js"></script>

        <style>
        img { display:block;}
        </style>

        <!-- Include less files within compress for staging and prod -->
        
            <link rel="stylesheet" href="https://media.phillyvoice.com/static/CACHE/css/output.7c9cc2b5d25b.css" type="text/css" />
        

        
            
    <script type="text/javascript" charset="utf-8" >
        var dlData = {
            'Title': 'HomePage',
            'Wordcount': '0',
            'CanonicalURL': 'https://www.phillyvoice.com/'
        };


        

        
            
                
            
        

        
            
        

        
            
        

        
            
        

        

        
            //'Page-Type';
            
                dlData['Page-Type'] = 'home page';
            
        

        

        

        window.dataLayer = window.dataLayer || [];
        dataLayer.push(dlData);

        /* Google Tag Manager */
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TMX5L69');
        /* End Google Tag Manager */
    </script>


        

        
    <script type="text/javascript" charset="utf-8" >
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        window.adTargeting = {
            section: '',
            interests: []
        };

        ga('create', 'UA-56540822-1', 'auto');
        ga('require', 'displayfeatures');

        


        
            
                
            
        

        
            
        

        
            
        

        
            
        

        

        
            //'Page-Type';
            
                ga('set', 'dimension6', 'home page');
            
        

        

        

        ga('send', 'pageview');
    </script>


        
<!-- Begin comScore Tag -->
<script>
  var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "19749226" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
</script>
<noscript>
  <img src="http://b.scorecardresearch.com/p?c1=2&c2=19749226&cv=2.0&cj=1" />
</noscript>
<!-- End comScore Tag -->



        
    
        <script type="text/javascript" src="https://media.phillyvoice.com/static/CACHE/js/output.71dcc8a90518.js"></script>
    


        
    
    <meta name="thumbnail" content="https://media.phillyvoice.com/static/global/images/PhillyVoice_OpenGraph_Logo.jpg"/>
    <meta name="news_keywords" content="philadelphia, news, philly, philadelphia, news, sports, culture, health, events, things to do" />

    
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="PhillyVoice" />
    <meta property="article:publisher" content="https://www.facebook.com/thephillyvoice" />
    <meta property="og:title" name="og:title" content="Philadelphia local news, sports, business, entertainment, restaurants, food &amp; drink | PhillyVoice"/>
    <meta property="og:image" name="og:image" content="https://media.phillyvoice.com/static/global/images/PhillyVoice_OpenGraph_Logo.jpg"/>
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="675" />
    <meta property="og:url" content="https://www.phillyvoice.com/" />
    <meta property="og:description" name="og:description" content="Your source for Philadelphia and South Jerseyâs breaking news, sports, entertainment, business, things to do, events, culture, and more from PhillyVoice.com."/>
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@thephillyvoice" />
    <meta name="twitter:title" content="Philadelphia local news, sports, business, entertainment, restaurants, food &amp; drink"/>
    <meta name="twitter:description" content="Your source for Philadelphia and South Jerseyâs breaking news, sports, entertainment, business, things to do, events, culture, and more from PhillyVoice.com."/>
    <meta name="twitter:image" content="https://media.phillyvoice.com/static/global/images/PhillyVoice_OpenGraph_Logo.jpg"/>
    <meta name="twitter:url" content="https://www.phillyvoice.com/"/>
    
    <meta itemprop="name" content="Philadelphia local news, sports, business, entertainment, restaurants, food &amp; drink - PhillyVoice.com" />
    <meta itemprop="description" content="Your source for Philadelphia and South Jerseyâs breaking news, sports, entertainment, business, things to do, events, culture, and more from PhillyVoice.com." />
    <meta itemprop="image" content="https://media.phillyvoice.com/static/global/images/PhillyVoice_OpenGraph_Logo.jpg" />
    <link itemprop="url" rel="canonical" href="https://www.phillyvoice.com/"/>
    <meta name="pocket-site-verification" content="8d7ffd599d1a09a392d8c2b0da36a1" />

        
            <script type="text/javascript" src="//s.ntv.io/serve/load.js" async></script>
        

        

    </head>

    <body id="homepage" class="">
        
        
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMX5L69"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        
        

        
        
    <div id='ad_floater' style='width:1px; height:1px;'>
        <script type='text/javascript'>
        googletag.cmd.push(function() { googletag.display('ad_floater'); });
        </script>
    </div>
    <div id='ad_mobile_interstitial'>
        <script type='text/javascript'>
            googletag.cmd.push(function() { googletag.display('ad_mobile_interstitial'); });
        </script>
    </div>
    <div id='oop'>
        <script type='text/javascript'>
        //googletag.cmd.push(function() { googletag.display('oop'); });
        </script>
    </div>

    <div id="wallpaper_container">
        <div id='wallpaper-left'>
            <script type='text/javascript'>
                googletag.cmd.push(function() { googletag.display('wallpaper-left'); });
            </script>
        </div>

        <div id='wallpaper-right'>
            <script type='text/javascript'>
                googletag.cmd.push(function() { googletag.display('wallpaper-right'); });
            </script>
        </div>
    </div>


        

        
        
    <div class="sticky-container">
        <!-- pv-general-mah-atf-1 -->
		<div id='ad_mobile_adhesion' style='width:320px; height:50px;'>
		<script type='text/javascript'>
		googletag.cmd.push(function() { googletag.display('ad_mobile_adhesion'); });
		</script>
		</div>
    </div>


        

        
    


    
    
        <div class="this-weekend-container">
            <ul class="this-weekend ">
                
                    <li>
                        <div class="article">
                            <a href="/toprecirc-lenapehoking-watershed-0599923/" onClick="ga('send', 'event', 'Top Recirc', 'Link Click', 'toprecirc-lenapehoking-watershed-0599923', {'nonInteraction': 1});">
                                
                                    
                                    <img  alt="Christina-Suncatcher_by_Sarah Kavage" height="140" src="https://media.phillyvoice.com/media/images/Christina-Suncatcher_by_Sarah_Kava.2e16d0ba.fill-220x140.png" width="220">
                                
                                <h1>
                                    
                                    Experience Lenapehoking Watershed
                                </h1>
                            </a>
                        </div>
                    </li>
                
                    <li>
                        <div class="article">
                            <a href="/how-save-thousands-when-buying-your-home-philadelphia-0599959/" onClick="ga('send', 'event', 'Top Recirc', 'Link Click', 'how-save-thousands-when-buying-your-home-philadelphia-0599959', {'nonInteraction': 1});">
                                
                                    
                                    <img  alt="Limited - Philly neighborhood car lined street" height="140" src="https://media.phillyvoice.com/media/images/PhillyRowhomePrevu.2e16d0ba.fill-220x140.png" width="220">
                                
                                <h1>
                                    
                                    How to save thousands buying a home
                                </h1>
                            </a>
                        </div>
                    </li>
                
                    <li>
                        <div class="article">
                            <a href="/ibew-local-98-women-construction-camp-recruitment-event-0599927/" onClick="ga('send', 'event', 'Top Recirc', 'Link Click', 'ibew-local-98-women-construction-camp-recruitment-event-0599927', {'nonInteraction': 1});">
                                
                                    
                                    <img  alt="Limited - Women in Construction 4" height="140" src="https://media.phillyvoice.com/media/images/womeninconstruction4.6f5beda9.fill-220x140_1FrMQag.jpg" width="220">
                                
                                <h1>
                                    
                                    IBEW 98 hosts Women in Construction Camp
                                </h1>
                            </a>
                        </div>
                    </li>
                
                    <li>
                        <div class="article">
                            <a href="/2021-toprecirc-ibx-college-tuition-benefit/" onClick="ga('send', 'event', 'Top Recirc', 'Link Click', '2021-toprecirc-ibx-college-tuition-benefit', {'nonInteraction': 1});">
                                
                                    
                                    <img  alt="TopRecirc - 080221 - college benefit" height="140" src="https://media.phillyvoice.com/media/images/toprecirc-080221-collegebenefit.2e16d0ba.fill-220x140.jpg" width="220">
                                
                                <h1>
                                    
                                    IBX helps ease stress of college tuition
                                </h1>
                            </a>
                        </div>
                    </li>
                
            </ul>
        </div>
    
    




        
            
                

<div id="navbar_container" class="collapsed">
    <div id="navbar_background">
        <div id="navbar">
            <div id="navbar_header">
                <a class="menu-collapse-button" href="#">Menu</a>
                
                <div id="logo"><a href="/">PhillyVoice</a></div>
                
                    <ul class="nav-list">
                        
                        <li >
                            <a class="news" href="/news/">
                                News
                            </a>
                        </li>
                        
                        <li >
                            <a class="health" href="/health/">
                                Health
                            </a>
                        </li>
                        
                        <li >
                            <a class="culture" href="/culture/">
                                Culture
                            </a>
                        </li>
                        
                        <li >
                            <a class="events" href="/events/">
                                Events
                            </a>
                        </li>
                        
                        <li >
                            <a class="sports" href="/sports/">
                                Sports
                            </a>
                        </li>
                        
                    </ul>
                    <a class="navbar-section " href=""></a>
                
            </div>
            <div id='navbar_collapse'>
                <form class="navbar-search-form" action="/search/" method="get">
                    <div class="navbar-search-form-inner">
                        <input class="navbar-search-input" type="text" placeholder="Search..." name="q">
                        <button type="submit" class="search-icon">Search</button>
                    </div>
                </form>
                <ul class="nav-list">
                    
                    <li >
                        <a class="news" href="/news/">
                            News
                        </a>
                        
                        <a class="nav-toggle"><i class="fa fa-chevron-right pull-right" ></i></a>
                        <ul class="navbar-sub-nav">
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/politics/">Politics</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/opinion/">Opinion</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/crime/">Crime</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/odd-news/">Odd News</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/education/">Education</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/business/">Business</a>
                                </li>
                            
                        </ul>
                        
                    </li>
                    
                    <li >
                        <a class="health" href="/health/">
                            Health
                        </a>
                        
                        <a class="nav-toggle"><i class="fa fa-chevron-right pull-right" ></i></a>
                        <ul class="navbar-sub-nav">
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/health-news/">Health News</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/illness/">Illness</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/childrens-health/">Children&#39;s Health</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/addiction/">Addiction</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/fitness/">Fitness</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/wellness/">Wellness</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/parenting/">Parenting</a>
                                </li>
                            
                        </ul>
                        
                    </li>
                    
                    <li >
                        <a class="culture" href="/culture/">
                            Culture
                        </a>
                        
                        <a class="nav-toggle"><i class="fa fa-chevron-right pull-right" ></i></a>
                        <ul class="navbar-sub-nav">
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/entertainment/">Entertainment</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/lifestyle/">Lifestyle</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/food-drink/">Food &amp; Drink</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/the-arts/">The Arts</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/pets/">Pets</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/restaurants/">Restaurants</a>
                                </li>
                            
                        </ul>
                        
                    </li>
                    
                    <li >
                        <a class="events" href="/events/">
                            Events
                        </a>
                        
                        <a class="nav-toggle"><i class="fa fa-chevron-right pull-right" ></i></a>
                        <ul class="navbar-sub-nav">
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/fitness/">Fitness</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/family-friendly/">Family-Friendly</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/festivals/">Festivals</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/performances/">Performances</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/food-drink/">Food &amp; Drink</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/shopping/">Shopping</a>
                                </li>
                            
                        </ul>
                        
                    </li>
                    
                    <li >
                        <a class="sports" href="/sports/">
                            Sports
                        </a>
                        
                        <a class="nav-toggle"><i class="fa fa-chevron-right pull-right" ></i></a>
                        <ul class="navbar-sub-nav">
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/eagles/">Eagles</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/sixers/">Sixers</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/phillies/">Phillies</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/flyers/">Flyers</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/nba-free-agency/">NBA Free Agency</a>
                                </li>
                            
                                <li>
                                    <a href="https://www.phillyvoice.com/tags/WWE/">WWE</a>
                                </li>
                            
                        </ul>
                        
                    </li>
                    
                    <li class="extras">
                        <a href="/staff-contributors">Staff / Contributors</a>
                    </li>
                    <li class="extras">
                        <a href="">Company Info</a>
                        <a class="nav-toggle"><i class="fa fa-chevron-right pull-right" ></i></a>
                        <ul class="navbar-sub-nav">
                            
                                
                                    
                                    <li>
                                        
                                            <a href="/about-us/">About Us</a>
                                        
                                    </li>
                                
                                    
                                    <li>
                                        
                                            <a href="https://www.phillyvoicemedia.com">Advertise</a>
                                        
                                    </li>
                                
                                    
                                    <li>
                                        
                                            <a href="/contact-us/">Contact Us</a>
                                        
                                    </li>
                                
                                    
                                    <li>
                                        
                                            <a href="/legal-privacy-ethics/">Legal / Privacy</a>
                                        
                                    </li>
                                
                                    
                                    <li>
                                        
                                            <a href="/staff-contributors/">Staff / Contributors</a>
                                        
                                    </li>
                                
                                    
                                    <li>
                                        
                                            <a href="/rss-feeds/">RSS</a>
                                        
                                    </li>
                                
                            
                        </ul>
                    </li>
                </ul>
                <p class="legal-text">&copy; 2021 WWB Holdings, LLC. All rights reserved</p>
                <ul class="social-links">
                    <li>
                        <a class="social-facebook" href="https://www.facebook.com/thephillyvoice" target="_blank"><i class="fa fa-facebook"></i><span>Facebook</span></a>
                    </li>
                    <li>
                        <a class="social-twitter" href="https://twitter.com/thephillyvoice" target="_blank"><i class="fa fa-twitter"></i><span>Twitter</span></a>
                    </li>
                    <li>
                        <a class="social-google-plus" href="https://plus.google.com/113025074336841467876/posts" target="_blank"><i class="fa fa-google-plus"></i><span>Google Plus</span></a>
                    </li>
                    <li class="extras"><a class="social-linkedin" href="https://www.linkedin.com/company/phillyvoice"><i class="fa fa-linkedin"></i><span>LinkedIn</span></a></li>
                    <li class="extras"><a class="social-instagram" href="https://www.instagram.com/phillyvoice/"><i class="fa fa-instagram"></i><span>Instagram</span></a></li>
                    <li class="extras"><a class="social-pinterest" href="https://www.pinterest.com/phillyvoice"><i class="fa fa-pinterest"></i><span>Pinterest</span></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
            
        

        

        
        
    <div id="leaderboard">
        <!-- pv-general-lbslb-atf-1 -->
		<div id='ad_leaderboard'>
		<script type='text/javascript'>
		googletag.cmd.push(function() { googletag.display('ad_leaderboard'); });
		</script>
		</div>
    </div>

        

        

        <div id="content_container">
            
                
            
            
    <div class="home-container">
        <div class="left-content-column">
        

        

        
            <div class="tri-section-header">
                
                
                
                <div class="featured-article">
                    <div class="article">
                        <div class="article-nav sports">
                            <span><a href="/tags/sixers/">Sixers</a></span>
                            


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="http://annekoonsrealestate.com/?utm_campaign=Philly%20Voice%20Sponsored%20Stories&amp;utm_source=ppc" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'Akoons-Sixers-121218', {'nonInteraction': 1});" target="_blank">
            <img  alt="Anne Koons - Native 020715" height="21" src="https://media.phillyvoice.com/media/images/a_k_home_list_bdg.focus-none.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'Akoons-Sixers-121218', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        </div>
                        <a href="/nba-free-agency-sixers-re-sign-furkan-korkmaz-contract-details/">
                            
                                <img alt="Furkan-Korkmaz_080221_usat" height="383" src="https://media.phillyvoice.com/media/images/USATSI_16196185.d7cce834.fill-688x383.jpg" width="688">
                            

                            <div class="headline-container">
                                <h1 class="first-headline">Back for more</h1>
                                
                                <h2>Sixers re-sign Furkan Korkmaz to three-year, $15 million deal</h2>
                                
                            </div>
                        </a>
                    </div>
                </div>
                
                

                
                
                    <div class="featured-article">
                        <div class="article">
                            <div class="article-nav events">
                                <span></span>
                                


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="https://www.ibx.com/index.jsp?utm_source=Philly%20Voice&amp;utm_medium=Banner&amp;utm_campaign=Philly%20Voice&amp;utm_content=SON" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBC-Events-021316', {'nonInteraction': 1});" target="_blank">
            <img  alt="IBC - Native (195x33)" height="21" src="https://media.phillyvoice.com/media/images/30-15-304217_IBC_LF_Logo_195x33_DB.focus-none.max-125x32.jpg" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBC-Events-021316', {'nonInteraction': 1});"/></a>
        

        
    </div>


                            </div>
                            <a href="/movies-clark-park-august-2021-black-panther-concrete-cowboy/">
                                
                                    <img alt="Movies Nights at Clark Park" height="200" src="https://media.phillyvoice.com/media/images/2821_Movies_Nights_Clark_Park.2e16d0ba.fill-328x200.jpg" width="328">
                                
                                <h2>Free movies in Clark Park include &#39;Concrete Cowboy,&#39; &#39;Black Panther&#39;</h2>
                                
                                
                                
                            </a>
                        </div>
                    </div>
                    
                
                
                    <div class="featured-article">
                        <div class="article">
                            <div class="article-nav health">
                                <span></span>
                                


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="https://www.ibx.com/index.jsp?utm_source=Philly%20Voice&amp;utm_medium=Banner&amp;utm_campaign=Philly%20Voice&amp;utm_content=SON" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBC-Health-040915', {'nonInteraction': 1});" target="_blank">
            <img  alt="IBC - Native (195x33)" height="21" src="https://media.phillyvoice.com/media/images/30-15-304217_IBC_LF_Logo_195x33_DB.focus-none.max-125x32.jpg" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBC-Health-040915', {'nonInteraction': 1});"/></a>
        

        
    </div>


                            </div>
                            <a href="/west-nile-virus-mosquito-spraying-symptoms-what-to-know/">
                                
                                    <img alt="West Nile Virus cases" height="200" src="https://media.phillyvoice.com/media/images/080221_west_nile_virus_cases.2e16d0ba.fill-328x200.jpg" width="328">
                                
                                <h2>It&#39;s mosquito season: Know how to protect yourself from West Nile Virus</h2>
                                
                                
                                
                            </a>
                        </div>
                    </div>
                    
                
                
            </div>
        

        
            



<div id="article_pool">
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section sports">
                            
                                <a href="/tags/sixers/">Sixers</a>
                            
                        </p>
                        <a href="/live-nba-free-agency-trade-rumors-sixers-danny-green-ben-simmons-daryl-morey/">
                            <h1>Live NBA free agency rumors: What&#39;s the latest on the Sixers&#39; offseason plans?</h1>
                        </a>
                        
                            


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="http://annekoonsrealestate.com/?utm_campaign=Philly%20Voice%20Sponsored%20Stories&amp;utm_source=ppc" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'Akoons-Sixers-121218', {'nonInteraction': 1});" target="_blank">
            <img  alt="Anne Koons - Native 020715" height="21" src="https://media.phillyvoice.com/media/images/a_k_home_list_bdg.focus-none.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'Akoons-Sixers-121218', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/live-nba-free-agency-trade-rumors-sixers-danny-green-ben-simmons-daryl-morey/"><img alt="Sixers-blur_061721_usat" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/USATSI_15980885.73a3b929.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section sports">
                            
                                <a href="/tags/eagles/">Eagles</a>
                            
                        </p>
                        <a href="/eagles-training-camp-notes-day-5-jordan-mailata-better-than-andre-dillard/">
                            <h1>Eagles training camp notes, Day 5: Jordan Mailata is better than Andre Dillard</h1>
                        </a>
                        
                            


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="http://www.ibew98.org/" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBEW-Sports-2019', {'nonInteraction': 1});" target="_blank">
            <img  alt="IBEW - Logo - 195x33" height="21" src="https://media.phillyvoice.com/media/images/IBEW-195x33.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBEW-Sports-2019', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/eagles-training-camp-notes-day-5-jordan-mailata-better-than-andre-dillard/"><img alt="080221JordanMailata" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/0023_08022021_EaglesCamp_Frese.c150d4ba.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section news">
                            
                                <a href="/tags/investigations/">Investigations</a>
                            
                        </p>
                        <a href="/cassandra-johnston-missing-car-found-philadelphia-bucks-county/">
                            <h1>Body found in Northeast Philly identified as missing Bucks County woman</h1>
                        </a>
                        
                            



                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/cassandra-johnston-missing-car-found-philadelphia-bucks-county/"><img alt="Cassandra Johnston Missing" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/072021_Cassandra_Johnston_Missing.2e16d0ba.fill-100x100.png" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section news">
                            
                                <a href="/tags/transportation/">Transportation</a>
                            
                        </p>
                        <a href="/market-frankford-line-stations-close-cleaning-septa-says/">
                            <h1>SEPTA continues station cleaning initiative into the summer</h1>
                        </a>
                        
                            



                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/market-frankford-line-stations-close-cleaning-septa-says/"><img alt="SEPTA cleaning" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/073121-septa-cleaning.2e16d0ba.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section sports">
                            
                                <a href="/tags/opinion/">Opinion</a>
                            
                        </p>
                        <a href="/john-mcmullen-eagles-coach-nick-sirianni-training-camp-observations-058882/">
                            <h1>John McMullen: Some early encouraging signs from Eagles coach Nick Sirianni</h1>
                        </a>
                        
                            


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="https://www.pickswise.com/" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'Pickswise-Editorial', {'nonInteraction': 1});" target="_blank">
            <img  alt="Limited - PICKSWISE Sponsorship Badge" height="21" src="https://media.phillyvoice.com/media/images/Pickswise-Logo_195x33-final.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'Pickswise-Editorial', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/john-mcmullen-eagles-coach-nick-sirianni-training-camp-observations-058882/"><img alt="Nick-Sirianni-Eagles_080221_usat" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/USATSI_16474176.75b5366f.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article native-sponsor">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section ">
                            
                                Sponsored
                            
                        </p>
                        <a href="/guide-vacationing-recovery-recovery-centers-of-america-0599992/">
                            <h1>A guide to vacationing in recovery</h1>
                        </a>
                        
                        
                            


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://recoverycentersofamerica.com/?utm_medium=website&amp;utm_source=phillyvoice.com&amp;utm_campaign=phillyvoice-article-july-2021&amp;phone=844-634-0770" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'RCA-Native-071321-VacationRecovery', {'nonInteraction': 1});" target="_blank">
            <img  alt="Limited - RCA at Devon Sponsorship Badge" height="21" src="https://media.phillyvoice.com/media/images/RCOA195x33.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'RCA-Native-071321-VacationRecovery', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/guide-vacationing-recovery-recovery-centers-of-america-0599992/"><img alt="The Ocean City Boardwalk in New Jersey" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/35209288844_f0df9d3e32_c.2e16d0ba.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section news">
                            
                                <a href="/tags/education/">Education</a>
                            
                        </p>
                        <a href="/cheyney-university-forgive-student-loan-debt-covid-19-funds/">
                            <h1>Cheyney University to forgive student loan debt with COVID-19 funds</h1>
                        </a>
                        
                            



                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/cheyney-university-forgive-student-loan-debt-covid-19-funds/"><img alt="Cheyney University of Pennsylvania" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/073121-cheyney-university-student-.98bfa7bb.fill-100x100.png" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section sports">
                            
                                <a href="/tags/eagles/">Eagles</a>
                            
                        </p>
                        <a href="/eagles-news-rookie-wr-devonta-smith-injury-sprained-knee-timeline-training-camp/">
                            <h1>Eagles rookie WR DeVonta Smith out with sprained knee</h1>
                        </a>
                        
                            


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="http://www.ibew98.org/" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBEW-Sports-2019', {'nonInteraction': 1});" target="_blank">
            <img  alt="IBEW - Logo - 195x33" height="21" src="https://media.phillyvoice.com/media/images/IBEW-195x33.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBEW-Sports-2019', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/eagles-news-rookie-wr-devonta-smith-injury-sprained-knee-timeline-training-camp/"><img alt="Devonta-smith-injury_080221_usat" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/USATSI_16467689.8e6ae3f9.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section culture">
                            
                                <a href="/tags/arts-culture/">Arts & Culture</a>
                            
                        </p>
                        <a href="/timothy-rub-step-down-role-philadelphia-museum-art/">
                            <h1>Timothy Rub to step down from role at Philadelphia Museum of Art</h1>
                        </a>
                        
                            



                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/timothy-rub-step-down-role-philadelphia-museum-art/"><img alt="Museum of Art" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/073121-museum-of-art.2e16d0ba.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article native-sponsor">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section ">
                            
                                Sponsored
                            
                        </p>
                        <a href="/newly-remodeled-ava-gardner-museum-reopens-new-exhibits-smithfield-north-carolina-johnston-county-059993/">
                            <h1>Newly-remodeled Ava Gardner Museum reopens with new exhibits</h1>
                        </a>
                        
                        
                            


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://www.johnstoncountync.org/ava-gardner/" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'JohnstonCounty-Native-060321-AvaReopen', {'nonInteraction': 1});" target="_blank">
            <img  alt="Visit NC - Johnston County Sponsorship Badge" height="21" src="https://media.phillyvoice.com/media/images/Johnston-County-195x33_V2_AvenirBlackOblique.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'JohnstonCounty-Native-060321-AvaReopen', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/newly-remodeled-ava-gardner-museum-reopens-new-exhibits-smithfield-north-carolina-johnston-county-059993/"><img alt="Limited - Ava Gardner Museum Costume Exhibit" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/Ava_Gardner_costume_exhibit.2e16d0ba.fill-100x100.png" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section sports">
                            
                                <a href="/tags/eagles/">Eagles</a>
                            
                        </p>
                        <a href="/report-carson-wentz-eschew-foot-surgery-what-does-it-mean-eagles-058882/">
                            <h1>Report: Carson Wentz to undergo foot surgery; what does it mean for the Eagles? (update)</h1>
                        </a>
                        
                            


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="https://www.pickswise.com/" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'Pickswise-Editorial', {'nonInteraction': 1});" target="_blank">
            <img  alt="Limited - PICKSWISE Sponsorship Badge" height="21" src="https://media.phillyvoice.com/media/images/Pickswise-Logo_195x33-final.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'Pickswise-Editorial', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/report-carson-wentz-eschew-foot-surgery-what-does-it-mean-eagles-058882/"><img alt="080221CarsonWentz" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/USATSI_16467141_1.db47caf6.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section sports">
                            
                                <a href="/tags/fantasy-football/">Fantasy football</a>
                            
                        </p>
                        <a href="/best-new-funny-fantasy-football-team-names-puns-2021-nfl-season-rookies-kyle-pitts-chuba-hubbard/">
                            <h1>Best (new) fantasy football team names for 2021 NFL season</h1>
                        </a>
                        
                            



                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/best-new-funny-fantasy-football-team-names-puns-2021-nfl-season-rookies-kyle-pitts-chuba-hubbard/"><img alt="060921DeVontaSmith" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/EAGL15-e.d66cd275.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article native-sponsor">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section ">
                            
                                Sponsored
                            
                        </p>
                        <a href="/social-selling-techniques-maximize-client-acquisition-linkedin-bongo-consulting-0599993/">
                            <h1>Social selling techniques to maximize client acquisition on LinkedIn</h1>
                        </a>
                        
                        
                            


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://bongoconsulting.com/" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'BongoConsulting-Native-061021-CXO2-LinkedIn', {'nonInteraction': 1});" target="_blank">
            <img  alt="Limited - Black Transparent BONGO Sponsorship Badge" height="21" src="https://media.phillyvoice.com/media/images/Bongo-Black-195x22-transparent.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'BongoConsulting-Native-061021-CXO2-LinkedIn', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/social-selling-techniques-maximize-client-acquisition-linkedin-bongo-consulting-0599993/"><img alt="A salesperson checking a laptop in a coffee shop" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/linkedin-sales-solutions-GHwRwNHUi.2e16d0ba.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section health">
                            
                                <a href="/tags/mens-health/">Men's Health</a>
                            
                        </p>
                        <a href="/covid-19-male-infertility-erectile-dysfunction-vaccines/">
                            <h1>COVID-19 could cause male infertility and sexual dysfunction â but vaccines do not</h1>
                        </a>
                        
                            


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="https://www.ibx.com/index.jsp?utm_source=Philly%20Voice&amp;utm_medium=Banner&amp;utm_campaign=Philly%20Voice&amp;utm_content=SON" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBC-Health-040915', {'nonInteraction': 1});" target="_blank">
            <img  alt="IBC - Native (195x33)" height="21" src="https://media.phillyvoice.com/media/images/30-15-304217_IBC_LF_Logo_195x33_DB.focus-none.max-125x32.jpg" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBC-Health-040915', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/covid-19-male-infertility-erectile-dysfunction-vaccines/"><img alt="COVID-19 Male Fertility" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/073021_COVID-19_Male_Fertility_Ere.2e16d0ba.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section sports">
                            
                                <a href="/tags/sixers/">Sixers</a>
                            
                        </p>
                        <a href="/sixers-76ers-latest-news-updates-ben-simmons-nba-draft-trade-rumors-daryl-morey/">
                            <h1>Following the draft, Sixers&#39; offseason still hinges on a Ben Simmons decision</h1>
                        </a>
                        
                            


    
    <div class="sponsor">
        
            from
         
        
         
            <a href="http://annekoonsrealestate.com/?utm_campaign=Philly%20Voice%20Sponsored%20Stories&amp;utm_source=ppc" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'Akoons-Sixers-121218', {'nonInteraction': 1});" target="_blank">
            <img  alt="Anne Koons - Native 020715" height="21" src="https://media.phillyvoice.com/media/images/a_k_home_list_bdg.focus-none.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'Akoons-Sixers-121218', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/sixers-76ers-latest-news-updates-ben-simmons-nba-draft-trade-rumors-daryl-morey/"><img alt="ben-simmons-sixers_062121_usat" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/USATSI_16286649.c99cd45e.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
        
            <div class="article native-sponsor">
                <div class="article-inner">
                    <div class="article-text">
                        <p class="section ">
                            
                                Sponsored
                            
                        </p>
                        <a href="/living-healthy-life-alzheimers-dementia-0599992/">
                            <h1>Tips for living a healthy life with Alzheimer&#39;s</h1>
                        </a>
                        
                        
                            


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://www.alz.org" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'AlzheimersAssociation-Native-062321-June2', {'nonInteraction': 1});" target="_blank">
            <img  alt="Limited - Alzheimer&#39;s Association Sponsorship Badge 2" height="21" src="https://media.phillyvoice.com/media/images/195x33AlzheimersAssociationLONG.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'AlzheimersAssociation-Native-062321-June2', {'nonInteraction': 1});"/></a>
        

        
    </div>


                        
                    </div>
                    
                    <div class="article-image">
                        <a href="/living-healthy-life-alzheimers-dementia-0599992/"><img alt="Limited - Senior Couple Walking In Park" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/iStock-96903828.2e16d0ba.fill-100x100.jpg" width="100"></a>
                    </div>
                    
                </div>
            </div>
        
    
</div>

        


        
            
                <div class="sectionals">
                    
                        
                            
                                






<div class="article-widget">
    




    
        <a href="https://www.phillyvoice.com/tags/podcasts/">
    
        <h1 class="podcasts">
            <span>Podcasts</span>
        </h1>
    
        </a>
    

    <div class="article-widget-list">
        
        <div class="article">
            <a href="/health-podcast-reflecting-pride-month-ibx-the-cover-story-podcast-069991/">
                
                    
                        <img alt="Purchased - Pride Flag waving" class="article-image lazy-widget" height="200" data-original="https://media.phillyvoice.com/media/images/iStock-1250430888.2e16d0ba.fill-351x200.jpg" width="351"><noscript><img alt="Purchased - Pride Flag waving" class="article-image lazy-widget" height="200" src="https://media.phillyvoice.com/media/images/iStock-1250430888.2e16d0ba.fill-351x200.jpg" width="351"></noscript>
                    
                    
                
                <h1>IBX: The Cover Story Podcast: Reflecting on Pride Month</h1>
            </a>
            
            
        </div>
        
        <div class="article">
            <a href="/all-pro-philly-podcast-listen-live-free-stream--jahri-evans-jerrold-colton-sixers-flyers-eagles-phillies-058883/">
                
                    
                        <img alt="Limited - All Pro Philly" class="article-image lazy-widget" height="124" data-original="https://media.phillyvoice.com/media/images/700X500-AllProMain.0955d12b.fill-132x124.jpg" width="132"><noscript><img alt="Limited - All Pro Philly" class="article-image lazy-widget" height="124" src="https://media.phillyvoice.com/media/images/700X500-AllProMain.0955d12b.fill-132x124.jpg" width="132"></noscript>
                    
                    
                
                <h1>All-Pro Philly Podcast with Jahri Evans &amp; Jerrold Colton</h1>
            </a>
            
            
        </div>
        
        <div class="article">
            <a href="/podcast-eagles-training-camp-preview/">
                
                    
                        <img alt="060921DeVontaSmith" class="article-image lazy-widget" height="124" data-original="https://media.phillyvoice.com/media/images/EAGL15-e.d66cd275.fill-132x124.jpg" width="132"><noscript><img alt="060921DeVontaSmith" class="article-image lazy-widget" height="124" src="https://media.phillyvoice.com/media/images/EAGL15-e.d66cd275.fill-132x124.jpg" width="132"></noscript>
                    
                    
                
                <h1>Podcast: Eagles training camp preview!</h1>
            </a>
            
            
        </div>
        
    </div>

    
        
            <a href="/tags/podcasts/" class="sectional-more-link">All Podcasts</a>
        
    
</div>









                                
                            
                        
                    
                        
                            
                                






<div class="article-widget">
    


    <div class="sponsor">
        
         
            <a href="http://www.ibew98.org/" target="_blank" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBEW-Sports-2019', {'nonInteraction': 1});"><img  alt="IBEW - Logo - 195x33" height="21" src="https://media.phillyvoice.com/media/images/IBEW-195x33.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBEW-Sports-2019', {'nonInteraction': 1});"/></a>
        
        
    </div>



    
        <a href="/sports/">
    
        <h1 class="sports">
            <span>Sports</span>
        </h1>
    
        </a>
    

    <div class="article-widget-list">
        
        <div class="article">
            <a href="/eagles-training-camp-notes-day-5-jordan-mailata-better-than-andre-dillard/">
                
                    
                        <img alt="080221JordanMailata" class="article-image lazy-widget" height="200" data-original="https://media.phillyvoice.com/media/images/0023_08022021_EaglesCamp_Frese.c150d4ba.fill-351x200.jpg" width="351"><noscript><img alt="080221JordanMailata" class="article-image lazy-widget" height="200" src="https://media.phillyvoice.com/media/images/0023_08022021_EaglesCamp_Frese.c150d4ba.fill-351x200.jpg" width="351"></noscript>
                    
                    
                
                <h1>Eagles training camp notes, Day 5: Jordan Mailata is better than Andre Dillard</h1>
            </a>
            
            
        </div>
        
        <div class="article">
            <a href="/nba-trade-rumors-sixers-tobias-harris-rockets-buddy-hield-ben-simmons-cj-mcollum-kemba-walker/">
                
                    
                        <img alt="Tobias_Harris_9_Hornets_Sixers_Frese.jpg" class="article-image lazy-widget" height="124" data-original="https://media.phillyvoice.com/media/images/0397_01042021_Hornets_Sixers_Frese.6f9a7d7b.fill-132x124.jpg" width="132"><noscript><img alt="Tobias_Harris_9_Hornets_Sixers_Frese.jpg" class="article-image lazy-widget" height="124" src="https://media.phillyvoice.com/media/images/0397_01042021_Hornets_Sixers_Frese.6f9a7d7b.fill-132x124.jpg" width="132"></noscript>
                    
                    
                
                <h1>NBA trade rumors: Are the Sixers shopping Tobias Harris?</h1>
            </a>
            
            
        </div>
        
        <div class="article">
            <a href="/john-mcmullen-eagles-coach-nick-sirianni-training-camp-observations-058882/">
                
                    
                        <img alt="Nick-Sirianni-Eagles_080221_usat" class="article-image lazy-widget" height="124" data-original="https://media.phillyvoice.com/media/images/USATSI_16474176.75b5366f.fill-132x124.jpg" width="132"><noscript><img alt="Nick-Sirianni-Eagles_080221_usat" class="article-image lazy-widget" height="124" src="https://media.phillyvoice.com/media/images/USATSI_16474176.75b5366f.fill-132x124.jpg" width="132"></noscript>
                    
                    
                
                <h1>John McMullen: Some early encouraging signs from Eagles coach Nick Sirianni</h1>
            </a>
            
            
        </div>
        
    </div>

    
        
            <a href="/sports/" class="sectional-more-link">All Sports</a>
        
    
</div>









                                
                            
                        
                    
                        
                            

                            
                            <div class="player-wrap">
                                <h2 class="widget-title video"><span> Videos</span></h2>
                                <div id="ac-lre-player-ph">
                                    <div id="ac-lre-player"></div>
                                </div>
                                <script
                                    id="lre-player-widget"
                                    src="https://player.anyclip.com/anyclip-widget/lre-widget/prod/v1/src/lre-lh.js"
                                    pubname="phillyvoicecom_homepage"
                                    widgetname="0011r00001qbFvJ_416"
                                ></script>
                            </div>
                            

                            <div class="design-and-gallery-widget">
                            
                                












<div class="design-widget">
    <h1> COVID-19  


</h1>
    
        <a href="/coronavirus-delta-variant-cases-symptoms-vaccines-covid19-cdc-data/">
            
                <img alt="Delta Variant U.S." class="article-image lazy-widget" height="260" data-original="https://media.phillyvoice.com/media/images/072021_Delta_Variant_COVID-19_.2e16d0ba.fill-380x260-c0.jpg" width="380"><noscript><img alt="Delta Variant U.S." class="article-image lazy-widget" height="260" src="https://media.phillyvoice.com/media/images/072021_Delta_Variant_COVID-19_.2e16d0ba.fill-380x260-c0.jpg" width="380"></noscript>
            
            <h1>Delta variant accounts for 83% of new U.S. COVID-19 cases, CDC says</h1>
        </a>
    
</div>



                                
                                    
                                    
                                    
                                        
                                            

<div class="gallery-widget healthy-recipes">
    <h1><span>Healthy Recipes 


</span></h1>
    <div class="gallery-widget-list">
        <ul class="bxslider">
            
                <li>
                    <a href="/mediterranean-potato-soup-healthy-recipe-059991/">
                    
                        <img alt="Limited - Mediterranean Potato Soup" height="201" src="https://media.phillyvoice.com/media/images/Mediterranean_Potato_Soup.2e16d0ba.fill-380x201.jpg" width="380">
                    
                    <h1>Healthy Recipe: Mediterranean Potato Soup</h1>
                    </a>
                </li>
            
                <li>
                    <a href="/chinese-style-chicken-cauliflower-rice-healthy-recipe-059991/">
                    
                        <img alt="Limited - Chinese-Style Chicken nâ Cauliflower Rice" height="201" src="https://media.phillyvoice.com/media/images/chinesestylechickenrice.2e16d0ba.fill-380x201.jpg" width="380">
                    
                    <h1>Healthy Recipe: Chinese-Style Chicken nâ Cauliflower Rice</h1>
                    </a>
                </li>
            
                <li>
                    <a href="/cauliflower-cream-mac-cheese-healthy-recipe-059991/">
                    
                        <img alt="Limited - Healthy Recipe - Cauliflower Cream Mac and Cheese" height="201" src="https://media.phillyvoice.com/media/images/cauliflowermacandcheese.2e16d0ba.fill-380x201.jpg" width="380">
                    
                    <h1>Healthy Recipe: Cauliflower Cream Mac and Cheese</h1>
                    </a>
                </li>
            
                <li>
                    <a href="/moon-milk-healthy-recipe-059991/">
                    
                        <img alt="Limited - Moon Milk IBX Recipe" height="201" src="https://media.phillyvoice.com/media/images/moonmilk.2e16d0ba.fill-380x201.jpg" width="380">
                    
                    <h1>Healthy Recipe: Moon Milk</h1>
                    </a>
                </li>
            
                <li>
                    <a href="/cowboy-caviar-dip-healthy-recipe-059991/">
                    
                        <img alt="Limited - Healthy Recipe Cowboy Caviar Dip" height="201" src="https://media.phillyvoice.com/media/images/CowboyCaviarDip.2e16d0ba.fill-380x201.jpg" width="380">
                    
                    <h1>Healthy Recipe: Cowboy Caviar Dip</h1>
                    </a>
                </li>
            
                <li>
                    <a href="/quick-and-easy-middle-eastern-delight-healthy-recipe-059991/">
                    
                        <img alt="Limited - Middle Eastern Delight IBX" height="201" src="https://media.phillyvoice.com/media/images/MiddleEasternDelight.2e16d0ba.fill-380x201.jpg" width="380">
                    
                    <h1>Healthy Recipe: Quick and Easy Middle Eastern Delight</h1>
                    </a>
                </li>
            
        </ul>
        <div class="bxpager">
        
            <a data-slide-index="0" href="">
                
                    <div class="overlay"></div>
                    <img alt="Limited - Mediterranean Potato Soup" class="lazy-gallery" height="60" data-original="https://media.phillyvoice.com/media/images/Mediterranean_Potato_Soup.2e16d0ba.fill-124x60.jpg" width="124"><noscript><img alt="Limited - Mediterranean Potato Soup" class="lazy-gallery" height="60" src="https://media.phillyvoice.com/media/images/Mediterranean_Potato_Soup.2e16d0ba.fill-124x60.jpg" width="124"></noscript>
                
            </a>
        
            <a data-slide-index="1" href="">
                
                    <div class="overlay"></div>
                    <img alt="Limited - Chinese-Style Chicken nâ Cauliflower Rice" class="lazy-gallery" height="60" data-original="https://media.phillyvoice.com/media/images/chinesestylechickenrice.2e16d0ba.fill-124x60.jpg" width="124"><noscript><img alt="Limited - Chinese-Style Chicken nâ Cauliflower Rice" class="lazy-gallery" height="60" src="https://media.phillyvoice.com/media/images/chinesestylechickenrice.2e16d0ba.fill-124x60.jpg" width="124"></noscript>
                
            </a>
        
            <a data-slide-index="2" href="">
                
                    <div class="overlay"></div>
                    <img alt="Limited - Healthy Recipe - Cauliflower Cream Mac and Cheese" class="lazy-gallery" height="60" data-original="https://media.phillyvoice.com/media/images/cauliflowermacandcheese.2e16d0ba.fill-124x60.jpg" width="124"><noscript><img alt="Limited - Healthy Recipe - Cauliflower Cream Mac and Cheese" class="lazy-gallery" height="60" src="https://media.phillyvoice.com/media/images/cauliflowermacandcheese.2e16d0ba.fill-124x60.jpg" width="124"></noscript>
                
            </a>
        
            <a data-slide-index="3" href="">
                
                    <div class="overlay"></div>
                    <img alt="Limited - Moon Milk IBX Recipe" class="lazy-gallery" height="60" data-original="https://media.phillyvoice.com/media/images/moonmilk.2e16d0ba.fill-124x60.jpg" width="124"><noscript><img alt="Limited - Moon Milk IBX Recipe" class="lazy-gallery" height="60" src="https://media.phillyvoice.com/media/images/moonmilk.2e16d0ba.fill-124x60.jpg" width="124"></noscript>
                
            </a>
        
            <a data-slide-index="4" href="">
                
                    <div class="overlay"></div>
                    <img alt="Limited - Healthy Recipe Cowboy Caviar Dip" class="lazy-gallery" height="60" data-original="https://media.phillyvoice.com/media/images/CowboyCaviarDip.2e16d0ba.fill-124x60.jpg" width="124"><noscript><img alt="Limited - Healthy Recipe Cowboy Caviar Dip" class="lazy-gallery" height="60" src="https://media.phillyvoice.com/media/images/CowboyCaviarDip.2e16d0ba.fill-124x60.jpg" width="124"></noscript>
                
            </a>
        
            <a data-slide-index="5" href="">
                
                    <div class="overlay"></div>
                    <img alt="Limited - Middle Eastern Delight IBX" class="lazy-gallery" height="60" data-original="https://media.phillyvoice.com/media/images/MiddleEasternDelight.2e16d0ba.fill-124x60.jpg" width="124"><noscript><img alt="Limited - Middle Eastern Delight IBX" class="lazy-gallery" height="60" src="https://media.phillyvoice.com/media/images/MiddleEasternDelight.2e16d0ba.fill-124x60.jpg" width="124"></noscript>
                
            </a>
        
        </div>
    </div>
</div>

                                        
                                    
                                
                            
                            </div>
                            
                        
                    
                        
                            
                                






<div class="article-widget">
    


    <div class="sponsor">
        
         
            <a href="http://www.ibew98.org/" target="_blank" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBEW-Sports-2019', {'nonInteraction': 1});"><img  alt="IBEW - Logo - 195x33" height="21" src="https://media.phillyvoice.com/media/images/IBEW-195x33.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBEW-Sports-2019', {'nonInteraction': 1});"/></a>
        
        
    </div>



    
        <a href="https://www.phillyvoice.com/tags/eagles/">
    
        <h1 class="eagles">
            <span>Eagles</span>
        </h1>
    
        </a>
    

    <div class="article-widget-list">
        
        <div class="article">
            <a href="/eagles-news-rookie-wr-devonta-smith-injury-sprained-knee-timeline-training-camp/">
                
                    
                        <img alt="Devonta-smith-injury_080221_usat" class="article-image lazy-widget" height="200" data-original="https://media.phillyvoice.com/media/images/USATSI_16467689.8e6ae3f9.fill-351x200.jpg" width="351"><noscript><img alt="Devonta-smith-injury_080221_usat" class="article-image lazy-widget" height="200" src="https://media.phillyvoice.com/media/images/USATSI_16467689.8e6ae3f9.fill-351x200.jpg" width="351"></noscript>
                    
                    
                
                <h1>Eagles rookie WR DeVonta Smith out with sprained knee</h1>
            </a>
            
            
        </div>
        
        <div class="article">
            <a href="/report-carson-wentz-eschew-foot-surgery-what-does-it-mean-eagles-058882/">
                
                    
                        <img alt="080221CarsonWentz" class="article-image lazy-widget" height="124" data-original="https://media.phillyvoice.com/media/images/USATSI_16467141_1.db47caf6.fill-132x124.jpg" width="132"><noscript><img alt="080221CarsonWentz" class="article-image lazy-widget" height="124" src="https://media.phillyvoice.com/media/images/USATSI_16467141_1.db47caf6.fill-132x124.jpg" width="132"></noscript>
                    
                    
                
                <h1>Report: Carson Wentz to undergo foot surgery; what does it mean for the Eagles? (update)</h1>
            </a>
            
            
        </div>
        
        <div class="article">
            <a href="/best-new-funny-fantasy-football-team-names-puns-2021-nfl-season-rookies-kyle-pitts-chuba-hubbard/">
                
                    
                        <img alt="060921DeVontaSmith" class="article-image lazy-widget" height="124" data-original="https://media.phillyvoice.com/media/images/EAGL15-e.d66cd275.fill-132x124.jpg" width="132"><noscript><img alt="060921DeVontaSmith" class="article-image lazy-widget" height="124" src="https://media.phillyvoice.com/media/images/EAGL15-e.d66cd275.fill-132x124.jpg" width="132"></noscript>
                    
                    
                
                <h1>Best (new) fantasy football team names for 2021 NFL season</h1>
            </a>
            
            
        </div>
        
    </div>

    
        
            <a href="/sports/" class="sectional-more-link">All Sports</a>
        
    
</div>









                                
                            
                        
                    
                        
                            
                                






<div class="article-widget">
    




    
        <a href="/culture/">
    
        <h1 class="culture">
            <span>Culture</span>
        </h1>
    
        </a>
    

    <div class="article-widget-list">
        
        <div class="article">
            <a href="/i-think-you-should-leave-season-2-review-analysis-netflix-tim-robinson/">
                
                    
                        <img alt="ITYSL-Season-2-Review_070721.jpg" class="article-image lazy-widget" height="200" data-original="https://media.phillyvoice.com/media/images/IThinkYouShouldLeavewithTimRobinso.81303234.fill-351x200.jpg" width="351"><noscript><img alt="ITYSL-Season-2-Review_070721.jpg" class="article-image lazy-widget" height="200" src="https://media.phillyvoice.com/media/images/IThinkYouShouldLeavewithTimRobinso.81303234.fill-351x200.jpg" width="351"></noscript>
                    
                    
                
                <h1>&#39;I Think You Should Leave&#39; ramps up the absurdity in uneven Season 2</h1>
            </a>
            
            
        </div>
        
        <div class="article">
            <a href="/2021-bet-awards-winners-album-of-the-year-jazmine-sullivan-heaux-tales/">
                
                    
                        <img alt="BET Awards Jazmine Sullivan" class="article-image lazy-widget" height="124" data-original="https://media.phillyvoice.com/media/images/062821_bet_awards_jazmine_sullivan.2e16d0ba.fill-132x124.jpg" width="132"><noscript><img alt="BET Awards Jazmine Sullivan" class="article-image lazy-widget" height="124" src="https://media.phillyvoice.com/media/images/062821_bet_awards_jazmine_sullivan.2e16d0ba.fill-132x124.jpg" width="132"></noscript>
                    
                    
                
                <h1>Jazmine Sullivan wins Album of the Year for &#39;Heaux Tales&#39; at 2021 BET Awards</h1>
            </a>
            
            
        </div>
        
        <div class="article">
            <a href="/new-hulu-july-2021-questlove-summer-soul-movies-films-shows-streaming/">
                
                    
                        <img alt="New Hulu July Summer of Soul" class="article-image lazy-widget" height="124" data-original="https://media.phillyvoice.com/media/images/062721_hulu_july_summer_of_soul.2e16d0ba.fill-132x124.jpg" width="132"><noscript><img alt="New Hulu July Summer of Soul" class="article-image lazy-widget" height="124" src="https://media.phillyvoice.com/media/images/062721_hulu_july_summer_of_soul.2e16d0ba.fill-132x124.jpg" width="132"></noscript>
                    
                    
                
                <h1>Questlove&#39;s &#39;Summer of Soul&#39; highlights new titles coming to Hulu in July</h1>
            </a>
            
            
        </div>
        
    </div>

    
        
            <a href="/culture/" class="sectional-more-link">All Culture</a>
        
    
</div>









                                
                            
                        
                    
                        
                            
                                









<div class="philly-list-widget">
    


    <div class="sponsor">
        
         
            <a href="https://www.ibx.com/index.jsp?utm_source=Philly%20Voice&amp;utm_medium=Banner&amp;utm_campaign=Philly%20Voice&amp;utm_content=SON" target="_blank" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBC-EvntBble-021316', {'nonInteraction': 1});"><img  alt="IBC - Native (195x33)" height="21" src="https://media.phillyvoice.com/media/images/30-15-304217_IBC_LF_Logo_195x33_DB.focus-none.max-125x32.jpg" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBC-EvntBble-021316', {'nonInteraction': 1});"/></a>
        
        
    </div>


    
        <a href="https://www.phillyvoice.com/events/">
    
        <h1 class="events">
            <span>Events</span>
        </h1>
    
        </a>
    

    

    <div class="article-widget-feature-image">
        
            
                <a href="/philly-tailgate-games-wells-fargo-center-competition-prizes-tickets/">
                    <img alt="Philly Tailgate Games at Wells Fargo Center" class="article-image lazy-widget" height="260" data-original="https://media.phillyvoice.com/media/images/21721_Tailgate_Games_Wells_Fargo.2e16d0ba.fill-328x260.jpg" width="328"><noscript><img alt="Philly Tailgate Games at Wells Fargo Center" class="article-image lazy-widget" height="260" src="https://media.phillyvoice.com/media/images/21721_Tailgate_Games_Wells_Fargo.2e16d0ba.fill-328x260.jpg" width="328"></noscript>
                </a>
                <p class="article-widget-caption">Teams can compete in cornhole, ladder golf, washers and Jenga for prizes, like a year of free beer and Flyers season tickets, at the Philly Tailgate Games at the Wells Fargo Center.</p>
            
        
    </div>
    <div class="article-widget-list">
        
        <div class="article">
            <a href="/philly-tailgate-games-wells-fargo-center-competition-prizes-tickets/">
                <h1><span>1</span>Compete for prizes in the Philly Tailgate Games</h1>
            </a>
        </div>
        
        <div class="article">
            <a href="/harry-potter-exhibition-franklin-institute-philadelphia/">
                <h1><span>2</span>Harry Potter exhibit opening</h1>
            </a>
        </div>
        
        <div class="article">
            <a href="/shakespeare-clark-park-2021-outdoor-theater-philly-summer/">
                <h1><span>3</span>Shakespeare in Clark Park returns</h1>
            </a>
        </div>
        
    </div>
    
        
            <a href="/events/" class="sectional-more-link">All Events</a>
        
    
</div>






                                
                            
                        
                    
                </div>
            
        
        </div>

        <div class="right-content-column">
            




<div class="right-rail">
    
    
        <div class="just-in">
            
            <h2><span>Just&nbsp;In</span></h2>
            
            <ul>
                
                    <li><a href="/mead-tasting-devils-den-upper-reach-meadery/" onClick="ga('send', 'event', 'Just In', 'Link Click', 'mead-tasting-devils-den-upper-reach-meadery', {'nonInteraction': 1});">Devil&#39;s Den hosting mead tasting with Bucks County&#39;s Upper Reach Meadery</a></li>
                
                    <li><a href="/coronavirus-vaccine-mandate-new-jersey-health-care-hospitals-nursing-homes-covid/" onClick="ga('send', 'event', 'Just In', 'Link Click', 'coronavirus-vaccine-mandate-new-jersey-health-care-hospitals-nursing-homes-covid', {'nonInteraction': 1});">New Jersey health care workers must get vaccinated or face regular COVID-19 testing</a></li>
                
                    <li><a href="/nba-trade-rumors-sixers-tobias-harris-rockets-buddy-hield-ben-simmons-cj-mcollum-kemba-walker/" onClick="ga('send', 'event', 'Just In', 'Link Click', 'nba-trade-rumors-sixers-tobias-harris-rockets-buddy-hield-ben-simmons-cj-mcollum-kemba-walker', {'nonInteraction': 1});">NBA trade rumors: Are the Sixers shopping Tobias Harris?</a></li>
                
                    <li><a href="/charles-barkley-covid-19-vaccine-bob-costas-hbo/" onClick="ga('send', 'event', 'Just In', 'Link Click', 'charles-barkley-covid-19-vaccine-bob-costas-hbo', {'nonInteraction': 1});">Charles Barkley says pro athletes who refuse COVID-19 vaccine are &#39;selfish&#39;</a></li>
                
                    <li><a href="/philadelphia-restaurants-coronavirus-vaccination-requirement-martha-irwins-upstairs/" onClick="ga('send', 'event', 'Just In', 'Link Click', 'philadelphia-restaurants-coronavirus-vaccination-requirement-martha-irwins-upstairs', {'nonInteraction': 1});">Two Philadelphia restaurants implement COVID-19 vaccination policies for diners</a></li>
                
                    <li><a href="/philadelphia-road-conditions-study-chamber-commerce-artificial-intelligence/" onClick="ga('send', 'event', 'Just In', 'Link Click', 'philadelphia-road-conditions-study-chamber-commerce-artificial-intelligence', {'nonInteraction': 1});">Philly has the best roads in the country, according to AI study of major US cities</a></li>
                
            </ul>
        </div>
    
    
	<div class="placement placement-skyscraper">
		<!-- pv-general-hpmr-atf-1 -->
		<div id='ad_right_rail_above_fold'>
		<script type='text/javascript'>
		googletag.cmd.push(function() { googletag.display('ad_right_rail_above_fold'); });
		</script>
		</div>
	</div>



        
            

            <div class="rail-widget recommend loading">
                <a href="/health/"><h2 class="ahealthierphilly"><span class="ahp-logo"></span></h2></a>
                
                <div id="bibblio-healthierphilly-textonly"></div>
            </div>

            
                




<div class="sponsored-article-widget">
    <h2 class="sponsored"><span>Sponsored</span></h2>
    <div class="articles-wrap">
    
        <div class="article native-sponsor child-1">
            
            <div class="article-inner">
                <div class="article-text">
                    <p class="section">
                        <a href="/tags/outdoors/">Outdoors</a>
                    </p>
                    <a href="/lenapehoking-watershed-alliance-watershed-education-delaware-river-0599923/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'lenapehoking-watershed-alliance-watershed-education-delaware-river-0599923', {'nonInteraction': 1});">
                        <h1>Experience the wonders of Lenapehoking Watershed: a place for water, art and culture</h1>
                    </a>
                    
                    
                        


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://www.watershedalliance.org" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'AWE-Native-072821-Lenapehoking', {'nonInteraction': 1});" target="_blank">
            <img  alt="River Days Sponsorship Badge 2" height="21" src="https://media.phillyvoice.com/media/images/195x33_V4.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'AWE-Native-072821-Lenapehoking', {'nonInteraction': 1});"/></a>
        

        
    </div>


                    
                </div>
                
                <div class="article-image">
                    <a href="/lenapehoking-watershed-alliance-watershed-education-delaware-river-0599923/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'lenapehoking-watershed-alliance-watershed-education-delaware-river-0599923', {'nonInteraction': 1});"><img alt="Migration by Sarah Kavage.jpg" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/Migration_by_Sarah_KavageMigration.2e16d0ba.fill-100x100.jpg" width="100"></a>
                </div>
                
            </div>
            
        </div>
    
        <div class="article native-sponsor child-2">
            
            <div class="article-inner">
                <div class="article-text">
                    <p class="section">
                        <a href="/tags/construction/">Construction</a>
                    </p>
                    <a href="/ibew-local-98-women-construction-camp-recruitment-event-0599927/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'ibew-local-98-women-construction-camp-recruitment-event-0599927', {'nonInteraction': 1});">
                        <h1>IBEW Local 98 hosts âWomen in Constructionâ Camp to recruit more young women into Building Trades jobs</h1>
                    </a>
                    
                    
                        


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="http://www.ibew98.org/" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBEW-Native-072721-WomenConstruction', {'nonInteraction': 1});" target="_blank">
            <img  alt="IBEW - Logo - 195x33" height="21" src="https://media.phillyvoice.com/media/images/IBEW-195x33.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBEW-Native-072721-WomenConstruction', {'nonInteraction': 1});"/></a>
        

        
    </div>


                    
                </div>
                
                <div class="article-image">
                    <a href="/ibew-local-98-women-construction-camp-recruitment-event-0599927/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'ibew-local-98-women-construction-camp-recruitment-event-0599927', {'nonInteraction': 1});"><img alt="Limited - Women in Construction 4" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/womeninconstruction4.6f5beda9.fill-100x100.jpg" width="100"></a>
                </div>
                
            </div>
            
        </div>
    
        <div class="article native-sponsor child-3">
            
            <div class="article-inner">
                <div class="article-text">
                    <p class="section">
                        <a href="/tags/real-estate/">Real Estate</a>
                    </p>
                    <a href="/how-make-your-real-estate-offer-stand-out-philadelphia-prevu-0599959/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'how-make-your-real-estate-offer-stand-out-philadelphia-prevu-0599959', {'nonInteraction': 1});">
                        <h1>How to make your real estate offer stand out in Philadelphia</h1>
                    </a>
                    
                    
                        


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://buy.prevu.com/philadelphia/philly-voice?utm_source=philly-voice&amp;utm_medium=post&amp;utm_campaign=stand-out-offer" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'Prevu-Native-071321-MakeOffer', {'nonInteraction': 1});" target="_blank">
            <img  alt="Limited - PreVu Sponsorship Badge" height="21" src="https://media.phillyvoice.com/media/images/PrevuPVBadge.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'Prevu-Native-071321-MakeOffer', {'nonInteraction': 1});"/></a>
        

        
    </div>


                    
                </div>
                
                <div class="article-image">
                    <a href="/how-make-your-real-estate-offer-stand-out-philadelphia-prevu-0599959/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'how-make-your-real-estate-offer-stand-out-philadelphia-prevu-0599959', {'nonInteraction': 1});"><img alt="Philly neighborhoods looking ahead to Center City" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/CITY_SHOTS-27_ABaHKH5.2e16d0ba.fill-100x100.jpg" width="100"></a>
                </div>
                
            </div>
            
        </div>
    
        <div class="article native-sponsor child-4">
            
            <div class="article-inner">
                <div class="article-text">
                    <p class="section">
                        <a href="/tags/adult-health/">Adult Health</a>
                    </p>
                    <a href="/heart-rate-high-low-pulse-059991/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'heart-rate-high-low-pulse-059991', {'nonInteraction': 1});">
                        <h1>What you need to know about heart rate</h1>
                    </a>
                    
                    
                        


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://www.ibx.com/index.jsp" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'IBC-Native-072321-HeartRate', {'nonInteraction': 1});" target="_blank">
            <img  alt="IBC - Native (195x33)" height="21" src="https://media.phillyvoice.com/media/images/30-15-304217_IBC_LF_Logo_195x33_DB.focus-none.max-125x32.jpg" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'IBC-Native-072321-HeartRate', {'nonInteraction': 1});"/></a>
        

        
    </div>


                    
                </div>
                
                <div class="article-image">
                    <a href="/heart-rate-high-low-pulse-059991/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'heart-rate-high-low-pulse-059991', {'nonInteraction': 1});"><img alt="Anatomy of human heart" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/iStock-1250937342.073d8ad7.fill-100x100.jpg" width="100"></a>
                </div>
                
            </div>
            
        </div>
    
        <div class="article native-sponsor child-5">
            
            <div class="article-inner">
                <div class="article-text">
                    <p class="section">
                        <a href="/tags/real-estate/">Real Estate</a>
                    </p>
                    <a href="/5-philadelphia-neighborhoods-watch-first-time-homebuyer-prevu-real-estate-0599959/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', '5-philadelphia-neighborhoods-watch-first-time-homebuyer-prevu-real-estate-0599959', {'nonInteraction': 1});">
                        <h1>5 Philly neighborhoods to watch as a first-time homebuyer</h1>
                    </a>
                    
                    
                        


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://buy.prevu.com/philadelphia/philly-voice?utm_source=philly-voice&amp;utm_medium=post&amp;utm_campaign=neighborhoods-to-watch" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'Prevu-Native-012121-5Neighborhoods', {'nonInteraction': 1});" target="_blank">
            <img  alt="Limited - PreVu Sponsorship Badge" height="21" src="https://media.phillyvoice.com/media/images/PrevuPVBadge.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'Prevu-Native-012121-5Neighborhoods', {'nonInteraction': 1});"/></a>
        

        
    </div>


                    
                </div>
                
                <div class="article-image">
                    <a href="/5-philadelphia-neighborhoods-watch-first-time-homebuyer-prevu-real-estate-0599959/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', '5-philadelphia-neighborhoods-watch-first-time-homebuyer-prevu-real-estate-0599959', {'nonInteraction': 1});"><img alt="Limited - General view of Fishtown" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/CITY_SHOTS-30.2e16d0ba.fill-100x100.jpg" width="100"></a>
                </div>
                
            </div>
            
        </div>
    
        <div class="article native-sponsor child-6">
            
            <div class="article-inner">
                <div class="article-text">
                    <p class="section">
                        <a href="/tags/addiction/">Addiction</a>
                    </p>
                    <a href="/guide-vacationing-recovery-recovery-centers-of-america-0599992/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'guide-vacationing-recovery-recovery-centers-of-america-0599992', {'nonInteraction': 1});">
                        <h1>A guide to vacationing in recovery</h1>
                    </a>
                    
                    
                        


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://recoverycentersofamerica.com/?utm_medium=website&amp;utm_source=phillyvoice.com&amp;utm_campaign=phillyvoice-article-july-2021&amp;phone=844-634-0770" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'RCA-Native-071321-VacationRecovery', {'nonInteraction': 1});" target="_blank">
            <img  alt="Limited - RCA at Devon Sponsorship Badge" height="21" src="https://media.phillyvoice.com/media/images/RCOA195x33.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'RCA-Native-071321-VacationRecovery', {'nonInteraction': 1});"/></a>
        

        
    </div>


                    
                </div>
                
                <div class="article-image">
                    <a href="/guide-vacationing-recovery-recovery-centers-of-america-0599992/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'guide-vacationing-recovery-recovery-centers-of-america-0599992', {'nonInteraction': 1});"><img alt="The Ocean City Boardwalk in New Jersey" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/35209288844_f0df9d3e32_c.2e16d0ba.fill-100x100.jpg" width="100"></a>
                </div>
                
            </div>
            
        </div>
    
        <div class="article native-sponsor child-7">
            
            <div class="article-inner">
                <div class="article-text">
                    <p class="section">
                        <a href="/tags/real-estate/">Real Estate</a>
                    </p>
                    <a href="/real-estate-gallery-47-jackson-road--medford-nj-08055-anne-koons-0599917/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'real-estate-gallery-47-jackson-road--medford-nj-08055-anne-koons-0599917', {'nonInteraction': 1});">
                        <h1>GALLERY: Tour this massive estate set on 20 wooded acres in South Jersey</h1>
                    </a>
                    
                    
                        


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="http://annekoonsrealestate.com/?search-listings=true?utm_source=PhillyVoice&amp;utm_medium=Display2019&amp;utm_campaign=AnneKoonsPhillyVoice" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'AKoons-Native-070821-47Jackson', {'nonInteraction': 1});" target="_blank">
            <img  alt="Anne Koons - Native 020715" height="21" src="https://media.phillyvoice.com/media/images/a_k_home_list_bdg.focus-none.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'AKoons-Native-070821-47Jackson', {'nonInteraction': 1});"/></a>
        

        
    </div>


                    
                </div>
                
                <div class="article-image">
                    <a href="/real-estate-gallery-47-jackson-road--medford-nj-08055-anne-koons-0599917/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'real-estate-gallery-47-jackson-road--medford-nj-08055-anne-koons-0599917', {'nonInteraction': 1});"><img alt="Limited - 47 Jackson Rd - Aerial" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/47_Jackson_Rd_Aerial.2e16d0ba.fill-100x100.png" width="100"></a>
                </div>
                
            </div>
            
        </div>
    
        <div class="article native-sponsor child-8">
            
            <div class="article-inner">
                <div class="article-text">
                    <p class="section">
                        <a href="/tags/real-estate/">Real Estate</a>
                    </p>
                    <a href="/how-save-thousands-when-buying-your-home-philadelphia-0599959/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'how-save-thousands-when-buying-your-home-philadelphia-0599959', {'nonInteraction': 1});">
                        <h1>How to save thousands when buying a home in Philly</h1>
                    </a>
                    
                    
                        


    
    <div class="sponsor native">
        
            by
             
        
         
            <a href="https://buy.prevu.com/philadelphia/philly-voice?utm_source=philly-voice&amp;utm_medium=post&amp;utm_campaign=prevu_intro" onClick="ga('send', 'event', 'Sponsor Clicks', 'Click', 'Prevu-Native-031720', {'nonInteraction': 1});" target="_blank">
            <img  alt="Limited - PreVu Sponsorship Badge" height="21" src="https://media.phillyvoice.com/media/images/PrevuPVBadge.max-125x32.png" width="125" onload="ga('send', 'event', 'Sponsor Imps', 'Impression', 'Prevu-Native-031720', {'nonInteraction': 1});"/></a>
        

        
    </div>


                    
                </div>
                
                <div class="article-image">
                    <a href="/how-save-thousands-when-buying-your-home-philadelphia-0599959/" onClick="ga('send', 'event', 'Sponsored', 'Link Click', 'how-save-thousands-when-buying-your-home-philadelphia-0599959', {'nonInteraction': 1});"><img alt="Limited - Philly neighborhood car lined street" class="article-image" height="100" src="https://media.phillyvoice.com/media/images/PhillyRowhomePrevu.2e16d0ba.fill-100x100.png" width="100"></a>
                </div>
                
            </div>
            
        </div>
    
    </div>
</div>

            
            
            
                

	<div class="placement placement-300-250">
		<div id='ad_right_rail_below_fold'>
		<script type='text/javascript'>
		googletag.cmd.push(function() { googletag.display('ad_right_rail_below_fold'); });
		</script>
		</div>
	</div>


            
        

    







    


    <div class="featured">
        <h2 class="featured-headline"><span>Featured Homes</span></h2>

    
    
        <div class="article child">
            <a href="https://allandomb.com/homes-for-sale-details/227-31-S-6TH-STREET-3SW-PHILADELPHIA-PA-19106/PAPH2004242/530/" target="_blank" onClick="ga('send', 'event', 'RealEstate Clicks', 'Click', '072621-227-31-6th-st-3sw', {'nonInteraction': 1});">
                <img  alt="Limited - 227-31 S 6TH STREET #3SW" height="140" src="https://media.phillyvoice.com/media/images/227-31_S_6TH_STREET_3SW.2e16d0ba.fill-265x140.jpg" width="265" class='featured-img'>
                <h1>FOR SALE! Custom-built showplace in the Lippincott on Washington Square. 3 bed (or 2 bed + home office), 3.5 bath resdeince that has been architecturally designed to incorporate historical and modern design elements. 4,517 sqft | $3,695,000</h1>
            </a>
            
        </div>
    
    
        <div class="article child">
            <a href="https://allandomb.com/homes-for-sale-details/219-29-S-18TH-STREET-709-PHILADELPHIA-PA-19103/PAPH1017628/530/" target="_blank" onClick="ga('send', 'event', 'RealEstate Clicks', 'Click', '072621-219-29-s-18th-st-709', {'nonInteraction': 1});">
                <img  alt="Limited - 219-29 S 18TH STREET #709" height="140" src="https://media.phillyvoice.com/media/images/219-29_S_18TH_STREET_709.2e16d0ba.fill-265x140.jpg" width="265" class='featured-img'>
                <h1>FOR RENT! One-of-a-kind 2 bed, 2.5 bath with a private terrace that sits atop Rittenhouse Square! Private terrace accessible via the living/dining area Great room with coffered ceilings and generous entertaining space. 1,552 sqft | $6,500/mo</h1>
            </a>
            
        </div>
    

        <div class="article">
            <a href="http://bit.ly/ADFeaturedHomes" target="_blank" rel="noopener"><h6>Listed by</h6></a>
        </div>
    </div>


    
</div>

<div id="civsci_cont" data-civicscience-widget="4eab79a8-5c7d-31d4-318a-43853d6c1fe6"></div>

        </div>
    </div>

        </div>

        
        
    <div id='mfoot-btf'>
        <script type='text/javascript'>
            googletag.cmd.push(function() { googletag.display('mfoot-btf'); });
        </script>
    </div>

        

        




	
	<div class="footer -sponsor-footer">
	

		<div class="footer-inner">
			<ul>
				
					
				        
						<li>
							
								
									
										<a href="/about-us/">About Us</a>
									
								
							
						</li>
					
				        
						<li>
							
								
									<a href="https://www.phillyvoicemedia.com">Advertise</a>
								
							
						</li>
					
				        
						<li>
							
								
									
										<a href="/contact-us/">Contact Us</a>
									
								
							
						</li>
					
				        
						<li>
							
								
									
										<a href="/legal-privacy-ethics/">Legal / Privacy</a>
									
								
							
						</li>
					
				        
						<li>
							
								
									
										<a href="/staff-contributors/">Staff / Contributors</a>
									
								
							
						</li>
					
				        
						<li>
							
								
									
										<a href="/rss-feeds/">RSS</a>
									
								
							
						</li>
					
				
			</ul>
			
			<p class="copyright">&copy; 2021 WWB Holdings, LLC. All rights reserved</p>
		</div>
	</div>


    
    
        <script type="text/javascript" src="https://media.phillyvoice.com/static/CACHE/js/output.37d97397ed69.js"></script>
        <!-- Start of Bibblio RCM includes -->
        <link rel="stylesheet" type="text/css" href="https://cdn.bibblio.org/rcm/4.22/bib-related-content.min.css">
        <script src="https://cdn.bibblio.org/rcm/4.22/bib-related-content.min.js"></script>
        <!-- End of Bibblio RCM includes -->
        
        <script type="text/javascript" src="https://a.optmnstr.com/app/js/api.min.js" data-account="58293" data-user="51791" async></script>
        
    
    <script type="text/javascript">;$(document).ready(function(index){var featured_articles_length=$('.featured-article').length;function trim_article_headlines(){if(featured_articles_length==3){$('.featured-article h1:not(.first-headline)').fitText(1.6,{maxFontSize:'30px'});$('.featured-article h2').each(function(){$clamp(this,{clamp:2,useNativeClamp:false,splitOnChars:['.','?','!',',',' ','-','_','â']});});$('.featured-article h1.first-headline').fitText(1.1,{maxFontSize:'36px'});}else if(featured_articles_length==2){$('.featured-article h1').fitText(1.6,{maxFontSize:'30px'});}else if($('.standout-header').length==1){$('.standout-header h1').slabText({headerBreakpoint:480,fontRatio:.9,minCharsPerLine:7});}}
$(window).on("pv_resize",function(e){trim_article_headlines();});trim_article_headlines();$("img.lazy-right-rail-home").lazyload({threshold:200});$(window).on('load',function(){$.ajax({url:window.STATIC_URL+'global/jquery.bxslider/jquery.bxslider.min.js?v=4.2.15r',}).done(function(){$('.gallery-widget').each(function(index){var bxslider=$(this).find('.bxslider');var bxpager=$(this).find('.bxpager');var class_name='bxpager'+index;bxpager.addClass(class_name);bxpager.addClass('loaded');bxslider.bxSlider({pagerCustom:$('.'+class_name),controls:false,onSliderLoad:function(){bxslider.addClass('loaded');}});imagesLoaded(bxslider,function(){bxslider.redrawSlider();});});});});});</script>
    <script type="text/javascript" charset="utf-8">
        $(document).ready(function() {
            Bibblio.init([{
                type: "rcm",
                options: {
                    customCatalogueIds: ['Health'],
                    recommendationType: 'popular',
                    targetElementId: "bibblio-healthierphilly-textonly",
                    recommendationKey: "73233a89-346b-42a3-bda1-5e44337b96b8",
                    offset: "1",
                    styleClasses: "bib--txt-6 bib--size-14",
                    queryStringParams: {utm_source:"Bibblio", utm_medium: "text_widget"}
                }, 
                callbacks: {
                    onRecommendationsRendered: function(recs) {
                        $('.bib__title span').each(function(i) {
                            var newTitle = $(this).text().replace(/\s\|.*$/, '');
                            $(this).text(newTitle);
                        });
                        $('.recommend.loading').removeClass('loading');
                    }
                }
            }]);
        });
    </script>


    
        
            <script type="text/javascript">
adroll_adv_id = "DVLY2XANAFCZFOLBCYXEHP";
adroll_pix_id = "KOJCYOJQ6FC5RBY7J25SWH";
(function () {
var oldonload = window.onload;
window.onload = function(){
   __adroll_loaded=true;
   var scr = document.createElement("script");
   var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
   scr.setAttribute('async', 'true');
   scr.type = "text/javascript";
   scr.src = host + "/j/roundtrip.js";
   ((document.getElementsByTagName('head') || [null])[0] ||
    document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
   if(oldonload){oldonload()}};
}());
</script>

<script type="text/javascript">
adroll_adv_id = "DVLY2XANAFCZFOLBCYXEHP";
adroll_pix_id = "KOJCYOJQ6FC5RBY7J25SWH";
(function () {
var oldonload = window.onload;
window.onload = function(){
   __adroll_loaded=true;
   var scr = document.createElement("script");
   var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
   scr.setAttribute('async', 'true');
   scr.type = "text/javascript";
   scr.src = host + "/j/roundtrip.js";
   ((document.getElementsByTagName('head') || [null])[0] ||
    document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
   if(oldonload){oldonload()}};
}());
</script>
 <script type="text/javascript">
 adroll_segments = "conversion"
</script>
        
    

    </body>
</html>