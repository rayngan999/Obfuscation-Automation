<!DOCTYPE html>
<html>
<head>
</head>
<body>
<script>
function ssaE(d){if (typeof(encodeURIComponent) == 'function') {return encodeURIComponent(d);} else {return escape(d);}}
function ssaCls(nm,vl){try{ sessionStorage.setItem(nm,vl);localStorage.setItem(nm,vl);}catch(e_r){}}
function ssaRls(nm){ try {if ((localStorage.getItem(nm)==null)) {return(sessionStorage.getItem(nm)); }else{return(localStorage.getItem(nm));}}catch(e_r){}}
function ssuuid(g){var h="0123456789abcdef".split("");var b=[],d=Math.random,a;b[8]=b[13]=b[18]=b[23]="-";b[14]="4";for(var e=0;e<36;e++){if(!b[e]){a=0|d()*16;b[e]=h[(e==19)?(a&3)|8:a&15]}}var j=(g!==null)?b.join("").replace(/-/g,"").split("",g).join(""):b.join("");var f="",c=10;if(j.length>c){f=(new Date().getTime()).toString(16).substr(-c);j=f+j.substr(c)}return j};
function adfimg(s){ var i=new Image(1,1); i.src="https://dmp.adform.net/serving/cookie/match/?party=1120&cid="+s+"&RM="+Math.round(Math.random()*2147483647); i.onload=function(){return;}}
function fappnx(s) {var i = new Image(1,1);i.src = "https://ib.adnxs.com/mapuid?member=9799&user="+s+"&RM="+Math.round(Math.random()*2147483647);i.onload = function() {return;}}
function callOptin(cn,s) {var sa_=new Image(1,1);sa_.src="https://optin.shinystat.com/cgi-bin/collect.cgi?ids=18277034&hash="+cn+"&ssa="+s+"&hr="+ssaE("https://www.ideegreen.it/")+"&RM="+Math.round(Math.random()*2147483647);sa_.onload=function(){return;}}

function ssacall(css,capx,cmp){
    var s;
    var oldssa="";
    var ssaf="";
    var hr=ssaE("https://www.ideegreen.it/");
    var rf=ssaE("");
    var ug="&ND=1";
    var um="&NM=1";
    var nv="&NV=1";
    var direct="";
    var aff="1"
    var emd5="";
    var semer="&SEMER=";
    var cocam="&COCAM=";
    var ssaif=ssaRls("SSA");
    var t=new Date();
    var tnow=t.getTime();
    var txp="";
    var mappnx="";

    if (debug) console.log("consenso ss="+css+" apx="+capx);
    if(!css) return;

    if (emd5){ direct="&EMD5="+emd5+semer+cocam; }

    if (!ssaif) {
        s=ssuuid();
        ssaCls("SSA",s);        
    }
    else{ 
        s=ssaif;
        //if (capx) { 
        if (0) {
            var anx=ssaRls("ANX");
            if (!anx){        
                    ssaCls("ANX",tnow);
                    fappnx(s);                 
            }
            else{                
                if ((tnow-parseInt(anx,10))>1296000000) {          
                    ssaCls("ANX",tnow);     
                    fappnx(s);                     
                }
            }
            mappnx="&NX=1";  
        }
    }

    if (ssaf != s) { oldssa="&SSA_OLD="+ssaf;}        
    try {
    	var ssa=document.createElement('script'); 
    	ssa.type='text/javascript'; 
    	ssa.id="ssa";
    	ssa.src="https://ssa.shinystat.it/cgi-bin/as.cgi?EB=0&BSM=0&NWK_ID=3&PUB_ID=18277034&SSA="+s+oldssa+"&PUB_URL="+hr+"&PUB_REF="+rf+ug+um+nv+mappnx+direct+txp+"&RM="+Math.round(Math.random()*2147483647);
   	    document.getElementsByTagName('head')[0].appendChild(ssa);
        if (cmp) request_consentData();        
        else callOptin("No iab cmp compliant",s);
    }
    catch(e_r){if (debug) console.log(e_r)}
    
    window.parent.postMessage('ssa_ls|'+s , '*');
}

function detectTcf() {
  try {
    if (window.parent.frames["__cmpLocator"]) {
      if (debug) console.log("TCF v1");
      return {
          V: 1,
    	  FN_CALL_NAME: '__cmpCall',
          CMD_GET_CONSENT: 'getVendorConsents',
     	  CMD_GET_DATA: 'getConsentData',
          OBJ_API_RETURN: '__cmpReturn',
          ATTR_CONSENT_DATA: 'consentData',
          GET_VENDOR_CONSENTS: function(i) { return i.returnValue.vendorConsents; }
      };
    }
  } catch(err) {
    // frame v.1 non trovato
  }
  
  try {
    if (window.parent.frames["__tcfapiLocator"]) {
      if (debug) console.log("TCF v2");
      return {
          V: 2,
          FN_CALL_NAME: '__tcfapiCall',
          CMD_GET_CONSENT: 'getTCData',
          CMD_GET_DATA: 'getTCData',
          OBJ_API_RETURN: '__tcfapiReturn',
          ATTR_CONSENT_DATA: 'tcString',
          GET_VENDOR_CONSENTS: function(i) { return i.returnValue.vendor.consents; }
       };
    } 
  } catch(err) {
    // frame v.2 non trovato
  }
  
  if (debug) console.log("no cmp");
  ssacall(1,1,0);
  return false;
}

