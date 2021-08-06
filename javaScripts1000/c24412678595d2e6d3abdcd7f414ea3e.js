define("services/analyticsHelper",["FR","jquery","underscore"],function(r,t,a){return{getPageExitDelay:function(){return 250},getErrors:function(r,a){var n={};return r.find(".field-validation-error").each(function(){var r=t(this);n[r.attr("data-valmsg-for")]=r.find("span").text().trim()}),void 0!==a&&(n["catch-all-error"]=a),n},gatherErrorsOn:function(r){return r.find("[data-valmsg-for]").filter(":visible").toArray().reduce(function(r,a){var n=t(a);return r[n.attr("data-valmsg-for")]=n.attr("data-error-invalid")||n.text().trim(),r},{})},gatherAnplErrorsOn:function(r){return r.find("[data-anpl-valmsg-for]").filter(":visible").toArray().reduce(function(r,a){var n=t(a),e=(n.attr("data-anpl-error-invalid")||n.text()).trim(),i=(n.attr("data-anpl-valmsg-for")||"").trim();return e&&i&&(r[i]=e),r},{})},triggerErrorOn:function(r,t){r.trigger("errorMsgShown",t)},delayLinkRedirect:function(r,a){var n=t(r.currentTarget),e=n.attr("target"),i=n.attr("href"),o=n.is("a"),d=void 0===e||"_self"===e||"_top"===e||"_parent"===e,l=i&&"#"!==i.trim().substr(0,1)&&"/#"!==i.trim().substr(0,2)&&0!==i.trim().indexOf("javascript:");o&&d&&l&&(r.preventDefault(),setTimeout(function(){window.location.href=i},a))},whenAnplReady:function(t){var n=a.rest(arguments);window.VRI_AnalyticsLoaded?t.apply(this,n):r.$el.window.on("VRI_AnalyticsLoaded",function(){t.apply(this,n)})}}});
//# sourceMappingURL=analyticsHelper.js.map