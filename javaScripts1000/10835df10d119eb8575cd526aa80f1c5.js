/**
 * @file
 *
 */

(function ($, Drupal) {

   /**
  * verify viewport
  * @param      {Object}  $el parent element to find the img tag
  */
  function isInViewport ($el) {
    var bounding = $el.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  /**
  * set block height from img original crossbrowser height size
  * @param      {Object}  $el parent element to find the img tag
  */
  function setImgheight ($el) {
    $(window).on('load resize', function () {
      var image = new Image();
      // The property 'currentSrc' or 'src' is used to support crossbrowsing,
      // to find the src of the image
      image.src = $el.find('img').prop('currentSrc') || $el.find('img').prop('src');
      image.height = $el.find('img').attr('height');

      window.addEventListener('scroll', function (event) {
        if (isInViewport(image)) {
          $(image).on('load', function () {
            if (image.naturalHeight <= 15) {
              $el.parent().css('height', image.height);
            }
            else {
              $el.parent().css('height', image.naturalHeight);
            }
          });
        }
      }, false);

      $(image).on('load', function () {
        if (image.naturalHeight <= 15) {
          $el.parent().css('height', image.height);
        }
        else {
          $el.parent().css('height', image.naturalHeight);
        }
      });
    });
  };

  /**
   * Behavior to set height for img parent block.
   */
  Drupal.behaviors.setHeightWhyNotBlocks = {
    attach: function (context, settings) {
      var $blockImages = $('.whynot', context)
        .find('[data-parent-img]')
        .once('set-height-whynot-blocks');
      function calcBlockImagesHeight() {
        $blockImages.each(function () {
          var $el = $(this);
          setImgheight($el);
        });
      }
      $(window).on('load resize', calcBlockImagesHeight);
      calcBlockImagesHeight();
    }
  };
})(jQuery, Drupal);;
var elasticSlider = window.elasticSlider || {};

(function (window, $) {
  'use strict';

  var sliderElem;
  var slideItems;
  var curSlide;
  var prevSlide;
  var initX;
  var transX = 0;
  var rotZ = 0;
  var transY = 0;

  elasticSlider = (function () {
    function elasticSlider(options, element) {
      $.extend(elasticSlider.prototype.options, options);
      sliderElem = element;
      elasticSlider.prototype._init();
    }
    return elasticSlider;
  }());

  elasticSlider.prototype.options = {
    // distDragMax: if the user drags the image in a area that exceeds [distDragMax]px
    // for either x then the image moves away from the stack
    distDragMax: 100,
    // transDuration: Transition duration
    transDuration: 0.4,
    // gapZ: Gap among slides in z axis
    gapZ: 50,
    // gapY: Gap among slides in z axis
    gapY: 15,
    // working breakpoints
    breakpoints: ['xs', 'sm', 'md', 'lg'],
    // slider container
    sliderElement: '.elastic-slider'
  };

  elasticSlider.prototype._init = function () {
    // verify breakpoints
    var isValidResolution = elasticSlider.prototype._verifyBreakpoints();
    // Unbind events and return if no valid  breakpoint
    if (!isValidResolution) {
      elasticSlider.prototype._unbindEvent();
      return;
    }
    slideItems = [].slice.call(sliderElem.children);
    // Sort items to set first position to left element
    for (var i = 0; i < slideItems.length - 1; i++) {
      sliderElem.insertBefore(slideItems[slideItems.length - 1], slideItems[i]);
      slideItems = [].slice.call(sliderElem.children);
    }
    // items
    slideItems = [].slice.call(sliderElem.children);
    // total items
    this.itemsCount = slideItems.length;
    // current item's index (the one on the top of the stack)
    this.current = this.itemsCount - 1;
    // set initial styles
    elasticSlider.prototype._setStackStyle();
    // return if no items or only one
    if (this.itemsCount <= 1) {
      return;
    }
    // init drag events
    elasticSlider.prototype._bindEvent(this.current);
  };

  elasticSlider.prototype._verifyBreakpoints = function () {
    var currentBreakpoint = window.ResponsiveImages.getBreakpoint();

    for (var i = 0; i < this.options.breakpoints.length; i++) {
      var breakpoint = this.options.breakpoints[i];

      if (breakpoint === currentBreakpoint) {
        return true;
      }
    }
    return false;
  };

  elasticSlider.prototype._setStackStyle = function () {
    var y = 0;
    var z = 0;

    for (var i = this.itemsCount - 1; i >= 0; i--) {
      slideItems[i].style.transform = 'translateZ(' + z + 'px) translateY(' + y + 'px)';
      z -= this.options.gapZ;
      y += this.options.gapY;
    }
  };

  elasticSlider.prototype._bindEvent = function (index) {
    curSlide = slideItems[index];
    curSlide.addEventListener('mousedown', elasticSlider.prototype._slideMouseDown, false);
    curSlide.addEventListener('touchstart', elasticSlider.prototype._slideMouseDown, false);
  };

  elasticSlider.prototype._unbindEvent = function () {
    for (var i = 0; i < slideItems.length; i++) {
      slideItems[i].removeEventListener('mousedown', elasticSlider.prototype._slideMouseDown, false);
      slideItems[i].removeEventListener('touchstart', elasticSlider.prototype._slideMouseDown, false);
    }

    document.removeEventListener('mousemove', elasticSlider.prototype._slideMouseMove, false);
    document.removeEventListener('touchmove', elasticSlider.prototype._slideMouseMove, false);
    document.removeEventListener('mouseup', elasticSlider.prototype._slideMouseUp, false);
    document.removeEventListener('touchend', elasticSlider.prototype._slideMouseUp, false);
  };

  elasticSlider.prototype._slideMouseDown = function (e) {
    if (e.touches) {
      initX = e.touches[0].clientX;
    }
    else {
      initX = e.pageX;
    }

    document.addEventListener('mousemove', elasticSlider.prototype._slideMouseMove, false);
    document.addEventListener('touchmove', elasticSlider.prototype._slideMouseMove, false);
    document.addEventListener('mouseup', elasticSlider.prototype._slideMouseUp, false);
    document.addEventListener('touchend', elasticSlider.prototype._slideMouseUp, false);
  };

  elasticSlider.prototype._slideMouseMove = function (e) {
    var mouseX;
    if (e.touches) {
      mouseX = e.touches[0].clientX;
    }
    else {
      mouseX = e.pageX;
    }

    transX += mouseX - initX;
    var rotZ = transX / 20;
    var transY = -Math.abs(transX / 15);
    initX = mouseX;

    curSlide.style.transition = 'none';
    curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
    curSlide.style.transform = 'translateX(' + transX + 'px)' + ' rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
    var j = 1;
    // remains elements
    for (var i = slideItems.length - 2; i >= 0; i--) {
      slideItems[i].style.webkitTransform = 'translateX(' + transX / (2 * j) + 'px)' + ' rotateZ(' + rotZ / (2 * j) + 'deg)' + ' translateY(' + (elasticSlider.prototype.options.gapY * j) + 'px)' + ' translateZ(' + (-elasticSlider.prototype.options.gapZ * j) + 'px)';
      slideItems[i].style.transform = 'translateX(' + transX / (2 * j) + 'px)' + ' rotateZ(' + rotZ / (2 * j) + 'deg)' + ' translateY(' + (elasticSlider.prototype.options.gapY * j) + 'px)' + ' translateZ(' + (-elasticSlider.prototype.options.gapZ * j) + 'px)';
      slideItems[i].style.transition = 'none';
      j++;
    }

    e.preventDefault();

    if (Math.abs(transX) >= elasticSlider.prototype.options.distDragMax) {
      document.removeEventListener('mousemove', elasticSlider.prototype._slideMouseMove, false);
      document.removeEventListener('touchmove', elasticSlider.prototype._slideMouseMove, false);
      curSlide.style.transition = 'ease 0.2s';
      curSlide.style.opacity = 0;
      prevSlide = curSlide;
      elasticSlider.prototype._bindEvent(slideItems.length - 2);
      elasticSlider.prototype._slideMouseUp();
      setTimeout(function () {
        sliderElem.insertBefore(prevSlide, sliderElem.firstChild);
        slideItems = [].slice.call(sliderElem.children);
        prevSlide.style.transition = 'none';
        prevSlide.style.opacity = '1';
        elasticSlider.prototype._slideMouseUp();
      }, 201);
      return;
    }
  };
  elasticSlider.prototype._slideMouseUp = function () {
    transX = 0;
    rotZ = 0;
    transY = 0;

    curSlide.style.transition = 'cubic-bezier(0,1.95,.49,.73) ' + elasticSlider.prototype.options.gapY + 's';
    curSlide.style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
    curSlide.style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + transY + 'px)';
    // remains elements
    var j = 1;
    for (var i = slideItems.length - 2; i >= 0; i--) {
      slideItems[i].style.transition = 'cubic-bezier(0,1.95,.49,.73) ' + elasticSlider.prototype.options.transDuration / (j + 0.9) + 's';
      slideItems[i].style.webkitTransform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + (elasticSlider.prototype.options.gapY * j) + 'px)' + ' translateZ(' + (-elasticSlider.prototype.options.gapZ * j) + 'px)';
      slideItems[i].style.transform = 'translateX(' + transX + 'px)' + 'rotateZ(' + rotZ + 'deg)' + ' translateY(' + (elasticSlider.prototype.options.gapY * j) + 'px)' + ' translateZ(' + (-elasticSlider.prototype.options.gapZ * j) + 'px)';
      j++;
    }

    document.removeEventListener('mousemove', elasticSlider.prototype._slideMouseMove, false);
    document.removeEventListener('touchmove', elasticSlider.prototype._slideMouseMove, false);
  };
})(window, jQuery);
;
(function ($, Drupal) {
  'use strict';

  /**
  * Behavior on load and resize to init elastic slider functionality
  */
  Drupal.behaviors.openbankElasticSlider = {
    attach: function (context, settings) {
      var previousBreakpoint = window.ResponsiveImages.getBreakpoint();
      var isElasticSlideActive = false;
      var giroBoxSkeleton = document.querySelector('.campaign__skeleton');
      var highLightsSkeleton = document.querySelectorAll('.highlight-skeleton-item--node');

      function verifyBreakpoints(elasticSliderSettings, breakpoint) {
        for (var i = 0; i < elasticSliderSettings.breakpoints.length; i++) {
          var breakpointSetting = elasticSliderSettings.breakpoints[i];
          if (breakpointSetting === breakpoint) {
            isElasticSlideActive = true;
            return;
          }
          isElasticSlideActive = false;
        }
      }

      $(context).find('.highlights__items--home').each(function (index, element) {
        var breakpoint = window.ResponsiveImages.getBreakpoint();

        var elasticSliderSettings = {
          breakpoints: ['xs']
        };
        // Verify breakpoint to active elastic slider functionality
        verifyBreakpoints(elasticSliderSettings, breakpoint);

        if (isElasticSlideActive) {
          elasticSlider(elasticSliderSettings, element);
        }
        else {
          $(element).removeClass('elastic-slider');
          $(element).children().removeClass('elastic-slider__slide');
        }
        previousBreakpoint = breakpoint;
      });
      // Resize actions
      $(window).on({

        resize: function () {
          // Verify if the section highlights exist
          var highlightItems = $('.highlights__items--home');
          // If doesn't change the breakpoint don't do anything.
          var newBreakpoint = window.ResponsiveImages.getBreakpoint();
          // Verify if it was a change of breakpoint
          if (previousBreakpoint === newBreakpoint) {
            return;
          }
          // Support multiple groups.
          $.each(highlightItems, function (index, element) {
            var elasticSliderSettings = {
              breakpoints: ['xs']
            };
            // Verify breakpoint to active elastic slider functionality
            verifyBreakpoints(elasticSliderSettings, newBreakpoint);

            if (isElasticSlideActive) {
              $(element).addClass('elastic-slider');
              $(element).children().addClass('elastic-slider__slide');
              elasticSlider(elasticSliderSettings, element);
            }
            else if (previousBreakpoint === 'xs') {
              elasticSlider(elasticSliderSettings, element);
              $(element).removeClass('elastic-slider');
              $(element).children().removeClass('elastic-slider__slide')
                .css({transform: '', transition: '', opacity: ''});
            }
            previousBreakpoint = newBreakpoint;
            hideSkeletonBlock(giroBoxSkeleton);
            hideSkeletonBlock(highLightsSkeleton);
          });
        },
        load: function () {
          // Verify if the section highlights exist
          var highlightItems = $('.highlights__items--home');
          var highlightSkeleton = document.querySelector('.highlight__skeleton');
          // If doesn't change the breakpoint don't do anything.
          var newBreakpoint = window.ResponsiveImages.getBreakpoint();
          // Support multiple groups.
          $.each(highlightItems, function (index, element) {
            var elasticSliderSettings = {
              breakpoints: ['xs']
            };
            // Verify breakpoint to active elastic slider functionality
            verifyBreakpoints(elasticSliderSettings, newBreakpoint);

            if (isElasticSlideActive) {
              $(element).addClass('elastic-slider');
              $(element).children().addClass('elastic-slider__slide');
              elasticSlider(elasticSliderSettings, element);
            }
            else if (previousBreakpoint === 'xs') {
              elasticSlider(elasticSliderSettings, element);
              $(element).removeClass('elastic-slider');
              $(element).children().removeClass('elastic-slider__slide')
                .css({transform: '', transition: '', opacity: ''});
            }
            previousBreakpoint = newBreakpoint;
          });
          hideSkeletonBlock(giroBoxSkeleton);
          hideSkeletonBlock(highLightsSkeleton);
        }
      });
    }
  };

  /*
   * This function hides the provided skeleton node
   * in the provided timeout
  */
  function hideSkeletonBlock(skeleton, timeout) {
    if (!timeout) {
      timeout = 1000;
    }
    if (!skeleton) {
      return;
    }
    setTimeout(function () {
      var highlightSkeleton = document.querySelector('.highlight__skeleton');
      var cardsHighlights = document.querySelectorAll('.card--highlight');
      // If doesn't change the breakpoint don't do anything.
      var newBreakpoint = window.ResponsiveImages.getBreakpoint();
      if (newBreakpoint === 'xs') {
        if (highlightSkeleton) {
          highlightSkeleton.classList.remove('highlight__skeleton');
        }
      }
      if (cardsHighlights) {

        for (var i = 0; i < cardsHighlights.length; i++) {
          cardsHighlights[i].style.pointerEvents = 'initial';
        }
      }
      $(skeleton).fadeOut('slow');
      if (NodeList.prototype.isPrototypeOf(skeleton) && !document.body.contains(skeleton[0])) {
        var highlightsSkeletons = document.querySelectorAll('.highlight-skeleton-item--node');
        $(highlightsSkeletons).fadeOut('slow');
      }

    }, timeout);
  }
})(jQuery, Drupal);
;
(function ($) {
  var middlePageFixed;

 /**
  * Behavior to show and hide elements on contact form
  */
  Drupal.behaviors.brokerNavigation = {
    attach: function (context, settings) {
      $('.landing-page--broker__scrollable', context)
        .once('landing-page--broker-behavior')
        .each(function () {
          var scrolled = document.documentElement.scrollTop || document.body.scrollTop;
          var $section = $('.landing-page--broker__scrollable');
          var $animation = $('.landing-page--broker__scrollable__animation').first();
          middlePageFixed = (window.innerHeight - $animation.height()) / 2;
          var offsets = Drupal.behaviors.brokerNavigation.getOffsets($animation, window.innerHeight);
          var currentFixed = false;
          var breakpoint = window.ResponsiveImages.getBreakpoint();

          // overwrite wysiwyg block
          var $placeholder = $section.parents('.block.wysiwyg-block').first();
          $('.landing-page--broker__opentrader').insertAfter($placeholder);
          $('.landing-page--broker__subheader').insertAfter($placeholder);
          $placeholder.replaceWith($section);

          Drupal.behaviors.brokerNavigation.hideDownloadButton();

          $(window).on('resize', function () {
            middlePageFixed = (window.innerHeight - $animation.height()) / 2;
            breakpoint = window.ResponsiveImages.getBreakpoint();
            if (breakpoint !== 'xs') {
              scrolled = document.documentElement.scrollTop || document.body.scrollTop;
              offsets = Drupal.behaviors.brokerNavigation.getOffsets($animation, window.innerHeight);
              currentFixed = Drupal.behaviors.brokerNavigation.setLaptopPosition(scrolled, currentFixed, $animation, offsets);
            }
            else {
              $animation.css({
                position: '',
                top: ''
              });
              currentFixed = false;
            }
          });

          // attach dots-scroll relationship
          Drupal.behaviors.brokerNavigation.dotsBehavior('.dot-nav');
          Drupal.behaviors.brokerNavigation.activeCurrentDot(scrolled, offsets.scrollOffsets);

          // limit the fixed position only when the scrollable section is visible
          $(window).on('scroll', function () {
            if (breakpoint !== 'xs') {
              offsets = Drupal.behaviors.brokerNavigation.getOffsets($animation, window.innerHeight);
              scrolled = document.documentElement.scrollTop || document.body.scrollTop;
              Drupal.behaviors.brokerNavigation.activeCurrentDot(scrolled, offsets.scrollOffsets);
              currentFixed = Drupal.behaviors.brokerNavigation.setLaptopPosition(scrolled, currentFixed, $animation, offsets);
            }
          });

          // TODO: remove the following workaround to solve CMS missbehavior, once the CMS bug is solved
          $('.landing-page--broker .text-block__title').each(function () {
            $(this).parent().addClass('text-block');
          });

        });
    },

    dotsBehavior: function (menuSelector) {
      var scrollElements = [];
      $(menuSelector + ' a').each(function () {
        scrollElements.push($(this).attr('href'));
      })
      .on('click', function (event) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top + parseInt(target.attr('centeredTop')) - parseInt(middlePageFixed)
          }, 1000);
        }
      });
    },

    hideDownloadButton: function() {
      var userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android/i.test(userAgent)) {
        $('.download-platform a[data-os="ios"]').hide();
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        $('.download-platform a[data-os="android"]').hide();
      }
    },

    getOffsets: function($animation, windowH) {
      var scrollOffsets = [];
      $('.landing-page--broker__scrollable__element').each(function () {
        var topPosition = $(this).offset().top;
        scrollOffsets.push({
          top: topPosition,
          centeredTop: ($(this).outerHeight() - $animation.height()) / 2,
          bottom: topPosition + $(this).outerHeight() - windowH / 2,
          upper: topPosition - windowH / 2,
          $link: $('a[href="#' + $(this).find('.anchor').first().attr('id') + '"]')
        });
        $(this).find('.anchor').first().attr('centeredTop', ($(this).outerHeight() - $animation.height()) / 2);
      });
      var sectionTop = $('.landing-page--broker__scrollable').offset().top;
      var upperPosition = scrollOffsets[0].centeredTop;
      var bottomPosition = scrollOffsets[scrollOffsets.length - 1].top - sectionTop + scrollOffsets[scrollOffsets.length - 1].centeredTop;
      var upperScroll = sectionTop + upperPosition - middlePageFixed;
      var bottomScroll = scrollOffsets[scrollOffsets.length - 1].top + scrollOffsets[scrollOffsets.length - 1].centeredTop - middlePageFixed;
      return {
        scrollOffsets: scrollOffsets,
        upperPosition: upperPosition,
        bottomPosition: bottomPosition,
        upperScroll: upperScroll,
        bottomScroll: bottomScroll
      };
    },

    activeCurrentDot: function(scrolled, scrollOffsets) {
      for (var isect = 0; isect < scrollOffsets.length; isect++) {
        if (scrolled > scrollOffsets[isect].upper) {
          scrollOffsets[isect].$link.addClass('active');
        }
        else {
          scrollOffsets[isect].$link.removeClass('active');
        }
      }
    },

    setLaptopPosition: function(scrolled, currentFixed, $animation, offsets) {
      if (currentFixed) {
        if (scrolled < offsets.upperScroll) {
          $animation.css({
            position: 'absolute',
            top: offsets.upperPosition + 'px'
          });
          currentFixed = false;
        }
        else if (scrolled > offsets.bottomScroll) {
          $animation.css({
            position: 'absolute',
            top: offsets.bottomPosition + 'px'
          });
          currentFixed = false;
        }
      }
      else {
        if (scrolled >= offsets.upperScroll && scrolled <= offsets.bottomScroll) {
          $animation.css({
            position: 'fixed',
            top: middlePageFixed + 'px'
          });
          currentFixed = true;
        }
      }
      return currentFixed;
    }
  };
})(jQuery, Drupal);
;
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}({9:function(e,t){function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){if(!document.querySelector(".ok-onboarding-topbar")){var t=function(e,t,n){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o({categoriaEvento:e,accionEvento:t,etiquetaEvento:n},i);window.utag&&window.utag.link&&window.utag.link(r)}(e,t,n)},n=function(e,n,o,i){e.preventDefault(),t(n,o,i),window.location.href=e.currentTarget.href},i=e(".lang-selector__btn"),r=e(".lang-selector__box");e(document).mouseup((function(n){n.preventDefault();var o=e(".block-ok-cintillo"),a=0;o.length>0&&(a=o.outerHeight());var c=a+32;if(r.css({top:c+"px"}),i.is(n.target)||0!==i.has(n.target).length){if(r.is(n.target)||r.has(n.target).length>0)return;t("interaccion en topbar","cambiar pais-idioma"),i.toggleClass("lang-selector__btn--active")}else i.removeClass("lang-selector__btn--active")}));var a=e(".openbank-topbar__second-level__categories-list"),c=e(".openbank-topbar__second-level--right");e(".openbank-topbar__nav-item--product").hover((function(){if(!e(this).attr("data-fixed")){document.querySelectorAll(".openbank-topbar__second-level__dropdown").forEach((function(e){"lg"===window.ResponsiveImages.getBreakpoint()&&(e.style.top=okApp.getLoginPosition()+"px")}));var t=a.find(".openbank-topbar__second-level__category-item:first-child").find(".openbank-topbar__second-level__dropdown");a.css("min-height",t.outerHeight())}this.setAttribute("data-fixed",!0)}));e(".openbank-topbar__main");window.matchMedia("(min-width: 1200px)").matches&&a.find(".openbank-topbar__second-level__category-item:first-child").addClass("active"),a.on({mouseenter:function(){window.matchMedia("(min-width: 1200px)").matches&&e(this).find(".openbank-topbar__second-level__category-item:first-child").toggleClass("active")},mouseleave:function(){window.matchMedia("(min-width: 1200px)").matches&&(e(this).find(".openbank-topbar__second-level__category-item:first-child").hasClass("active")||e(this).find(".openbank-topbar__second-level__category-item:first-child").addClass("active"))}}),a.children("li").on({mouseenter:function(){var t=Math.round(c.innerHeight()),n=Math.round(e(this).children(".openbank-topbar__second-level__dropdown").outerHeight());n>t?c.css("height",n+"px"):e(this).children(".openbank-topbar__second-level__dropdown").css("min-height",t)},mouseleave:function(){c.css("height","initial")},onClick:function(e){console.log(e.target)}});var l=document.querySelector(".select-country__current"),s=document.querySelector(".select-country__options"),u=document.querySelector(".select-lang__current"),d=document.querySelector(".select-lang__options"),p=e(".openbank-topbar__toggle"),b=e(".ok-mobile-topbar"),m=e(".ok-mobile-overlay"),f=e("[data-action]"),_=e(".hide-menu"),v=e(".close-menu"),g=document.querySelectorAll("[data-list]"),h=document.querySelectorAll("[data-action]"),k=function(){Object.keys(g).forEach((function(e){var t=g[e].getAttribute("data-list");document.querySelector("[data-reset='".concat(t,"']")).appendChild(g[e])})),e(".lang-selector").parent(e(".ok-topbar__superior__list")).show(),e(".list-clone").remove()},y=function(){b.hide(),m.hide(),e(".ok-mobile-submenu").removeClass("ok-mobile-submenu--active"),f.removeClass("trigger-focused"),e("body").removeClass("ok-topbar-noscroll"),k()};p.on("click",(function(t){var o;t.preventDefault(),b.show(),m.show(),e(".lang-selector").parent(e(".ok-topbar__superior__list")).hide(),e("body").addClass("ok-topbar-noscroll"),(o=document.createElement("li")).classList.add("ok-topbar__superior__list","list-clone"),document.querySelector(".ok-topbar__superior__container").appendChild(o),o.appendChild(l),o.appendChild(s),function(){var e=document.createElement("li");e.classList.add("ok-topbar__superior__list","list-clone"),document.querySelector(".ok-topbar__superior__container").appendChild(e),e.appendChild(u),e.appendChild(d)}(),function(){Object.keys(g).forEach((function(e){var t=g[e].getAttribute("data-list"),n=document.querySelector("[data-container='".concat(t,"']"));n&&n.appendChild(g[e])}));var e=document.getElementsByClassName("ok-mobile-topbar");e&&(e[0].querySelectorAll(".openbank-topbar__second-level__product-parent a").forEach((function(e){e.hasAttribute("href")&&e.addEventListener("click",(function(e){var t=window.ResponsiveImages.getBreakpoint();n(e,"xs"===t?"interaccion en main menu mobile":"interaccion en main menu tablet",this.innerText)}))})),e[0].querySelectorAll(".openbank-topbar__second-level__product-item a").forEach((function(e){e.hasAttribute("href")&&e.addEventListener("click",(function(e){var t=window.ResponsiveImages.getBreakpoint();n(e,"xs"===t?"interaccion en main menu mobile":"interaccion en main menu tablet",this.innerText)}))})))}()})),f.on("click",(function(t){if(!window.matchMedia("(min-width: 1200px)").matches){document.querySelector(".trigger-focused")&&Object.keys(h).forEach((function(e){h[e].classList.remove("trigger-focused")})),e(this).is("[class*=icon]")?e(this).parent().find(e("span[data-action]")).addClass("trigger-focused"):e(this).addClass("trigger-focused");var n=e(this),o=e(".ok-mobile-submenu--active");o.length>0?n.parent().siblings(".ok-mobile-submenu").hasClass("ok-mobile-submenu--active")||n.siblings(".ok-mobile-submenu").hasClass("ok-mobile-submenu--active")?(o.removeClass("ok-mobile-submenu--active"),e(this).removeClass("trigger-focused"),e(this).parent().find(e("span[data-action]")).removeClass("trigger-focused")):(o.removeClass("ok-mobile-submenu--active"),setTimeout((function(){n.parent().siblings(".ok-mobile-submenu").addClass("ok-mobile-submenu--active"),n.siblings(".ok-mobile-submenu").addClass("ok-mobile-submenu--active")}),700)):(e(this).parent().siblings(".ok-mobile-submenu").addClass("ok-mobile-submenu--active"),e(this).siblings(".ok-mobile-submenu").addClass("ok-mobile-submenu--active"))}})),_.on("click",(function(t){t.preventDefault(),e(".ok-mobile-submenu").removeClass("ok-mobile-submenu--active"),f.removeClass("trigger-focused")})),v.on("click",(function(e){e.preventDefault(),y(),k()})),window.onresize=function(){window.matchMedia("(min-width: 1200px)").matches?(y(),e(".openbank-topbar__nav-item--product").removeAttr("data-fixed"),a.find(".openbank-topbar__second-level__category-item:first-child").addClass("active")):(a.find(".openbank-topbar__second-level__category-item:first-child").removeClass("active"),a.css("min-height","auto"))};var w=document.querySelectorAll(".select-country__options .dropdown-menu-option"),S=document.querySelector(".current-country"),C=document.querySelector(".country-select__flag"),x=document.querySelectorAll(".select-lang__options .dropdown-menu-option"),q=document.querySelector(".current-lang"),A=document.querySelectorAll(".lang-options");okApp.createAndUpdateLanguageCookie(),Object.keys(w).forEach((function(e){var t=w[e].getAttribute("data-select-country"),n=w[e].getAttribute("data-country-code"),o=w[e].getAttribute("data-countryurl");w[e].addEventListener("click",(function(e){if(e.preventDefault(),window.matchMedia("(min-width: 1200px)").matches){S.textContent=t;var i=C.classList[2];C.classList.remove(i),C.classList.add("current-flag--".concat(n)),Object.keys(A).forEach((function(e){A[e].classList.remove("lang-options--active")})),document.querySelector(".lang-options--".concat(n)).classList.add("lang-options--active"),S.dataset.countryurl=e.target.dataset.countryurl;var r=document.querySelector(".lang-options--active li").textContent;q.textContent=r}else window.location=o}))})),Object.keys(x).forEach((function(e){x[e].addEventListener("click",(function(e){e.preventDefault();var t=e.target.textContent,n=e.target.dataset.url;window.matchMedia("(min-width: 1200px)").matches?(q.textContent=t,q.dataset.redirect=n):window.location=n}))})),document.querySelector(".ok-topbar__superior__cta").addEventListener("click",(function(e){e.preventDefault();var n=q.dataset.redirect,o=S.dataset.countryurl;t("interaccion en topbar","cambiar pais-idioma exito","".concat(S.innerText,"-").concat(q.innerText)),"none"!=n?window.location=n:"none"!=o&&(window.location=o)})),okApp.openLogin=function(e){e.preventDefault(),drupalSettings.openbank_biocatch&&1===drupalSettings.openbank_biocatch.enable&&okBiocatch.initBiocatchAndSetContext("LOGIN_PAGE");var t=window.ResponsiveImages.getBreakpoint(),n=document.querySelector(".login"),o=document.querySelector(".login-wrapper"),i=document.querySelector(".go-to-app");"lg"===t?(n&&(n.style.top=okApp.getLoginPosition()+"px"),o.classList.remove("closed"),document.querySelector(".modal-overlay").style.display="block"):okApp.isContextOpenDownloadAppBanner()?i.style.display="block":(o.classList.remove("closed"),document.querySelector(".modal-overlay").style.display="block"),"function"==typeof Drupal.ok_tealium.utagTracking&&Drupal.ok_tealium.utagTracking({tipoProceso:"acceso al area privada",pasoProceso:"acceso",detalleProceso:"acceso al panel de login"})};var E=document.querySelector(".openbank-topbar__nav-button--log-in");E&&(E.addEventListener("click",(function(e){t("interaccion en topbar",this.innerText),okApp.openLogin(e)})),E.addEventListener("touchstart",(function(e){t("interaccion en topbar",this.innerText),okApp.openLogin(e)})));var O=document.querySelector(".openbank-topbar__nav-button--sign-up");O&&O.addEventListener("click",(function(e){n(e,"interaccion en topbar",this.innerText)})),document.querySelectorAll(".ok-topbar__superior__link").forEach((function(e){e.addEventListener("click",(function(e){n(e,"interaccion en topbar",this.innerText)}))})),document.querySelectorAll(".products-area__item__link").forEach((function(e){e.hasAttribute("href")&&e.addEventListener("click",(function(e){n(e,"interaccion en topbar",this.innerText)}))})),document.querySelectorAll(".openbank-topbar__second-level__product-parent a").forEach((function(e){e.hasAttribute("href")&&e.addEventListener("click",(function(e){n(e,"interaccion en main menu desktop",this.innerText)}))})),document.querySelectorAll(".openbank-topbar__second-level__product-item a").forEach((function(e){e.hasAttribute("href")&&e.addEventListener("click",(function(e){n(e,"interaccion en main menu desktop",this.innerText)}))}))}}(jQuery)}});;
/**
 * @file
 * This files handles the different initializations needed.
 */

