(function() {
	'use strict';
	
	/**
	 * @param {Guid} Guid
	 */
	function init(Guid) {
		var pageViewGuid = Guid.New();
		var impressionGuidElement = document.querySelector("meta[name=impressionGuid]");
		if (impressionGuidElement) {
			impressionGuidElement.setAttribute("content", pageViewGuid);
		}
		else {
			impressionGuidElement = document.getElementById("impressionGuid");
			if (impressionGuidElement) {
				impressionGuidElement.value = pageViewGuid;
			}
		}
		
		function onReady() {
			logLoad(pageViewGuid);
			
			//set these for each site, rest of JS should be generic
			var bigAdElement = "[data-id='bigAdElement']";
			var bigAdSchoolNameAnchor = "[data-id='bigAdSchoolNameAnchor']";
			var bigAdSchoolName = "[data-id='bigAdSchoolName']";
			var bigAdProgramText = "[data-id='bigAdProgramText']";
			var bigAdRequestInfoButton = ".takeTheNextStepButton";
			var bigAdMenu = "[data-id='bigAdMenu']";
			
			var littleAdElement = "[data-id='littleAdElement']";
			var littleAdRelativeSchoolName = "[data-id='littleAdRelativeSchoolName']";
			var littleAdAbsoluteSchoolName = littleAdRelativeSchoolName;
			var littleAdProgramText = "[data-id='littleAdProgramText']";
			var littleAdMenu = "[data-id='littleAdMenu']";
			
			var maxScroll = 0;
			var intervalsWithMovement = 0;
			var intervalsWithoutMovement = 0;
			
			var lastX = 10000;
			var lastY = 10000;
			var currentX = 0;
			var currentY = 0;
			
			var searchGuidElement = document.querySelector(".searchGuid");
			var searchGuid = searchGuidElement ? searchGuidElement.value : null;
			var beginTime;
			var currentCompany;
			var currentType;
			var timeMap = {};
			var submittedData = false;
			
			//big ads timer start
			Array.prototype.forEach.call(document.querySelectorAll(bigAdElement), function(element) {
				element.addEventListener("mouseenter", function() {
					currentCompany = element.querySelector(bigAdSchoolName).textContent.trim();
					currentType = "big";
					beginTime = new Date().getTime();
				}, false);
			});
			
			//big ads timer stop
			Array.prototype.forEach.call(document.querySelectorAll(bigAdElement), function(element) {
				element.addEventListener("mouseleave", mouseOutResult, false);
			});
			
			//big ad click logging
			Array.prototype.forEach.call(document.querySelectorAll(bigAdProgramText), function(element) {
				element.addEventListener("click", function() {
					logClick(element.textContent.trim(), element.href);
				}, false);
			});
			
			Array.prototype.forEach.call(document.querySelectorAll(bigAdRequestInfoButton), function(element) {
				element.addEventListener("click", function() {
					logClick(element.value, "/form/school.html?formId=" + element.parentNode.querySelector("input[name=formId]").value);
				}, false);
			});
			
			Array.prototype.forEach.call(document.querySelectorAll(bigAdMenu), function(element) {
				element.addEventListener("change", function() {
					/** @type {HTMLOptionElement[]} */
					var selectedOptions = Array.prototype.filter.call(element.querySelectorAll("option"), function(option) {
						return option.selected;
					});
					//the url is not present in the html element but right now always goes to form, so hard-code it
					logClick(selectedOptions[0].textContent, "/form/school.html?formId=always");
				}, false);
			});
			
			Array.prototype.forEach.call(document.querySelectorAll(bigAdSchoolNameAnchor), function(element) {
				element.addEventListener("click", function() {
					var schoolName = element.querySelector(bigAdSchoolName).textContent.trim();
					logClick(schoolName, element.href);
				}, false);
			});
			
			// little ads
			Array.prototype.forEach.call(document.querySelectorAll(littleAdElement), function(element) {
				element.addEventListener("mouseenter", function() {
					currentCompany = element.querySelector(littleAdRelativeSchoolName).textContent.trim();
					currentType = "little";
					beginTime = new Date().getTime();
				}, false);
			});
			
			// little ads
			Array.prototype.forEach.call(document.querySelectorAll(littleAdElement), function(element) {
				element.addEventListener("mouseleave", mouseOutResult, false);
			});
			
			//little ad click logging
			Array.prototype.forEach.call(document.querySelectorAll(littleAdProgramText), function(element) {
				element.addEventListener("click", function() {
					logClick(element.textContent.trim(), element.href);
				}, false);
			});
			
			Array.prototype.forEach.call(document.querySelectorAll(littleAdMenu), function(element) {
				element.addEventListener("change", function() {
					/** @type {HTMLOptionElement[]} */
					var selectedOptions = Array.prototype.filter.call(element.querySelectorAll("option"), function(option) {
						return option.selected;
					});
					//the url is not present in the html element but right now always goes to form, so hard-code it
					logClick(selectedOptions[0].textContent, "/form/school.html?formId=always");
				}, false);
			});
			
			Array.prototype.forEach.call(document.querySelectorAll(littleAdAbsoluteSchoolName), function(element) {
				element.addEventListener("click", function() {
					logClick(element.textContent.trim(), "/form/school.html?formId=" + element.parentNode.querySelector(littleAdRelativeSchoolName)
					.getAttribute("data-form-id"));
				});
			});
			
			function logClick(text, url) {
				//leaving the page; make sure the mouse over millis gets ended and everything gets logged
				endPageView(currentType, currentCompany, text, url);
			}
			
			function endPageView(clickedType, clickedCompany, clickedText, clickedUrl) {
				mouseOutResult();
				logUnload(pageViewGuid, clickedType, clickedCompany, clickedText, clickedUrl);
			}
			
			function mouseOutResult() {
				if (currentCompany) {
					var timeDiff = new Date().getTime() - beginTime;
					var timeMapKey = currentCompany + "*|*" + currentType;
					if (!timeMap[timeMapKey]) {
						timeMap[timeMapKey] = 0;
					}
					timeMap[timeMapKey] += timeDiff;
				}
			}
			
			document.addEventListener("mousemove", function(e) {
				currentX = e.pageX;
				currentY = e.pageY;
				if (lastX === 10000 && lastY === 10000) {
					lastX = currentX;
					lastY = currentY;
				}
			});
			
			function logPageViewBeacon(pageView) {
				// Blob and sendBeacon are not supported everywhere.  Safari on ios still doesnt support beacon.
				try {
					navigator.sendBeacon("/logging/pageView", JSON.stringify(pageView));
				}
				catch (e) {
					logPageViewAjax(pageView);
				}
			}
			
			function logPageViewAjax(pageView) {
				try {
					var request = new XMLHttpRequest();
					request.open("POST", "/logging/pageView", pageView.action !== "unload");
					request.setRequestHeader("Content-Type", "application/json");
					request.send(JSON.stringify(pageView));
				}
				catch (e) {
					//Calls that run on unload are unreliable, and we don't need to log that error in eventLogging when that happens.
				}
			}
			
			function logUnload(pageViewGuid, clickedType, clickedCompany, clickedText, clickedUrl) {
				if (!submittedData) {
					var pageViewObject = {};
					pageViewObject.impressionGuid = pageViewGuid;
					pageViewObject.action = "unload";
					pageViewObject.pageHeight = Math.round(document.body.getBoundingClientRect().height);
					pageViewObject.pageWidth = window.innerWidth;
					pageViewObject.maxScrollPixels = Math.floor(maxScroll);
					pageViewObject.intervalsWithMouseMovement = intervalsWithMovement;
					pageViewObject.intervalsWithoutMouseMovement = intervalsWithoutMovement;
					pageViewObject.mouseOverTimes = timeMap;
					pageViewObject.searchGuid = searchGuid;
					pageViewObject.clickedText = clickedText;
					pageViewObject.clickedCompany = clickedCompany;
					pageViewObject.clickedType = clickedType;
					pageViewObject.clickedUrl = clickedUrl;
					logPageViewBeacon(pageViewObject);
					submittedData = true;
				}
			}
			
			function logLoad(pageViewGuid) {
				var pageViewObject = {};
				pageViewObject.impressionGuid = pageViewGuid;
				pageViewObject.action = "load";
				pageViewObject.url = document.URL;
				pageViewObject.requestGuid = window.globalUtils.getRequestGuid();
				pageViewObject.viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight, 0);
				pageViewObject.viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth, 0);
				logPageViewAjax(pageViewObject);
			}
			
			function checkForMouseMovement() {
				if (lastX === 10000 && lastY === 10000) {
					//case no movement event has fired yet, for now do nothing
				}
				else if (currentX !== lastX || currentY !== lastY) {
					intervalsWithMovement++;
				}
				else {
					intervalsWithoutMovement++;
				}
				lastX = currentX;
				lastY = currentY;
			}
			
			setInterval(checkForMouseMovement, 100);
			
			//ajax call on navigate away
			window.addEventListener("unload", function() {
				endPageView(null, null, null, null);
			}, false);
			
			window.addEventListener("scroll", function() {
				
				// the correct way to get the current scroll top is with === $('body').scrollTop(); ===, but our tracking does not depend on jquery
				// instead of using jquery, we try all 3 ways to get scroll top, then take the max to get the non-zero value if there is one
				
				var standardScrollTop = window.pageYOffset; // supports all browsers except IE 8
				var ieQuirksScrollTop = document.body.scrollTop; // IE Quirks mode
				var ieDoctypeScrollTop = document.documentElement.scrollTop; // IE Doctype mode
				
				var scrollTop = Math.max(standardScrollTop, ieQuirksScrollTop, ieDoctypeScrollTop, 0);
				
				if (scrollTop > maxScroll) {
					maxScroll = scrollTop;
				}
			}, false);
		}
		
		if (document.readyState === 'complete') {
			onReady();
		}
		else {
			document.onreadystatechange = function() {
				if (document.readyState === "complete") {
					onReady();
				}
			}
		}
	}
	
	require(['lib/jquery/guid'], init);
})();