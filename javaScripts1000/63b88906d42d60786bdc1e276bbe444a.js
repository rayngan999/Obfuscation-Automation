"use strict";
var GlobalUtils = (function () {
    function GlobalUtils() {
        Object.defineProperty(this, "blackListedErrorLimit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 3
        });
        Object.defineProperty(this, "logLimit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 100
        });
        Object.defineProperty(this, "sentErrorMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
    }
    Object.defineProperty(GlobalUtils.prototype, "getRequestGuid", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            var requestGuidElement = document.querySelector("meta[name=requestGuid]");
            var requestGuid;
            if (typeof requestGuidElement === 'undefined' || !requestGuidElement) {
                requestGuidElement = document.getElementById("requestGuid");
                requestGuid = requestGuidElement ? requestGuidElement.value : "";
            }
            else {
                requestGuid = requestGuidElement.getAttribute("content");
            }
            return requestGuid;
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "generateGuid", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            Date.now = Date.now || function () {
                return +new Date();
            };
            var d = Date.now();
            return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
            });
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "requireConfigError", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event) {
            var exception = {};
            exception.message = "error loading require config file";
            exception.sourceJavascript = '<remilon:versionify resourceLocation="${jsHost}" path="/js/requireConfig.js" />';
            exception.lineNumber = 0 + ':' + 0;
            this.logError(exception, "fileload");
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "requireError", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (event) {
            var exception = {};
            exception.message = "require.js failed to load";
            exception.sourceJavascript = "//cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require.min.js";
            exception.lineNumber = 0 + ':' + 0;
            this.logError(exception, "require");
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "onError", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (message, url, lineNumber, colNumber, error) {
            var exception = (error != null) ? error : {};
            exception.message = message;
            exception.sourceJavascript = url;
            exception.lineNumber = lineNumber;
            this.logError(exception, "javascriptError-preEventTracking");
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "logError", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (exception, type) {
            var loggableEvent = {};
            try {
                var urlCapture = /\((.+?):(\d+):(\d+)/g;
                var matchUrl = urlCapture.exec(exception.stack);
                if (matchUrl && matchUrl.length == 4) {
                    var url = matchUrl[1];
                    var line = matchUrl[2];
                    var col = matchUrl[3];
                    loggableEvent.sourceJavascript = url;
                    loggableEvent.lineNumber = line + ':' + col;
                }
                else {
                    loggableEvent.sourceJavascript = exception.sourceJavascript;
                    loggableEvent.lineNumber = exception.lineNumber;
                }
            }
            catch (e) {
                loggableEvent.sourceJavascript = exception.sourceJavascript;
                loggableEvent.lineNumber = exception.lineNumber;
            }
            loggableEvent.eventType = "javascriptError";
            loggableEvent.message = this.truncateText(exception.message);
            loggableEvent.url = window.location.href;
            loggableEvent.name = exception.name;
            loggableEvent.stacktrace = this.truncateText(exception.stack);
            loggableEvent.javascriptUUID = this.generateGuid();
            loggableEvent.pageRequestGuid = this.getRequestGuid();
            loggableEvent.type = type;
            loggableEvent.javascriptTimestamp = new Date().getTime();
            var hashCode = this.computeErrorHashCode(loggableEvent);
            if (this.shouldLogError(loggableEvent, hashCode)) {
                this.markErrorAsSent(loggableEvent, hashCode);
                this.handleErrorEvent(loggableEvent);
            }
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "handleErrorEvent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (loggableEvent) {
            this.logLimit--;
            var request = new XMLHttpRequest();
            request.open("POST", "/eventLogger/eventLog.ajax");
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify([loggableEvent]));
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "markErrorAsSent", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (loggableEvent, errorHashCode) {
            if (this.isBlackListedError(loggableEvent) && this.blackListedErrorLimit > 0) {
                this.blackListedErrorLimit--;
            }
            this.sentErrorMap[errorHashCode] = true;
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "shouldLogError", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (loggableEvent, errorHashCode) {
            if (this.logLimit <= 0) {
                return false;
            }
            if (this.isBlackListedError(loggableEvent) && this.blackListedErrorLimit <= 0) {
                return false;
            }
            if (this.sentErrorMap[errorHashCode]) {
                return false;
            }
            return true;
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "isBlackListedError", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (loggableEvent) {
            return loggableEvent.message.match(/(script error|mismatched anonymous define)/i);
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "truncateText", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (text) {
            return (text && text.length > 4000) ? text.substring(0, 4000) + "....[truncated]" : text;
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "computeErrorHashCode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (loggableEvent) {
            var hashString = loggableEvent.message + " | " + loggableEvent.sourceJavascript + " | " + loggableEvent.lineNumber;
            return this.simpleHashCode(hashString);
        }
    });
    Object.defineProperty(GlobalUtils.prototype, "simpleHashCode", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (text) {
            var h = 0;
            for (var i = 0; i < text.length; i++) {
                h = (h << 5) - h + text.charCodeAt(i) | 0;
            }
            return h;
        }
    });
    return GlobalUtils;
}());
var globalUtils = new GlobalUtils();
window.globalUtils = globalUtils;
window.onerror = function (message, url, lineNumber, colNumber, error) {
    globalUtils.onError(message, url, lineNumber, colNumber, error);
    return false;
};

//# sourceMappingURL=error.js.map
