ï»¿(function (factory) {
    if (typeof define !== 'undefined' && define.amd) {
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        window.scrollMonitor = factory();
    }
})(function () {


    var scrollTop = function () {
        return window.pageYOffset ||
			(document.documentElement && document.documentElement.scrollTop) ||
			document.body.scrollTop - (document.documentElement.clientTop || 0);
    };
    var scrollLeft = function () {
        return window.pageXOffset ||
			(document.documentElement && document.documentElement.scrollLeft) ||
			document.body.scrollLeft - (document.documentElement.clientLeft || 0);
    };
    function getOffsetSum(elem) {
        var top = 0,
	        left = 0,
	        bottom = 0,
	        right = 0;

        var width = elem.offsetWidth;
        var height = elem.offsetHeight;

        while (elem) {
            top += elem.offsetTop;
            left += elem.offsetLeft;
            elem = elem.offsetParent;
        }

        right = left + width;
        bottom = top + height;

        return {
            top: top,
            left: left,
            bottom: bottom,
            right: right,
            width: width,
            height: height
        }
    }

    function getOffsetRect(elem) {
        var box = elem.getBoundingClientRect();

        var body = document.body;
        var docElem = document.documentElement;

        // var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        // var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;

        var clientTop = docElem.clientTop;
        var clientLeft = docElem.clientLeft;


        var top = box.top + scrollTop() - clientTop;
        var left = box.left + scrollLeft() - clientLeft;
        var bottom = top + (box.bottom - box.top);
        var right = left + (box.right - box.left);
        var width = box.bottom - box.top;
        var height = box.right - box.left;
        return {
            top: Math.round(top),
            left: Math.round(left),
            bottom: Math.round(bottom),
            right: Math.round(right),
            width: width,
            height: height
        }
    }
    function IntervalViewport(elem) {
        if (elem.success) {
            clearInterval(elem.timer_nvn);
            elem.destroy();
            return;
        }
        if (!elem.ViewableSendRequest) {
            clearInterval(elem.timer_nvn);
            return;
        }
        var listInterval = elem.ViewableInterval;
        if (elem.viewcount == listInterval.length) {
            elem.success = true;
            return;
        }
        //var spantimer = document.getElementById("timer");
        //var spancount = document.getElementById("count");

        elem.intervalcount += 100;

        for (var i = 0; i < listInterval.length; i++) {
            var timecheck = listInterval[i] * 1000;
            if (elem.intervalcount == timecheck && elem.ViewableSendRequest && !elem.success) {
                elem.viewcount++;
                //spancount.innerHTML = elem.viewcount;
                elem.ajaxPost({ viewed: timecheck, nameAds: elem.watchItem.getAttribute('id') });
            }
        }
        //spantimer.innerHTML = elem.intervalcount / 1000;
        //console.log( 'dang xem ' + (elem.intervalcount/1000) );

    }
    function getOffset(elem) {
        if (elem) {
            if (elem.getBoundingClientRect) {
                return getOffsetRect(elem);
            } else { // old browser
                return getOffsetSum(elem);
            }
        } else
            return null;
    }

    var ajax = {};
    ajax.x = function () {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }
        var versions = [
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];

        var xhr;
        for (var i = 0; i < versions.length; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {
            }
        }
        return xhr;
    };

    ajax.send = function (url, callback, method, data, sync) {
        var x = ajax.x();
        x.open(method, url, sync);
        x.onreadystatechange = function () {
            if (x.readyState == 4) {
                callback(x.responseText)
            }
        };
        if (method == 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(data)
    };

    ajax.get = function (url, data, callback, sync) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        ajax.send(url + '?' + query.join('&'), callback, 'GET', null, sync)
    };

    ajax.post = function (url, data, callback, sync) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        ajax.send(url, callback, 'POST', query.join('&'), sync)
    };

    var exports = {};

    var watchers = [];

    var VISIBILITYCHANGE = 'visibilityChange';
    var ENTERVIEWPORT = 'enterViewport';
    var FULLYENTERVIEWPORT = 'fullyEnterViewport';
    var EXITVIEWPORT = 'exitViewport';
    var PARTIALLYEXITVIEWPORT = 'partiallyExitViewport';
    var LOCATIONCHANGE = 'locationChange';
    var STATECHANGE = 'stateChange';
    //var ADSVIEWRATE = 'adsviewrate';

    var eventTypes = [
		VISIBILITYCHANGE,
		ENTERVIEWPORT,
		FULLYENTERVIEWPORT,
		EXITVIEWPORT,
		PARTIALLYEXITVIEWPORT,
		LOCATIONCHANGE,
		STATECHANGE
	//	ADSVIEWRATE
    ];

    var defaultOffsets = { top: 0, bottom: 0, viewrate: 0 };
    var isminizeornewtab = false;

    var getViewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    var getViewportWidth = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    var getDocumentHeight = function () {
        // jQuery approach
        // whichever is greatest
        return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.documentElement.clientHeight
		);
    };

    exports.viewportTop = null;
    exports.viewportBottom = null;
    exports.documentHeight = null;
    exports.viewportHeight = getViewportHeight();
    exports.viewportLeft = null;
    exports.viewportRight = null;
    exports.viewportWidth = getViewportWidth();
    var previousDocumentHeight;
    var latestEvent;

    var calculateViewportI;

    //check visible element
    function isContained(child, parent) {
        var current = child;
        while (current) {
            if (current === parent) return true;
            current = current.parentNode;
        }
        return false;
    }
    function getWindow() {
        var wH = 0;
        var wW = 0;

        var doc = document.documentElement;
        wH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        wW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        return { left: 0, top: 0, width: wW, height: wH };
    }
    function isVisible(element) {
        if (element.offsetWidth === 0 || element.offsetHeight === 0) return false;
        var poswindow = getWindow();
        var pos = { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0 };
        if (element.getClientRects().length > 0) { pos = element.getClientRects()[0]; }
        var posview = { left: 0, top: 0, width: 0, height: 0 }
        var trai = pos.left <= poswindow.left && pos.right > poswindow.left;
        var phai = pos.left >= poswindow.left && pos.left <= poswindow.width;
        var tren = pos.top <= poswindow.top && pos.bottom > poswindow.top;
        var duoi = pos.top >= poswindow.top && pos.top <= poswindow.height;
        if (pos.left >= poswindow.left && pos.top >= poswindow.top &&
              pos.right <= poswindow.width && pos.bottom <= poswindow.height) {

            posview.left = pos.left;
            posview.width = pos.width;
            posview.top = pos.top;
            posview.height = pos.height;

        } else if (trai & tren) {
            if (pos.left == poswindow.left) {

                posview.left = pos.left;
                posview.width = pos.width;
            } else {

                posview.left = poswindow.left;
                posview.width = pos.right;
            }
            if (pos.top == poswindow.top) {

                posview.top = pos.top;
                posview.height = pos.bottom;
            } else {

                posview.top = poswindow.top;
                posview.height = pos.bottom;
            }


        } else if (trai & duoi) {
            if (pos.left == poswindow.left) {

                posview.left = pos.left;
                posview.width = pos.width;
            } else {

                posview.left = poswindow.left;
                posview.width = pos.right;
            }
            if (pos.bottom <= poswindow.height) {
                posview.top = pos.top;
                posview.height = pos.height;
            } else {
                posview.top = pos.top;
                posview.height = poswindow.height - pos.top;
            }
        } else if (phai & tren) {
            if (pos.right <= poswindow.width) {

                posview.left = pos.left;
                posview.width = pos.width;
            } else {

                posview.left = pos.left;
                posview.width = poswindow.width - pos.left;
            }
            if (pos.top == poswindow.top) {

                posview.top = pos.top;
                posview.height = pos.height;
            } else {

                posview.top = poswindow.top;
                posview.bottom = pos.bottom;
            }


        } else if (phai & duoi) {
            if (pos.right <= poswindow.width) {

                posview.left = pos.left;
                posview.width = pos.width;
            } else {

                posview.left = pos.left;
                posview.width = poswindow.width - pos.left;
            }
            if (pos.bottom <= poswindow.height) {

                posview.top = pos.top;
                posview.height = pos.height;
            } else {

                posview.top = pos.top;
                posview.height = poswindow.height - pos.top;
            }
        }
        var bol = false;
        var diemhienthi = 0;
        bol = isContained(document.elementFromPoint(posview.left + Math.round(posview.width / 2), posview.top + Math.round(posview.height / 2)), element);
        if (bol) { diemhienthi++; }

        bol = isContained(document.elementFromPoint(posview.left + 1, posview.top + Math.round(posview.height / 2)), element);
        if (bol) { diemhienthi++; }
        //document.elementFromPoint(x,y) === element ? bol = true : return false;

        //bol=isContained(document.elementFromPoint(posview.left+posview.width-1,posview.top+Math.round(posview.height/2)),element);
        //if(bol){diemhienthi++;}

        //document.elementFromPoint(x,y) === element ? bol = true : return false;

        bol = isContained(document.elementFromPoint(posview.left + Math.round(posview.width / 2), posview.top + posview.height - 1), element);
        if (bol) { diemhienthi++; }
        if (diemhienthi >= 3) { return true; }
        //document.elementFromPoint(x,y) === element ? bol = true : return false;

        bol = isContained(document.elementFromPoint(posview.left + Math.round(posview.width / 2), posview.top + 1), element);
        if (bol) { diemhienthi++; }

        //document.elementFromPoint(x,y) === element ? bol = true : return false;
        return diemhienthi >= 3;

    }
    //end check visible
    function calculateViewport() {
        exports.viewportTop = scrollTop();
        exports.viewportLeft = scrollLeft();
        exports.viewportHeight = getViewportHeight();
        exports.viewportWidth = getViewportWidth();
        exports.viewportRight = exports.viewportLeft + exports.viewportWidth;
        exports.viewportBottom = exports.viewportTop + exports.viewportHeight;
        exports.documentHeight = getDocumentHeight();
        if (exports.documentHeight !== previousDocumentHeight) {
            calculateViewportI = watchers.length;
            while (calculateViewportI--) {
                watchers[calculateViewportI].recalculateLocation();
            }
            previousDocumentHeight = exports.documentHeight;
        }
    }

    function recalculateWatchLocationsAndTrigger() {
        calculateViewport();
        updateAndTriggerWatchers();
    }

    var recalculateAndTriggerTimer;
    function debouncedRecalcuateAndTrigger() {
        clearTimeout(recalculateAndTriggerTimer);
        recalculateAndTriggerTimer = setTimeout(recalculateWatchLocationsAndTrigger, 100);
    }

    //tao su kien open new tab or minizebrowser
    function addEvent(obj, evType, fn, isCapturing) {
        if (isCapturing == null) isCapturing = false;
        if (obj.addEventListener) {
            // Firefox
            obj.addEventListener(evType, fn, isCapturing);
            return true;
        } else if (obj.attachEvent) {
            // MSIE
            var r = obj.attachEvent('on' + evType, fn);
            return r;
        } else {
            return false;
        }
    }
    var hidden = null;
    var visibilityChange = null;
    if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    } else if (typeof document.hidden !== "hidden") {
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    }
    if (hidden != null && visibilityChange != null) {
        addEvent(document, visibilityChange, function (event) {
            if (document[hidden]) {
                // document.getElementById("x").innerHTML += " " + visibilityChange+": "+hidden+"="+document[hidden]+" duy ";
                //document.getElementById("log").innerHTML += "Chuyen tabs";
                isminizeornewtab = true;
                debouncedRecalcuateAndTrigger();
            } else if (!document[hidden]) {
                //document.getElementById("log").innerHTML += "hien thi tabs";
                isminizeornewtab = false;
                debouncedRecalcuateAndTrigger();
            }
        });
    }
    var potentialPageVisibility = {
        pageVisibilityChangeThreshold: 3 * 3600, // in seconds
        init: function () {
            function setAsNotHidden() {
                var dispatchEventRequired = document.potentialHidden;
                document.potentialHidden = false;
                document.potentiallyHiddenSince = 0;
                if (dispatchEventRequired) dispatchPageVisibilityChangeEvent();
            }

            function initPotentiallyHiddenDetection() {
                if (!hasFocusLocal) {
                    // the window does not has the focus => check for  user activity in the window
                    lastActionDate = new Date();
                    if (timeoutHandler != null) {
                        clearTimeout(timeoutHandler);
                    }
                    timeoutHandler = setTimeout(checkPageVisibility, potentialPageVisibility.pageVisibilityChangeThreshold * 1000 + 100); // +100 ms to avoid rounding issues under Firefox
                }
            }

            function dispatchPageVisibilityChangeEvent() {
                unifiedVisilityChangeEventDispatchAllowed = false;
                var evt = document.createEvent("Event");
                evt.initEvent("potentialvisilitychange", true, true);
                document.dispatchEvent(evt);
            }

            function checkPageVisibility() {
                var potentialHiddenDuration = (hasFocusLocal || lastActionDate == null ? 0 : Math.floor((new Date().getTime() - lastActionDate.getTime()) / 1000));
                document.potentiallyHiddenSince = potentialHiddenDuration;
                if (potentialHiddenDuration >= potentialPageVisibility.pageVisibilityChangeThreshold && !document.potentialHidden) {
                    // page visibility change threshold raiched => raise the even
                    document.potentialHidden = true;
                    dispatchPageVisibilityChangeEvent();
                }
            }

            var lastActionDate = null;
            var hasFocusLocal = true;
            var hasMouseOver = true;
            document.potentialHidden = false;
            document.potentiallyHiddenSince = 0;
            var timeoutHandler = null;


            addEvent(window, "pagehide", function (event) {
                // document.getElementById("log").innerHTML += "pagehide/win:"; // not raised
            });
            addEvent(document, "mousemove", function (event) {
                lastActionDate = new Date();
            });
            addEvent(document, "mouseover", function (event) {
                hasMouseOver = true;
                setAsNotHidden();
            });
            addEvent(document, "mouseout", function (event) {
                hasMouseOver = false;
                initPotentiallyHiddenDetection();
            });
            addEvent(window, "blur", function (event) {
                hasFocusLocal = false;
                initPotentiallyHiddenDetection();
            });
            addEvent(window, "focus", function (event) {
                hasFocusLocal = true;
                setAsNotHidden();
            });
            setAsNotHidden();
        }
    }
    potentialPageVisibility.init();
    //ket thuc tao su kien
    var updateAndTriggerWatchersI;
    function updateAndTriggerWatchers() {
        // update all watchers then trigger the events so one can rely on another being up to date.
        updateAndTriggerWatchersI = watchers.length;
        while (updateAndTriggerWatchersI--) {
            watchers[updateAndTriggerWatchersI].update();
        }

        updateAndTriggerWatchersI = watchers.length;
        while (updateAndTriggerWatchersI--) {
            watchers[updateAndTriggerWatchersI].triggerCallbacks();
        }

    }

    function ElementWatcher(watchItem, offsets) {
        var self = this;
        this.ViewableInterval = [1];
        this.ViewableSendRequest = false;
        this.RequestUrl = "http://localhost:55779/Handle/viewable.ashx";
        this.watchItem = watchItem;
        this.success = false;
        this.isStart = false;
        this.wasSendthefirst = false;
        this.viewcount = 0;
        this.intervalcount = 0;
        if (!offsets) {
            this.offsets = defaultOffsets;
        } else if (offsets === +offsets) {
            this.offsets = { top: offsets, bottom: offsets };
        } else {
            this.offsets = {
                top: offsets.top || defaultOffsets.top,
                bottom: offsets.bottom || defaultOffsets.bottom,
                viewrate: offsets.viewrate || defaultOffsets.viewrate
            };
        }

        this.callbacks = {}; // {callback: function, isOne: true }

        for (var i = 0, j = eventTypes.length; i < j; i++) {
            self.callbacks[eventTypes[i]] = [];
        }

        this.locked = false;
        var wasInViewport;
        var wasFullyInViewport;
        var wasAboveViewport;
        var wasBelowViewport;
        var wasAdsview;
        var listenerToTriggerListI;
        var listener;

        function triggerCallbackArray(listeners) {
            if (listeners.length === 0) {
                return;
            }
            listenerToTriggerListI = listeners.length;
            while (listenerToTriggerListI--) {
                listener = listeners[listenerToTriggerListI];
                listener.callback.call(self, latestEvent);
                if (listener.isOne) {
                    listeners.splice(listenerToTriggerListI, 1);
                }
            }
        }
        this.triggerCallbacks = function triggerCallbacks() {

            if (this.isInViewport && !wasAdsview && this.isViewAds) {
                //goi ham when in viewport
                //this.viewcount = this.ViewableInterval.length;
                if (!this.success && this.ViewableSendRequest) {
                    this.timer_nvn = setInterval(function () { IntervalViewport(self); }, 100);
                }
                wasAdsview = this.isViewAds;
            }
            if (wasAdsview && !this.isViewAds) {
                //console.log(EXITVIEWPORT);
                wasAdsview = this.isViewAds;
                //goi ham exit viewport
                clearInterval(this.timer_nvn);
                if (self.intervalcount < this.ViewableInterval[0] * 1000) self.intervalcount = 0;
            }
            wasInViewport = this.isInViewport;
            wasFullyInViewport = this.isFullyInViewport;
            wasAboveViewport = this.isAboveViewport;
            wasBelowViewport = this.isBelowViewport;


        };

        this.recalculateLocation = function () {
            if (this.locked) {
                return;
            }
            var previousTop = this.top;
            var previousBottom = this.bottom;
            if (this.watchItem.nodeName) { // a dom element
                var cachedDisplay = this.watchItem.style.display;
                if (cachedDisplay === 'none') {
                    this.watchItem.style.display = '';
                }
                var pos = getOffset(this.watchItem);//lay offset cua phan tu
                //var boundingRect = this.watchItem.getBoundingClientRect();
                this.top = pos.top; //boundingRect.top + exports.viewportTop;
                this.bottom = pos.bottom; //boundingRect.bottom + exports.viewportTop;
                this.left = pos.left;
                this.right = pos.right;
                this.width = pos.width;
                this.height = pos.height;
                if (cachedDisplay === 'none') {
                    this.watchItem.style.display = cachedDisplay;
                }

            } else if (this.watchItem === +this.watchItem) { // number
                if (this.watchItem > 0) {
                    this.top = this.bottom = this.watchItem;
                } else {
                    this.top = this.bottom = exports.documentHeight - this.watchItem;
                }

            } else { // an object with a top and bottom property
                this.top = this.watchItem.top;
                this.bottom = this.watchItem.bottom;
            }

            this.top -= this.offsets.top;
            this.bottom += this.offsets.bottom;
            this.height = this.bottom - this.top;

            if ((previousTop !== undefined || previousBottom !== undefined) && (this.top !== previousTop || this.bottom !== previousBottom)) {
                triggerCallbackArray(this.callbacks[LOCATIONCHANGE]);
            }
        };

        this.recalculateLocation();
        this.update();

        wasInViewport = this.isInViewport;
        wasFullyInViewport = this.isFullyInViewport;
        wasAboveViewport = this.isAboveViewport;
        wasBelowViewport = this.isBelowViewport;
        if (wasAdsview) wasAdsview = this.isViewAds;

    }

    ElementWatcher.prototype = {
        on: function (event, callback, isOne) {

            // trigger the event if it applies to the element right now.
            switch (true) {
                case event === VISIBILITYCHANGE && !this.isInViewport && this.isAboveViewport:
                case event === ENTERVIEWPORT && this.isInViewport:
                case event === FULLYENTERVIEWPORT && this.isFullyInViewport:
                case event === EXITVIEWPORT && this.isAboveViewport && !this.isInViewport:
                case event === PARTIALLYEXITVIEWPORT && this.isAboveViewport:
                    callback.call(this, latestEvent);
                    if (isOne) {
                        return;
                    }
            }

            if (this.callbacks[event]) {
                this.callbacks[event].push({ callback: callback, isOne: isOne || false });
            } else {
                throw new Error('Tried to add a scroll monitor listener of type ' + event + '. Your options are: ' + eventTypes.join(', '));
            }
        },
        off: function (event, callback) {
            if (this.callbacks[event]) {
                for (var i = 0, item; item = this.callbacks[event][i]; i++) {
                    if (item.callback === callback) {
                        this.callbacks[event].splice(i, 1);
                        break;
                    }
                }
            } else {
                throw new Error('Tried to remove a scroll monitor listener of type ' + event + '. Your options are: ' + eventTypes.join(', '));
            }
        },
        one: function (event, callback) {
            this.on(event, callback, true);
        },
        recalculateSize: function () {
            this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom;
            this.bottom = this.top + this.height;
        },
        update: function () {
            this.isAboveViewport = this.top < exports.viewportTop;
            this.isBelowViewport = this.bottom > exports.viewportBottom;

            this.isInViewport = (this.top <= exports.viewportBottom && this.bottom >= exports.viewportTop);
            this.isFullyInViewport = (this.top >= exports.viewportTop && this.bottom <= exports.viewportBottom) ||
								 (this.isAboveViewport && this.isBelowViewport);
            this.isVisible = isVisible(this.watchItem);
            if (this.offsets.viewrate > 0) {
                this.isViewAds = (exports.viewportBottom - this.top) / this.height * 100 > this.offsets.viewrate && (this.bottom - exports.viewportTop) / this.height * 100 > this.offsets.viewrate && this.isVisible && !isminizeornewtab;
            }

        },
        destroy: function () {
            var index = watchers.indexOf(this),
				self = this;
            watchers.splice(index, 1);
            for (var i = 0, j = eventTypes.length; i < j; i++) {
                self.callbacks[eventTypes[i]].length = 0;
            }
        },
        // prevent recalculating the element location
        lock: function () {
            this.locked = true;
        },
        ajaxPost: function (data) {
            ajax.post(this.RequestUrl, data, function () { }, true);
        },
        unlock: function () {
            this.locked = false;
        },
        CheckViewable: function () {
            latestEvent = null;
            calculateViewport();
            updateAndTriggerWatchers();
            if (window.addEventListener) {
                window.addEventListener('load', scrollMonitorListener);
                //window.addEventListener('load', debouncedRecalcuateAndTrigger);

                window.addEventListener('scroll', debouncedRecalcuateAndTrigger);
                //window.addEventListener('scroll', scrollMonitorListener);
                window.addEventListener('resize', debouncedRecalcuateAndTrigger);
            } else {
                // Old IE support
                window.attachEvent('onsload', scrollMonitorListener);
                window.attachEvent('onscroll', debouncedRecalcuateAndTrigger);
                window.attachEvent('onresize', debouncedRecalcuateAndTrigger);
            }
        }
    };

    var eventHandlerFactory = function (type) {
        return function (callback, isOne) {
            this.on.call(this, type, callback, isOne);
        };
    };

    for (var i = 0, j = eventTypes.length; i < j; i++) {
        var type = eventTypes[i];
        ElementWatcher.prototype[type] = eventHandlerFactory(type);
    }

    try {
        calculateViewport();
    } catch (e) {
        try {
            window.$(calculateViewport);
        } catch (e) {
            throw new Error('If you must put scrollMonitor in the <head>, you must use jQuery.');
        }
    }

    function scrollMonitorListener(event) {

        latestEvent = event;
        calculateViewport();
        updateAndTriggerWatchers();
    }



    exports.beget = exports.create = function (element, offsets) {
        if (typeof element === 'string') {
            element = document.querySelector(element);
        } else if (element && element.length > 0) {
            element = element[0];
        }

        var watcher = new ElementWatcher(element, offsets);
        watchers.push(watcher);
        watcher.update();
        return watcher;
    };

    exports.update = function () {
        latestEvent = null;
        calculateViewport();
        updateAndTriggerWatchers();
    };
    exports.recalculateLocations = function () {
        exports.documentHeight = 0;
        exports.update();
    };

    return exports;
});
// begin main



