!function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=12)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.genGuid=function(){return[r(2),r(1),r(1),r(1),r(3)].join("-")},e.getUnitUrl=function(e,t){return t+"/"+e+"/index.js?cb="+Math.round((new Date).getTime())},e.getGoogleTag=function(e){e.googletag||(e.googletag=Object.assign({}));var t=e.googletag;return t.cmd=t.cmd||[],t},e.isObjectNullUndEmpty=function(e){return null==e||0===Object.keys(e).length},e.getParameterByName=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var i=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null},e}();function r(e){var t,i;for(t="",i=0;0<=e?i<=e:i>=e;0<=e?++i:--i)t+=(65536*(1+Math.random())|0).toString(16).substring(1);return t}t.Utils=n},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var s=arguments[t],o=0,d=s.length;o<d;o++,r++)n[r]=s[o];return n};Object.defineProperty(t,"__esModule",{value:!0});var r=i(3),s=function(){function e(e){this.placementId=e.placementId?e.placementId:""}return e.getInstance=function(t,i){var n=(t=t||window).yl_logger;return n||(n=new e(i),t.yl_logger=n),n.enabled=r.environment.debug||-1!==t.location.href.indexOf("yieldlift"),n},e.prototype.error=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this.enabled&&console.error.apply(console,n(["YL :"+this.placementId+": "+e],t))},e.prototype.debug=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];this.enabled&&console.log.apply(console,n(["YL :"+this.placementId+": "+e],t))},e}();t.Logger=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.parse=function(){var e={placementId:"13542",adUnitId:"8a9959ea-240e-47d7-88ed-d78073308425",adWidth:728,adHeight:90,cdnUrl:"https://cdn1.opstag.com",iframeBreakout:!0,noFillHideUnit:!1,confiantWrapperId:null,gptName:"/8570/alternativepress/altpress-13542-728x90-ads-desktop",gptDiv:"div-gpt-ad-7305486683025-0",pixelUrl:"https://pubads.g.doubleclick.net/gampad/ad?iu=/8570/alternativepress/altpress-13542-728x90-ads-desktop-pixel&sz=1x1&t=&c=5508777537",prebidSyncPerBidder:null,refreshRate:3e4,maxRefresh:50,closeButton:!1,adLoadDelay:0,bidTimeout:2e3,idSystemIdentityLink:!1,cssContent:".csci-frame-13542 {display:block;position:fixed;z-index:100000;bottom:0;left:50%;transform:translateX(-50%);width:728px;height:90px;margin:0 auto;padding:0;overflow:auto;-webkit-overflow-scrolling:touch;}",publisherId:2000095,pageMarginBottom:null,adhesion:!0,customCssApplied:!1,weMakeSticky:!0,s2s:!1,position:"ATF",bidderParams:{placementId:"13542",yieldliftId:"13542",openxId:"543150689",openxDelDomain:"os4m-d.openx.net",rubiconSiteId:"352742",rubiconZoneId:"1875800",rubiconAccountId:"13702",emxId:null,districtmId:null,appnexusId:"20436014",sonobiId:null,pubmaticId:"3266171",pubmaticIdName:"altpress-13542-728x90-ads-desktop",pubmaticPublisherId:"157898",indexId:"604255",amxId:null,sovrnId:"789663",ttacrossId:"bJrgB4kr8r64m5aKlId8sQ",rhythmoneId:"231871",my6senseId:null,aolId:null},viewIn:null,viewOut:null,bidderMaxIntervals:{rubicon:3e4},bidderCaps:{rubicon:50},bidderFloors:{},bidderAdjustments:{},createdOn:160283088e4,updatedOn:1617981323e3};return e.closeButton=e.closeButton||!1,e.confiantWrapperId=e.confiantWrapperId||"",e.adLoadDelay=e.adLoadDelay||0,e.viewIn||e.viewOut||(e.maxRefresh=e.maxRefresh||200,e.refreshRate=e.refreshRate||3e4),e.bidTimeout=e.bidTimeout||2e3,e.prebidSyncPerBidder=e.prebidSyncPerBidder||10,Object.keys(e.bidderParams).forEach((function(t){e.bidderParams[t]||(e.bidderParams[t]="")})),e},e}();t.UnitConfig=n;var r=function(){};t.UnitConfigBidderParams=r;var s=function(){};t.ViewType=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.environment={production:!0,debug:!1}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,i,n){this.wnd=e,this.config=t,this.log=i,this.googletag=n,this.bidsCount=0,this.firstBid=!0,this.wnd.pbjs||(this.wnd.pbjs={}),this.pbjs=this.wnd.pbjs,this.pbjs.que=this.pbjs.que||[]}return e.prototype.getBids=function(e,t){var n=this;this.log.debug("get bids, count="+(this.bidsCount+1)),this.bidsCount++,this.googletag.cmd.push((function(){return n.googletag.pubads().disableInitialLoad()})),this.pbjs._bidsReceived=[],this.pbjs._winningBids=[],this.adUnits&&this.adUnits.length&&this.pbjs.que.push((function(){n.adUnits.forEach((function(e){return n.pbjs.removeAdUnit(e.code)})),n.adUnits=[]}));var r=this.config.bidderParams;this.config.s2s?Object.keys(r).forEach((function(e){"yieldliftId"!=e&&"indexId"!==e&&(r[e]="")})):r.yieldliftId="";var s=Object.assign({},this.config,r);if(this.adUnits=JSON.parse(i(13)(s)),this.adUnits[0].bids.pop(),t){var o=t.split(",").map((function(e){return e.trim()}));this.adUnits[0].bids=this.adUnits[0].bids.filter((function(e){return o.includes(e.bidder)}))}this.log.debug("prebid units to run auction on "+JSON.stringify(this.adUnits)),this.pbjs.bidderSettings=this.getPrebidAdjustments();var d={buckets:[{precision:2,min:0,max:3,increment:.01},{precision:2,min:3,max:8,increment:.05},{precision:2,min:8,max:100,increment:.5}]};return this.pbjs.que.push((function(){var t={enableSendAllBids:!0,priceGranularity:d,userSync:{filterSettings:{all:{bidders:"*",filter:"include"}},syncsPerBidder:n.config.prebidSyncPerBidder},consentManagement:{gdpr:{cmpApi:"iab",timeout:8e3,defaultGdprScope:!0},usp:{timeout:3e3,allowAuctionWithoutConsent:!0}}},i=n.wnd.parent.parent;try{"function"!=typeof i.__tcfapi&&(delete t.consentManagement.gdpr,n.log.debug("gdpr deleted: "+JSON.stringify(t)))}catch(e){n.log.error("catch: "+e),delete t.consentManagement.gdpr,n.log.debug("gdpr deleted: "+JSON.stringify(t))}return n.config.idSystemIdentityLink&&(t.userSync.userIds=[{name:"identityLink",params:{pid:"1461"},storage:{type:"cookie",name:"idl_env",expires:30}}]),n.config.publisherId&&(t.schain={validation:"strict",config:{ver:"1.0",complete:1,nodes:[{asi:"yieldlift.com",sid:""+n.config.publisherId,hp:1}]}}),n.pbjs.setConfig(t),n.wnd.PWT&&"function"==typeof n.wnd.PWT.getUserIds&&"function"==typeof n.pbjs.getUserIdsAsEids&&(n.log.debug("pwt.getUserIds "+JSON.stringify(n.wnd.PWT.getUserIds())),n.log.debug("pbjs.getUserIdsAsEids "+n.pbjs.getUserIdsAsEids()),n.adUnits.forEach((function(e){e.bids.forEach((function(e){e.userId=n.wnd.PWT.getUserIds(),e.userIdAsEids=n.pbjs.getUserIdsAsEids()}))}))),n.pbjs.addAdUnits(n.adUnits),n.log.debug("pbjs.requestBids"),n.pbjs.requestBids({timeout:n.config.bidTimeout,bidsBackHandler:function(t){n.bidsComplete(t,e)}})})),this.firstBid=!1},e.prototype.getPrebidAdjustments=function(){var e=this;this.config.bidderAdjustments=this.config.bidderAdjustments||{},this.config.bidderFloors=this.config.bidderFloors||{};var t={};return this.adUnits[0].bids.map((function(e){return e.bidder})).forEach((function(i){t[i]={bidCpmAdjustment:function(t){var n=e.config.bidderFloors[i],r=e.config.bidderAdjustments[i]||1,s=t*r,o=n&&s<n?0:s;return(1!==r||n)&&e.log.debug("adjusting: "+i+" cpm="+t+" adjusted="+o+" adj="+r+" floor="+n),o}}})),t},e.prototype.bidsComplete=function(e,t){var i=this,n=this.googletag;if(e){var r=e[t.getSlotElementId()];this.log.debug("bidResponseForSlot=",r),n.cmd.push((function(){return i.pbjs.que.push((function(){t.clearTargeting(),i.pbjs.setTargetingForGPTAsync();try{if(t.setTargeting("rfsh",""+i.bidsCount),t.setTargeting("rfshtime",""+i.getRefreshTime()),i.config.s2s){var e=r?r.bids:[];e&&e.forEach((function(e){var n=t.getTargetingKeys();i.log.debug("slot targeting keys: "+n);var r=e.bidderName;n.forEach((function(e){var i=t.getTargeting(e);if("hb_bidder"===e&&"yieldlift"===i[0]&&t.setTargeting("hb_bidder",r),e.includes("yieldlift")){t.clearTargeting(e);var n=e.replace("yieldlift",r),s=n.substring(0,Math.min(20,n.length)),o=i[0].replace("yieldlift",r);t.setTargeting(s,o)}})),i.log.debug("slot targeting keys after setting: "+t.getTargetingKeys())}))}}catch(e){console.error(e)}return n.pubads().refresh([t])}))})),this.debugOnAuctionFinished(r,t)}else this.log.error("prebid response is null")},e.prototype.debugOnAuctionFinished=function(e,t){var i=[];if(e)for(var n=e.bids,r=0;r<n.length;r++){var s=n[r];i.push({adunit:t.getSlotElementId(),adId:s.adId,bidder:s.bidder,time:s.timeToRespond,cpm:s.cpm,msg:s.statusMessage})}try{if(i.length){if(this.log.debug("bids received "+JSON.stringify(i)),this.pbjs.getConfig("debug"))if(console.table)console.table(i);else for(r=0;r<i.length;r++)console.log(i[r])}else this.log.debug("no bids")}catch(e){}},e.prototype.getRefreshTime=function(){var e=new Date,t=e.getTime(),i=6e4*e.getTimezoneOffset();return new Date(t+i+-144e5).getHours()},e}();t.Auction=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.closeButtonHideShow=function(e,t){var i=e.document.getElementById("closeUnit");i&&(i.classList.remove("csci-hidden"),t||i.classList.add("csci-hidden"))},e.getParentIframeElement=function(e,t){var i=e.document.getElementById(t);if(i){var n=i.getAttribute("data-parent-id");if(n)return e.parent.document.getElementById(n)}return null},e.showHideContainerBasedOnFilled=function(e,t,i){i.noFillHideUnit&&e&&(e.style.display=t?"inline":"none")},e.cleanupExchangeDiv=function(e,t,i){if(e.parent){var n=e.parent.document.getElementById("exchange-ad-wrapper-"+i.placementId);n&&(t.debug("cleaning exchange div"),n.parentNode.removeChild(n))}},e.initGoogletag=function(e,t,i,n,r,s,o){var d=e.document.getElementById(t.placementId);i.cmd.push((function(){(n=i.defineSlot(t.gptName,[t.adWidth,t.adHeight],t.gptDiv)).addService(i.pubads());var e=d.getAttribute("data-ref");e&&(r.debug("parent url: "+e),i.pubads().set("page_url",e)),i.pubads().enableSingleRequest(),i.pubads().disableInitialLoad(),i.pubads().addEventListener("impressionViewable",(function(){return r.debug("impressionViewable")})),i.pubads().addEventListener("slotRenderEnded",s),i.enableServices(),i.display(t.gptDiv),o(i,n)}))},e}();t.PlacementUtils=n},,,,,,,function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(2),s=i(4),o=i(0),d=i(5),a=i(14);setTimeout((function(){var e=r.UnitConfig.parse();o.Utils.isObjectNullUndEmpty(e.viewIn)&&o.Utils.isObjectNullUndEmpty(e.viewOut)?new l(window,e).init():new a.PlacementVisibilityUnit(window,e).init()}),1);var l=function(){function e(e,t){this.wnd=e,this.config=t,this.googletag=o.Utils.getGoogleTag(e),this.log=n.Logger.getInstance(e,t),this.parentIframeElement=d.PlacementUtils.getParentIframeElement(e,t.placementId),this.log.debug("initializing regular unit"),this.bidsCount=0}return e.prototype.init=function(){d.PlacementUtils.initGoogletag(this.wnd,this.config,this.googletag,this.gptSlot,this.log,this.onSlotRenderEndedEvent.bind(this),this.initGoogletag.bind(this))},e.prototype.initGoogletag=function(e,t){this.gptSlot=t,this.auction=new s.Auction(this.wnd,this.config,this.log,e),this.refreshAfterTimeout(this.config.adLoadDelay)},e.prototype.onSlotRenderEndedEvent=function(e){var t=!e.isEmpty;this.log.debug("onSlotRenderEnded - "+(t?"filled":"not filled")),d.PlacementUtils.closeButtonHideShow(this.wnd,t),d.PlacementUtils.showHideContainerBasedOnFilled(this.parentIframeElement,t,this.config),d.PlacementUtils.cleanupExchangeDiv(this.wnd,this.log,this.config),this.log.debug("timeout="+this.config.refreshRate+" count="+this.bidsCount+" max="+this.config.maxRefresh),this.refreshAfterTimeout(this.config.refreshRate)},e.prototype.refreshAfterTimeout=function(e){var t=this;setTimeout((function(){t.config.refreshRate&&t.bidsCount>=t.config.maxRefresh?t.log.debug("max refresh exceeded"):(t.bidsCount++,t.auction.getBids(t.gptSlot))}),e)},e}();t.PlacementUnit=l},function(module,exports){module.exports=function(obj){obj||(obj={});var __t,__p="",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='[{\r\n"code": "'+(null==(__t=gptDiv)?"":__t)+'",\r\n"mediaTypes": {\r\n  "banner": {\r\n    "sizes": [['+(null==(__t=adWidth)?"":__t)+","+(null==(__t=adHeight)?"":__t)+']]\r\n  }\r\n},\r\n"bids": [\r\n\r\n',openxId&&(__p+='\r\n  {\r\n  "bidder": "openx",\r\n  "params": {\r\n  "unit": "'+(null==(__t=openxId)?"":__t)+'",\r\n  "delDomain": "'+(null==(__t=openxDelDomain)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n",rubiconSiteId&&rubiconZoneId&&(__p+='\r\n  {\r\n  "bidder": "rubicon",\r\n  "params": {\r\n  "accountId": "'+(null==(__t=rubiconAccountId)?"":__t)+'",\r\n  "siteId": "'+(null==(__t=rubiconSiteId)?"":__t)+'",\r\n  "zoneId": "'+(null==(__t=rubiconZoneId)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n",districtmId&&(__p+='\r\n  {\r\n  "bidder": "disctrictm",\r\n  "params": {\r\n  "placementId": "'+(null==(__t=disctrictmId)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n",appnexusId&&(__p+='\r\n  {\r\n  "bidder": "appnexus",\r\n  "params": {\r\n  "placementId": "'+(null==(__t=appnexusId)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n",sonobiId&&(__p+='\r\n  {\r\n  "bidder": "sonobi",\r\n  "params": {\r\n  "ad_unit": "'+(null==(__t=sonobiId)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n\r\n",pubmaticIdName&&(__p+='\r\n  {\r\n  "bidder": "pubmatic",\r\n  "params": {\r\n  "publisherId": "'+(null==(__t=pubmaticPublisherId)?"":__t)+'",\r\n  "adSlot": "'+(null==(__t=pubmaticIdName)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n",indexId&&(__p+='\r\n  {\r\n  "bidder": "ix",\r\n  "params": {\r\n  "siteId": "'+(null==(__t=indexId)?"":__t)+'",\r\n  "size": ['+(null==(__t=adWidth)?"":__t)+", "+(null==(__t=adHeight)?"":__t)+"]\r\n  }\r\n  },\r\n"),__p+="\r\n",sovrnId&&(__p+='\r\n  {\r\n  "bidder": "sovrn",\r\n  "params": {\r\n  "tagid": "'+(null==(__t=sovrnId)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n",ttacrossId&&(__p+='\r\n  {\r\n  "bidder": "33across",\r\n  "params": {\r\n  "siteId": "'+(null==(__t=ttacrossId)?"":__t)+'",\r\n  "productId": "siab"\r\n  }\r\n  },\r\n'),__p+="\r\n",rhythmoneId&&(__p+='\r\n  {\r\n  "bidder": "rhythmone",\r\n  "params": {\r\n  "placementId": "'+(null==(__t=rhythmoneId)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n",emxId&&(__p+='\r\n  {\r\n  "bidder": "emx_digital",\r\n  "params": {\r\n  "tagid": "'+(null==(__t=emxId)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n",aolId&&(__p+='\r\n  {\r\n  "bidder": "aol",\r\n  "params": {\r\n  "placement": "'+(null==(__t=aolId)?"":__t)+'",\r\n  "network": ""\r\n  }\r\n  },\r\n'),__p+="\r\n",my6senseId&&(__p+='\r\n  {\r\n  "bidder": "my6sense",\r\n  "params": {\r\n   "key": "'+(null==(__t=my6senseId)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n",yieldliftId&&(__p+='\r\n  {\r\n  "bidder": "yieldlift",\r\n  "params": {\r\n   "unitId": "'+(null==(__t=yieldliftId)?"":__t)+'",\r\n   "standalone": true\r\n  }\r\n  },\r\n'),__p+="\r\n",amxId&&(__p+='\r\n  {\r\n  "bidder": "amx",\r\n  "params": {\r\n  "tagId": "'+(null==(__t=amxId)?"":__t)+'"\r\n  }\r\n  },\r\n'),__p+="\r\n{}\r\n]\r\n}]\r\n";return __p}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(4),s=i(0),o=i(5),d=function(){function e(e,t){this.wnd=e,this.config=t,this.isFirstVisibility=!0,this.googletag=s.Utils.getGoogleTag(e),this.log=n.Logger.getInstance(e,t),this.parentIframeElement=o.PlacementUtils.getParentIframeElement(e,t.placementId),this.viewInExist=!s.Utils.isObjectNullUndEmpty(this.config.viewIn),this.viewOutExist=!s.Utils.isObjectNullUndEmpty(this.config.viewOut),this.log.debug("initialized visibility unit"),this.bidsCountViewIn=0,this.bidsCountViewOut=0}return e.prototype.init=function(){var e=this;this.observer=new IntersectionObserver((function(t){var i=t[0].intersectionRatio;e.setSlotVisibility(i)}),{rootBounds:null,threshold:[1,0,.5],root:null}),this.observer.observe(this.parentIframeElement)},e.prototype.initGoogletag=function(e,t){this.gptSlot=t,this.auction=new r.Auction(this.wnd,this.config,this.log,e),this.refreshAfterTimeout(this.config.adLoadDelay)},e.prototype.onSlotRenderEndedEvent=function(e){var t=!e.isEmpty;this.log.debug("onSlotRenderEnded - "+(t?"filled":"not filled")),o.PlacementUtils.closeButtonHideShow(this.wnd,t),o.PlacementUtils.showHideContainerBasedOnFilled(this.parentIframeElement,t,this.config),o.PlacementUtils.cleanupExchangeDiv(this.wnd,this.log,this.config),this.log.debug("timeout="+this.getRefreshRate()+" count="+this.getBidsCount()+" max="+this.getMaxRrefresh()),clearTimeout(this.timeoutRefreshMethod),this.refreshAfterTimeout(this.getRefreshRate())},e.prototype.setSlotVisibility=function(e){if(this.viewType=e>.5?"viewIn":"viewOut",this.visibility=e>.5,this.log.debug("visibility: "+this.visibility+", percentage "+100*e),this.isFirstVisibility)return this.isFirstVisibility=!1,void o.PlacementUtils.initGoogletag(this.wnd,this.config,this.googletag,this.gptSlot,this.log,this.onSlotRenderEndedEvent.bind(this),this.initGoogletag.bind(this));this.visibilityChanged()},e.prototype.visibilityChanged=function(){if(this.visibility&&this.viewInExist){var e=Date.now()-this.lastAuctionTime,t=this.config.viewIn.refreshRate-e>0?this.config.viewIn.refreshRate-e:0;clearTimeout(this.timeoutRefreshMethod),this.log.debug("view in timeout - "+t),this.refreshAfterTimeout(t)}if(!this.visibility&&this.viewOutExist){e=Date.now()-this.lastAuctionTime,t=this.config.viewOut.refreshRate-e>0?this.config.viewOut.refreshRate-e:0;clearTimeout(this.timeoutRefreshMethod),this.log.debug("view out timeout - "+t),this.refreshAfterTimeout(t)}},e.prototype.getRefreshRate=function(){var e;return null===(e=this.config[this.viewType])||void 0===e?void 0:e.refreshRate},e.prototype.getMaxRrefresh=function(){var e;return null===(e=this.config[this.viewType])||void 0===e?void 0:e.maxRefresh},e.prototype.refreshAfterTimeout=function(e){var t=this;this.timeoutRefreshMethod=setTimeout((function(){t.getMaxRrefresh()&&t.getBidsCount()>=t.getMaxRrefresh()?t.log.debug("max refresh exceeded"):!t.viewInExist||t.viewOutExist||t.visibility?!t.viewInExist&&t.viewOutExist&&t.visibility?t.log.debug("waiting for out view"):(t.lastAuctionTime=Date.now(),t.visibility&&t.bidsCountViewIn++,t.visibility||t.bidsCountViewOut++,t.auction.getBids(t.gptSlot,t.config[t.viewType].bidders)):t.log.debug("waiting for in view")}),e)},e.prototype.getBidsCount=function(){return this.visibility?this.bidsCountViewIn:this.bidsCountViewOut},e}();t.PlacementVisibilityUnit=d}]);