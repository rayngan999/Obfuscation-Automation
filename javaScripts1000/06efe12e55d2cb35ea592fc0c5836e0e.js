define(["require", "exports", "angularDependency", "util/remspect", "angularDependency", "util/remspect"], function (require, exports, angular, Remspect) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var module = angular.module("study.remspect-directives", []);
    var RemspectDirectiveUtil = (function () {
        function RemspectDirectiveUtil() {
        }
        Object.defineProperty(RemspectDirectiveUtil, "doTranscludeOrHide", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (shouldTransclude, transcludeFn, element) {
                if (shouldTransclude) {
                    transcludeFn(function (clone) {
                        element.append(clone);
                    });
                }
                else {
                    element.addClass("ng-hide");
                }
            }
        });
        return RemspectDirectiveUtil;
    }());
    module.directive('studyIfVariation', [function () {
            return {
                restrict: 'AE',
                scope: {
                    'factor': '@',
                    'variation': '@'
                },
                transclude: true,
                link: function (scope, element, attrs, crtl, transclude) {
                    var factor = attrs.factor;
                    var variant = attrs.variation;
                    var shouldTransclude = Remspect.isVariation(factor, variant);
                    RemspectDirectiveUtil.doTranscludeOrHide(shouldTransclude, transclude, element);
                }
            };
        }]);
    module.directive('studyIfRemspect', [function () {
            return {
                restrict: 'E',
                scope: {
                    'expression': '@'
                },
                transclude: true,
                link: function (scope, element, attrs, crtl, transclude) {
                    var expression = attrs.expression;
                    var shouldTransclude = false;
                    var clauses = expression.split("||");
                    for (var _i = 0, clauses_1 = clauses; _i < clauses_1.length; _i++) {
                        var clause = clauses_1[_i];
                        clause = clause.trim();
                        var isNegated = clause.indexOf("!") === 0;
                        if (isNegated) {
                            clause = clause.substring(1).trim();
                        }
                        var factorAndVariant = clause.split("-");
                        var factor = factorAndVariant[0];
                        var variant = factorAndVariant[1];
                        shouldTransclude = shouldTransclude || (isNegated ? !Remspect.isVariation(factor, variant) : Remspect.isVariation(factor, variant));
                    }
                    RemspectDirectiveUtil.doTranscludeOrHide(shouldTransclude, transclude, element);
                }
            };
        }]);
    module.directive('studyIfNotVariation', [function () {
            return {
                restrict: 'AE',
                scope: {
                    'factor': '@',
                    'variation': '@'
                },
                transclude: true,
                link: function (scope, element, attrs, crtl, transclude) {
                    var factor = attrs.factor;
                    var variant = attrs.variation;
                    var shouldTransclude = !Remspect.isVariation(factor, variant);
                    RemspectDirectiveUtil.doTranscludeOrHide(shouldTransclude, transclude, element);
                }
            };
        }]);
    module.directive('studyIfControl', [function () {
            return {
                restrict: 'AE',
                scope: {
                    'factor': '@?'
                },
                transclude: true,
                link: function (scope, element, attrs, crtl, transclude) {
                    var factor = attrs.factor;
                    if (!factor) {
                        factor = attrs.studyIfControl;
                    }
                    var shouldTransclude = Remspect.isControl(factor);
                    RemspectDirectiveUtil.doTranscludeOrHide(shouldTransclude, transclude, element);
                }
            };
        }]);
    module.directive('studyIfNotControl', [function () {
            return {
                restrict: 'AE',
                scope: {
                    'factor': '@?',
                    'anyFactorsInList': '@?'
                },
                transclude: true,
                link: function (scope, element, attrs, crtl, transclude) {
                    var factors = [];
                    if (attrs.anyFactorsInList) {
                        var factorsString = attrs.anyFactorsInList.replace(" ", "");
                        factors = factorsString.split(",");
                    }
                    else if (!attrs.factor) {
                        factors.push(attrs.studyIfNotControl);
                    }
                    else {
                        factors.push(attrs.factor);
                    }
                    var shouldTransclude = false;
                    for (var _i = 0, factors_1 = factors; _i < factors_1.length; _i++) {
                        var factor = factors_1[_i];
                        shouldTransclude = !Remspect.isControl(factor) || shouldTransclude;
                    }
                    RemspectDirectiveUtil.doTranscludeOrHide(shouldTransclude, transclude, element);
                }
            };
        }]);
});

//# sourceMappingURL=remspect.directive.js.map
