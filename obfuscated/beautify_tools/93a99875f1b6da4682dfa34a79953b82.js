eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('!j(e,t,a){"4K 4L";"4T"!=2f X&&"j"==2f 4Q&&4Q.8S?4Q(a):"4T"!=2f 2A&&2A.2y?2A.2y=a():t.2y?t.2y=a():t.95=a()}(0,2L,j(){"4K 4L";z d=j(e,t){e=[e[0]>>>16,1c&e[0],e[1]>>>16,1c&e[1]],t=[t[0]>>>16,1c&t[0],t[1]>>>16,1c&t[1]];z a=[0,0,0,0];q a[3]+=e[3]+t[3],a[2]+=a[3]>>>16,a[3]&=1c,a[2]+=e[2]+t[2],a[1]+=a[2]>>>16,a[2]&=1c,a[1]+=e[1]+t[1],a[0]+=a[1]>>>16,a[1]&=1c,a[0]+=e[0]+t[0],a[0]&=1c,[a[0]<<16|a[1],a[2]<<16|a[3]]},g=j(e,t){e=[e[0]>>>16,1c&e[0],e[1]>>>16,1c&e[1]],t=[t[0]>>>16,1c&t[0],t[1]>>>16,1c&t[1]];z a=[0,0,0,0];q a[3]+=e[3]*t[3],a[2]+=a[3]>>>16,a[3]&=1c,a[2]+=e[2]*t[3],a[1]+=a[2]>>>16,a[2]&=1c,a[2]+=e[3]*t[2],a[1]+=a[2]>>>16,a[2]&=1c,a[1]+=e[1]*t[3],a[0]+=a[1]>>>16,a[1]&=1c,a[1]+=e[2]*t[2],a[0]+=a[1]>>>16,a[1]&=1c,a[1]+=e[3]*t[1],a[0]+=a[1]>>>16,a[1]&=1c,a[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],a[0]&=1c,[a[0]<<16|a[1],a[2]<<16|a[3]]},f=j(e,t){q 32===(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},h=j(e,t){q 0===(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},m=j(e,t){q[e[0]^t[0],e[1]^t[1]]},T=j(e){q e=m(e,[0,e[0]>>>1]),e=g(e,[9e,9F]),e=m(e,[0,e[0]>>>1]),e=g(e,[9P,9S]),e=m(e,[0,e[0]>>>1])},l=j(e,t){t=t||0;1o(z a=(e=e||"").1a%16,n=e.1a-a,r=[0,t],i=[0,t],o=[0,0],l=[0,0],s=[9h,9x],c=[7Z,80],u=0;u<n;u+=16)o=[1b&e.K(u+4)|(1b&e.K(u+5))<<8|(1b&e.K(u+6))<<16|(1b&e.K(u+7))<<24,1b&e.K(u)|(1b&e.K(u+1))<<8|(1b&e.K(u+2))<<16|(1b&e.K(u+3))<<24],l=[1b&e.K(u+12)|(1b&e.K(u+13))<<8|(1b&e.K(u+14))<<16|(1b&e.K(u+15))<<24,1b&e.K(u+8)|(1b&e.K(u+9))<<8|(1b&e.K(u+10))<<16|(1b&e.K(u+11))<<24],o=g(o,s),o=f(o,31),o=g(o,c),r=m(r,o),r=f(r,27),r=d(r,i),r=d(g(r,[0,5]),[0,86]),l=g(l,c),l=f(l,33),l=g(l,s),i=m(i,l),i=f(i,31),i=d(i,r),i=d(g(i,[0,5]),[0,8i]);5g(o=[0,0],l=[0,0],a){1k 15:l=m(l,h([0,e.K(u+14)],48));1k 14:l=m(l,h([0,e.K(u+13)],40));1k 13:l=m(l,h([0,e.K(u+12)],32));1k 12:l=m(l,h([0,e.K(u+11)],24));1k 11:l=m(l,h([0,e.K(u+10)],16));1k 10:l=m(l,h([0,e.K(u+9)],8));1k 9:l=m(l,[0,e.K(u+8)]),l=g(l,c),l=f(l,33),l=g(l,s),i=m(i,l);1k 8:o=m(o,h([0,e.K(u+7)],56));1k 7:o=m(o,h([0,e.K(u+6)],48));1k 6:o=m(o,h([0,e.K(u+5)],40));1k 5:o=m(o,h([0,e.K(u+4)],32));1k 4:o=m(o,h([0,e.K(u+3)],24));1k 3:o=m(o,h([0,e.K(u+2)],16));1k 2:o=m(o,h([0,e.K(u+1)],8));1k 1:o=m(o,[0,e.K(u)]),o=g(o,s),o=f(o,31),o=g(o,c),r=m(r,o)}q r=m(r,[0,e.1a]),i=m(i,[0,e.1a]),r=d(r,i),i=d(i,r),r=T(r),i=T(i),r=d(r,i),i=d(i,r),("2W"+(r[0]>>>0).1X(16)).2M(-8)+("2W"+(r[1]>>>0).1X(16)).2M(-8)+("2W"+(i[0]>>>0).1X(16)).2M(-8)+("2W"+(i[1]>>>0).1X(16)).2M(-8)},e={4G:1p,3M:{5p:bV,6K:!0},1G:{3U:"4X",3k:"6J/bR/bQ.6H",7E:[],5c:!1},1r:{4N:!0},1u:{4B:[/bW/i],6N:!1},6T:[],7L:{2Y:!0,7e:!0,2s:!0,6Z:!0},1d:"3h 5u",2w:"c4",3I:"bY"},c=j(e,t){if(3C.1Q.3r&&e.3r===3C.1Q.3r)e.3r(t);1E if(e.1a===+e.1a)1o(z a=0,n=e.1a;a<n;a++)t(e[a],a,e);1E 1o(z r in e)e.71(r)&&t(e[r],r,e)},s=j(e,n){z r=[];q 1p==e?r:3C.1Q.2o&&e.2o===3C.1Q.2o?e.2o(n):(c(e,j(e,t,a){r.V(n(e,t,a))}),r)},a=j(){q Q.3H&&Q.3H.2Y},n=j(e){z t=[X.1r.3z,X.1r.4t];q e.1r.4N&&t.4R().6S(),t},r=j(e){if(X.1r.4v&&X.1r.3R){z t=[X.1r.3R,X.1r.4v];q e.1r.4N&&t.4R().6S(),t}q e.1d},i=j(e){if(1p==Q.1u)q e.1d;1o(z t=[],a=0,n=Q.1u.1a;a<n;a++)Q.1u[a]&&t.V(Q.1u[a]);q u(e)&&(t=t.4R(j(e,t){q e.2H>t.2H?1:e.2H<t.2H?-1:0})),s(t,j(e){z t=s(e,j(e){q[e.7j,e.bw]});q[e.2H,e.br,t]})},o=j(t){z e=[];if(2a.5r&&2a.5r(X,"4C")||"4C"in X){e=s(["bJ.5T","bD.bE","6k.6k","6r.6r.1","6s.6s","6u.bF","6u.c8","5T.cE","6e.6e","cz.cN.1","2z","2z.2z(5Y) 6f 34 (32-6g)","5U.5U(5Y) 6f 34 (32-6g)","cI.cw","6q.6q","c9.cr","5m.5m","cm.cn","54.54","co.bq","51.2z 57 34","51.2z 57 34.1"],j(e){1m{q 1A X.4C(e),e}1i(e){q t.2w}})}1E e.V(t.1d);q Q.1u&&(e=e.3A(i(t))),e},u=j(e){1o(z t=!1,a=0,n=e.1u.4B.1a;a<n;a++){z r=e.1u.4B[a];if(Q.1S.6L(r)){t=!0;an}}q t},p=j(t){1m{q!!X.4D}1i(e){q t.2w}},v=j(t){1m{q!!X.4z}1i(e){q t.2w}},A=j(t){1m{q!!X.ao}1i(e){q t.2w}},S=j(e){q Q.4a?Q.4a:e.1d},C=j(e){q Q.7m||e.1d},B=j(e){q Q.3i?Q.3i:e.1d},w=j(e){q Q.2s?Q.2s:Q.5G?Q.5G:X.2s?X.2s:e.1d},t=j(){z t,e=0;1v 0!==Q.4s?e=Q.4s:1v 0!==Q.4p&&(e=Q.4p);1m{1l.az("a9"),t=!0}1i(e){t=!1}q[e,t,"5v"in X]},y=j(e){z t=[],a=1l.1R("1W");a.3z=ah,a.4t=6R,a.1f.ai="b7";z n=a.2J("2d");q n.6X(0,0,10,10),n.6X(2,2,6,6),t.V("1W bn:"+(!1===n.bg(5,5,"7y")?"7H":"4w")),n.bh="bi",n.2e="#b4",n.b3(ag,1,62,20),n.2e="#aj",e.ak?n.2Z="5L 1I":n.2Z="5L 4w-aE-2Z-am",n.6j("5j 7I 5b 5h 53, Ã°ÂÂÂ",2,15),n.2e="cy(c0, 9m, 0, 0.2)",n.2Z="92 1I",n.6j("5j 7I 5b 5h 53, Ã°ÂÂÂ",4,45),n.as="au",n.2e="3D(1b,0,1b)",n.3P(),n.2E(50,50,50,0,2*1Z.2G,!0),n.3O(),n.3q(),n.2e="3D(0,1b,1b)",n.3P(),n.2E(5E,50,50,0,2*1Z.2G,!0),n.3O(),n.3q(),n.2e="3D(1b,1b,0)",n.3P(),n.2E(75,5E,50,0,2*1Z.2G,!0),n.3O(),n.3q(),n.2e="3D(1b,0,1b)",n.2E(75,75,75,0,2*1Z.2G,!0),n.2E(75,75,25,0,2*1Z.2G,!0),n.3q("7y"),a.3Q&&t.V("1W fp:"+a.3Q()),t},E=j(){z o,e=j(e){q o.aP(0,0,0,1),o.bH(o.aX),o.aW(o.aV),o.aU(o.aY|o.aZ),"["+e[0]+", "+e[1]+"]"};if(!(o=F()))q 1p;z l=[],t=o.b2();o.b1(o.7o,t);z a=1A b0([-.2,-.9,0,.4,-.26,0,0,.aT,0]);o.aS(o.7o,a,o.aM),t.7X=3,t.7O=3;z n=o.aL(),r=o.7n(o.aK);o.7i(r,"aJ 3y 35;4i 3y 3l;4n 3y 3J;1v 6O(){3l=35+3J;aN=6P(35,0,1);}"),o.6F(r);z i=o.7n(o.aO);o.7i(i,"3v aR aQ;4i 3y 3l;1v 6O() {bj=6P(3l,0,1);}"),o.6F(i),o.6I(n,r),o.6I(n,i),o.bk(n),o.bl(n),n.7s=o.bo(n,"35"),n.7P=o.bm(n,"3J"),o.bf(n.be),o.b8(n.7s,t.7X,o.6i,!1,0,0),o.b6(n.7P,1,1),o.b5(o.b9,0,t.7O);1m{l.V(o.1W.3Q())}1i(e){}l.V("ba:"+(o.bd()||[]).1s(";")),l.V("Z 7M bc 3z 7x:"+e(o.19(o.bb))),l.V("Z 7M aI 2V 7x:"+e(o.19(o.aH))),l.V("Z ae 2l:"+o.19(o.ad)),l.V("Z ac:"+(o.ab().af?"7H":"4w")),l.V("Z aa 2l:"+o.19(o.a3)),l.V("Z a2 2l:"+o.19(o.a1)),l.V("Z a0 2l:"+o.19(o.a4)),l.V("Z 1y a5:"+j(e){z t=e.2C("a8")||e.2C("a7")||e.2C("a6");if(t){z a=e.19(t.al);q 0===a&&(a=2),a}q 1p}(o)),l.V("Z 1y aB 2B 4f 4g:"+o.19(o.aA)),l.V("Z 1y ay 2o 2B 2V:"+o.19(o.aC)),l.V("Z 1y aD 4n 4o:"+o.19(o.aG)),l.V("Z 1y aF 1D 2V:"+o.19(o.ax)),l.V("Z 1y 2B 4f 4g:"+o.19(o.aw)),l.V("Z 1y 2B 2V:"+o.19(o.ap)),l.V("Z 1y 4i 4o:"+o.19(o.aq)),l.V("Z 1y 4h ar:"+o.19(o.av)),l.V("Z 1y 4h 2B 4f 4g:"+o.19(o.bp)),l.V("Z 1y 4h 4n 4o:"+o.19(o.cl)),l.V("Z 1y cq cu:"+e(o.19(o.ct))),l.V("Z cs 2l:"+o.19(o.ck)),l.V("Z 6h:"+o.19(o.cj)),l.V("Z cd 2X 3b:"+o.19(o.cb)),l.V("Z ca 2l:"+o.19(o.ce)),l.V("Z 6m:"+o.19(o.cf)),l.V("Z 3b:"+o.19(o.4M));1m{z s=o.2C("5Z");s&&(l.V("Z 6l 6m:"+o.19(s.5V)),l.V("Z 6l 6h:"+o.19(s.5P)))}1i(e){}q o.6v&&c(["6i","ci"],j(i){c(["ch","cg"],j(r){c(["cv","cK","cJ"],j(n){c(["3v","cL","cM"],j(e){z t=o.6v(o[r+"cP"],o[n+"2N"+i])[e];"3v"!==e&&(e="3v "+e);z a=["Z ",r.1Y()," cO ",n.1Y()," ",i.1Y()," ",e,":",t].1s("");l.V(a)})})})}),l},M=j(){1m{z e=F(),t=e.2C("5Z");q e.19(t.5V)+"~"+e.19(t.5P)}1i(e){q 1p}},x=j(){z e=1l.1R("3o");e.7T="&cH;";z t=!(e.cG="60");1m{1l.2j.2k(e),t=0===1l.cA("60")[0].3G,1l.2j.3L(e)}1i(e){t=!1}q t},O=j(){if(1v 0!==Q.61)1m{if(Q.61[0].6b(0,2)!==Q.2X.6b(0,2))q!0}1i(e){q!0}q!1},b=j(){q X.1r.3z<X.1r.4v||X.1r.4t<X.1r.3R},P=j(){z e,t=Q.1S.1Y(),a=Q.cx,n=Q.3i.1Y();if(e=0<=t.W("cB cC")?"1J 2P":0<=t.W("2D")?"1J":0<=t.W("5R")?"3F":0<=t.W("2T")||0<=t.W("cF")?"4q":0<=t.W("4e")||0<=t.W("4d")?"3E":0<=t.W("2S")?"4r":"1M",("5v"in X||0<Q.4s||0<Q.4p)&&"1J 2P"!==e&&"3F"!==e&&"3E"!==e&&"1M"!==e)q!0;if(1v 0!==a){if(0<=(a=a.1Y()).W("2D")&&"1J"!==e&&"1J 2P"!==e)q!0;if(0<=a.W("2T")&&"4q"!==e&&"3F"!==e)q!0;if(0<=a.W("2S")&&"4r"!==e&&"3E"!==e)q!0;if((-1===a.W("2D")&&-1===a.W("2T")&&-1===a.W("2S"))!=("1M"===e))q!0}q 0<=n.W("2D")&&"1J"!==e&&"1J 2P"!==e||((0<=n.W("2T")||0<=n.W("5R")||0<=n.W("cD"))&&"4q"!==e&&"3F"!==e||((0<=n.W("2S")||0<=n.W("4d")||0<=n.W("c7")||0<=n.W("4e"))&&"4r"!==e&&"3E"!==e||((n.W("2D")<0&&n.W("2T")<0&&n.W("2S")<0&&n.W("4e")<0&&n.W("4d")<0)!==("1M"===e)||1v 0===Q.1u&&"1J"!==e&&"1J 2P"!==e)))},L=j(){z e,t=Q.1S.1Y(),a=Q.bC;if(("3Z"===(e=0<=t.W("bG")?"3V":0<=t.W("9Z")||0<=t.W("bK")?"3W":0<=t.W("bI")?"3Z":0<=t.W("bB")?"30":0<=t.W("bA")?"3S 3T":"1M")||"30"===e||"3W"===e)&&"bu"!==a)q!0;z n,r=bt.1X().1a;if(37===r&&"30"!==e&&"3V"!==e&&"1M"!==e)q!0;if(39===r&&"3S 3T"!==e&&"1M"!==e)q!0;if(33===r&&"3Z"!==e&&"3W"!==e&&"1M"!==e)q!0;1m{5F"a"}1i(e){1m{e.bs(),n=!0}1i(e){n=!1}}q n&&"3V"!==e&&"1M"!==e},I=j(){z e=1l.1R("1W");q!(!e.2J||!e.2J("2d"))},k=j(){if(!I())q!1;z e=F();q!!X.bv&&!!e},R=j(){q"1F 3S 3T"===Q.7D||!("bz"!==Q.7D||!/by/.bx(Q.1S))},D=j(){q 1v 0!==X.41},N=j(){q X.41.bL("9.0.0")},2N=j(t,e){z a="bM";X[a]=j(e){t(e)};z n,r,i=e.1G.3U;(r=1l.1R("3o")).c1("id",n.1G.3U),1l.2j.2k(r);z o={bZ:a};X.41.c2(e.1G.3k,i,"1","1","9.0.0",!1,o,{c3:"c6",c5:"5q"},{})},F=j(){z e=1l.1R("1W"),t=1p;1m{t=e.2J("Z")||e.2J("bX-Z")}1i(e){}q t||(t=1p),t},G=[{J:"1S",Y:j(e){e(Q.1S)}},{J:"42",Y:j(e,t){e(1p==Q.42?t.1d:Q.42)}},{J:"2X",Y:j(e,t){e(Q.2X||Q.bP||Q.bO||Q.bN||t.1d)}},{J:"77",Y:j(e,t){e(X.1r.77||t.1d)}},{J:"7f",Y:j(e,t){e(Q.7f||t.1d)}},{J:"7e",Y:j(e,t){e(X.bS||t.1d)}},{J:"4a",Y:j(e,t){e(S(t))}},{J:"bU",Y:j(e,t){e(n(t))}},{J:"bT",Y:j(e,t){e(r(t))}},{J:"cQ",Y:j(e){e((1A 9o).84())}},{J:"83",Y:j(e,t){X.4b&&X.4b.7p?e((1A X.4b.7p).8r().8a):e(t.1d)}},{J:"4D",Y:j(e,t){e(p(t))}},{J:"4z",Y:j(e,t){e(v(t))}},{J:"5I",Y:j(e,t){e(A(t))}},{J:"4y",Y:j(e){e(!(!1l.2j||!1l.2j.4y))}},{J:"4A",Y:j(e){e(!!X.4A)}},{J:"7m",Y:j(e,t){e(C(t))}},{J:"3i",Y:j(e,t){e(B(t))}},{J:"2s",Y:j(e,t){e(w(t))}},{J:"1u",Y:j(e,t){R()?t.1u.6N?e(t.3I):e(o(t)):e(i(t))}},{J:"1W",Y:j(e,t){I()?e(y(t)):e(t.1d)}},{J:"Z",Y:j(e,t){k()?e(E()):e(t.1d)}},{J:"8c",Y:j(e){k()?e(M()):e()}},{J:"8g",Y:j(e){e(x())}},{J:"8p",Y:j(e){e(O())}},{J:"8o",Y:j(e){e(b())}},{J:"8k",Y:j(e){e(P())}},{J:"88",Y:j(e){e(L())}},{J:"8h",Y:j(e){e(t())}},{J:"1G",Y:j(e,t){z u=["8j","8q-7u","7u"],d=["8l 5J","1I","1I 46","1I 85","1I 17","1I 82","1I 87 17 1C","1I 6A 1n","81 7Y 1g 5J","8n 8d","8b 2I 5O","8f","59","59 1Z","3t","3t 1w","3t 8m","5n 1g","5n 1g 1n","8e","5X","5X 2b","89","9Y","66","66 9u","9t","1T 9s","1T 9r","1T 9v","1T 9w","9A 9z","1T 9y","1T 1g","1T 1g 43","1T 1g 6A","1F 1g 3c","9q","9p 9i","1n 1w","1n 9g","1n 9f","1n 5A 1g 3c","1n 1g 3c","1n 3c","6o","6o 2v","5N","5N 9j","2g 9k","2g 1B","2g 1O","2g 1O 2p","2g 1O 8s","2g 1O 7q","9n","3g","3g 2b 3w","3g 2b 3w 9l","9B 1n","9C","47","47 2","47 3"];t.1G.5c&&(d=d.3A(["9R 17 1t 2p","9Q 5M 2c","5D 9T 2v","9U 9X","5D 9W 2v","9V 3a","9O","5K 2u 1C","5K 4l","9N","9G H","5B 43","5B 43 1t","9E 3f H","9D","9H 2b","9I","9M 9L","9K","44 9J","44 9d 8I","44 8H 1w 8G","3m 8F","8J","8K 2v","8O H","8N 6w H","7w 2m H","7w 3f H","8M","8L","8E","5W 1P 1L","8D 1w","8w 3f H","7A","7A 2I 8v","8u","8t","8x 1U","8y 93","8C","8B 17","8A","8z 2m H","70 1g 3a","70 1g 3a 5y","8P 17 1t","8Q H","97 H","96 94","98","99 1q","9c 7v","1U 72","1U 72 9b","1U 72 9a","1U 17","1U 17 46","1U 17 1t","1U 17 65 91","8U 7q 7","8T","78 4k","78 4k 1q","8R 28 H","8V 1C","8W","90 2b","8Z","8Y 1B 17","8X 3a","eu 17","jp","jk","ic H","ih","ij","jt","79 jg","79 3g","7h","7h jh","hE","hO","7r 28 H","7r H","hS","hC 2m H","hk","74","74 1t","he H","hd","hf 17","hx","hy 46","3s","3s 1w","3s 1w 1C","3s 1w 2p","hz 28 H","hq","ht 2b","hu","hs","hr","hv","hw 17","hA","hp","ho","hh hg hi","hj","hn","hm-hl","hB","hT","hR","hQ","hU","hV","hZ","hY 1B 1q","hX","4Z hW hP H","hH 17","hG H","3n 1C 1q","3n 5y 1q","3n 2p 1q","3n 4l 1q","hF","6E","6E hD","hI","hJ 28 H","hN","hM 6B","hL","hK","hc 17 2p","hb","gE","gD","gC gA H","gB","gF 1B","gG 1B 17","gK 2m H","gJ","gI","2R","2R 2m H","2R 2h H","2R 3f H","2R gH H","gz H","gy","gr H","gq","gp 7N","49 H","49 gn H","49 2h H","5e 5l 2h H","5e 5l go H","gs","2t 1g","2t 1g 17","2t 1g 17 1t","2t 1g 17 gt 1t 1C","2t 1g 5f 1C","2t 1g 5f 1C 1t","gx","gw 17 2u 1t","5i","5i gu","6n 2I 5O","6n gL","gM H","h4 H","h3 1P 1L","cR","h2","h0","h1","h5 1L","h6","ha 3Y 6a","h9","h8","5Q h7","5Q gZ","gY","gR","i1 gQ 3X","67 gP 1w 68","67 7G 68","gN 3X","gO gS 6w H","6t H","6t 2h H","gT 17 gX","4c 28 H","4c H","4c 2h H","gW","gV 3w","gU H","i0","i4","j7 j6","j5","j4 2c","j8","j9","jd","jc 1q","7K 2m H","7K jb H","j3","j2","iZ","iY 1P 1L","jf","7t 28 H","7t H","jr 1O","jq","jx","jv H","ji 1q","jm","iQ 1B","ii 1O","ig","ik","il 1w","iq 17","io","7d","7d 2p","im ie","i5 H","i3","i2 i6","i7 1P 1L","ib 1w","ia","i9","ir","it iJ","iI","iH","iG 1q","iK 17 1B iL","6M","6M 1O","1F iP","1F iN","1F 2b 6Y iM","1F iF","1F 6Y iE","1F ix","1F iv","1F iy 7C","7Q","6V","6V-3x","7Q-3x","7V","7V 7N","7z","7z 6y","iz","7B","7B iD. 20","iC iB 3Y 1q 7v","iA 7C","jo","iu","iw iO","1n i8","1n 7G","1n ip","1n 5A iR","1n 1O 1w","17 2u","jj","jl jn","jw","ju","js","5C 1w","5C je","j0 H","5H 5M","5H 3Y","j1","iX","iW","iS A iT","2I 3t","2I 4Z 3X 17","5d","5d H","iU","iV 1P 1L","ja","gv H","gl 1B 17","e2","e1","e0 2c","dY","6z","6z 6B 17","dZ","e3","e4 e8","e7","5S","5S-3x","e6 e5","65","dX H","dW 2c","dO","dN H","dM","dK","dL 6a","dP","dQ 28 H","3u","3u 1t","3u 2u 1C","dV","3w","dU dT","dR dS 2c","e9 2c","ea","1B","1B 17 1C","et","4u","4u H","4u es H","er H","ep","eq 5W","gm 1w","ev","ez","ey","ex","6x 3m","6x 3m 6y","6C","6C-3x","ew 1P 1L","eo 3u","en","ef ee","ed 1q","eb ec","eg","eh 2h H","em H","el","ek","ei","ej","dJ","dI 6D H","da d9 H","d8","d6 2c","d7","db 1P 1L","dc","dg","df 1P 1L","de 1g 1q","dd","d5","d4 3m","cW","cV 2v","cU","cS","cT","4j 4m 17","4j 4m 17 1t","4j 4m 17 1t 2u 1C","cX H","cY","4x","4x d3 55 4l","4x 1t","d2","d1","cZ","d0","dh 4k 1q","di","dB","dA 1B","dz","dx","dy","dC dD","dH H","5z H","5z dG H","dF","6W 6D H","6W dE H","dw"]));d=(d=d.3A(t.1G.7E)).dv(j(e,t){q d.W(e)===t});z a=1l.dn("2j")[0],r=1l.1R("3o"),g=1l.1R("3o"),n={},i={},f=j(){z e=1l.1R("dm");q e.1f.dl="dj",e.1f.7W="-dk",e.1f.do="dp",e.1f.du="22",e.1f.dt="22",e.1f.ds="22",e.1f.dq="dr",e.1f.eA="22",e.1f.eB="3K",e.1f.fN="7W",e.1f.fM="3K",e.1f.fL="3K",e.1f.fJ="22",e.1f.fK="22",e.1f.fO="22",e.7T="fP",e},o=j(e){1o(z t=!1,a=0;a<u.1a;a++)if(t=e[a].7U!==n[u[a]]||e[a].3G!==i[u[a]])q t;q t},l=j(){1o(z e=[],t=0,a=u.1a;t<a;t++){z n=f();n.1f.6U=u[t],r.2k(n),e.V(n)}q e}();a.2k(r);1o(z s=0,c=u.1a;s<c;s++)n[u[s]]=l[s].7U,i[u[s]]=l[s].3G;z h=j(){1o(z e,t,a,n={},r=0,i=d.1a;r<i;r++){1o(z o=[],l=0,s=u.1a;l<s;l++){z c=(e=d[r],t=u[l],a=1v 0,(a=f()).1f.6U="\'"+e+"\',"+t,a);g.2k(c),o.V(c)}n[d[r]]=o}q n}();a.2k(g);1o(z m=[],T=0,p=d.1a;T<p;T++)o(h[d[T]])&&m.V(d[T]);a.3L(g),a.3L(r),e(m)},4I:!0},{J:"6Z",Y:j(t,e){q D()?N()?e.1G.3k?1v 2N(j(e){t(e)},e):t("fT fS.1G.3k"):t("6J 3h fR"):t("6H fQ 3h fI")},4I:!0},{J:"3M",Y:j(a,e){z t=e.3M;if(t.6K&&Q.1S.6L(/fH 11.+fz\\/11.+30/))q a(e.3I);z n=X.fy||X.fx;if(1p==n)q a(e.1d);z r=1A n(1,7l,7l),i=r.fv();i.7j="fw",i.fA.3N(fB,r.7a);z o=r.fG();c([["fF",-50],["fE",40],["fC",12],["fD",-20],["fU",0],["fV",.25]],j(e){1v 0!==o[e[0]]&&"j"==2f o[e[0]].3N&&o[e[0]].3N(e[1],r.7a)}),i.7b(o),o.7b(r.ge),i.gd(0),r.gc();z l=7J(j(){q ga.gb(\'gf gg gk gj. gi gh g9 at 7S://7R.76/73/4X g8 g0 fZ fY: "\'+Q.1S+\'".\'),r.5a=j(){},r=1p,a("fW")},t.5p);r.5a=j(e){z t;1m{fX(l),t=e.g1.g2(0).2M(g7,g6).g5(j(e,t){q e+1Z.g3(t)},0).1X(),i.5o(),o.5o()}1i(e){q 1v a(e)}a(t)}}},{J:"2Y",Y:j(t,e){if(!a())q t(e.1d);Q.3H.2Y().g4(j(e){t(e.2o(j(e){q"id="+e.fu+";ft="+e.eU+";"+e.eT+";"+e.eS}))}).1i(j(e){t(e)})}}],U=j(e){5F 1A eQ("\'1A eR()\' is eV, eW 7S://7R.76/73/4X#f0-eZ-eY-eX-eP-6R")};q U.4E=j(a,n){n?a||(a={}):(n=a,a={}),j(e,t){if(1p==t)q;z a,n;1o(n in t)1p==(a=t[n])||2a.1Q.71.eO(e,n)||(e[n]=a)}(a,e),a.4H=a.6T.3A(G);z r={4F:[],4J:j(e,t){"j"==2f a.4G&&(t=a.4G(e,t)),r.4F.V({J:e,1h:t})}},i=-1,o=j(e){if((i+=1)>=a.4H.1a)n(r.4F);1E{z t=a.4H[i];if(a.7L[t.J])o(!1);1E{if(!e&&t.4I)q i-=1,1v 7J(j(){o(!0)},1);1m{t.Y(j(e){r.4J(t.J,e),o(!1)},a)}1i(e){r.4J(t.J,1N(e)),o(!1)}}}};o(!1)},U.eG=j(a){q 1A eF(j(e,t){U.4E(a,e)})},U.eE=j(i,o){q 1p==o&&(o=i,i={}),U.4E(i,j(e){1o(z t=[],a=0;a<e.1a;a++){z n=e[a];if(n.1h===(i.1d||"3h 5u"))t.V({J:n.J,1h:"eC"});1E if("1u"===n.J)t.V({J:"1u",1h:s(n.1h,j(e){z t=s(e[2],j(e){q e.1s?e.1s("~"):e}).1s(",");q[e[0],e[1],t].1s("::")})});1E if(-1!==["1W","Z"].W(n.J))t.V({J:n.J,1h:n.1h.1s("~")});1E if(-1!==["4D","4z","5I","4y","4A"].W(n.J)){if(!n.1h)eD;t.V({J:n.J,1h:1})}1E n.1h?t.V(n.1h.1s?{J:n.J,1h:n.1h.1s(";")}:n):t.V({J:n.J,1h:n.1h})}z r=l(s(t,j(e){q e.1h}).1s("~~~"),31);o(r,t)})},U.eH=l,U.4M="2.1.0",U});(j(1z){\'4K 4L\';z 6p=1z.1K;z 3b="2.1.9";z 1D;if(2f 2A!==\'4T\'&&2A.2y){1m{1D=eI(\'1D\').eN}1i(eM){}}z 2i=\'eL+/\';z 2F=j(4U){z t={};1o(z i=0,l=4U.1a;i<l;i++)t[4U.1H(i)]=i;q t}(2i);z 1e=1N.1e;z 6d=j(c){if(c.1a<2){z cc=c.K(0);q cc<23?c:cc<eJ?(1e(eK|(cc>>>6))+1e(23|(cc&1x))):(1e(f1|((cc>>>12)&5s))+1e(23|((cc>>>6)&1x))+1e(23|(cc&1x)))}1E{z cc=52+(c.K(0)-58)*f2+(c.K(1)-5t);q(1e(fl|((cc>>>18)&5k))+1e(23|((cc>>>12)&1x))+1e(23|((cc>>>6)&1x))+1e(23|(cc&1x)))}};z 6c=/[\\fk-\\fj][\\fh-\\fi]|[^\\fm-\\fn]/g;z 3d=j(u){q u.1V(6c,6d)};z 69=j(29){z 2K=[0,2,1][29.1a%3],2x=29.K(0)<<16|((29.1a>1?29.K(1):0)<<8)|((29.1a>2?29.K(2):0)),2O=[2i.1H(2x>>>18),2i.1H((2x>>>12)&63),2K>=2?\'=\':2i.1H((2x>>>6)&63),2K>=1?\'=\':2i.1H(2x&63)];q 2O.1s(\'\')};z 2n=1z.2n?j(b){q 1z.2n(b)}:j(b){q b.1V(/[\\s\\S]{1,3}/g,69)};z 4V=1D?j(u){q(u.38===1D.38?u:1A 1D(u)).1X(\'7g\')}:j(u){q 2n(3d(u))};z 21=j(u,3p){q!3p?4V(1N(u)):4V(1N(u)).1V(/[+\\/]/g,j(3j){q 3j==\'+\'?\'-\':\'2N\'}).1V(/=/g,\'\')};z 4O=j(u){q 21(u,2U)};z 5w=1A fs([\'[\\fr-\\fq][\\4Y-\\4W]\',\'[\\fo-\\fg][\\4Y-\\4W]{2}\',\'[\\ff-\\f7][\\4Y-\\4W]{3}\'].1s(\'|\'),\'g\');z 5x=j(1j){5g(1j.1a){1k 4:z cp=((5k&1j.K(0))<<18)|((1x&1j.K(1))<<12)|((1x&1j.K(2))<<6)|(1x&1j.K(3)),4S=cp-52;q(1e((4S>>>10)+58)+1e((4S&f6)+5t));1k 3:q 1e(((5s&1j.K(0))<<12)|((1x&1j.K(1))<<6)|(1x&1j.K(2)));f5:q 1e(((f3&1j.K(0))<<6)|(1x&1j.K(1)))}};z 3e=j(b){q b.1V(5w,5x)};z 7c=j(1j){z 2q=1j.1a,2K=2q%4,n=(2q>0?2F[1j.1H(0)]<<18:0)|(2q>1?2F[1j.1H(1)]<<12:0)|(2q>2?2F[1j.1H(2)]<<6:0)|(2q>3?2F[1j.1H(3)]:0),2O=[1e(n>>>16),1e((n>>>8)&6G),1e(n&6G)];2O.1a-=[0,0,2,1][2K];q 2O.1s(\'\')};z 2r=1z.2r?j(a){q 1z.2r(a)}:j(a){q a.1V(/[\\s\\S]{1,4}/g,7c)};z 7k=1D?j(a){q(a.38===1D.38?a:1A 1D(a,\'7g\')).1X()}:j(a){q 3e(2r(a))};z 2Q=j(a){q 7k(1N(a).1V(/[-2N]/g,j(3j){q 3j==\'-\'?\'+\':\'/\'}).1V(/[^A-f4-f8-9\\+\\/]/g,\'\'))};z 4P=j(){z 1K=1z.1K;1z.1K=6p;q 1K};1z.1K={4M:3b,2r:2r,2n:2n,7F:2Q,6Q:21,3d:3d,21:21,4O:4O,3e:3e,2Q:2Q,4P:4P};if(2f 2a.3B===\'j\'){z 36=j(v){q{1h:v,f9:5q,fe:2U,fd:2U}};1z.1K.fc=j(){2a.3B(1N.1Q,\'7F\',36(j(){q 2Q(2L)}));2a.3B(1N.1Q,\'6Q\',36(j(3p){q 21(2L,3p)}));2a.3B(1N.1Q,\'fa\',36(j(){q 21(2L,2U)}))}}if(1z[\'fb\']){1K=1z.1K}})(2L);',62,1212,'|||||||||||||||||||function|||||||return|||||||||var||||||||BT||key|charCodeAt||||||navigator|||||push|indexOf|window|getData|webgl||||||||MT||getParameter|length|255|65535|NOT_AVAILABLE|fromCharCode|style|Sans|value|catch|cccc|case|document|try|MS|for|null|ITC|screen|join|Condensed|plugins|void|Gothic|0x3f|max|global|new|Script|Bold|buffer|else|Microsoft|fonts|charAt|Arial|Windows|Base64|MN|Other|String|UI|Sangam|prototype|createElement|userAgent|Lucida|Bodoni|replace|canvas|toString|toLowerCase|Math||encode|normal|0x80|||||Bd|ccc|Object|New|LET||fillStyle|typeof|Segoe|Lt|b64chars|body|appendChild|bits|Bk|btoa|map|Light|len|atob|doNotTrack|Gill|Extra|PRO|ERROR|ord|exports|RealPlayer|module|texture|getExtension|win|arc|b64tab|PI|name|Old|getContext|padlen|this|slice|_|chars|Phone|decode|Futura|mac|linux|true|size|00000000|language|enumerateDevices|font|Safari||||Control|attrVertex|noEnum||constructor||FB|version|Serif|utob|btou|Md|Times|not|platform|m0|swfPath|varyinTexCoordinate|Arabic|Eras|div|urisafe|fill|forEach|Copperplate|Century|Rockwell|precision|Roman|ExtB|vec2|width|concat|defineProperty|Array|rgb|iOS|Android|offsetHeight|mediaDevices|EXCLUDED|uniformOffset|none|removeChild|audio|setValueAtTime|closePath|beginPath|toDataURL|availHeight|Internet|Explorer|swfContainerId|Firefox|Opera|Text|Solid|Chrome||swfobject|webdriver|Typewriter|Apple||Black|Wingdings||Geometr231|hardwareConcurrency|Intl|Incised901|ipad|iphone|image|units|vertex|varying|Tw|Hand|Medium|Cen|uniform|vectors|msMaxTouchPoints|Linux|Mac|maxTouchPoints|height|Serifa|availWidth|no|Univers|addBehavior|localStorage|openDatabase|sortPluginsFor|ActiveXObject|sessionStorage|get|data|preprocessor|components|pauseBefore|addPreprocessedComponent|use|strict|VERSION|detectScreenOrientation|encodeURI|noConflict|define|sort|offset|undefined|bin|_encode|xBF|fingerprintjs2|x80|English||rmocx|0x10000|quiz|TDCCtl|||G2|0xD800|Cambria|oncomplete|glyphs|extendedJsFonts|Onyx|GeoSlab|Ultra|switch|vext|GOTHAM|Cwm|0x07|703|ShockwaveFlash|Comic|disconnect|timeout|false|getOwnPropertyDescriptor|0x0f|0xDC00|available|ontouchstart|re_btou|cb_btou|Demi|ZapfHumnst|Reference|American|News|ADOBE|100|throw|msDoNotTrack|Niagara|indexedDb|Mono|Albertus|11pt|Engraved|Palatino|Style|UNMASKED_RENDERER_WEBGL|Heiti|android|PMingLiU|PDF|RealVideo|UNMASKED_VENDOR_WEBGL|Bangla|Courier|tm|WEBGL_debug_renderer_info|adsbox|languages||||Poster|Helvetica|Hiragino|ProN|cb_encode|Italic|substr|re_utob|cb_utob|QuickTime|ActiveX|bit|renderer|FLOAT|fillText|AgControl|unmasked|vendor|Goudy|MYRIAD|_Base64|SWCtl|DevalVRXCtrl|MacromediaFlashPaper|Humanst521|Msxml2|getShaderPrecisionFormat|Cn|Simplified|Fixed|Perpetua|Unicode|Titling|SimSun|BlkEx|Euphemia|compileShader|0xff|swf|attachShader|flash|excludeIOS11|match|Meiryo|excludeIE|main|vec4|toBase64|200|reverse|extraComponents|fontFamily|MingLiU_HKSCS|Zurich|rect|Tai|fontsFlash|Berlin|hasOwnProperty||Valve|Clarendon||com|colorDepth|Bradley|CG|currentTime|connect|cb_decode|Lithograph|pixelRatio|deviceMemory|base64|Chalkboard|shaderSource|type|_decode|44100|cpuClass|createShader|ARRAY_BUFFER|DateTimeFormat|Symbol|Charter|vertexPosAttrib|Kaufmann|serif|TT|AvantGarde|range|evenodd|Miriam|Baskerville|Modern|Baiti|appName|userDefinedFonts|fromBase64|Mincho|yes|fjordbank|setTimeout|Kabel|excludes|aliased|Pro|numItems|offsetUniform|MingLiU|github|https|innerHTML|offsetWidth|Minion|left|itemSize|Vera|1291169091|658871167|Bitstream|Narrow|timezone|getTimezoneOffset|Hebrew|1390208809|Rounded|hasLiedBrowser|Geneva|timeZone|Bookman|webglVendorAndRenderer|Antiqua|Consolas|Calibri|adBlock|touchSupport|944331445|monospace|hasLiedOs|Andale|Schoolbook|Book|hasLiedResolution|hasLiedLanguages|sans|resolvedOptions|Semibold|BatangChe|Batang|Face|BankGothic|Bauer|Bauhaus|Benguiat|Bembo|Bell|Bazooka|Bank|Bandy|Typesetting|Neo|SD|Emoji|ARCHER|ARNO|Ayuthaya|AVENIR|Aurora|Arrus|Bernard|BernhardFashion|Bremen|amd|Boulder|Bookshelf|Britannic|Broadway|Californian|Brush|BrowalliaUPC|Browallia|Compressed|18pt||Caslon|Fossil|Big|BernhardMod|BinnerD|Blackadder|Smallcaps|Oldstyle|BlairMdITC|Color|4283543511|PGothic|Outlook|2277735313|Corsiva|Linotype|Print|PS|204|Tahoma|Date|Monotype|Monaco|Calligraphy|Bright|Impact|Neue|Console|Fax|289559509|Handwriting|GRANDE|LUCIDA|Trebuchet|Verdana|Andalus|AmerType|3981806797|Amazone|Angsana|AngsanaUPC|Chancery|Aparajita|Olive|Antique|Algerian|Aharoni|3301882366|Academy|Abadi|444984403|CASLON|Adobe|Agency|GARAMOND|Garamond|Georgia|opera|green|DEPTH_BITS|depth|BLUE_BITS|GREEN_BITS|anisotropy|MOZ_EXT_texture_filter_anisotropic|WEBKIT_EXT_texture_filter_anisotropic|EXT_texture_filter_anisotropic|TouchEvent|blue|getContextAttributes|antialiasing|ALPHA_BITS|alpha|antialias|125|2e3|display|069|dontUseFakeFontInCanvas|MAX_TEXTURE_MAX_ANISOTROPY_EXT|123|break|indexedDB|MAX_TEXTURE_SIZE|MAX_VARYING_VECTORS|attribs|globalCompositeOperation||multiply|MAX_VERTEX_ATTRIBS|MAX_TEXTURE_IMAGE_UNITS|MAX_RENDERBUFFER_SIZE|cube|createEvent|MAX_COMBINED_TEXTURE_IMAGE_UNITS|combined|MAX_CUBE_MAP_TEXTURE_SIZE|fragment|real|render|MAX_FRAGMENT_UNIFORM_VECTORS|ALIASED_POINT_SIZE_RANGE|point|attribute|VERTEX_SHADER|createProgram|STATIC_DRAW|gl_Position|FRAGMENT_SHADER|clearColor|float|mediump|bufferData|732134444|clear|LEQUAL|depthFunc|DEPTH_TEST|COLOR_BUFFER_BIT|DEPTH_BUFFER_BIT|Float32Array|bindBuffer|createBuffer|fillRect|f60|drawArrays|uniform2f|inline|vertexAttribPointer|TRIANGLE_STRIP|extensions|ALIASED_LINE_WIDTH_RANGE|line|getSupportedExtensions|vertexPosArray|enableVertexAttribArray|isPointInPath|textBaseline|alphabetic|gl_FragColor|linkProgram|useProgram|getUniformLocation|winding|getAttribLocation|MAX_VERTEX_TEXTURE_IMAGE_UNITS|OCX|description|toSource|eval|20030107|WebGLRenderingContext|suffixes|test|Trident|Netscape|trident|safari|productSub|Adodb|Stream|DOMDocument|firefox|enable|chrome|AcroPDF|opr|hasFlashPlayerVersion|___fp_swf_loaded|systemLanguage|browserLanguage|userLanguage|FontList|compiled|devicePixelRatio|availableScreenResolution|screenResolution|1e3|palemoon|experimental|excluded|onReady|102|setAttribute|embedSWF|allowScriptAccess|error|menu|always|ipod|XMLHTTP|Shell|stencil|SHADING_LANGUAGE_VERSION||shading|STENCIL_BITS|VENDOR|FRAGMENT|VERTEX|INT|RENDERER|RED_BITS|MAX_VERTEX_UNIFORM_VECTORS|Skype|Detection|WMPlayer||viewport|UIHelper|red|MAX_VIEWPORT_DIMS|dims|HIGH|Dictionary|oscpu|rgba|QuickTimeCheckObject|getElementsByClassName|windows|phone|pike|PdfCtrl|cros|className|nbsp|Scripting|LOW|MEDIUM|rangeMin|rangeMax|QuickTimeCheck|shader|_SHADER|timezoneOffset|Gulim|Tubular|Tunga|Tristan|TRAJAN|Trajan|TypoUpright|Unicorn|Vani|Vijaya|Vagabond|Utsaah|CE|Traditional|Thonburi|Synchro|System|Sylfaen|XCm|Swiss911|Tamil|Technical|Terminal|Tempus|Telugu|Teletype|Viner|VisualUI|absolute|9999px|position|span|getElementsByTagName|fontSize|72px|lineBreak|auto|letterSpacing|fontWeight|fontStyle|filter|ZWAdobeF|Westminster|WHITNEY|Vrinda|Vladimir|Vivaldi|Wide|Latin|Ex|Zapfino|Dm|ZapfEllipt|Swis721|Subway|Raavi|Rage|Pythagoras|PTBarnum|Pristina|Ravie|Ribbon131|Santa|Fe|Majalla|Sakkal|Rod|PRINCETOWN|PosterBodoni|Pegasus|PetitaBold|Party|Parchment|Papyrus|Pickwick|Plantagenet|Richard|Poor|Playbill|Cherokee|Savoye|Sceptre|Snell|Roundhand|Snap|Fonts|Small|Socket|Souvenir|Storybook|Styllo|Stencil|Steamer|Staccato222|Skia|Sketch|Sherwood|Shonar|ShelleyVolante|Th|SCRIPTINA|Calisto|Shruti|Sinhala|SimHei|SILKSCREEN|Signboard|lineHeight|textTransform|unknown|continue|getV18|Promise|getPromise|x64hash128|require|0x800|0xc0|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|err|Buffer|call|to|Error|Fingerprint|label|kind|groupId|deprecated|see|182|from|guide|upgrade|0xe0|0x400|0x1f|Za|default|0x3FF|xF7|z0|enumerable|toBase64URI|Meteor|extendString|configurable|writable|xF0|xEF|uDC00|uDFFFF|uDBFF|uD800|0xf0|x00|x7F|xE0||xDF|xC0|RegExp|gid|deviceId|createOscillator|triangle|webkitOfflineAudioContext|OfflineAudioContext|Version|frequency|1e4|ratio|reduction|knee|threshold|createDynamicsCompressor|OS|loaded|whiteSpace|wordBreak|textShadow|textDecoration|textAlign|wordSpacing|mmmmmmmmmmlli|object|installed|options|missing|attack|release|audioTimeout|clearTimeout|agent|user|your|renderedBuffer|getChannelData|abs|then|reduce|5e3|4500|with|bug|console|warn|startRendering|start|destination|Audio|fingerprint|report|Please|out|timed|Palace|Showcard|Hv|XBd|Geeza|Gautami|Galliard|Gigi|Ext|BOLD|OzHandicraft|Gloucester|Gisha|Gabriola|FuturaBlack|Blk|FreesiaUPC|Freefrm721|Fransiscan|FrankRuehl|Freestyle|French|ZBlk|FRUTIGER|Fruitger|FrnkGothITC|Stout|GoudyHandtooled|Hoefler|Humanst|Kaku|Tower|Herald|521|Imprint|Informal011|Informal|INCONSOLATA|Shadow|HELV|TC|Gungsuh|GungsuhChe|GulimChe|Gujarati|GoudyOLSt|Gurmukhi|Haettenschweiler|SC|Heather|Harrington|Harlow|Forte|Footlight|Cochin|CloisterBlack|Colonna|LCD|DB|Temp|DELICIOUS|Chiller|SB|DFKai|Denmark|David|Dauphin|Corbel|Coronet|Cornerstone|Cordia|CordiaUPC|Cuckoo|Curlz|Constantia|Cooper|CopperplGoth|DaunPenh|Didot|ChelthmITC|UCAS|Chalkduster|EucrosiaUPC|EngraversGothic|Engravers|EUROSTILE|Exotc350|FONTIN|Fixedsys|Felix|FangSong|Charlesworth|Vivace|DokChampa|DIN|Chaucer|DilleniaUPC|Dotum|DotumChe|111|Elephant|Edwardian|Ebrima|INTERSTATE|High|Maiandra|Magneto|IrisUPC|Lydian|GD|Malayalam|LineDraw|Marigold|Mangal|Malgun|CaslonOpnface||Island||Latha|Castellar|Lao|Centaur|Leelawadee|Letter|Long||LilyUPC|PMincho|Levenim|Marion||Marker|MoolBoran|YaHei|Mrs|Uighur|Yi|Mistral|Mongolian|Lisa|Mona|No|Le|PhagsPa|Matisse|Marlett|Market|Felt|Matura|Capitals|Lue|JhengHei|Eaves|Himalaya|Kunstler|Specialty|OCR|Extended|OPTIMA|Oriya|Nyala|NSimSun|Kannada|Kalinga|NewsGoth|Noteworthy|KaiTi|Kailasa|Jazz|JasmineUPC|Pota|Iskoola|Jenson|Jester|OSAKA|Ult|Juice|Jokerman|GothicMT|Kartika|Omega|SE|Kristen|MUSEO|Candara|MV|Krungthep|Boli|MONO|Calligrapher|KodchiangUPC|Khmer|NEVIS|Cezanne|Narkisim|Korinna|Nadeem|Kokila'.split('|'),0,{}))
