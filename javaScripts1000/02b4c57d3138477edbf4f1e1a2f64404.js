!function i(o,a,l){function s(n,e){if(!a[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(r)return r(n,!0);throw(t=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",t}t=a[n]={exports:{}},o[n][0].call(t.exports,function(e){return s(o[n][1][e]||e)},t,t.exports,i,o,a,l)}return a[n].exports}for(var r="function"==typeof require&&require,e=0;e<l.length;e++)s(l[e]);return s}({1:[function(e,n,t){"use strict";var i,o=e("./modules/Home/home-index.js"),e=(i=o)&&i.__esModule?i:{default:i};document.addEventListener("DOMContentLoaded",e.default.init)},{"./modules/Home/home-index.js":6}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={home:{mainBanner:{main:$(".js--main-banner--left")},mainShelf:$(".js--home-main-shelf ul"),shelfLinhaCompleta:$(".js--linha-completa")}}},{}],3:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=e("./__cache-selectors");var a=((i=o)&&i.__esModule?i:{default:i}).default.home,l={init:function(){l.linhaCompleta()},linhaCompleta:function(){a.shelfLinhaCompleta.slick({autoplay:!1,dots:!0,arrows:!0,centerMode:!0,centerPadding:"120px",slidesToShow:3,slidesToScroll:1,infinite:!0,lazyLoad:Jequiti18.slickLazyDesktop}).on("lazyLoaded",function(e,n,t,i){$(t).removeClass("has--placeloader")})}};t.default={init:l.init}},{"./__cache-selectors":2}],4:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=e("./__cache-selectors");var a=((i=o)&&i.__esModule?i:{default:i}).default.home.mainBanner,l={init:function(){l.mainBanner()},mainBanner:function(){a.main.slick({autoplay:!0,dots:!0,autoplaySpeed:3500,arrows:!1,speed:1e3,lazyLoad:Jequiti18.slickLazyDesktop}).on("lazyLoaded",function(e,n,t,i){$(t).removeClass("has--placeloader")})}};t.default={init:l.init}},{"./__cache-selectors":2}],5:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=e("./__cache-selectors");var a=((i=o)&&i.__esModule?i:{default:i}).default.home,l={init:function(){l.mainShelf()},mainShelf:function(){$(document).on("shelfCarouselEnd.vtexShelfProperties",function(e){a.mainShelf.hasClass("slick-initialized")||a.mainShelf.slick({slidesToShow:5,dots:!0,slidesToScroll:4,centerMode:!0,lazyLoad:Jequiti18.slickLazyDesktop}).on("lazyLoaded",function(e,n,t,i){return $(t).removeClass("has--placeloader")})})}};t.default={init:l.init}},{"./__cache-selectors":2}],6:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l(e("./_home__main-banner.js")),o=l(e("./_home__main-shelf.js")),a=l(e("./_home__linhaCompleta.js"));function l(e){return e&&e.__esModule?e:{default:e}}t.default={init:function(){i.default.init(),o.default.init(),a.default.init(),setTimeout(function(){Jequiti18.lazyload.update()},1e3)}}},{"./_home__linhaCompleta.js":3,"./_home__main-banner.js":4,"./_home__main-shelf.js":5}]},{},[1]);