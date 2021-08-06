var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
System.register(['./index-1307bc24.system.js', './index-993fa554.system.js', './index-1458f63a.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement, Utils, Decorators, css, Adapt;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.g;
            }, function (module) {
                Utils = module.U;
                Decorators = module.D;
            }, function (module) {
                css = module.c;
                Adapt = module.A;
            }],
        execute: function () {
            var SomaTableStyle = css(__makeTemplateObject(["\n  :host(.soma-table) {\n    display: table;\n    width: 100%;\n    border-collapse: collapse;\n\n    caption {\n      display: none;\n    }\n  }\n"], ["\n  :host(.soma-table) {\n    display: table;\n    width: 100%;\n    border-collapse: collapse;\n\n    caption {\n      display: none;\n    }\n  }\n"]));
            var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var SomaTable = exports('soma_table', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.render = function () {
                    var caption = this.caption;
                    var className = Utils.Classes.combine({ root: 'soma-table' });
                    return (h(Host, { class: className, role: "table", "aria-label": caption, tabIndex: 0 }, h("caption", null, caption), h("slot", null)));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
            __decorate([
                Decorators.Required()
            ], SomaTable.prototype, "caption", void 0);
            __decorate([
                Adapt({
                    css: SomaTableStyle
                })
            ], SomaTable.prototype, "render", null);
        }
    };
});
