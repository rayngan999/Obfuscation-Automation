function InitDeviceScan2() {
    //We'll use these 4 variables to speed other processing. They're super common.
    //    isIphone = DetectIphoneOrIpod();
    //    isAndroidPhone = DetectAndroidPhone();
    //    isTierIphone = DetectTierIphone();
    //    isTierTablet = DetectTierTablet();

    //    //Optional: Comment these out if you don't need them.
    //    isTierRichCss = DetectTierRichCss();
    //    isTierGenericMobile = DetectTierOtherPhones();

    var ScreenMediaType = 0; //desktop
    var href = document.location.href;
    var origin = document.location.origin;
    var path = document.location.pathname;
    var search = document.location.search;
    var hash = document.location.hash
    var pos = href.indexOf("?");
    var aux = '';
    if (DetectIphoneOrIpod()) ScreenMediaType = 2; //iphoneIpod

    if (DetectTierTablet()) ScreenMediaType = 3; // Tablet

    if (DetectAndroidPhone()) ScreenMediaType = 4; // Android

    if (DetectTierOtherPhones()) ScreenMediaType = 5; //generic

    if (DetectBlackBerry()) ScreenMediaType = 5; //generic

    //alert(navigator.userAgent.toLowerCase());
    if (ScreenMediaType != 0) {
        if (pos != -1) {
            aux = "&uam=true&mobile=" + ScreenMediaType
        } else {
            aux = "?uam=true&mobile=" + ScreenMediaType
        }
        document.location.href = origin + path + search + aux + hash;
    }

};

//Now, run the initialization method.

InitDeviceScan2();
