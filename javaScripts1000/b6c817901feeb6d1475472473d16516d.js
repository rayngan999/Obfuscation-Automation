<!DOCTYPE html>

      <!--[if lt IE 7]> <html class="ie6 lt-ie9" lang="en"> <![endif]-->
        <!--[if IE 7]> <html class="ie7 lt-ie9" lang="en"> <![endif]-->
        <!--[if IE 8 ]> <html class="ie8 lt-ie9" lang="en"> <![endif]-->
        <!--[if IE 9 ]> <html class="ie9" lang="en"> <![endif]-->
        <!--[!IE]><!--> <html class="" lang="en"> <!--<![endif]-->
  

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta name="robots" content="noindex">
  <link rel="preconnect" href="https://assets.vidyard.com" crossorigin />
  <link rel="preconnect" href="https://cdn.vidyard.com" crossorigin />
  <script>
    window.__startTime = new Date().getTime();

    (function checkLegacy() {
      var loc = window.location;
      function isIE8orBelow() {
        return document.documentElement.className.indexOf('lt-ie9') > -1;
      }

      function isAndroidBefore(version) {
        var userVersion = navigator.userAgent.toLowerCase().match(/android (\d+(?:\.\d+)+)/);
        if (userVersion && userVersion.length === 2 && parseFloat(userVersion[1]) < version) {
          return true;
        }
        return false;
      }

      function isIosBefore(version) {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          var userVersion = parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10);
          return userVersion < version;
        }
        return false;
      }

      // Microsoft Office software validates links internally before sending them to the browser.
      // Since it identifies itself as an older browser, the not supported page redirect triggers which
      // causes both the player and an error page to open when the link makes it to the browser
      // To avoid this we skip the error page redirect if we identify the browser as office
      function isMSOffice() {
        return /office/.test(navigator.userAgent.toLowerCase());
      }

      // function isIE10or11() {
      //   return (
      //     navigator.userAgent.toLowerCase().indexOf('msie 10') > -1 ||
      //     !!(navigator.userAgent.match(/Trident/) && !navigator.userAgent.match(/MSIE/))
      //   );
      // }

      var notSupported =
        loc.search.indexOf('vylegacy=1') !== -1 ||
        isIE8orBelow() ||
        isAndroidBefore(4.4) ||
        isIosBefore(7);

      if (notSupported && !isMSOffice()) {
        window.location = loc.protocol + '//' + loc.hostname + '/error/browser-not-supported';
      }

      // TODO: Once POMO is running we would need to redirect to OUTPOST so we can serve a supported
      // else if (isIE10or11()) {
      //   window.location = `${loc.protocol}//${loc.hostname}/legacy/${loc.pathname.replace(/^\/?/, '')}${
      //     loc.search
      //   }`;
      // }
    })();
  </script>
  <style>
    body,
    html {
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
      font-family: Helvetica, Arial, sans-serif;
      background-color: transparent;
      overflow: hidden;
      /* Hide content until player CSS loads */
      display: none;
    }
    #root {
      height: 100%;
      width: 100%;
    }
  </style>
  <script src="https://assets.vidyard.com/play/js/runtime~main-04cc9b0af284549ac31fa4e33c386031.js" crossorigin="anonymous"></script>
  <script src="https://assets.vidyard.com/play/js/main-7f106a2a0be47a0349a49a677f85c74d.js" crossorigin="anonymous"></script>
</head>
<body>
  <main>
    <div id="root"></div>
  </main>
</body>
</html>
