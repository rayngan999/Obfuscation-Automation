<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head><script data-ezscrex='false' data-cfasync='false' data-pagespeed-no-defer>var __ez=__ez||{};__ez.stms=Date.now();__ez.evt={};__ez.script={};__ez.ck=__ez.ck||{};__ez.template={};__ez.template.isOrig=false;__ez.queue=(function(){var count=0,incr=0,items=[],timeDelayFired=false,hpItems=[],lpItems=[],allowLoad=true;var obj={func:function(name,funcName,parameters,isBlock,blockedBy,deleteWhenComplete,proceedIfError){var self=this;this.name=name;this.funcName=funcName;this.parameters=parameters===null?null:(parameters instanceof Array)?parameters:[parameters];this.isBlock=isBlock;this.blockedBy=blockedBy;this.deleteWhenComplete=deleteWhenComplete;this.isError=false;this.isComplete=false;this.isInitialized=false;this.proceedIfError=proceedIfError;this.isTimeDelay=false;this.process=function(){log("... func = "+name);self.isInitialized=true;self.isComplete=true;log("... func.apply: "+name);var funcs=self.funcName.split('.');var func=null;if(funcs.length>3){}else if(funcs.length===3){func=window[funcs[0]][funcs[1]][funcs[2]];}else if(funcs.length===2){func=window[funcs[0]][funcs[1]];}else{func=window[self.funcName];}
if(typeof func!=='undefined'&&func!==null){func.apply(null,this.parameters);}
if(self.deleteWhenComplete===true)delete items[name];if(self.isBlock===true){log("----- F'D: "+self.name);processAll();}}},file:function(name,path,isBlock,blockedBy,async,defer,proceedIfError){var self=this;this.name=name;this.path=path;this.async=async;this.defer=defer;this.isBlock=isBlock;this.blockedBy=blockedBy;this.isInitialized=false;this.isError=false;this.isComplete=false;this.proceedIfError=proceedIfError;this.isTimeDelay=false;this.process=function(){self.isInitialized=true;log("... file = "+name);var scr=document.createElement('script');scr.src=path;if(async===true)scr.async=true;else if(defer===true)scr.defer=true;scr.onerror=function(){log("----- ERR'D: "+self.name);self.isError=true;if(self.isBlock===true){processAll();}};scr.onreadystatechange=scr.onload=function(){var state=scr.readyState;log("----- F'D: "+self.name);if((!state||/loaded|complete/.test(state))){self.isComplete=true;if(self.isBlock===true){processAll();}}};document.getElementsByTagName('head')[0].appendChild(scr);}},fileLoaded:function(name,isComplete){this.name=name;this.path="";this.async=false;this.defer=false;this.isBlock=false;this.blockedBy=[];this.isInitialized=true;this.isError=false;this.isComplete=isComplete;this.proceedIfError=false;this.isTimeDelay=false;this.process=function(){};}};function init(){window.addEventListener("load",function(){setTimeout(function(){timeDelayFired=true;log('TDELAY -----');processAll();},5000);},false);}
function addFile(name,path,isBlock,blockedBy,async,defer,proceedIfError,priority){var item=new obj.file(name,path,isBlock,blockedBy,async,defer,proceedIfError);if(priority===true){hpItems[name]=item}else{lpItems[name]=item}
items[name]=item;checkIfBlocked(item);}
function setallowLoad(settobool){allowLoad=settobool}
function addFunc(name,func,parameters,isBlock,blockedBy,autoInc,deleteWhenComplete,proceedIfError,priority){if(autoInc===true)name=name+"_"+incr++;var item=new obj.func(name,func,parameters,isBlock,blockedBy,deleteWhenComplete,proceedIfError);if(priority===true){hpItems[name]=item}else{lpItems[name]=item}
items[name]=item;checkIfBlocked(item);}
function addTimeDelayFile(name,path){var item=new obj.file(name,path,false,[],false,false,true);item.isTimeDelay=true;log(name+' ... '+' FILE! TDELAY');lpItems[name]=item;items[name]=item;checkIfBlocked(item);}
function addTimeDelayFunc(name,func,parameters){var item=new obj.func(name,func,parameters,false,[],true,true);item.isTimeDelay=true;log(name+' ... '+' FUNCTION! TDELAY');lpItems[name]=item;items[name]=item;checkIfBlocked(item);}
function checkIfBlocked(item){if(isBlocked(item)===true||allowLoad==false)return;item.process();}
function isBlocked(item){if(item.isTimeDelay===true&&timeDelayFired===false){log(item.name+" blocked = TIME DELAY!");return true;}
if(item.blockedBy instanceof Array){for(var i=0;i<item.blockedBy.length;i++){var block=item.blockedBy[i];if(items.hasOwnProperty(block)===false){log(item.name+" blocked = "+block);return true;}else if(item.proceedIfError===true&&items[block].isError===true){return false;}else if(items[block].isComplete===false){log(item.name+" blocked = "+block);return true;}}}
return false;}
function markLoaded(filename){if(!filename||0===filename.length){return;}
if(filename in items){var item=items[filename];if(item.isComplete===true){log(item.name+' '+filename+': error loaded duplicate')}else{item.isComplete=true;item.isInitialized=true;}}else{items[filename]=new obj.fileLoaded(filename,true);}
log("markLoaded dummyfile: "+items[filename].name);}
function logWhatsBlocked(){for(var i in items){if(items.hasOwnProperty(i)===false)continue;var item=items[i];isBlocked(item)}}
function log(msg){var href=window.location.href;var reg=new RegExp('[?&]ezq=([^&#]*)','i');var string=reg.exec(href);var res=string?string[1]:null;if(res==="1")console.debug(msg);}
function processAll(){count++;if(count>200)return;log("let's go");processItems(hpItems);processItems(lpItems);}
function processItems(list){for(var i in list){if(list.hasOwnProperty(i)===false)continue;var item=list[i];if(item.isComplete===true||isBlocked(item)||item.isInitialized===true||item.isError===true){if(item.isError===true){log(item.name+': error')}else if(item.isComplete===true){log(item.name+': complete already')}else if(item.isInitialized===true){log(item.name+': initialized already')}}else{item.process();}}}
init();return{addFile:addFile,addDelayFile:addTimeDelayFile,addFunc:addFunc,addDelayFunc:addTimeDelayFunc,items:items,processAll:processAll,setallowLoad:setallowLoad,markLoaded:markLoaded,logWhatsBlocked:logWhatsBlocked,};})();__ez.evt.add=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n()},__ez.evt.remove=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent?e.detachEvent("on"+t,n):delete e["on"+t]};__ez.script.add=function(e){var t=document.createElement("script");t.src=e,t.async=!0,t.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(t)};__ez.dot={};</script>
<script>var __sellerid="d6802a9874426f08cb591debf3d2bc47";</script>
<link rel='preload' as='script' href='//securepubads.g.doubleclick.net/tag/js/gpt.js'>
<link href="//ad.doubleclick.net" rel="dns-prefetch">
<link href="//pagead2.googlesyndication.com" rel="dns-prefetch">
<link href="//googleads.g.doubleclick.net" rel="dns-prefetch">
<link href="//tpc.googlesyndication.com" rel="dns-prefetch">
<link href="//adservice.google.com" rel="dns-prefetch">
<link href="//secureads.g.doubleclick.net" rel="dns-prefetch">
<link href="//www.googletagservices.com" rel="dns-prefetch">
<link rel='preload' as='script' href='//go.ezodn.com/hb/dall.js?b=amx,appnexus,conversant,criteo,gumgum,ix,luponmedia,medianet,oftmedia,oneVideo,onemobile,onetag,pubmatic,pulsepoint,rhythmone,rubicon,sharethrough,smilewanted,spotx,undertone,unruly&cb=195-4-26'>
<script type="text/javascript">
	var __banger_pmp_deals=function(){var d={17:{"DealId":17,"Floor":160},18:{"DealId":18,"Floor":25},19:{"DealId":19,"Floor":100},20:{"DealId":20,"Floor":300},1428:{"DealId":1428,"Floor":25}};return[{"SlotName":"/1254144/asciitable_com-medrectangle-3","Deals":[d[17],d[18],d[19],d[20],d[1428]]},{"SlotName":"/1254144/asciitable_com-box-1","Deals":[d[17],d[18],d[19],d[20],d[1428]]},{"SlotName":"/1254144/asciitable_com-large-billboard-2","Deals":[d[17],d[18],d[19],d[20],d[1428]]},{"SlotName":"/1254144/asciitable_com-large-leaderboard-1","Deals":[d[17],d[18],d[19],d[20],d[1428]]},{"SlotName":"/1254144/asciitable_com-medrectangle-2","Deals":[d[17],d[18],d[19],d[20],d[1428]]}]}();
