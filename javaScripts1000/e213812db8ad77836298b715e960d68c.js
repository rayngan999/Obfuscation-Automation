(function () {
    'use strict';
	
	var angularModules = ["globalModules", "hero-email-cta.controller", "study.mobile-promotion.download-banner"];
	var requireDeps = ['jquery', 'angularDependency', 'util/remspect', "lib/freshchat", 'redesign/globalModules', 'bootstrapJs/bootstrap-tabcollapse', 'mobile-promotion/appDownloadBar'];

	function addAngularDep(requireModule, angularModule) {
		requireDeps.push(requireModule);
		angularModules.push(angularModule);
	}

	if(document.querySelector("study-typeahead") !== null){
		addAngularDep("redesign/typeahead.controller","typeahead.controller");
	}

	require(requireDeps, init);

	function init($, angular, remspect, Freshchat) {
		$(document).ready(function () {

			$('.section-extra .nav-tabs').tabCollapse();

			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				$('.study-nav').toggleClass('super-dark',
				 scroll >= $('#goalBoxes').offset().top - 81
				);
			});

			$('.carousel').carousel({
				interval: 4000
			});

			var isLoggedIn = false;
			var memberDataElement = document.querySelector("#memberData");
			if (memberDataElement) {
				var memberIdStr = memberDataElement.getAttribute("data-member-id");
				var memberId = parseInt(memberIdStr, 10);
				if (!isNaN(memberId)) {
					isLoggedIn = true;
				}
			}

			if (remspect.isVariation("homepageBotSegmenter", "v1") && !isLoggedIn) {
				var screenSize = $.cookie("_sv") === 'M' ? "mobile" : "desktop";

				var properties = {"screenSize": screenSize};

				Freshchat.init({
					token: "1ce9784d-a09b-4f8e-871f-ce5c870e5d19",
					host: "https://wchat.freshchat.com",
					config: {
						cssNames: {
							widget: 'STUDY_W',
							open: 'STUDY_O',
							expanded: 'STUDY_E'
						}
					},
					tags: ["homepage_segbot"]
				});

				Freshchat.on("widget:loaded", function () {
					Freshchat.user.setProperties(properties);
				});
			}
		});


		function HeroEmailCtaController() {	}

		HeroEmailCtaController.prototype.openRegModal = function ($event) {
			// when the user hits enter in the email address, we have to simulate a click on the submit button so the data-user-type/data-user-email
			// attributes are taken into account by the reg modal.  but first we have to wait long enough for angular to update those attributes
			setTimeout(function () {
				$($event.target.querySelector(".open-reg-form")).trigger("click");
			}, 100);
		};

		var mod = angular.module("hero-email-cta.controller", []);
		mod.controller("HeroEmailCtaController", HeroEmailCtaController);

		angular.module("HomeApp", angularModules);
		angular.bootstrap(document, ['HomeApp']);
	}
})();