(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{115:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=p(a(110)),s=p(a(111)),n=a(649);function p(e){return e&&e.__esModule?e:{default:e}}var i=function(){function e(t){(0,c.default)(this,e),this.pageMapping=n.mappings[t],this.addTags()}return(0,s.default)(e,[{key:"createPrefetchTag",value:function(e){var t=document.createElement("link");return t.setAttribute("rel","prefetch"),t.setAttribute("href",e),t}},{key:"addTags",value:function(){var e=this;this.pageMapping.css&&this.pageMapping.css.forEach(function(t){var a=e.createPrefetchTag(t);a.as="style",document.head.append(a)}),this.pageMapping.js&&this.pageMapping.js.forEach(function(t){var a=e.createPrefetchTag(t);a.as="script",document.head.append(a)})}}]),e}();t.default=i},649:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mappings={home:{js:["https://cdn.optimizely.com/public/5517080075/s/category_UK.js"]},category:{js:["https://cdn.optimizely.com/public/5517080075/s/product_UK.js"]},product:{js:["https://cdn.optimizely.com/public/5517080075/s/checkout_onepage_UK.js"]}}}}]);