</script>
<script type='text/javascript'>_ebcids=[138231308856,138231308940,138231308949,138231387842,138231421744,138231421759,138231421774,138231421783,138231421789,138231421792,138242067587,138242067590,138242067602,138242067605,138242067608,138242067614,138242229406,138242229415,138242229421,138242229430];</script>
<script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer type='text/javascript'>ezobv=41;</script><script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer type='text/javascript'>function ez_isclean(data){if(typeof data==='undefined'){data=document.URL;}
var re=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))(@|%2540|%40)((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;var isClean=!re.test(data);return isClean;}
var ezSlotKVStore={};function ezSetSlotTargeting(divid,key,value){var slot=ezGetSlotById(divid);if(slot){slot.setTargeting(key,value);}else{if(typeof ezSlotKVStore[divid]=='undefined'){ezSlotKVStore[divid]={};}
ezSlotKVStore[divid][key]=value;}}
function ezGetSlotById(id){if(typeof window.ezslots==='undefined'||window.ezslots==0){return;}
for(var i=0;i<window.ezslots.length;i++){var slot=window[ezslots[i]];if(typeof slot==='undefined'){continue;}
var slotId=slot.getSlotElementId();if(typeof slotId!=='undefined'&&slotId==id){return slot;}}}
var ez_queue=new Array();function sort_queue(a,b)
{if(a.priority<b.priority)return-1;else if(a.priority==b.priority)return 0;else return 1;}
function execute_ez_queue()
{ez_queue.sort(sort_queue);for(var i in ez_queue)
{if(typeof ez_queue[i].method!="undefined")
{try{ez_queue[i].method.call(null);}
catch(err){}}}}
window.ez_ad_units=new Array();window.ezslots=new Array();window.ezsrqt={};function ez_write_tag(d){if(ez_isclean()&&d instanceof Array){if(typeof ezstandalone!=='undefined'&&typeof ezstandalone.selectedPlaceholders!=='undefined'&&ezstandalone.selectedPlaceholders[d[3]]===true){return "1+1";}
ez_ad_units[ez_ad_units.length]=d;var dve="";if(typeof d[5]!='undefined'&&d[5]>0){dve='_'+d[5];}
var ezcmd="googletag.cmd.push(function() {var divid = 'div-gpt-ad-"+d[1]+"-"+d[4]+""+dve+"';if(typeof ezlrarn == 'function'){ezlrarn(divid);}googletag.display(divid);var to = 0;if("+d[2]+".getTargeting('ga')[0] == '0'){to = 500;}if((window.ezDisableInitialLoad==true || googletag.pubads().isInitialLoadDisabled()) && window.ezoll != true){setTimeout(function(){googletag.pubads().refresh(["+d[2]+"])},to);}});";return ezcmd;}
return "1+1";}
function in_array(needle,haystack){var length=haystack.length;for(var i=0;i<length;i++){if(haystack[i]==needle)return true;}
return false;}
var ezrpos=new Array();var ez_current_interval;var ez_current_load=0;function __ez_fad_load(n,r){if(__ez_fad_csnt()&&__ez_fad_rdy()&&ezslit_run[n]!=true&&typeof __ez_fad_divs[n]!='undefined'&&__ez_fad_divs[n].length>0){ezslit_run[n]=true;__ez_fad_gpt();if(n>0&&n!=5){__ez_fad_pb();}
googletag.cmd.push(function(){var s=[];for(var i=0;i<__ez_fad_divs[n].length;i++){if(__ez_fad_divsd.indexOf(__ez_fad_divs[n][i])==-1){__ez_fad_divsd.push(__ez_fad_divs[n][i]);s.push(__ez_fad_initslot[__ez_fad_divs[n][i]](r));googletag.display(__ez_fad_divs[n][i]);}};var ws=[];for(i3=0;i3<s.length;i3++){ws.push(window[s[i3]]);}
googletag.pubads().refresh(ws);setTimeout(__ez_fad_floatshow,0);});if(n==0){if(document.readyState==="complete"||document.readyState==="loaded"){googletag.cmd.push(function(){__ez_fad_load(5,null);});setTimeout(googletag.cmd.push(function(){__ez_fad_floatshow()}),500);setTimeout(function(){__ez_fad_load(1,null);__ez_fad_load(5,null);},5500);return;}
document.addEventListener('DOMContentLoaded',function(evt){googletag.cmd.push(function(){__ez_fad_load(5,null);});setTimeout(googletag.cmd.push(function(){__ez_fad_floatshow()}),500);setTimeout(function(){__ez_fad_load(1,null);__ez_fad_load(5,null);},5500);},false);}}}
var __ez_fad_floatshowd=false;function __ez_fad_floatshow(d){if(__ez_fad_floatshowd==false&&typeof __ez_fad_floating!='undefined'){__ez_fad_floatshowd=true;var e=document.getElementById('ezmobfooter');if(e!=null){e.classList.add('ezmobtrans');}else{head=document.head||document.getElementsByTagName('head')[0],style=document.createElement('style');head.appendChild(style);var css="body > #ezmobfooter{bottom:0px !important;visibility:visible;}";style.type='text/css';if(style.styleSheet){style.styleSheet.cssText=css;}else{style.appendChild(document.createTextNode(css));}}
googletag.cmd.push(function(){for(var i=0;i<__ez_fad_floating.length;i++){var s=__ez_fad_initslot[__ez_fad_floating[i]](null);googletag.display(__ez_fad_floating[i]);googletag.pubads().refresh([window[s]]);}});}}
var __ez_fad_initslot={};var __ez_fad_fastd=[];var __ez_fad_fastdiv=[];var __ez_fad_fastslots=[];var __ez_fad_viewslots=[];var __ez_fad_instaslots=[];var ezslit_run=[];var __ez_fad_divs=[[],[],[],[],[],[],[]];__ez_fad_divpos={};var __ez_fad_divsd=[];var __ez_fad_vw=window.screen.width;var __ez_fad_vh=window.screen.height;function __ez_fad_invisible(e){!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}
function __ez_fad_position(id){var did=document.getElementById(id);if(did!=null){var rect=did.getBoundingClientRect();var vs=window.scrollY||document.body.scrollTop||document.documentElement.scrollTop;var vh=vs+__ez_fad_vh;_ez_fad_vw=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;__ez_fad_vh=window.innerHeight||Math.max(document.documentElement.clientHeight,document.body.clientHeight);var height_adjust=800;if(__ez_fad_vw<1200){height_adjust=__ez_fad_vh*1.25;vh+=0;}
if(__ez_fad_floating.indexOf(id)==-1){__ez_fad_divpos[id]=rect.top;if(__ez_fad_invisible(did)&&isFloat!=true){__ez_fad_divs[4].push(id);}else if(rect.top<vh&&(ezslit_run[0]!=true||ezslit_run[5]!=true)){if(ezslit_run[0]!=true){__ez_fad_gpt();__ez_fad_divs[0].push(id);}else{__ez_fad_divs[5].push(id);}}else if(rect.top<(vh+height_adjust)&&ezslit_run[1]!=true){if(ezslit_run[0]!=true){__ez_fad_load(0,0);};__ez_fad_divs[1].push(id);}else if(rect.top<(vh+height_adjust+(__ez_fad_vh))&&ezslit_run[2]!=true){if(ezslit_run[0]!=true){__ez_fad_load(0,0);};__ez_fad_divs[2].push(id);}else{__ez_fad_divs[3].push(id);}}}}
function __ez_fad_fast(s,f,m){if(__ez_fad_fastd.indexOf(s)==-1){__ez_fad_fastd.push(s);googletag.cmd.push(function(){var ebbr2='empty';var br2=0;if(typeof ezoibfh[f]!='undefined'){ebbr2=ezoibfh[f];br2=f;}
if(typeof window['ezslot_'+s]!='undefined'){var br1=parseInt(window['ezslot_'+s].getTargeting('br1')[0]);if(isNaN(br1)||br2<br1){window['ezslot_'+s].setTargeting('br1',br2).setTargeting('eb_br',ebbr2);if(m!=null){window['ezslot_'+s].setTargeting('bvr',m)}}else{}}else{}});}}
function __ez_fad_csnt(){return document.cookie.indexOf('ezCMPCookieConsent')!==-1||typeof __ez_conestreq=='undefined';}
var __ez_fad_haspo=false;if(typeof PerformanceObserver!='undefined'&&typeof PerformanceObserver.supportedEntryTypes!='undefined'){if(PerformanceObserver.supportedEntryTypes.indexOf('largest-contentful-paint')>-1){__ez_fad_haspo=true;}}
function __ez_fad_rdy(){if(document.body!==null&&(__ez_fad_haspo==false&&__ez_fad_doc_ht>__ez_fad_vp_ht||__ez_fad_hascp)||document.readyState==="complete"){return true;}else{__ez_fad_doc_ht=__ez_fad_docht();__ez_fad_vp_ht=__ez_fad_vpht();}
return false;}
function __ez_fad_docht(){if(typeof document.body!='undefined'&&document.body!=null){return Math.max(document.body.scrollHeight,document.body.offsetHeight);}else if(typeof document.documentElement!='undefined'){return Math.max(document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);}else{return 0;}}
function __ez_fad_vpht(){if(typeof window.innerHeight!='undefined'){return window.innerHeight;}else if(typeof document.body!='undefined'&&document.body!=null){return document.body.clientHeight;}else if(typeof document.documentElement!='undefined'){return document.documentElement.clientHeight;}
else{return 0;}}
var __ez_fad_doc_ht=__ez_fad_docht();var __ez_fad_vp_ht=__ez_fad_vpht();var __ez_fad_hascp=false;try{const __ez__fad_po=new PerformanceObserver((entryList)=>{__ez_fad_hascp=true;});__ez__fad_po.observe({type:'largest-contentful-paint',buffered:true});}catch(e){}</script><script type='text/javascript' data-ezscrex="false">var ezorbf = []; </script><script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer type='text/javascript'>window.isEZABL=false;window.ezmadspc=300;window.ezoViewCheck=false;</script><script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer type='text/javascript'>window.ezDisableInitialLoad=false;</script><script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer type='text/javascript'>window.googletag=window.googletag||{};googletag.cmd=googletag.cmd||[];</script><script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer type='text/javascript'>(function(){var gads=document.createElement('script');gads.async=true;gads.type='text/javascript';var useSSL='https:'==document.location.protocol;gads.src=(useSSL?'https:':'http:')+
'//securepubads.g.doubleclick.net/tag/js/gpt.js';var node=document.getElementsByTagName('script')[0];node.parentNode.insertBefore(gads,node);})();</script><script data-ezscrex="false" data-cfasync="false" data-pagespeed-no-defer type='text/javascript'>window.ezogetbrkey = function(s){ var k = 'br1';var k2 = 'eb_br';if(window.ezogtk == ""){k='br1u';k2='eb_bru';}else if(window.ezogtk != "NT"){k='br1t';k2='eb_brt';} s.setTargeting('br1', s.getTargeting(k));s.setTargeting('eb_br', s.getTargeting(k2));};googletag.cmd.push(function() {googletag.pubads().enableSingleRequest();googletag.pubads().addEventListener('slotRenderEnded', function(event) { __ez.queue.addFunc("ezbanger", "ezbanger", event, false, ['banger.js'], true, true, false, true); });googletag.pubads().addEventListener('impressionViewable', function(event) { __ez.queue.addFunc("ezvb", "ezvb", event, false, ['banger.js'], true, true, false, true); });googletag.pubads().addEventListener('slotResponseReceived', function(event) { __ez.queue.addFunc("ezsr", "ezsr", event, false, ['banger.js'], true, true, false, true); });googletag.pubads().addEventListener('slotRequested', function(e) { window.ezsrqt[e.slot.getSlotElementId()] = Date.now();});googletag.pubads().disableInitialLoad();googletag.pubads().enableLazyLoad({fetchMarginPercent: -1, renderMarginPercent: 250, mobileScaling: 2.0});googletag.enableServices();});window.ezoll = false;window.ezoadxnc = '1254144';window.ezoadhb = '900';var ezoibfh = {0:'zero',1000000:'off',100:'a495ce7dbb4cefcd3e0a722048894f41',14:'ad0061a38dd7c6f7bcb692aee88dfda4',450:'6e85b37de1b1ffc2593baa5d6e4b02fc',240:'8de2c8ca79e8623e3cb37120a35ebaa2',200:'86802a923a1f32517e4c5d3b6d550271',0:'60474211daf1dfd4d90000ea01f56c30',28:'674294a1b21a1e89fc99c14c9b17be44',8:'2e8b8c60843e52e5aaa1e3a52287a2bb',350:'9e0a1ce5b2455cb9b48d5df4c6bf4053',160:'3530fcb6bcc13dc3c1712eaef7d92700',140:'af063c244089b52ec5a0423a258f1f8e',34:'a7a863b24978e69c4cdbb5a49be70d5e',550:'26dfa00588543c52511429ade391f561',38:'23b5ca1d9de2587e6a4ecfd33d61b709',180:'9ae587f95e95c876b7b76fd4c72a3838',48:'8fc09e60bfd78aa82afac0405213359a',800:'dc3573d5dc41abdf97751be02f53537f',650:'5bac35e1a3b6adc56da706000a645484',600:'45a351e981f435b4c20fafca8a5d741c',500:'5f2b94bb26a5aa9b1a00e66d30cfd5ec',260:'57914c3716312cb7e954090f0717ea25',30:'54d0fa6d5f6aabe7623cb24faa42a441',750:'6ac330e431a70c7d8ce9fb95aee95c72',60:'c352ba581bd3ffd8cea608cf2d55f519',44:'a928cf2c3ad36f5e9ed2d90f655c1dc9',36:'8c5ffefb122f59a66a8b7672d4452af2',26:'bf9a045b836005b6c23b7b0749249612',850:'5297de5240aa45da173a0792747e0d26',280:'c16fac08e79a971524b1c6834f5caad3',10:'291d27313eb66c50243129b23df8a579',2:'b6c98a8bb15764f1c4ee331dcb724178',70:'527e52c10635ac8136a4c84094ee49a8',700:'8b07bae800b215e481d05a271b3e723b',80:'dfa60cee6e1053fc0c9e607c8047bd28',50:'3ba982fc4238dd4197b1d51b345478dc',120:'58ef7bddb438af5e257c4377f32c243a',40:'ee685f77592ce296910ee91457d66ba3',12:'14e8a85d4c42ff1db8790cbef9e33493',400:'76163170a8636ae5b88417f095893e08',42:'947f1d5169cc7d0f997560e34838fb04',900:'eeb0e32289ff31f9ddef18331038e5e9',220:'43aa1607a0c08c74b14a9039e7b909b4',46:'fe5b0c99ab7ba15f050582be1301303f',300:'90c3c48d0172916d27c102ea4aa9d49c',18:'8de355ef1cf56b7da61277050d9957b1',4:'9c3e4ee8eae7f1433cb2fe69b1326605',20:'7432360301409ae695ba255f16fbcf06',6:'33dd523f8e4dda158f0aa99686dda7f2',16:'e29f69dd468d31a5514dc9b5587ce757',90:'b355e9227b551c119a30a68852723b62',32:'d31e71883d00099e275b6c5878eed023',24:'e66c30deca31b19eda212eeca1258584',22:'1e913e99b80640fd5b86a539e5b97c94'};var ezaxmns={};var ezaucmns={};ezaxmns["div-gpt-ad-asciitable_com-medrectangle-3-0"]=0;ezaucmns["div-gpt-ad-asciitable_com-medrectangle-3-0"]=0;ezaxmns["div-gpt-ad-asciitable_com-large-leaderboard-1-0"]=0;ezaucmns["div-gpt-ad-asciitable_com-large-leaderboard-1-0"]=0;ezaxmns["div-gpt-ad-asciitable_com-box-1-0"]=0;ezaucmns["div-gpt-ad-asciitable_com-box-1-0"]=0;ezaxmns["div-gpt-ad-asciitable_com-medrectangle-2-0"]=0;ezaucmns["div-gpt-ad-asciitable_com-medrectangle-2-0"]=0;ezaxmns["div-gpt-ad-asciitable_com-large-billboard-2-0"]=0;ezaucmns["div-gpt-ad-asciitable_com-large-billboard-2-0"]=0;

		var __ez_fad_floating = ['div-gpt-ad-asciitable_com-medrectangle-2-0'];
		var __ez_fad_gptd = false;var __ez_fad_ezpbinitd = false;function __ez_fad_gpt(){if(__ez_fad_gptd == false){__ez_fad_gptd=true;(function(){var gads=document.createElement('script');gads.async=true;gads.type='text/javascript';var useSSL='https:'==document.location.protocol;gads.src=(useSSL?'https:':'http:')+
'//securepubads.g.doubleclick.net/tag/js/gpt.js';var node=document.getElementsByTagName('script')[0];node.parentNode.insertBefore(gads,node);})();}}function __ez_fad_pb(){if(__ez_fad_ezpbinitd==false && typeof __ez_fad_ezpbinit == 'function'){__ez_fad_ezpbinitd = true;__ez_fad_ezpbinit()}};
		__ez_fad_initslot['div-gpt-ad-asciitable_com-medrectangle-3-0'] = function(bvr){
				googletag.cmd.push(function() {
				var did = 'div-gpt-ad-asciitable_com-medrectangle-3-0';
				ezslot_4 = googletag.defineSlot('/1254144/asciitable_com-medrectangle-3',[970,90],'div-gpt-ad-asciitable_com-medrectangle-3-0').addService(googletag.pubads()).updateTargetingFromMap({'a':'1','iid1':'7513103463946609','eid':'7513103463946609','t':'134','d':'61065','t1':'134','pvc':'0','ap':'1103','sap':'1103','a':'|1|','as':'revenue','plat':'1','bra':'mod12-c','ic':'1','at':'mbf','adr':'399','ezosn':'4','reft':'tf','refs':'30','ga':'2497208','gala':'','rid':'99998','pt':'21','al':'1021','compid':'0','tap':'asciitable_com-medrectangle-3-7513103463946609','eb_br':'26dfa00588543c52511429ade391f561','eba':'1','ebss':[10082,10061,10063,11304,11307],'asau':'2622885333','bv':'23','bvm':'0','bvr':'3','shp':'1','ftsn':'3','br1':'550','br2':'280','ezoic':'1','nmau':'0','mau':'0','stl':[32,0,28,67,45,122,66,20,71,30,0,31],'deal1':[21,22,23,24,25,26,27,28,29,30,760,761,813,815,816,817,818,899,919,774],'ax_ssid':'10082'}).setCollapseEmptyDiv(false);ezrpos[4]="4";ezslots.push("ezslot_4");
				if(bvr != null){
					if(typeof __ez_fad_fastslots['div-gpt-ad-asciitable_com-medrectangle-3-0'] == 'function') {
						__ez_fad_fastslots['div-gpt-ad-asciitable_com-medrectangle-3-0']();
					}
				}
				if(typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
					for (var name in ezSlotKVStore[did]) {
						if (!ezSlotKVStore.hasOwnProperty(name)) {
							ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
						}
					}
					ezSlotKVStore[did] = {};
				}
			});return "ezslot_4";};
			__ez_fad_fastslots['div-gpt-ad-asciitable_com-medrectangle-3-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-medrectangle-3-0'); __ez_fad_fast('4',550,null);};
			__ez_fad_viewslots['div-gpt-ad-asciitable_com-medrectangle-3-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-medrectangle-3-0'); __ez_fad_fast('4',550,null);};
			__ez_fad_instaslots['div-gpt-ad-asciitable_com-medrectangle-3-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-medrectangle-3-0'); __ez_fad_fast('4',0,0);};__ez_fad_initslot['div-gpt-ad-asciitable_com-large-leaderboard-1-0'] = function(bvr){
				googletag.cmd.push(function() {
				var did = 'div-gpt-ad-asciitable_com-large-leaderboard-1-0';
				ezslot_3 = googletag.defineSlot('/1254144/asciitable_com-large-leaderboard-1',[[160,600],[120,600],[120,240],[125,125],['fluid']],'div-gpt-ad-asciitable_com-large-leaderboard-1-0').addService(googletag.pubads()).updateTargetingFromMap({'a':'1','iid1':'1094343329963614','eid':'1094343329963614','t':'134','d':'61065','t1':'134','pvc':'0','ap':'1101','sap':'1101','a':'|3|','as':'revenue','plat':'1','bra':'mod12-c','ic':'1','at':'mbf','adr':'399','ezosn':'3','reft':'tf','refs':'30','ga':'2497208','gala':'','rid':'99998','pt':'0','al':'1035','compid':'0','tap':'asciitable_com-large-leaderboard-1-1094343329963614','eb_br':'5297de5240aa45da173a0792747e0d26','eba':'1','ebss':[10082,10061,10063,11304,11307],'asau':'2622885333','bv':'0','bvm':'3','bvr':'2','shp':'2','ftsn':'3','br1':'850','br2':'400','ezoic':'1','nmau':'0','mau':'0','stl':[34,0,28,67,45,122,66,20,71,30,0,3],'deal1':[21,22,23,24,25,26,919,774],'ax_ssid':'10082'}).setCollapseEmptyDiv(false);ezrpos[3]="3";ezslots.push("ezslot_3");
				if(bvr != null){
					if(typeof __ez_fad_fastslots['div-gpt-ad-asciitable_com-large-leaderboard-1-0'] == 'function') {
						__ez_fad_fastslots['div-gpt-ad-asciitable_com-large-leaderboard-1-0']();
					}
				}
				if(typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
					for (var name in ezSlotKVStore[did]) {
						if (!ezSlotKVStore.hasOwnProperty(name)) {
							ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
						}
					}
					ezSlotKVStore[did] = {};
				}
			});return "ezslot_3";};
			__ez_fad_fastslots['div-gpt-ad-asciitable_com-large-leaderboard-1-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-large-leaderboard-1-0'); __ez_fad_fast('3',850,null);};
			__ez_fad_viewslots['div-gpt-ad-asciitable_com-large-leaderboard-1-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-large-leaderboard-1-0'); __ez_fad_fast('3',850,null);};
			__ez_fad_instaslots['div-gpt-ad-asciitable_com-large-leaderboard-1-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-large-leaderboard-1-0'); __ez_fad_fast('3',0,0);};__ez_fad_initslot['div-gpt-ad-asciitable_com-box-1-0'] = function(bvr){
				googletag.cmd.push(function() {
				var did = 'div-gpt-ad-asciitable_com-box-1-0';
				ezslot_1 = googletag.defineSlot('/1254144/asciitable_com-box-1',[[160,600],[120,600],[120,240],[125,125],['fluid']],'div-gpt-ad-asciitable_com-box-1-0').addService(googletag.pubads()).updateTargetingFromMap({'a':'1','iid1':'7000496043989641','eid':'7000496043989641','t':'134','d':'61065','t1':'134','pvc':'0','ap':'1100','sap':'1100','a':'|3|','as':'revenue','plat':'1','bra':'mod12-c','ic':'1','at':'mbf','adr':'399','ezosn':'1','reft':'tf','refs':'30','ga':'2497208','gala':'','rid':'99998','pt':'0','al':'1000','compid':'0','tap':'asciitable_com-box-1-7000496043989641','eb_br':'8b07bae800b215e481d05a271b3e723b','eba':'1','ebss':[10082,10061,10063,11304,11307],'asau':'2622885333','bv':'23','bvm':'0','bvr':'3','shp':'2','ftsn':'3','acptad':'1','br1':'700','br2':'350','ezoic':'1','nmau':'0','mau':'0','stl':[34,0,28,67,45,122,66,20,71,30,0,0],'deal1':[21,22,23,24,25,26,27,28,29,30,760,761,813,814,815,816,817,818,819,899,917,918,919,774],'ax_ssid':'10082'}).setCollapseEmptyDiv(false);ezrpos[1]="1";ezslots.push("ezslot_1");
				if(bvr != null){
					if(typeof __ez_fad_fastslots['div-gpt-ad-asciitable_com-box-1-0'] == 'function') {
						__ez_fad_fastslots['div-gpt-ad-asciitable_com-box-1-0']();
					}
				}
				if(typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
					for (var name in ezSlotKVStore[did]) {
						if (!ezSlotKVStore.hasOwnProperty(name)) {
							ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
						}
					}
					ezSlotKVStore[did] = {};
				}
			});return "ezslot_1";};
			__ez_fad_fastslots['div-gpt-ad-asciitable_com-box-1-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-box-1-0'); __ez_fad_fast('1',700,null);};
			__ez_fad_viewslots['div-gpt-ad-asciitable_com-box-1-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-box-1-0'); __ez_fad_fast('1',700,null);};
			__ez_fad_instaslots['div-gpt-ad-asciitable_com-box-1-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-box-1-0'); __ez_fad_fast('1',0,0);};__ez_fad_initslot['div-gpt-ad-asciitable_com-medrectangle-2-0'] = function(bvr){
				googletag.cmd.push(function() {
				var did = 'div-gpt-ad-asciitable_com-medrectangle-2-0';
				ezslot_0 = googletag.defineSlot('/1254144/asciitable_com-medrectangle-2',[728,90],'div-gpt-ad-asciitable_com-medrectangle-2-0').addService(googletag.pubads()).updateTargetingFromMap({'a':'1','iid1':'6951015593986604','eid':'6951015593986604','t':'134','d':'61065','t1':'134','pvc':'0','ap':'1105','sap':'1105','a':'|3|','as':'revenue','plat':'1','bra':'mod12-c','ic':'1','at':'mbf','adr':'399','ezosn':'0','reft':'tf','refs':'30','ga':'2497208','gala':'','rid':'99998','pt':'5','al':'1005','compid':'0','tap':'asciitable_com-medrectangle-2-6951015593986604','eb_br':'eeb0e32289ff31f9ddef18331038e5e9','eba':'1','ebss':[10082,10061,10063,11304,11307],'asau':'2622885333','bv':'13','bvm':'0','bvr':'3','shp':'1','ftsn':'3','br1':'900','br2':'450','ezoic':'1','nmau':'0','mau':'0','stl':[83,25,120,67,51,0,66,20,71,30,0,31],'deal1':[21,22,23,24,25,26,27,28,29,30,760,761,813,814,815,816,817,818,819,899,917,918,919,774],'ax_ssid':'10082'}).setCollapseEmptyDiv(false);ezrpos[0]="0";ezslots.push("ezslot_0");
				if(bvr != null){
					if(typeof __ez_fad_fastslots['div-gpt-ad-asciitable_com-medrectangle-2-0'] == 'function') {
						__ez_fad_fastslots['div-gpt-ad-asciitable_com-medrectangle-2-0']();
					}
				}
				if(typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
					for (var name in ezSlotKVStore[did]) {
						if (!ezSlotKVStore.hasOwnProperty(name)) {
							ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
						}
					}
					ezSlotKVStore[did] = {};
				}
			});return "ezslot_0";};
			__ez_fad_fastslots['div-gpt-ad-asciitable_com-medrectangle-2-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-medrectangle-2-0'); __ez_fad_fast('0',900,null);};
			__ez_fad_viewslots['div-gpt-ad-asciitable_com-medrectangle-2-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-medrectangle-2-0'); __ez_fad_fast('0',900,null);};
			__ez_fad_instaslots['div-gpt-ad-asciitable_com-medrectangle-2-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-medrectangle-2-0'); __ez_fad_fast('0',0,0);};__ez_fad_initslot['div-gpt-ad-asciitable_com-large-billboard-2-0'] = function(bvr){
				googletag.cmd.push(function() {
				var did = 'div-gpt-ad-asciitable_com-large-billboard-2-0';
				ezslot_2 = googletag.defineSlot('/1254144/asciitable_com-large-billboard-2',[[160,600],[120,600],[120,240],[125,125],['fluid']],'div-gpt-ad-asciitable_com-large-billboard-2-0').addService(googletag.pubads()).updateTargetingFromMap({'a':'1','iid1':'246860501950544','eid':'246860501950544','t':'134','d':'61065','t1':'134','pvc':'0','ap':'1102','sap':'1102','a':'|3|','as':'revenue','plat':'1','bra':'mod12-c','ic':'1','at':'mbf','adr':'399','ezosn':'2','reft':'n','refs':'30','ga':'2497208','gala':'','rid':'99998','pt':'0','al':'1034','compid':'0','tap':'asciitable_com-large-billboard-2-246860501950544','eb_br':'6ac330e431a70c7d8ce9fb95aee95c72','eba':'1','ebss':[10082,10061,10063,11304,11307],'asau':'2622885333','bv':'2','bvm':'0','bvr':'6','shp':'2','ftsn':'3','br1':'750','br2':'400','ezoic':'1','nmau':'0','mau':'0','stl':[34,0,28,67,45,122,66,20,71,30,0,39],'deal1':[21,22,23,24,25,26,27,28,29,760,761,815,816,817,899,919,774],'ax_ssid':'10082'}).setCollapseEmptyDiv(false);ezrpos[2]="2";ezslots.push("ezslot_2");
				if(bvr != null){
					if(typeof __ez_fad_fastslots['div-gpt-ad-asciitable_com-large-billboard-2-0'] == 'function') {
						__ez_fad_fastslots['div-gpt-ad-asciitable_com-large-billboard-2-0']();
					}
				}
				if(typeof ezSlotKVStore != 'undefined' && typeof ezSlotKVStore[did] != 'undefined') {
					for (var name in ezSlotKVStore[did]) {
						if (!ezSlotKVStore.hasOwnProperty(name)) {
							ezSetSlotTargeting(did, name, ezSlotKVStore[did][name]);
						}
					}
					ezSlotKVStore[did] = {};
				}
			});return "ezslot_2";};
			__ez_fad_fastslots['div-gpt-ad-asciitable_com-large-billboard-2-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-large-billboard-2-0'); __ez_fad_fast('2',750,null);};
			__ez_fad_viewslots['div-gpt-ad-asciitable_com-large-billboard-2-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-large-billboard-2-0'); __ez_fad_fast('2',750,null);};
			__ez_fad_instaslots['div-gpt-ad-asciitable_com-large-billboard-2-0'] = function(){__ez_fad_fastdiv.push('div-gpt-ad-asciitable_com-large-billboard-2-0'); __ez_fad_fast('2',0,0);};</script>
