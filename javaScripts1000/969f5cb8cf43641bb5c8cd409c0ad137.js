ï»¿if (!window._genesys) window._genesys = {};
if (!window._gt) window._gt = [];

function validateMandatoryInput(input) {
	if (typeof input === 'undefined') {
		return true;
	}
	return input.val().trim() != '';
}

var widgetsLoaded = false;
var guid = createGuid();
var reInvitePending = false;

var pageWasReloaded = false;
if (sessionStorage.getItem('reloaded') != null) {
	pageWasReloaded = true;
} else {
	pageWasReloaded = false;
}
sessionStorage.setItem('reloaded', '1');

function openChat() {
	const chatOptions = {
		form: {
			autoSubmit: true,
			firstname: guid,
			lastname: guid,
			email: guid + "@dummy.com"
		}
	};
	
	if (widgetsLoaded === false) {
		loadWidgets();
		return;
	}
	
	window._genesys.widgets.bus.command('WebChat.open', chatOptions)
		.done(function () {
			console.log('WebChat opened successfully');
		}).fail(function () {
			console.log('WebChat not opened');
		});
}

function createGuid() {
	function _p8(s) {
		var p = (Math.random().toString(16) + '000000000').substr(2, 8);
		return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
	}
	return _p8() + _p8(true) + _p8(true) + _p8();
}

