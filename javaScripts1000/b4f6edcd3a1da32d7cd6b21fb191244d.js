(function ($) {

var jQuery = $;

/* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
(function(a){a.fn.prepareTransition=function(){return this.each(function(){var b=a(this);b.one("TransitionEnd webkitTransitionEnd transitionend oTransitionEnd",function(){b.removeClass("is-transitioning")});var c=["transition-duration","-moz-transition-duration","-webkit-transition-duration","-o-transition-duration"];var d=0;a.each(c,function(a,c){d=parseFloat(b.css(c))||d});if(d!=0){b.addClass("is-transitioning");b[0].offsetWidth}})}})(jQuery);

/* replaceUrlParam - http://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery */
function replaceUrlParam(e,r,a){var n=new RegExp("("+r+"=).*?(&|$)"),c=e;return c=e.search(n)>=0?e.replace(n,"$1"+a+"$2"):c+(c.indexOf("?")>0?"&":"?")+r+"="+a};

/*============================================================================
  Money Format
  - Shopify.format money is defined in option_selection.js.
    If that file is not included, it is redefined here.
==============================================================================*/
if ((typeof Shopify) === 'undefined') { Shopify = {}; }
if (!Shopify.formatMoney) {
  Shopify.formatMoney = function(cents, format) {
    var value = '',
        placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = (format || this.money_format);

    if (typeof cents == 'string') {
      cents = cents.replace('.','');
    }

    function defaultOption(opt, def) {
      return (typeof opt == 'undefined' ? def : opt);
    }

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultOption(precision, 2);
      thousands = defaultOption(thousands, ',');
      decimal   = defaultOption(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number/100.0).toFixed(precision);

      var parts   = number.split('.'),
          dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
          cents   = parts[1] ? (decimal + parts[1]) : '';

      return dollars + cents;
    }

    switch(formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  };
}

// Timber functions
window.timber = window.timber || {};

timber.cacheSelectors = function () {
  timber.cache = {
    // General
    $html                    : $('html'),
    $body                    : $(document.body),

    // Navigation
    $navigation              : $('#AccessibleNav'),
    $mobileSubNavToggle      : $('.mobile-nav__toggle'),

    // Collection Pages
    $changeView              : $('.change-view'),

    // Product Page
    $productImage            : $('#ProductPhotoImg'),
    $thumbImages             : $('#ProductThumbs').find('a.product-single__thumbnail'),

    // Customer Pages
    $recoverPasswordLink     : $('#RecoverPassword'),
    $hideRecoverPasswordLink : $('#HideRecoverPasswordLink'),
    $recoverPasswordForm     : $('#RecoverPasswordForm'),
    $customerLoginForm       : $('#CustomerLoginForm'),
    $passwordResetSuccess    : $('#ResetSuccess')
  };
};

timber.init = function () {
  FastClick.attach(document.body);
  timber.cacheSelectors();
  timber.accessibleNav();
  timber.drawersInit();
  timber.mobileNavToggle();
  timber.responsiveVideos();
  timber.collectionViews();
  timber.loginForms();
};

timber.accessibleNav = function () {
  var $nav = timber.cache.$navigation,
      $allLinks = $nav.find('a'),
      $topLevel = $nav.children('li').find('a'),
      $parents = $nav.find('.site-nav--has-dropdown'),
      $subMenuLinks = $nav.find('.site-nav__dropdown').find('a'),
      activeClass = 'nav-hover',
      focusClass = 'nav-focus';

  // Mouseenter
  $parents.on('mouseenter touchstart', function(evt) {
    var ret = true;
    var $el = $(this);

    if (!$el.hasClass(activeClass)) {
      evt.preventDefault();
      ret = false;
    }

    // remove activeClass from all elements out of current hierarchy
    $('.' + activeClass).each(function (el) {
      var $active = $(this);
      if ($active.has(evt.target).length === 0) {
        $active.removeClass(activeClass);
      }
    });

    showDropdown($el);
    return ret;
  });
  
  if($("body#customer-service").length > 0){
    var urlFull = window.location.href;
    var idCurr = urlFull.split("#");
    setTimeout(function(){
       $('html, body').animate({scrollTop: $("#"+idCurr[1]).offset().top  }, 0);
    }, 800);
  }
  
  $(document).on("click","#menu-customer-service > img", function(){
     $(this).parent().toggleClass("active");
  });
  
  
  var addNumberVar = setInterval(addNumberStars, 1000);
  function addNumberStars() {
    if($(".spr-badge").length > 0){
      var currNumber = $(".spr-badge").attr("data-rating");
      var currNumberR = Math.round(currNumber);
      var currNumberF = parseFloat(currNumber).toFixed(2);
      $( "<span id='rating-number'>"+currNumberF+" <span>|</span><span>" ).insertAfter(".spr-badge-starrating");
      clearInterval(addNumberVar);
    }
  }
  
  $(document).on("click",".spr-badge-caption",function(){
    $("html, body").animate({scrollTop:$("#shopify-product-reviews").offset().top - 100}, 500, function() {});
  });
  
  $(".size-guide-btn").on("click", function(){
    $(".product-sizeguide").fadeIn();
  });
  
  $(".product-sizeguide span, .product-sizeguide").on("click", function(){
    $(".product-sizeguide").hide();
  });
  
  $(document).on("click","#container-info-tabs > div:first-child a", function(e){
    e.preventDefault();
    var currIndex = $(this).attr("data-index");
    $("#container-info-tabs > div:first-child a").removeClass("active");
    $(this).addClass("active");
    $("#container-info-tabs > div:last-child .cont").removeClass("active");
    $("#container-info-tabs > div:last-child .cont-"+currIndex).addClass("active");
  });
  
  $(window).scroll(function(){
    if($("body#customer-service").length > 0){
      var windowWidthMenu = $(window).width();
      if(windowWidthMenu > 749){
          menuChangePosition("#cont-customer-service", "#menu-customer-service > div > ul", "#menu-customer-service");
      }else{
        $("#menu-customer-service > div > ul").attr("style","");
        $("#menu-customer-service").attr("style","");
        $("#menu-customer-service").removeClass("active");
      }
    }
  });
  
  
  
 
  function menuChangePosition(setionTopHeight, setionfixed, heightParentFixed){
    var scrollTopWindowNew = $(window).scrollTop();
    var scroltopCollection = $(setionTopHeight).offset().top  - 100;
    if(scrollTopWindowNew  > scroltopCollection){
      $(heightParentFixed).height($(setionTopHeight).height());
      $(setionfixed).attr("style","");
      if(scrollTopWindowNew < ($(setionTopHeight).height() + $(setionTopHeight).offset().top - $(setionfixed).height() - 100) ){
        var animatetop = 100;
        var descriptionSectionWidth = $("#menu-customer-service > div").width();
        $(setionfixed).css({
          position:"fixed",
          top:animatetop+"px",
          maxWidth:descriptionSectionWidth +"px"
        });
      }else{
        var descriptionSectionWidth = $("#menu-customer-service > div").width();
        $(setionfixed).css({
          position:"absolute",
          bottom: "0px",
          maxWidth:descriptionSectionWidth +"px"
        });
      }
    }else{
      $(setionfixed).css(
        {
          position:"relative",
          top:"0"
        }
      );
    }
  }

  // Mouseout
$('#top_links_wrapper').on('mouseleave', function() {
    hideDropdown();
  });

  $subMenuLinks.on('touchstart', function(evt) {
    // Prevent touchstart on body from firing instead of link
    evt.stopImmediatePropagation();
  });

  $allLinks.focus(function() {
    handleFocus($(this));
  });

  $allLinks.blur(function() {
    removeFocus($topLevel);
  });

  // accessibleNav private methods
  function handleFocus ($el) {
    var $subMenu = $el.next('ul'),
        hasSubMenu = $subMenu.hasClass('sub-nav') ? true : false,
        isSubItem = $('.site-nav__dropdown').has($el).length,
        $newFocus = null;

    // Add focus class for top level items, or keep menu shown
    if (!isSubItem) {
      removeFocus($topLevel);
      addFocus($el);
    } else {
      $newFocus = $el.closest('.site-nav--has-dropdown').find('a');
      addFocus($newFocus);
    }
  }

  function showDropdown ($el) {
    $el.addClass(activeClass);

    // Remove iOS workaround because it breaks menu z-index
    $('.sticky-header').removeClass('sticky-header-transformed');

    // Select if the submenu should appear left or right of the menu
    var $child = $el.parent().find('.site-nav__subdropdown');
    var childWidth = Math.max.apply(null, $child.map(function () { return $(this).width() }).get());
    var right = $el.offset().left + $el.outerWidth() + childWidth;
    if (right > $('body').width()) {
      $child.css({
          right: '100%',
          left: 'auto'
      });
    } else {
      $child.css({
          left: '100%',
          right: 'auto'
      });
    }

    setTimeout(function() {
      timber.cache.$body.on('touchstart', function(evt) {
        if ($(evt.target).closest('.site-nav__link,.dropdown-submenu').length === 0) {
          // Hide dropdown if the touchstart was not on nav link
          hideDropdown($el);
        }
      });
    }, 250);
  }

  function hideDropdown ($el) {
    if ($el !== undefined) $el.removeClass(activeClass);
    else $('.site-nav--has-dropdown').removeClass(activeClass);
    timber.cache.$body.off('touchstart');

    // Reenable iOS workaround
    if ($('.nav-hover').length === 0) {
      $('.sticky-header').addClass('sticky-header-transformed');
    }
  }

  function addFocus ($el) {
    $el.addClass(focusClass);
  }

  function removeFocus ($el) {
    $el.removeClass(focusClass);
  }
};

timber.drawersInit = function () {
  if (!timber.LeftDrawer) {
    timber.LeftDrawer = new timber.Drawers('NavDrawer', 'left');
  } else {
    timber.LeftDrawer.init();
  }
  if (!timber.RightDrawer) {
    timber.RightDrawer = new timber.Drawers('CartDrawer', 'right', {
      
    });
  } else {
    timber.RightDrawer.init();
  }
};

timber.mobileNavToggle = function () {
  timber.cache.$mobileSubNavToggle.off('click').on('click', function(evt) {
    $(this).parent().toggleClass('mobile-nav--expanded');
  });
};

timber.getHash = function () {
  return window.location.hash;
};

timber.productPage = function (options) {
  var moneyFormat = options.money_format,
      variant = options.variant,
      element = options.element;

  // Selectors
  var $productImage = element.find('#ProductPhotoImg'),
      $addToCart = element.find('#AddToCart'),
      $productPrice = element.find('#ProductPrice'),
      $comparePrice = element.find('#ComparePrice'),
      $addToCartText = element.find('#AddToCartText'),
      $variantPercentageWrapper = element.find('.variant-percentage-wrapper'),
      $variantValueWrapper = element.find('.variant-value-wrapper');

  if (variant) {

    // Select a valid variant if available
    if (variant.available) {
      // Available, enable the submit button, change text, show quantity elements
      $addToCart.removeClass('disabled').prop('disabled', false);
      $addToCartText.html("Add to Cart");
      window.wetheme.load_SPB_show();
    } else {
      // Sold out, disable the submit button, change text, hide quantity elements
      $addToCart.addClass('disabled').prop('disabled', true);
      $addToCartText.html("Sold Out");
      window.wetheme.load_SPB_hide();
    }
    
    
    /*Back In Stock Integration*/
    if (variant && variant.available) {
        $('#comingsoon-trigger').hide(); // hide the button
        $(".paymentButtonsWrapper").show();
    } else {
      $(".paymentButtonsWrapper").hide();
      $('#comingsoon-trigger').show().attr('data-variant-id', variant.id); // show the button and set the default variant
    }
   

    // Regardless of stock, update the product price
    $productPrice.html('<span class="money">' + Shopify.formatMoney(variant.price, moneyFormat) + '</span>');

    
    
    if($(".discount-product-price").length > 0 && $("#ProductPrice").length > 0){
      $("#ProductPrice").addClass("price-strikethrough");
    }
    
    
    
    
    
    // Also update and show the product's compare price if necessary
    if (variant.compare_at_price > variant.price) {
      $comparePrice
        .html('<span class="money">' + Shopify.formatMoney(variant.compare_at_price, moneyFormat) + '</span>')
        .show();
    } else {
      $comparePrice.hide();
    }

  } else {
    // The variant doesn't exist, disable submit button.
    // This may be an error or notice that a specific variant is not available.
    // To only show available variants, implement linked product options:
    //   - http://docs.shopify.com/manual/configuration/store-customization/advanced-navigation/linked-product-options
    $addToCart.addClass('disabled').prop('disabled', true);
    $addToCartText.html("Unavailable");
  }

  // Update discount badge
  var isSale = variant && variant.compare_at_price > variant.price;
  if ($variantPercentageWrapper.length > 0) {
    if (isSale) {
      $variantPercentageWrapper.removeClass('hide');
      var percentage = (variant.compare_at_price - variant.price) * 100.0 / variant.compare_at_price;
      $variantPercentageWrapper.find('.variant-percentage').text(percentage.toFixed(0) + '%');
    } else {
      $variantPercentageWrapper.addClass('hide');
    }
  }
  if ($variantValueWrapper.length > 0) {
    if (isSale) {
      $variantValueWrapper.removeClass('hide');
      var value = variant.compare_at_price - variant.price;
      $variantValueWrapper.find('.variant-value')
        .html('<span class="money">' + Shopify.formatMoney(value, moneyFormat) + '</span>')
    } else {
      $variantValueWrapper.addClass('hide');
    }
  }

  if (window.Currency) {
    window.Currency.convertAll(window.Currency.shopCurrency, window.Currency.currentCurrency);
  }
};

timber.responsiveVideos = function () {
  var $iframeVideo = $('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]');
  var $iframeReset = $iframeVideo.add('iframe#admin_bar_iframe');

  $iframeVideo.each(function () {
    // Add wrapper to make video responsive
    $(this).wrap('<div class="video-wrapper"></div>');
  });

  $iframeReset.each(function () {
    // Re-set the src attribute on each iframe after page load
    // for Chrome's "incorrect iFrame content on 'back'" bug.
    // https://code.google.com/p/chromium/issues/detail?id=395791
    // Need to specifically target video and admin bar
    this.src = this.src;
  });
};

timber.collectionViews = function () {
  if (timber.cache.$changeView.length) {
    timber.cache.$changeView.on('click', function() {
      var view = $(this).data('view'),
          url = document.URL,
          hasParams = url.indexOf('?') > -1;

      if (hasParams) {
        window.location = replaceUrlParam(url, 'view', view);
      } else {
        window.location = url + '?view=' + view;
      }
    });
  }
};

timber.loginForms = function() {
  function showRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.show();
    timber.cache.$customerLoginForm.hide();
  }

  function hideRecoverPasswordForm() {
    timber.cache.$recoverPasswordForm.hide();
    timber.cache.$customerLoginForm.show();
  }

  timber.cache.$recoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    showRecoverPasswordForm();
  });

  timber.cache.$hideRecoverPasswordLink.on('click', function(evt) {
    evt.preventDefault();
    hideRecoverPasswordForm();
  });

  // Allow deep linking to recover password form
  if (timber.getHash() == '#recover') {
    showRecoverPasswordForm();
  }
};

