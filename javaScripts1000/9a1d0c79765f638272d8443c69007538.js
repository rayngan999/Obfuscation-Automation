 <!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<script type="text/javascript">
			// localStorage musi byt v try protoze kdo ma zakazane ukladani cookies, ... tak by dostal neodchycenou vyjimku do konzole
			try {
				var hasLocalStorage = window.localStorage ? true : false;
			} catch (e) {
				var hasLocalStorage = false;
			}

			var updateIterval = 14*24*60*60*1000;
			var sidCookieAge = 24*60*60*1000;

			if (hasLocalStorage) {
				var errorCount = localStorage.getItem("adform_sync_retry_count") == null ? 0 : +(localStorage.getItem("adform_sync_retry_count"));
				var retryInterval = 60*60*1000;//1hodina
			}

			var adformCodeRun = function() {
				/* Adform Tracking Code BEGIN */
				window._adftrack = Array.isArray(window._adftrack) ? window._adftrack : (window._adftrack ? [window._adftrack] : []);
				window._adftrack.push({
					pm: 899517,
					divider: encodeURIComponent('|'),
					pagename: encodeURIComponent('seznam_DMP'),
					order : {
						orderid: sid_id
					}
				});
				(function () {
					var s = document.createElement('script');
					s.onerror = function() {
						errorCount++;

						if (errorCount >= 5) {
							errorCount = 0;
							localStorage.setItem("adform_sync",+(Date.now()));
						}

						localStorage.setItem("adform_sync_retry_count", errorCount);
						localStorage.setItem("adform_sync_retry",+(Date.now()));
					};
					s.onload = function() {
						localStorage.setItem("adform_sync_retry_count", 0);
						localStorage.setItem("adform_sync",+(Date.now()));
					};
					s.type = 'text/javascript';
					s.async = true;
          s.crossorigin="anonymous"
					s.src = 'https://track.adform.net/serving/scripts/trackpoint/async/';
					var x = document.getElementsByTagName('script')[0];
					x.parentNode.insertBefore(s, x);
				})();
				/* Adform Tracking Code END */
			}

			if (hasLocalStorage) {
				var getItem = function (sKey) {
					if (!sKey) { return null; }
					return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
				}

				 var sid_cookie = getItem("sid");
				 if (sid_cookie != null) {
					var sid_t = new Date(sid_cookie.match(/t=(\d+)/)[1] * 1000);
					var sid_id = sid_cookie.match(/id=(\d+)\|/)[1];

					// doslo k chybe a musim opakovat pokus
					if (errorCount != 0 && errorCount < 5) {
						if (localStorage.getItem("adform_sync_retry") == null || ((+(localStorage.getItem("adform_sync_retry")) + retryInterval) < +(Date.now()))) {
							adformCodeRun();
						}
					}
					// jeste jsem nedelal sync
					if (errorCount == 0 && (localStorage.getItem("adform_sync") == null || ((+(localStorage.getItem("adform_sync")) + updateIterval) < +(Date.now())))) {
						// je cookie starsi vic jak 24 hodin
						if ((+(sid_t) + sidCookieAge) < +(Date.now())) {
							adformCodeRun();
						}
					}
				}
			}
		</script>
	</body>
</html>
