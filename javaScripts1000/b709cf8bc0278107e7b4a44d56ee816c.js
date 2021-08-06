ï»¿(function (win, obj, doc) {
    var tag = doc.getElementById('_uwc-tag');
    var externalFormRegex = /^https?:\/\//i;
    if (!tag) {
        throw Error("Unable to find the UpstreamWorks's chat tag");
    }
    var host = tag.getAttribute("data-host");
    if (!host) {
        throw Error("Host is not available from UpstreamWorks's chat tag");
    }

    (function () {
        // polyfill
        if (typeof Object.assign != 'function') {
            // Must be writable: true, enumerable: false, configurable: true
            Object.defineProperty(Object, "assign", {
                value: function assign(target, varArgs) { // .length of function is 2
                    'use strict';
                    if (target === null || target === undefined) { // TypeError if undefined or null
                        throw new TypeError('Cannot convert undefined or null to object');
                    }

                    var to = Object(target);

                    for (var index = 1; index < arguments.length; index++) {
                        var nextSource = arguments[index];

                        if (nextSource === null || nextSource === undefined) {
                            continue;
                        }

                        for (var nextKey in nextSource) {
                            // Avoid bugs when hasOwnProperty is shadowed
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                    return to;
                },
                writable: true,
                configurable: true
            });
        }
    })();

    var chatType = {
        REACTIVE: 1,
        PROACTIVE: 2,
        EXTERNAL: 3
    };

    var viewState = {
        MOBILE: 1,
        DESKTOP: 2
    };

    var ui = (function () {
        /**
         * UI Utilities
         */
        var tempProps = null;
        var currentViewState = getViewState();

        function backupTempProps() {
            if (currentViewState === viewState.DESKTOP) {
                return;
            }

            tempProps = {
                position: doc.body.style.position,
                scrollY: win.scrollY
            };

            doc.body.style.position = "fixed";
        }

        function restoreTempProp() {
            if (!tempProps) {
                return;
            }

            doc.body.style.position = tempProps.position;
            win.scroll(0, tempProps.scrollY);

            tempProps = null;
        }

        function onWindowResize(isChatClientVisible) {
            var newViewState = getViewState();

            if (newViewState === currentViewState) {
                return;
            }

            currentViewState = newViewState;

            if (!isChatClientVisible) {
                return;
            }

            if (newViewState === viewState.MOBILE) {
                backupTempProps();
            }
            else {
                restoreTempProp();
            }
        }

        function getViewState() {
            return win.matchMedia("only screen and (max-width: 767px)").matches ?
                viewState.MOBILE :
                viewState.DESKTOP;
        }

        return {
            /**
             * Backup the current position style and vertical scrolling offset
             */
            backupPosition: backupTempProps,
            /**
             * Restore the position style from backup and scroll to the backup position
             */
            restorePositionMobile: restoreTempProp,
            /**
             * Backup or restore position style and scroll position based on the current window size
             */
            onWindowResize: onWindowResize
        };
    })();

    var Listener = (function () {
        'use strict';

        function Listener() {
        }

        Listener.prototype = {
            _handlers: null,
            on: function (event, handler) {
                if (typeof event !== 'string') {
                    throw Error('Invalid event');
                }

                if (typeof handler !== 'function') {
                    throw TypeError('Invalid handler');
                }

                this._handlers[event] = this._handlers[event] || [];
                this._handlers[event].push(handler);
                return this;
            },
            emit: function (event, data) {
                if (typeof event !== 'string') {
                    throw Error('Invalid event', event);
                }

                (this._handlers[event] || []).forEach(function (handler) {
                    try {
                        handler(data);
                    } catch (e) {
                        console.error('Failed running a message handler', e);
                    }
                });
            }
        };

        return Listener;
    })();

    var MessageService = (function () {
        'use strict';

        function MessageService() {
            this._handlers = {};
            this.init();
        }

        MessageService.prototype = new Listener();
        Object.assign(MessageService.prototype, {
            init: function () {
                var _this = this;
                win.addEventListener("message", function (e) {
                    if (e.origin !== host) {
                        return;
                    }

                    if (typeof e.data === 'string') {
                        _this.emit(e.data);
                    }

                    if (typeof e.data === 'object' && typeof e.data.message === 'string') {
                        _this.emit(e.data.message, e.data);
                    }
                });
            }
        });

        MessageService.prototype.constructor = MessageService;
        return MessageService;
    })();

    var ChatClient = (function () {
        'use strict';

        function createUrl(host, displaySettingId, lang, skill, skillOverride) {
            var url = host + "/Home/PreChat?displaySettingId=" + displaySettingId + "&userLanguage=" + (lang || '');
            url += skill ? '&targetSkillAddress=' + skill : '';
            
            var referrer = window.location.origin;
            if (!referrer) {
                referrer = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
            }
            url += '&referrer=' + referrer;

            // Passing an empty string will bypass skill availability check
            url += (skillOverride || skillOverride === '')
                ? '&overriddenSkillAddresses=' + skillOverride
                : '';

            return url;
        }

        /**
         * The complete ChatClientOptions
         * @typedef {Object} ChatClientOptions
         * @property {string} urlOverride - Url to be loaded for the Chat Client, overriding the internal one
         * @property {string} host - Host of the chat application
         * @property {number} displaySettingId - Reference Id to the display settings
         * @property {string} lang - Indicate the language to be used for Chat Client
         * @property {string} skill - Targeted skill address
         * @property {string} skillOverride - Skill address to be used for checking availability.  Passing an empty string will bypass skill availability check.
         */

        /**
         * A class for creating the Chat Client which contains both the form and conversations
         * @param {ChatClientOptions} options - Options used for creating the chat client
         * @param {MessageService} messageService - Message Service to listen for window's message events
         * @constructor
         */
        function ChatClient(options, messageService) {
            if (!options) throw Error('options is required');
            if (!messageService) throw Error('messageService is required');

            this._options = options;
            this._messageService = messageService;
            this._handlers = {};

            // initializing HTML elements
            this._container = doc.createElement('div');
            this._container.classList.add('uwf-chat-frame-container');
            this._container.classList.add('uwf-hide');
            this._container.hidden = true;

            this._frame = doc.createElement('iframe');
            this._frame.classList.add('uwf-chat-frame');

            this.reload();
            this._container.appendChild(this._frame);

            this._pendingData = [];

            this._bindEvents();
        }

        ChatClient.prototype = new Listener();
        Object.assign(ChatClient.prototype, {
            _options: null,
            _formType: null,
            _container: null,
            _frame: null,
            _isReady: false,
            _pendingData: null,
            _messageService: null,
            _isInternalFormLoaded : true, 
            _bindEvents: function () {
                var _this = this;
                this._messageService.on('uwfChatReady', function () {
                    _this._isReady = true;
                    _this._send();
                    _this.emit('ready');
                    win.onresize = function () {
                        var isChatClientVisible = _this.isVisible();
                        ui.onWindowResize(isChatClientVisible);
                    };
                });

                this._messageService.on('uwfShowChatForActiveSession', function () {
                    _this.emit('session-activated');
                });

                this._messageService.on('uwfChatFrameLoaded', function () {
                    _this.emit('prechat-ready');
                });
            },
            _send: function () {
                if (!this._isReady) {
                    return;
                }

                var data = this._pendingData.shift();
                while (data) {
                    this._frame.contentWindow.postMessage(data, this._options.host);
                    data = this._pendingData.shift();
                }
            },
            send: function (data) {
                this._pendingData.push(data);
                this._send();
            },
            reload: function () {
                // generating URL for the iframe
                if (this._options.urlOverride) {
                    this._loadExternalForm(this._options.urlOverride);
                } else {
                    this._loadInternalForm();
                }
            },
            _loadExternalForm: function (url) {
                this._formType = chatType.EXTERNAL;

                var _this = this;
                // binding the load event manually since a customer url would not notify us with pre-defined messages
                var listener = function () {
                    // this listener will be emitted only once to avoid firing multiple times on the same frame
                    _this._frame.removeEventListener('load', listener);
                    _this.emit('ready');
                };
                this._frame.addEventListener('load', listener);
                this._frame.src = url;
            },
            _loadInternalForm: function () {
                this._frame.src = createUrl(
                    this._options.host,
                    this._options.displaySettingId,
                    this._options.lang,
                    this._options.skill,
                    this._options.skillOverride
                );
            },
            getFormType: function () {
                return this._formType;
            },
            useForm: function (tag, type, sessionId) {
                var _this = this;
                if (externalFormRegex.test(tag)) {
                    _this._loadExternalForm(tag);
                    _this._isInternalFormLoaded = false;
                    _this._formType = chatType.EXTERNAL;
                    return;
                }

                if(!_this._isInternalFormLoaded)
                {
                     var listener = function () {
                        // this listener will be emitted only once to avoid firing multiple times on the same frame
                        _this._frame.removeEventListener('load', listener);
                        _this.emit('ready');
                    };
                    _this._frame.addEventListener('load', listener);
                    _this._loadInternalForm();
                    _this._isInternalFormLoaded = true;
                }
                _this._formType = type;
                _this.send({
                    message: "uwfActiveChatData",
                    formType: type,
                    formTag: tag,
                    chatSessionId: sessionId,
                    location: JSON.parse(JSON.stringify(win.location))
                });
               
            },
            submitForm: function () {
                this.send({ message: "uwReactiveFormSubmit", submit: true });
            },
            acceptedInvitation: function () {
                this.send({ message: "uwfInvitationAccepted", invitationAccepted: true });
            },
            getContainer: function () {
                return this._container;
            },
            show: function () {
                if (!this.isVisible()) {
                    this._container.hidden = false;
                    this._container.classList.remove("uwf-hide");
                    this._container.classList.add("uwf-unhide");
                    ui.backupPosition();
                    this.emit('visible', true);
                }
            },
            hide: function () {
                if (this.isVisible()) {
                    this._container.classList.remove("uwf-unhide");
                    this._container.classList.add("uwf-hide");
                    ui.restorePositionMobile();
                    this.emit('visible', false);
                }
            },
            isVisible: function () {
                return !this._container.classList.contains('uwf-hide');
            }
        });

        ChatClient.prototype.constructor = ChatClient;
        return ChatClient;
    })();

    var ChatButton = (function () {
        'use strict';

        /**
         * The complete options for Chat Button
         * @typedef {Object} ChatButtonOptions
         * @property {string} host - Host of the chat button
         * @property {number} displaySettingId - Display Setting Id to render the chat button
         * @property {string} lang - The language of the user browsing client
         */

        /**
         * A class to render and control the chat button
         * @param {ChatButtonOptions} options - Options to be used for the chat button
         * @param {MessageService} messageService - Message service to listen for window's message event
         * @constructor
         */
        function ChatButton(options, messageService) {
            if (!options) throw Error('options is required');
            if (!messageService) throw Error('messageService is required');

            this._options = options;
            this._messageService = messageService;
            this._handlers = {};

            this._frame = doc.createElement('iframe');
            this._frame.src = options.host + "/FloatingChat/Button?referrer=" + window.location.origin + "&displaySettingId=" + options.displaySettingId + "&userLanguage=" + (options.lang || '');
            this._frame.classList.add('uwf-button-frame');

            this._container = doc.createElement('div');
            this._container.classList.add('uwf-button-frame-container');
            this._container.classList.add("uwf-hide");
            this._container.hidden = true;
            this._container.appendChild(this._frame);

            var _this = this;
            this._messageService.on('uwfButtonReady', function () {
                _this.emit('ready');
            });
        }

        ChatButton.prototype = new Listener();
        Object.assign(ChatButton.prototype, {
            _options: null,
            _frame: null,
            _container: null,
            _messageService: null,
            getContainer: function () {
                return this._container;
            },
            show: function () {
                this._container.hidden = false;
                this._container.classList.remove("uwf-hide");
                this._container.classList.add("uwf-unhide");
            },
            hide: function () {
                this._container.hidden = true;
                this._container.classList.remove("uwf-unhide");
                this._container.classList.add("uwf-hide");
            },
            enable: function () {
                this._frame.contentWindow.postMessage("uwfEnableButton", this._options.host);
            }
        });

        ChatButton.prototype.constructor = ChatButton;
        return ChatButton;
    })();

    var ChatEngine = (function () {
        'use strict';

        /**
         * The complete options to be used by Chat Engine
         * @typedef {object} ChatEngineOptions
         * @property {string} host - Host of the chat engine application
         */
        /**
         * The chat engine to control the flow of chat related interactions
         * @param {ChatEngineOptions} options     - Chat engine options
         * @param {MessageService} messageService - Message service to listen for window's event
         * @constructor
         */
        function ChatEngine(options, messageService) {
            if (!options) throw Error('options is required');
            if (!messageService) throw Error('messageService is required');

            this._options = options;
            this._messageService = messageService;
            this._handlers = {};
            this._pendingData = [];

            this._frame = doc.createElement('iframe');
            this._frame.classList.add('uwf-proactive-frame');
            this._frame.src = options.host + "/Scripts/ProactiveChat/index.html";

            this._container = doc.createElement('div');
            this._container.classList.add('uwf-proactive-frame-container');
            this._container.classList.add('uwf-hide');
            this._container.hidden = true;
            this._container.appendChild(this._frame);

            this._bindEvents();
        }

        ChatEngine.prototype = new Listener();
        Object.assign(ChatEngine.prototype, {
            _options: null,
            _isReady: false,
            _frame: null,
            _container: null,
            _messageService: null,
            _pendingData: null,
            _bindEvents: function () {
                var _this = this;
                this._messageService.on('uwfChatEngineReady', function () {
                    _this._isReady = true;
                    _this._send();
                    _this.emit('ready');
                });

                this._messageService.on('uwfInvitationHeight', function (data) {
                    _this._container.style.height = data.height + 'px';
                });
            },
            _send: function () {
                if (!this._isReady) {
                    return;
                }

                var data = this._pendingData.shift();
                while (data) {
                    this._frame.contentWindow.postMessage(data, this._options.host);
                    data = this._pendingData.shift();
                }
            },
            send: function (data) {
                this._pendingData.push(data);
                this._send();
            },
            getContainer: function () {
                return this._container;
            },
            startProactive: function () {
                this.send({
                    message: 'uwfStartProactive'
                });
            },
            showInvitation: function () {
                this._container.hidden = false;
                this._container.classList.remove("uwf-hide");
                this._container.classList.add("uwf-unhide");
            },
            hideInvitation: function () {
                this._container.hidden = true;
                this._container.classList.remove("uwf-unhide");
                this._container.classList.add("uwf-hide");
            },
            notifyError: function (error) {
                this.send({
                    message: "uwfProactiveError",
                    error: error
                });
            },
            notifyChatStateChanged: function (isVisible) {
                this.send({
                    message: "uwfChatStateChanged",
                    isChatOpen: isVisible
                });
            },
            notifyLocationChanged: function (chatRule) {
                this.send({
                    message: "uwfLocationChanged",
                    location: JSON.parse(JSON.stringify(win.location)),
                    title: document.title,
                    chatRuleData: chatRule
                });
            },
            log: function (eventCode, eventDescription) {
                this.send({
                    message: "uwfCreateProactiveChatLog",
                    eventCode: eventCode,
                    eventDescription: eventDescription
                });
            }
        });

        ChatEngine.prototype.constructor = ChatEngine;
        return ChatEngine;
    })();

    var upstream = win.upstream || {};
    upstream.floatingchat = (function () {
        var showChatInitial = false;
        var enableButtonInitial = false;
        var stylesReady = false;
        var buttonReady = false;
        var chatReady = false;
        var chatFrameUrlOverride;
        var userLanguage;
        var overriddenSkillAddresses;
        var chatClient;
        var chatButton;
        var chatEngine;
        var activeFormType = chatType.REACTIVE;
        var isProactiveEnabled = false;
        var chatEnvironment = {};
        var sessionId = null;
        var formSubmitted = false;
        var proactiveFormDeclineEvent = {
            eventCode: 6,
            eventDescription: "ChatFormDecline"
        };
        var chatRule = {
            DisableChatButton: false,
            TargetSkill: null,
            ReportingTag: null,
            Reactive: {
                FormTagName: "Default-Tag"
            },
            Proactive: {
                FormTagName: null
            }
        };
        var proactiveErrorEventReasons = ["ConditionsFailed", "ChatSubmission"];
        //Proactive Engine callback methods that are being used in _uwc('on') command
        var proactiveEventsHandlers = {};
        var proactiveEventsQueue = [];
        var messageService = new MessageService();
        bindMessageListeners(messageService);

        function create(displaySettingId) {
            // Create and attach stylesheet to be loaded on customer website for styling our chat and button frames
            var cssLinkUrl = host + "/api/ChatStyling/Styles/floatingchat/" + displaySettingId;
            var cssLink = doc.createElement("link");
            cssLink.rel = "stylesheet";
            cssLink.href = cssLinkUrl;
            cssLink.addEventListener("load", onStylesReady);
            doc.head.appendChild(cssLink);

            // Create and attach a container to wrap our components
            var iframeContainer = doc.createElement("div");
            iframeContainer.setAttribute("id", "uwf-floating-chat-container");
            doc.body.appendChild(iframeContainer);

            initChatButton(iframeContainer, displaySettingId, userLanguage);
            initChatClient(iframeContainer, displaySettingId, userLanguage);
            initChatEngine(iframeContainer);
        }

        function initChatEngine(container) {
            chatEngine = new ChatEngine({
                host: host
            }, messageService);

            container.appendChild(chatEngine.getContainer());
        }

        function initChatButton(container, displaySettingId, language) {
            chatButton = new ChatButton({
                host: host,
                displaySettingId: displaySettingId,
                lang: language
            }, messageService);
            chatButton.on('ready', onButtonReady);

            container.appendChild(chatButton.getContainer());
        }

        function initChatClient(container, displaySettingId, userLanguage) {
            chatClient = new ChatClient({
                host: host,
                displaySettingId: displaySettingId,
                lang: userLanguage,
                skill: chatRule && chatRule.TargetSkill,
                skillOverride: overriddenSkillAddresses,
                urlOverride: chatFrameUrlOverride
            }, messageService);

            chatClient.on('ready', function () {
                chatReady = true;
                onReady();
            });

            chatClient.on('visible', function (isVisible) {
                // Log form decline event for proactive chat
                if (!isVisible && activeFormType === chatType.PROACTIVE) {
                    createProactiveLog(proactiveFormDeclineEvent.eventCode, proactiveFormDeclineEvent.eventDescription);
                    hideInvitation();
                }

                notifyProactiveChatState(isVisible);
            });

            chatClient.on('session-activated', showChatForActiveSession);
            chatClient.on('prechat-ready', function () {
                chatClient.useForm(getFormTag(activeFormType), activeFormType, sessionId);
            });

            container.appendChild(chatClient.getContainer());
        }

        function bindMessageListeners(msgService) {
            msgService.on('uwfButtonClick', function () {
                if (activeFormType === chatType.REACTIVE && !chatRule.Reactive.FormTagName && !formSubmitted) {
                    chatClient.submitForm();
                } else {
                    toggleChat();
                }
            });

            msgService.on('uwfHideChat', function () {
                if (!chatClient.isVisible()) {
                    chatButton.hide();
                }
                if (activeFormType === chatType.REACTIVE && !chatRule.Reactive.FormTagName) {
                    chatClient.hide();
                }
            });

            msgService.on('uwfSetFormSubmitted', function () {
                formSubmitted = true;
            });

            msgService.on('uwfResetFormSubmitted', function () {
                formSubmitted = false;
            });
            
            msgService.on('uwfShowChat', function () {
                showChatInitial = true;
            });

            msgService.on('uwfEnableButton', function () {
                enableButtonInitial = true;
                chatButton.enable();
                onReady();
            });

            msgService.on('uwfShowInvitation', function () {
                showInvitation();
            });

            msgService.on('uwfHideInvitation', function () {
                hideInvitation();
            });

            msgService.on('uwfGetLocation', function () {
                onNavigation();
            });

            msgService.on('uwfAcceptInvitation', function () {
                onInvitationAccept();
            });

            msgService.on('uwfSaveChatEnvironment', function () {
                saveChatEnvironment();
            });

            msgService.on('uwfResetChatEnvironment', function () {
                resetChatEnvironment();
            });

            msgService.on('uwfProactiveEngineLoaded', function (data) {
                sessionId = data.sessionId;
                onProactiveEngineLoaded();
            });

            msgService.on('uwfLogEvent', function (data) {
                if (activeFormType !== chatType.PROACTIVE) {
                    return;
                }
                createProactiveLog(data.eventCode, data.eventDescription);
            });

            msgService.on('uwfProactiveError', function (data) {
                notifyProactiveError(data);
                onProactiveErrorEventReceived(proactiveErrorEventReasons[1], data.error);
            });

            msgService.on('uwfProactiveConditionError', function (data) {
                onProactiveErrorEventReceived(proactiveErrorEventReasons[0], data.errorInfo);
            });
        }

        function notifyProactiveError(data) {
            chatEngine.notifyError(data.error);
        }

        function onStylesReady() {
            stylesReady = true;
            onReady();
        }

        function onButtonReady() {
            buttonReady = true;
            onReady();
        }

        function onReady() {
            if (!stylesReady || !buttonReady || !chatReady) return;

            enableChatButton();

            if (showChatInitial) {
                chatClient.show();
            }
        }

        function toggleChat() {
            if (isChatOpened()) {
                chatClient.hide();
            } else {
                chatClient.show();
            }
        }

        function enableChatButton() {
            if (chatRule.DisableChatButton || !enableButtonInitial) {
                return;
            }
            chatButton.show();
            chatButton.enable();
        }

        function hasActiveChat() {
            return !activeFormType;
        }

        function showInvitation() {
            if (hasActiveChat()) {
                console.log('A chat session is in process hence not showing proactive invitation');
                return;
            }
            isProactiveEnabled = true;
            chatEngine.showInvitation();
            activeFormType = chatType.PROACTIVE;
            chatClient.useForm(getFormTag(chatType.PROACTIVE), chatType.PROACTIVE, sessionId);
        }

        function hideInvitation() {
            isProactiveEnabled = false;
            chatEngine.hideInvitation();
            activeFormType = chatFrameUrlOverride ? chatType.EXTERNAL : chatType.REACTIVE;
            chatClient.useForm(getFormTag(activeFormType), activeFormType, sessionId);
        }

        function onInvitationAccept() {
            activeFormType = chatType.PROACTIVE;
            var formTag = getFormTag(activeFormType);
            chatClient.useForm(formTag, activeFormType, sessionId);
            setTimeout(function() {
                chatClient.acceptedInvitation();
                isProactiveEnabled = true;
                chatEngine.hideInvitation();
               if (externalFormRegex.test(formTag)){
                chatClient.show();
               } 
            }, 100);
        }

        function showChatForActiveSession() {
            chatClient.show();
        }

        function saveChatEnvironment() {
            chatEnvironment.isProactive = isProactiveEnabled;
            chatEnvironment.chatButtonDisabled = chatRule.DisableChatButton;
            chatEnvironment.chatInitialEnable = showChatInitial;
            //since at this point there is an ongoing chat hence setting it as null
            activeFormType = null;
        }

        function resetChatEnvironment() {
            if (chatEnvironment) {
                if (chatEnvironment.chatButtonDisabled) {
                    chatButton.hide();
                }
                chatRule.DisableChatButton = chatEnvironment.chatButtonDisabled;
                chatEnvironment.isProactive = false;
            }
            activeFormType = chatFrameUrlOverride ? chatType.EXTERNAL : chatType.REACTIVE;
        }

        function getFormTag(formType) {
            switch (formType) {
                case chatType.REACTIVE:
	                return chatRule.Reactive.FormTagName;
                case chatType.PROACTIVE:
                    return chatRule.Proactive.FormTagName;
                default:
                    return null;
            }
        }
        
        function notifyProactiveChatState(isVisible) {
            chatEngine.notifyChatStateChanged(isVisible);
        }

        function onProactiveEngineLoaded() {
            //Do functionality when proactive engine is loaded and initialized
            notifyProactiveChatState(chatClient.isVisible());
        }

        function isChatOpened() {
            return chatClient.isVisible();
        }

        function createProactiveLog(eventCode, eventDescription) {
            if (activeFormType !== chatType.PROACTIVE) {
                return;
            }

            chatEngine.log(eventCode, eventDescription);
        }

        function getSkillAvailabilityCondition(rule) {
            if (!rule || !rule.Proactive || !rule.Proactive.AgentAvailability) {
                return null;
            }

            return {
                Name: "SkillAvailable",
                Options: rule.Proactive.AgentAvailability
            };
        }

        function injectSkillAvailabilityCondition(rule) {
            if (!rule || !rule.Proactive || !rule.Proactive.Actions || !rule.Proactive.Actions.length) {
                // skip this if there is no actions defined
                return;
            }

            var action = rule.Proactive.Actions.filter(function (a) {
                return a && a.Name === "ShowProactiveChat";
            })[0];
            if (!action) {
                // skip this if there is no 'ShowProactiveChat' action defined
                return;
            }

            action.Conditions = action.Conditions || [];
            var isConditionExist = action.Conditions.some(function (c) {
                return c && c.Name === "SkillAvailable";
            });
            if (isConditionExist) {
                // skip this if there's already a 'SkillAvailable' condition defined
                return;
            }

            var condition = getSkillAvailabilityCondition(rule);
            if (condition) {
                action.Conditions.push(condition);
            }

            console.log("Added skill availability as a condition for proactive chat", condition);
        }

        function notifyLocationChanged() {
            injectSkillAvailabilityCondition(chatRule);
            chatEngine.notifyLocationChanged(chatRule);
        }

        function onNavigation() {
            console.log('sending new location to proactive chat: ' + window.location.pathname);

            // Chat button and/or invitation might have been displayed before navigation but not present on the new page
            hideInvitation();
            notifyLocationChanged();
        }

        function onProactiveErrorEventReceived(errorEventReason, errorInfo) {
            var errorEvent = {
                reason: errorEventReason,
                errorInfo: errorInfo
            };
            queueProactiveEvent("error", errorEvent);
        }

        function fireProactiveEventCallback(proactiveEvent) {
            if (!proactiveEventsHandlers.hasOwnProperty(proactiveEvent)) {
                console.log("No callback registered for proactive event " + proactiveEvent);
                return;
            }

            var args = [].slice.call(arguments);
            args.splice(0, 1);
            if (!args || !args.length) {
                args = [];
            }
            var callbacks = proactiveEventsHandlers[proactiveEvent];
            for (var i = 0; i < callbacks.length; i++) {
                try {
                    callbacks[i].apply(null, args);
                } catch (e) {
                    console.error("Failed sending callback for event (" + proactiveEvent + ") with arguments " + args);
                }
            }
        }

        function queueProactiveEvent(eventName, eventData) {
            proactiveEventsQueue.push([eventName, eventData]);
            var callback = proactiveEventsQueue.shift();
            while (callback) {
                fireProactiveEventCallback.apply(null, callback);
                callback = proactiveEventsQueue.shift();
            }
        }

        return {
            exec: function (cmd) {
                if (typeof upstream.floatingchat[cmd] !== 'function') {
                    console.error('Invalid command (' + cmd + ')');
                    return;
                }

                var func = upstream.floatingchat[cmd];
                var args = [].slice.call(arguments);
                args.splice(0, 1);

                try {
                    func.apply(upstream.floatingchat, args);
                } catch (e) {
                    console.error('Failed processing command (' + cmd + ') with arguments', args);
                    console.error(e);
                }
            },

            /**
             * Hide / Show the customer chat window
             */
            "toggle": function () {
                toggleChat();
            },

            /**
             * Show the customer chat window if it's already loaded
             */
            "show": function () {
                chatClient.show();
            },

            /**
             * Hide the customer chat window if it's opened
             */
            "hide": function () {
                chatClient.hide();
            },

            /**
             * Initialize all docking chat components
             * @param {number} displaySettingId - Display setting preferences ID
             */
            "create": function (displaySettingId) {
                create(displaySettingId);
            },

            /**
             * Set custom parameters to be submitted along with the pre-chat form as Parameters[<name>] = <value>.
             * @param {object[]} chatParams - Parameters to be submitted
             * @param {string} chatParams[].name - The 'name' of the parameter
             * @param {string|number|boolean} chatParams[].value - The 'value' associated to the named parameter
             */
            "set-params": function (chatParams) {
                chatClient.send({ message: "uwfSetChatParams", params: chatParams });
            },

            /**
             * Use different pre-chat form
             * @param {string} formRef - URL of the form to be used
             */
            "use-form": function (formRef) {
                chatFrameUrlOverride = null;
                var isChatFrameUrl = externalFormRegex.test(formRef);
                if (isChatFrameUrl) {
                    chatFrameUrlOverride = formRef;
                } else {
                    chatRule.Reactive.FormTagName = formRef;
                }
            },

            /**
             * Define the language to be used for the chat components.  This MUST be called before 'create'
             * @param {string} lang - The language code to be used.  Browser preferred language will be used if not defined.
             */
            "use-lang": function (lang) {
                if (!lang) throw Error("lang is not valid");
                if (typeof lang !== 'string') throw Error("lang must be a type of string");
                userLanguage = lang;
            },

            /**
             * Set the skill addresses that will be checked for chat availability. Pass an empty array to bypass skill availability check.  This MUST be called before 'create'
             * @param {string[]} skillAddresses - A list of skill addresses
             */
            "check-availability": function (skillAddresses) {
                if (!Array.isArray(skillAddresses)) throw Error('Argument must be an array');
                overriddenSkillAddresses = skillAddresses.join();
            },
            /**
             * The complete Reactive options
             * @typedef {Object} ReactiveOptions
             * @property {string} FormTagName - Indicate the pre-chat form to be used when customer click on the chat button.  If this is a URL, the page referenced by the URL will be loaded instead.
             */
            /**
             * The complete Invitation options
             * @typedef {Object} Invitation
             * @property {string} InvitationText - Text to be display on the chat invitation.
             * @property {string} SubmitButtonText - Text of the button on the chat invitation.
             */
            /**
             * The complete object to define agent availability
             * @typedef {Object} SkillAvailableDefinition
             * @property {number} [MaxWaitTimeSeconds] - Indicate the maximum wait time in order to consider the skill is available
             * @property {number} [MinAgentCapacity] - Indicate the minimum number of agent capacity to consider the skill is available
             * @property {number} [MinActiveAgents] - Indicate the minimum number of active agents to consider the skill is available
             * @property {boolean} [WithinBusinessHour] - Indicate whether the skill is within business hours or not to consider the skill is available
             * @property {number} [MinCloseTimeInSeconds] - Indicate the minimum number of seconds before close time to consider the skill is available
             * @property {number} [MinCapacityPercentage] - Indicate the minimum percentage of capacity for the skill to consider it to be available
             * @property {'opened' | 'closed'} Status - Indicate the status requirement of the skill to consider it to be available
             */
            /**
             * The complete object to define condition of an action
             * @typedef {Object} Condition
             * @property {string} Name - Keyword for referencing predefined conditions used in Chat Engine
             * @property {object} Options - Parameters that will be used by the condition
             */
            /**
             * The complete object to define an action to be emited by chat engine
             * @typedef {Object} Action
             * @property {'ShowProactiveChat' | 'CloseChatInvitation'} Name - Keyword for referencing the actions support by Chat Engine
             * @property {Condition[]} [Conditions] - Conditions that need to be fulfilled prior the action to be invoked.  If not specified, action will be invoked unconditionally.
             */
            /**
             * The complete Proactive options
             * @typedef {Object} ProactiveOptions
             * @property {string} [FormTagName] - Indicate the pre-chat form to be used when customer accept the chat invitation.  If this is a URL, the page referenced by the URL will be loaded instead.
             * @property {Invitation} [Invitation] - Invitation options.  Invitation will be shown to customer if set.
             * @property {SkillAvailableDefinition} [AgentAvailability] - Define what is consider for a skill to be available.  If specified, proactive chat will only progress if skill is available.
             * @property {Action[]} Actions - Actions to be performed.  Note that 'ShowProactiveChat' action has to be there for proactive chat to work.
             */
            /**
             * The complete chat Rule
             * @typedef {Object} ChatRule
             * @property {boolean} [DisableChatButton] - Indicate whether to show the button or not when there is no active session
             * @property {string} [TargetSkill] - Targeted skill address to override the default configured from UWF Admin
             * @property {string} [ReportingTag] - The tag to be used to tag this session in reporting
             * @property {ReactiveOptions} Reactive - The reactive options when customer initiated by clicking on the chat button.
             * @property {ProactiveOptions} Proactive - The proactive options to invite customer to chat programmatically.
             */
            /**
             * Define the rules for reactive and proactive chat.  This MUST be called before 'create'
             * @param {ChatRule} rule - Chat rule to instruct how UpstreamWorks Chat works.
             */
            "use-rule": function (rule) {
                if (!rule) throw Error("rule is not valid");
                if (rule.Proactive) {
                    var proactive = rule.Proactive;
                    if (!proactive.Actions || !proactive.Actions.length) throw Error('Actions is required for Proactive option.  Current supported actions are "ShowProactiveChat" and "CloseChatInvitation".');

                    //sanitize proactive form tag
                    if (rule.Proactive.FormTagName)
                        rule.Proactive.FormTagName = rule.Proactive.FormTagName.trim();
                }
                if (rule.Reactive) {
	                //sanitize reactive form tag
	                if (rule.Reactive.FormTagName)
                        rule.Reactive.FormTagName = rule.Reactive.FormTagName.trim();
                }
                var defaultChatRule = chatRule;
                chatRule = rule;
                if (!chatRule.Reactive) // if the Reactive section doesn't exist then initialize the rule to have a default Reactive section
                    chatRule.Reactive = defaultChatRule.Reactive;
                
            },
            /**
             * Start the proactive engine
             */
            "start-proactive": function () {
                chatEngine.startProactive();
            },
            /**
             * Command to disable chat button
             * @param {boolean} isDisabled - Disable chat button
             * */
            "disable-chat-button": function (isDisabled) {
                chatRule.DisableChatButton = isDisabled;
            },

            /**
             * Register callback methods for different events related to Proactive chat
             * @param {string} eventName - name of the event for which callback needs to be registered
             * @param {function} callback - Callback method for specified event
             */
            "on": function (eventName, callback) {
                if (typeof callback !== "function") {
                    console.log("Callback method provided for event " + eventName + " is not a function hence not registering it");
                }
                // Logic to only register callbacks regarding proactive  
                if (proactiveEventsHandlers.hasOwnProperty(eventName)) {
                    proactiveEventsHandlers[eventName].push(callback);
                } else {
                    proactiveEventsHandlers[eventName] = [callback];
                }
            }
        };
    })();

    var queue = win[obj] ? win[obj].queue : [];
    var uwc = win[obj] = upstream.floatingchat.exec;
    var command = queue.shift();
    while (command) {
        uwc.apply(upstream.floatingchat, command);
        command = queue.shift();
    }
})(window, '_uwc', document);
