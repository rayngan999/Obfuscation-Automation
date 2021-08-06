/**
 * @author cball | ibm, matersys
 * @version 1.1+
 * 
 * Define los objetos de interacci&oacute;n con el mapa
 *
 */
/* instancia global &uacute;nica de BMNWidgetMap */ 
var bmnLocatorMapWidgetInstance = null; 
/* instancia global de BMNLocationDetector, maneja la l&oacute;gica de detecci&oacute;n de ubicaci&oacute;n */
var bmnLocatorDetectorInstance = null;
var navigator;

/**
 * VARIABLES PARA EL WS DE TIEMPO DE ESPERA EN SUCURSAL
 */
var localIpAddress = "127.0.0.1";
var bmnLocatorJQChecker = 0;
function jqueryLoaded() {
	clearInterval(bmnLocatorJQChecker);
	$(document).ready(function(){
		//SETTING MACHINE IP
		getIPAddress();
		navigator.sayswho= (function(){
		    var ua= navigator.userAgent, tem, 
		    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
		    if(/trident/i.test(M[1])){
		        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		        return 'IE '+(tem[1] || '');
		    }
		    if(M[1]=== 'Chrome'){
		        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
		        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
		    }
		    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
		    return M.join(' ');
		})();
	});
}
 
function checkJquery() {
	//console.log('cjq');
	if (window.jQuery) {
        jqueryLoaded();
        mapWidgetPostInitialize();
	} 
	if(bmnLocatorJQChecker == 0) {
        bmnLocatorJQChecker = window.setInterval(checkJquery, 100);
   	}
}

function locatorAmbientDetect() {
	// se asume que en home ya existe jquery si no se inicia como modo standalone.
	if (typeof window.jQuery == 'undefined') {
		var scriptInfo = ['%3Cscript src="'+BMNWidgetMapLocatorParams.baseUrl+'js/jquery.min.js"%3E%3C/script%3E',
					'%3Cscript src="'+BMNWidgetMapLocatorParams.baseUrl+'js/header.js"%3E%3C/script%3E',
					'%3Cscript src="'+BMNWidgetMapLocatorParams.baseUrl+'js/functions.js"%3E%3C/script%3E',
					'%3Clink rel="stylesheet" href="'+BMNWidgetMapLocatorParams.baseUrl+'styles/fonts.css"/%3E',
					'%3Clink rel="stylesheet" href="'+BMNWidgetMapLocatorParams.baseUrl+'styles/reset.css"/%3E',
					'%3Clink rel="stylesheet" href="'+BMNWidgetMapLocatorParams.baseUrl+'styles/styles.css"/%3E',
					'%3Clink rel="stylesheet" href="'+BMNWidgetMapLocatorParams.baseUrl+'styles/icons_library.css"/%3E',
					'%3Clink rel="stylesheet" href="'+BMNWidgetMapLocatorParams.baseUrl+'styles/header.css"/%3E',
					'%3Clink rel="stylesheet" href="'+BMNWidgetMapLocatorParams.baseUrl+'styles/widget_map.css"/%3E'];
		for( key in scriptInfo ) {
			document.write(unescape(scriptInfo[key]));
		}
		/* Bandera de modo local de prueba activada al no tener jQuery predefinido */
		BMNWidgetMapLocatorParams.standaloneMode = true;
		checkJquery();
	}

	document.write(unescape('%3Clink rel="stylesheet" href="'+BMNWidgetMapLocatorParams.baseUrl+'styles/locator.css"/%3E'));
}

locatorAmbientDetect();

function getScript(url,success,error){
	var xmlhttp=document.createElement('script');
	var head=document.getElementsByTagName('head')[0];
	var done=false;
	xmlhttp.src=url;
	xmlhttp.onload = xmlhttp.onreadystatechange = function() {
		if ( !done && (!xmlhttp.readyState || (xmlhttp.readyState == 'loaded' || xmlhttp.readyState == 'complete')) ) {
			done=true;
			success();
			xmlhttp.onload = xmlhttp.onreadystatechange = null;
			head.removeChild(xmlhttp);
		}
	};
	xmlhttp.onerror=function() {
		error();
	};
	head.appendChild(xmlhttp);
}

// retorno despu&eacute;s de carga de google maps
function locatorDOMReady() {
	//console.log('domready');
	if( !BMNWidgetMapLocatorParams.fullLoaded ) {
		// carga los scripts que dependen de Google Maps
		if( !BMNWidgetMapLocatorParams.noGoogleMaps ) {
			$('.widget_map').append('<script src="'+BMNWidgetMapLocatorParams.baseUrl+'js/infobox.js"></script>');
			$('.widget_map').append('<script src="'+BMNWidgetMapLocatorParams.baseUrl+'js/markerwithlabel.js"></script>');
		}
		bmnLocatorMapWidgetInstance = new BMNWidgetMap(BMNWidgetMapLocatorParams);
		//bmnLocatorMapWidgetInstance.init( bmnLocatorDetectorInstance.queryLocationStatus(bmnLocatorMapWidgetInstance.FORCE_CLASSIC_VIEW), bmnLocatorDetectorInstance );
		bmnLocatorMapWidgetInstance.initMaster();
		bmnLocatorDetectorInstance = new BMNLocationDetector(function(status,geolocation,context) {
			bmnLocatorMapWidgetInstance.geoDetectorObj = context; // instancia de deteccci&oacute;n de ubicaci&oacute;n
			if( status === BMNLocationDetector.LOCATION_OK_W_TOUT || status == BMNLocationDetector.LOCATION_OK ) {
				$('#mapbtn_detect').removeClass('disabled');
				bmnLocatorMapWidgetInstance.ajustaPosicion(status,geolocation);
			}
			else {
				$('.widget_map .loading').removeClass('open');
			}
		}, bmnLocatorMapWidgetInstance);
		bmnLocatorDetectorInstance.queryLocationStatus();
		BMNWidgetMapLocatorParams.fullLoaded = true;
	}
	$('#maptxt_autocomplete').blur();
}

/**
Define la funcionalidad general de consulta y pintado de lemeentos ne le mapa,
as&iacute; como el control de filtros tambi&eacute;n para el localizador tradicional (cl&aacute;sico).
**/
function BMNWidgetMap(params) {
	/*
	L&oacute;gica para asignaci&oacute;n de banderas tomando como referencia enteros positivos de 31 bits.

	8388608 reservado | 524288 	reservado 		| 32768 reservado | 2048 +DOM (reservado) | 128 reservado 	 	| 8 Centros Pyme
	4194304 reservado | 262144 	solo activos 	| 16384 reservado | 1024 +SAB 			  | 64	reservado 	 	| 4 BMN
	2097152 reservado | 131072 	Autocajero  	| 8192 	reservado | 512	+USD 			  | 32 	reservado 	 	| 2 IXE
	1048576 reservado | 65536 	ATM  			| 4096 	reservado | 256	Sucursal 		  | 16 	Casa de Bolsa 	| 1 Corresponsalia    
	_______________________________________________________________________________________

	El mapeo de campos va de acuerdo a la clase

	com.banorte.sumando.bo.utils.LocatorUtils ->
	public static String[] transformCampoCentro(final BankCenterMarkTO centro, int uid)

	*/
	this.MKR_REG_SIZE = 25; /* tama&ntilde;o inicial del registro de datos */
	this.F_TIPO_CORRESPONSALIA 	= 1;
	this.F_TIPO_IXE 			= 2;
	this.F_TIPO_BANORTE 		= 4;
	this.F_TIPO_CENTROPYME		= 8;
	this.F_TIPO_CASADEBOLSA		= 16;
	this.F_SUCURSAL				= 256;
	this.F_SUCURSALCONUSD		= 512;
	this.F_SUCURSALSABADOS		= 1024;
	this.F_CAJERO				= 65536;
	this.F_CAJEROAUTO			= 131072;
	this.F_CAJEROACTIVO			= 262144;
	this.F_OXXO   				= 32;
	this.F_7ELEVEN   			= 64;
	this.F_GCONTROL   			= 128;
	this.F_TIPO_FDELAHORRO 			= 1024;
	this.F_FARMACIAGDL   		= 2048;
	this.F_NETPAYGASMART   		= 4096;
	this.F_SORIANA   			= 8192;
	this.F_TELECOM   			= 16384;
	this.F_TIENDAS_EXTRA   		= 32768;
	this.F_WOOLWORTH   			= 262144;
	this.M_ICONS = [
		"banorte_sucursal0", // [0] sucursal banorte lista
		"banorte_sucursal1", // [1] sucursal banorte mapa
		"banorte_cajero0", // [2] cajero banorte lista
		"banorte_cajero1", // [3] cajero banorte mapa
		"banorte_maintance0", // [4] cajero banorte lista mantenimiento
		"banorte_maintance1", // [5] cajero banorte mapa mantenimiento
		"", // [6] resevado para lista pyme (normalmente no se muestra, por si se requiere)
		"pyme", // [7] centro pyme (solo mapa), no hay lista
		"", // [8] reservado para lista casa de bolsa (normalmente no se muestra, por si se requiere)
		"casadebolsa", // [9] casa de bolsa (solo mapa), no hay lista
		"corresponsalia", // [10] corresponsal&iacute;a lista
		"corresponsalia", // [11] corresponsal&iacute;a mapa
		"ixe_sucursal0", // [12] sucursal ixe lista
		"ixe_sucursal1", // [13] sucursal ixe mapa
		"ixe_cajero0", // [14] cajero ixe lista
		"ixe_cajero1", // [15] cajero ixe mapa
		"ixe_maintance0", // [16] cajero ixe lista mantenimiento
		"ixe_maintance1", // [17] cajero ixe mapa mantenimiento
	];
	this.brand = params.brand; /**/
	this.data = []; /* datos de detalle de centros banorte */
	this.dataAsignacionTurnos = []; /* banderas para mostrar y ocultar la opcion de solicitar turno, esto para evitar que pidan multiples turnos */
	this.marcas = []; /* lista de pines de mapa con correspondencia 1:1 con this.data */
	this.datosGlobos = []; /* lista de infobox con su respectivo estado activo (inactivo) */
	this.autocomplete = null; /* referencia al campo de autocompletar */
	this.opciones = 0; /* banderas para el filtro */
	this.opcionesPrev = 0; /* banderas previas de filtro */
	this.currentLatLng = null; /* posici&oacute;n actual en el mapa */
	this.previousLatLng = null; /* posici&oacute;n de respaldo para centros pyme */
	this.map = null; /* MAPA de google */
	this.centerMarker = null; /* marca para el punto central de la b&uacute;squeda radial "MONITO" */
	this.currBounds = null;
	this.latlngbounds = null; /**/
	this.autozoom = false; /* bandera que aplica cuando no se tienen filtros o se consultan centros pyme y casas de bolsa*/
	this.casasypymes = false; /* bandera para detectar si est&aacute; en vista rep&uacute;blica o normal */
	this.watchID  = null; /* geo loc watch */
	this.enableGeoWatchLocation = false; /* habilita el modo watchLocation */
	this.currArea = null; /* c&iacute;rculo de &aacute;rea de b&uacute;squeda */
	this.zoom = 5; /* nivel de zoom base*/
	this.prevzoom = this.zoom; /* zoom backup */
	this.zoomwdata = 15; /* nivel de zoom predeterminado */
	this.mapCompatible = false; // true: soporta google maps, false: no
	this.status = null;
	this.geoPosition = null;
	this.geoDetectorObj = null;
	this.directionsDisplay = null; /* Servicios de GM API para pintar las rutas como llegar */
	this.directionsService = null; /* Servicios de GM API para obtener los datos de las rutas como llegar */
	this.radiuz = 35.0; /* distancia radial para considerar marcas fusionables */
	this.POS_ISJOINED = 23; /* posici&oacute;n de &iacute;ndice de punto fusionado (permite marcar los ignorados) */
	this.POS_JOINED = 24; /* lista de puntos fusionados */
	this.fusee = []; /* datos de puntos fusiondos */
	this.DEG_TO_RAD = (180/Math.PI); /* Constante de uso para Radianes */
	this.MERGE_POINTS = true; /* Habilita la fusi&oacute;n de puntos muy cercanos */
	this.TEST_MODE = false; /* Muestra los puntos cach&eacute; L1 */
	this.cachePositions = []; /* circulos auxiliares para delimitaci&oacute;n de cach&eacute; */
	this.BRAND_BANORTE = 8;
	this.BRAND_IXE = 1;
	this.BRAND_GFINANCIERO = 6;
	this.CR_LOCALIDAD = true; // true es CR, false es LOCALIDAD, modo en b&uacute;squeda tradicional
	this.FORCE_CLASSIC_VIEW = BMNWidgetMapLocatorParams.forceClassicView; // obliga a que se muestre la vista tradicional sea o no compatible
	this.typeBankCenter = ""; // en b&uacute;squeda tradicional indica el tipo de centro para comboboxes
	this.queryDate = null; // fecha y hora en la que se realiza una b&uacute;squeda
	this.ENABLE_DRAG_AUTOUPDATE = false; // permite actualizar autom&aacute;ticamente la consulta de centros en el evento drag del mapa.
	this.initialFilterMode = true;
	this.PINIMAGEG = typeof google !== 'undefined' ? new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|40ff40",
	        new google.maps.Size(21, 34),
	        new google.maps.Point(0,0),
	        new google.maps.Point(10, 34)) : '';
	this.PINIMAGEP = typeof google !== 'undefined' ? new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|cf40ff",
	        new google.maps.Size(21, 34),
	        new google.maps.Point(0,0),
	        new google.maps.Point(10, 34)) : '';
	this.filters = null; // filtros para localizador tradicional
}

