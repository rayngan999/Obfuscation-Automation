window.googletag = window.googletag || {};
window.googletag.cmd = window.googletag.cmd || [];
(function (W, D, N) {
W[N]=W[N]||{};W[N].cmd=W[N].cmd||[];
function getDbg(){var dbg=0,m;try{m = W.location.href.match(/pbjs_debug=(\S*)/) || (D.cookie+';').match(/pbjs_debug=(\S*)\;/);dbg=m && 'true'===(m[1]||'')}catch(e){}D.cookie='pbjs_debug='+dbg+'; path=/; secure';return dbg}
W.G_options=W.G_options||{};
W.G_options.debug=getDbg();
var G_debug=G_options.debug;
function loadScript(url){var o='script',s=document,a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=url;m.parentNode.insertBefore(a,m);};

if(W[N]['affmp2_tempo.co']){return}W[N]['affmp2_tempo.co']=1;
loadScript('https://cdn4-hbs.affinitymatrix.com/hvrlib/tempo.co/1615804414/v2.js');
W[N].cmd.push(function(){
if(!W[N].chkDomain('tempo.co')){return}
var cfg = {"aff":{"def":{"maxCall":1,"minVisblePerc":50,"delaySec":45,"kw":{"domain":"tempo.co"},"gads":{"enabled":false}},"aus":[{"au":"/42115163/IP_tempo.co_ALL_Multisize_RON_Both_HVR","sz":["120x600","300x250","336x280","320x50","320x100","728x90","970x90","970x250","300x600"],"def":1},{"au":"/21930596546/IP_tempo.co_ALL_Multisize_RON_Both_HVR_MC","sz":["120x600","300x250","336x280","320x50","320x100","728x90","970x90","970x250","300x600"],"def":1}],"pbjs":{"enabled":true,"nm":"affpbjs","hbsite":"hvr_man_tempo.co"}},"pub":{"def":{"maxCall":5,"delaySec":10,"minVisblePerc":60,"reprf":9,"kw":{"domain":"tempo.co"},"excludePatrn":{"enable":1,"patrn":"NO_REFRESH"},"section":{"enable":0,"whitelist":[],"blacklist":[]},"ignireImpForPubAu":0,"dfpids":{"enable":1,"excIds":{"advId":[21622890900]}}},"rule":[{"tp":"exc","au":["*"],"sz":["1x1"],"lbl":"Ignr 1x1"},{"tp":"inc","au":["*"],"sz":["120x600","300x250","336x280","320x50","320x100","728x90","970x90","970x250","300x600"],"lbl":"All Au"},{"tp":"exc","au":["/14056285/tempo.co/desktop_home_skinad_left","/21622890900,14056285/ID_tempo.co_pc_all_right_sticky_300x250//336x280","/21622890900/ID_tempo_res_autoads","mobile_cantik_hanging_bottom","mobile_dunia_hanging_bottom","mobile_edsus_hanging_bottom","mobile_en.tempo.co_hanging_bottom","mobile_gaya_hanging_bottom","mobile_home_hanging_bottom","mobile_metro_hanging_bottom","mobile_nasional_hanging_bottom","mobile_nasional_hanging_bottom","mobile_otomotif_hanging_bottom","mobile_seleb_hanging_bottom","mobile_sport_hanging_bottom","mobile_tekno_hanging_bottom","mobile_travel_hanging_bottom","mobile_bisnis_hanging_bottom","mobile_bola_hanging_bottom","mobile_home_hanging_bottom","mobile_home_hanging_bottom"],"sz":["*"],"lbl":"Black-AU"}],"adspots":[]}};
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