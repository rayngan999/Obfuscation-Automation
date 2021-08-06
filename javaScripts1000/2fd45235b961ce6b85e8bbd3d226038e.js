<html>
    <body>
        <script>
         (function() {
             var pixelUrls = ["https://ssum-sec.casalemedia.com/usermatchredir?s=185073&cb=https%3A%2F%2Fe.serverbid.com%2Fudb%2F9969%2Fsync%2Fi.gif%3FpartnerId%3D1%26userId%3D", "https://ap.lijit.com/pixel?redir=https%3A%2F%2Fe.serverbid.com%2Fudb%2F9969%2Fsync%2Fi.gif%3FpartnerId%3D24%26userId%3D%24UID","https://sync.go.sonobi.com/usa?https://e.serverbid.com/udb/9969/sync/i.gif?partnerId=38&userId=", "https://pixel.advertising.com/ups/56621/occ", "https://e.serverbid.com/udb/9969/match?redir=https%3A%2F%2Fsync.go.sonobi.com%2Fus.gif%3Fnw%3Dco%26nuid%3D", "https://e.serverbid.com/udb/9969/match?redir=https%3A%2F%2Fsimage2.pubmatic.com%2FAdServer%2FPug%3Fvcode%3Dbz0yJnR5cGU9MSZjb2RlPTM0MjEmdGw9MjAxNjA%3D%26piggybackCookie%3Dazk:", "https://ib.adnxs.com/getuid?https%3A%2F%2Fe.serverbid.com%2Fudb%2F9969%2Fsync%2Fi.gif%3FpartnerId%3D28%26userId%3D%24UID"];

             var DAYS                = 24 * 60 * 60 * 1000;
             var SMARTSYNC_CALLBACK  = 'serverbidCallBids';
             var SYNC_COOKIE_TTL     = 2 * DAYS;
             var SYNC_COOKIE         = 'sb_ss';

             var pixelsInFlight      = [];
             var inSecure            = window.location.protocol.indexOf('s') < 0;

             var SCRIPT_VERSION      = "31";

             function createPixel(src) {
                 var p = document.createElement('img');
                 p.setAttribute("height", "0px");
                 p.setAttribute("width", "0px");
                 p.setAttribute("border", "0");
                 p.setAttribute("style", "position:absolute;");
                 p.onerror=function() { return this.style.display = "none"; };
                 p.setAttribute("src", src);
                 document.body.appendChild(p);
             }

             function getCookie(name) {
                 var value = "; " + document.cookie;
                 var parts = value.split("; " + name + "=");
                 if (parts.length == 2) return parts.pop().split(";").shift();
             }

             function setCookie(c_name, value, exdays) {
                 var exdate = new Date();
                 exdate.setDate(exdate.getDate() + exdays);
                 var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
                 document.cookie = c_name + "=" + c_value;
             }

             function createCookie() {
                 var current_version = getCookie(SYNC_COOKIE) || "0";
                 if (current_version != SCRIPT_VERSION) {
                     var date = new Date();
                     date.setTime(date.getTime() + SYNC_COOKIE_TTL);
                     return (document.cookie = SYNC_COOKIE + "=" + SCRIPT_VERSION +"; expires=" + date.toUTCString() + "; path=/" || 1);
                 }
             }

             function createPixels() {
                 for (var i=0; i<pixelUrls.length; i++) {
                     var pixelUrl = pixelUrls[i];
                     if (inSecure || pixelUrl.match(/^https:/)) {
                         createPixel(pixelUrl);
                     }
                 }

                 var emx = document.createElement('iframe');
                 emx.style.display = "none";
                 emx.src = "https://cs.emxdgt.com/um?ssp=pbs&redirect=https%3A%2F%2Fe.serverbid.com%2Fudb%2F9969%2Fsync%2Fi.gif%3FpartnerId%3D44%26userId%3D%24UID";
                 document.body.appendChild(emx);

                 var sonobi = document.createElement('iframe');
                 sonobi.style.display = "none";
                 sonobi.src = "https://go.sonobi.com/uc.html?pubid=e55fb5d7c2";
                 document.body.appendChild(sonobi);

                 var rubicon = document.createElement('iframe');
                 rubicon.style.display = "none";
                 rubicon.src = "https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=17632&endpoint=us-east";
                 document.body.appendChild(rubicon);

                 var p = document.createElement('iframe');
                 p.style.display = "none";
                 p.src = "https://ads.pubmatic.com/AdServer/js/user_sync.html?p=156319&userIdMacro=PM_UID&predirect=https%3A%2F%2Fe.serverbid.com%2Fudb%2F9969%2Fsync%2Fi.gif%3FpartnerId%3D4%26userId%3DPM_UID";
                 document.body.appendChild(p);
             }

             if (createCookie()) {
                 createPixels();
             } else if (window[SMARTSYNC_CALLBACK]) {
                 window[SMARTSYNC_CALLBACK]();
             }

         })();
        </script>
    </body>
</html>

