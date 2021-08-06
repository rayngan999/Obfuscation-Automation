try {
  window.top.videoExclusions = { vid_excl_cat: [] };
} catch (a) {}
window.urlCheck = function (a, c) {
  var b = c && "object" === typeof c ? c : null;
  b = (null !== b && "variable" === b.type
    ? new RegExp("[\\?&;]" + a + "=([^&#?]*)")
    : new RegExp(a)
  ).exec(window.location.href || document.referrer);
  return null === b ? null : b[b.length - 1];
};
window.wpvidAutoplayDisabled = function (a) {
  new Date().getTime();
  return !1;
};
window.blockPreroll = function (a) {
  a = new Date().getTime();
  return (15169248e5 < a && 1546318799e3 > a && window.urlCheck("thelily")) ||
    (15407856e5 < a &&
      15414804e5 > a &&
      (window.urlCheck("/lifestyle/") ||
        window.urlCheck("/lifestyle/advice/") ||
        window.urlCheck("/lifestyle/home-garden") ||
        window.urlCheck("/lifestyle/magazine/") ||
        window.urlCheck("/lifestyle/on-parenting") ||
        window.urlCheck("/lifestyle/travel") ||
        window.urlCheck("/lifestyle/wellness"))) ||
    (15419988e5 < a &&
      15426036e5 > a &&
      (window.urlCheck("/lifestyle/") ||
        window.urlCheck("/lifestyle/advice/") ||
        window.urlCheck("/lifestyle/home-garden") ||
        window.urlCheck("/lifestyle/magazine/") ||
        window.urlCheck("/lifestyle/on-parenting") ||
        window.urlCheck("/lifestyle/travel") ||
        window.urlCheck("/lifestyle/wellness"))) ||
    (15426036e5 < a &&
      1543986e6 > a &&
      window.urlCheck("/entertainment/") &&
      "front" === window.wp_meta_data.contentType) ||
    (15426036e5 < a && 1543986e6 > a && window.urlCheck("news/act-four/")) ||
    (15426036e5 < a &&
      15438996e5 > a &&
      window.urlCheck("news/photography/")) ||
    (15426036e5 < a &&
      15438132e5 > a &&
      window.urlCheck("/food/") &&
      "front" === window.wp_meta_data.contentType) ||
    (15432084e5 < a &&
      15438132e5 > a &&
      window.urlCheck("/lifestyle/fashion")) ||
    (15432084e5 < a &&
      15436404e5 > a &&
      window.urlCheck("/sports/") &&
      "front" === window.wp_meta_data.contentType) ||
    (15383664e5 < a &&
      15384528e5 > a &&
      (window.urlCheck("/business/") ||
        window.urlCheck("/business/capital-business/") ||
        window.urlCheck("/business/on-small-business/") ||
        window.urlCheck("/news/energy-environment/") ||
        window.urlCheck("/news/digger/") ||
        window.urlCheck("/news/wonk/") ||
        window.urlCheck("/business/on-leadership/") ||
        window.urlCheck("/business/get-there/"))) ||
    (154044e7 < a &&
      15405264e5 > a &&
      (window.urlCheck("/business/") ||
        window.urlCheck("/business/capital-business/") ||
        window.urlCheck("/business/on-small-business/") ||
        window.urlCheck("/news/energy-environment/") ||
        window.urlCheck("/news/digger/") ||
        window.urlCheck("/news/wonk/") ||
        window.urlCheck("/business/on-leadership/") ||
        window.urlCheck("/business/get-there/"))) ||
    (15415668e5 < a &&
      15416532e5 > a &&
      (window.urlCheck("/business/") ||
        window.urlCheck("/business/capital-business/") ||
        window.urlCheck("/business/on-small-business/") ||
        window.urlCheck("/news/energy-environment/") ||
        window.urlCheck("/news/digger/") ||
        window.urlCheck("/news/wonk/") ||
        window.urlCheck("/business/on-leadership/") ||
        window.urlCheck("/business/get-there/"))) ||
    (15440724e5 < a &&
      15441588e5 > a &&
      (window.urlCheck("/business/") ||
        window.urlCheck("/business/capital-business/") ||
        window.urlCheck("/business/on-small-business/") ||
        window.urlCheck("/news/energy-environment/") ||
        window.urlCheck("/news/digger/") ||
        window.urlCheck("/news/wonk/") ||
        window.urlCheck("/business/on-leadership/") ||
        window.urlCheck("/business/get-there/"))) ||
    (15450228e5 < a &&
      15451092e5 > a &&
      (window.urlCheck("/business/") ||
        window.urlCheck("/business/capital-business/") ||
        window.urlCheck("/business/on-small-business/") ||
        window.urlCheck("/news/energy-environment/") ||
        window.urlCheck("/news/digger/") ||
        window.urlCheck("/news/wonk/") ||
        window.urlCheck("/business/on-leadership/") ||
        window.urlCheck("/business/get-there/"))) ||
    (15397488e5 < a &&
      15407856e5 > a &&
      ("business/energy-environment" === window.commercialNode ||
        window.urlCheck("/news/energy-environment/") ||
        window.urlCheck("/energy-environment/"))) ||
    (15383664e5 < a &&
      15389712e5 > a &&
      window.wp_meta_data &&
      wp_meta_data.contentName &&
      "innovations" === wp_meta_data.contentName[0]) ||
    (15401808e5 < a &&
      15407856e5 > a &&
      window.wp_meta_data &&
      wp_meta_data.contentName &&
      "innovations" === wp_meta_data.contentName[0]) ||
    (1541394e6 < a &&
      15419988e5 > a &&
      window.wp_meta_data &&
      wp_meta_data.contentName &&
      "innovations" === wp_meta_data.contentName[0]) ||
    (15426036e5 < a &&
      15432084e5 > a &&
      window.wp_meta_data &&
      wp_meta_data.contentName &&
      "innovations" === wp_meta_data.contentName[0]) ||
    (15438132e5 < a &&
      1544418e6 > a &&
      window.wp_meta_data &&
      wp_meta_data.contentName &&
      "innovations" === wp_meta_data.contentName[0]) ||
    (1544418e6 < a &&
      15450228e5 > a &&
      window.wp_meta_data &&
      wp_meta_data.contentName &&
      "innovations" === wp_meta_data.contentName[0]) ||
    (15389712e5 < a &&
      1539576e6 > a &&
      window.wp_meta_data &&
      wp_meta_data.contentName &&
      "the-switch" === wp_meta_data.contentName[0]) ||
    (1541394e6 < a &&
      15419988e5 > a &&
      window.wp_meta_data &&
      wp_meta_data.contentName &&
      "the-switch" === wp_meta_data.contentName[0]) ||
    (15972912e5 < a &&
      15973776e5 > a &&
      window.wp_meta_data &&
      !0 === wp_meta_data.isHomepage) ||
    (16018704e5 < a &&
      1601956799e3 > a &&
      window.wpAdFusion &&
      wpAdFusion.contentType &&
      "homepage" == wpAdFusion.contentType) ||
    (16055676e5 < a &&
      16056756e5 > a &&
      window.wpAdFusion &&
      wpAdFusion.contentType &&
      "homepage" == wpAdFusion.contentType) ||
    /breitbart\.com|alternet\.org|commondreams\.org|dailykos\.com|proudemocrat\.com|redstate\.com|theblaze\.com|therightscoop\.com|wonkette\.com/i.test(
      document.referrer
    )
    ? !0
    : !1;
};
function isArray(a) {
  return Array.isArray ? Array.isArray(a) : a instanceof Array;
}
function wordMatch(a, c, b) {
  b = b || !1;
  a = isArray(a) ? a : [a];
  var d = [];
  b = b ? "" : "(|s|es|ed|ing|er)";
  var e = a.length;
  if (e && c) {
    for (; e--; ) d.push(a[e] + b);
    d = "\\b" + d.join("\\b|\\b") + "\\b";
    return new RegExp(d, "i").test(c);
  }
  return !1;
}
window.vidExclusions = function (a) {
  var c = [],
    b = {
      natural_disaster: "deepwater;oil spill;shell;exxon;citgo;bp;chevron;hess;sunoco;disaster;fire;explosion;oil;coal;death;dead;quake;earthquake;tsunami;tornado;hurricane;flood;bed bug;infestation;gas;tropical storm;Irma;Harvey".split(
        ";"
      ),
      human_disaster: "coronavirus;kobe;nazi;massacre;oreilly;Ailes;o'reilly;fox news;abuse;death;trafficking;dead;gunshot;murderer;porn;sex tape;sexting;sexual abuse;molestation;assault;child abuse;sex abuse;ISIS;ISIL;Islamic State;Al Qaeda;Syria;Syrian;Assad;shooter;shooting;migrants;aylan kurdi;refugee crisis;drown;shoot;vatican;spanair;aground;rescue;attack;disaster;explosion;war;hostage;terror;terrorist;bomb;blast;mining;miner;violence;riot;crash;9/11;sept. 11;september 11;behead;United 93;pistorius;ebola;rape;rapist;amtrak;derailment;benghazi;misconduct".split(
        ";"
      ),
      financial_crisis: "corrupt;lawsuit;goldman;aig;foreclosure;enron;sec;mortgage;Insurance;health;bank;wall street;protest;labor strike;union strike;labor issue;union issue;teacher strike;teachers strike;election".split(
        ";"
      ),
      inappropriate: "porn deepwater gambling sex alcohol pornography pussy cunt fuck".split(
        " "
      ),
    },
    d,
    e =
      window.wp_meta_data &&
      window.wp_meta_data.contentType &&
      "VideoStory" === window.wp_meta_data.contentType[0];
  ((window.wp_meta_data &&
    window.wp_meta_data.contentType &&
    "MediaGallery" === window.wp_meta_data.contentType[0]) ||
    e) &&
    c.push("media");
  (/washingtonpost\.com|personalpost|obituaries|weather|jobs\/search/.test(
    window.commercialNode
  ) ||
    e) &&
    c.push("intrusive");
  for (d in b) b.hasOwnProperty(d) && wordMatch(b[d], a) && c.push(d);
  return c;
};
window.directToDFPCheck = function (a) {
  return "wpni.video.livestream/libby-casey" === a ||
    "wpni.video.postlive/covid04162020" === a ||
    "wpni.video.test/psa" === a ||
    "wpni.video.politics/elections" === a ||
    "wpni.video.livestream/att" === a ||
    "wpni.video.livestream/conventions" === a ||
    "wpni.video.premiumtest" === a ||
    "wpni.video.sports/olympics" === a ||
    "wpni.video.ooyala17" === a ||
    "wpni.video.sports/launcher" === a ||
    "wpni.video.paywall" === a
    ? !0
    : !1;
};
window.adZoneSkipOffset = function (a) {
  if (
    "wpni.video.postlive/leadership04302020" === a ||
    "wpni.video.test/skippable-test" === a ||
    "wpni.video.postlive/leadership05122020" === a ||
    "wpni.video.postlive/veterans06162020" === a ||
    "wpni.video.postlive/veterans06232020" === a ||
    "wpni.video.postlive/corp06252020" === a ||
    "wpni.video.postlive/maternal06302020" === a ||
    "wpni.video.postlive/cancer07162020" === a ||
    "wpni.video.postlive/conservation080520" === a ||
    "wpni.video.postlive/futureresetevent081020" === a ||
    "wpni.video.postlive/americashealthfuture081020" === a ||
    "wpni.video.postlive/futureresetevent092320" === a ||
    "wpni.video.postlive/americashealthfuture081020" === a ||
    "wpni.video.postlive/primarycarecovid10022020" === a ||
    "wpni.video.postlive/americasdigitaltransformation10022020" === a ||
    "wpni.video.postlive/cancer06172020" === a ||
    "wpni.video.postlive/rockefeller110920" === a ||
    "wpni.video.postlive/delltechnologies111020" === a ||
    "wpni.video.postlive/rockefeller11202020" === a ||
    "wpni.video.postlive/rockefeller12012020" === a ||
    "wpni.video.postlive/aihealthcare01082021" === a ||
    "wpni.video.postlive/bcbsprognosis01282021" === a ||
    "wpni.video.postlive/citrixbewell01282021" === a ||
    "wpni.video.postlive/thepathforward022521" === a ||
    "wpni.video.postlive/transformersrecovery022421" === a ||
    "wpni.video.postlive/citrixbewell022521" === a ||
    "wpni.video.postlive/lessonsofapandemic031721" === a ||
    "wpni.video.postlive/citrixbewell022521" === a ||
    "wpni.video.postlive/citrixbewell031821" === a ||
    "wpni.video.postlive/futurereset101520" === a
  )
    return 5;
};
