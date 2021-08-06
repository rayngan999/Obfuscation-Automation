// !!! for update iterate manually `browser_compatibility_serial`
"use strict";
try {
    (function () {
        var cssRequirements = [["display", "flex"], ["display", "grid"], ["color", "red"]];
        for (var i in cssRequirements) {
            if (!CSS.supports(cssRequirements[i][0], cssRequirements[i][1])) {
                throw "no-" + cssRequirements[i][0] + "-" + cssRequirements[i][1];
            }
        }
        try {
            new XMLHttpRequest();
        }
        catch (pass) {
            throw "no-ajax";
        }
        try {
            eval("var foo = (x)=>x+1");
        }
        catch (pass) {
            throw "no-es6";
        }
    })();
}
catch (e) {
    var utm = "";
    if (typeof e == "string" && /^[a-z0-9\-]+$/.test(e)) {
        utm = "?err=" + e;
    }
    window.location.replace("/unsupported/" + utm);
}
