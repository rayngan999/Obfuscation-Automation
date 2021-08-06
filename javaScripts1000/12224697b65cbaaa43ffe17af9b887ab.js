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
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.footer = function() {
	this.initialize(img.footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1000);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1000);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1000);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1000);


(lib.p5 = function() {
	this.initialize(img.p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1000);


(lib.p6 = function() {
	this.initialize(img.p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1000);


(lib.p7 = function() {
	this.initialize(img.p7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,1000);


(lib.tick = function() {
	this.initialize(img.tick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.tough = function() {
	this.initialize(img.tough);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,350);


(lib.txt0 = function() {
	this.initialize(img.txt0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.txt2 = function() {
	this.initialize(img.txt2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.txt4 = function() {
	this.initialize(img.txt4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.txt8 = function() {
	this.initialize(img.txt8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);// helper functions:

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


(lib.tonge = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tough();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tonge, new cjs.Rectangle(0,0,970,350), null);


(lib.tick_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.tick();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tick_1, new cjs.Rectangle(0,0,970,250), null);


(lib.t8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8CLLIAA2VMA4GAAAIAAWVg");
	mask.setTransform(325.6,160.55);

	// Layer_1
	this.instance = new lib.txt8();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t8, new cjs.Rectangle(146.1,89.1,359.1,143), null);


(lib.t4d = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EA4iAPXIAAneIOMAAIAAHeg");
	mask.setTransform(452.6042,98.3418);

	// Layer_1
	this.instance = new lib.txt4();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t4d, new cjs.Rectangle(814.4,148.9,90.80000000000007,47.79999999999998), null);


(lib.t4c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAyFAPLIAAnPINVAAIAAHPg");
	mask.setTransform(405.7513,97.1082);

	// Layer_1
	this.instance = new lib.txt4();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t4c, new cjs.Rectangle(726.2,147.9,85.29999999999995,46.29999999999998), null);


(lib.t4b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAq+APMIAAnZINfAAIAAHZg");
	mask.setTransform(361.3127,97.2059);

	// Layer_1
	this.instance = new lib.txt4();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t4b, new cjs.Rectangle(636.4,147.1,86.30000000000007,47.30000000000001), null);


(lib.t4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AUILqIAAnxMA1SAAAIAAHxg");
	mask.setTransform(469.7834,74.6452);

	// Layer_1
	this.instance = new lib.txt4();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(598.6,99.6,341,49.70000000000002), null);


(lib.t3d = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3TTSIAAvjMBA8AAAIAAPjg");
	mask.setTransform(266.5472,123.412);

	// Layer_1
	this.instance = new lib.txt0();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3d, new cjs.Rectangle(117.4,147.3,415.70000000000005,99.5), null);


(lib.t3c = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRLeIAAooMAqCAAAIAAIog");
	mask.setTransform(260.9348,73.3621);

	// Layer_1
	this.instance = new lib.txt0();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3c, new cjs.Rectangle(252.8,91.6,269.09999999999997,55.099999999999994), null);


(lib.t3b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlaLpIAAnNIZGAAIAAHNg");
	mask.setTransform(125.9958,74.4941);

	// Layer_1
	this.instance = new lib.txt0();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3b, new cjs.Rectangle(91.3,102.9,160.7,46.099999999999994), null);


(lib.t3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("As6G8IAAq4MAypAAAIAAK4g");
	mask.setTransform(241.5141,44.3944);

	// Layer_3
	this.instance = new lib.txt0();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(158.9,19.1,324.20000000000005,69.69999999999999), null);


(lib.t2b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzFENIAAoZMAmLAAAIAAIZg");
	mask.setTransform(334,148.075);

	// Layer_1
	this.instance = new lib.txt2();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2b, new cjs.Rectangle(211.8,121.2,244.39999999999998,53.8), null);


(lib.t2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxdOcIAAnWMAjqAAAIAAHWgA+kizIAAroMA9JAAAIAALog");
	mask.setTransform(319.35,134.05);

	// Layer_1
	this.instance = new lib.txt2();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(123.7,41.7,391.40000000000003,184.8), null);


(lib.p7_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.p7();
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.p7_1, new cjs.Rectangle(0,0,300,250), null);


(lib.p6_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.p6();
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.p6_1, new cjs.Rectangle(0,0,300,250), null);


(lib.p5_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.p5();
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.p5_1, new cjs.Rectangle(0,0,300,250), null);


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
	this.instance.setTransform(0,0,0.25,0.25);

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
	this.instance.setTransform(0,0,0.25,0.25);

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
	this.instance.setTransform(0,0,0.25,0.25);

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
	this.instance.setTransform(0,0,0.25,0.25);

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,970,250), null);


(lib.footer_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.footer();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.footer_1, new cjs.Rectangle(0,0,970,250), null);


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

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,970,250), null);


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

}).prototype = getMCSymbolPrototype(lib.bg2_1, new cjs.Rectangle(0,0,970,250), null);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,970,250), null);


(lib.grap = function(mode,startPosition,loop,reversed) {
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
	this.frame_47 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// p7
	this.instance = new lib.p7_1();
	this.instance.setTransform(120.5,136.2,1,1,0,0,0,122,136.2);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:120.85,y:135.9},9).to({x:121.15,y:135.6,alpha:0.5},5,cjs.Ease.quadOut).to({x:121.4,y:135.35,alpha:0},11,cjs.Ease.cubicIn).to({x:122.25,y:134.45},22).wait(1));

	// p7
	this.instance_1 = new lib.p7_1();
	this.instance_1.setTransform(120.5,136.2,1,1,0,0,0,122,136.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:122.25,y:134.45},47).wait(1));

	// p6
	this.instance_2 = new lib.p6_1();
	this.instance_2.setTransform(121.2,127.8,1,1,0,0,0,121.2,127.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// p5
	this.instance_3 = new lib.p5_1();
	this.instance_3.setTransform(137.2,107.8,1,1,0,0,0,138,110.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:139.25,y:114.2},47).wait(1));

	// p4
	this.instance_4 = new lib.p4_1();
	this.instance_4.setTransform(121.6,96.1,1,1,0,0,0,123.8,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:128.55,y:98.75},47).wait(1));

	// p3
	this.instance_5 = new lib.p3_1();
	this.instance_5.setTransform(99.2,130,1,1,0,0,0,99.2,127);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:99.95,y:120.75},47).wait(1));

	// p2
	this.instance_6 = new lib.p2_1();
	this.instance_6.setTransform(106.6,154.2,1,1,0,0,0,104,153);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:102.75,y:148.5},47).wait(1));

	// p1
	this.instance_7 = new lib.p1_1();
	this.instance_7.setTransform(121.5,146.8,1,1,0,0,0,121.5,146.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:149.8},47).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-6.2,307,260.2);


