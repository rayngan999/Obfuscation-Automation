(this.jsTagManagerJsonpCallback=this.jsTagManagerJsonpCallback||[]).push([[54,3,4,35,37],{35:function(t){t.exports=JSON.parse('{"LOND":"LON","MOSC":"MOW","SELA":"SEL","MILA":"MIL","PARI":"PAR","TYOA":"TYO","BKKT":"BKK","HKGA":"HKG","TPET":"TPE","ROME":"ROM","BERL":"BER","FRAN":"FRA","ISTA":"IST","SAOA":"SAO","NYCA":"NYC","SINS":"SIN","BRUS":"BRU","DUSS":"DUS","MELA":"MEL","KIEV":"IEV","DXBA":"DXB","KULM":"KUL","VENI":"VCE","GLAS":"GLA","RIOA":"RIO","OSAA":"OSA","COPE":"CPH","YTOA":"YTO","STOC":"STO","TELA":"TLV","BUEA":"BUE","CHIA":"CHI","BELF":"BFS","LYON":"LYS","CSHA":"SHA","MANC":"MAN","WASA":"WAS","YVRA":"YVR","OSLO":"OSL","JNGO":"NGO","CGKI":"JKT","BJSA":"BJS","YMQA":"YMQ","AMST":"AMS","BHZA":"BHZ","TENE":"TCI","AUHA":"AUH","MADR":"MAD","DFWA":"DFW","BARC":"BCN","ATLA":"ATL","SEAA":"SEA","HOUA":"HOU","WARS":"WAW","LASA":"LAS","BIRM":"BHX","BELI":"BEG","ORLB":"ORL","DENA":"DEN","MDEA":"MDE","FLLA":"FLL","PHLA":"PHL","PUSA":"PUS","ATHE":"ATH","CWBA":"CWB","JNBA":"JNB","DUBL":"DUB","NOTT":"NQT","EIND":"EIN","CMBA":"CMB","SYDA":"SYD","SJOA":"SJO","DTTA":"DTT","SANA":"SAN","PHXA":"PHX","KRAK":"KRK","BOLO":"BLQ","MUNI":"MUC","TPAA":"TPA","HAMB":"HAM","COLO":"CGN","REYK":"REK","SPKA":"SPK","HAVA":"HAV","EDIN":"EDI","BRIS":"BRS","STUT":"STR","PTYA":"PTY","PETE":"LED","ZURI":"ZRH","LARN":"LCA","NAPL":"NAP","MTYA":"MTY","MSYA":"MSY","LISB":"LIS","PRAG":"PRG","LIVE":"LPL","WMIP":"WMI","NBOA":"NBO","MALA":"AGP"}')},37:function(t,e,A){"use strict";A.r(e),A.d(e,"gtagInit",(function(){return r})),A.d(e,"GTAG_ID",(function(){return a}));var n=A(1),a=1038637144,r=function(t){var e=n.GLOBAL.getWindow();function A(){e.dataLayer.push(arguments)}return e.dataLayer||(t("https://www.googletagmanager.com/gtag/js?id=AW-".concat(a)),e.dataLayer=e.dataLayer||[],A("js",new Date)),A}},38:function(t,e,A){"use strict";A.r(e),A.d(e,"convertToIata",(function(){return a}));var n=A(35),a=function(t){return 4===t.length&&n[t]||t}},40:function(t,e,A){"use strict";A.r(e);var n=A(3),a=A(38),r=function(t){return t.originId||t.destinationId?"".concat(t.originId||"","_").concat(t.destinationId||"").toUpperCase():""},o=function(t,e){var A=t?"origin":"destination",n={},r=e["".concat(A,"Id")];if(r){n["flight_".concat(A,"_id")]=r.toUpperCase();var o=e["".concat(A,"Iata")];n[A]=Object(a.convertToIata)(r.toUpperCase()),o&&3===r.length&&(n["flight_".concat(A,"_airport")]=o.toUpperCase())}return n};e.default=function(t){return Object(n.a)({google_business_vertical:"flights",product_id:r(t),flight_depart_date:t.outboundDate||"",flight_return_date:t.inboundDate||""},function(t){return Object(n.a)(Object(n.a)({},o(!0,t)),o(!1,t))}(t))}},56:function(t,e,A){"use strict";A.r(e);var n=A(3),a=A(40),r=A(37),o=["home","car-hire-home","hotels-home","news","together","hotels-results","hotels-hotel-detail"];e.default=function(t,e){!function(t,e){var A={send_to:"AW-".concat(r.GTAG_ID)};"car-hire-results"===t.pagetype?A=Object(n.a)({send_to:"AW-".concat(r.GTAG_ID,"/").concat("ZfiOCKfTzdIBENiwoe8D")},{google_business_vertical:"car-hire"}):-1===o.indexOf(t.pagetype)&&(A=Object(n.a)(Object(n.a)({},A),Object(a.default)(t))),e("event","page_view",A),function(t){var e=(t.pagetype||"").toLowerCase();return-1!==e.indexOf("flights-from-")||-1!==e.indexOf("flights-to-")}(t)&&e("event","view_item_list",A)}(t,Object(r.gtagInit)(e))}}}]);
//# sourceMappingURL=gtag-view-gtag-view.568d85aa.chunk.js.map