(function ($) {

  // This polyfill allows use ES6 method String.includes
  if (!String.prototype.includes) {

    /* eslint-disable no-extend-native */
    String.prototype.includes = function (search, start) {
      if (typeof start !== 'number') {
        start = 0;
      }

      if (start + search.length > this.length) {
        return false;
      }
      else {
        return this.indexOf(search, start) !== -1;
      }
    };
  }

  // This polyfill allows use ES6 method Array.includes
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function (valueToFind, fromIndex) {

        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        // 1. Let O be ? ToObject(this value).
        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n â¥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(valueToFind, elementK) is true, return true.
          if (sameValueZero(o[k], valueToFind)) {
            return true;
          }
          // c. Increase k by 1.
          k++;
        }

        // 8. Return false
        return false;
      }
    });
  }

  // This polyfill allows use ES6 method that determines whether
  // the passed value is an integer
  Number.isInteger = Number.isInteger || function (value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  };

  // IE11 doesn't have support to 'fill' method.
  // Bug: "Object doesn't support property or method 'fill'".
  if (!Array.prototype.fill) {
    Object.defineProperty(Array.prototype, 'fill', {
      value: function (value) {

        // Steps 1-2.
        if (this == null) {
          throw new TypeError('this is null or not defined');
        }

        var O = Object(this);

        // Steps 3-5.
        var len = O.length >>> 0;

        // Steps 6-7.
        var start = arguments[1];
        var relativeStart = start >> 0;

        // Step 8.
        var k = relativeStart < 0 ?
            Math.max(len + relativeStart, 0) :
            Math.min(relativeStart, len);

        // Steps 9-10.
        var end = arguments[2];

        /* eslint-disable no-undefined */
        var relativeEnd = end === undefined ?
            len : end >> 0;

        // Step 11.
        var final = relativeEnd < 0 ?
            Math.max(len + relativeEnd, 0) :
            Math.min(relativeEnd, len);

        // Step 12.
        while (k < final) {
          O[k] = value;
          k++;
        }

        // Step 13.
        return O;
      }

    });
  }

})(jQuery);
;
(function ($, Drupal) {
  'use strict';

  /**
   * Behavior to close cintillo
   */
  Drupal.behaviors.closeCintillo = {
    attach: function (context, settings) {
      $('.ok-cintillo', context)
      .once('close-cintillo')
      .each(function () {
        var $this = $(this);
        $('.ok-cintillo__close', context).on('click', closeCintillo);
        function closeCintillo() {
          // Check if the cintillo is in the header to remove some of the main container's margin, when the cintillo is removed
          if (!$('.region.region-header .ok-cintillo').length) {
            return;
          }
          var cintilloHeight = $this.outerHeight();
          $this.css('display', 'none');
          var $main = $('#main');
          var currentMainMarginTop = $main[0].offsetTop;
          $main.css('margin-top', currentMainMarginTop - cintilloHeight);
          // Set topbar right panel position
          var rightMenuPanels = document.querySelectorAll('.openbank-topbar__second-level__dropdown');
          rightMenuPanels.forEach(function(panel) {
            var breakpoint = window.ResponsiveImages.getBreakpoint();
            if (breakpoint === 'lg') {
              panel.style.top = okApp.getLoginPosition() + 'px';
            }
          });
        }
      });
    }
  };
})(jQuery, Drupal);
;
/**
 * Main GTNS - Openbank Analytics JS library.
 */


 /**
  * GTNS namespace for the application.
  *
  * @todo review https://addyosmani.com/blog/essential-js-namespacing/ and try to
  * make NS configurable
  */
