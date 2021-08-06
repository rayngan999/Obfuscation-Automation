<!--
function _ssPre() { if ((typeof document.webkitVisibilityState!='undefined' && document.webkitVisibilityState=='prerender') || (typeof document.visibilityState!='undefined' && (document.visibilityState=='prerender' || document.visibilityState[0]=='prerender'))) return 1; return 0;}
function cCk(nm,vl,mn){var ex=cdm="";var _sscdom="";if (_ssPre()) { return; } if (_sscdom && _sscdom!="") { cdm=" domain="+_sscdom; if (mn) {document.cookie=nm+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/;";}}if (mn) {var d=new Date();d.setTime(d.getTime()+(mn*6*1000)); ex="; expires="+d.toGMTString();} document.cookie=nm+"="+vl+ex+"; path=/;"+cdm+"";}
function rCk(nm){var nEQ=nm+"=";if (_ssPre()) { return; } var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i]; while(c.charAt(0)==' ') c=c.substring(1,c.length); if(c.indexOf(nEQ) == 0) return c.substring(nEQ.length,c.length);}return null;}
function ud(){var u=""+o_.getTime();return(u);}
function udtb(){var u=""+otb_.getTime();return(u);}
function _ssrit(m){var n=new Date();var eT=n.getTime()+m;while(true){n=new Date();if(n.getTime()>eT){return;}}}
function _ssvoid(){return;}
function _ssHash(k) { var h = 0, g;for (var i=0;i<k.length-1;i++) {h=(h<<4)+parseInt(k.charCodeAt(i));if (g=h&0xF0000000)h^=g>>24;h&=~g;}return(h);}
function ssxl(xl_,r){var i_=new Image(1,1);i_.src="https://s3.shinystat.com/cgi-bin/csa.cgi?USER="+usBJRED_+"&"+xl_+"&RM="+Math.round(Math.random()*2147483647);if(r){_ssrit(r);}else{_ssrit(500);}i_.onload=function(){_ssvoid();}}
function sseXr(a,b){var rt="";for(var i=0;i<a.length;i++){rt+=String.fromCharCode(b^a.charCodeAt(i));}return(rt);}
function _sse(_o, e, f){if(window.addEventListener){ _o.addEventListener(e, f, false);}else if(window.attachEvent){ _o.attachEvent('on'+e, f);}else{}}
function _ttr(_t){cCk("TTR_"+usBJRED_,_t);} // for js reload insert this function before location.reload 
function _cttr(){ if (_tr=rCk("TTR_"+usBJRED_)){document.cookie = "TTR_"+usBJRED_+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/;";return("&RFS="+_tr);}else return("");}
function _chkr(){var _mt=document.getElementsByTagName('meta');var _ttr="";var _tr=0;for(var i=0;i<_mt.length;i++) {var _cd=_mt[i].httpEquiv.toLowerCase();if(_cd.indexOf('refresh')>-1){_pp = _mt[i].content.indexOf(';');if (_pp>-1) {_ttr = _mt[i].content.substr(0,_pp+1);}else{_ttr = _mt[i].content;}}}_tr=parseInt(_ttr,10);if (_tr) { return (_tr); }else{return 0;}}
function _sstepBJRED(e){var oe=new Date();var _dt=Math.round((oe.getTime()-tbro_)/1000);if (_tr=_chkr())if ((_dt>=(_tr-2)) && (_dt <=(_tr+2))) _ttr(_tr);cCk("SN_"+usBJRED_,stfCkBJRED(snBJRED_,svBJRED_,_dt),2592000);}
function sseC(d) {if (typeof(encodeURIComponent) == 'function') {return encodeURIComponent(d);} else {return escape(d);}}
function ssORDCK(){if (!okcvBJRED_){if (typeof(_ssCONV) !== 'undefined') {okcvBJRED_=_ssCONV;if ((typeof(_ssCurr) !== 'undefined') && (_ssCurr!='')) {return(_ssCONV+"&C_CUCY="+_ssCurr)}return(_ssCONV);}return("");}return(okcvBJRED_);}
function ssORD(){var _par_="SSCONV="+ssORDCK();var argv = ssORD.arguments;if (_paguBJRED.length>1) {_par_+="&"+_paguBJRED}if (argv[0].length<=1) {_cidorBJRED=""+o_.getDate()+o_.getMonth()+"-"+rssidBJRED_;argv[0]=_cidorBJRED;} else{ _cidorBJRED=""+sseC(argv[0]);}for (var i = 0; i<argv.length && i<_cvt.length; i++) {if (argv[i]) _par_+="&"+_cvt[i]+sseC(argv[i]);}_sscABJRED[_idxcABJRED++] = _par_+pccBJRED_+ssidBJRED_;}
function ssORDnm() {var argv = ssORDnm.arguments;ssORD(argv[0], 0, 0, 0, argv[1], argv[2], argv[3]);}
function ssPROD(){ var _conv="SSCONV="+ssORDCK(); var _par_=_conv+"&"+_cvt[0]+_cidorBJRED;var argv = ssPROD.arguments;for (var i = 0; i < argv.length && i<_cvp.length; i++) {if (argv[i]) _par_+="&"+_cvp[i]+sseC(argv[i]);}_par_+="&C_IXPR="+_idxcABJRED;_sscABJRED[_idxcABJRED++] = _par_;}
function ssPRODnm() {var argv = ssPRODnm.arguments;ssPROD(argv[0], argv[1], 0, argv[2], argv[3]);}
function ssCvTrack(){var _sscmp="";var _ssa="";_sscmp=rCk("SSIDC_"+usBJRED_);_ssa=ssaRls2("SSA");for (var i = 0; i < _sscABJRED.length; i++) { if (_sscABJRED[i].indexOf("C_PRTO")>-1) { _sscABJRED[i]+="&C_NUPR="+(_sscABJRED.length-1); if (_sscmp) _sscABJRED[i]+="&CAMP="+_sscmp; } if (_ssa) _sscABJRED[i]+="&SSA="+_ssa; ssxlBJRED(_sscABJRED[i]);}}
function ssaRls(nm){try{if(localStorage.getItem(nm)==null){if(sessionStorage.getItem(nm)==null){return 0};return(sessionStorage.getItem(nm));}else{return(localStorage.getItem(nm));}}catch(e_r){}}
function ssaRls2(nm){var ssa=ssaRls(nm); return(ssa);}
function scCk(cck,v,r){var ca=_fr_=_ioi_=_id_=_tuv_=_fhr_=_lhr_=_hr_="";var _lr_=r;var _v_=_p_=_pvc_=idx=1;var _tfr_=_tuv_=ud();if (!v) v=0;_hr_=_vhrBJRED;if (self != top){try {_hr_=document.referrer;}catch(e_r){}}_lhr_=sseC(_hr_);if ((idx=_lr_.indexOf(document.domain))>0) {if (idx<9) _lr_="";}idx=_hr_.indexOf('?');if (idx>-1) _lhr_=sseC(_hr_.substr(idx));if (okcvBJRED_) {_id_=rssidBJRED_;}if (cck) {ca = cck.split('%G');_v_=parseInt(ca[0],10);if (!isNaN(ca[6])) {_pvc_=parseInt(ca[6],10)+1;}_p_=parseInt(ca[1],10)+1;if (!(parseInt(ca[7],10))) _tuv_=ud();else _tuv_=ca[7];if (otb_.getTime()-parseInt(v,10)>st_) {_v_++;_pvc_=1;_tuv_=o_.getTime();} _fr_=ca[2];_fhr_=ca[8];_tfr_=ca[3];if (!_lr_) _lr_=ca[4]; if (!_lhr_) _lhr_=ca[9];if (!ca[5]) ca[5]=_id_;  else _id_=ca[5];}else{_fr_=_lr_;_fhr_=_lhr_;}_lhr_="";_lr_="";_ioi_=""+_v_+"%G"+_p_+"%G"+_fr_+"%G"+_tfr_+"%G"+_lr_+"%G"+_id_+"%G"+_pvc_+"%G"+_tuv_+"%G"+_fhr_+"%G"+_lhr_; pccBJRED_="&"+_cve[0]+_v_+"&"+_cve[1]+_p_+"&"+_cve[2]+_fr_+"&"+_cve[3]+_tfr_+"&"+_cve[4]+_lr_+"&"+_cve[5]+_id_+"&"+_cve[6]+_pvc_+"&"+_cve[7]+_tuv_;pccBJRED_+="&"+_cve[8]+_lhr_+"&"+_cve[9]+_fhr_;return(_ioi_);}
function sswk_(tnow){var w = Math.floor( ( (tnow / 86400000 ) - 4) / 7);return w}
function stfCkBJRED(ck,v,upt){var ca=_pt_=_iof_=can="";var _f_=uv_=uvw=1;var _tf_=ud();var _t_=_bu_=0;_ort=new Date();_ort.setTime(o_.getTime()+(1000*ssoffset_));if (!v) v=0;if (ck) {ca = ck.split('%G');_f_=parseInt(ca[2],10);_tf_=parseInt(ca[3],10);if (o_.getTime()-parseInt(v,10)>st_){_ot=new Date();_ot.setTime(parseInt(_tf_,10)+(1000*ssoffset_)); if(_ort.getUTCMonth()==_ot.getUTCMonth()){_f_++;}else{_f_=1;_tf_=ud();}}_t_=ca[0];_pt_=ca[1];_bu_=ca[4];if (ca[5]) can=ca[5];}if (upt) {if (_paguBJRED.length>1) {_pt_=_paguBJRED.substring(4);}else{_pt_=""+sseC(window.location.href);} _t_=upt;}_ot=new Date();_ot.setTime(parseInt(_bu_,10)+(1000*ssoffset_));if ((_ort.getUTCDay()==_ot.getUTCDay())&&(_ort.getUTCMonth()==_ot.getUTCMonth())&&(_ort.getUTCFullYear()==_ot.getUTCFullYear())) uv_=0;if (sswk_(_ort) == sswk_(_ot)) uvw=0;_iof_=""+_t_+"%G"+_pt_+"%G"+_f_+"%G"+_tf_+"%G"+ud()+"%G"+SScanBJRED(1);tfBJRED_="&TUP="+_t_+"&PTUP="+_pt_+"&FV="+_f_+"&UV="+uv_+"&US="+uvw+"&DUP="+(_bu_/1000)+"&PCNL="+can;return(_iof_);}
function _sslinkd(_uj,nodl){var pc,sqs,shr,a,b,c,d,h,exl;var sdl=document.location;if (!_uj || _uj=="") return;sqs = _uj.indexOf("?"); shr = _uj.indexOf("#"); a=rCk("SSC_"+usBJRED_);b=rCk("SV_"+usBJRED_,1);c=rCk("SN_"+usBJRED_);h=a+b+c;d=_ssHash(h.toUpperCase());pc ="SSC__="+a+"&SV__="+b+"&SN__="+c+"&SHS__="+d;if (pc) {if (sqs==-1 && shr==-1) exl=_uj+"?"+pc;else if (shr==-1) exl=_uj+"&"+pc;else if (sqs==-1) exl=_uj.substring(0,shr-1)+"?"+pc+_uj.substring(shr);else exl=_uj.substring(0,shr-1)+"&"+pc+_uj.substring(shr);if (nodl) {return(exl);}else{ sdl.href=exl;}}else { if (nodl) {return(_uj);}else{ sdl.href=_uj;}}}
function _sspostd(_fj){var pc,sqs,shr,a,b,c,d,h;if (!_fj || !_fj.action) return;sqs = _fj.action.indexOf("?"); shr = _fj.action.indexOf("#"); a=rCk("SSC_"+usBJRED_);b=rCk("SV_"+usBJRED_);c=rCk("SN_"+usBJRED_);h=a+b+c;d=_ssHash(h.toUpperCase());pc ="SSC__="+a+"&SV__="+b+"&SN__="+c+"&SHS__="+d;if (pc) {if (_fj.method = 'post') {var inp = document.createElement('input');inp.type = 'hidden';inp.name = '_sspostd';inp.value = pc;_fj.appendChild(inp);}else{if (sqs==-1 && shr==-1) _fj.action+="?"+pc;else if (shr==-1) _fj.action+="&"+pc;else if (sqs==-1) _fj.action=_fj.action.substring(0,shr-1)+"?"+pc+_fj.action.substring(shr);else _fj.action=_fj.action.substring(0,shr-1)+"&"+pc+_fj.action.substring(shr);}}return;}
function objQS(qs){ dic = new Array();if(!qs) qs = location.search.substring(1);if(qs!=""){aQs = qs.split('&');for(i=0;i<aQs.length;i++){aPV = aQs[i].split('=');dic[aPV[0]]=aPV[1];}}return dic}
function ckrld(){var dl=document.location;var qs=dla=a=b=c=d=e=h="";dla=dl.href.substring(dl.href.indexOf('#'));if (dla && dla!="") qs=dla+"&";qs+=dl.search.substring(1);if(qs && qs!="" && qs.indexOf("SV__=")>=0) {var pck=objQS(qs);if ( qs.indexOf("SSNP__=")>=0 ) {a=decodeURIComponent(pck['SSC__']);b=decodeURIComponent(pck['SV__']);c=decodeURIComponent(pck['SN__']);d=decodeURIComponent(pck['SHS__']);e=decodeURIComponent(pck['SSID__']);}else{a=pck['SSC__'];b=pck['SV__'];c=pck['SN__'];d=pck['SHS__'];e=pck['SSID__'];}h=a+b+c;if (_ssHash(h.toUpperCase()) != d) return;if (a && a!="") cCk("SSC_"+usBJRED_,a,2592000);if (b && b!="") cCk("SV_"+usBJRED_,b);if (e && e!="") cCk("SSID_"+usBJRED_,e);if (c && c!="") cCk("SN_"+usBJRED_,c,2592000);}}
function ssadbk(qs) { var img; img = new Image(); img.src = "//advm.brznetwork.com/commons/adsense.png"; img.onload = function() { return;}; img.onerror = function() { var iabk_=new Image(1,1); iabk_.src="https://s3.shinystat.com/cgi-bin/adbsa.cgi" + qs +"&RM="+Math.round(Math.random()*2147483647); iabk_.onload=function(){return;} }; }
function SSsdk(e){return("");} function SScanBJRED(){return("");}var ssxlBJRED=ssxl;var _cvt=new Array("C_IDOR=","C_PRTO=","C_PRTA=","C_PRSP=","C_NAZ=","C_PROV=","C_CITT=","C_USR0=","C_USR1=","C_USR2=","C_USR3=","C_USR4=","C_USR5=","C_USR6=","C_USR7=","C_USR8=","C_USR9=");var _cvp=new Array("C_IDPR=","C_QTA=","C_PRUN=","C_DEPR=","C_CATE=");
var _cidorBJRED;usBJRED_="SHN-ideegreenit";n_=c_="";l_=""+screen.width;y_=""+screen.height;v_=navigator;d_=document.referrer;dh_=window.location.href;var o_=new Date();var otb_=new Date();vu_="&VUT=-1";
ebl_="cdgnsdtomn`e";_edbl=tfBJRED_=pccBJRED_=okcvBJRED_=_paguBJRED=_vhrBJRED=svBJRED_=snBJRED_=ckadBJRED="";
var _cve=new Array("C_VISI=","C_PVIS=","C_REFP=","C_DATP=","C_REF=","C_IDCO=","C_PVCO=","C_DATV=","C_PAG=","C_PAGP=");ssidBJRED_="&SSID=";par_="&NODW=yes";
var _sscABJRED= new Array();var _idxcABJRED=0;
tbro_=o_.getTime();o_.setTime(1000*1627957320);var ssoffset_=0;var rssidBJRED_=Math.round(Math.random()*ud());var st_=1800000;var csp_=par_.split('&');
for(_i__=0;_i__<csp_.length;_i__++) {if (csp_[_i__].indexOf("PAG=")>-1) _paguBJRED=csp_[_i__];if (csp_[_i__].indexOf("SSCONV=")>-1) okcvBJRED_=csp_[_i__].substring(7,csp_[_i__].length);if (csp_[_i__].indexOf("CKAD=")>-1) ckrld();}_edbl=sseXr(ebl_,1);r_=""+sseC(d_);
if (self != top){try {r_=""+sseC(parent.document.referrer)+"&FHR="+sseC(d_);}catch(e_r){}}to_=ud();
k_="&CK="+(v_.cookieEnabled?"Y":"N");j_="&JV="+(v_.javaEnabled()?"Y":"N");hr_="&HR="+sseC(dh_);fd_=dh_.indexOf("?ssidc=");
if (fd_>-1){cCk("SSIDC_"+usBJRED_,dh_.substr(7+fd_,dh_.length),86400);}if(v_.appName!="Netscape"){c_=screen.colorDepth}else{c_=screen.pixelDepth}
if (svBJRED_ = rCk("SV_"+usBJRED_)){var det=otb_.getTime()-parseInt(svBJRED_,10);vu_="&VUT="+det;if (det>st_) {cCk("SSID_"+usBJRED_,rssidBJRED_);ssidBJRED_+=rssidBJRED_;_vhrBJRED=""+dh_;}else{ssidBJRED_+=rCk("SSID_"+usBJRED_);}}else {cCk("SSID_"+usBJRED_,rssidBJRED_);ssidBJRED_+=rssidBJRED_;_vhrBJRED=""+dh_;}cCk("SV_"+usBJRED_,udtb());
if (ssc_=rCk("SSC_"+usBJRED_)){cCk("SSC_"+usBJRED_,scCk(ssc_,svBJRED_,r_),2592000);}else{cCk("SSC_"+usBJRED_,scCk("",svBJRED_,r_),2592000);}if (snBJRED_=rCk("SN_"+usBJRED_)){cCk("SN_"+usBJRED_,stfCkBJRED(snBJRED_,svBJRED_,""),2592000);}else{n_="&NUT=y";cCk("SN_"+usBJRED_,stfCkBJRED("",svBJRED_,""),2592000);}
var ssqS_="https://s3.shinystat.com/cgi-bin/csa.cgi?USER="+usBJRED_+par_+"&REFER="+r_+"&COLOR="+c_+"&SIZE="+l_+"&RES="+l_+"X"+y_+k_+hr_+j_+vu_+n_+ssidBJRED_+tfBJRED_+_cttr()+SSsdk(svBJRED_)+SScanBJRED()+"&JS=Y&VJS=4035CSA";
if (_ssPre()){ssqS_=ssqS_+"&PRRD=1"}
if (par_.indexOf("NODW=yes")>-1){var ig_=new Image(1,1);ig_.src=ssqS_+"&RM="+Math.round(Math.random()*2147483647);ig_.onload=function(){_ssvoid();}}
else{document.write("<a href=\"https://s3.shinystat.com/cgi-bin/shinystatv.cgi?USER="+usBJRED_+"&NH=1\" Target=\"_new\"><img src=\""+ssqS_+"\" border=\"0\"/></a>"); }
ssadbk(ssqS_.substring(ssqS_.indexOf('?')));
if (window.sslinker) {(function(linkdata, linkdom){var linkdata = {};linkdata['SSNP__']=1;linkdata['SSID__']=rCk("SSID_"+usBJRED_);linkdata['SSC__']=rCk("SSC_"+usBJRED_);linkdata['SV__']=rCk("SV_"+usBJRED_);linkdata['SN__']=rCk("SN_"+usBJRED_);h=linkdata['SSC__']+linkdata['SV__']+linkdata['SN__'];linkdata['SHS__']=_ssHash(h.toUpperCase());var getLocation = function(href) {var l = document.createElement("a");l.href = href;return l;};var getUrlVars = function(href) {if (!href)return {};var vars = {}, hash;var hashes = href.slice(href.indexOf('?') + 1).split('&');for (var i = 0; i < hashes.length; i++) {hash = hashes[i].split('=');vars[hash[0]] = hash[1];} return vars;}; var serialize = function(obj) {var str = [];for(var p in obj)if (obj.hasOwnProperty(p)) {str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));}return str.join("&");}; var domains = linkdom.split(',');for (var d = 0; d < domains.length; d++) {domains[d] = domains[d].trim();}for (var i = 0; i < document.links.length; i++) {var href = document.links[i].href;for (var d = 0; d < domains.length; d++) {if (href.indexOf(domains[d]) > -1) {var l = getLocation(href);if (l.hostname.indexOf(domains[d]) > -1) {document.links[i].addEventListener('click', function(evt){var vars = getUrlVars(this.href.split('?')[1]);var new_data = {};for (var k in linkdata) {new_data[k] = linkdata[k];}for (var k in vars) {new_data[k] = vars[k];}var new_href = this.href.split('?')[0] + '?' + serialize(new_data);var a = getLocation(new_href);a.target = this.target;document.body.appendChild(a);a.click();document.body.removeChild(a);evt.preventDefault();});}}}}})(window.sslinkdata, window.sslinkdom);}
if(1) {
    function ssaE(d){if (typeof(encodeURIComponent) == 'function') {return encodeURIComponent(d);} else {return escape(d);}}
    function ssaCss(){
        var par="";
        try{
            if (typeof tfBJRED_ != 'undefined') {par+=tfBJRED_;}
            else{ if (typeof tf_ != 'undefined') {par+=tf_;}}             
            if (typeof par_ != 'undefined'){
              var psl=par_.split('&');
              for(var i=0;i<psl.length;i++) {
                  if (psl[i].indexOf("EMD5=")>-1) par+="&"+psl[i];
                  if (psl[i].indexOf("SEMER=")>-1) par+="&"+psl[i];
                  if (psl[i].indexOf("COCAM=")>-1) par+="&"+psl[i];
              }
            }
        }catch (e_r){}
        return (par);
    }
    function ssaCls(nm,vl){try{ sessionStorage.setItem(nm,vl);localStorage.setItem(nm,vl);}catch(e_r){}}
    function ssaRls(nm){ try { if (localStorage.getItem(nm)==null) {if (sessionStorage.getItem(nm)==null) {return 0};return(sessionStorage.getItem(nm)); }else{return(localStorage.getItem(nm));}}catch(e_r){}}
    function ssaPm (e) {
        if (e == null) return;
        var msg=e.data;
        if (typeof msg === 'string' || msg instanceof String){   
                if (msg.indexOf("ssa_ls")>-1) {
                        var ssa=msg.split('|');
                        if (ssa[1]){
                                if (ssa[1] != ssaRls("SSA")) { ssaCls("SSA",ssa[1]);}
                        }
                }
        }
    }
    function ssaif(){        
        var rf_=ssaE(document.referrer);
        if (self != top){try {rf_=""+ssaE(parent.document.referrer)}catch(e_r){}}
        var sls_=ssaRls("SSA");
        var nvs=0;
        if ((typeof vu_!="undefined") && vu_.indexOf("-1")>-1) {nvs=1;}
        else {if (parseInt(vu_.substring(1+vu_.indexOf("=")),10)>1800000 ) {nvs=1;}}               
        var ssals_="";
        if (sls_) {ssals_=sls_;}
        var uri="https://codicebusiness.shinystat.it/cgi-bin/getcod.cgi?IFSSA=yes&AFF=1&IDS=18277034&SSA="+ssals_+"&RF="+rf_+"&HR="+ssaE(window.location.href)+ssaCss()+"&NV="+nvs+"&RM="+Math.round(Math.random()*2147483647); 
         
       if (document.getElementById('ifssa')){
            //document.getElementById('ifssa').src=uri;
        }
        else{   
            try{                                                        
                ifssa = document.createElement("IFRAME"); 
                ifssa.setAttribute("src", uri); 
                ifssa.setAttribute("id", "ifssa"); 
                ifssa.setAttribute("name", "ifssa"+Math.round(Math.random()*100000)); 
                ifssa.setAttribute("tabindex", "-1");
                ifssa.setAttribute("sandbox", "allow-same-origin allow-scripts");
                ifssa.style.width = 0+"px"; 
                ifssa.style.height = 0+"px";    
                ifssa.style.display = "none";
                if (document.body) document.body.appendChild(ifssa);
                else document.addEventListener("DOMContentLoaded", function(event) { document.body.appendChild(ifssa); });
                if (window.addEventListener) {window.addEventListener("message", ssaPm, false);}else {window.attachEvent("onmessage", ssaPm);}           
            }
            catch(e_r){}                                                         
        }
        
    }

    function ssckconsentiab(infgen){
            var iabdebug=0;
            function waitForTCFapi(success, failure) {
                    var checks_done = 0;
                    function checkTCFapiexist() {
                            checks_done++;
                            if (typeof window.__tcfapi === "function") {success();} 
                            else {
                                    if (checks_done < 5) {setTimeout(checkTCFapiexist, 1000);} 
                                    else {failure();}
                            }
                    }
                    checkTCFapiexist();
            }
         
            function addTCFListener() {
                    __tcfapi('addEventListener', 2, function(TCData, success) {
                            if (TCData.cmpStatus == 'loaded' && (TCData.eventStatus == 'tcloaded' || TCData.eventStatus == 'useractioncomplete')) {
                                    __tcfapi('getTCData', 2, function(data,success){
                                            if(typeof data !== 'undefined' && typeof data.vendor !== 'undefined' && typeof data.vendor.consents !== 'undefined' &&  "491" in data.vendor.consents &&  data.vendor.consents[491]){
                                                    // Do something here
                                                    if (iabdebug) console.log("Yeah, consent given!");
                                                    ssaif();
                                            }else { if (iabdebug) console.log("Nope, consent NOT given!"); }
                                    },[491]);
                            }
                    });
            }
         
            function checkTCFapiConsent(){
                var n_checks = 0;
                var max_checks = 10;
                waitForTCFapi(function() {
                  // se trova la tfcapi...
                  if (iabdebug) console.log('+++ tcfapi trovata!');
                  // ma aggiungo il listener solo se la tcf e' pronta:
                  // in caso aspetto 1 secondo al max.
                 function checkTcfLoaded(stop) {
                   n_checks++;
                   if (iabdebug) console.log('check nr...', n_checks)
                    __tcfapi('ping', 2, function(pingReturn) {
                            if (pingReturn.cmpLoaded == true) {addTCFListener();} 
                            else {
                                    if (stop == 1) {  if (iabdebug) console.log('+++ tcf presente ma non caricata');} 
                                    else {
                                      if (n_checks < max_checks) {
                                        setTimeout(checkTcfLoaded, 500);
                                      } else {
                                        setTimeout(checkTcfLoaded, 500, 1);
                                      }
                                    }
                            }
                    });
                  }
                  checkTcfLoaded();
            }, function() {
                    // se non trova la tcfapi...
                    if (iabdebug) console.log('+++ tcfapi non trovata');
                    if (infgen!="0") {
                                 if (iabdebug) console.log('+++ infogen !=0 lancio ssaif');
                                 ssaif();
                    }
                    });
            }
         checkTCFapiConsent();
    }

    var infb="0";
    var infgen="1";

    function rCkconsent(nm){var nEQ=nm+"="; var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i]; while(c.charAt(0)==' ') c=c.substring(1,c.length); if(c.indexOf(nEQ) == 0) return c.substring(nEQ.length,c.length);}return null;}
