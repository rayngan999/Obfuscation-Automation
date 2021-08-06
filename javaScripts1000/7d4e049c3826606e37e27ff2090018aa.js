/*! jssdk 2020-08-19 */

!function(a){function b(){return this.ua=a.navigator.userAgent.toLowerCase(),this.browser=this._getBrowser(),this.privacy=null,this._detectPrivacy(),this}Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),b.prototype={_detectIE:function(){var a=this.ua.indexOf("msie ");if(a>0)return parseInt(this.ua.substring(a+5,this.ua.indexOf(".",a)),10);if(this.ua.indexOf("trident/")>0){var b=this.ua.indexOf("rv:");return parseInt(this.ua.substring(b+3,this.ua.indexOf(".",b)),10)}var c=this.ua.indexOf("edge/");return c>0&&parseInt(this.ua.substring(c+5,this.ua.indexOf(".",c)),10)},_detectSafari:function(){try{return!!a.safari||-1!=this.ua.indexOf("safari")&&-1===this.ua.indexOf("chrome")&&-1===this.ua.indexOf("crios")}catch(a){return!1}},_detectChrome:function(){try{return!!a.chrome||-1!==this.ua.indexOf("crios")||0===a.navigator.vendor.indexOf("Google")&&-1!==this.ua.indexOf("chrome")}catch(a){return!1}},_detectFF:function(){try{return-1!=this.ua.indexOf("firefox")}catch(a){return!1}},_getBrowser:function(){return{isIE:this._detectIE(),isSafari:this._detectSafari(),isChrome:this._detectChrome(),isFF:this._detectFF()}},_detectIEPrivacy:function(){if(this.browser.isIE<10)return this.privacy=!1,!1;try{a.indexedDB?this.privacy=!1:this.privacy=!0}catch(a){this.privacy=!1}},_detectSafariPrivacy:function(){try{a.localStorage.setItem("check",1),a.localStorage.getItem("check"),a.localStorage.removeItem("check"),this.privacy=!1}catch(a){this.privacy=!0}},_detectChromePrivacy:function(){try{a.webkitRequestFileSystem?a.webkitRequestFileSystem(a.TEMPORARY,1,function(){this.privacy=!1}.bind(this),function(){this.privacy=!0}.bind(this)):this.privacy=!1}catch(a){this.privacy=!1}},_detectFFPrivacy:function(){var b;try{b=a.indexedDB.open("test"),b.onerror=function(){this.privacy=!0}.bind(this),b.onsuccess=function(){this.privacy=!1}.bind(this)}catch(a){this.privacy=!0}},_detectPrivacy:function(){return this.browser.isIE?this._detectIEPrivacy():this.browser.isSafari?this._detectSafariPrivacy():this.browser.isChrome?this._detectChromePrivacy():this.browser.isFF?this._detectFFPrivacy():void 0},report:function(b){null===this.privacy?a.setTimeout(this.report.bind(this,b),50):b(this.privacy)}},a.PrivacyModeDetector=b}(window);
/*! jssdk 2020-08-19 */