var GTNS = GTNS || {};
GTNS.data = {};
GTNS.model = {};
GTNS.errors = [];
GTNS.listeners = [];
GTNS.helpers = {};


/**
 * Polyfills and generic functions.
 */

/* eslint-disable */

// matches polyfill
this.Element && function(ElementPrototype) {
  ElementPrototype.matches = ElementPrototype.matches ||
  ElementPrototype.matchesSelector ||
  ElementPrototype.webkitMatchesSelector ||
  ElementPrototype.msMatchesSelector ||
  function(selector) {
    var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;
    while (nodes[++i] && nodes[i] != node);
    return !!nodes[i];
  }
}(Element.prototype);

// closest polyfill
this.Element && function(ElementPrototype) {
  ElementPrototype.closest = ElementPrototype.closest ||
  function(selector) {
    var el = this;
    while (el.matches && !el.matches(selector)) el = el.parentNode;
    return el.matches ? el : null;
  }
}(Element.prototype);

/* eslint-enable */

GTNS.helpers = {
  stringHash: function (string, seed) {
    'use strict';
    var hash = seed || 5381;
    var i = string.length;
    while (i) {
      hash = (hash * 33) ^ string.charCodeAt(--i);
    }
    return hash >>> 0;
  },
  fingerprint: function () {
    'use strict';
    var nav = window.navigator;
    var screen = window.screen;
    var fingerprint = nav.mimeTypes.length;
    fingerprint += nav.userAgent.replace(/\D+/g, '');
    fingerprint += nav.plugins.length;
    fingerprint += nav.hardwareConcurrency || '';
    fingerprint += screen.height || '';
    fingerprint += screen.width || '';
    fingerprint += screen.pixelDepth || '';

    return fingerprint;
  },
  readCookie: function (name) {
    'use strict';
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }
};


