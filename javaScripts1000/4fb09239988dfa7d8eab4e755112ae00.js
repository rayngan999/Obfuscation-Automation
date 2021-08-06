/*
* 19 de enero 2016 v3.1
*/
var search_wrapper = '<div class="widget_search_s" style="height: 290px;' +
'max-height: 290px; background-color: #E1E1E1;position: relative;padding-top:64px">' +
'<div class="layout"><div class="clear"></div></div></div>';



var GSA = GSA || ({

	getURLSearch : function(config) {
		var url = "https://buscador.amarello.com.mx/buscador/";
		return url+ config.proxy_css;
	},

	getURLSuggestions : function(config) {
		var url = "";
		url += config.domain + config.suggestions;
		url += "&client=" + config.client;
		return url;
	},

	getParameterByName :  function(name) {
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},

	getParameterOn : function(name, string) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		    results = regex.exec(string.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

	},

	init : function (config) {
		
		if (typeof config === 'undefined') {
			throw new Error("Falta archivo de configuracion");
		}

		var search_url = GSA.getURLSearch(config);
		var suggestions_url = GSA.getURLSuggestions(config);

		var j  = config.extra.jQ;
		var html = config.html;

		var busqueda = GSA.getParameterByName('search');

		if (busqueda) {
			j("#header_search").remove();
		}

		var container = j(html.results);

		/* agregamos el contendedor para el landing */
		if (container.length == 0) {
			var pruebas  = j(".wpthemeMainContent");
			pruebas.append(j.parseHTML(search_wrapper));
			html.results += "_s";
			j(".wpthemeInner").css({'background-color':'#e1e1e1'});
		}

		var wrapper = j(html.results).find('.layout');
		var close = j(html.close).clone();
		wrapper.find('form').remove();
		var tmpWrapper = wrapper.find('.clear');
		
		if(parent.postMessage != undefined) {
			var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
			var eventer = window[eventMethod];
			var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

			eventer(messageEvent, function(e) {
				// Solo para verificar que se recibia un JSON bien
				try {
				   var json = JSON.parse(e.data);
				} catch(e) {
				   return;
				}
				
				if(json.url) {
					location.href = json.url;
				}

				var datos = JSON.parse(e.data);
				j("#GSAFrame").animate({height: datos.height+20 , maxWidth : '100%'}, 300);

				wrapper.parent().animate({height: (datos.height + 70)}, 100);
				wrapper.parent().css({maxHeight: (datos.height + 70), position : 'relative'});
				if( datos.scrollTop ) {
					j("html, body").animate({ scrollTop: 0 }, 100);
				}
			}, false);
		}

		j(html.search).on('click', function(e){

			if (tmpWrapper.lenght) {
				if(j(html.iframe).length == 0) {
					tmpWrapper.insertBefore(html.iframeString);
					var frame = j(html.iframe);
					frame.attr('src', search_url);

				}
			} else {
				if(j(html.iframe).length == 0) {
					tmpWrapper.append(html.iframeString);
					var frame = j(html.iframe);
					frame.attr('src', search_url);

				}
			}

			j(html.results).show();
			var frame = document.getElementById(html.idframe).contentWindow;
			frame.postMessage('resize','*');
		});

		j(html.close).on('click', function(e){
			var frame = document.getElementById(html.idframe).contentWindow;
			j(html.iframe).attr('src', search_url);
			j(html.results).hide();
			
		});

		/*css para que se vea la caja de sugerencias */
		//j(".widget_coverimg").attr('style', "overflow: visible; z-index: 9;");
		//j(".ContentPage.homepage").attr('style', "height:553px;");

		/* suggestions */
		var pageSearh = j(html.suggestions_wrapper).find('input').first();
		var buttonSearch = pageSearh.siblings().first();
		/* eliminamos el handler del boton para usar el nuestro */
		buttonSearch.off();

		buttonSearch.on('click', function(e){
			location.href = GSAConfig.landing +  '?search=' + pageSearh.val(); 
		});

		var container = j('.wptheme1Col').first();
		container.append('<div id="suggestions"></div>');
		var suggestions = j("#suggestions");

		suggestions.on('click', '.gsa_suggestion', function(e){
			location.href = GSAConfig.landing +  '?search=' + j(this).text(); 
		});
		pageSearh.off();

		pageSearh.on('keydown', function(e) {
			e.stopPropagation();
			var dist_left = j(".homepage_slider_search").offset().left;
			var dist_top = j(".homepage_slider_search").offset().top;
			j("#suggestions").css({left:dist_left, top: (dist_top + 50)});
		});

		pageSearh.on('keydown', function(e) {
			suggestions.show();
			var query  = j(this).val();
			/*  moverse entre sugerencias con las flechitas */
			if(e.keyCode == 38 || e.keyCode == 40) {

				var lis = suggestions.find('li');
				if (lis.length > 0) {
					var selected = suggestions.find('.hovered');
					if (selected.length == 0)
						lis.first().addClass('hovered');
					else {
						selected.removeClass('hovered');
						var curr = (e.keyCode == 40) ? selected.index() + 1 : selected.index() - 1 ;
						if (curr > (lis.length -1 ))
							curr = 0;
						else if (curr < 0)
							curr = lis.length - 1;
						lis.eq(curr).addClass('hovered')
					}
				}

				return;
			}

			if (e.keyCode != 13) {
				j.getJSON(suggestions_url, {q : query}, function(data) {
					var html = '<ul>';
					
					if (data.results.length > 0) {
						suggestions.show();
						j(html.sWrapperParent).addClass('afuera')
					} else {
						suggestions.hide();
						j(html.sWrapperParent).removeClass('afuera')
					}
					
					for (var i = data.results.length - 1; i >= 0; i--) {
						html += '<li class="gsa_suggestion sg_' + GSAConfig.site+'" >'  + (data.results[i].name) + '</li>';
					};
					html += '</ul>';
					suggestions.html(html);
				});
			} else {
				j(".widget_indicadores .footer").remove();
				var selected = suggestions.find('.hovered').first();
				if (selected.length) {
					query = selected.text();
				}
				location.href = GSAConfig.landing +  '?search=' + query; 
			}
		});
	},
	sendMsgChild : function (dim) {
		var _frame = document.getElementById('GSAFrame');
		if(_frame == null)
			return;
		else 
			_frame = _frame.contentWindow;
		z = {}
		if (!dim.update) {
			z = {
				resize : true,
				width : dim.width,
				height : dim.height
			}
		} else {
			z = dim	
		}
		_frame.postMessage(JSON.stringify(z), '*');

	}


});


