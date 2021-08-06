function pt(s){pageTracker._trackPageview('/TK'+s)};
function te(a,b,c,d){pageTracker._trackEvent(a,b,c+'',d)};
/* Funciones de uso general y de interés para VT */
function modifyLinks(){
	var links=document.getElementsByTagName("a")
	l=window.location.toString().replace("http://","").split("/")
	l=l[0]
	for(i=0;i<links.length;i++){
		var a=links[i];
		var href=a.getAttribute("href");
		if(href!="" && href!=window.l && (href.indexOf("http://")==-1 || href.indexOf(l)!=-1) && href.indexOf("mailto:")!=0 && href.indexOf(COKCodigo)==-1 && href.indexOf(".php")==-1){
			if(href.indexOf("?")!=-1){
				href=href.split("?")
				a.setAttribute("href",href[0]+"?"+COKCodigo+"þ"+href[1]);
			}else if(href.indexOf("#")!=-1){
				href=href.split("#")
				a.setAttribute("href",href[0]+"?"+COKCodigo+"þ#"+href[1]);
			}else{
				a.setAttribute("href",href+"?"+COKCodigo+"þ");
			}
		}
	}
}
function show(x){
	document.getElementById(x).style.visibility="visible"
}
function Cargar(evento){
	if(document.addEventListener){
		window.addEventListener("load",evento,false);
	}else if(document.attachEvent){
		window.attachEvent("onload",evento);
	}else{
		return false;
	};
	return true;
}
function EnviarAlto(){
	if(document.images) new Image().src=SalirDir+"programas/enviaralto.php?"+PAGCodigo+","+Idio+","+document.getElementById("contenido").clientHeight;
};
function ColocarTope(){
	//Cambiar tope
	obj=document.getElementById("lateral");
	obj.style.top=document.getElementById("contenido").clientHeight+190+'px';
	obj.style.display="block";
};
function CheckWidth(){
	if (800>=screen.width){
		//Añadir la hoja de estilos
        

        //Se comenta este tramo ya que no se desea colocar
        //el latera al final cuando la resolucion es baja
        
		/*var head = document.getElementsByTagName('head')[0];
		var buffer = document.createElement('link');
		buffer.setAttribute("rel","stylesheet");
		buffer.setAttribute("type","text/css");
		buffer.setAttribute("href",SalirDir+"800.css");
		head.appendChild(buffer);
		Cargar(ColocarTope);*/
	};
};
function subetufoto(mostrar){
	if (mostrar!==false) mostrar=true;
	iframe=document.getElementById("ISubeTuFoto");
	if (mostrar){
		iframe.src=ISubeTuFoto;
		iframe.style.display='block';
	}else{
		iframe.style.display='none';
	};
};
function RatingMouseOver(SUBCodigo,NroEstrella){
	//if (!Iniciado902) return false;
	MostrarEstrellas(SUBCodigo,NroEstrella);
};
function RatingMouseOut(SUBCodigo,NroEstrella){
	//if (!Iniciado902) return false;
	MostrarEstrellas(SUBCodigo,RD[SUBCodigo]);
};
function RatingClick(SUBCodigo,SURCant1){
	//if (!Iniciado902) return false;
	Ajax("POST",SalirDir+"programas/enviarrating.php",{"SUBCodigo":SUBCodigo,"SURCant1":SURCant1},true,"RatingListo");
	RD[SUBCodigo]=SURCant1;
	MostrarEstrellas(SUBCodigo,SURCant1);
};
function RatingListo(Respuesta){
	// no hace falta hacer nada
	return true;
};
function MostrarEstrellas(SUBCodigo,CantidadEstrellas){
	Estrella="";
	for (i=1;i<6;i++){
		if (i<=CantidadEstrellas){
			Estrella="estrellaamarilla.gif";
		}else{
			Estrella="estrellavacia.gif";
		};
		document.getElementById("S"+SUBCodigo+i).src=SalirDir+"images/"+Estrella;
	};
};
function login(COKO){
	window.location="#ALogin";
	Iframe=document.getElementById("ILogin");
	Iframe.style.display="block";
	Iframe.src=N2C+"n2c/versup.php?"+COKO+",login.htm,rating.htm";
};
function Iniciado(){
	window.location.reload();
}; 
/*---------------------------------- FUNCIONES PARA AJAX --------------------------------*/
function Cliente(){
	/* genera un cliente de ajax, dependiendo del navegador */
	Success=false;
	try{
	// Mozilla / Safari / IE7
		xmlhttp=new XMLHttpRequest();
	}catch(e){
	// IE
		var XMLHTTP_IDS=['MSXML2.XMLHTTP.5.0','MSXML2.XMLHTTP.4.0','MSXML2.XMLHTTP.3.0','MSXML2.XMLHTTP','Microsoft.XMLHTTP'];
		var success=false;
		for(i=0;i<XMLHTTP_IDS.length && !success;i++) {
			try{
				xmlhttp=new ActiveXObject(XMLHTTP_IDS[i]);
				success=true;
			}catch(e){};
		};
		if(!success) return false;
	};
	return xmlhttp;
};
function Ajax(Method,Programa,ParametrosObj,Asincrono,FuncionRetorno,Mensaje){
	var ParametrosUrl="";
	for (Llave in ParametrosObj){
		ParametrosUrl+="&"+Llave+"="+escape(ParametrosObj[Llave]);
	};
	xmlhttp=Cliente();
	if (!xmlhttp){
		return false;
	};
	xmlhttp.open(Method,Programa,Asincrono);
	xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded;charset=UTF-8;');
	xmlhttp.setRequestHeader('Content-length',ParametrosUrl.length);
	xmlhttp.setRequestHeader('Connection','close');
	//En caso de querer un div de advertencia
	if (Asincrono){
		xmlhttp.onreadystatechange=function(){
			if (4==xmlhttp.readyState){
				return Listo(xmlhttp.responseText,FuncionRetorno);
			};
		};
		xmlhttp.send(ParametrosUrl);
		return true;
	}else{
		xmlhttp.send(ParametrosUrl);
		if(4==xmlhttp.readyState){
			return Listo(xmlhttp.responseText,function(){});
		}else{
			return false;
		};
	};
};
function Listo(TextoServidor,FuncionRetorno){
	var Respuesta=new Array();
	try{
		eval("Respuesta="+TextoServidor);
		Respuesta=DecodificarArreglo(Respuesta);
	}catch (e){
		Respuesta=TextoServidor;
	};
	eval(FuncionRetorno+"(Respuesta)");
	return Respuesta;
};
function decode(str){
	var d = document;
	if (!window.__formater){
		window.__formater = d.all ? d.createElement('<textarea>') : d.createElement('textarea');
	};
	__formater.innerHTML = str;
	return __formater.value;
};
function cerrarInfo(tipo){
	if(tipo == 1){
		$(".organizadorSlider").attr('style','display:none;');
		$(".presentacionIndice").attr('style','display:none;');
		$(".abrirInfo").attr('style','display:;');
	}else{
		$(".organizadorSlider").attr('style','display:;');
		$(".presentacionIndice").attr('style','display:;');
		$(".abrirInfo").attr('style','display:none;');
	};
};
//ilander-Ticket 4967
/*function abrirInfo(ruta){
	valor = $( '#project-id' ).val();
	valor1 = $( '#project' ).val();
	valor2 = $( '#project-id2' ).val();
	if(valor == '' ){
		if(valor2 == '' ){
			window.open("http://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
		}else{ window.open(valor2);};
	}else{ window.open(valor);};
}; */
function abrirInfo(ruta){
	valor = $( '#project-id' ).val();
	valor1 = $( '#project' ).val();
	if(valor == '' ) window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
	else{ window.open(valor);};
};
function abrirInfo2(ruta){
	valor = $( '#project-id2' ).val();
	valor1 = $( '#project2' ).val();
	if(valor == '' ) window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
	else{ window.open(valor);};
};
//Fin-ilander-Ticket 4967
//ilander-Ticket 5360
function abrirInfo3(ruta){
	valor = $( '#project-id3' ).val();
	valor1 = $( '#project3' ).val();
	if(valor == '' ) window.open("http://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
	else{ window.open(valor);};
};
function abrirInfo4(ruta){
	valor = $( '#project-id4' ).val();
	valor1 = $( '#project4' ).val();
	if(valor == '' ) window.open("http://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
	else{ window.open(valor);};
};
//Fin-ilander-Ticket 5360
function abrirInfoH(ruta){
	valor = $( '#hotel-id' ).val();
	valor1 = $( '#hotel' ).val();
	if(valor == '' ) window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
	else window.open(valor);
};
function abrirInfoHot(ruta){
	valor = $( '#hoteles-id' ).val();
	valor1 = $( '#hoteles' ).val();
	if(valor == '' ) window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
	else window.open(valor);
};
function abrirInfoCiu(ruta){
	valor = $( '#ciudades-id' ).val();
	valor1 = $( '#ciudades' ).val();
	if(valor == '' ) window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
	else window.open(valor);
};
//ilander-Ticket 4967
/*function presionartecla(event,ruta){
	var x;
	if(window.event){ // IE8 and earlier 
		x=event.keyCode;
	}else if(event.which){ // IE9/Firefox/Chrome/Opera/Safari
		x=event.which;
	};
	if(x == 13){
		valor = $( '#project-id' ).val();
		valor1 = $( '#project' ).val();
		valor2 = $( '#project-id2' ).val();
		if(valor == '' ){
			if(valor2 == '' ){
				window.open("http://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
			}else{ window.open(valor2);};
		}else{ window.open(valor);};
	};
}; */
function presionartecla(event,ruta){
	var x;
	if(window.event){ // IE8 and earlier 
		x=event.keyCode;
	}else if(event.which){ // IE9/Firefox/Chrome/Opera/Safari
		x=event.which;
	};
	if(x == 13){
		valor = $( '#project-id' ).val();
		valor1 = $( '#project' ).val();
		if(valor == '' ) window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
		else window.open(valor);
	};
};
function presionartecla2(event,ruta){
	var x;
	if(window.event){ // IE8 and earlier 
		x=event.keyCode;
	}else if(event.which){ // IE9/Firefox/Chrome/Opera/Safari
		x=event.which;
	};
	if(x == 13){
		valor = $( '#project-id2' ).val();
		valor1 = $( '#project2' ).val();
		if(valor == '' ) window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
		else window.open(valor);
	};
};
//Fin-ilander-Ticket 4967
//ilander-Ticket 5360
function presionartecla3(event,ruta){
	var x;
	if(window.event){ // IE8 and earlier 
		x=event.keyCode;
	}else if(event.which){ // IE9/Firefox/Chrome/Opera/Safari
		x=event.which;
	};
	if(x == 13){
		valor = $( '#project-id3' ).val();
		valor1 = $( '#project3' ).val();
		if(valor == '' ) window.open("http://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
		else window.open(valor);
	};
};
function presionartecla4(event,ruta){
	var x;
	if(window.event){ // IE8 and earlier 
		x=event.keyCode;
	}else if(event.which){ // IE9/Firefox/Chrome/Opera/Safari
		x=event.which;
	};
	if(x == 13){
		valor = $( '#project-id4' ).val();
		valor1 = $( '#project4' ).val();
		if(valor == '' ) window.open("http://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
		else window.open(valor);
	};
};
//Fin-ilander-Ticket 5360
function presionarteclaC(event,ruta){
	var x;
	if(window.event){ // IE8 and earlier 
		x=event.keyCode;
	}else if(event.which){ // IE9/Firefox/Chrome/Opera/Safari
		x=event.which;
	};
	if(x == 13){
		valor = $( '#ciudades-id' ).val();
		valor1 = $( '#ciudades' ).val();
		if(valor == '' ) window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
		//ilander-Ticket 4964
		else {
		if(valor1 == '') {
			alert('Debe escribir el nombre de su destino, hotel o posada');
			//window.open("http://"+ruta+"/hoteles/index.htm");
			//location.reload();
		}	
		else window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");		       
		}
		//else window.open(valor);
		//Fin-ilander-Ticket 4964
	};
};
function presionarteclaH(event,ruta){
	var x;
	if(window.event){ // IE8 and earlier 
		x=event.keyCode;
	}else if(event.which){ // IE9/Firefox/Chrome/Opera/Safari
		x=event.which;
	};
	if(x == 13){
		valor = $( '#hoteles-id' ).val();
		valor1 = $( '#hoteles' ).val();
		if(valor == '' ) window.open("https://"+ruta+"/siteinfo/buscar.htm?tipo=2&term="+valor1+"&list=todos");
		else window.open(valor);
	};
};

/* MOBILE MENU */
/*
Este código pertenece al menú para teléfonos y tablets.


*/

var navToggle;

function openMenu(e) {
   var mobileNavigation = document.querySelector(".mobile-navigation");
    navToggle = e.target;
    var movileNavigationIcon = document.querySelector(".mobile-navigation-icon");
    if (mobileNavigation.classList.contains('is-open') && movileNavigationIcon.classList.contains('is-open')) {
        mobileNavigation.classList.remove('is-open');
        movileNavigationIcon.classList.remove('is-open');
    } else {
        mobileNavigation.classList.add("is-open");
        movileNavigationIcon.classList.add('is-open');
    }
    e.preventDefault();
}

function toggleSubMenu(e) {
    var subListing = e.target.parentNode.children[2];
    subListing.classList.toggle('displaySub');
}

document.addEventListener('click', function(event) {
    var mobileNavigation = document.querySelector(".mobile-navigation");
    var movileNavigationIcon = document.querySelector(".mobile-navigation-icon");
    var isClickInside = navToggle.contains(event.target);
    if (mobileNavigation.classList.contains('is-open') && event.target.localName === "a" && !isClickInside) {
        mobileNavigation.classList.remove('is-open');
        movileNavigationIcon.classList.remove('is-open');
    } 
});
