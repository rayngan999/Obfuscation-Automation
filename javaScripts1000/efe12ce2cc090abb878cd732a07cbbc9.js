<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script src="https://vawpro.vm5apis.com/man.js"></script>
    <script>
        var enableLog = (document.location.search.indexOf("enable-log") >= 0);
        var currentTimestamp = Date.now();

        var docCookies = {
          getItem: function (sKey) {
            if (!sKey) { return null; }
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
          },
          setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure, SameSite) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
            var sExpires = "";
            if (vEnd) {
              switch (vEnd.constructor) {
                case Number:
                  sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                  break;
                case String:
                  sExpires = "; expires=" + vEnd;
                  break;
                case Date:
                  sExpires = "; expires=" + vEnd.toUTCString();
                  break;
              }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (SameSite ? "; SameSite=" + SameSite : "") + (bSecure ? "; secure" : "");
            return true;
          },
        };

        // Try Get WebbrowserId from docCookies
        var oldWebBrowserId, oldWebBrowserIdForCookie;
        var oldWebBrowserIdTimestamp, oldWebBrowserIdForCookieTimestamp;
        try {
          oldWebBrowserIdForCookie = docCookies.getItem('VM5AD_BROWSER_ID_COOKIE');
          oldWebBrowserIdForCookieTimestamp = docCookies.getItem('VM5AD_BROWSER_ID_COOKIE_TIMESTAMP');
          if (enableLog) {
              console.log('INNER: docCookies.getItem(\'VM5AD_BROWSER_ID_COOKIE\')=' + oldWebBrowserIdForCookie);
              console.log('INNER: docCookies.getItem(\'VM5AD_BROWSER_ID_COOKIE_TIMESTAMP\')=' + oldWebBrowserIdForCookieTimestamp);
          }
        } catch (e) {
          if (enableLog) {
              console.log('INNER: docCookies does not exist');
              console.trace(e);
          }
        }
        // Try Get WebbrowserId from localStorage
        try {
          oldWebBrowserId = localStorage.getItem('VM5AD_BROWSER_ID');
          oldWebBrowserIdTimestamp = localStorage.getItem('VM5AD_BROWSER_ID_TIMESTAMP');
          if (enableLog) {
              console.log('INNER: localStorage.getItem(\'VM5AD_BROWSER_ID\')=' + oldWebBrowserId);
              console.log('INNER: localStorage.getItem(\'VM5AD_BROWSER_ID_TIMESTAMP\')=' + oldWebBrowserIdTimestamp);
          }
        } catch (e) {
          if (enableLog) {
              console.log('INNER: localStorage does not exist');
              console.trace(e);
          }
        }
        // Try to Choose WebbrowserId from candidates
        if (oldWebBrowserIdForCookie && oldWebBrowserIdForCookie !== '') {
          window.VM5AD_BROWSER_ID = oldWebBrowserIdForCookie;
        } else if (oldWebBrowserId && oldWebBrowserId !== '') {
          window.VM5AD_BROWSER_ID = oldWebBrowserId;
        }

        var newWebBrowserId = window.VM5AD_BROWSER_ID;
        var newWebBrowserIdForCookie = newWebBrowserId;
        var newWebBrowserIdTimestamp = oldWebBrowserIdTimestamp || currentTimestamp;
        var newWebBrowserIdForCookieTimestamp = oldWebBrowserIdForCookieTimestamp || currentTimestamp;

        // Section: docCookies
        try {
            docCookies.setItem('test', 'test');

            docCookies.setItem('VM5AD_BROWSER_ID_COOKIE_TIMESTAMP', newWebBrowserIdForCookieTimestamp, Infinity,null,null,true,'None');
            if (enableLog) {
                console.log('INNER: docCookies.setItem(\'VM5AD_BROWSER_ID_COOKIE_TIMESTAMP\', ' + newWebBrowserIdForCookieTimestamp + ')');
            }

            if (oldWebBrowserIdForCookie && oldWebBrowserIdForCookie !== '') {
                newWebBrowserIdForCookie = oldWebBrowserIdForCookie;
            } else {
                docCookies.setItem('VM5AD_BROWSER_ID_COOKIE', newWebBrowserIdForCookie, Infinity,null,null,true,'None');

                if (enableLog) {
                    console.log('INNER: docCookies.setItem(\'VM5AD_BROWSER_ID_COOKIE\', ' + newWebBrowserIdForCookie + ')');
                }
            }
        } catch (e) {
            if (enableLog) {
                console.log('INNER: docCookies does not exist');
                console.trace(e);
            }
        }

        // Section: localStorage
        try {
            // Handle the exception: QuotaExceededError (DOM Exception 22): The quota has been exceeded.
            //
            // 157010 â QuotaExceededError when saving to localStorage in private mode
            // https://bugs.webkit.org/show_bug.cgi?id=157010
            //
            // https://stackoverflow.com/a/23453866
            // This can occur when Safari is in private mode browsing. While in private browsing, local storage is not available at all.
            // One solution is to warn the user that the app needs non-private mode to work.
            // UPDATE: This has been fixed in Safari 11, so the behaviour is now aligned with other browsers.
            localStorage.setItem('test', 'test');

            localStorage.setItem('VM5AD_BROWSER_ID_TIMESTAMP', newWebBrowserIdTimestamp);
            if (enableLog) {
                console.log('INNER: localStorage.setItem(\'VM5AD_BROWSER_ID_TIMESTAMP\', ' + newWebBrowserIdTimestamp + ')');
            }

            if (oldWebBrowserId && oldWebBrowserId !== '') {
                newWebBrowserId = oldWebBrowserId;
            } else {
                localStorage.setItem('VM5AD_BROWSER_ID', newWebBrowserId);

                if (enableLog) {
                    console.log('INNER: localStorage.setItem(\'VM5AD_BROWSER_ID\', ' + newWebBrowserId + ')');
                }
            }
        } catch (e) {
            if (enableLog) {
                console.log('INNER: localStorage does not exist');
                console.trace(e);
            }
        }

        parent.postMessage({
            'event': 'iframeReady',
            'VM5AD_BROWSER_ID_COOKIE_TIMESTAMP': newWebBrowserIdForCookieTimestamp,
            'VM5AD_BROWSER_ID_COOKIE': newWebBrowserIdForCookie,
            'VM5AD_BROWSER_ID_TIMESTAMP': newWebBrowserIdTimestamp,
            'VM5AD_BROWSER_ID': newWebBrowserId
        }, '*');
    </script>
</head>
<body>

</body>
</html>
