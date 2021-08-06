<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="ad.size" content="width=300,height=250">
<script type="text/javascript">
var clickTag = "http://www.google.com"
</script>
<style type="text/css">
	html, body
	{
		margin: 0;
		padding: 0;
	}

	#container
	{
		position: relative;
		top: 0px;
		left: 0px;
		display:none;
		width:300px;
		height:250px;
		/* sq-border-start */
/* sq-border-end */

		background: #FFFFFF;
		overflow:hidden;
	}

	#canvas
	{
		position: absolute;
		top: 0px;
		left: 0px;
		-moz-user-select: none;
	  -webkit-user-select: none;
	  -ms-user-select: none;
	  user-select: none;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		cursor: pointer;
	}

	/* start custom css **/
		/* put custom css here **/
	/* end custom css **/
</style>

<script type="text/javascript" src="https://s0.2mdn.net/ads/studio/cached_libs/gsap_3.5.1_min.js"></script>
<script type="text/javascript" src="https://s0.2mdn.net/ads/studio/cached_libs/createjs_2019.11.15_min.js"></script>
<script type="text/javascript" src="js/plugins.js"></script>
<!-- start jslibs custom -- do not remove -->
	<!-- custom js libs go here -->
<!-- end jslibs custom -- do not remove -->
<script>

var comp,
		lib,
		canvas, 
		stage, 
		exportRoot,
		images;

function onDocumentReady()
{
	var script = document.createElement('script');
	script.onload = onCreateFileLoaded;
	script.src = "index.js" + ((location.hostname === "localhost" || location.hostname === "127.0.0.1") ? '?'+ new Date().valueOf() : '');
	document.head.appendChild(script);
}

function onCreateFileLoaded() {
	comp = AdobeAn.compositions[Object.keys(AdobeAn.compositions)[0]];
	lib = comp.getLibrary();
	canvas = fromId("canvas");
	images = images||{};

	onCustomDocumentReady();

	if( lib.properties.manifest && lib.properties.manifest.length > 0 )
	{
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleImageLoad);
		loader.addEventListener("complete", handleLoadComplete);
		loader.loadManifest(lib.properties.manifest);
	}
	else
	{
		handleLoadComplete();
	}
}

function handleImageLoad(evt) 
{
	var images = comp.getImages();
	if(evt && evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleLoadComplete()
{
	createjs.MotionGuidePlugin.install();
	exportRoot = new lib.index();

	canvas.addEventListener('mouseover' , handleRollOverEvent );
	canvas.addEventListener('mouseleave' , handleRollOutEvent );
	canvas.addEventListener('click' , handleClickEvent );

	stage = new lib.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();
	createjs.Ticker.framerate = lib.properties.fps;
	createjs.Ticker.addEventListener("tick", function(e){
		if( !e.paused ) stage.update(e);
	});
	

	var ad = new createjs.AdHelper(stage)
		.highDPI(true, 2);
	ad.on("slow" , handleSlowDown );
	ad.on("sleep" , handleSleep );
	ad.on("wake" , handleWake );

	exportRoot.adHelper = ad;
	
	AdobeAn.compositionLoaded(lib.properties.id);
	onCreateJSLoadedAndReady();

	var isResponsive = false;
	//Code to support hidpi screens and responsive scaling.
	if(location.hostname !== "localhost" && location.hostname !== "127.0.0.1" && isResponsive ) {
		AdobeAn.makeResponsive(true,'both',true,1,[canvas,fromId('container')]);
	}
}

/** start custom js -- do not remove **/

function onCustomDocumentReady()
{
	console.log('%c---------------------------------------------------------------------------\n------------- ANOTHER BANNER BY SQUAREWAVE [squarewave.com] ---------------\n---------------------------------------------------------------------------\n', 'background: #333; color: #8dc63f');
	// canvas is already declared
}

function onCreateJSLoadedAndReady()
{
	// exportRoot, stage and createjs are ready to go // 
	if(exportRoot.onInit) exportRoot.onInit();
	fromId('container').style.display = "block";
}

function handleRollOverEvent(e)
{
	if(exportRoot.onRollOverEvent) exportRoot.onRollOverEvent(e);
}

function handleRollOutEvent(e)
{
	if(exportRoot.onRollOutEvent) exportRoot.onRollOutEvent(e);
}

function handleClickEvent(e)
{
	window.open(window.clickTag,"_blank");
	if(exportRoot.onClickEvent) exportRoot.onClickEvent(e);
}

function handleSlowDown()
{
	if(exportRoot.onSlowDown) exportRoot.onSlowDown();
}

function handleSleep()
{
	if(exportRoot.onSleep) exportRoot.onSleep();
}

function handleWake()
{
	if(exportRoot.onWake) exportRoot.onWake();
}

/** end custom js -- do not remove **/

</script>
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
<body>
	<div id="container">
		<canvas tabindex="0" id="canvas" width="600" height="500"></canvas>
		<!-- start custom html -->
			<!-- custom html goes here -->
		<!-- end custom html -->
	</div>
</body>
</html>
