<!DOCTYPE html>
<html lang="en">
<head>
<title>Checkout</title>
<meta name="ad.size" content="width=300,height=250">
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="" />
<script type="text/javascript"> var clickTag = "https://www.checkout.com/"; </script>
<style>
/*--CSS start here--*/
* { margin: 0; padding: 0; }
img { border: 0; vertical-align: top; }
.banner-box { cursor: pointer; margin: 0; padding: 0; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; position: relative; width: 300px; height: 250px; overflow: hidden; background: linear-gradient(103.72deg, rgba(43, 212, 219, 0) 37.12%, rgba(43, 212, 219, 0.2) 80.72%), #0C1142;}
.all_frame {width: 100%; height: 100%; left: 0; top: 0; position: absolute;}
.all_frame div {position: absolute;}

.main_bg {right: 0px;top: 0px;}
.main_bg img {max-width: 185px;}
.logo {left: 23px;top: 34px;}
.logo img {max-width: 127px;}
.text_1 {left: 23px;top: 93px;}
.text_1 img {max-width: 203px;}
.text_2 {left: 25px;top: 94px;}
.text_2 img {max-width: 146px;}
.text_3 {left: 26px;top: 94px;}
.text_3 img {max-width: 206px;}

.btn_main {left: 25px; top: 188px; width: 132px; height: 33px;transition: 0.3s; -webkit-transition: 0.3s; -moz-transition: 0.3s; -o-transition: 0.3s;}
.btn_main .btn_pulse {left: 0;top: -8%;width: 100%;height: 116%;border-radius: 7px;background: #FFFFC8;transition: 0.3s; -webkit-transition: 0.3s; -moz-transition: 0.3s; -o-transition: 0.3s; opacity: 0;}
.btn_main a {background-color: #FFFFC8; width: 100%; height: 100%; left: 0px; top: 0px; position: absolute; text-align: center;border-radius: 7px;transition: 0.3s; -webkit-transition: 0.3s; -moz-transition: 0.3s; -o-transition: 0.3s;}
.btn_main:hover a, .btn_main:hover .btn_pulse {background-color: #56e8eb;}
.btn_main a span {left: 31px; top: 11px; position: absolute;}
.btn_main a img {max-width: 69px;}

.text_1 img, .text_2 img, .text_3 img, .btn_main {opacity: 0;}

/*--Animation start here--*/
.text_1 img
{
 animation: fadeIn 0.5s ease-in-out 0.1s forwards;
 -webkit-animation: fadeIn 0.5s ease-in-out 0.1s forwards;
}
.text_1
{
 animation: fadeOut 0.5s ease-in-out 3s forwards;
 -webkit-animation: fadeOut 0.5s ease-in-out 3s forwards;
}
.text_2 img
{
 animation: fadeIn 0.5s ease-in-out 3.5s forwards;
 -webkit-animation: fadeIn 0.5s ease-in-out 3.5s forwards;
}
.text_2
{
 animation: fadeOut 0.5s ease-in-out 6.5s forwards;
 -webkit-animation: fadeOut 0.5s ease-in-out 6.5s forwards;
}
.text_3 img, .btn_main
{
 animation: fadeIn 0.5s ease-in-out 7s forwards;
 -webkit-animation: fadeIn 0.5s ease-in-out 7s forwards;
}
.btn_pulse
{
 animation: btnAnim 2.5s linear 7.5s forwards infinite;
 -webkit-animation: btnAnim 2.5s linear 7.5s forwards infinite;
}
/*--Animation end here--*/


/*-Keyframe start here--*/
@keyframes btnAnim {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  20% {
    opacity: 0.6;
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(1.15, 1.15, 1.15);
    transform: scale3d(1.15, 1.15, 1.15);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale3d(1.15, 1.15, 1.15);
    transform: scale3d(1.15, 1.15, 1.15);
  }
}
@-webkit-keyframes btnAnim {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  20% {
    opacity: 0.6;
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }
  50% {
    opacity: 0;
    -webkit-transform: scale3d(1.15, 1.15, 1.15);
    transform: scale3d(1.15, 1.15, 1.15);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale3d(1.15, 1.15, 1.15);
    transform: scale3d(1.15, 1.15, 1.15);
  }
}
@keyframes fadeOut {
0% {opacity:1;}
100% {opacity:0;}
}
@-webkit-keyframes fadeOut {
0% {opacity:1;}
100% {opacity:0;}
}  
@keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
}
@-webkit-keyframes fadeIn {
0% {opacity:0;}
100% {opacity:1;}
} 
/*-Keyframe end here--*/
/*--CSS end here--*/    
</style>
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
<!--Banner start here-->
<div class="banner-box" id="clickTagLayer" onclick="javascript:window.open(window.clickTag)">
  <div class="all_frame">
    <div class="main_bg"><img src="main_bg.png" alt="" title=""></div>
    <div class="logo"><img src="logo.png" alt="" title=""></div>
    <div class="text_1"><img src="text_1.png" alt="" title=""></div>
    <div class="text_2"><img src="text_2.png" alt="" title=""></div>
    <div class="text_3"><img src="text_3.png" alt="" title=""></div>
    <div class="btn_main">
      <div class="btn_pulse"></div>
      <a href="#"><span><img src="btn_text.png" alt="" /></span></a>
    </div>
    
  </div>
</div>
<!--Banner end here-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
var maxAppend = 0;
setInterval(function() { 
if (maxAppend >= 1) return;
 var addinput = $('.all_frame').detach().clone().appendTo('.banner-box');
   maxAppend++;
    $("i").append(addinput);
}, 11500);
</script> 
</body>
</html>