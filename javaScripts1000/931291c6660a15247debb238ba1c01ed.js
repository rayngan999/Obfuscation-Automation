/*
 * 	Ex Flex Fixed 0.3.0 - jQuery plugin
 *	written by Cyokodog
 *
 *	Copyright (c) 2012 Cyokodog (http://d.hatena.ne.jp/cyokodog/)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 */
(function($){
	$.ex = $.ex || {};

	var API = function(api){
		var api = $(api),api0 = api[0];
		for(var name in api0)
			(function(name){
				if($.isFunction( api0[name] ))
					api[ name ] = (/^get[^a-z]/.test(name) || /^is[^a-z]/.test(name)) ?
						function(){
							return api0[name].apply(api0,arguments);
						} :
						function(){
							var arg = arguments;
							api.each(function(idx){
								var apix = api[idx];
								apix[name].apply(apix,arg);
							})
							return api;
						}
			})(name);
		return api;
	}

	$.ex.flexFixed = function(idx , targets , option){
		var o = this,
		c = o.config = $.extend({} , $.ex.flexFixed.defaults , option);
		c.targets = targets;
		c.target = c.targets.eq(idx);
		c.index = idx;
		c._win = $(window);

		c._orgMarginTop = parseInt(c.target.css('margin-top'))||0;
		c._orgMarginBottom = parseInt(c.target.css('margin-bottom'))||0;
		c._orgMarginLeft = parseInt(c.target.css('margin-left'))||0;
		c._orgMarginRight = parseInt(c.target.css('margin-right'))||0;

		c.container = $(c.container);
		c.fixedHeaderHeight = c.fixedHeader ? $(c.fixedHeader).outerHeight() : 0 ;
		if(!(c.zIndex == null)) c.target.css('z-index',c.zIndex);

		if(c.watchPosition == 'auto' && c.windowResizeAdjust == 'auto'){
			c.watchPosition = false;
		}
		else
		if(c.watchPosition == true && c.windowResizeAdjust == 'auto'){
			c.windowResizeAdjust = false;
		}

		c.target.css({
			position : 'fixed'
		});
		o._makeCloneBox(c.target);
		o.adjustPosition();

		c._win.scroll(function(){
			o.adjustScrollPosition();
		});

		if(c.windowResizeAdjust){
			c._win.resize(function(){
				o.adjustPosition();
			});
		}

		if(c.windowResizeAdjust){
			c._win.resize(function(){
				if(c._resizeTimer) clearTimeout(c._resizeTimer);
				c._resizeTimer = setTimeout(function(){
					o.adjustPosition();
				},c.windowResizeDelay);
			});
		}

		if(c.watchPosition){
			var watch = function(){
				setTimeout(function(){
					o.adjustPosition();
					c.watchCallback.call(o,o);
					watch();
				},c.watchDelay);
			}
			watch();
		}

	}
	$.extend($.ex.flexFixed.prototype, {
		_getMarginHeight : function(target){
			var o = this, c = o.config;
			return target.outerHeight() +
				+ (parseInt(target.css('margin-top'))||0)
				+ (parseInt(target.css('margin-bottom'))||0)
			;
		},
		_adjustCloneSize : function(target){
			var o = this, c = o.config;
			c.cloneBox.css({
				height : target.outerHeight(),
				'margin-top' : parseInt(target.css('margin-top'))||0,
				'margin-bottom' : parseInt(target.css('margin-bottom'))||0,
				'margin-left' : parseInt(target.css('margin-left'))||0,
				'margin-right' : parseInt(target.css('margin-right'))||0,
				'padding-left' : (parseInt(target.css('border-left-width'))||0) + (parseInt(target.css('padding-left'))||0),
				'padding-right' : (parseInt(target.css('border-right-width'))||0) + (parseInt(target.css('padding-right'))||0)
			});
		},
		_makeCloneBox : function(target){
			var o = this, c = o.config;
			c.cloneBox = $('<div/>');
			target.before(c.cloneBox);
			o._adjustCloneSize(target);
 		},
		adjustPosition : function(){
			var o = this, c = o.config;
			c.containerOffset = c.container.offset();
			if(c.width != 'auto'){
				if(c.cloneBox.width() != c.width){
					c.cloneBox.width(c.width);
				}
			}
			c.target.css({
				width : c.cloneBox.width()
			});
			o._adjustCloneSize(c.target);
			c._fixedOffset = c.cloneBox.offset();
			o.adjustScrollPosition();
		},
		adjustScrollPosition : function(){
			var o = this, c = o.config;
			var targetTotalHeight = c.target.outerHeight() + c._orgMarginTop + c._orgMarginBottom;
			var winMinuseTargetGapHeight = c._win.height() - targetTotalHeight;
			var top = c._fixedOffset.top - c._orgMarginTop - c._win.scrollTop()
			c._nowFixed = false;


			if(top - c.fixedHeaderHeight < 0){
				if(!c._fromTop)	top = 0;
				if(top - c.fixedHeaderHeight < winMinuseTargetGapHeight){
					c._nowFixed = true;
					if(winMinuseTargetGapHeight > 0){
						top = c.fixedHeaderHeight;
					}
					else {
						top = winMinuseTargetGapHeight;
					}
				}
			}
			else {
				c._fromTop = true;
			}
			var containerBottom = c.containerOffset.top + c.container.outerHeight() - c._win.scrollTop();
			var targetBottom = top + c.target.outerHeight() + c._orgMarginTop + c._orgMarginBottom;
			var overBottom = targetBottom - containerBottom;
			if(overBottom > 0){
				c._nowFixed = false;
				c._fromTop = false;
				top = top - overBottom;
			}
			c.target.css({
				top : top,
				left : c._fixedOffset.left - c._win.scrollLeft() - c._orgMarginLeft
			});

		}
	});
	$.ex.flexFixed.defaults = {
		api : false,
		watchPosition : 'auto',
		watchDelay : 500,
		watchCallback : function(api){},
		container : null,
		fixedHeader : null,
		zIndex : null,
		width : 'auto',
		windowResizeAdjust : 'auto',
		windowResizeDelay : 100
	}
	$.fn.exFlexFixed = function(option){
		var targets = this,api = [];
		targets.each(function(idx) {
			var target = targets.eq(idx);
			var obj = target.data('ex-flex-fixed') || new $.ex.flexFixed( idx , targets , option);
			api.push(obj);
			target.data('ex-flex-fixed',obj);
		});
		return option && option.api ? API(api) : targets;
	}
	$.ex.flexFixed.version = '0.3.0';
})(jQuery);
