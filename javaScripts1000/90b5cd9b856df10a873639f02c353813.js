"use strict";window.freedom.carousel=function(a,n){var i;return{init:function(t){return t=t||"freedom-carousel",n.getElementById(t)&&function(t){var e=n.getElementById(t),r=null;e&&e.dataset&&e.dataset.strategy?r=e.dataset.strategy:e.hasAttribute("data-strategy")&&(r=e.getAttribute("data-strategy"));try{i=a.freedom.carouselStrategies[r](e)}catch(t){}}(t),this},getGallery:function(){return i}}}(window,window.document).init();