(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{236:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return m}));var t=n(1),s=n.n(t),i=n(5),r=n.n(i),o=n(771),d=n(4),l=n(773),c=n(956),u=n(53);function m(){return s()(".navigation-test.component").each((function(){var e,a,n,t,i,m,p,h=s()("body"),b=s()("header.navigation-test"),v=s()("header.navigation-test").find("nav.main-new"),f=v.find(".icon.search.js-activate"),g=v.find(".icon.search-nav.js-activate"),C=v.find(".nav-search-mobile .icon"),w=v.find(".icon.close-search"),y=v.find(".search-field"),x=v.find(".menu"),k=v.find(".primary-text-links"),j=v.find(".menu-search"),O=h.find(".menu-link.expand-trigger"),T=h.find("header.navigation-test .menu-overlay"),_=v.find(".icon.menu-close"),D=h.find(".expand-trigger"),I=h.find(".submenu-link.main-link"),L=s()("header.navigation-test .modal.hamburger"),B=new o.a(L,"hamburger"),z=L.find(".close"),A=L.find(".close svg"),S=L.find(".top-menu .submenu-children-wrapper"),E=L.find("li.has-submenu"),M=L.find(".expand-trigger"),P=L.find(".modal-navigation"),J=s()(".modal-shortcut-link"),N=L.find(".dialog-wrap"),V=s()(".ad-wrapper.karma-leaderboard-docking-element"),G=v.find(".primary-nav-submenu-children"),K=v.find(".navigationTest__menuDropdownButton"),R=null,W=0,q=function(){a=s()(".content-breadcrumbs").length?s()(".content-breadcrumbs").height():0,n=v.hasClass("homepage")?v.find(".menu-homepage-row").height():v.height(),t=s()(".share-new").length?s()(".share-new").height():0,i=s()(".main-header").length?s()(".main-header").height():0,m=V.height(),p=s()(".logo-row").height()||0,e=c.a.isMobileTabletLayout()};window.addEventListener(d.d,q),q();var F=function(a){if(E.removeClass("selected"),S.removeClass("children-wrapper-expanded"),M.removeAttr("aria-disabled"),e&&M.removeAttr("style"),e||(M.attr("aria-expanded",!1),O.removeAttr("aria-disabled")),a){var n=a.find(".submenu-children-wrapper"),t=a.find(".expand-trigger");if(a.addClass("selected"),e||t.attr({"aria-expanded":!0,"aria-disabled":!0}),n.addClass("children-wrapper-expanded"),e){R=t,t.css("display","none");var s=n.find(".back-button.mobile-only");s.length&&s.focus(),r()(d.wb).broadcast(a)}}},H=function(){h.removeClass("menu-active"),O.parent().removeClass("active"),O.attr("aria-expanded",!1),x.removeClass("open"),E.removeClass("selected"),L.removeClass("secondary-menu-open"),L.removeClass("submenu-open"),F(),e&&(R=null)},Q=function(){if(v.hasClass("full-size-nav-enabled")&&b.hasClass("sticky-nav")){var e=j.outerWidth();k.css({paddingRight:e})}},U=function(){v.hasClass("full-size-nav-enabled")&&k.removeAttr("style")},X=Array.prototype.slice.call(I);I.on("keydown",(function(e){var a=e.target,n=e.which.toString(),t=e.ctrlKey&&n.match(/33|34/);if(a.classList.contains("main-link")&&(n.match(/38|40/)||t)){var s=X.indexOf(a),i=n.match(/34|40/)?1:-1,r=X.length;X[(s+r+i)%r].focus(),e.preventDefault()}})),r()(d.Db).subscribe((function(){if(h.hasClass("modal-active")&&h.hasClass("hamburger")){var e=Object(u.a)();("mobile"===e||"tablet"===e)&&b.find(".children-wrapper-expanded").length?L.addClass("submenu-open"):(L.removeClass("submenu-open"),b.find(".expand-trigger").css("display",""))}})),r()(d.o).subscribe((function(a,n){var t=h.hasClass("modal-active")&&h.hasClass("hamburger")?L.find(".secondary-links .menu-list-item.has-submenu"):v.find(".secondary-links .menu-list-item.has-submenu");if(!n.closest(".component.navigation-test").length||t.hasClass("active"))return t.removeClass("active"),O.attr("aria-expanded",!1),L.removeClass("secondary-menu-open"),function(e){if(Object(l.a)(e,J)){B.open(),h.addClass("menu-active"),x.addClass("open");var a=L.find("".concat(J.data("menuTarget")));F(a);var n=L.find("".concat(J.data("focusTarget")));if(J.data("focusTarget"))return n.focus()}}(n),null;if(n.closest(".search-by-ingredient-mobile-show").length||n.closest(".search-by-ingredient-mobile-hide").length||n.closest(".component.search-by-ingredient").length||n.closest(".faceted-search-widget-wrapper").length)return null;var i=L.find("li.has-submenu.selected .back-button"),o=i.find("svg"),c=o.find("path");if(Object(l.a)(n,f)&&!v.hasClass("search-open"))return v.addClass("search-open"),Q(),y.prop("disabled",!1).focus();if(Object(l.a)(n,f)||Object(l.a)(n,w))return v.removeClass("search-open"),Q(),y.blur().prop("disabled",!0);if(Object(l.a)(n,g))return g.addClass("search-nav-open"),y.focus(),h.toggleClass("menu-active");if(Object(l.a)(n,z)||Object(l.a)(n,A)||Object(l.a)(n,T))H();else if(Object(l.a)(n,C)){if(!n.parents(".nav-search-mobile").hasClass("custom_nav_target")||!e)return B.open(),h.addClass("menu-active"),x.addClass("open"),L.find(".search-field").focus();B.open(),h.addClass("menu-active"),x.addClass("open");var u=L.find("".concat(n.parents(".nav-search-mobile").data("menuTarget")));F(u);var m=L.find("".concat(n.parents(".nav-search-mobile").data("focusTarget")));if(J.data("focusTarget"))return m.focus()}else if(Object(l.a)(n,x)||Object(l.a)(n,_)){if(0===v.find(".menu.open").length){if(B.open(),h.addClass("menu-active"),x.addClass("open"),!e){var p=L.find(".pos-0");F(p)}}else H();r()(d.zb).broadcast(),v.find(".search-nav-open").length>0?g.removeClass("search-nav-open"):g.addClass("search-nav-open")}else if(n.parents("li.has-submenu").length>0&&n.parents(".menu-item-main").length>0&&!Object(l.a)(n,i)&&!Object(l.a)(n,o)&&!Object(l.a)(n,c)&&!n.parents("li.open-channel-page").length>0){a.preventDefault(),a.stopImmediatePropagation();var b=n.parents("li.has-submenu");F(b),e?(L.addClass("submenu-open"),N.animate({scrollTop:0},100)):P.animate({scrollTop:0},100),r()(d.zb).broadcast()}else if(Object(l.a)(n,i)||Object(l.a)(n,o)||Object(l.a)(n,c))F(),L.removeClass("submenu-open"),e&&R&&R.length&&(R.focus(),R=null);else if(n.parents("li.header-primary-links.has-submenu").length>0&&!n.parents("li.open-channel-page").length>0){a.preventDefault(),a.stopImmediatePropagation(),B.open(),h.addClass("menu-active"),x.addClass("open");var k=n.parent().data("navPos"),j=L.find(".".concat(k));"pos-0"===k&&r()(d.zb).broadcast(),F(j),r()(d.zb).broadcast(),e&&L.addClass("submenu-open")}else if(n.parents("header.navigation-test .secondary-links .menu-list-item.has-submenu").length>0&&0===n.parents("header.navigation-test .secondary-links .menu-list-item.has-submenu .submenu-children-wrapper").length){a.preventDefault(),a.stopImmediatePropagation();var D=n.closest(".menu-list-item.has-submenu"),I=D.find(".submenu-children-wrapper"),S=D.find(O);D.hasClass("mobile-open")||D.hasClass("active")?(D.removeClass("mobile-open"),D.removeClass("active")):(e&&(L.addClass("secondary-menu-open"),D.toggleClass("mobile-open"),s()("header").get(0).scrollIntoView()),D.toggleClass("active"),S.attr("aria-expanded",!0),I.find("a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex][tabindex!=-1]").first().focus())}else t.removeClass("active").removeClass("mobile-open"),L.removeClass("secondary-menu-open");return null})),r()(d.ib).subscribe((function(){e&&D.removeAttr("aria-expanded aria-disabled");var a=setInterval((function(){s()(".menu-subscribe > div").hasClass("bxc")&&(s()(".menu-subscribe").addClass("bx-loaded"),clearInterval(a))}),100)})),r()(d.Gb).subscribe((function(){var r=s()(window).scrollTop();m=V.height();var o=p+(V.hasClass("docked")?0:m),d=0;if(s()(".recipeSearchSubNav").length){d=s()(".recipeSearchSubNav").offset().top;var l=Object(u.a)(),v="mobile"===l||"tablet"===l,f=s()("#div-gpt-leaderboard-flex-1 iframe").length?s()("#div-gpt-leaderboard-flex-1 iframe").attr("height"):0;!v&&parseInt(f,10)>90&&(d+=90)}return c.a.isMobileLayout()?(b.addClass("sticky-nav"),s()(".primary-nav-search").animate({bottom:"0px"},1e3)):r>o&&(b.addClass("sticky-nav"),s()(".nav-search-mobile").hide(),s()(".primary-nav-search").animate({bottom:"0px"},1e3)),0===r||r<o?(h.removeClass("scroll-up"),b.removeClass("sticky-nav"),s()(".nav-search-mobile").hasClass("custom_nav_target")||s()(".nav-search-mobile").fadeIn(),U()):W>r?(h.addClass("scroll-up"),Q()):(h.removeClass("scroll-up"),U()),W=r,s()(".nav-search-mobile").hasClass("custom_nav_target")&&(W>d?(s()(".nav-search-mobile").show(),s()(".primary-nav-search").removeClass("hide-on-load")):(s()(".nav-search-mobile").hide(),s()(".primary-nav-search").addClass("hide-on-load"))),r>t+i+a+n+m&&e?h.addClass("under-docked-sharebar"):h.removeClass("under-docked-sharebar")}));var Y=G.parent(),Z=null;Y.on("mouseenter",(function(e){var a=s()(e.target).closest(Y),n=a.find(".navigationTest__menuDropdownButton");K.not(n).attr("aria-expanded",!1),Z=a,n.attr("aria-expanded",!0)})),Y.on("mouseleave",(function(){Z=null,setTimeout((function(){Y.filter((function(e,a){return!s()(a).is(Z)})).children(".navigationTest__menuDropdownButton").attr("aria-expanded",!1)}),1e3)})),Y.on("click",(function(e){var a=s()(e.target).closest(".navigationTest__menuDropdownButton"),n=G.siblings(".navigationTest__menuDropdownButton"),t=a.attr("aria-expanded");n.length&&n.attr("aria-expanded",!1),a.length&&a.attr("aria-expanded","true"!==t)})),Y.on("focusout",(function(e){var a=s()(e.target).closest(Y);setTimeout((function(){var e=s()(document.activeElement);a.find(e).length||a.find(".navigationTest__menuDropdownButton").attr("aria-expanded",!1)}),0)})),Y.on("keyup",(function(e){"Escape"===e.code&&s()(e.target).closest(Y).find(".navigationTest__menuDropdownButton").attr("aria-expanded",!1).trigger("focus")}))})),r()(d.V).broadcast()}},956:function(e,a,n){"use strict";var t=n(4),s=n(53),i=Object(s.a)();window.addEventListener(t.d,(function(){i=Object(s.a)()})),a.a={isMobileLayout:function(){return"mobile"===i},isTabletLayout:function(){return"tablet"===i},isMobileTabletLayout:function(){return["mobile","tablet"].indexOf(i)>=0}}}}]);
//# sourceMappingURL=65-65.js.map