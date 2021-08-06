(function() {
  function isCN() {
    var lang = document.cookie.match(new RegExp("(^| )VPLang=([^;]*)(;|$)"))
    if (lang && lang[2] === 'zh_CN') {
      var style = document.createElement('style')
      style.type = 'text/css'
      style.innerHTML = '.roll-ad-manager{visibility: hidden!important}'
      document.getElementsByTagName("head")[0].appendChild(style)
      return true
    }
    return false
  }
  document.write('<div id="vmv3-ad-manager" style="display:none"></div>');
  if (!isCN()) {
    document
    .getElementById("vmv3-ad-manager")
    .innerHTML = '<iframe id="vmv3-frm" src="javascript:\'<html><body></body></html>\'" width="0" height="0" data-mode="scan" data-site-id="5bc4aaf746e0fb0001c6c51c"></iframe>';
    var loaderFrame = document.getElementById("vmv3-frm");
    var loaderFrameWindow = loaderFrame.contentWindow ? loaderFrame.contentWindow : loaderFrame.contentDocument;
    loaderFrameWindow.document.open();
    loaderFrameWindow.document.write('<scr'+'ipt src="https://hb.vntsm.com/v3/live/ad-manager.min.js" type="text/javascript" async>'+'</scr'+'ipt>');
    loaderFrameWindow.document.close();
  }
})();

