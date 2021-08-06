if (window.TRM===undefined) {window.TRM={}};window.TRM[1627952677232892] = JSON.parse("{\"domain\":\"http:\\/\\/themenwelten.maz-online.de\",\"SIMPLE-ARTICLE-LIST\":{\"domain\":\"http:\\/\\/themenwelten.maz-online.de\"},\"viewport\":\"Desktop\",\"instanceId\":\"1627952677232892\"}"); Object.keys(window.TRM[1627952677232892]).forEach(function (k) {window.TRM[k] = window.TRM[1627952677232892][k];});;(function(data){    var domload = {
        readyStack: new Array(),
        __executeReadyStack: function () {

            var loopStack = false;

            do {

                var func = domload.readyStack.pop();

                if (typeof func == 'function') {

                    loopStack = true;
                    func.call();

                } else {
                    loopStack = false;
                }

            } while (loopStack);

        },
        ready: function (func) {

            this.readyStack.push(func);

            if (document.readyState === "complete") {

                this.__executeReadyStack();

            }

            if (document.addEventListener) {

                document.addEventListener("DOMContentLoaded", this.__executeReadyStack);
                window.addEventListener("load", this.__executeReadyStack);

            } else if (document.attachEvent) {

                document.attachEvent("onreadystatechange", this.__executeReadyStack);
                window.attachEvent("onload", this.__executeReadyStack);
            }

        }
    };

    var script_tag = false;

    /**
     * Append code to enable query selector and JSON for IE 7. NOTE use only single selector,
     * because IE7 doesn't support multiple selectors separated by `,`
     */

    if (navigator.appVersion.indexOf('MSIE 7') > -1) {

        (function (d, s) {
            d = document, s = d.createStyleSheet();
            d.querySelectorAll = function (r, c, i, j, a) {
                a = d.all, c = [], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
                for (i = r.length; i--; ) {
                    s.addRule(r[i], 'k:v');
                    for (j = a.length; j--; )
                        a[j].currentStyle.k && c.push(a[j]);
                    s.removeRule(0)
                }
                return c
            }
        })();
        (function () {
            function N(p, r) {
                function q(a) {
                    if (q[a] !== w)
                        return q[a];
                    var c;
                    if ("bug-string-char-index" == a)
                        c = "a" != "a"[0];
                    else if ("json" == a)
                        c = q("json-stringify") && q("json-parse");
                    else {
                        var e;
                        if ("json-stringify" == a) {
                            c = r.stringify;
                            var b = "function" == typeof c && s;
                            if (b) {
                                (e = function () {
                                    return 1
                                }).toJSON = e;
                                try {
                                    b = "0" === c(0) && "0" === c(new t) && '""' == c(new A) && c(u) === w && c(w) === w && c() === w && "1" === c(e) && "[1]" == c([e]) && "[null]" == c([w]) && "null" == c(null) && "[null,null,null]" == c([w, u, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' ==
                                            c({a: [e, !0, !1, null, "\x00\b\n\f\r\t"]}) && "1" === c(null, e) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new C(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == c(new C(864E13)) && '"-000001-01-01T00:00:00.000Z"' == c(new C(-621987552E5)) && '"1969-12-31T23:59:59.999Z"' == c(new C(-1))
                                } catch (f) {
                                    b = !1
                                }
                            }
                            c = b
                        }
                        if ("json-parse" == a) {
                            c = r.parse;
                            if ("function" == typeof c)
                                try {
                                    if (0 === c("0") && !c(!1)) {
                                        e = c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                        var n = 5 == e.a.length && 1 === e.a[0];
                                        if (n) {
                                            try {
                                                n = !c('"\t"')
                                            } catch (d) {
                                            }
                                            if (n)
                                                try {
                                                    n =
                                                            1 !== c("01")
                                                } catch (g) {
                                                }
                                            if (n)
                                                try {
                                                    n = 1 !== c("1.")
                                                } catch (m) {
                                                }
                                        }
                                    }
                                } catch (X) {
                                    n = !1
                                }
                            c = n
                        }
                    }
                    return q[a] = !!c
                }
                p || (p = k.Object());
                r || (r = k.Object());
                var t = p.Number || k.Number, A = p.String || k.String, H = p.Object || k.Object, C = p.Date || k.Date, G = p.SyntaxError || k.SyntaxError, K = p.TypeError || k.TypeError, L = p.Math || k.Math, I = p.JSON || k.JSON;
                "object" == typeof I && I && (r.stringify = I.stringify, r.parse = I.parse);
                var H = H.prototype, u = H.toString, v, B, w, s = new C(-0xc782b5b800cec);
                try {
                    s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() &&
                            10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds()
                } catch (Q) {
                }
                if (!q("json")) {
                    var D = q("bug-string-char-index");
                    if (!s)
                        var x = L.floor, M = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], E = function (a, c) {
                        return M[c] + 365 * (a - 1970) + x((a - 1969 + (c = +(1 < c))) / 4) - x((a - 1901 + c) / 100) + x((a - 1601 + c) / 400)
                    };
                    (v = H.hasOwnProperty) || (v = function (a) {
                        var c = {}, e;
                        (c.__proto__ = null, c.__proto__ = {toString: 1}, c).toString != u ? v = function (a) {
                            var c = this.__proto__;
                            a = a in(this.__proto__ = null, this);
                            this.__proto__ =
                                    c;
                            return a
                        } : (e = c.constructor, v = function (a) {
                            var c = (this.constructor || e).prototype;
                            return a in this && !(a in c && this[a] === c[a])
                        });
                        c = null;
                        return v.call(this, a)
                    });
                    B = function (a, c) {
                        var e = 0, b, f, n;
                        (b = function () {
                            this.valueOf = 0
                        }).prototype.valueOf = 0;
                        f = new b;
                        for (n in f)
                            v.call(f, n) && e++;
                        b = f = null;
                        e ? B = 2 == e ? function (a, c) {
                            var e = {}, b = "[object Function]" == u.call(a), f;
                            for (f in a)
                                b && "prototype" == f || v.call(e, f) || !(e[f] = 1) || !v.call(a, f) || c(f)
                        } : function (a, c) {
                            var e = "[object Function]" == u.call(a), b, f;
                            for (b in a)
                                e && "prototype" ==
                                        b || !v.call(a, b) || (f = "constructor" === b) || c(b);
                            (f || v.call(a, b = "constructor")) && c(b)
                        } : (f = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), B = function (a, c) {
                            var e = "[object Function]" == u.call(a), b, h = !e && "function" != typeof a.constructor && F[typeof a.hasOwnProperty] && a.hasOwnProperty || v;
                            for (b in a)
                                e && "prototype" == b || !h.call(a, b) || c(b);
                            for (e = f.length; b = f[--e]; h.call(a, b) && c(b))
                                ;
                        });
                        return B(a, c)
                    };
                    if (!q("json-stringify")) {
                        var U = {92: "\\\\", 34: '\\"', 8: "\\b",
                            12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"}, y = function (a, c) {
                            return("000000" + (c || 0)).slice(-a)
                        }, R = function (a) {
                            for (var c = '"', b = 0, h = a.length, f = !D || 10 < h, n = f && (D ? a.split("") : a); b < h; b++) {
                                var d = a.charCodeAt(b);
                                switch (d) {
                                    case 8:
                                    case 9:
                                    case 10:
                                    case 12:
                                    case 13:
                                    case 34:
                                    case 92:
                                        c += U[d];
                                        break;
                                    default:
                                        if (32 > d) {
                                            c += "\\u00" + y(2, d.toString(16));
                                            break
                                        }
                                        c += f ? n[b] : a.charAt(b)
                                }
                            }
                            return c + '"'
                        }, O = function (a, c, b, h, f, n, d) {
                            var g, m, k, l, p, r, s, t, q;
                            try {
                                g = c[a]
                            } catch (z) {
                            }
                            if ("object" == typeof g && g)
                                if (m = u.call(g), "[object Date]" != m || v.call(g,
                                        "toJSON"))
                                    "function" == typeof g.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || v.call(g, "toJSON")) && (g = g.toJSON(a));
                                else if (g > -1 / 0 && g < 1 / 0) {
                                    if (E) {
                                        l = x(g / 864E5);
                                        for (m = x(l / 365.2425) + 1970 - 1; E(m + 1, 0) <= l; m++)
                                            ;
                                        for (k = x((l - E(m, 0)) / 30.42); E(m, k + 1) <= l; k++)
                                            ;
                                        l = 1 + l - E(m, k);
                                        p = (g % 864E5 + 864E5) % 864E5;
                                        r = x(p / 36E5) % 24;
                                        s = x(p / 6E4) % 60;
                                        t = x(p / 1E3) % 60;
                                        p %= 1E3
                                    } else
                                        m = g.getUTCFullYear(), k = g.getUTCMonth(), l = g.getUTCDate(), r = g.getUTCHours(), s = g.getUTCMinutes(), t = g.getUTCSeconds(), p = g.getUTCMilliseconds();
                                    g = (0 >= m || 1E4 <= m ? (0 > m ? "-" : "+") + y(6, 0 > m ? -m : m) : y(4, m)) + "-" + y(2, k + 1) + "-" + y(2, l) + "T" + y(2, r) + ":" + y(2, s) + ":" + y(2, t) + "." + y(3, p) + "Z"
                                } else
                                    g = null;
                            b && (g = b.call(c, a, g));
                            if (null === g)
                                return"null";
                            m = u.call(g);
                            if ("[object Boolean]" == m)
                                return"" + g;
                            if ("[object Number]" == m)
                                return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                            if ("[object String]" == m)
                                return R("" + g);
                            if ("object" == typeof g) {
                                for (a = d.length; a--; )
                                    if (d[a] === g)
                                        throw K();
                                d.push(g);
                                q = [];
                                c = n;
                                n += f;
                                if ("[object Array]" == m) {
                                    k = 0;
                                    for (a = g.length; k < a; k++)
                                        m = O(k, g, b, h, f, n, d), q.push(m === w ? "null" :
                                                m);
                                    a = q.length ? f ? "[\n" + n + q.join(",\n" + n) + "\n" + c + "]" : "[" + q.join(",") + "]" : "[]"
                                } else
                                    B(h || g, function (a) {
                                        var c = O(a, g, b, h, f, n, d);
                                        c !== w && q.push(R(a) + ":" + (f ? " " : "") + c)
                                    }), a = q.length ? f ? "{\n" + n + q.join(",\n" + n) + "\n" + c + "}" : "{" + q.join(",") + "}" : "{}";
                                d.pop();
                                return a
                            }
                        };
                        r.stringify = function (a, c, b) {
                            var h, f, n, d;
                            if (F[typeof c] && c)
                                if ("[object Function]" == (d = u.call(c)))
                                    f = c;
                                else if ("[object Array]" == d) {
                                    n = {};
                                    for (var g = 0, k = c.length, l; g < k; l = c[g++], (d = u.call(l), "[object String]" == d || "[object Number]" == d) && (n[l] = 1))
                                        ;
                                }
                            if (b)
                                if ("[object Number]" ==
                                        (d = u.call(b))) {
                                    if (0 < (b -= b % 1))
                                        for (h = "", 10 < b && (b = 10); h.length < b; h += " ")
                                            ;
                                } else
                                    "[object String]" == d && (h = 10 >= b.length ? b : b.slice(0, 10));
                            return O("", (l = {}, l[""] = a, l), f, n, h, "", [])
                        }
                    }
                    if (!q("json-parse")) {
                        var V = A.fromCharCode, W = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, J, l = function () {
                            b = J = null;
                            throw G();
                        }, z = function () {
                            for (var a = J, c = a.length, e, h, f, k, d; b < c; )
                                switch (d = a.charCodeAt(b), d) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        b++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return e =
                                                D ? a.charAt(b) : a[b], b++, e;
                                    case 34:
                                        e = "@";
                                        for (b++; b < c; )
                                            if (d = a.charCodeAt(b), 32 > d)
                                                l();
                                            else if (92 == d)
                                                switch (d = a.charCodeAt(++b), d) {
                                                    case 92:
                                                    case 34:
                                                    case 47:
                                                    case 98:
                                                    case 116:
                                                    case 110:
                                                    case 102:
                                                    case 114:
                                                        e += W[d];
                                                        b++;
                                                        break;
                                                    case 117:
                                                        h = ++b;
                                                        for (f = b + 4; b < f; b++)
                                                            d = a.charCodeAt(b), 48 <= d && 57 >= d || 97 <= d && 102 >= d || 65 <= d && 70 >= d || l();
                                                        e += V("0x" + a.slice(h, b));
                                                        break;
                                                    default:
                                                        l()
                                                }
                                            else {
                                                if (34 == d)
                                                    break;
                                                d = a.charCodeAt(b);
                                                for (h = b; 32 <= d && 92 != d && 34 != d; )
                                                    d = a.charCodeAt(++b);
                                                e += a.slice(h, b)
                                            }
                                        if (34 == a.charCodeAt(b))
                                            return b++, e;
                                        l();
                                    default:
                                        h =
                                                b;
                                        45 == d && (k = !0, d = a.charCodeAt(++b));
                                        if (48 <= d && 57 >= d) {
                                            for (48 == d && (d = a.charCodeAt(b + 1), 48 <= d && 57 >= d) && l(); b < c && (d = a.charCodeAt(b), 48 <= d && 57 >= d); b++)
                                                ;
                                            if (46 == a.charCodeAt(b)) {
                                                for (f = ++b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++)
                                                    ;
                                                f == b && l();
                                                b = f
                                            }
                                            d = a.charCodeAt(b);
                                            if (101 == d || 69 == d) {
                                                d = a.charCodeAt(++b);
                                                43 != d && 45 != d || b++;
                                                for (f = b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++)
                                                    ;
                                                f == b && l();
                                                b = f
                                            }
                                            return+a.slice(h, b)
                                        }
                                        k && l();
                                        if ("true" == a.slice(b, b + 4))
                                            return b += 4, !0;
                                        if ("false" == a.slice(b, b + 5))
                                            return b += 5, !1;
                                        if ("null" == a.slice(b,
                                                b + 4))
                                            return b += 4, null;
                                        l()
                                }
                            return"$"
                        }, P = function (a) {
                            var c, b;
                            "$" == a && l();
                            if ("string" == typeof a) {
                                if ("@" == (D ? a.charAt(0) : a[0]))
                                    return a.slice(1);
                                if ("[" == a) {
                                    for (c = []; ; b || (b = !0)) {
                                        a = z();
                                        if ("]" == a)
                                            break;
                                        b && ("," == a ? (a = z(), "]" == a && l()) : l());
                                        "," == a && l();
                                        c.push(P(a))
                                    }
                                    return c
                                }
                                if ("{" == a) {
                                    for (c = {}; ; b || (b = !0)) {
                                        a = z();
                                        if ("}" == a)
                                            break;
                                        b && ("," == a ? (a = z(), "}" == a && l()) : l());
                                        "," != a && "string" == typeof a && "@" == (D ? a.charAt(0) : a[0]) && ":" == z() || l();
                                        c[a.slice(1)] = P(z())
                                    }
                                    return c
                                }
                                l()
                            }
                            return a
                        }, T = function (a, b, e) {
                            e = S(a, b, e);
                            e ===
                                    w ? delete a[b] : a[b] = e
                        }, S = function (a, b, e) {
                            var h = a[b], f;
                            if ("object" == typeof h && h)
                                if ("[object Array]" == u.call(h))
                                    for (f = h.length; f--; )
                                        T(h, f, e);
                                else
                                    B(h, function (a) {
                                        T(h, a, e)
                                    });
                            return e.call(a, b, h)
                        };
                        r.parse = function (a, c) {
                            var e, h;
                            b = 0;
                            J = "" + a;
                            e = P(z());
                            "$" != z() && l();
                            b = J = null;
                            return c && "[object Function]" == u.call(c) ? S((h = {}, h[""] = e, h), "", c) : e
                        }
                    }
                }
                r.runInContext = N;
                return r
            }
            var K = typeof define === "function" && define.amd, F = {"function": !0, object: !0}, G = F[typeof exports] && exports && !exports.nodeType && exports, k = F[typeof window] &&
                    window || this, t = G && F[typeof module] && module && !module.nodeType && "object" == typeof global && global;
            !t || t.global !== t && t.window !== t && t.self !== t || (k = t);
            if (G && !K)
                N(k, G);
            else {
                var L = k.JSON, Q = k.JSON3, M = !1, A = N(k, k.JSON3 = {noConflict: function () {
                        M || (M = !0, k.JSON = L, k.JSON3 = Q, L = Q = null);
                        return A
                    }});
                k.JSON = {parse: A.parse, stringify: A.stringify}
            }
            K && define(function () {
                return A
            })
        }).call(this);

    }

    function evalScript(elem) {
        var data = (elem.text || elem.textContent || elem.innerHTML || ""),
                head = document.getElementsByTagName("head")[0] ||
                document.documentElement,
                script = document.createElement("script");

        script.type = "text/javascript";
        try {
            // doesn't work on ie...
            script.appendChild(document.createTextNode(data));
        } catch (e) {
            // IE has funky script nodes
            script.text = data;
        }

        head.insertBefore(script, head.firstChild);
        head.removeChild(script);
    }
    ;

    /**
     * Add event listeners to the pagination element and load the content
     * via script tags instead of actual page redirection
     * @param NodeList links the A tags holding the pagination urls
     */
    function initPagination(links) {

        var paginationListener = function (evt) {

            /**
             * IE backward compatibility.
             */
            if (typeof evt.preventDefault != 'function') {
                evt.returnValue = false;
            } else {
                evt.preventDefault();
                evt.stopPropagation();
            }

            loadPage(this);

        }

        var i;

        for (i = 0; i < links.length; i++) {
            /**
             * IE backwards compatibility
             */
            if (typeof links[i].addEventListener != 'function') {
                links[i].attachEvent('onclick', paginationListener);
            } else {
                links[i].addEventListener('click', paginationListener);
            }
        }

    }
    ;

    data = JSON.parse(data);
    /*
     * if script tag id is set in get params of the request
     */
    
    if (!script_tag && data['scriptid']) {
        
        script_tag = document.querySelector("script#" + data['scriptid']);
    }
    /*
     * check for default trm widget tag id, depricated
     */
    if (!script_tag) {
        script_tags = document.querySelectorAll("#TRM_teaser_widget_list");
        if (script_tags.length) {
            script_tag = script_tags[0];
        }
    }

    /*
     * fallback2
     */
    if (!script_tag) {
        var scripts = document.getElementsByTagName('script');
        script_tag = scripts[ scripts.length - 1 ];
    }
    var parentNodeOfScriptTag = false;
    if (script_tag) {
        var parentNodeOfScriptTag = script_tag.parentNode
    }

    domload.ready(function () {
        
        data.selector = data.selector=='ignoreSelector'?false:data.selector;
        data.placement = data.placement=='ignorePlaceholder'?false:data.placement

        if (data['selector']) {
            data['selector'] = decodeURIComponent(data['selector']).replace('$', '#')

            var containerElements = document.querySelectorAll(data['selector']);

            if (containerElements.length) {
                var containerElement = containerElements[0];
                switch (data['placement']) {
                    case 'append':
                        containerElement.innerHTML += data['html'];
                        break;
                    case 'prepend' :
                        containerElement.innerHTML = data['html'] + containerElement.innerHTML;
                        break;
                    case 'before':
                    case 'after':
                        var div = document.createElement('div')
                        div.innerHTML = data['html']
                        var parentElement = containerElement.parentNode
                        if (data['placement'] == 'before') {
                            parentElement.insertBefore(div, containerElement);
                        } else if (containerElement.nextSibling) {
                            parentElement.insertBefore(div, containerElement.nextSibling);
                        } else {
                            parentElement.append(data['html'])
                        }
                        break;
                    default:
                        containerElement.innerHTML = data['html'];
                }
                /**
                 * Execute any additional javascript coming from th widget template
                 */
                var widgetScript = containerElement.querySelector('script');
                if (widgetScript) {
                    evalScript(widgetScript);
                }
            }

        } else if (parentNodeOfScriptTag) {
            /**
             * The index is always 0 because the children are removed once appended to the real parent.
             */
            var htmlElementsHolder = document.createElement('div');
                htmlElementsHolder.innerHTML = data['html'];

                var child;
                
              if (script_tag && data['scriptid']) {
                     script_tag = document.querySelector("script#" + data['scriptid']) || script_tag
              }
            if (script_tag) {
                  parentNodeOfScriptTag = script_tag.parentNode || parentNodeOfScriptTag
             }

                /**
                 * The index is always 0 because the children are removed once appended to the real parent.
                 */
                while (child = htmlElementsHolder.children.item(0)) {
                    if (data['placement'] == 'prepend') {
                        parentNodeOfScriptTag.prepend(child);
                    } else {
                        if(parentNodeOfScriptTag.append !== undefined) {
                            parentNodeOfScriptTag.append(child);
                        } else {
                            parentNodeOfScriptTag.appendChild(child);
                        }
                    }
                }

                /**
                 * Execute any additional javascript coming from th widget template
                 */
                var widgetScript = parentNodeOfScriptTag.querySelector('script');
                if (widgetScript) {
                    evalScript(widgetScript);
                }

        }
        /**
         * Init pagination by attaching event listeners to all link with are inside a container with class trmWidgetPagination
         */
        var paginationLinks = document.querySelectorAll('.trmWidgetPagination a');


        if (paginationLinks.length) {
            initPagination(paginationLinks);
        }
        
        var instanceId=1627952677232892;

var trackingObserver;
var rootMargin = 20;
var timeoutSetting = 10;
if ('IntersectionObserver' in window === false) {
    var jq1 = document.createElement('script');
    jq1.src = "https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver";
    document.getElementsByTagName('head')[0].appendChild(jq1);
    timeoutSetting = 200;
}

var sendData = {
    hitType: 'event',
    eventCategory: 'visible',
    eventAction: 'visible',
    eventLabel: 'Default label'
};
setTimeout(function () {
    if ("IntersectionObserver" in window) {
        trackingObserver = new IntersectionObserver(function (entries, observer) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    var track = entries[i].target;
                    sendData.eventLabel = getPathFromUrl(track.href);
                    if ('TRM' in window && 'trackWithAdobe' in window.TRM) {
                        sendDataToAdobe(sendData);
                    } else {
                        sendToGaTracker(sendData);
                        sendDataMatomo(sendData);
                    }
                    trackingObserver.unobserve(track);
                }
            }
        }, {rootMargin: rootMargin + 'px'});
        pushToObserver();
    }

}, timeoutSetting);


 
function extractHostname(url) {
    var hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    } else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}



