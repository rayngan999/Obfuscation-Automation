webpackJsonp([1457],{3989:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(37),a=n.n(i),r=n(103),m={name:"PammWidgetRatingTop",components:{Widget:function(){return n.e(1582).then(n.bind(null,3990))}},props:{itemType:{type:String,default:"pamm"},iframe:{type:Boolean,default:!1},links:{type:Boolean,default:!1},url:{type:String}},computed:a()({},Object(r.e)("pamm",{ratingsTop:function(e){return e.rating||{}}}),{items:function(){return this.ratingsTop[this.itemType]||[]}}),methods:a()({},Object(r.b)("pamm",{fetchRatingTop:"FETCH_PAMM_RATING"})),watch:{itemType:{immediate:!0,handler:function(e){this.fetchRatingTop({itemType:e})}}}},s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("div",{staticClass:"-pamm-rating"},[e._t("before"),n("widget",{attrs:{items:e.items,itemType:e.itemType,links:e.links,url:e.url,iframe:e.iframe}}),e._t("after")],2):e._e()},l=[],p={render:s,staticRenderFns:l},o=p,u=n(128),c=u(m,o,!1,null,null,null);t.default=c.exports}});