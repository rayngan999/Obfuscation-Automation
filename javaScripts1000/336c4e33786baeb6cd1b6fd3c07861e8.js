(function() {
  var div = document.getElementById('zone_1277');
  var iframe = document.createElement('iframe');
  AVP.listen(iframe, 'load', function() { AVP.resizeIFRAME('zone_1277'); });
  div.appendChild(iframe);
  iframe.setAttribute('id', 'zone_1277_iframe');
  iframe.setAttribute('allowtransparency', 'true');
  iframe.setAttribute('scrolling', 'no');
  iframe.setAttribute('style', 'margin:0; padding:0; width:0px; height:0px; border:0; overflow:hidden; vertical-align:bottom');
  var iframeDocument = (iframe.contentWindow) ? iframe.contentWindow.document : (iframe.contentDocument || iframe.document);
  iframeDocument.open();
  iframeDocument.write('<body style="margin:0; padding:0"><div></div></body>');
  iframeDocument.close();
})();
