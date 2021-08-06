tassApp.directive('bannerInPage', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attrs) {
            /** ÐÑÐ±Ð¸ÑÐ°ÐµÐ¼ Ð²ÑÐµ Ð¿Ð°ÑÐ°Ð³ÑÐ°ÑÑ Ð½Ð° ÑÑÑÐ°Ð½Ð¸ÑÐµ Ñ Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ð¾Ð¼ */
            var paragraphs = document.querySelectorAll('.text-content .text-block p');
            /** ÐÐ¾ÐºÐ°Ð·ÑÐ²Ð°ÐµÐ¼ Ð²Ð¸Ð´ÐµÐ¾ ÑÐ¾Ð»ÑÐºÐ¾ ÐµÑÐ»Ð¸ Ð² Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ðµ Ð±Ð¾Ð»ÑÑÐµ 4 Ð°Ð±Ð·Ð°ÑÐµÐ² */
            if (!paragraphs || paragraphs.length < 5) {
                return;
            }

            /** Ð¡Ð¾Ð·Ð´Ð°ÑÐ¼ ÑÐ»ÐµÐ¼ÐµÐ½Ñ Ð² ÐºÐ¾ÑÐ¾ÑÑÐ¹ Ð±ÑÐ´ÐµÑ ÑÑÑÐ°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÑÑÑÑ Ð²Ð¸Ð´ÐµÐ¾ */
            var inPageAdfoxElem = document.createElement('div');
            /** ÐÐ°Ð´Ð°ÑÐ¼ id ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ°. Ð¢Ð°ÐºÐ¾Ð¹ Ð¶Ðµ ÐºÐ°Ðº containerId Ð² adfoxConfig */
            inPageAdfoxElem.setAttribute('id', attrs.containerid);
            /** ÐÑÑÐ°Ð²Ð»ÑÐµÐ¼ ÑÐµÐºÐ»Ð°Ð¼Ð½Ð¾Ðµ Ð²Ð¸Ð´ÐµÐ¾ inPage Ð² ÐºÐ¾Ð½ÑÐµÐ½Ñ Ð¼Ð°ÑÐµÑÐ¸Ð°Ð»Ð° Ð¿Ð¾ÑÐ»Ðµ 4 Ð°Ð±Ð·Ð°ÑÐ° */
            paragraphs[3].insertAdjacentElement('afterend', inPageAdfoxElem);
            var mainContentContainer = document.querySelector('main.container');

            if(mainContentContainer){
                mainContentContainer.classList.add("forNativeRoll");
            }

            initNativeRoll();
            if (document.cookie.includes('banner_test_buzzoola')) {
                SeedrPlayer({
                    container: '#' + attrs.containerid,
                    desiredOffset: 50,
                    gid: '5824438b5f366e72728b45e01',
                    category: 'ÐÐ¾Ð²Ð¾ÑÑÐ¸',
                    article: '.forNativeRoll',
                    onError: function () {
                        /** ÐÐ½Ð¸Ð°Ð»Ð¸Ð·Ð°ÑÐ¸Ñ BUZZOOLA Ð±Ð°Ð½Ð½ÐµÑÐ° ÐµÑÐ»Ð¸ NativeRoll Ð¿Ð¾ ÐºÐ°ÐºÐ¸Ð¼-ÑÐ¾ Ð¿ÑÐ¸ÑÐ¸Ð½Ð°Ð¼ Ð½Ðµ Ð¿ÑÐ¸Ðµ */
                        initBuzzoolaBanner(attrs);
                    }
                });
            } else {
                SeedrPlayer({
                    container: '#' + attrs.containerid,
                    desiredOffset: 50,
                    gid: '5824438b5f366e72728b45e0',
                    category: 'ÐÐ¾Ð²Ð¾ÑÑÐ¸',
                    onError: function () {
                        /** ÐÐ½Ð¸Ð°Ð»Ð¸Ð·Ð°ÑÐ¸Ñ BUZZOOLA Ð±Ð°Ð½Ð½ÐµÑÐ° ÐµÑÐ»Ð¸ NativeRoll Ð¿Ð¾ ÐºÐ°ÐºÐ¸Ð¼-ÑÐ¾ Ð¿ÑÐ¸ÑÐ¸Ð½Ð°Ð¼ Ð½Ðµ Ð¿ÑÐ¸Ðµ */
                        initBuzzoolaBanner(attrs);
                    }
                });
            }

            if (paragraphs.length > 10) {
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://moevideo.biz/embed/js/mvpt.min.js";
                document.head.appendChild(s);



                var adfoxAttrs = {
                    containerid: 'adfox_video_combo_10',
                    p1: 'cmlmv',
                    p2: 'frfe',
                    type: attrs.type,
                    dev: attrs.dev
                };

                var inPageAdvElem = document.createElement('div');
                var inPageYaElem = document.createElement('div');

                inPageAdvElem.setAttribute('id', 'adv');
                inPageYaElem.setAttribute('id', adfoxAttrs.containerid);

                paragraphs[9].insertAdjacentElement('afterend', inPageAdvElem);
                paragraphs[9].insertAdjacentElement('afterend', inPageYaElem);

                s.onload = function () {
                    initMoeVideo(adfoxAttrs);
                };
            }
        }
    }
});

