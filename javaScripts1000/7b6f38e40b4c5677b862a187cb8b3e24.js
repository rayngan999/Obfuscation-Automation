Ya.Site.Suggest.getConstructor=function(F){var H="#ya-site-form .ya-site-suggest{position:relative;margin:0}#ya-site-form .ya-site-suggest-popup{position:absolute;width:100%}#ya-site-form .ya-site-suggest__opera-gap{position:absolute;height:25em;border:1px solid transparent}#ya-site-form .ya-site-suggest-list{position:absolute;z-index:9999;overflow:hidden;min-width:25em;width:100%;margin-top:-1px;border-collapse:separate;-webkit-box-shadow:0 1px 7px #9a9a9a;-moz-box-shadow:0 1px 7px #9a9a9a;box-shadow:0 1px 7px #9a9a9a;border:1px solid #dedede;border-color:rgba(154,154,154,.4) rgba(154,154,154,.5) rgba(154,154,154,.6);box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box}#ya-site-form .ya-site-suggest__iframe{position:absolute;z-index:-1;min-width:25em;width:100%;height:100%;background:#fff}#ya-site-form .ya-site-suggest-items{font-size:16px;min-width:25em;width:100%;margin:0;padding:0 1px 0 0;list-style:none}#ya-site-form .ya-site-suggest-items li{margin:0;padding:0;line-height:normal}#ya-site-form .ya-site-suggest-elem{display:block;padding:.25em .3em;cursor:pointer;background:url()}#ya-site-form a.ya-site-suggest-elem:link,#ya-site-form a.ya-site-suggest-elem:visited{text-decoration:none}html body #ya-site-form .ya-site-suggest-elem-link,html body #ya-site-form .ya-site-suggest-elem:link{color:#000!important}#ya-site-form .ya-site-suggest-elem:hover,html body #ya-site-form .ya-site-suggest-elem_state_hover{background:#fef6d7}#ya-site-form .ya-site-suggest-elem_nav:hover,#ya-site-form .ya-site-suggest-elem_translate:hover{text-decoration:none;color:#000!important}#ya-site-form .ya-site-suggest-elem_nav .ya-site-suggest__link{text-decoration:underline;color:#1a3dc1}#ya-site-form .ya-site-suggest-elem_translate .ya-site-suggest__link{text-decoration:underline;color:#000}#ya-site-form .ya-site-suggest-elem .ya-site-suggest__info{white-space:nowrap;color:#666}#ya-site-form .ya-site-suggest-elem_selected{background:#fdedaf}#ya-site-form .ya-site-suggest__fact{color:#555}#ya-site-form .ya-site-suggest__highlight{font-weight:700}";F.browser.msie&&(H+="undefined");var $=function(n){var u,l,r,g,m,e,s=F(this),t=F('<div class="ya-site-suggest-popup"><i class="ya-site-suggest__opera-gap"></i><div class="ya-site-suggest-list"><div class="ya-site-suggest__iframe"/><ul class="ya-site-suggest-items"></ul></div></div>').hide(),c=t.find(".ya-site-suggest-items"),y=n.$input,o=n.$form,a=n.$button,p=n.timeout||700,d=!!n.permanent,i=!1,f=!1,h=!1,_=!0,b=0,v=0,x="",k=!1,w=new Date,T="",C=y.val(),E=((e={})["*"+n.url]=["",[]],e),S={},Y=function(e){return(e.length?Ya.Site.BemParams.extract(e[0]):{}).value||e.find(".ya-site-suggest__content").text()||e.text()},z=(r=0,g=n.getURL(),m=s.hasClass("ya-site-suggest_reaction_changing"),function(s){var e,t,a,i,n,o;!h&&(n=s,o=!(m&&l===n),l=n,o)&&(e=E[s+"*"+g],I(0,s),e?M(e):(t=setTimeout(j,p),r+=1,F.ajax({url:g,data:{text:y.val()},dataType:"json",type:"GET",timeout:p,beforeSend:function(){w=new Date},success:(a=r,i=g,function(e){S.times.push(new Date-w),e&&(E[s+"*"+i]=e,clearTimeout(t),a===r&&("edit"!==S.usageType&&(S.usageType="not_used"),M(e)))})})))}),D=function(e){window.setTimeout(function(){F('<form style="display:none" action="'+e+'" method="get" />').appendTo(F("body")).submit().remove()},500)},j=function(){_||(t.hide(),I(0,y.val()),_=!0)},I=(u=0,function(e,s){void 0!==s&&(C=s),(u=e?u+e:0)<0&&(u=b),b<u&&(u=0),v=u;var t=c.find(".ya-site-suggest-elem").filter(":not(.ya-site-suggest__elem_selectable_no)").removeClass("ya-site-suggest-elem_selected").eq(u?u-1:1e3).addClass("ya-site-suggest-elem_selected"),a=Y(t),i=t.is(".ya-site-suggest-elem_nav")?T:a||C,n=t.attr("href"),o=a&&n?n:"";y.val()!==i&&(y.val(i),x=i),y.data("href",o)});function M(e){var s=e[1];if(!(s?s.length:0))return j();var a=e[2]||[];c.html(F.map(s,function(e,s){return t=a[s]?["href",e,a[s]]:e,F.isArray(t)&&$.buildItemHtmlFns[t[0]]?$.buildItemHtmlFns[t[0]](t,{params:n}):'<li><span class="ya-site-suggest-elem ya-site-suggest-elem-link"><span class="ya-site-suggest__content">'+L(t)+"</span></span></li>";var t}).join("")).find(".ya-site-suggest-elem").filter(":not(.ya-site-suggest__elem_selectable_no)").bind("mouseenter mouseleave",function(e){F(this)["mouseenter"===e.type?"addClass":"removeClass"]("ya-site-suggest-elem_state_hover")}),b=s.length-c.find(".ya-site-suggest__elem_selectable_no").length,t.show(),_=!1}function B(e){if(n.preventSubmit)return j(),h=!0,void setTimeout(function(){h=!1},100);var s,t,a,i;f?f=!1:(k?(s=F(e.target),t=Y(s),a=s.parents("li:eq(0)").prevAll().length+1,k=!1,A({sug:t,pos:a})):A(),i=y.data("href"),d&&y.blur(),i&&!d?location.href=i:i&&d?D(i):window.setTimeout(function(){q(),o.trigger("submit",e.type)},50))}function A(e){var s,t=[];t.push(["q",T]),t.push(["site","#"+n.sid]),e&&e.pos&&e.sug?(t.push(["sug",e.sug]),t.push(["pos",e.pos])):v&&(t.push(["sug",x]),t.push(["pos",v])),t.push(["usage",S.usageType]),t.push(["times",S.times.join(".")]),t.push(["session",S.session]),S.buttonByMouse&&t.push(["button_by_mouse",S.buttonByMouse]),s="//clck.yandex.ru/click/dtype=stred/pid=0/cid=72145/"+(t=t.map(function(e){return e[0]+"="+encodeURIComponent(e[1])}).join("/"))+"/*",document.createElement("img").src=s}function K(e){var s=c.find(".ya-site-suggest-elem_selected");return i=!0,s.hasClass("ya-site-suggest-elem_nav")?(f=!0,D(s.attr("href")),d&&j()):(d||(h=!0),B(e),j()),!1}function q(){S=S||{},F.extend(S,{usageType:"not_shown",buttonByMouse:"",session:(new Date).getTime()+Math.round(1e4*Math.random()),times:[],ratio:{userValue:0,finalValue:0,userActions:0}})}F("head").append('<style type="text/css">'+H.replace(/#ya-site-form/g,"#"+n.id)+"</style>"),y.attr("autocomplete","off"),s.append(t),q(),F(document).keydown(function(e){(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)&&0}).keyup(function(){0}).mouseup(function(){i=!1}),c.mousedown(function(e){var s,t=F(e.target);return S.usageType="mouse",i=!0,t.is("li *")&&((s=t.closest(".ya-site-suggest-elem")).hasClass("ya-site-suggest__elem_selectable_no")||(I(0,Y(s)),y.data("href",s.attr("href")),d||(h=!0),"a"!==s.get(0).tagName.toLowerCase()&&(k=!0,B(e)))),!1}).click(function(){d||F.browser.msie?j():y.focus()}),a.click(function(e){return e.preventDefault(),S.buttonByMouse="button_by_mouse",K(e)}).keydown(function(e){return 13===e.keyCode&&K(e),!1}),y.blur(function(e){e.originalEvent&&!e.originalEvent.preventDefault?setTimeout(function(){i||y[0]===document.activeElement||j()},84):i||j()}).click(function(){_||y.val()||(T="",j())}).keydown(function(e){switch(e.keyCode){case 38:case 40:e.preventDefault(),S.usageType="suggest",_?(h=!1,z(y.val())):I(e.keyCode-39);break;case 13:break;case 27:i=!0}}).keypress(function(e){switch(e.keyCode){case 13:return"suggest"===S.usageType&&(S.usageType="keyboard"),K(e);case 27:return!1}}).keyup(function(e){switch(e.keyCode){case 38:case 40:break;case 27:I(0),j(),i=!1;break;default:T!==y.val()&&("suggest"===S.usageType&&(S.usageType="edit"),T=y.val(),clearInterval(void 0),setTimeout(function(){z(y.val())},1))}}),setTimeout(function(){y.focus(function(e){!1!==F(e.target).data("ya-site-suggest")&&(i=!1,z(y.val()))})},42),d&&setInterval(function(){E={"":[]}},18e5)};function L(e){return"hl"===e[0]?F.map(e.slice(1),function(e){return F.isArray(e)?'<span class="ya-site-suggest__highlight">'+Ya.Site.xmlEscape(e[0])+"</span>":Ya.Site.xmlEscape(e)}).join(""):Ya.Site.xmlEscape(e)}return $.buildItemHtmlFns={href:function(e){return e[3]&&e[3].nah&&1===e[3].nah?'<li><span class="ya-site-suggest-elem ya-site-suggest-elem_nah">'+L(e[1])+"</span></li>":'<li><a class="ya-site-suggest-elem ya-site-suggest-elem-link" href="'+e[2]+'"><span class="ya-site-suggest__content">'+L(e[1])+"</span></a></li>"},nav:function(e){return'<li><a class="ya-site-suggest-elem ya-site-suggest-elem-link ya-site-suggest-elem_nav" href="http://'+(e[3]||e[2])+'"><span class="ya-site-suggest__content"><span class="ya-site-suggest__link">'+Ya.Site.xmlEscape(e[2])+'</span><span class="ya-site-suggest__info">&nbsp;&mdash; '+Ya.Site.xmlEscape(e[1])+"</span></span></a></li>"},html:function(e){return'<li><span class="ya-site-suggest-elem ya-site-suggest-elem-link">'+Ya.Site.xmlEscape(e[1])+"</span></li>"},fact:function(e){return'<li><span class="ya-site-suggest-elem ya-site-suggest-elem-link ya-site-suggest-elem-fact"><span class="ya-site-suggest__content">'+Ya.Site.xmlEscape(e[1])+'</span><span class="ya-site-suggest__fact"> &mdash; '+Ya.Site.xmlEscape(e[2])+"</span></span></li>"}},$};