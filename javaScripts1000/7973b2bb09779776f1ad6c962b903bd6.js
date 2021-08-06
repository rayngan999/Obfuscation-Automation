(function () {
	"use strict";

	function init(angular, $, remspect) {
		var IN_ANDROID_STORE = "on Google Play";
		var IN_IOS_STORE = "in the App Store";
		var APP_STORE_ID_TOKEN = "#";
		var IOS_STORE_URL = "https://itunes.apple.com/us/app/study.com-video-lessons-learn/id" + APP_STORE_ID_TOKEN;
		var ANDROID_STORE_URL = "https://play.google.com/store/apps/details?id=" + APP_STORE_ID_TOKEN;
		var DEFAULT_IOS_ID = "1128875336";
		var DEFAULT_ANDROID_ID = "com.study.app";
		var HOURS_TILL_RESHOW = 1;
		var BANNER_SHOWING_CLASS = "appSmartBannerShowing";
		var CLOSED_COOKIE = "appDownloadBanner-isClosed";
		var INSTALLED_COOKIE = "appDownloadBanner-isInstalled";
		var MOBILE_DEVICE_TYPE = {
			ANDROID: 'android',
			IOS: 'ios',
			WINDOWS: 'windows',
			KINDLE: 'kindle',
			OTHER: 'other'
		};
		var SUPPORTED_DEVICES = [MOBILE_DEVICE_TYPE.ANDROID, MOBILE_DEVICE_TYPE.IOS];

		if (!remspect.isControl("seoBanners") ){
			BANNER_SHOWING_CLASS = "appSmartBannerShowingSmall";
		}

		AppDownloadBanner['$inject'] = ['$element', 'featureCheckService'];

		function AppDownloadBanner($element, featureCheckService) {
			this.$element = $element;
			this.deviceType = this.getDeviceType();
			this.isVisible = false;
			this.isAppInstalled = !!$.cookie(INSTALLED_COOKIE);

			var alreadyClosed = $.cookie(CLOSED_COOKIE);
			
			var defaultIsSpecificTestPrepEl = document.querySelector("[data-specific-test-prep='true']");
			if (defaultIsSpecificTestPrepEl) {
				this.iosAppId = defaultIsSpecificTestPrepEl.getAttribute("data-ios-app-id");
				if (this.iosAppId) {
					this.cocoon = defaultIsSpecificTestPrepEl.getAttribute("data-default-product");
				}
			}
			
			var isFamilyPlanAdminOnDashboard = document.getElementById("show-family-plan");
			var shouldShowMobileAppAdvertisement = document.getElementById("show-mobile-app-advertisement") != null;
			
			var arePopupsDisabled = false;
			
			if ($.cookie('disablePopups')) {
				var popupsDisabledCookie = $.cookie('disablePopups');
				arePopupsDisabled = (popupsDisabledCookie === 'true');
			}
			
			if (
			 this.deviceType
			 && !navigator['standalone'] // Device doesn't have a type or is a standalone app
			 && !this.isAppInstalled
			 && !alreadyClosed
			 && SUPPORTED_DEVICES.indexOf(this.deviceType) > -1
			 && shouldShowMobileAppAdvertisement
			 && !isFamilyPlanAdminOnDashboard
			 && !arePopupsDisabled) {
				this.show();
			}
			
			// CON-2952: hide app download banner upon opening reg overlay
			document.addEventListener("partialRegModalOpen", function(e) {
				 $('.appSmartBanner').hide();
				 $('body').removeClass(BANNER_SHOWING_CLASS);
				 this.isVisible = false;
			 }.bind(this),
			 false
			);
		}

		AppDownloadBanner.prototype.getDeviceType = function() {
			var UA = navigator.userAgent;

			if (UA.match(/Windows Phone/i) !== null && UA.match(/Edge|Touch/i) !== null) {
				return MOBILE_DEVICE_TYPE.WINDOWS;
			}
			else if (UA.match(/iPhone|iPod/i) !== null || (UA.match(/iPad/))) {
				if (UA.match(/Safari/i) !== null ||
				 UA.match(/CriOS/i) !== null ||
				 UA.match(/FxiOS/i) !== null ||
				 window.Number(UA.substr(UA.indexOf('OS ') + 3, 3).replace('_', '.')) < 6) {
					return MOBILE_DEVICE_TYPE.IOS;
				}
			}
			else if (UA.match(/\bSilk\/(.*\bMobile Safari\b)?/) || UA.match(/\bKF\w/) || UA.match('Kindle Fire')) {
				return MOBILE_DEVICE_TYPE.KINDLE;
			}
			else if (UA.match(/Android/i) !== null) {
				return MOBILE_DEVICE_TYPE.ANDROID;
			}

			return MOBILE_DEVICE_TYPE.OTHER;
		};

		AppDownloadBanner.prototype.getAndroidId = function () {
			if (this.cocoon) {
				return DEFAULT_ANDROID_ID + '.' + this.cocoon;
			}
			return DEFAULT_ANDROID_ID;
		};
		
		AppDownloadBanner.prototype.getIosId = function () {
			if (this.iosAppId) {
				return this.iosAppId;
			}
			return DEFAULT_IOS_ID;
		};
		
		AppDownloadBanner.prototype.show = function () {
			this.isVisible = true;

			if (this.deviceType === MOBILE_DEVICE_TYPE.ANDROID) {
				this.inStoreText = IN_ANDROID_STORE;
				this.link = ANDROID_STORE_URL.replace(APP_STORE_ID_TOKEN, this.getAndroidId());
			}
			else if (this.deviceType === MOBILE_DEVICE_TYPE.IOS) {
				this.inStoreText = IN_IOS_STORE;
				this.link = IOS_STORE_URL.replace(APP_STORE_ID_TOKEN, this.getIosId());
			}

			var $body = $('body');
			if (!$body.hasClass(BANNER_SHOWING_CLASS)) {
				$body.addClass(BANNER_SHOWING_CLASS);
				}
		};

		AppDownloadBanner.prototype.dismiss = function() {
			
			var cookieOptions = {
				expires: HOURS_TILL_RESHOW / 24,
				path: '/'
			};
			
			$.cookie(CLOSED_COOKIE, true, cookieOptions);
			$('body').removeClass(BANNER_SHOWING_CLASS);
			this.isVisible = false;
		};

		AppDownloadBanner.prototype.markAsInstalled = function() {
			
			var cookieOptions = {
				path: '/'
			};
			
			$.cookie(INSTALLED_COOKIE, true, cookieOptions);
			this.isAppInstalled = true;
		};

		var module = angular.module("study.mobile-promotion.download-banner", ["study.feature-check"]);
		module.controller("AppDownloadBanner", AppDownloadBanner);

		return module;
	}
	


	define(['angularDependency', 'jquery', 'util/remspect', 'lib/jquery/cookie', 'member/authentication/feature-check.service'], init);
})();