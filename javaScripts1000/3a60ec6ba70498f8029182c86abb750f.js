<!DOCTYPE html><html><head><meta charset="utf-8"><script type="text/javascript" src="https://amonsul.betssonpalantir.com/amonsul-receiver.js?v=1626044100000"></script><script type="text/javascript">amonsulSender = new __AmonsulSender('amonsul.betssonpalantir.com');
var rpc = new easyXDM.Rpc({}, {
    local: {
        postData: function(data){
            amonsulSender.logRawMessage(data);
        },
        logEvent: function (data) {
            amonsulSender.logEventMessage(data.userId, data.category, data.action, data.label, data.customData);
        },
        getAmonsulCookie: function(fn) {
            amonsulSender.getTrackingInfo(fn);
        }
    }
});</script></head><body></body></html>