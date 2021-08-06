
var TatariXandrManager = /** @class */ (function () {
    function TatariXandrManager(xandrID, xandrGroups) {
        this.cookieTime = 30 * 24 * 60 * 60 * 1000; // 30 days
        this.cookieName = 'tatari-xandr-group';
        this.groups = 1; // Total number of test groups
        this.group = 1; // Selected test group
        this.xandrID = xandrID;
        // this is a xandr generated snippet
        // @ts-ignore
        // tslint:disable-next-line
        !function (e, i) { if (!e.pixie) {
            var n = e.pixie = function (e, i, a) { n.actionQueue.push({ action: e, actionValue: i, params: a }); };
            n.actionQueue = [];
            var a = i.createElement("script");
            a.async = !0, a.src = "//acdn.adnxs.com/dmp/up/pixie.js";
            var t = i.getElementsByTagName("head")[0];
            t.insertBefore(a, t.firstChild);
        } }(window, document);
        var pixie = window.pixie;
        pixie('init', this.xandrID);
        this.groups = parseInt(xandrGroups, 10);
        if (isNaN(this.groups)) {
            this.groups = 1;
        }
        if (this.groups > 1) {
            // We'll roll a new random group, then see if the cookie has
            // already assigned us one, and if so, use that value instead.
            var cookieGroup = Math.ceil(Math.random() * this.groups);
            var cookieText = this.getCookie(this.cookieName);
            if (cookieText) {
                var parsedCookie = parseInt(cookieText, 10);
                if (!isNaN(parsedCookie)) {
                    cookieGroup = parsedCookie;
                }
            }
            // `cookieGroup` is now either random for the first time, or
            // what we got out of `this.cookieName` - so we can commit to
            // the instance, and refresh the cookie
            this.group = cookieGroup;
            this.removeCookie(this.cookieName);
            this.createCookie(this.cookieName, ('' + this.group), this.cookieTime);
        }
    }
    TatariXandrManager.prototype.event = function (event) {
        // Xandr does not like underscores
        var cleanEvent = event.replace(/-|\s/g, '');
        var pixie = window.pixie;
        pixie('event', cleanEvent);
        // If the event was a pageview, and group assignments
        // are enabled, we also emit a group assignment event.
        if ((cleanEvent === 'PageView') && (this.groups > 1)) {
            pixie('event', ('group_' + this.group));
        }
    };
    TatariXandrManager.prototype.createCookie = function (cookieName, cookieValue, cookieExp) {
        var exp = '';
        var date = new Date();
        var domain = "domain=" + this.getDomain() + ";";
        date.setTime(date.getTime() + cookieExp);
        exp = "expires=" + date.toUTCString() + ";";
        document.cookie = cookieName + "=" + cookieValue + "; " + exp + " " + domain + " path=/";
        return cookieValue;
    };
    TatariXandrManager.prototype.getDomain = function () {
        var testCookieName = 'testTLD';
        var testCookie = testCookieName + "=test";
        var loc = document.location || { hostname: '' };
        var hostnames = loc.hostname.split('.');
        var domain = '';
        hostnames.some(function (_, i) {
            var testDomain = hostnames.slice(hostnames.length - i - 1).join('.');
            document.cookie = testCookie + ";domain=" + testDomain + ";";
            if (document.cookie.indexOf(testCookie) !== -1) {
                // found tld, remove cookie
                domain = testDomain;
                document.cookie = testCookieName + "=;domain=" + domain + ";expires=" + (new Date(0)).toUTCString() + ";";
                return true;
            }
        });
        return domain;
    };
    TatariXandrManager.prototype.getCookie = function (cookieName) {
        var name = cookieName + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var _i = 0, ca_1 = ca; _i < ca_1.length; _i++) {
            var c = ca_1[_i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return;
    };
    TatariXandrManager.prototype.removeCookie = function (cookieName) {
        var domain = this.getDomain();
        // delete cookie which doesn't specify domain
        document.cookie = cookieName + "=; Max-Age=-99999999; path=/";
        // delete cookie which does specify domain
        if (domain) {
            document.cookie = cookieName + "=; Max-Age=-99999999; domain=" + domain + "; path=/";
        }
    };
    return TatariXandrManager;
}());
window['TatariXandr'] = new TatariXandrManager('6e9b563c-ad3d-4386-a5fa-df0394f08af9', '1');

            try {
                (function (document, ttm) {
                    var ttmLibUrl = 'https://d2hrivdxn8ekm8.cloudfront.net/tag-manager/beb69d64-5e99-483c-9947-b450610b00be-additional-latest.js';
                    // first time running, mock FE
                    if (!ttm.version) {
                        window['ttm'] = ttm;
                        ttm['init'] = function (token) {
                            var defer = function (target, fn) {
                                // tslint:disable-next-line:only-arrow-functions
                                ttm[fn] = function () {
                                    target.push([fn].concat(Array.prototype.slice.call(arguments, 0)));
                                };
                            };
                            var functions = 'onTrack onPageview onIdentify'.split(' ');
                            functions.forEach(function (fn) {
                                defer(ttm, fn);
                            });
                            ttm['_i'] = token;
                        };
                        ttm['version'] = '1.0.0';
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.async = true;
                        script.src = ttmLibUrl;
                        var firstScript = document.getElementsByTagName('script')[0];
                        firstScript.parentNode.insertBefore(script, firstScript);
                    }
                })(document, window['ttm'] || []);
            }
            catch (e) {
                console.log(e);
            }
            ttm.init('beb69d64-5e99-483c-9947-b450610b00be');
            (function(){
                var ref = window.document.getElementsByTagName('head')[0];
                var script = window.document.createElement('script');
                script.src = 'https://d2hrivdxn8ekm8.cloudfront.net/tracker-latest.min.js';
                script.async = true;
                ref.appendChild(script);
            })();
