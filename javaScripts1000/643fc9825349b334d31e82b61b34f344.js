(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1361:function(e,n,r){"use strict";r.r(n),r.d(n,"initSearchLink",(function(){return p}));var s="",a="",o="",d=function(){s.closest("header.header-permanent-decorator").removeClass("searchOpened"),s.hasClass("opened")&&(s.removeClass("opened").addClass("closed"),a.slideUp(),o.removeClass("opened").animate({height:0}))},t=function(){a.is(":visible")?d():function(){s.addClass("opened"),s.closest("header.header-permanent-decorator").addClass("searchOpened"),a.slideDown(),a.find('input[name="searchedText"]').focus();var e=jQuery(document.getElementById("page")).outerHeight()||null,n=jQuery("header").outerHeight();o.css({left:0,position:"absolute"}).height(e-n).addClass("opened")}()},c=function(e){e.preventDefault(),t();var n=Osmose.component.Menu;n&&n.getIsMenuOpened()&&Osmose.component.Menu.toggleMenu()},i=null,l=null,u=function(){l.closest("header.header-permanent-decorator").removeClass("searchOpened"),l.removeClass("opened"),i.hide()},h=function(){l=jQuery(".search_link"),i=jQuery(".header_bottom .search-engine"),jQuery(".header_middle .search_link").click((function(){return i.is(":visible")?u():function(){l.closest("header.header-permanent-decorator").addClass("searchOpened"),l.addClass("opened"),i.show(),i.find(".search-engine-input").focus();var e=Osmose.component.Menu;e&&e.getIsMenuOpened()&&Osmose.component.Menu.toggleMenu()}(),!1})),i.find(".search-engine-overlay").click((function(e){jQuery(e.currentTarget).closest(".header.searchOpened").length&&u()}))},p=function(){jQuery(".search-engine").length?h():(s=jQuery(".search_link"),a=jQuery(".header_bottom .search_bar"),o=jQuery('<div class="overlay_search" />').appendTo("body"),jQuery(".header .header_middle").on("click",".search_link",c),jQuery(window).on("orientationchange.search.bar",(function(){jQuery(window).width()>=660&&a.is(":visible")&&d()})),o.bind("click.search.overlay",c))}}}]);