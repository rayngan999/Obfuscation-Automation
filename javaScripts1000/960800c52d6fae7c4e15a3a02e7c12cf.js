webpackJsonp([246],{2651:function(t,e,r){var n=r(2652);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(1249)("46d6aad4",n,!0,{})},2652:function(t,e,r){e=t.exports=r(1248)(!1),e.push([t.i,'.-breadcrumb{font-size:12px;line-height:24px;color:#3b3c3c}[dir] .-breadcrumb{padding:8px 0}[dir=rtl] .-breadcrumb{font-size:16px}.-breadcrumb__item{display:inline-block}.-breadcrumb__item:after{content:"/"}[dir] .-breadcrumb__item:after{margin:0 5px}.-breadcrumb__item:last-child:after{display:none}',""])},3975:function(t,e,r){"use strict";function n(t){r(2651)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(136),a=r.n(i),s=r(129),o=r.n(s),u=r(37),c=r.n(u),m=r(103),d={name:"Breadcrumb",props:{background:{type:String,required:!1,default:"white"},isHidden:{type:Boolean,required:!1,default:!1},customItems:{type:Array,required:!1,default:null},dynamicCaptions:{type:Object,required:!1,default:null},dynamicParams:{type:Object,required:!1,default:null}},data:function(){return{isAborted:!1}},computed:c()({},Object(m.e)("menu",{menu:function(t){return t.items}}),Object(m.e)("seo",{seoData:function(t){return t.pages[this.$route.path]}}),{isShowed:function(){if(this.isHidden)return!1;if("notFound"===this.$route.name)return!1;if(this.customItems)return!0;var t=this.$route.path.length;return this.$route.path.slice(1,t-1).split("/").splice(1).length>1},breadcrumb:function(){this.isAborted=!1;var t=this.customItems?[].concat(o()(this.customItems)):this.generateItems(this.menu);return t.push({route:"main",caption:this.$t("block_menu.main")}),t.reverse(),t}}),methods:c()({},Object(m.d)("menu",{setCurrentRouteRoot:"SET_CURRENT_ROUTE_ROOT"}),{generateItems:function(t){for(var e=[],r=0;r<t.length&&!this.isAborted;r+=1){var n=t[r].meta;if(!(n&&n.showInMenuOn&&!n.showInMenuOn.includes(this.$locale)||n&&n.hideFromMenuOn&&n.hideFromMenuOn.includes(this.$locale))){var i=this.dynamicCaptions&&this.dynamicCaptions[t[r].route],a=this.dynamicParams&&this.dynamicParams[t[r].route];if(t[r].route===this.$route.name){this.isAborted=!0;var s=this.$route.meta,u=s&&s.hideFromBreadcrumb,c=s&&s.hideFromBreadcrumbOn&&s.hideFromBreadcrumbOn.includes(this.$locale);u||c||e.push({route:t[r].route,params:a||null,caption:i||t[r].crumbCaption&&this.$t("block_breadcrumb."+t[r].crumbCaption)||this.$t("block_menu."+t[r].caption)})}if(t[r].children){var m=t[r].children.reduce(function(t,e){return t.concat(e)},[]),d=this.generateItems(m);e.push.apply(e,o()(d)),d.length&&e.push({route:t[r].route,params:a||null,caption:i||t[r].crumbCaption&&this.$t("block_breadcrumb."+t[r].crumbCaption)||this.$t("block_menu."+t[r].caption)})}}}return e},getRouteParams:function(t){return t&&"object"===(void 0===t?"undefined":a()(t))?t:{}}}),created:function(){var t=this.breadcrumb.length>1?this.breadcrumb[1].route:null;this.setCurrentRouteRoot(t)}},l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isShowed?r("app-section",{attrs:{background:t.background}},[r("ul",{staticClass:"-breadcrumb",attrs:{itemscope:"",itemtype:"http://schema.org/BreadcrumbList"}},t._l(t.breadcrumb,function(e,n){return r("li",{key:n,staticClass:"-breadcrumb__item",attrs:{itemscope:"",itemprop:"itemListElement",itemtype:"http://schema.org/ListItem"}},[e.route===t.$route.name?r("span",{attrs:{itemprop:"name"},domProps:{innerHTML:t._s(t.seoData&&t.seoData.lastCrumb||e.caption)}}):r("router-link",{staticClass:"-link",attrs:{to:{name:e.route,params:Object.assign({},{lang:t.$locale},t.getRouteParams(e.params))},itemprop:"item"}},[r("span",{attrs:{itemprop:"name"},domProps:{innerHTML:t._s(e.caption)}})]),r("meta",{attrs:{itemprop:"position",content:n+1}})],1)}),0)]):t._e()},p=[],h={render:l,staticRenderFns:p},b=h,f=r(128),_=n,g=f(d,b,!1,_,null,null);e.default=g.exports}});