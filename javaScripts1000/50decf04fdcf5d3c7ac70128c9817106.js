;window['_fpFactor'] = window['_fpFactor'] || {
    cookie_name: '__fp2_f2',
    fp_length: 32,
    get: function(callback) {
        var result = this.getCookie(this.cookie_name);

        if (!result) {
            var domain = this.getDomainBase();

            var options = {
                expires: 3153600000000,
                domain: domain
            };

            this.setCookie(this.cookie_name, this.hash.get(this.fp_length), options);
        }

        result = this.getCookie(this.cookie_name);

        if (!result) {
            return;
        }

        callback(result);
    },
    getDomainBase: function() {
        var partial = window.location.hostname.split('.');
        var test_cookie_name = this.hash.get(7), test_domain;

        for (var i = partial.length;i > 0;i--) {
            test_domain = '.'+partial.slice(i - 1).join('.');

            this.setCookie(test_cookie_name, '1', {
                domain: test_domain
            });

            if (this.getCookie(test_cookie_name) == '1') {
                return test_domain;
            }
        }
    },
    hash: (function() {
        return {
            get: function(l) {
                var result           = [];
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < l; i++ ) {
                    result.push(characters.charAt(Math.floor(Math.random() *
                        charactersLength)));
                }
                return result.join('');
            }
        };
    })(),
    getCookie: function(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    setCookie: function(name, value, options) {
        options = options||{};

        if (!options.hasOwnProperty('path')) {
            options['path'] = '/';
        }

        if (options.hasOwnProperty('expires')) {
            options.expires = new Date(Date.now() + options.expires).toUTCString();
        }

        var optionValue,updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (var optionKey in options) {
            updatedCookie += "; " + optionKey;

            optionValue = options[optionKey];

            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }
};

_fpFactor.get(function(result) {
    var guid = result;
    var xhr = new XMLHttpRequest();
    var userid = window['__o'] && window['__o']['user_id'] ? window['__o']['user_id'] : _fpFactor.getCookie('_facsuid')||0;
    var body = '_faguid=' +  guid + '&_facsuid=' + userid + '&_ref=' + encodeURIComponent(window.location.href);
    xhr.open('POST', 'https://analytics.factor.ua/analytics/add', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);

    (function(fp_now) {
        var pub = {
            key: '__factor_utm',
            fp_key: '_faguid',
            utm_data: {
                utm_medium: 'none',
                utm_source: 'direct',
                utm_campaign: null,
                utm_content: null,
                utm_term: null,
            },
            init: function() {
                pub.setFPCookies();

                if (window.location.hostname == 'accounts.factor.ua') {
                    return;
                }

                if (!window.location.search.match(new RegExp('(\\?|&|&amp;)utm_'))
                    && _fpFactor.getCookie(pub.key)
                    && !pub.checkOrganic()
                    && !pub.checkAd()) {
                    return;
                }

                pub.checkOrganic();
                pub.checkAd();
                pub.checkQuery();

                pub.setExtendParams();

                pub.setUTMCookies();
            },
            setFPCookies: function() {
                var fp_old = _fpFactor.getCookie(pub.fp_key);

                if (fp_old != fp_now) {
                    var options = {
                        expires: 60 * 60 * 24 * 365 * 100 * 1000,
                        domain: _fpFactor.getDomainBase()
                    };

                    _fpFactor.setCookie(pub.fp_key, fp_now, options);
                }
            },
            setUTMCookies: function() {
                var utm_now = pub.getUTMString(),
                    utm_old = _fpFactor.getCookie(pub.key);

                if (utm_now != utm_old) {
                    var options = {
                        expires: 60 * 60 * 24 * 3 * 1000
                    };

                    if (window.location.hostname.indexOf('factor.ua') >= 0) {
                        options['domain'] = 'factor.ua';
                    }

                    _fpFactor.setCookie(pub.key, utm_now, options);
                }
            },
            setExtendParams: function() {
                pub.utm_data['url_path'] = window.location.href;
                pub.utm_data['refer'] = document.referrer.replace(new RegExp('^[^\\:]+\\:\\/\\/([^\\/]+)\\/*.*'), '$1');
                pub.utm_data['site'] = window.location.href.replace(new RegExp('^[^\\:]+\\:\\/\\/([^\\/]+)\\/*.*'), '$1');
            },
            getUTMString: function() {
                return JSON.stringify(pub.utm_data);
            },
            checkQuery: function() {
                var params = pub.getQueryParams();

                if (params) {
                    for (var i in params) {
                        if (!pub.utm_data.hasOwnProperty(i)) {
                            continue;
                        }

                        pub.utm_data[i] = params[i];
                    }
                }
            },
            checkAd: function() {
                var params = pub.getQueryParams();

                if (params) {
                    var list = {
                        'gclid':'google',
                        'yclid':'yandex',
                        'fbclid':'facebook'
                    };

                    for (var i in params) {
                        if (list.hasOwnProperty(i)) {
                            pub.utm_data.utm_source = list[i];
                            pub.utm_data.utm_medium = 'cpc';

                            return true;
                        }
                    }
                }

                return false;
            },
            checkOrganic: function() {
                if (!document.referrer) {
                    return false;
                }

                var domain = document.referrer.replace(new RegExp('^[^\\:]+\\:\\/\\/([^\\/]+)\\/*.*'), '$1');

                var domain_partial = domain.split('.');

                if (domain_partial.length < 2) {
                    return false;
                }

                var brand = domain_partial[domain_partial.length - 2];
                var list = {
                    'google' : 'google',
                    'yandex.ru' : 'yandex',
                    'yandex.ua' : 'yandex',
                    'mail.ru' : 'mail',
                    'rambler.ru' : 'rambler',
                    'meta.ua' : 'meta',
                    'duckduckgo.com' : 'duckduckgo',
                    'bing.com' : 'bing',
                    'yahoo.com' : 'yahoo',
                    'qip.ru' : 'search.qip.ru',
                    'search.i.ua' : 'search.i.ua',
                };

                for (var i in list) {
                    if (i.match(new RegExp('\\.'))) {
                        if (domain.indexOf(i) >= 0 && domain.indexOf(i) == domain.length - i.length) {
                            pub.utm_data.utm_source = list[i];
                            pub.utm_data.utm_medium = 'organic';

                            return true;
                        }
                    } else {
                        if (brand == i) {
                            pub.utm_data.utm_source = list[i];
                            pub.utm_data.utm_medium = 'organic';

                            return true;
                        }
                    }
                }

                return false;
            },
            getQueryParams: function() {
                var part = window.location.search.replace(new RegExp('&amp;'), '&', 'g').split('?');

                if (!part[1]) {
                    return null;
                }

                var chunks = part[1].split('&'), params = {}, param = [];

                for (var i = 0; i < chunks.length;i++) {
                    param = chunks[i].split('=');

                    params[param[0]] = param.length == 2 ? param[1] : '';
                }

                return params;
            },

        };

        pub.init();
    })(result);
});