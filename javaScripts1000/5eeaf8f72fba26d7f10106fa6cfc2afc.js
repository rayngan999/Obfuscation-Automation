/**/embedded_svc.liveAgentAPI.handleChatSettings({"messages":[{"type":"EmbeddedServiceConfig", "message":{"labels":[{"labelValue":"Last Name","sectionName":"LiveAgentFormFields","labelName":"Contact_LastName"},{"labelValue":"First Name","sectionName":"LiveAgentFormFields","labelName":"Lead_FirstName"},{"labelValue":"Last Name","sectionName":"LiveAgentFormFields","labelName":"Lead_LastName"},{"labelValue":"First Name","sectionName":"LiveAgentFormFields","labelName":"Contact_FirstName"}],"embeddedServiceConfig":{"areGuestUsersAllowed":false,"embeddedServiceBranding":{"navBarColor":"#222222","navBarTextColor":"#ffffff","font":"Salesforce Sans","secondaryColor":"#005290","secondaryNavBarColor":"#cb2b19","contrastInvertedColor":"#ffffff","primaryColor":"#222222","contrastPrimaryColor":"#222222"},"deploymentFeature":"LiveAgent","isEnabled":true,"embeddedServiceCustomComponents":[{"customComponentType":"LA_Prechat","customComponent":"trac_PreChatComponent","feature":"LiveAgent","namespacePrefix":"c"}],"embeddedServiceLiveAgent":{"fontSize":"Medium","enabled":true,"fullName":"EmbeddedServiceLiveAgent_Parent04I2E000000Xd6TUAS_17140e7fca0","embeddedServiceQuickActions":[{"quickActionDefinition":"Snapins_Contact_PrechatQuickAction_08h2E000000XaTK_1599729263782","order":1,"quickActionType":"Prechat","quickActionInfo":"{\"layoutItems\":[[{\"label\":\"Name\",\"required\":true,\"fields\":[{\"type\":\"string\",\"name\":\"Name\",\"label\":\"Full Name\",\"value\":null,\"length\":121,\"extraTypeInfo\":\"personname\",\"pickListOption\":null}],\"readOnly\":false},null],[{\"label\":\"Email\",\"required\":false,\"fields\":[{\"type\":\"email\",\"name\":\"Email\",\"label\":\"Email\",\"value\":null,\"length\":80,\"extraTypeInfo\":null,\"pickListOption\":null}],\"readOnly\":false},null],[{\"label\":\"Language\",\"required\":false,\"fields\":[{\"type\":\"picklist\",\"name\":\"Language__c\",\"label\":\"Language\",\"value\":\"English\",\"length\":255,\"extraTypeInfo\":null,\"pickListOption\":[{\"label\":\"English\",\"value\":\"English\"},{\"label\":\"French\",\"value\":\"French\"}]}],\"readOnly\":false},null]],\"targetSobjectType\":\"Contact\",\"targetRecordTypeId\":\"0122E000000lNYU\",\"targetParentField\":null,\"type\":\"Create\",\"name\":\"Snapins_Contact_PrechatQuickAction_08h2E000000XaTK_1599729263782\",\"label\":\"Snapins_Contact_PrechatQuickAction_08h2E000000XaTK_1599729263782\"}"},{"quickActionDefinition":"Snapins_Case_PrechatQuickAction_08h2E000000XaTK_1599729263927","order":2,"quickActionType":"Prechat","quickActionInfo":"{\"layoutItems\":[[{\"label\":\"Subject\",\"required\":false,\"fields\":[{\"type\":\"string\",\"name\":\"Subject\",\"label\":\"Subject\",\"value\":null,\"length\":255,\"extraTypeInfo\":null,\"pickListOption\":null}],\"readOnly\":false},null],[{\"label\":\"Web Name\",\"required\":false,\"fields\":[{\"type\":\"string\",\"name\":\"SuppliedName\",\"label\":\"Name\",\"value\":null,\"length\":80,\"extraTypeInfo\":null,\"pickListOption\":null}],\"readOnly\":false},null],[{\"label\":\"Business Unit\",\"required\":false,\"fields\":[{\"type\":\"picklist\",\"name\":\"Business_Unit__c\",\"label\":\"Business Unit\",\"value\":null,\"length\":255,\"extraTypeInfo\":null,\"pickListOption\":[{\"label\":\"Hudson's Bay\",\"value\":\"Hudson's Bay\"},{\"label\":\"MHF\",\"value\":\"MHF\"},{\"label\":\"Lord + Taylor\",\"value\":\"Lord + Taylor\"},{\"label\":\"Saks\",\"value\":\"Saks\"},{\"label\":\"OFF 5TH\",\"value\":\"Off 5th\"}]}],\"readOnly\":false},null],[{\"label\":\"Topic\",\"required\":false,\"fields\":[{\"type\":\"picklist\",\"name\":\"Community_Case_Type__c\",\"label\":\"Topic\",\"value\":null,\"length\":255,\"extraTypeInfo\":null,\"pickListOption\":[{\"label\":\"Gifts\",\"value\":\"Gifts\"},{\"label\":\"Hudson's Bay Rewards\",\"value\":\"Hudson's Bay Rewards\"},{\"label\":\"Major Home Purchases\",\"value\":\"Major Home Purchases\"},{\"label\":\"My Account\",\"value\":\"My Account\"},{\"label\":\"Order Status\",\"value\":\"Order Status\"},{\"label\":\"Payment Methods\",\"value\":\"Payment Methods\"},{\"label\":\"Returns\",\"value\":\"Returns\"},{\"label\":\"Shipping\",\"value\":\"Shipping\"},{\"label\":\"Other\",\"value\":\"Other\"},{\"label\":\"Gift Cards\",\"value\":\"Gift Cards\"},{\"label\":\"Pricing\",\"value\":\"Pricing\"},{\"label\":\"Stores\",\"value\":\"Stores\"},{\"label\":\"Store Experience\",\"value\":\"Store Experience\"},{\"label\":\"Site Assistance\",\"value\":\"Site Assistance\"},{\"label\":\"Product Information\",\"value\":\"Product Information\"},{\"label\":\"International Shipping\",\"value\":\"International Shipping\"},{\"label\":\"Store Information\",\"value\":\"Store Information\"},{\"label\":\"Comments\",\"value\":\"Comments\"},{\"label\":\"Other Assistance\",\"value\":\"Other Assistance\"},{\"label\":\"Saks.com Account Assistance\",\"value\":\"Saks.com Account Assistance\"},{\"label\":\"Shopping Assistance\",\"value\":\"Shopping Assistance\"}]}],\"readOnly\":false},null],[{\"label\":\"Order Number\",\"required\":false,\"fields\":[{\"type\":\"string\",\"name\":\"Order_Number__c\",\"label\":\"Order Number\",\"value\":null,\"length\":64,\"extraTypeInfo\":null,\"pickListOption\":null}],\"readOnly\":false},null],[{\"label\":\"Order Billing Postal Code\",\"required\":false,\"fields\":[{\"type\":\"string\",\"name\":\"Order_Billing_Postal_Code__c\",\"label\":\"Order Billing Postal Code\",\"value\":null,\"length\":255,\"extraTypeInfo\":null,\"pickListOption\":null}],\"readOnly\":false},null],[{\"label\":\"Case Language\",\"required\":false,\"fields\":[{\"type\":\"picklist\",\"name\":\"Case_Language__c\",\"label\":\"Case Language\",\"value\":\"English\",\"length\":255,\"extraTypeInfo\":null,\"pickListOption\":[{\"label\":\"English\",\"value\":\"English\"},{\"label\":\"French\",\"value\":\"French\"}]}],\"readOnly\":false},null],[{\"label\":\"Origin Is Chat\",\"required\":false,\"fields\":[{\"type\":\"picklist\",\"name\":\"Origin_Is_Chat__c\",\"label\":\"Origin Is Chat\",\"value\":null,\"length\":255,\"extraTypeInfo\":null,\"pickListOption\":[{\"label\":\"True\",\"value\":\"True\"},{\"label\":\"False\",\"value\":\"False\"}]}],\"readOnly\":false},null],[{\"label\":\"Web Email\",\"required\":false,\"fields\":[{\"type\":\"email\",\"name\":\"SuppliedEmail\",\"label\":\"Email Address\",\"value\":null,\"length\":80,\"extraTypeInfo\":null,\"pickListOption\":null}],\"readOnly\":false},null]],\"targetSobjectType\":\"Case\",\"targetRecordTypeId\":\"0122E000000iINa\",\"targetParentField\":null,\"type\":\"Create\",\"name\":\"Snapins_Case_PrechatQuickAction_08h2E000000XaTK_1599729263927\",\"label\":\"Snapins_Case_PrechatQuickAction_08h2E000000XaTK_1599729263927\"}"}],"liveChatDeployment":"5722E000000bziH","liveChatButton":"5732E000000YMyI","isQueuePositionEnabled":true,"isOfflineCaseEnabled":false,"prechatEnabled":true,"scenario":"Service"},"embeddedServiceLayouts":[],"siteUrl":"https://support.saksfifthavenue.com/","shouldHideAuthDialog":false,"embeddedServiceFlows":[]},"customizations":[],"standardLabels":[{"labelValue":"Close dialog","sectionName":"LiveAgentSidebarApp","labelName":"Close"},{"labelValue":"Minimize chat","sectionName":"LiveAgentSidebarApp","labelName":"Minimize"},{"labelValue":"End of Dialog","sectionName":"LiveAgentSidebarApp","labelName":"EndOfDialog"},{"labelValue":"Expand the chat","sectionName":"LiveAgentSidebarApp","labelName":"MinimizedContainerAssistiveText"},{"labelValue":"Agent","sectionName":"LiveAgentChatWindow","labelName":"ChatWindowAgent"},{"labelValue":"Type your message...","sectionName":"LiveAgentChatWindow","labelName":"InputTextPlaceholder"},{"labelValue":"Agent is Typing","sectionName":"LiveAgentChatWindow","labelName":"AgentTypingUpdate"},{"labelValue":"Send","sectionName":"LiveAgentChatWindow","labelName":"Send"},{"labelValue":"Chat started at {0}","sectionName":"LiveAgentChatWindow","labelName":"ChatStartTime"},{"labelValue":"Chat started with {0}","sectionName":"LiveAgentTransfer","labelName":"MessageAreaTransferred"},{"labelValue":"File Transfer Canceled","sectionName":"LiveAgentFileTransfer","labelName":"FileTransferCanceled"},{"labelValue":"File Transfer Succeeded","sectionName":"LiveAgentFileTransfer","labelName":"FileTransferSuccess"},{"labelValue":"File Transfer Failed","sectionName":"LiveAgentFileTransfer","labelName":"FileTransferFailure"},{"labelValue":"File Transfer Requested","sectionName":"LiveAgentFileTransfer","labelName":"FileTransferRequested"},{"labelValue":"Transfer failed","sectionName":"LiveAgentFileTransfer","labelName":"TransferFailed"},{"labelValue":"Thanks for chatting with us. Ask me anything.","sectionName":"LiveAgentChatWindow","labelName":"ChatStateHeaderGreeting"},{"labelValue":"Save Transcript","sectionName":"LiveAgentChatWindow","labelName":"SaveTranscript"},{"labelValue":"Upload a file","sectionName":"LiveAgentFileTransfer","labelName":"FileUpload"},{"labelValue":"Upload this file","sectionName":"LiveAgentFileTransfer","labelName":"UploadFile"},{"labelValue":"Select a file under 5mb","sectionName":"LiveAgentFileTransfer","labelName":"SelectNewFile"},{"labelValue":"File transfer requested. Press the upload a file button.","sectionName":"LiveAgentFileTransfer","labelName":"UsePreviousElementToUploadFile"},{"labelValue":"Remove this file.","sectionName":"LiveAgentFileTransfer","labelName":"RemoveFile"},{"labelValue":"{0} Messages","sectionName":"LiveAgentChatWindow","labelName":"MessageNotification"},{"labelValue":"1 Message","sectionName":"LiveAgentChatWindow","labelName":"SingleMessageNotification"},{"labelValue":"{0} says...","sectionName":"LiveAgentChatWindow","labelName":"AgentSaysNotification"},{"labelValue":"Still there?","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutMinimizedWarning"},{"labelValue":"Chat ended","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutMinimizedEndChat"},{"labelValue":"Chat Ended","sectionName":"LiveAgentChatWindow","labelName":"ChatEnd"},{"labelValue":"Chat Ended by Agent","sectionName":"LiveAgentChatWindow","labelName":"ChatEndAgent"},{"labelValue":"Chat Ended from Lost Connection","sectionName":"LiveAgentChatWindow","labelName":"ChatEndConnection"},{"labelValue":"Close Chat","sectionName":"LiveAgentChatWindow","labelName":"ChatButtonClose"},{"labelValue":"Give Feedback","sectionName":"LiveAgentChatWindow","labelName":"PostChatButton"},{"labelValue":"Chat ended due to timeout","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutEndChatMessage"},{"labelValue":"Please wait. Reconnecting","sectionName":"LiveAgentChatWindow","labelName":"ReconnectingChasitorIssue"},{"labelValue":"Reconnecting","sectionName":"LiveAgentChatWindow","labelName":"ReconnectingMinimizedMessage"},{"labelValue":"Are you still there?","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutWarningQuestion"},{"labelValue":"We're transferring your chat to another agent.","sectionName":"LiveAgentTransfer","labelName":"BannerInProgressTransfer"},{"labelValue":"Transferring","sectionName":"LiveAgentTransfer","labelName":"MinimizedInProgressTransfer"},{"labelValue":"Youâre chatting with {0}","sectionName":"LiveAgentTransfer","labelName":"BannerTransferred"},{"labelValue":"Reconnected. Youâre chatting with {0}","sectionName":"LiveAgentTransfer","labelName":"BannerReconnected"},{"labelValue":"End chat?","sectionName":"MessageOverlay","labelName":"ChatStateHeader"},{"labelValue":"Don't worry, after the chat ends, you can save the transcript. Click Save Transcript at the bottom of the chat window.","sectionName":"MessageOverlay","labelName":"ChatStateBody"},{"labelValue":"Go Back","sectionName":"MessageOverlay","labelName":"ChatStateResume"},{"labelValue":"Confirm End Chat","sectionName":"MessageOverlay","labelName":"ChatStateEnd"},{"labelValue":"Contact Us","sectionName":"LiveAgentOfflineSupport","labelName":"HeaderText"},{"labelValue":"Something went wrong","sectionName":"LiveAgentOfflineSupport","labelName":"ErrorDialogTitle"},{"labelValue":"Offline support isnât working right now. Please try again later.","sectionName":"LiveAgentOfflineSupport","labelName":"ErrorDialogBody"},{"labelValue":"Got It","sectionName":"LiveAgentOfflineSupport","labelName":"ErrorDialogButton"},{"labelValue":"Submit","sectionName":"LiveAgentOfflineSupport","labelName":"SupportFormButton"},{"labelValue":"Offline Support Image","sectionName":"LiveAgentOfflineSupport","labelName":"BannerAltText"},{"labelValue":"Case submitted","sectionName":"LiveAgentOfflineSupport","labelName":"ConfirmationDialogTitle"},{"labelValue":"We logged your case. Youâll hear back from us soon.","sectionName":"LiveAgentOfflineSupport","labelName":"ConfirmationDialogBody"},{"labelValue":"Done","sectionName":"LiveAgentOfflineSupport","labelName":"ConfirmationDialogButton"},{"labelValue":"Post-Chat","sectionName":"LiveAgentSidebarApp","labelName":"PostChat"},{"labelValue":"Chat","sectionName":"LiveAgentSidebarApp","labelName":"LiveChat"},{"labelValue":"Prechat Image","sectionName":"LiveAgentPrechat","labelName":"BannerAltText"},{"labelValue":"Start Chatting","sectionName":"LiveAgentPrechat","labelName":"StartChat"},{"labelValue":"This field is required.","sectionName":"LiveAgentPrechat","labelName":"FieldError"},{"labelValue":"Hello, {0}!","sectionName":"LiveAgentChatWindow","labelName":"WaitingGreeting"},{"labelValue":"Guest","sectionName":"LiveAgentChatWindow","labelName":"WaitingDefaultName"},{"labelValue":"An agent is on the way.","sectionName":"LiveAgentChatWindow","labelName":"WaitingMessage"},{"labelValue":"Cancel Chat Request","sectionName":"LiveAgentChatWindow","labelName":"WaitingCancelChatRequest"},{"labelValue":"Hang in there.","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMessageFirstLine"},{"labelValue":"You're number {0} in line.","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMessageSecondLine"},{"labelValue":"You're up next!","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionZeroMessage"},{"labelValue":"Connecting...","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionConnectingMessage"},{"labelValue":"99+","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMaxNumber"},{"labelValue":"Hang in there.","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMaxMessageFirstLine"},{"labelValue":"An agent is on the way.","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionMaxMessageSecondLine"},{"labelValue":"Waiting","sectionName":"LiveAgentChatWindow","labelName":"MinimizedWaitingMessage"},{"labelValue":"Place in line:","sectionName":"LiveAgentChatWindow","labelName":"MinimizedQueuePositionMessage"},{"labelValue":"You're next!","sectionName":"LiveAgentChatWindow","labelName":"MinimizedQueuePositionZeroMessage"},{"labelValue":"Place in line for support:","sectionName":"LiveAgentChatWindow","labelName":"MinimizedQueuePositionAssistiveMessage"},{"labelValue":"You're next in line for support!","sectionName":"LiveAgentChatWindow","labelName":"MinimizedQueuePositionZeroAssistiveMessage"},{"labelValue":"Agents Offline","sectionName":"MessageOverlay","labelName":"ErrorNoAgentTitle"},{"labelValue":"No agents are available.","sectionName":"MessageOverlay","labelName":"ErrorNoAgentHeader"},{"labelValue":"We can't chat right now.","sectionName":"MessageOverlay","labelName":"ErrorNoAgentBodyApology"},{"labelValue":"Chat blocked","sectionName":"MessageOverlay","labelName":"ErrorBlockedTitleAndHeader"},{"labelValue":"It looks like an agent has blocked your chats.","sectionName":"MessageOverlay","labelName":"ErrorBlockedBody"},{"labelValue":"OK","sectionName":"MessageOverlay","labelName":"ErrorBlockedCloseButton"},{"labelValue":"Connection Issues","sectionName":"MessageOverlay","labelName":"ErrorNoConnectionTitle"},{"labelValue":"There is a connection issue","sectionName":"MessageOverlay","labelName":"ErrorNoConnectionHeader"},{"labelValue":"Hmm, looks like there's no connection.","sectionName":"MessageOverlay","labelName":"ErrorNoConnectionBodyApology"},{"labelValue":"Start a New Chat","sectionName":"MessageOverlay","labelName":"ErrorTryAgainButton"},{"labelValue":"Leave Chat","sectionName":"MessageOverlay","labelName":"ErrorExitChatButton"},{"labelValue":"Leave?","sectionName":"MessageOverlay","labelName":"WaitingStateHeader"},{"labelValue":"No one is available to chat. Try again later.","sectionName":"MessageOverlay","labelName":"WaitingStateBodyApology"},{"labelValue":"Leave","sectionName":"MessageOverlay","labelName":"WaitingStateLeave"},{"labelValue":"Continue to Wait","sectionName":"MessageOverlay","labelName":"WaitingStateContinue"},{"labelValue":" Please send a message within {0}m {1}s or this chat will time out.","sectionName":"LiveAgentChatWindow","labelName":"IdleTimeoutWarningRequest"},{"labelValue":"Try again later.","sectionName":"MessageOverlay","labelName":"ErrorNoAgentBodyRequest"},{"labelValue":"Try reconnecting or come back later.","sectionName":"MessageOverlay","labelName":"ErrorNoConnectionBodyRequest"},{"labelValue":"If you leave now, youâll lose your place in line to chat.","sectionName":"MessageOverlay","labelName":"WaitingStateBodyWarning"},{"labelValue":"Be carefulâ¦","sectionName":"MessageOverlay","labelName":"CloseSessionWarningTitle"},{"labelValue":"If you close, leave, or refresh this tab, you could lose your chat.","sectionName":"MessageOverlay","labelName":"CloseSessionWarningBody"},{"labelValue":"Go Back","sectionName":"MessageOverlay","labelName":"CloseSessionWarningButton"},{"labelValue":"Choose one of the following options","sectionName":"LiveAgentChatWindow","labelName":"ChooseOption"},{"labelValue":"Waiting Screen Image","sectionName":"LiveAgentChatWindow","labelName":"WaitingBannerAssistiveText"},{"labelValue":"Group Chat","sectionName":"LiveAgentGroupChat","labelName":"HeaderTitle"},{"labelValue":"You are chatting with {0} people","sectionName":"LiveAgentGroupChat","labelName":"ExtendedHeaderGreeting"},{"labelValue":"{0} joined the chat","sectionName":"LiveAgentGroupChat","labelName":"AgentJoinedChatSystemMessage"},{"labelValue":"{0} left the chat","sectionName":"LiveAgentGroupChat","labelName":"AgentLeftChatSystemMessage"},{"labelValue":"Group Chat","sectionName":"LiveAgentGroupChat","labelName":"MinimizedStateMessage"},{"labelValue":"Transferring...","sectionName":"LiveAgentChatWindow","labelName":"QueuePositionTransferringMessage"},{"labelValue":"Conversation Ended by Bot","sectionName":"LiveAgentChatWindow","labelName":"ChatEndChatbot"},{"labelValue":"Enter Message","sectionName":"LiveAgentChatWindow","labelName":"InputTextAssistiveText"},{"labelValue":"Waiting to Chat","sectionName":"LiveAgentChatWindow","labelName":"WaitingStateHeaderText"},{"labelValue":"First Name","sectionName":"Global_Entity","labelName":"first_name"},{"labelValue":"First Name","sectionName":"LiveAgentFormFields","labelName":"Lead_FirstName"},{"labelValue":"Last Name","sectionName":"Global_Entity","labelName":"last_name"},{"labelValue":"Last Name","sectionName":"LiveAgentFormFields","labelName":"Lead_LastName"},{"labelValue":"First Name","sectionName":"LiveAgentFormFields","labelName":"Contact_FirstName"},{"labelValue":"Last Name","sectionName":"LiveAgentFormFields","labelName":"Contact_LastName"}],"timestamp":1627960026316,"errors":[{"source":"SCRT","errorMessage":"Invalid Language param 'null' sent in the request, using Guest User language instead.","errorCode":"ESW_ERROR_001"}],"additionalSettings":{"isSelfServiceEnabled":false,"htmlDirection":"ltr","eswFilesVersion":"1597186600","auraJarVersion":"1.3212.232.19","liveAgentContentUrl":"https://c.la1-c1-ia5.salesforceliveagent.com/content","isEssentialsEdition":false,"latestChasitorVersion":"52.0","labelsLanguage":"en-US"}}}]});