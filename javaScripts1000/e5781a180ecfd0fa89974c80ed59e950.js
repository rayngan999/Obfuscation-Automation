const siteConfigData = window.gfrM.siteConfig;
const custParam = getCustomParams();

let current_datetime = new Date();
window.gfrM.siteConfig.initialLoad = {
  date: current_datetime.toLocaleString(),
  timestamp: current_datetime.getTime()
};

window.gfrM.gfrMLog = window.gfrM.gfrMLog || [];
gfrMSetLog(
  "site-config.js",
  "Setting site-config",
  "SiteConfig",
  "Extend config"
);

window.gfrM.siteConfig.videoPreAd = setVideoPreAd();
window.gfrM.siteConfig.videoOvrAd = setVideoOvrAd();
window.gfrM.siteConfig.screenContext = getContext(
  document.documentElement.clientWidth
);

function gfrMSetLog(title, description, category = "", action = "") {
  var tmpDate = new Date();
  window.gfrM.gfrMLog.push({
    date: tmpDate.toLocaleString(),
    timestamp: tmpDate.getTime(),
    title: title,
    description: description,
    category: category,
    action: action
  });
}

function getContext(screenWidth = 0) {
  const { movil, tablet } = { movil: 767, tablet: 999 };
  let type = "web";
  if (screenWidth > 0 && screenWidth <= movil) {
    type = "movil";
  } else if (screenWidth > movil && screenWidth <= tablet) {
    type = "tablet";
  }
  return type;
}

function getCustomParams() {
  return "&cust_params=".concat(
    siteConfigData.contentId !== undefined
      ? `contentId%3D${siteConfigData.contentId}`
      : "",
    siteConfigData.contentType !== undefined
      ? `%26contentType%3D${siteConfigData.contentType}`
      : "",
    siteConfigData.section !== undefined
      ? `%26section%3D${siteConfigData.section}`
      : "",
    siteConfigData.adPromo !== undefined
      ? `%26AdPromo%3D${siteConfigData.adPromo}`
      : ""
  );
}

function setVideoPreAd() {
  const iu =
    siteConfigData.environment.toLowerCase() === "prod"
      ? `/282897603/${siteConfigData.publisher}/videos/vid-preroll`
      : "/282897603/GFRM-Test/vid-preroll";

  return (
    `${"https://pubads.g.doubleclick.net/gampad/ads" +
      "?sz=640x480|640x480|640x360|640x360" +
      "&iu="}${iu}&ciu_szs=640x480,640x360&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&pp=HTML5-video&url=${custParam}&description_url=__page-url__` +
    `&correlator=__random-number__`
  );
}

function setVideoOvrAd() {
  const screenContext = getContext(document.documentElement.clientWidth);
  const videoAdSize =
    screenContext === "movil" ? "320x50|320x50" : "480x90|480x90|468x60|60x46";

  const iu =
    siteConfigData.environment.toLowerCase() === "prod"
      ? `/282897603/${siteConfigData.publisher}/videos/vid-overlay`
      : "/282897603/GFRM-Test/vid-overlay";
  return (
    `${"https://pubads.g.doubleclick.net/gampad/ads" +
      "?sz="}${videoAdSize}&iu=${iu}&ciu_szs=480x90,468x60&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=` +
    `&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=${custParam}&description_url=__page-url__` +
    `&correlator=__random-number__`
  );
}

function gfrmSocialShareAnalytics() {
  const eventPayload = arguments[2];

  const payload = {
    category: eventPayload.eventCategory,
    action: eventPayload.eventAction,
    label: eventPayload.eventLabel
  };

  if (window.throwEvent) {
    window.throwEvent("gfrmTrackEvent", payload);
  }
}
