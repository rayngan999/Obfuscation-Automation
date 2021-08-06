ï»¿// cwt3.js v1.1
// Similar to cwt2, but handles iframe and microsite tracking when third-party cookies are blocked
window.cwtObj = new CitywireTracking(window.cwtUrl, window.cwtOnReady);

(function () {
    var firstRun = true;
    var utilities = new CitywireTrackingUtilities();
    var readyStateCheckInterval = setInterval(function () {
        if (typeof document.body !== 'undefined' && document.body !== null) {
            if(cwtObj.cwtGetTrackingID() == null)
            {
                cwtObj.cwtInitializeTrackingID(firstRun);
                firstRun = false;
            }
            else {
                //We push this into the queue, instead of calling it directly 
                //in case any other events were pushed into the queue before this impression should occur
                //For example: _setUserID
                window._cwt = window._cwt || [];
                window._cwt.push(['_trackImpression']);

                cwtObj.cwtAttachedEvents();
                clearInterval(readyStateCheckInterval);

                if (utilities.doesQueryStringContainTidKey()) {
                    var queryString = document.location.search;
                    queryString = removeParam("tid", queryString);
                    window.history.replaceState(null, null, window.location.pathname + queryString);
                }
            }
        }
    }, 10);

    function removeParam(key, queryString) {
        var regex = new RegExp('[\?&]' + key + '(?:=([^&#]*)|[&#]|$)').exec(queryString);
        queryString = queryString.replace(regex[0], "");
        if (queryString.length > 0 && queryString[0] === "&") {
            queryString = "?" + queryString.substring(1);
        }
        return queryString;
    }
    
})();

function CitywireTracking(url, onReady) {

    var $this = this,
        $trackingID = null,
        $cwtReloads = 0,
        $utmTrackingID = null,
        $url = url,
        $trackedPath = encodeURIComponent(window.location.pathname),
        $trackedQueryString = encodeURIComponent(window.location.search),
        $trackedHash = encodeURIComponent(window.location.hash),
        $utilities = new CitywireTrackingUtilities(),
        $userID = null,
        $generatedTrackingID = null;
        $articleType = null;

    $this.cwtGetTrackingID = function() {
        return $trackingID;
    };

    $this.cwtInitializeTrackingID = function (firstRun) {
        var trackingCookie = $utilities.readCookie("cwt");

        if (trackingCookie == null) {
            if (window.cwtIsMicrosite === true && !$utilities.doesQueryStringContainTidKey()) {
                if (firstRun) {
                    var encodedUrl = encodeURIComponent(window.location.href);
                    var endpointUrl = "https://accounts.citywire.info/"
                    if (endpointUrl.indexOf("#") > -1) {
                        endpointUrl = "https://dev-accounts.citywire.info/";
                    }

                    $this.cwtSetCwtReloadsCookie();

                    if ($cwtReloads < 3) {
                        window.location.replace(endpointUrl + "tracking/GetTid?returnUrl=" + encodedUrl + "&reloads=" + $cwtReloads);
                    }
                }
            }
            else {
                $utilities.getJsonP(url + "getTID", "window.cwtObj.cwtSetTrackingCookie");
            }
            if ($trackingID == null) {
                // Tracking cookie can't be read, probably because we're in an iframe and third-party cookies are blocked
                // Query string used for ezine and virtual-event iframes
                $trackingID = $utilities.getTidFromQueryString() || $generatedTrackingID;
            }
        }
        else {
            $trackingID = $utilities.readCookie("cwt");
        }
    };
    
    $this.cwtSetTrackingCookie = function (responseData) {
        var trackingCookie = $utilities.readCookie("cwt");

        if (trackingCookie == null) {
            $utilities.createCookie("cwt", $this.cwtGetTrackingID() || $utilities.getTidFromQueryString() || responseData.GeneratedTrackingId, 18262);
        }

        $trackingID = $utilities.readCookie("cwt");
        $generatedTrackingID = responseData.GeneratedTrackingId;
    };

    $this.cwtSetCwtReloadsCookie = function () {
        var reloadsCount = $utilities.readCookie("cwtreloads");

        reloadsCount = reloadsCount || 0;
        $utilities.createCookie("cwtreloads", parseInt(reloadsCount) + 1, null, 10);

        $cwtReloads = $utilities.readCookie("cwtreloads");
    };

    $this.cwtFetchUtmTrackingIDJsonP = function () {
        $utilities.getJsonP($url + "getUtmTrackingID", "window.cwtObj.cwtFetchUtmTrackingID");
    };

    $this.cwtFetchUtmTrackingID = function (data) {
        $utmTrackingID = data;
    };

    $this.cwtGetUtmTrackingID = function () {
        return $utmTrackingID;
    }
    
    $this.cwtE = function(params, onReply) {
        var controllerUrl = $url,
            replied = false,
            img = new Image(),
            timeout = setTimeout(function() {
                if (replied === false) {
                    replied = true;

                    if ($utilities.ItemExists(onReply)) {
                        onReply();
                    }
                }
            }, 2000);

        img.onload = function() {
            if (replied === false) {
                replied = true;
                clearTimeout(timeout);
                if ($utilities.ItemExists(onReply)) {
                    onReply();
                }
            }
        };

        controllerUrl += '__E2.gif';
        img.src = controllerUrl + '?' + params;
        img.style.display = 'none';
    };

    $this.cwtAttachedEvents = function () {
        if ($trackingID == null) {
            $this.cwtInitializeTrackingID();
        }
        else {
            var i = 0,
                actionName = null,
                params = null;

            if ($utilities.ItemExists(window._cwt) && window._cwt.length > 0) {
                for (i = 0; i < window._cwt.length; i++) {
                    actionName = window._cwt[i][0];

                    if (actionName != null) {
                        params = window._cwt[i];
                        params.splice(0, 1);
                        $this[actionName](params);
                    }
                }
            }

            window._cwt = {
                push: function (args) {
                    actionName = args[0];

                    if (actionName != null) {
                        var func = $this[actionName];
                        if (!func) {
                            console.warn(actionName + " CW tracking function is not defined");
                        }
                        else {
                            params = args;
                            params.splice(0, 1);
                            func(params);
                        }

                    }
                }
            };
        }
    };

    $this._setUserID = function (userID) {
        $userID = userID;
    };

    $this._setArticleType = function (articleType) {
        $articleType = articleType;
    };

    $this._setLocation = function(parameters) {
        var eventPath = parameters[0],
            eventQueryString = parameters[1],
            eventHash = parameters[2];

        $trackedPath = encodeURIComponent(window.location.pathname);
        $trackedQueryString = encodeURIComponent(window.location.search);
        $trackedHash = encodeURIComponent(window.location.hash);

        if ($utilities.ItemExists(eventPath)) {
            $trackedPath = encodeURIComponent(eventPath);
        }

        if ($utilities.ItemExists(eventQueryString)) {
            $trackedQueryString = encodeURIComponent(eventQueryString);
        }

        if ($utilities.ItemExists(eventHash)) {
            $trackedHash = encodeURIComponent(eventHash);
        }
    };

    $this._setQueryString = function (parameters) {
        $trackedQueryString = parameters[0];
    };

    $this._trackImpression = function (parameters) {
        var eventOnReply = parameters[0];
        $this._trackEvent(['Impression', "{ \"virtual\": \"false\", \"version\": 3 }", eventOnReply]);
    };

    $this._trackVirtualImpression = function(parameters) {
        var eventOnReply = parameters[0];
        $this._trackEvent(['Impression', "{ \"virtual\": \"true\", \"version\": 3 }", eventOnReply]);
    };
    
    $this._trackEvent = function(parameters) {
        var eventName = parameters[0],
            eventValue = parameters[1],
            onReply = parameters[2],
            params = 'eventname=' + eventName;
        
        params += '&eventvalue=' + eventValue;
        params += '&' + $this.getParams();
        
        $this.cwtE(params, onReply);
    };

    $this.getParams = function () {
        var params = '';
        params += 'tid=' + $trackingID;
        params += '&hostname=' + encodeURIComponent(window.location.hostname);
        params += '&pathname=' + $trackedPath;
        params += '&querystring=' + $trackedQueryString;
        params += '&referrer=' + encodeURIComponent(document.referrer);
        params += '&hash=' + $trackedHash;
        params += '&userid=' + $userID;
        params += '&r=' + new Date().getTime();
        params += '&articleType=' + $articleType;

        return params;
    };

    if (typeof onReady === 'function') {
        onReady();
    }
}

