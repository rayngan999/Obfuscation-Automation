/* eslint-disable */
!(function (e, t) { typeof exports === 'object' && typeof module === 'object' ? module.exports = t() : typeof define === 'function' && define.amd ? define('Template', [], t) : typeof exports === 'object' ? exports.Template = t() : e.Template = t(); }(typeof self !== 'undefined' ? self : this, () => (function (e) { function t(o) { if (n[o]) return n[o].exports; const r = n[o] = { i: o, l: !1, exports: {} }; return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports; } var n = {}; return t.m = e, t.c = n, t.d = function (e, n, o) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: o }); }, t.n = function (e) { const n = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return t.d(n, 'a', n), n; }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, t.p = '/', t(t.s = 0); }([function (e, t, n) {
  Object.defineProperty(t, '__esModule', { value: !0 }); let o = n(1),
    r = {}; location.search.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), (e, t, n, o) => { r[t] = o; }); let a = void 0; try { a = o.a('4bCG4bCH4bCU', '377fvt+6377fut++', r.corejs_env_key) === 'dev' ? '' : '.min'; } catch (e) { a = '.min'; } const c = document.createElement('script'); c.id = 'arf-core-js', c.type = 'application/javascript', c.src = `//media1.admicro.vn/cms/Arf${a}.js`, document.getElementById(c.id) || document.getElementsByTagName('body')[0].appendChild(c), window.arfZonesQueue = window.arfZonesQueue || [], window.arfZonesQueue.push({ el: document.getElementById('k57luhja'), propsData: { model: {"id":"k57luhja","name":"Floating Right â KÃ­ch thÆ°á»c 160x600 â XuyÃªn trang\t\t","description":"","css":"","outputCss":"","height":600,"width":160,"targetIFrame":"0","isShowBannerAgain":false,"source":"","isMobile":false,"isResponsive":false,"isPageLoad":true,"groupSSP":"","isCustomSize":true,"supportThirdParty":"0","isIncludeDescription":true,"status":"active","totalShare":3,"isZoneVideo":false,"positionOnSite":"0","timeBetweenAds":0,"isTemplate":true,"template":"<div style=\"display: none; position: absolute; top: 50px; float: right; text-align: left; width: 160px;\" id=\"bgAdmRight\">\n\t<div id=\"slot2\">%%ARF_CONTENT%%</div>\n</div> \n<script language=\"javascript\">\n(function(){\nvar _admBgFloat2;\nvar admStickyFloat2={top:35,bottom:1000,start:200};\nfunction getScrollTop() {\n    var b = document.body.scrollTop;\n    0 == b && (b = window.pageYOffset ? window.pageYOffset : document.body.parentElement ? document.body.parentElement.scrollTop : 0);\n    return b\n}\nfunction getElementTop(b) {\n    if (document.getElementById) var a = document.getElementById(b);\n    else document.all && (a = document.all[b]);\n    if (null != a) {\n        yPos = a.offsetTop;\n        for (tempEl = a.offsetParent; null != tempEl;) yPos += tempEl.offsetTop, tempEl = tempEl.offsetParent;\n        return yPos\n    }\n    return 150\n}\nfunction float2Run(b, a, c) {\n    var d = document.getElementById(\"bgAdmRight\");\n        \n    a != b ? (a = 0 < c ? a + c <= b ? a + c : b : a + c >= b ? a + c : b, d.style.top = a + \"px\", setTimeout(\"float2Run(\" + b + \",\" + a + \",\" + c + \")\", 1)) : (_admBgFloat2 && clearTimeout(_admBgFloat2), checkFloat2())\n}\nwindow.checkFloat2 =function() {\t\n    var b = document.getElementById(\"bgAdmRight\"),\n        c = document,\n        c = Math.max(Math.max(c.body.scrollHeight, c.documentElement.scrollHeight), Math.max(c.body.offsetHeight, c.documentElement.offsetHeight), Math.max(c.body.clientHeight, c.documentElement.clientHeight)),\n        d = getScrollTop();\n    if (1280 > document.body.clientWidth)  b.style.display = \"none\";\n    else {    \n        b.style.display = \"\";\n        var e = Math.floor((document.body.clientWidth - 1110) / 2);        \n        b.style.right= e - 110+ \"px\";\n        getElementTop(\"bgAdmRight\");\n        d = admStickyFloat2.top  >= d ? admStickyFloat2.top : d >= c - admStickyFloat2.bottom ? c - admStickyFloat2.bottom : d;\n        admStickyFloat2.top  == d ? (b.style.position = \"absolute\", b.style.top = admStickyFloat2.start + admStickyFloat2.top+\"px\") : d == c - admStickyFloat2.bottom ? (b.style.position = \"absolute\", b.style.top = d + \"px\") : (b.style.position = \"fixed\", b.style.top = admStickyFloat2.top+\"px\")\n    }\n    _admBgFloat2 = setTimeout(\"checkFloat2();\", 10)\n}\ncheckFloat2();\n})();\n</script>","isNoBrand":false,"userId":"k0q4bpip","createdAt":"2020-01-10T03:32:31.000Z","updatedAt":"2021-05-20T03:11:21.000Z","deletedAt":null,"siteId":"k57lpx97","zoneTypeId":"bbdafc59-1c45-4145-b39e-f9760627d954","zoneSizeTypeId":null,"site":{"id":"k57lpx97","domain":"http://danviet.vn/","globalFilters":[{"id":"kgapku2o","startTime":"2020-10-14T17:00:00.000Z","type":"variable","value":"true","endTime":null,"comparison":"!=","siteId":"k57lpx97","globalVariables":"_chk_danviet","listZoneId":null,"conditionZone":null},{"id":"kglqg1je","startTime":"2020-10-22T17:00:00.000Z","type":"variable","value":"/chinh-tri/","endTime":null,"comparison":"!~","siteId":"k57lpx97","globalVariables":"_ADM_Channel","listZoneId":"k57lxmq9","conditionZone":"except"}]},"shares":[{"id":"k57lui53","css":"","outputCss":"","width":160,"height":600,"classes":"","isRotate":false,"rotateTime":20,"type":"single","format":"","zoneId":"k57luhja","isTemplate":false,"template":"","offset":"","isAdPod":false,"duration":""}]} } });
}, function (e, t, n) {
  function o(e) { return decodeURIComponent(atob(e).split('').map(e => `%${(`00${e.charCodeAt(0).toString(16)}`).slice(-2)}`).join('')); } function r(e, t) {
    let n = '',
      o = ''; o = e.toString(); for (let r = 0; r < o.length; r += 1) {
        let a = o.charCodeAt(r),
            c = a ^ t; n += String.fromCharCode(c);
      } return n;
  } function a(e, t, n) { return r(o(e), t && n ? r(o(t), n) : r(o(c), 90)); }t.a = a; var c = 'a25qbmtjY2g=';
}]))));
