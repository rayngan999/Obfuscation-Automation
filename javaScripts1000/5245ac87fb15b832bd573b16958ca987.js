define("components/sharedUI/dropDown",["FR","jquery","underscore"],function(n,o,r){var t={},e=function(){t.customDropDown=o(".custom_drop_down"),t.customDropDown.on("change",function(n){var t=o(n.currentTarget),e=t.find(".form-control"),c=!r.isEmpty(e.val());t.toggleClass("selected",c)})};return o(function(){return e()}),{init:e}});
//# sourceMappingURL=dropDown.js.map
