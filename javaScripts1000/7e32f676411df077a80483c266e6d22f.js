!function(){var y=window,t="undefined",E=typeof _ogezio_domain==t?"o.gez.io":_ogezio_domain;typeof _ogezio==t&&(_ogezio=[]),typeof _agezio==t&&(_agezio=[]),y.OGEZIO||(y.OGEZIO=new function(){function f(t){for(var e=m.cookie.split("; "),a=0;a<e[D];a++){var o=e[a].split("=");if(1<o[D]&&t==o[0])return unescape(o[1])}return null}function o(t,e,a,o){var n=new Date,i=";samesite=strict";u&&(i+=";secure"),o&&(i+=";domain="+o),n.setDate(n.getDate()+a);var r=t+"="+e+";expires="+n.toGMTString()+";path=/"+i;m.cookie=r}function r(t){var e="script",a=m.getElementsByTagName(e)[0],o=m.createElement(e);o.src=t,o.async=!0,a.parentNode.insertBefore(o,a)}function l(t,e,a,o){var n=(u?s:"http:")+"//"+t;if(m.images){var i=new Image;i.src=n+e+"?"+o,c.push(i)}else r(n+a+"?"+o)}function n(t){var e=t.options||{},a=[],o=screen;if(t.m1&&t.m2){0==_agezio[D]&&_agezio.push(t),a.push("m1="+d(t.m1)),a.push("m2="+d(t.m2)),a.push("m3="+d(t.m3||"")),a.push("m4="+d(t.m4||"")),a.push("i1="+d(t.i1||"")),a.push("i2="+d(t.i2||"")),a.push("i3="+d(t.i3||"")),a.push("h1="+d(f(v)||"")),a.push("ui="+d(_())),a.push("ns_t="+ +new Date),a.push("ns_c="+d(m.characterSet||m.defaultCharset||"")),o&&(o.width&&o.height&&a.push("sw="+o.width+"&sh="+o.height),o.colorDepth&&a.push("sc="+o.colorDepth)),a.push("h5="+(function(){try{var t=m.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))}catch(t){return!1}}()?1:0));var n=m.referrer.substr(0,50);a.push("cr="+d(n)),a.push("cu="+d(m.URL)),a.push("kw=");for(var i=a.join("&"),r=a[D],s=e.domain||E,u=r-1;2e3<i[D]&&0<=u;u--){var c=a[u].split("=",2);a[u]=c[0]+"=",i=a.join("&")}l(s,"/m","/s",i)}}var v="MID",d=y.encodeURIComponent||escape,m=document,s=m.location.protocol,u="https:"==s,c=[],i=[],h=y.location.host.replace(/:\d+$/,""),D="length";this.track=function(t){t&&n(t)};function g(t,e,a){function o(t){var e=s[D]+1;return"&au"+e+"="+d(t.au)+"&az"+e+"="+d(t.az)}function n(){var t=s[D];(t||c)&&(c&&(s.push(c),c=""),l("a.gez.io","/v","/vs",i+t+s.join("")),s=[],u=0)}var i=["m1=",d(t.m1||""),"&m2=",d(t.m2||""),"&h1=",d(f(v)||""),"&ns_t=",+new Date,"&cu=",d(m.URL),"&ac="].join(""),r=2028-i[D],s=[],u=0,c="";a[D]&&(c="&azv="+a.join(","),u+=c[D]);for(var h=e[D],g=0;g<h;g++){var p=o(e[g]);u+p[D]>=r&&(n(),p=o(e[g])),s.push(p),u+=p[D]}n()}this.vt=function(t,e,a){var o=[];o.push("h1="+d(f(v)||"")),o.push("ns_t="+ +new Date),o.push("cu="+d(m.URL)),o.push("vi="+d(e||"")),o.push("vu="+d(t||"")),o.push("m3="+d(a||""));var n=m.referrer.substr(0,50);o.push("cr="+d(n)),l("v.gez.io","/a","/as",o.join("&"))};function p(e,a){try{if(y.openDatabase){var t=y.openDatabase("sqlite_ogezio","","gezio",16384);void 0!==a?i.dbData&&i.dbData==a||t.transaction(function(t){t.executeSql("CREATE TABLE IF NOT EXISTS ucache(name TEXT NOT NULL PRIMARY KEY, value TEXT NOT NULL)",[],function(t,e){},function(t,e){}),t.executeSql("INSERT OR REPLACE INTO ucache(name, value) VALUES(?, ?)",[e,a],function(t,e){},function(t,e){})}):t.transaction(function(t){t.executeSql("SELECT value FROM ucache WHERE name=?",[e],function(t,e){1<=e.rows.length?i.dbData=e.rows.item(0).value:i.dbData=""},function(t,e){})})}}catch(t){}}function z(t,e){p(t,e);var a=h.replace(/^.*(\.[^.]+\.(com|net|org|tv|io|tk).*)$/,"$1");"."!=a[0]&&(a="."+a),o(t,e,-365,a),o(t,e,365,a);try{y.localStorage&&y.localStorage.setItem(t,e)}catch(t){}try{y.globalStorage&&(y.globalStorage[h][t]=e)}catch(t){}try{y.sessionStorage&&y.sessionStorage.setItem(t,e)}catch(t){}}var _=function(){var t="";for(var e in i)i[e]&&(t=i[e]);return t},e=function(t){var e;e=i.dbData?i.dbData:i.localData?i.dbData:i.sessionData?i.dbData:i.globalData?i.dbData:i.cookieData?i.dbData:void 0;var a="undefined"!=typeof _ogeziouid&&10<_ogeziouid.length;void 0!==e?(z(t,e),a&&_ogeziouid===e||r("//"+E+"/setuid/"+e)):a&&z(t,_ogeziouid)};this.init=function(){!function(t){p(t),i.cookieData=f(t);try{y.localStorage&&(i.localData=y.localStorage.getItem(t))}catch(t){}try{y.globalStorage&&(i.globalData=y.globalStorage[h][t])}catch(t){}try{y.sessionStorage&&(i.sessionData=y.sessionStorage.getItem(t))}catch(t){}setTimeout(function(){e(t)},50)}("uid"),function(){for(var t=_ogezio,e=t[D],a=0;a<e;a++)t[a]&&n(t[a]);_ogezio=[]}(),function(e){e=e||".ads-zone";var a=_agezio[D]?_agezio[0]:{};y.jQuery&&jQuery(function(){var t=[],o=[];jQuery(e).each(function(t){var e=jQuery(this),a=e.attr("zone-id");a&&"none"!=e.css("display")&&o.push(a)}),(t[D]||o[D])&&setTimeout(function(){g(a,t,o)},5e3)})}()},this.initAsync=function(){r("//"+E+"/getuid")}}),typeof _ogeziouid!=t?y.OGEZIO.init():y.OGEZIO.initAsync()}();