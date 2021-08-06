<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <!-- ! Updated the below Google Ad Size before publishing ! -->
  <meta name="ad.size" content="width=728,height=90">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/gsap.min.js"></script>
  <script src="particles.min.js"></script>
  <!-- Standard clickthrough setup -->
  <script type="text/javascript" charset="utf-8">
    var clickTag = ""

    const bgExitHandler = (e) => {
      window.open(window.clickTag)
    }
  </script>
  <script src="main.js"></script>
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

<body onload="bodyLoaded()">

  <!-- Start banner -->
  <div class="banner" id="banner">
    <img src="BG.jpg" class="bg" id="bg">
    <div class="particles" id="particles"></div>
    <img src="butterfly.png" class="butterfly" id="butterfly">
    <img src="momentum.png" class="momentum" id="momentum">
    <img src="title.png" class="title" id="title">
    <img src="CTA.png" class="cta" id="cta">
     <!--<img src="date.png" class='date' id='date'> -->
    <img src="legals.png" class="legals" id="legals">
    <div class="border"></div>
  </div>
  <!-- End banner -->

  <!-- Exit div -->
  <div id="default_exit"></div>
  <div class="products" id="products">
    <img src="product1.jpg" class="product1" id="product1">
    <img src="product1-title.png" class="product1-title" id="product1-title">
    <img src="product2.jpg" class="product2" id="product2">
    <img src="product2-title.png" class="product2-title" id="product2-title">
    <img src="product3.jpg" class="product3" id="product3">
    <img src="product3-title.png" class="product3-title" id="product3-title">
  </div>

  <!-- Standard clickthrough -->
  <script>
    document.getElementById('default_exit').addEventListener('click', bgExitHandler, false)
    document.getElementById('products').addEventListener('click', bgExitHandler, false)
  </script>
</body>

</html>