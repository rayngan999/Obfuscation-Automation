<!--/*--><html><body><script type="text/javascript"><!--//*/
if(window.pubId&&window.kadasync!=false){(function(){var a=(function(){var c=navigator.userAgent.toLowerCase();if(c.indexOf("safari")!=-1){return c.indexOf("chrome")>-1?false:true}return false})(),b={319:"",33496:"",155957:"",145058:"",57248:"",83446:"",117297:"",55601:"",115938:"",148804:"",150561:"",79505:"",32223:"",100253:"",132591:"",133710:"",118184:"",110741:"",116319:"",132110:"",150560:"",112961:"",89413:"",155497:"",69972:"",117497:"",96387:"",119281:"",128495:"",107134:"",110791:"",114634:"",45156:"",36365:"",145160:"",120747:"",148805:"",89376:"",113148:"",107246:"",93639:"",120496:"",47683:"",73102:"",156010:"",156193:"",156167:"",156180:"",156851:"",156585:""};window.pmAsyncEnabled=a&&window.pubId&&!b.hasOwnProperty(window.pubId)&&!window.kadmultisize})()}if(window.pmAsyncEnabled){(function(){window.pmDspId={uids:[]};if(1){(function(){window.pmCriteoHandleData=function(c){if(c.status=="OK"&&c.userid){window.pmDspId.uids.push({px:116,uid:c.userid})}};var b=document.createElement("script");b.type="text/javascript";b.async=1;b.src="https://gum.criteo.com/sync?c=31&r=2&j=pmCriteoHandleData";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(b,a)})()}})()}(function(){function aq(bF){var bK="",bJ,x,bG,bE,bI,bH="https://haso.pubmatic.com/jsError/logger.js?";for(x in bF){if(x!="message"&&x!="name"){bJ=bF[x];if(typeof bJ==="string"||typeof bJ==="number"){bK+="["+x+":"+bJ+"]"}}}bG="pubId="+window.pubId+(window.kadId?"&adId="+window.kadId:"")+"&cb="+Math.random()+"&SAVersion=2&msg="+encodeURIComponent(bF.message)+"&name="+encodeURIComponent(bF.name)+"&desc="+encodeURIComponent(bK)+"&url="+encodeURIComponent(window.location.href);if(typeof window.Image=="function"){(new Image()).src=bH+bG}else{bE=document.createElement("img");bE.src=bH+bG;bI=document.body||document.getElementsByTagName("body")[0]||false;bI&&bI.appendChild(bE)}}try{var aQ=window,w=navigator,a6=aQ.top||aQ,ab=encodeURIComponent,aJ=decodeURIComponent,bv=aQ.parseInt,J,B=512,bx=512,aw=50,aX="height:0px;width:0px;display:none;",ba='<script type="text/javascript" src="',ay=aQ.PubMatic||(aQ.PubMatic={}),an=ay.pmAdInfo||(ay.pmAdInfo={}),bd=1,l=aQ.location,a9=(function(){var x=navigator.userAgent.toLowerCase();if(x.indexOf("safari")!=-1){return x.indexOf("chrome")>-1?false:true}return false})(),ae=function(x){if(a9){return x}try{if(x.parent&&x.parent.document&&x.location&&x.parent.document!=x.document){return ae(x.parent)}}catch(bE){}return x},az="https://",j="AdServer",bh="pubmatic.com",aF="ads."+bh,a3="/"+j+"/"+j+"Servlet",bo=aF+"/"+j+"/",br=az+bo+"js",bz=az+(bd?"s":"")+"showads."+bh+a3,ax=aQ.location.href,a8=ax.indexOf("#")>-1?ax.substr(ax.indexOf("#")+1):"",av=br+"/showad.js",R="/"+j+"/js/showad.js",aW,a5,bb,E,aG={},bg=function(x){return typeof x==="function"},bp=console.log.bind(console,"PubMatic:"),p=function(){return"https:"},u=function(x,bG){var bF=aQ.document.createElement("script");bF.type="text/javascript";bF.src=x;bF.async=true;if(bg(bG)){bF.onload=bF.onreadystatechange=bG}var bE=aQ.document.getElementsByTagName("script")[0];bE&&bE.parentNode&&bg(bE.parentNode.appendChild)&&bE.parentNode.appendChild(bF)},bj=function(bF){var bE=aQ.document.createElement("iframe");bE.src=bF;bE.style.height="0px";bE.style.width="0px";bE.style.display="none";bE.height=0;bE.width=0;bE.border="0px";bE.hspace="0";bE.vspace="0";bE.marginWidth="0";bE.marginHeight="0";bE.style.border="0";bE.scrolling="no";bE.frameBorder="0";var x=aQ.document.getElementsByTagName("script")[0];x&&x.parentNode&&bg(x.parentNode.appendChild)&&x.parentNode.appendChild(bE)},I=function(x){var bF=aQ.document.createElement("img");bF.src=x;bF.style.height="0px";bF.style.width="0px";bF.style.display="none";bF.height=0;bF.width=0;bF.border="0px";bF.hspace="0";bF.vspace="0";bF.marginWidth="0";bF.marginHeight="0";bF.style.border="0";bF.scrolling="no";var bE=aQ.document.getElementsByTagName("script")[0];bE&&bE.parentNode&&bg(bE.parentNode.appendChild)&&bE.parentNode.appendChild(bF)},bs=(function(){try{return aQ.localStorage&&bg(aQ.localStorage.getItem)&&bg(aQ.localStorage.setItem)}catch(x){return false}})(),h="PubMatic",bu="PubMatic_USP",a=(aQ.__cmp?1:(aQ.kadGdpr?aQ.kadGdpr:0)),bl=function(bH,bG){var bE=0,x=bH.length,bF=false;for(;bE<x;bE++){if(bH[bE]===bG){bF=true;break}}return bF},n=function(x,bE){function bH(){var bP={};function bQ(){if(bP.getConsentData&&bP.getVendorConsents){x(bP)}}return{consentDataCallback:function(bR){bP.getConsentData=bR;bQ()},vendorConsentsCallback:function(bR){bP.getVendorConsents=bR;bQ()}}}function bO(){window.__cmp("getConsentData",null,bF.consentDataCallback);window.__cmp("getVendorConsents",null,bF.vendorConsentsCallback)}var bF=bH();var bM={};if(window.__cmp){if(typeof window.__cmp==="function"){bO()}else{setTimeout(function(){if(typeof window.__cmp==="function"){bO()}},500)}}else{if(window!==a6){if(bI()&&typeof window.$sf.ext.cmp==="function"){bN("getConsentData",bF.consentDataCallback);bN("getVendorConsents",bF.vendorConsentsCallback)}else{var bK=window;var bJ;while(!bJ){try{if(bK.frames.__cmpLocator){bJ=bK}}catch(bL){}if(bK===window.top){break}bK=bK.parent}bG("getConsentData",bJ,bF.consentDataCallback);bG("getVendorConsents",bJ,bF.vendorConsentsCallback)}}else{setTimeout(function(){if(typeof window.__cmp==="function"){bO()}},500)}}function bI(){return !!(window.$sf&&window.$sf.ext)}function bN(bQ,bR){function bP(bU,bT){if(bU==="cmpReturn"){var bS=(bQ==="getConsentData")?bT.vendorConsentData:bT.vendorConsents;bR(bS)}}window.$sf.ext.register(1,1,bP);window.$sf.ext.cmp(bQ)}function bG(bR,bU,bT){window.__cmp=function(bX,bV,b0){if(!bU){bS();var bZ="TCF1: CMP not found";return bE(bZ)}var bW=Math.random()+"";var bY={__cmpCall:{command:bX,parameter:bV,callId:bW}};bM[bW]=b0;bU.postMessage(bY,"*")};window.addEventListener("message",bQ,false);window.__cmp(bR,null,bP);function bQ(bX){var bW=(typeof bX.data==="string"&&bl(bX.data,"cmpReturn"))?JSON.parse(bX.data):bX.data;if(bW.__cmpReturn&&bW.__cmpReturn.callId){var bV=bW.__cmpReturn;if(typeof bM[bV.callId]!=="undefined"){bM[bV.callId](bV.returnValue,bV.success);delete bM[bV.callId]}}}function bS(){window.removeEventListener("message",bQ,false)}function bP(bV){bS();bT(bV)}}},k=function(x,bE){function bF(bN,bO){if(bO){x(bN,bO)}else{bE(bN,bO)}}function bM(){window.__tcfapi("getTCData",2,bF)}var bL={};if(window.__tcfapi){if(typeof window.__tcfapi==="function"){bM()}else{setTimeout(function(){if(typeof window.__tcfapi==="function"){bM()}},500)}}else{if(window!==a6){var bJ=window;var bI;while(!bI){try{if(bJ.frames.__tcfapiLocator){bI=bJ}}catch(bK){}if(bJ===window.top){break}bJ=bJ.parent}bG("getTCData",bI,bF)}else{setTimeout(function(){if(typeof window.__tcfapi==="function"){bM()}},500)}}function bH(){return !!(window.$sf&&window.$sf.ext)}function bG(bP,bS,bR){window.__tcfapi=function(bW,bU,bY,bT){if(!bS){bQ();return bE({msg:"TCF2: CMP not found"},false)}var bV=Math.random()+"";var bX={__tcfapiCall:{command:bW,parameter:bT,version:bU,callId:bV}};bL[bV]=bY;bS.postMessage(bX,"*")};window.addEventListener("message",bO,false);window.__tcfapi(bP,2,bN);function bO(bU){var bT={};try{bT=(typeof bU.data==="string")?JSON.parse(bU.data):bU.data}catch(bW){}var bV=bT.__tcfapiReturn;if(bV){if(typeof bL[bV.callId]==="function"){bL[bV.callId](bV.returnValue,bV.success);bL[bV.callId]=null}}}function bQ(){window.removeEventListener("message",bO,false)}function bN(bT,bU){bQ();bR(bT,bU)}}},aZ=function(bH){function bE(bI){if(bI){if(bI.getConsentData&&bI.getConsentData.consentData){V(bH,"c",bI.getConsentData.consentData)}else{if(bI.getVendorConsents&&bI.getVendorConsents.metadata){V(bH,"c",bI.getVendorConsents.metadata)}}}}function bG(){}n(bE,bG);function x(bI){if(bI){if(bI.tcString){V(bH,"c",bI.tcString)}}}function bF(){}k(x,bF)},V=function(bG,x,bF){var bE;if(!bs){return}try{bE=aQ.localStorage.getItem(h)}catch(bH){}if(bE&&typeof bE==="string"){try{bE=JSON.parse(bE)}catch(bH){bE={}}}else{bE={}}if(bE){if(!bE.hasOwnProperty(bG)){bE[bG]={}}bE[bG].t=(new Date()).getTime();bE[bG][x]=encodeURIComponent(bF);if(x=="c"){bE[bG]["g"]=1}}try{aQ.localStorage.setItem(h,JSON.stringify(bE))}catch(bH){}},ad=function(bG){var bF={c:""};if(!bs){return bF}var bE;try{bE=aQ.localStorage.getItem(h)}catch(bH){}if(bE&&typeof bE==="string"){try{bE=JSON.parse(bE)}catch(bH){bE={}}if(bE.hasOwnProperty(bG)){var x=bE[bG];if(x&&x.c&&x.t){if(x.t&&bv(x.t)>((new Date()).getTime()-(24*60*60*1000))){bF.c=x.c}else{}}}}return bF},m=function(bF,bG){var x=1;function bM(){var bN={};function bO(){if(bN.usPrivacy){bF(bN)}else{}}return{consentDataCallback:function(bP,bQ){if(bQ&&bP.uspString){bN.usPrivacy=bP.uspString}bO()}}}var bE=bM();var bL={};try{window.__uspapi("getUSPData",x,bE.consentDataCallback)}catch(bK){var bJ=window;var bI;while(!bI){try{if(bJ.frames.__uspapiLocator){bI=bJ}}catch(bK){}if(bJ===window.top){break}bJ=bJ.parent}if(!bI){return bG("USP CMP not found.")}bH("getUSPData",bI,bE.consentDataCallback)}function bH(bP,bO,bR){window.__uspapi=function(bU,bS,bW){var bT=Math.random()+"";var bV={__uspapiCall:{command:bU,version:bS,callId:bT}};bL[bT]=bW;bO.postMessage(bV,"*")};window.addEventListener("message",bN,false);window.__uspapi(bP,x,bQ);function bN(bT){var bS=bT&&bT.data&&bT.data.__uspapiReturn;if(bS&&bS.callId){if(typeof bL[bS.callId]!=="undefined"){bL[bS.callId](bS.returnValue,bS.success);delete bL[bS.callId]}}}function bQ(bS,bT){window.removeEventListener("message",bN,false);bR(bS,bT)}}},bD=function(bE){function bF(bH){var bG=!!(bH&&bH.usPrivacy);if(!bG){return}at(bE,"c",bH.usPrivacy)}function x(){}m(bF,x)},at=function(bG,x,bF){var bE;if(!bs){return}try{bE=aQ.localStorage.getItem(bu)}catch(bH){}if(bE&&typeof bE==="string"){try{bE=JSON.parse(bE)}catch(bH){bE={}}}else{bE={}}if(bE){if(!bE.hasOwnProperty(bG)){bE[bG]={}}bE[bG].t=(new Date()).getTime();bE[bG][x]=bF}try{aQ.localStorage.setItem(bu,JSON.stringify(bE))}catch(bH){}},aa=function(bG){var bF={c:""};if(!bs){return bF}var bE;try{bE=aQ.localStorage.getItem(bu)}catch(bH){}if(bE&&typeof bE==="string"){try{bE=JSON.parse(bE)}catch(bH){bE={}}if(bE.hasOwnProperty(bG)){var x=bE[bG];if(x&&x.c&&x.t){if(x.t&&bv(x.t)>((new Date()).getTime()-(24*60*60*1000))){bF.c=x.c}else{}}}}return bF},a2=(function(){var x={319:""};return a!=1&&aQ.pubId&&!x.hasOwnProperty(aQ.pubId)})(),F=function(x){document.write(x)},be=function(bE,bH){var x=document.body||document.getElementsByTagName("body")[0]||false,bG;try{if(x){if(document.createEvent){bG=document.createEvent("HTMLEvents");bG.info=bH;bG.initEvent(bE,true,true);x.dispatchEvent(bG)}else{if(document.createEventObject){bG=document.createEventObject();bG.info=bH;x.fireEvent(bE,bG)}}}}catch(bF){}},bm=function(bE,x){if(x){if(bw.IE){F(ba+bE+'" onReadyStateChange="PubMatic.tags['+x+'].jsl(this);"><\/script>')}else{F(ba+bE+'" onload="PubMatic.tags['+x+'].jsl();"><\/script>')}}else{F(ba+bE+'"><\/script>')}},U=function(x,bQ,bI,bF,bG,bH,bL,bE,bJ){var bN,bP,bK,bO,bM=false;if((bJ&&document.body)||(!bE&&document.readyState!=="loading"&&document.body)){bN=document.createElement("iframe");bN.src=x;bN.height=bQ;bN.width=bI;bG?bN.name=bG:null;bH?bN.id=bH:null;bF?bN.style.cssText=bF:null;bL?bN.onload=bL:null;bN.marginHeight="0";bN.marginWidth="0";bN.scrolling="no";bN.frameBorder="0";bN.allowtransparency="true";bN.hspace="0";bN.vspace="0";bK=document.body;if(aQ.PubMaticAI){bO=bK.firstChild;if(bO&&bO.nodeType===1&&bO.className==="PubAdAI"){bO.style.display="";d(bO);bK=bO;bM=true}}if(document.readyState==="complete"||(bw.IE&&document.readyState==="interactive")){bM?bK.insertBefore(bN,bK.lastChild):bK.appendChild(bN)}else{if(bw.IE){document.onreadystatechange=function(){if(document.readyState==="complete"){document.onreadystatechange=null;bM?bK.insertBefore(bN,bK.lastChild):bK.appendChild(bN)}}}else{bP=function(){if(document.removeEventListener){document.removeEventListener("DOMContentLoaded",bP,false)}aQ.onload=function(){};bM?bK.insertBefore(bN,bK.lastChild):bK.appendChild(bN)};if(document.addEventListener){document.addEventListener("DOMContentLoaded",bP,false)}aQ.onload=bP}}}else{F("<iframe"+(bH?' id="'+bH+'"':"")+(bG?' name="'+bG+'"':"")+' frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="'+bI+'" hspace="0" vspace="0" height="'+bQ+'"'+(bF?' style="'+bF+'"':"")+' src="'+x+'"'+(bL?' onload="'+bL+'"':"")+"></iframe>")}},a0=function(){var x={};x.pubId=bv(aQ.pubId);x.siteId=bv(aQ.siteId);x.adId=bv(aQ.kadId);x.kadwidth=bv(aQ.kadwidth);x.kadheight=bv(aQ.kadheight);if(aQ.kadtype){x.kadtype=bv(aQ.kadtype);aQ.kadtype=J}if(aQ.kadNetwork){x.kadNetwork=aQ.kadNetwork;aQ.kadNetwork=J}return x},N=function(bG){var x=[],bE,bF;for(bE in bG){bF=bG[bE];if(bG.hasOwnProperty(bE)&&bF!=J&&bF!==""){x.push(bE+"="+ab(bF))}}return x.join("&").replace(/#/g,"%23")},q=function(bG){var x=[],bE,bF;for(bE in bG){bF=bG[bE];if(bG.hasOwnProperty(bE)&&bF!=J&&bF!==""){if(bE!=="defcmpgIDs"){bF=g(bF)}x.push(bE+"="+bF)}}return x.join("&").replace(/#/g,"%23")},O=function(bE){var x=new Date();bE.kltstamp=x.getFullYear()+"-"+(x.getMonth()+1)+"-"+x.getDate()+" "+x.getHours()+":"+x.getMinutes()+":"+x.getSeconds();bE.timezone=x.getTimezoneOffset()/60*-1},g=function(bE){try{bE=typeof bE==="string"?bE:""+bE;bE=aJ(bE)===bE?ab(bE):bE;if(bE.indexOf("&")>=0||bE.indexOf("=")>=0||bE.indexOf("?")>=0){bE=ab(bE)}return bE}catch(x){return""}},ar=function(){var bH={},bI,bF,x,bE=function(bK){var bJ=bK,bL;if(bK.indexOf("show"+aF)>0||bK.indexOf("showadsak."+bh)>0){bL=bK.match(/pageURL=(.*?&)/);if(bL&&bL[1]){bJ=bL[1];bJ=bJ.substr(0,bJ.length-1);try{bJ=aJ(bJ)}catch(bM){}}}return bJ};bH.u="";bH.r="";try{if(aQ.kadpageurl=="INSERT_ENCODED_PAGEURL_HERE"){aQ.kadpageurl=""}bI=ae(aQ);bH.r=bE(bI.refurl||bI.document.referrer||"").substr(0,bx);bH.u=bE(bI!==a6&&bI.document.referrer!=""?bI.document.referrer:bI.location.href).substr(0,bx);if(bH.u===bH.r){bH.r=""}bH.u=g(bH.u);bH.r=g(bH.r)}catch(bG){}if(!bH.u){try{ax=(ax==aJ(ax))?ax:aJ(ax)}catch(bG){}ax=bE(ax);bH.u=ab(ax.substr(0,bx))}if(bH.u===bH.r){bH.r=""}bF=w.userAgent;x=bF.indexOf("MSIE");bH.IE=w.appName=="Microsoft Internet Explorer";if(bH.IE&&x>0){bH.IEV=bv(bF.substr(x+5,3));bH.IE6=bH.IEV<7}bH.it=aQ.kadinventorytype?aQ.kadinventorytype:0;return bH},bw=ay.m||(ay.m=ar()),a7=function(x){try{if(w.cookieEnabled===false){x.fpcd="1"}}catch(bE){}x.pageURL=bw.u;x.refurl=bw.r;bw.IE6&&(x.avoidFrameDefault=1);x.inIframe=aQ!=a6?"1":"0";if("isSingleFrame" in aQ){x.inMultipleNestedIframes=aQ.isSingleFrame=="true"?"0":"1"}},aV=function(bF){var bE=av+"#"+q(bF.c),bG=0,bH=bF.nis,x=bH.length;for(;bG<x;bG++){bE+="&ni="+ab(bH[bG])}if(bF.pbv){bE+="&"+N(bF.pbv)}return bE},aK=(an.setNetworkId||function(bF,bI,bE,bJ,bM,bN,bO,bG,bP){var bL,bK,bH,x;bL=ay.tag||ay.tags[bF];bL.c.defdcpm=bO;bL.c.oid=bG;if(!bP){bL.nis.push([bI,bE,bJ,bM])}if(bL.fc){bH=bL.fr;if(bH){bK=bH.contentWindow;x=aV(bL);if(bK){bK.location.replace(x)}else{bH.src=x}}else{setTimeout(function(){aK.call(aQ,bF,bI,bE,bJ,bM,bN,bO,bG,true)},20)}}if(ay.AHT==0&&!bP){be("onPubMaticAdInfoUpdated",bL.c)}}),aT=function(){var bF=this.plt,bE=0,x;if(bF){x=bF.length;for(;bE<x;bE++){bF[bE].apply(this)}}},bn=function(x){if(x&&x.readyState!="complete"){return}aT.call(this);be("onPubMaticAdLoaded",this.c)},ag=ay.AdTag||(ay.AdTag=function(bH,bE,bK){var bJ=this,bF,bI,x,bG;bJ.fr=null;bJ.fc=false;bJ.c=bH;bJ.df=T;bJ.nis=[];bJ.lastdefadnwkID=0;bJ.jsl=bn;if(!bE){bG=ay.tags;bH.operId=bH.kadtype===1||bH.kadtype===12?3:1;if(bH.kadtype===12){bH.adtype=12}bH.kadtype=J;bd&&(bH.sec=1);O(bH);bH.screenResolution=screen.width+"x"+screen.height;bH.ranreq=Math.random();x=bG.length;bH.pmUniAdId=""+x;if(bG.length>0){bF=[];for(bI=0;bI<x;bI++){bF.push(bG[bI].c.adId)}bH.prevkadIds=bF.slice(0,10).join("_")}if(!bK){P(bH)}H(bH);if(bH.operId===3){by(bJ,bH,x)}}}),a1=function(){var bT=aQ.location.search.substr(1).split("&"),bP=bT.length,bK={},bQ={},x=new ag(bK,true),bF=0,bV,bM,bH,bG,bI=[],bU,bJ,bS=0,bN=0,bO,bE,bL;try{document.domain=bh}catch(bR){}for(;bF<bP;bF++){bH=bT[bF].split("=");bV=bH[0];bM=bH[1];if(!aG[bV]){bK[bV]=bM}else{if(bV==="kadNetwork"){bG=bv(bM)}else{if(bV==="defcmpgIDs"){bI=bM?bM.split(","):[]}else{if(bV==="defecpm"){bU=parseFloat(bM)}else{if(bV==="defactecpm"){bJ=parseFloat(bM)}else{if(bV==="lastdefadnwkID"){bS=bv(bM)}else{if(bV==="defcount"){bN=bv(bM)}}}}}}}}if(a8&&a8.length>0){bT=a8.split("&");bP=bT.length;for(bF=0;bF<bP;bF++){bH=bT[bF].split("=");bQ[bH[0]]=aJ(bH[1])}x.pbv=bQ}x.lastdefadnwkID=bS;bE=x.nis;for(bF=0;bF<bN;bF++){bE.push([0,0,0,0])}if(bN>0){bP=bI.length;if(bG===243){bP-=1}for(bF=0;bF<bP;bF++){bE[bF][0]=243;bE[bF][1]=bI[bF]}bL=bE[bN-1];bL[0]=bG;if(bG===243&&bI.length>0){bL[1]=bv(bI[bI.length-1]);bL[2]=bU;bL[3]=bJ}}x.c.operId=3;ay.tag=x},aN=function(bJ){var bH,bK,x,bE,bI=true,bG;if(bJ!=a6){bH=bJ.parent;bG=bB(bJ)&&bJ.location.pathname===a3&&bJ.PubMatic!==J?bJ:null;if(!bG){try{x=bH.length;bE=x;while(--bE>=0){if(bI){bI=bH[bE]!=bJ}else{bK=bH[bE];if(bB(bK)&&bK.location.pathname===R&&bK.PubMatic&&bK.PubMatic.AdInfo){bG=bK;break}}}}catch(bF){return}}return bG||aN(bH)}},d=function(bH){var bF=bH.childNodes,x=bF.length,bE=0,bG;for(;bE<x;bE++){bG=bF[bE];if(bG.nodeType===1&&bG.className!="PubAdAI"){bG.style.display="none"}}},T=function(bR,bI){var bN=this,bO=bN.c,bM={},bL,bH=bN.nis,bF=bH.length,bE=bH[bF-1],bK=[],bJ,x,bS,bG,bQ;bI=bI||1;if(bO.kadNetwork){delete bO.kadNetwork}bM.kadNetwork=bE[0];if(bM.kadNetwork===243){bM.defecpm=bE[2];bM.defactecpm=bE[3]}bJ=bN.lastdefadnwkID;for(bL=0;bL<bF;bL++){bE=bH[bL];if(bE[0]===243){bK.push(bE[1])}else{bJ=bE[0]}}bM.lastdefadnwkID=bJ||"0";bM.defcmpgIDs=bK.join();bM.defcount=bF;bO.operId=bI>=2?1:3;bO.SAVersion="2";bO.js="1";bO.kdntuid="1";bO.ranreq=Math.random();bO.inIframe=aQ!=a6?"1":"0";try{if(bI==1&&bR&&document.body){d(document.body);if(!bw.IE||(bw.IE&&document.readyState=="loading")){bG="PubMatic_"+Math.random();F("<div id='"+bG+"' style='"+aX+"'></div>");bS=document.getElementById(bG);if(bS){bQ=bS;while(bQ.parentNode&&bQ!=document.body){d(bQ.parentNode);bQ.style.display="";bQ=bQ.parentNode}bS.parentNode.removeChild(bS)}}}}catch(bP){}x=bz+"?"+q(bM)+"&"+q(bO);if(bN.pbv&&bI>1){x+="#"+N(bN.pbv)}if(bI===2){U(x,"100%","100%","position:absolute;left:0px;top:0px;height:100%;width:100%;")}else{if(bI===3){l.replace(x)}else{bm(x)}}},al=function(bE){var bG,bF,bH,bK,x,bJ=false,bL;if(ay.tags||ay.tag){x=ay.tags?(bL=ay.tags,bL[bL.length-1]):ay.tag;x.df(!bL);bJ=true}else{if(!bw.IE6){bG=document.domain;if(bG===aF){try{document.domain=bh}catch(bI){}bF=aN(aQ);if(bF){bH=bF.PubMatic;if(bH.AdInfo){bK=bH.r();if(bK){T.call(bK,true,3);bJ=true}}else{if(bH.tag){bH.tag.df(true,2);bJ=true}}}}if(!bJ&&aQ!==a6){U(av+"#LA"+(bE?"&"+q(bE):""),"100%","100%","position:absolute;left:0px;top:0px;height:100%;width:100%;");bJ=true}}}return bJ},C={kadgender:"gender",kadage:"kadage",kadhints:"kadhints",kadkw:"keywords",kadupostalcode:"kadupcode",kadufirstname:"kadufname",kadcity:"city",kadfloor:"kadfloor",kadgcid:"kadgcid",kadgecpm:"kadgecpm",kadgid:"kadgid",kadgsiteid:"kadgsiteid",kadgsectionid:"kadgsectionid",kadgadid:"kadgadid",kadpubclkurl:"kadpubclkurl",kfnetworkid:"pmForceAdNetwork",kmaldebug:"md",kadcoppa:"coppa",kadtpcid:"kadtpcid",kGeoLatitude:{n:"loc",m:function(x,bE){var bF=bE.kGeoLongitude||aQ.kGeoLongitude;if(bE.kGeoLongitude){delete bE.kGeoLongitude}if(bE.kGeoLatitude){delete bE.kGeoLatitude}return bF!=J?x+","+bF:false}},kadloc:{n:"loc",m:g},pmzoneid:{n:"pmZoneId",m:function(x){var bE=typeof x;aQ.pmzoneid=J;return bE==="number"?x:bE==="string"?x.split(",").slice(0,aw).join():x instanceof Array?x.slice(0,aw).join():false}},PubMaticAI:{n:"noEnc",m:function(){return 1}},kadbeacon:{n:"kadbeacon",m:g},kasdbeacon:{n:"kadbeacon",m:g},kadpageurl:{n:"kadpageurl",m:g},kaddefurl:{n:"kaddefurl",m:g},kadstate:{n:"state",m:g},kaddma:{n:"dma",m:g},kadzip:{n:"zip",m:g},kadyob:{n:"yob",m:g},kadnettype:{n:"nettype",m:g},kadcarrier:{n:"carrier",m:g},kadethnicity:{n:"ethn",m:g},kadincome:{n:"inc",m:g},kadcountry:{n:"country",m:g},kadudid:{n:"udid",m:g},kadudidtype:{n:"udidtype",m:g},kadappname:{n:"name",m:g},kadappstoreurl:{n:"storeurl",m:g},kadappapi:{n:"api",m:g},kadappbundle:{n:"bundle",m:g},kadapppaid:{n:"paid",m:g},kadappversion:{n:"ver",m:g},kadappid:{n:"aid",m:g},kadsitecode:{n:"sitecode",m:g},kadcat:{n:"cat",m:g},kadudidhash:{n:"udidhash",m:g},kadlocsource:{n:"loc_source",m:g},kadiabcat:{n:"iabcat",m:g},kadexpdir:{n:"expdir",m:g},kadbattr:{n:"battr",m:g},kadifb:{n:"ifb",m:g},kadblockdomainids:{n:"blkdmns",m:g},kadblockiabcats:{n:"blkiabcats",m:g},kadblockadvertiserids:{n:"blkadvtids",m:g},kadloccat:{n:"loccat",m:g},kadlocbrand:{n:"locbrand",m:g},kadblkadvdmns:{n:"blkadvdmns",m:g},kadpublisheruid:{n:"pubUID",m:g},kadfpvisitorseg:{n:"fpVisSeg",m:ab},kadfpinvetoryseg:{n:"fpInvSeg",m:ab},kadfpcookieseg:{n:"fpCkSeg",m:g},kadsh:{n:"sh",m:g},kaddctr:{n:"dctr",m:g},kadinstl:{n:"instl",m:g},kadpubuid:{n:"puid",m:g},kadmultisize:{n:"multisize",m:g},kadGdprConsent:{n:"gdpr_consent",m:function(bE,x){if(bE.indexOf("INSERT_USER_GDPR_CONSENT_STRING_DATA_FROM_CMP_HERE")!==-1){bE=""}return g(bE)}},kadeids:"eids",kadschain:"schain",kadUsPrivacy:"us_privacy"},M=function(x){var bI=C,bE,bH,bG,bF={kadgsiteid:"",kadgsectionid:"",kadgid:"",kadgecpm:"",kadgcid:"",kadgadid:"",kadfloor:""};for(bE in bI){if(bI.hasOwnProperty(bE)){bH=aQ[bE];if(bH){bG=bI[bE];if(typeof bG==="object"){bH=bG.m(bH,x);bE=bG.n}else{bE=bI[bE]}if(bH){if(bE=="gender"){x.kadgender=bH;x.kadgdr=bH}x[bE]=bH}if(bF.hasOwnProperty(bE)){aQ[bE]=null}}}}},am,aY,Q,bB=function(x){var bE=false;try{bE=x&&!!x.document}catch(bF){}return bE},e=function(x){return{w:x.innerWidth||x.document.documentElement.clientWidth||x.document.body.clientWidth,h:x.innerHeight||x.document.documentElement.clientHeight||x.document.body.clientHeight,st:x.document.body.scrollTop,sl:x.document.body.scrollLeft}},S=function(x,bF){var bL,bI,bK,bJ,bM,bE,bH,bG;if(x&&x.frameElement){if(!bF){bF=e(x)}bL=f(x.frameElement);if(bL){bH=bL.x;bG=bL.y;bI=x.parent;bJ=e(bI);if(x!==bI&&bI!==a6){if(bB(bI)){bK=S(bI,bJ);if(bK!=null){bL.x+=bK.x;bL.y+=bK.y;bF.h=bK.h;bF.w=bK.w}else{bL=null}}else{bL=null}}if(bJ.st>bG){bM=bF.h+bG-bJ.st}else{bM=bF.h}if((bJ.st+bJ.h)<(bG+bF.h)){bM-=(bG+bF.h)-(bJ.st+bJ.h)}if(bJ.sl>bH){bE=bF.w+bH-bJ.sl}else{bE=bF.w}if((bJ.sl+bJ.w)<(bH+bF.w)){bE-=(bH+bF.w)-(bJ.sl+bJ.w)}bL.h=bM;bL.w=bE}}return bL},f=function(bF){var bI,bG,bE=0,bH=0;if(typeof bF.getBoundingClientRect==="function"){bG=bF.getBoundingClientRect();bE=Math.floor(bG.left);bH=Math.floor(bG.top)}else{while(bF){bE+=bF.offsetLeft;bH+=bF.offsetTop;bF=bF.offsetParent}}bI={x:bE,y:bH};return bI},Z=function(bG,bQ,bL){var bP=f(bG),bF=e(aQ),bH=bP.y,bK=bP.x,x=null,bR,bN;if(aQ!=a6){bR=aQ.parent;if(bB(bR)){bN=S(aQ,bF);if(bN!=null){bP.x+=bN.x;bP.y+=bN.y;bF.h=bN.h;bF.w=bN.w}else{x=-1}}else{x=-1}}if(x===null){var bE=bF.st,bJ=bF.sl,bI=bF.h,bM=bF.w;bP.v=(((bH+bQ)<=bE)||((bK+bL)<=bJ)||(bH>=(bE+bI))||(bK>=(bJ+bM)))?"2":((bH>=bE)&&(bK>=bJ)&&((bK+bL)<=(bJ+bM))&&((bH+bQ)<=(bE+bI)))?"1":"3"}else{bP=null}try{if(typeof $sf!="undefined"&&typeof $sf.ext!="undefined"){bP={x:"-1",y:"-1",v:"0"};bN=$sf.ext.inViewPercentage();if(bN){bP.v=bN>=50?"1":"2"}bN=$sf.ext.geom();if(bN&&bN.self){bP.y=bN.self.t;bP.x=bN.self.l}}}catch(bO){}if(window.pubId==84047||window.pubId==83902||window.pubId==83894){bP={x:"-1",y:"-1",v:"0"};if(bQ==90&&bL==728){bP.v="1";bP.y="752.543";bP.x="524.334"}else{if(bQ==250&&bL==300){bP.v="1";bP.y="253.543";bP.x="604.457"}}}return bP},P=function(x){var bF="PubMatic_"+Math.random(),bE,bH;try{F('<span  id="'+bF+'"></span>');bE=document.getElementById(bF);bH=Z(bE,x.kadheight,x.kadwidth);x.adVisibility=bH?bH.v:"0";x.adPosition=bH?bH.y+"x"+bH.x:"-1x-1"}catch(bG){}if(bE&&bE.parentNode){bE.parentNode.removeChild(bE)}},H=function(x){x.rmp="";if(aQ["$sf"]!==J&&aQ["$sf"]!=null){x.rmp+="safeframe;"}},by=function(bE,x,bH){var bG,bF=aQ.kAdTimeout;if(bF){bF=bv(bF);bE.to=bG={t:aQ.kAdTimeoutId||bH,l:false,s:aQ.kSuccessCallBack||null,f:aQ.kFailCallBack||null,o:false,i:setTimeout(function(){bG.o=true},bF)};if(!ay.checkTimeout){ay.checkTimeout=function(bK,bI){var bJ=ay.tags[bK].to;if(bJ){bJ.l=true;clearTimeout(bJ.i);if(bJ.o||!bI){bJ.f&&bJ.f.call(aQ,bJ.t)}else{bJ.s&&bJ.s.call(aQ,bJ.t)}}return bI}}x.tOut=1;x.adIndx=""+bH;bE.plt=[function(){if(!bE.to.l){ay.checkTimeout(bH,false)}}];aQ.kAdTimeout=null;aQ.kFailCallBack=null;aQ.kSuccessCallBack=null;aQ.kAdTimeoutId=null}},v=null,ap=0,aR=0,c=0,aI=function(){if(v==null){var bG=a8.split("&"),x=bG.length,bE=0,bF;v={};for(;bE<x;bE++){bF=bG[bE].split("=");v[bF[0]]=bF[1]}}},aH=function(){var bG,bF,bI={},bE=false,bH,bJ=[],x;if(aQ.kpassbackpars){bH=aQ.kpassbackpars;x=bH.length;for(bF=0;bF<x&&bH[bF];bF++){bG=bH[bF];if(aQ[bG]&&aQ[bG]!=J){bE=true;bJ.push(bG);bI[bG]=aQ[bG]}}bI.kpassbackpars=bJ.join(",")}return bE?bI:null},D=function(bR,bF){var bM=e(aQ),bL=aQ,bP,bE,bO,bK,bJ=false,bI=0,bQ,x,bS,bH,bG;bR.winW=(bM.w<screen.width)?bM.w:screen.width;bR.winH=(bM.h<screen.height)?bM.h:screen.height;while(bL!=a6){bP=bL.parent;bO=false;try{bQ=bP.location.href;bO=true;if(!bJ){bK=bP}bR.depth=0}catch(bN){}if(!bO){bI++;bJ=true;bE=bL}if(bI>=2){bR.depth=2;break}bL=bP}if(!bK){bK=aQ}bS=(bI==1)?bE:(bI==0)?a6:bK;bR.winURL=(bR.pageURL)?bR.pageURL:encodeURI(bS.location.href);bR.refURL=(bR.refurl)?bR.refurl:encodeURI(bS.document.referrer);if(bI==1){try{x=e(bS);bR.winW=(bv(bM.w)>bv(x.w))?x.w:bM.w;bR.winH=(bv(bM.h)>bv(x.h))?x.h:bM.h}catch(bN){}bR.depth=1}else{if(bI==0){bR.depth=0}}if(bF){bH=document.getElementById(bF);bR.plyW=bH.offsetWidth||-1;bR.plyH=bH.offsetHeight||-1;if(bR.plyH!=-1&&bR.plyW!=-1){try{bG=f(bH);bR.plocx=bG.x;bR.plocy=bG.y;bR.pos=Z(bH,bR.plyH,bR.plyW).v}catch(bN){}}}return bR};ay._uidCB=function(x){ay.pm_uid_bc=x.u;if(aQ.location.href.indexOf("#PIX")>0){a4()}};ay.getPBValue=function(bE){var x,bG="";try{x=ay.tag||ay.tags[ay.tags.length-1];if(x.pbv&&x.pbv.hasOwnProperty(bE)){bG=x.pbv[bE]}}catch(bF){}return bG};ay.SAVersion="2";if(!an.setNetworkId){an.setNetworkId=aK}aG.ranreq=aG.ranreq1=aG.kadNetwork=aG.operId=aG.defcmpgIDs=aG.defecpm=aG.defactecpm=aG.lastdefadnwkID=aG.defcount=true;ay.AHT=aQ.PubMatic_AHT||0;aQ.PubMatic_AHT=J;ay.ifl=ay.ifl||(ay.ifl=function(bE,x){ay.tags[x].fr=bE});ay.Native=ay.Native||{info:{},setInfo:function(bE,x){if(ay.Native.info){ay.Native.info[bE]=x}},execCTR:function(bH){var x,bG=[],bF=0,bE=0;if(ay.Native.info&&ay.Native.info.hasOwnProperty(bH)){x=ay.Native.info[bH];if(x.hasOwnProperty("ctrs")){bG=ay.Native.info[bH]["ctrs"];bF=bG.length;for(bE=0;bE<bF;bE++){(new Image()).src=bG[bE]}if(x.hasOwnProperty("ectr")&&x.ectr==false){x.ctrs=[]}}}}};ay.sendParamToVPAID=ay.sendParamToVPAID||function(bG){var bH={};a7(bH);M(bH);if(bH.pageURL){bH.pageURL=encodeURI(bH.pageURL)}if(bH.refurl){bH.refURL=encodeURI(bH.refurl)}O(bH);bH.screenResolution=screen.width+"x"+screen.height;bH.ranreq=Math.random();bH.sec=bd;bH.protocol=az;bH=D(bH,bG.playerDomId);aZ(bG.pubId);var bF=ad(bG.pubId);bH.gdpr_consent=bF&&bF.c?bF.c:"";bH.gdpr=bH.gdpr_consent?1:(a||0);bD(bG.pubId);var x=aa(bG.pubId);bH.us_privacy=x&&x.c?x.c:"";try{if(bG.playerDomId){document.getElementById(bG.playerDomId).getDataFromJS(q(bH))}}catch(bE){}return bH};ay.showAd=ay.showAd||function(bH,bJ,bG){var x,bF,bE=1500,bL;if(bH.siteId==72184){bH.kadpageurl=""}if(ay.tag){delete ay.tag}bL=ay.tags||(ay.tags=[]);x=new ag(bH,false,bG);x.pbv=aH();bL.push(x);bH.pm_uid_bc=ay.pm_uid_bc;bH.gdpr=""+a;var bK=ad(bH.pubId);bH.gdpr_consent=bK&&bK.c?bK.c:bH.gdpr_consent;if(bH.gdpr_consent){bH.gdpr=1}var bI=aa(bH.pubId);bH.us_privacy=bI&&bI.c?bI.c:bH.us_privacy||"";(function(){try{bH.dspids=JSON.stringify(aQ.parent.pmDspId||{})}catch(bM){}})();bb=bz+"?"+q(bH);if(bw.IE&&bb.length>bE){if(bH.refurl){bF=bH.refurl;bH.refurl=bF.substr(0,(bF.length-(bb.length-bE)));bb=bz+"?"+q(bH)}if(bb.length>bE){bF=bH.pageURL;bH.pageURL=bF.substr(0,(bF.length-(bb.length-bE)));bb=bz+"?"+q(bH)}}bJ&&(bb+="&oldDefTag=1&noInfo=1");if(!bG){if(bL.length===1&&!bJ){bF=av+"#PIX&p="+bH.pubId+"&s="+bH.siteId+"&a="+bH.adId+"&it="+bw.it;if(bH.kdntuid){bF+="&kdntuid="+bH.kdntuid}if(bH.coppa){bF+="&coppa=1"}if(a2){bF+="&bce=1"}bF+="&gdpr="+bH.gdpr;bF+="&gdpr_consent="+(bH.gdpr_consent||"");bF+="&us_privacy="+(bH.us_privacy||"");U(bF,0,0,aX,null,null,null,true,!!bG)}if(bH.operId===3){if(!bw.IE6){U(av,0,0,aX,null,null,"PubMatic.ifl(this,"+bH.pmUniAdId+")",true);x.fc=true}bm(bb,bH.pmUniAdId)}else{if(x.pbv){bb+="#"+N(x.pbv)}U(bb,bH.kadheight,bH.kadwidth,"height:"+bH.kadheight+"px;width:"+bH.kadwidth+"px;",null,null,null,true)}}};if(l.host===aF&&l.pathname===R){if(a8.indexOf("PMFRAME=1")===0){aI();delete v.PMFRAME;bb=av+"#PIX&p="+v.pubId+"&s="+v.siteId+"&a="+v.adId+"&it="+v.it;if(v.kdntuid){bb+="&kdntuid="+v.kdntuid}if(v.coppa){bb+="&coppa=1"}if(v.bce==1){bb+="&bce=1"}bb+="&gdpr="+(v.gdpr||"0");bb+="&gdpr_consent="+(v.gdpr_consent||"");bb+="&us_privacy="+(v.us_privacy||"");U(bb,0,0,aX);v.operId=1;bb=bz+"?"+q(v);U(bb,v.kadheight,v.kadwidth,"height:"+v.kadheight+"px;width:"+v.kadwidth+"px;")}else{if(a8.indexOf("LA")===0){try{document.domain=bh}catch(bA){}am=aN(aQ.parent);if(am){aY=am.PubMatic;if(aY.AdInfo){Q=function(){var x;x=aY.r();if(x){x.c.operId=1;T.call(x,true,3)}else{setTimeout(Q,10)}};Q()}else{aY.tag.df(true,2)}}else{aI();delete v.LA;if(v.pubId&&v.siteId&&v.adId&&v.kadheight&&v.kadwidth){ay.showAd(v,true)}}}else{if(a8.indexOf("PIX")===0){aI();var aL,aE,aP=escape,ak=unescape,au=false,ai="ALL",bq="KTPCACOOKIE",bC="KADUSERCOOKIE",aC="KCCH",aM="DPSync3",aj="PUBMDCID",Y="USCC",i="SyncRTB3",aB="PMFREQ_ON",aU="pmoo",aS="optout",bk="pi",aD="repi",aO="pubsyncexp",ah=function(){var bI="",bH,x,bF=0,bE;try{bI=document.cookie}catch(bG){}if(aL!=bI){bH=bI.split("; ");x=bH.length;aE=[];for(;bF<x;bF++){bE=bH[bF].split("=");aE[bE[0]]=bE[1]}aL=bI}},z=function(x){ah();return aE[x]},L=function(bE,bG){var bF,bH,x;ah();!bG&&(x=[]);for(bF in aE){if(aE.hasOwnProperty(bF)){if(bF.indexOf(bE)>=0){bH={n:bF,v:(aE[bF]||"")};if(bG){x=bH;break}else{x.push(bH)}}}}return x},s=(function(){var bE="Chrome/",x=bE.length;ua=navigator.userAgent,chromePatternIndex=ua.indexOf(bE),chromeVersion=0;if(chromePatternIndex>-1){chromeVersion=bv(ua.substr(chromePatternIndex+x,3));if(chromeVersion>=67){return true}}return false})(),ac=true,bf=function(bF,bI,bE,bJ,bH){var x,bK;x=new Date(new Date().getTime()+bE*86400000);bK=bF+"="+bI+";expires="+x.toGMTString()+";path="+bJ+";domain="+bH;if(ac&&bd){bK+=";secure"}if(s){bK+=";SameSite=None"}try{document.cookie=bK}catch(bG){}},bi=function(x,bG,bF){try{document.cookie=x+"=;expires=Thu, 01-Jan-1970 00:00:01 GMT;path="+bG+";domain="+bF+((ac&&bd)?";secure":"")+(s?";SameSite=None":"")}catch(bE){}},af=function(bE,x,bF){if(bE.addEventListener){bE.addEventListener(x,bF)}else{if(bE.attachEvent){bE.attachEvent("on"+x,bF)}else{bE["on"+x]=bF}}},X=function(){var bE,x=ao();if(x==true){bi(bC,"/",bh);bi(aC,"/",aF);bi(aM,"/",aF);bi(i,"/",aF);bi(aj,"/",bh);bi(Y,"/",bh);bi(bk,"/",bh);bi(aD,"/",aF)}if(!au){au=true;bi(aC,"/",aF);bi(bk,"/",bh);if(ai==="ALL"){bE=z(aB);if(!(bE&&bE!="")&&x==false){bf(aB,"YES",1,"/",aF);bt();bi(aB,"/",aF);aA()}}}},y=function(){if(v.gdpr){return}var bF=bv(v.p||0),bE=ak(z(bC)||""),x=1;x=z(aD)==1?4:bE==""?v.fp!=1?2:5:v.fp!=1?3:6;bf(bk,(bF==0?2:bF)+":"+x,1,"/",bh);bi(aD,"/",aF)},K=function(bF){var x="image4.pubmatic.com/AdServer/SPug?partnerID=",bE;if(z(bC)){bE=az+(bd?"s":"")+x+bF;bE=bE+"&gdpr="+v.gdpr;bE=bE+"&gdpr_consent="+v.gdpr_consent;bE=bE+"&us_privacy="+v.us_privacy;setTimeout(function(){var bH=z(bC),bG;if(bH&&bH!=""){u(bE)}aA()},2000)}},bt=function(){var bN=0,bR,bK=[],bE=[],bM,bL,bG,bF,bP,x,bO,bJ,bQ,bI=function(bS,b4){var b2,bZ,bW,b1,b0,bX,bV,b5,b3,bT,bU,bY;bS=bS.substr(bS.indexOf("camfreq")+7);b2=bS.indexOf("_")<0;bZ=b4.split(":");bW=bZ.length;bV=[];b5=0;for(b1=0;b1<bW;b1++){b0=bZ[b1].split("-");if(b0.length===2){bX=b0[1].split("_");if(bX.length===2){if(b2&&bN>0){if(bN<=bv(bX[1])){bV[b5++]=[bv(b0[0]),bv(bX[0]),bv(bX[1])]}}else{bV[b5++]=[bv(b0[0]),bv(bX[0]),bv(bX[1])]}}else{bV[b5++]=[bv(b0[0]),bv(b0[1]),0]}}}if(b5>0){for(b1=0;b1<b5;b1++){bT=bV[b1];b3=bT[2];bW=bK.length;bU=false;for(bY=0;bY<bW;bY++){if(bK[bY][0]===bT[0]){bU=true;bK[bY][1]=bK[bY][1]+bT[1];if(b3>bK[bY][2]){bK[bY][2]=b3}}}if(!bU){bK[bW]=bT}}}},bH=function(bS,b5){var b0,bV,b2,b1,bW,b6,bT,bU,bZ,b4,bY=-1,bX,b3;b4=bS=bS.substr(bS.indexOf("pubfreq_")+8);b2=bS.indexOf("_");if(b2>=0){b4=bS.substring(0,b2)}b4=bv(b4);b0=b5.split(":");bV=b0.length;bW=[];for(b2=0;b2<bV;b2++){b1=b0[b2].split("-");if(b1.length===2){bW[b2]=[bv(b1[0]),bv(b1[1])]}else{break}}bX=bE.length;for(b2=0;b2<bX;b2++){if(bE[b2][0]===b4){bY=b2;break}}b6=bW.length;if(b6>0){if(bY<0){bE[bX]=[b4,bW]}else{b3=bE[bY][1];for(b2=0;b2<b6;b2++){bT=bW[b2];bV=b3.length;bU=false;for(bZ=0;bZ<bV;bZ++){if(b3[bZ][0]===bT[0]){b3[bZ][1]=b3[bZ][1]+bT[1];bU=true;break}}if(!bU){b3[bV]=bT}}}}};ah();bG=L("_curtime",true);bG&&(bN=bv(bG.v));bR=L("camfreq");bM=bR.length;for(bL=0;bL<bM;bL++){bG=bR[bL];bI(bG.n,bG.v);bi(bG.n,"/",bh)}bM=bK.length;bF=[];for(bL=0;bL<bM;bL++){bP=bK[bL];bF.push(bP[0]+"-"+bP[1]+"_"+bP[2])}if(bF.length>0){bf("camfreq",bF.join(":"),4,"/",bh)}bR=L("pubfreq_");bM=bR.length;for(bL=0;bL<bM;bL++){bG=bR[bL];bH(bG.n,bG.v);bi(bG.n,"/",bh)}bM=bE.length;for(bL=0;bL<bM;bL++){bP=bE[bL];x=bP[1];bO=bP[0];bF=[];bQ=x.length;for(bJ=0;bJ<bQ;bJ++){bP=x[bJ];bF.push(bP[0]+"-"+bP[1])}if(bF.length>0){bf("pubfreq_"+bO,bF.join(":"),4,"/",bh)}}},aA=function(){var bG=function(){var bJ="Chrome/",bI=bJ.length;ua=navigator.userAgent,chromePatternIndex=ua.indexOf(bJ),chromeVersion=0;if(chromePatternIndex>-1){chromeVersion=bv(ua.substr(chromePatternIndex+bI,3));if(chromeVersion>=67){return true}}return false};if(bG()==false){return}ah();var bH=L("KRTBC");var bF;for(var bE=0,x=bH.length;bE<x;bE++){bF=bH[bE];bf(bF.n,bF.v,30,"/",bh)}},a4=function(bI){var x=v.predirect,bF=v.userIdMacro,bH=z(bC),bE=az+(bd?"s":"")+"image4.pubmatic.com/AdServer/SPug?o=1";if(bH){if(x){try{x=aJ(x)}catch(bG){}if(bH){if(bF&&x.indexOf(bF)){x=x.replace(bF,bH)}else{x=x+bH}bj(x)}else{setTimeout(function(){a4()},1500)}}}else{if(v.p&&v.fp&&v.rs&&v.u){bE+="&"+a8;bj(bE)}else{if(a2&&ay.pm_uid_bc){bj(bE+(v.p?"&p="+v.p:"")+(v.s?"&s="+v.s:"")+(v.coppa?"&cp="+v.coppa:"")+(bd?"&sc=1":"")+(x?"&pr="+x:"")+(bF?"&umc="+bF:"")+"&u="+ay.pm_uid_bc+"&rs=3&gdpr="+v.gdpr+"&gdpr_consent="+v.gdpr_consent+"&us_privacy="+v.us_privacy)}}}},bc=function(){if(z(bC)){if(!bw.IE&&w.userAgent.indexOf("rv:11")==-1&&w.userAgent.indexOf("Edge")==-1){bf(aD,1,1,"/",aF);X();o()}}},ao=function(){var bE,x;bE=z(aU);x=z(aS);if(bE!=="true"&&bE!=="TRUE"&&x!=="true"&&x!=="TRUE"){return false}return true},r=function(){var x="image6.pubmatic.com/AdServer/PugMaster?sec=1&async=1&kdntuid=1&rnd="+Math.floor(Math.random()*100000001);x+="&p="+ap+"&s="+aR+"&a="+c+"&ptask="+ai+"&np="+(v.np||"0")+"&fp="+(v.fp||"0")+"&mpc="+(v.mpc||"0")+"&spug=1&coppa="+(v.coppa||"0")+"&gdpr="+v.gdpr+"&gdpr_consent="+v.gdpr_consent+"&us_privacy="+v.us_privacy;if((z(aO)||0)<=(new Date()).getTime()){if(!z(aC)){bf(aC,"YES",1,"/",aF);setTimeout(function(){bi(aC,"/",aF)},3000);y();u(az+x)}else{setTimeout(function(){bc()},3000)}}else{a4()}},o=function(){ai=v.ptask||"ALL";ap=bv(v.p||0);if(ap==0){ap=bv(z("pp"))||0}aR=bv(v.s||0);c=bv(v.a||0);a2=bv(v.bce||(a2?1:0)||0);aZ(ap);var bF=ad(ap);v.gdpr_consent=bF&&bF.c?bF.c:(v.gdpr_consent||"");v.gdpr=v.gdpr_consent?1:(v.gdpr||"0");if(v.gdpr==1){a2=false}bD(ap);var x=aa(ap);v.us_privacy=x&&x.c?x.c:v.us_privacy||"";var bE=ao();if(bE==false){bf(bq,"YES",90,"/",bh)}if(bE==false&&z(bq)==="YES"){bi(bq,"/",bh);r()}else{if(a2){u(az+"image6.pubmatic.com/AdServer/UCookieSetPug?oid=2&cb=PubMatic._uidCB")}else{a4()}}};ay.PugMasterCallback=function(bE,x,bF){setTimeout(function(){bi(aC,"/",aF)},2000);if(bE||(!v.SPug&&Math.floor(Math.random()*100)<=10)){K(ap)}if(x){setTimeout(function(){bc()},30000)}if(bF){bf(aO,(new Date()).getTime()+(60*60*6*1000),1,"/",aF)}a4()};ay.loadAsyncIframePixel=function(x){bj(x)};ay.loadAsyncImagePixel=function(x){I(x)};ay.loadAsyncScriptPixel=function(x){u(x)};o();af(aQ,"unload",X);af(aQ,"beforeunload",X)}else{try{document.domain=bh}catch(bA){}aW={};ay.r=function(){var x=aQ.location.href,bK=x.indexOf("#")>-1?x.substr(x.indexOf("#")+1):"",bG=bK.split("&"),bO=bG.length,bL,bN=0,bE,bQ,bI,bJ={},bF={},bH=[],bP=null,bM=aW;for(;bN<bO;bN++){bI=bG[bN].split("=");bE=bI[0];bQ=aJ(bI[1])||"";if(bE==="ni"){bQ=bQ.split(",");bH.push([bv(bQ[0]),bv(bQ[1]),parseFloat(bQ[2]),parseFloat(bQ[3])])}else{bJ[bE]=bQ}}if(bJ.kpassbackpars){bL=bJ.kpassbackpars.split(",");delete bJ.kpassbackpars;bO=bL.length;for(bN=0;bN<bO;bN++){bE=bL[bN];if(bJ.hasOwnProperty(bE)){bF[bE]=bJ[bE];delete bJ[bE]}}bF.kpassbackpars=bL.join(",");bM.pbv=bF}bM.c=bJ;bM.nis=bH;if(bH.length>0){bP=bM}return bP};ay.AdInfo=aW}}}}else{if(ay.AHT===2){al()}else{if(ay.AHT===1){a1()}else{if(window.pubId&&a2&&!ay.hasOwnProperty("pm_uid_bc")){ay.pm_uid_bc="";bm(az+"image6.pubmatic.com/AdServer/UCookieSetPug?oid=2&cb=PubMatic._uidCB");bm(az+"ads.pubmatic.com/AdServer/js/showad.js")}else{a5=a0();if(a5.pubId&&a5.siteId&&a5.adId&&a5.kadheight&&a5.kadwidth){aZ(a5.pubId);bD(a5.pubId);a5.SAVersion="2";a5.js="1";a5.kdntuid="1";a7(a5);M(a5);if(aQ.pmAsyncEnabled&&aQ.kadasync!=false){(function(){var x="PubMatic_Async_"+Math.random(),bF=false,bE=function(){if(bF){return}bF=true;var bJ=document.getElementById(x),bH,bG;if(bJ){bH='<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head>';bH+="<body>";bH+="<script>";bH+="var pubId = "+a5.pubId+";";bH+="var siteId = "+a5.siteId+";";bH+="var kadId = "+a5.adId+";";bH+="var kadwidth = "+a5.kadwidth+";";bH+="var kadheight = "+a5.kadheight+";";bH+="var kadtype = "+a5.kadtype+";";bH+="var kadasync = false;";bH+="var kadGdpr = "+a5.gdpr+";";for(bG in C){if(C.hasOwnProperty(bG)&&a5.hasOwnProperty(C[bG].n)){bH+="var "+bG+' = "'+aJ(a5[C[bG].n])+'";'}}bH+="<\/script>";bH+='<script src="'+av+'"><\/script>';bH+="</body></html>";var bI=bJ.contentWindow.document;bI.write(bH);bI.close()}};F('<iframe id="'+x+'" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" scrolling="no" width="'+a5.kadwidth+'" hspace="0" vspace="0" height="'+a5.kadheight+'"></iframe>');setTimeout(function(){bE()},15)})()}else{E=false;if(a5.kadNetwork){E=al(a5)}if(!E){var t=false,b=50,A={31420:"",42657:"",79534:"",73587:"",46076:""},G={90627:"",90632:""};if(bw.IE&&aQ!=a6){try{if(aQ.frameElement&&aQ.frameElement.src.indexOf("javascript:")===0){t=true;if(!document.body){F('<span style="'+aX+'"/>');b=500}if(A.hasOwnProperty(a5.pubId)||G.hasOwnProperty(a5.siteId)){t=false}}}catch(W){}}if(t){ay.showAd(a5,!!a5.kadNetwork,true);setTimeout(function(){U(av+"#PMFRAME=1&"+q(a5)+"&it="+bw.it+"&bce="+(a2?1:0),a5.kadheight,a5.kadwidth,"height:"+a5.kadheight+"px;width:"+a5.kadwidth+"px;position:absolute;left:0px;top:0px;z-index:100",null,null,null,false,true)},b)}else{ay.showAd(a5,!!a5.kadNetwork)}}}}}}}}}catch(bA){aq(bA)}})();
//--></script></body></html>