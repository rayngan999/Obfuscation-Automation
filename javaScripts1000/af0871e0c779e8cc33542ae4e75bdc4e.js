<!DOCTYPE html>
<html lang="ja" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">

		(function (global) {
			function setOnLoadEvent(functor) {
				if (global.attachEvent) {
					global.attachEvent("onload", functor);
				}
				else {
					global.addEventListener("load", functor, false);
				}
			}

			function getXid() {
				if (global.localStorage) {
					var xid = global.localStorage.getItem("xid");
					if (xid != null) {
						return xid;
					}
				}
				return "";
			}

			function getOptout() {
				if (global.localStorage) {
					var optout = global.localStorage.getItem("optout");
					if (optout != null) {
						return optout;
					}
				}
				return "false";
			}

			setOnLoadEvent(function () {
			    try{
			        var target = (parent.postMessage ? parent : (parent.document.postMessage ? parent.document : undefined));
			        if (typeof target !== "undefined") {
			            var xidText = getXid();
			            var optout = getOptout();
			            var xidObj = "{\"xid\":\"" + xidText + "\" , \"optout\":\"" + optout + "\"}";
			            target.postMessage(xidObj, "*");
			        }
			    } catch (ex) {

			    }
			});
		})(window);

	</script>
</body>
</html>
