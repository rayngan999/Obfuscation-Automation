/*! grunt-grunticon Stylesheet Loader - v2.0.0-beta.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */
var pathUrl = 'icons/src/assets/css/';
var iconsCSS = ['icons.data.svg.min.css'];
(function (e) {
    function t(t, n, r, o) {
        "use strict";

        function a() {
            for (var e, n = 0; u.length > n; n++) u[n].href && (u[n].href.indexOf(t[0]) > -1 || u[n].href.indexOf(t[1]) > -1) && (e = !0);
            e ? i.media = r || "all" : setTimeout(a)
        }
        var i = e.document.createElement("link"),
            c = n || e.document.getElementsByTagName("script")[0],
            u = e.document.styleSheets;
        return i.rel = "stylesheet", i.href = t, i.onload = o || function () { }, c.parentNode.insertBefore(i, c), a(), i
    }
    var n = function (r, o) {
        "use strict";
        if (r && 3 === r.length) {
            var a = e.navigator,
                i = e.Image,
                c = !(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || !document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || e.opera && -1 === a.userAgent.indexOf("Chrome") || -1 !== a.userAgent.indexOf("Series40")),
                u = new i;
            u.onerror = function () {
                n.method = "png", t(r[2])
            }, u.onload = function () {
                var e = 1 === u.width && 1 === u.height,
                    a = r[e && c ? 0 : e ? 1 : 2];
                n.method = e && c ? "svg" : e ? "datapng" : "png", n.href = a, t(a, null, null, o)
            }, u.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", document.documentElement.className += " grunticon"
        }
    };
    n.loadCSS = t, e.grunticon = n
})(this);

(function (e, t) {
    "use strict";
    var n = t.document,
        r = '',
        z = null,
        o = function (e) {
            if (n.attachEvent ? "complete" === n.readyState : "loading" !== n.readyState) e();
            else {
                var t = !1;
                n.addEventListener("readystatechange", function () {
                    t || (t = !0, e())
                }, !1)
            }
        },
        a = function (e) {
            if (!z || (typeof z === 'Object' && Object.keys(z).length == 0)) {
                for (var t, o, a, i, c, u, s = {}, l = n.styleSheets, d = 0; l.length > d; d++)
                    if (l[d].href && (l[d].href.indexOf(e[0]) > -1 || l[d].href.indexOf(e[1]) > -1)) {
                        t = l[d];
                        break
                    }
                if (!t) return s;
                for (o = t.cssRules ? t.cssRules : t.rules, d = 0; o.length > d; d++) a = o[d].cssText, i = o[d].selectorText, c = a.split(");")[0].match(/US\-ASCII\,([^"']+)/), c && c[1] && (u = decodeURIComponent(c[1]), s[i] = u);
                z = s;
            }
            return z;
        },
        i = function (e) {
            var t, o, a;
            o = "data-grunticon-embed";
            for (var i in e)
                if (a = i.slice(r.length), t = n.querySelectorAll(a + "[" + o + "]"), t.length)
                    for (var c = 0; t.length > c; c++)
                        h(t[c], e[i], i.substr(1));
            if (Object.keys(e).length === 0) {
                var documentSelected = document.querySelectorAll("[data-grunticon-embed]");
                for (var z = 0; z < documentSelected.length; z++) {
                    h(documentSelected[z], undefined, undefined);
                }
            }
            return t
        },
        c = function () {
            o(function () {
                i(a(iconsCSS))
            })
        },
        d = function (m) {
            var l, r;
            l = z || a(iconsCSS);
            r = g(Array.prototype.slice.call(m.classList));
            h(m, l['.' + r], r);
        },
        g = function (cl) {
            var l, p;
            l = z || grunticon.getIcons(iconsCSS);
            p = Object.keys(l);
            return cl.filter(function (q) {
                return p.indexOf('.' + q) > -1 && q != 'wu-icon';
            })[0];
        },
        h = function (m, n, p) {
            if(m.getAttribute('data-wu-icon')) return;
            if (m.style.backgroundImage === 'none') m.removeAttribute('style');

            var q = (m.currentStyle ? m.currentStyle.backgroundImage.match(/US\-ASCII\,([^"']+)/): window.getComputedStyle(m).backgroundImage.match(/US\-ASCII\,([^"']+)/));

            var svgFromElement = decodeURIComponent(q && q[1])
            if (svgFromElement === 'null') svgFromElement = decodeURIComponent(n);
            var svgElement = new DOMParser().parseFromString(svgFromElement, 'application/xml');

            m.appendChild(m.ownerDocument.importNode(svgElement.documentElement, true)), m.style.backgroundImage = "none", m.removeAttribute("[data-grunticon-embed]"), m.setAttribute('data-wu-icon', m.classList[1]);
        };
    e.embedIcons = i, e.getIcons = a, e.ready = o, e.svgLoadedCallback = c, e.updateIcon = d, e.iconSet = z, e.getIcon = g;
})(grunticon, this);

var MutationObserverCallback = function (e, observer) {
    var classes = Array.prototype.slice.call(e.classList);
    var wuIcon = e.getAttribute('data-wu-icon');

    if ((
        classes.indexOf('wu-icon') > -1 &&
        e.childElementCount == 0 && classes.indexOf(wuIcon) < 0
    ) || (
            classes.indexOf('wu-icon') > -1 && (
                e.childElementCount == 1 &&
                e.firstElementChild.tagName.toLowerCase() == 'svg' &&
                classes.indexOf(wuIcon) < 0
            )
        )
    ) {
        if (grunticon.getIcon(classes)) grunticon.updateIcon(e);
        else e.innerHTML = '', e.style.backgroundImage = null, e.removeAttribute('data-wu-icon');
    } else if (e.hasChildNodes()) {
        var icons = e.querySelectorAll('.wu-icon');

        if (icons && icons.length > 0) {
            Array.prototype.slice.call(icons).forEach(function (i) {
                var classes = Array.prototype.slice.call(i.classList);
                var wuIcon = i.getAttribute('data-wu-icon');

                if (i.childElementCount == 0 || (i.childElementCount == 1 && i.firstElementChild.tagName.toLowerCase() == 'svg' && classes.indexOf(wuIcon) < 0)) {
                    grunticon.updateIcon(i);
                }
            });
        }
    }
};

var loadIcons = function() {
    grunticon.svgLoadedCallback();
    Array.prototype.slice.call(document.querySelectorAll('.wu-icon'))
        .forEach(function (wuIcon) {
            window.setTimeout(function () {
                MutationObserverCallback(wuIcon);
            }, 1);
        });
}

window.addEventListener('load', function(){
    var iconSvgCss = document.getElementById('icons-data-svg-css');

    if (iconSvgCss) {
        if (iconSvgCss.sheet && Object.keys(iconSvgCss.sheet.cssRules).length > 0) {
            loadIcons();
        } else {
            iconSvgCss.addEventListener('load', function(e) {
                loadIcons();
            });
        }
    }
});
