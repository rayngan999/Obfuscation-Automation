!(function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)})([(function(e,t,i){function n(){function e(e){var t=i(148),n=[t];n.push(i(150)),n.push(i(156)),n.push(i(159)),n.push(i(162)),n.push(i(164)),n.push(i(173)),n.push(i(176)),n.push(i(178)),n.push(i(181)),n.push(i(185)),n.push(i(188)),n.push(i(192)),n.push(i(196)),n.push(i(200)),n.push(i(205)),n.push(i(206)),n.push(i(209)),n.push(i(210)),n.push(i(213)),n.push(i(217)),n.push(i(219)),n.push(i(224)),n.push(i(227)),n.push(i(228)),g.initializePlugins(n)}function t(e,t,i){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",i.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var n=i(1);n.initialize();var r=i(83),a=i(23),o=i(16);i(129);var s=o.get("stores/directive"),c=i(91);if(!c.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var u,l=i(131),d=i(118),f=i(132),p={"listTargetingKeys": [], "anonymizeIP": false, "tagGroups": [{"id": "116", "tags": [{"viewId": "8334581343", "tagApiName": "product_name"}, {"viewId": "8334581343", "tagApiName": "product_page_description"}, {"viewId": "8334581343", "tagApiName": "product_description_hws"}]}], "dcpServiceId": "13640430390", "audiences": [{"conditions": ["and", ["or", ["or", {"value": "document.getElementById(\"jsIsMobile\").value == 1", "type": "code", "name": null, "match": null}]]], "id": "8404480156", "name": "Mobile Phone"}, {"conditions": ["and", ["or", ["or", {"value": "desktop", "type": "device", "name": null, "match": null}, {"value": "tablet", "type": "device", "name": null, "match": null}, {"value": "ipad", "type": "device", "name": null, "match": null}]], ["or", ["or", {"value": "document.getElementById(\"jsIsMobile\").value == 0", "type": "code", "name": null, "match": null}]]], "id": "10368458633", "name": "Desktop/Tablet Only"}, {"conditions": ["and", ["or", ["or", {"value": "US|CA|COSTAMESA", "type": "location", "name": null, "match": null}, {"value": "US|CA|FOUNTAINVALLEY", "type": "location", "name": null, "match": null}, {"value": "US|CA|HUNTINGTONBEACH", "type": "location", "name": null, "match": null}, {"value": "US|CA|NEWPORTBEACH", "type": "location", "name": null, "match": null}, {"value": "US|CA|IRVINE", "type": "location", "name": null, "match": null}, {"value": "US|CA|SANTAANA", "type": "location", "name": null, "match": null}, {"value": "US|CA|WESTMINSTER", "type": "location", "name": null, "match": null}, {"value": "US|CA|MIDWAYCITY", "type": "location", "name": null, "match": null}, {"value": "US|CA|GARDENGROVE", "type": "location", "name": null, "match": null}, {"value": "US|CA|ORANGE", "type": "location", "name": null, "match": null}, {"value": "US|CA|TUSTIN", "type": "location", "name": null, "match": null}, {"value": "US|CA|SEALBEACH", "type": "location", "name": null, "match": null}, {"value": "US|CA|LOSALAMITOS", "type": "location", "name": null, "match": null}, {"value": "US|CA|CYPRESS", "type": "location", "name": null, "match": null}, {"value": "US|CA|STANTON", "type": "location", "name": null, "match": null}, {"value": "US|CA|ANAHEIM", "type": "location", "name": null, "match": null}, {"value": "US|CA|BUENAPARK", "type": "location", "name": null, "match": null}, {"value": "US|CA|FULLERTON", "type": "location", "name": null, "match": null}, {"value": "US|CA|PLACENTIA", "type": "location", "name": null, "match": null}, {"value": "US|CA|YORBALINDA", "type": "location", "name": null, "match": null}, {"value": "US|CA|VILLAPARK", "type": "location", "name": null, "match": null}, {"value": "US|CA|LAKEFOREST", "type": "location", "name": null, "match": null}, {"value": "US|CA|MISSIONVIEJO", "type": "location", "name": null, "match": null}, {"value": "US|CA|LAGUNAHILLS", "type": "location", "name": null, "match": null}, {"value": "US|CA|LAGUNABEACH", "type": "location", "name": null, "match": null}, {"value": "US|CA|LAGUNANIGUEL", "type": "location", "name": null, "match": null}, {"value": "US|CA|LADERARANCH", "type": "location", "name": null, "match": null}, {"value": "US|CA|SANCLEMENTE", "type": "location", "name": null, "match": null}]]], "id": "18391240380", "name": "South Coast Store Geo Audience"}], "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('10375182457', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['10375182457'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [{"name":"eVar","default_value":"eVar85"}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        var decisionString = window.optimizely.get('state').getDecisionString({campaignId: campaignId});
var eVar = extension.eVar;
var prop = "prop60";
var campaignObject = {};
if (!!eVar) campaignObject[eVar] = decisionString;
if (!!prop) campaignObject[prop] = decisionString;
 window.omntag = window.omntag || [];
// Public Methods
var adobeIntegrator = {
	// Array of active campaigns/experiments
	campaignArray: [],
	// Accepts "s" variable as a param and assigns eVars to object.
	assignCampaigns: function(sVariable) {
		for (var i = this.campaignArray.length-1; i >= 0; i--) {
			Object.assign(sVariable, this.campaignArray[i]);
			this.campaignArray.splice(i, 1);
		}
	},
	// Accepts "s" variable as a param and assigns eVars to object, then dispatches custom link tracking.
	trackDelayedCampaigns: function(sVariable) {
		for (var i = this.campaignArray.length-1; i >= 0; i--) {
      sVariable.linkTrackVars += "," + Object.keys(this.campaignArray[i])[0];
			Object.assign(sVariable, this.campaignArray[i]);
			this.campaignArray.splice(i, 1);
		}
		sVariable.tl(true, "o", "OptimizelyLayerDecision");
	}
};
// Scopes `campaignArray` to Optimizely object.
if (window.optimizely.get("custom/adobeIntegrator") === undefined) {
	window.optimizely.push({
		type: "registerModule",
		moduleName: "adobeIntegrator",
		module: adobeIntegrator
	});
}
// Failing Audiences returns `null`, failing Traffic Allocation returns `undefined` for decisionString.
if (!!decisionString) {
	window.optimizely.get("custom/adobeIntegrator").campaignArray.push(campaignObject);
  window.optimizely.get('custom/adobeIntegrator').assignCampaigns(omntag);
}

      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
PluginManager.registerAnalyticsTracker('20160311170', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['20160311170'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [{"name":"qm_decision_id","default_value":"366"},{"name":"qm_campaign_id","default_value":""},{"name":"qm_experiment_id","default_value":"138"},{"name":"qm_variation_id","default_value":"139"},{"name":"qm_holdback_id","default_value":""}];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        // Get the decision from the decision Object
var decisionObject = window.optimizely.get("state").getDecisionObject({
  campaignId: campaignId,
  shouldCleanString: true
});

function sendDecisionData() {
  if(decisionObject == null) {
    return;
  }
  
  if (extension.qm_decision_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_decision_id,
      0,
        " \nExperiment: " +
        decisionObject.experiment +
        " \nVariation: " +
        decisionObject.variation
    );
  }
  if (extension.qm_campaign_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_campaign_id,
      0,
      decisionObject.campaign
    );
  }
  if (extension.qm_experiment_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_experiment_id,
      0,
      decisionObject.experiment
    );
  }
  if (extension.qm_variation_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_variation_id,
      0,
      decisionObject.variation
    );
  }
  if (extension.qm_holdback_id) {
    window.QuantumMetricAPI.sendEvent(
      extension.qm_holdback_id,
      0,
      decisionObject.variation
    );
  }
}

if (!!window.QuantumMetricAPI) {
  sendDecisionData();
} else {
  window.addEventListener("quantumReady", sendDecisionData);
}
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}
], "accountId": "7871036", "layers": [{"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10752991729"], "experiments": [{"weightDistributions": [{"entityId": "10759400650", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Fix - FLD and Free Shipping Styling", "bucketingStrategy": null, "variations": [{"id": "10760221934", "actions": [], "name": "Original"}, {"id": "10759400650", "actions": [{"viewId": "10752991729", "changes": [{"dependencies": [], "type": "custom_code", "id": "a1395d8084b740e3bb6f7654807d31f9", "value": function($){var availabilityExtendedModule;
var flxFixGetElementTimeoutId = setInterval(function() {
  availabilityExtendedModule = document.querySelector("[data-module='availabilityExtended']");
  if (availabilityExtendedModule != null) {
    clearInterval(flxFixGetElementTimeoutId);
    setInterval(function() {
      var wrapper = document.querySelector(".availability-wrapper");
      wrapper.after(availabilityExtendedModule);
    }, 500);
  }
}, 500);
}}, {"value": "<style>.promo-popup a, \n.promo-popup, \n.delivery-promo a, \n.delivery-promo {\n    color: #e00e00 !important;\n}\n[data-module=\"availabilityExtended\"] {\n\t\tmargin-bottom: 10px;\n    font-size: 13px;\n    font-family: \"Neue Helvetica W05\",Helvetica,Arial,sans-serif;\n    float: left;\n    clear: both;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "ca5e4d48bf6b44cd9a5ce5c8a0239b16"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "10756403257", "integrationSettings": null}], "id": "10757921026", "weightDistributions": null, "name": "Fix - FLD and Free Shipping Styling", "groupId": null, "commitId": "13570890067", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"20160311170": {"qm_holdback_id": "", "qm_campaign_id": "", "qm_experiment_id": "138", "qm_variation_id": "139", "qm_decision_id": "366"}}, "integrationStringVersion": 2, "viewIds": ["20420433315"], "experiments": [{"weightDistributions": [{"entityId": "20445072004", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX: Hide CB2 Feedback Button", "bucketingStrategy": null, "variations": [{"id": "20416324869", "actions": [], "name": "Original"}, {"id": "20445072004", "actions": [{"viewId": "20420433315", "changes": [{"src": "/actions/df98ae086d1d27859e48f0b2d5d29ab2f45a5ff814de10ea70fb08a5221d99fb.js", "dependencies": [], "id": "6569E11B-26FC-4243-9C24-DB2443F75907"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "20437213468", "integrationSettings": null}], "id": "20431448363", "weightDistributions": null, "name": "FIX: Hide CB2 Feedback Button", "groupId": null, "commitId": "20467812604", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"20160311170": {"qm_holdback_id": "", "qm_campaign_id": "", "qm_experiment_id": "138", "qm_variation_id": "139", "qm_decision_id": "366"}}, "integrationStringVersion": 2, "viewIds": ["20403144885"], "experiments": [{"weightDistributions": [{"entityId": "20387765159", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Fix - Enable Looping Video", "bucketingStrategy": null, "variations": [{"id": "20385707492", "actions": [], "name": "Original"}, {"id": "20387765159", "actions": [{"viewId": "20403144885", "changes": [{"src": "/actions/0553bd3a2bf596c6fb5e5b81b88a09e6bbbfd071e00801370b8d400d301cc6cc.js", "dependencies": [], "id": "946C2B06-0892-46B1-B636-BAC77A458C88"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "20378185249", "integrationSettings": null}], "id": "20383764614", "weightDistributions": null, "name": "Fix - Enable Looping Video", "groupId": null, "commitId": "20405332225", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 1, "viewIds": ["10974230943"], "experiments": [{"weightDistributions": [{"entityId": "10928071366", "endOfRange": 10000}], "audienceName": "Mobile Phone", "name": "Mobile - CB2 Interiors - Modsy - furn product page", "bucketingStrategy": null, "variations": [{"id": "10982740164", "actions": [], "name": "Original"}, {"id": "10928071366", "actions": [{"viewId": "10974230943", "changes": [{"value": "<style>.CB2Interiors {\n       margin-top: 50px;\n       float: left\n   }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "e384c4af1e4f4029ad0bbc8bc33e07f2"}, {"value": "<a class='CB2Interiors' href='https://www.cb2.com/cb2interiors'> \n    <img src='https://images.cb2.com/is/image/CB2/cb2_interiors_fj_banner_19spring_m?fmt=jpg&qlt=80,0&wid=694'\n    alt=\"Need help pulling it all together? Collaborate with an interior designer to create a layout for your space combining new items and pieces you already own. It's the easiest way to decorate.\" /></a>", "selector": "#section-reviews", "dependencies": [], "operator": "before", "type": "append", "id": "6590d4314b744340b7180f0745d11daf"}, {"selector": ".CB2Interiors > img", "dependencies": [], "attributes": {"src": "https://cb2.scene7.com/is/image/CB2/cb2_interiors_fj_banner_19fall_m?wid=694&qlt=70"}, "type": "attribute", "id": "40EABAA9-74A6-4E3D-906F-E8F41265BACF", "css": {}}]}], "name": "Variation #1"}], "audienceIds": ["or", "8404480156"], "changes": null, "id": "10956200892", "integrationSettings": null}], "id": "10968202312", "weightDistributions": null, "name": "Mobile - CB2 Interiors - Modsy - furn product page", "groupId": null, "commitId": "16812130260", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18136766462"], "experiments": [{"weightDistributions": [{"entityId": "18170661851", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - Search Pages - Let's Chat Button Gladly", "bucketingStrategy": null, "variations": [{"id": "18198982459", "actions": [], "name": "Original"}, {"id": "18170661851", "actions": [], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "18152014445", "integrationSettings": null}], "id": "18156043913", "weightDistributions": null, "name": "FIX - Search Pages - Let's Chat Button Gladly", "groupId": null, "commitId": "18176690312", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "2C634814-E150-4A2A-A83A-63BF9590E306", "value": function($){$( document ).ready(function() {
$('.chat-link').click(function(){Gladly.show();})
});
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18265722273"], "experiments": [{"weightDistributions": [{"entityId": "18271333543", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - Remove unneeded promo message on cart page", "bucketingStrategy": null, "variations": [{"id": "18259492748", "actions": [], "name": "Original"}, {"id": "18271333543", "actions": [{"viewId": "18265722273", "changes": [{"value": "<style>span.notesPromoApplied {\n    display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "1C0D2C43-3397-4C12-97C5-FB48C5041AC9"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "18226912444", "integrationSettings": null}], "id": "18263421772", "weightDistributions": null, "name": "FIX - Remove unneeded promo message on cart page", "groupId": null, "commitId": "18265552113", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20477348407"], "experiments": [{"weightDistributions": [{"entityId": "20460518904", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Fix: Recently Viewed styling on the Account Order List page", "bucketingStrategy": null, "variations": [{"id": "20481009172", "actions": [], "name": "Original"}, {"id": "20460518904", "actions": [{"viewId": "20477348407", "changes": [{"dependencies": [], "type": "custom_code", "id": "773133D9-6AE9-487D-82A1-00BE5BF4F0A8", "value": function($){$(".recently-viewed-wrapper").parent().addClass("orders-recently-viewed-container");
}}, {"value": "<style>.adaptive-layout .orders-recently-viewed-container .recently-viewed-wrapper {\n\tdisplay: block;\n\tmax-width: 1080px;\n\tmargin: 0 auto;\n\tpadding: 48px 50px 48px 0;\n\toverflow: hidden;\n}\n.adaptive-layout .orders-recently-viewed-container .recently-viewed-wrapper .section-header {\n\tmargin: 0 0 24px;\n\tfont-size: 20px;\n}\n.adaptive-layout .orders-recently-viewed-container .recently-viewed-wrapper .recently-viewed-product-name,\n  .adaptive-layout .orders-recently-viewed-container .recently-viewed-wrapper .recently-viewed-pricing {\n\tline-height: 20px;\n}\n.adaptive-layout .orders-recently-viewed-container .recently-viewed-wrapper .recently-viewed-pricing .regPrice {\n\tdisplay: inline-block;\n}\n.responsive-layout .orders-recently-viewed-container {\n\tmargin: 12px 0 40px;\n\tmax-width: 1680px;\n\tpadding: 0 1.3em;\n\toverflow: hidden;\n}\n.responsive-layout .orders-recently-viewed-container .recently-viewed-wrapper .section-header {\n\tfont-size: 14px;\n\tmargin: 0 0 9px;\n}\n.responsive-layout .orders-recently-viewed-container .recently-viewed-wrapper .slider-container {\n\toverflow: hidden;\n\tposition: relative;\n\twidth: 100%;\n\tmargin: 0 auto;\n\twhite-space: nowrap;\n}\n.responsive-layout .orders-recently-viewed-container .recently-viewed-wrapper .slider-container .responsive-track {\n\tmargin-left: -6px;\n\toverflow-x: scroll;\n\toverflow-y: hidden;\n}\n.responsive-layout .orders-recently-viewed-container .recently-viewed-wrapper .slider-container .responsive-track .recently-viewed-card {\n\tpadding: 3px 6px 0;\n\twidth: 41.6667%;\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n.responsive-layout .orders-recently-viewed-container .recently-viewed-wrapper .slider-container .responsive-track .recently-viewed-card .recently-viewed-text {\n\tpadding: 10px 0;\n}\n.responsive-layout .orders-recently-viewed-container .recently-viewed-wrapper .slider-container .responsive-track .recently-viewed-card .recently-viewed-text .recently-viewed-product-name,\n          .responsive-layout .orders-recently-viewed-container .recently-viewed-wrapper .slider-container .responsive-track .recently-viewed-card .recently-viewed-text .recently-viewed-pricing {\n\tline-height: 16px;\n}\n.orders-recently-viewed-container {\n\twidth: 100%;\n\tmax-width: none;\n\toverflow: hidden;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n.orders-recently-viewed-container :not(.popup-container) {\n\tbox-sizing: border-box;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .section-header {\n\tfont-weight: 500;\n\tcolor: #666;\n\ttext-align: left;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .showcase-container {\n\toverflow: visible;\n\tmax-width: none;\n\tmargin-left: 3px;\n\tpadding-right: 22px;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-arrow-zone {\n\ttop: -40px;\n\tmax-width: 40px;\n\tmax-height: 40px;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-arrow-zone.showcase-prev-zone {\n\tright: 103px;\n\tleft: auto;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-arrow-zone.showcase-next-zone {\n\tright: 48px;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-arrow-zone .showcase-arrow {\n\tborder: 0;\n\tmargin: 0;\n\theight: 4em;\n\twidth: 4em;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-arrow-zone .showcase-prev[disabled],\n      .orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-arrow-zone .showcase-next[disabled] {\n\tdisplay: block;\n\tbackground: 0 0;\n\ttransition: none;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-arrow-zone .showcase-prev [class*=\"svg-icon-arrow-\"]:not(.svg-icon-arrow-cta),\n      .orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-arrow-zone .showcase-next [class*=\"svg-icon-arrow-\"]:not(.svg-icon-arrow-cta) {\n\tstroke-width: 1px;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-track {\n\tfloat: left;\n\twidth: 100%;\n\twhite-space: nowrap;\n\ttransition: transform 0.5s, -webkit-transform 0.5s;\n\ttransform: translateX(0px);\n\ttouch-action: pan-y;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .showcase-container .showcase-track .showcase-item {\n\tpadding-right: 1.5%;\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .recently-viewed-link {\n\tdisplay: block;\n\tcolor: #666;\n\ttext-decoration: none;\n\twhite-space: normal;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .recently-viewed-link .recently-viewed-image {\n\twidth: 100%;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .recently-viewed-link .recently-viewed-text {\n\tpadding: 12px 0;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .recently-viewed-link .recently-viewed-text .recently-viewed-product-name {\n\tcolor: #666;\n\tfont-size: 12px;\n\ttext-transform: uppercase;\n\tletter-spacing: 1px;\n\twhite-space: normal;\n\tmargin: 0;\n\tdisplay: block;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .recently-viewed-link .recently-viewed-text .recently-viewed-pricing {\n\tfont-size: 12px;\n\twhite-space: normal;\n\tmargin: 0;\n\tdisplay: block;\n}\n.orders-recently-viewed-container .recently-viewed-wrapper .recently-viewed-link .recently-viewed-text .recently-viewed-pricing .sale .regPrice {\n\tmargin-left: 10px;\n\tcolor: #666;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "756BF7B8-0022-443C-A808-68F3AFB19E3F"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "20482987494", "integrationSettings": null}], "id": "20460539536", "weightDistributions": null, "name": "Fix: Recently Viewed styling on the Account Order List page", "groupId": null, "commitId": "20477366577", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20171290287"], "experiments": [{"weightDistributions": [{"entityId": "20169810163", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - Custom Hide Price Group $0 on Legacy Pages", "bucketingStrategy": null, "variations": [{"id": "20155467813", "actions": [], "name": "Original"}, {"id": "20169810163", "actions": [{"viewId": "20171290287", "changes": [{"value": "<style>.disabled-accordion div.special-order-title {\n    display: none;\n}\n\n.disabled-accordion p.special-order-title {\n    display: none;\n}\n\n.disabled-accordion .button-icon-text-container {\n  display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "C97C8CA7-94DD-4007-B853-2865BD9D9642"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "20116467215", "integrationSettings": null}], "id": "20116497848", "weightDistributions": null, "name": "FIX - Custom Hide Price Group $0 on Legacy Pages", "groupId": null, "commitId": "20142689874", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17938000367"], "experiments": [{"weightDistributions": [{"entityId": "17914910300", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX COVID - Vintage Messaging Update", "bucketingStrategy": null, "variations": [{"id": "17918081217", "actions": [], "name": "Original"}, {"id": "17914910300", "actions": [{"viewId": "17938000367", "changes": [{"dependencies": [], "type": "custom_code", "id": "595EF45F-BFDD-4220-B6FC-310ECBC73860", "value": function($){try {
  window.addEventListener('load', function(event) {
  var emptyResult = document.querySelectorAll(".empty-result ")[0];
        emptyResult.innerHTML = "Ferrer Vintage products are only available in stores. Due to the current situation our stores are temporarily closed. Please check back soon.";
});
    
    
}
catch(err) {
  console.log(err);
  console.log("Erro coming from: FIX COVID - Vintage Messaging Update");
}
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17934090899", "integrationSettings": null}], "id": "17924740053", "weightDistributions": null, "name": "FIX COVID - Vintage Messaging Update", "groupId": null, "commitId": "17922471908", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16916081792"], "experiments": [{"weightDistributions": [{"entityId": "16939470420", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - B2B application dual branded logo addition ", "bucketingStrategy": null, "variations": [{"id": "16884811766", "actions": [], "name": "Original"}, {"id": "16939470420", "actions": [{"viewId": "16916081792", "changes": [{"value": "<style>@media only screen and (max-width:768px) { .brandB2b {width: 70%;margin: 2% auto 8%; display: block;}\n.business-sales p {font-size: 14px; line-height: 18px; font-weight: 300; font-family: Lineto Brown Sub;}}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "5C23FE20-0D11-4583-BBEC-2A72908B6CF1"}, {"selector": "h1", "dependencies": [], "attributes": {"html": "<img class=\"brandB2b\" alt=\"Crate and Barrel CB2 Business sales\" src=\"//cb2.scene7.com/is/image/CB2/cb2_b2b_d_logo?fmt=png-alpha\" style=\"width:60%;\">"}, "type": "attribute", "id": "4afc0d69d9aa42beab030ea60bfcb89f", "css": {}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "16936951882", "integrationSettings": null}], "id": "16935370869", "weightDistributions": null, "name": "FIX - B2B application dual branded logo addition ", "groupId": null, "commitId": "16931760693", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["15859530554"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "FIX- Vintage SKUs store messaging", "bucketingStrategy": null, "variations": [{"id": "15838250475", "actions": [], "name": "Original"}], "audienceIds": null, "changes": null, "id": "15863650548", "integrationSettings": null}], "id": "15840450010", "weightDistributions": null, "name": "FIX- Vintage SKUs store messaging", "groupId": null, "commitId": "20285260545", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"value": "<style>.adaptive-layout .vintage-skus {\n  padding: 0;\n}\n\n.vintage-skus p {\n  font-weight: 300;\n  font-size: 14px;\n  color: #222;\n  font-family: \"Lineto Brown Sub\", \"Lineto Brown Light Sub\", Verdana, sans-serif;\n  line-height: 24px;\n  margin: 0;\n}\n\n.vintage-skus span {\n  text-decoration: underline;\n}\n\n.promo-bar-text-block,\n.shop-button-container,\n.review-main-container .a11y-drawers,\n.assembly-main-container\n\t{\n  \tdisplay: none;\n}\n\n.tabpanel-header {\n  font-weight: 500;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: .1em;\n}\n\n.sr-container {\n\tdisplay: none !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "79112193eef346c290ae0d6f747cf000"}, {"dependencies": [], "type": "custom_code", "id": "c18025506894433dad63c12d91635394", "value": function($){// https://crateandbarrel.atlassian.net/browse/PERS-26

/**
 * object namespace 
 */
window.CBPLA = window.CBPLA || {};

// json created from https://docs.google.com/spreadsheets/d/1EJjFwwuGOVV6a3lGQ_rhLDjI38iJnfxNukUhj0S-AAM/edit#gid=0, batch 1,2 and 3
window.vintageSkus = {
    "268063": {
        "SKU": "268063",
        "URL": "https://www.cb2.com/layered-pendant-light/s268063",
        "Product Name": "Layered Pendant Light",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "268055": {
        "SKU": "268055",
        "URL": "https://www.cb2.com/layered-pendant-light/s268055",
        "Product Name": "Layered Pendant Light",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "268036": {
        "SKU": "268036",
        "URL": "https://www.cb2.com/layered-pendant-light/s268036",
        "Product Name": "Layered Pendant Light",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "268111": {
        "SKU": "268111",
        "URL": "https://www.cb2.com/white-wall-lamp/s268111",
        "Product Name": "White Wall Lamp",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "268323": {
        "SKU": "268323",
        "URL": "https://www.cb2.com/teal-planter/s268323",
        "Product Name": "Teal Planter",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "267998": {
        "SKU": "267998",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267998",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "267986": {
        "SKU": "267986",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267986",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "212-219-1454"
    },
    "267927": {
        "SKU": "267927",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267927",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "267-385-8198"
    },
    "267936": {
        "SKU": "267936",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267936",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "267-385-8198"
    },
    "267955": {
        "SKU": "267955",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267955",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "267-385-8198"
    },
    "267974": {
        "SKU": "267974",
        "URL": "https://www.cb2.com/wood-and-black-leather-chair/s267974",
        "Product Name": "Wood and Black Leather Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "267-385-8198"
    },
    "252574": {
        "SKU": "252574",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252574",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "251571": {
        "SKU": "251571",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s251571",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252592": {
        "SKU": "252592",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252592",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252607": {
        "SKU": "252607",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252607",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252610": {
        "SKU": "252610",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252610",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252630": {
        "SKU": "252630",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s252630",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252668": {
        "SKU": "252668",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s252668",
        "Product Name": "Joseph Andre Motte Slpr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252706": {
        "SKU": "252706",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s252706",
        "Product Name": "Joseph Andre Motte Slpr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252736": {
        "SKU": "252736",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s252736",
        "Product Name": "Joseph Andre Motte Slpr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252696": {
        "SKU": "252696",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s252696",
        "Product Name": "Joseph Andre Motte Slpr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "252799": {
        "SKU": "252799",
        "URL": "https://www.cb2.com/eddie-harlis-chair-by-thonet/s252799",
        "Product Name": "Eddie Harlis ChairbyT honet",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253095": {
        "SKU": "253095",
        "URL": "https://www.cb2.com/gaetano-sciolari-cubic-table-lamp/s253095",
        "Product Name": "Gaetano Sciolari Cubic Tbl Lamp",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253176": {
        "SKU": "253176",
        "URL": "https://www.cb2.com/doria-pendant-light-in-black-and-white/s253176",
        "Product Name": "Doria Pendant Light Blk Wht",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253253": {
        "SKU": "253253",
        "URL": "https://www.cb2.com/art-deco-reclining-sling-leather-chair/s253253",
        "Product Name": "Art Deco Reclining Sling Lthr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "364961": {
        "SKU": "364961",
        "URL": "https://www.cb2.com/art-deco-reclining-sling-leather-chair/s364961",
        "Product Name": "Art Deco Reclining Sling Lthr Chr",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253592": {
        "SKU": "253592",
        "URL": "https://www.cb2.com/large-metal-table-lamp/s253592",
        "Product Name": "Large Metal Table Lamp",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "253584": {
        "SKU": "253584",
        "URL": "https://www.cb2.com/large-metal-table-lamp/s253584",
        "Product Name": "Large Metal Table Lamp",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "267677": {
        "SKU": "267677",
        "URL": "https://www.cb2.com/white-table-vase/s267677",
        "Product Name": "White Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "273508": {
        "SKU": "273508",
        "URL": "https://www.cb2.com/brown-table-vase/s273508",
        "Product Name": "Tall Brown Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "273510": {
        "SKU": "273510",
        "URL": "https://www.cb2.com/brown-table-vase/s273510",
        "Product Name": "Brown Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "323-848-7111"
    },
    "254755": {
        "SKU": "254755",
        "URL": "https://www.cb2.com/maison-regain-dining-chair/s254755",
        "Product Name": "Maison Regain Dng Chair",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254809": {
        "SKU": "254809",
        "URL": "https://www.cb2.com/maison-regain-dining-chair/s254809",
        "Product Name": "Maison Regain Dng Chair",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254906": {
        "SKU": "254906",
        "URL": "https://www.cb2.com/limburg-glass-pendant/s254906",
        "Product Name": "Limburg Glass Pendant",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254918": {
        "SKU": "254918",
        "URL": "https://www.cb2.com/limburg-glass-pendant/s254918",
        "Product Name": "Limburg Glass Pendant",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254923": {
        "SKU": "254923",
        "URL": "https://www.cb2.com/limburg-glass-pendant/s254923",
        "Product Name": "Limburg Glass Pendant",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254937": {
        "SKU": "254937",
        "URL": "https://www.cb2.com/limburg-glass-pendant/s254937",
        "Product Name": "Limburg Glass Pendant",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "254981": {
        "SKU": "254981",
        "URL": "https://www.cb2.com/renato-toso-pendant-lamp/s254981",
        "Product Name": "Renato Toso Melania Pndnt Lmp",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275218": {
        "SKU": "275218",
        "URL": "https://www.cb2.com/ole-wanscher-lounge-chair/s275218",
        "Product Name": "Ole Wanscher Lounger Chair",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275260": {
        "SKU": "275260",
        "URL": "https://www.cb2.com/ole-wanscher-lounge-chair/s275260",
        "Product Name": "Ole Wanscher Lounger Chair",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275295": {
        "SKU": "275295",
        "URL": "https://www.cb2.com/modular-sculpture/s275295",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275307": {
        "SKU": "275307",
        "URL": "https://www.cb2.com/modular-sculpture/s275307",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275311": {
        "SKU": "275311",
        "URL": "https://www.cb2.com/modular-sculpture/s275311",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275324": {
        "SKU": "275324",
        "URL": "https://www.cb2.com/modular-sculpture/s275324",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275348": {
        "SKU": "275348",
        "URL": "https://www.cb2.com/modular-sculpture/s275348",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "278048": {
        "SKU": "278048",
        "URL": "https://www.cb2.com/modular-sculpture/s278048",
        "Product Name": "Modular Sculpture Type D",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275467": {
        "SKU": "275467",
        "URL": "https://www.cb2.com/purple-vase/s275467",
        "Product Name": "Purple Vase",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "275493": {
        "SKU": "275493",
        "URL": "https://www.cb2.com/purple-vase/s275493",
        "Product Name": "Purple Vase",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "278376": {
        "SKU": "278376",
        "URL": "https://www.cb2.com/modular-sculpture/s278376",
        "Product Name": "Modular Sculpture Type A",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "278382": {
        "SKU": "278382",
        "URL": "https://www.cb2.com/modular-sculpture/s278382",
        "Product Name": "Modular Sculpture Type A",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "278391": {
        "SKU": "278391",
        "URL": "https://www.cb2.com/modular-sculpture/s278391",
        "Product Name": "Modular Sculpture Type A",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "415-834-9370"
    },
    "256344": {
        "SKU": "256344",
        "URL": "https://www.cb2.com/ilmari-tapiovaara-stool/s256344",
        "Product Name": "Ilmari Tapiovaara Stool",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256381": {
        "SKU": "256381",
        "URL": "https://www.cb2.com/ilmari-tapiovaara-stool/s256381",
        "Product Name": "Ilmari Tapiovaara Stool",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256397": {
        "SKU": "256397",
        "URL": "https://www.cb2.com/saporiti-armchair/s256397",
        "Product Name": "Saporiti Armchair",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "256403": {
        "SKU": "256403",
        "URL": "https://www.cb2.com/saporiti-armchair/s256403",
        "Product Name": "Saporiti Armchair",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "256459": {
        "SKU": "256459",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s256459",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256467": {
        "SKU": "256467",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s256467",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "256470": {
        "SKU": "256470",
        "URL": "https://www.cb2.com/raak-white-wall-lamp/s256470",
        "Product Name": "RAAK Wall Lamp White",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "305-672-5155"
    },
    "255350": {
        "SKU": "255350",
        "URL": "https://www.cb2.com/guglielmo-ulrich-wood-and-brass-coffee-table/s255350",
        "Product Name": "Guglielmolrich Wood Brass Tbl",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "255382": {
        "SKU": "255382",
        "URL": "https://www.cb2.com/cylindrical-raak-pendant/s255382",
        "Product Name": "RAAK Cylindrical Pendant",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "255406": {
        "SKU": "255406",
        "URL": "https://www.cb2.com/cylindrical-raak-pendant/s255406",
        "Product Name": "RAAK Cylindrical Pendant",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "255425": {
        "SKU": "255425",
        "URL": "https://www.cb2.com/rispal-three-glass-shade-pendant/s255425",
        "Product Name": "Rispal Three Glass Shade Pendant",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280428": {
        "SKU": "280428",
        "URL": "https://www.cb2.com/grey-vase/s280428",
        "Product Name": "Grey Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280564": {
        "SKU": "280564",
        "URL": "https://www.cb2.com/grey-vase/s280564",
        "Product Name": "Grey Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280507": {
        "SKU": "280507",
        "URL": "https://www.cb2.com/blue-vase/s280507",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280463": {
        "SKU": "280463",
        "URL": "https://www.cb2.com/blue-vase/s280463",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280547": {
        "SKU": "280547",
        "URL": "https://www.cb2.com/blue-vase/s280547",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280475": {
        "SKU": "280475",
        "URL": "https://www.cb2.com/blue-vase/s280475",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "280483": {
        "SKU": "280483",
        "URL": "https://www.cb2.com/blue-vase/s280483",
        "Product Name": "Blue Vase",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "206-462-4400"
    },
    "257440": {
        "SKU": "257440",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257440",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257465": {
        "SKU": "257465",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257465",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257481": {
        "SKU": "257481",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257481",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257491": {
        "SKU": "257491",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257491",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257520": {
        "SKU": "257520",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257520",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257536": {
        "SKU": "257536",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257536",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257556": {
        "SKU": "257556",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257556",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257565": {
        "SKU": "257565",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257565",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257576": {
        "SKU": "257576",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257576",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257609": {
        "SKU": "257609",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257609",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "257637": {
        "SKU": "257637",
        "URL": "https://www.cb2.com/marema-stacking-table-by-gianfranco-frattini/s257637",
        "Product Name": "Marema Stacking Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281155": {
        "SKU": "281155",
        "URL": "https://www.cb2.com/brass-and-teak-pendant/s281155",
        "Product Name": "Brass Teak Pendant",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281349": {
        "SKU": "281349",
        "URL": "https://www.cb2.com/blue-vase/s281349",
        "Product Name": "Blue Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281378": {
        "SKU": "281378",
        "URL": "https://www.cb2.com/red-vase/s281378",
        "Product Name": "Red Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281407": {
        "SKU": "281407",
        "URL": "https://www.cb2.com/red-vase/s281407",
        "Product Name": "Red Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281551": {
        "SKU": "281551",
        "URL": "https://www.cb2.com/red-vase/s281551",
        "Product Name": "Red Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "281393": {
        "SKU": "281393",
        "URL": "https://www.cb2.com/red-vase/s281393",
        "Product Name": "Red Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "202-333-6204"
    },
    "276843": {
        "SKU": "276843",
        "URL": "https://www.cb2.com/hans-agne-jakobsson-pendant/s276843",
        "Product Name": "Hans Agne Jakobsson Pendant",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "255730": {
        "SKU": "255730",
        "URL": "https://www.cb2.com/candle-aluminum-sconce/s255730",
        "Product Name": "Candle Aluminum Sconce",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "255746": {
        "SKU": "255746",
        "URL": "https://www.cb2.com/candle-aluminum-sconce/s255746",
        "Product Name": "Candle Aluminum Sconce",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "256485": {
        "SKU": "256485",
        "URL": "https://www.cb2.com/elio-martinelli-steel-pendant/s256485",
        "Product Name": "Elio Martinelli Steel Pendant",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "256503": {
        "SKU": "256503",
        "URL": "https://www.cb2.com/elio-martinelli-steel-pendant/s256503",
        "Product Name": "Elio Martinelli Steel Pendant",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "277004": {
        "SKU": "277004",
        "URL": "https://www.cb2.com/earth-tone-vase/s277004",
        "Product Name": "Earth Tone Vase 7",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "277026": {
        "SKU": "277026",
        "URL": "https://www.cb2.com/orange-vase/s277026",
        "Product Name": "Orange Vase 8",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "284225": {
        "SKU": "284225",
        "URL": "https://www.cb2.com/finn-juhl-style-armchair/s284225",
        "Product Name": "Finn Juhl Style Armchair",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "303-957-1825"
    },
    "253895": {
        "SKU": "253895",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253895",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253865": {
        "SKU": "253865",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253865",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253883": {
        "SKU": "253883",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253883",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253906": {
        "SKU": "253906",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253906",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253941": {
        "SKU": "253941",
        "URL": "https://www.cb2.com/padina-light-by-castiglioni/s253941",
        "Product Name": "Padina Light by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "253970": {
        "SKU": "253970",
        "URL": "https://www.cb2.com/onyxand-opaline-table-lamp/s253970",
        "Product Name": "Onyxand Opaline Table Lamp",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "254094": {
        "SKU": "254094",
        "URL": "https://www.cb2.com/release-pendant-by-castiglioni/s254094",
        "Product Name": "Release Pendant by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "254012": {
        "SKU": "254012",
        "URL": "https://www.cb2.com/release-pendant-by-castiglioni/s254012",
        "Product Name": "Release Pendant by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "254101": {
        "SKU": "254101",
        "URL": "https://www.cb2.com/release-pendant-by-castiglioni/s254101",
        "Product Name": "Release Pendant by Castiglioni",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "268638": {
        "SKU": "268638",
        "URL": "https://www.cb2.com/five-arm-brass-wall-light/s268638",
        "Product Name": "Five Arm Brass Wall Light",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "276532": {
        "SKU": "276532",
        "URL": "https://www.cb2.com/jakobsson-brass-pendant/s276532",
        "Product Name": "Jakobsson Brass Pendant",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "276540": {
        "SKU": "276540",
        "URL": "https://www.cb2.com/metal-clamp-light/s276540",
        "Product Name": "Metal Clamp Light",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "276557": {
        "SKU": "276557",
        "URL": "https://www.cb2.com/metal-clamp-light/s276557",
        "Product Name": "Metal Clamp Light",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "212-335-7974"
    },
    "266690": {
        "SKU": "266690",
        "URL": "https://www.cb2.com/niels-koefoed-dining-chair/s266690",
        "Product Name": "Niels Koefoed Dining Chair",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "266606": {
        "SKU": "266606",
        "URL": "https://www.cb2.com/niels-koefoed-dining-chair/s266606",
        "Product Name": "Niels Koefoed Dining Chair",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "267382": {
        "SKU": "267382",
        "URL": "https://www.cb2.com/round-orange-lava-vessel/s267382",
        "Product Name": "Round Orange Lava Vessel",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "267402": {
        "SKU": "267402",
        "URL": "https://www.cb2.com/small-orange-lava-vessel/s267402",
        "Product Name": "Small Orange Lava Vessel",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "254998": {
        "SKU": "254998",
        "URL": "https://www.cb2.com/teak-and-leather-armchair/s254998",
        "Product Name": "Teak and Leather Armchair",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255024": {
        "SKU": "255024",
        "URL": "https://www.cb2.com/teak-and-leather-armchair/s255024",
        "Product Name": "Teak and Leather Armchair",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255037": {
        "SKU": "255037",
        "URL": "https://www.cb2.com/frattini-cocktail-table/s255037",
        "Product Name": "Frattini Cocktail Table",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255086": {
        "SKU": "255086",
        "URL": "https://www.cb2.com/frattini-cocktail-table/s255086",
        "Product Name": "Frattini Cocktail Table",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255099": {
        "SKU": "255099",
        "URL": "https://www.cb2.com/frattini-cocktail-table/s255099",
        "Product Name": "Frattini Cocktail Table",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255145": {
        "SKU": "255145",
        "URL": "https://www.cb2.com/hans-agne-jakobsson-chandelier/s255145",
        "Product Name": "Hans-Agne Jakobsson Chandelier",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255244": {
        "SKU": "255244",
        "URL": "https://www.cb2.com/raak-white-bubble-sconce/s255244",
        "Product Name": "RAAK White Bubble Sconce",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255258": {
        "SKU": "255258",
        "URL": "https://www.cb2.com/raak-white-bubble-sconce/s255258",
        "Product Name": "RAAK White Bubble Sconce",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "255261": {
        "SKU": "255261",
        "URL": "https://www.cb2.com/raak-white-bubble-sconce/s255261",
        "Product Name": "RAAK White Bubble Sconce",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276211": {
        "SKU": "276211",
        "URL": "https://www.cb2.com/red-vase/s276211",
        "Product Name": "Red Vase 11",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276229": {
        "SKU": "276229",
        "URL": "https://www.cb2.com/red-vase/s276229",
        "Product Name": "Red Vase 12",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276291": {
        "SKU": "276291",
        "URL": "https://www.cb2.com/red-vase/s276291",
        "Product Name": "Red Vase 14",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276314": {
        "SKU": "276314",
        "URL": "https://www.cb2.com/red-bowl/s276314",
        "Product Name": "Red Bowl",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276323": {
        "SKU": "276323",
        "URL": "https://www.cb2.com/blue-vase/s276323",
        "Product Name": "Blue Vase 1",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "276365": {
        "SKU": "276365",
        "URL": "https://www.cb2.com/red-vase/s276365",
        "Product Name": "Red Vase 17",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201-472-5799"
    },
    "274639": {
        "SKU": "274639",
        "URL": "https://www.cb2.com/paolo-buffa-lounge-chair/s274639",
        "Product Name": "Paolo Buffa Lounge Chair",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "512-977-1900"
    },
    "274679": {
        "SKU": "274679",
        "URL": "https://www.cb2.com/paolo-buffa-lounge-chair/s274679",
        "Product Name": "Paolo Buffa Lounge Chair",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "512-977-1900"
    },
    "274735": {
        "SKU": "274735",
        "URL": "https://www.cb2.com/blueans-white-glass-pendant/s274735",
        "Product Name": "Blueans White Glass Pendant",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "512-977-1900"
    },
    "253617": {
        "SKU": "253617",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253617",
        "Product Name": "Formica WoodBaby Chair",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "253622": {
        "SKU": "253622",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253622",
        "Product Name": "Formica WoodBaby Chair",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "278957": {
        "SKU": "278957",
        "URL": "https://www.cb2.com/grey-vase/s278957",
        "Product Name": "Grey Vase 1",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "278969": {
        "SKU": "278969",
        "URL": "https://www.cb2.com/grey-vase/s278969",
        "Product Name": "Grey Vase 2",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "278972": {
        "SKU": "278972",
        "URL": "https://www.cb2.com/grey-vase/s278972",
        "Product Name": "Grey Vase 3",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "278984": {
        "SKU": "278984",
        "URL": "https://www.cb2.com/grey-vase/s278984",
        "Product Name": "Grey Vase 4",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279026": {
        "SKU": "279026",
        "URL": "https://www.cb2.com/blue-vase/s279026",
        "Product Name": "Blue Vase 1",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279030": {
        "SKU": "279030",
        "URL": "https://www.cb2.com/blue-vase/s279030",
        "Product Name": "Blue Vase 2",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279055": {
        "SKU": "279055",
        "URL": "https://www.cb2.com/blue-vase/s279055",
        "Product Name": "Blue Vase 3",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279065": {
        "SKU": "279065",
        "URL": "https://www.cb2.com/blue-vase/s279065",
        "Product Name": "Blue Vase 4",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279079": {
        "SKU": "279079",
        "URL": "https://www.cb2.com/blue-vase/s279079",
        "Product Name": "Blue Vase 5",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },
    "279089": {
        "SKU": "279089",
        "URL": "https://www.cb2.com/blue-vase/s279089",
        "Product Name": "Blue Vase 6",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "612-821-9303"
    },

    "278218": {
        "SKU": "278218",
        "URL": "https://www.cb2.com/red-vase/s278218",
        "Product Name": "Red Vase 29",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278202": {
        "SKU": "278202",
        "URL": "https://www.cb2.com/red-vase/s278202",
        "Product Name": "Red Vase 28",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278195": {
        "SKU": "278195",
        "URL": "https://www.cb2.com/red-vase/s278195",
        "Product Name": "Red Vase 27",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278187": {
        "SKU": "278187",
        "URL": "https://www.cb2.com/red-vase/s278187",
        "Product Name": "Red Vase 26",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278153": {
        "SKU": "278153",
        "URL": "https://www.cb2.com/red-vase/s278153",
        "Product Name": "Red Vase 25",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278144": {
        "SKU": "278144",
        "URL": "https://www.cb2.com/red-vase/s278144",
        "Product Name": "Redvase 24",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278138": {
        "SKU": "278138",
        "URL": "https://www.cb2.com/red-vase/s278138",
        "Product Name": "Red Vase 23",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278110": {
        "SKU": "278110",
        "URL": "https://www.cb2.com/red-vase/s278110",
        "Product Name": "Red Vase 21",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278104": {
        "SKU": "278104",
        "URL": "https://www.cb2.com/red-vase/s278104",
        "Product Name": "Red Vase 20",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278091": {
        "SKU": "278091",
        "URL": "https://www.cb2.com/red-vase/s278091",
        "Product Name": "Red Vase 19",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "278060": {
        "SKU": "278060",
        "URL": "https://www.cb2.com/red-vase/s278060",
        "Product Name": "Red Vase 18",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "277963": {
        "SKU": "277963",
        "URL": "https://www.cb2.com/eduard-ludwig-stool/s277963",
        "Product Name": "Eduard Ludwig Stool",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "277949": {
        "SKU": "277949",
        "URL": "https://www.cb2.com/rattan-and-bent-iron-armchair/s277949",
        "Product Name": "Rattan and Bent Iron Armchair",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "277920": {
        "SKU": "277920",
        "URL": "https://www.cb2.com/pierre-gautier-delaye-coffee-table/s277920",
        "Product Name": "Pierre Gautier Delaye Coffee Table",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "255782": {
        "SKU": "255782",
        "URL": "https://www.cb2.com/ole-wanscher-senator-lounge-chair-and-ottoman/s255782",
        "Product Name": "Ole Wanscher \"Senator\" Lounge Chair and Ottoman",
        "Store": "Scottsdale",
        "Store Link": "https://www.cb2.com/stores/scottsdale-quarter/str71",
        "Store Phone": "480- 681-0230"
    },
    "276345": {
        "SKU": "276345",
        "URL": "https://www.cb2.com/red-vase/s276345",
        "Product Name": "Red Vase 15",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "276331": {
        "SKU": "276331",
        "URL": "https://www.cb2.com/blue-vase/s276331",
        "Product Name": "Blue Vase 2",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "276277": {
        "SKU": "276277",
        "URL": "https://www.cb2.com/red-vase/s276277",
        "Product Name": "Red Vase 13",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "275711": {
        "SKU": "275711",
        "URL": "https://www.cb2.com/lounge-chair-with-curved-armrests/s275711",
        "Product Name": "Lounge Chair With Curved Armrests",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "275678": {
        "SKU": "275678",
        "URL": "https://www.cb2.com/egg-shaped-lounge-chair/s275678",
        "Product Name": "Egg Shaped Lounge Chair 2 of 2",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "275607": {
        "SKU": "275607",
        "URL": "https://www.cb2.com/egg-shaped-lounge-chair/s275607",
        "Product Name": "Egg Shaped Lounge Chair 1 of 2",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "257076": {
        "SKU": "257076",
        "URL": "https://www.cb2.com/clitunno-lamp/s257076",
        "Product Name": "\"Clitunno\" Lamp by Vico Magistretti (for Artemide)",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "252165": {
        "SKU": "252165",
        "URL": "https://www.cb2.com/low-profile-floor-lamp/s252165",
        "Product Name": "Low Profile Floor Lamp",
        "Store": "Paramus",
        "Store Link": "https://www.cb2.com/stores/paramus/str70",
        "Store Phone": "201- 472-5799"
    },
    "281049": {
        "SKU": "281049",
        "URL": "https://www.cb2.com/franco-albini-gala-lounge-chair/s281049",
        "Product Name": "Deca",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280931": {
        "SKU": "280931",
        "URL": "https://www.cb2.com/red-vase/s280931",
        "Product Name": "Red Vase 11",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280876": {
        "SKU": "280876",
        "URL": "https://www.cb2.com/red-vase/s280876",
        "Product Name": "Red Vase 8",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280865": {
        "SKU": "280865",
        "URL": "https://www.cb2.com/red-vase/s280865",
        "Product Name": "Red Vase 7",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280810": {
        "SKU": "280810",
        "URL": "https://www.cb2.com/red-vase/s280810",
        "Product Name": "",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280802": {
        "SKU": "280802",
        "URL": "https://www.cb2.com/red-vase/s280802",
        "Product Name": "Red Vase 5",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280792": {
        "SKU": "280792",
        "URL": "https://www.cb2.com/grey-vase/s280792",
        "Product Name": "Grey Vase 1",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280788": {
        "SKU": "280788",
        "URL": "https://www.cb2.com/red-planter/s280788",
        "Product Name": "Red Planter",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280777": {
        "SKU": "280777",
        "URL": "https://www.cb2.com/red-vase/s280777",
        "Product Name": "Red Vase 2",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "280716": {
        "SKU": "280716",
        "URL": "https://www.cb2.com/red-vase/s280716",
        "Product Name": "Red Vase 12",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "257122": {
        "SKU": "257122",
        "URL": "https://www.cb2.com/leuchten-brass-pendant/s257122",
        "Product Name": "WK Leuchten Brass Pendant",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "257114": {
        "SKU": "257114",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s257114",
        "Product Name": "Joseph Andre Motte Slipper Chair for Steiner 3 of 3",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "257105": {
        "SKU": "257105",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s257105",
        "Product Name": "Joseph Andre Motte Slipper Chair for Steiner 2 of 3",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "257091": {
        "SKU": "257091",
        "URL": "https://www.cb2.com/joseph-andre-motte-slipper-chair-for-steiner/s257091",
        "Product Name": "Joseph Andre Motte Slipper Chair for Steiner 1 of 3",
        "Store": "Costa Mesa",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "(949) 308-7100"
    },
    "275137": {
        "SKU": "275137",
        "URL": "https://www.cb2.com/red-vase/s275137",
        "Product Name": "Red Vase 10",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275128": {
        "SKU": "275128",
        "URL": "https://www.cb2.com/red-vase/s275128",
        "Product Name": "Red Vase 9",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275110": {
        "SKU": "275110",
        "URL": "https://www.cb2.com/red-vase/s275110",
        "Product Name": "Red Vase 8",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275105": {
        "SKU": "275105",
        "URL": "https://www.cb2.com/red-vase/s275105",
        "Product Name": "Red Vase 7",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275097": {
        "SKU": "275097",
        "URL": "https://www.cb2.com/red-vase/s275097",
        "Product Name": "Red Vase 6",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275078": {
        "SKU": "275078",
        "URL": "https://www.cb2.com/red-vase/s275078",
        "Product Name": "Red Vase 5",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275036": {
        "SKU": "275036",
        "URL": "https://www.cb2.com/grey-vase/s275036",
        "Product Name": "Grey Vase 3",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "275002": {
        "SKU": "275002",
        "URL": "https://www.cb2.com/grey-vase/s275002",
        "Product Name": "Grey Vase 2",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274983": {
        "SKU": "274983",
        "URL": "https://www.cb2.com/red-vase/s274983",
        "Product Name": "Red Vase 3",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274964": {
        "SKU": "274964",
        "URL": "https://www.cb2.com/red-vase/s274964",
        "Product Name": "Red Vase 2",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274935": {
        "SKU": "274935",
        "URL": "https://www.cb2.com/red-vase/s274935",
        "Product Name": "Red Vase 1",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274716": {
        "SKU": "274716",
        "URL": "https://www.cb2.com/helena-tynell-limburg-pendant/s274716",
        "Product Name": "Helena Tynell Limburg Pendant",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274494": {
        "SKU": "274494",
        "URL": "https://www.cb2.com/bach-teak-dining-table/s274494",
        "Product Name": "EW Bach Teak Dining Table",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "274452": {
        "SKU": "274452",
        "URL": "https://www.cb2.com/teak-sofa/s274452",
        "Product Name": "Teak Sofa",
        "Store": "Austin",
        "Store Link": "https://www.cb2.com/stores/austin-domain-northside/str68",
        "Store Phone": "(512) 977-1900"
    },
    "253674": {
        "SKU": "253674",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253674",
        "Product Name": "Formic & Wood Baby Chair 2 of 4",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "253699": {
        "SKU": "253699",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253699",
        "Product Name": "Formic & Wood Baby Chair 3 of 4",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "253710": {
        "SKU": "253710",
        "URL": "https://www.cb2.com/formica-and-wood-baby-chair/s253710",
        "Product Name": "Formic & Wood Baby Chair 4 of 4",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "253756": {
        "SKU": "253756",
        "URL": "https://www.cb2.com/coffee-table-by-sergio-mazza-and-giuliana-gramigna/s253756",
        "Product Name": "Coffee Table by Sergio Mazza and Giuliana Gramigna",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "253768": {
        "SKU": "253768",
        "URL": "https://www.cb2.com/armchair-by-giampiero-vitelli/s253768",
        "Product Name": "Armchair by Giampiero Vitelli",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "268563": {
        "SKU": "268563",
        "URL": "https://www.cb2.com/flemming-lassen-low-club-chair/s268563",
        "Product Name": "Flemming Lassen Low Club Chair 1 of 2",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "268574": {
        "SKU": "268574",
        "URL": "https://www.cb2.com/flemming-lassen-low-club-chair/s268574",
        "Product Name": "Flemming Lassen Low Club Chair 2 of 2",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "268584": {
        "SKU": "268584",
        "URL": "https://www.cb2.com/curved-three-seat-sofa/s268584",
        "Product Name": "Curved Three-Seat Sofa",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "255716": {
        "SKU": "255716",
        "URL": "https://www.cb2.com/van-keppel-green-coffee-table/s255716",
        "Product Name": "Van Keppel-Green Coffee Table",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "255727": {
        "SKU": "255727",
        "URL": "https://www.cb2.com/hans-wegner-sofa/s255727",
        "Product Name": "Hans Wegner G290 Sofa",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "277012": {
        "SKU": "277012",
        "URL": "https://www.cb2.com/orange-vase/s277012",
        "Product Name": "Orange Vase 7",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "277074": {
        "SKU": "277074",
        "URL": "https://www.cb2.com/orange-vase/s277074",
        "Product Name": "Orange Vase 12",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "277133": {
        "SKU": "277133",
        "URL": "https://www.cb2.com/orange-vase/s277133",
        "Product Name": "Orange Vase 14",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "277186": {
        "SKU": "277186",
        "URL": "https://www.cb2.com/orange-vase/s277186",
        "Product Name": "Orange Vase 17",
        "Store": "Denver",
        "Store Link": "https://www.cb2.com/stores/cherry-creek-north/str64",
        "Store Phone": "(303) 957-1825"
    },
    "281541": {
        "SKU": "281541",
        "URL": "https://www.cb2.com/blue-vase/s281541",
        "Product Name": "Blue Vase",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6204"
    },
    "281528": {
        "SKU": "281528",
        "URL": "https://www.cb2.com/red-vase/s281528",
        "Product Name": "Red Vase 6",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6204"
    },
    "281463": {
        "SKU": "281463",
        "URL": "https://www.cb2.com/red-vase/s281463",
        "Product Name": "Red Vase 4",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6205"
    },
    "281337": {
        "SKU": "281337",
        "URL": "https://www.cb2.com/grey-vase/s281337",
        "Product Name": "Grey Vase 3",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6207"
    },
    "281288": {
        "SKU": "281288",
        "URL": "https://www.cb2.com/grey-vase/s281288",
        "Product Name": "Grey Vase 1",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6208"
    },
    "281142": {
        "SKU": "281142",
        "URL": "https://www.cb2.com/ekstrom-coffee-table/s281142",
        "Product Name": "Ekstrom Lounge Coffee Table",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6209"
    },
    "257366": {
        "SKU": "257366",
        "URL": "https://www.cb2.com/paolo-buffa-settee/s257366",
        "Product Name": "Paolo Buffa Settee",
        "Store": "Georgetown",
        "Store Link": "https://www.cb2.com/stores/georgetown/str59",
        "Store Phone": "(202) 333-6210"
    },
    "280498": {
        "SKU": "280498",
        "URL": "https://www.cb2.com/blue-vase/s280498",
        "Product Name": "Blue Vase 5",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "280455": {
        "SKU": "280455",
        "URL": "https://www.cb2.com/blue-vase/s280455",
        "Product Name": "Blue Vase 1",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "255341": {
        "SKU": "255341",
        "URL": "https://www.cb2.com/werther-toffoloni-lounge-chair/s255341",
        "Product Name": "Werther Toffoloni \"Hoop\" Lounge Chair",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "255321": {
        "SKU": "255321",
        "URL": "https://www.cb2.com/gianfranco-frattini-armchair/s255321",
        "Product Name": "Gianfranco Frattini \"Sesann\" Armchair 2 of 2",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "255296": {
        "SKU": "255296",
        "URL": "https://www.cb2.com/gianfranco-frattini-armchair/s255296",
        "Product Name": "Gianfranco Frattini \"Sesann\" Armchair 1 of 2",
        "Store": "University Village",
        "Store Link": "https://www.cb2.com/stores/university-village/str58",
        "Store Phone": "(206) 462-4400"
    },
    "277831": {
        "SKU": "277831",
        "URL": "https://www.cb2.com/earthtone-vase/s277831",
        "Product Name": "Earthtone Vase 10",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277814": {
        "SKU": "277814",
        "URL": "https://www.cb2.com/earthtone-vase/s277814",
        "Product Name": "Earthtone Vase 9",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277750": {
        "SKU": "277750",
        "URL": "https://www.cb2.com/green-vase/s277750",
        "Product Name": "Green Vase 7",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277694": {
        "SKU": "277694",
        "URL": "https://www.cb2.com/green-vase/s277694",
        "Product Name": "Green Vase 4",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277662": {
        "SKU": "277662",
        "URL": "https://www.cb2.com/green-vase/s277662",
        "Product Name": "Green Vase 3",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277656": {
        "SKU": "277656",
        "URL": "https://www.cb2.com/green-vase/s277656",
        "Product Name": "Green Vase 2",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277424": {
        "SKU": "277424",
        "URL": "https://www.cb2.com/como-cane-settee/s277424",
        "Product Name": "Como Cane Settee",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "277390": {
        "SKU": "277390",
        "URL": "https://www.cb2.com/carl-gustaf-hiort-armchair/s277390",
        "Product Name": "Carl Gustaf Hiort Armchair",
        "Store": "South Beach",
        "Store Link": "https://www.cb2.com/stores/south-beach/str56",
        "Store Phone": "(305) 672-5155"
    },
    "279465": {
        "SKU": "279465",
        "URL": "https://www.cb2.com/modular-sculpture/s279465",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "278948": {
        "SKU": "278948",
        "URL": "https://www.cb2.com/modular-sculpture/s278948",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274181": {
        "SKU": "274181",
        "URL": "https://www.cb2.com/earthtone-vase/s274181",
        "Product Name": "Earthtone Vase Short",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274162": {
        "SKU": "274162",
        "URL": "https://www.cb2.com/earthtone-vase/s274162",
        "Product Name": "Earthtone Vase Tall",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274157": {
        "SKU": "274157",
        "URL": "https://www.cb2.com/orange-vase/s274157",
        "Product Name": "Orange Vase (Left)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274121": {
        "SKU": "274121",
        "URL": "https://www.cb2.com/orange-vase/s274121",
        "Product Name": "Orange Vase (Right)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "274027": {
        "SKU": "274027",
        "URL": "https://www.cb2.com/earthtone-vase/s274027",
        "Product Name": "Earthtone Vase",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273991": {
        "SKU": "273991",
        "URL": "https://www.cb2.com/modular-sculpture/s273991",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273972": {
        "SKU": "273972",
        "URL": "https://www.cb2.com/modular-sculpture/s273972",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273908": {
        "SKU": "273908",
        "URL": "https://www.cb2.com/modular-sculpture/s273908",
        "Product Name": "Modular Scuplture (Type B)",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273845": {
        "SKU": "273845",
        "URL": "https://www.cb2.com/glass-and-brass-counterweight-pendant/s273845",
        "Product Name": "Glass and Brass Counterweight Pendant",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273830": {
        "SKU": "273830",
        "URL": "https://www.cb2.com/frederiksen-teak-coffee-table/s273830",
        "Product Name": "Frederiksen Teak Coffee Table",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273815": {
        "SKU": "273815",
        "URL": "https://www.cb2.com/gigi-sabadin-bent-wood-chair/s273815",
        "Product Name": "Gigi Sabadin Bent Wood Chair 2 of 2",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273747": {
        "SKU": "273747",
        "URL": "https://www.cb2.com/gigi-sabadin-bent-wood-chair/s273747",
        "Product Name": "Gigi Sabadin Bent Wood Chair 1 of 2",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273734": {
        "SKU": "273734",
        "URL": "https://www.cb2.com/ekstrom-lounge-chair/s273734",
        "Product Name": "Ekstrom Lounge Chair",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "273714": {
        "SKU": "273714",
        "URL": "https://www.cb2.com/carl-gustaf-hiort-armchair/s273714",
        "Product Name": "Carl Gustaf Hiort Armchair",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "273695": {
        "SKU": "273695",
        "URL": "https://www.cb2.com/teak-sofa/s273695",
        "Product Name": "Teak Sofa",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "254558": {
        "SKU": "254558",
        "URL": "https://www.cb2.com/raak-wall-lamp/s254558",
        "Product Name": "RAAK Wall Lamp in White",
        "Store": "Berkeley",
        "Store Link": "https://www.cb2.com/stores/berkeley/str55",
        "Store Phone": "(510) 558-0106"
    },
    "276512": {
        "SKU": "276512",
        "URL": "https://www.cb2.com/danish-walnut-table/s276512",
        "Product Name": "Danish Walnut Table",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "(267) 385-8198"
    },
    "253517": {
        "SKU": "253517",
        "URL": "https://www.cb2.com/eilersen-leather-lounge-chair/s253517",
        "Product Name": "Eilersen Leather Lounge Chair",
        "Store": "Rittenhouse",
        "Store Link": "https://www.cb2.com/stores/rittenhouse/str54",
        "Store Phone": "(267) 385-8198"
    },
    "254832": {
        "SKU": "254832",
        "URL": "https://www.cb2.com/ole-wanscher-sofa/s254832",
        "Product Name": "Ole Wanscher Sofa",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "(415) 834-9370"
    },
    "254603": {
        "SKU": "254603",
        "URL": "https://www.cb2.com/smoked-glass-and-chrome-coffee-table/s254603",
        "Product Name": "Smoked Glass and Chrome Coffee Table",
        "Store": "Union Square",
        "Store Link": "https://www.cb2.com/stores/union-square/str53",
        "Store Phone": "(415) 834-9370"
    },
    "364974": {
        "SKU": "364974",
        "URL": "https://www.cb2.com/brass-and-glass-pendant-lamp-by-glashutte-limburg/s364974",
        "Product Name": "Brass and Glass Pendant Lamp by Glashutte Limburg 2 of 2",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "253430": {
        "SKU": "253430",
        "URL": "https://www.cb2.com/brass-and-glass-pendant-lamp-by-glashutte-limburg/s253430",
        "Product Name": "Brass and Glass Pendant Lamp by Glashutte Limburg 1 of 2",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "364953": {
        "SKU": "364953",
        "URL": "https://www.cb2.com/rainer-daumiller-armchair-in-solid-pine/s364953",
        "Product Name": "Rainer Daumiller Arm Chair in Solid Pine",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "284212": {
        "SKU": "284212",
        "URL": "https://www.cb2.com/horst-bruning-sideboard/s284212",
        "Product Name": "Horst Bruning Sideboard",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "273496": {
        "SKU": "273496",
        "URL": "https://www.cb2.com/brown-and-white-table-vase/s273496",
        "Product Name": "Brown & White Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "273453": {
        "SKU": "273453",
        "URL": "https://www.cb2.com/brown-and-white-table-vase/s273453",
        "Product Name": "Brown & White Table Vase",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "253451": {
        "SKU": "253451",
        "URL": "https://www.cb2.com/beech-and-linen-armchair/s253451",
        "Product Name": "Beech and Linen Armchair",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "252888": {
        "SKU": "252888",
        "URL": "https://www.cb2.com/large-sculptural-lounge-chair/s252888",
        "Product Name": "Large Sculptural Lounge Chair 2 of 2",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "252834": {
        "SKU": "252834",
        "URL": "https://www.cb2.com/large-sculptural-lounge-chair/s252834",
        "Product Name": "Large Sculptural Lounge Chair 1 of 2",
        "Store": "West Hollywood",
        "Store Link": "https://www.cb2.com/stores/west-hollywood/str52",
        "Store Phone": "(323) 848-7111"
    },
    "276508": {
        "SKU": "276508",
        "URL": "https://www.cb2.com/salocchi-grey-sofa/s276508",
        "Product Name": "Salocchi Grey Sofa",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "268493": {
        "SKU": "268493",
        "URL": "https://www.cb2.com/cream-and-brown-vase/s268493",
        "Product Name": "Cream & Brown Vase",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "268155": {
        "SKU": "268155",
        "URL": "https://www.cb2.com/wood-hanging-lamp/s268155",
        "Product Name": "Wood Hanging Lamp",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "254946": {
        "SKU": "254946",
        "URL": "https://www.cb2.com/martinelli-luca-arch-floor-lamp/s254946",
        "Product Name": "Martinelli Luca Arch Floor Lamp",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "252136": {
        "SKU": "252136",
        "URL": "www.cb2.com/egon-eiermann-armchair/s252136",
        "Product Name": "Egon Eiermann Armchair",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252508": {
        "SKU": "252508",
        "URL": "www.cb2.com/studio-valente-adjustable-counterweight-bow-pendant/s252508",
        "Product Name": "Studio Valente Adjustable Counterweight Bow Pendant",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252112": {
        "SKU": "252112",
        "URL": "www.cb2.com/franz-kottgen-sectional-unit/s252112",
        "Product Name": "Franz KÃ¶ttgen Sectional Unit",
        "Store": "Chicago",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "253822": {
        "SKU": "253822",
        "URL": "www.cb2.com/wood-desk/s253822",
        "Product Name": "Wood Desk by Gugliemo Ulrich",
        "Store": "Eastside",
        "Store Link": "https://www.cb2.com/stores/eastside/str65",
        "Store Phone": "(212) 355-7974"
    },
    "278819": {
        "SKU": "278819",
        "URL": "www.cb2.com/ekstrom-lounge-chair-and-ottoman/s278819",
        "Product Name": "EkstrÃ¶m Lounge Chair & Ottoman",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "(612) 821-9303"
    },
    "278837": {
        "SKU": "278837",
        "URL": "www.cb2.com/wooden-slat-studio-coffee-table/s278837",
        "Product Name": "Wooden Slat Studio Coffee Table",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "(612) 821-9303"
    },
    "278853": {
        "SKU": "278853",
        "URL": "www.cb2.com/pedro-armchair/s278853",
        "Product Name": "Pedro Armchair",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "(612) 821-9303"
    },
    "278888": {
        "SKU": "278888",
        "URL": "www.cb2.com/pedro-armchair/s278888",
        "Product Name": "Pedro Armchair",
        "Store": "Minneapolis",
        "Store Link": "https://www.cb2.com/stores/uptown/str66",
        "Store Phone": "(612) 821-9303"
    },
    "253525": {
        "SKU": "253525",
        "URL": "www.cb2.com/metal-bed-aqua/s253525",
        "Product Name": "Metal Bed Aqua",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "253531": {
        "SKU": "253531",
        "URL": "www.cb2.com/metal-bed-dark/s253531",
        "Product Name": "Metal Bed Dark",
        "Store": "SOHO",
        "Store Link": "https://www.cb2.com/stores/soho/str51",
        "Store Phone": "(212) 219-1454"
    },
    "252221": {
        "SKU": "252221",
        "URL": "www.cb2.com/omicron-sconce/s252221",
        "Product Name": "'Omicron' Sconce by Vico Magistretti, Italy, 1960s, Metal and Acrylic, 1 of 2",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252256": {
        "SKU": "252256",
        "URL": "www.cb2.com/omicron-sconce/s252256",
        "Product Name": "'Omicron' Sconce by Vico Magistretti, Italy, 1960s, Metal and Acrylic, 2 of 2",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252302": {
        "SKU": "252302",
        "URL": "www.cb2.com/large-wall-applique/s252302",
        "Product Name": "Large Wall Applique, Italy, 1960s, Chrome, 1 of 4",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252341": {
        "SKU": "252341",
        "URL": "www.cb2.com/large-wall-applique/s252341",
        "Product Name": "Large Wall Applique, Italy, 1960s, Chrome, 2 of 4",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252427": {
        "SKU": "252427",
        "URL": "www.cb2.com/large-wall-applique/s252427",
        "Product Name": "Large Wall Applique, Italy, 1960s, Chrome, 3 of 4",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "252450": {
        "SKU": "252450",
        "URL": "www.cb2.com/large-wall-applique/s252450",
        "Product Name": "Large Wall Applique, Italy, 1960s, Chrome, 4 of 4",
        "Store": "Lincoln Park",
        "Store Link": "https://www.cb2.com/stores/lincoln-park/str123",
        "Store Phone": "312-787-8329"
    },
    "257148": {
        "SKU": "257148",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257148",
        "Product Name": "Doria Glass Pendant Lamp, 1 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    },
    "257166": {
        "SKU": "257166",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257166",
        "Product Name": "Doria Glass Pendant Lamp, 2 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    },
    "257175": {
        "SKU": "257175",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257175",
        "Product Name": "Doria Glass Pendant Lamp, 3 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    },
    "257186": {
        "SKU": "257186",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257186",
        "Product Name": "Doria Glass Pendant Lamp, 4 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    },
    "257204": {
        "SKU": "257204",
        "URL": "www.cb2.com/doria-glass-pendant-lamp/s257204",
        "Product Name": "Doria Glass Pendant Lamp, 5 of 5",
        "Store": "South Coast",
        "Store Link": "https://www.cb2.com/stores/south-coast-plaza/str69",
        "Store Phone": "949-308-7100"
    }
};


CBPLA.VintageSkusStoreMessage = function () {

    // config object
    var c = {
        sku: window.vintageSku,
        skus: window.vintageSkus
    };

    /**
     * init function
     */
    function init() {
        loopThroughObject();
    }

    /**
     * loop throught window.vintageSkus, defined in https://app.optimizely.com/v2/projects/8300054817/experiments/15626080543/pages in function jsCondition()
     */
    function loopThroughObject() {
        for (var prop in c.skus) {
            var v = c.skus[prop];
            if (c.skus.hasOwnProperty(prop)) {
                htmlMessage(v);
            }
        }
    }

    /**
     * @param  {String} val - sku
     * if on page sku equals object sku
     */
    function htmlMessage(val) {
        var sku = val.SKU;

        if (sku === c.sku) {
            insertHtml(val);
        }
    }

    /**
     * @param  {Object} el - object
     * insert HTML for found sku
     */
    function insertHtml(el) {

        var isRenew = document.querySelector(".main-product-and-family .right-col");

        if (!!isRenew) {
            // All Renew code
            var data = {
                store: el.Store,
                storeLink: el['Store Link'],
                phone: el['Store Phone'],
                phoneTitle: __.isPhone ? '<h2 class="tabpanel-header section-header">Availabilty</h2>' : '',
                phoneLink: __.isPhone ? '<a href="tel:' + el['Store Phone'] + '">' + el['Store Phone'] + '</a>' : el['Store Phone']
            };

            var $el = document.querySelector('.availability-main-container.section-block');
            var html = '<div class="vintage-skus">' +
                data.phoneTitle +
                '<p>Limited Quantity Available. One-of-a-Kind Vintage.</p>' +
                '<p>Available at <span><a href="' + data.storeLink + '">CB2 ' + data.store + '</a></span>.' +
                '<p>Call now: ' + data.phoneLink +
                '</div>';

            if ($el) {
                $el.innerHTML = html;

            }

        } else {
            var data = {
                store: el.Store,
                storeLink: el['Store Link'],
                phone: el['Store Phone'],phoneLink: __.isPhone ? '<a href="tel:' + el['Store Phone'] + '">' + el['Store Phone'] + '</a>' : el['Store Phone']
            };



            var $el = __.isPhone ? document.querySelector('.international-container') : document.querySelector('.hw-right-detail .international-container');

            var html = '<div class="vintage-skus">' +'<p>Limited Quantity Available. One-of-a-Kind Vintage.</p>' +
                '<p>Available at <span><a href="' + data.storeLink + '">CB2 ' + data.store + '</a></span>.' +
                '<p>Call now: ' + data.phoneLink +
                '</div>';

            if ($el) {
                $el.innerHTML = html;
            }
        } //Else block closed
    }

    return {
        init: init
    };
};

document.addEventListener('DOMContentLoaded', function () {
    var isRenew = document.querySelector(".main-product-and-family .right-col");


    if (!!isRenew) {
        utils = window["optimizely"].get("utils");
        utils.observeSelector(".availability-main-container.section-block", function (element) {
            var initVintageSkusStoreMessage = CBPLA.VintageSkusStoreMessage();
            initVintageSkusStoreMessage.init();
        });
        utils.observeSelector(".details-main-container button", function (element) {
          	element.click();
        });
      	utils.observeSelector(".shop-runner", function (element) {
           	element.remove();
        });
    } else {
       utils = window["optimizely"].get("utils");
        utils.observeSelector(".international-container", function (element) {
            var initVintageSkusStoreMessage = CBPLA.VintageSkusStoreMessage();
            initVintageSkusStoreMessage.init();
        });
    }

});
}}]}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20271862379"], "experiments": [{"weightDistributions": [{"entityId": "20287151701", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX: Hide Top Rated filter", "bucketingStrategy": null, "variations": [{"id": "20264361724", "actions": [], "name": "Original"}, {"id": "20287151701", "actions": [{"viewId": "20271862379", "changes": [{"value": "<style>#sortControlTopWrapper .sort-dropdown .dropdown-content .filter-by li:last-child {\n  display: none;\n}\n\n#selSortBy option[value=\"rating\"] {\n  display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "14E4A4E5-F8A8-4127-B4E6-C107B42B9CD3"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "20273705648", "integrationSettings": null}], "id": "20262050479", "weightDistributions": null, "name": "FIX: Hide Top Rated filter", "groupId": null, "commitId": "20271593495", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["17816410940"], "experiments": [{"weightDistributions": [{"entityId": "17798851427", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - Hide BOPS killswitch messaging on cart", "bucketingStrategy": null, "variations": [{"id": "17830240613", "actions": [], "name": "Original"}, {"id": "17798851427", "actions": [{"viewId": "17816410940", "changes": [{"value": "<style>.store-warehouse-pickup.col-xs-12 {\n    display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "CE554DA0-8E0D-4368-93D5-A64266EA5FEC"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "17818770484", "integrationSettings": null}], "id": "17830390237", "weightDistributions": null, "name": "FIX - Hide BOPS killswitch messaging on cart", "groupId": null, "commitId": "17828250347", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["16911475189"], "experiments": [{"weightDistributions": [{"entityId": "16900823141", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Hide oversize shipping popup link on the Cart page", "bucketingStrategy": null, "variations": [{"id": "16927770473", "actions": [], "name": "Original"}, {"id": "16900823141", "actions": [{"viewId": "16911475189", "changes": [{"value": "<style>#addChargeMessage > button {\n  display: none;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "D6430CD1-C4BF-41B3-8602-1C1189BC89BB"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "16933530561", "integrationSettings": null}], "id": "16927831531", "weightDistributions": null, "name": "Hide oversize shipping popup link on the Cart page", "groupId": null, "commitId": "16923930714", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18809152068"], "experiments": [{"weightDistributions": null, "audienceName": "Everyone else", "name": "FIX - Do Not Sell Cookie", "bucketingStrategy": null, "variations": [{"id": "18794091669", "actions": [{"viewId": "18809152068", "changes": [{"dependencies": [], "type": "custom_code", "id": "7C7C517A-EA1C-4BCB-A5CF-22D47932FD23", "value": function($){if(typeof (Crate) !== undefined && Crate.Services.CookieService) {
    Crate.Services.CookieService.setCookie("DoNotSell", true, 100 );  //set cookie for 100 years 
  }
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "18792091729", "integrationSettings": null}], "id": "18788760751", "weightDistributions": null, "name": "FIX - Do Not Sell Cookie", "groupId": null, "commitId": "18804220169", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"20160311170": {"qm_holdback_id": "367", "qm_campaign_id": "137", "qm_experiment_id": "138", "qm_variation_id": "139", "qm_decision_id": "366"}}, "integrationStringVersion": 2, "viewIds": ["17027484241"], "experiments": [{"weightDistributions": [{"entityId": "17070910141", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "TEST - Upholstery Product page test | 100% PLA Entry Only", "bucketingStrategy": null, "variations": [{"id": "17068530370", "actions": [], "name": "Original"}, {"id": "17070910141", "actions": [{"viewId": "17027484241", "changes": [{"dependencies": [], "type": "custom_code", "id": "63fd151acc3f498ea9e423fc2b4c2e3e", "value": function($){window.CBUpholsteryPLA = window.CBUpholsteryPLA || {};
var utils = window["optimizely"].get('utils');

CBUpholsteryPLA.fn = function () {

    // config
    var c = {
        cat_id: Crate.Model.BrowseDto.CategoryId,
        current_sku: digitalData.page.pageInfo.pageId,
        cat_name: Crate.Model.BrowseDto.CategoryName,
        cat_names: window.catNames,
        product_url: '/Browse/ProductDynamicComponent/GetProductNavigateDetailJson',
        category_url: '/Browse/ProductDynamicComponent/GetCategoryProductNavigateDetailJson'
    };

    var pageSku = c.current_sku.charAt(0) === 's' ? c.current_sku.replace('s', '') : c.current_sku.replace('f', '');
    var $catUrl = document.getElementById('upholsteryPlaCatUrl');
    var $catTitle = document.getElementById('upholsteryPlaCatTitle');
    var catName = c.cat_name;
    var catUrl = '';

    // set 'View All Upholstery Sale' URL's for each category
    switch (catName) {
        case 'Sofas':
            catUrl = '/furniture/sofas/1';
            break;
        case 'Sectionals':
            catUrl = '/furniture/sectionals/1';
            break;
        case 'Sleepers & Daybeds':
            catUrl = '/furniture/sleepers-daybeds/1';
            break;
        case 'Accent Chairs':
            catUrl = '/furniture/accent-chairs/1';
            break;
        case 'Ottomans, Poufs, Stools':
            catUrl = '/furniture/ottomans-poufs-stools/1';
            break;
        case 'Dining Chairs':
            catUrl = '/furniture/dining-chairs/1';
            break;
        case 'Beds':
            catUrl = '/furniture/beds/1';
            break;
        case 'Dining Tables':
            catUrl = '/furniture/dining-tables/1';
            break;
        case 'Bar & Counter Stools':
            catUrl = '/furniture/bar-counter-stools/1';
            break;
        default:
            catUrl = '';
    }

    var excludedSkus = [Number(pageSku)];

    function init() {

        // set category url
        $catUrl.setAttribute('href', catUrl);
        $catTitle.innerHTML = catName;

        getCategoryProductNavigateDetail(
            c.cat_id,
            12
        );
    }
    /**
     * @param  {Array} array
     * shuffle array values
     */
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    /**
     * @param  {Array} skus
     */
    function runProducts(skus) {
        var skusString = JSON.stringify(skus);

        getProductNavigateDetail(
            skusString,
            'upholsteryPlaProducts',
            'upholsteryPlaTemplate'
        );
    }
    /**
     * @param  {Number} categoryId - category ID
     * @param  {Number} maxCount - max returned results
     * get maxCount of products from specific category by categoryId
     */
    function getCategoryProductNavigateDetail(categoryId, maxCount) {

        var postUrl = c.category_url;

        jQuery.ajax({
            url: postUrl,
            type: 'POST',
            data: {
                categoryId: categoryId,
                maxCount: maxCount
            },
            dataType: 'json',
            success: function (result) {
                if (result[0] !== null) {

                    var skus = result.map(function (sku) {
                        return sku.Sku;
                    }).filter(function (sku) {
                        return excludedSkus.indexOf(sku) === -1;
                    });

                    var shuffleSkus = shuffle(skus);
                    var fourSkus = shuffleSkus.splice(0, 6);

                    runProducts(fourSkus);
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

    /**
     * @param  {Array} skuList
     * @param  {String} targetId
     * @param  {String} templateId
     * render products
     */
    function getProductNavigateDetail(skuList, targetId, templateId) {

        var postUrl = c.product_url;

        jQuery.ajax({
            url: postUrl,
            type: 'POST',
            data: { skus: skuList },
            dataType: 'json',
            success: function (result) {

                if (result[0] !== null) {
                    this.target = '#' + targetId;
                    this.template = '#' + templateId;

                    jQuery(this.target).html(
                        jQuery(this.template).render(result)
                    );
                }
            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });

    }

    return {
        init: init
    };

};

utils.waitForElement('#upholsteryPlaProducts').then(function () {
    var initCBUpholsteryPLA = CBUpholsteryPLA.fn();
    initCBUpholsteryPLA.init();
});
}}, {"value": "<style>optly-preview {\n  top: 450px !important;\n}\n\n.upholstery-pla {\n  padding: 20px 18px 10px;\n  min-height: 146px;\n}\n\n.upholstery-pla__hdr {\n  padding-bottom: 10px;\n}\n\n.upholstery-pla__view {\n  text-decoration: underline;\n  font-weight: 300;\n  font-size: 13px;\n}\n\n.upholstery-pla__a {\n  color: #222;\n  text-transform: uppercase;\n  font-family: \"Lineto Brown Sub\", \"Lineto Brown Light Sub\", Verdana, sans-serif;\n  font-weight: 500;\n  letter-spacing: .08em;\n  font-size: 14px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.upholstery-pla__list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 -3px;\n  border-bottom: 1px solid #CCC;\n  padding-bottom: 25px;\n}\n\n.upholstery-pla__item {\n  width: calc(25% - 6px);\n  padding: 0 3px;\n}\n\n.upholstery-pla__item:nth-child(n+5) {\n  display: none !important;\n}\n\n.upholstery-pla__item-img {\n  -webkit-transition: all 300ms;\n  transition: all 300ms;\n}\n\n.upholstery-pla__item-link {\n  display: block;\n  padding-bottom: 100%;\n  width: 100%;\n  height: 0;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "93a7743cf54a4eadaca2916a92eef7c9"}, {"value": "<script id=\"upholsteryPlaTemplate\" type=\"text/x-jsrender\">\n  <div class=\"upholstery-pla__item\">\n    <a class=\"upholstery-pla__item-link\" href=\"{{:NavigateUrl}}\" title=\"{{:Name}}\">\n        <picture>\n            <source srcset=\"//cb2.scene7.com/is/image/CB2/{{:ImagePath}}/?$web_zoom$&190617121917&wid=356&hei=356 2x, //cb2.scene7.com/is/image/CB2/{{:ImagePath}}/?$web_zoom$&190617121917&wid=178&hei=178 1x\">\n            <img class=\"upholstery-pla__item-img\" src=\"//cb2.scene7.com/is/image/CB2/{{:ImagePath}}/?$web_zoom$&190617121917&wid=178&hei=178\" alt=\"{{:Name}}\" aria-live=\"polite\">\n        </picture>\n    </a>\n  </div>\n</script>\n\n<div id=\"upholsteryPlaCB2\" class=\"upholstery-pla\">\n    <div class=\"upholstery-pla__hdr\">\n        <a id=\"upholsteryPlaCatUrl\" href=\"/\" class=\"upholstery-pla__a\">\n            <span class=\"upholstery-pla__cat\" id=\"upholsteryPlaCatTitle\"></span>\n            <span class=\"upholstery-pla__view\">Shop All</span>\n        </a>\n    </div>\n    <div id=\"upholsteryPlaProducts\" class=\"upholstery-pla__list\"></div>\n</div>", "selector": "#main", "dependencies": [], "operator": "before", "type": "append", "id": "d898806333a64636a14c36e074b52634"}]}], "name": "Variation 1 - 4 products on top"}], "audienceIds": null, "changes": null, "id": "17080440183", "integrationSettings": null}], "id": "17085110768", "weightDistributions": null, "name": "TEST - Upholstery Product page test | 100% PLA Entry Only", "groupId": null, "commitId": "20170901772", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["19050850761"], "experiments": [{"weightDistributions": [{"entityId": "19046560510", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "temp fix- mobile gift card page horizontal scroll with new cards", "bucketingStrategy": null, "variations": [{"id": "19054131182", "actions": [], "name": "Original"}, {"id": "19046560510", "actions": [{"viewId": "19050850761", "changes": [{"value": "<style>@media screen and (max-width:768px){\n    .content-layout {\n        width: 100%;\n        overflow: hidden;\n     }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "F2E390E9-4DFC-427F-B944-ADA24CBA891D"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "19071580763", "integrationSettings": null}], "id": "19077820296", "weightDistributions": null, "name": "temp fix- mobile gift card page horizontal scroll with new cards", "groupId": null, "commitId": "19062350832", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["20188124280"], "experiments": [{"weightDistributions": [{"entityId": "20174923498", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "FIX - HWS-9280 - 4/21/21 Launch CB2 Canary Search Pages", "bucketingStrategy": null, "variations": [{"id": "20207194118", "actions": [], "name": "Original"}, {"id": "20174923498", "actions": [{"viewId": "20188124280", "changes": [{"value": "<style>.filter-scroll-body-container > .a11y-drawers:nth-of-type(2) {\n display:none;\n}\n@media screen and (min-width: 1px){\n.plp-layout .sticky-container.sticky {\npadding: 14px 18px 10px;\n  top:0px;\n}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "425382986e0a47fda082fc88ca227dc3"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "20211240629", "integrationSettings": null}], "id": "20195692684", "weightDistributions": null, "name": "FIX - HWS-9280 - 4/21/21 Launch CB2 Canary Search Pages", "groupId": null, "commitId": "20198030286", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["10521323039"], "experiments": [{"weightDistributions": [{"entityId": "14404730145", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "Fix - Wallpaper Lead Time 040819", "bucketingStrategy": null, "variations": [{"id": "14412620149", "actions": [{"viewId": "10521323039", "changes": []}], "name": "Original"}, {"id": "14404730145", "actions": [{"viewId": "10521323039", "changes": [{"value": "<p style=\"display: inline-block;font-size: 13px;\">order will ship within 14 days</p>", "selector": "#ship", "dependencies": [], "operator": "append", "type": "append", "id": "dbe8c48d326d4e2087f55e5c5ed976bf"}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "14394870118", "integrationSettings": null}], "id": "14396890099", "weightDistributions": null, "name": "Fix - Wallpaper Lead Time 040819", "groupId": null, "commitId": "14408850015", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 2, "viewIds": ["18385380192"], "experiments": [{"weightDistributions": null, "audienceName": "South Coast Store Geo Audience", "name": "Fix - South Coast Store Page Banner", "bucketingStrategy": null, "variations": [{"id": "18391150546", "actions": [{"viewId": "18385380192", "changes": [{"value": "<style>\n  @media only screen and (max-width: 768px) {\n    #SouthCoastTitle {font-size:18px !important;width:70% !important;margin:1% auto !important;}\n\n  @media only screen and (max-width: 768px) {\n    #SouthCoastcopy {font-size:14px !important;width:90% !important;margin:1% auto 2%;}\n\n  @media only screen and (max-width: 768px) {\n    #ctaSC {font-size:13px !important;}}\n\n</style>\n\n<div class=\"cms-content\" style=\"padding-bottom: 2%;\">\n           \n<div style=\"background:#f4f4f4;padding: 1.8%;\" class=\"store_TopBanner\"><div class=\"store_TopBanner\">\n<a href=\"https://cb2virtualdesignservice.as.me/SouthCoastPlaza\" style=\"text-decoration:none;\">\n<p class=\"cb2-brown-regular copyXS txt-black\" id=\"SouthCoastTitle\" style=\"text-align: center;letter-spacing: .1em;text-transform: uppercase;font-size: 20px;margin-bottom: .5%;\">shop virtually with a personal assistant</p>\n<p class=\"cb2-brown-light copyXS txt-black\" id=\"SouthCoastcopy\" style=\"text-align: center;letter-spacing:0px;font-size: 16px;line-height:20px;width:75%;margin:0 auto;\">Our store may be closed, but our associates are still here for you. Schedule an appointment below to virtually shop the store with the help of one of our product experts. Totally free; no purchase needed.</p>\n  <p class=\"cb2-brown-light ctaS\" id=\"ctaSC\" style=\"text-align:center;text-decoration:underline;text-transform:uppercase;letter-spacing:.1em;margin-top: .8%;\">book now</p>\n</a></div></div>", "selector": ".store-body-container", "dependencies": [], "operator": "before", "type": "append", "id": "17B938A6-7824-4E7B-AC5B-39183A1FE3DC"}]}], "name": "Variation #1"}], "audienceIds": ["and", "18391240380"], "changes": null, "id": "18374460337", "integrationSettings": null}], "id": "18381400501", "weightDistributions": null, "name": "Fix - South Coast Store Page Banner", "groupId": null, "commitId": "18364000239", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"20160311170": {"qm_variation_id": "139", "qm_experiment_id": "138", "qm_decision_id": "366"}, "10375182457": {"eVar": "eVar87"}}, "integrationStringVersion": 2, "viewIds": ["20370708402"], "experiments": [{"weightDistributions": [{"entityId": "20366394450", "endOfRange": 5000}, {"entityId": "20392253000", "endOfRange": 10000}], "audienceName": "Everyone else", "name": "TEST - Hardware Nav Test V2", "bucketingStrategy": null, "variations": [{"id": "20366394450", "actions": [], "name": "Original"}, {"id": "20392253000", "actions": [{"viewId": "20370708402", "changes": [{"dependencies": [], "type": "custom_code", "id": "2088F40B-1415-4B18-9D21-E8D35350B20A", "value": function($){var utils = window["optimizely"].get('utils');
try {
	window.addEventListener("load", function (event) {

    utils.waitForElement('#primary-navigation-items').then(function() {	
      
      // Deleting Knobs and Pulls Grandchild Item
      var kpgrandchild = document.getElementById("nav_Decor-&-Mirrors_Organization-&-Hardware_Knobs-&-Pulls");
      kpgrandchild.parentElement.remove(); // Removes Knobs and Pulls Grandchild Menu Item
      
      // Changing button text for mobile devices
      if (digitalData.page.pageInfo.sysEnv == "mobile") {
      	var orghardbutton = document.querySelector("[aria-controls='nav-list_nav_Decor-&-Mirrors_Organization-&-Hardware']");
      	orghardbutton.innerHTML = "Organization";
      }
      
      // Changing category text for all devices
      var orghard = document.getElementById("nav_Decor-&-Mirrors_Organization-&-Hardware");
      orghard.innerHTML = "Organization";

      //Adding new list item
      var decormirrors = document.getElementById("nav-list_Decor-&-Mirrors");
      
      var li = document.createElement("li"); //Creating new list item
      li.setAttribute('class', 'child-menu-item'); //Adding class attribute to new list item
      
      var a = document.createElement("a"); //Creating new hyperlink item with all attributes
      a.setAttribute('id',"nav_Decor-&-Mirrors_Knobs-&-Pulls");
      a.setAttribute('class','child-menu-item-link');
      a.setAttribute('href','/accessories/knobs-pulls/1');
      a.innerHTML = 'Knobs & Pulls';
      
      li.appendChild(a); //Adding hyperlink element to new list item
      decormirrors.insertBefore(li, orghard.parentElement); //Adding new list item to unordered list
      
      //Hiding knobs and pulls on PLP
      if (digitalData.page.pageInfo.destinationURL == "https://www.cb2.com/accessories/organization-hardware/") {
        var knobspullscontent = document.querySelector('[class="spategory-content"]');
        knobspullscontent.firstChild.remove();
      }
      
      // Setting current ancestor link and collapsing organization
      
      if (digitalData.page.pageInfo.destinationURL == "https://www.cb2.com/accessories/knobs-pulls/1") {
        document.getElementById("nav_Decor-&-Mirrors_Organization-&-Hardware").parentElement.classList.remove("current-link-ancestor");
        document.getElementById("nav_Decor-&-Mirrors_Knobs-&-Pulls").parentElement.classList.add("current-link-ancestor");
        document.getElementById("nav_Decor-&-Mirrors_Knobs-&-Pulls").parentElement.classList.add("current-link");
        document.getElementById("nav-list_nav_Decor-&-Mirrors_Organization-&-Hardware").classList.remove("is-expanded");
        
        // Removing Breadcrumbs on PLP
        document.querySelector('[class="breadcrumb-list-item"]').remove();
        document.querySelector('[class="breadcrumb-list-item-no-arrow"]').firstChild.innerHTML = 'Decor & Mirrors';
        document.querySelector('[class="breadcrumb-list-item-no-arrow"]').firstChild.setAttribute('href', '/accessories/');
      }
      
      // Removing/Fixing breadcrumbs on PDPs
      if (digitalData.product[0].attributes.category.categoryName == "Knobs & Pulls") {
        document.querySelector("li.breadcrumb-list-item > a[href='/accessories/all-organization-hardware/1']").parentElement.remove();
          
        var elementsArray = Array.from(document.querySelectorAll('[class="radio-swatch-item-label"]'));
        console.log(elementsArray.constructor === Array);
        
        for (var i=0; i < elementsArray.length; i++) {
          elementsArray[i].firstChild.addEventListener('click', function() {
            document.querySelector("[class='breadcrumb-list-item']").setAttribute("class", "breadcrumb-list-item-no-arrow");
          });
        }
      }
      
     });
  });
} catch (error) {
  console.error(error);
  console.log("Error from Optimizely test: TEST - Hardware Nav Test");
}
}}]}], "name": "Variation #1"}], "audienceIds": null, "changes": null, "id": "20396071784", "integrationSettings": null}], "id": "20392520319", "weightDistributions": null, "name": "TEST - Hardware Nav Test V2", "groupId": null, "commitId": "20479338618", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {}, "integrationStringVersion": 1, "viewIds": ["10970300911"], "experiments": [{"weightDistributions": [{"entityId": "10947851005", "endOfRange": 10000}], "audienceName": "Desktop/Tablet Only", "name": "Desktop - CB2 Interiors - Modsy - furn product page", "bucketingStrategy": null, "variations": [{"id": "10958201841", "actions": [], "name": "Original"}, {"id": "10947851005", "actions": [{"viewId": "10970300911", "changes": [{"value": "<style>.CB2Interiors {\n       margin-top: 50px;\n       float: left\n   }</style>", "selector": "head", "dependencies": [], "type": "append", "id": "624f511537204db59972aeb0fedb492b"}, {"value": "<a class='CB2Interiors' href='https://www.cb2.com/cb2interiors'> \n    <img src='https://images.cb2.com/is/image/CB2/cb2_interiors_fj_banner_19spring_d?fmt=jpg&qlt=80,0&wid=1008'\n    alt=\"Need help pulling it all together? Collaborate with an interior designer to create a layout for your space combining new items and pieces you already own. It's the easiest way to decorate.\" /></a>", "selector": "#section-reviews", "dependencies": [], "operator": "before", "type": "append", "id": "dcf12790776b423bb61d22f5af0fa25c"}, {"selector": ".CB2Interiors > img", "dependencies": [], "attributes": {"src": "https://images.cb2.com/is/image/CB2/cb2_interiors_fj_banner_19fall_d?fmt=jpg&qlt=80,0&wid=1008"}, "type": "attribute", "id": "75006FC1-1AB6-4F6D-B391-70B9F6F88905", "css": {}}]}], "name": "Variation #1"}], "audienceIds": ["or", "10368458633"], "changes": null, "id": "10968220923", "integrationSettings": null}], "id": "10947851004", "weightDistributions": null, "name": "Desktop - CB2 Interiors - Modsy - furn product page", "groupId": null, "commitId": "16808290504", "decisionMetadata": null, "policy": "single_experiment", "changes": null}], "dimensions": [{"segmentId": null, "id": "10560883849", "apiName": "LR_B2B", "name": "LR_B2B"}], "projectId": "8249343", "namespace": "8249343", "dcpKeyfieldLocators": [{"dcp_datasource_id": "13625440248", "is_optimizely": true, "type": "uid", "name": ""}, {"dcp_datasource_id": "14298350035", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "14418590228", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "14604340617", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "15672440735", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "15694330291", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "15773970482", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}, {"dcp_datasource_id": "16840390573", "is_optimizely": false, "type": "cookie", "name": "EmailAddr"}], "visitorAttributes": [{"datatype": "string", "dcp_datasource_id": "14418590228", "id": "14412550238", "name": "SHA256"}, {"datatype": "string", "dcp_datasource_id": "14604340617", "id": "14592700030", "name": "SHA256"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15294890357", "name": "collection"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15300830606", "name": "Recommendations_ugc"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15304630884", "name": "grc_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15307480435", "name": "grc_promocode"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15309730206", "name": "nm_promocode"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15339250553", "name": "nm_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15343150212", "name": "recommendations"}, {"datatype": "string", "dcp_datasource_id": "14418590228", "id": "15526140683", "name": "cbcc"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15750460567", "name": "grc_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "15694330291", "id": "15754580450", "name": "cbcc"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15758220740", "name": "nm_promocode"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15758390466", "name": "nm_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15758480287", "name": "recommendations"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15775900468", "name": "recommendations_ugc"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15777950568", "name": "collection"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "15784000299", "name": "grc_promocode"}, {"datatype": "string", "dcp_datasource_id": "15773970482", "id": "16460590047", "name": "rewards"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16838491092", "name": "recommendations"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16838591635", "name": "Recommendations_ugc"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16848330467", "name": "collection"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16852420507", "name": "nm_promocode"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16855590892", "name": "nm_promo_exp"}, {"datatype": "string", "dcp_datasource_id": "16840390573", "id": "16865750998", "name": "cbcc"}, {"datatype": "string", "dcp_datasource_id": "15694330291", "id": "18131744764", "name": "CorePrefEmail"}, {"datatype": "string", "dcp_datasource_id": "15694330291", "id": "18146403162", "name": "KidsPrefEmail"}], "events": [{"category": "other", "name": "Austin banner clicks", "eventType": "click", "viewId": "8300837002", "apiName": "8249343_austin_banner_clicks", "id": "8549602589", "eventFilter": {"filterType": "target_selector", "selector": ".fL div:nth-of-type(8) img"}}, {"category": "purchase", "name": "CKT - Purchase Complete (NR & R)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_3", "id": "9069501134", "eventFilter": null}, {"category": "other", "name": "CB2 - Extension Banner Clicks", "eventType": "custom", "viewId": null, "apiName": "cb2_banner_clicks", "id": "9499860910", "eventFilter": null}, {"category": "purchase", "name": "CKT - Purchase Complete (NR & R) (1)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_7", "id": "11406982061", "eventFilter": null}, {"category": "purchase", "name": "CKT - Purchase Complete (NR & R) (2)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_8", "id": "11420611793", "eventFilter": null}, {"category": "purchase", "name": "CKT - Purchase Complete (NR & R) (3)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_1_1", "id": "11499650318", "eventFilter": null}, {"category": "purchase", "name": "CKT - Purchase Complete (NR & R) (4)", "eventType": "custom", "viewId": null, "apiName": "purchase_complete_11", "id": "15702731239", "eventFilter": null}], "revision": "32510", "views": [{"category": "home", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com", "match": "simple"}]], "name": "Homepage | Desktop + Mobile", "apiName": "homepage", "tags": [], "undoOnDeactivation": false, "activationCode": function callbackFn(activate, options) {
  activate();
}
, "deactivationEnabled": false, "id": "8300837002"}, {"category": "product_detail", "staticConditions": ["and", ["or", {"type": "url", "value": "www.cb2.com", "match": "substring"}]], "activationType": "polling", "name": "Product Pages | Desktop + Mobile", "apiName": "8249343_product_pages__desktop", "tags": [{"category": "other", "locator": ".shop-bar-left-product-info", "valueType": "string", "locatorType": "css_selector", "apiName": "product_name"}, {"category": "other", "locator": ".description-intro > div", "valueType": "string", "locatorType": "css_selector", "apiName": "product_page_description"}, {"category": "other", "locator": "#section1 > div", "valueType": "string", "locatorType": "css_selector", "apiName": "product_description_hws"}], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  return document.getElementById("_fbType").getAttribute("content") == "product";
}
, "deactivationEnabled": false, "id": "8334581343"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.cb2.com/barca-black-wallpaper/s584302", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/barca-grey-wallpaper/s584373", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/barca-camel-wallpaper/s584364", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/palm-wallpaper/s512085", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/judd-aqua-wallpaper/s584381", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/judd-basalt-wallpaper/s584397", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/judd-taupe-wallpaper/s584400", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/rome-grey-wallpaper/s584425", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/rome-teal-wallpaper/s584451", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/expressionist-rounds-gold-and-white-wallpaper/s300916", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/damask-white-and-light-grey-wallpaper/s300987", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/caymen-navy-and-gold-palm-wallpaper/s160207", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/time-travel-floral-wallpaper/s386822", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/lucky-floral-wallpaper/s386797", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/rome-basalt-wallpaper/s584419", "match": "simple"}]], "name": "Wallpaper Barca", "apiName": "8249343_wallpaper_barca", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10521323039"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/s\\d{5,6}?", "match": "regex"}, {"type": "url", "value": "www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/f\\d{4,5}?", "match": "regex"}]], "name": "All Product and Family Pages- Regex | Desktop + Mobile (8)", "apiName": "7871036_desktop_all_product_and_family_pages_regex_1_1_2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "10752991729"}, {"category": "product_detail", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/", "match": "substring"}]], "activationType": "polling", "name": "Domino Product Pages | Desktop + Mobile (1)", "apiName": "8249343_cb2_domino_pages_1_1", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  if(document.getElementById("_fbType").getAttribute("content") == "product"){
  var Furniturelist=
["11167","102" ,"112" ,"106" ,"110" ,"114" ,"118" ,"11020" ,"11021" ,"116" ,"11043" ,"810"];
  	var categoryId = Crate.Model.BrowseDto.CategoryId;
  var resultsFurniturelist =$.grep(Furniturelist, function( n, i ) {
  return ( n ==categoryId);
	});
  return resultsFurniturelist.length > 0;
  }
}
, "deactivationEnabled": false, "id": "10970300911"}, {"category": "product_detail", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/", "match": "substring"}]], "activationType": "polling", "name": "Domino Product Pages | Desktop + Mobile (3)", "apiName": "8249343_cb2_domino_pages_1_3", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  if(document.getElementById("_fbType").getAttribute("content") == "product"){
  var Furniturelist=
["11167","102" ,"112" ,"106" ,"110" ,"114" ,"118" ,"11020" ,"11021" ,"116" ,"11043" ,"810"];
  	var categoryId = Crate.Model.BrowseDto.CategoryId;
  var resultsFurniturelist =$.grep(Furniturelist, function( n, i ) {
  return ( n ==categoryId);
	});
  return resultsFurniturelist.length > 0;
  }
}
, "deactivationEnabled": false, "id": "10974230943"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com", "match": "substring"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    // get sku from the page from .jsSwatchSku clas
    var skuEl = document.querySelector('.jsSwatchSku');
    var altSkuEl = document.querySelector('.sku-number');

    if (skuEl || altSkuEl) {
      
      if(skuEl !== null){
        
      var sku = skuEl.innerHTML;
      }else if(altSkuEl !== null) {
        
        var sku = altSkuEl.innerHTML;
        
      }
    window.vintageSku = sku;

    // json created from https://docs.google.com/spreadsheets/d/1EJjFwwuGOVV6a3lGQ_rhLDjI38iJnfxNukUhj0S-AAM/edit#gid=0
    var vintageSkus = [268063,268055,268036,268111,268323,267998,267986,267927,267936,267955,267974,252574,251571,252592,252607,252610,252630,252668,252706,252736,252696,252799,253095,253176,253253,364961,253592,253584,267677,273508,273510,254755,254809,254906,254918,254923,254937,254981,275218,275260,275295,275307,275311,275324,275348,278048,275467,275493,278376,278382,278391,256344,256381,256397,256403,256459,256467,256470,255350,255382,255406,255425,280428,280564,280507,280463,280547,280475,280483,257440,257465,257481,257491,257520,257536,257556,257565,257576,257609,257637,281155,281349,281378,281407,281551,281393,276843,255730,255746,256485,256503,277004,277026,284225,253895,253865,253883,253906,253941,253970,254094,254012,254101,268638,276532,276540,276557,266690,266606,267382,267402,254998,255024,255037,255086,255099,255145,255244,255258,255261,276211,276229,276291,276314,276323,276365,274639,274679,274735,253617,253622,278957,278969,278972,278984,279026,279030,279055,279065,279079,279089,278218,278202,278195,278187,278153,278144,278138,278110,278104,278091,278060,277963,277949,277920,255782,276345,276331,276277,275711,275678,275607,257076,252165,281049,280931,280876,280865,280810,280802,280792,280788,280777,280716,257122,257114,257105,257091,275137,275128,275110,275105,275097,275078,275036,275002,274983,274964,274935,274716,274494,274452,253674,253699,253710,253756,253768,268563,268574,268584,255716,255727,277012,277074,277133,277186,281541,281528,281463,281337,281288,281142,257366,280498,280455,255341,255321,255296,277831,277814,277750,277694,277662,277656,277424,277390,279465,278948,274181,274162,274157,274121,274027,273991,273972,273908,273845,273830,273815,273747,273734,273714,273695,254558,276512,253517,254832,254603,364974,253430,364953,284212,273496,273453,253451,252888,252834,276508,268493,268155,254946,252136,252508,252112,253822,278819,278837,278853,278888,253525,253531,252221,252256,252302,252341,252427,252450,257148,257166,257175,257186,257204];

    // return true/false if sku found/not found in json 
    return vintageSkus.indexOf(Number(sku)) > -1;
    
    }
}
}]], "name": "URL Targeting for FIX- Vintage SKUs store messaging", "apiName": "8300054817_url_targeting_for_vintage_skus_store_messaging_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15859530554"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/checkout/cart", "match": "simple"}]], "name": "URL Targeting for Hide oversize shipping popup link on the Cart page", "apiName": "8249343_url_targeting_for_hide_oversize_shipping_popup_link_on_t", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16911475189"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/business-sales/application", "match": "simple"}]], "name": "URL Targeting for FIX - B2B application dual branded logo addition ", "apiName": "7871036_url_targeting_for_fix__b2b_application_dual_branded_logo_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "16916081792"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "custom_code", "value": function jsCondition() {
    window.catNames = [
        'Sofas',
        'Sectionals',
        'Sleepers & Daybeds',
        'Accent Chairs',
        'Ottomans, Poufs, Stools',
        'Dining Chairs',
        'Beds',
        'Dining Tables',
        'Bar & Counter Stools'
    ];

    var pdpCatNem = Crate.Model.BrowseDto.CategoryName;

    return window.catNames.indexOf(pdpCatNem) !== -1;
}
}], ["or", {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/s\\d{6}?", "match": "regex"}, {"type": "url", "value": "https://www\\.cb2\\.com\\/[a-zA-Z0-9-.]+\\/f\\d{5}?", "match": "regex"}]], "activationType": "polling", "name": "URL Targeting for TEST - Upholstery Product page test | 100% PLA Entry Only", "apiName": "6216930665_url_targeting_for_test__upholstery_product_page_test__1_1_1_2_1_1_1", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
    return typeof digitalData.page.pageInfo !== 'undefined' && typeof Crate.Model.BrowseDto !== 'undefined' && document.querySelector('.international-layout') === null && document.getElementById('jsIsMobile').value === '1' &&
      window.location.href.indexOf('gclid') > -1;
}
, "deactivationEnabled": false, "id": "17027484241"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/checkout/cart", "match": "simple"}]], "name": "URL Targeting for FIX - Hide BOPS killswitch messaging on cart", "apiName": "8249343_url_targeting_for_fix__hide_bops_killswitch_messaging_on", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17816410940"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/design-collabs/ferrer-vintage/1", "match": "simple"}]], "name": "URL Targeting for FIX COVID - Vintage Messaging Update", "apiName": "8249343_url_targeting_for_covid__vintage_messaging_update", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17938000367"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "search_partial?query=", "match": "substring"}, {"type": "url", "value": "search_noresults?query=", "match": "substring"}]], "name": "URL Targeting for FIX - Search Pages - Let's Chat Button Gladly", "apiName": "8249343_url_targeting_for_fix__search_pages__lets_chat_button_gl", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18136766462"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/checkout/cart", "match": "simple"}]], "name": "URL Targeting for FIX - Remove unneeded promo message on cart page", "apiName": "8249343_url_targeting_for_fix__remove_unneeded_promo_message_on_", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18265722273"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.cb2.com/stores/", "match": "simple"}]], "name": "URL Targeting for Fix - South Coast Store Page Banner", "apiName": "8249343_url_targeting_for_fix__south_coast_store_page_banner", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "18385380192"}, {"category": "other", "staticConditions": null, "activationType": "callback", "name": "URL Targeting for FIX - Do Not Sell Cookie", "apiName": "8249343_url_targeting_for_fix__do_not_sell_cookie", "tags": [], "undoOnDeactivation": false, "activationCode": 
function callbackFn(activate, options) {
    var doNotSellLink = document.getElementById('do-not-sell-my-info-link');
    if (doNotSellLink) {
        doNotSellLink.addEventListener('click', activate);
    }
}
, "deactivationEnabled": false, "id": "18809152068"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/gift-cards/", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/gift-cards/", "match": "substring"}]], "name": "URL Targeting for temp fix- mobile gift card page horizontal scroll with new cards", "apiName": "8249343_url_targeting_for_temp_fix_mobile_gift_card_page_horizon", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "19050850761"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com", "match": "substring"}]], "activationType": "polling", "name": "Custom Collection > 0", "apiName": "8249343_custom_collection__0", "tags": [], "undoOnDeactivation": false, "activationCode": /**
 * Sample JavaScript Condition
 * This function is called after the page is triggered. It should return true
 * when the page is ready to activate.
 */

function jsCondition() {
  var isCollectionCodeGreaterThanZero = digitalData && digitalData.product[0] && digitalData.product[0].attributes && digitalData.product[0].attributes.category && digitalData.product[0].attributes.category.collectionId > 0;

  return isCollectionCodeGreaterThanZero;
}
, "deactivationEnabled": false, "id": "20171290287"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/search?query=glass+vase", "match": "substring"}, {"type": "url", "value": "https://www.cb2.com/search?query=platter", "match": "substring"}, {"type": "url", "value": "https://www.cb2.com/search?query=grey+accent+chair", "match": "substring"}]], "name": "URL Targeting for FIX - HWS-9280 - 4/21/21 Launch CB2 Canary Search Pages", "apiName": "8249343_url_targeting_for_copy_of_fix__hws9280__42121_launch_cl_", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20188124280"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.cb2.com/design-collabs/paul-mccobb/", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com/design-collabs/kara-mann/", "match": "simple"}]], "name": "URL Targeting for FIX: Hide Top Rated filter", "apiName": "8249343_url_targeting_for_fix_hide_top_rated_filter", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20271862379"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/rewards/", "match": "simple"}]], "name": "URL Targeting for PERS - Houston Double Rewards", "apiName": "8249343_url_targeting_for_pers__houston_double_rewards", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20352567846"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.cb2.com/", "match": "substring"}]], "name": "URL Targeting for TEST - Hardware Nav Test V2", "apiName": "8249343_url_targeting_for_test__hardware_nav_test_v2", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20370708402"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "www.cb2.com/design-collabs/", "match": "substring"}, {"type": "url", "value": "www.cb2.com/outdoor/", "match": "substring"}, {"type": "url", "value": "www.cb2.com/on-trend/", "match": "substring"}, {"type": "url", "value": "www.cb2.com/special-features/", "match": "substring"}]], "name": "URL Targeting for Fix - Enable Looping Video", "apiName": "8249343_url_targeting_for_fix__enable_looping_video", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20403144885"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "cb2.com/", "match": "substring"}], ["or", {"type": "url", "value": "https://www.cb2.com/", "match": "simple"}, {"type": "url", "value": "https://www.cb2.com", "match": "simple"}]], "name": "URL Targeting for FIX: Hide CB2 Feedback Button", "apiName": "8249343_url_targeting_for_fix_hide_cb2_feedback_button", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "20420433315"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.cb2.com/account", "match": "simple"}], ["or", {"type": "url", "value": "https://www.cb2.com/account/orders", "match": "simple"}]], "activationType": "polling", "name": "URL Targeting for Fix: Recently Viewed styling on the Account Order List page", "apiName": "8249343_url_targeting_for_fix_recently_viewed_styling_on_the_acc", "tags": [], "undoOnDeactivation": false, "activationCode": function pollingFn() {
  return $(".recently-viewed-wrapper").length === 1;
}
, "deactivationEnabled": false, "id": "20477348407"}], "integrationSettings": [], "interestGroups": [{"keywords": ["accessories", "bar", "curtain", "decor", "dinnerware", "drinkware", "flatware", "hardware", "kitchen", "mirror", "serving"], "tagGroupId": "116", "available": true, "id": "197"}, {"keywords": ["console", "daybed", "leather", "ottoman", "pouf", "sectional", "sleeper", "sofa", "tufted"], "tagGroupId": "116", "available": true, "id": "198"}, {"keywords": ["cart", "credenza", "dining", "stools", "table"], "tagGroupId": "116", "available": true, "id": "199"}, {"keywords": ["bistro", "grill", "lounger", "outdoor", "planter", "swing", "umbrella"], "tagGroupId": "116", "available": true, "id": "204"}, {"keywords": ["bed", "canopy", "dresser", "headboard", "nightstand", "wardrobe"], "tagGroupId": "116", "available": true, "id": "205"}, {"keywords": ["conference", "desk", "executive", "file", "filing", "office"], "tagGroupId": "116", "available": true, "id": "206"}], "groups": [], "projectJS": function(){var getQueryParam = function(name) {
   var match = window.location.search.match('[\?|\&]' + name + '=([^&]*)');
   return match ? match[1] : undefined;
};
//cid page activation
window.optimizely = window.optimizely || [];
window.cid = getQueryParam("cid");
if(window.cid){
  console.log("cid detected --> "+window.cid);
  window['optimizely'].push({
		  "type": "page",
		  "pageName": "passthroughLP",
		  "tags": {
    		"cid": cid
  		}	
	});
};

// utils
window.__ = window.__ || {};

__.hasClass = function (el, className) {
    return el.classList ?
        el.classList.contains(className) :
        new RegExp('\\b' + className + '\\b').test(el.className);
};

__.addClass = function (el, className) {
    if (el.classList) {
        el.classList.add(className);
    } else if (!__.hasClass(el, className)) {
        el.className += ' ' + className;
    }
};

__.removeClass = function (el, className) {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('\\b' + className + '\\b', 'g'), '');
    }
};

__.loadScript = function (location, callback) {
    var fileRef = document.createElement('script');
    fileRef.setAttribute('type', 'text/javascript');

    if (callback) {
        if (fileRef.readyState) {
            fileRef.onreadystatechange = function () {
                if (
                    fileRef.readyState == 'loaded' ||
                    fileRef.readyState == 'complete'
                ) {
                    fileRef.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            fileRef.onload = function () {
                callback();
            };
        }
    }

    fileRef.setAttribute('src', location);
    document.head.appendChild(fileRef);
};

__.isPhone = (function () {
    var el = document.querySelector('.responsive-layout');
    return el ? el.offsetParent === null : false;
})();

__.insertAfter = function (el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
};

__.insertBefore = function (el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
};
}, "snippetId": "14035710247", "enableForceParameters": false, "experimental": {"trimPages": true}},g=i(133),h="initializeOptimizelyPreview";if(g.initGlobalStore(p),d.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.conflictInObservingChanges())return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");if(s.shouldLoadInnie())l.registerFunction("getProjectId",(function(){return p.projectId})),l.registerFunction("getAccountId",(function(){return p.accountId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var _;_=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],_.push({type:"load",data:p}),a.log("Main / Disabling in favor of the preview client."),i(147).setupPreviewGlobal(),i(147).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:p}),s.isSlave()||(l.registerFunction("getProjectId",(function(){return p.projectId})),f.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/public/7871036/s/prod_cb2_akamai/preview.js"))}else if(s.shouldBootstrapDataForPreview()){l.registerFunction(h,(function(t){e(t),l.unregisterFunction(h)}));var v=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:l.getFunction("getProjectId")();u=t(s.getProjectToken(),v,s.getPreviewLayerIds()),f.addScriptSync(u),i(147).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(l.registerFunction(h,(function(t){e(t),l.unregisterFunction(h)})),f.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&e(p);r.timeEnd("block")}try{n()}catch(e){try{i(120).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,i){function n(){s();var e=x.getRumData();return e.extras=e.extras||{},e.extras.beacon={cjsTimeout:!0},e=_.pickBy(e,(function(e){return!_.isUndefined(e)})),a(e)}function r(e){var t=P.getPromise("RUM_FIRST_BEACON");return t?t.then(e):m.makeAsyncRequest("RUM_FIRST_BEACON",e)}function a(e){return _.isEmpty(e)?b.resolve():r((function(){return O.request({url:B,method:"POST",data:e,withCredentials:!0}).then((function(e){return m.resolveRequest("RUM_FIRST_BEACON",e),e}))["catch"]((function(e){throw A.error("POST to client-rum failed:",e),m.rejectRequest("RUM_FIRST_BEACON",e),e}))}))}function o(){var e=y.getCurrentScript();if(e)return e.src}function s(){var e={id:x.getRumId(),v:j,account:k.getAccountId(),project:k.getSnippetId()||k.getProjectId(),snippet:k.getSnippetId(),revision:k.getRevision(),clientVersion:V.getClientVersion(),hasSlave:!1,wxhr:!0,extras:{}},t=R.getPersistedBehaviorEventCount(),i=E.getEventCount();e["numBehaviorEvents"]=i;var n=i-t;_.extend(e.extras,{behaviorEventCountDiff:n,behaviorEventCountDecreased:n<0}),_.assign(e,c(),d()),S.dispatch(N.SET_RUM_DATA,{data:e})}function c(){var e=D.getGlobal("performance");if(e){var t,i=x.getScriptSrc();try{if(i){A.debug("Using derived script src: ",i);var n=e.getEntriesByName(i);n.length>0&&(t=n[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;A.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=_.find(a,(function(e){return r.test(e.name)}))}if(t)return _.mapValues(C.ResourceTimingAttributes,(function(e,i){var n=t[i];return"number"==typeof n?Math.round(1e3*(n||0))/1e3:"serverTiming"===i?n||[]:void 0}))}catch(e){return}}}function u(){try{return!y.querySelector("body")}catch(e){return null}}function l(){try{D.getGlobal("requestAnimationFrame")((function(){var e=x.getRumData().timebase;S.dispatch(N.SET_RUM_DATA,{data:{render:I.now()-(e||0)}})}))}catch(e){return}}function d(){return F.getDurationsFor(_.values(C.RUMPerformanceTimingAttributes))}function f(){var e=T.keys(),t=_.filter(_.map(e,(function(e){var t=R.getStorageKeyFromKey(e);return t?{key:e,isForeign:R.isForeignKey(e),category:t,size:e.length+T.getItem(e).length}:null}))),i=_.reduce(t,(function(e,t){var i=t.key,n=R.getIdFromKey(i);if(!n)return e;var r=t.isForeign?e.foreign:e.local;return r[n]=!0,e}),{local:{},foreign:{}}),n=_.chain(t).filter({isForeign:!0}).reduce((function(e,t){var i=t.key.split("_")[0];return e[i]=!0,e}),{}).value(),r={local:0,foreign:0},a={local:{},foreign:{}};_.forEach(t,(function(e){var t=e.isForeign?"foreign":"local";r[t]+=e.size,a[t][e.category]||(a[t][e.category]=0),a[t][e.category]+=e.size}));var o={numKeys:T.allKeys().length,sizeKeys:T.allKeys().toString().length,sizeValues:T.allValues().toString().length,idCounts:{local:_.keys(i.local).length,foreign:_.keys(i.foreign).length},foreignOriginCount:_.keys(n).length,byteTotals:r,byteTotalsByCategory:a},s=w.estimateStorage();return s.then((function(e){return _.assign(o,{storageEstimate:e})}))}function p(){var e=D.getGlobal("performance"),t=e?e.timing:{},i=F.getMarks()||{},n=x.getApiData(),r=x.getDOMObservationData(),o=G.get("state").getActiveExperimentIds(),s=x.getFeaturesNeededData(),c=y.parseUri(x.getScriptSrc()),u=x.getRumData()||{},l=u.extras||{};_.assign(l,{apiCalls:n,DOMObservationData:r,paintTimings:h(),activeExperimentIds:o,numPages:U.getNumberOfPages(),snippet:{scheme:c.protocol.slice(0,-1),host:c.host,path:c.pathname},networkInfo:g(),experimental:k.getExperimental(),featuresNeeded:s,beacon:{cjsOnload:!0}});var d=D.getGlobal("Prototype");d&&!_.isUndefined(d.Version)&&(l.prototypeJS=d.Version);var p=!1;p=!0;var v=M.getFrames();v.length&&(l.xdFramesLoaded=v.length);var m={id:x.getRumId(),v:j,project:k.getSnippetId()||k.getProjectId(),navigationTimings:t,userTimings:i,xd:p,apis:_.keys(n),extras:l,sampleRate:u.sampleRate};f().then((function(e){var t=_.assign(m,{lsMetrics:e});a(t)}))}function g(){var e=D.getGlobal("navigator");if(e&&e.connection)return _.pick(e.connection,["downlink","rtt","effectiveType"])}function h(){var e=D.getGlobal("performance");if(e)try{var t=e.getEntriesByType("paint");if(_.isEmpty(t))return;return _.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}catch(e){return}}var _=i(2),v=i(5),m=i(6),E=i(71),I=i(24),y=i(80),S=i(9),T=i(81).LocalStorage,A=i(23),w=i(90),b=i(12).Promise,R=i(74),D=i(40),O=i(91),N=i(7),C=i(25),L=i(16),P=L.get("stores/async_request"),V=L.get("stores/client_metadata"),k=L.get("stores/global"),x=L.get("stores/rum"),F=L.get("stores/performance"),M=L.get("stores/xdomain"),U=L.get("stores/view_data"),G=i(93),B="https://rum.optimizely.com/rum",z=3e3,j="1.0",H=.01;t.initialize=function(){var e,t=v.generate().replace(/-/g,"");e=Math.random()<H;var i=o();S.dispatch(N.SET_RUM_DATA,{id:t,RumHost:B,inRumSample:e,src:i,data:{id:t,sync:u(),timebase:I.now(),sampleRate:H,url:i,extras:{initialDOMState:y.getReadyState()}}})},t.queueBeacons=function(){return x.getSampleRum()?(l(),y.isLoaded()?D.setTimeout(p,z):D.addEventListener("load",p),new b(function(e,t){D.setTimeout((function(){n().then(e,t)}),z)}).catch((function(e){A.warn("RUM / Error sending data:",e)}))):b.resolve()}}),(function(e,t,i){e.exports=i(3)._.noConflict()}),(function(e,t,i){(function(e,i){(function(){function n(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return c(Re(e),fi)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,i){for(var n=-1,r=e.length;++n<r;)if(i(t,e[n]))return!0;return!1}function c(e,t){for(var i=-1,n=t.length,r=e.length;++i<n;)e[r+i]=t[i];return e}function u(e,t,i){for(var n=-1,r=e.length;++n<r;){var a=e[n],o=t(a);if(null!=o&&(s===Ti?o===o:i(o,s)))var s=o,c=a}return c}function l(e,t,i,n){var r;return i(e,(function(e,i,a){if(t(e,i,a))return r=n?i:e,!1})),r}function d(e,t,i){for(var n=e.length,r=i?n:-1;i?r--:++r<n;)if(t(e[r],r,e))return r;return-1}function f(e,t,i){if(t!==t)return I(e,i);for(var n=i-1,r=e.length;++n<r;)if(e[n]===t)return n;return-1}function p(e,t,i,n,r){return r(e,(function(e,r,a){i=n?(n=!1,e):t(i,e,r,a)})),i}function g(e,t){for(var i=-1,n=Array(e);++i<e;)n[i]=t(i);return n}function h(e){return function(t){return e(t)}}function _(e,t){return Ee(t,(function(t){return e[t]}))}function v(e){return e&&e.Object===Object?e:null}function m(e,t){if(e!==t){var i=null===e,n=e===Ti,r=e===e,a=null===t,o=t===Ti,s=t===t;if(e>t&&!a||!r||i&&!o&&s||n&&s)return 1;if(e<t&&!i||!s||a&&!n&&r||o&&r)return-1}return 0}function E(e){return gn[e]}function I(e,t,i){for(var n=e.length,r=t+(i?0:-1);i?r--:++r<n;){var a=e[r];if(a!==a)return r}return-1}function y(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function S(e,t){return e="number"==typeof e||dn.test(e)?+e:-1,t=null==t?Pi:t,e>-1&&e%1==0&&e<t}function T(e){for(var t,i=[];!(t=e.next()).done;)i.push(t.value);return i}function A(e){var t=-1,i=Array(e.size);return e.forEach((function(e,n){i[++t]=[n,e]})),i}function w(e){var t=-1,i=Array(e.size);return e.forEach((function(e){i[++t]=e})),i}function b(e){if(jt(e)&&!dr(e)){if(e instanceof R)return e;if(Rn.call(e,"__wrapped__"))return tt(e)}return new R(e)}function R(e,t){this.e=e,this.u=[],this.l=!!t}function D(){}function O(e,t){return C(e,t)&&delete e[t]}function N(e,t){if(Xn){var i=e[t];return i===Ri?Ti:i}return Rn.call(e,t)?e[t]:Ti}function C(e,t){return Xn?e[t]!==Ti:Rn.call(e,t)}function L(e,t,i){e[t]=Xn&&i===Ti?Ri:i}function P(e){var t=-1,i=e?e.length:0;for(this.clear();++t<i;){var n=e[t];this.set(n[0],n[1])}}function V(){this.d={hash:new D,map:Yn?new Yn:[],string:new D}}function k(e){var t=this.d;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):Yn?t.map["delete"](e):W(t.map,e)}function x(e){var t=this.d;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Yn?t.map.get(e):X(t.map,e)}function F(e){var t=this.d;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):Yn?t.map.has(e):Q(t.map,e)}function M(e,t){var i=this.d;return Ze(e)?L("string"==typeof e?i.string:i.hash,e,t):Yn?i.map.set(e,t):J(i.map,e,t),this}function U(e){var t=-1,i=e?e.length:0;for(this.d=new P;++t<i;)this.push(e[t])}function G(e,t){var i=e.d;if(Ze(t)){var n=i.d,r="string"==typeof t?n.string:n.hash;return r[t]===Ri}return i.has(t)}function B(e){var t=this.d;if(Ze(e)){var i=t.d,n="string"==typeof e?i.string:i.hash;n[e]=Ri}else t.set(e,Ri)}function z(e){var t=-1,i=e?e.length:0;for(this.clear();++t<i;){var n=e[t];this.set(n[0],n[1])}}function j(){this.d={array:[],map:null}}function H(e){var t=this.d,i=t.array;return i?W(i,e):t.map["delete"](e)}function K(e){var t=this.d,i=t.array;return i?X(i,e):t.map.get(e)}function Y(e){var t=this.d,i=t.array;return i?Q(i,e):t.map.has(e)}function q(e,t){var i=this.d,n=i.array;n&&(n.length<wi-1?J(n,e,t):(i.array=null,i.map=new P(n)));var r=i.map;return r&&r.set(e,t),this}function W(e,t){var i=$(e,t);if(i<0)return!1;var n=e.length-1;return i==n?e.pop():zn.call(e,i,1),!0}function X(e,t){var i=$(e,t);return i<0?Ti:e[i][1]}function Q(e,t){return $(e,t)>-1}function $(e,t){for(var i=e.length;i--;)if(Nt(e[i][0],t))return i;return-1}function J(e,t,i){var n=$(e,t);n<0?e.push([t,i]):e[n][1]=i}function Z(e,t,i,n){return e===Ti||Nt(e,wn[i])&&!Rn.call(n,i)?t:e}function ee(e,t,i){(i===Ti||Nt(e[t],i))&&("number"!=typeof t||i!==Ti||t in e)||(e[t]=i)}function te(e,t,i){var n=e[t];Rn.call(e,t)&&Nt(n,i)&&(i!==Ti||t in e)||(e[t]=i)}function ie(e,t){return e&&nr(t,oi(t),e)}function ne(e){return"function"==typeof e?e:hi}function re(e,t,i,n,r,a,o){var s;if(n&&(s=a?n(e,r,a,o):n(e)),s!==Ti)return s;if(!zt(e))return e;var c=dr(e);if(c){if(s=Xe(e),!t)return Re(e,s)}else{var u=We(e),l=u==Ui||u==Gi;if(fr(e))return Ne(e,t);if(u==ji||u==Vi||l&&!a){if(y(e))return a?e:{};if(s=Qe(l?{}:e),!t)return s=ie(s,e),i?Me(e,s):s}else{if(!pn[u])return a?e:{};s=$e(e,u,t)}}o||(o=new z);var d=o.get(e);return d?d:(o.set(e,s),(c?tr:fe)(e,(function(r,a){te(s,a,re(r,t,i,n,a,e,o))})),i&&!c?Me(e,s):s)}function ae(e){return zt(e)?Gn(e):{}}function oe(e,t,i){if("function"!=typeof e)throw new TypeError(bi);return setTimeout((function(){e.apply(Ti,i)}),t)}function se(e,t,i,n){var r=-1,a=o,c=!0,u=e.length,l=[],d=t.length;if(!u)return l;i&&(t=Ee(t,h(i))),n?(a=s,c=!1):t.length>=wi&&(a=G,c=!1,t=new U(t));e:for(;++r<u;){var f=e[r],p=i?i(f):f;if(c&&p===p){for(var g=d;g--;)if(t[g]===p)continue e;l.push(f)}else a(t,p,n)||l.push(f)}return l}function ce(e,t){var i=!0;return tr(e,(function(e,n,r){return i=!!t(e,n,r)})),i}function ue(e,t){var i=[];return tr(e,(function(e,n,r){t(e,n,r)&&i.push(e)})),i}function le(e,t,i,n){n||(n=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Vt(o)&&(i||dr(o)||Lt(o))?t>1?le(o,t-1,i,n):c(n,o):i||(n[n.length]=o)}return n}function de(e,t){return null==e?e:ir(e,t,si)}function fe(e,t){return e&&ir(e,t,oi)}function pe(e,t){return ue(t,(function(t){return Gt(e[t])}))}function ge(e,t,i,n,r){return e===t||(null==e||null==t||!zt(e)&&!jt(t)?e!==e&&t!==t:he(e,t,ge,i,n,r))}function he(e,t,i,n,r,a){var o=dr(e),s=dr(t),c=ki,u=ki;o||(c=Nn.call(e),c=c==Vi?ji:c),s||(u=Nn.call(t),u=u==Vi?ji:u);var l=c==ji&&!y(e),d=u==ji&&!y(t),f=c==u;a||(a=[]);var p=_t(a,(function(t){return t[0]===e}));if(p&&p[1])return p[1]==t;if(a.push([e,t]),f&&!l){var g=o||$t(e)?He(e,t,i,n,r,a):Ke(e,t,c,i,n,r,a);return a.pop(),g}if(!(r&Ci)){var h=l&&Rn.call(e,"__wrapped__"),_=d&&Rn.call(t,"__wrapped__");if(h||_){var g=i(h?e.value():e,_?t.value():t,n,r,a);return a.pop(),g}}if(!f)return!1;var g=Ye(e,t,i,n,r,a);return a.pop(),g}function _e(e){var t=typeof e;return"function"==t?e:null==e?hi:("object"==t?Ie:we)(e)}function ve(e){return Hn(Object(e))}function me(e){e=null==e?e:Object(e);var t=[];for(var i in e)t.push(i);return t}function Ee(e,t){var i=-1,n=Pt(e)?Array(e.length):[];return tr(e,(function(e,r,a){n[++i]=t(e,r,a)})),n}function Ie(e){var t=oi(e);return function(i){var n=t.length;if(null==i)return!n;for(i=Object(i);n--;){var r=t[n];if(!(r in i&&ge(e[r],i[r],Ti,Ni|Ci)))return!1}return!0}}function ye(e,t,i,n,r){if(e!==t){var a=dr(t)||$t(t)?Ti:si(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),zt(o))r||(r=new z),Se(e,t,s,i,ye,n,r);else{var c=n?n(e[s],o,s+"",e,t,r):Ti;c===Ti&&(c=o),ee(e,s,c)}}))}}function Se(e,t,i,n,r,a,o){var s=e[i],c=t[i],u=o.get(c);if(u)return void ee(e,i,u);var l=a?a(s,c,i+"",e,t,o):Ti,d=l===Ti;d&&(l=c,dr(c)||$t(c)?dr(s)?l=s:Vt(s)?l=Re(s):(d=!1,l=re(c,!a)):Wt(c)||Lt(c)?Lt(s)?l=ti(s):!zt(s)||n&&Gt(s)?(d=!1,l=re(c,!a)):l=s:d=!1),o.set(c,l),d&&r(l,c,n,a,o),o["delete"](c),ee(e,i,l)}function Te(e,t){return e=Object(e),It(t,(function(t,i){return i in e&&(t[i]=e[i]),t}),{})}function Ae(e,t){var i={};return de(e,(function(e,n){t(e,n)&&(i[n]=e)})),i}function we(e){return function(t){return null==t?Ti:t[e]}}function be(e,t,i){var n=-1,r=e.length;t<0&&(t=-t>r?0:r+t),i=i>r?r:i,i<0&&(i+=r),r=t>i?0:i-t>>>0,t>>>=0;for(var a=Array(r);++n<r;)a[n]=e[n+t];return a}function Re(e){return be(e,0,e.length)}function De(e,t){var i;return tr(e,(function(e,n,r){return i=t(e,n,r),!i})),!!i}function Oe(e,t){var i=e;return It(t,(function(e,t){return t.func.apply(t.thisArg,c([e],t.args))}),i)}function Ne(e,t){if(t)return e.slice();var i=new e.constructor(e.length);return e.copy(i),i}function Ce(e){var t=new e.constructor(e.byteLength);return new xn(t).set(new xn(e)),t}function Le(e){return It(A(e),n,new e.constructor)}function Pe(e){var t=new e.constructor(e.source,un.exec(e));return t.lastIndex=e.lastIndex,t}function Ve(e){return It(w(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function xe(e,t){var i=t?Ce(e.buffer):e.buffer;return new e.constructor(i,e.byteOffset,e.length)}function Fe(e,t,i,n){i||(i={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=n?n(i[o],e[o],o,i,e):e[o];te(i,o,s)}return i}function Me(e,t){return nr(e,ar(e),t)}function Ue(e){return Rt((function(t,i){var n=-1,r=i.length,a=r>1?i[r-1]:Ti;for(a="function"==typeof a?(r--,a):Ti,t=Object(t);++n<r;){var o=i[n];o&&e(t,o,n,a)}return t}))}function Ge(e,t){return function(i,n){if(null==i)return i;if(!Pt(i))return e(i,n);for(var r=i.length,a=t?r:-1,o=Object(i);(t?a--:++a<r)&&n(o[a],a,o)!==!1;);return i}}function Be(e){return function(t,i,n){for(var r=-1,a=Object(t),o=n(t),s=o.length;s--;){var c=o[e?s:++r];if(i(a[c],c,a)===!1)break}return t}}function ze(e){return function(){var t=arguments,i=ae(e.prototype),n=e.apply(i,t);return zt(n)?n:i}}function je(e,t,i,n){function r(){for(var t=-1,s=arguments.length,c=-1,u=n.length,l=Array(u+s),d=this&&this!==Tn&&this instanceof r?o:e;++c<u;)l[c]=n[c];for(;s--;)l[c++]=arguments[++t];return d.apply(a?i:this,l)}if("function"!=typeof e)throw new TypeError(bi);var a=t&Di,o=ze(e);return r}function He(e,t,i,n,r,a){var o=-1,s=r&Ci,c=r&Ni,u=e.length,l=t.length;if(u!=l&&!(s&&l>u))return!1;for(var d=!0;++o<u;){var f,p=e[o],g=t[o];if(f!==Ti){if(f)continue;d=!1;break}if(c){if(!De(t,(function(e){return p===e||i(p,e,n,r,a)}))){d=!1;break}}else if(p!==g&&!i(p,g,n,r,a)){d=!1;break}}return d}function Ke(e,t,i,n,r,a,o){switch(i){case xi:case Fi:return+e==+t;case Mi:return e.name==t.name&&e.message==t.message;case zi:return e!=+e?t!=+t:e==+t;case Hi:case Yi:return e==t+""}return!1}function Ye(e,t,i,n,r,a){var o=r&Ci,s=oi(e),c=s.length,u=oi(t),l=u.length;if(c!=l&&!o)return!1;for(var d=c;d--;){var f=s[d];if(!(o?f in t:Rn.call(t,f)))return!1}for(var p=!0,g=o;++d<c;){f=s[d];var h,_=e[f],v=t[f];if(!(h===Ti?_===v||i(_,v,n,r,a):h)){p=!1;break}g||(g="constructor"==f)}if(p&&!g){var m=e.constructor,E=t.constructor;m!=E&&"constructor"in e&&"constructor"in t&&!("function"==typeof m&&m instanceof m&&"function"==typeof E&&E instanceof E)&&(p=!1)}return p}function qe(e,t){var i=e[t];return Kt(i)?i:Ti}function We(e){return Nn.call(e)}function Xe(e){var t=e.length,i=e.constructor(t);return t&&"string"==typeof e[0]&&Rn.call(e,"index")&&(i.index=e.index,i.input=e.input),i}function Qe(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mn(e))}function $e(e,t,i){var n=e.constructor;switch(t){case Xi:return Ce(e);case xi:case Fi:return new n(+e);case Qi:case $i:case Ji:case Zi:case en:case tn:case nn:case rn:case an:return xe(e,i);case Bi:return Le(e);case zi:case Yi:return new n(e);case Hi:return Pe(e);case Ki:return Ve(e);case qi:return ke(e)}}function Je(e){var t=e?e.length:Ti;return Bt(t)&&(dr(e)||Qt(e)||Lt(e))?g(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,i="function"==typeof t&&t.prototype||wn;return e===i}function tt(e){var t=new R(e.e,e.l);return t.u=Re(e.u),t}function it(e){return ue(e,Boolean)}function nt(e,t){return e&&e.length?d(e,_e(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Li):[]}function ot(e){return e?e[0]:Ti}function st(e,t,i){var n=e?e.length:0;i="number"==typeof i?i<0?Kn(n+i,0):i:0;for(var r=(i||0)-1,a=t===t;++r<n;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ct(e){var t=e?e.length:0;return t?e[t-1]:Ti}function ut(e,t,i){var n=e?e.length:0;return t=null==t?0:+t,i=i===Ti?n:+i,n?be(e,t,i):[]}function lt(e){var t=b(e);return t.l=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function pt(){return Oe(this.e,this.u)}function gt(e,t,i){return t=i?Ti:t,ce(e,_e(t))}function ht(e,t){return ue(e,_e(t))}function _t(e,t){return l(e,_e(t),tr)}function vt(e,t){return tr(e,ne(t))}function mt(e,t,i,n){e=Pt(e)?e:fi(e),i=i&&!n?pr(i):0;var r=e.length;return i<0&&(i=Kn(r+i,0)),Qt(e)?i<=r&&e.indexOf(t,i)>-1:!!r&&f(e,t,i)>-1}function Et(e,t){return Ee(e,_e(t))}function It(e,t,i){return p(e,_e(t),i,arguments.length<3,tr)}function yt(e){return null==e?0:(e=Pt(e)?e:oi(e),e.length)}function St(e,t,i){return t=i?Ti:t,De(e,_e(t))}function Tt(e,t){var i=0;return t=_e(t),Ee(Ee(e,(function(e,n,r){return{value:e,index:i++,criteria:t(e,n,r)}})).sort((function(e,t){return m(e.criteria,t.criteria)||e.index-t.index})),we("value"))}function At(e,t){var i;if("function"!=typeof t)throw new TypeError(bi);return e=pr(e),function(){return--e>0&&(i=t.apply(this,arguments)),e<=1&&(t=Ti),i}}function wt(e){if("function"!=typeof e)throw new TypeError(bi);return function(){return!e.apply(this,arguments)}}function bt(e){return At(2,e)}function Rt(e,t){if("function"!=typeof e)throw new TypeError(bi);return t=Kn(t===Ti?e.length-1:pr(t),0),function(){for(var i=arguments,n=-1,r=Kn(i.length-t,0),a=Array(r);++n<r;)a[n]=i[t+n];var o=Array(t+1);for(n=-1;++n<t;)o[n]=i[n];return o[t]=a,e.apply(this,o)}}function Dt(e){return zt(e)?dr(e)?Re(e):nr(e,oi(e)):e}function Ot(e){return re(e,!0,!0)}function Nt(e,t){return e===t||e!==e&&t!==t}function Ct(e,t){return e>t}function Lt(e){return Vt(e)&&Rn.call(e,"callee")&&(!Bn.call(e,"callee")||Nn.call(e)==Vi)}function Pt(e){return null!=e&&Bt(rr(e))&&!Gt(e)}function Vt(e){return jt(e)&&Pt(e)}function kt(e){return e===!0||e===!1||jt(e)&&Nn.call(e)==xi}function xt(e){return jt(e)&&Nn.call(e)==Fi}function Ft(e){if(Pt(e)&&(dr(e)||Qt(e)||Gt(e.splice)||Lt(e)))return!e.length;for(var t in e)if(Rn.call(e,t))return!1;return!0}function Mt(e,t){return ge(e,t)}function Ut(e){return"number"==typeof e&&jn(e)}function Gt(e){var t=zt(e)?Nn.call(e):"";return t==Ui||t==Gi}function Bt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Pi}function zt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function jt(e){return!!e&&"object"==typeof e}function Ht(e){return qt(e)&&e!=+e}function Kt(e){return null!=e&&(Gt(e)?Ln.test(bn.call(e)):jt(e)&&(y(e)?Ln:ln).test(e))}function Yt(e){return null===e}function qt(e){return"number"==typeof e||jt(e)&&Nn.call(e)==zi}function Wt(e){if(!jt(e)||Nn.call(e)!=ji||y(e))return!1;var t=Mn(e);if(null===t)return!0;var i=t.constructor;return"function"==typeof i&&i instanceof i&&bn.call(i)==On}function Xt(e){return zt(e)&&Nn.call(e)==Hi}function Qt(e){return"string"==typeof e||!dr(e)&&jt(e)&&Nn.call(e)==Yi}function $t(e){return jt(e)&&Bt(e.length)&&!!fn[Nn.call(e)]}function Jt(e){return e===Ti}function Zt(e,t){return e<t}function ei(e){return Pt(e)?e.length?Re(e):[]:fi(e)}function ti(e){return nr(e,si(e))}function ii(e){return"string"==typeof e?e:null==e?"":e+""}function ni(e,t){var i=ae(e);return t?hr(i,t):i}function ri(e,t){return e&&fe(e,ne(t))}function ai(e,t){return null!=e&&Rn.call(e,t)}function oi(e){var t=et(e);if(!t&&!Pt(e))return ve(e);var i=Je(e),n=!!i,r=i||[],a=r.length;for(var o in e)!Rn.call(e,o)||n&&("length"==o||S(o,a))||t&&"constructor"==o||r.push(o);return r}function si(e){for(var t=-1,i=et(e),n=me(e),r=n.length,a=Je(e),o=!!a,s=a||[],c=s.length;++t<r;){var u=n[t];o&&("length"==u||S(u,c))||"constructor"==u&&(i||!Rn.call(e,u))||s.push(u)}return s}function ci(e,t){var i={};return t=_e(t,3),fe(e,(function(e,n,r){i[n]=t(e,n,r)})),i}function ui(e,t){return t=_e(t),Ae(e,(function(e,i){return!t(e,i)}))}function li(e,t){return null==e?{}:Ae(e,_e(t))}function di(e,t,i){var n=null==e?Ti:e[t];return n===Ti&&(n=i),Gt(n)?n.call(e):n}function fi(e){return e?_(e,oi(e)):[]}function pi(e){return e=ii(e),e&&sn.test(e)?e.replace(on,E):e}function gi(e){return function(){return e}}function hi(e){return e}function _i(e){return Ie(hr({},e))}function vi(e,t,i){var n=oi(t),r=pe(t,n);null!=i||zt(t)&&(r.length||!n.length)||(i=t,t=e,e=this,r=pe(t,oi(t)));var a=!(zt(i)&&"chain"in i)||i.chain,o=Gt(e);return tr(r,(function(i){var n=t[i];e[i]=n,o&&(e.prototype[i]=function(){var t=this.l;if(a||t){var i=e(this.e),r=i.u=Re(this.u);return r.push({func:n,args:arguments,thisArg:e}),i.l=t,i}return n.apply(e,c([this.value()],arguments))})})),e}function mi(){return Tn._===this&&(Tn._=Cn),this}function Ei(){}function Ii(e){var t=++Dn;return ii(e)+t}function yi(e){return e&&e.length?u(e,hi,Ct):Ti}function Si(e){return e&&e.length?u(e,hi,Zt):Ti}var Ti,Ai="4.6.1",wi=200,bi="Expected a function",Ri="__lodash_hash_undefined__",Di=1,Oi=32,Ni=1,Ci=2,Li=1/0,Pi=9007199254740991,Vi="[object Arguments]",ki="[object Array]",xi="[object Boolean]",Fi="[object Date]",Mi="[object Error]",Ui="[object Function]",Gi="[object GeneratorFunction]",Bi="[object Map]",zi="[object Number]",ji="[object Object]",Hi="[object RegExp]",Ki="[object Set]",Yi="[object String]",qi="[object Symbol]",Wi="[object WeakMap]",Xi="[object ArrayBuffer]",Qi="[object Float32Array]",$i="[object Float64Array]",Ji="[object Int8Array]",Zi="[object Int16Array]",en="[object Int32Array]",tn="[object Uint8Array]",nn="[object Uint8ClampedArray]",rn="[object Uint16Array]",an="[object Uint32Array]",on=/[&<>"'`]/g,sn=RegExp(on.source),cn=/[\\^$.*+?()[\]{}|]/g,un=/\w*$/,ln=/^\[object .+?Constructor\]$/,dn=/^(?:0|[1-9]\d*)$/,fn={};fn[Qi]=fn[$i]=fn[Ji]=fn[Zi]=fn[en]=fn[tn]=fn[nn]=fn[rn]=fn[an]=!0,fn[Vi]=fn[ki]=fn[Xi]=fn[xi]=fn[Fi]=fn[Mi]=fn[Ui]=fn[Bi]=fn[zi]=fn[ji]=fn[Hi]=fn[Ki]=fn[Yi]=fn[Wi]=!1;var pn={};pn[Vi]=pn[ki]=pn[Xi]=pn[xi]=pn[Fi]=pn[Qi]=pn[$i]=pn[Ji]=pn[Zi]=pn[en]=pn[Bi]=pn[zi]=pn[ji]=pn[Hi]=pn[Ki]=pn[Yi]=pn[qi]=pn[tn]=pn[nn]=pn[rn]=pn[an]=!0,pn[Mi]=pn[Ui]=pn[Wi]=!1;var gn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},hn={"function":!0,object:!0},_n=hn[typeof t]&&t&&!t.nodeType?t:Ti,vn=hn[typeof e]&&e&&!e.nodeType?e:Ti,mn=vn&&vn.exports===_n?_n:Ti,En=v(_n&&vn&&"object"==typeof i&&i),In=v(hn[typeof self]&&self),yn=v(hn[typeof window]&&window),Sn=v(hn[typeof this]&&this),Tn=En||yn!==(Sn&&Sn.window)&&yn||In||Sn||Function("return this")(),An=Array.prototype,wn=Object.prototype,bn=Function.prototype.toString,Rn=wn.hasOwnProperty,Dn=0,On=bn.call(Object),Nn=wn.toString,Cn=Tn._,Ln=RegExp("^"+bn.call(Rn).replace(cn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Pn=mn?Ti:Ti,Vn=Tn.Reflect,kn=Tn.Symbol,xn=Tn.Uint8Array,Fn=Vn?Vn.enumerate:Ti,Mn=Object.getPrototypeOf,Un=Object.getOwnPropertySymbols,Gn=Object.create,Bn=wn.propertyIsEnumerable,zn=An.splice,jn=Tn.isFinite,Hn=Object.keys,Kn=Math.max,Yn=qe(Tn,"Map"),qn=qe(Tn,"Set"),Wn=qe(Tn,"WeakMap"),Xn=qe(Object,"create"),Qn=Yn?bn.call(Yn):"",$n=qn?bn.call(qn):"",Jn=Wn?bn.call(Wn):"",Zn=kn?kn.prototype:Ti,er=Zn?Zn.valueOf:Ti,tr=Ge(fe),ir=Be();Fn&&!Bn.call({valueOf:1},"valueOf")&&(me=function(e){return T(Fn(e))});var nr=Fe,rr=we("length"),ar=Un||function(){return[]};(Yn&&We(new Yn)!=Bi||qn&&We(new qn)!=Ki||Wn&&We(new Wn)!=Wi)&&(We=function(e){var t=Nn.call(e),i=t==ji?e.constructor:null,n="function"==typeof i?bn.call(i):"";if(n)switch(n){case Qn:return Bi;case $n:return Ki;case Jn:return Wi}return t});var or=Rt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Rt((function(e,t,i){return je(e,Di|Oi,t,i)})),cr=Rt((function(e,t){return oe(e,1,t)})),ur=Rt((function(e,t,i){return oe(e,gr(t)||0,i)})),lr=Rt((function(e,t){return je(e,Oi,Ti,t)})),dr=Array.isArray,fr=Pn?function(e){return e instanceof Pn}:gi(!1),pr=Number,gr=Number,hr=Ue((function(e,t){nr(t,oi(t),e)})),_r=Ue((function(e,t){nr(t,si(t),e)})),vr=Ue((function(e,t,i,n){Fe(t,si(t),e,n)})),mr=Rt((function(e){return e.push(Ti,Z),vr.apply(Ti,e)})),Er=Ue((function(e,t,i){ye(e,t,i)})),Ir=Rt((function(e,t){return null==e?{}:(t=Ee(le(t,1),String),Te(e,se(si(e),t)))})),yr=Rt((function(e,t){return null==e?{}:Te(e,le(t,1))})),Sr=_e;R.prototype=ae(b.prototype),R.prototype.constructor=R,D.prototype=Xn?Xn(null):wn,P.prototype.clear=V,P.prototype["delete"]=k,P.prototype.get=x,P.prototype.has=F,P.prototype.set=M,U.prototype.push=B,z.prototype.clear=j,z.prototype["delete"]=H,z.prototype.get=K,z.prototype.has=Y,z.prototype.set=q,b.assign=hr,b.assignIn=_r,b.before=At,b.bind=sr,b.chain=lt,b.compact=it,b.concat=or,b.create=ni,b.defaults=mr,b.defer=cr,b.delay=ur,b.filter=ht,b.flatten=rt,b.flattenDeep=at,b.iteratee=Sr,b.keys=oi,b.map=Et,b.mapValues=ci,b.matches=_i,b.merge=Er,b.mixin=vi,b.negate=wt,b.omit=Ir,b.omitBy=ui,b.once=bt,b.partial=lr,b.pick=yr,b.pickBy=li,b.slice=ut,b.sortBy=Tt,b.tap=dt,b.thru=ft,b.toArray=ei,b.values=fi,b.extend=_r,vi(b,b),b.clone=Dt,b.cloneDeep=Ot,b.escape=pi,b.every=gt,b.find=_t,b.findIndex=nt,b.forEach=vt,b.forOwn=ri,b.has=ai,b.head=ot,b.identity=hi,b.includes=mt,b.indexOf=st,b.isArguments=Lt,b.isArray=dr,b.isBoolean=kt,b.isDate=xt,b.isEmpty=Ft,b.isEqual=Mt,b.isFinite=Ut,b.isFunction=Gt,b.isNaN=Ht,b.isNull=Yt,b.isNumber=qt,b.isObject=zt,b.isRegExp=Xt,b.isString=Qt,b.isUndefined=Jt,b.last=ct,b.max=yi,b.min=Si,b.noConflict=mi,b.noop=Ei,b.reduce=It,b.result=di,b.size=yt,b.some=St,b.uniqueId=Ii,b.each=vt,b.first=ot,vi(b,(function(){var e={};return fe(b,(function(t,i){Rn.call(b.prototype,i)||(e[i]=t)})),e})(),{chain:!1}),b.VERSION=Ai,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:An)[e],i=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",n=/^(?:pop|join|replace|shift)$/.test(e);b.prototype[e]=function(){var e=arguments;return n&&!this.l?t.apply(this.value(),e):this[i]((function(i){return t.apply(i,e)}))}})),b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=pt,(yn||In||{})._=b,_n&&vn&&(mn&&((vn.exports=b)._=b),_n._=b)}).call(this)}).call(t,i(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,i){var n=i(7),r=i(9),a=i(12).Promise,o=i(16),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var i=s.getPromise(e);if(i)return i;var o,c,u=new a(function(e,t){o=e,c=t});return r.dispatch(n.REGISTER_ASYNC_DEFERRED,{source:e,promise:u,resolver:o,rejecter:c}),t&&t(),u},t.resolveRequest=function(e,t){r.dispatch(n.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(n.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,i){var n=i(8);e.exports=n({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,RESET_VIEW_STATES:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,
XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT:null,RECORD_VISITOR_ID_LOCATOR_USAGE:null,RECORD_VISITOR_ID_ERROR:null,RECORD_STICKY_BUCKETING_FEATURE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var i=function(e){var t,i={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(i[t]=t);return i};e.exports=i}),(function(e,t,i){var n=i(10);e.exports=n.create()}),(function(e,t,i){function n(e){e=e||{},this.f={},this.g={},this.I=0,this.S=[],this.T=[]}function r(e,t){return function(){var i=e.indexOf(t);i!==-1&&e.splice(i,1)}}var a=i(2),o=i(11);n.prototype.registerStores=function(e){a.forOwn(e,a.bind((function(e,t){this.f[t]=new o(t,this,e)}),this))},n.prototype.getStore=function(e){return this.f[e]},n.prototype.dispatch=function(e,t){this.dispatchId++,a.each(this.S,a.bind((function(i){i.call(this,e,t)}),this)),a.forOwn(this.f,(function(i){i.A(e,t)})),a.each(this.T,a.bind((function(i){i.call(this,e,t)}),this)),a.forOwn(this.f,a.bind((function(e,t){e.hasChanges()&&this.g[t]&&(e.resetChange(),a.each(this.g[t],(function(t){t(e)})))}),this))},n.prototype.reset=function(){this.g={},a.forOwn(this.f,(function(e,t){e.w()}))},n.prototype.getState=function(){var e={};return a.forOwn(this.f,(function(t,i){e[i]=t.b()})),e},n.prototype.onPreAction=function(e){var t=this.S;return t.push(e),r(t,e)},n.prototype.onPostAction=function(e){var t=this.T;return t.push(e),r(t,e)},n.prototype.R=function(e,t){this.g[e]||(this.g[e]=[]),this.g[e].push(t);var i=this.g[e];return r(i,t)},e.exports={create:function(e){return new n(e)}}}),(function(e,t,i){function n(e,t,i){this.D=e,this.O=t,this.N=0,this.C=!1,this.L={},r.extend(this,i),this.P={},this.initialize&&this.initialize()}var r=i(2);n.prototype.A=function(e,t){var i=this.L[e];i&&"function"==typeof i&&i.call(this,t,e)},n.prototype.b=function(){return r.cloneDeep(this.P)},n.prototype.on=function(e,t){this.L[e]=r.bind(t,this)},n.prototype.observe=function(e){return this.O.R(this.D,e)},n.prototype.emitChange=function(){this.C=!0,this.N++},n.prototype.hasChanges=function(){return this.C},n.prototype.resetChange=function(){this.C=!1},n.prototype.getStateId=function(){return this.N},n.prototype.w=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=n}),(function(e,t,i){e.exports=i(13)}),(function(e,t,i){(function(t,n){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,i){e.exports=i()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){Q=e}function s(){return function(){return t.nextTick(f)}}function c(){return"undefined"!=typeof W?function(){W(f)}:d()}function u(){var e=0,t=new Z(f),i=document.createTextNode("");return t.observe(i,{characterData:!0}),function(){i.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<q;e+=2){var t=ie[e],i=ie[e+1];t(i),ie[e]=void 0,ie[e+1]=void 0}q=0}function p(){try{var e=i(15);return W=e.runOnLoop||e.runOnContext,c()}catch(e){return d()}}function g(e,t){var i=arguments,n=this,r=new this.constructor(_);void 0===r[re]&&k(r);var a=n._state;return a?!(function(){var e=i[a-1];Q((function(){return L(a,r,e,n._result)}))})():D(n,r,e,t),r}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var i=new t(_);return A(i,e),i}function _(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function m(){return new TypeError("A promises callback cannot return that same promise.")}function E(e){try{return e.then}catch(e){return ce.error=e,ce}}function I(e,t,i,n){try{e.call(t,i,n)}catch(e){return e}}function y(e,t,i){Q((function(e){var n=!1,r=I(i,t,(function(i){n||(n=!0,t!==i?A(e,i):b(e,i))}),(function(t){n||(n=!0,R(e,t))}),"Settle: "+(e._label||" unknown promise"));!n&&r&&(n=!0,R(e,r))}),e)}function S(e,t){t._state===oe?b(e,t._result):t._state===se?R(e,t._result):D(t,void 0,(function(t){return A(e,t)}),(function(t){return R(e,t)}))}function T(e,t,i){t.constructor===e.constructor&&i===g&&t.constructor.resolve===h?S(e,t):i===ce?(R(e,ce.error),ce.error=null):void 0===i?b(e,t):r(i)?y(e,t,i):b(e,t)}function A(t,i){t===i?R(t,v()):e(i)?T(t,i,E(i)):b(t,i)}function w(e){e._onerror&&e._onerror(e._result),O(e)}function b(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&Q(O,e))}function R(e,t){e._state===ae&&(e._state=se,e._result=t,Q(w,e))}function D(e,t,i,n){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=i,r[a+se]=n,0===a&&e._state&&Q(O,e)}function O(e){var t=e._subscribers,i=e._state;if(0!==t.length){for(var n=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)n=t[o],r=t[o+i],n?L(i,n,r,a):r(a);e._subscribers.length=0}}function N(){this.error=null}function C(e,t){try{return e(t)}catch(e){return ue.error=e,ue}}function L(e,t,i,n){var a=r(i),o=void 0,s=void 0,c=void 0,u=void 0;if(a){if(o=C(i,n),o===ue?(u=!0,s=o.error,o.error=null):c=!0,t===o)return void R(t,m())}else o=n,c=!0;t._state!==ae||(a&&c?A(t,o):u?R(t,s):e===oe?b(t,o):e===se&&R(t,o))}function P(e,t){try{t((function(t){A(e,t)}),(function(t){R(e,t)}))}catch(t){R(e,t)}}function V(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function x(e,t){this._instanceConstructor=e,this.promise=new e(_),this.promise[re]||k(this.promise),Y(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?b(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&b(this.promise,this._result))):R(this.promise,F())}function F(){return new Error("Array Methods must be provided an Array")}function M(e){return new x(this,e).promise}function U(e){var t=this;return new t(Y(e)?function(i,n){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(i,n)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function G(e){var t=this,i=new t(_);return R(i,e),i}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function z(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function j(e){this[re]=V(),this._result=this._state=void 0,this._subscribers=[],_!==e&&("function"!=typeof e&&B(),this instanceof j?P(this,e):z())}function H(){var e=void 0;if("undefined"!=typeof n)e=n;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var i=null;try{i=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===i&&!t.cast)return}e.Promise=j}var K=void 0;K=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var Y=K,q=0,W=void 0,X=void 0,Q=function(e,t){ie[q]=e,ie[q+1]=t,q+=2,2===q&&(X?X(f):ne())},$="undefined"!=typeof window?window:void 0,J=$||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ie=new Array(1e3),ne=void 0;ne=ee?s():Z?u():te?l():void 0===$?p():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ce=new N,ue=new N,le=0;return x.prototype._enumerate=function(){for(var e=this.length,t=this._input,i=0;this._state===ae&&i<e;i++)this._eachEntry(t[i],i)},x.prototype._eachEntry=function(e,t){var i=this._instanceConstructor,n=i.resolve;if(n===h){var r=E(e);if(r===g&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(i===j){var a=new i(_);T(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new i(function(t){return t(e)}),t)}else this._willSettleAt(n(e),t)},x.prototype._settledAt=function(e,t,i){var n=this.promise;n._state===ae&&(this._remaining--,e===se?R(n,i):this._result[t]=i),0===this._remaining&&b(n,this._result)},x.prototype._willSettleAt=function(e,t){var i=this;D(e,void 0,(function(e){return i._settledAt(oe,t,e)}),(function(e){return i._settledAt(se,t,e)}))},j.all=M,j.race=U,j.resolve=h,j.reject=G,j._setScheduler=a,j._setAsap=o,j._asap=Q,j.prototype={constructor:j,then:g,"catch":function(e){return this.then(null,e)}},j.polyfill=H,j.Promise=j,j}))}).call(t,i(14),(function(){return this})())}),(function(e,t){function i(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===i||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===n||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){h&&p&&(h=!1,p.length?g=p.concat(g):_=-1,g.length&&s())}function s(){if(!h){var e=r(o);h=!0;for(var t=g.length;t;){for(p=g,g=[];++_<t;)p&&p[_].run();_=-1,t=g.length}p=null,h=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function u(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:i}catch(e){l=i}try{d="function"==typeof clearTimeout?clearTimeout:n}catch(e){d=n}})();var p,g=[],h=!1,_=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];g.push(new c(e,t)),1!==g.length||h||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,i){var n=i(2),r=i(17),a=i(9),o=i(18),s=r.create(),c={action_data:i(21),async_request:i(27),audience_data:i(28),change_data:i(29),cleanup:i(30),client_metadata:i(31),cookie_options:i(33),event_data:i(34),event_emitter:i(35),dimension_data:i(36),directive:i(37),global:i(38),history:i(39),integration_settings:i(41),layer:i(42),layer_data:i(43),log:i(45),observed_redirect:i(46),pending_events:i(47),performance:i(48),plugins:i(49),provider_status:i(50),pending_redirect:i(51),rum:i(52),sandbox:i(53),session:i(54),tracker_optimizely:i(55),ua_data:i(56),view:i(57),view_data:i(58),visitor:i(59),visitor_attribute_entity:i(60),visitor_events:i(61),visitor_events_manager:i(66),visitor_id:i(67),visitor_bucketing:i(68),xdomain:i(69)};c["group_data"]=i(70),a.registerStores(c),n.forOwn(c,(function(e,t){s.register("stores/"+t,a.getStore(t))})),s.register("core/plugins/matchers/key_value",o),e.exports=s}),(function(e,t,i){function n(){this.V={}}var r=i(2);n.prototype.register=function(e,t){if(1===arguments.length){var i=this;return void r.each(e,(function(e,t){i.register(t,e)}))}if(this.V[e])throw new Error("Module already registered for: "+e);this.V[e]=t},n.prototype.get=function(e){return this.V[e]},n.prototype.getModuleKeys=function(){var e=this.V;return r.keys(e)},n.prototype.evaluate=function(e){var t=e.length,i=e.slice(0,t-1),n=e[t-1];if("function"!=typeof n)throw new Error("Evaluate must take a function as last element in array");var a=r.map(i,r.bind(this.get,this));return n.apply(null,a)},n.prototype.reset=function(){this.V={}},e.exports={create:function(){return new n}}}),(function(e,t,i){var n=i(2),r=i(19).getFieldValue,a=i(20);e.exports=function(e,t){var i=r(e,t.name.split("."));return n.isArray(i)?n.some(i,n.partial(a.hasMatch,t.value,t.match)):a.hasMatch(t.value,t.match,i)}}),(function(e,t,i){var n=i(2);t.getFieldValue=function(e,t){n.isArray(t)||(t=[t]);for(var i=e,r=0;r<t.length;r++){var a=t[r];if(!n.isObject(i)||!i.hasOwnProperty(a))return;i=i[a]}return i},t.setFieldValue=function(e,t,i){if(!n.isArray(t)||n.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=e,a=0;a<t.length-1;a++){var o=t[a];n.isObject(r[o])||(r[o]={}),r=r[o]}r[t[t.length-1]]=i}}),(function(e,t,i){var n=i(2);t.hasMatch=function(e,t,i){var r=!n.isUndefined(i)&&null!==i,a=!n.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(i)===e;case"substring":return r&&String(i).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(i))}return!1}catch(e){}return!1;case"range":var c=e.split(":"),u=parseFloat(c[0]),l=parseFloat(c[1]),d=parseFloat(i);return d>=u&&d<=l;default:return!1}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(22),o=i(23);e.exports={initialize:function(){this.P={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.k),this.on(r.ACTION_EXECUTED,this.F),this.on(r.SET_CHANGE_APPLIER,this.M),this.on(r.REMOVE_ACTION_STATE,this.U)},k:function(e){var t=this;n.isEmpty(e.data.layers)||(n.each(e.data.layers,(function(e){var i;if(e.changes){var r="layerId:"+e.id;i={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(i),t.P.actions[r]=i}n.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;i={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(i),t.P.actions[o]=i}n.each(r.variations,(function(o){n.each(o.actions,(function(n){var s=n.pageId||n.viewId,c=r.id+":"+o.id+":"+s;i={id:c,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:n.changes,type:"variation"},a.deepFreeze(i),t.P.actions[c]=i}))}))}))})),this.emitChange())},F:function(e){var t=e.actionId;n.isUndefined(t)||this.P.actionState[t]||(this.P.actionState[t]={})},M:function(e){var t=e.actionId,i=e.changeId;return this.P.actionState[t]?void(this.P.actionState[t][i]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},U:function(e){delete this.P.actionState[e.actionId]},get:function(e){return a.safeReference(this.P.actions[e])},getActionState:function(e){return a.safeReference(this.P.actionState[e])},getByChangeId:function(e){return n.find(this.P.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return n.map(n.filter(this.P.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var i=this.P.actionState[t];if(i)return i[e]},getExperimentVariationActions:function(e,t){return a.safeReference(n.filter(this.P.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(n.filter(this.P.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(n.filter(this.P.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(n.values(this.P.actions))}}}),(function(e,t,i){var n=i(2),r=!1;t.deepFreeze=function e(t){r&&n.isObject(t)&&!n.isFunction(t)&&(n.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!n.isObject(t)||n.isFunction(t)||Object.isFrozen(t)?t:n.isArray(t)?n.map(t,e):n.reduce(t,(function(t,i,n){return t[n]=e(i),t}),{}):n.cloneDeep(t)}}),(function(e,t,i){function n(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=i(2),a=i(7),o=i(24),s=i(25),c=i(9),u=i(26);n.prototype.G=function(){return!r.isNull(this.logLevel)},n.prototype.setLogLevel=function(e){var t=this.B(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},n.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},n.prototype.shouldLog=function(e){return this.G()&&this.logLevel>=e},n.prototype.matchesLogMessage=function(e,t){var i=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var n=r.some(t,(function(e){if(!r.isString(e))try{e=u.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,i)}));return n&&"GROUPSTART"===e&&this.logGroup++,n},n.prototype.storeLog=function(e,t){var i={logLevel:e,logMessage:t};c.dispatch(a.LOG,i)},n.prototype.flush=function(){var e=i(16),t=e.get("stores/log");this.logGroup=0;var n=t.getLogs();r.each(n,r.bind((function(e){this.z(e.logLevel,e.logMessage,!0)}),this))},n.prototype.z=function(e,t,i){var n,a=e;if(console)switch(e){case"GROUPSTART":n=console.groupCollapsed,a=s.LogLevel.DEBUG;break;case"GROUPEND":n=console.groupEnd,a=s.LogLevel.DEBUG;break;case s.LogLevel.ERROR:n=console.error;break;case s.LogLevel.WARN:n=console.warn;break;case s.LogLevel.DEBUG:n=console.debug;break;default:n=console.log}try{i||this.G()&&!this.shouldLog(a)||(r.isArray(t)&&r.isString(t[0])&&(t=this.j(t)),this.storeLog(e,t)),n&&this.shouldLog(a)&&this.matchesLogMessage(e,t)&&n.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},n.prototype.debug=function(){this.z(s.LogLevel.DEBUG,[].slice.call(arguments))},n.prototype.log=function(){this.z(s.LogLevel.INFO,[].slice.call(arguments))},n.prototype.logAlways=function(){var e=this.j([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(s.LogLevel.INFO,e)},n.prototype.warn=function(){this.z(s.LogLevel.WARN,[].slice.call(arguments))},n.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.z(s.LogLevel.ERROR,[this.H(),e]),this.z(s.LogLevel.INFO,[e.stack])):this.z(s.LogLevel.ERROR,t)},n.prototype.groupCollapsed=function(){this.z("GROUPSTART",[].slice.call(arguments))},n.prototype.groupEnd=function(){this.z("GROUPEND",[].slice.call(arguments))},n.prototype.j=function(e){var t=this.H().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},n.prototype.H=function(){return this.timebase?o.now()-this.timebase:0},n.prototype.B=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(s.LogLevel[e]))?s.LogLevel[e]:null},e.exports=new n}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,i){var n=i(2),r=i(8);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=n.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"},t.VisitorIdLocatorType={COOKIE:"cookie",JS_VARIABLE:"js",LOCALSTORAGE:"localStorage",QUERY:"query"}}),(function(e,t,i){function n(e){var t=[Array.prototype],i=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(i.push(e.toJSON),delete e.toJSON)}));var n,a;try{n=e()}catch(e){a=e}finally{r.each(i,(function(e,i){t[i].toJSON=e}))}if(a)throw a;return n}var r=i(2);t.stringify=function(){return n(r.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse}),(function(e,t,i){var n=i(7);e.exports={initialize:function(){this.P={},this.on(n.REGISTER_ASYNC_DEFERRED,this.K),this.on(n.RESOLVE_DEFERRED,this.Y),this.on(n.REJECT_DEFERRED,this.q)},getRequest:function(e){return this.P[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},K:function(e){this.P[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},Y:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},q:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,i){function n(e,t){return t||(t={}),e?(r.each(e,(function(e){if(!r.isString(e)){if(r.isObject(e)){var i=e.type,a=e.name||"_";t[i]||(t[i]={}),t[i][a]=!0}r.isArray(e)&&n(e,t)}})),t):t}var r=i(2),a=i(7),o=i(22);e.exports={initialize:function(){this.P={audiences:{},featuresNeeded:{}},this.on(a.DATA_LOADED,this.k)},k:function(e){r.isEmpty(e.data.audiences)||(r.each(e.data.audiences,r.bind((function(e){o.deepFreeze(e),r.merge(this.P.featuresNeeded,n(e.conditions)),this.P.audiences[e.id]=e}),this)),this.emitChange())},getAll:function(){return o.safeReference(r.values(this.P.audiences))},getFeaturesNeeded:function(e){return o.safeReference(this.P.featuresNeeded[e]||{})},getAudiencesMap:function(){return o.safeReference(this.P.audiences)},get:function(e){return o.safeReference(this.P.audiences[e])},getAudienceName:function(e){var t=r.find(r.values(this.P.audiences),{id:e});return t.name||"Aud "+e}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(22);e.exports={initialize:function(){this.P={},this.on(r.ADD_CHANGE,this.W),this.on(r.DATA_LOADED,this.k)},getChange:function(e){return this.P[e]},k:function(e){n.isEmpty(e.data.changes)||n.each(e.data.changes,n.bind(this.W,this))},W:function(e){a.deepFreeze(e),this.P[e.id]=e,this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(25);e.exports={initialize:function(){this.P={},n.each(a.Lifecycle,n.bind((function(e){this.P[e]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.X),this.on(r.CLEAR_CLEANUP_FN,this.Q)},getCleanupFns:function(e){return n.cloneDeep(this.P[e])},X:function(e){this.P[e.lifecycle].push(e.cleanupFn),this.emitChange()},Q:function(e){var t=this.P[e.lifecycle];if(e.cleanupFn){var i=t.indexOf(e.cleanupFn);i>-1&&(t.splice(i,1),this.emitChange())}else this.P[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,i){var n=i(7),r=i(32);e.exports={initialize:function(){this.P={name:r.NAME,version:r.VERSION},this.on(n.SET_CLIENT_NAME,this.$),this.on(n.SET_CLIENT_VERSION,this.J)},getClientName:function(){return this.P.name},getClientVersion:function(){return this.P.version},$:function(e){e&&(this.P.name=e),this.emitChange()},J:function(e){e&&(this.P.version=e),this.emitChange()}}}),(function(e,t,i){t.VERSION="0.166.0",t.NAME="js"}),(function(e,t,i){var n=i(7),r=15552e3,a=!0;e.exports={initialize:function(){this.P={currentDomain:null,defaultAgeSeconds:r,autoRefresh:a},this.on(n.SET_COOKIE_DOMAIN,this.Z),this.on(n.SET_COOKIE_AGE,this.ee),this.on(n.SET_COOKIE_AUTO_REFRESH,this.te)},getCurrentDomain:function(){return this.P.currentDomain},getDefaultAgeInSeconds:function(){return this.P.defaultAgeSeconds},getAutoRefresh:function(){return this.P.autoRefresh},Z:function(e){this.P.currentDomain=e,this.emitChange()},ee:function(e){this.P.defaultAgeSeconds=e,this.emitChange()},te:function(e){this.P.autoRefresh=e,this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.k)},getAll:function(){return a.safeReference(n.values(this.P))},getEventsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(n.find(n.values(this.P),{apiName:e}))},getByPageId:function(e){return a.safeReference(n.filter(this.P,{pageId:e}))},k:function(e){n.isEmpty(e.data.events)||(n.each(e.data.events,n.bind((function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,i){function n(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=i(2),a=i(7),o="|";e.exports={initialize:function(){this.P={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.ne),this.on(a.REMOVE_EMITTER_HANDLER,this.re)},getHandlers:function(e,t){var i=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(i,r.bind((function(e){var t=n(e),i=this.P.handlers[t];i&&(a=a.concat(i))}),this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},ne:function(e){var t=n(e.filter);this.P.handlers[t]||(this.P.handlers[t]=[]),this.P.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},re:function(e){var t=!1,i=e.token;r.forOwn(this.P.handlers,r.bind((function(e,n){var a=r.filter(e,(function(e){return e.token!==i}));a.length!==e.length&&(t=!0,this.P.handlers[n]=a)}),this)),t&&this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.k)},k:function(e){n.isEmpty(e.data.dimensions)||(n.each(e.data.dimensions,n.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(n.values(this.P))},getById:function(e){return a.safeReference(this.P[e])},getByApiName:function(e){return a.safeReference(n.find(n.values(this.P),{apiName:e}))}}}),(function(e,t,i){var n=i(2),r=i(7);e.exports={initialize:function(){this.P={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.ae)},getAll:function(){return n.cloneDeep(this.P)},conflictInObservingChanges:function(){return!1},isDisabled:function(){return this.P.disabled},isEditor:function(){return this.P.isEditor},clientHasAlreadyInitialized:function(){return this.P.alreadyInitialized},getForceAudienceIds:function(){return this.P.forceAudienceIds},getForceVariationIds:function(){return this.P.forceVariationIds},getPreviewLayerIds:function(){return this.P.previewLayerIds},getProjectToken:function(){return this.P.projectToken},getForceTracking:function(){return this.P.forceTracking},shouldActivate:function(){return!this.P.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.P.isPreview},shouldBootstrapDataForEditor:function(){return this.P.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.P.isPreview||this.P.isLegacyPreview||!this.getProjectToken()||this.P.isEditor)},shouldBailForDesktopApp:function(){return!this.P.isEditor&&this.P.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.P.isSlave&&!this.P.isEditor&&this.P.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return!1},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.P.shouldOptOut},shouldSendTrackingData:function(){return!this.P.trackingDisabled&&(!!this.P.forceTracking||!this.P.isPreview&&n.isEmpty(this.getForceVariationIds())&&n.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.P.isSlave},isRunningInDesktopApp:function(){return this.P.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.P.isRunningInV2Editor},ae:function(e){n.extend(this.P,e),this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(22);e.exports={initialize:function(){this.P={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.oe),this.on(r.ACTIVATE,this.se),this.on(r.RECORD_GLOBAL_DECISION,this.ce),this.on(r.SET_DOMCONTENTLOADED,this.ue)},getRevision:function(){return this.P.revision},getGlobalHoldbackThreshold:function(){return this.P.holdback},getProjectId:function(){return this.P.projectId},getSnippetId:function(){return this.P.snippetId},getAccountId:function(){return this.P.accountId},getNamespace:function(){return this.P.namespace},getActivationId:function(){return this.P.activationId},getActivationTimestamp:function(){return this.P.activationTimestamp},getAnonymizeIP:function(){return this.P.anonymizeIP},isGlobalHoldback:function(){return!!this.P.isGlobalHoldback},getListTargetingKeys:function(){return this.P.listTargetingKeys.slice()},getDCPServiceId:function(){return this.P.dcpServiceId},getDCPKeyfieldLocators:function(){return this.P.dcpKeyfieldLocators},getRecommenderServices:function(){return this.P.recommenderServices},getProjectJS:function(){return this.P.projectJS},getPlugins:function(){return this.P.plugins},getExperimental:function(){return a.safeReference(this.P.experimental)},domContentLoadedHasFired:function(){return this.P.domContentLoaded},se:function(e){this.P.activationId=e.activationId,this.P.activationTimestamp=e.activationTimestamp,this.P.isGlobalHoldback=null},ce:function(e){var t=e.isGlobalHoldback;if(null!==this.P.isGlobalHoldback&&this.P.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.P.isGlobalHoldback=t,this.emitChange()},oe:function(e){var t=n.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==n.keys(t).length){var i={listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]};n.extend(this.P,i,t),this.emitChange()}},ue:function(){this.P.domContentLoaded=!0,this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(40);e.exports={initialize:function(){this.P={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.le),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.de)},getOriginalPushState:function(){return this.P.originalPushState},getOriginalReplaceState:function(){return this.P.originalReplaceState},le:function(){this.P.originalPushState||(this.P.originalPushState=n.bind(a.getGlobal("history").pushState,a.getGlobal("history")))},de:function(){this.P.originalReplaceState||(this.P.originalReplaceState=n.bind(a.getGlobal("history").replaceState,a.getGlobal("history")))}}}),(function(e,t,i){var n=i(2),r=i(23);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.getGlobalByPath=function(e){for(var t=e.split("."),i=window;t.length;)try{i=i[t.shift()]}catch(t){throw r.error("Attempted to access nonexistent property. Path ",e),new Error("Attempted to access nonexistent property. Path ",e)}return i},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!n.isUndefined(window.MutationObserver)},t.alert=function(e){alert(e)},t.setTimeout=function(e,t){return setTimeout((function(){try{e()}catch(e){r.warn("Deferred function threw error:",e)}}),t)},t.setInterval=function(e,t){return setInterval((function(){try{e()}catch(e){r.warn("Polling function threw error:",e)}}),t)}}),(function(e,t,i){var n=i(2),r=i(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.k),this.on(r.SET_INTEGRATION_SETTINGS,this.fe)},k:function(e){n.isEmpty(e.data.integrationSettings)||(n.each(e.data.integrationSettings,n.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())},fe:function(e){var t=this.P[e.id];t?n.extend(t,e):this.P[e.id]=e},getAll:function(){return n.cloneDeep(n.values(this.P))},get:function(e){return n.cloneDeep(this.P[e])},getReference:function(e){return this.P[e]}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(23),o="*";e.exports={initialize:function(){this.P={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.pe),this.on(r.RECORD_LAYER_DECISION,this.ge),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this.he)},getLayerState:function(e,t){if(this.P[e]){var i=this.P[e];if(n.keys(i).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?n.cloneDeep(n.find(i,{pageId:t})):n.cloneDeep(i[o])}},getLayerStates:function(e){var t=[];for(var i in this.P)n.forEach(this.P[i],(function(i){(n.isUndefined(e)||i.namespace===e)&&t.push(n.cloneDeep(i))}));return t},getLayerStatesForAnalytics:function(){var e=[];for(var t in this.P)n.forEach(this.P[t],(function(t){e.push(n.pick(t,["layerId","decision","decisionEventId"]))}));return e},pe:function(e){e.merge||(this.P={}),n.each(e.layerStates,n.bind((function(e){var t=e.layerId;
e.pageId||(e.pageId=e.viewId);var i=e.pageId||o,r=this.P[t];if(n.isUndefined(r))this.P[t]={},this.P[t][i]=e;else{var a=r[i];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.P[t][i]=e)}}),this)),this.emitChange()},ge:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decision:e.decision,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null},i=this.P[e.layerId]||{};e.pageId?(delete i[o],i[e.pageId]=t):(i={},i[o]=t),this.P[e.layerId]=i,this.emitChange()},he:function(e){var t=e.layerId,i=e.pageId||o;return this.P[t]?this.P[t][i]?(this.P[t][i].decisionEventId=e.decisionId,void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",i):void a.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(22),o=i(44);e.exports={initialize:function(){this.P={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.k)},k:function(e){if(!n.isEmpty(e.data.layers)){var t=this;n.each(e.data.layers,(function(e){n.each(e.experiments,(function(i){e.pageIds||(e.pageIds=e.viewIds),i.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(i.groupId=e.groupId):i.campaignName=e.name,n.each(i.variations,(function(e){n.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.P.variations[e.id]=e})),t.P.experiments[i.id]=i})),a.deepFreeze(e),t.P.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(n.values(this.P.layers))},getCampaignsMap:function(){return a.safeReference(this.P.layers)},getExperimentsMap:function(){return a.safeReference(this.P.experiments)},getVariationsMap:function(){return a.safeReference(this.P.variations)},getCount:function(){return n.keys(this.P.layers).length},getAllByPageIds:function(e){return a.safeReference(n.filter(this.P.layers,(function(t){return n.some(e,n.partial(n.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.P.layers[e])},getLayerByExperimentId:function(e){var t=n.find(this.P.layers,(function(t){return n.find(t.experiments,{id:e})}));return a.safeReference(t)},getExperimentByVariationId:function(e){var t;return n.some(this.P.layers,(function(i){return n.some(i.experiments,(function(i){return n.find(i.variations,{id:e})&&(t=i),t})),t})),a.safeReference(t)}}}),(function(e,t){var i="single_experiment",n="multivariate";t.isSingleExperimentPolicy=function(e){return e===i||e===n}}),(function(e,t,i){var n=i(7);e.exports={initialize:function(){this.P={logs:[]},this.on(n.LOG,this._e)},getLogs:function(){return this.P.logs},_e:function(e){this.P.logs.push(e),this.emitChange()},b:function(){return this.P.logs.slice()}}}),(function(e,t,i){var n=i(7),r=i(22);e.exports={initialize:function(){this.P={data:null,hasTracked:null},this.on(n.LOAD_REDIRECT_DATA,this.ve),this.on(n.REGISTER_TRACKED_REDIRECT_DATA,this.me)},get:function(){return r.safeReference(this.P.data)},hasTracked:function(){return this.P.hasTracked},ve:function(e){r.deepFreeze(e),this.P.data=e,this.P.hasTracked=!1,this.emitChange()},me:function(){this.P.hasTracked=!0}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(26),o=1e3;e.exports={initialize:function(){this.P={},this.on(r.SET_PENDING_EVENT,this.Ee),this.on(r.REMOVE_PENDING_EVENT,this.Ie),this.on(r.LOAD_PENDING_EVENTS,this.ye)},getEvents:function(){return this.P},getEventsString:function(){return a.stringify(this.P)},Ee:function(e){n.keys(this.P).length>=o&&this.Se();var t=e.id,i=e.retryCount;this.P[t]&&this.P[t].retryCount===i||(this.P[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:i},this.emitChange())},Ie:function(e){delete this.P[e.id],this.emitChange()},ye:function(e){this.P=e.events,this.Se(),this.emitChange()},Se:function(){for(var e=n.sortBy(this.P,"timeStamp"),t=0;t<=e.length-o;t++)delete this.P[e[t].id];this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(25);e.exports={initialize:function(){this.P={},this.P[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Te)},Te:function(e){n.isUndefined(this.P[a.PerformanceData.performance_marks][e.name])&&(this.P[a.PerformanceData.performance_marks][e.name]=[]),this.P[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return n.mapValues(this.P[a.PerformanceData.performance_marks],(function(e){return n.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return n.reduce(e,n.bind((function(e,t){var i=this.P[a.PerformanceData.performance_marks][t];return i&&(e[t]=Math.round(n.reduce(i,(function(e,t){return e+t.duration}),0))),e}),this),{})}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(25),o=i(23);e.exports={initialize:function(){this.P=n.mapValues(a.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Ae)},Ae:function(e){var t=e.type,i=e.name,n=e.plugin;if(!t||!i)throw new Error("Missing information needed to register plugins: "+t+":"+i);if(!this.P[t])throw new Error("Invalid plugin type specified: "+t);this.P[t][i]=n,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.P[e])return this.P[e];throw new Error("Invalid plugin type: "+e)}return this.P},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var i=this.getAllPlugins(e);return i[t]||null}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(19);e.exports={initialize:function(){this.P={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.we)},getPendingAttributeValue:function(e){return e=n.isArray(e)?e.concat("pending"):[e,"pending"],a.getFieldValue(this.P,e)},we:function(e){a.setFieldValue(this.P,e.key,{pending:e.pending}),this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7);e.exports={initialize:function(){this.P={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.ve)},isExpectingRedirect:function(){return n.isString(this.P.layerId)},getLayerId:function(){return this.P.layerId},ve:function(e){this.isExpectingRedirect()||(this.P.layerId=e.layerId,this.emitChange())}}}),(function(e,t,i){var n=i(2),r=i(7);e.exports={initialize:function(){this.P={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.be),this.on(r.RECORD_API_USAGE,this.Re),this.on(r.INITIALIZE_CHANGE_METRICS,this.De),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.Oe),this.on(r.RECORD_AUDIENCE_USAGE,this.Ne),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.Ce),this.on(r.RECORD_CHANGE_OVERHEATED,this.Le),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.Pe),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.Ve),this.on(r.RECORD_INTEGRATION_USAGE,this.ke),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.xe),this.on(r.RECORD_LAYER_POLICY_USAGE,this.Fe),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.Me),this.on(r.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,this.Ue),this.on(r.RECORD_VISITOR_ID_LOCATOR_USAGE,this.Ge),this.on(r.RECORD_VISITOR_ID_ERROR,this.Be),this.on(r.RECORD_STICKY_BUCKETING_FEATURE,this.ze)},be:function(e){n.merge(this.P,e),this.emitChange()},Re:function(e){this.P.apis[e.methodName]||(this.P.apis[e.methodName]=0),this.P.apis[e.methodName]++,this.emitChange()},De:function(){n.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),n.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0)},Ce:function(e){n.isUndefined(this.P.data.extras.changeMacrotaskRate)&&(this.P.data.extras.changeMacrotaskRate=0),e.changeMacrotaskRate>this.P.data.extras.changeMacrotaskRate&&(this.P.data.extras.changeMacrotaskRate=e.changeMacrotaskRate),this.emitChange()},Le:function(){n.isUndefined(this.P.data.extras.numOverheatedChanges)&&(this.P.data.extras.numOverheatedChanges=0),this.P.data.extras.numOverheatedChanges++,this.emitChange()},Ve:function(e){this.P.DOMObservation[e.counterName]||(this.P.DOMObservation[e.counterName]=0),this.P.DOMObservation[e.counterName]++,this.emitChange()},je:function(e,t,i){n.isUndefined(this.P.featuresNeeded[e])&&(this.P.featuresNeeded[e]={});var r=this.P.featuresNeeded[e];n.each(t,(function(e){r[e]||(r[e]={}),r[e][i]||(r[e][i]=!0)}))},ke:function(e){this.je("integrations",e.integrations,e.layerId)},Pe:function(e){this.je("changeTypes",e.changeTypes,e.layerId)},Oe:function(e){this.je("activationTypes",[e.activationType],e.entityId),this.emitChange()},Me:function(e){this.je("viewFeatures",e.featuresUsed,e.entityId),this.emitChange()},xe:function(e){this.je("layerFeatures",[e.feature],e.entityId),this.emitChange()},Fe:function(e){this.je("policy",[e.policy],e.layerId),this.emitChange()},Ne:function(e){this.je("audiences",e.audienceTypes,e.layerId),this.emitChange()},Ue:function(e){this.P.data.extras.viewsInitiallyActivatedCount=e.viewsInitiallyActivatedCount,this.emitChange()},Ge:function(e){this.je("visitorIdLocatorType",[e.visitorIdLocatorType],e.entityId),this.emitChange()},Be:function(e){this.P.data.extras.errorCustomVisitorId=e.isError,this.emitChange()},ze:function(e){this.je("stickyBucketing",[e.feature],e.id)},getSampleRum:function(){return this.P.inRumSample},getRumId:function(){return this.P.id},getRumHost:function(){return this.P.RumHost},getApiData:function(){return this.P.apis},getDOMObservationData:function(){return this.P.DOMObservation},getRumData:function(){return n.cloneDeep(this.P.data)},getScriptSrc:function(){return this.P.src},getFeaturesNeededData:function(){var e=this.P.featuresNeeded,t={};return n.forOwn(e,(function(e,i){var r=n.keys(e);n.isEmpty(r)||(t[i]={}),n.forEach(r,(function(r){t[i][r]=n.keys(e[r]).length}))})),t}}}),(function(e,t,i){var n=i(7);e.exports={initialize:function(){this.P={initialized:!1,natives:{}},this.on(n.SANDBOXED_FUNCTIONS_ADDED,this.He)},He:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.P.natives=e.sandboxedFunctions,this.P.initialized=!0,this.emitChange()},getAll:function(){return this.P.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.P.natives[e]||null},isInitialized:function(){return this.P.initialized}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(24),o=i(5),s=18e5;e.exports={initialize:function(){this.P={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.Ke),this.on(r.LOAD_SESSION_STATE,this.Ye)},getState:function(){return n.cloneDeep(this.P)},getSessionId:function(){return this.P.sessionId},Ye:function(e){this.P.sessionId=e.sessionId,this.P.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},Ke:function(){var e=a.now(),t=this.P.lastSessionTimestamp;(!this.P.sessionId||e-t>s)&&(this.P.sessionId=o.generate()),this.P.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7);e.exports={initialize:function(){this.qe(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.We),this.on(r.REGISTER_PREVIOUS_BATCH,this.Xe),this.on(r.REGISTER_TRACKER_VISITOR,this.Qe),this.on(r.REGISTER_TRACKER_EVENT,this.$e),this.on(r.REGISTER_TRACKER_DECISION,this.Je),this.on(r.RESET_TRACKER_EVENTS,this.Ze),this.on(r.RESET_TRACKER_STORE,this.qe),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.et),this.on(r.SET_TRACKER_POLLING,this.tt),this.on(r.SET_TRACKER_BATCHING,this.it),this.on(r.SET_TRACKER_SEND_EVENTS,this.nt),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.rt),this.on(r.SET_TRACKER_DIRTY,this.at),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.ot)},getPersistableState:function(){return this.P.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.P.data,decisions:this.P.decisions,decisionEvents:this.P.decisionEvents,previousBatches:this.P.previousBatches}:{}:null},rt:function(e){n.isEmpty(this.P.data)||n.isEmpty(e.data)||(this.We(),this.P.previousBatches.push(this.getEventBatch())),this.P.data=e.data||{},this.P.decisions=e.decisions||[],this.P.decisionEvents=e.decisionEvents||[],n.isEmpty(this.P.previousBatches)||n.isEmpty(e.previousBatches)?this.P.previousBatches=e.previousBatches||[]:this.P.previousBatches=this.P.previousBatches.concat(e.previousBatches),this.emitChange()},at:function(e){this.P.isDirty=e,this.emitChange()},$e:function(e){var t=this.st();!n.isEmpty(t.snapshots)&&n.isEmpty(this.P.decisionEvents)||this.ct(),this.ut().events.push(e.event),this.P.decisions=e.decisions,this.at(!0)},Je:function(e){this.P.decisionEvents.push(e.decisionEvent),this.P.decisions=e.decisions,this.at(!0)},Qe:function(e){n.isEmpty(this.P.data)?this.P.data=e.data:this.We(),this.P.data.visitors.push(e.visitor),this.P.decisions=e.decisions,this.P.decisionEvents=[],this.at(!0)},Xe:function(e){this.P.previousBatches.push(e),this.at(!0)},qe:function(){this.P={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Ze:function(){var e=this.st();this.P.data.visitors=[e],e.snapshots=[],this.at(!0)},et:function(){this.P.previousBatches=[],this.at(!0)},tt:function(e){this.P.polling=e,this.emitChange()},it:function(e){this.P.shouldBatch=e,this.emitChange()},nt:function(e){this.P.canSend=e,this.emitChange()},getEventBatch:function(){return n.cloneDeep(this.P.data)},getPreviousBatches:function(){return n.cloneDeep(this.P.previousBatches)},dt:function(){return this.P.decisionEvents.slice()},ft:function(){this.P.decisionEvents=[]},pt:function(){return this.P.decisions.slice()},isPolling:function(){return this.P.polling},shouldBatch:function(){return this.P.shouldBatch},ut:function(){return n.last(this.st().snapshots)},st:function(){return n.last(this.P.data.visitors)},ct:function(){var e=this.dt(),t=this.st();t.snapshots.push({decisions:this.pt(),events:e}),this.ft(),this.at(!0)},We:function(){this.P.decisionEvents.length>0&&this.ct()},hasEventsToSend:function(){if(!n.isEmpty(this.P.decisionEvents))return!0;if(!n.isEmpty(this.P.data)){var e=n.some(this.P.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!n.isEmpty(this.P.previousBatches)},canSend:function(){return this.P.canSend},ot:function(e){var t=this.st();t&&(t.attributes=e.attributes)}}}),(function(e,t,i){var n=i(2),r=i(7);e.exports={initialize:function(){this.P={},this.on(r.SET_UA_DATA,this.k)},k:function(e){n.isEmpty(this.P)&&(this.P=e.data)},get:function(){return n.cloneDeep(this.P)}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(23),o=!1,s={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.P=n.cloneDeep(s),this.on(r.REGISTER_VIEWS,this.ht),this.on(r.SET_VIEW_ACTIVE_STATE,this._t),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.vt),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.mt),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this.Et),this.on(r.SET_GLOBAL_TAGS,this.It),this.on(r.RESET_VIEW_STATES,this.yt),this.on(r.SET_VIEW_BATCHING,this.it)},getAll:function(){var e={};for(var t in this.P.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.P.shouldBatch},getViewState:function(e){var t=n.cloneDeep(this.P.viewStates[e]),i=this.P.globalTags;return t.metadata=n.extend({},t.parsedMetadata,i,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=n.map(e,(function(e){return e.metadata})),i=[{}].concat(t);return n.extend.apply(n,i)},getActivationEventId:function(e){return this.P.viewStates[e]?this.P.viewStates[e].activationEventId:null},getActiveViewStates:function(){return n.reduce(this.P.viewStates,n.bind((function(e,t,i){return this.isViewActive(i)&&e.push(this.getViewState(i)),e}),this),[])},isViewActive:function(e){var t=this.P.viewStates[e];return t||a.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return n.cloneDeep(this.P.globalTags)},yt:function(){this.P.viewStates={},this.emitChange()},ht:function(e){n.each(e.views,n.bind((function(e){var t=e.id;o&&this.P.viewStates[t]||(this.P.viewStates[t]={id:t,isActive:n.isBoolean(e.isActive)?e.isActive:null,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}})}),this)),this.emitChange()},_t:function(e){var t=e.view.id;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);this.P.viewStates[t].isActive=e.isActive,e.isActive?this.P.viewStates[t].activatedTimestamp=e.timestamp:(this.P.viewStates[t].parsedMetadata={},this.P.viewStates[t].userSuppliedMetadata={}),this.emitChange()},vt:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);n.assign(this.P.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},mt:function(e){var t=e.pageId;if(!this.P.viewStates[t])throw new Error("No view exists with id "+t);n.assign(this.P.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},Et:function(e){var t=e.pageId;this.P.viewStates[t]&&(this.P.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},It:function(e){n.extend(this.P.globalTags,e),this.emitChange()},it:function(e){this.P.shouldBatch=e,this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(22);e.exports={initialize:function(){this.P={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.k)},getAll:function(){return a.safeReference(n.values(this.P.views))},getPagesMap:function(){return a.safeReference(this.P.views)},get:function(e){return a.safeReference(this.P.views[e])},getByApiName:function(e){return a.safeReference(this.P.apiNamesToViews[e])},apiNameToId:function(e){var t=this.P.apiNamesToViews[e];if(t)return t.id},idToApiName:function(e){var t=this.P.views[e];if(t)return t.apiName},getNumberOfPages:function(){return n.keys(this.P.views).length},getAllViewsForActivationType:function(e){return n.filter(this.P.views,{activationType:e})},k:function(e){n.isEmpty(e.data.views)||(n.each(e.data.views,n.bind((function(e){a.deepFreeze(e),this.P.views[e.id]=e,this.P.apiNamesToViews[e.apiName]=e}),this)),this.emitChange())}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(19);e.exports={initialize:function(){this.P={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.St),this.on(r.SET_VISITOR_ATTRIBUTES,this.Tt),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.At)},getVisitorProfile:function(){return this.P.profile},getVisitorProfileMetadata:function(){return this.P.metadata},getAttribute:function(e){var t=this.P.profile;return n.cloneDeep(a.getFieldValue(t,e))},getAttributeMetadata:function(e){return n.cloneDeep(this.P.metadata[e])},getVisitorIdFromAPI:function(){return this.P.visitorId},At:function(e){this.P.profile=e.profile,this.P.metadata=e.metadata,this.emitChange()},Tt:function(e){n.each(e.attributes,n.bind((function(e){var t=e.key;a.setFieldValue(this.P.profile,t,e.value),e.metadata&&n.forOwn(e.metadata,n.bind((function(e,i){a.setFieldValue(this.P.metadata,t.concat(i),e)}),this))}),this)),this.emitChange()},St:function(e){this.P.visitorId=e,this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(7);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.wt)},getCustomBehavioralAttributes:function(){return n.filter(this.P,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=n.values(this.P);if(e.datasourceId&&(t=n.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var i=this.P[e.attributeId];if(!i)throw new Error("Unrecognized attribute ID: "+e.attributeId);return i}if(e.attributeName){var r=n.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},wt:function(e){n.isEmpty(e.data.visitorAttributes)||(n.each(e.data.visitorAttributes,n.bind((function(e){this.P[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,i){var n=(i(2),i(7));i(62).Event;e.exports={initialize:function(){this.P={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(n.SET_VISITOR_EVENTS,this.k),this.on(n.SET_FOREIGN_VISITOR_EVENTS,this.bt),this.on(n.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.Rt)},getEvents:function(){return this.P.events},getForeignEvents:function(){return this.P.foreignEvents},getForeignEventQueues:function(){return this.P.foreignEventQueues},k:function(e){this.P.events=e,this.emitChange()},bt:function(e){this.P.foreignEvents[e.key]=e.value},Rt:function(e){this.P.foreignEventQueues[e.key]=e.value}}}),(function(e,t,i){function n(e,t,i,n,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(i)&&i.trim().length>0&&(this[o.FIELDS.CATEGORY]=i),n&&a.keys(n).length>0&&(this[o.FIELDS.OPTIONS]=n),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,i,n){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(i)||(this[o.FIELDS.SESSION_ID]=i),a.isUndefined(n)||(this[o.FIELDS.SESSION_INDEX]=n)}var a=i(2),o=i(63),s=i(19).getFieldValue,c=i(64);t.EventBase=n,n.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var i=this[o.FIELDS.OPTIONS]||{},n=a.filter(a.keys(i),(function(e){return i.hasOwnProperty(e)}));n=n.sort();for(var r=0;r<n.length;r++)t.push(e(n[r],i[n[r]]));return t.join("&")},n.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=c.hashToHex(c.toByteString(this.digest()),c.Seed.BEHAVIOR_EVENT),this.hash_)},n.prototype.setHash=function(e){this.hash_=e},n.prototype.reHash=function(){this.hash_=null,this.hash()},n.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},i=e[o.FIELDS.OPTIONS]||{},n=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(i),(function(e){return i.hasOwnProperty(e)}));if(n.length!==r.length)return!1;for(var s=0;s<n.length;s++){var c=n[s];if(!i.hasOwnProperty(c)||t[c]!==i[c])return!1}return!0},n.prototype.getValueOrDefault=function(e,t){var i=s(this,e);return a.isUndefined(i)?t:i},n.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var i={};i[o.FIELDS.TIME]=this[o.FIELDS.TIME],i[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID],i[o.FIELDS.SESSION_INDEX]=this[o.FIELDS.SESSION_INDEX];var n=s(i,e);return a.isUndefined(n)?this.eventBase.getValueOrDefault(e,t):n},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID||e===o.FIELDS.SESSION_INDEX?this[e]=t:this.eventBase.setFieldValue(e,t)};var u={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};r.prototype.readableEvent=function(){var e,t,i=function(e){return a.isString(e)?'"'+e+'"':e},n=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=u[o],t=n.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+i(t))}));var s=[];if(e=u[o.FIELDS.OPTIONS],t=n.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(i(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=n.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=i(new Date(t).toString())),!a.isUndefined(t)){var c="timestamp";r.push(c+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,i,n={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS,o.FIELDS.SESSION_INDEX],(function(e){t=u[e],i=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(i)||(n[t]=i)}));var s=u[o.FIELDS.OPTIONS],c=u[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&n[c]&&(n[s]=n[s]||{},n[s][c]=n[c],delete n[c]),i=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(i))if(e&&e.timeAsTimestamp){var l="timestamp";n[l]=new Date(i)}else{var d="time";n[d]=i}return n}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}}),(function(e,t,i){var n=i(65).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,i){return Math.floor(c(e,t)*i)},s=function(e,t){var i=n(e,t);return(i>>>16).toString(16)+(65535&i).toString(16)},c=function(e,t){var i=n(e,t);return(i>>>0)/a},u=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var i=t(255&e);return e>255&&(i=t(e>>>8&255)+i),e>65535&&(i=t(e>>>16)+i),i}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:c,toByteString:u}}),(function(e,t,i){!(function(){function t(e,t){for(var i,n=e.length,r=t^n,a=0;n>=4;)i=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16),i^=i>>>24,i=1540483477*(65535&i)+((1540483477*(i>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^i,n-=4,++a;switch(n){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function i(e,t){var i,n,r,a,o,s,c,u;for(i=3&e.length,n=e.length-i,r=t,o=3432918353,s=461845907,u=0;u<n;)c=255&e.charCodeAt(u)|(255&e.charCodeAt(++u))<<8|(255&e.charCodeAt(++u))<<16|(255&e.charCodeAt(++u))<<24,++u,c=(65535&c)*o+(((c>>>16)*o&65535)<<16)&4294967295,c=c<<15|c>>>17,c=(65535&c)*s+(((c>>>16)*s&65535)<<16)&4294967295,r^=c,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(c=0,i){case 3:c^=(255&e.charCodeAt(u+2))<<16;case 2:c^=(255&e.charCodeAt(u+1))<<8;case 1:c^=255&e.charCodeAt(u),c=(65535&c)*o+(((c>>>16)*o&65535)<<16)&4294967295,c=c<<15|c>>>17,c=(65535&c)*s+(((c>>>16)*s&65535)<<16)&4294967295,r^=c}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var n=i;n.v2=t,n.v3=i;e.exports=n})()}),(function(e,t,i){var n=i(7);e.exports={initialize:function(){this.P={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(n.UPDATE_BEHAVIOR_STORE,this.Dt)},getBaseMap:function(){return this.P.baseMap},getEventQueue:function(){return this.P.eventQueue},getLastEvent:function(){return this.P.lastEvent},getCleared:function(){return this.P.cleared},getInitialized:function(){return this.P.initialized},Dt:function(e){this.P[e.key]=e.value}}}),(function(e,t,i){var n=i(2),r=i(7);e.exports={initialize:function(){this.P={randomId:null,visitorIdLocator:null},this.on(r.SET_VISITOR_ID,this.k),this.on(r.DATA_LOADED,this.Ot)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.P.randomId},getVisitorIdLocator:function(){return this.P.visitorIdLocator},k:function(e){n.extend(this.P,e),this.emitChange()},Ot:function(e){n.isEmpty(e.data.visitorIdLocator)||(this.P.visitorIdLocator=e.data.visitorIdLocator,this.emitChange())}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(26);e.exports={initialize:function(){this.P={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.Nt),this.on(r.MERGE_VARIATION_ID_MAP,this.Ct),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.Lt),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.Pt)},getVariationIdMap:function(){return n.cloneDeep(this.P.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.P.variationIdMap)},Nt:function(e){var t=this.P.variationIdMap,i=t[e.layerId]||{};i[e.experimentId]!==e.variationId&&(i[e.experimentId]=e.variationId,this.P.variationIdMap[e.layerId]=i,this.emitChange())},Ct:function(e){var t=this.getVariationIdMap(),i=e.variationIdMap;n.each(t||{},(function(e,t){i[t]?n.assign(i[t],e):i[t]=e})),this.P.variationIdMap=i,this.emitChange()},getPreferredLayerMap:function(){return n.cloneDeep(this.P.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.P.preferredLayerMap)},getPreferredLayerId:function(e){return this.P.preferredLayerMap[e]},Lt:function(e){this.P.preferredLayerMap[e.groupId]!==e.layerId&&(this.P.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},Pt:function(e){var t=this.getPreferredLayerMap(),i=e.preferredLayerMap;n.assign(i,t),this.P.preferredLayerMap=i,this.emitChange()}}}),(function(e,t,i){var n=i(2),r=i(23),a=i(7),o=1e3;e.exports={initialize:function(){this.P={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(a.XDOMAIN_SET_DEFAULT_FRAME,this.Vt),this.on(a.XDOMAIN_ADD_FRAME,this.kt),this.on(a.XDOMAIN_SET_MESSAGE,this.xt),this.on(a.XDOMAIN_ADD_SUBSCRIBER,this.Ft),this.on(a.XDOMAIN_SET_CANONICAL_ORIGINS,this.Mt),this.on(a.XDOMAIN_SET_DISABLED,this.Ut)},getMessages:function(){return n.cloneDeep(this.P.messages)},getOffset:function(){return 0===this.P.messages.length?0:this.P.messages[0].data.id},getNextMessageId:function(){return this.P.messages.length+this.getOffset()},getMessageById:function(e){return this.P.messages[e-this.getOffset()]},getSubscribers:function(){return this.P.subscribers},getFrames:function(){return this.P.frames},getNextFrameId:function(){return this.P.frames.length},getDefaultFrame:function(){return this.P.defaultFrame},getCanonicalOrigins:function(){return n.cloneDeep(this.P.canonicalOrigins)},isDisabled:function(){return this.P.disabled},Vt:function(e){this.P.defaultFrame=e},kt:function(e){this.P.frames.push(e)},xt:function(e){for(this.P.messages[e.messageId-this.getOffset()]=e.message;this.P.messages.length>o;){var t=this.P.messages.shift();r.debug("XDomainStorage: Cleared old message: "+t.data.id)}},Ft:function(e){this.P.subscribers.push(e.subscriber)},Mt:function(e){this.P.canonicalOrigins=e.canonicalOrigins},Ut:function(e){this.P.disabled=e.disabled}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(22);e.exports={initialize:function(){this.P={},this.on(r.DATA_LOADED,this.k)},k:function(e){n.isEmpty(e.data.groups)||(n.each(e.data.groups,n.bind((function(e){a.deepFreeze(e),this.P[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(n.values(this.P))},getGroupsMap:function(){return a.safeReference(this.P)},get:function(e){return a.safeReference(this.P[e])}}}),(function(e,t,i){var n=i(72);t.initializeStore=n.initialize,t.addEvent=n.addEvent,t.getEvents=n.getEvents,t.getEventCount=n.getEventCount}),(function(e,t,i){function n(e){I.dispatch(v.SET_VISITOR_EVENTS,e)}function r(e){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function c(){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function u(){return O.getEvents()}function l(){return N.getBaseMap()}function d(){return N.getEventQueue()}function f(){return N.getLastEvent()}function p(){return N.getCleared()}function g(){return N.getInitialized()}function h(){var e=u().concat(d()),t=!1;return e.length>L&&(e=e.slice(-L),t=!0),n(e),a([]),t}var _=i(2),v=i(7),m=i(24),E=i(73),I=i(9),y=i(23),S=i(74),T=t,A=i(62).Event,w=i(63),b=i(62).EventBase,R=i(89),D=i(16),O=D.get("stores/visitor_events"),N=D.get("stores/visitor_events_manager"),C={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},L=1e3;t.initialize=function(e,t){
if(!g()){T.Gt(e,t);var i=u();i.length>0&&o(i[i.length-1]);var n=d();n.length>0&&o(n[n.length-1]),c()}},t.addEvent=function(e){y.debug("Behavior store: adding event",e);var t=T.Bt(e);o(t),a(d().concat(t)),R.reindexIfNecessary(f(),u(),d()),T.zt(d())},t.getEvents=function(){return d().length>0&&(h()&&R.sessionize(u()),T.jt(u()),T.zt(d())),u()},t.getEventCount=function(){return d().length+u().length},T.Gt=function(e,t){T.Ht(e,t)&&(T.jt(u()),T.zt(d())),R.sessionize(u())},T.Ht=function(e,t){if(0===e.length&&0===t.length)return n([]),a([]),!1;var i=!1,r=e[0]||t[0];return C.EVENTBASE in r?(n(T.Kt(e)),a(T.Kt(t))):(i=!0,n(T.Yt(e)),a(T.Yt(t))),d().length>0&&(h(),i=!0),n(T._updateBaseMapAndMaybeDedupe(u())),T._migrateEventBasesAndUpdateStore()&&(i=!0),i},T.Yt=function(e){for(var t=[],i=0;i<e.length;i++){var n=e[i],r=T.qt(n);t[i]=new A(r,n[w.FIELDS.TIME])}return t},T._migrateEventBasesAndUpdateStore=function(){var e=!1,t=T.Wt();return R.applyMigrations(t)&&(e=!0,r({}),n(T._updateBaseMapAndMaybeDedupe(u())),a(T._updateBaseMapAndMaybeDedupe(d()))),e},T.Xt=function(){return m.now()},T.Bt=function(e){var t,i=e.name,n=e.type||"default",r=e.category||E.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new b(i,n,r,a,t);o=T.Qt(o);var s=T.Xt(),c=new A(o,s,-1);return R.updateSessionId(f(),c),R.updateSessionIndex(f(),c),c},T._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=T.Qt(e[t].eventBase);return e},T.jt=function(e){var t=T.$t(e);S.persistBehaviorEvents(t)},T.zt=function(e){var t=T.$t(e);S.persistBehaviorEventQueue(t)},T.Jt=function(){p()||(n([]),a([]),T.jt(u()),T.zt(d()),r({}),o(null),s(!0))},T.Qt=function(e){var t=e.hash(),i=l(),n=i[t];if(_.isUndefined(n))return i[t]=[e],r(i),e;for(var a=0;a<n.length;a++)if(e.equals(n[a]))return n[a];return n.push(e),r(i),e},T.Wt=function(){var e=[],t=l();for(var i in t)t.hasOwnProperty(i)&&(e=e.concat(t[i]));return e},T.$t=function(e){for(var t=function(e){var t={};t[w.FIELDS.NAME]=e.getValueOrDefault([w.FIELDS.NAME]),t[w.FIELDS.TYPE]=e.getValueOrDefault([w.FIELDS.TYPE]);var i=e.getValueOrDefault([w.FIELDS.CATEGORY]);_.isUndefined(i)||(t[w.FIELDS.CATEGORY]=i);var n=e.getValueOrDefault([w.FIELDS.REVENUE]);_.isUndefined(n)||(t[w.FIELDS.REVENUE]=n);var r=e.getValueOrDefault([w.FIELDS.OPTIONS]);return _.isUndefined(r)||(t[w.FIELDS.OPTIONS]=r),t},i=C,n=[],r="_idx_",a=0;a<e.length;a++){var o,s,c=e[a],u=c.eventBase;if(u.hasOwnProperty(r)){o=n[u[r]];var l=c[w.FIELDS.TIME]-(o[i.TIMEBASE]||0);s={},s[i.DELTA]=l,s[i.INDEX]=a,o[i.TIMESTAMPS].push(s)}else o={},o[i.EVENTBASE]=t(c),o[i.HASH]=u.hash(),o[i.TIMEBASE]=c[w.FIELDS.TIME],s={},s[i.DELTA]=0,s[i.INDEX]=a,o[i.TIMESTAMPS]=[s],n.push(o),u[r]=n.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return n},T.qt=function(e,t){var i=new b(e[w.FIELDS.NAME],e[w.FIELDS.TYPE],e[w.FIELDS.CATEGORY],e[w.FIELDS.OPTIONS],e[w.FIELDS.REVENUE]);return _.isUndefined(t)||i.setHash(t),i},T.Kt=function(e){for(var t=C,i=[],n=0;n<e.length;n++)for(var r=e[n],a=T.qt(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],c=0;c<s.length;c++){var u=s[c],l=new A(a,o+u[t.DELTA]),d=u[t.INDEX];i[d]=l}return i},t.deserialize=function(e){return T.Kt(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(R.sessionSortPredicate),R.sessionize(t),t}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,i){function n(){return u(z.LAYER_MAP)||{}}function r(e,t){D.dispatch(O.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=$.getPreferredLayerMapString();p(z.LAYER_MAP,e,!0)}function o(e){D.dispatch(O.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function i(e,i){var n;t.attributionType&&(n=P.now()),D.dispatch(O.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:i,metadata:{lastModified:n}}]})}if(t.getter){var n=t.provides;if(R.isArray(n)||(n=[n]),!ee||!R.includes(["queryParams","url"],n[0])){var r=t.isSticky&&!R.isUndefined(F.getFieldValue(e,n));if(!r){var a;try{var o=V.evaluate(t.getter);R.isFunction(o)&&(o=o((function(){return F.getFieldValue(e,n)}),(function(e){i(n,e)}))),R.isUndefined(o)||(t.isAsync?(a=o.then((function(e){i(n,e)}),(function(e){U.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),D.dispatch(O.SET_VISITOR_ATTRIBUTE_PENDING,{key:n,pending:a})):i(n,o))}catch(e){U.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return a}}}}function c(){E(u(z.EVENTS)||[],u(z.EVENT_QUEUE)||[]);var e=f(z.LAYER_STATES);R.forEach(e,(function(e){e.item=R.map(e.item,d)})),I(l(e)),y(u(z.SESSION_STATE)||{}),A(u(z.VISITOR_PROFILE)||{});var i=u(z.TRACKER_OPTIMIZELY);i&&o(i),t.loadForeignData(),t.removeLegacySessionStateCookies()}function u(e){var t=g(e),i=M.getItem(t);return R.isString(i)&&(i=w(i)),i}function l(e){var t=[];return R.each(e,(function(e){R.each(e.item,(function(i){i.namespace=e.namespace,t.push(i)}))})),t}function d(e){var t;return t=e.layerId?e:{layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}function f(e){var t=Q.getBucketingId(),i=[],n=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(n);return R.each(M.keys(),(function(e){var n=e.match(r);if(n){var a={namespace:n[1],userId:t,item:w(M.getItem(e))};i.push(a)}})),i}function p(e,t,i){try{var n=g(e);i||(t=x.stringify(t));try{M.setItem(n,t)}catch(e){throw U.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}b.setItem(n,t)}catch(e){U.warn("Unable to persist visitor data:",e.message)}}function g(e){var i=Q.getBucketingId();if(!i)throw new Error("Visitor bucketingId not set");var n=t.getNamespace();if(!n)throw new Error("Namespace is not set");return[i,n,e].join("$$")}function h(e,i){if(!Q.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(v(e)){var n=t.getStorageKeyFromKey(e);if(R.includes(z,n)){var r=g(n);if(!(e.indexOf(r)<=0)&&(i=w(i)))if(n===z.EVENT_QUEUE)D.dispatch(O.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:C.deserialize(i)});else if(n===z.EVENTS)D.dispatch(O.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:C.deserialize(i)});else if(n===z.LAYER_STATES)D.dispatch(O.LOAD_PERSISTED_LAYER_STATES,{layerStates:R.map(i,d),merge:!0});else if(n===z.VARIATION_MAP)D.dispatch(O.MERGE_VARIATION_ID_MAP,{variationIdMap:i});else if(n===z.VISITOR_PROFILE){var a=["custom"],o=i;R.each(a,(function(e){var t=q.getPlugin(k.PluginTypes.visitorProfileProviders,e);if(t){if(o.profile&&o.metadata){var i=_(o,e,t.attributionType);if(!R.isEmpty(i)){var n=[];R.forOwn(i.data,(function(t,r){var a=i.metadata[r],o={key:[e,r],value:t,metadata:a};n.push(o)})),D.dispatch(O.SET_VISITOR_ATTRIBUTES,{attributes:n})}}}else U.debug("Attribute type",e,"not used by any audiences")}))}}}}function _(e,t,i){var n=J.getAttribute(t),r=J.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(R.isEmpty(n))return{data:a,metadata:o};var s={};return R.forOwn(a,(function(e,t){var n;r&&r[t]&&(n=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(i===k.AttributionTypes.FIRST_TOUCH&&n>=a||i===k.AttributionTypes.LAST_TOUCH&&a>=n||R.isUndefined(n)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function v(e){var t=e.split("$$")[0];return t.indexOf("://")>0}function m(){var e=J.getVisitorProfile(),t=J.getVisitorProfileMetadata(),i=q.getAllPlugins(k.PluginTypes.visitorProfileProviders);if(i){var n=R.reduce(i,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=R.omitBy(e,(function(e,t){var i=n[t];return i&&i.isTransient}))}return{profile:e,metadata:t}}function E(e,t){N.initializeStore(e,t)}function I(e){D.dispatch(O.LOAD_PERSISTED_LAYER_STATES,{layerStates:R.filter(e,(function(e){return!!e.decision}))})}function y(e){e=R.extend({lastSessionTimestamp:0,sessionId:null},e),D.dispatch(O.LOAD_SESSION_STATE,e)}function S(e){var t,i=e.name;switch(e.type){case k.VisitorIdLocatorType.COOKIE:t=L.get(i);break;case k.VisitorIdLocatorType.JS_VARIABLE:t=j.getGlobalByPath(i);break;case k.VisitorIdLocatorType.LOCALSTORAGE:try{var n=j.getGlobal("localStorage");t=n.getItem(i)}catch(e){throw new Error("Unable to read localStorage: "+e.toString())}break;case k.VisitorIdLocatorType.QUERY:t=B.getQueryParamValue(i)}try{if(!t)throw U.error("Visitor / Customer provided visitor id cannot be found. Type:",e.type," Name:",i),new Error("Failure to obtain visitor id from "+e.type);if(!R.isString(t)&&!R.isNumber(t))throw U.error("Visitor / Customer provided visitor id is not a string or number. Type:",e.type," Name:",i," Id Type:",typeof t),new Error("Customer provided visitor id is not a string or number")}catch(e){throw W.getSampleRum()&&D.dispatch(O.RECORD_VISITOR_ID_ERROR,{isError:!0}),e}return W.getSampleRum()&&(D.dispatch(O.RECORD_VISITOR_ID_ERROR,{isError:!1}),D.dispatch(O.RECORD_VISITOR_ID_LOCATOR_USAGE,{visitorIdLocatorType:e.type,entityId:t})),String(t)}function T(){return"oeu"+P.now()+"r"+Math.random()}function A(e){var t,i,n=q.getAllPlugins(k.PluginTypes.visitorProfileProviders),r=R.filter(n,(function(e){return R.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,i=e.metadata):(t=e,i={}),t=R.reduce(t,(function(e,t,i){var n=t,a=R.find(r,{provides:i});return a&&(n=a.restorer(t)),e[i]=n,e}),{}),D.dispatch(O.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:i})}function w(e){try{return x.parse(e)}catch(t){return U.debug("Failed to parse: ",e,t),null}}var b,R=i(2),D=i(9),O=i(7),N=i(71),C=i(72),L=i(75),P=i(24),V=i(16),k=i(25),x=i(26),F=i(19),M=i(81).LocalStorage,U=i(23),G=i(12).Promise,B=i(84),z=i(25).VisitorStorageKeys,j=i(40);b=i(85);var H=V.get("stores/cookie_options"),K=V.get("stores/global"),Y=V.get("stores/layer"),q=V.get("stores/plugins"),W=V.get("stores/rum"),X=V.get("stores/session"),Q=V.get("stores/visitor_id"),$=V.get("stores/visitor_bucketing"),J=V.get("stores/visitor"),Z=V.get("stores/provider_status"),ee=!1;t.getOrGenerateId=function(){return{randomId:t.getCurrentId()||T()}},t.getCurrentId=function(){var e=Q.getVisitorIdLocator();return e?S(e):J.getVisitorIdFromAPI()||L.get(k.COOKIES.VISITOR_ID)},t.hasSomeData=function(){return M.keys().length>0},t.setId=function(e){var i=Q.getBucketingId();D.dispatch(O.SET_VISITOR_ID,e),Q.getBucketingId()!==i&&(c(),t.deleteOldLocalData(),b.deleteData(e));try{Q.getVisitorIdLocator()||t.maybePersistVisitorId(e)}catch(e){if(U.error("Visitor / Unable to persist visitorId, disabling tracking"),D.dispatch(O.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof L.MismatchError)throw U.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}t.refreshSession()},t.getVariationIdMap=function(){return u(z.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,i){D.dispatch(O.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:i})},t.persistVariationIdMap=function(){var e=$.getVariationIdMapString();p(z.VARIATION_MAP,e,!0)},t.getPreferredLayerMap=n,t.updatePreferredLayerMap=r,t.persistTrackerOptimizelyData=function(e){p(z.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){D.dispatch(O.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,i){var n=R.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(n,i);return r},t.populateLazyVisitorData=function(e,i){var n=R.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(n,i)},t.populateVisitorData=function(e,t){t=t||{};var i=R.partial(s,t),n=R(e).filter({isAsync:!0}).map(i).filter().value();return R.forEach(R.filter(e,(function(e){return!e.isAsync})),i),n.length>0?G.all(n):G.resolve()},t.persistBehaviorEvents=function(e){p(z.EVENTS,e)},t.persistBehaviorEventQueue=function(e){p(z.EVENT_QUEUE,e)},t.getPersistedBehaviorEventCount=function(){var e=u(z.EVENTS)||[],t=u(z.EVENT_QUEUE)||[];return C.deserialize(e).length+C.deserialize(t).length},t.persistLayerStates=function(){var e=Y.getLayerStates(t.getNamespace());e=R.map(e,(function(e){return R.omit(e,"namespace")})),p(z.LAYER_STATES,e)},t.persistSessionState=function(){p(z.SESSION_STATE,X.getState())},t.persistVisitorProfile=function(){p(z.VISITOR_PROFILE,m())},t.persistVisitorBucketingStore=function(){t.persistVariationIdMap(),a()},t.getUserIdFromKey=function(e,i){var n;return R.includes(e,i)&&R.includes(e,"_")&&R.includes(e,"$$")&&R.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(n=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),n},t.maybePersistVisitorId=function(e){e.randomId&&(H.getAutoRefresh()||t.getCurrentId()!==e.randomId?(L.set(k.COOKIES.VISITOR_ID,e.randomId),U.log("Persisting visitorId:",e.randomId)):U.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(e){return J.getAttribute(e)},t.getPendingAttributeValue=function(e){return Z.getPendingAttributeValue(e)},t.isForeignKey=v,t.checkKeyForVisitorId=function(e){var i=Q.getBucketingId()||t.getCurrentId(),n=t.getIdFromKey(e);return!n||n===i},t.getIdFromKey=function(e){var i=e.split("$$")[0],n=t.getStorageKeyFromKey(e),r=R.includes(k.StorageKeys,n);if(r)return null;var a=i.indexOf("_"),o=a===-1;return o?i:i.substring(a+1)},t.getStorageKeyFromKey=function(e){var t,i=e.split("$$").pop(),n=i.indexOf("://")>-1;if(n){var r=i.indexOf("_");t=i.substring(r+1)}else t=i;return R.includes(R.values(k.AllStorageKeys),t)?t:null},t.deleteOldLocalData=function(){var e=M.keys();R.each(e,(function(e){t.isForeignKey(e)||t.checkKeyForVisitorId(e)||M.removeItem(e)}))},t.deleteOldForeignData=function(){var e=M.keys();R.each(e,(function(e){t.isForeignKey(e)&&M.removeItem(e)}))},t.loadForeignData=function(){R.each(M.keys(),(function(e){var t=M.getItem(e);t&&h(e,t)}))},t.getNamespace=function(){return K.getNamespace()},t.serializeFieldKey=function(e){return R.isArray(e)?e.join("$$"):e},t.removeLegacySessionStateCookies=function(){var e=L.getAll();R.forEach(R.keys(e),(function(e){0===e.indexOf(k.COOKIES.SESSION_STATE+"$$")&&L.remove(e)}))}}),(function(e,t,i){function n(e,i){i!==!1&&(i=!0);for(var n,a,o=e.hostname.split("."),s=[],c=null,l=o.length-1;l>=0;l--)if(s.unshift(o[l]),n=s.join("."),!r.includes(h,n)){a={domain:i?"."+n:n};try{t.set(_,Math.random().toString(),a),t.remove(_,a),c=a.domain;break}catch(e){}}return d.dispatch(u.SET_COOKIE_DOMAIN,c),c}var r=i(2),a=i(76).create,o=i(24),s=i(80),c=i(40),u=i(7),l=i(16),d=i(9),f=l.get("stores/cookie_options"),p=t.SetError=a("CookieSetError"),g=t.MismatchError=a("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var i,n,a,o,c;i=s.getCookieString().split(/\s*;\s*/);var u={};for(a=0;a<i.length;a++)if(n=i[a],o=n.indexOf("="),o>0&&(c=t.safeDecodeURIComponent(n.substring(0,o)),void 0===u[c])){var l=n.substring(o+1);e&&(l=t.safeDecodeURIComponent(l)),u[c]=l}return u},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,i){var n=t.getAll(i);return n[e]},t.set=function(e,i,a,u){a=r.extend({encodeValue:!0},a),u!==!1&&(u=!0);var l=[];if(r.isUndefined(a.domain)){var d=f.getCurrentDomain();d||(d=n(c.getLocation(),!0)),a.domain=d}if(a.domain&&l.push("domain="+a.domain),r.isUndefined(a.path)&&(a.path="/"),a.path&&l.push("path="+a.path),r.isUndefined(a.expires)){var h=r.isUndefined(a.maxAge)?f.getDefaultAgeInSeconds():a.maxAge;a.expires=new Date(o.now()+1e3*h)}if(r.isUndefined(a.expires)||l.push("expires="+a.expires.toUTCString()),a.secure&&l.push("secure"),l=l.join(";"),s.setCookie(e+"="+(a.encodeValue?encodeURIComponent(i):i)+";"+l),u){var _=a.encodeValue,v=t.get(e,_);if(v!==i){if(!v)throw new p('Failed to set cookie "'+e+'"');throw new g('Expected "'+i+'" for "'+e+'", got "'+v+'"')}}},t.remove=function(e,i){for(var n=c.getLocation().hostname.split(".");n.length>0;)t.set(e,null,r.extend({},i,{domain:"."+n.join("."),expires:new Date(0)}),!1),n.shift()};var h=["optimizely.test"],_="optimizelyDomainTestCookie"}),(function(e,t,i){var n=i(77),r=n("InternalError");t.BaseError=r,t.create=function(e){return n(e,r)}}),(function(e,t,i){function n(e,t){function i(t){if(!(this instanceof i))return new i(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return i.prototype=new(t||Error),i.prototype.constructor=i,i.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},i.prototype.name=e,i}var r=i(78)(),a=i(79);e.exports=n}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,i){var n=t;return i&&(n+=": "+i),e=n+e.slice(e.indexOf("\n"))}}),(function(e,t,i){function n(){return"loading"===t.getReadyState()}var r=i(16),a=r.get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.parseUri=function(e){var i=t.createElement("a");return i.href=e,i},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return a.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!n())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return t.appendTo(document.head,e)},t.appendTo=function(e,t){e.appendChild(t)},t.addEventListener=function(e,t,i){return document.addEventListener(e,t,i),function(){document.removeEventListener(e,t,i)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,i){var n,r,a="optimizely_data",o=i(76).create,s=i(82),c=i(40),u=t.Error=o("StorageError");try{r=c.getGlobal("localStorage")}catch(e){throw new u("Unable to read localStorage: "+e.toString())}if(!r)throw new u("localStorage is undefined");n=s.create(r,a),t.LocalStorage=n,t.isOptimizelyKey=function(e){return e.slice(0,a.length)===a}}),(function(e,t,i){function n(e,t){this.Zt=e,this.ei=t}var r=i(2),a=i(23),o="$$";n.prototype.ti=function(e){return[this.ei,e].join(o)},n.prototype.ii=function(e){return e.replace(this.ei+o,"")},n.prototype.setItem=function(e,t){try{this.Zt.setItem(this.ti(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},n.prototype.removeItem=function(e){this.Zt.removeItem(this.ti(e))},n.prototype.getItem=function(e){var t=null;try{t=this.Zt.getItem(this.ti(e))}catch(e){}return t},n.prototype.keys=function(){var e=r.keys(this.Zt);return r.map(r.filter(e,r.bind((function(e){return r.includes(e,this.ei)}),this)),r.bind(this.ii,this))},n.prototype.allKeys=function(){return r.keys(this.Zt)},n.prototype.allValues=function(){return r.values(this.Zt)},e.exports={create:function(e,t){return new n(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,i){function n(){return c.getGlobal("performance")}var r=i(7),a=i(76).create,o=i(24),s=i(9),c=i(40),u=i(16),l=u.get("stores/rum"),d="optimizely:",f=t.Error=a("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=n();if(t&&t.mark){var i=d+e;t.clearMarks(i+"Begin"),t.mark(i+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=n();if(t&&t.mark){var i=d+e,a=t.getEntriesByName(i+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(i+"End"),t.mark(i+"End");var o=t.getEntriesByName(i+"End"),c=e+"Time",u=o[0].startTime-a[0].startTime;s.dispatch(r.SET_PERFORMANCE_MARKS_DATA,{name:c,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*u)/1e3}})}}},t.now=function(){var e=n();return e?e.now():o.now()}}),(function(e,t,i){var n=i(2),r=i(40);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),i=[],n=0;n<t.length;n++){var a="",o="",s=t[n].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),i.push([a,o])}return i},t.getQueryParamValue=function(e){for(var i=t.getQueryParams(),n=0;n<i.length;n++)if(i[n][0]===e)return i[n][1]},t.queryStringFromMap=function(e){return n.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,i){function n(e){var t;if(!o.find(I.getFrames(),{origin:e.origin}))return void E.debug("XDomain","No frame found for origin: "+e.origin);try{t=h.parse(e.data)}catch(t){return void E.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(c.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new y("Xdomain Error: "+t.response));else if("SYNC"===t.type)o.each(I.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var i=I.getMessageById(t.id);if(!i){if(E.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var n=I.getNextMessageId();t.id>=n?d.emitInternalError(new y("Message ID is greater than expected maximum ID ("+t.id+">"+n+")")):t.id<0?d.emitInternalError(new y("Message ID is < 0: "+t.id)):d.emitInternalError(new y("No stored message found for message ID: "+t.id))}else d.emitInternalError(new y("Message ID is not a number: "+t.id));return}if(!i.resolver)return void E.warn("XDomain","Message already resolved, ignoring:",t.id);i.resolver(t.response),l.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:{data:{id:t.id,type:i.data.type,key:i.data.key},startTime:i.startTime,endTime:p.now()}})}}function r(e,t){return t||(t=I.getDefaultFrame()),new s(function(i){var n={data:o.extend({},e,{id:I.getNextMessageId()}),resolver:i};t?I.isDisabled()||a(n,t):l.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:n.data.id,message:n})})}function a(e,t){var i=e.data;l.dispatch(c.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:p.now()})}),t.target.postMessage(h.stringify(i),t.origin)}var o=i(2),s=i(12).Promise,c=i(7),u=i(16),l=i(9),d=i(86),f=i(76).create,p=i(24),g=i(80),h=i(26),_=i(88),v=i(74),m=i(40),E=i(23),I=u.get("stores/xdomain"),y=t.Error=f("XDomainStorageError");t.setItem=function(e,t,i){return r({type:"PUT",key:e,value:t},i)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.deleteData=function(e,t){return r({type:"DELETE",visitorId:e},t)},t.subscribe=function(e){l.dispatch(c.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(i){var n=g.createElement("iframe");n.src=e+t,n.hidden=!0,n.setAttribute("tabindex","-1"),n.setAttribute("title","Optimizely Internal Frame"),n.style.display="none",n.height=0,n.width=0,n.onload=function(){var r={id:I.getNextFrameId(),target:n.contentWindow,origin:e,path:t};l.dispatch(c.XDOMAIN_ADD_FRAME,r),i(r)},g.appendTo(g.querySelector("body"),n)})},t.getXDomainUserId=function(e,t){var i,n={},r=o.keys(e);return o.each(t,(function(e){n[e]=[],o.each(r,(function(t){var r=v.getUserIdFromKey(t,e);!i&&r&&(i=r),r&&!o.includes(n[e],r)&&n[e].push(r)}))})),E.debug("XDomain: Found userIds:",n),i},t.load=function(e,i){m.addEventListener("message",n);var r=function(){return!!g.querySelector("body")},s=function(){return t.loadIframe(e,i)};return _.pollFor(r).then(s).then((function(e){l.dispatch(c.XDOMAIN_SET_DEFAULT_FRAME,e),I.isDisabled()||o.each(I.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,i){var n=i(87);t.emitError=function(e,t,i){var r=!0;n.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},i||!1,r)},t.emitInternalError=function(e,i){t.emitError(e,i,!0)},t.emitAnalyticsEvent=function(e,t){var i={type:"analytics",name:"trackEvent",data:e};n.emit(i,t)}}),(function(e,t,i){var n=i(2),r=i(5),a=i(7),o=i(86),s=i(16),c=i(9),u=i(23),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),c.dispatch(a.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){c.dispatch(a.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,i){var r=l.getHandlers(e,t);n.each(r,(function(n){try{n.handler.call({$di:s},e)}catch(r){!i&&n.emitErrors?(u.error("Error in handler for event:",e,r),o.emitError(r,null,t)):u.warn("Suppressed error in handler for event:",e,r)}}))}}),(function(e,t,i){var n=i(2),r=i(12).Promise,a=i(40),o=100,s=50;t.pollFor=function(e,t,i){var c,u;return n.isFunction(i)?u=i:(c=i||o,u=function(){return c--,c<-1}),t=t||s,new r(function(i,n){!(function r(){var o;if(!u()){try{var s=e();if(s)return i(s)}catch(e){o=e}return a.setTimeout(r,t)}n(o||new Error("Poll timed out"))})()})}}),(function(e,t,i){function n(e,i){var n;n=t.isInSameSession(e,i)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):i.getValueOrDefault([s.FIELDS.TIME]),i.setFieldValue(s.FIELDS.SESSION_ID,n)}function r(e,i,n){var r,a=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);r=t.isInSameSession(i,e)?a:n?a+1:a-1,i.setFieldValue(s.FIELDS.SESSION_INDEX,r)}var a=i(62).Event,o=i(24),s=i(63),c=i(62).EventBase;t.CURRENT_SESSION_INDEX=0;var u=18e5;t.isInSameSession=function(e,t){var i=e.getValueOrDefault([s.FIELDS.TIME],0),n=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(i-n)<u},t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var i=e.getValueOrDefault([s.FIELDS.TIME]),r=e.getValueOrDefault([s.FIELDS.SESSION_ID]),o=t.getValueOrDefault([s.FIELDS.TIME]);i="number"!=typeof i?o-36e5:i,r="number"!=typeof r?i:r,e=new a(new c("",""),i,r),n(e,t)},t.updateSessionIndex=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_INDEX,0);var i=e.getValueOrDefault([s.FIELDS.TIME]),n=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]),o=t.getValueOrDefault([s.FIELDS.TIME]),u=e.getValueOrDefault([s.FIELDS.SESSION_ID]);i="number"!=typeof i?o-36e5:i,n="number"!=typeof n?0:n,u="number"!=typeof u?i:u,e=new a(new c("",""),i,u,n),r(e,t,!1)},t.sessionize=function(e){var i=e.length;if(0!==i){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var a=1;a<i;a++)n(e[a-1],e[a]);var c=t.CURRENT_SESSION_INDEX,l=e[i-1].getValueOrDefault([s.FIELDS.TIME]),d=o.now();d-l>u&&(c+=1),e[i-1].setFieldValue(s.FIELDS.SESSION_INDEX,c);for(var a=i-1;a>0;a--)r(e[a],e[a-1],!0)}},t.reindexIfNecessary=function(e,t,i){function n(e){for(var t=0;t<e.length;t++){var i=e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);e[t].setFieldValue(s.FIELDS.SESSION_INDEX,i+1)}}e.getValueOrDefault([s.FIELDS.SESSION_INDEX])===-1&&(n(t),n(i))},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,i){var n=i(12).Promise,r=i(40);t.estimateStorage=function(){var e=r.getGlobal("navigator");try{return e.storage.estimate()}catch(e){return n.resolve({usage:null,quota:null})}}}),(function(e,t,i){var n=i(2),r=i(7),a=i(24),o=i(9),s=i(26),c=i(23),u=i(12).Promise,l=i(92),d=3;t.isCORSSupported=function(){var e=l.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=n.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new u(function(i,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=l.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),i(o)},o.onerror=function(){e.error&&e.error(o),r(o)},n.isObject(e.data)&&(e.data=s.stringify(e.data)),o.open(e.method,e.url,e.async),e.withCredentials&&(o.withCredentials=e.withCredentials),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,i,s,l){if(!i)return u.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return u.reject(new Error("CORS is not supported."));n.isUndefined(l)&&(l=d),n.isUndefined(s)&&(s=0);var f={id:i,timeStamp:a.now(),data:e,retryCount:s};return o.dispatch(r.SET_PENDING_EVENT,f),c.debug("Sending event ",i),t.request(e).then((function(e){return o.dispatch(r.REMOVE_PENDING_EVENT,{id:i}),e}),(function(e){throw f.retryCount>=l?(o.dispatch(r.REMOVE_PENDING_EVENT,{id:i}),c.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,o.dispatch(r.SET_PENDING_EVENT,f),c.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-s," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,i){var n=i(2),r=i(7),a=i(24),o=i(16),s=i(80),c=i(25),u=i(9),l=i(23),d=o.get("stores/sandbox"),f=i(40);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||p();var i=d.get(e);if(i)return i}return f.getGlobal(e)};var p=function(){try{var e="optimizely_"+a.now(),t=s.createElement("iframe");t.name=e,t.style.display="none",s.appendToHead(t);var i=t.contentWindow,o=t.contentDocument;o.write("<script></script>"),o.close();var d=n.mapValues(c.SandboxedFunctions,(function(e){return i[e]}));u.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){l.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,i){var n=i(2),r=i(23),a=i(94),o=i(16),s=o.get("stores/plugins"),c=i(7),u=i(25),l=i(9),d=!1,f=[i(107),i(108),i(128)],p=["clientMetadata","cookieDomain","disable","load","optOut","rum"];t.push=function(e,t){var i,a,o,s;if(!n.isArray(e)&&n.isObject(e))s=n.isUndefined(e.version)?1:e.version,i=e.type,o=[e];else if(n.isArray(e))s=0,i=e[0],o=e.slice(1);else{if(!n.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,i=e,o=[]}if(f[s]&&(a=f[s][i]),t&&p.indexOf(i)===-1)return r.debug("API / Ignoring non high priority function:",i,o),!1;if(!a)return r.warn('API / No function found for "'+i+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+i,'" with arguments:',o);try{a.apply(null,o),l.dispatch(c.RECORD_API_USAGE,{methodName:s?"v"+s+"."+i:i})}catch(e){r.error(e)}return!0},t.get=function(e){if(d&&"state"!==e)return void r.warn('Module "'+e+'" not found.');r.log('API / Getting module: "'+e+'"');var t=a[e];return t?n.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(u.PluginTypes.apiModules,e),t?(l.dispatch(c.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,i){function n(e,t,i,n){var r=e.getLayerState(n),a=t.get(n),s=i.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(l.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var c=r.decision.experimentId,u=r.decision.variationId;if(!c||!u)return null;var d,f;return(d=o.find(a.experiments,{id:c}))?(f=o.find(d.variations,{id:u}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:d.name,id:d.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,i,n,r,s){var c=[],u=e.getLayerStates();s.onlySingleExperiments&&(u=o.filter(u,(function(e){var i=t.get(e.layerId);return i&&l.isSingleExperimentPolicy(i.policy)})));var f=o.map(u,(function(e){var t=!!e.decision.variationId,i=e.decisionActivationId&&e.decisionActivationId===n.getActivationId(),r=d.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&i||s,visitorRedirected:s})})),p=r?o.filter(f,r):f;return o.each(p,(function(e){var n=a(e,t,i,s.includeOfferConsistency);n&&c.push(n)})),c}function a(e,t,i,n){var r,a,s=e.layerId,c=t.get(s)||{},u=o.map(c.experiments,(function(e){return o.pick(e,["id","name"]);
}));if(n||!c.decisionMetadata||!c.decisionMetadata.offerConsistency){var l={id:s,campaignName:c.name||null,experiment:null,allExperiments:u,variation:null,reason:e.decision.reason,isActive:!!e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(c.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(i.get(e),["id","name"])}));return l.audiences=d,c.decisionMetadata&&c.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=i(2),s=i(95),c=i(96),u=i(98),l=i(44),d=i(99);t.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(e,t,i,n,r,a,s,l,d){var f={},p={},g={},h={audiences:e.getAudiencesMap(),events:i.getEventsMap(),campaigns:f,pages:r.getPagesMap(),experiments:p,variations:g,projectId:d.getProjectId(),snippetId:d.getSnippetId(),accountId:d.getAccountId(),dcpServiceId:d.getDCPServiceId(),revision:d.getRevision(),clientName:t.getClientName(),clientVersion:t.getClientVersion()},_=u.dereferenceChangeId;return o.each(n.getAll(),(function(e){c.defineProperty(f,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,_)}),"campaign"),c.defineProperty(t,"experiments",(function(){return o.map(e.experiments,(function(e){return p[e.id]}))}),"campaign"),t}),"campaignMap","byId"),o.each(e.experiments,(function(e){c.defineProperty(p,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"changes",(function(){return o.map(e.changes,_)}),"experiment"),c.defineProperty(t,"variations",(function(){return o.map(e.variations,(function(e){return g[e.id]}))}),"experiment"),t}),"experimentMap","byId"),o.each(e.variations,(function(e){c.defineProperty(g,e.id,(function(){var t=o.extend({},e);return c.defineProperty(t,"actions",(function(){return o.map(e.actions,(function(e){return o.extend({},e,{changes:o.map(e.changes,_)})}))}),"variation"),t}),"variationMap","byId")}))}))})),h.groups=a.getGroupsMap(),h}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,i,a,c,u,f){return{getCampaignStates:function(n){var a={},s=r(i,t,e,u,n,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(n){var a=r(i,t,e,u,n,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],c=o.reduce(a,(function(e,t){var i=t.allExperiments[0];return e[i.id]=o.extend({},o.pick(t,s),{id:i.id,experimentName:i.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return c},getCampaignStateLists:function(n){var a={},s=r(i,t,e,u,n,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=c.getAll(),i=o.reduce(t,(function(e,t){var i=a.get(t.id);return e[t.id]=o.extend({},o.pick(i,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e[t.id].isActive=!!e[t.id].isActive,e}),{});return e?o.pickBy(i,e):i},isGlobalHoldback:function(){return u.isGlobalHoldback()},getActivationId:function(){return u.getActivationId()},getVariationMap:function(){var e=i.getLayerStates(),n={};return o.each(e,(function(e){var i=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(n[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},i)){var r=o.find(i.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(n[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),n},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=d.getExperimentAndVariation();return e&&(e.referrer=d.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=n(i,t,f,e.campaignId);return r?s.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=n(i,t,f,e.campaignId);if(!r)return null;var a=s.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),c=o.mapValues(a.names,(function(t,i){return s.combineAndTruncateIdAndName(t,a.idStrings[i],e.maxLength)})),u={experiment:c.experiment,variation:c.variation};return l.isSingleExperimentPolicy(r.layer.policy)||o.extend(u,{campaign:c.layer,holdback:r.isLayerHoldback}),u}}}],t.utils=i(100).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=i(106)}),(function(e,t,i){function n(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!c.isEmpty(e)&&c.includes(["and","or","not"],e[0])}function a(e,t){var i="";return c.isEmpty(t)?i=d:(i=c.reduce(t,(function(t,i){var r=e.get(i);return r?t+n(r.name?r.name:r.id)+",":t}),""),i=i.slice(0,-1)),i}function o(e,i,n,r,a,o){if(!_.isSingleExperimentPolicy(e.policy)||!r){var s=!_.isSingleExperimentPolicy(e.policy)&&r,u=t.formatNamesAndIdsForAnalytics(e,i,n,o),d=[u.names.experiment,u.names.variation],p=[u.idStrings.experiment,u.idStrings.variation];_.isSingleExperimentPolicy(e.policy)||(d.unshift(u.names.layer),p.unshift(u.idStrings.layer));var g=c.reduce(p,(function(e,t){return e+t.length}),0),h=d.length-1+(s?1:0),v=h*l.length,m=g+v;if(s&&(m+=f.length),m>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var E=a-m,I=d.length,y=[],S=d.length-1;S>=0;S--){var T=d[S],A=Math.min(T.length,Math.floor(E/I));E-=A,I--,y.unshift(T.substring(0,A))}var w=c.map(y,(function(e,t){return e+p[t]}));return s&&w.push(f),w.join(l)}}function s(e,i,n,r,a,o){var s=r?f:p,u=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,i,n,o),g=d.names,h=d.idStrings,v=c.reduce(h,(function(e,t){return e+t.length}),0);if(v+u+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var m=a-v-u-s.length,E={};E.variation=Math.min(g.variation.length,Math.floor(m/3)),m-=E.variation,E.experiment=Math.min(g.experiment.length,Math.floor(m/2)),m-=E.experiment,E.layer=m;var I={};c.each(g,(function(e,t){I[t]=e.substring(0,E[t])}));var y=[];return _.isSingleExperimentPolicy(e.policy)||y.push(I.layer+h.layer),y=y.concat([I.experiment+h.experiment,I.variation+h.variation,s]),y.join(l)}var c=i(2),u=i(16),l=":",d="everyone_else",f="holdback",p="treatment",g="",h=i(23),_=i(44),v=!1;t.formatNamesAndIdsForAnalytics=function(e,t,i,o){var s={layer:e.name||g,experiment:t.name||g,variation:i.name||g};o&&(s=c.mapValues(s,n));var l=v?1===e.integrationStringVersion:!e.integrationStringVersion||1===e.integrationStringVersion;if(s.experiment===g&&l)if(r(t.audienceIds))s.experiment="Exp";else{var d=u.get("stores/audience_data");s.experiment=a(d,t.audienceIds)}var f={layer:"("+n(e.id)+")",experiment:"("+n(t.id)+")",variation:"("+n(i.id)+")"};return{names:s,idStrings:f}},t.combineAndTruncateIdAndName=function(e,t,i){var n=i-t.length;if(n<0&&(h.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=g),e===g)return t;if(e.length>n){var r=Math.min(e.length,n);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,i,n,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,i,n,r,a):s(e,t,i,n,r,a)}}),(function(e,t,i){var n=i(97),r=i(7),a=i(9),o=i(23);t.defineProperty=function(e,t,i,s,c){n(e,t,(function(){var e=["prop",s,c||t].join(".");return o.debug('Evaluating getter: "'+e+'"'),a.dispatch(r.RECORD_API_USAGE,{methodName:e}),i()}),!0)}}),(function(e,t){"use strict";function i(e,t,i,n){Object.defineProperty(e,t,{get:function(){var e=i.call(this);return Object.defineProperty(this,t,{value:e,enumerable:!!n,writable:!0}),e},set:function(e){return Object.defineProperty(this,t,{value:e,enumerable:!!n,writable:!0}),e},enumerable:!!n,configurable:!0})}e.exports=i}),(function(e,t,i){function n(e){var i=r.cloneDeep(e);return i.changes&&(i.changes=r.map(i.changes,t.dereferenceChangeId)),i.experiments&&r.each(i.experiments,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId)),e.variations&&r.each(e.variations,(function(e){e.actions&&r.each(e.actions,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId))}))}))})),i}var r=i(2),a=i(16),o=i(22),s=i(96),c=a.get("stores/change_data");t.translateDecisionToCampaignDecision=function(e){return u(r.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return s.defineProperty(t,"campaign",(function(){var t=n(e.data.layer);return t}),"campaignEvent"),t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}},t.dereferenceChangeId=function(e){var t=c.getChange(e);return t?o.safeReference(t):e};var u=function(e,t){var i=r.omit(e,r.keys(t));return r.each(t,(function(t,n){i[t]=e[n]})),i}}),(function(e,t,i){var n=i(2),r=i(16),a=r.get("stores/observed_redirect");t.getReferrer=function(){var e=a.get();return e?e.referrer:null},t.getExperimentAndVariation=function(){var e=a.get();return e&&n.isString(e.variationId)?n.pick(e,["experimentId","variationId"]):null}}),(function(e,t,i){var n=i(12).Promise,r=i(101).observeSelector,a=i(102).poll,o=i(104).waitForElement,s=i(105).waitUntil;t.create=function(){return{observeSelector:r,poll:a,Promise:n,waitForElement:o,waitUntil:s}}}),(function(e,t,i){function n(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=p.getDocumentElement(),i=new MutationObserver(function(){this.disconnect(),l.each(l.keys(m),a),this.observe(t,e)});return function(n){var r=m[n];i.observe(t,e),r.cancelObservation=function(){delete m[n],l.isEmpty(m)&&i.disconnect()}}}return function(e){var t=h.poll(l.partial(a,e));m[e].cancelObservation=function(){t(),delete m[e]}}}function r(e){var t=m[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(m[e]){if(o(m[e]))return 0===m[e].matchedCount&&l.isFunction(m[e].options.onTimeout)&&m[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(m[e].selector);t.length&&(l.each(t,(function(t){t.ni&&t.ni[e]||m[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;m[e]&&m[e].callbackQueue.length;){var t=m[e].callbackQueue.shift();if(c(t,e),m[e].matchedCount=m[e].matchedCount+1,m[e].callback(t),m[e]&&m[e].options.once)return void r(e)}}function c(e,t){e.ni||(e.ni={}),e.ni[t]=!0}function u(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=i(2),d=(i(7),i(16)),f=d.get("stores/directive"),p=i(80),g=(i(25),i(9),i(5).generate),h=i(102),_=i(40),v=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),m={},E=function(e){(E=n())(e)};t.observeSelector=function(e,t,i){if(!u(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(i&&(!l.isObject(i)||l.isFunction(i)))throw new Error("observeSelector expects an object as its third argument");var n=g();return i=l.assign({},v,i||{}),m[n]={callback:t,callbackQueue:[],matchedCount:0,options:i,selector:e,startTime:Date.now()},E(n),_.setTimeout(l.bind(a,null,n),0),l.partial(r,n)}}),(function(e,t,i){function n(e){l[e]&&a.each(l[e].callbacks,(function(e){e.call(null)}))}function r(e,t){l[t]&&l[t].callbacks[e]&&(delete l[t].callbacks[e],a.some(l[t].callbacks)||(clearInterval(l[t].id),delete l[t]))}var a=i(2),o=(i(7),i(16)),s=(i(25),i(9),i(5).generate),c=i(40),u=i(103).DEFAULT_INTERVAL,l=(o.get("stores/rum"),{});t.poll=function(e,t){a.isNumber(t)||(t=u),l[t]||(l[t]={callbacks:{},id:c.setInterval(a.partial(n,t),t)});var i=s();return l[t].callbacks[i]=e,a.partial(r,i,t)},t.cancelAll=function(){a.each(l,(function(e,t){clearInterval(e.id),delete l[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,i){var n=i(12).Promise,r=i(101).observeSelector;t.waitForElement=function(e){return new n(function(t,i){r(e,t,{once:!0})})}}),(function(e,t,i){var n=i(12).Promise,r=i(102).poll;t.waitUntil=function(e){return new n(function(t,i){if(e())return void t();var n=r((function(){e()&&(n(),t())}))})}}),(function(e,t,i){var n=i(87);t.on=function(e){return e.publicOnly=!0,n.on(e)},t.off=n.off,t.emit=function(e){n.emit(e)}}),(function(e,t,i){function n(e){var t,i={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(i=a.extend({},e),"revenue"in i){if(!r(i["revenue"]))throw new Error("tracker","Revenue value",i["revenue"],"not a number.");t=Number(i["revenue"]),delete i["revenue"]}}return a.isUndefined(t)||(i.revenue=t),i}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=i(2),o=i(108);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var i={experimentId:String(e)};t>256?i.variationId=String(t):i.variationIndex=String(t),o.bucketVisitor(i)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var i={};i[e]=t,o.user({attributes:i})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:n(t)})}}),(function(e,t,i){function n(e){var t;return e.eventId&&(t=I.create(e.eventId,e.eventName,"custom")),D.updateAllViewTags(),function(){var i=p.trackCustomEvent(e.eventName,e.tags,t);i?w.log("API / Tracking custom event:",e.eventName,e.tags):w.log("API / Not tracking custom event:",e.eventName)}}function r(e){var t;return e.eventData&&(t=I.create(e.eventData.id,e.eventData.apiName,"click",e.eventData)),function(){var e=p.trackClickEvent(t);e?w.log("API / Tracking click event:",e):w.log("API / Not tracking click event:",e)}}function a(e){var t=e.eventData,i=A.createLayerState(t.layerId,t.experimentId,t.variationId,t.isLayerHoldback),n=A.createSingle(t.layerId,t.experimentId,t.variationId);return function(){A.recordLayerDecision(i.layerId,i.decisionTicket,i.decision),w.log("API / Tracking decision event:",i),p.trackDecisionEvent(i.decision,i.decisionTicket,n)}}function o(e){var t=D.create(e.eventData.id,e.eventData.apiName),i=D.createState(t.id);return function(){var e=p.trackViewActivation(t,i);e?w.log("API / Tracking pageview event:",e):w.log("API / Not tracking pageview event:",e)}}var s=i(2),c=i(7),u=i(93),l=i(94),d=i(109),f=i(25),p=i(110),g=i(117),h=i(6),_=i(76).create,v=i(24),m=i(118),E=i(120),I=i(121),y=i(87),S=i(9),T=i(26),A=i(113),w=i(23),b=i(122),R=i(114),D=i(123),O=i(74),N=i(16),C=N.get("stores/dimension_data"),L=N.get("stores/view"),P=N.get("stores/view_data"),V=N.get("stores/visitor_id"),k=N.get("stores/layer_data"),x=N.get("stores/directive"),F=!1,M=!1,U=F||M,G=86400,B=90,z=t.ApiListenerError=_("ApiListenerError");t.event=function(e){var t;switch(e.eventType){case"click":t=r(e);break;case"decision":t=a(e);break;case"pageview":t=o(e);break;case"custom":default:t=n(e)}V.getBucketingId()?t():S.dispatch(c.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postActivate,cleanupFn:t})},t.clientMetadata=function(e){U&&(S.dispatch(c.SET_CLIENT_NAME,e.clientName),S.dispatch(c.SET_CLIENT_VERSION,e.clientVersion)),F&&e.forceVariationIds&&S.dispatch(c.LOAD_DIRECTIVE,{forceVariationIds:e.forceVariationIds})},t.priorRedirectString=function(e){U&&R.load(e.value)},t.microsnippetError=function(e){if(U){var t=e.errorData.metadata&&e.errorData.metadata.err||{};t.name=e.errorData.code;var i={engine:e.engine,msVersion:e.errorData.msVersion,requestId:e.errorData.requestId,projectId:e.errorData.projectId,snippetKey:e.errorData.snippetKey,args:e.errorData.args};E.handleError(t,i)}},t.rum=function(e){S.dispatch(c.SET_RUM_DATA,e.eventData)},t.initialViewStates=function(e){var t=s.map(e.states,(function(e,t){return{id:t,isActive:e}}));D.registerViews(t)},t.page=function(e){var t=P.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var i=!e.hasOwnProperty("isActive")||e.isActive,n=function(){i?D.activateViaAPI(t,e.tags):(D.deactivate(t),w.log("API / Deactivated Page",D.description(t)))};V.getBucketingId()?n():S.dispatch(c.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postViewsActivated,cleanupFn:n})},t.tags=function(e){D.setGlobalTags(e.tags)},t.user=function(e){U&&e.visitorId&&(V.getBucketingId()?(w.log("API / Setting visitor Id:",e.visitorId),O.setId({randomId:e.visitorId})):(w.log("API / Setting visitor Id for activation:",e.visitorId),S.dispatch(c.SET_VISITOR_ID_VIA_API,e.visitorId))),F&&s.each(["IP","location","queryParams","url"],(function(t){e[t]&&(w.log("API / Setting",t,":",e[t]),j(t,e[t],!1))})),w.log("API / Setting visitor custom attributes:",e.attributes),s.each(e.attributes,(function(e,t){var i,n,r=t,a=C.getById(t)||C.getByApiName(t);a&&(r=a.id,i=a.apiName,n=a.segmentId||a.id);var o={id:n,value:e};i&&(o.name=i),j(r,o,!0)}))};var j=function(e,t,i){var n=[{key:i?["custom",e]:[e],value:t,metadata:{lastModified:v.now()}}],r=function(){S.dispatch(c.SET_VISITOR_ATTRIBUTES,{attributes:n})};V.getBucketingId()?r():S.dispatch(c.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postVisitorProfileLoad,cleanupFn:r})};t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;m.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<B&&(w.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",B,", setting to minimum."),t=B),w.log("API / Setting cookie age to",t,"days."),S.dispatch(c.SET_COOKIE_AGE,t*G)},t.extendCookieLifetime=function(e){e=s.extend({isEnabled:!0},e),w.log("API / Setting cookie automatic lifetime extension to",e.isEnabled),S.dispatch(c.SET_COOKIE_AUTO_REFRESH,e.isEnabled)},t.cookieDomain=function(e){w.log("API / Setting cookie domain to",e.cookieDomain),S.dispatch(c.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);w.log("API / Disabling tracking"),S.dispatch(c.LOAD_DIRECTIVE,{trackingDisabled:!0})}else w.log("API / Disabling everything"),S.dispatch(c.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,i=e.match;s.isUndefined(t)&&(t="INFO"),s.isUndefined(i)&&(i=""),w.setLogMatcher(i),w.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(l[t]||u.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');b.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;h.makeAsyncRequest(t),h.resolveRequest(t,e.data)},t.addListener=function(e){if(!s.isFunction(e.handler))throw new Error("A handler function must be supplied");e=s.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0;var t=e.handler;e.handler=function(e){try{return t(e)}catch(e){throw new z(e)}},y.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");y.off(e.token)},t.load=function(e){e.data=s.extend({},e.data),d.normalizeClientData(e.data),S.dispatch(c.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");S.dispatch(c.SET_INTEGRATION_SETTINGS,s.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&s.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,i,n=e.campaignId;if(n){if(t=k.get(n),!t)throw new Error("Could not find layer "+n)}else if(t=k.getLayerByExperimentId(e.experimentId),n=t.id,!n)throw new Error("Could not find layer for experiment "+e.experimentId);if(i=s.find(t.experiments,{id:e.experimentId}),!i)throw new Error("Could not find experiment "+e.experimentId+" in layer "+n);var r=e.variationId;if(s.isUndefined(e.variationIndex)){if(!s.find(i.variations,{id:r}))throw new Error("Cound not find variation "+r+" in experiment "+e.experimentId)}else if(r=i.variations[e.variationIndex].id,!r)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);O.updateVariationIdMap(n,e.experimentId,r),V.getBucketingId()&&O.persistVariationIdMap()},t.waitForOriginSync=function(e){if(!s.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+T.stringify(e.canonicalOrigins));s.each(e.canonicalOrigins,(function(e){if(!s.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),S.dispatch(c.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e.canonicalOrigins})},t.disableCrossOrigin=function(){w.log("API / cross origin tracking is DISABLED"),S.dispatch(c.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){x.shouldActivate()&&!F?(s.forEach(L.getActiveViewStates(),(function(e){D.deactivate(P.get(e.id))})),S.dispatch(c.RESET_VIEW_STATES),g.emitActivateEvent()):w.debug("Not activating.")},t.sendEvents=function(){g.emitSendEvents()},t.holdEvents=function(){g.emitHoldEvents()}}),(function(e,t,i){var n=i(2),r=i(25);t.normalizeClientData=function(e){!e.listTargetingKeys&&e.listTargetingCookies&&(e.listTargetingKeys=n.map(e.listTargetingCookies,(function(e){return{type:r.ListTargetingKeyTypes.COOKIE,key:e}})),delete e.listTargetingCookies)}}),(function(e,t,i){function n(e,t,i){var n=u({activeViewStates:z.getActiveViewStates(),visitorProfile:W.getVisitorProfile(),layerStates:H.getLayerStatesForAnalytics()}),r=i&&i.pageId?d(i):z.getActiveViewTags(),a=v.extend({},r,t),o=i&&i.category?i.category:b.OTHER;return v.extend(n,{eventEntityId:i&&i.id,eventApiName:e,eventCategory:o,eventTags:a})}function r(e,t){var i=u({activeViewStates:z.getActiveViewStates(),visitorProfile:W.getVisitorProfile(),layerStates:H.getLayerStatesForAnalytics()});return v.extend(i,{pageId:e.id,pageApiName:e.apiName,viewCategory:e.category,eventTags:t.metadata})}function a(e){var t=u({activeViewStates:z.getActiveViewStates(),visitorProfile:W.getVisitorProfile(),layerStates:H.getLayerStatesForAnalytics()}),i=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,n=e.apiName,r=e.category||b.OTHER,a=e.id,o=d(e);return v.extend(t,{eventApiName:n,eventCategory:r,eventEntityId:a,eventTags:o,pageId:e.pageId,selector:i})}function o(){var e=u({activeViewStates:[],visitorProfile:W.getVisitorProfile(),layerStates:H.getLayerStatesForAnalytics()});return v.extend(e,{eventTags:{}})}function s(e,t,i,n){var r=null,a=null,o=null;if(t.experimentId){var s=v.find(n.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var c=v.find(s.variations,{id:t.variationId});c&&(a=c.name||null)}}var u=V.getReferrer()||A.getReferrer(),l={sessionId:B.getSessionId(),decisionTicketAudienceIds:i.audienceIds,visitorId:$.getRandomId(),decisionId:e,activationId:G.getActivationId(),namespace:G.getNamespace(),timestamp:y.now(),pageId:i.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:n.name,layerPolicy:n.policy,accountId:G.getAccountId(),projectId:G.getProjectId(),revision:String(G.getRevision()),clientName:U.getClientName(),clientVersion:U.getClientVersion(),referrer:u,integrationStringVersion:te?n.integrationStringVersion:n.integrationStringVersion||1,integrationSettings:v.extend({},n.integrationSettings,o)};return l}function c(e,t){var i=v.extend({},e,{isLayerHoldback:t,isGlobalHoldback:!1,clientName:v.isNull(e.clientName)?S.NAME:e.clientName,integrationStringVersion:te?e.integrationStringVersion:v.isNull(e.integrationStringVersion)?1:e.integrationStringVersion,anonymizeIP:v.isNull(G.getAnonymizeIP())?void 0:G.getAnonymizeIP(),activationId:G.getActivationId(),decisionTicketAudienceIds:[],sessionId:B.getSessionId(),activeViewStates:[],userFeatures:f(W.getVisitorProfile()),layerStates:H.getLayerStatesForAnalytics()});return i}function u(e){var t=V.getReferrer()||A.getReferrer(),i={eventId:M.generate(),timestamp:y.now(),revision:G.getRevision(),clientName:U.getClientName(),clientVersion:U.getClientVersion(),projectId:G.getProjectId(),accountId:G.getAccountId(),activationId:G.getActivationId(),sessionId:B.getSessionId(),isGlobalHoldback:G.isGlobalHoldback(),namespace:G.getNamespace(),referrer:t,visitorId:$.getRandomId(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:f(e.visitorProfile)};return i}function l(e){var t=z.getViewState(e),i=t&&t.isActive?t.metadata:{};return i}function d(e){var t={};return e.pageId?l(e.pageId):t}function f(e){var t=j.getAllPlugins(w.PluginTypes.visitorProfileProviders),i=v.filter(t,{shouldTrack:!0}),n={id:null,type:null,name:"",value:null,shouldIndex:!0};return v.reduce(i,(function(t,i){try{var r=i.provides,a=e[r],o=[];if(!v.isUndefined(a)){v.isObject(a)?o=v.map(a,(function(e,t){var i=v.isObject(e)?e:{value:e};return v.extend({},{type:r,name:t},i)})):o.push({type:r,value:a});var s=v(o).map((function(e){return v.pick(v.extend({},n,e),v.keys(n))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){L.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function p(e,t,i){var n=g(e,i);L.debug("Found "+n.length+" analytics integrations defining a "+e+" hook"),L.debug("Calling each with data: ",t),v.each(n,(function(e){try{L.debug("Calling plugin: "+e.name),e.hookFn(t),L.debug("Called plugin: "+e.name)}catch(e){L.error(e)}}))}function g(e,t){var i=[];return v.each(j.getAllPlugins(w.PluginTypes.analyticsTrackers),(function(n,r){if(n[e]&&(!t||!n[t]))try{i.push({name:r,hookFn:T.evaluate(n[e])})}catch(e){L.error(e)}})),i}function h(e,t,i){var n=_(e,t);L.debug("Found "+n.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),L.debug("Calling each with data: ",i),v.each(n,(function(e){try{L.debug("Calling plugin: "+e.name),e.hookFn(i),L.debug("Called plugin: "+e.name)}catch(e){L.error(e)}}))}function _(e,t){var i=[];return v.each(j.getAllPlugins(w.PluginTypes.analyticsTrackers),(function(n,r){v.includes(t,n[e])&&i.push({name:r,hookFn:n.trackLayerDecision})})),i}var v=i(2),m=i(7),E=i(86),I=i(71),y=i(24),S=i(32),T=i(16),A=i(80),w=i(25),b=i(73),R=i(87),D=i(111),O=i(112),N=i(9),C=i(113),L=i(23),P=(i(83),i(12).Promise),V=i(99),k=i(114),x=i(116),F=i(115),M=i(5),U=T.get("stores/client_metadata"),G=T.get("stores/global"),B=T.get("stores/session"),z=T.get("stores/view"),j=T.get("stores/plugins"),H=T.get("stores/layer"),K=T.get("stores/layer_data"),Y=T.get("stores/observed_redirect"),q=T.get("stores/pending_redirect"),W=T.get("stores/visitor"),X=T.get("stores/directive"),Q=T.get("stores/event_data"),$=T.get("stores/visitor_id"),J="COOKIE",Z=!0,ee=1e3,te=!1;t.trackClientActivation=function(){if(X.shouldSendTrackingData()){var e=o();return p("onClientActivation",e),e}},t.trackCustomEvent=function(e,t,i){t=t||{},i||(i=Q.getByApiName(e));var r=n(e,t,i),a={name:e,type:O.CUSTOM,category:r.eventCategory,tags:v.omit(r.eventTags,"revenue")};if(v.isUndefined(t.revenue)||(a.revenue=t.revenue),E.emitAnalyticsEvent({name:i?i.name||i.apiName:e,apiName:i?i.apiName:void 0,type:O.CUSTOM,tags:v.omit(r.eventTags,"revenue"),category:r.eventCategory,metrics:a.revenue?{revenue:a.revenue}:{}},!X.shouldSendTrackingData()),X.shouldSendTrackingData())return I.addEvent(a),p("onCustomEvent",r),r},t.trackDecisionEvent=function(e,t,i){i||(i=K.get(e.layerId));var n=M.generate();N.dispatch(m.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:n});var r=s(n,e,t,i),a=q.isExpectingRedirect(),o=q.getLayerId(),u=C.description(i);if(a&&o===i.id&&(k.persist(r,J),L.log("Relaying decision for redirect Campaign",u)),!X.shouldSendTrackingData())return void L.log("Analytics / Not tracking decision for Campaign",C.description(i));var l=c(r,e.isLayerHoldback);if(a&&o===i.id){var d=F.TrackLayerDecisionTimingFlags.preRedirectPolicy;l.timing=d,h(d,[F.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],l),L.log("Called trackLayerDecision for redirect Campaign",u,l)}else{var d=F.TrackLayerDecisionTimingFlags.nonRedirectPolicy;l.timing=d,h(d,[F.NonRedirectPolicies.TRACK_IMMEDIATELY],l),L.log("Called trackLayerDecision for non-redirect Campaign",u,l)}},t.trackPostRedirectDecisionEvent=function(){if(!X.shouldSendTrackingData())return P.resolve();if(Y.hasTracked())return P.resolve();var e=Y.get();if(!e)return P.resolve();var t=c(e,!1),i=F.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(t.timing=i,h(i,[F.PostRedirectPolicies.TRACK_IMMEDIATELY],t),Z){var n=new P(function(e){var t=R.on({filter:{type:D.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),R.off(t)}})}),r=x.makeTimeoutPromise(ee);return P.race([n,r]).then((function(){L.log("Calling trackers after successful sync")}),(function(e){L.warn("Calling trackers after failed sync:",e)})).then((function(){t=c(e,!1),t.timing=F.TrackLayerDecisionTimingFlags.postRedirectPolicy,h(F.TrackLayerDecisionTimingFlags.postRedirectPolicy,[F.PostRedirectPolicies.TRACK_AFTER_SYNC],t),N.dispatch(m.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){L.error("Error when calling trackers after sync:",e)}))}return h(F.TrackLayerDecisionTimingFlags.postRedirectPolicy,[F.PostRedirectPolicies.TRACK_AFTER_SYNC],t),N.dispatch(m.REGISTER_TRACKED_REDIRECT_DATA),P.resolve()},t.trackClickEvent=function(e){var t=a(e),i={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(E.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!X.shouldSendTrackingData()),X.shouldSendTrackingData())return I.addEvent(i),p("onClickEvent",t),t},t.trackViewActivation=function(e,t){if(t||(t=z.getViewState(e.id)),!t.isActive)return void L.debug("Inactive view passed to `trackViewActivation`");var i=r(e,t);return E.emitAnalyticsEvent({name:e.name||i.pageApiName,apiName:i.pageApiName,type:O.PAGEVIEW,category:i.viewCategory,tags:i.eventTags,metrics:{}},!X.shouldSendTrackingData()),X.shouldSendTrackingData()?(I.addEvent({name:i.pageApiName,type:O.PAGEVIEW,category:i.viewCategory,tags:i.eventTags}),N.dispatch(m.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:i}),p("onPageActivated",i),i):void 0}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t){e.exports={CLICK:"click",
CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,i){var n=i(2),r=i(7),a=i(24),o=i(16),s=i(9),c=o.get("stores/global"),u=o.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,i){return s.dispatch(r.RECORD_LAYER_DECISION,{layerId:e,decision:i,decisionTicket:t,sessionId:u.getSessionId(),activationId:c.getActivationId(),timestamp:a.now(),revision:c.getRevision(),namespace:c.getNamespace(),pageId:t.pageId}),i},t.relatedAudienceIds=function(e){var t={},i=["and","or","not"];return n.each(e.experiments,(function(e){n.each(n.flattenDeep(e.audienceIds),(function(e){n.includes(i,e)||(t[e]=!0)}))})),n.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"},t.createSingle=function(e,t,i){var n={id:e,policy:"single_experiment",holdback:0,experiments:[{id:t||"",variations:[{id:i||"",actions:[]}]}],integrationStringVersion:1};return n},t.createLayerState=function(e,t,i,n){var r={layerId:e,decision:{layerId:e,experimentId:t,variationId:i,isLayerHoldback:n||!1},decisionTicket:{audienceIds:[]}};return r},t.getIntegrationTypes=function(e){return n.keys(n.reduce(n.keys(e.integrationSettings),(function(e,t){return n.isNaN(Number(t))||(t="custom"),e[t]=1,e}),{}))}}),(function(e,t,i){function n(e){try{var t=r(e)}catch(e){return v.error("Relay / Error computing redirect relay cookie: ",e),void p.emitError(e)}v.debug("Relay / Setting redirect relay cookie:",t);try{f.set(h.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){v.error("Relay / Failed to set redirect relay cookie",e),p.emitError(e)}}function r(e){var t=[],i=l.reduce(e,(function(e,i,n){var r=S[n];return r?(r.isMulti?l.forEach(i,(function(t,i){t=r.valueToValueString?r.valueToValueString(t,i):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+I+i)+"="+t))})):l.isNull(i)||(i=(r.valueToValueString||String)(i),i=(r.encodeValueString||encodeURIComponent)(i),e.push(r.relayName+"="+i)),e):(t.push(n),e)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return i.sort(),i.join("&")}function a(){var e=f.get(h.COOKIES.REDIRECT,!1);if(e)return v.log("Relay / Found redirect cookie:",e),e}function o(e){var t={},i=e.split("&");return l.forEach(i,(function(e){var i=e.split("=");if(2!==i.length)return void v.warn("Relay / Skipping invalid segment:",e);var n=f.safeDecodeURIComponent(i[0]),r=T[n];if(!r&&(r=l.find(y,(function(e){return e.isMulti&&0===n.indexOf(e.relayName+I)})),!r))return void v.warn("Relay / Skipping segment with unknown field identifier:",e,n);var a=i[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=n.substring(r.relayName.length+I.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return v.warn("Relay / Skipping segment due to decode or parse error:",e,t),void p.emitError(t)}})),t}function s(e,t){var i=null;if(e){var n=E.getPlugin(h.PluginTypes.analyticsTrackers,t);if(n&&l.isFunction(n.serializeSettings))try{i=n.serializeSettings(e)}catch(e){v.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return i}function c(e,t){var i=null,n=E.getPlugin(h.PluginTypes.analyticsTrackers,t);if(n&&l.isFunction(n.deserializeSettings))try{i=n.deserializeSettings(e)}catch(e){v.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return i}function u(e){var t=e.pageId||void 0;_.dispatch(d.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),_.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),_.dispatch(d.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=i(2),d=i(7),f=i(75),p=i(86),g=i(16),h=i(25),_=i(9),v=i(23),m=i(115),E=g.get("stores/plugins"),I=".",y=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:c,isNullable:!0}],S={},T={};l.forEach(y,(function(e){S[e.name]=e,T[e.relayName]=e})),t.persist=function(e,t){t===m.RedirectRelayMedia.COOKIE?n(e):v.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(e){if(e||(e=a()),e){var t=o(e);if(t){var i=[];return l.forEach(y,(function(e){(l.isNull(t[e.name])||l.isUndefined(t[e.name]))&&(e.isNullable?t[e.name]=null:(delete t[e.name],i.push(e.name)))})),i.length?void v.error("Relay / Observed redirect data with missing fields:",i):(_.dispatch(d.LOAD_REDIRECT_DATA,t),_.dispatch(d.ADD_CLEANUP_FN,{lifecycle:h.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){u(t)}}),t)}}}}),(function(e,t,i){var n=i(8);t.TrackLayerDecisionTimingFlags=n({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=n({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=n({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=n({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=n({COOKIE:null})}),(function(e,t,i){var n=i(12).Promise,r=i(40);t.makeTimeoutPromise=function(e){return new n(function(t,i){r.setTimeout((function(){i(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,i){function n(e){var t=["type","selector","attributes","value"],i=r.extend({},e);return i.changeSet=r.map(e.changeSet,(function(e){return r.pick(l.dereferenceChangeId(e),t)})),i}var r=i(2),a=i(16),o=a.get("stores/audience_data"),s=i(87),c=i(111),u=i(96),l=i(98);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],i=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),n={type:c.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:i})},a=l.translateLayerEventToCampaignEvent(n);s.emit(n),s.emit(a)},t.emitViewActivated=function(e){var t={type:c.TYPES.LIFECYCLE,name:"viewActivated",data:e},i=l.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(i)},t.emitViewsActivated=function(e){var t={type:c.TYPES.LIFECYCLE,name:"viewsActivated",data:e};s.emit(t)},t.emitPageDeactivated=function(e){var t={type:c.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:c.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:c.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:c.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:c.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:e.type,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId};u.defineProperty(t,"changes",(function(){return n(e).changeSet}),"actionAppliedEvent");var i={type:c.TYPES.ACTION,name:"applied",data:t};s.emit(i)},t.emitActionsForDecisionAppliedEvent=function(e,t){var i={decision:e};u.defineProperty(i,"actions",(function(){return r.map(t,n)}),"appliedAllForDecisionEvent");var a={type:c.TYPES.ACTION,name:"appliedAllForDecision",data:i};s.emit(a)},t.emitSendEvents=function(){var e={type:c.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:c.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,i){function n(){var e=Boolean(E.result(window.optimizely,"initialized"));w.dispatch(I.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){w.dispatch(I.LOAD_DIRECTIVE,{mutationObserverAPISupported:N.isMutationObserverAPISupported()})}function a(){var e=N.getUserAgent()||"";if(!E.isString(e))return void b.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],i=function(t){if(E.includes(e,t))return b.warn("Directive / Matches bot:",t),!0};E.some(t,i)&&(b.log("Directive / Disabling tracking"),w.dispatch(I.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=S.get(A.COOKIES.OPT_OUT),t=D.getQueryParamValue(C.OPT_OUT),i="You have successfully opted out of Optimizely for this domain.",n="You are NOT opted out of Optimizely for this domain.",r="true"===t||"false"===t;if(r){var a="true"===t;w.dispatch(I.LOAD_DIRECTIVE,{shouldOptOut:a}),N.alert(a?i:n)}else e&&w.dispatch(I.LOAD_DIRECTIVE,{shouldOptOut:"true"===e})}function s(){var e=!1,t=[C.AB_PREVIEW,C.DISABLE];t.push(C.EDITOR);for(var i=0;i<t.length;i++)if("true"===D.getQueryParamValue(t[i])){b.warn("Directive / Not activating because "+t[i]+" is set."),e=!0;break}w.dispatch(I.LOAD_DIRECTIVE,{disabled:e})}function c(){w.dispatch(I.LOAD_DIRECTIVE,{isPreview:!1})}function u(){var e=D.getQueryParamValue(C.LEGACY_PREVIEW);e&&b.log("Directive / Is legacy preview mode"),w.dispatch(I.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function l(){w.dispatch(I.LOAD_DIRECTIVE,{isEditor:!1})}function d(){w.dispatch(I.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=N.getGlobal("optlyDesktop"),t=!(!e||E.isUndefined(e["p13nInner"]));t&&b.log("Directive / Is running in desktop app editor"),w.dispatch(I.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function p(){var e="true"===D.getQueryParamValue(C.EDITOR_V2);e&&b.log("Directive / Is running in editor"),w.dispatch(I.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function g(){var e=S.get(A.COOKIES.TOKEN)||null,t=D.getQueryParamValue(C.TOKEN)||e;w.dispatch(I.LOAD_DIRECTIVE,{projectToken:t})}function h(){var e=S.get(A.COOKIES.PREVIEW),t=[],i=D.getQueryParamValue(C.FORCE_AUDIENCES);if(i)t=S.safeDecodeURIComponent(i).split(",");else if(e)try{var n=O.parse(e);t=n.forceAudienceIds}catch(t){var r=new R("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};y.emitError(r,a)}t.length&&b.warn("Directive / Force parameters disabled - ignoring force audience IDs.")}function _(){var e=S.get(A.COOKIES.PREVIEW),t=[],i=D.getQueryParamValue(C.FORCE_VARIATIONS);if(i)t=S.safeDecodeURIComponent(i).split(",");else if(e)try{var n=O.parse(e);t=n.forceVariationIds}catch(t){var r=new R("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};y.emitError(r,a)}t.length&&b.warn("Directive / Force parameters disabled - ignoring force variation IDs.")}function v(){var e=D.getQueryParamValue(C.FORCE_TRACKING);e&&w.dispatch(I.LOAD_DIRECTIVE,{forceTracking:e})}function m(){var e="OFF",t=D.getQueryParamValue("optimizely_log");if(t){var i=t.split(":");""!==i[0]&&(e=String(i[0]).toUpperCase()),"undefined"!=typeof i[1]&&b.setLogMatch(i[1])}b.setLogLevel(e)}var E=i(2),I=i(7),y=i(86),S=i(75),T=i(76).create,A=i(25),w=i(9),b=i(23),R=t.JSONParseError=T("JSONParseError"),D=i(119),O=i(26),N=i(40),C={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){m(),a(),n(),r(),o(),s(),l(),c(),u(),d(),f(),p(),g(),h(),_(),v()};var L=31536e3;t.setOptOut=function(e){e?(b.warn("Directive / Opting out"),S.set(A.COOKIES.OPT_OUT,"true",{maxAge:10*L},!0)):S.remove(A.COOKIES.OPT_OUT),w.dispatch(I.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,i){var n=i(84),r=i(40);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=n.getQueryParams,t.getQueryParamValue=n.getQueryParamValue,t.getUrl=function(){return r.getHref()}}),(function(e,t,i){function n(e){return e&&e.engine?e.engine:_?"edge-tracking":h?"edge-helper":f.getClientName()}var r=i(2),a=i(76).BaseError,o=i(24),s=i(16),c=i(80),u=i(23),l=i(40),d=i(91),f=s.get("stores/client_metadata"),p=s.get("stores/global"),g="https://errors.client.optimizely.com",h=!1,_=!1;t.handleError=function(e,t){function i(){return d.request({url:g+"/log",method:"POST",data:v,contentType:"application/json"}).then((function(e){u.log("Error Monitor / Logged error with response: ",e)}),(function(e){u.error("Failed to log error, response was: ",e)}))}var s=e.name||"Error",h=e.message||"",_=e.stack||null;e instanceof a&&(h instanceof Error?(h=h.message,_=e.message.stack):_=null);var v={timestamp:o.now(),clientEngine:n(t),clientVersion:f.getClientVersion(),accountId:p.getAccountId(),projectId:p.getProjectId(),errorClass:s,message:h,stacktrace:_},m=r.map(p.getExperimental(),(function(e,t){return{key:"exp_"+t,value:String(e)}}));t&&r.forEach(t,(function(e,t){r.isObject(e)||m.push({key:t,value:String(e)})}),[]),r.isEmpty(m)||(v.metadata=m),u.error("Logging error",v),c.isLoaded()?i():l.addEventListener("load",i)}}),(function(e,t,i){var n=i(2);t.create=function(e,t,i,r){var a=n.extend({category:"other"},r,{id:e,apiName:t,eventType:i});return a}}),(function(e,t,i){var n=i(2),r=i(7),a=i(16),o=i(25),s=i(87),c=i(9);t.registerApiModule=function(e,t){n.isArray(t)&&(t=a.evaluate(t)),c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var i=a.get(e);i||a.register(e,t)},t.registerVisitorProfileProvider=function(e){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&n.each(e.dependencies,(function(e,i){t.registerDependency(i,e)}));var i,r="vendor."+e.vendor;i=n.isString(e.provider)?a.get(e.provider)(e.vendor):n.isFunction(e.provider)?e.provider(e.vendor):n.cloneDeep(e.provider),t.registerVisitorProfileProvider(n.extend(i,{provides:r}));var o;o=n.isString(e.matcher)?a.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return o(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){n.isArray(e)&&(e=a.evaluate(e));var t=s.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),i=s.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:i}},t.registerChangeApplier=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.eventImplementations,name:e,plugin:t})},t.registerViewTrigger=function(e,t){c.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTriggers,name:e,plugin:t})}}),(function(e,t,i){function n(e,t){r.forEach(e,(function(e){if(e.eventType!==d.CUSTOM){var i=_.getPlugin(l.PluginTypes.eventImplementations,e.eventType);i?t?i.attach(e):i.detach(e):p.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=i(2),a=i(7),o=i(117),s=i(124),c=i(24),u=i(16),l=i(25),d=i(112),f=i(9),p=i(23),g=i(125),h=u.get("stores/event_data"),_=u.get("stores/plugins"),v=u.get("stores/rum"),m=u.get("stores/view"),E=u.get("stores/view_data");t.parseViewTags=function(e){var i=t.evaluateViewTags(e);t.setParsedViewTags(e.id,i)},t.updateAllViewTags=function(){var e=m.getActiveViewStates();r.each(e,(function(e){var i=E.get(e.id);t.parseViewTags(i)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=g.getTagValue(t)}catch(e){e instanceof g.Error?p.warn("Page / Ignoring unparseable tag",t,e):p.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(_.getAllPlugins(l.PluginTypes.viewProviders),(function(t){e[t.provides]=u.evaluate(t.getter)})),e},t.registerViews=function(e){f.dispatch(a.REGISTER_VIEWS,{views:e})},t.activateViaAPI=function(e,i){i&&t.setUserSuppliedViewTags(e.id,i),t.activateMultiple([e],i)},t.getViewsAndActivate=function(e){var i=E.getAllViewsForActivationType(e);t.activateMultiple(i)},t.activateMultiple=function(e,i){var s=[];return r.each(e,(function(e){var c,u=m.getViewState(e.id),d=t.createViewTicket();if(u.isActive)if(e.deactivationEnabled)try{t.hasValidStaticConditions(e,d)||t.deactivate(e)}catch(i){p.error("Page / Error evaluating whether to deactivate page ",t.description(e),i)}else p.log("Not activating Page, already active ",t.description(e));else{try{if(c=t.hasValidStaticConditions(e,d),!c)return r.isBoolean(u.isActive)||t.setViewActiveState(e,!1),void p.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions)}catch(i){return r.isBoolean(u.isActive)||t.setViewActiveState(e,!1),void p.error("Page / Error evaluating whether to activate page ",t.description(e),i)}if(s.push(e),t.setViewActiveState(e,!0),p.log("Activated Page",t.description(e)),o.emitViewActivated({view:e,metadata:i}),v.getSampleRum()){var g=e.activationType||l.ViewActivationTypes.immediate;f.dispatch(a.RECORD_ACTIVATION_TYPE_USAGE,{activationType:g,entityId:e.id})}var _=h.getByPageId(e.id);n(_,!0)}})),r.isEmpty(s)||o.emitViewsActivated({views:s}),s},t.deactivate=function(e){var i=m.getViewState(e.id);if(!i.isActive)return void p.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),p.log("Deactivated Page",t.description(e)),o.emitPageDeactivated({page:e});var r=h.getByPageId(e.id);n(r,!1)},t.setViewActiveState=function(e,t){f.dispatch(a.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:c.now(),isActive:t})},t.setGlobalTags=function(e){f.dispatch(a.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){f.dispatch(a.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){var i={};if(r.isEmpty(e.staticConditions))return!0;var n=_.getAllPlugins(l.PluginTypes.viewMatchers);p.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),p.debug("Matching to current value:",t);var o=s.evaluate(e.staticConditions,(function(e){var r=e.type,a=n[r];if(!a)throw new Error("Page / No matcher found for type="+r);return a&&(i[e.type]||(i[e.type]=!0)),a.match(t,e)}));return p.groupEnd(),v.getSampleRum()&&o&&f.dispatch(a.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:r.keys(i),entityId:e.id}),o},t.description=function(e){return'"'+e.name+'" ('+e.id+")"},t.isActivationTypeImmediate=function(e){return e===l.ViewActivationTypes.immediate||!e},t.shouldTriggerImmediately=function(e){return e===l.ViewActivationTypes.DOMChanged||e===l.ViewActivationTypes.URLChanged||e===l.ViewActivationTypes.immediate||!e},t.create=function(e,t){var i={id:e,apiName:t,category:"other"};return i},t.createState=function(e){var t={id:e,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}};return t}}),(function(e,t,i){function n(e,t){for(var i,n,r=0;r<e.length;r++){if(i=o(e[r],t),i===!1)return!1;s.isUndefined(i)&&(n=!0)}if(!n)return!0}function r(e,t){for(var i,n=!1,r=0;r<e.length;r++){if(i=o(e[r],t),i===!0)return!0;s.isUndefined(i)&&(n=!0)}if(!n)return!1}function a(e,t){if(1!==e.length)return!1;var i=o(e[0],t);return s.isUndefined(i)?void 0:!i}function o(e,t){var i;if(s.isArray(e)){var n,r;e[0]in d?(n=e[0],r=e.slice(1)):(n=l.OR,r=e),u.groupCollapsed('Condition / Applying operator "'+n+'" with args',c.stringify(r));try{i=d[n](r,t),u.debug("Condition / Result:",i)}finally{u.groupEnd()}return i}return i=t(e),u.debug("Condition / Evaluated:",c.stringify(e),":",i),i}var s=i(2),c=i(26),u=i(23),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=n,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,i){var n=i(25).PluginTypes,r=i(16),a=r.get("stores/plugins");t.getTagValue=function(e){var i=a.getPlugin(n.viewTagLocators,e.locatorType);if(!i)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return i(e)},t.enums=i(126),t.Error=i(127).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,i){var n=i(76).create;t.Error=n("TagError")}),(function(e,t){}),(function(e,t,i){var n=i(16);n.register("env/jquery",i(130))}),(function(e,t,i){var n,r=i(40);try{n=$}catch(e){}var a=r.getGlobal("$");n&&n!==a?e.exports=n:e.exports=a}),(function(e,t,i){var n=i(23),r=i(40),a="optimizelyDataApi";t.registerFunction=function(e,t){var i=r.getGlobal(a);i||(i={},r.setGlobal(a,i)),i[e]||(i[e]=t)},t.unregisterFunction=function(e){var t=r.getGlobal(a);t&&t[e]&&(t[e]=function(){n.log('Ignoring attempt to call "'+a+"."+e+'" which has been unregistered.')})},t.getFunction=function(e){return r.getGlobal(a)[e]}}),(function(e,t,i){var n=i(80),r=i(23),a=i(91);t.addScriptAsync=function(e,t){var i=n.querySelector("head"),a=n.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),i.insertBefore(a,i.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,i){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);n.write('<script id="'+o+'" src="'+e+'"></script>');var s=n.querySelector("#"+o);if(!s)throw new Error("Document.write failed to append script");s.onload=i,s.onerror=function(n){r.warn("Failed to load script ("+e+") synchronously:",n),t.addScriptAsync(e,i)}}catch(n){r.debug("Document.write failed for "+e+": "+n.message);var c=function(e){var t=new Function(e.responseText);t(),i&&i()};return a.request({url:e,async:!1,contentType:"text/plain",success:c})["catch"]((function(n){r.error("Failed to load "+e+" via synchronous XHR: "+n.message),t.addScriptAsync(e,i)}))}}}),(function(e,t,i){function n(){var e=null;R.isNumber(e)&&0===ve.getCount()?($.log("Activating after delay of",e,"ms because no Experiments are running"),q.dispatch(L.SET_RUM_DATA,{data:{activateDfd:!0}}),ue.setTimeout(V.emitActivateEvent,e)):V.emitActivateEvent()}function r(e){Oe.handleError(e.data.error,e.data.metadata)}function a(){R.isArray(window.optimizely)&&(window.optimizely=R.filter(window.optimizely,(function(e){var t=!0;return!De.push(e,t)})))}function o(){var e=i(85),n=!!ce.getCurrentId(),r=!!n&&ce.hasSomeData();n?r?$.log("xd / Existing visitor; has data on this origin"):$.log("xd / Existing visitor; new to this origin"):$.log("xd / New visitor");var a=he.getAccountId(),o="https://a7871036.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),c="/client_storage/a"+a+".html";e.subscribe((function(e,t){ce.checkKeyForVisitorId(e)&&Q.setItem(e,t)}));var u=e.fetchAll().then((function(t){if(!we.getVisitorIdLocator()){var i=Re.getCanonicalOrigins();if(i){var n=e.getXDomainUserId(t,i);n&&($.log("Syncing cross-origin visitor randomId:",n),ce.maybePersistVisitorId({randomId:n}))}}return ce.deleteOldForeignData(),t})).then(t.persistItemsWithId).then((function(e){if(ce.loadForeignData(),n&&!r){var t=!R.isEmpty(e);$.debug("xd / Loaded foreign data? ",t),s(t)}$.log("Loaded visitor data from foreign origins"),V.emitOriginsSyncedEvent()}),(function(e){throw n&&!r&&($.debug("xd / Failed to load foreign data:",e),s(!1,e)),e}));return ie.all([e.load(o,c)["catch"]((function(e){throw $.debug("xd / Failed to load iframe:",e),n&&!r&&s(!1,e),e})),u["catch"]((function(e){$.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",e.message),$.debug("xd / Enqueuing sync to happen after visitorId set."),q.dispatch(L.ADD_CLEANUP_FN,{lifecycle:j.Lifecycle.postVisitorProfileLoad,cleanupFn:V.emitOriginsSyncedEvent})}))])}function s(e,t){q.dispatch(L.SET_RUM_DATA,{data:{extras:{xdAttempt:e,xdError:t?t.toString():void 0}}})}function c(e){var t=Se.getVisitorProfile();return ce.populateEagerVisitorData(e,t)}function u(e,t,i){e=e||[];var n=Ie.getAllPlugins(j.PluginTypes.visitorProfileProviders),r=he.getGlobalHoldbackThreshold(),a=Se.getVisitorProfile();ce.populateLazyVisitorData(n,a);var o=we.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,c=Se.getVisitorProfile();if(t&&!Pe){var u=be.getVariationIdMap();s=u[t.id]}var l={bucketingId:o,visitorProfile:c,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&i&&U.isPageIdRelevant(t)?R.map(i,(function(e){return U.createTicket(R.extend({},l,{pageId:e}))})):[U.createTicket(l)]}function l(e){return{bucketingId:we.getBucketingId(),preferredLayerId:be.getPreferredLayerMap()[e.id]}}function d(e){var i=ve.getAllByPageIds(e),n=ge.getForceVariationIds(),r=ge.getForceAudienceIds(),a=!R.isEmpty(n);a&&$.log("Force variations are in use. Disabling mutual exclusivity.");var o=a?{individual:i}:R.reduce(i,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=_e.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});$.log("Deciding Campaigns/Experiments for Page(s)",e);var s=R.map(o.groups,W.description).join(", ");$.log("Groups:",s);var c=R.map(o.individual,X.description).join(", ");$.log("Campaigns/Experiments not in Groups (by Campaign id):",c);var u=R.map(o.groups,R.partial(f,n,r,e))||[],l=R.map(o.individual,(function(i){var a=R.filter(i.pageIds,R.partial(R.includes,e));return t.decideAndExecuteLayerASAP(n,r,a,i)})),d=u.concat(l);return ie.all(d).then((function(t){var i=R.filter(t,(function(e){return!!e}));return $.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",R.map(i,X.description).join(", ")),i}))}function f(e,i,n,r){try{var a=l(r),o=U.decideGroup(r,a);if(o.reason)return $.debug("Not activating Group",W.description(r),"; reason:",o.reason),ye.getSampleRum()&&q.dispatch(L.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),ie.resolve();var s=ve.get(o.layerId);if(!s)return $.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),ie.resolve();var c=R.filter(s.pageIds,R.partial(R.includes,n));return R.isEmpty(c)?($.debug("Not activating Group",W.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),ie.resolve()):(ye.getSampleRum()&&q.dispatch(L.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),t.decideAndExecuteLayerASAP(e,i,c,s))}catch(e){return $.error("Error getting decision for Group",W.description(r),"; ",e),ie.reject(e)}}function p(e,t,i,n){return new ie(function(r,a){try{m(n,e,t,i,(function(a){R.each(a,(function(r){var a=r.pageId?[r.pageId]:i;$.debug("Deciding layer: ",n,"with decisionTicket: ",r,"and actionViewIds: ",a),g(n,e,t,a,r)})),r(n)}))}catch(e){$.error("Error getting decision for Campaign: "+X.description(n),e),a(e)}})}function g(e,i,n,r,a){var o=X.description(e);$.log("Activating Campaign",o,"on Page(s)",r),n.length&&($.log("Applying force audienceIds:",n,"to Campaign",o),a=R.cloneDeep(a),a.audienceIds=n);var s=t.decideLayer(e,a,i),c=!(!i.length&&!n.length),u=t.getActionsForDecision(e,s,c),l=b(u.actions,r);if(u.maybeExecute&&h(l,e,s,r),R.forEach(r,(function(){P.trackDecisionEvent(s,a)})),V.emitLayerDecided({layer:e,decisionTicket:a,decision:s}),s.error)throw s.error;if(ye.getSampleRum()){q.dispatch(L.RECORD_LAYER_POLICY_USAGE,{policy:e.policy,layerId:e.id});var d=v(u.actions);q.dispatch(L.RECORD_CHANGE_TYPE_USAGE,{changeTypes:R.keys(d),layerId:e.id}),R.isEmpty(e.integrationSettings)||q.dispatch(L.RECORD_INTEGRATION_USAGE,{integrations:X.getIntegrationTypes(e),layerId:e.id})}return U.isInCohort(s)?void(u.maybeExecute&&_(l,e,s,r)):void $.log("Not activating Campaign: "+X.description(e)+"; not in the cohort because:",s.reason)}function h(e,t,i,n){var r=X.description(t);$.log("Preparing actions",e,"for Campaign",r,"on Page(s)",n),R.forEach(e,C.prepareAction)}function _(e,t,i,n){var r=X.description(t);return $.log("Executing actions",e,"for Campaign",r,"on Page(s)",n),ie.all(R.map(e,(function(e){return C.executePreparedAction(e).then(R.partial(V.emitActionAppliedEvent,e))}))).then((function(){$.log("All page actions for",i,"applied:",e),V.emitActionsForDecisionAppliedEvent(i,e)}))["catch"]((function(e){$.warn("Error evaluating page actions for decision",i,"because:",e)}))}function v(e){var t={};return R.each(e,(function(e){R.each(e.changeSet,(function(e){t[e.type]||(t[e.type]=!0)}))})),t}function m(e,t,i,n,r){if(t.length||i.length)return void r(u([],void 0,n));var a=X.relatedAudienceIds(e),o=R.reduce(a,(function(e,t){var i=de.get(t);return i&&e.push(i),e}),[]),s=Ie.getAllPlugins(j.PluginTypes.audienceMatchers);if(ye.getSampleRum()){var c={};if(R.each(o,(function(e){R.extend(c,E(e.conditions,s))})),!R.isEmpty(c)){var l=R.keys(c);q.dispatch(L.RECORD_AUDIENCE_USAGE,{audienceTypes:l,layerId:e.id})}}S(o,s,X.getActivationTimeout(e),(function(){var t=u(o,e,n);R.map(t,(function(t){I(t,o,e)})),r(t)}))}function E(e,t){var i={};return R.each(e,(function(e){R.isArray(e)?R.extend(i,E(e,t)):R.isObject(e)&&t[e.type]&&(i[e.type]=!0)})),i}function I(e,t,i){var n=R.map(e.audienceIds,R.bind(de.get,de)),r=R.filter(t,(function(t){return!R.includes(e.audienceIds,t.id)}));$.log("When deciding Campaign",X.description(i),"visitor is in audiences:",y(n),"and not in audiences:",y(r))}function y(e){var t=[];return R.each(e,(function(e){t.push(e.name,e)})),t}function S(e,t,i,n){var r=R.reduce(e,(function(e,i){return R.extend(e,k.requiredAudienceFieldsForConditions(i.conditions,t))}),{}),a=R.reduce(r,(function(e,t){if(R.isUndefined(ce.getAttribute(t))){var i=ce.getPendingAttributeValue(t);R.isUndefined(i)||e.push(i)}return e}),[]);if(0===a.length)return n();var o=[].concat(e),s=ne.firstToResolve(R.map(a,(function(e){return ie.resolve(e).then((function(){var e=Se.getVisitorProfile();if(o=R.filter(o,(function(i){return R.isUndefined(k.isInAudience(e,i,t))})),!R.isEmpty(o))throw new Error("At least one audience is still pending")}))})));ie.race([s,new ie(function(e,t){ue.setTimeout(t,i)})]).then((function(){
$.log("Activating Campaign after pending Audiences resolved",e),n()}),(function(){$.log("Activating Campaign after timeout on Audiences",e),n()}))}function T(e,t,i){var n,r=X.description(e);return n=i.length?U.getDummyLayerDecision(e,i):U.decideLayer(e,t),$.log("Recording decision for Campaign",r,t,"->",n),X.recordLayerDecision(e.id,t,n),Pe||(n.variationId&&n.experimentId&&ce.updateVariationIdMap(e.id,n.experimentId,n.variationId),e.groupId&&ce.updatePreferredLayerMap(e.groupId,e.id)),n}function A(e){var t=pe.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();q.dispatch(L.CLEAR_CLEANUP_FN,{lifecycle:e})}}function w(e,t,i){var n=X.description(e),r="NOT applying changes for Campaign",a={actions:[],maybeExecute:!1};return a.actions=[].concat(fe.getLayerActions(t.layerId)||[],fe.getExperimentActions(t.experimentId)||[],fe.getExperimentVariationActions(t.experimentId,t.variationId)||[]),!i&&he.isGlobalHoldback()?($.log(r,n,"(visitor is in global holdback)"),a):t.isLayerHoldback?($.log(r,n,"(visitor is in layer holdback)"),a):t.experimentId&&t.variationId?(a.maybeExecute=!0,$.log("Got Actions for Campaign:",n,a.actions),a):($.log(r,n,"(visitor is not eligible for any Experiments)"),a)}function b(e,t){return R.filter(e,(function(e){return R.isUndefined(e.pageId)||R.includes(t,e.pageId)}))}var R=i(2),D=i(76).create,O=t.ActivationCodeError=D("ActivationCodeError"),N=t.ProjectJSError=D("ProjectJSError"),C=i(134),L=i(7),P=i(110),V=i(117),k=i(138),x=i(86),F=i(109),M=i(24),U=i(139),G=i(16),B=i(118),z=i(80),j=i(25),H=i(87),K=i(111),Y=i(144),q=i(9),W=i(143),X=i(113),Q=i(81).LocalStorage,$=i(23),J=i(145),Z=i(83),ee=i(122),te=i(88),ie=i(12).Promise,ne=i(146),re=i(114),ae=i(116),oe=i(136),se=i(123),ce=i(74),ue=i(40),G=i(16),le=G.get("stores/session"),de=G.get("stores/audience_data"),fe=G.get("stores/action_data"),pe=G.get("stores/cleanup"),ge=G.get("stores/directive"),he=G.get("stores/global"),_e=G.get("stores/group_data"),ve=G.get("stores/layer_data"),me=G.get("stores/layer"),Ee=G.get("stores/pending_events"),Ie=G.get("stores/plugins"),ye=G.get("stores/rum"),Se=G.get("stores/visitor"),Te=G.get("stores/view_data"),Ae=G.get("stores/view"),we=G.get("stores/visitor_id"),be=G.get("stores/visitor_bucketing"),Re=G.get("stores/xdomain"),De=i(93),Oe=i(120),Ne=i(1),Ce=1e3,Le=!1,Pe=!1,Ve=!1,ke=Pe||Ve,xe=1e3,Fe=t;t.initialize=function(e){return this.initGlobalStore(e.clientData),this.initializePlugins(e.plugins)},t.initGlobalStore=function(e){var e=e;F.normalizeClientData(e),H.on({filter:{type:"error"},handler:r}),q.dispatch(L.DATA_LOADED,{data:e}),$.log("Initialized with DATA:",e)},t.initializePlugins=function(e){if(a(),B.setOptOut(ge.shouldOptOut()),ge.isDisabled()||ge.shouldOptOut())return void $.log("Controller / Is disabled");if(Ne.queueBeacons(),z.isReady()?q.dispatch(L.SET_DOMCONTENTLOADED):z.addReadyHandler((function(){q.dispatch(L.SET_DOMCONTENTLOADED)})),!ke){Z.time("projectJS");var i=he.getProjectJS();if(R.isFunction(i))try{Y.apply(i)}catch(e){$.error("Error while executing projectJS: ",e),x.emitError(new N(e))}Z.timeEnd("projectJS")}R.each(e||[],(function(e){try{e(ee)}catch(e){x.emitInternalError(e)}})),R.each(he.getPlugins()||[],(function(e){try{Y.apply(e,[ee])}catch(e){x.emitError(e)}})),re.load();var r=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Se.observe(ce.persistVisitorProfile),me.observe(ce.persistLayerStates),le.observe(ce.persistSessionState),Ee.observe(J.persistPendingEvents),Pe||be.observe(ce.persistVisitorBucketingStore),H.off(r)}});H.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),H.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var o=J.getPendingEvents();if(o&&(q.dispatch(L.LOAD_PENDING_EVENTS,{events:o}),J.retryPendingEvents(o)),H.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),V.emitInitializedEvent(),!ge.shouldActivate())return ie.resolve();var s=[];if(Re.isDisabled())n();else{var c=t.initializeXDomainStorage();s.push(c);var u=Boolean(Re.getCanonicalOrigins());if(u){var l=ae.makeTimeoutPromise(xe);ie.race([c,l])["catch"]((function(e){$.error("Failed to initialize xDomain storage: ",e)})).then(n)["catch"](Oe.handleError)}else n()}return ie.all(s)},t.activate=function(){try{var e=[];$.log("Activated client"),A(j.Lifecycle.preActivate);var t=M.now();q.dispatch(L.ACTIVATE,{activationId:String(t),activationTimestamp:t});var i=Te.getAll();se.registerViews(i),ce.setId(ce.getOrGenerateId()),e.push(P.trackPostRedirectDecisionEvent()),q.dispatch(L.MERGE_VARIATION_ID_MAP,{variationIdMap:ce.getVariationIdMap()}),q.dispatch(L.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:ce.getPreferredLayerMap()}),A(j.Lifecycle.postVisitorProfileLoad),e.push(c(Ie.getAllPlugins(j.PluginTypes.visitorProfileProviders)).then((function(){$.log("Populated visitor profile")})));var n=u(),r=U.decideGlobal(n);$.log("Made global decision",n,"->",r),q.dispatch(L.RECORD_GLOBAL_DECISION,r);var a=P.trackClientActivation();a?$.log("Tracked activation event",a):$.log("Not tracking activation event");var o=Fe.setUpViewActivation(i),s=[];return Le?s=se.activateMultiple(o):R.each(o,(function(e){s=s.concat(se.activateMultiple([e]))})),Pe&&ye.getSampleRum()&&q.dispatch(L.RECORD_VIEWS_INITIALLY_ACTIVATED_COUNT,{viewsInitiallyActivatedCount:s.length}),A(j.Lifecycle.postViewsActivated),A(j.Lifecycle.postActivate),V.emitActivatedEvent(),ie.all(e).then((function(){H.emit({type:K.TYPES.LIFECYCLE,name:"activateDeferredDone"}),$.log("All immediate effects of activation resolved")}),x.emitError)}catch(e){return x.emitError(e),ie.reject(e)}},Fe.setUpViewActivation=function(e){var t=[];return R.each(e,(function(e){R.isBoolean(Ae.getViewState(e.id).isActive)&&se.isActivationTypeImmediate(e.activationType)?$.debug("Skipping page: already evaluated, presumably at the edge",se.description(e)):se.shouldTriggerImmediately(e.activationType)?t.push(e):e.activationType===j.ViewActivationTypes.callback?($.debug("Setting up conditional activation for Page",se.description(e)),Fe.activateViewOnCallback(e)):e.activationType===j.ViewActivationTypes.polling?($.debug("Setting up polling activation for Page",se.description(e)),te.pollFor(R.partial(Y.apply,e.activationCode),null,R.partial(oe.isTimedOut,M.now())).then((function(){se.activateMultiple([e])}))["catch"]((function(t){$.warn("Failed to activate view ",e,t)}))):e.activationType!==j.ViewActivationTypes.manual&&x.emitError(new Error("Unknown view activationType: "+e.activationType))})),t},Fe.activateViewOnCallback=function(e){var t=function(t){var i=R.extend({},t,{pageName:e.apiName,type:"page"});De.push(i)},i={pageId:e.id};Object.defineProperty(i,"isActive",{get:function(){return Ae.isViewActive(e.id)}});try{Y.apply(e.activationCode,[t,i])}catch(t){var n=new O("("+t.toString()+") in activationCode for "+se.description(e));x.emitError(n,{originalError:t,userError:!0})}},t.onViewsActivated=function(e){var t,i=e.data.views,n=R.map(i,"id");try{if(!we.getBucketingId())throw new Error("View activated with no visitorId set");var r=d(n)["catch"](x.emitError);return t=ie.all(R.map(i,(function(e){var t=function(){se.parseViewTags(e);var t=P.trackViewActivation(e);t?$.log("Tracked activation for Page",se.description(e),t):$.log("Not Tracking activation for Page",se.description(e))};return z.isReady()?ie.resolve(t()):te.pollFor(z.isReady,Ce).then(t)}))),ie.all([r,t])}catch(e){x.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,i=fe.getAllActionIdsByPageId(t.id);R.each(i,(function(e){var i=fe.getActionState(e);i&&(R.each(i,(function(e,i){if(e.cancel)try{e.cancel(),$.debug("Controller / Canceled change",i,"observation due to deactivation of page:",t)}catch(e){$.error("Controller / Error canceling change",i,"observation upon deactivation of page.",e)}if(t.undoOnDeactivation&&e.undo)try{e.undo(),$.debug("Controller / Undid change",i,"due to deactivation of page:",t)}catch(e){$.error("Controller / Error undoing change upon deactivation of page.",e)}})),q.dispatch(L.REMOVE_ACTION_STATE,{actionId:e}),$.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={push:De.push};Ve||(e.get=De.get);var t=window.optimizely;R.isArray(t)&&R.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.persistItemsWithId=function(e){return R.each(e,(function(e,t){ce.checkKeyForVisitorId(t)&&Q.setItem(t,e)})),e},t.initializeXDomainStorage=o,t.decideAndExecuteLayerASAP=p,t.decideLayer=T,t.getActionsForDecision=w}),(function(e,t,i){function n(e,t,i){var n=v.getActionState(t.id);if(!n)return void p.warn("Action / Attempted to prepare change for inactive action: ",t);var r=v.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void p.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:I.create(e,t,i)};f.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,i,o){if(a.includes(o,t))return void p.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var u=m.getChange(t);if(!u){var d="Change with id "+t+" is absent";return o.length&&(d+=" but listed as a dependency for "+o[o.length-1]),void p.warn(d)}e[t]=new g(function(d){var f=a.map(u.dependencies||[],(function(n){return r(e,n,i,o.concat([t]))}));if(u.src){var _="change_"+u.src,E=c.makeAsyncRequest(_,(function(){return h.addScriptAsync("https://cdn.optimizely.com/public/7871036/data"+u.src,(function(){c.resolveRequest(_)}))})).then((function(){var e=m.getChange(u.id);e||s.emitError(new S("Failed to load async change from src: "+u.src)),n(e,i,l.now())}));f.push(E)}g.all(f).then((function(){var e=l.now(),n=v.getChangeApplier(t,i.id);return n?(p.debug("Action / Applying change:",u),n.apply().then((function(t){t?p.log(t):p.debug("Action / Applied change for the first time in "+(l.now()-e)+"ms:",u),d()}))):(p.debug("Action / Not applying change ",t," - No changeApplier found."),void d())}))["catch"]((function(e){p.error("Action / Failed to apply change:",u,e),d()}))})}return e[t]}var a=i(2),o=i(7),s=i(86),c=i(6),u=i(76).create,l=i(24),d=i(16),f=i(9),p=i(23),g=i(12).Promise,h=i(132),_=d.get("stores/global"),v=d.get("stores/action_data"),m=d.get("stores/change_data"),E=d.get("stores/session"),I=i(135),y=i(136);y.initialize();var S=u("ActionError");t.prepareAction=function(e){p.debug("Action / Preparing:",e),f.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:E.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:l.now(),activationId:_.getActivationId()});var t=l.now();a.forEach(e.changeSet,(function(i){var r=a.isObject(i)?i.id:i,s=m.getChange(r);s||(f.dispatch(o.ADD_CHANGE,i),s=m.getChange(i.id)),s.src||n(s,e,t)}))},t.executePreparedAction=function(e){p.debug("Action / Executing:",e);var t={},i=a.map(e.changeSet,(function(i){var n=a.isObject(i)?i.id:i;return r(t,n,e,[])}));return g.all(i).then((function(){p.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,i){var n=i(13).Promise,r=i(24),a=i(16),o=a.get("stores/plugins"),s=i(25),c=i(23);t.create=function(e,t,i){var a={identifier:e.id,action:t,startTime:i||r.now()};try{var u=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!u)throw new Error("Unrecognized change type "+e.type);return new u(e,a)}catch(e){c.error("Change applier was never properly constructed:",e);var l={apply:function(){return n.reject(e)}};return l}}}),(function(e,t,i){function n(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=i(137),a=i(16).get("stores/directive");t.domReadyTime=null,t.initialize=function(){n(),document.addEventListener("readystatechange",n,!0)},t.isTimedOut=function(e){var i=Date.now();if(!t.domReadyTime||!e)return!1;var n=Math.max(e,t.domReadyTime);return a.isEditor()&&(n=t.domReadyTime),!(i-n<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,i){function n(e,t){return function(i){var n=i.type,a=t[n];if(!a)throw new Error("Audience / No matcher found for type="+n);if(a.fieldsNeeded)for(var s=r(a.fieldsNeeded,i),l=0;l<s.length;l++){var d=s[l],f=c.getFieldValue(e,d);if(o.isUndefined(f))return void u.debug("Audience / Required field",d,"for type",n,"has no value")}u.debug("Matching condition:",i,"to values:",e);var p=a.match(e,i);if(!o.isUndefined(p))return!!p}}function r(e,t){var i="function"==typeof e?e(t):e;return o.isString(i)&&(i=[i]),o.isArray(i)?i:(u.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=i(2),s=i(124),c=i(19),u=i(23),l=i(74);t.isInAudience=function(e,t,i){var r=n(e,i);u.groupCollapsed("Checking audience",t.name,t.id,t),u.debug("Visitor Profile:",e);var o;try{var c=s.evaluate(t.conditions,r)}catch(e){o=e,c=!1}return u.groupEnd(),o&&u.error("Audience / Error evaluating audience",a(t),":",o),u.log("Is "+(c?"in":"NOT in")+" audience:",a(t)),c},t.requiredAudienceFieldsForConditions=function e(t,i){var n={};return o.each(t,(function(t){if(o.isArray(t))o.extend(n,e(t,i));else if(o.isObject(t)){var a=i[t.type];if(a){var s=r(a.fieldsNeeded,t);o.each(s,(function(e){n[l.serializeFieldKey(e)]=e}))}}})),n}}),(function(e,t,i){function n(e,t){E.debug("Decision / Deciding layer for group: ",v.description(e));var i,n,r=t.preferredLayerId,a=!!r;try{i=d.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),i&&"None"!==i||(n='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){n="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(a&&(E.debug("Decision / Using preferredLayerMap to select layer for group:",v.description(e)),r!==i&&(_.dispatch(c.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredLayer",id:e.id}),i=r)),n)return{layerId:null,reason:n};if(!s.find(e.weightDistributions,{entityId:i})){var o=a?" sticky-":" non-sticky ",u="Visitor was"+o+"bucketed into a campaign ("+i+") which is not in the group";if(!a)throw new p(u);return{layerId:null,reason:u}}return{layerId:i}}function r(e,t){for(var i=0;i<e.experiments.length;i++)for(var n=0;n<e.experiments[i].variations.length;n++)if(t.indexOf(e.experiments[i].variations[n].id)>-1)return{experimentId:e.experiments[i].id,variationId:e.experiments[i].variations[n].id};return null}function a(e){var t=y.getPlugin(h.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var i=y.getAllPlugins(h.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,n){return l.isInAudience(e,n,i)&&t.push(n.id),t}),[])}var s=i(2),c=i(7),u=i(86),l=i(138),d=i(140),f=i(141),p=i(142).DecisionError,g=i(16),h=i(25),_=i(9),v=i(143),m=i(113),E=i(23),I=i(44),y=g.get("stores/plugins"),S=g.get("stores/global"),T=g.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:S.getActivationId()}),t},t.decideGlobal=function(e){var t=d.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=n,t.decideLayer=function(e,t){E.debug("Deciding: ",e,t);var i,n,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:d.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new p("No experiments in layer.");try{if(r.decideLayer){E.debug("Decision / Using decider's custom decideLayer.");var c=r.decideLayer(e,t);i=c.experiment,n=c.variation}else E.debug("Decision / Using default decideLayer behavior."),i=r.selectExperiment(e,t.audienceIds,t.bucketingId),n=f.selectVariation(i,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof p?o.reason=e.message:o.error=e}return o.experimentId=i?i.id:null,o.variationId=n?n.id:null,o.error&&(o.error.name="DecisionEngineError",u.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var i,n=r(e,t);return n?(E.log("Decision / Applying force variation:",n.variationId,"to Campaign",m.description(e)),i={layerId:e.id,variationId:n.variationId,experimentId:n.experimentId,isLayerHoldback:!1,reason:"force"}):(E.log("No variation matches ids:",t,"in Campaign",m.description(e)),i={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),i},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=T.get(e.layerId);return!(I.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,i){var n=i(64),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,i){var a=n.hashToInt(e+t,i,r);return a},t.isHoldback=function(e,i){return t.bucketingNumber(e,i.id,n.Seed.IGNORING)<(i.holdback||0)},t.chooseWeightedCandidate=function(e,i,r){for(var a=t.bucketingNumber(e,i,n.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,i){var n=i(2),r=i(7),a=i(140),o=i(124),s=i(142).DecisionError,c=i(9),u=i(23),l="impression";t.isValidExperiment=function(e,t){var i,r=n.partial(n.includes,e);return u.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),i=!t.audienceIds||o.evaluate(t.audienceIds,r),u.groupEnd(),u.debug("Decision / Experiment",t,"is valid?",i),i},t.selectVariation=function(e,t,i,o,d){if(!e.variations||0===e.variations.length)throw new s('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new s('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var f;if(e.bucketingStrategy&&e.bucketingStrategy===l)if(1===e.variations.length)f=e.variations[0].id;else{var p=o;f=a.chooseWeightedCandidate(i+p,e.id,e.weightDistributions)}else if(f=1===e.variations.length?e.variations[0].id:a.chooseWeightedCandidate(i,e.id,e.weightDistributions),d&&d[e.id]){u.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var g=d[e.id];if(!n.find(e.variations,{id:g}))return c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"stoppedVariation",id:e.id}),u.debug("Decision / Preferred variation:",g,"not found on experiment:",e.id,". Visitor not bucketed."),null;g!==f&&(c.dispatch(r.RECORD_STICKY_BUCKETING_FEATURE,{feature:"preferredVariation",id:e.id}),f=g)}var h=n.find(e.variations,{id:f});if(h)return u.debug("Decision / Selected variation:",h),h;throw new s('Unable to find selected variation: "'+f+'".')},t.getExperimentById=function(e,t){var i=n.find(e.experiments,{id:t});if(i)return i;throw new s("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return u.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!n.find(e.actions,(function(e){return e.pageId===t&&!n.isEmpty(e.changes)}))}}),(function(e,t){function i(e){this.message=e}i.prototype=new Error,t.DecisionError=i}),(function(e,t,i){function n(e){return r.map(e.weightDistributions,"entityId")}var r=i(2);t.description=function(e){var t=!!e.name,i=t?'"'+e.name+'" ':"",r=n(e).join(", ");return i+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(77),di=__webpack_require__(16),Logger=__webpack_require__(23),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(i){throw Logger.warn("Error applying function",e,"with args:",t,i),new ExecError(i)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,i){var n=i(2),r=i(86),a=i(25),o=i(26),s=i(81).LocalStorage,c=i(23),u=i(91),l=i(16),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e),i(85).setItem(f,e)}catch(e){c.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){n.forOwn(e,(function(e,t){u.retryableRequest(e.data,t,e.retryCount)})),n.isEmpty(e)||c.log("Retried pending events: ",e)}}),(function(e,t,i){var n=i(2),r=i(12).Promise;t.firstToResolve=function(e){return new r(function(t){n.each(e,(function(e){r.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,i){function n(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(i){a.isArray(i)&&"verifyPreviewProject"===i[0]&&String(i[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){s.on({filter:{type:c.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),s.on({filter:{type:c.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),s.on({filter:{type:c.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),s.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=i(2),o=i(16),s=i(87),c=i(111),u=i(40),l=o.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=u.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&n(e),r()},t.setupPreviewGlobal=function(){u.getGlobal(d)||u.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(149))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(151)),e.registerAudienceMatcher("behavior",i(153))}}),(function(e,t,i){var n=i(152);e.exports={provides:"events",isTransient:!0,getter:[function(){return n.getEvents()}]}}),(function(e,t,i){var n=i(2),r=i(72),a=i(16),o=a.get("stores/visitor_events"),s=1e3;t.getEvents=function(){var e=r.getEvents(),t=[].concat.apply([],n.values(o.getForeignEvents())),i=[].concat.apply([],n.values(o.getForeignEventQueues())),a=r.mergeAllEvents([e,t,i]);return a.slice(a.length-s)}}),(function(e,t,i){var n=i(2),r=i(26),a=i(154),o=i(155);e.exports={fieldsNeeded:["events"],match:function(e,t){var i=[],s=r.parse(t.value);return i=n.isUndefined(s.version)?[s]:a.buildFromSpecV0_1(s),n.every(i,(function(t){return o.isSatisfied(t,e.events)}))}}}),(function(e,t,i){function n(e){return e=(e||"").toString().trim(),p[e]||e}function r(e,t,i){var n={where:t};if(e.count&&(n["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,i),a=s.aggregate("count"),o=s.aggregateField("count"),l=s.groupField(r);return c.extend(n,{select:[{field:l}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return c.extend(n,{orderBy:[{field:[u.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(c.isUndefined(e))throw new Error("rule is undefined");if(!c.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(c.isArray(e["filter"])?c.each(e["filter"],(function(e,i){var n=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);n&&t.push("filter["+i+"]: "+n);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+i+"]: "+r)})):t.push("filter: not an array"));var i=[],n=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+l.stringify(e["reduce"]["aggregator"])+" to unsorted items"),c.isArray(e["sort"])?c.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?i.push(e):n.push(e);var c=o(e["direction"]);c&&t.push("sort["+r+"]: "+c)})):t.push("sort: not an array"),i.length&&n.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),i.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],u="aggregator "+(l.stringify(a)||String(a)),d=e["reduce"]["n"],f="index "+(l.stringify(d)||String(d));c.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+u+" is unknown"),c.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+u+" is impossible to use because no values have been picked")),"nth"===a?((!c.isNumber(d)||isNaN(d)||parseInt(d,10)!==d||d<0)&&t.push("reduce: "+f+" is not a non-negative integer (mandated by "+u+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):c.isUndefined(d)||t.push("reduce: "+f+" is defined (not mandated by "+u+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(l.stringify(e)||String(e));if(!c.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,c=i(2),u={FIELDS:i(63).FIELDS,FIELDS_V0_2:i(63).FIELDS_V0_2},l=i(26),d=i(23),f=i(155);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return c.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,[f.generateAlias(e,t)]},s.groupField=function(e){return c.isString(e)&&(e=[e]),e=e||f.DEFAULT_FIELD,[e.join(".")]};var p={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,i){return e=n(e),c.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:i}]}},s.relativeTimeComparison=function(e,t){return{op:n(e),args:[{op:"-",args:[{eval:"now"},{field:[u.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return c.isArray(e)?{op:"between",args:[{field:[u.FIELDS.TIME]},{value:[e[0]||+new Date(0),e[1]||+new Date]}]}:(d.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],i=0;i<e.length;i++)t[i]={field:e[i]};return t},s.aggregate=function(e,t){return c.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var i=[];return c.isString(e)?(i=[e],t!==s.SOURCE_TYPES.BEHAVIOR||c.includes(c.values(u.FIELDS),e)||(i=[u.FIELDS.OPTIONS,e])):i=e,i},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+l.stringify(e));var t=s.fieldComparison("gt",u.FIELDS.TIME,0),i=[],n=[];if(e.action&&(n.push(s.fieldComparison("eq",u.FIELDS.NAME,e.action.value)),e.action.type&&n.push(s.fieldComparison("eq",u.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)n.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&n.push(a)}else d.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:n},e.count&&i.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&c.each(e.filters,(function(r){var a,o,c=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",u.FIELDS.TIME),o=s.aggregateField("max",u.FIELDS.TIME)),a){var l=c,d=s.groupField(l);i.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else n.push(s.fieldComparison(r.comparator,c,r.value))})),e.pick){if(i.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+l.stringify(e));return[r(e.pick,t,e.source)]}return i.length>0?i:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:c.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return c.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var i=[],n=[];if(e["sort"]&&(c.each(e["sort"],(function(e){c.includes(["ascending","descending"],e["direction"])&&(c.includes(["time","age"],e["field"][0])&&n.push(e),"frequency"===e["field"][0]&&i.push(e))})),n.length&&!i.length&&(t["orderBy"]=c.filter(c.map(n,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&c.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return c.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[f.generateAlias(e["reduce"]["aggregator"],r)]}]});t=i.length?c.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===i[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):c.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(c.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return c.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[u.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var i="field "+(l.stringify(e)||String(e));if(!c.isArray(e)||!c.every(e,c.isString))return i+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return i+" includes too many strings";if("tags"===e[0]&&e.length<2)return i+" does not specify an exact tag";if(e.length<1)return i+" does not specify a top-level field";var n=c.keys(u.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(n.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(n=["time","age","frequency"],r=["name","type","category","tags"]),c.includes(r,e[0])?i+" is not supported here":c.includes(n,e[0])?void 0:i+" is unknown"},s.validateComparatorAndValue=function(e,t){var i="comparator "+(l.stringify(e)||String(e)),n="value "+(l.stringify(t)||String(t));if(!c.isString(e)&&!c.isUndefined(e))return i+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!c.isNumber(t))return n+" is not a number (mandated by "+i+")";break;case"in":if(!c.isArray(t))return n+" is not an array (mandated by "+i+")";break;case"between":if(!(c.isArray(t)&&2===t.length&&c.isNumber(t[0])&&c.isNumber(t[1])&&t[0]<=t[1]))return n+" is not a pair of increasing numbers (mandated by "+i+")";break;case"regex":if(!(c.isString(t)||c.isArray(t)&&2===t.length&&c.isString(t[0])&&c.isString(t[1])))return n+" is not a pattern string or a [pattern string, flags string] array (mandated by "+i+")";
break;case"exists":if(!c.isUndefined(t))return n+" is not undefined (mandated by "+i+")";break;default:return i+" is unknown"}}}),(function(e,t,i){var n=i(2),r=i(25),a=i(23),o=n.bind(a.log,a),s=i(24),c=i(19).getFieldValue,u=i(26),l=function(e,t,i){if(e.getValueOrDefault)return e.getValueOrDefault(t,i);if(!n.isArray(t))return i;var r=c(e,t);return"undefined"==typeof r&&(r=i),r},d=function(e){return"string"==typeof e?e.trim().toLowerCase():e};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(e){var t=n.map(e,d);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=n.map(e[1]||[],d);return n.includes(t,d(e[0]))},between:function(e){return e[1][0]<=e[0]&&e[0]<=e[1][1]},contains:function(e){var t=n.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,i;return n.isString(e[1])?(t=e[1],i="i"):(t=e[1][0]||"",i=e[1][1]||""),new RegExp(t,i).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,i].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return n.every(e,(function(e){return e}))},or:function(e){return n.some(e,(function(e){return e}))},not:function(e){return!e[0]}},t.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},t.aggregateOperators={sum:function(e,i){for(var n=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<i.length;a++)r+=l(i[a],n,0);return r},avg:function(e,i){if(0===i.length)return 0;for(var n=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<i.length;a++)r+=l(i[a],n,0);return r/i.length},max:function(e,i){for(var n=e[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,a=0;a<i.length;a++)r=Math.max(r,l(i[a],n,Number.NEGATIVE_INFINITY));return r},min:function(e,i){for(var n=e[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,a=0;a<i.length;a++)r=Math.min(r,l(i[a],n,Number.POSITIVE_INFINITY));return r},count:function(e,t){return t.length}};var f={now:function(){return s.now()}},p=function(e){return e in t.booleanOperators?t.booleanOperators[e]:e in t.arithmeticOperators?t.arithmeticOperators[e]:null},g=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l(e,t["field"]);if(t.hasOwnProperty("eval"))return t["eval"]in f?f[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+u.stringify(t));var i=p(t["op"]);if(!i)return void a.error("Rules","Unknown operator: "+t["op"]);var r=n.partial(g,e),o=t["args"]||[],s=n.map(o,(function(e){return r(e)}));return i(s,e)},h=function(e,t){var i={};if("undefined"==typeof e||!n.isArray(e)||0===e.length)return i["*"]={fieldValues:{},events:t},i;for(var r=n.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],c={},d=0;d<r.length;d++){var f=r[d],p=l(o,f),g=f.join(".");c[g]=p,s.push(encodeURIComponent(g)+"="+encodeURIComponent(u.stringify(p)))}var h=s.join("&");i.hasOwnProperty(h)||(i[h]={fieldValues:c,events:[]}),i[h].events.push(o)}return i};t.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")};var _=function(e,i){var r={};return n.each(i,(function(i,n){r[n]={};for(var o=0;o<e.length;o++){var s=e[o],c=s["op"];if(c in t.aggregateOperators){var u=(s["args"]&&s["args"][0]||{})["field"]||t.DEFAULT_FIELD,l=t.generateAlias(c,u),d=t.aggregateOperators[c]([u],i.events);r[n][l]=d}else a.error("Rules","Unknown aggregate operator "+c)}})),r},v=function(e,t){var i=[];return n.each(e,(function(e,r){var a=n.extend({},e.fieldValues),o=t[r]||{};n.extend(a,o),i.push(a)})),i},m=function(e,t){return n.isArray(e)?0===e.length?t:t.sort((function(t,i){for(var n=0;n<e.length;n++){var r=e[n],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],c=l(t,s,0),u=l(i,s,0);if(c<u)return-o;if(c>u)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)};t.rewrite=function(e){function i(e,s){if(n.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(s&&e["op"]in t.aggregateOperators){var c=(e["args"]&&e["args"][0]||{})["field"]||t.DEFAULT_FIELD,u=t.generateAlias(e["op"],c);return u in o||(r.push({op:e["op"],args:e["args"]}),o[u]=!0),{field:[u]}}for(var l=[],d=e["args"]||[],f=0;f<d.length;f++)l[f]=i(d[f],s);return{op:e["op"],args:l}}var r=[],o={},s={};e.hasOwnProperty(t.clause.WHERE)&&(s[t.clause.WHERE]=i(e[t.clause.WHERE],!1)),e.hasOwnProperty(t.clause.HAVING)&&(s[t.clause.HAVING]=i(e[t.clause.HAVING],!0)),(e.hasOwnProperty(t.clause.AGGREGATE)||r.length>0)&&(s[t.clause.AGGREGATE]=(e[t.clause.AGGREGATE]||[]).concat(r));for(var c=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],u=0;u<c.length;u++)e.hasOwnProperty(c[u])&&(s[c[u]]=e[c[u]]);return e.hasOwnProperty(t.clause.FROM)&&(s[t.clause.FROM]=t.rewrite(e[t.clause.FROM])),s};var E=function(e,i){i=i||0;var r=[];if(e.hasOwnProperty(t.clause.WHERE)?e[t.clause.WHERE]["op"]?e[t.clause.WHERE]["op"]in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),e.hasOwnProperty(t.clause.HAVING)&&(e[t.clause.HAVING]["op"]?e[t.clause.HAVING]["op"]in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),e.hasOwnProperty(t.clause.GROUP_BY)&&!e.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(t.clause.SELECT)){var a=e[t.clause.SELECT];if(n.isArray(a))for(var o=0;o<a.length;o++)a[o]["op"]&&a[o]["op"]in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+a[o]["op"]+'" specified in selector at index '+o);else r.push("SELECT clause must be an array")}if(e.hasOwnProperty(t.clause.OFFSET)){var s=e[t.clause.OFFSET];(!n.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(t.clause.LIMIT)){var c=e[t.clause.LIMIT];(!n.isNumber(c)||Number(c)<0||Number(c)!==Math.floor(Number(c)))&&r.push("LIMIT must be a non-negative integer")}return i>0&&(r=n.map(r,(function(e){return"Sub-rule "+i+": "+e}))),e.hasOwnProperty(t.clause.FROM)&&(r=r.concat(E(e[t.clause.FROM],i+1))),r},I=function(e,t){return n.map(t,(function(t){return n.map(e,(function(e){return g(t,e)}))}))},y=function(e,i){var r=i;if(e.hasOwnProperty(t.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[t.clause.FROM]),r=y(e[t.clause.FROM],r),a.debug("Results after FROM:",r)),a.debug("Evaluating WHERE clause:",e[t.clause.WHERE]),r=n.filter(r,(function(i){return g(i,e[t.clause.WHERE])})),a.debug("Results after WHERE:",r),e.hasOwnProperty(t.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[t.clause.AGGREGATE]);var o=h(e[t.clause.GROUP_BY],r),s=_(e[t.clause.AGGREGATE],o);r=v(o,s),a.debug("Results after AGGREGATE:",r)}e.hasOwnProperty(t.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[t.clause.HAVING]),r=n.filter(r,(function(i){return g(i,e[t.clause.HAVING])})),a.debug("Results after HAVING:",r)),e.hasOwnProperty(t.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[t.clause.ORDER_BY]),r=m(e[t.clause.ORDER_BY],r),a.debug("Results after ORDER_BY:",r));var c=0;e.hasOwnProperty(t.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[t.clause.OFFSET]),c=Number(e[t.clause.OFFSET]));var u;return e.hasOwnProperty(t.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[t.clause.LIMIT]),u=c+Number(e[t.clause.LIMIT])),(c>0||!n.isUndefined(u))&&(r=r.slice(c,u),a.debug("Results after OFFSET/LIMIT:",r)),e.hasOwnProperty(t.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[t.clause.SELECT]),r=I(e[t.clause.SELECT],r),a.debug("Results after SELECT:",r)),r};t.execute=function(e,i){e=t.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,u.stringify(e)),a.debug("Events:",i);var n=E(e);if(n.length>0)throw new Error("Rule "+u.stringify(e)+" has violations: "+n.join("\n"));var o=y(e,i);return a.debug("Rule result:",o),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),o},t.isSatisfied=function(e,i){try{return t.execute(e,i).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+u.stringify(e)),!1}}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(157))}}),(function(e,t,i){var n=i(2),r=i(158),a=i(152),o=i(26),s=i(154);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(e,t){var i=e.getProjectId(),c=n.filter(n.map(t.getCustomBehavioralAttributes(i),(function(e){try{return{id:e.id,granularity:r.GRANULARITY.ALL,rule:s.buildFromSpecV0_2(o.parse(e.rule_json))}}catch(e){return}}))),u=a.getEvents();return r.evaluate(c,u)}]}}),(function(e,t,i){function n(e){if(0===e.length)return[];for(var t=e.length-1,i=o.FIELDS.SESSION_ID,n=e[t][i];t>0&&n===e[t-1][i];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var i=+new Date-t*s.MILLIS_IN_A_DAY;i-=i%s.MILLIS_IN_A_DAY;for(var n=e.length;n>0&&i<=e[n-1][o.FIELDS.TIME];)n--;return e.slice(n)}var a=i(23),o={FIELDS:i(63).FIELDS},s=i(154),c=i(155);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,i){var o={};if(0===i.length){for(var s=0;s<e.length;s++)o[e[s].id]=e[s].defaultValue;return o}var u=n(i),l=r(i,60);for(s=0;s<e.length;s++){var d=e[s],f=i;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=u:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var p=f;d.rule&&(p=c.execute(d.rule,f)),o[d.id]=d.defaultValue,1===p.length?o[d.id]=p[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",p.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(160)),e.registerAudienceMatcher("first_session",i(161))}}),(function(e,t,i){var n=i(63),r=i(152),a=i(19).getFieldValue,o=i(89).CURRENT_SESSION_INDEX;e.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var e=r.getEvents();if(e&&e.length>0){var t=e[0],i=a(t,[n.FIELDS.SESSION_INDEX]);return i===o}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,i){e.exports=function(e){e.registerApiModule("behavior",i(163))}}),(function(e,t,i){function n(e,t){var i=d.buildFromSpecV0_1(t);if(1!==i.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(i[0],e)}function r(e,t){return u.map(e,(function(e){return u.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var i=[];return e.count&&i.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&i.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),u.each(e.filters,(function(e){u.isUndefined(e.modifier)||i.push('Unexpected "filter" modifier "'+e.modifier+'"')})),i.length>0?i:void 0}function o(e,t){var i,o={revenueAsTag:!1,timeAsTimestamp:!0};if(u.isUndefined(t))return i=l.getEvents(e),r(i,o);if(u.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return i=l.getEvents(e),r(i.slice(-t),o)}var s=a(t,u.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return i=l.getEvents(e),r(n(i,t),o)}function s(e,t){if(t=u.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var i=a(t,u.values(d.FREQUENCY_FILTERS));if(i)throw new Error(i.join("\n"));var r=l.getEvents(e);return n(r,t)}function c(e,t){var i=d.buildFromSpecV0_2(t),n=l.getEvents(e),a=r(f.execute(i,n),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=u.flatten(a)),t.reduce&&(a=a[0]),a}var u=i(2),l=i(152),d=i(154),f=i(155);e.exports=["stores/visitor_events",function(e){return{getEvents:u.partial(o,e),getByFrequency:u.partial(s,e),query:u.partial(c,e)}}]}),(function(e,t,i){e.exports=function(e){e.registerDependency("sources/browser_id",i(165)),e.registerVisitorProfileProvider(i(169)),e.registerVisitorProfileProvider(i(170)),e.registerAudienceMatcher("browser_version",i(171))}}),(function(e,t,i){var n=i(166);t.getId=function(){return n.get().browser.id},t.getVersion=function(){return n.get().browser.version}}),(function(e,t,i){var n=i(2),r=i(167),a=i(40),o=i(7),s=i(16),c=i(9),u=s.get("stores/ua_data");t.get=function(){var e=u.get();return n.isEmpty(e)&&(e=r.parseUA(a.getUserAgent()),c.dispatch(o.SET_UA_DATA,{data:e})),e}}),(function(e,t,i){function n(e){if(e=(e||"").toLowerCase(),e in c)return e;var t=a.keys(c);return a.find(t,(function(t){var i=c[t];return a.includes(i,e)}))||"unknown"}function r(e,t,i){return t?t:"unknown"===e?"unknown":i?"mobile":"desktop_laptop"}var a=i(2),o=i(168);t.parseUA=function(e){var t=new o(e),i=t.getBrowser(),a=t.getOS(),c=t.getDevice(),l=(a.name||"unknown").toLowerCase(),d=(i.name||"unknown").toLowerCase(),f=s(c.type,d,l);return{browser:{id:n(i.name),version:i.version},platform:{name:l,version:a.version},device:{model:u[c.model]||"unknown",type:r(d,c.type,f),isMobile:f}}};var s=function(e,t,i){if(a.includes(["mobile","tablet"],e))return!0;if(a.includes(["opera mini"],t))return!0;var n=["android","blackberry","ios","windows phone"];return!!a.includes(n,i)},c={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},u={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,i){var n;/*!
	 * UAParser.js v0.7.24
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright Â© 2012-2021 Faisal Salman <f@faisalman.com>
	 * Licensed under MIT License
	 */
!(function(r,a){"use strict";var o="0.7.24",s="",c="?",u="function",l="undefined",d="object",f="string",p="major",g="model",h="name",_="type",v="vendor",m="version",E="architecture",I="console",y="mobile",S="tablet",T="smarttv",A="wearable",w="embedded",b={extend:function(e,t){var i={};for(var n in e)t[n]&&t[n].length%2===0?i[n]=t[n].concat(e[n]):i[n]=e[n];return i},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},R={rgx:function(e,t){for(var i,n,r,o,s,c,l=0;l<t.length&&!s;){var f=t[l],p=t[l+1];for(i=n=0;i<f.length&&!s;)if(s=f[i++].exec(e))for(r=0;r<p.length;r++)c=s[++n],o=p[r],typeof o===d&&o.length>0?2==o.length?typeof o[1]==u?this[o[0]]=o[1].call(this,c):this[o[0]]=o[1]:3==o.length?typeof o[1]!==u||o[1].exec&&o[1].test?this[o[0]]=c?c.replace(o[1],o[2]):a:this[o[0]]=c?o[1].call(this,c,o[2]):a:4==o.length&&(this[o[0]]=c?o[3].call(this,c.replace(o[1],o[2])):a):this[o]=c?c:a;l+=2}},str:function(e,t){for(var i in t)if(typeof t[i]===d&&t[i].length>0){for(var n=0;n<t[i].length;n++)if(b.has(t[i][n],e))return i===c?a:i}else if(b.has(t[i],e))return i===c?a:i;return e}},D={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},O={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,m],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],m],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],m],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[h,m],[/(konqueror)\/([\w\.]+)/i],[[h,"Konqueror"],m],[/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i],[[h,"IE"],m],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[h,"Edge"],m],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],m],[/(Avast)\/([\w\.]+)/i],[[h,"Avast Secure Browser"],m],[/(AVG)\/([\w\.]+)/i],[[h,"AVG Secure Browser"],m],[/(puffin)\/([\w\.]+)/i],[[h,"Puffin"],m],[/(focus)\/([\w\.]+)/i],[[h,"Firefox Focus"],m],[/(opt)\/([\w\.]+)/i],[[h,"Opera Touch"],m],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],m],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],m],[/(windowswechat qbcore)\/([\w\.]+)/i],[[h,"WeChat(Win) Desktop"],m],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],m],[/(brave)\/([\w\.]+)/i],[[h,"Brave"],m],[/(whale)\/([\w\.]+)/i],[[h,"Whale"],m],[/(qqbrowserlite)\/([\w\.]+)/i],[h,m],[/(QQ)\/([\d\.]+)/i],[h,m],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[h,m],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[h,m],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[h,m],[/(MetaSr)[\/\s]?([\w\.]+)/i],[h],[/(LBBROWSER)/i],[h],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[m,[h,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[m,[h,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[h,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[h,m],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[m,[h,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],m],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[h,/(.+(?:g|us))(.+)/,"$1 $2"],m],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[m,[h,"Android Browser"]],[/(coc_coc_browser)\/([\w\.]+)/i],[[h,"Coc Coc"],m],[/(sailfishbrowser)\/([\w\.]+)/i],[[h,"Sailfish Browser"],m],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[h,m],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],m],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[h,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],m],[/(coast)\/([\w\.]+)/i],[[h,"Opera Coast"],m],[/fxios\/([\w\.-]+)/i],[m,[h,"Firefox"]],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[m,[h,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[m,h],[/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i],[[h,"GSA"],m],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[m,R.str,D.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[h,m],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],m],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,m]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[E,"amd64"]],[/(ia32(?=;))/i],[[E,b.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[E,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[E,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[E,/ower/,"",b.lowerize]],[/(sun4\w)[;\)]/i],[[E,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[E,b.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[g,v,[_,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[g,[v,"Apple"],[_,S]],[/(apple\s{0,1}tv)/i],[[g,"Apple TV"],[v,"Apple"],[_,T]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[v,g,[_,S]],[/(kf[A-z]+)(\sbuild\/|\)).+silk\//i],[g,[v,"Amazon"],[_,S]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[g,R.str,D.device.amazon.model],[v,"Amazon"],[_,y]],[/android.+aft([\w])(\sbuild\/|\))/i],[g,[v,"Amazon"],[_,T]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[g,v,[_,y]],[/\((ip[honed|\s\w*]+);/i],[g,[v,"Apple"],[_,y]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[v,g,[_,y]],[/\(bb10;\s(\w+)/i],[g,[v,"BlackBerry"],[_,y]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[g,[v,"Asus"],[_,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[v,"Sony"],[g,"Xperia Tablet"],[_,S]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[g,[v,"Sony"],[_,y]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[v,g,[_,I]],[/android.+;\s(shield)\sbuild/i],[g,[v,"Nvidia"],[_,I]],[/(playstation\s[34portablevi]+)/i],[g,[v,"Sony"],[_,I]],[/(sprint\s(\w+))/i],[[v,R.str,D.device.sprint.vendor],[g,R.str,D.device.sprint.model],[_,y]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[v,[g,/_/g," "],[_,y]],[/(nexus\s9)/i],[g,[v,"HTC"],[_,S]],[/d\/huawei([\w\s-]+)[;\)]/i,/android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i],[g,[v,"Huawei"],[_,y]],[/android.+(bah2?-a?[lw]\d{2})/i],[g,[v,"Huawei"],[_,S]],[/(microsoft);\s(lumia[\s\w]+)/i],[v,g,[_,y]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[g,[v,"Microsoft"],[_,I]],[/(kin\.[onetw]{3})/i],[[g,/\./g," "],[v,"Microsoft"],[_,y]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[g,[v,"Motorola"],[_,y]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[g,[v,"Motorola"],[_,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[v,b.trim],[g,b.trim],[_,T]],[/hbbtv.+maple;(\d+)/i],[[g,/^/,"SmartTV"],[v,"Samsung"],[_,T]],[/\(dtv[\);].+(aquos)/i],[g,[v,"Sharp"],[_,T]],[/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|SM-P587|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[v,"Samsung"],g,[_,S]],[/smart-tv.+(samsung)/i],[v,[_,T],g],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[v,"Samsung"],g,[_,y]],[/sie-(\w*)/i],[g,[v,"Siemens"],[_,y]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[v,"Nokia"],g,[_,y]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[g,[v,"Acer"],[_,S]],[/android.+([vl]k\-?\d{3})\s+build/i],[g,[v,"LG"],[_,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[v,"LG"],g,[_,S]],[/linux;\snetcast.+smarttv/i,/lg\snetcast\.tv-201\d/i],[[v,"LG"],g,[_,T]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[g,[v,"LG"],[_,y]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[v,g,[_,S]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[g,[v,"Lenovo"],[_,S]],[/(lenovo)[_\s-]?([\w-]+)/i],[v,g,[_,y]],[/linux;.+((jolla));/i],[v,g,[_,y]],[/((pebble))app\/[\d\.]+\s/i],[v,g,[_,A]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[v,g,[_,y]],[/crkey/i],[[g,"Chromecast"],[v,"Google"],[_,T]],[/android.+;\s(glass)\s\d/i],[g,[v,"Google"],[_,A]],[/android.+;\s(pixel c)[\s)]/i],[g,[v,"Google"],[_,S]],[/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i],[g,[v,"Google"],[_,y]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i,/android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[g,/_/g," "],[v,"Xiaomi"],[_,y]],[/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i],[[g,/_/g," "],[v,"Xiaomi"],[_,S]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[g,[v,"Meizu"],[_,y]],[/(mz)-([\w-]{2,})/i],[[v,"Meizu"],g,[_,y]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[g,[v,"OnePlus"],[_,y]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[g,[v,"RCA"],[_,S]],[/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i],[g,[v,"Dell"],[_,S]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[g,[v,"Verizon"],[_,S]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(\S(?:.*\S)?)\s+build/i],[[v,"Barnes & Noble"],g,[_,S]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[g,[v,"NuVision"],[_,S]],[/android.+;\s(k88)\sbuild/i],[g,[v,"ZTE"],[_,S]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[g,[v,"Swiss"],[_,y]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[g,[v,"Swiss"],[_,S]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[g,[v,"Zeki"],[_,S]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[v,"Dragon Touch"],g,[_,S]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[g,[v,"Insignia"],[_,S]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[g,[v,"NextBook"],[_,S]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[v,"Voice"],g,[_,y]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[v,"LvTel"],g,[_,y]],[/android.+;\s(PH-1)\s/i],[g,[v,"Essential"],[_,y]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[g,[v,"Envizen"],[_,S]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[v,g,[_,S]],[/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i],[g,[v,"MachSpeed"],[_,S]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[v,g,[_,S]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[g,[v,"Rotor"],[_,S]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[v,g,[_,S]],[/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[g,[_,y]],[/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[g,[_,S]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[_,b.lowerize],v,g],[/[\s\/\(](smart-?tv)[;\)]/i],[[_,T]],[/(android[\w\.\s\-]{0,9});.+build/i],[g,[v,"Generic"]],[/(phone)/i],[[_,y]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[m,[h,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[h,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,m],[/rv\:([\w\.]{1,9}).+(gecko)/i],[m,h]],os:[[/(xbox);\s+xbox\s([^\);]+)/i,/microsoft\s(windows)\s(vista|xp)/i],[h,m],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[m,R.str,D.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[m,R.str,D.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],m],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[h,m],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[h,"Symbian"],m],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],m],[/crkey\/([\d\.]+)/i],[m,[h,"Chromecast"]],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[h,m],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],m],[/(sunos)\s?([\w\.\d]*)/i],[[h,"Solaris"],m],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[h,m],[/(haiku)\s(\w+)/i],[h,m],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[m,/_/g,"."],[h,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[m,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[h,m]]},N=function(e,t){if("object"==typeof e&&(t=e,e=a),!(this instanceof N))return new N(e,t).getResult();var i=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),n=t?b.extend(O,t):O;return this.getBrowser=function(){var e={name:a,version:a};return R.rgx.call(e,i,n.browser),e.major=b.major(e.version),e},this.getCPU=function(){var e={architecture:a};return R.rgx.call(e,i,n.cpu),e},this.getDevice=function(){var e={vendor:a,model:a,type:a};return R.rgx.call(e,i,n.device),e},this.getEngine=function(){var e={name:a,version:a};return R.rgx.call(e,i,n.engine),e},this.getOS=function(){var e={name:a,version:a};return R.rgx.call(e,i,n.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return i},this.setUA=function(e){return i=e,this},this};N.VERSION=o,N.BROWSER={NAME:h,MAJOR:p,VERSION:m},N.CPU={ARCHITECTURE:E},N.DEVICE={MODEL:g,VENDOR:v,TYPE:_,CONSOLE:I,MOBILE:y,SMARTTV:T,TABLET:S,WEARABLE:A,EMBEDDED:w},N.ENGINE={NAME:h,VERSION:m},N.OS={NAME:h,VERSION:m},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=N),t.UAParser=N):(n=function(){return N}.call(t,i,t,e),!(n!==a&&(e.exports=n)))})("object"==typeof window?window:this)}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,i){var n=i(172).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var i=t.value,r=e.browserId,a=e.browserVersion;if(0===i.indexOf(r)){var o=i.substr(r.length);return 0===n(a,o)}return!1}}}),(function(e,t,i){var n=i(2);t.compareVersion=function(e,t){if(!t)return 0;for(var i=t.toString().split("."),r=e.toString().split("."),a=0;a<i.length;a++){if(n.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==i[a])return-1}else{if(Number(r[a])<Number(i[a]))return-1;if(Number(r[a])>Number(i[a]))return 1}}return 0}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(174)),e.registerAudienceMatcher("campaign",i(175))}}),(function(e,t,i){var n=i(119);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return n.getQueryParamValue("utm_campaign")}]}}),(function(e,t,i){var n=i(20);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return n.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,i){e.exports=function(e){e.registerAudienceMatcher("code",i(177))}}),(function(e,t,i){var n=i(2),r=i(144);t.fieldsNeeded=[],t.match=function(e,t){if(n.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(e){return!1}return!1}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(179));var t=i(180);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,i){var n=i(2),r=i(25),a=i(23),o=i(16),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(e){return n.reduce(e,(function(e,t,i){var r=i,o=s.getByApiName(i),c=s.getById(i),u=c;return n.isObject(t)?(!t.id&&o&&(u=o,r=o.id,n.extend(t,{id:u.segmentId||u.id})),t.name||u&&u.apiName&&(t.name=u.apiName),t.id||u||a.warn("Unable to determine ID for custom attribute:",i,"; segmentation is disabled."),e[r]=t,e):(a.error('Unable to restore custom attribute "'+i+'" because value is not an object'),e)}),{})},shouldTrack:!0}}),(function(e,t,i){var n=i(2),r=i(20);t.match=function(e,t){var i;return e.custom&&(i=e.custom[t.name]),n.isObject(i)&&(i=i.value),r.hasMatch(t.value,t.match,i)}}),(function(e,t,i){e.exports=function(e){e.registerDependency("sources/device",i(182)),e.registerVisitorProfileProvider(i(183)),e.registerAudienceMatcher("device",i(184))}}),(function(e,t,i){var n=i(166);t.getDevice=function(){var e=n.get().device;return"unknown"!==e.model?e.model:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(186)),e.registerAudienceMatcher("device_type",i(187))}}),(function(e,t,i){var n=i(166);e.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var e=n.get().device;switch(e.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return e.type;default:return"other"}}]}}),(function(e,t){e.exports={fieldsNeeded:["device_type"],match:function(e,t){return e.device_type===t.value}}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(189)),e.registerAudienceMatcher("location",i(191))}}),(function(e,t,i){var n=i(190);e.exports={provides:"location",isAsync:!0,getter:[function(){return n.getIPDerivedGeolocation()}]}}),(function(e,t,i){function n(){a.addScriptAsync(s)}var r=i(6),a=i(132),o="cdn3";t.getIP=function(){return r.makeAsyncRequest(o,n).then((function(e){return e.ip}))},t.getIPDerivedGeolocation=function(){return r.makeAsyncRequest(o,n).then((function(e){return e.location}))};var s="//cdn3.optimizely.com/js/geo2.js"}),(function(e,t){t.fieldsNeeded=["location"],t.match=function(e,t){if(!e.hasOwnProperty("location"))return!1;var i=e.location,n=t.value,r=n.split("|"),a=(r[0]||"").trim(),o=(r[1]||"").trim(),s=(r[2]||"").trim(),c=(r[3]||"").trim();switch(r.length){case 1:if(i.country===a)return!0;break;case 2:if(i.region===o&&i.country===a)return!0;break;case 3:if(i.city===s&&(i.region===o||""===o)&&i.country===a)return!0;break;case 4:if(i.continent===c)return!0}return!1}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(193)),e.registerAudienceMatcher("referrer",i(194))}}),(function(e,t,i){var n=i(80),r=i(99);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||n.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,i){var n=i(195);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&n(e.referrer,t)}}),(function(e,t,i){function n(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(n(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var i=l.slice(0);t||(i=i.concat(c));for(var n=i.length,r=0;r<n;r++){var a=i[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var i=t[1].split("#"),n=i[0],r=i[1],a=n.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(u)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=i(2);e.exports=function(e,t){e=o(e);var i=t.value;switch(t.match){case"exact":return e=a(e),e===a(i);case"regex":try{return Boolean(e.match(i))}catch(e){}return!1;case"simple":return e=r(e),i=r(i),e===i;case"substring":return e=a(e,!0),i=a(i,!0),e.indexOf(i)!==-1;default:return!1}};var c=["www."],u="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(197)),e.registerAudienceMatcher("source_type",i(199))}}),(function(e,t,i){var n=i(119),r=i(80),a=i(99),o=i(198),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/","https://(www)?\\.google\\..*?/?$","https://search\\.yahoo\\..*?/?$","https://(www)?\\.bing\\..*?/?$"];e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var i=function(){if(n.getQueryParamValue("utm_source")||n.getQueryParamValue("gclid")||n.getQueryParamValue("otm_source"))return"campaign";for(var e=a.getReferrer()||r.getReferrer(),t=0;t<s.length;t++){var i=s[t],c=e.match(i);if(c)return"search"}return e&&o.guessDomain(e)!==o.guessDomain(n.getUrl())?"referral":"direct"},c=function(e,t){return!e||"direct"!==t},u=e(),l=i();c(u,l)&&t(l)}}]}}),(function(e,t){t.guessDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,i){var n=i(20);t.fieldsNeeded=["source_type"],t.match=function(e,t){return n.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,i){e.exports=function(e){e.registerVisitorProfileProvider(i(201)),e.registerVisitorProfileProvider(i(202)),e.registerAudienceMatcher("time_and_day",i(203))}}),(function(e,t,i){var n=i(24);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return n.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,i){var n=i(204);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return n.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,i){function n(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var i=t[2].split(s);return{start_time:t[0],end_time:t[1],days:i}}function r(e){var t=e.split(c);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=i(2),o="_",s=",",c=":";t.test=function(e,t){var i=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=n(e),s=r(o.start_time),c=r(o.end_time),u=60*t.getHours()+t.getMinutes(),l=i[t.getDay()];return u>=s&&u<=c&&a.includes(o.days,l)}}),(function(e,t,i){function n(e){function t(e,t,i){try{c(t),e[i]=t}catch(e){C.emitError(new X("Bad value for eventTags["+i+"]: "+e.message))}return e}var i=N.keys(ie),n=N.omit(e,i),r=N.pick(e,i),a=N.reduce(n,t,{}),o=N.reduce(r,(function(e,i,n){var r=ie[n];r.excludeFeature||t(a,i,n);try{r.validate(i),e[n]=r.sanitize(i),a[n]=e[n]}catch(e){C.emitError(new X("Bad value for eventMetrics["+n+"]: "+e.message))}return e}),{});return o.tags=a,o}function r(e){var t=N.extend({entity_id:e.pageId,key:e.pageApiName,timestamp:e.timestamp,uuid:e.eventId,type:J},n(e.eventTags));return t}function a(e){return N.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},n(e.eventTags))}function o(e){return N.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},n(e.eventTags))}function s(e){return{entity_id:null,type:Q,uuid:e.eventId,timestamp:e.timestamp}}function c(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=x.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function u(e){if(null==e)throw new Error("Metric value is null");if(!N.isNumber(e))throw new Error("Metric value is not numeric")}function l(e){return N.reduce(e,(function(e,t){try{c(t.value),e.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){F.warn("Error evaluating user feature",t,e)}return e}),[])}function d(e,t,i){Y.dispatch(V.REGISTER_TRACKER_EVENT,{event:e,decisions:i}),f(t),R()}function f(e){var t=l(e);Y.dispatch(V.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function p(e){var t=l(e.userFeatures),i={account_id:e.accountId,anonymize_ip:e.anonymizeIP,client_name:e.clientName,client_version:e.clientVersion,project_id:e.projectId,visitors:[{session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:e.layerId,experiment_id:e.experimentId,variation_id:e.variationId,is_campaign_holdback:e.isLayerHoldback}],events:[{uuid:e.decisionId,entity_id:e.layerId,timestamp:e.timestamp,type:$}]}]}]};Y.dispatch(V.REGISTER_PREVIOUS_BATCH,i),R()}function g(e){var t=N.isNull(q.getAnonymizeIP())?void 0:q.getAnonymizeIP(),i={account_id:e.accountId,anonymize_ip:t,client_name:e.clientName,client_version:e.clientVersion,project_id:e.projectId,visitors:[]};i.revision=e.revision,Z&&(i.enrich_decisions=!0);var n={session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:[],snapshots:[]},r=D(e.layerStates);Y.dispatch(V.REGISTER_TRACKER_VISITOR,{data:i,visitor:n,decisions:r}),R()}function h(e){return oe?ae:e}function _(e){var t={entity_id:e.layerId,type:$,uuid:e.decisionId,timestamp:e.timestamp};Y.dispatch(V.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:D(e.layerStates)}),f(e.userFeatures),R()}function v(){if(!W.canSend())return void F.debug("Not sending events (holding)");var e=W.hasEventsToSend(),t=W.hasPreviousBatchesToSend();return e||t?(t&&(N.each(W.getPreviousBatches(),m),Y.dispatch(V.RESET_TRACKER_PREVIOUS_BATCHES)),void(e&&(Y.dispatch(V.FINALIZE_BATCH_SNAPSHOT),m(W.getEventBatch()),Y.dispatch(V.RESET_TRACKER_EVENTS)))):void F.debug("Not sending events because there are no events to send")}function m(e){F.debug("Sending ticket:",e);var t=L.generate();B.retryableRequest({url:P,method:"POST",data:E(e)},t)}function E(e){var t=N.extend({},N.pick(e,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:N.map(e.visitors,I)});return t}function I(e){return{visitor_id:e.visitor_id,session_id:ae,attributes:N.map(e.attributes,y),snapshots:N.map(e.snapshots,S)}}function y(e){return b(e,{entity_id:"e",key:"k",type:"t",value:"v"})}function S(e){var t=e.events;return t=T(t),{activationTimestamp:q.getActivationTimestamp(),decisions:N.map(e.decisions,A),events:N.map(t,w)}}function T(e){var t=N.reduce(e,(function(e,t){var i,n=t.type===J&&N.isEmpty(t.tags)&&N.isEmpty(N.pick(t,N.keys(ie)));if(i=n?t.type:t.uuid,e[i]){var r=e[i].timestamp;t.timestamp>r&&(r=t.timestamp),e[i]=N.extend({},e[i],{key:e[i].key+"-"+(t.key||""),entity_id:e[i].entity_id+"-"+t.entity_id,timestamp:r})}else e[i]=t;return e}),{});return N.values(t)}function A(e){return b(e,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function w(e){return e.key===$&&(e.type=$,delete e.key),b(e,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function b(e,t){return N.reduce(e,(function(e,i,n){return n in t&&(e[t[n]||n]=i),e}),{})}function R(){function e(){var t=!ne||j.isLoaded();t&&v(),W.isPolling()&&G.setTimeout(e,te)}return W.shouldBatch()?void(W.isPolling()||(G.setTimeout(e,te),Y.dispatch(V.SET_TRACKER_POLLING,!0),G.setTimeout((function(){Y.dispatch(V.SET_TRACKER_BATCHING,!1),Y.dispatch(V.SET_TRACKER_POLLING,!1)}),ee))):void v()}function D(e){return N.map(e,(function(e){return{campaign_id:e.layerId,experiment_id:e.decision.experimentId,variation_id:e.decision.variationId,is_campaign_holdback:e.decision.isLayerHoldback}}))}function O(){var e=W.getPersistableState();if(e)try{F.debug("Persisting pending batch:",e),U.persistTrackerOptimizelyData(e),Y.dispatch(V.SET_TRACKER_DIRTY,!1)}catch(e){F.debug("Failed to persist pending batch:",e)}}var N=i(2),C=i(86),L=i(5),P="https://logx.optimizely.com/v1/events",V=i(7),k=i(76).create,x=i(26),F=i(23),M=i(115),U=i(74),G=i(40),B=i(91),z=i(16),j=i(80),H=i(87),K=i(111),Y=i(9),q=z.get("stores/global"),W=z.get("stores/tracker_optimizely"),X=t.Error=k("OptimizelyTrackerError"),Q="client_activation",$="campaign_activated",J="view_activated",Z=!0,ee=1e4,te=1e3,ie={revenue:{validate:u,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:u,sanitize:Math.floor,excludeFeature:!0},value:{validate:u,sanitize:N.identity}},ne=!1,re=!1,ae="AUTO",oe=!0,se=function(e){e.timing===M.TrackLayerDecisionTimingFlags.postRedirectPolicy?p(e):_(e)},ce=[function(){return function(e){d(r(e),e.userFeatures,D(e.layerStates))}}],ue=[function(){return function(e){g(e),d(s(e),e.userFeatures,D(e.layerStates))}}],le=[function(){return function(e){d(o(e),e.userFeatures,D(e.layerStates))}}],de=[function(){return function(e){d(a(e),e.userFeatures,D(e.layerStates))}}],fe={trackLayerDecision:se,postRedirectPolicy:M.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:M.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:ce,onClientActivation:ue,onClickEvent:de,onCustomEvent:le};e.exports=function(e){e.registerAnalyticsTracker("optimizely",fe),H.on({filter:{type:K.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){Y.dispatch(V.SET_TRACKER_SEND_EVENTS,!0),W.isPolling()||v()}}),H.on({filter:{type:K.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){Y.dispatch(V.SET_TRACKER_SEND_EVENTS,!1)}}),Y.dispatch(V.SET_TRACKER_SEND_EVENTS,!re);var t=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(O),H.off(t)}})}}),(function(e,t,i){e.exports=function(e){e.registerViewProvider(i(207)),e.registerViewMatcher("url",i(208))}}),(function(e,t,i){var n=i(119);e.exports={provides:"url",getter:[function(){return n.getUrl()}]}}),(function(e,t,i){var n=i(195);e.exports={fieldsNeeded:["url"],match:function(e,t){return n(e.url,t)}}}),(function(e,t,i){var n=i(144),r="custom_code",a={match:function(e,t){return n.apply(t.value)}};e.exports=function(e){e.registerViewMatcher(r,a)}}),(function(e,t,i){var n=i(125).enums.locatorType;e.exports=function(e){e.registerViewTagLocator(n.CSS_SELECTOR,i(211))}}),(function(e,t,i){var n=i(126).nodeNames,r=i(212);e.exports=function(e){var t,i=e.locator,a=document.querySelectorAll(i);if(a.length>0){var o=a[0];switch(o.nodeName){case n.INPUT:t=o.value.trim();break;case n.SELECT:t=o.value.trim();break;default:var s=a[0].innerText||a[0].textContent;t=s.trim().replace(/\s+/g," ")}}return r(e.valueType,t)}}),(function(e,t,i){function n(e,t,i){var n=new RegExp("^\\s*([+-]?)\\s*((\\d+)((?:\\"+t+"\\d{3})+)?)(?:\\"+i+"(\\d+))?\\s*$"),r=e.match(n);if(!r)return NaN;var a=r[3],o=r[4],s=r[5];if(o&&!s&&a.length>3&&4===o.length||!o&&a.length<=3&&s&&3===s.length)return NaN;var c=r[1],u=r[2].replace(new RegExp("\\"+t,"g"),"");return Number(c+u+(s?"."+s:""));
}function r(e){e=String(e);var t=n(e,",",".");return isNaN(t)&&(t=n(e,".",",")),t}var a=i(126),o=i(127).Error;e.exports=function(e,t){var i;switch(e){case a.valueType.STRING:return t?String(t):"";case a.valueType.NUMBER:if(i=r(t),isNaN(i))throw new o('"'+t+'" cannot be parsed as a number');return i;case a.valueType.CURRENCY:if(i=String(t).replace(/^[^\d\,\.\-]*/g,"").replace(/[^\d\,\.\-]*$/g,""),i=r(i),isNaN(i))throw new o('"'+t+'" cannot be parsed as currency');return Math.round(100*i)}throw new o("Unknown ViewTag type: "+e)}}),(function(e,t,i){function n(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=i(110),a=i(214),o=i(23),s=i(123);e.exports=function(e){var t=new a(function(e){s.updateAllViewTags();var t=r.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+n(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+n(e)+"):",e)}})}}),(function(e,t,i){function n(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=a.bind((function(e){a.forEach(this.events,a.bind((function(t){try{var i=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,i,t)&&this.handler(t)}catch(e){o.emitError(new l("Unable to handle click for selector"+i+":"+e.message))}}),this))}),this)}function r(e,t,i){for(var n=e.target,r=0;n;){var s;try{s=u(n,t)}catch(s){var c={typeofElementValue:typeof n,nodeName:a.result(n,["nodeName"],null),nodeType:a.result(n,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:s.message,eventId:i.id};return o.emitError(new l("Unable to evaluate match for element"),c),!1}if(s)return!0;n=n.parentElement,r++}return!1}var a=i(2),o=i(86),s=i(76).create,c=i(80),u=i(215),l=t.Error=s("ClickDelegateError");n.prototype.listen=function(){this.unlistenFn=c.addEventListener("click",this.clickHandler,!0)},n.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},n.prototype.hasEvents=function(){return this.events.length>0},n.prototype.addEvent=function(e){this.events.push(e)},n.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=n}),(function(e,t,i){e.exports=i(216)}),(function(e,t){"use strict";function i(e,t){if(r)return r.call(e,t);for(var i=e.parentNode.querySelectorAll(t),n=0;n<i.length;n++)if(i[n]==e)return!0;return!1}var n=Element.prototype,r=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;e.exports=i}),(function(e,t,i){e.exports=function(e){e.registerApiModule("recommender",i(218))}}),(function(e,t,i){function n(e){return e===A.SELF_CONTAINED_MULTI_COL}function r(e){return e===A.SEPARATE_CATALOG_SINGLE_COL}function a(e,t){if(!n(t))return b in e?I.parse(e[b]):(y.warn('recommender / Expected key "'+b+'" not found'),[]);var i=new RegExp("^"+R+"(\\d+)$"),r=E.reduce(e,(function(t,n,r){var a=r.match(i);if(a){var o=I.parse(e[r]);o&&E.isObject(o)&&(t[a[1]]=o)}return t}),[]);return E.filter(r,(function(e){return!E.isUndefined(e)}))}function o(e,t){return[e,encodeURIComponent(t)].join("/")}function s(e,t){var i=function(e,t,i){if(!E.isArray(e)||E.isEmpty(e))throw new Error("No "+i+"s available");var n;if(t){if(n=E.find(e,{id:t}),!n)throw new Error("No "+i+" found with specified id "+t)}else{if(e.length>1)throw new Error("No "+i+" id specified when there are more than one available.");n=e[0]}return n},n=e.getRecommenderServices(),r=i(n,t&&t.recommenderServiceId,"recommender service");r.idTagName||(r.idTagName="id");var a=i(r.recommenders,t&&t.recommenderId,"recommender");return{recommenderService:r,recommender:a}}function c(e){var t=I.parse(e);return t.data}function u(e,t){return T.request({url:o(e,t)}).then((function(e){var t=c(e.response),i={};return w in t&&(i=I.parse(t[w])),i}))}function l(e,t,i,n){var s=!(!n||!n.fetchWithMetadata),u=n&&n.overrideServingUrl||t.servingUrl;return T.request({url:o(u,i)}).then((function(t){var i=[],o=c(t.response);return i=a(o,e.serviceVersion),s&&r(e.serviceVersion)?d(e,E.map(i,e.idTagName),n).then((function(e){return e=E.map(e,(function(e){return e instanceof Error&&(e={}),delete e["__proto__"],e})),E.merge(i,e)})):i}))}function d(e,t,i){var n=i&&i.overrideCatalogUrl||e.catalogUrl;return E.isString(t)?u(n,t):S.all(E.map(t,(function(e){return u(n,e)["catch"]((function(t){return y.warn("recommender / Failed to get recommendations for item:",e,t),t}))})))}function f(e,t,i){var n=s(e,i),r=n.recommenderService,a=n.recommender;return l(r,a,t,{overrideServingUrl:i&&i.overrideServingUrl,overrideCatalogUrl:i&&i.overrideCatalogUrl,fetchWithMetadata:!0})}function p(e,t,i){var n=s(e,i),a=n.recommenderService,o=n.recommender;if(!r(a.serviceVersion))throw new Error("Recommender service "+a.id+" serves self-contained recos. Use `fetchRecommendations` API call");return l(a,o,t,{overrideServingUrl:i&&i.overrideServingUrl,fetchWithMetadata:!1})}function g(e,t,i){var n=s(e,i),a=n.recommenderService;if(!r(a.serviceVersion))throw new Error("Recommender service "+a.id+" serves self-contained recos. Use `fetchRecommendations` API call");return E.isArray(t)&&t.length>D?S.reject("Cannot fetch more than "+D+" items"):d(a,t,i)}function h(e,t,i,n){return new _(e,t,i,n)}function _(e,t,i,n){this.recommenderSettings=t;var r=s(e,t);this.recommenderService=r.recommenderService,this.recommender=r.recommender,this.targetId=i,n&&(this.preFilter=n.preFilter,this.canonicalize=n.canonicalize,this.postFilter=n.postFilter),this._globalStore=e,this.reset()}function v(){var e={recosNoMeta:[],recosNoMetaOffset:0,recos:[],recosOffset:0};return y.debug("recommender / fetching recommended items for",this.targetId,"from recommender",this.recommender.id),r(this.recommenderService.serviceVersion)?p(this._globalStore,this.targetId,this.recommenderSettings).then(E.bind((function(t){return e.recosNoMeta=E.filter(t,this.preFilter),e}),this)):f(this._globalStore,this.targetId,this.recommenderSettings).then(E.bind((function(t){return e.recos=E(t).filter(this.preFilter).map(this.canonicalize).filter(this.postFilter).value(),e}),this))}function m(e){var t=e.numNeeded,i=e.buffer,n=i.recosNoMeta.length-i.recosNoMetaOffset;if(t<=0||n<=0)return S.resolve(e);var r=5,a=Math.max(t,r),o=E.slice(i.recosNoMeta,i.recosNoMetaOffset,i.recosNoMetaOffset+a),s=E.map(o,this.recommenderService.idTagName);i.recosNoMetaOffset+=s.length;var c=e.recosSoFar;return y.debug("recommender / fetching metadata for",s,"from recommender",this.recommender.id),g(this._globalStore,s,this.recommenderSettings).then(E.bind((function(n){n=E.map(n,(function(e){return e instanceof Error?{}:e})),i.recos=E(o).merge(n).map(this.canonicalize).filter(this.postFilter).value();var r=E.slice(i.recos,0,t);return i.recosOffset=r.length,e.recosSoFar=c.concat(r),e.numNeeded-=r.length,e.numNeeded>0?m.call(this,e):e}),this))}var E=i(2),I=i(26),y=i(23),S=i(12).Promise,T=i(91),A={SELF_CONTAINED_MULTI_COL:1,SEPARATE_CATALOG_SINGLE_COL:2},w="itemMetadata",b="recos",R="reco",D=20;_.prototype.reset=function(){this._bufferPromise=null},_.prototype.next=function(e){var t=Math.floor(E.isNumber(e)?e:1);if(t<=0)throw new Error("Invalid argument "+e+". Must be positive integer");this._bufferPromise||(this._bufferPromise=v.call(this));var i=this._bufferPromise.then(E.bind((function(e){var i=[],n=e.recos.length-e.recosOffset;return n>0&&(i=e.recos.slice(e.recosOffset,e.recosOffset+t),e.recosOffset+=i.length,t-=i.length),t<=0?{result:i,buffer:e}:m.call(this,{buffer:e,recosSoFar:i,numNeeded:t}).then((function(e){return{result:e.recosSoFar,buffer:e.buffer}}))}),this));return this._bufferPromise=i.then((function(e){return e.buffer})),i.then((function(e){return e.result}))},e.exports=["stores/global",function(e){return{fetchRecommendations:E.partial(f,e),fetchRecommendedItems:E.partial(p,e),fetchItemMetadata:E.partial(g,e),getRecommendationsFetcher:E.partial(h,e)}}]}),(function(e,t,i){function n(e,t){if(this.change=e,this.identifier=t.identifier,this.startTime=t.startTime,d.shouldObserveChangesIndefinitely()){g.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new _(E.MOVING_WINDOW_MILLISECONDS);var i=r.isNull(E.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:E.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(i,r.bind((function(){h.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),g.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new I("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:E.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:i})}),this));for(var n=Math.min(i,50),s=0;s<=n;s++)this.rateMeter.addListener(s,r.partial((function(e){g.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}}var r=i(2),a=i(7),o=i(86),s=i(137),c=i(76).create,u=i(220),l=i(221),d=i(16).get("stores/directive"),f=i(80),p=i(222),g=i(9),h=i(23),_=i(223),v=i(136),m=i(100).create(),E={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},I=c("ChangeOverheatError");n.prototype.numberOfRootNodes=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes.length},n.prototype.getSiblingElements=function(e,t,i){for(var n=e,r=[],a=0;a<t;a++)i?(r.push(n.nextSibling),n=n.nextSibling):(r.push(n.previousSibling),n=n.previousSibling);return r},n.prototype.apply=function(){this.applyDeferred=l();try{var e=this.numberOfRootNodes(this.change.value);if(!e)throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),i={};d.shouldObserveChangesUntilTimeout()?i={timeout:r.partial(v.isTimedOut,this.startTime),onTimeout:t}:d.isEditor()&&m.waitUntil(r.partial(v.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=m.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),i);var n=f.querySelectorAll(this.change.selector);r.each(n,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},n.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return h.debug("Not applying AppendChange to element",e,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var i=r.bind(this.applyOrReapplyToElement,this,e,t);i(),this.applyDeferred.resolve()},n.prototype.applyOrReapplyToElement=function(e,t){var i;switch(this.change.operator){case p.DOMInsertionType.AFTER:i=p.insertAdjacentHTMLType.AFTER_END;break;case p.DOMInsertionType.APPEND:i=p.insertAdjacentHTMLType.BEFORE_END;break;case p.DOMInsertionType.BEFORE:i=p.insertAdjacentHTMLType.BEFORE_BEGIN;break;case p.DOMInsertionType.PREPEND:i=p.insertAdjacentHTMLType.AFTER_BEGIN;break;default:i=p.insertAdjacentHTMLType.BEFORE_END}e.insertAdjacentHTML(i,this.change.value),e.setAttribute(t,""),u.setData(e,this.change.id,this.identifier,[]);var n,a,o=this.numberOfRootNodes(this.change.value)-1;i===p.insertAdjacentHTMLType.BEFORE_END?(n=e.lastChild,a=this.getSiblingElements(n,o,!1)):i===p.insertAdjacentHTMLType.AFTER_BEGIN?(n=e.firstChild,a=this.getSiblingElements(n,o,!0)):i===p.insertAdjacentHTMLType.BEFORE_BEGIN?(n=e.previousSibling,a=this.getSiblingElements(n,o,!1)):i===p.insertAdjacentHTMLType.AFTER_END&&(n=e.nextSibling,a=this.getSiblingElements(n,o,!0)),a.unshift(n),r.each(a,r.bind((function(e){var i=e.nodeType===Node.ELEMENT_NODE?e:f.parentElement(e);i.setAttribute(t,"");var n=u.getData(i,this.change.id,this.identifier)||[];n.push(e),u.setData(i,this.change.id,this.identifier,n),r.each(f.childrenOf(i),(function(e){e.setAttribute(t,"")}))}),this))},n.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},e.exports=function(e){e.registerChangeApplier(p.changeType.APPEND,n)}}),(function(e,t,i){function n(e,t){return[e,t].join("_")}var r=i(2),a=i(137).CHANGE_DATA_KEY;t.getData=function(e,t,i){var r=n(t,i);return e[a]&&e[a][r]?e[a][r]:null},t.hasData=function(e){return Boolean(e&&e[a]&&!r.isEmpty(e[a]))},t.removeData=function(e,t,i){e[a]&&delete e[a][n(t,i)]},t.setData=function(e,t,i,r){if("object"!=typeof r)throw new Error("setData expects an object");e[a]||(e[a]={}),e[a][n(t,i)]=r}}),(function(e,t,i){var n=i(2),r=i(12).Promise,a=function(){var e,t,i=new r(function(i,n){e=i,t=n});return i.resolve=function(){return e.apply(null,n.toArray(arguments)),i},i.reject=function(){return t.apply(null,n.toArray(arguments)),i},i};e.exports=a}),(function(e,t,i){var n=i(8);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:n({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:n({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,i){function n(e){this.windowLength=e,this.count=0,this.listeners={},this.isIncrementingTick=!1}var r=i(2),a=i(23),o=i(40);n.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(r.bind((function(){this.isIncrementingTick=!1}),this),0))},n.prototype.increment=function(){this.count+=1,r.forEach(this.listeners[String(this.count)],(function(e){e()})),o.setTimeout(r.bind(this.decrement,this),this.windowLength)},n.prototype.decrement=function(){this.count-=1,this.count<0&&(a.warn("Decremented down to negative count: ",this.count),this.count=0)},n.prototype.addListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.exports=n}),(function(e,t,i){function n(e,t){if(this.change=r.cloneDeep(e),this.change=I.transformVisibilityAttributesToCSS(this.change),this.identifier=t.identifier,this.startTime=t.startTime,this.disconnectObserverQueue=[],d.shouldObserveChangesIndefinitely()){g.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new v(T.MOVING_WINDOW_MILLISECONDS);var i=r.isNull(T.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:T.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(i,r.bind((function(){h.warn("AttributeChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),g.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new w("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:T.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:i})}),this));for(var n=Math.min(i,50),s=0;s<=n;s++)this.rateMeter.addListener(s,r.partial((function(e){g.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}this.cancelled=!1}var r=i(2),a=(i(12).Promise,i(7)),o=i(86),s=i(137),c=i(76).create,u=i(220),l=i(221),d=i(16).get("stores/directive"),f=i(80),p=i(222),g=i(9),h=i(23),_=i(225),v=i(223),m=i(136),E=i(40),I=i(226),y=i(100).create(),S={attributes:!0,childList:!0,subtree:!0,characterData:!0},T={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},A=!1,w=c("ChangeOverheatError");n.prototype.apply=function(){this.applyDeferred=l();try{if(r.isEmpty(this.change.attributes)&&r.isEmpty(this.change.css))return h.debug("Not applying empty AttributeChange"),this.applyDeferred.resolve(),this.applyDeferred;var e=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),t={};d.shouldObserveChangesUntilTimeout()?t={timeout:r.partial(m.isTimedOut,this.startTime),onTimeout:e}:d.isEditor()&&y.waitUntil(r.partial(m.isTimedOut,this.startTime)).then(e,e),this.unobserveSelector=y.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),t);var i=f.querySelectorAll(this.change.selector);r.each(i,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},n.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return h.debug("AttributeChange not being applied. Element already changed, or is a child of an element that was changed by this AttributeChange. "+e),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var i=r.bind(this.applyOrReapplyToElement,this,e,t);if(i(),A){var n=r.bind((function(){var t=r.bind((function(){this.cancelled||_.observe(a,e,S)}),this);E.setTimeout(t)}),this),a=_.create(r.bind((function(){this.rateMeter&&this.rateMeter.countCurrentTick(),a.disconnect(),i(),n()}),this));n(),this.disconnectObserverQueue.push(r.bind(a.disconnect,a))}this.applyDeferred.resolve()},n.prototype.applyOrReapplyToElement=function(e,t){var i={};r.forOwn(this.change.attributes,(function(n,a){switch(a){case p.selectorChangeType.CLASS:r.isUndefined(e.className)||(i[p.selectorChangeType.CLASS]=e.className,e.className=n);break;case p.selectorChangeType.HREF:r.isUndefined(e.href)||(i[p.selectorChangeType.HREF]=e.href,e.href=n);break;case p.selectorChangeType.HTML:r.isUndefined(e.innerHTML)||(i[p.selectorChangeType.HTML]=e.innerHTML,e.innerHTML=n,r.each(f.childrenOf(e),(function(e){e.setAttribute(t,"")})));break;case p.selectorChangeType.SRC:r.isUndefined(e.src)||(i[p.selectorChangeType.SRC]=e.src,e.src=n);break;case p.selectorChangeType.STYLE:break;case p.selectorChangeType.TEXT:r.isUndefined(e.textContent)||(i[p.selectorChangeType.TEXT]=e.textContent,e.textContent=n);break;default:throw new Error("Unrecognized attribute: "+a)}}));var n=I.createStylesFromChange(e.style.cssText,this.change);r.isString(n)&&(i[p.selectorChangeType.STYLE]=e.style.cssText,e.style.cssText=n),e.setAttribute(t,""),u.setData(e,this.change.id,this.identifier,i)},n.prototype.cancel=function(){this.cancelled=!0,this.unobserveSelector&&this.unobserveSelector(),r.each(this.disconnectObserverQueue,(function(e){try{e()}catch(e){}}))},e.exports=function(e){e.registerChangeApplier(p.changeType.ATTRIBUTE,n)}}),(function(e,t){t.create=function(e){return new MutationObserver(e)},t.observe=function(e,t,i){e.observe(t,i)}}),(function(e,t,i){var n=i(2),r=i(222);t.transformVisibilityAttributesToCSS=function(e){if(!e.attributes)return e;if(e.attributes[r.selectorChangeType.HIDE]||e.attributes[r.selectorChangeType.REMOVE]){var t=n.extend({css:{}},n.cloneDeep(e));return e.attributes[r.selectorChangeType.HIDE]&&(t.css.visibility="hidden",delete t.attributes[r.selectorChangeType.HIDE]),e.attributes[r.selectorChangeType.REMOVE]&&(t.css.display="none",delete t.attributes[r.selectorChangeType.REMOVE]),t}return e},t.createStylesFromChange=function(e,t){if(n.isEmpty(t.css))return t.attributes.style;var i="",r=t.attributes.style||"";return n.each(t.css,(function(e,t){var n=new RegExp(t+"\\s?:");n.test(r)||(i+=t+":"+e+";")})),n.isUndefined(t.attributes.style)?(e||"")+i:i+r}}),(function(e,t,i){function n(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=i(2),a=i(221),o=i(222),s=i(144);n.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,n)}}),(function(e,t,i){var n=i(141),r=i(142).DecisionError,a="single_experiment",o="multivariate",s={selectExperiment:function(e,t,i){if(e.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var a=e.experiments[0];if(!n.isValidExperiment(t,a))throw new r('Audience conditions failed for experiment: "'+a.id+'".');return a}};e.exports=function(e){e.registerDecider(a,s),e.registerDecider(o,s)}})]);