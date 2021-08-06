function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(Object(r),!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}define("services/utilities",["FR","jquery","moment","react","react-dom","moment-timezone"],function(t,e,r,n,o){var a=n.useEffect,i={getResortName:function(){return e("body").data("resort")},getGCD:function(t,e){for(;0!==e;){var r=t%e;t=e,e=r}return t},getCloudinaryImageOptions:function(r,n,o){o=o||{},"true"==t.cloudinary.cloudUseCname?e.cloudinary.config({cloud_name:t.cloudinary.cloudName,cname:t.cloudinary.cloudCname,secure_distribution:t.cloudinary.cloudCname,secure:!0,private_cdn:!0}):e.cloudinary.config({cloud_name:t.cloudinary.cloudName,secure:!0});var a,i,c={width:o.width||"auto",dpr:"auto",crop:o.cropMode||"scale",fetch_format:"auto",quality:"auto"};return o.aspectRatio&&(c.aspect_ratio=o.aspectRatio),o.fetch?(c.type="fetch",a=e.cloudinary.url(n,c),i=e.cloudinary.url(n,_objectSpread(_objectSpread({},c),{},{dpr:o.dpr||1,quality:o.quality||"auto:low",width:o.width||100}))):(a=e.cloudinary.url(n,{transformation:[c]}),i=e.cloudinary.url(n,{transformation:[_objectSpread(_objectSpread({},c),{},{dpr:o.dpr||1,quality:o.quality||"auto:low",width:o.width||100})]})),{customCssClass:o.customCssClass||"",imageTag:a,initialImageTag:i}},getCloudinaryImageTag:function(t,e,r){var n=i.getCloudinaryImageOptions(t,e,r),o=n.imageTag,a=n.customCssClass;return'<img alt="'.concat(t.replace(/"/g,""),'"\n                            class="cld-responsive ').concat(a,'"\n                            data-src="').concat(o,'" />')},CloudinaryImageTag:function(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=i.getCloudinaryImageOptions(t,r,o),u=c.imageTag,l=c.customCssClass;return a(function(){e.cloudinary.responsive()},[r]),n.createElement("img",{alt:t.replace(/"/g,""),key:r,className:"cld-responsive ".concat(l),"data-src":u})},getCloudinaryFetchImageTag:function(t,e,r){return(r=r||{}).fetch=!0,i.getCloudinaryImageTag(t,e,r)},supportClipPath:function(t){window.navigator.userAgent.indexOf("MSIE")>0||navigator.userAgent.match(/Trident.*rv:11\./)?t.addClass("clip-unsupported"):t.addClass("clip-supported")},getDateByTimeZone:function(t,e){return e&&e.length>0?r(t).tz(e).format("M/DD/YYYY h:mm:ss a"):r(t).format("M/DD/YYYY h:mm:ss a")},roundUp:function(t){return Math.ceil(parseFloat(t))},escapeHtml:function(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;").replace(/\//g,"&#47;")},formatDate:function(t,e,n){return e=e||"MMMM D, YYYY",n=n||"YYYY-MM-DD",r((t=t||"").split("T")[0],n).format(e)},isOutOfViewport:function(t){var e=t.getBoundingClientRect(),r={};return r.top=e.top<0,r.left=e.left-e.width<0,r.bottom=e.bottom>(window.innerHeight||document.documentElement.clientHeight),r.right=e.right+e.width>document.documentElement.clientWidth,r.any=r.top||r.left||r.bottom||r.right,r.all=r.top&&r.left&&r.bottom&&r.right,r},getMapZoomLevel:function(t){return{WORLD:1,CONTINENT:5,CITY:10,STREETS:15,RESORT:15,BUILDINGS:20}[t.toUpperCase()]},highlightText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.string,r=void 0===e?"":e,n=t.tag,o=void 0===n?"span":n,a=t.className,i=void 0===a?"sctexteditor--bold":a;return r.replace(/\{\{(.*?)\}\}+/g,"<".concat(o,' class="').concat(i,'">$1</').concat(o,">"))},getSitecorePlaceholder:function(t){var e=document.getElementById(t);if(e)return e.innerHTML},scrollToElement:function(r){var n=e(r);if(0!==n.length){var o=n.offset().top,a=t.$el.mainNav.outerHeight(!0);t.$el.htmlBody.animate({scrollTop:o-a-10})}},isUserLoggedIn:function(){return"true"===t.$el.body.attr("data-session-active")&&"logged in"===t.$el.body.attr("data-user-authentication-status")}};return i});
//# sourceMappingURL=utilities.js.map
