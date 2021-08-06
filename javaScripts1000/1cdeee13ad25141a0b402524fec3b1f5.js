<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Carousel IWC watches</title>
    <!--StartOfInjectionAdKitModule--><script type="text/javascript">
    (function () {
        adkit = {
            onReady: function (callback) {
                window.addEventListener('adkit-ready', callback);
            }
        };

        var isAdKitLoaded = false;

        var handler = function (event) {
            if (!isAdKitLoaded && event.data) {
                var response;
                try {
                    response = JSON.parse(event.data);

                } catch (e) {
                }
                if (response &&
                    response.type === 'ebGetEnvironment' &&
                    response.data instanceof Object &&
                    response.data.paths &&
                    response.data.paths.cachedScript) {
                    isAdKitLoaded = true;
                    adkit.environment = response.data;
                    var parent = document.getElementsByTagName('head')[0] || document.documentElement;
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    var source = response.data.paths.cachedScript + '/adkit/' + response.data.version + '/adkit.js';
                    script.src = source.replace(/\/\/adkit/, '/adkit');
                    parent.appendChild(script);
                }
            }
        };

        if (!window.ebSafeFrame) {
            window.addEventListener('message', handler, false);
            parent.postMessage(JSON.stringify({ type: 'ebGetEnvironment' }), '*');
        } else {
            // ebSafeFrame is defined - we must be in a SafeFrame
            // getAdKitData returns an equivalent argument in structure as were received with postmessage binding
            handler(ebSafeFrame.getAdKitData());
        }
    })();

</script>
<!--EndOfInjectionAdKitModule--><!--RemoveAdKit-->
    <script type="text/javascript" src="js/vendor.js"></script>
    <script type="text/javascript" src="js/ad.js"></script>
    <link rel="stylesheet" href="css/slick.css"/>
    <link rel="stylesheet" href="css/slick-theme.css">
    <link rel="stylesheet" href="css/ad.css">
</head>
    <body>
        <div class="container-ad">
            <div class="fb-post">
                <div class="wrapper-ad">
                    <div class="xcs__ad">
                        <header class="head">
                            <div class="info">
                                <div class="profile__picture">
                                    <!-- <img src="images/profile_image.jpg" alt="profile-name"> -->
                                </div>
                                <div class="profile__data">IWC Schaffhausen
                                    <div class="sponsored">
                                        <span class="sponsored__text">Sponsored &nbsp;</span>
                                    </div>
                                </div>
                            </div>
                            <div class="dots-header">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </header>
                        <div class="wrapper-carousel">
                            <div class="center">
                                <div>
                                    <div class="item__carousel slide_1">
                                        <img src="images/slide_1.jpg" alt="slide_1" class="slide-img">
                                        <div class="slide-indicator">1/5</div>
                                        <div class="slide-description"><p>Modern minimalism</p></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="item__carousel slide_2">
                                        <img src="images/slide_2.jpg" alt="slide_2" class="slide-img">
                                        <div class="slide-indicator">2/5</div>
                                        <div class="slide-description"><p>Oversized conical crown</p></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="item__carousel slide_3">
                                        <img src="images/slide_3.jpg" alt="slide_3" class="slide-img">
                                        <div class="slide-indicator">3/5</div>
                                        <div class="slide-description"><p>Ergonomic 43mm design</p></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="item__carousel slide_4">
                                        <img src="images/slide_4.jpg" alt="slide_4" class="slide-img">
                                        <div class="slide-indicator">4/5</div>
                                        <div class="slide-description"><p>Engineered with precision</p></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="item__carousel slide_5">
                                        <img src="images/slide_5.jpg" alt="slide_5" class="slide-img">
                                        <div class="slide-indicator">5/5</div>
                                        <div class="slide-description"><p>Find your Big Pilot today</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer class="actions">
                            <div class="reactions">
                                <img src="./images/Icons.svg" alt="" srcset="">
                            </div>
                            <main class="caption">
                                <div class="text text-480">
                                    Sometimes, size does matter. Introducing the new Big Pilot's watch 43, designed and built for originals.
                                </div>
                                <div class="text text-600">
                                    Sometimes, size does matter. Introducing the new Big Pilot's watch 43, designed and built for originals.
                                </div>
                            </main>
                            <div class="cta">Discover More</div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/ad.js"></script>
    </body>
</html>