timber.resetPasswordSuccess = function() {
  timber.cache.$passwordResetSuccess.show();
};

timber.addToCartAdding = function() {
  $addToCart = $('#AddToCart');
  var CART_LOADING = '<i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i><span class="sr-only">Loading...</span>';
  $('#AddToCart').addClass('disabled').prop('disabled', true).html(CART_LOADING);
}

timber.addToCartAdded = function() {
  var added_text_timeout = null;
  $addToCart = $('#AddToCart');

  $addToCart.html("Added");

  if (added_text_timeout) {
    clearTimeout(added_text_timeout);
    added_text_timeout = null;
  }
  added_text_timeout = setTimeout(function () {
      $addToCart.removeClass('disabled').prop('disabled', false).html("Add to Cart");
  }.bind(this), 2000);

}



/*============================================================================
  Drawer modules
  - Docs http://shopify.github.io/Timber/#drawers
==============================================================================*/
timber.Drawers = (function () {
  var Drawer = function (id, position, options) {
    var defaults = {
      close: '.js-drawer-close',
      open: '.js-drawer-open-' + position + '-link',
      openClass: 'js-drawer-open',
      dirOpenClass: 'js-drawer-open-' + position
    };

    this.$nodes = {
      parent: $('body, html'),
      page: $('#PageContainer'),
      moved: $('.is-moved-by-drawer')
    };

    this.config = $.extend(defaults, options);
    this.position = position;

    this.$drawer = $('#' + id);

    if (!this.$drawer.length) {
      return false;
    }

    this.drawerIsOpen = false;
    this.init();
  };

  Drawer.prototype.init = function () {
    var self = this;
    $(this.config.open).off('click').on('click', function (evt) { self.open(evt); });
    this.$drawer.find(this.config.close).off('click').on('click', this.close.bind(this));
  };

  Drawer.prototype.open = function (evt) {
    // Keep track if drawer was opened from a click, or called by another function
    var externalCall = false;

    // Prevent following href if link is clicked
    if (evt) {
      evt.preventDefault();
    } else {
      externalCall = true;
    }

    // Without this, the drawer opens, the click event bubbles up to $nodes.page
    // which closes the drawer.
    if (evt && evt.stopPropagation) {
      evt.stopPropagation();
      // save the source of the click, we'll focus to this on close
      this.$activeSource = $(evt.currentTarget);
    }

    if (this.drawerIsOpen && !externalCall) {
      return this.close();
    }

    // Notify the drawer is going to open
    timber.cache.$body.trigger('beforeDrawerOpen.timber', this);

    // Add is-transitioning class to moved elements on open so drawer can have
    // transition for close animation
    this.$nodes.moved.addClass('is-transitioning');
    this.$drawer.prepareTransition();

    this.$nodes.parent.addClass(this.config.openClass + ' ' + this.config.dirOpenClass);
    this.drawerIsOpen = true;

    // Set focus on drawer
    this.trapFocus(this.$drawer, 'drawer_focus');

    // Run function when draw opens if set
    if (this.config.onDrawerOpen && typeof(this.config.onDrawerOpen) == 'function') {
      if (!externalCall) {
        this.config.onDrawerOpen();
      }
    }

    if (this.$activeSource && this.$activeSource.attr('aria-expanded')) {
      this.$activeSource.attr('aria-expanded', 'true');
    }

    // Notify the drawer has opened
    timber.cache.$body.trigger('afterDrawerOpen.timber', this);
  };

  Drawer.prototype.close = function () {
    if (!this.drawerIsOpen) { // don't close a closed drawer
      return;
    }

    // Notify the drawer is going to close
    timber.cache.$body.trigger('beforeDrawerClose.timber', this);

    // deselect any focused form elements
    $(document.activeElement).trigger('blur');

    // Ensure closing transition is applied to moved elements, like the nav
    this.$nodes.moved.prepareTransition({ disableExisting: true });
    this.$drawer.prepareTransition({ disableExisting: true });

    this.$nodes.parent.removeClass(this.config.dirOpenClass + ' ' + this.config.openClass);

    this.drawerIsOpen = false;

    // Remove focus on drawer
    this.removeTrapFocus(this.$drawer, 'drawer_focus');

    this.$nodes.page.off('.drawer');

    // Notify the drawer is closed now
    timber.cache.$body.trigger('afterDrawerClose.timber', this);
  };

  Drawer.prototype.trapFocus = function ($container, eventNamespace) {
    var eventName = eventNamespace ? 'focusin.' + eventNamespace : 'focusin';

    $container.attr('tabindex', '-1');

    $container.focus();

    $(document).on(eventName, function (evt) {
      if ($container[0] !== evt.target && !$container.has(evt.target).length) {
        $container.focus();
      }
    });
  };

  Drawer.prototype.removeTrapFocus = function ($container, eventNamespace) {
    var eventName = eventNamespace ? 'focusin.' + eventNamespace : 'focusin';

    $container.removeAttr('tabindex');
    $(document).off(eventName);
  };

  return Drawer;
})();

// Initialize Timber's JS on docready
$(timber.init);
document.addEventListener('shopify:section:load', timber.init);
  
  
 
 
  

})(window.wetheme.$);



