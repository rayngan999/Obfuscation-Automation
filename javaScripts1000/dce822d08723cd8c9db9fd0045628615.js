Insticator.logger = (function () {
    "use strict";

    function getParameterByName(name) {
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results === null) {
            return "";
        }
        return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    var showLog = getParameterByName("insticator_log");

    return {
        logMessage: function(msg) {
            if (showLog) {
                console.log("INSTICATOR_MESSAGE: ", msg);
            }
        }
    }
})();
var InsticatorApp;
(function (InsticatorApp) {
    var isPageviewInfoReady = false;
    var Prebid = (function () {
        function Prebid() {
        }
        Prebid.getWindowLocation = function () {
            return window.location;
        };
        Prebid.getWindowSelf = function () {
            return window.self;
        };
        Prebid.getWindowTop = function () {
            return window.top;
        };
        Prebid.getTopWindowLocation = function () {
            if (this.inIframe()) {
                var loc;
                try {
                    loc = this.getAncestorOrigins() || this.getTopFrameReferrer();
                }
                catch (e) {
                    console.log('could not obtain top window location: ' + e);
                }
                if (loc)
                    return this.parse(loc, { 'decodeSearchAsString': true });
            }
            return this.getWindowLocation();
        };
        Prebid.inIframe = function () {
            try {
                return this.getWindowSelf() !== this.getWindowTop();
            }
            catch (e) {
                return true;
            }
        };
        Prebid.getAncestorOrigins = function () {
            if (window.document.location && window.document.location.ancestorOrigins &&
                window.document.location.ancestorOrigins.length >= 1) {
                return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
            }
        };
        Prebid.getTopFrameReferrer = function () {
            try {
                window.top.location.toString();
                var referrerLoc = '';
                var currentWindow;
                do {
                    currentWindow = currentWindow ? currentWindow.parent : window;
                    if (currentWindow.document && currentWindow.document.referrer) {
                        referrerLoc = currentWindow.document.referrer;
                    }
                } while (currentWindow !== window.top);
                return referrerLoc;
            }
            catch (e) {
                return window.document.referrer;
            }
        };
        Prebid.parse = function (url, options) {
            var parsed = document.createElement('a');
            if (options && 'noDecodeWholeURL' in options && options.noDecodeWholeURL) {
                parsed.href = url;
            }
            else {
                parsed.href = decodeURIComponent(url);
            }
            return {
                href: parsed.href,
                protocol: (parsed.protocol || '').replace(/:$/, ''),
                hostname: parsed.hostname,
                port: +parsed.port,
                pathname: parsed.pathname.replace(/^(?!\/)/, '/'),
                hash: (parsed.hash || '').replace(/^#/, ''),
                host: parsed.host || window.location.host
            };
        };
        return Prebid;
    }());
    var Utils = (function () {
        function Utils() {
        }
        Utils.getReferrer = function () {
            return document.referrer;
        };
        Utils.getUrlQuery = function () {
            return document.location.search;
        };
        Utils.extractHostname = function (url) {
            var hostname;
            if (url.indexOf("//") > -1) {
                hostname = url.split('/')[2];
            }
            else {
                hostname = url.split('/')[0];
            }
            hostname = hostname.split(':')[0];
            hostname = hostname.split('?')[0];
            return hostname;
        };
        Utils.UUID = function () {
            var dec2hex = [];
            for (var i_1 = 0; i_1 <= 15; i_1++) {
                dec2hex[i_1] = i_1.toString(16);
            }
            var uuid = '';
            for (var i = 1; i <= 36; i++) {
                if (i === 9 || i === 14 || i === 19 || i === 24) {
                    uuid += '-';
                }
                else if (i === 15) {
                    uuid += 4;
                }
                else if (i === 20) {
                    uuid += dec2hex[(Math.random() * 4 | 0 + 8)];
                }
                else {
                    uuid += dec2hex[(Math.random() * 16 | 0)];
                }
            }
            return uuid;
        };
        Utils.makeAjaxCall = function (method, url, data, callback) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    callback(xmlHttp.responseText);
                }
            };
            xmlHttp.open(method, url, true);
            xmlHttp.setRequestHeader("Content-type", "application/json");
            xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
            var jsonData = JSON.stringify(data);
            xmlHttp.send(jsonData);
        };
        Utils.documentReady = function (fn) {
            if (document.readyState != 'loading') {
                console.log("dom ready!");
                fn();
            }
            else if (document.addEventListener) {
                console.log("dom not ready, set up listener");
                document.addEventListener('DOMContentLoaded', fn);
            }
            else {
                console.log("ignore ie");
                fn();
            }
        };
        Utils.hash = function (value) {
            return window.btoa(value);
        };
        Utils.unhash = function (value) {
            return window.atob(value);
        };
        return Utils;
    }());
    var Cookie = (function () {
        function Cookie() {
            this.isCookieEnabled = this.checkCookieEnabled();
        }
        Cookie.prototype.checkCookieEnabled = function () {
            return navigator.cookieEnabled;
        };
        Cookie.prototype.get = function (name) {
            var nameLenPlus = (name.length + 1);
            return document.cookie
                .split(';')
                .map(function (c) { return c.trim(); })
                .filter(function (cookie) {
                return cookie.substring(0, nameLenPlus) === name + "=";
            })
                .map(function (cookie) {
                return decodeURIComponent(cookie.substring(nameLenPlus));
            })[0] || null;
        };
        Cookie.prototype.set = function (name, value, expiresInMins) {
            var date = new Date();
            date.setTime(date.getTime() + (expiresInMins * 60 * 1000));
            var expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=None; Secure";
        };
        return Cookie;
    }());
    var Campaign = (function () {
        function Campaign(urlQuery) {
            var params = new URLSearchParams(urlQuery);
            console.log("params: ", params);
            this.source = params.get("utm_source");
            this.medium = params.get("utm_medium");
            this.campaign = params.get("utm_campaign");
            this.term = params.get("utm_term");
            this.content = params.get("utm_content");
        }
        Campaign.equals = function (oldCampaign, newCampaign) {
            return oldCampaign.source == newCampaign.source &&
                oldCampaign.medium == newCampaign.medium &&
                oldCampaign.campaign == newCampaign.campaign &&
                oldCampaign.term == newCampaign.term &&
                oldCampaign.content == newCampaign.content;
        };
        Campaign.isCampaignUpdated = function (oldCampaign, newCampaign) {
            var isCampaignUpdated = false;
            if (oldCampaign == null) {
                if (newCampaign != null) {
                    isCampaignUpdated = true;
                }
            }
            else {
                if (newCampaign != null && !this.equals(oldCampaign, newCampaign)) {
                    isCampaignUpdated = true;
                }
            }
            return isCampaignUpdated;
        };
        return Campaign;
    }());
    var Session = (function () {
        function Session(sessionLength, urlQuery) {
            this.id = this.generateId();
            this.referrer = this.getReferrer();
            this.campaign = new Campaign(urlQuery);
        }
        Session.prototype.generateId = function () {
            return Utils.UUID();
        };
        Session.prototype.calculateExpiration = function (sessionLength) {
            var date = new Date();
            date.setTime(date.getTime() + (sessionLength * 60 * 1000));
            return date.toUTCString();
        };
        Session.prototype.getReferrer = function () {
            return Utils.extractHostname(Utils.getReferrer());
        };
        return Session;
    }());
    var InstiSession = (function () {
        function InstiSession() {
            this.cookieName = "InstiSession";
            this.utils = new Utils();
            this.cookie = new Cookie();
        }
        InstiSession.prototype.calculateSessionLength = function () {
            var estTimeLocaleString = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
            var estTime = new Date(estTimeLocaleString);
            var sessionLength = 30;
            if (estTime.getHours() == 23 && estTime.getMinutes() > 30) {
                sessionLength = 60 - estTime.getMinutes();
            }
            return sessionLength;
        };
        InstiSession.prototype.getSessionForPageview = function () {
            var sessionLength = this.calculateSessionLength();
            var session = this.getSessionFromCookie();
            if (session == null) {
                session = new Session(sessionLength, Utils.getUrlQuery());
            }
            else {
                var currentReferrerDomain = Utils.extractHostname(Utils.getReferrer());
                var isReferrerDifferent = currentReferrerDomain !== "" && currentReferrerDomain !== session.referrer;
                if (isReferrerDifferent) {
                    session = new Session(sessionLength, Utils.getUrlQuery());
                }
                else {
                    var newCampaign = new Campaign(Utils.getUrlQuery());
                    var isCampaignChanged = Campaign.isCampaignUpdated(session.campaign, newCampaign);
                    if (isCampaignChanged) {
                        session = new Session(sessionLength, Utils.getUrlQuery());
                    }
                }
            }
            this.setSessionToCookie(session, sessionLength);
            console.log("session: ", session);
            return session;
        };
        InstiSession.prototype.getSessionForEmbed = function () {
            var sessionLength = this.calculateSessionLength();
            var session = this.getSessionFromCookie();
            if (session == null) {
                session = new Session(sessionLength, Utils.getUrlQuery());
            }
            this.setSessionToCookie(session, sessionLength);
            console.log("session: ", session);
            return session;
        };
        InstiSession.prototype.getSessionFromCookie = function () {
            var sessionString = this.cookie.get(this.cookieName);
            var session = null;
            if (sessionString !== null && typeof sessionString !== "undefined") {
                try {
                    session = JSON.parse(sessionString);
                }
                catch (e) {
                    try {
                        session = JSON.parse(Utils.unhash(sessionString));
                    }
                    catch (e) {
                        console.log("Invalid session value: ", sessionString);
                    }
                }
            }
            return session;
        };
        InstiSession.prototype.setSessionToCookie = function (session, expiresInMins) {
            if (this.cookie.isCookieEnabled) {
                this.cookie.set(this.cookieName, Utils.hash(JSON.stringify(session)), expiresInMins);
                console.log("Cookie enabled, set cookie");
            }
            else {
                console.log("Cookie disabled");
            }
        };
        return InstiSession;
    }());
    var instiSession = new InstiSession();
    var PageviewType;
    (function (PageviewType) {
        PageviewType[PageviewType["HEADER_CODE_ONLY"] = 0] = "HEADER_CODE_ONLY";
        PageviewType[PageviewType["EMBED_ONLY"] = 1] = "EMBED_ONLY";
        PageviewType[PageviewType["AD_ONLY"] = 2] = "AD_ONLY";
        PageviewType[PageviewType["EMBED_AND_AD"] = 3] = "EMBED_AND_AD";
    })(PageviewType || (PageviewType = {}));
    var IntegrationType;
    (function (IntegrationType) {
        IntegrationType[IntegrationType["HARD_CODE"] = 0] = "HARD_CODE";
        IntegrationType[IntegrationType["HARD_CODED_WITH_FRIENDLY_IFRAME"] = 1] = "HARD_CODED_WITH_FRIENDLY_IFRAME";
        IntegrationType[IntegrationType["HARD_CODED_WITH_SAFEFRAME"] = 2] = "HARD_CODED_WITH_SAFEFRAME";
        IntegrationType[IntegrationType["DFP_WITH_SAFEFRAME"] = 3] = "DFP_WITH_SAFEFRAME";
        IntegrationType[IntegrationType["DFP_WITHOUT_SAFEFRAME"] = 4] = "DFP_WITHOUT_SAFEFRAME";
    })(IntegrationType || (IntegrationType = {}));
    var TopFrame = (function () {
        function TopFrame() {
            this.getClosestTop();
        }
        TopFrame.prototype.getClosestTop = function () {
            this.frame = window;
            this.isExceptionThrown = false;
            try {
                while (this.frame.parent.document !== this.frame.document) {
                    if (this.frame.parent.document) {
                        this.frame = this.frame.parent;
                    }
                    else {
                        this.isExceptionThrown = true;
                        break;
                    }
                }
            }
            catch (e) {
                this.isExceptionThrown = true;
            }
        };
        return TopFrame;
    }());
    var topFrame = new TopFrame();
    var Pageview = (function () {
        function Pageview() {
            var _this = this;
            this.TIMEOUT = 1000;
            this.getPageviewInfo = function () {
                if (!isPageviewInfoReady) {
                    _this.pageUrl = _this.getBestPageUrl();
                    _this.ads = _this.getAdsOnPage();
                    _this.embeds = _this.getEmbedsOnPage();
                    _this.type = _this.getType();
                    _this.siteUUID = _this.getSiteUUID();
                    _this.session = instiSession.getSessionForPageview();
                    _this.timeStamp = new Date().toISOString();
                    _this.deviceType = _this.getDeviceType();
                    _this.integrationType = _this.getIntegrationType();
                    isPageviewInfoReady = true;
                }
                return _this;
            };
            this.firePageview = function () {
                var pageview = _this.getPageviewInfo();
                topFrame.frame.ads_list = topFrame.frame.ads_list || [];
                topFrame.frame.embeds_list = topFrame.frame.embeds_list || [];
                topFrame.frame.ads_list = topFrame.frame.ads_list.concat(pageview.ads);
                topFrame.frame.embeds_list = topFrame.frame.embeds_list.concat(pageview.embeds);
                if (!topFrame.frame.isPageviewSent) {
                    topFrame.frame.isPageviewSent = true;
                    console.log("Send pageview now");
                    var url_1 = "https://event.insticator.com/v1/event?event_name=event_pageview";
                    var testGroup_1 = "0";
                    setTimeout(function () {
                        var formatedPageview = _this.formatPageview(pageview, topFrame.frame.ads_list, topFrame.frame.embeds_list, testGroup_1);
                        console.log("formatedPageview: ", JSON.stringify(formatedPageview));
                        Utils.makeAjaxCall("POST", url_1, formatedPageview, function () { });
                    }, _this.TIMEOUT);
                }
                else {
                    console.log("pageview have been sent or scheduled");
                }
            };
        }
        Pageview.prototype.getType = function () {
            var type;
            if (this.ads.length === 0) {
                if (this.embeds.length === 0) {
                    type = PageviewType[PageviewType.HEADER_CODE_ONLY];
                }
                else {
                    type = PageviewType[PageviewType.EMBED_ONLY];
                }
            }
            else {
                if (this.embeds.length === 0) {
                    type = PageviewType[PageviewType.AD_ONLY];
                }
                else {
                    type = PageviewType[PageviewType.EMBED_AND_AD];
                }
            }
            return type;
        };
        Pageview.prototype.getPageUrl = function () {
            var topWindowPageUrl;
            try {
                topWindowPageUrl = window.top.location.href;
            }
            catch (e) { }
            return topWindowPageUrl == null ? document.referrer : topWindowPageUrl;
        };
        Pageview.prototype.getBestPageUrl = function () {
            var bestPageUrl = '';
            console.log("topFrame: ", topFrame);
            if (!topFrame.isExceptionThrown) {
                bestPageUrl = topFrame.frame.location.href;
            }
            else {
                try {
                    try {
                        bestPageUrl = window.top.location.href;
                    }
                    catch (e) {
                        var aOrigins = window.location.ancestorOrigins;
                        bestPageUrl = aOrigins[aOrigins.length - 1];
                    }
                }
                catch (e) {
                    bestPageUrl = topFrame.frame.document.referrer;
                }
            }
            return bestPageUrl;
        };
        Pageview.prototype.getAdsOnPage = function () {
            var adsOnPage = [];
            var adUnits = document.querySelectorAll('[id^="div-insticator-ad"]');
            for (var i = 0; i < adUnits.length; i++) {
                var adUnit = adUnits[i].id;
                adsOnPage.push(adUnit);
            }
            return adsOnPage;
        };
        Pageview.prototype.getEmbedsOnPage = function () {
            var embedOnPage = [];
            var insticatorContainerElement = document.getElementById("insticator-container");
            if (insticatorContainerElement) {
                var insticatorBodyScript = insticatorContainerElement.getElementsByTagName("script");
                if (insticatorBodyScript) {
                    for (var i = 0; i < insticatorBodyScript.length; i++) {
                        var regex = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;
                        var bodyCode = insticatorBodyScript[i].innerHTML;
                        var found = bodyCode.match(regex);
                        if (found) {
                            embedOnPage.push(found[0]);
                            break;
                        }
                    }
                }
            }
            return embedOnPage;
        };
        Pageview.prototype.getSiteUUID = function () {
            return "3bcef0ba-22e5-449e-a57d-639aa28bf73a";
        };
        Pageview.prototype.getDeviceType = function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "MOBILE" : "DESKTOP";
        };
        Pageview.prototype.isInFriendlyIframe = function () {
            return window.self.document !== window.top.document;
        };
        Pageview.prototype.isDFPFriendlyFrame = function () {
            return (!!window.name && window.name.indexOf('google') !== -1);
        };
        Pageview.prototype.isDFPSafeFrame = function () {
            return (window.location.href.indexOf("googlesyndication") !== -1 && window.location.href.indexOf("safeframe") !== -1);
        };
        Pageview.prototype.getIntegrationType = function () {
            try {
                if (this.isInFriendlyIframe()) {
                    return this.isDFPFriendlyFrame() ? IntegrationType.DFP_WITHOUT_SAFEFRAME : IntegrationType.HARD_CODED_WITH_FRIENDLY_IFRAME;
                }
                else {
                    return IntegrationType.HARD_CODE;
                }
            }
            catch (e) {
                return this.isDFPSafeFrame() ? IntegrationType.DFP_WITH_SAFEFRAME : IntegrationType.HARD_CODED_WITH_SAFEFRAME;
            }
        };
        Pageview.prototype.getHeaderCodeVersion = function () {
            return typeof window.insticatorHeaderCodeVersion !== "undefined" ? window.insticatorHeaderCodeVersion : "UNDEFINED";
        };
        Pageview.prototype.formatPageview = function (pageview, ads, embeds, testGroup) {
            return {
                "timestamp": pageview.timeStamp,
                "user_data": {
                    "session_details": pageview.session
                },
                "embed_context": {
                    "site": {
                        "id": pageview.siteUUID,
                        "page_url": pageview.pageUrl,
                        "hostname": Prebid.getTopWindowLocation().hostname
                    },
                    "environment": {
                        "device": pageview.deviceType
                    }
                },
                "event_data": {
                    "type": "load",
                    "data": {
                        "pageview_type": pageview.type,
                        "integration_type": IntegrationType[pageview.integrationType],
                        "ads": ads,
                        "embed": embeds,
                        "header_code_version": this.getHeaderCodeVersion(),
                        "test_group": testGroup
                    }
                }
            };
        };
        return Pageview;
    }());
    var pageview = new Pageview();
    function sendPageview() {
        if (isPageviewInfoReady) {
            pageview.firePageview();
        }
        else {
            Utils.documentReady(pageview.firePageview);
        }
    }
    InsticatorApp.sendPageview = sendPageview;
    function getSession() {
        return instiSession.getSessionForEmbed();
    }
    InsticatorApp.getSession = getSession;
})(InsticatorApp || (InsticatorApp = {}));
if(typeof InsticatorApp !== 'undefined' && typeof InsticatorApp.sendPageview === 'function') {
    InsticatorApp.sendPageview();
}

