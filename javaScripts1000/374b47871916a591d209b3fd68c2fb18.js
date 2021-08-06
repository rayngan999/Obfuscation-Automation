var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
System.register(['./index-1307bc24.system.js', './index-993fa554.system.js', './index-1458f63a.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement, Utils, css, Adapt;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.g;
            }, function (module) {
                Utils = module.U;
            }, function (module) {
                css = module.c;
                Adapt = module.A;
            }],
        execute: function () {
            var Row = function (table) { return "\n  :host(.soma-table-row) {\n    display: table-row;\n    border-collapse: collapse;\n    background: " + table.row.shape.backgroundColor + ";\n    border-bottom: " + table.row.shape.borderWidth + "\n      " + table.row.shape.borderStyle + "\n      " + table.row.shape.borderColor + ";\n  }\n\n  :host(.soma-table-row:hover) {\n    background: " + table.row.hover.shape.backgroundColor + ";\n  }\n\n  :host(.soma-table-row.header) {\n    background: " + table.row.header.shape.backgroundColor + ";\n    border-bottom: " + table.row.header.shape.borderWidth + "\n      " + table.row.header.shape.borderStyle + "\n      " + table.row.header.shape.borderColor + ";\n  }\n\n  :host(.soma-table-row.header:hover) {\n    background: " + table.row.header.shape.backgroundColor + ";\n  }\n\n  :host(.soma-table-row.subtitle) {\n    background: " + table.row.subtitle.shape.backgroundColor + ";\n    border-bottom: " + table.row.subtitle.shape.borderWidth + "\n      " + table.row.subtitle.shape.borderStyle + "\n      " + table.row.subtitle.shape.borderColor + ";\n  }\n\n  :host(.soma-table-row.subtitle:hover) {\n    background: " + table.row.subtitle.shape.backgroundColor + ";\n  }\n"; };
            var SomaTableRowStyle = css(__makeTemplateObject(["", ""], ["", ""]), function (_a) {
                var table = _a.theme.components.table;
                return Row(table);
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
            var SomaTableRow = exports('soma_table_row', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                      Tipo de Linha de tabela
                    */
                    this.variant = 'default';
                }
                class_1.prototype.render = function () {
                    var variant = this.variant;
                    var className = Utils.Classes.combine({ root: 'soma-table-row', conditions: { variant: variant } });
                    return (h(Host, { class: className, role: "row", tabindex: 0 }, h("slot", null)));
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
                Adapt({
                    css: SomaTableRowStyle
                })
            ], SomaTableRow.prototype, "render", null);
        }
    };
});
