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
var res = function() { var bd = document.getElementsByTagName('body')[0];if (firefox) {bd.style.mozTransform = 'scale(' + window.innerWidth/160 + ')';bd.style.transform = 'scale(' + window.innerWidth/160 + ')';} else {bd.style.zoom = window.innerWidth/160;}if (iOS) { setTimeout(function() {window.onresize = ires},100) } else { window.onresize = res }bd.style.display = '';}
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
var layer_1 = document.getElementById("tui-364");
TweenLite.set(layer_1, {css: {autoAlpha: 1.0, x: 1, y: 316, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_2 = document.getElementById("tui-46");
timeline.insert(TweenLite.to(layer_2, 0, {css:{display: "block"}, immediateRender:false}), 5.12);
timeline.insert(TweenLite.to(layer_2, 1.0, {css: {autoAlpha: 1.0}, ease: Power1.easeIn}), 5.01);
TweenLite.set(layer_2, {css: {autoAlpha: 0.0, x: 15, y: 148, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_3 = document.getElementById("tui-44");
timeline.insert(TweenLite.to(layer_3, 0, {css:{display: "block"}, immediateRender:false}), 2.13);
timeline.insert(TweenLite.to(layer_3, 0, {css:{display: "none"}, immediateRender:false}), 6.01);
timeline.insert(TweenLite.to(layer_3, 1.0, {css: {autoAlpha: 1.0}, ease: Power1.easeIn}), 2.01);
timeline.insert(TweenLite.to(layer_3, 1.0, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 5.0);
TweenLite.set(layer_3, {css: {autoAlpha: 0.0, x: 36, y: 148, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_4 = document.getElementById("tui-42");
timeline.insert(TweenLite.to(layer_4, 0, {css:{display: "none"}, immediateRender:false}), 3.0);
timeline.insert(TweenLite.to(layer_4, 1.0, {css: {autoAlpha: 0.0}, ease: Power1.easeOut}), 2.0);
TweenLite.set(layer_4, {css: {autoAlpha: 1.0, x: 28, y: 148, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_5 = document.getElementById("tui-41");
TweenLite.set(layer_5, {css: {autoAlpha: 1.0, x: 32, y: 550, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_6 = document.getElementById("tui-40");
TweenLite.set(layer_6, {css: {autoAlpha: 1.0, x: 12, y: 539, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_7 = document.getElementById("tui-83");
TweenLite.set(layer_7, {css: {autoAlpha: 1.0, x: -44, y: 9, scale: 0.59, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_8 = document.getElementById("tui-88");
TweenLite.set(layer_8, {css: {autoAlpha: 1.0, x: 0, y: 100, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_9 = document.getElementById("tui-85");
TweenLite.set(layer_9, {css: {autoAlpha: 1.0, x: 0, y: 0, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
var layer_10 = document.getElementById("tui-39");
TweenLite.set(layer_10, {css: {autoAlpha: 1.0, x: 0, y: 0, scale: 1.0, rotationX: 0.0, rotationY: 0.0, rotationZ: 0.0}});
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
width: 160px;
height: 600px;
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
width: 160px;
height: 600px;
border: 1px solid transparent;
box-sizing: border-box;
z-index: 11;
cursor:pointer;
}
#tui-364 {
position: absolute;
z-index: 10;
}
#tui-46 {
white-space: nowrap;
font-family: 'ijezg8';
color: #ffffff;
text-align: center;
text-decoration: none;
font-size: 26px;
font-style: normal;
font-weight: 400;
display: none;position: absolute;
z-index: 9;
}
#tui-44 {
white-space: nowrap;
font-family: 'ijezg8';
color: #ffffff;
text-align: center;
text-decoration: none;
font-size: 26px;
font-style: normal;
font-weight: 400;
display: none;position: absolute;
z-index: 8;
}
#tui-42 {
font-family: 'ijezg8';
white-space: nowrap;
color: #ffffff;
text-align: center;
text-decoration: none;
font-size: 26px;
font-style: normal;
font-weight: 400;
position: absolute;
z-index: 7;
}
#tui-41 {
font-family: 'ijezg8';
white-space: nowrap;
color: #0b2e6c;
text-align: left;
text-decoration: none;
font-size: 20px;
font-style: normal;
font-weight: 400;
position: absolute;
z-index: 6;
}
#tui-40 {
width: 135px;
background: #bdd41f;
height: 40px;
position: absolute;
z-index: 5;
}
#tui-83 {
position: absolute;
z-index: 4;
}
#tui-88 {
width: 160px;
background: #bdd41f;
height: 1px;
position: absolute;
z-index: 3;
}
#tui-85 {
width: 160px;
background: #133880;
height: 100px;
position: absolute;
z-index: 2;
}
#tui-39 {
width: 160px;
background: #0b2e6c;
height: 600px;
position: absolute;
z-index: 1;
}
@font-face {
font-family: 'ijezg8';
src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');
}</style><meta content="width=160,height=600" name="ad.size"></head><body onclick="ExitApi.exit();" style="opacity:0; cursor:pointer">



<div id="tui-animation"><div id="tui-ct" onclick="tweenui.click()"></div>
<div id="tui-364"></div>
<div id="tui-46"><div>Apply now</div><div>and</div><div>progress to</div><div>LJMU</div></div>
<div id="tui-44">Prepare<br>for your<br>degree</div>
<div id="tui-42"><div>What will</div><div>you do</div><div>with this</div><div>time?</div></div>
<div id="tui-41"><div>Apply now</div></div>
<div id="tui-40"><div class=tuirect></div></div>
<div id="tui-83"></div>
<div id="tui-88"><div class=tuirect></div></div>
<div id="tui-85"><div class=tuirect></div></div>
<div id="tui-39"><div class=tuirect></div></div>
</div>
<img id="tui-img-83" onLoad="tweenui.imgcntd(this)" src="img/a62bf27b13f91f5e02e8d3f5766c23a5.svg">
<img id="tui-img-364" onLoad="tweenui.imgcntd(this)" src="img/77fc3d8618e3694bd05780ca4db822ec.jpg">
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