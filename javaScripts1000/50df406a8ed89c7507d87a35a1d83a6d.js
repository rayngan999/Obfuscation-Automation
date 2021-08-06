<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>localStorage</title>
</head>
<body>
    <script> // å¨è¿ä¸ªiframeæå è½½çHTMLä¸­ç»å®ä¸ä¸ªäºä»¶çå¬å¨ï¼å½äºä»¶è¢«è§¦åæ¶ï¼ææ¥æ¶å°çtokenæ°æ®åå¥localStorage
	var hosts = ['https://www.huitouyu.com',
				 'https://www.qiaocao.hk',
				 'https://www.huitouyu.hk'
				 ];
	window.addEventListener('message', function (event) {
	
		if (!hosts.includes(event.origin))
			return;
			
		var message = JSON.parse(event.data);
		
		if(message.method == "set")
			localStorage.setItem(message.key, message.data);
			
		if(message.method == "remove")		
			localStorage.removeItem(message.key);
			
	}, false);
    </script>
</body>
</html>