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
            var Card = function (card) { return "\n  :host(.soma-card) {\n    display: block;\n    border-radius: " + card.base.shape.borderRadius + ";\n    width: 100%;\n    background-color: transparent;\n    box-sizing: border-box;\n    overflow: hidden;\n    box-shadow: " + card.base.shape.boxShadow + ";\n    background-color: " + card.base.shape.backgroundColor + ";\n  }\n  :host(.soma-card:hover) {\n    box-shadow: " + card.base.hover.shape.boxShadow + ";\n  }\n  :host(.soma-card:active) {\n    background-color: " + card.base.active.shape.backgroundColor + ";\n    border-color: " + card.base.active.shape.borderColor + ";\n  }\n  :host(.soma-card.inverse) {\n    border-style: " + card.inverse.shape.borderStyle + ";\n    border-width: " + card.inverse.shape.borderWidth + ";\n    border-color: " + card.inverse.shape.borderColor + ";\n    background-color: " + card.inverse.shape.backgroundColor + ";\n    box-shadow: none;\n  }\n  :host(.soma-card.inverse:hover) {\n    background-color: " + card.inverse.hover.shape.backgroundColor + ";\n    border-color: " + card.inverse.hover.shape.borderColor + ";\n  }\n  :host(.soma-card.inverse:active) {\n    background-color: " + card.inverse.active.shape.backgroundColor + ";\n    border-color: " + card.inverse.active.shape.borderColor + ";\n  }\n"; };
            var SomaCardStyle = css(__makeTemplateObject(["", ""], ["", ""]), function (_a) {
                var card = _a.theme.components.card;
                return Card(card);
            });
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
            var SomaCard = exports('soma_card', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                      Modifica o tema para inverse
                    */
                    this.inverse = false;
                }
                class_1.prototype.render = function () {
                    var inverse = this.inverse;
                    var className = Utils.Classes.combine({
                        root: 'soma-card',
                        conditions: { inverse: inverse }
                    });
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
                Decorators.ContextObservable()
            ], SomaCard.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaCardStyle
                })
            ], SomaCard.prototype, "render", null);
        }
    };
});
