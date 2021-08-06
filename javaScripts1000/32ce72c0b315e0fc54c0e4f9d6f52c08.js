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
            var Cell = function (table) { return "\n  :host(.soma-table-cell) {\n    display: table-cell;\n    position: relative;\n    min-width: " + table.cell.shape.minWidth + ";\n    height: " + table.cell.shape.height + ";\n\n    .soma-content {\n      display: flex;\n      align-items: center;\n      box-sizing: border-box;\n      position: absolute;\n      height: 100%;\n      padding: " + table.cell.content.shape.padding.top + "\n        " + table.cell.content.shape.padding.right + "\n        " + table.cell.content.shape.padding.bottom + "\n        " + table.cell.content.shape.padding.left + ";\n    }\n\n    .soma-th {\n      text-align: left;\n      font-family: " + table.cell.th.font.fontFamily + ";\n      font-weight: " + table.cell.th.font.fontWeight + ";\n      font-size: " + table.cell.th.font.fontSize + ";\n      line-height: " + table.cell.th.font.lineHeight + ";\n      color: " + table.cell.th.font.color + ";\n    }\n\n    .soma-td {\n      text-align: left;\n      font-family: " + table.cell.td.font.fontFamily + ";\n      font-weight: " + table.cell.td.font.fontWeight + ";\n      font-size: " + table.cell.td.font.fontSize + ";\n      line-height: " + table.cell.td.font.lineHeight + ";\n      color: " + table.cell.td.font.color + ";\n    }\n  }\n"; };
            var SomaTableCellStyle = css(__makeTemplateObject(["", ""], ["", ""]), function (_a) {
                var table = _a.theme.components.table;
                return Cell(table);
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
            var SomaTableCell = exports('soma_table_cell', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                      Determina que a cÃ©lula Ã© do tipo header (th) em acessibilidade
                    */
                    this.header = false;
                }
                class_1.prototype.render = function () {
                    var header = this.header;
                    var className = Utils.Classes.combine({ root: 'soma-table-cell' });
                    var contentClass = "soma-content " + (header ? 'soma-th' : 'soma-td');
                    return (h(Host, { class: className, role: header ? 'columnheader' : 'cell', tabIndex: 0, "aria-sort": header && 'none' }, h("div", { class: contentClass }, h("slot", null))));
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
                    css: SomaTableCellStyle
                })
            ], SomaTableCell.prototype, "render", null);
        }
    };
});
