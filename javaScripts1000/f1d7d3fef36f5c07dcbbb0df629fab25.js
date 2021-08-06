<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="utf-8">
    <title>ZEIT ONLINE | Lesen Sie zeit.de mit Werbung oder im PUR-Abo. Sie haben die Wahl.</title>
    <meta name="description" content="">
    <meta name="robots" content="noindex,follow">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" id="viewport-meta">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="msapplication-config" content="none">    <link rel="dns-prefetch" href="//static.zeit.de">
    <link rel="preconnect" href="//static.zeit.de">
    
    <link rel="icon" type="image/svg+xml" href="https://static.zeit.de/p/zeit.web/icons/favicon.svg">
    <link rel="shortcut icon" sizes="16x16" href="https://static.zeit.de/p/zeit.web/icons/favicon.ico">
    <link rel="apple-touch-icon-precomposed" href="https://img.zeit.de/static/img/ZO-ipad-114x114.png">

    <meta name="format-detection" content="telephone=no">
    <link rel="preload" href="https://static.zeit.de/p/zeit.web/fonts/tabletgothic/TabletGothic-Regular.woff2?v1" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="https://static.zeit.de/p/zeit.web/fonts/tabletgothic/TabletGothic-Bold.woff2?v1" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="https://static.zeit.de/p/zeit.web/css/web.core/normalize.863d27cadfbeffd10a22eb6ccab9b9cb.css">
        <link rel="stylesheet" href="https://static.zeit.de/p/zeit.web/css/web.consent/base.3c5b21be7192d976a5321376b0ef4281.css">    <script>
	    document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
	</script>
        <script>
    document.createElement( 'picture' );
    window.Zeit = {
        callMeLater: [],
        readyWhenYouAre: function( callback ) {
            return function() {
                Zeit.callMeLater.push([ callback, arguments ]);
            };
        },
        assetHost: 'https://static.zeit.de/p/zeit.web',
        publicPath: 'https://static.zeit.de/p/zeit.web/js/',
        jsconfHost: 'https://static.zeit.de/static/js',
        cookieFallbackDomain: 'zeit.de',
        profileURL: 'https://profile.zeit.de',
        videoPlayers: {
            'cp': {
                'withAds': '65fa926a-0fe0-4031-8cbf-9db35cecf64a',
                'withoutAds': 'r1xb937iwZ'
            },
            'article': {
                'withAds': 'c09a3b98-8829-47a5-b93b-c3cca8a4b5e9',
                'withoutAds': 'NykzeyfYg'
            }
        },
        actualHost: 'https://www.zeit.de',
        isAdBlocker: undefined,
        view: {
            'advertising_enabled': false,
            'banner_channel': "",
            'is_pure_page': false,
            'ressort': "",
            'sub_ressort': "",
            'type': "repository",
            get: function( key ) {
                if ( !this.hasOwnProperty( key ) ) {
                    return ''
                }
                return this[key];
            }
        },
        device: {
            hasFastConnection: (function() {
                if ( 'connection' in navigator ) {
                    if ( navigator.connection.type == 'cellular' ) {
                        return false;
                    }

                    if ( parseInt( navigator.connection.effectiveType, 10 ) >= 4 ) {
                        return true;
                    }
                }

                return false;
            })()
        },
        settings: {
            'addefend_cookie_expire': 30,
            'addefend_height': "min",
            'bookmark_coachmark_viewlimit': 3,
            'bookmark_list_api_url': "https://www.zeit.de/cre-1.0/api",
            'cmp_own_vendors': "",
            'consent_cookie_name': "zonconsent",
            'consent_cookie_expire_days': 90,
            'consent_remove_users_before': "",
            'hp_overlay_active': false,
            'hp_overlay_interval': 79,
            'newsletter_signup_url': "https://newsletter.zeit.de/",
            'optimize_wt_interval_script': 20,
            'optimize_wt_timeout_script': 500,
            'overscrolling_active': true,
            'registration_newsletter_id': "was-jetzt",
            'sourcepoint_account_id': 692,
            'sourcepoint_cookie_expire_accepted': "",
            'sourcepoint_cookie_name': "euconsent-v2",
            'sourcepoint_max_timeout': 5000,
            'sourcepoint_nocookies_message': "Um zeit.de nutzen zu k\u00f6nnen, m\u00fcssen Cookies in Ihrem Browser aktiviert sein.",
            'sourcepoint_privacy_manager_id': "222776",
            'sourcepoint_vendor_manager_id': "364876",
            'sso_cookie': "zeit_sso_201501",
            'sso_session_cookie': "zeit_sso_session_201501",
            'update_signals_comments_interval': 20,
            'sso_url': "https://meine.zeit.de",
            get: function( key, preset ) {
                return (key in this) ? this[key] : preset;
            }
        },
        toggles: {
            'abtesting': false,
            'abtesting_commentcountupdate': false,
            'abtesting_progressbar': false,
            'abtesting_schlagzeilencps': false,
            'block_embeds': true,
            'bookmark_list': true,
            'bookmark_list_coachmark': false,
            'bookmark_list_use_zappi': true,
            'brightcove_chapter_marks': true,
            'c1_adblocker_blocker': true,
            'c1_adblocker_blocker_visible': false,
            'check_device_for_features': true,
            'https': true,
            'paywall_footer': true,
            'recipe_autocomplete': true,
            'spark_clicktracking': true,
            'sticky_mobile_navigation': true,
            'sticky_navigation': true,
            'update_signals': true,
            get: function( key ) {
                return this[key] || false;
            }
        },
        isWrapped: false,
        isMobileApp: false,
        wrapped: (function() {
            var matches = /\bZONApp(\S+)/.exec(navigator.userAgent),
                v = {},
                c = 'ios',
                ivw = 'appzeion';

            if ( matches ) {
                var parts = matches[0].split('/');
                var versions = parts.pop().split('.');
                var platform = parts.pop();
                v = {
                    major: versions.shift(),
                    minor: versions.shift(),
                    patch: versions.shift()
                }

                if ( platform === 'Huawei' ) {
                    c = 'android_huawei';
                    ivw = 'aadzeion_huawei';
                } else if ( platform === 'Android' ) {
                    c = 'android';
                    ivw = 'aadzeion';
                }
            }

            return {
                version: v,
                client: c,
                ivwclient: ivw
            };
        })(),
        tabletMinWidth: 768,
        tabletSmallMinWidth: 1000,
        sideAdMinWidth: 998,
        noliquidMaxWidth: 1024,
        maxWidth: 1280,
        getClientWidth: function() {
            return Math.max( document.documentElement.clientWidth || 0, window.innerWidth || 0 );
        },
        isMobileView: function() {
            if ('matchMedia' in window) {
                var mq = '(min-width: ' + this.tabletMinWidth + 'px)';
                return !window.matchMedia(mq).matches;
            }

            return this.getClientWidth() < this.tabletMinWidth;
        },
        showMobileAds: function() {
            return this.isMobileApp || this.isMobileView()
        },
        getSiteParam: function() {
            if ( this.isMobileApp ) {
                return 'mobile.app.' + this.wrapped.client;
            } else if ( this.isMobileView() ) {
                return 'mobile.site';
            }
            return 'desktop.site';
        },
        getCeleraOneOrigin: function() {
            if ( this.isMobileApp ) {
                return 'app';
            } else if ( this.isMobileView() ) {
                return 'mobile';
            }
            return 'web';
        },
        dispatchEvent: function ( name, element, data ) {
            element = typeof element !== 'undefined' && element !== null ? element : document.querySelector('body');
            data = data || null;
            if ( typeof window.CustomEvent === 'function' ) {
                var event = new CustomEvent( name, { bubbles: true, cancelable: true, detail: data } );
            } else {
                var event = document.createEvent( 'CustomEvent' );
                event.initCustomEvent( name, true, true, data );
            }
            element.dispatchEvent( event );
        },
        loadJS: function( src, callback, ordered ) {
            // inspired by loadJS from Filament Group
            var target = document.querySelector( 'script' ),
                script = document.createElement( 'script' );

            script.src = src;
            script.async = !ordered;

            if ( typeof callback === 'function' ) {
                if ( script.readyState ) {
                    // Old IE
                    script.onreadystatechange = function() {
                        if ( script.readyState === 'loaded' || script.readyState === 'complete' ) {
                            script.onreadystatechange = null;
                            callback();
                        }
                    };
                } else {
                    // Others
                    script.onload = callback;
                }
            }

            target.parentNode.insertBefore( script, target );
        },
        viewport: {
            meta: document.getElementById('viewport-meta'),
            standard: document.getElementById('viewport-meta').getAttribute('content'),
            banner: 'width=1280',
            portrait: 'width=1000',
            set: function( key ) {
                this.meta.setAttribute( 'content', this[ key ] );
            }
        },
        breakpoint: {
            get: function () {
                try {
                    return window.getComputedStyle( document.querySelector('body'), ':before' ).getPropertyValue( 'content' ).replace( /\W/g, '' ) || 'desktop'; // replace " and ' at last
                } catch( e ) {
                    return 'desktop';
                }
            },
            getTrackingBreakpoint: function() {
                var point = this.get();
                return point === 'desktop' ? 'stationaer' : point;
            }
        },
        queue: [],
        require: function() {
            this.queue.push( arguments );
        },
        setFontSize: function(size, updateStorage) {
            updateStorage = (typeof updateStorage !== 'undefined') ?  updateStorage : true;
            size = parseInt(size, 10);
            if (size >= 30 && size <= 300 && window.localStorage) {
                document.querySelector('html').style.fontSize = size + '%';
                if (updateStorage) window.localStorage.setItem( 'fontsize', size );
                return size;
            }
        },
        getFontSize: function() {
            try {
                if (window.localStorage) {
                    var size = window.localStorage.getItem( 'fontsize' );
                    size = parseInt(size, 10);
                    if (size >= 30 && size <= 300) {
                        return size;
                    }
                }
            } catch ( Exception ) {
                return false;
            }
        },
        cookieCreate: function( name, value, days, domain, secure, samesite ) {
            var expires = '',
                cookietext = '';

            domain = domain ? domain : this.cookieFallbackDomain;

            if ( days ) {
                var date = new Date();
                date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
                expires = '; expires=' + date.toUTCString();
            }

            cookietext = name + '=' + value + expires + '; path=/; domain=' + domain;

            if (typeof samesite === 'string') {
                cookietext += ';samesite=' + samesite;
            }

            if ( secure ) {
                cookietext += ';secure';
            }

            document.cookie = cookietext;
        },
        cookieRead: function( name ) {
            return ( document.cookie.match( '(?:^|;) ?' + name + '\\s*=\\s*([^;]*)' ) || 0 )[ 1 ];
        },
        localStorageIsSupported: function()
            {try{return localStorage.setItem("zontest","zontest"),localStorage.removeItem("test"),!0}catch(t){return!1}
        },
        user: {}
    };

    
    var storedFontSize = window.Zeit.getFontSize();
    if ( storedFontSize ) {
        window.Zeit.setFontSize( storedFontSize, false );
    }

            (function(){
        if(window.Zeit.localStorageIsSupported() === true){
            var last = localStorage.getItem("_wt_optimize_last_touch"),
                now = Date.now();
            if(last !== null && (now - last < 18e5)){
                localStorage.setItem("_wt_optimize_last_touch", now);
            } else {
                localStorage.removeItem("_wt_optimize_last_touch");
            }
        }
    })();
    </script>    
<script>
    if ( !window.Zeit.user.adFree ) {
        !function () { var e = function () { var e, t = "__tcfapiLocator", a = [], n = window; for (; n;) { try { if (n.frames[t]) { e = n; break } } catch (e) { } if (n === window.top) break; n = n.parent } e || (!function e() { var a = n.document, r = !!n.frames[t]; if (!r) if (a.body) { var i = a.createElement("iframe"); i.style.cssText = "display:none", i.name = t, a.body.appendChild(i) } else setTimeout(e, 5); return !r }(), n.__tcfapi = function () { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; if (!n.length) return a; if ("setGdprApplies" === n[0]) n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (e = n[3], "function" == typeof n[2] && n[2]("set", !0)); else if ("ping" === n[0]) { var i = { gdprApplies: e, cmpLoaded: !1, cmpStatus: "stub" }; "function" == typeof n[2] && n[2](i) } else a.push(n) }, n.addEventListener("message", (function (e) { var t = "string" == typeof e.data, a = {}; try { a = t ? JSON.parse(e.data) : e.data } catch (e) { } var n = a.__tcfapiCall; n && window.__tcfapi(n.command, n.version, (function (a, r) { var i = { __tcfapiReturn: { returnValue: a, success: r, callId: n.callId } }; t && (i = JSON.stringify(i)), e.source.postMessage(i, "*") }), n.parameter) }), !1)) }; "undefined" != typeof module ? module.exports = e : e() }();
    }
