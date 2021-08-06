define(["require", "exports", "angularDependency", "angularDependency", "member/info/member-info.service"], function (require, exports, angular) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeatureCheckService = void 0;
    var MODULE_NAME = "study.feature-check";
    var SERVICE_NAME = "featureCheckService";
    var module = angular.module(MODULE_NAME, ["member-info.service"]);
    var FeatureCheckService = (function () {
        function FeatureCheckService($http, $q, memberInfoService) {
            Object.defineProperty(this, "FEATURE_ASK_THE_EXPERT", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_ASK_THE_EXPERT"
            });
            Object.defineProperty(this, "FEATURE_CLASSROOM_MANAGEMENT", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_CLASSROOM_MANAGEMENT"
            });
            Object.defineProperty(this, "FEATURE_CLASSROOM_PARTICIPATION", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_CLASSROOM_PARTICIPATION"
            });
            Object.defineProperty(this, "FEATURE_COURSE_PROGRESS", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_COURSE_PROGRESS"
            });
            Object.defineProperty(this, "FEATURE_CUSTOM_COURSES", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_CUSTOM_COURSES"
            });
            Object.defineProperty(this, "FEATURE_INSTITUTION_ADMIN", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_INSTITUTION_ADMIN"
            });
            Object.defineProperty(this, "FEATURE_MEMBER_ACTIVITY", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_MEMBER_ACTIVITY"
            });
            Object.defineProperty(this, "FEATURE_PLAYLISTS", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_PLAYLISTS"
            });
            Object.defineProperty(this, "FEATURE_PROCTORED_EXAM", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_PROCTORED_EXAM"
            });
            Object.defineProperty(this, "FEATURE_STUDY_TRAINER", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_STUDY_TRAINER"
            });
            Object.defineProperty(this, "FEATURE_TEACHER_SHARE", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_TEACHER_SHARE"
            });
            Object.defineProperty(this, "FEATURE_VIEW_SUBSCRIPTION_CTAS", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_VIEW_SUBSCRIPTION_CTAS"
            });
            Object.defineProperty(this, "FEATURE_COURSE_CATALOG", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_COURSE_CATALOG"
            });
            Object.defineProperty(this, "FEATURE_SSO_ACCOUNT", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_SSO_ACCOUNT"
            });
            Object.defineProperty(this, "SSO_ONLY_ACCOUNT", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_SSO_ONLY_ACCOUNT"
            });
            Object.defineProperty(this, "FEATURE_CHANGE_PROFILE_NAME", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: "FEATURE_CHANGE_PROFILE_NAME"
            });
            Object.defineProperty(this, "$http", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "$q", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "allFeaturesPromise", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "memberInfoService", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "memberId", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: -1
            });
            this.$http = $http;
            this.$q = $q;
            this.memberInfoService = memberInfoService;
        }
        Object.defineProperty(FeatureCheckService.prototype, "getAllFeatures", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var _this = this;
                if (this.allFeaturesPromise) {
                    return this.allFeaturesPromise;
                }
                this.allFeaturesPromise = this.memberInfoService.memberInfoProxy.getValue().then(function (memberInfo) {
                    if (memberInfo.isLoggedIn) {
                        _this.memberId = memberInfo.memberId;
                        return _this.$http.get("/member/feature-check/get-features.ajax")
                            .then(function (response) {
                            var featureToEnabledMap = response.data;
                            return featureToEnabledMap;
                        });
                    }
                    else {
                        return _this.$q.when({});
                    }
                });
                return this.allFeaturesPromise;
            }
        });
        ;
        Object.defineProperty(FeatureCheckService.prototype, "hasFeature", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (featureKey) {
                return this.getAllFeatures()
                    .then(function (featureToEnabledMap) {
                    var hasFeature = (featureToEnabledMap[featureKey] === true);
                    return hasFeature;
                });
            }
        });
        ;
        Object.defineProperty(FeatureCheckService.prototype, "hasPermission", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (featureKey, accessType, memberId) {
                var _this = this;
                return this.getAllFeatures()
                    .then(function (featureToEnabledMap) {
                    if (memberId == null) {
                        memberId = _this.memberId;
                    }
                    var specificKey = "PACL/" + featureKey + "/" + memberId + "/" + accessType;
                    var allAccessKey = "PACL/" + featureKey + "/" + memberId + "/*";
                    var hasSpecificAccessMatch = (featureToEnabledMap[specificKey] === true);
                    var hasFullAccessMatch = (featureToEnabledMap[allAccessKey] === true);
                    return hasSpecificAccessMatch || hasFullAccessMatch;
                });
            }
        });
        ;
        Object.defineProperty(FeatureCheckService, "MODULE_NAME", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: MODULE_NAME
        });
        Object.defineProperty(FeatureCheckService, "SERVICE_NAME", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: SERVICE_NAME
        });
        Object.defineProperty(FeatureCheckService, "$inject", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["$http", "$q", "MemberInfoService"]
        });
        return FeatureCheckService;
    }());
    exports.FeatureCheckService = FeatureCheckService;
    module.service(SERVICE_NAME, FeatureCheckService);
    function featureCheckDirectiveFactory(module, directiveName, showIfHasFeature) {
        var directiveFactory = ["featureCheckService", function (featureCheckService) {
                var link = function (scope, element, attrs, ctrl, transclude) {
                    var feature = scope[directiveName] || scope["feature"];
                    featureCheckService.hasFeature(feature).then(function (hasFeature) {
                        if (hasFeature && showIfHasFeature || !hasFeature && !showIfHasFeature) {
                            transclude(function (clone) {
                                element.append(clone);
                            });
                        }
                    });
                };
                var scope = {};
                scope[directiveName] = "@";
                scope["feature"] = "@";
                return {
                    restrict: "EA",
                    transclude: true,
                    scope: scope,
                    link: link
                };
            }];
        module.directive(directiveName, directiveFactory);
    }
    featureCheckDirectiveFactory(module, "showIfHasFeature", true);
    featureCheckDirectiveFactory(module, "hideIfHasFeature", false);
});

//# sourceMappingURL=feature-check.service.js.map
