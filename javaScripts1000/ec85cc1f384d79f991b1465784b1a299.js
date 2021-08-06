if (window.TRM===undefined) {window.TRM={}};window.TRM[1627964970609001] = JSON.parse("{\"googleAPIkey\":\"AIzaSyCImv63pgpbzwlQX2UqGm8hztxgYipslJI\",\"slickSliderGalleryAutoRotationInterval\":3000,\"trimStrokeOfUnderstitialImage\":true,\"understitialImageVerticleFitScaleDown\":true}"); Object.keys(window.TRM[1627964970609001]).forEach(function (k) {window.TRM[k] = window.TRM[1627964970609001][k];});
/* includeBodyBottom analytics_tracking: Source file URL:trmads.eu/js/analytics_tracking_rpa.js: */

var trackingObserver;
var rootMargin = 10;
var timeoutSetting = 10;
if ('IntersectionObserver' in window === false) {
    var jq1 = document.createElement('script');
    jq1.src = "https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver";
    document.getElementsByTagName('head')[0].appendChild(jq1);
    timeoutSetting = 200;
}

var sendData = {
    hitType: 'event',
    eventCategory: 'true_view',
    eventAction: 'true_view',
    eventLabel: 'Default label'
};
var timeoutTracking = null;
setTimeout(function () {
    if ("IntersectionObserver" in window) {
        trackingObserver = new IntersectionObserver(function (entries, observer) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    var track = entries[i].target;
                    if (track !== undefined && 'id' in track) {
                        sendData.eventLabel = window.location + " " + track.id;
                        sendToGaTracker(sendData);
                        sendDataMatomo(sendData);
                    }
                    trackingObserver.unobserve(track);
                }
            }
        }, {rootMargin: rootMargin + 'px'});

        makeTimeout();
    }
}, timeoutSetting);

function makeTimeout() {
    timeoutTracking = setTimeout(function () {
        pushToObserver();
    }, 1000);
}

function extractHostname(url) {
    var hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}



function getElements() {
    var trackingElements = [];
    if (window.activate_rpa_tracking === undefined || window.activate_rpa_tracking == false) {
        window.activate_rpa_tracking = true;
        trackingElements = document.querySelectorAll(".TRM-RPA-image-container img");
    }

//    for (var i = document.links.length; i-- > 0; ) {
//        if (document.links[i].hostname === location.hostname) {
//            trackingElements.push(document.links[i]);
//        }
//    }
    return trackingElements;
}

function pushToObserver() {
    var trackingElements = getElements();
    for (var i = 0; i < trackingElements.length; i++) {
        var track = trackingElements[i];
        trackingObserver.observe(track);
    }
}

function sendToGaTracker(sendData) {
    if (typeof ga != 'function') {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    }

    ga("Transmatico.send", sendData);
}


function sendDataMatomo(data) {
    if (typeof window._paq !== 'undefined') {
        window._paq.push(['trackEvent', data.eventCategory, data.eventAction, data.eventLabel]);
    }
}
  ;




/* includeBodyBottom gai: Source file URL:trmads.eu/js/rpa-google-analytics-init.js: */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


if (typeof window.TRM != 'undefined' && window.TRM.googleAnalyticsTrackingId && window.TRMgoogle_analytics_is_ini === undefined) {
    window.TRMgoogle_analytics_is_ini = true
    ga("create", window.TRM.googleAnalyticsTrackingId, "auto", "Transmatico");
    ga("Transmatico.set", "anonymizeIp", true);
    ga("Transmatico.send", "pageview");
}

if (typeof window.TRM != 'undefined' && window.TRM.matomoAnalyticsTrackingId && window.TRMmatomo_analytics_is_ini === undefined) {
    window.TRMmatomo_analytics_is_ini = true

    var _paq = window._paq = window._paq || [];  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    window._paq.push(['trackPageView']);
    window._paq.push(['enableLinkTracking']);
    (function () {
        var u = "//analytics.transmatico.com/";
        window._paq.push(['setTrackerUrl', u + 'matomo.php']);
        window._paq.push(['setSiteId', window.TRM.matomoAnalyticsTrackingId]);
        var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];
        g.type = 'text/javascript';
        g.async = true;
        g.src = u + 'matomo.js';
        s.parentNode.insertBefore(g, s);
    })();

    if (!window.sendDataMatomo) {
        window.sendDataMatomo = function (data) {
            if (window._paq !== undefined) {
                window._paq.push(['trackEvent', data.eventCategory, data.eventAction, data.eventLabel]);
            }
        }
    }
}

window.sendAnalyticsEvent = function (sendData) {
 //   console.log(sendData)
    if (window.TRMgoogle_analytics_is_ini && typeof (ga) == 'function') {
        ga("Transmatico.send", sendData);
    }

    if (window.TRMmatomo_analytics_is_ini && typeof (window.sendDataMatomo) == 'function') {
        window.sendDataMatomo(sendData)
    }
};