function getElements() {
    var trackingElements = [];
    var hrefs = [];
    for (var i = document.links.length; i-- > 0; ) {
        if (document.links[i].hostname === extractHostname(window.TRM.domain) && hrefs.includes(document.links[i].href) === false) {
            trackingElements.push(document.links[i]);
            hrefs.push(document.links[i].href)
        }
    }
    return trackingElements;
}

function getPathFromUrl(url) {
    return url.split("?")[0];
}

function pushToObserver() {
    var trackingElements = getElements();
    for (var i = 0; i < trackingElements.length; i++) {
        var track = trackingElements[i];
        trackingObserver.observe(track);
    }
}

function sendToGaTracker(sendData) {
    if (typeof ga != 'function') {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            if (m !== undefined) {
                m.parentNode.insertBefore(a, m);
            }
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
    }
    if (typeof gtag === "function") {
        gtag('event', "visible", {
            'event_category': sendData.eventCategory,
            'event_label': sendData.eventLabel,
            'value': sendData.eventLabel
        });
    } else {
        ga("Transmatico.send", sendData);
    }

}



function sendDataToAdobe(data) {

    var newData = {};
    newData.event_name = "Transmatico";
    newData.event_action = data.eventCategory;
    newData.event_label = data.eventLabel;
    utag.link(newData);
}

