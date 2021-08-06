(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bm13 = function() {
	this.initialize(img.bm13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.bm23 = function() {
	this.initialize(img.bm23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.bm23_1 = function() {
	this.initialize(img.bm23_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,310,310);


(lib.f1 = function() {
	this.initialize(img.f1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,308);


(lib.f3 = function() {
	this.initialize(img.f3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,308);


(lib.sh1 = function() {
	this.initialize(img.sh1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,102);


(lib.sh2 = function() {
	this.initialize(img.sh2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,103);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ83ÐºÐ¾Ð¿Ð¸Ñ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08296C").s().p("ApDAIIAAgPISHAAIAAAPg");
	this.shape.setTransform(160.5,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Ð¡Ð»Ð¾Ð¹ 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08296C").s().p("AgmAoQgJgKAAgUIAAg8IAbAAIAAA3QAAALAFAGQAFAFAKAAQAFAAAFgDQAFgEADgFQADgGAAgHIAAg0IAbAAIAABjIgaAAIAAgJIgFAAQgFAGgHACQgGADgJAAQgSAAgKgLg");
	this.shape_1.setTransform(213.7,-40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#08296C").s().p("AghAyIAAhjIAaAAIAAALIAFAAQADgFAHgDQAHgDAJAAIAKAAIAAAZIgKAAQgPAAgIAIQgHAHAAAPIAAAsg");
	this.shape_2.setTransform(204.4,-40.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08296C").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_3.setTransform(197.5,-37.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#08296C").s().p("AghAyIAAhjIAaAAIAAALIAFAAQADgFAHgDQAHgDAJAAIAKAAIAAAZIgKAAQgPAAgIAIQgHAHAAAPIAAAsg");
	this.shape_4.setTransform(191.4,-40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#08296C").s().p("AgSAxQgKgEgHgHQgGgHgEgKQgEgJABgMQgBgLAEgKQAEgKAGgGQAHgIAKgDQAJgDAKgBQALAAAJAEQAJADAGAHQAHAGADAIQAEAJAAALIAAAHIhHAAQAAAOAGAGQAHAHAKAAQAPAAAEgLIAcAAQgEAQgLAJQgNAJgTAAQgLgBgJgDgAAWgOQgCgIgFgFQgFgEgJAAQgIAAgFAEQgGAFgCAIIAqAAIAAAAg");
	this.shape_5.setTransform(181.5,-40.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08296C").s().p("AAWBAQgTAAgJgHQgKgHAAgRIAAguIgPAAIAAgWIAPAAIAAgcIAaAAIAAAcIAWAAIAAAWIgWAAIAAArQAAALANAAIAJAAIAAAXg");
	this.shape_6.setTransform(172.2,-42.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#08296C").s().p("AAVAzIAAg4QAAgKgFgGQgFgFgJAAQgHAAgEADQgFAEgDAFQgDAGAAAHIAAA0IgbAAIAAhjIAaAAIAAAJIAFAAQAFgGAGgCQAHgDAJAAQATAAAIAKQAKALAAAUIAAA8g");
	this.shape_7.setTransform(163.1,-41);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#08296C").s().p("AgTAxQgIgEgHgHQgIgHgDgKQgDgJgBgMQABgLADgKQADgKAIgGQAHgIAIgDQAJgDALgBQAMAAAIAEQAJADAGAHQAHAGADAIQADAJAAALIAAAHIhGAAQAAAOAHAGQAFAHALAAQAOAAAFgLIAbAAQgCAQgNAJQgMAJgTAAQgLgBgKgDgAAVgOQgBgIgFgFQgFgEgJAAQgIAAgGAEQgFAFgCAIIApAAIAAAAg");
	this.shape_8.setTransform(151.8,-40.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#08296C").s().p("AgRAxQgJgDgHgIQgHgHgEgKQgDgJAAgMQAAgLADgJQAEgKAHgHQAHgIAJgDQAJgDAKgBQATABAMAIQAMAKACAPIgbAAQgBgFgFgDQgEgDgHAAQgLAAgGAJQgGAHAAANQAAAOAGAHQAGAJALAAQAIAAAEgEQAFgDABgGIAbAAQgCAPgMALQgHAEgHADQgIACgKABQgKgBgJgDg");
	this.shape_9.setTransform(141,-40.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#08296C").s().p("AgmAoQgJgKAAgUIAAg8IAbAAIAAA3QAAALAFAGQAFAFAKAAQAFAAAFgDQAFgEADgFQADgGAAgHIAAg0IAbAAIAABjIgaAAIAAgJIgFAAQgFAGgHACQgGADgJAAQgSAAgKgLg");
	this.shape_10.setTransform(129.8,-40.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#08296C").s().p("AgZAyQgGgCgFgFQgFgFgCgGQgDgFAAgIQAAgGADgGQACgHAFgDQAFgFAIgCQAIgDAKAAIAaAAIAAgDQAAgHgFgEQgEgEgJAAQgHAAgEADQgFACAAAGIgbAAQAAgIADgFQADgGAGgEQAGgEAIgDQAHgCAIAAQAWABAMAIQAMAJAAAUIAABAIgZAAIAAgIIgFAAQgKAKgRABQgJgBgGgCgAgTARQAAAHAFADQAEAEAJAAQAJAAAGgGQAGgGABgJIAAgHIgVAAQgTAAAAAOg");
	this.shape_11.setTransform(118.4,-40.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#08296C").s().p("AgTA8IgFAAIAAAJIgaAAIAAiMIAbAAIAAAyIAFAAQAEgFAIgDQAGgDAJAAQAJAAAIADQAIAEAFAHQAGAIADAJQADAJAAAMQAAALgDAKQgDAJgGAIQgLAOgTAAQgTAAgJgMgAgNgFQgGAEgCAFQgDAHAAAJQAAAIADAHQACAGAGAEQAFAFAIAAQALgBAHgIQAFgIAAgNQAAgOgFgHQgHgIgLgBQgIAAgFAFg");
	this.shape_12.setTransform(107.8,-42.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#08296C").s().p("AgZAyQgGgCgFgFQgFgFgCgGQgDgFAAgIQAAgGADgGQACgHAFgDQAFgFAIgCQAIgDAKAAIAaAAIAAgDQAAgHgFgEQgEgEgJAAQgHAAgEADQgFACAAAGIgbAAQAAgIADgFQADgGAGgEQAGgEAIgDQAHgCAIAAQAWABAMAIQAMAJAAAUIAABAIgZAAIAAgIIgFAAQgKAKgRABQgJgBgGgCgAgTARQAAAHAFADQAEAEAJAAQAJAAAGgGQAGgGABgJIAAgHIgVAAQgTAAAAAOg");
	this.shape_13.setTransform(91.3,-40.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#08296C").s().p("AAVAyIAAgoIgpAAIAAAoIgbAAIAAhjIAbAAIAAAlIApAAIAAglIAbAAIAABjg");
	this.shape_14.setTransform(80.3,-40.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#08296C").s().p("AAVAyIAAgoIgpAAIAAAoIgbAAIAAhjIAbAAIAAAlIApAAIAAglIAbAAIAABjg");
	this.shape_15.setTransform(63.8,-40.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#08296C").s().p("AAWBGIAAg5IgFAAIgmA5IgaAAIAAhjIAaAAIAAA4IAFAAIAmg4IAaAAIAABjgAgYgwQgJgHgBgOIAVAAQAAAFAEAEQADADAGAAQAHAAADgDQAEgDAAgGIAVAAQgBAOgJAHQgJAIgQAAQgPAAgJgIg");
	this.shape_16.setTransform(52,-42.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#08296C").s().p("AgZAyQgGgCgFgFQgFgFgCgGQgDgFAAgIQAAgGADgGQACgHAFgDQAFgFAIgCQAIgDAKAAIAaAAIAAgDQAAgHgFgEQgEgEgJAAQgHAAgEADQgFACAAAGIgbAAQAAgIADgFQADgGAGgEQAGgEAIgDQAHgCAIAAQAWABAMAIQAMAJAAAUIAABAIgZAAIAAgIIgFAAQgKAKgRABQgJgBgGgCgAgTARQAAAHAFADQAEAEAJAAQAJAAAGgGQAGgGABgJIAAgHIgVAAQgTAAAAAOg");
	this.shape_17.setTransform(40.5,-40.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#08296C").s().p("AAbAyIAAhNIggAAIAAAVQgBAOgCALQgDALgFAHQgFAHgJADQgIADgLAAIgDAAIAAgaIADAAQAGAAAEgDQAFgDABgHQACgHAAgLIAAgqIBVAAIAABjg");
	this.shape_18.setTransform(29,-40.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#08296C").s().p("AAVAyIAAgoIgpAAIAAAoIgbAAIAAhjIAbAAIAAAlIApAAIAAglIAbAAIAABjg");
	this.shape_19.setTransform(17.7,-40.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#08296C").s().p("AgUAxQgKgEgGgHQgIgHgDgKQgEgJAAgMQAAgXAPgOQAGgIAKgDQAKgDAKgBQAMABAJADQAJADAIAIQAHAHADAKQAEAJAAALQAAAMgEAJQgDAKgHAHQgIAHgJAEQgJADgMABQgKgBgKgDgAgNgZQgFAEgDAGQgDAHAAAIQAAAIADAIQADAGAFAEQAGAEAHAAQAIAAAFgEQAGgEADgGQACgIAAgIQAAgIgCgHQgDgGgGgEQgFgEgIAAQgHAAgGAEg");
	this.shape_20.setTransform(6.1,-40.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#08296C").s().p("AAWAyIAAg4IgFAAIgmA4IgaAAIAAhjIAaAAIAAA4IAFAAIAmg4IAaAAIAABjg");
	this.shape_21.setTransform(-10.2,-40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#08296C").s().p("AgTAxQgIgEgHgHQgIgHgDgJQgDgKgBgMQABgMADgJQADgJAIgHQAHgIAIgDQAJgEALAAQAMAAAIAEQAJADAGAHQAHAGADAIQADAJAAALIAAAHIhGAAQAAAOAHAGQAFAHALAAQAOAAAFgLIAbAAQgCAQgNAIQgLAKgUgBQgLAAgKgDgAAWgOQgCgIgFgFQgFgEgJAAQgIAAgGAEQgFAEgCAJIAqAAIAAAAg");
	this.shape_22.setTransform(264.7,-63.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#08296C").s().p("AAVAyIAAgoIgpAAIAAAoIgbAAIAAhjIAbAAIAAAlIApAAIAAglIAbAAIAABjg");
	this.shape_23.setTransform(253.4,-63.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#08296C").s().p("AAWAyIAAg4IgFAAIgmA4IgaAAIAAhjIAaAAIAAA4IAFAAIAmg4IAaAAIAABjg");
	this.shape_24.setTransform(241.5,-63.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#08296C").s().p("AggArQgMgIgCgRIAZAAQACAHAFACQAGADAJABQAJAAAFgDQAFgDAAgGQAAgFgEgCQgEgCgIgBIgQAAIAAgTIAPAAQAHAAAEgCQADgDAAgEQAAgFgEgDQgEgDgJABQgHgBgFADQgEADgCAFIgZAAQACgQAMgIQAMgJATAAQAUABALAHQALAIAAANQAAAIgCAEQgDAFgFADIAAADQAHADADAEQADAGAAAIQAAAHgDAGQgDAFgGAFQgNAIgUAAQgWABgMgKg");
	this.shape_25.setTransform(230.3,-63.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#08296C").s().p("AgZAyQgGgCgFgFQgFgFgCgGQgDgFAAgIQAAgHADgFQACgGAFgEQAFgFAIgCQAIgDAKAAIAaAAIAAgDQAAgHgFgFQgEgDgJAAQgHAAgEADQgFACAAAGIgbAAQAAgIADgFQADgGAGgEQAGgFAIgBQAHgDAIAAQAWABAMAIQAMAKAAATIAABAIgZAAIAAgIIgFAAQgKALgRgBQgJAAgGgCgAgTARQAAAHAFADQAEAEAJAAQAJAAAGgGQAGgGABgJIAAgGIgVAAQgTAAAAANg");
	this.shape_26.setTransform(219.6,-63.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#08296C").s().p("AgnAyIAAhjIBQAAIAAAWIg1AAIAABNg");
	this.shape_27.setTransform(210.3,-63.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#08296C").s().p("AgZAyQgGgCgFgFQgFgFgCgGQgDgFAAgIQAAgHADgFQACgGAFgEQAFgFAIgCQAIgDAKAAIAaAAIAAgDQAAgHgFgFQgEgDgJAAQgHAAgEADQgFACAAAGIgbAAQAAgIADgFQADgGAGgEQAGgFAIgBQAHgDAIAAQAWABAMAIQAMAKAAATIAABAIgZAAIAAgIIgFAAQgKALgRgBQgJAAgGgCgAgTARQAAAHAFADQAEAEAJAAQAJAAAGgGQAGgGABgJIAAgGIgVAAQgTAAAAANg");
	this.shape_28.setTransform(199.6,-63.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#08296C").s().p("AAgAyIAAg/IgFAAIgQAfIgWAAIgQgfIgEAAIAAA/IgbAAIAAhjIAkAAIAUAqIAFAAIAUgqIAkAAIAABjg");
	this.shape_29.setTransform(187.6,-63.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#08296C").s().p("Ag4BFIAAiJIBAAAQAWAAAMAKQAFAFAEAHQACAGAAAJQABAJgEAHQgEAHgGAEIAAAEQAHAEAFAHQAFAIABAKQAAATgNAKQgMALgYAAgAgcAtIAiAAQALAAAFgFQAGgEAAgIQAAgKgFgEQgHgEgKAAIgiAAgAgcgNIAhAAQAJAAAFgFQAFgEAAgHQAAgIgFgDQgFgEgKgBIggAAg");
	this.shape_30.setTransform(169.5,-65.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#08296C").s().p("AgOBFIAAgdIAdAAIAAAdgAgHAcIgGgoIAAg4IAbAAIAAA4IgFAog");
	this.shape_31.setTransform(154.8,-65.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#08296C").s().p("AgTAxQgIgEgHgHQgIgHgDgJQgDgKgBgMQABgMADgJQADgJAIgHQAHgIAIgDQAJgEALAAQAMAAAIAEQAJADAGAHQAHAGADAIQADAJAAALIAAAHIhGAAQAAAOAHAGQAFAHALAAQAOAAAFgLIAbAAQgCAQgNAIQgMAKgTgBQgLAAgKgDgAAVgOQgBgIgFgFQgFgEgJAAQgIAAgGAEQgFAEgCAJIApAAIAAAAg");
	this.shape_32.setTransform(146.4,-63.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#08296C").s().p("AgyBHIAAiKIAaAAIAAAJIAFAAQAJgMATAAQAJAAAIAEQAIADAFAIQAGAHADAKQADAJAAAMQAAALgDAJQgDAJgGAIQgLAOgTAAQgJAAgGgDQgHgDgFgFIgFAAIAAAwgAgNgrQgGAEgCAGQgDAHAAAJQAAAIADAHQACAGAGAEQAFAEAIAAQALgBAHgIQAFgHAAgNQAAgOgFgIQgHgIgLAAQgIAAgFAEg");
	this.shape_33.setTransform(135.3,-61.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#08296C").s().p("AglA4QgOgQAAgdQAAggAKgSQAKgSAUgCIAYgFIAIgCQACgCAAgDIAWAAQAAALgEAHQgEAHgMACIggAFQgKACgGAGQgFAGgCAMIAFAAQAFgGAHgEQAIgEAJAAQAWAAANAOQAHAIADAIQADAIAAALQAAAMgDAIQgEAJgHAHQgHAHgKADQgJAEgMAAQgYAAgNgQgAgMgCQgGAEgDAFQgDAGAAAJQAAAHADAHQADAGAGAEQAFADAHAAQAIAAAGgDQAFgEADgGQADgHAAgHQAAgJgDgGQgDgFgFgEQgGgDgIAAQgHAAgFADg");
	this.shape_34.setTransform(123.4,-65.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#08296C").s().p("AgZAyQgGgCgFgFQgFgFgCgGQgDgFAAgIQAAgHADgFQACgGAFgEQAFgFAIgCQAIgDAKAAIAaAAIAAgDQAAgHgFgFQgEgDgJAAQgHAAgEADQgFACAAAGIgbAAQAAgIADgFQADgGAGgEQAGgFAIgBQAHgDAIAAQAWABAMAIQAMAKAAATIAABAIgZAAIAAgIIgFAAQgKALgRgBQgJAAgGgCgAgTARQAAAHAFADQAEAEAJAAQAJAAAGgGQAGgGABgJIAAgGIgVAAQgTAAAAANg");
	this.shape_35.setTransform(112.1,-63.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#08296C").s().p("AAUAyIgUgoIgVAAIAAAoIgbAAIAAhjIAbAAIAAAlIAVAAIATglIAcAAIgYAwIAaAzg");
	this.shape_36.setTransform(101.9,-63.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#08296C").s().p("AgSAxQgJgEgIgHQgGgHgEgJQgEgKAAgMQAAgMAEgJQAEgJAGgHQAIgIAJgDQAIgEALAAQALAAAJAEQAJADAGAHQAGAGAEAIQADAJAAALIAAAHIhGAAQABAOAFAGQAHAHAKAAQAOAAAFgLIAbAAQgCAQgMAIQgNAKgTgBQgLAAgJgDgAAVgOQAAgIgGgFQgFgEgJAAQgIAAgGAEQgFAEgCAJIApAAIAAAAg");
	this.shape_37.setTransform(90.4,-63.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#08296C").s().p("AAlBAIAAgcIhJAAIAAAcIgaAAIAAgzIAPAAQAEgLADgLQACgMAAgNIAAgdIBTAAIAABMIASAAIAAAzgAgNgiQgBANgCANQgCAKgDALIAnAAIAAg2IgfAAg");
	this.shape_38.setTransform(78.5,-61.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#08296C").s().p("AguAyIAAhjIA4AAQAQAAAHAGQAJAIAAALQAAAHgDAFQgEAFgFADIAAAEQAIACAEAFQAFAGAAAKQAAANgJAHQgJAHgRAAgAgUAfIAZAAQAIgBADgDQADgCABgGQgBgFgDgEQgDgCgIAAIgZAAgAgUgKIAXAAQAGAAADgCQACgDAAgEQAAgFgCgDQgDgDgGABIgXAAg");
	this.shape_39.setTransform(62.2,-63.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#08296C").s().p("AgUAxQgJgEgIgHQgGgHgEgJQgEgKAAgMQAAgXAOgOQAIgIAJgDQAKgEAKAAQAMAAAKAEQAIADAHAIQAIAHAEAKQADAJAAALQAAAMgDAKQgEAJgIAHQgHAHgIAEQgKADgMAAQgKAAgKgDgAgMgZQgGAEgCAGQgDAHgBAIQABAIADAIQACAGAGAEQAFAEAHAAQAIAAAGgEQAFgEADgGQACgIABgIQgBgIgCgHQgDgGgFgEQgGgEgIAAQgHAAgFAEg");
	this.shape_40.setTransform(46.1,-63.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#08296C").s().p("AAUAyIgUgoIgVAAIAAAoIgbAAIAAhjIAbAAIAAAlIAVAAIATglIAcAAIgYAwIAaAzg");
	this.shape_41.setTransform(35.2,-63.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#08296C").s().p("AgtAyIAAhjIAbAAIAAAdIAYAAQATAAALAKQAKAJAAAPQAAARgKAKQgLAJgTAAgAgSAbIAUAAQAJABAEgEQADgDABgHQgBgHgDgDQgEgDgJgBIgUAAg");
	this.shape_42.setTransform(24.3,-63.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#08296C").s().p("AAaAyIAAhNIgfAAIAAAVQAAAPgEAKQgCALgFAHQgFAGgJAEQgIADgLAAIgDAAIAAgaIADAAQAHAAADgDQAEgDADgHQABgHAAgLIAAgqIBUAAIAABjg");
	this.shape_43.setTransform(12.2,-63.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#08296C").s().p("AgUAxQgJgEgIgHQgGgHgEgJQgEgKAAgMQAAgXAOgOQAIgIAJgDQAJgEALAAQAMAAAJAEQAJADAIAIQAHAHADAKQAEAJAAALQAAAMgEAKQgDAJgHAHQgIAHgJAEQgJADgMAAQgLAAgJgDgAgNgZQgFAEgDAGQgCAHAAAIQAAAIACAIQADAGAFAEQAGAEAHAAQAIAAAFgEQAGgEADgGQACgIAAgIQAAgIgCgHQgDgGgGgEQgFgEgIAAQgHAAgGAEg");
	this.shape_44.setTransform(1,-63.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#08296C").s().p("AgNBFIAAhwIgsAAIAAgZIBzAAIAAAZIgrAAIAABwg");
	this.shape_45.setTransform(-10.4,-65.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-78.7,289.3,49.1);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A5SBMIAAiXMAylAAAIAACXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.9,-7.5,323.8,15.1);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ31ÐºÐ¾Ð¿Ð¸Ñ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð²ÑÐ±ÑÐ°ÑÑ ÐºÐ¾Ð²ÐµÑ
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAWAAIAAArIAmAAQAYAAANAMQAMAKAAAUQAAAVgMAMQgNALgYAAgAggAuIAiAAQASAAAGgHQAHgGAAgMQAAgLgHgHQgGgFgSAAIgiAAg");
	this.shape.setTransform(119,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArBBIAAhuIg4AAIAAAgQAAAdgFARQgFASgKAHQgLAIgQgBIgEAAIAAgUIAEAAQAJAAAGgGQAFgFADgNQADgNAAgWIAAgyIBjAAIAACBg");
	this.shape_1.setTransform(102.7,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeA8QgPgKgIgPQgHgQAAgTQABgVAGgOQAIgQAPgJQANgIAUAAQATAAANAJQAMAIAHAOQAGAOABAQIAAAHIhjAAQABAYAKAMQALANATAAQAOABAIgGQAIgFADgKIAXAAQgDAMgGAIQgIAKgLAFQgMAFgQAAQgTgBgOgIgAAmgRQgBgJgEgHQgFgHgHgEQgIgEgLgBQgLABgJAEQgHAEgFAHQgFAHgCAJIBLAAIAAAAg");
	this.shape_2.setTransform(88.1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvBMQgRgVAAgmQAAgRACgPQACgQAFgOQAGgNAJgJQALgJARgDIAigGQAHgBACgCQADgCABgFIAUAAQAAAHgCAGQgCAGgGAEQgFAEgLACIgnAHQgMACgGAGQgIAFgDAJQgDAJgCALIAGAAQAIgLAKgEQALgEAMAAQAUAAAOAJQANAJAIAPQAHAOAAATQAAASgIAPQgHAPgPAJQgOAJgUAAQgfAAgRgUgAgXgKQgJAHgFAJQgEALgBAMQABANAEAKQAFALAJAHQAJAHAOAAQAPAAAJgHQAJgHAFgLQAFgKAAgNQAAgMgFgLQgFgJgJgHQgJgHgPAAQgOAAgJAHg");
	this.shape_3.setTransform(72.9,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeA8QgPgKgIgPQgHgQAAgTQABgVAGgOQAIgQAPgJQAOgIASAAQAUAAANAJQAMAIAHAOQAGAOABAQIAAAHIhjAAQABAYAKAMQAKANAUAAQAOABAIgGQAJgFACgKIAXAAQgDAMgGAIQgIAKgLAFQgMAFgQAAQgUgBgNgIgAAmgRQAAgJgFgHQgFgHgHgEQgIgEgLgBQgLABgJAEQgIAEgEAHQgGAHAAAJIBKAAIAAAAg");
	this.shape_4.setTransform(57.7,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAwBBIAAhnIgFAAIgfA3IgXAAIgfg3IgFAAIAABnIgWAAIAAiBIAjAAIAgA7IAFAAIAgg7IAjAAIAACBg");
	this.shape_5.setTransform(41.1,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAWAAIAAArIAmAAQAYAAANAMQAMAKAAAUQAAAVgMAMQgNALgYAAgAggAuIAjAAQARAAAGgHQAHgGAAgMQAAgLgHgHQgGgFgRAAIgjAAg");
	this.shape_6.setTransform(18.3,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBBIAAhuIgtAAIAAgTIBvAAIAAATIgtAAIAABug");
	this.shape_7.setTransform(4.2,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjA/QgKgGgGgKQgFgJAAgLQAAgMAFgJQAFgJALgGQALgHASAAIAqAAIAAgGQAAgLgIgIQgHgIgRAAQgOABgHAEQgIAFgBAKIgWAAQABgNAHgJQAHgIALgEQALgFAOAAQAZAAAPAMQAOALAAAWIAABYIgVAAIAAgNIgFAAQgGAHgLAFQgKAFgNAAQgPAAgLgGgAgaAHQgIAHAAAMQAAALAIAGQAIAHAOgBQALAAAJgEQAJgFAFgJQAGgIAAgLIAAgMIgnAAQgQABgHAGg");
	this.shape_8.setTransform(-9.9,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag+BdIAAi2IAVAAIAAAOIAGAAQAFgHALgFQAJgFAPAAQATAAAMAJQANAJAHAQQAGAPABAUQgBAUgGAOQgHAQgNAJQgMAIgTABQgOgBgKgFQgJgEgGgIIgGAAIAABCgAgXhCQgIAHgEALQgFAMAAANQAAANAFAKQAEALAIAHQAKAHANAAQAOAAAIgGQAKgGAEgLQAFgLgBgOQABgPgFgLQgEgLgKgHQgIgGgOAAQgNAAgKAHg");
	this.shape_9.setTransform(-24.3,2.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBMQgRgVAAgmQAAgRACgPQACgQAFgOQAFgNALgJQAKgJARgDIAigGQAHgBADgCQACgCAAgFIAVAAQAAAHgDAGQgCAGgFAEQgGAEgJACIgoAHQgLACgIAGQgGAFgEAJQgEAJgBALIAFAAQAJgLAKgEQAKgEANAAQAUAAAOAJQAOAJAHAPQAHAOAAATQAAASgHAPQgJAPgOAJQgOAJgVAAQgeAAgRgUgAgXgKQgJAHgFAJQgFALABAMQgBANAFAKQAFALAJAHQAKAHANAAQAOAAAKgHQAJgHAFgLQAEgKAAgNQAAgMgEgLQgFgJgJgHQgKgHgOAAQgNAAgKAHg");
	this.shape_10.setTransform(-40.6,-2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA1BBIAAiBIAWAAIAACBgAhKBBIAAiBIAWAAIAAArIAkAAQAXAAANAMQAMAKAAAUQAAAVgMAMQgNALgXAAgAg0AuIAhAAQARAAAGgHQAGgGAAgMQAAgLgGgHQgGgFgRAAIghAAg");
	this.shape_11.setTransform(-58.1,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4BBIAAiBIBAAAQAUgBALAJQAKAJAAAPQAAAKgEAGQgEAHgGADIAAAGQAKACAGAHQAFAIABAMQAAATgMAIQgMAKgXgBgAgiAvIArAAQAOAAAGgFQAGgGAAgJQAAgJgGgFQgGgGgOABIgrAAgAgigKIAoAAQAMgBAFgFQAFgEgBgIQABgHgFgGQgFgFgMAAIgoAAg");
	this.shape_12.setTransform(-74.7,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// arrow
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDBGIAtg3IiBAAIAAgaICBAAIgug6IAUgRIBIBYIhIBVg");
	this.shape_13.setTransform(-98.4,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

	// btn
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#08296C").s().p("A1tDeIAAm7MAraAAAIAAG7g");
	this.shape_14.setTransform(9.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.7,-21.6,277.9,44.4);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ22ÐºÐ¾Ð¿Ð¸Ñ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgSxAhTMAAAhClMAljAAAMAAABClg");
	this.shape.setTransform(280.1,-18.3,5.544,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-386,-231.4,1332.2,426.1);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ20ÐºÐ¾Ð¿Ð¸Ñ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08296C").s().p("AAxCcIAAh+IgLAAIhWB+Ig7AAIAAjfIA7AAIAAB9IALAAIBVh9IA8AAIAADfgAg3hrQgUgRgDgfIAvAAQABAMAJAHQAHAHAOABQAOAAAJgHQAHgHACgNIAvAAQgDAfgUARQgUARgkAAQgjAAgUgRg");
	this.shape.setTransform(306.5,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08296C").s().p("AguBtQgVgIgQgQQgQgQgIgVQgIgVAAgbQABg0AfggQAQgQAVgIQAVgIAZAAQAbAAAUAIQAWAIAPAQQAQAQAIAVQAHAWABAZQgBAbgHAVQgIAVgQAQQgPAQgWAIQgUAIgbAAQgZAAgVgIgAgdg5QgNAJgFAPQgHAPABASQgBAUAHAPQAFAPANAIQAMAJARAAQATAAALgJQAMgIAGgPQAHgPAAgUQAAgSgHgPQgGgPgMgJQgLgIgTAAQgRAAgMAIg");
	this.shape_1.setTransform(280,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#08296C").s().p("AAvBwIAAhZIhcAAIAABZIg9AAIAAjfIA9AAIAABUIBcAAIAAhUIA8AAIAADfg");
	this.shape_2.setTransform(253.5,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08296C").s().p("AAvBwIAAhZIhcAAIAABZIg9AAIAAjfIA9AAIAABUIBcAAIAAhUIA8AAIAADfg");
	this.shape_3.setTransform(226.6,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#08296C").s().p("Ag5BwQgPgFgLgLQgKgLgFgNQgFgNAAgQQgBgPAHgNQAFgNALgKQALgLASgGQAQgFAXAAIA7AAIAAgGQAAgRgKgJQgKgJgUAAQgQAAgKAGQgJAGgCAMIg8AAQABgQAGgMQAIgNAMgJQAOgKARgEQAQgFAVAAQAvAAAaAUQAbAVAAArIAACQIg3AAIAAgTIgMAAQgUAYgpAAQgTAAgOgFgAgqAmQAAAQAJAHQAKAIAUAAQAVAAAOgNQAOgNAAgVIAAgOIgvAAQgpAAAAAeg");
	this.shape_4.setTransform(200.3,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#08296C").s().p("AhoBwIAAjfIB/AAQAhABATAPQASAOAAAbQAAAPgHAMQgIALgLAFIAAALQASAEAKANQAKAMAAAVQAAAegUAQQgVAQgmAAgAgtBEIA5AAQAQAAAIgGQAIgGAAgNQAAgMgIgHQgIgGgQAAIg5AAgAgtgYIAzAAQANAAAHgFQAGgFAAgLQAAgLgGgFQgHgGgNAAIgzAAg");
	this.shape_5.setTransform(176.5,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08296C").s().p("AAqBwIAAhLIg3AAIgcBLIg8AAIAihYQgRgJgIgPQgJgPAAgVQAAgjAYgUQAXgTAsgBIBxAAIAADfgAggg3QgJAHABANQgBAPAJAGQAIAHATAAIAvAAIAAg3IgvAAQgSAAgJAHg");
	this.shape_6.setTransform(139.3,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#08296C").s().p("AA6BwIAAisIhIAAIAAAuQAAAhgGAZQgGAYgLAPQgMAOgSAIQgTAHgZAAIgIAAIAAg6IAIAAQAOAAAKgHQAIgGAFgQQAEgQAAgaIAAheIC+AAIAADfg");
	this.shape_7.setTransform(112.6,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#08296C").s().p("ABSCPIAAg+IikAAIAAA+Ig5AAIAAhxIAhAAQAJgZAGgaQAEgbAAgdIAAhBIC8AAIAACsIAnAAIAABxgAgghNQAAAegEAbQgEAagJAYIBYAAIAAh5IhHAAg");
	this.shape_8.setTransform(85.4,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#08296C").s().p("AhmBwIAAjfIA+AAIAABCIA1AAQAsAAAWAUQAYAVAAAkQAAAmgYAVQgWAUgsABgAgoA9IAsAAQAVAAAIgHQAJgIgBgPQABgPgJgHQgIgIgVAAIgsAAg");
	this.shape_9.setTransform(48.6,3.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#08296C").s().p("AA7BwIAAisIhJAAIAAAuQAAAhgGAZQgGAYgLAPQgLAOgTAIQgSAHgaAAIgIAAIAAg6IAIAAQAPAAAIgHQAKgGAEgQQAEgQAAgaIAAheIC+AAIAADfg");
	this.shape_10.setTransform(21,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#08296C").s().p("AgrBtQgUgIgQgQQgPgQgIgVQgHgWAAgaQAAgbAHgVQAIgVAPgQQAQgQAUgHQAUgIAZAAQAZAAAUAHQATAIAOAOQAPAPAHATQAIATAAAYIAAARIifAAQABAeAOAPQAOAPAYAAQAhAAAJgXIA+AAQgHAigbAUQgaATgsAAQgaAAgVgIgAAwggQgDgTgLgJQgMgKgUgBQgTAAgNAKQgMAJgFAUIBfAAIAAAAg");
	this.shape_11.setTransform(-4,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#08296C").s().p("AhVB9QgegjAAhDQAAhHAWgnQAWgpAsgGIA4gJQANgCAFgDQAFgEAAgHIAxAAQAAAYgKAQQgJAQgaAEIhJAMQgXADgMAOQgNAOgEAaIALAAQALgPARgHQARgIAXAAQAvAAAeAfQAOAQAIASQAHAVAAAYQAAAYgIAVQgIATgQAQQgQAPgVAIQgVAIgZgBQg3AAgfgjgAgdgEQgMAHgHANQgGAOAAASQAAASAGAOQAHAOAMAIQAMAIARABQASgBAMgIQANgIAGgOQAGgOAAgSQAAgSgGgOQgGgNgNgHQgMgIgSAAQgRAAgMAIg");
	this.shape_12.setTransform(-29.6,-0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#08296C").s().p("AgrBtQgUgIgQgQQgPgQgIgVQgHgWAAgaQAAgbAHgVQAIgVAPgQQAQgQAUgHQAUgIAZAAQAZAAAUAHQATAIAOAOQAPAPAHATQAIATAAAYIAAARIifAAQABAeAOAPQAOAPAYAAQAhAAAJgXIA+AAQgHAigbAUQgaATgsAAQgaAAgVgIgAAwggQgDgTgLgJQgMgKgUgBQgTAAgNAKQgMAJgFAUIBfAAIAAAAg");
	this.shape_13.setTransform(-55.1,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#08296C").s().p("ABfCbIAAjmIgLAAIg0B8IhAAAIg0h8IgLAAIAADmIg8AAIAAk1IBjAAIAzB9IAKAAIAzh9IBkAAIAAE1g");
	this.shape_14.setTransform(-86.3,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.4,-29.6,429.1,57);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ19ÐºÐ¾Ð¿Ð¸Ñ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08296C").s().p("AggCbIAAhCIBBAAIAABCgAgTA9IgKhZIAAh+IA8AAIAAB+IgMBZg");
	this.shape.setTransform(263.5,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08296C").s().p("AAxBwIAAh9IgLAAIhWB9Ig7AAIAAjfIA7AAIAAB9IALAAIBVh9IA8AAIAADfg");
	this.shape_1.setTransform(243,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#08296C").s().p("ABIBwIAAiOIgLAAIgkBHIgyAAIgjhHIgMAAIAACOIg6AAIAAjfIBRAAIAtBeIAKAAIAtheIBRAAIAADfg");
	this.shape_2.setTransform(213.6,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08296C").s().p("Ag5BwQgPgFgKgLQgLgLgFgNQgFgNgBgQQAAgPAHgNQAFgNALgKQAMgLARgGQARgFAWAAIA7AAIAAgGQAAgRgKgJQgKgJgTAAQgRAAgJAGQgKAGgCAMIg7AAQAAgQAGgMQAIgNANgJQANgKAQgEQASgFATAAQAxAAAZAUQAbAVAAArIAACQIg4AAIAAgTIgLAAQgUAYgqAAQgRAAgPgFgAgrAmQABAQAJAHQAKAIAUAAQAVAAAOgNQANgNABgVIAAgOIgvAAQgqAAAAAeg");
	this.shape_3.setTransform(184.8,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#08296C").s().p("AgoBuQgUgIgQgQQgPgQgIgWQgHgVAAgbQAAgaAHgVQAIgVAPgQQAQgQAUgIQAUgIAZAAQAqAAAbAVQAaAUAGAjIg9AAQgDgMgKgHQgKgHgQABQgaAAgMASQgNASAAAdQAAAeANASQAMATAaAAQASAAAKgHQAKgIADgPIA8AAQgEAkgcAWQgOALgRAGQgSAFgVAAQgZAAgUgHg");
	this.shape_4.setTransform(161,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#08296C").s().p("AhJCbIAvhuIhejHIA/AAIA4B3IAKAAIAzh3IA9AAIiFE1g");
	this.shape_5.setTransform(136.4,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08296C").s().p("AAvBwIAAhZIhcAAIAABZIg9AAIAAjfIA9AAIAABUIBcAAIAAhUIA8AAIAADfg");
	this.shape_6.setTransform(110.5,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#08296C").s().p("AguBtQgVgIgQgQQgQgQgIgVQgHgVAAgbQgBg0AgggQAQgQAVgIQAVgIAZAAQAaAAAWAIQAUAIAQAQQAQAQAIAVQAHAWAAAZQAAAbgHAVQgIAVgQAQQgQAQgUAIQgWAIgaAAQgZAAgVgIgAgdg5QgNAJgGAPQgFAPgBASQABAUAFAPQAGAPANAIQAMAJARAAQASAAANgJQALgIAHgPQAGgPAAgUQAAgSgGgPQgHgPgLgJQgNgIgSAAQgRAAgMAIg");
	this.shape_7.setTransform(84.1,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#08296C").s().p("AhVB+QgegkAAhDQAAhHAWgnQAWgoAsgHIA4gJQANgDAFgDQAFgDAAgHIAxAAQAAAYgKAQQgJAQgaAEIhJAMQgXADgMAOQgNAOgEAaIALAAQALgPARgHQARgIAXAAQAvAAAeAfQAOAPAIATQAHAVAAAYQAAAYgIAUQgIAUgQAQQgQAPgVAIQgVAIgZgBQg3AAgfgigAgdgEQgMAHgHANQgGAOAAASQAAASAGAOQAHAOAMAIQAMAIARABQASgBAMgIQANgIAGgOQAGgOAAgSQAAgSgGgOQgGgNgNgHQgMgIgSAAQgRAAgMAIg");
	this.shape_8.setTransform(58,5.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#08296C").s().p("ABIBwIAAiOIgLAAIgjBHIgzAAIgjhHIgLAAIAACOIg8AAIAAjfIBRAAIAtBeIALAAIAtheIBRAAIAADfg");
	this.shape_9.setTransform(18,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#08296C").s().p("AgqCWQgVgIgPgQQgQgQgIgWQgHgVAAgbQAAgbAHgUQAIgVAQgQQAPgQAUgIQAVgIAZAAQAYAAAUAIQATAHAOAPQAPAOAIAUQAHASAAAXIAAASIieAAQABAfAOAOQANAQAZAAQAgAAAKgYIA9AAQgHAjgaATQgbAUgsAAQgaAAgUgIgAAwAHQgCgRgNgKQgLgKgUAAQgSAAgOAJQgMAKgFASIBfAAIAAAAgAAUhmIAAg3IAzAAIAAA3gAhAhmIAAg3IAzAAIAAA3g");
	this.shape_10.setTransform(-10.4,5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#08296C").s().p("AAvBwIAAhZIhcAAIAABZIg9AAIAAjfIA9AAIAABUIBcAAIAAhUIA8AAIAADfg");
	this.shape_11.setTransform(-36.4,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#08296C").s().p("AhxCeIAAk2IA7AAIAAAVIALAAQAVgaApAAQAWAAARAIQARAIANARQANARAGAUQAHAWAAAZQAAAagHAVQgGAUgNARQgaAhgrgBQgUABgPgHQgPgGgKgNIgLAAIAABrgAgehiQgMAJgGAPQgGAPAAATQAAAUAGAOQAGAOAMAKQAMAIASABQAZgBAOgSQAOgSAAgeQAAgegOgSQgOgRgZgBQgSAAgMAIg");
	this.shape_12.setTransform(-62.6,13.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#08296C").s().p("AgrBtQgUgIgQgQQgPgQgIgVQgHgWAAgaQAAgbAHgVQAIgVAPgQQAQgQAUgHQAUgIAZAAQAZAAAUAHQATAIAOAOQAPAPAHATQAIATAAAYIAAARIifAAQABAeAOAPQAOAPAYAAQAhAAAJgXIA+AAQgHAigbAUQgaATgsAAQgaAAgVgIgAAwggQgDgTgLgJQgMgKgUgBQgTAAgNAKQgMAJgFAUIBfAAIAAAAg");
	this.shape_13.setTransform(-89.2,9.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#08296C").s().p("AhoBwIAAjfIB/AAQAhABATAPQASAOAAAbQAAAPgHAMQgIALgLAFIAAALQASAEAKANQAKAMAAAVQAAAegUAQQgVAQgmAAgAgtBEIA5AAQAQAAAIgGQAIgGAAgNQAAgMgIgHQgIgGgQAAIg5AAgAgtgYIAzAAQANAAAHgFQAGgFAAgLQAAgLgGgFQgHgGgNAAIgzAAg");
	this.shape_14.setTransform(-113.8,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#08296C").s().p("AA/CUQgQgLgJgSQgIgTAAgYQAAgYAIgTQAJgSAQgLQAQgJAXAAQAYAAAQAJQAQALAIASQAJATgBAYQABAYgJATQgIASgQALQgQAKgYAAQgXAAgQgKgABPAqQgIANAAAVQAAAVAIANQAHAMAQAAQAQAAAJgMQAHgNABgVQgBgVgHgNQgJgNgQAAQgQAAgHANgAhxCYIC4kvIAsAAIi4EvgAiNgDQgQgKgIgTQgJgSAAgZQAAgYAJgSQAIgTAQgKQAQgLAXAAQAYAAAQALQAQAKAJATQAHASAAAYQAAAZgHASQgJATgQAKQgQAJgYAAQgXAAgQgJgAh9hsQgJAMABAVQgBAWAJAMQAHANAQAAQARAAAHgNQAJgMgBgWQABgVgJgMQgHgNgRAAQgQAAgHANg");
	this.shape_15.setTransform(-156.7,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#08296C").s().p("AgvCUQgWgKgQgTQghgoAAhPQAAhOAhgnQAQgUAWgKQAVgKAaAAQAbAAAVAKQAWAKAQAUQARATAIAeQAIAeAAAmQAAAogIAdQgIAegRAUQggAng2AAQgaAAgVgKgAgphMQgOAaAAAyQAAA0AOAZQAOAZAbAAQAcAAAPgZQAOgZAAg0QAAgygOgaQgPgZgcAAQgbAAgOAZg");
	this.shape_16.setTransform(-188.9,5.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#08296C").s().p("AhvCbIAAhBIBphOQAWgPANgRQAMgQAAgTQAAgVgLgLQgMgLgUAAQgWgBgLALQgMALgCAUIg/AAQAEguAdgaQAdgZAyAAQAXAAASAGQAUAHAOANQAPANAHASQAHASAAAWQABAcgOAYQgPAXgcAWIg/AyIAAALIB/AAIAAA2g");
	this.shape_17.setTransform(-215,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.2,-23.2,502.4,57);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ18ÐºÐ¾Ð¿Ð¸Ñ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41D2D").s().p("AzLAYIAAgvMAmXAAAIAAAvg");
	this.shape.setTransform(-125.6,11.3,1.292,0.691,0,0,0,-122.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,11.4,317.5,3.4);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ18ÐºÐ¾Ð¿Ð¸Ñ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A18").s().p("Am+HLIAFgJIAAgCIgEAAIAAgLIAKAAIAAANIgGAJgACmG+QgFgDgDgHQgDgHgBgMQAAgKADgIQADgIAFgFQAGgFAIAAQAGAAAEACQAEACADAEQADADAAAFIgIAAQgBgFgDgCQgDgCgFAAQgHAAgFAHQgEAGgBALIADAAIADgDIAFgDIAHgBQAGAAAFADQAFADACAFQADAEAAAHQAAAGgDAFQgCAFgFADQgGADgHAAIgBAAQgGAAgFgDgACrGeQgEACgBADQgCADAAAFQAAAFACADQACAEADABQADACAEAAQAFAAACgCQAEgBACgEQACgDAAgFQAAgFgCgDQgDgDgDgCQgDgCgEAAQgEAAgDACgAsgG+QgFgDgDgHQgDgHgBgMQAAgKADgIQADgIAFgFQAGgFAJAAQAGAAADACQAFACADAEQACADAAAFIgIAAQgBgFgCgCQgDgCgFAAQgIAAgEAHQgFAGAAALIACAAIADgDIAFgDIAHgBQAGAAAFADQAFADACAFQADAEAAAHQAAAGgDAFQgCAFgFADQgFADgHAAIgCAAQgGAAgFgDgAsbGeQgDACgCADQgCADAAAFQAAAFACADQADAEACABQAEACAEAAQAEAAADgCQADgBACgEQACgDAAgFQAAgFgCgDQgCgDgDgCQgDgCgEAAQgFAAgDACgAvtG+QgFgDgDgHQgEgHAAgMQAAgKADgIQADgIAFgFQAFgFAJAAQAGAAAEACQAEACADAEQADADAAAFIgIAAQgBgFgDgCQgDgCgFAAQgHAAgFAHQgEAGgBALIACAAIAEgDIAEgDIAIgBQAGAAAEADQAFADADAFQADAEAAAHQAAAGgDAFQgDAFgFADQgEADgIAAIgBAAQgGAAgFgDgAvoGeQgEACgBADQgCADAAAFQAAAFACADQACAEADABQAEACADAAQAFAAADgCQADgBABgEQACgDABgFQgBgFgCgDQgCgDgCgCQgEgCgEAAQgEAAgDACgAEQG+QgGgEgDgHQgDgIgBgMQABgMADgHQADgIAGgDQAFgEAHAAQAHAAAFAEQAGADADAIQADAHABAMQgBAMgDAIQgDAHgGAEQgFADgHAAQgHAAgFgDgAETGIQgEADgCAGQgBAGAAAIQAAAIABAGQACAGAEAEQAEADAFAAQAGAAADgDQADgEADgGQABgGAAgIQAAgIgBgGQgDgGgDgDQgDgEgGAAQgFAAgEAEgADaG/QgEgCgDgDQgDgEAAgEIAIAAQABAEADACQADACAFAAQAHAAAFgGQAEgGABgLIgDAAIgDADIgFACIgHABQgGAAgFgDQgFgCgCgFQgDgFAAgGQAAgHADgFQACgFAFgDQAFgDAIAAQAGAAAGADQAFADADAHQADAIABALQAAALgDAIQgDAIgFAFQgGAEgIAAQgGAAgEgCgADdGGQgDACgCADQgBADgBAFQAAAFACADQACAEADABQAEACAEAAQAEAAADgCQAEgBABgEQACgDAAgFQAAgEgCgEQgCgDgDgCQgDgCgEAAQgFAAgDACgABxG/QgGgDgDgEQgCgFAAgFIAIAAQABAGADADQAEADAGAAQAHAAAEgEQAEgEAAgIQAAgEgCgEQgBgDgEgCQgDgCgFAAQgEAAgEABQgDACgBADIgJAAIADgjIAlAAIAAAHIgeAAIgCATIACAAIAGgDQADgBAEAAQAGAAAGADQAEADACAFQADAFAAAGQAAAHgDAFQgDAGgEADQgFACgIAAQgHAAgEgCgAA7G/QgEgDgEgEQgDgFAAgFIAJAAQAAAFAEAEQAEADAGAAQAHAAAFgEQADgDAAgHQAAgHgDgEQgEgDgIAAIgCAAIgDAAIAAgJIAQgOIAAgCIgdAAIAAgHIAnAAIAAAJIgRAPIAAACQAGAAAEACQAFACACAFQACAEABAHQAAAHgDAEQgEAFgEADQgGACgHAAQgHAAgFgCgAhkG/QgEgCgDgDQgCgEgBgEIAIAAQABAEADACQADACAFAAQAIAAAFgGQAEgGAAgLIgCAAIgDADIgFACIgIABQgFAAgFgDQgFgCgDgFQgCgFAAgGQAAgHACgFQADgFAFgDQAFgDAHAAQAHAAAGADQAFADADAHQADAIAAALQAAALgCAIQgDAIgFAFQgGAEgJAAQgFAAgFgCgAhgGGQgDACgDADQgBADAAAFQAAAFACADQACAEADABQADACAEAAQAFAAACgCQAEgBACgEQABgDAAgFQAAgEgBgEQgDgDgDgCQgDgCgEAAQgEAAgDACgAi+G9QgGgFgEgIQgEgIAAgJQAAgKAEgIQAEgIAGgFQAIgEAJAAQALAAAHAEQAHAFADAIQAEAIAAAKQAAAJgEAIQgDAIgHAFQgHAEgLAAQgJAAgIgEgAi5GHQgFAEgDAGQgDAGABAIQgBAHADAGQADAGAFAEQAFAEAHAAQAIAAAGgEQAFgEACgGQADgGAAgHQAAgIgDgGQgCgGgFgEQgGgEgIAAQgHAAgFAEgAmFG9QgGgFgEgIQgEgIAAgJQAAgKAEgIQAEgIAGgFQAIgEAJAAQALAAAHAEQAHAFADAIQAEAIAAAKQAAAJgEAIQgDAIgHAFQgHAEgLAAQgJAAgIgEgAmAGHQgGAEgCAGQgCAGAAAIQAAAHACAGQACAGAGAEQAEAEAIAAQAJAAAEgEQAGgEACgGQADgGAAgHQAAgIgDgGQgCgGgGgEQgEgEgJAAQgIAAgEAEgApTG/QgGgDgCgEQgCgFgBgFIAIAAQABAGAEADQADADAGAAQAHAAAFgEQADgEAAgIQAAgEgBgEQgCgDgEgCQgDgCgEAAQgEAAgEABQgDACgCADIgJAAIADgjIAmAAIAAAHIgfAAIgCATIACAAIAGgDQADgBAFAAQAGAAAFADQAFADACAFQACAFAAAGQAAAHgCAFQgDAGgFADQgFACgHAAQgIAAgEgCgAq5G/QgFgDgDgEQgDgFAAgFIAIAAQABAGAEADQAEADAFAAQAIAAADgEQAFgEAAgIQAAgEgCgEQgCgDgEgCQgCgCgFAAQgFAAgDABQgDACgCADIgIAAIACgjIAmAAIAAAHIgfAAIgBATIACAAIAFgDQADgBAEAAQAHAAAFADQAEADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgFACgHAAQgHAAgFgCgAruG/QgFgDgDgEQgDgFAAgFIAIAAQAAAFAFAEQAEADAGAAQAHAAAEgEQAEgDAAgHQAAgHgEgEQgEgDgHAAIgDAAIgDAAIAAgJIAQgOIAAgCIgdAAIAAgHIAnAAIAAAJIgQAPIAAACQAFAAAFACQAEACADAFQACAEAAAHQAAAHgDAEQgDAFgFADQgGACgGAAQgHAAgFgCgAwlG+QgFgEgDgHQgDgIgBgMQABgMADgHQADgIAFgDQAGgEAHAAQAHAAAFAEQAGADADAIQADAHABAMQgBAMgDAIQgDAHgGAEQgFADgHAAQgHAAgGgDgAwhGIQgEADgCAGQgBAGAAAIQAAAIABAGQACAGAEAEQAEADAFAAQAGAAADgDQAEgEABgGQACgGAAgIQAAgIgCgGQgBgGgEgDQgDgEgGAAQgFAAgEAEgA1mG9QgHgFgDgIQgFgIAAgJQAAgKAFgIQADgIAHgFQAHgEAKAAQAKAAAIAEQAGAFAEAIQADAIAAAKQAAAJgDAIQgEAIgGAFQgIAEgKAAQgKAAgHgEgA1iGHQgFAEgDAGQgCAGAAAIQAAAHACAGQADAGAFAEQAFAEAIAAQAIAAAFgEQAFgEADgGQACgGAAgHQAAgIgCgGQgDgGgFgEQgFgEgIAAQgIAAgFAEgAAbHAIAAgPIgfAAIAAgKIAcgpIALAAIAAArIAJAAIAAAIIgJAAIAAAPgAAEGnIAAACIAXAAIAAghIgCAAgAgaHAIAAgPIghAAIAAgKIAdgpIAMAAIAAArIAJAAIAAAIIgJAAIAAAPgAgyGnIAAACIAYAAIAAghIgCAAgAjfHAIAAg7IglAAIAAA7IgJAAIAAhDIA2AAIAABDgAkeHAIgOgfIgVAAIAAAfIgIAAIAAhDIAIAAIAAAdIAVAAIANgdIAJAAIgPAhIAQAigAnWHAIAAgPIgiAAIAAgKIAegpIAMAAIAAArIAJAAIAAAIIgJAAIAAAPgAnvGnIAAACIAZAAIAAghIgCAAgAopHAIAAgJIAKgIIAFgFIAFgEIAFgEIAEgEIAEgGQACgDAAgEQAAgGgEgEQgDgDgHAAQgFAAgEADQgEADAAAGIgIAAQAAgGADgFQADgEAFgCQAFgCAFAAQAHAAAEACQAGACACAFQADAEAAAHQAAAEgCAFIgFAIIgIAHIgRAOIAAACIAiAAIAAAHgAqLHAIAcg5IAAgCIghAAIAAgHIAqAAIAAAJIgcA5gAtDHAIAAgPIghAAIAAgKIAdgpIAMAAIAAArIAJAAIAAAIIgJAAIAAAPgAtbGnIAAACIAYAAIAAghIgCAAgAuPHAIAdg5IAAgCIghAAIAAgHIApAAIAAAJIgcA5gAu/HAIAcg5IAAgCIgiAAIAAgHIArAAIAAAJIgdA5gAxdHAIAAgHIAQAAIAAgyIgBAAIgPAJIAAgIIAPgKIAKAAIAAA7IAOAAIAAAHgAyGHAIAAgfIgnAAIAAAfIgIAAIAAhDIAIAAIAAAdIAnAAIAAgdIAHAAIAABDgAzzHAIAAhDIAdAAQAKAAAHAFQAFAFAAAKQAAAKgFAFQgHAFgKAAIgVAAIAAAbgAzrGeIATAAQAJAAAEgEQADgDAAgGQAAgGgDgDQgEgEgJAAIgTAAgA0rHAIAAhDIAuAAIAAAIIglAAIAAA7gAqTFqIAAhCIAIAAIAAAFIACAAIAGgFQAEgBAGgBQAGABAEADQAFADADAGQACAFAAAHQAAAIgCAFQgDAGgFADQgEADgGAAQgGAAgEgBQgDgCgCgDIgCAAIAAAYgAqEEwQgDADgCAEQgBAEgBAEQABAFABAEQACAEADADQADACAGAAQAEAAAEgCQADgCABgEQACgEAAgGQAAgFgCgEQgBgEgDgCQgEgDgEAAQgGAAgDADgAS2FiIAFgJIAAgCIgEAAIAAgLIAKAAIAAANIgGAJgAHaFiIAFgJIAAgCIgFAAIAAgLIAKAAIAAANIgFAJgAvQFiIAFgJIAAgCIgEAAIAAgLIAJAAIAAANIgFAJgAOLFVQgFgDgDgHQgDgHAAgMQAAgKACgIQADgIAFgFQAGgFAJAAQAFAAAFACQADACAEAEQACADABAFIgIAAQgCgFgCgCQgDgCgFAAQgIAAgFAHQgEAGAAALIACAAIADgDIAFgDIAIgBQAFAAAFADQAFADADAFQACAEAAAHQAAAGgCAFQgDAFgFADQgFADgHAAIgCAAQgGAAgFgDgAORE1QgEACgCADQgBADgBAFQABAFABADQADAEADABQADACAEAAQAEAAADgCQADgBACgEQACgDAAgFQAAgFgCgDQgCgDgDgCQgDgCgEAAQgFAAgCACgAEaFVQgGgDgDgHQgDgHgBgMQAAgKAEgIQACgIAGgFQAFgFAJAAQAFAAAEACQAFACACAEQADADAAAFIgIAAQgBgFgCgCQgDgCgFAAQgIAAgEAHQgFAGgBALIADAAIADgDIAFgDIAHgBQAHAAAEADQAFADACAFQADAEABAHQgBAGgDAFQgCAFgFADQgFADgHAAIgCAAQgGAAgEgDgAEeE1QgDACgBADQgCADgBAFQABAFACADQACAEACABQAEACAEAAQAEAAADgCQAEgBABgEQACgDAAgFQAAgFgCgDQgCgDgDgCQgEgCgDAAQgFAAgDACgARcFVQgGgEgDgHQgCgIgBgMQABgMACgHQADgIAGgDQAFgEAIAAQAGAAAGAEQAFADADAIQADAHABAMQgBAMgDAIQgDAHgFAEQgGADgGAAQgIAAgFgDgARgEfQgEADgCAGQgBAGAAAIQAAAIABAGQACAGAEAEQADADAGAAQAFAAAEgDQADgEACgGQACgGAAgIQAAgIgCgGQgCgGgDgDQgEgEgFAAQgGAAgDAEgAQkFVQgFgEgDgHQgDgIAAgMQAAgMADgHQADgIAFgDQAGgEAHAAQAHAAAFAEQAGADADAIQADAHAAAMQAAAMgDAIQgDAHgGAEQgFADgHAAQgHAAgGgDgAQoEfQgDADgCAGQgCAGAAAIQAAAIACAGQACAGADAEQADADAGAAQAFAAAEgDQADgEACgGQACgGAAgIQAAgIgCgGQgCgGgDgDQgEgEgFAAQgGAAgDAEgAPAFVQgFgEgDgHQgDgIAAgMQAAgMADgHQADgIAFgDQAGgEAHAAQAHAAAGAEQAFADADAIQADAHAAAMQAAAMgDAIQgDAHgFAEQgGADgHAAQgHAAgGgDgAPEEfQgDADgCAGQgCAGAAAIQAAAIACAGQACAGADAEQAEADAFAAQAFAAAEgDQADgEACgGQACgGAAgIQAAgIgCgGQgCgGgDgDQgEgEgFAAQgFAAgEAEgANUFVQgGgEgDgHQgDgIAAgMQAAgMADgHQADgIAGgDQAGgEAGAAQAIAAAFAEQAGADADAIQADAHAAAMQAAAMgDAIQgDAHgGAEQgFADgIAAQgGAAgGgDgANXEfQgDADgCAGQgBAGAAAIQAAAIABAGQACAGADAEQAEADAFAAQAGAAADgDQAEgEACgGQACgGgBgIQABgIgCgGQgCgGgEgDQgDgEgGAAQgFAAgEAEgAMeFWQgFgCgCgDQgDgEAAgEIAIAAQABAEADACQADACAEAAQAJAAAEgGQAEgGABgLIgCAAIgEADIgEACIgIABQgGAAgEgDQgFgCgDgFQgDgFAAgGQAAgHADgFQACgFAGgDQAFgDAGAAQAIAAAFADQAGADADAHQACAIABALQAAALgDAIQgCAIgGAFQgFAEgKAAQgFAAgEgCgAMhEdQgDACgCADQgBADAAAFQAAAFACADQABAEADABQAEACAEAAQAEAAADgCQAEgBABgEQACgDAAgFQAAgEgCgEQgCgDgDgCQgDgCgFAAQgDAAgEACgALpFWQgEgDgEgEQgDgFAAgFIAJAAQAAAFAEAEQAFADAGAAQAGAAAFgEQADgDAAgHQAAgHgDgEQgEgDgHAAIgEAAIgCAAIAAgJIAQgOIAAgCIgdAAIAAgHIAnAAIAAAJIgRAPIAAACQAGAAAEACQAEACADAFQADAEgBAHQAAAHgCAEQgDAFgFADQgGACgGAAQgHAAgGgCgAGvFWQgFgDgDgEQgDgFgBgFIAJAAQAAAFAFAEQAEADAGAAQAHAAAEgEQAEgDAAgHQAAgHgEgEQgDgDgIAAIgDAAIgDAAIAAgJIARgOIAAgCIgdAAIAAgHIAmAAIAAAJIgRAPIAAACQAGAAAEACQAFACADAFQACAEAAAHQAAAHgDAEQgDAFgFADQgFACgHAAQgHAAgFgCgAFNFWQgEgDgDgEQgEgEAAgGQABgEABgDQABgEADgCIAEgDIAAgCIgDgCIgDgFQgCgDAAgDQAAgGADgEQADgEAFgCQAFgCAHAAQAGAAAEACQAFACADAEQADAEAAAGIgBAGIgDAFIgEACIAAACIAFADQACACABAEQACADAAAEQAAAGgDAEQgDAEgFADQgGACgGAAQgIAAgGgCgAFPE7QgEAEgBAFQABAGAEAEQAEADAIAAQAGAAAFgDQAEgEAAgGQAAgFgEgEQgFgDgGAAQgIAAgEADgAFTEcIgEAEQgDACAAAEQAAADADADIAEAEIAIABIAGgBQADgCACgCQACgDAAgDQAAgEgCgCQgCgCgDgCIgGgBIgIABgADkFWQgFgCgCgDQgDgEAAgEIAHAAQACAEADACQADACAEAAQAIAAAEgGQAFgGABgLIgDAAIgDADIgFACIgHABQgHAAgEgDQgFgCgCgFQgEgFAAgGQAAgHAEgFQACgFAFgDQAFgDAHAAQAHAAAFADQAGADADAHQADAIABALQgBALgDAIQgCAIgGAFQgFAEgJAAQgFAAgEgCgADnEdQgDACgDADQgBADAAAFQAAAFACADQABAEAEABQAEACAEAAQADAAAEgCQADgBABgEQACgDAAgFQAAgEgCgEQgCgDgCgCQgEgCgEAAQgEAAgDACgACwFWQgGgDgCgEQgDgFAAgFIAIAAQABAGADADQAEADAGAAQAHAAAEgEQAEgEAAgIQAAgEgCgEQgBgDgEgCQgDgCgFAAQgEAAgEABQgDACgBADIgJAAIADgjIAlAAIAAAHIgeAAIgCATIACAAIAGgDQADgBAEAAQAGAAAGADQAEADACAFQADAFAAAGQAAAHgDAFQgDAGgEADQgGACgHAAQgHAAgEgCgABFFVQgGgEgDgHQgDgIAAgMQAAgMADgHQADgIAGgDQAFgEAHAAQAHAAAGAEQAFADADAIQADAHAAAMQAAAMgDAIQgDAHgFAEQgGADgHAAQgHAAgFgDgABIEfQgDADgCAGQgCAGAAAIQAAAIACAGQACAGADAEQADADAGAAQAGAAADgDQADgEACgGQACgGAAgIQAAgIgCgGQgCgGgDgDQgDgEgGAAQgGAAgDAEgAmEFVQgFgDgDgGQgCgGAAgHQAAgHACgGQADgFAFgDQAGgEAHAAQAHABAFADQAEADADAFQACAFAAAGIAAACIgkAAQAAAJADAFQAFAEAHAAQAFAAADgBQADgCABgEIAIAAQgBAEgCADQgCAEgFACQgEABgGAAQgHAAgGgDgAlrE5QAAgDgBgDQgBgCgEgCQgDgCgDAAQgFAAgDACQgDACgCACQgCADAAADIAbAAIAAAAgAm5FVQgFgDgDgGQgCgFgBgIQABgHACgFQADgGAFgDQAFgDAIgBQAHABAFADQAFADADAGQADAFAAAHQAAAIgDAFQgDAGgFADQgFADgHAAQgIAAgFgDgAm1EwQgDADgCAEQgBAEAAAEQAAAFABAEQACAEADADQADACAGAAQAFAAAEgCQADgDABgEQACgEAAgFQAAgEgCgEQgBgEgDgDQgEgDgFAAQgGAAgDADgAodFVQgFgDgDgGQgCgFAAgIQAAgHACgFQADgGAFgDQAGgDAHgBQAGAAAEACQAEACACAEQADADABAEIgIAAQgBgDgEgCQgCgDgFAAQgGAAgDADQgDACgCAEQgBAEAAAFQAAAFABAEQACAEAEADQADACAFAAQAFAAADgCQADgCABgEIAIAAQgCAHgFAEQgFAEgIAAQgHAAgGgDgAsvFWQgFgDgDgEQgDgFAAgFIAIAAQABAGAEADQAEADAGAAQAHAAADgEQAFgEAAgIQAAgEgDgEQgBgDgDgCQgDgCgFAAQgFAAgDABQgDACgCADIgIAAIACgjIAmAAIAAAHIgfAAIgBATIACAAIAFgDQADgBAEAAQAHAAAFADQAEADADAFQADAFAAAGQAAAHgDAFQgDAGgFADQgFACgHAAQgHAAgFgCgAtmFVQgFgEgDgHQgEgIAAgMQAAgMAEgHQADgIAFgDQAGgEAGAAQAHAAAGAEQAFADADAIQAEAHAAAMQAAAMgEAIQgDAHgFAEQgGADgHAAQgGAAgGgDgAtjEfQgDADgCAGQgBAGgBAIQABAIABAGQACAGADAEQAEADAFAAQAGAAAEgDQADgEACgGQABgGABgIQgBgIgBgGQgCgGgDgDQgEgEgGAAQgFAAgEAEgAv9FVQgFgDgDgGQgCgFAAgIQAAgHACgFQADgGAFgDQAFgDAHgBQAIABAGADQAEADAEAGQACAFAAAHQAAAIgCAFQgEAGgEADQgGADgIAAQgHAAgFgDgAv5EwQgDADgCAEQgBAEAAAEQAAAFABAEQACAEADADQAEACAEAAQAGAAADgCQAEgDACgEQABgEAAgFQAAgEgBgEQgCgEgEgDQgDgDgGAAQgEAAgEADgAxeFVQgFgDgDgGQgCgFAAgIQAAgHACgFQADgGAFgDQAFgDAIgBQAIABAFADQAFADADAGQADAFgBAHQABAIgDAFQgDAGgFADQgFADgIAAQgIAAgFgDgAxZEwQgEADgBAEQgCAEAAAEQAAAFACAEQABAEAEADQADACAFAAQAFAAAEgCQADgDACgEQACgEgBgFQABgEgCgEQgCgEgDgDQgEgDgFAAQgFAAgDADgAzBFVQgFgDgDgGQgCgFAAgIQAAgHACgFQADgGAFgDQAFgDAIgBQAFAAAFACQAEACACAEQADADABAEIgIAAQgBgDgEgCQgCgDgFAAQgFAAgEADQgDACgCAEQgBAEAAAFQAAAFABAEQACAEAEADQADACAFAAQAFAAADgCQADgCABgEIAIAAQgCAHgFAEQgFAEgIAAQgIAAgFgDgA0lFVQgGgDgDgGQgCgGAAgHQAAgHACgGQADgFAGgDQAFgEAGAAQAIABAFADQAEADACAFQADAFAAAGIAAACIgkAAQAAAJADAFQAEAEAIAAQAFAAADgBQADgCABgEIAIAAQAAAEgDADQgDAEgEACQgEABgGAAQgIAAgEgDgA0ME5QAAgDgCgDQgCgCgCgCQgDgCgFAAQgEAAgDACQgDACgBACQgCADgBADIAcAAIAAAAgASIFXIAAgHIAPAAIAAgyIgBAAIgOAJIAAgIIAOgKIAKAAIAAA7IAPAAIAAAHgAPsFXIAAgHIAQAAIAAgyIgBAAIgPAJIAAgIIAPgKIAKAAIAAA7IAOAAIAAAHgAK2FXIAAg7IglAAIAAA7IgJAAIAAhDIA2AAIAABDgAJyFXIAAg7IglAAIAAA7IgIAAIAAhDIA2AAIAABDgAIzFXIgPgfIgUAAIAAAfIgJAAIAAhDIAJAAIAAAdIAUAAIAOgdIAJAAIgPAhIAQAigAF5FXIAAgHIAQAAIAAgyIgBAAIgPAJIAAgIIAPgKIAJAAIAAA7IAPAAIAAAHgABwFXIAAgJIAKgIIAGgFIAEgEIAFgEIAEgEIAFgGQABgDAAgEQAAgGgEgEQgDgDgGAAQgGAAgEADQgDADAAAGIgJAAQAAgGADgFQADgEAFgCQAFgCAGAAQAGAAAFACQAFACACAFQAEAEAAAHQAAAEgDAFIgFAIIgHAHIgRAOIAAACIAiAAIAAAHgAAMFXIAdg5IAAgCIgiAAIAAgHIAqAAIAAAJIgcA5gAgkFXIAcg5IAAgCIghAAIAAgHIApAAIAAAJIgcA5gAhSFXIAAgfIgmAAIAAAfIgJAAIAAhDIAJAAIAAAdIAmAAIAAgdIAIAAIAABDgAiXFXIAAgfIgmAAIAAAfIgJAAIAAhDIAJAAIAAAdIAmAAIAAgdIAIAAIAABDgAjbFXIAAg5IgDAAIgfA5IgNAAIAAhDIAIAAIAAA5IACAAIAfg5IAOAAIAABDgAk2FXIAAgVIgaAAIAAAVIgJAAIAAgvIAJAAIAAATIAaAAIAAgTIAIAAIAAAvgAnzFXIAAgvIAXAAQAHAAAFADQADADAAAGQABADgCADIgEADIAAACQADABADADQACADAAAEQAAAHgEADQgEADgJAAgAnrFQIAPAAQAGAAACgCQACgBAAgEQAAgDgCgCQgCgCgGAAIgPAAgAnrE7IAOAAQAFAAACgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgDgBgCQgCgBgFgBIgOAAgAo5FXIAAglIgBAAIgWAlIgMAAIAAgvIAIAAIAAAlIACAAIAWglIALAAIAAAvgAqoFXIAAg7IglAAIAAA7IgJAAIAAhDIA2AAIAABDgAsDFXIAAgLIAKAAIAAALgAumFXIAAgJIAKgIIAFgFIAGgEIAEgEIAFgEIADgGQACgDAAgEQAAgGgEgEQgDgDgGAAQgGAAgDADQgEADgBAGIgIAAQABgGADgFQACgEAGgCQAEgCAGAAQAGAAAFACQAFACADAFQACAEAAAHQAAAEgCAFIgFAIIgHAHIgRAOIAAACIAiAAIAAAHgAwwFXIAAgvIAkAAIAAAHIgcAAIAAAogAx3FXIgKgVIgOAAIAAAVIgIAAIAAgvIAIAAIAAATIAOAAIAKgTIAIAAIgLAXIAMAYgAz7FXIAAgvIAYAAQAHAAAEADQAEADAAAGQAAADgBADIgFADIAAACQAEABACADQACADAAAEQABAHgFADQgEADgJAAgAzzFQIAQAAQAFAAACgCQACgBAAgEQAAgDgCgCQgCgCgFAAIgQAAgAzzE7IAPAAQAEAAACgCQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgDgCgCQgCgBgEgBIgPAAgA1CFXIAAgfIgnAAIAAAfIgIAAIAAhDIAIAAIAAAdIAnAAIAAgdIAIAAIAABDgANuEBIAAhCIAIAAIAAAFIACAAIAGgFIAJgCQAHABAEADQAFADACAGQACAFABAHQgBAIgCAFQgCAGgFADQgEADgHAAQgGAAgDgBQgEgCgCgDIgBAAIAAAYgAN9DHQgEADgBAEQgCAEAAAEQAAAFACAEQABAEAEADQADACAFAAQAFAAADgCQADgCACgEQACgEgBgGQABgFgCgEQgCgEgDgCQgDgDgFAAQgFAAgDADgAE2EBIAKgXIgUgrIAIAAIAOAfIADAAIANgfIAJAAIgdBCgABjEBIAAhCIAIAAIAAAFIACAAIAFgFIAKgCQAHABAEADQAFADACAGQACAFAAAHQAAAIgCAFQgCAGgFADQgEADgHAAQgGAAgEgBQgDgCgBgDIgDAAIAAAYgAByDHQgEADgCAEQgBAEAAAEQAAAFABAEQACAEAEADQADACAFAAQAFAAADgCQAEgCABgEQACgEAAgGQAAgFgCgEQgBgEgEgCQgDgDgFAAQgFAAgDADgApXEBIAKgXIgVgrIAIAAIAPAfIACAAIAOgfIAIAAIgcBCgAroEBIAAhCIAHAAIAAAFIADAAIAFgFIAJgCQAHABAFADQAEADACAGQADAFAAAHQAAAIgDAFQgCAGgEADQgFADgHAAQgFAAgEgBQgDgCgCgDIgCAAIAAAYgAraDHQgEADgBAEQgCAEAAAEQAAAFACAEQABAEAEADQAEACAEAAQAFAAAEgCQADgCACgEQABgEAAgGQAAgFgBgEQgCgEgDgCQgEgDgFAAQgEAAgEADgAvhEBIAKgXIgVgrIAJAAIAOAfIADAAIAMgfIAJAAIgcBCgANgD8IAAgOIgpAAIAAAOIgIAAIAAgVIAHAAIADgMQACgGAAgJIAAgNIAkAAIAAAoIAJAAIAAAVgANCDMQABAJgCAHQgBAGgCAFIAZAAIAAghIgVAAgAD3D8IAAgOIgpAAIAAAOIgIAAIAAgVIAGAAIAFgMQABgGAAgJIAAgNIAkAAIAAAoIAJAAIAAAVgADaDMQAAAJgCAHQgBAGgCAFIAZAAIAAghIgUAAgAuMD8IAAgOIgrAAIAAgvIAJAAIAAAoIAZAAIAAgoIAIAAIAAAoIAIAAIAAAVgAEED5IAGgJIAAgCIgFAAIAAgLIAJAAIAAANIgEAJgAOqDtQgFgCgBgDQgCgEAAgEQAAgEACgEQABgDAEgCQAEgDAHAAIAPAAIAAgCQAAgEgDgDQgCgCgHgBQgFAAgDACQgCACAAADIgIAAQAAgEACgDQADgDAEgCQAEgCAFAAQAKAAAFAFQAFAEAAAIIAAAgIgIAAIAAgFIgCAAQgCADgDACQgFABgEAAQgGAAgDgCgAOtDZQgDACAAAFQAAAEADACQACACAGAAQAEAAADgBIAFgFQACgDAAgEIAAgEIgOAAQgGAAgCACgALRDtQgEgCgCgDQgCgEAAgEQAAgEACgEQABgDAEgCQAFgDAHAAIAOAAIAAgCQABgEgDgDQgDgCgGgBQgFAAgDACQgDACAAADIgIAAQABgEACgDQADgDADgCQAEgCAGAAQAJAAAGAFQAEAEAAAIIAAAgIgHAAIAAgFIgCAAQgDADgDACQgEABgFAAQgFAAgEgCgALUDZQgDACAAAFQAAAEADACQADACAFAAQAEAAAEgBIAEgFQACgDAAgEIAAgEIgNAAQgHAAgCACgAKjDsQgGgDgCgGQgCgFgBgIQABgHACgFQACgGAGgDQAFgDAIgBQAFAAAEACQAFACACAEQACADABAEIgIAAQgBgDgDgCQgDgDgEAAQgGAAgDADQgDACgCAEQgBAEgBAFQABAFABAEQACAEADADQADACAGAAQAEAAAEgCQACgCABgEIAJAAQgCAHgFAEQgGAEgHAAQgIAAgFgDgAI/DsQgGgDgCgGQgCgGgBgHQABgHACgGQACgFAGgDQAFgEAHAAQAIABAEADQAFADACAFQACAFABAGIAAACIglAAQAAAJAEAFQAEAEAIAAQAEAAAEgBQADgCAAgEIAJAAQgBAEgCADQgDAEgEACQgFABgFAAQgIAAgFgDgAJYDQQAAgDgBgDQgCgCgDgCQgDgCgEAAQgEAAgDACQgDACgCACQgCADAAADIAbAAIAAAAgACfDtQgFgCgCgDQgCgEAAgEQAAgEACgEQACgDAEgCQAEgDAHAAIAPAAIAAgCQAAgEgCgDQgDgCgGgBQgGAAgCACQgDACgBADIgIAAQABgEADgDQACgDAEgCQAEgCAGAAQAIAAAGAFQAFAEAAAIIAAAgIgHAAIAAgFIgCAAQgDADgEACQgEABgEAAQgGAAgDgCgAChDZQgDACABAFQgBAEADACQAEACAEAAQAFAAADgBIAFgFQACgDAAgEIAAgEIgOAAQgGAAgDACgAkFDtQgEgCgCgDQgCgEAAgEQAAgEACgEQABgDAEgCQAFgDAGAAIAPAAIAAgCQABgEgDgDQgCgCgHgBQgFAAgDACQgDACAAADIgIAAQAAgEADgDQACgDAFgCQAEgCAFAAQAJAAAFAFQAGAEgBAIIAAAgIgHAAIAAgFIgCAAQgDADgDACQgEABgFAAQgGAAgDgCgAkCDZQgDACAAAFQAAAEADACQADACAFAAQAEAAADgBIAGgFQABgDAAgEIAAgEIgNAAQgHAAgCACgAolDsQgGgDgCgGQgCgFgBgIQABgHACgFQACgGAGgDQAFgDAIgBQAFAAAEACQAFACACAEQACADABAEIgIAAQgBgDgDgCQgCgDgFAAQgGAAgDADQgEACgBAEQgBAEgBAFQABAFABAEQACAEADADQADACAGAAQAEAAAEgCQADgCAAgEIAJAAQgCAHgFAEQgGAEgHAAQgIAAgFgDgAt1DsQgFgDgDgGQgDgGABgHQgBgHADgGQADgFAFgDQAFgEAHAAQAHABAFADQAEADADAFQADAFAAAGIAAACIglAAQAAAJAEAFQAEAEAHAAQAGAAACgBQADgCACgEIAIAAQgBAEgDADQgCAEgFACQgDABgHAAQgHAAgFgDgAtcDQQAAgDgBgDQgCgCgDgCQgDgCgEAAQgEAAgEACQgCACgCACQgCADAAADIAbAAIAAAAgAwUDtQgDgCgCgDQgCgEgBgEQABgEACgEQABgDAEgCQAEgDAHAAIAPAAIAAgCQABgEgDgDQgDgCgGgBQgFAAgEACQgCACAAADIg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gApCCRIAGgJIAAgCIgFAAIAAgLIAKAAIAAANIgFAJgARDCEQgGgEgCgFQgDgGAAgHQAAgHADgGQACgGAGgDQAFgDAIAAQAFAAAEACQAEACADADQACAEABAEIgIAAQgBgEgDgCQgDgCgEAAQgGAAgEACQgCADgCAEQgCAEAAAFQAAAFACAEQABAEAEACQADADAGAAQAEAAAEgCQACgDABgEIAIAAQgBAIgFAEQgFAEgIAAQgIAAgFgDgAQQCEQgFgEgDgFQgCgGAAgHQAAgIACgFQADgGAFgDQAFgDAHAAQAIAAAFADQAEADACAFQADAFAAAGIAAADIgkAAQAAAIADAFQAEAFAIAAQAFAAADgCQADgCABgDIAIAAQgBAEgCADQgCADgFACQgEACgGAAQgIAAgFgDgAQqBnQgBgDgBgCQgCgDgDgBQgCgCgFAAQgEAAgDACQgDABgCADQgCACAAADIAcAAIAAAAgANrCFQgEgCgCgEQgCgDAAgEQAAgEACgEQACgEAEgCQADgCAIAAIAOAAIAAgCQABgFgDgCQgDgDgGAAQgFAAgDACQgDACAAADIgIAAQABgFACgDQADgDADgBQAEgCAGAAQAJAAAGAEQAEAEAAAIIAAAhIgHAAIAAgFIgCAAQgDADgDABQgEACgFAAQgGAAgDgCgANuBxQgDACAAAEQAAAEADADQADACAFAAQAEAAAEgCIAEgFQACgDAAgEIAAgEIgNAAQgGAAgDADgALLCDQgGgEgEgIQgEgHgBgJIgNAAIAAAfIgJAAIAAhEIAJAAIAAAdIANAAQABgIAFgHQADgHAHgEQAGgEAJAAQAKAAAHAFQAHAFAEAHQADAIAAAKQAAAKgDAIQgEAIgHAEQgHAFgKAAQgKAAgGgEgALOBNQgEAEgDAGQgCAGAAAHQAAAHACAGQADAHAEADQAGAEAHAAQAIAAAFgEQAEgDADgHQADgGgBgHQABgHgDgGQgDgGgEgEQgFgEgIAAQgHAAgGAEgAJLCDQgFgDgDgIQgEgHAAgMQAAgMAEgIQADgHAFgEQAGgEAGAAQAHAAAGAEQAFAEADAHQAEAIAAAMQAAAMgEAHQgDAIgFADQgGAEgHAAQgGAAgGgEgAJOBNQgDADgCAGQgBAGgBAJQABAIABAGQACAGADADQAEAEAFAAQAGAAAEgEQADgDACgGQABgGABgIQgBgJgBgGQgCgGgDgDQgEgDgGAAQgFAAgEADgAIVCFQgEgCgDgEQgDgDAAgFIAIAAQABAEADADQADACAFAAQAHAAAFgHQAEgGABgLIgDAAIgDADIgFADIgHABQgGAAgFgDQgFgDgCgFQgDgFAAgGQAAgGADgFQACgGAFgCQAFgEAIAAQAGAAAGAEQAFADADAHQADAHABAMQAAAKgDAIQgDAIgFAFQgGAFgIAAQgGAAgEgCgAIYBLQgDACgCADQgBAEgBAFQAAAFACADQACADADACQAEABAEAAQAEAAADgBQAEgCABgDQACgDAAgFQAAgFgCgDQgCgEgDgCQgDgBgEAAQgFAAgDABgAEXCAQgFgIAAgOQgBgGABgGQAAgGACgEQACgFAEgEQAEgDAGgBIAMgCQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAIACgDIAHAAIgBAFIgDAEIgFACIgPACQgEABgDACIgEAFIgBAIIACAAQADgEADgCQAEgBAFAAQAHAAAFADQAFADADAGQACAFAAAHQAAAHgCAFQgDAGgFADQgGADgHAAQgLAAgHgHgAEgBgQgEACgBAEQgBAEAAAFQAAAEABAEQABAEAEACQADADAGAAQAFAAADgDQAEgCACgEQABgEAAgEQAAgFgBgEQgCgEgEgCQgDgCgFAAQgGAAgDACgABJCCQgHgEgEgIQgDgIAAgKQAAgKADgIQAEgHAHgFQAHgFAKAAQALAAAGAFQAIAFADAHQADAIABAKQgBAKgDAIQgDAIgIAEQgGAFgLAAQgKAAgHgFgABNBNQgFAEgDAGQgCAGABAHQgBAHACAGQADAHAFADQAFAEAIAAQAIAAAFgEQAFgDADgHQACgGAAgHQAAgHgCgGQgDgGgFgEQgFgEgIAAQgIAAgFAEgAgvCEQgGgEgCgFQgDgGABgHQgBgIADgFQACgGAGgDQAFgDAHAAQAHAAAFADQAFADACAFQACAFABAGIAAADIglAAQAAAIAEAFQAEAFAHAAQAGAAACgCQAEgCABgDIAIAAQgBAEgDADQgCADgEACQgFACgGAAQgHAAgFgDgAgWBnQAAgDgBgCQgCgDgDgBQgDgCgEAAQgEAAgDACQgEABgBADQgCACAAADIAbAAIAAAAgAizCDQgFgDgDgIQgDgHgBgMQABgMADgIQADgHAFgEQAGgEAHAAQAHAAAFAEQAGAEADAHQADAIABAMQgBAMgDAHQgDAIgGADQgFAEgHAAQgHAAgGgEgAivBNQgEADgCAGQgBAGAAAJQAAAIABAGQACAGAEADQAEAEAFAAQAGAAADgEQAEgDABgGQACgGAAgIQAAgJgCgGQgBgGgEgDQgDgDgGAAQgFAAgEADgAoMCEQgFgCgDgFQgCgEAAgGIAIAAQABAGADAEQAEADAGAAQAHAAAEgFQAEgEAAgHQAAgFgCgDQgCgEgDgCQgDgCgFAAQgEAAgDACQgEABgCAEIgIAAIADgjIAmAAIAAAHIggAAIgBATIACAAIAGgDQADgCAEAAQAHAAAFADQAEADADAFQACAFAAAGQAAAIgCAFQgEAFgEADQgGADgHAAQgHAAgFgDgAqgCFQgFgCgBgEQgCgDAAgEQAAgEACgEQABgEAEgCQAEgCAHAAIAPAAIAAgCQAAgFgDgCQgCgDgHAAQgFAAgDACQgCACAAADIgJAAQABgFACgDQADgDAEgBQAEgCAFAAQAKAAAFAEQAFAEAAAIIAAAhIgIAAIAAgFIgCAAQgCADgDABQgFACgEAAQgGAAgDgCgAqdBxQgDACAAAEQAAAEADADQACACAGAAQAEAAADgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgCADgAsACEQgFgEgDgFQgDgGABgHQgBgHADgGQADgGAFgDQAFgDAHAAQAGAAAEACQAEACADADQADAEAAAEIgIAAQgBgEgDgCQgDgCgFAAQgFAAgEACQgDADgBAEQgBAEAAAFQAAAFABAEQABAEAEACQADADAFAAQAGAAACgCQADgDACgEIAIAAQgCAIgFAEQgFAEgJAAQgHAAgFgDgAtuCFQgFgCgCgEQgBgDAAgEQAAgEABgEQACgEAEgCQAEgCAHAAIAPAAIAAgCQAAgFgDgCQgCgDgHAAQgEAAgEACQgCACgBADIgIAAQABgFACgDQADgDAEgBQAEgCAFAAQAKAAAFAEQAFAEAAAIIAAAhIgHAAIAAgFIgDAAQgCADgDABQgFACgEAAQgGAAgDgCgAtsBxQgCACAAAEQAAAEACADQAEACAFAAQADAAAEgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgDADgAwDCEQgFgEgDgFQgCgGgBgHQABgHACgGQADgFAFgEQAFg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EAAIAAgLIAKAAIAAANIgGAJgAMhAbQgGgEgCgFQgCgGgBgHQABgGACgGQACgGAGgDQAFgDAIAAQAFAAAEACQAFACACADQACAEABAEIgIAAQgBgEgDgCQgDgCgEAAQgGAAgDACQgDADgCAEQgBADgBAFQABAFABAEQACAEADACQADADAGAAQAEAAAEgCQADgDAAgEIAJAAQgCAIgFAEQgGAEgHAAQgIAAgFgDgAKgAZQgHgEgDgIQgEgIgBgJQABgKAEgIQADgHAHgFQAHgFAKAAQAKAAAIAFQAGAFAEAHQADAIAAAKQAAAJgDAIQgEAIgGAEQgIAFgKAAQgKAAgHgFgAKkgbQgFAEgCAGQgDAGAAAHQAAAGADAGQACAHAFADQAFAEAIAAQAIAAAFgEQAFgDACgHQADgGAAgGQAAgHgDgGQgCgGgFgEQgFgEgIAAQgIAAgFAEgAEbAbQgFgEgDgFQgCgGAAgHQAAgHACgFQADgGAFgDQAFgDAHAAQAHAAAFADQAFADACAFQADAFAAAFIAAADIglAAQAAAIAEAFQAEAFAHAAQAGAAACgCQADgCACgDIAHAAQAAAEgDADQgCADgFACQgDACgHAAQgHAAgFgDgAE0gBQAAgDgCgCQgBgDgDgBQgDgCgEAAQgEAAgEACQgDABgBADQgCACAAADIAbAAIAAAAgAB8AcQgDgCgCgEQgDgDAAgEQAAgEADgEQABgEAEgCQAEgBAHAAIAPAAIAAgCQABgFgDgCQgDgDgGAAQgGAAgCACQgDACAAADIgIAAQAAgFADgDQACgDAEgBQAEgCAGAAQAIAAAGAEQAFAEAAAIIAAAgIgIAAIAAgFIgBAAQgDADgEABQgDACgGAAQgFAAgEgCgACAAIQgEACAAAEQAAAEAEADQADACAEAAQAEAAAEgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgCADgAhsAcQgEgCgCgEQgCgDAAgEQAAgEACgEQABgEAEgCQAFgBAGAAIAPAAIAAgCQABgFgDgCQgCgDgHAAQgFAAgDACQgDACAAADIgIAAQAAgFADgDQACgDAFgBQAEgCAFAAQAJAAAFAEQAGAEgBAIIAAAgIgHAAIAAgFIgCAAQgDADgDABQgEACgFAAQgGAAgDgCgAhpAIQgDACAAAEQAAAEADADQADACAFAAQAEAAADgCIAGgFQABgDAAgEIAAgEIgNAAQgHAAgCADgAkKAaQgFgEgCgHIAIAAQABAFAEABQAEACAFAAQAFAAADgCQAEgCAAgEQAAgDgDgCQgCgCgGAAIgIAAIAAgHIAIAAQAFAAACgBQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgDgDgCQgDgCgFAAQgEAAgEACQgCABgBAEIgIAAQABgHAFgDQAGgEAHAAQAHAAADACQAFACACADQACADAAADQAAAEgCACQAAAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAIAAACQADABABACQACADABAFQgBAEgCADQgCADgEACQgFACgGAAQgKAAgFgEgAk6AcQgDgCgCgEQgCgDAAgEQAAgEACgEQABgEAEgCQAEgBAHAAIAPAAIAAgCQAAgFgCgCQgDgDgHAAQgEAAgEACQgCACAAADIgIAAQAAgFACgDQADgDAEgBQAEgCAFAAQAKAAAFAEQAFAEAAAIIAAAgIgIAAIAAgFIgCAAQgCADgEABQgDACgGAAQgFAAgEgCgAk2AIQgDACgBAEQABAEADADQACACAGAAQAEAAADgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgCADgAmWAcQgDgCgCgEQgDgDAAgEQAAgEADgEQABgEAEgCQAEgBAHAAIAPAAIAAgCQABgFgDgCQgDgDgGAAQgGAAgCACQgDACAAADIgIAAQAAgFACgDQADgDAEgBQAEgCAGAAQAIAAAGAEQAFAEAAAIIAAAgIgIAAIAAgFIgBAAQgDADgEABQgDACgGAAQgFAAgEgCgAmSAIQgEACAAAEQAAAEAEADQADACAEAAQAFAAADgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgCADgAq5AZQgFgFAAgJIAAgdIAIAAIAAAcQAAAGADAEQADADAGAAQAEAAADgCIAGgGQABgEAAgEIAAgZIAIAAIAAAvIgIAAIAAgFIgBAAQgCACgFACQgDACgFAAQgJAAgEgFgAtCAbQgGgEgCgFQgDgGAAgHQAAgHADgFQACgGAGgDQAEgDAIAAQAHAAAEADQAFADADAFQACAFAAAFIAAADIglAAQABAIAEAFQAEAFAHAAQAFAAADgCQADgCABgDIAIAAQAAAEgDADQgDADgEACQgEACgGAAQgHAAgFgDgAsqgBQAAgDgBgCQgBgDgDgBQgEgCgDAAQgEAAgEACQgDABgBADQgDACAAADIAbAAIAAAAgAvMAbQgFgEgDgFQgCgGAAgHQAAgHACgFQADgGAFgDQAGgDAHAAQAHAAAEADQAFADADAFQACAFAAAFIAAADIglAAQABAIADAFQAFAFAHAAQAFAAADgCQADgCABgDIAIAAQgBAEgCADQgCADgFACQgEACgGAAQgHAAgGgDgAuzgBQABgDgCgCQgBgDgEgBQgDgCgDAAQgEAAgEACQgDABgCADQgBACgBADIAbAAIAAAAgAv9AbQgFgEgDgFQgCgGAAgHQAAgGACgGQADgGAFgDQAFgDAHAAQAGAAAEACQAEACADADQADAEAAAEIgIAAQgBgEgDgCQgDgCgFAAQgFAAgEACQgDADgBAEQgBADAAAFQAAAFABAEQACAEADACQADADAFAAQAGAAACgCQADgDACgEIAHAAQgBAIgFAEQgFAEgJAAQgHAAgFgDgAw3AZQgEgFAAgJIAAgdIAIAAIAAAcQAAAGACAEQAEADAFAAQAFAAADgCIAFgGQACgEAAgEIAAgZIAIAAIAAAvIgIAAIAAgFIgCAAQgCACgEACQgEACgEAAQgJAAgFgFgAxoAcQgEgCgCgEQgCgDAAgEQAAgEACgEQACgEAEgCQAEgBAGAAIAQAAIAAgCQAAgFgDgCQgDgDgGAAQgFAAgDACQgCACgBADIgIAAQABgFACgDQACgDAEgBQAFgCAFAAQAJAAAFAEQAFAEABAIIAAAgIgIAAIAAgFIgCAAQgCADgEABQgEACgFAAQgFAAgEgCgAxlAIQgDACAAAEQAAAEADADQADACAFAAQAEAAADgCIAGgFQACgDAAgEIAAgEIgPAAQgFAAgDADgAyUAcIgGgEIgCAAIAAAFIgIAAIAAhEIAJAAIAAAaIACAAQABgCAEgCIAJgCQAHAAAEADQAGADABAGQADAGAAAGQAAAHgDAGQgBAFgGAEQgEADgHAAQgFAAgEgCgAyVgJQgEACgBAEQgBADgBAFQABAFABAEQABAEAEACQAEADAFAAQAFAAADgCQADgDABgEQACgEAAgFQAAgFgCgDQgBgEgDgDQgDgCgFAAQgFAAgEADgANsAdIgLgVIgOAAIAAAVIgIAAIAAgvIAIAAIAAATIAOAAIAKgTIAJAAIgMAWIAMAZgAMFAd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AEgIAAQgHAAgGgDgAPRhMQgEgCgCgEQgCgDAAgEQAAgEACgEQACgEAEgCQAEgCAGAAIAQAAIAAgCQAAgFgDgCQgDgDgGAAQgFAAgDACQgCACgBADIgIAAQABgFACgDQACgDAEgBQAFgCAFAAQAJAAAFAEQAFAEABAIIAAAhIgIAAIAAgFIgCAAQgCADgEABQgEACgFAAQgFAAgEgCgAPUhgQgDACAAAEQAAAEADADQADACAFAAQAEAAADgCIAGgFQACgDAAgEIAAgEIgPAAQgFAAgDADgAIohNQgFgEgDgFQgCgGAAgHQAAgHACgGQADgFAFgEQAFgDAHAAQAIAAAGADQAEAEADAFQADAGAAAHQAAAHgDAGQgDAFgEAEQgGADgIAAQgHAAgFgDgAIshyQgEACgBAEQgCAEAAAFQAAAFACAEQABAEAEACQAEADAEAAQAGAAADgDQAEgCACgEQABgEAAgFQAAgFgBgEQgCgEgEgCQgDgDgGAAQgEAAgEADgAGlhNQgFgEgDgFQgCgGgBgHQABgHACgGQADgFAFgEQAFgDAIAAQAHAAAFADQAFAEAEAFQACAGAAAHQAAAHgCAGQgEAFgFAEQgFADgHAAQgIAAgFgDgAGphyQgDACgCAEQgCAEABAFQgBAFACAEQACAEADACQADADAGAAQAFAAAEgDQADgCABgEQACgEAAgFQAAgFgCgEQgBgEgDgCQgEgDgFAAQgGAAgDADgADxhNQgEgEgEgFQgCgGAAgHQAAgHACgGQAEgFAEgEQAGgDAHAAQAIAAAFADQAFAEADAFQADAGgBAHQABAHgDAGQgDAFgFAEQgFADgIAAQgHAAgGgDgAD2hyQgEACgCAEQgBAEAAAFQAAAFABAEQACAEAEACQADADAFAAQAGAAADgDQADgCACgEQABgEAAgFQAAgFgBgEQgCgEgDgCQgDgDgGAAQgFAAgDADgAhyhMQgEgCgCgEQgCgDAAgEQAAgEACgEQACgEAEgCQADgCAIAAIAOAAIAAgCQABgFgDgCQgDgDgGAAQgFAAgDACQgDACAAADIgIAAQABgFACgDQADgDADgBQAEgCAGAAQAJAAAGAEQAEAEAAAIIAAAhIgHAAIAAgFIgCAAQgCADgEABQgEACgFAAQgFAAgEgCgAhvhgQgDACAAAEQAAAEADADQADACAFAAQAEAAAEgCIAEgFQACgDAAgEIAAgEIgNAAQgGAAgDADgAjAhRQgFgIgBgOQAAgGABgGQABgGACgEQACgFADgEQAEgDAGgBIANgCQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAIABgDIAIAAIgBAFIgDAEIgGACIgOACQgFABgCACIgEAFIgCAIIACAAQAEgEADgCQAEgBAFAAQAHAAAFADQAFADADAGQADAFAAAHQgBAHgDAFQgCAGgGADQgEADgIAAQgLAAgHgHgAi3hxQgEACgBAEQgBAEgBAFQABAEABAEQABAEAEACQAEADAFAAQAFAAAEgDQADgCABgEQADgEAAgEQAAgFgDgEQgBgEgDgCQgEgCgFAAQgFAAgEACgAjwhNQgGgEgCgFQgDgGAAgHQAAgHADgGQACgFAGgEQAFgDAHAAQAHAAAGADQAFAEADAFQADAGAAAHQAAAHgDAGQgDAFgFAEQgGADgHAAQgHAAgFgDgAjthyQgDACgCAEQgBAEAAAFQAAAFABAEQACAEADACQAEADAFAAQAGAAADgDQAEgCABgEQACgEAAgFQAAgFgCgEQgBgEgEgCQgDgDgGAAQgFAAgEADgAk8hNQgEgDgDgFQgDgFgBgGIgKAAIAAAVIgIAAIAAgwIAIAAIAAAUIALAAQABgGACgFQADgFAFgCQAFgDAHAAQAGAAAGADQAFAEADAFQACAGAAAHQAAAHgCAGQgDAFgFAEQgGADgGAAQgHAAgGgDgAk4hyQgDACgCAEQgCAEABAFQgBAFACAEQACAEADACQADADAGAAQAFAAADgDQADgCACgEQACgEgBgFQABgFgCgEQgCgEgDgCQgDgDgFAAQgGAAgDADgAn3hMQgEgCgCgEQgCgDAAgEQAAgEACgEQABgEAEgCQAFgCAHAAIAOAAIAAgCQABgFgDgCQgCgDgHAAQgFAAgDACQgDACAAADIgIAAQAAgFADgDQADgDAEgBQADgCAGAAQAJAAAGAEQAEAEAAAIIAAAhIgHAAIAAgFIgCAAQgDADgDABQgEACgFAAQgGAAgDgCgAn0hgQgDACAAAEQAAAEADADQADACAFAAQAEAAADgCIAFgFQACgDAAgEIAAgEIgNAAQgHAAgCADgAqfhNQgFgEgDgFQgCgGAAgHQAAgHACgGQADgFAFgEQAFgDAHAAQAIAAAGADQAEAEADAFQADAGAAAHQAAAHgDAGQgDAFgEAEQgGADgIAAQgHAAgFgDgAqbhyQgEACgBAEQgCAEAAAFQAAAFACAEQABAEAEACQAEADAEAAQAGAAADgDQAEgCACgEQABgEAAgFQAAgFgBgEQgCgEgEgCQgDgDgGAAQgEAAgEADgAuZhNQgEgDgDgFQgDgFAAgGIgLAAIAAAVIgIAAIAAgwIAIAAIAAAUIALAAQAAgGADgFQADgFAFgCQAFgDAGAAQAIAAAFADQAFAEADAFQADAGAAAHQAAAHgDAGQgDAFgFAEQgFADgIAAQgHAAgFgDgAuVhyQgEACgBAEQgBAEAAAFQAAAFABAEQABAEAEACQADADAFAAQAGAAADgDQADgCACgEQABgEABgFQgBgFgBgEQgCgEgDgCQgDgDgGAAQgFAAgDADgAxOhRQgHgIAAgOQAAgGABgGQABgGABgEQADgFADgEQAEgDAGgBIANgCQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAIABgDIAIAAIgBAFIgDAEIgFACIgPACQgFABgCACIgEAFIgBAIIABAAQADgEAEgCQAEgBAFAAQAHAAAFADQAFADADAGQACAFAAAHQAAAHgDAFQgCAGgGADQgEADgIAAQgMAAgFgHgAxGhxQgDACgCAEQgBAEgBAFQABAEABAEQACAEADACQADADAGAAQAFAAAEgDQADgCABgEQACgEAAgEQAAgFgCgEQgBgEgDgCQgEgCgFAAQgGAAgDACgAyAhNQgEgEgEgFQgCgGAAgHQAAgHACgGQAEgFAEgEQAGgDAHAAQAHAAAGADQAFAEADAFQACAGAAAHQAAAHgCAGQgDAFgFAEQgGADgHAAQgHAAgGgDgAx7hyQgEACgCAEQgBAEAAAFQAAAFABAEQACAEAEACQADADAFAAQAGAAADgDQADgCACgEQABgEAAgFQAAgFgBgEQgCgEgDgCQgDgDgGAAQgFAAgDADgA0mhNQgFgEgDgFQgCgGAAgHQAAgHACgGQADgFAFgEQAFgDAHAAQAIAAAGADQAEAEAEAFQACAGAAAHQAAAHgCAGQgEAFgEAEQgGADgIAAQgHAAgFgDgA0ihyQgDACgCAEQgBAEAAAFQAAAFABAEQACAEADACQAEADAEAAQAGAAADgDQAEgCACgEQABgEAAgFQAAgFgBgEQ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EACQAEADAFAAQAFAAAEgDQADgCABgEQACgEAAgFQAAgFgCgEQgBgEgDgCQgEgDgFAAQgFAAgEADgANqi2QgFgEgDgFQgDgGAAgHQAAgIADgFQADgGAFgDQAFgDAHAAQAHAAAFADQAEADADAFQADAFgBAGIAAADIgkAAQABAIADAFQAEAFAIAAQAFAAADgCQACgCABgDIAIAAQAAAEgCADQgDADgFACQgEACgFAAQgIAAgFgDgAODjTQAAgDgCgCQgBgDgDgBQgDgCgEAAQgEAAgDACQgDABgCADQgCACgBADIAcAAIAAAAgAKii2QgEgDgDgFQgDgFgBgGIgKAAIAAAVIgJAAIAAgwIAJAAIAAAUIALAAQAAgGAEgFQADgFAEgCQAFgDAHAAQAGAAAGADQAFAEADAFQACAGAAAHQAAAHgCAGQgDAFgFAEQgGADgGAAQgHAAgGgDgAKmjbQgDACgCAEQgBAEgBAFQABAFABAEQACAEADACQADADAGAAQAFAAADgDQADgCACgEQABgEAAgFQAAgFgBgEQgCgEgDgCQgDgDgFAAQgGAAgDADgAGmi1QgDgCgCgEQgCgDgBgEQABgEACgEQABgEAEgCQAEgCAHAAIAPAAIAAgCQABgFgDgCQgDgDgGAAQgFAAgDACQgDACAAADIgIAAQAAgFACgDQADgDAEgBQAEgCAGAAQAJAAAFAEQAFAEAAAIIAAAhIgIAAIAAgFIgCAAQgCADgEABQgDACgGAAQgFAAgEgCgAGqjJQgEACAAAEQAAAEAEADQACACAGAAQAEAAADgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgCADgAE7i2QgFgEgDgFQgCgGgBgHQABgHACgGQADgFAFgEQAFgDAIAAQAHAAAFADQAGAEACAFQADAGAAAHQAAAHgDAGQgCAFgGAEQgFADgHAAQgIAAgFgDgAE/jbQgDACgCAEQgBAEgBAFQABAFABAEQACAEADACQAEADAFAAQAFAAAEgDQADgCABgEQACgEAAgFQAAgFgCgEQgBgEgDgCQgEgDgFAAQgFAAgEADgADEi1QgEgCgDgEQgCgDgBgFIAIAAQABAEADADQADACAFAAQAIAAAFgHQAEgGAAgLIgCAAIgDADIgFADIgIABQgFAAgFgDQgFgDgDgFQgCgFAAgGQAAgGACgFQADgGAFgCQAFgEAHAAQAHAAAGAEQAFADADAHQADAHAAAMQAAAKgCAIQgDAIgFAFQgGAFgJAAQgGAAgEgCgADIjvQgDACgDADQgBAEAAAFQAAAFACADQACADADACQADABAEAAQAFAAACgBQAEgCACgDQACgDgBgFQABgFgCgDQgDgEgDgCQgDgBgEAAQgEAAgDABgABhi3QgGgDgDgIQgDgHAAgMQAAgMADgIQADgHAGgEQAFgEAIAAQAGAAAGAEQAGAEADAHQACAIABAMQgBAMgCAHQgDAIgGADQgGAEgGAAQgIAAgFgEgABljtQgEADgCAGQgCAGABAJQgBAIACAGQACAGAEADQADAEAGAAQAFAAAEgEQADgDACgGQABgGAAgIQAAgJgBgGQgCgGgDgDQgEgDgFAAQgGAAgDADgAiKi1QgEgCgCgEQgCgDAAgEQAAgEACgEQACgEAEgCQAEgCAHAAIAPAAIAAgCQAAgFgCgCQgDgDgGAAQgGAAgCACQgDACgBADIgIAAQABgFADgDQACgDAEgBQAEgCAGAAQAIAAAGAEQAFAEAAAIIAAAhIgHAAIAAgFIgCAAQgDADgEABQgEACgFAAQgFAAgEgCgAiHjJQgDACAAAEQAAAEADADQAEACAEAAQAFAAADgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgDADgAmai2QgFgCgDgFQgDgEgBgGIAJAAQABAGAEADQAEAEAGAAQAHAAAEgEQAEgEAAgHQAAgGgEgEQgDgEgIAAIgDAAIgDABIAAgJIAQgOIAAgCIgdAAIAAgHIAnAAIAAAJIgRAOIAAACQAGAAAFADQAEACACAEQADAFAAAGQAAAHgDAFQgDAFgFACQgGADgGAAQgHAAgFgDgAnli2QgFgEgDgFQgCgGgBgHQABgHACgGQADgFAFgEQAFgDAIAAQAHAAAFADQAGAEACAFQADAGAAAHQAAAHgDAGQgCAFgGAEQgFADgHAAQgIAAgFgDgAnhjbQgDACgCAEQgBAEgBAFQABAFABAEQACAEADACQAEADAFAAQAFAAAEgDQADgCABgEQACgEAAgFQAAgFgCgEQgBgEgDgCQgEgDgFAAQgFAAgEADgAqVi2QgFgDgCgFQgDgFgBgGIgLAAIAAAVIgIAAIAAgwIAIAAIAAAUIAMAAQAAgGADgFQADgFAFgCQAEgDAHAAQAHAAAGADQAFAEACAFQADAGAAAHQAAAHgDAGQgCAFgFAEQgGADgHAAQgHAAgFgDgAqSjbQgDACgBAEQgCAEAAAFQAAAFACAEQABAEADACQADADAGAAQAFAAADgDQAEgCACgEQABgEAAgFQAAgFgBgEQgCgEgEgCQgDgDgFAAQgGAAgDADgAtqi2QgGgEgCgFQgCgGgBgHQABgHACgGQACgGAGgDQAFgDAIAAQAFAAAEACQAEACADADQACAEABAEIgIAAQgBgEgDgCQgCgCgFAAQgGAAgDACQgEADgBAEQgCAEABAFQgBAFACAEQACAEADACQADADAGAAQAEAAADgCQAEgDABgEIAIAAQgCAIgFAEQgGAEgHAAQgIAAgFgDgAvUi2QgFgEgCgFQgDgGAAgHQAAgIADgFQACgGAFgDQAFgDAIAAQAHAAAEADQAFADADAFQACAFAAAGIAAADIglAAQABAIAEAFQAEAFAHAAQAFAAADgCQADgCABgDIAIAAQAAAEgDADQgCADgFACQgEACgGAAQgHAAgGgDgAu7jTQABgDgCgCQgCgDgCgBQgEgCgDAAQgFAAgDACQgDABgCADQgBACgBADIAbAAIAAAAgAyYi2QgGgEgCgFQgDgGAAgHQAAgHADgGQACgGAGgDQAFgDAHAAQAGAAADACQAFACADADQACAEAAAEIgIAAQgBgEgCgCQgDgCgFAAQgFAAgEACQgDADgCAEQgBAEAAAFQAAAFABAEQACAEADACQADADAGAAQAFAAADgCQADgDABgEIAIAAQgBAIgGAEQgFAEgIAAQgHAAgFgDgA01i2QgEgEgEgFQgCgGAAgHQAAgHACgGQAEgFAEgEQAGgDAHAAQAIAAAFADQAFAEADAFQADAGgBAHQABAHgDAGQgDAFgFAEQgFADgIAAQgHAAgGgDgA0wjbQgEACgCAEQgBAEAAAFQAAAFABAEQACAEAEACQADADAFAAQAGAAADgDQADgCACgEQABgEAAgFQAAgFgBgEQgCgEgDgCQgDgDgGAAQgFAAgDADgA1ui6QgHgIAAgOQAAgGABgGQABgGABgEQADgFADgEQAEgDAGgBIANgCQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAAAIABgDIAIAAIgBAFIgDAEIgFACIgPACQgFABgCACIgEAFIgBAIIABAAQADgEA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QgDADgEACQgEACgGAAQgIAAgEgDgARek8QAAgDgCgCQgBgDgDgBQgEgCgEAAQgDAAgEACQgDABgBADQgCACgBADIAcAAIAAAAgANAkfQgFgEgDgFQgCgGAAgHQAAgHACgGQADgFAFgEQAFgDAHAAQAIAAAGADQAEAEAEAFQACAGAAAHQAAAHgCAGQgEAFgEAEQgGADgIAAQgHAAgFgDgANElEQgDACgCAEQgBAEAAAFQAAAFABAEQACAEADACQAEADAEAAQAGAAADgDQAEgCACgEQABgEAAgFQAAgFgBgEQgCgEgEgCQgDgDgGAAQgEAAgEADgALUkfQgFgEgDgFQgCgGAAgHQAAgHACgGQADgFAFgEQAFgDAHAAQAIAAAGADQAEAEAEAFQACAGAAAHQAAAHgCAGQgEAFgEAEQgGADgIAAQgHAAgFgDgALYlEQgDACgCAEQgBAEAAAFQAAAFABAEQABAEAEACQAEADAEAAQAGAAADgDQAEgCACgEQABgEAAgFQAAgFgBgEQgCgEgEgCQgDgDgGAAQgEAAgEADgAJRkfQgGgEgCgFQgCgGgBgHQABgIACgFQACgGAGgDQAFgDAHAAQAIAAAEADQAFADACAFQACAFAAAGIAAADIgkAAQAAAIAEAFQAEAFAIAAQAEAAAEgCQADgCABgDIAIAAQgBAEgCADQgDADgEACQgFACgFAAQgIAAgFgDgAJqk8QAAgDgBgCQgCgDgDgBQgDgCgEAAQgEAAgDACQgDABgCADQgCACgBADIAcAAIAAAAgAFukfQgGgEgCgFQgDgGABgHQgBgIADgFQACgGAGgDQAFgDAHAAQAHAAAFADQAFADACAFQACAFABAGIAAADIglAAQAAAIAEAFQAEAFAHAAQAGAAACgCQAEgCABgDIAIAAQgBAEgDADQgCADgEACQgFACgGAAQgHAAgFgDgAGHk8QAAgDgBgCQgCgDgDgBQgDgCgEAAQgEAAgDACQgEABgBADQgCACAAADIAbAAIAAAAgAEHkfQgGgEgCgFQgDgGAAgHQAAgHADgGQACgGAGgDQAFgDAHAAQAGAAAEACQAEACADADQADAEAAAEIgIAAQgBgEgDgCQgDgCgFAAQgFAAgEACQgCADgCAEQgCAEAAAFQAAAFACAEQABAEAEACQADADAFAAQAFAAAEgCQACgDABgEIAIAAQgBAIgFAEQgFAEgJAAQgHAAgFgDgABqkeQgDgCgCgEQgDgDAAgEQAAgEADgEQABgEAEgCQAEgCAHAAIAPAAIAAgCQABgFgDgCQgDgDgGAAQgGAAgCACQgDACAAADIgIAAQAAgFACgDQADgDAEgBQAEgCAGAAQAIAAAGAEQAFAEAAAIIAAAhIgIAAIAAgFIgBAAQgDADgEABQgDACgGAAQgFAAgEgCgABukyQgEACAAAEQAAAEAEADQADACAEAAQAFAAADgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgCADgAg4kfQgFgEgDgFQgCgGAAgHQAAgHACgGQADgFAFgEQAFgDAIAAQAIAAAFADQAFAEADAFQADAGgBAHQABAHgDAGQgDAFgFAEQgFADgIAAQgIAAgFgDgAgzlEQgEACgCAEQgBAEAAAFQAAAFABAEQACAEAEACQADADAFAAQAFAAAEgDQADgCACgEQACgEgBgFQABgFgCgEQgCgEgDgCQgEgDgFAAQgFAAgDADgAihkfQgFgEgCgFQgDgGAAgHQAAgIADgFQACgGAFgDQAGgDAHAAQAHAAAEADQAFADADAFQACAFAAAGIAAADIglAAQABAIAEAFQAEAFAHAAQAFAAADgCQADgCABgDIAIAAQgBAEgCADQgCADgFACQgEACgGAAQgHAAgGgDgAiIk8QABgDgCgCQgCgDgCgBQgEgCgDAAQgFAAgDACQgDABgCADQgBACgBADIAbAAIAAAAgAl0keQgEgCgCgEQgCgDAAgEQAAgEACgEQACgEAEgCQAEgCAHAAIAPAAIAAgCQAAgFgCgCQgDgDgGAAQgGAAgCACQgDACgBADIgIAAQABgFADgDQACgDAEgBQAEgCAGAAQAIAAAGAEQAFAEAAAIIAAAhIgHAAIAAgFIgCAAQgDADgEABQgEACgFAAQgFAAgEgCgAlxkyQgDACAAAEQAAAEADADQAEACAEAAQAFAAADgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgDADgAoHkfQgGgEgCgFQgDgGAAgHQAAgHADgGQACgFAGgEQAFgDAHAAQAHAAAGADQAFAEADAFQADAGAAAHQAAAHgDAGQgDAFgFAEQgGADgHAAQgHAAgFgDgAoElEQgDACgCAEQgBAEAAAFQAAAFABAEQACAEADACQAEADAFAAQAGAAADgDQAEgCABgEQACgEAAgFQAAgFgCgEQgBgEgEgCQgDgDgGAAQgFAAgEADgApUkeQgDgCgDgEQgCgDAAgEQAAgEACgEQACgEAEgCQAEgCAHAAIAPAAIAAgCQAAgFgCgCQgDgDgGAAQgGAAgCACQgDACgBADIgHAAQAAgFADgDQACgDAEgBQAEgCAGAAQAIAAAGAEQAFAEAAAIIAAAhIgIAAIAAgFIgBAAQgDADgEABQgEACgFAAQgFAAgEgCgApRkyQgDACAAAEQAAAEADADQAEACAEAAQAEAAAEgCIAFgFQACgDAAgEIAAgEIgOAAQgGAAgDADgAq8keQgEgCgCgEQgCgDAAgEQAAgEACgEQABgEAEgCQAFgCAHAAIAOAAIAAgCQABgFgDgCQgDgDgGAAQgFAAgDACQgDACAAADIgIAAQAAgFADgDQADgDADgBQAEgCAGAAQAJAAAGAEQAEAEAAAIIAAAhIgHAAIAAgFIgCAAQgDADgDABQgEACgFAAQgFAAgEgCgAq5kyQgDACAAAEQAAAEADADQADACAFAAQAEAAAEgCIAEgFQACgDAAgEIAAgEIgNAAQgGAAgDADgAsgkfQgFgEgDgFQgCgGgBgHQABgHACgGQADgFAFgEQAFgDAIAAQAHAAAFADQAGAEACAFQADAGAAAHQAAAHgDAGQgCAFgGAEQgFADgHAAQgIAAgFgDgAsclEQgDACgCAEQgBAEgBAFQABAFABAEQACAEADACQAEADAFAAQAFAAAEgDQADgCABgEQACgEAAgFQAAgFgCgEQgBgEgDgCQgEgDgFAAQgFAAgEADgAuZkfQgEgEgEgFQgCgGAAgHQAAgHACgGQAEgFAEgEQAFgDAIAAQAHAAAGADQAFAEADAFQACAGAAAHQAAAHgCAGQgDAFgFAEQgGADgHAAQgIAAgFgDgAuVlEQgDACgBAEQgCAEAAAFQAAAFACAEQABAEADACQAEADAFAAQAGAAADgDQADgCACgEQACgEgBgFQABgFgCgEQgCgEgDgCQgDgDgGAAQgFAAgEADgAwokfQgFgEgDgFQgCgGAAgHQAAgHACgGQADgGAFgDQAFgDAIAAQAFAAAFACQAEACACADQADAEABAEIgIAAQgBgEgEgCQgCgCgFAAQgFAAgEACQgDADgCAEQgBAEAAAFQAAAFABAEQACAEAEACQADADAFAAQAFAAADgCQADgDABgEIAIAAQgCAIgFAEQgFAEgIAAQgIAAgFgDgAxakfQgFgEgDgFQgDgGAAgHQAAgIADgFQADgGAFgDQAFgDAHAAQAHAAAFADQAEADADAFQADAFgBAGIAAADIgkAAQABAIADAFQAEAFAIAAQAFAAADgCQACgCABgDIAIAAQAAAEgCADQgDADgFACQgEACgFAAQgIAAgFgDgAxBk8QAAgDgCgCQgBgDgDgBQgDgCgEAAQgEAAgEACQgCABgCADQgCACgBADIAcAAIAAAAgA0tkfQgFgEgDgFQgDgGABgHQgBgHADgGQADgFAFgEQAFgDAHAAQAIAAAGADQAFAEADAFQACAGAAAHQAAAHgCAGQgDAFgFAEQgGADgIAAQgHAAgFgDgA0plEQgDACgCAEQgCAEABAFQgBAFACAEQACAEADACQADADAFAAQAGAAADgDQAEgCACgEQABgEAAgFQAAgFgBgEQgCgEgEgCQgDgDgGAAQgFAAgDADgAU6kdIAAgwIAIAAIAAAwgAUMkdIAAgwIAIAAIAAAQIANAAQAIAAAFAEQAFAEAAAIQAAAHgFAEQgFAFgIAAgAUUkkIALAAQAHAAACgDQADgCAAgEQAAgEgDgDQgCgCgHAAIgLAAgAT4kdIAAgVIgaAAIAAAVIgJAAIAAgwIAJAAIAAAUIAaAAIAAgUIAIAAIAAAwgASlkdIAAgwIAIAAIAAAQIAOAAQAJAAAEAEQAFAEAAAIQAAAHgFAEQgEAFgJAAgAStkkIANAAQAHAAACgDQADgCgBgEQAAgEgCgDQgCgCgHAAIgNAAgASRkdIAAgpIgUAAIAAAMQgBALgBAGQgCAGgEADQgEADgGAAIgBAAIAAgIIABAAQADAAADgCQACgCABgEIABgNIAAgTIAkAAIAAAwgAQdkdIAAgpIgQAAIAAgHIAoAAIAAAHIgQAAIAAApgAP9kdIAAglIgCAAIgWAlIgLAAIAAgwIAIAAIAAAlIACAAIAVglIAMAAIAAAwgAPGkdIAAgVIgaAAIAAAVIgIAAIAAgwIAIAAIAAAUIAaAAIAAgUIAIAAIAAAwgAOQkdIAAgpIgVAAIAAAMQAAALgCAGQgCAGgDADQgEADgGAAIgCAAIAAgIIACAAQADAAACgCQACgCABgEIACgNIAAgTIAkAAIAAAwgAMkkd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CACAAADIgIAAQAAgEACgDQADgDAEgCQAEgCAGAAQAJAAAFAFQAFAEAAAIIAAAgIgIAAIAAgFIgBAAQgDADgEACQgDABgGAAQgFAAgEgCgAJ5mbQgEACAAAFQAAAEAEACQACACAGAAQAEAAADgBIAFgFQACgDAAgEIAAgEIgOAAQgGAAgCACgAIKmIQgFgDgDgGQgCgFgBgIQABgHACgFQADgGAFgDQAFgDAIgBQAHABAFADQAGADACAGQADAFAAAHQAAAIgDAFQgCAGgGADQgFADgHAAQgIAAgFgDgAIOmtQgDADgCAEQgBAEgBAEQABAFABAEQACAEADADQAEACAFAAQAFAAAEgCQADgDABgEQACgEAAgFQAAgEgCgEQgBgEgDgDQgEgDgFAAQgFAAgEADgAGSmHQgFgDgDgEQgDgEAAgGQAAgEACgDQABgEACgCIAFgDIAAgCIgDgCIgEgFQgBgDAAgDQAAgGACgEQAEgEAEgCQAGgCAGAAQAGAAAFACQAFACADAEQACAEABAGIgBAGIgEAFIgDACIAAACIAEADQACACACAEQACADgBAEQAAAGgCAEQgDAEgFADQgGACgHAAQgIAAgFgCgAGTmiQgEAEAAAFQAAAGAEAEQAFADAHAAQAHAAAFgDQADgEAAgGQAAgFgDgEQgFgDgHAAQgHAAgFADgAGYnBIgFAEQgCACAAAEQAAADACADIAFAEIAHABIAGgBQAEgCACgCQABgDABgDQgBgEgBgCQgCgCgEgCIgGgBIgHABgAEvmIQgGgEgDgHQgDgIAAgMQAAgMADgHQADgIAGgDQAFgEAHAAQAHAAAGAEQAFADADAIQADAHAAAMQAAAMgDAIQgDAHgFAEQgGADgHAAQgHAAgFgDgAEym+QgDADgCAGQgCAGAAAIQAAAIACAGQACAGADAEQADADAGAAQAFAAAEgDQADgEACgGQACgGAAgIQAAgIgCgGQgCgGgDgDQgEgEgFAAQgGAAgDAEgAA9mMQgFgHAAgOQgBgGABgGQABgGACgFQACgFADgDQAEgEAGgBIAMgCQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAIACgCIAHAAIgBAEIgDAEIgGACIgOADQgEAAgDADIgEAFIgCAHIADAAQADgEADgBQAEgCAFAAQAHAAAFADQAFAEADAFQACAGABAGQAAAHgEAGQgCAFgFADQgGADgHAAQgLAAgHgHgABGmrQgEACgBAEQgCAEAAAEQAAAFACAEQABAEAEACQADACAGAAQAFAAADgCQAEgCACgEQACgEAAgFQAAgEgCgEQgCgEgEgCQgDgDgFAAQgGAAgDADgAAOmHQgEgCgDgDQgCgEAAgEQAAgEACgEQACgDAEgCQAEgDAHAAIAPAAIAAgCQABgEgEgDQgCgCgHgBQgEAAgDACQgDACgBADIgIAAQABgEADgDQACgDAEgCQAEgCAFAAQAJAAAGAFQAFAEAAAIIAAAgIgHAAIAAgFIgCAAQgDADgDACQgEABgFAAQgGAAgDgCgAAQmbQgCACAAAFQAAAEACACQADACAFAAQAEAAAEgBIAFgFQACgDAAgEIAAgEIgOAAQgGAAgDACgAhSmIQgGgDgCgGQgCgGgBgHQABgHACgGQACgFAGgDQAFgEAHAAQAIABAEADQAFADACAFQACAFABAGIAAACIglAAQAAAJAEAFQAEAEAIAAQAEAAADgBQAEgCABgEIAIAAQgBAEgDADQgCAEgEACQgFABgFAAQgIAAgFgDgAg5mkQAAgDgBgDQgCgCgDgCQgDgCgEAAQgEAAgDACQgEACgBACQgCADAAADIAbAAIAAAAgAjZmIQgGgEgDgHQgDgIAAgMQAAgMADgHQADgIAGgDQAFgEAIAAQAGAAAGAEQAGADADAIQADAHAAAMQAAAMgDAIQgDAHgGAEQgGADgGAAQgIAAgFgDgAjVm+QgEADgCAGQgCAGABAIQgBAIACAGQACAGAEAEQADADAGAAQAFAAAEgDQADgEACgGQABgGAAgIQAAgIgBgGQgCgGgDgDQgEgEgFAAQgGAAgDAEgAkPmHQgEgDgEgEQgDgFAAgFIAJAAQAAAFAEAEQAFADAGAAQAGAAAFgEQADgDAAgHQAAgHgDgEQgEgDgHAAIgEAAIgCAAIAAgJIAQgOIAAgCIgdAAIAAgHIAnAAIAAAJIgRAPIAAACQAGAAAEACQAEACADAFQADAEgBAHQAAAHgCAEQgDAFgFADQgGACgGAAQgHAAgGgCgAlZmIQgFgDgEgGQgCgFAAgIQAAgHACgFQAEgGAFgDQAEgDAIgBQAHABAGADQAFADADAGQACAFABAHQgBAIgCAFQgDAGgFADQgGADgHAAQgIAAgEgDgAlWmtQgDADgBAEQgCAEAAAEQAAAFACAEQABAEADADQAEACAFAAQAGAAADgCQADgDACgEQABgEAAgFQAAgEgBgEQgCgEgDgDQgDgDgGAAQgFAAgEADgAocmIQgGgDgCgGQgCgFgBgIQABgHACgFQACgGAGgDQAFgDAIgBQAFAAAEACQAFACACAEQACADABAEIgIAAQgBgDgDgCQgCgDgFAAQgGAAgDADQgEACgBAEQgBAEgBAFQABAFABAEQACAEADADQADACAGAAQAEAAAEgCQADgCAAgEIAJAAQgCAHgFAEQgGAEgHAAQgIAAgFgDgAqYmIQgFgDgDgGQgDgFAAgIQAAgHADgFQADgGAFgDQAFgDAIgBQAFAAAEACQAFACACAEQADADAAAEIgIAAQgBgDgDgCQgDgDgEAAQgGAAgDADQgDACgCAEQgBAEgBAFQABAFABAEQABAEAEADQADACAGAAQAFAAADgCQACgCABgEIAIAAQgBAHgFAEQgGAEgHAAQgIAAgFgDgAtqmIQgEgDgEgGQgCgFAAgIQAAgHACgFQAEgGAEgDQAGgDAHgBQAIABAFADQAFADADAGQADAFgBAHQABAIgDAFQgDAGgFADQgFADgIAAQgHAAgGgDgAtlmtQgEADgCAEQgBAEAAAEQAAAFABAEQACAEAEADQADACAFAAQAGAAADgCQAEgDABgEQABgEAAgFQAAgEgBgEQgBgEgEgDQgDgDgGAAQgFAAgDADgAvRmIQgGgDgCgGQgDgFAAgIQAAgHADgFQACgGAGgDQAEgDAIgBQAIABAFADQAFADADAGQADAFAAAHQAAAIgDAFQgDAGgFADQgFADgIAAQgIAAgEgDgAvOmtQgDADgBAEQgCAEAAAEQAAAFACAEQABAEADADQAEACAFAAQAFAAAEgCQAEgDABgEQABgEABgFQgBgEgBgEQgBgEgEgDQgEgDgFAAQgFAAgEADgAU2mGIAAgLIAJAAIAAALgATsmGIAAgVIgaAAIAAAVIgIAAIAAgvIAIAAIAAATIAaAAIAAgTIAIAAIAAAvgASZmGIAAgvIAJAAIAAAQIAOAAQAIAAAFAEQAFAEAAAHQAAAIgFAEQgFAEgIAAgASimNIANAAQAGAAADgCQACgDAAgEQAAgEgCgCQgDgDgGAAIgNAAgASGmGIAAgoIgVAAIAAALQAAALgCA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");
	this.shape.setTransform(298.3,-169.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(158.2,-215.8,280.1,91.9);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ17ÐºÐ¾Ð¿Ð¸Ñ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41D2D").s().p("AzLAYIAAgvMAmXAAAIAAAvg");
	this.shape.setTransform(-125.6,-12.7,1.292,0.691,0,0,0,-122.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126,-12.6,317.5,3.4);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ12ÐºÐ¾Ð¿Ð¸Ñ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08296C").s().p("AhqCvIAAlaIA+AAIAAAXQAPgPANgFQAOgGATAAQApAAAWAXQARAPAFAcQAEAYABApQAAArgHAYQgFAXgPAPQgWAXgpAAQgSAAgOgGQgNgGgOgNIAABzgAglhbQgFAOAAAkQAAAmAKAPQAKAQAWAAQAYAAAKgRQAJgPAAgpQAAgogJgQQgKgQgYAAQgcAAgJAag");
	this.shape.setTransform(79.8,4.2,0.918,0.918);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#08296C").s().p("AgeB/IAAjFIhLAAIAAg4IDTAAIAAA4IhJAAIAADFg");
	this.shape_1.setTransform(58,0,0.918,0.918);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#08296C").s().p("AApB/IAAhmIhRAAIAABmIhAAAIAAj9IBAAAIAABgIBRAAIAAhgIBAAAIAAD9g");
	this.shape_2.setTransform(36.5,0,0.918,0.918);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#08296C").s().p("AhuAAQAAg8AegiQAegjAyAAQAzAAAeAhQAeAhAAA4IAAAbIieAAQADA4A2AAQAQABANgGQANgFANgNIAnAlQgOANgJAGQgJAGgMAGQgXAJgeAAQh1AAAAiCgAghg+QgNANgBAaIBfAAQgBgagNgNQgMgOgWgBQgVABgMAOg");
	this.shape_3.setTransform(13.5,0,0.918,0.918);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#08296C").s().p("AA9CeIAAg+Ii2AAIAAj+IBAAAIAADFIBQAAIAAjFIBAAAIAADFIAjAAIAAB3g");
	this.shape_4.setTransform(-9.3,2.9,0.918,0.918);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#08296C").s().p("AhYCuIAAg5IAPAAQAOAAAGgFQAHgFAEgNIALggIhXjrIBDAAIA0CdIAzidIBDAAIhtEnQgKAbgRAMQgRANgdAAg");
	this.shape_5.setTransform(-33.4,4.3,0.918,0.918);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#08296C").s().p("AhSBtQgWgVAAglQAAgjAXgSQAXgUAoAAIA8AAIAAgNQAAgVgMgKQgLgJgZAAQgRAAgKAEQgKAEgLANIgogoQASgSAQgIQAWgJAiAAQBtAAAABaIAACnIg+AAIAAgWQgPANgLAFQgOAGgVAAQgpAAgXgVgAgrAxQAAAdAoAAQAXAAALgKQALgLAAgXIAAgOIgyAAQgjAAAAAdg");
	this.shape_6.setTransform(-54.9,0,0.918,0.918);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#08296C").s().p("Ah9CuIAAlbIDlAAIAAA9IiiAAIAABGIBHAAQA0AAAfAfQAeAcAAAwQAAAxgeAdQgfAfg0AAgAg6BxIBEAAQAWAAANgNQANgNAAgWQAAgVgNgNQgNgOgWAAIhEAAg");
	this.shape_7.setTransform(-78,-4.3,0.918,0.918);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.5,-20.2,179.1,40.5);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ6ÐºÐ¾Ð¿Ð¸Ñ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 2
	this.instance = new lib.f1();
	this.instance.parent = this;
	this.instance.setTransform(-308,-144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308,-144,620,308);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ5ÐºÐ¾Ð¿Ð¸Ñ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m
	this.instance = new lib.bm23_1();
	this.instance.parent = this;
	this.instance.setTransform(231,-157,0.748,0.748);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sh
	this.instance_1 = new lib.sh1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(273,12,0.702,0.702);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(231,-157,231.9,240.7);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ4ÐºÐ¾Ð¿Ð¸Ñ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.instance = new lib.f3();
	this.instance.parent = this;
	this.instance.setTransform(-289,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289,-150,620,308);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3ÐºÐ¾Ð¿Ð¸Ñ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#272B49").s().p("EgpZAU1IAA6jQgIiOCjhoIQ1rQMA/jAAAIAAXuQAHB7h6BeI1ZOig");
	this.shape.setTransform(-64.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-329.2,-133.2,530.1,266.5);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3ÐºÐ¾Ð¿Ð¸Ñ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m
	this.instance = new lib.bm23();
	this.instance.parent = this;
	this.instance.setTransform(-115,-118,0.79,0.79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sh
	this.instance_1 = new lib.sh2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-108,38,0.807,0.807);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-118,237,239.2);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3ÐºÐ¾Ð¿Ð¸Ñ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08296C").s().p("AhrBKQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDUiNQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABAAQAAABAAABQAAAAAAABIAACFQAAAEgCACQgCADgEAAg");
	this.shape.setTransform(0,0,0.918,0.918);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.1,-6.7,20.3,13.6);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ2ÐºÐ¾Ð¿Ð¸Ñ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.instance = new lib.f1();
	this.instance.parent = this;
	this.instance.setTransform(-274,-114);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-274,-114,620,308);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ2ÐºÐ¾Ð¿Ð¸Ñ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08296C").s().p("Ai0CRQgDAAgCgDQgDgCAAgEIAAg/QAAgJAHgEIEvjKQAHgEAHAEIAuAfQAHAFAAAIIAAAzQAAAHgHAFIkGCvQgIAFgIAAg");
	this.shape.setTransform(0,0,0.918,0.918);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-13.3,34.7,26.6);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ1ÐºÐ¾Ð¿Ð¸Ñ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ED1D24").s().p("AqjHBIAAuBIVHAAIAAOBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-44.9,135.1,89.9);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ1ÐºÐ¾Ð¿Ð¸Ñ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m
	this.instance = new lib.bm13();
	this.instance.parent = this;
	this.instance.setTransform(-123,-127,0.79,0.79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-127,237,237);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ1ÐºÐ¾Ð¿Ð¸Ñ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð¡Ð»Ð¾Ð¹ 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41D2D").s().p("AiNCAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAh5QAAgHAHgFICuh1QAHgEAGAEIBaA8QADACAAADQAAADgDABIkVC5IgCABIgDgBg");
	this.shape.setTransform(0,0,0.918,0.918);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.2,-11.8,26.4,23.7);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ32ÐºÐ¾Ð¿Ð¸Ñ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Button
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ31ÐºÐ¾Ð¿Ð¸Ñ8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(402.4,93.3,0.034,0.034);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).wait(1).to({regX:9.2,regY:0.6,scaleX:0.04,scaleY:0.04,x:402.8},0).wait(1).to({scaleX:0.06,scaleY:0.06,x:403,y:93.4},0).wait(1).to({scaleX:0.1,scaleY:0.1,x:403.3},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:403.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:404.7,y:93.5},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:406,y:93.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:407.7,y:93.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:409.4,y:93.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:410.7,y:93.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:411.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:412.1,y:94},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:412.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:412.6},0).wait(1).to({regX:0,regY:0,scaleX:1.12,scaleY:1.12,x:402.4,y:93.3},0).wait(1).to({regX:9.2,regY:0.6,scaleX:1.11,scaleY:1.11,x:412.6,y:94},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:412.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:412.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:411.7,y:93.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:411.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:411},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:410.8},0).wait(1).to({regX:0,regY:0,scaleX:0.91,scaleY:0.91,x:402.4,y:93.3},0).wait(1).to({regX:9.2,regY:0.6,scaleX:0.92,scaleY:0.92,x:410.8,y:93.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:411},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:411.3},0).wait(1).to({scaleX:1,scaleY:1,x:411.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:411.8},0).wait(1).to({regX:0,regY:0,scaleX:1.02,scaleY:1.02,x:402.4,y:93.3},0).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).to({startPosition:0},45).wait(1).to({regX:9.2,regY:0.6,scaleX:1,scaleY:1,x:411.6,y:93.9},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:411.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:411.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:411},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:410.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:410.8},0).wait(1).to({regX:0,regY:0,scaleX:0.91,scaleY:0.91,x:402.4,y:93.3},0).wait(1).to({regX:9.2,regY:0.6,scaleX:0.91,scaleY:0.91,x:410.8,y:93.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:410.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:411.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:411.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:411.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:412.4,y:94},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:412.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:412.8},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({regX:0,regY:0,scaleX:1.13,scaleY:1.13,x:402.4,y:93.3},0).wait(1).to({regX:9.2,regY:0.6,scaleX:1.13,scaleY:1.13,x:412.8,y:94},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:412.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:412.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:412.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:411.7,y:93.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:411.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:411.4},0).wait(1).to({regX:0,regY:0,scaleX:0.97,scaleY:0.97,x:402.4,y:93.3},0).to({scaleX:1,scaleY:1},4).to({startPosition:0},49).wait(1).to({regX:9.2,regY:0.6,scaleX:1,scaleY:1,x:411.6,y:93.9},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:411.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:411.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:411},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:410.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:410.8},0).wait(1).to({regX:0,regY:0,scaleX:0.91,scaleY:0.91,x:402.4,y:93.3},0).wait(1).to({regX:9.2,regY:0.6,scaleX:0.91,scaleY:0.91,x:410.8,y:93.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:410.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:411.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:411.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:411.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:412.4,y:94},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:412.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:412.8},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({regX:0,regY:0,scaleX:1.13,scaleY:1.13,x:402.4,y:93.3},0).wait(1).to({regX:9.2,regY:0.6,scaleX:1.13,scaleY:1.13,x:412.8,y:94},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:412.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:412.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:412.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:411.7,y:93.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:411.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:411.4},0).wait(1).to({regX:0,regY:0,scaleX:0.97,scaleY:0.97,x:402.4,y:93.3},0).to({scaleX:1,scaleY:1},4).to({startPosition:0},15).wait(1).to({regX:9.2,regY:0.6,x:411.6,y:93.5},0).wait(1).to({y:92.4},0).wait(1).to({y:90.4},0).wait(1).to({y:87.5},0).wait(1).to({y:83.5},0).wait(1).to({y:78.4},0).wait(1).to({y:71.9},0).wait(1).to({y:64},0).wait(1).to({y:54.4},0).wait(1).to({y:42.8},0).wait(1).to({y:29},0).wait(1).to({y:12.6},0).wait(1).to({y:-6.8},0).wait(1).to({y:-29.7},0).wait(1).to({y:-56.5},0).wait(1).to({y:-87.2},0).wait(1).to({y:-121.5},0).wait(1).to({y:-157.7},0).wait(1).to({y:-193},0).wait(1).to({y:-224.6},0).wait(1).to({y:-250.8},0).wait(1).to({y:-271.2},0).wait(1).to({y:-286.3},0).wait(1).to({y:-296.8},0).wait(1).to({y:-303.5},0).wait(1).to({y:-307.2},0).wait(1).to({regX:0,regY:0,x:402.4,y:-309},0).wait(1491));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ29ÐºÐ¾Ð¿Ð¸Ñ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 20% Ð²ÐµÑÐ½ÑÐ¼ Ð±Ð¾Ð½ÑÑÐ°Ð¼Ð¸!
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ19ÐºÐ¾Ð¿Ð¸Ñ4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-225.1,141);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:20.3,regY:9.6,x:-204.8,y:150.4},0).wait(1).to({y:150.1},0).wait(1).to({y:149.4},0).wait(1).to({y:148.4},0).wait(1).to({y:147.1},0).wait(1).to({y:145.3},0).wait(1).to({y:143},0).wait(1).to({y:140.1},0).wait(1).to({y:136.5},0).wait(1).to({y:132},0).wait(1).to({y:126.6},0).wait(1).to({y:120},0).wait(1).to({y:112.2},0).wait(1).to({y:103.4},0).wait(1).to({y:94.1},0).wait(1).to({y:84.8},0).wait(1).to({y:76.2},0).wait(1).to({y:68.5},0).wait(1).to({y:61.9},0).wait(1).to({y:56.2},0).wait(1).to({y:51.5},0).wait(1).to({y:47.4},0).wait(1).to({y:44},0).wait(1).to({y:41.2},0).wait(1).to({y:38.8},0).wait(1).to({y:36.8},0).wait(1).to({y:35.1},0).wait(1).to({y:33.8},0).wait(1).to({y:32.7},0).wait(1).to({y:31.9},0).wait(1).to({y:31.3},0).wait(1).to({y:30.9},0).wait(1).to({y:30.6},0).wait(1).to({regX:0,regY:0,x:-225.1,y:21},0).to({startPosition:0},189).wait(1).to({regX:20.3,regY:9.6,x:-204.8,y:30.2},0).wait(1).to({y:29},0).wait(1).to({y:26.8},0).wait(1).to({y:23.7},0).wait(1).to({y:19.4},0).wait(1).to({y:13.7},0).wait(1).to({y:6.7},0).wait(1).to({y:-2.1},0).wait(1).to({y:-12.9},0).wait(1).to({y:-26},0).wait(1).to({y:-41.9},0).wait(1).to({y:-61},0).wait(1).to({y:-83.9},0).wait(1).to({y:-111.3},0).wait(1).to({y:-143.3},0).wait(1).to({y:-179.6},0).wait(1).to({y:-218.3},0).wait(1).to({y:-256.1},0).wait(1).to({y:-289.7},0).wait(1).to({y:-317.5},0).wait(1).to({y:-339.2},0).wait(1).to({y:-355.6},0).wait(1).to({y:-367.6},0).wait(1).to({y:-375.9},0).wait(1).to({y:-381.3},0).wait(1).to({y:-384.2},0).wait(1).to({regX:0,regY:0,x:-225.1,y:-394.7},0).wait(188));

	// ÐÑÐµ ÐºÐ¾Ð²ÑÑ
	this.instance_1 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ20ÐºÐ¾Ð¿Ð¸Ñ4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-350.6,94.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:107.7,regY:1.9,x:-242.9,y:96.6},0).wait(1).to({y:96.2},0).wait(1).to({y:95.6},0).wait(1).to({y:94.6},0).wait(1).to({y:93.2},0).wait(1).to({y:91.5},0).wait(1).to({y:89.2},0).wait(1).to({y:86.3},0).wait(1).to({y:82.6},0).wait(1).to({y:78.2},0).wait(1).to({y:72.7},0).wait(1).to({y:66.1},0).wait(1).to({y:58.4},0).wait(1).to({y:49.6},0).wait(1).to({y:40.2},0).wait(1).to({y:30.9},0).wait(1).to({y:22.3},0).wait(1).to({y:14.7},0).wait(1).to({y:8},0).wait(1).to({y:2.4},0).wait(1).to({y:-2.3},0).wait(1).to({y:-6.4},0).wait(1).to({y:-9.8},0).wait(1).to({y:-12.6},0).wait(1).to({y:-15},0).wait(1).to({y:-17},0).wait(1).to({y:-18.7},0).wait(1).to({y:-20},0).wait(1).to({y:-21.1},0).wait(1).to({y:-21.9},0).wait(1).to({y:-22.5},0).wait(1).to({y:-22.9},0).wait(1).to({y:-23.2},0).wait(1).to({regX:0,regY:0,x:-350.6,y:-25.2},0).to({startPosition:0},193).wait(1).to({regX:107.7,regY:1.9,x:-242.9,y:-23.6},0).wait(1).to({y:-24.8},0).wait(1).to({y:-27},0).wait(1).to({y:-30.1},0).wait(1).to({y:-34.4},0).wait(1).to({y:-40.1},0).wait(1).to({y:-47.2},0).wait(1).to({y:-56},0).wait(1).to({y:-66.8},0).wait(1).to({y:-79.9},0).wait(1).to({y:-95.8},0).wait(1).to({y:-114.9},0).wait(1).to({y:-137.8},0).wait(1).to({y:-165.1},0).wait(1).to({y:-197.1},0).wait(1).to({y:-233.4},0).wait(1).to({y:-272.1},0).wait(1).to({y:-310},0).wait(1).to({y:-343.6},0).wait(1).to({y:-371.3},0).wait(1).to({y:-393},0).wait(1).to({y:-409.4},0).wait(1).to({y:-421.4},0).wait(1).to({y:-429.7},0).wait(1).to({y:-435.1},0).wait(1).to({y:-438},0).wait(1).to({regX:0,regY:0,x:-350.6,y:-440.9},0).wait(188));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-458,65.2,429.1,56.9);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ21ÐºÐ¾Ð¿Ð¸Ñ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// //mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqiHBIVGuBIAAOBg");
	mask.setTransform(460,89.6);

	// red plate
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ1ÐºÐ¾Ð¿Ð¸Ñ15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(460,-5.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-5.2},0).wait(1).to({y:-4.6},0).wait(1).to({y:-3.4},0).wait(1).to({y:-1.7},0).wait(1).to({y:0.6},0).wait(1).to({y:3.6},0).wait(1).to({y:7.3},0).wait(1).to({y:11.7},0).wait(1).to({y:16.8},0).wait(1).to({y:22.4},0).wait(1).to({y:28.4},0).wait(1).to({y:34.4},0).wait(1).to({y:40.5},0).wait(1).to({y:46.2},0).wait(1).to({y:51.6},0).wait(1).to({y:56.6},0).wait(1).to({y:61.1},0).wait(1).to({y:65.2},0).wait(1).to({y:68.8},0).wait(1).to({y:72.1},0).wait(1).to({y:75},0).wait(1).to({y:77.5},0).wait(1).to({y:79.8},0).wait(1).to({y:81.7},0).wait(1).to({y:83.4},0).wait(1).to({y:84.8},0).wait(1).to({y:86},0).wait(1).to({y:87},0).wait(1).to({y:87.9},0).wait(1).to({y:88.5},0).wait(1).to({y:89},0).wait(1).to({y:89.3},0).wait(1).to({y:89.5},0).wait(1).to({y:89.6},0).wait(396));

	// //mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_1 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_2 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_3 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_4 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_5 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_6 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_7 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_8 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_9 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_10 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_11 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_12 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_13 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_14 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_15 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_16 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_17 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_18 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_19 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_20 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_21 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_22 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_23 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_24 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_25 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_26 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_27 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_28 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_29 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_30 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_31 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_32 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_33 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");
	var mask_1_graphics_34 = new cjs.Graphics().p("EgpZAU1IAA6kQgIiNCjhnIQ1rQMA/jAAAIAAXtQAHB6h6BfI1ZOig");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:-38.9,y:1.3}).wait(1).to({graphics:mask_1_graphics_1,x:-38.3,y:1.3}).wait(1).to({graphics:mask_1_graphics_2,x:-36.2,y:1.3}).wait(1).to({graphics:mask_1_graphics_3,x:-32.6,y:1.3}).wait(1).to({graphics:mask_1_graphics_4,x:-27.2,y:1.3}).wait(1).to({graphics:mask_1_graphics_5,x:-19.9,y:1.3}).wait(1).to({graphics:mask_1_graphics_6,x:-10.4,y:1.3}).wait(1).to({graphics:mask_1_graphics_7,x:1.4,y:1.3}).wait(1).to({graphics:mask_1_graphics_8,x:15.4,y:1.3}).wait(1).to({graphics:mask_1_graphics_9,x:31.5,y:1.3}).wait(1).to({graphics:mask_1_graphics_10,x:49.3,y:1.3}).wait(1).to({graphics:mask_1_graphics_11,x:68.2,y:1.3}).wait(1).to({graphics:mask_1_graphics_12,x:87.5,y:1.3}).wait(1).to({graphics:mask_1_graphics_13,x:106.6,y:1.3}).wait(1).to({graphics:mask_1_graphics_14,x:124.9,y:1.3}).wait(1).to({graphics:mask_1_graphics_15,x:142,y:1.3}).wait(1).to({graphics:mask_1_graphics_16,x:157.8,y:1.3}).wait(1).to({graphics:mask_1_graphics_17,x:172.1,y:1.3}).wait(1).to({graphics:mask_1_graphics_18,x:185.1,y:1.3}).wait(1).to({graphics:mask_1_graphics_19,x:196.7,y:1.3}).wait(1).to({graphics:mask_1_graphics_20,x:207,y:1.3}).wait(1).to({graphics:mask_1_graphics_21,x:216.2,y:1.3}).wait(1).to({graphics:mask_1_graphics_22,x:224.3,y:1.3}).wait(1).to({graphics:mask_1_graphics_23,x:231.3,y:1.3}).wait(1).to({graphics:mask_1_graphics_24,x:237.5,y:1.3}).wait(1).to({graphics:mask_1_graphics_25,x:242.8,y:1.3}).wait(1).to({graphics:mask_1_graphics_26,x:247.4,y:1.3}).wait(1).to({graphics:mask_1_graphics_27,x:251.3,y:1.3}).wait(1).to({graphics:mask_1_graphics_28,x:254.5,y:1.3}).wait(1).to({graphics:mask_1_graphics_29,x:257.1,y:1.3}).wait(1).to({graphics:mask_1_graphics_30,x:259.1,y:1.3}).wait(1).to({graphics:mask_1_graphics_31,x:260.7,y:1.3}).wait(1).to({graphics:mask_1_graphics_32,x:261.8,y:1.3}).wait(1).to({graphics:mask_1_graphics_33,x:262.4,y:1.3}).wait(1).to({graphics:mask_1_graphics_34,x:262.6,y:1.3}).wait(396));

	// blue plate
	this.instance_1 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3ÐºÐ¾Ð¿Ð¸Ñ9("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(556.9,1.3);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-64.2,x:492.2},0).wait(1).to({x:490.6},0).wait(1).to({x:487.9},0).wait(1).to({x:483.8},0).wait(1).to({x:478.1},0).wait(1).to({x:470.9},0).wait(1).to({x:461.9},0).wait(1).to({x:451.2},0).wait(1).to({x:438.9},0).wait(1).to({x:425.3},0).wait(1).to({x:410.9},0).wait(1).to({x:396.2},0).wait(1).to({x:381.6},0).wait(1).to({x:367.7},0).wait(1).to({x:354.6},0).wait(1).to({x:342.5},0).wait(1).to({x:331.6},0).wait(1).to({x:321.7},0).wait(1).to({x:312.8},0).wait(1).to({x:305},0).wait(1).to({x:298},0).wait(1).to({x:291.8},0).wait(1).to({x:286.4},0).wait(1).to({x:281.7},0).wait(1).to({x:277.6},0).wait(1).to({x:274.1},0).wait(1).to({x:271.2},0).wait(1).to({x:268.7},0).wait(1).to({x:266.7},0).wait(1).to({x:265.2},0).wait(1).to({x:264},0).wait(1).to({x:263.2},0).wait(1).to({x:262.7},0).wait(1).to({regX:0,x:326.8},0).wait(396));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ14ÐºÐ¾Ð¿Ð¸Ñ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// //mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("EggLgCXIAAnMIdOAAIAAHMg");
	var mask_graphics_12 = new cjs.Graphics().p("EggLgCXIAAnMIdOAAIAAHMg");
	var mask_graphics_13 = new cjs.Graphics().p("EggLgCWIAAnMIdOAAIAAHMg");
	var mask_graphics_14 = new cjs.Graphics().p("EggLgCUIAAnMIdOAAIAAHMg");
	var mask_graphics_15 = new cjs.Graphics().p("EggLgCSIAAnMIdOAAIAAHMg");
	var mask_graphics_16 = new cjs.Graphics().p("EggLgCOIAAnMIdOAAIAAHMg");
	var mask_graphics_17 = new cjs.Graphics().p("EggLgCJIAAnMIdOAAIAAHMg");
	var mask_graphics_18 = new cjs.Graphics().p("EggLgCDIAAnMIdOAAIAAHMg");
	var mask_graphics_19 = new cjs.Graphics().p("EggLgB7IAAnMIdOAAIAAHMg");
	var mask_graphics_20 = new cjs.Graphics().p("EggLgBxIAAnMIdOAAIAAHMg");
	var mask_graphics_21 = new cjs.Graphics().p("EggLgBmIAAnMIdOAAIAAHMg");
	var mask_graphics_22 = new cjs.Graphics().p("EggLgBaIAAnMIdOAAIAAHMg");
	var mask_graphics_23 = new cjs.Graphics().p("EggLgBOIAAnMIdOAAIAAHMg");
	var mask_graphics_24 = new cjs.Graphics().p("EggLgBEIAAnMIdOAAIAAHMg");
	var mask_graphics_25 = new cjs.Graphics().p("EggLgA6IAAnMIdOAAIAAHMg");
	var mask_graphics_26 = new cjs.Graphics().p("EggLgAyIAAnMIdOAAIAAHMg");
	var mask_graphics_27 = new cjs.Graphics().p("EggLgArIAAnMIdOAAIAAHMg");
	var mask_graphics_28 = new cjs.Graphics().p("EggLgAmIAAnMIdOAAIAAHMg");
	var mask_graphics_29 = new cjs.Graphics().p("EggLgAiIAAnMIdOAAIAAHMg");
	var mask_graphics_30 = new cjs.Graphics().p("EggLgAfIAAnMIdOAAIAAHMg");
	var mask_graphics_31 = new cjs.Graphics().p("EggLgAdIAAnMIdOAAIAAHMg");
	var mask_graphics_32 = new cjs.Graphics().p("EggLgAbIAAnMIdOAAIAAHMg");
	var mask_graphics_33 = new cjs.Graphics().p("EggLgAbIAAnMIdOAAIAAHMg");
	var mask_graphics_34 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_35 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_36 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_37 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_38 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_39 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_40 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_41 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_42 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_43 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_44 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_45 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_46 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_47 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_48 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_49 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_50 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_51 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_52 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_53 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_54 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_55 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_56 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_57 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_58 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_59 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_60 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_61 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_62 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_63 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_64 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_65 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_66 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_67 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_68 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_69 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_70 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_71 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_72 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_73 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_74 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_75 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_76 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_77 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_78 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_79 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_80 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_81 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_82 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_83 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_84 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_85 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_86 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_87 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_88 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_89 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_90 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_91 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_92 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_93 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_94 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_95 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_96 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_97 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_98 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_99 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_100 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_101 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_102 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_103 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_104 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_105 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_106 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_107 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_108 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_109 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_110 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_111 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_112 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_113 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_114 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_115 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_116 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_117 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_118 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_119 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_120 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_121 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_122 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_123 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_124 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_125 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_126 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_127 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_128 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_129 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_130 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_131 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_132 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_133 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_134 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_135 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_136 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_137 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_138 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_139 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_140 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_141 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_142 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_143 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_144 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_145 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_146 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_147 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_148 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_149 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_150 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_151 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_152 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_153 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_154 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_155 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_156 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_157 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_158 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_159 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_160 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_161 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_162 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_163 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_164 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_165 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_166 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_167 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_168 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_169 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_170 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_171 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_172 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_173 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_174 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_175 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_176 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_177 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_178 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_179 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_180 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_181 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_182 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_183 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_184 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_185 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_186 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_187 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_188 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_189 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_190 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_191 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_192 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_193 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_194 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_195 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_196 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_197 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_198 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_199 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_200 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_201 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_202 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_203 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_204 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_205 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_206 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_207 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_208 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_209 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_210 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_211 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_212 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_213 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_214 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_215 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_216 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_217 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_218 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_219 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_220 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_221 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_222 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_223 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_224 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_225 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_226 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_227 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_228 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_229 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_230 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_231 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_232 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_233 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_234 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_235 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_236 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_237 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_238 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_239 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_240 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_241 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_242 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_243 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_244 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_245 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_246 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_247 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_248 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_249 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_250 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_251 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_252 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_253 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_254 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_255 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_256 = new cjs.Graphics().p("EggLgAaIAAnMIdOAAIAAHMg");
	var mask_graphics_257 = new cjs.Graphics().p("EggLgAcIAAnMIdOAAIAAHMg");
	var mask_graphics_258 = new cjs.Graphics().p("EggLgAhIAAnMIdOAAIAAHMg");
	var mask_graphics_259 = new cjs.Graphics().p("EggLgArIAAnMIdOAAIAAHMg");
	var mask_graphics_260 = new cjs.Graphics().p("EggLgA5IAAnMIdOAAIAAHMg");
	var mask_graphics_261 = new cjs.Graphics().p("EggLgBMIAAnMIdOAAIAAHMg");
	var mask_graphics_262 = new cjs.Graphics().p("EggLgBlIAAnMIdOAAIAAHMg");
	var mask_graphics_263 = new cjs.Graphics().p("EggLgCFIAAnMIdOAAIAAHMg");
	var mask_graphics_264 = new cjs.Graphics().p("EggLgCrIAAnMIdOAAIAAHMg");
	var mask_graphics_265 = new cjs.Graphics().p("EggLgDbIAAnMIdOAAIAAHMg");
	var mask_graphics_266 = new cjs.Graphics().p("EggLgEUIAAnMIdOAAIAAHMg");
	var mask_graphics_267 = new cjs.Graphics().p("EggLgFYIAAnMIdOAAIAAHMg");
	var mask_graphics_268 = new cjs.Graphics().p("EggLgGpIAAnMIdOAAIAAHMg");
	var mask_graphics_269 = new cjs.Graphics().p("EggLgIKIAAnMIdOAAIAAHMg");
	var mask_graphics_270 = new cjs.Graphics().p("EggLgJ7IAAnMIdOAAIAAHMg");
	var mask_graphics_271 = new cjs.Graphics().p("EggLgL9IAAnMIdOAAIAAHMg");
	var mask_graphics_272 = new cjs.Graphics().p("EggLgOPIAAnMIdOAAIAAHMg");
	var mask_graphics_273 = new cjs.Graphics().p("EggLgQsIAAnMIdOAAIAAHMg");
	var mask_graphics_274 = new cjs.Graphics().p("EggLgTIIAAnMIdOAAIAAHMg");
	var mask_graphics_275 = new cjs.Graphics().p("EggLgVXIAAnMIdOAAIAAHMg");
	var mask_graphics_276 = new cjs.Graphics().p("EggLgXSIAAnMIdOAAIAAHMg");
	var mask_graphics_277 = new cjs.Graphics().p("EggLgY1IAAnMIdOAAIAAHMg");
	var mask_graphics_278 = new cjs.Graphics().p("EggLgaBIAAnMIdOAAIAAHMg");
	var mask_graphics_279 = new cjs.Graphics().p("EggLga6IAAnMIdOAAIAAHMg");
	var mask_graphics_280 = new cjs.Graphics().p("EggLgbiIAAnMIdOAAIAAHMg");
	var mask_graphics_281 = new cjs.Graphics().p("EggLgb8IAAnMIdOAAIAAHMg");
	var mask_graphics_282 = new cjs.Graphics().p("EggLgcKIAAnMIdOAAIAAHMg");
	var mask_graphics_283 = new cjs.Graphics().p("EggLgcOIAAnMIdOAAIAAHMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:-206,y:-61.2}).wait(1).to({graphics:mask_graphics_12,x:-206,y:-61.2}).wait(1).to({graphics:mask_graphics_13,x:-206,y:-61.1}).wait(1).to({graphics:mask_graphics_14,x:-206,y:-60.9}).wait(1).to({graphics:mask_graphics_15,x:-206,y:-60.7}).wait(1).to({graphics:mask_graphics_16,x:-206,y:-60.3}).wait(1).to({graphics:mask_graphics_17,x:-206,y:-59.8}).wait(1).to({graphics:mask_graphics_18,x:-206,y:-59.2}).wait(1).to({graphics:mask_graphics_19,x:-206,y:-58.4}).wait(1).to({graphics:mask_graphics_20,x:-206,y:-57.4}).wait(1).to({graphics:mask_graphics_21,x:-206,y:-56.3}).wait(1).to({graphics:mask_graphics_22,x:-206,y:-55.1}).wait(1).to({graphics:mask_graphics_23,x:-206,y:-53.9}).wait(1).to({graphics:mask_graphics_24,x:-206,y:-52.9}).wait(1).to({graphics:mask_graphics_25,x:-206,y:-51.9}).wait(1).to({graphics:mask_graphics_26,x:-206,y:-51.1}).wait(1).to({graphics:mask_graphics_27,x:-206,y:-50.4}).wait(1).to({graphics:mask_graphics_28,x:-206,y:-49.9}).wait(1).to({graphics:mask_graphics_29,x:-206,y:-49.5}).wait(1).to({graphics:mask_graphics_30,x:-206,y:-49.2}).wait(1).to({graphics:mask_graphics_31,x:-206,y:-49}).wait(1).to({graphics:mask_graphics_32,x:-206,y:-48.8}).wait(1).to({graphics:mask_graphics_33,x:-206,y:-48.8}).wait(1).to({graphics:mask_graphics_34,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_35,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_36,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_37,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_38,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_39,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_40,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_41,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_42,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_43,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_44,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_45,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_46,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_47,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_48,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_49,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_50,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_51,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_52,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_53,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_54,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_55,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_56,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_57,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_58,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_59,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_60,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_61,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_62,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_63,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_64,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_65,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_66,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_67,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_68,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_69,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_70,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_71,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_72,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_73,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_74,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_75,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_76,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_77,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_78,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_79,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_80,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_81,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_82,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_83,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_84,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_85,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_86,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_87,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_88,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_89,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_90,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_91,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_92,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_93,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_94,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_95,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_96,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_97,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_98,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_99,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_100,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_101,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_102,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_103,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_104,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_105,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_106,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_107,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_108,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_109,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_110,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_111,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_112,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_113,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_114,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_115,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_116,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_117,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_118,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_119,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_120,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_121,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_122,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_123,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_124,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_125,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_126,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_127,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_128,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_129,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_130,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_131,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_132,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_133,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_134,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_135,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_136,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_137,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_138,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_139,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_140,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_141,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_142,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_143,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_144,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_145,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_146,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_147,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_148,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_149,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_150,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_151,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_152,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_153,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_154,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_155,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_156,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_157,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_158,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_159,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_160,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_161,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_162,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_163,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_164,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_165,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_166,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_167,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_168,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_169,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_170,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_171,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_172,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_173,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_174,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_175,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_176,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_177,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_178,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_179,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_180,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_181,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_182,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_183,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_184,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_185,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_186,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_187,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_188,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_189,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_190,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_191,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_192,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_193,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_194,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_195,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_196,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_197,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_198,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_199,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_200,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_201,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_202,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_203,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_204,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_205,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_206,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_207,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_208,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_209,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_210,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_211,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_212,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_213,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_214,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_215,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_216,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_217,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_218,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_219,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_220,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_221,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_222,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_223,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_224,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_225,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_226,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_227,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_228,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_229,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_230,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_231,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_232,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_233,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_234,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_235,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_236,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_237,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_238,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_239,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_240,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_241,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_242,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_243,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_244,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_245,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_246,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_247,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_248,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_249,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_250,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_251,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_252,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_253,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_254,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_255,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_256,x:-206,y:-48.7}).wait(1).to({graphics:mask_graphics_257,x:-206,y:-48.9}).wait(1).to({graphics:mask_graphics_258,x:-206,y:-49.4}).wait(1).to({graphics:mask_graphics_259,x:-206,y:-50.4}).wait(1).to({graphics:mask_graphics_260,x:-206,y:-51.8}).wait(1).to({graphics:mask_graphics_261,x:-206,y:-53.7}).wait(1).to({graphics:mask_graphics_262,x:-206,y:-56.2}).wait(1).to({graphics:mask_graphics_263,x:-206,y:-59.4}).wait(1).to({graphics:mask_graphics_264,x:-206,y:-63.2}).wait(1).to({graphics:mask_graphics_265,x:-206,y:-68}).wait(1).to({graphics:mask_graphics_266,x:-206,y:-73.7}).wait(1).to({graphics:mask_graphics_267,x:-206,y:-80.5}).wait(1).to({graphics:mask_graphics_268,x:-206,y:-88.6}).wait(1).to({graphics:mask_graphics_269,x:-206,y:-98.3}).wait(1).to({graphics:mask_graphics_270,x:-206,y:-109.6}).wait(1).to({graphics:mask_graphics_271,x:-206,y:-122.6}).wait(1).to({graphics:mask_graphics_272,x:-206,y:-137.2}).wait(1).to({graphics:mask_graphics_273,x:-206,y:-152.9}).wait(1).to({graphics:mask_graphics_274,x:-206,y:-168.5}).wait(1).to({graphics:mask_graphics_275,x:-206,y:-182.8}).wait(1).to({graphics:mask_graphics_276,x:-206,y:-195.1}).wait(1).to({graphics:mask_graphics_277,x:-206,y:-205}).wait(1).to({graphics:mask_graphics_278,x:-206,y:-212.6}).wait(1).to({graphics:mask_graphics_279,x:-206,y:-218.3}).wait(1).to({graphics:mask_graphics_280,x:-206,y:-222.3}).wait(1).to({graphics:mask_graphics_281,x:-206,y:-224.9}).wait(1).to({graphics:mask_graphics_282,x:-206,y:-226.3}).wait(1).to({graphics:mask_graphics_283,x:-206,y:-226.7}).wait(147));

	// Logo Text
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ12ÐºÐ¾Ð¿Ð¸Ñ4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-318.6,-52.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(1).to({y:-52.5},0).wait(1).to({y:-52.6},0).wait(1).to({y:-52.9},0).wait(1).to({y:-53.3},0).wait(1).to({y:-54},0).wait(1).to({y:-54.9},0).wait(1).to({y:-56.2},0).wait(1).to({y:-58},0).wait(1).to({y:-60.3},0).wait(1).to({y:-62.9},0).wait(1).to({y:-65.4},0).wait(1).to({y:-67.4},0).wait(1).to({y:-68.9},0).wait(1).to({y:-70.1},0).wait(1).to({y:-71},0).wait(1).to({y:-71.7},0).wait(1).to({y:-72.3},0).wait(1).to({y:-72.7},0).wait(1).to({y:-73},0).wait(1).to({y:-73.2},0).wait(1).to({y:-73.3},0).wait(1).to({y:-73.4},0).wait(1).to({startPosition:0},0).to({startPosition:0},222).wait(1).to({y:-73.8},0).wait(1).to({y:-74.9},0).wait(1).to({y:-76.8},0).wait(1).to({y:-79.6},0).wait(1).to({y:-83.5},0).wait(1).to({y:-88.5},0).wait(1).to({y:-94.7},0).wait(1).to({y:-102.5},0).wait(1).to({y:-111.9},0).wait(1).to({y:-123.3},0).wait(1).to({y:-137},0).wait(1).to({y:-153.3},0).wait(1).to({y:-172.5},0).wait(1).to({y:-195.1},0).wait(1).to({y:-221.2},0).wait(1).to({y:-250.5},0).wait(1).to({y:-281.7},0).wait(1).to({y:-312.9},0).wait(1).to({y:-341.6},0).wait(1).to({y:-366.2},0).wait(1).to({y:-386},0).wait(1).to({y:-401.3},0).wait(1).to({y:-412.6},0).wait(1).to({y:-420.5},0).wait(1).to({y:-425.7},0).wait(1).to({y:-428.5},0).wait(1).to({y:-429.4},0).wait(147));

	// //mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_9 = new cjs.Graphics().p("EgjYgD0QgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhwQAAgHAGgEIChhrQAGgEAGAEIBTA3QAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCAAIgCAAg");
	var mask_1_graphics_256 = new cjs.Graphics().p("EgjYgD0QgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhwQAAgHAGgEIChhrQAGgEAGAEIBTA3QAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCAAIgCAAg");
	var mask_1_graphics_257 = new cjs.Graphics().p("EgjYgD2QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAIkACrIgCABIgCgBg");
	var mask_1_graphics_258 = new cjs.Graphics().p("EgjYgD8QgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgDAGADIBTA4QAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_259 = new cjs.Graphics().p("EgjYgEFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCABIgCgBg");
	var mask_1_graphics_260 = new cjs.Graphics().p("EgjYgETQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCAAIgCAAg");
	var mask_1_graphics_261 = new cjs.Graphics().p("EgjYgEmQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIAAhwQAAgHAGgEIChhrQAGgEAGAEIBTA3QAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCAAIgCAAg");
	var mask_1_graphics_262 = new cjs.Graphics().p("EgjYgE/QgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhwQAAgHAGgEIChhrQAGgEAGAEIBTA3QAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCAAIgCAAg");
	var mask_1_graphics_263 = new cjs.Graphics().p("EgjYgFfQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgDAGADIBTA3QAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_264 = new cjs.Graphics().p("EgjYgGGQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgDAGADIBTA3QAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_265 = new cjs.Graphics().p("EgjYgG1QgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgEAGAEIBTA3QAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAIkACrIgCABIgCgBg");
	var mask_1_graphics_266 = new cjs.Graphics().p("EgjYgHuQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgEAGAEIBTA3QAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_267 = new cjs.Graphics().p("EgjYgIyQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAIkACrIgCABIgCgBg");
	var mask_1_graphics_268 = new cjs.Graphics().p("EgjYgKDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIAAhwQAAgHAGgEIChhrQAGgEAGAEIBTA3QAAAAABAAQAAABAAAAQABABAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCAAIgCAAg");
	var mask_1_graphics_269 = new cjs.Graphics().p("EgjYgLkQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgDAGADIBTA3QAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_270 = new cjs.Graphics().p("EgjYgNVQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgDAGADIBTA3QAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_271 = new cjs.Graphics().p("EgjYgPXQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCABIgCgBg");
	var mask_1_graphics_272 = new cjs.Graphics().p("EgjYgRpQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIAAhwQAAgHAGgEIChhrQAGgEAGAEIBTA3QAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCAAIgCAAg");
	var mask_1_graphics_273 = new cjs.Graphics().p("EgjYgUGQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgEAGAEIBTA3QAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_274 = new cjs.Graphics().p("EgjYgWiQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgDAGADIBTA3QAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_275 = new cjs.Graphics().p("EgjYgYxQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAAAQABABAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCAAIgCAAg");
	var mask_1_graphics_276 = new cjs.Graphics().p("EgjYgasQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAIkACrIgCABIgCgBg");
	var mask_1_graphics_277 = new cjs.Graphics().p("EgjYgcPQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAAAAAQgBABAAAAIkACrIgCABIgCgBg");
	var mask_1_graphics_278 = new cjs.Graphics().p("EgjYgdbQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgDAGADIBTA4QAAAAABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAABgBAAQAAABAAAAQgBAAAAABIkACrIgCAAIgCAAg");
	var mask_1_graphics_279 = new cjs.Graphics().p("EgjYgeUQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAAAIkACrIgCABIgCgBg");
	var mask_1_graphics_280 = new cjs.Graphics().p("EgjYge8QgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgEAGAEIBTA3QAAABABAAQAAAAAAABQABAAAAABQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_281 = new cjs.Graphics().p("EgjYgfWQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgDAGADIBTA3QAAABABAAQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAABAAAAQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_282 = new cjs.Graphics().p("EgjYgfkQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAhwQAAgHAGgEIChhsQAGgDAGADIBTA3QAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAABIkACqIgCABIgCgBg");
	var mask_1_graphics_283 = new cjs.Graphics().p("EgjYgfoQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAhvQAAgIAGgEIChhrQAGgEAGAEIBTA3QAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIkACrIgCABIgCgBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_1_graphics_9,x:-226.7,y:-48.1}).wait(247).to({graphics:mask_1_graphics_256,x:-226.7,y:-48.1}).wait(1).to({graphics:mask_1_graphics_257,x:-226.7,y:-48.3}).wait(1).to({graphics:mask_1_graphics_258,x:-226.7,y:-48.8}).wait(1).to({graphics:mask_1_graphics_259,x:-226.7,y:-49.8}).wait(1).to({graphics:mask_1_graphics_260,x:-226.7,y:-51.2}).wait(1).to({graphics:mask_1_graphics_261,x:-226.7,y:-53.1}).wait(1).to({graphics:mask_1_graphics_262,x:-226.7,y:-55.6}).wait(1).to({graphics:mask_1_graphics_263,x:-226.7,y:-58.8}).wait(1).to({graphics:mask_1_graphics_264,x:-226.7,y:-62.6}).wait(1).to({graphics:mask_1_graphics_265,x:-226.7,y:-67.4}).wait(1).to({graphics:mask_1_graphics_266,x:-226.7,y:-73.1}).wait(1).to({graphics:mask_1_graphics_267,x:-226.7,y:-79.9}).wait(1).to({graphics:mask_1_graphics_268,x:-226.7,y:-88}).wait(1).to({graphics:mask_1_graphics_269,x:-226.7,y:-97.7}).wait(1).to({graphics:mask_1_graphics_270,x:-226.7,y:-108.9}).wait(1).to({graphics:mask_1_graphics_271,x:-226.7,y:-122}).wait(1).to({graphics:mask_1_graphics_272,x:-226.7,y:-136.6}).wait(1).to({graphics:mask_1_graphics_273,x:-226.7,y:-152.3}).wait(1).to({graphics:mask_1_graphics_274,x:-226.7,y:-167.9}).wait(1).to({graphics:mask_1_graphics_275,x:-226.7,y:-182.2}).wait(1).to({graphics:mask_1_graphics_276,x:-226.7,y:-194.5}).wait(1).to({graphics:mask_1_graphics_277,x:-226.7,y:-204.4}).wait(1).to({graphics:mask_1_graphics_278,x:-226.7,y:-212}).wait(1).to({graphics:mask_1_graphics_279,x:-226.7,y:-217.7}).wait(1).to({graphics:mask_1_graphics_280,x:-226.7,y:-221.7}).wait(1).to({graphics:mask_1_graphics_281,x:-226.7,y:-224.2}).wait(1).to({graphics:mask_1_graphics_282,x:-226.7,y:-225.7}).wait(1).to({graphics:mask_1_graphics_283,x:-226.7,y:-226.1}).wait(147));

	// Logo Icon 3
	this.instance_1 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ1ÐºÐ¾Ð¿Ð¸Ñ13("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-440.2,-70.9);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({y:-71},0).wait(1).to({y:-71.1},0).wait(1).to({y:-71.3},0).wait(1).to({y:-71.7},0).wait(1).to({y:-72.2},0).wait(1).to({y:-72.9},0).wait(1).to({y:-73.8},0).wait(1).to({y:-75},0).wait(1).to({y:-76.4},0).wait(1).to({y:-78},0).wait(1).to({y:-79.5},0).wait(1).to({y:-80.8},0).wait(1).to({y:-81.9},0).wait(1).to({y:-82.7},0).wait(1).to({y:-83.3},0).wait(1).to({y:-83.8},0).wait(1).to({y:-84.1},0).wait(1).to({y:-84.3},0).wait(1).to({y:-84.4},0).wait(1).to({startPosition:0},0).to({startPosition:0},227).wait(1).to({y:-84.8},0).wait(1).to({y:-85.9},0).wait(1).to({y:-87.8},0).wait(1).to({y:-90.6},0).wait(1).to({y:-94.5},0).wait(1).to({y:-99.5},0).wait(1).to({y:-105.7},0).wait(1).to({y:-113.5},0).wait(1).to({y:-122.9},0).wait(1).to({y:-134.3},0).wait(1).to({y:-148},0).wait(1).to({y:-164.3},0).wait(1).to({y:-183.5},0).wait(1).to({y:-206.1},0).wait(1).to({y:-232.2},0).wait(1).to({y:-261.5},0).wait(1).to({y:-292.7},0).wait(1).to({y:-323.9},0).wait(1).to({y:-352.6},0).wait(1).to({y:-377.2},0).wait(1).to({y:-397},0).wait(1).to({y:-412.3},0).wait(1).to({y:-423.6},0).wait(1).to({y:-431.5},0).wait(1).to({y:-436.7},0).wait(1).to({y:-439.5},0).wait(1).to({y:-440.4},0).wait(147));

	// //mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_3 = new cjs.Graphics().p("EgjTgCvQgDAAgCgCQgCgDAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAdQAGAEAAAHIAAAvQAAAHgGAEIjyChQgHAFgHAAg");
	var mask_2_graphics_256 = new cjs.Graphics().p("EgjTgCvQgDAAgCgCQgCgDAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAdQAGAEAAAHIAAAvQAAAHgGAEIjyChQgHAFgHAAg");
	var mask_2_graphics_257 = new cjs.Graphics().p("EgjTgCxQgDAAgCgCQgCgCAAgEIAAg6QAAgIAGgEIEXi6QAHgDAFADIArAdQAGAEAAAHIAAAvQAAAHgGAFIjyChQgHAEgHAAg");
	var mask_2_graphics_258 = new cjs.Graphics().p("EgjTgC2QgDAAgCgDQgCgCAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAvQAAAHgGAEIjyChQgHAFgHAAg");
	var mask_2_graphics_259 = new cjs.Graphics().p("EgjTgDAQgDAAgCgCQgCgCAAgEIAAg6QAAgIAGgEIEXi6QAHgDAFADIArAdQAGAEAAAHIAAAvQAAAHgGAFIjyChQgHAEgHAAg");
	var mask_2_graphics_260 = new cjs.Graphics().p("EgjTgDOQgDAAgCgCQgCgCAAgEIAAg6QAAgIAGgEIEXi6QAHgDAFADIArAdQAGAEAAAHIAAAvQAAAHgGAEIjyCiQgHAEgHAAg");
	var mask_2_graphics_261 = new cjs.Graphics().p("EgjTgDhQgDAAgCgCQgCgDAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAvQAAAHgGAEIjyChQgHAFgHAAg");
	var mask_2_graphics_262 = new cjs.Graphics().p("EgjTgD6QgDAAgCgCQgCgDAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAdQAGAEAAAHIAAAvQAAAHgGAEIjyChQgHAFgHAAg");
	var mask_2_graphics_263 = new cjs.Graphics().p("EgjTgEZQgDAAgCgDQgCgCAAgDIAAg7QAAgHAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAuQAAAHgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_264 = new cjs.Graphics().p("EgjTgFAQgDAAgCgDQgCgCAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAvQAAAGgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_265 = new cjs.Graphics().p("EgjTgFwQgDAAgCgCQgCgCAAgDIAAg7QAAgHAGgFIEXi5QAHgEAFAEIArAcQAGAFAAAHIAAAuQAAAHgGAFIjyChQgHAEgHAAg");
	var mask_2_graphics_266 = new cjs.Graphics().p("EgjTgGoQgDAAgCgDQgCgCAAgDIAAg7QAAgHAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAuQAAAHgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_267 = new cjs.Graphics().p("EgjTgHtQgDAAgCgCQgCgCAAgEIAAg6QAAgIAGgEIEXi6QAHgDAFADIArAdQAGAEAAAHIAAAvQAAAHgGAFIjyChQgHAEgHAAg");
	var mask_2_graphics_268 = new cjs.Graphics().p("EgjTgI+QgDAAgCgCQgCgDAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAdQAGAEAAAHIAAAvQAAAHgGAEIjyChQgHAFgHAAg");
	var mask_2_graphics_269 = new cjs.Graphics().p("EgjTgKeQgDAAgCgDQgCgCAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAvQAAAGgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_270 = new cjs.Graphics().p("EgjTgMPQgDAAgCgDQgCgCAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAvQAAAGgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_271 = new cjs.Graphics().p("EgjTgOSQgDAAgCgCQgCgCAAgEIAAg6QAAgIAGgEIEXi6QAHgDAFADIArAdQAGAEAAAHIAAAvQAAAHgGAFIjyChQgHAEgHAAg");
	var mask_2_graphics_272 = new cjs.Graphics().p("EgjTgQkQgDAAgCgCQgCgDAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAvQAAAHgGAEIjyChQgHAFgHAAg");
	var mask_2_graphics_273 = new cjs.Graphics().p("EgjTgTAQgDAAgCgDQgCgCAAgDIAAg7QAAgHAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAuQAAAHgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_274 = new cjs.Graphics().p("EgjTgVcQgDAAgCgDQgCgCAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAuQAAAHgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_275 = new cjs.Graphics().p("EgjTgXsQgDAAgCgCQgCgDAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAdQAGAEAAAHIAAAvQAAAHgGAEIjyChQgHAFgHAAg");
	var mask_2_graphics_276 = new cjs.Graphics().p("EgjTgZnQgDAAgCgCQgCgCAAgEIAAg6QAAgIAGgEIEXi6QAHgDAFADIArAdQAGAEAAAHIAAAvQAAAHgGAFIjyChQgHAEgHAAg");
	var mask_2_graphics_277 = new cjs.Graphics().p("EgjTgbKQgDAAgCgCQgCgCAAgEIAAg6QAAgIAGgEIEXi6QAHgDAFADIArAdQAGAEAAAHIAAAvQAAAHgGAFIjyChQgHAEgHAAg");
	var mask_2_graphics_278 = new cjs.Graphics().p("EgjTgcWQgDAAgCgCQgCgDAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAvQAAAHgGAEIjyChQgHAFgHAAg");
	var mask_2_graphics_279 = new cjs.Graphics().p("EgjTgdPQgDAAgCgCQgCgCAAgEIAAg6QAAgIAGgEIEXi6QAHgDAFADIArAdQAGAEAAAHIAAAvQAAAHgGAFIjyChQgHAEgHAAg");
	var mask_2_graphics_280 = new cjs.Graphics().p("EgjTgd2QgDAAgCgDQgCgCAAgDIAAg7QAAgHAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAuQAAAHgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_281 = new cjs.Graphics().p("EgjTgeQQgDAAgCgDQgCgCAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAvQAAAGgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_282 = new cjs.Graphics().p("EgjTgeeQgDAAgCgDQgCgCAAgDIAAg6QAAgIAGgEIEXi6QAHgEAFAEIArAcQAGAFAAAHIAAAuQAAAHgGAFIjyChQgHAFgHAAg");
	var mask_2_graphics_283 = new cjs.Graphics().p("EgjTgejQgDAAgCgCQgCgCAAgEIAAg6QAAgIAGgEIEXi6QAHgDAFADIArAdQAGAEAAAHIAAAvQAAAHgGAFIjyChQgHAEgHAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_2_graphics_3,x:-226.7,y:-44.2}).wait(253).to({graphics:mask_2_graphics_256,x:-226.7,y:-44.2}).wait(1).to({graphics:mask_2_graphics_257,x:-226.7,y:-44.3}).wait(1).to({graphics:mask_2_graphics_258,x:-226.7,y:-44.9}).wait(1).to({graphics:mask_2_graphics_259,x:-226.7,y:-45.8}).wait(1).to({graphics:mask_2_graphics_260,x:-226.7,y:-47.3}).wait(1).to({graphics:mask_2_graphics_261,x:-226.7,y:-49.2}).wait(1).to({graphics:mask_2_graphics_262,x:-226.7,y:-51.7}).wait(1).to({graphics:mask_2_graphics_263,x:-226.7,y:-54.8}).wait(1).to({graphics:mask_2_graphics_264,x:-226.7,y:-58.7}).wait(1).to({graphics:mask_2_graphics_265,x:-226.7,y:-63.4}).wait(1).to({graphics:mask_2_graphics_266,x:-226.7,y:-69.1}).wait(1).to({graphics:mask_2_graphics_267,x:-226.7,y:-75.9}).wait(1).to({graphics:mask_2_graphics_268,x:-226.7,y:-84.1}).wait(1).to({graphics:mask_2_graphics_269,x:-226.7,y:-93.7}).wait(1).to({graphics:mask_2_graphics_270,x:-226.7,y:-105}).wait(1).to({graphics:mask_2_graphics_271,x:-226.7,y:-118}).wait(1).to({graphics:mask_2_graphics_272,x:-226.7,y:-132.7}).wait(1).to({graphics:mask_2_graphics_273,x:-226.7,y:-148.3}).wait(1).to({graphics:mask_2_graphics_274,x:-226.7,y:-163.9}).wait(1).to({graphics:mask_2_graphics_275,x:-226.7,y:-178.3}).wait(1).to({graphics:mask_2_graphics_276,x:-226.7,y:-190.5}).wait(1).to({graphics:mask_2_graphics_277,x:-226.7,y:-200.4}).wait(1).to({graphics:mask_2_graphics_278,x:-226.7,y:-208.1}).wait(1).to({graphics:mask_2_graphics_279,x:-226.7,y:-213.7}).wait(1).to({graphics:mask_2_graphics_280,x:-226.7,y:-217.7}).wait(1).to({graphics:mask_2_graphics_281,x:-226.7,y:-220.3}).wait(1).to({graphics:mask_2_graphics_282,x:-226.7,y:-221.7}).wait(1).to({graphics:mask_2_graphics_283,x:-226.7,y:-222.1}).wait(147));

	// Logo Icon 2
	this.instance_2 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ2ÐºÐ¾Ð¿Ð¸Ñ8("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-436.1,-60.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({y:-60.9},0).wait(1).to({y:-61.1},0).wait(1).to({y:-61.3},0).wait(1).to({y:-61.6},0).wait(1).to({y:-62},0).wait(1).to({y:-62.6},0).wait(1).to({y:-63.3},0).wait(1).to({y:-64.2},0).wait(1).to({y:-65.3},0).wait(1).to({y:-66.5},0).wait(1).to({y:-67.9},0).wait(1).to({y:-69.3},0).wait(1).to({y:-70.6},0).wait(1).to({y:-71.7},0).wait(1).to({y:-72.6},0).wait(1).to({y:-73.3},0).wait(1).to({y:-73.8},0).wait(1).to({y:-74.3},0).wait(1).to({y:-74.6},0).wait(1).to({y:-74.8},0).wait(1).to({y:-74.9},0).wait(1).to({y:-75},0).wait(1).to({startPosition:0},0).to({startPosition:0},229).wait(1).to({y:-75.4},0).wait(1).to({y:-76.5},0).wait(1).to({y:-78.4},0).wait(1).to({y:-81.2},0).wait(1).to({y:-85.1},0).wait(1).to({y:-90.1},0).wait(1).to({y:-96.3},0).wait(1).to({y:-104.1},0).wait(1).to({y:-113.5},0).wait(1).to({y:-124.9},0).wait(1).to({y:-138.6},0).wait(1).to({y:-154.9},0).wait(1).to({y:-174.1},0).wait(1).to({y:-196.7},0).wait(1).to({y:-222.8},0).wait(1).to({y:-252.1},0).wait(1).to({y:-283.3},0).wait(1).to({y:-314.5},0).wait(1).to({y:-343.2},0).wait(1).to({y:-367.8},0).wait(1).to({y:-387.6},0).wait(1).to({y:-402.9},0).wait(1).to({y:-414.2},0).wait(1).to({y:-422.1},0).wait(1).to({y:-427.3},0).wait(1).to({y:-430.1},0).wait(1).to({y:-431},0).wait(147));

	// //mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("EgiQgDwQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIDDiCQABAAAAAAQABAAAAAAQAAgBABABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIAAB7QAAADgCACQgCADgDAAg");
	var mask_3_graphics_256 = new cjs.Graphics().p("EgiQgDwQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIDDiCQABAAAAAAQABAAAAAAQAAgBABABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAABIAAB7QAAADgCACQgCADgDAAg");
	var mask_3_graphics_257 = new cjs.Graphics().p("EgiQgDyQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIDDiBQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAB7QAAADgCADQgCACgDAAg");
	var mask_3_graphics_258 = new cjs.Graphics().p("EgiQgD3QAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAIDDiCQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCADgDAAg");
	var mask_3_graphics_259 = new cjs.Graphics().p("EgiQgEBQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIDDiBQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAB7QAAADgCADQgCACgDAAg");
	var mask_3_graphics_260 = new cjs.Graphics().p("EgiQgEPQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABgBIDDiCQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAB7QAAADgCADQgCACgDAAg");
	var mask_3_graphics_261 = new cjs.Graphics().p("EgiQgEiQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIDDiCQABAAAAAAQABgBAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCADgDAAg");
	var mask_3_graphics_262 = new cjs.Graphics().p("EgiQgE7QAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIDDiCQABAAAAAAQABAAAAgBQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCADgDAAg");
	var mask_3_graphics_263 = new cjs.Graphics().p("EgiQgFbQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABIAAB8QAAADgCACQgCACgDAAg");
	var mask_3_graphics_264 = new cjs.Graphics().p("EgiQgGBQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCADgDAAg");
	var mask_3_graphics_265 = new cjs.Graphics().p("EgiQgGxQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIDDiCQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABIAAB7QAAAEgCACQgCACgDAAg");
	var mask_3_graphics_266 = new cjs.Graphics().p("EgiQgHqQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABIAAB7QAAAEgCACQgCACgDAAg");
	var mask_3_graphics_267 = new cjs.Graphics().p("EgiQgIuQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIDDiBQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAB7QAAADgCADQgCACgDAAg");
	var mask_3_graphics_268 = new cjs.Graphics().p("EgiQgJ/QAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIDDiCQABAAAAAAQABAAAAgBQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCADgDAAg");
	var mask_3_graphics_269 = new cjs.Graphics().p("EgiQgLgQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCACgDAAg");
	var mask_3_graphics_270 = new cjs.Graphics().p("EgiQgNRQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCACgDAAg");
	var mask_3_graphics_271 = new cjs.Graphics().p("EgiQgPTQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIDDiBQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAB7QAAADgCADQgCACgDAAg");
	var mask_3_graphics_272 = new cjs.Graphics().p("EgiQgRlQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIDDiCQABAAAAAAQABgBAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCADgDAAg");
	var mask_3_graphics_273 = new cjs.Graphics().p("EgiQgUCQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABIAAB7QAAAEgCACQgCACgDAAg");
	var mask_3_graphics_274 = new cjs.Graphics().p("EgiQgWeQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCACgDAAg");
	var mask_3_graphics_275 = new cjs.Graphics().p("EgiQgYtQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIDDiCQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAAAQAAABAAABIAAB7QAAADgCADQgCACgDAAg");
	var mask_3_graphics_276 = new cjs.Graphics().p("EgiQgaoQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIDDiBQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAB7QAAADgCADQgCACgDAAg");
	var mask_3_graphics_277 = new cjs.Graphics().p("EgiQgcLQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIDDiBQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAB7QAAADgCADQgCACgDAAg");
	var mask_3_graphics_278 = new cjs.Graphics().p("EgiQgdXQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIDDiCQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCADgDAAg");
	var mask_3_graphics_279 = new cjs.Graphics().p("EgiQgeQQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIDDiBQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQAAAAAAABIAAB7QAAADgCADQgCACgDAAg");
	var mask_3_graphics_280 = new cjs.Graphics().p("EgiQge4QAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAAAAAABQAAAAAAABIAAB7QAAAEgCACQgCACgDAAg");
	var mask_3_graphics_281 = new cjs.Graphics().p("EgiQgfRQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCADgDAAg");
	var mask_3_graphics_282 = new cjs.Graphics().p("EgiQgfgQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAIDDiCQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIAAB8QAAADgCACQgCACgDAAg");
	var mask_3_graphics_283 = new cjs.Graphics().p("EgiQgfkQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBIDDiBQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIAAB7QAAADgCADQgCACgDAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:-219.5,y:-37.7}).wait(256).to({graphics:mask_3_graphics_256,x:-219.5,y:-37.7}).wait(1).to({graphics:mask_3_graphics_257,x:-219.5,y:-37.8}).wait(1).to({graphics:mask_3_graphics_258,x:-219.5,y:-38.4}).wait(1).to({graphics:mask_3_graphics_259,x:-219.5,y:-39.3}).wait(1).to({graphics:mask_3_graphics_260,x:-219.5,y:-40.7}).wait(1).to({graphics:mask_3_graphics_261,x:-219.5,y:-42.7}).wait(1).to({graphics:mask_3_graphics_262,x:-219.5,y:-45.2}).wait(1).to({graphics:mask_3_graphics_263,x:-219.5,y:-48.3}).wait(1).to({graphics:mask_3_graphics_264,x:-219.5,y:-52.2}).wait(1).to({graphics:mask_3_graphics_265,x:-219.5,y:-56.9}).wait(1).to({graphics:mask_3_graphics_266,x:-219.5,y:-62.6}).wait(1).to({graphics:mask_3_graphics_267,x:-219.5,y:-69.4}).wait(1).to({graphics:mask_3_graphics_268,x:-219.5,y:-77.6}).wait(1).to({graphics:mask_3_graphics_269,x:-219.5,y:-87.2}).wait(1).to({graphics:mask_3_graphics_270,x:-219.5,y:-98.5}).wait(1).to({graphics:mask_3_graphics_271,x:-219.5,y:-111.5}).wait(1).to({graphics:mask_3_graphics_272,x:-219.5,y:-126.2}).wait(1).to({graphics:mask_3_graphics_273,x:-219.5,y:-141.8}).wait(1).to({graphics:mask_3_graphics_274,x:-219.5,y:-157.4}).wait(1).to({graphics:mask_3_graphics_275,x:-219.5,y:-171.7}).wait(1).to({graphics:mask_3_graphics_276,x:-219.5,y:-184}).wait(1).to({graphics:mask_3_graphics_277,x:-219.5,y:-193.9}).wait(1).to({graphics:mask_3_graphics_278,x:-219.5,y:-201.6}).wait(1).to({graphics:mask_3_graphics_279,x:-219.5,y:-207.2}).wait(1).to({graphics:mask_3_graphics_280,x:-219.5,y:-211.2}).wait(1).to({graphics:mask_3_graphics_281,x:-219.5,y:-213.8}).wait(1).to({graphics:mask_3_graphics_282,x:-219.5,y:-215.2}).wait(1).to({graphics:mask_3_graphics_283,x:-219.5,y:-215.6}).wait(147));

	// Logo Icon 1
	this.instance_3 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3ÐºÐ¾Ð¿Ð¸Ñ7("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-428.9,-54.3);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).wait(1).to({y:-54.4},0).wait(1).to({y:-54.6},0).wait(1).to({y:-54.8},0).wait(1).to({y:-55.1},0).wait(1).to({y:-55.5},0).wait(1).to({y:-56.1},0).wait(1).to({y:-56.8},0).wait(1).to({y:-57.7},0).wait(1).to({y:-58.8},0).wait(1).to({y:-60},0).wait(1).to({y:-61.4},0).wait(1).to({y:-62.8},0).wait(1).to({y:-64.1},0).wait(1).to({y:-65.2},0).wait(1).to({y:-66.1},0).wait(1).to({y:-66.8},0).wait(1).to({y:-67.3},0).wait(1).to({y:-67.8},0).wait(1).to({y:-68.1},0).wait(1).to({y:-68.3},0).wait(1).to({y:-68.4},0).wait(1).to({y:-68.5},0).wait(1).to({startPosition:0},0).to({startPosition:0},232).wait(1).to({y:-68.9},0).wait(1).to({y:-70},0).wait(1).to({y:-71.9},0).wait(1).to({y:-74.7},0).wait(1).to({y:-78.6},0).wait(1).to({y:-83.6},0).wait(1).to({y:-89.8},0).wait(1).to({y:-97.6},0).wait(1).to({y:-107},0).wait(1).to({y:-118.4},0).wait(1).to({y:-132.1},0).wait(1).to({y:-148.4},0).wait(1).to({y:-167.6},0).wait(1).to({y:-190.2},0).wait(1).to({y:-216.3},0).wait(1).to({y:-245.6},0).wait(1).to({y:-276.8},0).wait(1).to({y:-308},0).wait(1).to({y:-336.7},0).wait(1).to({y:-361.3},0).wait(1).to({y:-381.1},0).wait(1).to({y:-396.4},0).wait(1).to({y:-407.7},0).wait(1).to({y:-415.6},0).wait(1).to({y:-420.8},0).wait(1).to({y:-423.6},0).wait(1).to({y:-424.5},0).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ1ÐºÐ¾Ð¿Ð¸Ñ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ð Ð¸ÑÐ½Ðµ Ð² Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½Ð°Ñ Ð¸
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ83ÐºÐ¾Ð¿Ð¸Ñ4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-133.1,77.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:126.7,regY:-51.9,x:-6.4,y:25.8,alpha:0.002},0).wait(1).to({y:25.4,alpha:0.008},0).wait(1).to({y:24.7,alpha:0.019},0).wait(1).to({y:23.5,alpha:0.036},0).wait(1).to({y:21.9,alpha:0.061},0).wait(1).to({y:19.8,alpha:0.095},0).wait(1).to({y:16.8,alpha:0.14},0).wait(1).to({y:13,alpha:0.198},0).wait(1).to({y:8.2,alpha:0.273},0).wait(1).to({y:2.4,alpha:0.362},0).wait(1).to({y:-4,alpha:0.46},0).wait(1).to({y:-10.3,alpha:0.557},0).wait(1).to({y:-16,alpha:0.645},0).wait(1).to({y:-20.8,alpha:0.719},0).wait(1).to({y:-24.8,alpha:0.781},0).wait(1).to({y:-28.1,alpha:0.831},0).wait(1).to({y:-30.7,alpha:0.872},0).wait(1).to({y:-32.9,alpha:0.904},0).wait(1).to({y:-34.6,alpha:0.931},0).wait(1).to({y:-36,alpha:0.952},0).wait(1).to({y:-37,alpha:0.968},0).wait(1).to({y:-37.8,alpha:0.981},0).wait(1).to({y:-38.4,alpha:0.99},0).wait(1).to({y:-38.8,alpha:0.996},0).wait(1).to({y:-39,alpha:0.999},0).wait(1).to({regX:0,regY:0,x:-133.1,y:12.8,alpha:1},0).wait(1876));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.1,-0.9,289.3,49.1);


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3ÐºÐ¾Ð¿Ð¸Ñ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// f3
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ6ÐºÐ¾Ð¿Ð¸Ñ("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(407,542.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({_off:false},0).wait(1).to({regX:2,regY:10,x:409,y:551.8},0).wait(1).to({y:550.7},0).wait(1).to({y:548.8},0).wait(1).to({y:546},0).wait(1).to({y:542.2},0).wait(1).to({y:537.2},0).wait(1).to({y:530.8},0).wait(1).to({y:522.9},0).wait(1).to({y:513.1},0).wait(1).to({y:501.2},0).wait(1).to({y:486.8},0).wait(1).to({y:469.6},0).wait(1).to({y:449.3},0).wait(1).to({y:425.7},0).wait(1).to({y:399.4},0).wait(1).to({y:371.6},0).wait(1).to({y:344.1},0).wait(1).to({y:318.5},0).wait(1).to({y:296.1},0).wait(1).to({y:277},0).wait(1).to({y:261.2},0).wait(1).to({y:248.4},0).wait(1).to({y:238},0).wait(1).to({y:229.8},0).wait(1).to({y:223.4},0).wait(1).to({y:218.5},0).wait(1).to({y:215},0).wait(1).to({y:212.7},0).wait(1).to({y:211.4},0).wait(1).to({regX:0,regY:0,x:407,y:201},0).wait(161));

	// f2
	this.instance_1 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ4ÐºÐ¾Ð¿Ð¸Ñ7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(386,474);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).wait(1).to({regX:21,regY:4,x:407,y:477.7},0).wait(1).to({y:476.9},0).wait(1).to({y:475.4},0).wait(1).to({y:473.1},0).wait(1).to({y:470},0).wait(1).to({y:466},0).wait(1).to({y:460.8},0).wait(1).to({y:454.4},0).wait(1).to({y:446.6},0).wait(1).to({y:437},0).wait(1).to({y:425.5},0).wait(1).to({y:411.7},0).wait(1).to({y:395.6},0).wait(1).to({y:377},0).wait(1).to({y:356.6},0).wait(1).to({y:335.2},0).wait(1).to({y:314.3},0).wait(1).to({y:294.9},0).wait(1).to({y:278},0).wait(1).to({y:263.5},0).wait(1).to({y:251.5},0).wait(1).to({y:241.7},0).wait(1).to({y:233.8},0).wait(1).to({y:227.5},0).wait(1).to({y:222.6},0).wait(1).to({y:218.8},0).wait(1).to({y:216.1},0).wait(1).to({y:214.3},0).wait(1).to({y:213.3},0).wait(1).to({regX:0,regY:0,x:386,y:209},0).to({startPosition:0},48).wait(1).to({regX:21,regY:4,x:407,y:212.6},0).wait(1).to({y:211.2},0).wait(1).to({y:208.9},0).wait(1).to({y:205.3},0).wait(1).to({y:200.5},0).wait(1).to({y:194.2},0).wait(1).to({y:186.2},0).wait(1).to({y:176.1},0).wait(1).to({y:163.8},0).wait(1).to({y:148.8},0).wait(1).to({y:130.7},0).wait(1).to({y:109},0).wait(1).to({y:83.3},0).wait(1).to({y:53.7},0).wait(1).to({y:20.5},0).wait(1).to({y:-14.5},0).wait(1).to({y:-49.2},0).wait(1).to({y:-81.4},0).wait(1).to({y:-109.7},0).wait(1).to({y:-133.7},0).wait(1).to({y:-153.6},0).wait(1).to({y:-169.9},0).wait(1).to({y:-182.9},0).wait(1).to({y:-193.3},0).wait(1).to({y:-201.4},0).wait(1).to({y:-207.4},0).wait(1).to({y:-211.8},0).wait(1).to({y:-214.8},0).wait(1).to({y:-216.4},0).wait(1).to({regX:0,regY:0,x:386,y:-221},0).to({_off:true},1).wait(160));

	// f1
	this.instance_2 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ2ÐºÐ¾Ð¿Ð¸Ñ9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(361,471);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({regX:36,regY:40,x:397,y:510.7},0).wait(1).to({y:509.6},0).wait(1).to({y:507.8},0).wait(1).to({y:505},0).wait(1).to({y:501.1},0).wait(1).to({y:495.8},0).wait(1).to({y:488.9},0).wait(1).to({y:480.1},0).wait(1).to({y:468.9},0).wait(1).to({y:454.9},0).wait(1).to({y:437.7},0).wait(1).to({y:417.2},0).wait(1).to({y:394.2},0).wait(1).to({y:370.7},0).wait(1).to({y:348.6},0).wait(1).to({y:329.3},0).wait(1).to({y:313},0).wait(1).to({y:299.6},0).wait(1).to({y:288.6},0).wait(1).to({y:279.6},0).wait(1).to({y:272.4},0).wait(1).to({y:266.5},0).wait(1).to({y:261.8},0).wait(1).to({y:258.2},0).wait(1).to({y:255.4},0).wait(1).to({y:253.4},0).wait(1).to({y:252},0).wait(1).to({y:251.2},0).wait(1).to({regX:0,regY:0,x:361,y:211},0).to({startPosition:0},51).wait(1).to({regX:36,regY:40,x:397,y:250.5},0).wait(1).to({y:249.1},0).wait(1).to({y:246.5},0).wait(1).to({y:242.7},0).wait(1).to({y:237.4},0).wait(1).to({y:230.6},0).wait(1).to({y:221.9},0).wait(1).to({y:211},0).wait(1).to({y:197.6},0).wait(1).to({y:181.4},0).wait(1).to({y:161.8},0).wait(1).to({y:138.5},0).wait(1).to({y:111},0).wait(1).to({y:79.6},0).wait(1).to({y:44.8},0).wait(1).to({y:8.6},0).wait(1).to({y:-27},0).wait(1).to({y:-59.8},0).wait(1).to({y:-88.7},0).wait(1).to({y:-113.2},0).wait(1).to({y:-133.5},0).wait(1).to({y:-150.2},0).wait(1).to({y:-163.6},0).wait(1).to({y:-174.4},0).wait(1).to({y:-182.7},0).wait(1).to({y:-189},0).wait(1).to({y:-193.6},0).wait(1).to({y:-196.7},0).wait(1).to({y:-198.4},0).wait(1).to({regX:0,regY:0,x:361,y:-239},0).to({_off:true},1).wait(238));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m3
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ5ÐºÐ¾Ð¿Ð¸Ñ("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51,359);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({_off:false},0).wait(1).to({regX:346.9,regY:-36.7,x:397.9,y:322},0).wait(1).to({y:321.2},0).wait(1).to({y:319.8},0).wait(1).to({y:317.6},0).wait(1).to({y:314.7},0).wait(1).to({y:310.8},0).wait(1).to({y:305.9},0).wait(1).to({y:299.8},0).wait(1).to({y:292.2},0).wait(1).to({y:283},0).wait(1).to({y:272},0).wait(1).to({y:258.7},0).wait(1).to({y:243},0).wait(1).to({y:224.9},0).wait(1).to({y:204.6},0).wait(1).to({y:183.2},0).wait(1).to({y:161.9},0).wait(1).to({y:142.2},0).wait(1).to({y:124.9},0).wait(1).to({y:110.2},0).wait(1).to({y:98},0).wait(1).to({y:88.1},0).wait(1).to({y:80.1},0).wait(1).to({y:73.8},0).wait(1).to({y:68.8},0).wait(1).to({y:65.1},0).wait(1).to({y:62.4},0).wait(1).to({y:60.6},0).wait(1).to({y:59.6},0).wait(1).to({regX:0,regY:0,x:51,y:96},0).wait(161));

	// m2
	this.instance_1 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3ÐºÐ¾Ð¿Ð¸Ñ8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(394,323);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(104).to({_off:false},0).wait(1).to({regX:3.5,regY:1.6,x:397.5,y:324.3},0).wait(1).to({y:323.5},0).wait(1).to({y:322},0).wait(1).to({y:319.7},0).wait(1).to({y:316.6},0).wait(1).to({y:312.6},0).wait(1).to({y:307.4},0).wait(1).to({y:301},0).wait(1).to({y:293.2},0).wait(1).to({y:283.6},0).wait(1).to({y:272.1},0).wait(1).to({y:258.3},0).wait(1).to({y:242.2},0).wait(1).to({y:223.6},0).wait(1).to({y:203.2},0).wait(1).to({y:181.8},0).wait(1).to({y:160.9},0).wait(1).to({y:141.5},0).wait(1).to({y:124.6},0).wait(1).to({y:110.1},0).wait(1).to({y:98.1},0).wait(1).to({y:88.3},0).wait(1).to({y:80.4},0).wait(1).to({y:74.1},0).wait(1).to({y:69.2},0).wait(1).to({y:65.4},0).wait(1).to({y:62.7},0).wait(1).to({y:60.9},0).wait(1).to({y:59.9},0).wait(1).to({regX:0,regY:0,x:394,y:58},0).to({startPosition:0},48).wait(1).to({regX:3.5,regY:1.6,x:397.5,y:59.2},0).wait(1).to({y:57.8},0).wait(1).to({y:55.5},0).wait(1).to({y:52},0).wait(1).to({y:47.1},0).wait(1).to({y:40.8},0).wait(1).to({y:32.8},0).wait(1).to({y:22.8},0).wait(1).to({y:10.5},0).wait(1).to({y:-4.4},0).wait(1).to({y:-22.5},0).wait(1).to({y:-44.1},0).wait(1).to({y:-69.7},0).wait(1).to({y:-99.3},0).wait(1).to({y:-132.4},0).wait(1).to({y:-167.3},0).wait(1).to({y:-202},0).wait(1).to({y:-234.1},0).wait(1).to({y:-262.4},0).wait(1).to({y:-286.3},0).wait(1).to({y:-306.2},0).wait(1).to({y:-322.4},0).wait(1).to({y:-335.4},0).wait(1).to({y:-345.7},0).wait(1).to({y:-353.8},0).wait(1).to({y:-359.9},0).wait(1).to({y:-364.3},0).wait(1).to({y:-367.2},0).wait(1).to({y:-368.8},0).wait(1).to({regX:0,regY:0,x:394,y:-371},0).to({_off:true},1).wait(160));

	// m1
	this.instance_2 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ1ÐºÐ¾Ð¿Ð¸Ñ14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(399,315);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({regX:-4.5,regY:-8.5,x:394.5,y:306.2},0).wait(1).to({y:305.1},0).wait(1).to({y:303.3},0).wait(1).to({y:300.5},0).wait(1).to({y:296.6},0).wait(1).to({y:291.3},0).wait(1).to({y:284.4},0).wait(1).to({y:275.6},0).wait(1).to({y:264.4},0).wait(1).to({y:250.4},0).wait(1).to({y:233.2},0).wait(1).to({y:212.7},0).wait(1).to({y:189.7},0).wait(1).to({y:166.2},0).wait(1).to({y:144.1},0).wait(1).to({y:124.8},0).wait(1).to({y:108.5},0).wait(1).to({y:95.1},0).wait(1).to({y:84.1},0).wait(1).to({y:75.1},0).wait(1).to({y:67.9},0).wait(1).to({y:62},0).wait(1).to({y:57.3},0).wait(1).to({y:53.7},0).wait(1).to({y:50.9},0).wait(1).to({y:48.9},0).wait(1).to({y:47.5},0).wait(1).to({y:46.7},0).wait(1).to({regX:0,regY:0,x:399,y:55},0).to({startPosition:0},51).wait(1).to({regX:-4.5,regY:-8.5,x:394.5,y:46},0).wait(1).to({y:44.6},0).wait(1).to({y:42},0).wait(1).to({y:38.2},0).wait(1).to({y:32.9},0).wait(1).to({y:26.1},0).wait(1).to({y:17.4},0).wait(1).to({y:6.5},0).wait(1).to({y:-6.9},0).wait(1).to({y:-23.1},0).wait(1).to({y:-42.6},0).wait(1).to({y:-66},0).wait(1).to({y:-93.4},0).wait(1).to({y:-124.9},0).wait(1).to({y:-159.6},0).wait(1).to({y:-195.9},0).wait(1).to({y:-231.5},0).wait(1).to({y:-264.3},0).wait(1).to({y:-293.2},0).wait(1).to({y:-317.7},0).wait(1).to({y:-338},0).wait(1).to({y:-354.7},0).wait(1).to({y:-368.1},0).wait(1).to({y:-378.9},0).wait(1).to({y:-387.2},0).wait(1).to({y:-393.5},0).wait(1).to({y:-398.1},0).wait(1).to({y:-401.2},0).wait(1).to({y:-402.9},0).wait(1).to({regX:0,regY:0,x:399,y:-395},0).to({_off:true},1).wait(238));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ2ÐºÐ¾Ð¿Ð¸Ñ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// white
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ81("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-139.5,98.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({x:-138.9},0).wait(1).to({x:-137},0).wait(1).to({x:-133.4},0).wait(1).to({x:-127.9},0).wait(1).to({x:-119.9},0).wait(1).to({x:-108.9},0).wait(1).to({x:-94.1},0).wait(1).to({x:-74.4},0).wait(1).to({x:-49.1},0).wait(1).to({x:-17.8},0).wait(1).to({x:17.2},0).wait(1).to({x:51.6},0).wait(1).to({x:81.9},0).wait(1).to({x:106.6},0).wait(1).to({x:126.3},0).wait(1).to({x:141.8},0).wait(1).to({x:153.9},0).wait(1).to({x:163.3},0).wait(1).to({x:170.4},0).wait(1).to({x:175.8},0).wait(1).to({x:179.6},0).wait(1).to({x:182.1},0).wait(1).to({x:183.5},0).wait(1).to({x:184},0).to({_off:true},1).wait(319));

	// R Line 2
	this.instance_1 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ17ÐºÐ¾Ð¿Ð¸Ñ7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-173.7,112);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({startPosition:0},227).wait(1).to({regX:32.7,regY:-11,x:-141,y:100.8},0).wait(1).to({y:100},0).wait(1).to({y:98.6},0).wait(1).to({y:96.6},0).wait(1).to({y:93.8},0).wait(1).to({y:90.2},0).wait(1).to({y:85.7},0).wait(1).to({y:80.1},0).wait(1).to({y:73.2},0).wait(1).to({y:64.8},0).wait(1).to({y:54.6},0).wait(1).to({y:42.4},0).wait(1).to({y:27.7},0).wait(1).to({y:10.2},0).wait(1).to({y:-10.3},0).wait(1).to({y:-33.5},0).wait(1).to({y:-58.2},0).wait(1).to({y:-82.4},0).wait(1).to({y:-103.9},0).wait(1).to({y:-121.7},0).wait(1).to({y:-135.6},0).wait(1).to({y:-146.1},0).wait(1).to({y:-153.7},0).wait(1).to({y:-159.1},0).wait(1).to({y:-162.5},0).wait(1).to({y:-164.4},0).wait(1).to({regX:0,regY:0,x:-173.7,y:-154},0).wait(90));

	// white
	this.instance_2 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ81("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-139.5,13.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({x:-138.9},0).wait(1).to({x:-137},0).wait(1).to({x:-133.4},0).wait(1).to({x:-127.9},0).wait(1).to({x:-119.9},0).wait(1).to({x:-108.9},0).wait(1).to({x:-94.1},0).wait(1).to({x:-74.4},0).wait(1).to({x:-49.1},0).wait(1).to({x:-17.8},0).wait(1).to({x:17.2},0).wait(1).to({x:51.6},0).wait(1).to({x:81.9},0).wait(1).to({x:106.6},0).wait(1).to({x:126.3},0).wait(1).to({x:141.8},0).wait(1).to({x:153.9},0).wait(1).to({x:163.3},0).wait(1).to({x:170.4},0).wait(1).to({x:175.8},0).wait(1).to({x:179.6},0).wait(1).to({x:182.1},0).wait(1).to({x:183.5},0).wait(1).to({x:184},0).to({_off:true},1).wait(324));

	// R Line 1
	this.instance_3 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ18ÐºÐ¾Ð¿Ð¸Ñ8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-173.7,1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(1).to({regX:32.7,regY:13,x:-141,y:14},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-173.7,y:1},0).wait(1).to({regX:32.7,regY:13,x:-141,y:13.8},0).wait(1).to({y:13},0).wait(1).to({y:11.7},0).wait(1).to({y:9.6},0).wait(1).to({y:6.9},0).wait(1).to({y:3.3},0).wait(1).to({y:-1.2},0).wait(1).to({y:-6.9},0).wait(1).to({y:-13.8},0).wait(1).to({y:-22.2},0).wait(1).to({y:-32.3},0).wait(1).to({y:-44.6},0).wait(1).to({y:-59.2},0).wait(1).to({y:-76.7},0).wait(1).to({y:-97.2},0).wait(1).to({y:-120.5},0).wait(1).to({y:-145.2},0).wait(1).to({y:-169.4},0).wait(1).to({y:-190.9},0).wait(1).to({y:-208.7},0).wait(1).to({y:-222.6},0).wait(1).to({y:-233.1},0).wait(1).to({y:-240.7},0).wait(1).to({y:-246.1},0).wait(1).to({y:-249.5},0).wait(1).to({y:-251.4},0).wait(1).to({regX:0,regY:0,x:-173.7,y:-265},0).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// //mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_29 = new cjs.Graphics().p("Egk8AGHIAAsOMBJ5AAAIAAMOg");
	var mask_graphics_256 = new cjs.Graphics().p("Egk8AH8IAAtgMBJ5AAAIAANgg");
	var mask_graphics_257 = new cjs.Graphics().p("Egk8AH7IAAtgMBJ5AAAIAANgg");
	var mask_graphics_258 = new cjs.Graphics().p("Egk8AH3IAAtgMBJ5AAAIAANgg");
	var mask_graphics_259 = new cjs.Graphics().p("Egk8AHwIAAtgMBJ5AAAIAANgg");
	var mask_graphics_260 = new cjs.Graphics().p("Egk8AHmIAAtgMBJ5AAAIAANgg");
	var mask_graphics_261 = new cjs.Graphics().p("Egk8AHYIAAtgMBJ5AAAIAANgg");
	var mask_graphics_262 = new cjs.Graphics().p("Egk8AHGIAAtgMBJ5AAAIAANgg");
	var mask_graphics_263 = new cjs.Graphics().p("Egk8AGxIAAthMBJ5AAAIAANhg");
	var mask_graphics_264 = new cjs.Graphics().p("Egk8AGxIAAthMBJ5AAAIAANhg");
	var mask_graphics_265 = new cjs.Graphics().p("Egk8AGxIAAthMBJ5AAAIAANhg");
	var mask_graphics_266 = new cjs.Graphics().p("Egk8AGxIAAtgMBJ5AAAIAANgg");
	var mask_graphics_267 = new cjs.Graphics().p("Egk8AGxIAAthMBJ5AAAIAANhg");
	var mask_graphics_268 = new cjs.Graphics().p("Egk8AGxIAAthMBJ5AAAIAANhg");
	var mask_graphics_269 = new cjs.Graphics().p("Egk8AGxIAAthMBJ5AAAIAANhg");
	var mask_graphics_270 = new cjs.Graphics().p("Egk8AGxIAAtgMBJ5AAAIAANgg");
	var mask_graphics_271 = new cjs.Graphics().p("Egk8AGAIAAtgMBJ5AAAIAANgg");
	var mask_graphics_272 = new cjs.Graphics().p("Egk8AEMIAAtgMBJ5AAAIAANgg");
	var mask_graphics_273 = new cjs.Graphics().p("Egk8ACQIAAtgMBJ5AAAIAANgg");
	var mask_graphics_274 = new cjs.Graphics().p("Egk8AAXIAAtgMBJ5AAAIAANgg");
	var mask_graphics_275 = new cjs.Graphics().p("Egk8gBUIAAthMBJ5AAAIAANhg");
	var mask_graphics_276 = new cjs.Graphics().p("Egk8gCsIAAthMBJ5AAAIAANhg");
	var mask_graphics_277 = new cjs.Graphics().p("Egk8gDyIAAthMBJ5AAAIAANhg");
	var mask_graphics_278 = new cjs.Graphics().p("Egk8gEmIAAthMBJ5AAAIAANhg");
	var mask_graphics_279 = new cjs.Graphics().p("Egk8gFMIAAthMBJ5AAAIAANhg");
	var mask_graphics_280 = new cjs.Graphics().p("Egk8gFnIAAthMBJ5AAAIAANhg");
	var mask_graphics_281 = new cjs.Graphics().p("Egk8gF4IAAthMBJ5AAAIAANhg");
	var mask_graphics_282 = new cjs.Graphics().p("Egk8gGCIAAthMBJ5AAAIAANhg");
	var mask_graphics_283 = new cjs.Graphics().p("Egk8gGFIAAthMBJ5AAAIAANhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_graphics_29,x:-66,y:55.1}).wait(227).to({graphics:mask_graphics_256,x:-67.5,y:50.8}).wait(1).to({graphics:mask_graphics_257,x:-67.5,y:50.7}).wait(1).to({graphics:mask_graphics_258,x:-67.5,y:50.3}).wait(1).to({graphics:mask_graphics_259,x:-67.5,y:49.6}).wait(1).to({graphics:mask_graphics_260,x:-67.5,y:48.6}).wait(1).to({graphics:mask_graphics_261,x:-67.5,y:47.2}).wait(1).to({graphics:mask_graphics_262,x:-67.5,y:45.4}).wait(1).to({graphics:mask_graphics_263,x:-67.5,y:43}).wait(1).to({graphics:mask_graphics_264,x:-67.5,y:37.4}).wait(1).to({graphics:mask_graphics_265,x:-67.5,y:30.5}).wait(1).to({graphics:mask_graphics_266,x:-67.5,y:22.1}).wait(1).to({graphics:mask_graphics_267,x:-67.5,y:11.9}).wait(1).to({graphics:mask_graphics_268,x:-67.5,y:-0.3}).wait(1).to({graphics:mask_graphics_269,x:-67.5,y:-15}).wait(1).to({graphics:mask_graphics_270,x:-67.5,y:-32.4}).wait(1).to({graphics:mask_graphics_271,x:-67.5,y:-48.1}).wait(1).to({graphics:mask_graphics_272,x:-67.5,y:-59.7}).wait(1).to({graphics:mask_graphics_273,x:-67.5,y:-72.1}).wait(1).to({graphics:mask_graphics_274,x:-67.5,y:-84.2}).wait(1).to({graphics:mask_graphics_275,x:-67.5,y:-95}).wait(1).to({graphics:mask_graphics_276,x:-67.5,y:-103.8}).wait(1).to({graphics:mask_graphics_277,x:-67.5,y:-110.8}).wait(1).to({graphics:mask_graphics_278,x:-67.5,y:-116}).wait(1).to({graphics:mask_graphics_279,x:-67.5,y:-119.8}).wait(1).to({graphics:mask_graphics_280,x:-67.5,y:-122.5}).wait(1).to({graphics:mask_graphics_281,x:-67.5,y:-124.2}).wait(1).to({graphics:mask_graphics_282,x:-67.5,y:-125.2}).wait(1).to({graphics:mask_graphics_283,x:-67.5,y:-125.5}).wait(90));

	// TEXT
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ29ÐºÐ¾Ð¿Ð¸Ñ3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-299.5,30.1,0.641,0.641,0,0,0,-454.7,-40.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(344));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib.V656140 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ramka
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EikdBeCMAAAi8DMFI7AAAMAAAC8DgEg58APoMBmfAAAIAA13MhmfAAAg");
	this.shape.setTransform(370.9,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgzPAK8IAA13MBmfAAAIAAV3gEgzFAKyMBmLAAAIAA1jMhmLAAAg");
	this.shape_1.setTransform(328,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(373));

	// white
	this.instance = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ22ÐºÐ¾Ð¿Ð¸Ñ6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(65,150,1.677,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:280.1,regY:-18.3,x:534.9,y:131.7,alpha:0.998},0).wait(1).to({alpha:0.991},0).wait(1).to({alpha:0.978},0).wait(1).to({alpha:0.959},0).wait(1).to({alpha:0.932},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.723},0).wait(1).to({alpha:0.64},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.36},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.207},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.068},0).wait(1).to({alpha:0.041},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.009},0).wait(1).to({alpha:0.002},0).wait(1).to({regX:0,regY:0,x:65,y:150,alpha:0},0).to({startPosition:0},324).wait(1).to({regX:280.1,regY:-18.3,x:534.9,y:131.7,alpha:0.002},0).wait(1).to({alpha:0.008},0).wait(1).to({alpha:0.018},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.168},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.293},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.456},0).wait(1).to({alpha:0.544},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.707},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.832},0).wait(1).to({alpha:0.878},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:0.992},0).wait(1).to({alpha:0.998},0).wait(1).to({regX:0,regY:0,x:65,y:150,alpha:1},0).wait(1));

	// ÐÐºÑÐ¸Ñ...
	this.instance_1 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ18ÐºÐ¾Ð¿Ð¸Ñ7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-382,444.4,0.983,0.983,0,0,0,-242.2,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(270).to({_off:false},0).to({regX:-242.3,y:357.8},12,cjs.Ease.get(-1)).to({regX:-242.2,y:258.4},13,cjs.Ease.get(1)).wait(78));

	// Ð¢Ð¾Ð»ÑÐºÐ¾ Ð² Ð´ÐµÐºÐ°Ð±ÑÐµ!
	this.instance_2 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ1ÐºÐ¾Ð¿Ð¸Ñ12("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.6,10,0.757,0.757,0,0,0,-143.8,-57.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(266).to({_off:false},0).wait(107));

	// LOGO
	this.instance_3 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ14ÐºÐ¾Ð¿Ð¸Ñ4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.2,24.3,0.572,0.572,0,0,0,-453.1,-74.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(373));

	// BUTTON
	this.instance_4 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ32ÐºÐ¾Ð¿Ð¸Ñ8("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(28.2,117,0.49,0.49,0,0,0,271.9,91.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},0).wait(339));

	// Red Ugol
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED1D24").s().p("AkaC8II1l3IAAF3g");
	this.shape_2.setTransform(626.7,121.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AlODiIKdnDIAABMIo0F3g");
	this.shape_3.setTransform(621.5,117.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},34).wait(339));

	// white
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmjNqIAA7TIFTAAIAACVIH0AAImRELQhfBCgEBUIAASdg");
	this.shape_4.setTransform(305.1,72.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(373));

	// MEBEL
	this.instance_5 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(472.9,83.6,0.55,0.55,0,0,0,388.5,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(373));

	// FON
	this.instance_6 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ3ÐºÐ¾Ð¿Ð¸Ñ("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(295,88.4,0.629,0.629,0,0,0,111.2,88.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(373));

	// Right Side Plates
	this.instance_7 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ21ÐºÐ¾Ð¿Ð¸Ñ5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(661,68.5,0.687,0.687,0,0,0,527.7,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(373));

	// LINES
	this.instance_8 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ2ÐºÐ¾Ð¿Ð¸Ñ("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(26.8,70,0.667,0.592,0,0,0,-301.6,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(373));

	// TEXT
	this.instance_9 = new lib.ÐÐ½Ð¸Ð¼Ð°ÑÐ¸Ñ2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(26.9,70.8,0.658,0.658,0,0,0,-301.6,58);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(373));

	// bg white
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EhOHATdMAAAgm5MCcPAAAMAAAAm5g");
	this.shape_5.setTransform(490,124.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(373));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.7,-491.8,2333.9,1203.6);
// library properties:
lib.properties = {
	width: 656,
	height: 140,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"/images/bm13.png", id:"bm13"},
		{src:"/images/bm23.png", id:"bm23"},
		{src:"/images/bm23_1.png", id:"bm23_1"},
		{src:"/images/f1.png", id:"f1"},
		{src:"/images/f3.png", id:"f3"},
		{src:"/images/sh1.png", id:"sh1"},
		{src:"/images/sh2.png", id:"sh2"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;