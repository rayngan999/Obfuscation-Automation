KISSY.add("err/40x/mods/wenda",["node"],function(e,s){{var a=s("node");a.all}return{init:function(){}}}),KISSY.add("err/40x/mods/search",["node"],function(e,s){function a(){e.use("gallery/autocomplete/1.2/index",function(e,s){var a="//suggest.taobao.com/sug?q={query}",t=new s({inputNode:"#q",source:a,hotResultsFormatter:function(s){var a={};return s.keywords=e.map(s.keywords,function(s){var t={key:s},r="hot_source_id_"+e.guid();return t.raw=e.mix({},t),t.sid=r,t.text=s,a[r]=t,t}),a},resultListLocator:function(s){var a=e.clone(s.result),t=[];if(s.cat){var r=0;e.each(s.cat,function(s){t.push(e.mix(s,{index:r++}))})}return Array.prototype.push.apply(t,a),s["new"]&&t.push({"new":s["new"]}),t},resultTextLocator:function(e){return e[2]||e[0]||this.get("value")},activeFirstItem:!1,resultFormatter:function(s,a){var t=[],r=[],n='<div key="{keyword}" class="ks-{parity}"><span class="ks-suggest-key">{keyword}</span><span class="ks-suggest-result">\u7ea6{count}\u4e2a\u5b9d\u8d1d</span></div>',o='<div date-index="{index}" class="ks-suggest-extras-cate" key="{keyword}" data-cateid="{catid}"><span class="ks-suggest-key">{keyword}</span><span class="ks-suggest-cate">\u5728<b>{catname}</b>\u5206\u7c7b\u4e0b\u641c\u7d22</span></div>',c='<div class="ks-suggest-extras-xp" key="{key}"><span class="ks-suggest-xp-tag">\u65b0\u54c1</span><span class="ks-suggest-xp-icon">\u65b0\u54c1</span><span class="ks-suggest-xp">\u201c{key}\u201d\u76f8\u5173{newkey}\u65b0\u54c1</span></div>',l=!1;return e.each(a,function(a){var u=a.raw;void 0===u.index?void 0!==u["new"]?r.push(e.substitute(c,{newkey:u["new"],key:a.text})):(r.push(e.substitute(n,{keyword:u[0],count:u[1],parity:l?"odd":"even"})),l=!l):t.push(e.substitute(o,{index:u.index,keyword:u[2]||s,catid:u[1],catname:u[0]}))}),Array.prototype.push.apply(t,r),t}});t.on("select",function(s){console.log(s);var a="//s.taobao.com/search?q="+s.result.text+"&commend=all&ssid=s5-e-p1&search_type=item&sourceId=tb.index&spm=1.1000386.5803581.d4908513&suggest=0_3&source=suggest&wq="+s.currentTarget.get("value");void 0!==s.result.raw.index&&(a+="&cat="+s.result.raw[1]),e.one("#result").html('<a href="'+a+'">'+s.result.text+"</a>")});var r={mall:"b2c",shop:"ssrch"};e.all("#J_Search li").on("click",function(s){s.stopPropagation(),s.preventDefault(),e.all("#J_Search li").removeClass("selected");var n=new e.Node(this);n.addClass("selected"),e.one("#J_Search input")[0].focus();var o=r[n.attr("data-searchtype")],c=a;o&&(c+="&area="+o),console.log(c),t._cache={},t.set("source",c),t.set("query",{query:e.one("#J_Search input").val()})})})}var t=s("node"),r=t.all;return{init:function(){e.use("gallery/placeholder/1.0/index",function(e,s){new s({node:"#J_SearchReason"})});var s=!1;r("#J_SearchReason").on("focus",function(){s===!1&&(a(),s=!0)})}}}),KISSY.add("err/40x/mods/tb-search",["node"],function(e,s){function a(){e.config({packages:[{name:"tbc",path:"//g.alicdn.com/tbc/",ignorePackageNameInUri:!0,debug:!0}]});var s=",tbc/search-suggest/1.1.7/",a=["dom","index","plugin/history","plugin/cloud","plugin/tab","plugin/bts","new_suggest.css"];e.use(a.join(s),function(e,s,a,t,n,o,c){var l=(new c).getBucket(),u=["history","mall","cat","global","list","shop","cloud"],i=[new t,new o({activeCls:"selected",node:"#J_Search li.J_SearchTab"})],d="//suggest.taobao.com/sug?area=c2c&k=1&bucketid="+l,p="",g=!1;location.href.indexOf("debug=test")>-1&&(g=!0,d="//admin.search.taobao.com:9999/proxyjump/go?r=proxyjump%2Fgo&url=%2F%2Fs002160.cm6%3A8000%2Fsug%3Fcode%3Dutf-8%26k%3D1%26area%3Dc2c%26callback%3Dtest%26q%3D1111&parser=raw");var h=new a({plugins:i,sugConfig:{sourceUrl:d,node:"#q",resultFormat:p,focused:!0,placeholderEl:"#J_TSearchForm label"},mods:{sort:u,mall:{tmpl:'<div class="{prefixCls}menu-extras-cate extras-mall" data-key="q={$query}&suggest=mall_{$index}&tab=promotion&zk_type=88"><span class="{prefixCls}menu-key">{mall}</span><span class="{prefixCls}menu-cate">\u5728<b>\u5929\u732b\u53cc\u5341\u4e00</b>\u4e2d\u641c\u7d22</span></div>'}}});g&&h.comboBox.on("beforeQueryChange",function(e){var s=this.get("dataSource"),a=s.get("xhrCfg"),t=a.url;a.jsonpCallback="test",t=t.replace(/q%3D[^&]{0,}/,"q%3D"+encodeURIComponent(e.query)),a.url=t}),h.on("beforeFocus",function(){var e=h.get("input"),a=s.parent(e,"form"),t=s.parent(e,2),r=s.prev(t,"label"),n=s.next(t,"i");r&&s.css(r,{color:"#ccc"}),n&&s.hide(n),a.className="search-panel-focused"}),h.on("afterQueryChange",function(e){var a=e.query,t=h.get("input"),r=s.parent(t,2),n=s.prev(r,"label");""!==a&&s.hide(n)}),h.on("beforeBlur",function(){var a=h.get("input"),t=s.parent(a,"form"),r=s.parent(a,2),n=s.prev(r,"label"),o=s.next(r,"i");""===e.trim(a.val())&&(n&&(s.show([n]),s.css(n,{color:"#999"})),o&&s.show(o)),t.className=""}),r(".search-triggers").on("mouseenter mouseleave",function(e){var a,t=this,r="add";"mouseleave"===e.type&&(r="remove",a=s.query("li",t),s[r+"Class"].call(t,a,"selected"),s.addClass.call(t,a[0],"selected")),s[r+"Class"].call(t,".search-triggers","triggers-hover")});var m=r(".J_SearchTab");m.on("mouseenter",function(){var e=this,a=s.siblings(e);s.addClass(e,"selected"),s.removeClass(a,"selected")}),m.on("click",function(e){var a=this,t=s.parent(a),r=s.children(t)[0];a!==r&&(s.insertBefore(a,r),s.removeClass.call(a,".search-triggers","triggers-hover"),s.addClass.call(a,"#J_TSearchForm","search-panel-focused"),e.halt())})})}var t=s("node"),r=t.all,n=!1;return{init:function(){r("#J_BtnSearchTB").on("click",function(e){e.preventDefault(),n||(n=!0,a(),r("#J_SearchTB").show())})}}}),KISSY.add("err/40x/mods/aplus",["node"],function(e,s,a,t){"use strict";{var r=s("node"),n=r.all;e.getLogger("aplus")}t.exports={init:function(){var s=n("#tb-beacon-aplus");return s&&s.length?!1:(e.getScript("//assets.alicdn.com/s/aplus_v2.js"),!0)}}}),KISSY.add("err/40x/index",["node","./mods/wenda","./mods/search","./mods/tb-search","./mods/aplus"],function(e,s){{var a=s("node");a.all}return{init:function(){var a=[s("./mods/wenda"),s("./mods/search"),s("./mods/tb-search"),s("./mods/aplus")];e.each(a,function(e){e&&e.init()})}}});