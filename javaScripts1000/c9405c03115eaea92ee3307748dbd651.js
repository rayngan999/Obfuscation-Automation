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
				var eparams = [["sFuw5UcGLYpQ2P_Ih7uswa5RYUs8R.yAIx0IX05FBl3.W7",2933672850],["uxXArDJ.HduGYF8NqtCstc4tg8wMYrdnjc8uNo_me_7.P7",1841498321],["64zFXqI103Tg5oiP_TFujV9iI1OkrPbXlcaYcYCIH13.U7",4218252496],["S31gI5KYfcYbx79eeglAja4hgFo8NAgWHPAl_LcvXsv.Y7",4158165860],["tfHAr.49HdrFzb9g7Lqw2AwIgDU5QgfI2AFyDHP8Knf.w7",1976256204],["4ZcVTiosgwur8Ze5hvMJwY0VgBTRnQiISn3cuHoNFZr.L7",1579948221],["sWobiLnSTmUgfzvFPkX_zU_fg8ykrbdnDuFOLucwNzD.M7",86170667],["S9XFBZI80vUWUYiG.qqmxtx0MBRpM_i1jvfyDnU6Cu..07",1248166875],["G1LFNyIR02xWGWK.JiXHIK4fkD08zaf24Ku8RaIaMbX.f7",4025688721],["QMtrOqbD.jIQ8xJb08dq0q3xMF88VOiXqml8sSbeHc3..7",105466461],["tfHFz.49035bdX264d18Ja4e4Mg86MgUQEgs4doXPQv.b7",4266343546],["EbBlRaoIM6D78rctg86xKdylcU5p_Jy9v2gFE4Feoh..C7",1980250379],["64XFLKJp0v526mcVUp65iAyogMo5Ugh2.4iPtJViftf.I7",577247797],["EQewqqoULdyL0rTQm8AoF6z08oChBrMkICYkv21okyb.t7",1292813274],["S_.FNZHZ0zWm_ogN7fzuEl9gkM2kRqiWPiNSNPbiBr..I7",1731903128],["S4Cws5JpLRNLga7OwkTgegvY0805Mtc5SBph__g9rK7.R7",1986703751],["RgTK6V5L_WqFkEYiWLB1cdvVgBVpCAiIxaKf1oPTtk3._7",3212188349],["6_MVTqIogwtFLggPIZ.2PV_RI_mk2.bL_vFro3bMK2r.M7",3504085516],["5rTFLm6I0zW15S17nOMITNvmkudp_fOElUd_yHA5vsT..7",2506566864],["QMtq_abDWdYVSbvNI1qkRdwXg_Fpv7cCaJYulBCx97X.N7",4241432576]];
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
							localStorage.gstorage = "mBGw3TjxLa6eP13wN.N3X131OQXMpeJthvxwO.OIvcn.p7/"+new String((new Date()).getTime())+"/";
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
