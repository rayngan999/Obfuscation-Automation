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
            var Chip = function (chip) { return "\n  :host(.soma-chip) {\n    height: 32px;\n    width: fit-content;\n    box-sizing: border-box;\n    transition: 0.1s;\n    outline: none;\n    border: none;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    background-color: " + chip.base.shape.backgroundColor + ";\n    border-radius: " + chip.base.shape.borderRadius + ";\n    padding: " + chip.base.shape.padding.all + ";\n    border-style: " + chip.base.shape.borderStyle + ";\n    border-width: " + chip.base.shape.borderWidth + ";\n    border-color: " + chip.base.shape.borderColor + ";\n\n    color: " + chip.base.font.color + ";\n    font-size: " + chip.base.font.fontSize + ";\n    font-weight: " + chip.base.font.fontWeight + ";\n    font-family: " + chip.base.font.fontFamily + ";\n    line-height: " + chip.base.font.lineHeight + ";\n  }\n\n  :host(.soma-chip.clickable) {\n    cursor: pointer;\n  }\n\n  :host(.soma-chip) soma-icon {\n    font-size: 0;\n    margin-right: " + chip.base.icon.shape.margin.right + ";\n\n    path[fill] {\n      fill: " + chip.base.icon.shape.fill + ";\n    }\n    path[stroke], rect[stroke] {\n      stroke: " + chip.base.icon.shape.fill + ";\n    }\n  }\n\n  :host(.soma-chip.clickable:not(.selected):not(.disabled):hover) {\n    background-color: " + chip.base.hover.shape.backgroundColor + ";\n    border-color: " + chip.base.hover.shape.borderColor + ";\n    color: " + chip.base.hover.font.color + ";\n  }\n\n  :host(.soma-chip.selected) {\n    background-color: " + chip.base.selected.shape.backgroundColor + ";\n    border-color: " + chip.base.selected.shape.borderColor + ";\n    color: " + chip.base.selected.font.color + ";\n\n    soma-icon {\n      path[fill] {\n        fill: " + chip.base.selected.icon.shape.fill + ";\n      }\n      path[stroke], rect[stroke] {\n        stroke: " + chip.base.selected.icon.shape.fill + ";\n      }\n    }\n  }\n\n  :host(.soma-chip.clickable:not(.selected):not(.disabled):active) {\n    background-color: " + chip.base.active.shape.backgroundColor + ";\n    border-color: " + chip.base.active.shape.borderColor + ";\n    color: " + chip.base.active.font.color + ";\n  }\n\n  :host(.soma-chip.disabled) {\n    background-color: " + chip.base.disabled.shape.backgroundColor + ";\n    border-color: " + chip.base.disabled.shape.borderColor + ";\n    color: " + chip.base.disabled.font.color + ";\n    cursor: not-allowed;\n\n    soma-icon {\n      path[fill] {\n        fill: " + chip.base.disabled.icon.shape.fill + ";\n      }\n      path[stroke], rect[stroke] {\n        stroke: " + chip.base.disabled.icon.shape.fill + ";\n      }\n    }\n  }\n\n  /** \n   * Chip Inverse \n  **/\n  :host(.soma-chip.inverse) {\n    background-color: " + chip.inverse.shape.backgroundColor + ";\n    border-color: " + chip.inverse.shape.borderColor + ";\n    color: " + chip.inverse.font.color + ";\n\n    soma-icon {\n      path[fill] {\n        fill: " + chip.inverse.icon.shape.fill + ";\n      }\n      path[stroke], rect[stroke] {\n        stroke: " + chip.inverse.icon.shape.fill + ";\n      }\n    }\n  }\n\n  :host(.soma-chip.inverse.clickable:not(.selected):not(.disabled):hover) {\n    background-color: " + chip.inverse.hover.shape.backgroundColor + ";\n    border-color: " + chip.inverse.hover.shape.borderColor + ";\n    color: " + chip.inverse.hover.font.color + ";\n  }\n\n  :host(.soma-chip.inverse.selected) {\n    color: " + chip.inverse.selected.font.color + ";\n    border-color: " + chip.inverse.selected.shape.borderColor + ";\n    background-color: " + chip.inverse.selected.shape.backgroundColor + ";\n\n    soma-icon {\n      path[fill] {\n        fill: " + chip.inverse.selected.icon.shape.fill + ";\n      }\n      path[stroke], rect[stroke] {\n        stroke: " + chip.inverse.selected.icon.shape.fill + ";\n      }\n    }\n  }\n\n  :host(.soma-chip.inverse.clickable:not(.selected):not(.disabled):active) {\n    background-color: " + chip.inverse.active.shape.backgroundColor + ";\n    border-color: " + chip.inverse.active.shape.borderColor + ";\n    color: " + chip.inverse.active.font.color + ";\n  }\n\n  :host(.soma-chip.inverse.disabled) {\n    background-color: " + chip.inverse.disabled.shape.backgroundColor + ";\n    border-color: " + chip.inverse.disabled.shape.borderColor + ";\n    color: " + chip.inverse.disabled.font.color + ";\n    cursor: not-allowed;\n\n    soma-icon {\n      path[fill] {\n        fill: " + chip.inverse.disabled.icon.shape.fill + ";\n      }\n      path[stroke], rect[stroke] {\n        stroke: " + chip.inverse.disabled.icon.shape.fill + ";\n      }\n    }\n  }\n"; };
            var SomaChipStyle = css(__makeTemplateObject(["", ""], ["", ""]), function (_a) {
                var chip = _a.theme.components.chip;
                return Chip(chip);
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
            var SomaChip = exports('soma_chip', /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    /**
                     Muda o tema para inverse
                    */
                    this.inverse = false;
                    /**
                      Define o Chip como um elemento clicÃ¡vel
                    */
                    this.clickable = true;
                    /**
                      Seleciona o componente
                    */
                    this.selected = false;
                    this.handleClick = function (event) {
                        event.preventDefault();
                        if (_this.disabled)
                            return;
                        if (!_this.clickable)
                            return;
                        _this.selected = !_this.selected;
                        _this.somaClick.emit(_this.selected);
                    };
                    this.onFocus = function () { return _this.somaFocus.emit(); };
                    this.onBlur = function () { return _this.somaBlur.emit(); };
                    this.somaFocus = createEvent(this, "somaFocus", 7);
                    this.somaBlur = createEvent(this, "somaBlur", 7);
                    this.somaClick = createEvent(this, "somaClick", 7);
                }
                class_1.prototype.render = function () {
                    var _a = this, selected = _a.selected, icon = _a.icon, inverse = _a.inverse, ariaLabel = _a.ariaLabel, disabled = _a.disabled, clickable = _a.clickable;
                    var className = Utils.Classes.combine({
                        root: 'soma-chip',
                        conditions: {
                            clickable: clickable,
                            selected: selected,
                            disabled: disabled,
                            inverse: inverse
                        },
                    });
                    return (h(Host, { onClick: this.handleClick, class: className, role: "button", "aria-label": ariaLabel, "aria-disabled": disabled ? true : null, "aria-hidden": disabled ? true : null, onFocus: this.onFocus, onBlur: this.onBlur, tabIndex: disabled ? null : "0" }, icon ? (h("soma-icon", { icon: icon, size: "sm" })) : null, h("slot", null)));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                return class_1;
            }()));
            __decorate([
                Decorators.ContextObservable()
            ], SomaChip.prototype, "inverse", void 0);
            __decorate([
                Decorators.Required()
            ], SomaChip.prototype, "ariaLabel", void 0);
            __decorate([
                Adapt({
                    css: SomaChipStyle
                })
            ], SomaChip.prototype, "render", null);
        }
    };
});
