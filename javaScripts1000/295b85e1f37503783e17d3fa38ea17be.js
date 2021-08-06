var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
System.register(['./index-1307bc24.system.js', './index-993fa554.system.js', './index-1458f63a.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, Utils, Decorators, css, Adapt;
    return {
        setters: [function (module) {
                registerInstance = module.r;
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
            var SomaDescriptionStyle = css(__makeTemplateObject(["\n  @supports (margin-block-start: 0) {\n    :host(.soma-description) p {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      margin-inline-start: 0;\n      margin-inline-end: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  @supports not (margin-block-start: 0) {\n    :host(.soma-description) p {\n      margin: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    :host(.soma-description) p {\n      margin: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  :host(.soma-description) {\n    display: block;\n    color: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    font-size: ", ";\n  }\n  :host(.soma-description.inverse) {\n    color: ", ";\n  }\n"], ["\n  @supports (margin-block-start: 0) {\n    :host(.soma-description) p {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      margin-inline-start: 0;\n      margin-inline-end: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  @supports not (margin-block-start: 0) {\n    :host(.soma-description) p {\n      margin: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    :host(.soma-description) p {\n      margin: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  :host(.soma-description) {\n    display: block;\n    color: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    font-size: ", ";\n  }\n  :host(.soma-description.inverse) {\n    color: ", ";\n  }\n"]), function (props) { return props.theme.font.family.base; }, function (props) { return props.theme.font.family.base; }, function (props) { return props.theme.font.family.base; }, function (props) { return props.theme.color.neutral.dark['1']; }, function (props) { return props.theme.font.weight.regular; }, function (props) { return props.theme.line.height.rule['3']; }, function (props) { return props.theme.font.size.xxxs; }, function (props) { return props.theme.color.neutral.light['2']; });
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
            var SomaDescription = exports('soma_description', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                      Muda o tema para inverse
                    */
                    this.inverse = false;
                }
                class_1.prototype.render = function () {
                    var inverse = this.inverse;
                    var className = Utils.Classes.combine({
                        root: 'soma-description',
                        conditions: { inverse: inverse }
                    });
                    return (h(Host, { class: className }, h("p", null, h("slot", null))));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                return class_1;
            }()));
            __decorate([
                Decorators.ContextObservable()
            ], SomaDescription.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaDescriptionStyle
                })
            ], SomaDescription.prototype, "render", null);
        }
    };
});
