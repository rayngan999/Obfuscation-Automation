/*_hs_*/;!function () {
	if (!window.sas_snippets) {
		window.sas_snippets = {
			"csync": "1"
		};
		if (navigator && navigator.platform) { {
				var sasIsIosUiwebview = false;
				if (navigator.platform.substr(0, 2) === 'iP') { {
						var lte9 = /constructor/i.test(window.HTMLElement);
						var nav = window.navigator,
						ua = nav.userAgent,
						idb = !!window.indexedDB;
						if (ua.indexOf('Safari') !== -1 && ua.indexOf('Version') !== -1 && !nav.standalone) { {
								sasIsIosUiwebview = false;

							}
						} else if ((!idb && lte9) || !window.statusbar.visible) { {
								sasIsIosUiwebview = true;

							}
						} else if ((window.webkit && window.webkit.messageHandlers) || !lte9 || idb) { {
								sasIsIosUiwebview = true;

							}
						}

					}
				}
				if (!sasIsIosUiwebview) {
					var iframe = document.createElement("iframe");
					iframe.scrolling = 'no';
					iframe.frameBorder = 0;
					iframe.width = 0;
					iframe.height = 0;
					iframe.style.margin = 0;
					iframe.style.padding = 0;
					iframe.style.display = 'none';
					iframe.style.width = '0px';
					iframe.style.height = '0px';
					iframe.style.visibility = 'hidden';
					var dc_id = "3";
					if (dc_id === "5") {
						iframe.src = "https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=smartadserver&endpoint=us-east";
					}else if (dc_id === "8") {
						iframe.src = "https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=smartadserver&endpoint=apac";
					} else {
						iframe.src = "https://secure-assets.rubiconproject.com/utils/xapi/multi-sync.html?p=smartadserver&endpoint=eu";
					}
					document.body.appendChild(iframe);
				}
			}
		}
	}
}
();
;var sas = sas || {};
if(sas && sas.events && sas.events.fire && typeof sas.events.fire === "function" )
        sas.events.fire("ad", { tagId: "sas_97506", formatId: 97506 }, "sas_97506");;/*_hs_*//*bidswitch sync*/
(new Image()).src="https://x.bidswitch.net/sync_a9/https%3A%2F%2Faax-eu.amazon-adsystem.com%2Fs%2Fecm3%3Fex%3Dbidswitch.com%26id%3D%24%7BUUID%7D";
/*end bidswitch sync*/
/**//*_ts_*/;!function () {
    var x1 = document.createElement("img");
    var gdpr_server_value = "false";
    var gdpr = gdpr_server_value === "true" ? "1" : (gdpr_server_value === "false" ? "0" : "");
    x1.src = "https://map.cookieless-data.com/MAP.d?mn=smart&pa=22959&mv=3107979201936794816&gdpr=" + gdpr + "&gdpr_consent=";
}();;/*_ts_*/