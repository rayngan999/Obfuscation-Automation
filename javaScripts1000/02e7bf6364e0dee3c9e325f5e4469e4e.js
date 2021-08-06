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



(lib._086E0069_FY21_AzureDirect_Creative_Refresh_BSV4_Illustration_MigrationV4MigrationF1 = function() {
	this.initialize(img._086E0069_FY21_AzureDirect_Creative_Refresh_BSV4_Illustration_MigrationV4MigrationF1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.Microsoftlogo_rgb_cgray1 = function() {
	this.initialize(img.Microsoftlogo_rgb_cgray1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,32);


(lib.Microsoftlogo_rgb_cwhite = function() {
	this.initialize(img.Microsoftlogo_rgb_cwhite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,32);


(lib.Tile_Shadow = function() {
	this.initialize(img.Tile_Shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.V4MigrationF5 = function() {
	this.initialize(img.V4MigrationF5);
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


(lib.txt_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.tileShadow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tile_Shadow();
	this.instance.setTransform(-9,-6.95,0.54,0.53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tileShadow, new cjs.Rectangle(-11,-6.9,326,266.9), null);


(lib.shadow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0,0,300,250), null);


(lib.screen4Tile = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:450,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// Layer_1
	this.instance = new lib._086E0069_FY21_AzureDirect_Creative_Refresh_BSV4_Illustration_MigrationV4MigrationF1();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,0,300,250);


(lib.screen3Tile = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:450,y:375}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// Layer_1
	this.instance = new lib._086E0069_FY21_AzureDirect_Creative_Refresh_BSV4_Illustration_MigrationV4MigrationF1();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,250,300,250);


(lib.screen2Tile = function(mode,startPosition,loop,reversed) {
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
	var mask_graphics_0 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:375}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// Layer_1
	this.instance = new lib._086E0069_FY21_AzureDirect_Creative_Refresh_BSV4_Illustration_MigrationV4MigrationF1();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,250,300,250);


(lib.screen2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.V4MigrationF5();
	this.instance.setTransform(1,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screen2, new cjs.Rectangle(1,0.3,600,500), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.logo2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Microsoftlogo_rgb_cgray1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo2, new cjs.Rectangle(0,0,224,32), null);


(lib.logo1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Microsoftlogo_rgb_cwhite();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo1, new cjs.Rectangle(0,0,226,32), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_glare = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],-125.2,-0.1,-58.4,-0.1).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape.setTransform(57.35,15.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],58.5,-0.9,125.3,-0.9).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape_1.setTransform(57.35,15.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},7).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.7,30.3);


(lib.arrowSubSub = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#0078D3").ss(1.5,0,0,3).p("AgihAIBABAIhABB");
	this.shape.setTransform(3.4902,6.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrowSubSub, new cjs.Rectangle(-1,-1,8.5,14.9), null);


(lib.screenTrans3Tile = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shadow();
	this.instance.setTransform(450,375,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({alpha:0.4727},18).to({_off:true},1).wait(1));

	// Layer_4
	this.instance_1 = new lib.shadow();
	this.instance_1.setTransform(450,375,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0.5;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:0},12).to({_off:true},1).wait(20));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(450,375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(32).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.screenTrans2Tile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.light();
	this.instance.setTransform(150,375,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:0.4297},12).to({_off:true},1).wait(1).to({_off:false,alpha:0.5},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.light();
	this.instance_1.setTransform(150,375,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0.5;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({alpha:0},7).to({_off:true},1).wait(15));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(21).to({_off:true},1).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.screentrans1Tile = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.shadow();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({alpha:0.4297},12).to({_off:true},1).wait(2));

	// Layer_4
	this.instance_1 = new lib.light();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},12).to({_off:true},1).wait(15));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D3").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(25).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.screen1Tile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.shadow();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:0.3906},14).to({_off:true},1).wait(3).to({_off:false,alpha:0.5},0).wait(1));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_15 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_19 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:125}).wait(15).to({graphics:mask_graphics_15,x:150,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_graphics_19,x:150,y:125}).wait(1));

	// Layer_1
	this.instance_1 = new lib._086E0069_FY21_AzureDirect_Creative_Refresh_BSV4_Illustration_MigrationV4MigrationF1();

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({_off:true},1).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.screen1 = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(1));

	// Layer_2
	this.instance = new lib._086E0069_FY21_AzureDirect_Creative_Refresh_BSV4_Illustration_MigrationV4MigrationF1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(119));

	// tile1 copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_1 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_2 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_3 = new cjs.Graphics().p("A3bTiMAAAgnCMAu3AAAMAAAAnCg");
	var mask_graphics_4 = new cjs.Graphics().p("A3bTiMAAAgnAMAu3AAAMAAAAnAg");
	var mask_graphics_5 = new cjs.Graphics().p("A3bTiMAAAgm5MAu3AAAMAAAAm5g");
	var mask_graphics_6 = new cjs.Graphics().p("A3bTiMAAAgmrMAu3AAAMAAAAmrg");
	var mask_graphics_7 = new cjs.Graphics().p("A3bTiMAAAgmSMAu3AAAMAAAAmSg");
	var mask_graphics_8 = new cjs.Graphics().p("A3bTiMAAAglnMAu3AAAMAAAAlng");
	var mask_graphics_9 = new cjs.Graphics().p("A3bTiMAAAgknMAu3AAAMAAAAkng");
	var mask_graphics_10 = new cjs.Graphics().p("A3bTiMAAAgjJMAu3AAAMAAAAjJg");
	var mask_graphics_11 = new cjs.Graphics().p("A3bTiMAAAghGMAu3AAAMAAAAhGg");
	var mask_graphics_12 = new cjs.Graphics().p("A3bTjIAA+WMAu3AAAIAAeWg");
	var mask_graphics_13 = new cjs.Graphics().p("A3bTjIAA6uMAu3AAAIAAaug");
	var mask_graphics_14 = new cjs.Graphics().p("A3bTjIAA2EMAu3AAAIAAWEg");
	var mask_graphics_15 = new cjs.Graphics().p("A3bTjIAAwNMAu3AAAIAAQNg");
	var mask_graphics_16 = new cjs.Graphics().p("A3bTkIAAo9MAu3AAAIAAI9g");
	var mask_graphics_17 = new cjs.Graphics().p("A3bTkIAAgEMAu3AAAIAAAEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:125}).wait(1).to({graphics:mask_graphics_1,x:150,y:125}).wait(1).to({graphics:mask_graphics_2,x:150,y:125}).wait(1).to({graphics:mask_graphics_3,x:150,y:125.0001}).wait(1).to({graphics:mask_graphics_4,x:150,y:125.0003}).wait(1).to({graphics:mask_graphics_5,x:150,y:125.001}).wait(1).to({graphics:mask_graphics_6,x:150,y:125.0024}).wait(1).to({graphics:mask_graphics_7,x:150,y:125.0049}).wait(1).to({graphics:mask_graphics_8,x:150.0001,y:125.0092}).wait(1).to({graphics:mask_graphics_9,x:150.0001,y:125.0156}).wait(1).to({graphics:mask_graphics_10,x:150.0002,y:125.025}).wait(1).to({graphics:mask_graphics_11,x:150.0004,y:125.0382}).wait(1).to({graphics:mask_graphics_12,x:150.0005,y:125.0559}).wait(1).to({graphics:mask_graphics_13,x:150.0007,y:125.0791}).wait(1).to({graphics:mask_graphics_14,x:150.001,y:125.109}).wait(1).to({graphics:mask_graphics_15,x:150.0013,y:125.1466}).wait(1).to({graphics:mask_graphics_16,x:150.0018,y:125.1931}).wait(1).to({graphics:mask_graphics_17,x:150.0023,y:125.2499}).wait(1).to({graphics:null,x:0,y:0}).wait(102));

	// logo1
	this.instance_1 = new lib.logo1();
	this.instance_1.setTransform(145,48,1,1,0,0,0,113,16);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},18).wait(102));

	// tile3
	this.instance_2 = new lib.screenTrans3Tile("synched",13,false);
	this.instance_2.setTransform(450,0,1,1,0,180,0,450,500);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81).to({_off:false},0).to({regY:500.2,scaleY:0.008,y:-4,mode:"single",startPosition:0},20,cjs.Ease.quartIn).to({_off:true},1).wait(18));

	// tile3
	this.instance_3 = new lib.screenTrans3Tile("synched",0,false);
	this.instance_3.setTransform(450,249.95,1,0.008,0,180,0,450,250.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({_off:false},0).to({regY:250,scaleY:1,y:250,mode:"single",startPosition:13},14,cjs.Ease.sineOut).to({_off:true},1).wait(38));

	// tile2
	this.instance_4 = new lib.screenTrans2Tile("synched",8,false);
	this.instance_4.setTransform(450.15,250,1.0005,1,0,0,180,149.8,250);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(53).to({_off:false},0).to({regY:250.6,scaleY:0.008,mode:"single",startPosition:23},14,cjs.Ease.quartIn).to({_off:true},1).wait(52));

	// tile2
	this.instance_5 = new lib.screenTrans2Tile("synched",0,false);
	this.instance_5.setTransform(299.15,375,0.0266,1,0,0,180,300.6,375);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).to({regX:300.7,scaleX:1.0005,mode:"single",startPosition:8},9,cjs.Ease.sineOut).to({_off:true},1).wait(66));

	// tile1
	this.instance_6 = new lib.screentrans1Tile("synched",12,false);
	this.instance_6.setTransform(300,375,1,1,0,180,0,300,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).to({regX:303.4,scaleX:0.0016,x:300.5,mode:"single",startPosition:19},14,cjs.Ease.quartIn).to({_off:true},1).wait(75));

	// tile1
	this.instance_7 = new lib.screentrans1Tile("synched",0,false);
	this.instance_7.setTransform(150,249.5,1,0.002,0,180,0,150,252.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).to({scaleY:1,y:247.9,mode:"single",startPosition:12},13,cjs.Ease.sineOut).to({_off:true},1).wait(89));

	// tile1
	this.instance_8 = new lib.screen1Tile("single",0);
	this.instance_8.setTransform(150,250,1,1,0,0,0,150,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({mode:"synched",loop:false},1).to({regY:250.2,scaleY:0.002,y:250.5,mode:"single",startPosition:19},16,cjs.Ease.quartIn).to({_off:true},1).wait(102));

	// Layer_17
	this.instance_9 = new lib.tileShadow();
	this.instance_9.setTransform(450,0,1,1,0,0,0,150,0);
	this.instance_9.alpha = 0.5;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(82).to({_off:false},0).wait(1).to({regX:153,regY:125.5,scaleY:0.9998,x:453,y:125.45,alpha:0.4999},0).wait(1).to({scaleY:0.999,y:125.4,alpha:0.4995},0).wait(1).to({scaleY:0.9977,y:125.2,alpha:0.4988},0).wait(1).to({scaleY:0.9958,y:125,alpha:0.4979},0).wait(1).to({scaleY:0.9932,y:124.65,alpha:0.4965},0).wait(1).to({scaleY:0.9898,y:124.2,alpha:0.4948},0).wait(1).to({scaleY:0.9854,y:123.65,alpha:0.4926},0).wait(1).to({scaleY:0.98,y:123,alpha:0.4898},0).wait(1).to({scaleY:0.9732,y:122.15,alpha:0.4864},0).wait(1).to({scaleY:0.965,y:121.1,alpha:0.4822},0).wait(1).to({scaleY:0.9548,y:119.85,alpha:0.477},0).wait(1).to({scaleY:0.9422,y:118.25,alpha:0.4706},0).wait(1).to({scaleY:0.9263,y:116.25,alpha:0.4626},0).wait(1).to({scaleY:0.906,y:113.7,alpha:0.4522},0).wait(1).to({scaleY:0.8789,y:110.3,alpha:0.4385},0).wait(1).to({scaleY:0.8402,y:105.45,alpha:0.4188},0).wait(1).to({scaleY:0.776,y:97.4,alpha:0.3862},0).wait(1).to({scaleY:0.6369,y:79.95,alpha:0.3155},0).wait(1).to({regX:150,regY:0,scaleY:0.508,x:450,y:0,alpha:0.25},0).wait(1).to({regX:153,regY:125.5,scaleY:0.3681,x:453,y:46.2,alpha:0.1789},0).wait(1).to({scaleY:0.2834,y:35.55,alpha:0.1358},0).wait(1).to({scaleY:0.2239,y:28.1,alpha:0.1056},0).wait(1).to({scaleY:0.1792,y:22.5,alpha:0.0829},0).wait(1).to({scaleY:0.1443,y:18.1,alpha:0.0652},0).wait(1).to({scaleY:0.1164,y:14.6,alpha:0.051},0).wait(1).to({scaleY:0.0939,y:11.8,alpha:0.0396},0).wait(1).to({scaleY:0.0756,y:9.5,alpha:0.0303},0).wait(1).to({scaleY:0.0606,y:7.6,alpha:0.0227},0).wait(1).to({scaleY:0.0485,y:6.1,alpha:0.0165},0).wait(1).to({scaleY:0.0388,y:4.85,alpha:0.0116},0).wait(1).to({scaleY:0.0312,y:3.9,alpha:0.0077},0).wait(1).to({scaleY:0.0254,y:3.2,alpha:0.0047},0).wait(1).to({scaleY:0.0211,y:2.65,alpha:0.0026},0).wait(1).to({scaleY:0.0182,y:2.3,alpha:0.0011},0).wait(1).to({scaleY:0.0165,y:2.05,alpha:0.0003},0).wait(1).to({regX:150,regY:0,scaleY:0.016,x:450,y:0,alpha:0},0).to({_off:true},1).wait(1));

	// Layer_16
	this.instance_10 = new lib.tileShadow();
	this.instance_10.setTransform(450,250,1,1,0,0,0,150,0);
	this.instance_10.alpha = 0.5;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).wait(1).to({regX:153,regY:125.5,scaleY:0.9995,x:453,y:375.45,alpha:0.4997},0).wait(1).to({scaleY:0.9979,y:375.25,alpha:0.4989},0).wait(1).to({scaleY:0.9949,y:374.85,alpha:0.4974},0).wait(1).to({scaleY:0.9904,y:374.3,alpha:0.4951},0).wait(1).to({scaleY:0.9839,y:373.45,alpha:0.4918},0).wait(1).to({scaleY:0.9749,y:372.35,alpha:0.4872},0).wait(1).to({scaleY:0.9628,y:370.85,alpha:0.4811},0).wait(1).to({scaleY:0.9464,y:368.75,alpha:0.4727},0).wait(1).to({scaleY:0.9236,y:365.9,alpha:0.4611},0).wait(1).to({scaleY:0.8904,y:361.75,alpha:0.4443},0).wait(1).to({scaleY:0.8364,y:354.95,alpha:0.4169},0).wait(1).to({scaleY:0.7153,y:339.75,alpha:0.3553},0).wait(1).to({regX:150,regY:0,scaleY:0.508,x:450,y:250,alpha:0.25},0).wait(1).to({regX:153,regY:125.5,scaleY:0.3382,x:453,y:292.45,alpha:0.1637},0).wait(1).to({scaleY:0.2446,y:280.7,alpha:0.1162},0).wait(1).to({scaleY:0.1823,y:272.85,alpha:0.0845},0).wait(1).to({scaleY:0.1373,y:267.25,alpha:0.0616},0).wait(1).to({scaleY:0.1037,y:263,alpha:0.0446},0).wait(1).to({scaleY:0.0781,y:259.8,alpha:0.0316},0).wait(1).to({scaleY:0.0586,y:257.35,alpha:0.0216},0).wait(1).to({scaleY:0.0438,y:255.5,alpha:0.0141},0).wait(1).to({scaleY:0.0328,y:254.1,alpha:0.0085},0).wait(1).to({scaleY:0.025,y:253.15,alpha:0.0046},0).wait(1).to({scaleY:0.0198,y:252.5,alpha:0.0019},0).wait(1).to({scaleY:0.0169,y:252.1,alpha:0.0005},0).wait(1).to({regX:150,regY:0,scaleY:0.016,x:450,y:250,alpha:0},0).to({_off:true},1).wait(39));

	// Layer_15
	this.instance_11 = new lib.tileShadow();
	this.instance_11.setTransform(300,375,0.1356,1,0,0,84.3568,0,125);
	this.instance_11.alpha = 0.1992;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(31).to({_off:false},0).wait(1).to({regX:153,regY:125.5,scaleX:0.136,skewY:84.3164,x:302.05,y:396.2,alpha:0.1994},0).wait(1).to({scaleX:0.1374,skewY:84.1869,x:302.15,y:396.4,alpha:0.1998},0).wait(1).to({scaleX:0.1398,skewY:83.9529,x:302.25,y:396.75,alpha:0.2006},0).wait(1).to({scaleX:0.1434,skewY:83.5946,x:302.45,y:397.3,alpha:0.2019},0).wait(1).to({scaleX:0.1487,skewY:83.0855,x:302.75,y:398.1,alpha:0.2036},0).wait(1).to({scaleX:0.1558,skewY:82.3885,x:303.15,y:399.1,alpha:0.2061},0).wait(1).to({scaleX:0.1654,skewY:81.4502,x:303.75,y:400.5,alpha:0.2093},0).wait(1).to({scaleX:0.1783,skewY:80.1879,x:304.65,y:402.4,alpha:0.2137},0).wait(1).to({scaleX:0.196,skewY:78.4633,x:306,y:404.9,alpha:0.2197},0).wait(1).to({scaleX:0.2211,skewY:76.0139,x:308.2,y:408.3,alpha:0.2283},0).wait(1).to({scaleX:0.2599,skewY:72.2278,x:312.15,y:413.35,alpha:0.2414},0).wait(1).to({scaleX:0.3345,skewY:64.9424,x:321.7,y:421.85,alpha:0.2668},0).wait(1).to({regX:0.1,regY:124.9,scaleX:0.5151,skewY:47.3168,x:300.05,y:375,alpha:0.3281},0).wait(1).to({regX:153,regY:125.5,scaleX:0.751,skewY:24.295,x:404.65,y:422.85,alpha:0.4117},0).wait(1).to({scaleX:0.8477,skewY:14.8661,x:425.2,y:408.8,alpha:0.446},0).wait(1).to({scaleX:0.9046,skewY:9.3171,x:436.4,y:397.95,alpha:0.4662},0).wait(1).to({scaleX:0.9415,skewY:5.7076,x:443.2,y:389.9,alpha:0.4793},0).wait(1).to({scaleX:0.9663,skewY:3.2903,x:447.45,y:384.05,alpha:0.488},0).wait(1).to({scaleX:0.9827,skewY:1.6912,x:450.15,y:380,alpha:0.4939},0).wait(1).to({scaleX:0.9929,skewY:0.6942,x:451.75,y:377.4,alpha:0.4975},0).wait(1).to({scaleX:0.9984,skewY:0.1616,x:452.6,y:376,alpha:0.4994},0).wait(1).to({regX:0,regY:125,scaleX:1,skewY:0,x:300,y:375,alpha:0.5},0).to({_off:true},1).wait(66));

	// Layer_14
	this.instance_12 = new lib.tileShadow();
	this.instance_12.setTransform(150,250,1,0.016,0,0,0,150,0);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).wait(1).to({regX:153,regY:125.5,scaleY:0.0163,x:153,y:252.05,alpha:0.0002},0).wait(1).to({scaleY:0.0173,y:252.15,alpha:0.0007},0).wait(1).to({scaleY:0.019,y:252.4,alpha:0.0015},0).wait(1).to({scaleY:0.0216,y:252.7,alpha:0.0029},0).wait(1).to({scaleY:0.0252,y:253.15,alpha:0.0047},0).wait(1).to({scaleY:0.0299,y:253.75,alpha:0.0071},0).wait(1).to({scaleY:0.036,y:254.5,alpha:0.0102},0).wait(1).to({scaleY:0.0437,y:255.5,alpha:0.0141},0).wait(1).to({scaleY:0.0534,y:256.7,alpha:0.0191},0).wait(1).to({scaleY:0.0658,y:258.25,alpha:0.0254},0).wait(1).to({scaleY:0.0815,y:260.25,alpha:0.0334},0).wait(1).to({scaleY:0.102,y:262.8,alpha:0.0438},0).wait(1).to({scaleY:0.1296,y:266.25,alpha:0.0579},0).wait(1).to({scaleY:0.1696,y:271.3,alpha:0.0783},0).wait(1).to({scaleY:0.2368,y:279.7,alpha:0.1126},0).wait(1).to({regX:150,regY:0,scaleY:0.3914,x:150,y:250,alpha:0.1914},0).wait(1).to({regX:153,regY:125.5,scaleY:0.6693,x:153,y:334,alpha:0.3323},0).wait(1).to({scaleY:0.7783,y:347.7,alpha:0.3876},0).wait(1).to({scaleY:0.8432,y:355.8,alpha:0.4205},0).wait(1).to({scaleY:0.8874,y:361.35,alpha:0.4429},0).wait(1).to({scaleY:0.9195,y:365.4,alpha:0.4592},0).wait(1).to({scaleY:0.9435,y:368.4,alpha:0.4713},0).wait(1).to({scaleY:0.9615,y:370.65,alpha:0.4805},0).wait(1).to({scaleY:0.975,y:372.35,alpha:0.4873},0).wait(1).to({scaleY:0.985,y:373.6,alpha:0.4924},0).wait(1).to({scaleY:0.992,y:374.5,alpha:0.4959},0).wait(1).to({scaleY:0.9966,y:375.1,alpha:0.4983},0).wait(1).to({scaleY:0.9992,y:375.4,alpha:0.4996},0).wait(1).to({regX:150,regY:0,scaleY:1,x:150,y:250,alpha:0.5},0).to({_off:true},1).wait(89));

	// tile2
	this.instance_13 = new lib.screen2Tile("single",0);
	this.instance_13.setTransform(300,375,1,1,0,0,0,300,375);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},30).wait(90));

	// tile3
	this.instance_14 = new lib.screen3Tile("single",0);
	this.instance_14.setTransform(450,250,1,1,0,0,0,450,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},53).wait(67));

	// tile4
	this.instance_15 = new lib.screen4Tile("single",0);
	this.instance_15.setTransform(450,0,1,1,0,0,0,450,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},81).wait(39));

	// logo2
	this.instance_16 = new lib.logo2();
	this.instance_16.setTransform(145,48,1,1,0,0,0,113,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-6.9,624,634.3);


