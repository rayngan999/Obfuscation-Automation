
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-1061129-9"></script>
<script>
    var user_type = '';
    window.dataLayer = [{
        'common': {
            'dataLayerVersion': 1,
            'user': {
                'bridgeUser': null,
                'applicationUser':  null ,
                'userType':  null ,
                'isInternalUser': false
            },
            'application': {
                'businessUnitName': 'Manheim Logistics',
                'name': 'Central Dispatch',
                'version': '1.0.0',
                'environment': 'production',
                'isProduction':  true             },
            'context': {
                'dealershipId': null,
                'dealershipName':  null             }
        },
        'companyName':  null ,
        'userType':  null     }];
    
        function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        gtag('config', 'UA-1061129-9', {
            'custom_map': {'dimension1': 'user_type'}
        });
        gtag('event', 'user_type_dimension', {'user_type': user_type});
    
</script>

    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-P4JJC5P');</script>
    <!-- End Google Tag Manager -->

        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"dfbb9bd117",applicationID:"867579924"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(){}function i(t,e,n){return function(){return o(t,[u.now()].concat(f(arguments)),e?null:this,n),e?void 0:this}}var o=t("handle"),a=t(8),f=t(9),c=t("ee").get("tracer"),u=t("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",l=p+"ixn-";a(d,function(t,e){s[e]=i(p+e,!0,"api")}),s.addPageAction=i(p+"addPageAction",!0),s.setCurrentRouteName=i(p+"routeName",!0),e.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(l+"tracer",[u.now(),t,n],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[u.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(l+e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),o("err",[t,u.now(),!1,e])}},{}],2:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],3:[function(t,e,n){function r(){return f.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,f=t(10);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],4:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],5:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?d("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&d("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();n.length>0&&d("lcp",[n[n.length-1]])}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||d("cls",[t])})}function a(t){if(t instanceof m&&!g){var e=Math.round(t.timeStamp),n={type:t.type};e<=p.now()?n.fid=p.now()-e:e>p.offset&&e<=Date.now()?(e-=p.offset,n.fid=p.now()-e):e=p.now(),g=!0,d("timing",["fi",e,n])}}function f(t){"hidden"===t&&d("pageHide",[p.now()])}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var c,u,s,d=t("handle"),p=t("loader"),l=t(7),m=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){c=new PerformanceObserver(r);try{c.observe({entryTypes:["paint"]})}catch(v){}u=new PerformanceObserver(i);try{u.observe({entryTypes:["largest-contentful-paint"]})}catch(v){}s=new PerformanceObserver(o);try{s.observe({type:"layout-shift",buffered:!0})}catch(v){}}if("addEventListener"in document){var g=!1,h=["click","keydown","mousedown","pointerdown","touchstart"];h.forEach(function(t){document.addEventListener(t,a,!1)})}l(f)}},{}],6:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}e.exports={agent:i,version:o,match:r}},{}],7:[function(t,e,n){function r(t){function e(){t(a&&document[a]?document[a]:document[i]?"hidden":"visible")}"addEventListener"in document&&o&&document.addEventListener(o,e,!1)}e.exports=r;var i,o,a;"undefined"!=typeof document.hidden?(i="hidden",o="visibilitychange",a="visibilityState"):"undefined"!=typeof document.msHidden?(i="msHidden",o="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(i="webkitHidden",o="webkitvisibilitychange",a="webkitVisibilityState")},{}],8:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],9:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],10:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?u(t,c,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!l.aborted||o){t&&a&&t(n,r,i);for(var f=e(i),c=v(n),u=c.length,s=0;s<u;s++)c[s].apply(f,r);var p=d[w[n]];return p&&p.push([b,n,r,f]),f}}function o(t,e){y[t]=v(t).concat(e)}function m(t,e){var n=y[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function v(t){return y[t]||[]}function g(t){return p[t]=p[t]||i(n)}function h(t,e){l.aborted||s(t,function(t,n){e=e||"feature",w[n]=e,e in d||(d[e]=[])})}var y={},w={},b={on:o,addEventListener:o,removeEventListener:m,emit:n,get:g,listeners:v,context:e,buffer:h,abort:f,aborted:!1};return b}function o(t){return u(t,c,a)}function a(){return new r}function f(){(d.api||d.feature)&&(l.aborted=!0,d=l.backlog={})}var c="nr@context",u=t("gos"),s=t(8),d={},p={},l=e.exports=i();e.exports.getOrSetContext=o,l.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!R++){var t=M.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return u.abort();c(E,function(e,n){t[e]||(t[e]=n)});var n=a();f("mark",["onload",n+M.offset],null,"api"),f("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=l+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===v.readyState&&o()}function o(){f("mark",["domContent",a()+M.offset],null,"api")}var a=t(3),f=t("handle"),c=t(8),u=t("ee"),s=t(6),d=t(4),p=t(2),l=p.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,g="addEventListener",h="attachEvent",y=m.XMLHttpRequest,w=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var x=""+location,E={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1210.min.js"},O=y&&w&&w[g]&&!/CriOS/.test(navigator.userAgent),M=e.exports={offset:a.getLastTimestamp(),now:a,origin:x,features:{},xhrWrappable:O,userAgent:s,disabled:b};if(!b){t(1),t(5),v[g]?(v[g]("DOMContentLoaded",o,!1),m[g]("load",r,!1)):(v[h]("onreadystatechange",i),m[h]("onload",r)),f("mark",["firstbyte",a.getLastTimestamp()],null,"api");var R=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,u){function nrWrapper(){var o,a,s,p;try{a=this,o=d(arguments),s="function"==typeof r?r(o,a):r||{}}catch(l){i([l,"",[o,a,c],s],t)}f(n+"start",[o,a,c],s,u);try{return p=e.apply(a,o)}catch(m){throw f(n+"err",[o,a,m],s,u),m}finally{f(n+"end",[o,a,p],s,u)}}return a(e)?e:(n||(n=""),nrWrapper[p]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var f,c,u,s="-"===r.charAt(0);for(u=0;u<e.length;u++)c=e[u],f=t[c],a(f)||(t[c]=n(f,s?c+r:r,i,c,o))}function f(n,r,o,a){if(!m||e){var f=m;m=!0;try{t.emit(n,r,o,e,a)}catch(c){i([c,n,r,o],t)}m=f}}return t||(t=s),n.inPlace=r,n.flag=p,n}function i(t,e){e||(e=s);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)l.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[p])}function f(t,e){var n=e(t);return n[p]=t,o(t,n,s),n}function c(t,e,n){var r=t[e];t[e]=f(r,n)}function u(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var s=t("ee"),d=t(9),p="nr@original",l=Object.prototype.hasOwnProperty,m=!1;e.exports=r,e.exports.wrapFunction=f,e.exports.wrapInPlace=c,e.exports.argsToArray=u},{}]},{},["loader"]);</script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Central Dispatch | The Auto Industry's Vehicle Transport Marketplace</title>
        <meta name="description" lang="en"
              content="Auto transport and vehicle shipping for transportation brokers, auto dealers and car carriers. Our marketplace brings together 13000+ auto haulers with car dealers and vehicle transport brokers.'"/>
        <meta name="keywords" content="auto transport, vehicle transportation, car shipping, vehicle load board, CentralDispatch"/>
        <link rel="apple-touch-icon-precomposed" href="/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/images/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/images/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/images/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16" />
        <meta name="application-name" content="Central Dispatch"/>
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/images/mstile-144x144.png" />
        <link href='https://fonts.googleapis.com/css?family=Open Sans:400,700' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.min.css" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/responsive/base.css?v=1.0.1" />
        <link rel="stylesheet" href="/css/corner-ribbons.css" />

    
    <script type="text/javascript" src="//nexus.ensighten.com/choozle/4997/Bootstrap.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.1/min/jquery.inputmask.bundle.min.js" crossorigin="anonymous"></script>

                        <script src="/js/responsive/vendor/validator.min.js"></script>
        <script src="/js/responsive/cdnfallback.js"></script>

            
            <!-- Facebook Pixel Code -->
            <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window,document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js';);
                fbq('init', '2387271568021600');
                fbq('track', 'PageView');
            </script>
            <noscript>
                <img height="1" width="1" src="https://www.facebook.com/tr?id=2387271568021600&ev=PageView&noscript=1"/>
            </noscript>
            <!-- End Facebook Pixel Code -->
        
                <script src="https://cdn.lr-ingest.io/LogRocket.min.js" crossorigin="anonymous"></script>
        <script>
            if (window.LogRocket) {
                window.LogRocket.init('a95o98/central-dispatch', {
                    rootHostname: 'centraldispatch.com'
                });
                            }
        </script>
        </head>
<body>


<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P4JJC5P"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
    
    
    
        <header class="hidden-print">
            
                                    
<div class="container hidden-xs visible-sm visible-md visible-lg">
    <a class="navbar-brand" href="/"><img src="/images/responsive/centraldispatchlogo.png" alt="Central Dispatch Logo" width="175" height="25" /></a>
</div>

<div id="primary-nav" class="bg-gray-dark">
    <div class="container">
        <nav class="navbar">
            <div class="navbar-header color-gray-light">
                <span class="container visible-xs hidden-sm hidden-md hidden-lg nav-chevron">
                    <a href="/"><img src="/images/responsive/cdChevronXS.png"></a>
                </span>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#primary-navbar-collapse" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    &nbsp;<i class="fa fa-bars"></i>&nbsp;
                </button>

                                    <button id="loginBtn" type="button" class="navbar-toggle collapsed loginBtn"  onclick="window.location.href='/protected/';"  aria-expanded="false" aria-controls="navbar">
                        <i class="fa fa-sign-in"></i> Login
                    </button>
                            </div>

            <div id="primary-navbar-collapse" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><a href="/about/">About<span class="hidden-sm"> Us</span></a></li>
                    <li><a href="/hiw-shippers/">Shippers</a></li>
                    <li><a href="/hiw-carriers/">Carriers</a></li>
                    <li><a href="/isitforme/">Is It For Me?</a></li>
                    <li><a href="/faq/">FAQ</a></li>
                    <li><a href="/contact-us/">Contact Us</a></li>
                    <li><a href="/classifieds/">Classifieds</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                                            <li class="dropdown hidden-xs">
                                                            <a href="/protected"><i class="fa fa-sign-in"></i> Login</a>
                                                        <ul id="loginNavLinks" class="dropdown-menu">
                                <li>
                                    <form id="loginForm" action="/login?uri=%2Fprotected%2F" method="POST" data-toggle="validator" class="form-inline">
                                        <div class="form-group">
                                            <label for="username">Username</label>
                                            <input type="text" class="form-control" id="username" name="Username" required="required" />
                                        </div>

                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control" id="password" name="Password" required="required" />
                                        </div>

                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" name="keepLoggedIn" id="keepLoggedIn"> Remember me
                                            </label>
                                        </div>

                                        <br class="hidden-xs">
                                        <br class="hidden-xs">

                                        <button type="submit" class="btn btn-primary">Login</button>
                                        <a class="btn btn-default pull-right" href="/forgot-password/">Forgot password?</a>
                                    <input type="hidden" id="CSRFToken" name="CSRFToken" value="bafa341d338b64881d54464f94b6afa35a6c822cb8824a45e3d2843b5e49f8ba"/></form>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/signup/">Sign Up<span class="hidden-sm"> Now</span></a></li>
                                        </ul>
            </div>

                            <div id="login-navbar-collapse" class="collapse navbar-collapse">
                    <ul id="loginNav" class="nav navbar-nav"></ul>
                </div>
                    </nav>
    </div>
</div>

                            
        </header>

        <div>
            
                            

            
    <!-- Jumbotron! -->
    <div class="jumbotron">
        <div class="container">
            <h1 class="text-center">America's Largest <br class="hidden-lg hidden-xs">Auto Transportation Marketplace</h1>

            <div class="row">
                <div class="col-sm-4 text-center">
                    <h2>Dealers<span class="hidden-sm"> & Shippers</span></h2>
                    <a href="/hiw-shippers/" class="btn btn-callout bg-orange-dark color-white">I need to<br>ship vehicles</a>
                </div>

                <div class="col-sm-4 text-center">
                    <h2>Brokers</h2>
                    <a href="/hiw-shippers/" class="btn btn-callout bg-orange-dark color-white">I am an<br>auto transportation broker</a>
                </div>

                <div class="col-sm-4 text-center">
                    <h2>Carriers</h2>
                    <a href="/hiw-carriers/" class="btn btn-callout bg-orange-dark color-white">I am an<br>auto carrier</a>
                </div>
            </div>
        </div>
        <video preload autoplay muted loop class="hidden-xs">
            <source src="/videos/truck.webm" type="video/webm">
            <source src="/videos/truck.mp4" type="video/mp4">
            <source src="/videos/truck.ogg" type="video/ogg">
            <img src='/images/responsive/homepage-hero.png' />
        </video>
    </div>

    <!-- Showcase -->
    <div class="container text-center feature-callout-heading">
        <h1>Connecting shippers with carriers since 1999.</h1>
        <p>
            Use Central Dispatch for 30-days at no-charge*.<br>
        </p>
                    <a href="/signup/" class="btn btn-primary btn-callout">Signup</a>
            </div>

    <div class="chevron-down"></div>

    <div class="bg-orange-darker color-white feature-callout-body">
        <div class="container">
            <div class="row">
                <div class="col-xs-10 col-xs-push-1 col-sm-6 col-sm-push-0 col-md-6">
                    <img src="/images/responsive/feature-showcase.png" class="img-responsive" />
                </div>

                <div class="col-xs-12 col-sm-6">
                    <h3 class="text-uppercase">Shippers</h3>
                    <p>Connect with over 13,000 professional auto transportation companies <br class="visible-lg">eager
                        to ship your cars, trucks, and other vehicles. Join the network <br class="visible-lg">thousands
                        of dealers and other organizations have used to take control <br class="visible-lg">of their
                        auto transportation needs.</p>
                    <a class="btn btn-default" href="/hiw-shippers/">Learn More</a> <a class="btn btn-default" href="/signup/">Signup</a><br>

                    <h3 class="text-uppercase">Brokers</h3>
                    <p>Leverage Central Dispatchâs powerful network of professional auto transportation companies to get your customerâs vehicles moved quickly and efficiently. Combined with jTracker, our broker platform gives you the power to grow your shipping business and stay ahead of the game.</p>
                    <a class="btn btn-default" href="/hiw-shippers/">Learn More</a> <a class="btn btn-default" href="/signup/">Signup</a><br>

                    <h3 class="text-uppercase">Carriers</h3>
                    <p>Accelerate your business and keep your trucks full with millions of loads posted on Central Dispatch. Our tools help drivers and dispatchers work smarter, faster, and better.</p>
                    <a class="btn btn-default" href="/hiw-carriers/">Learn More</a> <a class="btn btn-default" href="/signup/">Signup</a><br>
                </div>
            </div>
        </div>
    </div>

    <div class="chevron-up"></div>

    <!-- Free Trial Callout -->
                            
<div class="call-to-action">
    <div class="container">
        <div class="row">
            <div class="hidden-xs col-sm-2 col-md-3 text-right">
                                    <img src="/images/responsive/chevrons-80.png">
                            </div>

            <div class="col-xs-12 col-sm-7 col-md-6 text-center">
                <h3 class="">Sign-up today to use Central Dispatch for 30-Days at no-charge*.</h3>
                <p>Our no-risk trial gives you access to the largest and most trusted network of auto transport professionals.</p>
            </div>

                            <div class="col-xs-12 col-sm-3 col-md-3 text-xs-center">
                    <a href="/signup/" class="text-uppercase btn btn-callout btn-default">Sign Up</a>
                </div>
                    </div>
    </div>
</div>


        </div>

        <!-- Spacer since we're using table-row display for fixed footer -->
<footer id="page-footer" class="hidden-print">
    <div id="page-footer-nav" class="bg-gray-dark color-gray-medium">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 hidden-xs" id="page-footer-logo">
                    <img src="/images/responsive/centraldispatchlogo-bw.png" class="img-responsive" width="175" height="27" />
                </div>

                <div class="col-lg-8" id="page-footer-nav-popout">
                    <div class="row">
                        <div class="col-xs-12 col-sm-6">
                            <a href="#page-footer-nav-hdiw" class="color-gray-medium clearfix collapse-toggle" data-toggle="collapse">
                                <h4 class="text-uppercase pull-left">How does it work?</h4>
                                <i class="fa fa-chevron-down pull-right visible-xs"></i>
                            </a>

                            <ul id="page-footer-nav-hdiw" class="color-orange-dark collapse">
                                <li><a href="/hiw-carriers/" class="color-gray-medium btn btn-link">Carriers</a></li>
                                <li><a href="/hiw-shippers/" class="color-gray-medium btn btn-link">Brokers</a></li>
                                <li><a href="/hiw-shippers/" class="color-gray-medium btn btn-link">Dealers</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-12 col-sm-6">
                            <a href="#page-footer-nav-contacts" class="color-gray-medium collapse-toggle clearfix" data-toggle="collapse">
                                <h4 class="text-uppercase pull-left">Contact Us</h4>
                                <i class="fa fa-chevron-down pull-right visible-xs"></i>
                            </a>

                            <div id="page-footer-nav-contacts" class="collapse small">
                                <div class="clearfix">
                                    <div class="pull-left info-group-icon fa fa-lg fa-map-marker"></div>
                                    <div class="pull-left">
                                        <address>
                                            Central Dispatch<br>
                                            centraldispatch.com<br>
                                            26387 Network Place<br>
                                            Chicago, IL 60673-1263
                                        </address>
                                    </div>
                                </div>

                                <div class="clearfix">
                                    <div class="pull-left info-group-icon fa fa-lg fa-phone"></div>
                                    <div class="pull-left">
                                        <p>
                                            <span class="color-gray-medium">Toll Free:</span> <a class="color-white" href="tel:8009287869">800-928-7869</a><br>
                                        </p>
                                    </div>
                                </div>

                                <br>

                                <a href="/signup/" class="btn btn-default">Try us out for 30-days at no-charge*!</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="page-footer-messaging" class="col-sm-8 col-md-6 col-lg-4 hidden-xs">
                    <div class="visible-lg">
                        <p class="small message color-gray-medium">
                            Central Dispatch is the most cost-effective way to manage transportation on your own.
                        </p>

                        <p class="small message color-gray-medium">
                            Weâre not a shipping company, weâre a self-managed transportation load board that matches shippers with our network of professional auto carriers for inbound and outbound transportation needs.
                        </p>
                    </div>

                    <nav id="page-footer-social-media">
                        <a href="https://www.facebook.com/centraldisp1/" class="color-gray-medium" target="_blank">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-stack-1x fa-facebook"></i>
                                <i class="fa fa-stack-2x fa-circle-thin"></i>
                            </span>
                        </a>

                        <a href="https://twitter.com/CentralDisp1" class="color-gray-medium" target="_blank">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-stack-1x fa-twitter"></i>
                                <i class="fa fa-stack-2x fa-circle-thin"></i>
                            </span>
                        </a>

                        <a href="https://www.youtube.com/channel/UCZGXpuZeY6z10MhreGnQNgQ" class="color-gray-medium" target="_blank">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-stack-1x fa-youtube"></i>
                                <i class="fa fa-stack-2x fa-circle-thin"></i>
                            </span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div id="page-footer-legal" class="bg-black color-gray">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-6 small">
                    &copy; 2020-2021 Dealertrack Central Dispatch, LLC. All Rights Reserved
                </div>

                <nav id="page-footer-legal-links" class="col-xs-12 col-sm-6">
                    <ul class="list-inline small">
                        <li><a href="/images/pdf/privacyPolicy.pdf?v=1.0" class="color-gray" target="_blank">Privacy Policy</a></li><li>|</li>
                        <li><a href="/memagree" class="color-gray">Terms of Use</a></li>
                        <li>|</li>
                        <li><a href="/contact-us" class="color-gray">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</footer>

    
    <script src="/js/responsive/base.js"></script>

    <script type="text/javascript">
        function logoutConfirm() {
            if (confirm('Are you sure you want to log out?')) {
                document.location = '/logout';
            }
        }

        var getCookie = function (cName) {
            if (document.cookie.length > 0) {
                var c_start = document.cookie.indexOf(cName + "=");
                if (c_start != -1) {
                    c_start = c_start + cName.length + 1;
                    var c_end = document.cookie.indexOf(";", c_start);
                    if (c_end == -1) {
                        c_end = document.cookie.length;
                    }
                    //rc W3 does not include the use of replace(). It's required to convert "+" to spaces.
                    return unescape(document.cookie.substring(c_start, c_end).replace(/\+/g, ' '));
                }
            }
            return null;
        }

        $(document).ready(function () {
            $('.loginBtn').on('click', function() {
                setTimeout(function() { $('#username').focus() }, 0);
            });

            $('#loginForm').on('submit', function () {
                if ($('#keepLoggedIn').is(':checked')) {
                    if (!confirm("Once logged in, you'll remain logged in even if you turn off your computer.\nBe certain you DO NOT check this box on a public computer such as at a truck stop.\n\nAre you sure you want to be remembered?")) {
                        $('#keepLoggedIn').removeAttr('checked');
                        return(false);
                    }
                }
            });

            $('#keepLoggedIn').on('change', function () {
                if ($(this).is(':checked')) {
                    if (!getCookie('test-persistent')) {
                        alert("You cannot use this option without turning on persistent cookies.");
                        document.location = '/needcookies';
                        return;
                    }
                }
            });

            $.each($('#loginNavLinks li'), function (index, li) {
                var clone = $(li).clone().addClass('visible-xs');
                $('#loginNav').append(clone);
            });

            $.each($('#accountNavLinks li'), function (index, li) {
                var clone = $(li).clone().addClass('visible-xs');
                $('#accountNav').append(clone);
            });
        });
    </script>



<script>
    if(self !== top) {
        top.location = self.location;
    }
</script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","licenseKey":"dfbb9bd117","applicationID":"867579924","transactionName":"NVNVNUFRWEpVBxIPVgwZdgJHWVlXGwADAFgXWkNOWl5SXExLDwhdB04=","queueTime":0,"applicationTime":15,"atts":"GRRCQwlLSxUWBURcQh9L","errorBeacon":"bam-cell.nr-data.net","agent":""}</script></body>
</html>