/**
 * Default settings
 * @type {Object}
 */
GTNS.settings = {
  hitTypes: ['pageview', 'testrender', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'],
  hashSeed: 4754,
  sendData: {
    // How often should the interval run (in miliseconds)
    pushInterval: '8192',
    // How many events should accumulate to send data if timer has not run
    maxAllowedLength: '8',
    // Minimum number of events required in order to send data
    threshold: '4',
    // Analytics API entry point URL
    entryPointURL: drupalSettings.ok_analytics.settings.entryPointURL
  },
  debug: 0,
  trackView: 1,
  additionalCookiesTracking: {}
};

/**
 * Class definition for Analytics hit.
 *
 * @param {string} type - A valid hit type
 * @param {object} properties - A javascript object with events and tests
 */
GTNS.model.Hit = function (type, properties) {
  'use strict';
  // type
  if (GTNS.settings.hitTypes.indexOf(type) !== -1) {
    this.type = type;
  }
  else {
    GTNS.errors.push('Invalid hit type');
  }
  this.timestamp = Date.now();

  // view
  this.view = GTNS.data.view;

  // get channel from body tags
  var body = document.querySelector('body');

  this.channel = {
    id: (typeof body.attributes['data-gtns-channel-id'] !== 'undefined') ? body.attributes['data-gtns-channel-id'].value : '',
    name: (typeof body.attributes['data-gtns-channel-name'] !== 'undefined') ? body.attributes['data-gtns-channel-name'].value : ''
  };

  // visitor
  this.visitor = GTNS.data.visitor;
  if (typeof this.visitor === 'undefined') {
    var visitor = {};

    /**
     * @todo: this values should be obtained form the cookie
     */
    //  visitor.user = {};
    //  visitor.user.id = 1;
    //
    //  visitor.cookieHash = "somehash"

    // navigator
    if (typeof navigator !== 'undefined') {
      visitor.system = {
        navigator: {
          userAgent: navigator.userAgent,
          language: navigator.language
        }
      };
    }
    // screen
    if (typeof screen !== 'undefined') {
      visitor.system.screen = {
        availableWidth: screen.availWidth,
        availableHeight: screen.availHeight
      };
    }
    // timeZoneOffset
    var date = new Date();
    var currentTimeZoneOffset = date.getTimezoneOffset();
    visitor.timezone = -(currentTimeZoneOffset / 60) + "h";

    // visitor device
    visitor.device = 'desktop';
    if (typeof navigator !== 'undefined') {
      if (navigator.userAgent.match(/Phone|DROID|Android|webOS|iPhone|iPod|BlackBerry|Windows Phone|ZuneWP7|IEMobile/i)) {
        visitor.device = 'mobile';
      }
      if (navigator.userAgent.match(/Tablet|iPad|Kindle|Playbook|Nexus|Xoom|SM-N900T|GT-N7100|SAMSUNG-SGH-I717|SM-T330NU/i)) {
        visitor.device = 'tablet';
      }
    }

    // which attributes should be used for this print?
    if (typeof screen !== 'undefined' && typeof navigator !== 'undefined') {
      visitor.browserFingerprint = GTNS.helpers.stringHash(GTNS.helpers.fingerprint(), GTNS.settings.hashSeed);
    }

    // set this.visitor and GTNS.data.visitor
    this.visitor = GTNS.data.visitor = visitor;
  }

  this.page = GTNS.data.page || {};
  if (typeof document !== 'undefined') {
    this.page = {
      documentWidth: document.documentElement.clientWidth,
      documentHeight: document.documentElement.clientHeight,
      referrer: document.referrer || null,
      title: document.title
    };

    if (typeof this.page.metatags === 'undefined') {
      this.page.metaTags = [];
      var metaTags = document.getElementsByTagName('meta');
      for (var i = 0; i < metaTags.length; i++) {
        var metaTagAttributes = metaTags[i].attributes;
        this.page.metaTags[i] = {};
        for (var j = 0; j < metaTagAttributes.length; j++) {
          var attribute = metaTagAttributes[j];
          this.page.metaTags[i][attribute.nodeName] = attribute.nodeValue;
        }
      }
    }

  }
  if (typeof location !== 'undefined') {
    this.page.host = location.host;
    this.page.path = location.pathname;
  }
  GTNS.data.page = this.page;

  // We can only define component and action if we have the event object
  if (properties && properties.ev && typeof properties.ev !== 'undefined') {
    // component
    var componentElement = properties.ev.target;
    if (typeof properties.ev.target.attributes['data-gtns-component-id'] === 'undefined') {
      componentElement = properties.ev.target.closest('[data-gtns-component-id]');
    }
    // Building test and page components from closest section
    var testComponent = document.querySelector('[data-gtns-test-id]');
    var pageComponent = (testComponent && testComponent.closest('SECTION')) ? testComponent.closest('SECTION') : '';
    if (testComponent
      && typeof testComponent.closest('SECTION').attributes['data-gtns-component-id'] === 'undefined') {
      pageComponent = (testComponent.querySelector('[data-gtns-component-id]')) ? testComponent.querySelector('[data-gtns-component-id]') : testComponent;
    }
    var component = {
      id: componentElement.attributes['data-gtns-component-id'].value,
      type: componentElement.attributes['data-gtns-component-type'].value,
      name: componentElement.attributes['data-gtns-component-name'].value,
      top: componentElement.offsetTop,
      left: componentElement.offsetLeft
    };
    this.component = component;

    // action
    var action = {};
    action.name = properties.ev.type;
    action.cursor = {
      x: properties.ev.pageX,
      y: properties.ev.pageY,
      scrollTop: body.scrollTop,
      scrollMax: body.scrollHeight
    };
    this.action = action;
    // Add test data to model per event if it belongs to AB testing
    var $section = properties.ev.target.closest('SECTION');
    if (typeof properties.ev.target.closest('[data-gtns-test-id]') !== 'undefined'
      && (properties.ev.target.closest('[data-gtns-test-id]') !== null || $section.className === 'highlights')
      && typeof testComponent !== 'undefined' && testComponent !== null) {
      this.test = buildTestDataModel(testComponent, pageComponent.attributes['data-gtns-component-id'].value);
    }
  }
  // AB Testing - testrender hit type
  if (type === 'testrender' && properties && properties.test
    && typeof properties.test.attributes['data-gtns-test-id'].value !== 'undefined') {
    // componentTest
    var componentElementTest = properties.test;
    // if component elements are not present, find first closest component elements
    if (typeof componentElementTest.attributes['data-gtns-component-id'] === 'undefined') {
      componentElementTest = componentElementTest.querySelector('[data-gtns-component-id]');
    }
    var componentTest = {
      id: componentElementTest.attributes['data-gtns-component-id'].value,
      type: componentElementTest.attributes['data-gtns-component-type'].value,
      name: componentElementTest.attributes['data-gtns-component-name'].value,
      top: componentElementTest.offsetTop,
      left: componentElementTest.offsetLeft
    };
    this.component = componentTest;

    // Building test and page renderer components from closest section
    var testRenderComponent = document.querySelector('[data-gtns-test-id]');
    var pageRenderComponent = (testRenderComponent && testRenderComponent.closest('SECTION')) ? testRenderComponent.closest('SECTION') : '';
    if (testRenderComponent
      && typeof testRenderComponent.closest('SECTION').attributes['data-gtns-component-id'] === 'undefined') {
        pageRenderComponent = (testRenderComponent.querySelector('[data-gtns-component-id]')) ? testRenderComponent.querySelector('[data-gtns-component-id]') : testRenderComponent;
    }

    // Add test data to model for AB testing
    if (testRenderComponent && pageRenderComponent) {
      this.test = buildTestDataModel(testRenderComponent, pageRenderComponent.attributes['data-gtns-component-id'].value);
    }
  }

  // Track additional cookies/information
  var additionalCookies = {};
  Object.keys(GTNS.settings.additionalCookiesTracking).forEach(function (o) {
    // try to read the cookie and push it to the Hit
    var cookieName = GTNS.settings.additionalCookiesTracking[o];
    additionalCookies[o] = GTNS.helpers.readCookie(cookieName)
      ? GTNS.helpers.readCookie(cookieName)
      : null;
  });
  this.additionalInfo = additionalCookies;

  /**
  * Build model with test data for AB Testing
  * @return {object} - The test data object
  */
  function buildTestDataModel(componentContext, componentId) {
    if (typeof componentContext.attributes['data-gtns-test-id'].value !== 'undefined'
      && typeof componentId !== 'undefined') {
      // Create test object for model
      var variant = {
        id: componentId
      };
      var test = {
        id: componentContext.attributes['data-gtns-test-id'].value,
        variant: variant
      };
      return test;
    }
  }
};


/**
 * Hit Queue
 */
GTNS.data.hits = (function () {
  'use strict';

  var queue;

  /**
   * Create the queue
   * @return {array} - The empty queue
   */
  function _create() {
    queue = [];
    return queue;
  }

  /**
  * Push hit to the queue
  * @return {integer} - The queue length
  */
  function _push() {
    if (!queue) {
      queue = _create();
    }
    Array.prototype.push.apply(queue, arguments);
    // @todo: add data validation.
    if (queue.length >= GTNS.settings.sendData.maxAllowedLength) {
      clearInterval(GTNS.data.timer = setInterval(GTNS.data.hits.send, GTNS.settings.sendData.pushInterval));
      _send('length');
      GTNS.data.timer = setInterval(GTNS.data.hits.send, GTNS.settings.sendData.pushInterval);
    }
    return queue.length;
  }

  /**
  * Send hit queue
  * @param {boolean} skipThresholdValidation - True if threshold validation should be skipped
  */
  function _send(skipThresholdValidation) {
    // send queue to endpoint
    if (GTNS.settings.sendData.entryPointURL && queue.length > 0 && (skipThresholdValidation || queue.length >= GTNS.settings.sendData.threshold)) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', GTNS.settings.sendData.entryPointURL);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.send(JSON.stringify({entries:queue}));

      if (GTNS.settings.debug) {

        /* eslint-disable no-console */

        console.log(queue);
        console.log(JSON.stringify(queue).length);
        console.log(xhr);

        /* eslint-enable no-console */

      }
      queue = [];
    }
  }

  return {
    get: function () {
      if (!queue) {
        queue = _create();
      }
      return queue;
    },
    push: function () {
      return _push.apply(this, arguments);
    },
    send: function (skipThresholdValidation) {
      _send(skipThresholdValidation);
    }
  };
})();


