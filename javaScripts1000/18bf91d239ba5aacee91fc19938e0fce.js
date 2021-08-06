/*
* Martes 15 dic 2015 V.2.
*/
var DOMAIN = "https://busqueda.banorte.com";
var LANDING = '/wps/portal/ixe/Home/buscador/';
var GSAConfig = {
	domain : window.DOMAIN,
	landing : window.LANDING,
	url : "/search?q=&btnG=Google+Search&access=p",
	suggestions : "/suggest?max=10&access=p&format=rich&callback=?",
	site : "ixe",
	client : "ixe",
	proxy_css : "banorte_v2",//Cambio que se hace por la marca preferente que usa colores de banorte, anteriormente era ixe_v2
	url_suggestions : "",

	extra : {
		debug : false,
		external_rsrc : "",
		jQ : window.$,
	},

	//selectores
	html : {
		sWrapperParent : ".widget_coverimg",
		suggestions_wrapper : '.homepage_slider_search',
		search : ".search_trigger",
		results : ".widget_search",
		iframe : "#GSAFrame",
		idframe : "GSAFrame",
		close : "#close",
		iframeString : '<iframe id="GSAFrame" src="" style="'+
						    'width: 1024px;' + 
						    'height: 200px;' + 
						    'margin-top: -40px;' + 
						    'margin-left: 25px;' + 
						'"></iframe>',
	}
};
