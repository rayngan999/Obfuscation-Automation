<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="ad.size" content="width=300,height=250" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="common.min.css" />
    <link rel="stylesheet" type="text/css" href="main.css" />
    <script src="https://s0.2mdn.net/ads/studio/cached_libs/tweenmax_1.19.0_643d6911392a3398cb1607993edabfa7_min.js"></script>

    <!--GOOGLE CLICK HANDLING CODE -->
    <script type="text/javascript">
        var clickTag = "https://www.paypal.com";
    </script>
    <!--END OF CLICK HANDLING CODE -->
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
    <div class="banner" style="display: none;">
        <div class="htmlMem">
            <div class="scene">
                <div class="absolute background"></div>
                <div class="absolute gradient"></div>
            </div>

            <!-- frame1 -->
            <div class="frame frame1">
                <img class="text" src="frame1-text.png" alt="paypal" />
            </div>

            <!-- frame2 -->
            <div class="frame frame2">
                <img class="text" src="frame2-text.png" alt="paypal" />

                <!-- CTA -->
                <div class="cta yellow">
                    <img class="logo-blue" src="cta-logo.svg" alt="paypal" />
                    <img class="text-white" src="cta-text.png" alt="paypal" />
                </div>

            </div>

            <!-- frame3 -->
            <div class="frame frame3 endframe">
                <img class="text" src="frame3-text.png" alt="paypal" />
                <img class="logo" src="pp-logo-white.png" alt="paypal" />

                <!-- Cursor Updated -->
                <svg class="cursor" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 120 120">
                    <circle class="circle" cx="60" cy="60" r="60" />
                    <path class="black" d="M87.051,81.136l-.017-.054A5.064,5.064,0,0,0,82.3,77.527l-.068,0a5.058,5.058,0,0,0-1.636.237,4.525,4.525,0,0,0-.678.28,4.768,4.768,0,0,0-.54-1.529,4.652,4.652,0,0,0-4.265-2.4l-.258.01a4.694,4.694,0,0,0-2.166.623,7.417,7.417,0,0,0-.807-2.163A4.6,4.6,0,0,0,68.2,70.252l-.354-.023q-.184,0-.366.015a4.892,4.892,0,0,0-2.447.833V59.538a4.935,4.935,0,1,0-9.869,0V84.849L54.008,83.5a5.519,5.519,0,0,0-8.749,6.7L59.93,111.692H81.967l.315-.763c5.242-12.7,5.37-21.874,5.419-25.329A14.3,14.3,0,0,0,87.051,81.136Z" />
                    <path class="white" d="M80.312,109.225H61.233L47.3,88.808A3.052,3.052,0,0,1,52.134,85.1l5.5,6.42V59.538a2.467,2.467,0,0,1,4.934,0V85.357h2.878v-10.6l.048-.118a3.365,3.365,0,0,1,.25-.7A2.151,2.151,0,0,1,67.678,72.7c.044,0,.087-.005.131-.006l.215.015A2.141,2.141,0,0,1,69.736,73.8a4.927,4.927,0,0,1,.636,2.364c.01.864.01,2.153.01,2.154v7.368h2.907V77.468a1.912,1.912,0,0,1,.4-.423,2.229,2.229,0,0,1,1.27-.455l.258-.01a2.216,2.216,0,0,1,2.028,1.162,2.156,2.156,0,0,1,.275,1.076c-.006.541-.006,1.966-.006,1.966v5.537h2.924V80.692a2.338,2.338,0,0,1,.914-.579,2.57,2.57,0,0,1,.836-.121h.067a2.6,2.6,0,0,1,2.428,1.824l.017.055a11.816,11.816,0,0,1,.538,3.693A62.967,62.967,0,0,1,80.312,109.225Z" />
                    <!-- lines animated on click -->
                    <line class="line blue" x1="53" y1="63" x2="19" y2="83" />
                    <line class="line blue" x1="53" y1="56" x2="19" y2="36" />
                    <line class="line blue" x1="60" y1="52" x2="60" y2="13" />
                    <line class="line blue" x1="66" y1="56" x2="100" y2="36" />
                    <line class="line blue" x1="66" y1="63" x2="100" y2="83" />
                </svg>
            </div>
        </div>

        <!-- Click Through -->
        <div id="exit" class="clickthrough no-select"></div>
        <svg class="replay top-left white" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20">
            <path d="M13.29,4.76V3.45L8.58,5.9l4.7,2.45V7.11h0A2.82,2.82,0,0,1,16,10a2.82,2.82,0,0,1-2.74,2.88H6.71A2.82,2.82,0,0,1,4,10,2.82,2.82,0,0,1,6.71,7.11h.66V4.76H6.71a5.15,5.15,0,0,0-5,5.23,5.15,5.15,0,0,0,5,5.23h6.58a5.15,5.15,0,0,0,5-5.23A5.15,5.15,0,0,0,13.29,4.76Z" />
        </svg>
    </div>

    <script src="common.js"></script>
    <script src="main.js"></script>
</body>

</html>

<!--  -->