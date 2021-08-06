System.register([], function (exports) {
    'use strict';
    return {
        execute: function () {
            var local = {
                FONT_URL: "http://localhost:3006",
                ICON_URL: "http://localhost:3005",
                ENV: "local"
            };
            var beta = {
                FONT_URL: "https://xpinccdndev.blob.core.windows.net/soma/soma-fonts",
                ICON_URL: "https://xpinccdndev.blob.core.windows.net/soma/soma-icons",
                ENV: "beta"
            };
            var rc = {
                FONT_URL: "https://xpinccdnhml.blob.core.windows.net/soma/soma-fonts",
                ICON_URL: "https://xpinccdnhml.blob.core.windows.net/soma/soma-icons",
                ENV: "rc"
            };
            var latest = {
                FONT_URL: "https://xpinccdnprd.azureedge.net/soma/soma-fonts",
                ICON_URL: "https://xpinccdnprd.azureedge.net/soma/soma-icons",
                ENV: "latest"
            };
            var cdn = {
                FONT_URL: "https://xpinccdnprd.azureedge.net/soma/soma-fonts",
                ICON_URL: "https://xpinccdnprd.azureedge.net/soma/soma-icons",
                ENV: "cdn"
            };
            var environments = function (target) {
                var env = {
                    "beta": beta,
                    "rc": rc,
                    "latest": latest,
                    "cdn": cdn,
                    "default": local
                };
                return env[target] || latest;
            };
            var TARGET_TAG = "latest";
            var environment = exports('e', environments(TARGET_TAG));
        }
    };
});
