//2021-06-14
var avlDomain = 'delivery.yomedia.vn';
var staticDomain = 'static.yomedia.vn';
var avlProtocal = (document.location.protocol == 'http:') ? 'http://' : 'https://';
var avlDelivery = avlProtocal + avlDomain + '/delivery';

var yomediaDom = new function(){
	return {
		docWrite: function (string) {
			var wrapper= document.createElement('div');
			wrapper.innerHTML= string;
			yomediaDom.insertNode(yomediaDom.getCurrentScript(), wrapper, 'after');
		},
		insertNode: function (parent, obj, insert) {
			obj.childNodes.forEach(function(node) {
				var nn = yomediaDom.createNode(parent, node, insert);
				if (insert === 'after') {
					parent = nn;
				}
			});
		},
		createNode: function (parent, node, insert) {	
			var newNode = null;
			switch(node.nodeType) {
				case 1:
					newNode = document.createElement(node.tagName);
					if (node.tagName.toLowerCase() === "script") {
						newNode.async = node.async;
					}
					Array.prototype.slice.call(node.attributes).forEach(function(item) {
						newNode.setAttribute(item.name, item.value);
					});
					yomediaDom.insertNode(newNode, node);
					break;
				case 2:
					break;
				case 3:
					newNode = document.createTextNode(node.textContent);
					break;
				case 8:
					newNode = document.createComment(node.textContent);
					break;
				default:
					newNode = node;
					break;
			}
			if (insert === 'after') {
				yomediaDom.insertAfter(newNode, parent);
			} else {
				parent.appendChild(newNode);
			}
			return newNode;
		},
		getCurrentScript: function () {
			return document.currentScript || (function() {var s = document.getElementsByTagName('script');return s[s.length-1]})();
		},
		insertAfter: function (n, b) {
			var a = b.nextSibling;
    		a ? a.parentNode.insertBefore(n, a) : b.parentNode.appendChild(n);
		}
	}
}

var avlConfig = new function(){
	var private = {
		'CSS': avlProtocal + staticDomain + '/css/advStyle.css',
		'JW': avlProtocal + staticDomain + '/flash/jwplayer5/player.swf',
		'EI': avlProtocal + staticDomain + '/flash/expressInstall.swf',
		'ICW': 'avlContent',
		'IC': '',
		'OI': 'avlOverlayInner',
		'VI': 'avlVideoInner',
		'OW': 'avlOverlayWrapper',
		'CW': document.documentElement.clientWidth,
		'CH': window.innerHeight || document.documentElement.clientHeight
	};

	return {
		get: function(name) { return private[name]; }
	};
}

var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
var FlashDetect=new function(){var self=this;self.installed=false;self.raw="";self.major=-1;self.minor=-1;self.revision=-1;self.revisionStr="";var activeXDetectRules=[{"name":"ShockwaveFlash.ShockwaveFlash.7","version":function(obj){return getActiveXVersion(obj);}},{"name":"ShockwaveFlash.ShockwaveFlash.6","version":function(obj){var version="6,0,21";try{obj.AllowScriptAccess="always";version=getActiveXVersion(obj);}catch(err){}
return version;}},{"name":"ShockwaveFlash.ShockwaveFlash","version":function(obj){return getActiveXVersion(obj);}}];var getActiveXVersion=function(activeXObj){var version=-1;try{version=activeXObj.GetVariable("$version");}catch(err){}
return version;};var getActiveXObject=function(name){var obj=-1;try{obj=new ActiveXObject(name);}catch(err){obj={activeXError:true};}
return obj;};var parseActiveXVersion=function(str){var versionArray=str.split(",");return{"raw":str,"major":parseInt(versionArray[0].split(" ")[1],10),"minor":parseInt(versionArray[1],10),"revision":parseInt(versionArray[2],10),"revisionStr":versionArray[2]};};var parseStandardVersion=function(str){var descParts=str.split(/ +/);var majorMinor=descParts[2].split(/\./);var revisionStr=descParts[3];return{"raw":str,"major":parseInt(majorMinor[0],10),"minor":parseInt(majorMinor[1],10),"revisionStr":revisionStr,"revision":parseRevisionStrToInt(revisionStr)};};var parseRevisionStrToInt=function(str){return parseInt(str.replace(/[a-zA-Z]/g,""),10)||self.revision;};self.majorAtLeast=function(version){return self.major>=version;};self.minorAtLeast=function(version){return self.minor>=version;};self.revisionAtLeast=function(version){return self.revision>=version;};self.versionAtLeast=function(major){var properties=[self.major,self.minor,self.revision];var len=Math.min(properties.length,arguments.length);for(i=0;i<len;i++){if(properties[i]>=arguments[i]){if(i+1<len&&properties[i]==arguments[i]){continue;}else{return true;}}else{return false;}}};self.FlashDetect=function(){if(navigator.plugins&&navigator.plugins.length>0){var type='application/x-shockwave-flash';var mimeTypes=navigator.mimeTypes;if(mimeTypes&&mimeTypes[type]&&mimeTypes[type].enabledPlugin&&mimeTypes[type].enabledPlugin.description){var version=mimeTypes[type].enabledPlugin.description;var versionObj=parseStandardVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revisionStr=versionObj.revisionStr;self.revision=versionObj.revision;self.installed=true;}}else if(navigator.appVersion.indexOf("Mac")==-1&&window.execScript){var version=-1;for(var i=0;i<activeXDetectRules.length&&version==-1;i++){var obj=getActiveXObject(activeXDetectRules[i].name);if(!obj.activeXError){self.installed=true;version=activeXDetectRules[i].version(obj);if(version!=-1){var versionObj=parseActiveXVersion(version);self.raw=versionObj.raw;self.major=versionObj.major;self.minor=versionObj.minor;self.revision=versionObj.revision;self.revisionStr=versionObj.revisionStr;}}}}}();};FlashDetect.JS_RELEASE="1.0.4";

