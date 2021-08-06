function enviar(Codigos, cid){
	//if (prueba) alert('clic! '+Codigos);
	img=SalirDir+"programas/actualizar_estad.php?"+COKCodigo+"þ"+Codigos+","+Math.random()+'&cid='+cid;
	ga(['send', 'event', 'Banner', 'Click', Codigos]);
	if(document.images)	new Image().src=img;
	return true;
};
function flashViejo(codigos, url, target){
	enviar(codigos);

	document.fBanners.action=url.split('?')[0];
	document.fBanners.target=target;

	var re  = /(\?|&*)([^=&\?]+)=([^&]*)/g,
		match, i = 0, elem;

	while (match = re.exec(url)){
		elem = document.getElementById('iBanners' + i);
		elem.name = match[2];
		elem.value = match[3];
		url = url.substr(url.indexOf(match[0]) + match[0].length);
		++ i;
	};

	document.fBanners.submit();
};
function banner(BANCodigo){
	te('Banner','Click',BANCodigo);
	enviar('B' + BANCodigo);
	var b = bannersFlash[BANCodigo];
	document.fBanners.action=b[0];
	document.fBanners.target=b[1];
	document.fBanners.submit();
};