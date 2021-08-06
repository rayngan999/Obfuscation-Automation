function locationValue1(){
	var elems = document.forms['busqueda'].location;
	for (i = 0; i < elems.length; i ++){
		if (elems[i].checked) return elems[i].value.substring(1);
	};
	return undefined;
};
function locationClicked1(){
	//Dar tiempo para que después de click se cambie el valor
	setTimeout(locationChanged1, 50);
};
function locationChanged1(){
	var searchField = locationValue1();
	var disabled;
	$.each(['Lista1', 'Lista2', 'Linea1'], function(dummy, currField){
		if (currField == searchField){
			disabled = false;
		}else{
			disabled = true;
		};
		GE(currField).disabled = disabled;
	});
	//actCantHoteles1();
};

function actCantHoteles1(cid){
	var spanColor;
	//Vaciar la lista de hoteles de la búsqueda anterior
	//$('.results').find('div.hotline').slideDown('slow', function (){

	//});
	//Marcar las características activadas
	for (var i = 0; i < cajasAvanzada.length; i ++){
		var caja = cajasAvanzada[i];
		var obj = GE(caja);
		if (obj.checked){
			spanColor = 'PowderBlue';
		}else{
			spanColor = '';
		};
		$('#td' + caja).css('background-color', spanColor);
	};
	var busquedaValida = comprobarBusqueda();
	if (!busquedaValida[0]){
		$('.fastResults')
			.css('background-color', 'salmon')
			.html(busquedaValida[1]);
		return false;
	};
	$('.fastResults')
		//.css('background-color', '#73DD4F')
		.css('border', '0')
		//.html("<img src='"+URLstl+"/ajax-loader-busqueda.gif' height='11' /> " + MM['Buscando'] + '...');
		.html("<img src='"+URLstl+"/loading_galery.gif' />");
	//Get search parameters
	var param = getSearchParam();
	param.cid = cid;
	busquedasEnviadas ++;
	//Obtener resultados de una vez
	ajax = ajaxRequest(URLpax + '/buscar.php', param, function(res){obtenerResultados(res, param)});
};

