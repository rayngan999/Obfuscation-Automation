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
System.register(['./index-1307bc24.system.js'], function (exports) {
    'use strict';
    var getElement;
    return {
        setters: [function (module) {
                getElement = module.g;
            }],
        execute: function () {
            /**
             * @param {string} componentName
             * @param {*} target
             */
            function verifyProperties(target) {
                return __awaiter(this, void 0, void 0, function () {
                    var _i, _b, _c, item, tag;
                    return __generator(this, function (_d) {
                        for (_i = 0, _b = target.__deprecatedProperties; _i < _b.length; _i++) {
                            _c = _b[_i], item = _c.item, tag = _c.tag;
                            if (target[item]) {
                                console.warn("[" + tag + "] is deprecated, please consult the documentation");
                            }
                        }
                        return [2 /*return*/];
                    });
                });
            }
            ;
            var Deprecated = function () { return function (target, property, _descriptor) {
                target.__deprecatedProperties = target.__deprecatedProperties || [];
                target.__deprecatedProperties.push({ item: property, tag: property + " on " + target.constructor.name });
                if (target.__componentWillLoadDeprecatedOverrided) {
                    return;
                }
                target.__componentWillLoadDeprecatedOverrided = true;
                var originaComponentWillLoad = target.componentWillLoad;
                target.componentWillLoad = function () {
                    verifyProperties(this);
                    return originaComponentWillLoad.apply(this, arguments);
                };
            }; };
            /**
             * @param {string} componentName
             * @param {*} target
             */
            function verifyProperties$1(componentName, target) {
                return __awaiter(this, void 0, void 0, function () {
                    var _i, _b, item;
                    return __generator(this, function (_c) {
                        for (_i = 0, _b = target.__requiredProperties; _i < _b.length; _i++) {
                            item = _b[_i];
                            if (target[item] == null) {
                                console.error("$[" + componentName + "] Missing required property '" + item + "'.");
                            }
                        }
                        return [2 /*return*/];
                    });
                });
            }
            ;
            var Required = function () { return function (target, property, _descriptor) {
                target.__requiredProperties = target.__requiredProperties || [];
                target.__requiredProperties.push(property);
                if (target.__componentWillLoadRequiredOverrided) {
                    return;
                }
                target.__componentWillLoadRequiredOverrided = true;
                var originaComponentWillLoad = target.componentWillLoad;
                target.componentWillLoad = function () {
                    verifyProperties$1(target.constructor.name, this);
                    return originaComponentWillLoad.apply(this, arguments);
                };
            }; };
            /**
             * Event Emitter implementation.
             *
             * @class httpEventEmitter
             */
            var EventEmitter = /** @class */ (function () {
                function EventEmitter() {
                    this._lastValue = {};
                    this._callbacks = {};
                }
                /**
                 * Get last value emitted by key.
                 *
                 * @param {string} key
                 * @returns
                 * @memberof EventEmitter
                 */
                EventEmitter.prototype.getValue = function (key) {
                    return this._lastValue[key];
                };
                /**
                 * Subscribe in event.
                 *
                 * @param {string} key
                 * @param {Function} cb
                 * @returns
                 * @memberof httpEventEmitter
                 */
                EventEmitter.prototype.on = function (key, cb) {
                    this._callbacks[key] = this._callbacks[key] || [];
                    this._callbacks[key].push(cb);
                };
                /**
                 * Remoe listener of key.
                 *
                 * @template T
                 * @param {string} key
                 * @param {EventHandler<T>} cb
                 * @memberof EventEmitter
                 */
                EventEmitter.prototype.off = function (key, cb) {
                    this._callbacks[key] = this._callbacks[key] || [];
                    var idx = this._callbacks[key].indexOf(cb);
                    if (idx >= 0) {
                        this._callbacks[key].splice(idx, 1);
                    }
                };
                /**
                 * Subscribe to execute once.
                 *
                 * @template T
                 * @param {string} key
                 * @param {EventHandler<T>} cb
                 * @memberof EventEmitter
                 */
                EventEmitter.prototype.once = function (key, cb) {
                    var _this = this;
                    var handler = function (data) {
                        // First call de original function;
                        var originalResult;
                        try {
                            originalResult = cb(data);
                        }
                        catch (e) {
                            console.log(e);
                        }
                        // Then remove yoru listener.
                        _this.off(key, handler);
                        // Return original result.
                        return originalResult;
                    };
                    this._callbacks[key] = this._callbacks[key] || [];
                    this._callbacks[key].push(handler);
                };
                /**
                 * Emit event with data.
                 *
                 * @param {string} key
                 * @param {*} data
                 * @memberof httpEventEmitter
                 */
                EventEmitter.prototype.emit = function (key, data) {
                    var listeners = this._callbacks[key] || [];
                    this._lastValue[key] = data;
                    for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
                        var fn = listeners_1[_i];
                        try {
                            fn(data);
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                };
                return EventEmitter;
            }());
            var SharedEmitter = new EventEmitter();
            /*
             * Walks the tree finding the context for all element observed properties.
             * Ends when there are no more contexts to search for
             * or when it has found all the necessary publishers
             */
            function findNearestPublishersByProperty(curr, observedProperties) {
                var publisherMap = {};
                var contextPublisher = [];
                var remainingProperties = observedProperties.length;
                observedProperties.forEach(function (property) { return publisherMap[property] = false; });
                while (!!curr && remainingProperties) {
                    var isContextComponent = curr.publisher instanceof EventEmitter;
                    var isPropertyObservableComponent = !!curr._contextComponents;
                    if (isPropertyObservableComponent) {
                        curr._contextComponents.forEach(function (_b) {
                            var observedProperty = _b.observedProperty, publisher = _b.publisher;
                            if (!publisherMap[observedProperty]) {
                                publisherMap[observedProperty] = true;
                                contextPublisher.push({ observedProperty: observedProperty, publisher: publisher });
                                remainingProperties--;
                            }
                        });
                    }
                    else if (isContextComponent) {
                        observedProperties.forEach(function (property) {
                            if (curr[property] != null && !publisherMap[property]) {
                                publisherMap[property] = true;
                                contextPublisher.push({ observedProperty: property, publisher: curr.publisher });
                                remainingProperties--;
                            }
                        });
                    }
                    curr = curr.parentElement;
                }
                return contextPublisher;
            }
            /**
             * Make any property observable.
             *
             * @export
             * @returns
             */
            function ContextObservable() {
                return function (target, property, _descriptor) {
                    target.__observedProperties = target.__observedProperties || [];
                    target.__observedProperties.push(property);
                    // Prevent multiple call stacks overrides
                    if (target.__contextOverrided)
                        return;
                    target.__contextOverrided = true;
                    var eventKey = 'context-change';
                    // Use connected callback to subscribe in context event emitter.
                    var originalComponentWillLoad = target.componentWillLoad;
                    target.componentWillLoad = function () {
                        var _this = this;
                        var comp = getElement(this);
                        var curr = comp.parentElement;
                        comp._contextComponents = findNearestPublishersByProperty(curr, target.__observedProperties);
                        comp._contextComponents = comp._contextComponents.map(function (contextPublisher) {
                            var observedProperty = contextPublisher.observedProperty;
                            return Object.assign(Object.assign({}, contextPublisher), { handler: function (value) {
                                    if (value[observedProperty] != null) {
                                        _this[observedProperty] = value[observedProperty];
                                    }
                                } });
                        });
                        comp._contextComponents.forEach(function (_b) {
                            var publisher = _b.publisher, handler = _b.handler;
                            publisher.on(eventKey, handler);
                            handler(publisher.getValue(eventKey));
                        });
                        return originalComponentWillLoad.apply(this, arguments);
                    };
                    var originalDisconnect = target.disconnectedCallback;
                    target.disconnectedCallback = function () {
                        var _a;
                        var comp = this;
                        (_a = comp === null || comp === void 0 ? void 0 : comp._contextComponents) === null || _a === void 0 ? void 0 : _a.forEach(function (_b) {
                            var publisher = _b.publisher, handler = _b.handler;
                            publisher.off(eventKey, handler);
                        });
                        return originalDisconnect.apply(this, arguments);
                    };
                };
            }
            var Decorators = exports('D', {
                Required: Required,
                Deprecated: Deprecated,
                ContextObservable: ContextObservable,
            });
            /**
             * Get path of object.
             *
             * @param {{}} object
             * @param {string} path
             * @param {*} defaultValue
             * @returns
             */
            function get(object, path, defaultValue) {
                try {
                    var splittedPath = (path === null || path === void 0 ? void 0 : path.split('.')) || [];
                    var value = splittedPath.reduce(function (obj, key) { return obj && obj[key]; }, object);
                    return value === undefined ? defaultValue : value;
                }
                catch (err) {
                    return defaultValue;
                }
            }
            /**
             * Get width from tokens.
             *
             * @export
             * @param {number} ncolumns Number of columns
             * @param {{ width: number, columns: number }} grid Grid spec.
             * @param {number} gutter Gutter size.
             * @returns
             */
            function getWidthFromTokens(ncolumns, grid, gutter) {
                var width = ncolumns * grid.width + (ncolumns - 1) * gutter;
                return width + "px";
            }
            /**
             * Resolve color by getted property
             *
             * @export
             * @param {*} props
             * @returns {string}
             */
            function resolveColor(props, property) {
                var color = props.get(property);
                var isToken = color.indexOf('.') !== -1;
                return isToken ? get(props, color, props.theme.color.brand.pure) : color;
            }
            var shuffle = function (array) {
                var currentIndex = array.length;
                var temporaryValue;
                var randomIndex;
                while (currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            };
            // IE11 or Edge
            var isBrowser = typeof window !== 'undefined';
            var isLegacy = isBrowser && (/Edge\/\d./i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent));
            var isIE11 = isBrowser && (!!window.MSInputMethodContext && !!document.documentMode);
            /**
             * Get class name by config.
             *
             * @export
             * @param {IClasses} config
             * @returns
             */
            function combine(config) {
                var className = Array.isArray(config.root) ? config.root.join(" ") : config.root;
                if (config.conditions == null) {
                    return className;
                }
                for (var _i = 0, _b = Object.entries(config.conditions); _i < _b.length; _i++) {
                    var _c = _b[_i], key = _c[0], value = _c[1];
                    if (typeof value === 'boolean' && value) {
                        className += " " + key;
                    }
                    else if (typeof value === 'function') {
                        var result = value();
                        className += " " + result;
                    }
                    else if (typeof value === 'string' && value) {
                        className += " " + value;
                    }
                }
                return className;
            }
            /**
             * Do lazy icons import w/ caching
             *
             * @export
             * @abstract
             * @class Icon
             */
            var Icon = /** @class */ (function () {
                function Icon() {
                }
                /**
                 * Get icon.
                 * Use memorization to prevent multiples requests.
                 */
                Icon.getIcon = function (size, icon, url) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        if (!url) {
                            reject('you should set url');
                        }
                        var key = _this.getKey(_this.theme, icon, size);
                        var cache = _this.cache.get(key);
                        if (cache === 'waiting') {
                            return SharedEmitter.on(key, function (data) { return resolve(data); });
                        }
                        if (cache != null) {
                            return resolve(cache);
                        }
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState !== 4) {
                                return;
                            }
                            if (xhr.status === 200) {
                                _this.cache.set(key, xhr.response);
                                SharedEmitter.emit(key, xhr.response);
                                return resolve(xhr.response);
                            }
                            reject("Error trying to import " + icon + " " + size);
                        };
                        if (cache == null) {
                            _this.cache.set(key, 'waiting');
                            xhr.open("GET", url + "/" + _this.theme + "/" + size + "/" + icon + ".svg", true);
                            xhr.send();
                        }
                    });
                };
                /**
                 * Return key to storage icon cache.
                 */
                Icon.getKey = function (theme, icon, size) {
                    return theme + "#" + size + "#" + icon;
                };
                Icon.setTheme = function (theme) {
                    return this.theme = theme;
                };
                return Icon;
            }());
            Icon.cache = new Map();
            Icon.theme = '';
            /**
             * Truncate text using ellipses (...)
             *
             * @export
             * @param {string} text
             * @param {number} max
             * @returns
             */
            function ellipses(text, max) {
                return text && text.substr(0, max - 1).trim() + (text.length > max ? '...' : '');
            }
            ;
            var weekDays = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
            var namesMonth = [
                'Janeiro',
                'Fevereiro',
                'MarÃ§o',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
            ];
            var Utils = exports('U', {
                Object: {
                    get: get,
                },
                Array: {
                    shuffle: shuffle,
                },
                Classes: {
                    combine: combine,
                },
                Browser: {
                    isLegacy: isLegacy,
                    isIE11: isIE11,
                },
                Style: {
                    getWidthFromTokens: getWidthFromTokens,
                    resolveColor: resolveColor,
                },
                Event: {
                    EventEmitter: EventEmitter,
                },
                Icon: Icon,
                Text: {
                    ellipses: ellipses
                },
                Date: {
                    weekDays: weekDays,
                    namesMonth: namesMonth
                }
            });
        }
    };
});
