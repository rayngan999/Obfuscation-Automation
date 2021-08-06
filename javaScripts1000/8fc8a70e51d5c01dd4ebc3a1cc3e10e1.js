<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Document</title>
</head>
<body>
	<script>
		/*
			volani cmp.html iframu
			{
				method: getCookie || setCookie
				type: 'ext' || 'int',
				v2: true || false,
				cookie: 'dfkhjsdfjkhsdfkjsd'
			}

			odpoved

			{
				type: 'int' || 'ext' || 'errormessage'
				cookie:'dfsdfsdfsdf'
				error: true,
				cmp: 'szn'
			}
		*/

		function dispatchPostMessage (content) {
			var messageObject = content;
			messageObject.cmp = 'szn';

			return window.parent.postMessage(JSON.stringify(messageObject), '*');
		};

		function sendMessage (type, cookie) {
			return dispatchPostMessage({
				method: 'get',
				type: type,
				cookie: cookie,
			});
		}

		function sendError (type) {
			return dispatchPostMessage({
				error: true,
				type: type
			});
		}

		function sendConfirm (type) {
			return dispatchPostMessage({
				confirm: true,
				method: 'set',
				type: type
			});
		}

		function getCookieName (type, v2) {
			var suffix = v2 ? '-v2' : '';

			return type + 'CMPCookie' + suffix;
		};

		function getCookie (type, v2) {
			var cookie = localStorage.getItem(getCookieName(type, v2));
			if (cookie) {
				sendMessage(type, cookie);
			} else {
				sendError('NoCookie');
			}
		};

		function setCookie (type, cookie, v2) {
			localStorage.setItem(getCookieName(type, v2), cookie);
			sendConfirm(type);
		};

		var receiveMessage = function (event) {
			try {
				var data = JSON.parse(event.data);
			} catch (e) {
				sendError('ParseDataError');
				return;
			}

			if (data.method === 'getCookie' && data.type) {
				// is localstorage supported
				try {
					getCookie(data.type, data.v2);
				} catch (e) {
					sendError('NoStorage');
				}
			} else if (data.method === 'setCookie' && data.type) {
				try {
					setCookie(data.type, data.cookie, data.v2);
				} catch (e) {
					sendError('NoStorage');
				}
			}
		};

		// naveseni posluchace na postmessage
		window.addEventListener('message', receiveMessage);
	</script>
</body>
</html>