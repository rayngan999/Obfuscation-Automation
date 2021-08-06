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
            var Container = function (grid) { return "\n  :host(.soma-container) {\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    box-sizing: border-box;\n  }\n\n  @media only screen and (" + grid.breakpoints.xs.min + ") and (" + grid.breakpoints.xs.max + ") {\n    :host(.soma-container) {\n      max-width: " + grid.container.xsm.shape.maxWidth + ";\n      margin: " + grid.container.xsm.shape.margin.top + "\n        " + grid.container.xsm.shape.margin.right + "\n        " + grid.container.xsm.shape.margin.bottom + "\n        " + grid.container.xsm.shape.margin.left + ";\n    }\n  }\n\n  @media only screen and (" + grid.breakpoints.sm.min + ") and (" + grid.breakpoints.sm.max + ") {\n    :host(.soma-container) {\n      max-width: " + grid.container.sm.shape.maxWidth + ";\n      margin: " + grid.container.sm.shape.margin.top + "\n        " + grid.container.sm.shape.margin.right + "\n        " + grid.container.sm.shape.margin.bottom + "\n        " + grid.container.sm.shape.margin.left + ";\n    }\n  }\n\n  @media only screen and (" + grid.breakpoints.md.min + ") and (" + grid.breakpoints.md.max + ") {\n    :host(.soma-container) {\n      max-width: " + grid.container.md.shape.maxWidth + ";\n      margin: " + grid.container.md.shape.margin.top + "\n        " + grid.container.md.shape.margin.right + "\n        " + grid.container.md.shape.margin.bottom + "\n        " + grid.container.md.shape.margin.left + ";\n    }\n  }\n\n  @media only screen and (" + grid.breakpoints.lg.min + ") and (" + grid.breakpoints.lg.max + ") {\n    :host(.soma-container) {\n      max-width: " + grid.container.lg.shape.maxWidth + ";\n      margin: " + grid.container.lg.shape.margin.top + "\n        " + grid.container.lg.shape.margin.right + "\n        " + grid.container.lg.shape.margin.bottom + "\n        " + grid.container.lg.shape.margin.left + ";\n    }\n  }\n\n  @media only screen and (" + grid.breakpoints.xl.min + ") {\n    :host(.soma-container) {\n      max-width: " + grid.container.xl.shape.maxWidth + ";\n      margin: " + grid.container.xl.shape.margin.top + "\n        " + grid.container.xl.shape.margin.right + "\n        " + grid.container.xl.shape.margin.bottom + "\n        " + grid.container.xl.shape.margin.left + ";\n    }\n  }\n\n  :host(.soma-container.full) {\n    max-width: 100%;\n    width: 100%;\n    margin: 0;\n  }\n"; };
            var SomaContainerStyle = css(__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"]), function (_a) {
                var grid = _a.theme.components.grid;
                return Container(grid);
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
            var SomaContainer = exports('soma_container', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /** Define o grid container com 100% de largura na tela */
                    this.full = false;
                }
                class_1.prototype.render = function () {
                    var full = this.full;
                    var className = Utils.Classes.combine({
                        root: "soma-container",
                        conditions: { full: full },
                    });
                    return (h(Host, { class: className }, h("slot", null)));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                return class_1;
            }()));
            __decorate([
                Adapt({
                    css: SomaContainerStyle,
                })
            ], SomaContainer.prototype, "render", null);
        }
    };
});