<script type="text/javascript">(function(){function storageAvailable(type){var storage;try{storage=window[type];var x='__storage_test__';storage.setItem(x,x);storage.removeItem(x);return true;}
catch(e){return e instanceof DOMException&&(e.code===22||e.code===1014||e.name==='QuotaExceededError'||e.name==='NS_ERROR_DOM_QUOTA_REACHED')&&(storage&&storage.length!==0);}}
function remove_ama_config(){if(storageAvailable('localStorage')){localStorage.removeItem("google_ama_config");}}
remove_ama_config()})()</script>
<script type="text/javascript">var ezoicTestActive = true</script>
<script data-ezscrex="false" type="text/javascript" data-cfasync="false">var _ezaq = {"ad_cache_level":2,"ad_count_adjustment":1,"ad_lazyload_version":2,"ad_load_version":1,"ad_location_ids":"5,0,34,35,21","ad_transform_level":0,"adx_ad_count":5,"bidder_method":1,"bidder_version":5,"city":"Central","country":"HK","days_since_last_visit":-1,"display_ad_count":4,"domain_id":61065,"domain_test_group":20210306,"ds_adsize_opt_id":-1,"engaged_time_visit":0,"ezcache_level":2,"ezcache_skip_code":0,"form_factor_id":1,"framework_id":1,"has_bad_image":0,"has_bad_words":0,"iab_category":"","iab_category_0":"483","iab_category_1":"538","is_from_recommended_pages":false,"is_return_visitor":false,"is_sitespeed":0,"last_page_load":"","last_pageview_id":"","lt_cache_level":0,"max_ads":3,"metro_code":0,"optimization_version":1,"page_ad_positions":"1100,1101,1102,1103,1105","page_view_count":0,"page_view_id":"c4bfe9f2-e51f-45ef-60d1-5fe52e11ddee","position_selection_id":39,"postal_code":"","pv_event_count":0,"response_size_orig":9261,"response_time_orig":3,"serverid":"54.255.148.152:18288","state":"HCW","sub_page_ad_positions":"1100,1101,1102,1103,1105","t_epoch":1627963824,"template_id":134,"time_on_site_visit":0,"url":"https://www.asciitable.com/","user_id":0,"weather_precipitation":0,"weather_summary":"","weather_temperature":0,"word_count":221,"worst_bad_word_level":0};var _ezim_d = {"asciitable_com-box-1":{"adsense_stat_source_id":5,"adx_ad_count":5,"adx_stat_source_id":35,"full_id":"asciitable_com-box-1/2021-08-02/7000496043989641","height":"600","position_id":1100,"sub_position_id":1100,"width":"160"},"asciitable_com-large-billboard-2":{"adsense_stat_source_id":5,"adx_ad_count":5,"adx_stat_source_id":35,"full_id":"asciitable_com-large-billboard-2/2021-08-02/246860501950544","height":"600","position_id":1102,"sub_position_id":1102,"width":"160"},"asciitable_com-large-leaderboard-1":{"adsense_stat_source_id":5,"adx_ad_count":5,"adx_stat_source_id":35,"full_id":"asciitable_com-large-leaderboard-1/2021-08-02/1094343329963614","height":"600","position_id":1101,"sub_position_id":1101,"width":"160"},"asciitable_com-medrectangle-2":{"adsense_stat_source_id":5,"adx_ad_count":5,"adx_stat_source_id":35,"full_id":"asciitable_com-medrectangle-2/2021-08-02/6951015593986604","height":"90","position_id":1105,"sub_position_id":1105,"width":"728"},"asciitable_com-medrectangle-3":{"adsense_stat_source_id":5,"adx_ad_count":5,"adx_stat_source_id":35,"full_id":"asciitable_com-medrectangle-3/2021-08-02/7513103463946609","height":"90","position_id":1103,"sub_position_id":1103,"width":"970"}};var _ezat = {"domain_id":61065,"form_factor_id":1,"framework_id":1,"pageview_date":"2021-08-02","pageview_id":"c4bfe9f2-e51f-45ef-60d1-5fe52e11ddee","template_id":134,"url":"https://www.asciitable.com/","visit_uuid":"660dfcf1-2b23-4dce-6e19-1cc33c5d93d4"};</script><script data-ezscrex="false" data-pagespeed-no-defer data-cfasync="false" type="text/javascript">__ez.queue.addFile('banger.js', '/porpoiseant/banger.js?cb=195-4&bv=41&v=51&PageSpeed=off', true, [], true, false, false, true);</script>
<script data-ezscrex='false' data-cfasync='false' data-pagespeed-no-defer>__ez.vep=(function(){var pixels=[],pxURL="/detroitchicago/grapefruit.gif";function AddPixel(vID,pixelData){if(__ez.dot.isDefined(vID)&&__ez.dot.isValid(pixelData)){pixels.push({type:'video',video_impression_id:vID,domain_id:__ez.dot.getDID(),t_epoch:__ez.dot.getEpoch(0),data:__ez.dot.dataToStr(pixelData)});}}
function Fire(){if(typeof document.visibilityState!=='undefined'&&document.visibilityState==="prerender"){return;}
if(__ez.dot.isDefined(pixels)&&pixels.length>0){while(pixels.length>0){var j=5;if(j>pixels.length){j=pixels.length;}
var pushPixels=pixels.splice(0,j);var pixelURL=__ez.dot.getURL(pxURL)+"?orig="+(__ez.template.isOrig===true?1:0)+"&v="+btoa(JSON.stringify(pushPixels));__ez.dot.Fire(pixelURL);}}
pixels=[];}
return{Add:AddPixel,Fire:Fire};})();</script><script data-ezscrex='false' data-cfasync='false' data-pagespeed-no-defer>__ez.pel=(function(){var pixels=[],pxURL="/porpoiseant/army.gif";function AddAndFirePixel(adSlot,pixelData){AddPixel(adSlot,pixelData,0,0,0,0,0);Fire();}
function AddAndFireOrigPixel(adSlot,pixelData){AddPixel(adSlot,pixelData,0,0,0,0,0,true);Fire();}
function GetCurrentPixels(){return pixels;}
function AddPixel(adSlot,pixelData,revenue,est_revenue,bid_floor_filled,bid_floor_prev,stat_source_id,isOrig){if(!__ez.dot.isDefined(adSlot)||__ez.dot.isAnyDefined(adSlot.getSlotElementId,adSlot.ElementId)==false){return;}
var ad_position_id=parseInt(__ez.dot.getTargeting(adSlot,'ap'));var impId=__ez.dot.getSlotIID(adSlot),adUnit=__ez.dot.getAdUnit(adSlot,isOrig);var compId=parseInt(__ez.dot.getTargeting(adSlot,"compid"));var lineItemId=0;var creativeId=0;var ezimData=getEzimData(adSlot);if(typeof ezimData=='object'){if(ezimData.creative_id!==undefined){creativeId=ezimData.creative_id;}
if(ezimData.line_item_id!==undefined){lineItemId=ezimData.line_item_id;}}
if(__ez.dot.isDefined(impId,adUnit)&&__ez.dot.isValid(pixelData)){pixels.push({type:"impression",impression_id:impId,domain_id:__ez.dot.getDID(),unit:adUnit,t_epoch:__ez.dot.getEpoch(0),revenue:revenue,est_revenue:est_revenue,ad_position:ad_position_id,ad_size:"",bid_floor_filled:bid_floor_filled,bid_floor_prev:bid_floor_prev,stat_source_id:stat_source_id,country_code:__ez.dot.getCC(),pageview_id:__ez.dot.getPageviewId(),comp_id:compId,line_item_id:lineItemId,creative_id:creativeId,data:__ez.dot.dataToStr(pixelData),is_orig:isOrig||__ez.template.isOrig,});}}
function AddPixelById(impFullId,pixelData,isOrig){var vals=impFullId.split('/');if(__ez.dot.isDefined(impFullId)&&vals.length===3&&__ez.dot.isValid(pixelData)){var adUnit=vals[0],impId=vals[2];pixels.push({type:"impression",impression_id:impId,domain_id:__ez.dot.getDID(),unit:adUnit,t_epoch:__ez.dot.getEpoch(0),pageview_id:__ez.dot.getPageviewId(),data:__ez.dot.dataToStr(pixelData),is_orig:isOrig||__ez.template.isOrig});}}
function Fire(){if(typeof document.visibilityState!=='undefined'&&document.visibilityState==="prerender")return;if(__ez.dot.isDefined(pixels)&&pixels.length>0){var allPixels=[pixels.filter(function(pixel){return pixel.is_orig}),pixels.filter(function(pixel){return!pixel.is_orig})];allPixels.forEach(function(pixels){while(pixels.length>0){var isOrig=pixels[0].is_orig||false;var j=5;if(j>pixels.length){j=pixels.length;}
var pushPixels=pixels.splice(0,j);var pixelURL=__ez.dot.getURL(pxURL)+"?orig="+(isOrig===true?1:0)+"&sts="+btoa(JSON.stringify(pushPixels));if(typeof window.isAmp!=='undefined'&&isAmp&&typeof window._ezaq!=='undefined'&&_ezaq.hasOwnProperty("domain_id")){pixelURL+="&visit_uuid="+_ezaq['visit_uuid'];}
__ez.dot.Fire(pixelURL);}})}
pixels=[];}
function getEzimData(adSlot){if(typeof _ezim_d=="undefined"){return false}
var adUnitName=__ez.dot.getAdUnitPath(adSlot).split('/').pop();if(typeof _ezim_d==='object'&&_ezim_d.hasOwnProperty(adUnitName)){return _ezim_d[adUnitName];}
for(var ezimKey in _ezim_d){if(ezimKey.split('/').pop()===adUnitName){return _ezim_d[ezimKey];}}
return false;}
return{Add:AddPixel,AddAndFire:AddAndFirePixel,AddAndFireOrig:AddAndFireOrigPixel,AddById:AddPixelById,Fire:Fire,GetPixels:GetCurrentPixels,};})();</script>
    <title>Ascii Table - ASCII character codes and html, octal, hex and decimal chart conversion</title>
  <meta name="description" content="Ascii character table - What is ascii - Complete tables including hex, octal, html, decimal conversions"/>
  <meta name="keywords" content="ascii, ascii table, ascii code, ascii characters, conversion, conversions, unicode, unicode tables, ascii help, help with ascii, asci, aski, asky, acii, askii, askey, cod, cde, tabe, tble, char, translation, translator, convert, character, text, textual, american, standard, information, interchange, extended, html"/>
