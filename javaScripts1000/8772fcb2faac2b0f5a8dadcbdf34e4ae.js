function MP_Urchin() {
    var ver = "1.15",
        tranx = new Object;
    tranx.orderID = "", tranx.affiliate = "", tranx.total = "", tranx.tax = "", tranx.shipping = "", tranx.city = "", tranx.state = "", tranx.country = "", tranx.items = new Array;
    var _uacct = "",
        _ufsc = 1,
        _udn = "auto",
        _uhash = "on",
        _utimeout = "1800",
        _ugifpath = "analytics.convertlanguage.com/__utm.gif",
        _utsp = "|",
        _uflash = 1,
        _utitle = 1,
        _ulink = 1,
        _uanchor = 0,
        _utcp = "/",
        _usample = 100,
        _uctm = 1,
        _ucto = "15768000",
        _uccn = "utm_campaign",
        _ucmd = "utm_medium",
        _ucsr = "utm_source",
        _uctr = "utm_term",
        _ucct = "utm_content",
        _ucid = "utm_id",
        _ucno = "utm_nooverride",
        _uOsr = new Array,
        _uOkw = new Array;
    _uOsr[0] = "google", _uOkw[0] = "q", _uOsr[1] = "yahoo", _uOkw[1] = "p", _uOsr[2] = "msn", _uOkw[2] = "q", _uOsr[3] = "aol", _uOkw[3] = "query", _uOsr[4] = "aol", _uOkw[4] = "encquery", _uOsr[5] = "lycos", _uOkw[5] = "query", _uOsr[6] = "ask", _uOkw[6] = "q", _uOsr[7] = "altavista", _uOkw[7] = "q", _uOsr[8] = "netscape", _uOkw[8] = "query", _uOsr[9] = "cnn", _uOkw[9] = "query", _uOsr[10] = "looksmart", _uOkw[10] = "qt", _uOsr[11] = "about", _uOkw[11] = "terms", _uOsr[12] = "mamma", _uOkw[12] = "query", _uOsr[13] = "alltheweb", _uOkw[13] = "q", _uOsr[14] = "gigablast", _uOkw[14] = "q", _uOsr[15] = "voila", _uOkw[15] = "rdata", _uOsr[16] = "virgilio", _uOkw[16] = "qs", _uOsr[17] = "live", _uOkw[17] = "q", _uOsr[18] = "baidu", _uOkw[18] = "wd", _uOsr[19] = "alice", _uOkw[19] = "qs", _uOsr[20] = "yandex", _uOkw[20] = "text", _uOsr[21] = "najdi", _uOkw[21] = "q", _uOsr[22] = "aol", _uOkw[22] = "q", _uOsr[23] = "club-internet", _uOkw[23] = "q", _uOsr[24] = "mama", _uOkw[24] = "query", _uOsr[25] = "seznam", _uOkw[25] = "q", _uOsr[26] = "search", _uOkw[26] = "q", _uOsr[27] = "szukaj", _uOkw[27] = "szukaj", _uOsr[28] = "szukaj", _uOkw[28] = "qt", _uOsr[29] = "netsprint", _uOkw[29] = "q", _uOsr[30] = "google.interia", _uOkw[30] = "q", _uOsr[31] = "szukacz", _uOkw[31] = "q", _uOsr[32] = "yam", _uOkw[32] = "k", _uOsr[33] = "pchome", _uOkw[33] = "q", _uOsr[34] = "bing", _uOkw[34] = "q", _uOsr[35] = "naver", _uOkw[35] = "query";
    var _uOno = new Array,
        _uRno = new Array,
        _uff, _udh, _udt, _ubl = 0,
        _udo = "",
        _uu, _ufns = 0,
        _uns = 0,
        _ur = "-",
        _ufno = 0,
        _ust = 0,
        _ubd = document,
        _udl = _ubd.location,
        _udlh = "",
        _uwv = "1";
    var SecFlag = "https:" == _udl.protocol ? "; SameSite=None; Secure;" : "";
    _udl.hash && (_udlh = _udl.href.substring(_udl.href.indexOf("#"))), _ugifpath = "https:" == _udl.protocol ? "https://" + _ugifpath : "http://" + _ugifpath, _utcp && "" != _utcp || (_utcp = "/");
    var _ecm = {};
    _ecm["'"] = "'0", _ecm[")"] = "'1", _ecm["*"] = "'2", _ecm["!"] = "'3", this.urchinTracker = function(a, b) {
        "file:" != _udl.protocol && (!_uff || a && "" != a) && (this._initData(), this._uInfo(a, b), _ufns = 0, _ufno = 0, a && "" != a || (_uff = 1))
    }, this._initData = function() {
        var a, b, c, d, e, f, g, h, i = "",
            j = "",
            k = 0,
            l = "",
            m = " expires=" + this._uNx() + SecFlag,
            n = _ubd.cookie;
        _udh = this._uDomain(), this._uVG() && (_uu = Math.round(2147483647 * Math.random()),
         _udt = new Date, _ust = Math.round(_udt.getTime() / 1e3), a = n.indexOf("mp__utma=" + _udh),
          b = n.indexOf("mp__utmb=" + _udh), c = n.indexOf("mp__utmc=" + _udh),
           _udn && "" != _udn && (_udo = " domain=" + _udn + ";"),
            _utimeout && "" != _utimeout && (i = new Date(_udt.getTime() + 1e3 * _utimeout),
 i = " expires=" + i.toGMTString() + SecFlag),
 _ulink && (_uanchor && _udlh && "" != _udlh && (j = _udlh + "&"),
 j += _udl.search,
 j && "" != j && j.indexOf("mp__utma=") >= 0 && (this._uIN(a = this._uUES(this._uGC(j,
 "mp__utma=",
 "&"))) || (a = "-"),
 this._uIN(b = this._uUES(this._uGC(j,
 "mp__utmb=",
 "&"))) || (b = "-"),
 this._uIN(c = this._uUES(this._uGC(j,
 "mp__utmc=",
 "&"))) || (c = "-"),
 f = this._uUES(this._uGC(j,
 "mp__utmv=",
 "&")),
 g = this._uUES(this._uGC(j,
 "mp__utmz=",
 "&")),
 h = this._uUES(this._uGC(j,
 "mp__utmk=",
 "&")),
 e = this._uUES(this._uGC(j,
 "mp__utmx=",
 "&")),
 1 * h != 1 * this._uHash(a + b + c + e + g + f) + 1 * _udh && (_ubl = 1,
 a = "-",
 b = "-",
 c = "-",
 e = "-",
 g = "-",
 f = "-"),
 "-" != a && "-" != b && "-" != c ? k = 1 : "-" != a && (k = 2))),
 1 == k ? (_ubd.cookie = "mp__utma=" + a + "; path=" + _utcp + ";" + m + _udo,
 _ubd.cookie = "mp__utmb=" + b + "; path=" + _utcp + ";" + i + _udo,
 _ubd.cookie = "mp__utmc=" + c + "; path=" + _utcp + ";" + m + _udo) : 2 == k ? (a = this._uFixA(j,
 "&",
 _ust),
 _ubd.cookie = "mp__utma=" + a + "; path=" + _utcp + ";" + m + _udo,
 _ubd.cookie = "mp__utmb=" + _udh + "; path=" + _utcp + ";" + i + _udo,
 _ubd.cookie = "mp__utmc=" + _udh + "; path=" + _utcp + ";" + _udo,
 _ufns = 1) : a >= 0 && b >= 0 && c >= 0 ? _ubd.cookie = "mp__utmb=" + _udh + "; path=" + _utcp + ";" + i + _udo : (a = a >= 0 ? this._uFixA(_ubd.cookie,
 ";",
 _ust) : _udh + "." + _uu + "." + _ust + "." + _ust + "." + _ust + ".1",
 _ubd.cookie = "mp__utma=" + a + "; path=" + _utcp + ";" + m + _udo,
 _ubd.cookie = "mp__utmb=" + _udh + "; path=" + _utcp + ";" + i + _udo,
 _ubd.cookie = "mp__utmc=" + _udh + "; path=" + _utcp + ";" + m + _udo,
 _ufns = 1),
 _ulink && e && "" != e && "-" != e && (e = this._uUES(e),
 e.indexOf(";") == -1 && (_ubd.cookie = "mp__utmx=" + e + "; path=" + _utcp + ";" + m + _udo)),
 _ulink && f && "" != f && "-" != f && (f = this._uUES(f),
 f.indexOf(";") == -1 && (_ubd.cookie = "mp__utmv=" + f + "; path=" + _utcp + ";" + m + _udo)),
 _ur = _ubd.referrer,
 _ur && "" != _ur ? (l = _ubd.location.hostname,
 _utcp && "/" != _utcp && (l += _utcp),
 d = _ur.indexOf(l),
 0 == _ur.indexOf("[") && _ur.lastIndexOf("]") == _ur.length - 1 && (_ur = "-")) : _ur = "-",
 this._uCInfo())
    },
 this._uInfo = function(a,
 b) {
        var c,
 e = "",
            f = "",
            g = _udl.pathname + _udl.search,
            h = navigator,
            i = 8e4;
        a && "" != a && (g = a), f += "&utmn=" + _uu, b && (f += b), _ufsc && (f += this._uBInfo()), _uctm && (f += this._uCInfo()), _udl.hostname && "" != _udl.hostname && (f += "&utmhn=" + this._uES(_udl.hostname)), f += "&utmr=" + this._uES(_ur), f += "&utmcc=" + this._uGCS(), "Microsoft Internet Explorer" == h.appName && (c = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), c.test(h.userAgent) && parseFloat(RegExp.$1) < 7 && (i = 2083)), f = _ugifpath + "?utmwv=" + _uwv + f, _utitle && _ubd.title && "" != _ubd.title && (e = "&utmdt=" + this._uES(_ubd.title));
        var j = f + e;
        g = this._shorten(j, g, "&", i, 5), g = "&utmp=" + this._uES(g), j = f + g, _utitle && _ubd.title && "" != _ubd.title && (e = this._shorten(j, e, "%20", i, 10), f += e), f += g, f.length >= i || this._uSP() && this.fireGif(f, !0)
    }, this._uVoid = function() {}, this._uCInfo = function() {
        if (_ucto && "" != _ucto || (_ucto = "15768000"), this._uVG()) {
            var a = "",
                b = "-",
                c = "-",
                d = "-",
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = "-",
                j = "";
            _uanchor && _udlh && "" != _udlh && (j = _udlh + "&"), j += _udl.search;
            var k = new Date(_udt.getTime() + 1e3 * _ucto),
                l = _ubd.cookie;
            return k = " expires=" + k.toGMTString() + "; SameSite=None; secure;", _ulink && !_ubl && (i = this._uUES(this._uGC(j, "mp__utmz=", "&")), "-" != i && i.indexOf(";") == -1) ? (_ubd.cookie = "mp__utmz=" + i + "; path=" + _utcp + ";" + k + _udo, "") : (i = l.indexOf("mp__utmz=" + _udh), i = i > -1 ? this._uGC(l, "mp__utmz=" + _udh, ";") : "-", b = this._uGC(j, _ucid + "=", "&"), c = this._uGC(j, _ucsr + "=", "&"), d = this._uGC(j, "gclid=", "&"), ("-" != b && "" != b || "-" != c && "" != c || "-" != d && "" != d) && ("-" != b && "" != b && (a += "utmcid=" + this._uEC(b)), "-" != c && "" != c && ("" != a && (a += "|"), a += "utmcsr=" + this._uEC(c)), "-" != d && "" != d && ("" != a && (a += "|"), a += "utmgclid=" + this._uEC(d)), b = this._uGC(j, _uccn + "=", "&"), a += "-" != b && "" != b ? "|utmccn=" + this._uEC(b) : "|utmccn=(not+set)", b = this._uGC(j, _ucmd + "=", "&"), a += "-" != b && "" != b ? "|utmcmd=" + this._uEC(b) : "|utmcmd=(not+set)", b = this._uGC(j, _uctr + "=", "&"), "-" != b && "" != b ? a += "|utmctr=" + this._uEC(b) : (b = this._uOrg(1), "-" != b && "" != b && (a += "|utmctr=" + this._uEC(b))), b = this._uGC(j, _ucct + "=", "&"), "-" != b && "" != b && (a += "|utmcct=" + this._uEC(b)), b = this._uGC(j, _ucno + "=", "&"), "1" == b && (e = 1), "-" != i && 1 == e) ? "" : ("-" != a && "" != a || (a = this._uOrg(), "-" == i || 1 != _ufno)) && ("-" != a && "" != a || (1 == _ufns && (a = this._uRef()), "-" == i || 1 != _ufno)) && ("-" != a && "" != a || ("-" == i && 1 == _ufns && (a = "utmccn=(direct)|utmcsr=(direct)|utmcmd=(none)"), "-" != a && "" != a)) ? ("-" != i && (h = i.indexOf("."), h > -1 && (h = i.indexOf(".", h + 1)), h > -1 && (h = i.indexOf(".", h + 1)), h > -1 && (h = i.indexOf(".", h + 1)), b = i.substring(h + 1, i.length), b.toLowerCase() == a.toLowerCase() && (f = 1), b = i.substring(0, h), (h = b.lastIndexOf(".")) > -1 && (b = b.substring(h + 1, b.length), g = 1 * b)), 0 != f && 1 != _ufns || (b = this._uGC(l, "mp__utma=" + _udh, ";"), (h = b.lastIndexOf(".")) > 9 && (_uns = b.substring(h + 1, b.length), _uns = 1 * _uns), g++, 0 == _uns && (_uns = 1), _ubd.cookie = "mp__utmz=" + _udh + "." + _ust + "." + _uns + "." + g + "." + a + "; path=" + _utcp + "; " + k + _udo), 0 == f || 1 == _ufns ? "&utmcn=1" : "&utmcr=1") : "")
        }
    }, this._uRef = function() {
        if ("0" == _ur || "" == _ur || "-" == _ur) return "";
        var b, c, d, a = 0;
        if ((a = _ur.indexOf("://")) < 0) return "";
        b = _ur.substring(a + 3, _ur.length), b.indexOf("/") > -1 && (c = b.substring(b.indexOf("/"), b.length), c.indexOf("?") > -1 && (c = c.substring(0, c.indexOf("?"))), b = b.substring(0, b.indexOf("/"))), b = b.toLowerCase(), d = b, (a = d.indexOf(":")) > -1 && (d = d.substring(0, a));
        for (var e = 0; e < _uRno.length; e++)
            if ((a = d.indexOf(_uRno[e].toLowerCase())) > -1 && d.length == a + _uRno[e].length) {
                _ufno = 1;
                break
            } return 0 == b.indexOf("www.") && (b = b.substring(4, b.length)), "utmccn=(referral)|utmcsr=" + this._uEC(b) + "|utmcct=" + this._uEC(c) + "|utmcmd=referral"
    }, this._uOrg = function(a) {
        if ("0" == _ur || "" == _ur || "-" == _ur) return "";
        var c, d, b = 0;
        if ((b = _ur.indexOf("://")) < 0) return "";
        c = _ur.substring(b + 3, _ur.length), c.indexOf("/") > -1 && (c = c.substring(0, c.indexOf("/")));
        for (var e = 0; e < _uOsr.length; e++)
            if (c.toLowerCase().indexOf(_uOsr[e].toLowerCase()) > -1 && ((b = _ur.indexOf("?" + _uOkw[e] + "=")) > -1 || (b = _ur.indexOf("&" + _uOkw[e] + "=")) > -1)) {
                d = _ur.substring(b + _uOkw[e].length + 2, _ur.length), (b = d.indexOf("&")) > -1 && (d = d.substring(0, b));
                for (var f = 0; f < _uOno.length; f++)
                    if (_uOno[f].toLowerCase() == d.toLowerCase()) {
                        _ufno = 1;
                        break
                    } return a ? this._uEC(d) : "utmccn=(organic)|utmcsr=" + this._uEC(_uOsr[e]) + "|utmctr=" + this._uEC(d) + "|utmcmd=organic"
            } return ""
    }, this._uBInfo = function() {
        var a = "-",
            b = "-",
            c = "-",
            d = "-",
            e = "-",
            f = 1,
            g = navigator;
        if (self.screen) a = screen.width + "x" + screen.height, b = screen.colorDepth + "-bit";
        else if (self.java) {
            var h = java.awt.Toolkit.getDefaultToolkit(),
                i = h.getScreenSize();
            a = this._uES(i.width + "x" + i.height)
        }
        return g.language ? c = g.language.toLowerCase() : g.browserLanguage && (c = g.browserLanguage.toLowerCase()), c = this._uES(c), f = g.javaEnabled() ? 1 : 0, _uflash && (d = this._uES(this._uFlash())), _ubd.characterSet ? e = this._uES(_ubd.characterSet) : _ubd.charset && (e = this._uES(_ubd.charset)), "&utmcs=" + e + "&utmsr=" + a + "&utmsc=" + b + "&utmul=" + c + "&utmje=" + f + "&utmfl=" + d
    }, this.__utmSetTrans = function() {
        var a;
        if (_ubd.getElementById ? a = _ubd.getElementById("utmtrans") : _ubd.utmform && _ubd.utmform.utmtrans && (a = _ubd.utmform.utmtrans), a) {
            var c, b = a.value.split("UTM:");
            c = new Array;
            for (var d = 0; d < b.length; d++)
                if (b[d] = this._uTrim(b[d]), "T" == b[d].charAt(0) || "I" == b[d].charAt(0)) {
                    var e = Math.round(2147483647 * Math.random());
                    _utsp && "" != _utsp || (_utsp = "|");
                    var f = b[d].split(_utsp),
                        g = "";
                    "T" == f[0].charAt(0) ? (g = "&utmt=tran&utmn=" + e, _udl.hostname && "" != _udl.hostname && (g += "&utmhn=" + this._uES(_udl.hostname)), f[1] = this._uTrim(f[1]), f[1] && "" != f[1] && (g += "&utmtid=" + this._uES(f[1])), f[2] = this._uTrim(f[2]), f[2] && "" != f[2] && (g += "&utmtst=" + this._uES(f[2])), f[3] = this._uTrim(f[3]), f[3] && "" != f[3] && (g += "&utmtto=" + this._uES(f[3])), f[4] = this._uTrim(f[4]), f[4] && "" != f[4] && (g += "&utmttx=" + this._uES(f[4])), f[5] = this._uTrim(f[5]), f[5] && "" != f[5] && (g += "&utmtsp=" + this._uES(f[5])), f[6] = this._uTrim(f[6]), f[6] && "" != f[6] && (g += "&utmtci=" + this._uES(f[6])), f[7] = this._uTrim(f[7]), f[7] && "" != f[7] && (g += "&utmtrg=" + this._uES(f[7])), f[8] = this._uTrim(f[8]), f[8] && "" != f[8] && (g += "&utmtco=" + this._uES(f[8]))) : (g = "&utmt=item&utmn=" + e, _udl.hostname && "" != _udl.hostname && (g += "&utmhn=" + this._uES(_udl.hostname)), f[1] = this._uTrim(f[1]), f[1] && "" != f[1] && (g += "&utmtid=" + this._uES(f[1])), f[2] = this._uTrim(f[2]), f[2] && "" != f[2] && (g += "&utmipc=" + this._uES(f[2])), f[3] = this._uTrim(f[3]), f[3] && "" != f[3] && (g += "&utmipn=" + this._uES(f[3])), f[4] = this._uTrim(f[4]), f[4] && "" != f[4] && (g += "&utmiva=" + this._uES(f[4])), f[5] = this._uTrim(f[5]), f[5] && "" != f[5] && (g += "&utmipr=" + this._uES(f[5])), f[6] = this._uTrim(f[6]), f[6] && "" != f[6] && (g += "&utmiqt=" + this._uES(f[6]))), g += "&utmcc=" + this._uGCS(), this._uSP() && this.fireGif(_ugifpath + "?utmwv=" + _uwv + g, !1)
                }
        }
    }, this._uFlash = function() {
        var f = "-",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++)
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash ")[1];
                    break
                }
        } else if (window.ActiveXObject)
            for (var ii = 10; ii >= 2; ii--) try {
                var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                if (fl) {
                    f = ii + ".0";
                    break
                }
            } catch (a) {}
        return f
    }, this.__utmLinker = function(a, b) {
        if (_ulink) {
            var c, d, e = "-",
                f = "-",
                g = "-",
                h = "-",
                i = "-",
                j = "-",
                k = _ubd.cookie;
            if (a && "" != a) {
                var l = a.indexOf("?"),
                    m = a.indexOf("#");
                if (k && (e = this._uGC(k, "mp__utma=" + _udh, ";"), f = this._uGC(k, "mp__utmb=" + _udh, ";"), g = this._uGC(k, "mp__utmc=" + _udh, ";"), h = this._uGC(k, "mp__utmx=" + _udh, ";"), i = this._uGC(k, "mp__utmz=" + _udh, ";"), j = this._uGC(k, "mp__utmv=" + _udh, ";"), d = 1 * this._uHash(e + f + g + h + i + j) + 1 * _udh, e = this._uES(e), f = this._uES(f), g = this._uES(g), h = this._uES(h), i = this._uES(i), j = this._uES(j), c = "mp__utma=" + e + "&mp__utmb=" + f + "&mp__utmc=" + g + "&mp__utmx=" + h + "&mp__utmz=" + i + "&mp__utmv=" + j + "&mp__utmk=" + d), c) {
                    if (b && m > -1) return;
                    b ? _udl.href = a + "#" + c : l == -1 && m == -1 ? _udl.href = a + "?" + c : m == -1 ? _udl.href = a + "&" + c : l == -1 ? _udl.href = a.substring(0, m - 1) + "?" + c + a.substring(m) : _udl.href = a.substring(0, m - 1) + "&" + c + a.substring(m)
                } else _udl.href = a
            }
        }
    }, this.__utmLinkPost = function(a, b) {
        if (_ulink) {
            var c, d, e = "-",
                f = "-",
                g = "-",
                h = "-",
                i = "-",
                j = "-",
                k = _ubd.cookie;
            if (a && a.action) {
                var l = a.action.indexOf("?"),
                    m = a.action.indexOf("#");
                if (k && (e = this._uGC(k, "mp__utma=" + _udh, ";"), f = this._uGC(k, "mp__utmb=" + _udh, ";"), g = this._uGC(k, "mp__utmc=" + _udh, ";"), h = this._uGC(k, "mp__utmx=" + _udh, ";"), i = this._uGC(k, "mp__utmz=" + _udh, ";"), j = this._uGC(k, "mp__utmv=" + _udh, ";"), d = 1 * this._uHash(e + f + g + h + i + j) + 1 * _udh, e = this._uES(e), f = this._uES(f), g = this._uES(g), h = this._uES(h), i = this._uES(i), j = this._uES(j), c = "mp__utma=" + e + "&mp__utmb=" + f + "&mp__utmc=" + g + "&mp__utmx=" + h + "&mp__utmz=" + i + "&mp__utmv=" + j + "&mp__utmk=" + d), c) {
                    if (b && m > -1) return;
                    b ? a.action += "#" + c : l == -1 && m == -1 ? a.action += "?" + c : m == -1 ? a.action += "&" + c : l == -1 ? a.action = a.action.substring(0, m - 1) + "?" + c + a.action.substring(m) : a.action = a.action.substring(0, m - 1) + "&" + c + a.action.substring(m)
                }
            }
        }
    }, this.__utmSetVar = function(a) {
        if (a && "" != a && (_udo && "" != _udo || (_udh = this._uDomain(), _udn && "" != _udn && (_udo = " domain=" + _udn + ";")), this._uVG())) {
            var b = Math.round(2147483647 * Math.random());
            _ubd.cookie = "mp__utmv=" + _udh + "." + this._uES(a) + "; path=" + _utcp + "; expires=" + this._uNx() + "; SameSite=None; secure;" + _udo;
            var c = "&utmt=var&utmn=" + b;
            _udl.hostname && "" != _udl.hostname && (c += "&utmhn=" + this._uES(_udl.hostname)), c += "&utmcc=" + this._uGCS(), this._uSP() && this.fireGif(_ugifpath + "?utmwv=" + _uwv + c, !0)
        }
    }, this.__utmTrackEvent = function(a, b, c, d, e) {
        if (a && "" != a && b && "" != b) {
            var f = e,
                g = "";
            f && "" != f || (f = _udl.pathname + _udl.search), g += "&utmt=event&utme=5(" + this._UEE(a) + "*" + this._UEE(b), c && "" != c && (g += "*" + c), g += ")", d && "" != d && (g += "(" + d + ")"), this.urchinTracker(f, g)
        }
    }, this._uGCS = function() {
        var a, b = "",
            c = _ubd.cookie;
        return "-" != (a = this._uGC(c, "mp__utma=" + _udh, ";")) && (b += this._uES("__utma=" + a + ";+")), "-" != (a = this._uGC(c, "mp__utmb=" + _udh, ";")) && (b += this._uES("__utmb=" + a + ";+")), "-" != (a = this._uGC(c, "mp__utmc=" + _udh, ";")) && (b += this._uES("__utmc=" + a + ";+")), "-" != (a = this._uGC(c, "mp__utmx=" + _udh, ";")) && (b += this._uES("__utmx=" + a + ";+")), "-" != (a = this._uGC(c, "mp__utmz=" + _udh, ";")) && (b += this._uES("__utmz=" + a + ";+")), "-" != (a = this._uGC(c, "mp__utmv=" + _udh, ";")) && (b += this._uES("__utmv=" + a + ";")), "+" == b.charAt(b.length - 1) && (b = b.substring(0, b.length - 1)), b
    }, this._uGC = function(a, b, c) {
        if (!a || "" == a || !b || "" == b || !c || "" == c) return "-";
        var d, e, f, g = "-";
        return d = a.indexOf(b), f = b.indexOf("=") + 1, d > -1 && (e = a.indexOf(c, d), e < 0 && (e = a.length), g = a.substring(d + f, e)), g
    }, this._uDomain = function() {
        if (!_udn || "" == _udn || "none" == _udn) return _udn = "", 1;
        if ("auto" == _udn) {
            var a = _ubd.location.hostname;
            "www." == a.substring(0, 4) && (a = a.substring(4, a.length)), _udn = a
        }
        return _udn = _udn.toLowerCase(), "off" == _uhash ? 1 : this._uHash(_udn)
    }, this._uHash = function(a) {
        if (!a || "" == a) return 1;
        for (var b = 0, c = 0, d = a.length - 1; d >= 0; d--) {
            var e = parseInt(a.charCodeAt(d));
            b = (b << 6 & 268435455) + e + (e << 14), 0 != (c = 266338304 & b) && (b ^= c >> 21)
        }
        return b
    }, this._uFixA = function(a, b, c) {
        if (!a || "" == a || !b || "" == b || !c || "" == c) return "-";
        var d = this._uGC(a, "mp__utma=" + _udh, b),
            e = 0,
            f = 0;
        return (f = d.lastIndexOf(".")) > 9 && (_uns = d.substring(f + 1, d.length), _uns = 1 * _uns + 1, d = d.substring(0, f), (f = d.lastIndexOf(".")) > 7 && (e = d.substring(f + 1, d.length), d = d.substring(0, f)), (f = d.lastIndexOf(".")) > 5 && (d = d.substring(0, f)), d += "." + e + "." + c + "." + _uns), d
    }, this._uTrim = function(a) {
        if (!a || "" == a) return "";
        for (;
            " " == a.charAt(0) || "\n" == a.charAt(0) || "\r" == a.charAt(0, 1);) a = a.substring(1, a.length);
        for (;
            " " == a.charAt(a.length - 1) || "\n" == a.charAt(a.length - 1) || "\r" == a.charAt(a.length - 1);) a = a.substring(0, a.length - 1);
        return a
    }, this._uEC = function(a) {
        var b = "";
        if (!a || "" == a) return "";
        for (var c = 0; c < a.length; c++) b += " " == a.charAt(c) ? "+" : a.charAt(c);
        return b
    }, this.__utmVisitorCode = function(a) {
        var b = 0,
            c = 0,
            d = 0,
            e = 0,
            f = 31,
            g = this._uGC(_ubd.cookie, "mp__utma=" + _udh, ";");
        if (!((d = g.indexOf(".", 0)) < 0)) {
            if (!((e = g.indexOf(".", d + 1)) > 0)) return "";
            if (b = g.substring(d + 1, e), !((d = g.indexOf(".", e + 1)) > 0)) return "";
            if (c = g.substring(e + 1, d), a) return b;
            var h = new Array("A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9");
            return h[b >> 28 & f] + h[b >> 23 & f] + h[b >> 18 & f] + h[b >> 13 & f] + "-" + h[b >> 8 & f] + h[b >> 3 & f] + h[((7 & b) << 2) + (c >> 30 & 3)] + h[c >> 25 & f] + h[c >> 20 & f] + "-" + h[c >> 15 & f] + h[c >> 10 & f] + h[c >> 5 & f] + h[c & f]
        }
    }, this._uIN = function(a) {
        if (!a) return !1;
        for (var b = 0; b < a.length; b++) {
            var c = a.charAt(b);
            if ((c < "0" || c > "9") && "." != c) return !1
        }
        return !0
    }, this._UEE = function(a) {
        var c, d, e, b = "";
        if (!a || "" == a) return "";
        for (c = 0; c < a.length; c++) d = a.charAt(c), e = _ecm[d], b += void 0 != e ? e : d;
        return b
    }, this._uES = function(a, b) {
        return "function" == typeof encodeURIComponent ? b ? encodeURI(a) : encodeURIComponent(a) : escape(a)
    }, this._uUES = function(a) {
        return "function" == typeof decodeURIComponent ? decodeURIComponent(a) : unescape(a)
    }, this._uVG = function() {
        return 0 != _udn.indexOf("www.google.") && 0 != _udn.indexOf(".google.") && 0 != _udn.indexOf("google.") || "/" != _utcp || _udn.indexOf("google.org") != -1
    }, this._uSP = function() {
        var a = 100;
        return _usample && (a = _usample), a >= 100 || a <= 0 || this.__utmVisitorCode(1) % 1e4 < 100 * a
    }, this.urchinPathCopy = function(a) {
        var c, d, e, f, g, h, i, j, k, b = document;
        for (h = new Array("a", "b", "c", "v", "x", "z"), j = this._uDomain(), _udn && "" != _udn && (k = " domain=" + _udn + ";"), c = this._uNx() + ";", d = new Date, d.setTime(d.getTime() + 1e3 * _utimeout), d = d.toGMTString() + ";", e = new Date, e.setTime(e.getTime() + 1e3 * _ucto), e = e.toGMTString() + ";", f = 0; f < 6; f++) i = " expires=", 1 == f ? i += d : 2 == f ? i = "" : i += 5 == f ? e : c, g = this._uGC(b.cookie, "__utm" + h[f] + "=" + j, "; SameSite=None; secure;"), "-" != g && (b.cookie = "__utm" + h[f] + "=" + g + "; path=" + a + ";" + i + k)
    }, this._uNx = function() {
        return new Date((new Date).getTime() + 63072e6).toGMTString()
    }, this.fireGif = function(a, b) {
        var c = new Image(1, 1);
        c.src = a, c.onload = function() {
            mpu._uVoid(), null != c && (c.onload = null)
        }, b && (c = null)
    }, this.addTrans = function(a, b) {
        mpel = this._uGC(_ubd.cookie.toLowerCase(), "mpel=", ";"), "-" != mpel ? mpel = "EasyLink " + mpel : mpel = "", tranx.orderID = a, tranx.affiliate = mpel, tranx.total = b, tranx.tax = "0", tranx.shipping = "0", tranx.city = "", tranx.state = "", tranx.country = ""
    }, this.addItem = function(a, b, c, d, e, f) {
        var g = tranx.items.length;
        tranx.items[g] = new Object, tranx.items[g].orderID = a, tranx.items[g].sku = b, tranx.items[g].productName = c, tranx.items[g].category = d, tranx.items[g].price = e, tranx.items[g].quantity = f
    }, this.trackTransWithItems = function(a) {
        try {
            if (a == tranx.orderID) {
                var b = null,
                    c = document.createElement("textarea");
                c.id = "utmtrans", c.value = "UTM:T|" + tranx.orderID + "|" + tranx.affiliate + "|" + tranx.total + "|" + tranx.tax + "|" + tranx.shipping + "|" + tranx.city + "|" + tranx.state + "|" + tranx.country + "\n";
                for (var d = 0; d < tranx.items.length; d++) b = tranx.items[d], c.value += "UTM:I|" + b.orderID + "|" + b.sku + "|" + b.productName + "|" + b.category + "|" + b.price + "|" + b.quantity + "\n";
                var e = document.createElement("form");
                e.style.display = "none", e.name = "utmform", e.appendChild(c), document.body.appendChild(e), e = null, c = null, this.__utmSetTrans()
            }
        } catch (a) {}
    }, this.trackTrans = function(a, b) {
        try {
            var c = "";
            b = b.replace(/(\$|,)/g, ""), c = this._uGC(_ubd.cookie.toLowerCase(), "mpel=", ";"), c = "-" != c ? "EasyLink " + c : "";
            var d = document.createElement("textarea");
            d.id = "utmtrans", d.value = "UTM:T|" + a + "|" + c + "|" + b + "|||||\nUTM:I|" + a + "|" + _udl.hostname + "|" + _udl.hostname + "||" + b + "|1\n";
            var e = document.createElement("form");
            e.style.display = "none", e.name = "utmform", e.appendChild(d), document.body.appendChild(e), e = null, d = null, this.__utmSetTrans()
        } catch (a) {}
    }, this._shorten = function(a, b, c, d, e) {
        var f, h, g = a.length;
        for (h = new RegExp(c, "g"); g + b.length > d && (f = b.match(h), !(null != f && f.length <= e));) b = b.substring(0, b.lastIndexOf(c));
        return b
    }, this._setDomainName = function(a) {
        _udn = a
    }
}
if ("undefined" == typeof mpu) {
    var mpu = new MP_Urchin;
    "undefined" != typeof mp_udn && mpu._setDomainName(mp_udn), "undefined" != typeof mp_initData ? mpu._initData() : window.top != window.self && "undefined" == typeof mp_trackFrame || mpu.urchinTracker(), "function" == typeof mpu_ecomm && mpu_ecomm()
}
