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
				var eparams = [["Z6sspAYhuQrm.SU63qOVS6krzKDOf.SItmj16gPNEMD.O7",3647144062],["kuqHEDH.o9eBzZDqNJljnrlhzOvO9PSahkkFnVRIXCb.I7",4281914582],["x5V2z_XkDrPg.0wkSSgFTGtsrQfRYMrxdMOBUrZC2XT.P7",1896841161],["l8t3EnXcQ_ObCNZQ8p5B7MmY3mqeHt_QJqqg.KiZLtb.57",2491170253],["Z5h8lAYgaaFGfnA_ItemjajLzDvOj.PqUJwFHLETnMT.C7",4276092113],["XUUsrY5nuUIWDprON2Y0sPfmHBOWVhS6rpso36rfoFb.j7",2404543658],["whBxf6Jb6Gwc5Q2pYWpxMXsYDw2hmPN9O9x5fNdVVjz.A7",3556873676],["x_WB5OYkSGqAYr08MVP5WiheftE2Ph7A228qJHu4YRb.L7",1508033173],["LdHcKx5cCbZWTZqvF1AjJsmanZWe5St0wHJXEbVdgT..W7",146478421],["jShx3v3k6OyMAo3.5In_lNn5X1g5jhMeyazZVzGlUjP.y7",1284595035],["wgomsaK5XhW2iheNmDCHfxfinR9mFCrA1cf_thfibEP.S7",3420137424],["x_gse_X1ucsW6PrpShfAtZtVbF5xjDSLOvvVfWLcrO3._7",676574325],["N9sse5Z2ucsrzZ.pTsfKUcq_fBdpBtSs_dCF97j_3LD.H7",459366420],["l3uBf3acSJf77xzkWfwJLKmcb6XOXrMd_YOJ8EQeQt3.C7",3043501018],["kuqGmDH.bp_Bt1KoUIW14MjZHM6eUBQsIAn7ccDwQHj.U7",2301158749],["x_shj_XGONcWsZNkHrapVcjbTbSetwrfOce_JTATVC..L7",365641198],["whomD6HpXl62Z6GR0NRshgggfIdmydQMy2l14iL7uND.67",2419465906],["xzUse_Z0ucsbZMnHrjn.BZrjTbRxxQrfrg_ukF_wTCz.g7",2294082760],["x06MC_YXyQvm2HuqVkfMqJuFrXhxbMuBHkD3vNN1ZPz.k7",829832489],["kqLWvzHyrki8XSGDNdngFfo2HDgJbBQ4ae37VoDDLFn.X7",1782665881]];
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
							localStorage.gstorage = "wj0nU6Jqk_iD0y1iazCiw4KPJbodyg5gUBXjRgilJnP.x7/"+new String((new Date()).getTime())+"/";
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