//JSi18n
const obj = { "es": { "sendmessage": { "SendMessageButton": "Enviar Mensaje", "OK": "OK", "Title": "Enviar Mensaje", "PlaceholderFirstName": "Requerido", "PlaceholderLastName": "Requerido", "PlaceholderEmail": "Requerido", "PlaceholderSubject": "Requerido", "PlaceholderTypetexthere": "Escribe tu mensaje aquÃ­...", "FirstName": "Nombre(s)", "LastName": "Apellidos", "Email": "Correo electrÃ³nico", "Subject": "Tema", "Attachfiles": "Adjuntar archivos", "AriaAttachfiles": "El vÃ­nculo Adjuntar archivos abre un cuadro de diÃ¡logo para cargar archivos", "Send": "Enviar", "AriaSend": "Enviar mensaje", "Sent": "Tu mensaje ha sido enviado...", "Close": "Cerrar", "ConfirmCloseWindow": "Â¿EstÃ¡s seguro de querer cerrar esta ventana para envÃ­o de mensaje?", "Cancel": "Cancelar", "AriaMinimize": "Minimizar Enviar mensaje", "AriaMaximize": "Maximizar Enviar mensaje", "AriaWindowLabel": "Ventana Enviar mensaje", "AriaClose": "Cerrar Enviar mensaje", "AriaCloseAlert": "Se cerrÃ³ el cuadro Alerta", "AriaEndConfirm": "SÃ­", "AriaEndCancel": "Cancelar", "AriaOK": "Aceptar", "AriaRemoveFile": "Quitar el archivo", "AriaFileIcon": "Archivo", "AriaFileSize": "TamaÃ±o del archivo", "Errors": { "102": "Nombre(s) es requerido", "103": "Apellido es requerido", "104": "Tema es requerido", "181": "Correo electrÃ³nico es requerido", "182": "Contenido del mensaje es requerido", "connectionError": "Unable to reach server. Please try again.", "unknowError": "Something went wrong, we apologize for the inconvenience. Please check your connection settings and try again.", "attachmentsLimit": "El nÃºmero total de archivos adjuntos ha excedido el lÃ­mite: ", "attachmentsSize": "El tamaÃ±o total de archivos adjuntos ha excedido el lÃ­mite: ", "invalidFileType": "Tipo de archivo no soportado. Por favor adjunte imÃ¡genes, PDFs, archivos de texto y ZIPs.", "invalidFromEmail": "Correo electrÃ³nico es invalido", "invalidMailbox": "Invalid email - To address." } }, "webchat": { "ChatButton": "Chat", "ChatStarted": "Chat Iniciado", "ChatEnded": "Chat Finalizado", "AgentNameDefault": "Agente", "AgentConnected": "<%Agent%> Conectado", "AgentDisconnected": "<%Agent%> Desconectado", "BotNameDefault": "Asistente Virtual", "BotConnected": "<%Bot%> Conectado", "BotDisconnected": "<%Bot%> Desconectado", "SupervisorNameDefault": "Supervisor", "SupervisorConnected": "<%Agent%> Conectado", "SupervisorDisconnected": "<%Agent%> Desconectado", "AgentTyping": "...", "AriaAgentTyping": "El agente estÃ¡ escribiendo", "AgentUnavailable": "Disculpa. No hay agentes disponibles. Por favor intenta mÃ¡s tarde.", "ChatTitle": "Asistente Virtual", "ChatEnd": "X", "ChatClose": "X", "ChatMinimize": "Min", "ChatFormFirstName": "Nombre(s)", "ChatFormLastName": "Apellidos", "ChatFormNickname": "Nombre(s)", "ChatFormEmail": "Correo electrÃ³nico", "ChatFormSubject": "Asunto", "ChatFormPlaceholderFirstName": "Requerido", "ChatFormPlaceholderLastName": "Requerido", "ChatFormPlaceholderNickname": "Requerido", "ChatFormPlaceholderEmail": "Requerido", "ChatFormPhone": "TelÃ©fono", "ChatFormPlaceholderPhone": "Requerido", "ChatFormContactType": "Tipo de contacto", "ChatFormTranscript": "Â¿Quieres que se envÃ­e la sesiÃ³n de chat a tu correo electrÃ³nico?", "ChatFormSubmit": "Iniciar Chat", "AriaChatFormSubmit": "Iniciar chat", "ChatFormCancel": "Cancelar", "AriaChatFormCancel": "Cancelar el chat", "ChatFormClose": "Cerrar", "ChatInputPlaceholder": "Escribe aquÃ­ tu mensaje", "ChatInputSend": "ENVIAR", "AriaChatInputSend": "Enviar", "ChatEndQuestion": "Â¿EstÃ¡s seguro de querer terminar esta sesiÃ³n de chat?", "ChatEndCancel": "Cancelar", "ChatEndConfirm": "Terminar chat", "AriaChatEndCancel": "Cancelar", "AriaChatEndConfirm": "Fin", "ConfirmCloseWindow": "Â¿EstÃ¡s seguro de querer cerrar el chat?", "ConfirmCloseCancel": "Cancelar", "ConfirmCloseConfirm": "Cerrar", "AriaConfirmCloseCancel": "Cancelar", "AriaConfirmCloseConfirm": "Cerrar", "ActionsDownload": "Descargar transcripciÃ³n", "ActionsEmail": "Enviar transcripciÃ³n por correo electrÃ³nico", "ActionsPrint": "Imprimir transcripciÃ³n", "ActionsCobrowseStart": "Iniciar conavegaciÃ³n", "AriaActionsCobrowseStartTitle": "Abre la sesiÃ³n de conavegaciÃ³n", "ActionsSendFile": "Enviar Archivo", "AriaActionsSendFileTitle": "El vÃ­nculo Adjuntar archivos abre un cuadro de diÃ¡logo para cargar archivos", "ActionsEmoji": "Enviar emoji", "ActionsCobrowseStop": "Salir de conavegaciÃ³n", "ActionsVideo": "Invitar a chat de vÃ­deo", "ActionsTransfer": "Transferir", "ActionsInvite": "Invitar", "InstructionsTransfer": "Abra este enlace en otro dispositivo para transferir la sesiÃ³n de chat</br></br><%link%>", "InstructionsInvite": "Comparta este enlace con otra persona para agregarla a esta sesiÃ³n de chat</br></br><%link%>", "InviteTitle": "Â¿Necesita ayuda?", "InviteBody": "DÃ­ganos si podemos ayudarle.", "InviteReject": "No, gracias", "InviteAccept": "Iniciar chat", "AriaInviteAccept": "Aceptar invitaciÃ³n y comenzar el chat", "AriaInviteReject": "Rechazar la invitaciÃ³n", "ChatError": "Hubo un problema al iniciar la sesiÃ³n de chat. IntÃ©ntelo de nuevo.", "ChatErrorButton": "OK", "AriaChatErrorButton": "Aceptar", "ChatErrorPrimaryButton": "SÃ­", "ChatErrorDefaultButton": "No", "AriaChatErrorPrimaryButton": "SÃ­", "AriaChatErrorDefaultButton": "No", "DownloadButton": "Descargar", "AriaDownloadButton": "Descargar el archivo", "FileSent": "ha enviado:", "FileTransferRetry": "Reintentar", "AriaFileTransferRetry": "Volver a intentar la transferencia del archivo", "FileTransferError": "OK", "AriaFileTransferError": "Aceptar", "FileTransferCancel": "Cancelar", "AriaFileTransferCancel": "Cancelar la transferencia del archivo", "RestoreTimeoutTitle": "Chat terminÃ³", "RestoreTimeoutBody": "Tu sesiÃ³n previa de chat ha expirado. Â¿Quisieras iniciar una nueva?", "RestoreTimeoutReject": "No gracias", "RestoreTimeoutAccept": "Iniciar chat", "AriaRestoreTimeoutAccept": "Aceptar invitaciÃ³n y comenzar el chat", "AriaRestoreTimeoutReject": "Rechazar la invitaciÃ³n", "EndConfirmBody": "Â¿EstÃ¡s seguro de querer cerrar el chat?", "EndConfirmAccept": "Terminar chat", "EndConfirmReject": "Cancelar", "AriaEndConfirmAccept": "Finalizar chat", "AriaEndConfirmReject": "Cancelar", "SurveyOfferQuestion": "Â¿Desea participar en una encuesta?", "ShowSurveyAccept": "Yes", "ShowSurveyReject": "No", "AriaShowSurveyAccept": "SÃ­", "AriaShowSurveyReject": "No", "UnreadMessagesTitle": "sin leer", "AriaYouSaid": "Usted dijo", "AriaSaid": "dijo", "AriaSystemSaid": "El sistema dijo", "AriaWindowLabel": "Ventana Chat en vivo", "AriaMinimize": "Minimizar chat en vivo", "AriaMaximize": "Maximizar chat en vivo", "AriaClose": "Cerrar chat en vivo", "AriaEmojiStatusOpen": "Se abriÃ³ el cuadro de diÃ¡logo para seleccionar emoji", "AriaEmojiStatusClose": "Se cerrÃ³ el cuadro de diÃ¡logo para seleccionar emoji", "AriaEmoji": "emoji", "AriaCharRemaining": "Caracteres restantes", "AriaMessageInput": "Cuadro de mensaje", "AsyncChatEnd": "Finalizar chat", "AsyncChatClose": "Cerrar ventana", "AriaAsyncChatEnd": "Finalizar chat", "AriaAsyncChatClose": "Cerrar ventana", "DayLabels": ["Dom", "Lun", "Mar", "Mier", "Jue", "Vier", "SÃ¡b"], "MonthLabels": ["Ene", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"], "todayLabel": "Hoy", "IdleMessage1": "Esta sesiÃ³n se cerrarÃ¡ en breve por inactividad.", "IdleMessage2": "Esta sesiÃ³n se cerrarÃ¡ en breve por inactividad.", "IdleMessageClose": "La sesiÃ³n se cerrÃ³ por inactividad.", "Errors": { "102": "Nombre(s) es requerido", "103": "Apellidos son requeridos", "161": "Por favor captura tu nombre", "201": "El archivo no pudo ser enviado.<br/><strong><p class=\"filename\" title=\"<%FilenameFull%>\">\"<%FilenameTruncated%>\"</p></strong><p class=\"advice\">El mÃ¡ximo nÃºmero de archivos adjuntos ha sido excedido (<%MaxFilesAllowed%>)</p>", "202": "El archivo no pudo ser enviado.<br/><strong><p class=\"filename\" title=\"<%FilenameFull%>\">\"<%FilenameTruncated%>\"</p></strong><p class=\"advice\">El lÃ­mite de subida y/o el mÃ¡ximo nÃºmero de archivos adjuntos ha sido excedido (<%MaxAttachmentsSize%>)</p>", "203": "El archivo no pudo ser enviado.<br/><strong><p class=\"filename\" title=\"<%FilenameFull%>\">\"<%FilenameTruncated%>\"</p></strong><p class=\"advice\">Tipo de archivo no permitido.</p>", "204": "Lo sentimos, pero tu mensaje es demasiado largo. Por favor escribe un mensaje mÃ¡s corto", "240": "Lo sentimos, pero no podemos iniciar un nuevo chat en este momento. Por favor intenta de nuevo mÃ¡s tarde.", "364": "DirecciÃ³n de correo electrÃ³nico es invÃ¡lida", "401": "Lo sentimos, pero no podemos autorizar la sesiÃ³n de chat. Â¿Quiere iniciar un nuevo chat?", "404": "Lo sentimos, pero no encontramos su sesiÃ³n de chat anterior. Â¿Quiere iniciar un nuevo chat?", "500": "Lo sentimos, se produjo un error inesperado con el servicio. Â¿Quiere cerrar la sesiÃ³n e iniciar un nuevo chat?", "503": "Lo sentimos, por el momento el servicio no estÃ¡ disponible o estÃ¡ ocupado. Â¿Quiere cerrar la sesiÃ³n e iniciar un nuevo chat?", "ChatUnavailable": "Lo sentimos, pero no podemos iniciar un nuevo chat en este momento. Por favor intenta de nuevo mÃ¡s tarde.", "CriticalFault": "Tu sesiÃ³n de chat ha terminado de manera inesperada debido a un error desconocido. Nos disculpamos por la inconveniencia", "StartFailed": "Hubo un error al iniciar tu sesiÃ³n de chat. Por favor verifica tu conexiÃ³n y que hayas capturado toda la informaciÃ³n requerida apropiadamente, despuÃ©s vuelve a intentar", "MessageFailed": "Tu mensaje no fue recibido exitosamente. Por favor intenta de nuevo", "RestoreFailed": "Lo sentimos, pero no logramos restablecer tu sesiÃ³n de chat debido a un error desconocido", "TransferFailed": "No fue posible transferir tu sesiÃ³n de chat en este momento. Por favor intenta de nuevo mÃ¡s tarde", "FileTransferSizeError": "El archivo no pudo ser enviado.<br/><strong><p class=\"filename\" title=\"<%FilenameFull%>\">\"<%FilenameTruncated%>\"</p></strong><p class=\"advice\">El tamaÃ±o del archivo es mÃ¡s grande que el tamaÃ±o permitido (<%MaxSizePerFile%>)</p>", "InviteFailed": "No fue posible generar una invitaciÃ³n en este momento. Por favor intenta de nuevo mÃ¡s tarde", "ChatServerWentOffline": "Los mensajes estÃ¡n tomando mas tiempo del normal para ser enviados. Lo sentimos por el retraso", "RestoredOffline": "Los mensajes estÃ¡n tomando mas tiempo del normal para ser enviados. Lo sentimos por el retraso", "Disconnected": "<div style=\"text-align:center\">ConexiÃ³n perdida</div>", "Reconnected": "<div style=\"text-align:center\">ConexiÃ³n restablecida</div>", "FileSendFailed": "El archivo no pudo ser enviado.<br/><strong><p class=\"filename\" title=\"<%FilenameFull%>\"><%FilenameTruncated%></p></strong><p class=\"advice\">Hubo una desconexiÃ³n inesperada. Â¿Intentar de nuevo?</p>", "Generic": "<div style=\"text-align:center\">OcurriÃ³ un error inesperado</div>" } }, "surveyPlugin": { "SurveyTitle": "Encuesta", "SurveyFormSubmit": "Enviar", "SurveyFormCancel": "Cancelar" } } };
localStorage.setItem('i18nStorage', JSON.stringify(obj));