/* includeBodyBottom lazy load lib: Source file URL:trmads.eu/js/media-server/trm-lazyload.js: */
function applyImageSource(e){var t=e.getAttribute(OnSrcLoadAlias),r=0,a=0;e.offsetWidth>0&&(r=e.offsetWidth),e.offsetHeight>0&&!e.dataset.onlyWidth&&(a=e.offsetHeight),e.dataset.trmwidth&&(r=e.dataset.trmwidth,e.dataset.resize="yes"),e.dataset.trmheight&&(a=e.dataset.trmheight,e.dataset.resize="yes");var i=window.devicePixelRatio||Math.round(window.screen.availWidth/document.documentElement.clientWidth);if((r=Math.round(i*r))==(a=Math.round(i*a))&&(a=0),e.dataset.trmsrc){if(-1==(o=e.dataset.trmsrc.toString()).indexOf("trmsize-")&&"yes"==e.dataset.resize){var n=/[^\/]*$/.exec(e.dataset.trmsrc)[0];o=a>0?o.replace(n,"trmsize-"+r+"-"+a+"/"+n):o.replace(n,"trmsize-"+r+"/"+n)}if(o!=e.trmsrc)return(s=new Image).onload=function(){e.src=this.src,e.classList.remove("trmHide"),e.classList.add("trmShow"),TRMcallCallback.call(this,e,t)},s.src=o,!0}else if(e.dataset.trmbg){var o,s;if(-1==(o=e.dataset.trmbg.toString()).indexOf("trmsize-")&&"yes"==e.dataset.resize){n=/[^\/]*$/.exec(e.dataset.trmbg)[0];o=a>0?o.replace(n,"trmsize-"+r+"-"+a+"/"+n):o.replace(n,"trmsize-"+r+"/"+n)}return(s=new Image).onload=function(){e.style.backgroundImage="url('"+this.src+"')",e.classList.remove("trmHide"),e.classList.add("trmShow"),TRMcallCallback.call(this,e,t)},s.src=o,!0}return!1}function TRMcallCallback(e,t){t&&("object"==typeof window.TRM&&"function"==typeof window.TRM[t]&&(t=window.TRM[t])||"function"==typeof window[t]&&(t=window[t]))&&(e.width=this.width,e.height=this.height,t.call(e)),e.removeAttribute(OnSrcLoadAlias)}var OnSrcLoadAlias="data-trm-on-src-load",imageObserver=null;function hasClass(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}var lazyloadImages,timeoutSetting=1,rootMargin=10;if(void 0!==window.TRM&&void 0!==window.TRM.rootMargin)rootMargin=parseInt(window.TRM.rootMargin)||10;if("IntersectionObserver"in window==!1||MutationObserver in window==!1){var jq1=document.createElement("script");jq1.src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver",document.getElementsByTagName("head")[0].appendChild(jq1),timeoutSetting=200}setTimeout(function(){if("IntersectionObserver"in window){lazyloadImages=document.querySelectorAll(".trm-lazy"),imageObserver=new IntersectionObserver(function(e,t){for(var r=0;r<e.length;r++)if(e[r].isIntersecting){var a=e[r].target;!0===applyImageSource(a)&&imageObserver.unobserve(a)}},{rootMargin:rootMargin+"px"});for(var e=0;e<lazyloadImages.length;e++){var t=lazyloadImages[e];imageObserver.observe(t)}if(void 0!==window.TRM)if(MutationObserver in window){new MutationObserver(function(e){for(var t=0;t<e.length;t++)for(var r=0;r<e[t].length;r++){var a=e[t][r];if(null!=a&&null!=a.innerHTML&&-1!=a.innerHTML.indexOf("trm-lazy"))for(var i=a.querySelectorAll(".trm-lazy"),n=0;n<i.length;n++){var o=i[n];imageObserver.observe(o)}}}).observe(document.documentElement,{attributes:!0,characterData:!0,childList:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0,attributeFilter:["class"]})}else{function r(){for(var e=document.querySelectorAll(".trm-lazy"),t=0;t<e.length;t++){var r=e[t];imageObserver.observe(r)}}r(),setInterval(r,600)}}else{var a;function i(){lazyloadImages=document.querySelectorAll(".trm-lazy"),a&&clearTimeout(a),a=setTimeout(function(){for(var e=window.pageYOffset,t=0;t<lazyloadImages.length;t++){var r=lazyloadImages[t];if(r.offsetTop<window.innerHeight+e+rootMargin)applyImageSource(r)}0==lazyloadImages.length&&(document.removeEventListener("scroll",i),window.removeEventListener("resize",i),window.removeEventListener("orientationChange",i))},20)}setTimeout(i,100),document.addEventListener("scroll",i),window.addEventListener("resize",i),window.addEventListener("orientationChange",i)}},timeoutSetting);