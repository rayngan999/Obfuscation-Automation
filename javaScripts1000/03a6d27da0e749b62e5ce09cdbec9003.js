window.addEventListener("message", messageFromNativeAme, 'https://tpc.googlesyndication.com');

function getFrameByEvent(event) {
  return [].slice.call(document.getElementsByTagName('iframe')).filter(function(iframe) {
    return iframe.contentWindow === event.source;
  })[0];
}

function messageFromNativeAme(event) {
  if(event.data.identificazione == 'nativeAme') {
    console.log('[nativeAme] Messaggio arrivato');
    console.log(event);

    if (document.querySelector('.nativeRichPageCss') == null) {
      console.log('[nativeAme] Aggiungo css');
      var nativeRichPageCss = document.createElement('link');
      nativeRichPageCss.href = event.data.css;
      nativeRichPageCss.rel = "stylesheet";
      nativeRichPageCss.class = "nativeRichPageCss";

      document.head.appendChild(nativeRichPageCss);
    }

    var frame = getFrameByEvent(event);
    if(typeof frame !== 'undefined') {
      frame.parentElement.style.width = '100%';
      frame.parentElement.style.height = 'auto';
      frame.classList.add(event.data.class);
    } else {
      console.log('[nativeAme] impossibile identificare iframe');
    }
  }
}