BMNWidgetMap.prototype = {
	constructor: BMNWidgetMap,
	// Elimina todas las marcas del mapa y oculta todos los infobox existentes
	deleteMarkers: function() {
		for( var key in this.marcas ) {
			if( this.marcas[key] != null ) {
				this.marcas[key].setMap(null);
			}
		}
		$('.infoBox').hide();
	},
	/* L&oacute;gica para click en los iconos de los centros */
	buildClickHandler: function(i, y) {
		var obj = y;
		//return function(){
			if( obj.datosGlobos[i].oculto == true ) {

				for(var w=0; w<obj.datosGlobos.length; ++w) { // cierra los otros globos
					if( w != i && obj.datosGlobos[w] != null ) {
						obj.datosGlobos[w].infowin.close();
						obj.datosGlobos[w].oculto = true;
					}
				}
				// abre el globo seleccionado y carga el estatus del turno de esa caja especifica
				//console.info("iniciando globo");
				obj.datosGlobos[i].infowin.open(obj.map,obj.marcas[i]);
				//console.log("SETEANDO: " + bmnLocatorMapWidgetInstance.dataAsignacionTurnos[i]);
				//	console.log("EN LA CAJA: " + i);
				
				//LLAMADO DEL WEBSERVICE DE CONSULTA DE TIEMPO DE ESPERA	
				if(this.data[i][15]){
//					params = {};
//					obj.getWaitingTime(fillParamsForService(params, this.data[i][13]));
//					console.info("ejecutando afectacion de globo");
////					var ctx = this;
////					$(document).on('click', "#globo-'+i+'",{rootCTX: ctx},function(event){});

					$("#idWaitingTimeGeneric").val(i);
//					$("#selectWaitingTimeTest").clone().appendTo(".selectWaitingTimeContainer");
				}
				
				obj.datosGlobos[i].oculto = false;
				obj.colapsaFiltros();
				
				// centrado el globo en click
				var pos = obj.marcas[i].getPosition();
				var pos2 = new google.maps.LatLng(pos.lat()+obj.getLatitudeOffset(obj.map), pos.lng());
				obj.map.setCenter(pos2);
			}
			else {
				obj.datosGlobos[i].infowin.close();
				obj.datosGlobos[i].oculto = true;
			}
		//};
	},
	/* Oculta infobox */
	closeInfoWin: function(i) {
		this.datosGlobos[i].oculto = true;
		$('.infoBox').hide();
	},
	/* */
	onCloseInfoWin: function(i) {
		var obj = this;
		return function(){
			obj.closeInfoWin(i);
		};
	},
	// Crea el subbloque html exclusivo a los cajeros
	createHTMLUSDMant: function(val) {
		var composite = '<ul class="phones dispDolares">Disposici&oacute;n d&oacute;lares: '+((this.data[val][8])?'Si':'No')+'</ul>';
		if( this.data[val][9] ) {
			composite += '<ul class="phones"><strong style="color: #eb0029;">Cajero en mantenimiento.</strong></ul>';
		}
		return composite;
	},
	// Para las corresponsal&iacute;as toma el campo 15 de tipo como parte del nombre,
	// solo en estas el tipo trae cosas como '7 ELEVEN', 'TELECOMM', etc.
	getCorrespondentType: function(m) {
		var ret = " ";
		switch( m[15] ) {
			case 'CJR': // cajero
			case 'CB0': // casa de bolsa
			case 'CPY': // centro pyme
			case 'SUC': // sucursal
			case 'FUS': // fusionado sucursal y cajeros
			case 'FUJ': // fusionado solo cajeros
				break;
			default: // corresponsal&iacute;a
				ret = m[15] + " ";
				break;
		}
		return ret;
	},
	// Crea el html del globo InfoBox, este es el que aparece cuando se hace click en la sucursal o cajero en el mapa
	createHTMLInfoBox: function(m,i,l, queueRequestEnable) {
		var composite1 = '';
		var mergedIdx = (m[24] != null) ? m[24] : [];
		//console.log("-------- m24:");
		//console.log(mergedIdx);
		var composite2 = '';
		// Agrega titulos e iconos (a cajeros el estado usd y mantenimiento) de los elementos fusionados
		for( key in mergedIdx ) {
			//console.log(key);
			if( key != i ) {
				composite2 += '<div class="clear"></div><div class="title">';
				composite2 += '<div class="mapicon '+this.getIcon( mergedIdx[key],this.data[key][14],false,this.data[key][9] )+'" width="59" height="47"></div>';
				composite2 += '<span class="h1ReplaceCaj">'+this.data[key][1]+'</span><!--span class="cajMultiple"> Cajero m&uacute;ltiple: ' + this.data[key][25] + '</span--></div>'; // t&iacute;tulos
				if( mergedIdx[key] == 'CJR' || mergedIdx[key] == 'FUJ' ) {
					composite2 += this.createHTMLUSDMant(key);
				}
			}
		}
		
		if( m[15] == 'CJR' ) {
			composite1 += this.createHTMLUSDMant(i);
			//console.log(composite1);
		}
		else 
		if( m[15] == 'CPY') {
			composite1 += '<ul class="phones">Responsable: '+this.data[i][5]+'</ul>';
		}
		var typeCorresponsal = this.getCorrespondentType(m);
		
//		console.log(m.toString());
		var queueCSSEnable = "";
		if(false){
			if(queueRequestEnable == true){
				queueCSSEnable = '<span id="asignarTurno' + i + '" class="requestQueueID" style="color:#eb0029; cursor: pointer;">' + l[i] + '</span>';
			}else{
				queueCSSEnable = '<span id="asignarTurno' + i + '" class="queueDone" style="color:#eb0029; cursor: auto;">' + l[i] + '</span>';
			}
		}
		var t = '<div class="resultado_selected" id="globo-'+i+'"><div class="boxed">'+
			'<div class="close" style="z-index: 1;" onclick="bmnLocatorMapWidgetInstance.closeInfoWin('+i+')"></div><div class="content">'+
			'<div class="column1A"><div class="title">'+
			'<div class="mapicon '+this.getIcon( m[15],m[14],false,m[9] )+'" width="59" height="47"></div>'+
			'<span class="h1ReplaceCaj">'+(typeCorresponsal+m[1]).toUpperCase()+'</span></div><div class="address">'+m[10]+'</div>'+
			'<ul class="phones">'+m[11]+'</ul><div class="clear"></div>'+
			composite1+	
			composite2+
			'</div>'+ 
			'<div class="column2A"><input class="idCRInfoBox" type="hidden" value="' + m[13] + '"/><input class="idBox" type="hidden" value="' + i + '"/><div class="schedule">'+
			(m[15] == 'CJR'?'':'<span class="h1ReplaceCaj" style="width:100%">Horario</span>')+'<p>'+m[7]+'</p>'+
			this.getAbiertoCerrado(m,false)+'</div><div class="getthere"><a href="#" onclick="bmnLocatorMapWidgetInstance.routeToPoint('+i+');"><div src="" title="&iquest;C&oacute;mo llegar?" alt="ÃÂ¿C&oacute;mo llegar?"></div>&iquest;C&oacute;mo llegar?</a></div><div class="selectWaitingTimeContainer">';
		  
//			if(m[15] == "SUC"){
//				t = t +	'<span>Tiempo de espera:</span><br /><span id="infoboxWaitingTime' + i + '" class="infoboxWaitingTime">Cargando...</span><br /><br /><br />' + queueCSSEnable + '</div></div>';
//			}else{
//				t = t + '</div></div>';
//			}
			var testWsQueuetimeEnable;
			if(ws_queuetime_enable !=null){
				testWsQueuetimeEnable = ws_queuetime_enable;
			}else{
				testWsQueuetimeEnable = true;
			}
			
			if(m[15] == "SUC" && testWsQueuetimeEnable){
				//debugger;
				t = t +	'<span>Seleccionar el tipo de tr&aacute;mite a realizar en esta sucursal para obtener el tiempo de espera: </span><br />'+
						'<select id="selectWaitingTime" class="infoboxSelectWaitingTime">'+
						'	<option value="">Seleccionar</option>'+
						'	<option value="1a4mov">1 a 4 Movimientos</option>'+
						'	<option value="nc_1a4">1 a 4 Movimientos sin ser cliente Banorte</option>'+
						'	<option value="ejec_reg">Ejecutivo Regular </option>'+
						'	<option value="esc_pref">Escritorio Preferente</option>'+
						'	<option value="caja_pref">Caja Preferente</option>'+
						'	<option value="4omasmov">Mas de 4 movimientos</option>'+
						'</select><br />'+
						'<span class="waitingTimeText" style="display:none;">Tiempo de espera: </span><span class="infoboxWaitingTime"></span><br /><br />'+
						'<div class="waitingTimeTextHMS" style="width: 100%; height: 10px; text-align: right; font-size: 10px; margin-top: -11px; display: none; border: solid 1px white;">HH   MM   SS</div>'+
						queueCSSEnable + '</div></div>';
			}else{
				t = t + '</div></div>';
			}
			
			t = t + '<div class="clear"></div><div class="streetview"><div class="overflow">'+
			'<img onclick="bmnLocatorMapWidgetInstance.requestPanorama('+i+')" src="https://maps.googleapis.com/maps/api/streetview?size=395x74&location='+m[16]+','+m[17]+'&fov=120&heading=0&pitch=10"/>'+
			'</div></div></div></div><div class="arrow"></div></div>';
		//console.log(t);

			
		return t;
	},
	// Recorta el campo de direcci&oacute;n para que quede en una l&iacute;nea
	trunctateAddressForList: function(addr) {
		addr = addr == undefined ? '' : addr;
		var idx = addr.indexOf(',');
		if( idx > 0 ) {
			addr = addr.substring(0,idx);
		}
		var TXT_TRUNCTATE = 29;
		if( idx > TXT_TRUNCTATE ) {
			addr = addr.substring(0, TXT_TRUNCTATE) + "...";
		}
		return addr;
	},
	getAbiertoCerrado: function(m, isLista) {
		var classAbierto = (m[20]) ? (isLista?'abierto':'open') : (isLista?'cerrado':'closed');
		var msgAbierto = m[20] ? 'ABIERTO' : ' CERRADO';
		if( (m[15] == 'CJR' || m[15] == 'FUJ') && m[9] ) { // si es cajero y est&aacute; en mantenimiento
			classAbierto = (isLista?'cerrado':'closed');
			msgAbierto = isLista?'MANTTO.':'&nbsp;';
		}
		return '<span class="'+classAbierto+'">'+msgAbierto+'</span>';
	},
	// Crea un elemento para la lista de resultados
	createListElement: function(m,i) {
		return '<li id="le-'+i+'"><div class="column3A">'+
			'<div class="mapicon '+this.getIcon( m[15],m[14],false,m[9] )+'" width="59" height="47"></div></div>'+
			'<div class="column3B">'+(this.getCorrespondentType(m)+m[1]).toUpperCase()+'</div>'+
			'<div class="column3C">'+this.getThDistance(m[22])+'<br>'+this.getAbiertoCerrado(m, true)+'</div><div class="clear"></div>'+
			'<div class="description"><p>'+this.trunctateAddressForList(m[10])+'</p><span>'+(m[7]==""?"DISPONIBLE LAS 24 HRS.":m[7])+'</span></div></li>';
	},
	initializeCommonWdgMapEvents: function() {
		var obj = this;
		$('.widget_map input[type=checkbox]').click(function(e) {
			console.log("Opcion:" + $(this).val());
			console.log("Opciones previas: " + obj.opcionesPrev);
			console.log("opciones: " + obj.opciones);
			var val =  $(this).val();
			obj.opcionesPrev = obj.opciones;
			if( $(this).is(':checked') ) {
				obj.opciones |= val;
			}
			else {
				obj.opciones ^= val;
			}
			obj.enableLinkedOptions(val, obj.opcionesPrev);
			//console.log('BMNWidgetMapLocatorParams.noGoogleMaps:' + BMNWidgetMapLocatorParams.noGoogleMaps);
			if( !BMNWidgetMapLocatorParams.noGoogleMaps ) { // b&uacute;squeda mapa.
				obj.getDataAtCurrPos(false);
			}
			else { // b&uacute;squeda tradicional
				obj.filters.flag = obj.opciones;
				obj.getDataAtCbFilters(obj, obj.filters);
			}
			
		});

		$('.widget_map .nomap.error-message .close_widget').click(function(e) {
//			console.log('headerGlobalOpen:' + headerGlobalOpen);
			if(headerGlobalOpen==false){ headerCloseWidgets(); }
		});

		$('.widget_map .navbar .layout .tool_line .close_widget').click(function(e) {
			obj.closePanorama();
		});
	},
	// Inicializa los objetos de mapa que utilizan la API de Google Maps
	initializeLCoreWdgMapEvents: function() {
		var obj = this;
		var ROAD_COLOR = "#808080"; //"#e7e7e7";
		var TEXT_FILL = "#010101";
		var LANDSCAPE_COLOR = "#fffff8";
		var superstyle = [ 
			{"featureType":"administrative", "elementType":"labels.text.fill",	"stylers": [ { "color": "#c32b55" } ] }/*,
			{"featureType":"poi", "elementType":"labels", "stylers": [ { "visibility": "off" } ] }*/
			/*{"featureType":"landscape.man_made",								"stylers": [ { "visibility": "on" }, { "color": LANDSCAPE_COLOR } ] },
	  		{"featureType":"road.local", "elementType":"geometry.fill",    		"stylers": [ { "visibility": "on" }, { "color": ROAD_COLOR } ] },
	  		{"featureType":"road.local", "elementType":"geometry.stroke",	    "stylers": [ { "visibility": "on" }, { "color": LANDSCAPE_COLOR } ]	},
		  	{"featureType":"road.local", "elementType":"labels.text.fill",   	"stylers": [ { "visibility": "on" }, { "color": TEXT_FILL } ] },
	  		{"featureType":"road.local", "elementType":"labels.text.stroke", 	"stylers": [ { "visibility": "on" }, { "color": ROAD_COLOR } ] },
	  		{"featureType":"road.arterial", "elementType":"geometry.fill",   	"stylers": [ { "visibility": "on" }, { "color": ROAD_COLOR } ] },
	  		{"featureType":"road.arterial", "elementType":"geometry.stroke",  	"stylers": [ { "visibility": "on" }, { "color": LANDSCAPE_COLOR } ]	},
		  	{"featureType":"road.arterial", "elementType":"labels.text.fill",	"stylers": [ { "visibility": "on" }, { "color": TEXT_FILL } ] },
	  		{"featureType":"road.arterial", "elementType":"labels.text.stroke",	"stylers": [ { "visibility": "on" }, { "color": ROAD_COLOR } ]	},
	  		{"featureType":"poi", "elementType":"geometry",    					"stylers": [ { "color": "#b1dbb8" } ] },
	  		{"featureType":"landscape.natural", "elementType":"geometry",		"stylers": [ { "color": "#f4f9e5" } ] },
	  		{"featureType":"administrative", "elementType":"labels.text.fill",	"stylers": [ { "color": "#c32b55" } ] }*/
		];
		var mapOptions = {
			zoom: this.zoom,
			center: this.currentLatLng,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: superstyle,
			disableDoubleClickZoom: true,
			scrollwheel: false
		};
		var canvasEl = document.getElementById('map-canvas');
		//console.log(canvasEl);
		this.map = new google.maps.Map(canvasEl, mapOptions);
		this.loadDirectionsServices(); // obtiene
		this.geocoder = new google.maps.Geocoder(); // direcci&oacute;n a la inversa, devuelve coordenadas
		google.maps.event.addListener(this.map, 'dblclick', function(event) {
			obj.onMapDblClick(event);
		});
		google.maps.event.addListener(this.map, 'dragend', function() {
			if( obj.ENABLE_DRAG_AUTOUPDATE ) {
				//console.log('map dragged');
				//console.log(obj.map.getCenter());
				obj.currentLatLng = obj.previousLatLng = obj.map.getCenter();
				obj.reverseGeocoding();
				obj.getDataAtCurrPos(false); // ir&aacute; true TODO: Corregir globos incorrectamente creados
			}
		});
		google.maps.event.addListener(this.map, 'bounds_changed', function() {
	        try {
	            obj.currBounds = obj.map.getBounds();
	        } catch( err ) {
	            alert( err );
	        }
	    });
	    google.maps.event.addListener(this.map, 'zoom_changed', function() {
		    obj.zoom = /*this.prevzoom =*/ obj.map.getZoom();
		});
		$(this).unbind('keypress');
		$(this).unbind('focus');
		this.loadGeoCoder();
		$('#maptxt_autocomplete').keyup(function(e) {
			var keycode = (e.keyCode ? e.keyCode : e.which);
			if(keycode == '13') {
				if( $(this).val() == '' ) {
	    			obj.displayMessage('Debe especificar una direcci&oacute;n.');
	    		}
			}
			else {
				// selecciona en gris el elemento 
				var ctxx = this;
				if( keycode == '38' || keycode == '40' ) {
					//console.log(keycode);
					$('.pac-item').css('background-color','#fefefe');
					$('.pac-item').each(function(idx) {
						var v = ($(this).text() + '').split(" ").join("");
						var txtf = ($(ctxx).val() + '').replace(',','');
						txtf = txtf.split(" ").join("");
						if(txtf == v) {
							//console.log(txtf + ' : ' + v);
							$(this).css('background-color','#efefef');
						}
						
					});
				}
			}
	    	return false;
	    });
	    $('body').keypress(function(e) {
			var keycode = (e.keyCode ? e.keyCode : e.which);
			var zoomMap = obj.map.getZoom() + (keycode == '43'? 1 : (keycode == '45'? -1 : 0));
			obj.map.setZoom(zoomMap);
	    });
		
		$('#maptxt_autocomplete').focus();
		$('.zoom_in').click(function(e) {
			obj.zoom = obj.zoom+1;
			obj.zoom = obj.zoom >= 19 ? 18 : obj.zoom;
			obj.prevzoom = obj.zoom;
			obj.map.setZoom(obj.zoom);
		});
		$('.zoom_out').click(function(e) {
			obj.zoom = obj.zoom-1;
			obj.zoom = obj.zoom <= 5 ? 5 : obj.zoom;
			obj.prevzoom = obj.zoom;
			obj.map.setZoom(obj.zoom);
		});
		$('#mapbtn_detect').click(function( e ) {
			obj.setLoadingMask(true);
			obj.geoDetectorObj.getLocation();
			obj.closePanorama();
		});

		// eventos "toggle" de lista y subfiltros
		var resultados = ['.interactive_resultados', '.headline', '.resultados'];
		// para abrir el panel de resultados
		$(resultados[0]+' '+resultados[1]).click(function(){
			$(resultados[0]+' '+resultados[1]).toggleClass('open');
			$(resultados[0]+' '+resultados[2]).slideToggle();
		});

		//var filtros = ['.interactive_filters', '.open_subfilters', '.morefilters'];
		var filtros = ['.interactive_filters', '#subFiltroCAJSUC', '.morefilters','#subFiltroCorrespondent','.morefiltersCorrespondent'];
		// para abrir subfiltros
		$(filtros[1]).click(function(){
			$(filtros[2]).slideToggle();
			$(filtros[1]).toggleClass('open');
		});


		$(filtros[3]).click(function(){
			$(filtros[4]).slideToggle();
			$(filtros[3]).toggleClass('open');
		});

		// carga servicios de como llegar a las ubicaciones
		
		if( this.TEST_MODE ) {
			this.showPositionsCache();
		}
	},
	// Para validar la carga correcta del cach&eacute; L1
	// Con TEST_MODE == true, muestra marcar de las posiciones (Cach&eacute; L1) de donde se cargan los puntos de cach&eacute; L2.
	showPositionsCache: function() {
		var obj = this;
		var timeNow = new Date().getTime();
		this.doAjaxS(BMNWidgetMapLocatorParams.gvUrl2, {}, function(resp) {
			// limpia posiciones de cach&eacute; previas
			for( var key in obj.cachePositions ) {
				obj.cachePositions[key].setMap(null);
			}
			obj.cachePositions = [];
			var rows = resp.split('==');
			for( var key in rows ) {
				var row = rows[key].trim();
				var cols = row.split("|");
				var timeDiff = Math.abs(timeNow - Number(cols[3]));
				var marker = new google.maps.Marker({
	                position: new google.maps.LatLng(cols[0]/100.0,cols[1]/100.0), 
	                title: 'Cache pos #' + key + " @ ("+cols[0]/100.0+","+cols[1]/100.0+") time:" + timeDiff/100 + " seg.",
	                map: obj.map,
	                icon: obj.PINIMAGEG //( timeDiff < 10000 ? obj.PINIMAGEG : obj.PINIMAGEP )
	            });
	            obj.cachePositions.push(marker);
			}
			obj.setLoadingMask(false);
		});
	},
	// Maneja el doble click en el mapa
	onMapDblClick: function(event) {
		this.currentLatLng = this.previousLatLng = event.latLng;
		// pinta la direcci&oacute;n en el campo de direcci&oacute;n de la ubicaci&oacute;n donde se di&oacute; doble click
		this.reverseGeocoding();
		// actualiza la lista de puntos
		this.getDataAtCurrPos(false);
	},
	// Obtiene la direcci&oacute;n a partir de la lat y lng actual y la coloca en el campo de direcci&oacute;n
	reverseGeocoding: function() {
		var obj = this;
		if( this.geocoder == undefined ) {
			this.geocoder = new google.maps.Geocoder(); 
		}
		this.geocoder.geocode({'latLng': this.currentLatLng}, function(results, status) {
			var dir = 'Sin direcci&oacute;n en esta ubicaci&oacute;n.';
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[1]) {
					dir = results[1].formatted_address;
				}
			} else {
				obj.displayMessage('Error al codificar la direcci&oacute;n ' + status);
			}
			$('#maptxt_autocomplete').val(dir);
		});
	},
	// Obtiene el tipo del centro en nombre "ciudadano".
	getTypeText: function(type,mbrand) {
		var text = "";
		var brandText = mbrand == 1 ? 'Preferente' : 'Banorte';
		switch( type ) {
			case "CJR": // cajero
				text = 'Cajero ' + brandText;
				break;
			case 'FUJ': // fusionado solo cajeros
				text = 'Cajeros ' + brandText;
				break;
			case "CB0": // casa de bolsa
				text = 'Casa de Bolsa ' + brandText;
				break;
			case "CPY": // centro pyme
				text = 'Centro Pyme ' + brandText;
				break;
			case "SUC": // sucursal
			case "FUS": // sucursal
				text = 'Sucursal ' + brandText;
				break;
			default: // corresponsal&iacute;a
				text = 'Corresponsal '; // + brandText;
				break;
		}
		return text;
	},
	// Obtiene el class CSS del icono para el mapao lista de resultados,
	// considerando la marca 8Banorte o Ixe) y si aplica el modo en mantenimiento (solo cajeros aplica).
	getIcon: function(type,mbrand,forMap,warn) {
		var icon = "";
		switch( type ) {
			case 'CJR': // cajero
			case 'FUJ': // fusionado solo cajeros
				icon = warn ? // en mantenimiento
						(forMap ? 
							(this.BRAND_BANORTE == mbrand? this.M_ICONS[5] : this.M_ICONS[17]) : // mapa mantenimiento
							(this.BRAND_BANORTE == mbrand? this.M_ICONS[4] : this.M_ICONS[16])   // lista mantenimiento
						) :
						(forMap ? 
							(this.BRAND_BANORTE == mbrand? this.M_ICONS[3] : this.M_ICONS[15]) : // mapa
							(this.BRAND_BANORTE == mbrand? this.M_ICONS[2] : this.M_ICONS[14])   // lista
						);
				break;
			case 'CB0': // casa de bolsa
				icon = forMap ? this.M_ICONS[9] : this.M_ICONS[9]; //'';
				break;
			case 'CPY': // centro pyme
				icon = forMap ? this.M_ICONS[7] : this.M_ICONS[7]; //'';
				break;
			case 'SUC': // sucursal
			case 'FUS': // fusionado sucursal y cajeros
				icon = forMap ? 
							(this.BRAND_BANORTE == mbrand? this.M_ICONS[1] : this.M_ICONS[13]) : // mapa
							(this.BRAND_BANORTE == mbrand? this.M_ICONS[0] : this.M_ICONS[12]); // lista
				break;
			default: // corresponsal&iacute;a
				icon = this.M_ICONS[10];
				break;
		}
		return icon;
	},
	// Fusiona punto cajero y sucursal, sucursal tiene prioridad, se asume que el valor i es el &iacute;ndice
	// de la sucursal, el resto son cajeros, v&eacute;ase el algoritmo de "flagNearestPoints"
	mergePoint: function(i) {
		this.data[i][2] = "";
		for( var key in this.data[i][this.POS_JOINED] ) {
			 // concatena nombres
			this.data[i][2] += this.data[key][1] + "|";
		}
	},
	// A partir de un registro de detalle de centro se crea el pin en el mapa, el infobox y 
	// el elemento de lista (si aplica), todos con sus eventos correspondientes
	loadPoint: function(i, limit) {
		var isDrawable = true;
		// es punto para fusionar sin lista
		if( this.data[i][this.POS_ISJOINED] && this.data[i][this.POS_JOINED] == null ) {
			// omite los marcados para fusi&oacute;n para ser ignorados
			isDrawable = false;
		}
		else if(  this.data[i][this.POS_ISJOINED] && this.data[i][this.POS_JOINED] != null ) {
			// reemplaza el contenido de this.data[i] por el consolidado de todos los puntos
			this.mergePoint(i);
		}

		if( isDrawable && typeof google !== 'undefined') {
			// flujo normal para crear un punto
			var punto = new google.maps.LatLng(this.data[i][16], this.data[i][17]);
			this.latlngbounds.extend(punto);

			var marker = new MarkerWithLabel({
				position: punto,
				title: this.getTypeText(this.data[i][15],this.data[i][14]) + " (Centro No. "+i+")",
				clickable: true, 
				icon: BMNWidgetMapLocatorParams.baseUrl+'images/icondummy.png', // 59px x 47px
				map: this.map,
				labelAnchor: new google.maps.Point(30, 47),
				labelContent: '<div style="width:59px; height:47px;"></div>',
				// getIcon: function(type,mbrand,forMap,warn)
				// warn prev: (this.data[i][15]=='FUS' || this.data[i][15]=='FUJ')?this.data[i][4]:this.data[i][9]
				labelClass: 'mapicon ' + this.getIcon(this.data[i][15],this.data[i][14],true,this.data[i][9])
			});

			this.marcas.push(marker);
			var html = this.createHTMLInfoBox(this.data[i], i, this.dataAsignacionTurnos, true);
			
			var myOptions = {
				content: html,
				disableAutoPan: true,
				maxWidth: 0,
//				pixelOffset: new google.maps.Size(-176, -17),
				pixelOffset: new google.maps.Size(-210, -17),
				zIndex: 200,
				infoBoxClearance: new google.maps.Size(1, 1),
				alignBottom: true,
				isHidden: false,
				pane: "floatPane",
				enableEventPropagation: true
			};
			var infiwindow = new InfoBox(myOptions);// new google.maps.InfoWindow({ content:html });
			var obj = this;
			$('#globo-'+i+' .boxed .close').click(function(e) {
				obj.closeInfoWin(i);
			});
			this.datosGlobos.push({
				//punto: punto,
				// html: html,
				// imagen: '',
				infowin: infiwindow,
				oculto: true
			});
			
			var f = this;
//			google.maps.event.addListener(marker, 'click', this.buildClickHandler(i) );
			google.maps.event.addListener(marker, 'click', function() {
//				console.log(i);
				f.buildClickHandler(i, f);
	        });
			
			google.maps.event.addListener(marker, 'mouseover', function () {
		        this.setOptions({zIndex:10});
		    });
		    google.maps.event.addListener(marker, 'mouseout', function () {
		        this.setOptions({zIndex:1});
		    });
			google.maps.event.addListener(infiwindow, 'closeclick', this.onCloseInfoWin(i) );
		 
		 	if( !this.casasypymes ) {
		 		this.addListElementWHandlers(i);
		 	}
		 }
		 else { // puntos omitidos, IMPORTANTE, permite manejar el mismo &iacute;ndice que los datos originales
		 	this.marcas.push(null);
			this.datosGlobos.push(null);
		}
	},
	// Genera el html para cada elemento de lista, lo coloca en la lista de 
	// resultados y crea el handler de click correspondiente.
	addListElementWHandlers: function(i) {
		$('#rlist').append(this.createListElement(this.data[i],i));
		var obj = this;
		$('#le-'+i).click(function(e) {
			obj.colapsaFiltros();
			$('.widget_map .navbar .layout .interactive_resultados .resultados ul li').removeClass('active');
			$(this).addClass('active');
			var sel = (e.currentTarget.id).split('-')[1];
			google.maps.event.trigger(obj.marcas[sel], 'click');
			// posiciona el globo al centro del mapa
			var pos = obj.marcas[sel].getPosition();
			var pos2 = new google.maps.LatLng(pos.lat()+obj.getLatitudeOffset(obj.map), pos.lng());
			obj.map.setCenter(pos2);
		});
	},
	// Auxiliar en la ubicaci&oacute;n vertical del globo a 1/3 del alto del mapa respecto a 
	// las coordenadas geogr&aacute;ficas
	getLatitudeOffset: function(map) {
		var bounds = map.getBounds(); 
		// diferencia de latitudes
		var latDiff = bounds.getNorthEast().lat() - bounds.getSouthWest().lat();
		return latDiff/3;
	},
	// Lista de resultados para b&uacute;squeda tradicional sin Google Maps.
	loadList: function() {
		var tbodi = $('.widget_map .nomap .resultados table tbody');
		tbodi.empty();
		for( var i=0; i<this.data.length; ++i ) {
			var tipo = this.getTypeText(this.data[i][15],this.data[i][14]);
			tbodi.append('<tr>').append('<td>'+tipo+'</td>',
				'<td>'+this.data[i][1]+'</td>',
				'<td>'+this.data[i][10]+'</td>');
		}
	},
	// Limpia los datos previos e itera la lista de datos de detalle de centros
	loadPoints: function() {
		this.setLoadingMask(true);
		//console.log('loadList');
		$('#rlist').empty();
		this.marcas = [];
		this.datosGlobos = [];
		this.latlngbounds = typeof google !== 'undefined' ? new google.maps.LatLngBounds() : null;
		for( var k=0; k<this.data.length; ++k ) {
			this.loadPoint(k, null);
		}
		if( this.data.length > 0 ) {
			// si la lista no est&aacute; vac&iacute;a y aplica el autozoom ajusta el mapa para visualizar todos los puntos
			if( this.autozoom && this.latlngbounds != null ) {
				this.map.fitBounds(this.latlngbounds);
			}
		}
		this.setLoadingMask(false);
	},
	// Obtiene los datos del campo autocompletar
	fillInAddress: function(hideMessage) {
		this.closePanorama();
		$("#maptxt_autocomplete").blur();
		var place = this.autocomplete.getPlace();
		if( place !== undefined && place.geometry !== undefined ) {
			this.currentLatLng = this.previousLatLng = place.geometry.location;
			this.getDataAtCurrPos(false);
		}
		else {
			var val = $('#maptxt_autocomplete').val();
			if( val != '' && val != $('#maptxt_autocomplete').attr('placeholder') ) {
				this.displayMessage('La direcci&oacute;n no es v&aacute;lida, debe seleccionarse de la lista desplegable, intente de nuevo.');
			}
			else if(!hideMessage) {
				this.displayMessage('Debe especificar una direcci&oacute;n.');
			}
		}
	},
	// Carga el codificador de direcciones en el campo de autocompletar direcci&oacute;n
	loadGeoCoder: function() {
		var htmlEl = document.getElementById('maptxt_autocomplete');
		if( htmlEl != null ) {
			this.autocomplete = new google.maps.places.Autocomplete(
				htmlEl, /** @type {HTMLInputElement} */
				{ componentRestrictions: {country: 'mx'} });
		  	// carga los datos de la direcci&oacute;n seleccionada de la lista
		  	var obj = this;
			google.maps.event.addListener(this.autocomplete, 'place_changed', function() { obj.fillInAddress(false); });
			obj.fillInAddress(true);
			// este listener es necesario para evitar la redirecci&oacute;n en IE9 a la pag de indicadores
			google.maps.event.addDomListener(htmlEl, 'keydown', function(e) { 
				if (e.keyCode == 13) { 
					if (e.preventDefault) { 
						e.preventDefault(); 
					} 
					else { 
						// Since the google event handler framework does not handle 
						// early IE versions, we have to do it by our self. :-( 
						e.cancelBubble = true; 
						e.returnValue = false; 
					} 
				} 
			}); 
		}
	},
	// Invoca la consulta de datos, dada una posici&oacute;n lat, lng
	displayLocation: function(position, ctx) {
		if( typeof google !== 'undefined' ) {
			ctx.currentLatLng = ctx.previousLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			ctx.reverseGeocoding();
		}
		ctx.getDataAtCurrPos(false);
	},
	// Alimina el circulo de cobertura e &iacute;cono previos
	clearArea: function() {
		if( this.currArea != null ) {
			this.currArea.setMap(null);
		}
		if( this.centerMarker != null ) {
			this.centerMarker.setMap(null);
		}
	},
	// Crea o actualiza el c&iacute;rculo de cobertura radial de la b&uacute;squeda as&iacute; como
	// el &iacute;cono central de ubicaci&oacute;n detectada.
	drawArea: function(position) {
		this.clearArea();
		var searchArea = {
			strokeColor: '#808080', //8a8a8a
			strokeOpacity: 0.3,
			strokeWeight: 0,
			fillColor: '#808080',
			fillOpacity: 0.17, 
			map: this.map,
			clickable: false,
			center: position,
			radius: 4000
		};
		this.currArea = new google.maps.Circle(searchArea);
		this.centerMarker = new google.maps.Marker({
			position: this.currentLatLng,
			title: "Mi ubicaci&oacute;n detectada",
			clickable: true,
			map: this.map,
			icon: BMNWidgetMapLocatorParams.baseUrl+'images/monito.png'
		});
	},
	// Cierra la lista de resultados si est&aacute; abierta
	colapsaLista: function() {
		if( $('.widget_map .navbar .layout .interactive_resultados .headline').hasClass('open') ) {
			$('.widget_map .navbar .layout .interactive_resultados .headline').click();
		}
	},
	// expande lista de resultados si est&aacute; colapsada
	expandeLista: function() {
		if( !$('.widget_map .navbar .layout .interactive_resultados .headline').hasClass('open') ) {
			$('.widget_map .navbar .layout .interactive_resultados .headline').click();
		}
	},
	// Colapsa filtros si no han sido ocultados previamente
	colapsaFiltros: function() {
		if( $('.widget_map .navbar .layout .interactive_filters .open_subfilters').hasClass('open') ) {
			$('.widget_map .navbar .layout .interactive_filters .open_subfilters.open').click();
		}
	},
	// Expande filtros secundarios solo si no est&aacute;n previamente abiertos
	expandeFiltros: function() {
		if( !$('.widget_map .navbar .layout .interactive_filters .open_subfilters').hasClass('open') ) {
			$('.widget_map .navbar .layout .interactive_filters .open_subfilters').click();
		}
	},

	// Valida si el campo de direcci&oacute;n tiene contenido
	hasAddress: function() {
		return  $('#maptxt_autocomplete').val() !== '';
	},
	// 
	getDataAtCurrPos: function(stealthLoading) {
		
		console.warn("ENTERING getDataAtCurrPos() function");
		if( this.map ) {
			this.map.setCenter( this.currentLatLng );
		}
		//console.log( this.currentLatLng );
		var isLoad = false;
		var params = {flag: this.opciones, lat: this.currentLatLng.lat(), lng: this.currentLatLng.lng(), brand: this.brand};
		if( params.flag == 0 /*&& this.hasAddress()*/ ) {
			this.disableMainFilters(false);
			if( this.initialFilterMode ) {
				this.on('#mapchk_sucursales');
				this.on('#mapchk_cajeros');
				this.initialFilterMode = false;
			}
			this.enableLinkedOptions(0, this.opciones); // no importa el filtro obtiene el correcto
			params.flag = this.opciones;
		}
		else if( !this.hasAddress() ) {
			this.zoom = 5;
		}
		
		if( (params.flag & ( this.F_TIPO_CENTROPYME | this.F_TIPO_CASADEBOLSA )) !== 0  ) {
			if( this.TEST_MODE ) { console.log('pyme y casas'); }
			if( this.map ) {
 				console.log("filtrando centros pyme:"+(params.flag & ( this.F_TIPO_CENTROPYME | this.F_TIPO_CASADEBOLSA )));
				this.clearArea();
				params.flag &= ( this.F_TIPO_CENTROPYME | this.F_TIPO_CASADEBOLSA );
				this.colapsaFiltros();
				this.casasypymes = true;
				//$('#maptxt_autocomplete').
				$('#maptxt_autocomplete').prop('disabled','true');
				$('#maptxt_autocomplete').addClass('autocomplete_disbled'); //.css('background-color','#e4e4e4');
				isLoad = true;
				this.prevzoom = this.zoom;
				this.previousLatLng = this.currentLatLng;
				if( this.TEST_MODE ) { console.log('zooma:'+this.zoom); }
				this.zoom = 4;
				//console.log('pzoom:'+this.zoom);
				this.initialFilterMode = true; // restablece filtros a modo inicial
				this.autozoom = true;
			}
			isLoad = true;
		}
		else if( params.flag !== 0 ) {
			if( this.TEST_MODE ) { console.log('filtros normales'); }
			if( this.map ) {
				if( !stealthLoading ) {
					this.drawArea(this.currentLatLng);
				}
				this.casasypymes = false;
				$('#maptxt_autocomplete').removeProp('disabled');
				$('#maptxt_autocomplete').removeClass('autocomplete_disbled'); //.css('background-color','#e4e4e4');
				this.zoom = this.prevzoom;
				// ajusta el zoom m&iacute;nimo para centros cercanos
				this.zoom = this.zoom < 13 ? this.zoomwdata : this.zoom;

				if( this.previousLatLng != null ) {
					this.currentLatLng = this.previousLatLng;
					this.map.setCenter(this.currentLatLng);
				}
				this.map.setZoom(this.zoom);
				this.autozoom = false;
			}
			isLoad = true;
		}
		else {
			if( this.TEST_MODE ) { console.log('sin filtros'); }
			this.colapsaFiltros();
			this.disableMainFilters(true);
		}
		if( isLoad ) {
			var obj = this;
			obj.colapsaFiltros();
			if( this.directionsDisplay != null ) {
				this.directionsDisplay.set('directions',null);
			}
			console.log(params);
			this.doAjaxS(BMNWidgetMapLocatorParams.gvUrl1, params, function(resp) {
				if( obj.TEST_MODE ) {
					obj.showPositionsCache();
				}
				obj.queryDate = new Date();
				obj.parsePointsResponse(resp, obj);
				if( !stealthLoading ) {
					obj.deleteMarkers();
				}
				
				if( obj.data.length > 0 && !obj.casasypymes ) {
					obj.hideResultadosList(false);
					obj.expandeLista();
					obj.displayMessage(null);
				}
				else if( obj.data.length == 0 ) {
					obj.hideResultadosList(true);
					obj.colapsaLista();
					obj.displayMessage('No se encontraron centros en la ubicaci&oacute;n indicada.');
				}
				else {
					obj.hideResultadosList(true);
					obj.colapsaLista();
					obj.displayMessage(null);
				}
				obj.loadPoints();
				
			});
		}
		this.closePanorama();
	},
	// El resultado de b&uacute;squeda llega como una cadenacon valores delimitados por == (filas) y | (columnas),
	// se genera un arreglo de 25 columnas y algunos datos cambian a tipo boolean o num&eacute;rico para
	// su correcto procesamiento
	parsePointsResponse: function(resp, obj) {
		obj.data = [];
		obj.dataAsignacionTurnos = [];
		//console.log(resp);
		//console.log(44567);
		//console.log('obj.centerMarker');
		//console.log(obj.centerMarker);
		var rows = resp.split('==');
		for( var key in rows ) {
			var row = rows[key].trim();
			var cols = row.split("|");
			// si la cantidad de campos es la correcta, ajusta 
			// convierte a tipos de dato adecuados al contexto
			if( cols.length >= obj.MKR_REG_SIZE-1 ) {
				cols[6] = cols[6] == "true" ? true : false;// auto
				cols[8] = cols[8] == "true" ? true : false;// usd
				cols[9] = cols[9] == "true" ? true : false;// mantenimiento
				cols[16] = Number(cols[16]); // lat numerica
				cols[17] = Number(cols[17]); // lng numerica
				cols[20] = obj.isCentreOpen(obj, cols[7]);

				if( /*typeof google !== 'undefined'*/ obj.centerMarker != null ) {
					cols[22] =  // agrega el campo de distancia solo si no es obj.casasypymes
						obj.casasypymes ? 0 : 
						/*google.maps.geometry.spherical.computeDistanceBetween (
						new google.maps.LatLng(cols[16], cols[17]), 
						obj.centerMarker.position);*/
						obj.gps2m(cols[16], cols[17], obj.centerMarker.position.lat(), obj.centerMarker.position.lng() );
				}/*
				else { // nosmalmente no aplica solo si la geolocalizaci&oacute;n no est&aacute; soportada
					cols[22] = 0;
				}*/
				cols[obj.POS_ISJOINED] = false;
				cols[obj.POS_JOINED] = null;
				obj.data.push(cols);
				obj.dataAsignacionTurnos.push("Asignar turno de espera");
			}
		}
		// ordena los puntos por distancia solo si no es centro pyme
		obj.data.sort(function(a, b) {
			return a[22] - b[22];
		});
		
		if( obj.MERGE_POINTS ) {
			obj.flagNearestPoints(obj);
		}
	},
	isCentreOpen: function(ctx, hours) {
		var dw = ctx.queryDate.getDay();
		var hwd = ctx.getHourStr('L-V: ', hours);
		var hnd = ctx.getHourStr('SAB: ', hours);
		var hsd = ctx.getHourStr('DOM: ', hours);
		var isOnTimeLV = ((hwd != '' && (dw>=1&&dw<=5)) && ctx.getInTime(ctx, hwd));
		var isOnTimeSAB =((hnd != '' && dw==6) && ctx.getInTime(ctx, hnd));
		var isOnTimeDOM =((hsd != '' && dw==0) && ctx.getInTime(ctx, hsd));
		var isOnTimeAlw = (hwd == '' && hnd == '');
		var isOnTime = ((isOnTimeLV || isOnTimeSAB) || isOnTimeDOM) || isOnTimeAlw;
		//console.log('isOnTime:' + isOnTime);
		//console.log('---------------------------------------');
		return isOnTime;
	},
	// Get min and max minuts by string '09:00 A 17:00' parsing.
	getInTime: function(ctx, dateString) {
		var isOnTime = false;
		var h = ctx.getMinutsMinMax(dateString);
		var mmin = ctx.getMinutes(h[0]);
		var mmax = ctx.getMinutes(h[1]);
		var mnow = ctx.queryDate.getHours()*60 + ctx.queryDate.getMinutes();
		//console.log('mmin:' + mmin + ' mmax:' + mmax + ' mnow:' + mnow);
		if( mmin == 0 && mmax == 0 )
			isOnTime = true; // si los horarios son 0 indica que es todo el d&iacute;a
		else if( mmin <= mnow && mnow <= mmax )
			isOnTime = true; // dentro de horario
		return isOnTime;
	},
	// 
	getHourStr: function(comparator, hours) {
		var idxx = hours.indexOf(comparator);
		if( idxx >= 0 ) {
			return hours.substr(idxx+5, 13);
		}
		return '';
	},
	// Separa las cadenas de rango de horario por ejemplo '09:00 A 17:00' en ['09:00', '17:00'], si la cadena no cumple el formato queda como ['00:00,'00:00']
	getMinutsMinMax: function(str) {
		var hnx = str.split(' A ');
		return hnx.length == 2 ? [hnx[0], hnx[1]] : ['00:00', '00:00'];
	},
	// Dada una cadena de horas y minutos del tipo '17:30', devuelve el total de minutos 17*60+30.
	getMinutes: function(strMin) {
		var hm = strMin.split(':');
		return hm.length == 2 ? parseInt(hm[0])*60 + parseInt(hm[1]) : 0;
	},
	// Despliega un mensaje de estado en el panel deslizable debajo del campo de direcci&oacute;n
	displayMessage: function(msg) {
		//console.log('dsplmsg:'+msg);
		var alerto = $('.widget_map .navbar .layout .notes_line .alert');
		if( msg != null && msg != '' ) {
			alerto.find('span').html(msg);
			alerto.show();
			$('.widget_map .navbar .layout .notes_line').not(':visible').slideToggle({
				complete: function() {
					$('.widget_map .navbar .layout .interactive_filters').css('top','107px');
					$('.widget_map .navbar .layout .interactive_resultados').css('top','107px');
					$('.widget_map .navbar').css('height','117px');
				}
			});
		}
		else if( msg == null ) {
			$('.widget_map .navbar .layout .notes_line:visible').slideToggle({
				complete: function() {
					$('.widget_map .navbar .layout .interactive_filters').css('top','87px');
					$('.widget_map .navbar .layout .interactive_resultados').css('top','87px');
					$('.widget_map .navbar').css('height','94px');
				}
			});
			alerto.find('span').html('');
			alerto.hide();
			
		}
	},
	// Oculta/muestra la lista de resultados
	hideResultadosList: function(hide) {
		$('.widget_map .navbar .layout .interactive_resultados').css('display',hide ? 'none':'block');
	},
	// Retorna true si el checkbox ha sido marcado
	isChk: function(sid) {
		return $(sid).is(':checked');
	},
	// Activa program&aacute;ticamente un checkbox y actualiza la bandera de filtro
	on: function(sid) {
		console.log("ON-sid:"+sid);
		console.log("ON-put:"+$(sid).val());
		$(sid).prop('checked', true);
		this.opciones |= $(sid).val();
		console.log("ON-val:"+this.opciones);
	},
	// Desactiva program&aacute;ticamente un checkbox y actualiza la bandera de filtro
	off: function(sid) {
		console.log("OFF-sid:"+sid);
		console.log("OFF-get:"+$(sid).val());
		$(sid).prop('checked', false);
		this.opciones &= ~$(sid).val();
		console.log("OFF-val:"+this.opciones);
	},
	hasChkVal: function(opc, sid) {
		return (new Number($(sid).val()) & opc) != 0;
	},
	// Activa los checkbox asociados a una funcionalidad, por ejemplo al activar ver sucursales o
	// cajeros debe activarse Banorte o Ixe, igual al desactivar ambos todos los checkboxes de
	// los filtros secundarios deben desactivarse. 
	enableLinkedOptions: function(val, prevval) {


		console.log("enableLinkedOptions val:"+val+" prevval:"+prevval);
		if( prevval == 0 ) { // ajuste por ning&uacute;n checkbox forzado de al menos uno
			var prevSuc = this.hasChkVal(this.opcionesPrev, '#mapchk_sucursales');
			var prevCjr = this.hasChkVal(this.opcionesPrev, '#mapchk_cajeros');
			if( prevSuc ) {
				this.on('#mapchk_cajeros');
			}
			else if ( prevCjr ) {
				this.on('#mapchk_sucursales');
			}
		}
		if( this.isChk('#mapchk_sucursales') || this.isChk('#mapchk_cajeros') ) {
			// obtiene los filtros anteriores antes de la selecci&oacute;n para intercambiar las casillas en grupo financiero
			var prevBanorte = this.hasChkVal(prevval, '#mapchk_banorte');
			var prevIxe = this.hasChkVal(prevval, '#mapchk_ixe');
			// obliga a activarse la marca default
			if( this.brand == this.BRAND_BANORTE) { // obliga a que la marca seleccionada en modo Banorte est&eacute; activa
				this.on('#mapchk_banorte');
			}
			else if( this.brand == this.BRAND_IXE) { // obliga a que la marca seleccionada en modo Ixe est&eacute; activa
				this.on('#mapchk_ixe');
			}
			else { // las dem&aacute;s marcas Grupo Financiero
				if( !prevBanorte && !prevIxe ) { // si inicialmente no se ten&iacute;a ning&uacute;n valor activa Banorte e Ixe
					this.on('#mapchk_banorte');
					this.on('#mapchk_ixe');
				}
				// si la nueva selecci&oacute;n deja Banorte e Ixe desactivados
				else if	( !this.isChk('#mapchk_banorte') && !this.isChk('#mapchk_ixe') ) {
					if ( !prevBanorte && prevIxe ){ // si antes estaba activo solo Ixe lo cambia por Banorte
						this.on('#mapchk_banorte');
					}
					else if( prevBanorte && !prevIxe ){ // si antes estaba activado solo Banorte lo cambia por Ixe
						this.on('#mapchk_ixe');
					}
				}
			}
			if( this.brand == this.BRAND_BANORTE && !this.isChk('#mapchk_cajeros') ) {
				this.off('#mapchk_ixe');
				$('#mapchk_ixe').parent().css('visibility','hidden');
			}
			else if( this.brand == this.BRAND_IXE && !this.isChk('#mapchk_cajeros') ) {
				$('#mapchk_ixe').parent().css('visibility','visible');
			}

			// habilita todos los subfiltros por default
			this.enableLabeledCheckbox('#mapchk_auto', true);
			this.enableLabeledCheckbox('#mapchk_dolares',true);
			this.enableLabeledCheckbox('#mapchk_sabado',true);

			if( !this.isChk('#mapchk_cajeros') ) { // si solo est&aacute;n activas las sucursales desactiva filtros de cajeros
				this.enableLabeledCheckbox('#mapchk_auto',false);
				this.enableLabeledCheckbox('#mapchk_dolares',false);
				this.off('#mapchk_auto');
				this.off('#mapchk_dolares');
			}
			else if( !this.isChk('#mapchk_sucursales') ) { // solo activos los cajeros desactiva filtros de sucursal
				this.enableLabeledCheckbox('#mapchk_sabado',false);
				this.off('#mapchk_sabado');
			}
		}
		else if( !this.isChk('#mapchk_sucursales') && !this.isChk('#mapchk_cajeros') ) {
			this.offsub( ["#mapchk_banorte","#mapchk_ixe","#mapchk_sabado","#mapchk_auto","#mapchk_dolares"] );
			//if( this.mapCompatible ) {
				this.colapsaFiltros();
			//}
			// oculta la opci&oacute;n para los subfiltros
			$('#subFiltroCAJSUC').css('display','none');
		}
		
		if(!this.isChk('#mapchk_corresponsalias'))
		{
			console.log("desactivando filtros corresponsales");
			this.offsub( ["#mapchk_yastas","#mapchk_oxxo","#mapchk_7eleven","#mapchk_circulok","#mapchk_delsol","#mapchk_farmaciagdl","#mapchk_netpaygasmart","#mapchk_soriana","#mapchk_telecom","#mapchk_tiendas-extra","#mapchk_woolworth"] );
			// oculta la opci&oacute;n para los subfiltros
			$('#subFiltroCorrespondent').css('display','none');
		}

		if( this.isChk('#mapchk_casasbolsa') || this.isChk('#mapchk_cpyme') ) {
			this.offsub( ["#mapchk_sucursales","#mapchk_cajeros","#mapchk_corresponsalias","#mapchk_banorte","#mapchk_ixe","#mapchk_sabado","#mapchk_auto","#mapchk_dolares"] );
			this.disableMainFilters(true);
		}
		else {
			this.disableMainFilters(false);
		}
	},
	// Habilita / Dehabilita program&aacute;ticamente y visualmente un checkbox indicando su id
	enableLabeledCheckbox: function(jqid, enable) {
		$(jqid).prop("disabled", !enable);
		$(jqid).parent().find('label').css('color', enable ? '#4e4044':'#d7d0d2');
	},
	// Deshabilita o habilita los filtros primarios
	disableMainFilters: function(enable) {
		this.enableLabeledCheckbox('#mapchk_sucursales',!enable);
		this.enableLabeledCheckbox('#mapchk_cajeros',!enable);
		this.enableLabeledCheckbox('#mapchk_corresponsalias',!enable);
		$('.widget_map .navbar .layout .interactive_filters .open_subfilters').css('display', enable? 'none' : 'block');
	},
	// Lo mismo que la funci&oacute;n off pero aplicada a una lista de id's de checkboxes
	offsub: function(checkList) {
		for( var h=0; h<checkList.length; ++h) {
			this.off(checkList[h]);
		}
	},
	// Muestra el indicador de carga bloqueando los dem&aacute;s controles del widget y evitar duplicidad de invocaciones
	setLoadingMask: function(show) {
		if( show ) {
			$('.widget_map .loading').addClass('open');
		}
		else {
			$('.widget_map .loading').removeClass('open');
		}
	},
	// Permite hacer invocaciones v&iacute;a ajax con detecci&oacute;n de errores.
	doAjaxS: function(url, params, successCallback) {
		var obj = this;
		$.ajax({
			url: url,
			async: true,
			type: "POST",
			data: params,
			beforeSend:  function() {
				obj.setLoadingMask(true);
			},			
			success: function(resp) {
				if( this.TEST_MODE ) { console.log(resp); }
				//obj.setLoadingMask(false); // se coment&oacute; por delegar esta acci&oacute;n al terminar de procesar los datos
				successCallback(resp);
			},
			error: function(xhr, textStatus, thrownError){
				if( this.TEST_MODE ) { console.log('error ' + xhr.status + ': ' + thrownError); }
				obj.displayMessage('Por el momento no est&aacute; disponible la informaci&oacute;n, intenta m&aacute;s tarde.');
				obj.setLoadingMask(false);
			}
		});
	},
	// Abre la vista grande del modo StreetView
	requestPanorama: function(pos) {
		$('#pano').css('display', 'block');
		var heading = Number(this.data[pos][18]);
		var pitch = Number(this.data[pos][19]);
		var panoramaOptions = {
			position: this.marcas[pos].getPosition(),
			pov: {
				heading: heading,
				pitch: pitch
			},
			enableCloseButton: true
		};
		var hnv = $('.widget_map .navbar').height();
		//console.log('hnv:'+hnv);
		$('#pano').css('top',hnv+'px');
		var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
		this.map.setStreetView(panorama);
		var obj = this;
		google.maps.event.addListener(panorama, 'closeclick', function() { 
			obj.closePanorama();
		});
	},
	// Cierra la vista de StreetView
	closePanorama: function() {
		$('#pano').css('display', 'none');
	},
	// Corrige el tama&ntilde;o del mapa si fue correctamente inicializado
	mapWidgetPostInitialize: function() {
		if( this.map ) {
			google.maps.event.trigger(this.map, 'resize');
			this.map.setCenter(this.currentLatLng);
		}
	},
	// Activa el bot&oacute;n de detecci&oacute;n de ubicaci&oacute;n e invoca la actualizaci&oacute;n de la posici&oacute;n 
	// y carga los resultados solo al inicio del mapa
	ajustaPosicion: function(status,geolocation) {
		this.status = status;
		this.geoPosition = geolocation;
		var obj = this;
		this.centerMarker = {
			// geoPosition: obj.geoPosition,
			position: {
				lat: function() {
					return geolocation.coords.latitude;
				},
				lng: function() {
					return geolocation.coords.longitude;
				}
			},
			setMap: function(dummyMap) {} 
		};
		//console.log(this.centerMarker);
		// $('#mapbtn_detect').removeClass('disabled');
		this.displayLocation(geolocation, this);
	},
	// Inicializaci&oacute;n mejorada
	initMaster: function() {
		//console.log('init: L2');
		//console.log('BMNWidgetMapLocatorParams.noGoogleMaps:' + BMNWidgetMapLocatorParams.noGoogleMaps);
		this.currentLatLng = typeof google !== "undefined" ? 
			new google.maps.LatLng(22.51, -101.51) : 
			{lat:function(){return 22.51;}, lng:function(){return -101.51}};
		if( BMNWidgetMapLocatorParams.standaloneMode ) {
			//console.log('BMNWidgetMapLocatorParams.standaloneMode:' + BMNWidgetMapLocatorParams.standaloneMode);
			//console.log($('#map_wrapper'));
			$('.standalone_map').addClass( 'banorte' ); // siempre es banorte (aunque sea otra marca, SOLO APLICA AL MODO LOCAL SIN TEMA)
			$('.widget_map').appendTo('.standalone_map:first-of-type');
			$('.widget_map').css(
				{'display':'block', 
				'height': '770px', 
				'top':'0',
				'left':'0',
				'right':'0',
				'bottom':'0'
			});
			$('.widget_map').append('<div class="fullScreenWM" onclick="$(\'.widget_map\').css(\'position\',\'fixed\')">FSCR</div>');
		}
		else { // Permite la adici&oacute;n din&aacute;mica del widget al home de portal
			$('#map_wrapper').appendTo('#IVSAR_customHeader');
		}
		$('.widget_map .loading').addClass('open');
		//
		if ( BMNWidgetMapLocatorParams.noGoogleMaps ) { // Modo Tradicional
			//console.log('init: L3 sin mapa');
			$('.widget_map .nomap').css('display', 'block');
			$('.widget_map .navbar').remove();
			$('.widget_map .nomap .alert').css('display', 'block');
			$('#map-canvas').remove();
			$('#pano').remove();
			//$('.widget_map .nomap .alert').hide();
			$('#mapbtn_buscarclc').hide();
			$('.widget_map .nomap .localizador-wrapper .resultados').hide();
			//ctx.postInitializeClassicWdgMap(ctx);
			this.initializeClassicWdgMapEvents(this); // postInitializeClassicWdgMap
		}
		else { // modo de mapa
			//console.log('init: L3 con mapa');
			$('.widget_map .nomap').remove();
			//this.hideResultadosList(true);
			$('.interactive_filters label').css({'clear': 'none','width': 'auto','float': 'none','text-align': 'left'});
			$('.widget_map .navbar .layout .tool_line .boton_xtra label').css({'text-align': 'left'});
			// activa subfiltros
			$('.widget_map .navbar').css('display','block');
			//$('.widget_map .navbar').height(94);
			$('.widget_map .navbar .layout .interactive_filters .open_subfilters').css('display','block');
			this.disableMainFilters(true);
			this.initializeLCoreWdgMapEvents();
		}
		
		this.initializeCommonWdgMapEvents();
		this.setLoadingMask(false);
	},
	// Funcionalidad exclusiva del mapa tradicional :D
	// carga el contenido de los combos
	fillComboWData: function(cbDataStr, cbId) {
		$(cbId).empty();
		var cbData = [];
		var count = 0;
		// 
		$(cbId).append('<option value="0">Selecciona...</option>');
		var rows = cbDataStr.split('==');
		for( var key in rows ) {
			var row = rows[key].trim();
			//console.log(row);
			var cols = row.split("|");
			
			if( cols.length == 2 ) {
				var col2 = cols[1].split('=');
				//console.log(cols);
				//console.log(col2);
				$(cbId).append('<option value="'+cols[0]+'">'+( col2.length == 2 ? col2[1] : col2[0] )+'</option>');
				count++;
			}
		}
		return count;
	},
	// Crea un elemento para la lista de resultados b&uacute;squeda tradicional
	createClassicListElement: function(m,i) {
		return '<li class="item" id="le-'+i+'"><div class="informacion"><div class="first-row">'+
        		'<div class="mapicon '+this.getIcon( m[15],m[14],false,m[9] )+'"></div></div>'+
        		'<div class="second-row">'+(this.getCorrespondentType(m)+m[1]).toUpperCase()+'</div>'+
        		'<div class="third-row">'+this.getThDistance(m[22])+'</div>'+
        		'<div class="fourth-row">'+this.getAbiertoCerrado(m, true)+'</div>'+
        		'<div class="fifth-row">'+(m[7]==""?"DISPONIBLE LAS 24 HRS.":m[7])+'</div>'+
                '<div class="clear"></div></div><div class="direccion">'+m[10]+'</div>'+
                ( m[11] != '' ? '<div class="telefonos">Tel&eacute;fonos: '+
                m[11]+'</div>' : '') + '<div class="clear"></div></li>';
	},
	// Carga via ajax el contenido del combobox en b&uacute;squeda tradicional
	getDataAtCbFilters: function(obj, params) {
		var listSelector = '.widget_map .nomap .localizador-wrapper .resultados-container .lista-resultados ul.lista';
		$(listSelector).empty();
		$('.widget_map .nomap .buscarcr-wrapper .resultados-container .lista-resultados .no-resultados').css('display','none');
		obj.doAjaxS(BMNWidgetMapLocatorParams.gvUrl4, params, function(resp) {
			obj.queryDate = new Date();
			obj.parsePointsResponse(resp, obj);
			obj.loadList();
			for( var i in obj.data ) {
				$(listSelector).append(obj.createClassicListElement(obj.data[i],i));
			} 
			//console.log(obj.data);
			if( obj.data.length == 0 ) {
				$('.widget_map .nomap .resultados-container .lista-resultados .no-resultados').css('display','block');
				$('.widget_map .nomap .resultados-container .lista-resultados ul.lista').css('display','none');
			}
			else {
				$('.widget_map .nomap .resultados-container .lista-resultados .no-resultados').css('display','none');
				$('.widget_map .nomap .resultados-container .lista-resultados ul.lista').css('display','block');
			}

			$('#map_classic_results').show();
			if( obj.typeBankCenter == 'SUC' ) {
				$('#map_filtros_suc').show();
				$('#map_filtros_cjr').hide();
				$('#map_classic_results').addClass('resultados');
				$('#map_classic_results .filtros').show();
			}
			else if ( obj.typeBankCenter == 'CJR' ) {
				$('#map_filtros_suc').hide();
				$('#map_filtros_cjr').show();
				$('#map_classic_results').addClass('resultados');
				$('#map_classic_results .filtros').show();
			}
			else { /*if( ctx.typeBankCenter == 'CPY'  ) {*/
				$('#map_classic_results').addClass('buscarcr-wrapper');
				$('#map_classic_results .filtros').hide();
			}/*
			else if ( ctx.typeBankCenter != 'CJR' && ctx.typeBankCenter != 'SUC' ) {
				$('#map_classic_results').addClass('buscarcr-wrapper');
				$('#map_classic_results .filtros').hide();
			}*/
			obj.setLoadingMask(false);
		});
	},
	initializeClassicWdgMapEvents: function(ctx) {
		$('#mapcb_tipo_centro').change(function(e) {
			var val = $(this).val();
			/*if( val == 0 ) {
				return; // pasa al final 
			}*/
			$('.mensaje-cerrar').click();
			$('#mapbtn_buscarclc').show();

			$('.widget_map .nomap .localizador-wrapper .resultados').show(); // TODO: quitar hasta la respuesta
			// limpia lista previa
			var listSelector = '.widget_map .nomap .localizador-wrapper .resultados-container .lista-resultados ul.lista';
			$(listSelector).empty();
			ctx.opciones = val;
			ctx.off('#mapchk_sucursales');
			ctx.off('#mapchk_cajeros');
			ctx.off('#mapchk_corresponsalias');
			ctx.off('#mapchk_casasbolsa');
			ctx.off('#mapchk_cpyme');
			
			//console.log('val:'+val);
			$('#map_classic_results').removeClass('buscarcr-wrapper');
			$('#map_classic_results').removeClass('resultados');
			// oculta subfiltros por tipo de centro y lista de resultados
			$('#map_filtros_suc').hide();
			$('#map_filtros_cjr').hide();
			$('#map_classic_results').hide();

			if( val == ctx.F_SUCURSAL ) {
				//console.log('succ');
				ctx.on('#mapchk_sucursales');
				ctx.resetCRLocalidadView(ctx);
				ctx.typeBankCenter = "SUC";
				$('#mapbtn_togglecrlocalidad').css('visibility','visible');
				/*$('#map_filtros_suc').show();
				$('#map_filtros_cjr').hide();
				$('#map_classic_results').addClass('resultados');
				$('#map_classic_results .filtros').show();*/
				$('#mapbtn_buscarclc').attr('disabled', true);
			}
			else if( val == ctx.F_CAJERO ) {
				//console.log('caje');
				ctx.on('#mapchk_cajeros');
				ctx.resetCRLocalidadView(ctx);
				ctx.typeBankCenter = "CJR";
				/*$('#map_filtros_suc').hide();
				$('#map_filtros_cjr').show();
				$('#map_classic_results').addClass('resultados');
				$('#map_classic_results .filtros').show();*/
				$('#mapbtn_buscarclc').attr('disabled', true);
			}
			else if( val == ctx.F_TIPO_CORRESPONSALIA ) {
				ctx.on('#mapchk_corresponsalias');
				ctx.resetCRLocalidadView(ctx);
				ctx.typeBankCenter = ""; // TODO: obtener solo los filtros de corresponsal&iacute;as en backend
				/*$('#map_classic_results').addClass('buscarcr-wrapper');
				$('#map_classic_results .filtros').hide();*/
				$('#mapbtn_buscarclc').attr('disabled', true);
			}
			else if( val == ctx.F_TIPO_CASADEBOLSA ) {
				ctx.on('#mapchk_casasbolsa');
				ctx.typeBankCenter = "CB0";
				/*$('#map_classic_results').addClass('buscarcr-wrapper');
				$('#map_classic_results .filtros').hide();*/
				$('#mapbtn_buscarclc').removeAttr('disabled');
			}
			else if( val == ctx.F_TIPO_CENTROPYME ) {
				ctx.on('#mapchk_cpyme');
				ctx.typeBankCenter = "CPY";
				/*$('#map_classic_results').addClass('buscarcr-wrapper');
				$('#map_classic_results .filtros').hide();*/
				$('#mapbtn_buscarclc').removeAttr('disabled');
			}
			else { // ninguna selecci&oacute;n
				$('#mapbtn_buscarclc').attr('disabled', true);
			}
			ctx.enableLinkedOptions(val, ctx.opciones);
			//console.log(val);
			$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-2').hide();
			$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-3').hide();
			$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-4').hide();
			$('#mapcb_estado').empty();
			$('#mapcb_localidad').empty();
			$('#mapcb_cp').empty();
			if( (ctx.F_SUCURSAL == val || ctx.F_CAJERO == val) || ctx.F_TIPO_CORRESPONSALIA == val ) {
				$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-2').show(); //.css('display', 'block');
				ctx.doAjaxS(BMNWidgetMapLocatorParams.gvUrl3, {type: 1, id: "", value: "", typeBankCenter: ctx.typeBankCenter}, function(resp) {
					ctx.fillComboWData(resp, "#mapcb_estado");
					ctx.setLoadingMask(false);
				});
			}
		});

		$('#mapcb_estado').change(function(e) {
			$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-3').hide();
			$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-4').hide();
			$('#mapcb_localidad').empty();
			$('#mapcb_cp').empty();
			$('#mapbtn_buscarclc').attr('disabled', true);
			console.log({type: 2, id: $(this).val(), value: $(this).val(), typeBankCenter: ctx.typeBankCenter});
			ctx.doAjaxS(BMNWidgetMapLocatorParams.gvUrl3, {type: 2, id: $(this).val(), value: $(this).val(), typeBankCenter: ctx.typeBankCenter}, function(resp) {
				if( ctx.fillComboWData(resp, "#mapcb_localidad") > 0 ) {
					$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-3').show();
				}
				ctx.setLoadingMask(false);
			});
		});

		$('#mapcb_localidad').change(function(e) {
			$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-4').hide();
			$('#mapcb_cp').empty();
			ctx.doAjaxS(BMNWidgetMapLocatorParams.gvUrl3, {type: 3, id: $(this).val(), value: $(this).val(), typeBankCenter: ctx.typeBankCenter}, function(resp) {
				if( ctx.fillComboWData(resp, "#mapcb_cp") > 0 ) {
					$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-4').show();
				}
				ctx.setLoadingMask(false);
				$('#mapbtn_buscarclc').removeAttr('disabled');
			});
		});

		$('#mapcb_cp').change(function(e) {
			
		});

		$('#maptxt_cr').change(function(e) {
			
		});

		$('#mapbtn_buscarclc').click(function(e) {
			ctx.filters = {
				flag: ctx.opciones,
				lat: 0.0,
				lng: 0.0,
				estado: $('#mapcb_estado').val(),
				localidad: $('#mapcb_localidad').val(),
				codigoPostal: $('#mapcb_cp').val(),
				cr: $('#maptxt_cr').val()
			};
			//console.log('buscar tradicional');
			//console.log('filter:');
			//console.log(ctx.filters);
			ctx.getDataAtCbFilters(ctx, ctx.filters);

			
		});

		$('#mapbtn_togglecrlocalidad').click(function(e) {
			ctx.CR_LOCALIDAD = !ctx.CR_LOCALIDAD;
			if( ctx.CR_LOCALIDAD ) {
				$(this).html('Buscar por CR');
				console.log('por localidad');
				$('#maplbl_togglecrlocalidad').html('Estado:');
				$('#mapcb_estado').parent().css('display','block');
				$('#maptxt_cr').css('visibility','hidden');
				$('#mapbtn_buscarclc').attr('disabled', true);
				ctx.clearCBLocalidad();
			}
			else {
				$(this).html('Buscar por Localidad');
				console.log('por cr');
				$('#maplbl_togglecrlocalidad').html('CR:');
				$('#mapcb_estado').parent().css('display','none');
				$('#maptxt_cr').css('visibility','visible');
				$('#mapbtn_buscarclc').removeAttr('disabled');
				ctx.clearCBLocalidad();
			}
		});

		var msgCerrarClosed = false;
		$('.mensaje-cerrar').click(function(e) { // quita el mensaje de alerta por error.
			//console.log('ssst');
			if( !msgCerrarClosed ) {
				$(this).parent().slideToggle();
				msgCerrarClosed = true;
				$('.widget_map .nomap.error-message .close_widget').animate({'top':'20px'});
			}
		});
		
		ctx.setLoadingMask(false);
	},
	resetCRLocalidadView: function(ctx) {
		ctx.CR_LOCALIDAD = false;
		$('#mapbtn_togglecrlocalidad').click(); // termina como true localidad activo
		$('#mapbtn_togglecrlocalidad').css('visibility','hidden');
	},
	clearCBLocalidad: function(ctx) {
		$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-3').hide();
		$('.widget_map .nomap .localizador-wrapper .localizador .localizador-container .paso.paso-4').hide();
		$('#mapcb_localidad').empty();
		$('#mapcb_cp').empty();
		$('#mapcb_estado').val("0");
	},
	// Carga la "funcionalidad" para el trazado de rutas como llegar.
	loadDirectionsServices: function() {
		this.directionsDisplay = new google.maps.DirectionsRenderer();
		this.directionsService = new google.maps.DirectionsService();
		//console.log(this.directionsDisplay);
		//console.log(this.directionsService);
		//console.log(this.map);
		this.directionsDisplay.setMap(this.map);
	},
	// Traza la ruta como llegar de forma generica entre dos puntos dando lat y lng
	route: function(start, end) {
		var request = {
			origin: start,
			destination: end,
			travelMode: google.maps.TravelMode.WALKING
		};
		//console.log('request');
		//console.log(request);
		var obj = this;
		this.directionsService.route(request, function(result, status) {
			if (status == google.maps.DirectionsStatus.OK) {
		 		obj.directionsDisplay.setDirections(result);
			} else {
				obj.displayMessage('No se pudo trazar la ruta.');
			}
		});
	},
	// Traza la ruta como llegar del punto central de la b&uacute;squeda, al centro banorte seleccionado
	routeToPoint: function(i) {
		this.route(this.centerMarker.position, this.marcas[i].position);
		this.closeInfoWin(i);
		this.colapsaFiltros();
		this.colapsaLista();
	},
	// Fusi&oacute;n de puntos: Crea o actualiza un "hashmap" con los &iacute;ndices v1 y v2 
	// el hashmap evita que se tengan indices de centros repetidos, 
	// cada hashmap contiene un grupo de id's centros que se van a fusionar.
	addClusterHMap: function(hmap, v1, v2) {
		var hmap = hmap == null ? {} : hmap;
		hmap[v1] = this.data[v1][15];
		hmap[v2] = this.data[v2][15];
		return hmap;
	},
	// Fusi&oacute;n de puntos: Valida si cualquiera de los dos &iacute;ndices v1 y v2 se encuentran en un hashmap existente
	// si existe cualquier de los dos valores se agrega el valor v1 o v2 que haga falta
	// a ese hashmap, en caso de que sean nuevos ambos valores
	// crea un nuevo grupo de id's de centros fusionables
	validateFusee: function(v1, v2) {
		var assigned = false;
		var mapsel = null;
		for(var w=0; w<this.fusee.length; ++w) {
			var e = this.fusee[w];
			if( v1 in e || v2 in e ) {
				assigned = true;
				mapsel = e;
				break;
			}
		}
		if( !assigned ) {
			this.fusee.push( this.addClusterHMap(null, v1, v2) );
		}
		else {
			this.addClusterHMap(mapsel, v1, v2);
		}
		//console.log(this.fusee);
	},
	/**
	 * Obtiene la distancia en metros entre dos ubicaciones.
	 * 
	 * @param lat_a		latitud punto 1
	 * @param lng_a		longitud punto 1
	 * @param lat_b		latitud punto 2
	 * @param lng_b		longitud punto 2
	 * @return
	 */
	gps2m: function(lat_a, lng_a, lat_b, lng_b) {
	    var a1 = lat_a / this.DEG_TO_RAD;
	    var a2 = lng_a / this.DEG_TO_RAD;
	    var b1 = lat_b / this.DEG_TO_RAD;
	    var b2 = lng_b / this.DEG_TO_RAD;
	    var t1 = Math.cos(a1)*Math.cos(a2)*Math.cos(b1)*Math.cos(b2);
	    var t2 = Math.cos(a1)*Math.sin(a2)*Math.cos(b1)*Math.sin(b2);
	    var t3 = Math.sin(a1)*Math.sin(b1);
	    var tt = Math.acos(t1 + t2 + t3);
	    return 6366000*tt;
	},
	/**
	*/
	getThDistance: function(meters) {
		var m2 = Math.round(meters);
		var d = '';
		if( m2 <= 0 ) {
			d = '';
		}
		else if( m2 <= 1000 ) {
			d = m2 + ' m.';
		}
		else if( m2 <= 10000 ) {
			d = Math.round((m2 * 10)/1000)/10 + ' km.';
		}
		else {
			d = Math.round(m2/1000) + ' km.';
		}

		return d;
	},
	// Fusi&oacute;n de puntos: Marca los puntos para fusionar tomando como criterio que esten localizados
	// entre si a una distancia igual o menor de this.radiuz
	flagNearestPoints: function(obj) {
		var len = obj.data.length;
		var ini = 0, fin = len;
		obj.fusee = []; // limpia la lista previa
		// obtiene los &iacute;ndices de los puntos a fusionar, los coloca en una lista de grupos denominada fusee,
		for( var i=ini; i<fin; ++i) {
			for( var j=ini; j<i; ++j) {
				if( (obj.data[i][15] === "SUC" || obj.data[i][15] === "CJR") ) { // si ambos puntos son sucursal y/o cajero
					var d = obj.gps2m(obj.data[i][16], obj.data[i][17], obj.data[j][16], obj.data[j][17]);
					//console.log('d:' + d + ' -> ');
					if( d <= obj.radiuz ) {
						obj.validateFusee(i, j);
					}
				}
			}
		}
		// List
		for( var i=0; i<obj.fusee.length; ++i ) {
			var points = obj.fusee[i];
			//console.log(obj.fusee);
			//console.log(points);
			var isMantto = false;
			var hasSucursal = false;
			// fusiona todos los cajeros a una sucursal
			for( var key in points ) {
				var isSuc = obj.data[key][15] === "SUC" ? true : false;
				// obj.data[key][15] = "FUS";
				obj.data[key][obj.POS_ISJOINED] = true;
				obj.data[key][obj.POS_JOINED] = isSuc ? obj.fusee[i] : null;
				if( isSuc ) {
					hasSucursal = true;
				}
			}
			// en caso de que no se haya detectado ninguna sucursal.
			// asigna como centro base el primer cajero de la lista
			if( !hasSucursal ) {
				var isFirst = true;
				for( var key in points ) {
					// obj.data[key][15] = "FUJ"; no existe tipo nuevo es cajero normal
					obj.data[key][obj.POS_JOINED] = isFirst? obj.fusee[i] : null;
					isFirst = false;
				}
			}
			// carga en la pos 4 estado de mantenimiento en todos tipos FUS
			for( var key in points ) {
				obj.data[key][4] = isMantto;
			}
		}
	},
	getWaitingTime: function(params, wsVerbose, isTest) {
		//var obj = this;
		$.ajax({
			url: BMNWidgetMapLocatorParams.gvUrl5,
			async: true,
			data: params,
			type: "POST",
			success: function(resp) {
				var waitingTime = resp.split("|")[0];
				if(wsVerbose == "true" || isTest){
					console.log("wt: " + waitingTime);
					console.log("resp: " + resp.split("|")[1]);
					console.log("resp: " + resp.split("|")[2]);
					console.log("resp: " + resp.split("|")[3]);
					console.log("resp: " + resp.split("|")[4]);
					console.log("resp: " + resp.split("|")[5]);
					console.log("resp: " + resp.split("|")[6]);
					console.log("resp: " + resp.split("|")[7]);
					console.log("resp: " + resp.split("|")[8]);
					console.log("resp: " + resp.split("|")[9]);
					console.log("resp: " + resp.split("|")[10]);
					console.log("resp: " + resp.split("|")[11]);
					console.log("resp: " + resp.split("|")[12]);
					console.log("resp: " + resp.split("|")[13]);
					console.log("resp: " + resp.split("|")[14]);
					console.log("resp: " + resp.split("|")[15]);
					console.log("resp: " + resp.split("|")[16]);
					console.log("resp: " + resp.split("|")[17]);
					console.log("resp: " + resp.split("|")[18]);
					console.log("resp: " + resp.split("|")[19]);
					console.log("resp: " + resp.split("|")[20]);
					console.log("resp: " + resp.split("|")[21]);
					console.log("resp: " + resp.split("|")[22]);
					console.log("resp: " + resp.split("|")[23]);
					console.log("resp: " + resp.split("|")[24]);
					console.log("resp: " + resp.split("|")[25]);
					console.log("resp: " + resp.split("|")[26]);
					console.log("resp: " + resp.split("|")[27]);
					console.log("resp: " + resp.split("|")[28]);
				}
				if(!isTest){
					$(".infoboxWaitingTime").text(waitingTime.trim());
					$(".infoboxWaitingTime").show();
					$(".waitingTimeText").show();
					$(".waitingTimeTextHMS").hide();
					var sucStatus = $("#globo-" + params.ID_BOX).children(".boxed").children(".content").children(".column2A").children(".schedule").children("span:eq(1)").html()
					if(waitingTime.trim() != "Indefinido"){
						$(".waitingTimeText").show();
						$(".waitingTimeTextHMS").show();
					}else if( sucStatus.trim() != "ABIERTO"){
						$(".infoboxWaitingTime").text("CERRADO");
						$(".waitingTimeTextHMS").hide();
					}
				}
			},
			error: function(xhr, textStatus, thrownError){
				console.log('Ajax error - ' + xhr.status + ': ' + thrownError);
				if( this.TEST_MODE ) { console.log('error ' + xhr.status + ': ' + thrownError); }
				//obj.displayMessage('Por el momento no est&aacute; disponible la informaci&oacute;n, intenta m&aacute;s tarde.');
				//obj.setLoadingMask(false);
			}
		});
	},
	getWaitingTimeSelectList: function(movement, idSUC, idBOX) {
		var url_string = window.location.href;
		var url = new URL(url_string);
		var wsVerbose = url.searchParams.get("wsVerbose");
		params = {};
		$(".infoboxWaitingTime").text("Cargando...");
		bmnLocatorMapWidgetInstance.getWaitingTime(fillParamsForService(params, movement, idSUC, idBOX, wsVerbose), wsVerbose, false);
	},
	getQueueID: function(params, boxElement, arrayQueuesIDs, boxIndex){	
		$.ajax({
			url: BMNWidgetMapLocatorParams.gvUrl6,
			async: true,
			data: params,
			type: "POST",
			success: function(resp) {
				$(boxElement).text(resp.split("|")[0].trim());
				$(boxElement).css("cursor", "auto");
				$(boxElement).attr("class", "queueDone");
				
				arrayQueuesIDs[boxIndex] = resp.split("|")[0].trim();
				var html = bmnLocatorMapWidgetInstance.createHTMLInfoBox(bmnLocatorMapWidgetInstance.data[boxIndex], boxIndex, bmnLocatorMapWidgetInstance.dataAsignacionTurnos, false);
				bmnLocatorMapWidgetInstance.datosGlobos[boxIndex].infowin.content_ = html;
			},
			error: function(xhr, textStatus, thrownError){
			}
		});
	}
}

