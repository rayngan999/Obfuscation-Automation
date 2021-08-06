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
<meta name="ad.size" content="width=300,height=600">
<script>
var clickTag = '';
(function (cjs, an) {
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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
(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);
(lib.BG_2 = function() {
	this.initialize(img.BG_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);
(lib.card_G = function() {
	this.initialize(img.card_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,333);
(lib.card_R = function() {
	this.initialize(img.card_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,222,334);
(lib.card_small = function() {
	this.initialize(img.card_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,169);
(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,37);
(lib.last_offer = function() {
	this.initialize(img.last_offer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,163);
(lib.last_tagline = function() {
	this.initialize(img.last_tagline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,34);
(lib.last_tagline_02 = function() {
	this.initialize(img.last_tagline_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,33);
(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,50);
(lib.mobile_G = function() {
	this.initialize(img.mobile_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,68);
(lib.mobile_offer = function() {
	this.initialize(img.mobile_offer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298,180);
(lib.mobile_offer_02 = function() {
	this.initialize(img.mobile_offer_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,223,30);
(lib.mobile_tagline = function() {
	this.initialize(img.mobile_tagline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,84);
(lib.movie_02 = function() {
	this.initialize(img.movie_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,69);
(lib.mpower_G = function() {
	this.initialize(img.mpower_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,69);
(lib.mpower_hdline = function() {
	this.initialize(img.mpower_hdline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,112);
(lib.mpower_logo = function() {
	this.initialize(img.mpower_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,53);
(lib.mpower_R = function() {
	this.initialize(img.mpower_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,266,70);
(lib.music_G = function() {
	this.initialize(img.music_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,69);
(lib.summer_offer = function() {
	this.initialize(img.summer_offer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,226);
(lib.summer_offer_name = function() {
	this.initialize(img.summer_offer_name);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,36);
(lib.tagline_02 = function() {
	this.initialize(img.tagline_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,184);
(lib.tagline_03 = function() {
	this.initialize(img.tagline_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,54);
(lib.tagline_04 = function() {
	this.initialize(img.tagline_04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,91);
(lib.tnc = function() {
	this.initialize(img.tnc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,41);// helper functions:
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
(lib.tagline_04_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tagline_04();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.tagline_04_1, new cjs.Rectangle(0,0,217,91), null);
(lib.tagline_03_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tagline_03();
	this.instance.setTransform(-115,-27);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.tagline_03_1, new cjs.Rectangle(-115,-27,230,54), null);
(lib.tagline_02_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tagline_02();
	this.instance.setTransform(-58.5,-92);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.tagline_02_1, new cjs.Rectangle(-58.5,-92,230,184), null);
(lib.summer_offer_name_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.summer_offer();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.summer_offer_name_1, new cjs.Rectangle(0,0,300,226), null);
(lib.summer_offer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.summer_offer_name();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.summer_offer_1, new cjs.Rectangle(0,0,150,36), null);
(lib.m_watermark_mobile = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mobile_G();
	this.instance.setTransform(-109,-35);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_watermark_mobile, new cjs.Rectangle(-109,-35,230,68), null);
(lib.m_tnc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tnc();
	this.instance.setTransform(-72,-14);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_tnc, new cjs.Rectangle(-72,-14,167,41), null);
(lib.m_tagline_04 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mobile_tagline();
	this.instance.setTransform(-73,-26);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_tagline_04, new cjs.Rectangle(-73,-26,191,84), null);
(lib.m_small_card = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.card_small();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_small_card, new cjs.Rectangle(0,0,152,169), null);
(lib.m_music_watermark = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.music_G();
	this.instance.setTransform(-92.5,-35);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_music_watermark, new cjs.Rectangle(-92.5,-35,196,69), null);
(lib.m_mpower_R = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mpower_R();
	this.instance.setTransform(-127,-32);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_mpower_R, new cjs.Rectangle(-127,-32,266,70), null);
(lib.m_mpower_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mpower_hdline();
	this.instance.setTransform(-103,-36);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_mpower_logo, new cjs.Rectangle(-103,-36,200,112), null);
(lib.m_mpower_G = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mpower_G();
	this.instance.setTransform(-127.5,-34);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_mpower_G, new cjs.Rectangle(-127.5,-34,266,69), null);
(lib.m_movie_02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.movie_02();
	this.instance.setTransform(-95,-34.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_movie_02, new cjs.Rectangle(-95,-34.5,197,69), null);
(lib.m_mobile_offer_02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mobile_offer_02();
	this.instance.setTransform(-96,-13);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_mobile_offer_02, new cjs.Rectangle(-96,-13,223,30), null);
(lib.m_mobile_offer = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mobile_offer();
	this.instance.setTransform(-148,-76);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_mobile_offer, new cjs.Rectangle(-148,-76,298,180), null);
(lib.m_last_tagline_02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.last_tagline_02();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_last_tagline_02, new cjs.Rectangle(0,0,155,33), null);
(lib.m_last_tagline = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.last_tagline();
	this.instance.setTransform(-123,-17);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_last_tagline, new cjs.Rectangle(-123,-17,170,34), null);
(lib.m_last_offer = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.last_offer();
	this.instance.setTransform(-158,-59);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_last_offer, new cjs.Rectangle(-158,-59,300,163), null);
(lib.m_last_mpower = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.mpower_logo();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_last_mpower, new cjs.Rectangle(0,0,126,53), null);
(lib.m_hs_logo = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.logo();
	this.instance.setTransform(-72,-21);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_hs_logo, new cjs.Rectangle(-72,-21,189,50), null);
(lib.m_CTA = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CTA();
	this.instance.setTransform(-49,-14);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_CTA, new cjs.Rectangle(-49,-14,129,37), null);
(lib.m_card_R = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.card_R();
	this.instance.setTransform(-78,-127.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_card_R, new cjs.Rectangle(-78,-127.5,222,334), null);
(lib.m_card_G = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.card_G();
	this.instance.setTransform(-76,-127);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_card_G, new cjs.Rectangle(-76,-127,211,333), null);
// stage content:
(lib.HSP1676_Mobile_300x600_30s = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);
	// Layer_27
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(720));
	// tnc
	this.instance = new lib.m_tnc();
	this.instance.setTransform(89,561);
	this.instance.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},3).wait(357).to({alpha:0},0).to({alpha:1},3).wait(357));
	// card_R
	this.instance_1 = new lib.m_card_R();
	this.instance_1.setTransform(185,484,0.5499,0.5499,-8.0002,0,0,0.1,0.2);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:33,regY:39.5,rotation:-8.0779,x:205.7,y:502.15},0).wait(1).to({rotation:-8.1606,x:205.5,y:501.4},0).wait(1).to({rotation:-8.2482,x:205.3,y:500.65},0).wait(1).to({rotation:-8.3406,x:205.05,y:499.85},0).wait(1).to({rotation:-8.438,x:204.85,y:499},0).wait(1).to({rotation:-8.5403,x:204.6,y:498.1},0).wait(1).to({rotation:-8.6475,x:204.3,y:497.1},0).wait(1).to({rotation:-8.7596,x:204.05,y:496.15},0).wait(1).to({rotation:-8.8765,x:203.75,y:495.1},0).wait(1).to({scaleX:0.5498,scaleY:0.5498,rotation:-8.9984,x:203.4,y:494},0).wait(1).to({rotation:-9.1252,x:203.1,y:492.9},0).wait(1).to({rotation:-9.2569,x:202.8,y:491.8},0).wait(1).to({rotation:-9.3935,x:202.45,y:490.55},0).wait(1).to({rotation:-9.535,x:202.1,y:489.25},0).wait(1).to({rotation:-9.6814,x:201.75,y:488},0).wait(1).to({rotation:-9.8327,x:201.35,y:486.65},0).wait(1).to({rotation:-9.9889,x:200.95,y:485.3},0).wait(1).to({scaleX:0.5497,scaleY:0.5497,rotation:-10.15,x:200.6,y:483.8},0).wait(1).to({rotation:-10.3161,x:200.15,y:482.35},0).wait(1).to({rotation:-10.487,x:199.75,y:480.85},0).wait(1).to({rotation:-10.6628,x:199.3,y:479.3},0).wait(1).to({rotation:-10.8435,x:198.85,y:477.7},0).wait(1).to({rotation:-11.0291,x:198.35,y:476.05},0).wait(1).to({scaleX:0.5496,scaleY:0.5496,rotation:-11.2197,x:197.85,y:474.35},0).wait(1).to({rotation:-11.4151,x:197.4,y:472.65},0).wait(1).to({rotation:-11.6154,x:196.85,y:470.85},0).wait(1).to({regX:0.1,regY:0.2,rotation:-11.8207,x:174.2,y:451.65},0).wait(1).to({regX:33,regY:39.5,x:126.1,y:440},0).wait(1).to({x:54.4,y:410.35},0).wait(1).to({x:-18.85,y:380},0).wait(1).to({regX:0.1,regY:0.2,x:-115.8,y:331.65},0).to({_off:true},1).wait(328).to({_off:false,scaleX:0.5499,scaleY:0.5499,rotation:-8.0002,x:185,y:484},0).wait(1).to({regX:33,regY:39.5,rotation:-8.0779,x:205.7,y:502.15},0).wait(1).to({rotation:-8.1606,x:205.5,y:501.4},0).wait(1).to({rotation:-8.2482,x:205.3,y:500.65},0).wait(1).to({rotation:-8.3406,x:205.05,y:499.85},0).wait(1).to({rotation:-8.438,x:204.85,y:499},0).wait(1).to({rotation:-8.5403,x:204.6,y:498.1},0).wait(1).to({rotation:-8.6475,x:204.3,y:497.1},0).wait(1).to({rotation:-8.7596,x:204.05,y:496.15},0).wait(1).to({rotation:-8.8765,x:203.75,y:495.1},0).wait(1).to({scaleX:0.5498,scaleY:0.5498,rotation:-8.9984,x:203.4,y:494},0).wait(1).to({rotation:-9.1252,x:203.1,y:492.9},0).wait(1).to({rotation:-9.2569,x:202.8,y:491.8},0).wait(1).to({rotation:-9.3935,x:202.45,y:490.55},0).wait(1).to({rotation:-9.535,x:202.1,y:489.25},0).wait(1).to({rotation:-9.6814,x:201.75,y:488},0).wait(1).to({rotation:-9.8327,x:201.35,y:486.65},0).wait(1).to({rotation:-9.9889,x:200.95,y:485.3},0).wait(1).to({scaleX:0.5497,scaleY:0.5497,rotation:-10.15,x:200.6,y:483.8},0).wait(1).to({rotation:-10.3161,x:200.15,y:482.35},0).wait(1).to({rotation:-10.487,x:199.75,y:480.85},0).wait(1).to({rotation:-10.6628,x:199.3,y:479.3},0).wait(1).to({rotation:-10.8435,x:198.85,y:477.7},0).wait(1).to({rotation:-11.0291,x:198.35,y:476.05},0).wait(1).to({scaleX:0.5496,scaleY:0.5496,rotation:-11.2197,x:197.85,y:474.35},0).wait(1).to({rotation:-11.4151,x:197.4,y:472.65},0).wait(1).to({rotation:-11.6154,x:196.85,y:470.85},0).wait(1).to({regX:0.1,regY:0.2,rotation:-11.8207,x:174.2,y:451.65},0).wait(1).to({regX:33,regY:39.5,x:126.1,y:440},0).wait(1).to({x:54.4,y:410.35},0).wait(1).to({x:-18.85,y:380},0).wait(1).to({regX:0.1,regY:0.2,x:-115.8,y:331.65},0).to({_off:true},1).wait(328));
	// card_G
	this.instance_2 = new lib.m_card_G();
	this.instance_2.setTransform(108,171,1,1,9.9999);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:29.5,regY:39.5,rotation:10.0628,x:130.3,y:215.35},0).wait(1).to({rotation:10.1295,x:130.45,y:215.75},0).wait(1).to({rotation:10.2001,x:130.6,y:216.05},0).wait(1).to({rotation:10.2745,x:130.75,y:216.5},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:10.3528,x:130.9,y:216.95},0).wait(1).to({rotation:10.4349,x:131.05,y:217.45},0).wait(1).to({rotation:10.5209,x:131.25,y:217.95},0).wait(1).to({rotation:10.6108,x:131.5,y:218.4},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:10.7044,x:131.65,y:218.95},0).wait(1).to({rotation:10.802,x:131.8,y:219.5},0).wait(1).to({rotation:10.9034,x:132.05,y:220.1},0).wait(1).to({rotation:11.0086,x:132.25,y:220.65},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:11.1177,x:132.55,y:221.25},0).wait(1).to({rotation:11.2307,x:132.75,y:221.9},0).wait(1).to({rotation:11.3475,x:133,y:222.5},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,rotation:11.4681,x:133.25,y:223.2},0).wait(1).to({rotation:11.5926,x:133.5,y:223.95},0).wait(1).to({rotation:11.721,x:133.75,y:224.6},0).wait(1).to({rotation:11.8532,x:134.05,y:225.35},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,rotation:11.9892,x:134.35,y:226.05},0).wait(1).to({rotation:12.1291,x:134.65,y:226.9},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:12.2729,x:134.9,y:227.65},0).wait(1).to({rotation:12.4205,x:135.2,y:228.5},0).wait(1).to({rotation:12.572,x:135.5,y:229.35},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:12.7273,x:135.85,y:230.2},0).wait(1).to({rotation:12.8864,x:136.2,y:231.05},0).wait(1).to({regX:0,regY:0,scaleX:0.9992,scaleY:0.9992,rotation:13.0494,x:116.75,y:186.85},0).wait(1).to({regX:29.5,regY:39.5,scaleX:0.9994,scaleY:0.9994,rotation:13.2776,x:213.8,y:204.1},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,rotation:13.5119,x:293.1,y:175.65},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:13.7524,x:374.55,y:146.35},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:13.9989,x:439,y:70.95},0).to({_off:true},1).wait(328).to({_off:false,rotation:9.9999,x:108,y:171},0).wait(1).to({regX:29.5,regY:39.5,rotation:10.0628,x:130.3,y:215.35},0).wait(1).to({rotation:10.1295,x:130.45,y:215.75},0).wait(1).to({rotation:10.2001,x:130.6,y:216.05},0).wait(1).to({rotation:10.2745,x:130.75,y:216.5},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:10.3528,x:130.9,y:216.95},0).wait(1).to({rotation:10.4349,x:131.05,y:217.45},0).wait(1).to({rotation:10.5209,x:131.25,y:217.95},0).wait(1).to({rotation:10.6108,x:131.5,y:218.4},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:10.7044,x:131.65,y:218.95},0).wait(1).to({rotation:10.802,x:131.8,y:219.5},0).wait(1).to({rotation:10.9034,x:132.05,y:220.1},0).wait(1).to({rotation:11.0086,x:132.25,y:220.65},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,rotation:11.1177,x:132.55,y:221.25},0).wait(1).to({rotation:11.2307,x:132.75,y:221.9},0).wait(1).to({rotation:11.3475,x:133,y:222.5},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,rotation:11.4681,x:133.25,y:223.2},0).wait(1).to({rotation:11.5926,x:133.5,y:223.95},0).wait(1).to({rotation:11.721,x:133.75,y:224.6},0).wait(1).to({rotation:11.8532,x:134.05,y:225.35},0).wait(1).to({scaleX:0.9995,scaleY:0.9995,rotation:11.9892,x:134.35,y:226.05},0).wait(1).to({rotation:12.1291,x:134.65,y:226.9},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,rotation:12.2729,x:134.9,y:227.65},0).wait(1).to({rotation:12.4205,x:135.2,y:228.5},0).wait(1).to({rotation:12.572,x:135.5,y:229.35},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:12.7273,x:135.85,y:230.2},0).wait(1).to({rotation:12.8864,x:136.2,y:231.05},0).wait(1).to({regX:0,regY:0,scaleX:0.9992,scaleY:0.9992,rotation:13.0494,x:116.75,y:186.85},0).wait(1).to({regX:29.5,regY:39.5,scaleX:0.9994,scaleY:0.9994,rotation:13.2776,x:213.8,y:204.1},0).wait(1).to({scaleX:0.9996,scaleY:0.9996,rotation:13.5119,x:293.1,y:175.65},0).wait(1).to({scaleX:0.9998,scaleY:0.9998,rotation:13.7524,x:374.55,y:146.35},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:13.9989,x:439,y:70.95},0).to({_off:true},1).wait(328));
	// small_card
	this.instance_3 = new lib.m_small_card();
	this.instance_3.setTransform(55.5,58,1,1,0,0,0,47.5,49);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({_off:false},0).to({alpha:1},4).wait(35).to({alpha:0},3).wait(74).to({alpha:1},3).to({_off:true},187).wait(54).to({_off:false,alpha:0},0).to({alpha:1},4).wait(35).to({alpha:0},3).wait(74).to({alpha:1},3).wait(187));
	// hs_logo
	this.instance_4 = new lib.m_hs_logo();
	this.instance_4.setTransform(127,296);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({alpha:1},4).wait(21).to({alpha:0},4).to({_off:true},1).wait(330).to({_off:false},0).to({alpha:1},4).wait(21).to({alpha:0},4).to({_off:true},1).wait(301));
	// tagline_04
	this.instance_5 = new lib.tagline_04_1();
	this.instance_5.setTransform(149.5,371.5,1,1,0,0,0,108.5,45.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).to({alpha:1},4).wait(35).to({alpha:0},3).to({_off:true},1).wait(317).to({_off:false},0).to({alpha:1},4).wait(35).to({alpha:0},3).to({_off:true},1).wait(263));
	// mpower_logo
	this.instance_6 = new lib.m_mpower_logo();
	this.instance_6.setTransform(153,224);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54).to({_off:false},0).to({alpha:1},4).wait(35).to({alpha:0},3).to({_off:true},1).wait(317).to({_off:false},0).to({alpha:1},4).wait(35).to({alpha:0},3).to({_off:true},1).wait(263));
	// tagline_mobile
	this.instance_7 = new lib.m_tagline_04();
	this.instance_7.setTransform(88,206);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(170).to({_off:false},0).to({alpha:1},3).wait(23).to({scaleX:1.1,scaleY:1.1,x:87.95,y:204.45},4).to({scaleX:1,scaleY:1,x:88,y:206},1).wait(39).to({alpha:0},3).to({_off:true},1).wait(286).to({_off:false},0).to({alpha:1},3).wait(23).to({scaleX:1.1,scaleY:1.1,x:87.95,y:204.45},4).to({scaleX:1,scaleY:1,x:88,y:206},1).wait(39).to({alpha:0},3).to({_off:true},1).wait(116));
	// mobile_offer_01
	this.instance_8 = new lib.m_mobile_offer();
	this.instance_8.setTransform(108,349);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(170).to({_off:false},0).to({alpha:1},3).wait(67).to({alpha:0},3).to({_off:true},1).wait(286).to({_off:false},0).to({alpha:1},3).wait(67).to({alpha:0},3).to({_off:true},1).wait(116));
	// mobile_offer_02
	this.instance_9 = new lib.m_mobile_offer_02();
	this.instance_9.setTransform(155,473);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(170).to({_off:false},0).to({alpha:1},3).wait(67).to({alpha:0},3).to({_off:true},1).wait(286).to({_off:false},0).to({alpha:1},3).wait(67).to({alpha:0},3).to({_off:true},1).wait(116));
	// tagline_03
	this.instance_10 = new lib.tagline_03_1();
	this.instance_10.setTransform(150,454);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(96).to({_off:false},0).to({alpha:1},6).wait(17).to({scaleX:1.13,scaleY:1.13,x:149.95,y:453.95},4).to({scaleX:1,scaleY:1,x:150,y:454},4).wait(39).to({alpha:0},5).to({_off:true},189).wait(96).to({_off:false},0).to({alpha:1},6).wait(17).to({scaleX:1.13,scaleY:1.13,x:149.95,y:453.95},4).to({scaleX:1,scaleY:1,x:150,y:454},4).wait(39).to({alpha:0},5).wait(189));
	// tagline_02
	this.instance_11 = new lib.tagline_02_1();
	this.instance_11.setTransform(89,454);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96).to({_off:false},0).to({x:88.5,alpha:1},6).wait(64).to({x:89},0).to({alpha:0},5).to({_off:true},189).wait(96).to({_off:false},0).to({x:88.5,alpha:1},6).wait(64).to({x:89},0).to({alpha:0},5).wait(189));
	// BG_2
	this.instance_12 = new lib.BG_2();
	this.instance_12._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(96).to({_off:false},0).to({_off:true},75).wait(285).to({_off:false},0).to({_off:true},75).wait(189));
	// summer_offer.png
	this.instance_13 = new lib.summer_offer_name_1();
	this.instance_13.setTransform(153,335,1,1,0,0,0,148,80);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(243).to({_off:false},0).to({alpha:1},3).wait(51).to({alpha:0},3).to({_off:true},1).wait(302).to({_off:false},0).to({alpha:1},3).wait(51).to({alpha:0},3).to({_off:true},1).wait(59));
	// summer_offer_name.png
	this.instance_14 = new lib.summer_offer_1();
	this.instance_14.setTransform(101,234,1,1,0,0,0,80,28);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(243).to({_off:false},0).to({alpha:1},3).wait(22).to({scaleX:1.0625,scaleY:1.0616,y:230.7},4).to({scaleX:1,scaleY:1,y:234},4).wait(21).to({alpha:0},3).to({_off:true},1).wait(302).to({_off:false},0).to({alpha:1},3).wait(22).to({scaleX:1.0625,scaleY:1.0616,y:230.7},4).to({scaleX:1,scaleY:1,y:234},4).wait(21).to({alpha:0},3).to({_off:true},1).wait(59));
	// last_mpower_logo
	this.instance_15 = new lib.m_last_mpower();
	this.instance_15.setTransform(73,242,1,1,0,0,0,56,24);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(297).to({_off:false},0).to({alpha:1},3).wait(16).to({regX:56.1,regY:24.1,scaleX:1.1,scaleY:1.1,x:75.2,y:243.5},4).to({regX:56,regY:24,scaleX:1,scaleY:1,x:73,y:242},4).to({_off:true},36).wait(297).to({_off:false,alpha:0},0).to({alpha:1},3).wait(16).to({regX:56.1,regY:24.1,scaleX:1.1,scaleY:1.1,x:75.2,y:243.5},4).to({regX:56,regY:24,scaleX:1,scaleY:1,x:73,y:242},4).wait(36));
	// last_tagline
	this.instance_16 = new lib.m_last_tagline();
	this.instance_16.setTransform(141,197);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(297).to({_off:false},0).to({alpha:1},3).to({_off:true},60).wait(297).to({_off:false,alpha:0},0).to({alpha:1},3).wait(60));
	// last_tagline_02
	this.instance_17 = new lib.m_last_tagline_02();
	this.instance_17.setTransform(76,298,1,1,0,0,0,58,13);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(297).to({_off:false},0).to({alpha:1},3).to({_off:true},60).wait(297).to({_off:false,alpha:0},0).to({alpha:1},3).wait(60));
	// last_offer
	this.instance_18 = new lib.m_last_offer();
	this.instance_18.setTransform(164,376);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(297).to({_off:false},0).to({alpha:1},3).to({_off:true},60).wait(297).to({_off:false,alpha:0},0).to({alpha:1},3).wait(60));
	// CTA
	this.instance_19 = new lib.m_CTA();
	this.instance_19.setTransform(134.5,509);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(297).to({_off:false},0).to({x:135,alpha:1},3).to({_off:true},60).wait(297).to({_off:false,x:134.5,alpha:0},0).to({x:135,alpha:1},3).wait(60));
	// G_watermark
	this.instance_20 = new lib.m_mpower_G();
	this.instance_20.setTransform(110.05,57.2,0.7219,0.7246,0,0,0,0.1,0.3);
	this.instance_20.alpha = 0.0781;
	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({x:140.05},93).to({x:190.05},223).to({x:195.05},3).to({x:206.05},24).wait(17).to({x:110.05},0).to({x:140.05},93).to({x:190.05},223).to({x:195.05},3).to({x:206.05},24).wait(17));
	// G_watermark
	this.instance_21 = new lib.m_mpower_G();
	this.instance_21.setTransform(0,509);
	this.instance_21.alpha = 0.1211;
	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:37.6},93).to({x:40,alpha:0},3).wait(220).to({x:117},0).to({alpha:0.0781},3).to({x:137,alpha:0.0586},24).wait(17).to({x:0,alpha:0.1211},0).to({x:37.6},93).to({x:40,alpha:0},3).wait(220).to({x:117},0).to({alpha:0.0781},3).to({x:137,alpha:0.0586},24).wait(17));
	// R_mark_01
	this.instance_22 = new lib.m_mpower_R();
	this.instance_22.setTransform(269.5,150,1,1,0,0,0,-0.5,0);
	this.instance_22.alpha = 0.0586;
	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({x:47.35,alpha:0.0781},339).to({x:45.5,alpha:0.0586},4).wait(17).to({x:269.5},0).to({x:47.35,alpha:0.0781},339).to({x:45.5,alpha:0.0586},4).wait(17));
	// mobile_watermark
	this.instance_23 = new lib.m_watermark_mobile();
	this.instance_23.setTransform(81,511);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(93).to({_off:false},0).to({x:86,alpha:0.1211},3).to({x:112.3},51).to({x:118},8).to({alpha:0},3).to({_off:true},202).wait(93).to({_off:false,x:81},0).to({x:86,alpha:0.1211},3).to({x:112.3},51).to({x:118},8).to({alpha:0},3).wait(202));
	// movie_watermark
	this.instance_24 = new lib.m_movie_02();
	this.instance_24.setTransform(124,511.5);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(155).to({_off:false},0).to({x:125,alpha:0.1211},3).to({x:158},58).to({x:153,alpha:0},3).to({_off:true},141).wait(155).to({_off:false,x:124},0).to({x:125,alpha:0.1211},3).to({x:158},58).to({x:153,alpha:0},3).wait(141));
	// music_watermark
	this.instance_25 = new lib.m_music_watermark();
	this.instance_25.setTransform(158.5,512);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(216).to({_off:false},0).to({x:161,alpha:0.1211},3).to({x:184},97).to({x:179,alpha:0},3).to({_off:true},41).wait(216).to({_off:false,x:158.5},0).to({x:161,alpha:0.1211},3).to({x:184},97).to({x:179,alpha:0},3).wait(41));
	// BG
	this.instance_26 = new lib.BG();
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(720));
	this._renderFirstFrame();
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,229.3,622.9000000000001,372.99999999999994);
// library properties:
lib.properties = {
	id: '47C0AAB5CC747D42B0EE33E02256B72E',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.jpg", id:"BG"},
		{src:"BG_2.jpg", id:"BG_2"},
		{src:"card_G.png", id:"card_G"},
		{src:"card_R.png", id:"card_R"},
		{src:"card_small.png", id:"card_small"},
		{src:"CTA.png", id:"CTA"},
		{src:"last_offer.png", id:"last_offer"},
		{src:"last_tagline.png", id:"last_tagline"},
		{src:"last_tagline_02.png", id:"last_tagline_02"},
		{src:"logo.png", id:"logo"},
		{src:"mobile_G.png", id:"mobile_G"},
		{src:"mobile_offer.png", id:"mobile_offer"},
		{src:"mobile_offer_02.png", id:"mobile_offer_02"},
		{src:"mobile_tagline.png", id:"mobile_tagline"},
		{src:"movie_02.png", id:"movie_02"},
		{src:"mpower_G.png", id:"mpower_G"},
		{src:"mpower_hdline.png", id:"mpower_hdline"},
		{src:"mpower_logo.png", id:"mpower_logo"},
		{src:"mpower_R.png", id:"mpower_R"},
		{src:"music_G.png", id:"music_G"},
		{src:"summer_offer.png", id:"summer_offer"},
		{src:"summer_offer_name.png", id:"summer_offer_name"},
		{src:"tagline_02.png", id:"tagline_02"},
		{src:"tagline_03.png", id:"tagline_03"},
		{src:"tagline_04.png", id:"tagline_04"},
		{src:"tnc.png", id:"tnc"}
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
an.compositions['47C0AAB5CC747D42B0EE33E02256B72E'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
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
	var comp=AdobeAn.getComposition("47C0AAB5CC747D42B0EE33E02256B72E");
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
	exportRoot = new lib.HSP1676_Mobile_300x600_30s();
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
	<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:300px; height:600px">
		<a href="javascript:window.open(window.clickTag)"><canvas id="canvas" width="300" height="600" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas></a>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:300px; height:600px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
</body>
</html>