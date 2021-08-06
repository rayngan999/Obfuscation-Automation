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
            var Accordion = function (accordion) { return "\n  :host(.soma-accordion) {\n    display: block;\n    width: 100%;\n  }\n\n  :host(.soma-accordion.border) ::slotted(.soma-accordion-item) {\n    border-bottom: " + accordion.item.border.shape.borderWidth + "\n      " + accordion.item.border.shape.borderStyle + "\n      " + accordion.item.border.shape.borderColor + ";\n  }\n\n  :host(.soma-accordion.inverse.border) ::slotted(.soma-accordion-item) {\n    border-color: " + accordion.item.inverse.border.shape.borderColor + ";\n  }\n"; };
            var SomaAccordionStyle = css(__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"]), function (_b) {
                var accordion = _b.theme.components.accordion;
                return Accordion(accordion);
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
            var SomaAccordion = exports('soma_accordion', /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    /**
                     * Define que multiplos items poderÃ£o ser mostrados no accordion
                     */
                    this.multiple = true;
                    /**
                     Define se os items terÃ£o uma borda inferior
                    */
                    this.border = true;
                    /**
                      Muda o tema para inverse
                    */
                    this.inverse = false;
                    this.handleItemClick = function (event) {
                        var item = event === null || event === void 0 ? void 0 : event.target;
                        if (item.tagName.toLowerCase() === "soma-accordion-item") {
                            !_this.multiple && _this.collapseAllItems();
                            item.expanded = !item.expanded;
                        }
                    };
                    this.collapseAllItems = function () {
                        var items = Object.values(_this.el.getElementsByTagName("soma-accordion-item"));
                        items.forEach(function (item) { return (item.expanded = false); });
                    };
                }
                class_1.prototype.connectedCallback = function () {
                    var _a;
                    (_a = this.el) === null || _a === void 0 ? void 0 : _a.addEventListener("somaClick", this.handleItemClick);
                };
                class_1.prototype.disconnectedCallback = function () {
                    var _a;
                    (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeEventListener("somaClick", this.handleItemClick);
                };
                class_1.prototype.render = function () {
                    var _b = this, border = _b.border, inverse = _b.inverse;
                    var className = Utils.Classes.combine({
                        root: "soma-accordion",
                        conditions: {
                            border: border,
                            inverse: inverse
                        },
                    });
                    return (h(Host, { class: className }, h("slot", null)));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
            __decorate([
                Decorators.ContextObservable()
            ], SomaAccordion.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaAccordionStyle,
                })
            ], SomaAccordion.prototype, "render", null);
        }
    };
});
