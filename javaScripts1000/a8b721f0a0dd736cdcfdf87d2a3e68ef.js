webpackJsonp([1642],{2762:function(n,e,t){var a=t(2763);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);t(1249)("155aff84",a,!0,{})},2763:function(n,e,t){e=n.exports=t(1248)(!1),e.push([n.i,"[dir] .main-news{padding-top:40px;padding-bottom:56px}@media only screen and (min-width:768px) and (max-width:1135px){[dir] .main-news{padding-bottom:48px;padding-top:32px}}@media only screen and (max-width:767px){[dir] .main-news{padding-bottom:40px;padding-top:32px}}.main-news__items{display:-webkit-box;display:-ms-flexbox;display:flex}",""])},4023:function(n,e,t){"use strict";function a(n){t(2762)}Object.defineProperty(e,"__esModule",{value:!0});var i={name:"MainNews",props:{news:{type:Array,required:!0,default:function(){return[]}},categories:{type:Object,default:function(){return{}},required:!1}},components:{Card:function(){return t.e(1589).then(t.bind(null,4024))}}},s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("app-section",{staticClass:"main-news",attrs:{background:"white",hasShadow:!0}},[t("h2",[t("router-link",{staticClass:"-link",attrs:{to:{name:"company_news",params:{lang:n.$locale}}}},[n._v("\n      "+n._s(n.$t("page_main.company-news"))+"\n    ")])],1),t("div",{staticClass:"main-news__items -slidable"},n._l(n.news,function(e,a){return t("card",{key:a,attrs:{categories:n.categories,item:e}})}),1)])},r=[],o={render:s,staticRenderFns:r},d=o,p=t(128),l=a,c=p(i,d,!1,l,null,null);e.default=c.exports}});