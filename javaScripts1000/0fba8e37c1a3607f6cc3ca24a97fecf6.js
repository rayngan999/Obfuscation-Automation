if (!window._genesys.widgets.extensions) {
    window._genesys.widgets.extensions = {};
}

window._genesys.widgets.extensions['MinimizeExtension'] = function (jQuery, CXBus, Common) {
    var minimizePlugin = CXBus.registerPlugin('MinimizePlugin');

    controlMinimizado.jQuery = jQuery;
    controlMinimizado.plugin = minimizePlugin;
    controlMinimizado.registrarEventoMinimizado();
	controlMinimizado.registrarEventoMaximizado();
	controlMinimizado.registrarEventoMensaje();

    return true;
}

var controlMinimizado = {
    currentAgent: "",
    jQuery: undefined,
    plugin: undefined,
    //Metodos
    abrirChat: function () {
		controlMinimizado.currentAgent="";
		window.minimizado=false;
		openChat();
		
    },
    cerrarSesion: function () {
        controlMinimizado.plugin.command('WebChatService.sendMessage', {
            message: "cerrar sesion"
        })
        .done(function (e) {
            console.log('Message was sent');
            window.minimizado = true;
        })
        .fail(function (e) {
            console.log('Error while sending message');
        });
    },
    //Eventos a registrar
    registrarEventoMinimizado: function () {
        controlMinimizado.plugin.subscribe('WebChat.minimized', function (e) {
            if ((window.minimizado==undefined||window.minimizado == false) && controlMinimizado.currentAgent == "Asistente Virtual Banorte") {
                controlMinimizado.cerrarSesion();
            }
        });

    },
	 registrarEventoMaximizado: function () {
        controlMinimizado.plugin.subscribe('WebChat.unminimized', function (e) {
            if (window.minimizado!=undefined&&window.minimizado == true) {
				window._genesys.widgets.bus.command('WebChat.close');
                window._genesys.widgets.bus.command('WebChatService.endChat');
				setTimeout(controlMinimizado.abrirChat, 600);
				
            }
        });


    },
    registrarEventoMensaje: function () {
        controlMinimizado.plugin.subscribe('WebChatService.messageReceived', function (e) {
            if (e.data.restoring === true) {
                return;
            }
            var messages = e.data.messages;
            messages.forEach(function (message) {
                if (message.from != undefined && (message.from.type == "Agent" || message.from.type == "Bot")) {
                    controlMinimizado.currentAgent = message.from.name;
                    //break;
                }
            });

        });
    },
}