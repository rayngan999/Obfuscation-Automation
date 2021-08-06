<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>ls</title>
	</head>
	<body>
		<script type="text/javascript">
			var ssl = (document.location && document.location.protocol && document.location.protocol=='https:')?1:0;
			var lsdata = '-GREFRESH';
			var lsvalid = null;
			function convert(value) {
				var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_.";
				var eparams = [["iTJ88HdIdmRpQPDiRNAUw9BU02INrlEyX.LnZqCRGDr.e7",2617665511],["KLmBQiPJxP6TLCpdTJJAwVMlwcQYmjYrVdH3G.4hj9H.A7",1389420875],["82uHF2CUICLuz5zV07U8ie._YXrdUXXa6ZpuLjPYYt..h7",1853581100],["WECMLpPv1o9TmaYUAMXi.8CPcRQNFxa8XFBOFri48l3.D7",3331748705],["HsN33Kv.wBHYpoO2eaWcJ2NGQt0YJnzWXyXuzIds49r.X7",975729969],["KYJxS5byZdL.mPQyOBUxojMWc_NIU5GaYf_XMzeTXEP.67",3557073917],["KBAhWyPVtT1upZWG7SXuLWDdce91sBZuBDce6K26Fg3.k7",2464877961],["HsMmBKv.a6GZ04HQWjLtzkN6krJIRZ2Ta.SrzRZ6o2P.m7",3025702171],["W.MnTJSAE.0oqaMciHx4IDN2YcZIQ3XshWNuvC6j4jj.Y7",1784628224],["iSIsSXcYxgVpdAA0RMumztAjIvMN6XGOMlOxLMbNmCb.a7",4210638830],["iBN8wAQ8diQOv4CbMYxuQkMcgDRI7IIZVRSr7y4pYkD.Q7",1699988955],["KM.RmySFBeg9k2ToKCGGu0N6kGhIRSIQyAc_oqZrlnb.47",933712519],["IvUhW_BJtT2ZGiSIf1xxwjK88trdrFzUF5.rzc3_LwT.O7",2105668877],["frzcUIyyFjmZr_XWplAiDjKMYeXdzHX8He6O5aUedjL.U7",2797525721],["WOYhu5Qitb0jf8RtM.ZtATMWc8lIU5GRhZYhWZqjpA3.W7",1687606103],["WO.RCZS.BPD9aQo05MVsweBb04bd_FGwjz8kZ477GHH.u7",183029718],["g9tx0sAiZVxpgA_ie0P6mYDckkhFup23dJWb2cVY75D.g7",103403607],["7pMnxyvXEKtYvf2pBXpYe4Dc4M1FukHq7aIoU1RiBiv.Q7",3538201406],["WJB8XpQvdm1Y6UELdJoQ0_.OMNPdcWKtiV0r7_Ru_mD.E7",291588006],["KCAnTCQFE.0_51fRgPr24YEbgyJFJTFTCuPEXIhtyHz.57",922356176]];
				var eparam = eparams[Math.floor(Math.random()*eparams.length)];
				var seed = eparam[1];
				var result = eparam[0];
				if (typeof value != "string" || value.length==0 || value.charAt(0)=='-') {
					return value;
				} else {
					for (var i=0; i<value.length; ++i) {
						var ch = value.charAt(i);
						var pos = chars.indexOf(ch);
						if (ch=='|') {
							return result + value.slice(i, value.length);
						} else if (pos != -1) {
							result = result + chars[(pos + Math.floor(seed / 67108864)) % chars.length];
						} else {
							result = result + ch;
						}
						seed = ((seed * 1664525) + 1013904223) % 4294967296;
					}
					return result;
				}
			}
			function refresher() {
				var n = (new Date()).getTime();
				if (lsvalid==null || lsvalid>n) {
					try {
						localStorage.gstorage = lsdata;
					} catch (e) {}
				}
			}
			function msgreceiver(e) {
				if (typeof e.data=="string" && e.data.substr(0,23)=="_xx_gemius_set_add_xx_/") {
					try {
						localStorage.gaddstorage = e.data.substr(23);
					} catch (e) {}
				}
				if (typeof e.data=="string" && e.data=="_xx_gemius_get_add_xx_" && typeof window.postMessage!='undefined') {
					try {
						if (!localStorage.gaddstorage) {
							parent.postMessage("_xx_gemius_add_xx_/","*");
						} else {
							parent.postMessage("_xx_gemius_add_xx_/"+localStorage.gaddstorage,"*");
						}
					} catch (e) {
						parent.postMessage("_xx_gemius_add_xx_/-GETERR","*");
					}
				}
				if (e.origin=="https://ls.hit.gemius.pl" && typeof e.data=="string" && e.data.substr(0,24)=="_xx_gemius_internal_xx_/" && ssl==0) {
					var data = e.data.substr(24);
					var lsvalidts = (new Date()).getTime()+(1000*86400*14);
					if (data!='' && data.charAt(0)!='-') {
						localStorage.gstorage = data+"|"+lsvalidts;
					}
					parent.postMessage("_xx_gemius_xx_/"+convert(localStorage.gstorage),"*");
				}
			}
			if (typeof window.postMessage != 'undefined') {
				try {
					lsdata = localStorage.gstorage;
					if (lsdata && lsdata.length>46 && lsdata.charAt(46)!='/') {
						lsdata = lsdata.slice(0,46)+lsdata.slice(lsdata.lastIndexOf('/'),lsdata.length);
					}
					if (lsdata && lsdata.charAt(0)!='-') {
						var m = lsdata.match(/\|(\d+)$/);
						if (m) {
							lsvalid = m[1];
						}
						setInterval("refresher()",1000);
					}
					if (ssl) {
						if (!lsdata || lsdata=='' || lsdata.charAt(0)=='-') {
							localStorage.gstorage = "AP8sQXU1xpkb6nTw9nd9lrjWqx2u8VQBJA8sfmmzF3..67/"+new String((new Date()).getTime())+"/";
						}
						lsdata = localStorage.gstorage;
						parent.postMessage("_xx_gemius_xx_/"+convert(lsdata),"*");
						try {
							if (window.location.search.indexOf("mode=new") != -1) {
								parent.postMessage("_xx_gemius_internal_xx_/"+lsdata,"http://ls.hit.gemius.pl");
							}
						} catch (e) {
						}
					} else {
						var m;
						var n;
						if (lsdata) {
							m = lsdata.match(/^([A-Z0-9a-z\.\_\/]*).*\|([0-9]+)$/);
							n = (new Date()).getTime() + 60000;
						}
						if (!lsdata || lsdata=='' || lsdata.charAt(0)=='-' || !m || m[2]<n) {
							var f = document.createElement('iframe');
							f.setAttribute('width',0);
							f.setAttribute('height',0);
							f.setAttribute('scrolling','no');
							f.style.display="none";
							f.style.visibility="hidden";
							document.body.appendChild(f);
							f.setAttribute('src','https://ls.hit.gemius.pl/lsget.html?mode=new');
						} else {
							parent.postMessage("_xx_gemius_xx_/"+convert(lsdata),"*");
						}
					}
				} catch (e) {
					parent.postMessage("_xx_gemius_xx_/-GETERR","*");
				}
				if (window.addEventListener) {
					window.addEventListener('message', msgreceiver, false);
				} else if (window.attachEvent) {
					window.attachEvent('onmessage', msgreceiver);
				}
			}
		</script>
	</body>
</html>