function cmpResponseHandler(event) {
    try {
      var json = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      
      if (json[tcf.OBJ_API_RETURN]) {
        var i = json[tcf.OBJ_API_RETURN];
        if (i.callId == callId) {
          var r = tcf.GET_VENDOR_CONSENTS(i);
          var c491 = (!!r && r[491]) ? 1 : 0;
          var c32 = (!!r && r[32]) ? 1 : 0;
          if (debug) console.log("ok cmp", c491, c32, 1);                            
          if (!trueCall) ssacall(c491, c32, 1);         
          trueCall=1;
        }
      }
    }
    catch(e_r){
       if (debug) console.log("error json cmp");
    }
};

function setTcfApiProxy() {
  // map of calls
  const cmpCallbacks = {};
  window.__tcfapi = function(cmd, version, callback, arg) {
    const callId = Math.random() + '';
    const msg = {
      __tcfapiCall: {
        command: cmd,
        parameter: arg,
        version: version,
        callId: callId,
      },
    };
    cmpCallbacks[callId] = callback;
    window.parent.postMessage(msg, '*');
  };

  function postMessageHandler(event) {
    let json = {};
    try {
      json = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
    } catch (ignore) {}
    const payload = json.__tcfapiReturn;
    if (payload) {
      if (typeof cmpCallbacks[payload.callId] === 'function') {
        cmpCallbacks[payload.callId](payload.returnValue, payload.success);
        cmpCallbacks[payload.callId] = null;
      }
    }
  }
  window.addEventListener('message', postMessageHandler, false);
}

function request_vendor_consent(vid){
  tcf = detectTcf();
  if (!tcf) return;
  
  try {
    if (debug) console.log("ok consent", tcf.V);

    if (tcf.V == 1) {
      if (window.addEventListener) window.addEventListener('message', cmpResponseHandler, false);
      else window.attachEvent('onmessage', cmpResponseHandler);
      var msg = {};
      msg[tcf.FN_CALL_NAME] = {
        command: tcf.CMD_GET_CONSENT,
        parameter: vid,
        version: tcf.V,
        callId: callId,
      };
      window.parent.postMessage(msg, "*");
    }
    
    if (tcf.V == 2) {
      setTcfApiProxy();
      __tcfapi('addEventListener', 2, function(TCData, success) {
        if(debug) console.log("TCData", TCData);
        if(debug) console.log("TCData status", TCData.eventStatus);
        try {
        	var r = TCData.vendor.consents;
        	if(debug) console.log("r", r);
        	var c491 = (!!r && r[491]) ? 1 : 0;
        	var c32 = (!!r && r[32]) ? 1 : 0;
        	if (debug) console.log("ok cmp", c491, c32, 1);                            
        	if (!trueCall) ssacall(c491, c32, 1);         
        	trueCall=1;
        }
        catch(e_r){
      		if (debug) console.log("Error TCData.vendor");
      //		ssacall(1,1,0);
  	} 
      });
    }
    
  }
  catch(e_r){
      if (debug) console.log("Error frame");      
      ssacall(1,1,0);
  }
}


function ResponseDataHandler(event) {
  try {
    var json = typeof event.data === "string" ? JSON.parse(event.data) : event.data;

    if (json[tcf.OBJ_API_RETURN]) {
      var i = json[tcf.OBJ_API_RETURN];
      if (i.callId == callIdData) {

        if (debug) console.log("ConsentData "+i.returnValue[tcf.ATTR_CONSENT_DATA]);
        if (!trueCallData) callOptin(i.returnValue[tcf.ATTR_CONSENT_DATA],ssaRls("SSA"));
        trueCallData=1;
      }
    }
  }
  catch(e_r){
     if (debug) console.log("error json no ConsensData", e_r);
  }
};

function request_consentData(){
  tcf = detectTcf();
  if (!tcf) return;
  
  try {

    if (window.addEventListener) window.addEventListener('message', ResponseDataHandler, false);
    else window.attachEvent('onmessage', ResponseDataHandler);
    var msg = {};
    msg[tcf.FN_CALL_NAME] = {
      command: tcf.CMD_GET_DATA,
      version: tcf.V,
      callId: callIdData,
    };
    window.parent.postMessage(msg, "*");  

  }
  catch(e_r){
      if (debug) console.log("no consens data message");
  }
}

var tcf;
var debug = 0;
var callId = Math.random() + "";
var callIdData = Math.random() + "";
var trueCall = 0;
var trueCallData = 0;
request_vendor_consent([491]);

</script>
</body>
</html>