var insticatorHeaderCodeVersion = "STANDARD-V_4_0_5-2021-08-02 16:33:24";
try {
    var PWT = PWT || {};
    PWT.instBidLoaded = false;
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    var instBid = instBid || {};
    instBid.que = instBid.que || [];

    (function() {
    "use strict";
        
        function InView(ad) {
            var _this = this;
            this.settings = {
                enableInview: false,
                inviewVisibleCookieName: "insticatorHideInview"
            };
            this.defineInViewAdSlot = function() {
                googletag.cmd.push(function() {
                    var gamNetworkString = ad.getGamNetworkString()
                    if (!utils.isMobileDevice) {
                        
                            
                        
                            
                        
                            
                        
                            
                        
                    } else {
                        
                            
                        
                            
                        
                            
                        
                    }
                });
            };
            this.closeButtonCss = function () {
                var style = document.createElement('style');
                style.innerHTML = ".close {\n" +
                  "  position: absolute;\n" +
                  "  right: -15px;\n" +
                  "  top: -15px;}";
                return style;
            };
            this.createInviewDivWrapper = function(inviewDivId, width, height) {
                var div = document.createElement("div");
                div.id = inviewDivId;
                div.style.width = width + "px";
                div.style.height = height + "px";
                div.style.position = "fixed";
                div.style.bottom = 0;
                div.style.left = "50%";
                div.style.marginLeft = "-" + (width / 2) + "px";
                div.style.display = "none";
                return div;
            };
            this.createInviewDiv = function(inviewDivId, width, height) {
                var div = document.createElement("div");
                div.id = inviewDivId;
                div.style.width = width + "px";
                div.style.height = height + "px";
                div.style.display = "none";
                div.style.position = "fixed";
                div.style.bottom = 0;
                div.style.left = "50%";
                div.style.marginLeft = "-" + (width / 2) + "px";
                div.style.border = "solid 1px #808080";
                return div;
            };
            this.injectInviewDiv = function(isMobile, defineCss) {
                var existingDivToInject = ad.getFirstAdUnit();
                if (existingDivToInject) {
                    var width = '728';
                    var height = '90';
                    if (isMobile) {
                        width = '320';
                        height = '50';
                    }
                    var inviewDivElem = _this.createInviewDiv(ad.variables.inViewAdUnitName, width, height);
                    var inviewDivElemWrapper = _this.createInviewDivWrapper('div-ad-inview-wrapper', width, height);
                    inviewDivElemWrapper.appendChild(inviewDivElem);
                    var btn = document.createElement('a');
                    btn.classList.add('close');
                    var imgClose = document.createElement('img');
                    imgClose.src = 'https://embedproduction.s3.amazonaws.com/files/images/close-btn.png';
                    btn.appendChild(imgClose);
                    btn.addEventListener('click', function () {
                        utils.setSessionStorage(_this.settings.inviewVisibleCookieName, 'true');
                        _this.removeInviewDiv();
                    });
                    inviewDivElemWrapper.appendChild(btn);
                    existingDivToInject.parentNode.insertBefore(inviewDivElemWrapper, existingDivToInject);
                    if(defineCss) {
                        existingDivToInject.parentNode.insertBefore(_this.closeButtonCss(), existingDivToInject);
                    }
                    _this.defineInViewAdSlot();
                    Insticator.ad.loadAd(ad.variables.inViewAdUnitName);
                }
            };
            this.removeInviewDiv = function() {
                var inviewDivElemWrapper = document.getElementById('div-ad-inview-wrapper');
                if(inviewDivElemWrapper) {
                    ad.clearAdsUnderContainerId(ad.variables.inViewAdUnitName);
                    inviewDivElemWrapper.parentNode.removeChild(inviewDivElemWrapper);
                    instBid.removeAdUnit(ad.variables.inViewAdUnitName);
                    googletag.destroySlots([ad.variables.adSlots[ad.variables.inViewAdUnitName]]);
                }
            };
            this.showInviewAd = function() {
                if(!document.getElementById(ad.variables.inViewAdUnitName) && !utils.getSessionStorage(inView.settings.inviewVisibleCookieName)) {
                    instBid.addAdUnits(ad.variables.adUnitsMap[ad.variables.inViewAdUnitName]);
                    _this.injectInviewDiv(utils.isMobileDevice, false);
                } else if(utils.getSessionStorage(inView.settings.inviewVisibleCookieName)) {
                    _this.removeInviewDiv();
                }
                if(document.getElementById(ad.variables.inViewAdUnitName)) {
                    var inviewDivWrapper = document.getElementById('div-ad-inview-wrapper');
                    inviewDivWrapper.style.display = window.getComputedStyle(document.getElementById(ad.variables.inViewAdUnitName)).getPropertyValue('display');
                }
            };
        }

        function Ad() {
            this.settings = {
                PREBID_TIMEOUT: 4000,
                PREBID_MOBILE_TIMEOUT: 4000,
                REFRESH_TIMEOUT: 3000,
                AMAZON_TIMEOUT: 3000,
                adUnitToSizeMap: {
                    DESKTOP: JSON.parse('{"div-insticator-ad-1":{"width":300,"height":250},"div-insticator-ad-2":{"width":300,"height":250},"div-insticator-ad-cmt-1":{"width":300,"height":250},"div-insticator-ad-cmt-2":{"width":300,"height":250}}'),
                    MOBILE: JSON.parse('{"div-insticator-ad-1":{"width":300,"height":250},"div-insticator-ad-2":{"width":300,"height":250},"div-insticator-ad-cmt-1":{"width":300,"height":250}}')
                },
                hoverAdUnits: [],
                embedOverlayAd: JSON.parse('{"b3a2ac5f-fefe-4dc7-b8d7-d709f24d9d88":{"mobile":["div-insticator-ad-2"],"web":["div-insticator-ad-2"]}}'),
                autoRefreshIntervalLowerBound: 30000,
                autoRefreshIntervalUpperBound: 30000,
                excludeClickRefreshAdX: false,
                excludeAutoRefreshAdX: !true || false,
                renderSecondHighestBid: true,
                AUTO_REFRESH_CAP: 20000,
                impressionType: {
                    INITIAL_LOAD: "il",
                    EVENT_BASED_REFRESH: "ebr",
                    TIME_BASED_REFRESH: "tbr"
                },
                geoSSPWhitelistingMap: JSON.parse('{"PR":["acuityads","rubicon"],"PS":["acuityads","rubicon"],"PT":["acuityads","rubicon"],"PW":["acuityads","rubicon"],"PY":["acuityads","rubicon"],"QA":["acuityads","rubicon"],"AD":["acuityads","rubicon"],"AE":["acuityads","amx","appnexus","districtm","districtmDMX","ix","rubicon","sharethrough","sovrn","yieldnexus"],"AF":["acuityads","rubicon"],"AG":["acuityads","rubicon"],"AI":["acuityads","rubicon"],"AL":["acuityads","rubicon"],"AM":["acuityads","rubicon"],"AN":["acuityads","rubicon"],"AO":["acuityads","rubicon"],"AQ":["acuityads","rubicon"],"AR":["acuityads","rubicon"],"AS":["acuityads","rubicon"],"AT":["acuityads","amx","appnexus","districtm","districtmDMX","ebdr","eplanning","ix","pubmatic","rubicon","sovrn","yieldnexus"],"RE":["acuityads","rubicon"],"AU":["33across","acuityads","amazon","appnexus","conversant","districtm","districtmDMX","ebdr","emx_digital","eplanning","ix","onemobile","openx","pubmatic","rhythmone","rubicon","sharethrough","sonobi","sovrn","synacormedia","ucfunnel","verizonmedia","yieldnexus"],"AW":["acuityads","rubicon"],"AX":["acuityads","rubicon"],"AZ":["acuityads","rubicon"],"RO":["acuityads","rubicon"],"BA":["acuityads","rubicon"],"BB":["acuityads","rubicon"],"RS":["acuityads","rubicon"],"BD":["acuityads","rubicon"],"BE":["acuityads","amx","appnexus","districtm","districtmDMX","ix","openx","pubmatic","rubicon","yieldnexus"],"RU":["acuityads","rubicon"],"BF":["acuityads","rubicon"],"BG":["acuityads","rubicon"],"RW":["acuityads","rubicon"],"BH":["acuityads","rubicon"],"BI":["acuityads","rubicon"],"BJ":["acuityads","rubicon"],"BL":["acuityads","rubicon"],"BM":["acuityads","rubicon"],"BN":["acuityads","rubicon"],"BO":["acuityads","rubicon"],"SA":["acuityads","rubicon","sharethrough"],"BQ":["acuityads","rubicon"],"SB":["acuityads","rubicon"],"BR":["acuityads","amazon","amx","eplanning","rubicon"],"SC":["acuityads","rubicon"],"BS":["acuityads","rubicon"],"SD":["acuityads","rubicon"],"SE":["acuityads","amx","appnexus","districtm","districtmDMX","emx_digital","eplanning","ix","onemobile","openx","pubmatic","rhythmone","rubicon","sovrn","verizonmedia","yieldnexus"],"BT":["acuityads","rubicon"],"SG":["acuityads","amx","appnexus","districtm","districtmDMX","eplanning","ix","openx","rubicon","sonobi","synacormedia","ucfunnel"],"BV":["acuityads","rubicon"],"BW":["acuityads","rubicon"],"SH":["acuityads","rubicon"],"SI":["acuityads","rubicon"],"BY":["acuityads","rubicon"],"SJ":["acuityads","rubicon"],"BZ":["acuityads","rubicon"],"SK":["acuityads","rubicon"],"SL":["acuityads","rubicon"],"SM":["acuityads","rubicon"],"SN":["acuityads","rubicon"],"SO":["acuityads","rubicon"],"CA":["33across","acuityads","amazon","amx","appnexus","conversant","districtm","districtmDMX","ebdr","emx_digital","eplanning","gumgum","ix","onemobile","openx","pubmatic","rhythmone","rubicon","sharethrough","sonobi","sovrn","synacormedia","ucfunnel","verizonmedia","yieldnexus"],"SR":["acuityads","rubicon"],"CC":["acuityads","rubicon"],"SS":["acuityads","rubicon"],"CD":["acuityads","rubicon"],"ST":["acuityads","rubicon"],"CF":["acuityads","rubicon"],"SV":["acuityads","rubicon"],"CG":["acuityads","rubicon"],"CH":["acuityads","amx","appnexus","districtm","districtmDMX","eplanning","ix","openx","pubmatic","rubicon","sonobi","sovrn","yieldnexus"],"SX":["acuityads","rubicon"],"CI":["acuityads","rubicon"],"SY":["acuityads","rubicon"],"SZ":["acuityads","rubicon"],"CK":["acuityads","rubicon"],"CL":["acuityads","rubicon"],"CM":["acuityads","rubicon"],"CN":["acuityads","rubicon"],"CO":["acuityads","rubicon"],"CR":["acuityads","rubicon"],"TC":["acuityads","rubicon"],"TD":["acuityads","rubicon"],"CU":["acuityads","rubicon"],"TF":["acuityads","rubicon"],"CV":["acuityads","rubicon"],"TG":["acuityads","rubicon"],"CW":["acuityads","rubicon"],"TH":["acuityads","rubicon"],"CX":["acuityads","rubicon"],"CY":["acuityads","rubicon"],"TJ":["acuityads","rubicon"],"CZ":["acuityads","rubicon"],"TK":["acuityads","rubicon"],"TL":["acuityads","rubicon"],"TM":["acuityads","rubicon"],"TN":["acuityads","rubicon"],"TO":["acuityads","rubicon"],"TR":["acuityads","rubicon"],"TT":["acuityads","rubicon"],"DE":["acuityads","amazon","amx","appnexus","conversant","districtm","districtmDMX","ebdr","emx_digital","eplanning","ix","onemobile","openx","pubmatic","rhythmone","rubicon","sovrn","verizonmedia","yieldnexus"],"TV":["acuityads","rubicon"],"TW":["acuityads","amx","appnexus","districtm","districtmDMX","ix","rubicon","ucfunnel"],"DJ":["acuityads","rubicon"],"TZ":["acuityads","rubicon"],"DK":["acuityads","amx","appnexus","districtm","districtmDMX","ix","openx","pubmatic","rubicon","sovrn"],"DM":["acuityads","rubicon"],"DO":["acuityads","rubicon"],"UA":["acuityads","amx","appnexus","districtm","districtmDMX","openx","rubicon","yieldnexus"],"UG":["acuityads","rubicon"],"DZ":["acuityads","rubicon"],"UM":["acuityads","rubicon"],"US":["33across","acuityads","amazon","amx","appnexus","conversant","districtm","districtmDMX","ebdr","emx_digital","eplanning","gumgum","insticator","ix","onemobile","onetag","openx","pubmatic","rhythmone","rubicon","sharethrough","sonobi","sovrn","synacormedia","ucfunnel","verizonmedia","yieldnexus"],"EC":["acuityads","rubicon"],"EE":["acuityads","rubicon"],"EG":["acuityads","rubicon"],"EH":["acuityads","rubicon"],"UY":["acuityads","rubicon"],"UZ":["acuityads","rubicon"],"VA":["acuityads","rubicon"],"ER":["acuityads","rubicon"],"VC":["acuityads","rubicon"],"ES":["acuityads","amazon","amx","conversant","districtm","districtmDMX","eplanning","onemobile","rhythmone","rubicon","verizonmedia","yieldnexus"],"ET":["acuityads","rubicon"],"VE":["acuityads","rubicon"],"VG":["acuityads","rubicon"],"VI":["acuityads","rubicon"],"VN":["acuityads","rubicon"],"VU":["acuityads","rubicon"],"FI":["acuityads","amx","appnexus","districtm","districtmDMX","eplanning","ix","pubmatic","rubicon","sovrn","yieldnexus"],"FJ":["acuityads","rubicon"],"FK":["acuityads","rubicon"],"FM":["acuityads","rubicon"],"FO":["acuityads","rubicon"],"FR":["acuityads","amazon","amx","conversant","districtm","districtmDMX","ebdr","emx_digital","eplanning","onemobile","rhythmone","rubicon","verizonmedia"],"WF":["acuityads","rubicon"],"GA":["acuityads","rubicon"],"GB":["acuityads","amazon","amx","appnexus","conversant","districtm","districtmDMX","ebdr","emx_digital","eplanning","gumgum","ix","onemobile","openx","pubmatic","rhythmone","rubicon","sharethrough","sovrn","synacormedia","verizonmedia"],"WS":["acuityads","rubicon"],"GD":["acuityads","rubicon"],"GE":["acuityads","rubicon"],"GF":["acuityads","rubicon"],"GG":["acuityads","rubicon"],"GH":["acuityads","rubicon"],"GI":["acuityads","rubicon"],"GL":["acuityads","rubicon"],"GM":["acuityads","rubicon"],"GN":["acuityads","rubicon"],"GP":["acuityads","rubicon"],"GQ":["acuityads","rubicon"],"GR":["acuityads","rubicon"],"GS":["acuityads","rubicon"],"GT":["acuityads","rubicon"],"GU":["acuityads","rubicon"],"GW":["acuityads","rubicon"],"GY":["acuityads","rubicon"],"XK":["acuityads","rubicon"],"HK":["acuityads","amx","appnexus","districtm","districtmDMX","ix","openx","pubmatic","rubicon","sonobi","sovrn","ucfunnel","yieldnexus"],"HM":["acuityads","rubicon"],"HN":["acuityads","rubicon"],"HR":["acuityads","rubicon"],"HT":["acuityads","rubicon"],"YE":["acuityads","rubicon"],"HU":["acuityads","rubicon"],"ID":["acuityads","rubicon"],"YT":["acuityads","rubicon"],"IE":["acuityads","amazon","conversant","onemobile","rubicon","verizonmedia"],"IL":["acuityads","amx","districtm","districtmDMX","rubicon"],"IM":["acuityads","rubicon"],"IN":["acuityads","rubicon"],"IO":["acuityads","rubicon"],"ZA":["acuityads","rubicon"],"IQ":["acuityads","rubicon"],"IR":["acuityads","rubicon"],"IS":["acuityads","rubicon"],"IT":["acuityads","amazon","amx","appnexus","conversant","districtm","districtmDMX","eplanning","ix","onemobile","openx","rhythmone","rubicon","verizonmedia","yieldnexus"],"ZM":["acuityads","rubicon"],"JE":["acuityads","rubicon"],"ZW":["acuityads","rubicon"],"JM":["acuityads","rubicon"],"JO":["acuityads","rubicon"],"JP":["acuityads","amazon","amx","appnexus","districtm","districtmDMX","ix","openx","pubmatic","rubicon","sonobi","ucfunnel","yieldnexus"],"KE":["acuityads","rubicon"],"KG":["acuityads","rubicon"],"KH":["acuityads","rubicon"],"KI":["acuityads","rubicon"],"KM":["acuityads","rubicon"],"KN":["acuityads","rubicon"],"KP":["acuityads","rubicon"],"KR":["acuityads","rubicon"],"KW":["acuityads","rubicon"],"KY":["acuityads","rubicon"],"KZ":["acuityads","rubicon"],"LA":["acuityads","rubicon"],"LB":["acuityads","rubicon"],"LC":["acuityads","rubicon"],"LI":["acuityads","rubicon"],"LK":["acuityads","rubicon"],"LR":["acuityads","rubicon"],"LS":["acuityads","rubicon"],"LT":["acuityads","rubicon"],"LU":["acuityads","rubicon"],"LV":["acuityads","rubicon"],"LY":["acuityads","rubicon"],"MA":["acuityads","rubicon"],"MC":["acuityads","rubicon"],"MD":["acuityads","rubicon"],"ME":["acuityads","rubicon"],"MF":["acuityads","rubicon"],"MG":["acuityads","rubicon"],"MH":["acuityads","rubicon"],"MK":["acuityads","rubicon"],"ML":["acuityads","rubicon"],"MM":["acuityads","rubicon"],"MN":["acuityads","rubicon"],"MO":["acuityads","rubicon"],"MP":["acuityads","rubicon"],"MQ":["acuityads","rubicon"],"MR":["acuityads","rubicon"],"MS":["acuityads","rubicon"],"MT":["acuityads","rubicon"],"MU":["acuityads","rubicon"],"MV":["acuityads","rubicon"],"MW":["acuityads","rubicon"],"MX":["acuityads","amazon","amx","districtm","districtmDMX","eplanning","ix","rubicon","ucfunnel","yieldnexus"],"MY":["acuityads","rubicon"],"MZ":["acuityads","rubicon"],"NA":["acuityads","rubicon"],"NC":["acuityads","rubicon"],"NE":["acuityads","rubicon"],"NF":["acuityads","rubicon"],"NG":["acuityads","rubicon"],"NI":["acuityads","rubicon"],"NL":["acuityads","rubicon"],"NO":["acuityads","amx","appnexus","emx_digital","eplanning","ix","pubmatic","rubicon","sonobi","yieldnexus"],"NP":["acuityads","rubicon"],"NR":["acuityads","rubicon"],"NU":["acuityads","rubicon"],"NZ":["acuityads","amazon","amx","appnexus","conversant","districtm","districtmDMX","ix","onemobile","rhythmone","rubicon","synacormedia","ucfunnel","verizonmedia","yieldnexus"],"OM":["acuityads","rubicon"],"PA":["acuityads","rubicon"],"PE":["acuityads","rubicon"],"PF":["acuityads","rubicon"],"PG":["acuityads","rubicon"],"PH":["acuityads","rubicon"],"PK":["acuityads","rubicon"],"PL":["acuityads","rubicon"],"PM":["acuityads","rubicon"],"PN":["acuityads","rubicon"]}'),
                IN_VIEW_REFRESH_TRAFFIC_PERCENTAGE: 0.0 / 100,
                divToAdUnitMap: JSON.parse('{"DESKTOP":{"div-insticator-ad-1":"two.altpress.com_Web_300x250_1","div-insticator-ad-2":"two.altpress.com_Web_300x250_2","div-insticator-ad-cmt-1":"two.altpress.com_Web_300x250_cmt_1","div-insticator-ad-cmt-2":"two.altpress.com_Web_300x250_cmt_2"},"MOBILE":{"div-insticator-ad-1":"two.altpress.com_Mobile_300x250_1","div-insticator-ad-2":"two.altpress.com_Mobile_300x250_2","div-insticator-ad-cmt-1":"two.altpress.com_Mobile_300x250_cmt_1"}}'),
                mockup: {
                    on: false
                },
                showHouseAds: true,
                multisize: {
                    on: true,
                    custom: JSON.parse('{"dfp":{"desktop":{"300x600":[[300,600],[300,250],[160,600],[120,600]],"160x600":[[160,600],[120,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100],[320,50],[250,250]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250],[250,250]],"320x50":[[320,100],[320,50]]}},"33across":{"desktop":{"300x600":[[300,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250]]},"mobile":{"300x250":[[300,250]],"320x50":[[320,50]]}},"adkernel":{"desktop":{"300x600":[],"160x600":[],"728x90":[[728,90]],"300x250":[[300,250]]},"mobile":{"300x250":[[300,250]],"320x50":[]}},"amx":{"desktop":{"300x600":[[300,600],[300,250],[160,600],[120,600]],"160x600":[[160,600],[120,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100],[320,50],[250,250]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250],[250,250]],"320x50":[[320,100],[320,50]]}},"appnexus":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"beachfront":{"desktop":{"300x600":[[300,250]],"160x600":[],"728x90":[],"300x250":[[300,250],[320,50]]},"mobile":{"300x250":[[320,50],[300,250]],"320x50":[[320,50]]}},"conversant":{"desktop":{"300x600":[[300,250]],"160x600":[],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100]]},"mobile":{"300x250":[[336,280],[320,100],[300,250]],"320x50":[[320,100]]}},"districtm":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250],[320,50]]},"mobile":{"300x250":[[320,50],[300,250]],"320x50":[[320,50]]}},"emx_digital":{"desktop":{"300x600":[[300,600],[300,250]],"160x600":[],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"eplanning":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"gumgum":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250]]},"mobile":{"300x250":[[336,280],[320,100],[300,250]],"320x50":[[320,100]]}},"improvedigital":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,50]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"insticator":{"desktop":{"300x600":[[300,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250]]},"mobile":{"300x250":[[300,250]],"320x50":[[320,50]]}},"ix":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"mediago":{"desktop":{"300x600":[[300,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250]]},"mobile":{"300x250":[[300,250]],"320x50":[[320,50]]}},"openx":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,50]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,50]]}},"pubmatic":{"desktop":{"300x600":[[300,250]],"160x600":[],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,50]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,50]]}},"pulsepoint":{"desktop":{"300x600":[[300,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250]]},"mobile":{"300x250":[[300,250]],"320x50":[[320,50]]}},"rhythmone":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,50]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,50]]}},"rubicon":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,50]]},"mobile":{"300x250":[[320,50],[300,250]],"320x50":[[320,50]]}},"sharethrough":{"desktop":{"300x600":[[300,600],[300,250],[160,600],[120,600]],"160x600":[[160,600],[120,600]],"728x90":[[728,90],[468,60]],"300x250":[[336,280],[300,250],[320,100],[320,50],[250,250]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250],[250,250]],"320x50":[[320,100],[320,50]]}},"sonobi":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"sovrn":{"desktop":{"300x600":[[300,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[300,250]]},"mobile":{"300x250":[[300,250]],"320x50":[[320,50]]}},"synacormedia":{"desktop":{"300x600":[[300,250]],"160x600":[],"728x90":[],"300x250":[[336,280],[300,250],[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,50],[300,250]],"320x50":[[320,50]]}},"ucfunnel":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}},"yieldnexus":{"desktop":{"300x600":[[300,600],[300,250],[160,600]],"160x600":[[160,600]],"728x90":[[728,90]],"300x250":[[336,280],[300,250],[320,100],[320,50]]},"mobile":{"300x250":[[336,280],[320,100],[320,50],[300,250]],"320x50":[[320,100],[320,50]]}}}')
                },
                testGroupNumber: String(window.insticator_tg || 0),
                video: {
                    id: "Static_IBV",
                    tag: "",
                    aboveCmt: true
                },
                adUnitSettings: JSON.parse('{"DESKTOP":{"multiSizeOn":["div-insticator-ad-1","div-insticator-ad-2","div-insticator-ad-cmt-1","div-insticator-ad-cmt-2"],"adRefreshOn":["div-insticator-ad-1","div-insticator-ad-2","div-insticator-ad-cmt-1","div-insticator-ad-cmt-2"],"fixedHeightOn":["div-insticator-ad-1","div-insticator-ad-2","div-insticator-ad-cmt-1","div-insticator-ad-cmt-2"],"enabledGAM":["div-insticator-ad-1","div-insticator-ad-2","div-insticator-ad-cmt-1","div-insticator-ad-cmt-2"],"multiSizeConfig":{"div-insticator-ad-1":[[160,600],[320,100],[300,250],[120,600],[300,600],[336,280],[728,90],[250,250],[468,60],[320,50]],"div-insticator-ad-2":[[160,600],[320,100],[300,250],[120,600],[300,600],[336,280],[728,90],[250,250],[468,60],[320,50]],"div-insticator-ad-cmt-1":[[160,600],[320,100],[300,250],[120,600],[300,600],[336,280],[728,90],[250,250],[468,60],[320,50]],"div-insticator-ad-cmt-2":[[160,600],[320,100],[300,250],[120,600],[300,600],[336,280],[728,90],[250,250],[468,60],[320,50]]}},"MOBILE":{"multiSizeOn":["div-insticator-ad-1","div-insticator-ad-2","div-insticator-ad-cmt-1"],"adRefreshOn":["div-insticator-ad-1","div-insticator-ad-2","div-insticator-ad-cmt-1"],"fixedHeightOn":["div-insticator-ad-1","div-insticator-ad-2","div-insticator-ad-cmt-1"],"enabledGAM":["div-insticator-ad-1","div-insticator-ad-2","div-insticator-ad-cmt-1"],"multiSizeConfig":{"div-insticator-ad-1":[[160,600],[320,100],[300,250],[120,600],[300,600],[336,280],[728,90],[250,250],[468,60],[320,50]],"div-insticator-ad-2":[[160,600],[320,100],[300,250],[120,600],[300,600],[336,280],[728,90],[250,250],[468,60],[320,50]],"div-insticator-ad-cmt-1":[[160,600],[320,100],[300,250],[120,600],[300,600],[336,280],[728,90],[250,250],[468,60],[320,50]]}}}'),
                enableCustomPrebid: {
                    on: false,
                    customScript: ""
                }
            };

            this.variables = {
                divsWithAdsShowInDFPForFirstTime: [],
                ready: false,
                hbFills: {},
                timedOut: false,
                inViewAdUnitName: "div-insticator-ad-inview",
                autoRefreshCounter: 0,
                adSlots: {},
                initSet: false,
                adUnitsMap: {},
                amazonBidResponsesMap: {},
                amazonUAMSlotsMap: {},
                blockAds: false,
                enablePubmaticIh: true,
                lazyLoad: {
                    on: false,
                    desktopRenderMargin: 0,
                    mobileRenderMargin: 0
                },
                autoRefreshTimer: "",
                blockAmazonUAM: false,
                inViewRefresh: {
                    on: false,
                    adUnits: {},
                    attachObserver: true,
                    appendPosition: true
                },
                demoMode: false,
                houseBackfillOnlyMode: 0,
                fixedSize: {
                    "DESKTOP": {
                        "300x600": {"width":300,"height":600},
                        "160x600": {"width":160,"height":600},
                        "728x90": {"width":728,"height":90},
                        "300x250": {"width":336,"height":280}
                    },
                    "MOBILE": {
                        "300x250": {"width":336,"height":280},
                        "320x50": {"width":320,"height":100}
                    }
                },
                enableFixedHeight: true,
                domainWhitelist: {
                    on: true,
                    list: JSON.parse('["hunchme.com","altpress.com","insticator.com"]')
                },
                detectInvalidTraffic: false,
                enableSmartRefresh: false,
                enableMcm: false
            };

            var _this = this;

            this.initializeVariables = function() {
                _this.variables.inViewRefresh.on = Math.random() < _this.settings.IN_VIEW_REFRESH_TRAFFIC_PERCENTAGE;
                Insticator.logger.logMessage("inViewRefresh only: " + _this.variables.inViewRefresh.on);
                _this.settings.mockup.on = _this.checkMock();
                _this.settings.multisize.on = _this.settings.multisize.on && !_this.settings.mockup.on;
                _this.checkDemoMode();
                _this.checkHouseBackfillOnlyMode();
                _this.checkDomainWhitelist();
                _this.injectVideoTag();
            };

            this.initializeBeforeRefreshAd = function() {
                try {
                    tracking.checkEmbedCodeAndSettingOnPage();
                    _this.updateHoverAdUnits();
                    _this.settings.hoverAdUnits.forEach(function(hoverAdUnit) {
                        _this.clearAdsUnderContainerId(hoverAdUnit);
                    });
                } catch(e) {
                    Insticator.logger.logMessage("Failed to execute initializeBeforeRefreshAd due to exception: " + e);
                }
            };

            this.updateHoverAdUnits = function() {
                if (_this.settings.hoverAdUnits && _this.settings.hoverAdUnits.length == 0) {
                    var hoverAdUnits = [];
                    var platformHoverAds = [];
                    if(tracking.embedUUID !== "UNKNOWN") {
                        platformHoverAds = _this.settings.embedOverlayAd[tracking.embedUUID];
                    } else if(Object.keys(_this.settings.embedOverlayAd).length === 1) {
                        platformHoverAds = _this.settings.embedOverlayAd[Object.keys(_this.settings.embedOverlayAd)[0]];
                    }
                    if(platformHoverAds && Object.keys(platformHoverAds).length > 0) {
                        if(!utils.isMobileDevice) {
                            hoverAdUnits = platformHoverAds["web"];
                        } else {
                            hoverAdUnits = platformHoverAds["mobile"];
                        }
                    }
                    _this.settings.hoverAdUnits = hoverAdUnits;
                }
            };

            this.getFinalSizeArray = function(originalArray, multiSizeArray, divId) {
                var device = utils.isMobileDevice ? "MOBILE" : "DESKTOP";
                if (ad.settings.adUnitSettings[device]['multiSizeOn'].includes(divId)) {
                    return ad.settings.adUnitSettings[device]['multiSizeConfig'][divId].filter(function(n) {
                        return multiSizeArray.some(function(e) {return JSON.stringify(e) === JSON.stringify(n);});
                    });
                }
                return originalArray;
            };

            this.checkMock = function() {
                var re = new RegExp(".*(hunchme.com|insticator.com)\/apps\/mockupgenerator.*");
                try {
                    return re.test(window.top.location.href);
                } catch (e) {
                    Insticator.logger.logMessage('Not able to check mock status');
                }
                return false;
            };

            this.initializeInviewRefreshAdUnits = function() {
                try {
                    for (var key in ad.variables.adUnitsMap) {
                        ad.variables.inViewRefresh.adUnits[key] = {
                            timeReady: false,
                            inview: false
                        };
                    }
                } catch (e) {
                    Insticator.logger.logMessage(" initializeInviewRefreshAdUnits exception: " + e);
                }
            };

            this.getSizeForDiv = function(divId) {
                if (utils.isMobileDevice) {
                    return _this.settings.adUnitToSizeMap["MOBILE"][divId];
                } else {
                    return _this.settings.adUnitToSizeMap["DESKTOP"][divId];
                }
            };

            this.isSlotRenderEndedAdded = false

            this.getGamNetworkString = function(){
                
                   return "27794161"
                
            }

            this.defineAdSlots = function() {
                googletag.cmd.push(function () {
                    var gamNetworkString = ad.getGamNetworkString()
                    var deviceString = "desktop";
                    if (!utils.isMobileDevice) {
                        
                            
                                
                                    var sizeArray = [300, 250];
                                    var originalArray = [300, 250];
                                    if(_this.settings.multisize.on) {
                                        sizeArray = _this.getCustomSizeArray("dfp", deviceString, "300x250", sizeArray);
                                        sizeArray = _this.getFinalSizeArray(originalArray, sizeArray, 'div-insticator-ad-1');
                                    }
                                    var defineSlot = googletag.defineSlot('/'+ gamNetworkString +'/two.altpress.com_Web_300x250_1', sizeArray, 'div-insticator-ad-1');
                                    if (defineSlot) {
                                        _this.variables.adSlots['div-insticator-ad-1'] = defineSlot.addService(googletag.pubads()).setTargeting('h', (new Date).getUTCHours().toString()).setTargeting('shb', ad.settings.showHouseAds ? '1' : '0').setTargeting('tg', ad.settings.testGroupNumber).setTargeting('fhb', ad.variables.houseBackfillOnlyMode);
                                    }
                                
                            
                        
                            
                                
                                    var sizeArray = [300, 250];
                                    var originalArray = [300, 250];
                                    if(_this.settings.multisize.on) {
                                        sizeArray = _this.getCustomSizeArray("dfp", deviceString, "300x250", sizeArray);
                                        sizeArray = _this.getFinalSizeArray(originalArray, sizeArray, 'div-insticator-ad-2');
                                    }
                                    var defineSlot = googletag.defineSlot('/'+ gamNetworkString +'/two.altpress.com_Web_300x250_2', sizeArray, 'div-insticator-ad-2');
                                    if (defineSlot) {
                                        _this.variables.adSlots['div-insticator-ad-2'] = defineSlot.addService(googletag.pubads()).setTargeting('h', (new Date).getUTCHours().toString()).setTargeting('shb', ad.settings.showHouseAds ? '1' : '0').setTargeting('tg', ad.settings.testGroupNumber).setTargeting('fhb', ad.variables.houseBackfillOnlyMode);
                                    }
                                
                            
                        
                            
                                
                                    var sizeArray = [300, 250];
                                    var originalArray = [300, 250];
                                    if(_this.settings.multisize.on) {
                                        sizeArray = _this.getCustomSizeArray("dfp", deviceString, "300x250", sizeArray);
                                        sizeArray = _this.getFinalSizeArray(originalArray, sizeArray, 'div-insticator-ad-cmt-1');
                                    }
                                    var defineSlot = googletag.defineSlot('/'+ gamNetworkString +'/two.altpress.com_Web_300x250_cmt_1', sizeArray, 'div-insticator-ad-cmt-1');
                                    if (defineSlot) {
                                        _this.variables.adSlots['div-insticator-ad-cmt-1'] = defineSlot.addService(googletag.pubads()).setTargeting('h', (new Date).getUTCHours().toString()).setTargeting('shb', ad.settings.showHouseAds ? '1' : '0').setTargeting('tg', ad.settings.testGroupNumber).setTargeting('fhb', ad.variables.houseBackfillOnlyMode);
                                    }
                                
                            
                        
                            
                                
                                    var sizeArray = [300, 250];
                                    var originalArray = [300, 250];
                                    if(_this.settings.multisize.on) {
                                        sizeArray = _this.getCustomSizeArray("dfp", deviceString, "300x250", sizeArray);
                                        sizeArray = _this.getFinalSizeArray(originalArray, sizeArray, 'div-insticator-ad-cmt-2');
                                    }
                                    var defineSlot = googletag.defineSlot('/'+ gamNetworkString +'/two.altpress.com_Web_300x250_cmt_2', sizeArray, 'div-insticator-ad-cmt-2');
                                    if (defineSlot) {
                                        _this.variables.adSlots['div-insticator-ad-cmt-2'] = defineSlot.addService(googletag.pubads()).setTargeting('h', (new Date).getUTCHours().toString()).setTargeting('shb', ad.settings.showHouseAds ? '1' : '0').setTargeting('tg', ad.settings.testGroupNumber).setTargeting('fhb', ad.variables.houseBackfillOnlyMode);
                                    }
                                
                            
                        
                    } else {
                        deviceString = "mobile";
                        
                            
                                
                                    var sizeArray = [300, 250];
                                    var originalArray = [300, 250];
                                    if(_this.settings.multisize.on) {
                                        sizeArray = _this.getCustomSizeArray("dfp", deviceString, "300x250", sizeArray);
                                        sizeArray = _this.getFinalSizeArray(originalArray, sizeArray, 'div-insticator-ad-1');
                                    }
                                    var defineSlot = googletag.defineSlot('/'+ gamNetworkString +'/two.altpress.com_Mobile_300x250_1', sizeArray, 'div-insticator-ad-1');
                                    if (defineSlot) {
                                        _this.variables.adSlots['div-insticator-ad-1'] = defineSlot.addService(googletag.pubads()).setTargeting('h', (new Date).getUTCHours().toString()).setTargeting('shb', ad.settings.showHouseAds ? '1' : '0').setTargeting('tg', ad.settings.testGroupNumber).setTargeting('fhb', ad.variables.houseBackfillOnlyMode);
                                    }
                                
                            
                        
                            
                                
                                    var sizeArray = [300, 250];
                                    var originalArray = [300, 250];
                                    if(_this.settings.multisize.on) {
                                        sizeArray = _this.getCustomSizeArray("dfp", deviceString, "300x250", sizeArray);
                                        sizeArray = _this.getFinalSizeArray(originalArray, sizeArray, 'div-insticator-ad-2');
                                    }
                                    var defineSlot = googletag.defineSlot('/'+ gamNetworkString +'/two.altpress.com_Mobile_300x250_2', sizeArray, 'div-insticator-ad-2');
                                    if (defineSlot) {
                                        _this.variables.adSlots['div-insticator-ad-2'] = defineSlot.addService(googletag.pubads()).setTargeting('h', (new Date).getUTCHours().toString()).setTargeting('shb', ad.settings.showHouseAds ? '1' : '0').setTargeting('tg', ad.settings.testGroupNumber).setTargeting('fhb', ad.variables.houseBackfillOnlyMode);
                                    }
                                
                            
                        
                            
                                
                                    var sizeArray = [300, 250];
                                    var originalArray = [300, 250];
                                    if(_this.settings.multisize.on) {
                                        sizeArray = _this.getCustomSizeArray("dfp", deviceString, "300x250", sizeArray);
                                        sizeArray = _this.getFinalSizeArray(originalArray, sizeArray, 'div-insticator-ad-cmt-1');
                                    }
                                    var defineSlot = googletag.defineSlot('/'+ gamNetworkString +'/two.altpress.com_Mobile_300x250_cmt_1', sizeArray, 'div-insticator-ad-cmt-1');
                                    if (defineSlot) {
                                        _this.variables.adSlots['div-insticator-ad-cmt-1'] = defineSlot.addService(googletag.pubads()).setTargeting('h', (new Date).getUTCHours().toString()).setTargeting('shb', ad.settings.showHouseAds ? '1' : '0').setTargeting('tg', ad.settings.testGroupNumber).setTargeting('fhb', ad.variables.houseBackfillOnlyMode);
                                    }
                                
                            
                        
                    }
                    googletag.enableServices();

                    if(!_this.isSlotRenderEndedAdded){
                        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                            if (event.slot.getSlotElementId().startsWith("div-insticator-ad-")) {
                                var device = "DESKTOP";
                                if (utils.isMobileDevice) {
                                    device = "MOBILE";
                                }
                                if (_this.variables.enableFixedHeight && _this.settings.adUnitSettings[device]['fixedHeightOn'].includes(event.slot.getSlotElementId())) {
                                    _this.appendCenterStyle(event.slot.getSlotElementId());
                                } else {
                                    _this.setDimensionFromDFP(event.slot.getSlotElementId());
                                }
                                if (_this.variables.lazyLoad.on) {
                                    ad.lazyAd.updateAdElement(event.slot.getSlotElementId())
                                }      
                                dfp.removeAmazonTargeting(event)
                            }
                        });
                        _this.isSlotRenderEndedAdded = true
                    }    
                });
            };

            this.init = function() {
                if (_this.variables.initSet) return;
                if (!window.googletag || !googletag.apiReady) {
                    (function() {
                        var gads = document.createElement('script');
                        gads.async = true;
                        gads.type = 'text/javascript';
                        gads.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
                        var node = document.getElementsByTagName('script')[0];
                        node.parentNode.insertBefore(gads, node);
                    })();
                }
                
                this.defineAdSlots();
                googletag.cmd.push(function() {
                    
                    instBid.que.push(function() {
                        instBid.setTargetingForGPTAsync();
                    });
                });
                utils.initTabListeners();
                _this.variables.ready = true;
                _this.variables.initSet = true;
                _this.setPositionTargeting();
                Insticator.ad.loadAllAds();
            };

            this.setTimeoutForInit = function() {
                if(utils.isMobileDevice) {
                    setTimeout(function() {
                        Insticator.logger.logMessage("Mobile timeout");
                        _this.variables.timedOut = true;
                        _this.init();
                    }, _this.settings.PREBID_MOBILE_TIMEOUT);
                } else {
                    setTimeout(function() {
                        Insticator.logger.logMessage("Desktop timeout");
                        _this.variables.timedOut = true;
                        _this.init();
                    }, _this.settings.PREBID_TIMEOUT);
                }
            };

            this.loadInstBid = function() {
                if (!PWT.instBidLoaded) {
                    PWT.instBidLoaded = true;
                    var instBidEle = document.createElement("script");
                    instBidEle.type = "text/javascript";
                    instBidEle.async = true;
                    if (ad.settings.enableCustomPrebid.on) {
                        instBidEle.src = ad.settings.enableCustomPrebid.customScript;
                    } else {
                        instBidEle.src = "https://df80k0z3fi8zg.cloudfront.net/files/instbid-4.32.0-20-gde436b5b.js";
                    }
                    var instBidTargetEl = document.getElementsByTagName("head")[0];
                    instBidTargetEl.insertBefore(instBidEle, instBidTargetEl.firstChild);
                }
            };
            this.loadPubmaticIH = function(callback) {
                var purl = window.location.href;
                var url = '//ads.pubmatic.com/AdServer/js/pwt/95054/2912';
                var profileVersionId = '';
                if(purl.indexOf('pwtv=')>0){
                    var regexp = /pwtv=(.*?)(&|$)/g;
                    var matches = regexp.exec(purl);
                    if(matches.length >= 2 && matches[1].length > 0){
                        profileVersionId = '/'+matches[1];
                    }
                }
                var script = document.createElement('script');
                script.async = true;
                script.type = 'text/javascript';
                script.onreadystatechange = function() {
                  if (this.readyState == 'complete') {
                    callback();
                  }
                }
                script.onload = callback;
                script.src = url+profileVersionId+'/pwt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(script, node);
                PWT.jsLoaded = function() {
                    _this.loadInstBid();
                };
            };

            this.loadApsTag = function () {
                !function (a9, a, p, s, t, A, g) { if (a[a9]) return; function q(c, r) { a[a9]._Q.push([c, r]) } a[a9] = { init: function () { q("i", arguments) }, fetchBids: function () { q("f", arguments) }, setDisplayBids: function () { }, targetingKeys: function () { return [] }, _Q: [] }; A = p.createElement(s); A.async = !0; A.src = t; g = p.getElementsByTagName(s)[0]; g.parentNode.insertBefore(A, g) }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
                apstag.init({
                    pubID: '70fb13d1-ab65-42ac-a7ca-0b4e680d5c92',
                    adServer: 'googletag',
                    schain: {
                        ver: '1.0',
                        complete: 1,
                        nodes: [
                            {
                                asi: 'insticator.com',
                                sid: '0e2a4d2b-4ada-430b-8e58-8a5a10eb04eb',
                                hp: 1
                            }
                        ]
                     }
                });
            };

            this.amazonBidsSrcdoc = "<html><head><script>var loadApsTag ="+this.loadApsTag+"; loadApsTag(); console.log('*** AmazonBidsIframe loaded');</script></head><body></body></html>"
            this.loadAmazonBidsIframe = function(amazonBidsSrcdoc){
                Insticator.logger.logMessage("Adding Amazon bids iframe");
                var iStyle = "width: 0px; height: 0px; border: 0px; margin: 0px; position:absolute; left: -10000px"
                const iframe = document.createElement('iframe')
                iframe.src = 'javascript:false'
                iframe.style = iStyle
                iframe.id = 'amazonBidsIframe'
                iframe.srcdoc = amazonBidsSrcdoc 
                document.body.append(iframe)
            }

            this.loadSovrnBeacon = function () {
                var script = document.createElement('script');
                script.defer = true;
                script.async = true;
                script.src = '//get.s-onetag.com/42a30fdd-c1da-4d85-ab06-c212412bd9ab/tag.min.js'
                document.getElementsByTagName("head")[0].appendChild(script);
            }

            this.setAmazonRender = function(doc, id){
                Insticator.logger.logMessage("Adding amazonRender function");
                window.Insticator.amazonRender = function(doc, id){
                  document.querySelector("#amazonBidsIframe").contentWindow.apstag.renderImp(doc, id)
                }
            }

            this.loadAdLightning = function() {
                var e = document.createElement('script');
                e.defer = true;
                var adlPropertyId = 'insticator';
                e.src = 'https://tagan.adlightning.com/' + adlPropertyId + '/op.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(e, s);
                window.addEventListener('message', function(event) {
                    if (event.data === 'insticatorrescan') {
                        try {
                            var sendingDataToFKP = function(bid) {
                                var adlightning_event = {
                                    "type": "adlightning",
                                    "data": {
                                        "siteId": tracking.siteUUID,
                                        "host_name": tracking.pageUrl,
                                        "ssp": bid.bidderCode,
                                        "cpm": bid.cpm,
                                        "revenue": bid.cpm / 1000
                                    }
                                };
                                var eventUrl = "https://event.insticator.com/v1/event?event_name=event_adlightning-recover";
                                utils.makeAjaxCall("POST", eventUrl, adlightning_event, function() {});
                            };
                            var blockedAdUnit = event.source.frameElement.parentElement.parentElement.id;
                            Insticator.logger.logMessage("In adlightning wrap, Blocked, renderSecondHighestBid: " + ad.settings.renderSecondHighestBid);
                            if (blockedAdUnit && ad.settings.renderSecondHighestBid) {
                                ad.settings.renderSecondHighestBid = false;
                                var bidResponseList = []
                                  , bidResponses = instBid.getBidResponses()
                                  , highestBids = instBid.getHighestCpmBids();
                                var bidResponse = bidResponses[blockedAdUnit];
                                bidResponseList = bidResponse.bids;
                                bidResponseList = bidResponseList.concat(highestBids);
                                bidResponseList.sort(function(a, b) {
                                    return parseFloat(b.cpm) - parseFloat(a.cpm);
                                });
                                Insticator.logger.logMessage("In adlightning wrap bids, bids size is: " + bidResponseList.length);
                                Insticator.logger.logMessage("In adlightning wrap bids, blocked bid is: " + JSON.stringify(bidResponse));
                                Insticator.logger.logMessage("In adlightning wrap bids, adUnitCode is: " + blockedAdUnit);
                                var newBid = bidResponseList.length > 1 ? bidResponseList[1] : bidResponseList[0];
                                Insticator.logger.logMessage("In adlightning wrap bids, second highest newBid is" + JSON.stringify(newBid));
                                if (newBid && newBid.ad && newBid.cpm >= 0.01) {
                                    Insticator.logger.logMessage("In adlightning wrap bids, start rendering second highest bid");
                                    try {
                                        ad.showInstBidAdInIframe(newBid.adUnitCode, newBid.adId, newBid.width, newBid.height);
                                        sendingDataToFKP(newBid);
                                    } catch (e) {
                                        Insticator.logger.logMessage("In adlightning wrap bids, fail to write ad due to: " + e);
                                    }
                                }
                            }
                            Insticator.logger.logMessage(" Rescan called on " + blockedAdUnit);
                        } catch (e) {
                            Insticator.logger.logMessage(e + ' could not catch the blocked ad unit');
                        }
                    }
                });
            };

            this.loadConfiant = function(utils, tracking) {
                Insticator.logger.logMessage("Loading confiant");
                var sendingDataToFKP = function(bid) {
                    var confiant_event = {
                        "type": "confiant",
                        "data": {
                            "siteId": tracking.siteUUID,
                            "host_name": tracking.pageUrl,
                            "ssp": bid.bidderCode,
                            "cpm": bid.cpm,
                            "revenue": bid.cpm / 1000
                        }
                    };
                    var eventUrl = "https://event.insticator.com/v1/event?event_name=event_confiant-recover";
                    utils.makeAjaxCall("POST", eventUrl, confiant_event, function() {});
                };
                
                    var confiantCallback = function(blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {
                        Insticator.logger.logMessage("In confiant wrap, Blocked, renderSecondHighestBid: " + _this.settings.renderSecondHighestBid);
                        if (isBlocked && _this.settings.renderSecondHighestBid) {
                            _this.settings.renderSecondHighestBid = false;
                            var bidResponseList = [];
                            var bidResponses = instBid.getBidResponses();
                            var highestBids = instBid.getHighestCpmBids();
                            for (var slot in bidResponses) {
                                bidResponseList = bidResponseList.concat(bidResponses[slot].bids);
                            }
                            bidResponseList = bidResponseList.concat(highestBids);
                            bidResponseList.sort(function(a, b) {
                                return parseFloat(b.cpm) - parseFloat(a.cpm);
                            });

                            var bidResponse, j;
                            for (j = 0; j < bidResponseList.length; j++) {
                                if (bidResponseList[j].adId === impressionData.prebid.adId) {
                                    bidResponse = bidResponseList[j];
                                    break;
                                }
                            }

                            Insticator.logger.logMessage("In confiant wrap bids, bids size is: " + bidResponseList.length);
                            Insticator.logger.logMessage("In confiant wrap bids, blocked bid is: " + JSON.stringify(bidResponse));

                            var adUnitCode = '';
                            if (bidResponse) {
                                adUnitCode = bidResponse.adUnitCode;
                            }
                            Insticator.logger.logMessage("In confiant wrap bids, adUnitCode is: " + adUnitCode);
                            var newBid, i;
                            for (i = 0; i < bidResponseList.length; i++) {
                                if (bidResponseList[i].adId !== impressionData.prebid.adId && bidResponseList[i].adUnitCode === adUnitCode) {
                                    newBid = bidResponseList[i];
                                    break;
                                }
                            }
                            Insticator.logger.logMessage("In confiant wrap bids, second highest newBid is" + JSON.stringify(newBid));
                            if (newBid && newBid.ad && newBid.cpm >= 0.01) {
                                Insticator.logger.logMessage("In confiant wrap bids, start rendering second highest bid");
                                try {
                                    _this.showInstBidAdInIframe(newBid.adUnitCode, newBid.adId, newBid.width, newBid.height);
                                    sendingDataToFKP(newBid);
                                } catch (e) {
                                    Insticator.logger.logMessage("In confiant wrap bids, fail to write ad due to: " + e);
                                }
                            }
                        }
                    };
                
                var myPropertyId = 'Fseez_-nDyWQXIJsbnoKkKTHXC4';
                window.confiant = window.confiant || {};
                window.confiant[myPropertyId] = window.confiant[myPropertyId] || {clientSettings: {}};
                var clientSettings = window.confiant[myPropertyId].clientSettings || (window.confiant[myPropertyId].clientSettings = {});
                clientSettings.callback = confiantCallback;
                clientSettings.prebidNameSpace = 'instBid';
                (function() {
                    var confiantEle = document.createElement("script");
                    confiantEle.type = "text/javascript";
                    confiantEle.async = true;
                    confiantEle.src = "https://confiant-integrations.global.ssl.fastly.net/" + myPropertyId + "/gpt_and_prebid/config.js";
                    var confiantTargetEl = document.getElementsByTagName("head")[0];
                    confiantTargetEl.insertBefore(confiantEle, confiantTargetEl.firstChild);
                }
                )();
                Insticator.logger.logMessage("Finish Loading confiant");
            }
            ;
            this.getFirstAdUnit = function() {
                var adUnits = document.querySelectorAll('*[id^="div-insticator-ad"]');
                for (var index = 0; index < adUnits.length; index++) {
                    var divElem = adUnits[index];
                    if (divElem) {
                        return divElem;
                    }
                }
                return false;
            };

            this.getExistingAdUnits = function(adsMap) {
                var adUnits = document.querySelectorAll('*[id^="div-insticator-ad"]');
                var existingUamSlots = [];
                for (var index = 0; index < adUnits.length; index++) {
                    var adUnitName = adUnits[index].id;
                    if (adsMap[adUnitName]) {
                        Insticator.logger.logMessage("ExistingAdUnit: " + adUnitName);
                        existingUamSlots = existingUamSlots.concat(adsMap[adUnitName]);
                    }
                }
                return existingUamSlots;
            };

            this.getExistingDivs = function() {
                var adUnits = document.querySelectorAll('*[id^="div-insticator-ad"]');
                var existingDivs = [];
                for (var index = 0; index < adUnits.length; index++) {
                    var existingDiv = adUnits[index].id;
                    Insticator.logger.logMessage("existingDiv: " + existingDiv);
                    existingDivs.push(existingDiv);
                }
                return existingDivs;
            };

            this.setTimeReadyForVisibleAdUnits = function() {
                var adUnits = Object.keys(_this.variables.inViewRefresh.adUnits);
                for(var i in adUnits) {
                  if(_this.variables.inViewRefresh.adUnits[adUnits[i]].inview)
                    _this.variables.inViewRefresh.adUnits[adUnits[i]].timeReady = true;
                }
            };

            this.setTimeReadyForAdUnits = function() {
                var adUnits = _this.getExistingAdUnits(_this.variables.adUnitsMap);
                for (var i in adUnits) {
                    _this.variables.inViewRefresh.adUnits[adUnits[i].code].timeReady = true;
                }
            };

            this.resetTimeReadyForAdUnits = function(adUnits) {
                for (var i in adUnits) {
                    _this.variables.inViewRefresh.adUnits[adUnits[i]].timeReady = false;
                }
            };

            this.getAllAdUnits = function() {
                var adUnits = [];
                try {
                    for (var key in _this.variables.adUnitsMap) {
                        adUnits.push(_this.variables.adUnitsMap[key]);
                    }
                } catch (e) {
                    Insticator.logger.logMessage("getAllAdUnits exception: " + e);
                }
                return adUnits;
            };

            this.getAmazonUamBids = function() {
                var existingSlots = _this.getExistingAdUnits(_this.variables.amazonUAMSlotsMap);
                return {
                    slots: existingSlots,
                    timeout: _this.settings.AMAZON_TIMEOUT
                };
            };

            this.getAdUnitCodesToRequestForRefresh = function(hoverUnits) {
                var adUnitCodes = _this.variables.inViewRefresh.on ? Object.keys(_this.variables.inViewRefresh.adUnits) : this.getExistingDivs();
                if (inView.settings.enableInview && inView.settings.divName && adUnitCodes.indexOf(inView.settings.divName) < 0) {
                    adUnitCodes.push(inView.settings.divName);
                }
                var device = "DESKTOP";
                if (utils.isMobileDevice) {
                    device = "MOBILE";
                }
                return adUnitCodes.filter(function(adUnitCode) {
                    var isReadyForRefresh = true;
                    if (_this.variables.inViewRefresh.on) {
                        isReadyForRefresh = _this.variables.inViewRefresh.adUnits[adUnitCode].timeReady && _this.variables.inViewRefresh.adUnits[adUnitCode].inview;
                    }
                    return isReadyForRefresh && hoverUnits.indexOf(adUnitCode) == -1 && ad.settings.adUnitSettings[device]['adRefreshOn'].includes(adUnitCode);
                });
            };

            this.isGAMEnabled = function(containerId){
                var device = "DESKTOP";
                if (utils.isMobileDevice) {
                    device = "MOBILE";
                }
                return ad.settings.adUnitSettings[device]['enabledGAM'].indexOf(containerId) != -1
            };            

            this.removeSlotForAmazonUamBids = function(amazonUamBids, slotsToRemove) {
                if (slotsToRemove && slotsToRemove.length > 0 && amazonUamBids.slots && amazonUamBids.slots.length > 0) {
                    amazonUamBids.slots = amazonUamBids.slots.filter(function(slot) {
                        return slotsToRemove.indexOf(slot.slotID) < 0;
                    });
                }
                return amazonUamBids;
            };

            this.getFinalCPM = function(cpm) {
                if(cpm <= 100) {
                    return Math.floor(cpm*100);
                } else if(cpm < 450) {
                    return (Math.floor(cpm)*100).toFixed();
                }  else {
                    return 44900;
                }
            };

            this.getBidAmount = function(cpm) {
                return ("00000"+cpm).substr(-5);
            };

            this.requestInstbids = function(requestManager) {
                var existingAdUnits = _this.getExistingAdUnits(_this.variables.adUnitsMap);
                if (existingAdUnits.length > 0) {
                    Insticator.logger.logMessage("Found " + existingAdUnits.length + " ad units on page");
                    instBid.addAdUnits(existingAdUnits);
                } else {
                    Insticator.logger.logMessage("No ad units on page");
                    
                }
                if (_this.variables.inViewRefresh.on) {
                    _this.appendPositionToPrebid(Object.keys(ad.variables.adUnitsMap));
                }
                _this.checkSSPForGeoBLocking();
                instBid.requestBids({
                    bidsBackHandler: function(bidResponses) {
                        Insticator.logger.logMessage("Got all instBid bid responses"),
                        requestManager.inst = true;
                        requestManager.biddersBack();
                    }
                });
            };

            this.storeAmazonBids = function(bidResponses){
                ad.variables.amazonBidResponsesMap = {}
                bidResponses.forEach((bid) => {
                    if(bid.amzniid != "") {
                        ad.variables.amazonBidResponsesMap[bid.slotID] = bid
                    }
                })
            }

            this.checkDfpSLotsForAmazonTargeting = function(amazonBidSlots){
                // Go through the amazonBidSlots backwards and remove the ones that 
                // do NOT have an existing gamEnabled slot defined
                for(var idx = amazonBidSlots.slots.length-1; idx >= 0; idx--) {
                    var slot = amazonBidSlots.slots[idx]
                    if(!ad.isGAMEnabled(slot.slotID)){
                        amazonBidSlots.slots.splice(idx, 1)
                    }
                }
                Insticator.logger.logMessage("UAM: ad slots with matching DFP slots: "+ JSON.stringify(amazonBidSlots.slots))
                return amazonBidSlots
            }

            this.requestAmazonBids = function(requestManager) {
                var amazonUamBids = _this.getAmazonUamBids(_this.variables.amazonUAMSlotsMap);
                // Only request amazon bids that can be placed via GAM
                amazonUamBids = _this.checkDfpSLotsForAmazonTargeting(amazonUamBids)
                Insticator.logger.logMessage("amazonUamBids: " + JSON.stringify(amazonUamBids));
                if (amazonUamBids && amazonUamBids.slots && amazonUamBids.slots.length > 0) {
	                var amzFrame = document.querySelector("#amazonBidsIframe").contentWindow
                    amzFrame.apstag.fetchBids(amazonUamBids, function(bidResponses) {
                        Insticator.logger.logMessage("Got all bid bidResponses for UAM: " + JSON.stringify(bidResponses));
                        _this.storeAmazonBids(bidResponses)
                        requestManager.aps = true;
                        requestManager.biddersBack();
                    });
                }
            };

            this.fetchAds = function() {
                if (!_this.variables.timedOut) {
                    var FAILSAFE_TIMEOUT = 3000;
                    var requestManager = {
                        adserverRequestSent: false,
                        aps: false,
                        inst: false,
                        biddersBack: function() {
                            if (this.inst) {
                                requestManager.initializeAdserver();
                            }
                            return;
                        },
                        initializeAdserver: function() {
                            if (this.adserverRequestSent === true) {
                                return;
                            }
                            Insticator.logger.logMessage("Initialize ad server");
                            this.adserverRequestSent = true;
                            _this.init();
                        }
                    };
                    _this.requestInstbids(requestManager);
                    
                    window.setTimeout(function() {
                        requestManager.initializeAdserver();
                    }, FAILSAFE_TIMEOUT);
                } else {
                    Insticator.logger.logMessage("Already timeout, no need to send bid requests");
                }
            };

            this.createEmptyIFrameInsideElement = function(containerId, width, height) {
                var iFrame = document.createElement("iframe");
                iFrame.width = width + "px";
                iFrame.height = height + "px";
                iFrame.frameBorder = "0";
                iFrame.scrolling = "no";
                iFrame.marginHeight = "0";
                iFrame.marginWidth = "0";
                iFrame.topmargin = "0";
                iFrame.leftmargin = "0";
                iFrame.allowtransparency = "true";
                document.getElementById(containerId).appendChild(iFrame);
                return iFrame;
            };

            this.updateIFrameContent = function(targetIFrame, content) {
                targetIFrame.contentWindow.document.open();
                targetIFrame.contentWindow.document.write(content);
                targetIFrame.contentWindow.document.close();
            };

            this.clearAdsUnderContainerId = function(containerId) {
                var node = document.getElementById(containerId);
                if (node) {
                    while (node.hasChildNodes()) {
                        node.removeChild(node.firstChild);
                    }
                    return true;
                }
                return false;
            };

            this.formInstBidCreative = function(adId) {
                return "<style type='text/css'>body{margin:0;padding:0;}</style><scr" + "ipt>var w = window;for (i = 0; i < 10; i++) {w = w.parent;if (w.instBid) {try {w.instBid.renderAd(document, '" + adId + "');break;} catch (e) {continue;}}}</scr" + "ipt>";
            };

            this.showInstBidAdInIframe = function(containerId, adId, width, height) {
                var success = _this.clearAdsUnderContainerId(containerId);
                if (success) {
                    var iFrame = _this.createEmptyIFrameInsideElement(containerId, width, height);
                    var hbContent = _this.formInstBidCreative(adId);
                    _this.updateIFrameContent(iFrame, hbContent);
                } else {
                    Insticator.logger.logMessage("Fail to clear ads under: " + containerId);
                }
            };

            this.showBackfill = function(containerId, width, height) {
                var success = _this.clearAdsUnderContainerId(containerId);
                if (success) {
                    var iFrame = _this.createEmptyIFrameInsideElement(containerId, width, height);
                    var src = "https://dashboard.insticator.com/embeds/backfillad?dimension=" + width + "x" + height + "&siteURL=" + "two.altpress.com";
                    iFrame.src = src;
                    document.getElementById(containerId).appendChild(iFrame);
                }
            };

            this.refreshAd = function(containerId, excludeAdx, gamEnabled, refreshType) {
                

                ad.settings.renderSecondHighestBid = true;
                var adSize = this.getSizeForDiv(containerId);
                try {
                    if (adSize) {
                        if (typeof adSize !== "undefined") {
                            var hasFill = containerId in _this.variables.hbFills;
                            var passbackName = passback.getPassbackName(containerId);
                            Insticator.logger.logMessage("In refreshAd, passbackName: " + passbackName);
                            Insticator.logger.logMessage("hasFill: " + hasFill);

                            if (!hasFill && passbackName.toLowerCase() !== "default") {
                                passback.showPassbackInIFrame(containerId, passbackName, adSize["width"], adSize["height"]);
                            } else {
                                if(!gamEnabled) {
                                    Insticator.logger.logMessage("In refreshAd, disable call to DFP");
                                    if(hasFill) {
                                        Insticator.logger.logMessage("fill for: " + containerId + ", id:" + _this.variables.hbFills[containerId].adId + ", cpm: " +  _this.variables.hbFills[containerId].cpm);
                                        _this.showInstBidAdInIframe(containerId, _this.variables.hbFills[containerId].adId, adSize["width"], adSize["height"]);
                                    } else {
                                        Insticator.logger.logMessage("no fill for: " + containerId);
                                        _this.showBackfill(containerId, adSize["width"], adSize["height"]);
                                    }
                                } else {
                                    Insticator.logger.logMessage("In refreshAd, send call to DFP");
                                    dfp.setActiveTabTargeting(containerId, refreshType)
                                    dfp.setGdprConsentTargeting(containerId, refreshType)
                                    dfp.setExcludeAdXTargeting(containerId, excludeAdx);
                                    dfp.setNoFillTargeting(containerId);
                                    dfp.setImpressionTypeTargeting(containerId, refreshType);
                                    _this.clearAdsUnderContainerId(containerId);
                                    if (_this.variables.divsWithAdsShowInDFPForFirstTime.includes(containerId)) {
                                        googletag.pubads().refresh([_this.variables.adSlots[containerId]]);
                                    } else {
                                        _this.variables.divsWithAdsShowInDFPForFirstTime.push(containerId);
                                        googletag.display(containerId);
                                    }
                                }
                            }
                        }
                    }
                } catch(e) {
                    Insticator.logger.logMessage("Error while refreshing ads for: " + containerId + " due to: " + e);
                    dfp.setActiveTabTargeting(containerId, refreshType)
                    dfp.setImpressionTypeTargeting(containerId, refreshType);
                    _this.clearAdsUnderContainerId(containerId);
                    if (_this.variables.divsWithAdsShowInDFPForFirstTime.includes(containerId)) {
                        googletag.pubads().refresh([_this.variables.adSlots[containerId]]);
                    } else {
                        _this.variables.divsWithAdsShowInDFPForFirstTime.push(containerId);
                        googletag.display(containerId);
                    }
                }
            };

            this.refreshBids = function(hoverUnits, excludeAdx, refreshType, forceHouseAd) {
                Insticator.logger.logMessage("Clear map");
                _this.variables.hbFills = {};
                var amazonUamBids = _this.removeSlotForAmazonUamBids(_this.getAmazonUamBids(_this.variables.amazonUAMSlotsMap), hoverUnits);
                if(hoverUnits.length > 0) {
                    _this.preAdjustAdUnits(hoverUnits);
                }
                var adUnitsToRequest = _this.getAdUnitCodesToRequestForRefresh(hoverUnits);
                if(forceHouseAd){
                    adUnitsToRequest.forEach(function(containerId){
                        
                        dfp.setActiveTabTargeting(containerId, refreshType)
                        dfp.setGdprConsentTargeting(containerId, refreshType) 
                        dfp.setNoFillTargeting(containerId);
                        dfp.setImpressionTypeTargeting(containerId, refreshType);
                        dfp.setForceHouseAdTargeting(containerId, refreshType);
                        _this.clearAdsUnderContainerId(containerId);
                        if (_this.variables.divsWithAdsShowInDFPForFirstTime.includes(containerId)) {
                            googletag.pubads().refresh([_this.variables.adSlots[containerId]]);
                        } else {
                            _this.variables.divsWithAdsShowInDFPForFirstTime.push(containerId);
                            googletag.display(containerId);
                        }
                    })
                } else {
                    if (adUnitsToRequest && adUnitsToRequest.length > 0) {
                        instBid.que.push(function() {
                            _this.checkSSPForGeoBLocking();
                            
                            instBid.requestBids({
                                timeout: _this.settings.REFRESH_TIMEOUT,
                                addUnitCodes: adUnitsToRequest,
                                bidsBackHandler: function() {
                                    Insticator.logger.logMessage("All refresh bids back");
                                    instBid.setTargetingForGPTAsync();
                                    for (var i in adUnitsToRequest) {
                                        if(hoverUnits.indexOf(adUnitsToRequest[i]) > -1) {
                                            Insticator.logger.logMessage("Not refresh hover unit: " + adUnitsToRequest[i]);
                                        } else {
                                            var containerId = adUnitsToRequest[i]
                                            var gamEnabled = ad.isGAMEnabled(containerId)
                                            _this.refreshAd(containerId, excludeAdx, gamEnabled, refreshType);
                                        }
                                    }
                                }
                            });
                        });
                        if (_this.variables.inViewRefresh.on) {
                            ad.resetTimeReadyForAdUnits(adUnitsToRequest);
                        }
                    }
                    if(hoverUnits.length > 0) {
                        _this.postAdjustAdUnits(hoverUnits);
                    }
                }
            };

            this.appendPositionToPrebid = function(inViewDivs) {
                Insticator.logger.logMessage("In appendAtf, going to append");
                inViewDivs.forEach(function(div) {
                    Insticator.logger.logMessage("In appendAtf, div " + div);
                    for (var i = 0; i < instBid.adUnits.length; i++) {
                        if (instBid.adUnits[i].code === div) {
                            instBid.adUnits[i].bids.forEach(function(bid) {
                                if (bid.bidder === "conversant") {
                                    bid.params.position = 1;
                                } else if (bid.bidder === "appnexus") {
                                    bid.params.position = 'above';
                                } else if (bid.bidder === "rubicon") {
                                    bid.params.position = 'atf';
                                } else if (bid.bidder === "synacormedia") {
                                    bid.params.pos = 1;
                                }
                            });
                        }
                    }
                });
            };

            this.setPositionTargeting = function() {
                if (_this.variables.inViewRefresh.on) {
                    googletag.cmd.push(function() {
                        _this.appendAtf(Object.keys(ad.variables.adUnitsMap));
                    });
                } else {
                    googletag.cmd.push(function() {
                        _this.appendBtf(Object.keys(ad.variables.adUnitsMap));
                    });
                }
            };

            this.appendAtf = function(inViewDivs) {
                Insticator.logger.logMessage("In appendAtf, going to append");
                inViewDivs.forEach(function(div) {
                    Insticator.logger.logMessage("In appendAtf, div " + div);
                    for (var i = 0; i < instBid.adUnits.length; i++) {
                        if (instBid.adUnits[i].code === div) {
                            try{
                                ad.variables.adSlots[div].setTargeting("p", "ATF");
                            } catch(e){
                                // adSlots don't get added when GAM is off for an adUnit
                                Insticator.logger.logMessage("Info: adSlot "+div+" was not defined.")
                            }
                        }
                    }
                });
            };

            this.appendBtf = function(inViewDivs) {
                Insticator.logger.logMessage("In appendBtf, append BTF before request sent");
                inViewDivs.forEach(function(div) {
                    Insticator.logger.logMessage("In appendBtf, div " + div);
                    for (var i = 0; i < instBid.adUnits.length; i++) {
                        if (instBid.adUnits[i].code === div) {
                            try{
                                ad.variables.adSlots[div].setTargeting("p", "BTF");
                            } catch(e){
                                // adSlots don't get added when GAM is off for an adUnit
                                Insticator.logger.logMessage("Info: adSlot "+div+" was not defined.")
                            }
                        }
                    }
                });
            };

            this.preAdjustAdUnits = function(hoverUnits) {
                for(var i in hoverUnits) {
                    Insticator.logger.logMessage("Remove ad unit to be refreshed: " + hoverUnits[i]);
                    instBid.removeAdUnit(hoverUnits[i]);
                }
            };

            this.postAdjustAdUnits = function(hoverUnits) {
                for(var i in hoverUnits) {
                    Insticator.logger.logMessage("Add back ad unit: " + hoverUnits[i]);
                    instBid.addAdUnits(_this.variables.adUnitsMap[hoverUnits[i]]);
                }
            };

            this.setDimensionFromDFP = function(containerId) {
                try {
                    var targetDiv = document.getElementById(containerId);
                    var currentWidth = targetDiv.style.width.replace('px', '');
                    var currentHeight = targetDiv.style.height.replace('px', '');
                    var creativeIFrame = targetDiv.getElementsByTagName("iframe")[0];
                    if (typeof creativeIFrame !== "undefined") {
                        var tryToGetAndSetDimension = function(attempts) {
                            var targetedWidth = creativeIFrame.clientWidth;
                            var targetedHeight = creativeIFrame.clientHeight;
                            if(targetedWidth === 1 || targetedHeight === 1) {
                                Insticator.logger.logMessage("width or height is 1, try again later");
                                setTimeout(function() {
                                    tryToGetAndSetDimension(attempts - 1);
                                }, 200);
                            } else {
                                if(currentWidth != targetedWidth || currentHeight != targetedHeight) {
                                    Insticator.logger.logMessage("setDimensionFromDFP for: " + containerId + ", override: " + currentWidth + "x" + currentHeight + " to: " + targetedWidth + "x" + targetedHeight);
                                    _this.setElementDimension(containerId, targetedWidth, targetedHeight);
                                } else {
                                    Insticator.logger.logMessage("setDimensionFromDFP for: " + containerId + ", same size from DFP");
                                }
                            }
                        };
                        tryToGetAndSetDimension(5);
                    } else {
                        Insticator.logger.logMessage("No DFP IFrame created.");
                    }
                } catch(e) {
                    Insticator.logger.logMessage("Error during setDimensionFromDFP: " + containerId);
                }
            };

            this.setFixedSizeForDiv = function(containerId) {
                if (_this.variables.enableFixedHeight) {
                    try {
                        var fixedSize = _this.getFixedSize(_this.getSizeForDiv(containerId));
                        _this.setElementDimension(containerId, fixedSize["width"], fixedSize["height"]);
                        Insticator.logger.logMessage("Finished set fixed size for : " + containerId);
                    } catch(e) {
                        Insticator.logger.logMessage("Error during setFixedSizeForDiv: " + containerId);
                    }
                }
            };

            this.appendCenterStyle = function(containerId) {
                try {
                    var targetDiv = document.getElementById(containerId);
                    targetDiv.style.display = "flex";
                    targetDiv.style.alignItems = "center";
                } catch(e) {
                    Insticator.logger.logMessage("Error during set style to div: " + containerId);
                }
            };

            this.setElementDimension = function(containerId, width, height) {
                try {
                    var targetDiv = document.getElementById(containerId);
                    if (targetDiv.style.width === "" || targetDiv.style.height === "") {
                        var style = "width:" + width + "px;height:" + height + "px;";
                        var existingStyle = targetDiv.style.cssText;
                        targetDiv.setAttribute("style", existingStyle + style);
                    } else {
                        targetDiv.style.width = width+"px";
                        targetDiv.style.height = height+"px";
                    }
                } catch(e) {
                    Insticator.logger.logMessage("Error during set style to div: " + containerId);
                }
            };

            this.getFixedSize = function(adSize) {
                try {
                    var device = "DESKTOP";
                    if (utils.isMobileDevice) {
                        device = "MOBILE";
                    }
                    var sizeKey = adSize["width"] + "x" + adSize["height"];
                    return _this.variables.fixedSize[device][sizeKey];
                } catch(e) {
                    Insticator.logger.logMessage("Error during get fixed size based due to: " + e);
                }

                return adSize;
            };

            this.appendAd = function(containerId, gamEnabled, forceHouseAd) {
                if(_this.variables.blockAds) {
                    Insticator.logger.logMessage("This geo is blocked initial load.");
                } else {
                    try {
                        _this.setFixedSizeForDiv(containerId);
                        var adSize = _this.getSizeForDiv(containerId);
                        if (typeof adSize !== "undefined") {
                            Insticator.logger.logMessage("Display ad for: " + containerId);
                            var hasFill = containerId in _this.variables.hbFills;
                            if (hasFill) {
                                Insticator.logger.logMessage("Fill for: " + containerId + ", id:" + _this.variables.hbFills[containerId].adId + ", from: " + _this.variables.hbFills[containerId].bidderCode + ", cpm: " + _this.variables.hbFills[containerId].cpm);
                            } else {
                                Insticator.logger.logMessage("No fill for: " + containerId);
                            }
                            var passbackName = passback.getPassbackName(containerId);
                            Insticator.logger.logMessage("In appendAd, passbackName: " + passbackName);
                            Insticator.logger.logMessage("hasFill: " + hasFill);
                            if (!hasFill && passbackName.toLowerCase() !== "default") {
                                passback.showPassbackInIFrame(containerId, passbackName, adSize["width"], adSize["height"]);
                            } else {
                                if(!gamEnabled) {
                                    Insticator.logger.logMessage("In appendAd, disable call to DFP");
                                    if(hasFill) {
                                        Insticator.logger.logMessage("fill for: " + containerId + ", id:" + _this.variables.hbFills[containerId].adId + ", cpm: " +  _this.variables.hbFills[containerId].cpm);
                                        _this.showInstBidAdInIframe(containerId, _this.variables.hbFills[containerId].adId, adSize["width"], adSize["height"]);
                                    } else {
                                        Insticator.logger.logMessage("no fill for: " + containerId);
                                        _this.showBackfill(containerId, adSize["width"], adSize["height"]);
                                    }
                                } else {
                                    Insticator.logger.logMessage("In appendAd, send call to DFP");
                                    if(forceHouseAd){
                                        dfp.setForceHouseAdTargeting(containerId, _this.settings.impressionType.INITIAL_LOAD);
                                    }
                                    dfp.setActiveTabTargeting(containerId, _this.settings.impressionType.INITIAL_LOAD)
                                    dfp.setGdprConsentTargeting(containerId, _this.settings.impressionType.INITIAL_LOAD)
                                    dfp.setExcludeAdXTargeting(containerId, false);
                                    dfp.setNoFillTargeting(containerId);
                                    dfp.setImpressionTypeTargeting(containerId, _this.settings.impressionType.INITIAL_LOAD);
                                    _this.variables.divsWithAdsShowInDFPForFirstTime.push(containerId);
                                    if (_this.variables.lazyLoad.on) {
                                        Insticator.logger.logMessage("Lazy ad: initLazyAd for " +containerId)
                                        _this.lazyAd.emitInitLazyAdEvent(containerId)
                                    } else {
                                        _this.showAd(containerId)
                                    }
                                }
                            }
                        }
                    } catch(e) {
                        Insticator.logger.logMessage("Error while appending ads for: " + containerId + " due to: " + e);
                        if(forceHouseAd){
                            dfp.setForceHouseAdTargeting(containerId, _this.settings.impressionType.INITIAL_LOAD);
                        }
                        dfp.setActiveTabTargeting(containerId, _this.settings.impressionType.INITIAL_LOAD)
                        dfp.setImpressionTypeTargeting(containerId, _this.settings.impressionType.INITIAL_LOAD);
                        _this.variables.divsWithAdsShowInDFPForFirstTime.push(containerId);
                        if (_this.variables.lazyLoad.on) {
                            Insticator.logger.logMessage("Lazy ad: initLazyAd for " +containerId)
                            _this.lazyAd.emitInitLazyAdEvent(containerId)
                        } else {
                            _this.showAd(containerId)
                        }
                    }
                }
            };

            this.refreshAdBasedOnTime = function() {
                
                _this.initializeBeforeRefreshAd();
                _this.defineAdSlots();
                var msg = ad.variables.detectInvalidTraffic ? "TC: in tbr" : "in tbr"
                Insticator.logger.logMessage(msg)
                var forceHouseAd = _this.isInvalidTraffic()
                _this.refreshBids(_this.settings.hoverAdUnits, _this.settings.excludeAutoRefreshAdX, _this.settings.impressionType.TIME_BASED_REFRESH, forceHouseAd);
            };

            this.getAutoRefreshInterval = function() {
                var interval = Math.floor(Math.random() * (_this.settings.autoRefreshIntervalUpperBound - _this.settings.autoRefreshIntervalLowerBound) ) + _this.settings.autoRefreshIntervalLowerBound;
                return interval;
            };

            this.autoRefreshAd = function() {
                if(_this.variables.autoRefreshCounter++ < _this.settings.AUTO_REFRESH_CAP) {
                    if (_this.variables.inViewRefresh.on) {
                        _this.setTimeReadyForAdUnits();
                    }
                    
                        _this.refreshAdBasedOnTime();
                    
                    _this.resetAutoRefreshTimer();
                } else {
                    Insticator.logger.logMessage("Reach auto refresh cap, stop refreshing ad.");
                    clearInterval(_this.variables.autoRefreshTimer);
                }
            };

            this.resetAutoRefreshTimer = function() {
                Insticator.logger.logMessage("resetAutoRefreshTimer");
                clearInterval(_this.variables.autoRefreshTimer);
                _this.variables.autoRefreshTimer = setInterval(_this.autoRefreshAd, _this.getAutoRefreshInterval());
            };

            this.checkBlockAdsForGeo = function() {
                if(visitor.visitorGeo === "UNKNOWN") {
                    Insticator.logger.logMessage("Cannot identify visitor geo, ignore geo SSP block process");
                } else {
                    var sspWhitelist = _this.settings.geoSSPWhitelistingMap[visitor.visitorGeo];
                    if(typeof sspWhitelist === "undefined" || sspWhitelist.length === 0) {
                        Insticator.logger.logMessage("No SSP Whitelist for visitor geo, block ads");
                        _this.variables.blockAds = true;
                        _this.variables.blockAmazonUAM = true;
                    }
                }
            };

            this.checkSSPForGeoBLocking = function() {
                if(visitor.visitorGeo === "UNKNOWN") {
                    Insticator.logger.logMessage("Cannot identify visitor geo, ignore geo SSP block process");
                } else {
                    var sspWhitelist = _this.settings.geoSSPWhitelistingMap[visitor.visitorGeo];
                    if(typeof sspWhitelist !== "undefined") {
                        Insticator.logger.logMessage("sspWhitelist: " + sspWhitelist);
                        _this.removeSSPBidding(sspWhitelist);
                    }
                }
            };

            this.removeSSPBidding = function(sspWhitelist) {
                for(var i=instBid.adUnits.length-1; i>0; i--) {
                    var adUnit = instBid.adUnits[i];
                    if (adUnit.bids && adUnit.bids.length > 0) {
                        var bidder = adUnit.bids[0].bidder;
                        if(sspWhitelist.indexOf(bidder) === -1) {
                            instBid.adUnits.splice(i, 1);
                        }
                    }
                }
                if(sspWhitelist.indexOf("amazon") === -1) {
                    Insticator.logger.logMessage("Blocking AmazonUAM");
                    _this.variables.blockAmazonUAM = true;
                }
            };

            this.checkDemoMode = function() {
                _this.variables.demoMode = utils.getURLParameterByName("insticator_demo");
                if(_this.variables.demoMode == "true") {
                    Insticator.logger.logMessage("Demo mode on, turn off multi-sizing");
                    _this.settings.multisize.on = false;
                }
            };

            this.checkHouseBackfillOnlyMode = function() {
                var houseBackfillOnly = utils.getURLParameterByName("insticator_house_ad");
                if(houseBackfillOnly == "1") {
                    Insticator.logger.logMessage("houseBackfillOnlyMode mode set to 1, only serve house backfill");
                    _this.variables.houseBackfillOnlyMode = 1;
                    Insticator.logger.logMessage("houseBackfillOnlyMode, turn off multi-sizing as well");
                    _this.settings.multisize.on = false;
                } else if(houseBackfillOnly == "2") {
                    Insticator.logger.logMessage("houseBackfillOnlyMode mode set to 2, only serve demo backfill");
                    _this.variables.houseBackfillOnlyMode = 2;
                    Insticator.logger.logMessage("houseBackfillOnlyMode, turn off multi-sizing as well");
                    _this.settings.multisize.on = false;
                }
            };

            this.addToAdUnitsMap = function(adUnit) {
                if(typeof _this.variables.adUnitsMap[adUnit.code] === "undefined") {
                    _this.variables.adUnitsMap[adUnit.code] = [adUnit];
                } else {
                    _this.variables.adUnitsMap[adUnit.code].push(adUnit);
                }
            };

            this.getMultiSizeArray = function(bidder, deviceType, size) {
                var multiSizeArray = null;
                if(typeof  _this.settings.multisize.custom[bidder] !== "undefined" &&
                    typeof  _this.settings.multisize.custom[bidder][deviceType] !== "undefined" &&
                    typeof  _this.settings.multisize.custom[bidder][deviceType][size] !== "undefined") {
                    multiSizeArray = _this.settings.multisize.custom[bidder][deviceType][size]
                }
                return multiSizeArray;
            };

            this.getCustomSizeArray = function(key, deivce, size, defautArray) {
                if (typeof _this.settings.multisize.custom[key] !== "undefined"
                    && typeof _this.settings.multisize.custom[key][deivce] !== "undefined"
                    && typeof _this.settings.multisize.custom[key][deivce][size] !== "undefined") {
                    return _this.settings.multisize.custom[key][deivce][size];
                }
                return defautArray;
            };

            this.injectVideoTag = function() {
                
            };

            this.checkDomainWhitelist = function() {
                if (_this.variables.domainWhitelist.on) {
                    var currentHostname = prebid.getTopWindowLocation().hostname;
                    for(var i = 0; i < _this.variables.domainWhitelist.list.length; i++) {
                        if(currentHostname.indexOf(_this.variables.domainWhitelist.list[i]) > -1) {
                            Insticator.logger.logMessage("Domain was whitelisted, do serve ads.");
                            return;
                        }
                    }
                    Insticator.logger.logMessage("Domain was not whitelisted, do not serve ads.");
                    _this.variables.blockAds = true;
                }
            };

            this.showAd = function(containerId){
                googletag.cmd.push(function() {
                    googletag.display(containerId);
                    if(googletag.pubads().isInitialLoadDisabled()) {
                        googletag.pubads().refresh([_this.variables.adSlots[containerId]]);
                    }
                });
            }
            

            

            this.isInvalidTraffic = function(){
                
                // if TC off, do not check traffic.
                    Insticator.logger.logMessage("Can't check traffic if traffic cop is disabled.")
                    return false
                

            };
        }

        function DFP() {
            var _this = this;

            this.setNoFillTargeting = function(containerId) {
                var targeting = {};
                try {
                    targeting = instBid.getAdserverTargetingForAdUnitCode(containerId);
                } catch (e) {
                    Insticator.logger.logMessage("Error getting the targeting due to" + e);
                }
                if(Object.keys(targeting).length === 0 || typeof targeting['ib'] === 'undefined') {
                    Insticator.logger.logMessage("No fill for: " + containerId + " , add no fill targeting");
                    googletag.cmd.push(function() {
                        ad.variables.adSlots[containerId].setTargeting("ib", "nofill").setTargeting("iba", "0").setTargeting("iaid", "nofill");
                    });
                }
            };

            this.setExcludeAdXTargeting = function(containerId, excludeAdx) {
                var excludeAdxValue = excludeAdx ? "Y" : "N";
                Insticator.logger.logMessage("Set no adx targeting for: " + containerId + " to: " + excludeAdxValue);
                googletag.cmd.push(function() {
                    ad.variables.adSlots[containerId].setTargeting("Exclude_Adx", excludeAdx ? "Y" : "N");
                });
            };

            this.setImpressionTypeTargeting = function(containerId, refreshType) {
                Insticator.logger.logMessage("Impression type for: " + containerId + " on: " + refreshType);
                googletag.cmd.push(function() {
                    ad.variables.adSlots[containerId].setTargeting("it", refreshType);
                    if(refreshType === ad.settings.impressionType.TIME_BASED_REFRESH) {
                        ad.variables.adSlots[containerId].setTargeting("auto_refresh_counter", ad.variables.autoRefreshCounter > 1000 ? "n" : ad.variables.autoRefreshCounter);
                    }
                });
            };

            this.setForceHouseAdTargeting = function(containerId, refreshType) {
                Insticator.logger.logMessage("Forcing house ad for: " + containerId + " on: " + refreshType);
                googletag.cmd.push(function() {
                    ad.variables.adSlots[containerId].setTargeting("fhb", 1);
                });
            };

            this.setActiveTabTargeting = function(containerId, refreshType) {
                Insticator.logger.logMessage("Active tab status for: " + containerId + " on: " + refreshType);
                googletag.cmd.push(function() {
                    ad.variables.adSlots[containerId].setTargeting("at", Insticator.isTabActive ? "1" : "0" );
                });
            };

            this.setGdprConsentTargeting = function(containerId, refreshType) {
                var isGdprCountry = utils.isGdprCountry(visitor.visitorGeo)
                if(!isGdprCountry){ return }
                Insticator.logger.logMessage("Set GDPR consent for: " + containerId + " on: " + refreshType);
                googletag.cmd.push(function() {
                    // going olde school
                    var consentsArray = []
                    if(visitor.consentData && visitor.consentData.purpose){
                        var tcConsents = visitor.consentData.purpose.consents
                        for (var key in tcConsents ){
                            // if(tcConsents.hasOwnProperty(key)){
                                consentsArray.push(tcConsents[key])
                            // } 
                        }
                        // If all purpose consents are listed and none of them are false.
                        var hasConsent = consentsArray.length == 10 && consentsArray.indexOf(false) === -1 ? "1" : "0" ;
                        ad.variables.adSlots[containerId].setTargeting("consent", hasConsent);
                    } else {
                        Insticator.logger.logMessage("GDPR: No purpose consents returned from cmp!")
                        ad.variables.adSlots[containerId].setTargeting("consent", "0");
                    }
                });
            };

            this.removeAmazonTargeting = function(event){
                var containerId = event.slot.getSlotElementId()
                if(ad.variables.amazonBidResponsesMap[containerId]){
                    var keys = event.slot.getTargetingKeys()
                    for(var i =0; i < keys.length; i++){ 
                        if(keys[i].startsWith('amzn')){
                            event.slot.clearTargeting(keys[i]);
                        }
                    }
                    event.slot.clearTargeting('amazon_test');
                    Insticator.logger.logMessage("Removing Amazon targeting for: "+ containerId)
                }
            }
            this.setAmazonTargeting = function(refreshType){
                var amazonBidResponseKeys = Object.keys(ad.variables.amazonBidResponsesMap)
                amazonBidResponseKeys.forEach(function(key){ 
                    var containerId = key
                    var bid = ad.variables.amazonBidResponsesMap[key]
                    Insticator.logger.logMessage("Setting Amazon ad targeting for: " + containerId + " on: " + refreshType);
                    for (var i = 0; i < Object.keys(bid).length; i++){ 
                        var bidProp =  Object.keys(bid)[i]
                        if(bidProp.startsWith('amzn')){
                            ad.variables.adSlots[containerId].setTargeting(bidProp, bid[bidProp])
                        }
                    }
                    ad.variables.adSlots[containerId].setTargeting("amazon_test", 1)
                });
            }
        }

        function Passback() {
            this.passbackInfoJson = {
                DESKTOP: JSON.parse('{}'),
                MOBILE: JSON.parse('{}')
            };

            this.passbackCreativeMap = {
                default : ""
                
            };
            var _this = this;

            this.getPassbackName = function(containerId) {
                var deviceType = "DESKTOP";
                if (utils.isMobileDevice) {
                    deviceType = "MOBILE";
                }
                var divPassback = _this.passbackInfoJson[deviceType];
                if (divPassback[containerId]) {
                    return divPassback[containerId];
                }
                return "default";
            };

            this.replaceMacros = function(tag, width, height) {
                return tag.replace(/{width}/g, width).replace(/{height}/g, height).replace(/{domain}/g, "two.altpress.com");
            };

            this.getCreativeForPassback = function(passbackName, width, height) {
                var creative = _this.passbackCreativeMap[passbackName];
                if (creative) {
                    creative = _this.replaceMacros(creative, width, height, "two.altpress.com");
                }
                return creative;
            };

            this.showPassbackInIFrame = function(containerId, passbackName, width, height) {
                var success = ad.clearAdsUnderContainerId(containerId);
                if (success) {
                    var iFrame = ad.createEmptyIFrameInsideElement(containerId, width, height);
                    var creative = _this.getCreativeForPassback(passbackName, width, height);
                    ad.updateIFrameContent(iFrame, creative);
                } else {
                    Insticator.logger.logMessage("Fail to clear ads under: " + containerId);
                }
            };
        }

        function Utils() {
            this.isMobileDevice = (function() {
                return /(android|bb\d |meego). mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))?!0:!1;
            })();

            this.isIframe = (function() {
                try {
                    return window.self !== window.top;
                } catch (e) {
                    return true;
                }
            })();

            this.setSessionStorage = function (cname, cvalue) {
                Insticator.logger.logMessage("setSessionStorage " + cname + " value " + cvalue);
                sessionStorage.setItem(cname, cvalue);
            };

            this.getSessionStorage = function (cname) {
                return sessionStorage.getItem(cname);
            };

            this.removeSessionStorageItem = function (cname) {
                Insticator.logger.logMessage("remove session storage item for " + cname);
                sessionStorage.removeItem(cname);
            };

            this.setCookie = function (cname, cvalue, exdays) {
                Insticator.logger.logMessage("setCookie " + cname + " value " + cvalue);
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
            };

            this.getCookie = function (cname) {
                var name = cname + "=";
                var decodedCookie = "";
                try {
                    decodedCookie = decodeURIComponent(document.cookie);
                } catch(e) {
                    decodedCookie = document.cookie;
                    Insticator.logger.logMessage("Not able to decode cookie ", e.message);
                }
                var ca = decodedCookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            };

            this.makeAjaxCall = function(method, url, data, callback) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        callback(xmlHttp.responseText);
                    }
                };
                xmlHttp.open(method, url, true);
                xmlHttp.setRequestHeader("Content-type", "application/json");
                var jsonData = JSON.stringify(data);
                xmlHttp.send(jsonData);
            };

            this.makeGetCall = function(theUrl, callback) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        callback(xmlHttp.responseText);
                    }
                };
                xmlHttp.open("GET", theUrl, true);
                xmlHttp.send(null);
            };

            this.documentReady = function(fn) {
                if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
                    Insticator.logger.logMessage("dom ready!");
                    fn();
                } else {
                    Insticator.logger.logMessage("dom not ready, set up listener");
                    document.addEventListener('DOMContentLoaded', fn);
                }

            this.initTabListeners = function(){
                Insticator.isTabActive = document.hasFocus();
                Insticator.logger.logMessage("Tab intital state: "+ Insticator.isTabActive)

                window.addEventListener("focus", () => {
                    Insticator.logger.logMessage("Tab state: has focus")
                    Insticator.isTabActive = true
                })
                window.addEventListener("blur", () => {
                    Insticator.logger.logMessage("Tab state: lost focus")
                    Insticator.isTabActive = false
                })
            }

            };

            this.tabHidden = function() {
                var hidden;
                var visibilityChange;
                if (typeof document.hidden !== "undefined") {
                    hidden = "hidden";
                    visibilityChange = "visibilitychange";
                } else if (typeof document.msHidden !== "undefined") {
                    hidden = "msHidden";
                    visibilityChange = "msvisibilitychange";
                } else if (typeof document.webkitHidden !== "undefined") {
                    hidden = "webkitHidden";
                    visibilityChange = "webkitvisibilitychange";
                }
                if (typeof document.addEventListener === "undefined" || hidden === undefined) {
                    console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
                } else {
                    document.addEventListener(visibilityChange, function() {
                        Insticator.logger.logMessage("document[hidden]: " + document[hidden]);
                    }, false);
                }
                try {
                    return document[hidden];
                } catch (e) {
                    Insticator.logger.logMessage("Failed to detect in the tab is hidden");
                }
                return false;
            };

            this.divObserver = function(ad) {
                if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
                    var adUnits = Object.keys(ad.variables.adUnitsMap);
                    var adUnitObservers = [];
                    var inViewThreshold = 0.1;
                    const observerOptions = {
                        root: null,
                        rootMargin: "0px",
                        threshold: [0.1]
                    };
                    Insticator.logger.logMessage(adUnits + ' ad units array');
                    adUnits.forEach(function(adUnit, i) {
                        const adUnitElement = document.getElementById(adUnit);
                        if (adUnitElement) {
                            Insticator.logger.logMessage('adding observer to: ' + adUnit);
                            adUnitObservers[i] = new IntersectionObserver(function(entries) {
                                entries.forEach(function(entry) {
                                    if (entry.intersectionRatio >= inViewThreshold) {
                                        ad.variables.inViewRefresh.adUnits[entry.target.id].inview = true;
                                        if (ad.variables.inViewRefresh.adUnits[entry.target.id].timeReady) {
                                            setTimeout(ad.refreshAdBasedOnTime(), 1000);
                                        }
                                    } else if (entry.intersectionRatio < inViewThreshold) {
                                        if (ad.variables.inViewRefresh.adUnits[entry.target.id]) {
                                            ad.variables.inViewRefresh.adUnits[entry.target.id].inview = false;
                                        }
                                    }
                                    Insticator.logger.logMessage((Math.floor(entry.intersectionRatio * 100)) + "% ----> intersection ratio ----> " + entry.target.id);
                                });
                            }
                            ,observerOptions);
                            adUnitObservers[i].observe(adUnitElement);
                        }
                    });
                } else {
                    Insticator.logger.logMessage('dom not ready');
                }
            };

            this.getURLParameterByName = function(name) {
                var regexS = "[\\?&]" + name + "=([^&#]*)";
                var regex = new RegExp(regexS);
                var results = regex.exec(window.location.search);
                if (results === null) {
                    return "";
                }
                return decodeURIComponent(results[1].replace(/\+/g, ' '));
            };

            this.isGdprCountry = function(countryCode){
                var GDPRStates = ['BE', 'BG', 'CZ', 'DK','DE', 'EE', 'IE', 'EL', 'ES', 'FR', 'HR', 'IT', 'CY', 'LV', 'LT', 'LU', 'HU', 'MT', 'NL', 'AT', 'PL', 'PT', 'RO', 'SI', 'SK', 'FI', 'SE', 'UK', 'GB'];
                return GDPRStates.includes(countryCode);
            }
        }

        function Visitor() {
            this.settings = {
                GEO_ENDPOINT: "https://geoip.insticator.com/json/"
            };
            this.visitorGeo = "UNKNOWN";
            this.visitorCity = "UNKNOWN";
            this.visitorGeoCookieName = "visitorGeo";
            this.visitorCityCookieName = "visitorCity";
            this.consentData = {}
            var _this = this;

            this.fetchVisitorGeo = function() {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        _this.parseAndStoreVisitorGeo(xmlHttp.responseText);
                        ad.checkBlockAdsForGeo();
                    }
                };
                xmlHttp.onerror= function(e) {
                    Insticator.logger.logMessage("Error fetchVisitorGeo");
                };
                xmlHttp.open("GET", _this.settings.GEO_ENDPOINT, true);
                xmlHttp.send(null);
            };

            this.parseAndStoreVisitorGeo = function(trafficSource) {
                Insticator.logger.logMessage("trafficSource: " + trafficSource);
                var sourceJson = JSON.parse(trafficSource);
                Insticator.logger.logMessage("sourceJson: " + sourceJson);
                if(sourceJson.hasOwnProperty("country_code")) {
                    _this.visitorGeo = sourceJson["country_code"];
                }
                if(sourceJson.hasOwnProperty("city")) {
                    _this.visitorCity = sourceJson["city"];
                }

                var isGdpr = utils.isGdprCountry(visitor.visitorGeo)
                if(isGdpr){
                    _this.getConsentData(visitor.getConsentDataCallback)
                } else {
                    visitor.writeGeoCookie(true)
                }
            };

            this.getConsentDataCallback = function(){
                // write geoCookies if cmp returned true for purpose 1.  Delete them if not.
                visitor.writeGeoCookie(visitor.consentData.purpose.consents["1"])
            }

            this.getConsentDataRetryMax = 5
            this.getConsentDataCtr = 0;
            this.getConsentData = function(cb){
                // var cb = cb ? cb : null
                 // check for CMP
                if(window.__tcfapi != undefined){
                    // ping CMP to check status
                    __tcfapi('ping', 2, (data, success) => {
                        if(success && data.cmpLoaded){
                            __tcfapi('getTCData', 2, function(data, success){
                                  console.log("Geo: setConsentData: ", data)
                                  _this.consentData = data;
                                  if(cb){
                                    cb()
                                  }
                            })
                        } else {
                            // check CMP a few times
                            if(_this.getConsentDataCtr <= _this.getConsentDataRetryMax){
                                setTimeout(function(){
                                    _this.getConsentDataCtr++
                                    _this.getConsentData(cb)
                                }, 250)
                            } else {
                                Insticator.logger.logMessage("No CMP. Tried to reach CMP "+_this.getConsentDataCtr+" times.")
                            }
                        }
                    })
                } else {
                    Insticator.logger.logMessage("No CMP api found!")
                }
            }

            this.writeGeoCookie = function(doWrite){
                if(!!doWrite){
                    Insticator.logger.logMessage('Writing geo cookies')
                    utils.setCookie(_this.visitorGeoCookieName, _this.visitorGeo, 1);
                    utils.setCookie(_this.visitorCityCookieName, _this.visitorCity, 1);
                } else {
                    Insticator.logger.logMessage('Clearing geo cookies')
                    utils.setCookie(_this.visitorGeoCookieName, null, 0);
                    utils.setCookie(_this.visitorCityCookieName, null, 0);
                }
            }

            this.checkVisitorGeo = function() {
                _this.visitorGeo = utils.getCookie(_this.visitorGeoCookieName);
                _this.visitorCity = utils.getCookie(_this.visitorCityCookieName);
                if(_this.visitorGeo !== "" && _this.visitorCity != "") {
                    Insticator.logger.logMessage("Found Geo cookies! visitorGeo: " + _this.visitorGeo);
                    var isGdpr = utils.isGdprCountry(visitor.visitorGeo)
                    if(isGdpr){
                        _this.getConsentData(visitor.getConsentDataCallback)
                    }
                    ad.checkBlockAdsForGeo();
                } else {
                    Insticator.logger.logMessage("Geo not in cookie");
                    _this.visitorGeo = "UNKNOWN";
                    _this.visitorCity = "UNKNOWN";
                    _this.fetchVisitorGeo();
                }
            };
        }

        function Tracking() {
            this.settings = {
                TRACKING_PIXEL_ENDPOINT: "https://dh014lg6uwepv.cloudfront.net/pixel.gif"
            };
            this.embedUUID = "UNKNOWN";
            this.embedIsActivated = "UNKNOWN";
            this.adIsActivated = "true";
            this.adUnitsConfigured = "UNKNOWN";
            this.adUnitsOnPage = [];
            this.siteUUID = "3bcef0ba-22e5-449e-a57d-639aa28bf73a";
            this.embeds = JSON.parse('{"b3a2ac5f-fefe-4dc7-b8d7-d709f24d9d88":true}'),
            this.pageUrl = "UNKNOWN";

            var _this = this;

            this.checkBodyCode = function() {
                var insticatorContainerElement = document.getElementById("insticator-container");
                if(insticatorContainerElement) {
                    var insticatorBodyScript = insticatorContainerElement.getElementsByTagName("script");
                    if(insticatorBodyScript && insticatorBodyScript.length > 0) {
                        for(var i=0; i<insticatorBodyScript.length; i++) {
                            var bodyCode = insticatorBodyScript[i].innerHTML;
                            var found = _this.extractEmbedUUIDFromText(bodyCode);
                            if(found) {
                                _this.embedUUID = found;
                                Insticator.logger.logMessage("widgetUUID in body script: " + _this.embedUUID);
                                break;
                            }
                        }
                        if(_this.embedUUID === "UNKNOWN") {
                            Insticator.logger.logMessage("widgetUUID not available in body script");
                        }
                    } else {
                        var search = _this.extractEmbedUUIDFromText(insticatorContainerElement.classList["value"]);
                        if (search) {
                            _this.embedUUID = search;
                        } else {
                            Insticator.logger.logMessage("insticatorBodyScript not available");
                        }
                    }
                } else {
                    var embedElement = document.querySelector("div[embed-id]");
                    if(embedElement) {
                        _this.embedUUID = embedElement.getAttribute("embed-id");
                        Insticator.logger.logMessage("widgetUUID in embed div: " + _this.embedUUID);
                    } else {
                        Insticator.logger.logMessage("embedElement not available");
                    }
                }
            };

            this.extractEmbedUUIDFromText = function(text) {
                try {
                    var regex = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;
                    var found = text.match(regex);
                    if(found) {
                        Insticator.logger.logMessage("embedUUID in body script: " + found[0]);
                        return found[0];
                    }
                } catch(e) {
                    Insticator.logger.logMessage("Can not extract embedUUID due to: " + e);
                }
                return null;
            };

            this.checkEmbedCodeAndSettingOnPage = function() {
                if(_this.embedUUID !== "UNKNOWN") {
                    if(_this.embeds.hasOwnProperty(_this.embedUUID)) {
                        _this.embedIsActivated = _this.embeds[_this.embedUUID];
                    } else {
                        Insticator.logger.logMessage("embedUUID does not existing.");
                    }
                } else {
                    _this.checkBodyCode();
                }
            };

            this.formatEmbedAndAdSetting = function() {
                var array = [];
                
                    array.push("div-insticator-ad-1");
                
                    array.push("div-insticator-ad-2");
                
                    array.push("div-insticator-ad-cmt-1");
                
                    array.push("div-insticator-ad-cmt-2");
                
                _this.adUnitsConfigured = array.toString();
            };

            this.checkAdUnitsOnPage = function() {
                var array = [];
                for(var i=1; i<10; i++) {
                    var elem = document.getElementById('div-insticator-ad-' + i);
                    if(elem) {
                        array.push(elem.id);
                    }
                }
                _this.adUnitsOnPage = array.toString();
            };

            this.getPageUrl = function() {
                var topWindowPageUrl = "N/A";
                try {
                    topWindowPageUrl = window.top.location.href;
                } catch(e) {
                    Insticator.logger.logMessage("top window is not accessible.");
                }
                _this.pageUrl = topWindowPageUrl === "N/A" ? document.referrer : document.location.href;
                return _this.pageUrl;
            };

            this.fetchSettingsOnPage = function() {
                _this.formatEmbedAndAdSetting();
                _this.checkEmbedCodeAndSettingOnPage();
                _this.checkAdUnitsOnPage();
                _this.getPageUrl();
            };

            this.confirmEmbedUUID = function(embedUUID) {
                if(_this.embedUUID === "UNKNOWN") {
                    _this.embedUUID = embedUUID;
                    Insticator.logger.logMessage("embedUUID confirmed: " + embedUUID);
                } else {
                    if(_this.embedUUID !== embedUUID) {
                        Insticator.logger.logMessage("embedUUID inconsistency, old: " + _this.embedUUID  + " new: " + embedUUID);
                    }
                }
            };
        }

        function Prebid() {
            var _this = this;
            this.getWindowLocation = function() {
                return window.location;
            };

            this.getWindowSelf = function() {
                return window.self;
            };

            this.getWindowTop = function() {
                return window.top;
            };

            this.getTopWindowLocation = function() {
                if (_this.inIframe()) {
                    var loc;
                    try {
                        loc = _this.getAncestorOrigins() || _this.getTopFrameReferrer();
                    } catch (e) {
                        Insticator.logger.logMessage('could not obtain top window location: ' + e);
                    }
                    if (loc)
                        return _this.parse(loc, {
                            'decodeSearchAsString': true
                        });
                }
                return _this.getWindowLocation();
            };

            this.inIframe = function() {
                try {
                    return _this.getWindowSelf() !== _this.getWindowTop();
                } catch (e) {
                    return true;
                }
            };

            this.getAncestorOrigins = function() {
                if (window.document.location && window.document.location.ancestorOrigins && window.document.location.ancestorOrigins.length >= 1) {
                    return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1];
                }
            };

            this.getTopFrameReferrer = function() {
                try {
                    window.top.location.toString();
                    var referrerLoc = '';
                    var currentWindow;
                    do {
                        currentWindow = currentWindow ? currentWindow.parent : window;
                        if (currentWindow.document && currentWindow.document.referrer) {
                            referrerLoc = currentWindow.document.referrer;
                        }
                    } while (currentWindow !== window.top);return referrerLoc;
                } catch (e) {
                    return window.document.referrer;
                }
            };

            this.parse = function(url, options) {
                var parsed = document.createElement('a');
                if (options && 'noDecodeWholeURL'in options && options.noDecodeWholeURL) {
                    parsed.href = url;
                } else {
                    parsed.href = decodeURIComponent(url);
                }
                return {
                    href: parsed.href,
                    protocol: (parsed.protocol || '').replace(/:$/, ''),
                    hostname: parsed.hostname,
                    port: +parsed.port,
                    pathname: parsed.pathname.replace(/^(?!\/)/, '/'),
                    hash: (parsed.hash || '').replace(/^#/, ''),
                    host: parsed.host || window.location.host
                };
            };
        }

        

        