<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/manifest.json"/>
<meta name="msapplication-TileColor" content="#ffffff"/>
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
<meta name="theme-color" content="#ffffff"/>
<script data-ad-client="ca-pub-6744919314769019" async="" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>  <link rel="stylesheet" type="text/css" href="/common/style.css"/>
  <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
  <meta http-equiv="Pragma" content="no-cache"/>
  <meta http-equiv="Expires" content="-1"/>
  <link rel="alternate" media="only screen and (max-width: 640px)" href="https://www.asciitable.com/mobile/"/>
<!-- Ezoic Ad Testing Code-->

<!-- Ezoic Ad Testing Code-->
<style>.ezoic-ad.box-1100 { display:inline-block;float:none !important;line-height:0px;margin-bottom:2px !important;margin-left:0px !important;margin-right:0px !important;margin-top:2px !important;min-height:600px;min-width:120px;padding:0; }
.ezoic-ad.large-leaderboard-1101 { display:inline-block;float:none !important;line-height:0px;margin-bottom:2px !important;margin-left:0px !important;margin-right:0px !important;margin-top:2px !important;min-height:600px;min-width:120px;padding:0; }
.ezoic-ad.medrectangle-3103 { display:block !important;float:none !important;line-height:0px;margin-bottom:2px !important;margin-left:0px !important;margin-right:0px !important;margin-top:2px !important;min-height:90px;min-width:970px;padding:0;text-align:center !important; }
.ezoic-ad.large-billboard-2102 { display:inline-block;float:none !important;line-height:0px;margin-bottom:2px !important;margin-left:0px !important;margin-right:0px !important;margin-top:2px !important;min-height:600px;min-width:120px;padding:0; }
.ezoic-ad.medrectangle-2105 { display:inline-block;float:none;line-height:0px;min-height:90px;min-width:728px;padding:0; }
.ezoic-ad{display:inline-block;border:0px;}.ezoic-ad>div>iframe{margin:0px!important;padding:0px!important;}
.adtester-container-110,.adtester-container-111,.adtester-container-112,.adtester-container-106,.adtester-container-107,.adtester-container-104,.adtester-container-109,.adtester-container-108{display:none!important}
.ezmob-footer{position:fixed;left:0;bottom:0;width:100%;background:#fff;z-index:100000;line-height:0}.ezmob-footer-desktop{background-color:rgba(255,255,255,.8);border-top:1px solid #d3d3d3;padding-top:5px}.ezmob-footer-close{cursor:pointer;color:#b2b2b2;border:1px solid #b2b2b2;border-radius:20px;background:#fff;line-height:20px;display:inline-block;font-size:20px;font-family:arial,sans-serif;padding:0 5px;position:absolute;top:5px;right:5px;height:24px;width:21px;text-align:center}body {
				padding-bottom: 100px !important;
				height: auto;
			}
			.ezmob-footer-close-mobile {
			display:none;
		}
		</style><link rel='canonical' href='https://www.asciitable.com/' />
