define(["require", "exports", "jquery", "util/remspect", "lib/jquery/cookie"], function (require, exports, $, remspect) {
    "use strict";
    var Listrak = (function () {
        function Listrak() {
            Object.defineProperty(this, "product", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: ''
            });
            Object.defineProperty(this, "listrakLoaded", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: false
            });
            if (this.isInTest()) {
                if (this.isTracked()) {
                    this.loadListrak();
                }
                if (this.checkUrl("src=ltk")) {
                    this.startTracking();
                }
                if (this.checkUrl("/academy/course/")) {
                    this.startTracking();
                }
            }
        }
        Object.defineProperty(Listrak.prototype, "executeAsyncListrak", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (codeToRun) {
                (function () { if (typeof window._ltk == 'object') {
                    ltkCode();
                }
                else {
                    (function (d) { if (document.addEventListener)
                        document.addEventListener('ltkAsyncListener', d);
                    else {
                        var e = document.documentElement;
                        e.ltkAsyncProperty = 0;
                        e.attachEvent('onpropertychange', function (e) { if (e.propertyName == 'ltkAsyncProperty') {
                            d();
                        } });
                    } })(function () { ltkCode(); });
                } function ltkCode() { window._ltk_util.ready(codeToRun); } })();
            }
        });
        Object.defineProperty(Listrak.prototype, "saveData", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (regValues) {
                var _this = this;
                if (this.isInTest()) {
                    this.startTracking();
                    if (regValues.product != this.product) {
                        this.product = regValues.product;
                        var browseFunction = function () { window._ltk.Activity.AddProductBrowse(_this.product); };
                        this.executeAsyncListrak(browseFunction);
                    }
                }
            }
        });
        Object.defineProperty(Listrak.prototype, "isInTest", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                return remspect.isVariation('listrak', 'x');
            }
        });
        Object.defineProperty(Listrak.prototype, "checkUrl", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function (value) {
                return window.location.href.indexOf(value) > -1;
            }
        });
        Object.defineProperty(Listrak.prototype, "isTracked", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                var isTracked = false;
                if ($.cookie('listrak')) {
                    var trackPageViewCookie = $.cookie('listrak');
                    isTracked = (trackPageViewCookie === 'true');
                }
                return isTracked;
            }
        });
        Object.defineProperty(Listrak.prototype, "loadListrak", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                if (!this.listrakLoaded) {
                    var captureEmail = function () { window._ltk.SCA.CaptureEmail('email'); };
                    this.executeAsyncListrak(captureEmail);
                    require(['lib/listrak']);
                    this.listrakLoaded = true;
                }
            }
        });
        Object.defineProperty(Listrak.prototype, "startTracking", {
            enumerable: false,
            configurable: true,
            writable: true,
            value: function () {
                $.cookie('listrak', true, { path: '/', expires: 730 });
                this.loadListrak();
            }
        });
        return Listrak;
    }());
    return Listrak;
});

//# sourceMappingURL=listrak.js.map