// stage content:
(lib._970250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [253];
	// timeline functions:
	this.frame_253 = function() {
		if (!this.looped) this.looped = 1;
		
		if (this.looped++ > 1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(253).call(this.frame_253).wait(1));

	// txt3_png
	this.instance = new lib.logo_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(254));

	// Layer_20 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_181 = new cjs.Graphics().p("AfMNwQhMAAg1g1Qg1g1AAhMQAAhLA1g1QA1g1BMAAIPDAAQBLAAA1A1QA2A1AABLQAABMg2A1Qg1A1hLAAg");
	var mask_graphics_182 = new cjs.Graphics().p("AfONwQhMAAg1g1Qg1g1AAhMQAAhLA1g1QA1g1BMAAIPDAAQBLAAA1A1QA1A1AABLQAABMg1A1Qg1A1hLAAg");
	var mask_graphics_183 = new cjs.Graphics().p("AfaNwQhLAAg2g1Qg1g1AAhMQAAhLA1g1QA2g1BLAAIPDAAQBMAAA1A1QA1A1AABLQAABMg1A1Qg2A1hLAAg");
	var mask_graphics_184 = new cjs.Graphics().p("Af8NwQhLAAg2g1Qg1g1AAhMQAAhLA1g1QA2g1BLAAIPDAAQBMAAA1A1QA1A1AABLQAABMg1A1Qg2A1hLAAg");
	var mask_graphics_185 = new cjs.Graphics().p("EAg+ANwQhLAAg1g1Qg2g1AAhMQAAhLA2g1QA1g1BLAAIPDAAQBMAAA1A1QA1A1AABLQAABMg1A1Qg1A1hMAAg");
	var mask_graphics_186 = new cjs.Graphics().p("EAifANwQhLAAg1g1Qg2g1AAhMQAAhLA2g1QA1g1BLAAIPDAAQBMAAA1A1QA1A1AABLQAABMg1A1Qg1A1hMAAg");
	var mask_graphics_187 = new cjs.Graphics().p("EAjhANwQhLAAg1g1Qg1g1AAhMQAAhLA1g1QA1g1BLAAIPDAAQBMAAA1A1QA1A1AABLQAABMg1A1Qg1A1hMAAg");
	var mask_graphics_188 = new cjs.Graphics().p("EAkDANwQhLAAg1g1Qg1g1AAhMQAAhLA1g1QA1g1BLAAIPDAAQBMAAA1A1QA1A1AABLQAABMg1A1Qg1A1hMAAg");
	var mask_graphics_189 = new cjs.Graphics().p("EAkQANwQhLAAg2g1Qg1g1AAhMQAAhLA1g1QA2g1BLAAIPDAAQBMAAA0A1QA2A1AABLQAABMg2A1Qg1A1hLAAg");
	var mask_graphics_190 = new cjs.Graphics().p("EAkSANwQhMAAg1g1Qg1g1AAhMQAAhLA1g1QA1g1BMAAIPDAAQBLAAA1A1QA2A1AABLQAABMg2A1Qg1A1hLAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(181).to({graphics:mask_graphics_181,x:314.0622,y:88.025}).wait(1).to({graphics:mask_graphics_182,x:314.2411,y:88.025}).wait(1).to({graphics:mask_graphics_183,x:315.4932,y:88.025}).wait(1).to({graphics:mask_graphics_184,x:318.8919,y:88.025}).wait(1).to({graphics:mask_graphics_185,x:325.5103,y:88.025}).wait(1).to({graphics:mask_graphics_186,x:335.2142,y:88.025}).wait(1).to({graphics:mask_graphics_187,x:341.8326,y:88.025}).wait(1).to({graphics:mask_graphics_188,x:345.2312,y:88.025}).wait(1).to({graphics:mask_graphics_189,x:346.4834,y:88.025}).wait(1).to({graphics:mask_graphics_190,x:346.6622,y:88.025}).wait(1).to({graphics:null,x:0,y:0}).wait(63));

	// cta_png
	this.instance_1 = new lib.cta_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(181).to({_off:false},0).wait(73));

	// txt4_png
	this.instance_2 = new lib.t4d();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(36).to({alpha:0},4).to({_off:true},1).wait(196));

	// txt4_png
	this.instance_3 = new lib.t4c();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).wait(42).to({alpha:0},4).to({_off:true},1).wait(196));

	// txt4_png
	this.instance_4 = new lib.t4b();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(48).to({alpha:0},4).to({_off:true},1).wait(196));

	// txt4_png
	this.instance_5 = new lib.t4();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(53).to({alpha:0},4).to({_off:true},1).wait(196));

	// footer_png
	this.instance_6 = new lib.footer_1();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(176).to({_off:false},0).to({alpha:1},5,cjs.Ease.quadInOut).wait(73));

	// Layer_19
	this.instance_7 = new lib.t8();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(176).to({_off:false},0).to({alpha:1},6,cjs.Ease.cubicInOut).wait(72));

	// txt3_png
	this.instance_8 = new lib.t3d();
	this.instance_8.setTransform(150,99.8,1,1,0,0,0,150,125);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(123).to({_off:false},0).to({y:125,alpha:1},8,cjs.Ease.cubicInOut).to({_off:true},45).wait(78));

	// txt3_png
	this.instance_9 = new lib.t3c();
	this.instance_9.setTransform(81.05,133,1.3877,1.3877,0,0,0,150,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(117).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,y:125,alpha:1},6,cjs.Ease.cubicInOut).to({_off:true},53).wait(78));

	// txt3_png
	this.instance_10 = new lib.t3b();
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114).to({_off:false},0).to({alpha:1},6,cjs.Ease.cubicInOut).to({_off:true},56).wait(78));

	// txt3_png
	this.instance_11 = new lib.t3();
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(114).to({_off:false},0).to({alpha:1},6,cjs.Ease.cubicInOut).wait(134));

	// txt2_png
	this.instance_12 = new lib.t2b();
	this.instance_12.setTransform(44.05,106.85,1.5792,1.5792,0,0,0,150,125);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(62).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,y:125,alpha:1},7,cjs.Ease.cubicInOut).to({_off:true},45).wait(140));

	// txt2_png
	this.instance_13 = new lib.t2();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(58).to({_off:false},0).to({alpha:1},6,cjs.Ease.cubicInOut).to({_off:true},50).wait(140));

	// tough_png
	this.instance_14 = new lib.tonge();
	this.instance_14.setTransform(-183.65,352.2,1,1,0,0,0,150,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(56).to({_off:false},0).to({x:150,y:25.05},5,cjs.Ease.cubicOut).wait(193));

	// bg2_jpg
	this.instance_15 = new lib.bg2_1();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(53).to({_off:false},0).to({alpha:1},5).wait(196));

	// p7_png
	this.instance_16 = new lib.grap();
	this.instance_16.setTransform(289.2,142.95,1.7624,1.7624,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},59).wait(195));

	// Layer_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AvdQrIh5rZQALgYAQgdQAig5AggSQAOgICJhFQB6g9AbgUQAXgSAngTQAggQAKgMQAdgeAqgJIBOgQQAJgCARghQARgkAFgDQAHgGAFgHIALgQQAIgJAigOIAhgMIAEgiQgWgMgVgJQgNgGgQgEIgOgDQgjgDgeAHQgWAFgUgDQgTgEgHgHQgQgLgOgQIgXgXIhXgBIkFjSQgIgFAGgNQAGgNAQgFIAngOIACgOQgYABgMAFQgNAEghgDQgNgBgLgKQgKgJgCgIQgBgFAHgVIAHgTQgVgZAEgOQADgJAIgGIAJgFQgVgiAGgPQAEgJAHgIIAFgGIgCguIAUgIQAfgHA0gBQA8gBAYAGQAVAHAAAMIAABAIA3AmIAcAKIAQgBQASABAGAFIA4A4QAEAFAgAVIAlAXQADACAqAQQAtAQAQAIQAqAYAmACQARABAMAIIAigrIA0iVQAShWAPgpQAJgXAJghIALgpQAFgOAMgWIALgTIgLgeIAig7IgTgUQg7AggSAAQgVAAgVgqQgDgGgKgKIgOgMQgCgCAAgHIAAgHIEtkSQgBA3AFAWQAHAdAbAyIAZA1IA5gKQAKgBAJAJQAHAIABAHQAAAEAGAOQAFAPABAGQABAFAhAlQAqAvAdAuQApBAAaBDQAbBJgEAuQgEBAgSB3IgCBCQgEBLAAAyQAAA/gBAQQgBAUgFASQgHAZgZAqIALgKQALgKAIgBQANgCAYAMIAQADIACheQABgQAEgGQAJgOAegEQAugHBDgGIAFgGQAEgFAFgBQAIgBAOANIHIARIADgDQAGgFAGAAQAKAAACAIIAfISI24Q+QiShyhuheIhwheIAFA7QAFA9gBANQgBAMAFANQAEARABAKQABAMgDAKQgDAKABAHQACAQAUBHIAMAJQAOAMAGAOQAGARAIAwQAHAugCAPQgCAUgHAZg");
	mask_1.setTransform(307.625,194.875);

	// bg_jpg
	this.instance_17 = new lib.bg_1();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(254));

	// mas (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_8 = new cjs.Graphics().p("EgZpAoiQjai6gXkeQgWkeC7jaMAlPgrhQC7jaEegVQEdgYDaC7QDaC7AXEfQAWEdi7DaMglPArgQi7DakdAXQgeACgdAAQj6AAjDing");
	var mask_2_graphics_9 = new cjs.Graphics().p("EgZpAnrQjai6gXkeQgWkeC7jaMAlPgrhQC7jaEegVQEdgYDaC7QDaC7AXEfQAWEdi7DaMglPArgQi7DakdAXQgeACgdAAQj6AAjDing");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgZWAlGQjai6gWkdQgWkfC7jaMAlPgrhQC7jaEdgVQEegYDaC8QDaC6AWEfQAWEdi6DaMglPArhQi7DZkeAXQgdADgdAAQj6AAjEiog");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgVqAgzQjai6gWkdQgWkfC7jaMAlPgrhQC7jaEdgVQEdgXDbC7QDaC6AWEfQAWEdi6DaMglPArhQi7DakeAWQgdADgdAAQj6AAjEiog");
	var mask_2_graphics_12 = new cjs.Graphics().p("Ax+d+Qjai6gWkdQgWkfC7jaMAlPgrhQC7jaEdgVQEdgXDbC7QDaC6AWEfQAWEdi6DaMglPArhQi7DakeAWQgdADgdAAQj6AAjEiog");
	var mask_2_graphics_13 = new cjs.Graphics().p("Avwd+Qjai6gWkdQgWkfC6jaMAlPgrhQC7jaEegVQEdgXDbC7QDaC6AWEfQAWEdi6DaMglQArhQi6DakeAWQgeADgdAAQj6AAjDiog");
	var mask_2_graphics_14 = new cjs.Graphics().p("AvCd+Qjai6gWkdQgXkfC7jaMAlPgrhQC7jaEegVQEdgXDbC7QDZC6AXEfQAWEdi7DaMglQArhQi5DakeAWQgeADgdAAQj6AAjDiog");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_2_graphics_8,x:154.6839,y:276.1454}).wait(1).to({graphics:mask_2_graphics_9,x:164.1234,y:270.6477}).wait(1).to({graphics:mask_2_graphics_10,x:190.4648,y:254.1543}).wait(1).to({graphics:mask_2_graphics_11,x:214.0637,y:226.6654}).wait(1).to({graphics:mask_2_graphics_12,x:237.6625,y:189.7886}).wait(1).to({graphics:mask_2_graphics_13,x:251.8218,y:156.8018}).wait(1).to({graphics:mask_2_graphics_14,x:256.4107,y:145.8266}).wait(1).to({graphics:null,x:0,y:0}).wait(239));

	// tick_png
	this.instance_18 = new lib.tick_1();
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(8).to({_off:false},0).wait(246));

	// mas (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_3 = new cjs.Graphics().p("AMhbRMgn5gndQjIjFgCkZQgBkZDFjIQDGjIEYgBQEagCDIDGMAn5AndQDIDGAAEYQADEZjGDIQjGDIkZABIgFAAQkVAAjGjEg");
	var mask_3_graphics_4 = new cjs.Graphics().p("AMhbRMgn5gndQjIjFgCkZQgBkZDFjIQDGjIEYgBQEagCDIDGMAn5AndQDIDGAAEYQADEZjGDIQjGDIkZABIgFAAQkVAAjGjEg");
	var mask_3_graphics_5 = new cjs.Graphics().p("AMhbRMgn5gndQjIjFgCkZQgBkZDFjIQDGjIEYgBQEagCDIDGMAn5AndQDIDGAAEYQADEZjGDIQjGDIkZABIgFAAQkVAAjGjEg");
	var mask_3_graphics_6 = new cjs.Graphics().p("AMhbRMgn5gndQjIjFgCkZQgBkZDFjIQDGjIEYgBQEagCDIDGMAn5AndQDIDGAAEYQADEZjGDIQjGDIkZABIgFAAQkVAAjGjEg");
	var mask_3_graphics_7 = new cjs.Graphics().p("AMhbRMgn5gndQjIjFgCkZQgBkZDFjIQDGjIEYgBQEagCDIDGMAn5AndQDIDGAAEYQADEZjGDIQjGDIkZABIgFAAQkVAAjGjEg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_3_graphics_3,x:-13.3266,y:-3.5831}).wait(1).to({graphics:mask_3_graphics_4,x:-6.1207,y:3.6229}).wait(1).to({graphics:mask_3_graphics_5,x:15.4981,y:25.2416}).wait(1).to({graphics:mask_3_graphics_6,x:51.5293,y:61.2729}).wait(1).to({graphics:mask_3_graphics_7,x:101.9734,y:111.7169}).wait(8).to({graphics:null,x:0,y:0}).wait(239));

	// tick_png
	this.instance_19 = new lib.tick_1();
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({_off:false},0).to({_off:true},12).wait(239));

	// bg_jpg
	this.instance_20 = new lib.bg_1();
	this.instance_20.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(254));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhNVgVFMCarAAAMAAAAqLMiarAAAg");
	this.shape.setTransform(485,125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhNVAVGMAAAgqLMCarAAAMAAAAqLg");
	this.shape_1.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(254));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(151.4,25,1187.6,552.2);