<script type="text/javascript">var ezouid = "1";</script><base href="https://www.asciitable.com/"><script type='text/javascript'>
var ezoTemplate = 'pub_site';
if(typeof ezouid == 'undefined')
{
    var ezouid = 'none';
}
var ezoFormfactor = '1';
var ezo_elements_to_check = Array();
</script><!-- START EZHEAD -->
<script data-ezscrex="false" type='text/javascript'>
var soc_app_id = '0';
var did = 61065;
var ezdomain = 'asciitable.com';
var ezoicSearchable = 1;
</script>
<!--{jquery}-->
<!-- END EZHEAD -->
<script data-ezscrex='false' data-cfasync='false' type='text/javascript' style='display:none' defer>
__ez.queue.addFile('__ezf_ezosuigeneris', '//g.ezoic.net/ezosuigeneris.js', true, [], true, false, false, false);
var __ez_ezosuigenerisEvt = function() { if(typeof(ezosuigeneris) != 'undefined'){__ez.bit.AddAndFire(_ezaq['page_view_id'], [(new __ezDotData('universal_user_id', ezosuigeneris))]); }};
__ez.queue.addFunc('__ez_ezosuigenerisEvt', '__ez_ezosuigenerisEvt', null, false, ['__ezf_ezosuigeneris','/detroitchicago/minneapolis.js','/detroitchicago/memphis.js'], false, false, false, false);</script><script data-ezscrex='false' data-cfasync='false' type='text/javascript' style='display:none' defer>__ez.queue.addFile('__ezf_ezosuigenerisc', '//g.ezoic.net/ezosuigenerisc.js?nogen=1', true, ["/detroitchicago/boise.js"], true, false, false, false);</script>
<script data-ezscrex='false' data-pagespeed-no-defer data-cfasync='false'>
function create_ezolpl(pvID, rv) {
    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    __ez.ck.setByCat("ezux_lpl_61065=" + new Date().getTime() + "|" + pvID + "|" + rv + "; " + expires, 3);
}
function attach_ezolpl(pvID, rv) {
    if (document.readyState === "complete") {
        create_ezolpl(pvID, rv);
    }
    if(window.attachEvent) {
        window.attachEvent("onload", create_ezolpl, pvID, rv);
    } else {
        if(window.onload) {
            var curronload = window.onload;
            var newonload = function(evt) {
                curronload(evt);
                create_ezolpl(pvID, rv);
            };
            window.onload = newonload;
        } else {
            window.onload = create_ezolpl.bind(null, pvID, rv);
        }
    }
}

__ez.queue.addFunc("attach_ezolpl", "attach_ezolpl", ["c4bfe9f2-e51f-45ef-60d1-5fe52e11ddee", "false"], false, ['/detroitchicago/boise.js'], true, false, false, false);
</script>
<script type="text/javascript">var _audins_dom="asciitable_com",_audins_did=61065;__ez.queue.addFile('/detroitchicago/cmbv2.js', '/detroitchicago/cmbv2.js?gcb=195-4&cb=04-1y02-4y06-12y07-1y0b-5y0d-10y13-3y17-3y20-3y33-15y52-1y56-21&cmbcb=20&sj=x04x02x06x07x0bx0dx13x17x20x33x52x56', true, [], true, false, true, false);</script>
<script type="text/javascript" defer>__ez.queue.addFile('/detroitchicago/cmbdv2.js', '/detroitchicago/cmbdv2.js?gcb=195-4&cb=03-4y0c-5y18-3y34-15y57-21&cmbcb=20&sj=x03x0cx18x34x57', true, ['/detroitchicago/cmbv2.js'], true, false, true, false);</script></head>

<body>

<table class="Global" cellpadding="0" cellspacing="2" border="1">
  <tbody><tr>
    <td height="140" colspan="3"> 
      <table class="Header" cellspacing="0" border="0">
        <tbody><tr>
          <td style="background: url(&#39;/common/header.gif&#39;) no-repeat;" width="100%" ;="" align="right" ;="">
          <div style="display: table; margin-left: 20px; margin-top: 5px;">
          </div>
          </td>
        </tr>
      </tbody></table>
      <div style="height: 1px; background: #284151;"><img src="/common/space1x1.gif" width="1" height="1" alt="spacer"/></div>
        <table class="NavBar" cellspacing="0" border="0">
  <tbody><tr>
    <td>
      <table class="NavBarMenu" cellspacing="0" border="0"><tbody><tr>
      <td><a href="https://www.asciitable.com/">ASCII</a> Â Â  | Â Â  </td>
      <td><a href="http://www.lookuptables.com/ebcdic_scancodes.php">Scan Codes / EBCDIC</a> Â Â  | Â Â  </td>
      <td><a href="http://www.lookuptables.com/">HTML Codes</a> Â Â  | Â Â  </td>
      <td><a href="http://www.lookuptables.com/phoneticalphabet.php">Phonetic Alphabet</a> Â Â  | Â Â  </td>
      <td><a href="http://www.unicodetables.com/">Unicode v4</a> Â Â  | Â Â  </td>
      <td><a href="http://www.DialingCode.com/">Dialing Codes</a> Â Â  | Â Â  </td>
      <td><a href="http://www.Fezy.com/">Voucher Codes</a></td>
      </tr>
      </tbody></table>
    </td>
  </tr>
  </tbody></table>
    </td>
  </tr>

  <tr>
    <td class="Left" align="center">
      <table cellspacing="0" class="BoxStyle" style="margin-bottom: 15px;">
        <tbody><tr>
          <td style="padding: 10px;">
            <p>
<!-- Ezoic - left top - sidebar -->
</p><span id="ezoic-pub-ad-placeholder-100"></span><span class="ezoic-ad box-1 box-1100 adtester-container adtester-container-100" data-ez-name="asciitable_com-box-1"><span id="div-gpt-ad-asciitable_com-box-1-0" ezaw="160" ezah="600" style="position:relative;z-index:0;display:inline-block;padding:0;width:100%;max-width:1200px;margin-left:auto !important;margin-right:auto !important;min-height:600px;min-width:120px;" class="ezoic-ad"><script data-ezscrex="false" data-cfasync="false" type="text/javascript" style="display:none;">if(typeof __ez_fad_position != 'undefined'){__ez_fad_position('div-gpt-ad-asciitable_com-box-1-0')};</script></span><span style="width:160px;display:block;height:14px;margin:auto" class="reportline"><span style="text-align:center;font-size: smaller;float:left;line-height:normal;"><a href="https://www.ezoic.com/what-is-ezoic/" target="_blank" rel="noopener noreferrer nofollow" style="cursor:pointer"><img src="https://go.ezoic.net/utilcave_com/img/ezoic.png" alt="Ezoic" style="height:12px !important; padding:2px !important; border:0px !important; cursor:pointer !important; width: 58px !important; margin:0 !important; box-sizing: content-box !important;"/></a></span><span class="ez-report-ad-button" name="?pageview_id=c4bfe9f2-e51f-45ef-60d1-5fe52e11ddee&amp;ad_position_id=100&amp;impression_group_id=asciitable_com-box-1/2021-08-02/7000496043989641&amp;ad_size=160x600&amp;domain_id=61065&amp;url=https://www.asciitable.com/" style="cursor: pointer!important; font-size:12px !important;color: #a5a5a5 ;float:right;text-decoration:none !important;font-family:arial !important;line-height:normal;">report this ad</span></span></span>
<!-- End Ezoic - left top - sidebar -->
<p></p>

