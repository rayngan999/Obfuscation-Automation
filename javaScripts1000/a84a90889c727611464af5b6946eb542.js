!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(e){return t[e]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=14)}([function(t,e){"use strict";e.a=function(t,e){t=t||"beon";return function(){e&&Array.prototype.slice.call(arguments).forEach((function(e){"object"==typeof e?(console.log(t+": object"),console.log(e)):console.log(t+": "+e)}))}}},function(t,e,n){var i=n(8),o=n(9),s=o;s.v1=i,s.v4=o,t.exports=s},function(t){const e=function(t,e){for(var n,i=e.split(","),o=t.className,s=0;s<i.length;s++)n=i[s],o=0>o.indexOf(n)?o+" "+n:o;t.className=o},n=function(t,e){for(var n,i=e.split(","),o=t.className,s=0;s<i.length;s++)n=new RegExp(i[s],"im"),o=o.replace(n,"");t.className=o};t.exports={hasClass:function(t,e){return new RegExp(e+"\b","im").test(t.className)},addClass:e,removeClass:n,display:function(t,i){n(t,"bn--block, bn--flex, bn--grid, bn--hide, bn--none"),e(t,"bn--"+i)}}},function(t){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var n=new Uint8Array(16);t.exports=function(){return e(n),n}}else{var i=Array(16);t.exports=function(){for(var t,e=0;16>e;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=255&t>>>((3&e)<<3);return i}}},function(t){for(var e=[],n=0;256>n;++n)e[n]=(n+256).toString(16).substr(1);t.exports=function(t,n){var i=n||0,o=e;return[o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],"-",o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]],o[t[i++]]].join("")}},function(t,e,n){"use strict";n.r(e);var i=n(2),o=function(t,e){return this.root=t,this.options={is_dismissed:!1,uuid:void 0},this.config=Object.assign({auto_dismiss:5,allow_dismiss:!0,allow_reopen:!0,reopen_after:0,dismiss_label:"Dispensar",dismiss_style:"text"},e),this.init(),this};o.prototype.init=function(){this.root&&(i.addClass(this.root,"initialized"),this.options.uuid=this.root.parentNode.id,this.initStoredData(),this.initDismissBehaviour(),this.initCtaClose())},o.prototype.initStoredData=function(){window.localStorage?this.options.is_dismissed=window.localStorage.getItem([this.options.uuid,"dismissed"].join("_"))||!1:console.warn("storage unreachable")},o.prototype.setStoredData=function(t,e){window.localStorage?window.localStorage.setItem([this.options.uuid,t].join("_"),e):console.warn("storage unreachable")},o.prototype.initDismissBehaviour=function(){return this.config.allow_dismiss&&this.buildDismissControl(),0<this.config.auto_dismiss&&this.initAutoDismiss(),this.options.is_dismissed?this.dismiss():this.show()},o.prototype.buildDismissControl=function(){var t=document.createElement("span");t.innerText=this.config.dismiss_label,t.className=["beon-notificacao__dismiss","beon-notificacao__dismiss--"+this.config.dismiss_style].join(" "),this.root.append(t),t.addEventListener("click",this.dismiss.bind(this))},o.prototype.initAutoDismiss=function(){this.setDismissTimeout(this.config.auto_dismiss),this.root.addEventListener("mouseenter",function(){window.clearTimeout(this.root_mouseover_debounce),this.root_mouseover_debounce=window.setTimeout(function(){this.unsetDismissTimeout()}.bind(this),300)}.bind(this)),this.root.addEventListener("mouseleave",function(){window.clearTimeout(this.root_mouseout_debounce),this.root_mouseout_debounce=window.setTimeout(function(){this.config.allow_dismiss||this.setDismissTimeout(this.config.auto_dismiss)}.bind(this),300)}.bind(this))},o.prototype.setDismissTimeout=function(t){this.options.dismiss_timeout=window.setTimeout(this.dismiss.bind(this),1e3*t+2)},o.prototype.unsetDismissTimeout=function(){window.clearTimeout(this.options.dismiss_timeout)},o.prototype.dismiss=function(t){i.addClass(this.root,"beon-notificacao--dismissed"),i.removeClass(this.root,"beon-notificacao--opened"),i.display(this.root,"none"),t&&this.setStoredData("dismissed",!0)},o.prototype.show=function(){i.hasClass(this.root,"bn--none")?this.dismiss():(i.removeClass(this.root,"beon-notificacao--dismissed"),i.addClass(this.root,"beon-notificacao--opened"),i.display(this.root,"block"))},o.prototype.initCtaClose=function(){var t=this.root.querySelector(".beon-notificacao__cta");t&&-1<t.href.indexOf("#close")&&t.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),this.dismiss()}.bind(this))},o.prototype.display=function(t,e){window.clearTimeout(this.options.displayTimeout),this.options.displayTimeout=window.setTimeout(()=>{i.display(t,e)},1e3)};var s=function(){return this.componentRootSelector=".beon-notificacao",this.initComponents(),this.bindEvents(),this};e.default=s;s.prototype.bindEvents=function(){document.addEventListener("DOMContentLoaded",this.initComponents.bind(this)),document.addEventListener("beon.buddy.elements.handle.item.inject.success",this.initComponentFromInjection.bind(this)),document.addEventListener("beon.buddy.inject.after",this.initComponentFromInjection.bind(this))},s.prototype.initComponents=function(){var t=document.querySelectorAll(this.componentRootSelector+":not(.initialized)");Array.prototype.slice.call(t).forEach(function(t){this.initComponent(t)}.bind(this))},s.prototype.initComponentFromInjection=function(t){var e=t.detail.container.querySelector(this.componentRootSelector+":not(.initialized)");e&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",function(){this.initComponent(e)}.bind(this)):this.initComponent(e))},s.prototype.initComponent=function(t){try{var e=t.getAttribute("data-config"),n=JSON.parse(e);new Promise((function(e){e(new o(t,n))}))}catch(e){console.log("failed to build component "+this.componentRootSelector,e)}},window&&(window.BeonNotificationInitializer=s)},function(t,e,n){"use strict";var i=Math.floor;n.r(e);var o=n(2),s=function(t,e){return this.root=t,this.options={tick:!1,ended:!1,urgent:!1,live:!1},this.config=Object.assign({type:"dates",interval:null,start_date:null,end_date:null,urgent_date:null,headline:"",support_text:"",hideOnEnd:!1,aggregateDays:!1},e),this.dates={now:null,start:null,end:null,urgent:null},this.fragments={d:null,H:null,i:null,s:null},this.interval=null,this.init(),this};s.prototype.init=function(){o.addClass(this.root,"initialized"),this.initDates(),this.initFragments(),this.initClock(),this.start()},s.prototype.initDates=function(){if(this.dates.now=new Date,"dates"===this.config.type&&(this.dates.start=new Date(this.config.start_date),this.dates.end=new Date(this.config.end_date),this.dates.urgent=new Date(this.config.urgent_date)),"relative"===this.config.type){var t=new Date;t.setHours(0),t.setMinutes(0),t.setSeconds(0);var e=new Date;e.setHours(23),e.setMinutes(59),e.setSeconds(59),this.dates.start=new Date(t),this.dates.end=new Date(e),this.dates.urgent=new Date(e)}if("interval"===this.config.type&&this.config.interval){var n,i,o=["bn",this.root.id].join("-"),s=("; "+document.cookie).split(o+"="),r=2===s.length?s.pop().split(";").shift():null;if(r){var a=r.split("/");n=new Date(parseInt(a[0],10)),i=new Date(parseInt(a[1],10))}else n=new Date,i=new Date(Date.now()+60*this.config.interval*1e3),document.cookie=o+"="+[n.getTime(),i.getTime()].join("/")+"; SameSite=Lax; path=/";this.dates.start=new Date(n),this.dates.end=new Date(i),this.dates.urgent=new Date(i)}this.options.live=!0,this.notStartedYet()?(this.options.tick=!1,this.options.live=!1,this.hideAssociate("not-started"),this.hide()):this.limitReached()&&(this.options.tick=!1,this.options.ended=!0,this.hideOnEnd())},s.prototype.initFragments=function(){this.fragments={d:this.root.querySelector(".beon-clock__fragment-d, .bn-clock__frag-d"),H:this.root.querySelector(".beon-clock__fragment-H, .bn-clock__frag-H"),i:this.root.querySelector(".beon-clock__fragment-i, .bn-clock__frag-i"),s:this.root.querySelector(".beon-clock__fragment-s, .bn-clock__frag-s")},this.config.aggregateDays&&(o.addClass(this.root,"beon-clock--without-days"),this.fragments.d.style.display="none")},s.prototype.initClock=function(){this.updateFragments()},s.prototype.diff=function(t,e){var n,o,s;return s={d:0,H:0,i:0,s:0},this.limitReached()?(this.end(),this.dates.diff=s,s):(0<(n=t.getTime()-e.getTime())&&(o=n/1e3,s.d=i(o/86400),s.H=i((o-86400*s.d)/3600),s.i=i((o-86400*s.d-3600*s.H)/60),s.s=i(o-86400*s.d-3600*s.H-60*s.i),this.config.aggregateDays&&(s.H+=24*s.d,s.d=0)),this.dates.diff=s,s)},s.prototype.notStartedYet=function(){var t=this.dates.now.getTime()/1e3+100;return this.dates.start.getTime()/1e3>t},s.prototype.limitReached=function(){return this.dates.now.getTime()>this.dates.end.getTime()},s.prototype.updateNow=function(){this.dates.now=new Date},s.prototype.urgentReached=function(){return this.dates.urgent?this.dates.now.getTime()>this.dates.urgent.getTime():0},s.prototype.updateFragments=function(){for(var t=Object.entries(this.diff(this.dates.end,this.dates.now)),e=0;e<t.length;e++){var[n,i]=t[e];this.setFragment(n,i)}},s.prototype.setFragment=function(t,e){var n;n=this.config.aggregateDays&&"H"===t||!this.config.aggregateDays&&"d"===t?2>=e.toString().length?this.pad(e,2,"0"):e:this.pad(e,2,"0"),this.fragments[t].innerText=n},s.prototype.tick=function(){return this.options.tick?(this.updateNow(),this.updateFragments(),!this.options.urgent&&this.urgentReached()&&this.urgent(),void(this.limitReached()&&this.end())):this.stop()},s.prototype.start=function(){return this.options.live?(this.interval=window.setInterval(this.tick.bind(this),1e3),void(this.options.tick=!0)):this.stop()},s.prototype.stop=function(){window.clearInterval(this.interval),this.options.tick=!1},s.prototype.end=function(){this.stop(),this.ended=!0,o.addClass(this.root,"ended"),this.hideOnEnd()},s.prototype.urgent=function(){this.options.urgent=!0,o.addClass(this.root,"urgent")},s.prototype.hideOnEnd=function(){this.ended&&this.config.hideOnEnd&&(this.hideAssociate("ended"),this.hide(),o.addClass(this.root,"bn--clock-ended"))},s.prototype.getAssociate=function(){var t=this.root.getAttribute("data-associate-id"),e=t?document.getElementById(t):null;return this.associate=e,this.associate},s.prototype.hasAssociate=function(){return this.getAssociate(),!!this.associate},s.prototype.hideAssociate=function(t){t=t||"not-started";this.hasAssociate()&&(this.hide(this.getAssociate()),o.addClass(this.getAssociate(),"bn--clock-"+t))},s.prototype.hide=function(t){var e=t||this.root;o.display(e,"none")},s.prototype.pad=function(t,e,n){return e=t.length>e?t.pength:e,(t=n.repeat(e)+t).substr(t.length-e)};var r=function(){this.componentRootSelector=".beon-clock",this.initComponents(),this.bindEvents()};e.default=r;r.prototype.bindEvents=function(){document.addEventListener("DOMContentLoaded",this.initComponents.bind(this)),document.addEventListener("beon.buddy.elements.handle.item.inject.success",this.initComponentFromInjection.bind(this)),document.addEventListener("beon.buddy.inject.after",this.initComponentFromInjection.bind(this))},r.prototype.initComponents=function(){var t=document.querySelectorAll(this.componentRootSelector+":not(.initialized)");Array.prototype.slice.call(t).forEach(function(t){this.initComponent(t)}.bind(this))},r.prototype.initComponentFromInjection=function(t){var e=t.detail.container.querySelector(this.componentRootSelector+":not(.initialized)");e&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",function(){this.initComponent(e)}.bind(this)):this.initComponent(e))},r.prototype.initComponent=function(t){try{window.beon_init_log=window.beon_init_log||[];var e=t.getAttribute("data-config"),n=t.id,i=JSON.parse(e);if(-1<window.beon_init_log.indexOf(n))return;window.beon_init_log.push(n),new s(t,i)}catch(e){console.log("failed to build component "+this.componentRootSelector,e)}},window&&(window.BeonClockInitializer=r)},function(t,e,n){"use strict";n.r(e);var i=function(t,e){if(this.root=t,!window.beonevents||!window.beonevents[e.id]){const[t,n,i,o,s,r,a,d,c,u,h,l]=e;return this.config=Object.assign({id:void 0,type:"flag",variant:"seal",position:"45deg",className:void 0,innerHTML:void 0,sealSrc:void 0,style:void 0,itemQuery:void 0,containerQuery:"self",placementOperation:"append",itemsIds:[]},{id:t,type:n,variant:i,position:o,className:s,innerHTML:r,sealSrc:a,style:d,itemQuery:c,containerQuery:u,placementOperation:h,itemsIds:l}),this.init(),this}};i.prototype.init=function(){var t;this.root.className+=" initialized",this.add(this.config).then(()=>{window.beonevents&&window.beonevents[this.config.id]||(window.beonevents=window.beonevents||{},window.beonevents[this.config.id]=!0)}),document.addEventListener("beon.buddy.slider.init.after",()=>{window.clearTimeout(t),t=window.setTimeout(()=>{console.log("flags add after slider initialize"),this.add(this.config,document)},500)}),window.addEventListener("hashchange",()=>{window.clearTimeout(t),t=window.setTimeout(()=>{console.log("flags add after window change"),this.add(this.config,document)},1e3)})},i.prototype.add=function(t,e){return new Promise(function(n){let i;e=e||document,"bullet"===t.variant&&(i=t.innerHTML);for(var o=[],s=0;s<t.itemsIds.length;s++)o.push(new Promise(n=>{var o=t.itemsIds[s];let r,a;Array.isArray(o)?[r,...a]=o:r=o;var d=t.itemQuery.replace(/{id}/gi,r),c=e.querySelectorAll(d);if(c.length){if("dynamic"===t.type){const[e,n]=a;e&&(t.innerHTML=i?i.replace("{x}",` <span class="dynamic_info">${e}</span> `):e),t.className+=n||""}c.length&&c.forEach(e=>{var n="self"===t.containerQuery?e:e.querySelector(t.containerQuery);n||(n=e),this.append(n,t)}),n()}else n()}));Promise.all(o).then(t=>n(t))}.bind(this))},i.prototype.append=function(t,e){if(!t.querySelector(".beon-tags.beon-tag__"+e.id)){var n=document.createElement("div"),i=["beon-tags","beon-tag__"+e.id,"beon-tag__"+e.position,"beon-tag__"+e.type,"beon-tag__"+e.type+"--"+e.variant,e.className],o=e.style;e.sealSrc&&(o+="background-image: url("+e.sealSrc+");"),n.className=i.join(" "),n.setAttribute("style",o),n.innerHTML=e.innerHTML,"replace"===e.placementOperation&&(t.innerHTML=""),t.appendChild(n)}};var o=function(){this.componentRootSelector="meta[name^=beon-magicflag]",this.initComponents(),this.bindEvents()};e.default=o;o.prototype.bindEvents=function(){document.addEventListener("DOMContentLoaded",this.initComponents.bind(this)),document.addEventListener("beon.buddy.elements.handle.item.inject.success",this.initComponentFromInjection.bind(this)),document.addEventListener("beon.buddy.inject.after",this.initComponentFromInjection.bind(this)),this.initComponents()},o.prototype.initComponents=function(){var t=document.querySelectorAll(this.componentRootSelector+":not(.initialized)");Array.prototype.slice.call(t).forEach(function(t){this.initComponent(t)}.bind(this))},o.prototype.initComponentFromInjection=function(t){var e=t.detail.container.querySelector(this.componentRootSelector+":not(.initialized)");e&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",function(){this.initComponent(e)}.bind(this)):this.initComponent(e))},o.prototype.initComponent=function(t){try{window.beon_init_log=window.beon_init_log||[];var e=t.getAttribute("data-config"),n=t.parentNode.id,o=JSON.parse(e);if(-1<window.beon_init_log.indexOf(n))return;window.beon_init_log.push(n),new Promise((function(e){e(new i(t,o))}))}catch(e){console.log("failed to build component "+this.componentRootSelector,e)}},window&&(window.BeonMagicFlagInitializer=o)},function(t,e,n){var i,o,s=n(3),r=n(4),a=0,d=0;t.exports=function(t,e,n){var c=e&&n||0,u=e||[],h=(t=t||{}).node||i,l=void 0===t.clockseq?o:t.clockseq;if(null==h||null==l){var p=s();null==h&&(h=i=[1|p[0],p[1],p[2],p[3],p[4],p[5]]),null==l&&(l=o=16383&(p[6]<<8|p[7]))}var f=void 0===t.msecs?(new Date).getTime():t.msecs,g=void 0===t.nsecs?d+1:t.nsecs,m=f-a+(g-d)/1e4;if(0>m&&void 0===t.clockseq&&(l=16383&l+1),(0>m||f>a)&&void 0===t.nsecs&&(g=0),1e4<=g)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=f,d=g,o=l;var v=(1e4*(268435455&(f+=122192928e5))+g)%4294967296;u[c++]=255&v>>>24,u[c++]=255&v>>>16,u[c++]=255&v>>>8,u[c++]=255&v;var y=268435455&f/4294967296*1e4;u[c++]=255&y>>>8,u[c++]=255&y,u[c++]=16|15&y>>>24,u[c++]=255&y>>>16,u[c++]=128|l>>>8,u[c++]=255&l;for(var b=0;6>b;++b)u[c+b]=h[b];return e||r(u)}},function(t,e,n){var i=n(3),o=n(4);t.exports=function(t,e,n){var s=e&&n||0;"string"==typeof t&&(e="binary"===t?Array(16):null,t=null);var r=(t=t||{}).random||(t.rng||i)();if(r[6]=64|15&r[6],r[8]=128|63&r[8],e)for(var a=0;16>a;++a)e[s+a]=r[a];return e||o(r)}},function(t,e,n){"use strict";function i(t){return this.engine=t,this.log=Object(o.a)("transport",this.engine.debug),this.account=void 0,this.host=void 0,this.headers={"Content-Type":"application/json"},this}n.d(e,"a",(function(){return i}));var o=n(0);i.prototype.api=function(t){var e=this.engine.getApiBase(t);if(!e)throw new Error("Invalid api endpoint: "+t);return this.host=e,this.log("transport instance api set to "+e),this},i.prototype.setAccount=function(t){this.account=t},i.prototype.driver=function(){return new XMLHttpRequest},i.prototype.setHeader=function(t,e){return this.headers[t]=e,this},i.prototype.getEngineHeaders=function(){return this.engine.getHeaders&&(this.headers=Object.assign({},this.engine.getHeaders(),this.headers)),this.headers},i.prototype.applyHeaders=function(t){for(var e in this.getEngineHeaders(),this.headers)t.setRequestHeader(e,this.headers[e]);return this},i.prototype.validateInstance=function(){if(void 0===this.account)throw new Error("account not initialized");if(void 0===this.host)throw new Error("api not initialized")},i.prototype.send=function(t,e,n){var i=this,o=Math.floor(Math.random()*(new Date).getTime()),s=this.driver();this.validateInstance(),s.open("POST",this.host+t+"?"+o),this.applyHeaders(s),s.send(e),s.onreadystatechange=function(){i.handleReadyStateChange(s,n)}},i.prototype.get=function(t,e,n){var i=this,o=this.driver();this.validateInstance(),o.open("GET",[this.host,t].join("/")+(e?"?"+e:"")),this.applyHeaders(o),o.send(),o.onreadystatechange=function(){i.handleReadyStateChange(o,n)}},i.prototype.handleReadyStateChange=function(t,e){return"function"==typeof e&&4===t.readyState?200===t.status?e(null,t,t.responseText):(t.status,e(t.status,t,null)):void 0}},function(module,__webpack_exports__,__webpack_require__){"use strict";function engine(){return this.env="production",this.debug=!1,this.object=window[window.beonobject],this.tag=null,this.queue=[],this.trackQueue=void 0,this.buddy=void 0,this.allowedMethods={},this.defaultMethods={create:this.create.bind(this),send:this.send.bind(this),track:this.track.bind(this),log:this.setLog.bind(this)},this.api={production:{event:"https://lb-01.usebeon.io/event",content:"https://content.usebeon.io",assets:"https://c.usebeon.io"},development:{event:"http://localhost:15000/r",content:"http://localhost:10001",assets:"http://localhost:5000/assets"}},this.interactionRepository={},this.account=null,this.customer_id=null,this.session_id=null,this.platform=null,this.headers={},this}__webpack_require__.d(__webpack_exports__,"a",(function(){return engine}));var uuid__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),uuid__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__),_queue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_queue__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_queue__WEBPACK_IMPORTED_MODULE_1__),_log__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_buddy__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(13),_transport__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(10);engine.prototype.init=function(){this.log=Object(_log__WEBPACK_IMPORTED_MODULE_2__.a)("engine",this.debug),this.cookiedomain=this.getTagAttr("data-cookiedomain")||"",this.buddy=new _buddy__WEBPACK_IMPORTED_MODULE_3__.a(this),this.getTrackQueue(),this.initMethods(),this.loop(),this.inited=!0,this.log("engine init done "+this.env)},engine.prototype.getQueue=function(){if(this.object.q.length){for(var t in this.object.q)this.queue.push(this.object.q[t]);this.object.q=[]}return this},engine.prototype.loop=function(){return void 0===this.interval&&this.process(),window.clearInterval(this.interval),this.interval=window.setInterval(this.process.bind(this),100),this},engine.prototype.process=function(){if(this.getQueue(),this.queue.length)for(var t=0;t<this.queue.length;t++){try{var e,n=this.queue[t];e=(n=Array.prototype.slice.call(n)).shift(),this.allowedMethods.hasOwnProperty(e)?(this.allowedMethods[e].apply(this.allowedMethods[e],n),(this.processedQueue=this.processedQueue||[]).push(n)):this.log("invalid method "+e)}catch(n){this.log("engine: "+e+" method failed with "+n.message),this.log(n)}delete this.queue[t]}return this.queue=[],this},engine.prototype.create=function(){var t,e;2>arguments.length||(t=arguments[0],e=arguments[1],this.account=t,this.platform=e,this.session_id=this.setCookie("beon-session-id",this.getCookie("beon-session-id",function(){return"sess_"+uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4()}.bind(this)),5184e3),this.customer_id=this.setCookie("beon-customer-id",this.getCookie("beon-customer-id",function(){return"anon_"+uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4()}.bind(this)),31536e3),this.setHeader("x-beon-client",t),this.setHeader("x-beon-token",t),this.setHeader("x-beon-session-id",this.session_id),this.setHeader("x-beon-customer-id",this.customer_id),this.setHeader("x-beon-pageview-id",this.getPageviewId()),this.dispatchEvent("engine.create.after",{engine:this}))},engine.prototype.send=function(){if(!(2>arguments.length)){if(null==this.account)throw new Error("account not initialized");var t=Array.prototype.slice.call(arguments),e=t.shift(),n=t.shift();void 0===e||this.transport().api(e).send("/",JSON.stringify(n),function(t,i,o){return t?console.warn("beon fault: "+t):void this.dispatchEvent("engine.send.response",{what:e,payload:n,res:o})}.bind(this))}},engine.prototype.track=function(){if(!(1>arguments.length)){if(null==this.account)throw new Error("account not initialized");var t=Array.prototype.slice.call(arguments);this.getTrackQueue().push(t)}},engine.prototype.getTrackQueue=function(){return this.trackQueue||(this.trackQueue=new _queue__WEBPACK_IMPORTED_MODULE_1___default.a),this.trackQueue},engine.prototype.registerMethods=function(t){for(var e in t)this.registerMethod(e,t[e]);return this},engine.prototype.registerMethod=function(t,e){return this.log("registering method "+t),this.allowedMethods[t]=e,this},engine.prototype.initMethods=function(){return this.registerMethods(this.defaultMethods)},engine.prototype.registerInteraction=function(t){var e=t.id;return this.interactionRepository[e]=t,this.interactionRepository[e]},engine.prototype.getInteractionFromRegistry=function(t){return this.interactionRepository[t]||null},engine.prototype.dispatchEvent=function(t,e,n){var i=new CustomEvent("beon."+t,{detail:e});return(n=n||document).dispatchEvent(i),i},engine.prototype.dispatchHook=function(){if(!(2>arguments.length)){var args=Array.prototype.slice.call(arguments),hook=args.shift(),origin=args.shift();if("object"!=typeof origin||!origin.hasOwnProperty("hooks")||!origin.hooks.length)return null;var hooks=origin.hooks.filter((function(t){return t.type==hook})).sort((function(t,e){return t.order-e.order}));if(!hooks.length)return null;for(var i in hooks)if(hooks[i].hasOwnProperty("script")){var evaled=eval(hooks[i].script);"function"==typeof evaled&&evaled.apply(hooks[i],arguments)}}},engine.prototype.transport=function(t){if(t){var e=new _transport__WEBPACK_IMPORTED_MODULE_4__.a(this);return e.setAccount(this.account),e}return void 0===this.transportInstance&&(this.transportInstance=new _transport__WEBPACK_IMPORTED_MODULE_4__.a(this),this.transportInstance.setAccount(this.account)),this.transportInstance},engine.prototype.setCookie=function(t,e,n){var i,o="",s=this.cookiedomain;if(n){var r=new Date;r.setTime(r.getTime()+1e3*n),o="; expires="+r.toUTCString()}return i=t+"="+e+o+"; domain="+s+"; path=/",document.cookie=i,e},engine.prototype.getCookie=function(t,e){for(var n,i=t+"=",o=document.cookie.split(";"),s=0;s<o.length;s++){for(n=o[s];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(i))return n.substring(i.length,n.length)}if("function"==typeof e)return e()},engine.prototype.setHeader=function(t,e){return this.headers[t]=e,this.headers},engine.prototype.getHeaders=function(){return this.headers},engine.prototype.getTag=function(){if(!this.tag){var t=document.getElementById("beon-"+window.beonobject);this.tag=!!t&&t}return this.tag},engine.prototype.getTagAttr=function(t){var e=this.getTag();if(e)return e.getAttribute(t)},engine.prototype.getApiBase=function(t,e){var n=this.api[this.env][t];return n?"global"===e?n+"/core":n+"/"+this.account:void 0},engine.prototype.getPageviewId=function(){return window.beon_pageview_id||(window.beon_pageview_id=uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4()),window.beon_pageview_id},engine.prototype.setLog=function(){var t=Array.prototype.slice.call(arguments),e=t.shift();this.debug=e,this.log=Object(_log__WEBPACK_IMPORTED_MODULE_2__.a)("engine",e)},function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}()},function(t){var e=function(t){return this.queue=t||[],this.paused=!1,this};e.prototype.push=function(){return Array.prototype.push.apply(this.queue,arguments),this},e.prototype.consume=function(t){if(!this.paused&&this.queue.length)do{t(this.queue.shift())}while(this.queue.length);setTimeout(function(){this.consume(t)}.bind(this),100)},e.prototype.pause=function(){return this.paused=!0,this},e.prototype.pause=function(){return this.paused=!1,this},t.exports=e},function(t,e,n){"use strict";function i(t){return this.engine=t,this.log=Object(o.a)("buddy",this.engine.debug),this.defaultPlacement={selector:"body",method:"append"},this.defaultMethods={interaction:this.interaction.bind(this)},this.assets={slidersjs:{type:"js",src:"/js/sliders.js",scope:"global",loaded:!1,env:"all"},customjs:{type:"js",src:"/js/custom.js",scope:"account",loaded:!1,env:"all"},beoncss:{type:"css",src:"/css/beon.css",scope:"account",loaded:!1,env:"production"},defaultcss:{type:"css",src:"/css/default.css",scope:"global",loaded:!1,env:"all"}},this.injectionRetryCount=120,this.injectionRetryDelay=500,this.init(),this}n.d(e,"a",(function(){return i}));var o=n(0),s=function(t){return this.root=t,this.init(),this};s.prototype.init=function(){this.initializePivotNavigation()},s.prototype.initializePivotNavigation=function(){var[,t]=/--with-pivot-(numbers|button)/i.exec(this.root.className)||[];if(this.controls=this.root.querySelectorAll("input[name=beon-pivot-control]"),"button"===t){var e=this.root.querySelector(".beon-showcase__pivot-control--button");if(!e)return;e.addEventListener("click",function(t){t.preventDefault(),this.rotatePivot(),window.clearInterval(this.rotateAnimationInterval),e.className+=" rotate",this.rotateAnimationInterval=window.setInterval((function(){e.className=e.className.replace(" rotate","")}),500)}.bind(this))}},s.prototype.currentPivot=function(){var t=this.root.querySelector("input[name=beon-pivot-control]:checked").className.replace("pivot--","");return parseInt(t,10)},s.prototype.rotatePivot=function(){var t=this.currentPivot(),e=this.controls[t+1]||this.controls[0];return this.controls.forEach((function(t){t.removeAttribute("checked")})),e.setAttribute("checked","checked"),e};var r=function(){this.initializeShowcases(),this.bindEvents()};r.prototype.bindEvents=function(){document.addEventListener("DOMContentLoaded",this.initializeShowcases.bind(this)),document.addEventListener("beon.buddy.elements.handle.item.inject.success",this.initializeShowcaseFromInjection.bind(this)),document.addEventListener("beon.buddy.inject.after",this.initializeShowcaseFromInjection.bind(this))},r.prototype.initializeShowcases=function(){var t=document.querySelectorAll(".beon-showcase:not(.pivot-initialized)");Array.prototype.slice.call(t).forEach(function(t){this.initializeElement(t)}.bind(this))},r.prototype.initializeShowcaseFromInjection=function(t){t.detail.element;var e=t.detail.container.querySelectorAll(".beon-showcase:not(.pivot-initialized)");e&&Array.prototype.slice.call(e).forEach(function(t){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",function(){this.initializeElement(t)}.bind(this)):this.initializeElement(t)}.bind(this))},r.prototype.initializeElement=function(t){var e=t.className;t.className+=" pivot-initialized",/--with-pivot/i.test(e)&&new s(t)};var a=n(5),d=n(6),c=n(7);i.prototype.init=function(){return this.engine.registerMethods(this.defaultMethods),document.addEventListener("beon.engine.create.after",this.initAssets.bind(this)),this.initResponseEvents(),this.initInjectionEvents(),this.initComponents(),this},i.prototype.initAssets=function(){for(var t in this.assets){var e=this.assets[t],n=this.engine.getApiBase("assets",e.scope);if(this.log(n),!e.loaded&&("development"!==this.engine.env||"all"===e.env||e.env===this.engine.env)){switch(e.type){case"js":this.buildScript(t,n+e.src);break;case"css":this.buildStylesheet(t,n+e.src)}e.loaded=!0}}return this},i.prototype.buildStylesheet=function(t,e){var n=document.createElement("link");return n.rel="stylesheet",n.type="text/css",n.href=e,n.id="beon-style-"+t,document.querySelector("head").appendChild(n),n},i.prototype.buildScript=function(t,e){var n=document.createElement("script");return n.type="text/javascript",n.src=e,n.id="beon-script-"+t,document.querySelector("head").appendChild(n),n},i.prototype.transport=function(t){return this.engine.transport().api(t)},i.prototype.interaction=function(){var t=this.transport("content"),e=Array.prototype.slice.call(arguments),n=null,i=e.shift(),o=e.shift(),s=e.shift();return void 0===i||void 0===o?void this.log("invalid params at interaction call"):(this.initAssets(),n=["content",i,o].join("/"),void t.get(n,s,function(t,e,n){if(t)return console.warn("beon interaction fault: "+t);var i=JSON.parse(n);return"object"!=typeof i||null==i?this.log("beon responded with invalid json"):void this.handleContentResponse(i)}.bind(this)))},i.prototype.initResponseEvents=function(){document.addEventListener("beon.engine.send.response",function(t){try{var e=JSON.parse(t.detail.res);e.hasOwnProperty("regions")&&this.handleContentResponse(e)}catch(t){this.log("invalid json response")}}.bind(this))},i.prototype.handleContentResponse=function(t){var e=t.regions||null,n=t.elements||null;document.addEventListener("beon.buddy.regions.handle.item.inject.success",function(t){var e=t.detail.region._id;this.handleElementsFromRegion(e,n)}.bind(this)),this.handleRegions(e,n)},i.prototype.handleRegions=function(t,e){if(!t.length)return this.log("beon received an empty regions set."),!1;for(var n in this.engine.dispatchHook("regions.handle.collection.before",t),this.engine.dispatchEvent("buddy.regions.handle.collection.before",t),t)new Promise(function(){var i=t[n];i.hasOwnProperty&&i.hasOwnProperty("_id")&&((e||[]).find((function(t){return t.region_id===i._id}))?(this.engine.dispatchEvent("buddy.regions.handle.item.before",t[n]),this.injectRegion(t[n])):this.log("empty region "+i._id))}.bind(this))},i.prototype.handleElementsFromRegion=function(t,e){e.filter((function(e){return e.hasOwnProperty&&e.hasOwnProperty("_id")&&e.region_id&&e.region_id==t})).sort((function(t,e){return t.order-e.order})).forEach(function(t){this.injectElement(t)}.bind(this))},i.prototype.initInjectionEvents=function(){document.addEventListener("beon.buddy.node.inject.fail",this.injectNodeRetry.bind(this))},i.prototype.injectRegion=function(t){var e=t.placement||null,n=t._id||null;if(!n||!e)return this.log("invalid region item",t);var i,o="beon-region-"+n,s=document.querySelector("#"+o);s?i=s:((i=document.createElement(e.container||"div")).setAttribute("id",o),i.setAttribute("class","beon-region"),i.addEventListener("beon.buddy.node.inject.success",function(){this.engine.dispatchEvent("buddy.regions.handle.item.inject.success",{region:t})}.bind(this))),this.injectNode("region",n,i,e,!0,!0)},i.prototype.injectElement=function(t){return new Promise(function(e){var n=t._id||null;if(!n)return this.log("invalid element item",t);var i={selector:"#beon-region-"+t.region_id,operation:"append"},o="beon-element-"+n,s=document.querySelector("#"+o);s&&s.parentNode.removeChild(s);var r=document.createElement("div");r.setAttribute("id",o),r.setAttribute("data-type",t.template.name),r.setAttribute("class","beon-container"),r.innerHTML=t.output,r.addEventListener("click",this.handleInteraction.bind(this)),this.bindEventAnchor(r),r.addEventListener("beon.buddy.node.inject.success",function(){this.engine.dispatchEvent("buddy.elements.handle.item.inject.success",{element:t,container:r})}.bind(this)),e(this.injectNode("element",n,r,i,!1))}.bind(this))},i.prototype.injectNode=function(t,e,n,i,o,s){return new Promise(function(r){this.log(`injectNode promise set for ${t} ${e}`);var a=i.operation||null,d=i.selector||null,c=i.replace||!1;if(!a||!d)throw this.log(i),new Error("insuficient arguments to place node on DOM");var u=document.querySelector(i.selector);if(!u){if(this.log("node insertion point not found at "+i.selector),!o)throw new Error("node injection fail");return this.log("sending retry event"),this.engine.dispatchEvent("buddy.node.inject.fail",{reason:"placement not found",type:t,id:e,node:n,placement:i,retryOnFailure:o,removeConflicts:s}),!1}if(n.getAttribute("id")&&document.querySelector("#"+n.getAttribute("id"))&&s){var h=document.querySelector("#"+n.getAttribute("id"));h.parentNode.removeChild(h),this.log("conflict removed "+n.getAttribute("id"))}("append"==a||"prepend"==a)&&c&&(u.innerHTML="",a="append"),"append"===a?u.appendChild(n):"prepend"===a?u.insertBefore(n,u.firstChild):"before"===a?u.parentNode.insertBefore(n,u):"after"===a?u.parentNode.insertBefore(n,u.nextSibling):this.log("invalid insertion method"),("before"==a||"after"==a)&&c&&u.parentNode.removeChild(u),this.engine.dispatchEvent("buddy.node.inject.success",{type:t,id:e,node:n,placement:i,retryOnFailure:o,removeConflicts:s}),this.engine.dispatchEvent("buddy.node.inject.success",null,n),r(n)}.bind(this))},i.prototype.injectNodeRetry=function(t){var e=t.detail.id,n=t.detail.node,i=t.detail.placement;this.log("retrying node "+e),i.inject_count=i.inject_count||1,i.inject_count++,i.inject_count>this.injectionRetryCount?this.log("injection count exceeded limit",n):window.setTimeout(function(){this.injectNode(t.detail.type,t.detail.id,t.detail.node,t.detail.placement,t.detail.retryOnFailure,t.detail.removeConflicts)}.bind(this),this.injectionRetryDelay)},i.prototype.bindEventAnchor=function(t){this.log("binding event handlers on "+t),t.querySelectorAll("[data-track]:not([data-bind=true])").forEach(function(t){this.log("binding "+t),t.setAttribute("data-bind",!0),t.addEventListener(t.getAttribute("data-track"),this.handleEventAnchor.bind(this))}.bind(this))},i.prototype.handleEventAnchor=function(t){var e=new this.dom;try{var n,i=t.target||t.eventSource||t.toElement,o={event:"beon_gaevent",eventAction:void 0,eventLabel:void 0,eventValue:void 0};if(!i)throw new Error("handling unknown event source "+i);if(!(n=e.parent(i,"[data-track]")))throw new Error("handling unknown event anchor "+n);var s=n.getAttribute("data-event");s=s?JSON.parse(s):[],o.eventAction=s.shift(),o.eventLabel=s.shift(),o.eventValue=s.shift();var r=e.parent(n,"[data-event-root]");if(r){var a=r.getAttribute("data-event-root"),d=(a=a?JSON.parse(a):[]).shift(),c=a.shift(),u=a.shift();!o.eventAction&&d&&(o.eventAction=d),!o.eventLabel&&c&&(o.eventLabel=c),!o.eventValue&&u&&(o.eventValue=u)}return window.dataLayer||this.log("warning: dataLayer not found"),(window.dataLayer||[]).push(o),o}catch(n){return this.log(n),void this.log(t)}},i.prototype.handleInteraction=function(t){var e=t.target,n=null,i=null,o=null,s=null,r={},a=new this.dom;if(null!=(n="A"==e.nodeName.toUpperCase()?e:a.parent(e,".beon-interaction__item a")||null))return(s=a.hasClass(n,"beon-interaction__item")?n:a.parent(n,".beon-interaction__item"))?(o=(i=a.parent(s,".beon-interaction")).parentNode,r.id=i.getAttribute("id"),r.root=i,r.item=s,r.target=n,r.hit=e.getAttribute("class"),r.type=o.getAttribute("data-type"),r.sku=s.getAttribute("data-product-sku"),r.product_id=s.getAttribute("data-product-id"),r.timestamp=Date.now(),n.hasAttribute("data-action")&&(r.action=n.getAttribute("data-action")),void(/event-category/.test(n.getAttribute("href"))&&this.dispatchGAEvent(n))):void 0},i.prototype.dispatchGAEvent=function(t){var e,n=function(t,e){var n=new RegExp(t+"=(.+?)(&|$)","i").exec(e);return n?n[1]:null};return(e={event:"beon_gaevent"}).eventCategory=n("event-category",t.getAttribute("href")),e.eventAction=n("event-action",t.getAttribute("href")),e.eventLabel=n("event-label",t.getAttribute("href")),void(window.dataLayer||[]).push(e)},i.prototype.dispatchActionHooks=function(t,e){var n=this.engine.getInteractionFromRegistry(t.id);if(!n)throw new Error("Given interaction do not have an registry");switch(t.action){case"buy":this.engine.dispatchEvent("interaction.handle.buy",{interaction:t,origin:e}),this.engine.dispatchHook("interaction.handle.buy",n,t,e);break;case"details":this.engine.dispatchEvent("interaction.handle.details",{interaction:t,origin:e}),this.engine.dispatchHook("interaction.handle.details",n,t,e)}},i.prototype.initComponents=function(){new r,new a.default,new d.default,new c.default},i.prototype.dom=function(){return this},i.prototype.dom.prototype.collectionHas=function(t,e){for(var n=0,i=t.length;n<i;n++)if(t[n]==e)return!0;return!1},i.prototype.dom.prototype.parent=function(t,e){for(var n=document.querySelectorAll(e),i=t.parentNode;i&&!this.collectionHas(n,i);)i=i.parentNode;return i},i.prototype.dom.prototype.hasClass=function(t,e){var n=t.getAttribute("class"),i=null==n?[]:n.split(" ");return this.collectionHas(i,e)}},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(11);!function(){var t=window._beonlog||!1,e=Object(i.a)("loader",t);void 0===window.beonobject?e("beon object not loaded properly"):window.beone?e("beon engine already inited. duplicate tags?"):(window.beone=new o.a,window.beone.debug=t,window.beone.env=window._beonenv||"production",window.beone.init())}()}]);