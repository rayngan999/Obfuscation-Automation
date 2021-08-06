<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Prechat Form</title>
    <link href="/Scripts/PreChat/styles.css" rel="stylesheet"/>
<link href="/Content/fontawesome/css/font-awesome.min.css" rel="stylesheet"/>
<link href="/Content/uwfcustom.css" rel="stylesheet"/>

    
</head>
<body>
    

<pre-chat-root data-module-path="./pre-chat/pre-chat-app.module#PreChatAppModule">
</pre-chat-root>

<script type="text/javascript" src="/Scripts/PreChat/runtime.js"></script>
<script type="text/javascript" src="/Scripts/PreChat/polyfills.js"></script>
<script src="/Scripts/jquery-3.4.1.js"></script>
<script src="/Scripts/jquery-migrate-3.1.0.js"></script>
<script src="/Scripts/js-cookie/js.cookie.js"></script>
<script src="/Scripts/customerChat-helper.js"></script>



    <script src="/Scripts/modernizr-2.6.2.js"></script>
<script src="/Scripts/jquery-3.4.1.js"></script>
<script src="/Scripts/jquery-migrate-3.1.0.js"></script>
<script src="/Scripts/js-cookie/js.cookie.js"></script>
<script src="/Scripts/jquery.unobtrusive-ajax.js"></script>
<script src="/Scripts/jquery.validate.js"></script>
<script src="/Scripts/jquery.validate.unobtrusive.js"></script>

    
    <script>
        var model = {"error":null,"recaptchaEnabled":false,"reCaptchaSiteKey":"","userLanguage":"","customerTimeout":120,"displaySettingId":"2","overriddenSkillAddresses":"VWPC_Chat","targetSkillAddress":"VWPC_Chat","clearCache":false,"referrer":"https://www.volkswagen.co.uk"};
    if (model.clearCache) {
            var helper = upstream.customerchat.helpers;
            var data = helper.getChatData(model.referrer);
            model.targetSkillAddress = data.targetSkillAddress;
            model.overriddenSkillAddresses = data.overriddenSkillAddresses;
            model.userLanguage = data.userLanguage;
            model.clearCache = false;
            parent.postMessage("uwfResetChatEnvironment", "*");
            helper.clearChatData(model.referrer);
        }
        parent.postMessage("uwfResetFormSubmitted", "*");
        var resources = {"InvalidEmail":"Please enter a valid email","Required":"Required","Close":"Close"};
    </script>

    <script src="/Scripts/customerChat-helper.js"></script>
<script src="/Scripts/customerChat-prechat.js"></script>



    <script type="text/javascript" src="/Scripts/PreChat/main.js"></script>

</body>
</html>
