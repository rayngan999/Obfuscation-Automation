//tealium universal tag - utag.105 ut4.0.202105260107, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){try{if(1){(function(b,a){if(('disabled'==='enabled')&&(typeof define==='function')&&define.amd){define([],a)}else{b.OOo=a()}}(this,function(){window.OOo={__detectBrowser:function(b){var a=Object.prototype.toString.call(window.opera)==='[object Opera]',c=b.indexOf('MSIE ')>-1||b.indexOf('Trident/')>-1,d={IE:!!c,MSEdge:b.indexOf('Edge/')>-1,Opera:a,WebKit:b.indexOf('AppleWebKit/')>-1,Chrome:b.indexOf('Chrome')>-1&&b.indexOf('Edge/')===-1,Gecko:b.indexOf('Gecko')>-1&&b.indexOf('KHTML')===-1,MobileSafari:/Apple.*Mobile.*Safari/.test(b),iOs:b.indexOf('iPad')>-1||b.indexOf('iPhone')>-1||b.indexOf('iPod')>-1,iOS67:b.search(/OS 6(.*)|7(.*) like Mac OS/i)>-1,BlackBerry:b.indexOf('BlackBerry')>-1,Fennec:b.indexOf('Fennec')>-1,IEMobile:b.indexOf('IEMobile')>-1,WindowsPhone:b.toLowerCase().indexOf('windows phone')>-1,WindowsTablet:b.toLowerCase().indexOf('windows nt')>-1&&b.toLowerCase().indexOf('touch')>-1,OperaMobile:b.search(/Opera (?:Mobi|Mini)/)>-1,Kindle:b.search(/[ ](Kindle|Silk)/)>-1,isChromeIOS:/crios/i.test(b),ua:b,Android:/Android/.test(b),facebookWebview:/FBAV/.test(b),googleWebview:/GSA/.test(b),AndroidChromiumWebview:/Chrome\/.* Mobile/.test(b),iOsWebview:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)/.test(b)},e=false;d.isMobile=(d.MobileSafari||d.BlackBerry||d.Fennec||d.IEMobile||d.OperaMobile||d.Kindle||d.iOs||d.Android||d.WindowsPhone||d.WindowsTablet||d.AndroidChromiumWebview||d.iOsWebview||d.facebookWebview||d.googleWebview);d.isMobileNonIOS=(d.isMobile&&!d.iOs);return d}};OOo.Browser=OOo.__detectBrowser(navigator.userAgent);OOo.Cache={};OOo.instanceCount=0;OOo.K=function(){};var E=E||OOo;(function(){function x(b){return document.getElementById(b)}
function y(b,a){var c;for(c in a){if(a.hasOwnProperty(c)){b[c]=a[c]}}
return b}
function u(b,a,c,d){if(b.addEventListener){b.addEventListener(a,c,d)}else if(b.attachEvent){b.attachEvent('on'+a,c)}}
function w(b,a,c,d){if(b.removeEventListener){b.removeEventListener(a,c,d)}else if(b.detachEvent){b.detachEvent('on'+a,c)}}
function z(b){var a=[],c;for(c in b){if(b.hasOwnProperty(c)){a.push(c+'='+(encodeURIComponent(b[c])||''))}}
return a.join('&')}
function A(b){var a=z(b.metrics),c=b.tealeafId+'|'+b.clickTalePID+'/'+b.clickTaleUID+'/'+b.clickTaleSID;a+='&custom_var='+OOo.createLegacyVars(b.legacyVariables,c);if(b.metrics.type==='OnPage'){a+='|iframe'}
if(b.asm){a+='&asm=2'}
a+="&_"+'rev=2';if(b.customVariables){a+='&customVars='+encodeURIComponent(OOo.serialize(b.customVariables))}
return a}
function C(b,a){var c=document,d=c.createElement('form'),e=c.createElement('input'),g=b.referrerRewrite;b.metrics.referer=location.href;if(g){b.metrics.referer=OOo.referrerRewrite(g)}
d.style.display='none';d.method='post';d.target=a||'OnlineOpinion';d.action=b.onPageCard?'https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp?r='+location.href:'https://secure.opinionlab.com/ccc01/comment_card_d.asp';if(b.commentCardUrl){d.action=b.commentCardUrl;if(b.onPageCard){d.action+='?r='+location.href}}
e.name='params';e.value=A(b);d.appendChild(e);c.body.appendChild(d);return d}
function B(){return{width:screen.width,height:screen.height,referer:location.href,prev:document.referrer,time1:(new Date()).getTime(),time2:null,currentURL:location.href,ocodeVersion:'5.9.9'}}
function F(b){var a='';if(b&&b.search('://')>-1){var c=b.split('/');for(var d=3;d<c.length;d++){a+="/";a+=c[d]}}
return a}
function G(b,a){b=b||{};if(typeof b==='string'){return a+'|'+b}
return b.override?b.vars:a+(b.vars?'|'+b.vars:'')}
function H(b,a){if(!a){a=location}
if(typeof b==="string")
return b;return b.searchPattern?a.href.replace(b.searchPattern,b.replacePattern):b.replacePattern}
function T(b){'use strict';var a,c=false,d=document.getElementsByTagName('meta');if(d!=='undefined'){for(a=0;a<d.length;a+=1){if(d[a].getAttribute('name')===b){c=true}}}
return c}
var I=(function(){if(navigator.appName==="Microsoft Internet Explorer"&&navigator.userAgent.search("MSIE 6")!==-1){return true}
var b=document.body,a,c;if(document.createElement&&b&&b.appendChild&&b.removeChild){a=document.createElement('iframe');c=false;a.setAttribute('name','oo_test');a.style.display='none';b.appendChild(a);c=!!!document.getElementsByName('oo_test')[0];b.removeChild(a);return c}else{return null}}());function J(b,a){var c=b||window.event,d=OOo.$('oo_waypoint_content'),e=OOo.$('oo_waypoint_company_logo'),g=OOo.$('oo_waypoint_close_prompt'),h=c.target;if(c.srcElement&&!c.target){h=c.srcElement}
if(c.preventDefault&&c.stopPropagation){c.preventDefault();c.stopPropagation()}else{c.returnValue=false}
if((h!==d&&!d.contains(h))&&(h!==e&&!e.contains(h))||(h.className==='waypoint_icon'||h.className==='waypoint_icon last')){var f=OOo.$('oo_waypoint_container'),l=f.parentNode;l.removeChild(f)}
if(a){a.focus()}}
function K(){var b=this.options;var a="<div id='oo_waypoint_prompt' role='dialogue' aria-describedby='oo_waypoint_message'><div id='oo_waypoint_company_logo'></div><div id='oo_waypoint_content'><p id='oo_waypoint_message'>Select a category</p><p id='waypoint_icons'></p><p id='ol_waypoint_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_waypoint_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialogue</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_waypoint_prompt #oo_waypoint_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->";if(typeof b.wpmarkup!=='undefined'){a=b.wpmarkup}
var c=OOo.$('oo_waypoint_prompt');if(c){var d=OOo.$('oo_waypoint_container');this.showWaypoint(d);return}
this.showWaypoint(a)}
function L(d){var e=document,g=0,h=typeof d==='string'?e.createElement('div'):d,f=e.createElement('div'),l,j,m,i,k=this.options,o=k.categories,n,p,q=e.activeElement,t;f.id='oo_waypoint_overlay';h.id='oo_waypoint_container';h.style.visibility='hidden';if(typeof d==='string'){h.innerHTML=d;e.body.appendChild(h)}
h.appendChild(f);if(k.companyLogo&&k.companySlogan){l=new Image();l.src=k.companyLogo;l.alt=k.companySlogan;OOo.$('oo_waypoint_company_logo').appendChild(l);OOo.$('oo_waypoint_prompt').setAttribute('aria-label',k.companySlogan)}
m=new Image();m.src=k.pathToAssets+'oo_opinionlab_logo.png';m.alt='powered by OpinionLab';OOo.$('ol_waypoint_brand_logo').children[0].appendChild(m);n=OOo.$('oo_waypoint_close_prompt');for(var r in o){if(o.hasOwnProperty(r)){var s=document.createElement('a'),v=k.categories[r].icon,D=k.categories[r].buttonText;s.className='waypoint_icon';s.href='#';s.innerHTML=D+'<span class="screen_reader">This will open a new window</span>';if(v&&e.addEventListener){s.style.backgroundImage='url('+k.pathToAssets+v+')'}
if(typeof k.categories[r].oCode==='string'){OOo.addEventListener(s,'click',(function(c){return function(b){var a=b||window.event;window.open(k.categories[c].oCode,'_0','scrollbars=yes,location=yes,menubar=yes,resizable=yes');OOo.hideWaypoint(a,q)}})(r),false);s.onkeydown=(function(c){return function(b){var a=b||window.event;if(a.keyCode!==13){return}
window.open(k.categories[c].oCode,'_0','scrollbars=yes,location=yes,menubar=yes,resizable=yes');OOo.hideWaypoint(a,q)}})(r)}else{OOo.addEventListener(s,'click',(function(c){return function(b){var a=b||window.event;OOo.Waypoint[c].show(a);OOo.hideWaypoint(a,q)}})(r),false);s.onkeydown=(function(c){return function(b){var a=b||window.event;if(a.keyCode!==13){return}
OOo.Waypoint[c].show(a);OOo.hideWaypoint(a,q)}})(r)}
g++;OOo.$('waypoint_icons').appendChild(s)}}
OOo.addEventListener(h,'click',function(b){var a=b||window.event;OOo.hideWaypoint(a,q)},false);i=OOo.$('waypoint_icons').children;p=i[0];p.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(a.shiftKey){n.focus();return false}}};n.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
OOo.hideWaypoint(a,q)};n.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(!a.shiftKey){p.focus();return false}}};i[g-1].className='waypoint_icon last';h.style.visibility='visible';h.style.display='block';f.className='no_loading';if(k.linkFocus===true){p.focus()}}
function M(b,a){var c=b||window.event;if(c.preventDefault&&c.stopPropagation){c.preventDefault();c.stopPropagation()}else{c.returnValue=false}
OOo.$('oo_container').style.display='none';if(a){a.focus()}}
function N(){var b="<div id='oo_invitation_prompt' role='dialog' aria-describedby='oo_invite_message'><div id='oo_invitation_company_logo'></div><div id='oo_invite_content'><p id='oo_invite_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='prompt_button'><a href='#' id='oo_launch_prompt'>Yes<span class='screen_reader'>This will open a new window</span></a></p><p class='prompt_button'><a href='#' id='oo_no_thanks'>No Thanks</a></p><p id='ol_invitation_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_invitation_prompt #oo_invite_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->";var a=this.options;if(typeof a.inviteMarkup!=='undefined'){b=a.inviteMarkup}else if(typeof a.events.prompt.promptMarkup){b=a.events.prompt.promptMarkup}
var c=OOo.$('oo_invitation_prompt');if(c){var d=OOo.$('oo_container');this.showPrompt(d);return}
this.showPrompt(b)}
function O(c,d){var e=document,g=typeof c==='string'?e.createElement('div'):c,h=e.createElement('div'),f,l,j,m,i=this.options,k,o,n,p,q=e.activeElement;h.id='oo_invitation_overlay';g.id='oo_container';g.style.visibility='hidden';if(typeof c==='string'){g.innerHTML=c;e.body.appendChild(g)}
g.appendChild(h);k=OOo.$('oo_launch_prompt');o=OOo.$('oo_no_thanks');n=OOo.$('oo_close_prompt');p=OOo.$('oo_invitation_company_logo');if(i.companyLogo&&i.companySlogan){f=new Image();f.src=i.companyLogo;f.alt=i.companySlogan;p.appendChild(f);OOo.$('oo_invitation_prompt').setAttribute('aria-label',i.companySlogan)}else if(i.events.prompt.companyLogo&&i.events.prompt.companySlogan){f=new Image();f.src=i.events.prompt.companyLogo;f.alt=i.events.prompt.companySlogan;p.appendChild(f);OOo.$('oo_invitation_prompt').setAttribute('aria-label',i.events.prompt.companySlogan)}
j=new Image();j.src=i.pathToAssets+'oo_opinionlab_logo.png';j.alt='powered by OpinionLab';OOo.$('ol_invitation_brand_logo').children[0].appendChild(j);if(i.callBacks){if(typeof i.callBacks.prompt==='function'){i.callBacks.prompt()}
if(typeof i.callBacks.yesClick==='function'){OOo.addEventListener(k,'click',function(){i.callBacks.yesClick()},false)}
if(typeof i.callBacks.noClick==='function'){OOo.addEventListener(o,'click',function(){i.callBacks.noClick()},false)}
if(typeof i.callBacks.closeClick==='function'){OOo.addEventListener(n,'click',function(){i.callBacks.closeClick()},false)}}
OOo.addEventListener(k,'click',d.bind(this),false);OOo.addEventListener(o,'click',function(b){var a=b||window.event;OOo.hidePrompt(a,q)},false);OOo.addEventListener(n,'click',function(b){var a=b||window.event;OOo.hidePrompt(a,q)},false);k.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
d.bind(this)}
.bind(this);k.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(a.shiftKey){n.focus();return false}}};o.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
OOo.hidePrompt(a,q)};n.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
OOo.hidePrompt(a,q)};n.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(!a.shiftKey){k.focus();return false}}};g.style.visibility='visible';g.style.display='block';h.className='no_loading';q.blur();k.focus()}
function P(){var b="<div id='oo_entry_prompt' role='dialog' aria-describedby='oo_entry_message'><div id='oo_entry_company_logo'></div><div id='oo_entry_content'><p id='oo_entry_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='entry_prompt_button'><a href='#' id='oo_launch_entry_prompt'>Yes<span class='screen_reader'>This will open a new window</span></a></p><p class='entry_prompt_button'><a href='#' id='oo_entry_no_thanks'>No Thanks</a></p><p id='ol_entry_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_entry_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_entry_prompt #oo_entry_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->";var a=this.options;if(typeof a.events.prompt.promptMarkup){b=a.events.prompt.promptMarkup}
var c=OOo.$('oo_entry_prompt');if(c){var d=OOo.$('oo_container');this.showEntryPrompt(d);return}
this.showEntryPrompt(b)}
function Q(c,d){var e=document,g=typeof c==='string'?e.createElement('div'):c,h=e.createElement('div'),f,l,j,m,i=this.options,k,o,n,p,q=e.activeElement;h.id='oo_entry_overlay';g.id='oo_container';g.style.visibility='hidden';if(typeof c==='string'){g.innerHTML=c;e.body.appendChild(g)}
g.appendChild(h);k=OOo.$('oo_launch_entry_prompt');o=OOo.$('oo_entry_no_thanks');n=OOo.$('oo_entry_close_prompt');p=OOo.$('oo_entry_company_logo');if(i.companyLogo&&i.companySlogan){f=new Image();f.src=i.companyLogo;f.alt=i.companySlogan;p.appendChild(f);OOo.$('oo_entry_prompt').setAttribute('aria-label',i.companySlogan)}else if(i.events.prompt.companyLogo&&i.events.prompt.companySlogan){f=new Image();f.src=i.events.prompt.companyLogo;f.alt=i.events.prompt.companySlogan;p.appendChild(f);OOo.$('oo_entry_prompt').setAttribute('aria-label',i.events.prompt.companySlogan)}
j=new Image();j.src=i.pathToAssets+'oo_opinionlab_logo.png';j.alt='powered by OpinionLab';OOo.$('ol_entry_brand_logo').children[0].appendChild(j);OOo.addEventListener(k,'click',d.bind(this),false);OOo.addEventListener(o,'click',function(b){var a=b||window.event;OOo.hidePrompt(a,q)},false);OOo.addEventListener(n,'click',function(b){var a=b||window.event;OOo.hidePrompt(a,q)},false);k.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
d.bind(this)}
.bind(this);k.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(a.shiftKey){n.focus();return false}}};o.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
OOo.hidePrompt(a,q)};n.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
OOo.hidePrompt(a,q)};n.onkeydown=function(b){var a=b||window.event;if(a.keyCode===9){if(!a.shiftKey){k.focus();return false}}};g.style.visibility='visible';g.style.display='block';h.className='no_loading';q.blur();k.focus()}
var R=function(b,a,c,d){var e="width="+c;var g="height="+d;var h=window.open(b,a,e,g);var f=window.setInterval(function(){if(h.closed!==false){window.clearInterval(f);OOo.oo_feedback.launchOOPopup()}},200)};var S=function(){return/MSIE\s/.test(navigator.userAgent)&&parseFloat(navigator.appVersion.split("MSIE")[1])<10};y(OOo,{extend:y,toQueryString:z,addEventListener:u,$:x,appendOOForm:C,removeEventListener:w,createMetrics:B,truncateMetric:F,createLegacyVars:G,DYNAMIC_FRAME_NAME_IS_BUGGY:I,getFormParams:A,referrerRewrite:H,hidePrompt:M,getPrompt:N,showPrompt:O,hideWaypoint:J,getWaypoint:K,showWaypoint:L,getEntryPrompt:P,showEntryPrompt:Q,exitChat:R,checkIfIE9orBelow:S})}());(function(){function g(b){if(!b){return null}
switch(typeof b){case'number':case'boolean':case'function':return b;case'string':return'\"'+b+'\"';case'object':var a,c,d,e;if(b.constructor===Array||typeof b.callee!=='undefined'){a='[';d=b.length;for(c=0;c<d-1;c+=1){a+=g(b[c])+','}
a+=g(b[c])+']'}else{a='{';for(e in b){if(b.hasOwnProperty(e)){a+=e+':'+g(b[e])+','}}
a=a.replace(/\,$/,'')+'}'}
return a;default:return null}}
OOo.extend(OOo,{serialize:g})}());(function(){function e(b,a,c){var d;if(b.search(a[0])!==-1){OOo.createCookie(c,0);return false}else if(OOo.readCookie(c)){d=parseInt(OOo.readCookie(c),10);if((b.search(a[d+1])!==-1)&&(d+1!==a.length-1)){OOo.createCookie(c,d+1);return false}else if(b.search(a[d])!==-1){return false}else if(d+1===a.length-1&&b.search(a.pop())!==-1){OOo.eraseCookie(c);return true}else{OOo.eraseCookie(c);return false}}else{return false}}
OOo.extend(OOo,{checkTunnel:e})}());(function(){function q(b){var a="",c;for(c=7;c>=0;c-=1){a+='0123456789abcdef'.charAt((b>>(c*4))&0x0F)}
return a}
function t(b){var a=((b.length+8)>>6)+1,c=new Array(a*16),d;for(d=0;d<a*16;d+=1){c[d]=0}
for(d=0;d<b.length;d+=1){c[d>>2]|=b.charCodeAt(d)<<(24-(d%4)*8)}
c[d>>2]|=0x80<<(24-(d%4)*8);c[a*16-1]=b.length*8;return c}
function r(b,a){var c=(b&0xFFFF)+(a&0xFFFF),d=(b>>16)+(a>>16)+(c>>16);return(d<<16)|(c&0xFFFF)}
function s(b,a){return(b<<a)|(b>>>(32-a))}
function v(b,a,c,d){if(b<20){return(a&c)|((~a)&d)}
if(b<40){return a^c^d}
if(b<60){return(a&c)|(a&d)|(c&d)}
return a^c^d}
function D(b){return(b<20)?1518500249:(b<40)?1859775393:(b<60)?-1894007588:-899497514}
function x(b){var a=t(b),c=new Array(80),d=1732584193,e=-271733879,g=-1732584194,h=271733878,f=-1009589776,l,j,m,i,k,o,n,p;for(n=0;n<a.length;n+=16){l=d;j=e;m=g;i=h;k=f;for(p=0;p<80;p+=1){if(p<16){c[p]=a[n+p]}else{c[p]=s(c[p-3]^c[p-8]^c[p-14]^c[p-16],1)}
o=r(r(s(d,5),v(p,e,g,h)),r(r(f,c[p]),D(p)));f=h;h=g;g=s(e,30);e=d;d=o}
d=r(d,l);e=r(e,j);g=r(g,m);h=r(h,i);f=r(f,k)}
return q(d)+q(e)+q(g)+q(h)+q(f)}
OOo.extend(OOo,{sha1:x})}());(function(){function f(b,a){if(!a){a=location}
var c=b.cookieName||'oo_abandon',d=OOo.readCookie(c),e=b.startPage,g=b.endPage,h=b.middle;if(!d){if(a.pathname.indexOf(e)!==-1){OOo.createCookie(c)}
return false}else if(a.pathname.indexOf(g)!==-1){OOo.eraseCookie(c);return false}else if(a.pathname.search(h)!==-1){return false}else{OOo.eraseCookie(c);return true}}
OOo.extend(OOo,{checkAbandonment:f})}());(function(){function d(b){var a,c;for(a=b.length-1;a>=0;a-=1){if(b[a].read){c=OOo.readCookie(b[a].name);if(!!c&&c===b[a].value){return true}else if(typeof b[a].value==='undefined'&&!!OOo.readCookie(b[a].name)){return true}}}
return false}
function e(b){var a;for(a=b.length-1;a>=0;a-=1){if(b[a].set){OOo.createCookie(b[a].name,b[a].value,b[a].expiration)}}}
OOo.extend(OOo,{checkThirdPartyCookies:d,setThirdPartyCookies:e})}());OOo.extend(Function.prototype,(function(){if(typeof Function.prototype.bind!=="undefined"){return}
var e=Array.prototype.slice;function g(b,a){var c=b.length,d=a.length;while(d){d-=1;b[c+d]=a[d]}
return b}
function h(b,a){b=e.call(b,0);return g(b,a)}
function f(a){if(arguments.length<2&&typeof a==="undefined"){return this}
var c=this,d=e.call(arguments,1);return function(){var b=h(d,arguments);return c.apply(a,b)}}
return{bind:f}}()));(function(){function g(b){if(!b){b=location}
var a;if(b.host.search(/\.[a-z]+/)!==-1){a=b.host.split('.').reverse();if(a.length>3){return b.host}
a='.'+a[1]+'.'+a[0]}else{a=b.host}
return a}
function h(b,a,c){var d='',e='';if(c){d=new Date();d.setTime(d.getTime()+(c*1000));e="; expires="+d.toGMTString()}
if(location.host!==g()){document.cookie=b+"="+a+e+"; path=/; domain="+g()+";"}else{document.cookie=b+"="+a+e+"; path=/;"}}
function f(b){var a=b+"=",c=document.cookie.split(';'),d,e;for(e=0;e<c.length;e+=1){d=c[e];while(d.charAt(0)===' '){d=d.substring(1,d.length)}
if(d.indexOf(a)===0){return d.substring(a.length,d.length)}}
return null}
function l(b){h(b,"",-1)}
OOo.extend(OOo,{getCookieDomain:g,createCookie:h,readCookie:f,eraseCookie:l})}());OOo.Ocode=function(b){var a=OOo.Browser,c,d;if(b.disableMobile&&a.isMobile){return}
if(b.disableNoniOS&&a.isMobileNonIOS){return}
OOo.instanceCount+=1;this.options={tealeafCookieName:'TLTSID'};OOo.extend(this.options,b);c=this.options;c.metrics=OOo.createMetrics();this.frameName=c.onPageCard?'OnlineOpinion'+OOo.instanceCount:'OnlineOpinion';if(c.cookie&&OOo.Ocode.matchUrl(c.cookie,location)){return}
if(c.thirdPartyCookies&&OOo.checkThirdPartyCookies(c.thirdPartyCookies)){return}
if(c.abandonment&&!OOo.checkAbandonment(c.abandonment)){return}
if(c.tunnel&&!OOo.checkTunnel(location.pathname,c.tunnel.path,c.tunnel.cookieName)){return}
if(c.events&&c.events.onSingleClick){this.singProbability=Math.random()<1-c.events.onSingleClick/100}
c.tealeafId=OOo.readCookie(c.tealeafCookieName)||OOo.readCookie(c.sessionCookieName);if(c.events){this.setupEvents();if(c.events.disableLinks||c.events.disableFormElements){this.setupDisableElements()}}
if(c.floating){this.floating()}else if(c.bar){this.bar()}else if(c.tab){this.tab()}};OOo.Ocode.prototype={show:function(e,g){var h=e||window.event;if(g!=='exit'&&g!=='entry'&&g!=='onSingleClick'){if(h.preventDefault&&h.stopPropagation){h.preventDefault();h.stopPropagation()}else{h.returnValue=false}}
if(this.onPageCardVisible){return}
var f=this.options,l;if(f.events&&f.events.prompt){if(f.cookie)
OOo.eraseCookie(f.cookie.name||'oo_r');OOo.hidePrompt(h)}
if(this.interruptShow){return}
if(!this.floatingLogo&&f.cookie&&OOo.Ocode.matchUrl(f.cookie)){return}
if(!f.floating&&f.events&&this.singProbability){return}
if(f.events&&f.events.onSingleClick){this.singProbability=true}
if(f.cookie){OOo.Ocode.tagUrl(f.cookie)}
if(f.thirdPartyCookies){if(OOo.checkThirdPartyCookies(f.thirdPartyCookies)){return}
OOo.setThirdPartyCookies(f.thirdPartyCookies)}
if(this.floatingLogo){this.floatingLogo.children[0].blur()}
if(this.floatingLogo&&f.disappearOnClick){this.floatingLogo.style.display='none'}
if(typeof window.ClickTale==='function'){if(!f.clickTalePID){f.clickTalePID=window.ClickTaleGetPID()||null}
f.clickTaleUID=window.ClickTaleGetUID()||null;f.clickTaleSID=window.ClickTaleGetSID()||null;var j=function(b){if(b.origin==='https://secure.opinionlab.com'){if(typeof window.ClickTaleEvent==='function'&&b.data!==''){var a=JSON.parse(b.data),c=window.ClickTaleEvent;for(var d in a){c(d+':'+a[d])}}}};OOo.addEventListener(window,'message',j,false)}
if(f.onPageCard&&!OOo.Browser.isMobile){this.setupOnPageCC()}else{this.launchOOPopup()}
l=f.floating||f.tab||f.bar;if(l&&typeof l.onClickCallback==='function'){l.onClickCallback()}}};OOo.extend(OOo.Ocode,{tagUrl:function(b,a){if(!a){a=location}
var c=b.name||'oo_r',d=b.type==='page'?a.href:a.hostname,e=OOo.readCookie(c)||'';if(OOo.Ocode.matchUrl(b,a)){return}
OOo.createCookie(c,e+OOo.sha1(d),b.expiration)},matchUrl:function(b,a){if(!a){a=location}
var c=OOo.readCookie(b.name||'oo_r'),d;if(!c){return false}
d=b.type==='page'?a.href:a.hostname;return c.search(OOo.sha1(d))!==-1}});(function(){var l=0;function j(){var b=this.options,a=b.newWindowSize||[545,325],c=[parseInt((b.metrics.height-a[1])/2,10),parseInt((b.metrics.width-a[0])/2,10)],d,e,g='resizable=yes,location=no,status=no,scrollbars=1,width='+a[0]+',height='+a[1]+',top='+c[0]+',left='+c[1],h='OnlineOpinion';if(b.newWindow){h=h+(l++)}
b.metrics.time2=(new Date()).getTime();b.metrics.type='Popup';d=OOo.appendOOForm(b,h);var f='https://secure.opinionlab.com/ccc01/comment_card_d.asp?'+d.children[0].value;if(b.commentCardUrl){f=b.commentCardUrl+'?'+d.children[0].value}
if(OOo.Browser.isChromeIOS){h='_0'}
if(OOo.Browser.isMobile&&OOo.Browser.ua.search('Android')!==-1){d.submit()}else{e=window.open(f,h,g);if(e&&!OOo.Browser.isChromeIOS){d.submit()}}}
OOo.extend(OOo.Ocode.prototype,{launchOOPopup:j})}());(function(){function i(){var c=this.options.events,d=[false,false],e=['onExit','onEntry'],g='beforeunload',h,f,l,j,m;if(OOo.Browser.Opera){g='unload'}
if(OOo.Browser.iOs){g='pagehide'}
if(c.prompt){OOo.extend(this.options,{promptMarkup:c.prompt.promptMarkup,neverShowAgainButton:false,pathToAssets:c.prompt.pathToAssets})}
for(l=e.length-1;l>=0;l-=1){h=e[l];if(c[h]instanceof Array){j=c[h];m=j.length;while(m&&!d[l]){m-=1;if(window.location.href.search(j[m].url)!==-1&&Math.random()>=1-j[m].p/100){d[l]=true}}}else if(c[h]&&Math.random()>=1-c[h]/100){d[l]=true}}
if(d[0]){OOo.addEventListener(window,g,function(b){var a=b||window.event;this.show(a,'exit')}
.bind(this),false)}
if(d[1]){if(c.delayEntry){window.setTimeout(function(b){var a=b||window.event;if(c.prompt){this.getEntryPrompt()}else{this.show(a,'entry')}}
.bind(this),c.delayEntry*1000)}else{if(c.prompt){this.getEntryPrompt()}else{(function(b){var a=b||window.event;this.show(a,'entry')}).bind(this)()}}}}
function k(b){var a=b||window.event,c=b.target||b.srcElement,d=this.options.events,e=c.parentNode,g=5,h=0;while(e&&(c.nodeName!=='A'||c.nodeName!=='INPUT')&&h!==g){if(e.nodeName==='A'){c=e}
e=e.parentNode;h+=1}
if(d.disableFormElements&&(c.tagName==="INPUT"||c.tagName==="BUTTON")&&(c.type==='submit'||c.type==='image'||c.type==='reset'||c.type==='button')){this.interruptShow=true}
if(d.disableLinks&&(c.nodeName==='A'||c.nodeName==='AREA')&&c.href.substr(0,4)==='http'&&c.href.search(d.disableLinks)!==-1){this.interruptShow=true}}
function o(b){this.interruptShow=true}
function n(){OOo.addEventListener(document.body,'mousedown',k.bind(this));if(!this.options.events.disableFormElements){return}
var b=document.getElementsByTagName('form'),a;for(a=b.length-1;a>=0;a-=1){OOo.addEventListener(b[a],'submit',o.bind(this))}}
OOo.extend(OOo.Ocode.prototype,{setupEvents:i,setupDisableElements:n,getEntryPrompt:function(){OOo.getEntryPrompt.call(this)},showEntryPrompt:function(b){if(this.options.cookie){OOo.Ocode.tagUrl(this.options.cookie)}
OOo.showEntryPrompt.call(this,b,this.show)}})}());OOo.extend(OOo.Ocode.prototype,{floating:function(){var d=document,e=this.floatingLogo=document.createElement('div'),g=d.createElement('div'),h=d.createElement('div'),f=d.createElement('div'),l=d.createElement('span'),j=this.options.floating,m=OOo.$(j.contentId),i='10px',k=j.id,o=d.createElement('span'),n,p,q,t,r,s,v,D,x=this.options.mobileTouches||2,y=0;function u(b){return b.offsetLeft+b.offsetWidth}
function w(b){t.style.left=u(m)+'px'}
o.innerHTML="Screen reader users: Please switch to forms mode for this link.";o.className="screen_reader";if(k){e.id=k}
e.className='oo_feedback_float';h.className='oo_transparent';g.className='olUp';f.className='olOver';g.tabIndex=0;g.onkeyup=function(b){n=b||window.event;if(n.keyCode!==13){return}
this.show(n)}
.bind(this);g.innerHTML=j.caption||'Feedback';e.appendChild(o);e.appendChild(g);l.innerHTML=j.hoverCaption||'Click here to<br>rate this page';f.appendChild(l);e.appendChild(f);e.appendChild(h);function z(b){var a=d.documentElement.scrollTop||d.body.scrollTop,c=d.documentElement.clientHeight||document.body.clientHeight;e.style.top=(a+c-(v||0)-10)+'px'}
if(j.position&&j.position.search(/Content/)&&m){t=this.spacer=d.createElement('div');r=OOo.Browser.WebKit?d.body:d.documentElement;t.id='oo_feedback_fl_spacer';t.style.left=u(m)+'px';d.body.appendChild(t);switch(j.position){case'rightOfContent':s=function(b){e.style.left=(u(m)-r.scrollLeft)+'px'};break;case'fixedPreserveContent':s=function(b){var a=OOo.Browser.IE?d.body.clientWidth:window.innerWidth,c=r.scrollLeft;if(a<=u(m)+e.offsetWidth+parseInt(i,10)){e.style.left=(u(m)-c)+'px'}else{e.style.left='';e.style.right=i}};break;case'fixedContentMax':s=function(b){var a=OOo.Browser.IE?d.body.clientWidth:window.innerWidth;if(a<=u(m)+e.offsetWidth+parseInt(i,10)){e.style.left='';e.style.right=i}else{e.style.left=(u(m)-r.scrollLeft)+'px';e.style.right=''}};break}
window.setTimeout(s,0);OOo.addEventListener(window,'scroll',s,false);OOo.addEventListener(window,'resize',s,false);OOo.addEventListener(window,'resize',w,false)}else{e.style.right=i}
if(!this.options.disableShow===true){e.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
this.show(a)}
.bind(this);if(OOo.Browser.isMobile){if('ontouchstart'in window){e.ontouchstart=function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}
y++}
.bind(this);e.ontouchend=function(b){var a=b||window.event;if(y>=x){this.show(a);y=0}}
.bind(this)}else{e.onclick=function(b){var a=b||window.event;this.show(a)}
.bind(this)}}else{e.onclick=function(b){var a=b||window.event;this.show(a)}
.bind(this)}}else{OOo.appendWaypointMobile(e,x)}
d.body.appendChild(e)},removeFloatingLogo:function(){document.body.removeChild(this.floatingLogo);if(this.spacer){document.body.removeChild(this.spacer)}}});OOo.extend(OOo.Ocode.prototype,{bar:function(){var d=document,e=this.floatingLogo=d.createElement('a'),g,h,f,l=d.documentElement.scrollTop||d.body.scrollTop,j=d.createElement('span'),m=this.options,i=this.options.mobileTouches||2,k=0,o=d.createElement('span');function n(b){var a=0,c=0;if(b.offsetParent){do{a+=b.offsetLeft;c+=b.offsetTop}while(b==b.offsetParent);return[a,c]}}
function p(b){var a=document.activeElement,c;if(!a)
return;c=n(a);if(!c)
return;if(c[1]+a.clientHeight>(window.innerHeight||document.body.clientHeight)+(window.pageYOffset||document.body.scrollTop)-e.clientHeight){if(navigator.appVersion.indexOf("MSIE 7.")!==-1){window.scrollBy(0,0)}else{window.scrollBy(0,a.clientHeight+20)}}}
j.innerHTML='Launches comment card in new window';j.className='screen_reader';o.className='icon';this.reflowBar=OOo.K;e.id='oo_bar';e.href='#';e.innerHTML=m.bar.caption||'Feedback';e.appendChild(j);e.appendChild(o);if(typeof m.tabIndex==='number'){e.tabIndex=m.tabIndex}else{e.tabIndex=0}
if(!this.options.disableShow===true){e.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
this.show(a)}
.bind(this);if(OOo.Browser.isMobile){if('ontouchstart'in window){e.ontouchstart=function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}
k++}
.bind(this);e.ontouchend=function(b){var a=b||window.event;if(k>=i){this.show(a);k=0}}
.bind(this)}else{e.onclick=function(b){var a=b||window.event;this.show(a)}
.bind(this)}}else{e.onclick=function(b){var a=b||window.event;this.show(a)}
.bind(this)}}else{OOo.appendWaypointMobile(e,i)}
document.body.className+=document.body.className<1?'oo_bar':' oo_bar';document.body.appendChild(e);OOo.addEventListener(document.body,'keyup',p,false)}});OOo.extend(OOo.Ocode.prototype,{tab:function(){var c=document,d=this.floatingLogo=c.createElement('div'),e=c.createElement('span'),g=c.createElement('div'),h=c.createElement('span'),f=this.options.tab,l=c.createElement('a'),j='Feedback',m=f.tabType,i='right',k=this.options.mobileTouches||2,o=0,n=0,p=OOo.readCookie('oo_tab_extend'),q=2592000;switch(m){case 1:var t=c.createElement('span');d=this.floatingLogo=c.createElement('a');e=c.createElement('span');d.href='#';d.id='oo_tab_'+m;if(f.position){i=f.position}
if(f.extendEveryPage){n=f.extendEveryPage}
if(f.extendExpiration){q=f.extendExpiration}
d.className=tabClass='oo_tab_'+i+'_'+m;e.className='screen_reader';t.className='icon';if(typeof f.tabIndex==='number'){d.tabIndex=f.tabIndex}else{d.tabIndex=0}
if(f.verbiage){j=f.verbiage}
d.innerHTML=j;e.innerHTML='Launches comment card in new window';d.appendChild(e);d.appendChild(t);if(n==1){setTimeout(function(){d.className+=' small'},2500)}else{if(p==='prevent'){d.className+=' small'}else{OOo.createCookie('oo_tab_extend','prevent',q);setTimeout(function(){d.className+=' small'},2500)}}
break;default:d=this.floatingLogo=c.createElement('a');d.id='oo_tab';d.className='oo_tab_'+(f.position||i);d.href='#';if(!document.addEventListener||OOo.checkIfIE9orBelow()){d.className+=' oo_legacy'}
if(f.wcagBasePath){d.className+=' wcag'}
var r=document.createElement('img');if(f.iconPath){r.setAttribute('src',f.iconPath+'oo_tab_icon_retina.gif')}else{r.setAttribute('src','/onlineopinionV5/oo_tab_icon_retina.gif')}
r.setAttribute('alt','');if(f.verbiage){j=f.verbiage}
var s=document.createTextNode(j);d.appendChild(r);d.appendChild(s);if(e){e.className='screen_reader';e.innerHTML=' Will open a new window';d.appendChild(e)}}
if(!this.options.disableShow===true){d.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
this.show(a)}
.bind(this);if(OOo.Browser.isMobile){if('ontouchstart'in window){d.ontouchstart=function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}
o++}
.bind(this);d.ontouchend=function(b){var a=b||window.event;if(o>=k){this.show(a);o=0}}
.bind(this)}else{d.onclick=function(b){var a=b||window.event;this.show(a)}
.bind(this)}}else{d.onclick=function(b){var a=b||window.event;this.show(a)}
.bind(this)}}else{OOo.appendWaypointMobile(d,k)}
c.body.appendChild(d)}});OOo.extend(OOo.Ocode.prototype,{setupOnPageCC:function(){var e=document,g=OOo.Cache.overlay||e.createElement('div'),h=this.wrapper=e.createElement('div'),f=e.createElement('a'),l=e.createElement('div'),j=e.createElement('span'),m=this.frameName,i=e.createElement(OOo.DYNAMIC_FRAME_NAME_IS_BUGGY?'<iframe name="'+m+'">':'iframe'),k=e.createDocumentFragment(),o=this.options,n=o.onPageCard,p='https://secure.opinionlab.com/ccc01/comment_card_json_4_0_b.asp',q,t,r,s=false,v=this,D,x,y,u,w,z,A,C=e.createElement('span');function B(b){if(b&&b.preventDefault){b.preventDefault()}
document.body.focus();i.tabIndex=-1;i.title="empty";i['aria-hidden']='true';g.style.display='none';g.className='';e.body.removeChild(h);if(window.postMessage){OOo.removeEventListener(window,'message',w)}else{window.clearInterval(t)}
s=false;v.onPageCardVisible=false;return false}
w=OOo.Ocode.postMessageHandler(function(b){var a=parseInt(b,10),c,d;if(a>0){if(s){return}
s=true;c=window.innerHeight||e.documentElement.clientHeight||e.body.clientHeight;d=a;A=h.offsetTop;if(d+A>c){d=c-40-A}
i.style.width='555px';l.style.width='555px';i.style.height=d+'px';h.style.visibility='visible';if(j.clientHeight<20){j.style.height=h.offsetHeight+'px'}
g.className="no_loading";v.onPageCardVisible=true;q&&e.body.removeChild(q)}else if(b==='submitted'){B()}
if(OOo.Browser.IE&&e.compatMode==="BackCompat"){window.scrollTo(0,0)}},v.options.commentCardUrl);o.metrics.type='OnPage';OOo.Cache.overlay=g;g.id='oo_overlay';g.style.display='block';g.className='';l.className='iwrapper';h.className='oo_cc_wrapper';h.setAttribute('role','alert');h.setAttribute('aria-describedby','comment_card_description');C.className='screen_reader';C.id='comment_card_description';C.innerHTML='Please leave your feedback in the comment card you just activated';h.appendChild(C);f.className='oo_cc_close';f.innerHTML='<span class="screen_reader">Close dialog</span><span aria-hidden="true">&#10006;</span>';f.title=o.closeTitle?o.closeTitle:'Close dialog';if(!e.addEventListener){l.style.outline='1px solid #cdcdcd'}
h.style.visibility='hidden';f.tabIndex=0;f.onkeyup=function(b){var a=b||window.event;if(a.keyCode!==13){return}
B()};if(OOo.Browser.IE){i.frameBorder='0';if(!window.XMLHttpRequest||e.compatMode==="BackCompat"){z=Math.max(e.documentElement.clientWidth,e.body.offsetWidth);g.style.position='absolute';g.style.width=e.compatMode==="BackCompat"?(z-21)+'px':z+'px';g.style.height=Math.max(e.documentElement.clientHeight,e.body.offsetHeight)+'px';h.style.position='absolute';OOo.addEventListener(window,'scroll',function(){g.style.top=(e.body.scrollTop+document.body.clientHeight-g.clientHeight)+'px';h.style.top=(e.body.scrollTop+A+25)+'px'})}}
OOo.addEventListener(f,'click',B);if(n.closeWithOverlay&&!OOo.Browser.isMobile){h.appendChild(j);j.onclick=B;g.onclick=B}
i.src=' ';i.name=m;i.title='Comment Card';l.appendChild(f);l.appendChild(i);h.appendChild(l);k.appendChild(h);k.appendChild(g);e.body.appendChild(k);if(window.postMessage){OOo.addEventListener(window,"message",w)}else{t=setInterval(w,500)}
o.metrics.time2=(new Date()).getTime();q=OOo.appendOOForm(o,m);q.submit()}});OOo.extend(OOo.Ocode,{postMessageHandler:function(d,e,g){return function(b){var a='https://secure.opinionlab.com',c;if(!g){g=location}
if((b&&!(b.origin===a||b.origin.indexOf(e)!==0))||(!b&&g.hash.search('OL=')===-1)){return false}
c=b?b.data:g.hash.split('=').pop();if(!b&&location.hash){location.hash=''}
d(c);return c}}});OOo.Invitation=function(b){this.options={tunnelCookie:'oo_inv_tunnel',repromptTime:604800,responseRate:50,repromptCookie:'oo_inv_reprompt',promptMarkup:'oo_inv_prompt.html',promptStyles:'oo_inverstitial_style.css',percentageCookie:'oo_inv_percent',pagesHitCookie:'oo_inv_hit',popupType:'popunder',promptDelay:0,neverShowAgainButton:false,loadPopupInBackground:false,truncatePrevCurrentMetrics:false,disablePrevCurrentMetrics:false,tealeafCookieName:'TLTSID',monitorWindow:'oo_inv_monitor.html',companySlogan:'We value your opinion',beforePrompt:OOo.K,callBacks:{prompt:'',yesClick:'',noClick:'',closeClick:''},inviteMarkup:"<div id='oo_invitation_prompt' role='dialog' aria-describedby='oo_invite_message'><div id='oo_invitation_company_logo'></div><div id='oo_invite_content'><p id='oo_invite_message'>After your visit, would you be willing to provide some quick feedback?<br /><br />(It will only take a minute)</p><p class='prompt_button'><a href='#' id='oo_launch_prompt'>Yes<span class='screen_reader'>This will open a new window</span></a></p><p class='prompt_button'><a href='#' id='oo_no_thanks'>No Thanks</a></p><p id='ol_invitation_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialog</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_invitation_prompt #oo_invite_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->",skipInvitePrompt:false};this.popupShown=false;OOo.extend(this.options,b);var a=this.options,c=parseInt(OOo.readCookie(a.pagesHitCookie),10)||0;OOo.Invitation.friendlyDomains=a.friendlyDomains||null;var d={weight:Number(OOo.readCookie('oo_OODynamicRewrite_weight')),searchPattern:OOo.readCookie('oo_OODynamicRewrite_searchPattern'),replacePattern:OOo.readCookie('oo_OODynamicRewrite_replacePattern')};OOo.eraseCookie('oo_OODynamicRewrite_weight');OOo.eraseCookie('oo_OODynamicRewrite_searchPattern');OOo.eraseCookie('oo_OODynamicRewrite_replacePattern');if(!window.OOoDynamicRewrite||window.OOoDynamicRewrite.weight<d.weight){window.OOoDynamicRewrite=d}
if(window.OOoDynamicRewrite&&('number'===typeof window.OOoDynamicRewrite.weight)&&!isNaN(window.OOoDynamicRewrite.weight)){OOo.createCookie('oo_OODynamicRewrite_weight',window.OOoDynamicRewrite.weight);if(window.OOoDynamicRewrite.searchPattern){OOo.createCookie('oo_OODynamicRewrite_searchPattern',window.OOoDynamicRewrite.searchPattern)}
if(window.OOoDynamicRewrite.replacePattern){OOo.createCookie('oo_OODynamicRewrite_replacePattern',window.OOoDynamicRewrite.replacePattern)}}
if(location.search.search('evs')!==-1||OOo.readCookie('oo_evs_friendly')==='yes'){OOo.eraseCookie('oo_evs_friendly');a.loadPopupInBackground=true;this.launchPopup();OOo.createCookie(a.repromptCookie,1,a.repromptTime===-1?0:a.repromptTime)}
setTimeout(function(){if(!window.oo_inv_monitor){return}
if(a.area&&location.href.search(a.area)===-1){this.options.popupType='popup';this.launchPopup()}else if(a.goal&&location.href.search(a.goal)!==-1){window.oo_inv_monitor.close()}}
.bind(this),1600);if(OOo.readCookie(a.repromptCookie)){return}
if(a.thirdPartyCookies&&OOo.checkThirdPartyCookies(a.thirdPartyCookies)){return}
if(!OOo.readCookie(a.percentageCookie)){OOo.createCookie(a.percentageCookie,(Math.random()>1-(a.responseRate/100))?"1":"0")}
if(typeof a.promptTrigger!=='undefined'){if(a.promptTrigger instanceof RegExp){if(!window.location.href.match(a.promptTrigger)){return}}else if(a.promptTrigger instanceof Array){if(!OOo.checkTunnel(location.pathname,a.promptTrigger,a.tunnelCookie)){return}}}
c+=1;OOo.createCookie(a.pagesHitCookie,c);if(a.pagesHit&&c<a.pagesHit){return}
OOo.eraseCookie(a.tunnelCookie);if(OOo.readCookie(a.percentageCookie)==='1'){window.setTimeout(function(){OOo.createCookie(a.repromptCookie,1,a.repromptTime);this.options.beforePrompt();this.getPrompt()}
.bind(this),a.promptDelay*1000)}};OOo.Invitation.notifyFriendlyLocationChange=function(b){if(window.oo_inv_monitor){OOo.createCookie('oo_evs_friendly','yes')}};OOo.Invitation.prototype={getPrompt:function(){OOo.getPrompt.call(this)},showPrompt:function(b){if(!this.options.skipInvitePrompt){OOo.showPrompt.call(this,b,this.launchPopup)}else{this.launchPopup()}},launchPopup:function(b){if(this.popupShown){return}
this.popupShown=true;var a=b||window.event;if(typeof a!=='undefined'){if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}}
var c=this.options,d=window.location.href,e=c.popupType==='popup'?'https://secure.opinionlab.com/ccc01/comment_card.asp?':c.pathToAssets+c.monitorWindow+'?time1='+(new Date()).getTime()+'&',g,h=[],f=c.asm?[555,500]:(OOo.Browser.Chrome?[400,400]:[400,350]),l,j=OOo.createMetrics(),m=OOo.readCookie(c.tealeafCookieName),i;if(c.clickTalePID&&window.ClickTaleGetUID&&window.ClickTaleGetSID||window.ClickTaleGetPID&&window.ClickTaleGetUID&&window.ClickTaleGetSID){m+='|'+[c.clickTalePID||window.ClickTaleGetPID(),window.ClickTaleGetUID(),window.ClickTaleGetSID()].join('/')}
f=c.newWindowSize||f;i='scrollbars=1,resizable=1,location=no,status=no,width='+f[0]+',height='+f[1];if(c.referrerRewrite){j.referer=OOo.referrerRewrite(c.referrerRewrite)}
if(c.truncatePrevCurrentMetrics){j.prev=OOo.truncateMetric(j.prev);j.currentURL=OOo.truncateMetric(j.currentURL)}
if(c.disablePrevCurrentMetrics){j.prev='';j.currentURL=''}
if(c.thirdPartyCookies){OOo.setThirdPartyCookies(c.thirdPartyCookies)}
g=OOo.toQueryString(j)+'&type=Invitation';if(c.customVariables){g+='&customVars='+encodeURIComponent(OOo.serialize(c.customVariables))}
g+='&custom_var='+OOo.createLegacyVars(c.legacyVariables,m);if(c.asm){g+='&asm=2';i+=',scrollbars=1'}
e+=g;if(e.match(/\?/g).length===2)
e=e.replace(/\?([^?]*)$/,'&$1');this.popup=l=window.open(e,'OnlineOpinionInvitation',i);if(!c.loadPopupInBackground&&OOo.$('oo_container')){OOo.hidePrompt(a)}},killPrompt:function(b){var a=b||window.event;if(this.options.callBacks&&typeof this.options.callBacks.noClick==='function'){this.options.callBacks.noClick()}
OOo.createCookie(this.options.repromptCookie,1,157680000);OOo.hidePrompt(a)}};OOo.extend(OOo.Invitation,{navigateToFriendlyDomain:function(b){location.href=b}});OOo.Waypoint=function(b){var a=OOo.Browser;if(b.disableMobile&&a.isMobile){return}
if(b.disableNoniOS&&a.isMobileNonIOS){return}
this.options={pathToAssets:'/onlineopinionV5/',waypointMarkup:'oo_waypoint.html',companySlogan:'Give us feedback',companyLogo:'waypoint_logo.png',linkFocus:true,categories:{website:{tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Website'},store:{referrerRewrite:{searchPattern:/:\/\//,replacePattern:'://store.'},tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Store'},product:{referrerRewrite:{searchPattern:/:\/\//,replacePattern:'://product.'},tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Product'},other:{referrerRewrite:{searchPattern:/:\/\//,replacePattern:'://other.'},tealeafCookieName:'TLTSID',waypointIcon:'waypoint_icon.png',buttonText:'Other'}},wpmarkup:"<div id='oo_waypoint_prompt' role='dialogue' aria-describedby='oo_waypoint_message'><div id='oo_waypoint_company_logo'></div><div id='oo_waypoint_content'><p id='oo_waypoint_message'>Select a category</p><p id='waypoint_icons'></p><p id='ol_waypoint_brand_logo'><span aria-label='Powered by OpinionLab.'></span></p></div><a id='oo_waypoint_close_prompt' href='#' aria-label='Close dialog'><div class='screen_reader'>Close dialogue</div><span aria-hidden='true'>&#10006;</span></a></div><!--[if IE 8]><style>/* IE 8 does not support box-shadow */#oo_waypoint_prompt #oo_waypoint_content { width: 400px; padding: 40px 49px 20px 49px; border: 1px solid #ccc; }</style><![endif]-->"};OOo.extend(this.options,b);var c=this.options,d=c.categories;for(var e in d){if(d.hasOwnProperty(e)){if(typeof c.categories[e].oCode==='object'){var g={};g[e]=new OOo.Ocode(d[e].oCode);OOo.extend(OOo.Waypoint,g)}}}
OOo.extend(OOo.Waypoint,{getWaypoint:function(){this.getWaypoint()}
.bind(this)})};OOo.Waypoint.prototype={getWaypoint:function(){OOo.getWaypoint.call(this)},showWaypoint:function(b){OOo.showWaypoint.call(this,b)},killWaypoint:function(b){var a=b||window.event;OOo.hideWaypoint(a)}};OOo.extend(OOo,{appendWaypoint:function(c){var d=OOo.$(c);if(!!d){if(!OOo.Browser.isMobile){OOo.addEventListener(d,'click',function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}
OOo.Waypoint.getWaypoint()},false);OOo.addEventListener(d,'keydown',function(b){var a=b||window.event;if(a.keyCode!==13){return}
if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}
OOo.Waypoint.getWaypoint()},false)}}}});OOo.extend(OOo,{appendWaypointMobile:function(c,d){var e=0;var g=d||2;if(typeof c==='string'){var c=OOo.$(c)}
if(!!c){if(OOo.Browser.isMobile){if('ontouchstart'in window){OOo.addEventListener(c,'touchstart',function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}
e++},false);OOo.addEventListener(c,'touchend',function(b){var a=b||window.event;if(e>=g){OOo.Waypoint.getWaypoint();e=0}},false)}else{OOo.addEventListener(c,'click',function(b){var a=b||window.event;if(a.preventDefault&&a.stopPropagation){a.preventDefault();a.stopPropagation()}else{a.returnValue=false}
OOo.Waypoint.getWaypoint()},false)}}}}});return OOo}));(function(w,o){'use strict';var currentLang=typeof digitalData!=='undefined'?typeof digitalData.page!=='undefined'?typeof digitalData.page.pageInfo!=='undefined'?typeof digitalData.page.pageInfo[0]!=='undefined'?typeof digitalData.page.pageInfo[0].language!=='undefined'?digitalData.page.pageInfo[0].language:'':'':'':'':'';var rp='';if(currentLang=='es'){var rp=w.location.href.replace('/:\/\/[^\/]*/','://'+w.location.host)+'/locale=es'}else{rp=w.location.href;}
var OpinionLabInit=function(){o.oo_feedback=new o.Ocode({customVariables:{coremetrics:typeof window.digitalData!="undefined"?(typeof window.digitalData.user!="undefined"?(typeof window.digitalData.user.sharedIDs!="undefined"?(typeof window.digitalData.user.sharedIDs.coremetrics!="undefined"?window.digitalData.user.sharedIDs.coremetrics:''):''):''):'',sid:bactm._readCookie('SID')},referrerRewrite:rp});o.oo_launch=function(e,feedback){var evt=e||window.event||new Event("click");o[feedback].show(evt);};};OpinionLabInit();})(window,OOo);}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("105","bofa.main");}catch(error){utag.DB(error);}
