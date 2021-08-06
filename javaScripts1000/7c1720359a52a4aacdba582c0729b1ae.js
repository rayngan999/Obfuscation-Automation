<!DOCTYPE html>
<!--
	NOTES:
	1. All tokens are represented by '$' sign in the template.
	2. You can write your code only wherever mentioned.
	3. All occurrences of existing tokens will be replaced by their appropriate values.
	4. Blank lines will be removed automatically.
	5. Remove unnecessary comments before creating your template.
-->
<html>
<head>
<meta charset="UTF-8">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<title>index</title>
<!-- write your code here -->
<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="ad.size" content="width=320,height=50">
<script>
var clickTag = '';
(function (cjs, an) {
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);
(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);
(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,54);
(lib.cardface1 = function() {
	this.initialize(img.cardface1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,88);
(lib.cardface2 = function() {
	this.initialize(img.cardface2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,93);
(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,20);
(lib.img_logo = function() {
	this.initialize(img.img_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,50);
(lib.img_phone = function() {
	this.initialize(img.img_phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,52);
(lib.img_tnc = function() {
	this.initialize(img.img_tnc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,11);
(lib.img_tnc2 = function() {
	this.initialize(img.img_tnc2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,20);
(lib.logo_711 = function() {
	this.initialize(img.logo_711);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,32);
(lib.logo_ikea = function() {
	this.initialize(img.logo_ikea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,24);
(lib.logo_kfc = function() {
	this.initialize(img.logo_kfc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);
(lib.logo_mx = function() {
	this.initialize(img.logo_mx);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,23);
(lib.logo_pizza = function() {
	this.initialize(img.logo_pizza);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,30);
(lib.logo_wellcome = function() {
	this.initialize(img.logo_wellcome);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,20);
(lib.tag = function() {
	this.initialize(img.tag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,31);
(lib.txt1 = function() {
	this.initialize(img.txt1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,19);
(lib.txt1_bg = function() {
	this.initialize(img.txt1_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,60);
(lib.txt2_1 = function() {
	this.initialize(img.txt2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,14);
(lib.txt2_2 = function() {
	this.initialize(img.txt2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,186,16);
(lib.txt2_bg = function() {
	this.initialize(img.txt2_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,70);
(lib.txt3_1 = function() {
	this.initialize(img.txt3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,30);
(lib.txt3_2 = function() {
	this.initialize(img.txt3_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,30);
(lib.txt3_3 = function() {
	this.initialize(img.txt3_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,21);
(lib.txt4 = function() {
	this.initialize(img.txt4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,28);// helper functions:
function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}
function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}
(lib.txt4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.txt4();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt4_1, new cjs.Rectangle(0,0,80,28), null);
(lib.txt3_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.txt3_3();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt3_3_1, new cjs.Rectangle(0,0,20,21), null);
(lib.txt3_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.txt3_2();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt3_2_1, new cjs.Rectangle(0,0,46,30), null);
(lib.txt3_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.txt3_1();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt3_1_1, new cjs.Rectangle(0,0,83,30), null);
(lib.txt2_bg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.txt2_bg();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt2_bg_1, new cjs.Rectangle(0,0,256,70), null);
(lib.txt2_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.txt2_2();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt2_2_1, new cjs.Rectangle(0,0,186,16), null);
(lib.txt2_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.txt2_1();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt2_1_1, new cjs.Rectangle(0,0,108,14), null);
(lib.txt1_bg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.txt1_bg();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt1_bg_1, new cjs.Rectangle(0,0,240,60), null);
(lib.txt1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.txt1();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.txt1_1, new cjs.Rectangle(0,0,108,19), null);
(lib.tnc2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.img_tnc2();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.tnc2, new cjs.Rectangle(0,0,114,20), null);
(lib.tnc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.img_tnc();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.tnc, new cjs.Rectangle(0,0,184,11), null);
(lib.tag_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.tag();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.tag_1, new cjs.Rectangle(0,0,44,31), null);
(lib.logo_wellcome_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.logo_wellcome();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.logo_wellcome_1, new cjs.Rectangle(0,0,81,20), null);
(lib.logo_pizza_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.logo_pizza();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.logo_pizza_1, new cjs.Rectangle(0,0,31,30), null);
(lib.logo_mx_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.logo_mx();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.logo_mx_1, new cjs.Rectangle(0,0,48,23), null);
(lib.logo_kfc_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.logo_kfc();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.logo_kfc_1, new cjs.Rectangle(0,0,31,31), null);
(lib.logo_ikea_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.logo_ikea();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.logo_ikea_1, new cjs.Rectangle(0,0,51,24), null);
(lib.logo_711_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.logo_711();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.logo_711_1, new cjs.Rectangle(0,0,33,32), null);
(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.img_logo();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,320,50), null);
(lib.img_phone_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.img_phone();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.img_phone_1, new cjs.Rectangle(0,0,62,52), null);
(lib.cta_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.cta();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,80,20), null);
(lib.card2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.cardface2();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.card2, new cjs.Rectangle(0,0,155,93), null);
(lib.card1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.cardface1();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.card1, new cjs.Rectangle(0,0,155,88), null);
(lib.box_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.box();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(0,0,78,54), null);
(lib.bg2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.bg2();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,320,50), null);
(lib.bg1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_1
	this.instance = new lib.bg1();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(0,0,320,50), null);
// stage content:
(lib.HSP1689_320x50_v1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(41,10,1,1,0,0,0,41,10);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22).to({alpha:0},4).to({_off:true},1).wait(213).to({_off:false,alpha:1},0).wait(22).to({alpha:0},4).to({_off:true},1).wait(213).to({_off:false,alpha:1},0).wait(22).to({alpha:0},4).to({_off:true},1).wait(213));
	// Layer_1
	this.instance_1 = new lib.tnc2();
	this.instance_1.setTransform(261,38,1,1,0,0,0,57,10);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(194).to({_off:false},0).to({alpha:1},3).to({_off:true},43).wait(194).to({_off:false,alpha:0},0).to({alpha:1},3).to({_off:true},43).wait(194).to({_off:false,alpha:0},0).to({alpha:1},3).wait(43));
	// tnc
	this.instance_2 = new lib.tnc();
	this.instance_2.setTransform(106.5,43,1,1,0,0,0,101.5,5);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(194).to({alpha:0},3).to({_off:true},1).wait(42).to({_off:false,alpha:1},0).wait(194).to({alpha:0},3).to({_off:true},1).wait(42).to({_off:false,alpha:1},0).wait(194).to({alpha:0},3).to({_off:true},1).wait(42));
	// tag
	this.instance_3 = new lib.tag_1();
	this.instance_3.setTransform(111.6,15,0.4996,0.4996,-14.8227,0,0,24.5,17.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(199).to({_off:false},0).to({regX:24.6,scaleX:1.1,scaleY:1.1,rotation:5.0002,x:111.55,alpha:1},5).to({regX:24.5,regY:17,scaleX:1,scaleY:1,rotation:0,x:111.5},2).to({_off:true},34).wait(199).to({_off:false,regY:17.1,scaleX:0.4996,scaleY:0.4996,rotation:-14.8227,x:111.6,alpha:0},0).to({regX:24.6,scaleX:1.1,scaleY:1.1,rotation:5.0002,x:111.55,alpha:1},5).to({regX:24.5,regY:17,scaleX:1,scaleY:1,rotation:0,x:111.5},2).to({_off:true},34).wait(199).to({_off:false,regY:17.1,scaleX:0.4996,scaleY:0.4996,rotation:-14.8227,x:111.6,alpha:0},0).to({regX:24.6,scaleX:1.1,scaleY:1.1,rotation:5.0002,x:111.55,alpha:1},5).to({regX:24.5,regY:17,scaleX:1,scaleY:1,rotation:0,x:111.5},2).wait(34));
	// box
	this.instance_4 = new lib.box_1();
	this.instance_4.setTransform(176,38,1,1,0,0,0,53,39);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(196).to({_off:false},0).to({alpha:1},5).to({_off:true},39).wait(196).to({_off:false,alpha:0},0).to({alpha:1},5).to({_off:true},39).wait(196).to({_off:false,alpha:0},0).to({alpha:1},5).wait(39));
	// shine_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_218 = new cjs.Graphics().p("AlCBkQgIgBgHgCQgLgCgKgFIgNgIQgQgMgGgTQgFgPgBgPQgBgcACgeQABgHADgHQARgkAogLIAPgBIKDAAQAIABAIACQAOAEANAIQAKAGAIAIQAKAMAFAPQACAGAAAJIABAyIgBAIQgBATgKAQQgKAOgNAIIgNAHQgOAGgRAAg");
	var mask_graphics_458 = new cjs.Graphics().p("AlCBkQgIgBgHgCQgLgCgKgFIgNgIQgQgMgGgTQgFgPgBgPQgBgcACgeQABgHADgHQARgkAogLIAPgBIKDAAQAIABAIACQAOAEANAIQAKAGAIAIQAKAMAFAPQACAGAAAJIABAyIgBAIQgBATgKAQQgKAOgNAIIgNAHQgOAGgRAAg");
	var mask_graphics_698 = new cjs.Graphics().p("AlCBkQgIgBgHgCQgLgCgKgFIgNgIQgQgMgGgTQgFgPgBgPQgBgcACgeQABgHADgHQARgkAogLIAPgBIKDAAQAIABAIACQAOAEANAIQAKAGAIAIQAKAMAFAPQACAGAAAJIABAyIgBAIQgBATgKAQQgKAOgNAIIgNAHQgOAGgRAAg");
	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(218).to({graphics:mask_graphics_218,x:245.0083,y:15}).wait(22).to({graphics:null,x:0,y:0}).wait(218).to({graphics:mask_graphics_458,x:245.0083,y:15}).wait(22).to({graphics:null,x:0,y:0}).wait(218).to({graphics:mask_graphics_698,x:245.0083,y:15}).wait(22));
	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0,0.498,1],-16.6,-9.6,16.7,9.6).s().p("AknCnIEln6IEqCtIklH6g");
	this.shape.setTransform(178.275,7.775);
	this.shape._off = true;
	var maskedShapeInstanceList = [this.shape];
	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(218).to({_off:false},0).wait(1).to({x:190.475,y:8.675},0).wait(1).to({x:202.675,y:9.625},0).wait(1).to({x:214.875,y:10.525},0).wait(1).to({x:227.025,y:11.425},0).wait(1).to({x:239.225,y:12.375},0).wait(1).to({x:251.425,y:13.275},0).wait(1).to({x:263.625,y:14.175},0).wait(1).to({x:275.825,y:15.125},0).wait(1).to({x:288.025,y:16.025},0).wait(1).to({x:300.175,y:16.925},0).wait(1).to({x:312.375,y:17.875},0).wait(1).to({x:324.575,y:18.775},0).to({_off:true},10).wait(218).to({_off:false,x:178.275,y:7.775},0).wait(1).to({x:190.475,y:8.675},0).wait(1).to({x:202.675,y:9.625},0).wait(1).to({x:214.875,y:10.525},0).wait(1).to({x:227.025,y:11.425},0).wait(1).to({x:239.225,y:12.375},0).wait(1).to({x:251.425,y:13.275},0).wait(1).to({x:263.625,y:14.175},0).wait(1).to({x:275.825,y:15.125},0).wait(1).to({x:288.025,y:16.025},0).wait(1).to({x:300.175,y:16.925},0).wait(1).to({x:312.375,y:17.875},0).wait(1).to({x:324.575,y:18.775},0).to({_off:true},10).wait(218).to({_off:false,x:178.275,y:7.775},0).wait(1).to({x:190.475,y:8.675},0).wait(1).to({x:202.675,y:9.625},0).wait(1).to({x:214.875,y:10.525},0).wait(1).to({x:227.025,y:11.425},0).wait(1).to({x:239.225,y:12.375},0).wait(1).to({x:251.425,y:13.275},0).wait(1).to({x:263.625,y:14.175},0).wait(1).to({x:275.825,y:15.125},0).wait(1).to({x:288.025,y:16.025},0).wait(1).to({x:300.175,y:16.925},0).wait(1).to({x:312.375,y:17.875},0).wait(1).to({x:324.575,y:18.775},0).wait(10));
	// cta
	this.instance_5 = new lib.cta_1();
	this.instance_5.setTransform(250,16.5,0.5,0.5,0,0,0,45,11.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(203).to({_off:false},0).to({regX:45.1,scaleX:1.05,scaleY:1.05,x:250.05,y:16.45,alpha:1},5).to({regX:45,scaleX:1,scaleY:1,x:250,y:16.5},2).to({_off:true},30).wait(203).to({_off:false,scaleX:0.5,scaleY:0.5,alpha:0},0).to({regX:45.1,scaleX:1.05,scaleY:1.05,x:250.05,y:16.45,alpha:1},5).to({regX:45,scaleX:1,scaleY:1,x:250,y:16.5},2).to({_off:true},30).wait(203).to({_off:false,scaleX:0.5,scaleY:0.5,alpha:0},0).to({regX:45.1,scaleX:1.05,scaleY:1.05,x:250.05,y:16.45,alpha:1},5).to({regX:45,scaleX:1,scaleY:1,x:250,y:16.5},2).wait(30));
	// txt4
	this.instance_6 = new lib.txt4_1();
	this.instance_6.setTransform(130,29,1,1,0,0,0,125,12);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(194).to({_off:false},0).to({y:19,alpha:1},5).to({_off:true},41).wait(194).to({_off:false,y:29,alpha:0},0).to({y:19,alpha:1},5).to({_off:true},41).wait(194).to({_off:false,y:29,alpha:0},0).to({y:19,alpha:1},5).wait(41));
	// card2
	this.instance_7 = new lib.card2();
	this.instance_7.setTransform(259.7,24.3,0.0137,0.4272,0,0,0,87.4,44.1);
	this.instance_7._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(149).to({_off:false},0).to({regX:77.8,scaleX:0.4485},5,cjs.Ease.get(1)).to({regX:77.9,scaleX:0.4272,x:259.75},3,cjs.Ease.get(-1)).wait(35).to({alpha:0},5).to({_off:true},1).wait(191).to({_off:false,regX:87.4,scaleX:0.0137,x:259.7,alpha:1},0).to({regX:77.8,scaleX:0.4485},5,cjs.Ease.get(1)).to({regX:77.9,scaleX:0.4272,x:259.75},3,cjs.Ease.get(-1)).wait(35).to({alpha:0},5).to({_off:true},1).wait(191).to({_off:false,regX:87.4,scaleX:0.0137,x:259.7,alpha:1},0).to({regX:77.8,scaleX:0.4485},5,cjs.Ease.get(1)).to({regX:77.9,scaleX:0.4272,x:259.75},3,cjs.Ease.get(-1)).wait(35).to({alpha:0},5).to({_off:true},1).wait(42));
	// card1
	this.instance_8 = new lib.card1();
	this.instance_8.setTransform(260.2,25.35,0.0137,0.4272,0,0,0,87.4,44);
	this.instance_8._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(105).to({_off:false},0).to({regX:77.8,scaleX:0.4485},5,cjs.Ease.get(1)).to({regX:77.9,scaleX:0.4272,x:259.75},3,cjs.Ease.get(-1)).wait(35).to({regX:87.4,scaleX:0.0137,x:259.7},5).to({_off:true},1).wait(191).to({_off:false,x:260.2},0).to({regX:77.8,scaleX:0.4485},5,cjs.Ease.get(1)).to({regX:77.9,scaleX:0.4272,x:259.75},3,cjs.Ease.get(-1)).wait(35).to({regX:87.4,scaleX:0.0137,x:259.7},5).to({_off:true},1).wait(191).to({_off:false,x:260.2},0).to({regX:77.8,scaleX:0.4485},5,cjs.Ease.get(1)).to({regX:77.9,scaleX:0.4272,x:259.75},3,cjs.Ease.get(-1)).wait(35).to({regX:87.4,scaleX:0.0137,x:259.7},5).to({_off:true},1).wait(86));
	// txt3_3
	this.instance_9 = new lib.txt3_3_1();
	this.instance_9.setTransform(278.5,28.35,0.32,0.32,0,0,0,11.6,11.7);
	this.instance_9._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(107).to({_off:false},0).to({regY:11.6,scaleX:1.1,scaleY:1.1,x:174.7,y:29.25},5,cjs.Ease.get(1)).to({regX:11.5,regY:11.5,scaleX:1,scaleY:1,x:166.5,y:28.5},2).wait(80).to({regX:11.6,regY:11.7,scaleX:0.32,scaleY:0.32,x:278.5,y:28.35},3).to({_off:true},1).wait(149).to({_off:false},0).to({regY:11.6,scaleX:1.1,scaleY:1.1,x:174.7,y:29.25},5,cjs.Ease.get(1)).to({regX:11.5,regY:11.5,scaleX:1,scaleY:1,x:166.5,y:28.5},2).wait(80).to({regX:11.6,regY:11.7,scaleX:0.32,scaleY:0.32,x:278.5,y:28.35},3).to({_off:true},1).wait(149).to({_off:false},0).to({regY:11.6,scaleX:1.1,scaleY:1.1,x:174.7,y:29.25},5,cjs.Ease.get(1)).to({regX:11.5,regY:11.5,scaleX:1,scaleY:1,x:166.5,y:28.5},2).wait(80).to({regX:11.6,regY:11.7,scaleX:0.32,scaleY:0.32,x:278.5,y:28.35},3).to({_off:true},1).wait(42));
	// txt3_1
	this.instance_10 = new lib.txt3_1_1();
	this.instance_10.setTransform(246.5,26.75,0.32,0.32,0,0,0,49.7,17.8);
	this.instance_10._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(107).to({_off:false},0).to({regX:49.6,regY:17.6,scaleX:1.1,scaleY:1.1,x:62.15,y:23.45},5,cjs.Ease.get(1)).to({regX:49.5,regY:17.5,scaleX:1,scaleY:1,x:65.5,y:23.5},2).wait(80).to({x:66.45},0).to({regX:49.7,regY:17.8,scaleX:0.32,scaleY:0.32,x:246.5,y:26.75},3).to({_off:true},1).wait(149).to({_off:false},0).to({regX:49.6,regY:17.6,scaleX:1.1,scaleY:1.1,x:62.15,y:23.45},5,cjs.Ease.get(1)).to({regX:49.5,regY:17.5,scaleX:1,scaleY:1,x:65.5,y:23.5},2).wait(80).to({x:66.45},0).to({regX:49.7,regY:17.8,scaleX:0.32,scaleY:0.32,x:246.5,y:26.75},3).to({_off:true},1).wait(149).to({_off:false},0).to({regX:49.6,regY:17.6,scaleX:1.1,scaleY:1.1,x:62.15,y:23.45},5,cjs.Ease.get(1)).to({regX:49.5,regY:17.5,scaleX:1,scaleY:1,x:65.5,y:23.5},2).wait(80).to({x:66.45},0).to({regX:49.7,regY:17.8,scaleX:0.32,scaleY:0.32,x:246.5,y:26.75},3).to({_off:true},1).wait(42));
	// txt3_2
	this.instance_11 = new lib.txt3_2_1();
	this.instance_11.setTransform(266.7,26.4,0.32,0.32,0,0,0,24.7,16.7);
	this.instance_11._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(107).to({_off:false},0).to({regX:24.5,regY:16.6,scaleX:1.1,scaleY:1.1,x:133.7,y:22.35},5,cjs.Ease.get(1)).to({regY:16.5,scaleX:1,scaleY:1,x:129.5,y:22.5},2).wait(13).to({x:129.55},0).to({regX:24.6,regY:16.6,scaleX:1.2,scaleY:1.2,x:129.6},3).to({regX:24.5,regY:16.5,scaleX:1,scaleY:1,x:129.55},3).wait(34).to({regX:24.6,regY:16.6,scaleX:1.2,scaleY:1.2,x:129.6},3).to({regX:24.5,regY:16.5,scaleX:1,scaleY:1,x:129.55},3).wait(21).to({regX:24.7,regY:16.7,scaleX:0.32,scaleY:0.32,x:266.7,y:26.4},3).to({_off:true},1).wait(149).to({_off:false},0).to({regX:24.5,regY:16.6,scaleX:1.1,scaleY:1.1,x:133.7,y:22.35},5,cjs.Ease.get(1)).to({regY:16.5,scaleX:1,scaleY:1,x:129.5,y:22.5},2).wait(13).to({x:129.55},0).to({regX:24.6,regY:16.6,scaleX:1.2,scaleY:1.2,x:129.6},3).to({regX:24.5,regY:16.5,scaleX:1,scaleY:1,x:129.55},3).wait(34).to({regX:24.6,regY:16.6,scaleX:1.2,scaleY:1.2,x:129.6},3).to({regX:24.5,regY:16.5,scaleX:1,scaleY:1,x:129.55},3).wait(21).to({regX:24.7,regY:16.7,scaleX:0.32,scaleY:0.32,x:266.7,y:26.4},3).to({_off:true},1).wait(149).to({_off:false},0).to({regX:24.5,regY:16.6,scaleX:1.1,scaleY:1.1,x:133.7,y:22.35},5,cjs.Ease.get(1)).to({regY:16.5,scaleX:1,scaleY:1,x:129.5,y:22.5},2).wait(13).to({x:129.55},0).to({regX:24.6,regY:16.6,scaleX:1.2,scaleY:1.2,x:129.6},3).to({regX:24.5,regY:16.5,scaleX:1,scaleY:1,x:129.55},3).wait(34).to({regX:24.6,regY:16.6,scaleX:1.2,scaleY:1.2,x:129.6},3).to({regX:24.5,regY:16.5,scaleX:1,scaleY:1,x:129.55},3).wait(21).to({regX:24.7,regY:16.7,scaleX:0.32,scaleY:0.32,x:266.7,y:26.4},3).to({_off:true},1).wait(42));
	// logo_711
	this.instance_12 = new lib.logo_711_1();
	this.instance_12.setTransform(259.5,21.85,0.4747,0.4747,0,0,0,16.9,16.4);
	this.instance_12._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(107).to({_off:false},0).to({regX:16.6,x:193.05,y:28.4},7,cjs.Ease.get(0.98)).wait(3).to({regY:16,y:25.95},10,cjs.Ease.get(1)).to({regY:16.4,y:28.4},14).to({regY:16,y:25.95},12,cjs.Ease.get(1)).to({regY:16.4,y:28.4},12).to({regY:16,y:25.95},11,cjs.Ease.get(1)).to({regY:16.4,y:28.4},10).to({regY:15.7,y:23.55},8).to({regX:16.9,regY:16.4,x:259.5,y:27},3).to({_off:true},1).wait(149).to({_off:false,y:21.85},0).to({regX:16.6,x:193.05,y:28.4},7,cjs.Ease.get(0.98)).wait(3).to({regY:16,y:25.95},10,cjs.Ease.get(1)).to({regY:16.4,y:28.4},14).to({regY:16,y:25.95},12,cjs.Ease.get(1)).to({regY:16.4,y:28.4},12).to({regY:16,y:25.95},11,cjs.Ease.get(1)).to({regY:16.4,y:28.4},10).to({regY:15.7,y:23.55},8).to({regX:16.9,regY:16.4,x:259.5,y:27},3).to({_off:true},1).wait(149).to({_off:false,y:21.85},0).to({regX:16.6,x:193.05,y:28.4},7,cjs.Ease.get(0.98)).wait(3).to({regY:16,y:25.95},10,cjs.Ease.get(1)).to({regY:16.4,y:28.4},14).to({regY:16,y:25.95},12,cjs.Ease.get(1)).to({regY:16.4,y:28.4},12).to({regY:16,y:25.95},11,cjs.Ease.get(1)).to({regY:16.4,y:28.4},10).to({regY:15.7,y:23.55},8).to({regX:16.9,regY:16.4,x:259.5,y:27},3).to({_off:true},1).wait(42));
	// logo_ikea
	this.instance_13 = new lib.logo_ikea_1();
	this.instance_13.setTransform(259.5,21.85,0.4747,0.4747,0,0,0,25.8,12.3);
	this.instance_13._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(107).to({_off:false},0).to({regX:25.9,x:215.3,y:43.15},7,cjs.Ease.get(0.98)).wait(10).to({regY:12.2,y:40.75},14,cjs.Ease.get(1)).to({regY:12.3,y:43.15},12).to({regY:12.2,y:40.75},12,cjs.Ease.get(1)).to({regY:12.3,y:43.15},11).to({regY:12.2,y:40.75},10,cjs.Ease.get(1)).to({regY:12.3,y:43.15},11).to({regX:25.8,regY:12.2,x:259.5,y:26.95},3).to({_off:true},1).wait(149).to({_off:false,regY:12.3,y:21.85},0).to({regX:25.9,x:215.3,y:43.15},7,cjs.Ease.get(0.98)).wait(10).to({regY:12.2,y:40.75},14,cjs.Ease.get(1)).to({regY:12.3,y:43.15},12).to({regY:12.2,y:40.75},12,cjs.Ease.get(1)).to({regY:12.3,y:43.15},11).to({regY:12.2,y:40.75},10,cjs.Ease.get(1)).to({regY:12.3,y:43.15},11).to({regX:25.8,regY:12.2,x:259.5,y:26.95},3).to({_off:true},1).wait(149).to({_off:false,regY:12.3,y:21.85},0).to({regX:25.9,x:215.3,y:43.15},7,cjs.Ease.get(0.98)).wait(10).to({regY:12.2,y:40.75},14,cjs.Ease.get(1)).to({regY:12.3,y:43.15},12).to({regY:12.2,y:40.75},12,cjs.Ease.get(1)).to({regY:12.3,y:43.15},11).to({regY:12.2,y:40.75},10,cjs.Ease.get(1)).to({regY:12.3,y:43.15},11).to({regX:25.8,regY:12.2,x:259.5,y:26.95},3).to({_off:true},1).wait(42));
	// logo_kfc
	this.instance_14 = new lib.logo_kfc_1();
	this.instance_14.setTransform(259.5,21.85,0.4747,0.4747,0,0,0,15.7,15.9);
	this.instance_14._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(107).to({_off:false},0).to({regY:15.8,x:302.95,y:43.55},7,cjs.Ease.get(0.98)).wait(1).to({y:41.7},12,cjs.Ease.get(1)).to({y:43.55},12).to({y:41.7},14,cjs.Ease.get(1)).to({y:43.55},10).to({y:41.7},13,cjs.Ease.get(1)).to({y:43.55},8).to({y:41.7},10).to({regY:15.7,x:259.5,y:26.95},3).to({_off:true},1).wait(149).to({_off:false,regY:15.9,y:21.85},0).to({regY:15.8,x:302.95,y:43.55},7,cjs.Ease.get(0.98)).wait(1).to({y:41.7},12,cjs.Ease.get(1)).to({y:43.55},12).to({y:41.7},14,cjs.Ease.get(1)).to({y:43.55},10).to({y:41.7},13,cjs.Ease.get(1)).to({y:43.55},8).to({y:41.7},10).to({regY:15.7,x:259.5,y:26.95},3).to({_off:true},1).wait(149).to({_off:false,regY:15.9,y:21.85},0).to({regY:15.8,x:302.95,y:43.55},7,cjs.Ease.get(0.98)).wait(1).to({y:41.7},12,cjs.Ease.get(1)).to({y:43.55},12).to({y:41.7},14,cjs.Ease.get(1)).to({y:43.55},10).to({y:41.7},13,cjs.Ease.get(1)).to({y:43.55},8).to({y:41.7},10).to({regY:15.7,x:259.5,y:26.95},3).to({_off:true},1).wait(42));
	// logo_mx
	this.instance_15 = new lib.logo_mx_1();
	this.instance_15.setTransform(259.5,21.85,0.4747,0.4747,0,0,0,24.2,11.9);
	this.instance_15._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(107).to({_off:false},0).to({regY:11.5,x:303,y:8.55},7,cjs.Ease.get(0.98)).wait(6).to({y:8.05},12,cjs.Ease.get(1)).to({y:8.55},16).to({regY:11.4,y:7.1},12,cjs.Ease.get(1)).to({regY:11.5,y:8.55},13).to({regY:11.4,y:7.1},10,cjs.Ease.get(1)).to({regY:11.5,y:8.55},11).to({regY:11.7,x:259.5,y:26.95},3).to({_off:true},1).wait(149).to({_off:false,regY:11.9,y:21.85},0).to({regY:11.5,x:303,y:8.55},7,cjs.Ease.get(0.98)).wait(6).to({y:8.05},12,cjs.Ease.get(1)).to({y:8.55},16).to({regY:11.4,y:7.1},12,cjs.Ease.get(1)).to({regY:11.5,y:8.55},13).to({regY:11.4,y:7.1},10,cjs.Ease.get(1)).to({regY:11.5,y:8.55},11).to({regY:11.7,x:259.5,y:26.95},3).to({_off:true},1).wait(149).to({_off:false,regY:11.9,y:21.85},0).to({regY:11.5,x:303,y:8.55},7,cjs.Ease.get(0.98)).wait(6).to({y:8.05},12,cjs.Ease.get(1)).to({y:8.55},16).to({regY:11.4,y:7.1},12,cjs.Ease.get(1)).to({regY:11.5,y:8.55},13).to({regY:11.4,y:7.1},10,cjs.Ease.get(1)).to({regY:11.5,y:8.55},11).to({regY:11.7,x:259.5,y:26.95},3).to({_off:true},1).wait(42));
	// logo_pizza
	this.instance_16 = new lib.logo_pizza_1();
	this.instance_16.setTransform(259.5,21.85,0.4747,0.4747,0,0,0,15.7,15.4);
	this.instance_16._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(107).to({_off:false},0).to({regY:15.1,x:311.85,y:25.7},7,cjs.Ease.get(0.98)).wait(5).to({regY:15.2,y:23.3},10,cjs.Ease.get(1)).to({regY:15.1,y:25.7},16).to({regY:15.2,y:23.3},10,cjs.Ease.get(1)).to({regY:15.1,y:25.7},13).to({regY:15.2,y:23.3},10,cjs.Ease.get(1)).to({regY:15.1,y:25.7},10).to({regY:15.2,y:23.3},6).to({x:259.5,y:26.95},3,cjs.Ease.get(1)).to({_off:true},1).wait(149).to({_off:false,regY:15.4,y:21.85},0).to({regY:15.1,x:311.85,y:25.7},7,cjs.Ease.get(0.98)).wait(5).to({regY:15.2,y:23.3},10,cjs.Ease.get(1)).to({regY:15.1,y:25.7},16).to({regY:15.2,y:23.3},10,cjs.Ease.get(1)).to({regY:15.1,y:25.7},13).to({regY:15.2,y:23.3},10,cjs.Ease.get(1)).to({regY:15.1,y:25.7},10).to({regY:15.2,y:23.3},6).to({x:259.5,y:26.95},3,cjs.Ease.get(1)).to({_off:true},1).wait(149).to({_off:false,regY:15.4,y:21.85},0).to({regY:15.1,x:311.85,y:25.7},7,cjs.Ease.get(0.98)).wait(5).to({regY:15.2,y:23.3},10,cjs.Ease.get(1)).to({regY:15.1,y:25.7},16).to({regY:15.2,y:23.3},10,cjs.Ease.get(1)).to({regY:15.1,y:25.7},13).to({regY:15.2,y:23.3},10,cjs.Ease.get(1)).to({regY:15.1,y:25.7},10).to({regY:15.2,y:23.3},6).to({x:259.5,y:26.95},3,cjs.Ease.get(1)).to({_off:true},1).wait(42));
	// logo_wellcome
	this.instance_17 = new lib.logo_wellcome_1();
	this.instance_17.setTransform(259.5,21.85,0.4747,0.4747,0,0,0,40.8,10.3);
	this.instance_17._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(107).to({_off:false},0).to({regX:40.9,regY:10.2,x:207.65,y:9.35},7,cjs.Ease.get(0.98)).wait(3).to({regY:10.3,y:7.95},12,cjs.Ease.get(1)).to({regY:10.2,y:9.35},12).to({regY:10.3,y:7.95},14,cjs.Ease.get(1)).to({regY:10.2,y:9.35},10).to({regY:10.3,y:7.95},13,cjs.Ease.get(1)).to({regY:10.2,y:9.35},8).to({regY:10.3,y:7.95},8).to({regX:40.8,regY:10.2,x:259.5,y:26.95},3).to({_off:true},1).wait(149).to({_off:false,regY:10.3,y:21.85},0).to({regX:40.9,regY:10.2,x:207.65,y:9.35},7,cjs.Ease.get(0.98)).wait(3).to({regY:10.3,y:7.95},12,cjs.Ease.get(1)).to({regY:10.2,y:9.35},12).to({regY:10.3,y:7.95},14,cjs.Ease.get(1)).to({regY:10.2,y:9.35},10).to({regY:10.3,y:7.95},13,cjs.Ease.get(1)).to({regY:10.2,y:9.35},8).to({regY:10.3,y:7.95},8).to({regX:40.8,regY:10.2,x:259.5,y:26.95},3).to({_off:true},1).wait(149).to({_off:false,regY:10.3,y:21.85},0).to({regX:40.9,regY:10.2,x:207.65,y:9.35},7,cjs.Ease.get(0.98)).wait(3).to({regY:10.3,y:7.95},12,cjs.Ease.get(1)).to({regY:10.2,y:9.35},12).to({regY:10.3,y:7.95},14,cjs.Ease.get(1)).to({regY:10.2,y:9.35},10).to({regY:10.3,y:7.95},13,cjs.Ease.get(1)).to({regY:10.2,y:9.35},8).to({regY:10.3,y:7.95},8).to({regX:40.8,regY:10.2,x:259.5,y:26.95},3).to({_off:true},1).wait(42));
	// bg2
	this.instance_18 = new lib.bg2_1();
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(102).to({_off:false},0).to({alpha:1},6).to({_off:true},132).wait(102).to({_off:false,alpha:0},0).to({alpha:1},6).to({_off:true},132).wait(102).to({_off:false,alpha:0},0).to({alpha:1},6).wait(132));
	// txt2_1
	this.instance_19 = new lib.txt2_1_1();
	this.instance_19.setTransform(137.5,13,1,1,0,0,0,68.5,8);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(59).to({_off:false},0).to({alpha:1},5).to({_off:true},44).wait(191).to({_off:false,alpha:0},0).to({alpha:1},5).to({_off:true},44).wait(191).to({_off:false,alpha:0},0).to({alpha:1},5).to({_off:true},44).wait(132));
	// txt2_2
	this.instance_20 = new lib.txt2_2_1();
	this.instance_20.setTransform(159,39.5,1,1,0,0,0,129,18.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(59).to({_off:false},0).to({alpha:1},5).to({_off:true},44).wait(191).to({_off:false,alpha:0},0).to({alpha:1},5).to({_off:true},44).wait(191).to({_off:false,alpha:0},0).to({alpha:1},5).to({_off:true},44).wait(132));
	// txt2_bg
	this.instance_21 = new lib.txt2_bg_1();
	this.instance_21.setTransform(134.05,37.05,0.8,0.8,0,0,0,150,50.1);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(59).to({_off:false},0).to({regY:50,scaleX:1,scaleY:1,x:144,y:37,alpha:1},5).wait(8).to({regY:36,y:23},0).to({alpha:0.5},7).to({alpha:1},7).to({_off:true},22).wait(191).to({_off:false,regY:50.1,scaleX:0.8,scaleY:0.8,x:134.05,y:37.05,alpha:0},0).to({regY:50,scaleX:1,scaleY:1,x:144,y:37,alpha:1},5).wait(8).to({regY:36,y:23},0).to({alpha:0.5},7).to({alpha:1},7).to({_off:true},22).wait(191).to({_off:false,regY:50.1,scaleX:0.8,scaleY:0.8,x:134.05,y:37.05,alpha:0},0).to({regY:50,scaleX:1,scaleY:1,x:144,y:37,alpha:1},5).wait(8).to({regY:36,y:23},0).to({alpha:0.5},7).to({alpha:1},7).to({_off:true},22).wait(132));
	// txt1
	this.instance_22 = new lib.txt1_1();
	this.instance_22.setTransform(128,26,1,1,0,0,0,70,12);
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(59).to({alpha:0},5).to({_off:true},1).wait(175).to({_off:false,alpha:1},0).wait(59).to({alpha:0},5).to({_off:true},1).wait(175).to({_off:false,alpha:1},0).wait(59).to({alpha:0},5).to({_off:true},1).wait(175));
	// txt1_bg
	this.instance_23 = new lib.txt1_bg_1();
	this.instance_23.setTransform(135,26,1,1,0,0,0,150,36);
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(33).to({alpha:0.5},7).to({alpha:1},7).wait(12).to({alpha:0},5).to({_off:true},1).wait(175).to({_off:false,alpha:1},0).wait(33).to({alpha:0.5},7).to({alpha:1},7).wait(12).to({alpha:0},5).to({_off:true},1).wait(175).to({_off:false,alpha:1},0).wait(33).to({alpha:0.5},7).to({alpha:1},7).wait(12).to({alpha:0},5).to({_off:true},1).wait(175));
	// img_phone
	this.instance_24 = new lib.img_phone_1();
	this.instance_24.setTransform(319.5,129.5,1,1,0,0,0,86.5,130.5);
	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({_off:true},109).wait(131).to({_off:false},0).to({_off:true},109).wait(131).to({_off:false},0).to({_off:true},109).wait(131));
	// bg1
	this.instance_25 = new lib.bg1_1();
	this.instance_25.setTransform(150,125,1,1,0,0,0,150,125);
	this.timeline.addTween(cjs.Tween.get(this.instance_25).to({_off:true},109).wait(131).to({_off:false},0).to({_off:true},109).wait(131).to({_off:false},0).to({_off:true},109).wait(131));
	this._renderFirstFrame();
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(145,12,175,45);
// library properties:
lib.properties = {
	id: '9CCE92A8CDD1664F8CA5AC25E8095C15',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bg1.jpg?1626061388574", id:"bg1"},
		{src:"bg2.jpg?1626061388574", id:"bg2"},
		{src:"box.png?1626061388574", id:"box"},
		{src:"cardface1.png?1626061388574", id:"cardface1"},
		{src:"cardface2.png?1626061388574", id:"cardface2"},
		{src:"cta.png?1626061388574", id:"cta"},
		{src:"img_logo.jpg?1626061388574", id:"img_logo"},
		{src:"img_phone.png?1626061388574", id:"img_phone"},
		{src:"img_tnc.png?1626061388574", id:"img_tnc"},
		{src:"img_tnc2.png?1626061388574", id:"img_tnc2"},
		{src:"logo_711.png?1626061388574", id:"logo_711"},
		{src:"logo_ikea.png?1626061388574", id:"logo_ikea"},
		{src:"logo_kfc.png?1626061388574", id:"logo_kfc"},
		{src:"logo_mx.png?1626061388574", id:"logo_mx"},
		{src:"logo_pizza.png?1626061388574", id:"logo_pizza"},
		{src:"logo_wellcome.png?1626061388574", id:"logo_wellcome"},
		{src:"tag.png?1626061388574", id:"tag"},
		{src:"txt1.png?1626061388574", id:"txt1"},
		{src:"txt1_bg.png?1626061388574", id:"txt1_bg"},
		{src:"txt2_1.png?1626061388574", id:"txt2_1"},
		{src:"txt2_2.png?1626061388574", id:"txt2_2"},
		{src:"txt2_bg.png?1626061388574", id:"txt2_bg"},
		{src:"txt3_1.png?1626061388574", id:"txt3_1"},
		{src:"txt3_2.png?1626061388574", id:"txt3_2"},
		{src:"txt3_3.png?1626061388574", id:"txt3_3"},
		{src:"txt4.png?1626061388574", id:"txt4"}
	],
	preloads: []
};
// bootstrap callback support:
(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();
p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}
an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};
an.compositions = an.compositions || {};
an.compositions['9CCE92A8CDD1664F8CA5AC25E8095C15'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};
an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}
an.getComposition = function(id) {
	return an.compositions[id];
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}
})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
</script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("9CCE92A8CDD1664F8CA5AC25E8095C15");
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
	exportRoot = new lib.HSP1689_320x50_v1();
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
}
</script>
<!-- write your code here -->
<script type="text/javascript">
    
  (function() {
    var MAX_URL_PARAM_LENGTH = 34;
    var CLICK_X_URL_KEY = 'nx';
    var CLICK_Y_URL_KEY = 'ny';
    var CREATIVE_DIMENSIONS_KEY = 'dim';
    var AD_URL_PARAM = '&adurl=';

    var relegateNavigation = '';
    var urlParamMap = {};

    urlParamMap[CLICK_X_URL_KEY] = null;
    urlParamMap[CLICK_Y_URL_KEY] = null;
    urlParamMap[CREATIVE_DIMENSIONS_KEY] = null;

    var handleClickTagMessage = function(e) {
      try {
        var eventData = JSON.parse(e.data);
      } catch (err) {
        return;
      }
      if (eventData.isInitClickTag) {
        if (eventData.clickTags) {
          for (var i = 0; i < eventData.clickTags.length; i++) {
            var clkTag = eventData.clickTags[i];
            window[clkTag.name] = clkTag.url;
          }
        } else if (eventData.clickTag) {
          window.clickTag = eventData.clickTag;
        }
        relegateNavigation = eventData.relegateNavigation;
      }
    };

    var storeClickCoordinates = function(e) {
      urlParamMap[CLICK_X_URL_KEY] = Math.round(e.clientX);
      urlParamMap[CLICK_Y_URL_KEY] = Math.round(e.clientY);
    };

    var getCreativeDimensions = function() {
      return window.innerWidth + 'x' + window.innerHeight;
    }

    var getExitClickParams = function(e) {
      urlParamMap[CREATIVE_DIMENSIONS_KEY] = getCreativeDimensions();

      var exitParams = '';
      for (var key in urlParamMap) {
        exitParams += '&' + key + '=';
        if (urlParamMap[key] !== null) {
          exitParams += urlParamMap[key];
        }
      }
      return exitParams;
    }

    var appendExitClickParams = function(url) {
      var adUrlIndex = url.toLowerCase().indexOf(AD_URL_PARAM);
      var paramsToBeAdded = getExitClickParams();
      if (adUrlIndex > -1 && paramsToBeAdded.length <= MAX_URL_PARAM_LENGTH) {
        url = url.substr(0, adUrlIndex) + paramsToBeAdded +
          url.substr(adUrlIndex);
      };
      return url;
    };

    if (open.call) {
      window.open = function(open) {
        return function(url, name, features) {
          url = appendExitClickParams(url);
          if (relegateNavigation === 'parent') {
            var message = {'clickTag': url, 'isPostClickTag': true};
            parent.postMessage(JSON.stringify(message), '*');
          } else {
            var args = [url, name];
            if (features) {
              args.push(features);
            }
            open.apply(window, args);
          }
        };
      }(window.open);
    }

    if (window.addEventListener) {
      window.addEventListener(
          'message', handleClickTagMessage, false);
      window.addEventListener('mousedown', storeClickCoordinates, true);
    } else {
      window.attachEvent('onmessage', handleClickTagMessage);
    }
  })();
    
  </script></head>
<body onload="init();" style="margin:0px;">
	<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:320px; height:50px">
		<a href="javascript:window.open(window.clickTag)"><canvas id="canvas" width="320" height="50" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas></a>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:320px; height:50px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
</body>
</html>