/*
Aplica cuando termina la animaci&oacute;n de la p&aacute;gina de inicio, proviene de header.js
Carga bajo demanda los scripts de Google Maps
*/
function mapWidgetPostInitialize() {
	//console.log('init: L0');
	/* Valida que la API de google sea accesible */
    getScript(BMNWidgetMapLocatorParams.googleapisUrl,
    	function() { // Success el retorno ser&aacute; por locatorDOMReady
        	console.log('API de Mapas OK.');
        	BMNWidgetMapLocatorParams.noGoogleMaps = false;
    	},
    	function() { // Error contin&uacute;a a locatorDOMReady de forma expl&iacute;cita
    		console.log('No se tiene acceso a la API de Mapas, load traditional mode');
    		BMNWidgetMapLocatorParams.noGoogleMaps = true;
    		setTimeout(function(){ locatorDOMReady(); }, 500);
    	}
    );
}
/*
function validateUrlReach(url) {
	$.ajax({
	    url: url,
	    timeout:3000 //3 second timeout
	}).done(function(){
	    //do something
	    console.log('oki doki');
	}).fail(function(jqXHR, textStatus){
		console.log('errorcillo');
		console.log(textStatus);
	    if(textStatus === 'timeout')
	    {     
	        alert('Failed from timeout'); 
	        //do something. Try again perhaps?
	    }
	});
}
*/

