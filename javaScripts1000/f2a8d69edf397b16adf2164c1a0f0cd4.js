!function(e){"use strict";"object"!=typeof window.UtilityMove&&(window.UtilityMove={});var t=function(e){var t=document.createElement("div");document.getElementById("move-helper-text")||(t.setAttribute("id","move-helper-text"),t.innerHTML="Some areas of this page may shift around if you resize the browser window. Be sure to check heading and document order.",t.style.position="absolute",t.style.top="-999em",t.style.left="-999em",document.body.appendChild(t),document.body.setAttribute("aria-describedby","move-helper-text"));var n,o={el:null,before:null,after:null,appendTo:null,prependTo:null,minWidth:null,refreshRate:200},i=!1,d=(document.documentElement.clientWidth,e.el.parentNode),l=e.el.nextSibling;for(n=0;n<o.length;n+=1)void 0===e[n]&&(e[n]=o[n]);var r,u,m,c,a=function(){e.el&&(e.before?e.before.parentNode.insertBefore(e.el,e.before):e.after?e.after.parentNode.insertBefore(e.el,e.after.nextSibling):e.prependTo?e.prependTo.insertBefore(e.el,e.prependTo.firstChild):e.appendTo&&e.appendTo.appendChild(e.el)),i=!0},p=function(){l?d.insertBefore(e.el,l):d.appendChild(e.el),i=!1};e.minWidth?(document.documentElement.clientWidth>e.minWidth&&!1===i?(a(),document.documentElement.classList.add("moved")):document.documentElement.clientWidth<=e.minWidth&&(p(),document.documentElement.classList.add("moved")),window.addEventListener("resize",(r=function(){document.documentElement.clientWidth>e.minWidth&&!1===i?a():document.documentElement.clientWidth<=e.minWidth&&!0===i&&p()},u=e.refreshRate,function(){var e=this,t=arguments,n=m&&!c;clearTimeout(c),c=setTimeout(function(){c=null,m||r.apply(e,t)},u),n&&r.apply(e,t)}))):a()};"undefined"!=typeof module&&void 0!==module.exports?module.exports=t:"function"==typeof define&&define.amd?define("UtilityMove",[],function(){return t}):"object"==typeof e&&(e.UtilityMove=t)}("undefined"!=typeof global?global:window);