<!DOCTYPE html><html><head><script src="/pagead/gadgets/html5/api/exitapi-impl.js" type="text/javascript"></script><script src="/pagead/gadgets/html5/addata.js" type="text/javascript"></script><meta charset="UTF-8"><meta content="Adobe_Animate_CC" name="authoring-tool"><meta content="width=970,height=250" name="ad.size"><title>970x250</title><script src="libs/createjs-2015.11.26.min.js"></script><script src="970x250.js"></script><script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("DECD5DD0FA254AFABC3494217A757658");
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
	exportRoot = new lib._970x250();
	stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
</script></head><body onclick="ExitApi.exit();" onload="init();" style="margin:0px;; cursor:pointer">












	<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:970px; height:250px">
		<canvas height=250 id=canvas style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);" width=970></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:970px; height:250px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>

</body></html>