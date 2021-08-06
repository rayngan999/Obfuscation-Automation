(function () {
  var scheme = (("https:" == document.location.protocol) ? "https" : "http");
  var adnxs_domain = 'secure.adnxs.com';
  var aol_domain = 'secure.leadback.advertising.com';
  window.adroll_seg_eid = "H7OKD7XRINCSJKLQQLRV5R";
  var rule = ["*", "*"];
  if (scheme=='http') { adnxs_domain = 'ib.adnxs.com'; aol_domain = 'leadback.advertising.com';}
  var el = document.createElement("div");
  el.style["width"] = "1px";
  el.style["height"] = "1px";
  el.style["display"] = "inline";
  el.style["position"] = "absolute";
  var cm_urls = ["/cm/r/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/b/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/x/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/l/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/o/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/g/out?advertisable=REO56IR5KVEUPEVQMS4MWM&google_nid=adroll5"];
  var img_tag = '<img height="1" width="1" style="border-style:none;" alt="" src="{}"/>\n';
  var content = '';
  for(var i = 0; i < cm_urls.length; i++) {
    content += img_tag.replace("{}", __adroll._srv(cm_urls[i]));
  }

  if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','//connect.facebook.net/en_US/fbevents.js');
  }

  try {
      try {
          
(function() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (window === window.top && ua.indexOf('safari') !== -1 && ua.indexOf('chrome') === -1 && ua.indexOf('crios') === -1) {
    window.document.body.className += ' adroll_safari_light_theme';
    var b = window.document.createElement('script');
    b.language = 'javascript';
    b.src = '//d.adroll.com/bounce/pre/REO56IR5KVEUPEVQMS4MWM/NRDVN7Z6ERAPTOX3FEW47J/?d=' + encodeURIComponent('//s.adroll.com/j/bounce.js');
    window.__adroll._head().appendChild(b);
  }
})();

      } catch(e) {}
      try {
          
(function() {
var rtb = document.createElement("div");
rtb.style["width"] = "1px";
rtb.style["height"] = "1px";
rtb.style["display"] = "inline";
rtb.style["position"] = "absolute";
rtb.innerHTML = ["/cm/index/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/n/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/onevideo/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/outbrain/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/pubmatic/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/r/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/taboola/out?advertisable=REO56IR5KVEUPEVQMS4MWM","/cm/triplelift/out?advertisable=REO56IR5KVEUPEVQMS4MWM"].reduce(function (acc, cmURL) {
    return acc + '<img height="1" width="1" style="border-style:none;" alt="" src="' + __adroll._srv(cmURL) + '"/>';
}, '');
__adroll._head().appendChild(rtb);
})();

      } catch(e) {}
      try {
          
(function(){
    var scr = document.createElement("script");
    scr.type = "text/javascript";
    scr.src = "//s.adroll.com/j/sendrolling.js";
    ((document.getElementsByTagName("head") || [null])[0] || document.getElementsByTagName("script")[0].parentNode).appendChild(scr);
}());

      } catch(e) {}
      try {
          
(function(){
  if (__adroll.consent_allowed(__adroll.consent_networks.linkedin)) {
    if (__adroll._has_global('adroll_segments')) {

      if (__adroll._global('adroll_segments') === '07a81e74') {
        var conversion_tag = document.createElement("img");

        conversion_tag.setAttribute('height', '1');
        conversion_tag.setAttribute('width', '1');
        conversion_tag.setAttribute('style', 'display:none;');
        conversion_tag.setAttribute('alt', '');
        conversion_tag.setAttribute('src', 'https://px.ads.linkedin.com/collect/?pid=1588921&conversionId=3058484&fmt=gif');

        document.body.appendChild(conversion_tag);
      }


      if (__adroll._global('adroll_segments') === 'dddb2b17') {
        var conversion_tag = document.createElement("img");

        conversion_tag.setAttribute('height', '1');
        conversion_tag.setAttribute('width', '1');
        conversion_tag.setAttribute('style', 'display:none;');
        conversion_tag.setAttribute('alt', '');
        conversion_tag.setAttribute('src', 'https://px.ads.linkedin.com/collect/?pid=1588921&conversionId=1570633&fmt=gif');

        document.body.appendChild(conversion_tag);
      }


      if (__adroll._global('adroll_segments') === '42fc3302') {
        var conversion_tag = document.createElement("img");

        conversion_tag.setAttribute('height', '1');
        conversion_tag.setAttribute('width', '1');
        conversion_tag.setAttribute('style', 'display:none;');
        conversion_tag.setAttribute('alt', '');
        conversion_tag.setAttribute('src', 'https://px.ads.linkedin.com/collect/?pid=1588921&conversionId=1570625&fmt=gif');

        document.body.appendChild(conversion_tag);
      }


      if (__adroll._global('adroll_segments') === '1ce800d7') {
        var conversion_tag = document.createElement("img");

        conversion_tag.setAttribute('height', '1');
        conversion_tag.setAttribute('width', '1');
        conversion_tag.setAttribute('style', 'display:none;');
        conversion_tag.setAttribute('alt', '');
        conversion_tag.setAttribute('src', 'https://px.ads.linkedin.com/collect/?pid=1588921&conversionId=1705577&fmt=gif');

        document.body.appendChild(conversion_tag);
      }

    }
  }
})();

      } catch(e) {}
      try {
          
(function(d) {
    var ca = d.cookie.split(';');
    var cn = "_mkto_trk=";
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(cn) == 0) {
            l = "<img height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"[protocol]://d.adroll.com/cm/mk/REO56IR5KVEUPEVQMS4MWM/in?id=[mk_id]\"/>";
            l = l.replace(/\[protocol\]/gi, ("https:" == d.location.protocol) ? "https" : "http");
            l = l.replace(/\[mk_id\]/gi, escape(c.substring(cn.length,c.length)));
            d.createElement("div").innerHTML = l;
        }
    }
})(document);


      } catch(e) {}
      try {
          (function () {
    "use strict";
    var SITE_PERSONALIZATION_CB = "onB2BPersonalizationDataReady";
    var RW_GA_EVENT = "rw_personalization_data";
    var GA_ID = "";
    
    function getPersonalizationData(onPersonalizationDataReady) {
        __adroll._b2bPersonalizationDataCb = onPersonalizationDataReady;
        __adroll.add_script_element(
            __adroll._srv("/user_attrs?advertisable_eid=REO56IR5KVEUPEVQMS4MWM&keys_eid=THKASEXZOJDW5JRNDH8ATK&first_party=false&jsonp=__adroll._b2bPersonalizationDataCb")
        );
    }
    getPersonalizationData(function(personalizationDataResponse) {
        
        function runPersonalizationCallback(personalizationData) {
            setTimeout(function () {
                __adroll._global(SITE_PERSONALIZATION_CB)(personalizationData);
            });
        }
        
        function configureSitePersonalizationCallback(personalizationData) {
            if (!__adroll._has_global(SITE_PERSONALIZATION_CB)) {
                Object.defineProperty(window, SITE_PERSONALIZATION_CB, {
                    configurable: true,
                    set: function (cb) {
                        __adroll._unset_global(SITE_PERSONALIZATION_CB);
                        __adroll._set_global(SITE_PERSONALIZATION_CB, cb);
                        runPersonalizationCallback(personalizationData);
                    }
                });
            } else {
                runPersonalizationCallback(personalizationData);
            }
        }
        
        function getDataLayerPersonalizationData(personalizationData) {
            return {
                rwCompanyDomain: personalizationData["domain"],
                rwCompanyName: personalizationData["company_name"],
                rwCompanyIndustry: personalizationData["company_industry"],
                rwCompanyRevenue: personalizationData["company_revenue"],
                rwCompanySize: personalizationData["company_size"]
            }
        }
        
        function configureGoogleAnalytics(personalizationData) {
            __adroll._ensure_global("dataLayer", []);
            function gtag(){__adroll._global("dataLayer").push(arguments);}
            gtag("config", GA_ID, {
                "send_page_view": false,
                "custom_map": {
                    "dimension1": "rwCompanyDomain",
                    "dimension2": "rwCompanyName",
                    "dimension3": "rwCompanyIndustry",
                    "dimension4": "rwCompanyRevenue",
                    "dimension5": "rwCompanySize"
                },
            });
            gtag("event", RW_GA_EVENT, personalizationData);
        }
        
        function configureGoogleTagManager(personalizationData) {
            __adroll._ensure_global("dataLayer", []);
            const dataLayerPersonalizationData = getDataLayerPersonalizationData(personalizationData);
            dataLayerPersonalizationData["event"] = RW_GA_EVENT;
            const dataLayer = __adroll._global("dataLayer");
            if (dataLayer.constructor === Array) {
                dataLayer.push(dataLayerPersonalizationData);
            }
        }
        var personalizationData = personalizationDataResponse.user_attributes;
        if (Object.keys(personalizationData).length > 0) {
            configureSitePersonalizationCallback(personalizationData);
            if (GA_ID) {
                configureGoogleAnalytics(personalizationData);
            } else {
                configureGoogleTagManager(personalizationData);
            }
        }
    });
})();

      } catch(e) {}
      try {
          if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
    var fbLimitedDataUse = true;
    if(typeof __adroll.fb === 'undefined'){
    if (fbLimitedDataUse) {
        fbq('dataProcessingOptions', ['LDU'], 0, 0);
    }
    fbq('init', '1800903993518561');
    fbq('set', 'autoConfig', 'false', '1800903993518561');
    __adroll.fb=true;

    var __fbcd = {segment_eid: "H7OKD7XRINCSJKLQQLRV5R"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "PageView", __fbcd);
    } else {
    var __fbcd = {event: "EventSegment", segment_eid: "H7OKD7XRINCSJKLQQLRV5R"};
    for (var prop in __adroll.get_external_data()){
        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
    }

    fbq('track', "CustomEvent", __fbcd);
    }
}

      } catch(e) {}
  } catch(e) {}

  var r = Math.random()*10000000000000000;
  content = content.replace(/\[ord\]/gi, r);
  content = content.replace(/\[protocol\]/gi, scheme);
  content = content.replace(/\[adnxs_domain\]/gi, adnxs_domain);
  content = content.replace(/\[aol_domain\]/gi, aol_domain);
  var adroll_tpc = __adroll._global('adroll_tpc');
  if (adroll_tpc) {
    var srv_parts = __adroll._srv().split('?');
    var srv_host = srv_parts[0].substr(srv_parts[0].indexOf(':') + 1);
    var srv_re = new RegExp(srv_host + '([^\?\"\'\>\#\S]+)\\?*', 'gi');
    content = content.replace(srv_re, srv_host + '$1?' + srv_parts[1] + '&');
  }
  content = __adroll.replace_external_data(content);
  el.innerHTML = content;
  __adroll._head().appendChild(el);
  if (typeof __adroll.set_pixel_cookie != 'undefined') {__adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id, "H7OKD7XRINCSJKLQQLRV5R");}
}());
