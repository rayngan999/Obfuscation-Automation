<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="de" class="wf-roboto-n4-active wf-roboto-n7-active wf-roboto-n9-active wf-active">
<head>
<link rel="stylesheet" href="./assets/style.css" media="all">
<title>Dating!</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
<meta http-equiv="pragma" content="no-cache" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="referrer" content="unsafe-url">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
<link rel="apple-touch-icon" sizes="57x57" href="/img/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/img/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/img/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/img/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/img/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/img/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/img/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/img/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/img/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192" href="/img/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/img/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
<link rel="manifest" href="/img/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/img/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">
<script src="/js/fgp.min.js"></script>
<script src="https://browser.sentry-cdn.com/6.4.0/bundle.min.js" integrity="sha384-Tm8L7AJ2+uA9xQUntCAkyIJWWLhX4R9AV9cF4oC7i86Ozuplz6BAJr/t7F65CPmy" crossorigin="anonymous"></script>
<script>AFKClickUrl = "https://kingered-banctours.com/click";</script>
<script async src="https://kingered-banctours.com/hp"></script>
<script type="text/javascript">
    var sCity = 'Your location';
    var sCountry = 'Your location';
    var uHash = '';
    $(document).ready(function () {
        function appnd(components) {
            var values = components.map(function (component) {
                return component.value
            });
            uHash = Fingerprint2.x64hash128(values.join(''), 31);
            $('.exit-links').each(function (index, item) {
                var exitBtn = $(item);
                var newStr = exitBtn.attr('href');
                if (newStr) {
                    if (exitBtn.attr('href').endsWith('click')) {
                        newStr += '?zid=' + uHash;
                    } else {
                        newStr += '&zid=' + uHash;
                    }
                    exitBtn.attr('href', newStr)
                }
            });

            $.ajax({
                url: "/api/info",
                dataType: "json",
                method: "GET",
                data: {
                    email: '{email}',
                    land: 'cevpb6bmi',
                    domain: 'datingtopia.com',
                    query: 'utm_source%3D4f8e3b6f%26utm_medium%3D%257Butm_medium%257D%26utm_campaign%3D%257Butm_campaign%257D%26utm_content%3D%257Butm_content%257D%26zid%3D%257Bzid%257D%26bid%3D%257Bbid%257D%26data2%3D%257Bdata2%257D%26data3%3D%257Bdata3%257D%26data4%3Dbb%26bt%3Dbt1%26cep%3Dwh94YqmoGXRdw5kI-9nRDHBSTFXOMhpR0qzAwEdRGwZT2lThcD9872yab2uNBg7TVeLW3jZBu1XHUSHO8OaBVjHHRwJzHe3MVMJAwIal6Dd9QSbCB4s3i3CnSu6Fs3ku8uKTS52wDDht1pHHmEp6eUkV8KjKnIT3FgDB2CH3CG0LzaV2uUf-iWxgnDehh3DYm9aPMzxcvhu0X0dWkgVd9NocSh8k6KH_Z2cwRXtjHX2YK8kht09AMmuxp5X7QpiyNUjwKHtqpIah-Vhvjiw7wJzs8LH7uWnftz6AthliYkicn6wdZxDGbd0G517FNdvzG3wz3KzfXQaAVtXVI-OZiqW6Dh-mXco6eMKie9RFESkyFVQn9dDoSOL0rXHV2LRZL8M0oVEzBvCa66NBIOLx66Zj68GuKn5XqBEI53Jm26_xKKYE-lF4WdEuc-oVOnM-zcfIJ8LsfmA7j4yjRhKbeR4m5po6FnU0VwsNkgmUu4l2IbzVdX01RfpYWGybeb9wUmfO1ofaPxRd1x7Ue3e3iMPxeek2sb28YWpdluGe82Modfysm07DBxqti8waUC-QGIvhFGU7WSsP3OAuZPZrOg%26lptoken%3D16af091b31c601b5717f%26cid%3Dwjo6ki0p6ms396e42ekfgfem',
                    subscriberId: null,
                    fp: uHash
                }
            })
        }

        if (window.requestIdleCallback) {
            requestIdleCallback(function () {
                Fingerprint2.get(appnd)
            })
        } else {
            setTimeout(function () {
                Fingerprint2.get(appnd)
            }, 500)
        }

        if (typeof Sentry !== "undefined") {
            Sentry.init({
                dsn: "https://de6d37de02434cd982db4659388ac9dd@sentry.smclk.net/10",
                release: 'v2.1.5'
            });
        }
    });

    function getURLParameter(_name, _default) {
        var newName = (new RegExp('[?&]' + encodeURIComponent(_name) + '=([^&]*)')).exec(location.search);
        if (newName) {
            return decodeURIComponent(newName[1]);
        }
        return _default;
    }

    function genUrl(_url, _params) {
        for (var k in _params) {
            if (_params.hasOwnProperty(k)) {
                var _param = getURLParameter(_params[k], false);
                if (_param) {
                    _url = _url.replace('{' + _params[k] + '}', _param);
                }
            }
        }
        return _url;
    }

    document.addEventListener("DOMContentLoaded", function () {
                (function (w, d) {
            var targetLocation = function () {
                var url = genUrl('https://kingered-banctours.com/a8bb94ae-38f3-4de0-a30a-6a33ebb08509?utm_source={utm_source}&utm_medium={utm_medium}&utm_campaign={utm_campaign}&utm_content={utm_content}&cid={cid}&zid={zid}&bid={bid}&email={email}&data2={data2}&data3={data3}&data4=bb', [
                    'utm_source',
                    'utm_medium',
                    'utm_campaign',
                    'utm_content',
                    'data2',
                    'data3',
                    'data4',
                    'zid',
                    'bid',
                    'cid',
                    'email',
                    'source',
                    'subid',
                    'subid2',
                    'click_id',
                ]);
                w.history && w.history.pushState && w.history.pushState({}, '', w.location);
                w.addEventListener && w.addEventListener('popstate', function () {
                    w.location = url;
                }, !1)
            };
            (function () {
                if (w.addEventListener) {
                    w.addEventListener('pageshow', function () {
                        setTimeout(targetLocation, 0)
                    }, !1)
                } else {
                    setTimeout(targetLocation, 0)
                }
            }())
        }(window, document));
        
        window.exit = true;

        function confirmExit() {
            if (window.exit) {
                return '?';
            }
        }

        window.onbeforeunload = function () {
            return confirmExit();
        };

        var buttons = document.querySelectorAll('.exit-links');

        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].attachEvent) {
                buttons[i].attachEvent('onclick', function () {
                    window.exit = false;
                });
            } else {
                buttons[i].addEventListener('click', function () {
                    window.exit = false;
                }, false);
            }
        }
    });

    var rTimeout = 40000;
    var redirectUrl = genUrl('https://kingered-banctours.com/0e565a05-6b58-4a68-8931-3234a344b16f?utm_source={utm_source}&utm_medium={utm_medium}&utm_campaign={utm_campaign}&utm_content={utm_content}&cid={cid}&zid={zid}&bid={bid}&email={email}&data2=redirect&data3={data3}&data4=' + rTimeout, [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'data2',
        'data3',
        'data4',
        'zid',
        'bid',
        'cid',
        'email',
        'source',
        'subid',
        'subid2',
        'click_id',
    ]);

    function ready() {
        var timer;

        function startTimer() {
            timer = setTimeout(function () {
                window.exit = false;
                location.href = redirectUrl;
            }, rTimeout);
        }

        function addListenerMulti(el, s, fn) {
            s.split(' ').forEach(function (e) {
                el.addEventListener(e, fn, false);
            });
        }

        addListenerMulti(window, 'mousemove mouseup', function () {
            clearTimeout(timer);
            startTimer();
        });
    }

    document.addEventListener("DOMContentLoaded", ready);

    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-97359813-1', 'auto');
    ga('send', 'pageview');

    function addGeo(_className = undefined, _callback = undefined) {
        $.get('https://geo.cdnery.com/me', function (data) {
            sCity = data.result.city_name;
            if (_className !== undefined) {
                var b = document.body.lastChild;
                var c = setInterval(function () {
                    clearInterval(c);
                    [].slice.call(document.getElementsByClassName(_className)).forEach(function (b, c) {
                        "" != sCity && "?" != sCity && (b.innerHTML = sCity)
                    })
                }, 10)
            }
            _callback && _callback(data);
        });
    }
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1426921724108509');
    fbq('track', 'PageView');

    (function (d, w, c) {
        (w[c] = w[c] || []).push(function () {
            try {
                w.yaCounter48184178 = new Ya.Metrika({
                    id: 48184178,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true,
                    webvisor: true
                });
            } catch (e) {
            }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () {
                n.parentNode.insertBefore(s, n);
            };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else {
            f();
        }
    })(document, window, "yandex_metrika_callbacks");
    </script>
<noscript>
    <img height="1" width="1" style="display:none"
         src="https://www.facebook.com/tr?id=1426921724108509&ev=PageView&noscript=1"/>
    <img src="https://mc.yandex.ru/watch/48184178" style="position:absolute; left:-9999px;" alt=""/>
</noscript>
<style>
    .block-ui {display: none;background: #0000005e;position: fixed;left: 0;right: 0;top: 0;bottom: 0;}
    .block-ui > img {position: absolute;margin: 0 auto;top: 50%;left: 50%;transform: translate(-50%, -50%);}
</style>
</head>
<body>
<div id="theBody">
<div id="frames" style="background-image:url(assets/images/bg1.jpg)" data-background="assets/images/bg2.jpg,assets/images/bg3.jpg">
<div>
<h1><span>Thousands of women </span>ARE
LOOKING FOR A DATE.</h1>
<h2><span>100% FREE REGISTRATION </span>!</h2>
<p>Youâll probably see photos of someone you will adore! Please answer the following questions to see if its is suitable for you:</p>
<h3><i class="active">1</i><i>2</i><i>3</i></h3>
<h4>Whatâs your preferred women type?</h4>
<div>
<div><img src="./assets/images/1.jpg" width="300" height="300" alt="dating"><span>Brunette</span></div>
<div><img src="./assets/images/2.jpg" width="300" height="300" alt="dating"><span>Blonde</span></div>
<div><img src="./assets/images/3.jpg" width="300" height="300" alt="dating"><span>Brown</span></div>
<div><img src="./assets/images/4.jpg" width="300" height="300" alt="dating"><span>Redhead</span></div>
</div>
</div>
<div>
<h1>MOST MEMBERS ARE LOOKING FOR <span>MALE FROM AREA!</span></h1>
<p class="yellow"><font color="#fff">Search for a date quickly and easily, and set up a meeting.</font>
</p>
<h3><i>1</i><i class="active">2</i><i>3</i></h3>
<h4>Whatâs your preferred body shape?</h4>
<div>
<div><img data-src="assets/images/5.jpg" width="300" height="300" alt="dating" src="./assets/images/5.jpg"><span>S</span></div>
<div><img data-src="assets/images/6.jpg" width="300" height="300" alt="dating" src="./assets/images/6.jpg"><span>M</span></div>
<div><img data-src="assets/images/7.jpg" width="300" height="300" alt="dating" src="./assets/images/7.jpg"><span>L</span></div>
<div><img data-src="assets/images/8.jpg" width="300" height="300" alt="dating" src="./assets/images/8.jpg"><span>XL</span></div>
</div>
</div>
<div>
<h1>ARE YOU READY FOR A DATE?</h1>
<p class="blue">Before you register, you have to accept the following rules:</p>
<h3><i>1</i><i>2</i><i class="active">3</i></h3>
<ul>
<li>Keep in secret what you will know from the ladies here</li>
<li>Be cautious and reasonable.</li>
<li>Respect one another. Just like you, everyone else here is looking for fun.</li>
</ul>
<div id="toForm">
<a href="https://kingered-banctours.com/click" class="exit-links">Accept</div>
</div>
</div>
</div>
<div id="notify">
<div data-img="assets/images/sasha.jpg"><p>Sasha Grey from <span class="city">Quezon</span> come online!</p></div>
<div data-img="assets/images/jane.jpg"><p>Jane come online!</p></div>
<div data-img="assets/images/kim.jpg"><p>Kim from <span class="city">Quezon</span> come online!</p></div>
<div class="red"><p>Sasha Grey go off</p></div>
</div>
<div id="uOnline"><span id="closePop">x</span>
<p><span id="uOn">487</span> Frauen aus <span class="city">Quezon</span> suchen Sexdates.</p></div>
<div id="modal" style="display:none">
<div id="popup">
<div id="close">Ã</div>
<div id="popup_img">
<a id="pImg" href="#" class="cImg" style="background-image:url(assets/images/float_pop.jpg);max-width:904px;">
<div style="padding-bottom: 66.70%;"></div>
</a>
</div>
</div>
</div>
<div id="mb001x2" style="display:none">
<script>alert("WARNING!\n\nYOU WILL SEE AMAZING PHOTOS. PLEASE BE DISCREET.");</script>
<script>
        var exitURL = "https://kingered-banctours.com/a8bb94ae-38f3-4de0-a30a-6a33ebb08509?utm_source={utm_source}&utm_medium={utm_medium}&utm_campaign={utm_campaign}&utm_content={utm_content}&cid={cid}&zid={zid}&bid={bid}&email={email}&data2={data2}&data3={data3}&data4=bb",
            entry_pop = true,
            exit_block = false,
            exitImgPath = "assets/images/bg_close.jpg", //false,
            exit_pop_onCTA = true,
            popin_msg, exit_block_msg, cta_exit_msg;

        function setupPopinMsg() {
            var date = fdate(0);
            var formated_date = date.txt_month + " " + date.day + ", " + date.year;

            cta_exit_msg = "Your place has been reserved!\n\nPlease do something on the next page before: " + formated_date + " for secure it";
            exit_block_msg = "**************************************************************\n\nWAIT! WAIT! WAIT! WAIT! WAIT! WAIT! WAIT! WAIT! WAIT!\n\n**************************************************************\n\nSpecial webcam offer activated!\n\nVALID TODAY ONLY!\n\n**************************************************************\n\nClick *STAY ON PAGE* or *CANCEL* to receive instant acccess to thousants of horny babes";
        }

        var backBtn_redir_link = "#";
        var backBtn_redirect_active = false,
            tokens_to_redirect = [];
        var dayNames = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
            monthNames = "January February March April May June July August September October November December".split(" ");
        var minutesleft = 2;
        var timerWording = [' minutes and', ' seconds'];
        var tokens = [
            ['brand', ''],
            ['city', 'YOUR CITY']
        ];
        to_vibrate = false;
        var minMaxUsers = [1000, 1100],
            minMaxUsersSpeed = [3000, 5300];
        var useAppSpotGeo = true;
        var floatPop = false;
        var floatPopTimer = false;
        var notifications = false;
        var minMaxNotifySpeed = [2500, 4300];
        var notificationsDelay = 2500;
        var usersTab = false;
        var uOnlineDelay = 1000;
        var minMaxStep = [-5, 8],
            minMaxSpeed = [1000, 2300];
        var enableForm = false;


        var mb001x2 = setInterval(function () {
            /loaded|complete/.test(document.readyState) && (clearInterval(mb001x2), getURLPars(),
            void 0 != urlParams.noentrypop && (entry_pop = !0), void 0 != urlParams.vibrate && (to_vibrate = !0),
            void 0 != urlParams.noexitctapop && (exit_pop_onCTA = !1), void 0 != urlParams.noexitblock &&
            (exit_block = !1), void 0 != urlParams.floatpop && (floatPop = !0), void 0 != urlParams.notify &&
            (notifications = !0), void 0 != urlParams.utab && (usersTab = !0), void 0 != urlParams.form &&
            (enableForm = !0), fill_tokens(), vibrate(), setTimeout(downFonts, 300), useAppSpotGeo &&
            setTimeout(function () {addGeo('city');}, 350), enableForm && addForm(),
                setupPopinMsg(), entry_pop, fill_dates(), 0 != document.getElementsByClassName("timer").length &&
            (timeEl = "timer", cd()), addQlistner(),
                setTimeout(loadBImgs, 350), setTimeout(loadNImgs, 750), setTimeout(function () {
                wEl = elById("users");
                wCount = random(minMaxUsers[0], minMaxUsers[1]);
                wOnRand()
            }, minMaxUsersSpeed[0]), notifications && setTimeout(function () {
                elById("notify").style.display = "block";
                startNofity()
            }, 1500), usersTab && setTimeout(function () {
                elById("uOnline").style.display = "block";
                addClPopListn();
                onEl = elById("uOn");
                oUCount = parseInt(onEl.innerHTML.replace(/,/g, ""), 10);
                uOnRand()
            }, uOnlineDelay), backBtn_redirect_active, exit_block && setTimeout(function () {
                exitImgPath && ((new Image).src = exitImgPath);
                createEDiv()
            }, 1350), exit_block && (window.onbeforeunload = ShowPopup), floatPop && setTimeout(addModal, 1400),
                document.addEventListener("touchstart", function () {
            }, !0), "undefined" != typeof elById("mb001x2") && null !== elById("mb001x2") &&
            document.getElementsByTagName("body")[0].removeChild(elById("mb001x2")))
        }, 10);

        function addForm() {
            [].slice.call(document.querySelectorAll("#frames>div>h3")).forEach(function (a, c) {
                var b = document.createElement("i");
                b.innerHTML = "4";
                a.appendChild(b)
            });
            var a = document.createElement("div");
            a.innerHTML = "<h5>Zur\u00fcck</h5><h1>" + formFrameConfig.formFrameH1 +
                "</h1><h3><i>1</i><i>2</i><i>3</i><i class='active'>4</i></h3>";
            a.appendChild(buildForm());
            elById("frames").appendChild(a);
            hideOut("toOffer");
            bringIn("toForm");
            elById("toForm").addEventListener("click", function () {
                addPixels(goalPixels)
            })
        }


        var end = new Date;
        end.setMinutes(end.getMinutes() + minutesleft);
        end.setSeconds(end.getSeconds() + 12);
        end.setMilliseconds(end.getMilliseconds());
        var timerSET, timeEl;

        function cd() {
            now = new Date;
            diff = end - now;
            diff = new Date(diff);
            var a = diff.getSeconds(),
                b = diff.getMinutes();
            10 > b && (b = "0" + b);
            10 > a && (a = "0" + a);
            now >= end ? (clearTimeout(timerSET), [].slice
                .call(document.getElementsByClassName(timeEl)).forEach(function (a, b) {
                a.innerHTML = "0:00"
            })) : [].slice.call(document.getElementsByClassName(timeEl)).forEach(function (c, d) {
                c.innerHTML = b + " " + timerWording[0] + " " + a + " " + timerWording[1]
            });
            timerSET = setTimeout("cd()", 45)
        }

        var urlParams;

        function getURLPars() {
            var a, b = /\+/g,
                c = /([^&=]+)=?([^&]*)/g,
                d = window.location.search.substring(1);
            for (urlParams = {}; a = c.exec(d);) urlParams[decodeURIComponent(a[1].replace(b, " "))]
                = decodeURIComponent(a[2].replace(b, " "))
        }

        function fill_tokens() {
            0 != tokens.length && [].slice.call(tokens).forEach(function (a, b) {
                window[a[0]] = urlParams[a[0]];
                if ("Unknown" == window[a[0]] || "unknown" == window[a[0]] || "Generic" == window[a[0]] ||
                    "generic" == window[a[0]] || void 0 == window[a[0]]) window[a[0]] = a[1];
                setToken(a[0], window[a[0]])
            })
        }

        function setToken(a, b) {
            0 != document.getElementsByClassName(a).length && null !== b && [].slice
                .call(document.getElementsByClassName(a)).forEach(function (a, d) {
                a.innerHTML = b
            })
        }

        var answersArr = [];

        function addQlistner() {
            var a = 0,
                b = elById("frames");
            lastQ = b.childElementCount - 1;
            [].slice.call(document.querySelectorAll("#frames>div>div>div")).forEach(function (c, d) {
                c.addEventListener("click", function () {
                    var d = c.parentElement.parentElement;
                    if (a < lastQ) {
                        0 == a && enableForm && addFormAscript();
                        var e = d.nextElementSibling;
                        d.setAttribute("data-state", "hide");
                        b.style.backgroundImage = "url(" + backgrounds[a + 1] + ")";
                        e.setAttribute("data-state", "show")
                    }
                    answersArr[a] = getNodeIndex(c) + 1;
                    a += 1
                })
            });
            [].slice.call(document.querySelectorAll("#frames>div>h5")).forEach(function (c, d) {
                c.addEventListener("click", function () {
                    var d = c.parentElement;
                    if (0 < a) {
                        var e = d.previousElementSibling;
                        d.setAttribute("data-state", "hide");
                        b.style.backgroundImage = "url(" + backgrounds[a - 1] + ")";
                        e.setAttribute("data-state", "show")
                    }
                    --a
                })
            })
        }

        function loadNImgs() {
            [].slice.call(document.querySelectorAll("#frames img")).forEach(function (a, b) {
                var c = a.getAttribute("data-src");
                null !== c && a.setAttribute("src", c)
            })
        }

        var backgrounds = [];

        function loadBImgs() {
            var a = elById("frames");
            backgrounds.push((a.currentStyle || window.getComputedStyle(a, !1))
                .backgroundImage.slice(4, -1).replace(/"/g, ""));
            a = a.getAttribute("data-background").split(",");
            [].slice.call(a).forEach(function (a, c) {
                (new Image).src = a;
                backgrounds.push(a)
            })
        }

        function getNodeIndex(a) {
            for (var b = 0; a = a.previousSibling;) 3 == a.nodeType && /^\s*$/.test(a.data) || b++;
            return b
        }

        /*
            function addPixels(a) {
                if (0 != a.length) {
                    var b = document.body.lastChild,
                        c;
                    for (i = 0; i < a.length; i++) c = document.createElement("img"), c.src = a[i],
                     c.setAttribute("width", "1"), c.setAttribute("height", "1"), c.style.opacity = "0",
                      b.parentNode.insertBefore(c, b.nextSibling)
                }
            }*/

        function storeFP(a) {
            "undefined" !== typeof Storage && (localStorage.setItem("choice", a), a = localStorage.getItem("vnum"),
                null !== a ? localStorage.setItem("vnum", parseInt(a) + 1) : localStorage.setItem("vnum", 2))
        }

        function fill_dates() {
            var a = fdate(0);
            [].slice.call(document.getElementsByClassName("date")).forEach(function (b, c) {
                b.innerHTML = a.day + " " + a.txt_month + ", " + a.year
            })
        }

        function fdate(a) {
            var b = new Date;
            b.setDate(b.getDate() - a);
            b.getDay();
            a = b.getMonth();
            var c = b.getFullYear(),
                d = b.getDate();
            10 > d && (d = "0" + d);
            return {
                txt_day: dayNames[b.getDay()],
                txt_month: monthNames[a],
                year: c,
                day: d,
                month: a
            }
        }

        function pop(a) {
            alert(a);
            return !1
        }

        function elById(a) {
            return document.getElementById(a)
        }

        function elByCl(a, b) {
            return document.getElementsByClassName(a)[b]
        }

        function bringIn(a, b) {
            setTimeout(function () {
                elById(a).style.display = "block"
            }, b)
        }

        function hideOut(a, b) {
            setTimeout(function () {
                elById(a).style.display = "none"
            }, b)
        }

        function vibrate() {
            vibrate && (navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate ||
                navigator.msVibrate, navigator.vibrate && navigator.vibrate([1E3, 500, 1E3, 500]))
        }


        function random(a, b) {
            return Math.round(Math.random() * (b - a) + a)
        }

        var wEl = 0,
            wCount = 0,
            wTimeout;

        function wOnRand() {
            // wEl.innerHTML = wCount;
            // wCount = random(minMaxUsers[0], minMaxUsers[1]);
            wTimeout = setTimeout(wOnRand, random(minMaxUsersSpeed[0], minMaxUsersSpeed[1]))
        }

        var interval;

        function startNofity() {
            var a = 0,
                b = elById("notify").children,
                c = elById("notify").childElementCount - 1,
                d = !1;
            [].slice.call(b).forEach(function (a, b) {
                cTag = document.createElement("span");
                cTag.setAttribute("class", "closeN");
                a.appendChild(cTag);
                addClNListn(cTag, a);
                var c = a.getAttribute("data-img");
                null !== c && (a.style.backgroundImage = "url(" + c + ")", a.className = "wImg")
            });
            nextN = 2500;
            var f = function () {
                clearInterval(interval);
                if (a <= c) d ? (b[a].style.display = "block", d = !1, nextN = 4E3) : (b[a].className += " out",
                    nextN = random(minMaxNotifySpeed[0], minMaxNotifySpeed[1]), d = !0, a++);
                else return clearInterval(interval), null;
                interval = setInterval(f, nextN)
            };
            interval = setInterval(f, nextN)
        }

        function addClNListn(a, b) {
            a.addEventListener("click", function () {
                b.style.display = "none"
            })
        }

        var onEl = 0,
            oUCount = 0,
            dTimeout;

        function uOnRand() {
            onEl.innerHTML = oUCount;
            oUCount += random(minMaxStep[0], minMaxStep[1]);
            1 > oUCount && (oUCount = 12);
            dTimeout = setTimeout(uOnRand, random(minMaxSpeed[0], minMaxSpeed[1]))
        }

        function addClPopListn() {
            elById("closePop").addEventListener("click", function () {
                elById("uOnline").style.display = "none";
                clearTimeout(dTimeout)
            })
        }

        function downFonts() {
            WebFontConfig = {
                google: {
                    families: ["Roboto:400,700,900:latin"]
                }
            };
            var a = document.createElement("script");
            a.src = ("https:" === document.location.protocol ? "https" : "http")
                + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
            a.type = "text/javascript";
            a.async = "true";
            var b = document.body.lastChild;
            b.parentNode.insertBefore(a, b.nextSibling)
        }

        var theBody, divtag, cBody;

        function createEDiv() {
            var a;
            a = exitImgPath ? '<div id="no_escape" style="background-image:url(' + exitImgPath + ')"></div>'
                : '<div id="pExitDiv"><iframe src="' + exitURL +
                '" width="100%" height="100%" align="middle" frameborder="0"></iframe></div>';
            (theBody = document.body) || (theBody = document.getElementsByTagName("body")[0]);
            divtag = document.createElement("div");
            divtag.setAttribute("id", "pContainer");
            divtag.innerHTML = a;
            theBody.appendChild(divtag);
            cBody = elById("theBody")
        }

        function addLoadEvent(a) {
            var b = window.onload;
            window.onload = "function" != typeof window.onload ? a : function () {
                b && b();
                a()
            }
        }

        function addClickEvent(a, b, c) {
            "function" != typeof a[b].onclick && (a[b].onclick = c)
        }

        var StopPop = !1;

        function ShowPopup() {
            if (0 == StopPop) return StopPop = !0, shEp(), window.onbeforeunload = unpopIt, exitImgPath
            && (document.location.href = exitURL, timeout_variable = setTimeout(change_url, 50)), exit_block_msg
        }

        function change_url() {
            document.location.href = exitURL
        }

        function unpopIt() {
        }

        function shEp() {
            clearTimeout(wTimeout);
            clearTimeout(dTimeout);
            clearInterval(interval);
            theBody.removeChild(cBody);
            divtag.style.display = "block"
        }

        disablelinksfunc = function () {
            for (var a = document.getElementsByTagName("A"), b = 0; b < a.length; b++)
                "_blank" !== a[b].target ? addClickEvent(a, b, function () {
                StopPop = !0
            }) : addClickEvent(a, b, function () {
                StopPop = !1
            })
        };
        addLoadEvent(disablelinksfunc);
        disableformsfunc = function () {
            for (var a = document.getElementsByTagName("FORM"), b = 0; b < a.length; b++)
                a[b].onclick ? a[b].onsubmit || (a[b].onsubmit = function () {
                StopPop = !0
            }) : a[b].onclick = function () {
                StopPop = !0
            }
        };
        var modalShowed = !1;

        function addModal() {
            var a = document.createElement("link");
            a.setAttribute("rel", "stylesheet");
            a.setAttribute("type", "text/css");
            a.setAttribute("href", "files/popmin.css");
            document.getElementsByTagName("head")[0].appendChild(a);
            a = document.getElementById("pImg");
            (a.currentStyle || window.getComputedStyle(a, !1)).backgroundImage.slice(4, -1).replace(/"/g, "");
            var b = document.documentElement,
                c = document.getElementById("modal");
            c.addEventListener("click", function (a) {
                c.style.display = "none"
            });
            if (floatPopTimer) setTimeout(function () {
                modalShowed = !0;
                c.style.display = "block"
            }, floatPopTimer);
            else {
                var d = function (a) {
                    20 < a.clientY || modalShowed || setTimeout(function () {
                        modalShowed = !0;
                        c.style.display = "block";
                        setTimeout(function () {
                            elById("popup_img").className = "shake"
                        }, 1050);
                        b.removeEventListener("mouseleave", d)
                    }, 200)
                };
                b.addEventListener("mouseleave", d)
            }
        }
    </script>
</div>
<script>
        document.addEventListener("SCal.beforeOpen", function () {
            window.exit = false;
        });
        document.addEventListener("SCal.unsupported", function () {
            WPush.registerServiceWorker('7f74a475-fb85-4574-af3a-96abdaae9aea');
        });
        document.addEventListener("SCal.subscribed", function () {
            WPush.registerServiceWorker('7f74a475-fb85-4574-af3a-96abdaae9aea');
        });
    </script>
<script src="https://cdn-dt.fcdn.info/cal2.min.js?_=1" id="33a0d9dd-b278-435c-8afd-226314f18ec0" async defer></script>
<script src="https://cdn-dt.fcdn.info/swpush.min.js"></script>
</body>
</html>
