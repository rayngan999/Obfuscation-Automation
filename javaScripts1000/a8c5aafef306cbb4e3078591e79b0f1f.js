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



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,483);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1325,573);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.end = function() {
	this.initialize(img.end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.end_phone = function() {
	this.initialize(img.end_phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.t1 = function() {
	this.initialize(img.t1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.t2 = function() {
	this.initialize(img.t2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.t3 = function() {
	this.initialize(img.t3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

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


(lib.tu = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFF3").s().p("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");
	this.shape.setTransform(60.3813,60.849);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tu, new cjs.Rectangle(0,0,120.8,121.7), null);


(lib.t3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(0,0,300,250), null);


(lib.t1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(0,0,300,250), null);


(lib.p4_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.p4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.p4_1, new cjs.Rectangle(0,0,300,250), null);


(lib.p3_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.p3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(0,0,300,250), null);


(lib.p2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.p2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.p2_1, new cjs.Rectangle(0,0,300,250), null);


(lib.p1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.p1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.p1_1, new cjs.Rectangle(0,0,300,250), null);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,250), null);


(lib.light = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.576)","rgba(0,0,0,0)"],[0,0.498,1],-37.5,0,37.5,0).s().p("Al2N6IAA7zILtAAIAAbzg");
	this.shape.setTransform(37.5,89.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(0,0,75,178.1), null);


(lib.grow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,69.4).s().p("AngHgQjHjHAAkZQAAkYDHjIQDIjHEYAAQEZAADHDHQDIDIAAEYQAAEZjIDHQjHDIkZAAQkYAAjIjIg");
	this.shape.setTransform(68,68);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grow, new cjs.Rectangle(0,0,136,136), null);


(lib.f2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.t2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f2, new cjs.Rectangle(0,0,300,250), null);


(lib.end_phone_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.end_phone();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end_phone_1, new cjs.Rectangle(0,0,300,250), null);


(lib.black = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-91.8,0,92,0).s().p("EgOWApBMAAAhSCIctAAMAAABSCg");
	this.shape.setTransform(91.9,262.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,183.8,525.1), null);


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

	// Layer_2
	this.instance = new lib.bg2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,1325,573), null);


(lib.arrow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#F5E457").ss(0.3).p("AgrAAIBIhIIANAOIg5A6IA6A7IgOAOg");
	this.shape.setTransform(4.3532,7.2686);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBD700").s().p("AgrAAIBIhIIAOAOIg6A6IA7A7IgPAOg");
	this.shape_1.setTransform(4.35,7.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(-1,-1,10.7,16.6), null);


(lib.p3mov = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.p3_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:115},25,cjs.Ease.quadInOut).wait(1).to({y:115.15},0).wait(1).to({y:115.3},0).wait(1).to({y:115.5},0).wait(1).to({y:115.8},0).wait(1).to({y:116.15},0).wait(1).to({y:116.6},0).wait(1).to({y:117.1},0).wait(1).to({y:117.7},0).wait(1).to({y:118.35},0).wait(1).to({y:119.05},0).wait(1).to({y:119.8},0).wait(1).to({y:120.5},0).wait(1).to({y:121.2},0).wait(1).to({y:121.9},0).wait(1).to({y:122.5},0).wait(1).to({y:123.05},0).wait(1).to({y:123.5},0).wait(1).to({y:123.9},0).wait(1).to({y:124.25},0).wait(1).to({y:124.5},0).wait(1).to({y:124.7},0).wait(1).to({y:124.85},0).wait(1).to({y:124.95},0).wait(1).to({y:125},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,300,260);


(lib.p2mov = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.p2_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:118.5},24,cjs.Ease.quadInOut).to({y:125},25,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.5,300,256.5);


(lib.p1mov = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.p1_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:116.5},25,cjs.Ease.quadInOut).to({y:125},24,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.5,300,258.5);


(lib.grow_all = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.grow();
	this.instance.setTransform(14.2,90.9,0.1924,0.1109,49.9613,0,0,68.5,68.7);
	this.instance.alpha = 0.5898;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.grow();
	this.instance_1.setTransform(28.7,69.05,0.1308,0.0754,49.9612,0,0,68.3,68.4);
	this.instance_1.alpha = 0.5898;
	this.instance_1.compositeOperation = "lighter";

	this.instance_2 = new lib.grow();
	this.instance_2.setTransform(21.45,74.55,0.1308,0.0754,49.9612,0,0,68.3,68.4);
	this.instance_2.alpha = 0.5898;
	this.instance_2.compositeOperation = "lighter";

	this.instance_3 = new lib.grow();
	this.instance_3.setTransform(83.15,69.6,0.1308,0.0754,49.9612,0,0,68.3,68.4);
	this.instance_3.alpha = 0.5898;
	this.instance_3.compositeOperation = "lighter";

	this.instance_4 = new lib.grow();
	this.instance_4.setTransform(96.7,16.8,0.2169,0.125,49.9571,0,0,68.2,68.1);
	this.instance_4.alpha = 0.5898;
	this.instance_4.compositeOperation = "lighter";

	this.instance_5 = new lib.grow();
	this.instance_5.setTransform(90.75,25.85,0.2169,0.125,49.9571,0,0,68.2,68.1);
	this.instance_5.alpha = 0.5898;
	this.instance_5.compositeOperation = "lighter";

	this.instance_6 = new lib.grow();
	this.instance_6.setTransform(22.45,39.9,0.125,0.125,0,0,0,68,68.4);
	this.instance_6.alpha = 0.5898;
	this.instance_6.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.grow_all, new cjs.Rectangle(0,0,112.7,105.7), null);


(lib.end_phone_mov = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_99 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer_1
	this.instance = new lib.end_phone_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:115.8},24,cjs.Ease.quadInOut).to({y:125},25,cjs.Ease.quadInOut).to({y:115.8},25,cjs.Ease.quadInOut).to({y:125},25,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.2,300,259.2);


(lib.end_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.end_phone_mov();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.end();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end_1, new cjs.Rectangle(0,0,300,250), null);


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

	// timeline functions:
	this.frame_80 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(80).call(this.frame_80).wait(220));

	// Layer_5
	this.instance = new lib.arrow();
	this.instance.setTransform(270.65,204.1,1,1,0,0,0,4.4,7.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({_off:true},23).wait(8).to({_off:false},0).to({_off:true},22).wait(8).to({_off:false},0).to({_off:true},154).wait(75));

	// Layer_4
	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(260.95,204.1,1,1,0,0,0,4.4,7.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({_off:true},19).wait(12).to({_off:false},0).to({_off:true},18).wait(12).to({_off:false},0).to({_off:true},150).wait(75));

	// Layer_3
	this.instance_2 = new lib.arrow();
	this.instance_2.setTransform(250.9,204.1,1,1,0,0,0,4.4,7.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({_off:true},15).wait(16).to({_off:false},0).to({_off:true},14).wait(16).to({_off:false},0).to({_off:true},146).wait(75));

	// Isolation_Mode (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_7 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(7).to({graphics:mask_graphics_7,x:150.4408,y:203.98}).wait(293));

	// Layer_3
	this.instance_3 = new lib.light();
	this.instance_3.setTransform(-37,196.55,1,1,33.2189,0,0,37.5,89);
	this.instance_3.compositeOperation = "lighter";
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({x:346.6},57,cjs.Ease.cubicInOut).wait(236));

	// Layer_1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_8 = new cjs.Graphics().p("AxxD6QhnAAhKhJQhJhKAAhnQAAhnBJhJQBKhJBnAAMAjjAAAQBnAABJBJQBKBJAABnQAABnhKBKQhJBJhnAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_8,x:150.325,y:203.55}).wait(292));

	// Layer_2
	this.instance_4 = new lib.light();
	this.instance_4.setTransform(-37,196.55,1,1,33.2189,0,0,37.5,89);
	this.instance_4.alpha = 0.4414;
	this.instance_4.compositeOperation = "lighter";
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({x:346.6},57,cjs.Ease.cubicInOut).wait(235));

	// Layer_1
	this.instance_5 = new lib.cta();
	this.instance_5.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},225).wait(75));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.ppl3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.p3mov();
	this.instance.setTransform(544.4,106.95,0.837,0.837,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A1GckIgqwAIEgqdIBXl0QAdhmACgZQABgPgGgUIgHgbQgBgJACgcIAEgaIAAmcQAAgcAJgSQAIgQAIACQAJACAjgEIAKgWQAFgIADgVQADgVgBgUQgBgSAHgLQAFgGADgDQgDgwAGgbQAEgWAJggQAKghAJgUQAIgPALgLQAIgJAAgEQAAgHAIgCIAWgDIA3gHQAugFAXgEQAYgEADgJQAGgJACgBQAIgCAQgBQAPAAAGgCQANgGAVghQAKgRARgKQAEgigEgOQgDgJAAgUIAAgSQgLgNgJgHQgLgJgFgdIgFgcQgCgPAEgIQAEgHARgCIAPAAQgCgaAAgOQABgEgBgXQAAgQABgJIABgIQABgDAEgEIAEgEQACgDANgHQARgLALgJQAMgJAHgDQAGgDAEgFQAGgFALgCQAOgDAGgDQARgJBAgGQASgBATALQAKAGAPANQAIAHANAiIAOApIAKAWQAIARABANQACAVgNAtIgDAUQgEAWgBAOQgCAzgRAnQgdA/gPAOIglAfIACAeIAEADIAVAdQANAKAOAHQAbAMAIAOIAKAAQAPABAUAHQAhALAgANIAHAEQAJAFAGAAQAGgBACAFQACADADAPQAFARABAmIAIAAQAIABADADQAcAdAEAKQADAKABAWIAFAIQAJAJAPAGQAQAGAGAGQAEADAMAQQAVAbAdASQASALAJALIASAVIAcgMQAOgGAWgSIArgmQARgPAlgXQAfgUAFgEQAJgLAMgYQADgFAKABIAHgFQAEgCASAHIANgJQAQgKAKgKQAMgKAPgBQAJgBAdACQAKAAAiAGQAZADAJgCQAIgBAOgJQANgIAHgBQAJgBAFAIIAEAIIALgBQAMAAAIgDQASgGAIgGQAJgGAOgFIAKgFQAJgEALADQAJACADAEQACADgIAGQgLAIgBABQgGAOgVAHQgJADgNAJQgNAIgPAEQgNAEgaAJQgYAIgMADQgQAEgsAGIg4AGQgTABAFALQADAEABANIADAEQADAHACALQAEAagXAWIgkAkQggAegVAKQgTAJgTAcQgVAfgHAFIhfBLIAjAIQAoAHAYADQAaACgEAEIgYALQgNAHgiALIghAJIARAhQAKAUAoCSIAbARQAQAKAWAcQAVAaAEANQADAQgKAoIAIAKQAIANACAMQAEAUgPAjIB6GdIN/ETIAVVhgAsZAEQhEBmgbAjQggAphBBXIg6BQIHtCKIg7o4Ih7gBIgBAAQgCAAg6BWgAouhWQgCACAcEQIAeERICSgHIAFgqQAHgsAEgJQAEgIAcgSQAfgTAGgGQAIgKACgPIABgWQABgGAHgIIARgRQALgNATgyQAVg2gDgPQgDgMgVgiIgcgwIg9hvgAEPiZQgQAggPAhQgSAph8CkIANAiQAOAlASARQAcAaBHB8ID9A0IixpSIgZAAQgDAAgTAigAu1kZIgbA4QgKAUgqCoQglCOgZBsQgSBKARAVIAgAAQARgND6l5QghAEgegFQgRgDgLgSQgJgWgHgKQgXgggKgqQgEgTACgsIAEgpIgBAAQgBAAgRAhgAAKobQAqASAmAPQA4AUAuAIQAWAEALgBQgHgmgThAQgKgpgPgXIgNgPQgBAChCgNQhGgOgGAAQgKAAgHALIgNAiQgNAfggBCIApgHIACAAQAKAAAOAHgAhoreQABAcACAEIALAdQAKAVABAJQAEAPABAuIAqhSQAGgOANgNIAMgKIgxgiIALgGQAMgGAIAAIAggDQARgCAGABQg4gdgYgNQgXgMgUgPIgQgLg");
	mask.setTransform(549.25,217.991);

	// Layer_1
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(0,0,0.8325,0.8325);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ppl3, new cjs.Rectangle(410,2.3,260,399.59999999999997), null);


