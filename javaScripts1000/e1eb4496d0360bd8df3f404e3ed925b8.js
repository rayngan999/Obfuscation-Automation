var cookieSettings = [];

var _iub = _iub || [];
_iub.csConfiguration = {"consentOnContinuedBrowsing":false,"enableCMP":true,"googleAdditionalConsentMode":true,"whitelabel":false,"lang":"it","siteId":2229779,"reloadOnConsent":true,"cookiePolicyId":57571798,"cookiePolicyUrl":"https://www.supertennis.tv/Privacy-Policy-Simple", "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#f3ff3d","acceptButtonCaptionColor":"#000000","customizeButtonColor":"#212121","customizeButtonCaptionColor":"white","rejectButtonColor":"#0073CE","rejectButtonCaptionColor":"white","position":"float-bottom-center","textColor":"white","backgroundColor":"#000001" }};
document.write('<scr' + 'ipt type="text/javascript" src="//cdn.iubenda.com/cs/tcf/stub-v2.js"></scr' + 'ipt>');
document.write('<scr' + 'ipt type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8"></scr' + 'ipt>');

document.write('<!-- BEGIN SHAREAHOLIC CODE -->');
document.write('<lin' + 'k rel="preload" href="https://cdn.shareaholic.net/assets/pub/shareaholic.js" as="scrip' + 't" />');
document.write('<met' + 'a name="shareaholic:site_id" content="b0aec09936d6cd81d5021e21e123f02d" />');
document.write('<scr' + 'ipt data-cfasync="false" async src="https://cdn.shareaholic.net/assets/pub/shareaholic.js"></scr' + 'ipt>');
document.write('<!-- END SHAREAHOLIC CODE -->');

(function ($) {
    var COOKIE_NAME_FIRST_VISIT = "fit-first-visit";

    $(function () {
        if (typeof loadCookieSettings === 'function') {
            loadCookieSettings();
        }
        else {
            console.log("loadCookieSettings function not found");
        }
        if (!pageEditorMode()) {
            /*if (isFirstVisit()) {
                setEnableAllAnalytics(false);
                createCookie(COOKIE_NAME_FIRST_VISIT, "false", getExpiredCookie());
                $("#cc-cookieconsent").hide();
                $(".cc-overlay-message-cookie").show();
            } else {*/
                initAll();
            //}
        }
    });

    function initAll() {
        $.each(cookieSettings, function (index, cookieSetting) {
            if (!cookieSetting.hasOwnProperty('functionName')) {
                console.log('Property functionName not found. Check the cookieSettings array');
            } else {
                if (typeof window[cookieSetting.functionName] === 'function') {
                    if (!cookieSetting.hasOwnProperty('cookieName') || !cookieSetting.hasOwnProperty('buttonOn') || !cookieSetting.hasOwnProperty('buttonOff')) {
                        console.log('Property cookieName/buttonOn/buttonOff not found. Check the cookieSettings array');
                    } else {
                        initButton(cookieSetting.cookieName, cookieSetting.buttonOn, cookieSetting.buttonOff,
                            function() {
                                callDynamicFunction(cookieSetting.cookieName,
                                    cookieSetting.buttonOn,
                                    cookieSetting.buttonOff,
                                    cookieSetting.functionName);
                            });
                        callDynamicFunction(cookieSetting.cookieName, cookieSetting.buttonOn, cookieSetting.buttonOff, cookieSetting.functionName);
                    }
                }
            }
        });
    }

    function initGoogleTagPubAds(enabled) {
        if (window.googletag !== null && window.googletag !== undefined && window.googletag !== '') {
            window.googletag.cmd.push(function () {
                if (enabled) {
                    googletag.pubads().setCookieOptions(0);
                    googletag.pubads().setRequestNonPersonalizedAds(0);
                }
                else {
                    googletag.pubads().setCookieOptions(1);
                    googletag.pubads().setRequestNonPersonalizedAds(1);
                }
                googletag.pubads().refresh();
            });
        }
        else {
            console.log("googletag non trovato");
        }
    }

    function setEnableAllAnalytics(enable) {
        $.each(cookieSettings, function (index, cookieSetting) {
            if (!cookieSetting.hasOwnProperty('cookieName')) {
                console.log('Property cookieName not found. Check the cookieSettings array');
            } else {
                if (!enable) {
                    disableAnalytics(cookieSetting.cookieName);
                } else {
                    enableAnalytics(cookieSetting.cookieName);
                }
            }
        });

        initAll();
    }

    function callDynamicFunction(cookieName, buttonOn, buttonOff, functionName) {
        var enabled = !isDisableAnalytics(cookieName);
        if (enabled) {
            setStyleButton(buttonOn, buttonOff);
        } else {
            setStyleButton(buttonOff, buttonOn);
        }
        window[functionName](enabled);
    }
    
    function initButton(cookieName, idBtnOn, idBtnOff, callback) {
        var btnOn = $("#" + idBtnOn);
        if (btnOn.length > 0) {
            btnOn.click(function () {
                enableAnalytics(cookieName);
                setStyleButton(idBtnOn, idBtnOff);
                callback();
            });
        }

        var btnOff = $("#" + idBtnOff);
        if (btnOff.length > 0) {
            btnOff.click(function () {
                disableAnalytics(cookieName);
                setStyleButton(idBtnOff, idBtnOn);
                callback();
            });
        }
    }

    function setStyleButton(idEnable, idDisable) {
        $("#" + idEnable).removeClass("cc-active").addClass("cc-active");
        $("#" + idDisable).removeClass("cc-active");
    }

    function disableAnalytics(cookieName) {
        createCookie(cookieName, "true", getExpiredCookie());
    }

    function enableAnalytics(cookieName) {
        createCookie(cookieName, "true", new Date(-100000000000));
    }

    function getExpiredCookie() {
        var d = new Date();
        d.setTime(d.getTime() + (182 * 24 * 60 * 60 * 1000));
        return d;
    }

    function createCookie(name, value, dateExpires) {
        var expires = "expires=" + dateExpires.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(cookieName) {
        var name = cookieName + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function isDisableAnalytics(cookieName) {
        if (getCookie(cookieName) !== "") {
            return true;
        }
        return false;
    }

    function isFirstVisit() {
        if (getCookie(COOKIE_NAME_FIRST_VISIT) == "") {
            return true;
        }

        return false;
    }

    function acceptCookieBar() {
        $("#cc-cookieconsent").hide();
        $(".cc-overlay-message-cookie").hide();
        createCookie("cookieconsent_status", "dismiss", getExpiredCookie());
        setEnableAllAnalytics(true);
    }

    window.setEnableAllAnalytics = setEnableAllAnalytics;
    window.acceptCookieBar = acceptCookieBar;
    window.isDisableAnalytics = isDisableAnalytics;
    window.isFirstVisit = isFirstVisit;
    window.setStyleButton = setStyleButton;
    window.initGoogleTagPubAds = initGoogleTagPubAds;
})(jQueryV2);