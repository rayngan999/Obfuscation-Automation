define("kg/tb-nav/2.5.11/index",["util","event-custom","io","node","cookie","dom","event","ua"],function(t,e,i){var n,a,o,r,s,c,d,l,u,v,m,p,g,f,h,w=t("util"),b=t("event-custom"),_=t("io"),C=t("node"),S=t("cookie"),M=t("dom"),N=t("event"),y=t("ua");n=function(t){var e=TB.Global;return e.versionName="3.1.0",t=e}(),a=function(t){function e(){}var i=w,n=b;return i.augment(e,n.Target,{show:function(t){this.fire("show",{targetName:t})},hide:function(t){this.fire("hide",{target:t})},subscribe:function(t,e,i){this.on(e,function(e){t===e.targetName&&i&&i(e)})}}),t=new e}(),o=function(t){var e=_,i=C,o=i.all,r=S,s=n,c=a,d="//fragment.tmall.com/tbhome/data";return t={status:0,init:function(){var t=this;c.subscribe("sitemap","show",function(){t.status||(t.status=1,t.fetchData.call(t))})},fetchData:function(){new e({url:d,dataType:"jsonp",cache:!0,success:this.render,jsonpCallback:"siteMap_cb"})},render:function(t){if(t&&t.map){var e,i=t.map,n=o("#J_SiteNavSitemap");e=s.isMobile()?n.width()+n.offset().left:o("#J_SiteNavBd").width();for(var a='<div class="site-nav-menu-bd"><div id="J_SiteMapBd" class="site-nav-menu-panel"'+(e?' style="width:'+(e-2)+'px"':"")+">",c=0,d=i.length;c<d;c++){var l=i[c];a+='<div class="site-nav-sitemap-mod" data-spm="'+l.spm+'"><div class="site-nav-sitemap-mod-wrap">',a+='<div class="site-nav-sitemap-mod-hd"><h4 style="color:'+l.titleColor+'">'+l.title+"</h4></div>",a+='<div class="site-nav-sitemap-mod-bd"><ul>';for(var u=0,v=l.list.length;u<v;u++){var m=l.list[u];a+='<li style="width:'+Math.floor(99/l.column)+'%">',a+='<a href="'+m.link+'" '+(m.cookie?' data-cookie="'+m.cookie+'" class="J_SetCookieInSiteMap"':"")+(m.goldlog?" "+m.goldlog:"")+">"+m.name,"true"===m.hot&&(a+='<i class="hot"></i>'),"true"===m["new"]&&(a+='<i class="new"></i>'),a+="</a></li>"}a+="</ul></div>",a+="</div></div>"}a+="</div></div>",o(a).appendTo("#J_SiteNavSitemap"),o(".J_SetCookieInSiteMap","#J_SiteNavSitemap").on("click",function(t){var e=o(t.target).attr("data-cookie");e&&r.set("thw",e,30,".taobao.com")})}}}}(),r=function(t){return t={send:function(t){window.JSTracker2=window.JSTracker2||[];var e="https://jstracker.www.taobao.com/nav/"+t.category;window.JSTracker2.push({url:e,msg:t.msg})}}}(),s=function(t){var e=KISSY,i=n;return t={init:function(){var t=window.g_config,n=t?t.appId:"",a=location.search,o=!1,r=-1!==a.indexOf("tstart")||-1===a.indexOf("tdog");if(t&&t.webww===!1&&(o=!0),n&&n!=-1||r){if(o)return;var s=i.getCdnHost()+"/aliww/web.ww/scripts/webww.js";window.Light||e.getScript(s)}}}}(),c=function(t){function e(){var t="//tce.alicdn.com/api/data.htm?ids=79618";new r({dataType:"jsonp",url:t,cache:!0,jsonpCallback:"tce_79618",success:function(t){if(t&&t[79618]){var e=t[79618].value.data[0];"true"===e.status&&e.img1&&e.href&&n(e)}}})}function i(t){var e=!1;if(t){for(var i=location.host,n=t.split(","),a=0,o=n.length;a<o;a++)if(new RegExp(n[a].replace(/\./g,"\\.")).test(i)){e=!0;break}}else e=!0;return e}function n(t){var e=o.get("#J_SiteNavWeekend");if(!i(t.list))return!1;var n=t.img1,a=t.img2||n,r=t.href;if(e.innerHTML=['<div class="menu-hd">','<a href="'+r+'"  data-spm="d3">','<img id="J_WeekendImg" src="'+n+'"/>',"</a>","</div>"].join(""),o.css(e,"display","block"),n!==a){var c=o.get("#J_WeekendImg");s.subscribe("weekend","show",function(){c.setAttribute("src",a)}),s.subscribe("weekend","hide",function(){c.setAttribute("src",n)})}}var o=M,r=_,s=a,c=w;return t={init:function(){var t=o.get("#J_SiteNavBd");if(!t)return!1;var i=parseFloat(o.css(t,"width"));return!(i<1190)&&void c.ready(e)}}}(),d=function(t){var e=S,i=n,a=w;return t={init:function(){var t,n=a.unparam(e.get("mt")),o=encodeURIComponent(location.href);if(n.np)t="//law"+i.getHost()+"/rulefaces/summon.htm?t="+a.now()+"&url="+o;else{var r=a.unparam(e.get("uc1"));if(!r||!r.cbu)return!1;t="//reg"+i.getHost()+"/member/changeNick2B.jhtml?t="+a.now()+"&url="+o}var s=document.createElement("div");s.className="site-nav-cbu-cover";var c=document.createElement("iframe");c.src=t,c.className="site-nav-cbu-iframe",c.allowTransparency="true",document.body.appendChild(s),document.body.appendChild(c),document.documentElement.style.overflow="hidden"}}}(),l=function(t){var e=N;return t={init:function(){function t(n){9==n.keyCode&&i++,10===i&&(e.detach(window,"keydown",t),window.JSTracker&&JSTracker.send({url:"https://wai.taobao.com",category:location.host+location.pathname,sampling:1}))}var i=0;e.on(window,"keydown",t)}}}(),u=function(t){var e=C,i=e.all,o=n,s=a,c=y,d=S,l=r;return t={init:function(){this.bindEvent(),this.renderMobileSiteNav(),this.renderPadBar()},bindEvent:function(){o.isMobile()?i("body").on("click",function(t){var e=t.target;if(i(e).hasClass("J_MultiMenu")||i(e).parent(".J_MultiMenu")){var n=i(e).parent(".site-nav-multi-menu")||i(e);if(i(e).parent(".site-nav-menu-hd")&&!n.hasClass("site-nav-menu-hover")){if(t.preventDefault(),n.hasClass("site-nav-menu-hover"))return n.removeClass("site-nav-menu-hover"),s.hide(n.attr("data-name"));i(".site-nav-menu-hover","#J_SiteNav").removeClass("site-nav-menu-hover"),n.addClass("site-nav-menu-hover"),s.show(n.attr("data-name"))}}else i(".site-nav-menu-hover","#J_SiteNav").removeClass("site-nav-menu-hover")}):i("#J_SiteNav").delegate("mouseenter mouseleave",".J_MultiMenu",function(t){var e=i(t.currentTarget),n=t.currentTarget;"mouseenter"===t.type?e.hasClass("J_SiteNavDisableMenu")||(e.addClass("site-nav-menu-hover"),s.show(n.getAttribute("data-name"))):"mouseleave"===t.type&&(e.hasClass("site-nav-menu-hover")&&e.hasClass("J_SiteNavDisableMenu")&&l.send({category:"CART_DISABLED_BUT_NOT_HIDE",msg:d.get("mt")}),e.removeClass("site-nav-menu-hover"),s.hide(n.getAttribute("data-name")))})},renderMobileSiteNav:function(){o.isMobile()&&!this.isWindows()&&i("#J_SiteNav").addClass("site-nav-at-mobile")},isWindows:function(){return c.os.indexOf("win")!==-1},renderPadBar:function(){var t=navigator.userAgent,e=/iPad|taobao_apad|Android.+Tablet|GT-N5100|GT-N5110|GT-N5110|GT-N8000|GT-N8010|GT-P3100|GT-P5110|GT-P5210|Lenovo A3000|LG-V500|MediaPad|MI PAD|Nexus 7|P98 3G|Ramosi9|SM-P600|SM-P601|SM-T110|SM-T210|SM-T211|SM-T310|SM-T311|SM-T320|SM-T321|SM-T520|SM-T700|SM-T705|SM-T800|SM-T805|V703|V719|V819|V919|V975|Venue 7|X98 3G/i;if(e.test(t)){var i=window.g_config||{},n=location.search;if(6!==i.appId&&!/[\?&]ttid=/.test(n)){var a=document.getElementById("J_SiteNav"),o=document.body.offsetWidth,r=a.offsetWidth;r<o&&(a.style.width=o+"px");var s=!/[&\?]pad_preview=1/.test(location.search),c=document.createElement("iframe");c.setAttribute("width","100%"),c.setAttribute("height","160px"),c.setAttribute("src",location.protocol+"//"+(s?"www":"cdnprepub.tms")+".taobao.com/market/app/site-nav-banner.php?redirect_url="+encodeURIComponent(location.href.replace(/#.*$/g,""))),c.setAttribute("frameborder","0"),c.setAttribute("scrolling","no");var d=document.createElement("span");d.appendChild(document.createTextNode("\xd7"));var l=document.createElement("div");l.className="tb-global-pad-notice",l.appendChild(d),l.appendChild(c),d.onclick=function(){if(l.style.display="none",window.goldlog)try{window.goldlog.record("/ipadapp.141226.1","","url="+encodeURIComponent(location.host+location.pathname),"H46926338")}catch(t){}};var u=document.getElementById("J_SiteNav");u&&u.insertBefore(l,document.getElementById("J_SiteNavBd"))}}}}}(),v=function(t){function e(){d('<div id="J_SiteFooter" style="min-height: 150px"></div>').appendTo("body")}function i(){return!!window.g_config&&6==window.g_config.appId}function a(){var t=l.docHeight(),e=l.scrollTop(),i=l.viewportHeight();return e+i+300>=t}function o(){var t,e=!1,i=function n(){return!e&&(t&&clearTimeout(t),void(t=setTimeout(function(){t=null,a()&&(e=!0,u.detach(window,"scroll resize",n),r())},200)))};u.on(window,"scroll resize",i)}function r(){s.use("kg/tb-footer",function(t,e){new e({needLogo:i(),delay:!1,root:l.get("#J_SiteFooter")}).render()})}var s=n,c=C,d=c.all,l=M,u=N;return t={init:function(){e(),a()?r():o()}}}(),m=function(t){var e=a,i=C.all,n=["GLOBAL","CN","HK","TW","MO","KR","MY","AU","SG","NZ","CA","US","JP"],o=["\u5168\u7403","\u4e2d\u56fd\u5927\u9646","\u4e2d\u56fd\u9999\u6e2f","\u4e2d\u56fd\u53f0\u6e7e","\u4e2d\u56fd\u6fb3\u95e8","\u97e9\u56fd","\u9a6c\u6765\u897f\u4e9a","\u6fb3\u5927\u5229\u4e9a","\u65b0\u52a0\u5761","\u65b0\u897f\u5170","\u52a0\u62ff\u5927","\u7f8e\u56fd","\u65e5\u672c"],s=w,c=r;return t={init:function(){this.render(),this.listEl=i("#J_SiteNavRegionList"),this.bind()},bind:function(){var t=!1,a=this;e.subscribe("region","show",function(){t||(a.renderItems(),t=!0)}),this.listEl.delegate("click",".J_RegionItem",function(t){var e=i(t.currentTarget).index(),a=n[e];c.send({category:"REGION_SWITCH",msg:"MAINLAND -> "+a}),KISSY.use("kg/tb-gnav/1.1.7/lib/hng",function(t,e){e.set(a,!1,function(){"www.taobao.com"===location.hostname&&"/"===location.pathname?"CN"!==a&&(window.location.href="https://world.taobao.com"):window.location.reload()})})})},renderItems:function(){var t=[];t=s.map(o,function(t){return'<li class="site-nav-region-item J_RegionItem" role="option">'+t+"</li>"}),this.listEl.html(t.join(""))},render:function(){var t='<li class="site-nav-menu site-nav-switch site-nav-multi-menu J_MultiMenu" data-name="region">\n      <div class="site-nav-menu-hd">\n        <span class="site-nav-region">\u4e2d\u56fd\u5927\u9646</span>\n        <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n      </div>\n      <div class="site-nav-menu-bd site-nav-menu-list">\n        <ul id="J_SiteNavRegionList" class="site-nav-region-list site-nav-menu-bd-panel menu-bd-panel" role="listbox" aria-expanded="true">\n        </ul>\n      </div>\n    </li>';i("#J_SiteNavBdL").prepend(t)}}}(),p=function(t){function e(){var t=c.getTag(),e="";return 10===t?e="super":20===t&&(e="apass"),e}function i(){var t=c.getTag(),i=c.getNick()||p,n=e(),a="";n&&(a="super");var o="";8==v.ie&&(o="ie8");var r='<a href="//vip.taobao.com" target="_top" class="site-nav-vip-icon '+n+" "+o+'"></a>';(t===-1||isNaN(t))&&(r="",a="");var s='<a href="'+N+'" target="_top" class="site-nav-login-info-nick '+a+'">'+i+"</a>",l=s+r;d.html("#J_SiteNavLogin",u.substitute(J,{loginUrl:h,logoutUrl:b,regUrl:C,spaceUrl:N,nick:i,userInfo:l}))}function o(t){var i=(c.getTag(),c.getNick()||p),n=e();if(v.ie&&v.ie<9&&(n=""),!(1===t.code&&t.status&&t.data&&t.data.isLogin&&t.data.taoScore))return p&&d.html("#J_SiteNavLoginPanel",u.substitute(I,{tagIcon:"",levelInfo:"",logoutUrl:b,regUrl:C,spaceUrl:N,avatarUrl:c.getAvatar(),host:c.getHost(),nick:i,privilegeDisplay:"none"})),!1;var a=t.data.taoScore,o="\u666e\u901a\u4f1a\u5458";"apass"===n?o="APASS\u4f1a\u5458":"super"===n&&(o="\u8d85\u7ea7\u4f1a\u5458");var r='<p class="level-info tao-score">\u6dd8\u6c14\u503c\uff1a'+a+'</p><p class="level-info '+n+'">'+o+"</p>";d.html("#J_SiteNavLoginPanel",u.substitute(I,{tagIcon:n,levelInfo:r,logoutUrl:b,regUrl:C,spaceUrl:N,avatarUrl:c.getAvatar(),host:c.getHost(),nick:i}))}function r(){var t=c.getHost(),e="//vip"+t+"/ajax/getGoldUser.do";new l({url:e,dataType:"jsonp",data:{_input_charset:"utf-8",from:"diaoding"},scriptCharset:"gbk",success:o})}var s=a,c=n,d=M,l=_,u=w,v=y,m=S,p=m.get("sn"),g="https://login"+c.getHost(),f="//login"+c.getHost(),h=g+"/member/login.jhtml?f=top",b=f+"/member/logout.jhtml?f=top&out=true",C="//reg"+c.getHost()+"/member/new_register.jhtml?from=tbtop&ex_info=&ex_sign=",N="//i"+c.getHost()+"/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739",T=location.href;/^http.*(\/member\/login\.jhtml)$/i.test(T)&&(T="");var k=T;h+=(~h.indexOf("?")?"&":"?")+"redirectURL="+encodeURIComponent(k),b+=(~b.indexOf("?")?"&":"?")+"redirectURL="+encodeURIComponent(k);var J=['<div class="site-nav-menu-hd">','  <div class="site-nav-sign">','    <a href="{loginUrl}" target="_top" class="h">\u4eb2\uff0c\u8bf7\u767b\u5f55</a>','    <a href="{regUrl}" target="_top">\u514d\u8d39\u6ce8\u518c</a>',"  </div>",'  <div class="site-nav-user">',"    {userInfo}",'    <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>',"  </div>","</div>",'<div class="site-nav-menu-bd" id="J_SiteNavLoginPanel">',"</div>"].join(""),I=['<div class="site-nav-menu-bd-panel">','  <div class="site-nav-user-wrapper {tagIcon}">','    <a href="//i{host}/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" target="_top" id="J_UserAvatar" class="site-nav-user-avatar">','        <img id="J_SiteNavUserAvatar" src="{avatarUrl}" width="80" height="80" alt="{nick}\u7684\u5934\u50cf">',"    </a>","  </div>",'  <div class="site-nav-user-info">','    <p class="site-nav-user-operate">','      <a href="//member1{host}/member/fresh/account_security.htm" target="_top">\u8d26\u53f7\u7ba1\u7406</a>','      <span class="site-nav-pipe">|</span>','      <a href="{logoutUrl}" target="_top">\u9000\u51fa</a>',"    </p>","    {levelInfo}","  </div>",'  <a class="site-nav-user-privilege" style="display:{privilegeDisplay}" href="//vip.taobao.com" target="_top">\u67e5\u770b\u4f60\u7684\u4e13\u5c5e\u6743\u76ca</a>',"</div>"].join("");return t={status:0,init:function(){this.render()},render:function(){var t=this;i();var e="site-nav-status-login",n="site-nav-status-logout",a="site-nav-multi-menu J_MultiMenu",o="#J_SiteNav",l="#J_SiteNavLogin";c.isLogin()||m.get("sn")?(d.replaceClass(o,n,e),d.addClass(l,a),s.subscribe("login","show",function(){t.status||(t.status=1,r())})):(d.replaceClass(o,e,n),d.removeClass(l,a))},destroy:function(){this.status=0}}}(),g=function(t){function e(t){return t?u.unparam(t):{}}function i(){this.status=0}var o=KISSY,s=M,c=N,d=_,l=S,u=w,v=r,m=a,p=n,g=window.g_config&&window.g_config.appId?parseInt(window.g_config.appId):void 0,f="mini-cart",h="menu-empty",b=p.getHost(),C=p.getComponentVersion("cart")||"0.0.3";return i.prototype.init=function(){var t=this;return!this.status&&(t.$cart=s.get("#J_MiniCart"),TB.Global.setCartNum=function(e){t.setCartNum(e)},this.$cart&&(s.addClass(this.$cart,h),c.on(s.get(".site-nav-menu-hd a",this.$cart),"click",function(){s.removeClass(t.$cart,"menu-hover"),window.MiniCart&&(window.MiniCart._clicked=!1);var e=new Image;e.src="//gm.mmstat.com/tbcart.1.56&t="+ +new Date}),this.update()),this.cartNum=0,window.MiniCart&&window.MiniCart.reset&&window.MiniCart.reset(),void m.subscribe("cart","show",function(){t.renderMenu.call(t)}))},i.prototype.update=function(){function t(e){if(e=e||0){var n={keys:"TCART_234_"+e+"_q",t:u.now()};d.jsonp(m,n,function(e){if(e){var a=r>=0?r:c?1:0;i.setCartNum(e[n.keys]),l.get("mt","ci="+e[n.keys]+"_"+a+(s?"&"+s:""),7,b)}else c&&t()})}else d.getScript(v+"callback=TB.Global.setCartNum&t="+ +new Date+(g?"&appid="+g:""))}var i=this,n=e(l.get("mt")),a=n&&n.ci?n.ci.split("_"):[void 0,void 0],o=parseInt(a[0],10),r=parseInt(a[1],10),s=n?n.cp:void 0,c=p.isLogin(),v="//cart"+b+"/top_cart_quantity.htm?",m="//count."+(p.isDaily()?"daily.taobao.net":p.isHttps()?"taobao.com":"tbcdn.cn")+"/counter6";if(i._OFF=a<0,c)n?1==r?i.setCartNum(o):t():t(l.get("unb"));else{var f=l.get("t");f?o>=0?i.setCartNum(o):t(f):i.setCartNum(0)}},i.prototype.setCartNum=function(t){var e=this;if(u.isNumber(t)&&!e._OFF&&e.$cart){var i=e.$cart.getElementsByTagName("a")[0],n=19!==g,a=s.get("strong",i);t<0&&(e._OFF=t===-1,v.send({category:"CART_MINUS",msg:t}),s.removeClass(e.$cart,f),window.MiniCart&&e.off()),!e._OFF&&t>=0?a.innerHTML=t:s.addClass(e.$cart,"J_SiteNavDisableMenu"),s.addClass(e.$cart,f),e._OFF!==!0||p.isMobile()||(n=!1),s[(n?"remove":"add")+"Class"](e.$cart,h),s.addClass(e.$cart,"menu"),i.id="mc-menu-hd",window.MiniCart&&(window.MiniCart.cartNum=t,window.MiniCart.isExpired=!0)}},i.prototype.off=function(){var t=s.query(".menu-bd-panel","#J_MiniCart");return t&&t[0]?(t[0].innerHTML=window.MiniCart._parseMsg(" "),s.addClass(t[0],"mini-cart-closed"),!0):(s.addClass(self.$cart,h),!1)},i.prototype.renderMenu=function(){var t=this;return 19!==g&&(t._OFF!==!0||p.isMobile()?(window.MiniCart?window.MiniCart.render():o.ready(function(){d.getScript(p.getCdnHost()+"/tb/mini-cart/"+C+"/index-min.js",function(){o.use("tb/mini-cart",function(){var e=s.get("#J_MiniCartNum"),i=e?e.innerHTML:-1;return i===-1||t._OFF===!0?t.off():void window.MiniCart.init(i,!0)})})}),!0):(s.addClass(t.$cart,h),!1))},i.prototype.destroy=function(){this.status=0},t=new i}(),f=function(t){function e(t){var e={user:!0,responsive:!0,cart:!0,webww:!0,weekend:!0,accessibility:!0,account:!0,siteMap:!0,footer:!0,region:!1};t=t||{},t=N.merge(e,t),t.user&&i.init(),t.responsive&&_.init(),t.cart&&a.init(),t.webww&&r.init(),t.region&&y.init(),t.weekend&&(window.g_config&&window.g_config.weekend===!1||f.init()),t.accessibility&&b.init(),t.account&&h.init(),t.siteMap&&n.init(),t.footer&&S.init()}var i=p,n=o,a=g,r=s,f=c,h=d,b=l,_=u,S=v,M=C,N=(M.all,w),y=m;return t=e}(),h=function(t){var e=n,i=f,a=window.g_config||{},o=a.footer!==!1;return i({region:a.region||!1,footer:o}),t=e}(),i.exports=h});