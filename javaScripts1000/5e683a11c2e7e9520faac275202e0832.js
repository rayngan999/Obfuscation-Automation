(function(){
var locPro=(location.protocol.substring(0,2)!='ht')?'http':location.protocol.replace(/:/,'');
function createFrame(url) { var frame = document.createElement('iframe'), style = frame.style; style.width = '0px'; style.height = '0px'; style.position = 'absolute'; style.left = '-300px'; style.top = '0px'; frame.src = url; document.body.appendChild(frame); }
createFrame(locPro+'://ih.adscale.de/adscale-ih/dum?tpid=101&sec=1&tpuid=03026518770596775');
})();