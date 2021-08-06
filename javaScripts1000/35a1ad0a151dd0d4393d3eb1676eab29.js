define("components/navigationMobile",["FR","underscore","hammerjs","services/responsiveUtil","services/freerideRestApi","components/login","components/sharedUI/forms"],function(e,n,o,t,l,i,s){var a,c={lastScrollPosition:e.$el.window.scrollTop(),previousScroll:0,navMobileOpen:!1,navLevel2Open:!1},v={openNavigation:function(){c.navMobileOpen=!0,a.navMobile.addClass("nav_mobile--open"),a.navMobileOverlay.addClass("nav_mobile_overlay--open"),v.toggleCloseButton(),v.setEscListener()},closeNavigation:function(n){c.navMobileOpen=!1,a.navMobile.removeClass("nav_mobile--open"),a.navMobileOverlay.removeClass("nav_mobile_overlay--open"),"mousedown"!==n&&a.navMobileLink.focus(),e.$el.mainNav.unbind("keyup"),a.navMobileClose.off(),v.toggleScrolling(),v.resetNavigation()},toggleCloseButton:function(){a.navMobileClose.on("mousedown click",function(e){e.preventDefault(),v.closeNavigation(e.type)})},toggleLevelOneContent:function(e){e.hasClass("nav_mobile__level1_link--open")?($({}).queue(function(n){e.siblings(".nav_mobile__level1_content").removeClass("nav_mobile__level1_content--open"),n()}).delay(300).queue(function(n){e.removeClass("nav_mobile__level1_link--open"),n()}),e.find(".sr-only").html("Expand")):($({}).queue(function(e){$({}).queue(function(e){a.levelOneContent.removeClass("nav_mobile__level1_content--open"),e()}).delay(300).queue(function(e){a.levelOneLinks.removeClass("nav_mobile__level1_link--open"),e()}),e()}).delay(300).queue(function(n){e.addClass("nav_mobile__level1_link--open"),e.siblings(".nav_mobile__level1_content").addClass("nav_mobile__level1_content--open"),n()}),e.find(".sr-only").html("Collapse"))},openLevelTwoContent:function(e){c.navLevel2Open=!0;var n=e.siblings(".nav_mobile__level2_content");a.navMobile.addClass("nav_mobile--darken"),$(n).addClass("nav_mobile__level2_content--open"),a.navMobileClose.on("keydown",function(e){9!=e.which||e.shiftKey||$(".nav_mobile__level2_content--open").find('[tabindex="0"]')[0].focus()})},closeLevelTwoContent:function(e){a.navMobile.removeClass("nav_mobile--darken"),e.parent(".nav_mobile__level2_content").removeClass("nav_mobile__level2_content--open"),a.navMobileClose.off("keydown"),c.navLevel2Open=!1},resetNavigation:function(){e.$el.mainNav.css("top",0),a.navMobile.removeClass("nav_mobile--darken"),a.levelOneLinks.removeClass("nav_mobile__level1_link--open"),a.levelOneContent.removeClass("nav_mobile__level1_content--open"),a.levelTwoContent.removeClass("nav_mobile__level2_content--open")},toggleHeader:function(n){var o=c.lastScrollPosition-n,t=e.$el.mainNav.height();Math.abs(o+c.previousScroll)>t?(o<0?(e.$el.mainNav.css("top",-1*t+"px"),a.checkoutProgress.css("top",parseInt(e.$el.mainNav.css("margin-top"),10)+"px"),a.checkoutProgress.addClass("checkout-progrss-bar--bar"),e.$el.window.trigger("mobile-header-hidden")):(e.$el.mainNav.css("top",0),a.checkoutProgress.hasClass("checkout-progrss-bar--bar")&&a.checkoutProgress.css("top",parseInt(e.$el.mainNav.css("margin-top"),10)+e.$el.mainNav.height()+"px"),e.$el.window.trigger("mobile-header-shown")),e.$el.window.trigger("toggle-mobile-header"),e.$el.window.scrollTop()<=t&&(a.checkoutProgress.removeClass("checkout-progrss-bar--bar"),a.checkoutProgress.css("top",0)),c.previousScroll=0):(c.previousScroll+=o,n<=0&&v.resetNavigation()),c.lastScrollPosition=n},toggleScrolling:function(){var n=a.navMobile.hasClass("nav_mobile--open");e.$el.body.removeClass("body--scroll_disabled"),n&&t.isPhone()&&e.$el.body.addClass("body--scroll_disabled")},signout:function(){e.$el.window.trigger("loading-spinner-on",[".main-container"]),l.logOut({},function(n){!0===n.success?e.$el.body.hasClass("checkout-page")?window.location=a.cartLink.attr("href"):window.location.reload():console.error("restApi.logOut response: ",n.error)})},updateCartCount:function(e){if(void 0!==e&&"number"==typeof e){var n=a.cartCount.closest(".nav_mobile__utility_item");if(n.removeClass("cart_count--empty"),e>0){var o=1===e?"item.":"items.";a.cartCount.text(e),a.cartCountSrText.text(o)}else n.addClass("cart_count--empty"),a.cartCount.text(""),a.cartCountSrText.text("")}},setNewFocus:function(e){e.focus()},removeOldFocus:function(){$(document.activeElement).focusout()},escToClose:function(){v.closeNavigation()},isNewFocusNav:function(){$(document.activeElement).parents().hasClass("nav_mobile")||v.closeNavigation()},setTabListener:function(){e.$el.body.on("keyup",function(e){9==e.which&&!0===c.navMobileOpen&&v.isNewFocusNav()})},setEscListener:function(){a.navMobile.on("keydown",function(e){27==e.which&&v.escToClose()})}},r={init:function(){a={navMobileLink:$("#nav_mobile_link"),navMobileOverlay:$("#nav_mobile_overlay"),navMobile:$("#nav_mobile"),navMobileClose:$("#nav_mobile__close"),checkoutProgress:$("#checkoutProgrssBar"),signOutButton:$("#signOutMobile"),signInButton:$("#signInMobile"),signedIn:$(".main_nav__account_state-hot"),signInTemplate:$("#signInTemplate")},r.setSelectors(),r.bindEvents(),r.setWatches(),0===a.signedIn.length&&a.signInTemplate.length>0&&(c.signInTemplate=n.template(a.signInTemplate.html())),window.shoppingCart&&v.updateCartCount(window.shoppingCart.TotalProducts)},setSelectors:function(){a.levelOneLinks=a.navMobile.find(".nav_mobile__level1_link"),a.levelTwoLinks=a.navMobile.find(".nav_mobile__level2_menu-link"),a.levelThreeBackLinks=a.navMobile.find(".nav_mobile__level3_back"),a.levelOneContent=a.navMobile.find(".nav_mobile__level1_content"),a.levelTwoContent=a.navMobile.find(".nav_mobile__level2_content"),a.cartCount=a.navMobile.find(".cart_count"),a.cartCountSrText=a.navMobile.find(".sr_cart_count"),a.cartLink=a.navMobile.find("#mobile_nav_cart"),a.signOutButton=a.navMobile.find("#signOutMobile"),a.signInButton=a.navMobile.find("#signInMobile"),a.search=a.navMobile.find(".nav_mobile__search_box")},bindEvents:function(){t.isMobile()&&(v.resetNavigation(),a.navMobileLink.on("mousedown click",function(e){e.preventDefault(),"mousedown"!==e.type&&setTimeout(function(){v.setTabListener(),v.setNewFocus(a.navMobileClose)},100),v.openNavigation(),v.toggleScrolling(),a.search.trigger("shown")}),a.navMobileOverlay.on("click",function(e){e.preventDefault(),v.closeNavigation()}),a.levelOneLinks.on("click",function(e){e.preventDefault();var n=$(this);v.toggleLevelOneContent(n)}),a.levelTwoLinks.on("mousedown click",function(e){e.preventDefault();var n=$(this);"mousedown"!==e.type&&setTimeout(function(){v.setNewFocus(a.levelThreeBackLinks)},100),v.openLevelTwoContent(n)}),a.levelThreeBackLinks.on("mousedown click keydown",function(e){e.preventDefault();var n=$(this);"mousedown"!==e.type&&("keydown"==e.type?e.shiftKey&&9==e.which?v.setNewFocus(a.navMobileClose):9!=e.which||e.shiftKey?13==e.which&&(setTimeout(function(){v.setNewFocus(n.parent().prev())},100),v.closeLevelTwoContent(n)):v.setNewFocus(n.next().find('[tabindex="0"]')[0]):(setTimeout(function(){v.setNewFocus(n.parent().prev())},100),v.closeLevelTwoContent(n)))}),a.signOutButton.on("click",function(e){e.preventDefault(),v.signout()}),a.signInButton.on("click",function(n){n.preventDefault();var o=c.signInTemplate;e.$el.window.trigger("global-modal-open",[o]),setTimeout(function(){$(".global_modal__content").find(".returningCustomerFormId").trigger("shown"),s.initForms()},0),i.init()})),e.$el.window.on("sitewide-alert-closed",function(){v.resetNavigation()}),e.$el.window.on("cart-count-update",function(e,n){v.updateCartCount(n)})},setWatches:function(){var o=n.debounce(function(){t.isMobile()?(r.unbindEvents(),r.bindEvents()):v.resetNavigation(),v.toggleScrolling()},100);e.$el.window.on("resize orientationchange",o);var l=n.throttle(function(){var e=a.navMobile.hasClass("nav_mobile--open");if(t.isMobile()&&!e){var n=$(this).scrollTop();v.toggleHeader(n)}},250);e.$el.window.on("scroll scrollstart touchmove",l)},unbindEvents:function(){for(var e in a)"window"!==e&&"body"!==e&&"navMobileClose"!==e&&a[e].off()}};$(function(){return r.init()})});
//# sourceMappingURL=navigationMobile.js.map
