window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
(function (W, D, N) {
W[N]=W[N]||{};W[N].cmd=W[N].cmd||[];
function getDbg(){var dbg=0,m;try{m = W.location.href.match(/pbjs_debug=(\S*)/) || (D.cookie+';').match(/pbjs_debug=(\S*)\;/);dbg=m && 'true'===(m[1]||'')}catch(e){}D.cookie='pbjs_debug='+dbg+'; path=/; secure';return dbg}
W.G_options=W.G_options||{};
W.G_options.debug=getDbg();
var G_debug=G_options.debug;
function loadScript(url){var o='script',s=document,a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=url;m.parentNode.insertBefore(a,m);};

if(W[N]['affmp2_examresults.net']){return}W[N]['affmp2_examresults.net']=1;
loadScript('https://cdn4-hbs.affinitymatrix.com/hvrlib/examresults.net/1615804464/v2.js');
W[N].cmd.push(function(){
if(!W[N].chkDomain('examresults.net')){return}
var cfg = {"aff":{"def":{"maxCall":1,"minVisblePerc":50,"delaySec":45,"kw":{"domain":"examresults.net"},"gads":{"enabled":false}},"aus":[{"au":"/42115163/IP_examresults.net_ALL_Multisize_RON_Both_HVR","sz":["300x250","320x50","320x100","336x280","728x90","970x90","160x600"],"def":1},{"au":"/21930596546/IP_examresults.net_ALL_Multisize_RON_Both_HVR_MC","sz":["300x250","320x50","320x100","336x280","728x90","970x90","160x600"],"def":1}]},"pub":{"def":{"maxCall":5,"delaySec":10,"minVisblePerc":60,"reprf":1,"kw":{"domain":"examresults.net"},"excludePatrn":{"patrn":"NO_REFRESH","enable":1},"section":{"enable":0,"whitelist":[],"blacklist":[]}},"rule":[{"tp":"exc","au":["*"],"sz":["1x1"],"lbl":"Ignr 1x1"},{"tp":"inc","au":["*"],"sz":["300x250","320x50","320x100","336x280","728x90","970x90","160x600"],"lbl":"All Au"}],"adspots":[]}};
if(cfg.aff.pbjs && cfg.aff.pbjs.enabled){
    var hbsite = cfg.aff.pbjs.hbsite || ('hvr_' + cfg.aff.def.kw.domain),d=new Date();
    W[N].U.loadScript('https://hbs.ph.affinity.com/v5/' + hbsite + '/affhb.data.js.php?t=' + d.getDate() + d.getMonth() + d.getHours() );
}
if( cfg.aff.def.dfpenblsrv){W[N].U.loadScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js");}
googletag.cmd.push(function() {
    W[N].AffRefresh(cfg)
});
});
})(window, document, '__afflib');