function bmnBrowserStringMajorVersion(ua, cut, match) {
    var uaArray = ua.split(' '), version = '0';
    for(key in uaArray) {
        if( uaArray[key].indexOf(match) == 0 ) {
            version = uaArray[key].substr(cut);
            break;
        }
    }
    return Number(version.split('.')[0]);
}
function bmnBrowserVer() {
    //console.log('userAgent:'+navigator.userAgent);
    //console.log(msieversion());
    var isCompatible = true;
    var ua = navigator.userAgent.toLowerCase();
    if ((/msie/.test(ua) || /Internet Explorer/.test(navigator.appName)) || (/rv/i.test(ua) && !(/firefox/i.test(ua))) ) { 
        var majorversion = parseFloat((ua.match(/.*(?:rv|ie)[\/: ](.+?)([ \);]|$)/) || [])[1]);
        isCompatible = true;
        //console.log('IEVer:'+majorversion);
        if( majorversion < 9 ) {
            isCompatible = false;
        }   

        if(parseInt(msieversion()) >= 9 )
        {
            isCompatible = true;
        }     
    }
    else if(/firefox/i.test(ua)) {
        var majorversion = bmnBrowserStringMajorVersion(ua, 8, 'firefox');
        isCompatible = true;
        //console.log('FirefoxVer:'+majorversion);
        if( majorversion < 33 ) {
            isCompatible = false;
        }
    }
    else if(/chrome/i.test(ua)) { // chrome desktop
        var majorversion = bmnBrowserStringMajorVersion(ua, 7, 'chrome');
        isCompatible = true;
        //console.log('ChromeVer:'+majorversion);
        if( majorversion < 28 ) {
            isCompatible = false;
        }
    }
    else if(/crios/i.test(ua)) { // chrome ios
        var majorversion = bmnBrowserStringMajorVersion(ua, 6, 'crios');
        isCompatible = true;
        //console.log('ChromeiOSVer:'+majorversion);
        if( majorversion < 28 ) {
            isCompatible = false;
        }
    }
    else if(/safari/i.test(ua) && /version/i.test(ua)) {
        var majorversion = bmnBrowserStringMajorVersion(ua, 8, 'version');
        isCompatible = true;
        //console.log('SafariVer:'+majorversion);
        if( majorversion < 5 ) {
            isCompatible = false;
        }
    }
    
    if(isCompatible || isMobile() || isIOS(ua) || isWebView()){
        //console.log('Browser OK :)');
    }
    else {
        // navigate to error page
        //console.log('Incompatible Browser');
        window.location.href = '?uri=nm:oid:incompatibilidad';
    }
}

function isMobile(){//validar In-App Browsers
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}

function isIOS(ua){//Validar si se abre dentro de twitter
    return (ua.indexOf('twitter for iphone')!=-1?true:false);
}

function isWebView(){
    return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/i.test(navigator.userAgent);
}

function msieversion() 
{
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) // If Internet Explorer, return version number
    {
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    }

    return 0;
}