window._genesys.widgets = {
	main: {
		debug: WidgetsMainDebug,
		themes: {
			dark: 'cx-theme-dark',
			light: 'cx-theme-light',
			banorte: 'cx-theme-banorte'
		},
		theme: 'banorte',
		lang: 'es',
		i18n: JSON.parse(localStorage.getItem('i18nStorage')),
		customStylesheetID: 'genesys_widgets_custom'
	},
	webchat: {
		dataURL: WidgetsWebchatDataURL,
		userData: {
			canal: 'acceso24',
			ChatBotID: 'WatsonBot',
			ChatBotName: 'WatsonBot',
			ChatBotHoldup: 'true',
			StopBotOnAgentArrival: 'true',
			StopBotOnCustomerLeft: 'true',
			Visibility: 'ALL',
			Nickname: 'Asistente Virtual Banorte',
			_umsChannel: 'channel-chatbot',
			Send_Chat_Transcript: 'true',
			Send_Chat_Survey: 'false',
			channel_type: '1',
			channel_subtype: '1'
		},
		ajaxTimeout: 18000,
		emojis: false,
		form: {
			wrapper: '<table></table>',
			inputs: [
				{
					id: 'cx_webchat_form_errormessage',
					name: 'errormessage',
					type: 'checkbox',
					maxlength: '100',
					placeholder: '@i18n:webchat.ChatFormPlaceholderFirstName',
					label: '@i18n:webchat.ChatFormFirstName',
					wrapper: "<tr><th><center>Para iniciar una sesiÃ³n de chat presiona el botÃ³n \'Iniciar Chat\'</center></th><td style='display:none;'>{input}</td></tr>"
				},
				{
					id: 'cx_webchat_form_firstname',
					name: 'firstname',
					type: 'hidden',
					maxlength: '100',
					value: guid,
					placeholder: '@i18n:webchat.ChatFormPlaceholderFirstName',
					label: '@i18n:webchat.ChatFormFirstName',
					validate: function (_event, _form, input) {
						return validateMandatoryInput(input);
					}
				},
				{
					id: 'cx_webchat_form_lastname',
					name: 'lastname',
					type: 'hidden',
					maxlength: '100',
					value: guid,
					placeholder: '@i18n:webchat.ChatFormPlaceholderLastName',
					label: '@i18n:webchat.ChatFormLastName',
					validate: function (_event, _form, input) {
						return validateMandatoryInput(input);
					}
				},
				{
					id: 'cx_webchat_form_email',
					name: 'email',
					type: 'hidden',
					maxlength: '100',
					value: guid + '@dummy.com',
					placeholder: '@i18n:webchat.ChatFormPlaceholderEmail',
					label: '@i18n:webchat.ChatFormEmail',
					validate: function (_event, _form, input) {
						return validateMandatoryInput(input);
					}
				}
			]
		},
		actionsMenu: true,
		chatButton: {
			enabled: false,
			openDelay: 1000,
			effectDuration: 300
		},
		uploadsEnabled: false,
	},
	onReady: function () {
		console.log('onReady()');
		widgetsLoaded = true;
		openChat();
	}
};

