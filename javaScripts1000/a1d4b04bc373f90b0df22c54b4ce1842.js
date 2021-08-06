
/******************
LIQWID Version 4.8
Copyright(C) 2010-2021, LeftsnRights Inc. All rights reserved.
******************/
var googletag=googletag||{};googletag.cmd=googletag.cmd||[];
class liqwidBoard extends HTMLElement {connectedCallback() {let video=this.getAttribute('video')||null,id=this.getAttribute('id')||null;}}
class liqwidAd extends HTMLElement {connectedCallback(){let video=this.getAttribute('video')||null,id=this.getAttribute('id')||null;}}
customElements.define("liqwid-board", liqwidBoard);customElements.define("liqwid-ad", liqwidAd);	
if(typeof top.Liqwid!=='undefined')top.Liqwid.obj++;var Liqwid=Liqwid||{host:'//liqwid.net',url:window.location.href,pList:[],R:false,E:false,eT:{t1:0,t2:0,t3:0,t4:0,r:0,b:0,s:0,sP:0,bP:0,l:false},ui:false,wheel:false,obj:0,demo:false,keywords:'',mz:false,stp:0,lg:[],theme:{a:'#9cbd28',b:'#2f3d4a',c:'#fff',d:'#222',e:'#666',l:'%2391a6bb',lat:{s:'',t:'',c:''}},dbg:false,wrn:true,cmp:{u:'https://ccpa-wrapper.privacymanager.io/ccpa/da0c1f56-cebf-4177-9c96-53e1c9e30d94/ccpa-liveramp.js',t:'#menu-information',e:'li',m:1,c:'menu-item menu-item-type-post_type menu-item-object-page td-menu-item td-normal-menu',s:'',a:'<a onclick="__ccpa(\'showConsentManager\')" href="javascript:void(0);">Do Not Sell My Personal Information</a>'},log:class {
constructor(title) {this.title = {body: title || "LIQWID", color:"#fff",size:"0.8rem",backgroundColor:"#407457",weight:"normal"};this.body={color: "#407457",size:"0.8rem",weight:"normal"};}setTitleStyle({color,size,backgroundColor}) {if(color!==undefined)this.title.color=color;if(size!==undefined)this.title.size=size;if(backgroundColor!== undefined)this.title.backgroundColor=backgroundColor;}
setBodyStyle({color,size,weight}){if (color!==undefined)this.body.color=color;if(size!== undefined)this.body.size=size;if(weight!==undefined)this.body.weight=weight;}
log(body = "") {
console.log(`%c${this.title.body}%c${" " + body}`,`color: ${this.title.color}; border-radius:2px; padding:1px 4px 1px 4px; background-color: ${this.title.backgroundColor}; font-size: ${this.title.size};`,`color: ${this.body.color}; font-size: ${this.body.size}; font-weight: ${this.body.weight}; `);
}
},
msg: function(n, t, e, c) {
    var u = this.url,
        r = new RegExp('liqwid-' + c, 'g'),
		m='log';
    if (!n) n=++this.stp;
	if (!t||typeof t==="undefined") t='';else t=': ' + t;
	
	t = n + t;
	
    if (u.match(/liqwid:/) || u.match(/liqwid-/)) {
        this.wrn = true;
        if (c && u.match(r)) {
                this.dbg = true;
                this.wrn = false;
         }
	if (u.match(/-warn/)|| u.match(/:warn/)) {
               m='warn';
            }
	const l=new this.log;const er = new this.log("LIQWID");
	if (e===2) {l.setBodyStyle({color:"#0F5B87",weight:"bold"});l.setTitleStyle({color:"#FFF",backgroundColor:"#0F5B87"});}
	if (e===3) {l.setBodyStyle({color:"#0F5B87"});l.setTitleStyle({color:"#FFF",backgroundColor:"#0F5B87"});}
	if (e===4) {l.setBodyStyle({color:"#D95509"});l.setTitleStyle({color:"#FFF",backgroundColor:"#D95509"});}
	if (e===5) {l.setBodyStyle({color:"#7F2653"});l.setTitleStyle({color:"#FFF",backgroundColor:"#7F2653"});}
	er.setBodyStyle({color:"#C2423D"});er.setTitleStyle({color:"#FFF",backgroundColor:"#C2423D"});if(e!==1)l.log(t);else er.log(t);
   }
},kV:0.2,KM:true,kM:0,flag:0,bgad:0,tmp:null,KV:'',board_:0,rtb_flag:false,fall_flag:0,sN:0,cG:false,print:false,flash:false,eu:0,cs:'',lf:0,sln:0,i:0,i_:null,cnt:0,prevBot:0,prevS:0,fs:false,fx:false,trk:true,wait:0,lmt:0,cp:'',cln:0,clA:0,clB:0,clI:0,clJ:0,clK:0,clM:0,clN:0,clO:0,tx:'',fall:'',m:function(){var m=false;if("maxTouchPoints" in navigator){m=navigator.maxTouchPoints>0;}else if("msMaxTouchPoints" in navigator){m=navigator.msMaxTouchPoints>0;}else{var mQ=window.matchMedia&&matchMedia("(pointer:coarse)");if(mQ&&mQ.media==="(pointer:coarse)"){m=!!mQ.matches;}else if('orientation' in window){m=true;}else{var UA = navigator.userAgent;m=(/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA));}}return m;},mob:false,use_min:false,slot:0,wx:0,wy:0,lstn:1,sec:0,lso:null,cmc:[],cn_:0,mg:0,_vq:function(i,a){if(typeof a.p==="undefined"||a.p==0)return;let sq=this.vq,lq=this.lq,nq=this.nq,v=[],l=0;try{v=sq.split('.');}catch(e){v[0]='';} l=v.length;if(a.fc!==0){if(nq===""){nq=a.p.toFixed();}else{nq+="."+a.p.toFixed();}if(!this.mq.includes(a.p.toFixed())){this.mq.push(a.p.toFixed());if(lq===""){lq=a.p.toFixed();}else{lq+="."+a.p.toFixed();}}let pv=Math.floor(this.com.gC("LP"+a.p.toFixed()));pv++;this.com.sC("LP"+a.p.toFixed(),pv.toFixed(),0,a.mg);}else{if(sq===''){sq=a.p.toFixed();}else{sq+='.'+a.p.toFixed();}if(l>100){sq=sq.substring(sq.indexOf('.')+1,sq.length);}this.vq=sq;}this.lq=lq;this.com.sC('LMQ',lq,0,0);this.com.sC('LVQ',sq,0,0);if(sq!==''&&nq!==''&&nq.substr(0,1)!=='.')nq='.'+nq; this.nq=nq;this.com.sC('liqwid',sq+nq,0,0);},rt:0,Ag:'',rex:function(i,a,_p,d){a.rtb.f=0;a.bt=null;if(a.pd){a.fs=_p.fs;a.rl=_p.rl;}a.pd=null;_p.cf=null;_p.Pt=null;_p.s=0;_p.j=null;if(!a.pr)this.ad[i].l=false;_p.g=this.com.guid();_p.Re++;if(!a.pr){Liqwid.msg('Refreshing Dir: '+i);this.fill(i);}else{var rn=this._(a.rtb.m[0],null);if(rn&&a.af!=="video"){Liqwid.msg('Refreshing Prog: '+i) ;this.demand(rn,1,i);}}},refresh:function(r){var _p,a,d,m=4,n=Math.floor(r);if(Math.floor(n)>-1){_p=this.pp[n];a=this.ad[n];d=_p.d;
if(!_p.rfd&&_p.q!==''){_p.rfd=1;this.com.rq+=_p.q.replace(';','&r~=1;');_p.q='';}
if(_p&&a&&d&&_p.vi){
//if(_p.vPaid||a.af==='video')return;
if(_p.s>m||a.rtb.f!==0)Liqwid.rex(n,a,_p,d);}}else{for(i=0;i<this.i+1;i++){_p=this.pp[i];a=this.ad[i];d=_p.d;if(_p&&a&&d&&_p.vi){if(_p.s>m||a.rtb.f!==0)Liqwid.rex(n,a,_p,d);}}}},peela:function(_p){if(!_p||!_p.exp)return;
let c=_p.exp[3];
if(c&&c.length>0 && c.length<4) {
for (var n=0;n<3;n++){
let s= document.getElementById('Liqwid_stop'+_p.i+'_'+n),C="#dddddd";if(n===1)C="#bbbbbb";
if (n===0) {C=c[0];} else if (n===1&&c[1]) {C=c[1];} else if (n===2&&c[2]) {C=c[2];} 
if(s)s.setAttributeNS(null,"stop-color",C);		
//c.push(1);
}
} 
const p=["M 0 0 Q 75 161 39 332 287 352 500 500 L 0 0 Z","M 0 0 Q 156 164 131 253 310 328 500 500 L 0 0 Z","M 0 0 Q 75 161 89 361 261 294 500 500 L 0 0 Z","M 0 0 Q 120 161 5 320 120 352 500 500 L 0 0 Z","M 0 0 Q 156 164 131 253 310 328 500 500 L 0 0 Z","M 0 0 Q 122 161 73 260 316 342 500 500 L 0 0 Z","M 0 0 Q 50 161 89 260 261 110 500 500 L 0 0 Z","M 0 0 Q 75 161 39 332 287 352 500 500 L 0 0 Z"];const o=top.document.querySelector('#Liqwid_cor'+_p.i+' > path');
if(typeof document.body.style.MozAppearance==="undefined"){setInterval(function(){let i=Math.floor(Math.random()*Math.floor(4));if(o)o.setAttributeNS(null,"d",p[i]);},500);let g=document.querySelector('#Liqwid_peel'+_p.i),m=document.querySelector('#Liqwid_mask'+_p.i+'_0 > path'); if(g)g.style.transition="all 0.7s ease-in-out";if(m)m.style.transition="all 0.7s ease-in-out";}
	
},peel:function(i,r){
	
let p,P,g,b,c,d,_p=this.pp[i].peel,w=100,W=500,exp=Liqwid.pp[i].exp;
if(exp&&exp.length>2){w=exp[2][0];W=exp[2][1];}
	
let path=["M 500 "+w+" L 500 0 "+(500-w)+" 0 500 "+w+" Z","M 500 "+W+" L 500 0 "+(500-W)+" 0 500 "+W+" Z"];
if(r)path.reverse();
if(!_p) {p=document.querySelector('#Liqwid_mask'+i+'_0 > path');P=document.querySelector('#Liqwid_peel_prev'+i);g=document.querySelector('#Liqwid_peel'+i);b=document.querySelector('#Liqwid_peel_ad'+i);c=document.querySelector('#Liqwid_peel_clc'+i);d=document.querySelector('#Liqwid_peel_box'+i);_p={p:p,P:P,g:g,b:b,c:c,d:d}} else {p=_p.p;P=_p.P;g=_p.g;c=_p.c;d=_p.d;} 

if(p)p.ontransitionend=()=>{if(r){if(P)P.style.display="block";d.style.width=w+"px";d.style.height=w+"px";}else{b.style.zIndex=3;g.style.zIndex=0;}};if(p){for(let x=0;x<path.length;x++){p.setAttributeNS(null,"d",path[x]);}}if(r){g.style.zIndex=3;g.style.width=w+"px";c.style.opacity=1;if(P)P.style.display="block";if(typeof document.body.style.MozAppearance!=="undefined") {
b.style.zIndex=0;g.style.zIndex=3;d.style.transition="unset"} else {setTimeout(function(){g.style.zIndex=3;b.style.zIndex=0;},700);
}}else{b.style.right="0";if(P)P.style.display="none";c.style.opacity=0;g.style.width=(W-2)+"px";g.style.zIndex=0;d.style.width=W+"px";d.style.height=W+"px";}},peel_rnd:function(_p){if(_p.peel_img_src) return; var f=_p.VF||_p.f[_p.cn], y; if(f) y=(f.contentWindow || f.contentDocument);
if (y&&y.document) { 
//if(Liqwid.ad[_p.i].pd) {_p.peel_img_src=1;return Liqwid.peel(_p.i);}
const img=y.document.getElementsByTagName("img"); 
if(img.length===0&&!_p.peel_img_src) return setTimeout(function() {Liqwid.peel_rnd(_p)}, 10);
if(!_p.peel_img_src) {_p.pre_img_src=true;let d=document.getElementById('Liqwid_peel_box'+_p.i);
if(d){
console.log('Liqwid.ad[_p.i].spT ' + Liqwid.ad[_p.i].spT);
if(Liqwid.ad[_p.i].spT==='')setTimeout(function(){Liqwid.peel(_p.i,1);},5000);
} 
let canvas=document.getElementById('Liqwid_canvas'+_p.i);
//if(d)d.style.visibility="visible"; 
if(!canvas) {
if(Liqwid.ad[_p.i].spT==='')return Liqwid.peel(_p.i);
} else {
let context=canvas.getContext('2d'),imageObj=new Image();imageObj.onload=function(){const sourceX=imageObj.naturalWidth-100,sourceY=0,sourceWidth=100,sourceHeight=100,destWidth=100,destHeight=100,destX=0,destY=0;context.drawImage(imageObj,sourceX,sourceY,sourceWidth,sourceHeight,destX,destY,destWidth,destHeight);
};imageObj.src=img[0].src;
}
if(Liqwid.ad[_p.i].spT==='')Liqwid.peel(_p.i);
}}
},autoproyecto:function(d, video_id){
let kv='',jv,j=document.getElementById("gpt-params"); if(j){jv=JSON.parse(j.textContent.replace(', ]',']').replace(',]',']'));if(d){Object.keys(jv).map(key => {if(Array.isArray(jv[key])){kv+='googletag.pubads().setTargeting("'+key+'", '+JSON.stringify(jv[key])+');'}else{kv+='googletag.pubads().setTargeting("'+key+'", "'+jv[key]+'");'}})} else {kv=Object.entries(jv).map(e => e.join('=')).join('&');}}if (video_id){let bi=document.querySelector("[data-video-id='"+video_id+"']");if(bi) {let bv=bi.getAttribute("data-gpt-params");if(bv&&bv.length>0){bv=bv.replace(', ]',']').replace(',]',']');jv=JSON.parse(bv);kv=Object.entries(jv).map(e => e.join('=')).join('&');}}}

return 	kv;},timer:function(){var r=0,r_=0,q='',q_='',aq='',trk='',tl='';if(!this.fs){return setTimeout(function(){Liqwid.timer();},10);}for(i=0;i<this.i+1;i++){var _p=this.pp[i],a=this.ad[i];if(a&&_p){if(_p.cL)a.r=1;if((a.p!==0||_p.gpt||_p.tD)&& _p.vi){if(_p.tR&&a.rtb.f===_p.tR.sec){_p.tR.cnt++;if(_p.tR.max===_p.tR.cnt)_p.tR=null;this.refresh(i);continue;}}if(_p.vi&&a.rtb.f!==0&&_p.tR)a.rtb.f++;if(_p.end||_p.rfd||(a.video!==1&&(a.ps==='B'&&_p.g===this.Ag)))continue;let wT=_p.wT||0,rt=_p.rT;if(_p.s<240){if(a.ps==='A' && !a.pr)this.Ag=_p.g;if(_p.vi){if(a.video!==1){this.sec++;_p.s++;if(_p.gpt||_p.tD)_p.gs++;if(a.ps==='A')this.A=_p.s;if(a.ps==='B')this.B=_p.s;}else{
if(_p.player){_p.s= Math.floor(_p.player.currentTime);if(_p.s>240)_p.s=240;}}}else{this.trk=false;}if(this.cnt<this.i+1)this.cnt++;var aw=_p.w,ah=_p.h,f='';if(a.fs!==0){aw=a.mw;ah=a.mh;}st='&g~='+_p.g+'&p~='+a.p+'&ps~='+a.ps+'&s~='+_p.s+'&w~='+aw+'&h~='+ah;if(_p.nR&&_p.s===_p.nR){var d=_p.d;if(d&&d.nextSibling){d.style.display='none';_p.end=true;d.nextSibling.classList.remove('Liqwid_'+i+'fadeout');d.nextSibling.classList.add('Liqwid_'+i+'fadein');}}}
if(_p.s>0){if(a.pr||a.video!==0){if(a.video!==0||(a.rtb.r)){q='&b=~'+st+'&f~='+a.rtb.n+'&fc~='+_p.cn+'&ap~='+a._p+'&c~='+a.bid+'&a~=2';
}else{q='&b=~'+st+'&a~=5';}}else{q='&b=~'+st+'&a~=3';}r++;q_+=q+';';_p.q=q+';';if(wT>0){if(a.video===0&&a.ps!=='W'&&a.pr&&wT<10)wT=10;if(!_p.end&&_p.s>=wT/*&&_p.pf*/){this.close(i);}else{if(a.ps==='W'){var ct=this.d("Liqwid_captions"+i);if(ct&&wT-_p.s<wT){ct.innerHTML="AD SKIPS IN "+(wT-_p.s)+" sec";ct.style.display="block";}}}}
if(a.pr&&rt===-1&&a.rtb.n!=='D'&&_p.cn!==0)rt=20;if(a.af!=="video"&&a.video!==1&&rt>-1){if(a.pr&&rt===0){rt=30;if(this.mob)rt=15;}if(a.x===1)rt=0;  if(rt>9&&_p.s===rt) this.refresh(i);}}}}this.com.tl=q_;return setTimeout(function(){Liqwid.timer();},1000);},close:function(i,mV){var a=this.ad[i],_p=this.pp[i],d=_p.d,b=_p.b,df=_p.VF||_p.f[_p.cn],cB=this.d("Liqwid_close"+i),oB=_p.B,vK=this.d("Liqwid_vNB"+i);if(a&&_p&&d){
if(mV){_p.mV=-1;return;}else{if(_p.mP){this.pp[_p.mP.i].mV=-1;return;}}_p.end=true;if(a.op){d.style.height=0;d.style.overflow='hidden';}_p.cn=0;a.r=0;a.video=0;a.dur=0;if((_p.mV===5||_p.mV===6)&&_p.vN)this.ani(i,d,b,df,oB,a,_p,0,_p.w,_p.h,0,0,'absolute',null,_p.vD,_p.aE,_p.h,0,0.7);
if(_p.player){_p.player.pause();}	if(cB)cB.style.display='none';if(oB)oB.style.display='none';if(vK)vK.style.display='none';if(d.className.indexOf("Liqwid_"+i+"fadein") >-1) {d.classList.remove("Liqwid_"+i+"fadein");d.classList.add("Liqwid_"+i+"fadeout");} if(_p.nR){if(d&&d.nextSibling){d.style.display='none';_p.end=true;d.nextSibling.classList.remove('Liqwid_'+i+'fadeout');d.nextSibling.classList.add('Liqwid_'+i+'fadein');}}else{return setTimeout(function(){Liqwid.msg('Placement ('+a.p+') Closed: '+i);d.style.display='none';d.classList.remove("Liqwid_"+i+"fadeout");},500);
}}},txt:'',vg:'',ip:'2011981224',vl:'',vq:'',lq:'',mq:[],nq:'',pq:'',rec:function(){this.vg=this.com.gC('LVG');if(this.vg===''){this.vg=this.com.guid();this.com.sC('LVG',this.vg,365,0);}
let vq=this.com.gC('LVQ'),mq_=this.com.gC('LMQ'),mq=[],lq='',nq='',s=mq_.split('.');
for(let x=0;x<s.length;x++)if(s[x]!==''&&!mq.includes(s[x]))mq.push(s[x]);
for (let m=0; m<mq.length; m++) {let mp=Math.floor(this.com.gC("LP" + mq[m]));if (mp!==0) {for (let p=0;p<mp;p++){if (nq==="") {nq=mq[m];}else{nq+="."+mq[m];}}
if (lq===""){lq=mq[m];}else{lq+="." + mq[m];}}}if(vq!==''&&nq!=='')nq='.'+nq;this.lq=lq;this.vq=vq;this.nq=nq;this.mq=mq;this.com.sC('liqwid', this.vq+this.nq, 0, 0);		
this.pq=this.vq;var k='',m=top.document.querySelector("meta[name*='keywords']");if(m)k=m.getAttribute("content")||'';k=k.replace(new RegExp('<','g'),'').replace(new RegExp('>','g'),'').replace(new RegExp('/','g'),'').replace(new RegExp('\n','g'),'').replace(new RegExp('\r','g'),'').replace(new RegExp('"','g'),'');if(k.length>500)k=k.substring(0,500);this.keywords=k;if(k!=='')k='&kw='+encodeURIComponent(k);var m=0;if(this.mob)m=1;this._q='key=D85D-A6F1-B041-B88A'
+'&m='+m+'&vg='+this.vg+'&vdt='+this.com.vdt()+'&tz='+this.com.tz()+'&vd='+encodeURIComponent(document.domain)+'&sw='+top.screen.width+'&sh='+top.screen.height+'&cd='+screen.colorDepth+'&vip='+this.ip+k;},page:{u:'0',st:2,ep:1,pw:970,al:'center',pr:0,pp:70,mw:340,z:255,nl:1,nr:1,ns:2,ll:0,lr:0,lt:0,lb:0,lc:0,rl:0,rr:0,rt:0,rb:0,rc:0},logo:function(){},cw:0,ch:0,vp:function(){var w=top.document.documentElement.clientWidth||top.document.body.clientWidth;var h=top.innerHeight||top.document.documentElement.clientHeight||top.document.body.clientHeight;this.cw=Math.floor(w);this.ch=Math.floor(h);this.q=this._q+'&al='+this.page.al+'&cw='+this.cw+'&ch='+this.ch+'&u='+ encodeURIComponent(top.location.href);},drop:false,abord:false,_q:'',q:'',qs:'',qs_:'',ad:[],mc:'',par:function(i,_p,_w,_h,_v,_a){if(typeof this.ad[i]==='undefined'){this.ad[i]={p:0,af:'banner',d:'',e:'',l:false,r:0,j:0,s:0,cn:0,vcn:0,vcn_:0,c:'',al:_a,pp:{},pr:false,v:_v,ps:_p,mw:_w,mh:_h,ms:0,mt:0,t:0,ct:'',cm:'',rl:0,pt:'',cd:0,ci:'',cc:'',nf:null,tt:'',g:'',mg:0,fs:0,btn:[],rtb:{sT:[],c:[],m:[],w:[],h:[],n:'',r:false,f:null,s:0},vi:false,video:0,vast:false,vTr:null,dur:0,q:'',q_:''};this.pp[i]={w:1,h:1};this.i++;}},vCh:function(){if(typeof top.document.hidden==='undefined'){Liqwid.fs=false;this.mz=1;}else{if(!top.document.hidden){Liqwid.fs=true;this.mz=false;}else{Liqwid.fs=false;this.mz=1;}}},ds:0,ctr:function(u){this.click(0,u);},click:function(b,u,tr,m){if(typeof this.ad[b].cm!=='undefined'&&this.ad[b].cm!=='')this.com.js(this.ad[b].cm);if(m&&m!=='')this.com.js(m);let u_=this.ad[b].ct||'';if(u_!=='')u=u_;this.com.log('log','&ct=1'+this.pp[b].q.replace(/~/g,b).replace(/;/,''));if(typeof u!=='undefined'&&u&&u!==''){top.open(u,'_blank');}},click_btn:function(b,c){this.ad[b].ct='//'+this.ad[b].btn[b,c];this.click(b,'');},blockURL:false,L:false,insert:function(p,i,I){if(top.Liqwid.obj!==0)return;if(!p)p='';this.msg((++this.stp),'Call for Placement: '+ p);if(this.lg.includes(p)) return; this.lg.push(p);
if(p==='AF6C-40EE-B1A6-EBAD')return;if(i===null&&this.i_)i=this.i_;if(this.blockURL||this.lmt===1||(this.L&&i===null))return;var a=this.ad[i],_p=this.pp[i];if(a&&_p&&!_p.cL){if (a.p!==0&&a.r===1&&_p.q!=='') this.com.log('log',_p.q+'&i=1');}var u=this.q+this.qs_+'&ex='+this.vq+this.nq+'',p_=this.com.qk('liqwid_id');if(p_&&p_!=='')p=p_;if(p&&p!=='')u+='&dpl='+p;if(this.vl!=='')u+='&vl='+this.vl;if(typeof I!=="undefined"&&I!==null)u+='&di='+I;u+='&rnd='+Date.now();this.com.js(this.host+'/get/?'+u);this.msg((++this.stp),'Ad Request: https:'+this.host+'/get/?'+u);},_qs:function(i,w_,h_){var a=this.ad[i],_p=this.pp[i],w=0,h=0;if(a&&_p){w=_p.w;h=_p.h;if(w_)w=w_;if(h_)h=h_;if(a.ps==='G'||a.ps==='H'){w=w*1.2;h=250;}a.c='&i'+i+'='+i+'&ps'+i+'='+a.ps+'&w'+i+'='+Math.floor(w)+'&h'+i+'='+Math.floor(h)+'&b'+this.sln+'='+i+'&d'+i+'='+a.d;this.qs+=a.c;this.sln++;}},clt:0,
vPos: function(i,d,b,df,oB,a,_p,tm,w,h,t,l,P,cB){
if (typeof df==="undefined") {df=null; let f=_p.VF||_p.f[_p.cn]; if(f)df=f;} let cBA;
if(!df&&a.af==="video"){
	df=this.d("Liqwid_frame"+i+"_"+_p.cn);
	//console.log("Liqwid_frame"+i+"_"+_p.cn) ;
	if(df)_p.VF=df; 
	}
if(df)df.style="block";if(b)b.style="block";
	
if((_p.cF||_p.Fc)&&cB&&oB){cB.style.display="block"; 
	
	this.cP(i,_p.cP,d,0,0,oB.offsetWidth,oB.offsetHeight);
	if(_p.pi&&_p.pi>-1){
	this.cP(_p.pi,_p.cP,d,0,0,oB.offsetWidth,oB.offsetHeight);
	cBA=this.d("Liqwid_close"+_p.pi);
	if(cBA)cBA.style.display="block";
	}
	}
	
let oBd="block";if(_p.player && typeof _p.player.CP !=="undefined" && !_p.player.CP) oBd="none"; 

if (_p.mV === 2 || (_p.mRef&&this.fs) || ((_p.mV === 1 || _p.mV === 6) && _p.vJ && (tm+_p.h*0.8 < 0 || tm > this.ch - _p.h * 0.2))) {
  a.video = 2;_p.mRef=null;
	if(_p.pi&&this.ad[_p.pi])this.ad[_p.pi].video = 2;
  oB.style.position = "fixed";
  if (_p.vZ) oB.style.zIndex = _p.vZ;
  if (_p.vS && !_p.vNB) oB.style.boxShadow = _p.vS;
  oB.style.width = _p.vW;
  var W = oB.offsetWidth,
    H = W * (a.mh / a.mw);
  if (_p.vH) H = _p.vH;
  oB.style.height = H + "px";
  let W_ = W,
    H_ = H;
  if (_p.vbW) {
    W_ = _p.vbW;
    H_ = W_ * (a.mh / a.mw);
  }
  b.style.width = W_ + "px";
  b.style.height = H_ + "px";
if(_p.player.waiting) {
	b.style.filter="brightness(0%)";
	} else if(_p.player.waiting_) {
	b.style.filter="brightness(0%)";
	} else {
	b.style.filter="brightness(100%)";
	}
  if (df) {
    df.style.width = W_ + "px";
    df.style.height = H_ + "px";
    let _f = df.contentDocument || df.contentWindow;
    if (_f && _f.document) _f = _f.document;
    if (_f) {
      let f_ = _f.getElementsByTagName("iframe");
      for (let F = 0; F < f_.length; F++) {
        f_[F].width = _p.vW;
        f_[F].height = H + "px";
      }
    }
  }
  var vU = _p.vU,
    vLN, vTN, vNB, vK = "Liqwid_vNB" + i,
    vKB = this.d(vK);
  if (_p.vNB && !vKB) {
    var vE = document.querySelector(_p.vNB[0]);
    if (vE) {
      vNB = top.document.createElement('div');
      vNB.id = vK;
      if (_p.vNB[1] === "prepend") {
        vE.prepend(vNB);
      } else {
        vE.appendChild(vNB);
      }
      vNB.style.width = _p.vW;
      vNB.style.height = H + "px";
      if (_p.vNB[2]) vNB.style.cssText += ';' + _p.vNB[2].replace(/,/g, ';');
    }
  }
  if (_p.vTN) {
    vTN = document.querySelector(_p.vTN);
    if (vTN) {
      if (vKB) vKB.style.display = "block";
       var VT = this.com.fp(vTN).t,
        ts = this.com.st();
      if ((VT - ts) < parseInt(vU)) {
        vU = _p.vU;
        oB.style.position = "fixed";
        if (_p.vS) oB.style.boxShadow = _p.vS;
      } else {
        vU = VT + "px";
        oB.style.position = "absolute";
        if (_p.vS) oB.style.boxShadow = 'none';
      }
    }
  }
  if (_p.vLN) {
    vLN = document.querySelector(_p.vLN);
    if (vLN) _p.vL = this.com.fp(vLN).l + "px";
  }
  if (_p.Vp === "top-left") {
    oB.style.top = vU;
    oB.style.left = _p.vL;
 } else if (_p.Vp === "top-right") {
    if (!vLN) _p.vL = (top.innerWidth-W_-parseInt( _p.vR))+"px";
    oB.style.top = vU;
    oB.style.left = _p.vL;
  } else if (_p.Vp === "bottom-left") {
    oB.style.left = _p.vL;
    oB.style.top =(top.innerHeight-H_-parseInt( _p.vB))+"px";
  } else if (_p.Vp === "bottom-right") {
    oB.style.left=(top.innerWidth-W_-parseInt( _p.vR))+"px";
    oB.style.top=(top.innerHeight-H_-parseInt( _p.vB))+"px";
  } 
	//console.log(_p.mV, oBd );
	oB.style.display=oBd; 
  if (_p.mV === 6 && !_p.vX) {
    _p.vX = 1;
    this.ani(i, d, b, df, oB, a, _p, 0, _p.w, this.com.fp(_p.vN).t, 0, 0, 'absolute', null, _p.vD, _p.aE, _p.h, 0, 0.7);
  }
} else {
  if (_p.vX) return;
  a.video = 1;
	if(_p.pi&&this.ad[_p.pi])this.ad[_p.pi].video = 1;
  if (_p.vi) _p.vJ = 1;
  if (_p.mV === 5 || _p.mV === 6) {
    w = this.cw;
    oB.style.background = "#000";
  }
  vKB = this.d("Liqwid_vNB" + i);
  if (vKB) vKB.style.display = "none";
if(_p.TV){ 
w=_p.TV.offsetWidth;
h=_p.TV.offsetHeight; 
t=this.com.fp(_p.TV).t;		 console.log(t);						   
l=this.com.fp(_p.TV).l;								   
}
  oB.style.position = P;
  oB.style.right == "auto";
  oB.style.bottom = "auto";
  oB.style.left = l + 'px';
  oB.style.top = t + 'px';
  oB.style.width = w + 'px';
  oB.style.display=oBd;

  if (d) {
    d.style.width = w + 'px';
	//if (_p.player) console.log('_p.player.CP' + i + ' -- ' + _p.player.CP) ;
	if (_p.player && typeof _p.player.CP !=="undefined" && !_p.player.CP) {
	//h = 0;
	//console.log('hre' + i);
	}
	
	oB.style.height = h + 'px';
    d.style.height = h + 'px';

  }
  if (b) { 
	if(_p.player.waiting) {
	h=0;
	b.style.filter="brightness(0%)";
	} else if(_p.player.waiting_) {
	b.style.filter="brightness(0%)";
	} else {
	b.style.filter="brightness(100%)";
	}
    b.style.width = w + 'px';
    b.style.height = h + 'px';
	b.style.marginTop="0px";
  }
  if (df) {
    df.style.width = w + 'px';
    df.style.height = h + 'px';
  }
  if (_p.vS) oB.style.boxShadow = 'none';
  if (_p.mV === 1) {
    if (_p.Vz) oB.style.zIndex = _p.Vz;
  } else if (_p.mV === 5 || _p.mV === 6) {
    oB.style.zIndex = 0;
  } else {
    if (_p.vZ) oB.style.zIndex = _p.vZ;
  }
  if (cB) {
    if (_p.cF && cB) {
      cB.style.display = "block";
	if(cBA)cBA.style.display="block";
    } else {
      cB.style.display = "none";
	if(cBA)cBA.style.display="none";
    }
  }
  if (_p.mV === 5 || _p.mV === 6) {
    d.style.position = P;
    d.style.left = l + 'px';
    d.style.top = t + 'px';
    d.style.width = w + 'px';
    if (!a.nf) d.style.height = h + 'px';

    if (vKB) vKB.style.display = "none";

  }
  if (b) this.box(i, a, _p, d, b, df, w, h);
}},Vi:[],pA:0,pB:0,pH:0,pG:0,pR:0,TO:null,ov:function(l1,r1,l2,r2){if(l2.x<r1.x&&r2.x>l1.x&&l2.y<r1.y&&r2.y>l1.y) return true; return false;},board:function(E){if(E)this.E=true;if(this.drop)return;for(i=0;i<this.i+1;i++){var _this=this,a=this.ad[i],_p=this.pp[i];var df;if(_p&&_p.f&&_p.f.length>0)df=_p.VF||_p.f[_p.cn];if(!_p||!a||_p.end||_p.cancel||a.af==="playlist" /*|| (this.mob && _p.iL && a.pr && a.r && a.rtb.r)*/ )continue;var _=this._,pw=this.page.pw,al=this.page.al,aW=this.cw,aH=this.ch,saW=top.screen.availWidth,saH=top.screen.availHeight,fN,NP,CU,vis=_p.vI,vk=_p.vI,va=_p.va,mb=_p.mb,mt=_p.mt,bh=_p.blh,be=_p.bl,wN,CW,mW=_p.mW,rE=_p.rE,S,rn=0,clnNum=0,i_=0,n_=0,_t=0,_l=0,nB=_p.nB,blS=_p.blS,fL=_p.fL,cln=0,s_in=_p.aI,s_out=_p.aO,pos_=_p.pZ,pO='',_n=this._(a.rtb.n,null),top_=Math.floor(_p.tO),btm_=Math.floor(_p.bO),nn=_p.nodeNum,cW=_p.cW,cM=_p.cM,cM_=0,eE=_p.eE,cL=_p.cL,sA=_p.sA,sS=_p.sS,cV=_p.cV,cD=_p.cD,cSec=0,cScr=0,mC=_p.mC,lE=_p.lE,sL=_p.sL,cI=_p.cI,ia=_p.ia,fw=_p.fw,pm=_p.pm,pW=_p.pW,pU=_p.pU,nP=_p.nP,tH=Number(_p.tH),bH=_p.bH,cT=_p.cT,an=_p.aN,rW=a.mw,sO=_p.sO,hO=_p.hO,nZ=_p.nZ,cF=_p.cF,ut=_p.ut,mM=_p.mM,bS=_p.bS,bG=_p.background,w=a.mw,h=a.mh,u_=top.location.href,zi=_p.zi||this.page.z,ts=this.com.st(),d=_p.d,b=_p.b,cB=this.d("Liqwid_close"+i),oB,d_,_d,rH=_p.rH,dL=0,dT=0,zw=1,fzw=1,wx=this.com.wp().l,wy=this.com.wp().t;if(_p.PA)al=_p.PA;if(this.cw<pw+260)sO=0;

if (_p.stN && !_p.stN.r) {
    let f1;
	if(df)f1=df.contentDocument; else f1=_p.b;
    if (f1) {
        let f2 = f1.querySelector("iframe[name^='SendtoNews']");
		//if( (a.p===16112 || a.p===17475) && top.location.href.indexOf("liqwid") >-1) console.log('here',f2) ;
        if (f2) {
          
	let bar = f2.contentDocument,st = {
	sTN:{menu:'',bar:''},
		type: 'text/css',
style: document.createElement('style'),
append: function () {
this.style.type = this.type; 
this.style.appendChild(document.createTextNode(".videoPlayer.smartMatch .menuButton::after, .videoPlayer.smartMatch .menuButton::before {" + this.sTN.menu.replace(/,/g, ';') + "}"));
			bar.head.appendChild(this.style);
			this.callback();
		},
		callback: function () {
			let bar_ = bar.body.querySelector("div.titleBarContainer"),
				menu = bar.body.querySelector("div.menuButton");
			if (bar_) {
				bar_.style.cssText += st.sTN.bar.replace(/,/g, ';');
				if (menu) {
					menu.style.cssText += st.sTN.bar.replace(/,/g, ';');
				}
			} else {
				setTimeout(this.callback, 1000);
			}
		}

	};
	st.sTN=_p.stN;
	if(bar) {
	if (st.sTN && st.sTN.menu && st.sTN.menu != "") {
	console.log('st.sTN ', st.sTN) ;
	st.append();_p.stN.r = 1;
	}}
}
}
}if(typeof _p.V==="number"){vis=Number(_p.V)/100||0;}if(this.mob){wx=0;wy=0;}else{if(top.devicePixelRatio){zw=top.devicePixelRatio;}else if(top.screenX=='0'){zw=(top.outerWidth-8)/top.innerWidth;}else{let scr=top.frames.screen;zw=scr.deviceXDPI/scr.systemXDPI;}if(this.com.br==='firefox')fzw=zw;}s_in=i+s_in;s_out=i+s_out;CU=null;wN=null;if(_p.CW){CW=top.document.querySelector(_p.CW);if(CW)aW=CW.offsetWidth;}if(pW){pw=pW;}else{if(this.page.pr===1){pw=Math.floor(aW/100*this.page.pp);if(pw>this.page.pw)pw=this.page.pw;if(pw<this.page.mw)pw=this.page.mw;}}

let mw_=_p.mw;if((a.ps==='A'&&this.pA!==0)||(a.ps==='B'&&this.pB!==0)){if(_p.mw===160){mw_=300;}}if (_p.sP&&a.p!=0&&((!a.pr&&a.r===1)||a.rtb.r)){for(m=0;m<_p.sP.length;m++){let sP=top.document.querySelectorAll(_p.sP[m]);if(al==="center"){pw=Math.floor(this.cw-mw_*2)-mM-mM;}else{pw=Math.floor(this.cw-mw_)-mM;}if(_p.pM&&pw>_p.pM)pw=_p.pM;if(_p.wP&&((!a.pr&&a.r===1)||a.rtb.r))sP.forEach(function(e){if(pw>_p.wP-mM-mM){e.style.maxWidth= pw+"px";}else{e.style.maxWidth= "none";}if(_p.mS)e.style.margin=_p.mS;});}} 

if(_p.pN&&_p.pN.length>0){let pN;if(typeof _p.pN[0]!=='object'){pN=top.document.querySelector(_p.pN[0]);if(pN){pw=pN.offsetWidth+40;if(pN.offsetWidth>_p.pN[1])pw=_p.pN[1];}}else{for (let g=0;g<_p.pN.length;g++){pN=top.document.querySelector(_p.pN[g][0]);if(pN){pw=pN.offsetWidth+40;if(pN.offsetWidth>_p.pN[g][1])pw=_p.pN[g][1];break;}}}if(pN&&pN.offsetWidth>pw){pN.style.maxWidth=(pw-40)+"px";
pN.style.margin="0 auto";	
}}

if (_p.cnd&&eval(_p.cnd)!==true){d.style.display="none";_p.vi=false;continue;}
	
if(_p.wN){wN=top.document.querySelector(_p.wN[0]);let v1=_(_p.wN[1],null),v2=_(_p.wN[2],null),v3=_(_p.wN[3],true);if(wN){if(v1 && v1!=="overlap"){let v0=top.getComputedStyle(wN,null).getPropertyValue(v1);if(v0==v2){if(!v3)CU=1;}else{if(v3)CU=1;}}else{if (v1==="overlap") {if(this.TO===i){d.style.display="none";_p.vi=false;continue;}var l1={},r1={},l2={},r2={};l1.x=this.com.fp(b).l;r1.x=l1.x+a.mw;l2.x=this.com.fp(wN).l;r2.x=l2.x+wN.offsetWidth;l1.y=this.com.fp(b).t;r1.y=l1.y+a.mh;l2.y=this.com.fp(wN).t;r2.y=l2.y+wN.offsetHeight;var dt=this.ov(l1,r1,l2,r2);if(dt&&!v3){CU=1;this.TO=i;setTimeout(function(){Liqwid.TO=null;},1500);}}else{if(!v3)CU=1;}}}}
	
if(_p.NS){wN=top.document.querySelector(_p.NS[0]);if(!wN||top.getComputedStyle(wN,null).getPropertyValue("display")==="none") CU=1;}
let vid;
if(a.tE&&a.tE.tagName.match(/LIQWID-/))vid=a.tE.getAttribute("video");
if(_p.nA/*&&!this.NA*/&&_p.vi&&((!a.pr&&a.r===1)||a.rtb.r))this.nA(_p.nA);
if(_p.NS){
if(CU){
	if(d&&d.style.display!=="none")d.style.display="none";_p.vi=false;
	if(_p.player&&!_p.player.paused_){_p.player.pause();_p.player.paused_=1;}
	if(a.r!==1)continue;
for (let n=0;n<this.Vi.length;n++){
let pl=Liqwid.pp[this.Vi[n]];
if(pl&&pl.player&&pl.player.paused_&&pl.player.playing&& !pl.end){
	try{
		pl.player.play();pl.player.paused_=false;
	}catch(e){}
	}
	}
	this.Vi=[];									
	} else { 
	
	if(a.tE.tagName.match(/LIQWID-/)&&(!vid||vid.length===0))continue;
	if (d&&!_p.M&&d&&d.style.display!=="block") {d.style.display="block";
	if(_p.player&&_p.player.paused_&&_p.player.playing) {_p.player.play();
	_p.player.paused_=false;
	} else {
	_p.vs=1; Liqwid.video.init(a,_p);
	}
for (let V = 0; V < this.ads.length; V++) {
if (V !== i && this.pp[V].player) {
this.pp[V].player.pause();
this.pp[V].player.paused_ = true;
this.Vi.push(V);
}
}

if (a.PL&& a.PL.length>0 /*a.tE.tagName.match(/LIQWID-/)*/) { 
if(vid && vid.length > 0){
if (!a.tE.v || a.tE.v != vid) a.r = 0;
if (a.tE && a.af === "video" && a.r !== 1 && a.PL && a.PL.length !== 0) {
if (vid && vid !== '') {
for (let v = 0; v < a.PL.length; v++) {
if (a.PL[v].v == vid) {
a.sl = a.PL[v].u;
a.tE.v = vid;
let kv='',video_id=a.PL[v].oid;

if (Liqwid.url.match(/autoproyecto/)) kv=Liqwid.autoproyecto(null, video_id);
if(_p.cp)kv=_p.cp;						
if (a.PL[v]&&a.PL[v].k&&a.PL[v].k.length>0)kv=a.PL[v].k;
if(kv&&kv.length>0){	
Liqwid.KV = kv;
Liqwid.msg('Cust Params (video: '+video_id+')',kv.replace(/&/g,', '),4);	
}
_p.vcn = v;
Liqwid.video.init(a, _p);
break;
                }
            }
        } }
    }
}	
	
	} 
}
}
	
if(_p.SP){NP=top.document.querySelector(_p.SP[0]);if(NP&&top.getComputedStyle(NP,null).getPropertyValue("display")!=="none"){eval(_p.SP[1]+"="+_p.SP[2]);if(_(_p.SP[3],null))this.nA([[_p.SP[0],_p.SP[3]]]);}}this.vp();if(va==='m'){d_=this.d('Liqwid_slot'+i);_d=this.d('Liqwid_rail');
if(d_&&d){if(d_.parentNode)rW=d_.parentNode.offsetWidth;if(rW>a.mw)rW=a.mw;/*d_.style.width=rW+"px";d.style.width="100%";*/}}
if ((typeof MIDTC!=="undefined"&&MIDTC.dataLayer.paywall.policy==='membership')||this.url.match(/wp-admin/))this.drop=true;
if(_p.cA){for(var A=0;A<_p.cA.length;A++){var O_=top.document.querySelector(_p.cA[A][0]),C_=_(_p.cA[A][1],null),V_=_(_p.cA[A][2],null),P_ = "";if (O_){if(C_&&V_){if(C_==="requests"){if(this.pv>=V_){this.drop=true;Liqwid.msg("ads dropped");break;}}else{P_=top.getComputedStyle(O_,null).getPropertyValue(C_);if(!C_||P_.indexOf(V_)>-1){this.drop=true;break;}}}}}}if(this.drop){for(var I=0;I<this.i+1;I++){var D=this.d('Liqwid_board'+I);if(D){this.msg((++this.stp),'Box: '+i+' Dropped: ' + a.p,1);D.style.display="none";D.innerHTML='';a.p=0;a.r=0;a.rtb.r=false;}}return;}
if(_p.cO&&_p.cO.length>0){for(var O=0;O<_p.cO.length;O++){var O_,C_=_(_p.cO[O][1],null),V_=_(_p.cO[O][2],null),P_ = "";try{O_=top.document.querySelector(_p.cO[O][0]);} catch(e){}if(O_){if(C_)P_=top.getComputedStyle(O_,null).getPropertyValue(C_);if((!C_&&O_.offsetWidth>0)||(C_&&P_.indexOf(V_)>-1)){d.style.display="none";d.innerHTML='';this.msg((++this.stp),'Box: '+i+' Canceled: '+a.p, 1);a.p=0;a.r=0;a.rtb.r=false;_p.end=1;continue;}}}}if(_p.pO!==''||_p.sA){if(!_p.sA){pos_=_p.pO;}else{if(a.ps==='A'||a.ps==='B'){pos_="fixed";if(_p.s>=_p.sA||(a.ps==='B'&&this.A>=_p.sA)){if(!_p.pts) {_p.pts=ts;_p.pO='absolute';}pos_=_p.pO;}}else{pos_=_p.pO;}}}if(_p.vI===0)vis=0;if((a.ps==='A'||a.ps==='B'||a.ps==='W')&&a.pr)vis=0.8;if(this.mob&&a.pr&&!_p.V)vis=0.1;vk=vis;if(vk===0)vk=0.1;if(d){dL=this.com.fp(d).l;dT=this.com.fp(d).t;}if(_p.oB||(_p.mV&&_p.B))oB=_p.B;if(_p.iL&&!a.tE&&!this.ka/*&&_p.cE>0*/&&(_p.mC===0||a.k<_p.mC)){S=this.a(_p);if(S.length>a.kn){this.ka=1;a.kn=S.length;A=a;P=_p;setTimeout(function(){_this.clon(S,A,P);},_p.iL);}}if (df&&_p.jB){var _df=df.contentDocument||df.contentWindow.document;if(_df&&_df.body.innerHTML===''){_df.body.innerHTML='<!-- new call -->';}}if (!a.op){if(a.c==='')this._qs(i);
	
if(_p&&_p.CV&&!_p.TV)_p.TV=top.document.querySelector(_p.CV);
if (_p.TV&&d&&!_p.mV){ 
_p.w=_p.TV.offsetWidth;
_p.h=_p.TV.offsetHeight;
	
if (_p.TV.style.position==="fixed") {  //console.log( _p.TV.offsetLeft ) ;
d.style.position="fixed";	
_p.top=_p.TV.offsetTop;	
_p.left=_p.TV.offsetLeft;	
	} else {
d.style.position="absolute";
_p.top=this.com.fp(_p.TV).t;
_p.left=this.com.fp(_p.TV).l;
	}
if(d){
d.style.top=_p.top+'px';				   
d.style.left=_p.left+'px';							   
d.style.width=_p.w+'px';
d.style.height=_p.h+'px'; 
	}
df=_p.VF||_p.f[_p.cn];
if(df){
df.style.width=_p.w+'px';
df.style.height=_p.h+'px'; 	
}
if(b){
b.style.width=_p.w+'px';
b.style.height=_p.h+'px'; 	
}	
}	
if(a.rl!==0&&(a.p!==0&&((!a.pr&&a.r===1)||a.rtb.r)&&d&&d.parentNode&&b)){
if(!a.nf){
if(b){b.style.width=_p.w+'px';b.style.height=_p.h+'px';}if(df){df.style.width=_p.w+'px';df.style.height=_p.h+'px';}}if(_p.mV===5||_p.mV===6){va='';pos_=_p.Vp;}if(d_)dL=this.com.fp(d_).l;if(_d)dL=this.com.fp(_d).l;if(rE){var rE_=top.document.querySelector(rE[0]);if(rE_)w=Math.floor(this.com.fp(rE_).l-dL-rE[1]);}else{if(_p.mV===3||(_p.mV===4&&_p.pX)){w=Math.floor(this.cw-dL);}else{w=d.parentNode.offsetWidth;}}if(mW&&w>mW)w=mW;if(w>0)h=Math.floor(w*(a.mh/a.mw));};if(_p.fN)fN=document.querySelector(_p.fN);if(fN){w=fN.offsetWidth;h=fN.offsetHeight;};if(_p.mV===5||_p.mV===6){w=_p.w;h=_p.h;}var t_,n_,b_,l_,w_,h_,bl_=0,aY=0,bt=0,bl=0,lb=0,pd=true;t_=d_||d;
	if(_p.TV&&!_p.M)t_=_p.TV;if(t_)aY=this.com.fp(t_).t;if(_p.TV&&!_p.M){dT=aY;dL=this.com.fp(_p.TV).l;}
	
_p.y=aY;if(va==='m'){if(blS){bl=blS;}else{if(be!==''||bh!==''||nB){if(bh!==''){n_=top.document.querySelectorAll(bh);if(n_.length>0)nn=n_.length-1;b_=n_[nn];if(b_){bl_=this.com.fp(b_).t+b_.offsetHeight;}}else if(be!==''){if(be==='auto'){if (!_p.bla){var bn=document.getElementsByTagName("div");for(var o=0;o<bn.length;o++){bt=this.com.fp(bn[o]).t;lb=this.com.fp(bn[o]).l;if(bt>aY&&lb<=dL&&lb+bn[o].offsetWidth>dL&&(!_p.blC||bn[o].className.indexOf(_p.blC)>-1)){_p.bla=bn[o];break;}}}b_=_p.bla;}else{if(nB){for(var j=0;j<nB.length;j++){var bW=top.document.querySelector(nB[j]);if(bW){if(dL>0&&this.com.fp(bW).l+bW.offsetWidth>dL){be=nB[j];break;}}}}b_=top.document.querySelector(be);}}if(!b_){if(be==='auto'){bl=aY+h;}else{bl=document.body.offsetHeight+mb;}}else{if(bt===0)bt=this.com.fp(b_).t;if(bl_===0||bl_>bt)bl_=bt;if(bl_>0)bl=bl_-aY+mb;if(bl<h&&_p.sH&&bl>_p.sH)_p.va='';}}}}if(_p.tN){var tN=top.document.querySelectorAll(_p.tN),tT,tL,tNM=0;for(var o=0;o<tN.length;o++) {tT=this.com.fp(tN[o]).t;tL=this.com.fp(tN[o]).l;
if(tT>=aY+h &&tL<dL+w&&tL+tN[o].offsetWidth>dL){bl=tT-aY-20;break;}}}if(_p.bl!=='ignore'){if(va==='m'&&bl<h)pd=false;}else{if(_p.rH)bl=_p.rH;}var t=dT,l=dL,tm=t*fzw-ts/*+(h-h*vk)*/,lm=l-this.com.sl(),hB=0,rm=Math.floor(lm+(w*vk)),bm=Math.floor(t+(h*vk)-ts),sl=Math.floor(wx+lm*zw+(w-w*vk)*zw),sr=Math.floor(wx+rm*zw),sb=Math.floor(wy+bm*zw),_t=Math.floor((this.ch/2)-h/2);if(ut)_t=ut;if(d&&b&&d.style.position==='fixed'){sb=Math.floor(wy+tm+(h*vk)*zw);sl=Math.floor(wx+this.com.fp(b).l*zw+(w-w*vk)*zw);tm=d.offsetTop;sr=Math.floor(wx+this.com.fp(b).l*zw+(w*vk)*zw);}if(_p.mV!==5){_p.w=w;_p.h=h;}if(_p.mK)tm-=_p.mK;if (a.t!==8){if(_p.iT===4){if(vis===0||(this.fs&&((_p.cM===0&&this.cw>pw+260)||(_p.cM!==0&&this.cw>=_p.cM))||(this.bgad===0||ts<this.bgad/2))){_p.vi=true;}else{_p.vi=false;}}else{
if(vis===0||(this.fs&&(_p.mV===2||((cM===0||cM<=this.cw)
&&(tm+_p.h*0.5>=0)
&&(w*vk<=this.cw)
&&(cW===0||cW>= this.cw)
&&(sl>=0
//&&sr<=screen.availWidth*fzw
)&&(h*vk<=this.ch)
&&(sb-_p.TM<=screen.availHeight)
&&(a.r===0||bm-_p.TM<=this.ch)
&&(bl===0||bl>h)
&&(!_p.lS)/*&& pd */)))){
_p.vi=true;
if(_p.nW){w_=top.document.querySelector(_p.nW);if(w_&&w_.offsetWidth<w)_p.vi=false;}}else{_p.vi=false;}if(_p.oO){var od=top.document.querySelector(_p.oO[0]);if(od){if(od.style.display==='block'){_p.vi=true;}else{_p.vi=false;}}}}}if(vis===0)_p.vi=true;if(a.t===8&&a.fo.length>0){_p.vi=true;if(d&&b&&df){d.style.width="100%";b.style.width="100%";df.style.width="100%";}}if(_p.mV===5||_p.mV===6){if(ts>_p.h*0.3){_p.vi=false;}else{if(this.fs)_p.vi=true;}};if(sO!==0&&ts<sO)_p.vi=false;
if(!_p.l){ _p.vi=true; tm=1;dT=1;}
if(va==='m'){
if(a.ps==='I'){cln=this.clI;}else if(a.ps==='J'){cln=this.clJ;}else if(a.ps==='K'){cln=this.clK;}else if(a.ps==='M'){cln=this.clM;}else if(a.ps==='N'){cln=this.clN;}else if(a.ps==='O'){cln=this.clO;}if(_p.mK)eE=_p.mK;if(eE>0&&eE>=_t)_t=eE;aY=Math.floor(aY);bl=Math.floor(bl);h=Math.floor(h);_t=Math.floor(_t);ts=Math.floor(ts);if(cD&&cD.length>0){cSec=cD[0];cScr=cD[1];if(cScr===-1)cSec===0}if(cScr===-1||(bl>h&&aY-ts<=_t-eE&&aY+bl-ts>=_t+h)){if(aY+bl-ts>=_t+h)_p.pX=(aY-ts);if(sS!==0||sA>0||cD){if(!cL){hB=parseInt(_t-(aY-ts)+h);if(rH)hB=rH;if(hB+40>bl)hB=bl;if(cScr===-1) hB=a.mh;if(d_)d_.style.height=hB+'px';if(_p.mB){d_.style.marginBottom=_p.mB;_p.mB=null;}}}if(!cL&&(mC===0||cln<mC)&&((sA>0&&sA<_p.s)||(sS!==0&&ts>_p.sL+sS)||((cSec===0||(cSec>0&&_p.s>=cSec))&&(cScr===0||ts>_p.sL+cScr||cScr===-1)))){if(!blS){blS=_p.blS=hB;if(bl-blS>=h){_p.cL=true;if(a.ps==='I'){this.clI++;}else if(a.ps=== 'J'){this.clJ++;}else if(a.ps==='K'){this.clK++;}else if(a.ps==='M'){this.clM++;}else if(a.ps==='N'){this.clN++;}else if(a.ps==='O'){this.clO++;}var n=this.i+1;if(!cI)cI=a.e;if(cV||cSec!==0||cScr!==0){if(cSec!==0||cScr!==0)this.ad[n]=a;this.insert(cI);}}}}if(d){if(cScr!==-1){d.style.position='fixed';d.style.top=_t+'px';}if(_p.mV&&!_p.end&&oB&&a.r===1)this.vPos(i,d,b,df,oB,a,_p,tm,w,h,_t,dL,"fixed",cB);}}else{if(d){pO="absolute";if(_p.pO!==''&&!_p.M)pO=_p.pO;d.style.position=pO;if(aY+bl-ts<_t+h){_t=(bl-h);if(_t<0)_t=0;d.style.top=_t+'px';if(_p.pX+bl>(aY+bl-ts+h*0.1))_p.pX=null;}else{d.style.top=eE+'px';if(_p.pX<(aY-ts-h*0.1))_p.pX=null;}if(_p.mV&&!_p.end&&oB&&a.r===1)this.vPos(i,d,b,df,oB,a,_p,tm,w,h,dT,dL,pO,cB);}}}else{if(_p.aF&&((!a.pr&&a.r===1)||a.rtb.r)){var ahd=top.document.querySelector(_p.aF[0]),ahdL=0,ahdT=0;if(ahd){if(!_p.aF[2]&&!_p.aF[3]){_p.aF[2]=this.com.fp(ahd).l;_p.aF[3]=this.com.fp(ahd).t;}if((aY+bl-ts)<(_p.aF[3]+ahd.offsetHeight+ts))_p.aF[1]=0;if(_p.aF[1]>_p.s||ts<_p.aF[5]){_p.vi=true;if(_p.aF[5]>0&&ts===0){_p.aF[5]=null;}else{ahd.style.position='fixed';ahd.style.left=_p.aF[2]+'px';ahd.style.top=_p.aF[3]+'px';}}else{ahd.style.position=_p.aF[4];if(!_p.aF[5]){_p.aF[5]=ts;ahd.style.left='auto';ahd.style.top=ts+'px';}}}}if(d&&b){if(_p.tO)d.style.top = top_+'px'; 
if(_p.mV&&df){let _f=df.contentDocument||df.contentWindow;if(_f&&_f.document)_f=_f.document;if(_f){let f_=_f.getElementsByTagName("iframe");for(let F=0;F<f_.length;F++){f_[F].width=w+"px" ;f_[F].height=h+"px";}}}if(((_p.mV&&_p.mV<5)||(_p.mV&&_p.mV==6&&!_p.vi))&&!_p.end&&oB&&a.r===1){
if(!_p.vi){_p.mRef=1;}else{_p.mRef=null;}this.vPos(i,d,b,df,oB,a,_p,tm,w,h,dT,dL,"absolute",cB);}if (pos_!== '')pO=pos_;if(_p.pO!=='')pO=_p.pO;if(_p.pA){var pA=top.document.querySelector(_p.pA);if(pA){pO=top.getComputedStyle(pA).getPropertyValue('position');if(pO==='fixed'){d.style.top=this.com.fp(pA).t+pA.offsetHeight+50+'px';}else{if(_p.tO)d.style.top=top_+'px';}}}if(!_p.M)d.style.position=pO;if(pos_==='static') {if(fL)d.style.float=fL;}}}if(cM!==0){if(cM<=this.cw){if(!_p.end&&d)d.style.display='block';}else{cM_=1;if(d)d.style.display='none';}}if(cW!==0){if(cW>=this.cw&&cM_!==1){if(!_p.end&&d)d.style.display='block';}else{if(d)d.style.display='none';}}if(a.p!==0){if(_p.vi){if(!_p.SN&&(!_p.sN||this.sN<_p.sN)){_p.SN=true;this.sN++;}
if(!_p.l&&_p.SN){_p.l=true;this.msg((++this.stp), 'Fill In View Slot #: ' + i + ' Placement: ' + a.p);
if(!_p.fD){Liqwid.fill(i);}else{var I=i;setTimeout(function(){Liqwid.fill(I);},_p.fD);}} else {if (((!a.pr && a.r === 1) || a.rtb.r) && d) {if (_p.vc === 0) {_p.vc = 1;if (d.className.indexOf("Liqwid_" + s_out) > -1) d.classList.remove("Liqwid_" + s_out);if(!_p.end){if(b)b.style.display='block';d.style.display='block';}d.classList.add("Liqwid_"+s_in);}}}}else{/*if(!pd&&d)d.style.display="none";*/if(_p.SN){_p.SN=false;this.sN--;if(this.dbg)this.msg((++this.stp),'Ads in View: ' + this.sN,'debug');
}}if(a.video!==0&&_p.player&&!this.AF){if(_p.vi||(this.fs&&a.video===2)){if(_p.player._paused&&!_p.player.paused_&&!_p.player.ended){_p.player.play();_p.player._paused=false;}}else{if(!_p.player.paused_&&!_p.player.paused_){_p.player.pause();_p.player._paused=true;}}}}
} else { 
if(((this.abord||this.lmt===1) && typeof a.pp.ignoreSkinsControl==='undefined')||((cW!==0&&cW<this.cw)||(cM!==0&&cM>this.cw))||(a.pr && a.rtb.s===0) ){if(d)d.style.display='none';if(oB)oB.style.display='none';continue;}var X=0,ns= this.page.ns,nl=this.page.nl,nr= this.page.nr,in_sq=false,wx=this.com.wp().l,wy=this.com.wp().t,k=1,_cl=0,tP=this.page.lc,lM=this.page.ll,rM=this.page.lr,tM=this.page.lt,bM=this.page.lb,ver_num=nl,fy=0,dY=0,mY=0,dy='none'; 
if(a.al==="right"){lM=this.page.rl;rM=this.page.rr;tM=this.page.rt;bM=this.page.rb,ver_num=nr;tP=this.page.rc;} if(this.mob){saW=aW;saH=aH;}
var min_sq=false,x=lM,y=0,kw=0,kh=0,rB=pw;if(_p.CW&&CW){X=this.com.fp(CW).l;x=X;}if(fw>0){wx=0;wy=0;}

if(vis===0){wx=0;wy=0;saW=this.cw;} 
if(pw>0){w=((aW-pw)/ns-(rM+lM));rB=pw;} 
if(a.ps!=='G'&&a.ps!=='H'){
if(al==='center'){
if(a.al==='right')x=X+((aW-pw)/ns)+pw+lM;
if(wx+x<0){aW+=wx;
if(a.al==='left'){
x-=(wx+8);w=(w-(x+rM));
} else { 
if(aW<w){
w=(aW-(rM+lM));x=(lM-wx);
}}} else if((wx+aW)>saW){
aW=saW-wx;
if(a.al==='right'){
w=(aW-x-rM);}else{if(aW<w){	w=(aW-(rM+lM));}}}} else if(al==="left") {  
if((wx+aW)>saW)	aW=saW-wx;x=(pw+lM);w=(aW-x-rM);if(wx<0){aW+=wx;if(aW<w){w=aW-(rM+lM);x=lM-wx;}}
} else {  
if(a.al==='left')w=(aW-pw)-(rM+lM);if(wx<0){aW+=wx;x=lM-wx;w=w-x-rM;} else if((wx+aW)>saW) {aW=saW-wx;if(aW<w) {w=(aW-(rM+lM));}} 
} 
/*y=tM-eE-tH,kw=0,kh=0,rB=pw; if(y<eE)y=eE;*/
			   
if (nP) {var te,_te=nP.replace(/,/g,'|').split('|'),teH=0,_teH=0;for(let j=0;j<_te.length;j++) {_te[j]=_te[j].trim();te=top.document.querySelector(_te[j]);if(te) {teH=this.com.fp(te).t;if(tH)teH+=Math.floor(te.offsetHeight+tH);if(teH>_teH)_teH=teH;}}if(_teH>tM)tM=_teH;mY=tM;tM-=ts;if(tM>pU)pU=0;}
	
if(pU!==0){if(tM<pU)tM=pU;else tM+=pU;}
if(bH){if(!Array.isArray(bH))bH=[bH];for(var j=0;j<bH.length;j++){var fe=top.document.querySelector(bH[j]);if(fe){fy=Liqwid.com.fp(fe).t+mb;if(fy<ts+aH)bM=aH-fy+ts;this.bE=bM;break;}}} 	
if(a.fs===1){if(tM<eE&&(fy===0||fy>ts+aH))tM=eE;if(fy-ts>0&&fy-ts<a.mh&&tM===0)tM=fy-ts-a.mh;}else{if(tM<0)tM=0;}
dY=tM;h-=dY;if(aH!==saH&&(wy+aH)>saH)aH=saH-wy;h=aH-(tM+bM);if(ver_num>1){h=(aH-(tM+bM+tP))/ver_num;if(a.v>0)dY=tM+h+tP;}
} else { 
if(pw>120) {w=pw;} else{w=aW;} //?
if(al==="center") {if(pw>0){x=(aW-pw)/2;}rB=(x+w);if(wx<0){aW+=wx;rB=(x+w);if(aW<(x+w)){x=-wx;w=(rB-x);}}
if((wx+aW)>saW){aW=(saW-wx);if((x+w)>(aW)){w=aW-x;}}
}else if(al==="left"){x=0;if(wx<0){x=-wx;w+=wx;}
if((wx+aW)>saW){aW=(saW-wx);if((x+w)>(aW))w=aW-x;}
}else {  
x=(aW-pw); if(wx<0){aW+=wx;rB=(x+w);if(aW<pw){x=-wx;w=(rB-x);}}
if((wx+aW)>saW){aW=(saW-wx);if((x+w)>(aW)){w=aW-x;}}} 

h=a.mh;w=a.mw;x=Math.floor(this.cw/2-w/2);if(cT){var ctN_=top.document.querySelector(cT);if(ctN_){x=this.com.fp(ctN_).l+ctN_.offsetWidth/2-a.mw/2;}}
dY=top_;if(eE>0)dY=eE;if(a.ps==='H')dY=Math.floor(aH)-h-btm_;	
}  
this.wx=wx;this.wy=wy;if(lE){var lEn=top.document.querySelector(lE[0]), lX=0;if(lEn)lX=this.com.fp(lEn).l-a.mw;if(lX<x)x=lX;}							   
 
if(w>3000)w=3000; kw=w;
if((a.ps==="A"||a.ps==="B")&&(a.rl!==0||fw!==0)){var w_=h*(a.mw/a.mh),h_=h;if(fw>0){w_=w; h_=w_*(a.mh/a.mw);if(h_<h){h_=h;w_=h*(a.mw/a.mh);}} 
if(a.ps==='A')x=x+w-w_;w=w_;h=h_;w=Math.floor(w);h=Math.floor(h);x=Math.floor(x);if(df){
try{var df_=df.contentDocument||df.contentWindow.document;if(df_)img_=df_.getElementById("LW_img");if(img_){img_.style.height=h.toFixed()+"px";img_.style.width=w.toFixed()+"px";}
} catch(ex){}}}   

if(vis===0||(this.cw>a.mw&&((kw>=a.mw*vk&&this.ch-tM>-a.mh*vk))))min_sq=true;if(_p.hN&&(a.ps==='G'||a.ps==='H')){var hn=top.document.querySelector(_p.hN);if(hn){if(this.com.fp(hn).t-ts<aH)min_sq=false;}}	
if(_p.wP&&(a.ps==='A'||a.ps==='B')){if(min_sq){min_sq=false;if(_p.wP&&this.cw>_p.wP+a.mw*2)min_sq=true;}}kh=h;if(a.mh>h)kh=a.mh;if(a.ps==='G'||a.ps==='H'){kw=this.cw; kh=250;}if(a.c==='')this._qs(i,kw,kh);if(a.fs!==0){var _x=Math.floor(w/2-a.mw/2),_y=0;if(a.ps==='A'||a.ps==='B'||a.ps==='W'){_y=Math.floor(this.ch/2-a.mh/2)-dY;if(dY>Math.floor(this.ch/2-a.mh/2))_y=0;if(_y<0)_y=0;}_p.y=_y;if(dY+a.mh*vk>this.ch)min_sq=false;if(a.al==='left'){if(_x+a.mw>w)_x=w-a.mw;if(pm)_x=w-a.mw-Math.floor(pm);if (pw+a.mw*2+mM+mM>=this.cw && _x+a.mw<w-mM)_x=w-mM-a.mw;}else if(a.al==='right'){if(_x<0)_x=0;if(pm)_x=Math.floor(pm);if(pw+a.mw*2+mM>=this.cw && _x<mM)_x=mM;}_p.x=_x;} 
 
if(a.fs!==0){if((a.ps==='A'&&this.pA!==0)||(a.ps==='B'&&this.pB!==0)){if(a.mw===160){min_sq=false;}else{if(!min_sq){if(a.ps==='A')this.pA=0;if(a.ps==='B')this.pB=0;}}}if((a.ps==='A'||a.ps==='B')&&(this.pR===1||(pU!==0&&a.mh>-(bM-(fy-ts)))||(bH&&fy-teH<a.mh)))min_sq=false;}if(_p.lS||((sO!==0&&ts+top_<sO)||(hO!==0&&((hO<sO&&ts+top_<hO)||(min_sq&&hO>sO&&ts+top_>hO)))))min_sq=false;if(this.demo&&(a.ps==='G'||a.ps==='H')){var sl=Math.floor(wx+(this.cw/2-a.mw/2)*zw),sr=Math.floor(wx+(this.cw/2+a.mw/2)*zw),sb=Math.floor(wy*fzw+this.ch*zw);if((sb>screen.availHeight*fzw)||(sl < 0)||(sr>screen.availWidth*fzw))min_sq=false;}if(a.ps==='W' && this.fs)min_sq=true;if(min_sq){
 
if((a.ps==='A'||a.ps==='B') && a.fs!==0 && a.mw!==160){if(a.ps==='A')this.pA=1;if(a.ps==='B')this.pB=1;}
if(a.ps==='G'||a.ps==='H'){if((!this.mob&&a.mw>728)||(this.mob&&a.mw>320)){if(a.ps==='H')this.pH=1;if(a.ps==='G')this.pG=1;} if(_p.fS&&_p.fS.length>1&&a.r)this.fitTo(i,a,_p.fS);}

if(_p.cE>0){
_cl=this.clA;if(a.ps==='B'&&a.p>0&&this.Ap!==a.p)_cl=this.clB;
if((a.ps==='A'||(a.ps==='B'&&this.Ap!==a.p))&&(_p.mC===0||_cl<_p.mC)&&_p.s>=_p.cE&&a.wait===0&&ts-this.prevS>h*2){
pos_="absolute";
var _d,_b,_df,_cl,_s='l';_l=0;	
if(d) {
if(a.ps==='A') {this.clA++;_cl=this.clA;} if(a.ps==='B'&&a.p>0&&this.Ap!==a.p){this.clB++;_cl=this.clB;_s='r';_l=1;}
d.id="Liqwid_clone_"+_s+"_"+_cl;
b.id="Liqwid_clone_b_"+_s+"_"+_cl;
//df.id="Liqwid_clone_f_"+_s+"_"+_cl;
if (a.ps==='A' && a.p >0 && this.ad[1].p===a.p) {
_d=this.d("Liqwid_board1"),_b=this.d("Liqwid_box1"),_df=this.d("Liqwid_frame1");
if(_d) {
_d.id="Liqwid_clone_r_"+_cl;
_b.id="Liqwid_clone_b_r_"+_cl;
_df.id="Liqwid_clone_f_r_"+_cl;
_d.style.position="absolute";	
	}
}
if(mY>dY)dY=mY;
if(this.prevBot<dY) this.prevBot=dY;
var incr=((ts-this.prevS)/50*1/(ts-this.prevS)),ts_=aY+ts;
a.wait=1;	
this.com.move(d,_l,ts_,this.prevBot,incr,incr/200,incr/200);
if(_d)this.com.move(_d,1,ts_,this.prevBot,incr,incr/200,incr/200);
}
}
if(a.ps==='A' && a.wait===2 && a.p>0) {
this.prevBot=dY+h*this.clA;
if(_p.cI){
this.insert(_p.cI);
} else {
this.add(0);
if(this.ad[1].p===a.p)this.add(1);
}
this.prevS=ts;a.wait=0;
}	
if(a.ps==='B' && a.wait===2 && a.p>0 && this.Ap!==a.p) {
this.prevBot=dY+h*this.clB;
if(_p.cI){
_p.cI=a.e;
this.insert(cI);
} else {
this.add(1);
}
this.prevS=ts;a.wait=0;
}}

if(d&&((!a.pr&&a.r===1)||a.rtb.r)) {if(nZ){var _nZ=top.document.querySelector(nZ[0]);if(_nZ){var np=_nZ.style.position;if (np!=='absolute'&&np!=='relative'&&np!=='fixed'){if(this._(_p.nZ[2],null)){_nZ.style.position=_p.nZ[2];}else{_nZ.style.position='relative';}}_nZ.style.zIndex=nZ[1];}}if(oB){var oBl=0;if(_p.oF)oBl=Math.floor(_p.oF.replace(/\s/g,'').replace('blur(','').replace('px)',''));if(isNaN(oBl))oBl=0;oB.style.position="fixed";oB.style.width=Math.floor((aW+oBl*2)+10)+"px";oB.style.height=Math.floor((h+oBl*2)+10)+"px";oB.style.left="-"+(oBl+5)+"px";oB.style.zIndex=zi-1;oB.style.display='block';if(cB){cB.style.right=-(aW-(aW/2+a.mw/2)-20)+'px';}}if(a.ps==="W"&&a.mw>1&&a.mh>1){w=this.cw;h=this.ch;y=0;x=0;}if(a.ps==='H'){if(_p.bN){var bN=top.document.querySelector(_p.bN);if(bN)btm_=bN.offsetHeight;}d.style.bottom=btm_+"px";if(oB)oB.style.bottom=-(_p.oT+oBl*2)+'px';}else{if(_p.cE>0){if(a.ps==='A'){_cl=this.clA;_s='l';}if(a.ps==='B'&&a.p>0&&this.Ap!==a.p){_cl=this.clB;_s='r';}if(_cl>0){var da=document.getElementById("Liqwid_clone_"+_s+"_"+_cl),_dY=dY;if(da){_dY=this.com.fp(da).t+h;this.prevBot=_dY;if(_dY-ts>tM){pos_="absolute";dY=this.prevBot;}}for (var s=1;s<_cl+1;s++){if(a.ps==='A'){var cl_=document.getElementById("Liqwid_clone_l_"+s);if(cl_){cl_.style.width=w+"px";cl_.style.display="block";}}if(a.ps==='B'){cl_=document.getElementById("Liqwid_clone_r_"+s);if(cl_){cl_.style.width=w+"px";cl_.style.display="block";cl_.style.left=x+"px";}}}}}	
if(_p.pts)dY=_p.pts;d.style.top=dY+"px";a.y=dY;if(oB)oB.style.top=(dY-_p.oT)+'px';}} 
_p.vi=true;if(!d)continue;
if (_p.exp && _p.exp[0]==="peel"){
	d.style.right=0;
	} else {
	d.style.left=x+'px';
	d.style.width=w+'px';
	if(!a.nf)d.style.height=h+'px';d.style.position=pos_;
	}
d.style.zIndex=zi;_p.pf=1;if (a.ps==='G'&&_p.sE!==''&&_p.sE!=='body'){if (ts>0&& ts+top_>=this.com.fp(d).t&&!_p.fp){pos_="fixed";d.style.marginTop='0px';if(cB)cB.style.display='block';
	if(oB)oB.style.display='block';}else{_p.pf=null;if(_p.mt!=='')d.style.marginTop=_p.mt;if(cB)cB.style.display='none';if(oB)oB.style.display='none';}}_p.w=w;_p.h=h;if(a.fs!==0||(a.ps==='W'&&a.mw>1&&a.mh>1)){this.box(i,a,_p,d,b,df,w,h);if(b&&bS){if(!_p.pf)bS='none';b.style.boxShadow=bS;}}else{
let uw=w;if(_p.u160)uw=160;if(b){b.style.width=w+"px";b.style.height=h+"px";b.style.display='block';if(df){df.style.left="0px";df.style.top="0px";df.style.width=uw+"px";df.style.height=h+"px";}}}
if(!_p.end&&d.style.display!=='block'&&((a.video===1)||((!a.pr&&a.r===1)||a.rtb.r))){
d.style.display='block';if(oB)oB.style.display='block';
}
 
if(!_p.l&&a.p!==0){_p.l=1;this.fill(i);}}else{_p.vi=false;if(d&&(!this.demo)||a.ps==='A'||a.ps==='B'){if(d)d.style.display='none';if(oB)oB.style.display='none';}if("A"===a.ps&&(_cl=this.clA,_s="l"),"B"===a.ps&&a.p>0&&this.Ap!==a.p&&(_cl=this.clB,_s="r"),_cl>0)for(var s=1;s<_cl+1;s++){if("A"===a.ps){var cl_=document.getElementById("Liqwid_clone_l_"+s);cl_&&(cl_.style.display="none")}"B"===a.ps&&(cl_=document.getElementById("Liqwid_clone_r_"+s))&&(cl_.style.display="none")}}}}if(this.qs!==''&&this.lf===0){this.lf++;this.qs+="&tp="+this.sln+"";this.qs_=this.qs;return this.insert();} this.sln=0;this.qs='';if(this.lstn!==0)this.cn_++;setTimeout(function(){_this.board();},10);},di:0,d:function(e){var d=top.document.getElementById(e);return d;},bE:0,box:function(i,a,_p,d,b,df,w_,h_){if(!a.op){d.style.width=w_+'px';
if(!a.nf&&((!a.pr&&a.r===1)||a.rtb.r))d.style.height=h_+'px';if(b){b.style.width=w_+'px';}return;}if(a&&b&&d){var w=a.mw,h=a.mh,x= x=_p.x,y=_p.y,fw=a.pp.fitWidth||0,ut=a.pp.useTop||0,fL=_p.fL,_=this._;if(a.rl!==0){w=w_;h=h_;if(a.ps==="W"){h=this.ch*0.9;if(_p.mH&&h>_p.mH)h=_p.mH;w=h*(a.mw/a.mh);if(_p.mW&&w>_p.mW)w=_p.mW;if(w>this.cw*0.9){w=this.cw*0.9;if(_p.mW&&w>_p.mW)w=_p.mW;h=w*(a.mh/a.mw);if(_p.mH&&h>_p.mH)h=_p.mH;}}}if(ut!==0||fw!==0)y=0;if(fw!==0){w=w_;h=h_;if(a.ps==='A')x=d.offsetWidth-w;}if(fL==='right')x=d.offsetWidth-w;if(fL==='left')x=0;if(a.ps==='W'){x=w_/2-w/2;y=h_/2-h/2;}var bT=y+"px",bL=x+"px",uB,bR;if(_p.lP||_p.rP){if(a.ps==='A'){if(_(_p.lP[0],null))bT=_p.lP[0];if(_(_p.lP[1],null))bR=_p.lP[1];if(_(_p.lP[3],null))bL=_p.lP[3];if(_(_p.lP[2],null))uB=_p.lP[2];}
if(a.ps==='B'){if(_(_p.rP[0],null))bT=_p.rP[0];if(_(_p.rP[1],null))bR=_p.rP[1];if(_(_p.rP[3],null))bL=_p.rP[3];if(_(_p.rP[2],null))uB=_p.rP[2];}}else{if(_p.mR){bR=_p.mR;}if(_p.uB){uB=_p.uB;}}uB=null;if(a.ps==='A'||a.ps==='B'){if(parseInt(bT)<0){uB=null;bT=0;}if(parseInt(bT)+h>h_){uB="0";bT="auto";if(h_<h){uB=null;bT=0;}}}if(_p.pZ!=="static")b.style.position="absolute";if(bR){b.style.right=bR;if(this.clA>0&&a.ps==='A'){for(var s=1;s<this.clA+1;s++){var _c=document.getElementById("Liqwid_clone_b_l_"+s);if(_c)_c.style.right=bR;}}}if(uB){b.style.bottom=uB;b.style.top='auto';}else{b.style.top=bT;b.style.bottom='auto'; } 
if(!bR){b.style.left=bL;if(this.clA>0&&a.ps==='A'){for(var s=1;s<this.clA+1;s++){var _c=document.getElementById("Liqwid_clone_b_l_"+s);if(_c)_c.style.left=bL;}}}if(_p.aM!=='')b.style.margin=_p.aM;b.style.display='block';
let uw=w;if(_p.u160)uw=160;b.style.width=w+"px";if(df && (a.exp!=='peel')) {
df.style.width=uw+"px";
df.style.height=h+"px"; 
if(_p.u160){if(_p.FA){df.style.position="relative";df.style.left="70px";}}else{if(_p.FA){df.style.position="static";df.style.left="0px";}}
}}if(_p.cF||_p.Fc)this.cP(i,_p.cP,d,x,y,w,h);},cP:function(i,cP,d,x,y,w,h){var c=this.d("Liqwid_close"+i);if(c){var S=cP[0],T=cP[1],R=cP[2],B=cP[3],L=cP[4],D=cP[5];if(D){y=0;x=0;w=d.offsetWidth;h=d.offsetHeight;}c.style.width=S+'px';S=Math.floor(S/2);if(T)c.style.top=(y-S+T)+'px';if(R)c.style.left=((x+w)-S-R)+'px';if(B)c.style.top=((y+h)-S-B)+'px';if(L)c.style.left=(x-S+L)+'px';}
},cwl:function(i){var a=this.ad[i];_p=this.pp[i];if(a){_p.end=true;if(typeof a.pp.blur!=='undefined'){var bl=top.document.querySelector(a.pp.blur);if(bl)bl.classList.remove("Liqwid_"+i+"blur");}}var d=_p.d,bg=this.d('Liqwid_bg');if(bg)bg.style.display='none';if(d){d.classList.add('Liqwid_'+i+'min');setTimeout(function(){d.style.display='none'},250);}this.lmt++;},webm:function(i){var a=this.ad[i];if(a){if(a.op){_p.s=0;this.wp.x='c';if(a.video===1&&!_p.end){try{_p.player.play();}catch(e){}}}}},stl:function(i){var L='Liqwid_',d=this.d(L+'styles'),a=this.ad[i],_p=this.pp[i];if(d&&a){var at='0.2',t0=at+'s ease 1 forwards;',t1='fi '+t0, t2='out '+t0, t5='mx '+t0, t7='mn '+t0,t3='fi {from{opacity:0;}to{opacity:1;}}',t4='out {from{opacity:1;}to{opacity:0;}}',t6='mx {from{height:1px;opacity:0;}to{height:'+_p.h+'px;opacity:1;}}',t8='mn {from{height:'+_p.h+'px;opacity:1;}to{height:1px;opacity:0;}}';L+=i;d.innerHTML+='<style>.'+L+'blur {-webkit-filter:blur(0.5em);-moz-filter:blur(0.5em);-ms-filter:blur(0.5em);-o-filter:blur(0.5em);filter: blur(0.5em);} .'+L+'fadein {-webkit-animation:'+L+t1+'-moz-animation:'+L+t1+'-ms-animation:'+L+t1+'-o-animation:'+L+t1+'animation:'+L+t1+'} @keyframes '+L+t3+' @-moz-keyframes '+L+t3+' @-webkit-keyframes '+L+t3+' @-ms-keyframes '+L+t3+' @-o-keyframes '+L+t3+' .'+L+'fadeout {-webkit-animation:'+L+t2+'-moz-animation:'+L+t2+'-ms-animation:'+L+t2+'-o-animation:'+L+t2+'animation:'+L+t2+'} @keyframes '+L+t4+' @-moz-keyframes '+L+t4+' @-webkit-keyframes '+L+t4+' @-ms-keyframes '+L+t4+' @-o-keyframes '+L+t4+' .'+L+'max {-webkit-animation:'+L+t5+'-moz-animation:'+L+t5+'-ms-animation:'+L+t5+'-o-animation:'+L+t5+'animation:'+L+t5+'} @keyframes '+L+t6+' @-moz-keyframes '+L+t6+' @-webkit-keyframes '+L+t6+' @-ms-keyframes '+L+t6+' @-o-keyframes '+L+t6+' .'+L+'min {-webkit-animation:'+L+t7+'-moz-animation:'+L+t7+'-ms-animation:'+L+t7+'-o-animation:'+L+t7+'animation:'+L+t7+'} @keyframes '+L+t8+' @-moz-keyframes '+L+t8+' @-webkit-keyframes '+L+t8+' @-ms-keyframes '+L+t8+' @-o-keyframes '+L+t8+' .Liqwid_btn {display:none;position:relative; font-size:xx-small;left:0;top:1px;width:70px;} .Liqwid_save {cursor:pointer;zIndex:10;padding:1px 1px 1px 3px;letter-spacing:1px;color:#111;height:17px;width:100%;} .Liqwid_save:hover {background:#DDD;} .Liqwid_close {position:fixed; z-index:100;font-size:x-small;color:rgba(250,250,250,0.6); text-align:center; background:transparent;width:100px;right:20px;top:20px;cursor:pointer;} .Liqwid_close:hover {background:#000;} .Liqwid_close'+i+' {display:block;position:absolute;z-index:2;cursor:pointer;opacity:0.9;} .Liqwid_close'+i+':hover{opacity:1;} .Liqwid_close'+i+':active{opacity:0.7;}</style>';}},max_box_id:0,pp:[],gp:function(n){n=n.replace(/[\[]/,'\\[').replace(/[\]]/,'\\]');var x=new RegExp('[\\?&]'+n+'=([^&#]*)'),r=x.exec(top.location.search);return r===null?'':decodeURIComponent(r[1].replace(/\+/g,' '));},P:function(p,n,i){var d='',j='';d=Liqwid.gp(n),j=Liqwid.gp('board');if(j==='')j=i;if(d!==''&&(j===''||i===Math.floor(j))){d=d.replace(/@/g,'#').replace(/!/g,'%').trim();if (d.indexOf(",")>-1) {var s=d.split(','),t='';for(var q=0;q<s.length;q++){if(s[q].trim()!==''){if(t===''){t="['"+s[q].trim()+"'";}else{t+=",'"+s[q].trim()+"'";}}d=t+"]";}}if((isNaN(Math.floor(d))||d.indexOf("auto")>-1||d.indexOf("px")>-1||d.indexOf("%")>-1) &&d!=='null'&&d.indexOf("[")<0&&d.indexOf("{")<0 )	d="'"+d+"'";Liqwid.msg("Param "+i+": "+n+": "+d);eval("Liqwid.pp["+i+"]."+p+"="+d);}},_:function(a,b){var c=b;if(typeof a!=='undefined') c=a;return c;},df:function(i) {var _=this._,p=this.ad[i].pp;this.pp[i]={l:null,L:0,VP:null,j:null,fs:1,rl:0,bF:0,vast:{mode:1,vj:{},bu:''},aU:[],F:0,VF:null,Fn:0,vF:null,vFs:null,vFv:null,B:null,tF:0.2,iF:0.2,kF:0.2,r:0,R:0,Re:0,cC:0,ci:_(p.cleanIt,null),re:_(p.removeOnFill,null),dS:_(p.display,'block'),nI:_(p.ani,'fadein'),hD:_(p.hold,null),psb:false,pms:0,s:0,gs:0,x:0,w:300,h:600,y:0,vi:false,q:'',rfd:false,i:i,g:this.com.guid(),aB:_(p.adBreaks,null),mP:null,vM:null,NC:_(p.playControls,null),VC:_(p.vControls,null),pX:null,fD:_(p.fillDelay,0),end:false,cancel:false,contentVideo:null,cVN:_(p.contentVideo,null),vPaid:null,vO:_(p.video,null),player:null,paused:false,pR:_(p.print,false),req:{n:'',w:0,h:0},cn:0,vcn:0,vcn_:0,wCN:0,M:_(p.monetize,null),vc:0,vs:null,cf:null,ALn:0,AL:[],cN:_(p.caption,null),cards:_(p.cards,null),uI:_(p.userInit,null),vP:null,mO:_(p.moat,null),sE:_(p.qs,'body'),tE:_(p.anc,null),aF:_(p.adhesiveFor,null),cE:_(p.cloneEvery,Number(0)),fr:_(p.firstNode,0),uN:_(p.useNode,"document"),uF:_(p.useFrame,null),Fd:null,f:[],b:null,d:null,kW:_(p.keyWords,null),pF:_(p.pageFrequency,1),uD:_(p.useDir,null),gpt:_(p.useGPT,null),tD:_(p.withDelay,null),pA:_(p.positionSameAs,null),sH:_(p.minSpaceHeight,null),sN:_(p.screenMaxAds,null),SN:false,wT:_(p.maxTime,null),bN:_(p.bottomNode,null),pS:_(p.parentSize,null),iT:_(p.it,3),pZ:_(p.pt,'fixed'),pts:null,pf:1,fp:null,uR:_(p.useRail,0),uS:_(p.useSlot,1),oO:_(p.onOpen,null),uE:_(p.useElement,'div'),mD:_(p.mobile,0),nodeNum:_(p.nodeNum,0),lN:_(p.lastNode,0),aD:_(p.addNode,null),tP:_(p.toPage,null),aN:_(p.avoidNode,null),nB:_(p.watchNodeBelow,null),va:_(p.va,''),aA:_(p.autoAdhesive,null),rT:_(p.refreshTime,0),tR:_(p.regTime,{cnt:0, max:30,sec:3}),oA:_(p.outsideAds,0),nS:_(p.noSize,null),aC:_(p.addClass,null),aS:_(p.addStyle,null),wS:_(p.withStyle,null),nA:_(p.nodeAddStyle,null),bC:_(p.boxAddClass,null),bA:_(p.boxAddStyle,null),FA:_(p.frameAddStyle,null),rC:_(p.reqContent,null),eC:_(p.excContent,null),mL:_(p.minListing,null),CW:_(p.clientWidthNode,null),nR:_(p.nextNodeRotation,null),vA:_(p.verticalAlign,null),fP:_(p.framePosition,null),rS:_(p.reqSize,null),mW:_(p.maxWidth,null),mH:_(p.maxHeight,null),pO:_(p.position,''),oP:_(p.opacity,0),tO:_(p.top,null),bO:_(p.bottom,0),uB:_(p.minBottom,null),mR:_(p.minRight,null),lP:_(p.leftPos,null),rP:_(p.rightPos,null),width:_(p.width,'1px'),height:_(p.height,'1px'),bG:_(p.background,''),oB:_(p.overlayBackground,null),oF:_(p.overlayFilter,null),oT:_(p.overlayTop,0),fL:_(p.float,null),nO:_(p.nodeOverflow,null),mA:_(p.margin,null),pG:_(p.padding,''),aM:_(p.adMargin,'auto'),vI:_(p.vis,0.5),iV:_(p.vis,null),V:_(p.viewability,null),mU:_(p.marginBelow,null),mK:_(p.marginAbove,null),mb:_(p.mb,0),mt:_(p.mt,0),mT:_(p.marginTop,null),mB:_(p.marginBottom,null),eB:_(p.bottomLineNode,null),bB:_(p.bottomLineBlock,null),uC:_(p.bottomLineClass,null),blh:_(p.blh,''),bl:_(p.bl,'auto'),blC:_(p.blClass,null),blS:_(p.blS,null),bla:null,tN:_(p.breakNode,null),fC:_(p.fitCreative,null),aI:_(p.anyIn,"fadein"),aO:_(p.anyOut,"fadeout"),pD:_(p.pushDownLimit,0),nn:_(p.nodeNumber,0),nC:_(p.nthChild,[]),cW:_(p.maxClientWidth,0),peel_img_src:false,wH:_(p.belowNode,null),MA:_(p.inArticle,null),CM:_(p.clipMargin,null),isVPAID:0,TV:null,CV:_(p.videoNode,null),
MH:_(p.minHeight,null),pi:-1,cM:_(p.minClientWidth,0),US:_(p.useStack,null),pL:_(p.playList,null),PL:_(p.PL,null),cnd:_(p.condition,null),maxLoops:0,loop:-1,u160:false,peel:null,NW:_(p.notWith,null),exp:_(p.expand,null),stN:_(p.SendtoNews,null),kP:_(p.onEnded,null),TM:_(p.topMargin,0),sR:_(p.styleRule,null),nW:_(p.widthNode,null),eE:_(p.minTopEdge,0),cL:_(p.cloned,null),iL:_(p.infiniteLoad,null),u:top.location.href,sA:_(p.scrollableAfter,0),sS:_(p.scrollableAfterScroll,0),cV:_(p.cloneOnScroll,null),cA:_(p.dropOn,null),wC:_(p.cancelOnWord,null),cO:_(p.cancelOn,null),cD:_(p.cloneAfter,null),mC:_(p.clonesMaxNum,0),sL:_(p.scrollLog,0),cI:_(p.cloneID,null),uP:_(p.usePid,null),ia:_(p.inventoryAnalyzer,null),fw:_(p.fitWidth,0),pm:_(p.pageMargin,null),mS:_(p.setPageMargin||null),jB:_(p.jumpingBlock,null),cP:_(p.closeBtn,null),sV:_(p.skipBtn,null),pW:_(p.pageWidth,null),al:_(p.align,null),pT:_(p.passTo,null),Pt:null,pP:_(p.passToPos,-1),pU:_(p.topEdgeMargin,0),nP:_(p.topEdgeNode,null),tH:_(p.useEdgeNodeHeight,1),wN:_(p.watchNode,null),bH:_(p.bottomEdgeNode,null),lE:_(p.leftEdgeNode,null),rE:_(p.rightEdgeNode,null),wF:_(p.waitFor,null),cT:_(p.centerTo,null),sO:_(p.showOnScroll,0),sU:_(p.subScroll,null),fS:_(p.flexSize,[]),hO:_(p.hideOnScroll,0),hN:_(p.hideOnNode,null),NS:_(p.showOnNode,null),nZ:_(p.setNodeLevel,null),cF:_(p.close,null),Fc:_(p.vClose,null),ut:_(p.useTop,null),rH:_(p.railHeight,null),sP:_(p.setPage,null),sW:_(p.setPageToWidth,null),pM:_(p.pageMaxWidth,null),pN:_(p.pageWidthNode,null),fE:_(p.footer,null),SP:_(p.nodeSetParam,null),fH:_(p.addFooterHeight,null),fB:_(p.footerBackground,null),wP:_(p.pageMinWidth,null),mM:_(p.minMargin,0),cS:_(p.colSpan,null),bS:_(p.boxShadow,null),zi:_(p.zIndex,null),save:_(p.save,null),pV:null,mV:_(p.vType,null),Vp:_(p.vPosition,"bottom-left"),FL:_(p.floor,[]),vU:_(p.vTop,'0'),vB:_(p.vBottom,'0'),vR:_(p.vRight,'0'),vL:_(p.vLeft,'0'),vLN:_(p.vNodeX,null),vTN:_(p.vNodeY,null),vNB:_(p.vNodeBoard,null),vW:_(p.vWidth,"30%"),vH:_(p.vHeight,null),vbW:_(p.vbWidth,null),vbH:_(p.vbHeight,null),fN:_(p.vFitNode,null),vD:_(p.vPageNode,null),vN:null,vJ:null,vX:null,vZ:_(p.vZindex,null),Vz:_(p.pZindex,0),vS:_(p.vShadow,null),PW:_(p.playWhen,'fixed'),sM:_(p.startMuted,true),aT:_(p.aniTyme,1),aP:_(p.autoPlay,false),vTrack:[],vT:[],aL:0,tS:_(p.trackSec,0),sB:_(p.setBoard,null),PA:_(p.pageAlign,null),aT:_(p.aniTime,0.5),rN:_(p.skipNode,null),eX:_(p.excludeNode,null),cG:_(p.confiant,null),aE:_(p.aniProperty,"marginTop"),nX:_(p.afterNext,0),F:[],fn:_(p.feeds,8),fF:_(p.feedsSearch,''),fc:_(p.feedsCategory,''),fct:_(p.feedsCategories,[]),sI:_(p.adSlot,'Liqwid_feed_ad'),iS:_(p.adPlacement,null),sQ:_(p.slotsNum,0),fA:null,iN:_(p.inFeedAds,0),iNs:_(p.feedAdSlots,[]),fcd:_(p.feedsCategoryDir,[]),ft:_(p.feedsType,1),gn:_(p.feedsCells,0),dW:_(p.fdWidth,[]),dH:_(p.fdHeight,[]),tW:_(p.ftWidth,[]),qW:_(p.fqWidth,[]),fd:_(p.feedsTheme,1),fb:_(p.feedsBgColor,'transparent'),fbc:_(p.feedsBoxBgColor,'transparent'),zoomd:_(p.zoomdID,null),
fT:_(p.feedsTitleStyle,0),
fX:_(p.feedsTextStyle,0),
dA:_(p.feedsDisplay,["#7b8c72","#fff"]),
fK:_(p.feedsBoxStyle,0), 
fM:_(p.feedsPageBar,"bottom"),
FS:_(p.feedsStyle,null),
TL:_(p.feedsLogo,["#000","#DC4141"]),FP:_(p.feedsPB,["#fff","#222","#333"]),
fl:_(p.feedsLogo,1),flc:_(p.feedsLogoColor,''),fO:Number(0),iC:0,rO:_(p.runOn,null),dO:_(p.dropOn,null),lS:false}
	
var P=this.P; 
P('pB','primebid',i);
P('fn','feeds',i);
P('gn','feedsCells',i);
P('iN','inFeedAds',i);
P('iNs','feedAdSlots',i);
P('tD','withDelay',i);
P('sQ','slotsNum',i);
P('wN','watchNode',i);
P('iS','adPlacement',i);
P('ft','feedsType',i);
P('fd','feedsTheme',i);
P('sB','setBoard',i);
P('hD','hold',i);
P('fD','fillDelay',i);
P('fE','footer',i);
P('fH','addFooterHeight',i);
P('fB','footerBackground',i);
P('vO','video',i);
P('pR','print',i);
P('cN','caption',i);
P('uI','userInit',i);
P('sN','screenMaxAds',i);
P('sE','qs','body',i);
P('tE','anc',null,i);
P('aF','adhesiveFor',i);
P('cE','cloneEvery',i);
P('fr','firstNode',i);
P('uN','useNode',i);
P('sH','minSpaceHeight',i);
P('wT','maxTime',i);
P('bN','bottomNode',i);
P('pS','parentSize',i);
P('iT','it',i);
P('pZ','pt',i);
P('uR','useRail',i);
P('uS','useSlot',i);
P('oO','onOpen',i);
P('uE','useElement',i);
P('mD','mobile',i);
P('lN','lastNode',i);
P('aN','avoidNode',i);
P('aD','addNode',i);
P('nB','watchNodeBelow',i);
P('va','va',i);
P('aA','autoAdhesive',i);
P('rT','refreshTime',i);
P('tR','regTime',i);
P('oA','outsideAds',i);
P('nS','noSize',i);
P('aC','addClass',i);
P('aS','addStyle',i);
P('nA','nodeAddStyle',i);
P('bC','boxAddClass',i);
P('bA','boxAddStyle',i);
P('rC','reqContent',i);
P('mL','minListNumRec',i);
P('nR','nextNodeRotation',i);
P('vA','verticalAlign',i);
P('rS','reqSize',i);
P('mW','maxWidth',i);
P('pO','position',i);
P('oP','opacity',i);
P('tO','top',i);
P('bO','bottom',i);
P('uB','minBottom',i);
P('mR','minRight',i);
P('lP','leftPos',i);
P('rP','rightPos',i);
P('bG','background',i);
P('oB','overlayBackground',i);
P('oF','overlayFilter',i);
P('oT','overlayTop',i);
P('fL','float',i);
P('nO','nodeOverflow',i);
P('mA','margin',i);
P('pG','padding',i);
P('aM','adMargin',i);
P('vI','vis',1,i);
P('mU','marginBelow',i);
P('mK','marginAbove',i);
P('mb','mb',i);P('mt','mt',i);
P('eB','bottomLineNode',i);
P('bB','bottomLineBlock',i);
P('uC','bottomLineClass',i);
P('blh','blh',i);
P('bl','bl',i);
P('blC','blClass',i);
P('blS','blS',i);
P('tN','breakNode',i);
P('fC','fitCreative',i);
P('aI','anyIn',i);
P('aO','anyOut',i);
P('pD','pushDownLimit',i);
P('nn','nodeNumber',i);
P('cW','maxClientWidth',i);
P('cM','minClientWidth',i);
P('nW','widthNode',i);
P('eE','minTopEdge',i);
P('cL','cloned',i);
P('iL','infiniteLoad',i);
P('sA','scrollableAfter',i);
P('sS','scrollableAfterScroll',i);
P('cV','cloneOnScroll',i);
P('cA','dropOn',i);
P('cO','cancelOn',i);
P('cD','cloneAfter',i);
P('mC','clonesMaxNum',i);
P('sL','scrollLog',i);
P('cI','cloneID',i);
P('uP','usePid',i);
P('ia','inventoryAnalyzer',i);
P('fw','fitWidth',i);
P('pm','pageMargin',i);
P('mS','setPageMargin',i);
P('pW','pageWidth',i);
P('al','align',i);
P('pT','passTo',i);
P('pP','passToPos',i);
P('pU','topEdgeMargin',i);
P('nP','topEdgeNode',i);
P('tH','useEdgeNodeHeight',i);
P('bH','bottomEdgeNode',i);
P('lE','leftEdgeNode',i);
P('rE','rightEdgeNode',i);
P('cT','centerTo',i);
P('fS','flexSize',i);
P('sO','showOnScroll',i);
P('hO','hideOnScroll',i);
P('hN','hideOnNode',i);
P('nZ','setNodeLevel',i);
P('cF','close',i);
P('Fc','vClose',i);
P('cP','closeBtn',i);
P('rH','railHeight',i);
P('ut','useTop',i);
P('sP','setPage',i);
P('sW','setPageToWidth',i);
P('pM','pageMaxWidth',i);
P('pN','pageWidthNode',i);
P('wP','pageMinWidth',i);
P('mM','minMargin',i);
P('cS','colSpan',i);
P('zi','zIndex',i);
P('bS','boxShadow',i);
P('save','save',i);
P('mV','vType',i);
P('Vp','vPosition',i);
P('vU','vTop',i);
P('vB','vBottom',i);
P('vR','vRight',i);
P('vL','vLeft',i);
P('vW','vWidth',i);
P('vH','vHeight',i);
P('vD','vPageNode',i);
P('vZ','vZindex',i);
P('Vz','pZindex',i);
P('fN','vFitNode',i);
P('vS','vShadow',i);
P('PW','playWhen',i);
P('sM','startMuted',i);
P('aP','autoPlay',i);
P('tS','trackSec',i);
P('aT','aniTime',i);
P('aE','aniProperty',i);
	
 
if((this.pp[i].mV===5)&&this.pp[i].Vp==="bottom-left")this.pp[i].Vp="absolute";
},lpb_:1,lpb:function(i,a,_p){if(!this._(Lpbjs,null)||!this._(Lpbjs.que,null)){return setTimeout(function(){Liqwid.lpb(i,a,_p);},10);}
let hMP=false, vl=Liqwid.vl;	
if(vl&&(vl.match(/2:US/)||vl.match(/2:GB/)||vl.match(/2:CA/)||vl.match(/2:FR/)||vl.match(/2:DE/)||vl.match(/2:AU/)||vl.match(/2:DE/)||vl.match(/2:IT/)||vl.match(/2:ES/)))hMP=true;
if(!hMP&&(top.location.href.indexOf('akhbarak.net')>-1 || top.location.href.indexOf('santabanta.com')>-1))_p.tF=0.01;
let lF=a.rtb.cpm[_p.cn],eF=_p.tF;if(_p.FL.length===3)lF=_p.lF;if(eF<lF)eF=lF;
var PREBID_TIMEOUT=3000; var FAILSAFE_TIMEOUT=3000;var w=Math.floor(a.mw),h=Math.floor(a.mh),s=[[w,h]],di=Liqwid.page.di;if(isNaN(w)||isNaN(h)||w==0||h==0||(a.PB.length===0&&a.PBV.length===0)){Liqwid.msg('d 1');return Liqwid.demand('Primebid',false,i);}if(w===970&&h===90)s=[[w,h],[728,90]];if(w===300&&h===600){if(a.ps==="A"||a.ps==="B"){s=[[w,h],[160,600]];}else{s=[[w,h],[300,250]];}}if(w===970&&h===250)s=[[w,h],[970,90],[728,90]];if(w===728&&h===250)s=[[w,h],[728,90]];if(w===640&&h===100)s=[[w,h],[640,90],[320,50]];if(w===300&&h===250&&this.mob)s=[[w,h],[320,50]];let adUnits=[],aU=false;if(_p.aU.length!==0){aU=true;adUnits=_p.aU}if(!aU&&a.PB.length!==0){adUnits.push({code:'r'+i,mediaTypes:{banner:{sizes:s}},floors:{currency:'USD',skipRate:0,modelVersion: 'default model 1.0',schema:{fields:['mediaType']},values:{'banner':_p.tF}},bids:a.PB});}if(!aU&&a.PBV.length!==0){adUnits.push({code:'r'+i,mediaTypes:{video:{context:'instream',playerSize:s}},bids:a.PBV});}Lpbjs.que.push(function(){if(!aU&&_p.R===1){if(PWT&&typeof PWT.getUserIds=="function"){adUnits.forEach(function(adUnit){adUnit.bids.forEach(function(bid){bid["userId"]=PWT.getUserIds();});});}Lpbjs.removeAdUnit();Lpbjs.addAdUnits(adUnits);if(!aU)_p.aU=adUnits;if(a.PBV.length!==0)Lpbjs.setConfig({usePrebidCache:true,cache:{url:'https://prebid.adnxs.com/pbc/v1/cache'}});Lpbjs.setConfig({priceGranularity:"auto",userSync:{iframeEnabled: true,filterSettings:{iframe:{bidders:'*',filter:'include'}}}});Lpbjs.setConfig({userSync:{userIds:[{name:'fabrickId',params:{apiKey:'2209298679',i4:'119.236.101.168'},storage:{name:'pbjs_fabrickId',type:'cookie',expires:7}}]}});Lpbjs.setConfig({"schain":{"validation":"relaxed","config":{"ver":"1.0","complete": 1,"nodes":[{"asi":"liqwid.com","sid":di,"hp":1}]}}});}Liqwid.msg('Trying Box: '+i+' ('+a.af+') Floor: $' + _p.tF + ' Min Floor: $' + lF + ' ('+a.p+')','');Liqwid.eT.t3=Date.now();Liqwid.eT.r++;Lpbjs.requestBids({timeout:3000,bidsBackHandler:function(){
var sb=0,sh={};(function(){function forEach(responses,cb){Object.keys(responses).forEach(function(adUnitCode){var response=responses[adUnitCode];response.bids.forEach(function(bid){cb(adUnitCode,bid);});});}
var winners = Lpbjs.getAllWinningBids(),output=[];forEach(Lpbjs.getBidResponses(),function(code,bid){if(bid.mediaType==="banner"&&sb<bid.cpm){sb=bid.cpm; sh={b:bid.bidder,cpm:bid.cpm,w:bid.width,h:bid.height,adId:bid.adId,ttl:bid.ttl,r:bid.netRevenue,dt:Date.now()};} output.push({bid:bid,adunit: code,adId:bid.adId,bidder:bid.bidder,time:bid.timeToRespond,cpm:bid.cpm,msg:bid.statusMessage,rendered:!!winners.find(function(winner){return winner.adId==bid.adId;})});});forEach(Lpbjs.getNoBids&&Lpbjs.getNoBids()||{},function(code,bid){output.push({msg:"no bid",adunit:code,adId:bid.bidId,bidder:bid.bidder});});
})();
Liqwid.sh[i]=sh;
/*if(Lpbjs.initAdserverSet)return;Lpbjs.initAdserverSet=true;*/let m=false,e={},b=JSON.parse(JSON.stringify(Lpbjs.getHighestCpmBids('r'+i)));
if(b.length===0){Liqwid.msg((++Liqwid.stp), 'Box: ' + i + ' Primebid Done in ' + (Date.now() - a.bt) + 'ms; No Bid; (' + a.p + ') ', 4); 
let def = false;
if (a.af === "video") {
_p.filled=false;
return Liqwid.video.passBack(i);
} 
return Liqwid.demand("Default", false, _p.i);

}else{Liqwid.eT.t4=Date.now()-Liqwid.eT.t3;e=b[0];a.af=e.mediaType;_p.u160=false;if((a.ps==='A'||a.ps==='B')&&a.mw===300&&e.width===160)_p.u160=true;if(a.af!=='video'&&a.ps!=='A'&&a.ps!=='B'){a.rtb.w[_p.cn]=e.width;a.rtb.h[_p.cn]=e.height; _p.w=e.width;_p.h=e.height; a.mw=e.width;a.mh=e.height;}Liqwid.hb[i]={b:e.bidder,cpm:e.cpm,w:e.width,h:e.height,adId:e.adId,ttl:e.ttl,r:e.netRevenue,dt:Date.now()};Liqwid.msg((++Liqwid.stp),'Box: '+i+' Primebid Done in '+(Date.now()-a.bt)+'ms; Bid: $'+e.cpm+' '+Liqwid.pn(e.bidder) + '; Floor: ' + lF+'; ('+a.p+') ','');
	
const bd=["stop-republicans","menthol-ban","magazinesdirect","shutterstock","adameve","nra","skyn"];
	
let blc=false;if(e.meta){if(e.meta.advertiserDomains){for(let K=0;K<e.meta.advertiserDomains.length;K++){for(var k=0;k<bd.length;k++){if(e.meta.advertiserDomains[K].toLowerCase().indexOf(bd[k])>-1){blc=true;break;}}}}if(e.meta.brandName){for(var k=0;k<bd.length;k++){if(e.meta.brandName.toLowerCase().indexOf(bd[k])>-1){blc=true;break;}}}if(e.adserverTargeting&&e.adserverTargeting.hb_adomain){for(var k=0;k<bd.length;k++){if(e.adserverTargeting.hb_adomain.toLowerCase().indexOf(bd[k])>-1){blc=true;break;}}}}
if(!blc&&e.cpm&&((e.mediaType==='video'&&e.cpm>0) || e.cpm>0 /*=eF*/)) {
var d=_p.d,c='';a.rtb.n=e.bidder;a.bid=e.cpm;a.pd=1;
	if(e.mediaType!=='video') {
	Liqwid.eT.s+=e.cpm;Liqwid.eT.b++;if(e.bidder==='pubmatic'){Liqwid.eT.sP+=e.cpm;Liqwid.eT.bP++;}
	a.nf=null; 
	return Liqwid.ff(i,a,_p,c);
	} else { 
if (e.vastUrl && e.vastUrl!=="") {
a.video=1;
var videoUrl = Lpbjs.adServers.dfp.buildVideoUrl({
					adUnit: adUnits,
					params: {
						iu: 'rv'+i,
						cust_params: {
							section: 'video',  channel: 'news'
						},
						output: 'vast'
					}
				});
	
	var chr='&';if(e.vastUrl.indexOf('?')===-1)chr='?';
	_p.vast.bu=videoUrl.replace("https://securepubads.g.doubleclick.net/gampad/ads?",'');
	videoUrl=e.vastUrl+chr+_p.vast.bu;_p.vast={};_p.vast.vj={};_p.rT=-1;_p.s=0;
	return Liqwid.video.vpaidVAST(videoUrl,a,_p);
	
	} else {
	_p.R++;a.bt=Date.now();
	return setTimeout(function(){Liqwid.lpb(i,a,_p);},0);
	}
}
}else{  /*e.cpm>=eF*/ 
if (_p.tF > lF /*&& a.af!=="video"*/ ) {
Liqwid.msg((++Liqwid.stp), 'Box: ' + i + ' Highest Bid $' + e.cpm + ' lower than Floor $' + eF + ' - Passback to Lower Floor (' + a.p + ') ', 4);
for(let x=0; x<a.PB.length;x++){if(a.PB[x].bidder==="pubmatic"){a.PB[x].params.kadfloor=(parseFloat(a.PB[x].params.kadfloor)-_p.iF).toFixed(2);}}
_p.tF = Math.round((_p.tF-_p.iF)*1000)/1000;_p.R++;a.bt=Date.now();
return setTimeout(function(){Liqwid.lpb(i,a,_p);},0);}
} 
if(!e||!e.cpm||e.cpm===0){											  
Liqwid.msg('Next call in the waterfall:  '+(_p.cn+1));
console.log('demand #3') ;
Liqwid.demand('Primebid', false, i);
}
}}});});},ub:[],wb:[],hb:[],sh:[],ka:null,ke:null,ku:0,ads:[],def:[],bidder:false,a:function(_p){var s=_p.sE,n,e,eX="",a=[],_a=[],G=[],e;if(_p.uN){var t=_p.uN.split(','),uF,fD;if(_p.uF){uF=top.document.querySelector(_p.uF);if(uF){fD=uF.contentWindow||uF.contentDocument;if(fD)_p.Fd=fD.document;}} if(_p.uF&&(!uF||!fD)) return; for(let N=0;N<t.length;N++){
if(!_p.Fd){
if (!this.bidder){
_p.Fd=top.document;
} else {
if(window.location !== top.location){
_p.Fd=document; document.body.style.margin=0;  document.body.style.padding;
} else {
let sn=top.document.scripts ;

for (let s_=0;s_<sn.length;s_++) {
	if (sn[s_].attributes.src) {
	let at=sn[s_].getAttribute("src");
	let a_=this.ad[_p.i]; if(a_) {
	if (at.indexOf("&placement="+a_.p) >-1) { 
	_p.Fd =sn[s_].parentNode; 
	_p.sE=[];s=[]; _a.push(_p.Fd);
	break;
	}
	}
	}
}
}
}
}if(t[N]&&t[N]!=="document")n=_p.Fd.querySelector(t[N].trim());if(!n)n=_p.Fd;if(_p.eX)eX+=":not("+_p.eX+")";for(let y=0;y<s.length;y++){var q=[],qS=s[y].replace("*",y);if(qS!==""){let wH=_p.wH,wHN,wE="p";if(wH){wHN=document.querySelector(wH[0]);wE=wH[1];}if(wHN){let wH_=this.com.fp(wHN).t+wHN.offsetHeight,wHP=n.getElementsByTagName(wE);for(let j=0;j<wHP.length;j++){let pT=this.com.fp(wHP[j]).t;if(wH_< pT){q=Array.from(wHP).slice(j,wHP.length);break;}}}else{q=n.querySelectorAll(qS+eX);}}if(q.length!==0){let MA=_p.MA,MAl;if(MA){MAl=Math.floor(q.length*MA);if(!isNaN(MA))q=Array.from(q).slice(MAl,q.length);}if(_p.cE>0){_a.push.apply(_a,q);if(_p.nC.length!==0){let s_=[];for(let x=0;x<_a.length;x++){for(let c=0;c<_p.nC.length;c++){if(x===_p.nC[c]){s_.push(_a[x]);break;}}}_a=s_;}}else{_a=q;break;}}}}}a=_a;_a=[];if(_p.rN&&_p.rN.length>0){var rN=[]; try{rN=_p.rN.split(',');}catch(e){rN=_p.rN;}for(var u=0;u<rN.length;u++){var r=rN[u];for(var C=0;C<a.length;C++){if((a[C]===top.document.querySelector(r))||(a[C].parentNode&&((r.match(/./)&&a[C].parentNode.className.indexOf(r.replace(".",""))>-1))||(r.indexOf("#")>-1&&a[C].parentNode.id===r.replace("#","")))){/**/}else{_a.push(a[C]);}}a=_a;_a=[];}}if(a.length!==0&&_p.cards){let rt=_p.cards[0];for(var C=0;C<a.length;C++){let en=a[C].parentNode.querySelectorAll(_p.cards[1]);let rs=en.length;Liqwid.msg(' rs ' + rs + ' Math.floor(rs/rt) ' + Math.floor(rs/rt) + ' * ' + rt) ;if(Math.floor(rs/rt)!= rt)_a.push(a[C]);}a=_a;_a=[];}if(a.length!==0&&_p.rC){if(typeof _p.rC!=='object')_p.rC=[_p.rC];for(var C=0;C<a.length;C++){for(var L=0;L<_p.rC.length;L++){if(a[C].innerHTML.indexOf(_p.rC[L])>-1){_a.push(a[C]);break;}}}a=_a;_a=[];}if(a.length!==0&&_p.eC){if(typeof _p.eC!=='object')_p.eC=[_p.eC];for(var C=0;C<a.length;C++){for(var L=0;L<_p.eC.length;L++){if(a[C].innerHTML.indexOf(_p.eC[L])<0){_a.push(a[C]);break;}}}a=_a;_a=[];}if(a.length!==0&&_p.rS){for(var C=0;C<a.length;C++){if((_p.rS[0]&&a[C].offsetWidth>=_p.rS[0])||(_p.rS[1]&&a[C].offsetHeight>=_p.rS[1]&&a[C].offsetHeight<_p.rS[1]+20&&(!_p.rS[2]||a[C].offsetHeight===_p.rS[2])))_a.push(a[C]);}a=_a;}return a;},delay:false,clon:function(s,a,_p){if(this.ke)return;this.ke=1;if(this.ka)s=this.a(_p);var f=0,F,dP=false,pF=_p.pF,cn=Math.floor((s.length-_p.nn)/_p.cE)+a.k,n=_p.nn,k=a.k,o=this.ads.length;if(_p.mC>0&&cn>_p.mC)cn=_p.mC;for(var c=k;c<cn;c++){var N=n,A,el;n+=_p.cE;N=n;_p.nn=N;el=s[N];if(!el)_p.nn=N-_p.cE;dP=false;
if(a.fc!==0){F=this.pq.split(',');f=0;if(F.length>0&&F[0]!=='')for(var C=0;C<F.length;C++){if(a.p===F[C])f++;}}if(_p.cC+1>=pF||(a.fc!==0&&f+1>=a.fc)){if(this.def.length>0&& typeof this.def[0]!=="undefined")for(var D=0;D<this.def.length;D++){if(this.def[D].dP===a.p){a=this.def[D];pF=1;dP=true;break;}}}if(el){k++;if(dP){_p.cC=0;pF=this._(a.pp.pageFrequency,1)}else{_p.cC++;}this.pq+=","+a.p;A={o:o,i:i,p:a.p,af:a.af,tE:el,kn:0,k:k,x:0,n:n,d:a.d,e:a.e,r:0,j:0,end:false,s:0,cn:0,c:'',al:a.al,wait:0,pp:a.pp,pr:a.pr,v:1,fc:a.fc,ps:a.ps,op:a.op,mw:a.mw,mh:a.mh,ms:a.ms,mt:a.mt,t:a.t,ct:a.ct,cm:a.cm,rl:a.rl,pt:a.pt,cd:a.cd,ci:a.ci,cc:a.cc,tt:a.tt,g:a.g,mg:a.mg,bt:null,xl:0,bid:0,pd:null,pb:a.pb,PB:a.PB,PBV:a.PBV,FB:a.FB,fs:a.fs,btn:null,rtb:a.rtb,vi:false,video:a.video,vast:a.vast,vTr:a.vTr,_l:0,_p:a._p,_bid:a._bid,_mw:a._mw,_mh:a._mh,_t:a._t,_cc:a._cc,_ct:a.ct,_cm:a._cm,_tt:a._tt,ts:a.ts,player:null,dur:0,pa:0,pl:0,q:'',q_:''};this.ads.push(A);}}a.k=k;this.ke=null;if(this.ka){Liqwid.add(o);}},o:0,fA:null,pv:0,hT:function(t){var r=document.head.getElementsByTagName("script");for(var n=0;n<t.length;n++){var e;for(var s=0;s<r.length;s++){if(r[s].src===t[n])e=1;}if (!e)this.com.js(t[n],"head");}},tads:function(a){
let u=false;if(this.url.indexOf("liqwid-placement") >-1)u=true;//if(u)console.log(a);
for(let i=0;i<a.length;i++){let _p=a[i].pp;if(_p&&_p.notWith){let l=_p.notWith;if(l&&l.some(r=> this.pList.includes(r)))a.splice(i,1);}}this.ads=a;this.add(Liqwid.o);},add:function(o,I){if(!I)this.i=o;var a,i=0,k=0,F=[],f=0,dP=false,kW,_kW=null,tx,K,wF,wN,NW,rn=0,T=this.ads.length,_=this._;if(T===0||this.url.indexOf(this.page.d)<0||this.url.indexOf("privacy-policy")>-1){this.ka=null;return;}a=this.ads[o];if(!a){this.ka=null;return;}
kW=_(a.pp.cancelOnWord,null); if(kW){tx=top.document.body.innerHTML;K=kW.split(",");for(var k=0;k<K.length;k++){if(tx.indexOf(K[k]) > -1){_kW=1;break;}}}if(_kW)return; 
kW=_(a.pp.keyWords,null);if(kW){tx=top.document.body.innerText;K=kW.split(",");for(var k=0;k<K.length;k++){if(tx.match(K[k].trim())){_kW=1;break;}}}if(_(a.fc,0)!==0||(kW&&!_kW)){F=this.pq.split(',');for(var C=0;C<F.length;C++){if(a.p===F[C])f++;}if(f>=a.fc||(kW&&!_kW)){if(!a.pr){if(this.def.length>0&& typeof this.def[0]!=="undefined")for(var D=0;D<this.def.length;D++){if(this.def[D].dP===a.p){a=this.def[D];this.pq+=","+a.p;dP=true;break;}}if(!dP){if(o+1<T){return this.add(o+1);}else{return;}}}else{if(o+1<T){return this.add(o+1);}else{if(!this.E)this.board(1);return;}}}};i=o;if(I!==null&&Number(I)>-1)i=I;this.ad[i]=a;this.wb[i]=null;if(_(a.pp.delay,null)&&!this.delay){this.delay=1;return setTimeout(function() {a.pp.delay=null;Liqwid.add(o,i);}, a.pp.delay);}wF=_(a.pp.waitFor,null);if(wF){for(var W=0; W<wF.length;W++){if(wF[W].indexOf('anchor:')>-1){if(top.location.href.indexOf(wF[W].replace('anchor:','').replace(/\s/g,''))>-1){wN=1;}else{wN=null;break;}}else{if(top.document.querySelector(wF[W])){wN=1;}else{wN=null;break;}}}if(!wN){return setTimeout(function(){Liqwid.add(o,i);},10);}}this.o=T;var _d,d_,tE,S=[],_S=[],tn='',tB,cTN='',B='',cen=0,cen_=0,row,cell,zi=0,L='Liqwid_',id_=L+'board'+i;this.df(i);var _p=this.pp[i],sE=_p.sE,iT=_p.iT,r_=_p.uR,s_=_p.uS,mob=_p.mD,mL=_p.mL,nn=_p.nn,pos_=_p.pZ,lN=_p.lN,fN=_p.fr,cE=_p.cE,op=_p.oP,tp=Math.floor(_p.tO),an=_p.aN,va=_p.va,fL=_p.fL,rS=_p.rS,W=_p.width,H=_p.height,mW=_p.mW,ots=_p.oA,mn=_p.mA,cM=_p.cM;_p.mw=a.mw;_p.mh=a.mh;if(_p.PL&&_p.PL.length>0){a.PL=_p.PL;a.af="video";if(!_(a.pp.qs,null)){a.af="playlist";_p.cancel=1;}}if(_p.CV){_p.TV=top.document.querySelector(_p.CV);if(!_p.TV){if(o+1<T){return this.add(o+1);}else{return;}}}if(a.af=="banner")_p.display=1;if(_p.sR){var sT="",St=top.document.createElement('style');St.type="text/css";for(var r=0;r<_p.sR.length;r++) sT+=_p.sR[r].replace(/,/g,";").replace(/media/,"@media");St.innerText=sT;top.document.head.appendChild(St);}if(_p.cD && typeof _p.cD==="number"){var sec=_p.cD;_p.cD=[sec,0];}if(_p.zoomd)this.com.js('//search.zoomd.com/zoomd/SearchUi/Script?clientId='+_p.zoomd,'head');if(sE[0]==='feeds'&&!this.fA){this.fA=o;return;}_p.w=a.mw;_p.h=a.mh;_p.l=false;a.l=false;a.r=false;if(_p.tP)B=top.document.body.innerHTML;if(_p.uD){var u_=_p.uD.split(","),_u;for(var u=0;u<u_.length;u++){if(this.url.indexOf(u_[u].trim())>-1)_u=1;}if(!_u)_p.end=1;}if(_p.rO||_p.dO)this.lsn(i,_p.rO,_p.dO);if(_p.aD){for(var N=0;N<_p.aD.length;N++){var aD=top.document.createElement(_(_p.aD[N].elem,"div")),eN=top.document.querySelector(_(_p.aD[N].node,"body")),nT=_(_p.aD[N].insert,3),gS=_(_p.aD[N].cssClass,null),eS=_(_p.aD[N].cssStyle,null),eM=_(_p.aD[N].content,null);aD.id=_(_p.aD[N].id,'Liqwid_'+Date.now());if(gS)aD.classList.add(gS);if(eS)aD.style.cssText=eS.replace(/,/g,';');if(eM)aD.innerHTML=eM;if(nT===1){eN.insertBefore(aD,eN.firstChild);}else if(nT===2){eN.parentNode.insertBefore(aD,eN.nextSibling);}else if(nT===3){eN.appendChild(aD);}else{eN.parentNode.insertBefore(aD,eN);}}}if(a.sl&&a.sl.length>0){a.af="video";a.video=1;}if(a.video!==0){a.video=1;if(_p.mV===2||_p.mV===5||_p.mV===6){sE='body';iT=3;}_p.vT[i]=0;if(a.vTr)_p.vTrack=a.vTr;}if(this.bidder)iT=1;if(_p.aA){_p.va='m';va='m';}if(_p.uC)_p.blC=_p.uC;if(_p.eB)_p.bl=_p.eB;if(_p.bB)_p.blh=_p.bB;if(_p.mU)_p.mb=_p.mU;if(_p.mK)_p.mt=_p.mK;if((this.mob && mob===-1)||(mob>0&&!this.mob)/*||(cM!==0&&this.cw<=cM)*/||(ots!==0&&(a.ps==='A'||a.ps==='B'))){if(o+1<T){return sthis.add(o+1);}else{if(!this.E)this.board(1);return;}}if(an&&top.document.querySelector(an))return;tE=a.tE;if(!tE&&sE!==''){S=this.a(_p)||[];rn=S.length;if(rn===0){this.msg((++this.stp),'No Target Found for: '+a.p+' ('+i+')',4);if(o+1<T){return this.add(o+1);}else{if(!this.E)this.board(1);return;}}tE=S[nn];if(!tE)return;tn=tE.tagName;if(tn==='TABLE'&&_p.uE!='TR')tn='DIV';if(tn==='TABLE')tB=tE;if(tn==='TR'){tB=tE.parentNode;tn=tB.tagName;}if(tn==='TBODY'){tB=tE.parentNode.parentNode;tn='TABLE';} 
if(tn==='TABLE'){rn=tB.rows.length;if(rn===0){if(o+1<T){return this.add(o+1);}else{if(!this.E)this.board(1);return;}}S=tB.rows;}a.kn=rn;if(lN!==0)nn=rn-1;if(cE>0){nn=cE;if(fN>-1)nn=fN;}tE=S[nn];if(!a.op&&!a.tE&&cE>0){if(tE)_p.nn=nn;if(rn>cE&&(!mL||rn>= mL)&&!this.ka)this.clon(S,a,_p);}}if(tn==='TABLE'||(a.tE&&a.tE.tagName==='TR')){if(a.n>-1)nn=a.n;if(a.tE)tB=a.tE.parentNode.parentNode;row=tB.insertRow(nn);row.id="Liqwid_row"+i;row.style.visibility='hidden';if(!_p.cS){for(l=0;l<tB.rows.length;l++){cen_=tB.rows[l].cells.length;if(cen_>cen)cen=cen_;if(l>100)break;}_p.cS=cen;}cell=row.insertCell(0);cell.colSpan=_p.cS;tE=row.cells[0];}if(_p.gpt)a.tE=tE;var b=top.document.body,el_=this.d(id_);el=el_||top.document.createElement(_p.uE);el.id=id_;if(!el||_p.cancel){if(o+1<T){return this.add(o+1);}else{if(!this.E)this.board(1);return;}}_p.d=el; 
if(iT!==4){if(_p.mV!==2&&_p.mV!==5&&_p.mV!==6){if(va==='m'&&s_!== 0){d_= this.d('Liqwid_slot' + i);if(!d_){d_=top.document.createElement("div");d_.id='Liqwid_slot'+i;d_.style.position = pos_; if(_p.tO)d_.style.top=tp+'px';if(mn)d_.style.margin=mn;d_.appendChild(el);}el=d_;if(!el){if(o+1<T){return this.add(o+1);}else{if(!this.E)this.board(1);return;}}if(r_){_d = this.d('Liqwid_rail'+i);
if(_p.cN&&!_p.sB)_p.sB=1;if(!_d){_d=top.document.createElement("div");_d.id='Liqwid_rail'+i;_d.style.position='relative';tE.appendChild(_d);_d.appendChild(el);el=_d;}}}}if(el.id==='Liqwid_board'+i){if(_p.sB)this.sD(i,el,null,a,_p);/*el.style.overflow='hidden';*/}if(!_d){try{if(iT===1){tE.insertBefore(el,tE.firstChild);}else if(iT===2){if(_p.nX===1){if(tE.nextSibling){tE.nextSibling.after(el);}else{tE.after(el);}}else{tE.parentNode.insertBefore(el,tE.nextSibling);}}else if(iT===3){tE.appendChild(el);}else{tE.parentNode.insertBefore(el,tE);}
a.tE=tE;	
if(!tE.tagName.match(/LIQWID-/) && a.PL&&a.PL.length>0){a.sl=_p.PL[0].u;a.af="video";a.video=1;}
if(_p.pL){for(let j=0;j<this.ads.length;j++){if (this.ads[j].p===_p.pL){a.PL=this.ads[j].pp.PL;a.sl=a.PL[0].u;this.ads[j].af="playlist";this.ads[j].cancel=1;break;}}} 
//console.log(i,a.af) ;
if(tE&&a.PL&&a.PL.length!==0 &&tE.tagName.match(/LIQWID-/)){
let v_=tE.getAttribute("video");if(v_&&v_!=='') {for(let v=0;v<a.PL.length;v++){if(a.PL[v].v==v_){a.tE.v=v_;a.sl=a.PL[v].u;_p.vcn=v;
let kv='',video_id=a.PL[v].oid;
 
if (Liqwid.url.match(/autoproyecto/)) kv=Liqwid.autoproyecto(null,video_id);
if(_p.cp)kv=_p.cp;						
if (a.PL[v]&&a.PL[v].k&&a.PL[v].k.length>0)kv=a.PL[v].k;
if(kv&&kv.length>0){	
Liqwid.KV = kv;
Liqwid.msg('Cust Params (video: '+video_id+')',kv.replace(/&/g,', '),4);	
}
break;
}}}}}catch (e){this.msg((++this.stp),'No Target Found for: '+a.p+' ('+i+')',4); /* */
}}else{if(_d!==el)_d.appendChild(el);}}else{if(tE){if(_p.nA){if(_p.nA[0][1].match(/margin-top:/))this.bgad=parseInt(_p.nA[0][1].replace("margin-top:","").replace(" ",""));}if(((_p.cM===0&&this.bgad>0)||this.cw>=_p.cM)&&this.fs){tE.style.backgroundImage="url('"+ a.cc +"')";tE.style.backgroundRepeat="no-repeat";tE.style.backgroundAttachment="fixed";if(a.ct!='' && a.exp!=='peel'){var s=top.document.createElement('style');document.head.appendChild(s);s.innerHTML=sE[0]+" {cursor:pointer;} "+ sE[0]+" > * {cursor:default;}";if(_p.tP){cTN="<style>"+sE[0]+" > * {cursor:default;}</style><div id='Liqwid_bg_click' style='position:fixed;z-index:1;width:"+this.cw+"px;height:"+this.ch+"px;top:0;left:0;cursor:pointer;' onclick='Liqwid.click("+i+");'></div>";}else{tE.addEventListener('click',function(e){if (e.stopPropagation){e.stopPropagation();}else{e.cancelBubble=true;}if(e.target===this){Liqwid.click(i);}});}}el=tE;} 
if(_p.tP){el.innerHTML=cTN+"<div id='Liqwid_page' style='position:relative;z-index:2;cursor:default;"+_p.tP.replace(/,/g,';')+"'>"+B+"</div>";history.scrollRestoration="manual";top.scrollBy({top:0,left:0,behavior:'smooth'});}}}
el.setAttribute("data-placement",a.p);if(_p.wS)el.style.cssText +=';'+_p.wS.replace(/,/g,';');
if(!_p.al && iT!==4 && a.ps!=='A' && a.ps!=='B')_p.al='center'; 
if(_p.al)el.setAttribute("align",_p.al);
if(iT===4&&tE&&this.cw>=_p.cM&&this.fs)this.ss(i);if(a.ps === 'A'||a.ps === 'B'||a.ps === 'G'||a.ps === 'H'||a.ps === 'W'){el.style.display='none';}if(b&&!this.d(L+'styles')){var s=top.document.createElement('div');s.id=L+'styles';b.appendChild(s);}this.stl(i);if(!a.op){if(_p.nO){var pn;if(_p.nO[0]&&_p.nO[0]==='parent'){pn=el.parentNode;}else{if(_p.nO[0])pn=top.document.querySelector(_p.nO[0]);}if(pn&&_p.nO[1])pn.style.overflow=_p.nO[1];}}
if(_p.fE&&_p.fH) {var fo=top.document.querySelector(_p.fE),fe=this.d('Liqwid_fex');if(fo&&!fe){fe=top.document.createElement("div");fe.id='Liqwid_fex';fe.style.width='100%';fe.style.position='relative';fe.style.height=_p.fH+'px';if(_p.fB)fe.style.background=_p.fB;fo.appendChild(fe);}}if(_p.FL.length===3){_p.lF=_p.FL[1];_p.tF=_p.FL[0];_p.kF=_p.tF;_p.iF=_p.FL[2];}if(_p.ci&&!_p.tD&&_p.d)this.DC(_p.ci,_p.d);
//console.log(JSON.stringify(a)) ;
T=this.ads.length;if(o+1<T){this.add(o+1);}else{this.ka=null;if(!this.E)this.board(1);}},ap:0,fill_:0,c1:"<!DOCTYPE html><html> <head><title>LIQWID Ad</title>",c2:"<style type='text/css'>html {overflow:hidden;font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;} body {margin:0px;padding:0;background-color:transparent;height:100%;} img {border:0;width:100%;}</style></head><body>",c3:"</body></html>",vC:function(_p,a,c){c=c.replace(/%27/g,"'").replace(/&amp;/g,"&").replace("[WIDTH]",_p.w.toFixed()).replace("[HEIGHT]",_p.h.toFixed()).replace("[DO_NOT_TRACK]",'0').replace("[GDPR]",'0').replace("[GDPRCS]",'').replace("[IP_ADDRESS]",'119.236.101.168').replace("[USER_AGENT]",'Mozilla%2f5.0+(Macintosh%3b+Intel+Mac+OS+X+10.15%3b+rv%3a52.0)+Gecko%2f20100101+Firefox%2f52.0').replace("[PAGEURL]",encodeURIComponent(this.url)).replace("[DOMAIN]",encodeURIComponent(document.domain)).replace("[ENCODED_URL]",encodeURIComponent(this.url)).replace("[CONTENT_ID]",a.p.toFixed()).replace("[CONTENT_TITLE]",'').replace("[CONTENT_LENGTH]",'').replace("[CONTENT_URL]",encodeURIComponent(this.url)).replace("[KEYWORDS]",encodeURIComponent(this.keywords)).replace("[CACHEBUSTER]",Date.now());return c;},
lsn:function(i,p,s){top.addEventListener(p,function(e){Liqwid.pp[i].lS=true;},false);top.addEventListener(s,function(e){Liqwid.pp[i].lS=false;},false);},
fill:function(i){var a=this.ad[i],_p=this.pp[i],d=_p.d,c="";if(a.af==="playlist")return;
if((_p.gpt&&_p.gpt>_p.gs)||(_p.tD&&_p.tD>_p.gs)) return setTimeout(function(){Liqwid.fill(i);},1000);
if(a&&_p&&d){if((!_p.M&&!_p.vi)||a.p===0){_p.l=false;return;} if(a.l)return;a.l=1;this.msg((++this.stp), 'Fill Box: '+i+' ('+a.p+')');for(let n=0;n<this.i+1;n++){let a_=this.ad[n];if(a_){if(a_.ps==='A'){this.ap=a_.p;break;}}}
if (_p.fC) {c1 += '<scr' + 'ipt>window.onresize=function(){var f=parent.document.getElementById("Liqwid_frame'+i+'_'+_p.cn+'"); if(f){f.style.height=top.document.offsetHeight+"px";}}</scr' + 'ipt>';}
if (_p.mO) c1 += '<scr' + 'ipt src="https://z.moatads.com/' + _p.mO + '/moatad.js#moatClientLevel1=' + a.cd + '&moatClientLevel2=' + a.p + '&moatClientLevel3=' + a.pt + '&moatClientLevel4=' + a.ci + '"></scr' + 'ipt>';
if (a.pr) { 
Liqwid.msg('d 4');
this.demand(a.rtb.m[0],1,i);
} else {
if (a.video!==0) {	
c=this.vC(_p,a,a.cc); 
if(!_p.NS&&(a.sl.length>0||_p.M)){_p.vs=1;return Liqwid.video.init(a,_p);
	}
} else {
if(a.t!==4||a.cc.indexOf("-imglink")>-1)c=this.c1+this.c2+a.cc+this.c3;
	// console.log('ff 0');
	Liqwid.ff(i,a,_p,c);
	//setTimeout(function(){Liqwid.ff(i,a,_p,c);},0);
} 

}
if(this.fill_!==1)this.fill_=1;
}},rtb_call:function(i,a,_p){ 
var d=_p.d,n=_p.cn; 
if (typeof a.rtb.c[n] === 'undefined') return;
_p.j = null;
var N=a.rtb.n; if((a.ps!=='A'&&a.ps!=='B')&&(N==='B'||N==='M'))a.pd=1;
if (a.rtb.w[n] !== 0) a.mw = a.rtb.w[n]; 
if (a.rtb.h[n] !== 0) a.mh = a.rtb.h[n];
this.rtb_flag = true;
if (N !== 'X') {
_p.req.n = N;
_p.req.w = a.mw;
_p.req.h = a.mh;
var c = "<!-- Call #" + n + "-" + N + " -->";
if (N!=='L'&&N!=='V'&&N!=='N'&&N!=='M'&&N!=='A'&&N!=='K'&&N!=='B'&&N!=='G'&&N!=='D'&&N!=='F') {
c+="<scr"+"ipt>var LIQWID_SLOT=" + i + ",LPB=0,L_W=" + a.mw + ",L_H=" + a.mh + ",L_C=" + n + ",L_CPM=" + a.rtb.cpm[n] + ",n=0,d=(function(){var _m=window.MutationObserver||window.WebKitMutationObserver,e=window.addEventListener; return function(obj,callback){if(_m){var obs=new _m(function(m,o){if( m[0].addedNodes.length||m[0].removedNodes.length)callback();});obs.observe(obj,{childList:true,subtree:true});}else if(e){obj.addEventListener('DOMNodeInserted',callback,false);obj.addEventListener('DOMNodeRemoved',callback,false);}}})();d(document,function(){top.Liqwid.check_ad(" + i + "," + n + ",++n);});</scr"+"ipt>";
 }
} 
		
if (a.af==="video" || (a.rtb.c[n].length>5 && a.rtb.c[n].substring(0,5)==='VIDEO')) {
_p.vPaid=1;
let vtp=0;
if(a.rtb.c[n].length>5 && a.rtb.c[n].substring(0,5)==='VIDEO')a.rtb.c[n] = a.rtb.c[n].substring(5,a.rtb.c[n].length);

if(a.rtb.c[n].length>4 && (a.rtb.c[n].substring(0,4).toLowerCase()==='http' || a.rtb.c[n].substring(0,2).toLowerCase()==='//' || a.rtb.c[n].indexOf('&prebid=1') >-1|| a.rtb.c[n].indexOf('&primebid=1') >-1)) vtp=1;

if (vtp===0) { 
	
let xmlTxt = this.com.rnl(a.rtb.c[n],i,a.p,4);
	
let xmlDoc = Liqwid.video.parseXml(xmlTxt) ;
let xmlToJson = Liqwid.video.xmlToJson(xmlDoc) ;
var vastJson = Liqwid.video.setVast(xmlToJson,a,_p) ;
	
if(vastJson &&((vastJson.src && vastJson.src!=="")||(vastJson.mf && vastJson.mf.src!=="")))  { 
a.video=1; a.pd=1; _p.vast.mode=1;
let ct=	a.rtb.vast[_p.cn].ct;if(ct)a.ct=ct;a.rtb.vast[n]=vastJson; Liqwid.msg("init 1" ); 
return Liqwid.video.init(a,_p);

    } else {Liqwid.msg('d 5');
return Liqwid.demand("Default",false,i);
	}
} else if (vtp===1 && a.rtb.c[n]!=='') {
a.rtb.vast[n]={};
let u=a.rtb.c[n].replace("[video_duration]","180").replace("[page_url]",encodeURIComponent(this.url)).replace("[width]",a.mw.toFixed()).replace("[height]",a.mh.toFixed()).replace("[cb]",Date.now()); 
u=this.vC(_p,a,u);
if (u.match(/liqwid-d.openx./)) {
u+="&url="+encodeURIComponent(this.url)+"&cb="+Date.now()+"&ua="+encodeURIComponent(navigator.userAgent)+"&vht="+a.mh+"&vwd="+a.mw;
}
_p.AL=u.split('|');_p.ALn=0; 
_p.vast={};_p.vast.vj={};
	if (_p.AL[0].indexOf("&prebid=1")>-1 || _p.AL[0].indexOf("&primebid=1")>-1) {
	_p.R++;a.bt=Date.now();
	return Liqwid.lpb(_p.i,a,_p);
}
this.video.vpaidVAST(_p.AL[0],a,_p,a.rtb.m[_p.cn]);
}
}
		
if (N==='V'){
_p.w=d.offsetWidth;	_p.h=Math.floor(_p.w*(a.mh/a.mw));
var v=a.rtb.c[n].split('|'),v_="";for(var o=0;o<v.length;o++){ 
if (v[o]!=='') {	
var V=this.vC(_p,a,v[o].trim());
if (v_=="") {v_="'"+V+"'";}else{v_+=",'"+V+"'";}}}a.video=1;c=this.mc.replace(/LIQWID_video_VAST/,"["+v_+"]");}else{
var T=a.rtb.c[n].split('@'),C=T[0];if(T.length>1)c+=T[1];
a.video=0;if(N==='O')C='<div style="width:100%" align="center">'+C+'</div>';if(N==='N'||a.nf)c=C;else c=this.c1+c+this.c2+C+this.c3; 
}
if (N==='L'){a.t=a._t;a.ct=a._ct;a.cm=a._cm;a.tt=a._tt;c= this.c1+this.c2+a._cc+this.c3;}
var _n=this.pn(N); this.msg((++this.stp), 'Box ' + i + ': Call '+(_p.cn+1)+' Demand Tag Request: '+_n+'; Size: '+(a.rtb.w[_p.cn]+'x'+a.rtb.h[_p.cn])+' ('+a.p+')');	
if(a.af!=='video' && (!a.pr||N ==='X'||N==='L'||N==='B'||N==='G'||N==='D'||N==='O'||N==='M'||N==='F'))Liqwid.ff(i,a,_p,c);
},
DC: function(c,d) {for(let g=0;g<c.length;g++){let e=c[g];if(e.trim()==="parentNode"){if(d){let E = d.parentNode.children;for(let m=0;m<E.length; m++){if(E[m]&&!E[m].id.match('Liqwid_')){	E[m].parentNode.removeChild(E[m]);m--;}}}}else{let r=document.querySelector(e.replace("*",g));if(r)r.parentNode.removeChild(r);}}
},eS:function(b){var S=Array.prototype.slice.call(b.getElementsByTagName("script"));for(var g=0;g<S.length;g++){
if(S[g].src!=""){var t=document.createElement("script");t.src=S[g].src;t.setAttribute('type','text/javascript');t.setAttribute('async','async');b.innerHTML=b.innerHTML.replace(S[g].outerHTML,'');b.appendChild(t);}else{ eval(S[g].innerHTML);}}},	
bX:function(i,w,h,_p){var s='width:'+w+';padding:0;',b=top.document.createElement("div");try{if(w!=='auto'&&w.indexOf('px')>-1)s+='px';}catch(e){}if(_p.w===300&&_p.h===250)s='height:250px;';b.id="Liqwid_box"+i;b.align="center";b.className="liqwid-box-"+i;
if(_p.aM!=='')s+='margin:'+_p.aM+';';if(_p.sB){if(Number(_p.sB)>1){var u='//www.liqwid.net/ads/default/'+w.replace("px","")+'x'+h.replace("px","");if(Number(_p.sB)>2)u+='_'+_p.sB.toFixed();u+='.gif';s+='background-image:url(\''+u+'\');background-repeat:no-repeat;height:'+h+';';}}else{s+='display:none;';}if(_p.cT){var l,c;if(_p.cT==='viewport'){l=this.cw/2-w/2-this.com.fp(_p.d).l;c=1;}else{c=top.document.querySelector(_p.cT);if(c)l=this.com.fp(c).l+c.offsetWidth/2-w/2;}if(c)s+='position:relative;left:'+l+'px;';}b.style.cssText=s;if(_p.bC){for(var n=0;n<_p.bC.length;n++)b.classList.add(_p.bC[n]);}return b;},ff:function(i,a,_p,c){ // console.log(a);
if(a.af==="video"&&a.mw===320){a.mh=240;_p.h=240}
if(a.af==="video"&&a.mw===728){a.mh=546;_p.h=546}
a.rtb.s=1;var F='',N=a.rtb.n,im,f,f_,b,B,w=a.mw+'px',h=a.mh+'px',r;
if(a.pr&&a.rtb)a.rtb.sT[_p.cn]=Date.now();if(!a.fs&&a.video!==0){w='100%';h=Math.floor(_p.d.offsetWidth*0.65)+'px';}	
if(!_p.b)_p.b=this.bX(i,w,'auto',_p);if(_p.mV&&_p.mV>0){var _b=top.document.createElement("div");_b.id="Liqwid_bg"+i;_b.style.position="fixed";_b.style.display="none";_b.style.height="1px";
//_b.style.transition="height 0.5s ease-out";
_p.B=_b;top.document.body.appendChild(_b);_b.appendChild(_p.b);}else{_p.d.appendChild(_p.b);}b=_p.b;if(a.nf){c=this.com.rnl(c,i,a.p,1);b.innerHTML=c;this.eS(b);}else{if(a.t===2&&a.ct!==''){var cT=this.d('Liqwid_cT'+i);if(!cT){cT=top.document.createElement("div");cT.id='Liqwid_cT'+i;cT.style.cssText='position:absolute;z-index:1000003;width:'+w+';height:'+h+';cursor:pointer;';cT.addEventListener('click',function(){Liqwid.click('+i+');},false);b.appendChild(cT);}} f=_p.f[_p.cn];
if(_p.exp && _p.exp[0]==="peel"){_p.d.id="Liqwid_peel_box"+i; _p.b.id="Liqwid_peel_ad"+i;_p.d.style.cssText="position:absolute; right:0; top:0; z-index:1000;width:100px;height:100px;overflow:hidden;";_p.d.innerHTML=a.cc.replace(/~/g,i).replace(/`/g,_p.cn);_p.f[_p.cn]=top.document.getElementById("Liqwid_frame"+i+'_'+_p.cn);f=_p.f[_p.cn];
	if(f)f.onload=function(){setTimeout(function(){ 
	Liqwid.peel_rnd(_p);
	},100);};
if(a.spT!=='') { 
let _f2,f2=top.document.getElementById("Liqwid_frame_ps"+i); if(f2)_f2=f2.contentWindow||f2.contentDocument;if(_f2 && _f2.document){_f2=_f2.document;
let spT=this.com.rnl(a.spT,i,a.p,4);
_f2.open();_f2.write(spT);_f2.close();}}	
} else {
//if (a.af==='video'&&f&&_p.ALn>0) {f.remove();_p.isVPAID=0;a.dur=0;a.rtb.r=false;a.rtb.s=0;a.s=0;a.bid=0;_p.psb=true;_p.cf=null; }

if(!f||a.af==="video"){f=top.document.createElement("iframe");f.frameBorder="0";f.style.cssText='border:none;display:block;width:'+w+';height:'+h+';';
if(!_p.mV&&a.video!=="1"&&a.af!=="video")f.style.cssText+='transition:height 1s ease-in-out .25s;';if(_p.fP)f.style.cssText+='position:'+_p.fP+';let:0;top:0;';f.scrolling="no";if(a.t===4){if(a.cc.indexOf("-imglink") >-1){a.cc=a.cc.replace("-imglink","");im=1;}else{f.src=a.cc;}}if(a.t===2)f.src=a.cc;
	f.allow="fullscreen";f.marginWidth="0";f.marginHeight="0";f.vspace="0";f.hspace="0";f.allowTransparency="true";f.id='Liqwid_frame'+i+'_'+_p.cn;b.appendChild(f);
if(a.af==="video"){f.id+='_'+_p.Fn;f.style.display="none";f.style.position="absolute";_p.VF=f;} _p.f[_p.cn]=f;}}if(f&&!_p.ia&&a.t!==2&&(a.t!==4||im)){f_=f.contentWindow||f.contentDocument;if(f_&&f_.document)f_=f_.document;
if(f_){_p.psb=false;if(a.pr&&a.pd&&Object.keys(this.hb[i]).length>0&&this.hb[i].adId&&a.af!=="video"){Liqwid.ss(i);if(_p.d&&_p.MH)_p.d.style.minHeight=_p.MH+"px";Lpbjs.renderAd(f_,this.hb[i].adId);return;} else {c=this.com.rnl(c,i,a.p,3);
if(Liqwid.url.match(/autoproyecto/) && a.af!=='video' && c.match(/googletag/)) {let kv=Liqwid.autoproyecto(1);Liqwid.msg('Cust Params (display: '+a.p+')',kv, 4);c=c.replace('//cust_params', kv);} 
f_.open();f_.write(c);f_.close();}}}}
if(a.tt!==''){f=this.d('Liqwid_framet'+i);if(!f){var fT=document.createElement("iframe");fT.style.cssText='diplay:none;';fT.id='Liqwid_framet'+i;b.appendChild(fT);}if(f){f_=f.contentWindow.document||f.contentDocument;if(f_){f_.open("text/html","replace");f_.write(a.tt);f_.close();}}}
if(N!=='O'&&N!=='F'){
if(!_p.ia&&a.af!="video"&&((!N||N ==='X'||N==='L'||N==='B'||N==='G'||(N==='D'&&!_p.vPaid))||(a.video!==1||a.cc.match(/YouTubeVideoPlayer/))  ) )this.ss(i);
}
	},check_ad:function(i,n,r){ 
var a=this.ad[i],_p=this.pp[i],t,f=_p.VF||_p.f[_p.cn],d,d_,f_,fw_=0,_=this._,_n;if(a&&f&&_p){ 
_n=_(a.rtb.n,null);if(_n!=='O')return;if(!_n||_p.cf||_p.cn!==n||a.p===0||_n==='M'||_n==='B'||_n==='A'||_n==='K'||(_n==='F'&&r<4))return;   
d=f.contentWindow.document||f.contentDocument;if(d){if(t){t=d.body.outerHTML;if(!t||t===''||_n==='T') return;}if (_n==='O') {f_=d.querySelector('iframe[id^="ox_"]');if(f_){a.pd=1;a.mw=f_.width;a.mh=f_.height;} else {return;}}else if(_n==='P') {if(r<4) return;if(t.match(/Liqwid.demand/)) return;} else if (_n==='E') {if(r>-1)return;}else if (_n==='N'||_n==='S'){f_=d.getElementsByTagName("iframe");for (var j=0;j<f_.length;j++){var w_=f_[j].width||Math.floor(f_[j].style.width),h_=f_[j].height||Math.floor(f_[j].style.height);if(isNaN(w_))w_=0;if(isNaN(h_))h_=0;if(w_>=a.mw&&h_>=a.mh)fw_++;}
if(fw_===0)return;}if(!_p.cf){var ms=1;if(_n==='D')ms=1000;if(_p.hD){for(var h=0;h<_p.hD.length;h++){if(_p.hD[h][0]===_n){ms=_p.hD[h][1];break;}}}_p.cf=1; this.ss(i);	
//return setTimeout(function(){if(!_p.psb&&!_p.end){Liqwid.ss(i);}},ms);
}}}},NA:null,nA:function(s){for(var n=0;n<s.length;n++){var d=top.document.querySelectorAll(s[n][0]),x;if(s[n][2]){if(s[n][2]==='*'){x=null;}else{x=d[s[n][2]];}}else{x=d[0];}if(x&&s[n][2]){x.style.cssText+=';'+s[n][1].replace(/,/g,';');}else{for(var R=0;R<d.length;R++){if(d[R]){d[R].style.cssText+=';'+s[n][1].replace(/,/g,';');if(typeof s[n][3]==="undefined")this.NA=1;}}}}},sD:function(i,d,s,a,_p){_p.d=d;var D=s||d,zi=_p.zi||this.page.z,r=this.d('Liqwid_row'+i);
//if(zi===255)zi=this.com.z()+1;

if(_p.dS!=='none'&&_p.nI&&!_p.NS)d.classList.add("Liqwid_"+i.toFixed()+_p.nI);if(_p.mV===1||_p.mV===2||_p.mV===5||_p.mV===6)zi=-1;
if(zi)D.style.zIndex=zi;
_p.zi=zi;if(_p.bG)D.style.background=_p.bG;if(_p.mT)D.style.marginTop=_p.mT;if(_p.mB)D.style.marginBottom=_p.mB;if(_p.mA)D.style.margin=_p.mA;if(_p.pG)D.style.padding=_p.pG;if (_p.dS)D.style.display=_p.dS;if(!_p.nS&&_p.vA){d.style.top=_p.vA+'%';d.style.transform='translateY(-'+_p.vA+'%)';}
if(!a.exp||a.exp!=="peel")d.style.overflow='visible';
if(r)r.style.visibility='visible';if(_p.sU)this.com.ms(d,_p.sU,i);if(_p.nR&&d.nextSibling){d.nextSibling.classList.add('Liqwid_'+i+'fadeout');}if(_p.sB&&!_p.b){_p.b=this.bX(i,'auto','auto',_p);d.appendChild(_p.b);}if(_p.cN){var c=top.document.createElement("div"),C=_p.cN[1]||2,S=_p.cN[2]||null;c.innerHTML=_p.cN[0];c.style.textAlign='center';if(C===1){c.style.position='relative';d.prepend(c);}else if(C===2){c.style.position='relative';d.parentNode.insertBefore(c,d);}else if(C===3){c.style.position='relative';d.appendChild(c);}else if(C===4){c.style.position='absolute';b.appendChild(c);}if(S)c.style.cssText+=S.replace(/,/g,';');_p.cN=null;}},
ss:function(i,vp,dur){
//console.log('ss ' + i );
var a=this.ad[i],_p=this.pp[i],d=_p.d,b=_p.b,f=_p.VF||_p.f[_p.cn],s=this.d('Liqwid_slot'+i),oB=_p.B,_=this._,s_=null;_p.rfd=false;//_p.end=false;
if(d)d.style.display="block"; /*
if(a.rtb&&a.rtb.n&&a.rtb.n.length>0){
for(let F=0;F<a.rtb.n.length;F++){
if(F!==_p.cn&&_p.f[F])_p.f[F].style.display="none";	
}
} */
//if(oB && a.video===0)oB.style.display="block"; 
//if(_p){_p.sL=this.com.ts();if(_p.end)return;}
if(_p.cVN){let cVN=document.querySelector(_p.cVN);if(cVN)_p.contentVideo=cVN;}
if (_p.TV&&d) { 
_p.w=_p.TV.offsetWidth;
_p.h=_p.TV.offsetHeight;
if(_p.w>0&&_p.w>=a.mw&&_p.h>0&&_p.h>=a.mh){	
d.style.top=this.com.fp(_p.TV).t+'px';						   
d.style.left=this.com.fp(_p.TV).l+'px';								   
d.style.width=_p.w+'px';
d.style.height=_p.h+'px';
if(f)b.style.display="block";if(b)b.style.display="block"; 
	}
}
_p.j=1;a.r=1;if(_p.stN)_p.stN.r=0;if(a.video!==1&&a.pr&&a.pd){_p.fs=a.fs;_p.rl=a.rl;a.fs=1;a.rl=0;}if(b&&d){if(a.exp=='peel'){
if(a.pd) {a.mw=300;a.mh=250;if(f){f.style.float="right";f.style.width="300px";f.style.height="250px";}}
this.peela(_p);}
if(_p.gpt){_p.gpt=null;if(a.tE)a.tE.parentNode.removeChild(a.tE);}
if(_p.re){for(let r=0;r<_p.re.length;r++){let re=top.document.querySelector(_p.re);if(re)re.remove();}}

if(a.pr){var eT=(Date.now()-a.rtb.sT[_p.cn])||0,_n=_(this.pn(a.rtb.n),'');if(eT!==0)eT='in '+eT.toFixed()+'ms';this.msg((++this.stp),'Box '+i+': Renders Ad: '+a.p+' '+eT+' Call: '+(_p.cn+1)+' '+_n+' ('+_p.w+'x'+_p.h+')',2);} else {this.msg((++this.stp),'Box '+i+': Renders Ad: '+a.p+' ('+_p.w+'x'+_p.h+')',2);}if(a.rtb.m[_p.cn]==='O'&&f&&a.ps!=='A'&&a.ps!=='B'){var oD=f.contentWindow.document||f.contentDocument;if(oD){var f_=oD.querySelector('iframe[id^="ox_"]');if(f_){a.rtb.w[_p.cn]=f_.width;a.rtb.h[_p.cn]=f_.height;}}}if((a.ps==='A'||a.ps==='B')&&a.mw===300&&a.rtb.w[_p.cn]===160)_p.u160=true;if(a.fs!==0&&a.pr){if(!_p.u160){a.mw=a.rtb.w[_p.cn];a.mh=a.rtb.h[_p.cn];}
if(f&&!a.nf){if(a.pd&&a.mh===90)d.style.height=a.mh+'px';f.style.height=_p.h+'px';let uw=_p.w;if(_p.u160)uw=160;f.style.width=uw+'px';}
}if(typeof a.rtb.x!=='undefined'){var nr=_(a.rtb.x[_p.cn],0);if(nr===1)a.x=1;}
if(a.af!=="video"){
var S=b.getElementsByTagName("iframe");for(var g=0;g<S.length;g++){S[g].style.display="none";}if(_p.Re>0) {S=b.getElementsByTagName("ins");for(var g=0;g<S.length;g++){S[g].style.display="none";S[g].innerHTML="";}S=b.getElementsByTagName("div");for(var g=0;g<S.length;g++){S[g].style.display="none";S[g].innerHTML="";}}
}
if(f)f.style.display='block';b.style.display='block';b.style.width=_p.w+'px';var aC=_p.aC,aS=_p.aS;if(aC){for(var n=0;n<aC.length; n++)d.classList.add(aC[n]);}if(aS){try{d.style.cssText +=';'+aS.replace(/,/g,';');} catch(e){} }if(_p.bA)b.style.cssText+=';'+_p.bA.replace(/,/g,';');if(_p.nA&&!this.NA&&_p.vi&&((!a.pr&&a.r===1)||a.rtb.r))this.nA(_p.nA);if(_p.ci&&_p.tD)this.DC(_p.ci,_p.d);
if(a.rl!==0&&d.parentNode&&!a.nf){_p.w=d.parentNode.offsetWidth;if(_p.mW&&_p.w>_p.mW)_p.w=_p.mW;_p.h=Math.floor(_p.w*(a.mh/a.mw));if(_p.mH&&_p.h>_p.mH)_p.h=_p.mH;}else{if(_p.mW)d.style.maxWidth=_p.mW+'px';_p.w=a.mw;_p.h=a.mh;}_p.s=0;if(a.pr){a.rtb.r=true;if(a.ps==='A')this.Ap=a.p;if(a.ps==='B')this.Bp=a.p;}if(vp)_p.player=vp;if(dur)a.dur=dur;if(a.pr||((a.ps!=='A'&&a.ps!=='B')||((a.ps==='B'&&this.ap===0)||(a.ps!=='B'||(this.ap!==0&&a.p!==this.ap)))))this._vq(i,a);if(!_p.sB)this.sD(i,d,null,a,_p);if(_p.uI) {var cb=top.document.createElement("div");cb.style.cursor='pointer';cb.id='Liqwid_pb'+i;cb.style.width="100%";cb.style.height="100%";cb.style.position='absolute';cb.style.left='0';cb.style.top='0';cb.style.background='transparent';cb.style.zIndex=100;cb.innerHTML='<div style="width:106px;height:106px;position:relative;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);opacity:0.7;"><svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve"><style type="text/css"> .st0{fill:rgba(1,20,17,0.2);stroke:#02B79E;stroke-width:4;} .st1{fill:#02B79E;stroke:#0EAA4B;stroke-miterlimit:10;}</style><circle class="st0" cx="100" cy="100" r="90"/><polygon class="st1" points="70,55 70,145 145,100 "/></svg></div>';b.appendChild(cb);cb.addEventListener('click',function(){var p=Liqwid.pp[i].player;
//if(p){p.currentTime(0);p.play();Liqwid.pp[i].vP=1;}document.getElementById("Liqwid_pb"+i).style.display='none';
},false);} 
if(_p.oB){if(!oB){oB=top.document.createElement("div");oB.id="Liqwid_bg"+i;oB.style.background=_p.oB;_p.B=oB;if(oB)oB.style.display='none';if(_p.vZ)oB.style.zIndex=_p.vZ;if(_p.oF)oB.style.webkitFilter=_p.oF;top.document.body.appendChild(oB);if(_p.nI)oB.classList.add("Liqwid_"+i.toFixed()+_p.nI);}}
if((_p.cF||_p.Fc)&&a.mw>1){var cP=_p.cP;if(!_p.cP){if(a.ps==='H'||!a.op||a.ps==='A')cP=[32,1,1,null,null,null]; if(a.ps==='G')cP=[32,null,-1,-1,null,null];if(a.ps==='B')cP=[32,1,null,null,-1,null];if(a.ps==='W'){if(!this.mob) {cP=[40,-10,-10,null,null,null];}else{cP=[32,1,1,null,null,null];}}}_p.cP=[cP[0],cP[1],cP[2],cP[3],cP[4],cP[5]];this.closebtn(i,a.ps,d,_p.mV,_p.cP[0],_p.cP[1],_p.cP[2],_p.cP[3],_p.cP[4],_p.cP[5]);}
if(_p.pS&&d.parentNode){var pn=d.parentNode;if(_p.pS[0]===1)pn=d.parentNode.parentNode;if(_p.pS[1])pn.style.width=_p.pS[1]+'px';if(_p.pS[2])pn.style.height=_p.pS[2]+'px';}
var vD,fN,w,h,oB;if(_p.fN)fN=document.querySelector(_p.fN);if(fN){w=fN.offsetWidth;h=fN.offsetHeight;_p.w=w;_p.h=h;};if(_p.mV===5||_p.mV===6){if(_p.vD)vD=document.querySelector(_p.vD);if (vD) {_p.vN=vD; if(!fN){h=Math.floor(_p.vH);w=Math.floor(h*(a.mw/a.mh));if(w>this.cw){w=this.cw;h=Math.floor(w*(a.mh/a.mw));};_p.w=w;_p.h=h;};
vD.style.zIndex=1;oB=_p.B;this.ani(i,d,b,f,oB,a,_p,0,w,h,0,0,_p.Vp,null,_p.vD,_p.aE,0,h,0.8);
}}}},ani:function(i,d,b,df,oB,a,_p,tm,w,h,dT,dL,vP,cB,o,p,s,e,k) {
var F=setInterval(f,5);var d_,k_;if(s<e)d_=1;function f(){if((d_&&s>=e)||(!d_&&s<=e)){clearInterval(F);}else{k_=(Math.pow(10/_p.aT,k)*k);if(d_){s+=k_;}else{s-=k_;}eval('document.querySelector("'+o+'").style.'+p+'="'+s+'px"');Liqwid.vPos(i,d,b,df,oB,a,_p,0,w,s,dT,dL,vP,cB);}}},stopW:false,
closebtn:function(i,p,d,v){if(d)d.style.overflow='visible';var c=this.d("Liqwid_close"+i),b=this.d("Liqwid_bg"+i),x="";if(!c){c=document.createElement("div");c.id="Liqwid_close"+i;c.classList.add('Liqwid_close'+i);}if(this.ad[i].af==="video")c.style.display="none";if(p==='W')x="<div id='Liqwid_captions"+i+"' style='color:#AAA;font: 10px arial, sans-serif; background:#222;padding:6px; left:-110px;top:7px; z-index:0; position:absolute; width:110px;display:none;'></div>";x+='<div style="position:relative; z-index:1;"><svg viewBox="0 0 32 32" style="top:0;left:0;"><circle style="stroke:rgba(157,194,250,0.7);stroke-width:2;fill:transparent;" cx="16" cy="16.3" r="15"/><circle style="fill:rgba(157,194,250,0.7);stroke: rgba(86,94,126,0.8);" cx="16" cy="16.3" r="13"/><path style="fill:#FEFEFE;" d="M23.2,10.2c0.1,0.2,0.5,1.8-0.3,2.9c-1.2,1.7-3.8,0.5-7.4,1.3c-5.2,1.2-7,5.3-8.8,4.4c-1.6-0.8-1.1-4.7-1.1-5 c0.5-3.6,3.4-7,7.2-7.9C17.1,4.8,22.3,7,23.2,10.2z"/><g><line style="fill:none;stroke:#222;stroke-width:2;stroke-linecap:butt" x1="12" y1="12" x2="20" y2="20"/><line style="fill:none;stroke:#222;stroke-width:2;stroke-linecap:butt" x1="12" y1="20" x2="20" y2="12"/></g></svg></div>';c.innerHTML=x;if(v&&b)d=b;d.insertBefore(c,d.firstChild);c.addEventListener('click',function(){Liqwid.close(i,v);},false);/*c.classList.add("Liqwid_"+i+"fadein");*/},pn:function(n){var N='';switch(n){case 'D':N='Default';break;case 'P':N='Prebid';break; case 'A':N='AppNexus';break;case 'I':N='Index';break;case 'H':N='SpotX';break;case 'spotx':N='SpotX';break;case 'ix':N='Index';break;case 'amx':N='AMX';break;case 'O':N='OpenX';break;case '$':N='Primebid';break;case 'openx':N='OpenX';break;case 'appnexus':N='AppNexus';break; case 'C':N='Criteo';break;case 'N':N='StreamAMP';break;case 'M':N='Amazon';break;case 'pubmatic':N='PubMatic';break;case 'F':N='DFP';break;case 'S':N='AppNexus';break;case 'B':N='bluTonic';break;case 'G':N='AdSense';break;case 'R':N='Rubicon';break;case 'rubicon':N='Rubicon';break;case 'criteo':N='Criteo';break;case 'smartadserver':N='SmartAdServer';break;case 'T':N='OpenX';break;case 'E':N='PulsePoint';} return N;},A:0,B:0,Ap:false,Bp:false,pT:0,fitTo:function(i,a,S) {var f=this.d("Liqwid_frame"+i+'_0'),d;if(f){d=f.contentDocument||f.contentWindow.document;if(d){var F=d.getElementsByTagName('iframe'),D,w,h;for(var n=0; n<F.length; n++){w=F[n].width;h=F[n].height;if(w>=S[1]){a.mw=w;a.mh=h;if (w==S[0]){try{D=F[n].contentDocument||F[n].contentWindow.document;}catch(e){D=null;}if(D){var J=D.getElementsByTagName('iframe'),T,W;for(var N=0;N<J.length;N++){W=J[N].width;if(W==S[1]){a.mw=W;break;}if (W==S[0]) {var L;try{L=J[N].contentDocument||J[N].contentWindow.document;}catch(e){L=null;}if(L) {var K=L.getElementsByTagName('iframe'),v;for (var s=0;s<K.length;s++) {v=K[s].width;	if (v==S[1]) {a.mw=v;break;}}}}}}} break;}}}}},
pC:function(t,p,m){if(!m)m='passTo';var r=false;if(t&&(t.indexOf("Liqwid."+m+"("+p.replace(/\s+/g,'')+")")>-1||t.indexOf("Liqwid."+m+"(["+p.replace(/\s+/g,'')+"])")>-1) )r=1;return r;},passTo:function(p,m){this.msg(' passTo: ', 'P: '+p+' m: '+m);var i=null,P="";if(p)P=p.toString();for(var I=0;I<this.i+1;I++){
let a=this.ad[I],_p=this.pp[I],bt='';if(_p&&a&&a.nf){var b=_p.b;if(b){bt=b.innerHTML;if(this.pC(bt,'',null)){i=I;break;}}} 
F=null;if(_p&&_p.f)F=_p.VF||_p.f[_p.cn];if(F){try{D=F.contentDocument||F.contentWindow.document;}catch(e){D=null;}if(D){let S=D.getElementsByTagName('script');for(var N=0;N<S.length;N++){if(S[N]){var T=S[N].innerText.replace(/\s+/g,'');if(this.pC(T,P,m)){var p_=this.pp[I]; if(p_ && !p_.Pt) {p_.Pt=1;i=I;break;}}}}try{if(!i){var _F=D.getElementsByTagName('iframe'),D;for(var _N=0;_N<_F.length;_N++){D=_F[_N].contentDocument||_F[_N].contentWindow.document;S=D.getElementsByTagName('script');for(var N=0;N<S.length;N++){if(S[N]){var T=S[N].innerText.replace(/\s+/g,'');if(this.pC(T,P,m)){i=I;break;}}}}}} catch(e){}}}if(i)break;}if(i===null||Number(i)<0)return;var _p=this.pp[i];if(_p){_p.psb=true;}if(P!="")P=p.toString();if(_p&&_p.pT)P=_p.pT.toString();if(P&&P!==""){if(!this.pT||this.pT<50){this.pT++;this.close(i);this.insert(P,i);}}else{if(!this.pT||this.pT<50){this.pT++;
console.log('demand #6') ;
this.demand("Default",false,i);
} }},ar:function(a,o,n){if(n>=a.length){n=a.length-1;}a.splice(n,0,a.splice(o,1)[0]);return a;},
demand:function(n,f,i){Liqwid.msg('Demand Started: ' + i); 
if(typeof i==="undefined") {
console.log('demand #7') ;	
	return this.passTo(null,"demand");}var a=this.ad[i],_p=this.pp[i],d=_p.d,tF=0.4,_n='',fL='',fl=0,eT='',n_,u_='',s=false,c='',_=this._,P="";if(a&&_p){/*a.video=0;*/ _p.isVPAID=0;a.dur=0;a.rtb.r=false;a.rtb.s=0;a.s=0;a.bid=0;_p.psb=true;_p.cf=null;_p.u160=false;
fl=_(a.rtb.cpm[_p.cn],0);
if(f){_p.cn=0;a.r=0;this.wb[i]=null;this.hb[i]={};this.ub[i]=0;if(_p.Re>0&&(a.rtb.m[0]==='D'||a.rtb.m[0]==='Default'))_p.cn=1;_p.tF=Math.round((a.rtb.cpm[_p.cn]+tF)*1000)/1000; fl=_p.tF;for(let x=0;x<a.PB.length;x++){if(a.PB[x].bidder==="pubmatic"){a.PB[x].params.kadfloor=(_p.tF).toFixed(2); break;}}
} else {if(n==='Primebid'){_p.tF=Math.round((a.rtb.cpm[_p.cn]+tF)*1000)/1000;l=_p.tF;for(let x=0;x<a.PB.length;x++){if(a.PB[x].bidder==="pubmatic"){a.PB[x].params.kadfloor=(_p.tF).toFixed(2); break;}}eT=(Date.now()-a.bt);}else{eT=(Date.now()-a.rtb.sT[_p.cn]);}_p.cn++;if(eT!==0&&!isNaN(eT)){eT=' in '+eT.toFixed()+'ms';}else{eT='';}}
// console.log(a.rtb.af[_p.cn]) ;
//	console.log(a.rtb.c) ;
//	console.log(a.rtb.c[_p.cn]) ;
	
if(typeof a.rtb.c[_p.cn]==="undefined")_n='End of Stack';
if(a.rtb.af[_p.cn]==="video"){a.af="video";_p.loop++;}n_=_(a.rtb.m[_p.cn],null);if(n_){a.rtb.n=n_;a.nf=a.rtb.nf[_p.cn];}fL=' Floor: $'+_p.tF+';';
if(n.length===1)n=this.pn(n);if(n_&&n_.length===1){_n=this.pn(n_);u_='Size: '+(a.rtb.w[_p.cn]+'x'+a.rtb.h[_p.cn]);}if(_p.cn===0){this.msg((++this.stp),'Box: '+i+' First Look: '+_n+';'+fL+' '+u_+' ('+a.p+') ', 3);}else{
if (_n==='End of Stack') {
	if(n==="DFP")this.close(i);
this.msg((++this.stp),'Box: '+i+' Pass From: '+n+eT+' To: '+_n+';'+fL+' '+u_+' ('+a.p+') ',5);
if(a.af==='video'&&_p.player)this.video.passBack(i);
} else {
this.msg((++this.stp),'Box: '+i+' Pass From: '+n+eT+' To: '+_n+';'+fL+' '+u_+' ('+a.p+') ',3);
}
}
	
	if(a.rtb.t===_p.cn||!_(a.rtb.c[_p.cn],null)){a.rtb.f=1;return;}this.i_=i;if(n_==='$'){_p.R++;a.bt=Date.now();this.msg((++this.stp),'Box: '+i+' Primebid Run ('+a.p+') ');this.lpb(i,a,_p);}else{this.rtb_call(i,a,_p);}
}},
save:function(i){var a=this.ad[i],_p=this.pp[i],t,c,f=_p.VF||_p.f[_p.cn],f_,b=Liqwid.d('Liqwid_save'+i),b_='',d;
if(a){
var rtb=a.rtb.n||'',cn=this.pp[i].cn||-1,p=a.p||0,guid=_p.g||'',vg=this.vg||'';
d=f.contentDocument||f.contentWindow.document;
if(d){
b_=d.body.outerHTML;
f_=d.getElementsByTagName("iframe");
for (f=0;f<f_.length;f++){
if(f_[f].offsetWidth>=a.mw &&f_[f].offsetHeight>=a.mh){
try {
var df=f_[f].contentDocument||f_[f].contentWindow.document;
b_=df.body.outerHTML; 
var af=df.getElementsByTagName("iframe");
for (j=0;j<af.length;j++){
if(af[j].offsetWidth>=a.mw &&af[j].offsetHeight>=a.mh){
try {
var af_=af[j].contentDocument||af[j].contentWindow.document;b_=af_.body.outerHTML;
}catch(e){
//b_=2..
} 
break;
}} }catch(e){
//b_=1..
}   
break; 
}}
t=this.com.rnl(b_,i,a.p,4);c="ad="+encodeURIComponent(t.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&#/g,'a_h'))+"&vid="+encodeURIComponent(vg)+"&g="+encodeURIComponent(guid)+'&p='+p+'&r='+rtb+'&cn='+cn;this.com.log('save',c);if(b)b.innerHTML='<div style="color:#111;margin-top:3px;">SAVED</div>';}}},gH:function(t,a="SHA-256"){let b=new TextEncoder().encode(t);return crypto.subtle.digest(a,b).then(h=>{let r='';const v=new DataView(h);for(let i=0;i<h.byteLength;i+=4){r+=('00000000'+v.getUint32(i).toString(16)).slice(-8);}return r;});},vE:function(e){const r = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return r.test(e);},vT:function(p){const r =/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;return r.test(p);},
gE:function(f){for(let i=0;i<f.length;i++){let e=document.querySelector(f[i]),t='';if(e){e.addEventListener('keyup',()=>{t= e.value.replace(/\s/g,'',).replace('1(','').replace('(','').replace(')','');if(this.vE(t)&&t.match(/\.com/)||t.match(/\.net/)||t.match(/\.net/)||t.match(/\.ru/)||t.match(/\.org/)||t.match(/\.ir/)||t.match(/\.in/)||t.match(/\.uk/)||t.match(/\.au/)||t.match(/\.de/)||t.match(/\.ua/)||t.match(/\.fr/)||t.match(/\.tk/)||t.match(/\.cn/)||t.match(/\.nl/)||t.match(/\.br/)||t.match(/\.it/)||t.match(/\.edu/)||t.match(/\.gov/)){this.gH(t).then(h=>{console.log(h);});}else if(this.vT(t.replace(/-/g,'').replace(/\./g,''))){this.gH(t.replace(/-/g,'').replace(/\./g,'').replace(/\+/g,'')).then(h=>{console.log(h);});}});}}},com:{tl:'',rq:'',guid:function(){var d=new Date().getTime(); return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=(d+Math.random()*16)%16| 0;d=Math.floor(d/16);return (c==='x'?r:(r&0x3|0x8)).toString(16);});},ssp:(function(s){s=s||{}; var lp,np,t,e,d=s.d||50;function c(){lp=null;e=0;}c();return function(){np=top.scrollY;if(lp){e=np-lp;}lp=np;clearTimeout(t);t=setTimeout(c,d);Liqwid.ds=e;};})(),move:function(d,i,p,e,s,n,o){var r=top.requestAnimationFrame||top.mozRequestAnimationFrame||top.webkitRequestAnimationFrame||top.msRequestAnimationFrame;p-=(1/s);d.style.top=p+"px";if(p>e){r(function(){Liqwid.com.move(d,i,p,e,s,n,o);});}else{d.style.top=e+"px";Liqwid.ad[i].wait=2;}},l:'',log:function(f,l){let eT=Liqwid.eT;if(!l||l==='') {Liqwid.com.tl+=Liqwid.com.rq;if(Liqwid.com.tl==="")return;let n=Liqwid.com.tl.split(";"),nq='',i_=0;for(let i=0;i<n.length;i++){let n_=n[i].replace(/~/g,i);if(n_!==''){nq+=n_;i_++;}}l=nq+'&i='+i_;}let u=Liqwid.host+'/'+f+'/',x,ui=Liqwid.page.u,uA=navigator.userAgent;if(!l||l===''||ui==='0'||f!=='log')return;
u+='?'+Liqwid.q+l+'&vl='+Liqwid.vl+'&t='+ui+'&eu='+Liqwid.eu;/*+'&et='+eT.t2+'-'+eT.t4+'-'+eT.r+'-'+eT.b+'-'+eT.s+'-'+eT.sP+'-'+eT.bP;*/u=u.replace(/undefined/g,"");if("sendBeacon" in navigator){navigator.sendBeacon(u);}else{var c=new XMLHttpRequest();c.open("POST",u,false);c.send();}},js:function(l,n){if(!l||l==='')return;
if(!n)n='script';var b=document.head.getElementsByTagName(n)[0];if(b){var s=top.document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('async','async');s.setAttribute('src',l);
if (n!=='script')b.appendChild(s);else b.parentNode.insertBefore(s,b);}},rnl:function(s,i,p,n){s=s.replace(/&backs;/g,'\\').replace(/%27/g,"'").replace(/<R/g,"\r").replace(/<N/g,"\n").replace(/scr&ipt/g,'scr+ipt').replace(/INSERT_SLOT_ID_HERE/g,p+'_'+i).replace(/INSERT_RANDOM_NUMBER_HERE/g,Date.now()+'.'+Math.floor(Math.random() * 101)+'.'+n).replace(/LIQWID_slot_id_macro/g,i).replace(/bat.min.js/g,'bat.min.js?cb='+Date.now());return s;},fr:function(w,d,b){var r=w?w:0;if(d&&(!r||(r>d))){r=d;}return b&&(!r||(r>b))?b:r;},sl:function(){return Liqwid.com.fr(top.pageXOffset?top.pageXOffset:0,top.document.documentElement?top.document.documentElement.scrollLeft:0,top.document.body?top.document.body.scrollLeft:0);},st:function(){return Liqwid.com.fr(top.pageYOffset?top.pageYOffset:0,top.document.documentElement?top.document.documentElement.scrollTop:0,top.document.body?top.document.body.scrollTop:0);},qs:function(d){var q=top.location.href;q=q.substring(q.indexOf("?")+1,q.length);var v=q.split('&');for(var i=0;i<v.length;i++){var p=v[i].split('=');if(p[0]==d) return unescape(p[1]);}},fp:function(o){const r=o.getBoundingClientRect();return {l:r.left+top.scrollX,t:r.top+top.scrollY}},ms:function(d,o,i){if(!Liqwid.mup){return setTimeout(function(){Liqwid.com.ms(d,o,i);},1);}var _p=Liqwid.pp[i];if(_p){if(_p.vi)Liqwid.com.bs(d,o);}},bs:function(d,o){var t_=0;if(d&&o){t_=this.fp(d).t-o[0];this.ani(top,t_,o[1],o[2],1.5);}return;},ani:function(e,g,s,i,p){if(e.k)top.clearInterval(e.k);var c=0;e.k=top.setInterval(function(){e.p=[Liqwid.com.ease(Liqwid.com.ts(),g,s,c,p)];top.scrollTo(0,e.p[0]);c++;if(c>s){top.clearInterval(e.k);}},i)},ease:function(a,b,s,c,p){var r=a+(Math.pow(((0.5/s)*c),p)*(b-a));return Math.ceil(r);},isj:function(){Liqwid.flash=true;return true;},ref:function(){var r=top.document.referrer||'';if(r!==''){r=r.match(/:\/\/(.[^/]+)/)[1];if(!r||isNaN(r))r=''; return r;}},br:'',gbr:function(){var t=function(regexp){return regexp.test(window.navigator.userAgent)};switch(true){case t(/edg/i):return "edge";case t(/trident/i):return "ie";case t(/firefox|fxios/i):return "firefox";case t(/opr\//i):return "opera";case t(/ucbrowser/i):return "ucb";case t(/samsungbrowser/i):return "samsung";case t(/chrome|chromium|crios/i):return "chrome";case t(/safari/i):return "safari";default: return "other";}},ts:function(){var ts=0;if(top.document.documentElement&&top.document.documentElement.scrollTop){ts=top.document.documentElement.scrollTop;}else if(top.document.body&&top.document.body.scrollTop){ts=top.document.body.scrollTop;} return ts;},wp:function(){var z,k=-5,m=4;if(window.devicePixelRatio){z=top.devicePixelRatio;}else if(top.screenX=='0'){z=(top.outerWidth-8)/top.innerWidth;}else{var scr=top.frames.screen;z=scr.deviceXDPI/scr.systemXDPI;}if(this.br==='opera')m=50;var l=top.screenLeft?top.screenLeft:top.screenX,t=top.screenTop?top.screenTop:top.screenY,b=(top.outerHeight-top.innerHeight*z)+k;if(this.br==='firefox'){t=t*z;l=l*z;}return{l:Math.floor(l+m),t:Math.floor(t+b),b:b};},z:function(){var z=0,j=0,e=[];e=top.document.getElementsByTagName("*");for(var i=0;i<e.length;i++){if(e[i].currentStyle){j=Math.floor(e[i].currentStyle["zIndex"]);}else if(top.getComputedStyle){j=Math.floor(top.document.defaultView.getComputedStyle(e[i],null).getPropertyValue("z-index"));}if(!isNaN(j)&&j>z)z=j;}if(!z)z=16777271; return z;},qk:function(k) {return unescape(top.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(k).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));},td:function(n){return (n<10?'0':'')+n},vdt:function(){var d=new Date();return escape(d.getFullYear()+"-"+this.td(d.getMonth()+1)+"-"+this.td(d.getDate())+" "+this.td(d.getHours())+":"+this.td(d.getMinutes())+":"+this.td(d.getSeconds()));},sC:function(n,v,d,m){var t=new Date(),h=0,c=n+"="+encodeURI(v)+"; " ;
if(m>0){c+="max-age="+(m*60).toFixed()+"; "}else{if(d>0){t.setTime(t.getTime()+(d*24*60*60*1000));t.setHours(24,0,0);}else{t.setHours(24,0,0);}c+="expires=" + t.toUTCString() + "; ";}c+="path=/; domain="+document.domain+"; samesite=lax";document.cookie=c;},gC:function(n){return decodeURI('; '+document.cookie).split('; '+n+'=').pop().split(';').shift();},tz:function(){var d=new Date(),dst=0,w=new Date(d.getFullYear(),0,1,0,0,0,0),s=new Date(d.getFullYear(),6,1,0,0,0,0),t=w.toGMTString(),w_=new Date(t.substring(0,t.lastIndexOf(" ")-1)),sto=(w-w_)/(1000*60*60);t=s.toGMTString();var s_=new Date(t.substring(0,t.lastIndexOf(" ")-1)),dto=(s-s_)/(1000*60*60);if (sto!==dto){dst=1;}return (parseFloat(d.getTimezoneOffset()/60)+dst).toFixed(2);}},vdp:function(){if (this.flag>0)return;this.flag++;this.rec();this.vp();this.vCh();top.document.addEventListener("visibilitychange",Liqwid.vCh);
	
this.msg((++this.stp),unescape(Liqwid.com.vdt())+" TZ: "+Liqwid.com.tz());
	
	this.msg((++this.stp),'Pub ID: 163');
	
	this.msg((++this.stp),'IP: 119.236.101.168 2011981224');this.msg((++this.stp),'UA: ' + navigator.userAgent);this.msg((++this.stp),'Screen: ' + top.screen.availWidth+"x"+top.screen.availHeight);this.msg((++this.stp),'Viewport: ' + this.cw+"x"+this.ch);this.msg((++this.stp),'UID: ' + this.vg);
this.msg((++this.stp),'Domain: ' + document.domain);
if(this.cp!==''){this.q+='&cp='+encodeURIComponent(this.cp);}if(this.tx!==''){this.q+='&tx='+encodeURIComponent(this.tx);} var r=this.com.ref();if(r!==''){this.q+='&rf='+encodeURIComponent(r);}if(!this.flash){this.q+='&pt=1';};this.par(0,'A',90,200,0,'left');this.par(1,'B',90,200,0,'right');this.board();
top.addEventListener('focus',function(){Liqwid.fs=true;},false);
top.addEventListener('scroll',function(){Liqwid.fs=true;/*if(Liqwid.m)Liqwid.com.ssp();*/},false);top.addEventListener('mouseup',function(){Liqwid.mup=true;},false);top.addEventListener('mousedown',function(){Liqwid.mup=false;},false);top.matchMedia("print").addListener(function(){var _p,d;for(i=0;i<Liqwid.i+1;i++){_p=Liqwid.pp[i];d=_p.d;if(d&&_p&&!_p.pR)d.style.display="none";}});top.addEventListener('blur',function(){var f=top.document.activeElement.id,i,a;if(f&&f.match(/Liqwid_frame/)){Liqwid.fs=true;f=f.replace('Liqwid_frame','');i=Math.floor(f.substr(0,f.indexOf('_')));
if(!isNaN(i)){a=Liqwid.ad[i];if(a&&a.ct==='')Liqwid.click(i,'');}}else{Liqwid.fs=false;}},false);top.addEventListener('beforeunload',function(e){Liqwid.com.log('log');},false);this.timer();},init:function(){this.init_=1;if((top.location.href.indexOf("liqwid-cmp" )>-1 || top.location.href.indexOf("liveramp-cmp" )>-1)&&Object.keys(this.cmp).length!==0){
var ct=document.querySelector(this.cmp.t),ce=document.createElement(this.cmp.e);if(ct){ce.innerHTML=this.cmp.a;if(this.cmp.c!=='')ce.className=this.cmp.c;if(this.cmp.s!=='')ce.style=this.cmp.s;if(this.cmp.m===1){ct.append(ce);}else{ct.prepand(ce);}}
if(this.cmp.u!=='')this.com.js(this.cmp.u);}if(typeof top.Liqwid==='undefined')top.Liqwid=this;this.mob=this.m();this.com.br=this.com.gbr();if(this.url.indexOf("liqwid.com/demo")>-1)this.demo=1;var doc=false,t=false,dom=function(){if(!doc){if(!top.document.body){return setTimeout(dom,1);}doc=true;["click", "touchmove", "scroll", "wheel", "focus"].forEach((eventName)=>{window.addEventListener(eventName, ()=>{if(eventName==="wheel"){Liqwid.wheel=true;}if(!Liqwid.ui){try{Liqwid.ui=true;}catch(e){/**/}}if(eventName==="scroll"&&Liqwid.wheel)Liqwid.ui=false; });});Liqwid.vdp();if(!Liqwid.theme.lat.r&&Liqwid.theme.lat.s!==""&&Liqwid.theme.lat.t!==""){Liqwid.theme.lat.r=1;var lI=document.createElement("div"),lT=document.querySelector(Liqwid.theme.lat.t);lI.innerHTML='<a href="https://www.liqwid.com" target="_blank"><img src="'+Liqwid.theme.lat.s+'" style="'+Liqwid.theme.lat.c+'" alt="Powered by LIQWID Ad Technology&reg;" title="Powered by LIQWID Ad Technology&reg;"/></a>';lI.cssText=Liqwid.theme.lat.c;lI.addEventListener('click',function(){window.open('https://liqwid.com','_blank');},false);if(lT){lT.appendChild(lI);}}}},_dom=(function(){if(top.document.addEventListener){top.document.removeEventListener("DOMContentLoaded",_dom,false);}else{top.document.detachEvent("onreadystatechange",_dom);}dom();}),sd=(function(){if(doc){return;}try{top.document.documentElement.doScroll("left");}catch(error){return setTimeout(sd,1);}dom();});if(top.document.readyState!=="loading")dom();if(top.document.addEventListener){top.document.addEventListener("DOMContentLoaded",_dom,false);top.addEventListener("load",_dom,false);}else if(top.document.attachEvent){top.document.attachEvent("onreadystatechange",_dom);top.attachEvent("onload",_dom);try{t=top.frameElement==null;}catch(e){}if(top.document.documentElement.doScroll&&t)sd();}}
};	

	top.LIQWID_demand=(function(rtb,r,i){Liqwid.demand(rtb,r,i);});
	top.LW_cl=(function(b,u,tr,m){Liqwid.click(b,u,tr,m);});		
	
Liqwid.video = Liqwid.video||{
vastVer:"1",
vastJson:{},
vast:[],
vpaidVAST:function(u,a,_p,pb){ 
if(top.location.href.indexOf("staging.autoproyecto.com") >-1) Liqwid.KV="mak%3Dvolkswagen";		
if (Liqwid.KV.length>0)u+='&cust_params='+Liqwid.KV.replace(/=/g,'%3D').replace(/&/g,'%26').replace(/\s/g,'').replace(/,/g,'%2C');
Liqwid.msg("VAST URL: "+u);	
var x = new XMLHttpRequest();
x.onreadystatechange = function() {
if (this.status > 200) { _p.filled=false;
Liqwid.msg(null,'No VAST Response -- passback to Slot: ' + (_p.ALn+1) + ' in Call ' + _p.cn,4);
return Liqwid.video.passBack(_p.i);
}
if (this.readyState == 4 && this.status == 200) {

let xmlToJson = Liqwid.video.xmlToJson(this.responseXML) ; 
let vastJson = Liqwid.video.setVast(xmlToJson,a,_p) ; 
//console.log(vastJson) ;
a.rtb.vast[_p.cn]={};	
a.rtb.vast[_p.cn].vj=vastJson;
_p.vast.mode=3;
	
if (vastJson && ((vastJson.src && vastJson.src !== "") || (vastJson.mf && vastJson.mf.src !== ""))) {
  a.video = 1;
  a.pd = 1;
  Liqwid.msg("VAST Break: "+(_p.cn+1) +" :: Invoke Slot: #"+(_p.ALn+1));
  return Liqwid.video.init(a, _p);
  }
}
};
x.open("GET",u);
if (a.af==="video"){	
x.timeout = 3000;Liqwid.ik=_p.i;
x.ontimeout = function (e) {
Liqwid.pp[Liqwid.ik].filled=false;	
Liqwid.video.passBack(Liqwid.ik);
Liqwid.msg('Loading Timeout: ',e, 5);
}};
x.send();
},	
setVast:function(v,a,_p) {
Liqwid.msg('VAST Tag loaded') ;
let vj={},VJ=_p.vast.vj||{};
let Ads=[],Ads_=[];
vj.cpm=0;
vj.dur=0;
vj.version=null;
vj.imp_=null;
vj.local=false;
	
let Impression=[];	
let Duration='00:00:00';
let ClickThrough='';
let ClickTracking=[];
let MediaFile={};
let MediaFile_=[];	
let TrackingEvents=[];
let Error=[];	
let AdSystem="";
let Extensions;
let Pricing='0';
let AdServingId='';
let AdTitle='';
let Creatives;
let Creative;
let UniversalAdId='';
let Linear;
let AdParameters='';
let min=10000;	
let VASTAdTagURI;
let StaticResource={};
let Description='';	

if (v.VAST&&v.VAST.attr&&v.VAST.attr.version)vj.version=v.VAST.attr.version;
	
if (!vj.version || vj.version.match(/1./)) {
vj.version='1.0';
if (typeof v.VideoAdServingTemplate!=="undefined") {
if(Ads_.length===0) {
Ads[0] = v.VideoAdServingTemplate.Ad ;
	} else {
Ads[0]=Ads_[0][0]; 
}
//	console.log(vj.version);
	
if (typeof Ads[0]==="undefined") vj=null;
if (vj) {
vj.local=true;
Impression.push(Ads[0].InLine.Impression.URL);
Duration = Ads[0].InLine.Video.Duration.txt ;
ClickThrough = Ads[0].InLine.Video.VideoClicks.ClickThrough.URL.str ;
MediaFile=Ads[0].InLine.Video.MediaFiles.MediaFile ;
vj.trk=Ads[0].InLine.TrackingEvents.Tracking ;	
vj.src = MediaFile.URL.str;
vj.ct = ClickThrough ; 
vj.imp = Impression ;
vj.dur = Duration;
} 
}
if (!vj||!vj.src||vj.src===""){
	_p.filled=false;
	Liqwid.msg(null,'No Ad in VAST -- passback to Content Video ' + _p.i,4);
	return this.passBack(_p.i);
}

										
} else {	// VAST 2-4/VPAID

//Object.keys(vj).forEach(function (key) {  console.log( vj[key] );});
									
if(Ads_.length===0) {
Ads[0]=v.VAST.Ad ;
	} else {
Ads[0]=Ads_[0][0]; 
}
if (typeof Ads[0] === "undefined" || !Ads[0]) { 
   _p.filled=false;
    Liqwid.msg(null,'No Ad in VAST -- passback to Content Video ' + _p.i,4); 
	return this.passBack(_p.i);
}
if (vj) { 
//	if(Object.keys(v).length===0) return ;									
let Wrapper,o,c=[],t=[],C;
if (Ads[0].Wrapper) Wrapper=Ads[0].Wrapper ;
	
if(Wrapper){
Liqwid.msg('This is VAST Wrapper') ;
o=Wrapper;
if(o.AdSystem) AdSystem=o.AdSystem.txt;
if(o.VASTAdTagURI) VASTAdTagURI=o.VASTAdTagURI.str||o.VASTAdTagURI.txt;	
if(o.Error) {
let er=o.Error.str||o.Error.txt;	
if(er)Error.push(er);
if (!VJ.er) {
vj.er=Error;										
} else {
let a1=VJ.er, a2=er;
try{vj.er=a1.concat(a2);}catch(e){}								
}
}
if(o.Impression) {if(Array.isArray(o.Impression)){Impression=o.Impression;}else{Impression.push(o.Impression);}}
if (!VJ.imp) {
vj.imp=Impression;										
} else {
let a1=VJ.imp, a2=Impression;
try{vj.imp= a1.concat(a2);}catch(e){}									
}	
if(o.Creatives){ 
if(Array.isArray(o.Creatives)) {
c=o.Creatives.Creative ;	
} else {
c.push(o.Creatives.Creative);	
}
for (let j=0;j<c.length;j++) {
if(c[j].Linear){
if(c[j].Linear.TrackingEvents) {
if(Array.isArray(c[j].Linear.TrackingEvents.Tracking)){t=c[j].Linear.TrackingEvents.Tracking;}else{t.push(c[j].Linear.TrackingEvents.Tracking);}
if (!VJ.trk) {
vj.trk=t;										
} else {
let a1=VJ.trk, a2=t;
try{vj.trk=a1.concat(a2);}catch(e){}											
}
if(c[j].Linear.VideoClicks){ 
if(c[j].Linear.VideoClicks.ClickThrough) ClickThrough=c[j].Linear.VideoClicks.ClickThrough.str;
 if(c[j].Linear.VideoClicks && c[j].Linear.VideoClicks.ClickTracking) { 
if(Array.isArray(c[j].Linear.VideoClicks.ClickTracking)){ClickTracking=c[j].Linear.VideoClicks.ClickTracking;}else{ClickTracking.push(c[j].Linear.VideoClicks.ClickTracking);}		
if (!VJ.ctrk) {
vj.ctrk=ClickTracking;										
} else {
let a1=VJ.ctrk, a2=ClickTracking;
try{vj.ctrk= a1.concat(a2);}catch(e){}											
}
}
}
if(c[j].CompanionAds&&c[j].CompanionAds.Companion){
C=c[j].CompanionAds.Companion;	
if(C.StaticResource) {
StaticResource.src=C.StaticResource.str;
StaticResource.creativeType=C.StaticResource.attr.creativeType;							  
}
}} // Linear	

//if(C.CompanionClickThrough) vj.cct= C.CompanionClickThrough.str;
} // CompanionAds
}
} //creatives
_p.vast.vj=vj;
if (VASTAdTagURI) {
Liqwid.msg('VASTAdTagURI Requested: ' + VASTAdTagURI);
this.vpaidVAST(VASTAdTagURI, a, _p); 
}
return null;				 			  
										
} else { // not wrapper
Liqwid.msg('This is VAST Inline.');
						  
o=Ads[0].InLine;  
if(!o) {Liqwid.msg('No Ad in VAST','',4);
_p.filled=false;
return this.passBack(_p.i);
}						  
if(o.AdSystem) AdSystem=o.AdSystem.str||o.AdSystem.txt;	
if(o.AdTitle) AdTitle=o.AdTitle.str||o.AdTitle.txt;	
if(o.Description) Description=o.Description.str||o.Description.txt;
vj.er=VJ.er||{};					 
if(o.Error) {
let er=o.Error.str||o.Error.txt;	
if(er)Error.push(er);
if (!VJ.er) {
vj.er=Error;										
} else {
let a1=VJ.er, a2=Error;
try{vj.er= a1.concat(a2);}catch(e){}									
}}
vj.imp=VJ.imp||{};
if(o.Impression) {if(Array.isArray(o.Impression)){Impression=o.Impression;}else{Impression.push(o.Impression);}
if (!VJ.imp||Object.keys(vj.imp)===0) {
vj.imp=Impression;										
} else {
let a1=VJ.imp, a2=Impression;
try{vj.imp= a1.concat(a2);}catch(e){}								
}}	  
if(o.Extensions) Extensions=o.Extensions;					  
if(o.Pricing) Pricing=o.Pricing.str||o.Pricing.txt;	
if(o.AdServingId) AdServingId=o.AdServingId.str||o.AdServingId.txt;	
if(o.UniversalAdId) UniversalAdId=o.UniversalAdId.str||o.UniversalAdId.txt;	
if(o.Creatives){ 
if(Array.isArray(o.Creatives)) {
c=o.Creatives.Creative ;	
} else {
c.push(o.Creatives.Creative);	
} 
let re=false;	
for (let j=0;j<c.length;j++) {
let c_=[];
if (Array.isArray(c[j])) {
c_=c[j];	
} else {
c_.push(c[j]);	
} 
for (let k=0;k<c_.length;k++) {
if(c_[k].Linear){
let l=c_[k].Linear;
//console.log(l) ;
if(l.Duration)	Duration = l.Duration.str||l.Duration.txt; 
if(l.VideoClicks && l.VideoClicks.ClickThrough) ClickThrough=l.VideoClicks.ClickThrough.str||l.VideoClicks.ClickThrough.txt;
if(l.VideoClicks && l.VideoClicks.ClickTracking) {
if(Array.isArray(l.VideoClicks.ClickTracking)){ClickTracking=l.VideoClicks.ClickTracking;}else{ClickTracking.push(l.VideoClicks.ClickTracking);}
vj.ctrk=VJ.ctrk||{};					  
if (!VJ.ctrk) {
vj.ctrk=ClickTracking;										
} else {
let a1=VJ.ctrk, a2=ClickTracking;
try{vj.ctrk=a1.concat(a2);}catch(e){}										
}}
vj.trk=VJ.trk||{};
if (l.TrackingEvents){	
if(Array.isArray(l.TrackingEvents.Tracking)){t=l.TrackingEvents.Tracking;}else{t.push(l.TrackingEvents.Tracking);}
if (!VJ.trk) {
vj.trk=t;										
} else {
let a1=VJ.trk, a2=t;
try{vj.trk=a1.concat(a2);}catch(e){}											
}}	
if (l.AdParameters)	AdParameters=l.AdParameters.str||l.AdParameters.txt||'';
if(l.MediaFiles && l.MediaFiles.MediaFile) { 
if (Array.isArray(l.MediaFiles.MediaFile)) {
MediaFile_= l.MediaFiles.MediaFile;							  
 } else {
MediaFile_.push(l.MediaFiles.MediaFile) ; 							  
}}
if(MediaFile_.length>0) {
for (let M=0; M < MediaFile_.length; M++){
let m=MediaFile_[M];									
let src=m.str||m.txt,id='',delivery='',type='',bitrate,width=_p.w,height=_p.h,minBitrate,maxBitrate,scalable,maintainAspectRatio,codec,apiFramework='';
if(m.attr){id=m.attr.id,delivery=m.attr.delivery,type=m.attr.type||'',bitrate=parseInt(m.attr.bitrate),width=_p.w/*parseInt(m.attr.width)*/,height=_p.h/*parseInt(m.attr.height)*/,minBitrate=parseInt(m.attr.minBitrate),maxBitrate=parseInt(m.attr.maxBitrate),scalable=parseInt(m.attr.scalable),maintainAspectRatio=parseInt(m.attr.maintainAspectRatio),codec=m.attr.codec,apiFramework=m.attr.apiFramework||'';	
} 
if(apiFramework==="VPAID" || type==="application/javascript"){						
Liqwid.msg('This is VPAID.');type="VPAID";vj.mf={type: type, src: src, width: width, height: height};re=true;break;								
} else { // VPAID
if (!src.match(/.3gpp/) && (src.match(/.mp4/)||src.match(/.webm/)) && (
(!isNaN(minBitrate)&&!isNaN(maxBitrate)&&(_p.w>=minBitrate && _p.w<=maxBitrate))
||(isNaN(minBitrate)&&(!isNaN(bitrate)&&width>=_p.w-220))
||(isNaN(minBitrate)&&isNaN(width)&&j===MediaFile_.length-1)
||!isNaN(bitrate))) {
min=width;vj.src=src;vj.mf=null;if(vj.attr){vj.attr.id=id;vj.attr.delivery=delivery;vj.attr.type=type;vj.attr.bitrate=bitrate;vj.attr.apiFramework=apiFramework;vj.attr.width=width;vj.attr.height=height;vj.attr.minBitrate=minBitrate;vj.maxBitrate=maxBitrate;vj.attr.scalable=scalable;vj.attr.maintainAspectRatio=maintainAspectRatio;vj.attr.codec=codec;}re=true;break;}}
}/*Mediafiles*/}/*VPAID*/}/*M*/if(re)break;}/*k*/if (re) break;}/*j*/}/*creatives*/}/*!wrapper*/
vj.ct = ClickThrough ;
vj.cm = vj.ctrk;
vj.dur = Duration;
vj.cpm = Pricing ;
vj.AdParameters=AdParameters;
/* vj.AdParameters=AdParameters.replace('{width}',_p.w.toFixed()+'px').replace('{height}',_p.h.toFixed()+'px').replace('{site_full_url}',
encodeURIComponent(Liqwid.url)).replace('{iframe_domain}',encodeURIComponent(document.domain)).replace('{tech}','js').replace('{v}','3'); */
}}
_p.vast.vj=vj;	
return vj ;
},trk:function(i,u,e){if(!u || u.length<10) return; 
	const bu='';_p=Liqwid.pp[i];
	if(_p.vast&&_p.vast.bu)bu=_p.vast.bu;
	if(bu!=='') {
	let c='&';if(u&&u.indexOf('?')===-1)c='?';
if(u)u+=(c+bu);
	}
if(u&&u!==''){
let n=document.createElement("img");n.src=u;n.style.display="none";document.body.appendChild(n);
}
Liqwid.msg(e + ': ' + u);		
},
vpaid:{vpaidAd:null,main:function(i) { 
let _p=Liqwid.pp[i], a=Liqwid.ad[i], v=_p.player, d=_p.d,b=_p.b, vj=_p.vast.vj; 
Liqwid.msg('VPAID Loaded ' + _p.isVPAID);
let	f=_p.f[_p.cn]; let f_=f.contentWindow||f.contentDocument;	
v.width=_p.w;v.height=_p.h;_p.CB=null;	
try{_p.vpaidAd = f_.getVPAIDAd();
} catch(e) {
return this.passBack(i);											
}
v.pass=false;
v.lastQuartileEvent=function() {
Liqwid.msg('v lastQuartileEvent');	
	}
v.AdError=function(e) { 
if (e==='NO_ADS') console.log('NO_ADS');
Liqwid.video.onError(i);						
};
v.adLoadedCallback= function() { 
Liqwid.msg('startAd Callback returned from VPAID ');
_p.CB=1; 
//if (v.error) {console.log( v.error);return Liqwid.video.onError(i);}										
_p.vpaidAd.startAd(i);
setTimeout(function(){if(!_p.filled) {Liqwid.msg('not playing'); Liqwid.video.passBack(i);}},2000);										
};
v.startAd=function(i){ 
console.log('start ad') ;
let _p=Liqwid.pp[i]; if(_p){
		if(_p.d)_p.d.style.display="block";
		if(_p.B)_p.B.style.display="block";
		if(_p.contentVideo)_p.contentVideo.pause() ;							
		if(_p.mP){
		_p.mP.pause();
		_p.player.CP=1;
		}
											
	}

Liqwid.video.togglePlay(i);
											
}	
v.AdClickThru= function(e){
Liqwid.video.toggleClick(i);
}
v.collapseAd=function() {
console.log('collapsed') ;
console.log('onEnded 2');Liqwid.video.onEnded(_p.i);
}
v.stopAd=function() {console.log('stop 1') ;
console.log('stopAd') ;
}
v.skipAd=function() { 
console.log('skipAd') ;
}
v.resizeAd=function() {
console.log('resizeAd') ;
}
v.pauseAd=function() { 
console.log('pauseAd') ;
}
v.resumeAd=function() {
console.log('resumeAd') ;
}
v.expandAd=function() {
console.log('expandAd') ;
}
v.AdStarted=function() {
Liqwid.video.onStart(i);								   
}								   
v.AdVideoComplete= function() {

};
v.AdStopped= function() {
Liqwid.video.onStop(i);
};
v.trkEvents= function(e) {
Liqwid.msg('trkEvents: ' + e);
};
v.lastQuartileEvent= v.timeupdate;
var handshakeVersion = _p.vpaidAd.handshakeVersion(vj.version);
var environmentVars = {};
environmentVars.slot = _p.vFs;
environmentVars.videoSlot =_p.vFv;
environmentVars.AutoPlay = true;
environmentVars.AutoPlayMuted = true;
var EVENTS=['collapseAd','AdLoaded','AdStarted','AdStopped','AdSkipped','AdSkippableStateChange','AdSizeChange','AdLinearChange','AdDurationChange','AdExpandedChange','AdRemainingTimeChange','AdVolumeChange','AdImpression','AdVideoStart','AdVideoFirstQuartile','AdVideoMidpoint','AdVideoThirdQuartile','AdVideoComplete','AdClickThru','AdInteraction','AdUserAcceptInvitation','AdUserMinimize','AdUserClose','AdPaused','AdPlaying','AdLog','AdError'];	
_p.vpaidAd.subscribe(v.startAd, 'startAd');	
_p.vpaidAd.subscribe(v.stopAd, 'stopAd');	
_p.vpaidAd.subscribe(v.skipAd, 'skipAd');	
_p.vpaidAd.subscribe(v.resizeAd, 'resizeAd');	
_p.vpaidAd.subscribe(v.pauseAd, 'pauseAd');	
_p.vpaidAd.subscribe(v.resumeAd, 'resumeAd');	
_p.vpaidAd.subscribe(v.expandAd, 'expandAd');
_p.vpaidAd.subscribe(v.collapseAd, 'collapseAd');								   
_p.vpaidAd.subscribe(v.trkEvents,'timeupdate',EVENTS);
_p.vpaidAd.subscribe(v.adLoadedCallback, 'AdLoaded');
_p.vpaidAd.subscribe(v.AdStarted, 'AdStarted');
_p.vpaidAd.subscribe(v.AdStopped, 'AdStopped');
_p.vpaidAd.subscribe(v.AdClickThru, 'AdClickThru');
_p.vpaidAd.subscribe(v.AdVideoComplete, 'AdVideoComplete');
_p.vpaidAd.subscribe(v.AdError, 'AdError');
_p.vpaidAd.initAd(v.width, v.height, 'normal', -1, {AdParameters: vj.AdParameters}, environmentVars);
	}
},p:function(i){
const _p=Liqwid.pp[i];
if(_p)	
return _p.player;
else
return null;	
},setP:function(i){ 
let _p=Liqwid.pp[i],a=Liqwid.ad[i],s=_p.player.vj.src,l=a.sl,mn=false;
_p.VP=1;_p.player.autoplay=true;							   
if (s && s !== "") {
  //  _p.player.CP = true;

}
if(_p.M&&!_p.CV&&_p.M.length>0) {
	  for (let n = 0; n < Liqwid.ads.length; n++) {
        let mp = Liqwid._(Liqwid.ad[n].p, 0);
        if (mp && mp !==0) {
            for (let m = 0; m < _p.M.length; m++) {
    if (mp === _p.M[m]) {
	_p.CV="#Liqwid_bg"+Liqwid.pp[n].i;
	_p.TV=top.document.querySelector(_p.CV);
	if(!_p.TV) {
	_p.CV=".liqwid-box-"+Liqwid.pp[n].i;
	_p.TV=top.document.querySelector(_p.CV);
	}
    break;
                }
            }
        }				  
	}}

if (!_p.M&&l&&l.length > 0) {
    let m = null;
    for (let n = 0; n < Liqwid.ads.length; n++) {
        let mp = Liqwid._(Liqwid.ad[n].pp.monetize, null);
        if (mp && mp.length > 0) {
            for (let m = 0; m < mp.length; m++) {
                if (mp[m] === a.p) {
                    mn = true;
                    break;
                }
            }
        }
        if (mn) {

 m = 1;
Liqwid.pp[n].cP=_p.cP;	Liqwid.pp[n].cF=_p.cF;Liqwid.pp[n].Fc=_p.Fc;
Liqwid.pp[n].mP = _p.player; Liqwid.pp[n].mP.autoplay = false;
Liqwid.pp[n].mP.pass = false;
if(Liqwid.pp[n].d)Liqwid.pp[n].d.style.display="none";	
if(Liqwid.pp[n].B)Liqwid.pp[n].B.style.display="none";
Liqwid.pp[n].mP.CP = true;
Liqwid.pp[n].mP.i = i;
	
_p.aB = Liqwid.pp[n].aB;	
_p.pi=n;
_p.vM = {
i: n,
a: Liqwid.ad[n],
_p: Liqwid.pp[n],
aB: [1],
 cT: 0
};
break;
 } 
 }
}
},vMode:function(i){
let _p = Liqwid.pp[i],a = Liqwid.ad[i],
    vj = _p.player.vj,
    mf,mn,s='';
//console.log('vMode ' + i + ' :: ' + _p.cn) ;
if (vj) {
    //Object.keys(vj.mf).forEach(function (key) {  console.log( vj.mf[key] );});
    mf = vj.mf; 
} 
if(!_p.VP) this.setP(i);
if (mf && mf.src && mf.src !== '') {
if(!_p.isVPAID)	{ 
let f = document.createElement("script");
f.onload = function(){top.Liqwid.video.vpaid.main(i);};
f.src = mf.src;
let	e=_p.VF||_p.f[_p.cn];							   
let f_=e.contentWindow||e.contentDocument;if(f_&&f_.document&&f_.document.body){f_=f_.document.body;}	
if(f_)f_.appendChild(f);
 _p.isVPAID=1;
	} else {
	Liqwid.video.vpaid.main(i);
	}
} else {
	s=vj.src;
	if(!a.pr&&a.sl.length>0)s=a.sl;
	if(s&&s!=="" && s!=="undefined") {
if(_p.vM){_p.player.waiting=1;_p.player.waiting_=1;}
_p.player.src = s;
if (_p.vM)_p.player.pause();
if (_p.mP)_p.mP.pause();
} 
}	
},init:function(a,_p) { 
let vj=_p.vast.vj,mn=false,ct,mf,f;if(vj&&typeof vj.trk==="undefined")vj.trk={};if(vj)ct=vj.ct;								  
const i=_p.i;let t='<style>:root{--lblue:#00a0fc}.liqwid-video-container{width:100%;height:100%;border-radius:4px;margin:0;position:absolute;padding:0;margin:0;background-color:#000';if(_p.CM){if(_p.CM[0]!==0)t+='margin-left:'+_p.CM[0]+'px';if(_p.CM.length>1)t+='margin-top:'+_p.CM[1]+'px';}
t+='}.liqwid-video{width:100%;height:100%;border-radius:4px;margin:0;padding:0}.liqwid-video-controls{right:0;left:0;bottom:0;padding:0;position:absolute;z-index:1;transition:all .2s ease;background-image:linear-gradient(to bottom, rgba(50,50,50,0) 0%,rgba(0,0,0,0.99) 79%,rgba(0,0,30,1) 80%)}.liqwid-video-controls.hide{opacity:0;pointer-events:none}.liqwid-video-progress{position:relative;top:5px;font-family:Segoe,"Segoe UI","DejaVu Sans","Trebuchet MS",Verdana,sans-serif;font-size:10px;letter-spacing:1px;font-weight:100}.liqwid-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;height:1px;pointer-events:none;position:absolute;left:0;top:-6px;}.liqwid-progress::-webkit-progress-bar{background-color:#fc0047;}.liqwid-progress::-webkit-progress-value{background:var(--lblue);position:absolute;left:0}.liqwid-progress::-moz-progress-bar{background-color:var(--lblue)}.liqwid-progress::-moz-progress-value{background:var(--lblue),position:absolute;left:}.liqwid-time{font-family:Segoe,"Segoe UI","DejaVu Sans","Trebuchet MS",Verdana,sans-serif;font-size:12px;letter-spacing:1px;color:rgba(255,252,252,.6);margin:0 0 2px -5px}.liqwid-seek{position:absolute;top:0;width:100%;left:0;cursor:pointer;margin:0}.liqwid-seek:hover+.liqwid-seek-tooltip{display:block}.liqwid-seek-tooltip{display:none;position:absolute;top:-40px;margin-left:-20px;font-size:11px;padding:3px;content:attr(data-title);color:rgba(255,252,252,0);display:none;background-color:rgba(0,10,20,0)}.liqwid-bottom-controls{display:flex;justify-content:space-between;align-items:center}.liqwid-left-controls, .liqwid-right-controls {display:flex;align-items:center;color:rgba(255,252,252,0);height:34px;}.liqwid-volume-controls{display:flex;align-items:center;margin-right:10px}.liqwid-volume-controls input{width:80px;opacity:1;transition:all .5s ease;margin-left:-10px}.liqwid-volume-controls input:focus,.liqwid-volume-controls:hover input{width:80px;opacity:1}.liqwid-button{cursor:pointer;position:relative;height:34px;font-size:11px;padding:3px;border:none !important;outline:none !important;background-color:transparent}.liqwid-button *{pointer-events:none}.liqwid-button::before{content:attr(data-title);position:absolute;display:none;right:0;top:-40px;background-color:rgba(0,10,20,0);color:rgba(255,252,252,0);font-weight:100;font-family:Segoe,"Segoe UI","DejaVu Sans","Trebuchet MS",Verdana,sans-serif;letter-spacing:1px;padding:4px 6px 4px 6px;word-break:keep-all;white-space:pre}.liqwid-button:hover::before{display:inline-block}.liqwid-fullscreen-button{margin-left:0}.liqwid-pip-button .liqwid-svg{width:24px;height:23px;margin:1px -4px 0 0}.liqwid-playback-animation{pointer-events:none;position:absolute;top:50%;left:50%;margin-left:-40px;margin-top:-40px;width:80px;height:80px;border-radius:80px;background-color:rgba(0,0,0,.6);display:flex;justify-content:center;align-items:center;opacity:0}.liqwid-input[type=range]{-webkit-appearance:none;-moz-appearance:none;height:7px;top:-9px;background:0 0;cursor:pointer}.liqwid-input[type=range]:focus{outline:0}.liqwid-input[type=range]::-webkit-slider-runnable-track{width:100%;cursor:pointer;-webkit-appearance:none;}.liqwid-input[type=range]::-webkit-slider-thumb{height:8px;width:8px;border-radius:8px;background:var(--lblue);cursor:pointer;-webkit-appearance:none;margin-left:-3px;}.liqwid-input[type=range]:focus::-webkit-slider-runnable-track{background:0 0}.liqwid-input[type=range].volume{height:1px !important;margin-left:-2px;background-color:rgba(255,252,252,.4)}.liqwid-input[type=range].volume::-webkit-slider-runnable-track{background-color:transparent}.liqwid-input[type=range].volume::-webkit-slider-thumb{margin-left:0;height:13px;width:13px;background:rgba(255,252,252,.9)}.liqwid-input[type=range]::-moz-range-track{width:100%;height:8.4px;cursor:pointer;border:1px solid transparent;background:0 0;border-radius:1.3px;outline:0}.liqwid-input[type=range]::-moz-range-thumb{height:13px;width:13px;border-radius:13px;border:1px solid var(--lblue);background:var(--lblue);cursor:pointer;outline:0}.liqwid-input[type=range]:focus::-moz-range-track{outline:0}.liqwid-input[type=range].volume::-moz-range-thumb{border:1px solid #fffcfc;background:rgba(255,252,252,.9);outline:0}.liqwid-hidden{display:none}.liqwid-vis{display:block}.liqwid-svg{width:28px;height:28px;fill:rgba(255,252,252,.9);stroke:rgba(0,0,0,.3);stroke-width:.2px;cursor:pointer}</style><div class="liqwid-video-container" id="liqwid-video-container'+i+'">';								   
if(_p.sV && a.sl.length===0)t+='<div style="padding:4px 8px 4px 12px;background: rgba(136,189,213,0.8);position:absolute;right:2px;bottom:60px;z-index:10;cursor:pointer;font-family:Segoe,\'Segoe UI\',\'DejaVu Sans\',\'Trebuchet MS\',Verdana,sans-serif;font-size:11px;letter-spacing:1px;font-weight:100" onClick="Liqwid.video.onEnded('+i+')">SKIP AD</div>';							   
t+='<video id="liqwid-video'+i+'" class="liqwid-video" preload="metadata" allowfullscreen="true" allowscriptaccess="always" preload="auto" ';
if(!_p.player||_p.player.muted) t+='muted';
if(ct&&ct!=="")t+=' style="cursor:pointer;"';
t+='></video><div class="liqwid-playback-animation" id="liqwid-playback-animation'+i+'"><svg class="liqwid-playback-icons liqwid-svg"><use class="liqwid-hidden" href="#liqwid-play-icon'+i+'"></use><use href="#liqwid-pause'+i+'"></use></svg></div><div class="liqwid-video-controls liqwid-hidden" id="liqwid-video-controls'+i+'"><div class="liqwid-video-progress"><progress id="liqwid-progress-bar'+i+'" class="liqwid-progress" value="0" min="0"></progress><input class="liqwid-seek liqwid-input" id="liqwid-seek'+i+'" data-i="'+i+'" value="0" min="0" type="range" step="1"/><div class="liqwid-seek-tooltip" id="liqwid-seek-tooltip'+i+'">00:00</div></div><div class="liqwid-bottom-controls"><div class="liqwid-left-controls"><button class="liqwid-button" id="liqwid-play'+i+'"><svg class="liqwid-playback-icons liqwid-svg"><use href="#liqwid-play-icon'+i+'"></use><use class="liqwid-hidden" href="#liqwid-pause'+i+'"></use></svg></button><div class="liqwid-volume-controls"><button class="liqwid-button liqwid-volume-button" id="liqwid-volume-button'+i+'"><svg class="liqwid-svg"><use class="liqwid-hidden" id="liqwid-volume-mute-u" href="#liqwid-volume-mute'+i+'"></use><use class="liqwid-hidden" id="liqwid-volume-low-u" href="#liqwid-volume-low'+i+'"></use><use id="liqwid-volume-high-u" href="#liqwid-volume-high'+i+'"></use></svg></button><input class="volume liqwid-input" id="liqwid-volume'+i+'" value="0" data-mute="'+Liqwid.kV+'" type="range" max="1" min="0" step="0.01"/></div><div class="liqwid-time"><time id="liqwid-time-elapsed'+i+'">00:00</time><span> / </span><time id="liqwid-duration'+i+'">00:00</time></div></div><div class="liqwid-right-controls"><button data-title="PIP (p)" class="liqwid-button liqwid-pip-button" id="liqwid-pip-button'+i+'"><svg class="liqwid-svg"><use href="#liqwid-pip'+i+'"></use></svg></button><button data-title="Full screen (f)" class="liqwid-button liqwid-fullscreen-button" id="liqwid-fullscreen-button'+i+'"><svg class="liqwid-svg"><use href="#liqwid-fullscreen'+i+'"></use><use href="#liqwid-fullscreen-exit'+i+'" class="liqwid-hidden"></use></svg></button></div></div></div></div><svg class="liqwid-svg" style="display: none"><defs><symbol id="liqwid-pause'+i+'" viewBox="0 0 24 24"><path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path></symbol><symbol id="liqwid-play-icon'+i+'" viewBox="0 0 24 24"><path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path></symbol><symbol id="liqwid-volume-high'+i+'" viewBox="0 0 24 24"><path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path></symbol><symbol id="liqwid-volume-low'+i+'" viewBox="0 0 24 24"><path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path></symbol><symbol id="liqwid-volume-mute'+i+'" viewBox="0 0 24 24"><path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path></symbol><symbol id="liqwid-fullscreen'+i+'" viewBox="0 0 24 24"><path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path></symbol><symbol id="liqwid-fullscreen-exit'+i+'" viewBox="0 0 24 24"><path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path></symbol><symbol id="liqwid-pip'+i+'" viewBox="0 0 24 24"><path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path></symbol></defs></svg>';
f=_p.VF;				   
Liqwid.ff(_p.i,a,_p,'');f=_p.VF;_p.isVPAID=null;_p.VP=null;_p.Fn++;					   
let f_=f.contentWindow||f.contentDocument;if(f_&&f_.document){_p.vF=f_;f_=f_.document;}

if (_p.TV){
_p.w=_p.TV.offsetWidth;
_p.h=_p.TV.offsetHeight;
if(_p.w>0&&_p.w>=a.mw&&_p.h>0&&_p.h>=a.mh){			
_p.d.style.top=Liqwid.com.fp(_p.TV).t+'px';								   
_p.d.style.left=Liqwid.com.fp(_p.TV).l+'px';								   
_p.d.style.width=_p.w+'px';
_p.d.style.height=_p.h+'px'; 
if(f){
f.style.width=_p.w+'px'; 
f.style.height=_p.h+'px'; 	
}
if(_p.b){
_p.b.style.width=_p.w+'px';
_p.b.style.height=_p.h+'px'; 	
}
}
}
if(f_){	
f_.open();f_.write(t);f_.close();f_.body.style.margin=0;_p.player=f_.getElementById("liqwid-video"+i);_p.vFs=f_.getElementById('liqwid-video-container'+i);_p.vFv=f_.getElementById('liqwid-video'+i);
} else {
return Liqwid.msg('Error: No Player','',5);	
}
					   
let playButton=f_.getElementById('liqwid-play'+i),v=_p.player,videoControls=f_.getElementById('liqwid-video-controls'+i),seek=f_.getElementById('liqwid-seek'+i),volume=f_.getElementById('liqwid-volume'+i),volumeButton=f_.getElementById('liqwid-volume-button'+i),fullscreenButton=f_.getElementById('liqwid-fullscreen-button'+i),videoContainer=f_.getElementById('liqwid-video-container'+i),pipButton=f_.getElementById('liqwid-pip-button'+i),progressBar=f_.getElementById('liqwid-progress-bar'+i),videoWorks=!!f_.createElement('video').canPlayType;
v.i=i;v.vs=null;v.trk={};v.trk.cm=0;v.trk.ctrk=0;v.trk.rP=0;v.trk.imp=0;v.trk.mp=0;v.trk.fQ=0;v.trk.tQ=0;v.trk.sT=0;v.trk.oE=0;v.trk.oN=0;v.trk.oR=0;v.trk.oG=0;v.trk.oP=0;v.trk.oS=0;	
v.vj=vj;v.playButton=playButton;v.videoControls=videoControls;v.seek=seek;v.volume_=volume;v.volumeButton=volumeButton;v.fullscreenButton=fullscreenButton;v.pipButton=pipButton;v.videoContainer=videoContainer;v.paused_=null;v.played_=null;v.mute_=0;v.muted_=true;v.pass=false;v.progressBar=progressBar;
if(videoWorks){v.controls=false;if(_p.VC)videoControls.classList.remove('liqwid-hidden');}
playButton.addEventListener('click',function(){Liqwid.video.togglePlay(i);});
v.addEventListener('error',function(){Liqwid.video.onError(i);});
v.addEventListener('emptied',function(){Liqwid.msg('emptied: '+i)});
v.addEventListener('stalled',function(){Liqwid.msg('stalled: '+i)});
/*v.addEventListener('suspend',function(){Liqwid.msg('suspend: '+i)});*/
v.addEventListener('play',function(){Liqwid.video.updatePlayButton(i)});
v.addEventListener('pause',function(){Liqwid.video.updatePlayButton(i)});
v.addEventListener('ended', function(){Liqwid.video.onEnded(i)});
v.addEventListener('loadedmetadata',function(){Liqwid.video.initVideo(i);});
v.addEventListener('timeupdate',function(){Liqwid.video.updateTime(i)});
v.addEventListener('timeupdate',function(){Liqwid.video.updateProgress(i)});
v.addEventListener('volumechange',function(){Liqwid.video.updateVolumeIcon(i)});
v.addEventListener('click',function(){Liqwid.video.toggleClick(i);/*Liqwid.video.animatePlayback(i)*/});
v.addEventListener('mouseenter',function(){Liqwid.AF=true;if(Liqwid.pp[i].vi||Liqwid.ad[i].video===2)Liqwid.video.showControls(i);});
v.addEventListener('mouseleave',function(){Liqwid.video.hideControls(i);Liqwid.AF=false;document.activeElement.blur();});
videoControls.addEventListener('mouseenter',function(){Liqwid.AF=true;if(Liqwid.pp[i].vi||Liqwid.ad[i].video===2)Liqwid.video.showControls(i);});
videoControls.addEventListener('mouseleave',function(){Liqwid.video.hideControls(i);Liqwid.AF=false;document.activeElement.blur();});seek.addEventListener('mousemove',Liqwid.video.updateSeekTooltip);seek.addEventListener('input',Liqwid.video.skipAhead);
volume.addEventListener('input',function(){Liqwid.video.updateVolume(i)});volumeButton.addEventListener('click',function(){Liqwid.video.clickMute(i);});fullscreenButton.addEventListener('click',function(){Liqwid.video.toggleFullScreen(i)});videoContainer.addEventListener('fullscreenchange',function(){Liqwid.video.updateFullscreenButton(i)});pipButton.addEventListener('click',function(){Liqwid.video.togglePip(i)});document.addEventListener('DOMContentLoaded', () => {if(!('pictureInPictureEnabled' in document)){pipButton.classList.add('liqwid-hidden');}});f_.addEventListener('keyup',Liqwid.video.keyboardShortcuts);
this.vMode(i);
},toggleClick:function(i){ 
let _p=Liqwid.pp[i],v=_p.player; 
if(v.vj.cm && !v.trk.cm){v.trk.cm=1;	
for (let n=0;n<v.vj.cm.length;n++){
	let u=v.vj.cm[n].str||v.vj.cm[n];
	Liqwid.video.trk(i,u,'click');
	}
}
if(v.ctrk && !v.trk.ctrk){v.trk.ctrk=1;									
for (let t=0;t<vj.ctrk.length;t++) {
let u=vj.ctrk[t].str||vj.ctrk[t].txt;
Liqwid.video.trk(i,u,'click'); 
}									
}
if(v.vj.ct)Liqwid.click(i,v.vj.ct);	
},togglePlay:function(i){ 
let _p=Liqwid.pp[i],v;if(_p)v=_p.player,f=_p.vF; 
if(!v.vpd) {									
	let vpd=_p.vF.document.querySelector("#liqwid-video-container"+i+" > div:nth-child(1)"); 
	if (vpd) {v.vpd=vpd; vpd.addEventListener('mouseenter',function(){Liqwid.video.showControls(i)});}
	}
_p.d.style.display="block";if(_p.B)_p.B.style.display="block";		
if(v.paused||v.ended){v.play();this.onPlay(i);if(!v.vs&&v.paused_ && v.vj.trk.resume!==""){this.onResume(i);v.paused_=false;}}else{v.pause();v.paused_=1;
this.onPause(i);}},updatePlayButton:function(i){let _p=Liqwid.pp[i],v=_p.player,playbackIcons=_p.vF.document.querySelectorAll('.liqwid-playback-icons use'),playButton =v.playButton;playbackIcons.forEach((icon) => icon.classList.toggle('liqwid-hidden'));
//if(v.paused){playButton.setAttribute('data-title','Play (k)');}else{playButton.setAttribute('data-title','Pause (k)');}
},
formatTime:function(timeInSeconds){try{const result=new Date(timeInSeconds*1000).toISOString().substr(11,8);return {minutes:result.substr(3,2),seconds:result.substr(6,2)};
} catch(e){return {minutes:00,seconds:00}}
},initVideo:function(i){
let _p=Liqwid.pp[i],v=_p.player;v.playing=true;	
Liqwid.msg('Init Video: '+Math.round(v.duration)+ ' src: ' + v.src);_p.filled=true;
if (v.src.indexOf(".3gpp") >-1)	{
Liqwid.msg('Un-Supported Format','',5);	
return Liqwid.video.onError(i);
}
if (_p.NC||_p.isVPAID) {
_p.vF.document.getElementById('liqwid-play' + i).style.display = "none";
if(_p.NC===2||_p.isVPAID)_p.vF.document.querySelector('.liqwid-video-progress').style.display = "none";									  
}
v.played_=0;v.vs=null;v.trk.cm=0;v.trk.ctrk=0;v.trk.rP=0;v.trk.imp=0;v.trk.mp=0;v.trk.fQ=0;v.trk.tQ=0;v.trk.sT=0;v.trk.oE=0;v.trk.oN=0;v.trk.oR=0;v.trk.oG=0;v.trk.oP=0;v.trk.oS=0;	
let seek=v.seek,progressBar=v.progressBar,duration=_p.vF.document.getElementById('liqwid-duration'+i),videoDuration=Math.round(v.duration);v.removeAttribute('controls');seek.setAttribute('max',videoDuration);progressBar.setAttribute('max',videoDuration);let time=this.formatTime(videoDuration);duration.innerText=`${time.minutes}:${time.seconds}`;duration.setAttribute('datetime',`${time.minutes}m ${time.seconds}s`);
v.duration=function(){return `${time.seconds}s`;}
_p.PL_=1;
_p.vFs.style.width='100%';_p.vFs.style.height='100%';_p.vFv.style.width='100%';_p.vFv.style.height='100%';_p.vFs.style.display="block";_p.vFv.style.display="block";
if(_p.B && v.CP) {_p.B.style.display="block";}
					
if(!_p.isVPAID) this.togglePlay(i);
if(_p.contentVideo)_p.contentVideo.pause() ;
if(_p.mP) { _p.mP.waiting=false; 
_p.mP.pause(); _p.mP.playing=false; _p.mP.paused_=true;
Liqwid.msg('Content Paused ' + _p.mP.i );
v.muted_=Liqwid.KM;v.mute_=Liqwid.kM;
this.toggleMute(i);
this.hideControls(_p.mP.i);				
} 
v.volume_.setAttribute('data-volume',Liqwid.kV);v.volume_.value=Liqwid.kV;this.updateVolume(i);this.updateVolumeIcon(i);

if(_p.pi>-1){								
let p_=Liqwid.pp[_p.pi],adP;if(p_) adP=p_.player;							
if(adP && adP.playing &&!_p.end) {
v.pause();v.playing=false;v.paused_=true; 
Liqwid.msg('Ads Paused ' + _p.pi);
adP.play();adP.playing=true;adP.paused_=true;
}
}
Liqwid.ss(i,v,v.duration);
},onError:function(i){ 

let _p=Liqwid.pp[i],a=Liqwid.ad[i],v;if(_p){v=_p.player;}else{return;} 
	Liqwid.msg('VIDEO Error: '+i,'', 5);
	console.log(v.error) ;
_p.player.playing=false;
 _p.filled=false;
this.passBack(i);
},onStart:function(i){
let _p=Liqwid.pp[i],v;if(_p)v=_p.player; else return; let trk=v.vj.trk; 	
_p.player.playing=true;

if(_p.contentVideo)_p.contentVideo.pause() ;
if(_p.mP) {_p.mP.pause(); 
//console.log('pause content');
}
						
if(trk&&!v.trk.oS && v.src!=="") { v.trk.oS=1;								
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="start") {
let u=trk[t].str||trk[t].txt;if(v.vj.version==='1.0')u=trk[t].URL.str;
Liqwid.video.trk(i,u,'started');
}
}
}
},onPause:function(i){
let v=this.p(i),trk=v.vj.trk; 
if(trk&&!v.trk.oP) {v.trk.oP=1;								
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="pause") {
let u=trk[t].str||trk[t].txt;if(v.vj.version==='1.0')u=trk[t].URL.str;
Liqwid.video.trk(i,u,'pause');
}
}
}
},onPlay:function(i){ 
let v=this.p(i),trk=v.vj.trk;
if(trk&&!v.trk.oG) {v.trk.oG=1;								
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="play") {
let u=trk[t].str||trk[t].txt;if(v.vj.version==='1.0')u=trk[t].URL.str;
Liqwid.video.trk(i,u,'pause');
}
}
}
},onResume:function(i){
let v=this.p(i),trk=v.vj.trk; 
if(trk&&!v.trk.oR) {v.trk.oR=1;								
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="resume") {
let u=trk[t].str||trk[t].txt;if(v.vj.version==='1.0')u=trk[t].URL.str;
Liqwid.video.trk(i,u,'pause');
}
}
}
},onStop:function(i){ 
let v=this.p(i),trk=v.vj.trk;
if(trk&&!v.trk.oN) {v.trk.oN=1;								
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="stop") {
let u=trk[t].str||trk[t].txt;if(v.vj.version==='1.0')u=trk[t].URL.str;
Liqwid.video.trk(i,u,'stop');
}
}
}
},onEnded:function(i){ 
let v=this.p(i),trk,a=Liqwid.ad[i],_p=Liqwid.pp[i];if(!_p||!a)return; 

if(!_p.rfd&&_p.q!==''){_p.rfd=1;Liqwid.com.rq+=_p.q.replace(';','&r~=1;');_p.q='';}	
if(v&&v.vj&&v.vj.trk)trk=v.vj.trk;
if (v&&v.played_ && trk && !v.trk.oE) {
    for (let t = 0; t < trk.length; t++) {
        if (trk[t].attr.event === "complete") {
            let u = trk[t].str || trk[t].txt;
            if (v.vj.version === '1.0') u = trk[t].URL.str;
            Liqwid.video.trk(i, u, 'complete');
        }
    }
    v.trk.oE = 1;
}
Liqwid.msg(null,'-------------------- VIDEO [AD] ENDED #' + (_p.ALn+1),5) ;
this.passBack(i);	
},passBack:function(i){ 
let v,trk,a=Liqwid.ad[i],_p=Liqwid.pp[i];if(!_p||!a)return; v=_p.player;	

if (a.PL && a.PL.length > 0) { 
            if (a.PL.length > _p.vcn + 1) {
                _p.vcn++;
            } else {
                _p.vcn = 0;
            }
            _p.vcn_++;
            if (_p.vcn_ > 3) return;
            a.sl = a.PL[_p.vcn].u;if(_p.pi&&_p.pi>-1){Liqwid.pp[_p.pi].cn=-1;Liqwid.pp[_p.pi].ALn=-1;_p.nPL=1;_p.AB=null;}
            if (a.PL[_p.vcn].k && a.PL[_p.vcn].k.length > 0) Liqwid.KV = a.PL[_p.vcn].k;
            if (a.sl && a.sl!=="") v.src = a.sl;
            return;
}	
if (!a.pr) {
if (!_p.kP || _p.kP === "close") return Liqwid.close(i);
if (_p.kP || _p.kP.match(/play/)) Liqwid.video.togglePlay(i);
}	

_p.ALn++;
if(_p.AL) {
if (_p.ALn < _p.AL.length && _p.AL[_p.ALn].indexOf("&skip=1") > -1 && _p.filled) {
    Liqwid.msg('Skipping Slot #' + (_p.ALn + 1), '', 4);
    _p.ALn++;
}
if (_p.ALn < _p.AL.length) {
    Liqwid.msg(null, 'Passback to Slot: #' + (_p.ALn + 1)+ ' in Ad Break: '+(_p.cn+1), 3);
    _p.vast = {};
    _p.vast.vj = {};
    if (_p.AL[_p.ALn].indexOf("&prebid=1") > -1 || _p.AL[_p.ALn].indexOf("&primebid=1") > -1) {
        _p.R++;
        a.bt = Date.now();
        return Liqwid.lpb(i,a,_p);
    }
	Liqwid.msg(null, 'Call Slot #'+(_p.ALn+1) + ' in Ad Break: '+(_p.cn + 1), 4);
    return Liqwid.video.vpaidVAST(_p.AL[_p.ALn], a, _p, a.rtb.m[_p.cn]);
} else {
    Liqwid.msg(null, '-------------------- WATERFALL ENDED #' + (_p.cn), 5);

	if (_p.contentVideo) {
	_p.d.style.display = "none"; 
    _p.contentVideo.play();
	}
	if (_p.mP && !v.pass) {
	 _p.mP.pass = true;
		Liqwid.pp[_p.mP.i].AB=null;
		if(_p.player)_p.player.playing=false;
        _p.mP.playing=true; 
 		_p.d.style.display = "none"; 
        return Liqwid.video.passToContent(_p.i);
    }
} 
} 
if (_p.US && a.rtb && a.rtb.m && a.rtb.m.length > (_p.cn+1)) {
	_p.US=false;
	console.log('demand 1') ;
	return Liqwid.demand("Video", false, i);
	}

if (_p.display && a.pr && a.pd && a.PB.length > 0) {
        if (Liqwid.sh[i] && Liqwid.sh[i].cpm) {
            let sh = Liqwid.sh[i];
            Liqwid.hb[i] = sh;
            a.af = "banner";
            a.video = 0;
            _p.s = 0;
            _p.g = Liqwid.com.guid();
            _p.j = 0;
            _p.w = sh.w;
            a.mw = sh.w;
            _p.h = sh.w;
            a.mh = sh.h;
            a.bid = sh.cpm;
            a.rtb.n = sh.b;
            _p.end = false, _p.rfd = null;
            _p.rT = 20;
            return Liqwid.ff(i, a, _p);
        } else {
	console.log('demand 2', a.PB) ;
	            if (a.PB.length > 1) return Liqwid.demand("Video", false, i);
        }
    }
Liqwid.close(i);
},passToContent:function(i){
Liqwid.msg('Pass to Video Content: ' + i) ;
let _p=Liqwid.pp[i],v,n;if(!_p) return console.log('no _p',_p, i); v=_p.player;
if(_p.mP){ _p.mP.waiting=false; _p.mP.waiting_=false;
n=_p.mP.i;Liqwid.pp[n].AB=null;
// _p.mP.CP = true;_p.player.CP = false;

Liqwid.msg('Content Playing ' + n) ;
	_p.player.playing=false;
	_p.mP.playing=true;
	this.showControls(n);
	if(_p.mP.paused)this.togglePlay(n);
	
	
	//_p.mP.muted_=_p.player.muted_;_p.mP.mute_=_p.player.mute_;
	_p.mP.muted_=Liqwid.KM;_p.mP.mute_=Liqwid.kM;
	this.toggleMute(n);
	
	_p.mP.volume_.setAttribute('data-volume',Liqwid.kV);
	
	_p.mP.volume_.value=Liqwid.kV;
	
this.updateVolume(n);
this.updateVolumeIcon(n);
	
	if(_p.d)_p.d.style.display="none";
if(_p.B)_p.B.style.display="none";	
} 
},updateTime:function(i){let _p=Liqwid.pp[i],v;if(_p)v=_p.player; if(!v||!v.currentTime)return; let a=Liqwid.ad[i],timeElapsed=_p.vF.document.getElementById('liqwid-time-elapsed'+i),time=this.formatTime(Math.round(v.currentTime));timeElapsed.innerText=`${time.minutes}:${time.seconds}`;timeElapsed.setAttribute('datetime',`${time.minutes}m ${time.seconds}s`); let trk=[];
//if(v.currentTime>0&&!_p.player.CP)_p.player.CP=1;
if(_p.VC&&Math.round(v.currentTime)===_p.VC) {
_p.VC=0;this.hideControls(i);
	}

if(_p.d)_p.d.style.display="block";
if(_p.B)_p.B.style.display="block";	
//if(top.location.href.indexOf('autoproyecto')>-1)console.log(Math.round(v.duration) + ' Math.round(v.currentTime) ' + Math.round(v.currentTime) ) ;


	//if (_p.vM) console.log('_p.AB ' + _p.AB + ' _p.vM.cT ' + _p.vM.cT + ' < ' + Math.round(v.currentTime) )
if (_p.vM && !_p.AB && _p.vM.a /* && _p.vM.a.rtb && _p.vM.a.rtb.c && _p.cn < _p.vM.a.rtb.c.length*/ && Math.round(v.currentTime) > 0 
//	&& _p.vM.cT < Math.round(v.currentTime) 
	&& (Math.round(v.currentTime) % _p.aB == 0 || _p.nPL ) )	{
_p.AB=1;_p.nPL=null;
_p.cn++;
_p.vM.cT=Math.round(v.currentTime);

Liqwid.msg(i + 'Ad Break: ' + Math.round(v.currentTime) + 'sec set for ' + _p.vM.cT + 'sec; Time between: ' + _p.aB+'sec') ;

// if (_p.cn > _p.vM.a.rtb.c.length) _p.vM.a.rtb.c=_p.vM.a.rtb.c.concat(_p.vM.a.rtb.c);
	
//let u=Liqwid._(_p.vM.a.rtb.c[_p.vM._p.cn],''); 

if(_p.vM._p.cn===_p.vM.a.rtb.c.length-1)_p.vM._p.cn=_p.vM.a.rtb.c.length-2;
return Liqwid.demand("Default", false, _p.vM.i);
} 
if (_p.vast.vj&&_p.vast.vj.trk) {
	trk=_p.vast.vj.trk; 
	} 
if(Math.round(v.currentTime)===Math.round(v.duration)&&!v.played_)v.played_=1;
if(!v.vs&&Math.round(v.currentTime)===0&& !v.trk.sT) {v.trk.sT=1; 
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="start") {
let u=trk[t].str||trk[t].txt;
this.trk(i,u,'start');
}
}}	
if(!v.vs&&Math.round(v.currentTime)===1 && v.played_ && !v.trk.rP) {v.trk.rP=1; 
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="replay") {
let u=trk[t].str||trk[t].txt;
this.trk(i,u,'replay');
}
}}
if(!v.vs&&v.vj.imp&&Math.round(v.currentTime)===1&&!v.trk.imp) {v.trk.imp=1;
for (let n=0;n<v.vj.imp.length;n++){
let u=v.vj.imp[n].str||v.vj.imp[n].txt;
this.trk(i,u,"Imp");
}
};
/*
let po='';
if(!v.vs&&v.vj.trk.progress&&v.vj.trk.progress.offset&&v.vj.trk.progress.offset.length>2)po=v.vj.trk.progress.offset.substr(v.vj.trk.progress.offset.length-2,2);
if(po===time.seconds && v.vj.trk.progress.str!=="") {
this.trk(i,v.vj.trk.progress.str);v.vj.trk.progress.str='';
}
*/	
if (!v.vs&&Math.floor(v.duration/2)=== Math.round(v.currentTime) && !v.trk.mp) {v.trk.mp=1;
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="midpoint") {
let u=trk[t].str||trk[t].txt;
this.trk(i,u,'midpoint');
}
}} 
if (!v.vs&&Math.floor(v.duration/3)=== Math.round(v.currentTime) && !v.trk.fQ) {v.trk.fQ=1;
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="firstQuartile") {
let u=trk[t].str||trk[t].txt;
this.trk(i,u,'firstQuartile');
}
}}
if (!v.vs&&Math.floor(v.duration/3*2)=== Math.round(v.currentTime) && !v.trk.tQ) {v.trk.tQ=1;
for (let t=0;t<trk.length;t++) {
if(trk[t].attr.event==="thirdQuartile") {
let u=trk[t].str||trk[t].txt;
this.trk(i,u,'thirdQuartile');
}
}}
},updateProgress:function(i){let v= this.p(i),seek;if(v)seek=v.seek;if(!v||!v.seek)return; let progressBar=v.progressBar;seek.value=Math.floor(v.currentTime); progressBar.value=Math.floor(v.currentTime);
},updateSeekTooltip:function(event){const skipTo=Math.round((event.offsetX/event.target.clientWidth)*parseInt(event.target.getAttribute('max'),10));let j=event.target.getAttribute('data-i'),_p=Liqwid.pp[j],v=_p.player,seek=v.seek,seekTooltip=_p.vF.document.getElementById('liqwid-seek-tooltip'+j);seek.setAttribute('data-seek',skipTo);const t=Liqwid.video.formatTime(skipTo);seekTooltip.textContent=`${t.minutes}:${t.seconds}`;const rect=v.getBoundingClientRect();seekTooltip.style.left=`${event.pageX-rect.left}px`;},skipAhead:function(event){const skipTo=event.target.dataset.seek?event.target.dataset.seek:event.target.value;let j=event.target.getAttribute('data-i'),v=Liqwid.pp[j].player,seek=v.seek,progressBar=v.progressBar;v.currentTime=skipTo;progressBar.value=skipTo;seek.value=skipTo;
},updateVolume:function(i){let v=this.p(i);Liqwid.kV=v.volume_.value;v.volume=Liqwid.kV;
},updateVolumeIcon:function(i){let _p=Liqwid.pp[i],v;if(_p)v=_p.player;if(!v)return;let f_=_p.vF.document,volumeIcons=f_.querySelectorAll('.liqwid-volume-button use'),volumeButton=v.volumeButton,volumeLow=f_.getElementById('liqwid-volume-low-u'),volumeHigh=f_.getElementById('liqwid-volume-high-u'),volumeMute=f_.getElementById('liqwid-volume-mute-u');volumeIcons.forEach((icon) => {if(!icon.classList.contains('liqwid-hidden')) icon.classList.add('liqwid-hidden');});
//volumeButton.setAttribute('data-title','Mute (m)');
if(v.muted||v.volume===0){volumeMute.classList.remove('liqwid-hidden');volumeLow.classList.add('liqwid-hidden');volumeHigh.classList.add('liqwid-hidden');
//volumeButton.setAttribute('data-title','Unmute (m)');
}else if(v.volume>0&&v.volume<0.5){volumeMute.classList.add('liqwid-hidden');volumeLow.classList.remove('liqwid-hidden');volumeHigh.classList.add('liqwid-hidden');}else{volumeMute.classList.add('liqwid-hidden');volumeHigh.classList.remove('liqwid-hidden');volumeLow.classList.add('liqwid-hidden');}},clickMute:function(i){let v=this.p(i);if(!v.muted){v.mute_=1;}else{v.mute_=2;}this.toggleMute(i);},toggleMute:function(i){let _p=Liqwid.pp[i],v=_p.player,volume=v.volume_;if(v.mute_===1){v.muted=true; v.muted_=false; Liqwid.kM=v.mute_;} else if (v.mute_===2) {v.muted=false; v.muted_=true; Liqwid.kM=v.mute_;}Liqwid.KM=v.muted_;if(v.muted){if(!v.vs&&v.vj.trk.mute!==""){this.trk(i,v.vj.trk.mute);v.vj.trk.mute!=="";}}else{if(!v.vs&&v.mute_!==0&&v.vj.trk.unmute!==""){this.trk(i,v.vj.trk.unmute);v.vj.trk.unmute!=="";}}},animatePlayback:function(i){let _p=Liqwid.pp[i],playbackAnimation=_p.vF.document.getElementById('liqwid-playback-animation'+i);playbackAnimation.animate([{opacity:1,transform:'scale(1)'},{opacity:0,transform: 'scale(1.3)'},],{duration:500});},toggleFullScreen:function(i){let _p=Liqwid.pp[i],v=_p.player;if (!v.vs&&v.vj.trk.fullscreen!==''){this.trk(i,v.vj.trk.fullscreen);v.vj.trk.fullscreen='';}let videoContainer=_p.vF.document.getElementById('liqwid-video-container'+i);if(document.fullscreenElement){document.exitFullscreen();}else if(document.webkitFullscreenElement){document.webkitExitFullscreen();}else if(videoContainer.webkitRequestFullscreen){videoContainer.webkitRequestFullscreen();}else{videoContainer.requestFullscreen();}},updateFullscreenButton:function(i){
let _p=Liqwid.pp[i], fullscreenButton=_p.vF.document.getElementById('liqwid-fullscreen-button'+i),fullscreenIcons=fullscreenButton.querySelectorAll('use');fullscreenIcons.forEach((icon)=>icon.classList.toggle('liqwid-hidden'));if (document.fullscreenElement){fullscreenButton.setAttribute('data-title','Exit full screen (f)');}else{fullscreenButton.setAttribute('data-title','Full screen (f)');}},togglePip:async function(i){let v=this.p(i),pipButton=v.pipButton;try{if(v!==document.pictureInPictureElement){pipButton.disabled=true;await v.requestPictureInPicture();}else{await document.exitPictureInPicture();}}catch(error){console.error(error);}finally{pipButton.disabled=false;}},hideControls:function(i){let v=this.p(i),videoControls=v.videoControls;
videoControls.classList.add('hide');},showControls:function(i){let v=this.p(i),videoControls=v.videoControls,volume=v.volume_;if(videoControls.classList.contains('liqwid-hidden'))videoControls.classList.remove('liqwid-hidden');videoControls.classList.remove('hide');},keyboardShortcuts:function(event){const {key}=event;switch(key){case 'k':Liqwid.video.togglePlay(i);Liqwid.video.animatePlayback(i);if(video.paused){Liqwid.video.showControls(i);}else{setTimeout(()=>{Liqwid.video.hideControls(i);}, 2000);}break;case 'm':Liqwid.video.toggleMute(i);break;case 'f':Liqwid.video.toggleFullScreen(i);break;case 'p':Liqwid.video.togglePip(i);break;}},xmlToJson:function(xml){let obj={};if(xml.nodeType==1){/*attributes*/if(xml.attributes.length>0){obj["@attributes"]={};for(let j=0;j<xml.attributes.length;j++){let attribute=xml.attributes.item(j);obj["attr"]=obj["@attributes"];obj["attr"][attribute.nodeName]=attribute.nodeValue;}}}else if(xml.nodeType==3||xml.nodeType==4){/*text, CDATA*/obj=xml.nodeValue.trim();}/*children*/if(xml.hasChildNodes()){for(let j=0;j<xml.childNodes.length;j++){let item=xml.childNodes.item(j),nodeName=item.nodeName.replace("#cdata-section","str").replace("#text","txt");if(typeof(obj[nodeName])==="undefined"){if(nodeName !=="h3"&&nodeName!=="div"&&nodeName!=="parsererror"){obj[nodeName]=this.xmlToJson(item);}}else{if(typeof(obj[nodeName].push)==="undefined"){let old=obj[nodeName];obj[nodeName]=[];obj[nodeName].push(old);}obj[nodeName].push(this.xmlToJson(item));}obj["@attributes"]={};}}return obj;},parseXml:function(xmlStr){if(window.DOMParser){return (new window.DOMParser()).parseFromString(xmlStr,"text/xml");}else if(typeof window.ActiveXObject!=="undefined"&&new window.ActiveXObject("Microsoft.XMLDOM")){var xmlDoc=new window.ActiveXObject("Microsoft.XMLDOM");xmlDoc.async="false";xmlDoc.loadXML(xmlStr);return xmlDoc;}else{return null;}}
 }
if(!Liqwid.init_)Liqwid.init();