(lib.ppl2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.p2mov();
	this.instance.setTransform(108.95,102.5,0.8133,0.8133,0,0,0,149.9,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwiFqQA4hCA1hGQBqiLgOgOQgUgSghgpQgjgrgPgZQgOgZAWADQAPACAxASQAnAPASADQASACAkgEQAggEAhgZQAJgHAqgmIA9g7IAmgoQAuhbAcgrQASgeA1haIBEh3QAPgbAQgxIANgrQgOAAgjgDQg1gEgDgOIgDgOQAAgKAHgCQAHgDBOgOIBMgNQAEgJAPgJQALgGABgFQAAgDgEgGQgIgFgKgRIgjg0IgJAcQgGgSgOgVQgKgOgTgMQgRgLgLgDQgIgDAAgKIAEgVIAFgbQADgSgBgOQgBgNACgRIADgOQgIgUgPgXQgfgxgVgGQgOgEgSABQgSAAgOAGQgNAFgVgDQgTgEgMgHIgvgXQgmgTgKgHQgNgJgHgPQgHgNACgHQABgGAQABQARABAaAIQAlALAvAIQARAFAKAAQAJgBAJgEQAIgEATgBIAlgBQAngCAfAsIBGBjIAWAIQAOAEAFAEQAHAFANASIA2BLQASggAQgXIARgaQAFgKABgIQADgTAJgYQAYg3ADgIIADgSQADgPAFgIQAhg7AEgJQADgJAOgEIA1gOIBvgkIAMgZQAFgKAKgNIAJgLIgCgNQgBgIgIgGIgPgKQgGgEgJgmIgJglQgCgSAEgpIALhTQAHgwAGgNQAFgNAXgcIAJgOQAEgJAEgCIASgGQAPgEAHgGIALgMQAEgEANgEQAagHARgCQAOgBAXAIQAYAIAQANQAVASAZAzIALAJQAMALAFAJQAKATgEA1QgCARgRApIACAJQABALgBAKQgBAKgKAOIgOAWIggAtIAEABQAGACAAACIAAABQAAAMAGAQIAGARQACAIgBAPQgCAXABAQIAcAFQAIACAOAHIAjASQAPAIAmAPQAeAMADADQACACARAgQATAkAKAPIAqBCIAIAEQAJAEAFAEQAEAEAHAOQAHAPADAEIAQAOQANALAFAKIAKAaQAFAPAHAEQALAIAXAbIA1ABQAVAAAJAIQAGAGACAOQAEAXADFsQAAAmgIAeQgEAPgEAIIAJA2QADAYgPAjIBtF6IAuCcQAaBZACAUIAYIMIifQ0MggQAAJg");
	mask.setTransform(106.425,219.4691);

	// Layer_1
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(0,0,0.8325,0.8325);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ppl2, new cjs.Rectangle(-12.9,0.9,244,401.20000000000005), null);


(lib.ppl1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.p1mov();
	this.instance.setTransform(319.6,97.8,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3KevIBtqzIH9sbQAdkKAhjVIApj6QAPhTAPgqIAMgbQABgEgEgEQgCgDgBgKIgBgJQgbgGgWABQgOAAgGgGIgEgGIgIggIADgRQgGAAgJACQgFABgMgGQgPgJgGgCQgJgCgGgRQgGgSgDgBQgFgDgCgIQgCgGABgHQACgJgJgWQgCgGAEgFIAGgFIgNgSIggADQgJABgGgIQgFgIAFgFIAdgaIgEgRQgZABgWgKQgPgHAEgMQACgJAJgEQADgBAagDQAcgDAOgEQATgFAMAAQAKAAAKAFQAMAGAUAEIALgEQAMgEAHgEQAGgDADgIQADgKAGgFQAGgGAMgPQALgMAGAAQAKgBAQABIADgGQADgIAFgFIAWgUIgGgOQgEgJAXgmQANgWATgYQAOgRAEgyQACgVAFgbQAEgZAAgHQABgKAJgfIAPgsQAEgPAHgrQAHgpAAgIQAAgGAKgCIALgBIAggHQAlgJAegIQAwgOBjgWIASgNQAKgIARgTQASgTAIgLQALgPAQADIgDgMQgRgTgIgXIgUhOQgEgigDgKQgCgIAAgZQAAgYACgJQACgHgDgTQgDgYAAgJIADgaQABgMgGgIQgIgKAOgFQAOgEgCgDQgKgPAKgXQACgEADgOQABgIAHgEIAPgHQAGgEAFgGQACgCAFgMQADgHAIgDQANgEALACIAKgRIgQgMIAIgBQAJgBAHgDQARgHAWgBQAZgCAeADIAeAAQARAAAKADQARAHACAHIAKgCIAJALQALAKAFADQAJAEADAEIAPAOIAPgDIAHACQAHAGAIANQAHAMADAJIAFAMIALARIALAFIgHAWQgCAEABAIIACATQAAAogGAKQgDAGgEAPQgFAPAAAIQAAAKgKAJIAJAJQALAKgFAqQgLAfgOAUQgIANgNABIgLgBQgLAEgOAYQgHAOgKAJQgKAJgBADQgDAGADAJIADAIIAJADQALAFAFAHQAJAMAbAuIA4AQIBZAdQBGAXAfAIQAkAKAFAFQAEAEADAWQADATAGANQAEALAKAOQAJAOAJAcQAKAdACAWQACAUALATIAUAeQANAUATAsIAKALQALAMAFAKQACAFAHAlQAGAjAKARQAIAPAQARQAUAUANASQAPAVAXAXQAXAWAIAMQAJAPgBAaQgCAbAEAHQAEAIAAAOQAAANAFAJQAFAJgEALQgDANACAJQAEAQgCATQgBAUgHALQgHAKgLAAIgKgBIgGARQgFAXABAaQACBAgUAQIgYAQQgPAKgDAGQgGAKgRAPIACADIAEAMIAAACIAzFrIAFADQAHAFALALQAJAIAeAnQAeAmAIAGQAPAOAHAbQAFAUgIAKQgHALhQBIII9MBIDrM6gAJJAcIgikLIgQgDIgTADIgSDwIAbAGQAWAEAmARgAqmmSIhCGlIAVgIQAJg4AIgXQAHgVAJgoQAKgvACggIAChNIADguIABgGQADgLgCg1IAAgBg");
	mask.setTransform(332.125,207.775);

	// Layer_1
	this.instance_1 = new lib.bg();
	this.instance_1.setTransform(0,0,0.8325,0.8325);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ppl1, new cjs.Rectangle(169.6,-27.2,310.79999999999995,429.3), null);


// stage content:
(lib._300250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [299];
	// timeline functions:
	this.frame_299 = function() {
		if (!this.looped) this.looped = 1;
		
		if (this.looped++ > 1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(1));

	// logo_png
	this.instance = new lib.logo_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(300));

	// cta_png
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(121.25,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(208).to({_off:false},0).to({x:150,alpha:1},3).wait(6).to({x:152,y:127.05},0).wait(4).to({x:150,y:125},0).wait(79));

	// end_jpg
	this.instance_2 = new lib.end_1();
	this.instance_2.setTransform(110.05,121.75,0.1583,0.1583,0,0,0,150,125.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(202).to({_off:false},0).to({regY:125,scaleX:1,scaleY:1,x:150,y:125,alpha:1},6).wait(92));

	// p4_png
	this.instance_3 = new lib.p4_1();
	this.instance_3.setTransform(82.55,125,1,1,0,0,0,150,125);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({x:150,alpha:1},3).wait(1).to({scaleX:1.2,scaleY:1.2,y:113},0).to({scaleX:1,scaleY:1,y:125},3).to({_off:true},42).wait(97));

	// t3_png
	this.instance_4 = new lib.t3_1();
	this.instance_4.setTransform(235.5,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97).to({_off:false},0).to({x:150,alpha:1},3).wait(1).to({scaleX:1.2,scaleY:1.2,y:105.95},0).to({scaleX:1,scaleY:1,y:125},3).to({_off:true},47).wait(149));

	// t2_png
	this.instance_5 = new lib.f2();
	this.instance_5.setTransform(103.2,125,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(46).to({_off:false},0).to({x:150,alpha:1},3).wait(1).to({scaleX:1.2,scaleY:1.2,x:150.05,y:109},0).to({scaleX:1,scaleY:1,x:150,y:125},3).to({_off:true},43).wait(204));

	// t1_png
	this.instance_6 = new lib.t1_1();
	this.instance_6.setTransform(235.5,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:150,alpha:1},3).wait(1).to({scaleX:1.2,scaleY:1.2,x:150.05,y:108},0).to({scaleX:1,scaleY:1,x:150,y:125},3).to({_off:true},37).wait(256));

	// Layer_15
	this.instance_7 = new lib.black();
	this.instance_7.setTransform(315.9,-14.45,1,1,112.7259,0,0,91.9,262.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(300));

	// Layer_14
	this.instance_8 = new lib.black();
	this.instance_8.setTransform(159.75,251.05,1,1,-90,0,0,91.9,262.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(300));

	// Layer_10
	this.instance_9 = new lib.ppl3();
	this.instance_9.setTransform(463.75,256.4,1.2125,1.2125,0,0,0,542.5,215.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(95).to({_off:false},0).to({x:146.45},5).wait(50).to({regY:215.5,scaleX:0.4614,scaleY:0.4614,x:245.35,y:166.95},7).wait(45).to({regY:215.4,scaleX:2.6085,scaleY:2.6085,x:910.2,y:368.05},6).wait(92));

	// Layer_9
	this.instance_10 = new lib.ppl2();
	this.instance_10.setTransform(-132.8,263.8,1.2329,1.2329,0,0,0,112.2,213.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(43).to({_off:false},0).to({x:153.6},6).wait(46).to({x:-462.4},5).wait(50).to({regX:112,regY:214.1,scaleX:0.4563,scaleY:0.4563,x:50.7,y:165.3},7).wait(45).to({regY:214,scaleX:2.5794,scaleY:2.5794,x:-190.25,y:358.75,alpha:0},6).wait(92));

	// Layer_8
	this.instance_11 = new lib.ppl1();
	this.instance_11.setTransform(163,227.4,1,1,0,0,0,333,201);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(43).to({x:467.8},6).to({_off:true},46).wait(55).to({_off:false,x:-148.2},0).to({regX:332.9,regY:201.2,scaleX:0.4614,scaleY:0.4614,x:150.45,y:161.7},7).wait(45).to({scaleX:2.6087,scaleY:2.6087,x:373.8,y:338.65},6).wait(92));

	// Layer_18
	this.instance_12 = new lib.grow_all();
	this.instance_12.setTransform(157,69.05,1,1,0,0,0,56.4,52.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(171).to({_off:false},0).to({alpha:0.4414},5).to({alpha:0},16).wait(108));

	// Layer_17
	this.instance_13 = new lib.tu();
	this.instance_13.setTransform(152.9,73.2,1,1,0,0,0,60.4,60.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(171).to({_off:false},0).to({alpha:1},5).to({alpha:0},16).to({_off:true},10).wait(98));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_157 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_graphics_157,x:152.8813,y:73.149}).wait(45).to({graphics:null,x:0,y:0}).wait(98));

	// Layer_16
	this.instance_14 = new lib.light();
	this.instance_14.setTransform(60.95,20.35,1,1.482,33.2187,0,0,37.4,88.9);
	this.instance_14.compositeOperation = "lighter";
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(157).to({_off:false},0).to({x:282,y:77.4},44,cjs.Ease.cubicInOut).to({_off:true},1).wait(98));

	// Layer_11
	this.instance_15 = new lib.bg2_1();
	this.instance_15.setTransform(4.45,121.5,0.5232,0.5232,0,0,0,376.4,289.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(43).to({x:197.15},6).wait(46).to({x:-172.35},5).wait(50).to({regX:376.2,scaleX:0.4515,scaleY:0.4515,x:22,y:122.35},7).wait(45).to({regX:375.9,regY:289.1,scaleX:2.6959,scaleY:2.6959,x:-417.9,y:123.65},6).wait(92));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape.setTransform(150,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(300));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-1281.2,-530.7,3422,1419.8000000000002);
// library properties:
lib.properties = {
	id: '73755417C4A5476C8EB58235374C1D69',
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1614318829398", id:"bg"},
		{src:"images/bg2.jpg?1614318829398", id:"bg2"},
		{src:"images/cta.png?1614318829398", id:"cta"},
		{src:"images/end.jpg?1614318829398", id:"end"},
		{src:"images/end_phone.png?1614318829398", id:"end_phone"},
		{src:"images/logo.png?1614318829398", id:"logo"},
		{src:"images/p1.png?1614318829398", id:"p1"},
		{src:"images/p2.png?1614318829398", id:"p2"},
		{src:"images/p3.png?1614318829398", id:"p3"},
		{src:"images/p4.png?1614318829398", id:"p4"},
		{src:"images/t1.png?1614318829398", id:"t1"},
		{src:"images/t2.png?1614318829398", id:"t2"},
		{src:"images/t3.png?1614318829398", id:"t3"}
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
an.compositions['73755417C4A5476C8EB58235374C1D69'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;