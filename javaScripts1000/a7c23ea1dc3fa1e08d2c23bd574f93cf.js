!function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=17)}({17:function(e,t,i){e.exports=i(18)},18:function(e,t){if(document.getElementById("bibblio_related_articles_box")){const e=window.Bibblio||{};let t=window.hmBibblioFrontend.userData?window.hmBibblioFrontend.userData:null,i=window.hmBibblioFrontend.isMedicalLogin,o={targetElementId:"bibblio_related_articles_box",autoIngestion:!1,styleClasses:"bib--recency-show bib--author-show bib--split bib--square bib--col-5 bib--image-top",recommendationKey:window.hmBibblio.recommendationKey,customUniqueIdentifier:window.hmBibblioFrontend.postId,offset:3,dateFormat:"MDY"};if(t&&i&&"subscriber"in t){const{medicalData:e}=t,{specialty:i,profession:n}=e;let r={specialty:i&&i.name,profession:n&&n.name};const{subscriberId:l}=t.subscriber;o={targetElementId:"bibblio_related_articles_box",userMetadata:r,autoIngestion:!1,styleClasses:"bib--recency-show bib--author-show bib--split bib--square bib--col-5 bib--image-top",recommendationKey:window.hmBibblio.recommendationKey,userId:l,customUniqueIdentifier:window.hmBibblioFrontend.postId,offset:3,dateFormat:"MDY"}}window.hmBibblioFrontend.isIndexed||(o.recommendationType="popular",delete o.customUniqueIdentifier),window.bibblioDebug&&console.log("relatedArticlesContentOptions",o),e.initRelatedContent(o,{onRecommendationsRendered:function(e){var t;window.hmBibblioFrontend.relatedArticlesWidget=window.hmBibblioFrontend.relatedArticlesWidget||{};const i=null!==(t=document.querySelector(".widget_hm_bibblio_related_articles_widget").querySelector(".header-text"))&&void 0!==t?t:void 0;if(i){const{headerText:e}=window.hmBibblioFrontend.relatedArticlesWidget;i.innerHTML=e||""}document.querySelector(".widget_hm_bibblio_related_articles_widget").classList.add("loaded"),document.querySelector(".widget_hm_bibblio_related_articles_widget").style.display="block"},onRecommendationClick:function(e,t){}}),0===document.getElementById("bibblio_related_articles_box").childElementCount&&(document.querySelector(".widget_hm_bibblio_related_articles_widget").classList.add("loaded"),document.querySelector(".widget_hm_bibblio_related_articles_widget").style.display="none")}}});
//# sourceMappingURL=hmBibblioRelatedArticles.min.js.map