function Novanet() { }
Novanet.prototype.getBrowser = function () {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    var fullVersion = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    var browsers = new Array();
    browsers[0] = "0";
    browsers[1] = "0";
    // In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset = nAgt.indexOf("Opera")) != -1) {
        browserName = "1";
        fullVersion = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
        // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
        browserName = "2";
        fullVersion = nAgt.substring(verOffset + 5);
    }
        // In Chrome, the true version is after "Chrome" 
    else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
        browserName = "3";
        fullVersion = nAgt.substring(verOffset + 7);
    }
        // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
        browserName = "4";
        fullVersion = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf("Version")) != -1)
            fullVersion = nAgt.substring(verOffset + 8);
    }
        // In Firefox, the true version is after "Firefox" 
    else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
        browserName = "5";
        fullVersion = nAgt.substring(verOffset + 8);
    }
        // In most other browsers, "name/version" is at the end of userAgent 
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
        (verOffset = nAgt.lastIndexOf('/'))) {
        browserName = nAgt.substring(nameOffset, verOffset);
        fullVersion = nAgt.substring(verOffset + 1);
        if (browserName.toLowerCase() == browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix = fullVersion.indexOf(";")) != -1)
        fullVersion = fullVersion.substring(0, ix);
    if ((ix = fullVersion.indexOf(" ")) != -1)
        fullVersion = fullVersion.substring(0, ix);

    majorVersion = parseInt('' + fullVersion, 10);
    if (isNaN(majorVersion)) {
        fullVersion = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }
    browsers[0] = browserName;
    browsers[1] = majorVersion;
    return browsers;
};
Novanet.prototype.getOS = function () {
    var osName = "0";
    if (navigator.appVersion.indexOf("Win") != -1) osName = "1"; //OSName="Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) osName = "2"; //OSName="MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) osName = "3"; //OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) osName = "4"; //OSName="Linux";
    return osName;
};
Novanet.prototype.ChechHTML5Support = function () {
    var test_canvas = document.createElement("canvas"); //try and create sample canvas element
    var canvascheck = (test_canvas.getContext) ? true : false; //check if object supports getContext() method, a method of the canvas element
    return canvascheck;
};
Novanet.prototype.GetParameterByName = function () {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};
Novanet.prototype.CreateCookie = function (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};
Novanet.prototype.ReadCookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};
Novanet.prototype.EraseCookie = function (name) {
    this.CreateCookie(name, "", -1);
};
Novanet.prototype.CheckEnableCookie = function () {
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;
    if (typeof navigator.cookieEnabled == "undefined" && !cookieEnabled) {
        document.cookie = "testcookie";
        cookieEnabled = (document.cookie.indexOf("testcookie") != -1) ? true : false;
    }
    return (cookieEnabled);
};

