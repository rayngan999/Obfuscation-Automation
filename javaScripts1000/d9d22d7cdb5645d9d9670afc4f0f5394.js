var domainSearchPosition=function(e){return{init:function(){enquire.register(App.helpers.mobileQuery,{match:function(){e(".domain-bar").insertBefore("#promo-takeover"),e(".domain-offer").insertBefore(".hosting-offer")},unmatch:function(){e(".domain-bar").insertAfter("#promo-takeover"),e(".domain-offer").insertAfter(".hosting-offer")}}).listen()}}}(jQuery);jQuery(document).ready(function(){domainSearchPosition.init(),jQuery("#home-page-DS, #home-page-DS-email, #home-page-DS-lower").submit(function(){$.removeCookie("voucher"),null==$.cookie("voucher")&&$.cookie("voucher","LNDJIVNJ",{path:"/",expires:1})}),jQuery("#home-page-DS-newcust, #home-page-DS-email-newcust, #home-page-DS-lower-newcust").on("submit",function(){jQuery.removeCookie("voucher"),null==jQuery.cookie("voucher")&&jQuery.cookie("voucher","AJMBDJLH",{path:"/",expires:1})}),enquire.register(App.helpers.mobileQuery,{match:function(){jQuery(".responding").each(function(){var e=jQuery(this);e.hasClass("slick-initialized")||e.slick({dots:!0,slidesToShow:1,slidesToScroll:1,mobileFirst:!0,infinite:!0,autoplay:!0,autoplaySpeed:5e3,fade:!0})})},unmatch:function(){jQuery(".responding").each(function(){var e=jQuery(this);e.hasClass("slick-initialized")&&e.slick("unslick")})}}).listen();var e,i=(e=jQuery(".sticky-nav")).offset().top,t=jQuery("#hosting"),n=jQuery("#email"),r=jQuery("#website-builder"),a=jQuery("#domain-names");(e=function(){var e=jQuery(window).scrollTop(),o=jQuery(window).scrollTop()+95;function s(e){jQuery(".sticky-nav").find("a").removeClass("active"),jQuery(".sticky-nav").find("."+e).hasClass("active")||jQuery(".sticky-nav").find("."+e).addClass("active")}i<e?jQuery(".sticky-nav").addClass("active-state"):jQuery(".sticky-nav").removeClass("active-state"),o>=t.offset().top&&o<=n.offset().top?s("hosting"):o>=n.offset().top&&o<=r.offset().top?s("email"):o>=r.offset().top&&o<=a.offset().top?s("website-builder"):o>=a.offset().top&&s("domain-names")})(),jQuery(window).scroll($.throttle(250,function(){e()})),jQuery("body").hasClass("ret-n")?jQuery(this).find("#ga-clickevent-promo a").attr("data-customer-origin","Ret-N"):jQuery(this).find("#ga-clickevent-promo a").attr("data-customer-origin","Ret-E"),enquire.register(App.helpers.mobileQuery,{match:function(){jQuery(".responsive-accordion").closest("section").hasClass("has-responsive-accordion")||jQuery(".responsive-accordion").closest("section").addClass("has-responsive-accordion"),jQuery(".reveal-content").hasClass("show-content")&&jQuery(".reveal-content").removeClass("show-content"),jQuery(".responsive-accordion").on("click",function(){jQuery(this).hasClass("active")?jQuery(this).hasClass("active")&&jQuery(this).removeClass("active"):jQuery(this).addClass("active"),jQuery(this).siblings(".reveal-content").hasClass("show-content")?jQuery(this).siblings(".reveal-content").hasClass("show-content")&&jQuery(this).siblings(".reveal-content").removeClass("show-content"):jQuery(this).siblings(".reveal-content").addClass("show-content")})},unmatch:function(){jQuery(".responsive-accordion").closest("section").hasClass("has-responsive-accordion")&&jQuery(".responsive-accordion").closest("section").removeClass("has-responsive-accordion"),jQuery(".responsive-accordion").unbind("click")}}).listen()});