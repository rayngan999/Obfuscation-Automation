function IMG_rotationEngineStartup(tp,wp){IMG_rotationEngineStartup._THUMBS={};if(window['IMG_rotationEngineWaitPeriod']){IMG_rotationEngineStartup._ROTATION_PERIOD_MS=window['IMG_rotationEngineWaitPeriod'];}else{IMG_rotationEngineStartup._ROTATION_PERIOD_MS=wp;}IMG_rotationEngineStartup._ROTATION_ID=null;IMG_rotationEngineStartup._ROTATION_UID=null;IMG_rotationEngineStartup._DUMMY=tp;}function IMG_rotationStop(image){if(IMG_rotationEngineStartup._ROTATION_ID){var thumbData=IMG_rotationEngineStartup._THUMBS[IMG_rotationEngineStartup._ROTATION_ID];if(thumbData&&thumbData['thumb']&&thumbData['thumbInitial']){thumbData['thumb'].src=thumbData['thumbInitial'];}}IMG_rotationEngineStartup._ROTATION_ID=null;IMG_rotationEngineStartup._ROTATION_UID=null;IMG_rotationEngineStartup._DUMMY=image;}function IMG_rotationStart(image,urlPrefix,thumbCount,thumbExt){IMG_rotationStop(null);if(image){var currentThumbUrl=image.src;var thumbId=image.id;if(!thumbId){thumbId='IMG_rotationEngineStartup_'+new Date().getTime();image.id=thumbId}var initialIdx=1;if(image.src.indexOf(urlPrefix+initialIdx+(thumbExt?thumbExt:'.jpg'))>=0){initialIdx=2;}IMG_rotationEngineStartup._THUMBS[thumbId]={thumb:image,thumbInitial:currentThumbUrl,prefix:urlPrefix,count:thumbCount,ext:thumbExt,idx:initialIdx-1};if(IMG_rotationEngineStartup._THUMBS[thumbId]['thumb']){IMG_rotationEngineStartup._ROTATION_UID=new Date().getTime();IMG_rotationEngineStartup._ROTATION_ID=thumbId;IMG_rotationInvoke(thumbId,IMG_rotationEngineStartup._ROTATION_UID);}}}function IMG_rotationInvoke(thumbId,uid){var thumbData=IMG_rotationEngineStartup._THUMBS[thumbId];setTimeout(function(){if(thumbData){var thumb=thumbData['thumb'];var prefix=thumbData['prefix'];var count=thumbData['count'];var ext=thumbData['ext'];var idx=thumbData['idx'];idx=(idx==count?1:idx+1);thumbData['idx']=idx;var url=prefix+idx+(ext?ext:'.jpg');var img=new Image();img.onload=function(){if((thumbId==IMG_rotationEngineStartup._ROTATION_ID)&&(uid==IMG_rotationEngineStartup._ROTATION_UID)){if(img.width==0){IMG_rotationInvoke(thumbId,uid);}thumb.src=url;setTimeout('IMG_rotationInvoke(\''+thumbId+'\', '+uid+')',IMG_rotationEngineStartup._ROTATION_PERIOD_MS);}};img.onerror=function(){if((thumbId==IMG_rotationEngineStartup._ROTATION_ID)&&(uid==IMG_rotationEngineStartup._ROTATION_UID)){IMG_rotationInvoke(thumbId,uid);}};img.src=url;IMG_rotationEngineStartup._THUMBS[thumbId]=thumbData;}},500);}
!function(a) {
	function d() {
		b && (a(b.parentNode).removeClass("preview-loading"), a(b).remove()), c && clearTimeout(c), b = null, c = null
	}
	var b = null,
		c = null;
	a(document).on('mousedown touchstart swipe', function(c) {
		if (b) {
			var e = a(b).offset(),
				f = c.pageX,
				g = c.pageY;
			(f < e.left || f > e.left + a(b).width() || g < e.top || g > e.top + a(b).height()) && d()
		}
	}), a(window).on("blur", function() {
		d()
	}), a.fn.videopreview = function() {
		return this.each(function() {
			// var iOS = parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;
			// if (!iOS || iOS >= 10) {
			var e = this,
				f = a(this).data("preview");
			f && a(this).on('mousedown touchstart swipe', function() {
				if (a(this).data('autoplaynotsupported')===true) {
					var dt = a(this).data();
					if (dt.thumbspath != undefined && dt.thumbscount != undefined) {
						IMG_rotationStart(this, dt.thumbspath, dt.thumbscount);
					}
				}
				else {
					d(), c = setTimeout(function() {
						// a(e.parentNode).addClass("preview-loading")
					}, 100), b = document.createElement("VIDEO"), a(b).css({
						position: "absolute",
						left: "0",
						top: "0",
						width: e.offsetWidth + "px",
						height: e.offsetHeight + "px",
						background: "transparent"
					}).attr({
						"preload": "auto",
						"controls": "false",
						"autoplay": "",
						"playsinline": "",
						"muted": "true",
						"loop": ""
					}), a(b).on("error abort", function() {
						d();
						var dt = a(this).data();
						if (dt.thumbspath != undefined && dt.thumbscount != undefined) {
							IMG_rotationStart(this, dt.thumbspath, dt.thumbscount);
						}
					}), a(b).on("loadeddata", function() {
						c && clearTimeout(c), a(b.parentNode).removeClass("preview-loading"), b.play();
					}), a(b).on("progress", function() {
						b.removeAttribute("controls");
					}),
					b.controls = !1, b.autoplay = !0, b.playsinline = !0, b.muted = !0, b.loop = !0, b.src = f, e.parentNode.appendChild(b);
				}
			})
		}), this
	}
}(jQuery);
!(function($) {
	$(document).ready(function() {
		var bname = false;
		if (bowser.name != undefined) {
			var bowser_name = bowser.name.toLowerCase();
			if (bowser_name == 'opera') {
				bname = true;
			}
			if (bowser_name == 'safari' && bowser.version == undefined) {
				bname = true;
			}
		}
		if (!bname && !navigator.userAgent.match(/UCBrowser/) && !navigator.userAgent.match(/SamsungBrowser/) && Modernizr.video && Modernizr.videoloop && Modernizr.videocrossorigin && Modernizr.videopreload) {
			$('img[data-preview]').videopreview();
		}
		else {
			$('img[data-preview]').attr('data-autoplaynotsupported', true).videopreview();
		}
	});
})(jQuery);