function DMP() {
    this.b2cCookieId = "";
    this.dmpCookieId = "";
    this.stopPostingMessageToB2CIframe = false;
    this.caHost = "https://ca.insticator.com";
    this.b2cHost = "https://b2c.insticator.com";
    this.ccPixelHost = "https://t.ingage.tech";
    this.insticatorPixelHost = "https://uet.ingage.tech";
    this.integrationWindow = "";
    this.isPrivacyPolicyNeeded = false;
    this.enableDmp = false;

    var _this = this;

    this.createB2CIframe = function() {
        _this.integrationWindow = _this.isFriendlyIframe() ? window.top : window;
        if (_this.integrationWindow.document.getElementById('insticatorUserTrackingIframe') === null
                && typeof _this.integrationWindow['insticatorIframeLoaded'] === 'undefined') {
            Insticator.logger.logMessage("In createB2CIframe");
            _this.integrationWindow['insticatorIframeLoaded'] = true;
            var iframe = _this.integrationWindow.document.createElement('iframe');
            iframe.setAttribute("id", "insticatorUserTrackingIframe");
            iframe.style.display = "none";
            iframe.src = "https://b2c.insticator.com/v3/pages/usertracking";
            _this.integrationWindow.document.body.appendChild(iframe);
            _this.checkB2CIframeLoaded();
        }
    };

    this.isFriendlyIframe = function() {
        try {
            return window.self.location.href === window.top.location.href;
        } catch (e) {
            return false;
        }
    };

    this.checkB2CIframeLoaded = function() {
        Insticator.logger.logMessage("In checkB2CIframeLoaded, stopPostingMessageToB2CIframe " +
                _this.stopPostingMessageToB2CIframe);
        if (_this.stopPostingMessageToB2CIframe) {
            return;
        }
        var b2cIframe = _this.integrationWindow.document.getElementById('insticatorUserTrackingIframe');
        if (b2cIframe) {
            _this.checkUserLocation();
        }
        window.setTimeout(_this.checkB2CIframeLoaded, 500);
    };

    this.checkUserLocation = function() {
        Insticator.logger.logMessage("In checkUserLocation");
        var euCounties = ['BE', 'BG', 'CZ', 'DK','DE', 'EE', 'IE', 'EL', 'ES', 'FR', 'HR', 'IT', 'CY', 'LV', 'LT', 'LU', 'HU', 'MT', 'NL', 'AT', 'PL', 'PT', 'RO', 'SI', 'SK', 'FI', 'SE', 'UK'];
        if (euCounties.indexOf(visitor.visitorGeo) >= 0) {
            _this.isPrivacyPolicyNeeded = true;
            _this.sendMessageToInsticatorIframe({privacyPolicyRegion : true});
        } else {
            _this.isPrivacyPolicyNeeded = false;
            _this.sendMessageToInsticatorIframe({privacyPolicyRegion : false});
        }
    };

    this.sendMessageToInsticatorIframe = function(message) {
        message.fromInsticator = true;
        _this.integrationWindow.document.getElementById("insticatorUserTrackingIframe").contentWindow.postMessage(message, '*');
        Insticator.logger.logMessage("message posted to insticator iframe");
        _this.setIframeListener();
    };

    this.setIframeListener = function() {
        _this.integrationWindow.addEventListener('message', (event) => {
            if (event.origin === _this.b2cHost) {
                _this.stopPostingMessageToB2CIframe = true;
                if (event.data.hasOwnProperty('userId')) {
                    _this.integrationWindow['insticatorUserTrackingMessage'] = event.data;
                    _this.b2cCookieId = event.data.userId;
                    if (_this.enableDmp) {
                        _this.dropCCDmpSDK();
                    }
                }
            }
        });
    };

    this.dropCCDmpSDK = function() {
        Insticator.logger.logMessage("In dropCCDmpSDK");
        var ccDmpSDK = _this.integrationWindow.document.createElement("script");
        ccDmpSDK.setAttribute("async", "");
        ccDmpSDK.setAttribute("defer", "");
        ccDmpSDK.src = _this.ccPixelHost + "/sdk.js";
        _this.integrationWindow.document.head.append(ccDmpSDK);
        _this.setCCDmpSDKListener();
    }
    ;

    this.setCCDmpSDKListener = function() {
        _this.integrationWindow.addEventListener('nstctrReady', function() {
            Insticator.logger.logMessage("cc sdk dropped");
            _this.dmpCookieId = _this.integrationWindow.NSTCTR.getCookieId();
            _this.loadInsticatorPixel();
            _this.performInsticatorLiveRampCookieSync();
            _this.dropEyeotaPixel();
        });
    };

    this.loadInsticatorPixel = function() {
        var insticatorPixel = _this.integrationWindow.document.createElement("img");
        insticatorPixel.onload = function () {
            Insticator.logger.logMessage("insticator pixel - onload");
        };
        insticatorPixel.onerror = function () {
            Insticator.logger.logMessage("insticator pixel - onerror");
        };
        insticatorPixel.height = "1";
        insticatorPixel.width = "1";
        insticatorPixel.border = "0";
        insticatorPixel.hspace = "0";
        insticatorPixel.vspace = "0";
        if (_this.b2cCookieId === "" || _this.b2cCookieId === null) {
            _this.b2cCookieId = "null";
        }
        if (_this.dmpCookieId === "" || _this.dmpCookieId === null) {
            _this.dmpCookieId = "null";
        }
        insticatorPixel.src = this.insticatorPixelHost + "/pixel.png?cc_dmp_id=" + _this.dmpCookieId
            + "&insti_id=" + _this.b2cCookieId;
        _this.integrationWindow.document.body.appendChild(insticatorPixel);
    };

    this.performInsticatorLiveRampCookieSync = function() {
        var liverampPixel = _this.integrationWindow.document.createElement("img");
        liverampPixel.onload = function () {
            Insticator.logger.logMessage("liveramp pixel - onload");
        };
        liverampPixel.onerror = function () {
            Insticator.logger.logMessage("liveramp pixel - onerror");
        };
        liverampPixel.height = "1";
        liverampPixel.width = "1";
        liverampPixel.border = "0";
        liverampPixel.hspace = "0";
        liverampPixel.vspace = "0";
        liverampPixel.src = "//idsync.rlcdn.com/709351.gif?partner_uid=" + _this.dmpCookieId;
        _this.integrationWindow.document.body.appendChild(liverampPixel);
    };

    this.dropEyeotaPixel = function() {
        Insticator.logger.logMessage("In dropEyeotaPixel");
        if (!_this.isPrivacyPolicyNeeded) {
            var eyeotaPixel = _this.integrationWindow.document.createElement("script");
            eyeotaPixel.type='text/javascript';
            eyeotaPixel.setAttribute("async", "");
            eyeotaPixel.setAttribute("defer", "");
            eyeotaPixel.src = "https://ps.eyeota.net/pixel?pid=6d3b2cv&t=ajs&uid=" + _this.dmpCookieId;
            _this.integrationWindow.document.head.append(eyeotaPixel);
        }
    };
}

        var ad = new Ad();
        var dfp = new DFP();
        var passback = new Passback();
        var utils = new Utils();
        var visitor = new Visitor();
        var tracking = new Tracking();
        var dmp = new DMP();
        var inView = new InView(ad);
        var prebid = new Prebid();
        visitor.checkVisitorGeo();

        Insticator.settings = {
            visitorGeo: visitor.visitorGeo,
            dmpEnabled: false
        };

        

        ad.initializeVariables();
        utils.documentReady(tracking.fetchSettingsOnPage);
        dmp.createB2CIframe();

        if (ad.variables.enablePubmaticIh) {
            ad.loadPubmaticIH(ad.loadInstBid);
            setTimeout(ad.loadInstBid, 500);
        } else {
            ad.loadInstBid();
        }

        
            ad.loadConfiant(utils, tracking);
        
        
        
            ad.loadSovrnBeacon();
        
        

        if(!utils.isMobileDevice) {
            
                
                    var originalArray = [[300, 250]];
var sizeArray = [[300, 250]];
var divId = 'div-insticator-ad-1';

    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: '33across',
                params: {
                    siteId: 'atx4xsU7Or6R0PaKlId8sQ',
                    productId: 'siab'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'appnexus',
                params: {
                    placementId: '16324167'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }




    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'districtm',
                params: {
                    placementId: '13202098'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'districtmDMX',
                params: {
                    dmxid: '207882',
                    memberid:'100683'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'emx_digital',
                params: {
                    tagid: '34670'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'gumgum',
                params: {
                    inSlot: '18035'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: []
        };
        for(var i=0; i < sizeArray.length; i++) {
            var dimension = [sizeArray[i][0], sizeArray[i][1]];
            var bid = {
                bidder: 'ix',
                params: {
                    siteId: '344471',
                    size: dimension
                }
            };
            adUnit.bids.push(bid);
        }
        ad.addToAdUnitsMap(adUnit);
    }






    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153530',
                    zoneId: '771356'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sonobi',
                params: {
                    placement_id: '4c4c920a6cf262ee66db'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sovrn',
                params: {
                    tagid: '754915'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-6272D7A84A8A272A1E3DD2B27A29D2E3'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '18672166'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }









                
            
                
                    var originalArray = [[300, 250]];
var sizeArray = [[300, 250]];
var divId = 'div-insticator-ad-2';

    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: '33across',
                params: {
                    siteId: 'atx4xsU7Or6R0PaKlId8sQ',
                    productId: 'siab'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'appnexus',
                params: {
                    placementId: '16324168'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }




    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'districtm',
                params: {
                    placementId: '13202100'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'districtmDMX',
                params: {
                    dmxid: '207883',
                    memberid:'100683'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'emx_digital',
                params: {
                    tagid: '34671'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'gumgum',
                params: {
                    inSlot: '18036'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: []
        };
        for(var i=0; i < sizeArray.length; i++) {
            var dimension = [sizeArray[i][0], sizeArray[i][1]];
            var bid = {
                bidder: 'ix',
                params: {
                    siteId: '344472',
                    size: dimension
                }
            };
            adUnit.bids.push(bid);
        }
        ad.addToAdUnitsMap(adUnit);
    }






    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153530',
                    zoneId: '771358'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sonobi',
                params: {
                    placement_id: '4c4c920a6cf262ee66db'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sovrn',
                params: {
                    tagid: '754915'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-6272D7A84A8A272A1E3DD2B27A29D2E3'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '18672166'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }









                
            
                
                    var originalArray = [[300, 250]];
var sizeArray = [[300, 250]];
var divId = 'div-insticator-ad-cmt-1';

    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: '33across',
                params: {
                    siteId: 'bAsyo8U7Or6PeLaKkv7mNO',
                    productId: 'siab'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }










    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'gumgum',
                params: {
                    inSlot: '81515'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: []
        };
        for(var i=0; i < sizeArray.length; i++) {
            var dimension = [sizeArray[i][0], sizeArray[i][1]];
            var bid = {
                bidder: 'ix',
                params: {
                    siteId: '579237',
                    size: dimension
                }
            };
            adUnit.bids.push(bid);
        }
        ad.addToAdUnitsMap(adUnit);
    }








    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sovrn',
                params: {
                    tagid: '754924'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }




    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '18672166'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }









                
            
                
                    var originalArray = [[300, 250]];
var sizeArray = [[300, 250]];
var divId = 'div-insticator-ad-cmt-2';

    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: '33across',
                params: {
                    siteId: 'bAsyo8U7Or6PeLaKkv7mNO',
                    productId: 'siab'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }










    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'gumgum',
                params: {
                    inSlot: '81516'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: []
        };
        for(var i=0; i < sizeArray.length; i++) {
            var dimension = [sizeArray[i][0], sizeArray[i][1]];
            var bid = {
                bidder: 'ix',
                params: {
                    siteId: '579237',
                    size: dimension
                }
            };
            adUnit.bids.push(bid);
        }
        ad.addToAdUnitsMap(adUnit);
    }








    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sovrn',
                params: {
                    tagid: '754924'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }




    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[300,250],[320,100],[320,50]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '18672166'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }









                
            
        } else {
            
                
                   var originalArray = [[300, 250]];
var sizeArray = [[300, 250]];
var divId = 'div-insticator-ad-1';

    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: '33across',
                params: {
                    siteId: 'atx4xsU7Or6R0PaKlId8sQ',
                    productId: 'siab'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'appnexus',
                params: {
                    placementId: '16324164'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }




    if(ad.settings.multisize.on) {
        var sizeArray = [[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'districtm',
                params: {
                    placementId: '13202094'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'districtmDMX',
                params: {
                    dmxid: '207880',
                    memberid:'100683'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'emx_digital',
                params: {
                    tagid: '34673'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'gumgum',
                params: {
                    inSlot: '18050'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: []
        };
        for(var i=0; i < sizeArray.length; i++) {
            var dimension = [sizeArray[i][0], sizeArray[i][1]];
            var bid = {
                bidder: 'ix',
                params: {
                    siteId: '344469',
                    size: dimension
                }
            };
            adUnit.bids.push(bid);
        }
        ad.addToAdUnitsMap(adUnit);
    }






    if(ad.settings.multisize.on) {
        var sizeArray = [[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153532',
                    zoneId: '771322'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sonobi',
                params: {
                    placement_id: 'bca9f4849a655d39df09'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sovrn',
                params: {
                    tagid: '754915'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-6272D7A84A8A272A1E3DD2B27A29D2E3'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '18672167'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }









                
            
                
                   var originalArray = [[300, 250]];
var sizeArray = [[300, 250]];
var divId = 'div-insticator-ad-2';

    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: '33across',
                params: {
                    siteId: 'atx4xsU7Or6R0PaKlId8sQ',
                    productId: 'siab'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'appnexus',
                params: {
                    placementId: '16324165'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }




    if(ad.settings.multisize.on) {
        var sizeArray = [[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'districtm',
                params: {
                    placementId: '16313669'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'districtmDMX',
                params: {
                    dmxid: '380268',
                    memberid:'100683'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'emx_digital',
                params: {
                    tagid: '34674'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'gumgum',
                params: {
                    inSlot: '18051'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: []
        };
        for(var i=0; i < sizeArray.length; i++) {
            var dimension = [sizeArray[i][0], sizeArray[i][1]];
            var bid = {
                bidder: 'ix',
                params: {
                    siteId: '344469',
                    size: dimension
                }
            };
            adUnit.bids.push(bid);
        }
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'openx',
                params: {
                    unit: '123',
                    delDomain: 'insticator-d.openx.net'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }





    if(ad.settings.multisize.on) {
        var sizeArray = [[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153532',
                    zoneId: '771328'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sonobi',
                params: {
                    placement_id: 'bca9f4849a655d39df09'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sovrn',
                params: {
                    tagid: '754915'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-6272D7A84A8A272A1E3DD2B27A29D2E3'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }


    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-2',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '18672167'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }









                
            
                
                   var originalArray = [[300, 250]];
var sizeArray = [[300, 250]];
var divId = 'div-insticator-ad-cmt-1';

    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: '33across',
                params: {
                    siteId: 'bAsyo8U7Or6PeLaKkv7mNO',
                    productId: 'siab'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }










    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'gumgum',
                params: {
                    inSlot: '81530'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }



    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: []
        };
        for(var i=0; i < sizeArray.length; i++) {
            var dimension = [sizeArray[i][0], sizeArray[i][1]];
            var bid = {
                bidder: 'ix',
                params: {
                    siteId: '579237',
                    size: dimension
                }
            };
            adUnit.bids.push(bid);
        }
        ad.addToAdUnitsMap(adUnit);
    }








    if(ad.settings.multisize.on) {
        var sizeArray = [[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'sovrn',
                params: {
                    tagid: '754924'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }




    if(ad.settings.multisize.on) {
        var sizeArray = [[336,280],[320,100],[320,50],[300,250]];
        sizeArray = ad.getFinalSizeArray(originalArray, sizeArray, divId);
    }
    if (sizeArray && sizeArray.length > 0) {
        var adUnit = {
            code: 'div-insticator-ad-cmt-1',
            mediaTypes: {
                banner: {
                    sizes: sizeArray
                }
            },
            bids: [{
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '18672167'
                }
            }]
        };
        ad.addToAdUnitsMap(adUnit);
    }









                
            
        }

        instBid.que.push(function() {
            instBid.setConfig({
                useBidCache: true,
                userSync: {
                    filterSettings: {
                        all: {
                            bidders: '*',
                            filter: 'include'
                        }
                    },
                    syncsPerBidder: 3,
                    syncDelay: 6000
                },
                improvedigital: {
                    singleRequest: true,
                    usePrebidSizes: true
                },
                rubicon: {
                    singleRequest: true
                },
                schain: {
                    validation: 'strict',
                    config: {
                        ver: '1.0',
                        complete: 1,
                        nodes: [
                            {
                                asi: 'insticator.com',
                                sid: '0e2a4d2b-4ada-430b-8e58-8a5a10eb04eb',
                                hp: 1
                            }
                        ]
                    }
                },
                consentManagement:(function(){
                    var consentsSettings = {}
                    // Dont load GDPR if user not geo-located not in GDPR country
                    if(utils.isGdprCountry(visitor.visitorGeo)){
                        consentsSettings['gdpr'] = {
                            cmpApi: 'iab',
                            defaultGdprScope: true,
                            timeout: 3000
                        }
                    }
                    consentsSettings['usp']= {
                        timeout: 1000
                    }
                    return consentsSettings
                })()
            });
            instBid.aliasBidder("appnexus", "yieldnexus");
            if (!ad.variables.blockAds) {
                utils.documentReady(function() {
                    if (inView.settings.enableInview && !utils.isIframe) {
                        inView.injectInviewDiv(utils.isMobileDevice, true);
                    }
                    ad.setTimeoutForInit();
                    ad.fetchAds();
                    if (ad.variables.inViewRefresh.on) {
                        ad.initializeInviewRefreshAdUnits();
                    }
                    if (ad.variables.inViewRefresh.on && ad.variables.inViewRefresh.attachObserver) {
                        utils.divObserver(ad);
                        ad.variables.inViewRefresh.attachObserver = false;
                    }
                });
            } else {
                Insticator.logger.logMessage("Ads blocked for GEO");
            }
            instBid.bidderSettings = {
                standard: {
                    adserverTargeting: [{
                        key: 'ib',
                        val: function(bidResponse) {
                            switch(bidResponse.bidderCode) {
                                case "ix":
                                    return "indexExchange";
                                case "emx_digital":
                                    return "brealtime";
                                case "districtm":
                                    return "districtmDMX";
                                case "yieldnexus":
                                    return "YieldNexus";
                                default:
                                    return bidResponse.bidderCode;
                            }
                        }
                    }, {
                        key: 'iaid',
                        val: function(bidResponse) {
                            return bidResponse.adId;
                        }
                    }, {
                        key: 'iba',
                        val: function(bidResponse) {
                            Insticator.logger.logMessage("New bid for: " + bidResponse.adUnitCode + " from: " + bidResponse.bidderCode + " at cpm: " + bidResponse.cpm + " with size: " + bidResponse.size);
                            var finalCPM = ad.getFinalCPM(bidResponse.cpm);
                            if(bidResponse.adUnitCode in ad.variables.hbFills) {
                                if(bidResponse.cpm > ad.variables.hbFills[bidResponse.adUnitCode].cpm) {
                                    Insticator.logger.logMessage("New higher bid for: " + bidResponse.adUnitCode + " with adId: " + bidResponse.adId + " at cpm: " + bidResponse.cpm + " with size: " + bidResponse.size);
                                    ad.variables.hbFills[bidResponse.adUnitCode] = {cpm : bidResponse.cpm, adId : bidResponse.adId, bidderCode : bidResponse.bidderCode, size: bidResponse.size};
                                }
                            } else {
                                ad.variables.hbFills[bidResponse.adUnitCode] = {cpm : bidResponse.cpm, adId : bidResponse.adId, bidderCode : bidResponse.bidderCode, size: bidResponse.size};
                            }
                            var bidAmount = ad.getBidAmount(finalCPM);
                            return bidAmount;
                        }
                    }, {
                        key: 'ics',
                        val: function(bidResponse) {
                            return bidResponse.size;
                        }
                    }]
                },
                "33across": {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                adkernel: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        if(ad.getBidFloor(bidCpm, bid, "adkernel") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                amx: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                appnexus: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                beachfront: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                conversant: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                districtm: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - (0.0 + discrepancy) / 100);
                    }
                },
                districtmDMX: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                        discrepancy = 0.0;
                        
                        return bidCpm * (1 - (0.0 + discrepancy) / 100);
                    }
                },
                emx_digital: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                        return bidCpm * (1 - (0.0 + discrepancy) / 100);
                    }
                },
                eplanning: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                gumgum: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                improvedigital: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - (30.0 + discrepancy) / 100);
                    }
                },
                insticator: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                ix: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                mediago: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                openx: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                pubmatic: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - (0.0 + discrepancy) / 100);
                    }
                },
                pulsepoint: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                rhythmone: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - (0.0 + discrepancy) / 100);
                    }
                },
                rubicon: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - (0.0 + discrepancy) / 100);
                    }
                },
                sharethrough: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                synacormedia: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                sonobi: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                sovrn: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                rhythmone: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                ucfunnel: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                yieldnexus: {
                    bidCpmAdjustment: function (bidCpm, bid) {
                        var discrepancy = 0;
                        
                            discrepancy = 0.0;
                        
                        return bidCpm * (1 - discrepancy / 100);
                    }
                }
            };
        });

        
            if(ad.variables.blockAds) {
                Insticator.logger.logMessage("This geo is blocked for time based refresh.");
            } else {
                // dont set this timer if lazyad is on
                if(!ad.variables.lazyLoad.on){ 
                    ad.variables.autoRefreshTimer = setInterval(ad.autoRefreshAd, ad.getAutoRefreshInterval());
                }
            }
        

        var analyticsProviders = [];
        if (analyticsProviders.length > 0) {
            instBid.que.push(function () {
                instBid.enableAnalytics(analyticsProviders);
            });
        }

        Insticator.ad = {
            queue: Insticator.ad.q,
            loadAd: function(containerId) {
                var loadFunc = function(){
                    var gamEnabled = ad.isGAMEnabled(containerId)
                    var forceHouseAd = ad.isInvalidTraffic();
                    ad.appendAd(containerId, gamEnabled, forceHouseAd);
                }
                if(ad.variables.ready) {
                    
                        Insticator.logger.logMessage("in loadAd")
                        loadFunc()
                    
                } else {
                    Insticator.logger.logMessage("Add to queue: " + containerId);
                    this.queue.push(containerId);
                }
            },
            loadAllAds: function() {
                var loadFunc = function(){
                        var forceHouseAd = ad.isInvalidTraffic()
                        Insticator.ad.queue.forEach(function(containerId) {
                            var gamEnabled = ad.isGAMEnabled(containerId)
                            ad.appendAd(containerId, gamEnabled, forceHouseAd);
                        });
                }
                
                    Insticator.logger.logMessage("in loadAllAds")
                    loadFunc()
                
            },
            confirmEmbedUUID: function(embedUUID) {
                Insticator.logger.logMessage("confirmEmbedUUID: " + embedUUID);
                tracking.confirmEmbedUUID(embedUUID);
            }
        };

    }());
} catch(e) {
    console.error("header code error: ", e.message);
}