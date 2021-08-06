(function(){
var hostname = window.location.hostname.split('.');
		var is_mobile = 0;
		if ( hostname.length>0 && hostname[0]=="dev-m" )
		{
			var is_mobile = 1;
		}
		var wv_ifr = document.createElement('iframe');
		wv_ifr.src = 'https://beilagen.maz-online.de/maz/WebViewer-Portal-2020/widget.php?is_mobile='+is_mobile+'&view=3';
		wv_ifr.style = 'width:232px;height:405px;border:0;margin:0;padding:0;';
		wv_ifr.scrolling = 'no';
document.currentScript.parentNode.insertBefore(wv_ifr, document.currentScript.nextSibling);
})();