function CitywireTrackingUtilities() {
    var $this = this;
    var $tidRegex = /[\?&]tid(?:=([^&#]*)|[&#]|$)/;

    $this.ItemExists = function(item) {
        if (typeof item !== 'undefined' && item != 'undefined' && item !== 'undefined' && item != undefined && item !== undefined 
            && item != 'null' && item !== 'null' && item != null && item !== null && item) {
            return true;
        }

        return false;
    };

    $this.createCookie = function(name, value, days, minutes) {
        var date = new Date(),
            expires;

        days = days || 0;
        minutes = minutes || 0;
        if (days || minutes) {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000) + (minutes * 60000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }

        if (location.protocol === "https:") {
            document.cookie = name + "=" + value + expires + "; path=/; secure; samesite=none";
        } else {
            document.cookie = name + "=" + value + expires + "; path=/";
        }
    };

    $this.readCookie = function(name) {
        var nameEq = name + "=",
            ca = document.cookie.split(';'),
            i,
            c;

        for (i = 0; i < ca.length; i++) {
            c = ca[i];

            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }

            if (c.indexOf(nameEq) == 0) {
                return c.substring(nameEq.length, c.length);
            }
        }
        return null;
    };

    $this.getJsonP = function (url, callback) {
        var script = document.createElement('script');
        script.src = url + '?callback=' + callback + '&r=' + new Date().getTime();

        document.getElementsByTagName('head')[0].appendChild(script);
    };

    $this.getTidFromQueryString = function() {
        var queryString = document.location.search;
        var regex = $tidRegex.exec(queryString);
        if (regex !== null) {
            var val = regex[1];
            if (val !== null && val !== undefined && val !== '') {
                var tid = decodeURI(regex[1]);
                return tid || null;
            }
        }
        return null;
    }

    $this.doesQueryStringContainTidKey = function() {
        // Also covers case where query string contains tid without equals sign
        var queryString = document.location.search;
        return $tidRegex.exec(queryString) !== null;
    }
}








