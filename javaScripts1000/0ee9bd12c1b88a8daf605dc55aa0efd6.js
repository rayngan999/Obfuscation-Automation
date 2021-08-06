/**
 * @file
 * Placeholder file for custom theme behaviors.
 */

var okApp = okApp || {};
var LoginFrame = LoginFrame || {};

(function ($, _, Drupal, cookies) {

  /**
   * Initialize password recovery view functionality.
   * TODO: Move this behavior to module ok_users.
   * @param  {Object} OKPasswordRecovery search Framework
   */
  Drupal.behaviors.initializePasswordRecovery = {
    attach: function (context) {
      $(context).find('#password-recovery').each(function () {
        if (window.OKPasswordRecovery && window.OKPasswordRecovery.hasOwnProperty('import')) {
          var config = drupalSettings.ok_config_recovery_password;
          var sources = {
            country: (drupalSettings.path) ? drupalSettings.path.country_code.toUpperCase() : 'ES',
            language: (drupalSettings.path) ? okApp.getCurrentLang(drupalSettings.path.currentLanguage) : 'es',
            baseHost: drupalSettings.base_api_url,
            config: config
          };
          window.OKPasswordRecovery.import(sources);
        }
      });
    }
  };

  /**
   * Behavior that handles Web Privada links scenarios
   */
  Drupal.behaviors.openbankContractButtons = {
    attach: function (context, settings) {
      // attach only for private web URLs.
      var privateProURL = okApp.parseURL(drupalSettings.private_pro_url);
      var privateProCustomURL = okApp.parseURL(drupalSettings.private_pro_custom_url);
      var privateWebURL = okApp.parseURL(drupalSettings.private_site_url);
      var currentURL = window.location;
      var enabledCollectiveLanding = '0';
      var base64Obj = {};
      // check if is a collective landing
      if ($('[data-collective-landing]').length) {
        enabledCollectiveLanding = $('[data-collective-landing]').attr('data-collective-landing');
        var urlParams = currentURL.search.substr(1).split('&');
        for (var i in urlParams) {
          if (urlParams[i].indexOf('collective') !== -1) {
            var parsedUrlParam = urlParams[i].split('collective=').pop();
            base64Obj = okApp.checkBase64(parsedUrlParam);
          }
          break;
        }
      }
      // Change production hostname to current environment hostname.
      $('a[href^="' + privateProURL.protocol + '//' + privateProURL.hostname + '"], a[href^="' + privateProCustomURL.protocol + '//' + privateProCustomURL.hostname + '"]', context)
        .once('openbank-changed-hostname')
        .each(function () {
          var linkURL = okApp.parseURL($(this).attr('href'));
          var searchParam = linkURL.search;
          // Check if has collective params
          if (currentURL.search !== '' && base64Obj.hasParams && enabledCollectiveLanding === 'true') {
            searchParam = (linkURL.search !== '') ? linkURL.search : currentURL.search;
          }
          $(this).attr('href', privateWebURL.protocol + '//' + privateWebURL.hostname + linkURL.pathname + searchParam);
        });

      okApp.attachPrivateLink();
    }
  };

  /**
   * Behavior on load the page that adds borders to only Bootstrap grid cols
   * In order to apply this behavior, the class custom-grid-border needs to be added in template.
   */
  Drupal.behaviors.openbankCustomGridBorder = {
    attach: function (context, settings) {
      $(context).find('.custom-grid-border .btgrid')
        .once('openbank-custom-grid-border')
        .each(function () {
          var $rows = $(this).children();
          var $cols = $rows.children();
          var $maxHeight = 0;
          // Postpone its execution until after wait milliseconds
          // have elapsed since the last time it was invoked
          var lazyLayout = _.debounce(recalculateSize, 300);

          // Calculate the higher box and set this height to all elements
          function recalculateSize() {
            $maxHeight = 0;
            // Getting max col height to apply.
            $cols.each(function () {
              $(this).removeAttr('style');
              $(this).addClass('custom-grid-border');
              if ($(this).height() > $maxHeight) {
                $maxHeight = $(this).height();
              }
            });
            $maxHeight = parseInt($maxHeight + 90, 10) + 'px';
            $cols.css({height: $maxHeight});
          }

          // Load and resize actions
          $(window).on({
            load: lazyLayout,
            resize: lazyLayout
          });
        });
    }
  };

  /**
   * Detect the presence of mini-banners and add a custo class to elements
   * that should be pushed down.
   */
  Drupal.behaviors.openbankDetectMiniBanner = {
    attach: function (context, settings) {
      $(context).find('.small-banner')
        .once('openbank-detect-mini-banner')
        .each(function () {
          $(window).on({
            load: function () {
              var pushedElement = $('[data-pushed-element]');
              var firstPushedElem = pushedElement.first();
              var isHeaderPromotion = $('header').hasClass('header-page--with-promotion');
              if (pushedElement.length === 0) {
                return;
              }
              // Behavior for Product with Promotion
              if (isHeaderPromotion) {
                firstPushedElem.removeClass('pushed-down');
              }
              // This is the default behaviour
              else if (firstPushedElem.attr('data-pushed-element') === 'default') {
                firstPushedElem.addClass('pushed-down');
              }
              // This is the behaviour when is used a large header configuration
              else if (firstPushedElem.attr('data-pushed-element') === 'large') {
                firstPushedElem.addClass('pushed-down--extra');
              }
            }
          });
        });
    }
  };

  /**
   * Behavior on load the page that show the focus in the search input
   * and the click functionality for the same input.
   */
  Drupal.behaviors.openbankFocusInputAnimation = {
    attach: function (context, settings) {
      $(context).find('.product-search__search input[type="search"]')
        .once('openbank-search-animation')
        .each(function () {
          // Save Window scroll position.
          var wX = window.scrollX;
          var wY = window.scrollY;
          // Focus element.
          var scrolled = $(window).scrollTop();
          var windowHeight = $(window).height();
          var offsetTop = $('#product-search').offset().top;

          if (scrolled + windowHeight >= (offsetTop - windowHeight) && (offsetTop - windowHeight <= scrolled + windowHeight)) {
            $('.product-search__search__label').addClass('typewriter-animation');
            $('.product-search__search__label').css('display', 'block');
          }
          // Restore Window scroll position.
          window.scrollTo(wX, wY);
          // Bind event.
          $(this).on('click keyup', function (e) {
            var $page = $('html, body');
            var inputLength = $(this).val().length;

            $page.on('scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove', function () {
              $page.stop();
            });

            $page.animate({
                scrollTop: $(this).offset().top - (okApp.getLoginPosition() + $('.private-menu').outerHeight())
              },
              1000,
              function () {
                $page.off('scroll mousedown wheel DOMMouseScroll mousewheel touchmove');
              }
            );

            if (inputLength > 0) {
              $('.product-search__search__label').css('display', 'none');
            } else if (inputLength === 0) {
              $('.product-search__search__label').css('display', 'block');
            }
          });
        });
    }
  };

  /**
   * This behavior add typewriter and blink effects to product search input.
   */
  Drupal.behaviors.openbankTypewriterAnimationInput = {
    attach: function (context, settings) {
      $(window).once('openbank-typewriter-animation').on('scroll', function () {
        var scrolled = $(window).scrollTop();
        var windowHeight = $(window).height();
        var $productSearch = $('.product-search__search__input');
        $('.product-search__search__label').each(function () {
          var offsetTop = $('#product-search').offset().top;
          if (scrolled >= (offsetTop - (windowHeight - $('.openbank-topbar').outerHeight())) && (scrolled <= (offsetTop + 200)) && $productSearch.val().length === 0) {
            $(this).addClass('typewriter-animation');
          } else if (scrolled > (offsetTop + 200) || scrolled < offsetTop) {
            $(this).removeClass('typewriter-animation');
          }
        });
      });
    }
  };

  /**
   * This behavior add typewriter-animation when the user clear the product search input.
   */
  Drupal.behaviors.openbankProductSearchInput = {
    attach: function (context, settings) {
      var $productSearch = $('.product-search__search__input');
      if ($productSearch.length > 0) {
        $(window).once('#product-search').keyup(function (e) {
          var key = e.keyCode || e.charCode;
          if ((key === 8 || key === 46) && $productSearch.val().length === 0) {
            $('.product-search__search__label').addClass('typewriter-animation');
          }
        });
      }
    }
  };


  /**
   * This behavior force to clear search input and add typewriter-animation
   */
  Drupal.behaviors.openbankSearchClear = {
    attach: function (context, settings) {
      $(context).find('.button--clear')
        .once('openbank-search-clear')
        .each(function () {
          $(this).on('click', function (e) {
            $('.product-search__search__input').val('');
            $('.product-search__search__label').addClass('typewriter-animation').css('display', 'block');
          });
        });
    }
  };

  /**
   * Handle the modal content slide contents
   */
  Drupal.behaviors.promotionModalItems = {
    attach: function (context, settings) {
      $(context).find('.promotion-modal')
        .once('openbank-promotion-modal-items')
        .each(function () {
          var $modal = $('.promotion-modal');
          var $promotionItems = $('.promotion-modal__item');
          $modal.on('shown.bs.modal', function () {
            var $prevButton = $('.promotion-modal__pagination__prev');
            var $nextButton = $('.promotion-modal__pagination__next');
            // Show first promotion modal item
            $promotionItems.first().addClass('show');

            function updateSlideButtons(initial, itemToShow) {
              // Slide Promotion Modal Behavior
              $promotionItems.each(function (index, item) {
                // Add an index to promotion items
                if (initial === true) {
                  $(this).attr('data-index', index);
                  $prevButton.addClass('hide');
                }
                // Show specific slide
                if (itemToShow === index) {
                  $(this).addClass('show');
                }
                // If itemToShow is equal 0 hide prev button
                if (itemToShow === 0) {
                  $prevButton.addClass('hide');
                }
                // if promotion slider does not have more items to show, hide nextButton
                if (($promotionItems.length - 1) === itemToShow) {
                  $nextButton.addClass('hide');
                } else {
                  $nextButton.removeClass('hide');
                }
              });
            }

            // Call function in order to add data-index for promotion item
            updateSlideButtons(true);
            if ($promotionItems.length === 1) {
              $prevButton.addClass('hide');
              $nextButton.addClass('hide');
            }
            $('.promotion-modal__pagination a').on('click', function () {
              var currentItem = $('.promotion-modal__item.show');
              var itemToShow;
              $promotionItems.removeClass('show').addClass('hide');
              // Get current itemToShow when User click prev button
              if ($(this).attr('title') === 'prev') {
                itemToShow = currentItem.data('index') - 1;
                updateSlideButtons(false, itemToShow);

                if (itemToShow === 0) {
                  $nextButton.removeClass('hide');
                }
              }
              // Get current itemToShow when User click next button
              if ($(this).attr('title') === 'next') {
                itemToShow = currentItem.data('index') + 1;
                updateSlideButtons(false, itemToShow);

                if (itemToShow !== 0) {
                  $prevButton.removeClass('hide');
                }
              }
            });
          });
          // When modal event is fired reset modal item behavior
          $modal.on('hidden.bs.modal', function () {
            $('.promotion-modal__pagination a').unbind('click');
            $promotionItems.removeClass('show').addClass('hide');
            $promotionItems.first().removeClass('hide');
          });
        });
    }
  };


  /**
   * Behavior for slideshow initialization and contained video handling.
   */
  Drupal.behaviors.openbankInitializeSliders = {
    attach: function (context, settings) {
      $('.campaign-wrapper', context).once('openbank-initialize-sliders').each(function () {
        var $slider = $(this);
        var slideSpeed = 5000;
        var defaultSlideSpeed = 5000;
        var sliderSettings = {
          arrows: false,
          autoplay: true,
          autoplaySpeed: slideSpeed,
          dots: true,
          fade: true,
          infinite: true,
          mobileFirst: true,
          pauseOnHover: true,
          pauseOnFocus: false,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 1000
        };
        // Check if there is more than one campaign to show and add slider.
        if ($('.campaign-item', $slider).length > 1) {
          // Add an event to play videos after slide change.
          $slider.on('afterChange', function (e, slick, currentSlide) {
            var previousSlide = (currentSlide - 1) < 0 ? 2 : (currentSlide - 1);
            // if the previous slide has video, reset it
            var $previous = $('[data-slick-index="' + previousSlide + '"]', $slider);
            if ($previous.find('video').length) {
              var $video = $previous.find('video').get(0);
              $video.pause();
              $video.currentTime = 0;
            }
          });

          $slider.on('mouseenter', function () {
            if ($('.slick-current', $slider).find('video').length === 0) {
              $(this).addClass('pauseInterval');
            }
          });
          $slider.on('mouseleave', function () {
            if ($('.slick-current', $slider).find('video').length === 0) {
              $(this).removeClass('pauseInterval');
            }
          });
          // Add timers for slides change.
          $slider.on('init beforeChange', function (e, slick, currentSlide, nextSlide) {
            var counter = 0;
            var button;
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            var $video;
            var preloadVideo = function () {
              $video.pause();
              $video.currentTime = 0;
              $video.play();
              var duration = ($video.duration * 1000) + 2000;
              slideSpeed = duration;
              slick.slickSetOption({autoplaySpeed: duration});
            };

            // Get the current button.
            if (e.type === 'init') {
              // force change slide when video was ended
              $.each($slider.find('video'), function () {
                $(this).on('ended', function () {
                  slick.next();
                });
              });
              button = $('.slick-active').find('button').first().get(0);
              // check if the current slide is an video
              if ($('.slick-current', $slider).find('video').length) {
                $video = $('.slick-current', $slider).find('video').get(0);
                preloadVideo();
              }
            } else {
              button = $('#slick-slide0' + nextSlide).find('button')
                .first().get(0);
            }
            // check if there are video on next slide
            var $next = $('[data-slick-index="' + nextSlide + '"]', $slider);
            if ($next.find('video').length) {
              $video = $next.find('video').get(0);
              preloadVideo();
            } else {
              if (e.type !== 'init') {
                slideSpeed = defaultSlideSpeed;
                slick.slickSetOption({autoplaySpeed: slideSpeed});
              }
            }

            // Remove timer from the current slide dot.
            $('#slick-slide0' + currentSlide + ' button svg').remove();
            // Add timer to the next slide dot.
            if (typeof button !== 'undefined') {
              button.appendChild(svg);
              svg.appendChild(path);
              // Run animation.
              setInterval(function () {
                // only run if it hasn't got this class 'pauseInterval'
                if (!$slider.hasClass('pauseInterval')) {
                  var value = counter;
                  value = Math.min(Math.max(value, 0), 99.9);
                  var radius = 10;
                  var x = Math.cos((2 * Math.PI) / (100 / value));
                  var y = Math.sin((2 * Math.PI) / (100 / value));
                  var longArc = (value <= 50) ? 0 : 1;
                  var d = 'M ' + radius + ',' + radius + ' L ' + radius + ',' + 0
                    + ' A' + radius + ',' + radius + ' 0 ' + longArc + ',1 '
                    + (radius + y * radius) + ',' + (radius - x * radius) + ' z';
                  path.setAttribute('d', d);
                  counter += 1;
                }
              }, slideSpeed / 100);
            }
          });
          // Initialize slider.
          $slider.slick(sliderSettings);
          // Send an event to remove the skeleton
          $slider.trigger('slick-initialized');
        }
      });
    }
  };

  /**
   * This behavior provides the ability (cross-browser) to scale a video
   * that has to be displayed as background of a container.
   */
  Drupal.behaviors.openbankBackgroundVideo = {
    attach: function (context, settings) {

      function scaleToFill() {
        $(context).find('.video-background > video').each(function (index, videoTag) {
          var $video = $(videoTag);
          var videoRatio = videoTag.videoWidth / videoTag.videoHeight;
          var tagRatio = $video.width() / $video.height();
          var val;

          if (videoRatio < tagRatio) {
            // Size increased by 2% because value is not fine enough and sometimes leaves a couple of white pixels at the edges.
            val = tagRatio / videoRatio * 1.02;
          } else if (tagRatio < videoRatio) {
            val = videoRatio / tagRatio * 1.02;
          }

          $video.css('transform', 'scale(' + val + ',' + val + ')');
        });
      }

      // Scale videos after page and video content load.
      scaleToFill();
      $(context).find('.video-background > video').on('loadeddata', scaleToFill);

      // Add event to scale videos after each resize.
      $(window).resize(function () {
        scaleToFill();
      });

    }
  };

  /**
   * Behavior that detects (or tries to) the Mobile OS.
   */
  Drupal.behaviors.detectMobileOSAction = {
    attach: function (context, settings) {

      $(context).once('detect-mobile-os-action')
        .each(function () {
          var ua = navigator.userAgent;
          var detectMobileOS = {
            iphone: ua.match(/(iPhone|iPod|iPad)/),
            blackberry: ua.match(/BlackBerry/),
            android: ua.match(/Android/),
            windows: ua.match(/Windows/)
          };

          var detectMobileBrowsers = {
            fullPattern: ua.match(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i),
            shortPattern: ua.match(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i),
            tabletPattern: ua.match(/android|ipad|playbook|silk/i)
          };

          if (detectMobileBrowsers.fullPattern || detectMobileBrowsers.shortPattern || detectMobileBrowsers.tabletPattern) {
            if (!detectMobileOS.windows && !detectMobileOS.blackberry) {
              if (detectMobileOS.android) {
                $('.mobile-app__logo-google').css('display', 'inline-block');
                $('.mobile-app__logo-apple').css('display', 'none');
              } else if (detectMobileOS.iphone) {
                $('.mobile-app__logo-apple').css('display', 'inline-block');
                $('.mobile-app__logo-google').css('display', 'none');
              }
            }
          }
        });
    }
  };

  /**
   * Behavior for slideshow initialization and contained video handling.
   *
   * @TODO: Remove this behavior in favor of changes on hierarchy at CSS.
   */
  Drupal.behaviors.openbankAdjustCampaigns = {
    attach: function (context, settings) {
      $('.campaign', context).once('openbank-adjusts-campaigns').each(function () {
        var $this = $(this);
        var className = $this.closest('.campaign-item').data('campaign-type');
        if (typeof className === 'undefined') {
          className = 'banner';
        }
        $this.addClass('campaign--' + className);
      });
    }
  };

  /**
   * Behavior to hide the promotion aside when there is no icons or cta's to show.
   *
   */
  Drupal.behaviors.openbankCheckPromotionAside = {
    attach: function (context, settings) {
      $('.promotion__aside__container', context).once().each(function () {
        if ($(this).children().length === 0 && $(this).parent().find('.actions a').hasClass('hide')) {
          $(this).closest('.promotion').toggleClass('promotion--full');
        }
      });
    }
  };

  /**
   * Behavior to modify tabs view and functionality from mobile resolution in Faqs block.
   */
  Drupal.behaviors.openbankFaqsTabsAction = {
    attach: function (context, settings) {
      $('.nav-tabs-dropdown').each(function (i, elm) {
        $(elm).text($(elm).next('ul').find('li.active a').text());
      });

      $('.nav-tabs-dropdown').on('click', function (e) {
        e.preventDefault();
        $(e.target)
          .toggleClass('open')
          .next()
          .toggleClass('nav__hidden');
      });

      $('.nav-tabs a[data-toggle="tab"]').on('click', function (e) {
        e.preventDefault();
        $(e.target).closest('ul')
          .prev('a')
          .text($(this).text());

        var breakpoint = window.ResponsiveImages.getBreakpoint();

        if (breakpoint !== 'lg') {
          $(e.target)
            .closest('ul')
            .toggleClass('nav__hidden')
            .prev('a')
            .removeClass('open')
            .text($(this).text());
        }
      });
    }
  };

  /**
   * Behavior to collapse/expanded box in become customer.
   */
  Drupal.behaviors.openbankCustomCollapse = {
    attach: function (context, settings) {
      var initialBreakpoint = window.ResponsiveImages.getBreakpoint();
      // TODO: these options SHOULD BE determined in the context of each
      // custom collapsable group (inside the 'once' iteration)
      var options = $('[data-custom-collapse-options]').data('custom-collapse-options');
      $('[data-custom-collapse]').once('openbank-custom-collapse').on('click', function (event) {
        var breakpoint = window.ResponsiveImages.getBreakpoint();
        var $collapsableContent = $(this).find('.custom-collapse-content');
        // Check if has to be executed in this breakpoint.
        if (options.breakpoints.indexOf(breakpoint) > -1) {
          var elmType = $(this).data('custom-collapse');
          // Toggle collapsable.
          $collapsableContent.toggle();
          // Find another items of the same type and collapse them.
          $('[data-custom-collapse=' + elmType + ']').not(this).find('.custom-collapse-content').hide();
        }
      });
      // FIXME: the binding of events and initial display configuration SHOULD BE
      // determined in the context of each custom collapsable group (inside
      // the 'once' iteration)
      if ($('[data-custom-collapse-options]').length > 0) {
        $(window).on({
          load: function () {
            var breakpoint = window.ResponsiveImages.getBreakpoint();
            if (options.breakpoints.indexOf(breakpoint) === -1) {
              $('.custom-collapse-content').show();
            } else {
              $('.custom-collapse-content').hide();
            }
          },
          resize: function () {
            var breakpoint = window.ResponsiveImages.getBreakpoint();
            if (initialBreakpoint === breakpoint) {
              return;
            }
            if (options.breakpoints.indexOf(breakpoint) === -1) {
              // Show content.
              $('.custom-collapse-content').show();
            } else {
              // Collapse content.
              $('.custom-collapse-content').hide();
            }
            initialBreakpoint = breakpoint;
          }
        });
      }
    }
  };

  /**
   * Behavior to evaluate if is a exteral link and open an aler message.
   */
  Drupal.behaviors.openbakAlertMessage = {
    attach: function (context, settings) {
      var urlsArray = [];
      // TODO: Use a validation on submit for the config form to avoid www in CMS.
      if (drupalSettings.ok_exitmodal) {
        $.each(drupalSettings.ok_exitmodal.settings, function (i, val) {
          var arrItem = val.replace('www.', '');
          urlsArray.push(arrItem);
        });
      }
      var currentDomain = window.location.protocol + '//' + window.location.hostname;
      $('a[href^="http"]:not([href*="' + currentDomain + '"])')
        .once('openbank-alert-message').each(function () {
        $(this).on('click', function (e) {
          if (!okApp.isWhiteListedLink(e.delegateTarget) && !$(this).data('modal-video')) {
            e.preventDefault();
            e.stopPropagation();
            okApp.displayAlertModal($(this).attr('href'), $(this));
          }
        });
      });
    }
  };

  /**
   * Behavior on load and resize to calculate product showcase height and set this height
   * to can use flex properties in desktop resolution.
   */
  Drupal.behaviors.openbankProductShowcaseFlex = {
    attach: function (context, settings) {
      $(window).once('openbank-product-showcase-flex').on('load resize', function () {
        $(context).find('.product-showcase__content').each(function () {
          var breakpoint = window.ResponsiveImages.getBreakpoint();
          if (breakpoint === 'lg') {
            var descriptionHeight = 0;
            var actionsHeight = 0;
            var sidebarHeight = 0;

            if ($(this).find('.product-showcase__content__description').length > 0) {
              descriptionHeight = $('.product-showcase__content__description').outerHeight();
            }
            if ($(this).find('.product-showcase__content__actions').length > 0) {
              actionsHeight = $('.product-showcase__content__actions').outerHeight();
            }
            if ($(this).find('.sidebar').length > 0) {
              sidebarHeight = $('.product-showcase__content__sidebar').outerHeight();
            }
            var containerHeight = descriptionHeight + actionsHeight;
            containerHeight = (containerHeight > sidebarHeight) ? containerHeight : sidebarHeight;
            $(this).css('height', containerHeight + 'px');
          } else {
            $(this).css('height', 'auto');
          }
        });
      });
    }
  };

  /**
   * Behavior on load to build Who we are page through generic page content type (WYSIWYG).
   */
  Drupal.behaviors.openbankBuildWhoWeArePage = {
    attach: function (context, settings) {
      $('.who-we-are', context).once('openbank-build-who-we-are-page')
        .each(function () {
          var $section = $(this);
          // Replace Generic page's section with Who we are's section and header.
          var $underscore_color = $('.generic-page').attr('data-decorative-underscore-color');
          if ($underscore_color !== 'undefined') {
            $section.addClass('decorative-underscore-color--' + $underscore_color);
          }
          $('.generic-page').replaceWith($section);
        });
    }
  };

  /**
   * Behavior on load to build Join up page through generic page content type (WYSIWYG).
   */
  Drupal.behaviors.openbankBuildJoinUpPage = {
    attach: function (context, settings) {
      $('.join-up', context).once('openbank-build-join-up-page')
        .each(function () {
          var $section = $(this);
          $('.generic-page').replaceWith($section);
        });
    }
  };

  Drupal.behaviors.openbankJoinUpFormValidation = {
    attach: function (context, settings) {
      // ApÃºntate form validation
      var $form = $('#join-up-form');
      var $dniField = $('#join-up-dni');
      var $mailField = $('#join-up-mail');
      var $nameField = $('#join-up-name');
      var $return = $('.join-up-return');
      var $submit = $('.join-up-send');
      var $warningMsg = $('.join-up-right__warning');
      var blacklist;
      var countryCode = drupalSettings.path.country_code;
      var mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var dniReg = /^[1-9][0-9]{6,7}$/;
      var promoCode = $('.join-up-right__promo').length !== 0 ? ('&promo_code=' + $('.join-up-right__promo').data('promo')) : '';

      // Function to enable/disable submit button
      var validationProcess = function () {
        var name = $('#join-up-name').val();
        var mail = $('#join-up-mail').val();
        var dni = $('#join-up-dni').val();
        if (!name || !mail.match(mailReg) || !dni.match(dniReg) || grecaptcha.getResponse().length === 0) {
          if (!$submit.hasClass('join-up-send--disabled')) {
            $submit.addClass('join-up-send--disabled');
          }
        } else {
          $submit.removeClass('join-up-send--disabled');
        }
      };

      // Running validation when user checks captcha
      var captchaCheck = function () {
        validationProcess();
      };
      // Disabling submit when reCaptcha expires
      var recaptchaExpired = function () {
        $submit.addClass('join-up-send--disabled')
      };

      window.captchaCheck = captchaCheck;

      window.recaptchaExpired = recaptchaExpired;

      // Running validation when user leaves name field
      $nameField.on('blur', function () {
        validationProcess();
        var name = $('#join-up-name').val();
        if (!name) {
          $nameField.addClass('error');
        } else {
          $nameField.removeClass('error');
        }
      });

      // Running validation when user leaves mail field
      $mailField.on('blur', function () {
        validationProcess();
        var mail = $('#join-up-mail').val();
        if (!mail.match(mailReg)) {
          $mailField.addClass('error');
          $mailField.next().css('display', 'flex');
        } else {
          $mailField.removeClass('error');
          $mailField.next().css('display', 'none');
        }
      });

      // Running validation when user leaves mail field
      $dniField.on('blur', function () {
        validationProcess();
        var dni = $('#join-up-dni').val();
        if (!dni.match(dniReg)) {
          $dniField.addClass('error');
          $dniField.next().css('display', 'flex');
        } else {
          $dniField.removeClass('error');
          $dniField.next().css('display', 'none');
        }
      });
      $dniField.keypress(function (e) {
        var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
        if (verified) {
          e.preventDefault();
        }
      });

      // ApÃºtate form submitting
      $submit.on('click', function (e) {
        e.preventDefault();
        if (!$submit.hasClass('join-up-send--disabled')) {

          blacklist = 0;
          var name = $('#join-up-name').val();
          var mail = $('#join-up-mail').val();
          var dni = $('#join-up-dni').val();
          var joinUpEndpoint = drupalSettings.passport_base_url + '/api/adobe-waiting-list';

          $('.join-up-right__container').hide();
          $('.join-up__spinner').css('display', 'flex');

          var parameters = {
            'name': name,
            'email': mail,
            'nn': dni,
            'country_code': countryCode,
            'blacklist': blacklist
          };

          $.ajax({
            method: 'POST',
            data: JSON.stringify(parameters),
            url: joinUpEndpoint,
            dataType: 'json',
            headers: {
              'Content-Type': 'application/json'
            },
            success: function (data, text, xhr) {
              $('.join-up__spinner').hide();
              if (data.code === 200) {
                $('.join-up-right__success').css('display', 'flex');
              } else if (data.code === 408) {
                $('.join-up-right__server-error').css('display', 'flex');
              } else {
                $('.join-up-right__invalid-token').css('display', 'flex');
              }
            },
            error: function (request, error, xhr) {
              $('.join-up__spinner').hide();
              $('.join-up-right__server-error').css('display', 'flex');
            }
          });
        }
      });

      // Return to first step
      $return.on('click', function (e) {
        $form.trigger("reset");
        $submit.addClass('join-up-send--disabled');
        $('.join-up-right__response').css('display', 'none');
        $('.join-up-right__container').show();
        grecaptcha.reset();
      })
    }
  };

  /**
   * Behavior for swipe slider for any page with "swipe-slider" class for mobile version only.
   * TODO: allow customize which breakpoints shows the slider too
   */
  Drupal.behaviors.openbankSwipeSlider = {
    attach: function (context, settings) {
      $('.swipe-slider', context).once('openbank-swipe-slider').each(function () {
        var wait = ($(this).attr('data-slick')) ? 0 : 300;
        // Functions
        var lazyToggle = _.debounce(function (slider, sliderSettings) {
          okApp.toggleSwipeSlider(slider, sliderSettings);
        }, wait);
        // get slider element
        var $slider = $(this);
        // get paramters from data attributes or default values
        var sliderSettings = okApp.initializeProductSearchSettings($slider);
        // bind events to window onload and resize
        $(window).on({
          load: function () {
            okApp.toggleSwipeSlider($slider, sliderSettings);
          },
          resize: function () {
            lazyToggle($slider, sliderSettings);
          }
        });
        // bind events to who we are section modal, force to update silder container size.
        $('.modal--who-we-are').on('show.bs.modal', function () {
          $(this).find('.arrow-prev').trigger('click');
          var urlReplace = '#';
          history.pushState(null, null, urlReplace);
        });
        // bind events to who we are section modal, return to last position on slider.
        $('.modal--who-we-are').on('hidden.bs.modal', function () {
          $(this).find('.arrow-next').trigger('click');
        });
        // Close modal on back browser button is pressed.
        $(window).on('popstate', function () {
          $('.modal--who-we-are').modal('hide');
        });
      });
    }
  };

  /**
   * Behavior on load that observe if content of Product Search change and call to
   * function that initialize the Slick library.
   */
  Drupal.behaviors.openbankProductSearchSlider = {
    attach: function (context, settings) {
      $('#product-search-results-cards', context)
        .once('openbank-product-search-slider')
        .each(function () {
          var $slider = $(this);
          // create an observer instance to bind change of content in slider
          var observer = new MutationObserver(function (mutations) {
            var sliderSettings = okApp.initializeProductSearchSettings($slider);
            okApp.toggleSwipeSlider($slider, sliderSettings);
          });
          // Pass in the target node, as well as the observer options
          observer.observe($slider[0], {childList: true});
        });
    }
  };

  /**
   * Behavior on load and resize to calculate iframe's height & width for mobile devices
   * in order to be responsive. This behavior applies to Generic page, it can be extended to other content types if required.
   */
  Drupal.behaviors.openbankResponsiveContainer = {
    attach: function (context, settings) {
      var selectors = 'iframe[src*="youtube.com"], iframe[src*="simulatorsjs-testing.azurewebsites.net"]:not([data-simulator="mortgage"])';
      $(selectors, context).once('openbank-responsive-container')
        .each(function () {
          // Search all iframes on actual page and add an specific class on parent element (this avoid conflicts when user add multiple iframes)
          var url = $(this).attr('src');
          if (/youtube.com/.test(url)) {
            $(this).parent().addClass('video-container');
          }
          if (/simulatorsjs-testing.azurewebsites.net/.test(url)) {
            $(this).parent().addClass('simulator-container');
          }
        });
    }
  };

  /**
   * Behavior that detects Campaign cover block and modify the topbar
   * visualization if needed.
   */
  Drupal.behaviors.openbankTopbarDetectCampaignBlock = {
    attach: function (context, settings) {
      $('.openbank-topbar', context)
        .each(function () {
          var $campaign = $('.campaign').first().not('.campaign--product-showcase');
          if ($campaign.hasClass('campaign--cover')) {
            $('body').addClass('with-campaign-cover');
          }
        });
    }
  };

  /**
   * Behavior that makes headers clickable using the call to actions values.
   */
  Drupal.behaviors.openbankHeaderClickable = {
    attach: function (context, settings) {
      $(context).find('.header-clickable')
        .once('openbank-header-clickable')
        .each(function () {
          // Auxiliary functions
          function clickable($header, headerLink) {
            // Stop propagation on breadcrumbs
            $header.find('a.breadcrumb__items__link, .breadcrumb__items__last')
              .each(function () {
                $(this).on('click', function (e) {
                  e.stopPropagation();
                });
              });
            // Disable button click redirect
            $header.find('.button').on('click', function (e) {
              e.preventDefault();
            });
            $header.find('.small-banner__button-slider').on('click', function (e) {
              e.stopPropagation();
            });
            // Add events
            $header.on('mouseover', function () {
              $header.css('cursor', 'pointer');
            })
              .on('click', function (e) {
                var vLink = document.createElement('a');
                var id = $(this).parents('.campaign-item').data('campaign-id');
                vLink.href = headerLink;
                // keep target property
                vLink.target = $(this).find('a.button').prop('target');
                vLink.style.diplay = 'none';
                document.body.appendChild(vLink);

                // If it's not a modal campaign set the link behavior
                var isModalCampaign = $(this).parents('.campaign-item').hasClass('campaign--modal') ? true : false;
                if (!isModalCampaign) {
                  if (!okApp.isWhiteListedLink(vLink)) {
                    okApp.displayAlertModal(headerLink);
                  } else {
                    // check if vLink target is private
                    var privateWebURL = okApp.parseURL(drupalSettings.private_site_url);
                    if (vLink.hostname === privateWebURL.hostname) {
                      okApp.displayAccessModal(vLink);
                    } else {
                      if ($(this).hasClass('promotion-grid__item')) {
                        if (e.target.className !== 'button') {
                          var accionEvento = $(this).find('.title').text();
                          var etiquetaEvento = $(this).find('a.button').text();
                          Drupal.ok_tealium.utagPromotionTracking(accionEvento, etiquetaEvento);
                        }
                      }
                      vLink.click();
                    }
                  }
                } else {
                  $('#modal-video-campaign-' + id).each(function () {
                    var content_youtube = $(this).find('.video-id-campaign');
                    var youtube_id = content_youtube.data('youtube-id');
                    var iframe = okApp.loadYoutubeVideo(youtube_id);
                    content_youtube.html(iframe);
                  }).modal('show');
                }
              });
          }

          function unclickable($header) {
            $header
              .on('mouseover', function () {
                $header.css('cursor', 'default');
              })
              .off('click');
          }

          function setLinktoHeader($header, headerlink) {
            if (typeof headerLink !== 'undefined') {
              clickable($header, headerLink);
              return;
            } else {
              unclickable($this);
            }
          }

          // Make headers clickable on load
          // Get the curreten header-clickable, if it is into a slider gets the current slide with 'slick-current' class
          var $this = $(this);
          var campaignLink = $this.find('.button').attr('href');
          var modalLink = $this.parents('.campaign--modal').data('header-modal-link');
          var dataLink = $this.data('header-link');
          var headerLink;

          // FIXME: please, :(
          headerLink = (typeof campaignLink !== 'undefined') ? campaignLink : headerLink;
          headerLink = (typeof modalLink !== 'undefined') ? modalLink : headerLink;
          headerLink = (typeof dataLink !== 'undefined') ? dataLink : headerLink;

          if (okApp.isValidURL(headerLink)) {
            setLinktoHeader($this, headerLink);
          }
        });
    }
  };

  /**
   * Behavior that add a custom class for p tags on promotion small banner content
   */
  Drupal.behaviors.openbankPromotionSmallBannerTags = {
    attach: function (context, settings) {
      $('.small-banner__button-slider', context)
        .once('openbank-add-class-promotion-small-banner')
        .each(function () {
          if ($(this) && $('.header-page--with-promotion').length) {
            $(this).parents().find('.button').parent().addClass('small-banner--link-wrapper');
          }
        });
    }
  };

  /**
   * Behavior that fired function togglePromotionHeader when small-banner__button-slider button is clicked
   */
  Drupal.behaviors.firedPromotionModal = {
    attach: function (context, settings) {
      $('.small-banner__button-slider', context)
        .once('fired-promotion-modal')
        .each(function () {
          var isHeaderWithPromotion = $(this).parents().hasClass('header-page--with-promotion');
          // Toggle promotion header when promotion button is clicked
          $(this).on('click', function () {
            if (isHeaderWithPromotion) {
              okApp.togglePromotionHeader();
            }
          });
        });
    }
  };

  /**
   * Behavior that handles showing the video modal for onboarding block
   */
  Drupal.behaviors.openbankVideoModal = {
    attach: function (context, settings) {
      $('#modal-video', context)
        .once('openbank-video-modal')
        .each(function () {
          var $parentNode = $('.onboarding-section__footer', context);
          $parentNode.find('[data-modal-video]').on('click', function (e) {
            e.preventDefault();
            $('#modal-video').each(function () {
              var video_id = $(this).find('.video-id-onboarding').data('youtube-id');
              var iframe = okApp.loadYoutubeVideo(video_id);
              $(this).find('.video-id-onboarding').html(iframe);
            }).modal('show');
          });
        });
    }
  };

  /**
   * Behavior that handles showing the video modal for onboarding block
   */
  Drupal.behaviors.openbankFlexibleBlockVideo = {
    attach: function (context, settings) {
      $('.flexible-block .component-video', context)
        .once('openbank-video-flexible-block')
        .each(function () {
          var $self = $(this);
          // Find multimedia container div
          var $multimediaComponent = $(this).parent('.flexible-block__multimedia__component');
          var $multimediaLink = $(this).parent('.flexible-block__multimedia__component')
            .siblings('.flexible-block__multimedia__link');
          // Remove multimedia link when cover isn't selected
          if ($(this).find('.component-video__cover---wrapper').length === 0) {
            // Check target assigned to video on cms admin
            if ($multimediaLink.attr('target') === '_self') {
              $multimediaLink.remove();
              // Active pointer events when multimedia is video
              $multimediaComponent.css('pointer-events', 'all');
            }
          }
          var videoAutoPlay = $(this).attr('data-video-autoplay');
          var autoplay = (videoAutoPlay === 'true') ? '1' : '0';
          var videoId = $(this).attr('data-video-id');
          // Call embed Video function
          var videoUrl = okApp.getEmbedVideo(videoId, autoplay);
          $('.component-video__iframe').attr('src', videoUrl);

          // Play video beahviour- Hide cover image
          function playVideo() {
            if ($multimediaLink.attr('target') === '_self') {
              autoplay = '1';
              var newUrl = okApp.getEmbedVideo(videoId, autoplay);
              $self.find('.component-text---wrapper').hide();
              $self.find('.component-video__cover---wrapper').hide();
              $self.find('.component-video__iframe').attr('src', newUrl);
              $multimediaComponent.css('pointer-events', 'all');
              $multimediaLink.remove();
            }
          }

          // Bind click event to click on multimedia component
          if ($(this).find('.component-video__cover---wrapper').length > 0) {
            $multimediaLink.on('click', playVideo);
          }
        });
    }
  };

  /**
   * Behavior that equal the title height on the product detail for Risk And Advantages Block
   */
  Drupal.behaviors.openbankRiskAnditemTargets = {
    attach: function (context, settings) {
      $('.advantages-and-risk', context)
        .once('openbank-title-product-detail')
        .each(function () {
          var $el = $(this);
          okApp.equalHeightItems($el);
        });
    }
  };

  /**
   * Behavior that add a class when promotion scroll is fired and higher than header height
   */
  Drupal.behaviors.openbankStickyPromotionAside = {
    attach: function (context) {
      $('.promotion', context)
        .once('openbank-sticky-promotion-aside')
        .each(function () {
            // Booleans that control the flow
            var isFixedToHeader = false;
            var isFixedToFooter = false;
            // Get the elements
            var topBar = $('.main-header');
            var headerHero = $('.header-page');
            var promoAside = $('#promotion__aside__wrapper');
            var promotionBlock = $('.promotion__block');
            // Calc the positions and heights
            var promoAsideHeight = parseFloat(promoAside.height());
            var headerHeroHeight = headerHero.outerHeight();
            var promoOrderHeight = $('.promotion---order').outerHeight();
            var fixToFooterLimit = headerHeroHeight + promoOrderHeight - promoAsideHeight + parseInt(promotionBlock.css('marginTop'));
            // Add the scroll listener
            $(window).on('load scroll resize', function (e) {
              // Ignore this on mobile devices
              if (window.ResponsiveImages.getBreakpoint() === 'xs' || window.ResponsiveImages.getBreakpoint() === 'sm') {
                return;
              }
              var headerHeroPosition = okApp.getLoginPosition() + headerHeroHeight;
              var globalScroll = $(window).scrollTop();
              var topBarPosition = topBar.offset().top + okApp.getLoginPosition();
              var promoAsidePositionYTop = promoAside.offset().top;
              var promoAsidePositionX = promoAside.offset().left;
              var deltaDistanceHeader = Math.round(promoAsidePositionYTop - topBarPosition);
              var isNextToHeader = !isFixedToHeader && !isFixedToFooter;
              var isBackToHeader = globalScroll <= headerHeroPosition + parseInt(promotionBlock.css('marginTop'));
              var isNextToFooter = globalScroll >= fixToFooterLimit && isFixedToHeader;
              var isBackToFooter = isFixedToFooter && globalScroll <= fixToFooterLimit;

              if (deltaDistanceHeader <= 0 && window.innerWidth > 576) {
                isNextToHeader && fixToHeader();
                isBackToHeader && unFixToHeader();
                isNextToFooter && fixToFooter();
              } else if (isBackToFooter) {
                fixToHeader();
              }

              function fixToHeader() {
                // These styles are put from JS to superimpose the bootstrap specificity
                promoAside.css({top: okApp.getLoginPosition(), left: promoAsidePositionX, position: 'fixed'});
                isFixedToHeader = true;
                isFixedToFooter = false;
              }

              function unFixToHeader() {
                // These styles are put from JS to superimpose the bootstrap specificity
                promoAside.css({top: 'auto', left: 'auto', position: 'relative'});
                isFixedToHeader = false;
                isFixedToFooter = false;
              }

              function fixToFooter() {
                // These styles are put from JS to superimpose the bootstrap specificity
                promoAside.css({top: promoOrderHeight - promoAsideHeight, left: 'auto', position: 'relative'});
                isFixedToHeader = false;
                isFixedToFooter = true;
              }
            });
          }
        );
    }
  };

  /**
   * Behavior that equal the titles and descriptions height on discount landing
   */
  Drupal.behaviors.openbankDiscountsLandingItems = {
    attach: function (context, settings) {
      $('.discount__category', context)
        .once('openbank-discount-category-items')
        .each(function () {
          var $titles = $(this).find('.title');
          var $descriptions = $(this).find('.description');
          okApp.equalHeightItems($titles);
          okApp.equalHeightItems($descriptions);
        });
    }
  };

  /**
   * Behavior that equal the titles and descriptions height on the contact communications block
   */
  Drupal.behaviors.openbankContactCommunicationsItems = {
    attach: function (context, settings) {
      $('.contact__communications', context)
        .once('openbank-contact-communications-items')
        .each(function () {
          var $titles = $(this).find('.box-grid__item__title');
          var $descriptions = $(this).find('.box-grid__item__text');
          okApp.equalHeightItems($titles);
          okApp.equalHeightItems($descriptions);
        });
    }
  };

  /**
   * Behavior that equal the title height on funds advantages block
   */
  Drupal.behaviors.openbankTitleFundsAdvantages = {
    attach: function (context, settings) {
      $('.funds_advantages, .investment-subhome__description__advantages', context)
        .once('openbank-title-funds-advantages')
        .each(function () {
          var $el = $(this);
          okApp.equalHeightItems($el);
        });
    }
  };

  /**
   * Behavior that equal the title height on relation promotion block
   */
  Drupal.behaviors.openbankRelationPromoItems = {
    attach: function (context, settings) {
      $('.promotion__products', context)
        .once('openbank-title-relation-promotion-item')
        .each(function () {
          okApp.equalHeightItems($(this));
        });
    }
  };

  /**
   * Behavior that handles open modal to show simulator
   */
  Drupal.behaviors.openbankSimulatorsModal = {
    attach: function (context, settings) {
      $('.highlight-bar[data-simulator-embed]', context)
        .once('openbank-simulators-modal')
        .each(function () {
          var $highlightBar = $(this);
          $highlightBar.find('.highlight-bar__alert__text a').on('click', function (e) {
            e.preventDefault();
            var breakpoint = window.ResponsiveImages.getBreakpoint();
            switch (breakpoint) {
              case 'xs':
                // for Mobile...
                var $modal = $('#simulator-modal-' + $highlightBar.attr('id'));
                $modal.find('.modal-body---wrapper').css('max-height', ($(window).height() - 85) + 'px');
                $modal.modal('show');
                break;
              default:
                // Toggle PopUp Desktop
                $highlightBar.find('.highlight-bar__simulator').toggleClass('highlight-bar__simulator--active');
                $highlightBar.find('.highlight-bar__simulator__icon').toggleClass('hidden');
                $highlightBar.find('.inactive, .active').toggleClass('hidden');
                break;
            }
          });
        });
    }
  };


  /**
   * Active auto-scroll when user does click in a FAQ.
   */
  Drupal.behaviors.openbankAutoScrollFaqs = {
    attach: function (context, settings) {
      $('#accordion-how-function', context)
        .find('[data-toggle="collapse"]')
        .on('click', function () {
          var $this = $(this);
          var parent = null;
          var position = null;

          if ($this.hasClass('collapsed')) {
            parent = $this.parents('.showcase-section__container');
            position = parent.offset();

            $('body').animate({
              scrollTop: position.top
            }, 100);
          }
        });
    }
  };

  /**
   * Set the conditions for do a background cover to a bigger height
   * @param  {jQuery_Object} $element       with a background to resize
   * @param  {Object} heights               mobile-first definition for heights, it is of type:
   *                                        {xs: 500, md:700}.
   *                                        If a breakpoint is undefined, it will take the previous number
   * @return {Boolean}                      False is it wasn't able to be applied
   */
  function fitBackground($element, heights) {
    if ($.type($element) !== 'object'
      || $.type(heights) !== 'object'
      || !$element.attr('data-interchange')) {
      return false;
    }
    var imagesString = $element.attr('data-interchange');
    var lastImg = '';
    var images = {};
    var breakpoints = ['xs', 'sm', 'md', 'lg'];
    var lastHeight = $element.height();
    // get source declaration for different breakpoints
    var myRegexp = /\[([^\]]+)\s*,\s*\(\s*(\w+)\s*\)\s*\]/g;
    var segment = myRegexp.exec(imagesString);
    while (segment != null) {
      images[segment[2]] = segment[1];
      segment = myRegexp.exec(imagesString);
    }
    // mobile-first data set
    for (var breakpointsCounter = 0; breakpointsCounter < breakpoints.length; breakpointsCounter++) {
      if (images.hasOwnProperty(breakpoints[breakpointsCounter])) {
        lastImg = images[breakpoints[breakpointsCounter]];
      } else {
        images[breakpoints[breakpointsCounter]] = lastImg;
      }
      if (heights.hasOwnProperty(breakpoints[breakpointsCounter])) {
        lastHeight = heights[breakpoints[breakpointsCounter]];
      } else {
        heights[breakpoints[breakpointsCounter]] = lastHeight;
      }
    }

    /**
     * inner function for asynchronously set background size
     */
    function sizeBackground() {
      var currentBreakPoint = window.ResponsiveImages.getBreakpoint();
      var mockImg = new Image();
      mockImg.src = images[currentBreakPoint];
      $(mockImg).on('load', function () {
        var wImg = this.width;
        var hImg = this.height;
        var wElement = $element.width();
        var relImg = parseInt(wImg) / parseInt(hImg);
        var relRef = parseInt(wElement) / heights[currentBreakPoint];
        var newSide;
        var bgsize;
        if (relImg > relRef) {
          newSide = relImg * heights[currentBreakPoint];
          bgsize = newSide + 'px ' + heights[currentBreakPoint] + 'px';
        } else {
          newSide = wElement / relImg;
          bgsize = wElement + 'px ' + newSide + 'px';
        }
        $element.css('background-size', bgsize);
      });
    }

    // attach behaviors
    $(document).on('ready', sizeBackground);
    $(window).on('resize', sizeBackground);
    return true;
  }

  /**
   * resize background according to the maximum size the block could have
   */
  Drupal.behaviors.callMeBackground = {
    attach: function (context, settings) {
      $('.contact__content', context)
        .once('openbank-call-me-background')
        .each(function () {
          // maximum block height according to breakpoint
          var heights = {
            xs: 945,
            sm: 1005
          };
          fitBackground($(this), heights);
        });
    }
  };

  /**
   * Prevent double click on CMB submit.
   */
  Drupal.behaviors.callMeBackPreventDoubleClick = {
    attach: function (context, settings) {
      $('.contact__content button').one('click', function (event) {
        event.preventDefault();
        var el = $(this);
        el.prop('disabled', true);
        el.text(Drupal.t('Please wait...'));
        setTimeout(function () {
            el.hide();
          },
          2000
        );
      });
    }
  };

  /**
   * Behavior that handles height on description for product subhome cards, biggest height on all description is the final value for all.
   */
  Drupal.behaviors.setEqualHeightProductSubhome = {
    attach: function (context, settings) {
      $('.products-subhome__group__content', context)
        .once('equal-height-product-subhome')
        .each(function () {
          var $el = $(this);
          okApp.equalHeightItems($el);
        });
    }
  };

  /**
   * Behavior that handle "Tealium" required attributes in highlights content
   */
  Drupal.behaviors.openbankDetectHighlights = {
    attach: function (context, settings) {
      $(context).find('.highlights__items')
        .once('openbank-detect-highlights')
        .each(function () {
          $(this).find('a').each(function (index) {
            var highlightItem = this;
            var color = $(highlightItem).css('background-color');
            // TODO: Backend should provide the values required for this implementation in order to apply needed attributes and values through twig files.
            $(highlightItem).attr('data-girobanner-position', index);
            var position_attr = $(highlightItem).attr('data-girobanner-image');
            if (!position_attr) {
              $(this).attr('data-girobanner-image', color);
            } else {
              var img = $(this).find('.card__contents__image').find('img');
              $(img).on('error', function () {
                $(highlightItem).attr('data-girobanner-image', color);
              });
            }
          });
        });
    }
  };

  /**
   * Behavior that handle "Tealium" required attributes in campaigns
   */
  Drupal.behaviors.openbankDetectCampaigns = {
    attach: function (context, settings) {
      $(context).find('.campaign-wrapper')
        .once('openbank-detect-campaigns')
        .each(function () {
          $(this).find('.campaign-item').each(function () {
            var campaingItem = this;
            var img = $(campaingItem).find('.campaign__image img')[0];
            var uri = img.currentSrc;
            if (typeof uri !== 'undefined') {
              var color = $(campaingItem).find('.campaign').css('background-color');
              $(img).on('error', function () {
                $(campaingItem).attr('data-girobanner-image', color);
              });
            }
          });
        });
    }
  };

  /**
   * Behavior that detects device and show banner app when device
   * is mobile
   */
  Drupal.behaviors.openbankGoToApp = {
    attach: function (context, settings) {
      $(context).find('.go-to-app')
        .once('openbank-go-to-app')
        .each(function () {
          var $banner = $(this);
          $banner.on('click', '.go-to-app__content__icon', function (e) {
            e.preventDefault();
            $banner.hide();
          });
          // open login
          $banner.on('click', '.private-access', function (e) {
            e.preventDefault();
            $banner.hide();
            okApp.displayMobileToggleLogin();
          });
        });
    }
  };

  /**
   * Behaviors when modal close.
   */
  Drupal.behaviors.opebankModalClose = {
    attach: function (context, settings) {
      // Run when the modal is closed and has the class youtube-video.
      $('.modal--video').on('hidden.bs.modal', function (e) {
        var youtube_video_id = $(this).find('iframe').attr('id');
        if (typeof youtube_video_id !== 'undefined') {
          $('#' + youtube_video_id).remove();
        }
      });
    }
  };

  /**
   * Behaviors when modal open in about us page.
   */
  Drupal.behaviors.opebankModalAboutUsOpen = {
    attach: function (context, settings) {
      // Run when the modal is closed and has the class youtube-video.
      $('.santander-people__gallery__item, .modal-body__slider__slide').on('click', function (e) {
        var clas = $(this).data('target');
        setTimeout(function () {
          $(clas).find('.swipe-slider--whoweare').slick({
            arrows: true,
            centerMode: false,
            infinite: true,
            initialSlide: 1,
            slidesToShow: 2,
            nextArrow: '<i class="icon-colapsar arrow-next"></i>',
            prevArrow: '<i class="icon-colapsar arrow-prev"></i>'
          });
        }, 500);
      });
    }
  };

  /**
   * Behavior that simulates the pencil icon over portions of the
   * Product Subhome, Investments Subhome and/or Product Sheet
   */
  Drupal.behaviors.contextActionsMenu = {
    attach: function (context, settings) {
      var $context = $(context);

      // Find all elements that require a "Copy ID" function, if any.
      var $elements = $context.find('.context-actions-menu').once('context-actions-menu');
      if ($elements.length === 0) {
        return;
      }

      $elements.each(function (key, element) {
        var $pencilButton = $(element).find('.context-actions-menu__button').once('context-actions-menu__button');
        var $menuActions = $(element).find('.context-actions-menu__links').once('context-actions-menu__links');
        var $parentBlock = $(element).parent();

        $($parentBlock)
          // When click is over the section, show pencil button
          .on('mouseenter', function () {
            $($pencilButton[0]).show();
          })
          // When click is not over the section, hide pencil button and the menu
          .on('mouseleave', function () {
            $($pencilButton[0])
              .removeClass('context-actions-menu__button--open')
              .attr('aria-pressed', 'false')
              .hide();
            $($menuActions[0]).hide();
          })
          // When click is done over the section, close the actions menu
          .on('click', function () {
            $($pencilButton[0])
              .removeClass('context-actions-menu__button--open')
              .attr('aria-pressed', 'false');
            $($menuActions[0]).hide();
          });

        // Add click event to pencil button to open the menu
        $($pencilButton[0]).on('click', function (e) {
          e.stopPropagation();
          $(this)
            .toggleClass('context-actions-menu__button--open')
            .attr('aria-pressed', 'true');
          $($menuActions[0]).toggle();
        });

        // Add click event to menu action to close the menu
        $($menuActions[0]).on('click', function (e) {
          $($pencilButton[0])
            .removeClass('context-actions-menu__button--open')
            .attr('aria-pressed', 'false');
          $(this).hide();
        });

        // Add click event to copy-id element
        $(element).on('click', 'li.copy-id > a', function (e) {
          var $temp = $('<input>');
          $('body').append($temp);
          $temp.val($(this).attr('data-block-id')).select();
          document.execCommand('RemoveFormat');
          document.execCommand('copy');
          $temp.remove();
          return false;
        });
      });
    }
  };

  Drupal.behaviors.scrollLinks = {
    attach: function () {
      var self = this;
      // avoid browser to remember the scroll position before reloading
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      // Captures click events of all <a> elements with href starting with #
      $(document).on('click', 'a[href^="#"]:not(a[href="#"])', function (e) {
        var target = $(this).attr('href');

        // call offsetAnchor if target is a subsection
        if ($(target).data('subsection') === 'subsection') {
          self.offsetAnchor(target);
        }
      });

      // Set the offset when entering page with hash present in the url
      $(window).on('load', function () {
        if (location.hash !== '') {
          self.offsetAnchor(location.hash);
        }
      });

      // offsetAnchor will be called when the hash changes in the window
      window.onhashchange = function () {
        self.offsetAnchor(location.hash);
      };
    },
    // The function actually applying the offset
    offsetAnchor: function (target) {
      // if target doesn't exist, return.
      var $target = $(target);
      if (!$target.length) {
        return;
      }
      // get topbar height
      var topbarHeight = $('.openbank-topbar').outerHeight();

      // get position of the target element
      var pos = $target.offset().top - topbarHeight;

      // scroll to target element
      $('body, html').scrollTop(pos);
    }
  };

  function message_alert() {
    Drupal.Ajax['autologout.getTimeLeft'].autologoutGetTimeLeft(function (time) {
      if (time < 0) {
        alert(Drupal.t('Recuerda que tu sesiÃ³n va a expirar'));
      }
    });
  }

  Drupal.behaviors.autologoutalter = {
    attach: function (context, settings) {
      if (settings.user.uid > 0) {
        var timeout = settings.autologout.timeout / 2;
        setTimeout(message_alert, timeout);
      }
    }
  };

  /**
   * Behavior that moves category content to top of page when click it in menu
   */
  Drupal.behaviors.openbankComparativeCardsTableBehavior = {
    attach: function (context, settings) {
      $(context).find('.table-comparative')
        .once('openbank-comparative-card-table')
        .each(function () {
          var cookies;
          var topbar;
          var adminbar = 0;
          var position;

          // Function to get components height.
          function getContainerHeight(breakpoint) {
            position = breakpoint === 'xs' ? $('.table-comparative--mobile .table-comparative__content').offset() : $('.table-comparative__table').offset();
            cookies = $('#cookies-policy').outerHeight();
            topbar = $('.openbank-topbar').outerHeight();
            adminbar = $('#toolbar-bar').outerHeight() * 2; // The entire administration bar is approximately twice this element, it is not possible to calculate the exact height because at this point the top bar has not been fully loaded.
          }

          // Function to add behaviors to header card when scroll.
          $(window).once('openbank-tc-table-scroll').on('scroll', function () {
            var breakpoint = window.ResponsiveImages.getBreakpoint();
            // Update components height.
            getContainerHeight(breakpoint);
            // Get the maximum limit for header position.
            var limit = position.top - (cookies + topbar + adminbar);
            var $header = breakpoint === 'xs' ? $('.table-comparative__content__card .header') : $('.table-comparative__table__head');
            var scrolled = $(window).scrollTop();
            if (breakpoint === 'sm' || breakpoint === 'md') {
              if (scrolled > limit) {
                $header.addClass('table-comparative__table__head--sticky');
                $header.animate({top: scrolled - limit}, 50);
              } else {
                $header.removeClass('table-comparative__table__head--sticky');
                $header.animate({top: 0}, 50);
              }
            } else if (breakpoint === 'xs') {
              if (scrolled > limit) {
                var headerHeight = $header.height();
                $header.addClass('header--sticky');
                $header.animate({top: scrolled - limit}, 50);
                $('.table-comparative__content__card').css('padding-top', headerHeight);
              } else {
                $header.removeClass('header--sticky');
                $header.animate({top: 0}, 50);
                $('.table-comparative__content__card').css('padding-top', 0);
              }
            } else {
              $header.animate({top: 0}, 50);
              $header.removeClass('table-comparative__table__head--sticky');
              $('.table-comparative__table__column').find('.table-comparative__table__cell').css('margin-top', 0);

              $header.removeClass('header--sticky');
              $('.table-comparative__content__card').css('padding-top', 0);
            }
          });
          // Load and resize actions
          $(window).on({
            resize: getContainerHeight
          });
        });
    }
  };

  /**
   * This behavior apply a blur on search input for IE when this is behind of the topbar
   */
  Drupal.behaviors.openbankBlurOnSearchInput = {
    attach: function (context, settings) {
      $(context).find('.product-search__search input[type="search"]')
        .once('openbank-search')
        .each(function () {
          var ua = window.navigator.userAgent; // get the user agent
          var msie = ua.indexOf('MSIE ');
          var isIexplorer = (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) ? true : false;
          var $productSearch = $('.product-search__search__input');
          if (isIexplorer && $productSearch) {
            $(window).on('scroll', function (e) {
              var scrolled = $(window).scrollTop();
              var loginPosition = okApp.getLoginPosition();
              var limit = $($productSearch).offset().top - loginPosition;
              if (scrolled > limit) {
                $productSearch.blur();
              }
            });
          }
        });
    }
  };

  /**
   * Behavior to close geolocation gdpr message.
   */
  Drupal.behaviors.openbankGeolocationGdpr = {
    attach: function (context, settings) {
      $(context).find('.gdpr-alert--geolocation__close-icon')
        .once('openbank-geolocation-gdpr')
        .each(function () {
          var $closeButton = $(this);
          $closeButton.on('click', function (e) {
            e.preventDefault();
            $('.atms__gdpr-message').remove();
          });
        });
    }
  };

  /**
   * This behavior adjust content with the adjacent block of hihglights block
   */
  Drupal.behaviors.openbankAdjustHighligthsContent = {
    attach: function (context, settings) {
      $('.highlights').once('openbank-adjust-highlights-content').each(function () {
        // get the highligths block.
        var $highlightBlock = $(this);
        $(this).find('.highlights__items--landing_robo, .highlights__items--spin_off')
          .once('openbank-adjust-highlights-content')
          .each(function () {
            // function to adjust content with the next block.
            function adjustContent() {
              var breakpoint = window.ResponsiveImages.getBreakpoint();
              // get the outer block's height.
              var $highlightBlockHeight = $highlightBlock.outerHeight();
              var $OFFSET_FIX = 0;
              var $highlightRoboOffset = 0;
              if (breakpoint !== 'xs') {
                // set the height obtained as a padding top for the container.
                if ($highlightBlock.find('.highlights__items--landing_robo').length) {
                  $OFFSET_FIX = 60;
                } else if ($highlightBlock.find('.highlights__items--spin_off').length) {
                  $OFFSET_FIX = 10;
                }
                $highlightRoboOffset = $highlightBlockHeight - $OFFSET_FIX;
              }
              // set the height obtained as a negative marging bottom for the block.
              $highlightBlock.css('margin-bottom', -$highlightRoboOffset);
              // get the next block's container.
              var $nextBlockContainer = $highlightBlock.parents(':eq(1)').next().find('.container');
              $nextBlockContainer.css('padding-top', $highlightRoboOffset);
              // get the elements of the next block.
              $highlightBlock.parents(':eq(1)').next().find('[data-pushed-down-for-highlights=TRUE]').each(function () {
                $(this).css('padding-top', $highlightRoboOffset);
              });
              // show the highligths block.
              $highlightBlock.show();
            }

            $(window).on('resize load', function (e) {
              adjustContent();
            });
          });
      });
    }
  };

  /**
   * Behavior to show/hide the mobile app buttons depending of operative system.
   */
  Drupal.behaviors.openbankHideMobileAppButton = {
    attach: function (context, settings) {
      $(context).find('.download-platform').once('openbank-hide-mobile-button').each(function () {
        if (okApp.checkPlatformMobile('Android')) {
          $(this).find('a[data-os="ios"]').hide();
        }
        if (okApp.checkPlatformMobile('iOS')) {
          $(this).find('a[data-os="android"]').hide();
        }
        if (okApp.checkPlatformMobile('Windows Phone')) {
          $(this).find('a[data-os="android"]').show();
          $(this).find('a[data-os="ios"]').show();
        }
      });
    }
  };

  Drupal.behaviors.spinOffSlickSlider = {
    attach: function (context, settings) {
      $(context).find('.tabs-section').once('spinoff-slick-slider').each(function () {
        var that = this;

        // Slick carousel created for desktop with custom dots, after breakpoint 768 it unslicks.
        function desktopSlick() {
          var $carousel = $(that).find('.carousel');
          var selectedColor = $carousel.data('active-color');
          $carousel.not('.slick-initialized').slick({
            dots: true,
            slidesToShow: 1,
            infinite: false,
            arrows: false,
            customPaging: function (slider, i) {
              var slide = $(slider.$slides[i]);
              var title = slide.data('label');
              return '<a class="invest__nav__item' + ' invest__nav__item--' + selectedColor + '">' + title + '</a>';
            },
            appendDots: $(that).find('.invest'),
            dotsClass: 'invest__nav invest__nav--' + selectedColor,
            responsive: [
              {
                breakpoint: 768,
                settings: 'unslick'
              }
            ]
          });
        }

        // Two Slick carousel created for mobile that are tied to each other to create tabs as a slider.
        function mobileSlick() {
          $(that).find('.mobile-slick__carousel').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            appendArrows: '.mobile-slick__wrapper',
            prevArrow: '<div class="mobile-slick__icon mobile-slick__icon--prev"><i class="icon-anterior"></i></div>',
            nextArrow: '<div class="mobile-slick__icon mobile-slick__icon--next"><i class="icon-siguiente"></i></div>',
            asNavFor: '.invest__nav',
            mobileFirst: true,
            responsive: [
              {
                breakpoint: 768,
                settings: 'unslick'
              }
            ]
          });
          $(that).find('.mobile-slick .invest__nav').not('.slick-initialized').slick({
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            asNavFor: '.mobile-slick__carousel',
            centerMode: false,
            mobileFirst: true,
            focusOnSelect: true,
            variableWidth: true,
            responsive: [
              {
                breakpoint: 768,
                settings: 'unslick'
              }
            ]
          });
        }

        mobileSlick();
        desktopSlick();
        $(window).on('resize orientationchange', function () {
          desktopSlick();
          mobileSlick();
        });
      });
    }
  };

  /**
   * Behavior to manage slick slider girobox blocks in spinoff/robo landing.
   */
  Drupal.behaviors.spinOffVerticalGirobox = {
    attach: function (context, settings) {
      $('.girobox-section').once('spinoff-vertical-girobox').each(function () {
        var $giroboxSection = $(this);
        $(this).find('.girobox-section__carousel').once('spinoff-vertical-girobox').each(function () {
          var $carousel = $(this);
          var bulletStyle = $giroboxSection.find('.girobox-section__carousel__dots').data('active-color');
          $carousel.slick({
            adaptiveHeight: true,
            appendDots: $giroboxSection.find('.girobox-section__carousel__dots'),
            arrows: false,
            cssEase: 'linear',
            customPaging: function () {
              return '<span class="girobox-section__carousel__dots__nav__item active-item active-item--' + bulletStyle + '"></span>';
            },
            dots: true,
            dotsClass: 'girobox-section__carousel__dots__nav girobox-section__carousel__dots__nav--' + bulletStyle,
            fade: true,
            infinite: false,
            pauseOnHover: true,
            speed: 500,
            verticalSwiping: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  verticalSwiping: false
                }
              }
            ]
          });
          // Change slide when scrolling over the carousel.
          $carousel.on('wheel', function (e) {
            if (e.originalEvent.deltaY < 0) {
              $(this).slick('slickNext');
            } else {
              $(this).slick('slickPrev');
            }
          });
        });
      });
    }
  };

  /**
   * Behavior to add the height in each title card.
   */
  Drupal.behaviors.heightTitleCard = {
    attach: function (context, settings) {
      $(context).find('.cards-block__body')
        .once('height-title-card')
        .each(function () {
          var $selector = $(this);
          $(window).on('load', function () {
            var max = maxHeight($selector);
            $selector.find('.card__title').each(function () {
              var $selectorTitle = $(this);
              $selectorTitle.css('min-height', max);
            });
          });
        });
    }
  };

  /**
   * Behavior to move button edit  Highligths
   */
  Drupal.behaviors.openbankHighligths = {
    attach: function (context, settings) {
      $('.block-highlight').each(function () {
        $('.card__contents').on('mouseenter', function () {
          var widthItems = $('.highlights__items').outerWidth() - 100;
          var heighItems = $('.highlights__items').outerHeight() / 2;
          if ($('.block-highlight').find('.highlights--landing_robo').length) {
            heighItems += 50;
          }
          $('.block-highlight').find('.trigger').addClass('trigger-custom');
          $('.block-highlight').find('.contextual-links').addClass('trigger-custom-ul');
          if ($('.block-highlight').find('.trigger').length) {
            $('.trigger-custom').css('right', widthItems + 'px');
            $('.trigger-custom-ul').css('right', widthItems + 'px');
            $('.trigger-custom').css('top', heighItems + 'px');
            $('.trigger-custom-ul').css('top', (heighItems - 10) + 'px');
          }
        });
        $('.card__contents').on('mouseleave', function () {
          if ($('.block-highlight').find('.trigger-custom').length) {
            $('.block-highlightt').find('.trigger-custom').remove('trigger-custom');
            $('.block-highlightt').find('.trigger-custom-ul').addClass('trigger-custom-ul');
          }
        });
      });
    }
  };

  /**
   * Behavior to show target audience capsule in headers.
   */
  Drupal.behaviors.showTargetAudience = {
    attach: function (context, settings) {
      $('.header-page__target-audience').each(function () {
        var $selectorTargetAudience = $(this);
        var collectiveId = drupalSettings.ok_header_capsule.current_target_audience;

        for (var i = 0; i < collectiveId.length; i++) {
          $selectorTargetAudience.find('.copy-busisness--' + collectiveId[i].value).removeClass('hide');
        }
      });
    }
  };

  /**
   * Behavior to change options select for li.
   */
  Drupal.behaviors.forgotSelect = {
    attach: function (context, settings) {
      $(context).find('.forgot-password---container')
        .once('forgotSelect')
        .each(function () {
          $('.form__field__input__select').each(function () {
            var $this = $(this);
            var numberOfOptions = $(this).children('option').length;
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');
            var $styledSelect = $this.next('div.select-styled');
            var $list = $('<ul />', {
              class: 'select-options'
            }).insertAfter($styledSelect);

            for (var i = 0; i < numberOfOptions; i++) {
              $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
              }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $styledSelect.on('click', function (e) {
              e.stopPropagation();
              $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
              });
              $(this).toggleClass('active').next('ul.select-options').toggle();
            });

            $listItems.on('click', function () {
              $this.val($(this).attr('rel'));
              $list.hide();
            });
          });
        });
    }
  };

  /**
   * Callback fo find the major height of title in block cards.
   *
   * @param {Object}  $selector    The slider selector
   * @return {Integer} max
   */
  function maxHeight($selector) {
    var max = 0;
    var $titleHeight = 0;

    $selector.find('.card__title').each(function () {
      $titleHeight = $(this).height();

      if ($titleHeight > max) {
        max = $titleHeight;
      }
    });
    return max;
  }

  /**
   * Behavior to remove faqs' product localStorage and add devices class when user go to detail faq page.
   */
  Drupal.behaviors.removeProductFaqsLocalStorage = {
    attach: function (context, setting) {
      $('body').once('openbank-product-faqs').each(function () {
        var faqs = drupalSettings.ok_faqs;
        if (!faqs && okApp.getStorageItem('ok_product_faqs')) {
          okApp.removeStorageItem('ok_product_faqs');
        }
        if (faqs && faqs.type === 'detail') {
          $('body').addClass('help--detail-devices');
        } else {
          $('body').removeClass('help--detail-devices');
        }
      });
    }
  };

  /**
   * Behavior utag events when tabs changes in landing promotions and discounts.
   *
   */

  Drupal.behaviors.navegationOfferts = {
    attach: function (context, settings) {
      $('.promotion__nav').each(function () {
        $('.prom-nav').on('click', function () {
          // Building custom Tealium object
          var trackObj = {
            categoriaEvento: 'interaccion en promociones',
            accionEvento: ''
          };

          if ($(this).attr('data-tab') === 'tab2') {
            trackObj.accionEvento = 'cambiar a descuentos';

          } else if ($(this).attr('data-tab') === 'tab1') {
            trackObj.accionEvento = 'cambiar a promociones';
          }
          // Firing tealium data
          Drupal.ok_tealium.utagTracking(trackObj);
        });
      });
    }
  };


  /**
   * Behavior to filter promotion cards by category.
   */
  Drupal.behaviors.promoCardsFilter = {
    attach: function (context, settings) {
      $('.promotion__filter').each(function () {
        $('.promotion__filter--item').on('click', function () {
          $('.promotion-grid__loader').show();
          var categoryValue = $(this).attr('data-filter-category');
          // Active tealium for item filter.
          if (Drupal.ok_tealium) {
            var trackObj = {
              categoriaEvento: 'interaccion en promociones',
              accionEvento: 'cambiar ' + $(this).text()
            };
            Drupal.ok_tealium.utagTracking(trackObj);
          }
          // validating user profile for promotion cases.
          var items = [];
          var clientItems;
          if (okApp.isCustomer()) {
            if (okApp.promotionItems.length > 0) {
              clientItems = okApp.promotionItems;
            } else {
              clientItems = drupalSettings.ok_omnichannel.creativity_client;
              items = filteredOrder(items, true, clientItems);
            }
          } else {
            // Setting order of filtered cards just like default content order
            items = filteredOrder(items, false);
          }
          var $container = $('[data-gtns-segmentation-variant="' + 'promotions_subhome' + '"]');
          $(this).addClass('promotion__filter--active').siblings().removeClass('promotion__filter--active');
          // The id value for 'All' categories is 0
          if (categoryValue === '0') {
            // We render all the new creativities inside drupalSettings.
            Drupal.behaviors.creativityRender.attach($container, drupalSettings, null);
            if ($('[data-creativity-id]').hasClass('promotion-grid--hidden')) {
              $('[data-creativity-id]').removeClass('promotion-grid--hidden');
            }
            $('[data-creativity-id]').addClass('promotion-grid--showed');
            $('.promo-block').show();
            objectFitImages();
          } else {
            var filteredData = [];
            $.each(items, function (index, item) {
              $.each(item.categories, function (key, category) {
                // Validation Category selected.
                var catVal = parseInt(categoryValue);
                if (catVal - category.target_id === 0) {
                  item.id = index;
                  filteredData.push(item);
                }
              });
            });
            if (typeof OkPubComponents !== 'undefined') {
              // each all the creativity in the block.
              $('[data-creativity-id]').each(function (index) {
                var componentName = $(this).attr('data-component-name');
                // If the filtered data exists
                if (filteredData[index]) {
                  // Force id item  to the old creativity.
                  var id = filteredData[index].id;
                  var newId = 'creativity-' + id;
                  $(this).attr('id', newId);
                  var data = filteredData[index];

                  if (filteredData[index]) {
                    // Call the react component.
                    var creativityComponent = new OkPubComponents.default(componentName, data);
                    creativityComponent.render(newId);
                    objectFitImages();
                  }
                  if ($(this).hasClass('promotion-grid--hidden')) {
                    $(this).removeClass('promotion-grid--hidden');
                    $(this).addClass('promotion-grid--showed');
                  }
                } else {
                  // Hide creativity not in filteredData
                  if ($(this).hasClass('promotion-grid--showed')) {
                    $(this).removeClass('promotion-grid--showed');
                  }
                  $(this).addClass('promotion-grid--hidden');
                }
              });
            }
            $('.promo-block').hide();
          }
          setTimeout(function () {
            $('.promotion-grid__loader').hide();
          }, 1500);
        });
      });
    }
  };


  function filteredOrder(itemsData, userClient, clientsData) {
    var creativityIds = [];
    // Creating array of creativity id's
    $.each($('[data-creativity-id]'), function (i, creativity) {
      creativityIds.push(creativity.dataset.creativityId);
    });
    // Using creativity id's array to sort the filtered items
    if (userClient) {
      $.each(creativityIds, function (index, id) {
        $.each(clientsData, function (i, item) {
          if (id === i) {
            itemsData.push(clientsData[id]);
          }
        });
      });
    } else {
      $.each(creativityIds, function (index, id) {
        $.each(drupalSettings.ok_omnichannel.creativity, function (i, item) {
          if (id === i) {
            itemsData.push(drupalSettings.ok_omnichannel.creativity[id]);
          }
        });
      });
    }
    return itemsData;
  };

  // Function to modify related productgrid align.
  // TODO: Remove this function when fix issue on node--product.html-twig (related-content).
  function modifyGrid(elemGrid) {
    var breakpoint = window.ResponsiveImages.getBreakpoint();
    // Implement behavior according to breakpoint
    if (breakpoint === 'sm' || breakpoint === 'md') {
      elemGrid.removeClass('equal-height-center');
    } else {
      elemGrid.addClass('equal-height-center');
    }
  }


  // Function to modify related productgrid align.
  // TODO: Remove this function when fix issue on node--product.html-twig (related-content).
  function modifyGrid(elemGrid) {
    var breakpoint = window.ResponsiveImages.getBreakpoint();
    // Implement behavior according to breakpoint
    if (breakpoint === 'sm' || breakpoint === 'md') {
      elemGrid.removeClass('equal-height-center');
    } else {
      elemGrid.addClass('equal-height-center');
    }
  }

  /**
   * Behavior to adjust related product grid in tablet resolution
   * TODO: Remove this behavior when fix issue on node--product.html-twig (related-content).
   */
  Drupal.behaviors.openbankModifyRelatedProductGrid = {
    attach: function (context, settings) {
      $(context).find('.related-content')
        .once('openbank-modify-related-product-grid')
        .each(function () {
          var $relatedContentList = $(this).find('.related-content__list');
          // Load and resize actions
          $(window).on({
            load: function () {
              modifyGrid($relatedContentList);
            },
            resize: function () {
              modifyGrid($relatedContentList);
            }
          });
        });
    }
  };

})(jQuery, _, Drupal, window.Cookies);
