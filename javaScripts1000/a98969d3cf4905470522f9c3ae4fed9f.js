//[[PATCH]] Customizaciones en todo lo que viene despuê³
//Asegurarse de que jquery active isReady correctamente
$(function(){
    if (facebook){
        //identificamos todos los enlaces que no tienen un target
        //y le asignamos _blank para prevenir cualquier enlace no deseado
        //dentro de facebook
        $.each($("a"),function(index,val){
            if ($(this).attr('target')=='')
                $(this).attr('target', '_blank');
        });
    }
});
//getElementById
window.GE = function (elem){
	//If this is not a string, it will be returned 
	if ('' + elem != elem) return elem;
	return document.getElementById(elem);
};
//createElement
window.CE = function (elem, prop, context){
	if (undefined === context) context = document;
	var obj;
	if (navigator.appName == 'Microsoft Internet Explorer'){ //if ($.browser.msie){
		obj = context.createElement('<'+elem+'>');
	}else{
		obj = context.createElement(elem);
	};
	if (typeof prop != 'object'){
		return obj;
	};
	if (prop['innerHTML'] != undefined){
		$(obj).html(prop['innerHTML']);
		delete prop['innerHTML'];
	};
	if (prop['innerText'] != undefined){
		$(obj).text(prop['innerText']);
		delete prop['innerText'];
	};
	$(obj).attr(prop);
	return obj;
};
window.decodeArray = function (array){
	$.each(array, function(name, elem){
		array[name] = decodeString(elem);
	});
	return array;
};
window.decodeString = function (elem){
	//Se usa .innerHTML para que se escriba como verdadero html y los '&lt;' pasen a '<'
	__formater.innerHTML = elem;
	//innerHTML devuelve la etiqueta aò® £odificada, por lo que se usa .value para obtener '<'
	return __formater.value;
};
//Ya que al momento de crear este objeto puede que no exista el body, simplemente se deja flotando globalmente para el decodificador
window.__formater = CE('textarea');