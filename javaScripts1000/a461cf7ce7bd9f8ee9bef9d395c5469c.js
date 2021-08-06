/* >>> file start: js/embed/wrap.js */
!function(){var e=document.mock||document,t=window.mock||window;e.addEventListener("DOMContentLoaded",function(){var i=e.body,o=e.querySelector("iframe"),n=o.src.replace(/^(http)?s?(:\/\/)?(www.)/,"").replace(/\/.*/g,""),d=n.indexOf("facebook")>-1,r=d&&o.src.indexOf("plugins/video.php")>-1,h=d&&!r;h&&!function(){var e=o.getAttribute("width"),n=o.getAttribute("height");e?o.style.width=e+"px":o.style.width="auto",n?o.style.height=n+"px":o.style.height="auto";var d=void 0,r=void 0,h=function(){i.style.overflowX="scroll",i.style.overflowY="scroll",d=o.getBoundingClientRect(),r=i.getBoundingClientRect(),d.width<=r.width&&(i.style.overflowX="hidden"),d.height<=r.height&&(i.style.overflowY="hidden")};t.addEventListener("resize",h);var l={},c=0,s=500,w=5e3,a=setInterval(function(){h(),l.width===d.width&&l.height===d.height?c+=s:c=0,l=d,c>w&&clearInterval(a)},s)}()})}();
/* <<< file end: js/embed/wrap.js */

//# map link was there [wrap.js.map]
