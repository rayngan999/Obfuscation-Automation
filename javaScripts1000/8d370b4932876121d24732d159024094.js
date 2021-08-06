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
            var GridCol = function (tokens, props, grid) {
                var calc = function (columns, breakpoint) {
                    var colsQuantity = columns <= tokens.grid[breakpoint].columns ? columns : tokens.grid[breakpoint].columns;
                    return colsQuantity / parseInt(tokens.grid[breakpoint].columns) * 100;
                };
                var columns = {
                    xs: {
                        size: props.xs ? calc(props.xs, 'xs') + "%" : 0,
                        offset: props.xsOffset ? calc(props.xsOffset, 'xs') + "%" : 0,
                    },
                    sm: {
                        size: props.sm ? calc(props.sm, 'sm') + "%" : 0,
                        offset: props.smOffset ? calc(props.smOffset, 'sm') + "%" : 0,
                    },
                    md: {
                        size: props.md ? calc(props.md, 'md') + "%" : 0,
                        offset: props.mdOffset ? calc(props.mdOffset, 'md') + "%" : 0,
                    },
                    lg: {
                        size: props.lg ? calc(props.lg, 'lg') + "%" : 0,
                        offset: props.lgOffset ? calc(props.lgOffset, 'lg') + "%" : 0,
                    },
                    xl: {
                        size: props.xl ? calc(props.xl, 'xl') + "%" : 0,
                        offset: props.xlOffset ? calc(props.xlOffset, 'xl') + "%" : 0,
                    }
                };
                return "\n    :host(.soma-grid-col) {\n      position: relative;\n      display: flex;\n      flex-basis: 0;\n      flex-grow: 1;\n      min-width: 0;\n      max-width: 100%;\n      align-items: stretch;\n      justify-content: stretch;\n      min-height: 1px;\n      padding: 0;\n      margin: 0;\n      box-sizing: border-box;\n    }\n\n    @media only screen and (" + grid.breakpoints.xs.min + ") and (" + grid.breakpoints.xs.max + ") {\n      :host(.soma-grid-col.xs-" + props.xs + ") {\n        flex: 0 0 " + columns.xs.size + ";\n        -ms-flex: 0 0 " + columns.xs.size + ";\n        max-width: " + columns.xs.size + ";\n      }\n      :host(.soma-grid-col.xs-offset-" + props.xsOffset + ") {\n        margin-left: " + columns.xs.offset + ";\n      }\n      :host(.soma-grid-col.xs-hide) {\n        display: none;\n      }\n    }\n\n    @media only screen and (" + grid.breakpoints.sm.min + ") and (" + grid.breakpoints.sm.max + ") {\n      :host(.soma-grid-col.sm-" + props.sm + ") {\n        flex: 0 0 " + columns.sm.size + ";\n        -ms-flex: 0 0 " + columns.sm.size + ";\n        max-width: " + columns.sm.size + ";\n      }\n      :host(.soma-grid-col.sm-offset-" + props.smOffset + ") {\n        margin-left: " + columns.sm.offset + ";\n      }\n      :host(.soma-grid-col.sm-hide) {\n        display: none;\n      }\n    }\n\n    @media only screen and (" + grid.breakpoints.md.min + ") and (" + grid.breakpoints.md.max + ") {\n      :host(.soma-grid-col.md-" + props.md + ") {\n        flex: 0 0 " + columns.md.size + ";\n        -ms-flex: 0 0 " + columns.md.size + ";\n        max-width: " + columns.md.size + ";\n      }\n      :host(.soma-grid-col.md-offset-" + props.mdOffset + ") {\n        margin-left: " + columns.md.offset + ";\n      }\n      :host(.soma-grid-col.md-hide) {\n        display: none;\n      }\n    }\n  \n    @media only screen and (" + grid.breakpoints.lg.min + ") and (" + grid.breakpoints.lg.max + ") {\n      :host(.soma-grid-col.lg-" + props.lg + ") {\n        flex: 0 0 " + columns.lg.size + ";\n        -ms-flex: 0 0 " + columns.lg.size + ";\n        max-width: " + columns.lg.size + ";\n      }\n      :host(.soma-grid-col.lg-offset-" + props.lgOffset + ") {\n        margin-left: " + columns.lg.offset + ";\n      }\n      :host(.soma-grid-col.lg-hide) {\n        display: none;\n      }\n    }\n  \n    @media only screen and (" + grid.breakpoints.xl.min + ") {\n      :host(.soma-grid-col.xl-" + props.xl + ") {\n        flex: 0 0 " + columns.xl.size + ";\n        -ms-flex: 0 0 " + columns.xl.size + ";\n        max-width: " + columns.xl.size + ";\n      }\n      :host(.soma-grid-col.xl-offset-" + props.xlOffset + ") {\n        margin-left: " + columns.xl.offset + ";\n      }\n      :host(.soma-grid-col.xl-hide) {\n        display: none;\n      }\n    }\n  ";
            };
            var SomaGridColStyle = css(__makeTemplateObject(["", ""], ["",
                ""]), function (_a) {
                var _b = _a.theme, grid = _b.components.grid, tokens = __rest(_b, ["components"]), props = __rest(_a, ["theme"]);
                return GridCol(tokens, props, grid);
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
            var SomaGridCol = exports('soma_grid_col', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /** Remove o espaÃ§amento padrÃ£o da coluna */
                    this.noGutter = false;
                    /** Ocultar coluna em um ou mais breakpoints */
                    this.hide = "";
                }
                class_1.prototype.render = function () {
                    var _c = this, xs = _c.xs, sm = _c.sm, md = _c.md, lg = _c.lg, xl = _c.xl, hide = _c.hide, noGutter = _c.noGutter, xsOffset = _c.xsOffset, smOffset = _c.smOffset, mdOffset = _c.mdOffset, lgOffset = _c.lgOffset, xlOffset = _c.xlOffset;
                    var hideOn = hide === null || hide === void 0 ? void 0 : hide.split(",").map(function (bp) { return bp.trim() + "-hide"; });
                    var className = Utils.Classes.combine({
                        root: "soma-grid-col",
                        conditions: {
                            xs: xs && "xs-" + xs,
                            sm: sm && "sm-" + sm,
                            md: md && "md-" + md,
                            lg: lg && "lg-" + lg,
                            xl: xl && "xl-" + xl,
                            "xs-offset": xsOffset && "xs-offset-" + xsOffset,
                            "sm-offset": smOffset && "sm-offset-" + smOffset,
                            "md-offset": mdOffset && "md-offset-" + mdOffset,
                            "lg-offset": lgOffset && "lg-offset-" + lgOffset,
                            "xl-offset": xlOffset && "xl-offset-" + xlOffset,
                            "xs-hide": hideOn === null || hideOn === void 0 ? void 0 : hideOn.includes("xs-hide"),
                            "sm-hide": hideOn === null || hideOn === void 0 ? void 0 : hideOn.includes("sm-hide"),
                            "md-hide": hideOn === null || hideOn === void 0 ? void 0 : hideOn.includes("md-hide"),
                            "lg-hide": hideOn === null || hideOn === void 0 ? void 0 : hideOn.includes("lg-hide"),
                            "xl-hide": hideOn === null || hideOn === void 0 ? void 0 : hideOn.includes("xl-hide"),
                        },
                    });
                    return (h(Host, { class: className, style: noGutter ? { padding: "0px" } : {} }, h("slot", null)));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.connectedCallback = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                return class_1;
            }()));
            __decorate([
                Adapt({
                    css: SomaGridColStyle,
                })
            ], SomaGridCol.prototype, "render", null);
        }
    };
});