/*
l&oacute;gica de detecci&oacute;n de ubicaci&oacute;n
BEGIN
*/
function BMNLocationDetector(callback, mapWidget) {
	BMNLocationDetector.LOCATION_OK = 1000;
	BMNLocationDetector.LOCATION_OK_W_TOUT = 2000;
	BMNLocationDetector.LOCATION_DENY = 4000;
	BMNLocationDetector.LOCATION_DENY_W_TOUT = 5000;
	BMNLocationDetector.LOCATION_TIMEOUT = 6000;
	BMNLocationDetector.LOCATION_TIMEOUT_NORCV = 7000;
	BMNLocationDetector.LOCATION_UNSUPPORTED = 8000;
	this.callback = callback;
	this.mapWidget = mapWidget;
	this.watchID = -1;
}

/**
 * Maneja la l&oacute;gica de detecci&oacute;n de ubicaci&oacute;n 
*/
BMNLocationDetector.prototype = {
	constructor: BMNLocationDetector,
	succeed: function(obj) {
	    navigator.geolocation.received = true;
	    var status = 0;
	    if( !navigator.geolocation.timedout ) {
	    	status = BMNLocationDetector.LOCATION_OK;
	    }
	    else {
	    	status = BMNLocationDetector.LOCATION_OK_W_TOUT;
	    }
	    navigator.geolocation.ctx.callback(status,obj,navigator.geolocation.ctx);
	},
	failed: function(obj) { 
	    navigator.geolocation.received = true;
	    var status = 0;
	    if( !navigator.geolocation.timedout ) {  // no permitida
	    	status = BMNLocationDetector.LOCATION_DENY;
	    }
	    else { // no selecciona opci&oacute;n ni permitida
	    	status = BMNLocationDetector.LOCATION_DENY_W_TOUT;
	    }
	    navigator.geolocation.ctx.callback(status,obj,navigator.geolocation.ctx);
	},
	timedout: function() {
	    navigator.geolocation.timedout = true;
	    var status = BMNLocationDetector.LOCATION_TIMEOUT_NORCV;
	    if( !navigator.geolocation.received ) {  // adicional para rastrear el timeout
	    	status = BMNLocationDetector.LOCATION_TIMEOUT;
	    }
	    navigator.geolocation.ctx.callback(status,null,navigator.geolocation.ctx);   
	},
	queryLocationStatus: function() {
		// Extend geolocation object
		var ctx = this;
		var mapCompatible = false;
		if ( navigator.geolocation ) { 
			mapCompatible = true;
		    navigator.geolocation.retrievePermission = function retrievePermission(succeed,failed,options,timeout,ctx) {
		        this.received = false;              // reference for timeout callback
		        this.timedout = false;              // reference for other callbacks
		        this.ctx = ctx;
		        this.getCurrentPosition.apply(this,arguments);  // request actual
		        // Trigger timeout with its function; default timeout offset 5000ms
		        if ( timeout ) {
		            setTimeout(timeout.callback,timeout.offset || 5000);
		        }
		    }
		    // New location request with timeout callback
		    navigator.geolocation.retrievePermission(ctx.succeed,ctx.failed,{},{
		        offset: 10000, // miliseconds
		        callback: ctx.timedout  
		    },ctx);
		} else {
		    //console.log('Localizaci&oacute;n no soportado.');
		    this.callback(BMNLocationDetector.LOCATION_UNSUPPORTED,null,ctx);
		}
		return mapCompatible;
	},
	getLocation: function() {
		var obj = this;
		var mapW = this.mapWidget;

		if( this.enableGeoWatchLocation ) {
			if( this.watchID !== -1 ) {
				if( navigator.geolocation ) {
					navigator.geolocation.clearWatch(this.watchID);
				}
			}

			this.watchID = navigator.geolocation.watchPosition( 
				function(position) { mapW.displayLocation(position, mapW); },  // displayLocation
				function(error) {
					mapW.displayMessage('La detecci&oacute;n de ubicaci&oacute;n no fue autorizada previamente. Verifique la configuraci&oacute;n del Navegador Web.');
					mapW.setLoadingMask(false);
					},  {
					enableHighAccuracy: true, 
					maximumAge: 3000, 
					timeout: 2700 
				}
			);
			//console.log('watchID:'+this.watchID);
		}
		else {
			navigator.geolocation.getCurrentPosition(
				function (position) {
					mapW.displayLocation(position, mapW);
				}, 
				function(error) {
					mapW.displayMessage('La detecci&oacute;n de ubicaci&oacute;n no fue autorizada previamente. Verifique la configuraci&oacute;n del Navegador Web.');
					mapW.setLoadingMask(false);
				}, {
					enableHighAccuracy: true, 
					maximumAge: 0, 
					timeout: 7770 
				}
			);
		}
		
	}
}
/*
l&oacute;gica de detecci&oacute;n de ubicaci&oacute;n END
*/

