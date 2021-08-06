/**
 * ContentBerg Theme Utilities
 * 
 * Copyright (c) 2018 ThemeSphere.
 */
var Bunyad_Theme = (function($) {
	"use strict";
	
	var has_touch = false,
		responsive_menu = false,
		search_active = false,
		sticky_bar_active = false
	
	// module
	var self = {
		has_sticky_nav: false,

		init: function() 
		{
			
			// Fit videos to container
			if ($.fn.fitVids) {
				$('.featured-vid, .post-content').fitVids();
			}
			
			// Add overlays to footer instagram
			if ($('.mid-footer .instagram-pics').length) {
				var link = $('.mid-footer .clear a');
				link.addClass('overlay').html('<i class="fa fa-instagram"></i>' + link.text());
			}
			
			// Back to top handler
			$('.back-to-top').on('click', function() {
				
				// Using both html, body until scrollingElement has more support
				$('html, body').animate({scrollTop: 0}, 800);
				return false;
			});
			
			// Go back handler
			$('.go-back').on('click', function() { 
				window.history.back();
				return false;
			});

			// Reflow bug fix for webkit
			var nav = $('.navigation .menu ul').css('-webkit-box-sizing', 'border-box');
			requestAnimationFrame(function() {
				nav.css('-webkit-box-sizing', '');
			});

			/**
			 * Woocommerce
			 */ 
			$('.woocommerce-ordering .drop li a').on('click', function(e) {
				var form = $(this).closest('form');
				
				form.find('[name=orderby]').val($(this).parent().data('value'));
				form.submit();
				
				e.preventDefault();
			});	
			
			$('.woocommerce .related > h2, .woocommerce .upsells > h2')
				.addClass('section-head').wrapInner('<span class="title" />');
			
			// Post ticker
			$('.posts-ticker ul').each(function() {
				
				if (!$(this).find('li.active').length) {
					$(this).find('li:first').addClass('active');
				}
				
				var ticker = $(this);
				
				window.setInterval(function() {
					
					var active = ticker.find('li.active');
					active.fadeOut(function() {
						
						var next = active.next();
						if (!next.length) {
							next = ticker.find('li:first');
						}
						
						next.addClass('active').fadeIn();
						active.removeClass('active');
					});
					
				}, 8000);
			});
			
			// Fix Firefox Bug #1149357
			if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
				
				var logo = $('.logo-image');
				if ($('.logo-image').length) {
					
					// order maters - attach event first
					$('<img />').on('load', function() {
						
						// picked 2x logo? set 1x dimension to prevent firefox overflowing
						if (logo.prop('currentSrc') !== logo.prop('src')) {
							logo.prop('width', $(this)[0].naturalWidth).prop('height', $(this)[0].naturalHeight);
						}
						
					}).attr('src', logo.attr('src'));
				}
			}
			
			/**
			 * Header Parallax - for style 7
			 */
			var header = $('.main-head.top-below .inner'),
				bg = header.css('background-image');
			
			if ($(window).width() > 940 && (bg && bg != 'none')) {
				var parallax = $('<div class="parallax" />').css('background-image', bg);
				header.append(parallax);
				header.css('background-image', 'none');
				
				var bottom = parallax.offset().top + parallax.outerHeight(),
					top = parallax.offset().top;
				
				$(window).on('scroll', function() {
					
					var scroll = $(window).scrollTop();
					
					// Already scrolled enough
					if (scroll > bottom) {
						return;
					}
					
					var distance = scroll * 0.4;
					
					requestAnimationFrame(function() {
						parallax.css('transform', 'translate3d(0,' + distance + 'px, 0)');
					});
				});
			}
			
			// VC Blocks fix
			$('.blocks .block, .blocks .wpb_content_element').last().addClass('last-block');
			
			// Setup search
			this.search();
			
			// Setup all sliders
			this.sliders();

			// Setup mobile & touch navigation
			this.responsive_nav();
			
			// Setup mega menus
			this.mega_menus();
			
			// Setup sticky top-bar
			this.sticky_bar();
			
			// Sticky sidebar
			this.sticky_sidebar();
						
			// Lightbox for images
			this.lightbox();
			
			// Likes system
			this.likes();
			
			// Single post functionality
			this.single();
			
			// Lazyload setup
			this.lazy_load();
			
			// Masonry layouts setup
			this.masonry();
	
			// Pin buttons
			this.pin_it();
		},

		/**
		 * Setup responsive and touch
		 */
		responsive_nav: function()
		{
			// detect touch capability dynamically
			$(window).on('touchstart', function() {
				has_touch = true;
				$('body').addClass('touch');
			});
			
			this.init_responsive_nav();
			this.touch_nav();
			var that = this;

			$(window).on('resize orientationchange', function() {
				that.init_responsive_nav();
			});		
		},
		
		/**
		 * Setup the responsive nav events and markup
		 */
		init_responsive_nav: function() {
			
			if ($(window).width() > 940 || responsive_menu) {
				return;
			}
			
			// Set responsive initialized
			responsive_menu = true;
			
			// Create off-canvas container
			var menu_contain = $('.mobile-menu-container');
			
			// No items for mobile menu? Grab from others
			if (!menu_contain.find('.mobile-menu').children().length) {
				
				// Merge existing menus
				var mobile_menu = menu_contain.find('.mobile-menu'),
				    main_menu = $('.navigation .menu');
				
				var menu = main_menu.children().clone();
				
				if (!main_menu.length) {
					return;
				}
				
				// add category mega menu links
				menu.find('.mega-menu .sub-cats').each(function() {
					var container = $(this).closest('.menu-item');
					
					container.append($(this).find('.sub-nav'));
					container.find('.sub-nav').replaceWith(function() {
						return $('<ul />', {html: $(this).html()});
					});
					
					$(this).remove();
					
				});
				
				mobile_menu.append(menu);
			}
			
			$('body').addClass('nav-off-canvas');
			
			// Setup mobile menu click handlers
			$('.mobile-menu li > a').each(function() {
				
				if ($(this).parent().children('ul').length) {
					$('<span class="chevron"><i class="fa fa-chevron-down"></i></span>').insertAfter($(this));
				}
			});
			
			$('.mobile-menu li .chevron').on('click', function() {
					$(this).closest('li').find('ul').first().parent().toggleClass('active item-active');
					return false;
			});
			
			// Menu open handler
			$('.top-bar .mobile-nav, .main-head .mobile-nav').on('click', function() {
				$('.mobile-menu').addClass('active');
            	$('body').toggleClass('off-canvas-active');
            	$('html').toggleClass('hide-scroll');
			});
			
			// Off-canvas close
			$('.off-canvas .close').on('click', function() {
				$('body').toggleClass('off-canvas-active');
			});
		},

		/**
		 * Setup touch for touch devices
		 */
		touch_nav: function() {
			
			var targets = $('.menu:not(.mobile-menu) a'),
				open_class = 'item-active',
				child_tag = 'ul, .mega-menu';
			
			targets.each(function() {
				
				var $this = $(this),
					$parent = $this.parent('li'),
					$siblings = $parent.siblings().find('a');
				
				$this.on('click', function(e) {
					
					if (!has_touch) {
						return;
					}
					
					var $this = $(this);
					e.stopPropagation();
					
					$siblings.parent('li').removeClass(open_class);
					
					// has a child? open the menu on tap
					if (!$this.parent().hasClass(open_class) && $this.next(child_tag).length > 0 && !$this.parents('.mega-menu.links').length) {
						e.preventDefault();
						$this.parent().addClass(open_class);
					}
				});
			});
			
			// close all menus
			$(document).on('click', function(e) {
				if (!$(e.target).is('.menu') && !$(e.target).parents('.menu').length) {
					targets.parent('li').removeClass(open_class);
				}
			});
		},
		
		/**
		 * Search setup
		 */
		search: function() 
		{
			// Nav search overlay
			$('.main-head.has-search-overlay .search-link').on('click', function() {
				
				var overlay = $(this).parent().find('.search-box-overlay');
				
				search_active = true;
				if (overlay.hasClass('active')) {
					search_active = false;
				}
				
				overlay.toggleClass('active');
				
				return false;
			});
			
			// Search bar for alt header
			var search_active_alt = false;
			$('.search-alt .top-bar .search-submit').on('click', function() {
				if (!search_active_alt) {
					$(this).closest('form').find('.search-field').addClass('active').focus();
					search_active_alt = true;
					
					return false;
				} 
			});
			
			// Hide search on outside clicks
			$(document).on('click', function(e) {
				if (search_active && !$(e.target).parents('.search-box-overlay').length) {
					$('.main-head.has-search-overlay .search-link').click();
				}
				
				// Hide alt header search
				if (search_active_alt && !$(e.target).parents('.top-bar').length) {
					search_active_alt = false;
					
					$('.main-head.search-alt .search-submit')
						.closest('form').find('.search-field').removeClass('active');
				}
			});

			// Search modal
			$('.main-head.has-search-modal .search-link').magnificPopup({
				items: {
					src: '.search-modal-wrap',
					type: 'inline'
				},
				removalDelay: 400,
				focus: 'input',
				closeBtnInside: false,
				closeOnBgClick: false,
				mainClass: 'search-modal',
				midClick: true,
				fixedContentPos: true,
				autoFocusLast: false
			}); 
		},
		
		/**
		 * Mega Menus
		 */
		mega_menus: function()
		{
			// Bind events for mega menus
			$('.navigation .mega-menu').each(function() {
				
				var menu = $(this),
				    number = 4;
				
				if (menu.find('.one-fifth').length) {
					number = 5;
				}
				
				var slick_vars = {
					draggable: false,
					infinite: true,
					slidesToShow: number,
					slidesToScroll: number,
					arrows: false
				};
				
				// Helper to re-init
				var slick_init = function(posts) {
					if (!posts.hasClass('slick-initialized')) {
						posts.slick(slick_vars);
					}
					// Race condition? Might have calculated while hiding - recalc pos
					else if (posts.find('.slick-track').width() == 0) {
						posts.slick('setPosition');
					}
				};
				
				// Init mega menus
				var default_mega_menu = function f() {
					slick_init( menu.find('.posts').last().addClass('active') );
					return f;
				}();

				// Mega-menu sub-cats handling
				menu.find('.menu-item').on('mouseenter', function() {

					var id = parseInt( $(this).attr('class').match(/menu-cat-(\d+)/)[1] || 0 ),
					    menu = $(this).parents('.mega-menu'),
					    view_all = $(this).hasClass('view-all');
				
					if (!view_all && !id) {
						return;
					}
					
					// remove other actives
					menu.find('.active, .current-menu-item').removeClass('active current-menu-item');

					// activate current
					$(this).addClass('current-menu-item');
					var posts = menu.find('[data-id=' + id + ']').addClass('active');
				
					slick_init(posts);
					
					if (posts.find('.post').length < 5) {
						posts.parent().find('.navigate').hide();
					}
					else {
						posts.parent().find('.navigate').show();
					}
					
					return false;
				});
				
				// Reset mega menu state on fresh hover
				menu.parent().on('mouseenter', function() {
					
					var menu = $(this).find('.mega-menu');
					
					// reset at beginning
					menu.find('.active, .current-menu-item')
						.removeClass('active current-menu-item');

					$(this)[0].offsetWidth; // reflow
					default_mega_menu();
				});
				
			});
			
			// Mega menu pagination
			$('.mega-menu .show-next, .mega-menu .show-prev').on('click', function() {
				
				var current = $(this).parents('.mega-menu').find('.posts.active'),
				    action  = $(this).hasClass('show-prev') ? 'slickPrev' : 'slickNext';
				
				current.slick(action);
				
				return false;
			});	
		},

		/**
		 * Setup sticky bar if enabled
		 */
		sticky_bar: function()
		{
			var nav,
			    top_bar = $('.top-bar-content'),
			    is_smart = false,
			    is_sticky = false,
			    is_static = false,
			    prev_scroll = 0,
			    cur_scroll = 0,
			    extra_top = 0,
			    nav_top,
			    hide_at,
				head = $('.main-head'),
				head_height;
			

			// Set height for container
			var set_size = function(skip_calc) {
				
				// Don't reset if it's stuck
				if (sticky_bar_active) {
					return;
				}

				// Skip calculation if asked to and head height has been prev set
				if (skip_calc && head_height) {
					return;
				}

				// in raf to throttle resize events
				requestAnimationFrame(function() {
					var new_height = head.css('min-height', 0).height();
					head.css('min-height', new_height);
					head_height = new_height;
				});
			};
			
			$(window).on('load resize', set_size);
			
			var init = function() {
				
				// Reset vars - might be a re-init
				is_static = false;

				// Is smart?
				var check_smart = function() {

					// Enable smart at responsive
					if ($(window).width() < 940) {
						is_smart = true;
					}
					else {
						is_smart = false;
					}

					if (nav && nav.data('sticky-bar') == 'smart') {
						is_smart = true;
					}
				};
				
				if ($('.admin-bar').length) {
					extra_top = $('#wpadminbar').height();
				}
				
				// Target sticky based on header layout
				if (head.is('.nav-below, .top-below')) {
					
					// Top bar below or nav-below-logo types
					nav = head.hasClass('nav-below') ? $('.navigation.below') : top_bar;
					
					nav_top = nav.offset().top - extra_top;
					hide_at = nav_top + 1;
				}
				// Compact has a sticky topbar configured below
				else if (head.is('.simple') || (head.is('.compact') && $(window).width() >= 940)) {
					
					// Top bar below or nav below logo types
					nav = head.find('.inner').first();
					check_smart();
					
					nav_top = head.offset().top + (head.height()/2) - extra_top;
					hide_at = nav_top + 200;

					if (is_smart) {

						// For performance
						var parallax = $('.single-creative .featured');
						if (parallax.length) {
							hide_at  = nav_top;
							nav_top += parallax.height();
						}
					}

				}
				else if (top_bar.length) {
				
					nav = top_bar;
					check_smart();

					// static sticky via CSS unless it's smart sticky
					if (!is_smart && top_bar.data('sticky-bar')) {
						top_bar.addClass('sticky-bar');
						is_static = true;
					}
					
					// default 
					var pos_ele  = $('.top-bar');
					
					nav_top  = pos_ele.offset().top - extra_top,
					hide_at  = nav_top + 1;
				}

				check_smart();

				// Android fix on addr bar hide
				if (is_smart && !sticky_bar_active) {
					prev_scroll = 0;
				}
			};
			
			// Init and calculate defaults
			init();
			
			if (!nav) {
				return;
			}
			
			// not enabled?
			if (!nav.data('sticky-bar')) {
				return;
			}
		
			self.has_sticky_nav = true;
			
			if (nav.find('.sticky-logo').length) {
				nav.addClass('has-logo');
			}
			
			// disable the sticky nav
			var remove_sticky = function() {
				
				// check before dom modification 
				if (is_sticky) {
					
					sticky_bar_active = 0;
					nav.removeClass('sticky-bar');
					set_size(true);
					
					$(document).trigger('sticky-bar-hide');
				}
			};
			
			// Check and apply sticky - separated writes
			var sticky_writes = writeRaf(function() {
				
				// make it sticky when viewport is scrolled beyond the navigation
				if (cur_scroll > nav_top) {
					
					// for smart sticky, test for scroll change
					if (is_smart && (!prev_scroll || cur_scroll > prev_scroll)) {
						remove_sticky();
					}
					else {
						sticky_bar_active = 1;
						
						if (!is_smart || cur_scroll < prev_scroll-4) {

							if (!nav.hasClass('sticky-bar')) {
								nav.addClass('sticky-bar no-transition');
							
								setTimeout(function() { 
									nav.removeClass('no-transition'); 
								}, 100);
								
								$(document).trigger('sticky-bar-show');
							}
						}
					}
					
					prev_scroll = cur_scroll;
					
				} else {
					
					// hide at a certain point
					if (cur_scroll <= hide_at) {
						prev_scroll = 0;
						remove_sticky();
					}
				}
			});
			
			// Make the nav sticky
			var sticky = function() {

				if (!nav.data('sticky-bar') || is_static) {
					return;
				}

				cur_scroll = $(window).scrollTop();
				is_sticky  = nav.hasClass('sticky-bar');
				
				sticky_writes();
			};

			sticky();

			$(window).on('scroll', function() {
				sticky();
			});
			
			// Re-initialize on resize
			$(window).on('resize orientationchange', function() {
				init();
				sticky();
			});
		},
		
		/**
		 * Setup sticky sidebar
		 */
		sticky_sidebar: function() 
		{
			
			// Sidebar class on the widget element? Move it up
			$('.main .sidebar').each(function() {
				if ($(this).hasClass('wpb_content_element')) {
					var parent = $(this).closest('.wpb_column'),
						classes = 'sidebar';
					
					if ($(this).hasClass('sticky-col')) {
						classes += ' sticky-col';
					}
					
					parent.addClass(classes);
					$(this).removeClass(classes);
				}
			});
			
			var sticky = $('.main .sticky-col, .main .sidebar[data-sticky=1]');
			
			if (!sticky.length) {
				return;
			}
			
			var add = 20;
			if ($('.admin-bar').length) {
				add += 32;
			}
			
			if (self.has_sticky_nav) {
				add += 50;
			}
			
			sticky.each(function() {
			
				var parent_col = $(this);
				
				// Add wrapper class if missing
				if (!parent_col.find('.theiaStickySidebar').length) {
					parent_col.find('.wpb_wrapper').first().addClass('theiaStickySidebar');
				}
				
				parent_col.theiaStickySidebar({
					minWidth: 940, 
					updateSidebarHeight: false,
					additionalMarginTop: add
				});
			});
			
			// for iframe loads in sidebar
			$(window).on('load', function() {
				setTimeout(function() {
					$(window).trigger('resize.TSS');
				}, 2500);
			});
		},
		
		/**
		 * Single post functionality
		 */
		single: function()
		{
			if (!$('body').hasClass('single-post')) {
				return;
			}

			/**
			 * Social sharing
			 */
			// Single top social sharing view all buttons
			$('.post-share-b .show-more').on('click', function() {
				$(this).parent().addClass('all');
				return false;
			});

			// Setup floating share
			Bunyad_Share_Float.init();
			
			// Paralax for creative
			var creative = $('.single-creative .featured');
			if (creative.length) {

				var img = creative.find('.wp-post-image'),
				    src = img.prop('src');
				
				if (img.prop('currentSrc')) {
					src = img.prop('currentSrc');
				}
				
				if ($(window).width() < 940) {
					creative.removeClass('parallax');
					return;
				}
				
				creative.addClass('parallax');
				creative.find('.image-link').jarallax({	
					imgSrc: src,
					speed: 0.4,
					noIos: false
				});
			}

			$(window).on('resize', this.post_navigation);
			this.post_navigation();
			
		},
		
		/**
		 * Post Naviation
		 */
		post_navigation: function() 
		{
			var initialized = false,
			    post_nav = $('.post-nav');
			
			if (!post_nav.length || $(window).width() < 1300) {
				post_nav.removeClass('post-nav-float').addClass('post-nav-inline');
				return;
			}
			
			// Already setup or shouldn't be init?
			if (initialized) {
				return;
			}
			
			initialized = true;
			post_nav.addClass('post-nav-float');
			post_nav = post_nav.find('.post');

			if ($('.has-share-float').length) {
				post_nav.addClass('ss-overlap');
			}
			
			// Show when post-content is in viewport and hide when footer 
			// becomes visible in view. 
			var ele = $('.the-post .post-content'), 
				scroll, offset, win_height, show_at, hide_at;
				
			var calc = function() {
			    offset     = ele.offset();
				win_height = $(window).height();

			    show_at = offset.top + (win_height / 2) + 56;
			    hide_at = $('.main-footer').offset().top + (win_height / 3);
			};

			calc();
			self._wait_load(calc, {'ready': true});

			// Lazyload fires this
			$(window).on('resize.TSS', calc);
			
			// Show at certain scroll
			$(window).on('scroll', function() {
				
				if ($(window).width() < 940) {
					return;
				}
				
				// Add viewport height to scrollTop
				scroll = $(window).scrollTop() + win_height;
				
				requestAnimationFrame(function() {
					if (scroll > show_at && scroll < hide_at) {
						
						if (!post_nav.hasClass('active')) {
							post_nav.addClass('active');
						}
					}
					else {
						post_nav.removeClass('active');
					}
				});
			});
		},
		
		/**
		 * Util to wait for until async CSS has been applied - waits for async font load
		 * too by default.
		 */
		_wait_load: function(cb, options) {

			options = $.extend({
				'fonts': true,
				'ready': false
			}, options);

			var sel = options.fonts ? '.wf-loading, .ld' : '.ld';

			if ($('html').is(sel) || (options.ready && document.readyState !== 'complete')) {
				setTimeout(
					self._wait_load.bind(null, cb, options), 
					30
				);
			}
			else {
				cb();
			}
		},
		
		/**
		 * Setup sliders and carousels
		 */
		sliders: function()
		{
			/**
			 * Parallax extend 
			 */
			if (window.jarallax) {
				var Jarallax = window.jarallax.constructor;
				var orig = Jarallax.prototype.onScroll;
				Jarallax.prototype.onScroll = function(force) {
					
					if (!force) {
						var ele = $(this.options.elementInViewport);
						if (ele && ele.data('active-only') && !ele.is('.slick-active, .active')) {
							return;
						}
					}
					
					orig.apply(this, arguments);
				};
			}
			
			// Enable parallax
			var add_parallax = function(slider, parallax_one) {
				
				var do_parallax = function() {
					
					if ($(window).width() < 940) {
						slider.removeClass('parallax');
						return;
					}
				
					slider.addClass('parallax');
					
					var slides = slider.find('.slick-slide');
	
					if (slider.parent().is('.grid-slider, .grid-b-slider')) {
						slides = slider.find('.item-large, .item-small').find('.image-link');
					}
					
					slides.each(function() {
						
						var img = $(this).find('img'),
						    src = img.prop('src');
						
						if (img.prop('currentSrc')) {
							src = img.prop('currentSrc');
						}
						
						if (parallax_one) {
							$(this).data('active-only', true);
						}
						
						$(this).jarallax({	
							//imgSrc: src,
							imgElement: '.wp-post-image',
							keepImg: true,
							speed: 0.6,
							elementInViewport: parallax_one ? $(this) : $(this).closest('.slick-slider'),
							noIos: false,
							onInit: function() {
								$(this.image.$item).removeClass('wp-post-image');
							}
						});
					});
				};
				
				$(window).on('resize', do_parallax);
				do_parallax();
			};
			
			/**
			 * Slider setup object
			 */
			var setup = {};

			/**
			 * Main featured post slider
			 */
			setup.main_slider = function(slider) {
				
				slider.slick({
					centerMode: true,
					variableWidth: true,
					slidesToShow: 1,
	            	slidesToScroll: 1,
					autoplay: slider.data('autoplay') ? true : false,
					autoplaySpeed: slider.data('speed'),
					arrows: true,
					prevArrow: '<a href="#" class="prev-arrow"><i class="fa fa-angle-left"></i></a>',
					nextArrow: '<a href="#" class="next-arrow"><i class="fa fa-angle-right"></i></a>',
					touchThreshold: 50,
					dots: false,
					infinite: true,
					responsive: [{
						breakpoint: 940,
						settings: {
							slidesToShow: 1,
							centerMode: false,
							variableWidth: false
						}
					}]
				});
				
				// Arrow positions
				slider.on('setPosition', function() {
					
					// not for responsive
					if ($(window).width() < 940) {
						return;
					}
					
					var center = $(this).find('.slick-active.slick-center'),
						pos   = center.offset(),
						right = pos.left + center.width();
					
					$(this).find('.prev-arrow').css('left', pos.left + 'px');
					$(this).find('.next-arrow').css('left', right + 'px');
				});
				
				slider.find('[data-slick-index=0]').addClass('active');
				
				// Force our active class by first removing it from clones
				slider.on('beforeChange', function(e, slick, prev, current) {
					
					$(this).find('.active').removeClass('active');
					var ele = $(this);
					
					requestAnimationFrame(function() {
						ele.find('[data-slick-index=' + current + ']').addClass('active');
					}, 1);
				});
				
			}; // main slider

			/**
			 * Fashion Slider
			 */
			setup.fashion_slider = function(slider, vars) {

				slider.on('init', function(e, slick) {
					self._wait_load(function() {
						$(slick.$slides[0]).addClass('active');
					});
				});

				slider.slick($.extend(vars, {
					arrows: true,
					infinite: true,
					cssEase: 'cubic-bezier(0.4, 0.03, 0, 0.83)',
					speed: 700
				}));

				slider.on('beforeChange', function(e, slick, prev, current) {
					var ele = $(this);

					requestAnimationFrame(function() {

						ele.find('.active').removeClass('active');
						ele.find('[data-slick-index=' + current + ']').addClass('active');
						
					});
					
				});
			};
			
			/**
			 * Carousel Slider
			 */
			setup.carousel_slider = function(slider, vars) {
				
				slider.slick($.extend(vars, {
					arrows: true,
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					cssEase: 'ease-out',
					speed: 500,
					responsive: [
						{
							breakpoint: 940,
							settings: {slidesToShow: 2, slidesToScroll: 2}
						},
						{
							breakpoint: 600,
							settings: {slidesToShow: 1, slidesToScroll: 1}
						}
					]
				}));
			};
			
			// Bold slider
			setup.bold_slider = function(slider, vars) {
				
				slider.on('init', function(e, slick) {
					self._wait_load(function() {
						$(slick.$slides[0]).addClass('active');
					});
				});
				
				//var slick = instance.get(0).slick;
				slider.slick($.extend(vars, {
					arrows: true,
					infinite: true,
					cssEase: 'ease-in-out',
					speed: 500
				}));

				var nav = slider.parent().find('.post-thumb');
				
				slider.on('beforeChange', function(e, slick, prev, current) {
					
					// Current nav thumb to activate
					nav.eq(current).click();
					
					var ele = $(this);
					ele.find('.active').removeClass('active');
					
					requestAnimationFrame(function() {
						ele.find('[data-slick-index=' + current + ']').addClass('active');
					});
					
				});
				
				// Sync slider with navigation
				nav.first().addClass('active');
				nav.on('click', function() {
					var index = $(this).index();
					
					$(this)
						.addClass('active')
						.siblings().removeClass('active');
					
					slider.slick('slickGoTo', index);
					
					return false;
				});
			};
			
			
			/* Initialize home sliders */
			$('.common-slider .slides').each(function() {
			
				var slider = $(this).one('init', function() {
					$(this).addClass('loaded');
				});
				
				// Common setting
				var vars = {
					prevArrow: '<a href="#" class="prev-arrow"><i class="fa fa-angle-left"></i></a>',
					nextArrow: '<a href="#" class="next-arrow"><i class="fa fa-angle-right"></i></a>',
					autoplay: slider.data('autoplay') ? true : false,
					autoplaySpeed: slider.data('speed'),
					fade: slider.data('animation') == 'fade' ? true : false
				};
				
				var parallax = slider.data('parallax') || 0,
					parallax_one,
					slider_type = slider.data('slider');
				
				switch (slider_type) {					
					
					case 'carousel':
						setup.carousel_slider(slider, vars);
						break;
						
					case 'bold':
						setup.bold_slider(slider, vars);
						parallax_one = 1;
						break;
						
					default:

						var fn = setup[slider_type + '_slider'];
						if (typeof fn === 'function') {
							fn(slider, vars);
						}
						else {
							setup.main_slider(slider);
						}

						break;
				}
				
				// Has Parallax effect?
				if (parallax) {
					
					// One active slide only to parallax
					if (parallax_one) {
						slider.on('beforeChange', function(e, slick, prev, current) {
							$(this).find('.active').removeClass('active');
							var slide = $(this).find('[data-slick-index=' + current + ']');
							
							slide.addClass('active');
							slide.jarallax('onScroll');
						});
					}
					
					add_parallax(slider, parallax_one);
				}

			});

			this.post_gallery_slider();
			$(document).on('ajax-pagination', this.post_gallery_slider);
			
			/**
			 * Widget: Posts slider
			 */
			$('.widget-slider .slides').each(function() {
				$(this).slick({
					prevArrow: '<a href="#" class="prev-arrow"><i class="fa fa-angle-left"></i></a>',
					nextArrow: '<a href="#" class="next-arrow"><i class="fa fa-angle-right"></i></a>',
					autoplay: $(this).data('autoplay') ? true : false,
					autoplaySpeed: 6000,
					infinite: true
				});
			});
			
			// Disable anchor jump on arrows
			$('.common-slider, .widget-slider').on('click', '.slick-arrow', function(e) {
				e.preventDefault();
			});
			

			// polyfill check for outdated browsers
			var fit_images = $('.large-slider img, .fashion-slider img, .widget-slider .wp-post-image, .bold-slider img');
			
			if (fit_images.length) {
				objectFitImages(fit_images);
			}
		},

		/**
		 * Posts featured gallery slider
		 */
		post_gallery_slider: function(e) {

			$('.gallery-slider:not(.slick-initialized)').each(function() {

				var slider = $(this);

				var init = function() {
					
					var vars = {
						infinite: true,
						slidesToShow: 1,
						prevArrow: '<a href="#" class="prev-arrow"><i class="fa fa-angle-left"></i></a>',
						nextArrow: '<a href="#" class="next-arrow"><i class="fa fa-angle-right"></i></a>',
						slidesToScroll: 1,
						adaptiveHeight: true
					};
					
					var parent = slider.closest('.single-creative .featured'),
						parallax;
					
					if (parent.length) {
						
						parent.addClass('has-gallery');
						slider.addClass('gallery-slider-lg');
						
						vars = $.extend(vars, {
							variableWidth: true,
							centerMode: true,
							adaptiveHeight: false,
							responsive: [{
								breakpoint: 940,
								settings: {centerMode: false, variableWidth: false}
							}]
						});
						
					}
					
					slider.slick(vars);
					!parallax || add_parallax(slider);
				};

				if (e) {
					slider.imagesLoaded(init);
				}
				else {
					init();
				}

			});
		},
		
		/**
		 * Setup Likes system
		 */
		likes: function()
		{
			if (typeof Sphere_Plugin == 'undefined') {
				return;
			}
			
			$('.likes-count').on('click', function() {
				
				var like = $(this);
				
				if (like.hasClass('voted')) {
					return false;
				}
				
				// Register the vote!
				$.post(Sphere_Plugin.ajaxurl, {action: 'sphere_likes', id: $(this).data('id')}, function(data) {
					
					if (data === Object(data)) {
						like.addClass('voted animate').find('.number').html(data.count);
					}
					
				}, 'json');
				
				return false;
				
			});
		},
		
		/**
		 * Setup Lightbox
		 */
		lightbox: function() 
		{
			// disabled on mobile screens
			if (!$.fn.magnificPopup || $(window).width() < 768 || !$('body').hasClass('has-lb')) {
				return;
			}

			// filter to handle valid images only
			var filter_images = function() {
				
				if (!$(this).attr('href')) {
					return false;
				}
				
				return $(this).attr('href').match(/\.(jpe?g|png|bmp|gif)($|\?.+?)/); 
			};	
			
			var mfp_init = {
				type: 'image',
				tLoading: '',
				mainClass: 'mfp-fade mfp-img-mobile',
				removalDelay: 300,
				callbacks: {
					afterClose: function() {
						if (this._lastFocusedEl) {
							$(this._lastFocusedEl).addClass('blur');
						}
					}
				}
			};
			
			/**
			 * Handle Galleries in post
			 */
			
			var gal_selectors = '.gallery-slider, .post-content .gallery, .post-content .blocks-gallery-item, .post-content .tiled-gallery';
			
			// filter to only tie valid images
			$(gal_selectors).find('a').has('img').filter(filter_images).addClass('lightbox-gallery-img');
			
			// Add WooCommerce support
			$('.woocommerce a[data-rel^="prettyPhoto"], a.zoom').addClass('lightbox-gallery-img');
			gal_selectors += ', .woocommerce .images';
			
			// attach the lightbox as gallery
			$(gal_selectors).magnificPopup($.extend({}, mfp_init, {
				delegate: '.lightbox-gallery-img',
				gallery: {enabled: true},
				image: {
					titleSrc: function(item) {
						var image = item.el.find('img'), 
						    caption = item.el.find('.caption').html();
						
						return (caption || image.attr('title') || ' ');
					}
				}
			}));
			
			// Non-gallery images in posts
			var selector = $('.post-content, .main .featured, .single-creative .featured')
				.find('a:not(.lightbox-gallery-img)').has('img');
			
			selector.add('.post-content, .main .featured, .lightbox-img')
				.filter(filter_images)
				.magnificPopup(mfp_init);
		},
		
		/**
		 * Pinterest Pin It
		 */
		pin_it: function()
		{	
			var button = $('body .pinit-btn'),
				the_button = button.prop('outerHTML'),
			    index = 1;
			
			// Only proceed if non-touch device and button exists
			if (has_touch || !the_button) {
				return;
			}
			
			var show_on = button.data('show-on').split(',');
			
			var get_image = function(ele) {
				if (!ele.is('img')) {
					ele = ele.find('img').first();
				}
				
				return ele;
			};
			
			var setup = function() {
				
				var selectors = [];
				if (show_on.indexOf('single') !== -1) {
					selectors.push('.post-content img, .single-cover .featured, .single:not(.layout-creative) .featured .image-link');
				}
				
				if (show_on.indexOf('listing') !== -1) {
					selectors.push('.posts-container .post-header .image-link, .posts-container .post-thumb .image-link');
				}
				
				selectors = selectors.join(', ');
				
				$(selectors)
					.on('mouseenter', function() {
						
						var img = get_image($(this)),
						    wrap = img.parent();
						
						if (img.hasClass('nopin') || img.width() < 200 || img.height < 200) {
							return;
						}
						
						var pos = img.position(),
						    media  = img.prop('src'),
						    url, desc, button;
						
						// URL
						if ($('body').hasClass('single')) {
							url = window.location.href;
						}
						else {
							
							if (wrap.hasClass('image-link')) {
								url = wrap.prop('href');
							}
							else {
								url = img.closest('.post').find('.post-title-alt a, .post-title a').prop('href');
							}

							// featured img has post title
							desc = img.prop('title');
						}

						// desc = img.prop('alt') || img.prop('title');
						
						if (!url) {
							return;
						}
						
						// Create if not already done
						if (!img.data('pinit-id')) {
							button = $(the_button).appendTo(wrap);

							if (!desc) {
								desc = button.data('heading');
							}

							var url_format = button.prop('href')
								.replace('%media%', encodeURIComponent(media))
								.replace('%url%', encodeURIComponent(url))
								.replace('%desc%', encodeURIComponent(desc));
							
							button.prop('href', url_format);
							
							button.on('click', function(e) {
								e.preventDefault();
								e.stopPropagation();
								
								window.open($(this).prop('href'), '_blank');
							});
							
							index++;
							img.attr('data-pinit-id', index);
							button.attr('data-pinit-id', index);
						}
						else {
							// Existing button
							button = wrap.find('a[data-pinit-id=' + img.data('pinit-id') +']');
						}
						
						button.addClass('show').css({
							top: pos.top + parseInt(img.css('marginTop')) + parseInt(img.css('paddingTop')),
							left: pos.left + parseInt(img.css('marginLeft')) + parseInt(img.css('paddingLeft'))
						});
				})	
				.on('mouseleave', function(e) {
						 
						var ele = get_image($(this)).parent();
						
						if ($(e.relatedTarget).hasClass('pinit-btn')) {
							return;
						}
						
						ele.find('.pinit-btn').removeClass('show');
				});
			};
			
			setup();
			$(document).on('ajax-pagination', setup);
			
		},
		
		lazy_load: function()
		{
			var type = $('body').prop('className').match(/lazy-([^\s]+)/);
			if (!type || !window.lazySizes) {
				return;
			}			
			type = type[1];
			
			// Debounced resize trigger
			var timer;
			var loaded = function() {
				clearTimeout(timer);
				timer = setTimeout(function() {
					$(window).trigger('resize.TSS');
				}, 50);
			};
			
			$(document).on('lazyloaded', '.main', function(e) {
				loaded();
			});
			
			// Only for "smart" type and large desktops
			if (type != 'smart' || $(window).width() < 1380) {
				return;
			}
			
			// Deferred preload
			var is_loaded = false;
			var defer_load = function() {

				if (is_loaded) {
					return;
				}

				$('img.lazyload').each(function() {
					lazySizes.loader.unveil($(this).get(0));
				});

				is_loaded = true;
			};
			
			// With delay or immediate on scroll (touch, mousemove other candidates)
			var events = 'scroll.ll';
			$(window).on(events, function() {
				defer_load();
				$(this).off(events);
			});

			self._wait_load(defer_load, {ready: true});
		},
		
		/**
		 * Setup masonry on archives
		 */
		masonry: function(reload, posts, grid) 
		{
			
			if ($.fn.masonry && $('.posts-dynamic').hasClass('masonry')) {
				var grid = grid || $('.posts-dynamic.masonry .posts-wrap'); 
				
				if (!grid.length) {
					return;
				}

				grid.on('layoutComplete', function() {
					requestAnimationFrame(function() {
						$(window).trigger('resize.TSS');
					});
				});
				
				// Reload masonry?
				if (reload && posts) {
		
					var posts = grid.find(posts).css({ opacity: 0 });
					
					grid.each(function() {

						$(this).imagesLoaded(function() {
							posts.css({ opacity: 1 });
							grid.masonry('appended', posts, true);
						});
					});
				}
				else {
					grid.each(function() {
						$(this).imagesLoaded(function() {
							grid.masonry();
						});
					});	
				}
			}
		}
		
	}; // end module
	
	// Utils
	function writeRaf(fn, options) {
		var running, 
		    args, 
		    that;

		var run = function() {
			running = false;
			fn.apply(that, args);
		};

		if (!options) {
			options = {};
		}

		return function() {
			args = arguments;
			that = options.that || this;

			if (!running) {
				running = true;
				requestAnimationFrame(run);
			}
		};
	}
	
	return self;
	
})(jQuery);

