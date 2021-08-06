// warningMessage functions
$('a').click(function (event) {
	event.preventDefault();
	debugger;
	var url = $(this).attr('href');
	var hasId = false;
	var hasparent = false
	var parentElement = $(this).attr('parentElement')
	var id = $(this).attr('id')
	var hasOnclick = false
	var onClickattr = $(this).attr('onclick')
	var idForOnclick = false
	var sliderAttribute = $(this).attr('data-slide-index')
	var hasSliderAtt = false
	var openintabAttribute = $(this).attr('openintab')
	var hasopenintab = false
	var hasClasNameAttribute = $(this).attr('class')
	var hasClassName = false


	if (parentElement != undefined || parentElement != null) {
		hasparent = true
	}

	if (id != undefined || id != null) {
		hasId = true
		if (id == "contrataInterbursatilId" || id == "linkOldSite" || id == "loginIxe" || id == "loginReturn" || id == "loginBxI" || id == "botonVideo" || id == "contrataInterbursatilId" || id == "activarTokenId" || id == "sincronizarTokenId" || id=="olvideContraseniaId" || id=="start-chat") {
			idForOnclick = true
		}
	}

	if (hasClasNameAttribute != undefined || hasClasNameAttribute != null) {
		if (hasClasNameAttribute == "quit-contact-close-button" || hasClasNameAttribute=="gfbRS" || hasClasNameAttribute=="opt" || hasClasNameAttribute=="header-opt" || hasClasNameAttribute=="opt header-opt gfbRS") {
			hasClassName = true
		}
			
	}
	
	if(idForOnclick)
	{
		if(id == "activarTokenId")
		{
			 if(window.location.href.indexOf('/wps/portal/banorte')>0)
			 {
				location.href="/wps/portal/banorte/Home/activacion-token"; 
			 } 
		      else if(window.location.href.indexOf('/wps/portal/empresas')>0)
			  {
				  location.href="/wps/portal/empresas/Home/activa-token";
			  }
			
		}
		else if (id == "sincronizarTokenId")
		{
			
			 if(window.location.href.indexOf('/wps/portal/banorte')>0)
			 {
				location.href="/wps/portal/banorte/Home/sincronizar-token";
			 } 
		}if(id=="olvideContraseniaId")
		{
			location.href="/wps/portal/banorte/Home/sincronizar-token";
		}
	}

	if (openintabAttribute != undefined || openintabAttribute != null) {
		hasopenintab = true
		window.open(url, '_blank');
		return false;
	}

	if (sliderAttribute != undefined || sliderAttribute != null) {
		hasSliderAtt = true
	}

	if (onClickattr != undefined || onClickattr != null) {
		if (onClickattr != "taggearSeccion();" && onClickattr.indexOf("gaTagCreate") == -1) {
			hasOnclick = true
		}
	}

	if (hasOnclick == false && idForOnclick == false && hasSliderAtt == false && hasopenintab == false && hasClassName == false) {
		switch (hasId) {

			case true:
				switch (hasparent) {

					case true:
						if (id != undefined && id != null || id == "utb-edit-mode-quicklink" && $(this).attr('parentElement').id != "menu_pyme_opt") {
							if (/banorte.com/i.exec(url) || url[0] == '/' || url[0] == '#' || url.indexOf("?uri=nm:oid:") != -1 || url.indexOf("javascript(0)") != -1 || url.indexOf("javascript void(0)") != -1 || url.indexOf("javascript:void(0);") != -1 || url.indexOf("javascript:void(0)") != -1 || url.indexOf("?uri=utb%3Aopen") != -1 || url.indexOf("?uri=utb%3Aclosed") != -1 || url.indexOf("javascript:;") != -1) {
								console.log('Url dentro de banorte');
								location.href = url
							} else {
								console.log('Url fuera de banorte');
								popupWarning("#popupejemplo", url);
							};
						}
						break;

					case false:
						if (id != undefined && id != null || id == "utb-edit-mode-quicklink") {
							if (/banorte.com/i.exec(url) || url[0] == '/' || url[0] == '#' || url.indexOf("?uri=nm:oid:") != -1 || url.indexOf("javascript(0)") != -1 || url.indexOf("javascript void(0)") != -1 || url.indexOf("javascript:void(0);") != -1 || url.indexOf("javascript:void(0)") != -1 || url.indexOf("?uri=utb%3Aopen") != -1 || url.indexOf("?uri=utb%3Aclosed") != -1 || url.indexOf("javascript:;") != -1 || $(this).attr('href') == "javascript:;" || $(this).attr('className') == "wpthemeLeft" || id.indexOf("linkToPage") > 0  || id.indexOf("_nextPage") > 0 || id.indexOf("lastPage") > 0 || id.indexOf("_previousPage") > 0 || id.indexOf("_firstPage") > 0) {
								console.log('Url dentro de banorte');
								if (id != "face_share" && id != "twitter_share") {
									location.href = url
								} else {
									popupWarning("#popupejemplo", url);
								}
							} else {
								console.log('Url fuera de banorte');
								popupWarning("#popupejemplo", url);
							};
						}
						break;

					default:
						console.log("why are you here?")
				}

				break;

			case false:
				switch (hasparent) {

					case true:
						if (/banorte.com/i.exec(url) || url[0] == '/' || url[0] == '#' || url.indexOf("?uri=nm:oid:") != -1 || url.indexOf("javascript(0)") != -1 || url.indexOf("javascript void(0)") != -1 || url.indexOf("javascript:void(0);") != -1 || url.indexOf("javascript:void(0)") != -1 || url.indexOf("?uri=utb%3Aopen") != -1 || url.indexOf("?uri=utb%3Aclosed") != -1 || url.indexOf("javascript:;") != -1) {
							console.log('Url dentro de banorte');
							location.href = url
						} else {
							console.log('Url fuera de banorte');
							popupWarning("#popupejemplo", url);
						};
						break;

					case false:
						if (/banorte.com/i.exec(url) || url[0] == '/'  || url.indexOf('?mostrar=null')>=0 || url[0] == '#' || url.indexOf("?uri=nm:oid:") != -1 || url.indexOf("javascript(0)") != -1 || url.indexOf("javascript void(0)") != -1 || url.indexOf("javascript:void(0);") != -1 || url.indexOf("javascript:void(0)") != -1 || url.indexOf("?uri=utb%3Aopen") != -1 || url.indexOf("?uri=utb%3Aclosed") != -1 || url.indexOf("javascript:;") != -1 || $(this).attr('href') == "javascript:;" || $(this).attr('className') == "wpthemeLeft") {
							console.log('Url dentro de banorte');
							location.href = url
						} else {
							console.log('Url fuera de banorte');
							popupWarning("#popupejemplo", url);
						};
						break;

					default:
						console.log("why are you here?")
				}

				break;

			default:

				console.log("nope nope nope")

		}
	}

	if (id == "contrataInterbursatilId" ){
		location.href = "https://www.banorte.com/contratacion/vistas/login.xhtml";
	}

});