/** ÐÐ¾Ð´ÐºÐ»ÑÑÐµÐ½Ð¸Ðµ ÑÐºÑÐ¸Ð¿ÑÐ° nativeRoll */
function initNativeRoll() {
    (function (a, b, c, d, e, f, g, h) {
        g = b.createElement(c);
        g.src = d;
        g.type = "application/javascript";
        g.async = !0;
        h = b.getElementsByTagName(c)[0];
        h.parentNode.insertBefore(g, h);
        a[f] = [];
        a[e] = function () {
            a[f].push(Array.prototype.slice.apply(arguments));
        }
    })(window, document, "script", "//cdn01.nativeroll.tv/js/seedr-player.min.js", "SeedrPlayer", "seedrInit");
}

/** ÐÐ½Ð¸ÑÐ¸Ð°Ð»Ð¸Ð·Ð°ÑÐ¸Ñ Buzzoola inPage Ñ Ð¿ÐµÑÐµÐ´Ð°ÑÐµÐ¹ Ð¿Ð°ÑÐ°Ð¼ÐµÑÑÐ¾Ð² */
function initBuzzoolaBanner(attrs) {
    let src = '//tube.buzzoola.com/new/build/buzzlibrary.js';
    let w = window;
    let d = document;

    var c = d.createElement('script'),
        f = function () {
            var p = d.getElementsByTagName('script')[0];
            p.parentNode.insertBefore(c, p);
        };
    if (callback) {
        c.onload = function () {
            if (document.cookie.includes('banner_test_adfox')) {
                initAdfoxBanner(attrs)
            } else {
                callback();
            }
        };
        c.onerror = function () {
            /** ÐÐ½Ð¸ÑÐ¸Ð°Ð»Ð¸Ð·Ð°ÑÐ¸Ñ AdFox Ð±Ð°Ð½Ð½ÐµÑÐ°, ÐµÑÐ»Ð¸ Ð¿Ð¾ ÐºÐ°ÐºÐ¸Ð¼-ÑÐ¾ Ð¿ÑÐ¸ÑÐ¸Ð½Ð°Ð¼
             * SCRIPT Buzzoola Ð½Ðµ Ð¿Ð¾Ð´Ð³ÑÑÐ·Ð¸Ð»ÑÑ */
            initAdfoxBanner(attrs)
        };
    }
    c.src = src;
    c.type = 'text/javascript';
    c.async = !0;
    '[object Opera]' === w.opera ? d.addEventListener('DOMContentLoaded', f, !1) : f();

    function callback() {
        var container = Array.prototype.slice.call(d.querySelectorAll('#' + attrs.containerid))
                .filter(function (container) {
                    return !container.controller;
                })[0],
            errored = false,
            player;

        container.setAttribute('data-hash', 'kbDH64c7yFY_jqB7YcKn5B_ooHpyzn4uFBnwNSv0ucAq6QmNdOQrhA');
        container.classList.add('buzzplayer-stage');

        if (!!container) {
            player = new w.Buzzoola.Core(container);

            player.on('error', function (error) {
                errored = true;
            });

            player.on('terminated', function () {
                errored = false;
            });

            player.on('destroyed', function () {
                setTimeout(function () {
                    if (errored) {
                        /** ÐÐ½Ð¸ÑÐ¸Ð°Ð»Ð¸Ð·Ð°ÑÐ¸Ñ AdFox Ð±Ð°Ð½Ð½ÐµÑÐ°, ÐµÑÐ»Ð¸ Ð¿Ð¾ ÐºÐ°ÐºÐ¸Ð¼-ÑÐ¾ Ð¿ÑÐ¸ÑÐ¸Ð½Ð°Ð¼ Ð½Ðµ Ð²Ð¾ÑÐ¿ÑÐ¾Ð¸Ð·Ð²ÐµÐ»ÑÑ
                         * Buzzoola */
                        initAdfoxBanner(attrs)
                    }
                }, 0);
            });
        }
    };
}


