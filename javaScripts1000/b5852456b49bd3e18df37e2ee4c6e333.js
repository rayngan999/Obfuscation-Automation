(function e(){var d=window.location.href;var v=window.location.host;var f=["247sports.com","scout.com"];t();function m(e){return e.substring(e.lastIndexOf(".",e.lastIndexOf(".")-1)+1)}function p(e,t){var r=t;var a=new RegExp("[?&]"+e+"=([^&#]*)","i");var n=a.exec(r);return n?n[1]:null}function b(t){return Object.keys(t).sort().map(function(e){return[e,t[e]].join("=")}).join("&")}function t(){var e=encodeURIComponent(v);var t=document.querySelectorAll('[data-js="saagEmbed"]');var r=p("env",d);var a=r=="stage"?"stage.fly.cbssports.com":r=="qa"?"qa.fly.cbssports.com":"embed.cbssports.com";var n=f.indexOf(m(v))>-1?1:0;if(t){var o;for(o=0;o<t.length;o++){var s=document.createElement("iframe");var c=t[o].getAttribute("data-league");var i={arena:c,setTorqEnv:"production",setDevice:"desktop",embedPageUrl:e,supportsAllGames:n};var u="//"+a+"/widgets/scores-at-a-glance/?"+b(i);var l="height:56px; width:100%; border:0;";s.setAttribute("src",u);s.setAttribute("style",l);t[o].appendChild(s)}}else{return false}}})();