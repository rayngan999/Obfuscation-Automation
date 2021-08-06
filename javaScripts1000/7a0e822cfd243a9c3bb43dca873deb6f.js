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



(lib.angel = function() {
	this.initialize(img.angel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,302,600);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,660,465);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,127,62);


(lib.footer = function() {
	this.initialize(img.footer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,90);


(lib.KSP = function() {
	this.initialize(img.KSP);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,98);


(lib.msg = function() {
	this.initialize(img.msg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,496,130);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,573);


(lib.phone_bg = function() {
	this.initialize(img.phone_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,493);


(lib.tc_01 = function() {
	this.initialize(img.tc_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,12);


(lib.tc_02 = function() {
	this.initialize(img.tc_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,182,13);// helper functions:

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


(lib.phone_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.phone();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.phone_1, new cjs.Rectangle(0,0,295,573), null);


(lib.offer_msg = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.msg();
	this.instance.setTransform(-144,-9,0.6733,0.6733);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offer_msg, new cjs.Rectangle(-144,-9,334,87.5), null);


(lib.KSP_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.KSP();
	this.instance.setTransform(-24,-2,1.2545,1.2545);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.KSP_1, new cjs.Rectangle(-24,-2,651.1,123), null);


(lib.iphone_screen = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.phone_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.iphone_screen, new cjs.Rectangle(0,0,270,493), null);


(lib.CTA_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-65,-22,0.9449,0.9449);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_1, new cjs.Rectangle(-65,-22,120,58.6), null);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EghRAAAMBCjAAA");
	this.shape.setTransform(-148.594,0.029,0.9999,0.9999,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("EghRAAAMBCjAAA");
	this.shape_1.setTransform(578.356,0.029,0.9999,0.9999,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("EghRAAAMBCjAAA");
	this.shape_2.setTransform(210.5335,-43.1,1.8166,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("EghRAAAMBCjAAA");
	this.shape_3.setTransform(210.5335,-132.05,1.8166,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.border, new cjs.Rectangle(-177.4,-213.9,775.9,427.9), null);


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
	this.instance.setTransform(11,-187,1.083,1.083);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(11,-187,714.8,503.6), null);


(lib.angel_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.angel();
	this.instance.setTransform(42.05,-7.7,1.0254,1.0254,5.9657);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.angel_1, new cjs.Rectangle(-21.9,-7.7,371.9,644.1), null);


// stage content:
(lib.FPS_728x90 = function(mode,startPosition,loop,reversed) {
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
		if (looper < 2) {
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

	// Layer 2
	this.instance_1 = new lib.tc_01();
	this.instance_1.setTransform(672,77);

	this.instance_2 = new lib.tc_02();
	this.instance_2.setTransform(545,76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},167).wait(73));

	// footer
	this.instance_3 = new lib.footer();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(240));

	// cta
	this.instance_4 = new lib.CTA_1();
	this.instance_4.setTransform(491.9,45.1,1.0011,0.9969,0,0,5.2019,0.3,-0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(167).to({_off:false},0).to({x:637.9,y:36.1,alpha:1},12,cjs.Ease.get(1)).wait(14).to({x:621.9,y:38.1},4).to({x:656.9,y:32.1},5).to({x:621.9,y:38.1},5).to({x:637.9,y:36.1},4).wait(29));

	// KSP
	this.instance_5 = new lib.KSP_1();
	this.instance_5.setTransform(54.15,131.05,0.4387,0.4387,0,0,0,82.8,72.2);
	this.instance_5.alpha = 0.5313;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(107).to({_off:false},0).to({regX:83,x:304.55,y:54.25,alpha:1},13,cjs.Ease.get(1)).to({regX:83.2,regY:72.5,scaleX:0.4708,scaleY:0.4708,x:304.6,y:54.4},4).to({regX:83,regY:72.2,scaleX:0.4387,scaleY:0.4387,x:304.55,y:54.25},5).to({_off:true},38).wait(73));

	// Layer_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_75 = new cjs.Graphics().p("AUaMFIAA4JIXFAAIAAYJg");
	var mask_graphics_100 = new cjs.Graphics().p("AUaMFIAA4JIXFAAIAAYJg");
	var mask_graphics_101 = new cjs.Graphics().p("AVYMFIAA4JIXFAAIAAYJg");
	var mask_graphics_102 = new cjs.Graphics().p("AWWMFIAA4JIXEAAIAAYJg");
	var mask_graphics_103 = new cjs.Graphics().p("AXTMFIAA4JIXFAAIAAYJg");
	var mask_graphics_104 = new cjs.Graphics().p("AYRMFIAA4JIXEAAIAAYJg");
	var mask_graphics_105 = new cjs.Graphics().p("AZOMFIAA4JIXFAAIAAYJg");
	var mask_graphics_106 = new cjs.Graphics().p("AaMMFIAA4JIXEAAIAAYJg");
	var mask_graphics_107 = new cjs.Graphics().p("AbJMFIAA4JIXFAAIAAYJg");
	var mask_graphics_108 = new cjs.Graphics().p("AcHMFIAA4JIXEAAIAAYJg");
	var mask_graphics_109 = new cjs.Graphics().p("AdEMFIAA4JIXFAAIAAYJg");
	var mask_graphics_110 = new cjs.Graphics().p("AeCMFIAA4JIXEAAIAAYJg");
	var mask_graphics_111 = new cjs.Graphics().p("Ae/MFIAA4JIXFAAIAAYJg");
	var mask_graphics_112 = new cjs.Graphics().p("Af9MFIAA4JIXEAAIAAYJg");
	var mask_graphics_113 = new cjs.Graphics().p("EAg6AMFIAA4JIXFAAIAAYJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_graphics_75,x:278.3019,y:70.6696}).wait(25).to({graphics:mask_graphics_100,x:278.3019,y:70.6696}).wait(1).to({graphics:mask_graphics_101,x:284.4557,y:70.6696}).wait(1).to({graphics:mask_graphics_102,x:290.6096,y:70.6696}).wait(1).to({graphics:mask_graphics_103,x:296.7634,y:70.6696}).wait(1).to({graphics:mask_graphics_104,x:302.9172,y:70.6696}).wait(1).to({graphics:mask_graphics_105,x:309.0711,y:70.6696}).wait(1).to({graphics:mask_graphics_106,x:315.2249,y:70.6696}).wait(1).to({graphics:mask_graphics_107,x:321.3788,y:70.6696}).wait(1).to({graphics:mask_graphics_108,x:327.5326,y:70.6696}).wait(1).to({graphics:mask_graphics_109,x:333.6865,y:70.6696}).wait(1).to({graphics:mask_graphics_110,x:339.8403,y:70.6696}).wait(1).to({graphics:mask_graphics_111,x:345.9942,y:70.6696}).wait(1).to({graphics:mask_graphics_112,x:352.148,y:70.6696}).wait(1).to({graphics:mask_graphics_113,x:358.3019,y:70.6696}).wait(54).to({graphics:null,x:0,y:0}).wait(73));

	// girl
	this.instance_6 = new lib.angel_1();
	this.instance_6.setTransform(452.25,130.1,0.2173,0.2173,-7.7084,0,0,269.9,616.6);
	this.instance_6.alpha = 0.8594;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(75).to({_off:false},0).to({regX:269.8,regY:616.2,rotation:3.7482,x:459.9,y:134,alpha:1},14,cjs.Ease.get(1)).to({regY:616.4,rotation:0.2656},7).wait(4).to({rotation:0.2656},0).to({x:619.9},13).wait(30).to({y:129},4).to({y:134},4).to({y:129},4).to({y:134},4).to({_off:true},8).wait(73));

	// phone
	this.instance_7 = new lib.phone_1();
	this.instance_7.setTransform(434.3,67.3,0.1966,0.1966,0,0,0,148.8,287.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({_off:false},0).to({alpha:1},12).wait(21).to({x:594.3},13).to({_off:true},54).wait(73));

	// screen
	this.instance_8 = new lib.iphone_screen();
	this.instance_8.setTransform(434.3,67.05,0.1966,0.1966,0,0,0,136.3,247.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({_off:false},0).to({alpha:1},12).wait(21).to({x:594.3},13).to({_off:true},54).wait(73));

	// offer_8k
	this.instance_9 = new lib.offer_msg();
	this.instance_9.setTransform(19.05,87,1,1,0,0,0,37.5,51);
	this.instance_9.alpha = 0.5117;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:23,regY:34.8,x:65.7,y:67.2,alpha:0.5793},0).wait(1).to({x:122.4,y:63.85,alpha:0.6419},0).wait(1).to({x:174.5,y:60.8,alpha:0.6995},0).wait(1).to({x:222.1,y:58,alpha:0.7521},0).wait(1).to({x:265.15,y:55.45,alpha:0.7997},0).wait(1).to({x:303.7,y:53.2,alpha:0.8422},0).wait(1).to({x:337.7,y:51.2,alpha:0.8798},0).wait(1).to({x:367.15,y:49.45,alpha:0.9124},0).wait(1).to({x:392.1,y:48,alpha:0.9399},0).wait(1).to({x:412.5,y:46.8,alpha:0.9624},0).wait(1).to({x:428.35,y:45.85,alpha:0.98},0).wait(1).to({x:439.7,y:45.2,alpha:0.9925},0).wait(1).to({regX:37.5,regY:51,x:461,y:61,alpha:1},0).wait(1).to({regX:23,regY:34.8,scaleX:1.0279,scaleY:1.0279,x:446.1,y:44.3},0).wait(1).to({scaleX:1.0508,scaleY:1.0508,x:445.75,y:43.95},0).wait(1).to({scaleX:1.0686,scaleY:1.0686,x:445.55,y:43.7},0).wait(1).to({scaleX:1.0813,scaleY:1.0813,x:445.35,y:43.5},0).wait(1).to({scaleX:1.0889,scaleY:1.0889,x:445.25,y:43.35},0).wait(1).to({regX:37.6,regY:51,scaleX:1.0914,scaleY:1.0914,x:461.15,y:61},0).to({regX:37.5,scaleX:1,scaleY:1,x:461},5).to({regX:37.6,scaleX:1.0914,scaleY:1.0914,x:461.15},5).to({regX:37.5,scaleX:1,scaleY:1,x:461},5).wait(13).to({x:927,y:26,alpha:0},12).wait(108).to({x:275,y:70},0).wait(1).to({regX:23,regY:34.8,x:283.8,y:52.35,alpha:0.1601},0).wait(1).to({x:305.1,y:51,alpha:0.3062},0).wait(1).to({x:324.35,y:49.85,alpha:0.4384},0).wait(1).to({x:341.6,y:48.75,alpha:0.5567},0).wait(1).to({x:356.8,y:47.85,alpha:0.6611},0).wait(1).to({x:369.95,y:47,alpha:0.7516},0).wait(1).to({regX:37.5,regY:51,x:395.65,y:62.55,alpha:0.8281},0).wait(1).to({regX:23,regY:34.8,x:390.25,y:45.75,alpha:0.89},0).wait(1).to({x:397.35,y:45.35,alpha:0.9381},0).wait(1).to({x:402.4,y:45,alpha:0.9725},0).wait(1).to({x:405.45,y:44.85,alpha:0.9931},0).wait(1).to({regX:37.5,regY:51,x:421,y:61,alpha:1},0).wait(14).to({x:405,y:63},4).to({x:440,y:57},5).to({x:405,y:63},5).to({x:421,y:61},4).wait(29));

	// bg
	this.instance_10 = new lib.bg_1();
	this.instance_10.setTransform(41.8,145.2,0.9479,0.9479,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:0.3,regY:0.2,scaleX:1.3093,scaleY:1.3093,x:101.25,y:45.7},167).to({regX:0.2,regY:0.1,scaleX:1.4978,scaleY:1.4978,x:157.15,y:-18.5},72).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(201.6,-253.7,1042.4,713.8);
// library properties:
lib.properties = {
	id: '4C1400F76ED14558B0A0DF98A600F16B',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/angel.png?1623912368008", id:"angel"},
		{src:"images/bg.jpg?1623912368008", id:"bg"},
		{src:"images/CTA.png?1623912368008", id:"CTA"},
		{src:"images/footer.png?1623912368008", id:"footer"},
		{src:"images/KSP.png?1623912368008", id:"KSP"},
		{src:"images/msg.png?1623912368008", id:"msg"},
		{src:"images/phone.png?1623912368008", id:"phone"},
		{src:"images/phone_bg.jpg?1623912368008", id:"phone_bg"},
		{src:"images/tc_01.png?1623912368008", id:"tc_01"},
		{src:"images/tc_02.png?1623912368008", id:"tc_02"}
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
an.compositions['4C1400F76ED14558B0A0DF98A600F16B'] = {
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