/**
 * Stackla is made available under a commercial licence
 * and is subject to Stackla's Terms of Service.
 *
 * Refer to https://stackla.com/terms-of-service/ 
 * or contact support@stackla.com for further clarification.
 *
 * Built on 2021-08-02 14:08:45
 */
window.Modernizr=function(a,b,c){function d(a){s.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&s[e]!==c)return"pfx"!=b||e}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+v.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+w.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.3",n={},o=!0,p=b.documentElement,q="modernizr",r=b.createElement(q),s=r.style,t=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),u="Webkit Moz O ms",v=u.split(" "),w=u.toLowerCase().split(" "),x={},y=[],z=y.slice,A=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:q+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',q,'">',a,"</style>"].join(""),j.id=q,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=p.style.overflow,p.style.overflow="hidden",p.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),p.style.overflow=i),!!g},B={}.hasOwnProperty;l=e(B,"undefined")||e(B.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return B.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=z.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(z.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(z.call(arguments)))};return d}),x.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:A(["@media (",t.join("touch-enabled),("),q,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c};for(var C in x)l(x,C)&&(k=C.toLowerCase(),n[k]=x[C](),y.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof o&&o&&(p.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),r=j=null,n._version=m,n._prefixes=t,n._domPrefixes=w,n._cssomPrefixes=v,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=A,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(o?" js "+y.join(" "):""),n}(this,this.document),function(){"use strict";window.Stackla=window.Stackla||{};var a=window.Stackla;a.createClass=function(){var b,c,d,e,f,g,h;if(d=function(){for(var a,b,c=this,d=this,e=[],f=[];d;)d.initializer&&e.push(d.initializer),d.destructor&&f.push(d.destructor),d=d.$parent;for(a=e.length-1;a>=0;a--)e[a].apply(this,arguments);c.destroy?(b=c.destroy,c.destroy=function(){for(a=f.length-1;a>=0;a--)f[a].apply(this,arguments);b.call(this)}):c.destroy=function(){for(a=f.length-1;a>=0;a--)f[a].apply(this,arguments)}},e=function(a,b){var c,d,e;for(d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);if(!Object.getOwnPropertyNames)for(c=["toString","valueOf","toLocaleString","isPrototypeOf","propertyIsEnumerable","hasOwnProperty"],d=0,e=c.length;d<e;d++)"function"==typeof b[c[d]]&&b[c[d]].toString().indexOf("[native code]")===-1&&(a[c[d]]=b[c[d]]);return a.$super=function(a){return this.$parent[a].apply(this.$parent,Array.prototype.slice.call(arguments,1))},a},!arguments.length)throw new Error("You need to specify either parent class or methods object");return"function"==typeof arguments[0]?(b=arguments[0],c=arguments[1]):c=arguments[0],b&&(e(d.prototype,b.prototype),d.prototype.$parent=b.prototype),e(d.prototype,c),d.prototype.constructor=d,d.prototype.initializer||(d.prototype.initializer=function(){}),d.prototype.destructor||(d.prototype.destructor=function(){}),_.isString(arguments[arguments.length-1])&&(f=arguments[arguments.length-1],g=f.split("."),"Stackla"===g[0]&&g.shift(),h=a,_.each(g,function(a,b){b===g.length-1?h[a]=d:_.isUndefined(h[a])&&(h[a]={}),h=h[a]})),d},window.Stackla=a}(),function(){"use strict";var a=Stackla.createClass({initializer:function(a){var b=this,c=b.getParams("debug");a=a||{},c?b.debug="true"===c||"1"===c:a.debug?b.debug=a.debug===!0:b.debug=!1,b._listeners=[]},toString:function(){return"Base"},log:function(a,b){var c,d=this,e=d.debug;e!==!0&&"1"!==e&&"true"!==e&&e!==d.toString()||(b=b||"info",window.console&&window.console[b]&&(d.toString()&&(c="["+d.toString()+"] "),"string"==typeof a?window.console[b](c+a):c?window.console[b](c,a):window.console[b](a)))},on:function(a,b){var c=this;if(!a||!b)throw new Error("Both event type and callback are required parameters");return c.log("on() - event '"+a+"' is subscribed"),c._listeners[a]||(c._listeners[a]=[]),b.instance=c,c._listeners[a].push(b),this},emit:function(a,b,c){var d,e=this,f=0;if(e.log("emit() - event '"+a+"' is triggered"),b=b||[],b.unshift({type:a,target:this}),!a)throw new Error("Lacks of type parameter");if(e._listeners[a]&&e._listeners[a].length)for(d in e._listeners[a])e._listeners[a].hasOwnProperty(d)&&(e._listeners[a][d].apply(this,b),f+=1);return 0!==f},getParams:function(a){var b=this,c=b.getUrl(),d={};return c.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,b,c){d[b]=c.replace(/[\/\^\*#!$&;:{}=\`~]/g,"")}),a?d[a]:d},getUrl:function(){return window.location.href},destroy:function(){var a=this;_.each(a._listeners,function(b){_.eachRight(b,function(c,d){c.instance===a&&b.splice(d,1)})})}});Stackla.Base=a}(),function(a,b){"use strict";"object"==typeof module&&module.exports?module.exports=b():_.set(a,"Stackla.Display.Filter",b())}(this,function(){"use strict";function a(b){return _.isObject(b)?_(b).omit(_.isUndefined).omit(_.isNull).map(function(b,c){return[c,a(b)]}).object().value():b}function b(b){return $.param(a(b))}function c(b){b=b||{};var c=["draft_id","filter_id","geohash","tag_group","available_products_only","limit","media","page","search","tags","data_tags","tags_grouped_as","tile_id","ttl","visible_on","wid"];return b=_.pick(b,c),b=_.assign({tag_group:null,available_products_only:!1,draft_id:null,filter_id:null,limit:30,page:1,search:null,tags:null,data_tags:null,tags_grouped_as:null,tile_id:null,ttl:30,visible_on:"all",wid:null},b),a(b)}function d(a,b){var c,d=_.get(a,"filters_pinned_on",[]);return!!a.is_pin&&(c=_.find(d,function(a){return"0"===a.filter_id.toString()||!!a.filter_id&&a.filter_id.toString()===b}),!!c)}function e(a,b){return a=a||[],_.filter(a,function(a){return!d(a,b)})}function f(a,b,c){return b=parseInt(b,10),!_.isArray(a)||_.isArray(a)&&_.isEmpty(a)?[]:_.select(a,function(a){return!(_.isArray(a.visible_on)&&!_.isEmpty(a.visible_on)&&!_.contains(a.visible_on,"all")&&!_.contains(a.visible_on,c))&&(!!_.isArray(a.filters_pinned_on)&&_.any(a.filters_pinned_on,function(c){return(0===c.filter_id||c.filter_id===b)&&(a.position=c.position,!0)}))})}function g(a,b){var c=_(a).filter(function(a){return d(a,b)}).sortByOrder(["position"],["asc"]).value(),e=_.reject(a,function(a){return d(a,b)});a=_.clone(e);var f=0;return _.each(c,function(c){for(;;){var e=c.position+f-1;if(!a[e]||!d(a[e],b)){a.splice(e,0,c);break}f++}}),_.clone(a)}function h(a,b,c,d){a=f(a,c,d),b=e(b,c);var h=[].concat(a,b);return g(h,c)}function i(a,d,e){d=d||{},d.filter_id=a,d=c(d);var f=$.Deferred(),g="/widget/api?"+b(d),i="/widget/pins?"+b(d),j=d.visible_on||"all";return e=e||!1,d.filter_id?(e&&!d.tile_id?$.when($.ajax({url:i}),$.ajax({url:g})).then(function(b,c){var d=b[0],e=c[0],k=[].concat(d,e),l=h(d,e,a,j);f.resolve(l,g,i,k,e,d)},function(a){f.reject(a,g,i)}):(i=null,$.ajax(g).then(function(a){var b=[].concat(a);f.resolve(a,g,i,b,a)},function(a){f.reject(a,g,i)})),f):f.reject("The params.filter_id is required")}return{buildQuery:b,getParams:c,rejectPins:e,filterPins:f,movePins:g,mergeData:h,load:i}}),function(){"use strict";Stackla.Plugin=Stackla.createClass(Stackla.Base,{initializer:function(a){a=a||{};var b=this;b.log("Stackla.Plugin.initializer() is executed"),b.emit("ready",[b]),b.guid=a.guid||null,b.in_iframe=self!==top},getTemplate:function(a){var b=this,c=$("#tpl-"+a);return b.log("getTemplate('"+a+"') is executed"),!(_.isUndefined(a)||!c.length)&&c.html()},getTemplates:function(){var a=this;return a.log("getTemplates() is executed"),_.map($(".plugin-template"),function(a){return{key:a.id.replace("tpl-",""),html:a.innerHTML}})},getViewDimension:function(){var a=this;return a.log("getViewDimension() is executed"),[document.body.scrollWidth,$("body").height()]},trackPageview:function(a){var b=this,c=!1;return b.log("trackPageView() is executed"),window._gaq&&(b.log("trackPageView() uses Google Analytics"),window._gaq.push(["_trackPageview",a]),c=!0),c}})}(),function(){function a(a,b){var c=b.map(function(a){return a._id.$id});return _.filter(a,function(a){return c.indexOf(a._id.$id)===-1})}var b=Stackla.createClass(Stackla.Plugin,{initializer:function(a){var c,d,e,f,g,h=this;h.log("initializer() is executed (Stackla.Plugin.Tiles)"),a=a||{},h.allTiles=[],h.container=$(a.container),0===h.container.length&&(h.container=$("body")),h.appendRoot=_.isUndefined(a.appendRoot)?h.container:$(a.appendRoot),h.prependRoot=_.isUndefined(a.prependRoot)?h.container:$(a.prependRoot),h.style=a.style||{},h.config=a.config||{},h.custom_css=a.custom_css||null,h.custom_js=a.custom_js||null,h.custom_tile=a.custom_tile||null,h.filter_id=a.filter_id||0,h.search=a.search||null,h.tag_group=a.tag_group||"",h.available_products_only=a.available_products_only||!1,h.tags=a.tags||null,h.tags_grouped_as=a.tags_grouped_as||null,h.tile_id=a.tile_id||null,h.geohash=a.geohash||null,h.media=Array.isArray(a.media)?a.media.join(","):a.media||"",h.filter_options=a.filter_options||{},h.template=a.template||h.getTemplate("tile")||b.TEMPLATE,h.onInit=a.onInit||function(){},h.onLoad=a.onLoad||function(){},h.onBeforeIterate=a.onBeforeIterate||function(){},h.onIterate=a.onIterate||function(){},h.onBeforeAppend=a.onBeforeAppend||function(){},h.onAppend=a.onAppend||function(){},h.onBeforeRender=a.onBeforeRender||function(){},h.onRender=a.onRender||function(){},h.onMessage=a.onMessage||function(){},h.onBeforeInsert=a.onBeforeInsert||function(){},h.onInsert=a.onInsert||function(){},h.onBeforeLoadMore=a.onBeforeLoadMore||function(){},h.onLoadMore=a.onLoadMore||function(){},h.render?(c=h.render,h.render=function(){h.renderer(c)}):h.render=h.renderer,h.iterate?(d=h.iterate,h.iterate=function(a){return h.iterator(a,d)}):h.iterate=h.iterator,h.append?(e=h.append,h.append=function(a,b){return h.appender(a,b,e)}):h.append=h.appender,h.receive?(g=h.receive,h.receive=function(a,b){return h.receiver(a,b,g)}):h.receive=h.receiver,h.prepend?(f=h.prepend,h.prepend=function(a,b){return h.prepender(a,b,f)}):h.prepend=h.prepender;var i=_.get(Stackla,"Display.Track");i&&i.bind(h),h.onInit(h),h.emit("init",[h,a]),$(document).on("UPDATE_TILE",function(a,b){h.postMessage("tileUpdate",{tileChanges:b})})},emit:EventMixin.emit,on:EventMixin.on,afterFilterLoad:function(b,c,d,e){var f=this,g="before"+_.capitalize(b),h="onBefore"+_.capitalize(b);c=a(c,f.allTiles),f.onLoad(c,e),f.emit("load",[c,e]),f.trackPageview(d),f[h](f.appendRoot,c),f.emit(g,[f.appendRoot,c]),f.processor(c),_.each(c,function(a){f.allTiles.push(a)})},mountCss:function(){var a=this,b=$("head");a.log("renderCss() is executed"),a.custom_css&&b.append(["<!-- Custom Inline CSS (start) -->",'<style type="text/css">\n',a.custom_css,"</style>","<!-- Custom Inline CSS (end) -->"].join(""))},mountTemplate:function(){var a=this,b=$("head");a.log("renderTemplate() is executed"),a.custom_tile&&(b.append(["<!-- Custom Inline Template (start) -->",'<style type="text/html" id="tpl-page">\n',a.custom_tile,"</style>","<!-- Custom Inline Template (end) -->"].join("")),a.template=a.getTemplate("page"))},updateImageDimension:function(a,b){var c=this;return c.log("updateImageDimension() is executed."),_.forEach(b,function(b,c){var d=a[c];"small"===b.type?(d.image_height_s=b.height,d.image_width_s=b.width):"standard"===b.type&&(d.imageHeight=b.height,d.imageWidth=b.width)}),a},reRender:function(a){var b=this,c=!0,d=Stackla.Display.Filter;return b.page=1,b.prependRoot.find(".tile").remove(),b.appendRoot.find(".tile").remove(),b.container.find(".tile").remove(),b.filter_options.page=1,b.allTiles=[],a=_.assign(b.filter_options,a),d.load(b.filter_id,a,c).then(function(a,c,d,e){var f=b.filter_options.limit>e.length,g=$.Deferred();return a[0]&&(a[0].isFirstTile=!0),f&&a.length&&(a[a.length-1].isLastTile=!0,e[e.length-1].isLastTile=!0),b.afterFilterLoad("render",a,c,e),b.onRender(b.appendRoot,a),b.emit("render",[b.appendRoot,a]),g.resolve(a,c,d,e)})},loadMore:function(a){var b=this,c=Stackla.Display.Filter;return b.page=b.page||1,b.filter_options.page=b.filter_options.page||1,b.page+=1,b.filter_options.page+=1,b.emit("beforeLoad"),c.load(b.filter_id,b.filter_options).then(function(a,c,d,e){var f=b.filter_options.limit>e.length,g=$.Deferred();return f&&a.length&&(a[a.length-1].isLastTile=!0,e[e.length-1].isLastTile=!0),b.afterFilterLoad("loadMore",a,c,e),b.onLoadMore(b.appendRoot,a),b.emit("loadMore",[b.appendRoot,a]),g.resolve(a,c,d,e)})},appender:function(a,b,c){var d=this;d.onBeforeAppend(a,d.appendRoot),d.emit("beforeAppend",[a,b,d.appendRoot]),_.isFunction(c)&&(a=c.call(d,a,b)),a&&(d.appendRoot.append(a),d.onAppend(a,d.appendRoot),d.emit("append",[a,b,d.appendRoot]),setTimeout(function(){d.postMessage("impression",{tileData:b,filterId:d.filter_id,widgetId:d.widgetConfig.id})}))},iterator:function(a,b){var c,d=this;return d.emit("beforeIterate",[a,a.id]),d.onBeforeIterate(a,a.id),d.log("iterator() is executed. The tile ID is '"+a.id+"'"),_.isFunction(b)&&b.call(d,a),c=Mustache.render(d.template,a),d.emit("iterate",[a,c]),d.onIterate(a,c),c},processor:function(a){var b=this,c=_.get(Stackla,"Display.Crowdsource");return!!_.isArray(a)&&(b.log("processor() is executed"),c.load(a,b.widgetConfig.stack_id),void _.forEach(a,function(a){a.id="tile-"+a._id.$id,StacklaTileDecorator.decorate(a),a.class_names=_.uniq(b._getClassNames(a)).join(" "),Stackla.Widget.ClickThrough&&(a=Stackla.Widget.ClickThrough.decorateTile(a,b.widgetConfig)),Stackla.Widget.User&&(a=Stackla.Widget.User.decorateTile(a,b.widgetConfig));var c=b.iterate(a);b.append($(c),a)}))},renderer:function(a){var b=this,c=!0,d=Stackla.Display.Filter;return b.log("renderer() is executed"),b.emit("beforeLoad"),d.load(b.filter_id,b.filter_options,c).then(function(c,d,e,f){var g=b.filter_options.limit>f.length;c[0]&&(c[0].isFirstTile=!0),g&&c.length&&(c[c.length-1].isLastTile=!0,f[f.length-1].isLastTile=!0),b.afterFilterLoad("render",c,d,f),a.call(b,b.appendRoot),b.onRender(b.appendRoot,c),b.emit("render",[b.appendRoot,c])})},receiver:function(a,b,c){var d,e=this,f=$.Deferred(),g=_.get(Stackla,"Display.Crowdsource");return c=c||function(){},d=function(a){_.forEach(a,function(a){a.id="tile-"+a._id.$id,StacklaTileDecorator.decorate(a);var b=e.iterate(a);e.prepend($(b),a)}),e.onInsert(e.prependRoot,a),e.emit("insert",[e.prependRoot,a]),c.call(e,a,b),f.resolve(a,b)},g.load(a,e.widgetConfig.stack_id).then(function(b){b=_.filter(b,{state:"success"}),a=e.updateImageDimension(a,b),d(a)}),f.promise()},prepender:function(a,b,c){var d=this;d.onBeforeAppend(a,d.prependRoot),d.emit("beforeAppend",[a,b,d.prependRoot]),_.isFunction(c)&&(a=c.call(d,a,b)),a&&(d.prependRoot.prepend(a),d.onAppend(a,d.prependRoot),d.emit("append",[a,b,d.prependRoot]),setTimeout(function(){d.postMessage("impression",{tileData:b,filterId:d.filter_id,widgetId:d.widgetConfig.id})}))},_handleDataMessage:function(a,b,c){var d=this;d.log("handleNewMessage() is executed"),d.trackPageview(d.dataProvider.list_url),d.onMessage(b,c),d.emit("message",[b,c]),d.onBeforeInsert(d.prependRoot,b),d.emit("beforeInsert",[d.prependRoot,b]),d.receive(b,c)},_getClassNames:function(a){var b;return b=["tile","tile--"+a.media],a.is_pin&&b.push("tile--pinned"),b}});b.POLLING_INTERVAL=1e4,b.VISIBLE_ON="widget",b.TEMPLATE='<div id="{{_id.$id}}" class="tile">{{message}}</div>',Stackla.Plugin.Tiles=b}(),function(a,b){"use strict";"object"==typeof module&&module.exports?module.exports=b():_.set(a,"Stackla.Widget.Comments",b())}(this,function(){"use strict";function a(a,b,c){c=c||{};var d,e=new $.Deferred,f=c.widget_id,g={},h={stack_id:c.stack_id,tile_id:c.tile_id,username:a,comment:b};return c.data_user_id&&(g.data_user_id=c.data_user_id),c.data_user_hash&&(g.data_user_hash=c.data_user_hash),c.data_user_name&&(g.data_user_name=c.data_user_name),d="/widget/save_comment/"+f,d=_.isEmpty(g)?d:d+"?"+$.param(g),$.ajax({url:d,type:"POST",data:h}).then(function(a){a.success?e.resolve(a,h,g):e.reject(a,h,g)},function(a){e.reject(a,h,g)}),e}function b(a){a=a||{};var b=new $.Deferred,c={stack_id:a.stack_id,tile_id:a.tile_id,last_comment_id:a.last_comment_id,how_many:a.how_many||5};return c.stack_id&&c.tile_id?($.ajax({url:"/widget/comments",type:"GET",data:c}).then(function(a){b.resolve(a,c)},function(a){b.reject(a)}),b):b.reject("The stack_id and tile_id props are requierd")}return{add:a,load:b}}),function(a,b){"use strict";"object"==typeof module&&module.exports?module.exports=b():_.set(a,"Stackla.Widget.Interaction",b())}(this,function(){"use strict";function a(a,b,c,d){var e=b._id?b._id.$id:null,h=f(a),i=$.cookie(h);if(h){e="vote"===a?g(e,d):e,i=_.isString(i)?i.split(","):[],i=c?_.union(i,[e]):_.without(i,e);var j=new Date((new Date).getTime()+36e5);$.cookie(h,i.join(","),{expires:j,path:"/; SameSite=None",secure:!0})}}function b(a,b,c,d){var e,f=!1;e=function(a){var b=$(a.currentTarget),e=b.data("id"),g=b.data("action"),i=c(),j=_.find(i,{id:e});a.stopPropagation(),"like"!==g&&"dislike"!==g||f||(f=!0,h(j,g,d).then(function(){$(document).trigger("tileLike",[{_id:e}])},function(a,b){window.alert(a),b&&b("You have voted."===a)}).always(function(){f=!1}))},$(a).on("click",b,e)}function c(a,b,c,d){var e,f=!1;e=function(a){var b=$(a.currentTarget),e=b.data("id"),g=b.data("action"),h=c(),i=_.find(h,{id:e});a.stopPropagation(),"vote"===g&&(f||(f=!0,m(i,d).then(function(){$(document).trigger("tileVote",[{_id:e}])},function(a,b){window.alert(a),b&&b("You have voted."===a)}).always(function(){f=!1})))},$(a).on("click",b,e)}function d(a,b){return!(!a||!b)&&_.some(b,function(b){var c=_.intersection(a.tags,b.voting_tags);return c.length>0})}function e(b,c,d,e){var f=b.id,g="like"===c?"numUps":"numDowns",h=b[g]+d,i=!1,k=$(".tile[data-id="+f+"] .tile-interaction-"+c);return b?(i=j(c,b,e),d>0?i=!0:d<0&&(i=!1),function(d){i=d?j(c,b,e):i,i=!!h&&i,b[g]=h,k.length&&(k.toggleClass("on",i),k.find(".tile-interaction-count").text(h?h:"")),a(c,b,i,e)}):$.noop}function f(a){var b=null;switch(a){case"up":case"like":b="votedUp";break;case"down":case"dislike":b="votedDown";break;case"vote":b="votedCompetitionStac9392"}return b}function g(a,b){var c=_.get(b,"style.parent_page_permission");return c?(a=[getUrlVars().data_user_id,b.stack_id,a].join(","),CryptoJS.MD5(a).toString().substr(0,6)):a}function h(a,b,c,d){var f,g=$.Deferred(),h="like"===b?"dislike":"like",k=e(a,b,0,c),m=e(a,h,0,c),n=j(b,a,c),o=!n;return e(a,b,n?-1:1,c)(),j(h,a,c)?(e(a,h,-1,c)(),f=function(a){k(a),m(a)}):f=function(a){k(a)},l(a.id,b,o,c).then(function(a){a.success?g.resolve(a):g.reject(a.error,f)},function(a,b,c){g.reject(c,f)}).always(function(){if(_.isFunction(d)){var e={};e[b]={on:j(b,a,c),count:a[i(b)]},e[h]={on:j(h,a,c),count:a[i(h)]},d(e)}}),g}function i(a){return"like"===a?"numUps":"numDowns"}function g(a,b){var c=_.get(b,"style.parent_page_permission");return c?(a=[getUrlVars().data_user_id,b.stack_id,a].join(","),CryptoJS.MD5(a).toString().substr(0,6)):a}function j(a,b,c){var d=f(a),e=b._id?b._id.$id:null,h=$.cookie(d);return!!d&&(e="vote"===a?g(e,c):e,h=_.isString(h)?h.split(","):[],_.contains(h,e))}function k(b,c,d){var e,f=b.id,g=b.numVotes+c,h=$(".tile[data-id="+f+"] .tile-interaction-vote");return b?(e=j("vote",b,d),function(){b.vote=g,e=1===c||e,h.length&&(h.toggleClass("on",e),h.find(".tile-interaction-count").text(g?g:"")),a("vote",b,e,d)}):$.noop}function l(a,b,c,d){var e=$.param({wid:d.guid,tile:a,up:"like"===b?"up":"down",add:c?1:0});return $.ajax({url:"/widget/like_dislike/"+d.id,data:e,type:"POST"})}function m(a,b,c){var d,e,f,g=a.id,h=b.id,i=$.Deferred(),l=b.style.parent_page_permissions,m=j("vote",a,b),n=a.numVotes?parseInt(a.numVotes):0,o=getUrlVars();return m?i.reject("A vote has already been registered from this IP address."):(d="/widget/competition_vote/"+h,e=["wid="+b.guid,"tile_id="+g,"addordelete=1"],!l||o.data_user_id&&o.data_user_hash?(l&&(e.push("data_user_id="+o.data_user_id),e.push("data_user_hash="+o.data_user_hash),e.push("data_user_name="+(o.data_user_name||""))),f=k(a,0,b),k(a,1,b)(),$.ajax({url:d,type:"POST",data:e.join("&")}).then(function(a){a.success?i.resolve(a):i.reject(a.error,f)},function(a,b,c){i.reject(c,f)}).always(function(){_.isFunction(c)&&c({vote:{on:!0,count:n+1}})}),i):i.reject("Oops, an error occurred with the vote interaction: Invalid user ID and hash combination."))}return{addCookie:a,bindLikeDislike:b,bindVote:c,checkVote:d,fnUpdateLikeDislike:e,getCookieKey:f,getVoteId:g,hasCookie:j,likeDislike:h,sync:l,vote:m}}),function(){"use strict";var a=Stackla.createClass(Stackla.Plugin.Tiles,{initializer:function(a){var b=this,c=_.get(window,"Stackla.Widget.Interaction",{});if(b.log("initializer() is executed"),a=a||{},$(document).trigger("widget:ready",[this]),b.widgetConfig=_.cloneDeep(a),b.domain=a.domain||null,b.stack_id=a.stack_id||null,b.unique_id=b.getParams("unique_id"),b.style=a.style,b.widget_id=a.widget_id,b.draft_id=a.draft_id||null,b.filter_options=null,b.tiles_per_page="base_quadrant"===_.get(a,"style.style")?5*(_.get(a,"style.blocks_per_page")||6):a.tiles_per_page||_.get(a,"style.tiles_per_page",30),b.single_tile_data=null,!b.guid||!b.filter_id||!b.domain)throw new Error("It lacks of guid, filter_id, or domain options");b.filter_options=_.assign({geohash:b.geohash,filter_id:b.filter_id,is_polling:_.get(b.widgetConfig,"style.auto_refresh",!1),polling:1e3*_.get(b.widgetConfig,"style.polling_frequency",30),limit:b.tiles_per_page,list_url:"/widget/api",pin_url:"/widget/pins",page:1,search:b.search,tag_group:b.tag_group,available_products_only:b.available_products_only,data_tags:b.tags,tags_grouped_as:b.tags_grouped_as,tile_id:b.tile_id,ttl:30,visible_on:"widget"},a.filter_options||{}),b.media&&(b.filter_options.media=b.media),b.draft_id?(b.filter_options.draft_id=b.draft_id,b.filter_options.ttl=1):b.guid?b.filter_options.wid=b.guid:(b.filter_options.list_url+="/"+a.guid,b.filter_options.pin_url+="/"+a.guid),$(".track").on("click",".tile",b.handleTileClick.bind(b)),$(".track").on("click",".tile-interaction-comment",b.handleCommentClick.bind(b)),c.bindLikeDislike($(".track"),".tile-interaction-like, .tile-interaction-dislike",function(){return b.allTiles},b.widgetConfig),c.bindVote($(".track"),".tile-interaction-vote",function(){return b.allTiles},b.widgetConfig),b.postMessage("handShakeEstablished"),window.addEventListener?window.addEventListener("message",b._handleMessage.bind(this),!1):window.attachEvent("onmessage",b._handleMessage.bind(this))},toString:function(){return"Widget"},getComments:function(a,b,c){var d=this,e=_.get(window,"Stackla.Widget.Comments",{});e.load({tile_id:a,last_comment_id:b,stack_id:d.stack_id,how_many:c}).then(function(b){d.postMessage("getCommentsCallback",{tileId:a,data:b})})},postComment:function(a,b,c,d){var e=this,f=e.widgetConfig.style.parent_page_permissions,g=_.get(window,"Stackla.Widget.Comments"),h=_.get(window,"Stackla.Display.Util",{}),i=h.getUrlParams(),j={};return!f||i.data_user_id&&i.data_user_hash?(j={stack_id:e.stack_id,tile_id:b,widget_id:a},f&&(j.data_user_id=i.data_user_id,j.data_user_hash=i.data_user_hash,j.data_user_name=i.data_user_name),void g.add(c,d,j).then(function(a){return $(document).trigger("tileComment",[{_id:b}]),a}).always(function(a){e.postMessage("postCommentCallback",{data:a,tileId:b})})):void(window.console&&console.error("Oops, an error occurred with the vote interaction: Invalid user ID and hash combination."))},postEvent:function(a,b,c,d){var e=$.Deferred(),f=this;return b=b||{},d=d||function(){},(c=c||!1)?(f.emit(a,[b],function(){delete b.widgetId,f.postMessage(a,b),d(a,b),e.resolve(a,b)}),e):(f.emit(a,[b]),delete b.widgetId,f.postMessage(a,b),d(a,b),e.resolve(a,b))},postMessage:function(a,b){var c=this,d=c.widgetConfig;c.log("postMessage("+a+") is executed"),b=$.extend({action:a,appearance:d.style,filterId:d.filter_id,focusOn:null,hashId:d.guid,layoutType:_.get(d,"config.lightbox.layout","portrait"),options:d.lightboxConfig,parentPagePermissions:function(){if(!d.parent_page_permissions)return null;var a=c.getParams("data_user_id"),b=c.getParams("data_user_hash"),e=c.getParams("data_user_name");return{on:!0,userId:a||null,userHash:b||null,userName:e||null,parent_page_ext_username:d.parent_page_ext_username}}(),shopspotsEnabled:_.get(d,"permission.shopspots",!1),style:d.style,styleName:_.get(d,"style.style"),uniqueId:c.getParams("unique_id"),widgetConfig:d,widgetId:d.widget_id},b),parent.postMessage(JSON.stringify(b),"*")},initCompleteCallback:function(a,b){var c=this;a?c.showExpandedTile(a):trackPerformance({embed_timestamp:b.embed_timestamp,init_timestamp:b.init_timestamp,parent_host:b.parent_host,parent_url:b.parent_url})},_handleMessage:function(a){var b=this,c=a.data;try{c=JSON.parse(c)}catch(a){}if(c&&c.action)switch(c.action){case"stackla:widget:getNextTileIdByCurrentTileId":var d=_.reject(b.allTiles,function(a){return"rss"===a.source||"stackla"===a.source&&a.click_through}),e=c.args[0],f=_.findIndex(d,function(a){return a._id.$id===e}),g=f+1,h=d[g];h?b.showExpandedTile(h._id.$id):b.loadMore().then(function(a,c){h=d[g],h&&b.showExpandedTile(h._id.$id)});break;case"stackla:widget:getPreviousTileIdByCurrentTileId":var d=_.reject(b.allTiles,{source:"rss"}),e=c.args[0],f=_.findIndex(d,function(a){return a._id.$id===e}),g=f-1,h=d[g];h&&b.showExpandedTile(h._id.$id);break;case"changeFilter":isNaN(parseInt(c.filterId))||b.changeFilterCallback&&b.changeFilterCallback(c.filterId,c.tags,c.group);break;case"searchFilter":b.searchFilterCallback&&b.searchFilterCallback(c.search);break;case"initComplete":if("undefined"!=typeof c.lightbox_id&&c.lightbox_id){var i=/^ct_(.*)/.exec(c.lightbox_id);i&&i.length&&i[1]&&b.initCompleteCallback(i[1])}b.parentUrl=c.parent_url;break;case"getComments":b.getComments&&b.getComments(c.tileId,c.lastCommentId,c.howMany);break;case"postComment":b.postComment&&b.postComment(c.widgetId,c.tileId,c.username,c.comment);break;case"getShortUrl":b.getShortUrl&&b.getShortUrl(c.thatId,c.url,c.tileId);break;case"saveShareCount":b.saveShareCount&&b.saveShareCount(c.tileId);break;case"loadMore":b.loadMoreTiles&&b.loadMoreTiles();break;case"scrollToPageBottom":b.scrollToPageBottom&&b.scrollToPageBottom();break;case"sendParentDimensions":b.resizeWrapper&&b.resizeWrapper(c);break;case"interactionSend":var j,k=c.tile_id,l=c.type;switch(j=function(a){b.crossSiteAction&&b.crossSiteAction("interactionSendCallback",{tile_id:k,type:l,data:a})},l){case"like":case"dislike":b.likeDislike&&b.likeDislike(k,l,j);break;case"vote":b.competitionVote&&b.competitionVote(k,j)}break;case"setUniqueId":b.setUniqueId&&(b.setUniqueId(c.uniqueId),b.crossSiteAction("handShakeEstablished"));break;case"setCustomData":b.setCustomData&&b.setCustomData(c.customData);break;case"reportAssetBroken":var m=_.get(Stackla,"Display.Crowdsource");m&&m.reportBroken(c.tileId,b.widgetConfig.stack_id)}},handleCommentClick:function(a){var b=this,c=$(a.currentTarget).data("id"),d=b.widgetConfig,e=_.find(b.allTiles,{id:c}),f="comment";b.log("handleCommentClick() is executed"),a.stopPropagation(),b.postEvent("tileExpand",{expandType:"expand",tileData:e,widgetId:d.widget_id},!0).then(function(){b.showExpandedTile(e._id.$id,f)})},handleTileClick:function(a){var b=this,c=$(a.target),d=$(a.currentTarget),e=b.widgetConfig,f=d.data("id"),g=_.find(b.allTiles,{id:f}),h=_.get(e,"style.click_through_url"),i=g.click_through_link;if(b.log("handleTileClick() is executed"),g.enable_click_through&&g.click_through)return void b.postEvent("tileExpand",{expandType:"custom",tileData:g,widgetId:e.widget_id}).then(function(){window.open(g.click_through)});if(!c.closest(".tile-twitter-intent-link").length&&g&&"[NONE]"!==h){if(i)return void b.postEvent("tileExpand",{expandType:"custom",tileData:g,widgetId:e.widget_id}).then(function(){window.open(i)});if("[ORIGINAL_URL]"===h){if("stackla"===g.source||"sta_feed"===g.source)return;return void b.postEvent("tileExpand",{expandType:"original",tileData:g,widgetId:e.widget_id}).then(function(){window.open(g.original_url)})}if("[EXPAND]"===h){if("rss"===g.source)return void b.postEvent("tileExpand",{expandType:"original",tileData:g,widgetId:e.widget_id}).then(function(){window.open(g.original_url)});b.postEvent("tileExpand",{expandType:"expand",tileData:g,widgetId:e.widget_id},!0).then(function(){b.showExpandedTile(g._id.$id)})}}},getShortUrl:function(a,b,c){var d=_.get(this,"config.lightbox.disable_short_url",!1),e=this;d?e.postMessage("getShortUrlCallback",{shortUrl:b}):e.generateShareUrl(c).then(function(a){e.postMessage("getShortUrlCallback",{shortUrl:a})})},generateShareUrl:function(a){var b=this,c=_.get(Stackla,"Widget.Share"),d=_.find(b.allTiles,function(b){return b._id.$id===a})||b.single_tile_data,e=c.getRedirectUrl(b.parentUrl,a),f=c.getParams(e,d,b.widgetConfig);return d.share_url?$.Deferred().resolve(d.shareUrl||d.share_url):c.generateShortUrl(f).then(function(a){return d.share_url=a,a})},ready:function(a){var b=this.widgetConfig;this.renderTime=new Date,a=_.assign({widgetType:"vertical",externalJs:b.external_js,lightboxCustomCss:b.lightbox_custom_css,lightboxCustomJs:b.lightbox_custom_js,name:b.name,options:b.config.lightbox},a),this.postMessage("initComplete",a)},showExpandedTile:function(a,b){var c=this,d=_.findIndex(c.allTiles,function(b){return b._id.$id===a}),e=c.allTiles[d],f=0===d,g=f?null:c.allTiles[d-1],h=d+1!==c.allTiles.length?c.allTiles[d+1]:null,i=c.widgetConfig,j=_.get(window,"Stackla.Widget.Interaction",{});c.log("showExpandedTile('"+a+"') is executed");var k=function(a){_.has(a,"id")||(a.id=_.get(a,"_id.$id")),a.isFirstTile=f,a.prevLightboxId=g?_.get(g,"_id.$id"):null,a.nextLightboxId=h?_.get(h,"_id.$id"):null,a.interactionData={like:{on:j.hasCookie("up",a,i),count:a.numUps?a.numUps:""},dislike:{on:j.hasCookie("down",a,i),count:a.numDowns?a.numDowns:""},vote:{on:j.hasCookie("vote",a,i),count:a.numVotes?a.numVotes:""}},c.postMessage("lightbox",{data:a,focusOn:b,options:i.config.lightbox,widgetId:i.widget_id,tileId:a._id.$id,widgetType:"vertical",videoHtml:StacklaVideoPlayer.getEmbedCode("#tpl-video",$.extend({},a)),widgetSetting:i,widgetConfig:i,lightboxCustomCss:i.lightbox_custom_css,lightboxCustomJs:i.lightbox_custom_js})};e?k(e):$.ajax({url:"/widget/single",data:{stack_id:c.stack_id,tile_id:a,ttl:c.filter_options.ttl},dataType:"json",success:function(a){c.single_tile_data=a,k(a)}})}});Stackla.Plugin.Widget=a}(),function(){"use strict";function a(b){return _.isObject(b)?_(b).omit(_.isUndefined).omit(_.isNull).map(function(b,c){return[c,a(b)]}).object().value():b}var b,c=window.Stackla=window.Stackla||{};b={expandTile:function(a,b,c){a=a||{},c=c||{},_.isPlainObject(b)&&(b=_.assign({layout:"portrait",show_additional_info:"1"},b)),_.isString(b)&&_.includes(["portrait","landscape"],b)&&(b={layout:b,show_additional_info:"1"}),this.postMessage("lightbox",_.assign({data:a,options:b,tileId:a.id},c))},postMessage:function(a,b){var d=c.widgetOptions||{};b=b||{},b.action=a,b.uniqueId=c.Display.Util.getUrlParams("unique_id"),b.widgetType=d.style.type,b.widgetId=d.id,b.hashId=d.guid,b.parentPagePermissions=null,b.styleName=d.style?d.style.style:null,b.style=d.style?d.style:null,b.widgetConfig=d,parent.postMessage(JSON.stringify(b),"*")},loadJS:function(a,b){
var c=$.Deferred();return a=_.clone(a),b=b||function(){},StacklaLazyLoad.js(a,function(){b(),c.resolve()}),c},loadTilesByFilter:function(){var b,d=arguments,e=_.isPlainObject(d[0])?d[0]:{},f=_.isFunction(d[d.length-1])?d[d.length-1]:function(){},g=c.widgetOptions||{},h=$.Deferred(),i=e.filter_id||g.filter_id,j=c.Display.Filter;return i=i.toString(),e=_.assign({},a({filter_id:i,limit:g.limit||30,page:e.page||1,search:g.search||null,tags:g.tags||null,data_tags:g.data_tags||null,tags_grouped_as:g.tags_grouped_as||null,tile_id:e.tile_id||g.tile_id||null,ttl:g.ttl||30,visible_on:"widget"}),e),e.filter_id=e.filter_id.toString(),g.draft_id?(e.ttl=1,e.draft_id=g.draft_id):g.guid&&(e.wid=g.guid),b=1===e.page&&!e.tile_id,j.load(i,e,b).then(function(a){a=_.map(a,function(a){return a.id="tile-"+a._id.$id,StacklaTileDecorator.decorate(a)}),f(a),h.resolve(a)}),h},render:function(a){var b,d=this,e=arguments,f=_.isPlainObject(e[1])?e[1]:{},g=_.isFunction(e[e.length-1])?e[e.length-1]:function(){},h=$.Deferred(),i=d.render.isRendered,j={};return f=_.assign({$container:$(document.body),auto_resize:!0,template:$("#tpl-layout").html(),setting:c.widgetOptions},f),$('script[type="text/html"][id^=tpl-]').each(function(a,b){"tpl-layout"!==b.id&&(j[b.id]=b.innerHTML)}),_.isFunction(f.renderer)?b=f.renderer(a,f,j):(b=Mustache.render(f.template,a,j),$(f.$container).prepend(b)),i||d.postMessage("initComplete",{layoutType:"portrait",name:f.setting.name}),f.auto_resize&&d.postMessage("resize",{height:$("body").height()}),i||(f.auto_resize&&$(window).resize(_.debounce(function(){d.postMessage("resize",{height:$("body").height()})},300)),d.render.isRendered=!0),g(b,a,f),h.resolve(b,a,f)}},_.assign(c,b)}();