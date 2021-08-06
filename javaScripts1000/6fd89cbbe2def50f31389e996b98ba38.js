var Filters_menu=function(){"use strict";var e,t,a=this;a.init=function(i){var r=0;for(a.params=i,document.querySelectorAll||a.querySelectorAll(),(e=document.querySelectorAll(a.params.sortfilters)).length&&(e=e[0]).closest(".title-bar")&&Tube8Utils.addClassName(e.closest(".title-bar"),"filters-title-bar"),t=document.querySelectorAll(a.params.sortBtn);r<t.length;r++)t[r].onclick=function(e){return function(){return a.toggleFilterMenu(e),!1}}(r)},a.isVisible=function(e){return e.offsetWidth>0||e.offsetHeight>0},a.querySelectorAll=function(){!function(e,t){e=document,t=e.createStyleSheet(),e.querySelectorAll=function(a,i,r,l,o){for(o=e.all,i=[],r=(a=a.replace(/\[for\b/gi,"[htmlFor").split(",")).length;r--;){for(t.addRule(a[r],"k:v"),l=o.length;l--;)o[l].currentStyle.k&&i.push(o[l]);t.removeRule(0)}return i}}()},a.toggleFilterMenu=function(e){var i=t[e],r=document.getElementById(i.id.replace("Btn","List")),l=0,o=document.querySelector(a.params.overlay);for(a.isVisible(r)?(r.style.display="none",Tube8Utils.removeClassName(r,a.params.activeMenu),o&&void 0!==o&&Tube8Utils.removeClassName(o,"active")):(a.clearActiveMenu(),r.style.display="block",Tube8Utils.addClassName(r,a.params.activeMenu),o&&void 0!==o&&Tube8Utils.addClassName(o,"active"));l<t.length;l++)Tube8Utils.hasClassName(t[l],"active")&&t[l].id!==i.id&&Tube8Utils.removeClassName(t[l],"active");return Tube8Utils.hasClassName(i,"active")?Tube8Utils.removeClassName(i,"active"):Tube8Utils.addClassName(i,"active"),!1},a.clearActiveMenu=function(){var e=document.querySelectorAll("."+a.params.activeMenu);e.length&&(e[0].style.display="none",Tube8Utils.removeClassName(e[0],a.params.activeMenu))}};try{if(document.getElementById("filterContainer")||document.getElementById("filterContainer_instant")){var sortFilters=new Filters_menu;sortFilters.init({sortfilters:"#filterContainer",sortBtn:".sortBtn",activeMenu:"filterListActive"})}}catch(e){console.log("sortFilters.init "+e.message)}var Flipbook=function Flipbook(){"use strict";var Self=this,timer,o={},data={},flipTimer;Self.init=function(e){Self.params=e,Self.isWebPSupported=!1,Self.detectWebPSupported(),Tube8Utils.isLegacyBrowser()?Self.isMp4Supported=Self.isWebmSupported=!1:(Self.isMp4Supported=Self.detectMp4Supported(),Self.isWebmSupported=Self.detectWebmSupported()),Self.addEvents()},Self.detectWebPSupported=function(){var e=new Image;e.onload=function(){Self.isWebPSupported=!0},e.src="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoBAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="},Self.getPictureSource=function(e){var t;try{t=e.closest("picture").querySelector("source")}catch(e){t=!1}return t},Self.isPromiseSupported=function(){return"undefined"!=typeof Promise&&-1!==Promise.toString().indexOf("[native code]")},Self.isPlayVideoSupported=function(e){return(Self.isMp4Supported||Self.isWebmSupported)&&Self.isMediaFormatSupported(e)},Self.isMediaFormatSupported=function(e){var t=e.getAttribute("data-mediabook");return!(!t||!(t.indexOf(".webm")>0&&Self.isWebmSupported||t.indexOf(".mp4")>0&&Self.isMp4Supported))},Self.detectMp4Supported=function(){var e=document.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).mp4Format=e.canPlayType("video/mp4; codecs=avc1.42E01E,mp4a.40.2").replace(/^no$/,""),t="maybe"==t.mp4Format||"probably"==t.mp4Format)}catch(e){console.log("flipbook "+e)}return t},Self.detectWebmSupported=function(){var e=document.createElement("video"),t=!1;try{(t=!!e.canPlayType)&&((t=new Boolean(t)).webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t="maybe"==t.webm||"probably"==t.webm)}catch(e){console.log("flipbook "+e)}return t},Self.markFirstThumbnail=function(){var e;"undefined"==typeof sessionStorage||sessionStorage.getItem("swiped_tablet"),(e=document.querySelector("figure.video_box"))&&e.classList.add("swipeable")},Self.unmarkFirstThumbnail=function(){var e;"undefined"!=typeof sessionStorage&&(e=document.querySelector(".swipeable"))&&(e.classList.remove("swipeable"),sessionStorage.setItem("swiped_tablet","1"))},Self.addEvents=function(){var e;"pc"===page_params.myPlatform&&(Tube8Utils.bindEvent(document.body,"mousemove",Self.initFlip),Tube8Utils.bindEvent(document,"mouseout",function(e){var t=e.relatedTarget;t&&"html"!==t.nodeName.toLowerCase()||Self.endFlip()})),"tablet"!==page_params.myPlatform&&"mobile_touch"!==page_params.myPlatform||((e=Hammer.utils.extend({},Hammer.defaults.behavior)).touchAction="pan-y",new Hammer(document.body,{behavior:e,preventDefault:!1,dragLockToAxis:!0,drag_min_distance:10}).on("dragleft dragright swipeleft swiperight",function(e){Self.initVideoPreview(e)}),Self.markFirstThumbnail())},Self.initVideoPreview=function(e){var t,a,i,r,l,o,n=e.target;if(Self.removeVideo(),n.classList.contains("js-flipBook")&&(r=Self.isWebPSupported&&Self.getPictureSource(n)?Self.getPictureSource(n).srcset:n.getAttribute("data-thumb")||n.getAttribute("src"),(l=n.closest("picture").parentNode.querySelector(".preloadLine"))&&"picture"!==l.parentNode.tagName.toLocaleLowerCase()&&n.closest("picture").appendChild(l),(!Self.isPlayVideoSupported(n)||Self.isPlayVideoSupported(n)&&!n.classList.contains("js-videoPreview"))&&(Self.dumpVideo(n,l),Self.startFlip(n)),Self.isPlayVideoSupported(n)&&n.classList.contains("js-videoPreview"))){n.closest(".video_box")&&n.closest(".video_box").classList.contains("swipeable")&&Self.unmarkFirstThumbnail();try{t=JSON.parse(n.getAttribute("data-mediabook"));for(var s=0;s<t.length;s++)if(t[s].indexOf(".webm")>0&&Self.isWebmSupported||t[s].indexOf(".mp4")>0&&Self.isMp4Supported){a=t[s];break}}catch(e){a=!1}a?(Self.endFlip(),i=Self.buildVideo(a,r,n),n.classList.add("activeVideo"),o=i.play(),Self.playVideo(i),Self.isPromiseSupported()?void 0!==o&&o.then(function(){n.classList.contains("activeVideo")?n.parentNode.appendChild(i):i.pause()}).catch(function(){console.log("Auto-play was prevented")}):n.parentNode.appendChild(i)):(Self.dumpVideo(n,l),Self.startFlip(n))}"tablet"!==page_params.myPlatform&&"mobile_touch"!==page_params.myPlatform||e.gesture.stopDetect()},Self.playVideo=function(e){return e&&e.paused&&(e.play(),e.paused&&(Self.isMp4Supported=Self.isWebmSupported=!1)),!0},Self.buildVideo=function(e,t,a){var i=document.createElement("video");return i.onerror=function(){var e=a.closest("picture").parentNode.querySelector(".preloadLine");e&&e.parentNode.removeChild(e),a.classList.remove("js-videoPreview"),a.classList.remove("pendingVideo"),a.classList.remove("activeVideo"),a.classList.add("js-flipBook"),i.parentNode&&i.parentNode.removeChild(i),Self.startFlip(a)},i.autoplay=!0,i.controls=!1,i.className="videoPreviewEl",i.loop="loop",i.muted="muted",i.src=e,i.poster=t,i.disableRemotePlayback=!0,i.setAttribute("playsinline",""),i.setAttribute("webkitplaysinline",!0),i},Self.dumpVideo=function(e,t){e.classList.remove("js-videoPreview"),e.classList.remove("pendingVideo"),e.classList.remove("activeVideo"),e.classList.add("js-flipBook"),t&&t.parentNode.removeChild(t)},Self.removeVideo=function(){var e,t=document.querySelector(".activeVideo");t&&((e=t.parentNode.querySelector("video"))&&t.parentNode.removeChild(e),t.classList.remove("activeVideo"))},Self.dataSet=function(string){var data;try{data=eval("("+string+")")}catch(e){data=!1}return data},Self.data=function(e,t,a){switch(e.data=e.data||{},arguments.length){case 3:e.data[t]=a;break;case 2:return e.data[t];default:return e.data}},Self.callbackData=function(){return data={index:o.index,setLength:o.setLength,currentImage:o.currentImage,imgWrapper:o.imgWrapper,currentUrl:o.currentUrl,active:o.active,status:o.status}},Self.initFlip=function(e){var t=e.target;clearTimeout(flipTimer),flipTimer=window.setTimeout(function(){t.classList.contains("activeVideo")||Self.initVideoPreview(e),t.getAttribute("data-flipbook_active")||Self.endFlip()},0)},Self.startFlip=function(e){var t,a,i,r,l,n,s,c,u,m,d,f,p,e=e,S=0,g=Self.params.thumbnailsSets.length;for(Self.unmarkFirstThumbnail(),o.active&&!e.closest("[data-flipbook_active]")&&Self.endFlip();S<g;S++)if(e.closest(Self.params.thumbnailsSets[S].thumbnailsContainer)&&(!Self.params.thumbnailsSets[S].extendHoverClassName&&Tube8Utils.hasClassName(e,Self.params.thumbnailsSets[S].thumbnailsClassName)||Self.params.thumbnailsSets[S].extendHoverClassName&&e.closest("."+Self.params.thumbnailsSets[S].extendHoverClassName))){if(u=e,m=e,Self.params.thumbnailsSets[S].excludeContainer&&u.closest(Self.params.thumbnailsSets[S].excludeContainer))return!1;if(Self.params.thumbnailsSets[S].extendHoverClassName&&(m=(u=u.closest("."+Self.params.thumbnailsSets[S].extendHoverClassName)).querySelector("."+Self.params.thumbnailsSets[S].thumbnailsClassName)),o.active){if(u.getAttribute("data-flipbook_active"))return!1;Self.endFlip()}return Self.params.thumbnailsSets[S].cover?(r=(c=Self.dataSet(m.getAttribute("data-flipbook"))).setLength,i=c.firstThumbnail,s=parseInt(c.firstThumbnail,10)-c.incrementer,t=c.digitsPreffix,a=c.digitsSuffix,l=c.incrementer,n=-1):(d=!(!Self.isWebPSupported||!Self.getPictureSource(m))&&Self.getPictureSource(m).srcset,t=m.src.substring(0,m.src.lastIndexOf(Self.params.thumbnailsSets[S].digitsPreffix)+1),a=Self.params.thumbnailsSets[S].digitsSuffix,s=m.src.replace(t,""),p="",f=(p=m.src.search(".com/videos/")>=1?/(\(m=[a-zA-Z\d])\w+(\))(\(mh=.*)(\))/g:/(\(m=[a-zA-Z\d])\w+(\))/g).test(s)?s.match(p)[0]:"",s=parseInt(s.replace(a,""),10),i=Self.params.thumbnailsSets[S].firstThumbnail,r=Self.params.thumbnailsSets[S].setLength,n=(s-i)/(l=Self.params.thumbnailsSets[S].incrementer)),o={index:n,setLength:r,currentUrl:d||m.src,firstThumbnail:i,digits:s,modifiedImgName:f,digitsPreffix:t,digitsSuffix:a,incrementer:l,currentImage:m,imgWrapper:!1,interval:Self.params.thumbnailsSets[S].interval,active:!0,callback:Self.params.thumbnailsSets[S].callback,init:Self.params.thumbnailsSets[S].init,status:"started"},u.setAttribute("data-flipbook_active","1"),Self.params.thumbnailsSets[S].extendHoverClassName&&(o.imgWrapper=u),o.init&&!u.init&&(Self.callbackData(),o.init(data)),u.init||(Self.data(u,"oldThumbUrl",d||m.src),Self.data(u,"oldIndex",n),u.init=!0),o.callback&&(Self.callbackData(),o.callback(data)),Self.params.thumbnailsSets[S].resetIndex&&(o.digits=(r-1)*o.incrementer+parseInt(o.firstThumbnail,10),o.index=r-1,Self.callbackData()),window.clearTimeout(timer),timer=window.setTimeout(Self.preload,0),!1}},Self.endFlip=function(){var e,t;window.clearTimeout(timer),o.active&&((e=document.querySelector("[data-flipbook_active]"))&&(e.removeAttribute("data-flipbook_active"),t="img"===e.nodeName.toLowerCase()?e:e.querySelector("img"),Self.isWebPSupported&&Self.getPictureSource(t)?Self.getPictureSource(t).srcset=Self.data(e,"oldThumbUrl"):t.src=Self.data(e,"oldThumbUrl")),o.active=!1,o.status="ended",o.index=Self.data(e,"oldIndex"),o.callback&&(Self.callbackData(),o.callback(data)))},Self.preload=function(){var e,t=new Image;if(o.digits<(o.setLength-1)*o.incrementer+parseInt(o.firstThumbnail,10)?(o.digits=o.digits+o.incrementer,o.index++):(o.digits=parseInt(o.firstThumbnail,10),o.index=0),"tablet"===page_params.myPlatform&&(e=document.querySelector("[data-flipbook_active]"))&&o.index===Self.data(e,"oldIndex"))return Self.endFlip(),!1;o.firstThumbnail.length>String(o.digits).length?o.currentUrl=o.digitsPreffix+o.firstThumbnail.substring(0,o.firstThumbnail.length-String(o.digits).length)+o.digits+o.modifiedImgName+o.digitsSuffix:o.currentUrl=o.digitsPreffix+o.digits+o.modifiedImgName+o.digitsSuffix,t.onerror=function(){Self.endFlip()},t.onload=function(){o.active&&(timer="running"!==o.status?window.setTimeout(Self.flipImage,0):window.setTimeout(Self.flipImage,o.interval))},t.src=o.currentUrl},Self.flipImage=function(e){window.clearTimeout(timer),Self.isWebPSupported&&Self.getPictureSource(o.currentImage)?Self.getPictureSource(o.currentImage).srcset=o.currentUrl:o.currentImage.src=o.currentUrl,o.status="running",o.callback&&(Self.callbackData(),o.callback(data)),void 0!==e&&(o.digits=e*o.incrementer+parseInt(o.firstThumbnail,10),o.index=e,Self.callbackData()),Self.preload()},Self.jumpTo=function(e){o.digits=e*o.incrementer+parseInt(o.firstThumbnail,10),o.index=e,o.firstThumbnail.length>String(o.digits).length?o.currentUrl=o.digitsPreffix+o.firstThumbnail.substring(0,o.firstThumbnail.length-String(o.digits).length)+o.digits+o.modifiedImgName+o.digitsSuffix:o.currentUrl=o.digitsPreffix+o.digits+o.modifiedImgName+o.digitsSuffix,Self.isWebPSupported&&Self.getPictureSource(o.currentImage)?Self.getPictureSource(o.currentImage).srcset=o.currentUrl:o.currentImage.src=o.currentUrl,o.callback&&(Self.callbackData(),o.callback(data))},Self.changeIndex=function(e){o.digits=e*o.incrementer+parseInt(o.firstThumbnail,10),o.index=e,Self.callbackData()},Self.pauseFlip=function(){window.clearTimeout(timer),o.status="paused"}};try{var flipbook=new Flipbook;flipbook.init({thumbnailsSets:[{thumbnailsContainer:page_params.flipbook.regular.thumbnailsContainer,thumbnailsClassName:page_params.flipbook.regular.thumbnailsClassName,excludeContainer:page_params.flipbook.regular.excludeContainer,interval:page_params.flipbook.regular.interval,cover:page_params.flipbook.regular.cover,firstThumbnail:page_params.flipbook.regular.firstThumbnail,digitsSuffix:page_params.flipbook.regular.digitsSuffix,digitsPreffix:page_params.flipbook.regular.digitsPreffix,incrementer:page_params.flipbook.regular.incrementer,setLength:page_params.flipbook.regular.setLength},{thumbnailsContainer:page_params.flipbook.friends.thumbnailsContainer,thumbnailsClassName:page_params.flipbook.friends.thumbnailsClassName,excludeContainer:page_params.flipbook.friends.excludeContainer,interval:page_params.flipbook.friends.interval,cover:page_params.flipbook.friends.cover}]})}catch(e){console.log("flipbook Error"),console.log(e)}var actionModifierManager=function(){"use strict";var e=this;e.init=function(t){e.params=t,e.params.isLoggedIn||e.params.actionMod&&e.buildIDsList(e.params.actionMod),e.reloadSpecificPage()},e.buildIDsList=function(t){for(var a=t.toString(),i=document.querySelectorAll("."+a),r=0,l=i.length;r<l;r++){var o=i[r].getAttribute("id");document.getElementById(o)&&Tube8Utils.bindEvent(document.getElementById(o),"click",e.saveIDandURL),page_params.actionModifierArr.push(o)}},e.saveIDandURL=function(){var e=localStorage,t=page_params.safeUrl;e.setItem("returnId",this.id),e.setItem("returnUrl",t)},e.reloadSpecificPage=function(){var t=localStorage,a=t.getItem("returnId"),i=t.getItem("returnUrl"),r=t.getItem("isReloaded"),l=t.getItem("storedVideoComment"),o="//"+window.location.hostname,n=document.getElementById(a);null===i&&t.setItem("returnUrl",o),""===e.params.isPHUser&&t.setItem("isReloaded","true"),e.params.isLoggedIn&&("mobile_touch"!==page_params.myPlatform?"true"==r&&null!==document.getElementById(a)&&(n&&e.triggerEvent(n),t.removeItem("isReloaded"),t.removeItem("returnId"),t.removeItem("returnUrl")):"true"==r?(t.setItem("isReloaded","false"),n&&e.triggerEvent(n)):("false"==r&&(null!==l&&void 0!==(l=JSON.parse(l)).value&&void 0!==l.id&&null!==document.getElementById(l.id)&&(document.getElementById(l.id).value=l.value,t.removeItem("storedVideoComment")),n&&e.triggerEvent(n)),t.removeItem("isReloaded"),t.removeItem("returnId"),t.removeItem("returnUrl")))},e.triggerEvent=function(e){"textarea"===e.nodeName.toLowerCase()?e.focus():e.click()}},actionTrigger=new actionModifierManager;actionTrigger.init(page_params.actionModifierSetup);var Follow_channel_manager=function(){"use strict";var e=this,t=document.querySelectorAll(".js-channel-follow-btn");e.init=function(t){e.params=t},e.follow_channel_ajax=function(t,a,i,r){e.params.ajaxLink=r?e.params.ajaxChannelUnSubscription:e.params.ajaxChannelSubscription,Tube8Utils.getAjax(e.params.ajaxLink,{site_id:t},function(){e.follow_unfollow_channel(a,i)})},e.follow_unfollow_channel=function(t,a){var i=t.getAttribute("id"),r=document.getElementById(i),l=r.querySelector("."+e.params.followChannelClass),o=r.querySelector("."+e.params.followingChannelClass),n=r.querySelector("."+e.params.unfollowChannelClass),s=document.getElementById("subscriptionCount"),c=r.closest("li");"usersitescontroller"===page_params.controller_name&&c.remove(),Tube8Utils.hasClassName(r,e.params.followChannelClass)?(r.classList.remove("follow-channel"),r.classList.remove(e.params.notSubscribed),r.className+=" following-channel",r.className+=" "+e.params.isSubscribed,"sitecontroller"===page_params.controller_name&&(s.innerText=e.number_format_for_thousands(parseInt(s.innerText.split(",").join(""))+1)),a&&(a.innerText=parseInt(a.innerText)+1),l.style.display="none",o.style.display="block","pc"===page_params.myPlatform&&(n.style.display="none")):(r.classList.remove("following-channel"),r.classList.remove(e.params.isSubscribed),r.className+=" follow-channel",r.className+=" "+e.params.notSubscribed,"sitecontroller"===page_params.controller_name&&(s.innerText=e.number_format_for_thousands(parseInt(s.innerText.split(",").join(""))-1)),a&&(a.innerText=parseInt(a.innerText)-1),l.style.display="block",o.style.display="none","pc"===page_params.myPlatform&&(n.style.display="none"))},e.getId=function(e){return e.split("_")[1]},e.number_format_for_thousands=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")};for(var a in t)Tube8Utils.bindEvent(t[a],"click",function(){var t=!1;if(Tube8Utils.hasClassName(this,e.params.followingChannelClass)&&(t=!0),e.params.isLoggedIn){var a=e.getId(this.getAttribute("id")),i=document.getElementById("followcount_"+a),r=this;e.follow_channel_ajax(a,r,i,t)}},!1);for(var i in t)Tube8Utils.bindEvent(t[i],"mouseenter",function(){if(Tube8Utils.hasClassName(this,e.params.followingChannelClass)&&"pc"===page_params.myPlatform){var t=this.querySelectorAll(".following-channel"),a=this.querySelectorAll(".unfollow-channel");t[0].style.display="none",a[0].style.display="block"}},!1);for(var r in t)Tube8Utils.bindEvent(t[r],"mouseleave",function(){if(Tube8Utils.hasClassName(this,e.params.followingChannelClass)&&"pc"===page_params.myPlatform){var t=this.querySelectorAll(".following-channel"),a=this.querySelectorAll(".unfollow-channel");t[0].style.display="block",a[0].style.display="none"}},!1)},FollowChannelTool=new Follow_channel_manager;FollowChannelTool.init(page_params.channel_follow_config);