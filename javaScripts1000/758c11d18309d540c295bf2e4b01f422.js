(function () {
	'use strict';

	require(['lib/underscore', 'eventLogging', 'logging/visible/visibility-tester'], init);

	/**
	 * @param _
	 * @param {EventLogging} eventLogging
	 * @param {{VisibilityTester}} VisibilityTesterModule
	 */
	function init(_, eventLogging, VisibilityTesterModule) {

		/**
		 * @param {UIEvent} event
		 */
		function handleClickEvent(event) {
			// only queue left events
			if (eventLogging.whichButton(event) !== 'RIGHT') {
				eventLogging.processDOMEvent(event);
			}
		}

		function onReady() {
			eventLogging.init();

			/**
			 * @type {Object.<function(UIEvent)>}}
			 */
			var uiEvents = {
				click: handleClickEvent,
				focus: eventLogging.processDOMEvent.bind(eventLogging),
				blur: eventLogging.processDOMEvent.bind(eventLogging),
				change: eventLogging.processDOMEvent.bind(eventLogging)
			};

			Object.keys(uiEvents).forEach(function (key) {
				document.body.addEventListener(key, uiEvents[key], true);
			});

			/**
			 * All non-standard events emitted by custom JS code
			 * @type {string[]}
			 */
			var customEvents = ['stripeError', 'regError', 'videoEvent', 'fullscreenEvent', 'barShown', 'videoToolbarEvent', 'videoLoad', 'qualarooShown', 'qualarooClosed', 'regFormModalError', 'videoPlayEvent', 'debugInfo', 'braintreeError'];

			/**
			 * @param {CustomEvent} event
			 */
			function handleCustomEvent(event) {
				var eventDetail = new eventLogging.LoggableEvent(event.type);
				Object.keys(event.detail).forEach(function (key) {eventDetail[key] = event.detail[key];});
				eventLogging.queueEvent(eventDetail);
			}

			customEvents.forEach(function(key) {
				document.addEventListener(key, handleCustomEvent.bind(this), true);
			});
			
			var visibilityTester = new VisibilityTesterModule.VisibilityTester();
			visibilityTester.addElementsToCheck(Array.prototype.slice.call(document.querySelectorAll("[data-track-visible]")));
			visibilityTester.start();
		}

		if (document.readyState !== 'loading') {
			onReady();
		}
		else {
			document.addEventListener('DOMContentLoaded', onReady, false);
		}
		
		//overrides base behavior so we batch the error sending
		window.globalUtils.handleErrorEvent = function(loggableEvent) {
			loggableEvent.type = "javascriptError-postEventTracking";
			eventLogging.queueEvent(loggableEvent);
		};

		// We want to wait until onload so that we have numbers for all timing related events
		window.addEventListener("load", function () {
			// If the browser doesn't support performance info then we are out of luck :(
			if (!window.performance || !window.performance.timing || !window.performance.navigation) {
				return;
			}

			// The super short timeout is needed because this code needs to fire when the 'load' event has actually ended or 'loadEventEnd' will be zero
			// the event HAS NOT ended on window.onload or $(window).bind('load', function(){})! Don't remove the timeout!
			setTimeout(function () {
				var loggableEvent = new eventLogging.LoggableEvent("pageLoad");
				loggableEvent.timing = window.performance.timing;
				loggableEvent.redirectCount = window.performance.navigation.redirectCount;
				loggableEvent.navigationType = eventLogging.getNavigationType(window.performance.navigation.type);
				
				try {
					if (window.PaintPerformance) {
						loggableEvent.paintTiming = {};
						window.PaintPerformance.queue.forEach(function(entry) {
							loggableEvent.paintTiming[entry.name] = Math.round(entry.startTime + entry.duration);
						});
						window.PaintPerformance.observer.disconnect();
					}
				}
				catch (e) {
					// don't stop the rock
				}
				
				eventLogging.queueEvent(loggableEvent);


				var loggableEventMetrics = new eventLogging.LoggableEvent("metrics");
				var wp = window.performance;
				loggableEventMetrics.metrics = {
					eventUrl: window.location.href
				};
				
				var timing = wp.timing;
				var addPerformanceTimingDuration = function(metrics, metricsKey, timingKey) {
					if (timing.navigationStart > 0 && timing[timingKey] > 0) {
						var t = timing[timingKey] - timing.navigationStart;
						if (t > 0 && t < 60000) {
							metrics[metricsKey] = t;
						}
					}
				};
				
				try {
					addPerformanceTimingDuration(loggableEventMetrics.metrics, "req_s", "requestStart");
					addPerformanceTimingDuration(loggableEventMetrics.metrics, "res_s", "responseStart");
					addPerformanceTimingDuration(loggableEventMetrics.metrics, "res_e", "responseEnd");
					addPerformanceTimingDuration(loggableEventMetrics.metrics, "di",    "domInteractive");
					addPerformanceTimingDuration(loggableEventMetrics.metrics, "dcl_s", "domContentLoadedEventStart");
					addPerformanceTimingDuration(loggableEventMetrics.metrics, "dcl_e", "domContentLoadedEventEnd");
					addPerformanceTimingDuration(loggableEventMetrics.metrics, "dc",    "domComplete");
					addPerformanceTimingDuration(loggableEventMetrics.metrics, "le_e",  "loadEventEnd");
				}
				catch (e) {
					// don't stop the rock
				}
				
				loggableEventMetrics.redirectCount = wp.redirectCount;
				eventLogging.queueEvent(loggableEventMetrics);

			}, 100);

			var secondsOnPageDelays = [10, 30, 60, 300, 600];
			secondsOnPageDelays.forEach(function (delay) {
				setTimeout(function() {
					var e = new eventLogging.LoggableEvent("timeOnPage");
					e.secondsSincePageLoad = delay;
					eventLogging.queueEvent(e);
				}, delay * 1000);
			});
			
		}, true);
		
		if (window.HeroTracking && window.performance && window.performance.timing && window.performance.timing.navigationStart) {
			var queue = window.HeroTracking.queue;
			var navigationStart = window.performance.timing.navigationStart;
			setInterval(function () {
				while (queue.length > 0) {
					var heroEvent = queue.shift();
					var loggableEvent = new eventLogging.LoggableEvent("heroEvent");
					
					eventLogging.addElementInfoToEventDetail(loggableEvent, heroEvent.element);
					
					loggableEvent.heroType = heroEvent.type;
					loggableEvent.heroTimestamp = heroEvent.timestamp.getTime() - navigationStart;
					loggableEvent.boundingClientRect = heroEvent.boundingClientRect;
					
					var extraData = heroEvent.extraData;
					for (var i in extraData) {
						// eventType is the only field in LoggableEvent that could reasonably be overwritten by mistake
						if (extraData.hasOwnProperty(i) && i !== "eventType") {
							loggableEvent[i] = extraData[i];
						}
					}
					
					eventLogging.queueEvent(loggableEvent);
				}
			}, 1000);
		}
	}

})();