/**
 * Start tracking when the DOM is ready
 */
if (typeof document.addEventListener === 'function') {
  document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    // Send view hit skipping threshold validation
    function skipThreshold() {
      var skipThresholdValidation = true;
      GTNS.data.hits.send(skipThresholdValidation);
    }

    // Track pageview unless it's disabled by settings
    if (GTNS.settings.trackView) {
      GTNS.data.view = GTNS.helpers.stringHash(document.location.hostname + document.location.pathname + Date.now() + Math.random(), GTNS.settings.hashSeed);
      GTNS.data.hits.push(new GTNS.model.Hit('pageview'));
      // Send view hit skipping threshold validation
      skipThreshold();
    }

    // Get AB Testing hits (testrender tracking)
    GTNS.trackTestRender = function () {
      // Find DOM elements that contain test id
      var testelements = document.querySelectorAll('[data-gtns-test-id]');
      // Create new hit type 'testrender' for each test if both ids are present in DOM
      if (testelements.length >= 1) {
        for (var i = 0; i < testelements.length; i++) {
          GTNS.data.hits.push(new GTNS.model.Hit('testrender', {test: testelements[i]}));
          skipThreshold();
        }
      }
    };

    // Listener to send the queue when the visitor leaves the page
    window.addEventListener('beforeunload', function () {
      var skipThresholdValidation = true;
      GTNS.data.hits.send(skipThresholdValidation);
    });

    // Listeners to track events
    GTNS.trackEvents = function () {
      // Get custom defined listeners
      var listeners = GTNS.listeners;
      // Get other DOM elements that have listeners
      var DOMDefinedListeners = document.querySelectorAll('[data-gtns-event]');
      for (var l = 0; l < DOMDefinedListeners.length; l++) {
        var hitType = 'event';
        if (typeof DOMDefinedListeners[l].attributes['data-gtns-hit-type'] !== 'undefined') {
          hitType = DOMDefinedListeners[l].attributes['data-gtns-hit-type'].value;
        }
        listeners.push({
          hitType: hitType,
          event: DOMDefinedListeners[l].attributes['data-gtns-event'].value,
          element: DOMDefinedListeners[l]
        });
      }
      // Debug
      if (GTNS.settings.debug) {

        /* eslint-disable no-console */

        console.log(listeners, listeners.length);

        /* eslint-enable no-console */

      }
      // Add listeners
      listeners.forEach(function (listener) {
        if (typeof listener.element === 'undefined') {
          listener.element = document.querySelector(listener.selector);
        }
        // Support for multiple events joined by comma
        var events = listener.event.split(',');
        events.forEach(function (eventItem) {
          listener.element.addEventListener(eventItem, function (e) {
            GTNS.data.hits.push(new GTNS.model.Hit(listener.hitType, {ev: e}));
          });
        });
      });

      // Set up hit queue timer
      GTNS.data.timer = setInterval(GTNS.data.hits.send, GTNS.settings.sendData.pushInterval);
    };

    // Get listeners to track events
    GTNS.trackEvents();
  });
}
;
/**
 * @file
 * Basic GTNS configuration and functionality.
 *
 */

