var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
System.register(['./index-1307bc24.system.js', './index-993fa554.system.js', './index-1458f63a.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, Utils, css, Adapt;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
            }, function (module) {
                Utils = module.U;
            }, function (module) {
                css = module.c;
                Adapt = module.A;
            }],
        execute: function () {
            var SomaButtonStyle = css(__makeTemplateObject(["\n  :host(.soma-badge) {\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 5px 4px 4px 4px;\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: ", ";\n    text-align: center;\n  }\n\n  :host(.soma-badge.default) {\n    min-width: 24px;\n    min-height: 24px;\n    border-radius: ", ";\n    background-color: ", ";\n  }\n\n  :host(.soma-badge.notification) {\n    border-radius: ", ";\n    background-color: ", ";\n  }\n\n  :host(.soma-badge.lg) {\n    min-width: 24px;\n    min-height: 24px;\n  }\n\n  :host(.soma-badge.md) {\n    min-height: 16px;\n    height: 16px;\n    padding-top: 2px;\n    min-width: 16px;\n    font-size: ", ";\n  }\n\n  :host(.soma-badge.sm) {\n    font-size: 0;\n    height: 8px;\n    width: 8px;\n    padding: 0px;\n  }\n\n  :host(.soma-badge.risk) {\n    min-width: 24px;\n    min-height: 24px;\n    background-color: ", ";\n    border-radius: ", ";\n  }\n\n  :host(.soma-badge.risk.medium) {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  :host(.soma-badge.risk.high) {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  :host(.soma-badge.risk.empty) {\n    background-color: ", ";\n  }\n"], ["\n  :host(.soma-badge) {\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 5px 4px 4px 4px;\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    color: ", ";\n    line-height: ", ";\n    text-align: center;\n  }\n\n  :host(.soma-badge.default) {\n    min-width: 24px;\n    min-height: 24px;\n    border-radius: ", ";\n    background-color: ", ";\n  }\n\n  :host(.soma-badge.notification) {\n    border-radius: ", ";\n    background-color: ", ";\n  }\n\n  :host(.soma-badge.lg) {\n    min-width: 24px;\n    min-height: 24px;\n  }\n\n  :host(.soma-badge.md) {\n    min-height: 16px;\n    height: 16px;\n    padding-top: 2px;\n    min-width: 16px;\n    font-size: ", ";\n  }\n\n  :host(.soma-badge.sm) {\n    font-size: 0;\n    height: 8px;\n    width: 8px;\n    padding: 0px;\n  }\n\n  :host(.soma-badge.risk) {\n    min-width: 24px;\n    min-height: 24px;\n    background-color: ", ";\n    border-radius: ", ";\n  }\n\n  :host(.soma-badge.risk.medium) {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  :host(.soma-badge.risk.high) {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  :host(.soma-badge.risk.empty) {\n    background-color: ", ";\n  }\n"]), function (props) { return props.theme.font.family.base; }, function (props) { return props.theme.font.weight.medium; }, function (props) { return props.theme.font.size.xxxs; }, function (props) { return props.theme.color.neutral.dark.pure; }, function (props) { return props.theme.line.height.rule['1']; }, function (props) { return props.theme.border.radius.small; }, function (props) { return props.theme.color.brand['2']; }, function (props) { return props.theme.border.radius.pill; }, function (props) { return props.theme.color.brand['2']; }, function (props) { return props.theme.font.size.us; }, function (props) { return props.theme.color.risk.low; }, function (props) { return props.theme.border.radius.small; }, function (props) { return props.theme.color.risk.medium; }, function (props) { return props.theme.color.neutral.light.pure; }, function (props) { return props.theme.color.risk.high; }, function (props) { return props.theme.color.neutral.light.pure; }, function (props) { return props.theme.color.neutral.light['3']; });
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
            var SomaBadge = exports('soma_badge', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                      Tipo do badge
                    */
                    this.variant = 'default';
                    /**
                      Modifica a cor do badge de acordo com o grau de risco,
                      Ã© utilizado quando a variant=risk
                    */
                    this.risk = 'low';
                    /**
                      Tamanho do badge,
                      Ã© utilizado quando a variant=notification
                    */
                    this.size = 'sm';
                    this.customizeValue = function (variant, value) { return variant === 'notification' ? value.substr(0, 4) : value; };
                }
                class_1.prototype.render = function () {
                    var _a = this, risk = _a.risk, variant = _a.variant, size = _a.size, value = _a.value;
                    var className = Utils.Classes.combine({
                        root: 'soma-badge',
                        conditions: {
                            risk: variant === 'risk' ? risk : '',
                            size: variant === 'notification' ? size : 'lg',
                            variant: variant,
                        },
                    });
                    return (h(Host, { class: className }, this.customizeValue(variant, value)));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                return class_1;
            }()));
            __decorate([
                Adapt({
                    css: SomaButtonStyle
                })
            ], SomaBadge.prototype, "render", null);
        }
    };
});
