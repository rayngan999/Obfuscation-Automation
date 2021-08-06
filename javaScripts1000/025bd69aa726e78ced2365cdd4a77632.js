ï»¿var upstream = upstream || {};
upstream.customerchat = upstream.customerchat || {};
upstream.customerchat.helpers = (function ($) {
	var chatDataKey = "com.upstreamworks.chat";
    var showChatKey = "com.upstreamworks.chat.showChat";
    // SUP-3322, adding this variable to make switching b/w browser storage easy, another one can be localStorage 
    var browserStorage = localStorage; 

    function logError(error) {
        if (console) {
            console.error ? console.error(error) : console.log ? console.log(error) : void 0;
        }
    }

    function initChatData(referrer) {
        if (!referrer)
            referrer = window.location.origin;
        return {
            chatId: undefined,
            referrer: referrer,
            lastModified: Date.now(),
            transcriptRequested: false
        };
    }

    function loadChatData(referrer) {
        if (!referrer)
            referrer = window.location.origin;
        return JSON.parse(browserStorage.getItem(chatDataKey + referrer));
    }

    function getChatData(referrer) {
        return loadChatData(referrer) || initChatData(referrer);
    }

    function setChatData(chatData) {
        if (!chatData) {
            throw new Error("chatData cannot be null or undefined");
        }
        if (!chatData.referrer)
            chatData.referrer = window.location.origin;
        try {
            browserStorage.setItem(chatDataKey + chatData.referrer.toString(), JSON.stringify(chatData));
        } catch (e) {
            logError(e.message);
        }
    }

    function updateLastModified(referrer) {
        var data = getChatData(referrer);
        data.lastModified = Date.now();
        data.referrer = referrer;
        setChatData(data);
    }

    function clearChatData(referrer) {
        try {
            if (!referrer)
                referrer = window.location.origin;
            browserStorage.removeItem(chatDataKey + referrer.toString());
        } catch (e) {
            logError(e.message);
        }
    }

    function updateShowChatState() {
        try {
            var showChat = JSON.parse(browserStorage.getItem(showChatKey));
            showChat = !showChat;
            browserStorage.setItem(showChatKey, JSON.stringify(showChat));
        }
        catch (e) {
            logError(e.message);
        }
    }

    function clearShowChatState() {
        try {
            browserStorage.removeItem(showChatKey);
        } catch (e) {
            logError(e.message);
        }
    }

    function isChatExpired(referrer, offlineTimeout) {
        var chatData = getChatData(referrer);
        if (!chatData || !chatData.chatId || !chatData.lastModified || !offlineTimeout) {
            return true;
        }
        return Date.now() - chatData.lastModified > offlineTimeout;
    }

    return {
        getChatData: getChatData,
        setChatData: setChatData,
        updateLastModified: updateLastModified,
        clearChatData: clearChatData,
        isChatExpired: isChatExpired,
        updateShowChatState: updateShowChatState,
        clearShowChatState: clearShowChatState,
ââââ    GetTimeZoneName: function (data) {
âââââ       var timeSummer = new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0));
            var summerOffset = -1 * timeSummer.getTimezoneOffset();
            var timeWinter = new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0));
            var winterOffset = -1 * timeWinter.getTimezoneOffset();
            var timeZoneHiddenField;

            if (-720 == summerOffset && -720 == winterOffset) { timeZoneHiddenField = 'Dateline Standard Time'; }
            else if (-660 == summerOffset && -660 == winterOffset) { timeZoneHiddenField = 'UTC-11'; }
            else if (-660 == summerOffset && -600 == winterOffset) { timeZoneHiddenField = 'Hawaiian Standard Time'; }
            else if (-570 == summerOffset && -570 == winterOffset) { timeZoneHiddenField = 'Pacific/Marquesas'; }
            else if (-480 == summerOffset && -540 == winterOffset) { timeZoneHiddenField = 'Alaskan Standard Time'; }
            else if (-420 == summerOffset && -480 == winterOffset) { timeZoneHiddenField = 'Pacific Standard Time'; }
            else if (-420 == summerOffset && -420 == winterOffset) { timeZoneHiddenField = 'US Mountain Standard Time'; }
            else if (-360 == summerOffset && -420 == winterOffset) { timeZoneHiddenField = 'Mountain Standard Time'; }
            else if (-360 == summerOffset && -360 == winterOffset) { timeZoneHiddenField = 'Central America Standard Time'; }
            else if (-300 == summerOffset && -360 == winterOffset) { timeZoneHiddenField = 'Central Standard Time'; }
            else if (-300 == summerOffset && -300 == winterOffset) { timeZoneHiddenField = 'SA Pacific Standard Time'; }
            else if (-240 == summerOffset && -300 == winterOffset) { timeZoneHiddenField = 'Eastern Standard Time'; }
            else if (-270 == summerOffset && -270 == winterOffset) { timeZoneHiddenField = 'Venezuela Standard Time'; }
            else if (-240 == summerOffset && -240 == winterOffset) { timeZoneHiddenField = 'SA Western Standard Time'; }
            else if (-240 == summerOffset && -180 == winterOffset) { timeZoneHiddenField = 'Central Brazilian Standard Time'; }
            else if (-180 == summerOffset && -240 == winterOffset) { timeZoneHiddenField = 'Atlantic Standard Time'; }
            else if (-180 == summerOffset && -180 == winterOffset) { timeZoneHiddenField = 'Montevideo Standard Time'; }
            else if (-180 == summerOffset && -120 == winterOffset) { timeZoneHiddenField = 'E. South America Standard Time'; }
            else if (-150 == summerOffset && -210 == winterOffset) { timeZoneHiddenField = 'Mid-Atlantic Standard Time'; }
            else if (-120 == summerOffset && -180 == winterOffset) { timeZoneHiddenField = 'America/Godthab'; }
            else if (-120 == summerOffset && -120 == winterOffset) { timeZoneHiddenField = 'UTC-02'; }
            else if (-60 == summerOffset && -60 == winterOffset) { timeZoneHiddenField = 'Cape Verde Standard Time'; }
            else if (0 == summerOffset && -60 == winterOffset) { timeZoneHiddenField = 'Azores Daylight Time'; }
            else if (0 == summerOffset && 0 == winterOffset) { timeZoneHiddenField = 'UTC'; }
            else if (60 == summerOffset && 0 == winterOffset) { timeZoneHiddenField = 'GMT Standard Time'; }
            else if (60 == summerOffset && 60 == winterOffset) { timeZoneHiddenField = 'Africa/Algiers'; }
            else if (60 == summerOffset && 120 == winterOffset) { timeZoneHiddenField = 'Namibia Standard Time'; }
            else if (120 == summerOffset && 60 == winterOffset) { timeZoneHiddenField = 'Central European Standard Time'; }
            else if (120 == summerOffset && 120 == winterOffset) { timeZoneHiddenField = 'South Africa Standard Time'; }
            else if (180 == summerOffset && 120 == winterOffset) { timeZoneHiddenField = 'GTB Standard Time'; }
            else if (180 == summerOffset && 180 == winterOffset) { timeZoneHiddenField = 'E. Africa Standard Time'; }
            else if (240 == summerOffset && 180 == winterOffset) { timeZoneHiddenField = 'Russian Standard Time'; }
            else if (240 == summerOffset && 240 == winterOffset) { timeZoneHiddenField = 'Arabian Standard Time'; }
            else if (270 == summerOffset && 210 == winterOffset) { timeZoneHiddenField = 'Iran Standard Time'; }
            else if (270 == summerOffset && 270 == winterOffset) { timeZoneHiddenField = 'Afghanistan Standard Time'; }
            else if (300 == summerOffset && 240 == winterOffset) { timeZoneHiddenField = 'Pakistan Standard Time'; }
            else if (300 == summerOffset && 300 == winterOffset) { timeZoneHiddenField = 'West Asia Standard Time'; }
            else if (330 == summerOffset && 330 == winterOffset) { timeZoneHiddenField = 'India Standard Time'; }
            else if (345 == summerOffset && 345 == winterOffset) { timeZoneHiddenField = 'Nepal Standard Time'; }
            else if (360 == summerOffset && 300 == winterOffset) { timeZoneHiddenField = 'N. Central Asia Standard Time'; }
            else if (360 == summerOffset && 360 == winterOffset) { timeZoneHiddenField = 'Central Asia Standard Time'; }
            else if (390 == summerOffset && 390 == winterOffset) { timeZoneHiddenField = 'Myanmar Standard Time'; }
            else if (420 == summerOffset && 360 == winterOffset) { timeZoneHiddenField = 'North Asia Standard Time'; }
            else if (420 == summerOffset && 420 == winterOffset) { timeZoneHiddenField = 'SE Asia Standard Time'; }
            else if (480 == summerOffset && 420 == winterOffset) { timeZoneHiddenField = 'North Asia East Standard Time'; }
            else if (480 == summerOffset && 480 == winterOffset) { timeZoneHiddenField = 'China Standard Time'; }
            else if (540 == summerOffset && 480 == winterOffset) { timeZoneHiddenField = 'Yakutsk Standard Time'; }
            else if (540 == summerOffset && 540 == winterOffset) { timeZoneHiddenField = 'Tokyo Standard Time'; }
            else if (570 == summerOffset && 570 == winterOffset) { timeZoneHiddenField = 'Cen. Australia Standard Time'; }
            else if (570 == summerOffset && 630 == winterOffset) { timeZoneHiddenField = 'Australia/Adelaide'; }
            else if (600 == summerOffset && 540 == winterOffset) { timeZoneHiddenField = 'Asia/Yakutsk'; }
            else if (600 == summerOffset && 600 == winterOffset) { timeZoneHiddenField = 'E. Australia Standard Time'; }
            else if (600 == summerOffset && 660 == winterOffset) { timeZoneHiddenField = 'AUS Eastern Standard Time'; }
            else if (630 == summerOffset && 660 == winterOffset) { timeZoneHiddenField = 'Australia/Lord_Howe'; }
            else if (660 == summerOffset && 600 == winterOffset) { timeZoneHiddenField = 'Tasmania Standard Time'; }
            else if (660 == summerOffset && 660 == winterOffset) { timeZoneHiddenField = 'West Pacific Standard Time'; }
            else if (690 == summerOffset && 690 == winterOffset) { timeZoneHiddenField = 'Central Pacific Standard Time'; }
            else if (720 == summerOffset && 660 == winterOffset) { timeZoneHiddenField = 'Magadan Standard Time'; }
            else if (720 == summerOffset && 720 == winterOffset) { timeZoneHiddenField = 'Fiji Standard Time'; }
            else if (720 == summerOffset && 780 == winterOffset) { timeZoneHiddenField = 'New Zealand Standard Time'; }
            else if (765 == summerOffset && 825 == winterOffset) { timeZoneHiddenField = 'Pacific/Chatham'; }
            else if (780 == summerOffset && 780 == winterOffset) { timeZoneHiddenField = 'Tonga Standard Time'; }
            else if (840 == summerOffset && 840 == winterOffset) { timeZoneHiddenField = 'Pacific/Kiritimati'; }
            else { timeZoneHiddenField = 'Eastern Standard Time'; }
            return timeZoneHiddenField;
        }
    };
}(jQuery));