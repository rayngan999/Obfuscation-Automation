<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<script type=text/javascript nonce="0WcYy8IOEHewPe6rZiRT3w">
(function() {

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var f=this||self;var k=function(a,b,c,d){var g=["i1","i2"];b=0==a.nonce%2?[c,b]:[b,c];c=[];for(var e=0;e<g.length;e++)c.push({g:b[e].g,url:h([[a.v,a.H,a.G,a.nonce].join("-"),g[e]],b[e].h,[d])});return c},l=function(a,b){this.Z=a;this.X=!0;this.u=b},m=function(a,b){function c(e){null!=g&&(d=Math.abs(new Date-g),e&&(d*=-1))}var d=-1,g=null;this.W=function(){var e=new Image(0,0);e.onload=function(){c()};e.onerror=e.onabort=function(){c(!0)};g=new Date;e.src=a};this.K=function(){return b};this.$=function(){return d};
this.s=function(){return[b,d].join("=")}},h=function(a,b,c){return["//",a.join("-"),b,c.join("&")].join("")};function n(){}n.id="ad";n.O="//www.google.com/favicon.ico?";n.L="//pagead2.googlesyndication.com/favicon.ico?";n.i=function(a){var b=a.s(),c={g:"g_img_dt",url:n.O+b};b={g:"a_img_dt",url:n.L+b};return 0==a.nonce%2?[c,b]:[b,c]};function p(){}p.id="ds";p.j="-dnssec-nd.gexperiments1.com";p.m="-dnssec-vd.gexperiments2.com";p.l={g:"nd_img_dt",h:p.j};p.o={g:"vd_img_dt",h:p.m};p.i=function(a){return k(a,p.l,p.o,"/dnssec/1.gif")};function q(){}q.id="ds13";q.j="-dnssec-nd.gexperiments1.com";q.m=".valid.gexperiments5.com";q.l={g:"nd_img_dt",h:q.j};q.o={g:"vd_img_dt",h:q.m};q.i=function(a){return k(a,q.l,q.o,"/dnssec/1.gif")};function r(){}r.id="df13";r.j="dnssec-nd.gexperiments1.com";r.C="valid-fixed.gexperiments5.com";r.l={g:"nd_img_dt",h:r.j};r.D={g:"df_img_dt",h:r.C};r.i=function(a){var b=r.l,c=r.D,d="/dnssec/1.gif?"+a.s();b={g:b.g,url:h([],b.h,[d])};c={g:c.g,url:h([],c.h,[d])};return 0==a.nonce%2?[c,b]:[b,c]};function t(){}t.id="dv13";t.m=".valid.gexperiments5.com";t.A=".invalid.gexperiments5.com";t.o={g:"vd_img_dt",h:t.m};t.B={g:"bd_img_dt",h:t.A};t.i=function(a){return k(a,t.o,t.B,"/dnssec/1.gif")};function u(){}u.id="df";u.j="dnssec-nd.gexperiments1.com";u.C="dnssec-df.gexperiments4.com";u.l={g:"nd_img_dt",h:u.j};u.D={g:"df_img_dt",h:u.C};u.i=function(a){var b=u.l,c=u.D,d="/dnssec/1.gif?"+a.s();b={g:b.g,url:h([],b.h,[d])};c={g:c.g,url:h([],c.h,[d])};return 0==a.nonce%2?[c,b]:[b,c]};function v(){}v.id="dv";v.m="-bogus-dnssec-vd.gexperiments2.com";v.A="-bogus-dnssec-bd.gexperiments3.com";v.o={g:"vd_img_dt",h:v.m};v.B={g:"bd_img_dt",h:v.A};v.i=function(a){return k(a,v.o,v.B,"/dnssec/1.gif")};function w(){}w.id="3";w.T="-v6exp3.v4.metric.gstatic.com";w.S="-v6exp3.ds.metric.gstatic.com";w.F="/v6exp3/6.gif";w.V={g:"v4_img_dt",h:w.T};w.M={g:"ds_img_dt",h:w.S};w.i=function(a){return k(a,w.V,w.M,w.F)};var x=function(){};x.id="dz";x.J="-v6exp3-ds.metric.ipv6test.net";x.I="-v6exp3-ds.metric.ipv6test.com";x.F="/v6exp3/6.gif";x.P={g:"4z_img_dt",h:x.J};x.R={g:"dz_img_dt",h:x.I};x.i=function(a){return k(a,x.P,x.R,x.F)};var y=function(){};y.id="dzc";y.U="//dzc"+x.J+"/v6exp3/6.gif?";y.N="//dzc"+x.I+"/v6exp3/6.gif?";y.i=function(a){var b=a.s(),c={g:"4z_img_dt",url:y.U+b};b={g:"dz_img_dt",url:y.N+b};return 0==a.nonce%2?[b,c]:[c,b]};var z=[new l(.1,n),new l(1,q),new l(1,r),new l(1,t),new l(1,p),new l(1,u),new l(1,v),new l(2,y),new l(4,x),new l(87.9,w)],B=function(a,b,c){this.v=String(a);"p"!=this.v.charAt(0)&&(this.v="p"+this.v);this.H=b;this.G=c;b=Math.random();this.nonce=Math.floor(9E5*b);this.nonce+=1E5;a="https:"==document.location.protocol;b*=100;c=z[z.length-1].u;var d,g=0;for(d=0;d<z.length&&!(g+=z[d].Z,g>=b);d++);d<z.length&&(!a||z[d].X)&&(c=z[d].u);this.u=c};
B.prototype.s=function(){return["ipv6exp=",this.u.id,"&p=",this.v,"&rnd=",this.H,"&hmac=",this.G,"&nonce=",this.nonce].join("")};
var C=function(a){for(var b=a.u.i(a),c=0;c<b.length;c++){var d=new m(b[c].url,b[c].g);d.W();b[c]=d}setTimeout(function(){var g=["/gen_204?ipv6exp="+a.u.id,"sentinel=1"];for(var e={Y:[]},A=0;A<b.length;A++)g.push(b[A].s()),e[b[A].K()]=b[A].$(),e.Y.push(b[A].K());g=h([[a.v,a.H,a.G,a.nonce].join("-"),"s1"],"-v6exp3-v4.metric.gstatic.com",g);(new Image(0,0)).src=g},3E4)},D=function(a,b,c){var d=new B(a,b,c);setTimeout(function(){C(d)},1E4)};var E=function(a){a=a||window.location.hostname;var b=a.indexOf(".metric.");(a=-1<b?a.substring(0,b).split("-"):a.split("."))&&3<=a.length&&D(a[0],a[1],a[2])},F=["ipv6iframe","runExperiment"],G=f;F[0]in G||"undefined"==typeof G.execScript||G.execScript("var "+F[0]);for(var H;F.length&&(H=F.shift());)F.length||void 0===E?G=G[H]&&G[H]!==Object.prototype[H]?G[H]:G[H]={}:G[H]=E;

ipv6iframe.runExperiment();
})();
</script>
</body>
</html>
