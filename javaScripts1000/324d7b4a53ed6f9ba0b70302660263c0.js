(function($) {

  'use strict'; // jshint ;_;

  /* START BOOTSTRAP-TOOLTIP.js OVERRIDE
     ========================================== */
  var tooltipOverrides = {
    arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
    },

    hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')
        , placement = (typeof this.placement === 'string')?
          this.placement: ''

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip
            .removeClass(placement)
            .detach()
        })
      }

      if ($.support.transition && this.$tip.hasClass('fade')) {
        removeWithAnimation()
      } else {
        $tip
          .removeClass(placement)
          .detach()
      }
     
      // click away to close
      if(this.options.clickAway){
        $('body').off('click', this.clickAwayClose);
      }

      this.$element.trigger('hidden')

      return this
    },

    show: function() {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , positions
        , metrics
        , tp
        , margin
        , e = $.Event('show');

      if(this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if(e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if(this.options.animation) {
          $tip.addClass('fade');
        }

        if(this.options.style) {
          $tip.addClass(this.options.style);
        }

        margin = this.options.margin;

        $tip.detach().css({
          top: 0,
          left: 0,
          display: 'block',
          visibility: 'hidden'
        })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        // position of the trigger ele
        pos = this.getPosition();

        // actual means the tooltip
        actualWidth = $tip[0].offsetWidth;
        actualHeight = $tip[0].offsetHeight;

        placement = this.placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0], actualWidth, actualHeight, pos) :
          this.options.placement

        // auto position tooltip
        if (typeof placement === 'undefined' || typeof placement === 'string') {
          if (placement === 'auto') {
            metrics = this.getMetrics(actualWidth, actualHeight, pos);
            positions = this.getPositions(metrics);
            placement = this.getPlacement(positions);
            tp = this.setCoords(metrics, placement);
          } else {
            switch(placement) {
              case 'bottom':
                tp = {
                  top: pos.top + pos.height + margin,
                  left: pos.left + pos.width / 2 - actualWidth / 2
                };
                break;
              case 'top':
                tp = {
                  top: pos.top - actualHeight - margin,
                  left: pos.left + pos.width / 2 - actualWidth / 2
                };
                break;
              case 'left':
                tp = {
                  top: pos.top + pos.height / 2 - actualHeight / 2,
                  left: pos.left - actualWidth - margin
                };
                break;
              case 'right':
                tp = {
                  top: pos.top + pos.height / 2 - actualHeight / 2,
                  left: pos.left + pos.width + margin
                };
                break;
  
                // extend placements (top)
              case 'topLeft':
                tp = {
                  top: pos.top - actualHeight - margin,
                  left: pos.left
                };
                break;
              case 'topRight':
                tp = {
                  top: pos.top - actualHeight - margin,
                  left: pos.left + pos.width - actualWidth
                };
                break;
  
                // extend placements (right)
              case 'rightTop':
                tp = {
                  top: pos.top,
                  left: pos.left + pos.width + margin
                };
                break;
              case 'rightBottom':
                tp = {
                  top: pos.top + pos.height - actualHeight,
                  left: pos.left + pos.width + margin
                };
                break;
  
                // extend placements (bottom)
              case 'bottomLeft':
                tp = {
                  top: pos.top + pos.height + margin,
                  left: pos.left
                };
                break;
              case 'bottomRight':
                tp = {
                  top: pos.top + pos.height + margin,
                  left: pos.left + pos.width - actualWidth
                };
                break;
  
                // extend placements (left)
              case 'leftTop':
                tp = {
                  top: pos.top,
                  left: pos.left - actualWidth - margin
                };
                break;
              case 'leftBottom':
                tp = {
                  top: pos.top + pos.height - actualHeight,
                  left: pos.left - actualWidth - margin
                };
                break;
            }
          }
        } else if (typeof placement.top !== 'undefined' && typeof placement.left !== 'undefined') {
          tp = placement
          placement = ''
        }

        this.applyPlacement(tp, placement);

        if (this.options.centerArrowOnTrigger) {
          this.setArrowPosition(placement);
        }

        $tip.css({visibility: 'visible'});
        
        if(this.options.clickAway){
          $('body').on('click', {that: this}, this.clickAwayClose);
        }
        
        this.$element.trigger('shown');
      }
    },

    applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      if (!this.options.container) {
        $tip.offset(offset)
      } else {
        $tip.css({
          top: offset.top,
          left: offset.left
        })
      
				// i didnt like this so i commented it out
				// return
			}

      $tip
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      } 

      if (replace) $tip.offset(offset)
    },

    tip: function () {
      var o = this.options;

      if (!this.$tip) {
         this.$tip = $(typeof o.template == 'function' ? o.template() : o.template);
      }

      return this.$tip;
    },

    getMetrics: function (actualWidth, actualHeight, pos) {
      var metrics = {
        window: this.getWindowMetrics(),
        overlay: {
          width: actualWidth,
          height: actualHeight
        }
      };

      metrics.trigger = this.getTriggerMetrics(pos, metrics);

      return metrics;
    },

    getWindowMetrics: function () {
      var $window = $(window);

      return {
        height: $window.height(),
        width: $window.width(),
        top: $window.scrollTop(),
        left: $window.scrollLeft()
      };
    },

    getTriggerMetrics: function (trigger, metrics) {
      trigger.top -= metrics.window.top;
      trigger.left -= metrics.window.left;
      trigger.width = this.$element.width();
      trigger.height = this.$element.height();

      return trigger;
    },

    getPositions: function (metrics) {
      return {
        top: metrics.trigger.top - metrics.window.top - metrics.overlay.height,
        left: metrics.trigger.left - metrics.window.left - metrics.overlay.width,
        bottom: metrics.window.height - (metrics.trigger.top + metrics.overlay.height),
        right: metrics.window.width - (metrics.trigger.left + metrics.trigger.width + metrics.overlay.width)
      };
    },

    getPlacement: function (positions) {
      var placement;

      Object.keys(positions).forEach(function (position) {
        placement = (placement) ? placement : position;
        placement = (positions[position] > positions[placement]) ? position : placement;
      });

      return placement;
    },

    setCoords: function (metrics, placement) {
      var coords = {};
      var coordTop = 0;
      var coordLeft = 0;

      switch (placement) {
        case 'top':
          coordTop = metrics.trigger.top - metrics.overlay.height - this.options.margin;
          coordLeft = metrics.trigger.left + (metrics.trigger.width / 2) - (metrics.overlay.width / 2);
          break;
        case 'left':
          coordTop = metrics.trigger.top + (metrics.trigger.height / 2) - (metrics.overlay.height / 2);
          coordLeft = metrics.trigger.left - metrics.overlay.width - this.options.margin - 3;
          break;
        case 'bottom':
          coordTop = metrics.trigger.top + metrics.trigger.height + this.options.margin;
          coordLeft = metrics.trigger.left + (metrics.trigger.width / 2) - (metrics.overlay.width / 2);
          break;
        case 'right':
          coordTop = metrics.trigger.top + (metrics.trigger.height / 2) - (metrics.overlay.height / 2);
          coordLeft = metrics.trigger.left + metrics.trigger.width + this.options.margin;
      }

      coords.top = coordTop;
      coords.left = coordLeft;

      return this.adjustCoords(metrics, placement, coords);
    },

    adjustCoords: function (metrics, placement, coords) {
      if (placement === 'left' || placement === 'right') {
        if (coords.top < 0) {
          coords.top = this.options.margin;
        } else if (coords.top + metrics.overlay.height > metrics.window.height) {
          coords.top = metrics.window.height - metrics.overlay.height - this.options.margin;
        }
      } else { // if (placement === 'top' || placement === 'bottom')
        if (coords.left < 0) {
          coords.left = this.options.margin;
        } else if (coords.left + metrics.overlay.width > metrics.window.width) {
          coords.left = metrics.window.width - metrics.overlay.width - this.options.margin;
        }
      }

      coords.top = coords.top + metrics.window.top;
      coords.left = coords.left + metrics.window.left;

      return coords;
    },

    clickAwayClose: function(e){
      var popover = e.data.that;
      var isNotInsideThePopover = !popover.$tip[0].contains(e.target);
      var isNotTheTrigger = (e.target !== popover.$element[0]);
      var isNotInsideTheTrigger = !popover.$element[0].contains(e.target);
      var isNotDetachedFromDOM = (e.target.parentNode !== null);

      if (isNotInsideThePopover && isNotTheTrigger && isNotInsideTheTrigger && isNotDetachedFromDOM) {
        popover.hide();
      }
    },

    calculateArrowPosition: function (arrowLocation, arrowDimensions) {
      // Use the values of keys from the two arguments to access properties and
      // methods of other objects.

      // `plane` will be 'width' or 'height'
      // `end` will be 'top', 'right', 'bottom' or 'left'
      var halfTriggerDimension = this.$element[arrowLocation.plane]() / 2;
      var halfArrowDimension = arrowDimensions[arrowLocation.plane] / 2;

      // This is a hash of CSS position properties that need to be reset to
      // allow our new setting to take precedence. Again, the key maps to a
      // value on one of the arguments.
      var reset = {
        top: {bottom: 'auto'},
        right: {left: 'auto'},
        bottom: {top: 'auto'},
        left: {right: 'auto'}
      };
      var cssObject = reset[arrowLocation.end];

      cssObject[arrowLocation.end] = (halfTriggerDimension - halfArrowDimension) + 'px';

      return cssObject;
    },

    getArrowDimensions: function () {
      var values = [
        parseFloat(this.$arrow.css('border-top-width')), 
        parseFloat(this.$arrow.css('border-right-width')),
        parseFloat(this.$arrow.css('border-bottom-width')),
        parseFloat(this.$arrow.css('border-left-width'))
      ];

      // return the two plane's border values combined as width and height
      return {
        width: values[1] + values[3],
        height: values[0] + values[2]
      }
    },

    getArrowLocation: function (placement) {
      var positions = {};

      if (/^bottom|^top/.test(placement)) {
        positions.plane = 'width';

        if (/Left$/.test(placement)) {
          positions.end = 'left';
        } else if (/Right$/.test(placement)) {
          positions.end = 'right';
        }

      } else if (/^left|^right/.test(placement)) {
        positions.plane = 'height';

        if (/Top$/.test(placement)) {
          positions.end = 'top';
        } else if (/Bottom$/.test(placement)) {
          positions.end = 'bottom';
        }
      }

      return positions;
    },

    setArrowPosition: function (placement) {
      var arrowDimensions;
      var arrowLocation;
      var cssValues;

      // this method is only set to work with the extended placements at present
      if (!/auto|\btop\b|\bright\b|\bbottom\b|\bleft\b/.test(placement)) {
        arrowDimensions = this.getArrowDimensions();
        arrowLocation = this.getArrowLocation(placement);
        cssValues = this.calculateArrowPosition(arrowLocation, arrowDimensions);
        this.$arrow.css(cssValues);
      }
    }
  };
  
  var popoverOverrides = {
    arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find('.arrow')
    },

    setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      if($tip.find('.popover-title').children().length === 0){
        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      }
      if($tip.find('.popover-content > div').children().length === 0){
        $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)
      }

      $tip.removeClass('fade top bottom left right in')
    }
  };
  
  var modalOverrides = {
    backdrop: function (callback) {
      var that = this
        , animate = this.$element.hasClass('fade') ? 'fade' : ''

      if (this.isShown && this.options.backdrop) {
        var doAnimate = $.support.transition && animate

        this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
          .appendTo(document.body)
        
        if(that.options.clickAway){
          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )
        }
        
        if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

        this.$backdrop.addClass('in')

        if (!callback) return

        doAnimate ?
          this.$backdrop.one($.support.transition.end, callback) :
          callback()

      } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass('in')

        $.support.transition && this.$element.hasClass('fade')?
          this.$backdrop.one($.support.transition.end, callback) :
          callback()

      } else if (callback) {
        callback()
      }
    }
  };

  var newDefaults = {
    popover : {
      margin: 0,
      clickAway: false,
      centerArrowOnTrigger: false
    },
  modal: {
     backdrop: true,
     keyboard: true,
     topOverride: false,
     show: true,
     clickAway: true
    }
  };

  $.fn.tooltip.Constructor.prototype = $.extend($.fn.tooltip.Constructor.prototype, tooltipOverrides);
  $.fn.popover.Constructor.prototype = $.extend($.fn.popover.Constructor.prototype, tooltipOverrides, popoverOverrides);
  $.fn.modal.Constructor.prototype = $.extend($.fn.modal.Constructor.prototype, modalOverrides);

  /* ADD TO THE TOOLTIP/POPOVER DEFAULTS */
  $.fn.tooltip.defaults = $.extend($.fn.tooltip.defaults, newDefaults.popover);
  $.fn.popover.defaults = $.extend($.fn.popover.defaults, newDefaults.popover);
  $.fn.modal.defaults = $.extend($.fn.modal.defaults, newDefaults.modal);

  /* END BOOTSTRAP-TOOLTIP.js OVERRIDE
     ========================================== */
}(window.jQuery));
