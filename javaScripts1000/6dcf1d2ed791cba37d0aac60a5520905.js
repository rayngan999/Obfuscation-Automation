define(["require", "exports", "angularDependency", "lib/angular/ui-bootstrap", "remspect/remspect.directive"], function (require, exports, angular) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var app = angular.module("typeahead.controller", [
        "study.remspect-directives",
        "ui.bootstrap",
        "ui.bootstrap.typeahead"
    ]);
    var TypeaheadController = (function () {
        function TypeaheadController($http, $element, $timeout) {
            Object.defineProperty(this, "$http", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "$element", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "$timeout", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "query", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "searchForm", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.$http = $http;
            this.$element = $element;
            this.$timeout = $timeout;
            this.searchForm = this.$element.find("form");
        }
        Object.defineProperty(TypeaheadController.prototype, "suggestedTypeaheadResults", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (searchPattern) {
                var regex = /.*(?=(\s\w+\s*){2}$)/;
                var prefix = searchPattern.match(regex);
                var query = searchPattern.replace(regex, "").trim();
                return this.$http.get("/search/text/autocomplete.ajax", { params: { searchPattern: query } })
                    .then(function (response) {
                    return response.data.map(function (result) { return (prefix === null ? '' : prefix[0]) + " " + result; });
                });
            }
        });
        Object.defineProperty(TypeaheadController.prototype, "typeAheadClickHandler", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (item, model) {
                var _this = this;
                this.query = model;
                this.$timeout(function () {
                    _this.searchForm.submit();
                }, 0);
            }
        });
        Object.defineProperty(TypeaheadController, "$inject", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["$http", "$element", "$timeout"]
        });
        return TypeaheadController;
    }());
    app.controller('TypeaheadController', TypeaheadController);
    app.directive("studyTypeahead", function () {
        return {
            restrict: "E",
            scope: {
                pageType: "@",
                extraClass: "@?",
                cname: "@?"
            },
            controller: TypeaheadController,
            controllerAs: "typeaheadCtrl",
            bindToController: true,
            templateUrl: "/templates/typeahead-search.tpl"
        };
    });
});

//# sourceMappingURL=typeahead.controller.js.map
