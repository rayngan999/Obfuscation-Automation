
<!DOCTYPE html>
<html lang="en" dir="ltr" prefix="og: https://ogp.me/ns#" class="page--campaign-studio--acquia">
<head>
<meta charset="utf-8" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"930db91ef2",applicationID:"646476417"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(){}function i(t,e,n){return function(){return o(t,[u.now()].concat(f(arguments)),e?null:this,n),e?void 0:this}}var o=t("handle"),a=t(8),f=t(9),c=t("ee").get("tracer"),u=t("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(t,e){s[e]=i(p+e,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),e.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(l+"tracer",[u.now(),t,n],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(l+e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),o("err",[t,u.now(),!1,e])}},{}],2:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],3:[function(t,e,n){function r(){return f.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,f=t(10);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],4:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],5:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?d("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&d("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||d("cls",[t])})}function a(t){if(t instanceof m&&!g){var e=Math.round(t.timeStamp),n={type:t.type};e<=p.now()?n.fid=p.now()-e:e>p.offset&&e<=Date.now()?(e-=p.offset,n.fid=p.now()-e):e=p.now(),g=!0,d("timing",["fi",e,n])}}function f(t){"hidden"===t&&d("pageHide",[p.now()])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var c,u,s,d=t("handle"),p=t("loader"),l=t(7),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){c=new PerformanceObserver(r);try{c.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,h=["click","keydown","mousedown","pointerdown","touchstart"];h.forEach(function(t){document.addEventListener(t,a,!1)})}l(f)}},{}],6:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}e.exports={agent:i,version:o,match:r}},{}],7:[function(t,e,n){function r(t){function e(){t(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,e,!1)}e.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],8:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],9:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],10:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?u(t,c,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){t&&a&&t(n,r,i);for(var f=e(i),c=v(n),u=c.length,s=0;s<u;s++)c[s].apply(f,r);var p=d[w[n]];return p&&p.push([b,n,r,f]),f}}function o(t,e){y[t]=v(t).concat(e)}function m(t,e){var n=y[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function v(t){return y[t]||[]}function g(t){return p[t]=p[t]||i(n)}function h(t,e){l.aborted||s(t,function(t,n){e=e||"feature",w[n]=e,e in d||(d[e]=[])})}var y={},w={},b={on:o,addEventListener:o,removeEventListener:m,emit:n,get:g,listeners:v,context:e,buffer:h,abort:f,aborted:!1};return b}function o(t){return u(t,c,a)}function a(){return new r}function f(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var c="nr@context",u=t("gos"),s=t(8),d={},p={},l=e.exports=i();e.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!R++){var t=M.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();c(E,function(e,n){t[e]||(t[e]=n)});var n=a();f("mark",["onload",n+M.offset],null,"api"),f("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=l+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===v.readyState&&o()}function o(){f("mark",["domContent",a()+M.offset],null,"api")}var a=t(3),f=t("handle"),c=t(8),u=t("ee"),s=t(6),d=t(4),p=t(2),l=p.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,g="addEventListener",h="attachEvent",y=m.XMLHttpRequest,w=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var x=""+location,E={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1210.min.js"},O=y&&w&&w[g]&&!/CriOS/.test(navigator.userAgent),M=e.exports={offset:a.getLastTimestamp(),now:a,origin:x,features:{},xhrWrappable:O,userAgent:s,disabled:b};if(!b){t(1),t(5),v[g]?(v[g]("DOMContentLoaded",o,!1),m[g]("load",r,!1)):(v[h]("onreadystatechange",i),m[h]("onload",r)),f("mark",["firstbyte",a.getLastTimestamp()],null,"api");var R=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,c],s],t)}f(n+"start",[o,a,c],s,u);try{return p=e.apply(a,o)}catch(m){throw f(n+"err",[o,a,m],s,u),m}finally{f(n+"end",[o,a,p],s,u)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var f,c,u,s="-"===r.charAt(0);for(u=0;u<e.length;u++)c=e[u],f=t[c],a(f)||(t[c]=n(f,s?c+r:r,i,c,o))}function f(n,r,o,a){if(!m||e){var f=m;m=!0;try{t.emit(n,r,o,e,a)}catch(c){i([c,n,r,o],t)}m=f}}return t||(t=s),n.inPlace=r,n.flag=p,n}function i(t,e){e||(e=s);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function f(t,e){var n=e(t);return n[p]=t,o(t,n,s),n}function c(t,e,n){var r=t[e];t[e]=f(r,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var s=t("ee"),d=t(9),p="nr@original",l=Object.prototype.hasOwnProperty,m=!1;e.exports=r,e.exports.wrapFunction=f,e.exports.wrapInPlace=c,e.exports.argsToArray=u},{}]},{},["loader"]);</script>
<meta itemprop="acquia_lift:content_title" content="Campaign Studio" />
<meta itemprop="acquia_lift:content_type" content="product" />
<meta itemprop="acquia_lift:page_type" content="node page" />
<meta itemprop="acquia_lift:context_language" content="en" />
<meta itemprop="acquia_lift:content_section" content="Acquia Campaign Studio" />
<meta itemprop="acquia_lift:content_keywords" content="" />
<meta itemprop="acquia_lift:post_id" content="22631" />
<meta itemprop="acquia_lift:content_uuid" content="9f8cac74-ec62-40fd-9088-1fd6585ab35c" />
<meta itemprop="acquia_lift:published_date" content="1609878016" />
<meta itemprop="acquia_lift:persona" content="" />
<meta itemprop="acquia_lift:engagement_score" content="1" />
<meta itemprop="acquia_lift:account_id" content="NEWACQUIACOMCHPROD" />
<meta itemprop="acquia_lift:site_id" content="www_acquia_com" />
<meta itemprop="acquia_lift:liftAssetsURL" content="https://builder.lift.acquia.com" />
<meta itemprop="acquia_lift:liftDecisionAPIURL" content="https://us-east-1-decisionapi.lift.acquia.com" />
<meta itemprop="acquia_lift:bootstrapMode" content="auto" />
<meta itemprop="acquia_lift:cdfVersion" content="2" />
<script src="https://builder.lift.acquia.com/lift.js" async></script>
<script>window.dataLayer = window.dataLayer || []; window.dataLayer.push({"drupalLanguage":"en","drupalCountry":"","siteName":"Acquia","entityCreated":"1609878016","entityLangcode":"en","entityStatus":"1","entityUuid":"9f8cac74-ec62-40fd-9088-1fd6585ab35c","entityType":"node","entityBundle":"product","entityId":"22631","entityTitle":"Campaign Studio","entityTaxonomy":{"product":{"30756":"Acquia Campaign Studio"}},"userUid":0,"entityCreatedDate":"01\/05\/2021"});</script>
<meta name="twitter:card" content="summary_large_image" />
<meta property="og:site_name" content="Acquia" />
<link rel="canonical" href="https://www.acquia.com/products/marketing-cloud/campaign-studio" />
<meta name="twitter:title" content="Campaign Studio" />
<meta name="twitter:description" content="&quot;Drive multichannel marketing campaigns that increase ROI. Easily orchestrate the entire customer journey within weeks of using Campaign Studio.&quot;" />
<meta name="description" content="&quot;Drive multichannel marketing campaigns that increase ROI. Easily orchestrate the entire customer journey within weeks of using Campaign Studio.&quot;" />
<meta property="og:title" content="Campaign Studio" />
<meta property="og:description" content="&quot;Drive multichannel marketing campaigns that increase ROI. Easily orchestrate the entire customer journey within weeks of using Campaign Studio.&quot;" />
<meta name="twitter:image" content="https://www.acquia.com/sites/default/files/media/image/2020-12/Campaign-Studio.png" />
<meta property="og:image" content="https://www.acquia.com/sites/default/files/media/image/2020-12/Campaign-Studio.png" />
<meta name="Generator" content="Drupal 9 (https://www.drupal.org)" />
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="a24e2475-5645-426c-9794-6eedb3eae77c"></script>
<script type="text/javascript">
function OptanonWrapper() { }
</script>
<link rel="shortcut icon" href="/themes/custom/juice/favicon.ico" type="image/vnd.microsoft.icon" />
<link rel="alternate" hreflang="en" href="https://www.acquia.com/products/marketing-cloud/campaign-studio" />
<link rel="alternate" hreflang="fr" href="https://www.acquia.com/fr/products/marketing-cloud/campaign-studio" />
<link rel="alternate" hreflang="es" href="https://www.acquia.com/es/products/marketing-cloud/campaign-studio" />
<link rel="alternate" hreflang="de" href="https://www.acquia.com/de/products/marketing-cloud/campaign-studio" />
<link rel="alternate" hreflang="ja" href="https://www.acquia.com/jp/products/marketing-cloud/campaign-studio" />
<link rel="revision" href="https://www.acquia.com/products/marketing-cloud/campaign-studio" />
<script src="/sites/default/files/google_tag/google_tag/acquia.com_d9/google_tag.script.js?qwpf6t" defer></script>
<title>Campaign Studio | Acquia</title>
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_q18vFNz3vVs9u-ltuWmTYJRXMPWg_xdBVF0VIqCopSU.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/cohesion/styles/base/juice-stylesheet.min.css?qwpf6t" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_KqsqW1Sho451Za6OYLUcqVdUvw2Yn3ReeCk--Q50hE4.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/cohesion/styles/theme/juice-stylesheet.min.css?qwpf6t" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_SKtoze1rnS2_q0Jw31Gp_DZrL4Rew8WKhgjrJ1pz1kw.css" />
<link rel="stylesheet" media="all" href="/sites/default/files/css/css_6XcNG1_QlKZR9wq6oOGBcod3fWhQLFfrMP4ScOMb1Do.css" />
<script src="/themes/custom/juice/vendor/modernizr/modernizr.min.js?v=3.8.0"></script>
<script src="/core/misc/modernizr-additional-tests.js?v=3.8.0"></script>
<style>/* Generated on Tue, 13 Jul 2021 16:42:49 GMT */

 </style>
<style>/* Generated on Tue, 13 Jul 2021 16:42:49 GMT */

 </style>
</head>
<body class="language--en path-node page-node-type-product">
<a href="#main-content" class="visually-hidden focusable">
Skip to main content
</a>
<noscript aria-hidden="true"><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K97M6S" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>
<div class="region-container">
<div class="region--utility">
<div data-drupal-messages-fallback class="hidden"></div>
</div>
<header role="banner" class="region--header">
<div id="block-juice-branding" class="settings-tray-editable block block--juice-branding" data-drupal-settingstray="editable">
<a href="/" rel="home">
<img src="/themes/custom/juice/logo.svg" class="block--juice-branding__logo" alt="Home" />
</a>
</div>
<nav role="navigation" aria-labelledby="block-mainnavigation-menu" id="block-mainnavigation" class="settings-tray-editable block block--main-navigation" data-drupal-settingstray="editable">
<h2 class="visually-hidden" id="block-mainnavigation-menu">Main navigation</h2>
<button class="menu--main__toggle-button js--menu--main__toggle-button menu__toggle-button js--menu__toggle-button" aria-hidden="true">
<span class="menu--main__toggle-button__inner js--menu--main__toggle-button__iner menu__toggle-button__inner js--menu__toggle-button__inner"></span>
Menu
</button>
<ul class="menu menu--main menu-level-0">
<li class="menu-item menu-item--expanded menu__link--why-acquia menu__link menu--main__link js__menu--main__link">
<span class="menu-item menu-item--expanded menu__link--why-acquia js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element">Why Acquia?</span>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Why Acquia?</span></span>
<ul class="menu menu--main menu-level-1">
<li class="menu-item menu-item--expanded js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/digital-experience-platform" class="menu-item menu-item--expanded js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22966">Deliver Digital Experiences</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Deliver Digital Experiences</span></span>
<ul class="menu menu--main menu-level-2">
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/acquia-experience-platform" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/24421">The Composable Experience Platform</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">The Composable Experience Platform</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/digital-experience-platform/digital-transformation" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22866">Faster Digital Transformation</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Faster Digital Transformation</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/drupal" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22826">Next Generation Drupal 9</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Next Generation Drupal 9</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/digital-experience-platform/acquia-in-action" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22971">Tools Backed By Experience</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Tools Backed By Experience</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/digital-experience-platform/customer-success" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22771">World-Class Support</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">World-Class Support</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="https://www.drupal.org" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element">Global Community of Drupal Experts</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Global Community of Drupal Experts</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/partners/finder" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="partners/finder">World-Class Agency Partners</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">World-Class Agency Partners</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/support/training-certification/acquia-certification" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/23066">Drupal Certification</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Drupal Certification</span></span>
</li>
</ul>
</li>
<li class="menu-item menu-item--expanded js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/marketer-solutions" class="menu-item menu-item--expanded js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22951">Marketer Solutions</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Marketer Solutions</span></span>
<ul class="menu menu--main menu-level-2">
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/composable-engagement" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/24586">Composable Engagement</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Composable Engagement</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/marketer-solutions/personalized-digital-experiences" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22716">Personalized Digital Experiences</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Personalized Digital Experiences</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/marketer-solutions/marketing-automation" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22906">Marketing Automation</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Marketing Automation</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
 <a href="/why-acquia/marketer-solutions/customer-data-and-analytics" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22816">Customer Data and Analytics</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Customer Data and Analytics</span></span>
</li>
</ul>
</li>
<li class="menu-item menu-item--expanded js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/cms-solutions" class="menu-item menu-item--expanded js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22831">CMS Solutions</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">CMS Solutions</span></span>
<ul class="menu menu--main menu-level-2">
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/composable-architecture" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/24636">Composable Architecture</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Composable Architecture</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22746">#1 Platform for Drupal</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">#1 Platform for Drupal</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/enterprise-drupal-savings-calculator" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/24261">Acquia vs DIY Drupal ROI Calculator</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Acquia vs DIY Drupal ROI Calculator</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/cms-solutions/enterprise-content-management" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22946">Enterprise Functionality</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Enterprise Functionality</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/cms-solutions/agile-cms" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22876">Agile CMS</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Agile CMS</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/digital-ecosystem-management-and-scalability" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22786">Digital Ecosystem Management</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Digital Ecosystem Management</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/cms-solutions/digital-security-and-compliance" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22881">Digital Security and Compliance</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Digital Security and Compliance</span></span>
</li>
</ul>
</li>
<li class="menu-item menu-item--expanded js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/industries" class="menu-item menu-item--expanded js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/23151">Industries We Serve</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Industries We Serve</span></span>
<ul class="menu menu--main menu-level-2">
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/industries/government" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/23156">Government</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Government</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/industries/education" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/23181">Education</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Education</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/acquia-digital-commerce" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/23386">eCommerce</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">eCommerce</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/industries/healthcare" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/23186">Healthcare</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Healthcare</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/industries/consumer-brands" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/23166">Consumer Brands</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Consumer Brands</span></span>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/why-acquia/industries" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/23151">See All Industries</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">See All Industries</span></span>
</li>
</ul>
</li>
</ul>
</li>
<li class="menu-item menu-item--expanded menu-item--active-trail menu__link menu--main__link js__menu--main__link">
<span class="menu-item menu-item--expanded menu-item--active-trail js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element">Products</span>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Products</span></span>
<ul class="menu menu--main menu-level-1">
<li class="menu-item menu-item--expanded menu__link--drupal-cloud js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud" class="menu-item menu-item--expanded menu__link--drupal-cloud js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22746">Drupal Cloud</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Drupal Cloud</span></span>
<ul class="menu menu--main menu-level-2">
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud/acquia-cms" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22651">Acquia CMS</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Acquia CMS</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2021-03/CMS_icon_0.png" width="513" height="604" alt="Acquia CMS Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud/cloud-platform" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22681">Cloud Platform</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Cloud Platform</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Cloud-Platform-Logo.png" width="999" height="1177" alt="Cloud Platform Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud/acquia-migrate-accelerate" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/25846">Migrate Accelerate</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Migrate Accelerate</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Acquia-CMS-Migrate-Logo.png" width="980" height="1153" alt="CMS Migrate Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud/acquia-migrate-re-platform" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/25841">Migrate Re-platform</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Migrate Re-platform</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2021-06/Producticon_2020__Migrate%20Replatform.png" width="513" height="603" alt="Migrate Re-platform" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud/site-studio" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/13346">Site Studio</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Site Studio</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Site-Studio-Logo.png" width="995" height="1176" alt="Site Studio Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud/cloud-ide" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22706">Cloud IDE</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Cloud IDE</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Acquia-Cloud-IDE-Logo.png" width="980" height="1153" alt="Cloud IDE Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud/edge" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22696">Edge</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Edge</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Edge-CDN-Logo.png" width="1000" height="1176" alt="Edge CDN Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud/site-factory" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22736">Site Factory</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Site Factory</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Site-Factory-Logo.png" width="999" height="1176" alt="Site Factory Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/drupal-cloud/content-hub" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22666">Content Hub</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Content Hub</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2021-01/Content-Hub-Logo.png" width="997" height="1172" alt="Content Hub Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
</ul>
</li>
<li class="menu-item menu-item--expanded menu-item--active-trail menu__link--marketing-cloud js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/marketing-cloud" class="menu-item menu-item--expanded menu-item--active-trail menu__link--marketing-cloud js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22761">Marketing Cloud</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Marketing Cloud</span></span>
<ul class="menu menu--main menu-level-2">
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/marketing-cloud/customer-data-platform" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22641">Customer Data Platform</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Customer Data Platform</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
 <div> <img src="/sites/default/files/media/image/2020-12/Acquia-CDP-Logo.png" width="999" height="1180" alt="Customer Data Platform Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/marketing-cloud/personalization" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22646">Personalization</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Personalization</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Personalization-Logo.png" width="995" height="1176" alt="Personalization Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item menu-item--active-trail js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/marketing-cloud/campaign-studio" class="menu-item menu-item--active-trail js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element is-active" data-drupal-link-system-path="node/22631">Campaign Studio</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Campaign Studio</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Campaign-Studio.png" width="995" height="1176" alt="Campaign Studio Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/marketing-cloud/campaign-factory" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/22636">Campaign Factory</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Campaign Factory</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Campaign-Factory-Logo.png" width="996" height="1175" alt="Campaign Factory Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/products/marketing-cloud/dam" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="node/421">DAM</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">DAM</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Acquia-DAM-Logo.png" width="1000" height="1137" alt="Acquia DAM Logo" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
</ul>
</li>
</ul>
</li>
<li class="menu-item menu-item--expanded menu__link--resources menu__link menu--main__link js__menu--main__link">
<span class="menu-item menu-item--expanded menu__link--resources js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element">Resources</span>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Resources</span></span>
<ul class="menu menu--main menu-level-1">
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/resources" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="resources">Resource Center</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Resource Center</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2021-01/all-resources.png" width="1090" height="1000" alt="Resource Center Icon" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/blog" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="blog">Blog</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Blog</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Blog-Logo-Blue.png" width="838" height="1004" alt="Blog Logo Blue" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/resources/case-studies" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="resources/case-studies">Success Stories</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Success Stories</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Case-Studies-Logo-Pink.png" width="371" height="475" alt="Case Studies Logo Pink" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/resources/datasheets" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="resources/datasheets">Datasheets</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Datasheets</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Datasheet-Logo-Orange.png" width="850" height="1004" alt="Datasheet Logo Orange" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/resources/whitepapers" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="resources/whitepapers">White Papers</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">White Papers</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Whitepapers-Logo-Blue.png" width="504" height="492" alt="White Papers Logo Blue" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/resources/ebooks" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="resources/ebooks">E-Books</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">E-Books</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/E-Books-Logo-Pink.png" width="1004" height="1004" alt="E-Books Logo Pink" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/resources/videos" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="resources/videos">Videos</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Videos</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Video-Logo-Orange.png" width="504" height="354" alt="Videos Logo Orange" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
<li class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element menu__link menu--main__link">
<a href="/events" class="menu-item js__menu--main__link menu__link__element js__menu--main__link__element menu--main__link__element" data-drupal-link-system-path="events">Events &amp; Webinars</a>
<span class="js--show-menu-subnav"><span class="js--show-menu-subnav__label">Events &amp; Webinars</span></span>
<div class="field field--name-field-icon field--type-entity-reference field--label-hidden field__item"><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <img src="/sites/default/files/media/image/2020-12/Events-and-Webinars-Logo-Blue.png" width="1004" height="900" alt="Events and Webinars Logo Blue" loading="lazy" />
</div>
</div>
</article>
</div>
</li>
</ul>
</li>
</ul>
</nav>
<nav role="navigation" aria-labelledby="block-utility-menu" id="block-utility" class="settings-tray-editable block block--utility" data-drupal-settingstray="editable">
<h2 class="visually-hidden" id="block-utility-menu">Utility</h2>
<ul class="menu menu--utility menu-level-0">
<li class="menu-item menu__link menu--utility__link js__menu--utility__link menu__link--0">
<a href="https://cloud.acquia.com/" class="menu-item js__menu--utility__link menu__link--0 menu__link__element js__menu--utility__link__element menu--utility__link__element">Login</a>
</li>
<li class="menu-item menu-item--expanded language-selector menu__link menu--utility__link js__menu--utility__link menu__link--0">
<span class="menu-item menu-item--expanded language-selector js__menu--utility__link menu__link--0 menu__link__element js__menu--utility__link__element menu--utility__link__element">Language</span>
<ul class="menu menu--utility menu-level-1">
<li class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element menu__link menu--utility__link">
<a href="https://www.acquia.com/" class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element">English</a>
</li>
<li class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element menu__link menu--utility__link">
<a href="https://www.acquia.com/de" class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element">Deutsch</a>
</li>
<li class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element menu__link menu--utility__link">
<a href="https://www.acquia.com/fr" class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element">FranÃ§ais</a>
</li>
<li class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element menu__link menu--utility__link">
<a href="https://www.acquia.com/es" class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element">EspaÃ±ol</a>
</li>
<li class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element menu__link menu--utility__link">
<a href="https://www.acquia.com/jp" class="menu-item js__menu--utility__link menu__link--1 menu__link__element js__menu--utility__link__element menu--utility__link__element">æ¥æ¬èª</a>
</li>
</ul>
<div class="language-selector-item">
language-selector
</div>
</li>
<li class="menu-item menu__link menu--utility__link js__menu--utility__link menu__link--0">
<a href="/search" class="menu-item js__menu--utility__link menu__link--0 menu__link__element js__menu--utility__link__element menu--utility__link__element" data-drupal-link-system-path="search">Search</a>
</li>
<li class="menu-item menu__link menu--utility__link js__menu--utility__link menu__link--0">
<a href="/about-us/contact/request-a-demo" class="menu-item js__menu--utility__link menu__link--0 menu__link__element js__menu--utility__link__element menu--utility__link__element" data-drupal-link-system-path="node/22806">Request a Demo</a>
</li>
</ul>
</nav>
</header>
<main role="main">
<span id="main-content" tabindex="-1"></span>
<div class="region--pre-content">
</div>
<div class="region--content">
<article role="article" class="ct-product ct-product--full">
<div class="site-studio">
<div id="ss-component-a9b7c4a1-062e-498a-8945-06ffbc970479" class="selected-theme-color--pink ss-product-header">
<div class="ss-product-header__container">
<span class="ss-product-header__grid" aria-hidden="true"></span>
<div class="ss-product-header__content">
<div class="ss-product-header__content__container">
<span class="ss-product-header__type">
<picture>
<source srcset="/sites/default/files/styles/product_header_icon/public/media/image/2020-12/Campaign-Studio.png?itok=htnk70X7 1x, /sites/default/files/styles/product_header_icon_retina/public/media/image/2020-12/Campaign-Studio.png?itok=Ck90Pymp 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/product_header_icon/public/media/image/2020-12/Campaign-Studio.png?itok=htnk70X7 1x, /sites/default/files/styles/product_header_icon_retina/public/media/image/2020-12/Campaign-Studio.png?itok=Ck90Pymp 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/product_header_icon/public/media/image/2020-12/Campaign-Studio.png?itok=htnk70X7 1x, /sites/default/files/styles/product_header_icon_retina/public/media/image/2020-12/Campaign-Studio.png?itok=Ck90Pymp 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/product_header_icon/public/media/image/2020-12/Campaign-Studio.png?itok=htnk70X7" alt="" loading="lazy" />
</picture>
Campaign Studio
</span>
<h1 class="ss-product-header__title">Marketing automation made simple</h1>
<p class="ss-product-header__description">Make meaningful connections at every touch point. Build campaigns across multiple channels to engage your customers at the right time and in the right way.</p>
<div class="ss-product-header__cta"><a href="https://www.acquia.com/about-us/contact/request-a-demo">Request A Demo</a></div>
</div>
</div>
</div>
</div>
<div id="ss-component-4e42cb9f-cb66-435d-b3fb-1efbd35ce6dd" class="ss-railroad-accordion">
<div class="ss-railroad-accordion__navigation">
<div class="ss-railroad-accordion__navigation__menu-container">
<ul class="ss-railroad-accordion__navigation__menu">
<li class="ss-railroad-accordion__navigation__menu__item">
<a href="#manage-campaigns-efficiently">
Manage Campaigns Efficiently
</a>
</li>
<li class="ss-railroad-accordion__navigation__menu__item">
<a href="#build-your-tech-ecosystem">
Build Your Tech Ecosystem
</a>
</li>
<li class="ss-railroad-accordion__navigation__menu__item">
<a href="#easily-customize-touch-points">
Easily Customize Touch Points
</a>
</li>
</ul>
</div>
</div>
<div class="ss-railroad-accordion__sections">
<div class="ss-railroad-accordion-text-image-stripe ss-railroad-accordion__section" id="manage-campaigns-efficiently" x-data="{ active: true }" x-bind:class="{ active: active }">
<div class="ss-railroad-accordion-text-image-stripe__container">
<div class="ss-railroad-accordion-text-image-stripe__image">
<div class="image-container">
</div>
</div>
<div class="ss-railroad-accordion-text-image-stripe__content">
<div class="ss-railroad-accordion-text-image-stripe__content__container">
<a href="#" class="ss-railroad-accordion-text-image-stripe__content__tagline ss-railroad-accordion__section-trigger" x-on:click="$event.preventDefault(); active = !active">
Manage Campaigns Efficiently
</a>
<div class="ss-railroad-accordion__section-dropdown">
<h1 class="ss-railroad-accordion-text-image-stripe__content__title">Automate And Optimize</h1>
<div class="ss-railroad-accordion-text-image-stripe__content__body ckeditor ckeditor--white">
<p>Acquia Campaign Studio has everything you need to improveÂ efficiency without complicating campaign management. Design, automate and optimize.</p> <h5><span><span><span><strong><span><span>Segmentation</span></span></strong></span></span></span></h5> <p><span><span><span><span><span><span>Easily build audiences based on behavior and customize campaigns tailor-made for individuals and groups alike</span></span></span></span></span></span></p> <h5><span><span><span><strong><span><span>Lead scoring</span></span></strong></span></span></span></h5> <p><span><span><span><span><span><span>Track leads throughout the entire lifecycle with an out of the box points system or a customized scoring system that works for your business </span></span></span></span></span></span></p> <h5><span><span><span><strong><span><span>Contact list management</span></span></strong></span></span></span><span><span><span><span><span><span> </span></span></span></span></span></span></h5> <p><span><span><span><span><span><span>Easily manage your contact hygiene, and ensure GDPR compliance and cookie management without the headache</span></span></span></span></span></span>Â manual opt-in/out sorting</p>
</div>
<div class="ss-railroad-accordion-text-image-stripe__content__cta"><a href="https://www.acquia.com/landing/try-campaign-studio-sandbox">Try A Sandbox</a></div>
</div>
</div>
</div>
</div>
</div>
<div class="ss-railroad-accordion-text ss-railroad-accordion__section" id="build-your-tech-ecosystem" x-data="{ active: false }" x-bind:class="{ active: active }">
<div class="ss-railroad-accordion-text__container">
<span class="ss-railroad-accordion-text__grid" aria-hidden="true"></span>
<div class="ss-railroad-accordion-text__image"> <picture>
<source srcset="/sites/default/files/styles/railroad_accordion_text/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=Fl2wMoaZ 1x, /sites/default/files/styles/railroad_accordion_text_retina/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=4Db7Ykpx 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/railroad_accordion_text/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=Fl2wMoaZ 1x, /sites/default/files/styles/railroad_accordion_text_retina/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=4Db7Ykpx 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/railroad_accordion_text/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=Fl2wMoaZ 1x, /sites/default/files/styles/railroad_accordion_text_retina/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=4Db7Ykpx 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/railroad_accordion_text/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=Fl2wMoaZ" alt="" loading="lazy" />
</picture>
</div>
<div class="ss-railroad-accordion-text__content">
<div class="ss-railroad-accordion-text__content__container">
<a href="#" class="ss-railroad-accordion-text__tagline ss-railroad-accordion__section-trigger" x-on:click="$event.preventDefault(); active = !active">
Build Your Tech Ecosystem
</a>
<div class="ss-railroad-accordion__section-dropdown">
<h2 class="ss-railroad-accordion-text__title">Integrations</h2>
<div class="ss-railroad-accordion-text__body ckeditor ckeditor--white">
<p><span><span><span><span><span><span>Connect Acquia Campaign Studio with the rest of your marketing technology, including your CRM, to optimize end to end omni channel experiences for your customers.</span></span></span></span></span></span></p>
</div>
<div class="ss-railroad-accordion-text__content__image"> <picture>
<source srcset="/sites/default/files/styles/railroad_accordion_text/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=Fl2wMoaZ 1x, /sites/default/files/styles/railroad_accordion_text_retina/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=4Db7Ykpx 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/railroad_accordion_text/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=Fl2wMoaZ 1x, /sites/default/files/styles/railroad_accordion_text_retina/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=4Db7Ykpx 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/railroad_accordion_text/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=Fl2wMoaZ 1x, /sites/default/files/styles/railroad_accordion_text_retina/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=4Db7Ykpx 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/railroad_accordion_text/public/media/image/2021-07/cs_test_ecosystem_0.png?h=94e9434a&amp;itok=Fl2wMoaZ" alt="" loading="lazy" />
</picture>
</div>
<div class="ss-railroad-accordion-text__cta"><a href="https://www.acquia.com/why-acquia/integrations">See Our Integrations</a></div>
</div>
</div>
</div>
</div>
</div>
<div class="ss-railroad-accordion-text-cards ss-railroad-accordion__section" id="easily-customize-touch-points" x-data="{ active: false }" x-bind:class="{ active: active }">
<div class="ss-railroad-accordion-text-cards__content">
<div class="ss-railroad-accordion-text-cards__content__container">
<a href="#" class="ss-railroad-accordion-text-cards__content__tagline ss-railroad-accordion__section-trigger" x-on:click="$event.preventDefault(); active = !active">
Easily Customize Touch Points
</a>
<div class="ss-railroad-accordion__section-dropdown">
<h1 class="ss-railroad-accordion-text-cards__content__title">Design and Deliver</h1>
<div class="ss-railroad-accordion-text-cards__content__description"></div>
<div class="ss-railroad-accordion-text-cards__content__items">
<div class="ss-railroad-accordion-text-cards__content__item ckeditor ckeditor--white"><article><div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Quality-Content-Created-Simply.png?itok=colg3-TS 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Quality-Content-Created-Simply.png?itok=GoqE_3KR 2x" media="all and (min-width: 1024px)" type="image/png"></source><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Quality-Content-Created-Simply.png?itok=colg3-TS 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Quality-Content-Created-Simply.png?itok=GoqE_3KR 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png"></source><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Quality-Content-Created-Simply.png?itok=colg3-TS 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Quality-Content-Created-Simply.png?itok=GoqE_3KR 2x" media="all and (max-width: 619px)" type="image/png"></source><img src="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Quality-Content-Created-Simply.png?itok=colg3-TS" alt="[Icon - White] Trophy w/ Star on it" loading="lazy" /></picture></div>
</div>
</article><h5><strong>Quality DESIGNEDÂ simply</strong></h5> <p>With Campaign Studio's visual email builder, you can develop engaging, responsive contentÂ through an intuitive drag &amp; drop interfaceÂ with HTML or a WYSIWIG editor.Â Start with a template or build it from scratch for a seamless, customized experience.</p></div>
<div class="ss-railroad-accordion-text-cards__content__item ckeditor ckeditor--white"><article><div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Empathy-with-Insight.png?itok=jWKRDP8U 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Empathy-with-Insight.png?itok=QjsOnRkl 2x" media="all and (min-width: 1024px)" type="image/png"></source><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Empathy-with-Insight.png?itok=jWKRDP8U 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Empathy-with-Insight.png?itok=QjsOnRkl 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png"></source><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Empathy-with-Insight.png?itok=jWKRDP8U 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Empathy-with-Insight.png?itok=QjsOnRkl 2x" media="all and (max-width: 619px)" type="image/png"></source><img src="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Empathy-with-Insight.png?itok=jWKRDP8U" alt="[Icon - White] Magnifying Glass w/ Man Inside" loading="lazy" /></picture></div>
</div>
</article><h5>END-TO-END CUSTOMIZATION</h5> <p>Acquia Campaign Studio allows you toÂ <span><span><span><span><span><span>createÂ and edit campaign pages all within one platform, so you can easily design and automateÂ every element.Â </span></span></span></span></span></span>Manage campaigns from start to finish to personalize every stop along the way inÂ your customer's journey.</p></div>
<div class="ss-railroad-accordion-text-cards__content__item ckeditor ckeditor--white"><article><div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Make-it-Personal.png?itok=_boQGsPL 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Make-it-Personal.png?itok=WXLTaE_H 2x" media="all and (min-width: 1024px)" type="image/png"></source><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Make-it-Personal.png?itok=_boQGsPL 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Make-it-Personal.png?itok=WXLTaE_H 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png"></source><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Make-it-Personal.png?itok=_boQGsPL 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Make-it-Personal.png?itok=WXLTaE_H 2x" media="all and (max-width: 619px)" type="image/png"></source><img src="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Make-it-Personal.png?itok=_boQGsPL" alt="[Icon - White] Head w/ Speech Bubble" loading="lazy" /></picture></div>
</div>
</article><h5>PErsonalizeD Experiences</h5> <p>Build relationships with your customers by delivering relevant content to individuals or segments at the right time. With Acquia Campaign Studio you can leverage out of the box campaign models based on if/then logicÂ or customize yourÂ <span><span><span><span><span><span>own.</span></span></span></span></span></span></p></div>
<div class="ss-railroad-accordion-text-cards__content__item ckeditor ckeditor--white"><article><div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Drive-Affinity-Loyalty-Revenue.png?itok=pieJopRB 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Drive-Affinity-Loyalty-Revenue.png?itok=bcRZO_6j 2x" media="all and (min-width: 1024px)" type="image/png"></source><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Drive-Affinity-Loyalty-Revenue.png?itok=pieJopRB 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Drive-Affinity-Loyalty-Revenue.png?itok=bcRZO_6j 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png"></source><source srcset="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Drive-Affinity-Loyalty-Revenue.png?itok=pieJopRB 1x, /sites/default/files/styles/wysiwyg_small_icon_retina/public/media/image/2021-01/Drive-Affinity-Loyalty-Revenue.png?itok=bcRZO_6j 2x" media="all and (max-width: 619px)" type="image/png"></source><img src="/sites/default/files/styles/wysiwyg_small_icon/public/media/image/2021-01/Drive-Affinity-Loyalty-Revenue.png?itok=pieJopRB" alt="Drive Affinity Loyalty Revenue" loading="lazy" /></picture></div>
</div>
</article><h5>Seamless DYNAMIC CONTENT</h5> <p>Make your customers feel appreciated. Campaign Studio helps you build relevant,Â personalizedÂ experiences<span><span><span><span><span><span>Â by applying dynamic contentÂ so that selected elementsÂ automatically adjustÂ for each contact.Â </span></span></span></span></span></span></p></div>
</div>
<div class="ss-railroad-accordion-text-cards__content__cta"><a href="/products/marketing-cloud/campaign-studio/email-builder">Learn More About Email Builder</a></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="ss-feature-accordion" x-data="{ index: 0 }">
<div class="ss-feature-accordion__tagline"></div>
<h2 class="ss-feature-accordion__headline">Orchestrate and Optimize</h2>
<div class="ss-feature-accordion__body"></div>
<div class="ss-feature-accordion__container">
<div class="ss-feature-accordion__images">
<div class="ss-feature-accordion__image" x-show="index === 0">
<picture>
<source srcset="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=3D-Kbx9v 1x, /sites/default/files/styles/feature_accordion_desktop_retina/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=wRhm8nNO 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_tablet/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=cWaJiVym 1x, /sites/default/files/styles/feature_accordion_tablet_retina/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=VjjVcqkC 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_mobile/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=mImH9DAJ 1x, /sites/default/files/styles/feature_accordion_mobile_retina/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=dvwlp4lQ 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=3D-Kbx9v" alt="" loading="lazy" />
</picture>
</div>
<div class="ss-feature-accordion__image" x-show="index === 1">
<picture>
<source srcset="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=ysINGVc8 1x, /sites/default/files/styles/feature_accordion_desktop_retina/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=o_hqxRO5 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_tablet/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=99mOxHbC 1x, /sites/default/files/styles/feature_accordion_tablet_retina/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=DFl6qkIr 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_mobile/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=KdEShnqB 1x, /sites/default/files/styles/feature_accordion_mobile_retina/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=tRU6AkOX 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=ysINGVc8" alt="" loading="lazy" />
</picture>
</div>
<div class="ss-feature-accordion__image" x-show="index === 2">
<picture>
<source srcset="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=wzLvrywo 1x, /sites/default/files/styles/feature_accordion_desktop_retina/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=VxWsNYqD 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_tablet/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=OWwVatFB 1x, /sites/default/files/styles/feature_accordion_tablet_retina/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=ViX8yD95 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_mobile/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=rZ21nlzO 1x, /sites/default/files/styles/feature_accordion_mobile_retina/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=Bzbo8LOv 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=wzLvrywo" alt="" loading="lazy" />
</picture>
</div>
<div class="ss-feature-accordion__image" x-show="index === 3">
<picture>
<source srcset="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=VgPNL6tQ 1x, /sites/default/files/styles/feature_accordion_desktop_retina/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=5Stlolbx 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_tablet/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=QF1tBuap 1x, /sites/default/files/styles/feature_accordion_tablet_retina/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=ajEm9Ssb 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_mobile/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=1UUtqHLr 1x, /sites/default/files/styles/feature_accordion_mobile_retina/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=1CR_mU0R 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=VgPNL6tQ" alt="" loading="lazy" />
</picture>
</div>
</div>
<div class="ss-feature-accordion__items">
<div class="ss-feature-accordion__item">
<div class="ss-feature-accordion__mobile-image">
<picture>
<source srcset="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=3D-Kbx9v 1x, /sites/default/files/styles/feature_accordion_desktop_retina/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=wRhm8nNO 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_tablet/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=cWaJiVym 1x, /sites/default/files/styles/feature_accordion_tablet_retina/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=VjjVcqkC 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_mobile/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=mImH9DAJ 1x, /sites/default/files/styles/feature_accordion_mobile_retina/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=dvwlp4lQ 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_journey_builder.jpg?h=773aba08&amp;itok=3D-Kbx9v" alt="" loading="lazy" />
</picture>
</div>
<a href="#" class="ss-feature-accordion__title" x-bind:class="{ active: index === 0 }" x-on:click="$event.preventDefault(); index = 0">
Journey Builder
</a>
<div class="ss-feature-accordion__card" x-bind:class="{ active: index === 0 }">
<p class="ss-feature-accordion__description">
Powerful workflows to map out and execute across channels for a seamless experience that anticipates customer needs and delivers delightful moments at every step.
</p>
<div class="ss-feature-accordion__cta">
<a href="/products/marketing-cloud/campaign-studio/journey-builder">Journey Builder</a>
</div>
</div>
</div>
<div class="ss-feature-accordion__item">
<div class="ss-feature-accordion__mobile-image">
<picture>
<source srcset="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=ysINGVc8 1x, /sites/default/files/styles/feature_accordion_desktop_retina/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=o_hqxRO5 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_tablet/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=99mOxHbC 1x, /sites/default/files/styles/feature_accordion_tablet_retina/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=DFl6qkIr 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_mobile/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=KdEShnqB 1x, /sites/default/files/styles/feature_accordion_mobile_retina/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=tRU6AkOX 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_dashboard.jpg?h=773aba08&amp;itok=ysINGVc8" alt="" loading="lazy" />
</picture>
</div>
<a href="#" class="ss-feature-accordion__title" x-bind:class="{ active: index === 1 }" x-on:click="$event.preventDefault(); index = 1">
Journey Orchestration
</a>
<div class="ss-feature-accordion__card" x-bind:class="{ active: index === 1 }">
<p class="ss-feature-accordion__description">
Onboard and automate coordinated touch points across any channel â established or new â to deliver meaningful experiences where your customers are.
</p>
</div>
</div>
<div class="ss-feature-accordion__item">
<div class="ss-feature-accordion__mobile-image">
<picture>
<source srcset="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=wzLvrywo 1x, /sites/default/files/styles/feature_accordion_desktop_retina/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=VxWsNYqD 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_tablet/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=OWwVatFB 1x, /sites/default/files/styles/feature_accordion_tablet_retina/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=ViX8yD95 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_mobile/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=rZ21nlzO 1x, /sites/default/files/styles/feature_accordion_mobile_retina/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=Bzbo8LOv 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_journey_decision.jpg?h=773aba08&amp;itok=wzLvrywo" alt="" loading="lazy" />
</picture>
</div>
<a href="#" class="ss-feature-accordion__title" x-bind:class="{ active: index === 2 }" x-on:click="$event.preventDefault(); index = 2">
Journey Optimization
</a>
<div class="ss-feature-accordion__card" x-bind:class="{ active: index === 2 }">
<p class="ss-feature-accordion__description">
Receive real-time insights and testing and adjust on the fly to deliver the most compelling experiences for every individual at any given moment, in any given channel.
</p>
</div>
</div>
<div class="ss-feature-accordion__item">
<div class="ss-feature-accordion__mobile-image">
<picture>
<source srcset="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=VgPNL6tQ 1x, /sites/default/files/styles/feature_accordion_desktop_retina/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=5Stlolbx 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_tablet/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=QF1tBuap 1x, /sites/default/files/styles/feature_accordion_tablet_retina/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=ajEm9Ssb 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/feature_accordion_mobile/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=1UUtqHLr 1x, /sites/default/files/styles/feature_accordion_mobile_retina/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=1CR_mU0R 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/feature_accordion_desktop/public/media/image/2021-03/cs_campaign_details.jpg?h=773aba08&amp;itok=VgPNL6tQ" alt="" loading="lazy" />
</picture>
</div>
<a href="#" class="ss-feature-accordion__title" x-bind:class="{ active: index === 3 }" x-on:click="$event.preventDefault(); index = 3">
Journey Analytics
</a>
<div class="ss-feature-accordion__card" x-bind:class="{ active: index === 3 }">
<p class="ss-feature-accordion__description">
Measure results in real-time and continuously adapt and optimize the customer journey to maximize customer satisfaction and lifetime value.
</p>
</div>
</div>
<div class="ss-feature-accordion__global-cta"><a href="/products/marketing-cloud/campaign-studio/features">See All Features</a></div>
</div>
</div>
</div>
<div id="ss-component-9a19a161-5957-43cf-aa91-034cf1a89556" class="selected-background-style--white selected-theme-style--pink ss-mini-product-showcase">
<div class="ss-mini-product-showcase__intro">
<h2 class="ss-mini-product-showcase__image"> <picture>
<source srcset="/sites/default/files/styles/product_showcase/public/media/image/2021-01/Marketing-Cloud.png?itok=x27B6zBs 1x, /sites/default/files/styles/product_showcase_retina/public/media/image/2021-01/Marketing-Cloud.png?itok=GaxLZPUe 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/product_showcase/public/media/image/2021-01/Marketing-Cloud.png?itok=x27B6zBs 1x, /sites/default/files/styles/product_showcase_retina/public/media/image/2021-01/Marketing-Cloud.png?itok=GaxLZPUe 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/product_showcase/public/media/image/2021-01/Marketing-Cloud.png?itok=x27B6zBs 1x, /sites/default/files/styles/product_showcase_retina/public/media/image/2021-01/Marketing-Cloud.png?itok=GaxLZPUe 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/product_showcase/public/media/image/2021-01/Marketing-Cloud.png?itok=x27B6zBs" alt="" loading="lazy" />
</picture>
</h2>
<h2 class="ss-mini-product-showcase__title">Extend your reach</h2>
<div class="ss-mini-product-showcase__description">Amplify customer engagement across your organization</div>
</div>
<div class="ss-mini-product-showcase__products"><ul><li>
<article role="article" class="ct-product ct-product--showcase-card acquia-customer-data-platform">
<a href="/products/marketing-cloud/customer-data-platform" class="ct-product__card-container">
<div class="ct-product__content">
<div class="ct-product__content__icon">
<div><div class="wysiwyg-image wysiwyg-image--icon">
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Acquia-CDP-Logo.png?itok=Wf_AAc9T 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Acquia-CDP-Logo.png?itok=jqVX_BJV 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Acquia-CDP-Logo.png?itok=Wf_AAc9T 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Acquia-CDP-Logo.png?itok=jqVX_BJV 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Acquia-CDP-Logo.png?itok=Wf_AAc9T 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Acquia-CDP-Logo.png?itok=jqVX_BJV 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Acquia-CDP-Logo.png?itok=Wf_AAc9T" alt="Customer Data Platform Logo" loading="lazy" />
</picture>
</div>
</div>
</div>
</div>
</div>
<div class="ct-product__content__title"> <span>Customer Data Platform</span>
</div>
<div class="ct-product__content__description">
<div>Sift through data quickly to generate real, concrete insights that help you connect with customers. </div>
</div>
</div>
</a>
</article>
</li><li>
<article role="article" class="ct-product ct-product--showcase-card acquia-campaign-factory">
<a href="/products/marketing-cloud/campaign-factory" class="ct-product__card-container">
<div class="ct-product__content">
<div class="ct-product__content__icon">
<div><div class="wysiwyg-image wysiwyg-image--icon">
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Campaign-Factory-Logo.png?itok=RA0j7K0m 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Campaign-Factory-Logo.png?itok=1yf7hmT9 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Campaign-Factory-Logo.png?itok=RA0j7K0m 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Campaign-Factory-Logo.png?itok=1yf7hmT9 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Campaign-Factory-Logo.png?itok=RA0j7K0m 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Campaign-Factory-Logo.png?itok=1yf7hmT9 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Campaign-Factory-Logo.png?itok=RA0j7K0m" alt="Campaign Factory Logo" loading="lazy" />
</picture>
</div>
</div>
</div>
</div>
</div>
<div class="ct-product__content__title"> <span>Campaign Factory</span>
</div>
<div class="ct-product__content__description">
<div>Extend your brandâs reach and implement multiple campaigns at once, helping you scale operations efficiently. </div>
</div>
</div>
</a>
</article>
</li><li>
<article role="article" class="ct-product ct-product--showcase-card acquia-personalization">
<a href="/products/marketing-cloud/personalization" class="ct-product__card-container">
<div class="ct-product__content">
<div class="ct-product__content__icon">
<div><div class="wysiwyg-image wysiwyg-image--icon">
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Personalization-Logo.png?itok=lwK7rTSU 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Personalization-Logo.png?itok=m0hqMVbD 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Personalization-Logo.png?itok=lwK7rTSU 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Personalization-Logo.png?itok=m0hqMVbD 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Personalization-Logo.png?itok=lwK7rTSU 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Personalization-Logo.png?itok=m0hqMVbD 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Personalization-Logo.png?itok=lwK7rTSU" alt="Personalization Logo" loading="lazy" />
</picture>
</div>
</div>
</div>
</div>
</div>
<div class="ct-product__content__title"> <span>Personalization</span>
</div>
<div class="ct-product__content__description">
<div>Deliver relevant experiences to your customers that drive engagement, conversion, and loyalty. </div>
</div>
</div>
</a>
</article>
</li></ul></div>
</div>
<div id="ss-component-19cf1c59-4bf1-45cc-823d-7e227272f621" class="ss-case-study-slider" x-data="{
    index: 0,
    timer: null,
    init() {
      this.timer = setInterval(
        () => {
          if (this.index >= 2) {
            this.index = 0
          }
          else {
            this.index++
          }
        },
        8000
      )
    },
    handleClick(event, currentIndex) {
      event.preventDefault()
      clearInterval(this.timer)
      this.index = currentIndex
      this.init()
    }
  }" x-init="init()">
<div class="ss-case-study-slider__slider">
<div x-show="index === 0">
<article role="article" class="ct-case-study ct-case-study--case-study-slider">
<div class="ct-case-study__stat-hero">
<div class="ct-case-study__stat-hero__hero-image">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/case_study_stat_hero_desktop/public/media/image/2021-04/uTest.png?h=854a7be2&amp;itok=WYp_EY-A 1x, /sites/default/files/styles/case_study_stat_hero_desktop_retina/public/media/image/2021-04/uTest.png?h=854a7be2&amp;itok=LeLi51zK 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_hero_tablet/public/media/image/2021-04/uTest.png?h=854a7be2&amp;itok=GrXiYrbj 1x, /sites/default/files/styles/case_study_stat_hero_tablet_retina/public/media/image/2021-04/uTest.png?h=854a7be2&amp;itok=h0RPaaTm 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_hero_mobile/public/media/image/2021-04/uTest.png?h=854a7be2&amp;itok=x1xHjpSO 1x, /sites/default/files/styles/case_study_stat_hero_mobile_retina/public/media/image/2021-04/uTest.png?h=854a7be2&amp;itok=VNxRFXtY 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/case_study_stat_hero_desktop/public/media/image/2021-04/uTest.png?h=854a7be2&amp;itok=WYp_EY-A" alt="Person touching a digital screen with three smiley face icons" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
<div class="ct-case-study__stat-hero__logo">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-08/logo_utest_4.png?itok=1C08QPh6 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-08/logo_utest_4.png?itok=N2an5lxT 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-08/logo_utest_4.png?itok=1C08QPh6 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-08/logo_utest_4.png?itok=N2an5lxT 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-08/logo_utest_4.png?itok=1C08QPh6 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-08/logo_utest_4.png?itok=N2an5lxT 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-08/logo_utest_4.png?itok=1C08QPh6" alt="uTest" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
<a href="/resources/case-studies/utest" class="ct-case-study__stat-hero__logo__link">View entire case study</a>
</div>
<div class="ct-case-study__stat-hero__stat-container">
<div class="paragraph paragraph--type--key-stats paragraph--view-mode--default p-key-stats">
<div class="p-key-stats__number">
<span class="p-key-stats__number__number"> 250
</span>
<span class="p-key-stats__number__suffix"> k
</span>
</div>
<div class="p-key-stats__description"> <p>Professional Software Testers</p>
</div>
</div>
<div class="paragraph paragraph--type--key-stats paragraph--view-mode--default p-key-stats">
<div class="p-key-stats__number">
<span class="p-key-stats__number__prefix">
</span>
<span class="p-key-stats__number__number"> 2
</span>
<span class="p-key-stats__number__suffix"> mil
</span>
</div>
<div class="p-key-stats__description"> <p>Page views per month</p>
</div>
</div>
</div>
</div>
</article>
</div>
<div x-show="index === 1">
<article role="article" class="ct-case-study ct-case-study--case-study-slider">
<div class="ct-case-study__stat-hero">
<div class="ct-case-study__stat-hero__hero-image">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/case_study_stat_hero_desktop/public/media/image/2021-04/Vericel.png?h=854a7be2&amp;itok=fQNMK4Zr 1x, /sites/default/files/styles/case_study_stat_hero_desktop_retina/public/media/image/2021-04/Vericel.png?h=854a7be2&amp;itok=-0dmUx-e 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_hero_tablet/public/media/image/2021-04/Vericel.png?h=854a7be2&amp;itok=qVjacneq 1x, /sites/default/files/styles/case_study_stat_hero_tablet_retina/public/media/image/2021-04/Vericel.png?h=854a7be2&amp;itok=JHZGj8Xu 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_hero_mobile/public/media/image/2021-04/Vericel.png?h=854a7be2&amp;itok=W-hfosOU 1x, /sites/default/files/styles/case_study_stat_hero_mobile_retina/public/media/image/2021-04/Vericel.png?h=854a7be2&amp;itok=XIgJBL_F 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/case_study_stat_hero_desktop/public/media/image/2021-04/Vericel.png?h=854a7be2&amp;itok=fQNMK4Zr" alt="Closeup of a gloved hand holding a dish of medical samples" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
<div class="ct-case-study__stat-hero__logo">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/media/image/2021-02/VericelLogo.png?itok=PX0CMCyY 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/media/image/2021-02/VericelLogo.png?itok=HMffA4Ql 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/media/image/2021-02/VericelLogo.png?itok=PX0CMCyY 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/media/image/2021-02/VericelLogo.png?itok=HMffA4Ql 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/media/image/2021-02/VericelLogo.png?itok=PX0CMCyY 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/media/image/2021-02/VericelLogo.png?itok=HMffA4Ql 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/case_study_stat_logo/public/media/image/2021-02/VericelLogo.png?itok=PX0CMCyY" alt="Vericel logo" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
<a href="/resources/case-studies/vericel" class="ct-case-study__stat-hero__logo__link">View entire case study</a>
</div>
<div class="ct-case-study__stat-hero__stat-container">
<div class="paragraph paragraph--type--key-stats paragraph--view-mode--default p-key-stats">
<div class="p-key-stats__number">
<span class="p-key-stats__number__number"></span>
</div>
<div class="p-key-stats__description"></div>
</div>
</div>
</div>
</article>
</div>
<div x-show="index === 2">
<article role="article" class="ct-case-study ct-case-study--case-study-slider">
<div class="ct-case-study__stat-hero">
<div class="ct-case-study__stat-hero__hero-image">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/case_study_stat_hero_desktop/public/media/image/2021-04/Rx%20Marketing%20Group.png?h=854a7be2&amp;itok=3fnVrU-Z 1x, /sites/default/files/styles/case_study_stat_hero_desktop_retina/public/media/image/2021-04/Rx%20Marketing%20Group.png?h=854a7be2&amp;itok=DDNlbQGO 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_hero_tablet/public/media/image/2021-04/Rx%20Marketing%20Group.png?h=854a7be2&amp;itok=k45U7DE- 1x, /sites/default/files/styles/case_study_stat_hero_tablet_retina/public/media/image/2021-04/Rx%20Marketing%20Group.png?h=854a7be2&amp;itok=PR1Qa1uT 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_hero_mobile/public/media/image/2021-04/Rx%20Marketing%20Group.png?h=854a7be2&amp;itok=g9rpvKgg 1x, /sites/default/files/styles/case_study_stat_hero_mobile_retina/public/media/image/2021-04/Rx%20Marketing%20Group.png?h=854a7be2&amp;itok=gd-wrJyF 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/case_study_stat_hero_desktop/public/media/image/2021-04/Rx%20Marketing%20Group.png?h=854a7be2&amp;itok=3fnVrU-Z" alt="Men in blue shirts writing on glass whiteboard" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
<div class="ct-case-study__stat-hero__logo">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=IMa2g6Ca 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=55n8eugD 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=IMa2g6Ca 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=55n8eugD 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=IMa2g6Ca 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=55n8eugD 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=IMa2g6Ca" alt="Rx Marketing Group" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
<a href="/resources/case-studies/rx-marketing-group" class="ct-case-study__stat-hero__logo__link">View entire case study</a>
</div>
<div class="ct-case-study__stat-hero__stat-container">
<div class="paragraph paragraph--type--key-stats paragraph--view-mode--default p-key-stats">
<div class="p-key-stats__number">
<span class="p-key-stats__number__prefix"> 40%
</span>
<span class="p-key-stats__number__number"></span>
</div>
<div class="p-key-stats__description"> <p>Reduction in client setup time</p>
</div>
</div>
<div class="paragraph paragraph--type--key-stats paragraph--view-mode--default p-key-stats">
<div class="p-key-stats__number">
<span class="p-key-stats__number__prefix"> 30%
</span>
<span class="p-key-stats__number__number"></span>
</div>
<div class="p-key-stats__description"> <p>Reduction in email and automation expense</p>
</div>
</div>
</div>
</div>
</article>
</div>
</div>
<div class="ss-case-study-slider__slider-controls">
<h3 class="ss-case-study-slider__slider-controls__title">More trusted brands</h3>
<div class="ss-case-study-slider__controller">
<a href="#" class="ss-case-study-slider__controller__item" x-on:click="handleClick($event, 0)">
<div class="ss-case-study-slider__progress">
<div class="ss-case-study-slider__progress-bar" x-bind:class="{ active: index === 0 }"></div>
</div>
<div>
<article role="article" class="ct-case-study ct-case-study--case-study-slider-logo">
<div class="ct-case-study__logo">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-08/logo_utest_4.png?itok=1C08QPh6 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-08/logo_utest_4.png?itok=N2an5lxT 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-08/logo_utest_4.png?itok=1C08QPh6 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-08/logo_utest_4.png?itok=N2an5lxT 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-08/logo_utest_4.png?itok=1C08QPh6 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-08/logo_utest_4.png?itok=N2an5lxT 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-08/logo_utest_4.png?itok=1C08QPh6" alt="uTest" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
</article>
</div>
</a>
<a href="#" class="ss-case-study-slider__controller__item" x-on:click="handleClick($event, 1)">
<div class="ss-case-study-slider__progress">
<div class="ss-case-study-slider__progress-bar" x-bind:class="{ active: index === 1 }"></div>
</div>
<div>
<article role="article" class="ct-case-study ct-case-study--case-study-slider-logo">
<div class="ct-case-study__logo">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/media/image/2021-02/VericelLogo.png?itok=PX0CMCyY 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/media/image/2021-02/VericelLogo.png?itok=HMffA4Ql 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/media/image/2021-02/VericelLogo.png?itok=PX0CMCyY 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/media/image/2021-02/VericelLogo.png?itok=HMffA4Ql 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/media/image/2021-02/VericelLogo.png?itok=PX0CMCyY 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/media/image/2021-02/VericelLogo.png?itok=HMffA4Ql 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/case_study_stat_logo/public/media/image/2021-02/VericelLogo.png?itok=PX0CMCyY" alt="Vericel logo" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
</article>
</div>
</a>
<a href="#" class="ss-case-study-slider__controller__item" x-on:click="handleClick($event, 2)">
<div class="ss-case-study-slider__progress">
<div class="ss-case-study-slider__progress-bar" x-bind:class="{ active: index === 2 }"></div>
</div>
<div>
<article role="article" class="ct-case-study ct-case-study--case-study-slider-logo">
<div class="ct-case-study__logo">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=IMa2g6Ca 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=55n8eugD 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=IMa2g6Ca 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=55n8eugD 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=IMa2g6Ca 1x, /sites/default/files/styles/case_study_stat_logo_retina/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=55n8eugD 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/case_study_stat_logo/public/legacy/images/2019-11/Rx_Marketing_Group_Logo_4.png?itok=IMa2g6Ca" alt="Rx Marketing Group" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
</article>
</div>
</a>
</div>
</div>
</div>
<div id="ss-component-129e81db-5f88-44be-91ee-5b38dcc0ee95" class="ss-card-group__related-content">
<div class="ss-card-group__related-content__header">
<h2 class="ss-card-group__related-content__header__title">Featured Resources</h2>
<a href="/resources">View More Resources</a>
</div>
<div class="ss-card-group__related-content__content">
<ul><li>
<article role="article" class="ct-article ct-article--card">
<a href="/blog/leveraging-marketing-automation-enhance-customer-experiences" class="ct-article__card-container">
<div class="ct-article__image">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/card_desktop/public/media/image/2021-05/marketingautomation2.jpg?h=119335f7&amp;itok=X4nPh5X_ 1x, /sites/default/files/styles/card_desktop_retina/public/media/image/2021-05/marketingautomation2.jpg?h=119335f7&amp;itok=wQmkewxU 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/card_tablet/public/media/image/2021-05/marketingautomation2.jpg?h=119335f7&amp;itok=-zyRdjwV 1x, /sites/default/files/styles/card_tablet_retina/public/media/image/2021-05/marketingautomation2.jpg?h=119335f7&amp;itok=sO50U5IG 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/card_mobile/public/media/image/2021-05/marketingautomation2.jpg?h=119335f7&amp;itok=wsrfCrrY 1x, /sites/default/files/styles/card_mobile_retina/public/media/image/2021-05/marketingautomation2.jpg?h=119335f7&amp;itok=o2c0G0pf 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/card_tablet/public/media/image/2021-05/marketingautomation2.jpg?h=119335f7&amp;itok=-zyRdjwV" alt="personalizing marketing automation" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
<div class="ct-article__content">
<span class="ct-article__content__type product-category--marketing-cloud">Blog</span>
<span class="ct-article__content__title"> <span>Leveraging Marketing Automation to Enhance Customer Experiences</span>
</span>
<span class="ct-article__content__date">05/26/2021</span>
</div>
</a>
</article>
</li><li>
<article role="article" class="ct-resource ct-resource--card">
<a href="/resources/e-book/migrating-marketo-acquia-campaign-studio-guide" class="ct-resource__card-container">
<div class="ct-resource__image">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/card_desktop/public/legacy/images/2020-11/GettyImages-1055897964%20%281%29_3.jpg?itok=QpT_t-X1 1x, /sites/default/files/styles/card_desktop_retina/public/legacy/images/2020-11/GettyImages-1055897964%20%281%29_3.jpg?itok=74L0beFZ 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/card_tablet/public/legacy/images/2020-11/GettyImages-1055897964%20%281%29_3.jpg?itok=KhcrLpYI 1x, /sites/default/files/styles/card_tablet_retina/public/legacy/images/2020-11/GettyImages-1055897964%20%281%29_3.jpg?itok=_hj7duyX 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/card_mobile/public/legacy/images/2020-11/GettyImages-1055897964%20%281%29_3.jpg?itok=f6jFHy-P 1x, /sites/default/files/styles/card_mobile_retina/public/legacy/images/2020-11/GettyImages-1055897964%20%281%29_3.jpg?itok=ieu31RGT 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/card_tablet/public/legacy/images/2020-11/GettyImages-1055897964%20%281%29_3.jpg?itok=KhcrLpYI" alt="Man riding up an escalator toward rainbow in sky" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
<div class="ct-resource__content">
<span class="ct-resource__content__type product-category--marketing-cloud resource-type__30616">E-Book</span>
<span class="ct-resource__content__title"> <span>Migrating From Marketo to Acquia Campaign Studio: A Guide</span>
</span>
<span class="ct-resource__content__date">11/13/2020</span>
</div>
</a>
</article>
</li><li>
<article role="article" class="ct-article ct-article--card">
<a href="/blog/marketers-guide-condensing-email-sends-dynamic-content-acquia-campaign-studio" class="ct-article__card-container">
<div class="ct-article__image">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/card_desktop/public/media/image/2021-05/emailbuilderhero.jpg?h=119335f7&amp;itok=hk-WtYNb 1x, /sites/default/files/styles/card_desktop_retina/public/media/image/2021-05/emailbuilderhero.jpg?h=119335f7&amp;itok=35PXN_D6 2x" media="all and (min-width: 1024px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/card_tablet/public/media/image/2021-05/emailbuilderhero.jpg?h=119335f7&amp;itok=ozzOiCqm 1x, /sites/default/files/styles/card_tablet_retina/public/media/image/2021-05/emailbuilderhero.jpg?h=119335f7&amp;itok=hjnPVlvB 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/jpeg" />
<source srcset="/sites/default/files/styles/card_mobile/public/media/image/2021-05/emailbuilderhero.jpg?h=119335f7&amp;itok=9v1p30JP 1x, /sites/default/files/styles/card_mobile_retina/public/media/image/2021-05/emailbuilderhero.jpg?h=119335f7&amp;itok=j6ug1hak 2x" media="all and (max-width: 619px)" type="image/jpeg" />
<img src="/sites/default/files/styles/card_tablet/public/media/image/2021-05/emailbuilderhero.jpg?h=119335f7&amp;itok=ozzOiCqm" alt="marketing automation email builder" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
<div class="ct-article__content">
<span class="ct-article__content__type product-category--marketing-cloud">Blog</span>
<span class="ct-article__content__title"> <span>How Marketers Can Condense Email Sends with Dynamic Content </span>
</span>
<span class="ct-article__content__date">06/03/2021</span>
</div>
</a>
</article>
</li></ul>
</div>
</div>
</div>
</article>
</div>
<div class="region--post-content">
</div>
</main>
<footer role="contentinfo" class="region--footer">
<div id="block-acquia-in-action" class="settings-tray-editable block block--acquia-in-action" data-drupal-settingstray="editable">
<div>
<div x-data="{ displayText: false }">
<div>
<a href="#" x-on:mouseover="displayText = true" x-on:mouseout="displayText = false" data-micromodal-trigger="acquia-in-action" class="js--micromodal-opener block--acquia-in-action__modal-trigger">
<div class="dot">
<div class="centraldot"></div>
<div class="wave"></div>
<div class="wave2"></div>
</div>
</a>
</div>
<div class="block--acquia-in-action__pop-up-text" x-show="displayText">
Acquia in Action
</div>
</div>
<div id="acquia-in-action" class="block--acquia-in-action__modal" aria-hidden="true">
<div tabindex="-1" data-micromodal-close>
<div role="dialog" aria-modal="true" aria-labelledby="acquia-in-action-title">
<header>
<h2 id="acquia-in-action-title" class="visually-hidden">
Acquia in Action
</h2>
<button aria-label="Close modal" class="block--acquia-in-action__modal-close" data-micromodal-close></button>
</header>
<div id="acquia-in-action-content" class="block--acquia-in-action__modal-content">
<article role="article" class="ct-acquia-in-action ct-acquia-in-action--modal">
<div class="ct-acquia-in-action__container">
<div class="ct-acquia-in-action__video">
<div><article>
<div class="external-video__video-modal-content__video-wrapper">
<div class="oembed-lazyload oembed-lazyload--youtube" data-strategy="intersection-observer">
<a class="oembed-lazyload__button" href="https://www.youtube.com/watch?v=gMb6cvR-O7I" title="Watch Acquia in Action - Campaign Studio" rel="nofollow"><span class="oembed-lazyload__thumbnail" style="background-image: url('https://i.ytimg.com/vi/gMb6cvR-O7I/hqdefault.jpg')"></span></a>
<iframe data-src="/media/oembed?url=https%3A//www.youtube.com/watch%3Fv%3DgMb6cvR-O7I&amp;max_width=0&amp;max_height=0&amp;hash=lmrk9lHXn2IQw8eABZZAH6AI0BpE_M61T2gzrEdwBYQ&amp;oembed_lazyload=1&amp;provider=YouTube&amp;oembed_lazyload_hash=BW3qNs9BxfCYHs3G8soH2IFaRqXj_kvBQm4Xqk3PtLU" frameborder="0" id="oembed-iframe" allowtransparency width="200" height="113" class="media-oembed-content oembed-lazyload__iframe oembed-lazyload__iframe--hidden" title="Acquia in Action - Campaign Studio"></iframe>
</div>
</div>
</article>
</div>
</div>
<div class="ct-acquia-in-action__info">
<div class="ct-acquia-in-action__product">
<div><div id="taxonomy-term-30756" class="tt-product tt-product--acquia-in-action tt-product--acquia-campaign-studio">
<div class="tt-product__icon">
<div><div class="wysiwyg-image wysiwyg-image--icon">
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Campaign-Studio.png?itok=kg5Xcxp5 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Campaign-Studio.png?itok=nmuFK1cP 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Campaign-Studio.png?itok=kg5Xcxp5 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Campaign-Studio.png?itok=nmuFK1cP 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Campaign-Studio.png?itok=kg5Xcxp5 1x, /sites/default/files/styles/two_column_feature_showcase_icon_retina/public/media/image/2020-12/Campaign-Studio.png?itok=nmuFK1cP 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/two_column_feature_showcase_icon/public/media/image/2020-12/Campaign-Studio.png?itok=kg5Xcxp5" alt="Campaign Studio Logo" loading="lazy" />
</picture>
</div>
</div>
</div>
</div>
</div>
<div class="tt-product__name">
<div>Campaign Studio</div>
</div>
</div>
</div>
</div>
<div class="ct-acquia-in-action__body ckeditor ckeditor--white">
<div><h1>Acquia in<br />
Action</h1>
<p>We used Acquia Campaign Studio to build forms and<br />
orchestrate the user journey for Acquia.comÂ </p></div>
</div>
<div class="ct-acquia-in-action__cta">
<div><a href="/about-us/contact/request-a-demo">Request a Demo</a></div>
</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</div>
</div>
<nav role="navigation" aria-labelledby="block-footer-menu" id="block-footer" class="settings-tray-editable block block--footer" data-drupal-settingstray="editable">
<h2 class="visually-hidden" id="block-footer-menu">Footer</h2>
<ul class="menu menu--footer menu-level-0">
<li class="menu-item menu-item--expanded menu__link menu--footer__link js__menu--footer__link menu__link--0" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/about-us" class="menu-item menu-item--expanded js__menu--footer__link menu__link--0 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="node/23381">Company</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-0 menu-type-default">
<ul class="menu menu--footer menu-level-1">

<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/about-us" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="node/23381">About Us</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/careers" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="node/23321">Careers</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/about-us/leadership" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="about-us/leadership">Leadership</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/about-us/newsroom" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="about-us/newsroom">Newsroom</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/about-us/legal" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="node/23441">Legal</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/why-acquia/industries/security" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="node/23146">Security Issue?</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
</ul>
</div>
</li>
<li class="menu-item menu-item--expanded menu__link menu--footer__link js__menu--footer__link menu__link--0" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/partners" class="menu-item menu-item--expanded js__menu--footer__link menu__link--0 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="node/23726">Partners</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-0 menu-type-default">
<ul class="menu menu--footer menu-level-1">
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/partners" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="node/23726">Partner Program </a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/partners/become-an-acquia-partner" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="node/23731">Become a Partner</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/partners/finder" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="partners/finder">Find a Partner</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="https://certification.acquia.com/" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element">Partner Certification</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
</ul>
</div>
</li>
<li class="menu-item menu-item--expanded menu__link menu--footer__link js__menu--footer__link menu__link--0" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="https://support.acquia.com/hc/en-us" class="menu-item menu-item--expanded js__menu--footer__link menu__link--0 menu__link__element js__menu--footer__link__element menu--footer__link__element">Support</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-0 menu-type-default">
<ul class="menu menu--footer menu-level-1">
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="https://dev.acquia.com/" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element">Developer Center</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="https://docs.acquia.com/" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element">Product Documentation</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
<li class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element menu__link menu--footer__link" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<a href="/solutions/customer-success/acquia-training-certification" class="menu-item js__menu--footer__link menu__link--1 menu__link__element js__menu--footer__link__element menu--footer__link__element">Training &amp; Certifications</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-1 menu-type-default">
</div>
</li>
</ul>
</div>
</li>
<li class="menu-item contact-us menu__link menu--footer__link js__menu--footer__link menu__link--0" x-data="{ active: false }" x-bind:class="{ active: active }" x-on:click="active = !active">
<div><h5>Contact Us</h5>
<p>53 State Street, 10th Floor<br />
Boston MA, 02109<br />
888-922-7842</p>
</div>
<a href="/about-us/contact" class="menu-item contact-us js__menu--footer__link menu__link--0 menu__link__element js__menu--footer__link__element menu--footer__link__element" data-drupal-link-system-path="node/23501">Contact Us</a>
<div class="menu_link_content menu-link-contentfooter view-mode-default menu-dropdown menu-dropdown-0 menu-type-default">
<div>contact-us</div>
<div><h5>Contact Us</h5>
<p>53 State Street, 10th Floor<br />
Boston MA, 02109<br />
888-922-7842</p>
</div>
</div>
</li>
</ul>
</nav>
<nav role="navigation" aria-labelledby="block-social-menu" id="block-social" class="settings-tray-editable block block--social" data-drupal-settingstray="editable">
<h2 class="visually-hidden" id="block-social-menu">Social</h2>
<ul class="menu menu--social menu-level-0">
<li class="menu-item menu__link menu--social__link js__menu--social__link menu__link--0">
<a href="https://www.facebook.com/acquia/" class="menu-item js__menu--social__link menu__link--0 menu__link__element js__menu--social__link__element menu--social__link__element">Facebook</a>
<div class="menu_link_content menu-link-contentsocial view-mode-default menu-dropdown menu-dropdown-0 menu-type-default">

<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_fb.png?itok=EQ7aj9fk 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_fb.png?itok=1u1OIM-f 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_fb.png?itok=EQ7aj9fk 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_fb.png?itok=1u1OIM-f 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_fb.png?itok=EQ7aj9fk 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_fb.png?itok=1u1OIM-f 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_fb.png?itok=EQ7aj9fk" alt="Acquia Facebook" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
</li>
<li class="menu-item menu__link menu--social__link js__menu--social__link menu__link--0">
<a href="https://twitter.com/acquia" class="menu-item js__menu--social__link menu__link--0 menu__link__element js__menu--social__link__element menu--social__link__element">Twitter</a>
<div class="menu_link_content menu-link-contentsocial view-mode-default menu-dropdown menu-dropdown-0 menu-type-default">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_tw.png?itok=zMCPb9tW 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_tw.png?itok=nxPqThCP 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_tw.png?itok=zMCPb9tW 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_tw.png?itok=nxPqThCP 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_tw.png?itok=zMCPb9tW 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_tw.png?itok=nxPqThCP 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_tw.png?itok=zMCPb9tW" alt="Acquia Twitter" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
</li>
<li class="menu-item menu__link menu--social__link js__menu--social__link menu__link--0">
<a href="https://www.instagram.com/acquia/" class="menu-item js__menu--social__link menu__link--0 menu__link__element js__menu--social__link__element menu--social__link__element">Instagram</a>
<div class="menu_link_content menu-link-contentsocial view-mode-default menu-dropdown menu-dropdown-0 menu-type-default">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_inst.png?itok=MRx6bMnW 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_inst.png?itok=8AnYt6dW 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_inst.png?itok=MRx6bMnW 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_inst.png?itok=8AnYt6dW 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_inst.png?itok=MRx6bMnW 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_inst.png?itok=8AnYt6dW 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_inst.png?itok=MRx6bMnW" alt="Acquia Instagram" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
</li>
<li class="menu-item menu__link menu--social__link js__menu--social__link menu__link--0">
<a href="https://www.linkedin.com/company/acquia" class="menu-item js__menu--social__link menu__link--0 menu__link__element js__menu--social__link__element menu--social__link__element">LinkedIn</a>
<div class="menu_link_content menu-link-contentsocial view-mode-default menu-dropdown menu-dropdown-0 menu-type-default">
<div><article>
<div class="image-container">
<div class="visually-hidden">Image</div>
<div> <picture>
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_li.png?itok=OVc0pjM3 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_li.png?itok=eJVbno1r 2x" media="all and (min-width: 1024px)" type="image/png" />
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_li.png?itok=OVc0pjM3 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_li.png?itok=eJVbno1r 2x" media="all and (min-width: 620px) and (max-width: 1023px)" type="image/png" />
<source srcset="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_li.png?itok=OVc0pjM3 1x, /sites/default/files/styles/social_icon_retina/public/media/image/2021-03/acquia_social_li.png?itok=eJVbno1r 2x" media="all and (max-width: 619px)" type="image/png" />
<img src="/sites/default/files/styles/social_icon/public/media/image/2021-03/acquia_social_li.png?itok=OVc0pjM3" alt="Acquia LinkedIn" loading="lazy" />
</picture>
</div>
</div>
</article>
</div>
</div>
</li>
</ul>
</nav>
<div class="copyright">
<p>Copyright &copy; 2021 Acquia, Inc. All Rights Reserved. Drupal is a registered trademark of Dries Buytaert.</p>
</div>
</footer>
</div>
</div>
<script type="application/json" data-drupal-selector="drupal-settings-json">{"path":{"baseUrl":"\/","scriptPath":null,"pathPrefix":"","currentPath":"node\/22631","currentPathIsAdmin":false,"isFront":false,"currentLanguage":"en"},"pluralDelimiter":"\u0003","suppressDeprecationErrors":true,"cohesion":{"google_map_api_key":"","google_map_api_key_geo":null,"animate_on_view_mobile":"DISABLED","add_animation_classes":"DISABLED","responsive_grid_settings":{"gridType":"desktop-first","columns":12,"breakpoints":{"xl":{"width":1400,"innerGutter":30,"outerGutter":30,"widthType":"fixed","previewColumns":12,"label":"Television","class":"coh-icon-television","iconHex":"F26C","boxedWidth":1340},"lg":{"width":1170,"innerGutter":30,"outerGutter":30,"widthType":"fixed","previewColumns":12,"label":"Desktop","class":"coh-icon-desktop","iconHex":"F108","boxedWidth":1110},"md":{"width":1024,"innerGutter":30,"outerGutter":30,"widthType":"fixed","previewColumns":12,"label":"Laptop","class":"coh-icon-laptop","iconHex":"F109","boxedWidth":964},"sm":{"width":768,"innerGutter":30,"outerGutter":30,"widthType":"fixed","previewColumns":12,"label":"Tablet","class":"coh-icon-tablet","iconHex":"F10A","boxedWidth":708},"ps":{"width":565,"innerGutter":30,"outerGutter":30,"widthType":"fixed","previewColumns":12,"label":"Mobile landscape","class":"coh-icon-mobile-landscape","iconHex":"E91E","boxedWidth":505},"xs":{"width":320,"innerGutter":20,"outerGutter":20,"widthType":"fluid","mobilePlaceholderWidth":320,"mobilePlaceholderType":"fluid","previewColumns":12,"label":"Mobile","class":"coh-icon-mobile","iconHex":"F10B","boxedWidth":280}}},"use_dx8":true,"sidebar_view_style":"thumbnails","log_dx8_error":false,"error_url":"\/cohesionapi\/logger\/jserrors","dx8_content_paths":[["settings","content"],["settings","content","text"],["settings","markerInfo","text"],["settings","title"],["markup","prefix"],["markup","suffix"],["markup","attributes",["value"]],["hideNoData","hideData"]]},"dataLayer":{"defaultLang":"en","languages":{"en":{"id":"en","name":"English","direction":"ltr","weight":0},"fr":{"id":"fr","name":"French","direction":"ltr","weight":1},"es":{"id":"es","name":"Spanish","direction":"ltr","weight":2},"de":{"id":"de","name":"German","direction":"ltr","weight":3},"ja":{"id":"ja","name":"Japanese","direction":"ltr","weight":4}}},"mautic":{"base_url":"https:\/\/open.acquia.com\/mtc.js"},"data":{"extlink":{"extTarget":true,"extTargetNoOverride":false,"extNofollow":true,"extNoreferrer":true,"extFollowNoOverride":false,"extClass":"0","extLabel":"(link is external)","extImgClass":false,"extSubdomains":true,"extExclude":"","extInclude":"","extCssExclude":"","extCssExplicit":"","extAlert":false,"extAlertText":"This link will take you to an external web site. We are not responsible for their content.","mailtoClass":"0","mailtoLabel":"(link sends email)","extUseFontAwesome":false,"extIconPlacement":"append","extFaLinkClasses":"fa fa-external-link","extFaMailtoClasses":"fa fa-envelope-o","whitelistedDomains":[]}},"intersectionObserverMargin":"","quicklink":{"admin_link_container_patterns":["#block-local-tasks-block a",".block-local-tasks-block a","#drupal-off-canvas a","#toolbar-administration a"],"ignore_admin_paths":true,"ignore_ajax_links":true,"ignore_file_ext":true,"debug":false,"url_patterns_to_ignore":["user\/logout","#","\/admin","\/edit"]},"user":{"uid":0,"permissionsHash":"d9323593bd30d11019219aba6d02106509233da58e9a4b74d6932333c75f3701"}}</script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CIntersectionObserverEntry%2CURL%2CObject.assign%2CArray.from%2CArray.prototype.includes%2CString.prototype.includes%2CElement.prototype.matches%2CPromise%2CPromise.prototype.finally"></script>
<script src="/sites/default/files/js/js_c8LbWbHV1txem3q8oAzuadnL-HiBShaQH_WRviNqT_g.js"></script>
<script src="https://unpkg.com/quicklink@1.0.1/dist/quicklink.umd.js"></script>
<script src="/sites/default/files/js/js_kZgGv74jLJw2FgSK131ivcNEbvzPL9EpcctCTP1S5x0.js"></script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"930db91ef2","applicationID":"646476417","transactionName":"NgRQZkcFWxcAW0NQDg9OcUdGEFoJTl1ZTQgVGBxcWgBQSgJZWVYPCAJTXg8URwsFTVRN","queueTime":0,"applicationTime":3506,"atts":"GkNTEA8fSBk=","errorBeacon":"bam.nr-data.net","agent":""}</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"678d1d181ccb3d18","token":"43148b4794f44cafbbe4549018b71189","version":"2021.7.0","si":10}'></script>
</body>
</html>