var Base64 = {
	b64ToUint6: function (nChr) {
	    return nChr > 64 && nChr < 91 ?
	        nChr - 65 : nChr > 96 && nChr < 123 ?
	        nChr - 71 : nChr > 47 && nChr < 58 ?
	        nChr + 4 : nChr === 43 ?
	        62 : nChr === 47 ?
	        63 :
	        0;
	},
	base64DecToArr: function (sBase64, nBlocksSize) {
	    var
	        sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""),
	        nInLen = sB64Enc.length,
	        nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2,
	        taBytes = new Uint8Array(nOutLen);

	    for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
	        nMod4 = nInIdx & 3;
	        nUint24 |= Base64.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
	        if (nMod4 === 3 || nInLen - nInIdx === 1) {
	            for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
	                taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
	            }
	            nUint24 = 0;

	        }
	    }

	    return taBytes;
	},
	uint6ToB64: function (nUint6) {
	    return nUint6 < 26 ?
	        nUint6 + 65 : nUint6 < 52 ?
	        nUint6 + 71 : nUint6 < 62 ?
	        nUint6 - 4 : nUint6 === 62 ?
	        43 : nUint6 === 63 ?
	        47 :
	        65;
	},
	base64EncArr: function (aBytes) {
	    var nMod3 = 2,
	        sB64Enc = "";

	    for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
	        nMod3 = nIdx % 3;
	        if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) {
	            sB64Enc += "\r\n";
	        }
	        nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
	        if (nMod3 === 2 || aBytes.length - nIdx === 1) {
	            sB64Enc += String.fromCharCode(Base64.uint6ToB64(nUint24 >>> 18 & 63), Base64.uint6ToB64(nUint24 >>> 12 & 63), Base64.uint6ToB64(nUint24 >>> 6 & 63), Base64.uint6ToB64(nUint24 & 63));
	            nUint24 = 0;
	        }
	    }

	    return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? '' : nMod3 === 1 ? '=' : '==');
	},
	UTF8ArrToStr: function (aBytes) {
	    var sView = "";

	    for (var nPart, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
	        nPart = aBytes[nIdx];
	        sView += String.fromCharCode(
	            nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
	            /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
	            (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128 : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
	            (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128 : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
	            (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128 : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
	            (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128 : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
	            (nPart - 192 << 6) + aBytes[++nIdx] - 128 : /* nPart < 127 ? */ /* one byte */
	            nPart
	        );
	    }

	    return sView;
	},
	strToUTF8Arr: function (sDOMStr) {
	    var aBytes, nChr, nStrLen = sDOMStr.length,
	        nArrLen = 0;

	    /* mapping... */

	    for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
	        nChr = sDOMStr.charCodeAt(nMapIdx);
	        nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
	    }

	    aBytes = new Uint8Array(nArrLen);

	    /* transcription... */

	    for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
	        nChr = sDOMStr.charCodeAt(nChrIdx);
	        if (nChr < 128) {
	            /* one byte */
	            aBytes[nIdx++] = nChr;
	        } else if (nChr < 0x800) {
	            /* two bytes */
	            aBytes[nIdx++] = 192 + (nChr >>> 6);
	            aBytes[nIdx++] = 128 + (nChr & 63);
	        } else if (nChr < 0x10000) {
	            /* three bytes */
	            aBytes[nIdx++] = 224 + (nChr >>> 12);
	            aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
	            aBytes[nIdx++] = 128 + (nChr & 63);
	        } else if (nChr < 0x200000) {
	            /* four bytes */
	            aBytes[nIdx++] = 240 + (nChr >>> 18);
	            aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
	            aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
	            aBytes[nIdx++] = 128 + (nChr & 63);
	        } else if (nChr < 0x4000000) {
	            /* five bytes */
	            aBytes[nIdx++] = 248 + (nChr >>> 24);
	            aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
	            aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
	            aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
	            aBytes[nIdx++] = 128 + (nChr & 63);
	        } else /* if (nChr <= 0x7fffffff) */ {
	            /* six bytes */
	            aBytes[nIdx++] = 252 + (nChr >>> 30);
	            aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
	            aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
	            aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
	            aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
	            aBytes[nIdx++] = 128 + (nChr & 63);
	        }
	    }

	    return aBytes;
	},
	encode: function(value){
		return Base64.base64EncArr(Base64.strToUTF8Arr(value));
	},
	decode: function(value){
		return Base64.UTF8ArrToStr(Base64.base64DecToArr(value));
	}
}

var domManipulate = {
	create: function(tag, id, style, html) {
        var domEl = document.createElement(tag);
        if (id) domEl.id = id;
        if (style) domEl.setAttribute('style', style);
        if (html) domEl.innerHTML = html;
        return domEl;
    },
    remove: function(id) {
        var domEl = domManipulate.getElid(id);
        if (domEl) {
        	domEl.parentNode.removeChild(domEl)
        }
    },
    append: function(newEl, existEl) {
        if (existEl) {
            var domParent = existEl.parentNode;
            domParent.insertBefore(newEl, existEl)
        } else document.body.appendChild(newEl)
    },
    insertAfter: function (n, b) {
		var a = b.nextSibling;
		a ? a.parentNode.insertBefore(n, a) : b.parentNode.appendChild(n);
	},
    getElid: function(id) {
        return document.getElementById(id)
    }
}

var avlHelperModule  = new function(){

	return {
		loadAvlStyle: function(){
			var css = document.createElement('link'), html_doc = document.getElementsByTagName('head')[0];
			css.rel = 'stylesheet';
			css.rev = 'stylesheet';
			css.type = 'text/css';
			css.href = avlConfig.get('CSS');
			html_doc.appendChild(css);
		},
		embedJs: function(src){
	        var isAble = true;
	        if (navigator.appVersion.indexOf("MSIE 7.") != -1) isAble = false;
	        if (isAble) {
	            yomediaDom.docWrite('<script type="text/javascript" src="' + src + '"></script>')
	        }
		},
		appendJs: function(src, async){
	        var a = document.createElement("script");
	        a.type = "text/javascript";
	        a.src = src;
	        a.async = async ? true : false;
	        cs = yomediaDom.getCurrentScript();
	        domManipulate.insertAfter(a, cs);
		},
		embedJsNoCheck: function(src){
	        var a = document.createElement("script");
	        a.type = "text/javascript";
	        a.src = src;
	        domManipulate.append(a)
		},
		embedTracking: function(src){
	        var a = document.createElement("img");
	        a.src = src;
	        a.height = 0;
	        a.width = 0;
	        domManipulate.append(a)
		},
        embedTrackingIframe: function(a, b) {
            if (document.location.protocol != 'https:') {
                var c = document.createElement("iframe");
                c.id = 'trackIFrame';
                c.setAttribute('name', 'track' + a);
                c.setAttribute('frameborder', '0');
                c.setAttribute('allowtransparency', 'true');
                c.setAttribute('height', '0');
                c.setAttribute('width', '0');
                c.setAttribute('marginheight', '0');
                c.setAttribute('marginwidth', '0');
                c.setAttribute('vspace', '0');
                c.setAttribute('hspace', '0');
                c.setAttribute('src', b);
                document.body.appendChild(c)
            }
        },		
		randSuffix: function(){
			return 'r='+this.randNumber(10);
		},
		randNumber: function(length) {
            var result = '';
            for (i = 0; i < length; i++) {
                result += Math.floor(Math.random() * 9);
            }
            return result;
        },
		getQueryString: function(varObj){
            var result 	= '';
            var index 	= 0;
            for (obj in varObj) {
            	var value = varObj[obj];
            	if( value != undefined && value != ''){
	            	index++;
	            	if(index != 1){
	            		result += '&';
	            	}else{
	            		result += '?';
	            	}
	                result += obj + "=" + value;
                }
            }
            return result;
		},
		validateUrl: function(varObj){
			var myRegExp =/^(?:(?:https?):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
			if (!myRegExp.test(varObj)){
		    	return false;
			}else{
				return true;
			}
		},
		embedCss: function(varObj){
			var css = document.createElement('link'), html_doc = document.getElementsByTagName('head')[0];
			css.rel = 'stylesheet';
			css.rev = 'stylesheet';
			css.type = 'text/css';
			css.href = varObj;
			html_doc.appendChild(css);
		}
	}

}

var avlInteractModule = new function(){
	var t;
	return {
        setCookie: function(c, v, a) {
            var b = new Date();
            b.setDate(b.getDate() + a);
            document.cookie = c + "=" + escape(v) + ((a == null) ? "" : "; expires=" + b.toUTCString())
        },
        getCookie: function(c) {
            if (document.cookie.length > 0) {
                cs = document.cookie.indexOf(c + "=");
                if (cs != -1) {
                    cs = cs + c.length + 1;
                    ce = document.cookie.indexOf(";", cs);
                    if (ce == -1) ce = document.cookie.length;
                    return unescape(document.cookie.substring(cs, ce))
                }
            }
            return ""
        },		
        rotatorPercentAd: function(c, a, p, b) {
            var d = avlInteractModule.getCookie(c);
            var e = new Array();
            var l = a.length;
            var n = 0;


            for (var i = 0; i < l; i++) {
            	var percent = p[i] > 0 ? p[i] : 1;
                for (var j = 0; j < percent; j++) {
                    e[n] = a[i];
                    n++
                }
            }
            if (d === null || d == '') d = 0;
            d = new Number(d);
            if (d >= e.length) d = 0;

            if (e.length > 0) {
                if (b != '') {
                    domManipulate.remove(b);
                    yomediaDom.docWrite('<div id="' + b + '">' + e[d] + '</div>')
                } else yomediaDom.docWrite(e[d]);
                avlInteractModule.setCookie(c, d + 1, 365)
            }
        },
		createOverlayInner: function(){
			var elId = avlConfig.get('OI');
			avlInteractModule.removeOverlayInner();
            var el = domManipulate.create('div', elId);
            el.setAttribute('style', "display:none;");
            domManipulate.append(el);
		},
		removeOverlayInner: function(){
			var elId = avlConfig.get('OI');
            if (domManipulate.getElid(elId)) domManipulate.remove(elId);
		},
		createOverlayWrapper: function(){
			var elId = avlConfig.get('OW');
			avlInteractModule.removeOverlayWrapper();
            var el = domManipulate.create('div', elId);
            el.setAttribute('style', "display:none;");
            domManipulate.append(el);
		},
		removeOverlayWrapper: function(){
			var elId = avlConfig.get('OW');
            if (domManipulate.getElid(elId)) domManipulate.remove(elId);
		},
		initOverlay: function(){
			avlInteractModule.createOverlayInner();
			avlInteractModule.createOverlayWrapper();	
		},
		removeOverlay: function(){
			avlInteractModule.removeOverlayInner();
			avlInteractModule.removeOverlayWrapper();
		},
		showOverlay: function(position, w, h){
			var OI = domManipulate.getElid(avlConfig.get('OI'));
			var OW = domManipulate.getElid(avlConfig.get('OW'));
			var ml = -(w/2);
			switch(position){
				case 'center':
					mt = -(h/2);
					break;
			}
			OI.setAttribute('style', "width:"+w+"px;height:"+h+"px;top:50%;left:50%;margin-left:"+ml+"px;margin-top:"+mt+"px;display:block;");
			OW.setAttribute('style', "display:block;");
		},
        removeVideoInline: function(playerInnerId, playerAdsId) {
			if(playerInnerId == ''){
				playerInnerId = "YoMediaDiv"+playerAdsId;
			}
            var playerInnerHtml = domManipulate.getElid(playerInnerId).innerHTML;
            var playerInnerStyle = domManipulate.getElid(playerInnerId).getAttribute('style');
            playerInnerStyle = playerInnerStyle.replace('DISPLAY', 'display');
            playerInnerStyle = playerInnerStyle.replace('display: none', 'display: block');
            var newPlayerInner = domManipulate.create('div', playerInnerId, playerInnerStyle, playerInnerHtml);
            var domPlayerAds = domManipulate.getElid(playerAdsId);
            domManipulate.append(newPlayerInner, domPlayerAds);
            domManipulate.remove(playerAdsId)
        },		
		initVideoInline: function(pid, elw, elh, el, w, z, fp, a, az, autoStart, v, d, cs, ovr){
			var domWrapPlayer = domManipulate.create('div', el, 'position:relative;top:0;bottom:0;');
			//check if not have player id
			if(pid ===''){
				pid = "YoMediaDiv"+el;
				document.body.innerHTML += '<div id="'+pid+'"></div>';
			} else {
				if (!document.getElementById(pid)){
					if (document.getElementsByClassName(pid)[0]) {
						document.getElementsByClassName(pid)[0].setAttribute('id', pid);
					}
				}
			}

			var domPlayerInner = domManipulate.getElid(pid);
			var domPlayerAds = domManipulate.create('div', 'inner' + el, 'position:relative;width:' + elw + 'px;height:' + elh + 'px;', '<div id="' + avlConfig.get('ICW') + el + '"><p>' + avlConfig.get('') + '</p></div>');
            domManipulate.append(domWrapPlayer, domPlayerInner);
            domWrapPlayer.appendChild(domPlayerAds);
            domWrapPlayer.appendChild(domPlayerInner);
            //var styleDomPlayerInner = domPlayerInner.getAttribute('style');
            //if (styleDomPlayerInner == null) styleDomPlayerInner = '';
            //styleDomPlayerInner = 'display: none;' + styleDomPlayerInner;
            //domPlayerInner.setAttribute('style', styleDomPlayerInner);
        	domPlayerInner.style.display = "none";

            var varObj={};
            varObj['wid'] = w;
            varObj['zid'] = z;
            varObj['fpid'] = fp;
            varObj['aid'] = a;
            varObj['azid'] = az;
            varObj['cs'] = cs;
            varObj['ovr'] = ovr;

            var queryString = avlHelperModule.getQueryString(varObj);
			var link = avlDelivery+ '/ova' + queryString;

            jwplayer('inner' + el).setup({
			    "flashplayer": avlConfig.get('JW'),
			    "mute": false,
			    "width": elw,
			    "height": elh,
			    "volume": v,
                "duration": d,
			    "autostart": autoStart,
			    "controlbar": {
			        "position": "bottom"
			    },
			    "config": link,
			    "plugins": {
			        "ova-jw": {}
			    }
			});
		},	
		initVideoInlineVPaid: function(pid, elw, elh, el, w, z, fp, a, az, autoStart, v, d, cs, ovr){
			var domWrapPlayer = domManipulate.create('div', el, 'position:relative;top:0;bottom:0;');
            var domPlayerInner = domManipulate.getElid(pid);
            var domPlayerAds = domManipulate.create('div', 'inner' + el, 'position:relative;width:' + elw + 'px;height:' + elh + 'px;', '<div id="' + avlConfig.get('ICW') + el + '"><p>' + avlConfig.get('') + '</p></div>');
            domManipulate.append(domWrapPlayer, domPlayerInner);
            domWrapPlayer.appendChild(domPlayerAds);
            domWrapPlayer.appendChild(domPlayerInner);
            var domSkipAd = domManipulate.create('div', 'skipad'+el, 'display:none;z-index:999999;', '<a style="z-index:999999;display:block;position: absolute;top: 0px;left: '+(parseInt(elw) - 79)+'px;" onclick="skipAds();" href="javascript:;"><img src="http://static.yomedia.vn/2015/09/skip-ad.png" /></a>');
            domWrapPlayer.appendChild(domSkipAd);
            var styleDomPlayerInner = domPlayerInner.getAttribute('style');
            if (styleDomPlayerInner == null) styleDomPlayerInner = '';
            styleDomPlayerInner = 'display: none;' + styleDomPlayerInner;
            domPlayerInner.setAttribute('style', styleDomPlayerInner);

            var varObj={};
            varObj['wid'] = w;
            varObj['zid'] = z;
            varObj['fpid'] = fp;
            varObj['aid'] = a;
            varObj['azid'] = az;
            varObj['cs'] = cs;
            varObj['ovr'] = ovr;

            var queryString = avlHelperModule.getQueryString(varObj);
			var link = avlDelivery+ '/ova' + queryString;

            jwplayer('inner' + el).setup({
			    "flashplayer": avlConfig.get('JW'),
			    "mute": false,
			    "width": elw,
			    "height": elh,
			    "volume": v,
                "duration": d,
			    "autostart": autoStart,
			    "controlbar": {
			        "position": "bottom"
			    },
			    "config": link,
			    "plugins": {
			        "ova-jw": {}
			    }
			});

		},
		initVideoPopup: function(pid, elw, elh, el, w, z, fp, a, az, autoStart, v, d, cs){

            var varObj={};
            varObj['wid'] = w;
            varObj['zid'] = z;
            varObj['fpid'] = fp;
            varObj['aid'] = a;
            varObj['azid'] = az;
            varObj['cs'] = cs;

            var queryString = avlHelperModule.getQueryString(varObj);
			var link = avlDelivery+ '/ova' + queryString;

			var elVideoInner = domManipulate.create('div', avlConfig.get('VI'));
			var OI = domManipulate.getElid(avlConfig.get('OI'));
			OI.appendChild(elVideoInner);

            jwplayer(elVideoInner).setup({
			    "flashplayer": avlConfig.get('JW'),
				'logo.file': "",
				'logo.position': "top-left",
				'logo.hide': true,
			    "width": elw,
			    "height": elh,
			    "volume": v,
			    "mute": false,
                "duration": d,
			    "autostart": true,
			    "config": link,
                "controlbar":"hide",
			    "plugins": {
			        "ova-jw": {}
			    }
			});
		},
		initBalloon: function(a, b, w, h, c, e, f, g, i, z, o, p, s, t, u, y, fv) {
            var M = '<div id="' + avlConfig.get('ICW') + a + '"></div>';
	        if (domManipulate.getElid(a)) domManipulate.remove(a);
	        var d = domManipulate.create('div', a);
	        domManipulate.append(d);
	        // if (v != '') d.onmouseover = v;
	        // if (x != '') d.onmouseout = x;
	        d.setAttribute('style', "display:none;min-width:" + w + "px;min-height:" + h + "px;");
	        d.innerHTML = M

            if (c != 0) w = c;
            if (e != 0) h = e;
            if(typeof(fv) == 'undefined'){
            	var fv = {
	                zid: z
	            };
            }
            
            var bM = {
                allowScriptAccess: "always",
                allowDomain: "*",
                quality: "high",
                wmode: s
            };
            var bN = {
                id: b,
                name: b
            };
            swfobject.embedSWF(f, avlConfig.get('ICW') + a, w, h, "9.0.0", avlConfig.get('EI'), fv, bM, bN);
		},
        isFlash: function() {
            if (typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") {
                return true
            } else if (typeof window.ActiveXObject != "undefined") {
                try {
                    new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    return true
                } catch (e) {}
            };
            return false
        },
        showBalloon: function(b, c, w, h, d, e, f, g, i, j) {
            var k = (d > 0) ? d : w;
            var l = (e > 0) ? e : h;
            var m = this.isFlash();
            if (m == true) var a = avlInteractModule.getPosition(c, k, l);
            else var a = avlInteractModule.getPosition(c, w, h);
            var n = a[0] + ':' + a[1] + a[2] + ';' + a[3] + ':' + a[4] + a[5] + ';display:block;line-height:normal;overflow:hidden;position:fixed;z-index:2147483640!important;';
            var el = domManipulate.getElid(b);
            var s = el.getAttribute('style');
            el.setAttribute('style',n);
            el.style.display = 'block';
            clearTimeout(t);
            if(m == true){
            	t = setTimeout("avlInteractModule.callControl('" + f + "', '" + g + "', " + i + ", " + j + ");", i)
            }
        },
		initBanner: function(a, b, w, h, f, fv, s, m) {
            var M = '<div id="' + avlConfig.get('ICW') + a + '"></div>';            
	        if (domManipulate.getElid(a)) domManipulate.remove(a);
	        var d = null;
	        if(typeof m != 'undefined' && '' != m){
	        	var div_main = document.getElementById(m);
	        	if (!div_main) {
	        		document.getElementsByClassName(m)[0].setAttribute('id', m);
		        }
	        	div_main = document.getElementById(m);
	        	d = document.createElement("div");
	        	d.setAttribute('id', a);
	        	div_main.parentNode.insertBefore(d, div_main.nextSibling);
	        } else {
	        	yomediaDom.docWrite("<div id='"+a+"'></did>");
		        d = domManipulate.getElid(a);
	        }
	        
	        
	        d.style.cssText = 'position: relative; display: block; margin: auto; width: '+w+'px; height: '+h+'px; z-index: 214748000;';
	        var close = document.createElement("IMG");
	        close.style.cssText = 'width: 88px; height: 31px; visibility: visible; float: right; margin: 0px; cursor: pointer;display: none;';
	        close.setAttribute('src', 'http://static.yomedia.vn/2015/08/btn_close.png');
	        close.setAttribute('id', b+'_Show_Ad');
	        d.innerHTML = M;
	        d.insertBefore(close, document.getElementById(avlConfig.get('ICW') + a));

            var bM = {
                allowScriptAccess: "always",
                allowDomain: "*",
                quality: "high",
                wmode: s
            };
            var bN = {
                id: b,
                name: b
            };
            swfobject.embedSWF(f, avlConfig.get('ICW') + a, w, h, "9.0.0", avlConfig.get('EI'), fv, bM, bN);
		},
        rectClip: function(a, b) {
            domManipulate.getElid(a).style.clip = 'rect(' + b + ')'
        },
        rectExpand: function(a, b, c, w, h, d, e) {
            var f = c.split('-');
            if (f.length == 1) {
                var g = (b == 'pre') ? w : d;
                var i = 0;
                if (f[0] == 'top') {
                    var j = 0;
                    var k = (b == 'pre') ? h : e
                } else {
                    var j = (b == 'pre') ? e - h : 0;
                    var k = e
                }
            } else {
                if (f[0] == 'left') {
                    var g = (b == 'pre') ? w : d;
                    var i = 0
                } else {
                    var g = d;
                    var i = (b == 'pre') ? d - w : 0
                }
                if (f[1] == 'top') {
                    var j = 0;
                    var k = (b == 'pre') ? h : e
                } else if (f[1] == 'bottom') {
                    var j = (b == 'pre') ? e - h : 0;
                    var k = e
                } else {
                    var j = (b == 'pre') ? (e - h) / 2 : 0;
                    var k = (b == 'pre') ? (e - h) / 2 + h : e
                }
            }
            this.rectClip(a, j + 'px ' + g + 'px ' + k + 'px ' + i + 'px')
        },        
        rectAd: function(a, b, c, d, w, h, e, f, g) {
        	// tÃ¡ch chuá»i position
            var i = c.split('-');
            // xÃ¡c Äá»nh width max
            var e = (e == 0) ? w : e;
            // xÃ¡c Äá»nh height max
            var f = (f == 0) ? h : f;

            // náº¿u chuá»i position tá»n táº¡i
            if (i.length == 1) {
                var j = w;
                var k = 0;
                if (i[0] == 'top') {
                    var l = 0;
                    var m = (d == 'min') ? g : h
                } else {
                    var l = (d == 'min') ? f - g : f - h;
                    var m = f
                }
            } else {
                if (i[0] == 'left') {
                    var j = (b == 'top-down') ? w : ((d == 'min') ? g : w);
                    var k = 0
                } else {
                    var j = e;
                    var k = (b == 'top-down') ? e - w : ((d == 'min') ? e - g : e - w)
                }
                if (i[1] == 'top') {
                    var l = 0;
                    var m = (b == 'top-down') ? ((d == 'min') ? g : h) : h
                } else if (i[1] == 'bottom') {
                    var l = (b == 'top-down') ? ((d == 'min') ? f - g : f - h) : f - h;
                    var m = f
                } else {
                    var l = (f - h) / 2;
                    var m = (f - h) / 2 + h
                }
            }
            this.rectClip(a, l + 'px ' + j + 'px ' + m + 'px ' + k + 'px')
        },
        setDelay: function(a, b, c, d) {
            t = setTimeout("avlInteractModule.callControl('" + a + "', '" + b + "', " + c + ", " + d + ");", c)
        },
        clearDelay: function() {
            clearTimeout(t)
        },        
		callControl: function(a, b, c, d) {
            ract = (b == 'min') ? 'max' : 'min';
            time = (b == 'min') ? d : c;
            avlInteractModule.setControl(a, b);
            clearTimeout(t);
            t = setTimeout("avlInteractModule.callControl('" + a + "', '" + ract + "', " + c + ", " + d + ");", time)
        },
        closeAd: function(a, b, c) {
            domManipulate.getElid(a).style.display = 'none';
            clearTimeout(t);
            t = setTimeout(c + "()", b)
        },
        setControl: function(a, b) {
            var a = swfobject.getObjectById(a);
            if (a && typeof a.JStoASviaExternalInterface != "undefined") a.JStoASviaExternalInterface(b);
            return
        },
        getPosition: function(b, w, h) {
            var c = 0;
            var d = 'right';
            var e = 'px';
            var f = 0;
            var g = 'bottom';
            var i = 'px';
            switch (b) {
                case 'right-center':
                    f = ((avlConfig.get('CH') - h) / 2) / avlConfig.get('CH') * 100;
                    i = '%';
                    break;
                case 'right-top':
                    g = 'top';
                    break;
                case 'top':
                    c = ((avlConfig.get('CW') - w) / 2) / avlConfig.get('CW') * 100;
                    e = '%';
                    g = 'top';
                    break;
                case 'left-top':
                    d = 'left';
                    g = 'top';
                    break;
                case 'left-center':
                    f = ((avlConfig.get('CH') - h) / 2) / avlConfig.get('CH') * 100;
                    i = '%';
                    d = 'left';
                    break;
                case 'left-bottom':
                    d = 'left';
                    break;
                case 'bottom':
                    c = ((avlConfig.get('CW') - w) / 2) / avlConfig.get('CW') * 100;
                    e = '%';
                    break
            }
            a = new Array(d, c, e, g, f, i);
            return a
        },
        isMobile: function(){
            var m = ['iphone','ipad','android','blackberry','bb10','rim tablet','touch','nokia','opera mini','windows mobile','windows phone','iemobile'];
            for (var i in m) if (navigator.userAgent.toLowerCase().indexOf(m[i]) > -1) return true;
            return false;
        },
        isWindowPhone: function(){
            var m = ['windows mobile','windows phone','iemobile'];
            for (var i in m) if (navigator.userAgent.toLowerCase().indexOf(m[i]) > -1) return true;
            return false;
        },
        addBanners: function(a, b, c, d, e, f, g, h, fv) {
        	var t = avlInteractModule.renderBanner(a, b, c, d, e, f);
        	yomediaDom.docWrite(t);
        	if (e.match(/.swf/i)) {
	        	var bL = {
	                zid: b
	            };
	            var bM = {
	                allowScriptAccess: "always",
	                allowDomain: "*",
	                quality: "high",
	                wmode: 'transparent'
	            };
	            var bN = {
	                id: 'YoMediaBanner_' + b,
	                name: 'YoMediaBanner_' + b + '_Banner'
	            };
	            
	            swfobject.embedSWF(e, 'YoMediaBanner_Tmp', 300, 250, "9.0.0", avlConfig.get('EI'), fv, bM, bN);
        	}
		},
		renderBanner: function(a, b, c, d, e, f) {
			var t = '';
			f = decodeURIComponent(f);
            switch(a) {
            	case 'standard_banner':
            		t += '<div id="YoMediaBanner_' + b + '" style="height:2px;"></div>';
                    t += '<div id="YoMediaBanner_' + b + '_Banner" style="width:'+c+'px;position:relative;margin:0 auto;padding: 0 2px;clear:both;">';
                    t += '<div id="YoMediaBanner_Tmp"></div>';
                    if (e.match(/.gif|.png|.jpg/i)) {
	                    t += '<div style="width:'+c+'px; margin: 0 auto; position:relative;padding:0 !important;">';
	        			t += '<div id="yomedia_zone' + b + '_banner" style="margin:0 auto;background-color:white">';
	        			t += '<a href="' + f + '" target="_blank" rel="nofollow"  style="outline:none; padding:0;margin:0; text-decoration:none;display:block;margin-bottom:6px;background:none!important;height:auto;border:0px!important;">';
	        			t += '<img id="yomedia-destination-'+ b +'" src="' + e + '" border="0" width="'+c+'" align="left" style="max-width:'+c+'px;margin:0; padding:0; display:block; border:0; outline:none;width:'+c+'px;height:'+d+'px;float:none;" /></a><div style="clear:both;"></div>';
	        			t += "</div></div>";
                    }
        			t += "</div>";

            		break;
            }
            
            return t;
		},
		innerHTMLAds: function(z, s, type) {
			var d = '';
			switch(type) {
				case 'popup':
					d = '<div id="yomedia-destination-' + z + '" style="z-index: 0 !important;">';
					d += s;
					d += '</div>';
					break;
				case 'inpage':
					d = '<div id="yomedia-destination-' + z + '">';
					d += s;
					d += '</div>';
					break;
				default:
					d = '<div id="yomedia-destination-' + z + '">';
					d += s;
					d += '</div>';
					break;
			}
			yomediaDom.docWrite(d);
		}
	}

}

var avlDeliveryModule = new function(){
	return {
		addInfo: function(varObj){
			//Screen Width
			varObj["sw"] = screen.width;	
			//Screen Height
			varObj["sh"] = screen.height;	
			//Screen Color Depth
			varObj["scd"] = screen.colorDepth;
			//Flash Version
			varObj["fv"] = FlashDetect.major;
			//Language
			varObj["l"] = Base64.encode(navigator.language || navigator.userLanguage);
			//Is Enable Javascript
			varObj["iej"] = (navigator.javaEnabled()) ? 1 : 0;
			// URL Referer
			varObj["ur"] = Base64.encode(document.referrer);
			
			varObj["rt"] = 2;

			varObj["ec"] = 1;
			// rand number
			varObj["r"] = avlHelperModule.randNumber(10);

			return varObj;
		},
		init: function(varObj){
			var varObj = avlDeliveryModule.addInfo(varObj);
			var queryString = avlHelperModule.getQueryString(varObj);
			var link = avlDelivery + queryString;
			var s = null;
            var st = null;
            Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(script) {
            	var id = script.getAttribute("id") ? script.getAttribute("id") : "";
                if (null === st &&  id === "s-" + varObj.pid) {
                    st = script;
                }
            });
            s = st;
            if (s) {
            	var a = document.createElement("script");
		        a.type = "text/javascript";
		        a.src = link;
		        a.async = true;
		        domManipulate.insertAfter(a, s);
            } else {
            	return avlHelperModule.appendJs(link, true);
            }            
		}
	} 

}

var avlInitModule = new function(){
	return {
		init : function(initVar){
			if (typeof initVar !== 'undefined' && navigator.cookieEnabled) {
			    if (initVar.length > 0) {
				    var lastIndexInitVar 	= initVar.length-1;
				    var pid = initVar[lastIndexInitVar][0];
					var ref = initVar[lastIndexInitVar][1];
					var regexp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
					if (!ref || !regexp.test(ref)) {
						if (window.location) {
							ref =  window.location.href;
						}
					}

					var varObj 				= {
						"pid": pid,
						"ref": encodeURIComponent(ref)
					}
					var url = null;
			        var url_tmp = null;
			        const pattern = /\/\/ss.yomedia.vn\/js\/[0-9]+\/[0-9]+\/ads.js/;
			        Array.prototype.slice.call(document.getElementsByTagName("script")).forEach(function(script) {
			            if (null === url_tmp && pattern.test(script.src) == true) {
			                url_tmp = script.src
			            }
			        });
			        url = url_tmp;
			        if (url) {
			        	let aUrl = url.split('/');
				        if (aUrl.length > 1) {
				            if (typeof aUrl[5] != 'undefined' && (/^\d+$/.test(aUrl[5]))) {
				               varObj["yhbd"] = aUrl[5];
				            }
				        }
			        }
					if (typeof _avlTag == 'string' && _avlTag != '') {
						varObj.tag = encodeURIComponent(_avlTag);
					}
					if (window.localStorage.getItem('__yoid__')) {
						varObj.uu = window.localStorage.getItem('__yoid__');
					}
			    	avlDeliveryModule.init(varObj);
			    	initVar.pop();
			    }
			}				
		}
	}
}

if( typeof _avlDemo == 'undefined' ){
	avlInitModule.init(_avlVar);
}

