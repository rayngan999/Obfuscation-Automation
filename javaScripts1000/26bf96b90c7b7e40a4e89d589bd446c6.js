var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
System.register(['./index-1307bc24.system.js', './index-993fa554.system.js', './index-1458f63a.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, Host, Utils, Decorators, css, Adapt;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.c;
                h = module.h;
                Host = module.H;
            }, function (module) {
                Utils = module.U;
                Decorators = module.D;
            }, function (module) {
                css = module.c;
                Adapt = module.A;
            }],
        execute: function () {
            var AccordionItem = function (accordion) { return "\n  :host(.soma-accordion-item) {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n\n    width: 100%;\n    box-sizing: border-box;\n\n    .header {\n      display: flex;\n      justify-content: space-between;\n      box-sizing: border-box;\n      align-items: center;\n      cursor: pointer;\n      padding: " + accordion.item.header.shape.padding.top + "\n        " + accordion.item.header.shape.padding.right + "\n        " + accordion.item.header.shape.padding.bottom + "\n        " + accordion.item.header.shape.padding.left + ";\n\n      soma-icon {\n        margin-left: " + accordion.item.header.icon.shape.margin.left + ";\n\n        .soma-icon path {\n          stroke: " + accordion.item.header.icon.shape.stroke + ";\n        }\n      }\n\n      soma-paragraph {\n        color: " + accordion.item.header.font.color + ";\n        font-weight: " + accordion.item.header.font.fontWeight + ";\n      }\n    }\n\n    .content {\n      display: flex;\n      justify-content: flex-start;\n      overflow: hidden;\n      height: 0;\n      padding: 0;\n    }\n  }\n\n  :host(.soma-accordion-item.border) {\n    border-bottom: " + accordion.item.border.shape.borderWidth + "\n      " + accordion.item.border.shape.borderStyle + "\n      " + accordion.item.border.shape.borderColor + " !important;\n  }\n\n  :host(.soma-accordion-item.borderless) {\n    border-bottom: none !important;\n  }\n\n  :host(.soma-accordion-item.expanded) {\n    .content {\n      height: auto;\n      padding-bottom: " + accordion.item.expanded.content.shape.padding.bottom + ";\n    }\n  }\n\n  :host(.soma-accordion-item.disabled),\n  :host(.soma-accordion-item.inverse.disabled) {\n    .header {\n      cursor: " + accordion.item.disabled.header.shape.cursor + ";\n      soma-paragraph {\n        color: " + accordion.item.disabled.header.font.color + ";\n      }\n      soma-icon {\n        .soma-icon path {\n          stroke: " + accordion.item.disabled.header.icon.shape.stroke + ";\n        }\n      }\n    }\n  }\n\n  :host(.soma-accordion-item.inverse) {\n    .header {\n      soma-paragraph {\n        color: " + accordion.item.inverse.header.font.color + ";\n      }\n      soma-icon {\n        .soma-icon path {\n          stroke: " + accordion.item.inverse.header.icon.shape.stroke + ";\n        }\n      }\n    }\n  }\n"; };
            var SomaAccordionItemStyle = css(__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"]), function (_a) {
                var accordion = _a.theme.components.accordion;
                return AccordionItem(accordion);
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
            var SomaAccordionItem = exports('soma_accordion_item', /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    /**
                     Label do item
                    */
                    this.label = "";
                    /**
                     Define se o item iniciarÃ¡ expandido (aberto)
                    */
                    this.expanded = false;
                    /**
                     Define se o item estÃ¡ desabilitado
                    */
                    this.disabled = false;
                    /**
                      Muda o tema para inverse
                    */
                    this.inverse = false;
                    this.handleClick = function (event) { return !_this.disabled && _this.somaClick.emit(event); };
                    this.handleKeyUp = function (event) {
                        var keypressed = event.key;
                        if (keypressed === "Enter") {
                            _this.handleClick(event);
                        }
                    };
                    this.somaClick = createEvent(this, "somaClick", 7);
                }
                class_1.prototype.render = function () {
                    var _a = this, label = _a.label, expanded = _a.expanded, disabled = _a.disabled, inverse = _a.inverse;
                    var className = Utils.Classes.combine({
                        root: "soma-accordion-item",
                        conditions: { expanded: expanded, disabled: disabled, inverse: inverse },
                    });
                    var icon = expanded ? "chevron-up" : "chevron-down";
                    return (h(Host, { class: className }, h("header", { class: "header", role: "button", "aria-label": label, "aria-expanded": expanded ? "true" : "false", tabindex: 0, onClick: this.handleClick, onKeyUp: this.handleKeyUp }, h("soma-paragraph", { "aria-hidden": "true" }, label), h("soma-icon", { size: "md", icon: icon, "aria-hidden": "true" })), h("section", { class: "content", role: "region" }, expanded ? h("slot", null) : "")));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                return class_1;
            }()));
            __decorate([
                Decorators.ContextObservable()
            ], SomaAccordionItem.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaAccordionItemStyle,
                })
            ], SomaAccordionItem.prototype, "render", null);
        }
    };
});
