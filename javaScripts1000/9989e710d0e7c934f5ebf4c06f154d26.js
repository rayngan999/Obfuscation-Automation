//scripts
$(document).ready(function() {
	initMainMenu();
	initFixedHeader();
	initPlyaer();
	initSearch();
	initScrollLock();
	initCountryDetect();
});

function initMainMenu() {
	$('.btn-nav-menu').on('click', function(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		$('body').addClass('show-navigation');
		if (navigator.userAgent.match(/UCBrowser/)) {
			if ($('.video-holder .video__player video').attr('src') != undefined) {
				$('.video__player video')[0].play();
				setTimeout(function() {
					$('.video-holder.video__playing .video__player video')[0].pause();
				}, 500);
			}
		} else {
			if ($('.video-holder.video__playing').length) {
				$('.video__player video')[0].pause();
			}
		}
	});
}

function initFixedHeader() {
	// hide header on scroll down, show on scroll up
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var headerHeight = $('.fixed-header').outerHeight();
	$(window).scroll(function(event) {
		didScroll = true;
	});
	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta) {
			return;
		}
		if (st > lastScrollTop && st > headerHeight) {
			$('.fixed-header').addClass('nav-up');
		} else {
			if (st + $(window).height() < $(document).height()) {
				$('.fixed-header').removeClass('nav-up');
			}
		}
		lastScrollTop = st;
	}
}

function initPlyaer() {
	var $holder_buttons = $('.buttons');
	var $holder_video = $('.video-holder');
	var $video = $holder_video.find('video');
	var $videoPlay = $('.js-play');
	$videoPlay.on('click', function(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
		var $this = $(this);
		var src = $this.data('src');
		if ($video.attr('src') != src) {
			$video.attr('src', src);
		}
		$video[0].play();
	});
	$video.on('pause', function() {
		$holder_video.removeClass('video__playing');
	});
	$video.on('play', function() {
		$holder_video.addClass('video__playing');
	});
	// //variables
	// var $holder_video = $('.video-holder');
	// var $buttons = $holder_video.find('.buttons');
	var $cover_image = $holder_video.find('.img-cover');
	// var $video = $holder_video.find('video');
	// //hide cover and play video with selected quality
	// $('.js-play').on('click', function() {
	//   $cover_image.hide();
	//   var $this = $(this);
	//   var src = $this.attr('data-src');
	//   if ($video.attr('src') != src) {
	//     $video.attr('src', src);
	//   }
	//   $video.show();
	//   $video[0].play();
	// });
	// /*video events:
	// pause - show buttons and video controls
	// play - hide buttons and video controls*/
	// $video.on('pause', function() {
	//   $buttons.show();
	//   $video.removeAttr('controls');
	// });
	// $video.on('play', function() {
	//   $buttons.hide();
	//   $video.attr('controls', 'controls');
	// });
	//scroll to screenshots
	$('.btn-screenshots').on('click', function() {
		var $screenshots = $('.screenshots');
		if ($screenshots.is(':hidden')) {
			$screenshots.show();
			$('body, html').animate({
				scrollTop: $screenshots.offset().top - 50
			}, 600);
		} else {
			$screenshots.hide();
		}
		return false;
	});
	//change current time of video via screenshots
	$('.screenshots a').on('click', function() {
		$('body, html').animate({
			scrollTop: $holder_video.offset().top - 50
		}, 100);
		var $this = $(this);
		if ($cover_image.is(':hidden')) {
			var time = $this.attr('data-time');
			var percentage = time * $video[0].duration / 100;
			$video[0].currentTime = percentage;
			$video[0].play();
		} else {
			$cover_image.trigger('click');
			$video.one('loadedmetadata', function() {
				var time = $this.attr('data-time');
				var percentage = time * $video[0].duration / 100;
				$video[0].currentTime = percentage;
			});
		}
		return false;
	});
}

function initSearch() {
	//search handler
	$('.list-types a').on('click', function() {
		var $this = $(this);
		var value = $this.attr('data-val');
		$('.list-types a').removeClass('active');
		$this.addClass('active');
		$this.closest('.list-types').removeClass('shown');
		var $icon = $this.find('.icon-middle').html();
		$('.search-type .icon-type').html($icon);
		$('#search-type').val(value);
		$('.search-type2 .icon-type').html($icon);
		$('#search-type2').val(value);
	});
}

