"use strict";
(function () {
    "use strict";
    var isInControlOfTest = function (factorName) {
        var factorsToVariations = {};
        var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)ssoe_debug\s*=\s*([^;]*).*$)|^.*$/, "$1");
        var ssoeRegex = /([^-]+)-([^\.]+)\.?/g;
        var match = ssoeRegex.exec(cookieValue);
        while (match !== null) {
            var factor = match[1];
            var variation = match[2];
            factorsToVariations[factor] = variation;
            match = ssoeRegex.exec(cookieValue);
        }
        return !factorsToVariations[factorName] || factorsToVariations[factorName] === 'control';
    };
    var requireModules = [
        "angularDependency",
        "jquery",
        "dashboard/recentActivity/recent-activity.service",
        "lib/jquery/bootstrap",
        "redesign/referFriend"
    ];
    var angularModules = ["recent-activity.service"];
    function addAngularModule(requireModuleName, angularModuleName) {
        angularModules.push(angularModuleName);
        requireModules.push(requireModuleName);
    }
    var memberDataElement = document.querySelector("#memberData");
    var isLoggedIn = false;
    if (memberDataElement) {
        var memberIdStr = memberDataElement.getAttribute("data-member-id");
        var memberId = parseInt(memberIdStr, 10);
        if (!isNaN(memberId)) {
            isLoggedIn = true;
        }
    }
    var teacherLicenseExpirationElement = document.querySelector("#teacherLicenseExpirationInfo");
    var noAnnouncements = document.querySelectorAll("#noAnnouncements");
    if (!noAnnouncements || noAnnouncements.length === 0) {
        addAngularModule("global/announcements.directive", "announcements.directive");
    }
    if (teacherLicenseExpirationElement) {
        addAngularModule("member/billing/teacher-license-expiration-popup.controller", "teacher-license-expiration-popup.controller");
    }
    var mobileMedia = !window.matchMedia || window.matchMedia("(max-width: 767px)").matches;
    if (document.querySelector(".mobile-reg-banner") != null ||
        (document.querySelector("mobile-reg-banner") != null && mobileMedia)) {
        addAngularModule("registration/mobile-reg-banner/mobile-reg-banner.directive", "mobile-reg-banner.directive");
    }
    if (document.querySelector("[data-load-ng-animate]")) {
        addAngularModule("lib/angular/animate", "ngAnimate");
    }
    if (document.querySelector("[data-load-ng-santize]")) {
        addAngularModule("lib/angular-sanitize", "ngSanitize");
    }
    if (document.querySelector("study-typeahead") !== null) {
        addAngularModule("redesign/typeahead.controller", "typeahead.controller");
    }
    function init(angular, $) {
        var module = angular.module("globalModules", angularModules);
        module.config(["$locationProvider", function ($locationProvider) {
                $locationProvider.hashPrefix("");
            }]);
        module.config(["$animateProvider", function ($animateProvider) {
                $animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);
            }]);
        if (!isLoggedIn) {
            var $regForm_1 = $("#partialRegFormModal");
            $regForm_1.on("show.bs.modal", function (event) {
                onModalOpen_1(event);
            });
            var $myInjector_1 = null;
            var $myRootScope_1 = null;
            var hasModalOpened_1 = false;
            var lastEvent_1 = null;
            var studyModalService_1 = null;
            var onModalOpen_1 = function (event) {
                if (event != null) {
                    event.preventDefault();
                    lastEvent_1 = event;
                }
                if (studyModalService_1 != null) {
                    var newScope = $myRootScope_1.$new();
                    if (event != null) {
                        newScope.modalOpeningEvent = event;
                    }
                    var modalSettings = {
                        lazyLoadAngularModuleName: "partial-reg-form-modal.controller",
                        lazyLoadRequireModuleName: "redesign/partial-reg-form-modal.controller",
                        templateUrl: "/academy/register/partial-reg-form.tpl",
                        controller: "PartialRegFormController",
                        controllerAs: "regFormCtrl",
                        windowClass: "partial-reg-form-modal actual-reg-form-modal",
                        size: studyModalService_1.SIZE_LARGE,
                        scope: newScope
                    };
                    hasModalOpened_1 = true;
                    studyModalService_1.openModalByConfigWithLazyLoad(modalSettings);
                    return;
                }
                if ($myInjector_1 == null) {
                    return;
                }
                if (!$myInjector_1.modules["study.modal"]) {
                    require(["angular/modal/study-modal.service"], function () {
                        $myInjector_1.loadNewModules(["study.modal"]);
                        studyModalService_1 = $myInjector_1.get("studyModalService");
                        if (!hasModalOpened_1) {
                            if (studyModalService_1 != null) {
                                onModalOpen_1(event);
                            }
                        }
                    });
                }
                else {
                    studyModalService_1 = $myInjector_1.get("studyModalService");
                    if (studyModalService_1 != null) {
                        onModalOpen_1(event);
                    }
                }
            };
            module.run(["$injector", "$rootScope", function ($injector, $rootScope) {
                    $myInjector_1 = $injector;
                    $myRootScope_1 = $rootScope;
                    var $partialRegFormModal = $("#partialRegFormModal.in");
                    var regFormIsAlreadyOpen = $partialRegFormModal.length > 0;
                    if (regFormIsAlreadyOpen) {
                        $regForm_1.modal("hide");
                        onModalOpen_1(lastEvent_1);
                    }
                }]);
        }
    }
    define(requireModules, init);
})();

//# sourceMappingURL=globalModules.js.map
