function pushGTMSendAMessageEvent(n,t){let i="sam-send-a-message";switch(n){case t.AddWarranty:i="sam-add-warranty";break;case t.MakeAnOffer:i="sam-make-an-offer";break;case t.VideoChat:i="sam-video-chat"}tradePubGTMPushEvent(i)}function tradePubGTMPushEvent(n){n&&n!=""&&(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:n}))}(function(n){const t={WhatsApp:{ClassName:".gtm-whatsapp",EventType:"whatsapp"},Messenger:{ClassName:".gtm-messenger",EventType:"messenger"},PhoneCall:{ClassName:".gtm-call",EventType:"call"},PhoneSMS:{ClassName:".gtm-sms",EventType:"sms"}};n(document).ready(function(){Array.prototype.forEach.call(Object.keys(t).map(function(n){return t[n]}),function(t){let i=n(t.ClassName);i&&i.click(function(){tradePubGTMPushEvent(t.EventType)})})})})(jQuery)