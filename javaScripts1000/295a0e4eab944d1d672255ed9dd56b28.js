!function(e){var o={};function t(i){if(o[i])return o[i].exports;var n=o[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,i){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(i,n,function(o){return e[o]}.bind(null,n));return i},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=13)}({13:function(e,o,t){e.exports=t(14)},14:function(e,o){if(document.getElementById("bibblio_courses_box")){const e=window.Bibblio||{};let o=window.hmBibblioFrontend.userData?window.hmBibblioFrontend.userData:null,t=window.hmBibblioFrontend.isMedicalLogin;const i="bibblio_courses_box";let n={targetElementId:i,customCatalogueIds:["courses"],autoIngestion:!1,styleClasses:"bib--row-4 bib--txt-4",recommendationKey:window.hmBibblio.recommendationKey,customUniqueIdentifier:window.hmBibblioFrontend.postId};if(o&&t&&"subscriber"in o){const{medicalData:{specialty:e,profession:t},subscriber:{subscriberId:r}}=o;n={targetElementId:i,recommendationType:"personalised",userMetadata:{specialty:e&&e.name,profession:t&&t.name},customCatalogueIds:["courses"],autoIngestion:!1,styleClasses:"bib--row-4 bib--txt-4",recommendationKey:window.hmBibblio.recommendationKey,userId:r}}window.hmBibblioFrontend.isIndexed||(n.recommendationType="popular",delete n.customUniqueIdentifier),window.bibblioDebug&&console.log("coursesContentOptions",n),e.initRelatedContent(n,{onRecommendationsRendered:function(e){var i,n;window.hmBibblioFrontend.coursesWidget=window.hmBibblioFrontend.coursesWidget||{};const r=null!==(i=document.querySelector(".widget_hm_bibblio_courses_widget").querySelector(".header-text"))&&void 0!==i?i:void 0;if(r){const{headerText:e}=window.hmBibblioFrontend.coursesWidget;r.innerHTML=e||""}const s=null!==(n=document.querySelector(".widget_hm_bibblio_courses_widget").querySelector(".show-more-link"))&&void 0!==n?n:void 0;if(s){const{showMoreLink:e}=window.hmBibblioFrontend.coursesWidget;s.href=e||""}document.querySelector(".widget_hm_bibblio_courses_widget").classList.add("loaded");document.querySelector(".widget_hm_bibblio_courses_widget").querySelectorAll(".bib__link").forEach(e=>{const i=e.getAttribute("href");let n="";if(i.indexOf("thoughtindustries")){let e=new URL(i);e.hostname="www.mycme.com",n=e.href}else n=i;if(o&&t&&"subscriber"in o){let t=`https://partners.mycme.com/AdvisorSso?subscriberHashId=${o.subscriber.subscriberHashId}&returnTo=${n}`;e.href=t}else e.href=n}),document.querySelector(".widget_hm_bibblio_courses_widget").style.display="block"},onRecommendationClick:function(e,o){}}),0===document.getElementById(i).childElementCount&&(document.querySelector(".widget_hm_bibblio_courses_widget").classList.add("loaded"),document.querySelector(".widget_hm_bibblio_courses_widget").style.display="none")}}});
//# sourceMappingURL=hmBibblioCourses.min.js.map