function popupWarning($id, url) {
	var movimiento = 800;
	var widthx = $($id).width();
	var heighty = $($id).height();
	var scroll = $(window).scrollTop();
	var offset = 200;
	var remove = (scroll + heighty + offset + offset) * -1;
	lightbox('open');
	$($id).show().animate({
		top: (scroll + offset)
	}, movimiento, 'swing');

	// CLOSE WITH ESCAPE
	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			if ($('.lightbox').hasClass('open')) {
				closePopUpWarning(remove);
				lightbox('close');
			}
		}
	});
	$("#closeButtonWarning").on('click', function () {
		closePopUpWarning(remove);
		lightbox('close');
	});

	$(".lightbox").click(function (event) {
		closePopUpWarning(remove);
		lightbox('close');
	});

	$('input[name="image"]').click(function () {
		closePopUpWarning(remove);
		lightbox('close');
	});

	$(".bntPopupContinue").click(function (event) {
		window.location = url;
	});
}

function closePopUpWarning($remove) {
	var e = 800;
	var t = $(window).scrollTop();
	var n = 50;
	var r = 0;
	if ($remove < 0 || $remove > 0) {
		r = $remove;
	} else {
		var target = $remove.replace('#', '');
		r = document.getElementById(target).style.height;
	}
	var i = (t + (r == '' ? 0 : parseInt(r)) + n + n) * -1;
	console.log(i);
	$(".popup-warning").animate({
		top: i
	}, e / 2, "swing", function () {
		$(this).hide()
	});
	lightbox("close")
}

// end warninMessage functions