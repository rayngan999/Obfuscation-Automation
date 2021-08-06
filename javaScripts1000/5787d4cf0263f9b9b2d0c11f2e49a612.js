!function(a){void 0===mejs.plugins&&(mejs.plugins={},mejs.plugins.silverlight=[],mejs.plugins.silverlight.push({types:[]})),mejs.HtmlMediaElementShim=mejs.HtmlMediaElementShim||{getTypeFromFile:mejs.Utils.getTypeFromFile},void 0===mejs.MediaFeatures&&(mejs.MediaFeatures=mejs.Features),void 0===mejs.Utility&&(mejs.Utility=mejs.Utils);var e=MediaElementPlayer.prototype.init;MediaElementPlayer.prototype.init=function(){this.options.classPrefix="mejs-",this.$media=this.$node=a(this.node),e.call(this)};var t=MediaElementPlayer.prototype._meReady;MediaElementPlayer.prototype._meReady=function(){this.container=a(this.container),this.controls=a(this.controls),this.layers=a(this.layers),t.apply(this,arguments)},MediaElementPlayer.prototype.getElement=function(e){return void 0!==a&&e instanceof a?e[0]:e},MediaElementPlayer.prototype.buildfeatures=function(e,t,i,s){for(var r=["playpause","current","progress","duration","tracks","volume","fullscreen"],l=0,n=this.options.features.length;l<n;l++){var o=this.options.features[l];if(this["build"+o])try{-1===r.indexOf(o)?this["build"+o](e,a(t),a(i),s):this["build"+o](e,t,i,s)}catch(e){console.error("error building "+o,e)}}}}((window,jQuery));;
!function(e,n){e.wp=e.wp||{},e.wp.mediaelement=new function(){var e={};return{initialize:function(){(e="undefined"!=typeof _wpmejsSettings?n.extend(!0,{},_wpmejsSettings):e).classPrefix="mejs-",e.success=e.success||function(e){var n,t;e.rendererName&&-1!==e.rendererName.indexOf("flash")&&(n=e.attributes.autoplay&&"false"!==e.attributes.autoplay,t=e.attributes.loop&&"false"!==e.attributes.loop,n&&e.addEventListener("canplay",function(){e.play()},!1),t&&e.addEventListener("ended",function(){e.play()},!1))},e.customError=function(e,n){if(-1!==e.rendererName.indexOf("flash")||-1!==e.rendererName.indexOf("flv"))return'<a href="'+n.src+'">'+mejsL10n.strings["mejs.download-file"]+"</a>"},n(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").filter(function(){return!n(this).parent().hasClass("mejs-mediaelement")}).mediaelementplayer(e)}}},n(e.wp.mediaelement.initialize)}(window,jQuery);;
var jetpackSearchModule = function () {
	var i,
		j,
		checkboxes,
		filter_list = document.querySelectorAll( '.jetpack-search-filters-widget__filter-list' );

	for ( i = 0; i < filter_list.length; i++ ) {
		filter_list[ i ].addEventListener( 'click', function ( event ) {
			var target = event.target;
			var precedingCheckbox;
			var nextAnchor;

			// If the target is an anchor, we want to toggle the checkbox.
			if ( target.nodeName && 'a' === target.nodeName.toLowerCase() ) {
				precedingCheckbox = target.previousElementSibling;
				if (
					precedingCheckbox &&
					precedingCheckbox.type &&
					'checkbox' === precedingCheckbox.type
				) {
					precedingCheckbox.checked = ! precedingCheckbox.checked;
				}
			}

			// If the target is a checkbox, we want to navigate.
			if ( target.type && 'checkbox' === target.type ) {
				nextAnchor = target.nextElementSibling;
				if ( nextAnchor && 'a' === nextAnchor.nodeName.toLowerCase() ) {
					window.location.href = nextAnchor.getAttribute( 'href' );
				}
			}
		} );

		// Enable checkboxes now that we're setup.
		checkboxes = filter_list[ i ].querySelectorAll( 'input[type="checkbox"]' );
		for ( j = 0; j < checkboxes.length; j++ ) {
			checkboxes[ j ].disabled = false;
			checkboxes[ j ].style.cursor = 'inherit';
		}
	}
};

if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
	jetpackSearchModule();
} else {
	document.addEventListener( 'DOMContentLoaded', jetpackSearchModule );
}
;
/*! This file is auto-generated */
!function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{},!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}}},e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}}}}(window,document);;
/* Do not modify this file directly. It is compiled from other files. */
!function(){function e(){this.galleries=[],this.findAndSetupNewGalleries()}function t(e){this.gallery=e,this.addCaptionEvents(),this.resize(),this.gallery.classList.remove("tiled-gallery-unresized")}e.prototype.findAndSetupNewGalleries=function(){var e=this,r=document.querySelectorAll(".tiled-gallery.tiled-gallery-unresized");Array.prototype.forEach.call(r,function(r){e.galleries.push(new t(r))})},e.prototype.resizeAll=function(){Array.prototype.forEach.call(this.galleries,function(e){e.resize()})},t.prototype.resizeableElementsSelector=".gallery-row, .gallery-group, .tiled-gallery-item img",t.prototype.addCaptionEvents=function(){var e=this.gallery.querySelectorAll(".tiled-gallery-caption");Array.prototype.forEach.call(e,function(e){e.style.display="none"});var t=function(e){var t=e.target.closest(".tiled-gallery-item"),r="mouseover"===e.type?"block":"none";if(t){var i=t.querySelector(".tiled-gallery-caption");i&&(i.style.display=r)}};this.gallery.addEventListener("mouseover",t),this.gallery.addEventListener("mouseout",t)},t.prototype.getExtraDimension=function(e,t,r){if("horizontal"===r){var i="border"===t?"borderLeftWidth":t+"Left",n="border"===t?"borderRightWidth":t+"Right";return(parseInt(e.style[i],10)||0)+(parseInt(e.style[n],10)||0)}if("vertical"===r){var o="border"===t?"borderTopWidth":t+"Top",a="border"===t?"borderBottomWidth":t+"Bottom";return(parseInt(e.style[o],10)||0)+(parseInt(e.style[a],10)||0)}return 0},t.prototype.resize=function(){var e=parseInt(this.gallery.dataset.originalWidth,10),t=parseFloat(getComputedStyle(this.gallery.parentNode,null).width.replace("px","")),r=Math.min(1,t/e),i=this,n=this.gallery.querySelectorAll(this.resizeableElementsSelector);Array.prototype.forEach.call(n,function(e){var t=i.getExtraDimension(e,"margin","horizontal"),n=i.getExtraDimension(e,"margin","vertical"),o=i.getExtraDimension(e,"padding","horizontal"),a=i.getExtraDimension(e,"padding","vertical"),l=i.getExtraDimension(e,"border","horizontal"),s=i.getExtraDimension(e,"border","vertical"),d=parseInt(e.dataset.originalWidth,10)+o+l+t,c=parseInt(e.dataset.originalHeight,10)+a+s+n;e.style.width=Math.floor(r*d)-t+"px",e.style.height=Math.floor(r*c)-n+"px"})};var r,i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;r=function(){var t=new e;document.body.addEventListener("is.post-load",function(){t.findAndSetupNewGalleries()}),"function"==typeof jQuery&&jQuery(document).on("page-rendered.wpcom-newdash",function(){t.findAndSetupNewGalleries()}),window.chrome&&i?function(e){var t=!1,r=null;function n(){e.resizeAll(),t&&i(n)}window.addEventListener("resize",function(){clearTimeout(r),t||i(n),t=!0,r=setTimeout(function(){t=!1},15)})}(t):function(e){window.addEventListener("resize",function(){e.resizeAll()})}(t),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(e){wp.isJetpackWidgetPlaced(e,"gallery")&&t.findAndSetupNewGalleries()})},"loading"!==document.readyState?r():document.addEventListener("DOMContentLoaded",r)}();;
