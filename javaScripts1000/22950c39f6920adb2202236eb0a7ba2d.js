<html>
	<body>
	<script language="JavaScript">
		var queryStr = window.location.href.split("#")[1];
		var url = queryStr.substring(7);
		var img = new Image();
		img.onload = img.onerror = function () {};
		img.src = url;
	</script>
	</body>
</html>

