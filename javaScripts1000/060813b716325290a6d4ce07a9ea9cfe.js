var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
System.register(['./index-1307bc24.system.js', './index-993fa554.system.js', './index-1458f63a.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, Host, getElement, Utils, Decorators, css, Adapt;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.c;
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
            var Button = function (_a) {
                var base = _a.base, md = _a.md, sm = _a.sm;
                return "\n  :host(.soma-button) {\n    position: relative;\n    text-align: center;\n    border: none;\n    box-sizing: border-box;\n    outline: none;\n    vertical-align:middle;\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n\n    cursor: " + base.shape.cursor + ";\n    height: " + base.shape.height + ";\n    background-color: " + base.shape.backgroundColor + ";\n    border-radius: " + base.shape.borderRadius + ";\n    padding: " + base.shape.padding.top + "\n      " + base.shape.padding.right + "\n      " + base.shape.padding.bottom + "\n      " + base.shape.padding.left + ";\n\n    letter-spacing: " + base.font.letterSpacing + ";\n    text-transform: " + base.font.textTransform + ";\n    font-family: " + base.font.fontFamily + ";\n    font-weight: " + base.font.fontWeight + ";\n    font-size: " + base.font.fontSize + ";\n    color: " + base.font.color + ";\n    line-height: " + base.font.lineHeight + ";\n\n    transition-property: " + base.shape.transition.property + ";\n    transition-delay: " + base.shape.transition.delay + ";\n    transition-duration: " + base.shape.transition.duration + ";\n  }\n\n  :host(.soma-button) button {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    outline: none;\n    opacity: 0;\n    cursor: pointer;\n  }\n\n  :host(.soma-button.disabled) button {\n    cursor: not-allowed;\n  }\n\n  :host(.soma-button.lg) {\n    text-align: center;\n    border: none;\n    box-sizing: border-box;\n    outline: none;\n    display: inline-flex;\n    vertical-align:middle;\n    cursor: " + base.shape.cursor + ";\n\n    min-width: " + base.shape.minWidth + ";\n    height: " + base.shape.height + ";\n    font-size: " + base.font.fontSize + ";\n    padding: " + base.shape.padding.top + "\n      " + base.shape.padding.right + "\n      " + base.shape.padding.bottom + "\n      " + base.shape.padding.left + ";\n  }\n\n  :host(.soma-button.md) {\n    text-align: center;\n    border: none;\n    box-sizing: border-box;\n    outline: none;\n    display: inline-flex;\n    vertical-align:middle;\n    cursor: " + base.shape.cursor + ";\n\n    min-width: " + md.shape.minWidth + ";\n    height: " + md.shape.height + ";\n    font-size: " + md.font.fontSize + ";\n    padding: " + md.shape.padding.top + "\n      " + md.shape.padding.right + "\n      " + md.shape.padding.bottom + "\n      " + md.shape.padding.left + ";\n  }\n\n  :host(.soma-button.sm) {\n    text-align: center;\n    border: none;\n    box-sizing: border-box;\n    outline: none;\n    display: inline-flex;\n    vertical-align:middle;\n    cursor: " + base.shape.cursor + ";\n\n    min-width: " + sm.shape.minWidth + ";\n    height: " + sm.shape.height + ";\n    font-size: " + sm.font.fontSize + ";\n    padding: " + sm.shape.padding.top + "\n      " + sm.shape.padding.right + "\n      " + sm.shape.padding.bottom + "\n      " + sm.shape.padding.left + ";\n  }\n\n  :host(.soma-button:hover) {\n    background-color: " + base.hover.shape.backgroundColor + ";\n    border-color: " + base.hover.shape.borderColor + ";\n    color: " + base.hover.font.color + ";\n  }\n\n  :host(.soma-button:active) {\n    background-color: " + base.active.shape.backgroundColor + ";\n    border-color: " + base.active.shape.borderColor + ";\n    color: " + base.active.font.color + ";\n  }\n\n  :host(.soma-button.disabled) {\n    background-color: " + base.disabled.shape.backgroundColor + ";\n    border-color: " + base.disabled.shape.borderColor + ";\n    color: " + base.disabled.font.color + ";\n    cursor: " + base.disabled.shape.cursor + ";\n  }\n\n  :host(.soma-button) soma-icon {\n    margin-right: " + base.icon.shape.margin.right + ";\n    display: " + base.icon.shape.display + ";\n    font-size: calc(" + base.icon.font.fontSize + " - 3px);\n  }\n\n  :host(.soma-button.sm) soma-icon {\n    font-size: calc(" + sm.icon.font.fontSize + " - 3px);\n  }\n\n  :host(.soma-button.md) soma-icon {\n    font-size: calc(" + md.icon.font.fontSize + " - 3px);\n  }\n";
            };
            var ButtonSecondary = function (_a) {
                var secondary = _a.secondary;
                return "\n  :host(.soma-button.secondary) {\n    background-color: transparent;\n    color: " + secondary.font.color + ";\n    border-style: " + secondary.shape.borderStyle + ";\n    border-width: " + secondary.shape.borderWidth + ";\n    border-color: " + secondary.shape.borderColor + ";\n  }\n\n  :host(.soma-button.secondary:hover) {\n    background-color: " + secondary.hover.shape.backgroundColor + ";\n    border-color: " + secondary.hover.shape.borderColor + ";\n    color: " + secondary.hover.font.color + ";\n  }\n\n  :host(.soma-button.secondary:active) {\n    background-color: " + secondary.active.shape.backgroundColor + ";\n    border-color: " + secondary.active.shape.borderColor + ";\n    color: " + secondary.active.font.color + ";\n  }\n\n  :host(.soma-button.secondary.disabled) {\n    background-color: " + secondary.disabled.shape.backgroundColor + ";\n    border-color: " + secondary.disabled.shape.borderColor + ";\n    color: " + secondary.disabled.font.color + ";\n  }\n\n  :host(.soma-button.secondary.inverse) {\n    background-color: " + secondary.inverse.shape.backgroundColor + ";\n    border-color: " + secondary.inverse.shape.borderColor + ";\n    color: " + secondary.inverse.font.color + ";\n  }\n  :host(.soma-button.secondary.inverse:hover) {\n    background-color: " + secondary.inverse.hover.shape.backgroundColor + ";\n    border-color: " + secondary.inverse.hover.shape.borderColor + ";\n  }\n  :host(.soma-button.secondary.inverse:active) {\n    background-color: " + secondary.inverse.active.shape.backgroundColor + ";\n    border-color: " + secondary.inverse.active.shape.borderColor + ";\n  }\n  :host(.soma-button.secondary.inverse.disabled) {\n    background-color: " + secondary.inverse.disabled.shape.backgroundColor + ";\n    border-color: " + secondary.inverse.disabled.shape.borderColor + ";\n    color: " + secondary.inverse.disabled.font.color + ";\n  }\n";
            };
            var ButtonGhost = function (_a) {
                var ghost = _a.ghost;
                return "\n  :host(.soma-button.ghost) {\n    background-color: " + ghost.shape.backgroundColor + ";\n    border-style: " + ghost.shape.borderStyle + ";\n    border-width: " + ghost.shape.borderWidth + ";\n    border-color: " + ghost.shape.borderColor + ";\n    color: " + ghost.font.color + ";\n  }\n\n  :host(.soma-button.ghost:hover) {\n    background-color: " + ghost.hover.shape.backgroundColor + ";\n    border-color: " + ghost.hover.shape.borderColor + ";\n    color: " + ghost.hover.font.color + ";\n  }\n  :host(.soma-button.ghost:active) {\n    background-color: " + ghost.active.shape.backgroundColor + ";\n    border-color: " + ghost.active.shape.borderColor + ";\n    color: " + ghost.active.font.color + ";\n  }\n  :host(.soma-button.ghost.disabled) {\n    background-color: " + ghost.disabled.shape.backgroundColor + ";\n    border-color: " + ghost.disabled.shape.borderColor + ";\n    color: " + ghost.disabled.font.color + ";\n  }\n\n  :host(.soma-button.ghost.inverse) {\n    background-color: " + ghost.inverse.shape.backgroundColor + ";\n    border-color: " + ghost.inverse.shape.borderColor + ";\n    color: " + ghost.inverse.font.color + ";\n  }\n  :host(.soma-button.ghost.inverse:hover) {\n    background-color: " + ghost.inverse.hover.shape.backgroundColor + ";\n    border-color: " + ghost.inverse.hover.shape.borderColor + ";\n  }\n  :host(.soma-button.ghost.inverse:active) {\n    background-color: " + ghost.inverse.active.shape.backgroundColor + ";\n    border-color: " + ghost.inverse.active.shape.borderColor + ";\n  }\n  :host(.soma-button.ghost.inverse.disabled) {\n    background-color: " + ghost.inverse.disabled.shape.backgroundColor + ";\n    border-color: " + ghost.inverse.disabled.shape.borderColor + ";\n    color: " + ghost.inverse.disabled.font.color + ";\n  }\n";
            };
            var SomaButtonStyle = css(__makeTemplateObject(["\n  ", "\n"], ["\n  ",
                "\n"]), function (_a) {
                var button = _a.theme.components.button;
                return "\n    " + Button(button) + "\n    " + ButtonSecondary(button) + "\n    " + ButtonGhost(button) + "\n  ";
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
            var SomaButton = exports('soma_button', /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    /**
                      [*] Altere o tamanho com os valores de token
                    */
                    this.size = 'md';
                    /**
                      [*] Altere o tipo para mudar o estilo
                    */
                    this.variant = 'primary';
                    /**
                      Desabilita o componente
                    */
                    this.disabled = false;
                    /**
                      O tipo do botÃ£o
                    */
                    this.type = 'button';
                    /**
                      Muda o tema para inverse
                    */
                    this.inverse = false;
                    this.onFocus = function () {
                        _this.somaFocus.emit();
                    };
                    this.onBlur = function () {
                        _this.somaBlur.emit();
                    };
                    this.handleClick = function (event) {
                        if (!_this.disabled) {
                            _this.somaClick.emit(event);
                        }
                    };
                    this.getIconSize = function (size) { return size === 'lg' ? 'md' : size; };
                    this.getIconColor = function (variant, inverse, disabled, event) {
                        var colorsByVariant = {
                            "ghost": 'theme.components.button.ghost.icon.shape.fill',
                            "secondary": 'theme.components.button.secondary.icon.shape.fill',
                            "default": 'theme.components.button.base.icon.shape.fill'
                        };
                        if (disabled && !inverse)
                            return "theme.color.neutral.dark.1";
                        else if (disabled && inverse)
                            return variant === 'primary' ? "theme.color.neutral.dark.1" : "theme.color.neutral.dark.2";
                        else if (!disabled && inverse)
                            return variant === 'primary' ? "theme.components.button.base.icon.shape.fill" : "theme.color.neutral.light.pure";
                        else {
                            if (event === 'mousedown')
                                return variant === 'secondary'
                                    ? "theme.components.button.secondary.active.icon.shape.fill"
                                    : colorsByVariant[variant] || colorsByVariant['default'];
                            else
                                return colorsByVariant[variant] || colorsByVariant['default'];
                        }
                    };
                    /**
                      State de define a cor do icone.
                    */
                    this.iconColor = this.getIconColor(this.variant, this.inverse, this.disabled, 'init');
                    this.somaFocus = createEvent(this, "somaFocus", 7);
                    this.somaBlur = createEvent(this, "somaBlur", 7);
                    this.somaClick = createEvent(this, "somaClick", 7);
                }
                /**
                  Quando o botÃ£o for pressionado, deve-se mudar a cor do icone.
                */
                class_1.prototype.changeIconColorOnMousedown = function () { return this.iconColor = this.getIconColor(this.variant, this.inverse, this.disabled, 'mousedown'); };
                /**
                  ApÃ³s o botÃ£o ser pressionado, deve-se mudar a cor do icone.
                */
                class_1.prototype.changeIconColorOnMouseup = function () { return this.iconColor = this.getIconColor(this.variant, this.inverse, this.disabled, 'mouseup'); };
                class_1.prototype.inverseChange = function () {
                    this.iconColor = this.getIconColor(this.variant, this.inverse, this.disabled, 'init');
                };
                class_1.prototype.render = function () {
                    var _a = this, inverse = _a.inverse, variant = _a.variant, size = _a.size, disabled = _a.disabled, icon = _a.icon, type = _a.type, ariaLabel = _a.ariaLabel;
                    var className = Utils.Classes.combine({
                        root: 'soma-button',
                        conditions: {
                            variant: variant,
                            size: size,
                            disabled: disabled,
                            inverse: inverse
                        },
                    });
                    return (h(Host, { role: "button", class: className }, h("button", { type: type, disabled: disabled, onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.handleClick, tabIndex: 0, "aria-label": ariaLabel }), icon ?
                        h("soma-icon", { icon: icon, size: this.getIconSize(size), color: this.iconColor, "aria-hidden": "true" }) : null, h("slot", { "aria-hidden": "true" })));
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
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "inverse": ["inverseChange"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
            __decorate([
                Decorators.Required()
            ], SomaButton.prototype, "size", void 0);
            __decorate([
                Decorators.Required()
            ], SomaButton.prototype, "variant", void 0);
            __decorate([
                Decorators.Required()
            ], SomaButton.prototype, "ariaLabel", void 0);
            __decorate([
                Decorators.ContextObservable()
            ], SomaButton.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaButtonStyle
                })
            ], SomaButton.prototype, "render", null);
        }
    };
});
