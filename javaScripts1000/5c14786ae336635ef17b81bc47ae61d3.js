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
<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="ad.size" content="width=300,height=250">
<script>
var clickTag = '';
(function (cjs, an) {
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];
// symbols:
(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);
(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);
(lib.btn = function() {
	this.initialize(img.btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,26);
(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,29);
(lib.food5 = function() {
	this.initialize(img.food5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,108);
(lib.food6 = function() {
	this.initialize(img.food6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,68);
(lib.food7 = function() {
	this.initialize(img.food7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,83);
(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);
(lib.offer1 = function() {
	this.initialize(img.offer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,95);
(lib.offer2 = function() {
	this.initialize(img.offer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,86);
(lib.title1 = function() {
	this.initialize(img.title1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,50);
(lib.title2 = function() {
	this.initialize(img.title2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,21);
(lib.title3 = function() {
	this.initialize(img.title3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,197,50);
(lib.title4 = function() {
	this.initialize(img.title4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,20);
(lib.tnc1 = function() {
	this.initialize(img.tnc1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,17);
(lib.tnc2 = function() {
	this.initialize(img.tnc2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,17);// helper functions:
function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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
(lib.tnc2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.tnc2();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.tnc2_1, new cjs.Rectangle(0,0,262,17), null);
(lib.tnc1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.tnc1();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.tnc1_1, new cjs.Rectangle(0,0,123,17), null);
(lib.title4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.title4();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.title4_1, new cjs.Rectangle(0,0,183,20), null);
(lib.title3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.title3();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.title3_1, new cjs.Rectangle(0,0,197,50), null);
(lib.title2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.title2();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.title2_1, new cjs.Rectangle(0,0,174,21), null);
(lib.title1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.title1();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.title1_1, new cjs.Rectangle(0,0,217,50), null);
(lib.offer2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.offer2();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.offer2_1, new cjs.Rectangle(0,0,183,86), null);
(lib.offer1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.offer1();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.offer1_1, new cjs.Rectangle(0,0,144,95), null);
(lib.food7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.food7();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.food7_1, new cjs.Rectangle(0,0,83,83), null);
(lib.food6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.food6();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.food6_1, new cjs.Rectangle(0,0,66,68), null);
(lib.food5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.food5();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.food5_1, new cjs.Rectangle(0,0,108,108), null);
(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.card_1, new cjs.Rectangle(0,0,54,29), null);
(lib.btn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.btn_1, new cjs.Rectangle(0,0,80,26), null);
(lib.bg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.bg2();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,300,250), null);
(lib.bg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.bg1_1, new cjs.Rectangle(0,0,300,250), null);
// stage content:
(lib.HSP1683_300x250_v2_30s = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});
	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(720));
	// btn
	this.instance_1 = new lib.btn_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(66,207,1,1,0,0,0,40,13);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).to({x:56,alpha:1},9).to({_off:true},62).wait(169).to({_off:false,x:66,alpha:0},0).to({x:56,alpha:1},9).to({_off:true},62).wait(169).to({_off:false,x:66,alpha:0},0).to({x:56,alpha:1},9).wait(62));
	// card
	this.instance_2 = new lib.card_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(96.5,76.5,1,1,0,0,0,73.5,14.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(112).to({_off:false},0).to({x:86.5,alpha:1},9).wait(48).to({alpha:0},7).to({_off:true},1).wait(175).to({_off:false,x:96.5},0).to({x:86.5,alpha:1},9).wait(48).to({alpha:0},7).to({_off:true},1).wait(175).to({_off:false,x:96.5},0).to({x:86.5,alpha:1},9).wait(48).to({alpha:0},7).to({_off:true},1).wait(63));
	// title4
	this.instance_3 = new lib.title4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(98.5,123.5,1,1,0,0,0,74.5,22.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(114).to({_off:false},0).to({x:88.5,alpha:1},9).wait(46).to({alpha:0},7).to({_off:true},1).wait(177).to({_off:false,x:98.5},0).to({x:88.5,alpha:1},9).wait(46).to({alpha:0},7).to({_off:true},1).wait(177).to({_off:false,x:98.5},0).to({x:88.5,alpha:1},9).wait(46).to({alpha:0},7).to({_off:true},1).wait(63));
	// offer2
	this.instance_4 = new lib.offer2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(109,171,1,1,0,0,0,95,42);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(117).to({_off:false},0).to({x:99,alpha:1},8).wait(21).to({regY:42.1,scaleX:1.05,scaleY:1.05,y:169.2},6).to({regY:42,scaleX:1,scaleY:1,y:171},6).wait(11).to({alpha:0},7).to({_off:true},1).wait(180).to({_off:false,x:109},0).to({x:99,alpha:1},8).wait(21).to({regY:42.1,scaleX:1.05,scaleY:1.05,y:169.2},6).to({regY:42,scaleX:1,scaleY:1,y:171},6).wait(11).to({alpha:0},7).to({_off:true},1).wait(180).to({_off:false,x:109},0).to({x:99,alpha:1},8).wait(21).to({regY:42.1,scaleX:1.05,scaleY:1.05,y:169.2},6).to({regY:42,scaleX:1,scaleY:1,y:171},6).wait(11).to({alpha:0},7).to({_off:true},1).wait(63));
	// title3
	this.instance_5 = new lib.title3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.5,69.5,1,1,0,0,0,98.5,10.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56).to({_off:false},0).to({x:110.5,alpha:1},8).wait(48).to({alpha:0},9).to({_off:true},1).wait(174).to({_off:false,x:120.5},0).to({x:110.5,alpha:1},8).wait(48).to({alpha:0},9).to({_off:true},1).wait(174).to({_off:false,x:120.5},0).to({x:110.5,alpha:1},8).wait(48).to({alpha:0},9).to({_off:true},1).wait(118));
	// food6
	this.instance_6 = new lib.food6_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(97.6,194.2,0.9,0.9,0,0,0,33,34);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(57).to({_off:false},0).to({y:203.2,alpha:1},8).to({y:197.8},23).to({y:203.2},24).to({alpha:0},9).to({_off:true},1).wait(175).to({_off:false,y:194.2},0).to({y:203.2,alpha:1},8).to({y:197.8},23).to({y:203.2},24).to({alpha:0},9).to({_off:true},1).wait(175).to({_off:false,y:194.2},0).to({y:203.2,alpha:1},8).to({y:197.8},23).to({y:203.2},24).to({alpha:0},9).to({_off:true},1).wait(118));
	// food5
	this.instance_7 = new lib.food5_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(53.6,167.3,0.9,0.9,0,0,0,54.1,54.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(58).to({_off:false},0).to({y:158.3,alpha:1},8).to({y:163.7},24).to({y:158.3},24).to({alpha:0},9).to({_off:true},1).wait(174).to({_off:false,y:167.3},0).to({y:158.3,alpha:1},8).to({y:163.7},24).to({y:158.3},24).to({alpha:0},9).to({_off:true},1).wait(174).to({_off:false,y:167.3},0).to({y:158.3,alpha:1},8).to({y:163.7},24).to({y:158.3},24).to({alpha:0},9).to({_off:true},1).wait(116));
	// food7
	this.instance_8 = new lib.food7_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(127.8,151.6,0.9,0.9,0,0,0,41.6,41.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).to({y:142.6,alpha:1},8).to({y:151.6},22).to({y:142.6},24).to({alpha:0},9).to({_off:true},1).wait(176).to({_off:false,y:151.6},0).to({y:142.6,alpha:1},8).to({y:151.6},22).to({y:142.6},24).to({alpha:0},9).to({_off:true},1).wait(176).to({_off:false,y:151.6},0).to({y:142.6,alpha:1},8).to({y:151.6},22).to({y:142.6},24).to({alpha:0},9).to({_off:true},1).wait(117));
	// title2
	this.instance_9 = new lib.title2_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(121,74.5,1,1,0,0,0,87,10.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(170).to({_off:false},0).to({x:101,alpha:1},7).to({_off:true},63).wait(170).to({_off:false,x:121,alpha:0},0).to({x:101,alpha:1},7).to({_off:true},63).wait(170).to({_off:false,x:121,alpha:0},0).to({x:101,alpha:1},7).wait(63));
	// offer1
	this.instance_10 = new lib.offer1_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(116.5,157.5,1,1,0,0,0,89.5,63.5);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(173).to({_off:false},0).to({x:96.5,alpha:1},9).wait(17).to({regY:63.6,scaleX:1.06,scaleY:1.06,x:98,y:157.4},6).to({regY:63.5,scaleX:1,scaleY:1,x:96.5,y:157.5},6).to({_off:true},29).wait(173).to({_off:false,x:116.5,alpha:0},0).to({x:96.5,alpha:1},9).wait(17).to({regY:63.6,scaleX:1.06,scaleY:1.06,x:98,y:157.4},6).to({regY:63.5,scaleX:1,scaleY:1,x:96.5,y:157.5},6).to({_off:true},29).wait(173).to({_off:false,x:116.5,alpha:0},0).to({x:96.5,alpha:1},9).wait(17).to({regY:63.6,scaleX:1.06,scaleY:1.06,x:98,y:157.4},6).to({regY:63.5,scaleX:1,scaleY:1,x:96.5,y:157.5},6).wait(29));
	// tnc2
	this.instance_11 = new lib.tnc2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(141,237.5,1,1,0,0,0,131,8.5);
	this.instance_11._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(63).to({_off:false},0).to({_off:true},177).wait(63).to({_off:false},0).to({_off:true},177).wait(63).to({_off:false},0).wait(177));
	// bg2
	this.instance_12 = new lib.bg2_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(169,109.9,1.287,1.286,0,0,0,149.8,123.1);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(53).to({_off:false},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125,alpha:1},10,cjs.Ease.quadOut).to({_off:true},177).wait(53).to({_off:false,regX:149.8,regY:123.1,scaleX:1.29,scaleY:1.29,x:169,y:109.9,alpha:0},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125,alpha:1},10,cjs.Ease.quadOut).to({_off:true},177).wait(53).to({_off:false,regX:149.8,regY:123.1,scaleX:1.29,scaleY:1.29,x:169,y:109.9,alpha:0},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125,alpha:1},10,cjs.Ease.quadOut).wait(177));
	// card
	this.instance_13 = new lib.card_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(86.5,75.5,1,1,0,0,0,73.5,14.5);
	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},64).wait(176).to({_off:false},0).to({_off:true},64).wait(176).to({_off:false},0).to({_off:true},64).wait(176));
	// tnc1
	this.instance_14 = new lib.tnc1_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(71.5,237.5,1,1,0,0,0,61.5,8.5);
	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},64).wait(176).to({_off:false},0).to({_off:true},64).wait(176).to({_off:false},0).to({_off:true},64).wait(176));
	// title1
	this.instance_15 = new lib.title1_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(121.5,127.5,1,1,0,0,0,108.5,25.5);
	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},64).wait(176).to({_off:false},0).to({_off:true},64).wait(176).to({_off:false},0).to({_off:true},64).wait(176));
	// bg1
	this.instance_16 = new lib.bg1_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(720));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	id: 'A0968D3F60811E4483E64098732BE56A',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"bg1.jpg", id:"bg1"},
		{src:"bg2.jpg", id:"bg2"},
		{src:"btn.png", id:"btn"},
		{src:"card.png", id:"card"},
		{src:"food5.png", id:"food5"},
		{src:"food6.png", id:"food6"},
		{src:"food7.png", id:"food7"},
		{src:"logo.png", id:"logo"},
		{src:"offer1.png", id:"offer1"},
		{src:"offer2.png", id:"offer2"},
		{src:"title1.png", id:"title1"},
		{src:"title2.png", id:"title2"},
		{src:"title3.png", id:"title3"},
		{src:"title4.png", id:"title4"},
		{src:"tnc1.png", id:"tnc1"},
		{src:"tnc2.png", id:"tnc2"}
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
an.compositions['A0968D3F60811E4483E64098732BE56A'] = {
	getStage: function() { return exportRoot.getStage(); },
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
})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
</script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("A0968D3F60811E4483E64098732BE56A");
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
	exportRoot = new lib.HSP1683_300x250_v2_30s();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
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
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	makeResponsive(false,'both',false,1);	
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