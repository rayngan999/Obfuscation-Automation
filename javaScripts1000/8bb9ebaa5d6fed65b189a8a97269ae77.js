"use strict";window.freedom.nsPubSub=function(){function n(){var u={};this.register=function(n,e){u[n]=e},this.recover=function(n){return u[n]}}return new function(){var i=new n,d={};this.pub=function(){var n,e,u=1===arguments.length?[arguments[0]]:Array.apply(null,arguments),o=u.shift();if(i.register(o,u),!d[o]||0===d[o].length)return!1;for(e=d[o].length,n=0;n<e;n++)"function"==typeof d[o][n]&&d[o][n].apply(this,u);return!0},this.sub=function(n,e){var u,o,t,r;return d[n]=d[n]||[],u=i.recover(n),(o=d[n].indexOf(e))<0&&(o=d[n].push(e)-1),u&&e&&e.apply(null,u),t=n,r=o,{revoke:function(){try{d[t][r]=null}catch(n){return!1}return!0}}}}}(),window.document.addEventListener("DOMContentLoaded",function(n){window.freedom.nsPubSub.pub("pubsub.dom.content.loaded",n)},!1),window.onload=function(n){window.freedom.nsPubSub.pub("pubsub.window.loaded",n)},window.onresize=function(n){window.freedom.nsPubSub.pub("pubsub.window.resize",n)},window.onpopstate=function(n){window.freedom.nsPubSub.pub("pubsub.history.popstate",n)};