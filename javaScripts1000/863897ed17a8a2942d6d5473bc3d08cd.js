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



(lib.Angellolo = function() {
	this.initialize(img.Angellolo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,193);


(lib.ballblue = function() {
	this.initialize(img.ballblue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,62);


(lib.ballgreen = function() {
	this.initialize(img.ballgreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,64);


(lib.ballpink = function() {
	this.initialize(img.ballpink);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,56);


(lib.ballyellow = function() {
	this.initialize(img.ballyellow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,53);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,604);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,607);


(lib.Carrielolo = function() {
	this.initialize(img.Carrielolo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,236);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,39);


(lib.EUNICElolo = function() {
	this.initialize(img.EUNICElolo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,229);


(lib.footer1 = function() {
	this.initialize(img.footer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,57);


(lib.Katelolo = function() {
	this.initialize(img.Katelolo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,198);


(lib.offer = function() {
	this.initialize(img.offer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,58);


(lib.swimring = function() {
	this.initialize(img.swimring);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,56);


(lib.tc_02 = function() {
	this.initialize(img.tc_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,28);


(lib.tc_03 = function() {
	this.initialize(img.tc_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,28);


(lib.txt = function() {
	this.initialize(img.txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,85);// helper functions:

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


(lib.txt_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.txt();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_1, new cjs.Rectangle(0,0,144,85), null);


(lib.TC_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tc_03();
	this.instance.setTransform(-4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TC_2, new cjs.Rectangle(-4,0,126,28), null);


(lib.TC = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tc_02();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TC, new cjs.Rectangle(0,0,126,28), null);


(lib.swimring_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.swimring();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.swimring_1, new cjs.Rectangle(0,0,65,56), null);


(lib.offer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.offer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offer_1, new cjs.Rectangle(0,0,209,58), null);


(lib.kate = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Katelolo();
	this.instance.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.kate, new cjs.Rectangle(-25,0,68,198), null);


(lib.eunice = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.EUNICElolo();
	this.instance.setTransform(-23,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eunice, new cjs.Rectangle(-23,0,110,229), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-59,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-59,-24,131,39), null);


(lib.carrie = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Carrielolo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carrie, new cjs.Rectangle(0,0,72,236), null);


(lib.border = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EghRAAAMBCjAAA");
	this.shape.setTransform(-148.594,0.029,0.9999,0.9999,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EghRAAAMBCjAAA");
	this.shape_1.setTransform(150.406,0.2097,2.5814,0.9999,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EghRAAAMBCjAAA");
	this.shape_2.setTransform(0,466.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("EghRAAAMBCjAAA");
	this.shape_3.setTransform(0,-132.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.border, new cjs.Rectangle(-214,-550.8,428,1101.8), null);


(lib.bg02 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-28,-182,0.9435,0.9435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg02, new cjs.Rectangle(-28,-182,377.4,572.7), null);


(lib.bg01 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg01, new cjs.Rectangle(9,0,300,604), null);


(lib.ballyellow_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ballyellow();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ballyellow_1, new cjs.Rectangle(0,0,48,53), null);


(lib.ballpink_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ballpink();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ballpink_1, new cjs.Rectangle(0,0,57,56), null);


(lib.ballgreen_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ballgreen();
	this.instance.setTransform(0,0,0.4997,0.4997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ballgreen_1, new cjs.Rectangle(0,0,29,32), null);


(lib.ballblue_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ballblue();
	this.instance.setTransform(19.15,0,0.5642,0.5642,33.2152);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ballblue_1, new cjs.Rectangle(0,0,48.4,48.4), null);


(lib.angel = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Angellolo();
	this.instance.setTransform(-15,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angel, new cjs.Rectangle(-15,0,57,193), null);


// stage content:
(lib.offer_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,2,239];
	// timeline functions:
	this.frame_0 = function() {
		looper=0
	}
	this.frame_2 = function() {
		looper=looper+1
	}
	this.frame_239 = function() {
		if (looper < 3) {
			this.gotoAndPlay(2)
		}
		else{
			this.stop()
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(237).call(this.frame_239).wait(1));

	// border
	this.instance = new lib.border();
	this.instance.setTransform(149,132.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(240));

	// Layer_3
	this.instance_1 = new lib.TC();
	this.instance_1.setTransform(238,586,1,1,0,0,0,63,14);

	this.instance_2 = new lib.TC_2();
	this.instance_2.setTransform(175,572);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},142).wait(98));

	// footer
	this.instance_3 = new lib.footer1();
	this.instance_3.setTransform(0,543);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240));

	// offer
	this.instance_4 = new lib.offer_1();
	this.instance_4.setTransform(154.5,319.15,1.1416,1.1416,0,0,0,104.5,29.1);
	this.instance_4.alpha = 0.7891;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},16).wait(13).to({scaleX:1.2289,scaleY:1.2289,x:154.45,y:323.25},5).to({scaleX:1.1416,scaleY:1.1416,x:154.5,y:319.15},5).to({scaleX:1.2172,scaleY:1.2172,x:154.45,y:322.65},5).to({scaleX:1.1416,scaleY:1.1416,x:154.5,y:319.15},5).to({_off:true},10).wait(83).to({_off:false,regX:104,regY:50.2,scaleX:0.8521,scaleY:0.8521,x:150,y:212.2,alpha:0},0).to({regX:103.7,scaleX:1.1436,scaleY:1.1436,x:149.55,y:218.85,alpha:1},7,cjs.Ease.get(1)).wait(91));

	// txt_01
	this.instance_5 = new lib.txt_1();
	this.instance_5.setTransform(158.5,228.45,1.1416,1.1416,0,0,0,72,42.6);
	this.instance_5.alpha = 0.7891;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},16).wait(13).to({regY:42.5,scaleX:1.2289,scaleY:1.2289,x:158.8,y:225.5},5).to({regY:42.6,scaleX:1.1416,scaleY:1.1416,x:158.5,y:228.45},5).to({regY:42.5,scaleX:1.2172,scaleY:1.2172,x:158.75,y:225.85},5).to({regY:42.6,scaleX:1.1416,scaleY:1.1416,x:158.5,y:228.45},5).to({_off:true},10).wait(83).to({_off:false,regX:72.2,regY:42.8,scaleX:0.8868,scaleY:0.8868,x:154.35,y:127.35,alpha:0},0).to({regX:72,regY:42.6,scaleX:1.1902,scaleY:1.1902,x:155.3,y:104.8,alpha:1},7,cjs.Ease.get(1)).wait(91));

	// cta
	this.instance_6 = new lib.CTA();
	this.instance_6.setTransform(150.6,256.6,0.7806,0.7806,0,0,0,6.8,14.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(142).to({_off:false},0).to({regY:14.6,scaleX:1.0478,scaleY:1.0478,x:150.5,y:278.35,alpha:1},7,cjs.Ease.get(1)).wait(40).to({regX:6.7,regY:14.8,scaleX:0.9319,scaleY:0.9319,y:273.1},4).to({regX:6.8,regY:14.6,scaleX:1.0478,scaleY:1.0478,y:278.35},4).to({regX:6.7,regY:14.8,scaleX:0.9319,scaleY:0.9319,y:273.1},4).to({regX:6.8,regY:14.6,scaleX:1.0478,scaleY:1.0478,y:278.35},4).wait(35));

	// b_pink
	this.instance_7 = new lib.ballpink_1();
	this.instance_7.setTransform(113,428.55,0.4338,0.4338,17.4489,0,0,28.7,28.1);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(97).to({_off:false},0).to({regX:28.5,regY:28,scaleX:0.5789,scaleY:0.5789,rotation:0,x:33.5,y:335.5,alpha:1},12).to({x:4,y:305.5,alpha:0},8,cjs.Ease.get(1)).wait(25).to({regX:28.7,regY:28.1,scaleX:0.4338,scaleY:0.4338,rotation:17.4489,x:113,y:408.55},0).to({regX:28.5,regY:28,scaleX:0.5789,scaleY:0.5789,rotation:0,x:33.5,y:315.5,alpha:1},12).to({x:4,y:305.5,alpha:0},8,cjs.Ease.get(1)).wait(78));

	// b_green
	this.instance_8 = new lib.ballgreen_1();
	this.instance_8.setTransform(80.45,413.35,0.7021,0.7021,0,0,0,14.6,16.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).to({regX:14.5,scaleX:0.861,scaleY:0.861,x:46.4,y:297.35},12,cjs.Ease.get(1)).to({x:32.9,y:275.35,alpha:0},10).wait(61).to({regX:14.6,scaleX:0.7021,scaleY:0.7021,x:80.45,y:433.35,alpha:1},0).to({regX:14.5,scaleX:0.861,scaleY:0.861,x:46.4,y:277.35},12,cjs.Ease.get(1)).to({x:32.9,y:275.35,alpha:0},10).wait(76));

	// b_blue
	this.instance_9 = new lib.ballblue_1();
	this.instance_9.setTransform(254.05,455.8,0.7021,0.7021,0,0,0,24.3,24.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({regX:24.2,scaleX:0.861,scaleY:0.861,x:292.45,y:329.4},12,cjs.Ease.get(1)).to({regY:24.3,scaleX:1.0682,scaleY:1.0682,x:336,y:287.45},10).wait(61).to({regX:24.3,regY:24.2,scaleX:0.7021,scaleY:0.7021,x:254.05,y:475.8},0).to({regX:24.2,scaleX:0.861,scaleY:0.861,x:292.45,y:319.4},8,cjs.Ease.get(1)).to({regY:24.3,scaleX:1.0682,scaleY:1.0682,x:336,y:287.45},14).wait(76));

	// b_yellow
	this.instance_10 = new lib.ballyellow_1();
	this.instance_10.setTransform(92.7,457.35,0.4626,0.4626,-21.4751,0,0,23.9,26.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(59).to({_off:false},0).to({regY:26.6,scaleX:0.5673,scaleY:0.5673,rotation:-21.4752,x:61.35,y:351.25},12,cjs.Ease.get(1)).to({regX:23.7,scaleX:0.4041,scaleY:0.4041,rotation:-33.4393,x:37.75,y:356.75,alpha:0},10).wait(16).to({regX:24,regY:26.9,scaleX:0.3295,scaleY:0.3295,rotation:-33.4369,x:122.8,y:461.85,alpha:1},0).to({regX:23.8,regY:26.7,scaleX:0.4041,scaleY:0.4041,rotation:-33.4393,x:79.4,y:364.7},12,cjs.Ease.get(1)).to({regX:23.7,regY:26.6,x:67.75,y:346.75,alpha:0},12).wait(21).to({regX:24,regY:26.9,scaleX:0.3295,scaleY:0.3295,rotation:-33.4369,x:122.8,y:441.85,alpha:1},0).to({regX:23.8,regY:26.7,scaleX:0.4041,scaleY:0.4041,rotation:-33.4393,x:79.4,y:344.7},12,cjs.Ease.get(1)).to({regX:23.7,regY:26.6,x:67.75,y:346.75,alpha:0},12).wait(74));

	// angel
	this.instance_11 = new lib.angel();
	this.instance_11.setTransform(128,439.25,1.2692,1.2692,0,0,0,28.6,96.5);
	this.instance_11.alpha = 0.8789;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({y:420.2,alpha:1},12,cjs.Ease.get(1)).to({y:436.05},6,cjs.Ease.get(1)).wait(20).to({y:431.95},12,cjs.Ease.get(1)).to({y:436.05},5,cjs.Ease.get(-1)).wait(25).to({regX:28.7,regY:96.7,scaleX:1.1222,scaleY:1.1222,x:132.8,y:468.75},7,cjs.Ease.get(-1)).wait(94));

	// kate
	this.instance_12 = new lib.kate();
	this.instance_12.setTransform(211,441.3,1.2692,1.2692,0,0,0,34,99.1);
	this.instance_12.alpha = 0.8789;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).to({regY:99.2,y:422.35,alpha:1},12,cjs.Ease.get(1)).to({regY:99.1,y:438.05},6,cjs.Ease.get(1)).wait(20).to({regY:99.2,y:434.1},12,cjs.Ease.get(1)).to({regY:99.1,y:438.05},5,cjs.Ease.get(-1)).wait(25).to({regY:99.2,scaleX:1.1222,scaleY:1.1222,x:206.15,y:470.5},7,cjs.Ease.get(-1)).wait(94));

	// eunice
	this.instance_13 = new lib.eunice();
	this.instance_13.setTransform(294.9,446,1.2692,1.2692,0,0,0,55.1,114.6);
	this.instance_13.alpha = 0.7813;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(99).to({_off:false},0).to({regY:114.5,y:398.2,alpha:1},10,cjs.Ease.get(1)).to({regY:114.6,y:418.7},5,cjs.Ease.get(-1)).wait(25).to({regX:55.2,regY:114.8,scaleX:1.1222,scaleY:1.1222,x:280.35,y:445.1},7,cjs.Ease.get(-1)).wait(94));

	// carrie
	this.instance_14 = new lib.carrie();
	this.instance_14.setTransform(38.45,444,1.2692,1.2692,0,0,0,36,118);
	this.instance_14.alpha = 0.7695;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(99).to({_off:false},0).to({y:394.3,alpha:1},10,cjs.Ease.get(1)).to({regY:118.1,y:416.85},5,cjs.Ease.get(-1)).wait(25).to({regX:36.1,scaleX:1.1222,scaleY:1.1222,x:53.55,y:443.2},7,cjs.Ease.get(-1)).wait(94));

	// swim_ring
	this.instance_15 = new lib.swimring_1();
	this.instance_15.setTransform(188.4,430.75,0.4338,0.4338,0,0,0,32.5,28.2);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(97).to({_off:false},0).to({regY:28,scaleX:0.8307,scaleY:0.8307,x:295.05,y:327.5,alpha:1},12).to({x:344.05,y:312.5,alpha:0.75},12,cjs.Ease.get(1)).wait(22).to({regY:28.2,scaleX:0.4338,scaleY:0.4338,x:188.4,y:430.75,alpha:0},0).to({regY:28,scaleX:0.8307,scaleY:0.8307,x:295.05,y:327.5,alpha:1},12).to({x:344.05,y:312.5,alpha:0.75},12,cjs.Ease.get(1)).wait(73));

	// bg02
	this.instance_16 = new lib.bg02();
	this.instance_16.setTransform(159,317.7,1,1,0,0,0,161,135.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(59).to({_off:false},0).to({y:307.7},12).to({y:315.7},5,cjs.Ease.get(1)).wait(21).to({y:307.7},12,cjs.Ease.get(1)).wait(1).to({regX:160.7,regY:104.3,x:158.7,y:276.35},0).wait(1).to({y:276.5},0).wait(1).to({y:276.8},0).wait(1).to({y:277.15},0).wait(1).to({y:277.65},0).wait(1).to({y:278.3},0).wait(1).to({y:279},0).wait(1).to({y:279.85},0).wait(1).to({y:280.8},0).wait(1).to({y:281.85},0).wait(1).to({y:283},0).wait(1).to({regX:161,regY:135.7,x:159,y:315.7},0).wait(1).to({regX:160.7,regY:104.3,x:158.7,y:284.2},0).wait(1).to({y:284.1},0).wait(1).to({y:284},0).wait(1).to({y:283.95},0).wait(1).to({y:283.85},0).wait(1).to({y:283.75},0).wait(1).to({y:283.65},0).wait(1).to({y:283.55},0).wait(1).to({y:283.45},0).wait(1).to({y:283.35},0).wait(1).to({y:283.25},0).wait(1).to({y:283.15},0).wait(1).to({y:283.05},0).wait(1).to({y:282.95},0).wait(1).to({y:282.85},0).wait(1).to({y:282.75},0).wait(1).to({y:282.65},0).wait(1).to({y:282.55},0).wait(1).to({y:282.45},0).wait(1).to({y:282.35},0).wait(1).to({y:282.2},0).wait(1).to({y:282.1},0).wait(1).to({y:282},0).wait(1).to({y:281.9},0).wait(1).to({y:281.75},0).wait(1).to({y:281.65},0).wait(1).to({y:281.5},0).wait(1).to({y:281.4},0).wait(1).to({y:281.3},0).wait(1).to({y:281.15},0).wait(1).to({y:281.05},0).wait(1).to({y:280.9},0).wait(1).to({y:280.8},0).wait(1).to({y:280.65},0).wait(1).to({y:280.55},0).wait(1).to({y:280.4},0).wait(1).to({y:280.25},0).wait(1).to({y:280.15},0).wait(1).to({y:280},0).wait(1).to({y:279.85},0).wait(1).to({y:279.75},0).wait(1).to({y:279.6},0).wait(1).to({y:279.45},0).wait(1).to({y:279.3},0).wait(1).to({y:279.2},0).wait(1).to({y:279.05},0).wait(1).to({y:278.9},0).wait(1).to({y:278.75},0).wait(1).to({y:278.6},0).wait(1).to({y:278.45},0).wait(1).to({y:278.3},0).wait(1).to({y:278.15},0).wait(1).to({y:278},0).wait(1).to({y:277.85},0).wait(1).to({y:277.7},0).wait(1).to({y:277.55},0).wait(1).to({y:277.4},0).wait(1).to({y:277.25},0).wait(1).to({y:277.05},0).wait(1).to({y:276.9},0).wait(1).to({y:276.75},0).wait(1).to({y:276.6},0).wait(1).to({y:276.45},0).wait(1).to({y:276.25},0).wait(1).to({y:276.1},0).wait(1).to({y:275.95},0).wait(1).to({y:275.75},0).wait(1).to({y:275.6},0).wait(1).to({y:275.4},0).wait(1).to({y:275.25},0).wait(1).to({y:275.05},0).wait(1).to({y:274.9},0).wait(1).to({y:274.7},0).wait(1).to({y:274.55},0).wait(1).to({y:274.35},0).wait(1).to({y:274.2},0).wait(1).to({y:274},0).wait(1).to({y:273.8},0).wait(1).to({y:273.65},0).wait(1).to({y:273.45},0).wait(1).to({y:273.25},0).wait(1).to({y:273.1},0).wait(1).to({y:272.9},0).wait(1).to({y:272.7},0).wait(1).to({y:272.5},0).wait(1).to({y:272.3},0).wait(1).to({y:272.1},0).wait(1).to({y:271.95},0).wait(1).to({y:271.75},0).wait(1).to({y:271.55},0).wait(1).to({y:271.35},0).wait(1).to({y:271.15},0).wait(1).to({y:270.95},0).wait(1).to({y:270.75},0).wait(1).to({y:270.55},0).wait(1).to({y:270.3},0).wait(1).to({y:270.1},0).wait(1).to({y:269.9},0).wait(1).to({y:269.7},0).wait(1).to({y:269.5},0).wait(1).to({regX:161,regY:135.7,x:159,y:300.7},0).wait(18));

	// bg01
	this.instance_17 = new lib.bg01();
	this.instance_17.setTransform(149.85,61.85,1.072,1.072,0,0,0,149.8,124.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({regX:149.9,regY:125,scaleX:1.1354,scaleY:1.1354,x:149.95,y:22.05},59).wait(181));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(85.5,-117.7,290.2,800.7);
// library properties:
lib.properties = {
	id: 'EE4BCD7AD80543C28D621B7B4891BECC',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Angellolo.png?1623923464823", id:"Angellolo"},
		{src:"images/ballblue.png?1623923464823", id:"ballblue"},
		{src:"images/ballgreen.png?1623923464823", id:"ballgreen"},
		{src:"images/ballpink.png?1623923464823", id:"ballpink"},
		{src:"images/ballyellow.png?1623923464823", id:"ballyellow"},
		{src:"images/bg1.jpg?1623923464823", id:"bg1"},
		{src:"images/bg2.jpg?1623923464823", id:"bg2"},
		{src:"images/Carrielolo.png?1623923464823", id:"Carrielolo"},
		{src:"images/cta.png?1623923464823", id:"cta"},
		{src:"images/EUNICElolo.png?1623923464823", id:"EUNICElolo"},
		{src:"images/footer1.jpg?1623923464823", id:"footer1"},
		{src:"images/Katelolo.png?1623923464823", id:"Katelolo"},
		{src:"images/offer.png?1623923464823", id:"offer"},
		{src:"images/swimring.png?1623923464823", id:"swimring"},
		{src:"images/tc_02.jpg?1623923464823", id:"tc_02"},
		{src:"images/tc_03.jpg?1623923464823", id:"tc_03"},
		{src:"images/txt.png?1623923464823", id:"txt"}
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
an.compositions['EE4BCD7AD80543C28D621B7B4891BECC'] = {
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