function fillParamsForService(params, movement, idSUC, idBOX, wsVerbose){
	
	params.SUC = idSUC == "" ? "0": idSUC;
	params.SIC = $("#SICNumber").val();  
	params.CATEGORIA = movement;         
	params.IP_CLIENT = localIpAddress;
	params.COD_CR = idSUC == "" ? "0": idSUC;
	params.WS_VERBOSE = wsVerbose;
	params.ID_BOX = idBOX;
	
	/**
	 * OPTIONAL SETTINGS FROM JS
	 */
	if(ws_browser != null){
		params.BROWSER = ws_browser;
	}
	if(ws_browserVersion != null){
		params.BROWSER_VERSION = ws_browserVersion;
	}
	if(ws_codEmp != null){
		params.COD_EMP = ws_codEmp;
	}
	if(ws_device != null){
		params.DEVICE = ws_device;
	}
	if(ws_encoding != null){
		params.ENCODING = ws_encoding;
	}
	if(ws_endpoint != null){
		params.ENDPOINT = ws_endpoint;
	}
	if(ws_endpointVersion != null){
		params.ENDPOINT_VERSION = ws_endpointVersion;
	}
	if(ws_username != null){
		params.USERNAME = ws_username;
	}
	if(ws_usernamepss != null){
		params.USERNAMEPSS = ws_usernamepss;
	}
	if(ws_idAplicacion != null){
		params.ID_APLICACION = ws_idAplicacion;
	}
	if(ws_idCanal != null){
		params.ID_CANAL = ws_idCanal;
	}
	if(ws_idServicio != null){
		params.ID_SERVICIO = ws_idServicio;
	}
	if(ws_idUsuario != null){
		params.ID_USUARIO = ws_idUsuario;
	}
	if(ws_lang != null){
		params.LANG = ws_lang;
	}
	if(ws_serviceVersion != null){
		params.SERVICE_VERSION = ws_serviceVersion;
	}
	if(ws_tipoCanal != null){
		params.TIPO_CANAL = ws_tipoCanal;
	}
	if(ws_brand != null){
		params.DEVICE_BRAND = ws_brand;
	}
	
	return params;
}

