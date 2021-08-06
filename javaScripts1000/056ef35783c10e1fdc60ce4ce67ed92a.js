<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Prechat Form</title>
    <link href="/Content/bootstrap/bootstrap.css" rel="stylesheet"/>
<link href="/Content/bootstrap/bootstrap-theme.css" rel="stylesheet"/>

    <link href="/Content/site.css" rel="stylesheet"/>

    <link href="/Content/fontawesome/css/font-awesome.min.css" rel="stylesheet"/>

    <link href="/Content/uwfcustom.css" rel="stylesheet"/>

    
</head>
<body>
    <secure-form-app data-module-path="./secure-form/secure-form-app.module#SecureFormAppModule">
    </secure-form-app>
    


<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link href="/Content/uwfcustom.css" rel="stylesheet"/>
<link href="/Content/FloatingChat.css" rel="stylesheet"/>

    <script src="/Scripts/jquery-3.4.1.js"></script>
<script src="/Scripts/jquery-migrate-3.1.0.js"></script>
<script src="/Scripts/js-cookie/js.cookie.js"></script>

</head>
<body>
    <button id="uwf-chat-button" title="Start Chatting" disabled>
        <div class="icon uwf-channel-chat"></div>
    </button>
</body>
</html>



    <script src="/Scripts/modernizr-2.6.2.js"></script>
<script src="/Scripts/jquery-3.4.1.js"></script>
<script src="/Scripts/jquery-migrate-3.1.0.js"></script>
<script src="/Scripts/js-cookie/js.cookie.js"></script>
<script src="/Scripts/jquery.unobtrusive-ajax.js"></script>
<script src="/Scripts/jquery.validate.js"></script>
<script src="/Scripts/jquery.validate.unobtrusive.js"></script>

    <script src="/Scripts/bootstrap.js"></script>

    
	<script type="text/javascript" src="/Scripts/PreChat/runtime.js"></script>
	<script type="text/javascript" src="/Scripts/PreChat/polyfills.js"></script>
    <script type="text/javascript" src="/Scripts/customerChat-helper.js"></script>
	<script type="text/javascript">
		$.urlParam = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                .exec(window.location.search);
            return (results !== null) ? results[1] || 0 : false;
        }
		
		$(function() {
			var showChatKey = "com.upstreamworks.chat.showChat" + "https://www.volkswagen.co.uk";
            var chatData = upstream.customerchat.helpers.getChatData("https://www.volkswagen.co.uk");
			var displaySettingId = $.urlParam('displaySettingId') || 1;
			var floatingChatButtonCssUrl = "https://hc079-chat.tteccloud.eu"  + "/api/ChatStyling/Styles/floatingchatbutton/" + displaySettingId;
			var cssLink = document.createElement("link");
		    cssLink.rel = "stylesheet";
            cssLink.href = floatingChatButtonCssUrl;
		    document.head.appendChild(cssLink);

			var showChat = JSON.parse(localStorage.getItem(showChatKey)) && chatData && chatData.chatId;

			window.addEventListener("message", onReceiveMessage);

			function onReceiveMessage(e) {
				switch (e.data) {
					case "uwfEnableButton":
						enableButton();
						break;
					default:
						console.log("Unknown message received: " + e.data);
						break;
				}
			}

			function enableButton() {
				$("#uwf-chat-button").prop("disabled", false);
				$("#uwf-chat-button").addClass("enabled");
			}

			$("#uwf-chat-button").on("click", function () {
				if (chatData && chatData.chatId) {
					showChat = !showChat;
					localStorage.setItem(showChatKey, JSON.stringify(showChat));
				}
				parent.postMessage("uwfButtonClick", "*");
			});

			$(document).ready(function () {
			    if (showChat) {
			        parent.postMessage("uwfShowChat", "*");
			    }
			    parent.postMessage("uwfButtonReady", "*");
			});
		});
	</script>

</body>
</html>
