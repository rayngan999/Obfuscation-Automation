define(["require", "exports", "angularDependency", "angularDependency", "logging/visible/visibility-tester.service"], function (require, exports, angular) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var module = angular.module("track-visible.directive", ["visibility-tester.service"]);
    module.directive("trackVisible", ["visibilityTesterService", function (visibilityTesterService) {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    var targetElement = element[0];
                    var visibilityTester = visibilityTesterService.visibilityTester;
                    visibilityTester.addElementToCheck(targetElement);
                    scope.$on("$destroy", function () {
                        visibilityTester.removeElementToCheck(targetElement);
                    });
                }
            };
        }]);
});

//# sourceMappingURL=track-visible.directive.js.map
