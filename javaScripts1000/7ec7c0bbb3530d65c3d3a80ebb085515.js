!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}t.exports=function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var a=n(10),r=n(11),o=n(12);t.exports=function(t){return a(t)||r(t)||o()}},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){var a=n(8),r=n(5);t.exports=function(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?r(t):e}},function(t,e,n){var a=n(15);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=a=function(t){return n(t)}:t.exports=a=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},a(e)}t.exports=a},function(t,e,n){var a=n(14);function r(e,n,o){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=r=Reflect.get:t.exports=r=function(t,e,n){var r=a(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}},r(e,n,o||e)}t.exports=r},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e){!function(t,e){"use strict";t=t||"docReady",e=e||window;var n=[],a=!1,r=!1;function o(){if(!a){a=!0;for(var t=0;t<n.length;t++)n[t].fn.call(window,n[t].ctx);n=[]}}function i(){"complete"===document.readyState&&o()}e[t]=function(t,e){if("function"!=typeof t)throw new TypeError("callback for docReady(fn) must be a function");a?setTimeout((function(){t(e)}),1):(n.push({fn:t,ctx:e}),"complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(o,1):r||(document.addEventListener?(document.addEventListener("DOMContentLoaded",o,!1),window.addEventListener("load",o,!1)):(document.attachEvent("onreadystatechange",i),window.attachEvent("onload",o)),r=!0))}}("docReady",window)},function(t,e,n){var a=n(3);t.exports=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}},function(t,e){function n(e,a){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,a)}t.exports=n},function(t,e,n){"use strict";n.r(e);var a=n(4),r=n.n(a),o=(n(13),n(1)),i=n.n(o),c=n(2),u=n.n(c),s=n(6),d=n.n(s),l=n(5),p=n.n(l),f=n(3),h=n.n(f),v=n(9),g=n.n(v),y=n(7),w=n.n(y),m=n(0),b=n.n(m),P=n(8),S=n.n(P),E=document,A=(parent,window,function(t,e){var n=E.createElement("img");return n.height=1,n.width=1,n.style.display="none",n.src=t,n.onload=e,n.alt="",E.body.appendChild(n)}),x=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=E.createElement("script");return n.type="text/javascript",n.src=t,n.async=e,E.body.appendChild(n)},T=function(){function t(e){i()(this,t),this.pixels=e,this.parameters={sku:"",orderId:"",qty:"",revenue:"",ltv:""}}return u()(t,[{key:"dropPixel",value:function(t,e){var n=this.pixels[t]||[],a=this.parameters;e&&Object.keys(e).forEach((function(t){return a[t]=e[t],!1})),n.forEach((function(t){var e=t,n="img";return"string"!=typeof t&&(e=t[0],(n=t[1])||(n="img")),e=(e=(e=(e=(e=(e=e.replace(/\[\[SKU\]\]/g,a.sku)).replace(/\[\[ORDERID\]\]/g,a.orderId)).replace(/\[\[QTY\]\]/g,a.qty)).replace(/\[\[REVENUE\]\]/g,a.revenue)).replace(/\[\[LTV\]\]/g,a.ltv)).replace(/\[\[ITEMS\]\]/g,(a.items||[]).map((function(t){return t.id||""})).join(",")),"img"===n?A(e):"script"===n?x(e):"iframe"===n&&function(t){var e=E.createElement("iframe");return e.width=1,e.height=1,e.style.display="none",e.src=t,E.body.appendChild(e)}(e)}))}}]),t}(),k=window.auvars["".concat("251")].t,_=(window.auvars["".concat("251")].p,function(t){function e(){var t;return i()(this,e),(t=d()(this,h()(e).call(this))).brand=window.Shopify.shop,t}return w()(e,t),u()(e,[{key:"captureProduct",value:function(t){try{var e=window.ShopifyAnalytics.meta.selectedVariantId,n=window.ShopifyAnalytics.meta.product.variants[0];return t?n=window.ShopifyAnalytics.meta.product.variants.find((function(e){return e.public_title===t})):e&&(n=window.ShopifyAnalytics.meta.product.variants.find((function(t){return t.id.toString()===e.toString()}))),n||((n=window.ShopifyAnalytics.meta.product.variants[0]).id=window.ShopifyAnalytics.meta.product.id),{id:"".concat(n.id,"-").concat(k),name:n.name,price:parseInt(n.price,10)/100,brand:this.brand}}catch(t){return console.error(t),null}}},{key:"sendProductEvents",value:function(){var t=this,e=this.captureProduct();if(e){this.sendViewProductEventToGA(e),this.appendPageLoadPixelCheck("view");var n=document.querySelector('button[name="add"]')||document.querySelector("form#add-item-form button")||document.querySelector("button.shopify_add_to_cart")||document.querySelector('input[name="add"]')||document.querySelector(".ProductForm__AddToCart")||document.querySelector("#AddToCart")||document.querySelector('.product-add input[type="submit"]');n&&window.au.push({category:"ListenerAttacher",input:n,method:function(){t.sendAddProductEventToGA(e),window.au.push({category:"behavior",action:"purchase-intent"});var n={event:"addToCart",data:e};t.profilerServiceRequest(n)}})}}},{key:"captureCart",value:function(){try{for(var t=document.querySelector("#order-summary").querySelectorAll("tr.product"),e=[],n=0;n<t.length;n++){var a=t[n],r=a.dataset.productId,o=a.querySelector(".product__description__name").textContent,i=parseFloat(a.querySelector(".product__price").textContent.replace(/[^0-9.]/g,"")),c=parseInt(a.querySelector(".product__quantity").textContent.replace(/\s+/g,""),10),u={id:"".concat(r,"-").concat(k),name:o,brand:this.brand,price:i,quantity:c};e.push(u)}return e}catch(t){return console.error(t),null}}},{key:"calculateRevenue",value:function(t){for(var e=0,n=0;n<t.length;n++)e+=parseFloat(t[n].price);return e}},{key:"captureTransaction",value:function(){try{var t=window.Shopify.checkout,e=window.Shopify.shop,n=t.order_id,a=parseFloat(t.subtotal_price),r=0;try{r=parseFloat(t.total_tax)}catch(t){console.error(t)}var o=0;if(t.shipping_rate)try{o=parseFloat(t.shipping_rate)}catch(e){try{o=parseFloat(t.shipping_rate.price)}catch(t){console.error(t)}}var i=this.formatProductsInTransaction(t.line_items);return{id:"".concat(n,"-").concat(k),affiliation:e,revenue:a,tax:r,shipping:o,items:i}}catch(t){return console.error(t),null}}},{key:"formatProductsInTransaction",value:function(t){for(var e=t,n=[],a=0;a<e.length;a++){var r=e[a],o={id:r.product_id,name:r.title,brand:this.brand,price:parseFloat(r.price),quantity:r.quantity};n.push(o)}return n}},{key:"initialize",value:function(){var t=this,e=window.ShopifyAnalytics&&window.ShopifyAnalytics.meta&&window.ShopifyAnalytics.meta.product,n=window.Shopify.Checkout&&window.Shopify.Checkout.page&&"thank_you"!==window.Shopify.Checkout.page,a=window.Shopify.checkout,r=document.querySelectorAll("div.quickadd");if(r.length>0)for(var o=function(e){var n=r[e],a=n.querySelector("button").dataset.cartAdd,o=n.querySelector('[class$="item__title"]').textContent;if(n.querySelector(".js-option-value")){var i=n.querySelector(".js-option-value").textContent.split(": ");o+=i[i.length-1]}var c={id:a,name:o,price:parseFloat(n.querySelector(".product-price__price").textContent.replace(/[^0-9.]/g,"")),brand:t.brand};window.au.push({category:"ListenerAttacher",input:n,method:function(){t.sendAddProductEventToGA(c);var e={event:"addToCart",data:c};window.au.push({category:"behavior",action:"purchase-intent"}),t.profilerServiceRequest(e)}})},i=0;i<r.length;i++)o(i);if(e){this.sendProductEvents();var c=document.querySelectorAll(".swatch-element");if(c.length>0)for(window.addEventListener("ProductMetaUpdated",(function(){t.sendProductEvents()})),i=0;i<c.length;i++){var u=c[i];window.au.push({category:"ListenerAttacher",input:u,method:function(){window.Adgt.SetVarInterval(window.ShopifyAnalytics.meta,"selectedVariantId")}})}}if(n){var s=this.captureCart();s&&(window.au.push({category:"behavior",action:"purchase-intent"}),this.appendPageLoadPixelCheck("checkout"),this.sendAllProductsInCartToGA(s,(function(){return t.sendCheckoutEventToGA()})))}if(a&&-1!==window.location.pathname.indexOf("thank_you")){var d=this.captureTransaction();if(d){var l=d.items;window.au.push({category:"behavior",action:"purchase-complete"}),this.appendPageLoadPixelCheck("transaction"),this.sendAllProductsInTransactionToGA(l,(function(){return t.sendTransactionEventToGA(d)}))}else this.transaction={id:"null-".concat(k),affiliation:this.brand,revenue:0,tax:0,shipping:0,items:[]},this.appendPageLoadPixelCheck("transaction")}}}]),e}(function(){function t(){i()(this,t),window.aupixels?this.pixels=window.aupixels.ec||{}:this.pixels={},this.ECPixels=new T(this.pixels),this.pageLoadRun=[],window.Adgt||(window.Adgt={}),window.Adgt.VarWatch=function(t,e,n){var a=t[e];return function(){if(t[e]!=a){var r=a;a=t[e],n(r,a)}}},window.Adgt.VarHandler=function(t,e){window.au.push({category:"DispatchEvent",eventName:"ProductMetaUpdated"}),clearInterval(window.Adgt.variantInterval)},window.Adgt.SetVarInterval=function(t,e){window.Adgt.variantInterval=setInterval(window.Adgt.VarWatch(t,e,window.Adgt.VarHandler),100)},window.Adgt.Store=this}return u()(t,[{key:"pathIncludes",value:function(t){return-1!==window.location.pathname.indexOf(t)}},{key:"updatePixels",value:function(){var t=this;this.pixels=window.aupixels.ec||{},this.ECPixels=new T(this.pixels),this.pageLoadRun.forEach((function(e){var n={};"add"===e||"view"===e?n={sku:t.product.id}:"checkout"===e?n={qty:t.qty,revenue:t.revenue}:"transaction"===e&&(n={qty:t.transaction.items.length||t.qty,revenue:t.transaction.revenue||t.revenue,orderId:t.transaction.id}),t.ECPixels.dropPixel(e,n)})),this.pageLoadRun=[]}},{key:"appendPageLoadPixelCheck",value:function(t){this.pageLoadRun.filter((function(e){return e===t})).length||this.pageLoadRun.push(t)}},{key:"setClassProducts",value:function(t){this.products=t,this.qty=t.length,this.revenue=t.reduce((function(t,e){return t+parseFloat(e.price)}),0)}},{key:"sendAddProductEventToGA",value:function(t){this.product=t;try{this.gaAddProduct(t),ga("".concat("auPassiveTagger",".ec:setAction"),"add"),ga("".concat("auPassiveTagger",".send"),"event","UX","click","add to cart"),this.ECPixels.dropPixel("add",{sku:t.id,revenue:t.price.toFixed(2)})}catch(t){console.error(t)}}},{key:"sendViewProductEventToGA",value:function(t){this.product=t;try{ga("".concat("auPassiveTagger",".ec:addImpression"),{id:t.id,name:t.name,price:t.price,brand:t.brand}),ga("".concat("auPassiveTagger",".ec:setAction"),"detail"),ga("".concat("auPassiveTagger",".send"),"pageview"),this.ECPixels.dropPixel("view",{sku:t.id})}catch(t){console.error(t)}}},{key:"sendAllProductsInCartToGA",value:function(t,e){this.setClassProducts(t);try{for(var n=0;n<t.length;n++){var a=t[n];this.gaAddProduct(a)}return e(),!0}catch(t){return!1}}},{key:"sendCheckoutEventToGA",value:function(){try{ga("".concat("auPassiveTagger",".ec:setAction"),"checkout",{step:1}),ga("".concat("auPassiveTagger",".send"),"event",{eventCategory:"Checkout",eventAction:"checkout",hitCallback:function(){}}),this.ECPixels.dropPixel("checkout",{qty:this.qty,revenue:this.revenue})}catch(t){console.error(t)}}},{key:"sendAllProductsInTransactionToGA",value:function(t,e){this.setClassProducts(t);try{for(var n=0;n<t.length;n++){var a=t[n];this.gaAddProduct(a)}return e(),!0}catch(t){return!1}}},{key:"gaAddProduct",value:function(t){ga("".concat("auPassiveTagger",".ec:addProduct"),{id:t.id,name:t.name,brand:t.brand,price:t.price,quantity:t.quantity||1})}},{key:"sendTransactionEventToGA",value:function(t){this.transaction=t;try{ga("".concat("auPassiveTagger",".ec:setAction"),"purchase",{id:t.id,affiliation:t.affiliation,revenue:t.revenue,tax:t.tax,shipping:t.shipping}),ga("".concat("auPassiveTagger",".send"),"pageview"),this.ECPixels.dropPixel("transaction",{qty:(t.items||[]).length||this.qty,revenue:t.revenue||this.revenue,orderId:t.id,items:t.items||[],ltv:t.ltv||""})}catch(t){console.error(t)}}},{key:"profilerServiceRequest",value:function(t){window.au.push({category:"sendUserBehaviour",action:JSON.stringify(t)})}},{key:"sendErrorToSentry",value:function(){return!1}}]),t}()));function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(n,!0).forEach((function(e){b()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O,j,R,L=window,I=document,G=function(t){function e(t){var n;return i()(this,e),n=d()(this,h()(e).call(this,t)),b()(p()(n),"getTags",(function(t,e,n,a){var r=[];if(document.querySelector(e)){var o=document.querySelector(e),i=o.querySelector(n).innerText.toUpperCase();r.push(t+" - CATEGORY > "+i),("NEWSWEEK"===t||"UPDATES"!==i)&&o.querySelectorAll(a).forEach((function(e){r.push(t+" - "+e.innerText.toUpperCase())}))}return r})),b()(p()(n),"tagsReader",(function(){var t=[];n.u.hostname.match(/livenewsnow.com/gi)&&(t=n.getTags("LIVENEWSNOW",".td-post-header",".td-category",".entry-title")),n.u.hostname.match(/newsweek.com/gi)&&(t=n.getTags("NEWSWEEK",".filed-under",".a-cat",".topic")),n.push({category:"writeDecoratorRecord",tags:t,decor_dict:{}})})),n.tagsReader(),n.docReady=n.docReady.bind(p()(n)),n}return w()(e,t),u()(e,[{key:"docReady",value:function(){g()(h()(e.prototype),"docReady",this).call(this)}}]),e}(function(){function t(){var e=this;i()(this,t),b()(this,"push",(function(t,n,a){var r={};if("string"==typeof t)r.category=t,"string"==typeof n||"number"==typeof n?r.partnerId=n:n&&(r=C({},r,{},n)),a&&(r=C({},r,{},a));else{if(!t||"object"!==S()(t))return null;r=t}if(r.partnerId&&r.partnerId.toString()!==e.auvars.p.toString())return null;(e[r.category]||function(){return null})(r)})),b()(this,"writeDecoratorRecord",(function(t){var n={};if(e.auvars.tags=t.tags||[],!(e.randNum>=e.decoratorTarget))return null;var a=I.querySelectorAll("meta"),o=["og:title","og:description","og:image","og:url","og:type","og:name","og:locale"];a.forEach((function(t){var e=t.getAttribute("property");o.includes(e)&&(n[e.replace("og:","")]=t.getAttribute("content")),"keywords"===t.getAttribute("name")&&(n.keywords=(t.getAttribute("content")||"").split(","))})),n.url||(n.url=e.u.href),n.title||(n.title=I.title),n=C({},n,{},t.decor_dict);var i=[].concat(r()(e.metatags),r()(t.tags));i=i.filter((function(t){return"string"==typeof t||t instanceof String})).map((function(t){return t.replace(/,/g,"")})),n.tags=i.join(),n.tagger_id=e.auvars.t,n.partner_id=e.auvars.p;var c=new XMLHttpRequest,u="".concat("https://p.ad.gt","/api/v1/dec");return c.open("POST",u,!0),c.setRequestHeader("Content-type","application/json"),c.send(JSON.stringify(n)),c})),b()(this,"setupGA",(function(){var t,n,a,r,o;L.ga||(n=I,a="script","ga",(t=L).GoogleAnalyticsObject="ga",t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,r=n.createElement(a),o=n.getElementsByTagName(a)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",o.parentNode.insertBefore(r,o)),ga("create","UA-87198801-1","auto","auPassiveTagger"),ga("".concat("auPassiveTagger",".require"),"ecommerce"),ga("".concat("auPassiveTagger",".require"),"ec"),ga("".concat("auPassiveTagger",".set"),"anonymizeIp",!0),ga("".concat("auPassiveTagger",".set"),"dimension1",e.auvars.a),ga("".concat("auPassiveTagger",".set"),"dimension2","none"),ga("".concat("auPassiveTagger",".set"),"dimension3",e.auvars.p),ga("".concat("auPassiveTagger",".set"),"dimension4",e.u.hostname),ga("".concat("auPassiveTagger",".set"),"dimension5",e.u.pathname),ga("".concat("auPassiveTagger",".set"),"dimension6","Passive Tagger"),ga("".concat("auPassiveTagger",".set"),"dimension7",e.auvars.t),(e.randNum>=.85||["158"].includes(e.auvars.p.toString())&&e.randNum>=.7||["220"].includes(e.auvars.p.toString()))&&ga("".concat("auPassiveTagger",".send"),"pageview")})),b()(this,"ListenerIterator",(function(t,n){Array.prototype.forEach.call(I.querySelectorAll(t),(function(t){e.ListenerAttacher({input:t,method:n})}))})),b()(this,"ListenerAttacher",(function(t){var e=t.input,n=t.method;e.addEventListener?e.addEventListener("mousedown",n):e.attachEvent&&e.attachEvent("mousedown",n)})),b()(this,"GlobalListenerHandler",(function(t){e.GlobalHandlers[t.type].forEach((function(e){if(t.target.matches(e.selector))e.method(t);else for(var n=t.target,a=!1;n.parentElement&&!a;)(a=(n=n.parentElement).matches(e.selector))&&e.method(C({},t,{target:n}))}))})),b()(this,"GlobalListenerAttacher",(function(t,n,a){"string"==typeof t&&(t=[t]),t.forEach((function(t){e.GlobalHandlers[t]=e.GlobalHandlers[t]||[],e.GlobalHandlers[t].push({selector:n,method:a}),document.addEventListener?(document.removeEventListener(t,window.au.l),document.addEventListener(t,window.au.l)):document.attachEvent&&(document.detachEvent(t,window.au.l),document.attachEvent(t,window.au.l))}))})),b()(this,"sendOffsiteClick",(function(t){var n=t.url;A("".concat("https://a.ad.gt","/api/v1/off-site-click/").concat(e.auvars.p,"?tagger_id=").concat(e.auvars.t,"&url=").concat(n))})),b()(this,"clickHandler",(function(t){var n=t.currentTarget.getAttribute("href");null!==n&&e.include_internal_links.includes(window.location.hostname)&&window.au.push({category:"sendSPAPageView",url:n})})),b()(this,"sendUserBehaviour",(function(t){var n={click_url:t.action,tagger_id:e.auvars.t,audigent_id:e.auvars.a},a=new XMLHttpRequest,r="".concat("https://p.ad.gt","/api/v1/ubh");a.open("POST",r,!0),a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify(n))})),b()(this,"behavior",(function(t){var n=encodeURIComponent("".concat(e.u.protocol,"//").concat(e.u.hostname).concat(e.u.pathname,"__audigent-behavior-").concat(t.action).concat(e.u.search).concat(e.u.hash));e.sendOffsiteClick({url:n}),e.sendGAEvent({eventCategory:"audigent-behavior",eventAction:t.action,eventLabel:e.auvars.t})})),b()(this,"sendEvent",(function(t){var n=t.event,a=t.events,r=t.type;if(!(n=n||a)){if(!r)return null;delete(n=C({},t)).category,delete n.partnerId}var o={tagger_id:e.auvars.t,partner_id:e.auvars.p,audigent_id:e.auvars.a};o.events=Array.isArray(n)?n:[n];var i=new XMLHttpRequest,c="".concat("https://p.ad.gt","/api/v1/event");return i.open("POST",c,!0),i.setRequestHeader("Content-type","application/json"),i.send(JSON.stringify(o)),""})),b()(this,"sendGAEvent",(function(t){var e=t.eventCategory,n=t.eventAction,a=t.eventLabel,r=t.skipSQS;ga("".concat("auPassiveTagger",".send"),{hitType:"event",eventCategory:e,eventAction:n,eventLabel:a}),r||window.au.push({category:"sendEvent",event:{type:e,eventAction:n,eventLabel:a}})})),b()(this,"segCapture",(function(){var t=window.au_seg;if(((t||{}).segments||[]).length>0){var n={tagger_id:e.auvars.t,partner_id:e.auvars.p,audigent_id:e.auvars.a,segment_ids:t.segments.join("|")},a=new XMLHttpRequest,r="".concat("https://p.ad.gt","/api/v1/segs");a.open("POST",r,!0),a.setRequestHeader("Content-type","application/json"),a.send(JSON.stringify(n))}return""})),b()(this,"otpTrack",(function(){var t=window.au_seg;if(t&&t.segments){var n=t.segments.filter((function(t){return t.match(/AU_SEG_(AGE|GENDER)/gi)}));e.randNum>=.9&&(e.sendGAEvent({eventCategory:"otpTracker",eventAction:n.join("|"),eventLabel:e.u.hostname,skipSQS:!0}),e.segCapture())}if(e.randNum>=.99||["134"].includes(e.auvars.p.toString())&&e.randNum>=.7){var a=e.u.hostname,r=new XMLHttpRequest,o="".concat(e.auvars.p.toString(),"-").concat(e.auvars.a),i="".concat(e.auvars.p.toString(),"-").concat(e.auvars.y),c="".concat("https://seg.ad.gt","/api/v1/demo?au_id=").concat(o,"&tagger_id=").concat(i);r.open("get",c,!0),r.setRequestHeader("Content-type","application/json"),r.addEventListener("load",(function(){var t=JSON.parse(this.responseText).segments||[];t.length&&window.au.push({category:"sendGAEvent",eventCategory:"otpTester",eventAction:t.join("|"),eventLabel:a,skipSQS:!0})})),r.send()}})),b()(this,"pixels",(function(){var t="".concat("https://pixels.ad.gt","/api/v1/getpixels?tagger_id=").concat(e.auvars.t,"&url=").concat(encodeURIComponent(e.u.href),"&code='none'");x(t,!0)})),b()(this,"sendSPAPageView",(function(t){var n=t.url;if(n){n.startsWith("//")&&(n="http://"+n),!n.startsWith("/")&&n.includes("://")||(n=I.location.protocol+"//"+I.location.host+(n.startsWith("/")?"":"/")+n);try{var a=new URL(n);a.host===I.location.host&&(e.sendOffsiteClick(a.href),ga("".concat("auPassiveTagger",".send"),"pageview",a.pathname+a.hash))}catch(t){}}})),b()(this,"tags",(function(t){var n=(t.action||t.data||[]).map((function(t){return t.toUpperCase()}));n.length&&e.push({category:"writeDecoratorRecord",tags:n,decor_dict:{}})})),b()(this,"conversion",(function(t){console.log("Audigent Conversion Event - ".concat(t.action))})),b()(this,"pageView",(function(t){console.log("Audigent PageView Event - ".concat(t.action))})),b()(this,"beopEvent",(function(t){var n=t.partnerId||e.auvars.p;e.sendEvent({event:C({},t.data||{},{partner_id:n,type:"beop"})})})),b()(this,"trackEvent",(function(t){return!1})),b()(this,"DispatchEvent",(function(t){var e=function(t){if("function"==typeof window.CustomEvent)return new CustomEvent(t);var e=!1,n=!1,a=void 0,r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,n,a),r}(t.eventName);window.dispatchEvent(e)})),b()(this,"optout",(function(){A("".concat("https://ids.ad.gt","/api/v1/optout"))})),b()(this,"hpx",(function(t){var n=t.haloId;(e.auvars.hpx||[]).forEach((function(t){return A(t[1].replace(/{haloid}/gi,n).replace(/{auid}/gi,e.auvars.a))}))})),this.u=L.location,this.metatags=[],this.auvars=L.auvars["".concat("251")],this.randNum=Math.random(),this.docReady=this.docReady.bind(this),this.facebook=this.facebook.bind(this),this.GlobalHandlers={},this.decoratorTarget=.995,this.pixels(),this.facebook(),this.setupGA(),this.ListenerIterator("a",this.clickHandler),this.include_internal_links=[],L.addEventListener("hashchange",(function(){e.sendSPAPageView({url:e.u.href}),e.pixels()}))}return u()(t,[{key:"valueOf",value:function(){return null}},{key:"docReady",value:function(){if(window.Shopify){var t=new _;t.initialize(),window.addEventListener("aupixels",(function(){t.updatePixels()}))}this.DispatchEvent({eventName:"aufp"}),window.auvars.fp=!0,this.otpTrack()}},{key:"facebook",value:function(){return!["57","273","305","314"].includes(this.auvars.p)&&(t=window,e=document,n="script",t.fbq||(a=t.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},t._fbq||(t._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],(r=e.createElement(n)).async=!0,r.src="https://connect.facebook.net/en_US/fbevents.js",(o=e.getElementsByTagName(n)[0]).parentNode.insertBefore(r,o)),fbq("init","1853083501571805"),fbq("trackSingle","1853083501571805","PageView",{partner_id:this.auvars.p,tagger_id:this.auvars.t}),!0);var t,e,n,a,r,o}}]),t}());O=window,j="".concat("251"),R=O.au&&Array.isArray(O.au)?r()(O.au):[],O.auvars.autag_objs=[].concat(r()((O.auvars.autag_objs||[]).filter((function(t){return"autag"!==t}))),["autag"]),O.au={push:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];O.auvars.autag_objs.forEach((function(t){return Object.values(O[t]||{}).forEach((function(t){return t.push.apply(t,e)}))}))},l:function(t){O.auvars.autag_objs.forEach((function(e){return Object.values(O[e]||{}).forEach((function(e){return e.GlobalListenerHandler(t)}))}))},init:function(){O.auvars[j].hist=O.auvars[j].hist||[];var t=O.auvars[j].hist.slice(-1)[0];O.autag=O.autag||{},O.autag[j]&&t===O.location.href||(O.auvars[j].hist.push(O.location.href),O.autag[j]=new G)}},O.au.init(),R.forEach((function(t){return O.au.push(t)})),docReady((function(){return window.au.push({category:"docReady"})}))}]);