var getIPAddress = function() {
    $.getJSON("https://jsonip.com?callback=?", function(data) {
    	localIpAddress = data.ip;
    });
};


//LOAD WS PARAMETERS
function loadScript( url, callback ) {
	var randWS = Math.ceil(Math.random() * 1000000000);
	script = document.createElement( "script" );
	script.type = "text/javascript";
	if(script.readyState) {  //IE
		script.onreadystatechange = function() {
			if ( script.readyState === "loaded" || script.readyState === "complete" ) {
		        script.onreadystatechange = null;
		        callback();
			}
	    };
	}else{  //Others
		script.onload = function() {
		  callback();
		};
	}
	script.src = url+"?v=" + randWS;
	document.getElementsByTagName("head")[0].appendChild( script );
}

if(window.location.href.indexOf('www.banorte.com')>0 || window.location.href.indexOf('acceso24.banorte.com')>0){
	//PRODUCTIVO
	loadScript("https://www.banorte.com/cms/functions/wsBranchSettings.js", function() {showHideWaitingTimeCombo();});
}else if (window.location.href.indexOf('localhost')>0){
	//SOLO CUANDO SE LEVANTA EN LOCAL
	loadScript("http://15.128.1.157/PORTAL3/functions/wsBranchSettings.js", function() {showHideWaitingTimeCombo();});
}else{
	//COMPONENTE UBICADO EN Bibliotecas/Contenido Web Sitio Publico Banorte /Componentes/Componentes de p&aacute;gina de inicio/wsBranchSettings.js
	//PARA PROBAR EN AMBIENTES PREVIOS
	loadScript("/wps/wcm/connect/banorte/5162aa32-43ad-4c25-a558-d33ebf22277c/wsBranchSettings.js?MOD=AJPERES&ContentCache=NONE&CACHEID=5162aa32-43ad-4c25-a558-d33ebf22277c", function() {showHideWaitingTimeCombo();});
}

function showHideWaitingTimeCombo(){	
	var testWsQueuetimeEnable;
	//ws_queuetime_enable = true;
	if(ws_queuetime_enable !=null){
		testWsQueuetimeEnable = ws_queuetime_enable;
	}else{
		testWsQueuetimeEnable = true;
	}

	if(testWsQueuetimeEnable){
		var css = '.selectWaitingTimeContainer { display: block !important; }',
		head = document.head || document.getElementsByTagName('head')[0],
		style = document.createElement('style');
		style.type = 'text/css';
		
		if (style.styleSheet){
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(document.createTextNode(css));
		}
		head.appendChild(style);
	}
}


//TEST SERVICE
function testService(){
	console.log("ENTERING TEST");
	params = {};
	bmnLocatorMapWidgetInstance.getWaitingTime(fillParamsForService({'PARAMS.SUC':1003}, "1a4mov", "1003", "01", true), false, true);
}