function sendDataMatomo(data) {
    if (typeof window._paq !== 'undefined') {
        window._paq.push(['trackEvent', data.eventCategory, data.eventAction, data.eventLabel]);
    }
}
 ;/**
 shave - Shave is a javascript plugin that truncates multi-line text within a html element based on set max height
 @version v2.5.2
 @link https://github.com/dollarshaveclub/shave#readme
 @author Jeff Wainwright <yowainwright@gmail.com> (jeffry.in)
 @license MIT
 **/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
            typeof define === 'function' && define.amd ? define(factory) :
            (global.shave = factory());
}(this, (function () {
    'use strict';

    function shave(target, maxHeight) {
        var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (!maxHeight)
            throw Error('maxHeight is required');
        var els = typeof target === 'string' ? document.querySelectorAll(target) : target;
        if (!els)
            return;
        var character = opts.character || 'â¦';
        var classname = opts.classname || 'js-shave';
        var spaces = typeof opts.spaces === 'boolean' ? opts.spaces : true;
        var charHtml = "<span class=\"js-shave-char\">".concat(character, "</span>");
        if (!('length' in els))
            els = [els];

        for (var i = 0; i < els.length; i += 1) {
            var el = els[i];
            var styles = el.style;
            var span = el.querySelector(".".concat(classname));
            var textProp = el.textContent === undefined ? 'innerText' : 'textContent'; // If element text has already been shaved

            if (span) {
                // Remove the ellipsis to recapture the original text
                el.removeChild(el.querySelector('.js-shave-char'));
                el[textProp] = el[textProp]; // eslint-disable-line
                // nuke span, recombine text
            }

            var fullText = el[textProp];
            var words = spaces ? fullText.split(' ') : fullText; // If 0 or 1 words, we're done

            if (words.length < 2)
                continue; // Temporarily remove any CSS height for text height calculation

            var heightStyle = styles.height;
            styles.height = 'auto';
            var maxHeightStyle = styles.maxHeight;
            styles.maxHeight = 'none'; // If already short enough, we're done

            if (el.offsetHeight <= maxHeight) {
                styles.height = heightStyle;
                styles.maxHeight = maxHeightStyle;
                continue;
            } // Binary search for number of words which can fit in allotted height


            var max = words.length - 1;
            var min = 0;
            var pivot = void 0;

            while (min < max) {
                pivot = min + max + 1 >> 1; // eslint-disable-line no-bitwise

                el[textProp] = spaces ? words.slice(0, pivot).join(' ') : words.slice(0, pivot);
                el.insertAdjacentHTML('beforeend', charHtml);
                if (el.offsetHeight > maxHeight)
                    max = spaces ? pivot - 1 : pivot - 2;
                else
                    min = pivot;
            }

            el[textProp] = spaces ? words.slice(0, max).join(' ') : words.slice(0, max);
            el.insertAdjacentHTML('beforeend', charHtml);
            var diff = spaces ? " ".concat(words.slice(max).join(' ')) : words.slice(max);
            el.insertAdjacentHTML('beforeend', "<span class=\"".concat(classname, "\" style=\"display:none;\">").concat(diff, "</span>"));
            styles.height = heightStyle;
            styles.maxHeight = maxHeightStyle;
        }
    }

    return shave;

})));;window.TRM.widgetGoogleAnalyticsTrackingId='UA-88909076-2';;shave('.trm-shave-description> p',100);
shave('.trm-shave-title',70);
shave('.trm-shave-short',30);;if (window.TRM.widgetGoogleAnalyticsTrackingId && window.widgetTRMgoogle_analytics_is_ini === undefined) {
    window.widgetTRMgoogle_analytics_is_ini = true;
    
    window.TRM.widgetGaTrack = function() {
      if (typeof ga == 'undefined') return;
      ga("create", window.TRM.widgetGoogleAnalyticsTrackingId, "auto", "Transmatico");
      ga("Transmatico.set", "anonymizeIp", true);
      ga("Transmatico.send", "pageview");
    }

    if (typeof ga == 'undefined') {
        var gascript = document.createElement('script');
        gascript.setAttribute('async', true);
        gascript.onload = window.TRM.widgetGaTrack;
        document.getElementsByTagName('head')[0].appendChild(gascript);

        gascript.setAttribute('src', 'https://www.google-analytics.com/analytics.js');
    } else {
        window.TRM.widgetGaTrack();
    }
};
if (window.TRM.widgetGoogleAnalyticsTrackingId && window.widgetTRMgoogle_analytics_is_ini === undefined) {
    window.widgetTRMgoogle_analytics_is_ini = true;

    if (typeof ga == 'undefined') {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    }

    ga("create", window.TRM.widgetGoogleAnalyticsTrackingId, "auto", "Transmatico");
    ga("Transmatico.send", "pageview");
};
;

    });

    /**
     * The function searches for parent element with class trmWidgetOutmostwarpper in order to know where to place the 
     * contents of the next page
     */
    var loadPage = function (linkElement) {

        var outerWrapper = false;

        var relativeUrl = linkElement.getAttribute('href');

        /**
         * Search for parent which will be replaced with the new content.
         */
        do {
            var parent = linkElement.parentNode;

            /**
             * If we reached the body the outer most wrapper is missing
             */
            if (parent.tagName == 'BODY')
                break;

            var parentClass = parent.getAttribute('class');

            if (parentClass.length && parentClass.indexOf('trmWidgetOutmostwarpper') > -1) {

                outerWrapper = parent;
                break;

            }

            linkElement = parent;

        } while (true);

        /**
         * If there is no outer element abbort
         */
        if (!outerWrapper)
            return;

        var url = '';
        var baseUrl = outerWrapper.getAttribute('data-baseurl');

        if (baseUrl.length) {
            url = baseUrl;
        }

        url += relativeUrl;

        /**
         * Create a script tag or update the url of the existing tag in order to get the new content.
         */

        var paginationScriptTag = document.querySelector('#trmPaginationScriptTag');
        if (paginationScriptTag) {
            paginationScriptTag.parentNode.removeChild(paginationScriptTag);
        }

        paginationScriptTag = document.createElement('script');
        paginationScriptTag.setAttribute('id', 'trmPaginationScriptTag');
        paginationScriptTag.setAttribute('type', 'text/javascript');

        document.getElementsByTagName('body')[0].appendChild(paginationScriptTag);

        /**
         * When the script is loaded and the new data is available this
         * function will replace the old element by removing it and appending the new
         * content to the parent element and will reinitialise the paginations
         * listeners
         */

        var onLoadFunction = function () {

            var htmlElementsHolder = document.createElement('div');
            /**
             * The window.trmPaginationHTML will hold the new data loaded from the server
             */
            var pageData = JSON.parse(window.trmPaginationHTML);

            htmlElementsHolder.innerHTML = pageData['html'];

            var outerParent = outerWrapper.parentNode;
            if (outerParent) {

                outerParent.removeChild(outerWrapper);

                var child;
                /**
                 * The index is always 0 because the children are removed once appended to the real parent.
                 */
                while (child = htmlElementsHolder.children.item(0)) {

                    outerParent.appendChild(child);
                }

            }

            var paginationLinks = document.querySelectorAll('.trmWidgetPagination a');
            initPagination(paginationLinks);

        };

        /**
         * Older IE do not support addEventListener so we need to check
         */
        if (typeof paginationScriptTag.addEventListener != 'function') {

            paginationScriptTag.attachEvent('onload', onLoadFunction);

        } else {
            paginationScriptTag.addEventListener('load', onLoadFunction);
        }

        /**
         * Instruct the server to return only data without the loading function
         */
        if (url.indexOf('onlydata') == -1) {
            url += '&onlydata=1';
        }

        paginationScriptTag.setAttribute('src', url);

    }})("{\"service\":\"articleteasers\",\"viewport\":\"Desktop\",\"mobileDeviceType\":\"\",\"newspaperId\":\"16900\",\"domainId\":\"259\",\"categoryId\":false,\"advertorialId\":false,\"dataExportSchemaId\":\"18\",\"dataExportSchemaIds\":false,\"selector\":false,\"excludeIds\":[],\"language\":null,\"autoLanguage\":\"de\",\"scriptid\":\"trm-widget-fFuEbMPuJEYbqZXLJIEUw1\",\"blockName\":false,\"blockIndex\":false,\"page_type\":\"DataExport\",\"widgetsIds\":false,\"widgetId\":\"1\",\"bannerFormatId\":false,\"bannerFormatAlias\":\"\",\"bannerFormatName\":\"\",\"previewVersion\":false,\"ads\":false,\"processingSchemaModel\":false,\"html\":\"<style>.trmShow {\\n  opacity: 1 !important;\\n  transition: opacity 1000ms;\\n}\\n\\n.trmHide {\\n  opacity: 0 !important;\\n  transition: opacity 1000ms;\\n} <\\/style><div id=\\\"sdg_rectangle2_anz\\\" class=\\\"sdgAnzeigenkennung sdgAnz-rectangle2\\\" style=\\\"display: block;float:right;margin-bottom:7px;\\\"><\\/div><div class=\\\"TRM-widget pdb-blockmenu row\\\">\\n    <div class=\\\"pdb-blockmenu-top col-12\\\">\\n        <div class=\\\"row\\\">\\n            <h2 class=\\\"pdb-blockmenu-left pdb-blockmenu-left_standard\\\">\\n                <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\\" target=\\\"_self\\\" class=\\\"pdb-blockmenu-headline pdb-blockmenu-headline_link\\\">\\n                    Themenwelten\\n                <\\/a>\\n            <\\/h2>\\n            <span class=\\\"trm-anzeige\\\">Anzeige<\\/span>\\n        <\\/div>\\n    <\\/div>\\n<\\/div>\\n<div class=\\\"row \\\">\\n    <div class=\\\"pdb-teaser pdb-teaser3-row row\\\">\\n        <div class=\\\"pdb-teaser3-row-item col-4\\\">\\n    <div class=\\\"pdb-teaser3-teaser\\\">\\n        <div class=\\\"pdb-image pdb-teaser3-image\\\">\\n            <div class=\\\"TRMTeaserImageBG\\\" style=\\\"background-image:url(\'https:\\/\\/trmcdn.eu\\/system-images\\/Thumbnails\\/image_Vs9lPi.jpg\');; background-position:50% 50%;object-position:50% 50%;background-size:cover;object-fit:cover;;height:100%;width:100%; position:relative;\\\" >\\n                <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\/vhs-brandenburg-umzug-upstallstrasse-kursraeume-onlinekurse-140364?utm_source=https%3A%2F%2Fwww.maz-online.de%2F&utm_medium=teaser_box&utm_campaign=brandenburg_havel&utm_term=Die%2520VHS%2520Brandenburg%2520zieht%2520um\\\" style=\\\"position:absolute;top:0px;bottom:0px;left:0px;right:0px;\\\" >\\n                    \\n                <\\/a>\\n            <\\/div>\\n        <\\/div>\\n        <div class=\\\"pdb-teaser3-teaser-breadcrumb\\\">\\n            <a class=\\\"pdb-teaser3-teaser-breadcrumb-frontpage\\\" href=\\\"http:\\/\\/themenwelten.maz-online.de\\/brandenburg_havel\\\">Brandenburg\\/Havel<\\/a>\\n\\n            <span class=\\\"pdb-teaser3-teaser-breadcrumb-separator\\\"><\\/span>\\n\\n            <h2 class=\\\"pdb-teaser3-teaser-breadcrumb-headline\\\">\\n                <span class=\\\"pdb-teaser3-teaser-breadcrumb-headline-shorttitle trm-shave-short\\\">Stadt Brandenburg. Besser lernen an der Havel<\\/span>\\n                <span class=\\\"pdb-teaser3-teaser-breadcrumb-headline-title\\\">\\n                    <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\/vhs-brandenburg-umzug-upstallstrasse-kursraeume-onlinekurse-140364?utm_source=https%3A%2F%2Fwww.maz-online.de%2F&utm_medium=teaser_box&utm_campaign=brandenburg_havel&utm_term=Die%2520VHS%2520Brandenburg%2520zieht%2520um\\\" class=\\\"pdb-teaser3-teaser-breadcrumb-headline-title-link trm-shave-title\\\" >Die VHS Brandenburg zieht um<\\/a>\\n                <\\/span>\\n            <\\/h2>\\n        <\\/div>\\n\\n        <div class=\\\"pdb-teaser3-teaser-intro\\\">\\n            <div class=\\\"ezxmltext-field trm-shave-description\\\">\\n                <p>Am 30. Juni verl\\u00e4sst die Volkshochschule ihre angestammten R\\u00e4ume am Wredowplatz 1 und siedelt mit der Gesch\\u00e4ftsstelle und einem Teil der Kurszimmer in die frisch renovierten und neu gestalteten... <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\/vhs-brandenburg-umzug-upstallstrasse-kursraeume-onlinekurse-140364?utm_source=https%3A%2F%2Fwww.maz-online.de%2F&utm_medium=teaser_box&utm_campaign=brandenburg_havel&utm_term=Die%2520VHS%2520Brandenburg%2520zieht%2520um\\\">mehr<\\/a><\\/p>\\n                <span><\\/span>\\n            <\\/div>\\n        <\\/div>\\n    <\\/div>\\n<\\/div><div class=\\\"pdb-teaser3-row-item col-4\\\">\\n    <div class=\\\"pdb-teaser3-teaser\\\">\\n        <div class=\\\"pdb-image pdb-teaser3-image\\\">\\n            <div class=\\\"TRMTeaserImageBG\\\" style=\\\"background-image:url(\'https:\\/\\/trmcdn.eu\\/system-images\\/Thumbnails\\/image_GV05uV.jpg\');; background-position:50% 50%;object-position:50% 50%;background-size:cover;object-fit:cover;;height:100%;width:100%; position:relative;\\\" >\\n                <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\/kinderleicht-steuern-beim-fiskus-sparen-138878?utm_source=https%3A%2F%2Fwww.maz-online.de%2F&utm_medium=teaser_box&utm_campaign=flaeming&utm_term=Kinderleicht%2520Steuern%2520beim%2520Fiskus%2520sparen\\\" style=\\\"position:absolute;top:0px;bottom:0px;left:0px;right:0px;\\\" >\\n                    \\n                <\\/a>\\n            <\\/div>\\n        <\\/div>\\n        <div class=\\\"pdb-teaser3-teaser-breadcrumb\\\">\\n            <a class=\\\"pdb-teaser3-teaser-breadcrumb-frontpage\\\" href=\\\"http:\\/\\/themenwelten.maz-online.de\\/flaeming\\\">Fl\\u00e4ming<\\/a>\\n\\n            <span class=\\\"pdb-teaser3-teaser-breadcrumb-separator\\\"><\\/span>\\n\\n            <h2 class=\\\"pdb-teaser3-teaser-breadcrumb-headline\\\">\\n                <span class=\\\"pdb-teaser3-teaser-breadcrumb-headline-shorttitle trm-shave-short\\\">Partner f&uuml;r Recht, Steuern und Versicherungen<\\/span>\\n                <span class=\\\"pdb-teaser3-teaser-breadcrumb-headline-title\\\">\\n                    <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\/kinderleicht-steuern-beim-fiskus-sparen-138878?utm_source=https%3A%2F%2Fwww.maz-online.de%2F&utm_medium=teaser_box&utm_campaign=flaeming&utm_term=Kinderleicht%2520Steuern%2520beim%2520Fiskus%2520sparen\\\" class=\\\"pdb-teaser3-teaser-breadcrumb-headline-title-link trm-shave-title\\\" >Kinderleicht Steuern beim Fiskus sparen<\\/a>\\n                <\\/span>\\n            <\\/h2>\\n        <\\/div>\\n\\n        <div class=\\\"pdb-teaser3-teaser-intro\\\">\\n            <div class=\\\"ezxmltext-field trm-shave-description\\\">\\n                <p>Sonderausgaben sind steuerlich absetzbaren. Dazu geh\\u00f6ren auch Kinder-Betreuungskosten. Maximal k\\u00f6nnen rund 4000 Euro pro Jahr und Kind von der Einkommenssteuer abgezogen werden.... <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\/kinderleicht-steuern-beim-fiskus-sparen-138878?utm_source=https%3A%2F%2Fwww.maz-online.de%2F&utm_medium=teaser_box&utm_campaign=flaeming&utm_term=Kinderleicht%2520Steuern%2520beim%2520Fiskus%2520sparen\\\">mehr<\\/a><\\/p>\\n                <span><\\/span>\\n            <\\/div>\\n        <\\/div>\\n    <\\/div>\\n<\\/div><div class=\\\"pdb-teaser3-row-item col-4\\\">\\n    <div class=\\\"pdb-teaser3-teaser\\\">\\n        <div class=\\\"pdb-image pdb-teaser3-image\\\">\\n            <div class=\\\"TRMTeaserImageBG\\\" style=\\\"background-image:url(\'https:\\/\\/trmcdn.eu\\/system-images\\/Thumbnails\\/image_4tzA1P.jpg\');; background-position:50% 50%;object-position:50% 50%;background-size:cover;object-fit:cover;;height:100%;width:100%; position:relative;\\\" >\\n                <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\/gefaehrliche-kopfspruenge-144159?utm_source=https%3A%2F%2Fwww.maz-online.de%2F&utm_medium=teaser_box&utm_campaign=zossen&utm_term=Gef%25C3%25A4hrliche%2520Kopfspr%25C3%25BCnge\\\" style=\\\"position:absolute;top:0px;bottom:0px;left:0px;right:0px;\\\" >\\n                    \\n                <\\/a>\\n            <\\/div>\\n        <\\/div>\\n        <div class=\\\"pdb-teaser3-teaser-breadcrumb\\\">\\n            <a class=\\\"pdb-teaser3-teaser-breadcrumb-frontpage\\\" href=\\\"http:\\/\\/themenwelten.maz-online.de\\/zossen\\\">Zossen<\\/a>\\n\\n            <span class=\\\"pdb-teaser3-teaser-breadcrumb-separator\\\"><\\/span>\\n\\n            <h2 class=\\\"pdb-teaser3-teaser-breadcrumb-headline\\\">\\n                <span class=\\\"pdb-teaser3-teaser-breadcrumb-headline-shorttitle trm-shave-short\\\">Bitte bleiben Sie gesund<\\/span>\\n                <span class=\\\"pdb-teaser3-teaser-breadcrumb-headline-title\\\">\\n                    <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\/gefaehrliche-kopfspruenge-144159?utm_source=https%3A%2F%2Fwww.maz-online.de%2F&utm_medium=teaser_box&utm_campaign=zossen&utm_term=Gef%25C3%25A4hrliche%2520Kopfspr%25C3%25BCnge\\\" class=\\\"pdb-teaser3-teaser-breadcrumb-headline-title-link trm-shave-title\\\" >Gef\\u00e4hrliche Kopfspr\\u00fcnge<\\/a>\\n                <\\/span>\\n            <\\/h2>\\n        <\\/div>\\n\\n        <div class=\\\"pdb-teaser3-teaser-intro\\\">\\n            <div class=\\\"ezxmltext-field trm-shave-description\\\">\\n                <p>Was als harmloser Badespa\\u00df anf\\u00e4ngt, kann im Rollstuhl enden. Vor allem junge M\\u00e4nner verletzen sich oft bei Kopfspr\\u00fcngen in flache Gew\\u00e4sser an der Halswirbels\\u00e4ule. Orthop\\u00e4den und Chirurgen... <a href=\\\"http:\\/\\/themenwelten.maz-online.de\\/gefaehrliche-kopfspruenge-144159?utm_source=https%3A%2F%2Fwww.maz-online.de%2F&utm_medium=teaser_box&utm_campaign=zossen&utm_term=Gef%25C3%25A4hrliche%2520Kopfspr%25C3%25BCnge\\\">mehr<\\/a><\\/p>\\n                <span><\\/span>\\n            <\\/div>\\n        <\\/div>\\n    <\\/div>\\n<\\/div>\\n    <\\/div>\\n<\\/div><style>.TRM-widget.pdb-blockmenu {\\nposition: relative;\\n}\\n\\n.trm-anzeige {\\nright: 14px;\\n} .trm-anzeige {\\r\\n    position: absolute;\\r\\n    top: 15px;\\r\\n    right: 0;\\r\\n    font: 400 15px\\/19px \\\"Fira Sans\\\",Arial,sans-serif;\\r\\n    color: #667c99;\\r\\n} \\n\\n\\n\\n\\n\\/* Source file URL:backoffice.transmatico.com\\/css\\/general_widgets.css *\\/\\n\\/* for article & hubpage separator *\\/\\r\\n.trmAnzeigeSeparator{\\r\\n    height: 40px; \\r\\n    position: relative;\\r\\n}\\r\\n.trmAnzeigeSeparator .trmAnzeigeText{\\r\\n    padding:0px 10px; \\r\\n    position: absolute; \\r\\n    background-color: white;\\r\\n    top: 50%;\\r\\n    left: 50%; \\r\\n    transform:translate(-50%,-50%);\\r\\n    -webkit-transform:translate(-50%,-50%);\\r\\n    text-align: center; \\r\\n    z-index: 3; \\r\\n    color: rgb(137, 137, 137);\\r\\n}\\r\\n.trmAnzeigeSeparator .trmAnzeigeLine{\\r\\n    position: absolute; \\r\\n    background-color: rgb(137, 137, 137); \\r\\n    height: 2px; \\r\\n    top: 50%;\\r\\n    transform:translateY(-50%);\\r\\n    -webkit-transform:translateY(-50%);\\r\\n    left: 0px; \\r\\n    right: 0px;\\r\\n}\\r\\n\\r\\n.TRM-no-display {\\r\\n    display: none !important;\\r\\n}\\r\\n\\r\\n\\/*hubpage teaser list*\\/\\r\\n.TRMTeaserImageBG {\\r\\n    background-repeat:no-repeat;\\r\\n    background-position:center center;\\r\\n    background-size:cover;\\r\\n    object-fit:cover;\\r\\n    object-position:center center;\\r\\n}\\r\\n\\r\\n\\/*TRMHubpageRightsideImageCommon*\\/\\r\\n.TRMHubpageRightsideImageCommon{\\r\\n    width:100%;\\r\\n}\\r\\n.trmSvNameLink{\\r\\n    color: inherit !important;\\r\\n}\\r\\n\\r\\na.TRM_right_side_advertorial_image_button>img,\\r\\nimg.TRM_right_side_title_image {\\r\\n    width:100%;\\r\\n}\\r\\n\\r\\n.widget_transmatico_sidebar #html_structura_area_v2{\\r\\n    overflow: hidden;\\r\\n}\\r\\n<\\/style>\"}")