$(function() { 
	/* eliminamos el listener para el cuadro de busqueda  */
	$(".homepage_slider_search  input").off();
	$(".hovered").css({})
	var _w = document.body.offsetWidth > 1024 ? 1024 : document.body.offsetWidth;

	window.onresize =  function(e) {
		var z = {
			update: true
		}
		GSA.sendMsgChild(z);
	}
	// window.onresize = function (e) {
	// 	var $frame = $("#GSAFrame");
	// 	var $header = $(".widget_contacto");
	// 	var _w = document.body.offsetWidth;
	// 	var wasMobile = GSAConfig.proxy_css.search('_mobile') != -1;
	// 	var css_change = false;

	// 	if(_w <= 481) {
	// 		$("body").css('overflow-x','hidden');
	// 		$("#header_search .layout").css('max-width','95%');
	// 	} else {
	// 		$("#header_search .layout").css('max-width','100%');

	// 	}

	// 	if (_w < 768) {
	// 		if(!wasMobile) {
	// 			GSAConfig.proxy_css += '_mobile';
	// 			GSAConfig.client += '_mobile';
	// 			css_change = true;
	// 		}
	// 	} else {
	// 		if (wasMobile) {
	// 			GSAConfig.proxy_css =  GSAConfig.proxy_css.split('_')[0];
	// 			GSAConfig.client =  GSAConfig.client.split('_')[0];
	// 			css_change = true;
	// 		}
	// 	}

	// 	if ($frame.length) {
	// 		var url = GSA.getURLSearch(GSAConfig);
	// 		$parent = $frame.parent();
	// 		var _frame = document.getElementById('GSAFrame').contentWindow;
	// 		_frame.postMessage(JSON.stringify({
	// 			resize : true,
	// 			width : $parent.width()
	// 		}), '*');

	// 		if (css_change) {
	// 			$frame.attr('src', url);
	// 		}
	// 	};
	// };

	if (_w < 768) {
		if (_w <= 481) {
			$("body").css('overflow-x','hidden');
			$("#header_search .layout").css('max-width','95%');
		} else {
			$("#header_search .layout").css('max-width','95%');
		}
		GSAConfig.proxy_css += '_mobile';
		GSAConfig.client += '_mobile';
		GSAConfig.html.iframeString = '<iframe id="GSAFrame" src="" style="'+
						    'height: 120px;' +
						    'width:100%;' + 
						    'margin-top: -70px;' +
						'"></iframe>';
	} else {
		GSAConfig.html.iframeString = '<iframe id="GSAFrame" src="" style="'+
						    'height: 120px;' +
						    'width:100%;' + 
						    'margin-top: -70px;' +
						'"></iframe>';

	}

	try {
		$body = $("body");
		GSA.init(GSAConfig)
		setInterval(function(){
			GSA.sendMsgChild({
				resize : true,
				width : $body.width(),
				height : $body.height()
			})
		}, 400);

	} catch (e) {
	}

	var busqueda = GSA.getParameterByName('search');
	var url = GSA.getURLSearch(GSAConfig).replace("q=&", "");
	if (busqueda) {
		$(GSAConfig.html.close).hide();
		$(GSAConfig.html.search).click();
		$(GSAConfig.html.iframe).attr('src', url + '&q=' + busqueda );
	} 
});
/* ndrd */
