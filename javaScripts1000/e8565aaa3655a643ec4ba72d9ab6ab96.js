define(["require", "exports", "util/remspect-affected-event-util", "eventLogging", "eventLogging"], function (require, exports, RemspectAffectedEventUtil, eventLogging) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VisibilityTester = void 0;
    var TrackingState;
    (function (TrackingState) {
        TrackingState["REMOVED"] = "REMOVED";
        TrackingState["TRACKED"] = "TRACKED";
        TrackingState["REPORTED"] = "REPORTED";
    })(TrackingState || (TrackingState = {}));
    var VisibilityTester = (function () {
        function VisibilityTester(interval) {
            Object.defineProperty(this, "trackedElements", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: []
            });
            Object.defineProperty(this, "identifierToTrackedElementListMap", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: {}
            });
            Object.defineProperty(this, "interval", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: VisibilityTester.DEFAULT_INTERVAL
            });
            Object.defineProperty(this, "loopFn", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: null
            });
            Object.defineProperty(this, "cnameToTrackingState", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: {}
            });
            Object.defineProperty(this, "elementsWithoutCnames", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: {}
            });
            Object.defineProperty(this, "observer", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            if (VisibilityTester._instance) {
                return VisibilityTester._instance;
            }
            VisibilityTester._instance = this;
            if (interval) {
                this.interval = interval;
            }
        }
        Object.defineProperty(VisibilityTester.prototype, "start", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                try {
                    this.startWithIntersectionObserver();
                }
                catch (e) {
                    this.startBackwardsCompatible();
                }
            }
        });
        ;
        Object.defineProperty(VisibilityTester.prototype, "startBackwardsCompatible", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                this.loopFn = this.checkVisibilities.bind(this);
                setInterval(this.loopFn, this.interval);
            }
        });
        ;
        Object.defineProperty(VisibilityTester.prototype, "startWithIntersectionObserver", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                this.observer = new IntersectionObserver(this.handleIntersectEvents.bind(this), {});
                this.trackedElements.forEach(function (element) {
                    this.observer.observe(element);
                }.bind(this));
            }
        });
        Object.defineProperty(VisibilityTester.prototype, "handleIntersectEvents", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (events, observer) {
                events.forEach(function (event) {
                    if (event.intersectionRatio > 0) {
                        this.handleIntersect(event);
                    }
                }.bind(this));
            }
        });
        Object.defineProperty(VisibilityTester.prototype, "handleIntersect", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (event) {
                var element = event.target;
                var identifier = this.getElementIdentifier(element);
                var elementIndex = this.trackedElements.indexOf(element);
                if (elementIndex < 0) {
                    return;
                }
                VisibilityTester.sendVisibilityEvent(element);
                if (identifier) {
                    this.cnameToTrackingState[identifier] = TrackingState.REPORTED;
                }
                var remspectFactors = this.getRemspectFactors(element);
                if (remspectFactors) {
                    var eventInfo = element.getAttribute("data-event-info");
                    RemspectAffectedEventUtil.sendUniqueRemspectAffectedEventsIfAssigned(remspectFactors, eventInfo);
                }
                this.removeElementToCheck(element);
            }
        });
        Object.defineProperty(VisibilityTester.prototype, "addElementsToCheck", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (elements) {
                for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                    var element = elements_1[_i];
                    this.addElementToCheck(element);
                }
            }
        });
        ;
        Object.defineProperty(VisibilityTester.prototype, "addElementToCheck", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (element) {
                var identifier = this.getElementIdentifier(element);
                if (!identifier) {
                    var elementId = VisibilityTester.fetchOrGenerateId(element);
                    if (!this.elementsWithoutCnames.hasOwnProperty(elementId)) {
                        this.elementsWithoutCnames[elementId] = true;
                        console.warn("Attempted to track element without cname", element);
                    }
                    return false;
                }
                if (this.cnameToTrackingState[identifier] === TrackingState.REPORTED) {
                    return false;
                }
                if (this.trackedElements.indexOf(element) >= 0) {
                    return false;
                }
                this.trackedElements.push(element);
                var trackedElementsWithIdentifier = this.identifierToTrackedElementListMap[identifier];
                if (trackedElementsWithIdentifier == null) {
                    trackedElementsWithIdentifier = [];
                    this.identifierToTrackedElementListMap[identifier] = trackedElementsWithIdentifier;
                }
                if (trackedElementsWithIdentifier.indexOf(element) < 0) {
                    trackedElementsWithIdentifier.push(element);
                }
                this.cnameToTrackingState[identifier] = TrackingState.TRACKED;
                if (this.observer) {
                    this.observer.observe(element);
                }
                return true;
            }
        });
        Object.defineProperty(VisibilityTester.prototype, "getElementIdentifier", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (element) {
                return element.getAttribute("data-cname");
            }
        });
        Object.defineProperty(VisibilityTester.prototype, "getRemspectFactors", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (element) {
                var factorsRaw = element.getAttribute("data-track-remspect");
                if (factorsRaw) {
                    return factorsRaw.split(',');
                }
                return null;
            }
        });
        Object.defineProperty(VisibilityTester, "fetchOrGenerateId", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (element) {
                var alternativeIdAttr = "data-visibility-id";
                var elementId = element.id;
                var randomId = element.getAttribute(alternativeIdAttr);
                if (!elementId && !randomId) {
                    var guid = VisibilityTester.generateGuid();
                    element.setAttribute(alternativeIdAttr, guid);
                    return guid;
                }
                return elementId || randomId;
            }
        });
        Object.defineProperty(VisibilityTester, "generateGuid", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var now = Date.now();
                return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (now + Math.random() * 16) % 16 | 0;
                    now = Math.floor(now / 16);
                    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
                });
            }
        });
        Object.defineProperty(VisibilityTester.prototype, "removeElementToCheck", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (element) {
                var identifier = this.getElementIdentifier(element);
                var elementIndex = this.trackedElements.indexOf(element);
                if (elementIndex >= 0) {
                    this.trackedElements.splice(elementIndex, 1);
                }
                var trackedElementsWithIdentifier = this.identifierToTrackedElementListMap[identifier];
                if (trackedElementsWithIdentifier == null) {
                    trackedElementsWithIdentifier = [];
                }
                var indentifierListIndex = trackedElementsWithIdentifier.indexOf(element);
                if (indentifierListIndex >= 0) {
                    trackedElementsWithIdentifier.splice(indentifierListIndex, 1);
                    if (trackedElementsWithIdentifier.length === 0) {
                        delete this.identifierToTrackedElementListMap[identifier];
                    }
                }
                if (identifier) {
                    var wasReported = this.cnameToTrackingState[identifier] === TrackingState.REPORTED;
                    if (!wasReported && trackedElementsWithIdentifier.length == 0) {
                        this.cnameToTrackingState[identifier] = TrackingState.REMOVED;
                    }
                    else if (wasReported && trackedElementsWithIdentifier.length > 0) {
                        delete this.identifierToTrackedElementListMap[identifier];
                        for (var _i = 0, trackedElementsWithIdentifier_1 = trackedElementsWithIdentifier; _i < trackedElementsWithIdentifier_1.length; _i++) {
                            var otherElementWithSameIdentifier = trackedElementsWithIdentifier_1[_i];
                            var elementIndex_1 = this.trackedElements.indexOf(otherElementWithSameIdentifier);
                            if (elementIndex_1 >= 0) {
                                this.trackedElements.splice(elementIndex_1, 1);
                            }
                            if (this.observer) {
                                this.observer.unobserve(otherElementWithSameIdentifier);
                            }
                        }
                    }
                }
                if (this.observer) {
                    this.observer.unobserve(element);
                }
            }
        });
        Object.defineProperty(VisibilityTester.prototype, "checkVisibilities", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var visibleElements = [];
                var pageHeight = window.innerHeight;
                var pageWidth = window.innerWidth;
                for (var i = 0; i < this.trackedElements.length; i++) {
                    var element = this.trackedElements[i];
                    var rectangle = element.getBoundingClientRect();
                    var yVisible = rectangle.top < pageHeight && rectangle.bottom > 0;
                    var xVisible = rectangle.left < pageWidth && rectangle.right > 0;
                    var rHeight = rectangle.bottom - rectangle.top;
                    var rWidth = rectangle.right - rectangle.left;
                    if (xVisible && yVisible && rWidth > 0 && rHeight > 0) {
                        visibleElements.push(element);
                        VisibilityTester.sendVisibilityEvent(element);
                        var identifier = this.getElementIdentifier(element);
                        if (identifier) {
                            this.cnameToTrackingState[identifier] = TrackingState.REPORTED;
                        }
                        var remspectFactors = this.getRemspectFactors(element);
                        if (remspectFactors) {
                            var eventInfo = element.getAttribute("data-event-info");
                            RemspectAffectedEventUtil.sendUniqueRemspectAffectedEventsIfAssigned(remspectFactors, eventInfo);
                        }
                    }
                }
                for (var _i = 0, visibleElements_1 = visibleElements; _i < visibleElements_1.length; _i++) {
                    var visibleElement = visibleElements_1[_i];
                    this.removeElementToCheck(visibleElement);
                }
            }
        });
        Object.defineProperty(VisibilityTester, "sendVisibilityEvent", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (element, cnameOverride) {
                var event = new eventLogging.LoggableEvent("elementVisible");
                eventLogging.addElementInfoToEventDetail(event, element, cnameOverride);
                var boundingRectangle = element.getBoundingClientRect();
                event.elementCoordinate = {
                    x: boundingRectangle.top + window.pageYOffset,
                    y: boundingRectangle.left + window.pageXOffset
                };
                eventLogging.queueEvent(event);
            }
        });
        ;
        Object.defineProperty(VisibilityTester, "DEFAULT_INTERVAL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1000
        });
        return VisibilityTester;
    }());
    exports.VisibilityTester = VisibilityTester;
});

//# sourceMappingURL=visibility-tester.js.map