/**
 * Social Sharing float behavior
 */
var Bunyad_Share_Float = (function($) {
	"use strict";

	/**
	 * Check if element intersects
	 */
	var intersects = function(el1, el2) {
		var rect1 = el1.getBoundingClientRect();
		var rect2 = el2.getBoundingClientRect();
	
		return !(
			rect1.top    > rect2.bottom ||
			rect1.right  < rect2.left ||
			rect1.bottom < rect2.top ||
			rect1.left   > rect2.right
		);
	}

	var start_at = 0;

	return {
		init: function() {

			if (!$('.post-share-float').length) {
				return;
			}

			$(window).on('resize load resize.TSS', function() {
				this.init_calc();
				this.sticky();
				this.visibility();
			}.bind(this));
		},

		/**
		 * Pre-calc for performance
		 */
		init_calc: function() {

			if (!$('body').hasClass('no-sidebar') && !$('.the-post-modern').length) {
				var featured = $('.the-post-header .featured, .single-creative .featured, .single-cover .featured, .single-magazine .featured');
				start_at = featured.length ? featured.position().top : $('.the-post-header').position().top;
			}
		},
		
		/**
		 * Setup sticky float
		 */
		sticky: function() {
			// Floating social sharing
			var add = 20;
			add += $('.admin-bar').length ? 32 : 0;
			add += Bunyad_Theme.has_sticky_nav ? 50 : 0;
			var width = $(window).width();
			
			$('.post-share-float').each(function() {

				var post_foot = $('.the-post-foot').outerHeight(true) + 50;
				$(this).css('height', $('.the-post .post-content').height() + (width > 1500 ? post_foot : 0) + 'px');
				
				$(this).theiaStickySidebar({
					minWidth: 768, 
					updateSidebarHeight: false,
					defaultPosition: 'absolute',
					additionalMarginTop: add
				});
			});
		},

		/**
		 * Determine when to show and hide
		 */
		visibility: function() {

			if ($(window).width() < 768) {
				return false;
			}

			var intersect_sels = [
				'.the-post-modern .alignfull',
				'.the-post-modern .alignwide', 
				'.the-post-modern .gallery:not(.aligncenter)',
				'.the-post-modern .wp-block-gallery:not(.aligncenter)',
				'.the-post-modern figure.alignnone', 
				'.the-post-modern img.alignnone',
			];

			var observe = [],
			    share_ele = $('.post-share-float');

			$(intersect_sels.join(',')).each(function() { 
				observe.push(this);
			});
		
			$(window).on('scroll', function() {
				var is_hidden = false,
					ele = share_ele.find('.theiaStickySidebar').get(0);

				if ($(window).scrollTop() < start_at) {
					is_hidden = true;
				}
				else {

					// Check if any of the observed elements intersect
					for (var i in observe) {
						if (intersects(ele, observe[i])) {
							is_hidden = true;
							break;
						}
					}
				}
		
				(is_hidden
						? share_ele.addClass('is-hidden') 
						: share_ele.removeClass('is-hidden')
				);
			});
		}
	}
})(jQuery);


