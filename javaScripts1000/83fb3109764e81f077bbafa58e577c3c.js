System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {
            exports({
                C: void 0,
                U: void 0
            });
            var UIState;
            (function (UIState) {
                UIState[UIState["FRESH"] = 0] = "FRESH";
                UIState[UIState["APPEARED"] = 10] = "APPEARED";
                UIState[UIState["DISCLAIMER"] = 20] = "DISCLAIMER";
                UIState[UIState["COOKIES_CONFIGURATION_OUR_POLICY"] = 30] = "COOKIES_CONFIGURATION_OUR_POLICY";
                UIState[UIState["COOKIES_CONFIGURATION_COOKIES_LIST"] = 31] = "COOKIES_CONFIGURATION_COOKIES_LIST";
                UIState[UIState["COOKIES_CONFIGURATION_COOKIES_LIST_LOADING"] = 32] = "COOKIES_CONFIGURATION_COOKIES_LIST_LOADING";
                UIState[UIState["COOKIES_CONFIGURED"] = 33] = "COOKIES_CONFIGURED";
                UIState[UIState["COOKIES_CONFIGURATION_EXITED"] = 34] = "COOKIES_CONFIGURATION_EXITED";
            })(UIState || (UIState = exports('U', {})));
            var CookieState;
            (function (CookieState) {
                CookieState[CookieState["PENDING"] = 0] = "PENDING";
                CookieState[CookieState["ACCEPTED"] = 10] = "ACCEPTED";
                CookieState[CookieState["REJECTED"] = 20] = "REJECTED";
            })(CookieState || (CookieState = exports('C', {})));
        }
    };
});
