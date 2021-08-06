<!doctype html><html><head><script src="/pagead/gadgets/html5/api/exitapi-impl.js" type="text/javascript"></script><script src="/pagead/gadgets/html5/addata.js" type="text/javascript"></script><meta content="text/html; charset=UTF-8" http-equiv="content-type"><title></title><script>

var clickTag="";
(function(tweenui) {
var timeline;
var loop=-1;
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
function startPlaying() { if (loop<0) timeline.play(0); else { if (loop>0){loop--;timeline.play(0)}}}
function g(name) { name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)","i"); var results = regex.exec(window.location.search); if(results == null) return ""; else return decodeURIComponent(results[1].replace(/\+/g, " ")); }
function gl(a){for(var i=0;i<a.length;++i){var x=g(a[i]);if (x!='')return x;}return '';}
var res = function() { var bd = document.getElementsByTagName('body')[0];if (firefox) {bd.style.mozTransform = 'scale(' + window.innerWidth/970 + ')';bd.style.transform = 'scale(' + window.innerWidth/970 + ')';} else {bd.style.zoom = window.innerWidth/970;}if (iOS) { setTimeout(function() {window.onresize = ires},100) } else { window.onresize = res }bd.style.display = '';}
var ires = function() { if (window.onresize) { window.onresize = null; var bd = document.getElementsByTagName('body')[0]; bd.style.display = 'none'; setTimeout(res, 500); }}
var loadcnt = 3;
function tui_go() {
--loadcnt; if (loadcnt==0) {
if (typeof(tweenui.exp) == "function") { tweenui.exp(); }
if (g('s')==1) { res();if (iOS) { window.addEventListener('orientationchange', ires, false) }}
document.getElementsByTagName('body')[0].style.opacity=1;
startPlaying();
}
}
tweenui.init = function() {
timeline = new TimelineLite({paused:true, onComplete:startPlaying});
TweenLite.defaultOverwrite = "none";
timeline.insert(new TweenLite({}, 0.0, {}), 9.0);
var layer_1 = document.getElementById("tui-128");
timeline.insert(TweenLite.to(layer_1, 0, {css:{display: "block"}, immediateRender:false}), 5.5);
timeline.insert(TweenLite.to(layer_1, 1.0, {css: {autoAlpha: 1.0}, ease: Power1.easeOut}), 5.5);
TweenLite.set(layer_1, {css: {autoAlpha: 0.0, x: 39, y: 111, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_2 = document.getElementById("tui-126");
timeline.insert(TweenLite.to(layer_2, 0, {css:{display: "block"}, immediateRender:false}), 2.5);
timeline.insert(TweenLite.to(layer_2, 0, {css:{display: "none"}, immediateRender:false}), 6.5);
timeline.insert(TweenLite.to(layer_2, 1.0, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 5.5);
timeline.insert(TweenLite.to(layer_2, 1.0, {css: {autoAlpha: 1.0}, ease: Power1.easeIn}), 2.52);
TweenLite.set(layer_2, {css: {autoAlpha: 0.0, x: 39, y: 110, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_3 = document.getElementById("tui-124");
timeline.insert(TweenLite.to(layer_3, 0, {css:{display: "none"}, immediateRender:false}), 3.5);
timeline.insert(TweenLite.to(layer_3, 1.0, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 2.5);
TweenLite.set(layer_3, {css: {autoAlpha: 1.0, x: 39, y: 110, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_4 = document.getElementById("tui-368");
TweenLite.set(layer_4, {css: {autoAlpha: 1.0, x: 549, y: 1, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_5 = document.getElementById("tui-122");
TweenLite.set(layer_5, {css: {autoAlpha: 1.0, x: 549, y: 0, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_6 = document.getElementById("tui-123");
TweenLite.set(layer_6, {css: {autoAlpha: 1.0, x: 52, y: 208, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_7 = document.getElementById("tui-121");
TweenLite.set(layer_7, {css: {autoAlpha: 1.0, x: 40, y: 201, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_8 = document.getElementById("tui-131");
TweenLite.set(layer_8, {css: {autoAlpha: 1.0, x: -5, y: 4, scale: 0.64, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_9 = document.getElementById("tui-130");
TweenLite.set(layer_9, {css: {autoAlpha: 1.0, x: 0, y: 89, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_10 = document.getElementById("tui-129");
TweenLite.set(layer_10, {css: {autoAlpha: 1.0, x: 0, y: 0, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_11 = document.getElementById("tui-120");
TweenLite.set(layer_11, {css: {autoAlpha: 1.0, x: 0, y: 0, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
tui_go();
}
tui_go();
var imgcnt = 2;
tweenui.imgcntd = function(e) { var id = e.id.replace(/[^0-9.]/g, "");e.parentNode.removeChild(e);document.getElementById('tui-' + id).appendChild(e); --imgcnt; if (imgcnt==0) { tui_go(); }}
tweenui.click = function() { if (window.clickTag!="") {window.open(window.clickTag)}}
var l = gl(["l","clicktag"]);
if (l!="") { if (g('a')==1) { l = l + encodeURIComponent(window.clickTag) } window.clickTag=l;}
}(window.tweenui = window.tweenui || {}));</script><style type="text/css">body {
-webkit-transform-origin: 0 0; transform-origin: 0 0;margin:0px;padding:0px;position:fixed;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing:grayscale;}#tui-animation {
overflow: hidden;
position: relative;
background: #ffffff;
width: 970px;
height: 250px;
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-webkit-perspective: 500px;
perspective: 500px;
}#tui-animation div {
-webkit-transform-style: preserve-3d;
transform-style: preserve-3d;
}#tui-animation img {
display: block;
}
#tui-ct {
position: absolute;
width: 970px;
height: 250px;
border: 1px solid transparent;
box-sizing: border-box;
z-index: 12;
cursor:pointer;
}
#tui-128 {
white-space: nowrap;
font-family: 'ijezg8';
color: #ffffff;
text-align: left;
text-decoration: none;
font-size: 22px;
font-style: normal;
font-weight: 400;
display: none;position: absolute;
z-index: 11;
}
#tui-126 {
font-family: 'ijezg8';
white-space: nowrap;
color: #ffffff;
text-align: left;
text-decoration: none;
font-size: 22px;
font-style: normal;
font-weight: 400;
display: none;position: absolute;
z-index: 10;
}
#tui-124 {
font-family: 'ijezg8';
white-space: nowrap;
color: #ffffff;
text-align: left;
font-size: 22px;
text-decoration: none;
font-style: normal;
font-weight: 400;
position: absolute;
z-index: 9;
}
#tui-368 {
position: absolute;
z-index: 8;
}
#tui-122 {
width: 420px;
background: #333333;
height: 250px;
position: absolute;
z-index: 7;
}
#tui-123 {
font-family: 'ijezg8';
white-space: nowrap;
color: #0b2e6c;
text-align: left;
text-decoration: none;
font-size: 18px;
font-style: normal;
font-weight: 400;
position: absolute;
z-index: 6;
}
#tui-121 {
width: 110px;
background: #bdd41f;
height: 35px;
position: absolute;
z-index: 5;
}
#tui-131 {
position: absolute;
z-index: 4;
}
#tui-130 {
width: 548px;
background: #bdd41f;
height: 1px;
position: absolute;
z-index: 3;
}
#tui-129 {
width: 548px;
background: #133880;
height: 90px;
position: absolute;
z-index: 2;
}
#tui-120 {
width: 970px;
background: #0b2e6c;
height: 250px;
position: absolute;
z-index: 1;
}
@font-face {
font-family: 'ijezg8';
src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
}</style><meta content="width=970,height=250" name="ad.size"></head><body onclick="ExitApi.exit();" style="opacity:0; cursor:pointer">



<div id="tui-animation"><div id="tui-ct" onclick="tweenui.click()"></div>
<div id="tui-128"><div>Apply now for September 2021 and progress</div><div>to Liverpool John Moores University</div></div>
<div id="tui-126"><div>Get the same exceptional, high quality teaching <br>online as you would experience on-campus</div></div>
<div id="tui-124"><div>What will you do with this time? Prepare<br>for your degree and start your future now</div></div>
<div id="tui-368"></div>
<div id="tui-122"><div class=tuirect></div></div>
<div id="tui-123"><div>Apply now</div></div>
<div id="tui-121"><div class=tuirect></div></div>
<div id="tui-131"></div>
<div id="tui-130"><div class=tuirect></div></div>
<div id="tui-129"><div class=tuirect></div></div>
<div id="tui-120"><div class=tuirect></div></div>
</div>
<img id="tui-img-368" onLoad="tweenui.imgcntd(this)" src="img/d7c661f1e52d53d084f275e84bd9368b.jpg">
<img id="tui-img-131" onLoad="tweenui.imgcntd(this)" src="img/a62bf27b13f91f5e02e8d3f5766c23a5.svg">
<script>
(function(d, t) {
var s = d.createElement(t);
s.src = 'https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.18.0_499ba64a23378545748ff12d372e59e9_min.js';
s.onload = s.onreadystatechange = function() {
var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
tweenui.init();
};
var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
})(document, 'script');
</script>



</body></html>