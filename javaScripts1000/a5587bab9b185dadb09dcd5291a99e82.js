(function() {
    var dotsInterval = -1;
    try {
        var DOTS_INCREMENT_DELAY = 900;
        var OVERLAY_REMOVAL_MAX_TIME = 450; // this must match the transition duration.

        var splashInitialized = false;
        var appInitialized = false;

        window.ghsSplashInitialize = function ghsSplashInitialize() {
            // If already initialized don't do anything
            if (splashInitialized || appInitialized) {
                return;
            }

            if (window.outerWidth < 768) {
                splashInitialized = true;
                var splashScreen = document.getElementById('ghs-splash-screen');

                if (!splashScreen || !splashScreen.classList || !splashScreen.classList.remove) {
                    return;
                }

                var dots = splashScreen.querySelector('.splash-screen-dots');
                splashScreen.classList.remove('u-hidden');

                var addDot = function() {
                    if (!dots) {
                        return;
                    }

                    dots.innerText = dots.innerText + '.';
                    if (dots.innerText.length > 7) {
                        dots.innerText = '.';
                    }
                };

                addDot();
                dotsInterval = setInterval(addDot, DOTS_INCREMENT_DELAY);
            }
        };

        // this will remove the splash-screen.
        window.ghsReady = function splashScreenRemoval() {
            appInitialized = true;
            var splashScreen = document.getElementById('ghs-splash-screen');

            clearInterval(dotsInterval);

            if (splashScreen) {
                var dots = splashScreen.querySelector('.splash-screen-dots');
                if (dots) {
                    dots.outerHTML = '';
                }

                splashScreen.style.height = '0';
                splashScreen.style.opacity = '0';
                setTimeout(function() {
                    if (splashScreen && splashScreen.parentNode) {
                        splashScreen.outerHTML = '';
                    }
                }, OVERLAY_REMOVAL_MAX_TIME);
            }
        };

        ghsSplashInitialize();
    } catch (e) {
        console.warn('splash-screen error');
        var splashScreen = document.getElementById('ghs-splash-screen');
        clearTimeout(dotsInterval);
        if (splashScreen && splashScreen.parentNode) {
            splashScreen.outerHTML = '';
        }
    }
})();