function dynamicLoading(o) {
	console.log('dynamicLoading()');
	var f = function () {
		var d = o.location; o.aTags = o.aTags || [];
		for (var i = 0; i < o.aTags.length; i++) {
			var oTag = o.aTags[i]; var fs = d.getElementsByTagName(oTag.type)[0], e;
			if (d.getElementById(oTag.id)) return; e = d.createElement(oTag.type); e.id = oTag.id;
			if (oTag.type == "script") { e.src = oTag.path; console.log('JS Loaded');}
			else { e.type = 'text/css'; e.rel = 'stylesheet'; e.href = oTag.path; console.log('CSS Loaded'); }
			if (fs) { fs.parentNode.insertBefore(e, fs); } else { d.head.appendChild(e); }
			
			console.log('[' + oTag.id + '] loaded');
		}
	}, ol = window.onload;
	if (o.onload) { typeof window.onload != "function" ? window.onload = f : window.onload = function () { ol(); f(); } } else f();
};

function loadWidgets() {
	console.log('loadWidgets()');
	if (widgetsLoaded === true) {
		console.log('Widgets already loaded');
		return;
	}
	if (typeof heartbeat !== "function") {
		console.log('botjs not available, reload');
		dynamicLoading({
			location: document,
			onload: false,
			aTags: [
				{
					type: 'script',
					id: 'genesys-cx-widgets-bot-script',
					path: widgetsBotJsScriptSrc + '?v=16042021'
				}
			]
		});
		return;
	}
	dynamicLoading({
		location: document,
		onload: false,
		aTags: [
			{
				type: 'script',
				id: 'genesys-cx-widgets-script',
				path: widgetsMinJS + '?v=16042021'
			}
		]
	});
}

