define(["require", "exports"], function (require, exports) {
    "use strict";
    var Remspect = (function () {
        function Remspect() {
            Object.defineProperty(this, "factorsToVariations", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: {}
            });
            var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)ssoe_debug\s*=\s*([^;]*).*$)|^.*$/, "$1");
            var ssoeRegex = /([^-]+)-([^\.]+)\.?/g;
            var match = ssoeRegex.exec(cookieValue);
            while (match !== null) {
                var factor = match[1].toLowerCase();
                var variation = match[2].toLowerCase();
                this.factorsToVariations[factor] = variation;
                match = ssoeRegex.exec(cookieValue);
            }
        }
        Object.defineProperty(Remspect.prototype, "isVariation", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factor, variation) {
                factor = factor.toLowerCase();
                if (variation === 'control') {
                    return this.isControl(factor);
                }
                var orVariationRegex = /([^|]+)/g;
                var notVariationRegex = /^!(.*)/g;
                var match = orVariationRegex.exec(variation);
                while (match !== null) {
                    var v = match[1].toLowerCase();
                    var notMatch = v.match(notVariationRegex);
                    var variationDesired = (notMatch === null);
                    if (!variationDesired) {
                        v = v.slice(1);
                    }
                    var foundVariation = (this.factorsToVariations[factor] === v);
                    if (foundVariation && variationDesired) {
                        return true;
                    }
                    else if (!foundVariation && !variationDesired) {
                        return true;
                    }
                    match = orVariationRegex.exec(variation);
                }
                return false;
            }
        });
        ;
        Object.defineProperty(Remspect.prototype, "isControl", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factor) {
                return !this.factorsToVariations[factor.toLowerCase()] || this.factorsToVariations[factor.toLowerCase()] === 'control';
            }
        });
        ;
        Object.defineProperty(Remspect.prototype, "isAssignedToFactor", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factor) {
                return this.factorsToVariations[factor.toLowerCase()] != null;
            }
        });
        Object.defineProperty(Remspect.prototype, "getVariation", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (factor) {
                return this.factorsToVariations[factor.toLowerCase()];
            }
        });
        Object.defineProperty(Remspect.prototype, "printVariations", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                console.log(this.factorsToVariations);
            }
        });
        ;
        return Remspect;
    }());
    return new Remspect();
});

//# sourceMappingURL=remspect.js.map
