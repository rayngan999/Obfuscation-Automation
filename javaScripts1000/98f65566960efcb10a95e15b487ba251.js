/*Copyright and licenses see https://www.dynatrace.com/company/trust-center/customers/reports/*/
(function(){if(typeof window!=="undefined"&&window.setTimeout){window.setTimeout=window.setTimeout;}var Promise=this.dT_&&dT_.prm&&dT_.prm()||this.Promise;(function jq(){var lb=self.Promise;(function(){function tb(v,t,u,V){function oa(Xa){return Xa instanceof u?Xa:new u(function(fb){fb(Xa)})}return new (u||(u=lb))(function(Xa,fb){function nb(Pb){try{Db(V.next(Pb))}catch(Qc){fb(Qc)}}function Cb(Pb){try{Db(V["throw"](Pb))}catch(Qc){fb(Qc)}}function Db(Pb){Pb.done?Xa(Pb.value):oa(Pb.value).then(nb,Cb)}Db((V=V.apply(v,t||[])).next())})}function kb(v,t){function u(Db){return function(Pb){return V([Db,Pb])}}function V(Db){if(Xa)throw new TypeError("Generator is already executing.");
for(;oa;)try{if(Xa=1,fb&&(nb=Db[0]&2?fb["return"]:Db[0]?fb["throw"]||((nb=fb["return"])&&nb.call(fb),0):fb.next)&&!(nb=nb.call(fb,Db[1])).done)return nb;if(fb=0,nb)Db=[Db[0]&2,nb.value];switch(Db[0]){case 0:case 1:nb=Db;break;case 4:return oa.label++,{value:Db[1],done:!1};case 5:oa.label++;fb=Db[1];Db=[0];continue;case 7:Db=oa.ya.pop();oa.ga.pop();continue;default:if(!(nb=oa.ga,nb=0<nb.length&&nb[nb.length-1])&&(6===Db[0]||2===Db[0])){oa=0;continue}if(3===Db[0]&&(!nb||Db[1]>nb[0]&&Db[1]<nb[3]))oa.label=
Db[1];else if(6===Db[0]&&oa.label<nb[1])oa.label=nb[1],nb=Db;else if(nb&&oa.label<nb[2])oa.label=nb[2],oa.ya.push(Db);else{nb[2]&&oa.ya.pop();oa.ga.pop();continue}}Db=t.call(v,oa)}catch(Pb){Db=[6,Pb],fb=0}finally{Xa=nb=0}if(Db[0]&5)throw Db[1];return{value:Db[0]?Db[1]:void 0,done:!0}}var oa={label:0,B:function(){if(nb[0]&1)throw nb[1];return nb[1]},ga:[],ya:[]},Xa,fb,nb,Cb;return Cb={next:u(0),"throw":u(1),"return":u(2)},"function"===typeof Symbol&&(Cb[Symbol.iterator]=function(){return this}),Cb}
function bb(){for(var v=0,t=0,u=arguments.length;t<u;t++)v+=arguments[t].length;v=Array(v);var V=0;for(t=0;t<u;t++)for(var oa=arguments[t],Xa=0,fb=oa.length;Xa<fb;Xa++,V++)v[V]=oa[Xa];return v}function F(){return"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope}function Ra(){if(F())return!1;if(Yb.dT_.bcv("srif")){var v=Yb;return!(v===v.top||!v.parent.dT_)}try{return Yb!==Yb.top}catch(t){return!0}}function db(v,t){return-1!==v.indexOf(t)}function Ia(v,t,u){if(v.forEach)v.forEach(t,
u);else for(var V=0;V<v.length;V++)t.call(u,v[V],V,v)}function S(v){var t=Ab;eb.set(t,v);setTimeout(function(){eb["delete"](t)},1E3);Ab++;return new Ma({H:"pair",query:"pair-id",result:t})}function ka(v){Lb&&(Za.Rc(self,Lb),Lb=null);return new lb(function(t){Lb=Za.pc(self,function(u,V,oa){"pair"===u.H&&"pair-id"===u.query&&(v.send(new Ma({H:"pair",query:"pair-ack",result:u.result})),oa(),t())});v.send(new Ma({H:"pair",query:"pair-req"}))})}function T(v){return new lb(function(t){v.Va(function(u){if("pair"===
u.H&&db(["pair-req","pair-ack"],u.query))if("pair-ack"===u.query&&"number"===typeof u.result)(u=eb.get(u.result))&&t(u);else for(Za.Ya(self,S(self)),u=0;u<Yb.frames.length;u++)Za.Ya(Yb.frames[u],S(Yb.frames[u]))})})}function ya(v){return new lb(function(t){v.Va(function(u){"handshake"===u.H&&db(["connect-ack","connect-pair"],u.query)&&t({uf:"connect-pair"===u.query})})})}function Ka(v){return new lb(function(t,u){setTimeout(u,v)})}function ob(v){return tb(this,void 0,void 0,function(){var t,u,V;return kb(this,
function(oa){switch(oa.label){case 0:t=new Ma({H:"handshake",query:"connect-req"}),u=new Za,Za.Ya(v,t,{Vc:[u.Hf]}),oa.label=1;case 1:return oa.ga.push([1,5,,6]),[4,lb.race([ya(u),Ka(1E3)])];case 2:return(V=oa.B())&&V.uf?[4,lb.race([ka(u),Ka(1E3)])]:[3,4];case 3:oa.B(),oa.label=4;case 4:return[3,6];case 5:throw oa.B(),u.port.close(),Error("timeout");case 6:return[2,u]}})})}function Aa(v,t){void 0===t&&(t=15);return tb(this,void 0,void 0,function(){var u;return kb(this,function(V){switch(V.label){case 0:u=
0,V.label=1;case 1:if(!(u<t))return[3,6];V.label=2;case 2:return V.ga.push([2,4,,5]),[4,ob(v)];case 3:return[2,V.B()];case 4:return V.B(),u++,[3,5];case 5:return[3,1];case 6:throw Error("connect handshake failed");}})})}function Da(v,t){Za.pc(v,function(u,V){return tb(this,void 0,void 0,function(){var oa,Xa,fb,nb;return kb(this,function(Cb){switch(Cb.label){case 0:if("handshake"!==u.H||"connect-req"!==u.query)return[2];oa=-1<Object.prototype.toString.call(v).indexOf("Worker")?v:V.source;Xa="undefined"===
typeof oa;fb=V.ports[0];nb=new Za(fb);nb.send(new Ma({H:"handshake",query:Xa?"connect-pair":"connect-ack"}));if(!Xa)return[3,4];Cb.label=1;case 1:return Cb.ga.push([1,3,,4]),[4,T(nb)];case 2:return oa=Cb.B(),[3,4];case 3:return Cb.B(),[3,4];case 4:return oa&&t(oa,nb),[2]}})})})}function ha(v){for(var t=[],u=1;u<arguments.length;u++)t[u-1]=arguments[u];try{JSON.stringify(t)}catch(V){}}function O(v,t,u){return tb(this,void 0,void 0,function(){var V,oa,Xa,fb,nb,Cb,Db;return kb(this,function(Pb){switch(Pb.label){case 0:if("undefined"===
typeof u.result)return[3,1];V=(oc.get(u.id)||{}).resolve;oc["delete"](u.id);if(!V)return ha("Resolver not found for message",u),[2];V(u.result);return[3,5];case 1:if(!rc.has(u.H))return[3,4];oa=rc.get(u.H);Xa=db(Gc,oa);return oa?[4,oa.apply(void 0,bb([v],u.query))]:[3,3];case 2:fb=Pb.B(),nb=Xa?fb:[fb,[]],Cb=nb[0],Db=nb[1],u.Nf(Cb),t.send(u,Db),Pb.label=3;case 3:return[3,5];case 4:ha("Invalid Protocol Message",u),Pb.label=5;case 5:return[2]}})})}function U(){Vb=new Map;oc=new Map;rc=new Map;eb=new Map}
function qa(v){v=void 0===v?{}:v;var t=v.jh,u=void 0===t?void 0:t;v=v.Eg;var V=void 0===v?!1:v;return tb(this,void 0,void 0,function(){var oa,Xa;return kb(this,function(fb){switch(fb.label){case 0:U();if(!(F()||Ra()||V))return[3,4];oa=Ra()?self.parent:self;fb.label=1;case 1:return fb.ga.push([1,3,,4]),[4,Aa(oa)];case 2:return Xa=fb.B(),Vb.set(oa,Xa),Xa.Va(function(nb){O(oa,Xa,nb)}),[3,4];case 3:return fb.B(),[2,!1];case 4:return u?[4,new lb(function(nb){Da(u,function(Cb,Db){Vb.set(Cb,Db);Db.Va(function(Pb){O(Cb,
Db,Pb)});nb()})})]:[3,6];case 5:fb.B(),fb.label=6;case 6:return F()||V||Da(self,function(nb,Cb){Vb.set(nb,Cb);Cb.Va(function(Db){O(nb,Cb,Db)})}),[2,!0]}})})}function Y(v,t,u){u=(void 0===u?{}:u).Vc;u=void 0===u?!1:u;Vb&&oc&&rc||U();rc.set(v,t);u&&Gc.push(t)}function ra(v,t,u){var V=new Ma({H:t,query:u});return new lb(function(oa,Xa){oc.set(V.id,{resolve:oa,reject:Xa});v.send(V)})}function P(v){for(var t=[],u=1;u<arguments.length;u++)t[u-1]=arguments[u];Vb&&oc&&rc||U();u=Vb.get(self);return u?ra(u,
v,t):(ha("sendQueryToMainThread - Channel not found for query",v,t),lb.resolve())}function ma(){var v=Yb.dT_,t=v&&v.iIO;v=new MessageChannel;var u=v.port1,V=v.port2,oa=new ArrayBuffer(1);return new lb(function(Xa){u.onmessage=function(fb){fb=fb.data;Xa(t?t(fb,26):fb instanceof ArrayBuffer);u.close()};V.postMessage(oa,[oa])})}function Z(v){return Cc.get(v)}function Ga(){Cc.clear();Xc=[]}function Qa(v,t){return v.find(t,void 0,!0).values.filter(function(u){return u}).map(Z).filter(function(u){return void 0!==
u})}function hb(v,t,u){if(!(v.Kc()<t.from)&&(v=v.find(t,u),0!==v.values.length))return v}function zb(v,t,u){if(!(v.cd<t.from)){var V=[];Ia(v.attributes,function(oa){if(!(oa.kb<t.from)){var Xa=hb(oa.values,t,u);Xa&&V.push({name:oa.name,entries:Xa})}});if(0!==V.length)return V}}function Mb(v,t){v.values.clear(t);v.Ob.clear(t);v.yb.clear(t);v.oe.clear(t);v.qd.clear(t);v.attributes.forEach(function(u){u.values.clear(t)})}function Va(){return Math.round(xc+Yc.now())}function Ca(v,t){return 506832829*v>>>
t}function Ea(v,t){return v[t]+(v[t+1]<<8)+(v[t+2]<<16)+(v[t+3]<<24)}function Na(v,t,u){return v[t]===v[u]&&v[t+1]===v[u+1]&&v[t+2]===v[u+2]&&v[t+3]===v[u+3]}function ea(v,t,u,V,oa){60>=u?(V[oa]=u-1<<2,oa+=1):256>u?(V[oa]=240,V[oa+1]=u-1,oa+=2):(V[oa]=244,V[oa+1]=u-1&255,V[oa+2]=u-1>>>8,oa+=3);var Xa=oa,fb;for(fb=0;fb<u;fb++)V[Xa+fb]=v[t+fb];return oa+u}function Ha(v,t,u,V){if(12>V&&2048>u)return v[t]=1+(V-4<<2)+(u>>>8<<5),v[t+1]=u&255,t+2;v[t]=2+(V-1<<2);v[t+1]=u&255;v[t+2]=u>>>8;return t+3}function ib(v){this.gg=
v}function Ya(v){var t,u;P("perfstart",(t={},t.i="compress",t.t=Va(),t.m="start",t));var V=new Pc(v);t=new Uint8Array(V.Ji());V=V.Dh(t);P("perfend",(u={},u.i="compress",u.t=Va(),u.m="end",u.d=[["in",v.byteLength],["out",V]],u.a=!0,u));return t.buffer.slice(0,V)}function mb(v,t){v=Ya(t);return new Uint8Array(v)}function Ob(v){var t=String(v);Lc.forEach(function(u){t=t.replace(u[0],"\x00"+u[1])});return t}function ab(v){try{if(pa.TextEncoder)return(new pa.TextEncoder).encode(v)}catch(oa){}for(var t=
[],u=0;u<v.length;u++){var V=v.charCodeAt(u);128>V?t.push(V):2048>V?(t.push(V>>6|192),t.push(V&63|128)):55296===(V&64512)&&u+1<v.length&&56320===(v.charCodeAt(u+1)&64512)?(V=65536+((V&1023)<<10)+(v.charCodeAt(++u)&1023),t.push(V>>18|240),t.push(V>>12&63|128),t.push(V>>6&63|128),t.push(V&63|128)):(t.push(V>>12|224),t.push(V>>6&63|128),t.push(V&63|128))}return t}function Jb(v,t){var u,V;void 0===t&&(t=Ac);P("perfstart",(u={},u.i="serialize",u.t=Va(),u.m="start",u));Hc=Hc||new Uint8Array(ab("\u0001"));
var oa={entries:[],size:0},Xa=[oa];v.forEach(function(nb){var Cb={W:"",La:""};Cb.W+=nb.id+"\u0002";Cb.W=nb.name?Cb.W+(Ob(nb.name)+"\u0002"):Cb.W+"\u0002";nb.type&&"html"!==nb.type&&(Cb.W+=Ob(nb.type));nb.values&&Sa(nb.values,"\u0005",Cb);nb.attributes&&pb(nb.attributes,Cb);nb.Ob&&Sa(nb.Ob,"\u0011",Cb);nb.yb&&Sa(nb.yb,"\u0012",Cb);nb=new Uint8Array(ab(Cb.W+"\u0001"+Cb.La.slice(0,-1)));Cb=nb.byteLength+Hc.byteLength;0<oa.size&&oa.size+Cb>t&&(oa={entries:[],size:0},Xa.push(oa));oa.entries.push(nb);oa.size+=
Cb});var fb=0;u=Xa.map(function(nb){var Cb=new Uint8Array(nb.size-Hc.byteLength),Db=0;nb.entries.forEach(function(Pb){Cb.set(Pb,Db);Db+=Pb.byteLength;Db!==Cb.byteLength&&(Cb.set(Hc,Db),Db+=Hc.byteLength)});fb+=Cb.byteLength;return Cb});P("perfend",(V={},V.i="serialize",V.t=Va(),V.m="end",V.d=[["nodes",v.length],["out",fb]],V.a=!0,V));return u}function Sa(v,t,u){u.W+=t;v.Uc.forEach(function(V,oa){var Xa=v.values[oa];u.La+=V;"string"===typeof Xa?""!==Xa?u.W+=Ob(Xa):u.W+="\u0003":null===Xa||"undefined"===
typeof Xa?u.W+="\u0014":(u.W+="\u0004",u.La+="\u0002"+Xa);oa!==v.Uc.length-1&&(u.W+="\u0002");u.La+="\u0002"})}function pb(v,t){t.W+="\u0006";v.forEach(function(u,V){t.W+=Ob(u.name)+"\u0002";u.entries.Uc.forEach(function(oa,Xa){t.La+=oa;oa=u.entries.values[Xa];"string"===typeof oa?""!==oa?t.W+=Ob(oa):t.W+="\u0003":null===oa||"undefined"===typeof oa?t.W+="\u0014":(t.W+="\u0004",t.La+="\u0002"+oa);Xa!==u.entries.Uc.length-1&&(t.W+="\u0002");t.La+="\u0002"});V!==v.length-1&&(t.W+="\u0006")})}function ja(v,
t,u){for(var V=[];v.length;)v.splice(0,v.length).forEach(function(oa){na(oa,V,t,function(Xa){var fb=t(Xa.qd);u(Xa)&&v.unshift.apply(v,fb)})})}function na(v,t,u,V){v=[[v]];for(var oa=new Set;v.length;){var Xa=v.pop();if(Xa){var fb=Xa.shift();if(void 0===fb||db(t,fb.id))Xa.length&&v.push(Xa);else{var nb=oa.has(fb)?[]:u(fb.yb);nb.length?(oa.add(fb),Xa.push(fb),v.push(Xa),v.push(nb)):(oa["delete"](fb),fb.id&&t.push(fb.id),Xa.length&&v.push(Xa),V(fb))}}}}function Ta(v){if(v.kb<Zb.from)return!1;if(!(v.gi()<
Zb.from)){var t=v.og>=Zb.from,u=hb(v.values,Zb,Ac),V=zb(v,Zb,Ac),oa=hb(v.Ob,Zb,Ac),Xa=hb(v.yb,Zb,Ac);if(t||u||V||oa||Xa)jc.push({id:v.id,type:t?v.type:"html",name:t?v.name:void 0,values:u,attributes:V,Ob:oa,yb:Xa}),v.Oi()}if("iframe"===v.name)return!1;Mb(v,Zb.Vd);return!0}function W(v,t){v=Z("1");if(!v||v.ae<.9*Ac&&t-Ib<1E3*yb)return[null,[]];Ib=t;var u=[],V=[];Ia(Xc,function(oa){var Xa,fb;jc=[];var nb=(oa.Fg||0)+1;Zb={from:nb,Vd:Math.max(t,nb)};P("perfstart",(Xa={},Xa.i="collect",Xa.t=Va(),Xa.m=
"start",Xa));ja([oa],function(Cb){return Qa(Cb,Zb)},Ta);P("perfend",(fb={},fb.i="collect",fb.t=Va(),fb.m="end",fb.d=[["nodes",jc.length]],fb.a=!0,fb));oa.Fg=Math.min(oa.kb,t-1);0!==jc.length&&Jb(jc).forEach(function(Cb){Cb=Ya(Cb);bd&&V.push(Cb);u.push({data:bd?Cb:Array.prototype.slice.call(new Uint8Array(Cb)),from:Zb.from,to:Zb.Vd})})});return 0===u.length?[null,[]]:[u,V]}function ua(){return tb(this,void 0,void 0,function(){return kb(this,function(v){switch(v.label){case 0:return Ib=0,Y("collectorConfig",
function(t,u){Ac=u.maxSignalLength;yb=u.transmissionDelay;Ic=u.isEdgeOrIe;return u}),[4,ma()];case 1:return bd=v.B(),Y("collect",W,{Vc:!0}),[2]}})})}function ta(v){null!==v&&""!==v&&(v=v.replace(/[^- :\u2013\/\u2014._;,()=!?|<>+%\u20ac$\u00a2\u00a5\u00a3\u20bd\u5143\u20a8\u20bf'"@&\u3002\u3001\]\[\n\r\\]/g,"*"));return v}function Wa(v,t){v&&(t.prototype.toJSON=v)}function vb(v){var t=new Map,u=Date.prototype.toJSON;[Number,Boolean,String,Array,Object].forEach(function(V){t.set(V,V.prototype.toJSON);
delete V.prototype.toJSON});Date.prototype.toJSON=Ue;try{return JSON.stringify(v)}finally{t.forEach(Wa),Date.prototype.toJSON=u}}function Bb(v){var t=[];v=Z(v);if(!v)return[];ja([v],function(u){return(u=Z(u.sb()))?[u]:[]},function(u){u.id&&t.push(u.id);return!0});return t}function Wb(v,t,u){v.forEach(function(V){(V=Z(V))&&ja([V],function(oa){if(oa=oa.sb())if(oa=Z(oa))return[oa];return[]},function(oa){if(oa&&oa.id)t["delete"](oa.id);return!0})});t.forEach(function(V){if(V=Z(V))V.se(null,u),V.Db(null,
u),V.Eb(null,u)})}function Oa(v,t){var u=je.decode(t);if(u&&u.size){var V=[],oa=new Set;u.forEach(function(Xa){if(!be[Xa.type])return ha("Invalid Mutation List operation: "+Xa.type,{Nb:t});Xa.type!==Ld.X||void 0===Xa.V||oa.has(Xa.V)||(V.push(Xa.V),Bb(Xa.V).forEach(function(fb){oa.add(fb)}));return be[Xa.type](Xa,u.time)});Wb(V,oa,u.time)}else ha("Invalid Mutation List query",{Nb:t})}function ba(v,t,u,V,oa){for(var Xa,fb,nb,Cb,Db,Pb,Qc,w,C,H,aa;64<=oa;){Xa=t[0];fb=t[1];nb=t[2];Cb=t[3];Db=t[4];Pb=t[5];
Qc=t[6];w=t[7];for(H=0;16>H;H++)aa=V+4*H,v[H]=(u[aa]&255)<<24|(u[aa+1]&255)<<16|(u[aa+2]&255)<<8|u[aa+3]&255;for(H=16;64>H;H++)C=v[H-2],aa=(C>>>17|C<<15)^(C>>>19|C<<13)^C>>>10,C=v[H-15],C=(C>>>7|C<<25)^(C>>>18|C<<14)^C>>>3,v[H]=(aa+v[H-7]|0)+(C+v[H-16]|0);for(H=0;64>H;H++)aa=(((Db>>>6|Db<<26)^(Db>>>11|Db<<21)^(Db>>>25|Db<<7))+(Db&Pb^~Db&Qc)|0)+(w+(Zc[H]+v[H]|0)|0)|0,C=((Xa>>>2|Xa<<30)^(Xa>>>13|Xa<<19)^(Xa>>>22|Xa<<10))+(Xa&fb^Xa&nb^fb&nb)|0,w=Qc,Qc=Pb,Pb=Db,Db=Cb+aa|0,Cb=nb,nb=fb,fb=Xa,Xa=aa+C|0;
t[0]+=Xa;t[1]+=fb;t[2]+=nb;t[3]+=Cb;t[4]+=Db;t[5]+=Pb;t[6]+=Qc;t[7]+=w;V+=64;oa-=64}return V}function G(v,t){try{return(new ke).update(t).digest()}catch(u){}}function J(v){return new lb(function(t){setTimeout(t,v)})}function Q(){return tb(this,void 0,void 0,function(){return kb(this,function(v){switch(v.label){case 0:return Y("compress",mb),Y("mutations",Oa),Y("reset",Ga),Y("SHA-256",G),[4,ua()];case 1:return v.B(),[2]}})})}function x(){return tb(this,void 0,void 0,function(){return kb(this,function(v){switch(v.label){case 0:return self.postMessage("loaded",
void 0),[4,J(0)];case 1:return v.B(),[4,qa()];case 2:return v.B(),[4,Q()];case 3:return v.B(),[2]}})})}function A(){Za.pc(self,function(v,t,u){return tb(this,void 0,void 0,function(){var V;return kb(this,function(oa){switch(oa.label){case 0:if("worker"!==v.H)return[2];V=v.query;switch(V){case "source":return[3,1];case "initialize":return[3,2];case "initialized":return[3,5]}return[3,6];case 1:return Za.Ya(self,new Ma({H:"worker",query:"source",result:"("+("undefined"!==typeof jq&&jq.toString())+")();"})),
[3,6];case 2:return[4,qa({Eg:!0})];case 3:return oa.B(),[4,Q()];case 4:oa.B(),P("workerLoaded"),oa.label=5;case 5:u(),oa.label=6;case 6:return[2]}})})})}function M(){}function N(v,t){return function(){v.apply(t,arguments)}}function K(v){if(!(this instanceof K))throw new TypeError("Promises must be constructed via new");if("function"!==typeof v)throw new TypeError("not a function");this.Y=0;this.Sa=!1;this.aa=void 0;this.ma=[];Nb(v,this)}function Ja(v,t){for(;3===v.Y;)v=v.aa;0===v.Y?v.ma.push(t):(v.Sa=
!0,K.X(function(){var u=1===v.Y?t.uc:t.vc;if(null===u)(1===v.Y?La:$a)(t.Aa,v.aa);else{try{var V=u(v.aa)}catch(oa){$a(t.Aa,oa);return}La(t.Aa,V)}}))}function La(v,t){try{if(t===v)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===typeof t||"function"===typeof t)){var u=t.then;if(t instanceof K){v.Y=3;v.aa=t;sb(v);return}if("function"===typeof u){Nb(N(u,t),v);return}}v.Y=1;v.aa=t;sb(v)}catch(V){$a(v,V)}}function $a(v,t){v.Y=2;v.aa=t;sb(v)}function sb(v){2===v.Y&&0===
v.ma.length&&K.X(function(){v.Sa||K.na(v.aa)});for(var t=0,u=v.ma.length;t<u;t++)Ja(v,v.ma[t]);v.ma=null}function Kb(v,t,u){this.uc="function"===typeof v?v:null;this.vc="function"===typeof t?t:null;this.Aa=u}function Nb(v,t){var u=!1;try{v(function(V){u||(u=!0,La(t,V))},function(V){u||(u=!0,$a(t,V))})}catch(V){u||(u=!0,$a(t,V))}}var Yb="undefined"!==typeof window?window:self,pa=self,Ma=function(){function v(t){var u=t.id;u=void 0===u?void 0:u;var V=t.H,oa=t.query;t=t.result;u?this.id=u:(v.lb++,this.id=
v.lb);this.H=V;this.query=oa;this.result=void 0===t?void 0:t}v.decode=function(t){try{if("DT UI Worker Bridge"===t.type){var u=t.payload;return new v({id:u.id,H:u.handler,query:u.query,result:u.result})}}catch(V){}};v.prototype.Nf=function(t){"undefined"===typeof t?this.result=null:this.result=t};v.prototype.qa=function(){return{type:"DT UI Worker Bridge",payload:{id:this.id,handler:this.H,query:this.query,result:this.result}}};v.lb=0;return v}(),Za=function(){function v(t){t?this.port=t:(t=new MessageChannel,
this.port=t.port1,this.Hf=t.port2)}v.na=function(){v.X||(v.X=new Map)};v.pc=function(t,u){v.na();var V=v.X.get(t);if(V)V.push(u);else{var oa=[u];v.X.set(t,oa);t.addEventListener("message",function(Xa){var fb=Ma.decode(Xa.data);fb&&oa.forEach(function(nb){nb(fb,Xa,function(){v.Rc(t,u)})})})}return u};v.Rc=function(t,u){v.na();t=v.X.get(t)||[];t.splice(t.indexOf(u),1)};v.Ya=function(t,u,V){var oa=void 0===V?{}:V;V=oa.origin;V=void 0===V?"*":V;oa=oa.Vc;oa=void 0===oa?[]:oa;u=u.qa();F()||-1<Object.prototype.toString.call(t).indexOf("Worker")?
t.postMessage(u,oa):t.postMessage(u,V,oa)};v.prototype.Va=function(t){this.port.onmessage=function(u){(u=Ma.decode(u.data))&&t(u)}};v.prototype.send=function(t,u){void 0===u&&(u=[]);this.port.postMessage(t.qa(),u)};return v}(),eb,Ab=0,Lb,Vb,oc,rc,Gc=[],Cc=new Map,Xc=[],Yc=self.performance||Date,xc=Date.now()-Yc.now(),zc=Array(15);ib.prototype.Ji=function(){var v=this.gg.length;return 32+v+Math.floor(v/6)};ib.prototype.Dh=function(v){var t=this.gg,u=t.length,V=0,oa;var Xa=u;var fb=0;do v[fb]=Xa&127,
Xa>>>=7,0<Xa&&(v[fb]+=128),fb+=1;while(0<Xa);for(oa=fb;V<u;){Xa=Math.min(u-V,65536);var nb=void 0;var Cb,Db;fb=t;var Pb=V;var Qc=Xa;for(var w=v,C=oa,H=1;1<<H<=Qc&&14>=H;)H+=1;--H;oa=32-H;"undefined"===typeof zc[H]&&(zc[H]=new Uint16Array(1<<H));H=zc[H];for(Db=0;Db<H.length;Db++)H[Db]=0;Db=Pb+Qc;var aa=Pb;var va=Pb;var Ua=!0;if(15<=Qc)for(Qc=Db-15,Pb+=1,Cb=Ca(Ea(fb,Pb),oa);Ua;){var cb=32;var jb=Pb;do{Pb=jb;var Gb=Cb;jb=cb>>>5;cb+=1;jb=Pb+jb;if(Pb>Qc){Ua=!1;break}Cb=Ca(Ea(fb,jb),oa);nb=aa+H[Gb];H[Gb]=
Pb-aa}while(!Na(fb,Pb,nb));if(!Ua)break;C=ea(fb,va,Pb-va,w,C);do{cb=Pb;for(va=4;Pb+va<Db&&fb[Pb+va]===fb[nb+va];)va+=1;Pb+=va;Gb=cb-nb;for(cb=w;68<=va;)C=Ha(cb,C,Gb,64),va-=64;64<va&&(C=Ha(cb,C,Gb,60),va-=60);C=Ha(cb,C,Gb,va);va=Pb;if(Pb>=Qc){Ua=!1;break}nb=Ca(Ea(fb,Pb-1),oa);H[nb]=Pb-1-aa;cb=Ca(Ea(fb,Pb),oa);nb=aa+H[cb];H[cb]=Pb-aa}while(Na(fb,Pb,nb));if(!Ua)break;Pb+=1;Cb=Ca(Ea(fb,Pb),oa)}va<Db&&(C=ea(fb,va,Db-va,w,C));oa=C;V+=Xa}return oa};var Pc=ib,Lc=[[/\u0000/g,"\x00"],[/\u0001/g,"\u0001"],
[/\u0002/g,"\u0002"],[/\u0003/g,"\u0003"],[/\u0014/g,"\u0014"],[/\u0004/g,"\u0004"],[/\u0005/g,"\u0005"],[/\u0006/g,"\u0006"],[/\u0011/g,"\u0011"],[/\u0012/g,"\u0012"]],Hc,Zb,Ib=0,jc,Ac,yb,Ic=!1,bd,Uc=function(){function v(){this.Ra=[];this.values=[]}v.prototype.add=function(t,u){this.Ra[this.Ra.length-1]===u&&(this.Ra.pop(),this.values.pop());this.sb()!==t&&(this.Ra.push(u),this.values.push(t))};v.prototype.Kc=function(){return this.Ra.length?this.Ra[this.Ra.length-1]:0};v.prototype.sb=function(){return this.values.length?
this.values[this.values.length-1]:null};v.prototype.clear=function(t){var u=-1;this.Ra.forEach(function(V,oa){V<t&&(u=oa)});0<u&&(this.values=this.values.slice(u),this.Ra=this.Ra.slice(u))};v.prototype.find=function(t,u,V){void 0===u&&(u=0);void 0===V&&(V=!1);var oa=t.from,Xa=t.Vd,fb={Uc:[],values:[]},nb=-1,Cb=this.wh();this.Ra.forEach(function(Db,Pb){var Qc=Cb({time:Db,index:Pb,Ki:u,from:oa,Vd:Xa});Qc&&(fb.Uc.push(Qc.time),fb.values.push(Qc.value));V&&Db<oa&&(nb=Pb)});-1!==nb&&(fb.Uc.unshift(this.Ra[nb]-
oa),fb.values.unshift(this.values[nb]));return fb};v.prototype.wh=function(){var t=this;return function(u){return v.X(t,u)}.bind(this)};v.Fc=function(t,u){return 0!==u&&"string"===typeof t&&t.length>u};v.lb=function(t){return t.from<=t.time&&t.time<t.Vd};v.X=function(t,u){t=t.values[u.index];if(v.lb(u)&&!v.Fc(t,u.Ki))return{time:u.time-u.from,value:t}};return v}();(function(){function v(t){this.yf=t}v.create=function(t){return new v(t)};v.prototype.Ea=function(){return this.yf};return v})();(function(){function v(t){this.Af=
t}v.create=function(t){return new v(t)};v.prototype.Ea=function(){return this.Af};return v})();var od=function(){function v(t,u){this.name=t.attributeName||"";this.values=new Uc;this.da=t.da;this.kb=u;this.Rg=t.V;this.Nd(t.wa,u)}v.prototype.Ea=function(){return this.values.sb()};v.prototype.Nd=function(t,u){var V=Z(this.Rg);V&&"a"===V.name&&"href"===this.name&&(t="");"string"===typeof t&&(t=this.Fi(t));this.Ea()!==t&&(this.values.add(t,u),this.kb=u,V&&(V.Ta(t),V.Ta(u)))};v.prototype.Fi=function(t){var u=
Z(this.Rg);this.da&&this.da&32?t=t?t.replace(/./g,"*"):"":this.da&&this.da&16&&(t=ta(t));var V=u&&u.da&&u.da&2;if(V=(u&&u.da&&u.da&4||V)&&u){V=this.name;var oa;V=db(["input","textarea"],null===(oa=u.name)||void 0===oa?void 0:oa.toLowerCase())&&"value"===V}V&&(t=ta(t));return t};return v}(),Ue=Date.prototype.toJSON,Ld=function(){function v(t,u){if(!t||!u)throw ha("Invalid parameters for mutation construction",{type:t,Sg:u}),Error("Invalid parameters");this.type=t;this.V=u.V;this.nodeName=u.nodeName;
this.namespaceURI=u.namespaceURI;this.nodeValue=u.nodeValue;this.attributeName=u.attributeName;this.wa=u.wa;this.ja=u.ja;this.ia=u.ia;this.ka=u.ka;this.da=u.da}v.decode=function(t){try{var u=JSON.parse(t);return new v(u.type,{V:u.nodeId,nodeName:u.nodeName,namespaceURI:u.namespaceURI,nodeValue:u.nodeValue,attributeName:u.attributeName,wa:u.attributeValue,ja:u.parentId,ia:u.previousId,ka:u.nextId,da:u.masking})}catch(V){}};v.prototype.qa=function(){return vb({type:this.type,nodeId:this.V,nodeName:this.nodeName,
namespaceURI:this.namespaceURI,nodeValue:this.nodeValue,attributeName:this.attributeName,attributeValue:this.wa,parentId:this.ja,previousId:this.ia,nextId:this.ka,masking:this.da})};v.prototype.ue=function(){};v.na="addNode";v.lb="removeNode";v.X="updateNode";v.ye="updateNodeValue";v.Fc="updateAttribute";return v}(),ue=/(,?(\b|\s|\.|#)ng):((?!(a(ctive|ny(-link)*)|checked|d(efault|i(r\(.*\)|sabled))|e(mpty|nabled)|f(irst(-(child|of-type))*|ullscreen|ocus)|hover|in(determinate|valid|-range)|la(ng\(.*\)|(st-(child|of-type)))|l(eft|ink)|n(ot\(.*\)|th-((last-)*(child|of-type)\(.*\)))|o(nly-(child|of-type)|ptional|ut-of-range)|r(e(ad-(only|write)|quired)|ight|oot)|scope|target|v(alid|isited)))[^,\[\]]*\s*.*(,|{).*)/,
Ve=function(){function v(t,u){this.id=t.V;this.name=t.nodeName;this.og=u;this.id&&"1"===this.id.split(".").pop()&&(this.Fg=u-1,-1===Xc.indexOf(this)&&Xc.push(this));this.attributes=new Map;this.values=new Uc;this.Ob=new Uc;this.yb=new Uc;this.oe=new Uc;this.qd=new Uc;this.kb=this.og;this.cd=0;this.da=t.da;this.id&&this.name&&(this.ae=this.id.toString().length+1+this.name.toString().length+1);switch(t.namespaceURI){case "http://www.w3.org/2000/svg":this.type="svg";break;case "http://www.w3.org/1998/Math/MathML":this.type=
"mathml";break;case "dynatrace-metadata":this.type="dtmeta";break;default:this.type="html"}this.se(t.ja,u);this.Eb(t.ia,u);this.Db(t.ka,u);"string"===typeof t.nodeValue&&this.Nd(t.nodeValue,u);this.id&&t.ja&&this.cc(this.getParent())&&!t.ia&&this.cc(this.getParent()).Mf(this.id,u);"html"!==this.type&&this.Ta(this.type)}v.prototype.cc=function(t){return Z(t)};v.prototype.Be=function(t){if(!this.attributes.has(t.name)){var u=this.da&&this.da&2;if(u=this.da&&this.da&4||u){u=t.name;var V,oa=this.name||
"";u="selected"===u&&"option"===oa.toLowerCase()?!0:"checked"===u&&"input"===oa.toLowerCase()?db(["radio","checkbox"],null===(V=this.getAttribute("type"))||void 0===V?void 0:V.Ea()):!1}if(u){t=t.kb;var Xa;t=new od(new Ld("updateAttribute",{attributeName:"disabled",wa:"",da:1,V:this.id}),t);"input"===(null===(Xa=this.name)||void 0===Xa?void 0:Xa.toLowerCase())?this.Be(t):(Xa=this.cc(this.getParent()),V=(null===Xa||void 0===Xa?void 0:Xa.name)||"",Xa&&"optgroup"===V.toLowerCase()&&(Xa=Xa.cc(Xa.getParent()),
V=(null===Xa||void 0===Xa?void 0:Xa.name)||""),Xa&&"select"===V.toLowerCase()&&Xa.Be(t))}else this.attributes.set(t.name,t),this.hg(t),this.Ta(t.name)}};v.prototype.getAttribute=function(t){return this.attributes.get(t)};v.prototype.Bc=function(t){void 0!==t&&(this.kb=Math.max(t,this.kb),(t=this.cc(this.getParent()))&&t.Bc(this.kb))};v.prototype.hg=function(t){this.cd=Math.max(this.cd,t.kb);this.Bc(this.cd)};v.prototype.Ea=function(){return this.values.sb()};v.prototype.Nd=function(t,u){this.da&&
this.da&2&&(t=ta(t));if("#text"===this.name&&Ic){var V=this.cc(this.getParent());if(V&&"style"===V.name&&(!t||-1!==t.indexOf("ng:")))for(;ue.test(t);)t=t.replace(ue,"$1\\:$3")}this.Ea()!==t&&(this.values.add(t,u),this.Bc(u),this.Ta(t),this.Ta(u))};v.prototype.getParent=function(){return this.Ob.sb()};v.prototype.se=function(t,u){this.getParent()!==t&&(this.Ob.add(t,u),this.Bc(u),this.Ta(t),this.Ta(u))};v.prototype.yg=function(){return this.oe.sb()};v.prototype.Eb=function(t,u){this.yg()!==t&&(this.oe.add(t,
u),this.Bc(u),this.Ta(t),this.Ta(u))};v.prototype.wg=function(){return this.yb.sb()};v.prototype.Db=function(t,u){this.wg()!==t&&(this.yb.add(t,u),this.Bc(u))};v.prototype.$h=function(){return this.qd.sb()};v.prototype.Mf=function(t,u){this.$h()!==t&&(this.qd.add(t,u),this.Bc(u))};v.prototype.Oi=function(){this.ae=0};v.prototype.Ta=function(t){t="string"===typeof t?t:"number"===typeof t?t.toString():null===t?"null":"";this.ae+=t.length+1;var u=this.cc(this.getParent());u&&u.Ta(t)};v.prototype.gi=
function(){return Math.max(this.cd,this.values.Kc(),this.Ob.Kc(),this.qd.Kc(),this.yb.Kc(),this.oe.Kc())};return v}(),je=function(){function v(t){this.time=t;this.set=[];this.time=t;this.size=this.set.length}v.decode=function(t){try{var u=JSON.parse(t);if(u&&"Mutation List"===u.type){var V=u.payload,oa=new v(V.time);t=0;for(var Xa=V.entries;t<Xa.length;t++){var fb=Ld.decode(Xa[t]);fb&&oa.add(fb)}return oa}}catch(nb){}};v.Fc=function(t,u){var V=new v(u);t.forEach(function(oa){V.add(oa)});return V};
v.prototype.add=function(t){t instanceof Ld&&(this.set.push(t),this.size=this.set.length)};v.prototype.kg=function(t){this.set=this.set.filter(function(u){return u instanceof Ld&&!t(u)});this.size=this.set.length};v.prototype.forEach=function(t){this.set.forEach(function(u){return u instanceof Ld&&t(u)})};v.prototype.qa=function(){return vb({type:"Mutation List",payload:{time:this.time,entries:this.set.map(function(t){return t.qa()})}})};return v}(),Xd,be=(Xd={},Xd.addNode=function(v,t){var u=new Ve(v,
t);Cc.set(v.V,u);u=Z(v.ia);var V=Z(v.ka);u&&u.Db(v.V,t);V&&V.Eb(v.V,t)},Xd.updateNode=function(v,t){var u=Z(v.V),V=Z(v.ja),oa=Z(v.ka),Xa=Z(v.ia);u&&u.id&&(V&&u.se(V.id,t),Xa?(Xa.Db(u.id,t),u.Eb(v.ia,t)):V&&V.Mf(u.id,t),oa&&(oa.Eb(u.id,t),u.Db(v.ka,t)),u.Db(v.ka,t),u.Eb(v.ia,t))},Xd.removeNode=function(v,t){if((v=Z(v.V))&&v.id){var u=Z(v.getParent()),V=Z(v.wg()),oa=Z(v.yg());oa&&V?(oa.Db(V.id,t),V.Eb(oa.id,t)):oa?oa.Db(null,t):(V&&V.Eb(null,t),u&&u.Mf(V?V.id:null,t));v.se(null,t);v.Db(null,t);v.Eb(null,
t)}},Xd.updateNodeValue=function(v,t){var u=Z(v.V);u&&v.nodeValue&&u.Nd(v.nodeValue,t)},Xd.updateAttribute=function(v,t){var u=Z(v.V);if(void 0!==u&&v.attributeName){var V=u.getAttribute(v.attributeName);"undefined"===typeof V?(V=new od(v,t),u.Be(V)):(V.Nd(v.wa,t),u.hg(V))}},Xd),Zc=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ke=function(){function v(){this.Kh=
32;this.state=new Int32Array(8);this.Zf=new Int32Array(64);this.buffer=new Uint8Array(128);this.$d=this.Lb=0;this.finished=!1;this.reset()}v.prototype.reset=function(){this.state[0]=1779033703;this.state[1]=3144134277;this.state[2]=1013904242;this.state[3]=2773480762;this.state[4]=1359893119;this.state[5]=2600822924;this.state[6]=528734635;this.state[7]=1541459225;this.$d=this.Lb=0;this.finished=!1;return this};v.prototype.update=function(t,u){void 0===u&&(u=t.length);if(this.finished)throw Error("SHA256: can't update because hash was finished.");
var V=0;this.$d+=u;if(0<this.Lb){for(;64>this.Lb&&0<u;)this.buffer[this.Lb++]=t[V++],u--;64===this.Lb&&(ba(this.Zf,this.state,this.buffer,0,64),this.Lb=0)}64<=u&&(V=ba(this.Zf,this.state,t,V,u),u%=64);for(;0<u;)this.buffer[this.Lb++]=t[V++],u--;return this};v.prototype.finish=function(t){if(!this.finished){var u=this.$d,V=this.Lb,oa=u/536870912|0,Xa=u<<3;u=56>u%64?64:128;this.buffer[V]=128;for(V+=1;V<u-8;V++)this.buffer[V]=0;this.buffer[u-8]=oa>>>24&255;this.buffer[u-7]=oa>>>16&255;this.buffer[u-
6]=oa>>>8&255;this.buffer[u-5]=oa>>>0&255;this.buffer[u-4]=Xa>>>24&255;this.buffer[u-3]=Xa>>>16&255;this.buffer[u-2]=Xa>>>8&255;this.buffer[u-1]=Xa>>>0&255;ba(this.Zf,this.state,this.buffer,0,u);this.finished=!0}for(V=0;8>V;V++)t[4*V]=this.state[V]>>>24&255,t[4*V+1]=this.state[V]>>>16&255,t[4*V+2]=this.state[V]>>>8&255,t[4*V+3]=this.state[V]>>>0&255;return this};v.prototype.digest=function(){var t=new Uint8Array(this.Kh);this.finish(t);return t};return v}(),jd=setTimeout;K.prototype["catch"]=function(v){return this.then(null,
v)};K.prototype.then=function(v,t){var u=new this.constructor(M);Ja(this,new Kb(v,t,u));return u};K.prototype["finally"]=function(v){var t=this.constructor;return this.then(function(u){return t.resolve(v()).then(function(){return u})},function(u){return t.resolve(v()).then(function(){return t.reject(u)})})};K.all=function(v){return new K(function(t,u){function V(nb,Cb){try{if(Cb&&("object"===typeof Cb||"function"===typeof Cb)){var Db=Cb.then;if("function"===typeof Db){Db.call(Cb,function(Pb){V(nb,
Pb)},u);return}}oa[nb]=Cb;0===--Xa&&t(oa)}catch(Pb){u(Pb)}}if(!v||"undefined"===typeof v.length)return u(new TypeError("Promise.all accepts an array"));var oa=Array.prototype.slice.call(v);if(0===oa.length)return t([]);for(var Xa=oa.length,fb=0;fb<oa.length;fb++)V(fb,oa[fb])})};K.allSettled=function(v){return new this(function(t,u){function V(fb,nb){if(nb&&("object"===typeof nb||"function"===typeof nb)){var Cb=nb.then;if("function"===typeof Cb){Cb.call(nb,function(Db){V(fb,Db)},function(Db){oa[fb]=
{status:"rejected",reason:Db};0===--Xa&&t(oa)});return}}oa[fb]={status:"fulfilled",value:nb};0===--Xa&&t(oa)}if(!v||"undefined"===typeof v.length)return u(new TypeError(typeof v+" "+v+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var oa=Array.prototype.slice.call(v);if(0===oa.length)return t([]);var Xa=oa.length;for(u=0;u<oa.length;u++)V(u,oa[u])})};K.resolve=function(v){return v&&"object"===typeof v&&v.constructor===K?v:new K(function(t){t(v)})};K.reject=function(v){return new K(function(t,
u){u(v)})};K.race=function(v){return new K(function(t,u){if(!v||"undefined"===typeof v.length)return u(new TypeError("Promise.race accepts an array"));for(var V=0,oa=v.length;V<oa;V++)K.resolve(v[V]).then(t,u)})};K.X="function"===typeof setImmediate&&function(v){setImmediate(v)}||function(v){jd(v,0)};K.na=function(v){"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",v)};(function(){function v(){}v.Ri=function(){var t;void 0===t&&(t=K);lb||(lb=t)};return v})().Ri();
(function(){return tb(this,void 0,void 0,function(){return kb(this,function(v){switch(v.label){case 0:return F()?[4,x()]:[3,2];case 1:return v.B(),[3,3];case 2:A(),v.label=3;case 3:return[2]}})})})()})()})();}).call(this);
