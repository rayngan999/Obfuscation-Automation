<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no">
<title>online calcualtor</title>
<style>
  	#animation_container 
  	{
		position:absolute;
		margin:auto;
		left:0;right:0;
		top:0;bottom:0;
 	}
  	*
	{
	  -moz-user-select: none;
	  -khtml-user-select: none;
	  -webkit-user-select: none;
	  user-select: none;
	}
	canvas 
	{
	  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
	}
</style>
<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
<script src="https://online-calculator.com/include/timerfix.js"></script>
<script src="vector.js"></script>
<script src="js/main.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, main;
function init() 
{
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	handleComplete();
}
function handleComplete() 
{
	exportRoot = new lib.vector();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	createjs.Touch.enable(stage);
	stage.enableMouseOver();
	createjs.Touch.enable(stage);	

	fnStartAnimation = function() 
	{
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    

	function makeResponsive(isResp, respDim, isScale, scaleType) 
	{		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() 
		{			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) 
				{                    
					sRatio = lastS;                
				}				
				else if(!isScale) 
				{					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) 
				{					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) 
				{					
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
		}
	}
	makeResponsive(true,'both',true,1);	
	fnStartAnimation();
	main=new Main();
	document.addEventListener('keypress',iframeKeboardEventPress , false);
	document.addEventListener('keydown',iframeKeboardEvent,  false);
	
}
function iframeKeboardEvent(keyEvent)
{
	main.keyboardEventFromOutside(keyEvent);
}
function iframeKeboardEventDown(keyEvent)
{
	main.keyboardEventFromOutsideDown(keyEvent);
}
function iframeKeboardEventPress(keyEvent)
{
	
	main.keyboardEventFromOutsidePress(keyEvent);
}
</script>
</head>
<body onload="init();" style="margin:0px;">
<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:267px; height:345px">
<canvas id="canvas" width="267" height="345" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:267px; height:345px; position: absolute; left: 0px; top: 0px; display: block;">
</div>
</div>
</body>
</html>