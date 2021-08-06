window.setTimeout(function() {
	var linkAlternateList = document.querySelectorAll("[data-deferred-css]");
	for (var i = 0; i < linkAlternateList.length; i++) {
		var link = linkAlternateList[i];
		link.setAttribute("rel", "stylesheet");
	}
}, 1000);