function check_custom_consent(nck,value,log){
    var numcheck=50;
    function checkconsentssa(){   
       setTimeout(function(){
          numcheck--;
          var cbc;
          cbc = rCkconsent(nck);
          if (cbc) {  
                if (value) {
                   if (cbc.indexOf(value) >-1){  ssaif(); if (log) console.log(log); return;}
                   else {return;}
                }
                else{ ssaif(); if (log) console.log(log); return;}
          }
          else {
                if(numcheck>0) {checkconsentssa();}
                else{}
          }
       }, 1000);
    }     
    checkconsentssa();
}













    
    if (infb!="0"){ ssaif();}
    else {
       var nzgdpr = ["AT","BE","BG","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE","GB"];
       var okgdpr=1;
       for(var i=0;i<nzgdpr.length;i++){ if (nzgdpr[i]=="HK") {okgdpr=0;break;}} 
       if (okgdpr){ssaif();}
       else ssckconsentiab(infgen);       
    }

}
if (vu_.indexOf("-1")>-1) {
if (1) {
}
if (1){
    var _consentCallback = function(found) {
      var cmp="";
      if (found.length){
	      for (var i = 0; i < found.length; i++) { cmp+="$"+encodeURIComponent(found[i].name);}
      	      var dcmp_=new Image(1,1); 
              dcmp_.src="//s6.shinystat.com/cgi-bin/csa.cgi?USER=dcmp&PAG=18277034"+cmp+"&RM="+Math.round(Math.random()*2147483647);
              dcmp_.onload=function(){return;} 
      }
    };
    
    (function(cb) {
      var consentProviders = [];
      consentProviders.push({
        id: 1,
        name: 'iubenda',
        test: function() { return !!window._iub; }
      });
      consentProviders.push({
        id: 2,
        name: 'cookiebot',
        test: function() { return window.CookieConsent && window.Cookiebot; }
      });
      consentProviders.push({
        id: 3,
        name: 'generic CookieConsent-compliant (like cookiebot)',
        test: function() { return window.CookieConsent && !window.Cookiebot; }
      });
      consentProviders.push({
        id: 4,
        name: 'cookieconsent.insites.com',
        test: function() { return !!window.cookieconsent; }
      });
      consentProviders.push({
        id: 5,
        name: 'civicuk',
        test: function() { return window.CookieControl && !window.CookieConsent; }
      });
      consentProviders.push({
        id: 6,
        name: 'optanon by cookielaw.org',
        test: function() { return !!window.Optanon; }
      });
      consentProviders.push({
        id: 7,
        name: 'cookie-script.com',
        test: function() { return window.document.querySelectorAll('div[id^="cookiescript"]').length > 0; }
      });
      consentProviders.push({
        id: 8,
        name: 'generic cmp IAB guidelines compliant',
        test: function() { return !!window.__cmp; }
      });
      
      setTimeout(function() {
        var found = [];
        for (var i = 0; i < consentProviders.length; i++) {
          if (consentProviders[i].test()) {
            found.push({
              id: consentProviders[i].id,
              name: consentProviders[i].name
            });
          }
        }
        
        if (cb) {
          cb(found);
        }
      }, 1000);
    })(_consentCallback);
}

}
_sse(window, _edbl,_sstepBJRED);
if (1) {
  function _shDvh(h){var j=0,i;for(var f=0;f<h.length-1;f++){j=(j<<4)+parseInt(h.charCodeAt(f));if(i=j&4026531840){j^=i>>24}j&=~i}return(j)}
  function _ssGFtR(){var a=function(x){var d=["monospace","arial","courier"];var f="mmww725llimmmmnnmmmmmjjjjmmwwxx";var i=document;var u=i.createElement("span");u.style.fontSize="72px";u.style.visibility="hidden";u.style.position="fixed";u.innerHTML=f;var A="1";var v=[];var q=[];var j=d.length;var w=x.length;if(!i.body){return A}i.body.appendChild(u);for(var r=0;r<j;++r){u.style.fontFamily=d[r];v[r]=u.offsetWidth;q[r]=u.offsetHeight}for(var y=0;y<w;y++){var C="0";for(var B=0;B<j;++B){if(d[B]==x[y]){continue}u.style.fontFamily=x[y]+", "+d[B];if(v[B]!=u.offsetWidth||q[B]!=u.offsetHeight){C="1"}}A+=C}u.parentNode.removeChild(u);return A};var b=["antique olive","arial","arial black","century","century gothic","chicago","comic sans MS","courier","courier new","cursive","dauphin","dejaVu sans","didot","futura","georgia","geneva","gentium","helvetica","kaiti","king","kokila","impact","lalit","lucida console","marigold","modena","monospace","ms serif","palatino","papyrus","pegasus","purisa","serif","tahoma","textile","times new roman","trebuchet MS","vagabond","verdana","webdings","zapfino"];return a(b)}function _ssWgGl(){var l=document.createElement("canvas");try{if(!(l.getContext)){return"3"}g=l.getContext("webgl")||l.getContext("experimental-webgl");if(!g){return"4"}}catch(h){return"2"}if(!window.WebGLRenderingContext){return"3"}if(!g){return null}var b=g.getSupportedExtensions().join(":")+";";function i(k){if(!!g[k]){b+=g[k]+": ";var j=g.getParameter(g[k]);if(j instanceof Float32Array){for(var c=0;c<j.length;c++){b+=j[c]+":"}}else{b+=j+":"}}}b+=g.getContextAttributes().antialias;bj="version vendor max_fragment_uniform_vectors max_texture_image_units max_combined_texture_image_units max_vertex_attribs max_vertex_uniform_vectors max_vertex_texture_image_units aliased_line_width_range aliased_point_size_range renderer max_renderbuffer_size max_varying_vectors max_cube_map_texture_size red_bits green_bits blue_bits depth_bits alpha_bits stencil_bits shading_language_version".split(" ");for(var d=0;d<bj.length;d++){i(bj[d].toUpperCase())}var n=g.getShaderPrecisionFormat;if(!n){return result.join("~")}function a(k,j,r){var q=g.VERTEX_SHADER;if(k==2){q=g.FRAGMENT_SHADER}else{if(k==3){q=g.LOW_FLOAT}}var o=g.HIGH_FLOAT;if(j==2){o=g.MEDIUM_FLOAT}else{if(j==3){o=g.LOW_FLOAT}else{if(j==4){o=g.HIGH_INT}else{if(j==5){o=g.MEDIUM_INT}else{if(j==6){o=g.LOW_INT}}}}}if(r==1){return g.getShaderPrecisionFormat(q,o).precision}else{if(r==2){return g.getShaderPrecisionFormat(q,o).rangeMin}else{return g.getShaderPrecisionFormat(q,o).rangeMax}}}for(var f=1;f<3;f++){for(var d=1;d<7;d++){for(var m=1;m<4;m++){b+=a(f,d,m)+":"}}}return b}
  function _jFkt(){var t="";function D(f,c){for(var h in c){if(typeof h==="string"&&h!=="dopplerFactor"&&h!=="speedOfSound"&&h!=="state"&&h.substring(0,2)!=="on"){if(window.JSON){f[h]=window.JSON.stringify(c[h])}}}return f}try{var C=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!C){t="0"}else{if("function"!==typeof C){t="1"}else{var o=new C(1,1,44100),l=o.createAnalyser(),E=o.createGain();t=D({},o);t=D(t,o.destination);t=D(t,o.listener);t=D(t,l);t=D(t,E.gain);if(window.JSON){t=window.JSON.stringify(t)}else{t="1"}}}}catch(p){t="2"}var q=navigator;var s=q.plugins;var A=q.systemLanguage;var v=q.userLanguage;var u=q.language;var B=q.platform;var r=q.appVersion+"_"+q.vendor+"_"+window.indexedDB;var z="";for(var y=0;y<s.length;y++){e=s[y].name+";";e+=s[y].description+";";e+=s[y].filename+";";e+=s[y].version+";";z+=(_shDvh(e)+"").substring(0,5)}return["CD="+screen.colorDepth,"TZ="+(new Date(0)).getTimezoneOffset(),"PG="+_shDvh(z),"FT="+_shDvh(_ssGFtR()),"LG="+((A)?A:"")+";"+((v)?v:"")+";"+((u)?u:"0"),"PT="+((!!B)?B.substring(0,12):""),"BW="+_shDvh(r),"WG="+_shDvh(_ssWgGl()),"OC="+_shDvh(t)].join("&")};
  function affstock(cdom,nm){var _st;if (cdom && cdom!="") {return 1;} if (window.opera) {return 1;}if ( typeof(localStorage) == 'undefined' || typeof(sessionStorage) == 'undefined') {return 1;}if (!(_st = localStorage)) {return 1;}try {localStorage.setItem('sstat', '1');localStorage.removeItem('sstat');return 0;} catch (error) {return 1;}return 0;}
  function affck(nm,vl,mn){var ex=cdm="";var okc=0;var _sscdom="";var saf=0;try{if (navigator.vendor != null && navigator.vendor.match(/Apple/) && navigator.userAgent.indexOf('Safari') != -1) {saf=1;}}catch(e_r){}if (affstock(_sscdom,nm)) {if (_sscdom && _sscdom!="") { cdm=" domain="+_sscdom; if (mn) {document.cookie=nm+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/;";}}if (mn) {var d=new Date();d.setTime(d.getTime()+(mn*6*1000)); ex="; expires="+d.toGMTString();} document.cookie=nm+"="+vl+ex+"; path=/;"+cdm+"";}else{try{if (saf) {sessionStorage.setItem(nm,vl);localStorage.setItem(nm,vl);}else{if (mn) { _st = localStorage; }else{ _st = sessionStorage; }if (_st) { _st.setItem(nm,vl);}}}catch(e_r){}}}
  function affrk(nm){ var fcoo=null;var nEQ=nm+"=";var ca=document.cookie.split(';'); var ses;var saf=0;try{if (navigator.vendor != null && navigator.vendor.match(/Apple/) && navigator.userAgent.indexOf('Safari') != -1) {saf=1;}}catch(e_r){}if ((nm.indexOf("AFF_V_")>-1) || (nm.indexOf("AFF_S_")>-1)) {ses=1;}for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ') c=c.substring(1,c.length); if(c.indexOf(nEQ) == 0){ fcoo=c.substring(nEQ.length,c.length);}}if (affstock("",nm)) {return(fcoo);}else{ if (saf) {if ((sessionStorage.getItem(nm)==null) && (ses!=1)) {return(localStorage.getItem(nm)); }else{return(sessionStorage.getItem(nm));}}else{if (ses) { if (fcoo) {document.cookie=nm+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/;";return(fcoo);} _sstore = sessionStorage; }else{if (fcoo || fcoo=="") {document.cookie=nm+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/;";return(fcoo);} _sstore = localStorage;}return(_sstore.getItem(nm)); }}}
  function affwk_(tnow){var w = Math.floor( ( (tnow / 86400000 ) - 4) / 7);return w}
  function affafl() { var vf="-",v=navigator;if (v.plugins && v.plugins.length) {for (var z_=0;z_<v.plugins.length;z_++) {if (v.plugins[z_].name.indexOf('Shockwave Flash')!=-1) {vf=v.plugins[z_].description.split('Shockwave Flash ')[1];break;}}} else {var fl;try {fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");vf = fl.GetVariable("$version");} catch(e) {}if (vf == "-") {try {fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");vf = "WIN 6,0,21,0";fl.AllowScriptAccess = "always";vf = fl.GetVariable("$version");} catch(e) {}}if (vf == "-") {try {fl = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");vf = fl.GetVariable("$version");} catch(e) {}}if (vf != "-") {vf = vf.split(" ")[1].split(",");vf = vf[0] + "." + vf[1] + " r" + vf[2];}}if (vf!="-") {return ("&FLSHV="+vf);}return ("");}
  function affgsm(cc,t){var aux;if (cc) {_ort=new Date();_ort.setTime((1000*1627957320)+(1000*0));_ot=new Date();_ot.setTime(parseInt(cc,10));switch (t) {case 0:if ((_ort.getUTCDate()==_ot.getUTCDate())&&(_ort.getUTCMonth()==_ot.getUTCMonth())&&(_ort.getUTCFullYear()==_ot.getUTCFullYear())) {return(1);}else return 0; break;case 1:if (affwk_(_ort) == affwk_(_ot)) {return(1);}else return 0;break;case 2:if ((_ort.getUTCMonth()==_ot.getUTCMonth())&&(_ort.getUTCFullYear()==_ot.getUTCFullYear())) {return(1);}else return 0; break; }}else return 0;}
  function catsplit(c,base){if (c) {var ca=c.split(';');var cr=""; for(var i=0;i<ca.length;i++){if (ca[i]) {cr+=""+parseInt(ca[i],base);if (i<ca.length && ca[i+1]) {cr+=",";}}}return(cr);}return("");}      
  function affcan(){
    // ATTENZIONE MANTENERE SPAZIATURA HCOMP
    var aff_regexCanale = new Array('^https://www\.ideegreen\.it/?$');      

    var aff_not_regexCanale = new Array('');
    var aff_idxCanale = new Array('670');
    var aff_cat = new Array(';-1;:;');
    var aff_tag = new Array('');  
    var aff_sis = new Array('0');
    //  Verifico a quali canali appartiene la url
    var sis=0;
    for (var i=0;i<aff_regexCanale.length;i++){
        if (RegExp(aff_regexCanale[i],"i").test(window.location.href) && (aff_sis[i]==2 || aff_sis[i]==sis)){
            if (aff_not_regexCanale[i]=='' || !RegExp(aff_not_regexCanale[i],"i").test(window.location.href)) {
                return(aff_cat[i]+"#"+aff_tag[i]);                  
            }
        }
    }
    return("#")
  }

  // Codice di chiusura su pagine escluse ( canali )

  var nd=0;
  var ca=";53;:;5A;";
  var sr=affcan();
  var srs=sr.split('#');
  if (srs[0]!="") {
        if (srs[0].indexOf("-1")>=0) {
                if (self != top) {
                        console.log("Icast Autoclose"); 
                        window.parent.postMessage('adc_autoclose|' + encodeURIComponent(document.location.href), '*');
                }
                nd=1;
        }
        ca=srs[0];
  }

  // No id
  var idck=document.getElementById("_sftn");
   
  // No frame
  if (self == top && !idck) {

      var d_=new Date();
      var optout="0";
      d_.setTime((1000*1627957320)+(1000*0));
      t_=d_.getTime();
      var l_=""+screen.width;
      var y_=""+screen.height;
      var si_=affrk("AFF_S_18277034");
      var n=affrk("AFF_18277034");
      var ug=affrk("AFF_UG_18277034");
      var uw=affrk("AFF_UW_18277034");
      var um=affrk("AFF_UM_18277034");
      var v=affrk("AFF_V_18277034");
      var faff="0";
      var ds=0;
      if (n) {
          switch (parseInt(faff,10)) {
          case 0:
              ds=1;
              break;
          case 1:
              if (!v) {ds=1;}
              break;
          case 2:
              if (!affgsm(ug,0)) {ds=1;}
              break;
          case 3:
              if (!affgsm(uw,1)) {ds=1;}
              break;           
          }           
      }
      else{ds=1;}
       
      // TBM passback in caso di FC 
      if ((faff) && (!ds) && (11440 == 11478)){window.shbnr_stop_erog=1; window.postMessage('adc_sendevent|PASSBACK', '*');console.log("adc_sendevent|PASSBACK");}
     
       

      if (!parseInt(optout,10)) {
          affck("AFF_18277034",t_,2592000);
          affck("AFF_UG_18277034",t_,2592000);
          affck("AFF_UW_18277034",t_,2592000);
          affck("AFF_UM_18277034",t_,2592000);
          affck("AFF_V_18277034",t_);
      }

      if (!si_){
        si_=Math.round(Math.random()*t_);
              affck("AFF_S_18277034",si_);
      }

      if (ds) {
          var th_=("https:" == document.location.protocol) ? "https://" :"http://";

          if (!nd) {
              var iabdebug=0;
              catsp=ca.split(':');
              var base=16;
              var catp=""+catsplit(catsp[0],base);
              var cats=""+catsplit(catsp[1],base);
              var ssa=affrk('SSA')?"&SSA="+affrk('SSA'):"";
              var sftn=document.createElement('script');
              sftn.type='text/javascript';
              sftn.id="_sftn";
              sftn.async="async";
		if("SHN-ideegreenit"=="TRO-agrodolcepublichtmli" || "SHN-ideegreenit"=="TRO-wallstreetitaliapubl"){
			sftn.src=th_+"advs.brznetwork.com/cgi-bin/as.cgi?TEST=583&NWK_ID=3&PUB_ID=18277034&PUB_URL="+sseC(document.location.href)+"&PUB_REF="+r_+"&PUB_CAT="+catp+"&PUB_CAT2="+cats+"&TAGS="+srs[1]+"&SR="+l_+"X"+y_+affafl()+"&"+_jFkt()+"&SSID="+si_+"&OPTOUT="+optout+ssa+"&RND="+Math.round(Math.random()*2147483647);
		}
		else{
              		sftn.src=th_+"advs.brznetwork.com/cgi-bin/as.cgi?UP=0&NWK_ID=3&PUB_ID=18277034&PUB_URL="+sseC(document.location.href)+"&PUB_REF="+r_+"&PUB_CAT="+catp+"&PUB_CAT2="+cats+"&TAGS="+srs[1]+"&SR="+l_+"X"+y_+affafl()+"&"+_jFkt()+"&SSID="+si_+"&OPTOUT="+optout+ssa+"&RND="+Math.round(Math.random()*2147483647);
		}
               // Tm Check

               if (11440 == 11478){

                 function waitForTCFapi(success, failure) {
                     	var checks_done = 0;
    		     	function checkTCFapiexist() {
	      			checks_done++;
		        	if (typeof window.__tcfapi === "function") {success();} 
                                else {
	        			if (checks_done < 2) {setTimeout(checkTCFapiexist, 500);} 
                                        else {failure();}
      		    		}
    		 	}
    		 	checkTCFapiexist();
  		 }
 
  		function addTCFListener() {
    			__tcfapi('addEventListener', 2, function(TCData, success) {
      				if (TCData.cmpStatus == 'loaded' && (TCData.eventStatus == 'tcloaded' || TCData.eventStatus == 'useractioncomplete')) {
        		    		__tcfapi('getTCData', 2, function(data,success){
			            		if(typeof data !== 'undefined' && typeof data.vendor !== 'undefined' && typeof data.vendor.consents !== 'undefined' &&  "491" in data.vendor.consents &&  data.vendor.consents[491]){
                					// Do something here
                					if (iabdebug) console.log("Yeah, consent given!");
                                                        if ("18277034" == "18289824") {
                                                                         if (vu_.indexOf("-1")>-1) ssxl("SS_EVENT=visita%20ok%20consenso");
                                                                         else ssxl("SS_EVENT=ok%20consenso");
                                                        }
                                                        document.body.appendChild(sftn);
            		    			}else { console.log("Nope, consent NOT given!");
                                                        if ("18277034" == "18289824") {
                                                                          if (vu_.indexOf("-1")>-1) ssxl("SS_EVENT=visita%20no%20consenso");
                                                                          else ssxl("SS_EVENT=no%20consenso");
                 
                                                        }

                                                }
        				},[491]);
      				}
    			});
  		}


		function checkTCFapiConsent(){
		    waitForTCFapi(function() {
		      // se trova la tfcapi...
                      if (iabdebug) console.log('+++ tcfapi trovata!');
     		      // ma aggiungo il listener solo se la tcf e' pronta:
		      // in caso aspetto 1 secondo al max.
      		     function checkTcfLoaded(stop) {
        		__tcfapi('ping', 2, function(pingReturn) {
          			if (pingReturn.cmpLoaded == true) {addTCFListener();} 
                                else {
            				if (stop == 1) {  
                                                if (iabdebug) console.log('+++ tcf presente ma non caricata'); 
                                                if ("18277034" == "18289824") {
                                                          if (vu_.indexOf("-1")>-1) ssxl("SS_EVENT=visita%20tfc%20presente%20ma%20non%20caricata");
                                                          else ssxl("SS_EVENT=tfc%20presente%20ma%20non%20caricata");
                                                }
                                        } 
                                        else {setTimeout(checkTcfLoaded, 1000, 1);}
          			}
        		});
      	              }
      		      checkTcfLoaded();
    		}, function() {
      			// se non trova la tcfapi...
      			if (iabdebug) console.log('+++ tcfapi non trovata');
                        if ("18277034" == "18289824") {
                             if (vu_.indexOf("-1")>-1) ssxl("SS_EVENT=visita%20tcf%20non%20trovata");
                             else ssxl("SS_EVENT=tcf%20non%20trovata");
                        }
    			});
		}
                checkTCFapiConsent();

              }
              else { 
                  document.body.appendChild(sftn);
                  if ("18277034" == "18289824") { ssxl("SS_EVENT=ok%20ViewMax%20Caricato"); }
                  if (iabdebug) console.log("ok sftn");
              }
          }            
      }
    }
 }



//-->