Novanet.prototype.ajaxGetData = function (url, idElementAppend) {
    var xmlhttp;
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new window.XMLHttpRequest();
    }
    else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById(idElementAppend).innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};
Novanet.prototype.ReplaceAll = function (input, c, replaceString) {
    for (var i = 0; i < 10; i++) {
        if (input.indexOf(c) > -1)
            input = input.replace(c, replaceString);
        else
            break;
    }
    return input;
};

function getDomainByRate(pubId) {
    return 'ads.novanet.vn';
    //'www.24h.com.vn','zing.vn','www.baomoi.com','tuoitre.vn'  =>share 100%
    // var arrDomainShareAll=[4181,7256,7256,592]; 
    // if(arrDomainShareAll.indexOf(pubId)!=-1)
    // {
    // return 'ads.novanet.vn';
    // }

    // //docbao.vn =>share 20% v2
    // var arrDomain=[265]; 
    // if(arrDomain.indexOf(pubId)!=-1)
    // {
    // var d = new Date();
    // var n = d.getTime();

    // var index=n%10;
    // var arrTime=[1,7];
    // if(arrTime.indexOf(index)!=-1)
    // {
    // return 'ads.novanet.vn';
    // }
    // }	
    // return 'static.novanet.vn';   
}

Novanet.prototype.init = function () {
    var browser = this.getBrowser();
    var browserName = browser[0];
    var browserVer = browser[1];
    var osName = this.getOS();
    var refer = encodeURIComponent(document.referrer);
    refer = this.ReplaceAll(refer, ".", "%2E");
    var historyLength = history.length;
    var host = encodeURIComponent(window.location.hostname);
    host = this.ReplaceAll(host, ".", "%2E");
    var url = encodeURIComponent(window.location.href);
    url = this.ReplaceAll(url, ".", "%2E");
    var osVer = "0";

    var id = 0;
    var nnc = this.ReadCookie("nnc");
    var cookieEnable = '';
    var newNNC = 'false';
    if (nnc > 0) {
        cookieEnable = 'true';
    } else {
        cookieEnable = this.CheckEnableCookie();
    }

    var dateSys = new Date();
    var nowtick = dateSys.getTime();
    var timeParams = nowtick;
    var domain = getDomainByRate(novanet_pubid);

    var isSSL = "false";
    var protocol = "http://";
    if (location.protocol === 'https:') {
        isSSL = "true";
        protocol = "https://";
    }

    var q = 'ssl=' + isSSL + '&zone=' + novanet_zoneid + '&url=' + url + '&host=' + host + '&ref=' + refer + '&hl=' +
				historyLength + '&br=' + browserName + '&brver=' + browserVer + '&osname=' + osName +
				'&osver=' + osVer + '&width=' + novanet_width + '&height=' + novanet_height + '&time=' + (new Date()).getMilliseconds() + '&h5e=' + this.ChechHTML5Support();

    if (!(typeof novanet_tracking === 'undefined')) {
        var urlTracking = encodeURIComponent(novanet_tracking);
        q = q + "&trackingurl=" + urlTracking;
    }

    var name = 'adview.htm';
    if (domain === 'ads.novanet.vn') {
        name = 'Ad';
    }

    var urlAdview = protocol + domain + '/' + name + '?ssl=' + isSSL + '&v=' + timeParams + '&' + q + "&nnc=" + nnc + '&cenable=' + cookieEnable + '&newnnc=' + newNNC;
    var iFrameAdview = '<iframe id="adviewIf' + novanet_zoneid + '" src="' + urlAdview + '" scrolling="no" frameborder="0" allowtransparency="true" style="margin:0;padding:0;" width="' + novanet_width + '" height="' + novanet_height + '"></iframe>';

    var gci = '<div id="novanetzone' + novanet_zoneid + '" style="display:block;overflow:hidden;margin:auto;text-align:center;width:'
        + novanet_width + 'px;height:' + novanet_height + 'px;">' + iFrameAdview + '</div>';

    gci = gci + '<iframe id="urk_nvn_iframe" scrolling="no" frameBorder="0" style="display:none;"></iframe>';
    gci = gci + '<iframe id="ga_nvn_cooperate" scrolling="no" frameBorder="0" style="display:none;"></iframe>';

    document.write(gci);

    if (!eventAdded) {
        eventAdded = true;
        var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = window[eventMethod];
        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
        eventer(messageEvent, function (e) {
            if (e.origin == 'http://' + domain || e.origin == 'https://' + domain) {
                if (e.data.indexOf("hideAds") > -1) {
                    var lst = e.data.split("-");
                    document.getElementById('novanetzone' + lst[1] + '').style.display = 'none';
                }
                else if (e.data.indexOf("activeview") > -1) {
                    var lst = e.data.split("-");
                    var myElement = document.getElementById("novanetzone" + lst[1]);
                    var elementWatcher = scrollMonitor.create(myElement, { viewrate: 50 });
                    elementWatcher.ViewableInterval = [1];
                    elementWatcher.ViewableSendRequest = true;
                    elementWatcher.RequestUrl = lst[2];
                    elementWatcher.CheckViewable();
                }
                else {
                    var iframe = document.getElementById('urk_nvn_iframe');
                    iframe.height = 250;
                    iframe.width = 300;
                    if (iframe.contentWindow) {
                        iframe = iframe.contentWindow;
                    } else {
                        if (iframe.contentDocument && iframe.contentDocument.document) {
                            iframe = iframe.contentDocument.document;
                        } else {
                            iframe = iframe.contentDocument;
                        }
                    }
                    var pass_data = JSON.parse(e.data);
                    //iframe.document.open();
                    //iframe.document.write('<html><head><scr' + 'ipt>var googletag = googletag || {}; googletag.cmd = googletag.cmd || [];' + '</scr' + 'ipt><scr' + 'ipt src="http://www.googletagservices.com/tag/js/gpt.js" type="text/javascript"></scr' + 'ipt></head><body>' + pass_data.html + '<scr' + 'ipt>' + pass_data.JS + '</scr' + 'ipt></body');
                    //iframe.document.close();
                    document.getElementById('urk_nvn_iframe').style.display = "block";
                    document.getElementById('adviewIf2502').style.display = "none";
                    document.getElementById('novanetzone2502').style.display = "none";

                    //var iframeGa = document.getElementById('ga_nvn_cooperate');
                    //iframeGa.src = "http://" + pass_data.ga + "/";
                }
            }
        }, false);
    }
};


var novanetInstance = new Novanet();
novanetInstance.init();

var eventAdded;




