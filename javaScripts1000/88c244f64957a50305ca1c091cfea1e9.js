(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bb = function() {
	this.initialize(img.bb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,122);


(lib.earth = function() {
	this.initialize(img.earth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,189);


(lib.hammer1 = function() {
	this.initialize(img.hammer1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,44);


(lib.hammer2 = function() {
	this.initialize(img.hammer2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,29);


(lib.hero = function() {
	this.initialize(img.hero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,166);


(lib.newbg1 = function() {
	this.initialize(img.newbg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.newbg2 = function() {
	this.initialize(img.newbg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,188);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,113);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,113);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,113);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,113);


(lib.wechat = function() {
	this.initialize(img.wechat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,169);// helper functions:

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


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.newbg2();
	this.instance.parent = this;
	this.instance.setTransform(91,17,0.817,0.817);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(91,17,595.1,153.7), null);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.wechat();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am3G4IAAtvINvAAIAANvg");
	this.shape.setTransform(42.3,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-1.7,-1.8,88,88), null);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnB4QgCgBgBgDQgDgGAGgEQAfgLASgbQASgbAAghQAAgcgQgaQgQgZgagOQgHgEAEgGQADgGAGACQAgAQARAdQASAdAAAhQAAAlgVAfQgUAegjAOIgCABIgEgBgAAYBnQgTgBgQgJQgRgKgGgNQgQglAAgpQAAgpAQgmQAGgNARgKQAQgJATgBIABAAQAJAAAAAJIAAArQAAAJgKAAIgYAAQgEAAgCAFQgGAZgBAVQABAWAGAXQACAGAEAAIAYAAQAKAAAAAJIAAAqQAAAJgJAAgAARA5IAAAgQAAAFADAAQAFAAAAgFIAAggQAAgEgFAAQgDAAAAAEgAgahTQgNAdgDAjQABAFAEAAQABAAAAAAQABgBAAAAQABAAAAgBQAAgBAAgBQADghAMgdQABgDgDgCIgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBABAAAAgAARhpIAAAhQAAABAAAAQAAABABAAQAAABABAAQABAAAAAAQAFAAAAgDIAAghQAAgEgFAAQgDAAAAAEgAhlBIQgTgdAAgjQAAghASgdQASgdAfgQQAHgDADAHQACAGgFAEQgcAOgPAYQgRAaAAAdQAAAdARAcQAEAGgGAEIgEABQgEAAgCgEg");
	this.shape.setTransform(12.1,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,24.2,24.2), null);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AGgARQgIgHAAgKQAAgJAIgHQAGgHALAAQAKAAAHAHQAGAHAAAJQAAAKgGAHQgHAHgKAAQgLAAgGgHgAnAARQgIgHAAgKQAAgJAIgHQAGgHALAAQAJAAAIAHQAGAHAAAJQAAAKgGAHQgIAHgJAAQgLAAgGgHg");
	this.shape.setTransform(124.4,22.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(124.2,19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.82)").s().p("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");
	this.shape_2.setTransform(126.4,21);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(3.5,3.3,243.6,33.9), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnACBIAAhaIhdAAIAAh9IBdAAIAAgqIAoAAIAAAqIBhAAIAAB9IhhAAIAABagAmYAHIA8AAIAAg8Ig8AAgAn4AHIA4AAIAAg8Ig4AAgAFYBgQAYgBASgJQARgIADgNIgcAAIAAhcICTAAIAABcIgjAAIAAAbQAAAHAIAAIAGAAQAEAAABgEQABgDABgVIAfAJQgCAYgFAMQgFALgOAAIggAAQgQAAgHgGQgGgFAAgQIAAgjIgOAAQgFAZgWARQgVARgfAEgAGcAoIBNAAIAAgLIhNAAgAGcAIIBNAAIAAgKIhNAAgAiIB+QgXAAgJgIQgJgIAAgXIAAg5QgKAJgMAIIgEgLQgMA0gXAlIgkgUQAdgpAMgvIAZAIIgHgMQAkgNALgUIgmAAIAAgcIAlAAIAAgaIgbAAIAAgbIAbAAIAAgZIAiAAIAAAZIAmAAIAAgZIAiAAIAAAZIAiAAIAAAbIgiAAIAAAaIApAAIAAAcIgqAAQARAVAgALIgQAjQgSgLgRgPIAAA1IhNAAIAAALQAAAMANgBIA6AAQAKABACgLIADgYIAiAKQgCAXgHAPQgIAQgaAAgAiPAxIAuAAIAAgWIguAAgAhVACQgLgMgFgKIgeAAQgGAMgKAKIA+AAIAAAAgAiHgwIAmAAIAAgZIgmAAgACaB8IgIgiQASACAVAAIAEAAQALAAADgFQADgFABgLIhTAAIANgvIgbAAIAAgcICVAAIAAAcIhXAAIgFASIBNAAQgBArgJATQgJAVgkAAgAAEBaIAKgCIAAhkIAdAAIAABfIAKgDIAAhoIgmAAIAAhgIBXAAIAABNQAcgNALgSIggAAIAAgdIAsAAQAEgLACgOIAjADQgCALgEALIBHAAIAAAdIglAAQAMASAcANIgRAdQgRgLgJgIIAAARIhKAAIAAgQQgNAMgPAIIgPgYIAAAMIgSAAIAAAaIATAAIAAAeIgTAAIAAAnIAWgJIAAAhQgzASgtAKgADPgtQgLgHgKgWIgIAAQgJATgMAKIAyAAIAAAAgAAvg1IAYAAIAAgmIgYAAgAEcAwIAbgGIAAhFIgYAAIAAghIAYAAIAAg/IAiAAIAAA/IARAAIAAgHIAoAAIgJgSIgXAAIAAgcIA7AAIgIgMIAmgDQAEAFAEAKIBBAAIAAAcIgXAAIgHASIAlAAIAAAeIisAAIAAAKIgWAAIAAA8IAXgJIAAAjQgbAPgyAOgAG2hDIAcAAQAGgJACgJIgsAAgAkTglIAXgXQAVAOAYAWIgbAbQgQgSgZgWgAkLhmIAYgVQAZAPAUASIgZAaQgYgYgUgOg");
	this.shape.setTransform(58.8,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(5,1,1).p("AFZg8IAAg/IgiAAIAAA/IgYAAIAAAhIAYAAIAABFIgbAGIAHAoQAygOAbgPIAAgjIgXAJIAAg8IAWAAIAAgKICsAAIAAgeIglAAIAHgSIAXAAIAAgcIhBAAQgEgKgEgFIgmACIAIANIg7AAIAAAcIAXAAIAJASIgoAAIAAAHgAHShDIgcAAIgIgSIAsAAQgCAJgGAJgAHpgCIAAAJIhNAAIAAgJgAINBBIAAhdIiTAAIAABdIAcAAQgDAMgRAKQgSAIgYACIASAgQAfgFAVgRQAWgRAFgZIAOAAIAAAiQAAARAGAGQAHAFAQAAIAgAAQAOAAAFgMQAFgLACgZIgfgIQgBAVgBADQgBAEgEAAIgGAAQgIAAAAgHIAAgbgAHpAcIAAAMIhNAAIAAgMgABmgkIAPAYQAPgJANgLIAAAPIBKAAIAAgRQAJAJARALIARgeQgcgMgMgSIAlAAIAAgdIhHAAQAEgLACgLIgjgDQgCAOgEALIgsAAIAAAdIAgAAQgLASgcANIAAhNIhXAAIAABgIAmAAIAABnIgKADIAAheIgdAAIAABkIgKABIAGAjQAtgLAzgSIAAghIgWAJIAAgnIATAAIAAgeIgTAAIAAgaIASAAgAEDAYIAAgcIiVAAIAAAcIAbAAIgNAuIBTAAQgBAMgDAFQgDAFgLAAIgEAAQgVAAgSgCIAIAiIAjAAQAkAAAJgUQAJgTABgrIhNAAIAFgSgADPgtIgyAAQAMgLAJgSIAIAAQAKAWALAHgABHg1IgYAAIAAgmIAYAAgAjLAkIAEALQAMgIAKgJIAAA5QAAAXAJAIQAJAHAXAAIBGAAQAaAAAIgPQAHgQACgWIgigKQgBANgCALQgCALgKAAIg6AAQgNAAAAgMIAAgLIBNAAIAAg1QARAQASAKIAQgjQgggLgRgVIAqAAIAAgcIgpAAIAAgaIAiAAIAAgbIgiAAIAAgaIgiAAIAAAaIgmAAIAAgaIgiAAIAAAaIgbAAIAAAbIAbAAIAAAaIglAAIAAAcIAmAAQgLAUgkANIAHAMIgZgIQgMAvgdApIAkATQAXgjAMg1gAhhhJIAAAZIgmAAIAAgZgAhlgUQAFAJALANIg+AAQAKgLAGgLgAhhAbIAAAWIguAAIAAgWgAkLhmQAUAOAYAYIAZgbQgUgRgZgPgAkTglQAZAWAQASIAbgbQgYgXgVgOgAlcAHIg8AAIAAg8IA8AAgAmYhWIAAgqIgoAAIAAAqIhdAAIAAB9IBdAAIAABaIAoAAIAAhaIBhAAIAAh9gAnAAHIg4AAIAAg8IA4AAg");
	this.shape_1.setTransform(58.8,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnACBIAAhaIhdAAIAAh9IBdAAIAAgqIAoAAIAAAqIBhAAIAAB9IhhAAIAABagAmYAHIA8AAIAAg8Ig8AAgAn4AHIA4AAIAAg8Ig4AAgAFYBgQAYgBASgJQARgIADgNIgcAAIAAhcICTAAIAABcIgjAAIAAAbQAAAHAIAAIAGAAQAEAAABgEQABgDABgVIAfAJQgCAYgFAMQgFALgOAAIggAAQgQAAgHgGQgGgFAAgQIAAgjIgOAAQgFAZgWARQgVARgfAEgAGcAoIBNAAIAAgLIhNAAgAGcAIIBNAAIAAgKIhNAAgAiIB+QgXAAgJgIQgJgIAAgXIAAg5QgKAJgMAIIgEgLQgMA0gXAlIgkgUQAdgpAMgvIAZAIIgHgMQAkgNALgUIgmAAIAAgcIAlAAIAAgaIgbAAIAAgbIAbAAIAAgZIAiAAIAAAZIAmAAIAAgZIAiAAIAAAZIAiAAIAAAbIgiAAIAAAaIApAAIAAAcIgqAAQARAVAgALIgQAjQgSgLgRgPIAAA1IhNAAIAAALQAAAMANgBIA6AAQAKABACgLIADgYIAiAKQgCAXgHAPQgIAQgaAAgAiPAxIAuAAIAAgWIguAAgAhVACQgLgMgFgKIgeAAQgGAMgKAKIA+AAIAAAAgAiHgwIAmAAIAAgZIgmAAgACaB8IgIgiQASACAVAAIAEAAQALAAADgFQADgFABgLIhTAAIANgvIgbAAIAAgcICVAAIAAAcIhXAAIgFASIBNAAQgBArgJATQgJAVgkAAgAAEBaIAKgCIAAhkIAdAAIAABfIAKgDIAAhoIgmAAIAAhgIBXAAIAABNQAcgNALgSIggAAIAAgdIAsAAQAEgLACgOIAjADQgCALgEALIBHAAIAAAdIglAAQAMASAcANIgRAdQgRgLgJgIIAAARIhKAAIAAgQQgNAMgPAIIgPgYIAAAMIgSAAIAAAaIATAAIAAAeIgTAAIAAAnIAWgJIAAAhQgzASgtAKgADPgtQgLgHgKgWIgIAAQgJATgMAKIAyAAIAAAAgAAvg1IAYAAIAAgmIgYAAgAEcAwIAbgGIAAhFIgYAAIAAghIAYAAIAAg/IAiAAIAAA/IARAAIAAgHIAoAAIgJgSIgXAAIAAgcIA7AAIgIgMIAmgDQAEAFAEAKIBBAAIAAAcIgXAAIgHASIAlAAIAAAeIisAAIAAAKIgWAAIAAA8IAXgJIAAAjQgbAPgyAOgAG2hDIAcAAQAGgJACgJIgsAAgAkTglIAXgXQAVAOAYAWIgbAbQgQgSgZgWgAkLhmIAYgVQAZAPAUASIgZAaQgYgYgUgOg");
	this.shape_2.setTransform(58.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(2.2,0.6,113.4,30.8), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hammer1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,25,22), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hammer2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,35.5,14.5), null);


(lib.Symbol16copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1CBIgFgfIAhABQAHAAAAgHIAAgEIhgAAIAAgaIBgAAIAAgLIhvAAIAAgcIBvAAIAAgKIhdAAIAAgYIBdAAIAAgKIhaAAIAAg6IBaAAIAAgKIhrAAIAAgcIBrAAIAAgLIAlAAIAAALIBrAAIAAAcIhrAAIAAAKIBbAAIAAA6IhbAAIAAAKIBeAAIAAAgIASAAIAAAgIgSAAIAAAjIheAAIAAALQAAAegZAAgAATA+IA7AAIAAgLIg7AAgAATAXIA7AAIAAgKIg7AAgAATgsIA5AAIAAgNIg5AAgAhKgsIA4AAIAAgNIg4AAg");
	this.shape.setTransform(55.6,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbCBIAAh1IgaAAQgBAegMAjQgLAggQAUIgegeQAQgQAJgZQAIgZABgUIAAgBIgdAAIAAggIAdAAIAAhBIgWAAIAAghICKAAIAAAhIgTAAIAABBIAXAAIAAAgIgXAAIAAB1gAg1gUIAbAAIAAhBIgbAAgAA3B8IgGgnIAgABQAIAAAAgIIAAjOIAjAAIAADWQAAAYgHAHQgIAHgTAAgAAnA6IAAigIAhAAIAACgg");
	this.shape_1.setTransform(27.2,27.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(222,180,6,0.847)").s().p("AmfELIAAoWIM/AAIAAIWg");
	this.shape_2.setTransform(41.6,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16copy3, new cjs.Rectangle(0,0,83.3,53.5), null);


(lib.Symbol16copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1CBIgFgfIAhABQAHAAAAgHIAAgEIhgAAIAAgaIBgAAIAAgLIhvAAIAAgcIBvAAIAAgKIhdAAIAAgYIBdAAIAAgKIhaAAIAAg6IBaAAIAAgKIhrAAIAAgcIBrAAIAAgLIAlAAIAAALIBrAAIAAAcIhrAAIAAAKIBbAAIAAA6IhbAAIAAAKIBeAAIAAAgIASAAIAAAgIgSAAIAAAjIheAAIAAALQAAAegZAAgAATA+IA7AAIAAgLIg7AAgAATAXIA7AAIAAgKIg7AAgAATgsIA5AAIAAgNIg5AAgAhKgsIA4AAIAAgNIg4AAg");
	this.shape.setTransform(55.6,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhwCCIAAi5IAzAAQgJgOgLgLIgsAAIAAgeIBpAAQgFgGgLgKIAogCQAIAIAHAKIBrAAIAAAeIgtAAQgKAQgJAJIAzAAIAACVQAAAVgHAHQgIAGgRAAIggAAIgEgYIhrAAIAAhEIgPgQIAABugAgqAeIBnAAIAABCIAHAAQAJAAAAgIIAAhEIgnAAQgQAAgIgGQgHgFAAgSIAAgRIgTAAQgCAggcAYgAgcBOIA3AAIAAgXIg3AAgAhNAOQALgFAKgLQALgMABgMIghAAgAApgMQAAAIAIAAIAcAAIAAgWIgkAAgAgYg3IAtAAQAPgOAGgLIhTAAQAIAJAJAQg");
	this.shape_1.setTransform(27.6,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(222,180,6,0.847)").s().p("AmfELIAAoWIM/AAIAAIWg");
	this.shape_2.setTransform(41.6,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16copy2, new cjs.Rectangle(0,0,83.3,53.5), null);


(lib.Symbol16copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0CBIgGgfIAhABQAIAAgBgHIAAgEIhgAAIAAgaIBgAAIAAgLIhwAAIAAgcIBwAAIAAgKIheAAIAAgYIBeAAIAAgKIhaAAIAAg6IBaAAIAAgKIhrAAIAAgcIBrAAIAAgLIAmAAIAAALIBqAAIAAAcIhqAAIAAAKIBaAAIAAA6IhaAAIAAAKIBcAAIAAAgIATAAIAAAgIgTAAIAAAjIhcAAIAAALQAAAegaAAgAAUA+IA6AAIAAgLIg6AAgAAUAXIA6AAIAAgKIg6AAgAAUgsIA4AAIAAgNIg4AAgAhKgsIA4AAIAAgNIg4AAg");
	this.shape.setTransform(55.4,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfB/IgIgiQAQACAKAAQALAAADgFQAEgFAAgTIAAgDQgnAfhHAYIgSgfQBKgUAxgkIgCgJQgnAahAASIgRgfQBDgMAogZIgFgHQgrASgmAGIgQgdQAwgEAvgSIg5AAIAAgdICbAAIAAAdIgvAAQgHAHgNAHQANAOAIAQQAegMAVgXIAaAWQgOANgRALQAAAGAOAXQAPAXATAOIgVAfQgkgegRg1IgLAGQADAMAAASQAAAggLAOQgLANghAAgABSguIAAghIinAAIAAAhIgkAAIAAg+IBiAAQgDgIgGgJIAngCIAKATIBlAAIAAA+g");
	this.shape_1.setTransform(27.6,27.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,50,99,0.847)").s().p("AmfELIAAoWIM/AAIAAIWg");
	this.shape_2.setTransform(41.6,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16copy, new cjs.Rectangle(0,0,83.3,53.5), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0CBIgGgfIAhABQAIAAgBgHIAAgEIhgAAIAAgaIBgAAIAAgLIhwAAIAAgcIBwAAIAAgKIheAAIAAgYIBeAAIAAgKIhaAAIAAg6IBaAAIAAgKIhrAAIAAgcIBrAAIAAgLIAmAAIAAALIBqAAIAAAcIhqAAIAAAKIBaAAIAAA6IhaAAIAAAKIBcAAIAAAgIATAAIAAAgIgTAAIAAAjIhcAAIAAALQAAAegaAAgAAUA+IA6AAIAAgLIg6AAgAAUAXIA6AAIAAgKIg6AAgAAUgsIA4AAIAAgNIg4AAgAhKgsIA4AAIAAgNIg4AAg");
	this.shape.setTransform(55.4,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBhQgXgagIgrIhBAAIAAAxQAogFAYgHIAAAiQg5AOg/AHIgHgkIAagCIAAjMIDLAAIAABZIhHgBIACAdIBWAAIAAAgIhRAAQAEAYAMARQAMASAMAAQAJABABgnIAkAOQgGA9giAAQgdAAgXgagAgBgFIgCgdIg7AAIAAAdIA9AAgAg+hAICDAAIAAgbIiDAAg");
	this.shape_1.setTransform(27.3,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,50,99,0.847)").s().p("AmfELIAAoWIM/AAIAAIWg");
	this.shape_2.setTransform(41.6,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,83.3,53.5), null);


(lib.Symbol13copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHIxIAAxhIaPAAIAARhg");
	mask.setTransform(84,56.1);

	// Layer_2
	this.instance = new lib.p4();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13copy3, new cjs.Rectangle(0,0,168,112.2), null);


(lib.Symbol13copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHIxIAAxhIaPAAIAARhg");
	mask.setTransform(84,56.1);

	// Layer_2
	this.instance = new lib.p3();
	this.instance.parent = this;

	this.instance_1 = new lib.p3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(194,14);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13copy2, new cjs.Rectangle(0,0,168,112.2), null);


(lib.Symbol13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHIxIAAxhIaPAAIAARhg");
	mask.setTransform(84,56.1);

	// Layer_2
	this.instance = new lib.p2();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13copy, new cjs.Rectangle(0,0,168,112.2), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtHIxIAAxhIaPAAIAARhg");
	mask.setTransform(84,56.1);

	// Layer_2
	this.instance = new lib.p1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,168,112.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Ah5CBIAAhlIBKAAIAABjIgeAAIAAgNIgPAAIAAAPgAhcBYIAPAAIAAghIgPAAgABDBrQgOAKgRAHIgQgZQAWgGAOgKQgHgPgBgVIgcAAIAAAKQAPgCAHgDIAAAXQgJADgNACIAAAQQAAAfgXAAIgdAAIgFgdIATAAQAIAAAAgGIAAgJIgdADIgFgZIASgBIAQgBIAAgMIghAAIAAgbIAhAAIAAgIIgYACIgJgXIACAAQAtAAAcgIIALAUQgLAEgMACIAAAMIAaAAIgBgjIAfAAIAAARIAAASIAfAAQgJgHgUgKIAMgRQAPAGASAJIgLATIAPAAIAAAaIgcAAIgUAAQAAAIADAKQAJgGAIgMIAUAPQgLAQgPAMQAAAIAGAAQAFAAAFgSIAVAPQgMAhgVAAQgTAAgLgVgABPAvIAUAAQgIAMgJAGQgDgKAAgIgAh5AMIAAgbIBKAAIAAAbgAgpgRIAAgbIA/AAIAAgJIgzAAIAAgUIAzAAIAAgIIg5AAIAAgZIAcAAIgMgQIAfgGQAMANAFAJIAWAAQAKgJAGgNIAjAGIgMAQIAdAAIAAAZIg+AAIAAAIIA1AAIAAAUIg1AAIAAAJIBEAAIAAAbgAh5gcIAAgcIBKAAIAAAcgAiChEIAAgdIAeAAQgFgPgIgMIAkgEQAJAQADAPIAXAAIAAAdg");
	this.shape.setTransform(87.3,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag5CAIgGgiIAjABQAJAAAAgKIAAgIIhZAAIAAgdIBZAAIAAgQIhtAAIAAgfIBtAAIAAgOIhWAAIAAgdIARAAQgFgOgMgSIAYgLIgfABIgIghIAkAAQBwAABIgKIAOAeIgkAEIAbAJQgKAagMAQIAVAAIAAArIAZAAIAAAfIgZAAIAAAtIhYAAIAAASQAAAhgcAAgAAQAwIA1AAIAAgQIg1AAgAAQABIA1AAIAAgOIg1AAgABLgqIgbgMQARgTAGgTIhGAFQAOASAJAPIgZAMIBMAAgAgKgqQgFgNgNgWIAYgKIgmACIgfAAQAMAPAIAQIgaAMIBFAAIAAAAg");
	this.shape_1.setTransform(59.1,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAKCBIAAgjIhDAAIAAgfIBDAAIAAgQIg3AAIAAgbIA3AAIAAgOIgzAAIAAgbIAzAAIAAgPIg5AAIAAgdIA5AAIAAgOIgzAAIAAgcIAzAAIAAgVIAkAAIAAAVIBCAAIAAAqIARAAIAAAdIgRAAIAAAqIhCAAIAAAOIA+AAIAAAbIg+AAIAAAQIBOAAIAAAfIhOAAIAAAjgAAugVIAhAAIAAgPIghAAgAAuhBIAhAAIAAgOIghAAgAhlCBIABhYQgGAKgLAKIgLgqQAQgMARgYQARgYAHgSIAYAZQgOAcgHAJIAAB+gAh+g+QAegXARgpIAaASQgZA2gbAWg");
	this.shape_2.setTransform(31.1,16);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("ABTBmQg1AJhNAGIgIglIAKAAIALgBQAageAJgiIgzAAIAAggIBCAAIAAgoIgzAAIAAghIAzAAIAAgmIAkAAIAAAmIA4AAIAAAhIg4AAIAAAoIBKAAIAAAgIhVAAQgOAigUAdIA+gHIgUggIAfgKQAdApAUAqIgiARQgKgbgCAAgAiABmQAfgnAQg0IAgANQgUBAgXAlgAh+glIAWgYQAbAOAYAVIgaAbQgZgYgWgOgAhshkIAUgYQAbAOAYATIgZAdQgVgVgZgRg");
	this.shape_3.setTransform(3.1,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-13,0,116.2,33.9), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003263").s().p("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");
	this.shape.setTransform(86.1,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,172.2,33.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hero();
	this.instance.parent = this;
	this.instance.setTransform(215,11,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(215,11,132,126.7), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bb();
	this.instance.parent = this;
	this.instance.setTransform(-56,0,0.828,0.828);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-56,0,117.7,101.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.earth();
	this.instance.parent = this;
	this.instance.setTransform(-32,29,0.847,0.847);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-32,29,155,160.1), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqDEwIAApfIUHAAIAAJfg");
	mask.setTransform(64.4,35.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D8BF34").ss(1.6,0,0,1).p("ACukvIlbJf");
	this.shape.setTransform(29.1,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D8BF34").ss(0.8,0,0,1).p("ACekTIk7In");
	this.shape_1.setTransform(100,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D8BF34").ss(0.8,0,0,1).p("ACRj7IkhH3");
	this.shape_2.setTransform(97.3,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D8BF34").ss(1.6,0,0,1).p("AC7lDIl1KH");
	this.shape_3.setTransform(32.3,34.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D8BF34").ss(1.6,0,0,1).p("AC+lKIl7KV");
	this.shape_4.setTransform(36.6,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#D8BF34").ss(0.8,0,0,1).p("ACqknIlTJP");
	this.shape_5.setTransform(69,29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#D8BF34").ss(0.8,0,0,1).p("ACWkGIksIN");
	this.shape_6.setTransform(67,26.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(10.7,4.9,106.2,60.9), null);


(lib.Symbol27copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBOQgSgPAAgaQAAghAegMQgZgKAAgaQAAgUANgMQAOgPAaAAQAaAAAPAPQAMAMAAAUQAAAagZAKQAfAMAAAfQAAAagQAPQgRAPgZAAQgZAAgQgNgAgTARQgFAIAAAJQAAAOAIAJQAHAHAJgBQAKABAGgGQAJgHAAgRQAAgLgHgIQgGgJgMABQgNgBgGALgAgQg4QgFAGAAAJQAAAMAJAGQAGADAGAAQAKAAAFgGQAGgGAAgKQAAgKgGgFQgGgGgJAAQgKAAgGAHg");
	this.shape.setTransform(185.6,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BaQACgTALgRQALgRAagYQAUgTAGgHQAJgMAAgMQAAgYgYABQgVAAgCAcIgigEQADgbAPgNQAPgNAZAAQAcAAAQAQQANAOAAAUQAAAVgOASQgIALgTASQgVAUgFAJIBDAAIAAAgg");
	this.shape_1.setTransform(171.8,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBMQgQgNgDgXIAigDQAEAYAVAAQAKAAAHgIQAIgJAAgSQAAgfgaAAQgOAAgMAMIgcgEIARhcIBaAAIAAAgIg/AAIgGAfQAKgGAMAAQAYAAAPARQAQAPAAAbQAAAYgPASQgRAVgcAAQgYAAgQgOg");
	this.shape_2.setTransform(158.7,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpBMQgPgOgCgVIAhgEQABALAGAGQAHAJALAAQAMAAAGgKQAGgJAAgLQAAgLgGgIQgGgJgLAAQgHAAgIACIAEgaQAKAAAIgFQAJgGAAgNQAAgIgFgFQgGgGgIAAQgTAAgDAYIgggGQAKguAtgBQAYABAPAPQANANAAARQAAAZgZAMIAAABQAPADAJALQAJALAAAQQAAAZgRAQQgRAQgZAAQgZAAgQgPg");
	this.shape_3.setTransform(144.9,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiBYQABgnAQgpQAPgkAWgbIhOAAIAAggIB1AAIAAAYQgZAYgRAqQgSAtABAog");
	this.shape_4.setTransform(125.3,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAJBaIAAgkIhJAAIAAgfIBNhwIAdAAIAABwIAXAAIAAAfIgXAAIAAAkgAgfAXIAoAAIAAg8IAAAAg");
	this.shape_5.setTransform(111.7,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAFBaIAAiBQgSATgZAHIAAgeQALgFALgIQAUgOAHgTIAcAAIAACzg");
	this.shape_6.setTransform(97.2,14.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAFBaIAAiBQgSATgZAHIAAgeQALgFALgIQAUgOAHgTIAcAAIAACzg");
	this.shape_7.setTransform(83.6,14.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBIQgIgLgCgOIAigEQACAUARAAQAQAAAGgSQAEgKABgWIAAAAQgMAOgSAAQgWAAgPgQQgQgPABgaQAAgbAPgRQAQgQAZgBQAoABAPApQAGATAAAeQABAegJAVQgPAogoAAQgcAAgOgTgAgZgeQAAAKADAJQAGAOAOAAQAHAAAHgEQAKgIAAgSQAAgOgIgLQgHgKgKAAQgWAAAAAgg");
	this.shape_8.setTransform(64.8,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpBMQgPgOgCgVIAhgEQABALAGAGQAHAJALAAQAMAAAGgKQAGgJAAgLQAAgLgGgIQgGgJgLAAQgHAAgIACIAEgaQAKAAAIgFQAJgGAAgNQAAgIgFgFQgGgGgIAAQgTAAgDAYIgggGQAKguAtgBQAYABAPAPQANANAAARQAAAZgZAMIAAABQAPADAJALQAJALAAAQQAAAZgRAQQgRAQgZAAQgZAAgQgPg");
	this.shape_9.setTransform(51.4,14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAFBaIAAiBQgSATgZAHIAAgeQALgFALgIQAUgOAHgTIAcAAIAACzg");
	this.shape_10.setTransform(36.9,14.5);

	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(12.1,14.7,1,1,0,0,0,12.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.847)").s().p("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");
	this.shape_11.setTransform(97.7,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27copy, new cjs.Rectangle(0,0,194.4,30.7), null);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBYQABgnAQgpQAPgkAWgbIhOAAIAAggIB1AAIAAAYQgZAYgRAqQgSAtABAog");
	this.shape.setTransform(138.8,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgxA2QgIgTAAgjQAAhbA5AAQA6AAAABbQAABcg6gBQgkAAgNglgAgQgwQgFANAAAjQAAAjAFAPQAFANALAAQANAAAEgOQAFgOAAgjQAAgjgFgNQgEgOgNAAQgLAAgFAOg");
	this.shape_1.setTransform(125.2,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBYQABgnAQgpQAPgkAWgbIhOAAIAAggIB1AAIAAAYQgZAYgRAqQgSAtABAog");
	this.shape_2.setTransform(111.7,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0AyQgHgTAAgeQAAgeAJgVQAPgoAogBQAcAAAOAUQAHAKACAPIghAEQgCgUgSAAQgPAAgGASQgDAKgDAWIABAAQAMgPATAAQAWABAPAPQAPAQAAAaQAAAagQASQgQAQgaAAQgoAAgOgpgAgKABQgKAJAAASQAAAOAGAKQAHALALAAQAWAAAAggQAAgLgDgHQgGgOgPgBQgHABgFACg");
	this.shape_3.setTransform(98.3,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxA2QgIgTAAgjQAAhbA5AAQA6AAAABbQAABcg6gBQgkAAgNglgAgQgwQgFANAAAjQAAAjAFAPQAFANALAAQANAAAEgOQAFgOAAgjQAAgjgFgNQgEgOgNAAQgLAAgFAOg");
	this.shape_4.setTransform(78.5,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0AyQgHgTAAgeQAAgeAIgVQAQgoAogBQAcAAAOAUQAHAKACAPIghAEQgCgUgSAAQgOAAgHASQgEAKgCAWIABAAQAMgPATAAQAVABAQAPQAPAQAAAaQAAAagQASQgQAQgaAAQgnAAgPgpgAgKABQgKAJAAASQAAAOAGAKQAHALALAAQAWAAAAggQAAgLgDgHQgGgOgPgBQgGABgGACg");
	this.shape_5.setTransform(65.1,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxA2QgIgTAAgjQAAhbA5AAQA6AAAABbQAABcg6gBQgkAAgNglgAgQgwQgFANAAAjQAAAjAFAPQAFANALAAQANAAAEgOQAFgOAAgjQAAgjgFgNQgEgOgNAAQgLAAgFAOg");
	this.shape_6.setTransform(51.4,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBIQgIgLgCgOIAigEQACAUARAAQAQAAAGgSQAEgKABgWIAAAAQgMAOgSAAQgWAAgQgQQgPgPABgaQAAgbAPgRQAQgQAZgBQApABAOApQAGATAAAeQABAegJAVQgPAogoAAQgcAAgOgTgAgZgeQAAAKADAJQAGAOAOAAQAHAAAHgEQAJgIABgSQAAgOgIgLQgHgKgKAAQgWAAAAAgg");
	this.shape_7.setTransform(37.7,14.7);

	this.instance = new lib.Symbol26();
	this.instance.parent = this;
	this.instance.setTransform(12.1,14.7,1,1,0,0,0,12.1,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.847)").s().p("AoyB4QgDgBAAgDQgEgGAHgEQAfgLARgbQATgbgBghQAAgcgPgaQgQgZgbgOQgHgEAEgGQADgGAHACQAfAQARAdQASAdAAAhQABAlgVAfQgUAegjAOIgDABIgDgBgApCBnQgSgBgSgJQgQgKgHgNQgQglAAgpQAAgpAQgmQAHgNAQgKQASgJASgBIABAAQAJAAAAAJIAAArQAAAJgKAAIgXAAQgFAAgCAFQgHAZAAAVQAAAWAHAXQACAGAFAAIAXAAQAKAAAAAJIAAAqQAAAJgJAAgApIA5IAAAgQAAAFADAAQAFAAgBgFIAAggQABgEgFAAQgDAAAAAEgAp0hTQgNAdgDAjQAAAFAEAAQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAgBQACghAMgdQACgDgEgCIAAAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAABAAAAgApIhpIAAAhQAAABAAAAQAAABAAABQABAAAAAAQABAAABAAQAFAAgBgDIAAghQABgEgFAAQgDAAAAAEgAHfA2QgJgUABgiQAAhbA6AAQA6AAAABbQAABbg6AAQglAAgNglgAH/gxQgEAOAAAjQAAAjAEAOQAGAOAMAAQAMAAAFgOQAFgOAAgjQAAgjgFgOQgFgNgMAAQgMAAgGANgADPAyQgIgTABgeQAAgfAIgVQAPgoAqAAQAcAAANAUQAIAKACAPIgiAEQgCgUgRAAQgQAAgHASQgDAKgCAVIABABQAMgPATAAQAWAAAPAQQAPAQAAAaQAAAagQARQgPARgaAAQgpAAgOgpgAD4ABQgKAIAAATQAAAOAHAKQAGALANAAQAWAAgBggQAAgLgDgIQgFgOgPAAQgIAAgGADgAALA2QgIgUAAgiQAAhbA6AAQA7AAAABbQAABbg7AAQglAAgNglgAAsgxQgEAOgBAjQABAjAEAOQAFAOAMAAQANAAAEgOQAGgOAAgjQAAgjgGgOQgEgNgNAAQgMAAgFANgAh8AyQgIgTABgeQAAgfAIgVQAPgoAqAAQAcAAANAUQAIAKACAPIgiAEQgCgUgRAAQgQAAgHASQgDAKgCAVIABABQAMgPATAAQAWAAAPAQQAPAQAAAaQAAAagQARQgPARgaAAQgpAAgOgpgAhTABQgJAIgBATQAAAOAHAKQAGALANAAQAWAAgBggQAAgLgDgIQgFgOgPAAQgIAAgGADgAkDA2QgIgUAAgiQAAhbA6AAQA7AAAABbQAABbg7AAQglAAgNglgAjigxQgEAOAAAjQAAAjAEAOQAFAOAMAAQANAAAEgOQAGgOAAgjQAAgjgGgOQgEgNgNAAQgMAAgFANgAmIBIQgIgLgCgOIAhgEQACAUASAAQAQAAAGgSQAFgKABgWIAAgBQgNAPgTAAQgWAAgPgQQgPgPAAgaQAAgbAPgRQAQgRAaAAQApAAAPApQAGAUAAAeQAAAegIAVQgQAogpAAQgbAAgOgTgAl0geQAAAKAEAIQAFAOAPAAQAHAAAHgDQAKgIAAgSQAAgOgHgLQgHgKgLAAQgXAAAAAggAJ2BYQABgnAQgpQAOgkAYgbIhPAAIAAggIB1AAIAAAYQgYAYgSAqQgSAtAAAogAFnBYQABgnAQgpQAPgkAXgbIhPAAIAAggIB2AAIAAAYQgZAYgSAqQgSAtAAAogArABIQgSgdgBgjQABghARgdQATgdAegQQAIgDADAHQACAGgGAEQgbAOgPAYQgRAaAAAdQAAAdARAcQAEAGgHAEIgEABQgDAAgDgEg");
	this.shape_8.setTransform(74.4,16.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,147.6,30.7), null);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_139 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(139).call(this.frame_139).wait(1));

	// Layer_1
	this.instance = new lib.Symbol29();
	this.instance.parent = this;
	this.instance.setTransform(433.6,13.9,1.08,1.08,0,0,0,388.6,93.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:93.9,scaleX:1,scaleY:1,y:14},139,cjs.Ease.quadOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.2,-69,642.7,166);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer_6
	this.instance = new lib.Symbol28();
	this.instance.parent = this;
	this.instance.setTransform(742.3,45.1,0.83,0.83,0,0,0,42.2,42.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).wait(1).to({regX:42.3,regY:42.2,x:742.2,y:45,alpha:0.003},0).wait(1).to({x:741.6,alpha:0.013},0).wait(1).to({x:740.5,alpha:0.032},0).wait(1).to({x:738.6,alpha:0.064},0).wait(1).to({x:735.5,alpha:0.115},0).wait(1).to({x:730.7,alpha:0.195},0).wait(1).to({x:722.9,alpha:0.326},0).wait(1).to({x:710.7,alpha:0.528},0).wait(1).to({x:699,alpha:0.724},0).wait(1).to({x:691.7,alpha:0.845},0).wait(1).to({x:687.4,alpha:0.917},0).wait(1).to({x:684.9,alpha:0.959},0).wait(1).to({x:683.4,alpha:0.984},0).wait(1).to({x:682.6,alpha:0.996},0).wait(1).to({regX:42.2,regY:42.3,x:682.3,y:45.1,alpha:1},0).wait(55));

	// Layer_5
	this.instance_1 = new lib.Symbol27copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(453.7,68.5,1,1,0,0,0,73.8,15.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({_off:false},0).wait(1).to({regX:96.7,regY:15.4,x:476.4,y:68.6,alpha:0.003},0).wait(1).to({x:475.8,alpha:0.013},0).wait(1).to({x:474.7,alpha:0.032},0).wait(1).to({x:472.8,alpha:0.064},0).wait(1).to({x:469.7,alpha:0.115},0).wait(1).to({x:464.9,alpha:0.195},0).wait(1).to({x:457.1,alpha:0.326},0).wait(1).to({x:444.9,alpha:0.528},0).wait(1).to({x:433.2,alpha:0.724},0).wait(1).to({x:425.9,alpha:0.845},0).wait(1).to({x:421.6,alpha:0.917},0).wait(1).to({x:419.1,alpha:0.959},0).wait(1).to({x:417.6,alpha:0.984},0).wait(1).to({x:416.8,alpha:0.996},0).wait(1).to({regX:73.8,regY:15.3,x:393.7,y:68.5,alpha:1},0).wait(59));

	// Layer_3
	this.instance_2 = new lib.Symbol27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(295.7,68.5,1,1,0,0,0,73.8,15.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).wait(1).to({regX:73.3,regY:15.4,x:295,y:68.6,alpha:0.003},0).wait(1).to({x:294.4,alpha:0.013},0).wait(1).to({x:293.3,alpha:0.032},0).wait(1).to({x:291.4,alpha:0.064},0).wait(1).to({x:288.3,alpha:0.115},0).wait(1).to({x:283.5,alpha:0.195},0).wait(1).to({x:275.7,alpha:0.326},0).wait(1).to({x:263.5,alpha:0.528},0).wait(1).to({x:251.8,alpha:0.724},0).wait(1).to({x:244.5,alpha:0.845},0).wait(1).to({x:240.2,alpha:0.917},0).wait(1).to({x:237.7,alpha:0.959},0).wait(1).to({x:236.2,alpha:0.984},0).wait(1).to({x:235.4,alpha:0.996},0).wait(1).to({regX:73.8,regY:15.3,x:235.7,y:68.5,alpha:1},0).wait(63));

	// Layer_2
	this.instance_3 = new lib.Symbol25();
	this.instance_3.parent = this;
	this.instance_3.setTransform(342.7,30.9,1,1,0,0,0,124.1,20.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(1).to({regX:125.3,regY:20.2,x:343.7,y:30.4,alpha:0.003},0).wait(1).to({x:343.1,alpha:0.013},0).wait(1).to({x:341.9,alpha:0.032},0).wait(1).to({x:340,alpha:0.064},0).wait(1).to({x:337,alpha:0.115},0).wait(1).to({x:332.2,alpha:0.195},0).wait(1).to({x:324.3,alpha:0.326},0).wait(1).to({x:312.2,alpha:0.528},0).wait(1).to({x:300.4,alpha:0.724},0).wait(1).to({x:293.1,alpha:0.845},0).wait(1).to({x:288.9,alpha:0.917},0).wait(1).to({x:286.3,alpha:0.959},0).wait(1).to({x:284.8,alpha:0.984},0).wait(1).to({x:284.1,alpha:0.996},0).wait(1).to({regX:124.1,regY:20.7,x:282.7,y:30.9,alpha:1},0).wait(78));

	// Layer_1
	this.instance_4 = new lib.Symbol24();
	this.instance_4.parent = this;
	this.instance_4.setTransform(168,293.5,1,1,0,0,0,168,126.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:433.5,regY:13.9,x:433.5,y:180.4},0).wait(1).to({y:178.8},0).wait(1).to({y:175.6},0).wait(1).to({y:170.2},0).wait(1).to({y:161.4},0).wait(1).to({y:146.9},0).wait(1).to({y:122.2},0).wait(1).to({y:90.1},0).wait(1).to({y:67.6},0).wait(1).to({y:54.9},0).wait(1).to({y:47.6},0).wait(1).to({y:43.5},0).wait(1).to({y:41.5},0).wait(1).to({regX:168,regY:126.5,x:168,y:153.5},0).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112.2,98,642.7,166);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.Symbol20();
	this.instance.parent = this;
	this.instance.setTransform(3.8,14,0.499,0.499,-76.9,0,0,0.7,13.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({regX:0.8,regY:14,scaleX:1,scaleY:1,rotation:5},6,cjs.Ease.quartOut).to({rotation:0},2).wait(10));

	// Layer_2
	this.instance_1 = new lib.Symbol19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17.8,28.3,0.06,0.06,0,0,0,17.5,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:17.8,regY:7.2,scaleX:1,scaleY:1,y:28.2},12,cjs.Ease.backOut).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.5,35.5);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_6 = new cjs.Graphics().p("AmfEMIAAoXIM/AAIAAIXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_graphics_6,x:541.2,y:-51.2}).wait(19));

	// Symbol 16 copy
	this.instance = new lib.Symbol16copy();
	this.instance.parent = this;
	this.instance.setTransform(457.7,-51.2,1,1,0,0,0,41.6,26.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(1).to({x:457.9},0).wait(1).to({x:458.9},0).wait(1).to({x:460.8},0).wait(1).to({x:464},0).wait(1).to({x:469.3},0).wait(1).to({x:477.9},0).wait(1).to({x:492.7},0).wait(1).to({x:511.8},0).wait(1).to({x:525.2},0).wait(1).to({x:532.8},0).wait(1).to({x:537.1},0).wait(1).to({x:539.6},0).wait(1).to({x:540.8},0).wait(1).to({x:541.2},0).wait(5));

	// Layer_9 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_4 = new cjs.Graphics().p("AmfEMIAAoXIM/AAIAAIXg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_4,x:457.9,y:-51.2}).wait(21));

	// Symbol 16 copy 3
	this.instance_1 = new lib.Symbol16copy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(541.4,-51.2,1,1,0,0,0,41.6,26.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({x:541.1},0).wait(1).to({x:540.1},0).wait(1).to({x:538.2},0).wait(1).to({x:535},0).wait(1).to({x:529.8},0).wait(1).to({x:521.1},0).wait(1).to({x:506.4},0).wait(1).to({x:487.2},0).wait(1).to({x:473.8},0).wait(1).to({x:466.3},0).wait(1).to({x:461.9},0).wait(1).to({x:459.5},0).wait(1).to({x:458.3},0).wait(1).to({x:457.9},0).wait(7));

	// Layer_7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_2 = new cjs.Graphics().p("AmfEMIAAoXIM/AAIAAIXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_2_graphics_2,x:249,y:-51.2}).wait(23));

	// Symbol 16 copy 2
	this.instance_2 = new lib.Symbol16copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(165.5,-51.2,1,1,0,0,0,41.6,26.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({x:165.8},0).wait(1).to({x:166.8},0).wait(1).to({x:168.7},0).wait(1).to({x:171.9},0).wait(1).to({x:177.1},0).wait(1).to({x:185.8},0).wait(1).to({x:200.5},0).wait(1).to({x:219.7},0).wait(1).to({x:233.1},0).wait(1).to({x:240.6},0).wait(1).to({x:245},0).wait(1).to({x:247.4},0).wait(1).to({x:248.6},0).wait(1).to({x:249},0).wait(9));

	// Layer_6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AmfEMIAAoXIM/AAIAAIXg");
	mask_3.setTransform(165.8,-51.2);

	// Symbol 16
	this.instance_3 = new lib.Symbol16();
	this.instance_3.parent = this;
	this.instance_3.setTransform(249.3,-51.2,1,1,0,0,0,41.6,26.8);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:249},0).wait(1).to({x:248},0).wait(1).to({x:246.1},0).wait(1).to({x:242.9},0).wait(1).to({x:237.6},0).wait(1).to({x:229},0).wait(1).to({x:214.2},0).wait(1).to({x:195.1},0).wait(1).to({x:181.7},0).wait(1).to({x:174.1},0).wait(1).to({x:169.8},0).wait(1).to({x:167.3},0).wait(1).to({x:166.1},0).wait(1).to({x:165.8},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		this.stop();
		this.parent.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// Layer_10
	this.instance = new lib.Symbol18();
	this.instance.parent = this;
	this.instance.setTransform(438.8,17.8,1,1,0,0,0,17.8,17.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(101));

	// Layer_6
	this.instance_1 = new lib.Symbol17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,94.1,1,1,0,0,0,83.2,53.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(121));

	// Layer_11
	this.instance_2 = new lib.Symbol21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(438.6,-8.6,5,5,0,0,0,58.1,16.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,y:-8.4},15,cjs.Ease.backOut).wait(121));

	// Symbol 13 copy 3
	this.instance_3 = new lib.Symbol13copy3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(657.5,88.9,0.87,0.87,0,0,0,84.1,56.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(1).to({regX:84,x:657.4,y:88.5},0).wait(1).to({y:87.3},0).wait(1).to({y:85.1},0).wait(1).to({y:81.2},0).wait(1).to({y:74.9},0).wait(1).to({y:64.6},0).wait(1).to({y:47},0).wait(1).to({y:24},0).wait(1).to({y:8},0).wait(1).to({y:-1.1},0).wait(1).to({y:-6.3},0).wait(1).to({y:-9.2},0).wait(1).to({y:-10.7},0).wait(1).to({regX:84.1,x:657.5,y:-11.1},0).wait(130));

	// Symbol 13 copy 2
	this.instance_4 = new lib.Symbol13copy2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(511.3,-111.1,0.87,0.87,0,0,0,84,56.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).wait(1).to({y:-110.8},0).wait(1).to({y:-109.6},0).wait(1).to({y:-107.3},0).wait(1).to({y:-103.5},0).wait(1).to({y:-97.2},0).wait(1).to({y:-86.8},0).wait(1).to({y:-69.2},0).wait(1).to({y:-46.2},0).wait(1).to({y:-30.2},0).wait(1).to({y:-21.1},0).wait(1).to({y:-15.9},0).wait(1).to({y:-13},0).wait(1).to({y:-11.5},0).wait(1).to({y:-11.1},0).wait(132));

	// Symbol 13 copy
	this.instance_5 = new lib.Symbol13copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(365.2,88.9,0.87,0.87,0,0,0,84.1,56.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).wait(1).to({regX:84,x:365.1,y:88.5},0).wait(1).to({y:87.3},0).wait(1).to({y:85.1},0).wait(1).to({y:81.2},0).wait(1).to({y:74.9},0).wait(1).to({y:64.6},0).wait(1).to({y:47},0).wait(1).to({y:24},0).wait(1).to({y:8},0).wait(1).to({y:-1.1},0).wait(1).to({y:-6.3},0).wait(1).to({y:-9.2},0).wait(1).to({y:-10.7},0).wait(1).to({regX:84.1,x:365.2,y:-11.1},0).wait(134));

	// Symbol 13
	this.instance_6 = new lib.Symbol13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(219,-111.1,0.87,0.87,0,0,0,84,56.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:-110.8},0).wait(1).to({y:-109.6},0).wait(1).to({y:-107.3},0).wait(1).to({y:-103.5},0).wait(1).to({y:-97.2},0).wait(1).to({y:-86.8},0).wait(1).to({y:-69.2},0).wait(1).to({y:-46.2},0).wait(1).to({y:-30.2},0).wait(1).to({y:-21.1},0).wait(1).to({y:-15.9},0).wait(1).to({y:-13},0).wait(1).to({y:-11.5},0).wait(1).to({y:-11.1},0).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146,-159.9,146.2,98.3);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// Layer_2
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(311.1,47.9,1,1,0,0,0,58.1,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:45.2,regY:16,x:297.7,y:47},0).wait(1).to({x:296.3},0).wait(1).to({x:293.6},0).wait(1).to({x:289.2},0).wait(1).to({x:282.1},0).wait(1).to({x:270.9},0).wait(1).to({x:252.5},0).wait(1).to({x:224.2},0).wait(1).to({x:196.8},0).wait(1).to({x:179.8},0).wait(1).to({x:169.8},0).wait(1).to({x:163.9},0).wait(1).to({x:160.4},0).wait(1).to({x:158.7},0).wait(1).to({regX:58.1,regY:16.9,x:171.1,y:47.9},0).to({x:161.1},134).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-193.9,16.9,1,1,0,0,0,86.1,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:15.9,x:-193,y:15.9},0).wait(1).to({x:-190.2},0).wait(1).to({x:-184.8},0).wait(1).to({x:-175.9},0).wait(1).to({x:-161.8},0).wait(1).to({x:-139.3},0).wait(1).to({x:-102.6},0).wait(1).to({x:-46},0).wait(1).to({x:8.8},0).wait(1).to({x:42.8},0).wait(1).to({x:62.8},0).wait(1).to({x:74.7},0).wait(1).to({x:81.6},0).wait(1).to({x:85.1},0).wait(1).to({regY:16.9,x:86.1,y:16.9},0).to({x:96.1},134).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.8,3,633,61.9);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_114 = function() {
		this.parent.play();
	}
	this.frame_134 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(114).call(this.frame_114).wait(20).call(this.frame_134).wait(1));

	// Layer_3
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(651.8,69.5,1,1,0,0,0,86.5,83);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(1).to({regX:281,regY:74.3,x:845.7,y:60.8},0).wait(1).to({x:843.7},0).wait(1).to({x:839.9},0).wait(1).to({x:833.5},0).wait(1).to({x:823.4},0).wait(1).to({x:807.4},0).wait(1).to({x:781.1},0).wait(1).to({x:740.7},0).wait(1).to({x:701.5},0).wait(1).to({x:677.3},0).wait(1).to({x:663},0).wait(1).to({x:654.5},0).wait(1).to({x:649.5},0).wait(1).to({x:647},0).wait(1).to({regX:86.5,regY:83,x:451.8,y:69.5},0).to({x:448.8},113).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(134.3,69.5,1,1,0,0,0,71,61);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:2.8,regY:50.5,x:66.7,y:59},0).wait(1).to({x:68.8},0).wait(1).to({x:72.9},0).wait(1).to({x:79.6},0).wait(1).to({x:90.2},0).wait(1).to({x:107},0).wait(1).to({x:134.5},0).wait(1).to({x:177},0).wait(1).to({x:218.1},0).wait(1).to({x:243.6},0).wait(1).to({x:258.6},0).wait(1).to({x:267.5},0).wait(1).to({x:272.7},0).wait(1).to({x:275.3},0).wait(1).to({regX:71,regY:61,x:344.3,y:69.5},0).to({x:348.3},116).wait(1));

	// Layer_1
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(110.8,34,1,1,0,0,0,91.5,94.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:45.5,regY:109,x:65.2,y:48.5},0).wait(1).to({x:66.5},0).wait(1).to({x:69},0).wait(1).to({x:73.1},0).wait(1).to({x:79.7},0).wait(1).to({x:90.1},0).wait(1).to({x:107.2},0).wait(1).to({x:133.4},0).wait(1).to({x:158.9},0).wait(1).to({x:174.7},0).wait(1).to({x:183.9},0).wait(1).to({x:189.5},0).wait(1).to({x:192.7},0).wait(1).to({x:194.3},0).wait(1).to({regX:91.5,regY:94.5,x:240.8,y:34},0).to({x:250.8},119).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(455.3,46.6,1,1,0,0,0,114.5,32.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(114));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.7,-31.5,155,160.1);


(lib.Symbol2dddf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8BF34").s().p("AgFAJIhSAVIBSgiIABhgIAKBcIBSgVIhSAiIgBBgg");
	this.shape.setTransform(175.4,-27.8,1.223,1.223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8BF34").s().p("AgNAFIhhhYIBuBDIBiiKIhTCWIBgBYIhuhDIhhCKg");
	this.shape_1.setTransform(175.4,-27.8,1.223,1.223);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#182653").s().p("AjQEwIA+pfIA2AAIg5IXIEvoXIA3AAIlbJfg");
	this.shape_2.setTransform(225.9,29,1.223,1.223);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#182653").s().p("AjQEwIA+pfIA2AAIg5IXIEvoXIA3AAIlbJfg");
	this.shape_3.setTransform(189,29,1.223,1.223);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#182653").s().p("AhQDOIAqmcIB3AAIgrGZIAAADg");
	this.shape_4.setTransform(116.4,40.9,1.223,1.223);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(181,28.2,1.223,1.223,0,0,0,64.3,34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#182653").s().p("AgYAiQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIABgPIAAgDIAFAAIAAAEQAAAHABABQABACAGACQAGADAGAAQAHAAAFgFQAEgDAAgGQAAgFgCgDQgDgDgIgBQgPgDgEgCQgFgCgCgDQgDgEAAgGQAAgKAIgGQAHgGAMAAQAMAAAJAEIgBARIgEAAQAAgGgCgCQgBgDgFgCQgFgDgEAAQgGAAgFAEQgEADAAAGQAAAEADADQAFADAMADQAMACACACQAEABACADQACAFAAAEQAAAKgJAIQgHAHgPAAQgIAAgMgDg");
	this.shape_5.setTransform(323.4,158.8,0.956,0.956);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#182653").s().p("AAGAwQgGAAgDgCQgEgBgCgEQgBgDAAgGIAAgqIgLAAIAAgDIALgFIAAgXIALgGIACABIgBAcIAVgBIgBAIIgUAAIAAArQACAEACABQACACADAAIAFgBIADgCIADACIgHAJIgFABg");
	this.shape_6.setTransform(318,157.7,0.956,0.956);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#182653").s().p("AASAkIABgmQAAgKgCgEQgCgFgDgCQgGgDgFAAQgFAAgGAEQgGAFAAADIgBAOIAAAaQAAABABAAQAAABAAABQAAAAAAABQAAAAAAAAQADACADAAIAGAAIAAAEIgnAAIAAgEIAGAAQAGAAABgDQABgDAAgbIgBgTIgBgEQgBgBgFAAIgGAAIAAgEIAMgCIAMgEIABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIAAANIALgKIAEgCIAJgCQAJAAAFADQAGADADAGQACAEAAAMIAAAXQAAAMABACQACACAEAAIAEAAIAAAEg");
	this.shape_7.setTransform(311.3,158.7,0.956,0.956);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#182653").s().p("AgWAbQgKgJABgRQgBgLAGgKQADgFAKgGQAJgFAIAAQANAAAIAIQAHAIABAOIAAAEIgKACIgoAAQAAAOAIAIQAHAHAKAAQAGAAAEgBIALgGIABABIgCAHQgFADgIACQgGACgIAAQgOAAgJgKgAgLgYQgGAGAAANIAjAAIAAgFQABgGgDgGQgCgEgEgCQgEgDgGAAQgHAAgEAHg");
	this.shape_8.setTransform(303.5,158.8,0.956,0.956);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#182653").s().p("AAGAwQgGAAgDgCQgDgBgCgEQgCgEAAgFIAAgqIgMAAIAAgDIAMgFIAAgXIALgGIACABIgBAcIAVgBIgBAIIgUAAIAAAdIABAOQABAEACABQADACACAAIAFgBIAEgCIACACIgHAJIgFABg");
	this.shape_9.setTransform(297.7,157.7,0.956,0.956);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#182653").s().p("AgcAgQgFgEAAgJQAAgHADgGQAEgFAHgCQAJgDAVgEQAAgKgFgEQgEgGgJAAIgGABIgHACIgDAKIgFgBIAAgKIAIgEIAKgFIAJgBQAJAAAHAFQAGAEACAHIABAaQgBATABADQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAGAAIAAAFIgXAAIAAgNIgOAMIgFACIgFABQgKAAgFgFgAgOAEQgGADAAAJQAAAFADAEQADADAFAAQAFAAAFgDQAFgDAFgGIAAgQIAAgEQgUAEgFAEg");
	this.shape_10.setTransform(291.6,158.8,0.956,0.956);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#182653").s().p("AgrA1IAAgEIAHAAIAGgBIACgFIAAhMQAAgKgCgCQgBgCgIAAIgEAAIAAgFIA0AAQASAAAIAGQAJAHAAALQAAAJgFAHQgFAHgIAFQgJADgKAAIgKgBIgCgFQAFACAFAAQAKAAAHgGQAGgGAAgLQAAgLgHgGQgGgGgNAAQgGAAgJADIAABBQAAAWABADQABADAIAAIAEAAIAAAEg");
	this.shape_11.setTransform(283.5,157.1,0.956,0.956);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#182653").s().p("AAIArQgIAGgHADQgFADgKAAQgOAAgIgJQgJgJAAgMQAAgMAGgIQAFgFAMgHQgEgLAAgIQAAgHACgEQAAgCAEgEQAKgIACgBQACgCAFAAQAHAAACAEQAEAEAAAHQAAAPgVAPQAMAWASARQAFgGABgEIABgJQAAgFgBgEIgDgCIgMAAIAAAAIAEgHIAtAAIgCAJIgWgBIABAGQAAAGgDAHQgDAGgGAHQAJAHAFABQAIADAFAAQADAAAFgEIABAEIgNAKQgCABgEAAQgMAAgPgMgAglAIQgDAFAAAGQAAALAHAIQAHAIALAAQAJAAAKgHQgQgQgPgZQgHAFgDAFgAgVgrQgCAEAAAHQAAAIAEAKQANgLAAgLQAAgFgCgCQgDgDgDAAQgEAAgDADg");
	this.shape_12.setTransform(269.9,157.1,0.956,0.956);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#182653").s().p("AgYAiQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIABgEIAAgOIAFAAIAAAEIABAIQACACAFACQAHADAFAAQAHAAAFgFQAFgDAAgGQAAgFgDgDQgDgDgIgBIgTgFQgFgCgCgDQgCgDAAgHQAAgKAHgGQAHgGAMAAQAMAAAKAEIgCARIgEAAQAAgGgCgCQgBgDgFgCQgFgDgEAAQgFAAgGAEQgEAEAAAFQAAAEAEADQADADANADQAMACADACQADABACADQACAEAAAFQAAAKgIAIQgJAHgNAAQgIAAgNgDg");
	this.shape_13.setTransform(257.2,158.8,0.956,0.956);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#182653").s().p("AgNASIgBAAIAAAJQAAAUACACQABACAGAAIAFAAIAAAEIgnAAIAAgEIAFAAQAFAAACgCQABgDAAgTIAAgrQAAgZgBgDQgBgCgFAAIgHAAIAAgEQAHAAALgDIAIgDQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgBBEIABAAIAhgcIAPAAIAAAEIgDAAQgCAAgEACQgLAHgPANIAiAiIADACIAEAAIAAAEIgOAFg");
	this.shape_14.setTransform(250.1,156.9,0.956,0.956);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#182653").s().p("AgbAkIAAgEIAHgBQAEAAACgBQABgBAAgGIAAgZQAAgRgBgEQgCgCgFAAIgGAAIAAgEIAOgCIALgEIABAAIAAACIAAAPIAGgHQAEgGAEgCQADgCAFAAIAFABIABABIAAABIgBARIgDAAIgFgFQgBgCgEAAQgEAAgEADQgEAEgBAFQAAAFgBAPIABARQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAAAQADACAFAAIAFAAIAAAEg");
	this.shape_15.setTransform(243,158.7,0.956,0.956);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#182653").s().p("AgcAgQgFgEAAgJQAAgHAEgGQADgFAHgCQAJgDAVgEQAAgJgEgFQgFgGgIAAIgHABIgGACIgEAKIgFgBIAAgKIAIgEIAKgFIAJgBQAJAAAHAFQAGAEACAHIAAAaQAAATABADQABABAAAAQAAAAABABQAAAAABAAQABAAABAAIAFAAIAAAFIgXAAIAAgNIgOAMIgFACIgFABQgJAAgGgFgAgOAEQgGAEAAAIQAAAFADAEQAEADAEAAQAGAAAEgDQAFgDAFgGIAAgUQgSAEgHAEg");
	this.shape_16.setTransform(236.6,158.8,0.956,0.956);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#182653").s().p("AgEA2IgrhYIAAA5QAAAUACACQABADAJAAIADAAIAAAFIgkAAIAAgFIAFAAQAEAAACgCQACgBAAgDIABhBIgBgUQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAQgCgCgFAAIgEAAIAAgFIAcAAIAoBUIASglQALgVALgaIAdAAIAAAFIgFAAQgGAAgCACQgBADAAAOIAAA2QAAARABADQACADAHAAIAEAAIAAAFIgpAAIAAgFIAEAAQAGAAACgDQAAgEABgSIAAg7IgWAsIgUAug");
	this.shape_17.setTransform(225.9,157.2,0.956,0.956);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#182653").s().p("AgWAbQgJgJAAgRQAAgLAFgKQAEgGAJgFQAIgFAJAAQANAAAIAIQAHAIAAAOIAAAEIgJACIgoAAQABAOAGAIQAIAHAKAAIALgBQAHgDADgDIABABIgCAHIgNAFQgGACgIAAQgOAAgJgKgAgMgYQgFAFAAAOIAjAAIAAgFQAAgHgCgFQgCgEgEgCQgFgDgEAAQgIAAgFAHg");
	this.shape_18.setTransform(211.8,158.8,0.956,0.956);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#182653").s().p("AgfAvQgJgJAAgQQAAgKADgHQADgHAFgCIAPgIQAGgEAHAAIAIABIAJAEIAAgcQAAgFgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgHAAIAAgEQAMgBANgFIABABIAABnQACACAEAAIAFABIAAAEIgQAAIgKAAIABgOIgQAOQgFACgFAAQgNAAgIgKgAgVgCQgGAGAAAOQAAANAHAJQAHAIAKAAQAEAAAFgEQAFgDADgFQACgFAAgMIAAgSQgFgEgGgEQgFgDgFAAQgKAAgGAIg");
	this.shape_19.setTransform(203.9,156.9,0.956,0.956);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#182653").s().p("AgcAgQgFgEAAgJQAAgHAEgGQADgFAHgCQAJgDAVgEQAAgKgEgEQgFgGgJAAIgHABIgFACIgEAKIgEgBIAAgKIAIgEIAKgFIAIgBQAKAAAGAFQAGAEABAHIACAaQAAATABADQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAGAAIAAAFIgXAAIAAgNIgPAMIgEACIgGABQgIAAgGgFgAgPAEQgFAEAAAIQAAAFADAEQAFADAEAAQAEAAAFgDQAFgDAFgGIAAgUQgTAEgHAEg");
	this.shape_20.setTransform(195.8,158.8,0.956,0.956);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#182653").s().p("AgbAkIAAgEIAIgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAIACgHIAAgZQAAgSgBgDQgBgCgFAAIgHAAIAAgEIANgCIAKgEIACAAIABAAIABACIgBAPIAGgHQAEgGAEgCQADgCAEAAQAFAAACABIABABIAAABQgCAGAAALIgDAAQgCgEgCgBQgCgCgEAAQgEAAgEADQgEADgBAGQAAADAAARIAAARIABADQAEACAEAAIAFAAIAAAEg");
	this.shape_21.setTransform(189.1,158.7,0.956,0.956);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#182653").s().p("AgVA1IAAgEIAFAAQAFAAACgCQACgBAAgEIAAhXIgIAAQgTAAgBABQgCABAAAFIgBAKIgFAAIgBgYIBYAAIgBAYIgFAAIgBgJIgBgHIgEgBIgYAAIgBBBQAAAZABABQABADAHAAIAGAAIAAAEg");
	this.shape_22.setTransform(181.8,157.1,0.956,0.956);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#182653").s().p("AgbAkIAAgEIAIgBQADAAACgBQABgBAAgGIAAgZQAAgSgBgDQgBgCgFAAIgHAAIAAgEIANgCQAHgCAEgCIABAAIABAAIABACIgBAPIAGgHQAEgGAEgCQADgCAEAAQAFAAACABIABABIAAABIgCARIgDAAQgCgEgCgBQgCgCgEAAQgEAAgEADQgEAEgBAFQAAAFAAAPIAAARQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQADACAFAAIAFAAIAAAEg");
	this.shape_23.setTransform(170.6,158.7,0.956,0.956);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#182653").s().p("AgaAbQgKgKAAgRQAAgKAGgIQAEgJAJgEQAIgFAKAAQARAAAJAJQAJAKAAAQQAAARgMALQgLAKgPAAQgQAAgIgKgAgLgcQgFADgDAFQgCAHAAAIQgBAPAHALQAGALALAAQAJAAAFgHQAHgHAAgOQgBgJgDgKQgDgIgGgEQgGgEgFAAQgFAAgFADg");
	this.shape_24.setTransform(163.8,158.8,0.956,0.956);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#182653").s().p("AgmA1IAAgEIAFAAQAHAAABgDQACgCAAgQIAAg3QAAgPgCgDQgBgCgHAAIgFAAIAAgFIBNAAQgCAJgBAOIgFAAQAAgIgCgGQgKgDgKAAIgRABIgBAqIAJAAIATgBIADgBIACgGIABgFIAEAAIAAAiIgFAAIAAgGQAAgHgDgBQgDgCgRAAIgKAAIAAAaQAAAQACACQACADAFAAIAFAAIAAAEg");
	this.shape_25.setTransform(155.7,157.1,0.956,0.956);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#182653").s().p("AgYAiQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAgCIABgEIAAgOIAFAAIAAAEIABAIIAHAEQAHADAFAAQAHAAAFgFQAFgDAAgGQAAgFgDgDQgDgDgIgBQgPgDgEgCQgEgBgDgEQgCgEAAgGQAAgKAHgGQAHgGAMAAQAMAAAJAEIgBARIgEAAQAAgGgCgCQgBgDgFgCQgFgDgEAAQgFAAgGAEQgEAEAAAFQAAAEAEADQADADANADQAMACADACQADABACADQACAEAAAFQAAAKgIAIQgJAHgOAAQgIAAgMgDg");
	this.shape_26.setTransform(144.9,158.8,0.956,0.956);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#182653").s().p("AAFAwQgFAAgDgCQgDgBgDgEQgBgDAAgGIAAgqIgMAAIAAgDIAMgFIgBgXIAMgGIACABIgBAcIAVgBIgBAIIgUAAIAAArQABAEACABIAGACIAEgBIAFgCIACACIgIAJIgEABg");
	this.shape_27.setTransform(139.5,157.7,0.956,0.956);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#182653").s().p("AARAkQACgOAAgYQAAgJgCgFQgCgEgEgDQgEgDgGAAQgGAAgFAEQgFAEgCAEIAAAoQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQADACADAAIAGAAIAAAEIgnAAIAAgEIAFAAQAGAAABgDQABgBAAgdIAAgTIgBgEQgCgBgFAAIgFAAIAAgEIAMgCIAMgEQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAANIAMgKIAEgCIAJgCQAIAAAGADQAGAEACAFQADAFAAALIAAAXQAAALABADQABACAEAAIAFAAIAAAEg");
	this.shape_28.setTransform(132.8,158.7,0.956,0.956);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#182653").s().p("AgWAbQgKgKAAgQQABgLAFgKQADgGAJgFQAKgFAIAAQANAAAIAIQAHAIAAAOIAAAEIgJACIgoAAQABAOAGAIQAIAHALAAIAKgBIAKgGIABABIgCAHIgNAFQgGACgHAAQgPAAgJgKgAgMgYQgEAFAAAOIAjAAIAAgFQAAgHgDgFQgBgEgEgCQgFgDgFAAQgHAAgGAHg");
	this.shape_29.setTransform(124.9,158.8,0.956,0.956);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#182653").s().p("AgeAzQgIgGAAgLQAAgGAEgGIANgHIgIgEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAIABgGQABgBAEgDIAHgFQgJgDgDgDQgGgHAAgIQAAgHAEgGQAEgGAIgEQAKgFAIAAQAFAAAEACQAFABAEAEIAWgBIAAACIgEAGIgNAAIABAIQAAAGgEAHQgEAGgHAEQgHAEgJAAIgDAAIgGAFIgCADQAAADADABQADACAJAAIAWgBQAHAAACACQADACADAFQACAGAAAFQAAAHgFAJQgFAHgKAFQgJAFgMAAQgPAAgJgHgAgRARQgFAEgCADQgCADAAAHQAAAIAGAFQAFAFALAAQAIAAAGgDQAGgCAEgGQADgFAAgGQAAgFgCgEQgCgDgEgBIgIgBIgQAAQgFAAgDABgAgRgvQgFAFAAAIQAAALAFAFQAFAGAHAAQAGAAAFgFQAEgFAAgJQAAgJgFgGQgEgFgHAAQgHAAgEAEg");
	this.shape_30.setTransform(117.6,160.8,0.956,0.956);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#182653").s().p("AAQA2IAAgFIAHgBQAEAAABgBIABgCIgCgHIgIgUIgqAAIgGAMIgFAPIABACIAMACIAAAFIgjAAIAAgFIACAAIAHgBIADgFIALgXIAghJIAEAAIArBiIADADIAIABIAAAFgAgVALIAlAAIgSgsg");
	this.shape_31.setTransform(107.6,157.1,0.956,0.956);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#182653").s().p("AgPATQAHgJADgJQADgIABgJIAPgEIACACIgKASQgFAJgHAJIgGADg");
	this.shape_32.setTransform(96.2,162.2,0.956,0.956);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#182653").s().p("AgYAiIgCgBIAAgCIABgEIAAgOIAFAAIAAAEIABAIQACACAGACQAGADAFAAQAHAAAFgFQAFgDAAgGQAAgEgDgEQgDgDgIgBQgOgDgFgCQgFgCgCgDQgCgEAAgGQAAgKAHgGQAHgGANAAQALAAAKAEIgBARIgFAAIgBgIQgCgDgFgCQgFgDgEAAQgGAAgEAEQgEADAAAGQAAAEADADQADADAOADQAMACACACQADABACADQACAEAAAFQAAALgIAHQgIAHgOAAQgIAAgNgDg");
	this.shape_33.setTransform(91.4,158.8,0.956,0.956);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#182653").s().p("AgbAkIAAgEIAIgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAQACgBAAgGIAAgZQAAgSgBgDQgBgCgFAAIgHAAIAAgEIANgCQAHgCAEgCIABAAIABAAIABACIgBAPQADgDADgEQAEgGAEgCQADgCAEAAQAFAAACABIABABIAAABQgCAGAAALIgDAAQgCgEgCgBQgCgCgEAAQgEAAgEADQgEADgBAGIAAAUIAAARIABADQAEACAEAAIAFAAIAAAEg");
	this.shape_34.setTransform(85.4,158.7,0.956,0.956);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#182653").s().p("AgaAbQgJgKAAgRQAAgKAEgIQAFgJAJgEQAIgFALAAQAPAAAKAJQAKAKAAAQQAAARgNALQgLAKgPAAQgPAAgJgKgAgMgcQgEADgCAFQgEAHAAAIQAAAPAHALQAHALAKAAQAJAAAGgHQAFgGAAgPQAAgKgDgJQgEgJgEgDQgHgEgFAAQgGAAgFADg");
	this.shape_35.setTransform(78.6,158.8,0.956,0.956);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#182653").s().p("AAFAwQgFAAgDgCQgDgBgDgEQgBgDAAgGIAAgqIgMAAIAAgDIAMgFIgBgXIAMgGIACABIgBAcIAVgBIgBAIIgUAAIAAArQABAEACABIAGACIAEgBIAFgCIACACIgIAJIgEABg");
	this.shape_36.setTransform(72.3,157.7,0.956,0.956);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#182653").s().p("AgSA1IAAgEIAGgBQAFAAAAgCQABgBAAgGIAAgrQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIgFgBIgGAAIAAgFIANgCIALgEIABABIAAA9IABADIALADIAAAEgAgFglQgDgDAAgDQAAgEADgCQACgDADAAQACAAAEADQACACAAAEQAAADgCADQgEACgCAAQgDAAgCgCg");
	this.shape_37.setTransform(67.7,157.1,0.956,0.956);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#182653").s().p("AgMAhQgIgFgFgHQgDgJAAgKQAAgJACgHQAFgIAEgDIAPgIQAEgDAJAAIAJABIAJADIgCAUIgEAAIAAgEQAAgFgBgBQgCgDgFgBQgEgCgGAAQgJAAgGAGQgGAFAAANQABAPAHAKQAIAIAKAAIAJgBIAIgDIACACIgDAEIgKAFIgLABQgLAAgGgEg");
	this.shape_38.setTransform(62.2,158.8,0.956,0.956);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#182653").s().p("AgSA1IAAgEIAHgBQABAAAAAAQABAAABgBQAAAAABAAQAAAAAAgBIABgHIAAgrIgBgDIgFgBIgGAAIAAgFIANgCIALgEIACABIgBA9QAAABAAAAQAAABAAAAQABABAAAAQAAAAABAAIAKADIAAAEgAgFglQgCgCgBgEQABgEACgCQACgDADAAQADAAADADQACACAAAEQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_39.setTransform(56.9,157.1,0.956,0.956);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#182653").s().p("AgSA4IAAgEIAHgBQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgCAAgYIAAg+QAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgBgEAAIgHAAIAAgEQAPgBAKgFIABABIgBBNQAAAYABACQAAACAEAAIAGABIAAAEg");
	this.shape_40.setTransform(52.6,156.8,0.956,0.956);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#182653").s().p("AgaAbQgJgKAAgRQAAgKAEgIQAFgJAJgEQAJgFAJAAQARAAAJAJQAKAKAAAQQgBARgMALQgLAKgPAAQgPAAgJgKgAgLgcQgFADgCAFQgDAHgBAIQAAAPAHALQAGALALAAQAJAAAGgHQAFgGAAgPQAAgKgDgJQgEgJgFgDQgFgEgGAAQgGAAgEADg");
	this.shape_41.setTransform(46.5,158.8,0.956,0.956);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#182653").s().p("AgVA2QgIgCgHgDIABgXIAFAAIAAAEQAAAHABACQABACADACIAJAEQAGACAHAAQAMAAAJgHQAHgHAAgKQAAgFgCgFQgEgFgEgBQgEgCgMgBQgRgCgGgCQgGgCgEgGQgDgHAAgHQAAgPAKgJQAMgKARAAQAIAAAHACIAPAFQgCAHAAAOIgGAAIAAgGQAAgGgBgCQgCgDgGgCQgIgCgGAAQgLAAgHAGQgHAGAAAJQAAAGADAFQADAEAEACQAEACAPABQAPACAGACQAFACAEAFQADAGAAAHQAAAPgMALQgNALgUAAg");
	this.shape_42.setTransform(38.6,157.1,0.956,0.956);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#182653").s().p("AgcBMQgLgDgIgEQACgKAAgWIAGAAIAAAFQAAALABACQAAACAFADQAFAEAHACQAHACAJAAQARAAALgJQAKgKAAgOQgBgJgDgFQgDgGgGgDQgHgDgPgCQgVgBgIgEQgIgDgFgIQgEgIAAgNQAAgUANgOQAOgNAXAAQALAAAJADQALACAIAFQgDAKAAATIgGAAIAAgJQAAgIgCgDQgCgCgJgEQgKgEgIAAQgOAAgJAJQgKAJABANQgBAJAEAFQADAGAHADQAGADATACQATACAHADQAIAEADAHQAFAHAAALQAAAVgQAQQgQAQgbAAQgKAAgIgCg");
	this.shape_43.setTransform(321.9,137.1,0.881,0.881);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#182653").s().p("AAwBLIgLABIgigzIgUgbIABgDIAJAAQAPABAJgKQAJgJAAgPQAAgOgHgIQgJgIgNAAQgJAAgLAFIgBBWQAAAmABAEQACAEAJAAIAHAAIAAAHIg4AAIAAgHIAHAAQAIAAACgEQACgDAAgnIAAgyQAAgfgCgGQgCgDgKgBIgFAAIAAgHIBAAAQAQAAAJAEQAJADAFAIQAEAIAAAKQAAAPgKAMQgKAMgSADIAqA8QAEAHACABIAEABIACAAIAAAHg");
	this.shape_44.setTransform(312.2,137.1,0.881,0.881);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#182653").s().p("AgyBMIAAgHIADAAQAIgBACgBQACgDABgFIAAhvIgBgLIgCgCQgBgBgHgBIgIgBIAAgHIBXAAIASABQgEAKgBAXIgGAAIgBgUQgNgFgPAAIgaABIgBA7IAQABQAXAAADgCQADgCAAgJIAAgHIAGAAIAAAwIgGAAIAAgGQAAgKgDgCQgEgDgWAAIgQABIABA+IAdABIASgBIAKgDIAEgXIAHAAQgCAUAAALIAAAFIgWABg");
	this.shape_45.setTransform(301.3,137.1,0.881,0.881);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#182653").s().p("AAtBKIgEgEIhah6IAABIQAAAdABAGQAAAHACACQABACAIABIAHAAIAAAHIguAAIAAgHIAHAAQAGAAACgCQABgBABgGIABhxQAAgGgCgDIgDgEQgCgBgFAAIgGAAIAAgHIASABIAQgBIBDBdQAQAXAJAKIAAhDQAAgrgBgEQgCgDgJgCIgIAAIAAgHIAvAAIAAAHIgHAAQgJAAgBAGQgBAGAAApIABBdg");
	this.shape_46.setTransform(289.4,137.3,0.881,0.881);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#182653").s().p("AgcBMIAAgHIAIAAQAHAAABgCQACgBABgGIABh+IgKAAQgYAAgCACQgEACAAAHIgBAOIgGAAIgBgiIBxAAIgCAiIgGAAIgCgWIgGgCIgfgBIgBBeQAAAiACADQABAEAJAAIAIAAIAAAHg");
	this.shape_47.setTransform(277.4,137.1,0.881,0.881);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#182653").s().p("AAwBLIgLABIgigzQgHgMgNgPIABgDIAJAAQAPABAJgKQAJgJAAgPQAAgOgHgIQgIgIgOAAQgJAAgLAFIgBBWQAAAmABAEQACAEAJAAIAIAAIAAAHIg5AAIAAgHIAHAAQAJAAABgEQACgDAAgnIAAgyQAAghgDgEQgBgDgKgBIgFAAIAAgHIBAAAQAQAAAKAEQAHADAFAIQAFAIAAAKQAAAOgKANQgKAMgSADIAXAiIASAaIAHAIIADABIADAAIAAAHg");
	this.shape_48.setTransform(266.9,137.1,0.881,0.881);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#182653").s().p("AAVBNIAAgHIAKgBIAGgBIABgDIgDgKIgLgeIg1AAIgHASQgHARAAADQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQABABAGABIAIABIAAAHIgUgBIgZABIAAgHIADAAQAIgBABgBQADgCACgFIAohiQAJgWAFgQIAGAAIA3CLQACAEABAAQACABAHABIAAAHgAgbAQIAwAAIgXg/g");
	this.shape_49.setTransform(254.6,137.1,0.881,0.881);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#182653").s().p("AhKBlIAAgJIAMAAQAIAAACgCQACgCABgHIABiRQAAgSgDgEQgDgEgNAAIgHAAIAAgJIApABIAggBIAQgBQAgAAANAMQAOANAAAVQABAQgJAOQgIAOgOAJQgOAHgSABQgHAAgLgEIgCgJQAKADAIAAQASAAAJgMQAKgLAAgVQABgTgLgMQgLgLgXABQgLgBgPAGIAAB6QAAAsACAEQACAFANAAIAIAAIAAAJg");
	this.shape_50.setTransform(241.7,134.9,0.881,0.881);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#182653").s().p("AAOBPQgOANgMAGQgNAFgNAAQgYAAgPgQQgOgRAAgYQAAgVALgPQAIgLAVgOQgIgVAAgPQAAgLADgJQADgGAFgGQAQgPADgBQAFgDAIgBQALABAFAHQAHAHAAAMQAAAdglAdQAVArAfAfQAIgLACgHQADgJAAgIQAAgKgDgHQgBgCgDgBQgFgBgQAAIgBgCIAIgNIBLAAIgDATQgMgCgYgBIACAMQAAAMgFAMQgFALgMAOQAOAMALADQALAFAKAAQAEAAAKgHIACAHQgQANgGAHIgLABQgUAAgZgYgAhAAOQgFAKAAALQAAAVAMAPQANAPASAAQAQABAQgOQgdgfgYguQgNAKgEAIgAgkhSQgFAHAAAMQAAAOAHAVQAYgUAAgUQAAgJgEgGQgFgFgFAAQgIAAgEAGg");
	this.shape_51.setTransform(222.7,134.9,0.881,0.881);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#182653").s().p("AgiBEQgSgKgJgRQgJgSAAgWQAAgXAKgRQALgTARgJQARgKAaAAIAVACQAKABAOAFIAIADQgCAIgCAXIgGAAIAAgHQAAgJgCgDQgCgDgNgGQgOgFgOAAQgbAAgQARQgQASAAAfQAAAbAPAUQARAXAdAAQAPAAATgHIAAgiIgCgDIgVgCIAAgHIAhABIAQgBIAAAFIgHAFIgCASQAAAMACAKQgMAGgRADQgPAEgQAAQgVAAgRgKg");
	this.shape_52.setTransform(203.3,137.1,0.881,0.881);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#182653").s().p("AAtBKQgCgBgCgDIgWgdIhEhdIABBrQAAAHACACQABACAIABIAGAAIAAAHIgTgBIgaABIAAgHIAGAAQAHAAACgCQACgCAAgFIABhxQAAgGgCgDIgDgEQgDgBgEAAIgGAAIAAgHIASABIAPgBIBdB+IAAhDQAAgrgCgEQAAgDgLgCIgHAAIAAgHIAvAAIAAAHIgHAAQgKAAAAAGQgBAGAAApIABBdg");
	this.shape_53.setTransform(190.1,137.3,0.881,0.881);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#182653").s().p("AgnBEQgPgJgJgSQgJgSAAgXQAAgiAVgVQAUgWAhAAQAhAAATAUQATAUAAAhQAAAigWAYQgWAYggAAQgWAAgOgKgAgcg8QgLAGgHAOQgGAPAAARQAAAZAHAQQAIARAMAKQANAIAPAAQAPAAALgHQALgIAHgPQAGgPAAgVQAAgXgHgOQgHgRgMgHQgNgJgQAAQgPAAgLAIg");
	this.shape_54.setTransform(176.5,137.1,0.881,0.881);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#182653").s().p("AAwBnIgxidIgYA+QgUA3gMAoIgNAAIgjitQgDgPgDgEQgCgCgIAAIgFAAIAAgJIBCAAIAAAJIgIAAQgJAAgDACQgCABAAAEIAAAFIAbCIIA4ifIAIAAIAzCiIAXhZIAMgyIABgFIgCgEIgKgCIgLgBIAAgJIA2AAIAAAJIgHAAQgEAAgCACQgEAFgPA3QgTBDgPBBg");
	this.shape_55.setTransform(158.9,135,0.881,0.881);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#182653").s().p("AgJAMQgFgFAAgHQAAgGAFgFQAEgFAFAAQAGAAAFAFQAEAEAAAHQAAAHgEAFQgFAFgGAAQgFAAgEgFg");
	this.shape_56.setTransform(139.9,142.6,0.881,0.881);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#182653").s().p("AgmBlQgOgEgLgEQACgQABgcIAIAAIAAAHQAAAOACADQABADAEAEQAIAFAJADQALADAKAAQAYAAANgNQANgNgBgSQAAgMgEgHQgFgJgIgDQgHgDgVgDQgdgCgKgFQgKgFgGgLQgGgKAAgRQAAgbASgSQASgSAfAAQANAAAMADQAOAEAMAGQgDAOAAAZIgKAAIAAgMQAAgKgCgEQgDgFgMgEQgLgFgMAAQgUAAgLAMQgMAMAAASQAAAJAFAJQAEAJAJADQAKAFAXABQAbADAIAFQAKAFAFAJQAGALAAANQAAAdgWAVQgVAUgiAAQgNAAgNgCg");
	this.shape_57.setTransform(131.6,134.9,0.881,0.881);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#182653").s().p("AgKAMQgEgGAAgGQAAgGAEgFQAFgFAFAAQAGAAAFAFQAEAFAAAGQAAAGgEAGQgFAFgGAAQgFAAgFgFg");
	this.shape_58.setTransform(118.1,142.6,0.881,0.881);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#182653").s().p("ABIBkIgSABIhXhdIgFgEQgDAAAAAFIAAArQAAAfABADQACAFAMABIAJAAIAAAJIhJAAIAAgJIAKAAQALAAACgFQACgGAAgeIAAhdQAAglgCgHQgCgFgLAAIgKAAIAAgJIBJAAIAAAJIgKAAQgIABgCADQgDACAAAGIgBBLIACAAIASgRIA8hFIAAgKIAtAAIAAAJIgHAAQgLAAgFAEQgGADgXAZIgxAxIBfBhIAEAEIAIABIAAAJIgSgBg");
	this.shape_59.setTransform(107.7,134.9,0.881,0.881);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#182653").s().p("AgyBFIADAAQAJAAABgCQADgCAAgGIAAhvIgBgLIgCgCQgCgCgHAAIgHgBIAAgHIBXAAIASABQgEANAAAUIgGAAIgBgUQgNgFgPAAIgaACIgBA6IAPABQAYAAACgCQAEgCAAgJIAAgHIAGAAIAAAwIgGAAIAAgGQAAgKgEgCQgEgDgWAAIgPABIABA+IAcABIASgBIAKgCIAFgYIAGAAIgCAfIAAAFIhmABg");
	this.shape_60.setTransform(90.2,137.1,0.881,0.881);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#182653").s().p("AgbBMIAAgHIAHAAQAIAAACgFQACgEAAgqIAAgjQAAgqgCgFQgBgEgIAAIgIAAIAAgHIAfABIAXgBIAAAHIgHAAQgHAAgCACQgCADAAAGIAABMQAAApABAFQADAEAIAAIAGAAIAAAHg");
	this.shape_61.setTransform(82.6,137.1,0.881,0.881);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#182653").s().p("AgFBNIg3h/IAABSQAAAdACAEQACAEALAAIADAAIAAAGIguAAIAAgGIAHAAQAFAAADgCQACgDABgFIAAh5QgBgEgCgCQgCgCgIAAIgFAAIAAgGIAVABIAQgBIAzB4IAzh4IAmAAIAAAGIgHAAQgIAAgCAEQgCADAAAUIAABOQAAAaACAEQACAEAJAAIAGAAIAAAGIg2AAIAAgGIAGAAQAIAAABgEQACgDAAgdIAAhWIgcBBQgUAugFATg");
	this.shape_62.setTransform(72,137.2,0.881,0.881);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#182653").s().p("AgGBNIgUgxIgihOIAABSQAAAdACAEQACAEALAAIADAAIAAAGIguAAIAAgGIAHAAQAGAAACgCQACgCABgGIABhcQAAgYgBgFQAAgEgDgCQgCgCgIAAIgFAAIAAgGIAVABIAQgBIAzB4IAzh4IAmAAIAAAGIgHAAQgIAAgCAEQgCADAAAUIAABOQAAAaACAEQACAEAJAAIAGAAIAAAGIg2AAIAAgGIAGAAQAIAAABgEQACgDAAgdIAAhWIgcBBQgOAfgMAig");
	this.shape_63.setTransform(56.1,137.2,0.881,0.881);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#182653").s().p("AgbBMIAAgHIAGAAQAJAAACgFQACgFAAgpIAAgjQAAgqgCgFQgBgEgIAAIgIAAIAAgHIAfABIAYgBIAAAHIgIAAQgGAAgDACIgCAJIAABMQAAAoACAGQABAEAJAAIAHAAIAAAHg");
	this.shape_64.setTransform(45.4,137.1,0.881,0.881);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#182653").s().p("AgpCAIAAgXIADgBQAHAFAHAAQAKAAAEgIQAEgIAAghIAAh5QAAgugCgGQgCgFgOgBIgIAAIAAgJIBKAAIAAAJIgJABQgKABgCACQgCACgBACQgBAGAAATIAAB4QAAAggDAMQgFAVgPAOQgPAPgNABg");
	this.shape_65.setTransform(38.8,137.4,0.881,0.881);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#043361").s().p("AhFApIAAgDQBHgwANgWQAJgPAXANQAXAOgBAJQAAAGgEAEIgMAHIgNAHIgEACIgDgCIANgLQgQALgWAKQgnASgeAAIgIAAg");
	this.shape_66.setTransform(192.1,83.5,0.835,0.835);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#043361").s().p("ABFDTQgTgEgFgUQADg2AAg9IAAg9QgLALgJAOQgJANAAABQgTAUgSgSQgSgSAJgXIAthbIAXgtQgHgBgHAFQgGADgDgBQgDgCgGAGIgJAJIgJAOQgHAKgDANQgGAUgGAJQACAPgBASQgBAQgDAIIgIARQACAQgDAQIgCAPQgSAagTAEQgUAEgNgYIAEAgQAAAVgUACQgSAAgNgeQgLhiAEhGQABhKACgFQgBgbAQACQARACAMAMQANAOAEAKQADAJgJAKQgJAdACBFQABA+ACAMIAPgOQAIgGAOgTQgJABgLgFQgLgEgCgKQgHgVAFgHQAIgJABACQAEAAAJgHQALgIACAAQARgJAIACQAJACACACQAGgJASgtQAGgNALgUIAKgTIgBgNQABgFAJgGIAMgKQAHgHAEAAIAegQQANgIAIAAQAQgFAPAHQAPAIAJAIQAQAZgLALIgfAZQgLAGAIgHIAGgJQgNAHgIAHQgLAGAAABIgOAQQgHAHASAKIAKgJQAJgGACAAQAMgHATAJQATALAFAMQAHARgBAOIgJBFQgIA0gYACQgVAAgUgHIAABsQAAAfgSAAIgCAAgAB0hVQgHADgRASQgDAoADAmQAPAAADgOIALhLQACgLgEAAIgDABg");
	this.shape_67.setTransform(199.7,100.5,0.835,0.835);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#043361").s().p("AgiBDQgPgJgCgKQgDgJAJgLQAKgGAMgSQAJgRACgBQgNABgIgJIgFgEQgCgBACgEQgHgSAQgJQAQgLAOgCQAbgCANAQIAJAOQADAGgBAIQgDAMgKAMQgJAJgHgBQgFAWgSARIgiAdIgCABQgCAAAEgFg");
	this.shape_68.setTransform(194.5,92.3,0.835,0.835);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#043361").s().p("ABKCXQgWAAgIgeQACggAAgzIACg5QgeARgXADQgYADgEgbQAAgWAGAAQAEgCABACQADgUAFgYQAFgYACgCIgcAfQgSAVgGALIAABFQgBAngRgEQgSgDgMgVIgSgYIgIgMIAEAvQgEAZgUADQgUACgIgeQgGghgBgeQgCgiACgCQABgqAcAUQAeAWAAAXIAAALIApgpIAAg/QAFgaAWAPQAVANgLANIgEAPQAdghAhgMQAggNABAYQgBAMgIASQgIAUgFAYIAagLQAIgQAMAAQAOAAAHAFQAQgIAPgFQAMgDABABQAVgLAUAYIAUAYIgmALQgXADgSAHQgTAHAAACQgEAqAEAuQAEAsAEAXQgEAagUAAIgCAAgAhggEQgBAEAJACIAAgVQgIAJAAAGg");
	this.shape_69.setTransform(312.6,105.5,0.835,0.835);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#043361").s().p("AhKBFQAUgVAZgSQAUgPAFgBQglAGgXAUQgaASgYgPQgYgRgRgZQgRgZAjAGQBcgiBZgPQBXgNAUAcQAcApgwAGQgwAFgjgEQgoAPguAiQgkAbgCAAIACgDg");
	this.shape_70.setTransform(309.2,88.8,0.835,0.835);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#043361").s().p("AA3DLQgQgNgJgNQgNgLgIgKQgJgGAEgOQgPAIgHAHQgHAFAAACQgWAPAAgSQAAgTAPgLIBBhDQgdAPgXAAQgZAAAPgaQAGgTAZgKQAagOAugiQgMACgMAAIgNACQgaAhgbASQgbASgegLQgRgLAEAiQACAdAAA8QAHAWgJAHQgLAIgYgPQgQgMgKgFIgLgFQghgEAWgeIA3hZQgkAdgSASQgWAUgJglQgFgQAKgFIAVgFQAUgZANgPQANgSACAAQgTgcAGgHQAGgKAHAAQAKgPAFgNIAEgNQgPAAgRgUQgSgWAUgJQAYgOARgOQAOgPAaAUQAXALADAPQAEARgaAJQgJAQgNAKQgMAJgKANQAfACAGANQAFANgNANIgHATQAGAAADgIQACgJAWANQAPALgGANQgEAMgBABQAOgIAKgMQALgNABAAQgdgRgFgPQgIgNAcgLQgVgYATgUQARgUARgkQAMgWAUAJQAVAHgEAcQAHgFAJgKQAMgJAQANQAUARgQASQgSASgTAkQAUACAUgCIAVgEIAUAEQAnAFAEAZQADAYgxACIgmAHQgSAEgeAWQAMgEAMACQANACAPAKQAeATgJANIgNAUQgNAXgIAhQgHAegVAkQgKAVgJAAQgEAAgDgCgABgAgQgHADAAABQgIAPgWAcQgUAcggAZQAFALAVAEQATAFALgMQAIgIAMghIAVg7QgCgIgEAAIgCAAgAiBBlQgLAaAEAJIAUAAQALAAACgHIAAhZgAh0gUQgSALgVAbIAjgYQAVgNAEAAQAFgMAEgGIAEgGIgiAXgAhSgEQAAAFABACIAEgKIADgEQgIADAAAEgAAchxQgLANgXAPQAMACALgCIANAAQAdgwAEgPQgWASgNARg");
	this.shape_71.setTransform(273.4,101,0.835,0.835);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#043361").s().p("AgjDfQgegRAPgFQAPgGAagCIAAhDQgOAIgTAAQgTAAgLgTQgPgaAUAAQAWAAAkgOIAEgLIgTAJQgJADAQgUQgZAIgPgMQgQgLAXgHQASgKAMgFIAPgEIAAgLQgiAMgYAOQgcARgSgNQgZgRAkgLQAkgKAqgnQAAgTAJgJIAJgJIAAgHQgSAAgLgMQgNgLAQgDIAVgKIAIgCIAAgWQgfAIgUAJQgSAHAAACIgCAPIgCAEIAYALQANAGAHAfQACASgUAIQgUAHgGgaQgGgVAAgIQAAgJgFgKQgJAKgZgOQgYgNgJgNQghgiANgEQALgGANAAIBBgRQArgLArgFQgSgUAIgGQAGgEATACQAYgCAJAGQAJAFgFALIAsgDQAFgGAIgCIAGgDIAdAOQAlAegQALQgTAKgcgDQgrgBgVAFQgbAEgBAPQAIABASgFQARgEAFAAQAPgFAQAQQARAPglATQgNABgHAEQgKAEAAACQAWAGgDALQgCAKgcADQgWAHAAAEIAAALQAZgEATgGQAUgDAVAFQANgHANAaQANAbgUANQgPAIgIAMIgHANQAgAAgIAYQgGAYgZAEQgfAHgSAIQgOAFAAACIAABVQAFAYgUACIgMABQgQAAgXgIgAA3AEQAJAKgWAMIgLAIQgBABAAABQAAAAAAABQAAAAAAABQAAAAABAAIgEAWQAIgEAJgCIAJgCIAag2QAMgaADAAQAFgNgYALQgWAKgWAHIgEAOQAHgBAGAAQAJAAAGAEgAgSgiQgEAGgJAHIAQgHIAKgIIgHgBQgFAAgBADg");
	this.shape_72.setTransform(237.6,98.8,0.835,0.835);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#043361").s().p("AgQApIAEhYQACgbAMAMQAPAPAAAPIAABGQAAAUgPAHIgEABQgKAAgEgZg");
	this.shape_73.setTransform(151.2,107.2,0.835,0.835);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#043361").s().p("AAeDSIAAhdIgYAEQgNABgOgYQgKgOARgGQAQgGAUgSQgWgFgEgMQgEgMAmgaQgWAFgOgKQgQgLAMgKIAigYQAOgJgEgLQgrAVgSAMQgOAMgYgXQgGAPgcAsIgpA7QgUAWgUgSQgUgRAMgYQAXgmAYggIAYghQgNgCgTgPQgUgPAPgbQAZgfATgRQAVgPABAAQAYgRAPAjQAPAlgRAPQgKAGgKAJQgKAGgHAJQgBAHAMAGQALAFAEALQArgXAbgKQAfgLACAAQAAgQgLADQgNADgGgUQgJgdAJgGQAJgFAVgIQACgKgEgIQgDgKABgFQgBgLAYADQAaAEAHAeQACAEAUADQATAEAdAwQAkAWgGANQgFANgVAEQgMACgMAAQgLAAgCAFQAHARgSALQgQAJgkAaIAUgFIAKgCQAUgCAJARQAIAPgiAKQgWAIgFAFQgIAHAGAGQABADAPgFIArgNQAlgGAJAaQAIAYgvAIQgaAEgYAHQgQAFAAACIAABoQgEAUgRACQgSAAgCgSgAA/hOQgBAFABACQAEAAACgGIACgFIgCAAQgEAAgCAEgABKiMQgJADACASIAWgEQAHgJAEgNQAFgMACgCIghATg");
	this.shape_74.setTransform(159.7,99,0.835,0.835);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#043361").s().p("AAUCyIgbANQgQAIALgKQAHgEAMgMQAIgJABAAQgKgSgEgbQgDgaAkgWQAAgJAHACQAIAAAHADIArgcQAPgJANAEQAOAPgdAwQgeAughARQAWAWAsgnQAtgnAShOQgFgLgcAIIgsAHQgKAHgJAEQgHAEAAgHQghAJgbAPQgZAPAAgNQgIAPgKAHQgNAHAFALQAggPADATQADAQgPAOIhBAjQgaANgGgTQgHgaARgHQAOgJAcgkQgOAGgOALQgOALgCgnQACgSAHACQAIAEABABQAZgLAFgGQAFgFgBgPIg6AgQgYALgEggQgMALgGAMQgHAIAAADQgOALgQgCQgSAAAKgYQAeg3AchEQAfhPATgiQAQgRAiARQAhAQgcAkQgJAHgFAPQgGAMgCAKQAigHAJAJQALALgYANQgEAFAAAGQgCAGACABQANAMgCANQgBALgOAMIAAAdQAOgFADACQAGABAAACQAKgRALgOQAKgMABAAQgCgXAEghQAEghgCgLQgRAJgHgJQgHgNgJgJQgHgXAiAKQAjAJAAASIAPAKQALAHAHACIAIg0QgYACgVgWQgUgXARgBQAngGAYgCQAWgCASAYQAAARgNAEQgPAEgJAYQgFAoAAAjQAAAmgCATQAjgHAcAFQAeAEALAUQAJBJg9A7QglAigmAAQgbAAgcgSgAAwBZQgKAPgSAXQACAKAFAGIAIAGQAPgNAWggIAlg3QgyAYgLAQgAA7gIQgGAEAAACQgDAGACAIQABAHgDAEQAEgCAJAAIAJgCIAAgogAhAggQgOAMgIAOIAQgNQAPgLANgGIAAgOQgGAGgQAMgAhagaQgIALAAACQASgPAIgNQAKgNgKAAQgIAQgKAMgAAygvQAHgIAEgIIAEgGQgJgFgEgEIgCgBg");
	this.shape_75.setTransform(120.7,100.1,0.835,0.835);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#043361").s().p("AhwDLQgBgVAHgDIALgNIAHgIQgSAIgWgJQgYgLAbgLQAVgPAUgLIAWgLIAGgPQAAgGgCgFQghAPgcASQgcAQAAADQgQAUgNgNQgPgMAAgDQgNgSAFgGQAJgEAGgBQAsgUAogMIAqgNQgGgWAIgCQAHgEANAGQgLgYgFgTIgGgXQgGgQAOgEIASgJQgfgcAHgGQAHgHAVAAIAHgIQgTgBgSgPQgSgQAdgMIAegHIgEgPIgDgEQgGgYAYAEQAZAEAPAQIAdAAQAagDgBAUQgEASgcAKIgGAJIgBAFQAWgBgCAOQgDAPgRAJQgOADgKAHQgNAGAAADQARgNAVACQAXAAgGAWQACAKgEAHIgNAQQAQAAgDAKIgCAJQAMAGAAAHIAAAIIAwgGQAjgUAWAiIAVAhIg0gPQgqgGgZAEQgWAEAAACQgRAHgWARQgWARgBADQAOAAABANIAGAVQAfghAigMQAhgMANAbQAMAWgMARQgLASgHAGQApAEgEASQgGARgNAFIhIAKQgWABgGgZIgEAAIAAAWQgHgHgLgTIgOAUIgEAKQgVAHgGgUQgIgVARAIQAJgOAGghIADgjQgOAFgKAPQgLAOgCAHQgHAdgRAXIgQAWQgKAHgFAAQgIAAgCgNgAAmB8QgOAJAEAJQAEAKACAJQATAAAMgIQANgHALglQgKADgOgBQgNAAgOANgAgNAzQgLAEAAACQAHAGgCAFQgCAFAAADIATgVQAEgIACgBgAAGAQQgVAGgJAJIA2gPIAFgQQgKALgTAFgAgchCQgIAEAAACIAPAOQAJAJAGARQAGgEACgFQAEgGACAAQgOgNgJAAQgJAAAHgFIAHgLQgFgEgGAAIgHACg");
	this.shape_76.setTransform(82.7,100.1,0.835,0.835);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#043361").s().p("AhYDaQgcgsAIgGQAHgHAYARIATgKIAKgFQgOABgLghQgLgiAAgmQABgPAPgPIAVgSQgdAKgdASQgeAQgBAEQgVAJgLgDIgJgGQgRgPAGgDQAGgGAFgCQAhgSAngSQAkgPADAAQgEgNAAgQQgBgTABAAQgTgGgOgUQgPgUAagCIATgIIAAgWQACgqASAQQARAOAPAQQARgFANgGIAVgIIADglQgaAAANgOQALgNAVABQAbAKAGAUQAFAUgFAKQAnAZgLARQgLAPgcAJIgLAlQAWgDATAAQAQgCACACQAWgRAZAnIAWAlIg9gPIg/ALQgmAHgHADIAAAIQAvgMASAIQAUAIAAADQATAagPAgQgPAfgSATQAJAPgNAFIgaAJQgoAKgcALQgYAJgDgLQgSASgDAVQgCAKgHAAQgEAAgHgFgAgiBEQgKAEAAACQgBAEAAALQAAAKAMAbQAIABAEgDIADgCIgDgaQgeACAJgJQAJgKAPgJIgDgHIgNAFgAAaBzIAEgEIgIgHgAA5AfQgXAEgMAGIAAAOQAPADAFAIQAGALgPAXIAEAEQAagZAJgSIAJgUQAAgLgPAAIgJABgAgvAcQgTAKAAADIACALQAAAEACADQANgNAPgLIAQgJIAAgLQgNAAgQANgAgHhCQgHACAAACIgEAaQAMAAAIgKQAHgHACgRIgSAEg");
	this.shape_77.setTransform(45.4,99.3,0.835,0.835);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#043361").s().p("AgHAaQgLgSABgCQgIgRgHgMQgGgPAKAAQAhAGAUAaQATAbgRAPQgJADgGAAQgNAAgGgNg");
	this.shape_78.setTransform(54.3,114.9,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2dddf, new cjs.Rectangle(29.5,-46.7,299,213.1), null);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol2dddf();
	this.instance.parent = this;
	this.instance.setTransform(90.7,44.4,0.37,0.37,0,0,0,226.9,56.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArYHCIAAuDIWxAAIAAODg");
	this.shape.setTransform(72.9,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(0,0,145.9,90), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol52();
	this.instance.parent = this;
	this.instance.setTransform(168,25.9,1,1,0,0,0,168,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,145.9,90), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(89));

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(168,25.9,1,1,0,0,0,168,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// Layer_9
	this.instance_1 = new lib.Symbol22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(168,140,1,1,0,0,0,168,140);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).wait(89));

	// Layer_8
	this.instance_2 = new lib.Symbol14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(84,111.8,1,1,0,0,0,84,56.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(90));

	// Layer_5
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(168,140,1,1,0,0,0,168,140);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).wait(91));

	// Layer_6
	this.instance_4 = new lib.newbg1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-33,0.751,0.751);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-33,728,187.7);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(168,25.9,1,1,0,0,0,168,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,12,728,187.7);
// library properties:
lib.properties = {
	id: '79F3F76BD30246DE8C72979E02B775CF',
	width: 728,
	height: 90,
	fps: 35,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bb.png?1548127358721", id:"bb"},
		{src:"images/earth.png?1548127358721", id:"earth"},
		{src:"images/hammer1.png?1548127358721", id:"hammer1"},
		{src:"images/hammer2.png?1548127358721", id:"hammer2"},
		{src:"images/hero.png?1548127358721", id:"hero"},
		{src:"images/newbg1.jpg?1548127358721", id:"newbg1"},
		{src:"images/newbg2.jpg?1548127358721", id:"newbg2"},
		{src:"images/p1.jpg?1548127358721", id:"p1"},
		{src:"images/p2.jpg?1548127358721", id:"p2"},
		{src:"images/p3.jpg?1548127358721", id:"p3"},
		{src:"images/p4.jpg?1548127358721", id:"p4"},
		{src:"images/wechat.jpg?1548127358721", id:"wechat"}
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
an.compositions['79F3F76BD30246DE8C72979E02B775CF'] = {
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