var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
System.register(['./index-1307bc24.system.js', './index-993fa554.system.js', './index-1458f63a.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement, Utils, css, Adapt;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.g;
            }, function (module) {
                Utils = module.U;
            }, function (module) {
                css = module.c;
                Adapt = module.A;
            }],
        execute: function () {
            var SomaCardContentStyle = css(__makeTemplateObject(["\n  :host(.soma-card-content) {\n    margin: ", ";\n    box-sizing: border-box;\n    display: block;\n  }\n  :host(.soma-card-content) ::slotted(soma-typography[variant=\"subtitle\"]) {\n    margin-bottom: ", ";\n  }\n"], ["\n  :host(.soma-card-content) {\n    margin: ", ";\n    box-sizing: border-box;\n    display: block;\n  }\n  :host(.soma-card-content) ::slotted(soma-typography[variant=\"subtitle\"]) {\n    margin-bottom: ", ";\n  }\n"]), function (props) { return props.theme.spacing.squish.md; }, function (props) { return props.theme.spacing.stack.xs; });
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
            var SomaCardContent = exports('soma_card_content', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.render = function () {
                    var className = Utils.Classes.combine({ root: 'soma-card-content' });
                    return (h(Host, { class: className }, h("slot", null)));
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
                Adapt({
                    css: SomaCardContentStyle
                })
            ], SomaCardContent.prototype, "render", null);
        }
    };
});
