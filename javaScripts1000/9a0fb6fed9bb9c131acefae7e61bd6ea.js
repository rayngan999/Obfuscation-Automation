!function(){var e=window.grumi,d=e.key,n=e&&e.cfg,t=n&&n.pbGlobal||"pbjs",i=n&&n.bidders||{},r=("http"===window.location.protocol.substr(0,4)?window.location.protocol:"https:")+"//protect.geoedge.be/api/event",a=function(){for(var e=[],n="0123456789abcdef",t=0;t<36;t++)e[t]=n.substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]=n.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}();window[t]=window[t]||{};var c=window[t];c.que=c.que||[];var o="1.1.11";function u(e){return function(e){var n,t=[];if(Object.keys)return 0===Object.keys(e).length;for(n in e)e.hasOwnProperty(n)&&t.push(n);return 0===t.length}(i)||!0===i[e]}function s(e,n,t){var i,r,o;return n=function(e,n){var t,i=e;for(t in n)i=i.replace(t,n[t]);return i}(n,{"${key}":d,"%%ADUNIT%%":(i=e).adUnitCode,"%%WIDTH%%":i.width,"%%HEIGHT%%":i.height,"%%PATTERN:hb_adid%%":i.adId,"%%PATTERN:hb_bidder%%":i.bidder||i.bidderCode,"%_hbcid!":i.creativeId||"","%%PATTERN:hb_pb%%":i.pbHg,"%%SITE%%":location.hostname,"%_pimp%":a}),r=t,n.replace("${creative}",(o=r,function(){return o}))}function w(e,n){if(navigator.sendBeacon){var t=new Blob([n],{type:"application/x-www-form-urlencoded; charset=UTF-8"});return navigator.sendBeacon(e,t)}(new Image).src=e+"?"+n}var p=function(){var n=c.renderAd;c.renderAd=function(t,e){try{var i=function(e){var n,t,i,r,o=[],d=c.getBidResponses();for(t in d)o=o.concat(d[t].bids);for(i=0;i<o.length;i++)if((r=o[i]).adId===e){n=r;break}return n}(e);if(i&&i.ad&&u(i.bidder)){var r=t.write;t.write=function(n){try{(t.write=r).call(t,s(i,'<div id="grumi-container"><script type="text/javascript" nonce="!headerNonce!">!function(d,i){var s={wver:"1.1.11",wtype:"pbjs",key:"${key}",meta:{adup:"%%ADUNIT%%",dest:"%%DEST_URL_ESC%%",w:"%%WIDTH%%",h:"%%HEIGHT%%",li:"%eaid!",adv:"%eadv!",ord:"%ebuy!",cr:"%ecid!",ygIds:"%_ygIds!",aduid:"%epid!",haduid:"%esid!",isAfc:"%_isAfc!",isAmp:"%_isAmp!",isEBDA:"%_isEBDA!",qid:"%qid!",cust_imp:"%cust_imp!",cust1:"%cust1!",cust2:"%cust2!",cust3:"%cust3!",caid:"%caid!",di:"%DEMAND_ID!",dn:"%DEMAND_NAME!",dcid:"%DEMAND_CREATIVE_ID!",pid:"%PUBLISHER_ID!",pn:"%PUBLISHER_NAME!",adElId:"%_adElId!"},sp:"pbjs",cfg:{},pbAdId:"%%PATTERN:hb_adid%%",pbAdIdAst:"%%PATTERN:hb_adid_appnexusAst%%",pbBidder:"%%PATTERN:hb_bidder%%",hbPb:"%%PATTERN:hb_pb%%",hbCid:"%_hbcid!",site:"%%SITE%%",pimp:"%_pimp%",isHb:"%_isHb!"};window.grumi=s}();<\/script><template style="display: none;" id="template0"><xmp style="display: none;" id="xmp0">${creative}</xmp></template><script type="text/javascript" nonce="!footerNonce!">!function(t){var o=window.grumi.key,r=window.grumi,e=r&&r.wtype&&"gpt"===r.wtype,n=window.onerror,i=1*new Date,a=navigator.userAgent&&navigator.userAgent.match(/\\b(MSIE |Trident.*?rv:|Edge\\/)(\\d+)/),w=e&&!a;function d(){var e=function(){for(var e,n=document.getElementsByTagName("template"),t=n.length-1;0<=t;t--)if("template0"===n[t].id){e=n[t];break}return e}();return e.content?e.content.getElementById?e.content.getElementById("xmp0"):e.content.childNodes[0]:e.getElementsByTagName("xmp")[0]}function u(){var e=d();return e&&e.innerHTML}function c(e,n){n=n||!1,top.postMessage&&top.postMessage({evType:e||"",key:r.key,adup:r.meta.adup,html:window.grumi?window.grumi.tag:"",el:r.meta.adElId,refresh:n},"*")}var m=!1;function g(e,n){if(!m){m=!0;var t="",o=a&&"complete"===document.readyState;window.grumi&&(window.grumi.fsRan=!0,t=window.grumi.tag),o||(t||(t=u()),w&&window.document.open(),window.document.write(t),window.document.close()),((n=n||!1)||o)&&c(e,o)}}function l(e,t){return function(){var n=setTimeout(function(){var e=document.getElementById(i);e&&null===function(e){if(void 0!==e.nextElementSibling)return e.nextElementSibling;for(var n=e.nextSibling;n&&1!==n.nodeType;)n=n.nextSibling;return n}(e)&&t&&t(),clearTimeout(n)},e)}}l(5e3,function(){g()})(),l(2e3,function(){c("slwCl")})(),window.grumi.tag=u(),window.grumi.scriptHost=t,window.grumi.pbGlobal=window.grumi.cfg&&window.grumi.cfg.pbGlobal||"pbjs",window.grumi.onerror=n,window.parent&&window.parent.postMessage&&window.parent.postMessage({iw:!0,key:r.key,adup:r.meta.adup,el:r.meta.adElId},"*"),function(){var e=document.createElement("script");e.type="text/javascript",e.src=t+o+"/grumi.js",e.className="rm",e.id=i,w&&(e.async=!0);var n="_"+1*new Date;window[n]=function(){g("netErr",!0)},window.grumi.start=1*new Date;try{window.document.write(e.outerHTML.replace(\'class="rm"\',\'onerror="\'+n+\'();"\'))}catch(e){g()}}(),window.onerror=function(e){"function"==typeof n&&n.apply(this,arguments),l(0,g)(),window.onerror=n}}(("http"===window.location.protocol.substr(0,4)?window.location.protocol:"https:")+"//rumcdn.geoedge.be/");<\/script></div>',n))}catch(e){r.call(t,n)}}}return n.call(c,t,e)}catch(e){n.apply(c,arguments)}}};if(window[t].que.push===[].push?window[t].que.unshift(p):window[t].que.push(p),Math.random()<=.005&&window[t].que.push(function(){c.onEvent("bidWon",function(e){var n={bidderCode:e.bidderCode,creativeId:e.creativeId,width:e.width,height:e.height,adUnitCode:e.adUnitCode,adId:e.adId,cpm:e.cpm,currency:e.currency,html:e.ad&&e.ad.substring(0,100),location:window.location.href,isRenderAdHooked:c.renderAd&&-1<c.renderAd.toString().indexOf("grumi")};w(r,"type=bidwon&w_ver="+o+"&key="+d+"&ts="+1*new Date+"&meta="+encodeURIComponent(JSON.stringify(n)))})}),Math.random()<=.001){var m=1*new Date;window.addEventListener&&window.addEventListener("beforeunload",function(){var e={i:a,ua:navigator.userAgent||"",l:(location.hostname||"")+(location.pathname||""),tos:1*new Date-m};w(r,"type=pimp&w_ver="+o+"&key="+d+"&meta="+encodeURIComponent(JSON.stringify(e)))},!1)}}();