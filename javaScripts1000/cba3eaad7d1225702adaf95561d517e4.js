!function(){var e=function(e,n,o){var d=document.getElementById("header-"+(n.is_desktop?"desktop-":"mobile-")+e+"-toggle");d&&(n.opened=!1,n.menu=document.getElementById(n.id),n.menu_toggler=d,n.toggle=function(d){if(void 0===d||d!==n.opened){if(n.opened)xv.dom.addClass(n.menu,n.hide_class?n.hide_class:"mobile-hide"),n.body_cls_onopen&&xv.dom.removeClass(document.body,n.body_cls_onopen),xv.dom.removeClass(n.menu_toggler,n.icon_cls);else{"undefined"!=typeof window.xv&&"undefined"!=typeof window.xv.header&&"function"==typeof window.xv.header.close_mobile_menu&&window.xv.header.close_mobile_menu();for(var t in o)t!==e&&o[t].toggle&&o[t].toggle(!1);xv.dom.removeClass(n.menu,n.hide_class?n.hide_class:"mobile-hide"),window.jQuery&&!n.no_auto_focus&&$(n.menu).find("input[type=text]").first().focus(),xv.dom.addClass(n.menu_toggler,n.icon_cls),"function"==typeof n.onopen_func&&n.onopen_func(),n.body_cls_onopen&&xv.dom.addClass(document.body,n.body_cls_onopen),xv.dom.scrollToTop()}n.opened=!n.opened}},window.xv.mobile.togglers.push(n),d.onclick=function(e){return e||(e=this.originalEvent),e&&("function"==typeof e.preventDefault?e.preventDefault():e.returnValue=!1),n.toggle(),!1})},n={togglers:new Array,menus_init:function(n){for(var o in n)e(o,n[o],n)},menus_close:function(){if(!1!==window.xv.mobile.togglers)for(var e in window.xv.mobile.togglers)window.xv.mobile.togglers[e].toggle(!1)}};window.xv||(window.xv={}),window.xv.mobile=n}(),function(){var e=document.getElementById("x-messages");if(e){var n=document.getElementById("x-messages-btn"),o=[],d=xv.dom.getFirstChild(e),t=xv.dom.getChildren(d),i={},s=xv.dom.hasClass(e,"opened");s&&xv.dom.addClass(n,"opened"),xv.conf&&xv.conf.dyn&&xv.conf.dyn.chat&&xv.conf.dyn.chat.enabled&&(xv.dom.addClass(e,"chat-window-side"),xv.dom.addClass(n,"chat-window-side"));var a=function(d){if("object"==typeof d&&("function"==typeof d.preventDefault?d.preventDefault():d.returnValue=!1),"boolean"!=typeof d&&(d=!s),d!==s){if(d)xv.dom.addClass(e,"opened"),xv.dom.addClass(n,"opened");else{xv.dom.removeClass(e,"opened"),xv.dom.removeClass(n,"opened");var t=[],a=0,r=Math.round((new Date).getTime()/1e3);for(var v in i)t.push(v+":"+(r+parseInt(i[v]))),a=Math.max(0,i[v]);xv.cookies.setLocal("hide_xmsg",t.join(","),1e3*a,"/")}s=d;for(var m in o)o[m](d)}};for(var r in t){var v=t[r];xv.dom.hasClass(v,"x-close")?xv.dom.addEventListener(v,"click",a):xv.dom.hasClass(v,"x-message")&&function(e,o){i[e]=o||1296e3,xv.dom.removeClass(n,"hidden")}(v.getAttribute("data-hash"),v.getAttribute("data-expires"))}xv.dom.addEventListener(n,"click",a);var m={registerOnToggle:function(e){o.push(e)}};window.xv||(window.xv={}),window.xv.messages=m}}(),function(){var e={};if(e.menu={id:"mobile-menu",icon_cls:"vertical"},e.filters={id:"mobile-filters-menu",icon_cls:"opened"},e.search={id:"xv-search-form",icon_cls:"close"},xv.mobile.menus_init(e),xv.header.nav=document.getElementById("nav"),xv.header.nav_var={menu_toggle:document.getElementById("header-menu-toggle"),is_opened_desktop:xv.dom.hasClass(xv.header.nav,"forced-opened"),main_cat_btn:document.getElementById("main-cat-sub-list-btn"),home_trends_btn:document.getElementById("home-trends-sub-list-btn")},xv.header.nav){var n,o={},d=!1,t=0,i=function(e){if(xv.header.is_mobile_menu(!1)){n=!1;for(var d in o)o[d].is_opened=!1}else!0!==e&&(xv.header.nav_var.is_opened_desktop=!1);xv.header.update_menu_classs()},s=function(){for(var e in o)a(e)},a=function(e){!1===o[e].initiated&&(o[e].initiated="processing",o[e].list&&o[e].btn?xv.dom.addEventListener(o[e].btn,"click",function(n){v(e)}):o[e].disabled=!0,o[e].initiated=!0)},r=function(e){if(xv.header.is_mobile_menu(!1)&&"desktop"!==e){n=!0,"undefined"!=typeof window.xv&&"undefined"!=typeof window.xv.mobile&&"function"==typeof window.xv.mobile.menus_close&&window.xv.mobile.menus_close();var t=!0;for(var i in o)!0===o[i].is_opened&&(t=!1);!0===t&&(o[d].is_opened=!0)}else xv.header.nav_var.is_opened_desktop=!0;"undefined"!=typeof xv.header&&"undefined"!=typeof xv.header.trends&&"function"==typeof xv.header.trends.position&&xv.header.trends.position(),xv.header.update_menu_classs()},v=function(e){for(var n in o)o[n].is_opened=!1;o[e].is_opened=!0,xv.header.update_menu_classs()};xv.header.add_sub_menu=function(e,n,i,a,r){if(e&&n){var v={btn:e,list:n,is_opened:!1,disabled:!1,initiated:!1};return t++,void 0!==i&&i||(i="sub_menu_"+t),o[i]=v,!1!==d&&!0!==r||(d=i),!0!==a&&s(),i}},xv.header.close_mobile_menu=function(){i(!0)},xv.header.is_menu_opened=function(){return window_resize_callback(!1),!xv.header.is_mobile_menu(!1)&&xv.header.nav_var.is_opened_desktop||xv.header.is_mobile_menu(!1)&&n},xv.header.is_sub_menu_opened=function(e){return!(!xv.header.is_menu_opened()||"undefined"==typeof o[e]||!o[e].is_opened)},xv.header.open_sub_menu=function(e){if(!xv.header.is_mobile_menu(!1))return!1;r("mobile"),v(e),"undefined"!=typeof window.xv&&"undefined"!=typeof window.xv.dom&&"function"==typeof window.xv.dom.scrollToTop&&window.xv.dom.scrollToTop()},xv.header.update_menu_classs=function(){if(window.jQuery)if(xv.header.is_mobile_menu(!1)){var e=$(".home-trends #home-trends-sub-list-btn");e.length>0&&e.parent("li").insertAfter($("#main-cat-sub-list-btn").parent("li"))}else{var e=$(".main-categories #home-trends-sub-list-btn");e.length>0&&$(".home-trends > ul").prepend(e.parent("li"))}xv.header.is_menu_opened()?(xv.dom.addClass(xv.header.nav,"opened"),xv.dom.addClass(xv.header.nav_var.menu_toggle,"opened"),xv.header.is_mobile_menu(!1)||"undefined"==typeof xv||"undefined"==typeof xv.header?xv.dom.addClass(document.body,"mobile-menu-opened"):("undefined"!=typeof xv.header.categories&&"function"==typeof xv.header.categories.position&&setTimeout(xv.header.categories.position,150),"undefined"!=typeof xv.header.trends&&"function"==typeof xv.header.trends.position&&setTimeout(xv.header.trends.position,150))):(xv.dom.removeClass(xv.header.nav,"opened forced-opened"),xv.dom.removeClass(xv.header.nav_var.menu_toggle,"opened"),xv.dom.removeClass(document.body,"mobile-menu-opened"));for(var n in o)!0!==o[n].disabled&&(o[n].is_opened?(xv.dom.addClass(o[n].btn,"opened"),xv.dom.addClass(o[n].list,"opened")):(xv.dom.removeClass(o[n].btn,"opened"),xv.dom.removeClass(o[n].list,"opened")))},xv.header.update_sub_menu_btn=function(e,n){"undefined"!=typeof o[e]&&n&&(o[e].btn=n,xv.dom.addEventListener(o[e].btn,"click",function(n){v(e)}))},xv.header.update_sub_menu_list=function(e,n){"undefined"!=typeof o[e]&&n&&(o[e].list=n)},xv.header.nav_var.main_cat_btn&&xv.header.add_sub_menu(xv.header.nav_var.main_cat_btn,document.getElementById("main-cat-sub-list"),"main_cat",!0),xv.header.nav_var.home_trends_btn&&xv.header.add_sub_menu(xv.header.nav_var.home_trends_btn,document.getElementById("home-trends-sub-list"),"home_trends",!0),s(),window_resize_callback(),xv.dom.addEventListener(window,"resize",xv.header.window_resize),xv.dom.addEventListener(xv.header.nav_var.menu_toggle,"click",function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,(xv.header.is_mobile_menu(!1)?n:xv.header.nav_var.is_opened_desktop)?i():r()}),xv.dom.addClass(xv.header.nav_var.menu_toggle,"init-ok")}}();