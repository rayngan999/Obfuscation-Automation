/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="throttle"`
 */
; (function () {
    function t() { }
    function e(t, e, o) {
        function r(e) {
            var n = p, o = s;
            return p = s = u, g = e, y = t.apply(o, n)
        }
        function f(t) { var n = t - m;
            return t -= g, m === u || n >= e || 0 > n || v && t >= b }
        function a() {
            var t = h();
            if (f(t))
                return c(t);
            var n, o = requestAnimationFrame; n = t - g, t = e - (t - m), n = v ? O(t, b - n) : t, d = o(function() {
                a(n);
            });
        }
        function c(t) {
            return d = u, T && p ? r(t) : (p = s = u, y)
        }
        function l() {
            var t = h(), n = f(t);
            if (p = arguments, s = this, m = t, n) {
                if (d === u)
                    return g = t = m,
                        d = requestAnimationFrame(function() {
                            a(e);
                        })
                        j ? r(t) : y;
                if (v)
                return d = requestAnimationFrame(function() {
                    a(e);
                }),
                    r(m) }
            return d === u && (d = requestAnimationFrame(function() {
                a(e);
            })),
                y }
        var p, s, b, y, d, m, g = 0,
            j = false,
            v = false,
            T = true;
        if (typeof t != "function") throw new TypeError("Expected a function");
        return e = i(e) || 0,
        n(o) && (j = !!o.leading,
            b = (v = "maxWait" in o) ? x(i(o.maxWait) || 0, e) : b, T = "trailing" in o ? !!o.trailing : T),
            l.cancel = function () {
            d !== u && clearTimeout(d),
                g = 0, p = m = s = d = u },
            l.flush = function () {
            return d === u ? y : c(h())
            }, l
    }
    function n(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
    function o(t) {
        return null != t && typeof t == "object"
    }
    function r(t) {
        var e; if (!(e = typeof t == "symbol") && (e = o(t))) {
            if (null == t) t = t === u ? "[object Undefined]" : "[object Null]";
            else if (v && v in Object(t)) {
                e = g.call(t, v);
                var n = t[v];
                try { t[v] = u;
                    var r = true
                }
                catch (t) { }
                var i = j.call(t);
                r && (e ? t[v] = n : delete t[v]),
                    t = i
            } else t = j.call(t);
            e = "[object Symbol]" == t
        } return e
    } function i(t) {
        if (typeof t == "number") return t;
        if (r(t)) return f;
        if (n(t) && (t = typeof t.valueOf == "function" ? t.valueOf() : t, t = n(t) ? t + "" : t), typeof t != "string")
            return 0 === t ? t : +t;
        t = t.replace(a, "");
        var e = l.test(t);
        return e || p.test(t) ? s(t.slice(2), e ? 2 : 8) : c.test(t) ? f : +t }
    var u, f = NaN, a = /^\s+|\s+$/g, c = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, p = /^0o[0-7]+$/i, s = parseInt, b = typeof self == "object" && self && self.Object === Object && self, y = typeof global == "object" && global && global.Object === Object && global || b || Function("return this")(), d = (b = typeof exports == "object" && exports && !exports.nodeType && exports) && typeof module == "object" && module && !module.nodeType && module, m = Object.prototype, g = m.hasOwnProperty, j = m.toString, v = (m = y.Symbol) ? m.toStringTag : u, x = Math.max, O = Math.min, h = function () {
        return y.Date.now()
    }; t.debounce = e, t.throttle = function (t, o, r) { var i = true, u = true; if (typeof t != "function") throw new TypeError("Expected a function"); return n(r) && (i = "leading" in r ? !!r.leading : i, u = "trailing" in r ? !!r.trailing : u), e(t, o, { leading: i, maxWait: o, trailing: u }) }, t.isObject = n, t.isObjectLike = o, t.isSymbol = r, t.now = h, t.toNumber = i, t.VERSION = "4.17.5", typeof define == "function" && typeof define.amd == "object" && define.amd ? (y._ = t, define(function () { return t })) : d ? ((d.exports = t)._ = t, b._ = t) : y._ = t
}).call(this);

$(document).ready(function () {
	stickyNavi();
	stickyArrowScrollTop();
    loginBox();
    skybtf();
	var config={
		'.chzn-select': {},
		'.chzn-select-deselect': { allow_single_deselect: true },
		'.chzn-select-no-single': { disable_search_threshold: 10 },
		'.chzn-select-no-results': { no_results_text: 'Oops, nothing found!' },
		'.chzn-select-width': { width: '95%' }
	};
	for (var selector in config) {
		$(selector).chosen(config[selector]);
	}
});

function loginBox() {
    var loadingLoginBox = false;
	$('div#login').on('click', function (event) {
		event.preventDefault();
		var box=$('#loginbox');
		if (box.css('display') !== 'block' && !loadingLoginBox) {
            loadingLoginBox = true;
			$('#loginbox').load(loginUrl+' #login-form', function (data) {
				parseScript(data);
				initCss();
				box.slideToggle(200);
				$('#LoginForm_username').focus();
                boxOpen='#loginbox';
                loadingLoginBox = false;
			});
		}
	});
}

function stickyArrowScrollTop() {
	$('#arrow-up-xy').on('click', function () {
		$('html, body').animate({ scrollTop: 0 }, 600);
		return false;
	});
}

function scrollAction(logoBereichHoehe, werbeBereichHoehe, beforeNav, main, navibalken, customElUserBox, self) {
    if (!main.hasClass('stickyContent')) {
        logoBereichHoehe = $('#logobereich, #header').height();
        werbeBereichHoehe = $('#werbung_superbanner_wrapper').height();
        beforeNav = logoBereichHoehe + werbeBereichHoehe;
    }
    if (self.scrollTop() > beforeNav) {
        main.addClass('stickyContent');
        navibalken.addClass('sticky-navibalken');
        if (customElUserBox && customElUserBox.length > 0) {
            customElUserBox[0].setAttribute('scroll-mode', 'true');
        }
    } else {
        main.removeClass('stickyContent');
        navibalken.removeClass('sticky-navibalken');
        if (customElUserBox && customElUserBox.length > 0) {
            customElUserBox[0].setAttribute('scroll-mode', 'false');
        }
    }
}

function stickyNavi() {
	var logoBereichHoehe=$('#logobereich').height();
	var werbeBereichHoehe=$('#werbung_superbanner').height();
	var beforeNav=logoBereichHoehe+werbeBereichHoehe;
	var main=$('#main');
    var navibalken=$('#navibalken, #navigation');
    var customElUserBox = document.getElementsByTagName('tm-user-box');
    var self=$(this);

    window.addEventListener('scroll', _.throttle(function() {
        scrollAction(logoBereichHoehe, werbeBereichHoehe, beforeNav, main, navibalken, customElUserBox, self);
    }, 60));
    window.addEventListener('load', function () {
        scrollAction(logoBereichHoehe, werbeBereichHoehe, beforeNav, main, navibalken, customElUserBox, self);
    });
}

function skybtf() {
	var skyBtf = document.querySelector('.werbung-skyscraperbtf-container');
	if (typeof skyBtf != 'undefined' && skyBtf) {
		var f = $('#footer');
		var pageHeight = f[0].offsetTop + f[0].clientHeight;

		if (pageHeight > 3000) {
			skyBtf.style.top = (pageHeight >= 5000 ? pageHeight / 2 : 2000) + 'px';
			skyBtf.style.display = 'block';
		}
	}
}

document.addEventListener("tmSkeletonContentLoadingComplete", function (event) {
    const skeleton = document.getElementById(event.detail);
    if (skeleton) {
        skeleton.remove();
    }
});
