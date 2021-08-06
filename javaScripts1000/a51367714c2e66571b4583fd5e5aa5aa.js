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
            var SomaHeadingStyle = css(__makeTemplateObject(["\n  @supports (margin-block-start: 0) {\n    :host(.soma-heading) h1,\n    :host(.soma-heading) h2,\n    :host(.soma-heading) h3,\n    :host(.soma-heading) h4,\n    :host(.soma-heading) h5,\n    :host(.soma-heading) h6 {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      margin-inline-start: 0;\n      margin-inline-end: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  @supports not (margin-block-start: 0) {\n    :host(.soma-heading) h1,\n    :host(.soma-heading) h2,\n    :host(.soma-heading) h3,\n    :host(.soma-heading) h4,\n    :host(.soma-heading) h5,\n    :host(.soma-heading) h6 {\n      margin: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    :host(.soma-heading) h1,\n    :host(.soma-heading) h2,\n    :host(.soma-heading) h3,\n    :host(.soma-heading) h4,\n    :host(.soma-heading) h5,\n    :host(.soma-heading) h6 {\n      margin: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  :host(.soma-heading) {\n    display: block;\n    color: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    font-size: ", ";\n  }\n  :host(.soma-heading.inverse) {\n    color: ", ";\n  }\n  :host(.soma-heading.heading-1) {}\n  :host(.soma-heading.heading-2) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-3) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-4) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-5) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-6) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-7) {\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    color: ", ";\n  }\n  @media only screen and (max-width: 768px) {\n    :host(.soma-heading) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-1) {}\n      :host(.soma-heading.heading-2) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-3) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-4) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-5) {\n      font-size: ", ";\n    }\n  }\n  @media only screen and (max-width: 360px) {\n    :host(.soma-heading) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-1) {}\n    :host(.soma-heading.heading-2) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-3) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-4) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-5) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-6) {\n      font-size: ", ";\n    }\n  }\n"], ["\n  @supports (margin-block-start: 0) {\n    :host(.soma-heading) h1,\n    :host(.soma-heading) h2,\n    :host(.soma-heading) h3,\n    :host(.soma-heading) h4,\n    :host(.soma-heading) h5,\n    :host(.soma-heading) h6 {\n      margin-block-start: 0;\n      margin-block-end: 0;\n      margin-inline-start: 0;\n      margin-inline-end: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  @supports not (margin-block-start: 0) {\n    :host(.soma-heading) h1,\n    :host(.soma-heading) h2,\n    :host(.soma-heading) h3,\n    :host(.soma-heading) h4,\n    :host(.soma-heading) h5,\n    :host(.soma-heading) h6 {\n      margin: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n    :host(.soma-heading) h1,\n    :host(.soma-heading) h2,\n    :host(.soma-heading) h3,\n    :host(.soma-heading) h4,\n    :host(.soma-heading) h5,\n    :host(.soma-heading) h6 {\n      margin: 0;\n      font-family: ", ";\n      font-size: inherit;\n      font-weight: inherit;\n      line-height: inherit;\n    }\n  }\n  :host(.soma-heading) {\n    display: block;\n    color: ", ";\n    font-weight: ", ";\n    line-height: ", ";\n    font-size: ", ";\n  }\n  :host(.soma-heading.inverse) {\n    color: ", ";\n  }\n  :host(.soma-heading.heading-1) {}\n  :host(.soma-heading.heading-2) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-3) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-4) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-5) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-6) {\n    font-size: ", ";\n  }\n  :host(.soma-heading.heading-7) {\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    color: ", ";\n  }\n  @media only screen and (max-width: 768px) {\n    :host(.soma-heading) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-1) {}\n      :host(.soma-heading.heading-2) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-3) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-4) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-5) {\n      font-size: ", ";\n    }\n  }\n  @media only screen and (max-width: 360px) {\n    :host(.soma-heading) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-1) {}\n    :host(.soma-heading.heading-2) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-3) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-4) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-5) {\n      font-size: ", ";\n    }\n    :host(.soma-heading.heading-6) {\n      font-size: ", ";\n    }\n  }\n"]), function (props) { return props.theme.font.family.highlight; }, function (props) { return props.theme.font.family.highlight; }, function (props) { return props.theme.font.family.highlight; }, function (props) { return props.theme.color.neutral.dark.pure; }, function (props) { return props.theme.font.weight.regular; }, function (props) { return props.theme.line.height.rule['2']; }, function (props) { return props.theme.font.size.ul; }, function (props) { return props.theme.color.neutral.light.pure; }, function (props) { return props.theme.font.size.xxl; }, function (props) { return props.theme.font.size.xl; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.size.sm; }, function (props) { return props.theme.font.size.xs; }, function (props) { return props.theme.font.family.base; }, function (props) { return props.theme.font.weight.medium; }, function (props) { return props.theme.font.size.xxs; }, function (props) { return props.theme.line.height.rule["3"]; }, function (props) { return props.theme.color.neutral.dark.pure; }, function (props) { return props.theme.font.size.xxxl; }, function (props) { return props.theme.font.size.xxl; }, function (props) { return props.theme.font.size.lg; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.size.sm; }, function (props) { return props.theme.font.size.xl; }, function (props) { return props.theme.font.size.lg; }, function (props) { return props.theme.font.size.md; }, function (props) { return props.theme.font.size.sm; }, function (props) { return props.theme.font.size.xs; }, function (props) { return props.theme.font.size.xs; });
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
            var SomaHeading = exports('soma_heading', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                      Muda o tema para inverse
                    */
                    this.inverse = false;
                    this.renderHElement = function (variant) {
                        switch (variant) {
                            case 'heading-2': return h("h2", null, h("slot", null));
                            case 'heading-3': return h("h3", null, h("slot", null));
                            case 'heading-4': return h("h4", null, h("slot", null));
                            case 'heading-5': return h("h5", null, h("slot", null));
                            case 'heading-6': return h("h6", null, h("slot", null));
                            case 'heading-7': return h("h6", { class: "heading-7" }, h("slot", null));
                            case 'heading-1':
                            default:
                                return h("h1", null, h("slot", null));
                        }
                    };
                }
                class_1.prototype.render = function () {
                    var _a = this, variant = _a.variant, inverse = _a.inverse;
                    var className = Utils.Classes.combine({
                        root: 'soma-heading',
                        conditions: {
                            variant: variant,
                            inverse: inverse,
                        }
                    });
                    return (h(Host, { class: className }, this.renderHElement(this.variant)));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                return class_1;
            }()));
            __decorate([
                Decorators.ContextObservable()
            ], SomaHeading.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaHeadingStyle
                })
            ], SomaHeading.prototype, "render", null);
        }
    };
});
