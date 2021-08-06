(function(){
  Yo.rum.initialize("https://qoe-1.yottaa.net/log-nt/event", false, "YXYI-443SSSixA", true);
  // Using Profile: Default Profile

  Yo.rum.set("profileId", 24884);

  // Optimization Status

  Yo.rum.set("optState", "active");

  // Action JavaScript

!function(){var e=null;if(document.body)return Yo.utils.log("Sequence body node, it already exists"),
void Yo.sequence.node(document.body);"undefined"!=typeof MutationObserver&&null==e&&(e=new MutationObserver(function(o){
for(var n=0;n<o.length;n++)for(var t=o[n].addedNodes,d=0;d<t.length;d++){
var u=t[d];u.nodeType===Node.ELEMENT_NODE&&"BODY"===u.nodeName&&
(Yo.utils.log("Sequence body node, found be MutationObserver"),Yo.sequence.node(u),e.disconnect())}}),
Yo.utils.log("MutationObserver to find body node"),e.observe(document,{childList:!0,subtree:!0,attributes:!1,characterData:!1}))}
(document,MutationObserver);
  // Action Sequence

  Yo.sequence.resource(Yo.utils.decodeSafeString("widgets.stores.saksfifthavenue")).none();

  // Action Sequence Shoprunner

  Yo.sequence.resource(Yo.utils.decodeSafeString("shoprunner")).none();

  // Action Sequence

  Yo.sequence.resource(Yo.utils.decodeSafeString("zeronaught")).none();

  // Action Sequence Salesforce Commerce Cloud | CQuotient

  Yo.sequence.resource(Yo.utils.decodeSafeString("cquotient.com")).none();

  // Action Sequence Salesforce Live Agent

  Yo.sequence.resource(Yo.utils.decodeSafeString("salesforceliveagent.com")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("liveagent.esw.min.js")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("service.force.com/embeddedservice")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("secure.force.com/liveagentm")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("liveagent.force.com")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("chat.secure.force.com")).none();

  // Action Sequence

  Yo.sequence.resource(Yo.utils.decodeSafeString("firebase")).none();

  // Action Sequence Optimizely

  Yo.sequence.resource(Yo.utils.decodeSafeString("optimizely.com")).none();

  // Action Sequence jQuery

  Yo.sequence.resource(Yo.utils.decodeSafeString("jquery")).none();

  // Action Sequence iFrames

  Yo.sequence.resource(Yo.utils.decodeSafeString("about:blank")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("javascript:")).none();

  // Action Sequence Google Analytics Universal

  Yo.sequence.resource(Yo.utils.decodeSafeString("analytics.js")).none();

  // Action Sequence Google Tag Manager

  Yo.sequence.resource(Yo.utils.decodeSafeString("googletagmanager")).none();

  // Action Sequence Adobe Analytics

  Yo.sequence.resource(Yo.utils.decodeSafeString("omtrdc.net/")).none();

  // Action Sequence Adobe Dynamic Media

  Yo.sequence.resource(Yo.utils.decodeSafeString("scene7.com")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("BasicZoomViewer.js")).none();

  // Action Sequence Adobe Tag Manager

  Yo.sequence.resource(Yo.utils.decodeSafeString("/satellite-")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("/satelliteLib-")).none();

  Yo.sequence.resource(Yo.utils.decodeSafeString("adobedtm.com")).none();

  // Action Sequence

  Yo.sequence.resource("//" + window.location.hostname).none();

  // Action Priority

Yo.schedule.spread(10);
})();
