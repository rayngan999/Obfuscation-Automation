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
            var __rest = (undefined && undefined.__rest) || function (s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            };
            var GridRow = function (props, tokens, grid) { return "\n  :host(.soma-grid-row) {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    margin-right: 0px;\n    margin-left: 0px;\n    align-items: stretch;\n  }\n\n  :host(.soma-grid-row) ::slotted(.soma-grid-col) {\n    padding: calc(" + tokens.grid.gutter + "px / 2);\n  }\n\n  @media only screen and (" + grid.breakpoints.xl.min + ") {\n    :host(.soma-grid-row) ::slotted(.soma-grid-col) {\n      padding: calc(24px / 2);\n    }\n  }\n  \n  :host(.soma-grid-row.spacing-" + props.spacing + ") {\n    margin-bottom: " + (props.spacing ? tokens.spacing.inline[props.spacing] : "0") + ";\n  }\n\n  :host(.soma-grid-row.gutter-" + props.gutter + ") ::slotted(.soma-grid-col) {\n    padding: " + (props.gutter ? "calc(" + tokens.spacing.inline[props.gutter] + " / 2)" : "0") + "\n      " + (props.gutter ? "calc(" + tokens.spacing.inline[props.gutter] + " / 2)" : "0") + ";\n  }\n\n  :host(.soma-grid-row.no-gutter) ::slotted(.soma-grid-col) {\n    padding: 0;\n  }\n\n  :host(.soma-grid-row.reverse) {\n    flex-direction: row-reverse;\n  }\n"; };
            var SomaGridRowStyle = css(__makeTemplateObject(["\n  ", "\n"], ["\n  ",
                "\n"]), function (_a) {
                var _b = _a.theme, grid = _b.components.grid, tokens = __rest(_b, ["components"]), props = __rest(_a, ["theme"]);
                return GridRow(props, tokens, grid);
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
            var SomaGridRow = exports('soma_grid_row', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /** Define a ordenaÃ§Ã£o reversa das colunas da respectiva linha */
                    this.reverse = false;
                }
                class_1.prototype.render = function () {
                    var _c = this, spacing = _c.spacing, gutter = _c.gutter, reverse = _c.reverse;
                    var className = Utils.Classes.combine({
                        root: "soma-grid-row",
                        conditions: {
                            reverse: reverse,
                            spacing: spacing ? "spacing-" + spacing : "",
                            gutter: gutter && gutter !== "none" ? "gutter-" + gutter : "",
                            "no-gutter": gutter && gutter === "none" ? "no-gutter" : "",
                        },
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
                    css: SomaGridRowStyle,
                })
            ], SomaGridRow.prototype, "render", null);
        }
    };
});