</script>
    <script id="sourcepoint_scaffolding">
            var targetingParams = {
            debug: window.location.href.indexOf('cmp-debug') > -1,
            theme: 'zeit',
            consentLanguage: 'en'
        };
        if ( typeof window.Zeit === 'object' && typeof window.Zeit.user === 'object') {
            if ( window.Zeit.user.ssoid ) {
                targetingParams.login_status = 'true';
            }
            if ( window.Zeit.user['C1-Meter-Access-Group'] === 'abo' ) {
                targetingParams.abo_status = 'true';
            }
        }

        window._sp_ = {
            config: {
                targetingParams: targetingParams,
                consentLanguage: 'en',
                accountId: 692,
                baseEndpoint: "https://consent-cdn.zeit.de",
                events: {
                    onMessageChoiceSelect: function (choice_id, choice_type_id) {
                                                if ( window.Zeit && window.Zeit.log ) {
                            window.Zeit.log('onMessageChoiceSelect', choice_id, choice_type_id);
                        }
                                            },
                    onPrivacyManagerAction: function (pmData) {
                            if ( window.Zeit && window.Zeit.log ) {
        window.Zeit.log('onPrivacyManagerAction', pmData);
    }
    if (
        (pmData && pmData.purposeConsent !== 'all') ||
        (pmData && pmData.vendorConsent !== 'all')
    ) {
        // reload needed, to reinitialize sourcepoint
        window.location.reload();
    }
                    },
                    onConsentReady: function (consentUUID, euconsent) {
                            if (
        window.Zeit &&
        window.Zeit.consentUtils &&
        window.Zeit.consentUtils.recordConsent
    ) {
        window.Zeit.consentUtils.recordConsent(consentUUID, euconsent);
    }
                    }
                }
            }
        };
    </script>
    <script src="https://consent-cdn.zeit.de/wrapperMessagingWithoutDetection.js"></script>
        <script src="https://script.ioam.de/iam.js?m=1"></script>
                    <script class="linkpulse_meta">var LPMeta = {
                        "paywalluser": window.Zeit.user && window.Zeit.user['C1-Meter-Access-Group'] === 'abo' ? '1' : '0',
                                "title": "ZEIT ONLINE | Lesen Sie zeit.de mit Werbung oder im PUR-Abo. Sie haben die Wahl.",
        "url": "https://www.zeit.de/zustimmung"
    }</script>
    <script src="//pp.lp4.io/app/5d/7b/7a/5d7b7a6ce45a1d235c279be2.js" async="async"></script>
    <style>
        :root {
            --mobile_image: url(https://static.zeit.de/p/zeit.web/images/consent/mobile_background.jpg);
            --phablet_image: url(https://static.zeit.de/p/zeit.web/images/consent/phablet_background.jpg);
            --tablet_image: url(https://static.zeit.de/p/zeit.web/images/consent/tablet_background.jpg);
            --desktop_image: url(https://static.zeit.de/p/zeit.web/images/consent/desktop_background.jpg);
            --headline_background: #fff;
            --headline_color: #000;
            --logo_color: #1D1D1B;
            --logo_factor: 9.35;
            --legals_color: #fff;
        }
    </style>
</head>
<body id="consent-decision" class="theme-zeit">
    <!-- ivw ver2 tracking -->
<!-- SZM VERSION="2" -->
<script>
    var iam_data = {
            "st" : "zeitonl",
            "cp" : "consent/bild-text",
            "sv" : "ke", // 'mo' on mobile, see below
            "sc" : "yes",
            "co" : "URL: /zustimmung"};

    if ( window.Zeit.isMobileView() || window.Zeit.isMobileApp ) {
        iam_data.st = "mobzeit";
        iam_data.sv = "mo";
    }

    if ( typeof iom !== "undefined" && typeof iam_data !== "undefined" ) {
                    iom.h( iam_data, 1 );
            }
</script>
    <a class="skiplink" href="#main" id="top" title="Jump to content">
            Jump to content</a>
        <div class="symbols">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol viewBox="0 0 1481.35 775.9" id="svg-logo-boa" xmlns="http://www.w3.org/2000/svg"><switch><g><path class="aboa-svg-green" d="M27.076 216.24l1386.4-121.22 40.84 467.078-1386.4 121.22z"/><path d="M1069.78 13.08l-80.1 747.57h97.18l12.81-127.09h89.71l12.82 127.09h110l-85.44-747.57h-156.98zm40.59 516.89l34.17-373.78 38.45 373.78h-72.62z"/><defs><path id="aa" d="M-7.88 767.19l.56-775.9h1516l-1.8 773.72"/></defs><path class="ast2" d="M812.71 13.08h-95.05c-57.67 0-106.8 48.06-106.8 106.8v533.98c0 58.74 49.13 106.8 106.8 106.8h95.05c57.67 0 106.8-48.06 106.8-106.8V119.87c0-58.73-49.13-106.79-106.8-106.79m-4.27 617.28c0 12.82-12.82 24.56-25.63 24.56h-35.24c-12.82 0-25.63-11.75-25.63-24.56V144.44c0-13.88 12.82-25.63 25.63-25.63h35.24c12.82 0 25.63 11.75 25.63 25.63v485.92zM428.55 13.08H226.71v747.57h201.84c57.67 0 106.8-48.06 106.8-106.8V488.32c0-42.72-12.82-96.11-84.37-110 75.83-13.88 84.37-85.44 84.37-111.07V119.87c0-58.73-49.13-106.79-106.8-106.79m-4.27 617.28c0 12.82-12.82 24.56-25.63 24.56h-60.87v-223.2h60.87c12.82 0 25.63 12.82 25.63 25.63v173.01zm0-328.93c0 12.82-12.82 24.56-25.63 24.56h-60.87V118.8h60.87c12.82 0 25.63 11.75 25.63 25.63v157z"/></g></switch></symbol><symbol viewBox="0 0 131 78" id="svg-logo-sit" xmlns="http://www.w3.org/2000/svg"><title>SIT-Logo-1-web</title><g><path d="M3.45 65.88H1.98c-.89 0-1.65.74-1.65 1.65v1.82c0 .92.33 1.42.92 2.03l1.37 1.34c.58.63.76.84.76 1.78v.92c0 .2-.2.38-.4.38h-.54c-.2 0-.4-.18-.4-.38v-1.95l-1.72.26v2.04c0 .91.76 1.65 1.65 1.65h1.47c.89 0 1.65-.74 1.65-1.65V73.7c0-.97-.41-1.58-1.14-2.31L2.63 70.1c-.31-.31-.59-.66-.59-1.4v-.79c0-.21.2-.4.4-.4h.54c.2 0 .4.18.4.4v1.49c.61-.08 1.07-.12 1.71-.23v-1.63c.01-.92-.75-1.66-1.64-1.66m3.03 1.64h1.51v9.91H9.7v-9.91h1.5v-1.64H6.48zm9.16 7.9c0 .2-.2.38-.4.38h-.54c-.2 0-.4-.18-.4-.38v-9.53h-1.72v9.9c0 .91.76 1.65 1.65 1.65h1.42c.89 0 1.65-.74 1.65-1.65v-9.9h-1.67v9.53h.01zm6.27-9.54h-3.12v11.55h3.12c.89 0 1.65-.74 1.65-1.65v-8.25c0-.91-.76-1.65-1.65-1.65zm-.07 9.54c0 .2-.2.38-.4.38h-.94v-8.28h.94c.2 0 .4.18.4.4v7.5zm3.19-9.54h1.72v11.55h-1.72zm6.23 9.54c0 .2-.2.38-.4.38h-.54c-.2 0-.4-.18-.4-.38v-9.53H28.2v9.9c0 .91.76 1.65 1.65 1.65h1.42c.89 0 1.65-.74 1.65-1.65v-9.9h-1.67v9.53h.01zm6.38-2.48l-1.34-7.06h-1.89v11.55h1.65v-6.07l1.1 6.07h.86l1.1-5.94v5.94h1.72V65.88h-1.81zm4.67-1.45h3.15v1.53h-3.15zm4.61-5.61h1.72v11.55h-1.72zm6.44 6.82l-1.5-6.82h-1.77v11.55h1.57V70.7l1.49 6.73h1.78V65.88h-1.57zm2.95-5.18h1.51v9.91h1.71v-9.91h1.5v-1.64h-4.72zm6.11 9.91h4.31V75.8h-2.59v-3.5h1.61v-1.63h-1.61v-3.15h2.59v-1.64h-4.31zm10.49-4.03c0-.66-.2-1.48-1.3-1.7 1.17-.21 1.3-1.32 1.3-1.72v-2.46c0-.91-.76-1.65-1.65-1.65h-3.12v11.55h1.72v-4.9h.63c.41 0 .71.25.71.69v2.29c0 .48 0 .94.05 1.32l.05.59h1.76c-.12-.45-.15-1.15-.15-1.55V73.4zm-1.72-2.9c0 .2-.2.4-.4.4h-.94v-3.38h.94c.2 0 .4.18.4.4v2.58zm3.34 6.93h4.3V75.8h-2.59v-3.5h1.62v-1.63h-1.62v-3.15h2.59v-1.64h-4.3zm8.84-11.55H81.9c-.89 0-1.65.74-1.65 1.65v1.82c0 .92.33 1.42.92 2.03l1.37 1.34c.58.63.76.84.76 1.78v.92c0 .2-.2.38-.4.38h-.54c-.2 0-.4-.18-.4-.38v-1.95l-1.72.26v2.04c0 .91.76 1.65 1.65 1.65h1.47c.89 0 1.65-.74 1.65-1.65V73.7c0-.97-.41-1.58-1.14-2.31l-1.32-1.29c-.31-.31-.59-.66-.59-1.4v-.79c0-.21.2-.4.4-.4h.54c.2 0 .4.18.4.4v1.49c.61-.08 1.07-.12 1.71-.23v-1.63c.01-.92-.75-1.66-1.64-1.66m6.23 0h-1.47c-.89 0-1.65.74-1.65 1.65v1.82c0 .92.33 1.42.92 2.03l1.37 1.34c.58.63.76.84.76 1.78v.92c0 .2-.2.38-.4.38h-.53c-.2 0-.39-.18-.39-.38v-1.95l-1.72.26v2.04c0 .91.76 1.65 1.65 1.65h1.47c.89 0 1.65-.74 1.65-1.65V73.7c0-.97-.41-1.58-1.14-2.31L88.8 70.1c-.31-.31-.59-.66-.59-1.4v-.79c0-.21.2-.4.39-.4h.54c.2 0 .4.18.4.4v1.49c.61-.08 1.07-.12 1.71-.23v-1.63c0-.92-.76-1.66-1.65-1.66m3.12 11.55h4.31V75.8h-2.59v-3.5h1.61v-1.63h-1.61v-3.15h2.59v-1.64h-4.31zm8.99-4.73l-1.5-6.82h-1.77v11.55h1.57V70.7l1.49 6.73h1.78V65.88h-1.57zm2.96-5.18h1.5v9.91h1.71v-9.91h1.5v-1.64h-4.71zm6.1 9.91h4.3V75.8h-2.59v-3.5h1.62v-1.63h-1.62v-3.15h2.59v-1.64h-4.3zm8.84-11.55h-1.47c-.89 0-1.65.74-1.65 1.65v1.82c0 .92.33 1.42.92 2.03l1.37 1.34c.58.63.76.84.76 1.78v.92c0 .2-.2.38-.4.38h-.54c-.2 0-.4-.18-.4-.38v-1.95l-1.72.26v2.04c0 .91.76 1.65 1.65 1.65h1.47c.89 0 1.65-.74 1.65-1.65V73.7c0-.97-.41-1.58-1.14-2.31l-1.32-1.29c-.31-.31-.59-.66-.59-1.4v-.79c0-.21.2-.4.4-.4h.54c.2 0 .4.18.4.4v1.49c.61-.08 1.07-.12 1.71-.23v-1.63c.01-.92-.75-1.66-1.64-1.66m3.04 0v1.64h1.5v9.91h1.71v-9.91h1.51v-1.64z"/><path class="bsit-svg-green" d="M130.23 4.69L76.57 0l-4.2 48.01 16.66 1.45 9.18 12.19 11.16-10.41 16.66 1.46z"/><path d="M92.53 12.78l.24-2.83-5.64-.49-.25 2.82-2.82-.24-.25 2.82 2.82.25-.24 2.82 5.64.5.25-2.83 28.24 2.47.25-2.82zm24.67 10.69l-5.65-.49-.24 2.82-28.24-2.47-.25 2.83 28.24 2.47-.25 2.82 5.65.49.25-2.82 2.82.25.25-2.83-2.83-.24zm-17.93 9.82l-5.65-.5-.25 2.83-11.29-.99-.25 2.82 11.3.99-.25 2.82 5.65.5.25-2.83 19.76 1.73.25-2.82-19.77-1.73zM16.06.94H8.5C3.91.94 0 4.77 0 9.44v9.35c0 4.76 1.7 7.31 4.76 10.45l7.05 6.88c2.98 3.23 3.91 4.33 3.91 9.18v4.76c0 1.02-1.02 1.95-2.04 1.95h-2.8c-1.02 0-2.04-.93-2.04-1.95V40.03L0 41.39v10.54c0 4.67 3.91 8.5 8.5 8.5h7.56c4.59 0 8.5-3.82 8.5-8.5V41.22c0-5.01-2.12-8.16-5.86-11.89l-6.8-6.63c-1.61-1.61-3.06-3.4-3.06-7.22V11.4c0-1.11 1.02-2.04 2.04-2.04h2.8c1.02 0 2.04.93 2.04 2.04v7.65c3.14-.42 5.52-.59 8.84-1.19V9.44c0-4.67-3.91-8.5-8.5-8.5m14.87 0h8.84v59.48h-8.84zm38.66 0h-24.3v8.42h7.73v51.06h8.84V9.36h7.73z"/></g></symbol><symbol viewBox="0 0 1577 551" id="svg-logo-suma" xmlns="http://www.w3.org/2000/svg"><title>suma-logo</title><defs><path id="ca" d="M.081.002h213.812v533.81H.08z"/><path id="cc" d="M.374.482h442.474v550.433H.374z"/></defs><g fill-rule="evenodd"><g transform="translate(0 17)"><mask id="cb"><use xlink:href="#ca"/></mask><path d="M41.445 253.95C14.803 225.723 0 202.859 0 160.144V76.27C0 34.325 34.044.002 74.01.002h65.873c39.965 0 74.01 34.323 74.01 76.268v75.498c-28.867 5.326-49.587 6.85-76.973 10.67V93.81c0-9.917-8.881-18.31-17.761-18.31H94.735c-8.881 0-17.762 8.393-17.762 18.31v36.6c0 34.307 12.58 50.321 26.642 64.81l59.208 59.485c32.569 33.551 51.07 61.777 51.07 106.754v96.084c0 41.946-34.045 76.27-74.01 76.27H74.01c-39.966 0-74.01-34.324-74.01-76.27V363l76.973-12.211v89.987c0 9.146 8.881 17.538 17.762 17.538h24.424c8.88 0 17.76-8.392 17.76-17.538v-42.698c0-43.47-8.14-53.388-34.044-82.365l-61.43-61.762" mask="url(#cb)"/></g><path d="M353.182 457.756c0 9.167 9.021 17.577 18.042 17.577h24.807c9.02 0 18.04-8.41 18.04-17.577V16H490v458.56c0 42.04-34.583 76.44-75.177 76.44h-64.65C309.58 551 275 516.6 275 474.56V16h78.182v441.756M635.809 16l60.435 327.107L758.925 16H841v535h-77.6V275.852L713.41 551h-38.8l-49.996-281.258V551H550V16h85.809M983.45 385.918h48.407l-25.63-267.508-22.777 267.508zm52.677 74.12h-59.8L967.789 551H903l53.397-535h104.649L1118 551h-73.327l-8.546-90.961z"/><g transform="translate(1134)"><mask id="cd"><use xlink:href="#cc"/></mask><path d="M216.314 109.898c-8.613 0-15.599 7.143-15.599 15.96 0 8.818 6.986 15.96 15.6 15.96 32.665 0 59.245 27.193 59.245 60.619 0 8.817 6.99 15.96 15.602 15.96 8.61 0 15.588-7.143 15.588-15.96 0-51.025-40.562-92.539-90.436-92.539" class="csuma-svg-green" mask="url(#cd)"/><path d="M202.95 343.427c-73.12 0-132.606-60.863-132.606-135.676 0-74.811 59.487-135.675 132.605-135.675 73.123 0 132.596 60.864 132.596 135.675 0 74.813-59.473 135.676-132.596 135.676zm133.868 19.828c42.113-37.982 68.707-93.55 68.707-155.504 0-114.472-90.69-207.27-202.576-207.27C91.07.482.374 93.28.374 207.752c0 114.474 90.694 207.27 202.575 207.27 24.37 0 47.734-4.408 69.371-12.48l84.447 148.054 86.08.404-106.029-187.744z" class="csuma-svg-green" mask="url(#cd)"/></g></g></symbol><symbol viewBox="0 0 185 33" id="svg-logo-zco" xmlns="http://www.w3.org/2000/svg"><title>ZEIT Campus</title><g><path d="M42.5 21.5h.4V2.3h-.4v19.2zM38.7 1.1h8c.1 0 .3.3.1.5-.5.3-1.1.2-1.5.7-.3.4-.4 1-.4 1.4v16.5c0 .5.1 1.1.6 1.4.3.2 1.7.4 1.4.9-.1.2-1.6.1-1.9.1h-5.4c-.3 0-1 .2-.8-.4.1-.3.5-.2.8-.3.4-.2.8-.4 1-.8.4-.7.2-1.6.2-2.3v-2.4-8.3-4c0-.7 0-1.5-.6-2-.4-.1-2.1-.4-1.5-1zM22.9 2.3v19.2h.4V2.3h-.4zm10.8-1.2c.8 0 1.4 2.8 1.7 3.5.1.3 1.5 2.4.7 2.4-.5-.2-1-1.1-1.4-1.5C33.9 4.7 33 4 32 3.4c-2.1-1.1-4.5-1.2-6.8-1.1v8.8h3.3c.7 0 1.4-.1 2.1-.4.6-.2 1.1-.6 1.6-1 .2-.2 1-1.3 1.3-1.1.3.3-.8 2.2-1 2.6-.4.8 0 1.2.3 2 .1.3 1.2 2.1.3 1.8-.3-.1-.6-.7-.8-.9-.3-.4-.7-.7-1.2-.9-1.8-1-4.1-.7-6.1-.7v9.1c1.7 0 3.3.1 5-.2 2.8-.5 4.7-2.2 6.5-4.4.6.1 0 1-.1 1.4-.4.9-.7 1.7-1.1 2.6-.2.5-.4 1.5-.8 1.9-.2.2-1.3 0-1.7 0-.7 0-1.3-.1-1.9-.1h-7c-.4 0-4.8.2-4.9-.1-.2-.5 1-.6 1.3-.8.6-.4.6-1 .7-1.6v-3-6.9-5.2-1.6c-.1-.5-.2-1-.6-1.3-.2-.2-1.3-.3-1.4-.6-.2-.6.7-.5 1.1-.5H26c2.5-.1 5.2.2 7.7-.1zM14 2.3L3 21.5c.8.1 1-1 1.4-1.6.9-1.5 1.8-3 2.6-4.6 2-3.5 4.1-7 6.1-10.5.5-.8 1-1.7 1.5-2.5H14zM3.2 1.1c4.7.2 9.4.1 14.1.1 0 0-11.7 20.3-11.7 20.4 1.5 0 3.1.1 4.7-.1 1.4-.1 2.9-.7 4-1.5.8-.5 1.4-1.1 2-1.8.2-.2 1-1.6 1.3-1.2.2.2-.3 1-.4 1.2-.3.8-.7 1.6-1 2.5-.2.6-.5 1.5-.9 2s-1.2.2-1.9.2H.2C.3 22.7 12 2.3 12 2.3c-2.1 0-4.4 0-6.4.7-1 .4-1.9 1-2.6 1.7-.4.4-1.6 2.4-2 2.2-.3-.1 1.9-5.3 2.2-5.8zM56.3 2.3v19.2h.4V2.3h-.4zm-6.5-1.2c4 .1 8 .2 12 .1.3 0 1.1-.2 1.4-.1.3.1.5 1.2.6 1.4.4.9.7 1.7 1.1 2.5l.6 1.2s.3 1-.2.6c-1.1-1-1.9-2.2-3.1-3.2-1.1-.8-2.3-1.3-3.7-1.3v11.8c0 1.9-.1 3.9 0 5.8 0 .7 0 1.4.6 1.8.4.3 1.6.3 1.4.9-.3.2-1.3 0-1.7 0h-2.5c-.2 0-3.9.2-3.9-.1-.3-.6.9-.6 1.2-.8.6-.3.7-1 .7-1.6v-1.4-3.3V5 2.3c-1.5 0-2.8.6-3.9 1.5-.4.5-1 1-1.4 1.5-.2.3-1.1 1.7-1.5 1.5-.4-.2.8-2.1.9-2.4.5-1.1.9-2.2 1.4-3.3zM88.8 3.3c1.1-1.4-2.1-2.4-3-2.6C84 .2 82.2.1 80.4.4c-2.9.5-5.5 2.2-7.2 4.6-3.4 4.8-2.7 12.3 2 16.1 2.3 1.9 5.4 2.6 8.3 2.4 1.9-.1 3.9-.5 5.7-1.3.7-.3 1.6-.7 2.1-1.3.4-.4.6-1.1-.2-1.1-.4 0-.9.4-1.3.5-.4.2-.9.3-1.3.5-.9.3-1.8.4-2.8.5-1.8.1-3.7-.1-5.3-1-3.3-1.8-4.6-5.6-4.5-9.2.1-3.7 1.8-8.3 6.1-8.5 1-.1 1.9.2 2.8.7.7.4 1.3 1.2 2.1 1.5.9.3 1.4-.8 1.9-1.5"/><path d="M98.2 16.1c0 1.8-.1 3.6-1.8 4.6-1.8 1.1-3.6-.1-4-2-.4-1.7.1-3.8 1.9-4.3 1.1-.3 2.2 0 3.2.3.5.2.6.2.7.6v.8zm8.8 4.3c0-1.1-1.7 0-2 .2-.6.3-1.4.4-1.9-.2-.5-.7-.4-2-.4-2.9 0-2.2.1-4.4 0-6.5-.1-1.5-.3-3.2-1.4-4.4-1-1.3-2.6-1.6-4.2-1.6-2.2 0-4.5.8-6.4 2.1-.5.3-1.5 1-1.5 1.7.1 1.3 2 .1 2.5-.1 1.6-.7 3.9-1.3 5.5-.1 1.2.9.9 2.7.9 4.1-2.5-.9-5.3-1.1-7.7.3-2 1.1-3.3 3.3-3.1 5.6.1 2.3 1.5 4.3 3.7 5 2.6.9 5.5-.2 7.3-2.1.6 1.8 2.2 2.7 4.1 2.3 1-.2 2-.7 2.8-1.4.7-.4 1.8-1.2 1.8-2z"/><path d="M106.3 21.8c0 1.1.2 1.5 1.3 1.6.8 0 1.6.1 2.3 0 1.4-.2 1-2.5 1-3.5v-5.1c0-2 0-4.5 2-5.6 1.1-.6 2.5-.4 2.9.9.2.6.1 1.2.1 1.8v9.6c0 .5-.1 1.1.1 1.6.3.6 1.4.4 2 .4.6 0 1.7.2 2.2-.3.4-.4.3-1.1.3-1.7v-5.1c0-1.6-.2-3.3.2-4.8.3-1.3 1.2-2.4 2.6-2.7 1.3-.3 2.3.6 2.5 1.9.3 2.8 0 5.7 0 8.6 0 1 0 2 .5 2.9.8 1.2 2.2 1.7 3.6 1.5 1.5-.2 2.9-1.2 4-2.2.3-.3.9-.8.6-1.3-.4-.6-1.2.1-1.6.3-.9.5-2.1.6-2.4-.6-.2-.6-.1-1.2-.1-1.9v-5.3c0-1.4.2-3-.2-4.4-.7-2.9-4-4-6.6-2.8-1.3.6-2.4 1.8-3.2 3C120 6.4 118.1 5 116 5c-2.2 0-3.8 1.5-5 3.2.1-.7.8-2.5.1-3-.9-.7-2 1-2.5 1.5s-1 .9-1.5 1.4c-.5.4-1.2.7-1.7 1.2-1 1 .6 1.1.9 1.8.3.6.1 2 .1 2.7v4.8c-.1 1.1-.1 2.1-.1 3.2"/><path d="M134 30.6c0 1.3.4 1.8 1.6 1.4.7-.2 2-.5 2.5-1 .7-.7.4-2.9.4-3.9V14.4c0-1.6-.2-3.4.7-4.8.8-1.3 2.5-1.9 3.9-1.3 1.2.5 1.9 1.8 2.3 3 .5 1.8.5 3.8.1 5.7-.2 1.3-.7 2.8-1.9 3.6-.4.3-.9.4-1.4.4-.8 0-1.4-.8-2.2-.8-.7.1-1 .9-.9 1.5.1.6.6 1 1.1 1.3 1.8 1.1 4.2 1 6.2.8 2.2-.3 4.4-.9 6.3-2.2.6-.4 1.2-.9 1.2-1.7 0-.9-.5-.3-1 0-1.8 1.3-3.9 1.9-6.1 2.1 3.9-3 4.9-9.2 2.5-13.4-2.4-4.2-8.1-4.7-11-.8.1-.6.4-1.3.4-1.9-.1-1-1-1-1.6-.5-.7.6-1.2 1.3-1.8 1.9-.6.6-1.3 1.1-2 1.6-.5.4-.9.7-.6 1.3.3.5.9.5 1.1 1 .2.5.1 1.2.1 1.8v13c.1 1.6.1 3.1.1 4.6"/><path d="M168.5 9.4c0-1 .1-1.9.3-2.9.1-.8-.1-1.7-1.1-1.3-.6.3-1.1 1-1.6 1.5-.4.4-.8.8-1.3 1.2-.8.7-3.1 1.8-1.5 2.8.8.5.6 1.5.6 2.3 0 2.4.2 6.1-2.8 6.9-2.6.7-2.7-2.1-2.7-3.9v-5.2c0-1.5.1-3 .3-4.5.1-.6 0-1.2-.8-1.2-.5 0-.9.6-1.2.9-.6.6-1.2 1.2-1.9 1.8-.6.5-1.5 1-2 1.6-.9 1 .6 1.1.9 1.7.2.5.1 1.5.1 2v3.1c0 2.1-.3 4.4 1.3 6.1 1.2 1.2 3 1.6 4.7 1.2 1.8-.4 3.2-1.9 4.2-3.4.3 2.6 2.2 4 4.8 3.3 1.3-.4 2.8-1.4 3.6-2.4.3-.3.6-.9.1-1.2-.5-.3-1.3.5-1.7.7-.7.3-1.7.3-2.1-.5-.2-.5-.2-1.1-.2-1.7v-4.7-4.2"/><path d="M182.9 21.8c2.3-2.5 3.1-7-.2-9.1-1.2-.8-2.7-1.1-4-1.5-.9-.3-2-.5-2.8-1-1.6-1.1-.7-3 .9-3.3 2-.4 3.1 1.1 4.2 2.4.8 1 2-.3 2.5-1.1.9-1.4-.9-2.2-2.1-2.6-3.1-1-7.4-1-9.6 1.8-.9 1.2-1.2 2.8-.8 4.2.4 1.6 1.6 2.5 3.1 3.1 1.7.7 3.6.9 5.3 1.7.8.4 1.7.8 1.9 1.7.4 1.2-.3 2.5-1.4 3.1-1.4.8-3.1.5-4.5-.2-1-.5-1.9-1.2-2.8-2-.5-.4-1.2-1.1-1.9-.6-1.1.9.4 3.6 1.2 4.2 1.5 1.2 3.8 1.4 5.7 1.3 2.1-.1 3.9-.7 5.3-2.1"/></g></symbol><symbol viewBox="0 0 346 37" id="svg-logo-zon-black" xmlns="http://www.w3.org/2000/svg"><g><path d="M71.91 32.94c-1.06 0-2.82-1.02-2.82-2.61l.01-25.72c0-1.59 1.84-2.6 2.65-2.6.29 0 .32-.72 0-.72H60.3c-.32 0-.28.72 0 .72.81 0 2.65 1 2.65 2.6v25.71c0 1.59-1.59 2.61-2.65 2.61-.28 0-.4.81 0 .81h11.61c.4.01.28-.8 0-.8zm-5.19-1.11c0 .12-.1.22-.21.22h-.8c-.12 0-.22-.1-.22-.22V3.26c0-.12.1-.21.22-.21h.8c.12 0 .21.1.21.21v28.57zM42.13 3.04c5.92 0 10.65 2.23 13.71 6.93.18.27.63.13.53-.13-.15-.38-3.57-8.54-3.57-8.54H29.1c-.32 0-.28.72 0 .72 1.27 0 3.27 1.39 3.27 2.98v24.1c0 2.31-1.52 3.84-3.27 3.84-.28 0-.32.81 0 .81h23.77l3.42-8.12c.12-.31-.33-.62-.53-.23-1.34 2.57-6.38 6.65-13.01 6.65h-4.58V18.47h6.04c3.96 0 5.96 2.77 6.51 3.54.26.36.81.22.6-.22-.2-.44-2.1-4.21-2.1-4.21s1.9-3.77 2.1-4.21c.2-.44-.23-.65-.46-.26s-3.16 3.46-7.29 3.46h-5.41V3.04h3.97zm-6.22 28.79c0 .12-.1.22-.21.22h-.8c-.12 0-.21-.1-.21-.22V3.26c0-.12.1-.21.21-.21h.8c.12 0 .21.1.21.21v28.57zM25.79 25.32c-.93 1.76-6.25 6.73-13.19 6.73H7.88L26.52 1.3H8.96c-2.1 0-4.11-.17-4.11-.17s-3.26 7.46-3.56 8.1c-.21.46.26.68.55.19.89-1.5 4.79-6.38 12.6-6.38h3.98L0 33.75h22.43s3.6-7.88 3.77-8.28c.17-.4-.22-.51-.41-.15zM4.78 32.05H3.8c-.12 0-.15-.1-.08-.22l17.3-28.58c.07-.12.23-.21.34-.21h.98c.12 0 .15.1.08.21L5.12 31.83c-.07.12-.22.22-.34.22zM102.05 9.48c-.17-.38-3.43-7.03-3.75-7.86-.3-.8-.91-.32-1.46-.32H78.65c-.55 0-1.16-.47-1.46.32-.32.84-3.2 7.73-3.37 8.11-.17.38.41.7.7.17C75.77 7.64 80 3.04 84.64 3.04v27.28c0 1.59-1.59 2.61-2.65 2.61-.28 0-.4.81 0 .81H93.6c.4 0 .28-.81 0-.81-1.06 0-2.82-1.02-2.82-2.61V3.04c4.49 0 9.06 4.42 10.56 6.61.34.5.88.21.71-.17zM88.42 31.83c0 .12-.1.22-.21.22h-.8c-.12 0-.21-.1-.21-.22V3.26c0-.12.1-.21.21-.21h.8c.12 0 .21.1.21.21v28.57zM331.74 3.04c5.92 0 10.65 2.23 13.71 6.93.18.27.64.13.53-.13-.15-.38-3.57-8.54-3.57-8.54h-23.7c-.32 0-.28.72 0 .72 1.27 0 3.27 1.39 3.27 2.98v24.1c0 2.31-1.52 3.84-3.27 3.84-.28 0-.32.81 0 .81h23.77l3.42-8.12c.13-.31-.33-.62-.53-.23-1.34 2.57-6.39 6.65-13.01 6.65h-4.58V18.47h6.04c3.96 0 5.96 2.77 6.51 3.54.26.36.81.22.6-.22-.2-.44-2.1-4.21-2.1-4.21s1.9-3.77 2.1-4.21c.2-.44-.23-.65-.46-.26s-3.16 3.46-7.29 3.46h-5.41V3.04h3.97zm-6.22 28.79c0 .12-.09.22-.21.22h-.8c-.12 0-.21-.1-.21-.22V3.26c0-.12.09-.21.21-.21h.8c.12 0 .21.1.21.21v28.57zM278.32 32.94c-1.06 0-2.82-1.02-2.82-2.61l.01-25.71c0-1.59 1.84-2.6 2.65-2.6.28 0 .32-.72 0-.72H266.7c-.32 0-.28.72 0 .72.82 0 2.65 1 2.65 2.6v25.71c0 1.59-1.59 2.61-2.65 2.61-.28 0-.4.81 0 .81h11.61c.4 0 .29-.81.01-.81zm-5.19-1.11c0 .12-.1.22-.22.22h-.8c-.12 0-.21-.1-.21-.22V3.26c0-.12.1-.21.21-.21h.8c.12 0 .22.1.22.21v28.57zM315.63 1.3h-9.94c-.32 0-.28.72 0 .72 2.32 0 3.86 1.09 3.86 6.54v15.27L290.67 1.3h-9.01c-.32 0-.28.72 0 .72 1.6 0 5.08 1.83 5.08 4.54v18.31c0 6.73-1.13 8.07-3.56 8.07-.28 0-.4.81 0 .81h9.49c.4 0 .28-.81 0-.81-2.66 0-3.73-1.34-3.73-8.07l.01-16.64 22.82 26.55-.01-26.22c0-5.38 1.66-6.54 3.87-6.54.28 0 .32-.72 0-.72zm-5.91 26.67c0 .3-.9.19-1.01.07L287.54 3.18c-.1-.12-.09-.17.03-.17h1.13c.16 0 .33.19.43.31l20.48 24.02c.1.12.12.25.12.43l-.01.2zM235.45 1.3h-9.94c-.32 0-.28.72 0 .72 2.32 0 3.87 1.09 3.87 6.54v15.27L210.49 1.3h-9.01c-.32 0-.28.72 0 .72 1.6 0 5.08 1.83 5.08 4.54v18.31c0 6.73-1.12 8.07-3.56 8.07-.28 0-.4.81 0 .81h9.49c.4 0 .28-.81 0-.81-2.66 0-3.73-1.34-3.73-8.07l.01-16.64 22.82 26.55V8.56c0-5.38 1.66-6.54 3.86-6.54.28 0 .32-.72 0-.72zm-5.95 26.74c0 .3-.9.19-1.01.07L207.36 3.18c-.1-.12-.09-.17.03-.17h1.13c.16 0 .33.19.43.31l20.43 24.09c.1.12.12.25.12.43v.2zM184 .51c-7.59 0-16.93 5.73-16.93 17.28 0 10.12 6.4 16.4 16.7 16.4 13.36 0 17.24-9.84 17.24-16.68 0-9.61-7.36-17-17.01-17zm-13.9 17.52c0-8.2 5.18-14.44 8.18-15.06-2.66 1.53-6.99 7.24-6.83 15.06.15 7.32 2.39 10.67 5.66 13.65-3.27-2.04-7.01-5.48-7.01-13.65zm3.92-.45c0-10.3 5.04-15.43 9.96-15.43 5.91 0 10.18 4.84 10.18 14.89 0 10.29-4.94 15.28-10.11 15.28-5.26 0-10.03-3.24-10.03-14.74zm15.79 14.1c2.66-1.53 6.9-6.76 6.83-14.58-.07-7.49-2.38-11.15-5.65-14.13C194.26 5.01 198 8.93 198 17.1c0 8.2-5.19 13.95-8.19 14.58zM264.72 25.04c-1.34 2.57-6.2 7.01-12.82 7.01h-3.8l.01-27.44c0-1.59 2.14-2.6 2.95-2.6.28 0 .32-.72 0-.72h-12.2c-.32 0-.28.72 0 .72 1.27 0 3.27 1.39 3.27 2.98v23.65c0 3.07-1.82 4.3-3.57 4.3-.28 0-.32.81 0 .81h23.46s3.1-8.17 3.23-8.48c.13-.31-.33-.62-.53-.23zm-18.97 6.79c0 .12-.1.22-.21.22h-.8c-.12 0-.21-.1-.21-.22V3.26c0-.12.1-.21.21-.21h.8c.12 0 .21.1.21.21v28.57z"/></g><g><path d="M136.35 24.16c-1.63 0-2.95 1.29-2.95 2.88 0 1.59 1.32 2.88 2.95 2.88s2.95-1.29 2.95-2.88c-.01-1.6-1.33-2.88-2.95-2.88zM133.99 28s-.42-1.04 0-1.94c.5 1.02 0 1.94 0 1.94zm3.33-3.25c-1.02.49-1.94 0-1.94 0s1.04-.42 1.94 0zm-1.95 4.57s.92-.49 1.94 0c-.89.41-1.94 0-1.94 0zm2.72-.53c-.36.41-.91-.16-1.75-.16s-1.4.55-1.76.14c-.41-.36.15-.89.15-1.74s-.55-1.39-.14-1.75c.36-.41.91.16 1.75.16s1.4-.55 1.76-.14c.41.36-.15.89-.15 1.74s.55 1.39.14 1.75zm.6-2.73c.42.9 0 1.94 0 1.94s-.49-.92 0-1.94z"/><path d="M136.35 22.98c-.6 0-1.16.12-1.68.34a.94.94 0 01-.2-.22c-.13-.29-.36-.13-.36-.13s-.15-.32-.18-.56c-.04-.23-.27-.25-.46-.06-.18.19-.34.25-.34.25l-2.7-2.6.84-.87.37.35-.6.62 1.08 1.04 2.97-3.08-1.73-1.67-1.15 1.18.76.74.35-.37.23.22-.61.63-2.29-2.21.61-.63.23.22-.35.37.65.62 1.15-1.19-1.73-1.67-2.97 3.08 1.08 1.04.6-.62.37.35-.84.86-1.96-1.89c-.29-.28-.72-.02-.95.23s-.46.7-.17.99l5.63 5.43s-.06.16-.24.35c-.18.19-.16.43.07.45.24.03.57.17.57.17s-.15.24.14.36c.04.01.08.05.12.09-.29.55-.45 1.17-.45 1.83 0 2.24 1.86 4.05 4.15 4.05s4.15-1.81 4.15-4.05c-.02-2.22-1.87-4.04-4.16-4.04zm-9.58-4.76c-.18-.17-.16-.3.07-.53.11-.12.26-.33.51-.08l2.05 1.98 1.43-1.49-.91-.88-.64.66-.52-.5 2.38-2.47 1.2 1.16-.55.57-.19-.18.32-.33-.68-.65-1.1 1.14 2.77 2.68 1.1-1.14-.71-.68-.32.33-.23-.22.55-.57 1.11 1.07-2.35 2.44-.43-.42.61-.64-1-.97-1.43 1.49 3.02 2.92-.59.61-5.47-5.3zm5.99 6.17c-.13-.16-.25-.03-.35-.14-.07-.07-.05-.18.09-.32.17-.19.55-.59.76-.79.21-.21.37-.34.49-.22.12.12.03.24.19.4.16.16.3-.08.44.28-.95.65-1.39 1.34-1.39 1.34-.41-.24-.09-.38-.23-.55zm3.59 6.11c-1.96 0-3.55-1.55-3.55-3.47 0-1.91 1.59-3.47 3.55-3.47s3.55 1.55 3.55 3.47c-.01 1.92-1.6 3.47-3.55 3.47z"/><path d="M160.09 32.24c1.04-.68.81-1.97.81-1.97s-.57.4-1.36.55c-.5.1-.87.85-.62 1.46-.28.21-.34.55-.34.55-.59.25-1.17.25-1.17.25.98-1.88.95-1.95.66-3.18-.19-.83-.27-1.07-.62-.99-.59.13-.62-1.1-.1-1.84 0 0 1.84 1.48 3.73-.08 1.83-1.5 1.31-4.02-.85-6.23-2.16-2.22-2.33-3.11-2.29-4.47 1.42.06 1.59-1.04 1.46-1.21.99-.42.55-1.32.55-1.32.36-.55.17-1.46.17-1.46-.93-.06-1.48.28-1.48.28-.61-.19-1.08.66-1.08.66-1.17.02-.78 2.23-.78 2.23s-.52 1.31-.17 2.39c.93 2.9 2.6 3.68 3.66 5.53.43.75.42 2.18-.53 2.54-.89.34-1.65-.34-2.12-2.24-.47-1.9-.64-1.95-1.76-3.45-1.12-1.5-1.17-2.25-1.25-3.81-.08-1.55-.23-3.18-.23-3.18.25.06.32-.13.32-.13-.47-.62-.51-1.36-.51-1.36.19 0 .26-.15.26-.15-.57-.59-.3-.76-.57-1.27.32.02.38-.23.38-.23-.68-.51-.61-.97-1.27-1.72.19.02.3-.11.3-.11-.53-.64-.74-1.19-1.76-1l-.28-.32s.82-.06 1.21-.57c.4-.51-.32-1.02-.32-1.02s-.17.2-.26.17c-.23-.08.02-.34-.3-.49-.26-.12-.11-.62.28-.55.4.08.1.59.38.68.28.1.39-.47.65-.38.15.06.19-.07.59-.76.25-.42-.15-.4.1-.93.18-.38.23-.95-1.42-1.19-.04-1.37-1.31-.89-1.76-.93-.25-.89-1.06-1.06-2.22-.96l-.09.19c-.78-.04-1.27.15-1.27.15l.06.32c-.78-.08-1.08.45-1.57.55l.1.23c-.72.44-.61.98-1.31 1.36l.28.29-.17.3c-.76-.02-1.23.34-1.23.34-.91-.13-1.14.76-1.14.76-.97.17-1.23 1.25-1.14 1.69-.79.25-.62 1.19-.62 1.19-.51.23-.74.97.02 1.38 0 0-.34.87-1.34.46s-.74-1.14-.57-1.29c.7.57 1.21.07 1.14-.57 1.04-.3.76-1.33.76-1.33 1.27-.68.47-2.1.47-2.1.57-.55.02-1.23.02-1.23.02-.89-.57-1.71-.57-1.71-.91.15-1.25.74-1.25.74-.97.02-1.17.98-1.17.98-1 .04-1.35.95-1.21 1.7-.61.34-.7 1.21-.36 1.82-.53.61-.08 1.35.51 1.36 0 0-.11.91-1.16.91s-1.44-1.02-1.17-1.46c.78.32 1.14-.36.99-.97.95-.72.11-1.72.11-1.72.59-.87.06-1.53-.53-2.08 0-.57-.44-.62-.44-.62-.38-1.04-1.14-1.46-1.14-1.46s-.76.42-1.14 1.46c0 0-.44.06-.44.62-.59.55-1.12 1.21-.53 2.08 0 0-.83 1 .11 1.72-.15.61.21 1.29.99.97.26.44-.13 1.46-1.17 1.46s-1.16-.91-1.16-.91c.59-.02 1.04-.76.51-1.36.34-.61.25-1.48-.36-1.82.13-.76-.21-1.67-1.21-1.7 0 0-.21-.97-1.17-.99 0 0-.34-.59-1.25-.74 0 0-.59.81-.57 1.7 0 0-.55.68.02 1.23 0 0-.8 1.42.47 2.1 0 0-.28 1.02.76 1.33-.08.64.44 1.14 1.14.57.17.15.43.87-.57 1.29-1 .42-1.34-.46-1.34-.46.76-.42.53-1.15.02-1.38 0 0 .17-.95-.62-1.19.1-.44-.17-1.51-1.14-1.69 0 0-.23-.89-1.14-.76 0 0-.47-.36-1.23-.34l-.17-.3.28-.29c-.7-.38-.59-.93-1.31-1.36l.1-.23c-.49-.09-.8-.62-1.57-.55l.06-.32s-.49-.19-1.27-.15l-.09-.19c-1.16-.1-1.97.08-2.22.96-.46.04-1.72-.44-1.76.93-1.65.25-1.6.82-1.42 1.19.25.53-.15.5.1.93.4.68.44.82.59.76.26-.1.36.47.64.38.28-.09-.02-.61.38-.68.4-.07.54.43.29.55-.32.15-.08.42-.3.49-.1.03-.27-.17-.27-.17s-.72.51-.32 1.02c.4.51 1.21.57 1.21.57l-.28.32c-1.02-.19-1.23.36-1.76 1 0 0 .11.13.3.11-.66.76-.59 1.21-1.27 1.72 0 0 .06.25.38.23-.26.51 0 .68-.57 1.27 0 0 .08.15.27.15 0 0-.04.74-.51 1.36 0 0 .08.19.32.13 0 0-.15 1.63-.23 3.18-.08 1.55-.13 2.31-1.25 3.81s-1.29 1.55-1.76 3.45c-.47 1.89-1.23 2.57-2.12 2.24-.95-.36-.96-1.79-.53-2.54 1.06-1.85 2.73-2.63 3.66-5.53.35-1.08-.17-2.39-.17-2.39s.4-2.22-.78-2.23c0 0-.47-.85-1.08-.66 0 0-.55-.34-1.48-.28 0 0-.19.91.17 1.46 0 0-.44.91.55 1.32-.13.17.04 1.27 1.46 1.21.04 1.36-.13 2.25-2.29 4.47-2.16 2.22-2.68 4.73-.85 6.23 1.89 1.55 3.73.08 3.73.08.53.74.49 1.97-.1 1.84-.35-.08-.43.16-.62.99-.28 1.23-.32 1.31.66 3.18 0 0-.59 0-1.18-.25 0 0-.06-.34-.34-.55.25-.61-.12-1.36-.62-1.46-.8-.15-1.36-.55-1.36-.55s-.23 1.29.82 1.97c0 0-1.21-.27-1.88.62.78.27.79.82 1.52 1 .81.21 1.21-.6 1.21-.6s.25.16-.06.57c-.23.3-.22.44.15.55 2.99.89 6.08.65 6.08.65s-.62.34-.87 1.15c1.29-.32 3.62.61 5.04-1.42 0 0 1.65-.45 3.94-.85 0 0-.51.3-.81.83 0 0 2.01.99 4.6-.51.12-.07.3.13.11.21-1.1.44-1.35 1.1-1.35 1.1s2.24 1.19 4.45-.26c0 0-.34 1.1.79 1.48 0 0 1.08-.4 2.24-.65 0 0-.11.28.13.4 0 0 .93-.15 1.63-.98.71.83 1.64.98 1.64.98.25-.11.13-.4.13-.4 1.16.25 2.24.65 2.24.65 1.14-.38.79-1.48.79-1.48 2.22 1.46 4.45.26 4.45.26s-.25-.66-1.35-1.1c-.19-.08-.01-.28.11-.21 2.6 1.5 4.6.51 4.6.51-.3-.53-.81-.83-.81-.83 2.29.4 3.94.85 3.94.85 1.42 2.03 3.75 1.1 5.04 1.42-.25-.81-.87-1.15-.87-1.15s3.09.25 6.08-.65c.37-.11.38-.24.15-.55-.3-.4-.06-.57-.06-.57s.4.81 1.21.6c.73-.19.74-.74 1.51-1-.71-.86-1.92-.6-1.92-.6zm-53.98 1.14c-.49-.06-.89-.49-.89-.49s.36-.32.95-.27c.59.06.61.84-.06.76zm.55-1.42c-.75-.31-.7-.93-.7-.93s.19.11.59.21c.7.17.62.93.11.72zm.57.91c-.13.21-.42-.13-.44-.3 0 0 .62.01.44.3zm45.33-24.73s-.27.07-.47.04c-.2-.03-.28.12-.01.27.81.45 1.05 1.13 1.05 1.13s-.41-.06-.87-.45c-.2-.17-.31.02-.16.27.26.43 1.25.52 1.39 1.56 0 0-.58-.21-.99-.61-.19-.19-.32-.05-.2.18.33.65 1.4.75 1.45 1.93 0 0-.43-.14-.84-.57-.2-.21-.37 0-.14.3s.81.58.88 1.22c.07.64.26 3.53.4 4.38.14.85.38 1.83 1.39 3.05 1.01 1.22 1.15 1.49 1.49 2.67.75 2.62 1.69 3.29 2.88 2.95 1.19-.34 1.65-2.22.74-3.56-1.22-1.8-4.52-4.44-3.29-7.42 0 0-.41-.68.1-1.32 0 0 .16.1.21.3.33-.28 0-.69.48-1.08 0 0 .17.17.14.43.38-.1.27-1.01 1.46-.98.13 1.05-.51.82-.75 1.39 0 0 .37-.1.52.02-.18.71-.68.48-.89.79 0 0 .24.01.4.21 0 0-.24.88-1.29.54 0 0-.3.31-.21 1.32.08.95.31 1.83 2.11 3.87.63.72 2.01 2.14 2.01 3.59 0 1.35-.95 2.55-2.21 2.55-1.59 0-2.28-1.15-2.49-2.23-.09-.45-.6-.28-.51.24.13.78.43 1.52.43 1.52s-.21.43-.38.96c-.17.54-.14.73.01.98.27.42.07.99.57.92.3-.04.3.09.43.52.27.93.21.98.03 1.5-.18.53-.5 1.36-.62 1.58-.23.41-.45-.07-.89.17-.36.2-.78.04-.5-.31 0 0-.2-.14-.35.06 0 0-.27-.85-.98-.47 0 0-.34-.37-.65-.27 0 0 .35-.57 2.21.01.3.09.54-.4.14-.54 0 0 .3-.98.34-1.16.04-.18.13-.24-.2-.51-2.07-1.74-2.24-1.65-2.51-2.72-.27-1.08-.4-1.26-.74-2.09-.87-2.14-.65-2.87-1.26-3.56-1.26-1.4-1.72-2.24-1.72-2.24s-.11-.01-.14.11c-.44-.33-.24-.68-.65-1.01 0 0-.14.08-.17.35-.64-.47-.48-1.28-.72-1.59 0 0-.16.07-.23.3 0 0-.21-.37-.21-.52 0-.16-.08-.26.18-.47.27-.21.37-.13.44.11.4-.33.58-.78.99-1.19 0 0 .2.09.34.34 0 0 .37-.5.6-1.33.38.07.58 0 .54-.51-.09-.96.38-1.19.33-2.34-.02-.41-.41-.27-.4.06.04.92-.26.94-.35 1.74-.57-.71-.5.28-.74 1.36 0 0-.15-.06-.23-.31-.14-.47-.33.26-.84 1.13-.13-.33-.16-.54-.55-.07-.4.47-1.82 1.68-3.19 2.68-.52.38-.18.7-.41 1.18-.16.33-.45.58-.45.58s-.18-.33-.54-.31c0 0 .09-.64-.45-.89 0 0 .68-.86-.13-1.49.5-.17.67-.11.26-.84 0 0 .45-.44-.04-1.02.47-.33.61.12.65.55.06.62.37 1.2.71.89.37-.34 2.06-2.09 2.52-2.88.47-.79.23-1.4 1.43-2.82.22-.26 0-.51-.23-.3-.14.13-.44.25-.44.25s-.04-.74.44-1.4c.2-.27.03-.43-.37-.06 0 0-.06-.6.89-1.4.26-.22.09-.34-.35-.18 0 0 .18-.54.78-.67.6-.13.78.1.81.21.03.11.24.14.26 0s.18-.47.61-.4c.43.07.4.35.4.48s.09.25.21.1c.18-.22.86-.4 1.3.25zm2.02 24.88c-.25.28-.57.46-.57.46-.06-.38.25-.66.25-.66.32.01.32.2.32.2zm-1.57-1.76s-1.7-.1-2.39 1.94c0 0-.5.03-.8-.1 0 0 .4-.19.65-.97s.49-1.63.64-2.15c.2-.7-.59-.45-.39-1.1.35-1.15.27-1.27.69-1.41.42-.13.55-.1 1.05-.9 0 0 .25.57.35 1.22.1.65.65 1.14 2.69 2.73 0 0-.1.6-.3 1.1-2.14-.4-1.99.25-2.79 1.79 0 0-.35.03-.7-.05 0-.01 1.31-.64 1.3-2.1zm-2 2.02c.14-.62.85-1.3 1.5-1.47-.17.69-.85 1.31-1.5 1.47zm2.24-.52c.32.02.36.17.36.17-.45.38-.7.61-.7.61-.09-.52.34-.78.34-.78zm-10.83-11.68s-.04 2.47-.08 4.27c-.06 3.04-1.16 6.87-9.2 6.87s-9.13-3.83-9.19-6.87c-.04-1.81-.08-4.27-.08-4.27.21-.1.33-.25.33-.25-.39-.35-.51-.64-.51-.64.81.13 1.09-.3 1.09-.3-.58-.62-.79-1.03-.79-1.03.52.06.98-.11.98-.11.1-.97-.91-1.01-.96-1.78.24.02.45.17.45.17.6-1.25-.71-1.25-.44-2.32.4-.13.58-.43.58-.43a.722.722 0 01-.25-.1c.45-.19.57-.51.57-.51.13.33.13.61.13.61.64-.11.83-.56.83-.56.07.29.3.58.3.58.51-.18.69-.55.69-.55s3.4.07 6.25.07 6.25-.07 6.25-.07.18.36.69.55c0 0 .23-.29.3-.58 0 0 .19.45.83.56 0 0 0-.28.13-.61 0 0 .12.32.57.51 0 0-.09.06-.26.1 0 0 .18.29.58.43.27 1.07-1.03 1.07-.44 2.32 0 0 .21-.15.45-.17-.05.76-1.06.81-.96 1.78 0 0 .46.17.98.11 0 0-.21.41-.79 1.03 0 0 .28.43 1.09.3 0 0-.12.29-.51.64.06-.01.19.15.39.25zm-19-1.41s-.1-.4.31-.54c0 0 .22.34.57.65 0 0-.37.24-.88-.11zm.17 1.11s-.46.01-.79-.28c0 0 .01-.27.26-.31.01 0 .31.17.53.59zm-4.27-9.12c1.5 1.41.91 2.46.91 2.46s-.42-.44-.44-.93c-.02-.49-.58-1.2-.58-1.2.13-.1.11-.33.11-.33zm-.23-1.08c.33-.02.28-.41.28-.41s.49.33.82.83c.43.64.22.75.34 1.44-.97-.76-1.44-1.86-1.44-1.86zm-.49-3.17s.68.43.7 1.5c.01.4-.38.58-.55-.04l.15-.21s-.56-.59-.3-1.25zm-1.17-1.69s.25.22.61.42c.57.32.18 1.05.18 1.05s-.1-.17-.66-.49c-.42-.24-.28-.89-.13-.98zm-.06 1.31s-.16.04-.38-.04l.2-.18s.04.13.18.22zm.59-4c-.75.02-.92-.51-.7-.8s.68-.13.64.15c-.04.27.06.65.06.65zm-.31 2.32c-.27-.15-.14-1.18.43-.62.38.38.31 1.08.31 1.08s-.28-.21-.74-.46zm.12-1.31c-.32-.52.06-.86.43-.44.37.43.25.91.25.91s-.45-.11-.68-.47zm.64-.97s-.28-.28-.17-.94c0 0 .86.04 1.15.96 0 0-.47-.12-.98-.02zm.4 1.48c.57.51 1.24.72 1.11 1.82-.91-.6-1.17-.84-1.11-1.82zm.88 3.46c-.6-.9-1.28-1-.9-1.96 0 0 1.13.47.9 1.96zM118.6 3.5c.85-.19 1.3.43 1.3 1.19 0-.01-1.06-.22-1.3-1.19zm.96 6.3s-.05-.38.18-.72c1.5.89 1.14 2.23 1.14 2.23-.43-.47-.42-.93-1.32-1.51zm.87-5.03s1.66.46 1.38 2.13c-.51-.96-1.51-.84-1.67-1.64 0 0 .24.09.41.05 0 .01-.12-.26-.12-.54zm-.02 1.5c1.24.54 1.09 1.99 1.09 1.99-.42-.64-1.27-.69-1.41-1.36.16 0 .31-.14.31-.14-.1-.23.01-.49.01-.49zm-.18 1.45c.58.65 1.13.74.95 2.02 0 0-.68-.54-1.09-1.12 0 0 .19-.29.14-.9zm.66 5.93s.34.1.85.16c0 0 .21.81 1.25.74.07.31-.02.32-.28.41-.26.09-.5.29-.56 1.09-.01.21-.13.21-.32-.01l-1.09-1.25c0-.01.19-.58.15-1.14zm1.82.41c-.66-.16-.43-.92-.29-1.06.13-.13.17-.42-.15-.3-.57.22-.32.6-.69.53-.37-.07-.6-.16-.6-.16.18-.37.22-.76.22-.76.09.09.28-.02.28-.02-.28-.56.06-.79.06-.79s.52.5.85.72c.26.18.41.06.46-.03.38-.75 1.04-.38 1.04-.38.81-.5 1.28-.06 1.28-.06.82-.4 1.29.1 1.29.1l.31.68c-.49-.16-.93.03-.93.03-.4-.25-.99-.09-.99-.09-.66-.26-1.01.18-1.01.18-.22-.31-.54-.47-.38-.06.1.26.13.66-.12.62-.25-.04-.37.1-.16.35-.35.12-.47.5-.47.5zm23.45-8.8c-.16.8-1.16.67-1.67 1.64-.28-1.67 1.38-2.13 1.38-2.13 0 .28-.12.54-.12.54.17.04.41-.05.41-.05zm2.24-2.88c-.04-.27.42-.44.64-.15.22.29.05.82-.7.8 0 0 .1-.38.06-.65zm.34 4.32c-.56.32-.66.49-.66.49s-.38-.73.18-1.05c.35-.2.61-.42.61-.42.15.09.29.74-.13.98zm.37.11l.2.18c-.22.07-.38.04-.38.04.14-.09.18-.22.18-.22zm-1.19-1s-.07-.7.31-1.08c.57-.56.7.47.43.62-.47.25-.74.46-.74.46zm.6-1.77c-.23.36-.68.47-.68.47s-.12-.48.25-.91c.38-.42.76-.08.43.44zm-.63-.97c-.51-.1-.98.02-.98.02.28-.92 1.15-.96 1.15-.96.11.65-.17.94-.17.94zm-.34 5.8c-.17.62-.55.44-.55.04.02-1.07.7-1.5.7-1.5.26.66-.3 1.26-.3 1.26l.15.2zm-.46 3.12s-.56.71-.58 1.2c-.02.49-.44.93-.44.93s-.59-1.05.91-2.46c0 0-.02.23.11.33zm-1.33.44c.12-.68-.09-.79.34-1.44.33-.5.82-.83.82-.83s-.05.39.28.41c.01.01-.46 1.11-1.44 1.86zm.85-4.42c-.23-1.49.9-1.96.9-1.96.38.96-.3 1.06-.9 1.96zm1.09-4.51c-.24.98-1.3 1.19-1.3 1.19 0-.76.45-1.38 1.3-1.19zm-.21 1.05c.06.98-.21 1.22-1.11 1.82-.13-1.11.55-1.31 1.11-1.82zm-.93 4.53c.23.33.18.72.18.72-.9.58-.88 1.04-1.32 1.52 0-.01-.36-1.35 1.14-2.24zm-1 5.7l-1.09 1.25c-.19.22-.31.22-.32.01-.06-.79-.29-1-.56-1.09s-.35-.1-.28-.41c1.04.07 1.25-.74 1.25-.74.51-.06.85-.16.85-.16-.04.57.15 1.14.15 1.14zm.65-6.16c-.41.58-1.09 1.12-1.09 1.12-.18-1.28.37-1.37.95-2.02-.05.61.14.9.14.9zm-1.41-.36s-.16-1.44 1.09-1.99c0 0 .11.26.02.49 0 0 .15.14.31.14-.15.67-1 .72-1.42 1.36zm-.04 3.24s.34.23.06.79c0 0 .19.1.28.02 0 0 .04.4.22.76 0 0-.24.09-.6.16-.37.07-.12-.31-.69-.53-.32-.12-.28.16-.15.3.13.13.37.9-.29 1.06 0 0-.12-.38-.47-.5.21-.25.09-.4-.16-.35s-.22-.35-.12-.62c.16-.41-.16-.25-.38.06 0 0-.35-.44-1.01-.18 0 0-.59-.16-.99.09 0 0-.44-.19-.93-.03l.31-.68s.47-.5 1.29-.1c0 0 .47-.44 1.28.06 0 0 .66-.37 1.04.38.05.1.19.21.46.03.33-.22.85-.72.85-.72zm-2.67 5.13c-.03-.54.41-.84.41-.84.32 0 .28.4.28.4-.4.16-.69.44-.69.44zm.53 1.63c-.51.35-.93.13-.93.13.32-.47.76-.59.76-.59.3.12.17.46.17.46zm-.38-3.92c.49-.23.63-.53.63-.53.37.1.32.34.32.34-.51.45-.95.19-.95.19zm-.2-.52c-.71-.18-.46-.94-.46-.94.26-.22.62.04.62.04-.2.48-.16.9-.16.9zm-.85-.97c-.13.38-.22 1.02-.22 1.02-.62-.47-.29-.99-.29-.99.2-.13.51-.03.51-.03zm-.98.11c-.21.44-.26.94-.26.94-.37-.43-.18-.94-.18-.94.2-.14.44 0 .44 0zm-7.06-.92c-3.5 0-5.47.79-5.87.92-.4.13-.44-.17-.16-.3.28-.13 2.61-1.05 6.03-1.05s5.74.92 6.02 1.05c.28.13.24.43-.16.3-.39-.13-2.36-.92-5.86-.92zm4.21.98s-.93.09-4.21.09c-3.29 0-4.21-.09-4.21-.09s.94-.57 4.21-.57c3.28 0 4.21.57 4.21.57zm-10.5-1.15c.02-.01.04-.01.07-.01.17 0 .3.13.3.3 0 .08-.03.16-.09.21l-.28-.5zm.69-.06c0-.16.13-.3.3-.3.17 0 .3.13.3.3a.3.3 0 01-.3.3.3.3 0 01-.3-.3zm1.02-.26c0-.16.13-.3.3-.3.16 0 .3.13.3.3a.3.3 0 01-.3.3c-.17 0-.3-.13-.3-.3zm1.08-.25c0-.16.13-.3.3-.3.16 0 .3.13.3.3a.3.3 0 01-.3.3.3.3 0 01-.3-.3zm1.06-.16c0-.16.13-.3.3-.3s.3.13.3.3c0 .16-.13.3-.3.3s-.3-.13-.3-.3zm1.08-.08c0-.16.13-.3.3-.3.16 0 .3.13.3.3s-.13.3-.3.3c-.17-.01-.3-.14-.3-.3zm1.06-.03c0-.16.13-.3.3-.3s.3.13.3.3-.13.3-.3.3-.3-.14-.3-.3zm1.06.03c0-.16.13-.3.3-.3s.3.13.3.3-.13.3-.3.3-.3-.14-.3-.3zm1.08.08c0-.16.13-.3.3-.3.16 0 .3.13.3.3a.3.3 0 01-.3.3.3.3 0 01-.3-.3zm1.07.16c0-.16.13-.3.3-.3s.3.13.3.3c0 .16-.13.3-.3.3s-.3-.14-.3-.3zm1.07.25c0-.16.13-.3.3-.3s.3.13.3.3c0 .16-.13.3-.3.3s-.3-.13-.3-.3zm1.02.26c0-.16.13-.3.3-.3s.3.13.3.3c0 .16-.13.3-.3.3s-.3-.14-.3-.3zm1.02.57a.272.272 0 01-.09-.21c0-.16.13-.3.3-.3.02 0 .05 0 .07.01l-.28.5zm-6.02-1.95c-3.25 0-6.41 1.21-6.41 1.21l-.5-.74s.87.44 1.9.13c1.13-.34 1.38-1.1 1.38-1.1s.78.59 1.96.44c.94-.12 1.67-.89 1.67-.89s.74.77 1.67.89c1.18.15 1.96-.44 1.96-.44s.24.77 1.38 1.1c1.03.31 1.9-.13 1.9-.13l-.5.74s-3.16-1.21-6.41-1.21zm7.05.02c-.79.47-2.64.57-3.29-1.02 0 0-.76.72-1.96.58-1.01-.11-1.8-1.11-1.8-1.11s-.79.99-1.8 1.1c-1.19.13-1.96-.58-1.96-.58-.65 1.59-2.5 1.49-3.29 1.02-.2-.12-.11-.35.1-.26s.79.41 1.64.23c1.14-.25 1.46-1.43 1.46-1.43s.88.98 2.17.71c1.09-.23 1.67-1.32 1.67-1.32s.59 1.09 1.67 1.32c1.29.27 2.17-.71 2.17-.71s.32 1.19 1.46 1.43c.85.19 1.43-.13 1.65-.23.22-.09.31.15.11.27zm-13.84 3.45s-.06-.5-.26-.94c0 0 .24-.13.44 0-.01 0 .18.51-.18.94zm-1.03-.03s-.09-.63-.22-1.02c0 0 .31-.1.51.03 0 0 .32.52-.29.99zm-1.24-.94s.35-.26.62-.04c0 0 .25.77-.46.94 0-.01.05-.43-.16-.9zm-.66.88s.15.3.63.53c0 0-.44.27-.96-.19.01 0-.03-.24.33-.34zm.37 1.98s.44.29.41.84c0 0-.29-.28-.69-.44 0 0-.04-.4.28-.4zm.04 2.02s.44.12.76.59c0 0-.41.22-.93-.13.01-.01-.12-.35.17-.46zM142 19.78c.35-.31.57-.65.57-.65.41.15.31.54.31.54-.51.35-.88.11-.88.11zm1.23.41c.25.04.26.31.26.31-.34.29-.79.28-.79.28.23-.42.53-.59.53-.59zm8.26-14.49c-.24.09-.54-.12-.2-.37.26.16.2.37.2.37zm-.63-4.07c.45-.04.56.2.49.6-.04.2-.06.34.42.33 1.15-.04 1.38.25 1.13.49-.18.17-.29.3-.05.48.29.22-.01.83-.33.71-.96-.36-1.25-.33-1.62.51-.37.84-.46 1.55 1.16 1.35 0 0-.03.42-1.07.36-1.04-.05-1.23-1.68.04-3.01.3-.31.25-.48.05-.68-.02-.38-.02-.73-.75-.38-.65.31-.6.53-.22.51s.65.27.65.27-.63.6-.89 1.66c-.36 1.5.51 1.97.51 1.97s-.53.4-1.07-.31c0 0 .25-.62-.11-1.03 0 0 .2-.58-.27-1.27 0 0 .35-.35.11-1.06 0 0 .69-.29.36-1.09 0 .01.66-.34 1.46-.41zm-1.05-.51l-.35.17a1.19 1.19 0 01-.46-.67c.56-.21.81.5.81.5zm-.7.39c-.58.32-1.29-.35-1.32-.65.78-.35.95.35 1.32.65zm-1.1.23s-.63.44-1.61-.37c0 0 .91-.62 1.61.37zm-.92.38c-.35.73-1.29.21-1.95.33.66-1.19 1.54-.22 1.95-.33zm-.67.74c-.23.73-1.18.35-1.76.76.33-.97 1.05-.64 1.76-.76zm-.23.81c.02.75-1.22.86-1.83 1.52.02-1.55 1.83-1.52 1.83-1.52zm-2.25 4.12s.12.09.3.03c-.09.53.1.85-.09 1.55 0 0 .16.1.35.07.12.66-.28.88 0 1.53 0 0-.24.33-.77.63 0 0-.69-.65-1.36-.33 0 0-.72-.44-1.3 0 0 0-.21-.18-.58-.09 0 0 .47-.61.33-1.44 0 0 .88-.85 1.58-1.9.7-1.05.89-1.89 1.3-2.43 0 0 .14.34-.09.67 0 0 .1.14.28.16-.12.85.16 1.08.05 1.55zm-2.08-2.25c.14.2.18.64.04.77-.18-.11-.27-.56-.04-.77zm-.84 1.11c.17.04.28-.06.15-.26-.21-.32-.17-1.07.49-1.38 0 0-.55 1.26.21 2 0 0 .42-.09.41-.83-.01-.92-.37-1.82.4-2.04 0 0-.16.35-.06.79.04.15.21.12.2-.15-.01-.27.3-.85 1.05-.75 0 0-.5.72-.9 1.49-.4.78-.46 1.32-1.49 2.81 0 0-.11-1.06-.91-1.04-.2-.39.09-.73.45-.64zm-2.2.98c-.15.29-.49.1-.31-.1.12-.14 0-.43-.29-.18-.76.68-.83 2.01.29 2.38 1.11.36 2.09-.54 2.14-1.54.01-.23-.27-.33-.27-.01 0 .31-.57.22-.4-.18.24-.56 1.11-.25 1.01.45-.16 1.14-1.35 1.97-2.59 1.61-1.24-.36-1.57-1.95-.46-2.95.44-.39 1.14.03.88.52zm-1.06-4.05c.2.14.24.54.07.86-.23-.3-.23-.68-.07-.86zm-.77 1.18c-.4-.6-.24-1.41.4-1.5 0 0-.25 1.24.54 1.86 0 0 .68-.9.06-2.06 0 0-.04-.61.44-.75 0 0 .05.54.25.8.06.08.13-.06.09-.3-.06-.33.3-1 .95-1.11 0 0 .75.92-.04 1.5-.13.1-.05.3.12.23.29-.12.44-.31.44-.31s.28.51-.19.7c-1.64.66-1.56 1.49-1.56 1.49s1.02.2 1.73-.89c.2.64.04 1.15-.61 1.32-.19.05-.23.22-.05.34.27.17.26.87-.36.96 0 0-.61-.82-1.61-.11 0 0-.23-.94-1.12-.86-.47-.41-.25-1.37.52-1.31zm2.92-.48c-.09.3-.64.69-1 .7.16-.35.63-.69 1-.7zm-5.25 2.41c-.16.2-.46.04-.35-.15.19-.34-.09-.45-.32-.15-.59.77-.3 2.26.84 2.59 1.08.31 1.8-.54 1.96-.98.16-.44.15-1.27-.14-1.2-.2.05 0 .27-.16.32-.34.11-.52-.5-.07-.64s.71.18.81.47c.29.85-.51 2.7-2.31 2.36-1.68-.31-1.81-2.27-1.26-2.99.61-.8 1.4-.23 1 .37zm-3.01-2.07c.21-.05.12-.19.02-.25-.61-.39-.36-1.22.09-1.53-.19 1.5 1.13 1.62 1.13 1.62s.31-.79-.5-1.49c-.4-.35-.47-.65-.26-.8.12-.09.32.14.45.25.15.14.27.06.15-.1-.61-.8.43-1.44.43-1.44s1.03.64.42 1.44c-.12.16 0 .23.15.1.12-.11.33-.34.45-.25.21.15.14.45-.26.8-.81.7-.5 1.49-.5 1.49s1.31-.12 1.12-1.62c.45.3.7 1.14.09 1.53-.1.06-.19.2.02.25.46.1.69.8.25 1.12-.48-.29-1.23-.27-1.75.61-.51-.89-1.27-.9-1.75-.61-.44-.32-.21-1.02.25-1.12zm.45-1.31c.23.03.56.4.52.76-.4-.03-.6-.6-.52-.76zm1.57.76c-.04-.36.3-.74.52-.76.08.16-.12.73-.52.76zm-3.86 3.06c-.16-.05.04-.28-.16-.32-.28-.07-.3.76-.14 1.2.16.44.88 1.28 1.96.98 1.14-.32 1.43-1.81.84-2.59-.23-.3-.51-.19-.32.15.11.19-.19.35-.35.15-.4-.6.39-1.18 1.01-.35.55.72.42 2.67-1.26 2.99-1.8.34-2.6-1.51-2.31-2.36.1-.3.36-.61.81-.47.45.12.26.73-.08.62zm-1.27-3.55c.16.18.16.56-.07.86-.17-.32-.13-.72.07-.86zm-1.43 3.45c-.62-.09-.64-.79-.36-.96.18-.12.14-.28-.05-.34-.65-.18-.81-.69-.61-1.33.7 1.09 1.73.89 1.73.89s.07-.82-1.56-1.49c-.47-.19-.19-.7-.19-.7s.15.19.44.31c.18.08.25-.13.12-.23-.79-.57-.04-1.5-.04-1.5.65.11 1.01.79.95 1.11-.05.25.03.38.09.3.2-.26.25-.8.25-.8.47.14.44.75.44.75-.61 1.16.06 2.06.06 2.06.79-.63.54-1.86.54-1.86.64.09.8.9.4 1.5.76-.05.99.9.54 1.3-.9-.07-1.12.86-1.12.86-1.02-.69-1.63.13-1.63.13zm-.72-2.75c.38.01.85.35 1 .7-.37-.01-.92-.4-1-.7zM126.32 8c.17.4-.4.49-.4.18s-.29-.22-.28.01c.05 1 1.02 1.9 2.14 1.54 1.11-.36 1.05-1.7.29-2.38-.29-.25-.41.04-.29.18.18.2-.16.39-.31.1-.25-.49.45-.91.89-.51 1.11 1 .78 2.59-.46 2.95-1.24.36-2.43-.48-2.59-1.61-.1-.71.78-1.02 1.01-.46zm-1.88-2.46c.24.21.14.66-.04.77-.14-.12-.11-.57.04-.77zm-.95-.76c-.01.27.16.3.2.15.1-.44-.06-.79-.06-.79.77.22.41 1.12.4 2.04-.01.74.41.83.41.83.76-.75.21-2 .21-2 .66.32.7 1.06.49 1.38-.13.2-.02.31.15.26.36-.09.64.25.46.64-.8-.02-.91 1.04-.91 1.04-1.04-1.49-1.1-2.03-1.5-2.81s-.89-1.49-.89-1.49c.73-.1 1.05.49 1.04.75zm-1.43 3.05c.18.05.3-.03.3-.03-.11-.47.18-.7.04-1.54.18-.02.28-.16.28-.16-.23-.33-.09-.67-.09-.67.41.53.6 1.37 1.3 2.42.7 1.05 1.58 1.9 1.58 1.9-.14.83.33 1.44.33 1.44-.37-.09-.58.09-.58.09-.58-.44-1.3 0-1.3 0-.67-.31-1.36.33-1.36.33-.53-.3-.77-.63-.77-.63.28-.65-.12-.87 0-1.53.19.03.35-.07.35-.07-.19-.7.01-1.02-.08-1.55zm-.12-2.64c-.61-.67-1.85-.77-1.83-1.52 0 0 1.81-.03 1.83 1.52zm-.3-1.57c-.58-.41-1.53-.04-1.76-.76.71.12 1.43-.21 1.76.76zm-.47-1.17c-.67-.12-1.6.4-1.95-.33.4.11 1.28-.86 1.95.33zm-1.27-1.08c-.98.81-1.61.37-1.61.37.7-.99 1.61-.37 1.61-.37zm-1.39-.51c-.03.3-.74.96-1.32.65.37-.3.53-1 1.32-.65zM117.3.62s-.07.38-.46.67l-.35-.17s.25-.71.81-.5zM115 5.33c.35.26.04.46-.2.37 0 0-.05-.21.2-.37zm-.76.77c1.62.2 1.53-.52 1.16-1.35-.37-.83-.65-.87-1.62-.51-.32.12-.62-.49-.33-.71.24-.18.12-.31-.05-.48-.25-.24-.02-.53 1.13-.49.47.02.45-.13.42-.33-.07-.4.04-.64.49-.6.8.06 1.46.42 1.46.42-.33.8.36 1.09.36 1.09-.24.72.11 1.06.11 1.06-.47.69-.27 1.27-.27 1.27-.36.41-.11 1.03-.11 1.03-.54.71-1.07.31-1.07.31s.87-.47.51-1.97c-.26-1.06-.89-1.66-.89-1.66s.27-.29.65-.27.44-.2-.22-.51c-.74-.35-.74 0-.75.38-.2.2-.24.37.05.68 1.26 1.33 1.08 2.95.04 3.01-1.04.05-1.07-.37-1.07-.37zm-5.35 25.43c-.18-.52-.24-.57.03-1.5.13-.44.13-.57.43-.52.49.07.3-.5.57-.92.16-.25.18-.44.01-.98-.17-.54-.38-.96-.38-.96s.3-.74.43-1.52c.08-.52-.42-.69-.51-.24-.21 1.08-.91 2.23-2.5 2.23-1.26 0-2.21-1.2-2.21-2.55 0-1.45 1.38-2.87 2.01-3.59 1.8-2.04 2.03-2.92 2.11-3.87.08-1.01-.21-1.32-.21-1.32-1.05.34-1.29-.54-1.29-.54.16-.2.4-.21.4-.21-.21-.31-.71-.09-.89-.79.16-.11.53-.02.53-.02-.24-.57-.88-.34-.75-1.39 1.19-.03 1.08.88 1.46.98-.03-.26.14-.43.14-.43.48.38.16.79.48 1.08.06-.2.21-.3.21-.3.51.64.1 1.32.1 1.32 1.23 2.98-2.07 5.62-3.29 7.42-.91 1.34-.45 3.22.74 3.56 1.19.34 2.13-.33 2.88-2.95.34-1.18.48-1.45 1.49-2.67s1.25-2.2 1.39-3.05c.14-.85.33-3.74.4-4.38.07-.64.65-.92.88-1.22s.06-.51-.14-.3c-.41.43-.84.57-.84.57.04-1.18 1.12-1.28 1.45-1.93.12-.24-.01-.37-.2-.18-.41.4-.99.61-.99.61.14-1.03 1.13-1.13 1.39-1.56.15-.25.04-.44-.16-.27-.46.39-.86.45-.86.45s.24-.68 1.05-1.13c.27-.15.18-.3-.01-.27-.2.03-.47-.04-.47-.04.44-.65 1.12-.47 1.33-.21.12.15.21.03.21-.1s-.03-.41.4-.48c.43-.07.6.26.61.4.01.14.23.11.25 0 .03-.11.21-.34.81-.21s.78.67.78.67c-.44-.16-.61-.04-.36.18.95.81.89 1.4.89 1.4-.4-.37-.56-.22-.37.06.48.66.44 1.4.44 1.4s-.3-.13-.44-.25c-.23-.21-.45.04-.23.3 1.21 1.42.96 2.03 1.43 2.82s2.15 2.54 2.52 2.88c.34.31.65-.27.71-.89.04-.44.18-.88.65-.55-.5.58-.04 1.02-.04 1.02-.41.72-.24.67.25.84-.81.62-.13 1.49-.13 1.49-.54.26-.45.89-.45.89-.36-.01-.54.31-.54.31s-.3-.25-.45-.58c-.23-.48.11-.79-.41-1.18-1.37-1-2.79-2.21-3.19-2.68-.4-.47-.43-.26-.55.07-.51-.88-.69-1.6-.84-1.13-.07.25-.23.31-.23.31-.24-1.08-.17-2.07-.74-1.36-.1-.81-.4-.82-.35-1.74.01-.33-.38-.47-.4-.06-.06 1.15.41 1.38.33 2.34-.04.51.16.58.54.51.23.84.6 1.33.6 1.33.14-.26.34-.34.34-.34.41.41.6.87.99 1.19.07-.24.17-.33.44-.11.27.21.18.31.18.47 0 .16-.21.52-.21.52a.475.475 0 00-.23-.3c-.24.31-.08 1.12-.72 1.59-.03-.27-.17-.35-.17-.35-.41.33-.21.68-.65 1.01-.03-.13-.14-.11-.14-.11s-.45.84-1.72 2.24c-.62.69-.4 1.42-1.26 3.56-.33.82-.47 1.01-.74 2.09-.27 1.08-.44.98-2.51 2.72-.33.27-.24.33-.2.51.04.18.34 1.16.34 1.16-.4.14-.15.63.14.54 1.86-.58 2.21-.01 2.21-.01-.31-.1-.65.27-.65.27-.71-.38-.98.47-.98.47-.16-.2-.35-.06-.35-.06.28.35-.13.51-.5.31-.44-.24-.67.24-.89-.17-.13-.26-.45-1.09-.63-1.62zm6.3-1.55c.15.52.39 1.37.64 2.15s.65.97.65.97c-.3.13-.8.1-.8.1-.69-2.04-2.39-1.94-2.39-1.94-.02 1.46 1.3 2.09 1.3 2.09-.35.08-.7.05-.7.05-.8-1.54-.65-2.19-2.79-1.79-.2-.5-.3-1.1-.3-1.1 2.04-1.59 2.59-2.07 2.69-2.73.1-.65.35-1.22.35-1.22.5.8.63.77 1.05.9.42.13.33.25.69 1.41.2.65-.58.4-.39 1.11zm.1 3.3c-.65-.16-1.33-.78-1.5-1.47.65.17 1.36.85 1.5 1.47zm-1.9.25s-.25-.23-.7-.61c0 0 .04-.15.36-.17-.01.01.43.27.34.78zm-1.1-.06s-.32-.17-.57-.46c0 0 0-.19.32-.21 0 .01.31.3.25.67zm1.31 2.01c.36-.49 2.39-1.25 3.02-.75-.2.26-1.23.94-3.02.75zm.28-1.13c-4.55.19-6.33-.63-6.33-.63l.21-.3c1.02.25 1.4.11 1.82.3.42.19.49-.25 1.31.06.29.11.42 0 .59-.25.19 0 .57.17.74.36.16.18.47.19.4.06-.08-.13.08-.32.08-.32s.38.06.79.42c.28.24.25-.06.53-.25 1.97 0 3.05-.23 3.05-.23.81.25 1.12-.36 1.12-.36.3.17.55.15.55.15.4.23.89.25.89.25s-2.04.58-5.75.74zm4.83-1.63s.1-.21.32-.21c0 0 .47.28.44.66 0 0-.51-.11-.76-.45zm.62-.55c-.84-.24-1.13.23-.89.72-.89-.36-.72.25-.72.25s-.17.25-.49.08c-.18-.09-.68-.62-.89-1.14-.21-.51-.34-1.31-.53-1.89-.19-.59.46-.34.34-1.04-.08-.48-.29-1.25-.49-1.76-.21-.51-.55-.3-.93-.68-.27-.27-.64-.78-.64-.78s.51-.83.91-2.67c.22-1.01.66-1.25.66-1.25s.36.83 1.27 1.76c.3.31.42.55.47 1.25.06.7.34 1.59.44 2.59.04.46.14.65-.26 1.29-.47.76-.55.87-.1 2.46.13.45.34.58.66.49.82-.21 1.21-.25 1.51-.02-.24.07-.32.34-.32.34zm.4 1.44s.13-.23.11-.47c0 0 .47 0 .81.28.01 0-.58.15-.92.19zm-.02-1.19s.04-.3.36-.32c0 0 .55.38.55.85 0-.01-.4-.27-.91-.53zm-1.36-1.19c-.35.07-.35.03-.51-.7-.17-.73-.03-.8.29-1.37.26-.46.45-.75.38-1.18-.06-.43-.27-2.26-.44-3.13-.18-.86-.21-1-1.18-2.22-.51-.63-.76-1.24-.76-1.24l.46-.57c.1.14.29.18.29.18.24-.29.18-.77.56-.98.16-.05.33.08.33.08.31-.43.02-.51.75-1.34.16.02.24.22.24.22.32-.4.05-.68.59-1.69.45.32 1.09.85 1.57 1.15.48.3.44.37.64 1.16.27 1.1.86 1.04.86 1.04.16.26.66.45.66.45l.12 4.45c.15 5.63 4.03 7.08 8.8 7.55-.19.32-.09.61-.09.61s-.89-.2-1.61.34c-.28.21-.48.11-.48.11-1.08-1.8-2.65-1.95-2.65-1.95-.33.24.32 1.26.32 1.26-1.07-2.03-2.85-2.54-2.85-2.54-.05 1.29.83 1.92.83 1.92l-.63-.21c-.43-2.2-1.96-2.52-1.96-2.52-.29 1.43.81 2.33.81 2.33l-.44-.08c-.29-.76-.91-1.56-.91-1.56 1.45-2.5.14-4.29.14-4.29-.56.76-.81 1.52-.81 1.52-.22-.56-.29-1.1-.29-1.1 1.93-2.58.89-4.69.89-4.69-.76.51-1.11 1.44-1.11 1.44l-.03-.7c1.19-2.54-.61-4.18-.61-4.18-1.45 2.58.27 4.18.27 4.18l.03.67c-.61-1.58-1.82-1.9-1.82-1.9-.4 2.73 1.77 3.98 1.77 3.98.02.49.1.92.1.92-.59-.64-1.33-.92-1.33-.92-.18 3.19 2.03 4.02 2.03 4.02.14.35.19.67.19.67-.99-.66-1.82-.61-1.82-.61.22 1.76 1.72 2.57 1.72 2.57-.43.02-.75.15-.75.15-.77-1.35-1.15-1.59-2.56-1.3zm10.73 2.83c-.67-.1-1.19-.68-1.35-1.19.38.11 1.03.38 1.35 1.19zm-2.44-.79c-.67-.1-1.31-1.06-1.32-1.45.57.14 1.29.94 1.32 1.45zm-2.33-.75c-.67-.26-1.11-1.37-1.05-1.72.6.24 1.02 1.21 1.05 1.72zm-1.63-.21c-.65-.16-1.81-.97-1.97-1.85.84.19 1.83 1.23 1.97 1.85zm-.33-4.62c.43.75.1 2.01-.21 2.09-.37-.63-.02-1.85.21-2.09zm-.99 1.34c-.89-.43-1.42-2.03-1.36-2.38.98.63 1.33 1.87 1.36 2.38zm-.46-6.54c-.61-.56-.59-2.21-.32-2.66.64.7.54 2.16.32 2.66zm.35 3.57c-.37-.62.25-2.27.67-2.63.3.7-.24 2.39-.67 2.63zm-.54-1.06c-.94-.51-1.26-1.93-1.2-2.28.94.55 1.17 1.78 1.2 2.28zm.9 9.42c.36-.44 2.22-1.08 2.85-.58-.2.26-1.32.92-2.85.58zm3.45.8c.45-.49 2.01-.91 2.75-.3-.27.22-1.62.83-2.75.3zm.07-1.57c-2.25-.79-4.22-.26-4.22-.26l.3-.42c1.84-.26 2.99-.08 5.19.68 1.81.63 4.05 1.1 4.05 1.1l-.93.23c0-.01-1.47-.31-4.39-1.33zm4.32 2.4c-.38-.17-.32-.57-.32-.57 1.1-.3 2.24-.53 2.24-.53.36.1.36.49.36.49s-1.05.19-2.28.61zm2.75-.49c-.04-1.17-1.46-1.17-1.46-1.17 1.5-.72 2.14.57 2.14.57l-.68.6zm.95-2.46c1.01 0 .87.87 0 1.31-.87-.44-1.01-1.31 0-1.31zm.95 2.46l-.68-.61s.64-1.29 2.14-.57c0 0-1.42 0-1.46 1.18zm2.75.49c-1.23-.42-2.27-.61-2.27-.61s0-.4.36-.49c0 0 1.14.23 2.23.53 0 0 .06.4-.32.57zm4.39-.83c-1.14.53-2.48-.08-2.76-.3.76-.61 2.31-.2 2.76.3zm.6-1.38c.63-.5 2.49.15 2.85.58-1.53.34-2.65-.32-2.85-.58zm-.67-.19c-2.92 1.02-4.4 1.33-4.4 1.33l-.93-.23s2.24-.47 4.05-1.1c2.2-.76 3.35-.95 5.19-.68l.3.42c.01-.01-1.96-.53-4.21.26zm-3.95.41c.32-.81.97-1.08 1.35-1.19-.16.51-.68 1.1-1.35 1.19zm2.44-.79c.03-.51.75-1.31 1.32-1.45-.02.4-.65 1.35-1.32 1.45zm2.33-.75c.03-.51.45-1.48 1.05-1.72.06.35-.38 1.46-1.05 1.72zm3.6-2.06c-.16.88-1.32 1.69-1.97 1.85.14-.62 1.13-1.66 1.97-1.85zm-1.64-2.77c.22.24.57 1.47.21 2.09-.3-.09-.64-1.34-.21-2.09zm.7 4.67s1.5-.81 1.72-2.57c0 0-.83-.05-1.82.61 0 0 .05-.32.19-.67 0 0 2.2-.83 2.03-4.02 0 0-.73.29-1.33.92 0 0 .08-.43.1-.92 0 0 2.17-1.25 1.77-3.98 0 0-1.21.32-1.82 1.9l.03-.67s1.72-1.6.27-4.18c0 0-1.8 1.65-.6 4.18l-.03.7s-.35-.92-1.11-1.44c0 0-1.04 2.1.89 4.69 0 0-.06.54-.29 1.1 0 0-.26-.75-.81-1.52 0 0-1.31 1.79.14 4.29 0 0-.63.8-.91 1.56l-.45.08s1.1-.9.81-2.33c0 0-1.53.32-1.96 2.52l-.62.21s.88-.63.83-1.92c0 0-1.79.51-2.85 2.54 0 0 .65-1.02.32-1.26 0 0-1.56.14-2.65 1.95 0 0-.2.1-.48-.11-.72-.54-1.61-.34-1.61-.34s.11-.3-.08-.61c4.76-.47 8.65-1.92 8.8-7.55l.12-4.45s.5-.19.66-.45c0 0 .59.06.86-1.04.19-.79.16-.86.64-1.16.48-.3 1.12-.83 1.57-1.15.54 1.01.27 1.3.59 1.69 0 0 .08-.21.24-.22.74.83.45.91.75 1.34 0 0 .18-.13.33-.08.38.21.32.69.56.98 0 0 .19-.03.29-.18l.46.57s-.26.61-.76 1.24c-.97 1.21-1.01 1.35-1.18 2.22-.18.87-.38 2.7-.45 3.13-.06.43.12.72.38 1.18.32.57.46.64.29 1.37-.16.73-.17.77-.51.7-1.42-.29-1.8-.05-2.55 1.28-.02.02-.34-.11-.77-.13zm1.65-5.71c.06.35-.47 1.95-1.36 2.38.03-.51.38-1.75 1.36-2.38zm-1.25-.59c-.43-.24-.97-1.93-.67-2.63.42.36 1.04 2.01.67 2.63zm.67-6.24c.27.45.29 2.11-.32 2.66-.22-.49-.32-1.95.32-2.66zm-.13 5.18c.03-.51.26-1.74 1.2-2.28.06.36-.25 1.78-1.2 2.28zm.05 8.42c.34-.28.81-.28.81-.28-.02.25.11.47.11.47-.33-.04-.92-.19-.92-.19zm.04-.48c0-.47.55-.85.55-.85.32.02.36.32.36.32-.52.27-.91.53-.91.53zm2.48-1.09c.32.08.54-.04.66-.49.46-1.59.38-1.7-.1-2.46-.4-.64-.31-.83-.26-1.29.1-1 .38-1.9.44-2.59.06-.7.17-.94.47-1.25.91-.93 1.27-1.76 1.27-1.76s.44.24.66 1.25c.4 1.84.91 2.67.91 2.67s-.38.51-.64.78c-.38.38-.72.17-.93.68a9.51 9.51 0 00-.49 1.76c-.11.7.53.45.34 1.04-.19.59-.32 1.38-.53 1.89-.21.51-.72 1.04-.89 1.14-.32.17-.49-.08-.49-.08s.17-.61-.72-.25c.24-.49-.05-.96-.89-.72 0 0-.08-.27-.32-.34.3-.23.69-.19 1.51.02zm-.57.87c-.25.34-.76.46-.76.46-.04-.38.43-.66.43-.66.23-.01.33.2.33.2zm2.09 2.01c.63-.5 2.66.26 3.02.75-1.8.19-2.82-.49-3.02-.75zm2.74-.38c-3.71-.15-5.74-.74-5.74-.74s.49-.02.89-.25c0 0 .25.02.55-.15 0 0 .3.61 1.12.36 0 0 1.08.23 3.05.23.28.19.26.48.53.25.42-.36.79-.42.79-.42s.15.19.08.32c-.08.13.24.12.4-.06.17-.19.55-.36.74-.36.17.25.29.35.59.25.81-.3.89.13 1.31-.06.42-.19.8-.06 1.82-.3l.21.3c-.01 0-1.79.81-6.34.63zm6.65-1.48c-.18-.28.44-.3.44-.3-.02.17-.31.51-.44.3zm.68-1.63c.4-.1.59-.21.59-.21s.05.62-.7.93c-.52.21-.59-.55.11-.72zm.44 2.14c-.66.08-.64-.7-.06-.76.59-.06.95.27.95.27s-.4.43-.89.49z"/><path d="M136.35 25.91c-.64 0-1.16.5-1.16 1.13 0 .62.52 1.13 1.16 1.13s1.16-.51 1.16-1.13c-.01-.63-.53-1.13-1.16-1.13zm0 1.79c-.38 0-.68-.3-.68-.67 0-.37.31-.67.68-.67.38 0 .68.3.68.67 0 .37-.31.67-.68.67z"/></g></symbol></svg>    </div>
    
<div class="page">
    <header class="headline" data-ct-area="decision-header">
        <div class="headline__inner">
            <h1 class="headline__publisher">
                <a href="https://www.zeit.de/index" title="Nachrichten auf ZEIT ONLINE" data-ct-label="logo">
                <svg class="svg-symbol headline__logo" preserveAspectRatio="xMinYMin meet" role="img">
                    <title>ZEIT ONLINE</title>
                    <use xlink:href="#svg-logo-zon-black" />
                </svg>
                </a>
            </h1>
            <a href="https://meine.zeit.de/anmelden" class="headline__login-link js-forward-link js-login">Login</a>
        </div>
    </header>
    <main class="main" id="main" data-ct-area="decision-main">
        <div class="container">
            <article class="consent js-nocookie">
                <header class="consent__header">
                    <h2>How will you use zeit.de?</h2>
                </header>
                <div class="consent__body">
                    <section class="option option--tcf option--noscript">
                        <h3>zeit.de with ads</h3>
                        <p>Um der Nutzung mit Werbung zuzustimmen, muss JavaScript in Ihrem Browser aktiviert sein.</p>
                    </section>
                    <section class="option option--tcf option--loading js-loading js">
                        <div class="option__content">
                            <header>
                                <h3>zeit.de with ads</h3>
                            </header>
                            
        <p>Visit zeit.de as usual with ads and tracking. Details about how we use tracking can be found in our <a href="/hilfe/datenschutz?language=en" data-ct-label="datenschutz_link" hreflang="de">Privacy Policy</a> and in the <span class="privacy-manager-link" data-pmtype="privacy" data-ct-label="privacy_manager_link">Privacy Center</span>.</p>
      
                            <div class="option__action">
                                <div class="option__accbtn box__accbtn"></div>
                            </div>
                            <footer class="option__footer">
                            
            <p>Consent can be withdrawn at any time via the link to the <a href="/hilfe/datenschutz?language=en#rejectall" data-ct-label="datenschutz_link" hreflang="de">Privacy Settings</a> at the bottom of each page.</p>
        
                            </footer>
                        </div>
                        <div class="option__loader">
                            <div class="option__loadermask">
                                <div class="option__loadercircle"></div>
                            </div>
                        </div>
                    </section>
                    <section class="option option--pur">
                        <div class="option__content">
                            <header>
                                <h3>zeit.de Pur</h3>
                            </header>
                            <p>Use zeit.de with fewer ads and without ad tracking for â¬1.20/week (for digital subscribers only â¬0.40/week).</p>
                            <div class="option__action">
                                <a href="https://premium.zeit.de/bestellung/1932788?angebot=https%3A%2F%2Fpremium.zeit.de%2Fbestellung%2F1932788&amp;entry_service=pur&amp;url=https%3A%2F%2Fmeine.zeit.de%2Fbestellung_abschliessen" class="option__button js-forward-link-purabo" data-encode-level="1" data-ct-label="purabo_button">
                                    <span class="visually-hidden">zeit.de Pur: </span>Subscribe now
                                </a>
                            </div>
                            <footer class="option__footer">
                                <p class="js-login">
                                    Already a Pur subscriber?
                                    <a class="js-forward-link" href="https://meine.zeit.de/anmelden">Login here</a>.
                                </p>
                                </footer>
                        </div>
                    </section>
                </div>
                <footer class="consent__footer">
                    <div class="consent__message">
                        
            <h4>When browsing with ads:</h4>
            <p>We collect personal data and also transmit it to <nobr><span class="privacy-manager-link" data-pmtype="vendor">third-party providers</span></nobr> that help us improve and finance our digital content. Some of the information stored on your device, such as cookies or personal identifiers, IP addresses, as well as your individual usage behavior, is thereby processed for the following purposes:</p>
        
                        
            <details>
                <summary>Storing and/or retrieving information on a device</summary>
                <p>Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.</p>
            </details>
            <details>
                <summary>Personalised ads and content, ad and content measurement, audience insights and product development</summary>
                <p>Ads and content can be personalised based on a profile. More data can be added to better personalise ads and content. Ad and content performance can be measured. Insights about audiences who saw the ads and content can be derived. Data can be used to build or improve user experience, systems and software.</p>
            </details>
        
                    </div>
                    </footer>
            </article>
            <div class="legals" data-ct-area="decision-legals">
                <nav>
                    <a href="https://premium.zeit.de/faq/pur">Pur-Abo FAQ</a>
                    <a href="/impressum/index">Imprint</a>
                    <a href="/administratives/agb-kommentare-artikel">Terms &amp; conditions</a>
                    <a href="/hilfe/datenschutz">Privacy protection</a>
                                        <button class="js-language" lang="de">Zur deutschen Seite wechseln</button>
                                    </nav>
            </div>
        </div>
    </main>
</div>



    <script>
(function() {
    var sendClientRequest = function() {
        if ( typeof cre_client !== "undefined" ) {
            cre_client.set_page_view();
            cre_client.set_content_id( "verlag.pur...angebote.zede|www.zeit.de/zustimmung" );
            cre_client.set_service_id( "zon" );
            cre_client.set_origin( window.Zeit.getCeleraOneOrigin() );
            cre_client.request();
        }
    };
    var head = document.getElementsByTagName( 'head' )[0]
    var script = document.createElement( 'script' );
    var done = false;

    script.src = "https://www.zeit.de/cre-1.0/tracking/tracking.js";
    script.onload = script.onreadystatechange = function() {
        if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
            done = true;
            sendClientRequest();
            script.onload = script.onreadystatechange = null;
            head.removeChild( script );
        };
    };
    head.appendChild( script );
})();
</script>
    <script src="https://static.zeit.de/p/zeit.web/js/promise.925d1b25d4bf881d5d4b.js" nomodule></script>
    <script src="https://static.zeit.de/p/zeit.web/js/mausabhaengigeszaehlinstrument.a733a9faa5e51d907548.js" ></script>
    <script src="https://static.zeit.de/p/zeit.web/js/consent.539ef4cd9932fc4ba44f.js" ></script>
    <script class="webtrekk_script">
window.Zeit.loadJS( 'https://scripts.zeit.de/static/js/webtrekk/webtrekk_v4.5.3.js', function() {

    if (typeof window.webtrekkConfig === 'object') {
        window.webtrekkConfig.trackId = "981949533494636";
    }

    var webtrekk = {
        linkTrack : "standard",
        linkTrackAttribute: "data-wt-click"
    };

    if ( typeof webtrekkV3 === "function" ) {
        window.wt = new webtrekkV3(webtrekk);
        wt.cookie = "3";

        wt.contentGroup = {
            1: "verlag",
            2: "angebote",
            3: "pur",
            4: "zede"
            };

        wt.customParameter = {
            3: "1",
            8: "zede",
            10: "no",
            12: window.Zeit.getSiteParam(),
            13: window.Zeit.breakpoint.getTrackingBreakpoint(),
            25: "original",
            28: "free",
            30: "open"
            };

        
        wt.contentId = "verlag.pur...angebote.zede|www.zeit.de/zustimmung";
        if ( window.Zeit.abtest && window.Zeit.abtest.webtrekkId && window.Zeit.abtest.webtrekkId.length ) {
            wt.customParameter[36] = wt.customParameter[36] ? wt.customParameter[36] + ';' + window.Zeit.abtest.webtrekkId.join(';') : window.Zeit.abtest.webtrekkId.join(';');
        };

        
    (function(){
        try {
            var locator = new URL( window.location.href );
            var params = new URLSearchParams( locator.search );
            var returnUrl = params.get( 'url' );
            if ( returnUrl ) {
                var returnUrlLocator = new URL( returnUrl );
                wt.customParameter[47] = returnUrlLocator.hostname + returnUrlLocator.pathname;
            }
        } catch ( e ) {
            window.console.log( e );
        }
    })();

        wt.customParameter[24] = 'en';
    
wt.sendinfo();
    }
});
</script>


</body>
</html>