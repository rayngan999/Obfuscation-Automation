if(_sz&&_sz.core&&_sz.core._isloaded!=null){if(_sz.core.warn){_sz.core.warn("Script requested to load and execute again, this is not desirable and will be blocked")}}else{var _sz=_sz||[];_sz.push(["accountid",1154]);var _sz=_sz||[];(function(l,b,h,j){var a={curr:window.location.href,ref:b.referrer,esc:function(d){return encodeURIComponent(new String(d).replace(/(\r?\n)+/g," ").replace(/\s+/g," ").replace(/^\s+|\s+$/,""))},empty:function(d){return(d==j||d==null||d=="")},tag:function(d){return(b.getElementsByTagName)?b.getElementsByTagName(d):[]},id:function(d){return(b.getElementById)?b.getElementById(d):false},clone:function(p){var m={};for(var d in p){if(p.hasOwnProperty(d)){m[d]=p[d]}}return m},rnd:function(){return Math.floor(Math.random()*100000)},txt:function(d){return(d.textContent)?d.textContent:d.innerText},uuid:function(){var d=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(d()+d()+"-"+d()+"-"+d()+"-"+d()+"-"+d()+d()+d())},navtime:function(){var d=l.performance||l.webkitPerformance||l.mozPerformance||l.msPerformance;return !d||!d.timing||d.timing.navigationStart<1?null:(new Date).getTime()-d.timing.navigationStart},_isready:false,_readyhandlers:[],register:function(m,d){d.base=this.actions[m];this.actions[m]=d},actions:{},action:function(m,d){this.actions[m].apply(this.actions,d)},data:[],ready:function(d){if(d===j){return this._isready||a.done()}else{this.when(this.ready,d)}},queueready:function(d){this._isready&&a.done()?d():this._readyhandlers.push(d)},done:function(){return(this._isloaded&&b&&b.body!=null&&(b.readyState=="interactive"||b.readyState=="complete"))},_isloaded:false,_whenTimer:null,when:function(d,n){var m=this.uuid();if(d()){n()}else{setTimeout(function(){a.when(d,n)},50)}},fmt:function(){var d=Array.prototype.slice.call(arguments);var p=d[0];var m=d.slice(1);for(var n=0;n<m.length;n++){var o=new RegExp("\\{"+n+"\\}","gm");p=p.replace(o,m[n])}return p},listen:function(d,m){if(d.addEventListener){d.addEventListener("mousedown",m,false)}else{if(d.attachEvent){d.attachEvent("onmousedown",m)}}},load:function(m){var n=b.createElement("script");n.type="text/javascript";n.async=true;n.src=m;var d=b.getElementsByTagName("script")[0];d.parentNode.insertBefore(n,d)},global:function(d){return(l[d]!==j&&l[d]!==null)?l[d]:null},_images:[],_idx:0,requesturl:function(n,m){var q=[];m.rnd=h.core.rnd();for(d in m){if(this.empty(m[d])){continue}q.push(d+"="+this.esc(m[d]))}var d=this._idx++,r=n+"?"+q.join("&");return r},request:function(m,d){var n=this.requesturl(m,d);this._images[e]=new Image();this._images[e].src="https://"+n;this.log("Requesting {0}",n)},_logqueue:[],_logshown:false,log:function(){this._logqueue.push({type:"msg",msg:Array.prototype.slice.call(arguments)});if(this._logshown){this.showlog()}},warn:function(){this._logqueue.push({type:"warn",msg:Array.prototype.slice.call(arguments)});if(this._logshown){this.showlog()}},showlog:function(){this._logshown=true;var n=b.getElementById("szdebugarea");if(n){n.parentNode.removeChild(n)}a.cookie("szngdebug",1);var r="";for(var p=0;p<this._logqueue.length;p++){var q=this._logqueue[p];r+='<p style="padding:8px;margin:0;margin-bottom:8px;background:#'+(q.type=="msg"?"FFF7C9":"ca0000;color:white")+';">'+((q.type=="warn")?"<b>Warning:</b> ":"")+decodeURIComponent(new String(this.fmt.apply(this,q.msg)).replace(/(&[a-z_]+=|\?)/g,"<br />&nbsp;&nbsp;&nbsp;$1"))+"</p>"}var m,d;d=b.createElement("a");d.href="#";d.innerHTML="\u00D7 Close";d.style.cssText="display:block;float:right;color:black;text-decoration:none;";d.onclick=function(o){m.parentNode.removeChild(m);a._logshown=false;a.cookie("szngdebug",null);return false};m=b.createElement("div");m.style.cssText="position:fixed;top:10px;right:10px;background:white;border:1px #ccc solid;width:800px;padding:20px;padding-bottom:10px;font-size:12px;font-family:Arial;line-height:135%;max-height:90%;overflow-y:auto;text-align:left;z-index:999";m.innerHTML=r;m.id="szdebugarea";m.appendChild(d);b.body.appendChild(m)},cookie:function(u,A,w){if(typeof A!="undefined"){w=w||{path:"/"};if(A===null){A="";w.expires=-1}var s="";if(w.expires&&(typeof w.expires=="number"||w.expires.toUTCString)){var q;if(typeof w.expires=="number"){q=new Date();q.setTime(q.getTime()+(w.expires*24*60*60*1000))}else{q=w.expires}s="; expires="+q.toUTCString()}var x=w.path?"; path="+(w.path):"; path=/";var r=w.domain?"; domain="+(w.domain):"";var z=w.secure?"; secure":"";var y=w.sameSite?"; samesite="+(w.samesite):"; samesite=lax";b.cookie=[u,"=",encodeURIComponent(A),s,x,r,z,y].join("")}else{var p=null;if(b.cookie&&b.cookie!==""){var m=b.cookie.split(";");for(var t=0;t<m.length;t++){var d=m[t].replace(/^\s+|\s+$/g,"");if(d.substring(0,u.length+1)==(u+"=")){p=decodeURIComponent(d.substring(u.length+1));break}}}return p}}};a.register("set",function(m,p){var n=m.split("."),o=h,d;while(n.length>0){d=n.shift();if(o[d]===j){o=0;break}if(n.length==0){break}o=o[d]}(o&&d)?o[d]=p:a.warn("No property named {0}",m)});a.register("register",function(d){a.register(d[0],d[1])});a.register("custom",function(m,o){var n="Running custom function";if(o&&o!=""){n+=": <strong>"+o+"</strong>"}a.log(n);try{m()}catch(d){a.warn("Custom function failed! "+d.message)}});a.register("setcurr",function(d){a.curr=d});a.register("setref",function(d){a.ref=d});a.register("loaded",function(){a._isloaded=true});a.register("showlog",function(){a.showlog()});function g(d){var m=d[0];if(a.actions[m]===j){a.action("set",d)}else{a.action(m,d.slice(1))}}var c=[];var f=[];for(var e=0;e<h.length;e++){c[e]=h[e];f[e]=h[e]}a.data=c;a.ready(function(){for(var d=0;d<f.length;d++){g(f[d])}while(a._readyhandlers.length>0){a._readyhandlers.shift().call()}a._isready=true});h.push=function(d){a.data.push(d);a.ready()?g(d):a.data.push(d)};h.core=a})(window,document,_sz);(function(n,a,l,m){var f={url:n.location.href,ref:a.referrer,title:a.title,res:n.screen.width+"x"+n.screen.height,accountid:null,groups:null,path:null,hits:null,sw:null,ct:null,uid:null,cid:null,cvid:null,rt:l.core.navtime(),prev:null,ourl:null,luid:l.core.uuid(),feedbackid:null,addcid:null,dnt:null};l.analytics={config:{cantrack:true,noonclick:false,ready:true,onClickKey:"szaocHandled"+l.core.rnd()},cookie:{name:"nmstat",domain:a.domain,expires:1000,secure:false},endpoint:{configured:false,host:"1154.global",domain:"siteimproveanalytics.io",path:"image.aspx",fullpath:function(d,o){if(!l.analytics.endpoint.configured){l.analytics.endpoint.host=l.analytics.endpoint.host.replace("{ACCOUNT_ID}",f.accountid||"shared");l.core.log("Configured host: {0}.{1}",l.analytics.endpoint.host,l.analytics.endpoint.domain);l.analytics.endpoint.configured=true}if(!o){o=d;d=this.host}return(d||this.host)+"."+this.domain+"/"+(o||this.path)}},state:{requested:false,requestTime:new Date(),tracked:false,onclickattached:false},opts:function(d){return f[d]},getsessid:function(){if(l.analytics.config.cantrack){var d=l.core.cookie(l.analytics.cookie.name);if(!d){d=(new Date()).getTime()+l.core.rnd();l.core.cookie(l.analytics.cookie.name,d,{expires:l.analytics.cookie.expires,domain:l.analytics.cookie.domain,secure:l.analytics.cookie.secure})}return d}else{return""}}};function h(p,d){d.prev=l.analytics.getsessid();d.rt=d.rt!==null?l.core.navtime():null;l.core.request(p,d)}function j(p,d){d.prev=l.analytics.getsessid();return l.core.requesturl(p,d)}function g(q){if(!l.analytics.config.cantrack||l.analytics.state.onclickattached){return}var r=function(u){try{if(u.href==null||u.href==""||u.href.toLowerCase().indexOf("javascript:")==0||u.href.indexOf("#")==0||u.href.charAt(u.href.length-1)=="#"||u.href==n.location.href||u.href.indexOf(n.location.href+"#")==0||u[l.analytics.config.onClickKey]===true){return true}if(!(q instanceof Array)){return false}for(var t=0;t<q.length;t++){if(u.href.indexOf(q[t])!==-1){return true}}return false}catch(s){return true}};var d=l.core.tag("a");var o=l.core.tag("area");var p=function(u){for(var s=0;s<u.length;s++){var t=u[s];if(r(t)){continue}(function(v){l.core.listen(v,function(){l.push(["request",{ourl:v.href,ref:n.location.href,autoonclick:1,rt:null}])});t[l.analytics.config.onClickKey]=true})(t)}};l.core.log("Attaching onclick handlers");p(d);p(o);l.analytics.state.onclickattached=true}var b=0;function c(o,d,p){return{aid:f.accountid,luid:f.luid,c:o,a:d,l:p,cid:f.cid,cvid:f.cvid,o:++b,d:Math.round((new Date()-l.analytics.state.requestTime)/1000)}}function e(){var d=window.doNotTrack||navigator.doNotTrack||navigator.msDoNotTrack;return d=="yes"||d=="1"||(window.external&&window.external.msTrackingProtectionEnabled&&window.external.msTrackingProtectionEnabled())}l.core.register("eventurl",function(p,d,q,o){if(!o){l.core.warn("You must provide a callback function");return}if(!p||!d){l.core.warn("Category and action must be provided for event.");return}else{if(!l.analytics.config.cantrack){return}}var r=j(l.analytics.endpoint.fullpath("event.aspx"),c(p,d,q));o(r)});l.core.register("event",function(o,d,p){if(!o||!d){l.core.warn("Category and action must be provided for event.");return}else{if(!l.analytics.config.cantrack){return}}h(l.analytics.endpoint.fullpath("event.aspx"),c(o,d,p))});l.core.register("dump",function(){console.debug(l.analytics);console.debug(f)});l.core.register("noonclick",function(d){l.analytics.config.noonclick=d});l.core.register("set",function(d,o){if(f.hasOwnProperty(d)){f[d]=o}else{this.set.base(d,o)}});l.core.register("breadcrumbs",function(o){if(!o||!a.querySelector){return}var d=a.querySelector(o);if(d){f.path=l.core.txt(d)}});l.core.register("groupselector",function(q){if(!q||!a.querySelectorAll){return}var p=a.querySelectorAll(q),d=[];if(f.groups){d.push(f.groups)}for(var o=0;o<p.length;o++){var r=l.core.txt(p[o]);if(r!=null){d.push(r)}}if(d.length>0){f.groups=d.join(",");l.core.log("Groups set: {0}",d.join(", "))}});l.core.register("metagroupname",function(q){var p=l.core.tag("meta"),d=[];if(f.groups){d.push(f.groups)}for(var o=0;o<p.length;o++){if(p[o].name==q){l.core.log("Metagroup pushing group: {0}",p[o].content);d.push(p[o].content)}}if(d.length>0){f.groups=d.join(",");l.core.log("Metagroup set: {0}",d.join(", "))}});l.core.register("param",function(d,o){if(typeof d=="object"){for(i in d){if(d.hasOwnProperty(i)){l.push(["param",i,d[i]])}}}else{l.core.log("Param {0} = {1}",d,o);f["grk_"+d]=o}});l.core.register("request",function(d){if(d.accountid===m){d.accountid=f.accountid}h(l.analytics.endpoint.fullpath(),d)});l.core.register("trackpageview",function(){var d=l.analytics;if(!d.state.tracked&&d.config.cantrack&&d.config.ready){h(d.endpoint.fullpath(),f);d.state.tracked=true;d.state.requestTime=new Date()}else{if(d.state.tracked){l.core.log("Already tracked...")}}});l.core.register("notrack",function(d){if(d===m){d=true}if(d){l.core.cookie("sz_notrack","true",{expires:1825})}else{l.core.cookie("sz_notrack",null)}l.analytics.config.cantrack=!d});l.tracking=function(){return l.analytics.config.cantrack};l.donottrack=function(){return f.dnt===true&&!!e()};l.core.register("trackdynamic",function(p){var d=f.url;f.url=n.location.href;f.ref=d;f.title=a.title;f.luid=l.core.uuid();f.rt=null;f.ourl=null;f.groups=null;f.path=null;f.hits=null;f.sw=null;l.analytics.state.tracked=false;l.analytics.state.onclickattached=false;if(p){if(typeof p=="object"&&!(p instanceof Array)){for(k in p){if(p.hasOwnProperty(k)){l.push([k,p[k]])}}}else{if(p.length>0){for(var o=0;o<p.length;o++){l.push(p[o])}}}}if(!f.ourl){f.ourl=f.url}l.push(["invoketracking"])});l.core.register("invoketracking",function(){if(!!l.analytics.config.cantrack&&l.donottrack()){l.core.log("Do not track enabled");l.analytics.config.cantrack=false}if(!l.analytics.config.cantrack){l.core.log("Tracking not enabled, skipping invocation");return}l.push(["trackpageview"]);if(l.analytics.config.noonclick!==true){g(l.analytics.config.noonclick)}});l.core.ready(function(){l.core.log("Running ready at {0}",new Date().getTime());if(l.core.cookie("sz_notrack")!==null){l.push(["notrack"])}l.push(["invoketracking"])})})(window,document,_sz);_sz.core._isloaded=true};