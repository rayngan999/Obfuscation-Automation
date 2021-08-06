var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
System.register(['./index-1307bc24.system.js', './index-7ac16df2.system.js', './index-68d55745.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, fetchCookiesConfigurationsFromAPI, getConfiguredByUser, GENERIC_USER_ID, recoverFromLocalStorage, fetchCookiesDetailsFromAPI, normalizeConfigurationToPersistenceItems, syncLocalStorage, syncAPI, normalizeConfigurationToEventItems, isCurrentUIStateAnyConfiguration, INTRODUCTION_COOKIES_POLICY, isCurrentUIStateAnyCookiesList, UIState, CookieState;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.c;
                h = module.h;
            }, function (module) {
                fetchCookiesConfigurationsFromAPI = module.f;
                getConfiguredByUser = module.g;
                GENERIC_USER_ID = module.G;
                recoverFromLocalStorage = module.r;
                fetchCookiesDetailsFromAPI = module.a;
                normalizeConfigurationToPersistenceItems = module.n;
                syncLocalStorage = module.s;
                syncAPI = module.b;
                normalizeConfigurationToEventItems = module.c;
                isCurrentUIStateAnyConfiguration = module.i;
                INTRODUCTION_COOKIES_POLICY = module.I;
                isCurrentUIStateAnyCookiesList = module.d;
            }, function (module) {
                UIState = module.U;
                CookieState = module.C;
            }],
        execute: function () {
            var config = {
                dsv: {
                    baseURL: "https://api-dsv.xpi.com.br",
                    subscriptionKey: "4f729cae8dd342dc8c19a2f1a32344e2"
                },
                hml: {
                    baseURL: "https://api-hml.xpi.com.br",
                    subscriptionKey: "4576a8f8a20d4b56a94930c4d75e0e2c"
                },
                prd: {
                    baseURL: "https://api.xpi.com.br",
                    subscriptionKey: "964d65138d44453d8fa98035c6f4fcc9"
                }
            };
            var Config = /** @class */ (function () {
                function Config() {
                }
                Object.defineProperty(Config, "brand", {
                    get: function () {
                        return this._brand;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Config, "baseUrl", {
                    get: function () {
                        return this._baseURL;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Config, "headers", {
                    get: function () {
                        return this._headers;
                    },
                    enumerable: true,
                    configurable: true
                });
                Config.configureCustomMode = function (properties) {
                    this._baseURL = properties.baseURL;
                    this._headers = properties.customHeaders;
                    this._brand = properties.brand;
                };
                Config.configurePreConfigureMode = function (properties) {
                    var configByBrandByEnv;
                    if (properties.brand === "xp") {
                        configByBrandByEnv = config[properties.env]; // TODO throw if env is not dsv|hml|prd
                        this._baseURL = configByBrandByEnv["baseURL"];
                        this._brand = properties.brand;
                        this._headers = {
                            "Ocp-Apim-Subscription-Key": configByBrandByEnv["subscriptionKey"]
                        };
                        if (properties.token) {
                            this._headers["Authorization"] = "Bearer " + properties.token;
                        }
                        this._headers = Object.assign(Object.assign({}, this._headers), properties.customHeaders);
                    }
                    else {
                        throw new Error("Brand is not eligible for Pre-Configured Mode");
                    }
                };
                return Config;
            }());
            /**
             * API Error.
             *
             * @export
             * @class APIError
             * @extends {Error}
             */
            var APIError = /** @class */ (function (_super) {
                __extends(APIError, _super);
                function APIError(message) {
                    if (message === void 0) { message = ""; }
                    var _this = _super.call(this, message) || this;
                    _this.message = "API Error: " + message;
                    return _this;
                }
                return APIError;
            }(Error));
            function initializeCorePolicy(configProps) {
                var token = configProps.token, brand = configProps.brand, env = configProps.env, baseURL = configProps.baseURL, customHeaders = configProps.customHeaders;
                var isPreConfiguredMode = !!brand && !!env;
                var isCustomMode = !!baseURL;
                if (isPreConfiguredMode) {
                    Config.configurePreConfigureMode({
                        brand: brand,
                        env: env,
                        token: token,
                        customHeaders: customHeaders
                    });
                }
                else if (isCustomMode) {
                    Config.configureCustomMode({
                        baseURL: baseURL,
                        customHeaders: customHeaders,
                        brand: brand
                    });
                }
                else {
                    throw new Error("Something wrong with the properties passed. Please see README on the necessary props and available modes");
                }
                return {
                    api: new API()
                };
            }
            function evalCustomHeaders(customHeaders) {
                var evaluatedHeaders = {};
                for (var key in customHeaders) {
                    if (typeof customHeaders[key] === "function") {
                        evaluatedHeaders[key] = customHeaders[key]();
                    }
                    else {
                        evaluatedHeaders[key] = customHeaders[key];
                    }
                }
                return evaluatedHeaders;
            }
            var API = /** @class */ (function () {
                function API() {
                    this.apiURL = Config.baseUrl + "/privacy/v1";
                }
                // helpers
                API.prototype.fetchWrapper = function (url, options, fetchInstance) {
                    if (options === void 0) { options = {}; }
                    if (fetchInstance === void 0) { fetchInstance = fetch; }
                    return __awaiter(this, void 0, void 0, function () {
                        var response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, fetchInstance(url, Object.assign(Object.assign({}, options), { headers: Object.assign(Object.assign({}, evalCustomHeaders(Config.headers)), { "Content-Type": "application/json" }) }))];
                                case 1:
                                    response = _a.sent();
                                    if (response.status > 299) {
                                        throw new APIError("Status Code is not 200ish");
                                    }
                                    return [2 /*return*/, response];
                            }
                        });
                    });
                };
                API.prototype.parseResponse = function (response) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.sent())];
                            }
                        });
                    });
                };
                // terms requests
                API.prototype.getPendingTerms = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.fetchWrapper(this.apiURL + "/terms/pendings")];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                API.prototype.getTermsDetails = function (ids) {
                    return __awaiter(this, void 0, void 0, function () {
                        var params;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    params = "brand=" + Config.brand;
                                    if (ids) {
                                        ids.forEach(function (id) { return (params += "&id=" + id); });
                                    }
                                    return [4 /*yield*/, this.fetchWrapper(this.apiURL + "/terms/details?" + params)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                API.prototype.accordanceTerms = function (acceptedTermsIds, rejectedTermsIds) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.fetchWrapper(this.apiURL + "/terms/accordance", {
                                        method: "POST",
                                        body: JSON.stringify({
                                            acceptedTermsIds: acceptedTermsIds,
                                            rejectedTermsIds: rejectedTermsIds
                                        })
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                // cookies requests
                API.prototype.getCookies = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var params;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    params = "brand=" + Config.brand;
                                    return [4 /*yield*/, this.fetchWrapper(this.apiURL + "/cookies/?" + params, {})];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                API.prototype.getUserProfile = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var params;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    params = "brand=" + Config.brand;
                                    return [4 /*yield*/, this.fetchWrapper(this.apiURL + "/cookies/userprofile?" + params, {})];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                API.prototype.getCookiesDetails = function (ids) {
                    return __awaiter(this, void 0, void 0, function () {
                        var params;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    params = "brand=" + Config.brand;
                                    if (ids) {
                                        ids.forEach(function (id) { return (params += "&id=" + id); });
                                    }
                                    return [4 /*yield*/, this.fetchWrapper(this.apiURL + "/cookies/details?" + params, {})];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                API.prototype.accordanceCookies = function (acceptedCookiesIds, rejectedCookiesIds) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.fetchWrapper(this.apiURL + "/cookies/accordance", {
                                        method: "POST",
                                        body: JSON.stringify({
                                            acceptedCookiesIds: acceptedCookiesIds,
                                            rejectedCookiesIds: rejectedCookiesIds
                                        })
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                API.prototype.accordanceCookiesAll = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.fetchWrapper(this.apiURL + "/cookies/accordance/all", {
                                        method: "POST"
                                    })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                return API;
            }());
            var rootCss = ".hQi0-text{text-align:justify}";
            var Root = exports('cookies_policy', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    this.forceDisplay = false;
                    this.forceDecision = false;
                    this.authenticated = false; // We MUST have a separate variable to store if the current scenario is logged-in or out. We can NOT use the presence of the `token` prop because if the consumer is using Custom Mode, then the `token` prop will never be used.
                    this.footerInverse = true;
                    // state
                    this.currentUIState = UIState.FRESH;
                    this.fetchedCookiesDetails = false;
                    this.allowedToCloseModal = !this.forceDecision; // semantic alias
                    this.cookiesConfigured = createEvent(this, "cookiesConfigured", 7);
                    this.cookiesComponentInitialized = createEvent(this, "cookiesComponentInitialized", 7);
                    this.cookiesFooterAppeared = createEvent(this, "cookiesFooterAppeared", 7);
                    this.cookiesModalAppeared = createEvent(this, "cookiesModalAppeared", 7);
                    this.cookiesExitedWithoutAppearing = createEvent(this, "cookiesExitedWithoutAppearing", 7);
                    this.cookiesModalClose = createEvent(this, "cookiesModalClose", 7);
                    this.modalClose = createEvent(this, "modalClose", 7);
                }
                // lifecycles
                class_1.prototype.connectedCallback = function () {
                    // We want to avoid duplicate connectedCallback executions within the same session.
                    // This can be bypassed if the consumer uses the forceDisplay prop to tell that we MUST show the user configurations no matter what.
                    if (this.currentUIState === UIState.FRESH || this.forceDisplay) {
                        this.cookiesComponentInitialized.emit();
                        // TODO remove after having implemented react-output-target
                        var parsedCustomHeaders = typeof this.customHeaders === "string"
                            ? JSON.parse(this.customHeaders)
                            : this.customHeaders;
                        var api = initializeCorePolicy({
                            token: this.token,
                            brand: this.brand,
                            env: this.env,
                            baseURL: this.baseUrl,
                            customHeaders: parsedCustomHeaders
                        }).api;
                        this.api = api;
                        this.bootstrap();
                        console.warn("[cookies-policy]: Event 'modalClose' will soon be deprecated. Use 'cookiesModalClose' instead.");
                    }
                };
                // helpers
                class_1.prototype.bootstrap = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a, userId, cookieConfigurationItems;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, fetchCookiesConfigurationsFromAPI(this.api, this.authenticated)];
                                case 1:
                                    _a = _b.sent(), userId = _a.userId, cookieConfigurationItems = _a.cookieConfigurationItems;
                                    this.userId = userId;
                                    this.cookieConfigurationItems = cookieConfigurationItems;
                                    // The consumer from this component might want to force display this component rendering, if its user clicked some `show me my cookie configurations` link.
                                    if (this.forceDisplay) {
                                        this.bootstrapForcedDisplay();
                                    }
                                    else {
                                        this.bootstrapNaturalFlow();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                // In the `forcedDisplay` mode, we bootstrap eagerly by rendering the modal with the cookies list tab selected,
                // and so bypassing the `naturalFlow` of showing the disclaimer first.
                class_1.prototype.bootstrapForcedDisplay = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var hasAnyLSConfiguration, _a, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0: return [4 /*yield*/, getConfiguredByUser(this.userId)];
                                case 1:
                                    _a = (_d.sent());
                                    if (_a) return [3 /*break*/, 3];
                                    return [4 /*yield*/, getConfiguredByUser(GENERIC_USER_ID)];
                                case 2:
                                    _a = (_d.sent());
                                    _d.label = 3;
                                case 3:
                                    hasAnyLSConfiguration = _a;
                                    if (!hasAnyLSConfiguration) return [3 /*break*/, 5];
                                    _b = this;
                                    return [4 /*yield*/, recoverFromLocalStorage(this.userId, this.cookieConfigurationItems)];
                                case 4:
                                    _b.cookieConfigurationItems = _d.sent();
                                    _d.label = 5;
                                case 5:
                                    if (!this.fetchedCookiesDetails) return [3 /*break*/, 6];
                                    this.currentUIState = UIState.COOKIES_CONFIGURATION_COOKIES_LIST;
                                    return [3 /*break*/, 8];
                                case 6:
                                    this.currentUIState = UIState.COOKIES_CONFIGURATION_COOKIES_LIST_LOADING;
                                    _c = this;
                                    return [4 /*yield*/, fetchCookiesDetailsFromAPI(this.api, this.cookieConfigurationItems)];
                                case 7:
                                    _c.cookieConfigurationItems = _d.sent();
                                    this.fetchedCookiesDetails = true;
                                    this.currentUIState = UIState.COOKIES_CONFIGURATION_COOKIES_LIST;
                                    _d.label = 8;
                                case 8:
                                    this.cookiesModalAppeared.emit();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.bootstrapNaturalFlow = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var isEVERYCookieConfigurationAcceptedFromTheAPI, hasAnyLSConfiguration, _a, _b, _c, isAnyCookieConfigurationPending, persistenceCookieConfigurationItems;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    isEVERYCookieConfigurationAcceptedFromTheAPI = this.cookieConfigurationItems.every(function (item) { return item.state === CookieState.ACCEPTED; } // TODO why not REJECTED as well?
                                    );
                                    _a = !isEVERYCookieConfigurationAcceptedFromTheAPI;
                                    if (!_a) return [3 /*break*/, 4];
                                    return [4 /*yield*/, getConfiguredByUser(this.userId)];
                                case 1:
                                    _b = (_d.sent());
                                    if (_b) return [3 /*break*/, 3];
                                    return [4 /*yield*/, getConfiguredByUser(GENERIC_USER_ID)];
                                case 2:
                                    _b = (_d.sent());
                                    _d.label = 3;
                                case 3:
                                    _a = (_b);
                                    _d.label = 4;
                                case 4:
                                    hasAnyLSConfiguration = _a;
                                    if (!hasAnyLSConfiguration) return [3 /*break*/, 6];
                                    _c = this;
                                    return [4 /*yield*/, recoverFromLocalStorage(this.userId, this.cookieConfigurationItems)];
                                case 5:
                                    _c.cookieConfigurationItems = _d.sent();
                                    _d.label = 6;
                                case 6:
                                    isAnyCookieConfigurationPending = !isEVERYCookieConfigurationAcceptedFromTheAPI &&
                                        this.cookieConfigurationItems.some(function (item) { return item.state === CookieState.PENDING; });
                                    if (isAnyCookieConfigurationPending) {
                                        // In some cases the consumer might want to force the user to make a decision (i.e. don't want to leave the user decide if will interact or not).
                                        // We do this by showing eagerly the modal -- instead of the footer -- without the close button and without the ESC handler (i.e. an uncloseable modal).
                                        // The consumer chooses which way it wants using the "forceDecision" prop.
                                        if (this.forceDecision) {
                                            this.cookiesModalAppeared.emit();
                                            this.currentUIState = UIState.COOKIES_CONFIGURATION_OUR_POLICY;
                                        }
                                        else {
                                            this.cookiesFooterAppeared.emit();
                                            this.currentUIState = UIState.DISCLAIMER;
                                        }
                                    }
                                    else {
                                        this.cookiesExitedWithoutAppearing.emit();
                                        this.currentUIState = UIState.COOKIES_CONFIGURED;
                                        persistenceCookieConfigurationItems = normalizeConfigurationToPersistenceItems(this.cookieConfigurationItems);
                                        this.notifyComponentConsumer(persistenceCookieConfigurationItems, false);
                                        syncLocalStorage(this.userId, persistenceCookieConfigurationItems);
                                        // Here we skip the POST /accordance as documented above. We obviously do NOT want to POST to the API something that
                                        // the API itself already told us.
                                        if (this.authenticated && !isEVERYCookieConfigurationAcceptedFromTheAPI) {
                                            syncAPI(this.api, persistenceCookieConfigurationItems);
                                        }
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.eagerAcceptAll = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.api.accordanceCookiesAll()];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                class_1.prototype.notifyComponentConsumer = function (persistenceCookieConfigurationItems, userTriggered) {
                    var eventCookieConfigurationItems = normalizeConfigurationToEventItems(persistenceCookieConfigurationItems, userTriggered);
                    this.cookiesConfigured.emit(eventCookieConfigurationItems);
                };
                // listeners
                class_1.prototype.handleESCPress = function (event) {
                    if (event.code === "Escape") {
                        if (isCurrentUIStateAnyConfiguration(this.currentUIState) &&
                            this.allowedToCloseModal) {
                            this.handleModalCloseClick();
                        }
                    }
                };
                // handlers
                class_1.prototype.handleCheckboxClick = function (event) {
                    var detail = event.detail;
                    var clickedConfiguration = detail;
                    function findOutNextStateAfterClick() {
                        var nextState;
                        if (clickedConfiguration.state === CookieState.ACCEPTED) {
                            nextState = CookieState.REJECTED;
                        }
                        else if (clickedConfiguration.state === CookieState.REJECTED) {
                            nextState = CookieState.ACCEPTED;
                        }
                        else if (clickedConfiguration.state === CookieState.PENDING) {
                            nextState = CookieState.ACCEPTED;
                        }
                        return nextState;
                    }
                    this.cookieConfigurationItems = this.cookieConfigurationItems.map(function (item) { return clickedConfiguration.id === item.id
                        ? Object.assign(Object.assign({}, item), { state: findOutNextStateAfterClick() }) : item; });
                };
                class_1.prototype.handleSaveConfigurationClick = function () {
                    this.currentUIState = UIState.COOKIES_CONFIGURED;
                    var persistenceCookieConfigurationItems = normalizeConfigurationToPersistenceItems(this.cookieConfigurationItems);
                    this.notifyComponentConsumer(persistenceCookieConfigurationItems, true);
                    if (this.authenticated) {
                        syncAPI(this.api, persistenceCookieConfigurationItems);
                    }
                    syncLocalStorage(this.userId, persistenceCookieConfigurationItems);
                };
                class_1.prototype.handleAcceptAllClick = function () {
                    this.currentUIState = UIState.COOKIES_CONFIGURED;
                    this.cookieConfigurationItems = this.cookieConfigurationItems.map(function (item) { return (Object.assign(Object.assign({}, item), { state: CookieState.ACCEPTED })); });
                    var persistenceCookieConfigurationItems = normalizeConfigurationToPersistenceItems(this.cookieConfigurationItems);
                    this.notifyComponentConsumer(persistenceCookieConfigurationItems, true);
                    if (this.authenticated) {
                        this.eagerAcceptAll();
                    }
                    syncLocalStorage(this.userId, persistenceCookieConfigurationItems);
                };
                class_1.prototype.handleTabClick = function (event) {
                    return __awaiter(this, void 0, void 0, function () {
                        var detail, nextUIState, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    detail = event.detail;
                                    nextUIState = detail;
                                    if (!(!this.fetchedCookiesDetails &&
                                        nextUIState === UIState.COOKIES_CONFIGURATION_COOKIES_LIST)) return [3 /*break*/, 2];
                                    this.currentUIState = UIState.COOKIES_CONFIGURATION_COOKIES_LIST_LOADING;
                                    _a = this;
                                    return [4 /*yield*/, fetchCookiesDetailsFromAPI(this.api, this.cookieConfigurationItems)];
                                case 1:
                                    _a.cookieConfigurationItems = _b.sent();
                                    this.fetchedCookiesDetails = true;
                                    this.currentUIState = UIState.COOKIES_CONFIGURATION_COOKIES_LIST;
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.currentUIState = nextUIState;
                                    _b.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                class_1.prototype.handleConfigureCookiesClick = function () {
                    this.currentUIState = UIState.COOKIES_CONFIGURATION_OUR_POLICY;
                };
                class_1.prototype.handleModalCloseClick = function () {
                    this.currentUIState = UIState.COOKIES_CONFIGURATION_EXITED;
                    this.modalClose.emit();
                    this.cookiesModalClose.emit();
                };
                // render
                class_1.prototype.renderModalTabs = function () {
                    var _this = this;
                    return (h("cookies-policy-modal-tabs", { currentUIState: this.currentUIState, onTabClick: function (event) { return _this.handleTabClick(event); } }));
                };
                class_1.prototype.renderModalMainContent = function () {
                    var _this = this;
                    return [
                        this.currentUIState === UIState.COOKIES_CONFIGURATION_OUR_POLICY && (h("div", { class: "hQi0-text" }, h("soma-description", null, INTRODUCTION_COOKIES_POLICY))),
                        isCurrentUIStateAnyCookiesList(this.currentUIState) && (h("div", null, h("cookies-policy-list", { cookieConfigurationItems: this.cookieConfigurationItems, onCheckboxClick: function (event) { return _this.handleCheckboxClick(event); }, currentUIState: this.currentUIState })))
                    ];
                };
                class_1.prototype.renderModalFooterContent = function () {
                    var _this = this;
                    return (h("cookies-policy-modal-footer", { currentUIState: this.currentUIState, onAcceptAllClick: function () { return _this.handleAcceptAllClick(); }, onSaveConfigurationClick: function () { return _this.handleSaveConfigurationClick(); } }));
                };
                class_1.prototype.renderConfigurationModal = function () {
                    var _this = this;
                    return (h("soma-context", { inverse: false }, h("cookies-policy-modal", { zIndex: this.zIndex, onCloseClick: function () { return _this.handleModalCloseClick(); }, closeable: this.allowedToCloseModal }, h("div", { slot: "header-content" }, this.renderModalTabs()), h("div", { slot: "main-content" }, this.renderModalMainContent()), h("div", { slot: "footer-content" }, this.renderModalFooterContent()))));
                };
                class_1.prototype.renderDisclaimer = function () {
                    var _this = this;
                    return (h("soma-context", { inverse: this.footerInverse }, h("cookies-policy-disclaimer", { zIndex: this.zIndex, onConfigureClick: function () { return _this.handleConfigureCookiesClick(); }, onAcceptAllClick: function () { return _this.handleAcceptAllClick(); }, footerBackground: this.footerBackground, footerBorder: this.footerBorder })));
                };
                class_1.prototype.render = function () {
                    return [
                        [
                            UIState.COOKIES_CONFIGURATION_OUR_POLICY,
                            UIState.COOKIES_CONFIGURATION_COOKIES_LIST,
                            UIState.COOKIES_CONFIGURATION_COOKIES_LIST_LOADING
                        ].includes(this.currentUIState) && this.renderConfigurationModal(),
                        this.currentUIState === UIState.DISCLAIMER && this.renderDisclaimer()
                    ];
                };
                return class_1;
            }()));
            Root.style = rootCss;
        }
    };
});
