var checkInPopup=checkInPopup||!1;
function sendLogRecommendScroll(e,d){try{if("undefined"!=typeof ADM_CHECKER)var f=ADM_CHECKER.getStorage("__uid");else"undefined"!=typeof ADM_TRACKING&&(f=ADM_TRACKING.getStorage("__uid"));"undefined"!=typeof ADM_AdsTracking&&(f=ADM_AdsTracking.getStorage("__uid"))}catch(r){f=""}var h=document.getElementById(e);if(null!=h){var c=h.getElementsByTagName("LI"),b=document.URL,m=b.split("/");m=m[0]+"//"+m[2];b=b.replace(m,"");h="undefined"!=h.getAttribute("dmtb")&&null!=h.getAttribute("dmtb")&&""!=h.getAttribute("dmtb")?
h.getAttribute("dmtb"):"";if(0<c.length)for(var k=0;k<c.length;k++){var a=c[k],g="undefined"!=a.getAttribute("data-id")&&null!=a.getAttribute("data-id")&&""!=a.getAttribute("data-id")?a.getAttribute("data-id"):"",p=new trackingViewScroll(e,a,d);a=a.getElementsByTagName("a");for(var l=0;l<a.length;l++){var n=a[l].href;if(-1==n.indexOf("lg1.logging.admicro.vn")){var v="//lg1.logging.admicro.vn/nd?nid="+g+"&zid="+h+"&dmn="+encodeURIComponent(m)+"&cov=1&url="+encodeURIComponent(b)+"&re="+encodeURIComponent(n)+
"&covid=0&gid="+f+"&ext=";a[l].href=v}}g="//lg1.logging.admicro.vn/nd?nid="+g+"&zid="+h+"&dmn="+encodeURIComponent(m)+"&cov=0&url="+encodeURIComponent(b)+"&re="+encodeURIComponent(n)+"&covid=0&gid="+f+"&ext=";p.timeLog(g)}}}
function trackingViewScroll(e,d,f){var h=this,c="";this.timeLog=function(b){c=b;this.sTimer=-1;h.scroll_time();document.getElementById("listNewHeader").addEventListener("scroll",function(){h.scroll_time()});window.addEventListener("scroll",h.scroll_time)};this.getScrollTop=function(){var b=document.body.scrollTop;0==b&&(b=window.pageYOffset?window.pageYOffset:document.body.parentElement?document.body.parentElement.scrollTop:0);return b};this.scroll_active_view=function(){var b=!1,c=window.innerHeight,
d=h.getScrollTop()+c,a=document.getElementById(e);if(null!=a){var g=ADS_CHECKER.getElementTop(e),f=g+a.clientHeight/2,l=c/4,n=g+a.clientHeight+l;a=a.clientHeight;0<a&&(b||(0==g?b=!0:0<g&&(a<c?d>f&&d<f+c&&(b=!0):d>g+3*l&&d<n&&(b=!0))))}return b};this.scroll_time=function(){!h.send&&h.scroll_active_view()&&(-1!=h.sTimer&&clearTimeout(h.sTimer),h.sTimer=window.setTimeout(function(){h.scroll_view()},1E3))};this.scroll_view=function(){var b=!1,e=document.getElementById("listNewHeader").scrollTop+f;if(null!=
d){var k=d.offsetTop,a=k+d.clientHeight/2,g=a+f,p=f/4,l=k+d.clientHeight+p,n=d.clientHeight;0<n&&(b||(0==k?b=!0:0<k&&(n<f?e>a&&e<g&&(b=!0):e>k+3*p&&e<l&&(b=!0))));b&&document.images&&""!=c&&((b=c)&&""!=b&&(e=window.__AdmsendRandom||"",(new Image).src=b+e),h.send=!0)}}}
function sendLogRecommend(e){window.setTimeout(function(){try{if("undefined"!=typeof ADM_CHECKER)var d=ADM_CHECKER.getStorage("__uid");else"undefined"!=typeof ADM_TRACKING&&(d=ADM_TRACKING.getStorage("__uid"));"undefined"!=typeof ADM_AdsTracking&&(d=ADM_AdsTracking.getStorage("__uid"))}catch(A){d=""}var f=document.getElementById(e);if(null!=f){var h=f.getElementsByTagName("LI"),c=f.getAttribute("algid")||0,b=f.getAttribute("boxid")||0,m=f.getAttribute("dspid")||0,k=f.getAttribute("last-id")||0,a=
document.URL,g=a.split("/"),p=g[0]+"//"+g[2],l=a.replace(p,"");null!=a.match(/[0-9]+rf/g)?(a=a.match(/[0-9]+rf/g),a=a[0].replace("rf","")):(a=a.match(/([0-9]+)(.chn|.html|.htm)/g),a=null!=a?a[0].replace(/.htm|.html|.chn/gi,""):"home");if("undefined"==window["AdmCount_"+e+"_"+a]||null==window["AdmCount_"+e+"_"+a]||""==window["AdmCount_"+e+"_"+a])window["AdmCount_"+e+"_"+a]=0;f=new trackingViewRecommend_v2(f);var n="//lg1.logging.admicro.vn/nd?nid=0&type=1&zid=-1&dmn="+encodeURIComponent(p)+"&cov=0&url="+
encodeURIComponent(l)+"&covid=0&gid="+d+"&ext="+encodeURIComponent("lastid_"+k+",rc_"+(b+"_"+m+"_"+c))+"&bx="+b+"&dsp="+m+"&alg="+c;f.timeLog(n);f={};var v=[];if(0<h.length){for(var r=window["AdmCount_"+e+"_"+a],B=h.length;r<B;r++){tag=h[r];n=c||tag.parentNode.getAttribute("algid");var w=b||tag.parentNode.getAttribute("boxid"),x=m||tag.parentNode.getAttribute("dspid"),z=k||tag.parentNode.getAttribute("last-id");try{var y=tag.parentNode.id||"";y!=e&&""!=y&&"undefined"==typeof f[y]&&(f[y]=new trackingViewRecommend_v2(tag.parentNode),
f[y].timeLog("//lg1.logging.admicro.vn/nd?nid=0&type=1&zid=-1&dmn="+encodeURIComponent(p)+"&cov=0&url="+encodeURIComponent(l)+"&covid=0&gid="+d+"&ext="+encodeURIComponent("lastid_"+z+",rc_"+(w+"_"+x+"_"+n))+"&bx="+w+"&dsp="+x+"&alg="+n))}catch(A){}var t="undefined"!=tag.getAttribute("data-newsid")&&null!=tag.getAttribute("data-newsid")&&""!=tag.getAttribute("data-newsid")?tag.getAttribute("data-newsid"):"";if(""==t){var q=tag.querySelector("a");q&&q.href&&((g=/([0-9]+)rf([0-9]+)(.chn|.html|.htm)/.exec(q.href+
""))&&2<=g.length?t=g[1]:(g=/([0-9]+)(.chn|.html|.htm)/.exec(q.href+""))&&2<=g.length&&(t=g[1]))}v[r]=new trackingViewRecommend_v2(tag);if(0==tag.getAttribute("ispopup"))for(g=tag.getElementsByTagName("a"),q=0;q<g.length;q++){var u=g[q].href;-1==u.indexOf("lg1.logging.admicro.vn")&&(u="//lg1.logging.admicro.vn/nd?nid="+t+"&zid=-1&dmn="+encodeURIComponent(p)+"&cov=1&url="+encodeURIComponent(l)+"&re="+u+"&covid=0&gid="+d+"&ext=lastid_"+z+"&bx="+w+"&dsp="+x+"&alg="+n,g[q].href=u)}1==tag.getAttribute("ispopup")&&
(u="//lg1.logging.admicro.vn/nd?nid="+t+"&zid=-1&dmn="+encodeURIComponent(p)+"&cov=1&url="+encodeURIComponent(l)+"&re=&covid=0&gid="+d+"&ext=lastid_"+z+"&bx="+w+"&dsp="+x+"&alg="+n,v[r].logClick(u));""!=t&&(n="//lg1.logging.admicro.vn/nd?nid="+t+"&zid=-1&dmn="+encodeURIComponent(p)+"&cov=0&url="+encodeURIComponent(l)+"&covid=0&gid="+d+"&ext=lastid_"+z+"&bx="+w+"&dsp="+x+"&alg="+n,v[r].timeLog(n))}window["AdmCount_"+e+"_"+a]=h.length}}},1E3)}
function trackingViewRecommend_v2(e){var d=this;this.send=!1;var f="",h=function(c){if(c&&""!=c){var b=window.__AdmsendRandom||"";(new Image).src=c+b}};this.timeLog=function(c){this.sTimer=-1;f=c;checkInPopup?(d.scroll_time(),document.getElementsByClassName("light-box-content")[0].addEventListener("scroll",d.scroll_time)):(d.scroll_time(),window.addEventListener("scroll",d.scroll_time))};this.logClick=function(c){e.addEventListener("click",function(){document.images&&""!=c&&h(c)})};this.scroll_time=
function(){d.send||(-1!=d.sTimer&&clearTimeout(d.sTimer),d.sTimer=window.setTimeout(function(){checkInPopup?d.scroll_view_popup():d.scroll_view()},500))};this.getScrollTop=function(){var c=document.body.scrollTop;0==c&&(c=window.pageYOffset?window.pageYOffset:document.body.parentElement?document.body.parentElement.scrollTop:0);return c};this.getElementTop=function(){if(null!=e){yPos=e.offsetTop;for(tempEl=e.offsetParent;null!=tempEl;)yPos+=tempEl.offsetTop,tempEl=tempEl.offsetParent;return yPos}return 0};
this.scroll_view_popup=function(){var c=!1,b=window.innerHeight,m=document.getElementsByClassName("light-box-content")[0].scrollTop+b;if(null!=e){var k=d.getElementTop(),a=k+e.clientHeight/2,g=b/4,p=k+e.clientHeight+g,l=e.clientHeight;0<l&&(c||(0==k?c=!0:0<k&&(l<b?m>a&&m<a+b&&(c=!0):m>k+3*g&&m<p&&(c=!0))));c&&document.images&&""!=f&&(h(f),d.send=!0)}};this.scroll_view=function(){var c=!1,b=window.innerHeight,m=d.getScrollTop()+b;if(null!=e){var k=d.getElementTop(),a=k+e.clientHeight/2,g=b/4,p=k+e.clientHeight+
g,l=e.clientHeight;0<l&&(c||(0==k?c=!0:0<k&&(l<b?m>a&&m<a+b&&(c=!0):m>k+3*g&&m<p&&(c=!0))));c&&document.images&&""!=f&&(h(f),d.send=!0)}}};