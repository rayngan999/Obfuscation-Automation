<!DOCTYPE html>
<!--
    NOTES:
    1. All tokens are represented by '$' sign in the template.
    2. You can write your code only wherever mentioned.
    3. All occurrences of existing tokens will be replaced by their appropriate values.
    4. Blank lines will be removed automatically.
    5. Remove unnecessary comments before creating your template.
-->
<!-- DCM Standard, GDN Adsense Adwords with polite load -->
<!-- For AnimateCC 2017 and 2018 -->
<!-- Supports rollover and proper polite-load -->
<html>
<head><script type="text/javascript">
    
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
    
  </script><meta name="ad.size" content="width=800,height=600">
    <meta charset="UTF-8">
    <meta name="authoring-tool" content="Adobe_Animate_CC">
    <meta name="old.adsize" content="width=800,height=600">
    <style type="text/css">
    /** Global **/
    * {
        margin: 0;
        padding: 0;
        font-size: 0;
    }
    #_preload_div_ {
        box-sizing: border-box;
        border: 1px solid black;
    }
    :focus {
        outline: none;
    }
    ::-moz-focus-inner {
        border: 0;
    }
    </style>
    <!-- write your code here -->
    <script>
   var creativeName = "index";
    // Synchronous JS loader
    var load = (function() {
        var head = document.getElementsByTagName('head')[0];
        var SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING = (function () {
            var s = document.createElement("script"), isBuggy = false;
            try {
                s.appendChild(document.createTextNode(""));
                isBuggy = !s.firstChild || s.firstChild && s.firstChild.nodeType !== 3;
            } catch (e) {
                isBuggy = true;
            }
            s = null;
            return isBuggy;
        })();
        var createScript;
        if (!SCRIPT_ELEMENT_REJECTS_TEXTNODE_APPENDING) {
            createScript = function(text) {
                var script = document.createElement('script');
                script.appendChild(document.createTextNode(text));
                return script;
            };
        } else {
            createScript = function(text) {
                var script = document.createElement('script');
                script.text = text;
                return script;
            };
        }
        var load = function(files) {
            if (files.length) {
                var file = files.pop();
                if (file.src) {
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = file.src;
                    script.onreadystatechange = function() {
                        if (this.readyState == 'complete' || this.readyState == 'loaded') {
                            script.onreadystatechange = null;
                            script.onload = null;
                            load(files);
                        }
                    };
                    script.onload = function() {
                        script.onreadystatechange = null;
                        script.onload = null;
                        load(files);
                    };
                    head.appendChild(script);
                } else if (file.text) {
                    var script = createScript(file.text);
                    head.appendChild(script);
                    load(files);
                }
            }
        }
        return function(scripts) {
            load(scripts.reverse());
        };
    })();
    var scripts = [
        { src: "https://s0.2mdn.net/ads/studio/cached_libs/createjs_2015.11.26_54e1c3722102182bb133912ad4442e19_min.js" },
        { src: creativeName+".js" }
    ];
    load(scripts);
    </script>
    <script>
    var clickTag = "https://www.google.com"; 
    </script>
    <!-- <script src="https://s0.2mdn.net/ads/studio/cached_libs/createjs_2015.11.26_54e1c3722102182bb133912ad4442e19_min.js"> -->
    </script>
<!--
<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
 -->
<!-- 
<script src="index.js?1627019797850"></script>    
 -->
    <script> 
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
    var prevFrame = null, isPlaying = true;
    function init() {
        canvas = document.getElementById("canvas");
        anim_container = document.getElementById("animation_container");
        dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("E7F8FFA30680744D9C644F57AD1AD8B3");
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
	exportRoot = new lib._800x600();
	stage = new lib.Stage(canvas);   
        //Registers the "tick" event listener.
        fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}        
        //Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]); 
    createjs.Ticker.addEventListener("tick", tick); createjs.Ticker.addEventListener("tick", stage);
    try{ var callOutside = window.parent.iFrameAnimationLoaded; } catch(e){}
    if (typeof callOutside !== "undefined") { 
        callOutside(creativeName);
    }
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
function tick(evt){
    if(isPlaying){
        if(exportRoot.currentFrame != prevFrame){
            //console.log(exportRoot.currentFrame);
            prevFrame = exportRoot.currentFrame;
            try{ var callOutsideToTrackPosition = window.parent.moveSliderToCurrentFrame; } catch(e){}
            if (typeof callOutsideToTrackPosition !== "undefined") {
                callOutsideToTrackPosition(creativeName, exportRoot.currentFrame, exportRoot.totalFrames);
            }
        }
    }
}
    </script>
</head>
<body onload="load(scripts);init();" style="margin:0px;">
    <div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:800px; height:600px">
        <a href="javascript:window.open(window.clickTag)" style="overflow:hidden; width:800px; height:600px; position: absolute; left: 0px; top: 0px; padding: 0; margin: 0; border: 0; cursor: pointer;">
            <canvas id="canvas" width="800" height="600" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
            <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:800px; height:600px; position: absolute; left: 0px; top: 0px; display: block;">
            </div>
        </a>
    </div>
  <script>
function adzone_click() { 
  window.top.postMessage({ m: 'adzone', a:'click', f:'103', n:'14_880' }, '*');
  window.open(clickTag, '_blank');
}</script>
<div style="position: fixed; width: 100%; height: 100%; top: 0; overflow: hidden; z-index: 98;display: block;
 cursor:pointer" onclick="adzone_click()"></div>
  
<script>
var params = {"autoclose": "12", "backgroundColor": "#565452aa", "width": "800", "height": "600", "impression_pixel": "", "activeview_pixel": "", "click_pixel": ""};
if(window.local_dir) { params.local_dir = window.local_dir; }
window.top.postMessage({ m: "adzone", a:"print", f:'103', n:'14_880', p: params } , "*");
</script>

<script>
  var clickTag = "";
</script>

<script data-exports-type="dclk-quick-preview">if(typeof studio !== "undefined" && studio.Enabler) { studio.Enabler.setRushSimulatedLocalEvents(true); }
</script>
</body>
</html>