$(document).ready(function(){
	var tipo = '';
	$( '#project' ).autocomplete({
		minLength: 3,
		source: '/programas/otros/search.php?id=2&term='+$( '#project' ).val( ),
		/*focus: function( event, ui ) {
		$( '#project' ).val( ui.item.label );
		$( '#project-id' ).val( ui.item.value );
		return false;
		},*/
		select: function( event, ui ) {
		$( '#project' ).val( ui.item.label );
		$( '#project-id' ).val( ui.item.value );
		$( '#project-id' ).val('');
		window.location.assign(ui.item.value);
		return false;
		}
	})
	.data( 'ui-autocomplete' )._renderItem = function( ul, item ) {
		if(tipo != item.category){
			if(item.category == 'Todos'){
				return $( "<li class='category'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			}else{
				tipo = item.category;			
				return $( "<li class='category'>" + item.category + "</li><li class='nonCategory'><a>" + item.label +"</a></li>")
				.appendTo( ul );	
			}
		}else{
			if(item.label != 'ver además +'){
				return $( "<li class='nonCategory'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			}else{						
				return $( "<li class='cajavermas'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			};		
		};
	};
	
	$( '#project2' ).autocomplete({
		minLength: 3,
		source: '/programas/otros/search.php?id=2&term='+$( '#project2' ).val( ),
		/*focus: function( event, ui ) {
		$( '#project' ).val( ui.item.label );
		$( '#project-id2' ).val( ui.item.value );
		return false;
		},*/
		select: function( event, ui ) {
		$( '#project2' ).val( ui.item.label );
		$( '#project-id2' ).val( ui.item.value );
		$( '#project-id2' ).val('');
		window.location.assign(ui.item.value);
		return false;
		}
	})
	.data( 'ui-autocomplete' )._renderItem = function( ul, item ) {
		if(tipo != item.category){
			if(item.category == 'Todos'){
				return $( "<li class='category'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			}else{
				tipo = item.category;			
				return $( "<li class='category'>" + item.category + "</li><li class='nonCategory'><a>" + item.label +"</a></li>")
				.appendTo( ul );	
			}
		}else{
			if(item.label != 'ver además +'){
				return $( "<li class='nonCategory'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			}else{						
				return $( "<li class='cajavermas'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			};		
		};
	};
	//ilander-Ticket 5360
	$( '#project3' ).autocomplete({
		minLength: 3,
		source: '/programas/otros/search.php?id=2&term='+$( '#project3' ).val( ),
		/*focus: function( event, ui ) {
		$( '#project' ).val( ui.item.label );
		$( '#project-id2' ).val( ui.item.value );
		return false;
		},*/
		select: function( event, ui ) {
		$( '#project3' ).val( ui.item.label );
		$( '#project-id3' ).val( ui.item.value );
		$( '#project-id3' ).val('');
		window.location.assign(ui.item.value);
		return false;
		}
	})
	.data( 'ui-autocomplete' )._renderItem = function( ul, item ) {
		if(tipo != item.category){
			if(item.category == 'Todos'){
				return $( "<li class='category'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			}else{
				tipo = item.category;			
				return $( "<li class='category'>" + item.category + "</li><li class='nonCategory'><a>" + item.label +"</a></li>")
				.appendTo( ul );	
			}
		}else{
			if(item.label != 'ver además +'){
				return $( "<li class='nonCategory'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			}else{						
				return $( "<li class='cajavermas'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			};		
		};
	};
	$( '#project4' ).autocomplete({
		minLength: 3,
		source: '/programas/otros/search.php?id=2&term='+$( '#project4' ).val( ),
		/*focus: function( event, ui ) {
		$( '#project' ).val( ui.item.label );
		$( '#project-id2' ).val( ui.item.value );
		return false;
		},*/
		select: function( event, ui ) {
		$( '#project4' ).val( ui.item.label );
		$( '#project-id4' ).val( ui.item.value );
		$( '#project-id4' ).val('');
		window.location.assign(ui.item.value);
		return false;
		}
	})
	.data( 'ui-autocomplete' )._renderItem = function( ul, item ) {
		if(tipo != item.category){
			if(item.category == 'Todos'){
				return $( "<li class='category'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			}else{
				tipo = item.category;			
				return $( "<li class='category'>" + item.category + "</li><li class='nonCategory'><a>" + item.label +"</a></li>")
				.appendTo( ul );	
			}
		}else{
			if(item.label != 'ver además +'){
				return $( "<li class='nonCategory'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			}else{						
				return $( "<li class='cajavermas'></li>")
				.append( '<a>' + item.label + '</a>' )
				.appendTo( ul );
			};		
		};
	};
	//Fin-ilander-Ticket 5360
	if(buscarAuto == 2){
		var tipo = '';
		$( '#hotel' ).autocomplete({
			minLength: 3,
			source: '/programas/otros/search.php?id=1&term='+$( '#hotel' ).val( ),
			/*focus: function( event, ui ) {
			$( '#hotel' ).val( ui.item.label );
			$( '#hotel-id' ).val( ui.item.value );
			return false;
			},*/
			select: function( event, ui ) {
			$( '#hotel' ).val( ui.item.label );
			$( '#hotel-id' ).val( ui.item.value );
			$( '#hotel-id' ).val('');
			window.location.assign(ui.item.value);
			return false;
			}
		})
		.data( 'ui-autocomplete' )._renderItem = function( ul, item ) {
			if(tipo != item.category){
				if(item.category == 'Todos'){
					return $( "<li class='category'></li>")
					.append( '<a>' + item.label + '</a>' )
					.appendTo( ul );
				}else{
					tipo = item.category;	
					return $( "<li class='category'>" + item.category + "</li><li class='nonCategory'><a>" + item.label +"</a></li>")
					.appendTo( ul );	
				}
			}else{
				if(item.label != 'ver además +'){
					return $( "<li class='nonCategory'></li>")
					.append( '<a>' + item.label + '</a>' )
					.appendTo( ul );
				}else{						
					return $( "<li class='cajavermas'></li>")
					.append( '<a>' + item.label + '</a>' )
					.appendTo( ul );
				};		
			};
		};
	};
});