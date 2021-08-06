(function (w,d){
if(void 0===w.ABN){
function a(n,p){
if(this instanceof a&&!a.zones[n]){
if(!(b=d.getElementById(n))||!p.id)return null
var z=this
z.name=n
z.id=p.id
a.merge(z,{div:b,param:p,state:0})
a.zones[n]=z
if(p.domain)z.domain="https://z.cdn."+p.domain+"/" 
p.noload||z.load()
}
return a.zones[n]
}
a.prototype={
load: function(){
var z=this,dc="CSS1Compat"==d.compatMode?d.documentElement:d.body
z.s&&z.write("")
a.run((z.domain?z.domain:a.domain)+"load?z="+z.param.id+"&div="+z.name+"&cw="+dc.clientWidth+"&ch="+dc.clientHeight+a.q,function(){z.s=2})
z.s=1
},
write:function(e){if(this.div)this.div.innerHTML=e},
append:function(e){this.div.appendChild(e)}
}
a.merge=function(){var r,n,e=arguments[0]||{};for(i=1;i<arguments.length;i++)if(null!=(r=arguments[i]))for(n in r)r.hasOwnProperty(n)&&void 0!==r[n]&&(e[n]=r[n]);return e};
var z=["SCRIPT","onreadystatechange","WEBGL","undefined"]
a.run=function(e,f){
var st=z[0],s=d.createElement(st),t=d.getElementsByTagName(st)[0]
s.async=true
s.src=e
if(f)s.onload=s[z[1]]=function(evt){st=s.readyState;if(!st||st=="loaded"||st=="complete"){s.onload=s[z[1]]=null;f(s);}}
t.parentNode.insertBefore(s,t)
}
function f(e,n){n=n||200;return(pos=e.indexOf("://"))>=0&&(e=e.substr(pos+3)),e.length>n&&(e=e.substr(0,n)),encodeURIComponent(e)}
a.q=""
a.zones={}
a.protocol=w.location.protocol=="https:"?"https:":"http:"
a.h=w.ABNSh||"trafficdok.com"
a.domain="https://z.cdn."+a.h+"/"
w.ABNSl=w.ABNSl||[]
w.ABNSl.push=function(e){new a(e[0],e[1])}
w.ABN=a
var vc="0",t=new Date,ws=w.screen,mr=Math.round,hc=1,wn=w.navigator;
try{hc=wn.hardwareConcurrency}catch(p){hc=0}
try{var ca=d.createElement("canvas"),gl=ca.getContext("experimental-"+z[2].toLowerCase());
vc=gl.getParameter(gl.getExtension(z[2]+"_debug_renderer_info")["UNMASKED_RENDERER_"+z[2]])}catch(p){}
var p={
sr:ws.width+"x"+ws.height,
df:d.hasFocus&&d.hasFocus()+0,
tz:-t.getTimezoneOffset(),
bh:w.history.length,
tl:(pr=w.performance)&&void 0!==pr.now&&mr(pr.now()),
pl:wn.plugins&&wn.plugins.length,
mi:wn.mimeTypes&&wn.mimeTypes.length,
me:wn.deviceMemory,
hc:hc,
n:Date.now(),
url:f(w.location.href),vc:f(vc),ref:f(d.referrer),ti:f(d.title,100)};
for(k in p)if((v=p[k])&&v!=z[3]){a.q+="&"+k+"="+v}
for(i=0,v=0;i<a.q.length;i++){v=(((v<<5)-v)+a.q.charCodeAt(i))|0}
a.q+="&zyx="+(v>>>0)
while(w.ABNSl.length){e=w.ABNSl.pop();new a(e[0],e[1])}
}})(window,document)
