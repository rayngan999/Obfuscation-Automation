System.register(['./index-1307bc24.system.js', './index-7ac16df2.system.js', './index-68d55745.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h, DISCLAIMER_TEXT, DISCLAIMER_CONFIGURE_LINK;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.c;
                h = module.h;
            }, function (module) {
                DISCLAIMER_TEXT = module.D;
                DISCLAIMER_CONFIGURE_LINK = module.e;
            }, function () { }],
        execute: function () {
            var disclaimerCss = ".uWq1-disclaimer-wrapper{position:fixed;bottom:24px;left:24px;right:24px}.uWq1-disclaimer-wrapper .soma-card{width:100%;max-width:initial}.uWq1-disclaimer-wrapper .soma-card:hover{cursor:initial}.uWq1-disclaimer-info{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:12px 24px}.uWq1-disclaimer-text{margin:12px 0}.uWq1-disclaimer-button{margin:12px 0}@media only screen and (max-width: 1200px){.uWq1-disclaimer-info{-ms-flex-pack:center;justify-content:center}.uWq1-disclaimer-text{text-align:justify}.uWq1-disclaimer-button{-ms-flex-item-align:center;align-self:center}}";
            var Disclaimer = exports('cookies_policy_disclaimer', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    this.configureClick = createEvent(this, "configureClick", 7);
                    this.acceptAllClick = createEvent(this, "acceptAllClick", 7);
                }
                class_1.prototype.render = function () {
                    var _a = this, zIndex = _a.zIndex, footerBackground = _a.footerBackground, footerBorder = _a.footerBorder;
                    var somaCardStyle = {};
                    if (footerBackground) {
                        somaCardStyle["background"] = footerBackground;
                    }
                    if (footerBorder) {
                        somaCardStyle["border"] = footerBorder;
                    }
                    return (h("div", { class: "uWq1-disclaimer-wrapper", style: { zIndex: zIndex } }, h("soma-card", { style: somaCardStyle }, h("div", { class: "uWq1-disclaimer-info" }, h("div", { class: "uWq1-disclaimer-text" }, h("soma-description", null, DISCLAIMER_TEXT, " ", h("soma-link", { onSomaClick: this.configureClick.emit }, DISCLAIMER_CONFIGURE_LINK))), h("div", null, h("soma-button", { size: "md", ariaLabel: "bot\u00E3o  aceitar todos os cookies", onSomaClick: this.acceptAllClick.emit, class: "uWq1-disclaimer-button" }, "aceitar todos os cookies"))))));
                };
                return class_1;
            }()));
            Disclaimer.style = disclaimerCss;
        }
    };
});
