// Copyright 2006-2021 ClickTale Ltd., US Patent Pending

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
	
		
// Copyright 2006-2021 ClickTale Ltd., US Patent Pending
// PID: 136



/*browsers exclusion start*/function doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == "undefined") interval = 1000;
    if (typeof times == "undefined") times = 20;

    if (--times < 0 && typeof failHandler === 'function') {
        failHandler();
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }

    setTimeout(function () { doOnlyWhen(toDoHandler, toCheckHandler, interval, times); }, interval);
}
doOnlyWhen(function () { if (window.ClickTaleSettings.PTC.okToRunPCC) { (function(){
window.ClickTaleSettings = window.ClickTaleSettings || {};
window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
window.ClickTaleSettings.PTC.originalPCCLocation = "P20_PID136";

var g;function l(a,b,c,d,e){a&&b&&("undefined"==typeof c&&(c=1E3),"undefined"==typeof d&&(d=20),0>--d?"function"===typeof e&&e():b()?a():setTimeout(function(){l(a,b,c,d,e)},c))}function aa(a){var b="someText".trim,c=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;g=b&&!b.call(new String("\ufeff\u00a0"))?function(a){return null==a?"":b.call(a)}:function(a){return null==a?"":(a+"").replace(c,"")};return g(a)};function m(a,b){b||(b=document);return b instanceof Element||b instanceof Document?Array.prototype.slice.call(b.querySelectorAll(a)):"string"===typeof b?m(a,document.querySelectorAll(b)):Array.isArray(b)||b instanceof HTMLCollection||b instanceof NodeList?Array.prototype.reduce.call(b,function(b,d){return b.concat(Array.prototype.slice.call(d.querySelectorAll(a)))},[]):[]}
function p(a,b){if(a&&a.nodeType&&9===a.nodeType)return!1;var c=Element.prototype;p=function(a,b){return a&&document.documentElement.contains(a)?p.b.call(a,b):!1};p.b=c.matches||c.webkitMatchesSelector||c.mozMatchesSelector||c.msMatchesSelector;return p(a,b)}function q(a,b){q=Element.prototype.closest?function(a,b){return a&&a instanceof Element?Element.prototype.closest.call(a,b):null}:function(a,b){for(;a&&!p(a,b);)a=a.parentElement;return a};return q(a,b)};var r=!1,ba=Object.defineProperty&&Object.defineProperty({},"passive",{get:function(){r=!0}});document.addEventListener("test",function(){},ba);var t=r?{passive:!0,capture:!0}:!0,u=r?{passive:!0,capture:!1}:!1,ca=0;function v(a){function b(){2==++v.b&&a()}w(b);if("function"==typeof ClickTaleIsRecording&&!0===ClickTaleIsRecording())b();else{var c=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){b();return c.apply(this,arguments)}}}v.b=0;
function w(a){function b(){c||(c=!0,a())}var c=!1;"loading"!=document.readyState?b():document.addEventListener&&document.addEventListener("DOMContentLoaded",b,!1)}
function x(a,b,c,d,e){if("string"===typeof a)Array.prototype.forEach.call(document.querySelectorAll(a),function(a){x(a,b,c,d,e)});else if(a instanceof Array||a instanceof NodeList)Array.prototype.forEach.call(a,function(a){x(a,b,c,d,e)});else{var f="";"string"==typeof c&&("mouseenter"==b?(b="mouseover",f="mouseenter"):"mouseleave"==b&&(b="mouseout",f="mouseleave"));a.addEventListener(b,function(a,b,c,d,e,f){return function(k){if("function"===typeof c)c.apply(this,arguments),e&&a.removeEventListener(b,
arguments.callee,t);else{var n=k.relatedTarget,h=q(k.target,c);h&&a.compareDocumentPosition(h)&Node.DOCUMENT_POSITION_CONTAINED_BY&&("mouseenter"==f||"mouseleave"==f?n&&(n==h||h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)||d.apply(h,arguments):d.apply(h,arguments),e&&a.removeEventListener(b,arguments.callee,t))}}}(a,b,c,d,e,f),t)}}function da(a,b){document.addEventListener("mouseup",function(c){a===c.target&&b();document.removeEventListener("mouseup",arguments.callee,t)},t)}
function ea(a,b){function c(c){document.removeEventListener("touchend",arguments.callee,t);a===c.target&&b()}document.addEventListener("touchend",c,t);document.addEventListener("touchmove",function(a){document.removeEventListener("touchmove",arguments.callee,t);document.removeEventListener("touchend",c,t)},t)}function y(a,b){var c=z();c&&(y=c.m?ea:da,y(a,b))};function A(a){if(window.CSS&&"function"===typeof window.CSS.escape)A=function(a){return window.CSS.escape.call(window.CSS,a)};else{var b=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,c=function(a,b){return b?"\x00"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a};A=function(a){return a.replace(b,c)}}return A(a)}function B(a){return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(a,c){return String.fromCharCode(+("0x"+c))}))};function C(){return!(!window.ClickTaleMonitor||"function"!==typeof window.ClickTaleMonitor.isMonitoring||!window.ClickTaleMonitor.isMonitoring())}function D(){if(window.ClickTaleMonitor&&ClickTaleMonitor.Settings&&"function"===typeof ClickTaleMonitor.Settings.get){var a=ClickTaleMonitor.Settings.get();a.monitor&&a.monitor.onStop&&"function"==typeof a.monitor.onStop&&(a.monitor.onStop(function(){a.started=!1}),ClickTaleMonitor.App.prototype.dispose.call(a.monitor,!1,!1,!0))}}
function fa(a,b,c){if(window.ClickTaleMonitor&&"function"==typeof ClickTaleMonitor.restart&&E()&&(c=c||500,F)){F=!1;var d=ClickTaleMonitor.Settings.get(),e=d.shouldStartMonitorCallback||function(){},f="";d&&d.config&&d.config.transport&&(f=d.config.transport.url||"");D();d=ClickTaleMonitor.Settings.get();f&&d.configure({transport:{url:f}});"function"===typeof d.shouldStartMonitor&&d.shouldStartMonitor(e);ClickTaleMonitor.restart(a,b);setTimeout(function(){F=!0},c)}}var F=!0,G,H,I,J=!1,ha=!1,K=!1;
function E(){var a=!1;if(C())a=!0;else if(window.ClickTaleMonitor){var b=window.ClickTaleMonitor&&ClickTaleMonitor.Settings&&"function"==typeof ClickTaleMonitor.Settings.get?ClickTaleMonitor.Settings.get():null;if(b)b.onStart(function(){E.b=!0})}else return l(E,function(){return!!window.ClickTaleMonitor},1E3,10),!1;E=function(){return E.b};E.b=a;return E.b}E.b=!1;E();function ia(a){"function"===typeof ClickTaleExec&&ClickTaleExec(a)}function L(){"function"===typeof ClickTaleStop&&ClickTaleStop()}function M(a,b){"function"===typeof ClickTaleEvent&&(b?!0!==M.b[a]&&(M.b[a]=!0,ClickTaleEvent(a)):ClickTaleEvent(a))}M.b={};
function ja(a,b){"object"==typeof a&&"string"==typeof b&&(window.ClickTaleContext&&-1!=document.referrer.indexOf(location.hostname)&&window.parent.ct&&window.parent.ct.ElementAddressing&&"function"===typeof window.parent.ct.ElementAddressing.forceSetCustomElementID?window.parent.ct.ElementAddressing.forceSetCustomElementID(a,b):(window.ClickTaleContext||"function"!==typeof ClickTaleSetCustomElementID||-1==ClickTaleSetCustomElementID.toString().indexOf("duplicate registration of custom id")?window.ClickTaleSetCustomElementID=
window.ClickTaleSetCustomElementID||function(a,b){a.ClickTale=a.ClickTale||{};a.ClickTale.CustomID=b}:ja=function(a,b){a.ClickTale=a.ClickTale||{};a.ClickTale.CustomID=b},window.ClickTaleSetCustomElementID(a,b)))}
function ka(){Array.prototype.forEach.call(document.querySelectorAll('[id]:not([id=""])'),function(a){if(!p(a,'input[type="hidden"], script')){var b=a.getAttribute("id");b.match(/(?:\r|\n)/)&&"function"===typeof ClickTaleNote&&ClickTaleNote("ctlib.api.SetCustomElementIdDuplicates: ids with line break found!");a=document.querySelectorAll('[id="'+A(b)+'"]');var c=la;1<a.length&&!c[b]&&(c[b]=!0,Array.prototype.forEach.call(a,function(a,c){ja(a,b.replace(/(\r|\n|\r\n|\s+)+/g,"_").replace(/\W/g,"_")+"_"+
c)}))}})}var la={};function P(){return"function"===typeof ClickTaleIsRecording?ClickTaleIsRecording():!1}function ma(a,b){"function"===typeof ClickTaleLogical&&(M.b={},la={},Q.b&&Q.b instanceof na&&Q.b.clear(),b?ClickTaleLogical(a,b):ClickTaleLogical(a))}function z(){if("function"===typeof ClickTaleDetectAgent){var a=ClickTaleDetectAgent();if(a)return z=function(){return a},z()}return null}function oa(){"function"===typeof ClickTaleUploadPage&&ClickTaleUploadPage(void 0,void 0)}
function R(a){if("function"===typeof ClickTaleRegisterTouchAction){var b=a.getBoundingClientRect();ClickTaleRegisterTouchAction(a,b.left+document.body.scrollLeft,b.top+document.body.scrollTop)}}
function pa(){if("boolean"!=typeof S){var a=z();a&&(S=!!a.m)}if(!b){var b="mousedown";S&&(b="touchstart")}a="img, a, button, textarea, input, select";S&&(a+=", label[for]");x(document,b,a,function(a){var b=a.target,c=this;if(S)if(p(this,"label[for]"))y(b,function(a){return function(){var b,c;(b=a.getAttribute("for"))&&(c=document.getElementById(b))&&R(c)}.bind(c)}(b,a));else{var f=function(d){document.removeEventListener("touchstart",arguments.callee,u);y(b,function(a){return function(){function b(a){document.removeEventListener("touchend",
arguments.callee,u)}document.addEventListener("touchend",b,u);setTimeout(function(){document.removeEventListener("touchend",b,u);R(a)},50)}.bind(c)}(b,a))};document.addEventListener("touchstart",f,u);setTimeout(function(){document.removeEventListener("touchstart",f,u);R(b)},50)}else y(b,function(a,b){return function(){function c(b){b.target===a&&(T=!0);document.removeEventListener("click",arguments.callee,!0);clearTimeout(d)}var d=setTimeout(function(){T||"function"===typeof window.ClickTaleRegisterElementAction&&
ClickTaleRegisterElementAction("click",b);document.removeEventListener("click",c,!0);T=void 0},200);document.addEventListener("click",c,!0)}.bind(c)}(b,a))})}var S,T;function U(a,b,c){var d=location.href;U.b&&(U.b=!1,c=c||400,"number"==typeof b&&(c=b,b=""),d=d||document.location.href,L(),window.ClickTaleIncludedOnDOMReady=!0,window.ClickTaleIncludedOnWindowLoad=!0,oa(),ma(d,b),a(),setTimeout(function(){U.b=!0},c))}U.b=!0;
function qa(){var a=V,b=document.location,c=ra,d=W;if(X){X=!1;var e=e||400;d&&(L(),window.ClickTaleIncludedOnDOMReady=!0,window.ClickTaleIncludedOnWindowLoad=!0,oa(),ma(b.href,c));fa(b,c);a();setTimeout(function(){X=!0},e)}}var X=!0;
function na(){this.c=!1;this.b="";this.init=function(a){this.c||(this.c=!0,document.addEventListener("input",this.f,t));this.g(a);this.b=this.b?this.b+","+a:a};this.f=function(a){a=a.target;if(p(a,this.b)){var b=m(this.b).indexOf(a);ia("document.querySelectorAll('"+this.b+"')["+b+"].value = Base64Decode('"+B(a.value)+"');")}}.bind(this);this.g=function(a){var b="";m(a).forEach(function(c,d){b+="document.querySelectorAll('"+a+"')["+d+"].value = Base64Decode('"+B(c.value)+"'); "});b&&ia(b)};this.clear=
function(){document.removeEventListener("input",this.f,t);this.c=!1;this.b=""}}function Q(a){Q.b=Q.b||new na;Q.b.init(a)}Q.b=null;var sa=M,ta=y;var Y;
function ua(a){Y=function(a){if(window.ClickTaleMonitor&&"function"===typeof ClickTaleMonitor.ctData)if(Y=function(a){a&&ClickTaleMonitor.ctData({event:"abtest",vendor:"Unknown",experience:a})},C())Y(a);else ClickTaleMonitor.Settings.get().onStart(function(){Y(a)})};var b=function(a){for(var c=0;c<a.length;c++){var e=a[c];if(e)if("string"===typeof e){if(e=aa(e))M(e),window.ClickTaleMonitor&&(-1<e.indexOf("Campaign:")&&-1<e.indexOf("Experience:")&&(e=e.replace("Campaign:","Cmp:"),e=e.replace("Experience:","Exp:")),
100<e.length&&(e=e.substr(e.length-100)),Y(e))}else Array.isArray(e)&&b(e)}};arguments.length&&b(arguments)}ua.version="2.1";var W=!1,Z=!1,va=!0,ra=location.href;function wa(){if("boolean"===typeof Z){var a=Z.toString();"function"===typeof ClickTaleField&&ClickTaleField("isMobile",a)}}function V(){ka();ra=location.href;if(va)va=!1;else for(var a=window.ClickTaleSettings&&window.ClickTaleSettings.PTC&&window.ClickTaleSettings.PTC.InitFuncs?window.ClickTaleSettings.PTC.InitFuncs:[],b=0,c=a.length;b<c;b++)if("function"===typeof a[b])a[b]();W?wa():v(function(){W=!0;wa()})}
function xa(){if(!window.ClickTaleFirstPCCGo){window.ClickTaleFirstPCCGo=!0;var a=z();a&&(Z=a.m);V();x(document,Z?"touchstart":"mousedown","selectorHere",function(a){var b=a.target;ta(b,function(a,b,c){return function(){}.bind(c)}(b,a,this))})}}
(function(a){function b(){2==++ca&&a()}w(b);if("function"==typeof ClickTale)b();else{Array.isArray(window.ClickTaleOnReadyList)&&window.ClickTaleOnReadyList.push(b);var c=window.ClickTaleOnRecording||function(){};window.ClickTaleOnRecording=function(){b();return c.apply(this,arguments)}}})(function(){pa();xa()});window.clickTaleStartEventSignal=function(a){qa();a&&"string"===typeof a&&sa(a)};
window.clickTaleEndEventSignal=function(){G&&(history.replaceState=G);H&&(history.pushState=H);I&&window.removeEventListener("popstate",I,!1);L()};
(function(a,b,c,d,e,f,h){function k(){var b=!1;ha&&(U(function(){},N,c),b=!0);if(C()||K)fa(document.location,N,c),K=!1,b=!0;b&&"function"==typeof a&&a();N=location.href;J=!1}function n(a){O&&(O=!1,setTimeout(function(){O=!0},h),"function"!==typeof f||f())&&(isNaN(e)||"number"!=typeof e||a?(P()&&(ha=!0,L()),C()&&(D(),K=!0),d()?J=!0:b?"string"===typeof b?l(k,function(){return!!document.querySelector(b+"")},1E3,10,k):"function"===typeof b?l(k,b,1E3,10,k):setTimeout(k,2E3):setTimeout(k,2E3)):(a=e||0,
setTimeout(n.bind(null,!0),a)))}"function"!=typeof a&&a&&(b=a.u,c=a.o,d=a.j,e=a.i,f=a.l,h=a.s,a=a.h);d=d||function(){return!1};a=a||function(){};h=h||400;var N=location.href;c||isNaN(b)||(c=b,b="");c=c||2E3;var O=!0;window.history&&(G=history.replaceState,history.replaceState=function(){P()||C()||J?setTimeout(n,5):history.replaceState=G;return G.apply(history,arguments)},H=history.pushState,history.pushState=function(){P()||C()||J?setTimeout(n,5):history.pushState=H;return H.apply(history,arguments)},
I=function(){P()||C()||J?setTimeout(n,5):window.removeEventListener("popstate",arguments.callee,!1)},window.addEventListener("popstate",I,!1))})(V);window.ClicktaleIntegrationExperienceHandler=ua;})();} }, function () { return !!(window.ClickTaleSettings && window.ClickTaleSettings.PTC && typeof window.ClickTaleSettings.PTC.okToRunPCC != 'undefined'); }, 500, 20);


//Signature:f1LhBQvd3RAuFrKdkp5ubSlumTDEfaUrzpXf31puQcD/MQYkAxS0ykhFjSBYLz8Ld8EW2mumJODOfrnRCsSXzJRLyX+R3vFsm/bzQb5DXGVzRRVvXcMgZlQZgyoBEMljl279sx1vERh9S8qCenne3aAibiPnjNRCvX5OoIb+9/I=