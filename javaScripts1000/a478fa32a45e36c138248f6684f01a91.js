/*

SE DEBE UTILIZAR LA VERSIÃâN MINIFICADA, EJEMPLO:

C:\BANORTE\wkbanorte4\ContactoChat\WebContent\_ContactoChat\js>java -jar c:\Users\IBM_ADMIN\Downloads\yuicompressor-2.4.8.jar contactoChatOriginal.js -o contactoChat.min.js

El nombre final debe ser "contactoChat.min.js"

*/


// -- header start function

/* en function headerOpenWidget($openMe){
agregar:
if(currentWidget==nameWidgets[1]){
    // Funciones para Contacto
    if (typeof contactoChatWidgetPostInitialize !== 'undefined' && $.isFunction(contactoChatWidgetPostInitialize)) {
    	contactoChatWidgetPostInitialize();
    }
*/
// -- header end function


function ChatProactivo(params) {
	this.contactoWidgetLoaded = false;
	this.widgetVersion = "1";
	this.urlServicio = "https://contacto.banorte.com/BanorteMediaServices/Chat/HtmlChatFrameSet.jsp?Filter=Personas";
	this.formEnabled = false;
	this.MAIL_PATTERN = /^[\w-']+(\.[\w-']+)*@([a-zA-Z0-9]+[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
	this.NOMBRE_PATTERN = /^[A-ZÃÃÃÃÃÃÃ ]{1,100}$/;
	this.firstLoad = true;
	this.disableValidaHorario = false;
	this.loaded = false; // valida que el evento de click no se mande dos veces simultÃ¡neas
}

ChatProactivo.prototype = {
	constructor: ChatProactivo,
	validateHorarioAtencion: function(ctx) {

		$.ajax({
			type : 'POST',
			url : ctx.urlServicio, //Aqui esta la variable que contiene la url al serveResource
			dataType : "json",
			async : false,
		    data : {operacion: "validateHorarioAtencion"}, 
			success : function(data) {
				//console.log('data');
				//console.log(data);
				if(data.success == 'false') {
					//$(".widget_cotacto_chat").show();
					$('#widget_contacto_chat_disable_p').html("El servicio de chat se encuentra en un horario no disponible.");
	   				$("#widget_contacto_chat_disable").show();
	   				$("#chat_block").hide();
		    	}
		    	else {
		    		//$(".widget_contacto_chat").show();
		    		$("#widget_contacto_chat_disable").hide();
	   				$("#chat_block").show();
		    	}
		    }
		});
	},
	validateReg:function (val, pattern) {
	    var isValid = false;
	    if (val) {
	        isValid = pattern.test(val);
	    }
	    return isValid;
	},
	clearChat: function() {
		$("#inputNameChat2").val('');
		$("#inputLastName2").val('');
		$("#inputEmailChat2").val('');
		$(".error_tip").css('visibility', 'hidden');
		//$('#startchat').attr('disabled','disabled');

	},
	checkChatCamposEmpty: function(ctx) {

		var stat = true;
		// $('.widget_contacto .layout .error_tip').css('visibility', 'hidden');



		$("#inputNameChat2").val( ("" + $("#inputNameChat2").val()).trim() );


		//alert($("#inputNameChat").val().length);

		if(	($("#inputNameChat2").val().length == 0 
			|| $("#inputNameChat2").val() == $("#inputNameChat2").attr('placeholder')) 
			|| !ctx.validateReg($('#inputNameChat2').val(), this.NOMBRE_PATTERN ) ) {


			console.info("error nombre");

			$("#inputNameChat_tip2").css('visibility', 'visible');
			//console.log('pintar tip name');
			stat = false;
		}
		else {
			$("#inputNameChat_tip2").css('visibility', 'hidden');
		}

		//alert("checkChatCamposEmpty:"+stat);
		
		$("#inputLastName2").val( ("" + $("#inputLastName2").val()).trim() );

		if(	($("#inputLastName2").val().length == 0 
			|| $("#inputLastName2").val() == $("#inputLastName2").attr('placeholder')) 
			|| !ctx.validateReg($('#inputLastName2').val(), this.NOMBRE_PATTERN ) ) {
			$("#inputLastNameChat_tip2").css('visibility', 'visible');

			//console.log('pintar tip name');
			console.info("error apellido");
			stat = false;
		}
		else {
			$("#inputLastNameChat_tip2").css('visibility', 'hidden');
		}

		//alert("checkChatCamposEmpty:"+stat);
		
		if( !ctx.validarEmail($("#inputEmailChat2").val()) ) {
			$("#inputEmailChat_tip2").css('visibility', 'visible');

			console.info("error mail");

			stat = false;
			//console.log('pintar tip mail');
		}
		else {
			$("#inputEmailChat_tip2").css('visibility', 'hidden');
		}



		console.info($("#inputNameChat2").val());
		console.info($("#inputLastName2").val());
		console.info($("#inputEmailChat2").val());


		//alert("checkChatCamposEmpty:"+stat);
		return stat;
	},
	
	validarEmail: function( email ) {
		if (/(\w+)(\.?)(\w*)(\@{1})(\w+)(\.?)(\w*)(\.{1})(\w{2,3})/.test(email)) {
			return true;
		} else {
			return false;
		}
	},
	
	doChatValidations: function (ctx) {


		alert("doChatValidations");
		if( ctx.checkChatCamposEmpty(ctx) ) {
			$('#startchat2').removeAttr('disabled');
		}
		else {
			$('#startchat2').attr('disabled','disabled');
		}
	},
	initialize: function() {

		    var ctx = this;

			console.info("escondiendo");

			$(".error_tip").css('visibility', 'hidden');	

			$('#inputNameChat2').keyup(function(e) {				
				$(this).val( ($(this).val() + '').toUpperCase() );				
			});

			$('#inputNameChat2').change(function(e) {
				$(this).val( ($(this).val() + '').toUpperCase() );
				
			});

			$('#inputLastName2').keyup(function(e) {				
				$(this).val( ($(this).val() + '').toUpperCase() );				
			});

			$('#inputLastName2').change(function(e) {				
				$(this).val( ($(this).val() + '').toUpperCase() );				
			});

			
		
		var closeButton = '.widget_chat_layout .widget_chat2 .headline .close';
		//console.log('add close event shat: ' + closeButton);
		$(closeButton).click(function(){
			
			ctx.clearChat();			
			ctx.checkChatCamposEmpty(ctx);			
			
			//$(this).hide().removeClass('open').removeAttr('style');
			$(".welcome_widget").addClass("open");
            $(".welcome_widget").animate({"margin-right": '+=300'});
            $(".widget_chat2").animate({"margin-right": '-=300'});	

            $("#inputNameChat_tip2").css('visibility', 'hidden');
		    $("#inputLastNameChat_tip2").css('visibility', 'hidden');
		    $("#inputEmailChat_tip2").css('visibility', 'hidden');	
		});

		


		$('input').change(function(e) {
			ctx.checkChatCamposEmpty(ctx);
		});

		$("#startchat2").on("click",function() {

			 console.info("validar");

			if(ctx.checkChatCamposEmpty(ctx)) {


				var productID="publico_chequeras";

				if(window.location.href.indexOf('/portal/banorte/Home/inicio')>0)
				{
					productID="publico_banorte";
				}
				else if(window.location.href.indexOf('/portal/ixe/Home/inicio')>0)
				{
					productID="publico_ixe";
				}
				else if(window.location.href.indexOf('/portal/gfb/Home/inicio')>0)
				{
				    productID="publico_gfnorte";
				}
				
                 var params="Comment=&Filter=1&ProductId="+productID+"&Telephone=0000000000&TypeQuestion=&IsClient=Si&isPreferent="+escape($("#inputIsPreferent2").val())+"&NumeroClienteAltamira=&Canal=Portal&Name="+escape($("#inputNameChat2").val())+"&LastName="+escape($("#inputLastName2").val())+"&Email="+$("#inputEmailChat2").val();
       
                 window.open(ctx.urlServicio+"&"+params,"frmChat");                

                  ga('send', 'event', 'ChatProactivo', 'entrar', productID);
		        
			}
		});


		$(".pulse2").click(function(){			
           ctx.showChat();

           if(window.location.href.indexOf('/portal/banorte/Home/inicio')>0)
				{
					productID="publico_banorte";
				}
				else if(window.location.href.indexOf('/portal/ixe/Home/inicio')>0)
				{
					productID="publico_ixe";
				}
				else if(window.location.href.indexOf('/portal/gfb/Home/inicio')>0)
				{
				    productID="publico_gfnorte";
				}

            ga('send', 'event', 'ChatProactivo', 'abrir', productID);
		});
		


		//TIMER PARA MOSTRAR VENTANA AL TRANSCURRIR 30 SEGUNDOS

		var delay=10000; //30 second
	    //delay = 3000;

	    setTimeout(function() {
	       $(".welcome_widget").addClass("open");
	       $(".welcome_widget").animate({"margin-right": '+=300'});
	    }, delay);

	},//initialize
	showChat:function(){

		$(".widget_chat2").addClass("open");
       $(".widget_chat2").animate({"margin-right": '+=300'});
       $(".welcome_widget").animate({"margin-right": '-=300'});

       $("#inputNameChat_tip2").css('visibility', 'hidden');
	   $("#inputLastNameChat_tip2").css('visibility', 'hidden');
	   $("#inputEmailChat_tip2").css('visibility', 'hidden');

	},
	fit: function(tab) {
		var ctx = this;
		if( !ctx.open ) {
			ctx.scrollTopPos = $(window).scrollTop();
			$(window).scrollTop(0);
			//console.log('open: ' + ctx.scrollTopPos);
		    ctx.open = true;
		}
		ctx.initCapcha(ctx);
		ctx.clearChat();
		if( tab == 1 ) {
			$('#email').attr('checked','checked');
			$('#email').click();
		}
		else if( tab == 2 ) {
			$('#phone').attr('checked','checked');
			$('#phone').click();
		}
		$('.contact_trigger > a').click();
	},
	getCaretPosition: function(oField) {
		// Initialize
		var iCaretPos = 0;
		// IE Support
		if (document.selection) {
			// Set focus on the element
			oField.focus();
			// To get cursor position, get empty selection range
			var oSel = document.selection.createRange();
			// Move selection start to 0 position
			oSel.moveStart('character', -oField.value.length);
			// The caret position is selection length
			iCaretPos = oSel.text.length;
		}
		// Firefox support
		else if (oField.selectionStart || oField.selectionStart == '0') {
			iCaretPos = oField.selectionStart;
		}
		return iCaretPos;
	},
	setCaretPosition: function(oField, pos) {
	    if(oField.setSelectionRange) {
	        oField.focus();
	        oField.setSelectionRange(pos,pos);
	    }
	    else if (oField.createTextRange) {
	        var range = oField.createTextRange();
	        range.collapse(true);
	        range.moveEnd('character', pos);
	        range.moveStart('character', pos);
	        range.select();
	    }
	},
	setValWCaret: function(ctx, jqEl, masked) {
		var cpos = ctx.getCaretPosition(document.getElementById('inputTelefono'));
		// console.log('cpos:'+cpos);
		var val = ctx.getPhone10Digits(ctx, jqEl.val()); // value and pos prev caret
		jqEl.val(val, false);
		ctx.setCaretPosition(document.getElementById('inputTelefono'), cpos);
	},
	getPhone10Digits: function(ctx, str, masked) {
		var regex = /\d+/g; //  /\d+/g;
		var matchedNum = '';
		var match = str.match(regex);
		for(key in match) {
			matchedNum += match[key];
		}
		matchedNum = matchedNum.length > 10 ? matchedNum.substring(0,10) : matchedNum;
		var retVal = '';
		if( masked ) {
			var strMask = '(##) ####-####';
			var matchedNumFmt = '';
			var j=0, k=matchedNum.length;
			for(var i=0; i<strMask.length && k > 0; ++i) {
				if( strMask.charAt(i) == '#' ) {
					if( j < k ) {
						matchedNumFmt += matchedNum.charAt(j++);
					}
					else {
						break;
					}
				}
				else {
					matchedNumFmt += strMask.charAt(i);
				}
			}
			retVal = matchedNumFmt;
		}
		else {
			retVal = matchedNum;
		}
		
		return retVal;
	},
	placeHolderFix: function() {
		// Released under MIT license: http://www.opensource.org/licenses/mit-license.php
 		var placesSelector = '.widget_contacto [placeholder]';
		$(placesSelector).focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur().parents('form').submit(function() {
			$(this).find(placesSelector).each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			});
		});
	}
};