<p>
<!-- Ezoic - left bottom - sidebar_bottom -->
</p><span id="ezoic-pub-ad-placeholder-101"></span><span class="ezoic-ad large-leaderboard-1 large-leaderboard-1101 adtester-container adtester-container-101" data-ez-name="asciitable_com-large-leaderboard-1"><span id="div-gpt-ad-asciitable_com-large-leaderboard-1-0" ezaw="160" ezah="600" style="position:relative;z-index:0;display:inline-block;padding:0;width:100%;max-width:1200px;margin-left:auto !important;margin-right:auto !important;min-height:600px;min-width:120px;" class="ezoic-ad"><script data-ezscrex="false" data-cfasync="false" type="text/javascript" style="display:none;">if(typeof __ez_fad_position != 'undefined'){__ez_fad_position('div-gpt-ad-asciitable_com-large-leaderboard-1-0')};</script></span><span style="width:160px;display:block;height:14px;margin:auto" class="reportline"><span style="text-align:center;font-size: smaller;float:left;line-height:normal;"><a href="https://www.ezoic.com/what-is-ezoic/" target="_blank" rel="noopener noreferrer nofollow" style="cursor:pointer"><img src="https://go.ezoic.net/utilcave_com/img/ezoic.png" alt="Ezoic" style="height:12px !important; padding:2px !important; border:0px !important; cursor:pointer !important; width: 58px !important; margin:0 !important; box-sizing: content-box !important;"/></a></span><span class="ez-report-ad-button" name="?pageview_id=c4bfe9f2-e51f-45ef-60d1-5fe52e11ddee&amp;ad_position_id=101&amp;impression_group_id=asciitable_com-large-leaderboard-1/2021-08-02/1094343329963614&amp;ad_size=160x600&amp;domain_id=61065&amp;url=https://www.asciitable.com/" style="cursor: pointer!important; font-size:12px !important;color: #a5a5a5 ;float:right;text-decoration:none !important;font-family:arial !important;line-height:normal;">report this ad</span></span></span>
<!-- End Ezoic - left bottom - sidebar_bottom -->
<p></p>
          </td>
        </tr>
      </tbody></table>
    </td>

    <td class="Content Padded">
        <h1 class="HeadingStyle">ASCII Table and Description</h1>
  <p><span id="ezoic-pub-ad-placeholder-106" class="ezoic-adpicker-ad"></span>
  ASCII stands for American Standard Code for Information Interchange.
  Computers can only understand numbers, so an ASCII code is the numerical
  representation of a character such as &#39;a&#39; or &#39;@&#39; or an action of some sort.  
  ASCII was developed a long time ago and now the non-printing characters are
  rarely used for their original purpose. Below is the ASCII character table
  and this includes descriptions of the first 32 non-printing characters.
  ASCII was actually designed for use with teletypes and so the descriptions
  are somewhat obscure.  If someone says they want your CV however in ASCII format, all
  this means is they want &#39;plain&#39; text with no formatting such as tabs, bold or
  underscoring - the raw format that any computer can understand.  This is usually
  so they can easily import the file into their own applications without issues.  
  Notepad.exe creates ASCII text, or in MS Word you can save a file as &#39;text only&#39;
  </p>

  <p>
  </p>

  <p><img src="/index/asciifull.gif" width="715" height="488" border="0" alt="Ascii Table"/></p>

  <p>
<!-- Ezoic - middle - under_first_paragraph -->
</p><span id="ezoic-pub-ad-placeholder-103"></span><span class="ezoic-ad medrectangle-3 medrectangle-3103 adtester-container adtester-container-103" data-ez-name="asciitable_com-medrectangle-3"><span id="div-gpt-ad-asciitable_com-medrectangle-3-0" ezaw="970" ezah="90" style="position:relative;z-index:0;display:inline-block;padding:0;min-height:90px;min-width:970px;" class="ezoic-ad"><script data-ezscrex="false" data-cfasync="false" type="text/javascript" style="display:none;">if(typeof __ez_fad_position != 'undefined'){__ez_fad_position('div-gpt-ad-asciitable_com-medrectangle-3-0')};</script></span></span>
<!-- End Ezoic - middle - under_first_paragraph -->
  <p></p>

  <h1 class="HeadingStyle">Extended ASCII Codes</h1><h1>
  <p><img src="/index/extend.gif" width="573" height="335" border="0" alt="EBCDIC and IBM Scan Codes"/><span id="ezoic-pub-ad-placeholder-108" class="ezoic-adpicker-ad"></span></p>
    </h1></td>

    <td class="Right Padded">
      <table class="RightPanelBox" cellspacing="0" border="0">
        <tbody><tr>
          <td class="Padded">
            <br/>
<!-- Ezoic - top right - sidebar -->
<span id="ezoic-pub-ad-placeholder-102"></span><span class="ezoic-ad large-billboard-2 large-billboard-2102 adtester-container adtester-container-102" data-ez-name="asciitable_com-large-billboard-2"><span id="div-gpt-ad-asciitable_com-large-billboard-2-0" ezaw="160" ezah="600" style="position:relative;z-index:0;display:inline-block;padding:0;width:100%;max-width:1200px;margin-left:auto !important;margin-right:auto !important;min-height:600px;min-width:120px;" class="ezoic-ad"><script data-ezscrex="false" data-cfasync="false" type="text/javascript" style="display:none;">if(typeof __ez_fad_position != 'undefined'){__ez_fad_position('div-gpt-ad-asciitable_com-large-billboard-2-0')};</script></span><span style="width:160px;display:block;height:14px;margin:auto" class="reportline"><span style="text-align:center;font-size: smaller;float:left;line-height:normal;"><a href="https://www.ezoic.com/what-is-ezoic/" target="_blank" rel="noopener noreferrer nofollow" style="cursor:pointer"><img src="https://go.ezoic.net/utilcave_com/img/ezoic.png" alt="Ezoic" style="height:12px !important; padding:2px !important; border:0px !important; cursor:pointer !important; width: 58px !important; margin:0 !important; box-sizing: content-box !important;"/></a></span><span class="ez-report-ad-button" name="?pageview_id=c4bfe9f2-e51f-45ef-60d1-5fe52e11ddee&amp;ad_position_id=102&amp;impression_group_id=asciitable_com-large-billboard-2/2021-08-02/246860501950544&amp;ad_size=160x600&amp;domain_id=61065&amp;url=https://www.asciitable.com/" style="cursor: pointer!important; font-size:12px !important;color: #a5a5a5 ;float:right;text-decoration:none !important;font-family:arial !important;line-height:normal;">report this ad</span></span></span>
<!-- End Ezoic - top right - sidebar -->
<br/>
<br/><a href="http://www.allconversions.com" target="_blank">Unit Conversion</a><br/>
<br/><a href="http://link2me.com" target="_blank" rel="nofollow">Link2Me Link Exchange</a><br/>
<br/><a href="http://www.perfume-click.co.uk/" target="_new">Cheap Perfume</a> from Perfume Click, the UK&#39;s leading discount perfume, aftershave and beauty store.<br/>

          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>

  <tr>
    <td colspan="3" class="Footer" style="vertical-align: middle;">
            Copyright Â© http://www.asciitable.com  <a href="https://www.asciitable.com/privacy/">Privacy Policy</a>    </td>
  </tr>

</tbody></table>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-16917666-8', 'asciitable.com');
  ga('send', 'pageview');

</script>

<!-- Begin Cookie Consent plugin by Silktide - http://silktide.com/cookieconsent -->
<script type="text/javascript">
    window.cookieconsent_options = {"message":"This website uses cookies to ensure you get the best experience on our website","dismiss":"Got it!","learnMore":"More info","link":null,"theme":"dark-bottom"};
</script>

<script type="text/javascript" src="//s3.amazonaws.com/cc.silktide.com/cookieconsent.latest.min.js"></script>
<!-- End Cookie Consent plugin -->



<div class="ezmob-footer ezoic-floating-bottom ezo_ad ezmob-footer-desktop" id="ezmobfooter"><center><span id="ezoic-pub-ad-placeholder-105"></span><div class="ezmob-footer ezoic-floating-bottom ezo_ad ezmob-footer-desktop" id="ezmobfooter"><center><span class="ezoic-ad medrectangle-2 medrectangle-2105 adtester-container adtester-container-105" data-ez-name="asciitable_com-medrectangle-2"><span id="div-gpt-ad-asciitable_com-medrectangle-2-0" ezaw="728" ezah="90" style="position:relative;z-index:0;display:inline-block;padding:0;min-height:90px;min-width:728px;" class="ezoic-ad"><script data-ezscrex="false" data-cfasync="false" type="text/javascript" style="display:none;">if(typeof __ez_fad_position != 'undefined'){__ez_fad_position('div-gpt-ad-asciitable_com-medrectangle-2-0')};</script></span></span></center><span class="ezmob-footer-close" onclick="document.getElementById(&#39;ezmobfooter&#39;).style.display=&#39;none&#39;;">x</span></div></center><span class="ezmob-footer-close" onclick="document.getElementById(&#39;ezmobfooter&#39;).style.display=&#39;none&#39;;">x</span></div><script type="text/javascript">
				var __inScopeForCCPA = false;
		function __uspapi(command, version, callback) {
			var response = null;
			var successs = false;
			if (command === "getUSPData" && version === 1) {
				var uspString = "1"; // Version
				if (__inScopeForCCPA) {
					uspString += "N"; // Has Explicit Notice for Opt Out been provided (ex footer or minor consent modal)
					var result;
					var consentCookie = (result = new RegExp('(?:^|; )ezoccpaconsent=([^;]*)').exec(document.cookie)) ? (result[1]) : null;
					if (consentCookie === "nonconsent") {
						uspString += "Y";
					}
					else {
						uspString += "N";
					}
					uspString += "N" // Is pub a signatory to the IAB Limited Service Provider Agreement (http://www.iabprivacy.com/)
				}
				else {
					uspString += "---";
				}
				response = {
					uspString: uspString,
					version: 1
				};
				success = true;
			}
			return callback(response, success);
		};
		function __receiveUspapiMessage(event) {
			if (event.data.hasOwnProperty('__uspapiCall')) {
				__uspapi('getUSPData', 1, function(uspData, success) {
					event.source.postMessage({
						__uspapiReturn: {
							returnValue: uspData,
							success: success,
							callId: event.data.__uspapiCall.callId
						}
					},
					event.origin);
				});
			}
			return null;
		};
		window.addEventListener("message", __receiveUspapiMessage, false);
