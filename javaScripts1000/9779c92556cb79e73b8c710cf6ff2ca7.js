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
            var SomaTypographyStyle = css(__makeTemplateObject(["\n  :host(.soma-typography) {\n    display: block;\n  }\n"], ["\n  :host(.soma-typography) {\n    display: block;\n  }\n"]));
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
            var SomaTypography = exports('soma_typography', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                      Muda o tema para inverse
                    */
                    this.inverse = false;
                    this.renderTypographyElement = function (variant, props) {
                        switch (variant) {
                            case 'heading': return h("soma-heading", Object.assign({}, props), h("slot", null));
                            case 'subtitle': return h("soma-subtitle", Object.assign({}, props), h("slot", null));
                            case 'description': return h("soma-description", Object.assign({}, props), h("slot", null));
                            case 'caption': return h("soma-caption", Object.assign({}, props), h("slot", null));
                            default:
                                return h("soma-paragraph", Object.assign({}, props), h("slot", null));
                        }
                    };
                }
                class_1.prototype.render = function () {
                    var _a = this, variant = _a.variant, modifier = _a.modifier, inverse = _a.inverse;
                    var className = Utils.Classes.combine({
                        root: 'soma-typography',
                        conditions: { inverse: inverse }
                    });
                    return (h(Host, { class: className }, this.renderTypographyElement(variant, {
                        variant: modifier,
                        inverse: inverse,
                    })));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                return class_1;
            }()));
            __decorate([
                Decorators.ContextObservable()
            ], SomaTypography.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaTypographyStyle
                })
            ], SomaTypography.prototype, "render", null);
        }
    };
});
