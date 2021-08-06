/**
 * @fileoverview dragscroll - scroll area by dragging
 * @version 0.0.8
 * 
 * @license MIT, see http://github.com/asvd/dragscroll
 * @copyright 2015 asvd <heliosframework@gmail.com> 
 */


!function(e,n){"function"==typeof define&&define.amd?define(["exports"],n):"undefined"!=typeof exports?n(exports):n(e.dragscroll={})}(this,function(e){var i,m,d=window,s=document,f="mousemove",u="mouseup",a="mousedown",n="EventListener",p="add"+n,t="remove"+n,o=[],n=function(e,n){for(e=0;e<o.length;)(n=(n=o[e++]).container||n)[t](a,n.md,0),d[t](u,n.mu,0),d[t](f,n.mm,0);for(o=[].slice.call(s.getElementsByClassName("dragscroll")),e=0;e<o.length;)!function(n,t,o,l,c,r){(r=n.container||n)[p](a,r.md=function(e){n.hasAttribute("nochilddrag")&&s.elementFromPoint(e.pageX,e.pageY)!=r||(l=1,t=e.clientX,o=e.clientY,e.preventDefault())},0),d[p](u,r.mu=function(){l=0},0),d[p](f,r.mm=function(e){l&&((c=n.scroller||n).scrollLeft-=i=-t+(t=e.clientX),c.scrollTop-=m=-o+(o=e.clientY),n==s.body&&((c=s.documentElement).scrollLeft-=i,c.scrollTop-=m))},0)}(o[e++])};"complete"==s.readyState?n():d[p]("load",n,0),e.reset=n});