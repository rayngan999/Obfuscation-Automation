var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register(['./index-1307bc24.system.js', './index-993fa554.system.js', './index-1458f63a.system.js', './environments-afb72dc4.system.js'], function (exports) {
    'use strict';
    var registerInstance, h, Host, getElement, Utils, Decorators, ThemeProvider, environment;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
                Host = module.H;
                getElement = module.g;
            }, function (module) {
                Utils = module.U;
                Decorators = module.D;
            }, function (module) {
                ThemeProvider = module.T;
            }, function (module) {
                environment = module.e;
            }],
        execute: function () {
            var somaIconStyleCss = ".soma-icon{display:block;line-height:0}svg path[fill]{fill:#000000}svg path[stroke]{stroke:#000000}svg rect[stroke]{stroke:#000000}";
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
            var SomaIcon = exports('soma_icon', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                      Tema setado no Soma DS
                    */
                    this.theme = ThemeProvider.theme;
                }
                class_1.prototype.connectedCallback = function () {
                    var _this = this;
                    ThemeProvider.subscribe(function (value) {
                        _this.theme = value;
                        _this.color && _this.setIconColor();
                    });
                };
                class_1.prototype.componentDidLoad = function () {
                    if (this.icon && this.size) {
                        this.loadIcon(this.size, this.icon);
                    }
                };
                class_1.prototype.iconChange = function (icon) {
                    this.loadIcon(this.size, icon);
                };
                class_1.prototype.sizeChange = function (size) {
                    this.loadIcon(size, this.icon);
                };
                class_1.prototype.colorChange = function () {
                    this.setIconColor();
                };
                class_1.prototype.loadIcon = function (size, icon) {
                    return __awaiter(this, void 0, void 0, function () {
                        var elTree, iconText, e_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    elTree = this.el;
                                    return [4 /*yield*/, Utils.Icon.getIcon(size, icon, environment.ICON_URL)];
                                case 1:
                                    iconText = _a.sent();
                                    elTree.querySelector('div[soma-icon]').innerHTML = iconText;
                                    this.color && this.setIconColor();
                                    return [3 /*break*/, 3];
                                case 2:
                                    e_1 = _a.sent();
                                    console.log(e_1);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.resolveColor = function (color) {
                    var isToken = color.indexOf('.') !== -1;
                    if (isToken) {
                        var colorToken = color.toString().replace('theme.', '');
                        return Utils.Object.get(this.theme, colorToken, 'color.brand.pure');
                    }
                    return color;
                };
                class_1.prototype.setIconColor = function () {
                    try {
                        var element = this.el;
                        this.setColor(element.querySelector('div[soma-icon] > svg'));
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                class_1.prototype.setColor = function (element) {
                    var _this = this;
                    try {
                        var svgNodes = Object.values(element.children);
                        svgNodes.map(function (el) {
                            if (el.hasAttribute('fill'))
                                el.style.fill = _this.resolveColor(_this.color);
                            if (el.hasAttribute('stroke'))
                                el.style.stroke = _this.resolveColor(_this.color);
                            if (el.children)
                                _this.setColor(el);
                        });
                    }
                    catch (e) {
                        console.log(e);
                    }
                };
                class_1.prototype.render = function () {
                    var className = Utils.Classes.combine({ root: 'soma-icon' });
                    return (h(Host, null, h("div", { "soma-icon": "true", class: className })));
                };
                class_1.prototype.componentWillLoad = function () { };
                class_1.prototype.componentWillUpdate = function () { };
                class_1.prototype.disconnectedCallback = function () { };
                Object.defineProperty(class_1.prototype, "el", {
                    get: function () { return getElement(this); },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(class_1, "watchers", {
                    get: function () {
                        return {
                            "icon": ["iconChange"],
                            "size": ["sizeChange"],
                            "color": ["colorChange"]
                        };
                    },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
            __decorate([
                Decorators.Required()
            ], SomaIcon.prototype, "icon", void 0);
            __decorate([
                Decorators.Required()
            ], SomaIcon.prototype, "size", void 0);
            SomaIcon.style = somaIconStyleCss;
        }
    };
});
