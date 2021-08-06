/**
 * Study Unveil
 * based heavily on
 *
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 LuÃ­s Almeida
 * https://github.com/luis-almeida
 */
(function() {
	"use strict";
	
	require(["jquery"], function($) {
		$.fn.unveil = function(threshold, callback) {
			
			var $w = $(window),
				th = threshold || 0,
				retina = window.devicePixelRatio > 1,
				attrib = retina ? "data-lazy-src-retina" : "data-lazy-src",
				images = this,
				loaded;
			
			this.one("unveil", function() {
				var source = this.getAttribute(attrib);
				source = source || this.getAttribute("data-lazy-src");
				if (source) {
					if (this.tagName.toLowerCase() !== "img") {
						this.style.backgroundImage = "url(" + source + ")";
					}
					else {
						this.setAttribute("src", source);
					}
					if (typeof callback === "function") callback.call(this);
				}
			});
			
			function unveil() {
				var inview = images.filter(function() {
					var $e = $(this);
					if ($e.is(":hidden")) return;
					
					var wt = $w.scrollTop(),
						wb = wt + $w.height(),
						et = $e.offset().top,
						eb = et + $e.height();
					
					return eb >= wt - th && et <= wb + th;
				});
				
				loaded = inview.trigger("unveil");
				images = images.not(loaded);
			}
			
			$w.on("scroll.unveil resize.unveil lookup.unveil click slide.bs.carousel", unveil);
			
			unveil();
			
			return this;
			
		};
		
		$(document).ready(function() {
			$("[data-lazy-src]").unveil(100);
		});
	});
})();