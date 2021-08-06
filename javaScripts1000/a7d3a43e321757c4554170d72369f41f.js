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
            var SomaLinkStyle = css(__makeTemplateObject(["\n  :host(.soma-link) {\n    display: inline-block;\n    text-decoration: underline;\n    color: ", ";\n    cursor: pointer;\n\n    a {\n      display: inline-block;\n      color: inherit;\n      width: fit-content;\n      text-decoration: underline;\n      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n      -webkit-focus-ring-color: rgba(255, 255, 255, 0);\n      padding: 0;\n      position: relative;\n      color: ", ";\n    }\n  }\n\n  :host(.soma-link.inverse) {\n    a {\n      color: ", ";\n    }\n  }\n"], ["\n  :host(.soma-link) {\n    display: inline-block;\n    text-decoration: underline;\n    color: ", ";\n    cursor: pointer;\n\n    a {\n      display: inline-block;\n      color: inherit;\n      width: fit-content;\n      text-decoration: underline;\n      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n      -webkit-focus-ring-color: rgba(255, 255, 255, 0);\n      padding: 0;\n      position: relative;\n      color: ", ";\n    }\n  }\n\n  :host(.soma-link.inverse) {\n    a {\n      color: ", ";\n    }\n  }\n"]), function (props) { return props.theme.color.neutral.dark.pure; }, function (props) { return props.theme.color.neutral.dark.pure; }, function (props) { return props.theme.color.neutral.light.pure; });
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
            var SomaLink = exports('soma_link', /** @class */ (function () {
                function class_1(hostRef) {
                    var _this = this;
                    registerInstance(this, hostRef);
                    /**
                      Use para alterar o tipo/estilo do link
                    */
                    this.variant = 'paragraph';
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
                        _this.somaClick.emit(event);
                    };
                    this.somaFocus = createEvent(this, "somaFocus", 7);
                    this.somaBlur = createEvent(this, "somaBlur", 7);
                    this.somaClick = createEvent(this, "somaClick", 7);
                }
                class_1.prototype.render = function () {
                    var _a = this, href = _a.href, target = _a.target, ariaLabel = _a.ariaLabel, inverse = _a.inverse, variant = _a.variant;
                    var className = Utils.Classes.combine({
                        root: 'soma-link',
                        conditions: { inverse: inverse }
                    });
                    return (h(Host, { class: className }, h("soma-typography", { variant: variant }, h("a", { href: href, target: target, "aria-label": ariaLabel, tabIndex: 0, onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.handleClick }, h("slot", null)))));
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
                Decorators.Required()
            ], SomaLink.prototype, "ariaLabel", void 0);
            __decorate([
                Decorators.ContextObservable()
            ], SomaLink.prototype, "inverse", void 0);
            __decorate([
                Adapt({
                    css: SomaLinkStyle
                })
            ], SomaLink.prototype, "render", null);
        }
    };
});
