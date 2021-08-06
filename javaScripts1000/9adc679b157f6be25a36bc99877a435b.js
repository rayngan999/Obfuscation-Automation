/* jPushMenu.js 1.1.1 */
(function(jQuery) {
		
	jQuery.fn.jPushMenu = function(customOptions) {
		var o = jQuery.extend({}, jQuery.fn.jPushMenu.defaultOptions, customOptions);
		
		/* add class to the body.*/
		
		jQuery('body').addClass(o.bodyClass);
		jQuery(this).addClass('jPushMenuBtn');
		jQuery(this).click(function() {
			var target         = '',
			push_direction     = '';
			
		
			if(jQuery(this).is('.'+o.showLeftClass)) {
				target         = '.cbp-spmenu-left';
				push_direction = 'toright';
			}
			else if(jQuery(this).is('.'+o.showRightClass)) {
				target         = '.cbp-spmenu-right';
				push_direction = 'toleft';
			}
			else if(jQuery(this).is('.'+o.showTopClass)) {
				target         = '.cbp-spmenu-top';
			}
			else if(jQuery(this).is('.'+o.showBottomClass)) {
				target         = '.cbp-spmenu-bottom';
			}
			
			jQuery(this).toggleClass(o.activeClass);
			jQuery(target).toggleClass(o.menuOpenClass);
			
			if(jQuery(this).is('.'+o.pushBodyClass)) {
				jQuery('body').toggleClass( 'cbp-spmenu-push-'+push_direction );
			}
			
			/* disable all other button*/
			jQuery('.jPushMenuBtn').not(jQuery(this)).toggleClass('disabled');
			
			return false;
		});
		var jPushMenu = {
			close: function (o) {
				jQuery('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');
			}
		}
    if(o.closeOnClickInside) {
       jQuery(document).click(function() {
          jPushMenu.close();
        });
       jQuery('.cbp-spmenu,.toggle-menu').click(function(e){
         e.stopPropagation();
       });
    }
		
		if(o.closeOnClickOutside) {
			 jQuery(document).click(function() { 
				jPushMenu.close();
			 }); 
			 jQuery('.cbp-spmenu,.toggle-menu').click(function(e){ 
				 e.stopPropagation(); 
			 });
		 }
        // On Click Link
        if(o.closeOnClickLink) {
            jQuery('.cbp-spmenu a').on('click',function(){
                jPushMenu.close();
            });
        }
	};
    /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
	jQuery.fn.jPushMenu.defaultOptions = {
		bodyClass       : 'cbp-spmenu-push',
		activeClass     : 'menu-active',
		showLeftClass   : 'menu-left',
		showRightClass  : 'menu-right',
		showTopClass    : 'menu-top',
		showBottomClass : 'menu-bottom',
		menuOpenClass   : 'cbp-spmenu-open',
		pushBodyClass   : 'push-body',
		closeOnClickOutside: true,
		closeOnClickInside: true,
		closeOnClickLink: true
	};
})(jQuery);
/* Bootstrap-submenu */
"use strict";!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function b(b){this.jQueryelement=a(b),this.jQuerymain=this.jQueryelement.closest(".dropdown, .btn-group"),this.jQuerymenu=this.jQueryelement.parent(),this.jQuerydrop=this.jQuerymenu.parent().parent(),this.jQuerymenus=this.jQuerymenu.siblings(".dropdown-submenu");var d=this.jQuerymenu.find("> .dropdown-menu > "+c);this.jQuerysubmenus=d.filter(".dropdown-submenu"),this.jQueryitems=d.not(".dropdown-submenu"),this.init()}var c=":not(.disabled, .divider, .dropdown-header)";return b.prototype={init:function(){this.jQueryelement.on("click.bs.dropdown",this.click.bind(this)),this.jQueryelement.keydown(this.keydown.bind(this)),this.jQuerymenu.on("hide.bs.submenu",this.hide.bind(this)),this.jQueryitems.keydown(this.item_keydown.bind(this)),this.jQuerymenu.nextAll(c+":first:not(.dropdown-submenu)").children("a").keydown(this.next_keydown.bind(this))},click:function(a){a.stopPropagation(),this.toggle()},toggle:function(){this.jQuerymenu.hasClass("open")?this.close():(this.jQuerymenu.addClass("open"),this.jQuerymenus.trigger("hide.bs.submenu"))},hide:function(a){a.stopPropagation(),this.close()},close:function(){this.jQuerymenu.removeClass("open"),this.jQuerysubmenus.trigger("hide.bs.submenu")},keydown:function(a){if(/^(32|38|40)jQuery/.test(a.keyCode)&&a.preventDefault(),/^(13|32)jQuery/.test(a.keyCode))this.toggle();else if(/^(27|38|40)jQuery/.test(a.keyCode))if(a.stopPropagation(),27==a.keyCode)this.jQuerymenu.hasClass("open")?this.close():(this.jQuerymenus.trigger("hide.bs.submenu"),this.jQuerydrop.removeClass("open").children("a").focus());else{var b=this.jQuerymain.find("li:not(.disabled):visible > a"),c=b.index(a.target);if(38==a.keyCode&&0!==c)c--;else{if(40!=a.keyCode||c===b.length-1)return;c++}b.eq(c).focus()}},item_keydown:function(a){27==a.keyCode&&(a.stopPropagation(),this.close(),this.jQueryelement.focus())},next_keydown:function(a){if(38==a.keyCode){a.preventDefault(),a.stopPropagation();var b=this.jQuerydrop.find("li:not(.disabled):visible > a"),c=b.index(a.target);b.eq(c-1).focus()}}},a.fn.submenupicker=function(c){var d=this instanceof a?this:a(c);return d.each(function(){var c=a.data(this,"bs.submenu");c||(c=new b(this),a.data(this,"bs.submenu",c))})},a.fn.submenupicker});
'use strict';
jQuery(function() {
  // Dropdown fix
  jQuery('.dropdown > a[tabindex]').keydown(function(event) {
    // 13: Return
    if (event.keyCode == 13) {
      jQuery(this).dropdown('toggle');
    }
  });
  jQuery('.dropdown-submenu > a').submenupicker();
});
/* Bootstrap-submenu */
jQuery(document).ready(function() {
	/* <!-- ================== Push Menu ====================== --> */
        jQuery('.toggle-menu').jPushMenu({ closeOnClickLink: false });
        jQuery('.dropdown-toggle').dropdown();
		
	/* <!-- ================== affix ====================== --> */
        jQuery('#affix').affix({ offset: { top: 15 } });
	/* <!-- ================== Search expand ====================== --> */
	jQuery(".tg-srch-icon").click(function () {
        jQuery(".tg-search-con").toggleClass('searcg-expend');
    });
    jQuery(document).click(function (e) {
        if (jQuery(e.target).is('.tg-srch-icon *')) {
            return;
        }
        else {
            jQuery(".tg-search-con").removeClass('searcg-expend');
        }
    });
		 jQuery('.tg-search-con').click(function (e) {
        e.stopPropagation();
    });
	/* <!-- ========== tg topper slider =================== --> */
	jQuery('.tg-topper-members-slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 2,
	responsive: [
	{
	  breakpoint: 991,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		dots: true
	  }
	},
	{
	  breakpoint: 768,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 668,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
	]
	});
		/* <!-- ========== tg topper slider =================== --> */
	jQuery('.tg-ftrd-members-slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
	{
	  breakpoint: 991,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		dots: true
	  }
	},
	{
	  breakpoint: 768,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 668,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	}
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
	]
	});
		
});