(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888,179],{4414:function(r,e){"use strict";var n={ASSETS_CDN:"https://cdn.eplayassets.com",IMAGES_CDN:"https://images.eplay.com",GOOGLE_SIGNIN_RETURN:"https://www.eplay.com",DEFAULT_BG_VIDEO:"bg-video-10.mp4",ERROR_TIMEOUT:4e3,DEFAULT_SLIDES:[{id:1,href:"https://www.eplay.com",src:"/assets/tour/thumbnails/performer-thumbs15.jpg",get ss(){return this.src}},{id:2,href:"https://www.eplay.com",src:"/assets/tour/thumbnails/performer-thumbs8.jpg",get ss(){return this.src}},{id:3,href:"https://www.eplay.com",src:"/assets/tour/thumbnails/performer-thumbs3.jpg",get ss(){return this.src}},{id:4,href:"https://www.eplay.com",src:"/assets/tour/thumbnails/performer-thumbs9.jpg",get ss(){return this.src}},{id:5,href:"https://www.eplay.com",src:"/assets/tour/thumbnails/performer-thumbs14.jpg",get ss(){return this.src}}],ADS_RESERVED_QUERY_PARAMS:["videos","c","clickdata","h","w","path","f","overlay","v"],DEFAULT_AD_HREF:"https://www.eplay.com",IMAGE_SIZES:{avatar:{xs:{w:50,h:50},small:{w:80,h:80},medium:{w:120,h:120},large:{w:180,h:180},xlarge:{w:260,h:260},xxlarge:{w:500,h:500}},cover:{small:{h:80},medium:{h:120},large:{h:180},xlarge:{h:260},xxlarge:{h:500}},cam:{small:{w:178,h:100},medium:{w:260,h:146},large:{w:676,h:380},xlarge:{w:960,h:540},xxlarge:{w:1280,h:720}},preview:{w:80,h:80}},MOBILE_CHECK_WIDTH:576,TABLET_CHECK_WIDTH:768,DESKTOP_CHECK_WIDTH:992};e.Z=n},7712:function(r,e,n){"use strict";n.d(e,{x:function(){return c},Z:function(){return f}});var t=n(5893),i=n(7294),o=n(8273),u=n(6763),s=n(2964),a=n(4414),l=n(8399),c=i.createContext({}),v=a.Z.MOBILE_CHECK_WIDTH,d=a.Z.TABLET_CHECK_WIDTH,h=a.Z.DESKTOP_CHECK_WIDTH;function f(r){var e,n=r.useragent,a=r.children,f=(0,s.Z)(),p=f.width,m=f.height,_=(0,u.Z)(),w=(0,i.useState)(n),E=w[0],g=w[1];(0,o.Z)((function(){g((0,l.mH)(navigator.userAgent))}),[!0,null===(e=navigator)||void 0===e?void 0:e.userAgent]);var b=(0,i.useMemo)((function(){var r;return 90===Math.abs(null!==(r=null===_||void 0===_?void 0:_.angle)&&void 0!==r?r:0)?m:p}),[m,p,null===_||void 0===_?void 0:_.angle]),A=(0,i.useMemo)((function(){var r;return null!==(r=null===E||void 0===E?void 0:E.isMobile)&&void 0!==r&&r||b<=d}),[null===E||void 0===E?void 0:E.isMobile,b]),D=(0,i.useMemo)((function(){var r;return!(null!==(r=null===E||void 0===E?void 0:E.isMobile)&&void 0!==r&&r)&&b>h}),[null===E||void 0===E?void 0:E.isMobile,b]),T=(0,i.useMemo)((function(){var r;return!(null!==(r=null===E||void 0===E?void 0:E.isMobile)&&void 0!==r&&r)&&b>v&&b<h}),[null===E||void 0===E?void 0:E.isMobile,b]),y=(0,i.useMemo)((function(){return(null===E||void 0===E?void 0:E.isiPad)||(null===E||void 0===E?void 0:E.isiPhone)||(null===E||void 0===E?void 0:E.isiPod)}),[null===E||void 0===E?void 0:E.isiPad,null===E||void 0===E?void 0:E.isiPhone,null===E||void 0===E?void 0:E.isiPod]),M=(0,i.useMemo)((function(){var r;return!D&&90===Math.abs(null!==(r=null===_||void 0===_?void 0:_.angle)&&void 0!==r?r:0)}),[D,null===_||void 0===_?void 0:_.angle]),O={useragent:E,isMobile:A,isTablet:T,isDesktop:D,isLandscape:M,isIOS:y};return(0,t.jsx)(c.Provider,{value:O,children:a})}},8399:function(r,e,n){"use strict";n.d(e,{Bh:function(){return u},mH:function(){return s},_8:function(){return a}});var t=n(4121),i=n(3030),o=n(4414);function u(r,e){var n=e.clickdata,i="";if(n){var u=n.endsWith("?")?n:"".concat(n,"?");u=u.replace(/\/$/,"");var s=r.substring(0,r.indexOf("?"));i+=u,i+=s?"path=".concat(s):""}for(var a=0,l=Object.entries(e);a<l.length;a++){var c=(0,t.Z)(l[a],2),v=c[0],d=c[1];o.Z.ADS_RESERVED_QUERY_PARAMS.includes(v)||(i+=Array.isArray(d)?"&".concat(v,"=").concat(d.join(",")):"&".concat(v,"=").concat(d))}return n?i:(i=i.replace("&",""))?"".concat(o.Z.DEFAULT_AD_HREF,"?").concat(i):o.Z.DEFAULT_AD_HREF}function s(r){return(0,i.parse)(r||"")}function a(r){var e,n=null!==r&&void 0!==r&&null!==(e=r.errors)&&void 0!==e&&e.children?r.errors.children:null===r||void 0===r?void 0:r.children;if(!n)return!1;for(var i=0,o=Object.entries(n);i<o.length;i++){var u=(0,t.Z)(o[i],2),s=u[0],l=u[1];if("errors"===s&&Array.isArray(l))return l[0];if(!Array.isArray(l)&&"object"===typeof l&&Object.keys(l).length>0){if("errors"===Object.keys(l)[0])return l.errors[0];var c=a(l);if(c)return c}}return!1}},6363:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3673)}])},1682:function(r){r.exports=function(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}},2447:function(r,e,n){"use strict";function t(r,e,n,t,i,o,u){try{var s=r[o](u),a=s.value}catch(l){return void n(l)}s.done?e(a):Promise.resolve(a).then(t,i)}function i(r){return function(){var e=this,n=arguments;return new Promise((function(i,o){var u=r.apply(e,n);function s(r){t(u,i,o,s,a,"next",r)}function a(r){t(u,i,o,s,a,"throw",r)}s(void 0)}))}}n.d(e,{Z:function(){return i}})},6265:function(r,e,n){"use strict";function t(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}n.d(e,{Z:function(){return t}})},1163:function(r,e,n){r.exports=n(2441)},4453:function(){}},function(r){var e=function(e){return r(r.s=e)};r.O(0,[774,385,112,597,655,947,39,673],(function(){return e(6363),e(2441)}));var n=r.O();_N_E=n}]);