</script>
<script>function __ez_fad_ezpbinit(){var s = document.createElement( 'script' );
	s.setAttribute( 'src', '//go.ezodn.com/hb/dall.js?b=amx,appnexus,conversant,criteo,gumgum,ix,luponmedia,medianet,oftmedia,oneVideo,onemobile,onetag,pubmatic,pulsepoint,rhythmone,rubicon,sharethrough,smilewanted,spotx,undertone,unruly&cb=195-4-26' );
	document.body.appendChild( s );}var epbjs=epbjs||{};epbjs.que=epbjs.que||[];epbjs.bidderTimeout=2500;epbjs.useAdj=true;epbjs.SS={"amx":11290,"appnexus":10087,"conversant":10033,"criteo":10050,"gumgum":10079,"ix":10082,"luponmedia":11300,"medianet":11307,"oftmedia":10081,"oneVideo":11299,"onemobile":11293,"onetag":11291,"pubmatic":10061,"pulsepoint":11301,"rhythmone":11298,"rubicon":10063,"sharethrough":11309,"smilewanted":11313,"spotx":11304,"undertone":11292,"unruly":10097};epbjs.bidders=['amx,appnexus,conversant,criteo,gumgum,ix,luponmedia,medianet,oftmedia,oneVideo,onemobile,onetag,pubmatic,pulsepoint,rhythmone,rubicon,sharethrough,smilewanted,spotx,undertone,unruly'];epbjs.que.push(function(){epbjs.aliasBidder('appnexus', 'conversant');epbjs.aliasBidder('appnexus', 'oftmedia');});epbjs.bidderSettings={'conversant': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'oftmedia': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 0.850000; var adj2 = adj1 * 1.000000; return adj2; }},'ix': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 0.950000; var adj2 = adj1 * 1.000000; return adj2; }},'gumgum': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'onemobile': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'criteo': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 0.900000; var adj2 = adj1 * 1.000000; return adj2; }},'pubmatic': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'amx': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'onetag': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'undertone': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'rubicon': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'unruly': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 0.490000; var adj2 = adj1 * 1.000000; return adj2; }},'appnexus': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 0.950000; var adj2 = adj1 * 1.000000; return adj2; }},'rhythmone': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'oneVideo': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 0.330000; var adj2 = adj1 * 1.000000; return adj2; }},'luponmedia': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 0.950000; var adj2 = adj1 * 1.000000; return adj2; }},'pulsepoint': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'spotx': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 0.560000; var adj2 = adj1 * 1.000000; return adj2; }},'medianet': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},'sharethrough': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 0.950000; var adj2 = adj1 * 1.000000; return adj2; }},'smilewanted': { bidCpmAdjustment: function(bidCpm) { var adj1 = bidCpm * 1.000000; var adj2 = adj1 * 1.000000; return adj2; }},};epbjs.gadj=1.000000;var __enableAnalytics=false;
