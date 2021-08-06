ï»¿if (!window._genesys.widgets.extensions) {
	window._genesys.widgets.extensions = {};
}
var html = [];
var placeholderHolderRegex = /\{[\wÃ±-]*\}/g;
var ddmmyyyyAcceptableDateRegex = /(\d{2})\/(\d{2})\/(\d{4})/;
var yyyymmddAcceptableDateRegex = /(\d{4})\-(\d{2})\-(\d{2})/;
var isBotConnected = false;
var isAgentConnected = false;
var firstMessageReceived;
//Mayo27
var mensajeAgenteDesconectado = 'Gracias por contactarnos, tu solicitud se estarÃ¡ atendiendo internamente. Si tienes alguna duda contÃ¡ctanos nuevamente por este medio';

window._genesys.widgets.extensions['BotExtension'] = function (jQuery, CXBus, _Common) {

	var botPlugin = CXBus.registerPlugin('BotPlugin');

	window.chatListenerOut = function (e) {
		console.log('Iframe message received:');
		console.log(e);
		if (e.data && e.data.message == 'datosChatOut') {
			const datosChat = JSON.parse(e.data.datosChat);
			if (datosChat) {
				const jSessionId = datosChat.idSesion;
				botPlugin.command('WebChatService.updateUserData', { JSESSIONID: jSessionId });
				console.log('Session data updated');
			} else {
				console.log('Session data retrieved but not updated');
			}
		}
	}
	window.addEventListener('message', window.chatListenerOut);

	botPlugin.subscribe('WebChatService.agentTypingStarted', function () {
		if (isBotConnected === true) {
			jQuery('.cx-textarea-cell :input').prop('disabled', true);
		}
	});

	botPlugin.subscribe('WebChatService.agentTypingStopped', function () {
		jQuery('.cx-textarea-cell :input').prop('disabled', false);
	});

	botPlugin.subscribe('WebChatService.agentConnected', function () {
		console.log('Agent connected');
	});

	botPlugin.subscribe('WebChatService.agentDisconnected', function () {
		console.log('Agent disconnected');
	});

	botPlugin.subscribe('WebChatService.botConnected', function () {
		isBotConnected = true;
	});

	botPlugin.subscribe('WebChatService.botDisconnected', function () {
		isBotConnected = false;
	});

	botPlugin.subscribe('WebChatService.started', function () {
		firstMessageReceived = -1;
		const iframes = document.getElementsByTagName('iframe');
		var windowA24 = null;
		for (var i = 0; i < iframes.length; i++) {
			const source = iframes[i].attributes.src.nodeValue;
			if (source.indexOf('/EstablishSession') > -1) {
				const myIframe = iframes[i];
				windowA24 = myIframe.contentWindow;
			}
		}
		if (windowA24) {
			console.log('acceso 24 iframe was found');
			windowA24.postMessage('datosChatIn', window.location.href);
		} else {
			console.log('acceso 24 iframe was not found');
		}
	});

	botPlugin.subscribe('WebChatService.messageReceived', function (e) {
		console.log('WebChatService.messageReceived');
		console.log(e);
		if (e.data.restoring === true) {
			return;
		}
		var messages = e.data.messages;
		var $transcript = jQuery('.cx-transcript');
		for (var messageIndex = 0; messageIndex < messages.length; messageIndex++) {
			var message = messages[messageIndex];
			if (!firstMessageReceived) {
				firstMessageReceived = message.index;
				console.log('First message received: [{' + firstMessageReceived + '}]');
			}
			switch (message.type) {
				case 'CustomNotice':
					try {
						if (message.from.type === 'Client') {
							continue;
						}
						if (firstMessageReceived && message.index < firstMessageReceived) {
							console.log('Ignoring custom notice from history');
							continue;
						}
						var customNotice = JSON.parse(message.text);

						//Estado de cuenta
						if (isDocumentDefined(customNotice) === true) {
							console.log('Downloading PDF Document');
							var pdfDocument = customNotice.context.input_context.response.document;
							customNotice.context.input_context.response = {};
							var urlbase = 'data:application/octet-stream;base64,' + pdfDocument;
							var pdfDocumentHTML = jQuery('<a>').attr('href', urlbase).attr('innerHTML', 'Descargar estado de cuenta').attr('download', 'EstadoDeCuenta.pdf').text('Descargar estado de cuenta')[0];
							var pdfDocumentMessage = {
								type: 'html',
								text: pdfDocumentHTML.outerHTML,
								custom: false,
								bubble: {
									radius: '5px',
									time: true,
									name: false,
									direction: 'left',
									avatar: {
										custom: '<div></div>'
									}
								}
							};
							injectMessage(message, pdfDocumentMessage);
							//continue;
						}
						//<---Estado de cuenta

						if (processHandoff(customNotice) === true) {
							var newName = customNotice.context.agent_context.customer_name;
							var newEmail = customNotice.context.agent_context.customer_email;
							var splittedName = getSplittedName(newName);

							if (splittedName.name) {
								botPlugin.command('WebChatService.updateUserData', { FirstName: splittedName.name });
							}
							if (splittedName.lastName) {
								botPlugin.command('WebChatService.updateUserData', { LastName: splittedName.lastName });
							}
							if (newEmail) {
								botPlugin.command('WebChatService.updateUserData', { EmailAddress: newEmail });
							}
						}

						if (processSecurityResponse(jQuery, customNotice) === true) {
							attachSecurityEventHandlers();
							continue;
						}
						var output = buildOutput(jQuery, customNotice);
						if (output == true) {
							attachOutputEventHandlers(jQuery, $transcript, botPlugin);
						}
						var input = buildInput(jQuery, customNotice);
						if (input.length > 0) {
							attachInputEventHandlers(jQuery, $transcript, botPlugin, input, customNotice);
						}
						buildAuthentication(jQuery, customNotice);
						buildFeedback(jQuery, customNotice, botPlugin);
						attachSecurityEventHandlers();
						// Table navigation
						var table = $transcript.find('.cx-table').last();
						if (table.length > 0) {
							var $table = jQuery(table);
							displayTableRows(jQuery, $table);
							var $navMonthLeft = jQuery($transcript.find('.cx-nav-month-left'));
							var $navMonthRight = jQuery($transcript.find('.cx-nav-month-right'));
							$navMonthLeft.on('click', function () {
								if (jQuery(this).hasClass('disabled') == true) {
									return;
								}
								var $monthNavigator = jQuery(this).parent();
								var currentTimestamp = $monthNavigator.data('current_timestamp');
								var currentDate = new Date(currentTimestamp);
								currentDate.setMonth(currentDate.getMonth() - 1);
								$monthNavigator.data('current_timestamp', currentDate.getTime());
								displayTableRows(jQuery, $table);
							});
							$navMonthRight.on('click', function () {
								if (jQuery(this).hasClass('disabled') == true) {
									return;
								}
								var $monthNavigator = jQuery(this).parent();
								var currentTimestamp = $monthNavigator.data('current_timestamp');
								var currentDate = new Date(currentTimestamp);
								currentDate.setMonth(currentDate.getMonth() + 1);
								$monthNavigator.data('current_timestamp', currentDate.getTime());
								displayTableRows(jQuery, $table);
							});
						}
						var disableInput = processDisableInput(customNotice);
						jQuery('.cx-textarea-cell :input').prop('disabled', disableInput);

						if ($transcript.length > 0) {
							$transcript[0].scrollTop = $transcript[0].scrollHeight;
						}

					} catch (error) {
						console.log(error);
					}
					break;
				case 'Message':
					if (message.from.type === 'Client') {
						jQuery('.cx-sidebar').remove();
					}
					break;

				case 'ParticipantJoined':
					if (message.from.type === 'Agent' && message.from.name === 'Asistente Virtual Banorte') {
						isBotConnected = true;
					} else if (message.from.type === 'Agent' && message.from.name !== 'Asistente Virtual Banorte') {
						isAgentConnected = true;
					}
					break;

				case 'ParticipantLeft':
					if (message.from.type === 'Agent' && message.from.name === 'Asistente Virtual Banorte') {
						isBotConnected = false;
					} else if (message.from.type === 'Agent' && message.from.name !== 'Asistente Virtual Banorte') {
						isAgentConnected = false;
					}
					break;
			}
		}
	});

	botPlugin.subscribe('WebChatService.ended', function (e) {
		jQuery('.cx-fixed').remove();
		jQuery('.cx-sidebar').remove();
	});

	botPlugin.command('WebChatService.registerPreProcessor', {
		preprocessor: function (message) {
			if (message.type === 'Message') {
				if (message.from.type === 'Agent') {
					if (message.text.match(/[&<>'"]/g) !== null) {
						//console.log('Storing html received');
						html.push(message.text);
						message.text = '{html}';
					}
				}
			}
			return message;
		}
	}).done(function () {
		console.log('WebChatService registered preprocessor function');
	}).fail(function () {
		console.log('WebChatService failed to register function');
	});

	botPlugin.subscribe('WebChat.messageAdded', function (e) {
		console.log('WebChat.messageAdded');
		console.log(e);
		const $messageText = e.data.html.find('.cx-message-text');
		const innerText = $messageText[0].innerText;
		if (innerText.indexOf('{html}') !== -1) {
			const indexes = getIndexOf('{html}', innerText);
			//console.log('indexes.length = [' + indexes.length + ']');
			if (indexes.length > -1) {
				for (var i = 0; i < indexes.length; i++) {
					const htmlElement = html.shift();
					if (htmlElement) {
						let messageHtml = $messageText.html();
						messageHtml = messageHtml.replace('{html}', htmlElement);
						$messageText.html(messageHtml);
					} else {
						console.log('Cannot found stored html content to be used for replacement');
					}
				}
			}
		} else if(innerText.indexOf('Desconectado') !== -1 && innerText.indexOf('Asistente') === -1) {
			const $messageTime = e.data.html.find('.cx-time');
			$messageText[0].innerText = mensajeAgenteDesconectado; 
		}
	});

	botPlugin.subscribe('WebChat.opened', function (e) {
		var icon = createMinimizeIcon();
		jQuery('.cx-button-minimize').html(icon);
	});

	botPlugin.subscribe('WebChat.minimized', function (e) {
		jQuery('.cx-titlebar').height('34px');
		jQuery('.cx-buttons-window-control').css('top', '6px');
	});

	botPlugin.subscribe('WebChat.unminimized', function (e) {
		jQuery('.cx-titlebar').height('58px');
		jQuery('.cx-buttons-window-control').css('top', '12px');
	});

	function attachSecurityEventHandlers() {
		console.log('attachSecurityEventHandlers()');
		var $form = jQuery('.cx-fixed');
		const $submitButton = jQuery($form.find('.cx-submit').not('.cx-disabled'));
		$submitButton.on('click', function () {		
			var $form = jQuery(this).parents('.cx-fixed');
			submitSecurityForm(jQuery, $form, botPlugin);
		});
		const $defaultButton = jQuery($form.find('.cx-btn-default').not('.cx-disabled'));
		$defaultButton.on('click', function () {
			$defaultButton.off();
			const customNoticeMessage = { method: "cancel" };
			sendSecurityCustomNotice(jQuery, botPlugin, JSON.stringify(customNoticeMessage));
		});
		if ($submitButton.length > 0) {
			$form.on('keyup', function (eventObject) {
				if (eventObject.keyCode == 13) {
					submitSecurityForm(jQuery, $form, botPlugin);
				}
			});
		}
	}

	function injectMessage(originalMessage, params) {
		/*botPlugin.command('WebChat.injectMessage', params)
			.done(function (e) {
				console.log('Injected message');
				console.log(e);
			})
			.fail(function (e) {
				console.log(e);*/
		const $message = jQuery(
					'<div class="cx-message-group">' +
						'<div class="cx-message cx-participant cx-them cx-Bot cx-bot" id="cx-chat-index-' + originalMessage.index + '">' +
							'<div class="cx-avatar-wrapper">' +
								'<div class="cx-avatar bot"></div>' +
							'</div>' +
							'<div class="cx-bubble-arrow">' +
								'<svg height="7" width="7" focusable="false">' +
									'<polygon class="cx-left" points="0,0 7,0 7,7"></polygon>' +
									'<polygon class="cx-right" points="0,0 0,7 7,0"></polygon>' +
								'</svg>' +
							'</div>' +
							'<div class="cx-bubble">' +
								'<span aria-hidden="true" class="cx-name">Asistente Virtual Banorte</span>' +
								'<div class="cx-message-text"></div>' +
								'<span class="cx-time">&nbsp;</span>' +
							'</div>' +
						'</div>' +
					'</div>'
				);
		let $injectedMessage;
		const $transcriptMessages = jQuery('.cx-transcript').find('.cx-message:not(.cx-date)');
		for (let i = 0; i < $transcriptMessages.length; i++) {
			const $transcriptMessage = $transcriptMessages.eq(i);
			const transcriptMessageId = $transcriptMessage.attr('id');
			if (!transcriptMessageId) {
				console.log('Cannot found transcript message id');
				continue;
			}
			const currentIndex = parseInt(transcriptMessageId.substring('cx-chat-index-'.length));
			if (currentIndex > originalMessage.index) {
				$injectedMessage = $message.insertBefore($transcriptMessage);
				break;
			}
		}
		if (!$injectedMessage) {
			console.log('Injecting message at the end of transcript');
			$injectedMessage = $message.appendTo('.cx-transcript');
		}
		$injectedMessage.find('.cx-message-text').append(params.text);
		//});
	}

	botPlugin.ready();
}

function isDocumentDefined(customNotice) {
	if (customNotice.context) {
		if (customNotice.context.input_context) {
			if (customNotice.context.input_context.response) {
				if (customNotice.context.input_context.response.document) {
					return true;
				}
			}
		}
	}
	return false;
}

function getIndexOf(searchStr, str) {
	var searchStrLen = searchStr.length;
	if (searchStrLen == 0) {
		return [];
	}
	var startIndex = 0, index, indexes = [];
	while ((index = str.indexOf(searchStr, startIndex)) > -1) {
		indexes.push(index);
		startIndex = index + searchStrLen;
	}
	return indexes;
}

function processHandoff(customNotice) {
	var context = customNotice.context;
	if (context !== undefined) {
		var agentContext = context.agent_context;
		if (agentContext !== undefined) {
			if (agentContext.handooff !== undefined) {
				if (agentContext.handooff === true) {
					console.log("Agent handoff detected");
					var isNameDefined = false;
					var isEmailDefined = false;
					if (agentContext.customer_name) {
						isNameDefined = true
					}
					if (agentContext.customer_email) {
						isEmailDefined = true;
					}
					if (isNameDefined === true && isEmailDefined === true) {
						return true;
					}
				}
			}
		}
	}
	return false;
}

function processDisableInput(customNotice) {
	console.log('processDisableInput');
	const context = customNotice.context;
	if (context !== undefined) {
		const inputContext = context.input_context;
		if (inputContext !== undefined) {
			if (inputContext.disable_input !== undefined) {
				if (inputContext.disable_input === true || inputContext.disable_input === 'true') {
					return true;
				} else if (inputContext.disable_input === false || inputContext.disable_input === 'false') {
					return false;
				} else {
					console.log('disable_input value with unknown value [' + inputContext.disable_input + ']');
					return false;
				}
			}
		}
	}
	return false;
}

function getSplittedName(clientName) {
	var result = {};
	if (clientName) {
		var fullName = clientName.split(" ");
		if (fullName.length > 0) {
			if (fullName.length > 4) {
				result.name = fullName.slice(0, 3).join(' ');
				result.lastName = fullName.slice(3, fullName.length).join(' ');
			}
			else if (fullName.length > 3) {
				result.name = fullName.slice(0, 2).join(' ');
				result.lastName = fullName.slice(2, fullName.length).join(' ');
			}
			else if (fullName.length > 1) {
				result.name = fullName.slice(0, 1).join(' ');
				result.lastName = fullName.slice(1, fullName.length).join(' ');
			}
			else {
				result.name = fullName.slice(0, 1).join(' ');
				result.lastName = " ";
			}
		}
	}
	return result;
}

function addRows(jQuery, $tableBody, rows) {
	for (var i = 0; i < rows.length; i++) {
		if (rows[i][1] === undefined || rows[i][1] === null || rows[i][1].length == 0) {
			continue;
		}
		var $row = jQuery('<tr/>');
		$row.append(jQuery('<td/>', { text: rows[i][0] }));
		$row.append(jQuery('<td/>', { text: rows[i][1] }));
		$tableBody.append($row);
	}
}

function addValidationMarkers(jQuery, field, $input) {
	if (field.characters_accepted !== undefined && field.characters_accepted.length > 0) {
		$input.attr('characters_accepted', field.characters_accepted);
	}
	if (field.max !== undefined && field.max.length > 0) {
		$input.attr('max', field.max);
	}
	if (field.max_length !== undefined && field.max_length.length > 0) {
		$input.data('max_length', field.max_length);
	}
	if (field.min !== undefined && field.min.length > 0) {
		$input.attr('min', field.min);
	}
	if (field.min_length !== undefined && field.min_length.length > 0) {
		$input.data('min_length', field.min_length);
	}
	// number_decimals property can be number or string
	if (field.number_decimals !== undefined) {
		var step = '0.' + Array(parseInt(field.number_decimals)).join('0') + '1';
		$input.attr('step', step);
	}
	if (field.required !== undefined) {
		$input.data('required', field.required);
	}
}

function appendMonthNavigator(jQuery, $table, $tableBody, choices) {
	var minTimestamp;
	var maxTimestamp;
	for (var i = 0; i < choices.length; i++) {
		var choice = choices[i];
		var choiceTimestamp = getChoiceTimestamp(choice.date);
		if (choiceTimestamp == null) {
			continue;
		}
		if (minTimestamp === undefined || choiceTimestamp < minTimestamp) {
			minTimestamp = choiceTimestamp;
		}
		if (maxTimestamp === undefined || choiceTimestamp > maxTimestamp) {
			maxTimestamp = choiceTimestamp;
		}
	}
	$table.attr('data-min_timestamp', minTimestamp);
	$table.attr('data-max_timestamp', maxTimestamp);
	$row = jQuery('<tr/>');
	var firstDate = new Date(minTimestamp);
	firstDate.setDate(1);
	var columns = $table.find('th');
	var $cell = jQuery('<td/>', { colspan: columns.length });
	var $monthNavigator = jQuery('<div/>', { class: 'cx-month-navigator' });
	var $monthLeft = jQuery('<span/>', { class: 'cx-nav-month-left disabled non-selectable', text: '<' });
	var $month = jQuery('<span/>', { class: 'cx-nav-month', text: formatMonth(firstDate) });
	var $monthRight = jQuery('<span/>', { class: 'cx-nav-month-right non-selectable', text: '>' });
	$monthNavigator.attr('data-current_timestamp', firstDate.getTime());
	$monthNavigator.append($monthLeft, $month, $monthRight);
	$cell.append($monthNavigator);
	$row.append($cell);
	$tableBody.append($row);
}

function attachInputEventHandlers(jQuery, $transcript, botPlugin, input, customNotice) {
	jQuery('.cx-textarea-cell :input').prop('disabled', true);
	for (var inputIndex = 0; inputIndex < input.length; inputIndex++) {
		$transcript.append(input[inputIndex]);
	}
	var $sendButtons = jQuery($transcript.find('.cx-watson-input .cx-input.cx-btn')).not('.cx-disabled');
	$sendButtons.on('click', function () {
		$sendButtons.off().addClass('cx-disabled');
		$sendButtons.prop("disabled", true);
		var $button = jQuery(this);
		var $form = $button.parents('div.cx-watson-input');
		var formType = $form.data('type');
		var method;
		if (formType !== 'external_disclaimer') {
			method = $button.data('method');
		} else {
			method = 'agreement';
		}
		switch (method) {
			case 'agreement':
				var externalSourceData = customNotice.context.input_context.external_source_data;
				var id = externalSourceData.row_id;
				var extract = externalSourceData.message.extract;
				var proactivity = externalSourceData.message.proactivity;
				var agreementRejection = externalSourceData.message.agreement_rejection;
				var message = $button.data('message');
				var value = message == 'accept' ? 'Y' : 'N';
				var customNoticeMessage =
				{
					method: method,
					id: id,
					value: value,
					message: { extract: extract, proactivity: proactivity, agreement_rejection: agreementRejection }
				};
				botPlugin.command('WebChat.injectMessage', {
					type: 'text',
					text: $button.text(),
					custom: false
				});
				sendCustomNotice(jQuery, botPlugin, JSON.stringify(customNoticeMessage));
				break;
			case 'feedback':
				var id = $button.data('id');
				var value = $button.data('value');
				var customNoticeMessage = { method: method, id: id, value: value };
				sendCustomNotice(jQuery, botPlugin, JSON.stringify(customNoticeMessage));
				break;
			default:
				var value = $button.data('message');
				var message = $button.text();
				var inputContext = customNotice.context.input_context;
				inputContext.options.selection = value.toString();
				sendMessageUsingCustomNotice(jQuery, botPlugin, message, value, inputContext);
				break;
		}
	});
	var $submitButtons = jQuery($transcript.find('.cx-watson-input .cx-btn'));
	$submitButtons.on('click', function () {
		var $button = jQuery(this);
		var $form = $button.parents('.cx-watson-form');
		if ($form.length === 0) {
			return;
		}
		var inputContext = customNotice.context.input_context;
		if ($button.hasClass('cx-submit') === true) {
			var isValidForm = validateForm(jQuery, $form);
			if (isValidForm === false) {
				return;
			}
			if (inputContext.action != undefined && inputContext.action.response !== undefined) {
				inputContext.action.response = true;
			}
		} else {
			if (inputContext.action != undefined && inputContext.action.response !== undefined) {
				inputContext.action.response = false;
			}
		}
		$submitButtons.prop("disabled", true);
		$submitButtons.off().addClass('cx-disabled');
		botPlugin.command('WebChat.injectMessage', {
			type: 'text',
			text: $button.text(),
			custom: false
		});
		var formInputs = $form.find('.cx-input');
		for (var fieldIndex = 0; fieldIndex < inputContext.fields.length; fieldIndex++) {
			var field = inputContext.fields[fieldIndex];
			var formInput = formInputs[fieldIndex];
			var selections = new Array();
			var selection = jQuery(formInput).val();
			// overwrite selection value when field is date or decimal
			if (field.type === 'date') {
				var dateMatch = selection.match(yyyymmddAcceptableDateRegex);
				selection = dateMatch[3] + '/' + dateMatch[2] + '/' + dateMatch[1];
			}
			if (field.type === 'decimal') {
				if (selection.length > 0 && field.number_decimals !== undefined) {
					var num = parseFloat(selection);
					selection = num.toFixed(field.number_decimals);
				}
			}
			switch (field.type) {
				case 'combobox':
					var label = formInput.selectedOptions[0].label;
					selections.push(label);
					selections.push(selection);
					break;
				case 'date-range':
					var startDateMatch = selection.match(yyyymmddAcceptableDateRegex);
					selection = startDateMatch[3] + '/' + startDateMatch[2] + '/' + startDateMatch[1];
					selections.push(selection);
					fieldIndex++;

					if (formInputs.length > 1) {
						formInput = formInputs[fieldIndex];
					}

					selection = jQuery(formInput).val();
					var endDateMatch = selection.match(yyyymmddAcceptableDateRegex);
					selection = endDateMatch[3] + '/' + endDateMatch[2] + '/' + endDateMatch[1];
					selections.push(selection);
					break;
				default:
					selections.push(selection);
					break;
			}
			field.selections = selections;
		}
		sendCustomNotice(jQuery, botPlugin, JSON.stringify(inputContext));
	});
	var $formInputs = jQuery($transcript.find('.cx-watson-form .cx-input'));
	$formInputs.on('change', function () {
		validateFormInput(jQuery(this));
	});
	var $acctSelectors = jQuery($transcript.find('.acct-selector')).not('.cx-disabled');
	$acctSelectors.on('click', function () {
		$acctSelectors.off().addClass('cx-disabled');
		$sendButtons.prop("disabled", true);
		var value = jQuery(this).data('message');
		var message = jQuery(this).data('display-message');
		var inputContext = customNotice.context.input_context;
		inputContext.options.selection = value.toString();
		sendMessageUsingCustomNotice(jQuery, botPlugin, message, value, inputContext);
	});
	$acctSelectors.hover(
		function () {
			jQuery(this).parent('.cx-card').addClass('hover');
		}, function () {
			jQuery(this).parent('.cx-card').removeClass('hover');
		});
	var $selectors = jQuery($transcript.find('.cx-details')).not('.cx-disabled');
	$selectors.on('click', function () {
		$selectors.off().addClass('cx-disabled');
		$sendButtons.prop("disabled", true);
		var value = jQuery(this).data('message');
		var message = jQuery(this).data('display-message');
		var inputContext = customNotice.context.input_context;
		inputContext.options.selection = value.toString();
		sendMessageUsingCustomNotice(jQuery, botPlugin, message, value, inputContext);
	});
	$selectors.hover(
		function () {
			jQuery(this).addClass('hover');
		}, function () {
			jQuery(this).removeClass('hover');
		});
	// Card navigation
	var $navLeft = jQuery($transcript.find('.nav-left'));
	var $navRight = jQuery($transcript.find('.nav-right'));
	$navLeft.on('click', function () {
		if (jQuery(this).hasClass('disabled') == true) {
			return;
		}
		var $container = jQuery(this).next();
		var currentIndex = $container.data('currentIndex');
		if (currentIndex === undefined) {
			currentIndex = 0;
		}
		scrollToCard($container, currentIndex - 1, $navLeft, $navRight);
	});
	$navRight.on('click', function () {
		if (jQuery(this).hasClass('disabled') == true) {
			return;
		}
		var $container = jQuery(this).prev();
		var currentIndex = $container.data('currentIndex');
		if (currentIndex === undefined) {
			currentIndex = 0;
		}
		scrollToCard($container, currentIndex + 1, $navLeft, $navRight);
	});
}

function attachOutputEventHandlers(jQuery, $transcript, botPlugin) {
	var $multimediaAnchor = $transcript.find('.link-container');
	jQuery($multimediaAnchor).on('click', function () {
		var modal = jQuery(this).next('.modal');
		modal.css('display', 'block');
	});
	var $closeModalButton = jQuery('.modal .cx-button-close');
	jQuery($closeModalButton).on('click', function () {
		jQuery('.modal').remove();
	});
	jQuery(window).click(function (e) {
		if (e.target.className == 'modal') {
			jQuery(e.target).css('display', 'none');
		}
	});
}

function buildAuthentication(jQuery, customNotice) {
	if (customNotice.auth === undefined || customNotice.auth.req === undefined || customNotice.auth.req.method === undefined) {
		console.log('Cannot find \'auth.req.method\' property');
		return false;
	}
	var extraContent = [];
	var res = customNotice.auth.res;
	var method = customNotice.auth.req.method;
	switch (method) {
		case 'identify':
			var $maskedName = jQuery('<div/>', { class: 'cx-masked-name', text: res.masked_name });
			extraContent.push($maskedName);
			var $personalMessageContainer = jQuery('<div/>');
			$personalMessageContainer.append(jQuery('<div>', { class: 'cx-personal-message', text: res.personal_message }));
			extraContent.push($personalMessageContainer);
			var $formLabel = jQuery('<div/>', { class: 'cx-password-label', text: 'ContraseÃ±a' });
			extraContent.push($formLabel);
			var $formInput = createFormInput(jQuery, { type: 'password', name: 'user-response', placeholder: 'ContraseÃ±a', required: true }, 'password');
			extraContent.push($formInput);
			renderFixedWindow(jQuery, 'cx-identify', null, null, extraContent, 'Aceptar', 'No soy yo');
			break;
		default:
			console.log('Unsupported auth method: [' + method + ']');
			break;
	}
	return true;
}

function buildFeedback(jQuery, customNotice, botPlugin) {
	if (customNotice.feedback === undefined || customNotice.feedback.res === undefined || customNotice.feedback.res.status === undefined) {
		//console.log('Cannot find \'feedback.res.status\' property');
		return false;
	}
	jQuery('.cx-watson-feedback').replaceWith('');
	botPlugin.command('WebChat.injectMessage', {
		type: 'text',
		text: 'Â¡Gracias!',
		custom: false
	});
}

function buildInput(jQuery, customNotice) {
	var input = [];
	if (customNotice.context === undefined || customNotice.context.input_context === undefined) {
		console.log('Cannot find \'context.input_context\' property');
		return input;
	}
	var inputContext = customNotice.context.input_context;
	if (inputContext.type === undefined) {
		console.log('Cannot find \'context.input_context.type\' property');
		return input;
	}

	if (customNotice.output !== undefined && customNotice.output.text !== undefined) {
		var outputText = customNotice.output.text;
		for (var i = 0; i < outputText.length; i++) {
			var outputTextValue = outputText[i];
			if (outputTextValue === '{INCREASE_SEC_LEVEL}') {
				console.log('Inrease security level detected, do not build the input');
				return input;
			}
		}
	}

	var inputContextControl = null;
	switch (inputContext.type) {
		case 'button':
			inputContextControl = createInputContextButton(jQuery, inputContext);
			break;
		case 'button_single_horizontal':
			inputContextControl = createInputContextButtonSingleHorizontal(jQuery, inputContext);
			break;
		case 'feedback':
			inputContextControl = createInputContextFeedback(jQuery, inputContext);
			break;
		case 'form':
			inputContextControl = createInputContextForm(jQuery, inputContext);
			break;
		case 'list':
			inputContextControl = createInputContextList(jQuery, inputContext);
			break;
		case 'table':
			inputContextControl = createInputContextTable(jQuery, inputContext);
			break;
		default:
			console.log('Unsupported input context type: [' + inputContext.type + ']');
			break;
	}
	if (inputContextControl !== null) {
		input.push(inputContextControl);
	}
	return input;
}

function buildOutput(jQuery, customNotice) {
	if (customNotice.output === undefined || customNotice.output.text === undefined) {
		console.log('Cannot find \'output.text\' property');
		return false;
	}
	var outputText = customNotice.output.text;
	for (var i = 0; i < outputText.length; i++) {
		replaceTranscriptPlaceholders(jQuery, customNotice, outputText[i]);
	}
	for (var i = 0; i < html.length; i++) {
		if (html[i] !== undefined) {
			replaceTranscriptPlaceholders(jQuery, customNotice, html[i]);
		}
	}
	return true;
}

function createMinimizeIcon() {
	var svg = createSVGElement('svg', { height: '24', width: '24' });
	var path = createSVGElement('path', { class: 'cx-svg-icon-tone1', d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' });
	svg.appendChild(path);
	return svg;
}

function createSVGElement(tag, attributes) {
	var svgElement = document.createElementNS('http://www.w3.org/2000/svg', tag);
	for (var attribute in attributes) {
		svgElement.setAttribute(attribute, attributes[attribute]);
	}
	return svgElement;
}

function createFormAction(jQuery, action) {
	var $formAction = jQuery('<div>', { class: 'cx-button-group' });
	if (action !== undefined) {
		if (action.submit_label !== undefined) {
			$formAction.append(jQuery('<button>', { class: 'cx-submit cx-btn cx-btn-primary', text: action.submit_label }));
		}
		if (action.reset_label !== undefined) {
			$formAction.append(jQuery('<button>', { class: 'cx-btn cx-btn-default', text: action.reset_label }));
		}
	} else {
		$formAction = jQuery('<button>', { class: 'cx-submit cx-btn cx-btn-primary', text: 'Enviar' });
	}
	return $formAction;
}

function createFormInput(jQuery, field, type) {
	var $control = jQuery('<div/>', { class: 'cx-input-group' });
	if (field.labels !== undefined) {
		var $label = createFormInputLabel(jQuery, field.labels[0], field.required);
		$control.append($label);
	}
	var $input = jQuery('<input/>', { type: type, class: 'cx-form-control cx-input cx-' + field.type });
	if (field.name !== undefined) {
		$input.attr('name', field.name);
	}
	if (field.placeholder !== undefined) {
		$input.attr('placeholder', field.placeholder);
	}
	if (field.selections !== undefined) {
		$input.val(field.selections);
	}
	addValidationMarkers(jQuery, field, $input);
	$control.append($input);
	return $control;
}

function createFormInputDate(jQuery, field) {
	var $formInput = jQuery('<div/>');
	var $label = createFormInputLabel(jQuery, field.labels[0], field.required);
	$formInput.append($label);
	var $date = createInputDate(jQuery, field);
	$formInput.append($date);
	return $formInput;
}

function createFormInputDateRange(jQuery, field) {
	var $formInput = jQuery('<div/>');
	var $startDateLabel = createFormInputLabel(jQuery, field.labels[0], field.required);
	$formInput.append($startDateLabel);
	var $startDate = createInputDate(jQuery, field);
	$formInput.append($startDate);
	var $endDateLabel = createFormInputLabel(jQuery, field.labels[1], field.required);
	$formInput.append($endDateLabel);
	var $endDate = createInputDate(jQuery, field);
	$formInput.append($endDate);
	return $formInput;
}

function createFormInputEmail(jQuery, field) {
	var $formInput = jQuery('<div/>');
	var $emailFormInput = createFormInput(jQuery, field, 'email');
	$formInput.append($emailFormInput);
	var messages = field.messages;
	if (messages !== undefined && field.show_messages == true) {
		var $textAreaFormInput = createFormInputTextArea(jQuery, messages.labels, messages.placeholder, messages.max_length, messages.min_length);
		$formInput.append($textAreaFormInput);
	}
	return $formInput;
}

function createFormInputLabel(jQuery, label, isRequired) {
	var $labelContainer = jQuery('<div/>', { class: 'cx-control-label' });
	if (label !== undefined) {
		if (isRequired === true) {
			var $requiredField = jQuery('<span/>', { class: 'cx-input-required', text: '*' });
			$labelContainer.append($requiredField);
		}
		var $label = jQuery('<label/>', { text: label });
		$labelContainer.append($label);
	}
	return $labelContainer;
}

function createFormInputSelect(jQuery, field) {
	var $formInput = jQuery('<div/>');
	var $formInputGroup = jQuery('<div/>', { class: 'cx-input-group' });
	var $label = createFormInputLabel(jQuery, field.labels[0], field.required);
	$formInputGroup.append($label);
	var $select = jQuery('<select/>', { class: 'cx-form-control cx-input' });
	var options = field.options;
	for (var i = 0; i < options.length; i++) {
		var option = options[i];
		var $option = jQuery('<option/>', { value: option.value, text: option.label });
		$select.append($option);
	}
	$formInputGroup.append($select);
	$formInput.append($formInputGroup);
	return $formInput;
}

function createFormInputTextArea(jQuery, label, placeholder, maxLength, minLength) {
	var $formInput = jQuery('<div/>');
	var $formInputGroup = jQuery('<div/>', { class: 'cx-input-group' });
	var $label = createFormInputLabel(jQuery, label, false);
	$formInputGroup.append($label);
	var $textArea = jQuery('<textarea/>', { class: 'cx-form-control cx-input', maxLength: maxLength, minLength: minLength, placeholder: placeholder });
	addValidationMarkers(jQuery, { 'max_length': maxLength.toString(), 'min_length': minLength.toString() }, $textArea);
	$formInputGroup.append($textArea);
	$formInput.append($formInputGroup);
	return $formInput;
}

function createInputContextButton(jQuery, inputContext) {
	var $form = jQuery('<div/>', { class: 'cx-watson-input cx-watson-button' });
	var $formInputs = jQuery('<div/>', { class: 'cx-form-inputs' });
	var choices = inputContext.options.choices;
	if (choices.length == 0) {
		console.log('Ignoring input context button without choices');
		return null;
	}
	var inputButtons = createInputDefaultButtons(jQuery, choices);
	for (var i = 0; i < inputButtons.length; i++) {
		$formInputs.append(inputButtons[i]);
	}
	return $form.append($formInputs);
}

function createInputContextButtonSingleHorizontal(jQuery, inputContext) {
	var $form = jQuery('<div/>', { class: 'cx-watson-input cx-watson-button-single-horizontal' });
	var $formInputs = jQuery('<div/>', { class: 'cx-form-inputs' });
	var choices = inputContext.options.choices;
	if (choices.length == 0) {
		console.log('Ignoring input context button single horizontal without choices');
		return null;
	}
	var inputButtons = createInputButtons(jQuery, choices);
	for (var i = 0; i < inputButtons.length; i++) {
		$formInputs.append(inputButtons[i]);
	}
	return $form.append($formInputs);
}

function createInputContextFeedback(jQuery, inputContext) {
	var $form = jQuery('<div/>', { class: 'cx-watson-input cx-watson-feedback', text: 'Â¿La respuesta fue Ãºtil?' });
	var $formInputs = jQuery('<div/>', { class: 'cx-form-inputs' });
	var $yesButton = jQuery('<button/>', { class: 'cx-form-control cx-input cx-btn cx-btn-default', text: 'SÃ­' });
	$yesButton.data('method', 'feedback');
	$yesButton.data('value', 'Y');
	$yesButton.data('id', inputContext.feedback.id);
	$formInputs.append($yesButton);
	var $noButton = jQuery('<button/>', { class: 'cx-form-control cx-input cx-btn', text: 'No' });
	$noButton.data('method', 'feedback');
	$noButton.data('value', 'N');
	$noButton.data('id', inputContext.feedback.id);
	$formInputs.append($noButton);
	return $form.append($formInputs);
}

function createInputContextForm(jQuery, inputContext) {
	var $form = jQuery('<div/>', { class: 'cx-watson-input cx-watson-form cx-form-wrapper' });
	var $formInputs = jQuery('<div/>', { class: 'cx-form-inputs' });
	for (var i = 0; i < inputContext.fields.length; i++) {
		var field = inputContext.fields[i];
		if (field.type !== undefined) {
			var formInput;
			switch (field.type) {
				case 'combobox':
					formInput = createFormInputSelect(jQuery, field);
					break;
				case 'date':
					formInput = createFormInputDate(jQuery, field);
					break;
				case 'date-range':
					formInput = createFormInputDateRange(jQuery, field);
					break;
				case 'decimal':
					formInput = createFormInput(jQuery, field, 'number');
					break;
				case 'email':
					formInput = createFormInputEmail(jQuery, field);
					break;
				case 'number':
					formInput = createFormInput(jQuery, field, 'number');
					break;
				case 'text':
					formInput = createFormInput(jQuery, field, 'text');
					break;
				case 'option':
					formInput = createFormInputSelect(jQuery, field);
					break;
				case 'password':
					formInput = createFormInput(jQuery, field, 'password');
					break;
				default:
					console.log('Unsupported field type: [' + field.type + ']');
					break;
			}
			if (field.visible === false) {
				formInput.hide();
			}
			if (formInput !== undefined) {
				$formInputs.append(formInput);
			}
		}
	}
	var $formAction = createFormAction(jQuery, inputContext.action);
	return $form.append($formInputs, $formAction);
}

function createInputContextList(jQuery, inputContext) {
	var $form = jQuery('<div/>', { class: 'cx-watson-input cx-watson-list' });
	if (inputContext.subtype !== undefined) {
		$form.addClass('cx-watson-list-' + inputContext.subtype + 's');
	}
	var $formInputs = jQuery('<div/>');
	if (inputContext.subtype !== undefined) {
		$formInputs.addClass('cx-input-' + inputContext.subtype + 's');
	}
	var options = inputContext.options;
	var choices = options.choices;
	if (choices.length == 0) {
		console.log('Empty input context list received');
		return null;
	}
	if (options.type !== undefined) {
		$form.data('type', options.type);
	}
	var formInputs = [];
	switch (inputContext.subtype) {
		case 'button':
			formInputs = createInputButtons(jQuery, choices);
			break;
		case 'card':
			$form.append(jQuery('<div/>', { class: 'nav nav-left disabled non-selectable', text: '<' }));
			formInputs = createInputCards(jQuery, choices);
			break;
		default:
			formInputs = createInputSelect(jQuery, choices);
			break;
	}
	for (var i = 0; i < formInputs.length; i++) {
		$formInputs.append(formInputs[i]);
	}
	$form.append($formInputs);
	if (inputContext.subtype == 'card') {
		$form.append(jQuery('<div/>', { class: 'nav nav-right non-selectable', text: '>' }));
	}
	return $form;
}

function createInputContextTable(jQuery, inputContext) {
	var choices = inputContext.options.choices;
	var $tableContainer = jQuery('<div/>', { class: 'cx-watson-input cx-watson-table' });
	var $table = jQuery('<table/>', { class: 'cx-input cx-table ' + inputContext.subtype });
	var $tableHead = jQuery('<thead/>');
	var $tableBody = jQuery('<tbody/>');
	switch (inputContext.subtype) {
		case 'clarifications':
			var $headerRow = jQuery('<tr/>');
			$headerRow.append(jQuery('<th/>', { width: '30%' }));
			$headerRow.append(jQuery('<th/>', { width: '30%' }));
			$headerRow.append(jQuery('<th/>', { width: '30%' }));
			$headerRow.append(jQuery('<th/>', { width: '10%' }));
			$tableHead.append($headerRow);
			$table.append($tableHead);
			appendMonthNavigator(jQuery, $table, $tableBody, choices);
			for (var i = 0; i < choices.length; i++) {
				var clarification = choices[i];
				if (clarification.date.length == 0) {
					console.log('Skipping clarification without date');
					continue;
				}
				var clarificationTimestamp = getChoiceTimestamp(clarification.date);
				if (clarificationTimestamp == null) {
					console.log('Skipping clarification with invalid date [' + clarification.date + ']');
					continue;
				}
				var $row = jQuery('<tr/>');
				// Cell 1
				var $cell1 = jQuery('<td/>');
				$cell1.append(jQuery('<div/>', { class: 'clar-product', text: clarification.product.name }));
				$cell1.append(jQuery('<div/>', { class: 'clar-date', text: formatTimestamp(clarificationTimestamp, 'dd/mm/yyyy') }));
				$row.append($cell1);
				// Cell 2
				var $cell2 = jQuery('<td/>');
				$cell2.append(jQuery('<div/>', { class: 'clar-product-number', text: '****' + clarification.product.number }));
				$row.append($cell2);
				// Cell 3
				var $cell3 = jQuery('<td/>');
				$cell3.append(jQuery('<div/>', { class: 'clar-status', text: clarification.status }));
				$cell3.append(jQuery('<td/>', { class: 'clar-number', text: clarification.folio }));
				$row.append($cell3);
				// Cell 4
				var $cell4 = jQuery('<td/>', { class: 'cx-details' });
				$cell4.data('message', clarification.folio);
				$cell4.data('display-message', clarification.folio);
				$cell4.append(jQuery('<div/>', { text: '>' }));
				$row.append($cell4);
				$row.data('timestamp', clarificationTimestamp);
				$row.hide();
				$tableBody.append($row);
			}
			break
		case 'movements':
			var $headerRow = jQuery('<tr/>');
			$headerRow.append(jQuery('<th/>', { width: '40%' }));
			$headerRow.append(jQuery('<th/>', { width: '40%' }));
			$headerRow.append(jQuery('<th/>', { width: '20%' }));
			$tableHead.append($headerRow);
			$table.append($tableHead);
			appendMonthNavigator(jQuery, $table, $tableBody, choices);
			for (var i = choices.length - 1; i >= 0; i--) {
				var movement = choices[i];
				var movementTimestamp = getChoiceTimestamp(movement.date);
				if (movementTimestamp == null) {
					continue;
				}
				var $row = jQuery('<tr/>', { class: 'mov' });
				$row.append(jQuery('<td/>', { class: 'mov-concept', text: movement.concept }));
				$row.append(jQuery('<td/>', { class: 'mov-amount', text: formatCurrency(movement.amount, movement.currency), rowspan: 2 }));
				var $movDetails = jQuery('<td/>', { class: 'cx-details', text: '>', rowspan: 2 });
				$movDetails.data('message', movement.reference_number);
				$movDetails.data('display-message', movement.concept);
				$row.append($movDetails);
				$row.data('timestamp', movementTimestamp);
				$row.hide();
				$tableBody.append($row);
				$row = jQuery('<tr/>');
				$row.append(jQuery('<td/>', { class: 'mov-date', colspan: 3, text: formatTimestamp(movementTimestamp, 'dd/mm/yyyy') }));
				$row.data('timestamp', movementTimestamp);
				$row.hide();
				$tableBody.append($row);
			}
			break;
		default:
			console.log('Unsupported table subtype: [' + table.subtype + ']');
			break;
	}
	$table.append($tableBody);
	$tableContainer.append($table);
	var cancel = inputContext.cancel;
	if (cancel !== undefined && cancel.enable === "true") {
		var $cancelButton = createInputButton(jQuery, { name: cancel.label, value: cancel.code });
		$tableContainer.append($cancelButton);
	}
	return $tableContainer[0];
}

function createInputButton(jQuery, field) {
	var $button = jQuery('<button/>', { class: 'cx-form-control cx-input cx-btn', text: field.name });
	$button.data('message', field.value);
	if (field.value === 'accept') {
		$button.addClass('cx-btn-default');
	}
	return $button;
}

function createInputButtons(jQuery, choices) {
	var inputButtons = [];
	for (var i = 0; i < choices.length; i++) {
		var choice = choices[i];
		if (choice.type !== undefined) {
			var $inputButton;
			switch (choice.type) {
				case 'string':
					$inputButton = createInputButton(jQuery, choice);
					break;
				default:
					console.log('Unsupported choice type: [' + choice.type + ']');
					break;
			}
			if ($inputButton !== undefined) {
				inputButtons.push($inputButton);
			}
		}
	}
	return inputButtons;
}

function createInputCards(jQuery, choices) {
	var inputCards = [];
	for (var i = 0; i < choices.length; i++) {
		var choice = choices[i];
		var $inputCard = jQuery('<div/>', { class: 'cx-input cx-card' });
		if (choice.enabled === false) {
			$inputCard.addClass('disabled');
		}
		$inputCard.append(jQuery('<div/>', { class: 'acct-desc overflow', text: choice.account_description }));
		var accountName;// = choice.account_name;
		if (accountName === undefined || accountName.length === 0) {
			accountName = '**** **** **** ';
		}
		var $accountNumberContainer = jQuery('<div/>', { class: 'acct-number-container' });
		var $accountLabel = jQuery('<div/>', { class: 'acct-name overflow', text: accountName });
		var $accountNumber = jQuery('<div/>', { class: 'acct-number', text: choice.account_number });
		$accountNumberContainer.append($accountLabel, $accountNumber);
		$inputCard.append($accountNumberContainer);
		var label = choice.label;
		if (isNaN(label) === false && choice.currency_type !== undefined) {
			label = formatCurrency(label, choice.currency_type);
		}
		var $acctSelector = jQuery('<div/>', { class: 'acct-selector', text: label });
		$acctSelector.data('message', choice.value);
		$acctSelector.data('display-message', choice.account_description + ' ****' + choice.account_number);
		$inputCard.append($acctSelector);
		inputCards.push($inputCard);
	}
	return inputCards;
}

function createInputDefaultButtons(jQuery, choices) {
	var inputButtons = [];
	for (var i = 0; i < choices.length; i++) {
		var choice = choices[i];
		if (choice.type !== undefined) {
			var $inputButton;
			switch (choice.type) {
				case 'string':
					$inputButton = createInputDefaultButton(jQuery, choice);
					break;
				default:
					console.log('Unsupported choice type: [' + choice.type + ']');
					break;
			}
			if ($inputButton !== undefined) {
				inputButtons.push($inputButton);
			}
		}
	}
	return inputButtons;
}

function createInputDate(jQuery, field) {
	var $dateContainer = jQuery('<div/>', { class: 'cx-input-group' });
	var $date = jQuery('<input/>', { type: 'date', class: 'cx-form-control cx-input cx-date-range' });
	if (field.max_date !== undefined) {
		var maxDateMatch = field.max_date.match(ddmmyyyyAcceptableDateRegex);
		if (maxDateMatch == null) {
			var maxDays;
			if (field.max_date === '0') {
				maxDays = 0;
			} else {
				maxDays = parseInt(field.max_date.substring(1));
			}
			if (isNaN(maxDays) === false) {
				var maxTimestamp = new Date().getTime() + (maxDays * 24 * 60 * 60 * 1000);
				$date.attr('max', formatTimestamp(maxTimestamp, 'yyyy-mm-dd'));
			} else {
				console.log('Invalid max_date field [' + field.max_date + ']');
			}
		} else {
			var day = parseInt(maxDateMatch[1]);
			var month = parseInt(maxDateMatch[2]);
			var year = parseInt(maxDateMatch[3]);
			var maxDate = new Date(year, month - 1, day);
			$date.attr('max', formatDate(maxDate, 'yyyy-mm-dd'));
		}
	}
	if (field.min_date !== undefined) {
		var minDateMatch = field.min_date.match(ddmmyyyyAcceptableDateRegex);
		if (minDateMatch === null) {
			var minDays;
			if (field.min_date === '0') {
				minDays = 0;
			} else {
				minDays = parseInt(field.min_date.substring(1));
			}
			if (isNaN(minDays) === false) {
				var minTimestamp = new Date().getTime() - (minDays * 24 * 60 * 60 * 1000);
				$date.attr('min', formatTimestamp(minTimestamp, 'yyyy-mm-dd'));
			} else {
				console.log('Invalid min_date field [' + field.min_date + ']');
			}
		} else {
			var day = parseInt(minDateMatch[1]);
			var month = parseInt(minDateMatch[2]);
			var year = parseInt(minDateMatch[3]);
			var minDate = new Date(year, month - 1, day);
			$date.attr('min', formatDate(minDate, 'yyyy-mm-dd'));
		}
	}
	if (field.selections !== undefined && field.selections.length > 0) {
		var selectionMatch = field.selections[0].match(ddmmyyyyAcceptableDateRegex);
		if (selectionMatch !== null) {
			var day = parseInt(selectionMatch[1]);
			var month = parseInt(selectionMatch[2]);
			var year = parseInt(selectionMatch[3]);
			var minDate = new Date(year, month - 1, day);
			$date.val(formatDate(minDate, 'yyyy-mm-dd'));
		}
	}
	addValidationMarkers(jQuery, field, $date);
	$dateContainer.append($date);
	return $dateContainer;
}

function createInputDefaultButton(jQuery, field) {
	var $button = jQuery('<button/>', { class: 'cx-form-control cx-input cx-btn' });
	$button.append(jQuery('<span/>', { class: 'field-name', text: field.name }));
	$button.append(jQuery('<span/>', { class: 'field-value', text: '***' + field.value }));
	$button.data('message', field.value);
	return $button;
}

function createInputSelect(jQuery, choices) {
	var $select = jQuery('<select/>', { class: 'cx-form-control cx-input' });
	for (var i = 0; i < choices.length; i++) {
		var choice = choices[i];
		var $choice = jQuery('<option/>', { value: choice.value, text: choice.name });
		$select.append($choice);
	}
	return $select;
}

function createCurrencyFromPlaceholder(jQuery, placeholder) {
	var currency = placeholder.content.currency;
	var text = formatCurrency(currency.value, currency.type);
	return jQuery('<span/>', { text: text, class: 'cx-output cx-currency' })[0];
}

function createDiscoveryFromPlaceholder(jQuery, placeholder) {
	var discovery = placeholder.content.discovery;
	var text = discovery.brief_message;
	return jQuery('<span/>', { text: text, class: 'cx-output cx-discovery' })[0];
}

function createImageFromPlaceholder(jQuery, placeholder) {
	var image = placeholder.content.image;
	return jQuery('<img/>', { src: image.url, alt: image.caption, class: 'cx-output cx-image' })[0];
}

function createItalicsFromPlaceholder(jQuery, placeholder) {
	var italics = placeholder.content.italics;
	italics = italics.replace(/\/n/g, '<br />');
	var result = jQuery('<i/>', { class: 'cx-output cx-italics' });
	result.html(italics);
	return result[0];
}

function createLinkFromPlaceholder(jQuery, placeholder) {
	var link = placeholder.content.link;
	var url = link.url;
	if (url.length > 4) {
		if (url.indexOf(':') === -1) {
			url = 'http://' + url;
		}
	}
	return jQuery('<a/>', { href: url, text: link.anchor, target: '_blank', rel: 'noopener noreferrer', class: 'cx-output cx-link' })[0];
}

function modalBoxButtonClick() {
	var modalBox = $("#modalBox");
	if (modalBox) {
		jQuery('.modal').remove();
	}
}

function createModal(jQuery, title, subtitle, $modalContent) {
	var $webchat = jQuery('.cx-webchat');
	var height = $webchat.height();
	var width = $webchat.width();
	var $modal = jQuery('<div/>', { class: 'modal' });
	if ($modal) {
		if ($modal.length > 0) {
			$modal[0].id = 'modalBox';
		}
	}
	$modal.css('display', 'block');
	var $modalContentContainer = jQuery('<div/>', { class: 'modal-content', height: height, width: width });
	var $iconContainer = jQuery('<div/>', { class: 'cx-icon-container' });
	var $iconButton = jQuery('<button/>', { class: 'cx-icon cx-button-close' });
	if ($iconButton) {
		$iconButton.removeAttr('onClick');
		$iconButton.attr('onClick', "modalBoxButtonClick();");
	}
	var $icon = window._genesys.widgets.common.Generate.Icon('close');
	$iconButton.append($icon);
	$iconContainer.append($iconButton);
	$modalContentContainer.append($iconContainer);
	var $title = jQuery('<div/>', { class: 'cx-title', text: title });
	var $subtitle = jQuery('<div/>', { class: 'cx-subtitle', text: subtitle });
	$modalContentContainer.append($title, $subtitle, $modalContent);
	return $modal.append($modalContentContainer);
}

function createMultimediaFromPlaceholder(jQuery, placeholder) {
	var multimedia = placeholder.content.multimedia;
	var multimediaElements = [];
	for (var i = 0; i < multimedia.length; i++) {
		var multimediaElement = multimedia[i];
		var html = null;
		switch (multimediaElement.type) {
			case 'audio':
				html = createOutputModalAudio(jQuery, multimediaElement);
				break;
			case 'image':
				html = createOutputModalImage(jQuery, multimediaElement);
				break;
			case 'video':
				html = createOutputModalVideo(jQuery, multimediaElement);
				break;
			default:
				console.log('Unsupported multimedia type: [' + multimediaElement.type + ']');
				break;
		}
		if (html !== null) {
			multimediaElements.push(html);
		}
	}
	return multimediaElements;
}

function createMultimediaModal(jQuery, placeholder, $modalContent) {
	var $div = jQuery('<div/>', { class: 'cx-output cx-multimedia' });
	var $title = jQuery('<img/>', { src: placeholder.title });
	var $description = jQuery('<div/>', { text: placeholder.description, class: 'multimedia-desc' });
	var $linkContainer = jQuery('<div/>', { class: 'link-container' });
	var $linkName = jQuery('<a/>', { text: placeholder.linkName, class: 'multimedia-link-name' });
	$linkContainer.append($linkName);
	var $modal = jQuery('<div/>', { class: 'modal' });
	var $modalContentContainer = jQuery('<div/>', { class: 'modal-content', height: placeholder.size.modalHeight, width: placeholder.size.modalWidth });
	$modal.append($modalContentContainer.append($modalContent));
	return $div.append($title, $description, $linkContainer, $modal)[0];
}

function createOutputHtml(jQuery, placeholder, placeholders) {
	var html = '';
	// currency
	var currency = placeholder.content.currency;
	if (currency !== undefined) {
		var $currency = createCurrencyFromPlaceholder(jQuery, placeholder);
		html = $currency.outerHTML;
	}
	// discovery
	var discovery = placeholder.content.discovery;
	if (discovery !== undefined) {
		var $discovery = createDiscoveryFromPlaceholder(jQuery, placeholder);
		html = $discovery.outerHTML;
	}
	// image
	var image = placeholder.content.image;
	if (image !== undefined) {
		var $image = createImageFromPlaceholder(jQuery, placeholder);
		html = $image.outerHTML;
	}
	// italics
	var italics = placeholder.content.italics;
	if (italics !== undefined) {
		var $italics = createItalicsFromPlaceholder(jQuery, placeholder);
		html = $italics.outerHTML;
	}
	// multimedia
	var multimedia = placeholder.content.multimedia;
	if (multimedia !== undefined) {
		var multimediaElements = createMultimediaFromPlaceholder(jQuery, placeholder);
		for (var i = 0; i < multimediaElements.length; i++) {
			html = html + multimediaElements[i].outerHTML;
		}
	}
	// link
	var link = placeholder.content.link;
	if (link !== undefined) {
		var $link = createLinkFromPlaceholder(jQuery, placeholder);
		html = $link.outerHTML;
	}
	// list
	var list = placeholder.content.list;
	if (list !== undefined) {
		switch (list.type) {
			case 'bullet':
			case 'order':
				processRecursiveList(jQuery, placeholder, placeholders);
				var $list = createUnorderedListFromPlaceholder(jQuery, placeholder);
				html = $list.outerHTML;
				break;
			case 'listSidebar':
				renderListSidebar(jQuery, placeholder);
				html = '';
				break;
			default:
				console.log('Unsupported list type: [' + list.type + ']');
				break;
		}
	}
	// string
	var string = placeholder.content.string;
	if (string !== undefined) {
		var $string = createStringFromPlaceholder(jQuery, placeholder);
		html = $string.outerHTML;
	}
	// table
	var table = placeholder.content.table;
	if (table !== undefined) {
		var $table = createTableFromPlaceholder(jQuery, placeholder);
		html = $table.outerHTML;
	}
	// very_important_field
	var veryImportantField = placeholder.content.very_important_field;
	if (veryImportantField !== undefined) {
		var $veryImportantField = createVeryImportantFieldFromPlaceholder(jQuery, placeholder);
		html = $veryImportantField.outerHTML;
	}
	return html;
}

function createOutputModalAudio(jQuery, placeholder) {
	var $audio = jQuery('<audio/>', { controls: 'controls' });
	var $source = jQuery('<source/>', { src: placeholder.link, type: 'audio/' + placeholder.audio_type });
	$audio.append($source);
	return createMultimediaModal(jQuery, placeholder, $audio);
}

function createOutputModalImage(jQuery, placeholder) {
	var $image = jQuery('<img/>', { src: placeholder.link });
	return createMultimediaModal(jQuery, placeholder, $image);
}

function createOutputModalVideo(jQuery, placeholder) {
	var $video = jQuery('<video/>', { controls: 'controls' });
	var $source = jQuery('<source/>', { src: placeholder.link, type: 'video/' + placeholder.video_type });
	$video.append($source);
	return createMultimediaModal(jQuery, placeholder, $video);
}

function createStringFromPlaceholder(jQuery, placeholder) {
	var string = placeholder.content.string;
	return jQuery('<span/>', { text: string, class: 'cx-output cx-string' })[0];
}

function createTableFromPlaceholder(jQuery, placeholder) {
	var table = placeholder.content.table;
	var $table = jQuery('<table/>', { class: 'cx-output cx-table ' + table.type });
	if (table.subtype !== undefined) {
		$table.addClass(table.subtype);
	}
	var $tableHead = jQuery('<thead/>');
	var $headerRow = jQuery('<tr/>');
	$headerRow.append(jQuery('<th/>', { width: '50%' }));
	$headerRow.append(jQuery('<th/>', { width: '50%' }));
	$tableHead.append($headerRow);
	$table.append($tableHead);
	var $tableBody = jQuery('<tbody/>');
	switch (table.type) {
		case 'account_details':
			for (var i = 0; i < table.rows.length; i++) {
				var account = table.rows[i].account;
				switch (account.account_type) {
					case 'creditoapolo':
						var $row = jQuery('<tr/>');
						var $accountHeader = jQuery('<td/>', { colspan: 2 });
						var $accountHeaderDiv = jQuery('<div/>');
						$accountHeaderDiv.append(jQuery('<div/>', { class: 'acct-desc', text: account.account_description }));
						$accountHeaderDiv.append(jQuery('<div/>', { class: 'acct-number', text: '**** **** **** ' + account.account_number }));
						$accountHeaderDiv.append(jQuery('<div/>', { class: 'acct-total-debt', text: formatCurrency(account.total_debt, account.currency_type) }));
						$accountHeader.append($accountHeaderDiv);
						$row.append($accountHeader);
						$tableBody.append($row);
						var rows = [
							['Importe de crÃ©dito', formatCurrency(account.credit_amount, account.currency_type)],
							['Saldo actual', formatCurrency(account.credit_due_amount, account.currency_type)],
							['Saldo vencido', formatCurrency(account.credit_due_amount, account.currency_type)],
							['PrÃ³xima fecha de pago', account.credit_next_payment_date],
							['Monto prÃ³ximo pago', formatCurrency(account.credit_next_payment_amount, account.currency_type)]
						];
						addRows(jQuery, $tableBody, rows);
						break;
					case 'tdc':
						var $row = jQuery('<tr/>');
						var $accountHeader = jQuery('<td/>', { colspan: 2 });
						var $accountHeaderDiv = jQuery('<div/>');
						$accountHeaderDiv.append(jQuery('<div/>', { class: 'acct-desc', text: account.account_description }));
						$accountHeaderDiv.append(jQuery('<div/>', { class: 'acct-number', text: '**** **** **** ' + account.account_number }));
						$accountHeaderDiv.append(jQuery('<div/>', { class: 'acct-min-payment', text: formatCurrency(account.balance_actual, account.currency_type) }));
						$accountHeader.append($accountHeaderDiv);
						$row.append($accountHeader);
						$tableBody.append($row);
						var rows = [
							['Pago mÃ­nimo', formatCurrency(account.minimum_payment, account.currency_type)],
							['Pago para no generar intereses', formatCurrency(account.not_generate_interest_amount, account.currency_type)],
							['Saldo al corte', formatCurrency(account.balance_cutting, account.currency_type)],
							['Fecha lÃ­mite de pago', account.payday_limit],
							['Fecha de corte', account.cutoff_date],
							['CrÃ©dito disponible', formatCurrency(account.balance_available, account.currency_type)],
							['LÃ­mite de crÃ©dito', formatCurrency(account.credit_limit, account.currency_type)]
						];
						addRows(jQuery, $tableBody, rows);
						break;
					default:
						console.log('Unsupported account type: [' + account.type + ']');
						break;
				}
			}
			break;
		case 'accounts_list':
			for (var i = 0; i < table.rows.length; i++) {
				var account = table.rows[i].account;
				var balance = account.balance_actual;
				if (balance === undefined) { // TODO: check if this is correct
					balance = account.balance_outstanding;
				}
				var $row = jQuery('<tr/>');
				$row.append(jQuery('<td/>', { text: account.account_description, class: 'acct-desc' }));
				var $balanceCell = jQuery('<td/>', { class: 'acct-balance' });
				if (balance !== undefined) {
					$balanceCell.text(formatCurrency(balance, account.currency_type) /*+ ' ' + account.currency_type*/);
				}
				$row.append($balanceCell);
				$tableBody.append($row);
				$row = jQuery('<tr/>');
				$row.append(jQuery('<td/>', { text: '***' + account.account_number, class: 'acct-number' }));
				$row.append(jQuery('<td/>'));
				$tableBody.append($row);
			}
			break;
		case 'table':
			for (var i = 0; i < table.rows.length; i++) {
				var row = table.rows[i];
				var $row = jQuery('<tr/>');
				for (var j = 0; j < table.headers.length; j++) {
					var column = table.headers[j].column;
					var value = row[column].value;
					var type = row[column].type;
					switch (type) {
						case 'currency':
							value = formatCurrency(value, row[column].format);
							break;
						case 'date':
							value = formatTimestamp(parseInt(value), row[column].format);
							break;
						case 'string':
							break;
						default:
							console.log('Unsupported table value type: [' + value.type + ']');
							break;
					}
					$row.append(jQuery('<td/>', { text: value, class: column }));
				}
				$tableBody.append($row);
			}
			if (table.subtype == 'modal') {
				$table.append($tableBody);
				var $tableContainer = jQuery('<div/>', { class: 'cx-table-container' });
				$tableContainer.append($table);
				return createModal(jQuery, table.title, table.subtitle, $tableContainer)[0];
			}
			break;
		case 'transaction_details':
			var choices = table.rows.map(
				function (currentValue) {
					var result = {};
					var transaction = currentValue.transaction;
					result['date'] = getProperty(transaction, ['operation_date', 'transaction_date']);
					return result;
				});
			appendMonthNavigator(jQuery, $table, $tableBody, choices);
			for (var i = 0; i < table.rows.length; i++) {
				var transaction = table.rows[i].transaction;
				var description = getProperty(transaction, ['operation_description', 'transaction_description', 'operation_concept']);
				var amount = getProperty(transaction, ['operation_amount', 'historical_amount', 'operation_net_amount']);
				var transactionDate = getProperty(transaction, ['operation_date', 'transaction_date']);
				var transactionTimestamp = getChoiceTimestamp(transactionDate);
				if (transactionTimestamp === null) {
					console.log('Skipping transaction with invalid date [' + transactionDate + ']');
					continue;
				}
				var $row = jQuery('<tr/>');
				$row.append(jQuery('<td/>', { text: description, class: 'txn-description', colspan: 2 }));
				$row.attr('data-timestamp', transactionTimestamp);
				$tableBody.append($row);
				$row = jQuery('<tr/>');
				$row.append(jQuery('<td/>', { text: transactionDate, class: 'txn-date' }));
				var $amountCell = jQuery('<td/>', { text: formatCurrency(amount), class: 'txn-amount' });
				if (amount > 0) {
					$amountCell.addClass('txn-amount-positive');
				} else if (amount < 0) {
					$amountCell.addClass('txn-amount-negative');
				}
				$row.append($amountCell);
				$row.attr('data-timestamp', transactionTimestamp);
				$tableBody.append($row);
			}
			break;
		default:
			console.log('Unsupported table type: [' + table.type + ']');
			break;
	}
	$table.append($tableBody);
	return $table[0];
}

function createUnorderedListFromPlaceholder(jQuery, placeholder) {
	var list = placeholder.content.list;
	var listValues = list.values;
	var $list = jQuery('<ul/>');
	for (var i = 0; i < listValues.length; i++) {
		var listValue = listValues[i];
		listValue = listValue.replace('/n', '<br />');
		$list.append(jQuery('<li>' + listValue + '</li>'));
	}
	if (list.sub_type !== undefined) {
		$list.css('list-style-type', list.sub_type);
	}
	return $list[0];
}

function createVeryImportantFieldFromPlaceholder(jQuery, placeholder) {
	var veryImportantField = placeholder.content.very_important_field;
	return jQuery('<span/>', { text: veryImportantField, class: 'cx-output cx-very-important-field' })[0];
}

function displayTableRows(jQuery, $table) {
	var $monthNavigator = jQuery($table.find('.cx-month-navigator'));
	if ($monthNavigator.length == 0) {
		return;
	}
	var minRowDisplayedTimestamp = 10000000000000;
	var maxRowDisplayedTimestamp = -10000000000000;
	var minTimestamp = $table.data('min_timestamp');
	var maxTimestamp = $table.data('max_timestamp');
	var $navMonth = jQuery($monthNavigator.find('.cx-nav-month'));
	var $navMonthLeft = jQuery($monthNavigator.find('.cx-nav-month-left'));
	var $navMonthRight = jQuery($monthNavigator.find('.cx-nav-month-right'));
	var currentTimestamp = $monthNavigator.data('current_timestamp');
	var currentDate = new Date(currentTimestamp);
	var rows = $table.find('tbody tr');
	for (var i = 0; i < rows.length; i++) {
		var $row = jQuery(rows[i]);
		var rowTimestamp = $row.data('timestamp');
		if (rowTimestamp === undefined) {
			continue;
		}
		var rowDate = new Date(rowTimestamp);
		if (rowDate.getMonth() == currentDate.getMonth()) {
			$row.css({ 'display': '' });
			if (rowTimestamp < minRowDisplayedTimestamp) {
				minRowDisplayedTimestamp = rowTimestamp;
			}
			if (rowTimestamp > maxRowDisplayedTimestamp) {
				maxRowDisplayedTimestamp = rowTimestamp;
			}
		} else {
			$row.css({ 'display': 'none' });
		}
	}
	$navMonth.text(formatMonth(currentDate));
	if (minTimestamp === minRowDisplayedTimestamp) {
		$navMonthLeft.addClass('disabled');
	} else {
		$navMonthLeft.removeClass('disabled');
	}
	if (maxTimestamp === maxRowDisplayedTimestamp) {
		$navMonthRight.addClass('disabled');
	} else {
		$navMonthRight.removeClass('disabled');
	}
}

function formatCurrency(amount, currency) {
	if (amount === undefined) {
		return null;
	}
	amount = amount.toString();
	var amountArray = amount.split('.');
	if (amountArray.length > 2) {
		amount = amountArray[0] + "." + amountArray[1];
	}
	if (currency === undefined) {
		currency = 'MXN';
	}
	if (currency === 'MXP' || currency === '01' || currency === 'MN') {
		currency = 'MXN';
	}
	var result = customFormatCurrency(amount, currency);
	//var formatter = new Intl.NumberFormat('es-MX', { style: 'currency', currency: currency });
	//result = formatter.format(amount.replace(',', ''));
	return result;
}

function customFormatCurrency(amount, currency) {
	var formattedAmount = null;
	var numberAmount = parseFloat(amount.replace(',', '')).toFixed(2);
	if (numberAmount >= 1000 && numberAmount < 10000 && currency === 'MXN') {
		var stringAmount = numberAmount.toString();
		formattedAmount = '$' + stringAmount.substring(0, 1) + ',' + stringAmount.substring(1, stringAmount.length);
	} else if (numberAmount <= -1000 && numberAmount > -10000 && currency === 'MXN') {
		var stringAmount = numberAmount.toString();
		formattedAmount = '-$' + stringAmount.substring(1, 2) + ',' + stringAmount.substring(2, stringAmount.length);
	} else {
		var formatter = new Intl.NumberFormat('es-MX', { style: 'currency', currency: currency });
		formattedAmount = formatter.format(amount.replace(',', ''));
	}
	return formattedAmount;
}

function formatDate(date, format) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
	var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
	var hours = date.getHours() <= 12 ? date.getHours() : date.getHours() - 12;
	var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	var amOrPm = date.getHours() < 12 ? 'AM' : 'PM';
	var result = format;
	result = result.replace('yyyy', year);
	result = result.replace('mm', month);
	result = result.replace('dd', day);
	return result;
}

function formatMonth(date) {
	return new Intl.DateTimeFormat('es-MX', { month: 'long' }).format(date);
}

function formatTimestamp(timestamp, format) {
	var date = new Date(timestamp);
	return formatDate(date, format);
}

function getChoiceTimestamp(date) {
	if (date === undefined) {
		return null;
	}

	if (date.day !== undefined && date.month !== undefined && date.year !== undefined) {
		var year = parseInt(date.year);
		var month = parseInt(date.month);
		var day = parseInt(date.day);
		date = year.toString() + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
	}

	var choiceTimestamp;
	// date property can be number or string

	date = date.toString();
	var choiceDateMatch = date.match(ddmmyyyyAcceptableDateRegex);
	if (choiceDateMatch === null) {
		choiceDateMatch = date.match(yyyymmddAcceptableDateRegex);
		if (choiceDateMatch === null) {
			choiceTimestamp = parseInt(date);
		} else {
			var day = parseInt(choiceDateMatch[3]);
			var month = parseInt(choiceDateMatch[2]);
			var year = parseInt(choiceDateMatch[1]);
			var choiceDate = new Date(year, month - 1, day);
			choiceTimestamp = choiceDate.getTime();
		}
	} else {
		var day = parseInt(choiceDateMatch[1]);
		var month = parseInt(choiceDateMatch[2]);
		var year = parseInt(choiceDateMatch[3]);
		var choiceDate = new Date(year, month - 1, day);
		choiceTimestamp = choiceDate.getTime();
	}
	return choiceTimestamp;
}

function getPlaceholderByName(placeholderName, placeholders) {
	//console.log('getPlaceholderByName()');
	//console.log('placeholderName: [{' + placeholderName + '}]');
	//console.log('placeholders: [{' + placeholders + '}]');
	var placeholder;
	if (placeholders !== undefined) {
		for (var i = 0; i < placeholders.length; i++) {
			if (placeholders[i].name === placeholderName) {
				placeholder = placeholders[i];
				break;
			}
		}
	}
	//console.log('placeholder: [{' + placeholder + '}]');
	return placeholder;
}

function getProperty(object, properties) {
	var result;
	for (var i = 0; i < properties.length; i++) {
		var propertyValue = object[properties[i]];
		if (propertyValue !== undefined) {
			result = propertyValue;
			break;
		}
	}
	return result;
}

function htmlEscape(str) {
	var escaped = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		"'": '&#39;',
		'"': '&quot;'
	};
	return str.replace(/[&<>'"]/g, function (m) {
		return escaped[m];
	});
}

function htmlUnescape(str) {
	var re = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
	var unescaped = {
		'&amp;': '&',
		'&#38;': '&',
		'&lt;': '<',
		'&#60;': '<',
		'&gt;': '>',
		'&#62;': '>',
		'&apos;': "'",
		'&#39;': "'",
		'&quot;': '"',
		'&#34;': '"'
	};
	return str.replace(re, function (m) {
		return unescaped[m];
	});
}

function processRecursiveList(jQuery, placeholder, placeholders) {
	var listValues = placeholder.content.list.values;
	for (var i = 0; i < listValues.length; i++) {
		var listValue = listValues[i];
		var placeholderMatches = listValue.match(placeholderHolderRegex);
		if (placeholderMatches === null) {
			continue;
		}
		for (var j = 0; j < placeholderMatches.length; j++) {
			var placeholderMatch = placeholderMatches[j];
			var placeholderName = placeholderMatch.slice(1, -1);
			var placeholder = getPlaceholderByName(placeholderName, placeholders);
			if (placeholderMatches !== null) {
				var html = createOutputHtml(jQuery, placeholder, placeholders);
				listValues[i] = listValues[i].replace(placeholderMatch, html);
			}
		}
	}
}

function processSecurityResponse(jQuery, customNotice) {
	if (customNotice.auth === undefined) {
		jQuery('.cx-fixed').remove();
		return false;
	}
	jQuery('.cx-fixed button').removeClass('cx-disabled');
	if (customNotice.error === undefined) {
		jQuery('.cx-fixed').remove();
		return false;
	} else {
		if (customNotice.error.user_message !== undefined) {
			jQuery('.cx-fixed .cx-input').val('');
			jQuery('.cx-fixed .cx-error').html(customNotice.error.user_message);
		}
		return true;
	}
}

function renderFixedWindow(jQuery, className, title, description, extraContent, submitLabel, resetLabel) {
	var $webchat = jQuery('.cx-webchat');
	var height = $webchat.height();
	var width = $webchat.width();
	var top = $webchat.position().top;
	var left = $webchat.position().left;
	var $fixedWindow = jQuery('<div/>', { class: className + ' cx-fixed', height: height, width: width }).css({ top: top, left: left });
	var $header = jQuery('<div/>', { class: 'cx-header' });
	$fixedWindow.append($header);
	var $content = jQuery('<div/>', { class: 'cx-content' });
	if (title !== null) {
		var $title = jQuery('<div/>');
		$title.append(jQuery('<h3/>', { class: 'cx-title', text: title }));
		$content.append($title);
	}
	if (description !== null) {
		var $description = jQuery('<p/>', { text: description });
		$content.append($description);
	}
	for (var i = 0; i < extraContent.length; i++) {
		$content.append(extraContent[i]);
	}
	if (submitLabel === undefined) {
		submitLabel = 'Aceptar';
	}
	if (resetLabel === undefined) {
		resetLabel = 'Cancelar';
	}
	$content.append(jQuery('<div/>', { class: 'cx-error' }));
	var $formAction = createFormAction(jQuery, { submit_label: submitLabel, reset_label: resetLabel });
	$content.append($formAction);
	$fixedWindow.append($content);
	jQuery('body').append($fixedWindow);
	jQuery(window).resize(function () {
		reposition($fixedWindow, $webchat);
		// this is needed when the window is maximized or restored
		setTimeout(function () { reposition($fixedWindow, $webchat); }, 100);
	});
}

function renderListSidebar(jQuery, placeholder) {
	var $webchat = jQuery('.cx-webchat');
	var height = $webchat.height();
	var width = $webchat.width();
	var top = $webchat.position().top;
	var left = $webchat.position().left - width;
	var $sidebar = jQuery('<div/>', { class: 'cx-sidebar', height: height, width: width }).css({ top: top, left: left });
	var $header = jQuery('<div/>');
	var list = placeholder.content.list;
	if (list.title !== undefined) {
		$header.append(jQuery('<h3/>', { text: list.title }));
		$sidebar.append($header);
	}
	var $list = jQuery('<dl/>');
	var listValues = list.values;
	for (var i = 0; i < listValues.length; i++) {
		var listValue = listValues[i];
		$list.append(jQuery('<dt/>', { text: listValue.title }));
		$list.append(jQuery('<dd/>', { text: listValue.description }));
	}
	$sidebar.append($list);
	jQuery('body').append($sidebar);
	jQuery(window).resize(function () {
		var top = $webchat.position().top;
		var left = $webchat.position().left - width;
		$sidebar.css({ top: top, left: left });
	});
}

function replaceTranscriptPlaceholders(jQuery, customNotice, text) {
	var placeholderMatches = text.match(placeholderHolderRegex);
	if (placeholderMatches === null) {
		return false;
	}
	var placeholders;
	if (customNotice.context !== undefined && customNotice.context.output_context !== undefined) {
		placeholders = customNotice.context.output_context.placeholders;
	}
	for (var i = 0; i < placeholderMatches.length; i++) {
		var placeholderMatch = placeholderMatches[i];
		var placeholderName = placeholderMatch.slice(1, -1);
		var placeholder = getPlaceholderByName(placeholderName, placeholders);
		if (placeholder !== undefined) {
			var html = createOutputHtml(jQuery, placeholder, placeholders);
			replaceTranscriptPlaceholder(jQuery, placeholderMatch, html);
		} else {
			var extraContent = [];
			switch (placeholderName) {
				case 'INCREASE_SEC_LEVEL':
					var description = 'Por favor introduce tu token para completar la transacciÃ³n';
					if (customNotice.auth !== undefined && customNotice.auth.req !== undefined) {
						if (customNotice.auth.req.method === 'elevate') {
							description = 'Por favor introduce el siguiente cÃ³digo en tu aplicaciÃ³n mÃ³vil para obtener tu token celular, posteriormente introduce el token para completar la transacciÃ³n:';
						}
					}
					var $challengeLabel = jQuery('<p/>', { class: 'cx-challenge-label', text: 'Challenge' });
					extraContent.push($challengeLabel);
					var challengeCode = customNotice.context.security_context.increase_security_context.challenge_code;
					var $challengeCode = jQuery('<p/>', { class: 'cx-challenge-code', text: challengeCode });
					extraContent.push($challengeCode);
					var $formInput = createFormInput(jQuery, { type: 'password', name: 'user-response', placeholder: 'TOKEN', required: true }, 'password');
					extraContent.push($formInput);
					renderFixedWindow(jQuery, 'cx-security', 'Seguridad requerida', description, extraContent);
					replaceTranscriptPlaceholder(jQuery, placeholderMatch, '');
					break
				case 'LOGIN':
					var $formInput = createFormInput(jQuery, { type: 'password', name: 'user-response', placeholder: 'Usuario', required: true }, 'password');
					extraContent.push($formInput);
					renderFixedWindow(jQuery, 'cx-login', 'Ingresa tu usuario', null, extraContent);
					replaceTranscriptPlaceholder(jQuery, placeholderMatch, '');
					break;
				default:
					console.log('Cannot find placeholder with name: [' + placeholderName + ']');
					break;
			}
		}
	}
	return true;
}

function replaceTranscriptPlaceholder(jQuery, placeholderMatch, newValue) {
	//console.log('replaceTranscriptPlaceholder');
	//console.log('newValue: [' + newValue + ']');
	var $transcript = jQuery('.cx-transcript');
	var $transcriptMessages = $transcript.find('.cx-message');
	for (var messageIndex = $transcriptMessages.length - 1; messageIndex >= 0; messageIndex--) {
		var $transcriptMessage = $transcriptMessages.eq(messageIndex);
		var $transcriptMessageText = $transcriptMessage.find('.cx-message-text');
		var transcriptMessageTextHtml = $transcriptMessageText.html();
		if (transcriptMessageTextHtml.indexOf(placeholderMatch) >= 0) {
			var newHtml = transcriptMessageTextHtml.replace(placeholderMatch, newValue);
			$transcriptMessageText.html(newHtml);
			if (newHtml.length === 0) {
				$transcriptMessage.hide();
			}
			break;
		} else {
			for (var i = 0; i < html.length; i++) {
				if (html[i] !== undefined) {
					html[i] = html[i].replace(placeholderMatch, newValue);
				}
			}
		}
	}
}

function reposition($element, $webchat) {
	var top = $webchat.position().top;
	var left = $webchat.position().left;
	$element.css({ top: top, left: left });
}

function scrollToCard($container, currentIndex, $navLeft, $navRight) {
	if (currentIndex == 0) {
		$navLeft.addClass('disabled');
		$navRight.removeClass('disabled');
	} else if (currentIndex == $container.children().length - 1) {
		$navLeft.removeClass('disabled');
		$navRight.addClass('disabled');
	} else {
		$navLeft.removeClass('disabled');
		$navRight.removeClass('disabled');
	}
	var $currentElement = $container.children().eq(currentIndex);
	$container.animate({ scrollLeft: $currentElement.prop('offsetLeft') - 54 });
	$container.data('currentIndex', currentIndex);
}

function sendCustomNotice(jQuery, botPlugin, message) {
	botPlugin.command('WebChatService.sendCustomNotice', { message: message })
		.done(function (e) {
			console.log('Custom notice was sent');
			jQuery('.cx-textarea-cell :input').prop('disabled', false);
		}).fail(function (e) {
			console.log('Error while sending custom notice');
			jQuery('.cx-textarea-cell :input').prop('disabled', false);
		});
}

function sendSecurityCustomNotice(jQuery, botPlugin, message) {
	botPlugin.command('WebChatService.sendCustomNotice', { message: message })
		.done(function (e) {
			console.log('[Security] Custom notice was sent');
			setTimeout(function () {
				console.log('[Security] Enabling buttons after custom notice');
				jQuery('.cx-textarea-cell :input').prop('disabled', false);
				var $form = jQuery('.cx-fixed');
				var $submitButton = jQuery($form.find('.cx-submit'));
				var $defaultButton = jQuery($form.find('.cx-btn-default'));
				var $submitTextField = jQuery($form.find('.cx-password'));
				$submitButton.prop("disabled", false);
				$defaultButton.prop("disabled", false);
				$submitTextField.prop("disabled", false);
			}, 3000);
		}).fail(function () {
			console.log('[Security] custom notice was not sent');
			setTimeout(function () {
				console.log('[Security] Enabling buttons after custom notice');
				jQuery('.cx-textarea-cell :input').prop('disabled', false);
				var $form = jQuery('.cx-fixed');
				var $submitButton = jQuery($form.find('.cx-submit'));
				var $defaultButton = jQuery($form.find('.cx-btn-default'));
				var $submitTextField = jQuery($form.find('.cx-password'));
				$submitButton.prop("disabled", false);
				$defaultButton.prop("disabled", false);
				$submitTextField.prop("disabled", false);
			}, 3000);
		});
}

function sendMessage(jQuery, botPlugin, message) {
	botPlugin.command('WebChatService.sendMessage', { message: message })
		.done(function () {
			console.log('Message was sent');
			jQuery('.cx-textarea-cell :input').prop('disabled', false);
		}).fail(function () {
			console.log('Error while sending message');
			jQuery('.cx-textarea-cell :input').prop('disabled', false);
		});
}

function sendMessageUsingCustomNotice(jQuery, botPlugin, message, value, inputContext) {
	botPlugin.command('WebChat.injectMessage', {
		type: 'text',
		text: message.toString(),
		custom: false
	});
	var customNoticeMessage = { method: 'send', message: message, value: value, input_context: inputContext };
	sendCustomNotice(jQuery, botPlugin, JSON.stringify(customNoticeMessage));
}

function submitSecurityForm(jQuery, $form, botPlugin) {	
	$form.find('.cx-error').html('');
	if (validateForm(jQuery, $form) == true) {
		var $submitButton = jQuery($form.find('.cx-submit').not('.cx-disabled'));
		var $defaultButton = jQuery($form.find('.cx-btn-default').not('.cx-disabled'));
		var $submitTextField = jQuery($form.find('.cx-password'));
		$form.off();
		$submitButton.off().addClass('cx-disabled');
		$defaultButton.off().addClass('cx-disabled');
		$submitButton.prop("disabled", true);
		$submitButton.prop("disabled", true);
		$defaultButton.prop("disabled", true);
		$submitTextField.prop("disabled", true);
		var method = null;
		var $userResponse = $form.find('[name=\'user-response\']');
		var userResponse = $userResponse.val();
		if ($form.hasClass('cx-security') == true) {
			method = 'elevate';
		} else if ($form.hasClass('cx-login') == true) {
			method = 'identify';
		} else if ($form.hasClass('cx-identify') == true) {
			method = 'authenticate';
		}
		$form.find('button').addClass('cx-disabled');
		var customNoticeMessage = { method: method, user_response: userResponse };
		sendSecurityCustomNotice(jQuery, botPlugin, JSON.stringify(customNoticeMessage));
	} else {
		var $submitButton = jQuery($form.find('.cx-submit'));
		$submitButton.prop("disabled", false);
	}	
}

function timestampToDateString(timestamp) {
	var date = new Date(timestamp);
	var amOrPm = date.getHours() < 12 ? 'AM' : 'PM';
	var hours = date.getHours() <= 12 ? date.getHours() : date.getHours() - 12;
	var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	return hours + ':' + minutes + ' ' + amOrPm;
}

function validateForm(jQuery, $form) {
	var formInputs = $form.find('.cx-input');
	var result = 1;
	for (var i = 0; i < formInputs.length; i++) {
		var $formInput = jQuery(formInputs[i]);
		result &= validateFormInput($formInput);
	}
	if (result === 1) {
		var formInputsPassword = $form.find('.cx-password');
		if (formInputsPassword) {
			if (formInputsPassword.length === 2) {
				result &= validateFormInputPassword(jQuery, formInputsPassword);
			}
		}
	}
	return result === 1;
}

function validateFormInputPassword(jQuery, formInputsPassword) {
	var $formInput0 = jQuery(formInputsPassword[0]);
	var $formInput1 = jQuery(formInputsPassword[1]);
	if ($formInput0.val() === $formInput1.val()) {
		$formInput0.removeClass('cx-error');
		$formInput1.removeClass('cx-error');
		return true;
	} else {
		$formInput0.addClass('cx-error');
		$formInput1.addClass('cx-error');
		return false;
	}
}

function validateFormInput($formInput) {
	var isRequired = $formInput.data('required');
	if (isRequired === undefined) {
		isRequired = false;
	}
	if (isRequired === true) {
		if ($formInput.val().length === 0) {
			$formInput.addClass('cx-error');
			return false;
		}
	} else {
		if ($formInput.val().length === 0) {
			$formInput.removeClass('cx-error');
			return true;
		}
	}
	if ($formInput.data('max_length') !== undefined) {
		if ($formInput.val().length > $formInput.data('max_length')) {
			$formInput.addClass('cx-error');
			return false;
		} else {
			$formInput.removeClass('cx-error');
		}
	}
	if ($formInput.data('min_length') !== undefined) {
		if ($formInput.val().length < $formInput.data('min_length')) {
			$formInput.addClass('cx-error');
			return false;
		} else {
			$formInput.removeClass('cx-error');
		}
	}
	if ($formInput.attr('max') !== undefined) {
		if (parseFloat($formInput.val()) > parseFloat($formInput.attr('max'))) {
			$formInput.addClass('cx-error');
			return false;
		} else {
			$formInput.removeClass('cx-error');
		}
	}
	if ($formInput.attr('min') !== undefined) {
		if (parseFloat($formInput.val()) < parseFloat($formInput.attr('min'))) {
			$formInput.addClass('cx-error');
			return false;
		} else {
			$formInput.removeClass('cx-error');
		}
	}
	if ($formInput.attr('characters_accepted') !== undefined) {
		var regExp;
		var charactersAccepted = $formInput.attr('characters_accepted');

		if (charactersAccepted === 'A') {
			regExp = /^[A-Z0-9]*$/;
		} else if (charactersAccepted === 'N') {
			regExp = /^\d*$/;
		} else {
			regExp = new RegExp('^' + charactersAccepted + '*$');
		}
		var formInput = $formInput.val();
		if (regExp.test(formInput) === false) {
			$formInput.addClass('cx-error');
			return false;
		} else {
			$formInput.removeClass('cx-error');
		}
	}
	return true;
}

function heartbeat() {
	return true;
}