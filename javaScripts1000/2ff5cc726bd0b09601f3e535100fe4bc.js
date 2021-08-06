(function () {
    'use strict';

    function init(Modernizr) {
        /**
         * @constructor
         * @public
         */
        function EventLoggingQueue() {
            this.memoryQueue = {};
        }

        /**
         * Push event data onto queue to be sent to server eventually
         * @param {EventLogging.LoggableEvent} eventDetail
         */
        EventLoggingQueue.prototype.queueEvent = function (eventDetail) {
            var uuid = eventDetail.javascriptUUID;

            var stringified;
            try {
                stringified = JSON.stringify(eventDetail);
            } catch (e) {
                stringified = this._stringifyEvents(eventDetail);
            }

            this.memoryQueue[uuid] = stringified;
            if (typeof Modernizr !== "undefined" && Modernizr.sessionstorage) {
                try {
                    sessionStorage.setItem("et-" + uuid, stringified);
                }
                catch (e) {
                    //session storage fallback unavailable for some reason
                }
            }
        };

        /**
         * Initialize the internal queue which will store events until successfully sent to server and start the polling every 1s
         */
        EventLoggingQueue.prototype.start = function () {
            //Flush local storage queue immediately. Re-check it every 5 seconds. Flush in-memory queue every second.
            setTimeout(this._flushStorageQueue.bind(this), 100);
            setTimeout(function() {
                setInterval(this._flushStorageQueue.bind(this), 5000);
            }.bind(this), 500);
            setInterval(this._flushMemoryQueue.bind(this), 1000);
        };

        EventLoggingQueue.prototype._flushMemoryQueue = function () {
            if (Object.keys(this.memoryQueue).length > 0) {
                this._sendEvents(this.memoryQueue);
            }
        };

        EventLoggingQueue.prototype._flushStorageQueue = function() {
            if (typeof Modernizr !== "undefined" && Modernizr.sessionstorage) {
                var events = {};
                for (var keyIndex = 0; keyIndex < sessionStorage.length; keyIndex++) {
                    var key = sessionStorage.key(keyIndex);
                    var keyMatch = key.match(/^et-(.*)/);
                    if (!keyMatch) {
                        continue;
                    }

                    events[keyMatch[1]] = sessionStorage.getItem(key);
                }

                if (Object.keys(events).length > 0) {
                    this._sendEvents(events);
                }
            }
        };

        /**
         * Stringify and ignore circular references
         */
        EventLoggingQueue.prototype._stringifyEvents = function (events) {
            var cache = [];
            JSON.stringify(events, function (key, value) {
                if (typeof value === 'object' && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        return "backReference";
                    }
                    cache.push(value);
                }
                return value;
            });
            cache = null;
        };

        var READY_STATE_DONE = 4; //would be const instead of var, but legacy browser support mandates otherwise

        EventLoggingQueue.prototype._sendEvents = function (eventsObject) {
            var uuids = Object.keys(eventsObject);
            var events = [];

            for (var i = 0; i < uuids.length; i++) {
                events.push(eventsObject[uuids[i]]);
            }
			  if(window.globalUtils.logLimit > 0) {
				  window.globalUtils.logLimit--;
				  var request = new XMLHttpRequest();
				  if(window.location.host == "ext.study.com") {
					  request.withCredentials = true;
					  request.open("POST", "https://study.com/eventLogger/eventLog.ajax");
				  } else {
					  request.open("POST", "/eventLogger/eventLog.ajax");
				  }
				  request.setRequestHeader("Content-Type", "application/json");
				  request.onreadystatechange = function() {
					  if (request.readyState === READY_STATE_DONE && request.status >= 200 && request.status < 300) {
						  this._markSent(uuids);
					  }
				  }.bind(this);

				  request.send("[" + events.join(",") + "]");
			  }
        };

        EventLoggingQueue.prototype._markSent = function (uuids) {
            for (var i = 0; i < uuids.length; i++) {
                var uuid = uuids[i];
                delete this.memoryQueue[uuid];
                if (Modernizr !== undefined && Modernizr.sessionstorage) {
                    try {
                        sessionStorage.removeItem("et-" + uuid);
                    } catch (e) {
                        //sessionStorage is having a sad, but we won't let that stop us from purging the memory queue
                    }
                }
            }
        };

        /**
         * Collects data on each and every click on the site, sending them to the server via "ajax" every second or so
         * @namespace EventLogging
         */
        var eventLogging = {
	        /**
             * @type {EventLoggingQueue}
             */
            queue: new EventLoggingQueue(),

            /**
             * Turn on/off debug logging [ eventLogging.log() ]
             * @type {Boolean}
             */
            debug: false,
            /**
             * Name of the data field (attribute name in DOM will be prefixed w/ data-) where we can find the canonical-name for this element
             * @const {String}
             */
            cNameAttr: "cname",
            /**
             * Name of the data field (attribute name in DOM will be prefixed w/ data-) where extraData can be found for this element
             * @const {String}
             */
            extraDataAttr: "extra",
            /**
             * String used to indicate that a value can't be provided because it is private billing data
             * @const {String}
             */
            NO_LOG_VALUE: "NO_LOG_VALUE",
            /**
             * String used to indicate that this value is longer than 512 characters and has been truncated
             * @const {String}
             */
            TRUNCATED: "truncated",
            /**
             * A map of fields which errored. Values stored as lists to handle multiple errors
             * Init'd here to be populated as we go
             * @type {Object.<String, Array.<String>>}
             */
            fieldErrorList: {},

	        /**
             * The first time a DOM event is sent, we need to fire an additional request to tell the Bot Bouncer that this computer is
             * being operated a hu-man.
             * @type {boolean}
             */
            verifiedHumanity: false,

            /**
             * Initialize the internal queue which will store events until successfully sent to server and start the polling every 1s
             */
            init: function () {
                this.queue.start();
            },

            /**
             * Push event data onto queue to be sent to server eventually
             * @param {EventLogging.LoggableEvent} eventDetail
             */
            queueEvent: function (eventDetail) {
                this.queue.queueEvent(eventDetail);
            },

            verifyHumanity: function() {
                if (!this.verifiedHumanity) {
	                var request = new XMLHttpRequest();
	                if(window.location.host == "ext.study.com") {
		                request.withCredentials = true;
		                request.open("POST", "https://study.com/usr/usrpost.xyz");
	                } else {
		                request.open("POST", "/usr/usrpost.xyz");
	                }
	                request.send();
	                this.verifiedHumanity = true;
                }
            },

			  /**
				* add generic event parameters to the eventDetail object for a specific element
				* @param {Object} eventDetail - the eventDetail object
				* @param {HTMLElement} el - the element
				* @param {string} [cnameOverride]
				*/
			  addElementInfoToEventDetail: function (eventDetail, el, cnameOverride) {
				
				  var lastPath = null;
				  var paths = this.getPathsTo(el, lastPath, cnameOverride);

				  /**
					* xPath as string to the target of the event
					* @type {String}
					*/
				  if (paths.xPath && paths.xPath.length > 0) {
					  eventDetail.xPath = '/html/' + paths.xPath.reverse().join('/');
				  }
				  else {
					  eventDetail.xPath = '/html';
				  }

				  /**
					* The canonical path as an array of Objects representing the set of elements containing data-cname attribute
					* (and optionally the data-extra attribute value, if defined) starting with the clicked element scanning up the tree
					* e.g. [{canonicalValue : "valueHere", extraData: "xData"}, {canonicalValue : "valueHereToo", extraData: "xDataToo"}]
					* @type {Array.<{canonicalValue : string, extraData: string}>}
					*/
				  eventDetail.canonicalPath = (paths.canonicalPath.length > 0) ? paths.canonicalPath : null;
				  /**
					* The clicked node as Object containing it's name, it's innerHTML (upto 512 chars or the word "truncated"
					* @type {Object.<{xmlNodeName : string, xmlNodeText: string, xmlNodeAttributes: Array.<{string,string}>}>}
					*/
				  eventDetail.xmlNode = {};
				  eventDetail.xmlNode.xmlNodeName = el.nodeName;

				  if (el.value) {
					  /**
						* The value of the node (if input, select, textarea, etc). Empty if there is no value
						* @type {String}
						*/
					  eventDetail.xmlNode.xmlNodeValue = !eventLogging.isNoLogValue(el) ? el.value : eventLogging.NO_LOG_VALUE;
				  }

				  if (el.innerHTML) {
					  /**
						* The text inside of the element
						* @type {String}
						*/
					  eventDetail.xmlNode.xmlNodeText = (el.innerHTML.length <= 512) ? el.innerHTML : eventLogging.TRUNCATED;
				  }

				  eventDetail.xmlNode.xmlNodeAttributes = {};

				  // gather attributes for this tag
				  if (el.attributes) {
					  for (var i = 0; i < el.attributes.length; i++) {
						  var a = el.attributes[i];
						  if (a.specified) {
							  eventDetail.xmlNode.xmlNodeAttributes[a.name] = a.value.length <= 512 ? a.value : eventLogging.TRUNCATED;
						  }
					  }
				  }

			  },

            /**
             * add generic event parameters to the eventDetail object to be queued up
             * @param {UIEvent} event - the event passed from the .mouseUp
             */
            processDOMEvent: function (event) {
                this.verifyHumanity();

	            /**
                * @type HTMLElement | HTMLInputElement
                */
               var el = /** @type {HTMLElement} */ event.target;
                var eventDetail = new eventLogging.LoggableEvent(event.type, false);
					// for scroll events, event.target will be document, which doesn't satisfy a bunch of assumptions in the addElementInfoToEventDetail() method
					if (el && el !== document) {
						eventLogging.addElementInfoToEventDetail(eventDetail, el);
					}

                eventDetail.scrollCoordinate = eventLogging.getScrollCoordinate();
                eventDetail.viewportSize = eventLogging.getViewPortSize();

                // Add any click specific data to the eventDetail
                if (eventDetail.eventType === 'click') {
                    eventLogging.addClickEventData(event, eventDetail);
                }

                eventDetail.url = window.location.href;


                /**
                 * A map of fields which errored. Values stored as lists to handle multiple errors
                 * @type {Object.<String, Array.<String>>}
                 */
                eventDetail.fieldErrorList = eventLogging.fieldErrorList;
                // clear class level errors
                eventLogging.fieldErrorList = {};

                // queue the click for async sending to the server
                this.queue.queueEvent(eventDetail);
            },

            /**
             * Checks if the provided element is a "billing field" and contains private data (credit card #, cvc, credit card expiration)
             *
             * @param {HTMLElement} el the element to check
             * @returns {boolean}
             */
            isNoLogValue: function (el) {
                if (el.getAttribute("data-no-log") === null){
                    return false;
                } else if (el.getAttribute("data-no-log") === "false"){
                    return false;
                } else {
                    return true;
                }
            },

            getScrollCoordinate: function () {
                return {
                    /**
                     * the number of pixels that an element's content is scrolled to the left
                     * @type {!number}
                     */
                    x: Math.floor(window.pageXOffset),
                    /**
                     * the number of pixels that an element's content is scrolled down from the top
                     * @type {!number}
                     */
                    y: Math.floor(window.pageYOffset)
                };
            },

            getViewPortSize: function () {
                return {
                    /**
                     * The width of the viewport at the moment of the click
                     * @type {!number}
                     */
                    x: Math.floor(window.innerWidth),
                    /**
                     * The height of the viewport at the moment of the click
                     * @type {!number}
                     */
                    y: Math.floor(window.innerHeight)
                };
            },

            addClickEventData: function (event, eventDetail) {

                eventDetail.clickCoordinate = {
                    /**
                     * The X coordinate relative to the page as a whole (regarless of viewport and scrolling)
                     * @type {!number}
                     */
                    x: Math.floor(event.pageX),
                    /**
                     * The Y coordinate relative to the page as a whole (regarless of viewport and scrolling)
                     * @type {!number}
                     */
                    y: Math.floor(event.pageY)
                };

                eventDetail.clientCoordinate = {
                    /**
                     * The horizontal coordinate within the application's client area at which the event occurred (as opposed to the coordinates
                     * within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a
                     * clientX value of 0, regardless of whether the page is scrolled horizontally.
                     *
                     * If clientX , use it, otherwise if event.originalEvent, then use event.originalEvent.clientX
                     *
                     * @type {!number}
                     */
                    x: Math.floor((event.clientX) ? event.clientX : ((event.originalEvent) ? event.originalEvent.clientX : null)),
                    /**
                     * The vertical coordinate within the application's client area at which the event occurred (as opposed to the coordinates
                     * within the page). See x notes above.
                     * @type {!number}
                     */
                    y: Math.floor((event.clientY) ? event.clientY : ((event.originalEvent) ? event.originalEvent.clientY : null))
                };

                /**
                 * String representing which button was pressed (canonical)
                 * @type {String}
                 */
                eventDetail.mouseButtonName = eventLogging.whichButton(event);

                /**
                 * Number value reporting which button was pressed
                 * Will make more sense when joined with UA
                 * @type {Number}
                 */
                eventDetail.mouseButtonValue = eventLogging.whichButtonValue(event);
            },

            /**
             * NOTE: Is NOT RFC4122 compliant (see: http://stackoverflow.com/a/8809472/677381) since we removed the dashes
             * was: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
             * this removes the jQuery Dependancy of GUID used in trck.js
             */
            generateUUID: function () {
                Date.now = Date.now || function () {
                        return +new Date();
                    };
                var d = Date.now();
                return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
                });
            },

            /**
             * Utility method to handle building of the canonical path, element by element
             * @param {HTMLElement} el the element to decide if it should be included in the canonical path for
             * @param {{xPath: Array.<string>, canonicalPath: Object}} lastPath
				 * @param {string} [cnameOverride]
             */
            handleCanonicalPathMember: function (el, lastPath, cnameOverride) {
             
            	var cname;
            	if (cnameOverride) {
            		cname = cnameOverride;
					}
					else {
						cname = el.getAttribute("data-" + this.cNameAttr);
					}
            	
                if (cname) {
                    var pair = {
                        canonicalValue: cname,
                        extraData: el.getAttribute("data-" + this.extraDataAttr)
                    };
                    lastPath.canonicalPath.push(pair);
                }
            },

	        /**
            * @param {HTMLElement} el
            * @returns {*}
            */
            getSiblingIndexOfElement: function (el) {
                // all the children of parent of 'el' (including 'el')
		        /**
               * @type Array.<HTMLElement>
               */
              var childrenOfParent = (el.parentNode) ? el.parentNode.childNodes : [];
                var indexAmongSiblings = 0;

                for (var i = 0; i < childrenOfParent.length; i++) {

	                /**
                    * @type {HTMLElement}
                    */
                    var currentChild = childrenOfParent[i];

                    // If we have found 'el' then return its index
                    if (currentChild === el) {
                        return indexAmongSiblings;
                    }

                    // This constant seems to be missing in IE
                    var elementNode = (typeof Node !== 'undefined') ? Node.ELEMENT_NODE : 1;

                    // If it's an element with the same tagName then it's a sibling so we want to increment the index and keep iterating
                    if (currentChild.nodeType === elementNode && currentChild.tagName === el.tagName) {
                        indexAmongSiblings++;
                    }
                }

                // If we weren't able find ourselves in the children of the parent then something has gone wrong...
                return null;
            },

            /**
             * Scans up the DOM to build out both xPath and internally defined canonicalPath (which only contains elements containing a 'data-canonical' attr)
             * Also grabs the value of the 'data-extra' attribute of the inner-most node (relative to the clicked node)
             * @param {HTMLElement} el the element to generate the xPath for
             * @param {{xPath: Array.<string>, canonicalPath: Object}} [lastPath] the previous path to process
				 * @param {string} [cnameOverride]
             * @return {{xPath: Array.<string>, canonicalPath: Object}}
             */
            getPathsTo: function (el, lastPath, cnameOverride) {

                if (!lastPath) {
                    lastPath = {
                        /**
                         * The xPath as an array to be concatted as string when written to cookie
                         * @type {Array.<String>}
                         */
                        xPath: [],
                        /**
                         * The canonical path is an array of Objects representing the set of elements containing data-cname attribute
                         * (and optionally the data-extra attribute value, if defined) starting with the clicked element scanning up the tree
                         * e.g. [{canonicalValue : "valueHere", extraData: "xData"}, {canonicalValue : "valueHereToo", extraData: "xDataToo"}]
                         * @type {Array.<{canonicalValue : string, extraData: string}>}
                         */
                        canonicalPath: []
                    };
                }
	
					var tagName = el.tagName;
					if (tagName && tagName.toLowerCase() === "html") {
                    return lastPath;
                }

                if (tagName && tagName.toLowerCase() === "body") {
                    lastPath.xPath.push(tagName);
                    this.handleCanonicalPathMember(el, lastPath, cnameOverride);
                    return lastPath;
                }

                // div[@id="idhere"]
                if (el.id) {
                    lastPath.xPath.push(tagName + '[@id="' + el.id + '"]');
                    this.handleCanonicalPathMember(el, lastPath, cnameOverride);
                    return this.getPathsTo(/** @type HTMLElement **/ el.parentNode, lastPath);
                }
                else {
                    if (!el.parentNode) {
                        // RACE CONDITION FAIL
                        // Something has reworked the DOM out from underneath us
                        // grab what we can and move on
                        var errMsg = "Race Condition Fail in DOM scan- el no longer has a defined parent";
                        if (eventLogging.fieldErrorList["xPath"]) {
                            eventLogging.fieldErrorList["xPath"].push(errMsg);
                        }
                        else {
                            eventLogging.fieldErrorList["xPath"] = [errMsg];
                        }
                        lastPath.xPath.push(tagName);
                        this.handleCanonicalPathMember(el, lastPath, cnameOverride);
                        return lastPath;
                    }
                    else {

                        var indexAmongSiblings = this.getSiblingIndexOfElement(el);
                        if (indexAmongSiblings !== null) {
                            // add one to the index because XPath expects a 1-based index?
                            lastPath.xPath.push(tagName + '[' + (indexAmongSiblings + 1) + ']');
                            this.handleCanonicalPathMember(el, lastPath, cnameOverride);
                            return this.getPathsTo(/** @type HTMLElement */ el.parentNode, lastPath);
                        }
                    }
                }
            },

	        /**
            * @param eventType
            * @constructor
            */
            LoggableEvent: function (eventType) {

                /**
                 * The type of event that we are logging. E.g. focusout, click, change, etc...
                 * @type {String}
                 */
                this.eventType = eventType;

                /**
                 * UUID for this individual event, to be used for de-duping on server side
                 * @type {String}
                 */
                this.javascriptUUID = eventLogging.generateUUID();

                /**
                 * Local client timestamp... to be used for sorting events within session
                 * Local clock obviously should NOT be trusted for event's actual timing
                 * @type {Number}
                 */
                this.javascriptTimestamp = new Date().getTime();

                /**
                 * UUID for this page view (server side), generated outside of this scope, found in $('#requestGuid').val();
                 * @type {String}
                 */
                this.pageRequestGuid = window.globalUtils.getRequestGuid();

                /**
                 * UUID for this page impression (client side), generated outside of this scope, found in $('#impressionGuid').val();
                 * @type {Element}
                 */
                var _impressionElement = document.querySelector("meta[name=impressionGuid]");
                if (typeof _impressionElement !== 'undefined' && _impressionElement) {
                    this.pageImpressionGuid = _impressionElement.getAttribute("content");
                }else{
                    _impressionElement = document.getElementById("impressionGuid");
                    if(_impressionElement){
                        this.pageImpressionGuid = _impressionElement.value;
                    }else{
                        this.pageImpressionGuid = "";
                    }
                }

            },

            /**
             * Log out to console if debug flag is on
             * @param {String} logThis
             */
            log: function (logThis) {
                if (this.debug) {
                    // handle browsers that bark at no console or console.debug
                    if (!window.console || !window.console.log) {
                        window.console = {
                            log: function () {
                            }
                        };
                    }
                    console.log(logThis);
                }
            },

            whichButton: function (event) {
                var button;
                event = event || window.event;

                if (event.which === null) {
                    button = (event.button < 2) ? 'LEFT' :
                        ((event.button === 4) ? 'MIDDLE' : 'RIGHT');
                }
                else {
                    button = (event.which < 2) ? 'LEFT' :
                        ((event.which === 2) ? 'MIDDLE' : 'RIGHT');
                }

                return button;
            },

            whichButtonValue: function (event) {
                event = event || window.event;
                return (event.which === null) ? event.button : event.which;
            },

            getNavigationType: function (typeInt) {

                if (typeInt === 0) {
                    return 'NAVIGATE';
                }
                else if (typeInt === 1) {
                    return 'RELOAD';
                }
                else if (typeInt === 2) {
                    return 'BACK_FORWARD';
                }
                else {
                    return null;
                }
            }
        };

        return eventLogging;
    }

    define(['lib/modernizr'], init);
})();