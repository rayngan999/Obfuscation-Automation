define(["require", "exports", "angularDependency", "logging/visible/visibility-tester", "angularDependency", "logging/visible/visibility-tester"], function (require, exports, angular, visibility_tester_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VisibilityTesterService = void 0;
    var VisibilityTesterService = (function () {
        function VisibilityTesterService() {
            Object.defineProperty(this, "visibilityTester", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: new visibility_tester_1.VisibilityTester()
            });
            this.visibilityTester.start();
        }
        return VisibilityTesterService;
    }());
    exports.VisibilityTesterService = VisibilityTesterService;
    var module = angular.module("visibility-tester.service", []);
    module.service("visibilityTesterService", VisibilityTesterService);
});

//# sourceMappingURL=visibility-tester.service.js.map