/**
 * Pagination handlers
 */
var Bunyad_Pagination = (function($) {
	"use strict";

	// Blocks load more
	var processing = false,
	    cache = [];
	
	var self = {
			
		init: function() {
			// AJAX pagination handlers
			$('.main').on('click', '.main-pagination .load-button, .block .main-pagination.number a', this.ajax_pagination);
		},
		
		/**
		 * Initiate handling of AJAX pagination
		 */
		ajax_pagination: function(e) 
		{
			if (processing) {
				return false;
			}
			
			// Type of pagination
			var type = 'more';
			if ($(this).closest('.main-pagination').hasClass('number')) {
				type = 'number';
			}
			
			var ele = $(this),
		    	block = ele.closest('.block'),
		    	post_id = ele.closest('.page-content, .post-content').data('id'),
		    	page = ele.data('page') + 1,
		    	is_block = true;
		
			// Not a block, archives
			if (!block.length) {
				is_block = false;
				block = ele.closest('.main-content');
			}
			
			// AJAX params
			var params =  {
				'_bunyad_act': 'block',
				'page_id': post_id,
				'paged': page, 
				'block_id': block.data('id')
			};

			switch(type) {
			
				// Type: Load More
				case 'more':
					ele.addClass('loading').find('.fa').addClass('fa-spin');
					
					// Processing method for load more
					var process = self.process_load_more;
					
					break;
				
				// Type: Numbered
				case 'number':
					block.find('.block-content').addClass('loading');
					
					// Change page number
					var permalink = ele.attr('href').match(/\/page\/(\d+)\//);
					if (permalink !== null) {
						params.paged = permalink[1];
					}
					else {
						// Plain links
						var src = ele.attr('href').match(/(\?|&)paged?=(\d+)/);
						params.paged = src ? src[2] : 1;
					}
					
					// Set height
					block.css('height', block.height());
					
					var process = function(data) {
						cache[params.paged] = data;
						var content = $(data),
						    block_content = block.find('.block-content');
						
						block_content.removeClass('fade-in-down-lg')
							.html($(data).find('.block-content').html());
						
						block.css('height', 'auto');
						block_content.addClass('fade-in-down-lg').removeClass('loading');
						
						// position correctly
						$('html, body').animate({scrollTop: block.offset().top - 50}, 200);
						
						$(document).trigger('ajax-pagination');
					};
					
					// In cache?
					if (cache[params.paged]) {
						processing = false;
						process(cache[params.paged]);
						
						return false;
					}

					break;
			}

			// Process block
			if (is_block) {
				
				// Home blocks AJAX
				var ajax_url = Bunyad.custom_ajax_url;
				ajax_url += (ajax_url.indexOf('?') !== -1 ? '&' : '?');
				
				processing = $.get(ajax_url + $.param(params), function(data) {
						process(data, block, ele);
					})
					.always(function() {
						// All done
						processing = false;
					});	
			}
			else {
				
				// Archives AJAX
				var ajax_url = $(this).attr('href');
				processing = $.get(ajax_url, function(data) {
					data = $(data).find('.main-content').get(0);
					process(data, block, ele);
				})
				.always(function() {
					// All done
					processing = false;
				});
			}

			return false;
		},
		
		/**
		 * Load More Ajax callback method
		 */
		process_load_more: function(data, block, ele) 
		{
			var content = $(data),
				wrap = block.find('.posts-container'),
				posts;
			
			if (content.find('.posts-container').hasClass('mixed')) {
				posts = content.find('.posts-dynamic').children().addClass('fade-in-up-lg');
				wrap.append(posts);
			}
			else {
				// Directly below or in a .posts-wrap wrapper?
				// WARNING: Always have .posts-wrap to prevent unexpected bugs
				var container = block.find('.posts-wrap').length ? '.posts-wrap' : '.posts-container';
				
		        posts = content.find(container).children().addClass('fade-in-up-lg');
		        block.find(container).append(posts);
			}
			
			// Masonry reload
			if (wrap.hasClass('masonry')) {
				//posts.removeClass('fade-in-up-lg');
				Bunyad_Theme.masonry(true, posts, wrap.find('.posts-wrap'));
			}
			
			$(document).trigger('ajax-pagination');

			block.find('.main-pagination')
				.replaceWith(content.find('.main-pagination'));
			
			ele.removeClass('loading')
				.find('.fa').removeClass('fa-spin');
		}
	};
	
	return self;
	
})(jQuery);

// load when ready
jQuery(function($) {
	"use strict";
	
	// Init
	var init = function() {
		Bunyad_Theme.init();
		Bunyad_Pagination.init();
	};

	// Feature detection: preload
	var rp_support = function() {
		try {
			return document.createElement("link").relList.supports("preload");
		} catch (e) {
			return false;
		}
	};
	
	// Compat: Fix for Performance feature from Core plugin for browsers that don't support preload
	if (!window.ld_skip && !rp_support() && window.ts_ld && window.loadCSS) {
		
		var link = $('link[as=style]');
		if (link.length) {
			link = link[0];
			
			var css_load = function(target) {
				if (target.prop('media') == 'all') {
					init();
					
					setTimeout(function() {
						$('html').removeClass('ld');
					}, 50);
					
					return;
				}

				// Retry
				setTimeout(css_load.bind(null, target), 20);
			};
			
			// Find single inserted
			var target = $('link[href="' + link.href + '"][as!=style]');
			if (target.length) {
				css_load(target);
			}
		}
	}
	else {
		init();
	}
});

/**
 * Plus/minus polyfill for numbers - used in WooCommerce
 * 
 * Author Bryce Adams
 */
jQuery( function( $ ) {

	// Quantity buttons
	$( 'div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)' )
		.addClass( 'buttons_added' )
		.append( '<div class="vertical-buttons"><input type="button" value="+" class="plus" /><input type="button" value="-" class="minus" /></div>' );

	$( document ).on( 'click', '.plus, .minus', function() {

		// Get values
		var $qty		= $( this ).closest( '.quantity' ).find( '.qty' ),
			currentVal	= parseFloat( $qty.val() ),
			max			= parseFloat( $qty.attr( 'max' ) ),
			min			= parseFloat( $qty.attr( 'min' ) ),
			step		= $qty.attr( 'step' );

		// Format values
		if ( ! currentVal || currentVal === '' || currentVal === 'NaN' ) currentVal = 0;
		if ( max === '' || max === 'NaN' ) max = '';
		if ( min === '' || min === 'NaN' ) min = 0;
		if ( step === 'any' || step === '' || step === undefined || parseFloat( step ) === 'NaN' ) step = 1;

		// Change the value
		if ( $( this ).is( '.plus' ) ) {

			if ( max && ( max == currentVal || currentVal > max ) ) {
				$qty.val( max );
			} else {
				$qty.val( currentVal + parseFloat( step ) );
			}

		} else {

			if ( min && ( min == currentVal || currentVal < min ) ) {
				$qty.val( min );
			} else if ( currentVal > 0 ) {
				$qty.val( currentVal - parseFloat( step ) );
			}

		}

		// Trigger change event
		$qty.trigger( 'change' );

	});

});