function initScrollLock() {
	/*!
	 * Scroll Lock v2.2.0
	 * https://github.com/MohammadYounes/jquery-scrollLock
	 *
	 * Copyright (c) 2016 Mohammad Younes
	 * Licensed under the MIT license.
	 */
	(function(n) {
		typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
	})(function(n) {
		"use strict";
		var t = function(i, r) {
				this.$element = i;
				this.options = n.extend({}, t.DEFAULTS, this.$element.data(), r);
				this.enabled = !0;
				this.startClientY = 0;
				this.$element.on(t.CORE.wheelEventName + t.NAMESPACE, this.options.selector, n.proxy(t.CORE.handler, this));
				if (this.options.touch) {
					this.$element.on("touchstart" + t.NAMESPACE, this.options.selector, n.proxy(t.CORE.touchHandler, this));
					this.$element.on("touchmove" + t.NAMESPACE, this.options.selector, n.proxy(t.CORE.handler, this))
				}
			},
			i;
		t.NAME = "ScrollLock";
		t.VERSION = "2.1.0";
		t.NAMESPACE = ".scrollLock";
		t.ANIMATION_NAMESPACE = t.NAMESPACE + ".effect";
		t.DEFAULTS = {
			strict: !1,
			strictFn: function(n) {
				return n.prop("scrollHeight") > n.prop("clientHeight")
			},
			selector: !1,
			animation: !1,
			touch: "ontouchstart" in window
		};
		t.CORE = {
			wheelEventName: "onmousewheel" in window ? "ActiveXObject" in window ? "wheel" : "mousewheel" : "DOMMouseScroll",
			animationEventName: ["webkitAnimationEnd", "mozAnimationEnd", "MSAnimationEnd", "oanimationend", "animationend"].join(t.ANIMATION_NAMESPACE + " ") + t.ANIMATION_NAMESPACE,
			handler: function(i) {
				var r, s, h, o;
				if (this.enabled && !i.ctrlKey && (r = n(i.currentTarget), this.options.strict !== !0 || this.options.strictFn(r))) {
					i.stopPropagation();
					var f = r.scrollTop(),
						c = r.prop("scrollHeight"),
						l = r.prop("clientHeight"),
						e = i.originalEvent.wheelDelta || -1 * i.originalEvent.detail || -1 * i.originalEvent.deltaY,
						u = 0;
					i.type === "wheel" ? (s = r.height() / n(window).height(), u = i.originalEvent.deltaY * s) : this.options.touch && i.type === "touchmove" && (e = i.originalEvent.changedTouches[0].clientY - this.startClientY);
					((h = e > 0 && f + u <= 0) || e < 0 && f + u >= c - l) && (i.preventDefault(), u && r.scrollTop(f + u), o = h ? "top" : "bottom", this.options.animation && setTimeout(t.CORE.animationHandler.bind(this, r, o), 0), r.trigger(n.Event(o + t.NAMESPACE)))
				}
			},
			touchHandler: function(n) {
				this.startClientY = n.originalEvent.touches[0].clientY
			},
			animationHandler: function(n, i) {
				var r = this.options.animation[i],
					u = this.options.animation.top + " " + this.options.animation.bottom;
				n.off(t.ANIMATION_NAMESPACE).removeClass(u).addClass(r).one(t.CORE.animationEventName, function() {
					n.removeClass(r)
				})
			}
		};
		t.prototype.toggleStrict = function() {
			this.options.strict = !this.options.strict
		};
		t.prototype.enable = function() {
			this.enabled = !0
		};
		t.prototype.disable = function() {
			this.enabled = !1
		};
		t.prototype.destroy = function() {
			this.disable();
			this.$element.off(t.NAMESPACE);
			this.$element = null;
			this.options = null
		};
		i = n.fn.scrollLock;
		n.fn.scrollLock = function(i) {
			return this.each(function() {
				var u = n(this),
					f = typeof i == "object" && i,
					r = u.data(t.NAME);
				(r || "destroy" !== i) && (r || u.data(t.NAME, r = new t(u, f)), typeof i == "string" && r[i]())
			})
		};
		n.fn.scrollLock.defaults = t.DEFAULTS;
		n.fn.scrollLock.noConflict = function() {
			return n.fn.scrollLock = i, this
		}
	});
	//disable scrolling the page behind the menu
	$('.menu-links').scrollLock();
}

function initCountryDetect() {
	if ($.cookie) {
		var countryCode = $.cookie('country_code');
		if (!countryCode) {
			$.getJSON("https://freegeoip.net/json/", function(data) {
				var countryCode = data.country_code;
				$.cookie('country_code', countryCode, { expires: 7, path: '/' });
				var countryCode = $.cookie('country_code');
			});
		}
	}
}