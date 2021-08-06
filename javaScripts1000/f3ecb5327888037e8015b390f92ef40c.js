(()=>{"use strict";var e,t,n,i,r,a,o,c={997:(e,t,n)=>{function i(e,t,n,i){void 0===i&&(i="");var r="";if(n){var a=new Date;a.setTime(a.getTime()+1e3*n),r="; expires="+a.toUTCString()}var o=i;""===i&&(o=function(){var e=window.location.hostname.split("."),t="."+e[e.length-2]+"."+e[e.length-1];return["net","com","org","edu","idv"].includes(e[e.length-2])&&(t="."+e[e.length-3]+t),t}());var c=e+"="+t+r+"; domain="+o+"; path=/";document.cookie=c}function r(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i+=1){for(var r=n[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}}n.d(t,{d8:()=>i,vQ:()=>r})}},s={};function d(e){var t=s[e];if(void 0!==t)return t.exports;var n=s[e]={exports:{}};return c[e](n,n.exports,d),n.exports}d.d=(e,t)=>{for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o=d(997),function(e){e.Utag="utag",e.Tag="tag"}(e||(e={})),r=null!==(t=(i={type:e.Utag,emome:!0}).facade)&&void 0!==t?t:"hitag",function(e){for(var t,n,i,r=document.getElementsByTagName("hitag"),a=0;a<r.length;a+=1){var o=r[a],c=null!==(n=null===(t=o.dataset)||void 0===t?void 0:t.tag)&&void 0!==n?n:"";""!==c?e.fire(c):e.fire(),null===(i=o.parentNode)||void 0===i||i.removeChild(o)}}(a=window[r]=null!==(n=window[r])&&void 0!==n?n:function(t,n){var i,r,a,c,s,d=new URL(null!==(r=null===(i=document.currentScript)||void 0===i?void 0:i.getAttribute("src"))&&void 0!==r?r:"//"+t,window.location.href),l=d.host,u=d.search,v=new URLSearchParams(u);n.domain?t=n.domain:v.has("cn")&&(t=l);var f,g=null!==(a=n.baseName)&&void 0!==a?a:"_ht",h="__htid",p=null!==(c=n.dnt)&&void 0!==c&&c,m=(f=window.location.hostname,void 0!==[".safeframe.googlesyndication.com"].find((function(e){return-1!==f.indexOf(e)}))),w=g+"_em_wy",y=[],b=[],S=null!==(s=(0,o.vQ)("uuid"))&&void 0!==s?s:(0,o.vQ)(h),k=g+"_hi";function x(){if(!0===m)return!0;if(p){var e=localStorage.getItem(p);return null===e&&(localStorage.setItem(p,"false"),e=localStorage.getItem(p)),"false"!==e}return!1}function I(i,r){!0!==x()&&function(t,n,i,r,a){if(void 0===a&&(a=""),void 0!==i)(new Image).src="//wy."+t+"/pixel?bd="+r+"&wy="+i+a;else{var o=new Image;n===e.Utag?o.src="//"+r.substr(0,36)+"."+t+"/pixel?bd="+r+a:o.src="//"+t+"/pixel?bd="+r+a}}(t,n.type,(0,o.vQ)(w),i,r)}function T(e){if(!0!==x()){var i=g+"_em";if(!(0,o.vQ)(i)&&n.emome&&!b.includes(e)){b.push(e);var r=new XMLHttpRequest;r.open("GET","//"+t+"/emome2?u="+e,!0),r.withCredentials=!0,r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var e=JSON.parse(r.responseText);null===e.data||(0,o.d8)(w,e.data,e["cache-sec"]),(0,o.d8)(i,"1",e["cache-sec"])}},r.send()}}}S&&!(0,o.vQ)(k)&&(S=void 0,(0,o.d8)(k,"1",86400));var _=[];if(!S&&!x()){var Q=new XMLHttpRequest;Q.open("GET","//"+t+"/",!0),Q.withCredentials=!0,Q.onreadystatechange=function(){if(4===Q.readyState&&200===Q.status&&(64===(S=Q.responseText).length||36===S.length?((0,o.d8)(h,S,31536e3),T(S)):37===S.length&&"!"===S[S.length-1]&&(S=S.substr(0,S.length-1),(void 0===(0,o.vQ)(h)||"string"==typeof(S=(0,o.vQ)(h)))&&(0,o.d8)(h,S,31536e3),T(S)),64===S.length||36===S.length))for(;0<_.length;){var e=_.shift();void 0!==e&&e(S)}},Q.send()}return{cmdHp:10,fire:function(e,t){!0!==x()&&(e=e?"&t="+encodeURIComponent(e):"",S?(I(S,e),T(S),t&&t(S)):_.push((function(n){I(n,e),t&&t(n)})))},cm:function(e,n){if(!0!==x()){var i="//"+t+"/cm?c="+e+"&cid="+n;if(S&&(i+="&mp="+S),!y.includes(i)){y.push(i);var r=g+"_"+e;(0,o.d8)(r,"1",86400);var a=new XMLHttpRequest;a.open("GET",i,!0),a.withCredentials=!0,a.send()}}},track:function(e){var t;t="string"==typeof e?e:e.toString(),this.fire(JSON.stringify({tid:t}),(function(e){var n=new URLSearchParams(window.location.search),i=n.get("trackid")||n.get("trackerId");n.delete("trackid"),n.delete("trackerId"),n.set("u",e),"event"!==t&&((new Image).src="//tracker.ssp.hinet.net/i/"+t+"?"+n.toString()),null!==i&&((new Image).src="//tracker.ssp.hinet.net/i/"+i+"?"+n.toString())}))},call:function(e,t){switch(t=null!=t?t:[],e){case"fire":this[e].apply(this,t);break;case"cm":this[e](t[0],t[1]);break;case"track":this[e](t[0])}}}}("t.ssp.hinet.net",i)),function(e){var t=window.setInterval((function(){for(var n,i="__hitagCmdQueue",r=window[i]=null!==(n=window[i])&&void 0!==n?n:[],a=e;0<r.length;){var o=r.shift();"string"==typeof o[0]&&a.call(o[0],Array.prototype.slice.call(o,1))}a.cmdHp-=1,0>a.cmdHp&&window.clearInterval(t)}),500)}(a)})();