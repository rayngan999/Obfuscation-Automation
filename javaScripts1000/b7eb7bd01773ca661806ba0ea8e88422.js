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
            var SomaCardHeaderStyle = css(__makeTemplateObject(["\n  :host(.soma-card-header) {\n    margin: ", ";\n    margin-top: ", ";\n    box-sizing: border-box;\n    display: block;\n  }\n  :host(.soma-card-header) .icon,\n  :host(.soma-card-header) .content {\n    margin-top: ", ";\n  }\n"], ["\n  :host(.soma-card-header) {\n    margin: ", ";\n    margin-top: ", ";\n    box-sizing: border-box;\n    display: block;\n  }\n  :host(.soma-card-header) .icon,\n  :host(.soma-card-header) .content {\n    margin-top: ", ";\n  }\n"]), function (props) { return props.theme.spacing.squish.md; }, function (props) { return props.theme.spacing.stack.md; }, function (props) { return props.theme.spacing.stack.xs; });
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
            var SomaCardHeader = exports('soma_card_header', /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    /**
                      Modifica o tema para inverse
                    */
                    this.inverse = false;
                    this.getIconColor = function (inverse) { return "theme.color." + (inverse ? 'brand.pure' : "neutral.dark.1"); };
                    this.renderIcon = function (icon, inverse) {
                        if (!icon)
                            return null;
                        return (h("div", { class: "icon" }, h("soma-icon", { icon: icon, size: "md", color: _this.getIconColor(inverse) })));
                    };
                }
                class_1.prototype.render = function () {
                    var inverse = this.inverse;
                    var className = Utils.Classes.combine({ root: 'soma-card-header', conditions: { inverse: inverse } });
                    return (h(Host, { class: className }, this.renderIcon(this.icon, this.inverse), h("div", { class: "content" }, h("slot", null))));
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
                Decorators.ContextObservable()
            ], SomaCardHeader.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaCardHeaderStyle
                })
            ], SomaCardHeader.prototype, "render", null);
        }
    };
});
