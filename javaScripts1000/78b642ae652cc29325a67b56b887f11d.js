<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<title>Template_V4_Illustration_300x250</title>
<style>
	@font-face {
		font-family: 'Segoe Pro';
		src: local('âº'), url('fonts/SegoePro-Semibold.woff') format('woff');
		font-weight: normal;
		font-style: Regular;
		text-rendering: geometricPrecision;
	}
body {
    background-color:#909090;
		overflow: hidden;
}
</style>
<!-- <script>var clickTag = "http://www.google.com";</script>
<script src="copy.js"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.5/EaselPlugin.min.js"></script>
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="Template_V4_Illustration_300x250.js?1501171107836"></script>
<meta name="ad.size" content="width=300,height=250">
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, initReady
initReady=false
gsap.registerPlugin(EaselPlugin);
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("90A26FE74B042E4A89CA750D1DA2DF1F");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.Template_V4_Illustration_300x250();
	stage = new lib.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();

	 if (!initReady) {
        startBanner()
    }

    TweenMax.delayedCall(0.2,function(){
				// var iframe = window.frameElement;
				// var parentWindow = iframe.contentWindow.parent ? iframe.contentWindow.parent  : iframe.contentWindow;
				// var bannerData = parentWindow.getBannerData();
				// bannerData.headline1 = eval(bannerData.textField1);
				// bannerData.CTA = eval(bannerData.ctaText);
				// bannerData.CTAarrowVisible = eval(bannerData.CTAarrowVisible);
				// // bannerData.CTA = bannerData.ctaText ? ['<#FFFFFF>' + bannerData.ctaText,(bannerData.ctaText.length >= 15 ? "9px" : "12px"),0,0,"50","300", "center"] : '';
				// var mainHit = document.getElementById("hit");
				// mainHit.addEventListener("click", function(){
				// 	parentWindow.amo.onDynAdClick(parentWindow.adData.feedData, "CLICK", parentWindow.adClickUrl);
				// 	if(bannerData.clickTracker) {
				// 		var clickTrackers = bannerData.clickTracker.split('|');
				// 		clickTrackers.forEach(function(url){
				// 			if(url && url.toLowerCase() != 'na') {
				// 					(new Image()).src = url;
				// 			}
				// 		});
				// 	}
				// });
				// if(bannerData.impressionTracker) {
				// 	var impressionTrackers = bannerData.impressionTracker.split('|');
				// 	impressionTrackers.forEach(function(url){
				// 		if(url && url.toLowerCase() != 'na') {
				// 				(new Image()).src = url;
				// 		}
				// 	});
				// }
        exportRoot.initBanner(bannerData)
        exportRoot.runBanner()
    })
	initReady=true
}

var loadFont = false
	var loadBody = false
	function loaded(type) {
		if (type=='font') loadFont=true
		if (type=='body') loadBody=true
		if (loadFont && loadBody) init()
	}

	(function() {
		// Optimization for Repeat Views

		/* Font Face Observer v2.0.13 - Â© Bram Stein. License: BSD-3-Clause */
		(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
		function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
		function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());
		(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function r(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
		this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
		function t(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function y(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function z(a,b){function c(){var a=k;y(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);y(a)};function A(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var B=null,C=null,E=null,F=null;function G(){if(null===C)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);C=!!a&&603>parseInt(a[1],10)}else C=!1;return C}function J(){null===F&&(F=!!document.fonts);return F}
		function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
		A.prototype.load=function(a,b){var c=this,k=a||"BESbswy",q=0,D=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=D?b():document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},function(){b()})}e()}),N=new Promise(function(a,c){q=setTimeout(c,D)});Promise.race([N,M]).then(function(){clearTimeout(q);a(c)},function(){b(c)})}else m(function(){function u(){var b;if(b=-1!=
		f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===B&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),B=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=B&&(f==v&&g==v&&h==v||f==w&&g==w&&h==w||f==x&&g==x&&h==x)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(q),a(c))}function I(){if((new Date).getTime()-H>=D)d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,
		g=n.a.offsetWidth,h=p.a.offsetWidth,u();q=setTimeout(I,50)}}var e=new r(k),n=new r(k),p=new r(k),f=-1,g=-1,h=-1,v=-1,w=-1,x=-1,d=document.createElement("div");d.dir="ltr";t(e,L(c,"sans-serif"));t(n,L(c,"serif"));t(p,L(c,"monospace"));d.appendChild(e.a);d.appendChild(n.a);d.appendChild(p.a);document.body.appendChild(d);v=e.a.offsetWidth;w=n.a.offsetWidth;x=p.a.offsetWidth;I();z(e,function(a){f=a;u()});t(e,L(c,'"'+c.family+'",sans-serif'));z(n,function(a){g=a;u()});t(n,L(c,'"'+c.family+'",serif'));
		z(p,function(a){h=a;u()});t(p,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=A:(window.FontFaceObserver=A,window.FontFaceObserver.prototype.load=A.prototype.load);}());
		var fontA = new FontFaceObserver('Segoe Pro');
		Promise.all([
			fontA.load(null, 10000),
		]).then(function () {
			//loading();
			loaded('font')
		});
	})();