(lib.arrowSub = function(mode,startPosition,loop,reversed) {
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
	this.arrowSubSub = new lib.arrowSubSub();
	this.arrowSubSub.name = "arrowSubSub";
	this.arrowSubSub.setTransform(3.4,6.5,1,1,0,0,0,3.4,6.5);

	this.timeline.addTween(cjs.Tween.get(this.arrowSubSub).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrowSub, new cjs.Rectangle(-0.7,-0.7,8.2,14.399999999999999), null);


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

	// Layer_2
	this.arrowSub = new lib.arrowSub();
	this.arrowSub.name = "arrowSub";
	this.arrowSub.setTransform(7.45,4.2,1,1,0,0,0,3.4,6.5);

	this.timeline.addTween(cjs.Tween.get(this.arrowSub).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(3.3,-3,8.3,14.4), null);


(lib.cta_arrowmo = function(mode,startPosition,loop,reversed) {
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
	this.frame_52 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhIBJQgegfAAgqQAAgpAegfQAfgeApAAQAqAAAfAeQAeAfAAApQAAAqgeAfQgfAegqAAQgpAAgfgeg");

	// Layer 4
	this.arrow2 = new lib.arrow();
	this.arrow2.name = "arrow2";
	this.arrow2.setTransform(-18.15,0.05,1,1,0,0,0,5.6,4.2);
	this.arrow2.alpha = 0;

	var maskedShapeInstanceList = [this.arrow2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.arrow2).wait(12).to({alpha:1},0).to({x:2.15},8,cjs.Ease.get(1)).wait(1).to({regX:7.5,x:3.9},0).wait(1).to({x:3.25},0).wait(1).to({x:2.3},0).wait(1).to({x:1.5},0).wait(1).to({x:1},0).wait(1).to({regX:5.6,x:-1.05},0).wait(1).to({regX:7.5,x:0.95},0).wait(1).to({x:1.3},0).wait(1).to({x:1.75},0).wait(1).to({x:2.15},0).wait(1).to({x:2.4},0).wait(1).to({regX:5.6,x:0.55},0).wait(1).to({regX:7.5,x:2.45},0).wait(1).to({x:2.3},0).wait(1).to({x:2.15},0).wait(1).to({x:2},0).wait(1).to({x:1.9},0).wait(1).to({regX:5.6,x:-0.05},0).wait(1).to({regX:7.5,x:1.9},0).wait(1).to({x:1.95},0).wait(1).to({x:2},0).wait(1).to({x:2.05},0).wait(1).to({regX:5.6,x:0.15},0).wait(10));

	// Layer 2
	this.arrow1 = new lib.arrow();
	this.arrow1.name = "arrow1";
	this.arrow1.setTransform(0.15,0.05,1,1,0,0,0,5.6,4.2);

	var maskedShapeInstanceList = [this.arrow1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.arrow1).to({x:-1.15},8,cjs.Ease.get(1)).wait(2).to({x:19.85},8,cjs.Ease.get(-1)).wait(1).to({alpha:0},0).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-7.4,20.5,14.9);


(lib.arrowMain = function(mode,startPosition,loop,reversed) {
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
	this.frame_0 = function() {
		this.stop()
		this.arrow.visible=false;
		this.arrowStatic.visible=true;
	}
	this.frame_1 = function() {
		this.stop();
		this.arrow.visible=true;
		this.arrowStatic.visible=false;
		this.arrow.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// mouseOverAnimation
	this.arrow = new lib.cta_arrowmo();
	this.arrow.name = "arrow";
	this.arrow.setTransform(10.75,10.75);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(2));

	// staticArrow
	this.arrowStatic = new lib.arrow();
	this.arrowStatic.name = "arrowStatic";
	this.arrowStatic.setTransform(5.35,6.6);

	this.timeline.addTween(cjs.Tween.get(this.arrowStatic).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,0.5,30.7,20.5);


(lib.CTA_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.setTransform(-4.5,1.95,0.6158,0.5649,0,0,0,13.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.setTransform(-51.4,-2.45,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,51,51,0)").s().p("Ao7CWIAAkrIR3AAIAAErg");
	this.shape.setTransform(-55.025,1.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-112.2,-13,114.4,30), null);


(lib.mainMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// screen1
	this.screen1 = new lib.screen1();
	this.screen1.name = "screen1";
	this.screen1.setTransform(150,125,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.screen1).wait(1));

	// txt
	this.txt = new lib.txt_mc();
	this.txt.name = "txt";
	this.txt.setTransform(70.5,70.55,1,1,0,0,0,70.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// txtCta
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(54.7,217.1,1,1,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// cta
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(107.25,215.25,1.1404,1.1404,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// screen2
	this.instance = new lib.screen2();
	this.instance.setTransform(150,125,0.5,0.5,0,0,0,300,250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-21,0,321.5,250.2), null);


// stage content:
(lib.Template_V4_Illustration_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var mc = exportRoot.mainMC
		exportRoot.replayAnim = "inProgress"

		this.initBanner = function (data) {

			exportRoot.isReplay = false;
			exportRoot.shadowReplay = false;

			Object.keys = function(obj) {
				var keys = [];

				for (var i in obj) {
				  if (obj.hasOwnProperty(i)) {
					keys.push(i);
				  }
				}
				return keys
			}
			var keys = Object.keys(data)

				for (var i in keys) {
					var id = keys[i].substr(0, 4);
						if (id == "head") {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillHead(data[keys[i]], exportRoot['' + keys[i]])
						} else if (id == "CTA" && data[keys[i]].length > 1) {
							exportRoot.fillCta(data[keys[i]])
						} else if (id == "CTAa") {
							mc.cta.arrow.visible = data[keys[i]][0]
							mc.cta.arrow.x += data[keys[i]][1]
							mc.cta.arrow.y += data[keys[i]][2]
						}
				}
		}

		this.fillHead = function (txtDetails, aVar) {
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]

			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)

			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += parseInt(size)
				mc.x += xOffset

				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.8)
				exportRoot.mainMC.txt.addChild(mc);
				aVar.push(mc)
			}
		}

		this.fillCta = function (txtDetails) {
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]


			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)

			var ctaArrowColor = new Array()

			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += (parseInt(size) * 0.90)
				mc.x += xOffset

				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					ctaArrowColor.push(aSentenceLine[i][j].color);
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				mc.y = mc.y - (mc.getTransformedBounds().height / 2)
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
				this.mainMC.txtCta.addChild(mc);
			}

				//console.log("color"+ctaArrowColor[0]);

				this.mainMC.cta.arrow.arrowStatic.arrowSub.cache(0,0,50,50,2);
				this.mainMC.cta.arrow.arrow.arrow1.arrowSub.cache(0,0,50,50,2);
				this.mainMC.cta.arrow.arrow.arrow2.arrowSub.cache(0,0,50,50,2);

				gsap.to(this.mainMC.cta.arrow.arrowStatic.arrowSub, 0, {easel: {tint: ctaArrowColor[0], tintAmount: 1}});
				gsap.to(this.mainMC.cta.arrow.arrow.arrow1.arrowSub, 0, {easel: {tint: ctaArrowColor[0], tintAmount: 1}});
				gsap.to(this.mainMC.cta.arrow.arrow.arrow2.arrowSub, 0, {easel: {tint: ctaArrowColor[0], tintAmount: 1}});


		}

		this.getTheSentences = function (text, size, xOffset, yOffset, lineSpacing, lineWidth, align) {
			var sentences = new Array()
			var aSentenceLine = new Array()
			var aStr = text.substr(0);
			sentences = aStr.split("|");
			var lastColor = "#000000"
			// Figure out the setence lines

			for (var i = 0; i < sentences.length; i++) {
				var aS = sentences[i].substr(0);
				var aSplit = new Array()
				aSplit = aS.split("<");
				aSplit = aSplit.filter(Boolean)
				var wholeSentence = new Array()

				for (var j = 0; j < aSplit.length; j++) {

					var checkColor = aSplit[j].indexOf("#")
					var color = (checkColor == -1) ? lastColor : aSplit[j].substr(0, 7);
					lastColor = color
					var txt = (checkColor == -1) ? aSplit[j].substr(0) : aSplit[j].substr(8);
					var subSentence = {
						color: color,
						txt: txt
					};
					wholeSentence.push(subSentence)
				}
				aSentenceLine.push(wholeSentence)
			}
			return aSentenceLine
		}

		var mc = exportRoot.mainMC;

		//mc.cta.alpha = 0;

		this.runBanner = function() {

				mc.cta.alpha = 1;

				this.tlText = gsap.timeline({defaults: {ease:Power4.easeOut}});

				gsap.delayedCall(1, function(){mc.screen1.play();});
				/*this.tlText.from(exportRoot.headline1,{
					duration:0.8,
					x: "-=250", alpha: 0,
					stagger:0.1
				}, "-=2");*/

				//this.tlText.from(mc.cta, { duration: 0.6, x: "-=150"}, "-=1.4");
				//this.tlText.from(mc.txtCta, { duration: 0.6, x: "-=150"}, "-=1.4");

		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.setTransform(0,0.1,0.9968,0.9997,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(129.1,125,170.50000000000003,125.1);
var adSize = '300x250';
var logoImage = 'Microsoftlogo_rgb_cgray1.png';
var frameImage1 = 'Illustration_Migration/' + adSize + '_Illustration_Migration_F1.png';
var frameImage2 = 'Illustration_Migration/' + adSize + 'Illustration_Migration_F2.png';
var iframe = window.frameElement;
var parentWindow = iframe.contentWindow.parent ? iframe.contentWindow.parent  : iframe.contentWindow;
var bannerData = parentWindow.getBannerData();
var layout = bannerData.layout;
if(layout) {
	switch (layout) {
		case 'Illustration_AI' :
		case 'Illustration_Hybrid' :
		case 'Illustration_ML' :
		case 'Illustration_Migration' :
		case 'Illustration_OpenSource' :
		case 'Illustration_VM' :
		case 'Lifestyle_Male' :
		case 'Lifestyle_Female' :
		case 'UI_AI' :
		case 'UI_FreeAccount' :
		case 'UI_Hybrid' :
		case 'UI_ML' :
		case 'UI_Migration' :
		case 'UI_OpenSource' :
		case 'UI_VM' : frameImage1 = layout+'/' + adSize + '_' + layout + '_F1.png';frameImage2 = layout+'/' + adSize + '_' + layout + '_F2.png'; break;
		default:
	}
	switch (layout) {
		case 'Illustration_Hybrid' :
		case 'Illustration_ML' :
		case 'Illustration_OpenSource' :  logoImage = 'Microsoftlogo_rgb_cwhite.png'; break;
		default:
	}
}
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 250,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/" + frameImage1, id:"_086E0069_FY21_AzureDirect_Creative_Refresh_BSV4_Illustration_MigrationV4MigrationF1"},
		{src:"images/" + logoImage, id:"Microsoftlogo_rgb_cgray1"},
		{src:"images/Microsoftlogo_rgb_cwhite.png?1605795874613", id:"Microsoftlogo_rgb_cwhite"},
		{src:"images/Tile_Shadow.png?1605795874613", id:"Tile_Shadow"},
		{src:"images/" + frameImage2, id:"V4MigrationF5"}
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
an.compositions['90A26FE74B042E4A89CA750D1DA2DF1F'] = {
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
