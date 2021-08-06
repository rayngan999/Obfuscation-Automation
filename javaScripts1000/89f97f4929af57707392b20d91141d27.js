define(["require", "exports", "angularDependency"], function (require, exports, angular) {
    "use strict";
    var ValueProxy = (function () {
        function ValueProxy(initialValue, valueLoader) {
            Object.defineProperty(this, "isLoading", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "value", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "promiseToLoadData", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "valueLoader", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            Object.defineProperty(this, "callbacks", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: void 0
            });
            this.value = initialValue;
            this.valueLoader = valueLoader;
            this.callbacks = [];
            this.isLoading = false;
            this.promiseToLoadData = null;
        }
        Object.defineProperty(ValueProxy.prototype, "getValue", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                if (this.promiseToLoadData) {
                    return this.promiseToLoadData;
                }
                return this.reloadValue();
            }
        });
        ;
        Object.defineProperty(ValueProxy.prototype, "reloadValue", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var _this = this;
                if (this.isLoading) {
                    return this.promiseToLoadData.then(function () {
                        return _this.reloadValue();
                    });
                }
                this.isLoading = true;
                this.promiseToLoadData = this.valueLoader()
                    .then(function (value) {
                    _this.clearValue();
                    angular.extend(_this.value, value);
                    _this.triggerListeners();
                    return _this.value;
                })
                    .finally(function () {
                    _this.isLoading = false;
                });
                return this.promiseToLoadData;
            }
        });
        ;
        Object.defineProperty(ValueProxy.prototype, "triggerListeners", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
                    var callback = _a[_i];
                    callback(this.value);
                }
            }
        });
        Object.defineProperty(ValueProxy.prototype, "addValueListener", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (callback) {
                this.callbacks.push(callback);
                if (!this.isLoading && this.promiseToLoadData != null) {
                    callback(this.value);
                }
                return this.callbacks.length - 1;
            }
        });
        Object.defineProperty(ValueProxy.prototype, "removeValueListener", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (index) {
                this.callbacks.splice(index, 1);
            }
        });
        Object.defineProperty(ValueProxy.prototype, "clearValue", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                if (this.value) {
                    if (this.value instanceof Array) {
                        this.value.length = 0;
                    }
                    else {
                        var valueObject = this.value;
                        for (var member in valueObject) {
                            if (valueObject.hasOwnProperty(member)) {
                                delete valueObject[member];
                            }
                        }
                    }
                }
            }
        });
        ;
        Object.defineProperty(ValueProxy.prototype, "isActive", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                return this.promiseToLoadData != null;
            }
        });
        return ValueProxy;
    }());
    return ValueProxy;
});

//# sourceMappingURL=value-pro.js.map