// library properties:
lib.properties = {
	id: 'DD2CCD08D7494BD89E3ECA53E59E0D48',
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1625032384148", id:"bg"},
		{src:"images/bg2.jpg?1625032384148", id:"bg2"},
		{src:"images/cta.png?1625032384148", id:"cta"},
		{src:"images/footer.png?1625032384148", id:"footer"},
		{src:"images/logo.png?1625032384148", id:"logo"},
		{src:"images/p1.png?1625032384148", id:"p1"},
		{src:"images/p2.png?1625032384148", id:"p2"},
		{src:"images/p3.png?1625032384148", id:"p3"},
		{src:"images/p4.png?1625032384148", id:"p4"},
		{src:"images/p5.png?1625032384148", id:"p5"},
		{src:"images/p6.png?1625032384148", id:"p6"},
		{src:"images/p7.png?1625032384148", id:"p7"},
		{src:"images/tick.png?1625032384148", id:"tick"},
		{src:"images/tough.png?1625032384148", id:"tough"},
		{src:"images/txt0.png?1625032384148", id:"txt0"},
		{src:"images/txt2.png?1625032384148", id:"txt2"},
		{src:"images/txt4.png?1625032384148", id:"txt4"},
		{src:"images/txt8.png?1625032384148", id:"txt8"}
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
an.compositions['DD2CCD08D7494BD89E3ECA53E59E0D48'] = {
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