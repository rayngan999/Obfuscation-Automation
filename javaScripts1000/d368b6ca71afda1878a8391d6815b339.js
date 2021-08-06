define("components/slidingCards",["FR","jquery","slick","services/utilities","services/responsiveUtil"],function(i,n,r,e,s){var l={},t=0,a=function(){l.galleryItems=n(".slidingCards__wall"),l.leftArrow=n(".slidingCards__navigation--left"),l.rightArrow=n(".slidingCards__navigation--right")},d=function(){l.galleryItems.on("init",function(i,r){t=r.slideCount;var e=n(i.currentTarget).parents(".slidingCards__wall_wrapper"),s=e.find(".numbers__total_slides"),l=e.find(".numbers__current_slide"),a=e.find(".slidingCards__wall");_(s),g(l,r.currentSlide),a.attr("tabindex",0),u(e)}),l.galleryItems.on("beforeChange",function(i,r,e,s){var l=n(i.currentTarget).parents(".slidingCards__wall_wrapper"),t=l.find(".numbers__current_slide");g(t,s),u(l)}),l.leftArrow.on("keydown click",function(i){var r=n(this),e=r.parents(".slidingCards__wall_wrapper").find(".slidingCards__wall");if(37===i.which||"click"===i.type)i.preventDefault(),e.slick("slickPrev");else if(39===i.which){var s=r.parent().find(".slidingCards__navigation--right");s.focus(),s.click()}}),l.rightArrow.on("keydown click",function(i){var r=n(this),e=r.parents(".slidingCards__wall_wrapper").find(".slidingCards__wall");if(39===i.which||"click"===i.type)i.preventDefault(),e.slick("slickNext");else if(37===i.which){var s=r.parent().find(".slidingCards__navigation--left");s.focus(),s.click()}})},c=function(){i.$el.window.on("tabbed_container.reinit_slider",f)},o=function(){l.galleryItems.each(function(i,r){var e="slidingCardContainer"+i;this.id=e;var l=h(n("#"+e)),t=s.isMobile()&&1===l;(l>1||t)&&(t&&n("#"+e).removeClass("slidingCards__wall--no-slick"),n("#"+e).slick({arrows:!1,accessibility:!0,centerMode:!0,cssEase:"linear",touchThreshold:20,speed:250,infinite:!0,variableWidth:!0,focusOnSelect:!0,slidesToShow:l}))})},f=function(){n(".tab-pane.active").find(".slidingCards").length>0&&l.galleryItems.each(function(i,r){var e="slidingCardContainer"+i,l=h(n("#"+e)),t=s.isMobile()&&1===l;l>1||t?n(this).slick("slickGoTo",0,!1):s.isDesktop()&&n("#"+e).addClass("slidingCards__wall--no-slick")})},_=function(i){i.text(t)},g=function(i,n){i.text(n+1)},u=function(i){var r=i.find(".slick-current"),e=r.find(".linkCTA").attr("href");r.on("click",function(){n(this).hasClass("slidingCards__card--noClick")||(window.location.href=e)})},h=function(i){return i.find(".slidingCards__card").length-1};n(function(){return e.supportClipPath(n(".slidingCards")),a(),d(),c(),void o()})});
//# sourceMappingURL=slidingCards.js.map
