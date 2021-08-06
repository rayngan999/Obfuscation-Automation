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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
System.register(['./index-68d55745.system.js'], function (exports) {
    'use strict';
    var UIState, CookieState;
    return {
        setters: [function (module) {
                UIState = module.U;
                CookieState = module.C;
            }],
        execute: function () {
            exports({
                a: fetchCookiesDetailsFromAPI,
                b: syncAPI,
                c: normalizeConfigurationToEventItems,
                d: isCurrentUIStateAnyCookiesList,
                f: fetchCookiesConfigurationsFromAPI,
                g: getConfiguredByUser,
                i: isCurrentUIStateAnyConfiguration,
                n: normalizeConfigurationToPersistenceItems,
                r: recoverFromLocalStorage,
                s: syncLocalStorage
            });
            var UUID_NAMESPACE = "xalM2";
            var LOCAL_STORAGE_COOKIES_POLICY_NAMESPACE = UUID_NAMESPACE + "-cookies-policy";
            var LOCAL_STORAGE_COOKIES_POLICY_CONFIGURED = LOCAL_STORAGE_COOKIES_POLICY_NAMESPACE + "-configured";
            var GENERIC_USER_ID = exports('G', "0000");
            var INTRODUCTION_COOKIES_POLICY = exports('I', "Utilizamos cookies para garantir a melhor experi\u00EAncia. Alguns s\u00E3o essenciais para o funcionamento, como o login, e n\u00E3o podem ser desativados. Temos tamb\u00E9m cookies para melhorar a performance, oferecer conte\u00FAdo personalizado, recursos nas redes sociais e an\u00E1lise de tr\u00E1fego. Estes cookies podem incluir cookies de terceiros. Importante: voc\u00EA pode alterar as configura\u00E7\u00F5es de cookies a qualquer momento.");
            var DISCLAIMER_TEXT = exports('D', "Clicando em \"Aceito todos os cookies\", voc\u00EA aceita nossa pol\u00EDtica de cookies com objetivo de melhorar sua navega\u00E7\u00E3o. Conhe\u00E7a nossa pol\u00EDtica e");
            var DISCLAIMER_CONFIGURE_LINK = exports('e', "configure seus cookies");
            // TODO why not use LOCAL_STORAGE_COOKIES_POLICY_CONFIGURED?
            function getConfiguredByUser(userId) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, !!JSON.parse(localStorage.getItem(LOCAL_STORAGE_COOKIES_POLICY_NAMESPACE + "-" + userId))];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
            function setConfiguredByUser(userId) {
                localStorage.setItem(LOCAL_STORAGE_COOKIES_POLICY_CONFIGURED + "-" + userId, "1");
            }
            function getConfigurationsByUser(userId) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, JSON.parse(localStorage.getItem(LOCAL_STORAGE_COOKIES_POLICY_NAMESPACE + "-" + userId))];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
            function setConfigurationsByUser(userId, cookieConfigurationWebStorageItems) {
                localStorage.setItem(LOCAL_STORAGE_COOKIES_POLICY_NAMESPACE + "-" + userId, JSON.stringify(cookieConfigurationWebStorageItems));
            }
            function isCurrentUIStateAnyCookiesList(currentUIState) {
                return [
                    UIState.COOKIES_CONFIGURATION_COOKIES_LIST,
                    UIState.COOKIES_CONFIGURATION_COOKIES_LIST_LOADING
                ].includes(currentUIState);
            }
            function isCurrentUIStateAnyConfiguration(currentUIState) {
                return [
                    UIState.COOKIES_CONFIGURATION_COOKIES_LIST,
                    UIState.COOKIES_CONFIGURATION_COOKIES_LIST_LOADING,
                    UIState.COOKIES_CONFIGURATION_OUR_POLICY
                ].includes(currentUIState);
            }
            function fetchCookiesDetailsFromAPI(api, cookieConfigurationItems) {
                return __awaiter(this, void 0, void 0, function () {
                    var response, data, cookiesDetails_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, api.getCookiesDetails(cookieConfigurationItems.map(function (item) { return item.id; }))];
                            case 1:
                                response = _a.sent();
                                if (!(response.status === 200)) return [3 /*break*/, 3];
                                return [4 /*yield*/, api.parseResponse(response)];
                            case 2:
                                data = (_a.sent()).data;
                                cookiesDetails_1 = data;
                                return [2 /*return*/, cookieConfigurationItems.map(function (item) {
                                        var itemFromAPI = cookiesDetails_1.find(function (itemDetail) { return itemDetail.id === item.id; });
                                        return Object.assign(Object.assign({}, item), { name: itemFromAPI.name, text: itemFromAPI.text });
                                    })];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            }
            function fetchCookiesConfigurationsFromAPI(api, authenticated) {
                return __awaiter(this, void 0, void 0, function () {
                    var response, _a, _b, userId, cookies;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                if (!authenticated) return [3 /*break*/, 2];
                                return [4 /*yield*/, api.getUserProfile()];
                            case 1:
                                _a = _c.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, api.getCookies()];
                            case 3:
                                _a = _c.sent();
                                _c.label = 4;
                            case 4:
                                response = _a;
                                if (!(response.status === 200)) return [3 /*break*/, 6];
                                return [4 /*yield*/, api.parseResponse(response)];
                            case 5:
                                _b = (_c.sent()).data, userId = _b.userId, cookies = _b.cookies;
                                return [2 /*return*/, {
                                        userId: userId ? userId : GENERIC_USER_ID,
                                        cookieConfigurationItems: cookies.map(function (item) { return (Object.assign(Object.assign({}, item), { state: authenticated ? item.state : CookieState.PENDING // We MUST assume PENDING on non-authenticated because the API does NOT return `state` property on non-authenticated.
                                        })); })
                                    }];
                            case 6: return [2 /*return*/];
                        }
                    });
                });
            }
            // Takes an array of configurations and makes
            // assumptions regarding their state.
            //
            // assumption #1:
            // If it's required then it MUST be assumed as ACCEPTED
            // assumption #2:
            // Is it's PENDING and NOT required, then it must be assumed as REJECTED
            //
            // We need this normalization before sending a POST to the API with the user's configuration choices.
            //
            // Required configurations are rendered as disabled AND checked checkboxes, hence the need to assume that
            // those are ACCEPTED.
            function normalizeConfigurationToPersistenceItems(cookieConfigurationItems) {
                return {
                    acceptedCookies: cookieConfigurationItems
                        .filter(function (item) { return item.required || item.state === CookieState.ACCEPTED; })
                        .map(function (item) { return (Object.assign(Object.assign({}, item), { state: CookieState.ACCEPTED })); }),
                    rejectedCookies: cookieConfigurationItems
                        .filter(function (item) { return !item.required &&
                        [CookieState.REJECTED, CookieState.PENDING].includes(item.state); })
                        .map(function (item) { return (Object.assign(Object.assign({}, item), { state: CookieState.REJECTED })); })
                };
            }
            function normalizeConfigurationToEventItems(cookieConfigurationItems, userTriggered) {
                if (userTriggered === void 0) { userTriggered = false; }
                function normalizeConfigurationToEventItem(configurationItem) {
                    return {
                        id: configurationItem.id,
                        name: configurationItem.name
                    };
                }
                return {
                    userTriggered: userTriggered,
                    acceptedCookies: cookieConfigurationItems.acceptedCookies.map(function (item) { return normalizeConfigurationToEventItem(item); }),
                    rejectedCookies: cookieConfigurationItems.rejectedCookies.map(function (item) { return normalizeConfigurationToEventItem(item); })
                };
            }
            function normalizeConfigurationToWebStorageItem(item) {
                return {
                    id: item.id,
                    state: item.state,
                    name: item.name
                };
            }
            // Updates localStorage based on cookieConfigurationItems parameter.
            //
            // If userId is passed, then updates also based on user-specific localStorage key.
            //
            // Always updates based on generic-user localStoroage key.
            //
            // We need to have both updated because on logged-out scenario we do NOT have userId.
            function syncLocalStorage(userId, cookieConfigurationPersistenceItems) {
                var acceptedCookies = cookieConfigurationPersistenceItems.acceptedCookies, rejectedCookies = cookieConfigurationPersistenceItems.rejectedCookies;
                var cookieConfigurationWebStorageItems = __spreadArrays(acceptedCookies.map(function (item) { return normalizeConfigurationToWebStorageItem(item); }), rejectedCookies.map(function (item) { return normalizeConfigurationToWebStorageItem(item); }));
                if (userId) {
                    setConfigurationsByUser(userId, cookieConfigurationWebStorageItems);
                    setConfiguredByUser(userId);
                }
                setConfigurationsByUser(GENERIC_USER_ID, cookieConfigurationWebStorageItems);
                setConfiguredByUser(GENERIC_USER_ID);
            }
            function syncAPI(api, cookieConfigurationPersistenceItems) {
                return __awaiter(this, void 0, void 0, function () {
                    var acceptedCookies, rejectedCookies, acceptedCookiesIds, rejectedCookiesIds;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                acceptedCookies = cookieConfigurationPersistenceItems.acceptedCookies, rejectedCookies = cookieConfigurationPersistenceItems.rejectedCookies;
                                acceptedCookiesIds = acceptedCookies.map(function (item) { return item.id; });
                                rejectedCookiesIds = rejectedCookies.map(function (item) { return item.id; });
                                return [4 /*yield*/, api.accordanceCookies(acceptedCookiesIds, rejectedCookiesIds)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
            function recoverFromLocalStorage(userId, cookieConfigurationItems) {
                return __awaiter(this, void 0, void 0, function () {
                    function findOutState(item) {
                        var state;
                        var itemFromLS = LSConfigurations.find(function (itemFromLS) { return itemFromLS.id === item.id; });
                        // If state from parameter is not PENDING, then we use it, because ACCEPTED 
                        // and REJECTED states have greater precedence than anything stored in localStorage.
                        if ([CookieState.ACCEPTED, CookieState.REJECTED].includes(item.state)) {
                            state = item.state;
                        }
                        // If localStorage has any state regarding the configuration, use it from there.
                        else if (itemFromLS && itemFromLS.state) {
                            state = itemFromLS.state;
                        }
                        // If there is NOWHERE state for a specific configuration, use PENDING as fallback.
                        // This else is a pure SAFETY FALLBACK. The situation where there are no state from 
                        // the API nor in the localStorage should never happen.
                        else {
                            state = CookieState.PENDING;
                        }
                        return state;
                    }
                    var LSFromUser, LSFromGeneric, _a, LSConfigurations;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, getConfigurationsByUser(userId)];
                            case 1:
                                LSFromUser = _b.sent();
                                _a = !LSFromUser;
                                if (!_a) return [3 /*break*/, 3];
                                return [4 /*yield*/, getConfigurationsByUser(GENERIC_USER_ID)];
                            case 2:
                                _a = (_b.sent());
                                _b.label = 3;
                            case 3:
                                LSFromGeneric = _a;
                                LSConfigurations = LSFromUser ? LSFromUser : LSFromGeneric;
                                return [2 /*return*/, cookieConfigurationItems.map(function (item) { return (Object.assign(Object.assign({}, item), { state: findOutState(item) })); })];
                        }
                    });
                });
            }
        }
    };
});
