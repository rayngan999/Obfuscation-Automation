var AWIN=AWIN||{};AWIN.Tracking=AWIN.Tracking||{},AWIN.sProtocol="https:"==location.protocol?"https://":"http://",AWIN.iScriptCount=0,AWIN.Tracking.device9Url="https://the.sciencebehindecommerce.com/d9core",AWIN.tldDomains=["com","org","edu","gov","uk","net","ca","de","jp","fr","au","us","ru","ch","it","nl","se","no","es","mil","gw","ax","wf","yt","sj","mobi","eh","mh","bv","ap","cat","kp","iq","um","arpa","pm","gb","cs","td","so","aero","biz","coop","info","jobs","museum","name","pro","travel","ac","ad","ae","af","ag","ai","al","am","an","ao","aq","ar","as","at","aw","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bm","bn","bo","br","bs","bt","bw","by","bz","cc","cd","cf","cg","ci","ck","cl","cm","cn","co","cr","cu","cv","cx","cy","cz","dj","dk","dm","do","dz","ec","ee","eg","er","et","eu","fi","fj","fk","fm","fo","ga","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","io","ir","is","je","jm","jo","ke","kg","kh","ki","km","kn","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","mg","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","np","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pn","pr","ps","pt","pw","py","qa","re","ro","rw","sa","sb","sc","sd","sg","sh","si","sk","sl","sm","sn","sr","st","sv","sy","sz","tc","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","tt","tv","tw","tz","ua","ug","uy","uz","va","vc","ve","vg","vi","vn","vu","ws","ye","yu","za","zm","zw"],AWIN.twoPartsTldDomains=["co.bb","co.ck","co.cr","co.in","co.id","co.il","co.jp","co.nz","co.za","co.kr","co.th","co.uk","org.uk","net.uk","com.pl","biz.pl","net.pl","com.cl","com.pe","com.ar","com.au","com.br"],AWIN.Tracking.fingerprinting=function(e){if(!document.getElementById("d9tag")){var n=AWIN.Tracking.getQueryVarValue("mtfp",document.location.search.substring(1));if(AWIN.Tracking.device9&&"no"!=n){window.D9v=e;var t=document.createElement("script");t.type="text/javascript",t.id="d9tag",t.async=!0,t.src=AWIN.Tracking.device9Url;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}},AWIN.Tracking.digestClickId=function(e){if(!/\d+_\d+_.+/.test(e))return!1;var n=e.split("_"),t={};return t.sName="_aw_m_"+n[0],t.sContents=e,t},AWIN.Tracking.getQueryVarValue=function(e,n){for(var t=n.split("&"),r=0;r<t.length;r++){var a=t[r].split("=");if(e.toLowerCase()==a[0].toLowerCase())return a[1]}},AWIN.Tracking.getAnchorValue=function(e){var n=document.location.hash.substring(1);if(n)return aid=n.match(e),aid?aid.toString().substr(4):null},AWIN.Tracking.buildQueryString=function(e){var n=[];for(var t in e)e.hasOwnProperty(t)&&n.push(t+"="+encodeURIComponent(e[t]));return n.join("&")},AWIN.Tracking._getDomain=function(){return document.domain},AWIN.Tracking._getCookieDomain=function(){if(void 0!==AWIN.Tracking.cookieDomain)return AWIN.Tracking.cookieDomain;var e=AWIN.Tracking._getDomain();if(e.split(".").length<3)return"."+e;var n=e.split(".").slice(-2).join(".");if(AWIN.twoPartsTldDomains.indexOf(n)>=0)return"."+e.split(".").slice(-3).join(".");var t=e.split(".").pop();return AWIN.tldDomains.indexOf(t)>=0?"."+e.split(".").slice(-2).join("."):"www."==e.substr(0,4)?e.substr(3):"."+e},AWIN.Tracking._getAWCValue=function(){for(var e,n=/[\?&]awc=(\d+_(\d+)_[0-9a-f]+)/gi,t=0,r=!1;e=n.exec(AWIN.Tracking._getBrowserSearchBarUrl());)t<e[2]&&(t=e[2],r=e[1]);return r||AWIN.Tracking.getAnchorValue(/awc=[0-9a-z_]+/i)},AWIN.Tracking._getAWaidValue=function(){var e=/[\?&]awaid=(\d+)/gi.exec(AWIN.Tracking._getBrowserSearchBarUrl()),n=null;return e&&(n=e[1]),n},AWIN.Tracking._getGCLIDValue=function(){var e=/[\?&]gclid=([0-9a-zA-Z_\-]+)/gi.exec(AWIN.Tracking._getBrowserSearchBarUrl()),n=null;return e&&(n=e[1]),n},AWIN.Tracking._getBrowserSearchBarUrl=function(){return document.location.search},AWIN.Tracking.getQueryParameterDelimiter=function(e){return-1===e.indexOf("?")?"?":"&"},AWIN.Tracking._getATPValue=function(){var e=AWIN.Tracking.getQueryVarValue("atp",document.location.search.substring(1));return e?parseInt(e):AWIN.Tracking.getAnchorValue(/atp=[0-9]+/i)?parseInt(parseanchorAtp):0},AWIN.Tracking.setCookie=function(e,n,t){var r=!1;if(AWIN.Tracking.Consent.getSnRegEx().test(e)?r=!0:AWIN.Tracking.Consent.getConsentIsRespected()&&!AWIN.Tracking.Consent.getConsent()||(r=!0),r){var a=new Date;a.setTime(a.getTime()+31536e6),t&&a.setTime(1e3*t);var i="; expires="+a.toGMTString();document.cookie=e+"="+n+i+"; path=/;domain="+this._getCookieDomain()}},AWIN.Tracking.setAWCCookie=function(){var e=AWIN.Tracking._getAWCValue();if(!/\d+_\d+_.+/.test(e))return!1;var n="_aw_m_"+e.split("_")[0];AWIN.Tracking.setCookie(n,e),AWIN.Tracking._getATPValue()>0&&AWIN.Tracking.setCookie("_aw_atp",AWIN.Tracking._getATPValue())},AWIN.Tracking.setGCLIDCookie=function(){var e=AWIN.Tracking._getGCLIDValue(),n=AWIN.Tracking._getAWaidValue();return null!==e&&null!==n&&(AWIN.Tracking.setCookie("_aw_m_"+n,"gclid_"+n+"_"+e),!0)},AWIN.Tracking.setIncentiveCookie=function(){var e=AWIN.Tracking._getAWCValue();if(!/\d+_\d+_.+/.test(e))return!1;var n="_aw_sn_"+e.split("_")[0];AWIN.Tracking.setCookie(n,e)},AWIN.Tracking.setAidCookie=function(){var e=AWIN.Tracking.getQueryVarValue("xid",document.location.search.substring(1));e||(e=AWIN.Tracking.getAnchorValue(/xid=\d+/)),e&&AWIN.Tracking.setCookie("_aw_xid",e)},AWIN.Tracking.getAffiliateId=function(){return AWIN.Tracking.getCookiesAsString(/_aw_xid/)},AWIN.Tracking.getSaleChannel=function(){return void 0!==AWIN.Tracking.Sale.channel?AWIN.Tracking.Sale.channel:""},AWIN.Tracking.cookiesWereSpecifiedByMerchant=function(){if(AWIN.Tracking.Sale&&AWIN.Tracking.Sale.click){if(/\d+_\d+_.+/.test(AWIN.Tracking.Sale.click))return!0}return!1},AWIN.Tracking.getCookiesAsString=function(e){var n,t="",r=!AWIN.Tracking.Consent.getConsentIsRespected()||AWIN.Tracking.Consent.getConsent(),a=!1;if(e||(e=/_aw_m_\d+/,n=AWIN.Tracking.Consent.getSnRegEx(),a=!0),a||r){for(var i=[],c=document.cookie.split(";"),o=0;o<c.length;o++){var s=c[o].split("=");e.test(s[0])?r&&i.push(s[1]):a&&n.test(s[0])&&(i.push(s[1]),AWIN.Tracking.Consent.setIsSnCookieAvailable())}i.length>0&&(t=i.toString().replace(" ",""))}return t},AWIN.Tracking.getScriptAppendNode=function(){var e=["body","head","html"];for(var n in e)if(document.getElementsByTagName(e[n])[0])return document.getElementsByTagName(e[n])[0]},AWIN.Tracking.frameAppend=function(e,n){document.getElementsByTagName("body")[0]&&AWIN.Tracking.Consent.getGdprAppends(n,AWIN.Tracking.getQueryParameterDelimiter(e),(function(n){e+=n;var t=document.createElement("iframe");t.src=e,document.getElementsByTagName("body")[0].appendChild(t),AWIN.Tracking.hideElement(t)}))},AWIN.Tracking.pixelAppend=function(e,n){document.getElementsByTagName("body")[0]&&AWIN.Tracking.Consent.getGdprAppends(n,AWIN.Tracking.getQueryParameterDelimiter(e),(function(n){e+=n;var t=document.createElement("img");t.src=e,document.getElementsByTagName("body")[0].appendChild(t),AWIN.Tracking.hideElement(t)}))},AWIN.Tracking.scriptAppend=function(e,n,t,r,a){if(!e||!n){var i=document.createElement("script");if(i.type="text/javascript",i.id="_aw_script_"+AWIN.iScriptCount++,e?i.src=e:n&&(i.text=n),r)for(var c in r)i.setAttribute(c,r[c]);t&&(i.onreadystatechange=function(){"complete"!=i.readyState&&"loaded"!=i.readyState||eval(t)},i.onload=function(){eval(t)}),e&&AWIN.Tracking.Consent.getGdprAppends(a,AWIN.Tracking.getQueryParameterDelimiter(i.src),(function(e){i.src+=e})),AWIN.Tracking.getScriptAppendNode().appendChild(i)}},AWIN.scriptsLoader=function(e){e:for(var n=0;n<e.length;n++){for(var t=e[n],r=0;r<t.aRequiredVars.length;r++)try{if(void 0===eval(t.aRequiredVars[r]))throw new Error}catch(e){continue e}t.sUrl?AWIN.Tracking.scriptAppend(t.sUrl):t.sContents&&AWIN.Tracking.scriptAppend(null,t.sContents)}},AWIN.Tracking.saleSubmit=function(){if(AWIN.Tracking.iMerchantId<1)return!1;AWIN.Tracking.Sale.currency=void 0!==AWIN.Tracking.Sale.currency?AWIN.Tracking.Sale.currency:"",AWIN.Tracking.Sale.test=void 0!==AWIN.Tracking.Sale.test?AWIN.Tracking.Sale.test:"0",AWIN.Tracking.Sale.voucher=void 0!==AWIN.Tracking.Sale.voucher?AWIN.Tracking.Sale.voucher:"",AWIN.Tracking.scriptAppend(AWIN.Tracking.buildSaleUrl("js")),AWIN.Tracking.BasketImage=new Image(1,1),AWIN.Tracking.BasketImage.src=AWIN.Tracking.buildSaleUrl("ia"),AWIN.Tracking.cookiesWereSpecifiedByMerchant()||(AWIN.enhancedTracking&&1==AWIN.enhancedTracking&&1!=AWIN.Tracking.Sale.pvOnly&&AWIN.Tracking.embedIframe("get"),AWIN.Tracking.fingerprinting({AdvID:"1062",OrderID:AWIN.Tracking.Sale.orderRef,OrderTotal:AWIN.Tracking.Sale.amount,SiteID:AWIN.Tracking.iMerchantId,TAG:2}))},AWIN.Tracking.basketSubmit=function(){var e=/^\s+|\s+$/g,n=document.getElementById("aw_basket").value.split("\n"),t=new Array;AWIN.Tracking.BasketImages=new Array;for(var r=0;r<n.length;r++){var a=n[r].replace(e,"");if(a.length>0){for(var i=a.split("|"),c="",o=0;o<i.length;o++){c+=i[o].replace(e,"").substring(0,255)+"|"}t[t.length]=encodeURIComponent(c.substring(0,c.length-1))}}for(r=0;r<t.length;r++)t[r].length>0&&(AWIN.Tracking.BasketImages[r]=new Image(1,1),AWIN.Tracking.BasketImages[r].src=AWIN.sProtocol+"www.zenaps.com/basket.php?product_line="+t[r])},AWIN.Tracking.getBasketData=function(){var e=[];if(!document.getElementById("aw_basket"))return e;for(var n=document.getElementById("aw_basket").value.split("\n"),t=0;t<n.length;t++)if(n[t].length>0){var r=n[t].split("|");try{e.push({id:r[3].replace(/^\[|\]$/gi,""),name:r[4].replace(/^\[|\]$/gi,""),price:r[5].replace(/^\[|\]$/gi,""),quantity:r[6].replace(/^\[|\]$/gi,""),sku:r[7].replace(/^\[|\]$/gi,""),cg:r[8].replace(/^\[|\]$/gi,""),category:r[9].replace(/^\[|\]$/gi,"")})}catch(n){return e}}return e},AWIN.Tracking.hideElement=function(e){"Microsoft Internet Explorer"==navigator.appName?(e.style.height=0,e.style.width=0,e.style.visibility="hidden",e.style.display="inherit",e.style.margin=0,e.style.border=0,e.style.padding=0):(e.style.setProperty("height","0","important"),e.style.setProperty("width","0","important"),e.style.setProperty("visibility","hidden","important"),e.style.setProperty("display","inherit","important"),e.style.setProperty("margin","0","important"),e.style.setProperty("border","0","important"),e.style.setProperty("padding","0","important"))},AWIN.Tracking.embedIframe=function(e){if(!document.getElementById("AW_ALT")){if("set"==e){var n="https://www.zenaps.com/alt.php?mid="+AWIN.Tracking.iMerchantId+"&sv="+AWIN.Tracking._getAWCValue(),t=parseInt(AWIN.Tracking._getATPValue());t>0&&(n=n+"|"+t)}else{var r=AWIN.Tracking.buildSaleUrl("et");n="https://www.zenaps.com/alt.php?mid="+AWIN.Tracking.iMerchantId+"&gv=2&l="+escape(r)}if(document.getElementsByTagName("body")[0]){var a=document.createElement("iframe");a.src=n,a.height="0",a.width="0",a.id="AW_ALT",document.getElementsByTagName("body")[0].appendChild(a);var i=document.getElementById("AW_ALT");AWIN.Tracking.hideElement(i)}}},AWIN.Tracking.buildSaleUrl=function(e){var n="js"==e?"js":"php",t="",r="";if("fc"!=e&&"et"!=e){t="&cks="+AWIN.Tracking.sCookiesString;var a=parseInt(AWIN.Tracking.getCookiesAsString(/_aw_atp/));a>0&&(r="&atp="+a)}var i=escape(window.location.href);"fc"==e&&(i=escape(i));var c="";1==AWIN.Tracking.Sale.pvOnly&&(c="&pv=1");var o=AWIN.sProtocol+"www.zenaps.com/sread."+n+"?a="+AWIN.Tracking.iMerchantId+"&b="+AWIN.Tracking.Sale.amount+"&cr="+AWIN.Tracking.Sale.currency+"&c="+AWIN.Tracking.Sale.orderRef+"&d="+AWIN.Tracking.Sale.parts+"&vc="+AWIN.Tracking.Sale.voucher+"&t="+AWIN.Tracking.Sale.test+"&ch="+AWIN.Tracking.getSaleChannel()+t+"&l="+i+"&tv=2"+c+r+"&tt="+e;return AWIN.Tracking.Sale.custom&&AWIN.Tracking.Sale.custom instanceof Array&&(o+=AWIN.Tracking.getDynamicParametersAsQueryString("p",AWIN.Tracking.Sale.custom)),AWIN.Tracking.Sale.customerAcquisition&&(o=o+"&customeracquisition="+AWIN.Tracking.Sale.customerAcquisition),AWIN.Tracking.Sale.servicePartnerIds&&AWIN.Tracking.Sale.servicePartnerIds instanceof Array&&(o+=AWIN.Tracking.getDynamicParametersAsQueryString("spa",AWIN.Tracking.Sale.servicePartnerIds)),AWIN.Tracking.Sale.servicePartnerReferences&&AWIN.Tracking.Sale.servicePartnerReferences instanceof Array&&(o+=AWIN.Tracking.getDynamicParametersAsQueryString("sparef",AWIN.Tracking.Sale.servicePartnerReferences)),AWIN.Tracking.Consent.getConsentIsRespected()&&(o+=AWIN.Tracking.Consent.getGdprQuery()),AWIN.Tracking.Consent.getIsSnCookieAvailable()&&(o+="&sn=1"),o},AWIN.Tracking.getDynamicParametersAsQueryString=function(e,n){for(var t="",r=0;r<n.length;r++){t=t+"&"+(e+(r+1))+"="+n[r]}return t},AWIN.Tracking.fetchZxParam=function(e){var n=window["zx_"+e],t=AWIN.Tracking.getQueryVarValue("zx_"+e,document.location.search.substring(1)),r=AWIN.Tracking.getXPath('//*[@id="zx_'+e+'"]').next();if(null!==r){n=null;var a=r.innerHTML}var i=AWIN.Tracking.getXPath('//META[@name="zx:'+e+'"]').next();if(null!==i)var c=i.getAttribute("content");return n||c||a||t},AWIN.Tracking.getXPath=function(e){return document.evaluate?{list:document.evaluate(e,document,null,XPathResult.ANY_TYPE,null),next:function(){return this.list.iterateNext()}}:{next:function(){return null}}},AWIN.Tracking.runScripts=function(){AWIN.Tracking.aScripts.length>0&&AWIN.scriptsLoader(AWIN.Tracking.aScripts)},AWIN.Tracking.runCount=0,AWIN.Tracking.run=function(){AWIN.Tracking.runCount++,AWIN.Tracking.cookiesWereSpecifiedByMerchant()?AWIN.Tracking.sCookiesString=escape(AWIN.Tracking.Sale.click):AWIN.Tracking.sCookiesString=escape(AWIN.Tracking.getCookiesAsString()),AWIN.Tracking.Sale&&(AWIN.Tracking.Consent.getConsentIsRespected()&&!AWIN.Tracking.Consent.getHasResult()||(AWIN.Tracking.saleSubmit(),document.getElementById("aw_basket")&&AWIN.Tracking.basketSubmit())),AWIN.Tracking._getAWCValue()?(AWIN.Tracking.Consent.getSnParameter()?AWIN.Tracking.setIncentiveCookie():AWIN.Tracking.setAWCCookie(),AWIN.Tracking.Consent.getConsentIsRespected()&&!AWIN.Tracking.Consent.getConsent()||(AWIN.enhancedTracking&&1==AWIN.enhancedTracking&&AWIN.Tracking.embedIframe("set"),AWIN.Tracking.fingerprinting({CampID:"3055",CCampID:AWIN.Tracking.iMerchantId,ImpID:AWIN.Tracking._getAWCValue(),TAG:1}))):AWIN.Tracking._getGCLIDValue()?AWIN.Tracking.setGCLIDCookie():AWIN.Tracking.refreshAWCookies(),AWIN.Tracking.setAidCookie()},AWIN.Tracking.getAWCookies=function(){for(var e=/_aw_m_\d+/,n=/\d+_\d+_.+/,t=[],r=!AWIN.Tracking.Consent.getConsentIsRespected()||AWIN.Tracking.Consent.getConsent(),a=document.cookie.split(";"),i=0;i<a.length;i++){var c=a[i].split("=");e.test(c[0])?r&&n.test(c[1])&&t.push(c):AWIN.Tracking.Consent.getSnRegEx().test(c[0])&&n.test(c[1])&&t.push(c)}return t},AWIN.Tracking.refreshAWCookies=function(){for(var e=AWIN.Tracking.getAWCookies(),n=0;n<e.length;n++){var t=e[n][0],r=e[n][1];AWIN.Tracking.setCookie(t,r,1);var a=r.split("_"),i=31536e3+parseInt(a[1]);AWIN.Tracking.setCookie(t,r,i)}},AWIN.Tracking.Consent={},function(e){var n,t=!1,r=!1,a=!1,i=!1,c=/_aw_sn_\d+/;e.checkForSnParameter=function(){var n=AWIN.Tracking.getQueryVarValue("sn",document.location.search.substring(1));n&&e.setSnParameter(parseInt(n))},e.getGdprQuery=function(){return void 0!==AWIN.Tracking.AdvertiserConsent?e.getConsent()?"&cons=1":"&cons=0":""},e.getConsent=function(){return void 0!==AWIN.Tracking.AdvertiserConsent?AWIN.Tracking.AdvertiserConsent:r},e.getHasResult=function(){return void 0!==AWIN.Tracking.AdvertiserConsent||a},e.setConsentPluginIsUsed=function(e){t=e},e.getConsentIsRespected=function(){return void 0!==AWIN.Tracking.AdvertiserConsent||t},e.setGdprQueryAdditionFunction=function(n){void 0===AWIN.Tracking.AdvertiserConsent&&(e.getGdprQuery=n)},e.setConsent=function(e){r=e,a=!0},e.setAdvertiserConsentStatus=function(e){void 0!==AWIN.Tracking.AdvertiserConsent&&(AWIN.Tracking.AdvertiserConsent=e,a=!0,AWIN.Tracking.run())},e.setSnParameter=function(e){n=e},e.setIsSnCookieAvailable=function(){i=!0},e.getSnParameter=function(){return!!n},e.getIsSnCookieAvailable=function(){return i},e.getSnRegEx=function(){return c},e.getGdprAppends=function(e,n,t){if(e){var r=n+"gdpr=${GDPR}&gdpr_consent=${GDPR_CONSENT_"+e+"}";if("function"==typeof __tcfapi)try{__tcfapi("getTCData",2,(function(e,a){var i=n;if(e&&a&&void 0!==e.c)return e.gdprApplies?i+="gdpr=1":i+="gdpr=0",i+="&gdpr_consent="+e.tcString,void t(i);t(r)}),[e])}catch(e){t(r)}else t(r)}else t("")},e.checkForSnParameter()}(AWIN.Tracking.Consent),AWIN.SandBoxGenerator=function(){var e={zxParams:{}},n=AWIN.Tracking.getAffiliateId(),t=AWIN.Tracking._getAWCValue();function r(r,a){var i={advertiser:{},plugin:{}};return function(e,r){e.plugin.publisherId=n,e.plugin.advertiserId=AWIN.Tracking.iMerchantId,e.plugin.protocol=AWIN.sProtocol,e.plugin.awc=t,e.advertiser.config=AWIN.Tracking[r]}(i,a),r.accessConfig.zxParams&&function(n,t){t.length>0&&(n.zxParams={});for(var r=0;r<t.length;r++)t[r]in e.zxParams?n.zxParams[t[r]]=e.zxParams[t[r]]:(n.zxParams[t[r]]=AWIN.Tracking.fetchZxParam(t[r]),e.zxParams[t[r]]=n.zxParams[t[r]])}(i.plugin,r.accessConfig.zxParams),r.accessConfig.location&&(i.plugin.location=document.location),r.accessConfig.referrer&&(i.plugin.referrer=document.referrer),r.accessConfig.sale&&(i.plugin.sale=AWIN.Tracking.Sale),r.accessConfig.basket&&(i.plugin.basket=AWIN.Tracking.getBasketData()),i}return{generate:function(e,n){var t="<body><script>var AWIN = AWIN || {};AWIN.Tracking = AWIN.Tracking || {};AWIN.payload = "+JSON.stringify(r(AWIN.Tracking[n],n))+';AWIN.pluginName = "'+n+'";AWIN.masterTagSb = "var%20AWIN%20%3D%20AWIN%20%7C%7C%20%7B%7D%3B%0AAWIN.iScriptCount%20%3D%200%3B%0A%0AAWIN.Tracking%20%3D%20%28function%28pluginName%2C%20payload%29%20%7B%0A%20%20%20%20%0A%20%20%20%20var%20fetchZxParam%20%3D%20function%28name%29%20%7B%0A%20%20%20%20%20%20%20%20return%20payload.plugin.zxParams%5Bname%5D%20%7C%7C%20null%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20var%20scriptAppend%20%3D%20function%28sScriptSrc%2C%20sScriptContent%2C%20sScriptOnLoad%2C%20oScriptTagParams%29%20%7B%0A%0A%20%20%20%20%20%20%20%20//%20only%20one%20of%20the%20two%20can%20be%20set%0A%20%20%20%20%20%20%20%20if%20%28sScriptSrc%20%26%26%20sScriptContent%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20//%20create%20script%20node%0A%20%20%20%20%20%20%20%20var%20scriptNode%20%20%3D%20document.createElement%28%27script%27%29%3B%0A%20%20%20%20%20%20%20%20scriptNode.type%20%3D%20%27text/javascript%27%3B%0A%20%20%20%20%20%20%20%20scriptNode.id%20%20%20%3D%20%27_aw_script_%27%20+%20AWIN.iScriptCount++%3B%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20//%20only%20add%20if%20param%20was%20passed%0A%20%20%20%20%20%20%20%20if%20%28sScriptSrc%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20scriptNode.src%20%3D%20sScriptSrc%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20if%20%28sScriptContent%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20scriptNode.text%20%3D%20sScriptContent%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20//%20set%20optional%20parameters%0A%20%20%20%20%20%20%20%20if%20%28oScriptTagParams%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20%28var%20name%20in%20oScriptTagParams%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20scriptNode%5Bname%5D%20%3D%20oScriptTagParams%5Bname%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20//%20attach%20an%20event%20handler%0A%20%20%20%20%20%20%20%20if%20%28sScriptOnLoad%29%20%7B%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20for%20IE%0A%20%20%20%20%20%20%20%20%20%20%20%20scriptNode.onreadystatechange%20%3D%20function%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20%28scriptNode.readyState%20%3D%3D%20%27complete%27%20%7C%7C%20scriptNode.readyState%20%3D%3D%20%27loaded%27%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20eval%28sScriptOnLoad%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20for%20everything%20else%0A%20%20%20%20%20%20%20%20%20%20%20%20scriptNode.onload%20%3D%20function%28%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20eval%28sScriptOnLoad%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20//%20append%20node%0A%20%20%20%20%20%20%20%20AWIN.Tracking.getScriptAppendNode%28%29.appendChild%28scriptNode%29%3B%0A%0A%20%20%20%20%20%20%20%20return%20scriptNode%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20var%20frameAppend%20%3D%20function%28sFrameSrc%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28document.getElementsByTagName%28%27body%27%29%5B0%5D%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20iframe%20%3D%20document.createElement%28%27iframe%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20iframe.src%20%3D%20sFrameSrc%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByTagName%28%27body%27%29%5B0%5D.appendChild%28iframe%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20AWIN.Tracking.hideElement%28iframe%29%3B%20//%20not%20needed%2C%20iframe%20is%20hidden%20already%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%20%20var%20pixelAppend%20%3D%20function%28sImageSrc%29%20%7B%0A%20%20%20%20%20%20%20%20if%20%28document.getElementsByTagName%28%27body%27%29%5B0%5D%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20image%20%3D%20document.createElement%28%27img%27%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20image.src%20%3D%20sImageSrc%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20document.getElementsByTagName%28%27body%27%29%5B0%5D.appendChild%28image%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20//%20AWIN.Tracking.hideElement%28image%29%3B%20//%20not%20needed%2C%20iframe%20is%20hidden%20already%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%20%20%20%20var%20buildQueryString%20%3D%20function%28params%29%20%7B%0A%20%20%20%20%20%20%20%20var%20bits%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%20%20for%20%28var%20name%20in%20params%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20%28params.hasOwnProperty%28name%29%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20bits.push%28name%20+%20%27%3D%27%20+%20encodeURIComponent%28params%5Bname%5D%29%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20bits.join%28%27%26%27%29%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20var%20getScriptAppendNode%20%3D%20function%28%29%20%7B%0A%20%20%20%20%20%20%20%20return%20document.body%3B%20%20%20%20%0A%20%20%20%20%7D%3B%0A%20%20%20%20var%20getBasketData%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20return%20payload.plugin.basket%20%7C%7C%20%5B%5D%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20var%20getAffiliateId%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20return%20payload.plugin.publisherId%3B%0A%20%20%20%20%7D%3B%0A%20%20%20%20var%20_getAWCValue%20%3D%20function%28%29%7B%0A%20%20%20%20%20%20%20%20return%20payload.plugin.awc%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20var%20publicObject%20%3D%20%7B%0A%20%20%20%20%20%20%20%20//%20functions%0A%20%20%20%20%20%20%20%20fetchZxParam%20%3A%20fetchZxParam%2C%0A%20%20%20%20%20%20%20%20scriptAppend%3A%20scriptAppend%2C%0A%20%20%20%20%20%20%20%20frameAppend%3A%20frameAppend%2C%0A%20%20%20%20%20%20%20%20pixelAppend%3A%20pixelAppend%2C%0A%20%20%20%20%20%20%20%20buildQueryString%3A%20buildQueryString%2C%0A%20%20%20%20%20%20%20%20getScriptAppendNode%3A%20getScriptAppendNode%2C%0A%20%20%20%20%20%20%20%20getBasketData%3A%20getBasketData%2C%0A%20%20%20%20%20%20%20%20getAffiliateId%3A%20getAffiliateId%2C%0A%20%20%20%20%20%20%20%20_getAWCValue%3A%20_getAWCValue%2C%0A%0A%20%20%20%20%20%20%20%20//%20Awin%20properties%0A%20%20%20%20%20%20%20%20Sale%3A%20payload.plugin.sale%2C%20%0A%20%20%20%20%20%20%20%20iMerchantId%3A%20payload.plugin.advertiserId%2C%20//%20can%20be%20added%20without%20configuration%0A%20%20%20%20%20%20%20%20sProtocol%3A%20payload.plugin.protocol%2C%20//%20can%20be%20added%20without%20configuration%0A%0A%20%20%20%20%20%20%20%20//%20new%20access%20property%0A%20%20%20%20%20%20%20%20context%20%3A%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20plugin%20%3A%20payload.plugin%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20advertiser%3A%20payload.advertiser%0A%20%20%20%20%20%20%20%20%7D%20%20%20%20%20%20%20%20%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20AWIN.sProtocol%20%3D%20payload.plugin.protocol%3B%0A%20%20%20%20publicObject%5BpluginName%5D%20%3D%20payload.advertiser.config%3B%0A%20%20%20%20return%20publicObject%3B%0A%7D%29%28AWIN.pluginName%2C%20AWIN.payload%29%3B%0A";AWIN.pluginCode = "'+e+'";eval(unescape(AWIN.masterTagSb) + "\\n" + unescape(AWIN.pluginCode));<\/script></body>',a=document.createElement("iframe");a.srcdoc=t,a.sandbox="allow-scripts",a.id="awin-plugin-"+n,document.body.appendChild(a),AWIN.Tracking.hideElement(a)},fetchPayload:r}}(),AWIN.Tracking.aScripts=[],AWIN.Tracking.iMerchantId=17722,AWIN.enhancedTracking=!0,AWIN.Tracking.device9=!0,"yes"==AWIN.Tracking.getQueryVarValue("awin_tntc",document.location.search.substring(1))&&(AWIN.enhancedTracking=!0),AWIN.Tracking.run(),AWIN.Tracking.runScripts();