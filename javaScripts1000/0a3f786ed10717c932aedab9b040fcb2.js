!function(){"use strict";var o=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/;function n(o,n,e,a,t,r){n[o]&&(e.push(o),!0!==n[o]&&1!==n[o]||a.push(t+o+"/"+r))}function e(o,n,e,a,t){var r=a+n+"/"+t;require._fileExists(o.toUrl(r+".js"))&&e.push(r)}function a(o,n,e){var t;for(t in n)!n.hasOwnProperty(t)||o.hasOwnProperty(t)&&!e?"object"==typeof n[t]&&(!o[t]&&n[t]&&(o[t]={}),a(o[t],n[t],e)):o[t]=n[t]}define(["module"],function(t){var r=t.config?t.config():{};return{version:"2.0.6",load:function(t,i,l,u){(u=u||{}).locale&&(r.locale=u.locale);var f,s,c,g=o.exec(t),v=g[1],p=g[4],h=g[5],d=p.split("-"),y=[],w={},j="";if(g[5]?f=(v=g[1])+h:(f=t,h=g[4],(p=r.locale)||(p=r.locale="undefined"==typeof navigator?"root":(navigator.languages&&navigator.languages[0]||navigator.language||navigator.userLanguage||"root").toLowerCase()),d=p.split("-")),u.isBuild){for(y.push(f),e(i,"root",y,v,h),s=0;s<d.length;s++)c=d[s],e(i,j+=(j?"-":"")+c,y,v,h);i(y,function(){l()})}else i([f],function(o){var e,t=[];for(n("root",o,t,y,v,h),s=0;s<d.length;s++)e=d[s],n(j+=(j?"-":"")+e,o,t,y,v,h);i(y,function(){var n,e,r;for(n=t.length-1;n>-1&&t[n];n--)!0!==(e=o[r=t[n]])&&1!==e||(e=i(v+r+"/"+h)),a(w,e);l(w)})})}}})}();
//# sourceMappingURL=i18n.js.map