!function(a){function b(a){this.setting=a,this.init()}Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),b.prototype={PIXEL_URL:"//pxl.tsyndicate.com/api/v1/c/c.js",TIMER_CHECK:100,TIMER_RE_CREATE:1e3,NUMBER_CREATE:2,amountCreate:0,timer:null,fakeFocusLink:null,init:function(){var a=document.getElementById(this.setting.id);this.timer=setInterval(this.checkActive.bind(this),this.TIMER_CHECK),this.childNodes=a&&a.childNodes,this.setTabIndex()},checkClick:function(a){var b=this.childNodes;if(b&&b.length)for(var c=0;c<b.length;c++)if(b[c]===a)return!0},setTabIndex:function(){var a=this.childNodes;if(a&&a.length)for(var b=0;b<a.length;b++)a[b].setAttribute&&a[b].setAttribute("tabindex","1")},checkActive:function(){var a;try{a=document.activeElement}catch(b){a=parent.document.body.tagName}a&&this.checkClick(a)&&(this.reset(),this.init(),this.createPixel())},createPixel:function(){var a=this.createScript();document.body.appendChild(a),this.addEvent("load",a,this.removePixel.bind(this,a)),this.addEvent("error",a,this.removePixel.bind(this,a)),this.amountCreate++},createScript:function(){var a=document.createElement("script");return a.type="text/javascript",a.src=this.PIXEL_URL+this.paramsPixel(),a},addEvent:function(a,b,c){if(b.addEventListener)b.addEventListener(a,c,!1);else if(b.attachEvent)return b.attachEvent("on"+a,c)},paramsPixel:function(){var a="";return this.setting.params&&(a="?"+this.setting.params.join("&")),a},reCreatePixel:function(){setTimeout(this.createPixel.bind(this),this.TIMER_RE_CREATE)},removePixel:function(a,b){a.parentNode.removeChild(a),"error"===b.type&&this.amountCreate<=this.NUMBER_CREATE&&this.reCreatePixel()},doEvent:function(a,b){a[b]?a[b]():a["on"+b]&&a["on"+b]()},createLink:function(){var a=document.createElement("a");return a.href="",document.body.appendChild(a),a},reset:function(){this.doEvent(document.activeElement,"blur"),this.doEvent(a,"focus"),this.doEvent(this.createLink(),"focus"),clearInterval(this.timer)}},a.trackIFrameClick=b}(window);
(function(e,d){function b(){this.a={pixelTrackerLink:"//pxl.tsyndicate.com/api/v1/backup.gif?t\x3dbanner",bannerUrl:"http://wct.link/click?c\x3deyJhIjo3LCJvIjoyLCJwIjozfSAg\x26tracker\x3dfailover",backUpList:[{width:250,height:150,type:"iframe",src:"//go.hpyjmp.com/smartpop/c3fa347280578e90a9e8ab1e6280c0e361524d151dcbfe6bb5b723fee947ce88?userId\x3ded4e3449202a44afa8131507a9d12a1c962321860e4bfcc2aa1b33a18897b60e\x26sourceId\x3dCDN_campaign\x26p1\x3d250x150"},{width:300,height:100,type:"iframe",src:"//go.hpyjmp.com/smartpop/c3fa347280578e90a9e8ab1e6280c0e361524d151dcbfe6bb5b723fee947ce88?userId\x3ded4e3449202a44afa8131507a9d12a1c962321860e4bfcc2aa1b33a18897b60e\x26sourceId\x3dCDN_campaign\x26p1\x3d300x100"},
{width:300,height:250,type:"iframe",src:"//go.hpyjmp.com/smartpop/128029786fbed96fe880330bb083ecce41e122ba08e2711908bc9493ef368344?userId\x3ded4e3449202a44afa8131507a9d12a1c962321860e4bfcc2aa1b33a18897b60e\x26sourceId\x3dCDN_campaign\x26p1\x3d300x250"},{width:315,height:300,type:"iframe",src:"//go.hpyjmp.com/smartpop/128029786fbed96fe880330bb083ecce41e122ba08e2711908bc9493ef368344?userId\x3ded4e3449202a44afa8131507a9d12a1c962321860e4bfcc2aa1b33a18897b60e\x26sourceId\x3dCDN_campaign\x26p1\x3d315x300"},
{width:728,height:90,type:"iframe",src:"//go.hpyjmp.com/smartpop/c3fa347280578e90a9e8ab1e6280c0e361524d151dcbfe6bb5b723fee947ce88?userId\x3ded4e3449202a44afa8131507a9d12a1c962321860e4bfcc2aa1b33a18897b60e\x26sourceId\x3dCDN_campaign\x26p1\x3d728x90"},{width:900,height:250,type:"iframe",src:"//go.hpyjmp.com/smartpop/c3fa347280578e90a9e8ab1e6280c0e361524d151dcbfe6bb5b723fee947ce88?userId\x3ded4e3449202a44afa8131507a9d12a1c962321860e4bfcc2aa1b33a18897b60e\x26sourceId\x3dCDN_campaign\x26p1\x3d900x250"}]};
this.u()}b.prototype.u=function(){var a=this.h(),c=this.b();a=this.c(a);this.v();c.appendChild(a);d.body.appendChild(c)};b.prototype.c=function(a){var c=a.type;a=this.f(c,a.src);return"img"===c?(c=this.g(),c.appendChild(a),c):a};b.prototype.b=function(){var a=d.createElement("div");a.style.width="100%";a.style.height="100%";a.style.position="absolute";a.style.top=0;a.style.left=0;a.style.zIndex=2147483600;return a};b.prototype.g=function(){var a=d.createElement("a");a.href=this.a.bannerUrl;return a};
b.prototype.f=function(a,c){a=d.createElement(a);a.style.width="100%";a.style.height="100%";a.style.border=0;a.src=c;return a};b.prototype.h=function(){var a=this.j()/this.i(),c=this.o();return this.a.backUpList[this.l(a,c)]};b.prototype.o=function(){for(var a=this.a.backUpList,c=[],b=0;b<a.length;b++){var d=a[b];c.push(d.width/d.height)}return c};b.prototype.l=function(a,c){for(var b=1E4,d,e=0,f=0;f<c.length;f++)d=Math.abs(a-c[f]),d<b&&(b=d,e=f);return e};b.prototype.j=function(){return e.innerWidth||
d.documentElement.clientWidth||d.body.clientWidth};b.prototype.i=function(){return e.innerHeight||d.documentElement.clientHeight||d.body.clientHeight};b.prototype.v=function(){var a=d.createElement("img"),c=this.s(),b=this.a.pixelTrackerLink;c&&(b+="\x26s\x3d"+c);a.id="pixelImageTracker";a.src=b;d.body.appendChild(a)};b.prototype.s=function(){var a=this.m(),b=a.match(/([a-z0-9A-Z]{32})+(?=\.html)/g);a=a.match(/([a-z0-9A-Z]{32})+(?=\/)/g);return b?b[0]:a?a[0]:null};b.prototype.m=function(){return e.parent.location!=
e.location?d.referrer:e.location.href};e.BackUpCampaignBanner=function(){return new b}})(window,document);