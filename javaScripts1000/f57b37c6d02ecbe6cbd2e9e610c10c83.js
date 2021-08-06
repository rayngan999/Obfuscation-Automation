(function () {
    var _cookieKeyForAdInfor = '_pi_a_f_';
    var _otherKeyForAdToken = '_pi_a_t_';
    var _urlParamNameForAdToken = 'popintoken';
    var _targetCampainList = [
        '5ee207c19a105272ab54c7f4',
        '5ee19f469a10521f9466ab05',
        '5ed0c17c0fc10c2fe1086474',
        '5ebe62df9a10523499730264',
        '5ebe62839a105253d0532ee4',
        '5eb227d40fc10c323073cc36',
        '5eb2278e0fc10c323073cc34',
        '5ed897d8f686b6204f41f8c4',
        '5ee9917d9a10521e2319c004',
        '5ee993769a10527ab661a1c7',
        '5eec8e4af686b60e450e7544',
        '5eec8fcbf686b617a847d6fc',
        '5e8403c69a10524e635b63b7',
        '5e84044f9a105276992854aa',
        '5ecba44c9a10524ab03d20fa',
        '5ed86bc90fc10c7649567e14',
        '5ed8c5110fc10c3c774e1d25',
        '5d2c0f54f686b60ac86f4ab4',
        '5d2c0f93f686b60ac86f4ab6',
        '5e8aacf4f686b67c46053144',
        '5e9d1345f686b6261a1f6537',
        '5eafd64c9a10524f2f71f364',
        '5eb8d299f686b618e553bcc4',
        '5ebb7fc70fc10c51e90d2108',
        '5ec34f3f0fc10c4fc9632c14',
        '5eec94e8f686b618282dd484',
        '5eec96e0f686b618282dd489',
        '5eb260ec0fc10c22c678de44',
        '5ed0b5d00fc10c5daf5a1c94',
        '5ee2f2919a10525919480324',
        '5ea695310fc10c4b2102c0d4',
        '5ea695930fc10c2a535a745c'
    ];

    var Util = {
        cookie: (function () { function a() { var e = 0; var f = {}; for (; e < arguments.length; e++) { var c = arguments[e]; for (var d in c) { f[d] = c[d] } } return f } function b(c) { function d(s, q, k) { var p; if (typeof document === "undefined") { return } if (arguments.length > 1) { k = a({ path: "/" }, d.defaults, k); if (typeof k.expires === "number") { var m = new Date(); m.setMilliseconds(m.getMilliseconds() + k.expires * 86400000); k.expires = m } k.expires = k.expires ? k.expires.toUTCString() : ""; try { p = JSON.stringify(q); if (/^[\{\[]/.test(p)) { q = p } } catch (o) { } if (!c.write) { q = encodeURIComponent(String(q)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent) } else { q = c.write(q, s) } s = encodeURIComponent(String(s)); s = s.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent); s = s.replace(/[\(\)]/g, escape); var h = ""; for (var f in k) { if (!k[f]) { continue } h += "; " + f; if (k[f] === true) { continue } h += "=" + k[f] } return (document.cookie = s + "=" + q + h) } if (!s) { p = {} } var t = document.cookie ? document.cookie.split("; ") : []; var r = /(%[0-9A-Z]{2})+/g; var l = 0; for (; l < t.length; l++) { var j = t[l].split("="); var n = j.slice(1).join("="); if (!this.json && n.charAt(0) === '"') { n = n.slice(1, -1) } try { var g = j[0].replace(r, decodeURIComponent); n = c.read ? c.read(n, g) : c(n, g) || n.replace(r, decodeURIComponent); if (this.json) { try { n = JSON.parse(n) } catch (o) { } } if (s === g) { p = n; break } if (!s) { p[g] = n } } catch (o) { } } return p } d.set = d; d.get = function (e) { return d.call(d, e) }; d.getJSON = function () { return d.apply({ json: true }, [].slice.call(arguments)) }; d.defaults = {}; d.remove = function (f, e) { d(f, "", a(e, { expires: -1 })) }; d.withConverter = b; return d } return b(function () { }) })(),

        ssSet: function (key, val) {
            try {
                window.sessionStorage.setItem(key, val);
            } catch (e) {
                return false;
            }
        },

        ssGet: function (key) {
            try {
                return window.sessionStorage.getItem(key);
            } catch (e) {
                return undefined;
            }
        },

        ssRemove: function (key) {
            try {
                window.sessionStorage.removeItem(key);
            } catch (e) {
                return undefined;
            }
        },

        lsSet: function (key, val) {
            try {
                window.localStorage.setItem(key, val);
            } catch (e) {
                return false;
            }
        },

        lsGet: function (key) {
            try {
                return window.localStorage.getItem(key);
            } catch (e) {
                return undefined;
            }
        },

        lsRemove: function (key) {
            try {
                window.localStorage.removeItem(key);
            } catch (e) {
                return undefined;
            }
        },

        getDevice: function () {
            var nua = navigator.userAgent;
            return [/(tablet|ipad|playbook|silk)|(?!.*android.?_).*(?=android(?!.*mobile))/i].some(function (dev) {
                return (nua.match(dev));
            }) ? "tablet" : [/Android/i, /webOS/i, /iPhone/i, /iPod/i, /BlackBerry/i, /Windows Phone/i].some(function (dev) {
                return (nua.match(dev));
            }) ? "mobile" : "pc";
        },

        sendTdLog: function (db, table, data) {
            var _this = this;
            if (window.Treasure2) {
                (new window.Treasure2({
                    writeKey: "8378/25839e06ce4cc1cab55c1c1f1e49d336d6d1d48f",
                    database: db //'fe_monitor'
                })).addRecord(table, data);
            } else {
                setTimeout(function () {
                    _this.sendTdLog(db, table, data);
                }, 200)
            }
        },

        parseParamsFromUrl: function (url) {
            var data = {};

            if (!url) {
                return data;
            }

            var search = url.split('?')[1];
            if (search) {
                var items = search.split('&');

                var arr;
                var name;
                var value;
                for (var i = 0, l = items.length; i < l; i++) {
                    arr = items[i].split("=");
                    name = arr[0];
                    value = arr[1];
                    data[name] = value;
                }

            }

            return data;
        },

        getMainDomain: function () {
            return location.host.substr(location.host.indexOf('.'));
        },

        getValueByKey: function (key) {
            return Util.cookie.get(key) || Util.lsGet(key) || '';
        },

        getHostFromUrl: function (url) {
            if (!url) {
                return '';
            }

            return (url.match(/:\/\/([^/]+)/) || [0, ''])[1];
        },
        clearString: function (s) {
            var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~éæç¨ç»ï¿½#éè·¨åéîåé¡å©åé³Ñå¨é·ï¿½&*éæç¨éçµæ§éï¿½&;|{}ééæ£éæ¦åé¡ä½¸çé³Ñåéî¤æ§é¬å¶æ¬æ¿®æ©çµºéæ³âéï½äº¾é¿çæ·'ééæ£éå©æ§å©µå¬ªÎ¥å¨æ°¬ï¹¦éç­£")
            var rs = "";
            for (var i = 0; i < s.length; i++) {
                rs = rs + s.substr(i, 1).replace(pattern, '');
            }
            return rs;
        }
    };

    function CvMonitor() {
        try {
            var adToken;
            var adToken = this.getTokenFromUrl() || this.createTokenFromRefer();

            if (adToken) {
                this.setTokenToCookie(adToken);
                this.addPopInAdTokenToLink(adToken);
                this.sendLog({
                    token: adToken,
                    type: 'url'
                });
            } else if (adToken = Util.cookie.get(_cookieKeyForAdInfor)) {
                this.addPopInAdTokenToLink(adToken);
                this.sendLog({
                    token: adToken,
                    type: 'cookie'
                });
            } else if (adToken = this.getTokenFromRefer()) {
                this.setTokenToCookie(adToken);
                this.addPopInAdTokenToLink(adToken);
                this.sendLog({
                    token: adToken,
                    type: 'ref'
                });
            }
        } catch (e) {
            // debugger;
        }
    }

    CvMonitor.prototype = {
        getTokenFromRefer: function () {
            var params = Util.parseParamsFromUrl(document.referrer);
            return params[_urlParamNameForAdToken] || '';
        },
        createTokenFromRefer: function () {
            if (document.referrer.indexOf('a.popin.cc') === -1|| document.referrer.indexOf('sea.popin.cc') === -1) {
                return '';
            }

            var params = Util.parseParamsFromUrl(document.referrer);

            var data = JSON.parse(window.atob(params.data));
            if (_targetCampainList.indexOf(data.campaign) === -1) {
                if (params.api_host === 'tw.popin.cc') {
                    this.setTokenToCookieWithOtherKey(params.token);
                }

                return '';
            }

            return params.token;

            // if(params.data){
            //     params.data = JSON.parse(window.atob(params.data));
            // }

            // var adToken = [
            //     params.logid,
            //     params.data.campaign,
            //     params.data.nid
            // ].join('_');

            // return adToken;
        },

        setTokenToCookieWithOtherKey: function (token) {
            var tokenInCookie = Util.cookie.get(_cookieKeyForAdInfor);

            if (!token || token === tokenInCookie) {
                return;
            }

            Util.cookie.set(_otherKeyForAdToken, token, {
                expires: 30,
                domain: Util.getMainDomain()
            });

            Util.cookie.set(_otherKeyForAdToken, token, {
                expires: 30
            });

            this.sendLog({
                token: token,
                type: 'other_cookie'
            });
        },

        getTokenFromUrl: function () {
            return (location.search.match(new RegExp('[\?&]' + _urlParamNameForAdToken + '=([^&]+)')) || [0, ''])[1];
        },

        setTokenToCookie: function (adToken) {
            var tokenInCookie = Util.cookie.get(_cookieKeyForAdInfor);

            if (!adToken || adToken === tokenInCookie) {
                return;
            }

            Util.cookie.set(_cookieKeyForAdInfor, adToken, {
                expires: 30,
                domain: Util.getMainDomain()
            });

            Util.cookie.set(_cookieKeyForAdInfor, adToken, {
                expires: 30
            });
        },

        addPopInAdTokenToLink: function (adToken) {
            var host = location.host;
            var links = document.querySelectorAll('a');
            var paramsStr = _urlParamNameForAdToken + '=' + adToken;
            for (var i = 0, a; a = links[i++];) {
                var href = a.href || '';
                if (!href
                    || href.indexOf('http') !== 0
                    || href.indexOf(_urlParamNameForAdToken) !== -1
                    || host === Util.getHostFromUrl(href)
                ) {
                    continue;
                }

                // var fieldStr =  (href.indexOf('?') === -1 ? '?' : '&') + paramsStr;
                a.addEventListener('click', function (e) {
                    try {
                        var href = this.href;
                        var fieldStr = (href.indexOf('?') === -1 ? '?' : '&') + paramsStr;
                        this.href = href.replace(/(#.*)|$/, fieldStr + '$1');
                    } catch (e) { }
                }, false);
            }
        },
        sendLog: function (data) {
            Util.sendTdLog('fe_monitor', 'cv_t', Object.assign({
                url: location.href,
                ua: navigator.userAgent,
                device: Util.getDevice(),
                ref: document.referrer
            }, data));
        }
    };

    function MediaMonitor() {
        var maxTry = 10;
        (new Promise(function (resolve, reject) {
            function selectNodes() {
                try {
                    var adNodes = document.querySelectorAll('a._popIn_recommend_article_ad, ._popIn_recommend_article_ad a');

                    if (adNodes.length > 0) {
                        resolve(adNodes);
                        return;
                    }

                    if (--maxTry >= 0) {
                        setTimeout(selectNodes, 1000);
                    }
                } catch (e) {
                    throw e;
                }
            }
            selectNodes();
        })).then(this.addAdTokenToLpUrl.bind(this));
    }
    MediaMonitor.prototype = {
        addAdTokenToLpUrl: function (adNodes) {
            try {
                for (var i = 0, adNode; adNode = adNodes[i++];) {
                    var params = Util.parseParamsFromUrl(adNode.href);
                    if (params['api_host'] !== 'tw.popin.cc' || !params.token) {
                        if(params['api_host'] !== 'hk.popin.cc'){
                            continue;
                        }
                    }

                    // var data = JSON.parse(window.atob(params.data));
                    // if(_targetCampainList.indexOf(data.campaign) === -1){
                    //     continue;
                    // }

                    var lp = decodeURIComponent(params.lp);
                    var fieldStr = (lp.indexOf('?') === -1 ? '?' : '&') + _urlParamNameForAdToken + '=' + params.token;;
                    lp = lp.replace(/(#.*)|$/, fieldStr + '$1');

                    adNode.href = adNode.href.replace(/lp=[^&]+/, 'lp=' + encodeURIComponent(lp));
                }
            } catch (e) {

            }
        }

    };

    function main() {
        if (!window.PopIn6) {
            // new CvMonitor()
        } else {
            if (window.PopIn6.requestCountry === undefined) {
                setTimeout(main, 100);
            }

            if (window.PopIn6.requestCountry === 'tw' ||window.PopIn6.requestCountry === 'hk') {
                new MediaMonitor();
            }
        }
    }
    main();
})();