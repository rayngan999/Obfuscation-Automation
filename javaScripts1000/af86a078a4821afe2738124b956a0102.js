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
<meta name="ad.size" content="width=300,height=250">
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
p.nominalBounds = new cjs.Rectangle(0,0,301,250);
(lib.BG_02 = function() {
	this.initialize(img.BG_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);
(lib.card_G = function() {
	this.initialize(img.card_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,256);
(lib.card_R = function() {
	this.initialize(img.card_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,255);
(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,27);
(lib.last_offer = function() {
	this.initialize(img.last_offer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,151);
(lib.last_tagline = function() {
	this.initialize(img.last_tagline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,23);
(lib.last_tagline_02 = function() {
	this.initialize(img.last_tagline_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,56);
(lib.light_01 = function() {
	this.initialize(img.light_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,97);
(lib.light_02 = function() {
	this.initialize(img.light_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,49);
(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,41);
(lib.mobile_G = function() {
	this.initialize(img.mobile_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,70);
(lib.mobile_offer = function() {
	this.initialize(img.mobile_offer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,124);
(lib.mobile_offer_02 = function() {
	this.initialize(img.mobile_offer_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,26);
(lib.mobile_tagline = function() {
	this.initialize(img.mobile_tagline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,51);
(lib.mpower_G = function() {
	this.initialize(img.mpower_G);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,255,68);
(lib.mpower_hdline = function() {
	this.initialize(img.mpower_hdline);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,116);
(lib.mpower_R = function() {
	this.initialize(img.mpower_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,64);
(lib.summer_offer = function() {
	this.initialize(img.summer_offer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,296,160);
(lib.summer_offer_name = function() {
	this.initialize(img.summer_offer_name);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,56);
(lib.tagline_01 = function() {
	this.initialize(img.tagline_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,103,37);
(lib.tagline_02 = function() {
	this.initialize(img.tagline_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,53);
(lib.tagline_03 = function() {
	this.initialize(img.tagline_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,38);
(lib.tnc = function() {
	this.initialize(img.tnc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,17);// helper functions:
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
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.tagline_03_1, new cjs.Rectangle(0,0,224,38), null);
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
}).prototype = getMCSymbolPrototype(lib.summer_offer_name_1, new cjs.Rectangle(0,0,296,160), null);
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
}).prototype = getMCSymbolPrototype(lib.summer_offer_1, new cjs.Rectangle(0,0,160,56), null);
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
}).prototype = getMCSymbolPrototype(lib.m_watermark_mobile, new cjs.Rectangle(-109,-35,218,70), null);
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
	this.instance.setTransform(-71,-14);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_tnc, new cjs.Rectangle(-71,-14,212,17), null);
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
}).prototype = getMCSymbolPrototype(lib.m_tagline_04, new cjs.Rectangle(-73,-26,259,51), null);
(lib.m_tagline_02 = function(mode,startPosition,loop,reversed) {
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
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_tagline_02, new cjs.Rectangle(0,0,192,53), null);
(lib.m_tagline_01 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tagline_01();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_tagline_01, new cjs.Rectangle(0,0,103,37), null);
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
	this.instance.setTransform(-126.5,-32);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_mpower_R, new cjs.Rectangle(-126.5,-32,253,64), null);
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
	this.instance.setTransform(-103,-34.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_mpower_logo, new cjs.Rectangle(-103,-34.5,225,116), null);
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
}).prototype = getMCSymbolPrototype(lib.m_mpower_G, new cjs.Rectangle(-127.5,-34,255,68), null);
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
}).prototype = getMCSymbolPrototype(lib.m_mobile_offer_02, new cjs.Rectangle(-96,-13,192,26), null);
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
	this.instance.setTransform(-147,-75);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_mobile_offer, new cjs.Rectangle(-147,-75,293,124), null);
(lib.m_light_02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.light_02();
	this.instance.setTransform(-27.5,-24.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_light_02, new cjs.Rectangle(-27.5,-24.5,55,49), null);
(lib.m_light_01 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.light_01();
	this.instance.setTransform(-10,-48.5);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_light_01, new cjs.Rectangle(-10,-48.5,20,97), null);
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
}).prototype = getMCSymbolPrototype(lib.m_last_tagline_02, new cjs.Rectangle(0,0,126,56), null);
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
}).prototype = getMCSymbolPrototype(lib.m_last_tagline, new cjs.Rectangle(-123,-17,120,23), null);
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
	this.instance.setTransform(-148,-59);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_last_offer, new cjs.Rectangle(-148,-59,296,151), null);
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
	this.instance.setTransform(-72,-22);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_hs_logo, new cjs.Rectangle(-72,-22,158,41), null);
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
}).prototype = getMCSymbolPrototype(lib.m_CTA, new cjs.Rectangle(-49,-14,95,27), null);
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
}).prototype = getMCSymbolPrototype(lib.m_card_R, new cjs.Rectangle(-78,-127.5,156,255), null);
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
}).prototype = getMCSymbolPrototype(lib.m_card_G, new cjs.Rectangle(-76,-127,155,256), null);
(lib.m_BG_02 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.BG_02();
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this._renderFirstFrame();
}).prototype = getMCSymbolPrototype(lib.m_BG_02, new cjs.Rectangle(0,0,300,250), null);
// stage content:
(lib.HSP1676_Unbox_300x250_30s = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(720));
	// tnc
	this.instance = new lib.m_tnc();
	this.instance.setTransform(88.5,240);
	this.instance.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:88,alpha:1},3).wait(357).to({x:88.5,alpha:0},0).to({x:88,alpha:1},3).wait(357));
	// light_01
	this.instance_1 = new lib.m_light_01();
	this.instance_1.setTransform(146,89.5);
	this.instance_1.alpha = 0.6016;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:91.9103,alpha:0.5793},0).wait(1).to({y:94.4476,alpha:0.5558},0).wait(1).to({y:97.1141,alpha:0.5311},0).wait(1).to({y:99.9124,alpha:0.5052},0).wait(1).to({y:102.8452,alpha:0.4781},0).wait(1).to({y:105.915,alpha:0.4496},0).wait(1).to({y:109.1245,alpha:0.4199},0).wait(1).to({y:112.4765,alpha:0.3889},0).wait(1).to({y:115.974,alpha:0.3566},0).wait(1).to({y:119.6197,alpha:0.3228},0).wait(1).to({y:123.4167,alpha:0.2877},0).wait(1).to({y:127.3681,alpha:0.2511},0).wait(1).to({y:131.4769,alpha:0.2131},0).wait(1).to({y:135.7466,alpha:0.1736},0).wait(1).to({y:140.1802,alpha:0.1325},0).wait(1).to({y:144.7814,alpha:0.0899},0).wait(1).to({y:149.5534,alpha:0.0458},0).wait(1).to({y:154.5,alpha:0},0).wait(342).to({y:89.5,alpha:0.6016},0).wait(1).to({y:91.9103,alpha:0.5793},0).wait(1).to({y:94.4476,alpha:0.5558},0).wait(1).to({y:97.1141,alpha:0.5311},0).wait(1).to({y:99.9124,alpha:0.5052},0).wait(1).to({y:102.8452,alpha:0.4781},0).wait(1).to({y:105.915,alpha:0.4496},0).wait(1).to({y:109.1245,alpha:0.4199},0).wait(1).to({y:112.4765,alpha:0.3889},0).wait(1).to({y:115.974,alpha:0.3566},0).wait(1).to({y:119.6197,alpha:0.3228},0).wait(1).to({y:123.4167,alpha:0.2877},0).wait(1).to({y:127.3681,alpha:0.2511},0).wait(1).to({y:131.4769,alpha:0.2131},0).wait(1).to({y:135.7466,alpha:0.1736},0).wait(1).to({y:140.1802,alpha:0.1325},0).wait(1).to({y:144.7814,alpha:0.0899},0).wait(1).to({y:149.5534,alpha:0.0458},0).wait(1).to({y:154.5,alpha:0},0).wait(342));
	// light_02
	this.instance_2 = new lib.m_light_02();
	this.instance_2.setTransform(150.5,91.5);
	this.instance_2.alpha = 0.6016;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:2.0024,x:150.4251,y:93.9099,alpha:0.5793},0).wait(1).to({rotation:4.1103,x:150.3463,y:96.4467,alpha:0.5558},0).wait(1).to({rotation:6.3256,x:150.2634,y:99.1128,alpha:0.5311},0).wait(1).to({rotation:8.6504,x:150.1764,y:101.9107,alpha:0.5052},0).wait(1).to({rotation:11.0868,x:150.0853,y:104.8429,alpha:0.4781},0).wait(1).to({rotation:13.6371,x:149.9899,y:107.9122,alpha:0.4496},0).wait(1).to({rotation:16.3035,x:149.8902,y:111.1212,alpha:0.4199},0).wait(1).to({rotation:19.0883,x:149.786,y:114.4726,alpha:0.3889},0).wait(1).to({rotation:21.9938,x:149.6773,y:117.9695,alpha:0.3566},0).wait(1).to({rotation:25.0226,x:149.5641,y:121.6146,alpha:0.3228},0).wait(1).to({rotation:28.1771,x:149.4461,y:125.4109,alpha:0.2877},0).wait(1).to({rotation:31.4597,x:149.3233,y:129.3616,alpha:0.2511},0).wait(1).to({rotation:34.8733,x:149.1956,y:133.4698,alpha:0.2131},0).wait(1).to({rotation:38.4204,x:149.0629,y:137.7387,alpha:0.1736},0).wait(1).to({rotation:42.1037,x:148.9251,y:142.1716,alpha:0.1325},0).wait(1).to({rotation:45.9262,x:148.7822,y:146.772,alpha:0.0899},0).wait(1).to({rotation:49.8907,x:148.6339,y:151.5432,alpha:0.0458},0).wait(1).to({rotation:54.0002,x:148.55,y:156.5,alpha:0},0).wait(342).to({rotation:0,x:150.5,y:91.5,alpha:0.6016},0).wait(1).to({rotation:2.0024,x:150.4251,y:93.9099,alpha:0.5793},0).wait(1).to({rotation:4.1103,x:150.3463,y:96.4467,alpha:0.5558},0).wait(1).to({rotation:6.3256,x:150.2634,y:99.1128,alpha:0.5311},0).wait(1).to({rotation:8.6504,x:150.1764,y:101.9107,alpha:0.5052},0).wait(1).to({rotation:11.0868,x:150.0853,y:104.8429,alpha:0.4781},0).wait(1).to({rotation:13.6371,x:149.9899,y:107.9122,alpha:0.4496},0).wait(1).to({rotation:16.3035,x:149.8902,y:111.1212,alpha:0.4199},0).wait(1).to({rotation:19.0883,x:149.786,y:114.4726,alpha:0.3889},0).wait(1).to({rotation:21.9938,x:149.6773,y:117.9695,alpha:0.3566},0).wait(1).to({rotation:25.0226,x:149.5641,y:121.6146,alpha:0.3228},0).wait(1).to({rotation:28.1771,x:149.4461,y:125.4109,alpha:0.2877},0).wait(1).to({rotation:31.4597,x:149.3233,y:129.3616,alpha:0.2511},0).wait(1).to({rotation:34.8733,x:149.1956,y:133.4698,alpha:0.2131},0).wait(1).to({rotation:38.4204,x:149.0629,y:137.7387,alpha:0.1736},0).wait(1).to({rotation:42.1037,x:148.9251,y:142.1716,alpha:0.1325},0).wait(1).to({rotation:45.9262,x:148.7822,y:146.772,alpha:0.0899},0).wait(1).to({rotation:49.8907,x:148.6339,y:151.5432,alpha:0.0458},0).wait(1).to({rotation:54.0002,x:148.55,y:156.5,alpha:0},0).wait(342));
	// card_R
	this.instance_3 = new lib.m_card_R();
	this.instance_3.setTransform(202,142.5);
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:147.5},18,cjs.Ease.none).to({x:378,y:157.5},7,cjs.Ease.get(1)).wait(335).to({x:202,y:142.5},0).to({y:147.5},18,cjs.Ease.none).to({x:378,y:157.5},7,cjs.Ease.get(1)).wait(335));
	// card_G
	this.instance_4 = new lib.m_card_G();
	this.instance_4.setTransform(98,137);
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:132},18,cjs.Ease.none).to({x:-76,y:122},7,cjs.Ease.get(1)).wait(335).to({x:98,y:137},0).to({y:132},18,cjs.Ease.none).to({x:-76,y:122},7,cjs.Ease.get(1)).wait(335));
	// HS_logo
	this.instance_5 = new lib.m_hs_logo();
	this.instance_5.setTransform(150.5,125,1,1,0,0,0,7.5,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({_off:false},0).to({alpha:1},4).wait(23).to({alpha:0},4).to({_off:true},1).wait(328).to({_off:false},0).to({alpha:1},4).wait(23).to({alpha:0},4).to({_off:true},1).wait(310));
	// tagline_03
	this.instance_6 = new lib.tagline_03_1();
	this.instance_6.setTransform(151,189,1,1,0,0,0,112,19);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({alpha:1},4).wait(26).to({alpha:0},4).to({_off:true},1).wait(325).to({_off:false},0).to({alpha:1},4).wait(26).to({alpha:0},4).to({_off:true},1).wait(280));
	// mpower_logo
	this.instance_7 = new lib.m_mpower_logo();
	this.instance_7.setTransform(141,77);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({_off:false},0).to({alpha:1},4).wait(26).to({alpha:0},4).to({_off:true},1).wait(325).to({_off:false},0).to({alpha:1},4).wait(26).to({alpha:0},4).to({_off:true},1).wait(280));
	// G_watermark
	this.instance_8 = new lib.m_mpower_G();
	this.instance_8.setTransform(90,210);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({x:90.2,alpha:0.1211},4).to({x:102.85},26).to({x:103,alpha:0},4).to({_off:true},281).wait(45).to({_off:false,x:90},0).to({x:90.2,alpha:0.1211},4).to({x:102.85},26).to({x:103,alpha:0},4).wait(281));
	// tagline_mobile
	this.instance_9 = new lib.m_tagline_04();
	this.instance_9.setTransform(93,36);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(133).to({_off:false},0).to({alpha:1},3).wait(18).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:1,scaleY:1},4).wait(29).to({alpha:0},3).to({_off:true},1).wait(298).to({_off:false},0).to({alpha:1},3).wait(18).to({scaleX:1.1,scaleY:1.1},4).to({scaleX:1,scaleY:1},4).wait(29).to({alpha:0},3).to({_off:true},1).wait(165));
	// mobile_offer_01
	this.instance_10 = new lib.m_mobile_offer();
	this.instance_10.setTransform(138,135);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(133).to({_off:false},0).to({alpha:1},3).wait(55).to({alpha:0},3).to({_off:true},1).wait(298).to({_off:false},0).to({alpha:1},3).wait(55).to({alpha:0},3).to({_off:true},1).wait(165));
	// mobile_offer_02
	this.instance_11 = new lib.m_mobile_offer_02();
	this.instance_11.setTransform(188,204);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(133).to({_off:false},0).to({alpha:1},3).wait(55).to({alpha:0},3).to({_off:true},1).wait(298).to({_off:false},0).to({alpha:1},3).wait(55).to({alpha:0},3).to({_off:true},1).wait(165));
	// summer_offer.png
	this.instance_12 = new lib.summer_offer_name_1();
	this.instance_12.setTransform(164,136,1,1,0,0,0,148,80);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(191).to({_off:false},0).to({alpha:1},3).wait(61).to({alpha:0},3).to({_off:true},1).wait(292).to({_off:false},0).to({alpha:1},3).wait(61).to({alpha:0},3).to({_off:true},1).wait(101));
	// summer_offer_name.png
	this.instance_13 = new lib.summer_offer_1();
	this.instance_13.setTransform(92,37,1,1,0,0,0,80,28);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(191).to({_off:false},0).to({alpha:1},3).wait(22).to({scaleX:1.0625,scaleY:1.0616,y:33.7},4).to({scaleX:1,scaleY:1,y:37},4).wait(31).to({alpha:0},3).to({_off:true},1).wait(292).to({_off:false},0).to({alpha:1},3).wait(22).to({scaleX:1.0625,scaleY:1.0616,y:33.7},4).to({scaleX:1,scaleY:1,y:37},4).wait(31).to({alpha:0},3).to({_off:true},1).wait(101));
	// last_tagline_02
	this.instance_14 = new lib.m_last_tagline_02();
	this.instance_14.setTransform(201.5,37,1,1,0,0,0,62.5,25);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(255).to({_off:false},0).to({alpha:1},3).wait(21).to({regX:62.6,regY:25.1,scaleX:1.1,scaleY:1.1,x:201.55,y:37.05},4).to({regX:62.5,regY:25,scaleX:1,scaleY:1,x:201.5,y:37},4).to({_off:true},73).wait(255).to({_off:false,alpha:0},0).to({alpha:1},3).wait(21).to({regX:62.6,regY:25.1,scaleX:1.1,scaleY:1.1,x:201.55,y:37.05},4).to({regX:62.5,regY:25,scaleX:1,scaleY:1,x:201.5,y:37},4).wait(73));
	// last_tagline
	this.instance_15 = new lib.m_last_tagline();
	this.instance_15.setTransform(140,41);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(255).to({_off:false},0).to({alpha:1},3).to({_off:true},102).wait(255).to({_off:false,alpha:0},0).to({alpha:1},3).wait(102));
	// last_offer
	this.instance_16 = new lib.m_last_offer();
	this.instance_16.setTransform(167,124);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(255).to({_off:false},0).to({alpha:1},3).to({_off:true},102).wait(255).to({_off:false,alpha:0},0).to({alpha:1},3).wait(102));
	// CTA
	this.instance_17 = new lib.m_CTA();
	this.instance_17.setTransform(68,207);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(255).to({_off:false},0).to({alpha:1},3).to({_off:true},102).wait(255).to({_off:false,alpha:0},0).to({alpha:1},3).wait(102));
	// R_watermark
	this.instance_18 = new lib.m_mpower_R();
	this.instance_18.setTransform(240.5,43);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(45).to({_off:false},0).to({x:240.1,alpha:0.1211},4).to({x:228.6},26).to({x:226.85,alpha:0.1016},4).to({x:200.3},54).to({x:199.45,alpha:0.1211},3).to({x:159,alpha:0.0586},151).to({_off:true},73).wait(45).to({_off:false,x:240.5,alpha:0},0).to({x:240.1,alpha:0.1211},4).to({x:228.6},26).to({x:226.85,alpha:0.1016},4).to({x:200.3},54).to({x:199.45,alpha:0.1211},3).to({x:159,alpha:0.0586},151).wait(73));
	// mobile_watermark
	this.instance_19 = new lib.m_watermark_mobile();
	this.instance_19.setTransform(95,210);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(75).to({_off:false},0).to({alpha:0.1016},4).to({x:121.2},54).to({x:122.5,alpha:0.1211},3).to({x:173},151).to({_off:true},73).wait(75).to({_off:false,x:95,alpha:0},0).to({alpha:0.1016},4).to({x:121.2},54).to({x:122.5,alpha:0.1211},3).to({x:173},151).wait(73));
	// tagline_01
	this.instance_20 = new lib.m_tagline_01();
	this.instance_20.setTransform(216.5,131,1,1,0,0,0,34.5,11);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(79).to({_off:false},0).to({alpha:1},4).wait(50).to({alpha:0},3).to({_off:true},224).wait(79).to({_off:false},0).to({alpha:1},4).wait(50).to({alpha:0},3).wait(224));
	// tagline_02
	this.instance_21 = new lib.m_tagline_02();
	this.instance_21.setTransform(167.5,197.5,1,1,0,0,0,74.5,36.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(79).to({_off:false},0).to({alpha:1},4).wait(19).to({regY:36.6,scaleX:1.1,scaleY:1.1,x:167.45,y:197.55},4).to({regY:36.5,scaleX:1,scaleY:1,x:167.5,y:197.5},4).wait(23).to({alpha:0},3).to({_off:true},224).wait(79).to({_off:false},0).to({alpha:1},4).wait(19).to({regY:36.6,scaleX:1.1,scaleY:1.1,x:167.45,y:197.55},4).to({regY:36.5,scaleX:1,scaleY:1,x:167.5,y:197.5},4).wait(23).to({alpha:0},3).wait(224));
	// BG_02
	this.instance_22 = new lib.m_BG_02();
	this.instance_22.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(75).to({_off:false},0).to({alpha:1},4).wait(54).to({alpha:0},3).to({_off:true},224).wait(75).to({_off:false},0).to({alpha:1},4).wait(54).to({alpha:0},3).wait(224));
	// BG
	this.instance_23 = new lib.BG();
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(720));
	this._renderFirstFrame();
}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-2,120,458,165);
// library properties:
lib.properties = {
	id: '47C0AAB5CC747D42B0EE33E02256B72E',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"BG.jpg", id:"BG"},
		{src:"BG_02.jpg", id:"BG_02"},
		{src:"card_G.png", id:"card_G"},
		{src:"card_R.png", id:"card_R"},
		{src:"CTA.png", id:"CTA"},
		{src:"last_offer.png", id:"last_offer"},
		{src:"last_tagline.png", id:"last_tagline"},
		{src:"last_tagline_02.png", id:"last_tagline_02"},
		{src:"light_01.png", id:"light_01"},
		{src:"light_02.png", id:"light_02"},
		{src:"logo.png", id:"logo"},
		{src:"mobile_G.png", id:"mobile_G"},
		{src:"mobile_offer.png", id:"mobile_offer"},
		{src:"mobile_offer_02.png", id:"mobile_offer_02"},
		{src:"mobile_tagline.png", id:"mobile_tagline"},
		{src:"mpower_G.png", id:"mpower_G"},
		{src:"mpower_hdline.png", id:"mpower_hdline"},
		{src:"mpower_R.png", id:"mpower_R"},
		{src:"summer_offer.png", id:"summer_offer"},
		{src:"summer_offer_name.png", id:"summer_offer_name"},
		{src:"tagline_01.png", id:"tagline_01"},
		{src:"tagline_02.png", id:"tagline_02"},
		{src:"tagline_03.png", id:"tagline_03"},
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
	exportRoot = new lib.HSP1676_Unbox_300x250_30s();
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
	<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:300px; height:250px">
		<a href="javascript:window.open(window.clickTag)"><canvas id="canvas" width="300" height="250" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas></a>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:300px; height:250px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
</body>
</html>