(function ($) {
  'use strict';

  /* global GTNS */

  GTNS.settings.debug = drupalSettings.ok_analytics.settings.debug;
  GTNS.settings.sendData.entryPointURL = drupalSettings.ok_analytics.settings.entryPointURL;
  GTNS.settings.sendData.threshold = drupalSettings.ok_analytics.settings.threshold;
  GTNS.settings.sendData.maxAllowedLength = drupalSettings.ok_analytics.settings.maxAllowedLength;
  GTNS.settings.sendData.pushInterval = drupalSettings.ok_analytics.settings.pushInterval;
  GTNS.settings.additionalCookiesTracking = {
    cookieHash: 'ok-cookiebite'
  };

})(jQuery);
;
/**
 * @file
 */

(function ($, Drupal, _) {
  'use strict';

  Drupal.behaviors.okPluginAlter = {
    attach: function (context, settings) {
      if (typeof CKEDITOR !== 'undefined') {
        for (var i in CKEDITOR.instances) {
          if (CKEDITOR.instances.hasOwnProperty(i)) {
            CKEDITOR.instances[i].on('instanceReady', function () {
              if (CKEDITOR.lang['es']) {
                CKEDITOR.lang['es'].format.tag_h1 = Drupal.t('H1');
                CKEDITOR.lang['es'].format.tag_h2 = Drupal.t('H2');
                CKEDITOR.lang['es'].format.tag_h3 = Drupal.t('H3');
                CKEDITOR.lang['es'].format.tag_h4 = Drupal.t('H4');
                CKEDITOR.lang['es'].format.tag_h5 = Drupal.t('H5');
                CKEDITOR.lang['es'].format.tag_h6 = Drupal.t('H6');
                CKEDITOR.lang['es'].format.panelTitle = Drupal.t('SEO');
                CKEDITOR.lang['es'].format.label = Drupal.t('SEO');
              }
            });
          }
        }
      }
    }
  };

  // @todo: State in paragrahs not working.
  Drupal.behaviors.adminContractInfo = {
    attach: function (context, settings) {
      $('.field--name-field-information-column').find('input[name*=field_bool_upload_file][value]').each(function (index, element) {
        var parent = $(element).parents('.paragraphs-subform:first');
        if ($(element).is(':checked')) {
          $('.field--name-field-url', parent).hide();
        }
        else {
          $('.field--name-field-bool-new-tab', parent).hide();
          $('.field--name-field-files', parent).hide();
        }
      });
    }
  };

  // @todo: State in paragrahs not working.
  Drupal.behaviors.adminPageGenericPages = {
    attach: function (context, settings) {
      $('.field--name-field-page-admin').find('input[id*=subform-field-topbar-type-topbar-onboarding]').each(function (index, element) {
        var parent = $(element).parents('.paragraphs-subform:first');
        if ($(element).is(':checked')) {
          $('.field--name-field-language', parent).show();
        }
        else {
          $('.field--name-field-language', parent).hide();
        }
      });
    }
  };
})(jQuery, Drupal, _);
;