var __s2sbidders=['onetag'];
var __allBidders=['conversant','oftmedia','ix','gumgum','onemobile','criteo','pubmatic','amx','onetag','undertone','rubicon','unruly','appnexus','rhythmone','oneVideo','luponmedia','pulsepoint','spotx','medianet','sharethrough','smilewanted'];
__ez.queue.addFile('/detroitchicago/denver.js', '/detroitchicago/denver.js?gcb=4&cb=1', false, [], true, false, true, false);__ez.queue.addFunc("epbjsRequestAdUnits", "epbjsRequestAdUnits", [[{code: 'div-gpt-ad-asciitable_com-medrectangle-2-0', mediaTypes: {banner: { sizes:[[728,90]] }}, bids: [{bidder: 'conversant', params: { site_id: '207360', secure: 1 }},{bidder: 'ix', params: { siteId: '305141', size: [728,90] }},{bidder: 'gumgum', params:{ inSlot: '20890' }},{bidder: 'criteo', params: { networkId: '7987' }},{bidder: 'pubmatic', params:{ publisherId: '156983', adSlot: 'e_bottom_floating_728x90' }},{bidder: 'amx', params: { tagId: 'ZXpvaWMuY29t' }},{bidder: 'undertone', params: { publisherId: '4009', placementId: '4009004' }},{bidder: 'rubicon', params:{ accountId: '21150', siteId: '290142', zoneId: '1458976' }},{bidder: 'appnexus', params: { placementId: '20116178', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'rhythmone', params: { placementId: '215626' }},{bidder: 'luponmedia', params: { siteId: 2206, keyId: 'asciitablecom728x90' }},{bidder: 'pulsepoint', params: { cf: '728x90', cp: '562406', ct: '719177' }},{bidder: 'medianet', params: { cid: '8CUBCB617', crid: '188911743' }},{bidder: 'sharethrough', params: { pkey: 'e1sI5HKO9lbvTm6UAa1WEpg9' }},{bidder: 'smilewanted', params: { zoneId: 'ezoic.com_hb_display' }}] },{code: 'div-gpt-ad-asciitable_com-box-1-0', mediaTypes: {video: { context:'outstream', playerSize:[[160, 600]], mimes:["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"], renderer: {url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2', render: function (bid) { if (!(bid.vastXml === undefined || bid.vastXml === null)) {try {setTimeout(()=>{var configObj = {width: bid.width, height: bid.height, vastTimeout: 5000, maxAllowedVastTagRedirects: 3, allowVpaid: true, autoPlay: true, preload: false, mute: true, adText: 'Ezoic'};outstreamPlayer(bid, bid.adUnitCode, configObj);}, 3000);} catch (e) {console.log(e);console.log('Error in rendering');}}}, backupOnly: true} }}, bids: [{bidder: 'unruly', params:{ siteId: '217328' }},{bidder: 'appnexus', params: { placementId: '20116180', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'oneVideo', params: { pubId: 'EzoicInc', video: {playerWidth: 160, playerHeight: 600, mimes: ['video/mp4', 'application/javascript'], protocols: [2], api: [1,2], placement: 2} }},{bidder: 'spotx', params: { channel_id: '309672', ad_unit: 'outstream', outstream_options: {slot: 'div-gpt-ad-asciitable_com-box-1-0'} }}] },{code: 'div-gpt-ad-asciitable_com-box-1-0', mediaTypes: {video: { context:'instream', playerSize:[[160, 600]], w:160, h:600, minduration:5, maxduration:30, skippable:true, mimes:["video/mp4"], protocols: [3, 6], api: [2], placement: 1 }}, bids: [{bidder: 'ix', params: { siteId: '682022', size: [160,600] }},{bidder: 'unruly', params:{ siteId: '217328' }},{bidder: 'oneVideo', params: { pubId: 'EzoicInc', video: {inventoryid: 1284824} }}] },{code: 'div-gpt-ad-asciitable_com-box-1-0', mediaTypes: {banner: { sizes:[[160,600]] }}, bids: [{bidder: 'conversant', params: { site_id: '207360', secure: 1 }},{bidder: 'oftmedia', params:{ placementId: '19593629', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'ix', params: { siteId: '305136', size: [160,600] }},{bidder: 'gumgum', params:{ inSlot: '20815' }},{bidder: 'criteo', params: { networkId: '7987' }},{bidder: 'pubmatic', params:{ publisherId: '156983', adSlot: 'e_sidebar_160x600' }},{bidder: 'amx', params: { tagId: 'ZXpvaWMuY29t' }},{bidder: 'rubicon', params:{ accountId: '21150', siteId: '290142', zoneId: '1458966' }},{bidder: 'appnexus', params: { placementId: '20116178', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'rhythmone', params: { placementId: '215626' }},{bidder: 'pulsepoint', params: { cf: '160x600', cp: '562406', ct: '719188' }},{bidder: 'medianet', params: { cid: '8CUBCB617', crid: '188911743' }},{bidder: 'sharethrough', params: { pkey: 'gY2AkJfeFq2mznzv9VGyKt5V' }},{bidder: 'smilewanted', params: { zoneId: 'ezoic.com_hb_display' }}] },{code: 'div-gpt-ad-asciitable_com-large-billboard-2-0', mediaTypes: {video: { context:'outstream', playerSize:[[160, 600]], mimes:["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"], renderer: {url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2', render: function (bid) { if (!(bid.vastXml === undefined || bid.vastXml === null)) {try {setTimeout(()=>{var configObj = {width: bid.width, height: bid.height, vastTimeout: 5000, maxAllowedVastTagRedirects: 3, allowVpaid: true, autoPlay: true, preload: false, mute: true, adText: 'Ezoic'};outstreamPlayer(bid, bid.adUnitCode, configObj);}, 3000);} catch (e) {console.log(e);console.log('Error in rendering');}}}, backupOnly: true} }}, bids: [{bidder: 'unruly', params:{ siteId: '217328' }},{bidder: 'appnexus', params: { placementId: '20116180', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'oneVideo', params: { pubId: 'EzoicInc', video: {playerWidth: 160, playerHeight: 600, mimes: ['video/mp4', 'application/javascript'], protocols: [2], api: [1,2], placement: 2} }},{bidder: 'spotx', params: { channel_id: '309672', ad_unit: 'outstream', outstream_options: {slot: 'div-gpt-ad-asciitable_com-large-billboard-2-0'} }}] },{code: 'div-gpt-ad-asciitable_com-large-billboard-2-0', mediaTypes: {video: { context:'instream', playerSize:[[160, 600]], w:160, h:600, minduration:5, maxduration:30, skippable:true, mimes:["video/mp4"], protocols: [3, 6], api: [2], placement: 1 }}, bids: [{bidder: 'ix', params: { siteId: '682022', size: [160,600] }},{bidder: 'unruly', params:{ siteId: '217328' }},{bidder: 'oneVideo', params: { pubId: 'EzoicInc', video: {inventoryid: 1284824} }}] },{code: 'div-gpt-ad-asciitable_com-large-billboard-2-0', mediaTypes: {banner: { sizes:[[160,600]] }}, bids: [{bidder: 'conversant', params: { site_id: '207360', secure: 1 }},{bidder: 'oftmedia', params:{ placementId: '19594060', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'ix', params: { siteId: '305146', size: [160,600] }},{bidder: 'gumgum', params:{ inSlot: '20825' }},{bidder: 'criteo', params: { networkId: '7987' }},{bidder: 'pubmatic', params:{ publisherId: '156983', adSlot: 'e_sidebar_middle_160x600' }},{bidder: 'amx', params: { tagId: 'ZXpvaWMuY29t' }},{bidder: 'rubicon', params:{ accountId: '21150', siteId: '290142', zoneId: '1458986' }},{bidder: 'appnexus', params: { placementId: '20116178', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'rhythmone', params: { placementId: '215626' }},{bidder: 'pulsepoint', params: { ct: '719188', cf: '160x600', cp: '562406' }},{bidder: 'medianet', params: { cid: '8CUBCB617', crid: '188911743' }},{bidder: 'sharethrough', params: { pkey: 'gY2AkJfeFq2mznzv9VGyKt5V' }},{bidder: 'smilewanted', params: { zoneId: 'ezoic.com_hb_display' }}] },{code: 'div-gpt-ad-asciitable_com-large-leaderboard-1-0', mediaTypes: {video: { context:'outstream', playerSize:[[160, 600]], mimes:["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"], renderer: {url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2', render: function (bid) { if (!(bid.vastXml === undefined || bid.vastXml === null)) {try {setTimeout(()=>{var configObj = {width: bid.width, height: bid.height, vastTimeout: 5000, maxAllowedVastTagRedirects: 3, allowVpaid: true, autoPlay: true, preload: false, mute: true, adText: 'Ezoic'};outstreamPlayer(bid, bid.adUnitCode, configObj);}, 3000);} catch (e) {console.log(e);console.log('Error in rendering');}}}, backupOnly: true} }}, bids: [{bidder: 'unruly', params:{ siteId: '217328' }},{bidder: 'appnexus', params: { placementId: '20116180', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'oneVideo', params: { pubId: 'EzoicInc', video: {playerWidth: 160, playerHeight: 600, mimes: ['video/mp4', 'application/javascript'], protocols: [2], api: [1,2], placement: 2} }},{bidder: 'spotx', params: { channel_id: '309672', ad_unit: 'outstream', outstream_options: {slot: 'div-gpt-ad-asciitable_com-large-leaderboard-1-0'} }}] },{code: 'div-gpt-ad-asciitable_com-large-leaderboard-1-0', mediaTypes: {video: { context:'instream', playerSize:[[160, 600]], w:160, h:600, minduration:5, maxduration:30, skippable:true, mimes:["video/mp4"], protocols: [3, 6], api: [2], placement: 1 }}, bids: [{bidder: 'ix', params: { siteId: '682022', size: [160,600] }},{bidder: 'unruly', params:{ siteId: '217328' }},{bidder: 'oneVideo', params: { pubId: 'EzoicInc', video: {inventoryid: 1284824} }}] },{code: 'div-gpt-ad-asciitable_com-large-leaderboard-1-0', mediaTypes: {banner: { sizes:[[160,600]] }}, bids: [{bidder: 'conversant', params: { site_id: '207360', secure: 1 }},{bidder: 'oftmedia', params:{ placementId: '19594063', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'ix', params: { siteId: '305147', size: [160,600] }},{bidder: 'gumgum', params:{ inSlot: '20826' }},{bidder: 'criteo', params: { networkId: '7987' }},{bidder: 'pubmatic', params:{ publisherId: '156983', adSlot: 'e_sidebar_bottom_160x600' }},{bidder: 'amx', params: { tagId: 'ZXpvaWMuY29t' }},{bidder: 'rubicon', params:{ accountId: '21150', siteId: '290142', zoneId: '1458988' }},{bidder: 'appnexus', params: { placementId: '20116178', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'rhythmone', params: { placementId: '215626' }},{bidder: 'pulsepoint', params: { cp: '562406', ct: '719188', cf: '160x600' }},{bidder: 'medianet', params: { cid: '8CUBCB617', crid: '188911743' }},{bidder: 'sharethrough', params: { pkey: 'gY2AkJfeFq2mznzv9VGyKt5V' }},{bidder: 'smilewanted', params: { zoneId: 'ezoic.com_hb_display' }}] },{code: 'div-gpt-ad-asciitable_com-medrectangle-3-0', mediaTypes: {video: { context:'outstream', playerSize:[[970, 90]], mimes:["video/x-ms-wmv", "video/mp4", "video/mpeg", "video/webm"], renderer: {url: '//go.ezodn.com/detroitchicago/springfield.js?cb=2', render: function (bid) { if (!(bid.vastXml === undefined || bid.vastXml === null)) {try {setTimeout(()=>{var configObj = {width: bid.width, height: bid.height, vastTimeout: 5000, maxAllowedVastTagRedirects: 3, allowVpaid: true, autoPlay: true, preload: false, mute: true, adText: 'Ezoic'};outstreamPlayer(bid, bid.adUnitCode, configObj);}, 3000);} catch (e) {console.log(e);console.log('Error in rendering');}}}, backupOnly: true} }}, bids: [{bidder: 'unruly', params:{ siteId: '217328' }},{bidder: 'appnexus', params: { placementId: '20116180', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'oneVideo', params: { pubId: 'EzoicInc', video: {playerWidth: 970, playerHeight: 90, mimes: ['video/mp4', 'application/javascript'], protocols: [2], api: [1,2], placement: 2} }},{bidder: 'spotx', params: { channel_id: '309672', ad_unit: 'outstream', outstream_options: {slot: 'div-gpt-ad-asciitable_com-medrectangle-3-0'} }}] },{code: 'div-gpt-ad-asciitable_com-medrectangle-3-0', mediaTypes: {video: { context:'instream', playerSize:[[970, 90]], w:970, h:90, minduration:5, maxduration:30, skippable:true, mimes:["video/mp4"], protocols: [3, 6], api: [2], placement: 1 }}, bids: [{bidder: 'ix', params: { siteId: '682022', size: [970,90] }},{bidder: 'unruly', params:{ siteId: '217328' }},{bidder: 'oneVideo', params: { pubId: 'EzoicInc', video: {inventoryid: 1284824} }}] },{code: 'div-gpt-ad-asciitable_com-medrectangle-3-0', mediaTypes: {banner: { sizes:[[970,90]] }}, bids: [{bidder: 'conversant', params: { site_id: '207360', secure: 1 }},{bidder: 'oftmedia', params:{ placementId: '19594048', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'ix', params: { siteId: '305142', size: [970,90] }},{bidder: 'gumgum', params:{ inSlot: '20905' }},{bidder: 'criteo', params: { networkId: '7987' }},{bidder: 'pubmatic', params:{ publisherId: '156983', adSlot: 'e_under_first_paragraph_970x90' }},{bidder: 'amx', params: { tagId: 'ZXpvaWMuY29t' }},{bidder: 'rubicon', params:{ accountId: '21150', siteId: '290142', zoneId: '1458978' }},{bidder: 'appnexus', params: { placementId: '20116178', video: {skippable: true, playback_method: ['auto_play_sound_off']}}},{bidder: 'rhythmone', params: { placementId: '215626' }},{bidder: 'luponmedia', params: { keyId: 'asciitablecom970x90', siteId: 2206 }},{bidder: 'pulsepoint', params: { cf: '970x90', cp: '562406', ct: '719191' }},{bidder: 'medianet', params: { crid: '188911743', cid: '8CUBCB617' }},{bidder: 'smilewanted', params: { zoneId: 'ezoic.com_hb_display' }}] }]], false, ['/detroitchicago/denver.js'], true, true, true, true);</script>
<script>var __ez_tkn_evnt = function() { if(typeof(_ezaq) != 'undefined'){if(typeof window.ezogtk !== "undefined" && window.ezogtk !== "") {__ez.bit.AddAndFire(_ezaq.page_view_id,[new __ezDotData("ext_user_hash",window.ezogtk)]);}}};document.addEventListener("DOMContentLoaded", __ez.queue.addFunc("__ez_tkn_evnt", "__ez_tkn_evnt", event, false, ['/detroitchicago/minneapolis.js','/detroitchicago/memphis.js'], true, true, false, true));</script>
<script async data-ezscrex="false">__ez_fad_load(0,0);__ez_fad_doc_ht=__ez_fad_docht();__ez_fad_vp_ht=__ez_fad_vpht();function __ez_fad_scroll(){return window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop}
var __ez_fad_scrollint=setInterval(function(){var sy=__ez_fad_scroll();var isShortPage=__ez_fad_doc_ht<=(__ez_fad_vh+100);var bot=(__ez_fad_vp_ht+sy);var botThresh=bot+__ez_fad_vp_ht;for(var divid in __ez_fad_divpos){if(__ez_fad_fastdiv.indexOf(divid)!=-1){continue;}
var divPos=__ez_fad_divpos[divid];if(divPos>0&&divPos>sy&&divPos<(sy+200)){if(typeof __ez_fad_instaslots[divid]=='function'){__ez_fad_instaslots[divid]();}}else if(divPos>0&&divPos>sy&&divPos<(sy+600)){if(typeof __ez_fad_instaslots[divid]=='function'){__ez_fad_viewslots[divid]();}}}
__ez_fad_chkpos();if(ezslit_run[0]!=true){__ez_fad_load(0,0);}
if((sy>0||isShortPage)&&ezslit_run[1]!=true){__ez_fad_load(1,null);__ez_fad_load(5,null);}
if((sy>100||isShortPage)&&ezslit_run[2]!=true){__ez_fad_load(2,null);}
if(sy>(__ez_fad_vp_ht*.75)&&ezslit_run[3]!=true){__ez_fad_load(3,null);}
if(ezslit_run[1]==true&&ezslit_run[2]==true&&ezslit_run[3]==true){clearInterval(__ez_fad_scrollint);}},500);function __ez_fad_chkpos(){if(typeof __ez_fad_divs[4]!='undefined'){for(var i=0;i<__ez_fad_divs[4].length;i++){var id=__ez_fad_divs[4][i];__ez_fad_divs[4][i]=null;__ez_fad_position([id]);};}}</script>
<script type="text/javascript">(function(f,a){function g(b,a,c){b.addEventListener?b.addEventListener(a,c):b.attachEvent("on"+a,function(){c.call(b)})}function k(b){b&&("string"==typeof b["class"]&&b["class"]&&a.getElementById("uglipop_popbox").setAttribute("class",b["class"]),b.keepLayout&&!b["class"]&&a.getElementById("uglipop_popbox").setAttribute("style","position:relative;height:300px;width:300px;background-color:white;opacity:1;"),"string"==typeof b.content&&b.content&&"html"==b.source&&(a.getElementById("uglipop_popbox").innerHTML=b.content),"string"==typeof b.content&&b.content&&"div"==b.source&&(a.getElementById("uglipop_popbox").innerHTML=a.getElementById(b.content).innerHTML));a.getElementById("uglipop_overlay_wrapper").style.display="";a.getElementById("uglipop_overlay").style.display="";a.getElementById("uglipop_content_fixed").style.display=""}function h(){a.getElementById("uglipop_overlay_wrapper").style.display="none";a.getElementById("uglipop_overlay").style.display="none";a.getElementById("uglipop_content_fixed").style.display="none"}g(a,"DOMContentLoaded",function(){var b=a.createElement("div"),e=a.createElement("div"),c=a.createElement("div"),d=a.createElement("div");e.id="uglipop_content_fixed";e.setAttribute("style","position:fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);opacity:1;z-index:10000000;");c.id="uglipop_popbox";d.id="uglipop_overlay_wrapper";d.setAttribute("style","position:absolute;top:0;bottom:0;left:0;right:0;display:none");b.id="uglipop_overlay";b.setAttribute("style","position:fixed;top:0;bottom:0;left:0;right:0;opacity:0.3;width:100%;height:100%;background-color:black;");d.appendChild(b);e.appendChild(c);a.body.appendChild(d);a.body.appendChild(e);a.getElementById("uglipop_overlay_wrapper").style.display="none";a.getElementById("uglipop_overlay").style.display="none";a.getElementById("uglipop_content_fixed").style.display="none";d.addEventListener("click",h);g(f,"keydown",function(a){27==a.keyCode&&h()});f.uglipop=k})})(window,document);var ezRBA=(function(){function init(){var reportAdsBtns=document.querySelectorAll('.ez-report-ad-button');for(var i=0;i<reportAdsBtns.length;i++){reportAdsBtns[i].addEventListener('click',function(e){var url='<iframe src="https://svc.ezoic.com/pub/reportads/reportads.html'+e.target.getAttribute('name')+'" width="400" height="500" style="border-radius: 10px; box-shadow: 2px 2px 30px 6px rgba(0,0,0,0.75); border: 1px solid black;"></iframe>'
uglipop({class:'none',source:'html',content:url,});});}
function bindEvent(element,eventName,eventHandler){if(element.addEventListener){element.addEventListener(eventName,eventHandler,false);}else if(element.attachEvent){element.attachEvent('on'+eventName,eventHandler);}}
bindEvent(window,'message',function(e){if(e.data==='close-report-ad-modal'){document.getElementById('uglipop_overlay_wrapper').style.display='none';document.getElementById('uglipop_overlay').style.display='none';document.getElementById('uglipop_content_fixed').style.display='none';}})}
return{init:init};})();ezRBA.init();</script>
<script type="text/javascript" data-cfasync="false"></script>
<script type="text/javascript" style='display:none;'>var __ez_dims = (function() {
		var setCookie = function( name, content, expiry ) {
			return document.cookie = name+'='+content+((expiry)?';expires='+(new Date(Math.floor(new Date().getTime()+expiry*1000)).toUTCString()):'')+';path=/';
		};
		var ffid = 1;
		var oh = window.screen.height;
		var ow = window.screen.width;
		var h = ffid === 1 ? oh : (oh > ow) ? oh : ow;
		var w = ffid === 1 ? ow : (oh > ow) ? ow : oh;
		var uh = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
		var uw = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
		setCookie('ezds', encodeURIComponent('ffid='+ffid+',w='+w+',h='+h), (31536e3*7));
		setCookie('ezohw', encodeURIComponent('w='+uw+',h='+uh), (31536e3*7));
	})();</script><script type='text/javascript' style='display:none;' async>
</script>
</body></html>