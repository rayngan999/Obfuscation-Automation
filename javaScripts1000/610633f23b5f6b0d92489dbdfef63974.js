(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/YVw":function(e,t,i){"use strict";var n=i("a6pb"),s=i.n(n),o=i("W/Ws"),l=i.n(o),a=i("RYts"),r=i.n(a),c=i("OFJt"),h=i.n(c),u=i("SEqL"),p=i.n(u),d=i("Ky+k"),m=i.n(d),f=i("WItJ"),g=i.n(f),v=i("usSF"),b=i("0sT/"),k=i("Cr5+");t.a=b.a.extend({model:k.a,pageSizes:{SM:16,MD:32,LG:48},_guyBufferThreshold:4,_guyBuffer:[],initialize:function(e,t){this.App=t.App,this.url=t.url,this.scrollable=t.scrollable,this.options=t,this.data={},this._filter=s()(t),this._seed=t.seed,this._withRadius=t.withRadius,this.setGridType(t.radarStyle||this.App.me.settingsModel.getRadarStyle());var i=g.a.findKey(this.App.isViewport);this.chunkSize=t.pageSize||this.pageSizes[i],this.pageSize=2*this.chunkSize,this.withTravellers=t.withTravellers},refresh:function(e){this.filterWith(e),this._paused?this._needsRefresh=!0:this.first()},togglePaused:function(e){this._paused=e,!e&&this._needsRefresh&&(this.first(),delete this._needsRefresh)},setGridType:function(e){this.gridType=e||(this.App.isViewport.SM?"TILES_SMALL":"TILES_MIXED")},reset:function(){return this._guyBuffer=[],b.a.prototype.reset.apply(this,arguments)},resetToPlaceholders:function(){var e,t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this._placeholders){this._placeholders=!0;var n=i.bigTiles||"TILES_BIG"===this.gridType,s=l()(e=g.a.range(this.pageSize/4)).call(e,(function(){return new k.a(n?{}:{guys:[{},{},{},{}]})}));this.reset(s),this.once("sync",(function(){return delete t._placeholders}))}},parse:function(e){var t,i=this;return g.a.each(e,(function(e){"ROMEO"===e.type&&(e.is_plus=g.a.get(e,"display.large_tile"))})),this.App.me.badges.addBadges(e),"TILES_BIG"===this.gridType||this.options.skipGrouping?e:"TILES_SMALL"===this.gridType?l()(t=g.a.chunk(e,this._guyBufferThreshold)).call(t,(function(e){return{guys:e}})):"LIST_VIEW"===this.gridType?e:"TILES_MIXED"===this.gridType?e=r()(e).call(e,(function(t,n,s){var o,l,a;(n.preview_pic||(n.display.large_tile=!1),"ESCORT"===n.type&&g.a.set(n,"display.large_tile",n.is_plus),n.display&&!0===n.display.large_tile?t.push(n):(o=n,i._guyBuffer.push(o),i._guyBuffer.length>=i._guyBufferThreshold&&(t.push({guys:h()(l=i._guyBuffer).call(l,0,i._guyBufferThreshold)}),i._guyBuffer=[])),i.hasNext()||s!==e.length-1)||(t.push({guys:h()(a=i._guyBuffer).call(a,0,i._guyBufferThreshold)}),i._guyBuffer=[]);return t}),[]):void 0},size:function(){return this.flatten().size()},flatten:function(){var e;return new(m.a.Collection.extend({model:this.model}))(l()(e=g()(this.toJSON())).call(e,(function(e){return e.guys||e})).flatten().value(),{App:this.App})},filterWith:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.location,i=e.sorting,n=s()(e),o=e.seed;if(t=t||g.a.get(this.data,"filter.location")||this.App.me.settingsProfileModel.get("location"),t=g.a.pick(t,"lat","long"),i=i||this.data.sort_criteria||"NEARBY_ASC",n=n||this._filter||s()(this.data)||{},o=o||this.data.seed||this._seed,n instanceof v.a.Object){var l=!1!==this._withRadius&&(!p()(g.a).call(g.a,["ALPHABETICAL_ASC","NEARBY_ASC"],i)||"TRAVELLERS_ONLY"===n.model.get("travellers_filter")),a=this.withTravellers;g.a.isUndefined(a)&&(a=!p()(g.a).call(g.a,["LAST_LOGIN_DESC","SIGNUP_DESC"],i)),n=n.model.toSearchJSON({withRadius:l,withTravellers:a})}n.location=g.a.extend(n.location||{},t),this.data={seed:o,sort_criteria:i,filter:n,scrollable:this.scrollable},"RANDOM"!==i&&delete this.data.seed}})},"2frL":function(e,t,i){var n=i("cQRC");e.exports=(n.default||n).template({1:function(e,t,i,n,s){return" is-hidden"},3:function(e,t,i,n,s){return'    <div class="layout-item layout-item--consume" >\n      <div class="js-navigation layout-item--consume ui-navbar--scrollable"></div>\n      <div class ="ui-navbar--scrollable__curtain-left"></div>\n      <div class ="ui-navbar--scrollable__curtain-right"></div>\n    </div>\n'},5:function(e,t,i,n,s){return'    <div class="js-navigation layout-item--consume ui-navbar-spaced"></div>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){var o,l,a=null!=t?t:e.nullContext||{},r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<ul class="js-nav-sidebar content-nav__actions content-nav__actions--left layout layout--h-center l-hidden-sm" >\n  <li class="js-filter-button layout-item  layout-item--consume pv-"></li>\n  <li class="js-toggle-bookmarks layout-item bookmarks-navigation"></li>\n</ul>\n\n<div class="content-nav__mobile-startpage'+(null!=(o=r(i,"unless").call(a,null!=t?r(t,"withStartpage"):t,{name:"unless",hash:{},fn:e.program(1,s,0),inverse:e.noop,data:s,loc:{start:{line:9,column:41},end:{line:9,column:87}}}))?o:"")+'">\n  <a href="/'+e.escapeExpression("function"===typeof(l=null!=(l=r(i,"logoLink")||(null!=t?r(t,"logoLink"):t))?l:e.hooks.helperMissing)?l.call(a,{name:"logoLink",hash:{},data:s,loc:{start:{line:10,column:12},end:{line:10,column:24}}}):l)+'" class="marionette"><span class="js-startpage"></span></a>\n</div>\n\n'+(null!=(o=r(i,"if").call(a,null!=t?r(t,"isScrollable"):t,{name:"if",hash:{},fn:e.program(3,s,0),inverse:e.program(5,s,0),data:s,loc:{start:{line:14,column:2},end:{line:22,column:9}}}))?o:"")+'\n\n<div class="layout-item content-nav__actions js-action">\n\n</div>\n'},useData:!0})},H5fK:function(e,t,i){var n=i("cQRC");e.exports=(n.default||n).template({1:function(e,t,i,n,s,o,l){var a,r,c=e.lambda,h=e.escapeExpression,u=null!=t?t:e.nullContext||{},p=e.hooks.helperMissing,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <li class="'+h(c(null!=(a=null!=l[1]?d(l[1],"s"):l[1])?d(a,"list__item"):a,t))+" "+(null!=(a=d(i,"if").call(u,null!=t?d(t,"selected"):t,{name:"if",hash:{},fn:e.program(2,s,0,o,l),inverse:e.noop,data:s,loc:{start:{line:3,column:35},end:{line:3,column:85}}}))?a:"")+'">\n      <a href="'+h("function"===typeof(r=null!=(r=d(i,"url")||(null!=t?d(t,"url"):t))?r:p)?r.call(u,{name:"url",hash:{},data:s,loc:{start:{line:4,column:15},end:{line:4,column:22}}}):r)+'" class="js-nav-item '+h(c(null!=(a=null!=l[1]?d(l[1],"s"):l[1])?d(a,"link"):a,t))+" "+(null!=(a=d(i,"if").call(u,null!=t?d(t,"selected"):t,{name:"if",hash:{},fn:e.program(4,s,0,o,l),inverse:e.noop,data:s,loc:{start:{line:4,column:57},end:{line:4,column:101}}}))?a:"")+' marionette">'+h((d(i,"t")||t&&d(t,"t")||p).call(u,null!=t?d(t,"label"):t,{name:"t",hash:{},data:s,loc:{start:{line:4,column:114},end:{line:4,column:125}}}))+"</a>\n    </li>\n"},2:function(e,t,i,n,s,o,l){var a,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression(e.lambda(null!=(a=null!=l[1]?r(l[1],"s"):l[1])?r(a,"list__item--active"):a,t))},4:function(e,t,i,n,s,o,l){var a,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression(e.lambda(null!=(a=null!=l[1]?r(l[1],"s"):l[1])?r(a,"link--active"):a,t))},compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s,o,l){var a,r,c=e.lambda,h=e.escapeExpression,u=null!=t?t:e.nullContext||{},p=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<ul class="'+h(c(null!=(a=null!=t?p(t,"s"):t)?p(a,"list"):a,t))+' l-hidden-sm">\n'+(null!=(a=p(i,"each").call(u,null!=t?p(t,"items"):t,{name:"each",hash:{},fn:e.program(1,s,0,o,l),inverse:e.noop,data:s,loc:{start:{line:2,column:2},end:{line:6,column:11}}}))?a:"")+'</ul>\n\n<ul class="'+h(c(null!=(a=null!=t?p(t,"s"):t)?p(a,"list"):a,t))+' l-hidden-md-lg">\n  <li>\n    <a class="back-button l-tappable marionette" href="'+h("function"===typeof(r=null!=(r=p(i,"backUrl")||(null!=t?p(t,"backUrl"):t))?r:e.hooks.helperMissing)?r.call(u,{name:"backUrl",hash:{},data:s,loc:{start:{line:11,column:55},end:{line:11,column:66}}}):r)+'">\n      <span class="icon icon-back icon-large pl-"></span>\n    </a>\n  </li>\n</ul>\n'},useData:!0,useDepths:!0})},H6wV:function(e,t,i){"use strict";var n=i("YtD1"),s=i.n(n),o=i("aoOM"),l=i.n(o),a=i("Ky+k"),r=i.n(a),c=i("WItJ"),h=i.n(c);t.a=r.a.Collection.extend({getSelectedItem:function(){return s()(this).call(this,{selected:!0})},unsetSelected:function(e){var t=this.getSelectedItem();t&&t.set({selected:!1},e)},findByUrl:function(e){return s()(this).call(this,(function(t){return l()(h.a).call(h.a,t.get("url"),e)}))},isSelected:function(e){return this.findByUrl(e)===this.getSelectedItem()},selectItem:function(e){var t=this.findByUrl(e);if(t)return this.unsetSelected(),t.set({selected:!0}),t}})},H84D:function(e,t,i){var n=i("cQRC");e.exports=(n.default||n).template({1:function(e,t,n,s,o){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'    <span class="pl- l-hidden-md-lg '+e.escapeExpression(e.lambda(null!=(l=null!=t?a(t,"s"):t)?a(l,"Back"):l,t))+'">'+(null!=(l=e.invokePartial(i("MaYs"),t,{name:"_back",data:o,helpers:n,partials:s,decorators:e.decorators}))?l:"")+"</span>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){var o,l,a=e.lambda,r=e.escapeExpression,c=null!=t?t:e.nullContext||{},h=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="'+r(a(null!=(o=null!=t?h(t,"s"):t)?h(o,"Wrapper"):o,t))+'">\n'+(null!=(o=h(i,"if").call(c,null!=t?h(t,"backUrl"):t,{name:"if",hash:{},fn:e.program(1,s,0),inverse:e.noop,data:s,loc:{start:{line:2,column:2},end:{line:4,column:9}}}))?o:"")+'\n  <div class="js-nav-item '+r(a(null!=(o=null!=t?h(t,"s"):t)?h(o,"Label"):o,t))+'">\n    '+r("function"===typeof(l=null!=(l=h(i,"label")||(null!=t?h(t,"label"):t))?l:e.hooks.helperMissing)?l.call(c,{name:"label",hash:{},data:s,loc:{start:{line:7,column:4},end:{line:7,column:13}}}):l)+"\n  </div>\n</div>\n"},usePartial:!0,useData:!0})},M65i:function(e,t,i){var n=i("cQRC");e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){return'<div class="js-filter-button"/>\n'},useData:!0})},V50n:function(e,t,i){var n=i("cQRC");e.exports=(n.default||n).template({1:function(e,t,i,n,s,o,l){var a,r=e.lambda,c=e.escapeExpression,h=null!=t?t:e.nullContext||{},u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <li class="'+c(r(null!=(a=null!=l[1]?u(l[1],"s"):l[1])?u(a,"Tabbed-nav-item"):a,t))+(null!=(a=u(i,"if").call(h,null!=t?u(t,"selected"):t,{name:"if",hash:{},fn:e.program(2,s,0,o,l),inverse:e.noop,data:s,loc:{start:{line:2,column:37},end:{line:2,column:77}}}))?a:"")+'">\n    <a href="'+c(r(null!=t?u(t,"url"):t,t))+'" class="js-nav-item '+c(r(null!=(a=null!=l[1]?u(l[1],"s"):l[1])?u(a,"Tabbed-nav-link"):a,t))+(null!=(a=u(i,"if").call(h,null!=t?u(t,"selected"):t,{name:"if",hash:{},fn:e.program(2,s,0,o,l),inverse:e.noop,data:s,loc:{start:{line:3,column:70},end:{line:3,column:110}}}))?a:"")+'" data-id="'+c(r(null!=t?u(t,"id"):t,t))+'">\n      '+c((u(i,"t")||t&&u(t,"t")||e.hooks.helperMissing).call(h,null!=t?u(t,"label"):t,{name:"t",hash:{},data:s,loc:{start:{line:4,column:6},end:{line:4,column:22}}}))+"\n    </a>\n  </li>\n"},2:function(e,t,i,n,s){return" is-selected"},compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s,o,l){var a,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(a=r(i,"each").call(null!=t?t:e.nullContext||{},null!=t?r(t,"navElements"):t,{name:"each",hash:{},fn:e.program(1,s,0,o,l),inverse:e.noop,data:s,loc:{start:{line:1,column:0},end:{line:7,column:9}}}))?a:""},useData:!0,useDepths:!0})},Vnpi:function(e,t,i){var n=i("cQRC");e.exports=(n.default||n).template({1:function(e,t,i,n,s){var o,l=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,r=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'title="'+r((c(i,"t")||t&&c(t,"t")||a).call(l,"user_search_bookmark_save_label",{name:"t",hash:{},data:s,loc:{start:{line:9,column:7},end:{line:9,column:46}}}))+": "+r("function"===typeof(o=null!=(o=c(i,"bookmarkName")||(null!=t?c(t,"bookmarkName"):t))?o:a)?o.call(l,{name:"bookmarkName",hash:{},data:s,loc:{start:{line:9,column:48},end:{line:9,column:64}}}):o)+'"\n'},compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){var o,l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<button class="\njs-button\njs-context-menu-trigger\nui-navbar__button\nui-navbar__button--bookmarks\nmarionette\n"\n'+(null!=(o=l(i,"if").call(null!=t?t:e.nullContext||{},null!=t?l(t,"hasActiveBookmark"):t,{name:"if",hash:{},fn:e.program(1,s,0),inverse:e.noop,data:s,loc:{start:{line:8,column:0},end:{line:10,column:7}}}))?o:"")+'>\n  <span class="js-bookmark-icon\n    icon\n    icon-larger\n    icon-bookmark-outlined\n  "></span>\n</button>\n<div class=\'js-context-menu-content js-scrollable content-nav__dropdown content-nav__dropdown--tab ui-context-menu__content '+e.escapeExpression(e.lambda(null!=(o=null!=t?l(t,"s"):t)?l(o,"BookmarksDropdown"):o,t))+" l-hidden-sm'>\n  <div class='js-bookmarks-list-for-big-screens'/>\n</div>\n"},useData:!0})},XsnM:function(e,t,i){"use strict";var n=i("6g15"),s=i.n(n),o=i("usSF"),l=i("T6Jx"),a=i("b8Eu"),r=i("Xu1Y"),c={"item-container":"item-container--sL_VY",item:"item--1nZ89","item__is-selected":"item__is-selected--2Ii0L",item__deletable:"item__deletable--2VJT4","item-label":"item-label--3hZg9"},h=i("glZr"),u=i.n(h),p=o.a.View.extend({template:u.a,tagName:"li",className:["confirmable",c["item-container"]].join(" "),serializeData:function(){return{s:c,name:this.model.get("name")}},ui:{item:".js-item",name:".js-name",delete:".js-delete"},classNames:{selected:c["item__is-selected"]},events:{"click @ui.name":"onNameClick"},triggers:{"click @ui.delete":"confirm:show"},onNameClick:function(e){e.preventDefault(),this.triggerMethod("filter:set",this.model)},toggleSelection:function(e){this.ui.item.toggleClass(this.classNames.selected,e)}});t.a=o.a.CollectionView.extend({tagName:"ul",className:function(){return"js-scrollable"+(this.options.renderInDropdown?"":" fit")},childView:p,behaviors:{confirm:{behaviorClass:a.a},customScrollbar:{behaviorClass:l.a}},onConfirm:function(e){e.model.destroy()},childViewEvents:{"filter:set":function(e){this.App.me.filterControllers.ROMEO.reset(e.toJSON()),r.a.trackEvent("filters","apply_bookmark")},"confirm:show":"showConfirm"},onContextMenuClose:function(){this.triggerMethod("confirm:close")},setSelection:function(){var e;s()(e=this.children).call(e,(function(e){return e.toggleSelection(!1)}));var t=this.settingsModel.get("bluebird.search_filter.id"),i=this.collection.get(t);i&&this.children&&this.children.findByModel(i)&&this.children.findByModel(i).toggleSelection(!0)},onAttach:function(){this.setSelection()},initialize:function(e){var t=this;this.App=e.App,this.settingsModel=this.App.me.settingsModel,this.collection=this.App.me.bookmarksCollection,this.listenTo(this.App.me.filterControllers.ROMEO.settingsModel,"change",(function(){t.setSelection()}))}})},YQdB:function(e,t,i){"use strict";var n=i("zCaT"),s=i.n(n),o=i("vlZD"),l=i.n(o),a=i("a6pb"),r=i.n(a),c=i("lIhp"),h=i.n(c),u=i("6g15"),p=i.n(u),d=i("5Xqx"),m=i.n(d),f=i("A4SK"),g=i.n(f),v=i("5yz7"),b=i.n(v),k=i("yg+8"),w=i.n(k),_=i("YtD1"),y=i.n(_),C=i("sEZv"),S=i.n(C),V=i("5kxA"),A=i.n(V),x=i("WItJ"),N=i.n(x),j=i("usSF"),T=i("8zHh"),O=i.n(T),M=i("H6wV"),I={container:"container--32oYt",list:"list--3NEzB",list__item:"list__item--1eeo9","list__item--active":"list__item--active--1Raak",link:"link--1Uep1","link--active":"link--active--3byBr"},B=i("H5fK"),E=i.n(B),L=j.a.View.extend({template:E.a,className:I.container,templateContext:{s:I},events:{"click .js-nav-item":"onClickNavItem"},initialize:function(){this.collection=new M.a(this.options.navigationItems)},serializeData:function(){return{items:this.collection.toJSON(),backUrl:this.collection.at(0).get("url")}},onClickNavItem:function(e){if(this.collection.isSelected(O()(e.currentTarget).attr("href")))return this.triggerMethod("navigation:refresh",this.collection.getSelectedItem()),!1},select:function(e){return this.collection.selectItem(e)}}),P=i("ScNt"),D={Container:"Container--11NfI",Wrapper:"Wrapper--Clkbx",Back:"Back--12FiT",Label:"Label--1_gwC"},R=i("H84D"),z=i.n(R),F=j.a.View.extend({className:D.Container,template:z.a,initialize:function(){this.App=this.options.App,this.listenTo(this.collection,"change:selected add remove reset",this.render)},events:{"click .js-nav-item":"onClickNavItem"},serializeData:function(){var e=this.options.backUrl,t=this.collection.getSelectedItem()||this.collection.at(0),i=t&&t.get("label");return{s:D,label:i,backUrl:e}},onClickNavItem:function(e){e.stopPropagation(),this.triggerMethod("navigation:refresh",this.collection.getSelectedItem())},select:function(e){return this.collection.selectItem(e)}}),U=i("tQb0"),J=i("wToP"),Y=i("akuk"),W=i("ZSmM"),Q=i("Ucss"),G=i("p4U1"),H=(i("xRJz"),i("K6IP")),$=i.n(H),K=i("haUj"),Z=i("NfQq"),X=i("iAtm"),q=i("YOaD"),ee=Object(X.e)(Y.a).attrs({center:!0,as:"button",justifyContent:"space-between"}).withConfig({componentId:"sc-1fml2kn-0"})(["border-radius:",";border:2px solid transparent;color:",";height:2rem;margin-left:1rem;padding:",";&:focus{border-color:",";}",";",";"],Object(W.b)(.25),Q.a.ivory(),Object(W.b)(.5),Q.a.ivory(),(function(e){return e.inactive&&Object(X.d)(["color:",";&:hover{color:",";}"],Q.a.brand(),Q.a.brand(400))}),(function(e){return e.hasActiveFilters&&Object(X.d)(["background-color:rgba(255,255,255,0.1);"])})),te=Object(X.e)("span").withConfig({componentId:"sc-1fml2kn-1"})(["max-width:13rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]),ie=function(e){var t=e.activeFilterCount,i=e.onClick,n=(0,Object(K.a)().t)(1===t?"user_groups_members_filter_single":"user_groups_members_filter_plural",{count:t}),s=Object(Z.e)(q.b),o=0===t&&!s;return $.a.createElement(ee,{hasActiveFilters:!!t,inactive:o,onClick:i},$.a.createElement(G.a,{mr:o?0:.5,label:n}),!o&&$.a.createElement(te,{title:n},s?n:t))},ne=i("h9no"),se=i("M65i"),oe=i.n(se),le=Object(ne.a)(ie),ae=j.a.View.extend({template:oe.a,regions:{filter:".js-filter-button"},initialize:function(){var e=this,t=this.options.filterController;this.isFilterVisible=this.options.isFilterVisible,t&&(this.count=t.countCriteria(),this.listenTo(t,"change reset",(function(){e.count=t.countCriteria(),e.render()})))},onRender:function(){var e=this,t=this.count;this.isFilterVisible&&this.showChildView("filter",new le({App:this.options.App,skin:this.options.skin,props:{activeFilterCount:t,onClick:function(){return e.trigger("filter:toggle")}}}))},toggleIcon:function(e){this.isFilterVisible=e,this.render()}}),re=i("2frL"),ce=i.n(re);function he(e,t){var i=s()(e);if(l.a){var n=l()(e);t&&(n=r()(n).call(n,(function(t){return h()(e,t).enumerable}))),i.push.apply(i,n)}return i}function ue(e){for(var t=1;t<arguments.length;t++){var i,n=null!=arguments[t]?arguments[t]:{};if(t%2)p()(i=he(Object(n),!0)).call(i,(function(t){w()(e,t,n[t])}));else if(m.a)g()(e,m()(n));else{var s;p()(s=he(Object(n))).call(s,(function(t){b()(e,t,h()(n,t))}))}}return e}t.a=j.a.View.extend({className:function(){return S()("ui-navbar content-nav",this.options.action&&"content-nav--animated-2cols")},template:ce.a,ui:{sidebar:".js-nav-sidebar",startpage:".js-startpage",navigation:".js-navigation"},regions:{navigation:"@ui.navigation",bookmarks:".js-toggle-bookmarks",action:".js-action",startpage:"@ui.startpage",filterButton:".js-filter-button"},classNames:{hidden:"is-hidden",disabled:"is-disabled",oneColumnNavigation:"content-nav--animated",twoColumnNavigation:"content-nav--animated-2cols"},navigationConfig:{tabs:{view:U.a,viewOptions:["App","navigationItems"]},single:{view:F,viewOptions:["collection","backUrl"]},breadcrumbs:{view:L,viewOptions:["navigationItems"]}},childViewEvents:{"navigation:refresh":"onNavigationRefresh","explore:location":"onExploreLocation","filter:toggle":"onElementToggleClick"},initialize:function(){var e=this;this.App=this.options.App,this.skin=this.options.skin||"romeo",this.listenTo(this.options.App,"window:viewport:change",(function(){e.render(),e.options.openGrid&&e.options.action&&e.toggleNavigation()}))},isScrollable:function(){var e=this.options.navigationItems&&this.options.navigationItems.length>3;return"tabs"===this.options.type&&e},onRender:function(){var e=this.options,t=e.type,i=e.withBookmarks,n=e.App,s=this.navigationConfig[t].view,o=this.navigationConfig[t].viewOptions,l=N.a.pick(this.options,o);this.isScrollable()&&(l=ue({scrollable:!0},l)),!1!==i&&n.me.canDo("unlimited_searches")&&this.showChildView("bookmarks",new J.a({App:n,withBookmarkName:!0})),this.showChildView("navigation",new s(l)),N.a.isUndefined(this._selectedParam)||this.getChildView("navigation").select(this._selectedParam),this.options.action&&this.showChildView("action",this.options.action()),this.options.withStartpage&&this.showChildView("startpage",new P.a),this.showChildView("filterButton",new ae({App:n,skin:this.skin,isFilterVisible:this.isFilterVisible,filterController:this.options.filterController}))},onDomRefresh:function(){if(this.headroom&&this.headroom.destroy(),this.options.headroom&&this.App.isViewport.SM){var e=this.options.headroom,t=e.el,i=e.content,n=i.hasClass("js-scrollable")?i[0]:y()(i).call(i,".js-scrollable")[0];this.headroom=new A.a(t[0],{tolerance:0,offset:0,scroller:n,classes:{pinned:"expanded",unpinned:"not-expanded",top:"is-content-scroll-top"}}),this.headroom.init()}},onBeforeDestroy:function(){this.headroom&&this.headroom.destroy()},serializeData:function(){return{isScrollable:this.isScrollable()&&this.options.App.isViewport.SM,hideBookmarkIcon:this.App.me.states.get("filterCollapsed"),logoLink:this.App.me.isLoggedIn()?this.App.me.appsController.siteRoot():this.App.defaultRoute,withStartpage:this.options.withStartpage}},onNavigate:function(e){this._selectedParam=e;var t=this.options,i=t.openGrid,n=t.withLocations,s=this.getChildView("navigation").select(e);s&&!n&&this.onNavigationRefresh(s),i&&this.toggleNavigation()},onNavigationRefresh:function(e){this.triggerMethod("content:refresh",e.get("value"))},onExploreLocation:function(e){var t=this,i=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.triggerMethod("content:refresh",ue({location:e},i))};return N.a.has(this,"_selectedParam")?i():this.listenToOnce(this,"navigate",(function(){return i(t.getChildView("navigation").select(t._selectedParam).get("value"))}))},onElementToggleClick:function(){this.options.App.isViewport.SM?this.triggerMethod("regions:toggle",{region:"sidebar",state:!1}):this.triggerMethod("regions:toggle",{region:"sidebar",persist:!0})},toggleFilterIcon:function(e){this.isFilterVisible=e,this.getChildView("filterButton").toggleIcon(e)},toggleNavigation:function(){var e=(!this._selectedParam||0===this._selectedParam.length)&&this.options.App.isViewport.SM;this.ui.navigation.toggleClass(this.classNames.hidden,e),this.$el.toggleClass(this.classNames.oneColumnNavigation,e),this.$el.toggleClass(this.classNames.twoColumnNavigation,!e),this.headroom&&(this.headroom.classes.top=e?"is-content-scroll-top--no-nav":"is-content-scroll-top")},getType:function(){return this.options.type}})},b8Eu:function(e,t,i){"use strict";var n=i("YtD1"),s=i.n(n),o=i("Njy9"),l=i.n(o),a=i("WItJ"),r=i.n(a),c=i("usSF"),h=i("k/fM");t.a=c.a.Behavior.extend({classNames:{confirmBox:"js-confirm-box",confirmable:"confirmable",visible:"is-visible"},initialize:function(){this._confirmViews={},this.listenTo(this.view,"confirm:close",this._toggleVisibility),this.listenTo(this.view,"childview:confirm:show",this.showConfirm),this.listenTo(this.view,"confirm:show",(function(){this.showConfirm(this.view)})),this.view.options.App&&this.listenTo(this.view.options.App,"before:route",this._toggleVisibility)},showConfirm:function(e){var t;if(r.a.isFunction(this.options.skipConfirm)&&this.options.skipConfirm.call(e))return this.view.triggerMethod("confirm",e);var i,n,o,a=e.cid,c=s()(t=e.$el).call(t,"."+this.classNames.confirmBox);this._confirmViews[a]||(this._confirmViews[a]=new h.a({el:c,label:this.options.label,confirmLabel:this.options.confirmLabel}).render(),this.listenToOnce(e,"render",l()(i=this._destroyConfirmView).call(i,this,a)),this.listenToOnce(e,"destroy",l()(n=this._destroyConfirmView).call(n,this,a)),this.listenTo(this._confirmViews[a],"cancel",l()(o=this._toggleVisibility).call(o,this,a)),this.listenTo(this._confirmViews[a],"confirm",(function(){this._destroyConfirmView(a),this.view.triggerMethod("confirm",e)})));this._toggleVisibility(a)},_resolveView:function(e){return this.view.children?this.view.children.findByCid(e):this.view},_destroyConfirmView:function(e){if(this._confirmViews[e]){var t=this._resolveView(e);this._getSlidingElement(t).removeClass(this.classNames.visible),this.stopListening(this._confirmViews[e]),this._confirmViews[e].destroy(),delete this._confirmViews[e]}},_toggleVisibility:function(e){var t=this,i=this.classNames.visible;r.a.each(this._confirmViews,(function(n,s){var o=t._resolveView(s);if(o){var l=t._getSlidingElement(o);e===s?l.toggleClass(i):l.removeClass(i)}}))},_getSlidingElement:function(e){var t,i=s()(t=e.$el).call(t,"."+this.classNames.confirmable);return i.length?i:e.$el},onBeforeDestroy:function(){var e=this;r.a.each(this._confirmViews,(function(t,i){e._destroyConfirmView(i)}))}})},glZr:function(e,t,i){var n=i("cQRC");e.exports=(n.default||n).template({compiler:[8,">= 4.3.0"],main:function(e,t,i,n,s){var o,l,a=e.lambda,r=e.escapeExpression,c=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class="js-item '+r(a(null!=(o=null!=t?c(t,"s"):t)?c(o,"item"):o,t))+" "+r(a(null!=(o=null!=t?c(t,"s"):t)?c(o,"item__deletable"):o,t))+'">\n  <a class="js-name '+r(a(null!=(o=null!=t?c(t,"s"):t)?c(o,"item-label"):o,t))+' txt-truncate" lang="">'+r("function"===typeof(l=null!=(l=c(i,"name")||(null!=t?c(t,"name"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:s,loc:{start:{line:2,column:59},end:{line:2,column:67}}}):l)+'</a>\n  <button class="js-delete marionette">\n    <span class="icon icon-trashcan"></span>\n  </button>\n</div>\n<div class="js-confirm-box confirm-box confirm-box--sliding confirm-box--fit-parent"></div>\n'},useData:!0})},tQb0:function(e,t,i){"use strict";var n=i("8zHh"),s=i.n(n),o=i("usSF"),l=i("H6wV"),a={"Tabbed-nav":"Tabbed-nav--2c5l9","Tabbed-nav-item":"Tabbed-nav-item--2iOWw","Tabbed-nav-link":"Tabbed-nav-link--xyQY6"},r=i("V50n"),c=i.n(r);t.a=o.a.View.extend({template:c.a,tagName:"ul",className:a["Tabbed-nav"],classNames:{hidden:"is-hidden",expanded:"is-expanded",scrollable:"is-scrollable"},events:{"click .js-nav-item":"onClickNavItem"},initialize:function(){var e=this;this.container=this.options.container,this.collection=new l.a(this.options.navigationItems),this.listenTo(this.collection,"change:selected add remove reset",(function(){e.render()})),this.listenTo(this.options.App,"window:viewport:change",(function(){e.render()}))},onRender:function(){var e=this.collection.length<2;this.container&&this.container.toggleClass(this.classNames.hidden,e);var t=this.collection.length>1&&this.collection.length<4,i=this.options.expanded||this.options.App.isViewport.SM&&t;this.$el.toggleClass(this.classNames.expanded,i),this.options.scrollable&&this.$el.toggleClass(this.classNames.scrollable,this.options.App.isViewport.SM)},serializeData:function(){var e=this.collection.getSelectedItem()||this.collection.at(0);return{s:a,selected:e,navElements:this.collection.toJSON()}},onClickNavItem:function(e){if(this.collection.isSelected(s()(e.currentTarget).attr("href")))return this.triggerMethod("navigation:refresh",this.collection.getSelectedItem()),!1},select:function(e){return this.collection.selectItem(e)}})},wToP:function(e,t,i){"use strict";var n=i("usSF"),s=i("AsJi"),o=i("XsnM"),l={BookmarksDropdown:"BookmarksDropdown--in4oA"},a=i("Vnpi"),r=i.n(a);t.a=n.a.View.extend({className:"typo-reset typo-right",template:r.a,ui:{button:".js-button",bookmarksListForBigScreens:".js-bookmarks-list-for-big-screens"},behaviors:{contextMenu:{behaviorClass:s.a}},regions:{bookmarksListForBigScreens:"@ui.bookmarksListForBigScreens"},triggers:{"click @ui.button":"clicked"},onClicked:function(){this.App.isViewport.SM&&(this.options.onClick(),this.triggerMethod("filter:toggle:bookmarks"))},serializeData:function(){return{hasActiveBookmark:!!this.App.me.getActiveBookmarkName(),bookmarkName:this.App.me.getActiveBookmarkName(),classNames:this.classNames,s:l}},onRender:function(){this.App.isViewport.SM||this.showChildView("bookmarksListForBigScreens",new o.a({App:this.App,renderInDropdown:!0})),0===this.App.me.bookmarksCollection.length?this.$el.addClass("is-hidden"):this.$el.removeClass("is-hidden")},initialize:function(e){var t=this;this.App=e.App,this.listenTo(this.App.me.filterControllers.ROMEO.settingsModel,"change",(function(){t.render()}))}})}}]);