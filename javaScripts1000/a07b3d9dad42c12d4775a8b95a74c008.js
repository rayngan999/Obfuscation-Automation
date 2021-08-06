define(["require", "exports", "eventLogging", "util/remspect"], function (require, exports, eventLogging, remspect) {
    "use strict";
    var RemspectAffectedEventUtil = (function () {
        function RemspectAffectedEventUtil() {
            Object.defineProperty(this, "hasSentEventForFactorMap", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: {}
            });
        }
        Object.defineProperty(RemspectAffectedEventUtil.prototype, "sendRemspectAffectedEventIfAssigned", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factor, eventInfo) {
                var factorTrimmed = factor.trim();
                if (remspect.isAssignedToFactor(factorTrimmed)) {
                    var loggableEvent = new eventLogging.LoggableEvent("RemspectAffectedEvent", false);
                    loggableEvent.remspectFactor = factorTrimmed;
                    loggableEvent.eventInfo = eventInfo;
                    var memberDataElement = document.querySelectorAll("[data-member-id]");
                    if (memberDataElement.length > 0) {
                        loggableEvent.memberId = memberDataElement[0].getAttribute("data-member-id");
                    }
                    eventLogging.queueEvent(loggableEvent);
                }
            }
        });
        Object.defineProperty(RemspectAffectedEventUtil.prototype, "sendUniqueRemspectAffectedEventIfAssigned", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factor, eventInfo) {
                if (eventInfo === void 0) { eventInfo = ""; }
                if (!this.hasEventBeenSent(factor, eventInfo)) {
                    this.sendRemspectAffectedEventIfAssigned(factor, eventInfo);
                    this.markEventAsSent(factor, eventInfo);
                }
            }
        });
        Object.defineProperty(RemspectAffectedEventUtil.prototype, "sendRemspectAffectedEventsIfAssigned", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factors, eventInfo) {
                var _this = this;
                factors.forEach(function (factor) {
                    _this.sendRemspectAffectedEventIfAssigned(factor, eventInfo);
                });
            }
        });
        Object.defineProperty(RemspectAffectedEventUtil.prototype, "sendUniqueRemspectAffectedEventsIfAssigned", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factors, eventInfo) {
                var _this = this;
                factors.forEach(function (factor) {
                    _this.sendUniqueRemspectAffectedEventIfAssigned(factor, eventInfo);
                });
            }
        });
        Object.defineProperty(RemspectAffectedEventUtil.prototype, "buildEventKey", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factor, eventInfo) {
                if (!eventInfo) {
                    eventInfo = "";
                }
                return factor.trim() + "___" + eventInfo;
            }
        });
        Object.defineProperty(RemspectAffectedEventUtil.prototype, "hasEventBeenSent", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factor, eventInfo) {
                var eventKey = this.buildEventKey(factor, eventInfo);
                return this.hasSentEventForFactorMap[eventKey];
            }
        });
        Object.defineProperty(RemspectAffectedEventUtil.prototype, "markEventAsSent", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factor, eventInfo) {
                var eventKey = this.buildEventKey(factor, eventInfo);
                this.hasSentEventForFactorMap[eventKey] = true;
            }
        });
        return RemspectAffectedEventUtil;
    }());
    return new RemspectAffectedEventUtil();
});

//# sourceMappingURL=remspect-affected-event-util.js.map
