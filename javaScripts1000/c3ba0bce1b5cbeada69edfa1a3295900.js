(function(l,u,q){function J(){setInterval(function(){v();E&&A()},100);E&&(l.addEventListener("scroll",A),l.addEventListener("resize",A));B&&(B.onResizeSuccess(function(a,b){}),B.onResizeDenied(function(a,b){}));l.addEventListener("message",function(a){try{var b=a.data,f=b.act;if("init"==f)F=a.source,K(function(){L(b)});else if("height"==f)r.forEach(function(c){c.wnd==a.source&&(m(c.iframe,"height",b.height+"px"),v(c))});else if("fixed"==f)r.forEach(function(c){c.wnd==a.source&&(m(c.target,"width",
b.width+"px"),m(c.target,"height",b.height+"px"),v(c))});else if("style"==f)r.forEach(function(c){if(c.wnd==a.source){for(var h in b.style)m(c.target,h,b.style[h]);b.ex&&(h=u.createElement("script"),h.type="text/javascript",h.text=b.ex,c.target.appendChild(h));v(c)}});else if("catfish"==f)r.forEach(function(c){c.wnd==a.source&&(c.iframe.insertAdjacentHTML("afterend","<a href='#' data-i='z' style=\"position: absolute; width: 28px; height: 28px; top: -28px; right: 0;background-image: url(&quot;data:image/svg+xml;charset=utf-8,%3Csvg width='13' height='13' viewBox='341 8 13 13' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%234F4F4F' d='M354 9.31L352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z' fill-rule='evenodd'/%3E%3C/svg%3E&quot;);background-size: 13px 13px; background-position: 9px; background-color: #fff; background-repeat: no-repeat; box-shadow: 0 -1px 1px 0 rgba(0,0,0,0.2); border: none; border-radius: 12px 0 0 0;\"onclick=\"parentElement.style.width=0;return false\"><div style=\"position: absolute; top: -20px; right: 0; left: -20px; bottom: 0;\"></div></a>"),
c.target.style.cssText="position:fixed !important;right:0 !important;bottom:0 !important;left:0 !important;text-align: center;z-index: 2147483647;box-sizing: border-box;opacity: 1 !important;background-image: none !important;background-color: #fff;box-shadow: 0 0 5px 0 rgba(0,0,0,0.2) !important;margin-bottom: 0 !important;line-height: 0 !important;",v(c))});else if("dummy"==f)r.forEach(function(c){if(c.wnd==a.source){m(c.iframe,"display","none");c.iframe.insertAdjacentHTML("afterend","<div id='bn_"+
c.id+"'></div>");var h=u.createElement("script");h.type="text/javascript";h.text=b.dummy;c.target.appendChild(h)}});else if("bdload"==f){if("end"==b.sub){var g=[];t.forEach(function(c){c.src!=a.source&&g.push(c)});t=g;if(t.length){var d=t[0];d.src.postMessage({act:"bdload",ms:d.ms},q)}}"beg"==b.sub&&(t.push({src:a.source,ms:b.ms}),1==t.length&&(d=t[0],d.src.postMessage({act:"bdload",ms:d.ms},q)))}}catch(c){C(c.name+": "+c.message+"\n"+(c.stack?c.stack.replace(c.name+": "+c.message+"\n",""):""))}},
!0);return{}}function K(a){function b(){--c||(g.some(function(h,e){return w=d[e]}),g.forEach(function(h,e){if(w!=d[e])if(!1===d[e])d[e]=w,f();else{var k=new XMLHttpRequest,n=0,p=G+"//"+h+"/cs/1/1";k.onreadystatechange=function(){if(4==k.readyState||"complete"==k.readyState)n++,(!k.status||502==k.status)&&5>n?(k.open("GET",p,!0),k.send()):(d[e]=w,f())};k.open("GET",p,!0);k.setRequestHeader("x-cache",w);k.setRequestHeader("Cache-Control","max-age=0");k.send()}}),f())}function f(){var h;if(!d.some(function(e){return w!=
e}))for(x=2;h=H.shift();)h()}if(2==x)a();else if(H.push(a),!x){x=1;var g=["\x72\x65\x63\x72\x65\x61\x74\x69\x76\x2e\x72\x75","\x67\x6f\x2e\x72\x63\x76\x6c\x69\x6e\x6b\x2e\x63\x6f\x6d"],d=[],c=g.length;g.forEach(function(h,e){M(G+"//"+h+"/cs/1/1",function(){d[e]=l.rc_cache;b()},function(){d[e]=!1;b()})})}}function M(a,b,f){function g(){var c=u.createElement("script");c.type="text/javascript";c.src=a;c.onerror=function(){d++;5>d?setTimeout(g,10):(f&&f(),C(d+"!"+a))};c.onload=function(){b&&b();d&&C(d+"!"+a)};u.getElementsByTagName("head")[0].appendChild(c)}var d=0;g()}function L(a){var b=
u.createElement("iframe");try{var f=parent.document.getElementById("bn_"+a.rnd)}catch(g){f=u.getElementById("bn_"+a.rnd)}a.iframe=b;a.target=f;a.ref=D||a.ref||""+l.location;r.push(a);b.addEventListener("load",function(g){g=b.contentWindow;a.wnd=g;g.postMessage({act:"init",width:f.clientWidth,vw:F.innerWidth,id:a.id,ref:a.ref,rc_cache:l.rc_cache,ms:a.ms},q);a.target.setAttribute("data-w",a.target.clientWidth);m(a.target,"display","block")});b.scrolling="no";m(b,"border",0);m(b,"width","100%");m(b,
"height",0);m(b,"margin",0);m(b,"padding",0);b.src=q+"/static/iframe.htm";b.title=a.id;f.appendChild(b)}function A(){r.forEach(function(a){if(a.wnd){var b=a.iframe;var f=b.ownerDocument;var g=f.defaultView||f.parentWindow;var d=f.doctype?f.documentElement:f.body;f=d.clientWidth||g.innerWidth;var c=d.clientHeight||g.innerHeight;var h=g.pageXOffset||d.scrollLeft;g=g.pageYOffset||d.scrollTop;var e=b;d=e.ownerDocument;var k=d.defaultView||d.parentWindow;var n=0,p=0;d=e.clientWidth;var I=e.clientHeight;
if("function"==typeof e.getBoundingClientRect)e=e.getBoundingClientRect(),n=e.left+k.pageXOffset,p=e.top+k.pageYOffset;else for(;e;)n+=parseFloat(e.offsetLeft),p+=parseFloat(e.offsetTop),e=e.offsetParent;e=n;k=p;var y=p=n=0,z=0;k+I>g&&g+c>k&&(n=k>g?0:g-k,p=Math.min(k+I,g+c)-Math.max(k,g),y=e>h?0:h-e,z=Math.min(e+d,h+f)-Math.max(e,h));if(b.getAttribute("data-vw")!=z||b.getAttribute("data-vh")!=p||b.getAttribute("data-vx")!=y||b.getAttribute("data-vy")!=n)b.setAttribute("data-vw",z),b.setAttribute("data-vh",
p),b.setAttribute("data-vx",y),b.setAttribute("data-vy",n),a.wnd.postMessage({act:"visible",visible:{w:z,h:p,x:y,y:n}},q)}})}function v(a){a?a.wnd&&a.iframe.getAttribute("data-w")!=a.iframe.clientWidth&&(a.wnd.postMessage({act:"width",width:a.iframe.clientWidth},q),a.iframe.setAttribute("data-w",a.iframe.clientWidth)):r.forEach(function(b){v(b)})}function m(a,b,f){a&&a.style.setProperty(b,f,"important")}function C(a){console.error(a);(new Image).src=q+"/err/?ver=210322-0404&text="+encodeURIComponent(a)}
var F,r=[],t=[],D=0,w="",x,H=[],G=q.match(/^(https?:)/)[1],E=!("IntersectionObserver"in l),B=l.parent.context;if(!(D=l===top?1:0))try{D=""+l.top.location}catch(a){}l.rcMain=l.rcMain||J()})(window,document,"\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x6f\x2e\x72\x63\x76\x6c\x69\x6e\x6b\x2e\x63\x6f\x6d");