/** ÐÐ½Ð¸ÑÐ¸Ð°Ð»Ð¸Ð·Ð°ÑÐ¸Ñ Ð±Ð°Ð½Ð½ÐµÑÐ° adfox inPage Ñ Ð¿ÐµÑÐµÐ´Ð°ÑÐµÐ¹ Ð¿Ð°ÑÐ°Ð¼ÐµÑÑÐ¾Ð²
 * ÐÐ¾Ð´ÑÐ¾Ð±Ð½ÐµÐµ: https://sites.help.adfox.ru/page/47/#4
 */
function initAdfoxBanner(attrs) {
    window.Ya && window.Ya.adfoxCode && window.Ya.adfoxCode.create({
        /** ÐÐ´ÐµÐ½ÑÐ¸ÑÐ¸ÐºÐ°ÑÐ¾Ñ Ð°ÐºÐºÐ°ÑÐ½ÑÐ° ÐºÐ»Ð¸ÐµÐ½ÑÐ° */
        ownerId: 255516,
        /** ÐÐ´ÐµÐ½ÑÐ¸ÑÐ¸ÐºÐ°ÑÐ¾Ñ ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ°, ÐºÐ¾ÑÐ¾ÑÑÐ¹ ÑÐ²Ð»ÑÐµÑÑÑ ÐºÐ¾Ð½ÑÐµÐ¹Ð½ÐµÑÐ¾Ð¼ Ð´Ð»Ñ Ð±Ð°Ð½Ð½ÐµÑÐ° */
        containerId: attrs.containerid,
        /** ÐÐ»Ð¾Ðº Ñ Ð¿Ð°ÑÐ°Ð¼ÐµÑÑÐ°Ð¼Ð¸ Ð·Ð°Ð¿ÑÐ¾ÑÐ° Ð·Ð° Ð±Ð°Ð½Ð½ÐµÑÐ¾Ð¼ */
        params: {
            /** ÐÐ°ÑÐ°Ð¼ÐµÑÑ Ð¾ÑÐ²ÐµÑÐ°ÑÑÐ¸Ð¹ Ð·Ð° ÑÐ¸Ð¿ Ð±Ð°Ð½Ð½ÐµÑÐ° (Ð¸Ð· Ð°Ð´Ð¼Ð¸Ð½ÐºÐ¸) */
            p1: attrs.p1,
            /** ÐÐ°ÑÐ°Ð¼ÐµÑÑ Ð¾ÑÐ²ÐµÑÐ°ÑÑÐ¸Ð¹ Ð·Ð° ÑÐ¸Ð¿ Ð±Ð°Ð½Ð½ÐµÑÐ° (Ð¸Ð· Ð°Ð´Ð¼Ð¸Ð½ÐºÐ¸) */
            p2: attrs.p2,
            /** ÐÐ»Ð°Ð²Ð½Ð°Ñ Ð°Ð½Ð¸Ð¼Ð°ÑÐ¸Ñ Ð¿Ð¾ÐºÐ°Ð·Ð° Ð¿Ð»ÐµÐµÑÐ° (Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ Ð²ÐºÐ».) */
            slide: true,
            /** ÐÐ»ÐµÐµÑ Ð²Ð¸Ð´ÐµÐ½ Ð¿ÑÐ¸ Ð·Ð°Ð³ÑÑÐ·ÐºÐµ ÑÑÑÐ°Ð½Ð¸ÑÑ (Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ Ð²ÑÐºÐ».) */
            visibleAfterInit: false,
            /** CSS-ÑÐµÐ»ÐµÐºÑÐ¾Ñ Ð¿Ð¾ÑÐ»Ðµ ÐºÐ¾ÑÐ¾ÑÐ¾Ð³Ð¾ Ð¿Ð¾ÐºÐ°Ð·ÑÐ²Ð°ÑÑ Ð¿Ð»ÐµÐµÑ (Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ undefined) */
            insertAfter: 'undefined',
            /** ÐÐ¾Ð·Ð¸ÑÐ¸Ñ ÑÐ»ÐµÐ¼ÐµÐ½ÑÐ° Ð² ÑÐ¿Ð¸ÑÐºÐµ (Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ 0) */
            insertPosition: '0',
            /** ÐÑÐ¸Ð»Ð¸Ð¿Ð°ÐµÑ Ð»Ð¸ Ð±Ð°Ð½Ð½ÐµÑ (Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ Ð²ÑÐºÐ».) */
            stick: false,
            /** ÐÐ¾Ð½Ð° Ð¿ÑÐ¸Ð»Ð¸Ð¿Ð°Ð½Ð¸Ñ Ð±Ð°Ð½Ð½ÐµÑÐ° (Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ auto) */
            stickTo: 'auto',
            /** Ð¦Ð²ÐµÑÐ¾Ð²Ð°Ñ ÑÑÐµÐ¼Ð° ÑÐ°Ð·Ð²ÐµÑÐ½ÑÑÐ¾Ð³Ð¾ Ð±Ð°Ð½Ð½ÐµÑÐ° (Ð¿Ð¾ ÑÐ¼Ð¾Ð»ÑÐ°Ð½Ð¸Ñ light) */
            stickColorScheme: 'light',
            /** Ð¢ÐµÑÑÐ¾Ð²Ð°Ñ Ð»Ð¸ ÑÑÐ¾ Ð¿Ð»Ð¾ÑÐ°Ð´ÐºÐ° */
            puid1: isDev(attrs.dev),
            /** Ð¯Ð·ÑÐºÐ¾Ð²Ð°Ñ Ð²ÐµÑÑÐ¸Ñ */
            puid2: 'ru',
            /** ÐÐ¾Ð²Ð¾ÑÑÑ Ð¸Ð»Ð¸ Ð½ÐµÑ */
            puid3: isNews(attrs.type),
            /** Ð¢Ð°ÑÐ³ÐµÑ Ð¿Ð¾ ÑÑÐ»Ð°Ð¼ */
            puid4: getUrl(),
            /** ÐÐºÐ»ÑÑÐµÐ½ Ð»Ð¸ Ð°Ð´Ð±Ð»Ð¾Ðº */
            puid5: isAdblock(),
        }
    });
}

function initMoeVideo(attrs) {
    window.moevideoQueue = window.moevideoQueue || [];
    moevideoQueue.push(function () {
        moevideo.ContentRoll({
            "mode": "manual",
            "el": "#adv",
            "width": "auto",
            maxRefresh: 10,
            "ignorePlayers": true,
            "floatMode": "full",
            "floatPosition": "bottom right",
            "floatCloseTimeout": 10,
            "callback": function(event) {
                if (event === 'error' || event === 'empty') {initAdfoxBanner(attrs);}
            }
        });
    });
}

function isDev(attrs) {
    return attrs.ngDev !== 'production';
}

function isNews(attr) {
    return attr === "news-page";
}

function getUrl() {
    return window.location.pathname === '/' ? 'home' : window.location.pathname;
}

function isAdblock() {
    return !window.adfoxAsyncParams;
}
