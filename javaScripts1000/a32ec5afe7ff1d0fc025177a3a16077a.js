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
System.register(['./index-1307bc24.system.js'], function (exports) {
    'use strict';
    var Host, getElement, h;
    return {
        setters: [function (module) {
                Host = module.H;
                getElement = module.g;
                h = module.h;
            }],
        execute: function () {
            exports('c', css);
            function stylis_min(W) {
                function M(d, c, e, h, a) {
                    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
                        g = e.charCodeAt(l);
                        l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
                        if (0 === b + n + v + m) {
                            if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
                                switch (g) {
                                    case 32:
                                    case 9:
                                    case 59:
                                    case 13:
                                    case 10:
                                        break;
                                    default:
                                        f += e.charAt(l);
                                }
                                g = 59;
                            }
                            switch (g) {
                                case 123:
                                    f = f.trim();
                                    q = f.charCodeAt(0);
                                    k = 1;
                                    for (t = ++l; l < B;) {
                                        switch (g = e.charCodeAt(l)) {
                                            case 123:
                                                k++;
                                                break;
                                            case 125:
                                                k--;
                                                break;
                                            case 47:
                                                switch (g = e.charCodeAt(l + 1)) {
                                                    case 42:
                                                    case 47:
                                                        a: {
                                                            for (u = l + 1; u < J; ++u) {
                                                                switch (e.charCodeAt(u)) {
                                                                    case 47:
                                                                        if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                                                            l = u + 1;
                                                                            break a;
                                                                        }
                                                                        break;
                                                                    case 10:
                                                                        if (47 === g) {
                                                                            l = u + 1;
                                                                            break a;
                                                                        }
                                                                }
                                                            }
                                                            l = u;
                                                        }
                                                }
                                                break;
                                            case 91:
                                                g++;
                                            case 40:
                                                g++;
                                            case 34:
                                            case 39:
                                                for (; l++ < J && e.charCodeAt(l) !== g;) {
                                                }
                                        }
                                        if (0 === k)
                                            break;
                                        l++;
                                    }
                                    k = e.substring(t, l);
                                    0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
                                    switch (q) {
                                        case 64:
                                            0 < r && (f = f.replace(N, ''));
                                            g = f.charCodeAt(1);
                                            switch (g) {
                                                case 100:
                                                case 109:
                                                case 115:
                                                case 45:
                                                    r = c;
                                                    break;
                                                default:
                                                    r = O;
                                            }
                                            k = M(c, r, k, g, a + 1);
                                            t = k.length;
                                            0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                                            if (0 < t)
                                                switch (g) {
                                                    case 115:
                                                        f = f.replace(da, ea);
                                                    case 100:
                                                    case 109:
                                                    case 45:
                                                        k = f + '{' + k + '}';
                                                        break;
                                                    case 107:
                                                        f = f.replace(fa, '$1 $2');
                                                        k = f + '{' + k + '}';
                                                        k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                                                        break;
                                                    default:
                                                        k = f + k, 112 === h && (k = (p += k, ''));
                                                }
                                            else
                                                k = '';
                                            break;
                                        default:
                                            k = M(c, X(c, f, I), k, h, a + 1);
                                    }
                                    F += k;
                                    k = I = r = u = q = 0;
                                    f = '';
                                    g = e.charCodeAt(++l);
                                    break;
                                case 125:
                                case 59:
                                    f = (0 < r ? f.replace(N, '') : f).trim();
                                    if (1 < (t = f.length))
                                        switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
                                            case 0:
                                                break;
                                            case 64:
                                                if (105 === g || 99 === g) {
                                                    G += f + e.charAt(l);
                                                    break;
                                                }
                                            default:
                                                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                                        }
                                    I = r = u = q = 0;
                                    f = '';
                                    g = e.charCodeAt(++l);
                            }
                        }
                        switch (g) {
                            case 13:
                            case 10:
                                47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
                                0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
                                z = 1;
                                D++;
                                break;
                            case 59:
                            case 125:
                                if (0 === b + n + v + m) {
                                    z++;
                                    break;
                                }
                            default:
                                z++;
                                y = e.charAt(l);
                                switch (g) {
                                    case 9:
                                    case 32:
                                        if (0 === n + m + b)
                                            switch (x) {
                                                case 44:
                                                case 58:
                                                case 9:
                                                case 32:
                                                    y = '';
                                                    break;
                                                default:
                                                    32 !== g && (y = ' ');
                                            }
                                        break;
                                    case 0:
                                        y = '\\0';
                                        break;
                                    case 12:
                                        y = '\\f';
                                        break;
                                    case 11:
                                        y = '\\v';
                                        break;
                                    case 38:
                                        0 === n + b + m && (r = I = 1, y = '\f' + y);
                                        break;
                                    case 108:
                                        if (0 === n + b + m + E && 0 < u)
                                            switch (l - u) {
                                                case 2:
                                                    112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                                                case 8:
                                                    111 === K && (E = K);
                                            }
                                        break;
                                    case 58:
                                        0 === n + b + m && (u = l);
                                        break;
                                    case 44:
                                        0 === b + v + n + m && (r = 1, y += '\r');
                                        break;
                                    case 34:
                                    case 39:
                                        0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                                        break;
                                    case 91:
                                        0 === n + b + v && m++;
                                        break;
                                    case 93:
                                        0 === n + b + v && m--;
                                        break;
                                    case 41:
                                        0 === n + b + m && v--;
                                        break;
                                    case 40:
                                        if (0 === n + b + m) {
                                            if (0 === q)
                                                switch (2 * x + 3 * K) {
                                                    case 533:
                                                        break;
                                                    default:
                                                        q = 1;
                                                }
                                            v++;
                                        }
                                        break;
                                    case 64:
                                        0 === b + v + n + m + u + k && (k = 1);
                                        break;
                                    case 42:
                                    case 47:
                                        if (!(0 < n + m + v))
                                            switch (b) {
                                                case 0:
                                                    switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                                                        case 235:
                                                            b = 47;
                                                            break;
                                                        case 220:
                                                            t = l, b = 42;
                                                    }
                                                    break;
                                                case 42:
                                                    47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
                                            }
                                }
                                0 === b && (f += y);
                        }
                        K = x;
                        x = g;
                        l++;
                    }
                    t = p.length;
                    if (0 < t) {
                        r = c;
                        if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length))
                            return G + p + F;
                        p = r.join(',') + '{' + p + '}';
                        if (0 !== w * E) {
                            2 !== w || L(p, 2) || (E = 0);
                            switch (E) {
                                case 111:
                                    p = p.replace(ha, ':-moz-$1') + p;
                                    break;
                                case 112:
                                    p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
                            }
                            E = 0;
                        }
                    }
                    return G + p + F;
                }
                function X(d, c, e) {
                    var h = c.trim().split(ia);
                    c = h;
                    var a = h.length, m = d.length;
                    switch (m) {
                        case 0:
                        case 1:
                            var b = 0;
                            for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
                                c[b] = Z(d, c[b], e).trim();
                            }
                            break;
                        default:
                            var v = b = 0;
                            for (c = []; b < a; ++b) {
                                for (var n = 0; n < m; ++n) {
                                    c[v++] = Z(d[n] + ' ', h[b], e).trim();
                                }
                            }
                    }
                    return c;
                }
                function Z(d, c, e) {
                    var h = c.charCodeAt(0);
                    33 > h && (h = (c = c.trim()).charCodeAt(0));
                    switch (h) {
                        case 38:
                            return c.replace(F, '$1' + d.trim());
                        case 58:
                            return d.trim() + c.replace(F, '$1' + d.trim());
                        default:
                            if (0 < 1 * e && 0 < c.indexOf('\f'))
                                return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
                    }
                    return d + c;
                }
                function P(d, c, e, h) {
                    var a = d + ';', m = 2 * c + 3 * e + 4 * h;
                    if (944 === m) {
                        d = a.indexOf(':', 9) + 1;
                        var b = a.substring(d, a.length - 1).trim();
                        b = a.substring(0, d).trim() + b + ';';
                        return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
                    }
                    if (0 === w || 2 === w && !L(a, 1))
                        return a;
                    switch (m) {
                        case 1015:
                            return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
                        case 951:
                            return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
                        case 963:
                            return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
                        case 1009:
                            if (100 !== a.charCodeAt(4))
                                break;
                        case 969:
                        case 942:
                            return '-webkit-' + a + a;
                        case 978:
                            return '-webkit-' + a + '-moz-' + a + a;
                        case 1019:
                        case 983:
                            return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
                        case 883:
                            if (45 === a.charCodeAt(8))
                                return '-webkit-' + a + a;
                            if (0 < a.indexOf('image-set(', 11))
                                return a.replace(ja, '$1-webkit-$2') + a;
                            break;
                        case 932:
                            if (45 === a.charCodeAt(4))
                                switch (a.charCodeAt(5)) {
                                    case 103:
                                        return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
                                    case 115:
                                        return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
                                    case 98:
                                        return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
                                }
                            return '-webkit-' + a + '-ms-' + a + a;
                        case 964:
                            return '-webkit-' + a + '-ms-flex-' + a + a;
                        case 1023:
                            if (99 !== a.charCodeAt(8))
                                break;
                            b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
                            return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
                        case 1005:
                            return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
                        case 1e3:
                            b = a.substring(13).trim();
                            c = b.indexOf('-') + 1;
                            switch (b.charCodeAt(0) + b.charCodeAt(c)) {
                                case 226:
                                    b = a.replace(G, 'tb');
                                    break;
                                case 232:
                                    b = a.replace(G, 'tb-rl');
                                    break;
                                case 220:
                                    b = a.replace(G, 'lr');
                                    break;
                                default:
                                    return a;
                            }
                            return '-webkit-' + a + '-ms-' + b + a;
                        case 1017:
                            if (-1 === a.indexOf('sticky', 9))
                                break;
                        case 975:
                            c = (a = d).length - 10;
                            b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
                            switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
                                case 203:
                                    if (111 > b.charCodeAt(8))
                                        break;
                                case 115:
                                    a = a.replace(b, '-webkit-' + b) + ';' + a;
                                    break;
                                case 207:
                                case 102:
                                    a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
                            }
                            return a + ';';
                        case 938:
                            if (45 === a.charCodeAt(5))
                                switch (a.charCodeAt(6)) {
                                    case 105:
                                        return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
                                    case 115:
                                        return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
                                    default:
                                        return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
                                }
                            break;
                        case 973:
                        case 989:
                            if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
                                break;
                        case 931:
                        case 953:
                            if (!0 === la.test(d))
                                return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
                            break;
                        case 962:
                            if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10))
                                return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
                    }
                    return a;
                }
                function L(d, c) {
                    var e = d.indexOf(1 === c ? ':' : '{'), h = d.substring(0, 3 !== c ? e : 10);
                    e = d.substring(e + 1, d.length - 1);
                    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
                }
                function ea(d, c) {
                    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
                    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
                }
                function H(d, c, e, h, a, m, b, v, n, q) {
                    for (var g = 0, x = c, w; g < A; ++g) {
                        switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
                            case void 0:
                            case !1:
                            case !0:
                            case null:
                                break;
                            default:
                                x = w;
                        }
                    }
                    if (x !== c)
                        return x;
                }
                function T(d) {
                    switch (d) {
                        case void 0:
                        case null:
                            A = S.length = 0;
                            break;
                        default:
                            if ('function' === typeof d)
                                S[A++] = d;
                            else if ('object' === typeof d)
                                for (var c = 0, e = d.length; c < e; ++c) {
                                    T(d[c]);
                                }
                            else
                                Y = !!d | 0;
                    }
                    return T;
                }
                function U(d) {
                    d = d.prefix;
                    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
                    return U;
                }
                function B(d, c) {
                    var e = d;
                    33 > e.charCodeAt(0) && (e = e.trim());
                    V = e;
                    e = [V];
                    if (0 < A) {
                        var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
                        void 0 !== h && 'string' === typeof h && (c = h);
                    }
                    var a = M(O, e, c, 0, 0);
                    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
                    V = '';
                    E = 0;
                    z = D = 1;
                    return a;
                }
                var ca = /^\0+/g, N = /[\0\r\f]/g, aa = /: */g, ka = /zoo|gra/, ma = /([,: ])(transform)/g, ia = /,\r+?/g, F = /([\t\r\n ])*\f?&/g, fa = /@(k\w+)\s*(\S*)\s*/, Q = /::(place)/g, ha = /:(read-only)/g, G = /[svh]\w+-[tblr]{2}/, da = /\(\s*(.*)\s*\)/g, oa = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la = /stretch|:\s*\w+\-(?:conte|avail)/, ja = /([^-])(image-set\()/, z = 1, D = 1, E = 0, w = 1, O = [], S = [], A = 0, R = null, Y = 0, V = '';
                B.use = T;
                B.set = U;
                void 0 !== W && U(W);
                return B;
            }
            /**
             * Get all firtst indexes of 'value' ocurrences
             *
             * @export
             * @param {*} str
             * @param {*} value
             * @returns
             */
            function getAllIndexesOf(str, value) {
                var indexes = [];
                var index = -1;
                while ((index = str.indexOf(value, index + 1)) != -1) {
                    indexes.push(index);
                }
                return indexes;
            }
            /**
             * Generated style by @emotion/stylis doesn't work well with classes attached in <Host>
             * at browsers which don't have a shadowroot (legacy)
             * For instance, if we generate stylis('.a', '.b{ }') the desired string is: '.a.b{ }'
             * but stylis generate '.a .b{}' so .b class can't be applied
             * also :host break the css in IE11, need to be removed
             *
             * @param {string} style
             * @returns {string}
             */
            function parseStylisTolegacy(style) {
                var keys = {
                    host: ':host(',
                    slotted: '::slotted('
                };
                var indexes = {
                    host: getAllIndexesOf(style, keys.host),
                    slotted: getAllIndexesOf(style, keys.slotted),
                };
                var replacableSets = {
                    host: new Set(),
                    slotted: new Set()
                };
                Object.entries(indexes)
                    .forEach(function (_b) {
                    var key = _b[0], value = _b[1];
                    value.forEach(function (item) {
                        var index = item;
                        while (style[index] !== ')') {
                            index++;
                        }
                        replacableSets[key].add(style.substr(item, index - item + 1));
                    });
                });
                Object.entries(replacableSets)
                    .forEach(function (_b) {
                    var key = _b[0], replacableSet = _b[1];
                    replacableSet.forEach(function (item) {
                        style = style
                            .split(item)
                            .join(item.slice(keys[key].length).slice(0, -1));
                    });
                });
                return style;
            }
            var Stylis = /** @class */ (function () {
                function Stylis(options) {
                    this.stylis = new stylis_min(options);
                }
                /**
                 *
                 *
                 * @param {string} selector
                 * @param {string} properties
                 * @param {boolean} legacy
                 * @returns {string}
                 * @memberof Stylis
                 */
                Stylis.prototype.build = function (selector, properties, legacy) {
                    var style = this.stylis(selector, properties);
                    if (legacy) {
                        style = parseStylisTolegacy(style);
                    }
                    return style;
                };
                return Stylis;
            }());
            /**
             * Get deep value of object.
             *
             * @export
             * @template T Object type.
             * @param {T} obj Object.
             * @param {string} path Key path.
             * @returns {*} Value.
             */
            function getDeepValue(obj, path) {
                var keyList = path.split('.');
                var key;
                var value = obj;
                while (key = keyList.shift()) {
                    value = value[key];
                    if (value == null) {
                        break;
                    }
                }
                return value !== null && value !== void 0 ? value : null;
            }
            var Operators = {
                get: function (key) {
                    return getDeepValue(this, key);
                },
                if: function (key, value, then, elsi) {
                    if (getDeepValue(this, key) === value) {
                        return then;
                    }
                    return elsi || null;
                },
                switch: function (key, conditions) {
                    var propValue = getDeepValue(this, key);
                    return conditions[propValue] || null;
                }
            };
            /**
             * Subject subscription.
             *
             * @export
             * @class Subscription
             * @template T
             */
            var Subscription = /** @class */ (function () {
                function Subscription(_listener, _removeHandler) {
                    this._listener = _listener;
                    this._removeHandler = _removeHandler;
                }
                /**
                 * Unsubscribe.
                 *
                 * @memberof Subscription
                 */
                Subscription.prototype.unsubscribe = function () {
                    this._removeHandler(this._listener);
                };
                return Subscription;
            }());
            /**
             * Subject.
             *
             * @export
             * @abstract
             * @class Subject
             * @template T
             */
            var Subject = /** @class */ (function () {
                /**
                 * Creates an instance of Subject.
                 *
                 * @param {T} initialState
                 * @memberof Subject
                 */
                function Subject(initialState) {
                    /**
                     * Listeners dictionary.
                     * Use dictionary to improve remove listener performance.
                     *
                     * @private
                     * @type {IListenerDictionary<T>}
                     * @memberof Subject
                     */
                    this._listeners = {};
                    /**
                     * Listener id in dictionary.
                     *
                     * @private
                     * @memberof Subject
                     */
                    this._listenerIdx = 0;
                    this._state = this.parseState(initialState);
                }
                /**
                 * Subscribe to receive updates of state.
                 *
                 * @param {IListener<T>} fn
                 * @returns
                 * @memberof Subject
                 */
                Subject.prototype.subscribe = function (fn) {
                    var idx = this._listenerIdx++;
                    fn.__subscriptionId = idx;
                    this._listeners[idx] = fn;
                    return new Subscription(fn, this.removeListener.bind(this));
                };
                /**
                 * Invalidate listener.
                 *
                 * @param {IListener<T>} listener
                 * @memberof Subject
                 */
                Subject.prototype.removeListener = function (listener) {
                    var idx = listener.__subscriptionId;
                    delete this._listeners[idx];
                };
                /**
                 * Update state.
                 *
                 * @param {Partial<T>} value
                 * @memberof Subject
                 */
                Subject.prototype.next = function (value) {
                    this._state = this.parseState(value);
                    for (var idx in this._listeners) {
                        var fn = this._listeners[idx];
                        fn(this._state);
                    }
                };
                /**
                 * Parse state.
                 *
                 * @protected
                 * @param {Partial<T>} next
                 * @returns {T}
                 * @memberof Subject
                 */
                Subject.prototype.parseState = function (next) {
                    return Object.assign({}, this._state, next);
                };
                return Subject;
            }());
            var ThemeSubject = /** @class */ (function (_super) {
                __extends(ThemeSubject, _super);
                function ThemeSubject() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(ThemeSubject.prototype, "theme", {
                    /**
                     * Return readonly theme.
                     *
                     * @readonly
                     * @memberof ThemeSubject
                     */
                    get: function () {
                        return this._state;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Set value of theme.
                 *
                 * @param {IThemeConstants} val
                 * @memberof ThemeSubject
                 */
                ThemeSubject.prototype.setValue = function (val) {
                    this.next(val);
                };
                return ThemeSubject;
            }(Subject));
            var ThemeProvider = exports('T', new ThemeSubject({}));
            /**
             * Transform instance to props.
             *
             * @export
             * @param {*} instance
             * @returns
             */
            function instanceToProps(instance) {
                var result = { theme: ThemeProvider.theme };
                result.if = Operators.if.bind(result);
                result.get = Operators.get.bind(result);
                result.switch = Operators.switch.bind(result);
                for (var key in instance) {
                    if (typeof instance[key] === "string" || typeof instance[key] === "number" || typeof instance[key] === "boolean") {
                        result[key] = instance[key];
                    }
                }
                return result;
            }
            /**
             * Verify if node is a Host.
             *
             * @export
             * @param {*} node Node to be verified.
             * @returns {boolean}
             */
            function isHost(node) {
                // TODO: Precisa mesmo de um for?
                for (var prop in node) {
                    if (node.hasOwnProperty(prop)) {
                        if (node[prop] === Host) {
                            return true;
                        }
                    }
                }
                return false;
            }
            /**
             * Get children props of Host node.
             *
             * @export
             * @param {*} node Host node.
             * @returns {Array<VNode>}
             */
            function getHostChildren(node) {
                // TODO: Precisa mesmo de um for?
                for (var prop in node) {
                    if (node.hasOwnProperty(prop)) {
                        if (Array.isArray(node[prop])) {
                            return node[prop];
                        }
                    }
                }
                return null;
            }
            /**
             * Verify usage of shadow.
             *
             * @export
             * @param {ComponentInterface} element
             * @returns
             */
            function isUsingShadow(element) {
                var domElement = getElement(element);
                return 'attachShadow' in HTMLElement.prototype && domElement.shadowRoot != null;
            }
            /**
             * Verify lifecycle methods used bu chameleon.
             *
             * @export
             * @param {ComponentInterface} target
             */
            function hasLifecycleMethods(target) {
                var originalWillLoad = target.componentWillLoad;
                var originalWillUpdate = target.componentWillUpdate;
                var originalConnected = target.connectedCallback;
                var originalDisconnected = target.disconnectedCallback;
                if (!originalWillLoad ||
                    !originalWillUpdate ||
                    !originalConnected ||
                    !originalDisconnected) {
                    console.warn("Chameleon requires you to have somes lifecycle methods in `" + target.constructor.name + "`. Failure to add this function may cause Chameleon to fail due to StencilJS build optimizations.");
                }
            }
            /**
             * Cache strategy enum.
             *
             * @export
             * @enum {number}
             */
            var AdaptStrategy;
            (function (AdaptStrategy) {
                AdaptStrategy[AdaptStrategy["PlainText"] = 0] = "PlainText";
                AdaptStrategy[AdaptStrategy["StyleElement"] = 1] = "StyleElement";
                AdaptStrategy[AdaptStrategy["Constructable"] = 2] = "Constructable";
            })(AdaptStrategy || (AdaptStrategy = {}));
            var Constants = {
                StyleSheetAttribute: "constructable-style",
                ClassPrefix: "chameleon-cp",
            };
            /**
             * Cache repository.
             *
             * @abstract
             * @class Cache
             */
            var Cache = /** @class */ (function () {
                function Cache() {
                }
                /**
                 * Get cache by key
                 *
                 * @static
                 * @param {string} key The cache key.
                 * @returns
                 * @memberof Cache
                 */
                Cache.get = function (key) {
                    return this.table[key];
                };
                /**
                 * Set cache value by key.
                 *
                 * @static
                 * @param {string} key Cache key.
                 * @param {CacheValue} value Cache value.
                 * @returns
                 * @memberof Cache
                 */
                Cache.set = function (key, value) {
                    return this.table[key] = {
                        value: value,
                        count: 1
                    };
                };
                /**
                 * Delete cache by key.
                 *
                 * @static
                 * @param {string} key
                 * @returns
                 * @memberof Cache
                 */
                Cache.del = function (key, strategy) {
                    if (strategy === AdaptStrategy.StyleElement) {
                        var cache = this.table[key];
                        var element = document.querySelector("style[" + Constants.StyleSheetAttribute + "=" + (cache === null || cache === void 0 ? void 0 : cache.value) + "]");
                        element === null || element === void 0 ? void 0 : element.remove();
                    }
                    return delete this.table[key];
                };
                /**
                 * Move usage of cache.
                 *
                 * @static
                 * @param {string} oldKey The oldest cache key.
                 * @param {string} newKey The newest cache key.
                 * @param {AdaptStrategy} strategy adaptation strategy.
                 * @memberof Cache
                 */
                Cache.moveUsage = function (oldKey, newKey, strategy) {
                    this.incUsage(newKey);
                    this.decUsage(oldKey, strategy);
                };
                /**
                 * Decrease usage of cache.
                 *
                 * @static
                 * @param {string} key
                 * @param {AdaptStrategy} strategy adaptation strategy.
                 * @memberof Cache
                 */
                Cache.decUsage = function (key, strategy) {
                    var value = this.get(key);
                    if (value != null) {
                        value.count--;
                        if (value.count === 0) {
                            this.del(key, strategy);
                        }
                    }
                };
                /**
                 * Increase usage of cache.
                 *
                 * @static
                 * @param {string} key
                 * @memberof Cache
                 */
                Cache.incUsage = function (key) {
                    var newValue = this.get(key);
                    newValue.count++;
                };
                return Cache;
            }());
            Cache.table = {};
            // Used when component are using fallback for shadow dom.
            var componentFallbackCounter = 0;
            /**
             * Get className for component.
             *
             * @param {*} element instance.
             * @returns
             */
            function resolveElementClass(element) {
                componentFallbackCounter++;
                element.__className = Constants.ClassPrefix + "-" + componentFallbackCounter;
                return element.__className;
            }
            var stylis = new Stylis();
            /**
             * Return true if has CSSStyleSheet support.
             *
             * @export
             * @returns
             */
            function supportCSSStyleSheet() {
                try {
                    return !!new CSSStyleSheet();
                }
                catch (e) {
                    return false;
                }
            }
            /**
             * Apply style to instance.
             *
             * @export
             * @param {ComponentInterface} component The component definition.
             * @param {ComponentInterface} element The element instance.
             * @param IAdaptConfig styleFactory
             * @returns {CSSStyleSheet}
             */
            function resolveStyleSheet(_component, element, config, strategy) {
                var _a;
                var adaptation = config.css(instanceToProps(element), config.markup);
                // Whatever what is the strategy, if has cache, use this.
                var cachedStyleSheet = (_a = Cache.get(adaptation.key)) === null || _a === void 0 ? void 0 : _a.value;
                if (cachedStyleSheet && validateCache(cachedStyleSheet, strategy)) {
                    Cache.moveUsage(element.__key, adaptation.key, strategy);
                    element.__key = adaptation.key;
                    return cachedStyleSheet;
                }
                // If element was using some cache, decrease him.
                if (element.__key != null) {
                    Cache.decUsage(element.__key, strategy);
                }
                // Update cache key of element.
                element.__key = adaptation.key;
                if (strategy === AdaptStrategy.StyleElement) {
                    return resolveWithElement(element, adaptation);
                }
                else if (strategy === AdaptStrategy.Constructable) {
                    return resolveWithConstructable(adaptation);
                }
                else if (strategy === AdaptStrategy.PlainText) {
                    return resolveWithPlain(adaptation);
                }
                else {
                    console.warn("Cannot find strategy to resolve stylesheet");
                }
            }
            /**
             * Resolve style with constructable strategy.
             *
             * @export
             * @param {IAdaptation} adaptation
             * @returns
             */
            function resolveWithConstructable(adaptation) {
                // Style is instance of constructable.
                var style = stylis.build("", adaptation.skin);
                var cssStyleSheet = new CSSStyleSheet();
                cssStyleSheet.replace(style);
                Cache.set(adaptation.key, cssStyleSheet);
                return cssStyleSheet;
            }
            /**
             * Resolve stylesheet with element strategy.
             *
             * @param {ComponentInterface} element
             * @param {IAdaptation} adaptation
             * @returns
             */
            function resolveWithElement(element, adaptation) {
                // Create a className and style.
                var className = resolveElementClass(element);
                var style = stylis.build("." + className, adaptation.skin, true);
                // Create element and append him to head.
                var styleElement = document.createElement("style");
                styleElement.setAttribute("type", "text/css");
                styleElement.setAttribute(Constants.StyleSheetAttribute, className);
                styleElement.innerHTML = style;
                document.head.appendChild(styleElement);
                Cache.set(adaptation.key, className);
                return className;
            }
            /**
             *Resolve with plain text strategy.
             *
             * @param {IAdaptation} adaptation
             * @returns
             */
            function resolveWithPlain(adaptation) {
                var style = stylis.build("", adaptation.skin);
                Cache.set(adaptation.key, style);
                return style;
            }
            /**
             * Validate cache by strategy.
             *
             * @param {CacheValue} cache
             * @param {AdaptStrategy} strategy
             * @returns
             */
            function validateCache(cache, strategy) {
                if (strategy === AdaptStrategy.Constructable) {
                    return cache instanceof CSSStyleSheet;
                }
                else if (strategy === AdaptStrategy.StyleElement) {
                    return typeof cache === "string" && cache.match(Constants.ClassPrefix);
                }
                else if (strategy === AdaptStrategy.PlainText) {
                    return typeof cache === "string";
                }
            }
            /**
             * Call functio safelly.
             *
             * @export
             * @param {*} fn Function.
             * @param {*} self This arg.
             * @param {*} params Arguments.
             * @returns
             */
            function safeCall(fn, self) {
                var params = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    params[_i - 2] = arguments[_i];
                }
                if (typeof fn === "function") {
                    return fn.apply(self, params);
                }
                return null;
            }
            /**
             * Override render method adding style tag.
             * Used when the user browser have not support for CSSStyleSheet object.
             *
             * @param {*} component The component definition.
             * @param {*} element The DOM element instance.
             * @param {*} IAdaptConfig
             * @returns
             */
            function overrideRenderWithStyle(component, element, render, config) {
                // Get dom element and verify shadow usage.
                var domElement = getElement(element);
                var useShadow = isUsingShadow(element);
                // Get host node.
                var renderedNode = render.call(element);
                if (!isHost(renderedNode)) {
                    renderedNode = h(Host, null, renderedNode);
                }
                // If are using shadow dom, append style to host element. Else, add style to head.
                if (useShadow) {
                    var styleSheet = resolveStyleSheet(component, element, config, AdaptStrategy.PlainText);
                    appendStyleToHost(renderedNode, config.markup, styleSheet);
                    element.__lastRenderer = renderedNode;
                }
                else {
                    // Resolve styleSheet first time.
                    var className = resolveStyleSheet(component, element, config, AdaptStrategy.StyleElement);
                    // Add class to host.
                    if (element.__lastClass != null && element.__lastClass !== className) {
                        domElement.classList.remove(element.__lastClass);
                        domElement.classList.add(className);
                    }
                    else if (element.__lastClass == null) {
                        domElement.classList.add(className);
                    }
                    // Save last class.
                    element.__lastClass = className;
                }
                return renderedNode;
            }
            /**
             * Update stylesheet tag.
             * Used when the user browser have not support for CSSStyleSheet object.
             *
             * @param {*} component The component target.
             * @param {*} element The DOM element instance.
             * @param {*} IAdaptConfig
             * @returns
             */
            function updateStyleTag(component, element, config) {
                var domElement = getElement(element);
                var usingShadow = 'attachShadow' in HTMLElement.prototype && domElement.shadowRoot != null;
                if (usingShadow) {
                    // Resolve style.
                    var styleSheet = resolveStyleSheet(component, element, config, AdaptStrategy.PlainText);
                    // Attach to Host element.
                    if (!element.__lastRenderer) {
                        return;
                    }
                    for (var _i = 0, _b = element.__lastRenderer["$elm$"].styleSheets; _i < _b.length; _i++) {
                        var item = _b[_i];
                        if (item.ownerNode.getAttribute(Constants.StyleSheetAttribute) != null) {
                            item.ownerNode.innerHTML = styleSheet;
                            break;
                        }
                    }
                }
                else if (element.__lastClass) {
                    // Resolve style with host class.
                    var className = resolveStyleSheet(component, element, config, AdaptStrategy.StyleElement);
                    if (element.__lastClass !== className) {
                        domElement.classList.remove(element.__lastClass);
                        domElement.classList.add(className);
                        element.__lastClass = className;
                    }
                }
            }
            /**
             * Append style node in Host.
             * Used as fallback when user browser hav not support for CSSStyleSheet.
             *
             * @param {*} host Host node.
             * @param {*} targetName Target name reference.
             * @param {*} styleSheet The css string.
             */
            function appendStyleToHost(host, targetName, styleSheet) {
                var _b;
                (getHostChildren(host) || []).push(h("style", Object.assign({ type: "text/css" }, (_b = {}, _b[Constants.StyleSheetAttribute] = targetName, _b)), styleSheet));
            }
            /**
             * Apply StyleSheet object.
             *
             * @param {*} component The component class.
             * @param {*} element The element instance.
             * @param {*} IAdaptConfig
             */
            function applyStyle(component, element, config) {
                var host = getElement(element);
                var root = (host.shadowRoot || host);
                var styleSheet = resolveStyleSheet(component, element, config, AdaptStrategy.Constructable);
                if (styleSheet != null) {
                    root.adoptedStyleSheets = [
                        styleSheet
                    ];
                }
            }
            /**
             * Decorator for dinamicaly add and update stylesheet's.
             *
             * @export
             * @returns {ConstructibleStyleDecorator}
             */
            function Adapt(config) {
                return function (target, propertyName) {
                    hasLifecycleMethods(target);
                    if (propertyName !== "render") {
                        console.warn("You should apply 'Adapt' decorator in 'render' method.");
                    }
                    if (supportCSSStyleSheet()) {
                        AdaptWithObject(target, config);
                    }
                    else {
                        AdaptWithTag(target, config);
                    }
                };
            }
            /**
             * Adapt style using CSSStyleSheet object.
             *
             * @param {ComponentInterface} component
             * @param {*} config
             */
            function AdaptWithObject(component, config) {
                // Save original methods.
                var originalWillLoad = component.componentWillLoad;
                var originalWillUpdate = component.componentWillUpdate;
                var originalConnected = component.connectedCallback;
                var originalDisconnected = component.disconnectedCallback;
                // Create or update style when component will load.
                component.componentWillLoad = function () {
                    safeCall(originalWillLoad, this);
                    applyStyle(component, this, config);
                };
                // Create or update style when component will update.
                component.componentWillUpdate = function () {
                    safeCall(originalWillUpdate, this);
                    applyStyle(component, this, config);
                };
                // Subscribe in theme when component is connected with DOM.
                component.connectedCallback = function () {
                    var _this = this;
                    var element = getElement(this);
                    // If the element hasnt shadowRoot, the shadow options is not allowed.
                    // Change chameleon strategy to fallback.
                    if (element.shadowRoot === null) {
                        // First, clean overrides.
                        component.componentWillLoad = originalWillLoad;
                        component.componentWillUpdate = originalWillUpdate;
                        component.connectedCallback = originalConnected;
                        component.disconnectedCallback = originalDisconnected;
                        // Them adapt component using fallback.
                        AdaptWithTag(component, config);
                        // Now, call connectedCallback of component.
                        return component.connectedCallback.apply(this);
                    }
                    // Use component tag name as markup.
                    if (!config.markup) {
                        config.markup = element.tagName;
                    }
                    this.__themeSubscription = ThemeProvider.subscribe(function () {
                        applyStyle(component, _this, config);
                    });
                    return safeCall(originalConnected, this);
                };
                // Unsubscribe in theme when component will be disconnected with DOM.
                component.disconnectedCallback = function () {
                    this.__themeSubscription.unsubscribe();
                    return safeCall(originalDisconnected, this);
                };
            }
            /**
             * Adapt style using tag strategy.
             * Use ShadowDOM when possible.
             *
             * @param {ComponentInterface} component
             * @param {*} config
             */
            function AdaptWithTag(component, config) {
                // Save original methods.
                var originalConnected = component.connectedCallback;
                var originalDisconnected = component.disconnectedCallback;
                // On connect subscribe in theme.
                component.connectedCallback = function () {
                    var _this = this;
                    var element = getElement(this);
                    // Use component tag name as markup.
                    if (!config.markup) {
                        config.markup = element.tagName;
                    }
                    // Override render add style tag.
                    var originalRender = this.render;
                    this.render = function () {
                        return overrideRenderWithStyle(component, this, originalRender, config);
                    };
                    // Subscribe in theme.
                    this.__themeSubscription = ThemeProvider.subscribe(function () { return updateStyleTag(component, _this, config); });
                    return safeCall(originalConnected, this);
                };
                // On disconnect unsubscribe in theme.
                component.disconnectedCallback = function () {
                    this.__themeSubscription.unsubscribe();
                    return safeCall(originalDisconnected, this);
                };
            }
            function parseObject(obj) {
                var comma = new RegExp(',', 'g');
                var clear = new RegExp(/["{}]/, 'g');
                return JSON.stringify(obj).replace(comma, ';').replace(clear, '') + ';';
            }
            /**
             * Compiles in valid CSS.
             *
             * @export
             * @param {TemplateStringsArray} strings
             * @param {(...(InterpolationValue)[])} interpolations
             * @returns
             */
            function css(strings) {
                var interpolations = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    interpolations[_i - 1] = arguments[_i];
                }
                return function (props, markup) {
                    var key = markup;
                    // skin is the pre-processed css
                    var skin = strings.reduce(function (acc, item, idx) {
                        var interpolationValue = interpolations[idx] || "";
                        if (typeof interpolationValue === "function") {
                            try {
                                interpolationValue = interpolationValue(props);
                            }
                            catch (err) {
                                console.warn(err);
                            }
                        }
                        else if (typeof interpolationValue === 'object') {
                            interpolationValue = parseObject(interpolationValue);
                        }
                        key += '$' + interpolationValue;
                        return acc + item + interpolationValue;
                    }, '');
                    return {
                        key: key,
                        skin: skin
                    };
                };
            }
            exports('A', Adapt);
        }
    };
});