dynamicLoading({
	location: document,
	onload: false,
	aTags: [
		{
			type: 'link',
			id: 'genesys-cx-widgets-banorte-style',
			path: widgetsBanorteCSS + '?v=16042021'
		},
		{
			type: 'link',
			id: 'genesys-cx-widgets-watson-style',
			path: widgetsWatsonCSS + '?v=16042021'
		},
        {
            type: 'script',
            id: 'genesys-cx-widgets-minimize-script',
            path: "https://www.banorte.com/cms/watson/widgetFiles/TEST/js/v9/nuevoPlugin.js"
        },
		{
			type: 'link',
			id: 'genesys-cx-widgets-styles',
			path: widgetsMinCSS + '?v=16042021'
		},
		{
			type: 'script',
			id: 'genesys-cx-widgets-bot-script',
			path: widgetsBotJsScriptSrc + '?v=16042021'
		}
	]
});

if (!window._genesys.widgets.extensions) {
	window._genesys.widgets.extensions = {};
}

window._genesys.widgets.extensions['WebChatCustomExtension'] = function ($, CXBus, Common) {

	const customPlugin = CXBus.registerPlugin('WebChatCustom');

	customPlugin.subscribe('WebChatService.restored', function () {
		console.log('Web chat service restored');
			pageWasReloaded = false;
			reInvitePending = true;
			console.log('Ending chat with reinvite');
			customPlugin.command('WebChatService.endChat');
	});

	customPlugin.subscribe('WebChat.cancelled', function () {
		if (reInvitePending === true) {
			customPlugin.command('WebChat.close');
		}
	});

	customPlugin.subscribe('WebChat.completed', function () {
		if (reInvitePending === true) {
			customPlugin.command('WebChat.close');
		}
	});

	customPlugin.subscribe('WebChat.closed', function () {
		if (reInvitePending === true) {
			reInvitePending = false;
			reInvite();
		}
	});

	function reInvite() {
		console.log('reInvite()');
		customPlugin.command('WebChat.reInvite')
			.done(function () {
				console.log('Inviting to a new web chat session');
			}).fail(function (e) {
				console.log(e);
			});
	}

	customPlugin.ready();
}

// BANORTE CODE:
//$('#logoutlink').on('click', function () {
//	window._genesys.widgets.bus.command('WebChatService.endChat');
//});