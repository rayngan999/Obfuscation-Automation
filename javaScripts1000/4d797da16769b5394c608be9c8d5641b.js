"use strict";window.freedom.metadata=function(e,a){window.googletag={cmd:[]},window.gptadslots={};function r(){var t,e,a="metadata_"+o+"_"+n.page,r=dataLayer[0];if("product"===n.page){try{t=JSON.parse(n.meta)}catch(e){t={product:{id:i}}}a="metadata_"+o+"_"+n.page+"_"+t.product.id}else if("search"===n.page){try{t=JSON.parse(n.meta)}catch(e){t={search:{query:i}}}e=t&&t.search&&t.search.query?t.search.query:r.friendly||r.query||i,a="metadata_"+o+"_"+n.page+"_"+e.replace(/ /g,"_")}return a}var o,n={},d=[],i="ERROR: "+new Date;function t(t){try{e=t,a&&a.set&&a.set(r(),e,10)}catch(e){}var e;!function(e,t,a){var r,o;e&&e.chaordic&&(!e.chaordic.page||(r=window.freedom.hasClass(document.querySelector("html"),"desktop")?document.querySelector("section.search-result"):document.querySelector("#content section.search"))&&(o=window.freedom.getDataAttribute(r,"search-id"),e.chaordic.page.info||(e.chaordic.page.info={}),e.chaordic.page.info.searchId=o),e.chaordic.search&&e.chaordic.search.items&&0===e.chaordic.search.items.length&&(delete e.chaordic.search.items,e.chaordic.page&&e.chaordic.page.name&&(e.chaordic.page.name="emptySearch"))),window.chaordic_meta=e.chaordic;var n=document.querySelectorAll("head script"),d=n?n[0]:null,i=document.createElement("script");i.async=!0,i.defer=!0,e.chaordic&&e.chaordic.dataGroup&&i.setAttribute("data-group",e.chaordic.dataGroup),i.setAttribute("data-apikey",t),i.src=a,d&&d.parentNode&&d.parentNode.insertBefore(i,d)}(t,n.key,n.src),window.freedom.nsRequire.use("gtm",function(){for(var e=0;e<d.length;e++)!function e(t,a,r){var o,n;window.dataLayer&&((o=document.querySelector("body"))?((n=document.createElement("script")).async=!0,n.defer=!0,n.src=r+"/gtm.js?l=dataLayer&id="+a,o&&o.parentNode&&o.parentNode.insertBefore(n,o),window.dataLayer.push({"gtm.start":(new Date).getTime(),event:"gtm.js"}),window.dataLayer.push(t.gtm),window.dataLayer.push({event:"AjaxDL"})):setTimeout(function(){e(t,a,r)},10))}(t,d[e].key,d[e].src)})}var c,s;function p(){for(var e=[],t=0;t<window.gptadslots.length;t++){var a=window.gptadslots[t],r=function(e){for(var t=0;t<e.length;t++){var a=e[t].mapping;if(window.innerWidth>=a[0][0]&&window.innerHeight>=a[0][1])return e[t]}return 0}(a.config);a.size!==r&&(a.size=r,e.push(a.slot))}e.length&&window.googletag.pubads().refresh(e)}return c="uuid",s=e.cookie.match("(^|;) ?"+c+"=([^;]*)(;|$)"),o=s?s[2]:null,{fetchUser:function(){return window.freedom.nsRequire.use("chaordic",function(){var e=a&&a.get?a.get(r()):null;e?t(e):window.freedom.restClient.request("/metadata",{method:"post",data:{page:n.page,pageData:n.meta},success:t})}),this},chaordic:function(e,t,a,r){n.page=e,n.key=t,n.src=a,n.meta=r,window.freedom.nsRequire.load("chaordic")},gtm:function(e,t){d.push({key:e,src:t})},chaordicPush:function(){var e,t,a=document.getElementById("chaordic-update");a&&((e=document.createElement("script")).innerHTML=a.innerHTML,(t=document.getElementsByTagName("script")[0]).insertBefore(e,t.firstChild),window.chaordicUpdate&&window.chaordic&&window.chaordic.push(window.chaordicUpdate))},updateCartMetaChaordic:function(e,t){t&&e&&1<t.length&&t[1].hasOwnProperty("items")&&(e.cart.items=t[1].items)},gtmPush:function(){var e,t,a=document.getElementById("gtm-update");a&&((e=document.createElement("script")).innerHTML=a.innerHTML,(t=document.getElementsByTagName("script")[0]).insertBefore(e,t.firstChild),window.gtmUpdate&&window.dataLayer&&(window.dataLayer.push(window.gtmUpdate),window.dataLayer.push({event:"AjaxDL"})))},dfp:function g(u,w){var e=document.createElement("script");e.async=!1,e.type="text/javascript";var t="https:"===document.location.protocol;e.src=(t?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var a=document.getElementsByTagName("script")[0];a&&a.parentNode&&a.parentNode.insertBefore(e,a),window.googletag.cmd.push(function(){var e,t=window.freedom.hasClass(document.querySelector("html"),"desktop")?"desktop":"mobile";for(e in u)if("carrousel"===e)g(u[e][t],"carrousel-");else{var a=u[e];w=w||"",window.gptadslots[w+e]={size:0,config:a};var r=window.googletag.defineSlot(a.slotId,[a.size],e);if(a.mapping){var o,n=a.mapping||[],d=window.googletag.sizeMapping();for(o in n){var i=n[o];d.addSize(i[0],i[1])}r.defineSizeMapping(d.build());var c,s=a.targetings||{};for(c in s)r.setTargeting(c,a.targetings[c]);window.gptadslots[w+e].slot=r.addService(window.googletag.pubads())}}window.freedom.addEvent("resize",window,p),window.googletag.pubads().enableSingleRequest(),window.googletag.pubads().enableAsyncRendering(),window.googletag.pubads().collapseEmptyDivs(!0),window.googletag.enableServices(),window.freedom.nsRequire.load("dfp-banner")})}}}(window.document,window.freedom.nsStorage).fetchUser(),window.freedom.nsRequire.load("metadata");