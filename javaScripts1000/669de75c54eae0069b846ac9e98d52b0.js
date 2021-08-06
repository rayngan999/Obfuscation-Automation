/*

SE DEBE UTILIZAR LA VERSION MINIFICADA, EJEMPLO:

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

var contactoChatURL = "" + window.location.href.toLowerCase();

function BMNContactoChat(params) {
    this.sic = "";
    this.nombreUsuario = "";
    this.enableVideoForAll = false;
    this.contactoWidgetLoaded = false;
    this.widgetVersion = "1.3RWDHBx";
    this.urlServicio = params.urlServicio;
    this.chatEmpresa = "";
    this.chatPyMEMainDotDebug = "";
    this.chatPyMEMainDotI18n = "";
    this.chatPyMESendMessageDataURL = "";
    this.chatPyMEWebChatDataURL = "";
    this.cobrowse = "";
    this.contactoChatOriginalScriptSrc = "";
    this.expiresKaptcha = "";
    this.genesysChatWindowOffset = "";
    this.horarioDomingoFin = "";
    this.horarioDomingoInicio = "";
    this.horarioSabadoFin = "";
    this.horarioSabadoInicio = "";
    this.horarioSemanaFin = "";
    this.horarioSemanaInicio = "";
    this.oldChatEnabled = "";
    this.oldChatInterface = "";
    this.pulseChatButtonEnabled = "";
    this.statusDomingo = "";
    this.statusFormContacto = "";
    this.statusJueves = "";
    this.statusLunes = "";
    this.statusMartes = "";
    this.statusMiercoles = "";
    this.statusSabado = "";
    this.statusViernes = "";
    this.telefonoContacto = "";
    this.urlChat = "";
    this.vydioTemp = "";
    this.widgetsAcceso24ScriptSrc = "";
    this.widgetsBanorteCSS = "";
    this.widgetsBotJsScriptSrc = "";
    this.widgetsMinCSS = "";
    this.widgetsMinJS = "";
    this.widgetsSurveyScriptSrc = "";
    this.widgetsWatsonCSS = "";
    this.wimEnvironment = "";
    this.chatEmpresa = params.chatEmpresa;
    this.statusFormContacto = params.statusFormContacto;
    this.thereSession = params.thereSession;
    this.sessionJSON = params.sessionJSON;
    this.kaptchaId = 0;
    this.contactoChatElements = [
        "#nombre", "#apellido", "#comentario", "#inputTelefono", "#inputEmail", "#tema", "#productoDeInteres", "#btnEnviar",
        "#contactoby_phone", "#contactoby_email", "#kaptcha_user"
    ];
    this.checkBoxRelated = [];
    this.checkBoxRelated['#contactoby_phone'] = ['#inputTelefono'];
    this.checkBoxRelated['#contactoby_email'] = ['#inputEmail'];
    this.formEnabled = false;
    this.MAIL_PATTERN = /^[\w-']+(\.[\w-']+)*@([a-zA-Z0-9]+[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*?\.[a-zA-Z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
    this.NOMBRE_PATTERN = /^[A-Zï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ ]{1,100}$/;
    this.MAX_COMMENT = 600;
    this.COMENTARIO_PATTERN = /^[\w-' .,ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½!ï¿½ï¿½?\r\n]{1,600}$/;
    this.KAPTCHA_PATTERN = /^[a-z0-9]{4}$/;
    this.firstLoad = true;
    this.disableValidaHorario = false;
    this.scrollTopPos = 0;
    this.loaded = false; // valida que el evento de click no se mande dos veces simultÃ¡neas
}

BMNContactoChat.prototype = {
    constructor: BMNContactoChat,
    validaVydeollamada: function(ctx) {
        $.ajax({
            type: 'POST',
            url: ctx.urlServicio,
            dataType: "json",
            async: false,
            contentType: 'application/x-www-form-urlencoded; charset=ISO-8859-1',
            data: { operacion: "validaVydio", sic: ctx.sic },
            success: function(data) {
                $("#vydio-button").hide();
                console.log('DataVideo::..' + data.vydio);
                if (data.vydio == 'true') {
                    $("#vydio-button").show();
                } else if (ctx.enableVideoForAll) {
                    $("#vydio-button").show();
                } else {
                    $("#vydio-button").hide();
                }
                var newsics = ["35836883", "56587885", "52492822", "44252699", "32766059", "49113374", "43981745", "40065783", "49806566", "42702911", "48737457", "32906762", "34732109", "41210355", "45079304", "29274742", "51818128", "31142150", "11900480", "20184039", "35575941"]
                    //var sics = ["53961177", "35836883", "52299054", "52184310", "52114744", "52299047", "52299048", "51997580", "56587885", "52492822", "44252699", "32766059", "49113374", "43981745", "40065783", "49806566", "42702911", "48737457", "32906762", "34732109", "41210355", "45079304", "29274742", "51818128", "31142150", "11900480", "20184039", "35575941", "20184039", "56587885", "9789453", "47357761", "10993358", "8762078", "5089983", "8621917", "42702911", "6674413", "23929765", "51458902", "10315520", "34732109", "7403120", "41210355", "46903628", "6920674", "29274742", "27954303", "31142150"];
                /*
                if (newsics.indexOf(contactoChatWidget.sic) > -1) {
                    $("#vydio-button").show();
                } else {
                    $("#vydio-button").hide();
                }
                
                $("#vydio-button").show();

                */
            },
            error: function(e) {
                console.log("");
            }
        });
    },
    validateHorarioAtencion: function(ctx) {
        $.ajax({
            type: 'POST',
            url: ctx.urlServicio, //Aqui esta la variable que contiene la url al serveResource
            dataType: "json",
            async: false,
            data: { operacion: "validateHorarioAtencion" },
            success: function(data) {
                //console.log('data');
                //console.log(data);
                if (data.success == 'false') {
                    //$(".widget_cotacto_chat").show();
                    $('#widget_contacto_chat_disable_p').html("El servicio de chat se encuentra en un horario no disponible.");
                    $("#widget_contacto_chat_disable").show();
                    $("#chat_block").hide();
                } else {
                    //$(".widget_contacto_chat").show();
                    $("#widget_contacto_chat_disable").hide();
                    changeTextButton();
                    $("#chat_block").show();
                }
            }
        });
    },
    contactoWidgetPreInitialize: function(ctx) {
        //ctx.initCapcha(ctx);
        if (!ctx.disableValidaHorario && (ctx.chatEmpresa == 1 || ctx.chatEmpresa == 2)) {
            ctx.validateHorarioAtencion(ctx);
        }
        if (!ctx.contactoWidgetLoaded) {
            ctx.contactoWidgetLoaded = true;
        }
    },
    initCapcha: function(ctx) {
        ctx.reloadCapcha(ctx);
    },
    reloadCapcha: function(ctx) {
        //console.log({operacion: "reKaptcha", kaptchaId: ctx.kaptchaId });

        $.ajax({
            type: 'POST',
            url: ctx.urlServicio,
            async: true,
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",
            dataType: "json",
            data: { operacion: "reKaptcha", kaptchaId: ctx.kaptchaId },
            success: function(data) {
                $('#first1').attr('src', "/wps/PA_ContactoChat/_ContactoChat/img/1/" + data.firstImg1);
                $('#first2').attr('src', "/wps/PA_ContactoChat/_ContactoChat/img/1/" + data.firstImg2);
                $('#operation').attr('src', "/wps/PA_ContactoChat/_ContactoChat/img/" + data.operation);
                $('#second').attr('src', "/wps/PA_ContactoChat/_ContactoChat/img/2/" + data.second);
            }
        });

    },
    resetForm: function() {
        $("span#success").hide();
        $("#nombre").val("");
        $("#nombre").blur();
        $("#apellido").val("");
        $("#apellido").blur();
        $("#comentario").val("");
        $("#comentario").blur();
        //$("#inputTelefono").val("");
        //$("#inputTelefono").blur();
        $("#inputEmail").val("");
        $("#inputEmail").blur();
        $('#kaptcha_user').val("");
        $('#kaptcha_user').blur();
        $("#tema").val("Tema");
        $("#productoDeInteres").val("Ninguno");

        $('#tema option[value="Tema"]').attr('selected', 'selected');
        if ($(".widget_contacto .layout .column2A .styled-select").length > 0) {
            $(".widget_contacto .layout .column2A .styled-select .row").html("Tema");
        }

        $('#productoDeInteres option[value="Producto"]').attr('selected', 'selected');
        if ($(".widget_contacto .layout .column2A .styled-select").length > 0) {
            $(".widget_contacto .layout .column2A .styled-select .row").html("Ninguno");
        }

        if (!$('#contactoby_email').is(":checked")) {
            $('#contactoby_email').click();
        }
        $('.widget_contacto .layout .error_tip').css('visibility', 'hidden');
        $('.widget_contacto .layout .char_counter:first').html('0/' + this.MAX_COMMENT + ' Caracteres');
    },
    validateReg: function(val, pattern) {
        var isValid = false;
        if (val) {
            isValid = pattern.test(val);
        }
        return isValid;
    },
    clearChat: function() {
        $("#inputNameChat").val('');
        $("#inputLastName").val('');
        $("#inputEmailChat").val('');
        $("#inputNameChat_tip").css('visibility', 'hidden');
        $("#inputLastNameChat_tip").css('visibility', 'hidden');
        $("#inputEmailChat_tip").css('visibility', 'hidden');
        $('#startchat').attr('disabled', 'disabled');
    },
    checkChatCamposEmpty: function(ctx) {
        var stat = true;
        // $('.widget_contacto .layout .error_tip').css('visibility', 'hidden');
        $("#inputNameChat").val(("" + $("#inputNameChat").val()).trim());
        if (($("#inputNameChat").val().length == 0 ||
                $("#inputNameChat").val() == $("#inputNameChat").attr('placeholder')) ||
            !ctx.validateReg($('#inputNameChat').val(), this.NOMBRE_PATTERN)) {
            $("#inputNameChat_tip").css('visibility', 'visible');
            //console.log('pintar tip name');
            stat = false;
        } else {
            $("#inputNameChat_tip").css('visibility', 'hidden');
        }

        $("#inputLastName").val(("" + $("#inputLastName").val()).trim());
        if (($("#inputLastName").val().length == 0 ||
                $("#inputLastName").val() == $("#inputLastName").attr('placeholder')) ||
            !ctx.validateReg($('#inputLastName').val(), this.NOMBRE_PATTERN)) {
            $("#inputLastNameChat_tip").css('visibility', 'visible');
            //console.log('pintar tip name');
            stat = false;
        } else {
            $("#inputLastNameChat_tip").css('visibility', 'hidden');
        }

        if (!ctx.validarEmail($("#inputEmailChat").val())) {
            $("#inputEmailChat_tip").css('visibility', 'visible');
            stat = false;
            //console.log('pintar tip mail');
        } else {
            $("#inputEmailChat_tip").css('visibility', 'hidden');
        }
        return stat;
    },
    checkCamposEmpty: function(ctx) {
        var stat = true;
        $("span.alert").hide();
        $('.widget_contacto .layout .error_tip').css('visibility', 'hidden');

        $("#nombre").val(("" + $("#nombre").val()).trim());
        $("#apellido").val(("" + $("#apellido").val()).trim());
        $("#comentario").val(("" + $("#comentario").val()).trim());

        if ($("#tema").val() == "Tema") {
            //$("span#emptyTema").show();
            $("#tema_tip").css('visibility', ctx.firstLoad ? 'hidden' : 'visible');
            stat = false;
        }
        /*if($("#productoDeInteres").val() == "Ninguno" ) {
        	//$("span#emptyTema").show();
        	$("#productoDeInteres_tip").css('visibility', ctx.firstLoad? 'hidden' : 'visible');
        	stat = false;
        }*/
        if (($("#nombre").val().length == 0 || $("#nombre").val() == $("#nombre").attr('placeholder')) ||
            !this.validateReg($('#nombre').val(), this.NOMBRE_PATTERN)) {
            //$("span#emptyNombre").show();
            $("#nombre_tip").css('visibility', ctx.firstLoad ? 'hidden' : 'visible');
            stat = false;
        }
        if (($("#apellido").val().length == 0 || $("#apellido").val() == $("#apellido").attr('placeholder')) ||
            !this.validateReg($('#apellido').val(), this.NOMBRE_PATTERN)) {
            //$("span#emptyNombre").show();
            $("#apellido_tip").css('visibility', ctx.firstLoad ? 'hidden' : 'visible');
            stat = false;
        }
        if (($("#comentario").val().length == 0 || $("#comentario").val() == $("#comentario").attr('placeholder')) ||
            !this.validateReg($('#comentario').val(), this.COMENTARIO_PATTERN)) {
            //$("span#emptyComentario").show();
            $("#comentario_tip").css('visibility', ctx.firstLoad ? 'hidden' : 'visible');
            stat = false;
        }
        /*if(stat && 
        	($("#inputEmail").val().length == 0 || $("#inputEmail").val() == $("#inputEmail").attr('placeholder')) ) {
        	$("span#emptyCorreo").show();
        	stat = false;
        }*/
        /* tel obligatorio if($("#contactoby_phone").is(':checked')) { */
        /*if( $("#inputTelefono").val().length != 14 || $("#inputTelefono").val() == $("#inputTelefono").attr('placeholder') ){
        	//$("span#emptyTelefono").show();
        	$("#inputTelefono_tip").css('visibility', ctx.firstLoad? 'hidden' : 'visible');
        	stat = false;
        }*/
        /* tel obligatorio fin } */
        if ( /* $("#contactoby_email").is(':checked') && */ !this.validarEmail($("#inputEmail").val())) {
            //$("span#emptyCorreoInvalido").show();
            $("#inputEmail_tip").css('visibility', ctx.firstLoad ? 'hidden' : 'visible');
            stat = false;
        }

        if ($("#kaptcha_user").val().length >= 3 || $("#kaptcha_user").val() == $("#kaptcha_user").attr('placeholder') ||
            !isFinite($('#kaptcha_user').val())) {
            $("#kaptcha_user_tip").css('visibility', ctx.firstLoad ? 'hidden' : 'visible');
            stat = false;
        }

        // valida seleccion de alguna forma de contacto
        /* tel y mail obligatorio if( !$("#contactoby_phone").is(':checked') && !$("#contactoby_email").is(':checked') ) {
        	$("#inputComoQuieres_tip").css('visibility', ctx.firstLoad? 'hidden' : 'visible');
        	stat = false;
        }*/
        return stat;
    },
    validarEmail: function(email) {
        if (/(\w+)(\.?)(\w*)(\@{1})(\w+)(\.?)(\w*)(\.{1})(\w{2,3})/.test(email)) {
            return true;
        } else {
            return false;
        }
    },
    enableFormContacto: function(enable) {
        if (!enable) {
            for (key in this.contactoChatElements) {
                $(this.contactoChatElements[key]).attr('disabled', !enable);
            }
            if ($(".widget_contacto .layout .column2A .styled-select").length > 0) {
                $(".widget_contacto .layout .column2A .styled-select .row").addClass(".widget_contacto_combofake_disabled");
                $(".widget_contacto .layout .column2A .styled-select select").hide();
            }
            $('#tema').parent().addClass('disabled');
            $('#tema').parent().parent().addClass('disabled');
            $('#productoDeInteres').parent().addClass('disabled');
            $('#productoDeInteres').parent().parent().addClass('disabled');
        } else {
            for (key in this.contactoChatElements) {
                $(this.contactoChatElements[key]).removeAttr('disabled');
            }
            if ($(".widget_contacto .layout .column2A .styled-select").length > 0) {
                $(".widget_contacto .layout .column2A .styled-select .row").removeClass(".widget_contacto_combofake_disabled");
                $(".widget_contacto .layout .column2A .styled-select select").show();
            }
            $('#tema').parent().removeClass('disabled');
            $('#tema').parent().parent().removeClass('disabled');
            $('#productoDeInteres').parent().removeClass('disabled');
            $('#productoDeInteres').parent().parent().removeClass('disabled');
        }
    },
    enableExtrasByCheckbox: function(elId, extrasIds) {
        if ($(elId).is(':checked') /* && $(elId).is('[disabled]')*/ ) {
            for (key in extrasIds) {
                $(extrasIds[key]).removeAttr('disabled');
                $(extrasIds[key]).blur();
            }
        } else {
            for (key in extrasIds) {
                $(extrasIds[key]).val(''); // elimina contenido previo cuando se desactiva
                $(extrasIds[key]).attr('disabled', true);
                $(extrasIds[key]).blur();
            }
        }
    },
    doChatValidations: function(ctx) {
        if (ctx.checkChatCamposEmpty(ctx)) {
            $('#startchat').removeAttr('disabled');
        } else {
            $('#startchat').attr('disabled', 'disabled');
        }
    },
    initialize: function() {
        var ctx = this;
        //$("#widget_contacto_chat_disable").hide();
        if (this.chatEmpresa == 1 || this.chatEmpresa == 2) {
            if (this.sessionJSON["thereSession"] == 'true') { // existe session banorte e ixe

                if (this.chatEmpresa == 2) {
                    $("#isPreferente").val("Si");
                } else {
                    $("#isPreferente").val("No");
                }
                $("#camposChat").show();
                $("#contenedorEsClienteActual").hide();
            } else { // No hay session
                ctx.disableValidaHorario = true;
                $("#isPreferente").val("No");
                //ESCONDE CAMPOS DE CHAT SI NO ESTA LOGUEADO
                //$("#camposChat").hide();
                $("#contenedorEsClienteActual").show();
            }
            if (this.chatEmpresa == 1) {
                dev = 'banorte';
            } else {
                dev = 'ixe';
            }
        } else {
            $("#isPreferente").val("No");
            $("#camposChat").show();
            if (this.chatEmpresa == 3) { // xima
                dev = 'ixe-xima';
            } else if (this.chatEmpresa == 4) { // gfb	
                dev = 'gfb';
            } else if (this.chatEmpresa == 5) { // empresas
                dev = 'empresas';
            }
            $("#contenedorEsClienteActual").show();
        }

        $("span.alert").hide();
        // TODO: old load captcha
        var contactoDIV = '.widget_contacto';
        $('.widget_contacto_chat_form').attr('target', 'iframechat_' + dev);
        var row2width = $('.header_top .header_menu li.contact_trigger').width();
        var row1width = $('.header_top .header_menu li.search_trigger').width();
        var widthFIX = 972 - (row1width + row2width);

        $(contactoDIV + ' .layout').css('background-position-x', widthFIX);
        // inician validaciones para chat
        if (ctx.chatEmpresa == 1 || ctx.chatEmpresa == 2) { // para banorte valida los campos de nombre y mail
            $('#startchat').attr('disabled', 'disabled');
            $('#inputNameChat').css('margin', '0');
            $('#inputLastName').css('margin', '0');
            $('#inputEmailChat').css('margin', '0');
            $('#inputNameChat').keyup(function(e) {
                $(this).val(($(this).val() + '').toUpperCase());
                ctx.doChatValidations(ctx);
            });
            $('#inputEmailChat').keyup(function(e) {
                ctx.doChatValidations(ctx);
            });
            $('#inputNameChat').change(function(e) {
                $(this).val(($(this).val() + '').toUpperCase());
                ctx.doChatValidations(ctx);
            });
            $('#inputLastName').change(function(e) {
                $(this).val(($(this).val() + '').toUpperCase());
                ctx.doChatValidations(ctx);
            });
            $('#inputEmailChat').change(function(e) {
                ctx.doChatValidations(ctx);
            });
            $('#inputNameChat').blur(function(e) {
                ctx.doChatValidations(ctx);
            });
            $('#inputLastName').blur(function(e) {
                ctx.doChatValidations(ctx);
            });
            $('#inputEmailChat').blur(function(e) {
                ctx.doChatValidations(ctx);
            });
        }
        var closeButton = contactoDIV + ' .close';
        //console.log('add close event shat: ' + closeButton);
        $(closeButton).click(function() {
            // console.log('close: '+ctx.scrollTopPos);
            ctx.clearChat();
            ctx.firstLoad = true;
            ctx.checkCamposEmpty(ctx);
            ctx.resetForm();
            $(window).scrollTop(ctx.scrollTopPos);
            ctx.scrollTopPos = 0;
            ctx.open = false;
            $(this).hide().removeClass('open').removeAttr('style');

        });
        // agrega lÃÂ³gica adicional de activaciÃÂ³n de checkboxes (solo funciona para 2)
        $('.widget_contacto .layout .column2A input[type="checkbox"]').click(function(e) {
            var eid = '#' + e.currentTarget.id;
            var checked = $(this).is(':checked');
            var none = true;
            for (key in ctx.checkBoxRelated) {
                if (checked && key != eid) {
                    $(key).removeAttr('checked');
                } else {
                    $(key).attr('checked', 'checked');
                }
                none &= !$(key).is(':checked');
                ctx.enableExtrasByCheckbox(key, ctx.checkBoxRelated[key]);
            }
            if (none) {
                for (key in ctx.checkBoxRelated) {
                    if (key != eid) {
                        $(key).click();
                    }
                }
            }
            // correcciÃÂ³n de mensaje de error mostrado al deseleccionar checkbox
            if (!$("#contactoby_email").is(':checked')) {
                $("#inputEmail_tip").css('visibility', 'hidden');
            }
            /*if( !$("#contactoby_phone").is(':checked') ) { 
            	$("#inputTelefono_tip").css('visibility','hidden');
            }*/
        });

        $("#checkBoxSoyClienteActual").click(function() {
            if ($("#esClienteActual").val() == "Si") {
                $("#checkBoxSoyClienteActual").addClass("notChecked");
                $("#checkBoxSoyClienteActual").removeClass("checked");
                $("#checkBoxSoyClienteActual").css("background-position", "-20px 0px");
                $("#esClienteActual").val("No");
            } else {
                $("#checkBoxSoyClienteActual").removeClass("notChecked");
                $("#checkBoxSoyClienteActual").addClass("checked");
                $("#checkBoxSoyClienteActual").css("background-position", "0px 0px");
                $("#esClienteActual").val("Si");
            }
        });

        $("span#emptyInicial").show();
        this.placeHolderFix();

        if (this.statusFormContacto == 1) {
            this.formEnabled = true;
        }
        if (this.statusFormContacto == 2) {
            this.formEnabled = false;
            $('#icon_bigleftrow').hide();
            $('#parrafoContactoFormulario').hide();
        }

        // muestra el span de mensaje (para no dejar el espacio vacÃÆÃÂ­o y el botÃÆÃÂ³n no se mueva)
        this.enableFormContacto(this.formEnabled);
        /* comentado por mail y tel obligatorios if( this.formEnabled ) {
        	for( key in this.checkBoxRelated ) {
        		this.enableExtrasByCheckbox(key, this.checkBoxRelated[key]);
        	}
        }*/

        /*$('#inputTelefono').focus(function(e) {
        	ctx.setValWCaret(ctx, $(this), false);
        });*/

        /*$('#inputTelefono').blur(function(e) {
        	$(this).val(ctx.getPhone10Digits(ctx, $(this).val(), true));
        });*/

        /*$('#inputTelefono').keyup(function(e) {
        	ctx.setValWCaret(ctx, $(this), false);
        });*/

        $('#comentario').keyup(function(e) {
            var t = $(this).val();
            var c = 0;
            //var av = t.length;
            if (t.length >= ctx.MAX_COMMENT) {
                t = t.substr(0, ctx.MAX_COMMENT);
                $(this).val(t);
                c = ctx.MAX_COMMENT;
            } else {
                c = t.length; //ctx.MAX_COMMENT - t.length;
            }
            //console.log(c);
            $('.widget_contacto .layout .char_counter:first').html(c + '/' + ctx.MAX_COMMENT + ' Caracteres' /* + (av>1?'es':'')*/ );

        });
        $('.widget_contacto .layout .char_counter:first').html('0/' + ctx.MAX_COMMENT + ' Caracteres');
        $('#comentario').attr('maxlength', ctx.MAX_COMMENT);
        $('#nombre').change(function(e) {
            $(this).val(($(this).val() + '').toUpperCase());
        });
        $('#apellido').change(function(e) {
            $(this).val(($(this).val() + '').toUpperCase());
        });
        $('#comentario').change(function(e) {
            $(this).val(($(this).val() + '').toUpperCase());
        });
        $('input, textarea, select').change(function(e) {
            ctx.checkCamposEmpty(ctx);
        });
        $("#btnEnviar").on("click", function() {
            //$("#inputTelefono").blur();
            ctx.firstLoad = false;
            if (ctx.checkCamposEmpty(ctx)) {
                //var telefono = $("#inputTelefono").val();
                var email = $("#inputEmail").val();

                var textMail = '<div  style="width:450px;height:250px;margin:5px 0px 5px 5px;border: 2px solid gray;">' +
                    //'<strong>Fecha de Registro:</strong>' +
                    '<br><strong>Tema: </strong>' +
                    $("#tema").val() +
                    '<br><strong>Producto de Interes: </strong>' +
                    $("#productoDeInteres").val() +
                    '<br><strong>Nombre: </strong>' +
                    $("#nombre").val() +
                    '<br><strong>Apaterno: </strong>' +
                    $("#apellido").val() +
                    '<br><strong>Comentario: </strong>' +
                    $("#comentario").val() +
                    /*'<br><strong>Telefono: </strong>' +
                    telefono +*/
                    '<br><strong>Correo electronico: </strong>' +
                    email; // + 
                /*'<br><strong>Es cliente actual: </strong>' +
				$('#esClienteActual').val() + 
				'<br><strong>Es cliente Preferente: </strong>' +
				$('#isPreferente').val();
		        */

                if (ctx.chatEmpresa == 3) { // xima
                    $.ajax({
                        type: 'GET',
                        url: 'https://www.banorte.com/portal/portlets/mail/genericMail/sendMail.jsp?email=casadebolsa@banorte.com&to=contactopatrimonial@banorte.com&subject=Contacto Casa de Bolsa&text=' + textMail,
                        dataType: "json",
                        async: false,
                        success: function(data) {
                            ctx.resetForm();
                            $("span#success").show();
                            ctx.reloadCapcha(ctx);
                        },
                        error: function() {
                            ctx.resetForm();
                            $("span#success").show();
                            ctx.reloadCapcha(ctx);
                        }
                    });
                } else {

                    // telefono = tel obligatorio $("#contactoby_phone").is(':checked') ? telefono : '';
                    // email = // mail obligatorio$('#contactoby_email').is(":checked") ? email : '';
                    var parametro = {
                        operacion: "envioCorreo",
                        tema: $("#tema").val(),
                        productoDeInteres: $("#productoDeInteres").val(),
                        nombre: $("#nombre").val(),
                        apellido: $("#apellido").val(),
                        comentario: $("#comentario").val(),
                        kaptchaId: ctx.kaptchaId,
                        defaultReal: $('#kaptcha_user').val(),
                        /*telefono: telefono,*/
                        email: email,
                        isClient: $('#esClienteActual').val(),
                        isPreferent: $('#isPreferente').val()
                    };


                    $.ajax({
                        type: 'POST',
                        url: ctx.urlServicio, //Aqui esta la variable que contiene la url al serveResource
                        dataType: "json",
                        async: false,
                        contentType: 'application/x-www-form-urlencoded; charset=ISO-8859-1',
                        data: parametro,
                        success: function(data) {
                            if (data.success == 'true') { // reset form
                                ctx.resetForm();
                                $("span#success").show();
                            } else {
                                $("span#error").show();
                                if (data.message == 'KapchaError') {
                                    $('#kaptcha_user').val('');
                                }
                                // recarga kaptcha
                            }
                            ctx.reloadCapcha(ctx);
                        }
                    });
                }
            }
        });
    },
    fit: function(tab) {
        var ctx = this;
        if (!ctx.open) {
            ctx.scrollTopPos = $(window).scrollTop();
            $(window).scrollTop(0);
            //console.log('open: ' + ctx.scrollTopPos);
            ctx.open = true;
        }
        ctx.initCapcha(ctx);
        ctx.clearChat();
        if (tab == 1) {
            $('#email').attr('checked', 'checked');
            $('#email').click();
        } else if (tab == 2) {
            $('#phone').attr('checked', 'checked');
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
        if (oField.setSelectionRange) {
            oField.focus();
            oField.setSelectionRange(pos, pos);
        } else if (oField.createTextRange) {
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
        for (key in match) {
            matchedNum += match[key];
        }
        matchedNum = matchedNum.length > 10 ? matchedNum.substring(0, 10) : matchedNum;
        var retVal = '';
        if (masked) {
            var strMask = '(##) ####-####';
            var matchedNumFmt = '';
            var j = 0,
                k = matchedNum.length;
            for (var i = 0; i < strMask.length && k > 0; ++i) {
                if (strMask.charAt(i) == '#') {
                    if (j < k) {
                        matchedNumFmt += matchedNum.charAt(j++);
                    } else {
                        break;
                    }
                } else {
                    matchedNumFmt += strMask.charAt(i);
                }
            }
            retVal = matchedNumFmt;
        } else {
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


// this is used for dynamic display of tabs
function checkTabVars() {

    //contactChatTab contactMailTab contactCallTab contactCobrowseTab contactVydioTab

    var cobrowseTab = document.getElementById("cobrowse");

    if (vydio == 'false') {
        document.getElementById("contactVydioTab").remove();
        resizeTabs();
    }

    //if(cobrowseTab.value == "false"){
    //	document.getElementById("contactVydioTab").remove();
    //	resizeTabs();
    //}

}

// this is used to resize tabs
function resizeTabs() {
    var elements = document.getElementById("contactoTabs")
    for (var i = 0; i < elements.childNodes.length; i++) {
        elements.childNodes[i].style.width = 100 / elements.childNodes.length - 4 + "%";
    }

    if (elements.childNodes.length == 4) {
        $("body").append("<style>.newImgChatForm{background-size: 282% !important;}.newSmallTextInTab{left: 2%!important; width: 100%!important;}</style>");
        var elements = document.querySelectorAll('.imgChatForm');
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("newImgChatForm");
        }

        var elements2 = document.querySelectorAll('.smallTextInTab');
        for (var i = 0; i < elements2.length; i++) {
            elements2[i].classList.add("newSmallTextInTab");
        }
    }
}


// initiate cobrowse 
function initCobrowse() {
    console.log('info data ---->', wgwic);
    vgwic.requestCobrowse();
}

// initiate vydio 
function initVidyo() {
    //vgwic.makeCall(true);
    vgwic.requestCall(true, "Videollamada Web");
}

// this function is used to controll the tabs 
function clickTabFunction(tab, element) {
    console.log(element);
    var contactoTabs = document.getElementById("contactoTabs");

    contactoTabs.childNodes[0].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_4.png"
    contactoTabs.childNodes[0].setAttribute("class", "contactChat");

    contactoTabs.childNodes[1].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_5.png"
    contactoTabs.childNodes[1].setAttribute("class", "contactMail");

    contactoTabs.childNodes[2].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_6.png"
    contactoTabs.childNodes[2].setAttribute("class", "contactCallTab");

    //contactoTabs.childNodes[3].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_6.png"
    contactoTabs.childNodes[4].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_6.png"
    contactoTabs.childNodes[4].setAttribute("class", "contactVydio");

    // this is used to switch content from each tab, each tabs has its own content
    switch (tab) {
        case 1:
            contactoTabs.childNodes[0].setAttribute("class", "contactChat activeTab");
            contactoTabs.childNodes[0].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_1.png"

            var tabContent = document.getElementById("contactoContent");
            tabContent.innerHTML = '<style>' +
                '.banorte-button{' +
                'padding: 0 12px;' +
                'box-sizing: border-box;' +
                '-moz-box-sizing: border-box;' +
                '-webkit-box-sizing: border-box;' +
                'text-align: center;' +
                'margin: 10px 0 20px 0;' +
                'width: auto;' +
                'height: 38px;' +
                'line-height: 38px;' +
                'font-family: \'Gotham Medium\', Helvetica, Arial, sans-serif;' +
                'font-size: 15px;' +
                'color: white;' +
                'font-weight: 400;' +
                'border: 0;' +
                'display: inline-block;' +
                'background-color: #eb0029;' +
                '-webkit-transition: all 0.5s;' +
                '-moz-transition: all 0.5s;' +
                '-o-transition: all 0.5s;' +
                'transition: all 0.5s;' +
                'text-transform: uppercase;' +
                '-webkit-border-radius: 2px;' +
                '-moz-border-radius: 2px;' +
                '-o-border-radius: 2px;' +
                'border-radius: 2px;' +
                'cursor: pointer;' +
                '}' +
                '' +
                '</style>' +
                '' +
                '<div style="padding: 27px;">' +
                '<p>En Banorte servirte es nuestra prioridad, por eso ponemos a tu disposicion los diferentes medios que puedes utilizar para comunicarte con nosotros.</p>' +
                '<button id="open-chat-button" onclick="openWebChat()" class="banorte-button" style="margin-left: 33%; margin-top: 28%;">Iniciar Chat</button>' +
                '</div>';

            break;

        case 2:
            contactoTabs.childNodes[1].setAttribute("class", "contactMail activeTab");
            contactoTabs.childNodes[1].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_2.png"
            console.log(contactoTabs.childNodes[1].childNodes[1]);
            var tabContent = document.getElementById("contactoContent");
            tabContent.innerHTML = '<style>' +
                'select {' +
                '-webkit-appearance: none;' +
                '-moz-appearance: none;' +
                'text-indent: 1px;' +
                'text-overflow: \'\';' +
                '}' +
                '.input-select{' +
                'width: 100%;' +
                'height: 35px;' +
                'overflow: hidden;' +
                'background-color: white;' +
                'background-image: url(/wps/contenthandler/banorte/!ut/p/digest!smeSRfoJmS8XuuvQ30uYnw/dav/fs-type1/themes/BanorteResponsivoTheme/css/images/input_select.png);' +
                'background-size: 35px 70px;' +
                'background-repeat: no-repeat;' +
                'background-position: top right;' +
                'position: relative;' +
                '/* margin: 0 0 30px 0; */' +
                '}' +
                '' +
                '.input-text{' +
                'font-family: \'Roboto Regular\', Helvetica, Arial, sans-serif;' +
                'font-size: 16px;' +
                'color: #4e4044;' +
                'line-height: 35px;' +
                'height: 35px;' +
                'padding: 0 6px;' +
                'box-sizing: border-box;' +
                '-moz-box-sizing: border-box;' +
                '-webkit-box-sizing: border-box;' +
                'background-color: white;' +
                'width: 100%;' +
                '}' +
                '' +
                '.parent div {' +
                'float: left;' +
                'clear: none;' +
                '}' +
                '.error_tip{' +
                'font-family: \'Gotham Book\', Helvetica, Arial, sans-serif;' +
                'font-size: 12px;' +
                'font-weight: bold;' +
                'color: #eb0029;' +
                'text-align: center;' +
                '}' +
                '' +
                '.textarea{' +
                'line-height: 20px;' +
                'height: 90px;' +
                'padding: 10px;' +
                'width: 100%;' +
                'resize: none;' +
                'font-family: \'Gotham Book\', Helvetica, Arial, sans-serif;' +
                'font-size: 16px;' +
                'color: #4e4044;' +
                'border: none;' +
                '}' +
                '.char-counter{' +
                'position: absolute;' +
                'right: 0;' +
                'bottom: 25px;' +
                'height: 0;' +
                'text-align: right;' +
                'font-size: 12px;' +
                '}' +
                '.selectContacto{' +
                'width: 100%;' +
                '}' +
                '' +
                '.inputText{' +
                'width: 100%;' +
                '}' +
                '' +
                '</style>' +
                '' +
                '<div class="parent">' +
                '<div style="width: 45%; margin-left: 10PX;">' +
                '<div class="selectContacto">' +
                '<select id="tema"  class="input-select">' +
                '<option value="Tema">Tema</option>' +
                '<option value="Solicitud de informaciï¿½n de producto">Solicitud de informaciï¿½n de producto</option>' +
                '<option value="Sugerencia">Sugerencia</option>' +
                '<option value="Felicitaciï¿½n">Felicitaciï¿½n</option>' +
                '<option value="Queja">Queja</option>' +
                '<option value="Aclaraciï¿½n">Aclaraciï¿½n</option>' +
                '<option value="Otro">Otro</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '' +
                '<div style="width: 45%; margin-left: 10PX;">' +
                '<div class="selectContacto">' +
                '<select id="productoDeInteres"  class="input-select">' +
                '<option value="Ninguno">Producto</option>' +
                '<option value="Seguros">Seguros</option>' +
                '<option value="tarjeta_de_credito">Tarjeta de crï¿½dito</option>' +
                '<option value="tarjeta_de_debito">Tarjeta de debito</option>' +
                '<option value="Banca_en_linea">Banca en lï¿½nea</option>' +
                '<option value="otro">Otro</option>' +
                '</select>' +
                '</div>' +
                '</div>' +
                '' +
                '</div>' +
                '' +
                '<div class="parent">' +
                '<div  style="width: 45%; margin-left: 10PX; margin-top: 20px;">' +
                '<div class="inputText">' +
                '<input id="nombre" type="text" placeholder="Nombre" class="placeholder input-text">' +
                '' +
                '</div>' +
                '</div>' +
                '' +
                '<div  style="width: 45%; margin-left: 10PX; margin-top: 20px;">' +
                '<div class="inputText">' +
                '<input id="apellido" type="text" placeholder="Apellido" class="placeholder input-text">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '' +
                '<div  class="parent">' +
                '<div class="textarea" style="width: 90%; margin-left: 10%;">' +
                '<div style="position: relative;">' +
                '<textarea id="comentario" placeholder="Escribe aquï¿½ tu comentario" maxlength="600" class="placeholder textarea"></textarea>' +
                '<div class="char_counter">0/600 Caracteres</div>' +
                '</div>' +
                '</div>' +
                '</div>';

            break;

        case 3:
            contactoTabs.childNodes[2].setAttribute("class", "contactCall activeTab");
            contactoTabs.childNodes[2].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_3.png"
            var tabContent = document.getElementById("contactoContent");
            tabContent.innerHTML = '<div style="padding-top: 5px; padding-left: 20px; padding-right: 20px;">' +
                '<p style="margin-bottom: 15px; font-size: 13px; text-align: justify;">Deseas contactar a Banorte por medio de nuestro Centro de Contacto, ponemos a tu disposiciï¿½n los siguientes nï¿½meros <b>Banortel</b>, recordandote nuestros horarios de atenciï¿½n</p>' +
                '<div>' +
                '<ul style="font-size: 14px; margin-left: 19%;">' +
                '<li>' +
                '<b style="color:#7d7d7d;">Lunes - Viernes</b> 8:00 am - 10:00 pm' +
                '</li>' +
                '<li>' +
                '<b style="color:#7d7d7d;">Sabados - Domingos</b> 8:00 am - 8:00 pm' +
                '</li>' +
                '<br>' +
                '<li>' +
                '<b style="color:#7d7d7d;">Ciudad de Mï¿½xico: <span style="color:#eb0029">(55) 5140-5600</span></b>' +
                '</li>' +
                '<li>' +
                '<b style="color:#7d7d7d;">Monterrey: <span style="color:#eb0029">(81) 8156-9600</span></b>' +
                '</li>' +
                '<li>' +
                '<b style="color:#7d7d7d;">Guadalajara: <span style="color:#eb0029">(33) 3669-9000</span></b>' +
                '</li>' +
                '<li>' +
                '<b style="color:#7d7d7d;">Resto del paï¿½s: <span style="color:#eb0029">(01)-800 BANORTE (01-800-226-6783)</span></b>' +
                '</li>' +
                '</ul>' +
                '</div>' +
                '</div>';

            break;

        case 4:
            contactoTabs.childNodes[3].setAttribute("class", "contactCoBrowse activeTab");
            contactoTabs.childNodes[3].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_3.png"
            var tabContent = document.getElementById("contactoContent");
            tabContent.innerHTML = '<style>' +
                '.banorte-button{' +
                'padding: 0 12px;' +
                'box-sizing: border-box;' +
                '-moz-box-sizing: border-box;' +
                '-webkit-box-sizing: border-box;' +
                'text-align: center;' +
                'margin: 10px 0 20px 0;' +
                'width: auto;' +
                'height: 38px;' +
                'line-height: 38px;' +
                'font-family: \'Gotham Medium\', Helvetica, Arial, sans-serif;' +
                'font-size: 15px;' +
                'color: white;' +
                'font-weight: 400;' +
                'border: 0;' +
                'display: inline-block;' +
                'background-color: #eb0029;' +
                '-webkit-transition: all 0.5s;' +
                '-moz-transition: all 0.5s;' +
                '-o-transition: all 0.5s;' +
                'transition: all 0.5s;' +
                'text-transform: uppercase;' +
                '-webkit-border-radius: 2px;' +
                '-moz-border-radius: 2px;' +
                '-o-border-radius: 2px;' +
                'border-radius: 2px;' +
                'cursor: pointer;' +
                '}' +
                '' +
                '</style>' +
                '' +
                '<div style="padding: 27px;">' +
                '<p>Deseas contactar a Banorte por medio de nuestra asistencia remota, ponemos a tu disposicion esta opcion:</p>' +
                '<button id="cobrowse-button" onclick="cobrowseAsistant()" class="banorte-button" style="margin-left: 28%;margin-top: 34%;">Iniciar Asistencia</button>' +
                '</div>';

            break;

        case 5:
            contactoTabs.childNodes[4].setAttribute("class", "contactVydio activeTab");
            contactoTabs.childNodes[4].childNodes[0].src = "https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_3.png"
            var tabContent = document.getElementById("contactoContent");
            tabContent.innerHTML = '<style>' +
                '.banorte-button{' +
                'padding: 0 12px;' +
                'box-sizing: border-box;' +
                '-moz-box-sizing: border-box;' +
                '-webkit-box-sizing: border-box;' +
                'text-align: center;' +
                'margin: 10px 0 20px 0;' +
                'width: auto;' +
                'height: 38px;' +
                'line-height: 38px;' +
                'font-family: \'Gotham Medium\', Helvetica, Arial, sans-serif;' +
                'font-size: 15px;' +
                'color: white;' +
                'font-weight: 400;' +
                'border: 0;' +
                'display: inline-block;' +
                'background-color: #eb0029;' +
                '-webkit-transition: all 0.5s;' +
                '-moz-transition: all 0.5s;' +
                '-o-transition: all 0.5s;' +
                'transition: all 0.5s;' +
                'text-transform: uppercase;' +
                '-webkit-border-radius: 2px;' +
                '-moz-border-radius: 2px;' +
                '-o-border-radius: 2px;' +
                'border-radius: 2px;' +
                'cursor: pointer;' +
                '}' +
                '' +
                '</style>' +
                '' +
                '<div style="padding: 27px;">' +
                '<p>Deseas contactar a Banorte por medio de nuestra Videollamada, ponemos a tu disposicion esta opcion:</p>' +
                '<button id="vydio-button" class="banorte-button" style="margin-left: 28%;margin-top: 34%;">Iniciar Asistencia</button>' +
                '</div>';

            break;
        default:
            console.log('you shouldnt be here');
    }
}

$(document).ready(function() {
    $('body').append(
        '<div class="widget_contacto_popup">' +
        '<div class="contactoWindowParent">' +
        '<div class="contactoWindow">' +
        '<div class="contact_trigger_close"></div>' +
        '<div id="contactoTabs" class="contactoTabs">' +
        '<div class="contactChat activeTab" id="contactChatTab" onclick="clickTabFunction(1, this)" title="Contacto Chat" alt="Contacto Chat">' +
        '<img src="https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_1.png" alt="" style="height: 85px;">' +
        '<span class="smallTextInTab" style="width: 94%;">Chat Banorte</span>' +
        '</div>' +
        '<div class="contactMail" id="contactMailTab" onclick="clickTabFunction(2, this)" title="Contacto Chat" alt="Contacto Chat">' +
        '<img src="https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_4.png" alt="" style="height: 85px;">' +
        '<span class="smallTextInTab" style="width: 90%;">Correo electronico</span>' +
        '</div>' +
        '<div class="contactCall" id="contactCallTab" onclick="clickTabFunction(3, this)" title="Contacto Chat" alt="Contacto Chat">' +
        '<img src="https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_5.png" alt="" style="height: 85px;">' +
        '<span class="smallTextInTab" style="width: 90%;">Llamanos</span>' +
        '</div>' +
        '<!-- <div class="contactCoBrowse" id="contactCobrowseTab" onclick="clickTabFunction(4, this)" title="Contacto Chat" alt="Contacto Chat">' +
        '<img src="https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_6.png" alt="" style="height: 85px;">' +
        '<span class="smallTextInTab">Asistencia remota</span>' +
        '</div> -->' +
        '<div class="contactVydio" id="contactVydioTab" onclick="clickTabFunction(5, this)" title="Contacto Chat" alt="Contacto Chat">' +
        '<img src="https://www.banorte.com/cms/banorte/contacto_popupIcons/contacto_popUpIcons_6.png" alt="" style="height: 85px;">' +
        '<span class="smallTextInTab" style="width: 90%;">Videollamada</span>' +
        '</div>' +
        '</div>' +
        '<div id="contactoContent" class="contactoContent">' +
        '<style>' +
        '.banorte-button {' +
        'padding: 0 12px;' +
        'box-sizing: border-box;' +
        '-moz-box-sizing: border-box;' +
        '-webkit-box-sizing: border-box;' +
        'text-align: center;' +
        'margin: 10px 0 20px 0;' +
        'width: auto;' +
        'height: 38px;' +
        'line-height: 38px;' +
        'font-family: \Gotham Medium\, Helvetica, Arial, sans-serif;' +
        'font-size: 15px;' +
        'color: white;' +
        'font-weight: 400;' +
        'border: 0;' +
        'display: inline-block;' +
        'background-color: #eb0029;' +
        '-webkit-transition: all 0.5s;' +
        '-moz-transition: all 0.5s;' +
        '-o-transition: all 0.5s;' +
        'transition: all 0.5s;' +
        'text-transform: uppercase;' +
        '-webkit-border-radius: 2px;' +
        '-moz-border-radius: 2px;' +
        '-o-border-radius: 2px;' +
        'border-radius: 2px;' +
        'cursor: pointer;' +
        '}' +
        '</style>' +
        '' +
        '<div style="padding: 27px;">' +
        '<p>En Banorte servirte es nuestra prioridad, por eso ponemos a tu disposicion los diferentes medios' +
        'que puedes utilizar para comunicarte con nosotros.</p>' +
        '<button id="open-chat-button" onclick="openWebChat()" class="banorte-button"' +
        'style="margin-left: 33%; margin-top: 28%;">Iniciar Chat</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div>' +
        '</div>');

    //var DomParserLet = new DOMParser();
    var pulseButton = '<button id="pulseChatButton" class="pulse-button"><div>Â¿Necesitas ayuda?</div></button>';
    //var doc = DomParserLet.parseFromString(pulseButton, 'text/html');
    //var firstDiv = doc.body.firstChild;
    $('body').append(pulseButton);

    /*$("#logoutlink").on( "click", function() {
    	window._genesys.widgets.bus.command('WebChatService.endChat');
    });*/

    function startTimerChatGenesys() {
        setTimeout(function() {
            if ($(".cx-widget").is(":visible")) {
                $("#pulseChatButton").hide();
            }
            startTimerChatGenesys();
        }, 500);
    }
    startTimerChatGenesys();

    $("#start-chat").on("click", function() {
        openChat();
        //window._genesys.widgets.bus.command('WebChat.open');
        $(".widget_contacto .layout .close").trigger("click");
    });
    /*
    $("#pulseChatButton").click(function(){
    	if($("#pulseChatButton").is(":visible")){
    		window._genesys.widgets.bus.command('WebChat.open', {		
    			form: {
    				autoSubmit: false,
    				firstname: "Test",
    				lastname: "Test",
    				email: "test@test.com"
    			}		
    		}).done(function(e)
    		{
    			document.getElementsByClassName('cx-submit cx-btn cx-btn-primary')[0].click();
    		});
    		$("#pulseChatButton").hide();
    	} else{
    		$("#pulseChatButton").show();
    	}
    });*/
    $("#pulseChatButton").click(function() {
        if ($("#pulseChatButton").is(":visible")) {
            openChat();
            //			document.getElementsByClassName('cx-submit cx-btn cx-btn-primary')[0].click();
            //			window._genesys.widgets.bus.command('WebChat.open', {}).done(function(e)
            //			{
            //			});
            $("#pulseChatButton").hide();
        } else {
            $("#pulseChatButton").show();
        }
    });
});

function openWebChat() {
    $(".widget_contacto_popup").hide();
    openChat();
    window._genesys.widgets.bus.command('WebChat.open');
};

function openOldChat() {
    $('#startchat').attr('disabled', 'disabled');
    document.forms['chatLegacyForm'].submit();
    //var params="Comment=&Filter=1&ProductId=&Telephone=&TypeQuestion=&IsClient=Si&isPreferent="+escape($("#inputIsPreferent").val())+"&NumeroClienteAltamira=&Canal=Portal&Name="+escape($("#inputNameChat").val())+"&LastName="+escape($("#inputLastName").val())+"&Email="+$("#inputEmailChat").val();
    //window.open($("#urlChat").val()+"?"+params,"frmChat");
}

function testPrivEnv(url) {
    try {
        if (url.toLowerCase().indexOf("privado") > 0) {
            return true;
        }
    } catch (error) {
        return false;
    }
}
//funcion para cambiar el nombre de boton.

function changeTextButton() {
    $('#vydio-button').html('Videollamada')

}
//fin de funcion cambiar nombre de boton

//Se inicia variable listener.
//Se agrega cambio de texto pop warning
$(document).ready(function() {
    window.addEventListener("message", listenerVCP, false);
    $('#vydio-button').click(function() {
        $('.accept-buttonVydio').click(function() {
            //changeContentPopPreVideocall();
        })
    })
})

//funcion para cambiar el contenido del pop up cuando se inicia videollamada
function changeContentPopPreVideocall() {
    var i = "<p style='font-size:17px;'>Est&aacute;s por iniciar una videollamada al Centro de Contacto. Al continuar est&aacute;s aceptando nuestro <a target='_blank' href='https://www.banorte.com/wps/portal/gfb?uri=nm:oid:banorte-te-informa.aviso-de-privacidad' style='text-decoration: underline; color: #4E4044;' ><b>Aviso de Privacidad</b></a>. <br>Aseg&uacute;rate de tener un equipo con conexi&oacute;n estable a internet y c&aacute;mara web. Activa los altavoces o si prefieres, prepara tus aud&iacute;fonos y micr&oacute;fono<br>Â¿Seguro que deseas continuar?</p>";
    $('.vg-videocall .videocall-alert .videocall-alert-body').html(i);

}



//FIX PARA MOSTRAR SIEMPRE EL WIDGET Y ESCONDER BOTON DE "INICIAR CHAT"
$(document).ready(function() {
    try {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.pulse-button{ display: block !important; }';
        document.getElementsByTagName('head')[0].appendChild(style);
        //FIX PARA MOSTRAR VIDEOLLAMADA
        if (window.location.href.indexOf("acceso24piloto.banorte.com") > 0) {
            $('head').append('<style>#chat_block{display: block!important;}#widget_contacto_chat_disable{display: none!important;}.assistanceButtons{display: block !important}</style>');
        }
        $(".newChat").hide();
    } catch (e) {
        console.log("ChatWidgetFix Error: " + e);
    }
});
//END FIX PARA MOSTRAR SIEMPRE EL WIDGET Y ESCONDER BOTON DE "INICIAR CHAT"

//FIX PARA CONTROLAR LOS EVENTOS DE VIDEOLLAMADA
function closeVideoLlamada() {
    try {
        console.log("Videollamada: Attempting to close videocall");
        if (vgwic) {
            vgwic.signOut();
            console.log("Videollamada: Videocall close message sent.");
        } else {
            console.log("Videollamada: Videocall not defined, no close needed.");
        }
    } catch (e) {
        console.log("Videollamada: Vgwic message: " + e);
    }
}
//Listener Progress Videocall.

window.listenerVCP = function() {
    console.log('Welcome to listener VCP. Option:', event.data);
    var data = {
        message: 'listener VCP',
        status: false
    }
    if (vgwic != undefined) {
        data.status = vgwic.videocall_in_progress;
    } else {
        data.status = false;
    }

    if (event.data === 'progressVC') {
        console.log('Status Videocall: ', data);
        window.parent.postMessage(data, '*');
    }
    if (event.data === 'progressVCE') {
        console.log('Status Videocall with Event: ', data);
        event.source.postMessage(data, '*');
    }

};

function functionListenerVCP() {
    console.log('Welcome to Function Listener: ');
    var data = {
        message: 'listener VCP',
        status: false
    }
    if (vgwic != undefined) {
        data.status = vgwic.videocall_in_progress;
    } else { data.status = false; }
    console.log('Status Videocall: ', data);

    return data;
}

function getDataVCP() {
    var response;
    response = window.parent.functionListenerVCP();
    console.log('functionListenerVCP() response: ', response);
}



$(document).ready(function() {
    $("#logoutlink").on("click", function() {
        closeVideoLlamada();
    });
    $('head').append('<script>window.onbeforeunload = function (event) {closeVideoLlamada();};</script>');
});
//END FIX PARA CONTROLAR LOS EVENTOS DE VIDEOLLAMADA

//FIX CHANGE CONTACTO ASSISTANCE STRING button
$(document).ready(function() {
    $(".contact_trigger").click(function() {
        $("#vydio-button").hide();
        $("#cobrowse-button").html("NAVEGACION ASISTIDA");
        //fix: Modal donÂ´t change buttton text and image on Internet Explorer.
        //solution: Change modal button text and size buttons with Jquery. Cobrowser
        //Other file that same this VGWebInteractionClient.js
        $("#acceptButtonModalCobrowse").html("Enlazar");
        $("#acceptButtonModalCobrowse").css("width", "70px");
        $("#laterButtonModalCobrowse").css("width", "70px");
        //fix: Button videollamada Internet Explorer
        var newsics = ["35836883", "56587885", "52492822", "44252699", "32766059", "49113374", "43981745", "40065783", "49806566", "42702911", "48737457", "32906762", "34732109", "41210355", "45079304", "29274742", "51818128", "31142150", "11900480", "20184039", "35575941"]
            //var sics = ["53961177", "35836883", "52299054", "52184310", "52114744", "52299047", "52299048", "51997580", "56587885", "52492822", "44252699", "32766059", "49113374", "43981745", "40065783", "49806566", "42702911", "48737457", "32906762", "34732109", "41210355", "45079304", "29274742", "51818128", "31142150", "11900480", "20184039", "35575941", "20184039", "56587885", "9789453", "47357761", "10993358", "8762078", "5089983", "8621917", "42702911", "6674413", "23929765", "51458902", "10315520", "34732109", "7403120", "41210355", "46903628", "6920674", "29274742", "27954303", "31142150"];
        /*
        if (newsics.indexOf(contactoChatWidget.sic) > -1) {
            $("#vydio-button").show();
        } else {
            $("#vydio-button").hide();
        }
        */

        //$("#vydio-button").show();

    });
});
//END FIX CHANGE CONTACTO ASSISTANCE STRING button

//MENSAJE POP UP LOGO CUANDO SE HACE VIDEOLLAMADA
$(document).ready(function() {
    $(".contact_trigger").click(function() {
        var modalVGWarning;

        $("#vydio-button, #cobrowse-button").click(function() {
            if (!modalVGWarning) {
                modalVGWarning = '<div><div class="lightboxVydioWarning" style="top: 0px; left: 0px; text-align: center; height: 100%; width: 100%; position: fixed; background-color: white;margin-top: 0vw; z-index: 1; opacity: 0.8;display:none;"></div></div><div  id="vydioWarningContainer" style="display: none; position: fixed;width: 100%;height: 100%;border: solid 1px red;z-index: 1;left: 0;top: 0;display: none;"><div id="vydioModalWarning" class="modalFather" style="margin-left: 50%;margin-top: 500px;top:0%"><div id="banorteHomeModalVydioWarning" class="modal-position" style="display: block; font-size: 15px !important;font-family: Helvetica, Arial, sans-serif !important;padding-top: 20px;background-color: white;height: 210px;width: 520px;position: relative;left: -250px;z-index: 9999999999;text-align: center;border-radius: 5px;box-shadow: -0.1vw 0 1.1vw 0.1vw #888;top: -374px;"><img class="closeHomeModalVydioWarning" class="close-button-image" style="position: absolute;height: 30px;left: 90%;top: 3%;cursor: pointer;" src="https://www.banorte.com/cms/prototipos_laboratorio/sucursales/assets/icons/close.svg"><div style="text-align: left; padding: 0 3vw 0 3vw;"><p style="margin: 1vw 0 0 0; color: #941348;"><b>Confirmaci&oacute;n de salida</b></p></div><div style="padding: 45px;text-align: left;padding-top: 20px;padding-bottom: 10px;/* padding-bottom: 20px; */"><p style="margin-bottom: 1em;">Est&aacute;s a punto de regresar al inicio y cerrar&aacute;s tu Videollamada.</p><p style="margin-top: 1em;margin-bottom: 1em;">&iquest;Est&aacute;s de acuerdo?</p><p style="margin-top: 1em;margin-bottom: 1em;"></p></div><div id="closeWindowVydioWarning" class="closeHomeModalVydioWarning" style="position: relative;width: 100px;background-color: #eb0029;color: white;border-radius: 5px;height: 27px;line-height: 27px;float: left;margin-left: 272px;padding: 3px;font-size: 14px;cursor: pointer;">CERRAR</div><div id="continuarVydioWarning" class="continueVydioWarning" style="position: relative;width: 100px;background-color: #eb0029;color: white;border-radius: 5px;height: 27px;line-height: 27px;float: left;margin-left: 13px;padding: 3px;font-size: 14px;cursor: pointer;">CONTINUAR</div></div></div></div>';
                $("body").append(modalVGWarning);
            }
            $(".primary, #acceptButtonModalCobrowse").click(function() {
                $("#home").click(function(e) {
                    if (vgwic.cobrowse_in_progress || vgwic.videocall_in_progress) {
                        e.preventDefault();
                        $(".lightboxVydioWarning").show();
                        $(".lightboxVydioWarning").css("z-index", "100000");
                        $("#vydioWarningContainer").show();
                        $("#vydioWarningContainer").css("z-index", "100000");
                        $("#vydioModalWarning").show();
                    }
                });
                $(".closeHomeModalVydioWarning").click(function() {
                    $(".lightboxVydioWarning").hide();
                    $(".lightboxVydioWarning").css("z-index", "0");
                    $("#vydioWarningContainer").hide();
                    $("#vydioWarningContainer").css("z-index", "0");
                    $("#vydioModalWarning").hide();
                });
                $("#continuarVydioWarning").click(function() {
                    window.location.href = "/wps/myportal/banorte/Home/privado";
                });
            });
        });
    });
});
//FIN MENSAJE POP UP LOGO CUANDO SE HACE VIDEOLLAMADA