</script>
<!-- write your code here -->
</head>
<body onload="loaded('body')" style="margin:0px;">

<div id="hit" style="display:block; position:absolute; top:0px; left:0px; width:300px; height:250px; z-index:99999 !important; cursor:pointer; "></div>
<div id="animation_container" style="background-color:#FFFFFF; width:300px; height:250px">
	<canvas id="canvas" width="300" height="250" style="position: absolute; display: block; background-color:#FFFFFF; cursor:pointer;" role="img"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:300px; height:250px; position: absolute; left: 0px; top: 0px; display: block;">
		<div style="position: absolute; border: 1px solid black; box-sizing: border-box; background-color:transparent; top: 0; left: 0; width: 100%; bottom: 0;"></div>
		</div>
</div>


<script>
var startBanner = function(){

				var mainHit = document.getElementById("hit");
				var animation_container = document.getElementById("animation_container");
				mainHit.addEventListener("mouseover", over.bind(this));
				function over() {
				exportRoot.mainMC.cta.arrow.gotoAndStop(1);
				}

				mainHit.addEventListener("mouseout", out.bind(this));
				function out() {
						exportRoot.mainMC.cta.arrow.gotoAndStop(0);
				}
				// mainHit.addEventListener("click", exitHandler.bind(this));
				// function exitHandler() {
				//   window.open(clickTag);
				// }
				amoAd.addTracker();
		}
</script>
<script type="text/javascript">
	var amoAd = (function(){
		var iframe = window.frameElement;
		var parentWindow = iframe.contentWindow.parent ? iframe.contentWindow.parent  : iframe.contentWindow;
		window.bannerData = parentWindow.getBannerData();
		bannerData.headline1 = eval(bannerData.textField1);
		bannerData.CTA = eval(bannerData.ctaText);
		bannerData.CTA[0] = bannerData.CTA[0].split('<br>').join('\n');
		bannerData.CTAarrowVisible = eval(bannerData.CTAarrowVisible);
		// bannerData.CTA = bannerData.ctaText ? ['<#FFFFFF>' + bannerData.ctaText,(bannerData.ctaText.length >= 15 ? "9px" : "12px"),0,0,"50","300", "center"] : '';
		function addTracker() {
			var mainHit = document.getElementById("hit");
			mainHit.addEventListener("click", function(){
				parentWindow.amo.onDynAdClick(parentWindow.adData.feedData, "CLICK", parentWindow.adClickUrl);
				if(bannerData.clickTracker) {
					var clickTrackers = bannerData.clickTracker.split('|');
					clickTrackers.forEach(function(url){
						if(url && url.toLowerCase() != 'na') {
								(new Image()).src = url;
						}
					});
				}
			});
			if(bannerData.impressionTracker) {
				var impressionTrackers = bannerData.impressionTracker.split('|');
				impressionTrackers.forEach(function(url){
					if(url && url.toLowerCase() != 'na') {
							(new Image()).src = url;
					}
				});
			}
		}
		function click(id) {
			if(id == -1 && parentWindow.urls[0].defaultPath.toLowerCase() != 'na') {
					parentWindow.amo.onDynAdClick(parentWindow.urls[0].data, "CLICK", parentWindow.urls[0].defaultPath, parentWindow.urls[0].defaultClickLabel);
			} else if(id >= 0 && parentWindow.urls[id].path.toLowerCase() != 'na') {
					parentWindow.amo.onDynAdClick(parentWindow.urls[id].data, "CLICK", parentWindow.urls[id].path, parentWindow.urls[id].clickLabel);
			}
		}
		function onInteraction(id) {
			var parentWindows = window.parent.parent.window;
			if (parentWindows && 'amoUtils' in parentWindows && 'onInteraction' in parentWindows.amoUtils) {
				try {
					if(id == -1) { parentWindows.amoUtils.onInteraction(parentWindow.urls[0].defaultLabel, parentWindow.urls[0].data); }
					else { parentWindows.amoUtils.onInteraction(parentWindow.urls[id].label, parentWindow.urls[id].data); }
				} catch (e) {}
			}
		}
		return {
			addTracker: function(){ addTracker(); },
			click: function(id) { click(id); },
			onInteraction: function(id) { onInteraction(id); }
		};
	})();
</script>
</body>
</html>
