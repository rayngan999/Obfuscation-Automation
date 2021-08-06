






      
        
      
    
(function(){
var getLinkDom = function(target) {
  if (!target || !target.tagName) return null;
  if (target.tagName.toLowerCase() === 'a') return target;
  if (target.parentNode) {
    return getLinkDom(target.parentNode);
  }
  return null;
};
document.addEventListener && document.addEventListener('click', function(e){
  var targetDom = e.target;
  var linkDom = getLinkDom(targetDom);
  if (linkDom && window.dplus && typeof dplus.track === 'function') {
    dplus.track('um_auto_link_track', {
      aLink: linkDom.getAttribute('data-link') || linkDom.href || '',
      aText: linkDom.getAttribute('data-title') || linkDom.title || linkDom.innerText || '',
      aClass: linkDom.getAttribute('class') || '',
      targetText: targetDom.getAttribute('data-title') || targetDom.title || targetDom.innerText || '',
      targetTagName: targetDom && targetDom.tagName ? targetDom.tagName : '',
      targetClass: targetDom.getAttribute('class') || '',
      targetSrc: targetDom.getAttribute('src') || '',
      pageTitle: document.title,
      pageLink: window.location.href
    });
  }
});
})();