!function(t){var s={};function e(i){if(s[i])return s[i].exports;var r=s[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=s,e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var r in t)e.d(i,r,function(s){return t[s]}.bind(null,r));return i},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=0)}([function(t,s,e){"use strict";e.r(s);const i=["getels.com","getapo.com","getnee.com","getcong.com","getotal.com","getove.com","getony.com","getmari.com","getwil.com","gettran.com","getnapa.com","getyong.com","gettine.com","getkel.com","getibo.com"];function r(t,s={}){const e={tcid:parseInt(t.tcid)||0,spot_id:parseInt(t.spot_id)||0,source_id:parseInt(t.source_id)||0,source_type:t.source_type||"publisher",landing:!!t.landing,oldLanding:!!t.onBeforeSubscribe,paramsToExtend:t.paramsToExtend||{},requestOnStart:!!t.requestOnStart,historyTtl:parseInt(t.cappingTime||t.d)||60,maxShowsPerTime:parseInt(t.maxShowsPerTime||t.s)||1,onShow:t.onShow||function(){},onBeforeSubscribe:t.onBeforeSubscribe||function(){},onSubscriptionFound:t.onSubscriptionFound||function(){},envParams:s};if(e.landing&&(e.source_type="landing"),Object.keys(s).length>0&&(0===e.source_id&&(e.source_id=parseInt(s.sub)),e.envParams=s),e.tcid>0){const s=parseInt(t.sub||document.cookie.split("; ").reduce((function(t,s){const e=s.split("=");return t[e[0]]=e[1],t}),{}).source);s>0&&(e.source_id=s)}return e}let n;try{n=localStorage}catch{}if(!n)try{n=sessionStorage}catch{}n||(n={_storage:{},setItem(t,s){this._storage[t]=s},getItem(t){return this._storage[t]||null},removeItem(t){delete this._storage[t]}});const o=n;class a{constructor(t,s){this.name="_ccal_"+t,this.storageProvider=s,this.storage=JSON.parse(s.getItem(this.name)||"{}")}setItem(t,s){this.storage[t]=s,this.storageProvider.setItem(this.name,JSON.stringify(this.storage))}getItem(t){return this.storage[t]}removeItem(t){delete this.storage[t]}}const c=(/iPad|iPhone|iPod/.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!window.MSStream,h=navigator.userAgent.match(/version\/([\w\.]+).+?(mobile\s?safari|safari)/i),u=navigator.userAgent.match(/fxios\/([\w\.-]+)/i);class d{constructor(t,s,e,i){this.settings=t,this.gestureEvent=h||u?"click":"touchstart",this.Subscription=s,this.alredySubscribed=!1,this.Links=e,this.History=i,this.waitInterval=null}canShowPrompt(){return Date.now()-this.History.getLastShow()<1300&&this.History.removeLastShow(),this.History.getShowAmount()<this.settings.maxShowsPerTime}async isSubscribed(){return this.Subscription.isValid()}waitSubscription(){const t=()=>{this.isSubscribed().then(t=>{t&&(this.settings.onSubscriptionFound(),this.alredySubscribed=!0,clearInterval(this.waitInterval))})};t(),this.waitInterval=setInterval(t,800)}showPrompt(t,s){t&&s&&(location.href=t,this.settings.landing||this.History.increaseShow(),this.settings.onShow(),(new Image).src=s)}async start(){const{updateSubscriptionUrl:t,subscriptionUrl:s,trackSubscriptionOffer:e}=await this.Links.getLinks();this.Subscription.update({updateSubscriptionUrl:t}),this.settings.landing&&!this.settings.oldLanding&&this.waitSubscription(),this.settings.oldLanding&&this.settings.onBeforeSubscribe({url:s,checkUrl:t}),this.settings.landing||(this.alredySubscribed=await this.isSubscribed()),this.settings.requestOnStart&&!this.Subscription.getCachedStatus()&&this.showPrompt(s,e),document.addEventListener(this.gestureEvent,t=>!!this.alredySubscribed||(!this.settings.landing&&!this.canShowPrompt()||(t.stopImmediatePropagation(),t.preventDefault(),void this.showPrompt(s,e))))}}class l{constructor(t){this.storageKey="subscription",this.Storage=t;const{status:s,lastUpdate:e,updateSubscriptionUrl:i}=this.Storage.getItem(this.storageKey)||{};this.status=!!s,this.lastUpdate=e||0,this.updateSubscriptionUrl=i,this.updateFrequency=36e5}getCachedStatus(){return this.status}async fetchStatus(){if(!this.updateSubscriptionUrl)return!1;let t;try{const s=await fetch(this.updateSubscriptionUrl);t=!!(await s.json()).found}catch(s){t=!1}return t}async isValid(){return!(!this.status||this.shouldUpdate())||(this.status=await this.fetchStatus(),this.lastUpdate=Date.now(),this.update(),this.status)}shouldUpdate(){return!this.status||this.lastUpdate+this.updateFrequency>Date.now()}update({status:t,updateSubscriptionUrl:s}={}){this.status=t||this.status,this.updateSubscriptionUrl=s||this.updateSubscriptionUrl,this.Storage.setItem(this.storageKey,{status:t||this.status,updateUrl:s||this.updateSubscriptionUrl,lastUpdate:this.lastUpdate})}}class p{constructor(t,s){this.storageKey="history",this.Storage=s,this.shows=this.Storage.getItem(this.storageKey)||[],this.ttl=t}saveHistory(){this.Storage.setItem(this.storageKey,this.shows)}removeExpired(){this.shows=this.shows.filter(t=>t>Date.now()-1e3*this.ttl)}increaseShow(){this.shows.push(Date.now()),this.saveHistory()}getLastShow(){return this.shows[this.shows.length-1]}removeLastShow(){this.shows.pop(),this.saveHistory()}getShowAmount(){return this.removeExpired(),this.saveHistory(),this.shows.length}}class g{constructor(t,s,e,i){this.urlList=t,this.params=s,this.settings=e,this.Storage=i,this.storageKey="links",this.links=this.Storage.getItem(this.storageKey),this.tryToFetchLinks=0}getOneUrl(){return this.urlList[Math.floor(Math.random()*this.urlList.length)]}async getLinks(){return this.links||await this.update(),this.links}async fetchLinks(){const{source_type:t,tcid:s,spot_id:e,source_id:i,paramsToExtend:r}=this.settings,{timezone:n,href:o,referrer:a,utm_source:c,utm_medium:h,utm_campaign:u,utm_content:d}=this.params;try{const l=await fetch(`https://${this.getOneUrl()}/api/v1/subscriber`,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({timezone:n,href:o,referrer:a,utm_source:c,utm_medium:h,utm_campaign:u,utm_content:d,source_type:t,tcid:s,spot_id:e,source_id:i,...r})}),p=await l.json();return{updateSubscriptionUrl:p.checkUrl,subscriptionUrl:p.url,trackSubscriptionOffer:p.trackSubscriptionOffer}}catch(t){return this.tryToFetchLinks<2?(this.tryToFetchLinks++,await this.fetchLinks()):(this.tryToFetchLinks=0,{})}}async update(){this.links=await this.fetchLinks(),this.Storage.setItem(this.storageKey,this.links)}}const m=o,S=["utm_source","utm_medium","utm_campaign","utm_content"],f=()=>JSON.parse(m.getItem("__cutmst1504"))||{},b=()=>{const t={},s=new URLSearchParams(location.search);S.forEach(e=>{s.has(e)&&(t[e]=s.get(e))}),((t={})=>{for(const s in t)t[s]=t[s].toString();m.setItem("__cutmst1504",JSON.stringify(t))})(Object.assign(f(),t))};!function(t,s){try{const e=new Event(t);e._init=s,window.dispatchEvent(e)}catch(e){"function"==typeof window[t]&&window[t](s)}}("__cp-initev",(async function(t={},s){if(!c)return!1;let e=r(t,s);if(e.tcid&&!e.landing){const t=await async function(t){const s=await fetch(`https://js.wpushsdk.com/npc/cpc/${t}.php`);return(await s.json())[t]}(e.tcid);if(!t)return!1;e={...e,...t}}const n=e.spot_id||e.tcid,h=new a(n,o);b();const u=e.envParams.holdableQSParams||f();new d(e,new l(h),new g(i,{timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,href:location.href,referrer:document.referrer,...u},e,h),new p(e.historyTtl,h)).start()}))}]);