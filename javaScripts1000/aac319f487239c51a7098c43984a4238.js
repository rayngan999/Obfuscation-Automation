// Copyright 2006-2020 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};

ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
	var recordingThreshold = Math.random() * 100;

	return {
		isRecordingApproved: function(percentage) {
			return recordingThreshold <= percentage;
		}
	}
})();
	
		
// Copyright 2006-2020 ClickTale Ltd., US Patent Pending
// PID: 51



/*browsers exclusion start*/ ClickTaleSettings.PTC.doOnlyWhen = function (toDoHandler, toCheckHandler, interval, times, failHandler) {
            if ((!toDoHandler) || (!toCheckHandler)) return;
            if (typeof interval == "undefined") interval = 1000;
            if (typeof times == "undefined") times = 20;
        
            if (--times < 0) {
                if (typeof failHandler === 'function') {
                    failHandler();
                }
                return;
            }
            if (toCheckHandler()) {
                toDoHandler();
                return;
            }
        
            setTimeout(function () { ClickTaleSettings.PTC.doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler); }, interval);
        }
        ClickTaleSettings.PTC.doOnlyWhen(function () { 
            if (window.ClickTaleSettings.PTC.okToRunPCC) { 
                (function(){
                    window.ClickTaleSettings = window.ClickTaleSettings || {};
                    ClickTaleSettings.PTC = ClickTaleSettings.PTC || {};
                    ClickTaleSettings.PTC.originalPCCLocation = "P56_PID51";
                    
                    var aa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}da("Object.assign",function(a){return a||aa});function r(a,b,c,d,e){a&&b&&("undefined"==typeof c&&(c=1E3),"undefined"==typeof d&&(d=20),0>--d?"function"===typeof e&&e():b()?a():setTimeout(function(){r(a,b,c,d,e)},c))};function u(a,b){b||(b=document);return b instanceof Element||b instanceof Document?Array.prototype.slice.call(b.querySelectorAll(a)):"string"===typeof b?u(a,document.querySelectorAll(b)):Array.isArray(b)||b instanceof HTMLCollection||b instanceof NodeList?Array.prototype.reduce.call(b,function(c,d){return c.concat(Array.prototype.slice.call(d.querySelectorAll(a)))},[]):[]}
function v(a,b){if(a&&a.nodeType&&9===a.nodeType)return!1;var c=Element.prototype;v=function(d,e){return d&&document.documentElement.contains(d)?v.b.call(d,e):!1};v.b=c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.matches;return v(a,b)}function w(a,b){w=Element.prototype.closest?function(c,d){return c&&c instanceof Element?Element.prototype.closest.call(c,d):null}:function(c,d){for(;c&&!v(c,d);)c=c.parentElement;return c};return w(a,b)};var x=!1,ea=Object.defineProperty&&Object.defineProperty({},"passive",{get:function(){x=!0}});document.addEventListener("test",function(){},ea);var y=x?{passive:!0,capture:!0}:!0,z=x?{passive:!0,capture:!1}:!1,fa=0;
function A(a){function b(){2==++c&&a()}if(!~A.b.indexOf(a)){A.b.push(a);var c=0;B(b);if("function"==typeof ClickTaleIsRecording&&!0===ClickTaleIsRecording())b();else{var d=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){b();return d.apply(this,arguments)}}}}A.b=[];function B(a){function b(){c||(c=!0,a())}var c=!1;"loading"!=document.readyState?b():document.addEventListener&&document.addEventListener("DOMContentLoaded",b,!1)}
function C(a,b,c,d,e){if("string"===typeof b&&-1!=b.indexOf(" "))return b.split(/\s+/).forEach(function(f){return C(a,f,c,d,e)}),a;if("string"===typeof a)Array.prototype.forEach.call(document.querySelectorAll(a),function(f){C(f,b,c,d,e)});else if(a instanceof Array||a instanceof NodeList)Array.prototype.forEach.call(a,function(f){C(f,b,c,d,e)});else{var g="";"string"==typeof c&&("mouseenter"==b?(b="mouseover",g="mouseenter"):"mouseleave"==b&&(b="mouseout",g="mouseleave"));a.addEventListener(b,function(f,
h,q,m,n,k){return function(t){if("function"===typeof q)q.apply(this,arguments),n&&f.removeEventListener(h,arguments.callee,y);else{var l=t.relatedTarget,p=w(t.target,q);p&&f.compareDocumentPosition(p)&Node.DOCUMENT_POSITION_CONTAINED_BY&&("mouseenter"==k||"mouseleave"==k?l&&(l==p||p.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY)||m.apply(p,arguments):m.apply(p,arguments),n&&f.removeEventListener(h,arguments.callee,y))}}}(a,b,c,d,e,g),y)}return a}
function ha(a,b){document.addEventListener("mouseup",function(c){a===c.target&&b();document.removeEventListener("mouseup",arguments.callee,y)},y)}function ia(a,b){function c(d){document.removeEventListener("touchend",arguments.callee,y);a===d.target&&b()}document.addEventListener("touchend",c,y);document.addEventListener("touchmove",function(d){document.removeEventListener("touchmove",arguments.callee,y);document.removeEventListener("touchend",c,y)},y)}
function D(a,b){var c=E();c&&(D=c.m?ia:ha,D(a,b))};function F(a){if(window.CSS&&"function"===typeof window.CSS.escape)F=function(d){return window.CSS.escape.call(window.CSS,d)};else{var b=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,c=function(d,e){return e?"\x00"===d?"\ufffd":d.slice(0,-1)+"\\"+d.charCodeAt(d.length-1).toString(16)+" ":"\\"+d};F=function(d){return d.replace(b,c)}}return F(a)}function G(a){return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(b,c){return String.fromCharCode(+("0x"+c))}))};function ja(a){window._uxa=window._uxa||[];window._uxa.push.apply(window._uxa,arguments)}function H(a){a=void 0===a?window.location.pathname+window.location.hash.replace("#","?__"):a;ja(["trackPageview",a])};function I(){return!(!window.ClickTaleMonitor||"function"!==typeof window.ClickTaleMonitor.isMonitoring||!window.ClickTaleMonitor.isMonitoring())}function ka(){if(window.ClickTaleMonitor&&ClickTaleMonitor.Settings&&"function"===typeof ClickTaleMonitor.Settings.get){var a=ClickTaleMonitor.Settings.get();a.monitor&&a.monitor.onStop&&"function"==typeof a.monitor.onStop&&(a.monitor.onStop(function(){a.started=!1}),ClickTaleMonitor.App.prototype.dispose.call(a.monitor,!1,!1,!0))}}
function la(a,b,c){if(window.ClickTaleMonitor&&"function"==typeof ClickTaleMonitor.restart&&J()&&(c=c||500,K)){K=!1;var d=ClickTaleMonitor.Settings.get(),e=d.shouldStartMonitorCallback||function(){},g="";d&&d.config&&d.config.transport&&(g=d.config.transport.url||"");ka();d=ClickTaleMonitor.Settings.get();g&&d.configure({transport:{url:g}});"function"===typeof d.shouldStartMonitor&&d.shouldStartMonitor(e);ClickTaleMonitor.restart(a,b);setTimeout(function(){K=!0},c)}}var K=!0,ma,L,M,N,na=!1,O=!1;
function J(){var a=!1;if(I())a=!0;else if(window.ClickTaleMonitor){var b=window.ClickTaleMonitor&&ClickTaleMonitor.Settings&&"function"==typeof ClickTaleMonitor.Settings.get?ClickTaleMonitor.Settings.get():null;if(b)b.onStart(function(){J.b=!0})}else return r(J,function(){return!!window.ClickTaleMonitor},1E3,10),!1;J=function(){return J.b};J.b=a;return J.b}J.b=!1;J();function oa(a){"function"===typeof ClickTaleExec&&ClickTaleExec(a)}function P(){"function"===typeof ClickTaleStop&&ClickTaleStop()}function Q(a,b){"function"===typeof ClickTaleEvent&&(b?!0!==Q.b[a]&&(Q.b[a]=!0,ClickTaleEvent(a)):ClickTaleEvent(a))}Q.b={};function pa(a){"function"===typeof window.ClickTaleRegisterElementAction&&ClickTaleRegisterElementAction("click",a)}
function qa(a,b){a&&"object"==typeof a&&"string"==typeof b&&(window.ClickTaleContext&&-1!=document.referrer.indexOf(location.hostname)&&window.parent.ct&&window.parent.ct.ElementAddressing&&"function"===typeof window.parent.ct.ElementAddressing.forceSetCustomElementID?window.parent.ct.ElementAddressing.forceSetCustomElementID(a,b):(window.ClickTaleContext||"function"!==typeof ClickTaleSetCustomElementID||-1==ClickTaleSetCustomElementID.toString().indexOf("duplicate registration of custom id")?window.ClickTaleSetCustomElementID=
window.ClickTaleSetCustomElementID||function(c,d){c.ClickTale=c.ClickTale||{};c.ClickTale.CustomID=d}:qa=function(c,d){c.ClickTale=c.ClickTale||{};c.ClickTale.CustomID=d},window.ClickTaleSetCustomElementID(a,b)))}
function ra(){Array.prototype.forEach.call(document.querySelectorAll('[id]:not([id=""])'),function(a){if(!v(a,'input[type="hidden"], script')){var b=a.getAttribute("id");b.match(/(?:\r|\n)/)&&"function"===typeof ClickTaleNote&&ClickTaleNote("ctlib.api.SetCustomElementIdDuplicates: ids with line break found!");a=document.querySelectorAll('[id="'+F(b)+'"]');var c=sa;1<a.length&&!c[b]&&(c[b]=!0,Array.prototype.forEach.call(a,function(d,e){qa(d,b.replace(/(\r|\n|\r\n|\s+)+/g,"_").replace(/\W/g,"_")+"_"+
e)}))}})}var sa={};function ua(a,b){"function"===typeof ClickTaleLogical&&(Q.b={},sa={},R.b&&R.b instanceof va&&R.b.clear(),b?ClickTaleLogical(a,b):ClickTaleLogical(a))}function E(){if("function"===typeof ClickTaleDetectAgent){var a=ClickTaleDetectAgent();if(a)return E=function(){return a},E()}return null}function wa(){"function"===typeof ClickTaleUploadPage&&ClickTaleUploadPage(void 0,void 0)}
function S(a){if("function"===typeof ClickTaleRegisterTouchAction){var b=a.getBoundingClientRect();ClickTaleRegisterTouchAction(a,b.left+document.body.scrollLeft,b.top+document.body.scrollTop)}}
function xa(a,b,c){if("boolean"!=typeof T){var d=E();d&&(T=!!d.m)}a||(a="mousedown",T&&(a="touchstart"));c=c||"img, a, button, textarea, input, select";T&&(c+=", label[for]");C(document,a,c,function(e){var g=e.target,f=this;if(!b||!v(this,b))if(T)if(v(this,"label[for]"))D(g,function(m){return function(){var n,k;(n=m.getAttribute("for"))&&(k=document.getElementById(n))&&S(k)}.bind(f)}(g,e));else{var h=-1,q=function(m){clearTimeout(h);document.removeEventListener("touchstart",arguments.callee,z);D(g,
function(n){return function(){function k(l){document.removeEventListener("touchend",arguments.callee,z);clearTimeout(t)}var t=-1;document.addEventListener("touchend",k,z);t=setTimeout(function(){document.removeEventListener("touchend",k,z);S(n)},50)}.bind(f)}(g,e))};document.addEventListener("touchstart",q,z);h=setTimeout(function(){document.removeEventListener("touchstart",q,z);S(g)},50)}else D(g,function(m,n){return function(){function k(l){l.target===m&&(U=!0);document.removeEventListener("click",
arguments.callee,!0);clearTimeout(t)}var t=setTimeout(function(){U||pa(n);document.removeEventListener("click",k,!0);U=void 0},200);document.addEventListener("click",k,!0)}.bind(f)}(g,e))})}var T,U;function V(a,b,c,d){V.b&&(V.b=!1,d=d||400,"number"==typeof c&&(d=c,c=""),b=b||document.location.href,P(),window.ClickTaleIncludedOnDOMReady=!0,window.ClickTaleIncludedOnWindowLoad=!0,wa(),ua(b,c),r(a,ClickTaleIsRecording,1E3,2),setTimeout(function(){V.b=!0},d))}V.b=!0;
function ya(){var a=W,b=za(),c=Aa,d=X;if(Y){Y=!1;var e=e||400;d?(P(),window.ClickTaleIncludedOnDOMReady=!0,window.ClickTaleIncludedOnWindowLoad=!0,wa(),ua(b.href,c)):(Array.isArray(window.ClickTaleOnStop)&&window.ClickTaleOnStop.forEach(function(g){if("function"===typeof g)try{g.call(window)}catch(f){}}),H(b.pathname));la(b,c);a();setTimeout(function(){Y=!0},e)}}var Y=!0;
function Ba(a){"function"===typeof ClickTaleAddAugmentElementPathHandler&&ClickTaleAddAugmentElementPathHandler("Linkanalytics",a)}function Ca(){var a=[[".mobile-header__list li",!0],[".mobile-header__list li a",!1]];Da=a;var b="";a.forEach(function(c){!0===c[1]&&(b+=","+c[0])});b&&xa("","",b.replace(/^,/,""));Ba(function(c){return function(d){for(var e=0,g=c.length;e<g;e++){var f=c[e],h=f[0];if(d&&v(d,h)&&(h=f[2],"function"!=typeof h||h()))return{data:{interesting:f[1]}}}return null}}(Da))}
var Da=[];
function va(){this.f=!1;this.b="";this.init=function(a){this.f||(this.f=!0,document.addEventListener("input",this.g,y));this.i(a);this.b=this.b?this.b+","+a:a};this.g=function(a){a=a.target;if(v(a,this.b)){var b=u(this.b).indexOf(a);oa("document.querySelectorAll('"+this.b+"')["+b+"].value = Base64Decode('"+G(a.value)+"');")}}.bind(this);this.i=function(a){var b="";u(a).forEach(function(c,d){b+="document.querySelectorAll('"+a+"')["+d+"].value = Base64Decode('"+G(c.value)+"'); "});b&&oa(b)};this.clear=
function(){document.removeEventListener("input",this.g,y);this.f=!1;this.b=""}}function R(a){R.b=R.b||new va;R.b.init(a)}R.b=null;var Ea=Q,Fa=w,Ga=D;var X=!1,Z=!1,Ha=!0,Aa=location.href;function Ia(){if("boolean"===typeof Z){var a=Z.toString();"function"===typeof ClickTaleField&&ClickTaleField("isMobile",a)}}function W(){ra();Aa=location.href;if(Ha)Ha=!1;else for(var a=window.ClickTaleSettings&&window.ClickTaleSettings.PTC&&window.ClickTaleSettings.PTC.InitFuncs?window.ClickTaleSettings.PTC.InitFuncs:[],b=0,c=a.length;b<c;b++)if("function"===typeof a[b])a[b]();X?Ia():A(function(){X=!0;Ia()});Ca()}
function Ja(){if(!window.ClickTaleFirstPCCGo){window.ClickTaleFirstPCCGo=!0;var a=E();a&&(Z=a.m);W();C(document,Z?"touchstart":"mousedown",".mobile-header__list li",function(b){var c=b.target;Ga(c,function(d,e,g){return function(){if(Fa(d,".mobile-header__list li")){var f=Fa(d,".mobile-header__list li");if(Z)S(f);else{var h={},q;for(q in b)h[q]=b[q];h.target=f;h.srcElement=f;pa(h)}}}.bind(g)}(c,b,this))})}}
(function(a){function b(){2==++fa&&a()}B(b);if("function"==typeof ClickTale)b();else{Array.isArray(window.ClickTaleOnReadyList)&&window.ClickTaleOnReadyList.push(b);var c=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){b();return c.apply(this,arguments)}}})(function(){xa();Ja()});window.clickTaleStartEventSignal=function(a){ya();a&&"string"===typeof a&&Ea(a)};
window.clickTaleEndEventSignal=function(){L&&(history.replaceState=L);M&&(history.pushState=M);N&&window.removeEventListener("popstate",N,!1);P()};function za(){var a=Object.assign({},document.location);a.href=a.href.replace("#","?__");a.pathname+=a.hash.replace("#","?__");return a}
(function(a,b,c,d,e,g,f,h,q){function m(){var l=!1,p=h?h():location;na?(V(function(){},p.href,k,c),l=!0):ma&&(H(p.pathname),!0===q&&(l=!0));if(I()||O)la(document.location,k,c),O=!1,l=!0;l&&"function"==typeof a&&a();k=p.href}function n(l){if(t&&(t=!1,setTimeout(function(){t=!0},f),"function"!==typeof g||g()))if(isNaN(e)||"number"!=typeof e||l){if("function"===typeof ClickTaleIsRecording&&ClickTaleIsRecording())na=!0,P();else{var p;"function"!==typeof ClickTaleStop&&(p=window.ClickTaleOnStop)&&Array.isArray(p)&&
p.forEach(function(ta){"function"===typeof ta&&ta.call(window)});ma=!0}I()&&(ka(),O=!0);d()||(b?"string"===typeof b?r(m,function(){return!!document.querySelector(b+"")},1E3,10,m):"function"===typeof b?r(m,b,1E3,10,m):setTimeout(m,2E3):setTimeout(m,2E3))}else l=e||0,setTimeout(n.bind(null,!0),l)}"function"!=typeof a&&a&&(b=a.B,c=a.w,d=a.s,e=a.o,g=a.u,f=a.A,h=a.j,q=a.l,a=a.h);d=d||function(){return!1};a=a||function(){};f=f||400;var k=(h?h():location).href;c||isNaN(b)||(c=b,b="");c=c||2E3;var t=!0;window.history&&
(L=history.replaceState,history.replaceState=function(){setTimeout(n,5);return L.apply(history,arguments)},M=history.pushState,history.pushState=function(){setTimeout(n,5);return M.apply(history,arguments)},N=function(){setTimeout(n,5)},window.addEventListener("popstate",N,!1))})({h:W,l:!0,j:za});
                })();
            } 
        }, function () { return !!(window.ClickTaleSettings && ClickTaleSettings.PTC && typeof ClickTaleSettings.PTC.okToRunPCC != 'undefined'); }, 500, 20);


//Signature:A7K6WqZMiWv2jenOk6ib+3sD1peUHbcPTeEd+LsNNP2r5VSISPCWf6squx5NlemcedyPiQqLtx5ihdzkmJ5keblnFsF63V3R3jACGJ++x5Xw3Yhi8hlMCmhbLxNHQIfZoeqWd0MroBxLFvfFZTLfjB/Kin9cLfFLfpEOoPEH8Bo=