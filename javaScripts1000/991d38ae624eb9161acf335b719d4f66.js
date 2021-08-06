//tealium universal tag - utag.327 ut4.0.202006160434, Copyright 2020 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){utag.ut.sha256=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);!function(r){var t=utag.ut.sha256,e=t.lib,a=e.WordArray,n=e.Hasher,s=t.algo,o=[],i=[];!function(){function t(t){for(var e=r.sqrt(t),a=2;a<=e;a++)if(!(t%a))return!1;return!0}function e(r){return 4294967296*(r-(0|r))|0}for(var a=2,n=0;n<64;)t(a)&&(n<8&&(o[n]=e(r.pow(a,.5))),i[n]=e(r.pow(a,1/3)),n++),a++}();var h=[],c=s.SHA256=n.extend({_doReset:function(){this._hash=new a.init(o.slice(0))},_doProcessBlock:function(r,t){for(var e=this._hash.words,a=e[0],n=e[1],s=e[2],o=e[3],c=e[4],l=e[5],u=e[6],f=e[7],_=0;_<64;_++){if(_<16)h[_]=0|r[t+_];else{var v=h[_-15],d=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,H=h[_-2],g=(H<<15|H>>>17)^(H<<13|H>>>19)^H>>>10;h[_]=d+h[_-7]+g+h[_-16]}var p=a&n^a&s^n&s,w=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),y=f+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&l^~c&u)+i[_]+h[_];f=u,u=l,l=c,c=o+y|0,o=s,s=n,n=a,a=y+(w+p)|0}e[0]=e[0]+a|0,e[1]=e[1]+n|0,e[2]=e[2]+s|0,e[3]=e[3]+o|0,e[4]=e[4]+c|0,e[5]=e[5]+l|0,e[6]=e[6]+u|0,e[7]=e[7]+f|0},_doFinalize:function(){var t=this._data,e=t.words,a=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=r.floor(a/4294967296),e[15+(n+64>>>9<<4)]=a,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var r=n.clone.call(this);return r._hash=this._hash.clone(),r}});t.SHA256=n._createHelper(c),t.HmacSHA256=n._createHmacHelper(c)}(Math);try{if(typeof b['emailaddress']!='undefined'&&b['emailaddress']!=''){b['emailaddress']=utag.ut.sha256.SHA256(b['emailaddress']).toString();}}catch(e){}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.email=u.data.email||b.emailaddress||"";(function(win,doc,sdk_url){if(win.snaptr)return;var tr=win.snaptr=function(){tr.handleRequest?tr.handleRequest.apply(tr,arguments):tr.queue.push(arguments);};tr.queue=[];var s='script';var new_script_section=doc.createElement(s);new_script_section.async=!0;new_script_section.src=sdk_url;var insert_pos=doc.getElementsByTagName(s)[0];insert_pos.parentNode.insertBefore(new_script_section,insert_pos);})(window,document,'https://sc-static.net/scevent.min.js');snaptr('init','0606f719-7218-4db0-bb09-e2a4003431f6',{'user_email':u.data.email});snaptr('track','PAGE_VIEW');}};utag.o[loader].loader.LOAD(id);})("327","grubhubseamless.grubhub");}catch(error){utag.DB(error);}
