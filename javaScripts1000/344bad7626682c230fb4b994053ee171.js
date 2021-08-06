// ALL Code to be inserted in main.js before the anonimous function that contains all main.js
// In GLOBAL_nativeryLocalFn we save all the funcion we wont to call outside from this file
var GLOBAL_nativery = GLOBAL_nativery || {};
var GLOBAL_nativeryLocalFn = GLOBAL_nativeryLocalFn || {};
GLOBAL_nativery.isFirstLoad = function (namesp) {
  var isFirst = namesp.firstLoad === undefined;
  namesp.firstLoad = false;
  if (!isFirst) {
    console.warn(
      "[Warning] Nativery Install Code included twice. If you want to add multiple widgets on page\n\
add multiple \"_nat.push(['id', 'id_widget'])\" for each widget to the same Install Code e.g.:\n\n\
<script type='text/javascript'>\n\
  var _nat = _nat || [];\n\
  _nat.push(['id', 'id_widget_1']); // <= First Widget \n\
  _nat.push(['id', 'id_widget_2']); // <= Second Widget \n\
  _nat.push(['id', 'id_widget_3']); // <= Third Widget \n\
  (function() {\n\
      var nat = document.createElement('script'); nat.type = 'text/javascript'; nat.async = true;\n\
      nat.src = '//cdn.nativery.com/widget/js/nat.js';\n\
      var nats = document.getElementsByTagName('script')[0]; nats.parentNode.insertBefore(nat, nats);\n\
  })();\n\
</script>\n\n\
Then place the following code in the body of your page where you want to display the widgets \n\n\
<div id=\"nat_id_widget_1\"></div>\n\
<div id=\"nat_id_widget_2\"></div>\n\
<div id=\"nat_id_widget_3\"></div>\n\
    "
    );
  }
  return isFirst;
};

// Store finded div, to prevent multiple document.getElementById
var GLOBAL_nativeryWidgetDivs = GLOBAL_nativeryWidgetDivs || [];

// The nativeryAdapeter in interpretResponse() function store here the prebid nativery response.
var GLOBAL_nativeryServerResponses = GLOBAL_nativeryServerResponses || [];

var GLOBAL_nativeryPrebid = GLOBAL_nativeryPrebid || {
  // Here we store all the adunits loaded to avoid that the same adunits is loaded multiple time
  adUnits: {},
  // Function used to refresh (call once again) bid on adUnits
  refreshBid: function (adUnitCodes) {
    nativeryPbjs.que.push(function () {
      nativeryPbjs.requestBids({
        timeout: NATIVERY_PREBID_TIMEOUT,
        adUnitCodes: adUnitCodes,
      });
    });
  },
};

// Function called by nativeryWrapper when the bid ends
// and it's time to show widget with the winning ads
function showNativeryWidgetFromPrebidAuction(winningAds, widgetId) {
  let nativery = GLOBAL_nativeryWidgetDivs.find(
    (x) => x.id === "nat_" + widgetId
  );
  let index = GLOBAL_nativeryServerResponses.findIndex(
    (x) => x.idw === widgetId
  );
  // Se tutte le ads che hanno vinto l'asta sono di nativery
  // consideriamolo come un non programmatic, perchÃ© non abbiamo da salvare nessuna ads esterna
  let externalAds = [];
  let internalAdsId = [];
  if (nativery && index > -1) {
    let widgetResponse = GLOBAL_nativeryServerResponses[index];
    for (let ad of winningAds) {
      if (ad.external && widgetResponse.its && widgetResponse.its.s) {
        let index = widgetResponse.its.s.findIndex((x) => x.ici === ad.ici);
        if (index !== -1) {
          // Replace nativery ad with external (appnexus) ad that has won
          widgetResponse.its.s[index] = ad;
        } else {
          widgetResponse.its.s.unshift(ad);
        }
        externalAds.push(ad);
      } else {
        internalAdsId.push(ad.ida);
      }
    }
    // Remove the widgetResponse form GLOBAL_nativeryServerResponses for future request
    GLOBAL_nativeryServerResponses.splice(index, 1);
    GLOBAL_nativeryLocalFn["showData"](
      nativery,
      widgetResponse,
      widgetId,
      externalAds.length ? { externalAds, internalAdsId } : null
    );
  }
}

// Function called by nativeryBidAdapter to exclude negative keywords
function nativeryExcludeAdsNegativeKeywords(data) {
  if (data) {
    data = GLOBAL_nativeryLocalFn["ExcludeAdsNK"](data);
  }
  return data;
}

// POLYFILL FIND to support IE9+
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, "find", {
    value: function (predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw TypeError('"this" is null or not defined');
      }
      var o = Object(this);
      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;
      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== "function") {
        throw TypeError("predicate must be a function");
      }
      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];
      // 5. Let k be 0.
      var k = 0;
      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, Â« kValue, k, O Â»)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }
      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true,
  });
}

// Polifyll per Promise.allSettled
Promise.allSettled =
  Promise.allSettled ||
  ((promises) =>
    Promise.all(
      promises.map((p) =>
        p
          .then((v) => ({
            status: "fulfilled",
            value: v,
          }))
          .catch((e) => ({
            status: "rejected",
            reason: e,
          }))
      )
    ));

(function () {
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML =
    '.nat-clearfix{*zoom:1;clear:both}.nat-clearfix:before,.nat-clearfix:after{content:"";line-height:0;display:block}.nat-clearfix:after{clear:both}.nat-widgetContainer{position:relative}.nat-widget{overflow:hidden;clear:both}.nat-widget a{text-decoration:none;color:inherit}.nat-widget a:hover{text-decoration:underline}.nat-widget .nat-article a{display:block;text-overflow:ellipsis;overflow:hidden;line-height:normal}.nat-title{padding:5px 0;font-size:16px;font-weight:700}.nat-title-ellipsis{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.nat-sponsor-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:60%}.nat-article{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative}.nat-caption div.sponsor{color:#999;font-size:11px;font-weight:bold;text-decoration:none;font-family:\'Lora\';text-align:left}.natSponsorText{position:absolute;bottom:0;right:0;color:#FFF;font-weight:normal;font-size:11px;padding:2px;background-color:rgba(100,100,100,0.80)}.nat-article .nat-adremove{background:url(//cdn.nativery.com/images/remove.png) no-repeat scroll 0 0 transparent;width:12px;height:12px;position:absolute;right:2px;top:2px;z-index:9000;cursor:pointer;visibility:hidden}@media(min-width:768px){.nat-article:hover .nat-adremove{visibility:visible}}.nat-widget .nat-article.removed a{opacity:.2}.nat-article .nat-adrestore{background:0;position:absolute;right:2px;top:8px;z-index:9000;cursor:pointer;visibility:hidden;width:auto;font-size:14px;color:blue;text-decoration:underline;visibility:visible;display:none}.nat-adremoveBox{min-width:150px;max-width:150px;left:50%;transform:translate(-50%,0);color:#444;background-color:#f2f2f2;font-weight:normal;font-size:13px;border-radius:8px;position:absolute;z-index:99999999;box-sizing:border-box;box-shadow:0 1px 8px rgba(0,0,0,0.5);visibility:hidden}.nat-adremoveBox .header{padding:5px 10px;background-color:#ddd;border-radius:8px 8px 0 0}.nat-adremoveBox .body{padding:5px 10px}.nat-adremoveBox:before{content:\'\';position:absolute;bottom:100%;right:10px;margin-left:-8px;width:0;height:0;border-bottom:8px solid #ddd;border-right:8px solid transparent;border-left:8px solid transparent}.nat-adremoveBox i{position:absolute;bottom:100%;left:50%;margin-left:-12px;width:24px;height:12px;overflow:hidden}.nat-adremoveBox i::after{content:\'\';position:absolute;width:12px;height:12px;left:50%;transform:translate(-50%,50%) rotate(45deg);background-color:#eee;box-shadow:0 1px 8px rgba(0,0,0,0.5)}.nat-horizontal .nat-items{display:grid;grid-gap:0}.nat-horizontal .nat-article{float:left;padding:0 5px}.nat-horizontal .nat-figure img.nat-image{width:100%}.nat-vertical .nat-article{margin-top:5px}.nat-btnN,.nat-btnP{height:100%;width:26px;position:absolute;left:1px;top:0}.nat-btnN span,.nat-btnP span{display:block;position:absolute;height:30px;width:24px;top:50%;line-height:30px;margin:auto;margin-top:-15px;background-color:rgba(0,0,0,0.6);border:1px solid rgba(0,0,0,0.1);color:#fff;text-align:center;opacity:.9;font-size:13px;font-family:verdana,arial}.nat-btnP span{border-top-right-radius:3px;border-bottom-right-radius:3px}.nat-btnN{left:auto;right:1px}.nat-btnN span{border-top-left-radius:3px;border-bottom-left-radius:3px}.nat-btnN:hover span,.nat-btnP:hover span{text-decoration:none;opacity:1;background-color:rgba(0,0,0,0.7)}.nat-hide{display:none}.nat-scroller .nat-article{float:left;padding:0 5px}.nat-scroller-main{position:relative;padding:0}.nat-scroller-container{overflow:hidden;border:1px solid rgba(0,0,0,0.1);background:rgba(89,89,89,0.01);padding:5px 0}.nat-scroller .nat-items{width:900000px}.nat-banner{border:1px solid #ddd;position:relative;padding-left:78px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.nat-banner .nat-title{position:absolute;width:73px;left:0;top:0;bottom:0;padding:20px 0 0 5px;font-size:11px;font-weight:700;text-transform:uppercase;color:#555}.nat-banner .nat-scroller-container{border:0 none;padding:0}.nat-banner .nat-article{float:left;padding:0 5px;margin:2px 0;border-left:1px solid #eee;width:172px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif}.nat-banner .nat-article:hover{background:#fafafa}.nat-banner .nat-figure{width:40%;float:left}.nat-banner .nat-figure img.nat-image{height:60px;width:auto}.nat-horizontal .nat-caption{margin-bottom:20px}.nat-banner .nat-caption{font-size:11px;line-height:12px;float:left;width:60%;padding-left:5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis;height:84px}.nat-banner.nat-wOnlyText .nat-caption{width:100%}.nat-banner .nat-footer{padding:2px 3px 3px 0}.nat-banner .nat-btnP,.nat-banner .nat-btnN{background:rgba(255,255,255,0.9);top:2px;bottom:2px;height:auto}.nat-banner .nat-btnP{left:0;-webkit-box-shadow:6px 0 7px -6px rgba(0,0,0,0.3);-moz-box-shadow:6px 0 7px -6px rgba(0,0,0,0.3);box-shadow:6px 0 7px -6px rgba(0,0,0,0.3);border-left:1px solid #ddd}.nat-banner .nat-btnN{right:0;-webkit-box-shadow:-6px 0 5px -4px rgba(0,0,0,0.3);-moz-box-shadow:-6px 0 5px -4px rgba(0,0,0,0.3);box-shadow:-6px 0 5px -4px rgba(0,0,0,0.3)}.nat-banner .nat-btnP span,.nat-banner .nat-btnN span{background:0;color:#333;border:0}.nat-banner .nat-footer{position:absolute;right:0;bottom:0}.nat-figure{text-align:center;line-height:0;position:relative}.nat-widget .nat-figure img.nat-image{max-width:100%;height:auto;padding:0;margin:0;border:0;opacity:100 !important}.nat-widget .nat-figure img.nat-image.nat-rounded{border-radius:5%/6.66%;border:1px solid #e5e5e5;-webkit-box-sizing:border-box;box-sizing:border-box}.nat-footer{text-align:right;font-size:11px;line-height:15px;padding:5px}.nat-footer a img{float:right;margin-left:5px;padding:0;border:0;width:auto !important;opacity:100 !important}.nat-wSimple .nat-article .nat-article-content{padding:5px;border:1px solid rgba(0,0,0,0.1)}.nat-wSimple .nat-caption{margin-bottom:0}.nat-wSimple .nat-caption a{font-size:13px;display:block}.nat-wOverlay .nat-article{padding:5px}.nat-wOverlay .nat-article .nat-article-content{position:relative;overflow:hidden}.nat-wOverlay .nat-caption a{display:block;height:100%;font-size:13px}.nat-wOverlay .nat-caption a:hover{text-decoration:none}.nat-wOverlay .nat-caption{position:absolute;top:60%;left:0;right:0;padding:5px;background:rgba(0,0,0,0.65);height:100%;min-height:50px;color:#FFF;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}.nat-wOverlay .nat-article .nat-article-content:hover .nat-caption{top:0}.nat-wFadein .nat-article .nat-article-content{position:relative;overflow:hidden;margin:5px 0;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1);-moz-box-shadow:0 0 3px rgba(0,0,0,0.1);box-shadow:0 0 3px rgba(0,0,0,0.1);padding:1px;border:1px solid rgba(0,0,0,0.1)}.nat-wFadein .nat-article .nat-article-content:after{position:absolute;z-index:2;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,0.25);display:block;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;-ms-transition:all .3s;transition:all .3s;-webkit-transform:scale(0,0);transform:scale(0,0);-ms-transform:scale(0,0)}.nat-wFadein .nat-article:hover .nat-article-content:after{background:rgba(0,0,0,0.65);-webkit-transform:scale(1,1);transform:scale(1,1);-ms-transform:scale(1,1)}.nat-wFadein .nat-caption{position:absolute;z-index:3;top:20px;padding:10px;text-align:center;font-size:13px;color:#FFF;opacity:0;filter:alpha(opacity=0);-webkit-transition:all .5s;-moz-transition:all .5s;-o-transition:all .5s;-ms-transition:all .5s;transition:all .5s}.nat-wFadein .nat-article:hover .nat-caption{opacity:1;filter:alpha(opacity=100)}.nat-wFadein .nat-caption div.sponsor{font-size:12px;text-align:center}.nat-wTred .nat-article .nat-article-content{position:relative;overflow:hidden}.nat-wTred .nat-figure{margin:7px 7px 0;-webkit-box-shadow:0 0 3px rgba(0,0,0,0.1);-moz-box-shadow:0 0 3px rgba(0,0,0,0.1);box-shadow:0 0 3px rgba(0,0,0,0.1);position:relative;top:10px;border:1px solid #FFF;-webkit-transition:all .3s ease;-moz-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease}.nat-wTred .nat-article:hover .nat-figure{top:1px;-webkit-box-shadow:0 0 5px rgba(0,0,0,0.1);-moz-box-shadow:0 0 5px rgba(0,0,0,0.1);box-shadow:0 0 5px rgba(0,0,0,0.1)}.nat-wTred .nat-caption{border:1px solid rgba(0,0,0,0.1);position:relative;font-size:13px;padding:5px;background:#FFF;margin-bottom:0}.nat-wTred .nat-caption:before{content:" ";position:absolute;top:-8px;right:-1px;width:0;height:0;border-style:solid;border-width:7px 0 0 7px;border-color:transparent transparent transparent #999}.nat-wTred .nat-caption:after{content:" ";position:absolute;top:-8px;left:-1px;width:0;height:0;border-style:solid;border-width:0 0 7px 7px;border-color:transparent transparent #999}.nat-wGlossy .nat-figure{border:1px solid rgba(255,255,255,0.3)}.nat-wGlossy .nat-article-content{border:1px solid rgba(0,0,0,0.1);padding:5px;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;-ms-transition:all .3s;transition:all .3s;background-image:-moz-linear-gradient(top,rgba(255,255,255,0) 30%,rgba(0,0,0,0.1) 100%);background-image:-webkit-gradient(linear,left top,left bottom,color-stop(30%,rgba(255,255,255,0)),color-stop(100%,rgba(0,0,0,0.1)));background-image:-webkit-linear-gradient(top,rgba(255,255,255,0) 30%,rgba(0,0,0,0.1) 100%);background-image:-o-linear-gradient(top,rgba(255,255,255,0) 30%,rgba(0,0,0,0.1) 100%);background-image:-ms-linear-gradient(top,rgba(255,255,255,0) 30%,rgba(0,0,0,0.1) 100%);background-image:linear-gradient(to bottom,rgba(255,255,255,0) 30%,rgba(0,0,0,0.1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#00ffffff\',endColorstr=\'#1a000000\',GradientType=0)}.nat-wGlossy .nat-article-content:hover{background-image:none}.nat-wGlossy .nat-caption{margin-bottom:0}.nat-wGlossy .nat-caption a{font-size:13px;padding:5px;display:block}.nat-wBlock .nat-figure{float:left;max-width:200px;margin-right:10px}.nat-wBlock .nat-caption{margin-bottom:0}.nat-wBlock .nat-caption a{display:block;height:100%;font-size:13px;margin-left:5px}.nat-wBlock .nat-article-content{padding:0}.nat-popOver{position:fixed;z-index:99999999;right:40px;bottom:-100%;border:1px solid rgba(0,0,0,0.1);-moz-box-shadow:0 0 10px rgba(0,0,0,0.2);-webkit-box-shadow:0 0 10px rgba(0,0,0,0.2);box-shadow:0 0 10px rgba(0,0,0,0.2);-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;-ms-transition:all .3s;transition:all .3s}.nat-popOver.nat-popOverOpen{bottom:0}.nat-popOver .nat-figure{float:left;width:40%;padding-right:5px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.nat-popOver .nat-article-content{height:100%;background:rgba(0,0,0,0.03);overflow:hidden;margin:5px}.nat-popOver .nat-article-content:hover{background:rgba(255,255,255,0.1)}.nat-popOver .nat-caption{float:left;width:60%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.nat-popOver.nat-wOnlyText .nat-caption{width:100%}.nat-popOver .nat-article{border-bottom:1px solid rgba(0,0,0,0.1);height:100%}.nat-popOver .nat-article:first-child{border-top:1px solid rgba(0,0,0,0.1)}.nat-popOver .nat-title{padding:5px;font-size:14px}.nat-popOver .nat-popOverToggle{float:right;display:block;width:14px;height:14px;padding:1px;line-height:14px;background-color:#ccc;font-size:13px;text-align:center;background-image:url(//cdn.nativery.com/images/pdown.png);background-repeat:no-repeat;background-position:1px 1px;text-decoration:none}.nat-popOver .nat-popOverToggle:hover{text-decoration:none}.nat-popOver.nat-popOverHidden .nat-popOverToggle{background-image:url(//cdn.nativery.com/images/pup.png)}.nat-popup{position:fixed;left:0;right:0;top:-999999px;background:rgba(0,0,0,0.35);z-index:9999;opacity:0}.nat-popup.showed{top:0;bottom:0;opacity:1}.nat-popup-content{width:420px;background:#FFF;border-radius:3px;position:absolute;top:50%;left:50%;margin-left:-220px;margin-top:-170px;padding:10px;font-size:15px;color:#555;font-family:sans-serif;box-shadow:0 3px 10px rgba(0,0,0,0.15);-o-box-shadow:0 3px 10px rgba(0,0,0,0.4);-ms-box-shadow:0 3px 10px rgba(0,0,0,0.4);-moz-box-shadow:0 3px 10px rgba(0,0,0,0.4);-webkit-box-shadow:0 3px 10px rgba(0,0,0,0.4);-webkit-transform:scale(0,0);transform:scale(0,0);-ms-transform:scale(0,0);-webkit-transition:all 1s;-moz-transition:all 1s;-o-transition:all 1s;-ms-transition:all 1s;transition:all 1s}.nat-popup.showed .nat-popup-content{-webkit-transform:scale(1,1);transform:scale(1,1);-ms-transform:scale(1,1)}.nat-footer a{display:inline-block}a.natPopOpen{width:15px;height:15px;line-height:15px;color:#FFF;text-align:center;font-weight:700;margin-left:10px;cursor:pointer}.nat-popup-close a{display:block;position:absolute;top:-10px;right:-10px;width:20px;height:20px;background:#fafafa;border-radius:255px;text-align:center;line-height:20px;font-weight:700;color:#555;text-decoration:none;border:1px solid rgba(0,0,0,0.4);box-shadow:0 3px 10px rgba(0,0,0,0.15);-o-box-shadow:0 3px 10px rgba(0,0,0,0.4);-ms-box-shadow:0 3px 10px rgba(0,0,0,0.4);-moz-box-shadow:0 3px 10px rgba(0,0,0,0.4);-webkit-box-shadow:0 3px 10px rgba(0,0,0,0.4)}.nat-popup-logo{text-align:center}.nat-popup p{margin-top:10px;color:#555;text-align:left}.nat-popup .tblu{color:#3a87ad}.nat-popup .tverde{color:#9fcf90}.nat-popOver .nat-article.criteo .nat-article-content{padding-right:20px}.nat-article.criteo .criteoOptOut{position:absolute;top:0;right:0}.nat-article.label_adv .nat-figure:after{content:"sponsor";display:block;padding:5px;position:absolute;right:0;bottom:0;background:rgba(105,105,105,0.75);color:#fff;font-size:11px;line-height:1}.nat-popOverMobile{position:fixed;bottom:0;left:0;padding:5px;border:1px solid #f6f6f6;overflow:visible;border-top:3px solid #ccc;z-index:99999}.nat-popOverMobile .nat-footer{position:absolute;top:0;right:0}.nat-popOverMobile a.natPopOpen{margin-left:0}.nat-popOverMobile .nat-title{padding-top:0;font-size:14px}.nat-popOverMobile.nat-popOverMobile-closed{top:100%;bottom:auto;margin-top:-3px}.nat-popOverMobile .nat-article{float:left;padding:0 4px 0 0}.nat-popOverMobile .nat-article a{line-height:1.1em}.nat-popOverMobile .nat-article-content{position:relative;padding-left:105px;font-size:100%}.nat-popOverMobile.nat-wOnlyText .nat-article-content{padding-left:0}.nat-popOverMobile .nat-figure{width:100px;position:absolute;left:0;top:0}.nat-popOverMobile .nat-caption{min-height:75px}.nat-popOverMobile .nat-popOverToggle{position:absolute;bottom:100%;left:50%;margin-left:-8px;margin-bottom:2px;display:block;width:14px;height:14px;padding:1px;line-height:1;background-color:#ccc;font-size:1px;text-align:center;background-image:url(//cdn.nativery.com/images/pdown.png);background-repeat:no-repeat;background-position:center bottom}.nat-popOverMobile .nat-popOverToggle:hover{text-decoration:none}.nat-popOverMobile .nat-popOverToggle:before{content:" ";width:0;height:0;border-style:solid;border-width:0 0 16px 12px;border-color:transparent transparent #ccc transparent;position:absolute;top:0;left:-12px}.nat-popOverMobile .nat-popOverToggle:after{content:" ";width:0;height:0;border-style:solid;border-width:16px 0 0 12px;border-color:transparent transparent transparent #ccc;position:absolute;top:0;right:-12px}.nat-popOverMobile.nat-popOverHidden .nat-popOverToggle{background-image:url(//cdn.nativery.com/images/pup.png)}.nat-300_250{margin:0 auto;width:300px;height:250px;position:relative}.nat-300_250 .nat-footer{z-index:100;position:absolute;bottom:0;right:0}.nat-300_250 .nat-image img{height:150px;width:300px}.nat-orizzontale2{max-width:900px;margin:0 auto}.nat-orizzontale2 .nat-title{float:left;font-size:12px}.nat-orizzontale2 .nat-footer{font-size:12px;float:right;padding:10px;width:auto;font-weight:bold;opacity:100 !important}.nat-orizzontale2 .nat-footer a{color:gray}.nat-orizzontale2 .nat-footer a:hover{text-decoration:none}.nat-orizzontale2 .nat-footer a img{vertical-align:middle;vertical-align:-webkit-baseline-middle;float:none;height:28px}.nat-orizzontale2 .nat-items{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(auto,1fr);gap:20px 20px;clear:both}.nat-orizzontale2 .nat-items .nat-col2{grid-column:1 / 3}.nat-orizzontale2 .nat-items .nat-rowsep1{border:0;border-top:2px solid #c2c2c2;margin:0;padding:0}.nat-orizzontale2 .nat-items .nat-rowsep2{border:0;border-top:2px solid #c2c2c2;margin:0;margin-top:8px;padding:0}.nat-orizzontale2 .nat-caption a{color:#000;font-weight:bold}.nat-orizzontale2 .nat-col2 .nat-caption{font-size:14px}.nat-orizzontale2 .nat-figure img.nat-image{width:100%}.nat-orizzontale2 .nat-caption .nat-sponsor{color:gray;font-weight:bold;font-size:12px}.nat-orizzontale2 .nat-caption .nat-sponsor-text{font-weight:normal}@media(min-width:120px) and (max-width:480px){.nat-orizzontale2 .nat-items{grid-template-columns:1fr}.nat-orizzontale2 .nat-items .nat-col2{grid-column:auto}.nat-orizzontale2 .nat-col2 .nat-caption .nat-increased{font-size:100%}.nat-orizzontale2 .nat-caption{font-size:80%}.nat-orizzontale2 .nat-footer a span{display:none}.nat-orizzontale2 .nat-rowsep{display:none}}.nat-instagram{max-width:900px;margin:0 auto}.nat-instagram .nat-title{float:left;font-size:12px}.nat-instagram .nat-footer{font-size:12px;float:right;padding:10px;width:auto;font-weight:bold;opacity:100 !important}.nat-instagram .nat-footer a{color:gray}.nat-instagram .nat-footer a img{vertical-align:middle;vertical-align:-webkit-baseline-middle;float:none;height:28px}.nat-instagram .nat-items{position:relative;clear:both}.nat-instagram .nat-article{font-size:14px;display:none}.nat-instagram .nat-figure img.nat-image{width:100%}.nat-instagram .nat-caption a{color:#000;font-weight:bold}.nat-instagram .nat-caption .nat-sponsor{color:gray;font-weight:bold;font-size:12px}.nat-instagram .nat-caption .nat-sponsor-text{font-weight:normal}@keyframes loader-animation{0%{width:0}100%{width:100%}}.nat-instagram .nat-loader{height:3px;width:100%;background-color:#f3f3f3;position:absolute;top:3%;z-index:8000}.nat-instagram .nat-loader .nat-bar{position:relative;height:3px;background-color:#f9d241;animation-name:loader-animation;animation-duration:6s;animation-iteration-count:1;animation-timing-function:ease-in-out}.nat-instagram .nat-loader .nat-loaded{position:relative;height:3px;background-color:#f9d241}';
  document
    .getElementsByTagName("head")[0]
    .insertBefore(css, document.getElementsByTagName("head")[0].firstChild);
  var tpl_old =
    "<div class=\"nat-widget nat-w<%=(w_t!='popOverMobile' || w_s=='OnlyText' ? w_s : '')%> nat-<%=w_t%>\" <%=(w_t=='popOver' || w_t=='popOverMobile' ? ' style=\"background-color:'+p_bg+';\"' : '')%> <%=(w_t=='banner' ? ' style=\"width:'+b_w+'px;\"' : '')%> ><div class=\"nat-title\" style=\"<%=(h_t_c ? 'color:'+h_t_c+';' : '')%><%=(h_t_fs ? 'font-size:'+h_t_fs+';' : '')%><%=(h_t_fw ? 'font-weight:'+h_t_fw+';' : '')%><%=(h_t=='' ? 'display:none;' : '')%>\"><%=h_t%><%=(w_t=='popOver' || w_t=='popOverMobile' ? '<a href=\"#\" class=\"nat-popOverToggle\">&nbsp;</a>' : '')%></div><%=(w_t=='scroller' || w_t=='banner' ? '<div class=\"nat-scroller-main\" class=\"nat-scroller-main\"><div class=\"nat-scroller-container\">' : '')%><div class=\"nat-items\" style=\"<%=(w_t=='horizontal' ? w_s!='Block' ? 'grid-template-columns: repeat(auto-fill, minmax('+(i_w-30)+'px, 1fr));' : 'padding:5px;' : '')%>\"><% for ( var i = 0; i < it.length; i++ ) { %><%trk = h_w+'/c'+(it[i].t=='i' ? 'i' : it[i].external ? 's-prebid' : 's')+'/?idr='+it[i].id+'&idw='+idw+'&idu='+idu+'&idi='+idi+''+(it[i].t=='a' ? '&idic='+it[i].ici : '')+'&ref='+ref+'&refref='+refref+''+(it[i].t=='t' ? '&twgurl='+it[i].url : '');%><%au = it[i].external ? it[i].url : trk ;%><%au = au + (it[i].external ? '' : it[i].url ? '&criurl='+encodeURIComponent(it[i].url) : '');%><%a = '<a href=\"'+au+'\"'+(it[i].t!='i' ? ' rel=\"nofollow\"' : '')+''+(it[i].external ? ' data-trk=\"'+ trk +'\" class=\"pb-click\" pbadid=\"'+ it[i].prebidAdId +'\" ' : '')+''+(it[i].t!='i' && s_t_b==1 ? ' target=\"_blank\"' : ' target=\"_top\"')+' style=\"'+(i_lc ? 'color:'+i_lc+';' : '')+(i_lfs ? 'font-size:'+i_lfs+';' : '')+(i_lfw ? 'font-weight:'+i_lfw+';' : '')+(i_lta ? 'text-align:'+i_lta+';' : '')+'\">';%><div id=\"nat_<%=idw%>_<%=i%>\" class=\"nat-article <%=(it[i].t=='a' ? 'nat-adv' : '')%> <%=(it[i].cl ? it[i].cl : '')%> <%=((it[i].t=='a' && s_l==1) ? 'label_adv' : '')%>\" style=\"width:<%=(w_t=='popOverMobile' ? (100/it.length)+'%' : (w_t=='horizontal' ? '100%' : i_w+'px'))%>\" data-width=\"<%=i_w%>px\" data-idw=\"<%=idw%>\" data-idr=\"<%=it[i].id%>\" data-idu=\"<%=idu%>\" data-idi=\"<%=idi%>\" data-idic=\"<%=it[i].ici%>\"><%=(it[i].cl=='criteo' ? '<div class=\"criteoOptOut\"><a href=\"'+it[i].cr_optout_url+'\" target=\"_blank\"><img src=\"'+it[i].cr_optout_img+'\"></a><img src=\"'+it[i].cr_impression_pixels+'\" width=\"0\" height=\"0\" /></div>' : '')%><div class=\"nat-article-content nat-clearfix\"<%=((w_t!='popOver' && p_bg) ? ' style=\"background-color:'+p_bg+';\"' : '')%>><% if(w_s!='OnlyText') { %><div class=\"nat-figure\"><%=a%><%=((s && it[i].t=='a') ? '<span class=\"natSponsorText\">Sponsor</span>' : '') %><img class=\"nat-image<%= (i_r ? ' nat-rounded' : '') %>\" src=\"<%= (it[i].img[0]=='/' ? h_i : '') %><%=it[i].img%>\" width=\"<%=i_w%>px\" height=\"<%=i_w%>px\"></a><%=(it[i].t=='a' ? '<div class=\"nat-adremove\" title=\"Rimuovi questo elemento\"></div>' : '')%><%=(it[i].t=='a' ? '<div class=\"nat-adrestore\" title=\"Annulla rimozione\">annulla</div>' : '')%></div><% } %><div class=\"nat-caption\"><%=a%><div class=\"<%=(w_t=='300_250' ? 'nat-title-ellipsis' : '')%>\"><%=it[i].ti%></div><%=(it[i].bt ? ' <div class=\"sponsor' + (w_t=='300_250' ? ' nat-sponsor-ellipsis' : '') + '\"'+(i_btc ? 'style=\"color:'+i_btc+';\"' : '')+'>'+it[i].bt+'</div>' : '')%></a><% if(it[i].t=='a') {for ( var irp = 0; irp < it[i].r_p.length; irp++ ) {if(it[i].r_p[irp].event_type=='impressions') {%><IMG SRC=\"<%= it[i].r_p[irp].pixel_url %>\" BORDER=\"0\" HEIGHT=\"1\" WIDTH=\"1\" ALT=\"Advertisement\" style=\"width:1px;height:1px;\"><%}}} %></div></div></div><% } %><%=(w_t=='scroller' || w_t=='banner' ? '</div><a href=\"#next\" class=\"nat-btnN\"><span>&#9654;</span></a><a href=\"#prev\" class=\"nat-btnP nat-hide\"><span>&#9664;</span></a></div>' : '')%></div><div class=\"nat-footer nat-clearfix\"><div class=\"nat-footer-content\"><a href=\"https://www.nativery.com/?tipo=favicon_<%=f_ns%>\" target=\"_blank\" style=\"color:#888888;font-weight:bold;\"><%=(w_t!='popOverMobile') ? 'Sponsorizzato da ' : '' %><img src=\"<%=h_i%>/images/logoMini.png\" height=\"15px\" alt=\"Nativery\" title=\"Nativery\"></a></div></div> </div> <div class=\"nat-popup\"> </div> <div class=\"nat-adremoveBox\"><div class=\"header\"><strong>Link sponsorizzato rimosso</strong></div><div class=\"body\"><div>Ci puoi dire il motivo?</div><div><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Non mi interessa\" />Non mi interessa<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Non Ã¨ coerente\" />Non &egrave; coerente<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Ã offensivo\" />&Egrave; offensivo<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Ã ripetuto\" />&Egrave; ripetuto<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Volgare/Erotico\" />Volgare/Erotico<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Altro\" />Altro</div></div> </div>";
  var tpl_orizzontale2 =
    "<% switch(it.length) {case 1:case 3:case 5:case 7:case 8:case 10:case 12:case 14:case 15:case 17:case 19:case 21:case 22:case 24:case 26:case 28:case 29:{col_order = [2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2];break;}case 2: {col_order = [1,1];break;}case 4:case 6: {col_order = [2,1,1,2,1,1];break;}case 9:case 11:case 18:case 20:case 25:case 27: {col_order = [1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1];break;}case 16:case 23: {col_order = [1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1,2,1,1,1,1,1,1];break;}case 13: {col_order = [1,1,2,1,1,1,1,1,1,1,1,1,1];break;}default: {col_order = Array(50).fill(1);break;} } %> <div class=\"nat-widget nat-<%=w_t%>\" style=\"background-color:<%=p_bg%>\"><div class=\"nat-title\" style=\"<%=(h_t_c ? 'color:'+h_t_c+';' : '')%><%=(h_t_fs ? 'font-size:'+h_t_fs+';' : '')%><%=(h_t_fw ? 'font-weight:'+h_t_fw+';' : '')%><%=(h_t=='' ? 'display:none;' : '')%>\"><%=h_t%><%=(w_t=='popOver' || w_t=='popOverMobile' ? '<a href=\"#\" class=\"nat-popOverToggle\">&nbsp;</a>' : '')%></div> <div class=\"nat-footer\"><div class=\"nat-footer-content\"><a href=\"https://www.nativery.com/?tipo=favicon_<%=f_ns%>\" target=\"_blank\"><span>Sponsorizzato da </span><img src=\"<%=h_i%>/images/logo.png\" alt=\"Nativery\" title=\"Nativery\"></a></div></div><%a = '<a href=\"#\">';%><div class=\"nat-items\"><% sep_count = 0; %><% for ( var i = 0; i < it.length; i++ ) {sep_count += col_order[i];trk = h_w+'/c'+(it[i].t=='i' ? 'i' : it[i].external ? 's-prebid' : 's')+'/?idr='+it[i].id+'&idw='+idw+'&idu='+idu+'&idi='+idi+''+(it[i].t=='a' ? '&idic='+it[i].ici : '')+'&ref='+ref+'&refref='+refref+''+(it[i].t=='t' ? '&twgurl='+it[i].url : '');au = it[i].external ? it[i].url : trk ;au = au + (it[i].external ? '' : it[i].url ? '&criurl='+encodeURIComponent(it[i].url) : '');a = '<a href=\"'+au+'\"'+(it[i].t!='i' ? ' rel=\"nofollow\"' : '')+''+(it[i].external ? ' data-trk=\"'+ trk +'\" class=\"pb-click\" pbadid=\"'+ it[i].prebidAdId +'\" ' : '')+''+(it[i].t!='i' && s_t_b==1 ? ' target=\"_blank\"' : ' target=\"_top\"')+' style=\"'+(i_lc ? 'color:'+i_lc+';' : '')+(i_lfw ? 'font-weight:'+i_lfw+';' : '')+(i_lta ? 'text-align:'+i_lta+';' : '')+'\">';%><div class=\"nat-col<%=col_order[i]%>\"><div id=\"nat_<%=idw%>_<%=i%>\" class=\"nat-article <%=(it[i].t=='a' ? 'nat-adv' : '')%> <%=(it[i].cl ? it[i].cl : '')%> <%=((it[i].t=='a' && s_l==1) ? 'label_adv' : '')%>\" data-idw=\"<%=idw%>\" data-idr=\"<%=it[i].id%>\" data-idu=\"<%=idu%>\" data-idi=\"<%=idi%>\" data-idic=\"<%=it[i].ici%>\" style=\"<%=(i_lfs ? 'font-size:'+i_lfs+';' : '')+(p_bg ? ' background-color:'+p_bg+';\"' : '')%>\"><div class=\"nat-figure\"><%=a%><img class=\"nat-image<%= (i_r ? ' nat-rounded' : '') %>\" src=\"<%= (it[i].img[0]=='/' ? h_i : '') %><%=it[i].img%>\" width=\"<%=i_w%>px\" height=\"<%=i_w%>px\"></a><%=(it[i].t=='a' ? '<div class=\"nat-adremove\" title=\"Rimuovi questo elemento\"></div>' : '')%><%=(it[i].t=='a' ? '<div class=\"nat-adrestore\" title=\"Annulla rimozione\">annulla</div>' : '')%></div><div class=\"nat-caption\"><%=a%><span class=\"<%=(col_order[i]==2) ? 'nat-increased' : ''%>\"><%=it[i].ti%></span></a><%=(it[i].bt ? ' <div class=\"nat-sponsor\" style=\"'+(i_btc ? 'color:'+i_btc+';' : '')+(i_lta ? 'text-align:'+i_lta+';' : '')+'\">'+it[i].bt+((s && it[i].t=='a') ? '<span class=\"nat-sponsor-text\"> | Sponsorizzato</span>' : '')+'</div>' : '')%><% if(it[i].t=='a') {for ( var irp = 0; irp < it[i].r_p.length; irp++ ) {if(it[i].r_p[irp].event_type=='impressions') {%><IMG SRC=\"<%= it[i].r_p[irp].pixel_url %>\" BORDER=\"0\" HEIGHT=\"1\" WIDTH=\"1\" ALT=\"Advertisement\" style=\"width:1px;height:1px;float:left;\"><%}}} %></div></div></div><% if(sep_count%2==0 && i<(it.length-1)) { %><div class=\"nat-col2 nat-rowsep\"><hr class=\"nat-rowsep1\" /><hr class=\"nat-rowsep2\" /></div><% } %><% } %></div></div> </div> <div class=\"nat-popup\"> </div> <div class=\"nat-adremoveBox\"><div class=\"header\"><strong>Link sponsorizzato rimosso</strong></div><div class=\"body\"><div>Ci puoi dire il motivo?</div><div><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Non mi interessa\" />Non mi interessa<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Non Ã¨ coerente\" />Non &egrave; coerente<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Ã offensivo\" />&Egrave; offensivo<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Ã ripetuto\" />&Egrave; ripetuto<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Volgare/Erotico\" />Volgare/Erotico<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Altro\" />Altro</div></div> </div>";
  var tpl_instagram =
    "<div class=\"nat-widget nat-<%=w_t%>\" style=\"background-color:<%=p_bg%>\"><div class=\"nat-title\" style=\"<%=(h_t_c ? 'color:'+h_t_c+';' : '')%><%=(h_t_fs ? 'font-size:'+h_t_fs+';' : '')%><%=(h_t_fw ? 'font-weight:'+h_t_fw+';' : '')%><%=(h_t=='' ? 'display:none;' : '')%>\"><%=h_t%><%=(w_t=='popOver' || w_t=='popOverMobile' ? '<a href=\"#\" class=\"nat-popOverToggle\">&nbsp;</a>' : '')%></div> <div class=\"nat-footer\"><div class=\"nat-footer-content\"><a href=\"https://www.nativery.com/?tipo=favicon_<%=f_ns%>\" target=\"_blank\"><span>Sponsorizzato da </span><img src=\"<%=h_i%>/images/logo.png\" alt=\"Nativery\" title=\"Nativery\"></a></div></div><%a = '<a href=\"#\">';%><div class=\"nat-items\"><% for ( var i = 0; i < it.length; i++ ) {trk = h_w+'/c'+(it[i].t=='i' ? 'i' : it[i].external ? 's-prebid' : 's')+'/?idr='+it[i].id+'&idw='+idw+'&idu='+idu+'&idi='+idi+''+(it[i].t=='a' ? '&idic='+it[i].ici : '')+'&ref='+ref+'&refref='+refref+''+(it[i].t=='t' ? '&twgurl='+it[i].url : '');au = it[i].external ? it[i].url : trk;au = au + (it[i].external ? '' : it[i].url ? '&criurl='+encodeURIComponent(it[i].url) : '');a = '<a href=\"'+au+'\"'+(it[i].t!='i' ? ' rel=\"nofollow\"' : '')+''+(it[i].external ? ' data-trk=\"'+ trk +'\" class=\"pb-click\" pbadid=\"'+ it[i].prebidAdId +'\" ' : '')+''+(it[i].t!='i' && s_t_b==1 ? ' target=\"_blank\"' : ' target=\"_top\"')+' style=\"'+(i_lc ? 'color:'+i_lc+';' : '')+(i_lfw ? 'font-weight:'+i_lfw+';' : '')+(i_lta ? 'text-align:'+i_lta+';' : '')+'\">';%><div class=\"nat-loader nat-loader<%=i%>\" style=\"width:-webkit-calc(((100% - 20px)/<%=it.length%>) - 20px);width:-moz-calc(((100% - 20px)/<%=it.length%>) - 10px);width:calc(((100% - 10px)/<%=it.length%>) - 10px);left:-webkit-calc(((100% - 10px)/<%=it.length%>*<%=i%>) + 10px);left:-moz-calc(((100% - 10px)/<%=it.length%>*<%=i%>) + 10px);left:calc(((100% - 10px)/<%=it.length%>*<%=i%>) + 10px);\"></div><div id=\"nat_<%=idw%>_<%=i%>\" class=\"nat-article nat-article<%=i%> <%=(it[i].t=='a' ? 'nat-adv' : '')%> <%=(it[i].cl ? it[i].cl : '')%> <%=((it[i].t=='a' && s_l==1) ? 'label_adv' : '')%>\" data-idw=\"<%=idw%>\" data-idr=\"<%=it[i].id%>\" data-idu=\"<%=idu%>\" data-idi=\"<%=idi%>\" data-idic=\"<%=it[i].ici%>\" style=\"<%=(i_lfs ? 'font-size:'+i_lfs+';' : '')+(p_bg ? ' background-color:'+p_bg+';\"' : '')%>\"><div class=\"nat-figure\"><%=a%><img class=\"nat-image<%= (i_r ? ' nat-rounded' : '') %>\" src=\"<%= (it[i].img[0]=='/' ? h_i : '') %><%=it[i].img%>\" width=\"<%=i_w%>px\" height=\"<%=i_w%>px\"></a><%=(it[i].t=='a' ? '<div class=\"nat-adremove\" title=\"Rimuovi questo elemento\"></div>' : '')%><%=(it[i].t=='a' ? '<div class=\"nat-adrestore\" title=\"Annulla rimozione\">annulla</div>' : '')%></div><div class=\"nat-caption\"><%=a%><%=it[i].ti%></a><%=(it[i].bt ? ' <div class=\"nat-sponsor\" style=\"'+(i_btc ? 'color:'+i_btc+';' : '')+(i_lta ? 'text-align:'+i_lta+';' : '')+'\">'+it[i].bt+((s && it[i].t=='a') ? '<span class=\"nat-sponsor-text\"> | Sponsorizzato</span>' : '')+'</div>' : '')%><% if(it[i].t=='a') {for ( var irp = 0; irp < it[i].r_p.length; irp++ ) {if(it[i].r_p[irp].event_type=='impressions') {%><IMG SRC=\"<%= it[i].r_p[irp].pixel_url %>\" BORDER=\"0\" HEIGHT=\"1\" WIDTH=\"1\" ALT=\"Advertisement\" style=\"width:1px;height:1px;float:left;\"><%}}} %></div></div><% } %></div></div> </div> <div class=\"nat-popup\"> </div> <div class=\"nat-adremoveBox\"><div class=\"header\"><strong>Link sponsorizzato rimosso</strong></div><div class=\"body\"><div>Ci puoi dire il motivo?</div><div><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Non mi interessa\" />Non mi interessa<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Non Ã¨ coerente\" />Non &egrave; coerente<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Ã offensivo\" />&Egrave; offensivo<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Ã ripetuto\" />&Egrave; ripetuto<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Volgare/Erotico\" />Volgare/Erotico<br /><input name=\"nat-adremoveInput\" type=\"radio\" value=\"Altro\" />Altro</div></div> </div>";
  function tmpl(str, data) {
    var fn = !/\W/.test(str)
      ? (cache[str] =
          cache[str] || tmpl(document.getElementById(str).innerHTML))
      : new Function(
          "obj",
          "var p=[],print=function(){p.push.apply(p,arguments);};" +
            "with(obj){p.push('" +
            str
              .replace(/[\r\t\n]/g, " ")
              .split("<%")
              .join("\t")
              .replace(/((^|%>)[^\t]*)'/g, "$1\r")
              .replace(/\t=(.*?)%>/g, "',$1,'")
              .split("\t")
              .join("');")
              .split("%>")
              .join("p.push('")
              .split("\r")
              .join("\\'") +
            "');}return p.join('');"
        );
    return data ? fn(data) : fn;
  }
  var urlCDN = "//cdn.nativery.com";
  var urlWidget = "//w.nativery.com/delivery";
  var nativeryEnvironment = "productionNO";
  var urlTrack = "https://7fom0j1j3g.execute-api.eu-west-1.amazonaws.com/track";

  var $jsonp = (function () {
    var that = {};

    that.send = function (src, nativeryData, options) {
      var callback_name = options.callbackName || "callback",
        on_success = options.onSuccess || function () {},
        on_timeout = options.onTimeout || function () {},
        timeout = options.timeout || 10; // sec

      var timeout_trigger = window.setTimeout(function () {
        window[callback_name] = function () {};
        on_timeout(nativeryData);
      }, timeout * 1000);

      window[callback_name] = function (data) {
        window.clearTimeout(timeout_trigger);
        on_success(data, nativeryData);
      };

      var script = document.createElement("script");
      script.type = "text/javascript";
      //script.async = true;
      script.src = src;

      document.getElementsByTagName("head")[0].appendChild(script);
    };

    return that;
  })();

  function appendScriptToHead(url) {
    var script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = true;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(script);
  }

  function getPrebidContent(adUnits, nativeryWidgetIds) {
    return document.createTextNode(`
    var NATIVERY_PREBID_TIMEOUT = 20000;
    var adUnits = ${JSON.stringify(adUnits)};
    var nativeryPbjs = nativeryPbjs || {};
    nativeryPbjs.que = nativeryPbjs.que || [];
    nativeryPbjs.que.push(function () {
      nativeryPbjs.addAdUnits(adUnits);
      nativeryPbjs.setConfig({
        "priceGranularity": "low",
        "maxNestedIframes": 2,
        "currency": {
          "adServerCurrency": "EUR",
          "granularityMultiplier": 1,
          "defaultRates": { "USD": { "EUR": 0.88 }}
        },
        nativery: {
          env: "production",
          widgetIds: ${JSON.stringify(nativeryWidgetIds)} 
        }
      });
      nativeryPbjs.requestBids({ timeout: NATIVERY_PREBID_TIMEOUT });
    });
  `);
  }

  function includePrebid(adUnits, nativeryWidgetIds) {
    // Create script element
    let script = document.createElement("script");
    script.type = "text/javascript";
    // Create script content
    let scriptContent = getPrebidContent(adUnits, nativeryWidgetIds);
    // Append to head
    script.appendChild(scriptContent);
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  // Versione Promise di getUrl
  function ajaxPromise(url, method, body = null) {
    return new Promise(function (resolve, reject) {
      var xhReq = new XMLHttpRequest();
      if ("withCredentials" in xhReq) {
        // XHR for Chrome/Firefox/Opera/Safari.
        xhReq.open(method, url);
        //xhReq.withCredentials = "true";
      } else if (typeof XDomainRequest != "undefined") {
        // XDomainRequest for IE.
        xhReq = new XDomainRequest();
        xhReq.open(method, url);
      } else {
        // CORS not supported.
        xhReq = null;
        console.log("Nativery - Error: CORS not supported");
      }
      xhReq.onreadystatechange = function () {
        if (xhReq.readyState === 4) {
          let status = xhReq.status;
          if (status >= 200 && status < 300) {
            if (status === 204) {
              const nativeryError = xhReq.getResponseHeader("X-nativery-error");
              if (nativeryError) {
                reject(formatXHR(xhReq, false, nativeryError));
              } else {
                resolve(xhReq.responseText);
              }
            } else {
              resolve(xhReq.responseText);
            }
          } else {
            if (xhReq.status == 0) {
              return setTimeout(() => {
                if (xhReq["istimeout"]) return;
                reject(formatXHR(xhReq));
              }, 1);
            } else {
              reject(formatXHR(xhReq));
            }
          }
        }
      };
      xhReq.ontimeout = function () {
        xhReq["istimeout"] = true;
        reject(formatXHR(xhReq, true));
      };
      xhReq.timeout = 129000;
      if (body) {
        xhReq.setRequestHeader("Content-Type", "text/plain");
        xhReq.send(JSON.stringify(body));
      } else {
        xhReq.send();
      }
    });
  }

  function getUrl(url, callback) {
    var xhReq = new XMLHttpRequest();
    if ("withCredentials" in xhReq) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhReq.open("GET", url);
      //xhReq.withCredentials = "true";
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhReq = new XDomainRequest();
      xhReq.open("GET", url);
    } else {
      // CORS not supported.
      xhReq = null;
      console.log("Nativery - Error: CORS not supported");
    }
    xhReq.ontimeout = function () {
      //_la('error', {error_type: 'timeout', error_msg: url});
      callback({ timeout: 1 });
    };
    xhReq.onload = function () {
      if (typeof xhReq != "XDomainRequest" || xhReq.readyState === 4) {
        if (typeof xhReq != "XDomainRequest" || xhReq.status === 200) {
          callback(null, xhReq.responseText);
        } else {
          callback({ status: xhReq.status });
        }
      }
    };

    xhReq.timeout = 129000;
    xhReq.send();
  }

  function isInViewPort(element) {
    if (!element || !hasClass(element, "loaded")) {
      return false;
    }
    var bounding = element.getBoundingClientRect();
    //console.log("bounding", bounding);
    //console.log(bounding.left+" <= "+(window.innerWidth || document.documentElement.clientWidth)+" && "+bounding.top+" <= "+(window.innerHeight || document.documentElement.clientHeight));
    if (
      bounding.left <=
        (window.innerWidth || document.documentElement.clientWidth) &&
      bounding.top <=
        (window.innerHeight || document.documentElement.clientHeight)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function isIframeInViewPort(element, nativery) {
    if (!element || !nativery || !hasClass(nativery, "loaded")) {
      return false;
    }
    try {
      var bounding = element.getBoundingClientRect();
      //console.log("bounding", bounding);
      if (
        bounding.left <=
          (window.parent.innerWidth ||
            window.parent.document.documentElement.clientWidth) &&
        bounding.top <=
          (window.parent.innerHeight ||
            window.parent.document.documentElement.clientHeight)
      ) {
        return true;
      } else {
        return false;
      }
    } catch (ex) {
      return false;
    }
  }

  function isInIframe() {
    try {
      return window.location !== window.parent.location;
    } catch (e) {
      return true;
    }
  }
  function getRealUrl() {
    if (typeof nat_ampref !== "undefined" ? "&ampref=" + nat_ampref : "") {
      return nat_ampref;
    }
    if (window._nativery) {
      return window._nativery.url;
    }
    if (isInIframe()) {
      return window.parent.location.href;
    }
    return document.URL;
  }

  function isJson(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  function getRealReferrer() {
    if (
      typeof nat_amprefref !== "undefined" ? "&ampref=" + nat_amprefref : ""
    ) {
      return nat_amprefref;
    }
    if (window._nativery) {
      return window._nativery.referrer;
    }
    if (isInIframe()) {
      try {
        if (
          window &&
          window.top &&
          window.top.document &&
          window.top.document.referrer
        ) {
          return window.top.document.referrer;
        }
        if (
          window &&
          window.self &&
          window.self.name &&
          window.self.name &&
          isJson(window.self.name) &&
          (name_parsed = JSON.parse(window.self.name)) &&
          name_parsed.attributes &&
          name_parsed.attributes._context
        ) {
          return name_parsed.attributes._context.referrer;
        }
      } catch (ex) {
        return "";
      }
    }
    return document.referrer;
  }

  function getBidderAdapterByType(adapter, bid) {
    let response = {
      bidder: adapter,
      params: {},
    };
    switch (adapter) {
      case "appnexus":
        response.params = { placementId: bid, allowSmallerSizes: true };
    }
    return response;
  }

  function setPrebidAdunits(widgets) {
    let adUnits = [];
    let widgetIds = [];
    let refreshBids = [];
    for (let widget of widgets) {
      widgetIds.push(widget._id);
      // Check if we have already loaded adunits for this widget
      let prebidAdUnits = getPrebidAdUnit(widget);
      if (!GLOBAL_nativeryPrebid.adUnits[widget._id]) {
        adUnits = adUnits.concat(prebidAdUnits);
        // Set flag to avoid the same adunits loaded multiple time
        GLOBAL_nativeryPrebid.adUnits[widget._id] = true;
      } else {
        let adUnitCodes = prebidAdUnits.map((x) => x.code);
        refreshBids = refreshBids.concat(adUnitCodes);
      }
    }

    // If bid already done for same adunits, refresh it without appending new script
    if (refreshBids.length) {
      GLOBAL_nativeryPrebid.refreshBid(refreshBids);
    }

    // Append script only if necessary
    if (adUnits.length) {
      includePrebid(adUnits, widgetIds);
    }
  }

  function getPrebidAdUnit(widget) {
    let adapterList = widget.programmatic_source;
    let totalItems =
      widget.items_counts && widget.items_counts.sponsored > 0
        ? widget.items_counts.sponsored
        : 0;
    let widgetId = widget._id;
    let adUnits = [];
    if (totalItems > 0) {
      for (let adapter in adapterList) {
        if (adapterList.hasOwnProperty(adapter)) {
          let bids = adapterList[adapter];
          for (let i = 0; i < totalItems; i++) {
            adUnits.push({
              code: "nat_" + widgetId + "_" + i,
              mediaTypes: {
                native: {
                  sendTargetingKeys: false,
                  title: {
                    required: true,
                  },
                  image: {
                    required: true,
                    aspect_ratios: [
                      {
                        min_width: 400 /* Optional */,
                        min_height: 300 /* Optional */,
                        ratio_width: 4 /* Required */,
                        ratio_height: 3 /* Required */,
                      },
                    ],
                  },
                  sponsoredBy: {
                    required: true,
                  },
                },
              },
              bids: bids[i] ? [getBidderAdapterByType(adapter, bids[i])] : [],
            });

            adUnits[i].bids.push({
              bidder: "nativery",
              params: {
                widgetId: widgetId,
              },
            });
          }
        }
      }
    }
    return adUnits;
  }

  function loadWidget() {
    /*var nativerycss=document.createElement("link");
    nativerycss.setAttribute("rel", "stylesheet");
    nativerycss.setAttribute("type", "text/css");
    nativerycss.setAttribute("href", urlCDN+'/widget/css/all.css');
    nativerycss.setAttribute('async', '');
    //nativerycss.setAttribute("href", 'all.css');
    document.getElementsByTagName("head")[0].appendChild(nativerycss);*/
    console.log("Nativery - Widgets to load", _natobj["ids"]);
    // NEW METHOD
    if (_natobj["ids"] && _natobj["ids"].length) {
      nativeryRequestNew(_natobj["ids"]);
    }
  }

  function nativeryRequestNew(widgets) {
    console.log("Nativery - Init load widgets", widgets);
    // Load only widget_id that have a corresponding <div id="nat_widget_id"></div>
    // and don't have class 'init' or 'loaded'
    let validWidgets = [];
    // avoid duplicate when the same widget is injected multiple time
    // eg. widget in modal, can be opened, than closed and then re-opend again
    let unique = {};
    for (let widget of widgets) {
      if (Array.isArray(widget.id)) {
        widget.id = widget.id[0];
      }
      if (!unique[widget.id]) {
        let widgetDiv = document.getElementById("nat_" + widget.id);
        if (
          widgetDiv &&
          widgetDiv.className.indexOf("init") === -1 &&
          widgetDiv.className.indexOf("loaded") === -1
        ) {
          validWidgets.push(widget);
          // when widget is injected multiple time and we have already a div, replace
          // with the new ref. E.g. in case modal open, closed and re-open the ref of the
          // previous widget during open, is different form the ref during re-open
          let index = GLOBAL_nativeryWidgetDivs.findIndex(
            (x) => x.id === "nat_" + widget.id
          );
          if (index > -1) {
            GLOBAL_nativeryWidgetDivs[index] = widgetDiv;
          } else {
            GLOBAL_nativeryWidgetDivs.push(widgetDiv);
          }
          unique[widget.id] = true;
        }
      }
    }

    if (validWidgets.length) {
      let ref = encodeURIComponent(getRealUrl());
      let refref = encodeURIComponent(getRealUrl());
      console.log("Nativery - Init request widget", validWidgets);
      Promise.allSettled(
        validWidgets.map((widget) => {
          return ajaxPromise(
            urlWidget +
              "?id=" +
              widget.id +
              "&xhr=2&v=3&ref=" +
              ref +
              "&refref=" +
              refref +
              "&init_prebid=1",
            "GET"
          );
        })
      ).then((promises) => {
        // We have already checked for multiple install code on page load, so clear
        // this check to permit injected code (e.g. widget injected on modal) to be fired again
        delete GLOBAL_nativery.firstLoad;
        let widgets = {
          programmatic: [],
          normal: [],
        };

        for (let index = 0; index < promises.length; index++) {
          let promise = promises[index];
          // Recuperiamo solo le promise che sono andate a buon fine
          if (promise.status === "fulfilled" && promise.value.length) {
            // Verifichiamo lo status e se il widget Ã¨ di tipo programmatic o no
            let widget = JSON.parse(promise.value);
            if (widget) {
              if (widget.programmatic) {
                widgets.programmatic.push(widget);
              } else {
                if (widget.status) {
                  widgets.normal.push(widget);
                }
              }
            }
          } else {
            if (promise.status === "rejected") {
              // track here with promise.reason
              trackError("/delivery", "GET", promise.reason, { ref, refref }, [
                validWidgets[index].id,
              ]);
            }
          }
        }

        if (widgets.programmatic.length) {
          // Check if we need to load prebid
          if (!GLOBAL_nativery.prebidLoaded) {
            appendScriptToHead("//cdn.nativery.com/widget/js/prebid.js");
            // Set flag to avoid to load Prebid multiple times
            GLOBAL_nativery.prebidLoaded = true;
          }

          // Carichiamo nella pagina le adUnits per tutti i widgets
          // di tipo programmatic. In GLOBAL_nativeryWidgetDivs ho tutti i <div> che mi
          // servono dopo quando torna la risposta da prebid
          setPrebidAdunits(widgets.programmatic);
        }

        if (widgets.normal.length) {
          // Carichiamo i widget normali
          showNativeryWidgets(widgets.normal);
        }
      });
    }
  }

  function formatXHR(error, timeout = false, nativeryError = null) {
    return {
      status: timeout ? 408 : error.status,
      message: timeout
        ? "Request Timeout"
        : nativeryError
        ? nativeryError
        : error.response
        ? error.response
        : error.statusText
        ? error.statusText
        : error.status === 0
        ? "CORS error"
        : "Unknown error",
    };
  }

  function trackError(endpoint, method, error, ref, widgetIds = []) {
    if (nativeryEnvironment === "production") {
      const parser = new UAParser();
      const uaParsed = parser.getResult();
      let data = {
        error,
        endpoint,
        method,
        widgetIds,
        referer: ref,
        isAmp: window._nativery ? true : false,
        browser: uaParsed.browser,
        device: uaParsed.device.type ? uaParsed.device : { type: "pc" },
        os: uaParsed.os,
        ua: uaParsed.ua,
      };
      ajaxPromise(urlTrack, "POST", data).catch((e) =>
        console.log("Error on nat.js tracking", e.message)
      );
    }
  }

  function showNativeryWidgets(widgets) {
    for (let widget of widgets) {
      let nativery = GLOBAL_nativeryWidgetDivs.find(
        (x) => x.id === "nat_" + widget.idw
      );
      showData(nativery, widget, widget.idw);
    }
  }

  function ExcludeAdsNK(data) {
    if (isInIframe()) {
      data.its.s.forEach(function (v1, i1) {
        if (v1.n_k && v1.n_k.length > 0) {
          data.its.s.splice(i1, 1);
        }
      });
    } else {
      var content = document.body.textContent || document.body.innerText;
      var textInternal = "";
      data.its.i.forEach(function (vi, ii) {
        textInternal += vi.ti;
      });
      data.its.s.forEach(function (v1, i1) {
        if (v1.n_k && v1.n_k.length > 0) {
          v1.n_k.forEach(function (v2, i2) {
            var negRegEx = new RegExp("(^|\\W)" + v2 + "($|\\W)", "i");
            var hasText = content.search(negRegEx) !== -1;
            var hasTextInt = textInternal.search(negRegEx) !== -1;
            if (hasText || hasTextInt) {
              data.its.s.splice(i1, 1);
            }
          });
        }
      });
    }
    return data;
  }

  function mergeData(data) {
    data.it = [];
    var i_c = 0;
    var i_c_adv = 0;
    var i_flag = true;
    while (i_flag) {
      i_flag = false;
      if (data.its.s[i_c] && i_c_adv < data.itc.s) {
        data.it.push(data.its.s[i_c]);
        i_flag = true;
        i_c_adv++;
      }
      if (data.its.i[i_c]) {
        data.it.push(data.its.i[i_c]);
        i_flag = true;
      }
      i_c++;
    }
    return data;
  }

  function impression(idw, data) {
    let r_params = "?idw=" + idw;
    let ref = getRealUrl();
    let refref = getRealReferrer();
    r_params += "&idu=" + data.idu;
    r_params += "&idi=" + data.idi;
    for (let i = 0; i < data.it.length; i++) {
      r_params += data.it[i].t == "a" ? "&ida=" + data.it[i].id : "";
    }
    r_params += "&ref=" + ref;
    r_params += "&refref=" + refref;
    ajaxPromise(urlWidget.replace("delivery", "r") + r_params, "GET").catch(
      (err) => trackError("/r", "GET", err, { ref, refref }, [idw])
    );
  }

  function firePrebidImpressionsTracker(ads = []) {
    ads.forEach((ad) => {
      if (ad.prebidAdId) {
        if (typeof window.parent.postMessage === "function") {
          window.parent.postMessage(
            JSON.stringify({
              message: "Prebid Native",
              adId: ad.prebidAdId,
            }),
            "*"
          );
        } else if (typeof window.postMessage === "function") {
          window.postMessage(
            JSON.stringify({
              message: "Prebid Native",
              adId: ad.prebidAdId,
            }),
            "*"
          );
        }
      }
    });
  }

  function saveAdsAndImpression(idw, data, prebidData) {
    let url = urlWidget.replace("delivery", "r-prebid");
    let method = "POST";
    let body = {
      idw,
      idu: data.idu,
      ida: prebidData.internalAdsId,
      idi: data.idi,
      external: prebidData.externalAds,
      ref: data.ref,
      refref: data.refref,
    };

    // Fire Prebid Impressions Tracker
    firePrebidImpressionsTracker(prebidData.externalAds);

    return ajaxPromise(url, method, body);
  }

  function finalizeShowData(nativery, dataFinal, idw, prebidData = null) {
    var tpl = tpl_old;
    if (dataFinal.w_t === "orizzontale2") {
      tpl = tpl_orizzontale2;
    } else if (dataFinal.w_t === "instagram") {
      tpl = tpl_instagram;
    }
    nativery.innerHTML = tmpl(tpl, dataFinal);
    nativery.className = nativery.className + " loaded";
    console.log("Nativery - Added widget to page", idw);
    iefix(nativery);
    // Per i widget di tipo In Feed Units setto correttamente la width della thumb
    widgetBlockThumbWidthFix(nativery, dataFinal);
    appendAllAdsListener(nativery, prebidData);
    popupApply(nativery);
    scrollerApply(nativery);
    instagramApply(nativery, dataFinal);
    console.log("Call onScrollApply");
    onScrollApply(idw, nativery, dataFinal);
    if (isInIframe()) {
      console.log("Nativery - isInIframe", idw);
      if (window.frameElement) {
        setTimeout(function () {
          window.frameElement.height =
            "" + document.getElementById("nat_" + idw).offsetHeight;
          window.frameElement.width = "100%";
        }, 1000);
      }
    }

    if (window._nativery) {
      setInterval(function () {
        window.dispatchEvent(
          new CustomEvent("amp-widgetCreated", {
            detail: {
              height: document.getElementById("nat_" + idw).offsetHeight,
            },
          })
        );
      }, 250);
      window.addEventListener("resize", function () {
        window.dispatchEvent(
          new CustomEvent("amp-widgetCreated", {
            detail: {
              height: document.getElementById("nat_" + idw).offsetHeight,
            },
          })
        );
      });
    }
  }

  function showData(nativery, data, idw, prebidData = null) {
    data.ref = getRealUrl();
    data.refref = getRealReferrer();
    let dataFinal = mergeData(data);
    if (dataFinal.it.length > 0) {
      console.log("Nativery - Add widget to page", idw);
      if (prebidData) {
        saveAdsAndImpression(idw, dataFinal, prebidData)
          .then((response) => {
            response = JSON.parse(response);
            if (response.status) {
              for (let ad of dataFinal.it) {
                // Se Ã¨ una ad esterna andiamo a sostituire gli id con quelli appena recuperati dal server
                if (ad.bidder) {
                  // Replace fake nativery id with the real nativery id of the external ad
                  let realAd = response.ads.find(
                    (x) => x.external_id === ad.bidder + "_" + ad.id.toString()
                  );
                  if (realAd) {
                    ad.id = "ext::" + realAd.external_id;
                    delete ad.ida;
                  }
                }
              }
              finalizeShowData(nativery, dataFinal, idw, prebidData);
            }
          })
          .catch((err) =>
            trackError(
              "/r-prebid",
              "POST",
              err,
              { ref: data.ref, refref: data.refref },
              [idw]
            )
          );
      } else {
        impression(idw, dataFinal);
        finalizeShowData(nativery, dataFinal, idw);
      }
    } else {
      console.log("Nativery - Error: No items", idw);
    }
    /*if(!itc) {
        itc = 0;
    }*/
    //_la('view', {wid:wid.id, wit_i:dataFinal.its.i.length, wit_s:dataFinal.its.s.length-itc, wit_c:itc});
  }

  function popupshow(popUpnativery) {
    var lang = navigator.language || navigator.userLanguage;
    if (!lang) lang = "it-IT";
    lang = lang.substr(0, 2);
    getUrl(
      urlCDN + "/widget/widget-popup-" + lang + ".html",
      function (err, data) {
        popUpnativery[0].innerHTML = data;
        popUpnativery[0].className = "nat-popup showed";
        var popClose = popUpnativery[0].querySelectorAll(
          ".nat-popup-closeLink"
        );

        var singleClose = popClose[0];
        if (singleClose.addEventListener)
          singleClose.addEventListener(
            "click",
            function (e) {
              popUpnativery[0].className = "nat-popup";
              e.preventDefault();
            },
            false
          );
        else if (singleClose.attachEvent)
          singleClose.attachEvent("onclick", function (e) {
            popUpnativery[0].className = "nat-popup";
            e.preventDefault();
          });
        else
          singleClose.onclick = function (e) {
            popUpnativery[0].className = "nat-popup";
            e.preventDefault();
          };
      }
    );
  }

  function iefix(nativery) {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    if (is_ie) {
      var items = nativery.querySelectorAll(".nat-article");
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.style.width = item.dataset.width;
      }
    }
  }

  function widgetBlockThumbWidthFix(nativery, widgetData) {
    if (
      widgetData.w_s === "Block" &&
      nativery.childNodes &&
      nativery.childNodes.length
    ) {
      // Get first url
      let content = widgetData.it ? widgetData.it[0] : null;
      if (content) {
        // Extract thumb width from url
        let thumbMaxWidth = content.img.split("/").filter((x) => x !== "")[0];
        // Check if the string contains a valid number
        if (!isNaN(thumbMaxWidth)) {
          // Get all divs with class nat-figure
          let maxWidth = 200; // Default max-width
          thumbMaxWidth = parseInt(thumbMaxWidth);
          maxWidth = thumbMaxWidth > maxWidth ? maxWidth : thumbMaxWidth;
          let imagesDiv = nativery.getElementsByClassName("nat-figure");
          if (imagesDiv) {
            for (let image of imagesDiv) {
              // Set image max-width
              image.style.maxWidth = maxWidth + "px";
            }
          }
        }
      }
    }
  }

  function onScrollApply(idw, nativery, data) {
    function checkIsInViewPortRequest() {
      var r_params = "?idw=" + idw;
      let ref = getRealUrl();
      let refref = getRealReferrer();
      r_params += "&idu=" + data.idu;
      r_params += "&idi=" + data.idi;
      for (var i = 0; i < data.it.length; i++) {
        r_params +=
          data.it[i].t == "a"
            ? data.it[i].bidder
              ? "&ide=" + data.it[i].id.split("::")[1] + "_" + data.it[i].cpm // Programmatic Ads mi porto dietro il cpm
              : "&ida=" + data.it[i].id
            : ""; // Internal Ads
      }
      r_params += "&ref=" + ref;
      r_params += "&refref=" + refref;
      let endpoint = data.programmatic ? "rr-prebid" : "rr";
      ajaxPromise(
        urlWidget.replace("delivery", endpoint) + r_params,
        "GET"
      ).catch((err) =>
        trackError("/" + endpoint, "GET", err, { ref, refref }, [idw])
      );
    }
    function _checkIsInViewPort(event) {
      checkIsInViewPort();
    }
    function checkIsInViewPort() {
      if (
        (!isInIframe() && isInViewPort(nativery)) ||
        (isInIframe() && isIframeInViewPort(window.frameElement, nativery)) ||
        (nativery.getElementsByClassName("nat-popOverMobile") &&
          nativery.getElementsByClassName("nat-popOverMobile").length > 0)
      ) {
        window.removeEventListener("scroll", _checkIsInViewPort, false);
        window.parent.removeEventListener("scroll", _checkIsInViewPort, false);
        checkIsInViewPortRequest();
      } else if (window._nativery) {
        /*var ampVisibleInterval = null;
            ampVisibleInterval = setInterval(function() {
                if(window._nativery.visible===undefined || window._nativery.visible) {
                    console.log("Nativery - AMP widget inViewport", idw);
                    checkIsInViewPortRequest();
                    clearInterval(ampVisibleInterval);
                }
            }, 1000);*/
        checkIsInViewPortRequest();
      }
    }
    if (window._nativery) {
      //console.log("_nat0");
      checkIsInViewPortRequest();
    } else if (isInIframe()) {
      try {
        if (window.parent) {
          window.parent.addEventListener("scroll", _checkIsInViewPort, false);
        } else {
          checkIsInViewPortRequest();
        }
      } catch (ex) {
        console.log("Nativery - window.parent exception", idw);
        checkIsInViewPortRequest();
      }
    } else {
      window.addEventListener("scroll", _checkIsInViewPort, false);
      _checkIsInViewPort();
    }
  }

  function appendAllAdsListener(nativery, prebidData) {
    let articles = nativery.querySelectorAll(".nat-article");
    let adremoveBox = nativery.getElementsByClassName("nat-adremoveBox")[0];
    document.addEventListener("click", function (event) {
      let isClickInside = nativery.contains(event.target);
      if (!isClickInside) {
        //the click was outside the specifiedElement, do something
        adremoveBox.style.visibility = "hidden";
      }
    });

    var publisherDomain;
    if (prebidData) {
      var protocol = window.location.protocol.replace(/:$/, "");
      var host = window.location.host.replace(/:(443|80)$/, "");
      publisherDomain = protocol + "://" + host;
    }

    for (var i = 0; i < articles.length; i++) {
      var article = articles[i];
      var isProgrammatic = /ext::/.test(article.dataset.idr);
      if (prebidData && prebidData.externalAds && isProgrammatic) {
        var prebidAd = prebidData.externalAds.find(
          (x) => x.id === article.dataset.idr
        );
        if (prebidAd) {
          addProgrammaticClickTracker(
            article,
            prebidAd.prebidAdId,
            publisherDomain
          );
        }
      }
      buttonRemoveAdApply(nativery, article, isProgrammatic);
    }
  }

  function addProgrammaticClickTracker(article, adId, publisherDomain) {
    var links = article.querySelectorAll("a.pb-click");
    var message = JSON.stringify({
      message: "Prebid Native",
      adId: adId,
      action: "click",
    });
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (link.addEventListener) {
        appendTrackingClickListner(link, message, publisherDomain);
      }
    }
  }

  function appendTrackingClickListner(link, message, publisherDomain) {
    link.addEventListener(
      "click",
      function (event) {
        // Trigger Nativery Click Pixel
        if (link.dataset && link.dataset.trk) {
          triggerNativeryClick(link.dataset.trk);
        }
        // Trigger all other Prebid Click Tracker
        if (typeof window.parent.postMessage === "function") {
          window.parent.postMessage(message, publisherDomain);
        } else if (typeof window.postMessage === "function") {
          window.postMessage(message, publisherDomain);
        }
      },
      true
    );
  }
  /**
   * Inserts an image pixel with the specified `url` for cookie sync
   * @param {string} url URL string to track nativery click
   */
  function triggerNativeryClick(url) {
    ajaxPromise(url, "GET")
      .then(() => console.log("Nativery click fired"))
      .catch((e) => console.log("Error on Nativery click tracking", e.message));

    // Taken from Prebid, got problem with Chrome
    // see https://stackoverflow.com/questions/66293572/the-chrome-devtools-network-tab-fires-the-same-request-multiple-time
    // const img = new Image();
    // img.src = url;
  }

  function buttonRemoveAdApply(nativery, article, isProgrammatic) {
    (function () {
      if (hasClass(article, "nat-adv")) {
        var box = article.getElementsByClassName("nat-adremove");
        if (box[0]) {
          box = box[0];
          if (box.addEventListener) {
            box.addEventListener(
              "click",
              function (e) {
                removeAd(nativery, article, box, isProgrammatic);
                e.preventDefault();
              },
              false
            );
          } else if (box.attachEvent) {
            box.attachEvent("onclick", function (e) {
              removeAd(nativery, article, box, isProgrammatic);
              e.preventDefault();
            });
          } else {
            box.onclick = function (e) {
              removeAd(nativery, article, box, isProgrammatic);
              e.preventDefault();
            };
          }
        }
        var boxRestore = article.getElementsByClassName("nat-adrestore");
        if (boxRestore[0]) {
          boxRestore = boxRestore[0];
          if (boxRestore.addEventListener) {
            boxRestore.addEventListener(
              "click",
              function (e) {
                restoreAd(nativery, article, boxRestore, isProgrammatic);
                e.preventDefault();
              },
              false
            );
          } else if (boxRestore.attachEvent) {
            boxRestore.attachEvent("onclick", function (e) {
              restoreAd(nativery, article, boxRestore, isProgrammatic);
              e.preventDefault();
            });
          } else {
            boxRestore.onclick = function (e) {
              restoreAd(nativery, article, boxRestore, isProgrammatic);
              e.preventDefault();
            };
          }
        }
      }
    })(); // immediate invocation
  }

  function removeAd(nativery, article, box, isProgrammatic) {
    // widget_id, referef, ad_id, impression,
    var idw = article.dataset.idw;
    var idr = article.dataset.idr;
    var idu = article.dataset.idu;
    var idi = article.dataset.idi;
    var idic = article.dataset.idic;
    let removeLink = isProgrammatic ? "ar-prebid" : "adRemove";
    let removeReasonLink = isProgrammatic ? "arr-prebid" : "adRemoveReason";
    getUrl(
      urlWidget.replace("delivery", removeLink) +
        "?idw=" +
        idw +
        "&idr=" +
        idr +
        "&idu=" +
        idu +
        "&idi=" +
        idi +
        "&idic=" +
        idic +
        "&ref=" +
        encodeURIComponent(getRealUrl()) +
        "&refref=" +
        encodeURIComponent(getRealReferrer()),
      function (err, data) {
        var boxRestore = article.getElementsByClassName("nat-adrestore");
        if (boxRestore[0]) {
          boxRestore = boxRestore[0];
          boxRestore.style.display = "inherit";
        }
        /*(function () {
            var boxRestore = article.getElementsByClassName('nat-adrestore');
            if(boxRestore[0]) {
                boxRestore = boxRestore[0];
                boxRestore.style.visibility = 'visible';
                if (boxRestore.addEventListener)
                    boxRestore.addEventListener("click", function(e) { restoreAd(nativery, article, boxRestore); e.preventDefault(); } , false);
                else if (boxRestore.attachEvent)
                    boxRestore.attachEvent("onclick", function(e) { restoreAd(nativery, article, boxRestore); e.preventDefault(); });
                else
                    boxRestore.onclick = function(e) { restoreAd(nativery, article, boxRestore); e.preventDefault(); };
            }
            document.addEventListener('click', function(event) {
                var isClickInside = article.contains(event.target);
                if (!isClickInside) {
                  //the click was outside the specifiedElement, do something
                  console.log("Cliiiiiiiiiiiiiiiicks");
                  adremoveBox.style.visibility = 'hidden';
                }
            });
        }()); // immediate invocation
        */
        box.style.visibility = "hidden";
        addClass(article, "removed");
        //var rect = box.getBoundingClientRect();
        //console.log(rect.top, rect.right, rect.bottom, rect.left);
        var adremoveBox = nativery.getElementsByClassName("nat-adremoveBox")[0];
        adremoveBox.style.visibility = "visible";
        //adremoveBox.style.position = 'absolute';
        //adremoveBox.style.top = (e.pageY+25) +'px';
        //adremoveBox.style.left = Math.max((e.pageX-60), 80) +'px';
        var nat_figure = article.getElementsByClassName("nat-figure")[0];
        adremoveBox.style.top =
          article.offsetTop - article.scrollTop + article.clientTop + 30 + "px";
        adremoveBox.style.left =
          Math.max(
            article.offsetLeft -
              article.scrollLeft +
              article.clientLeft +
              nat_figure.clientWidth -
              80,
            80
          ) + "px";
        var radios = adremoveBox.querySelectorAll('[name="nat-adremoveInput"]');
        for (var i = 0, max = radios.length; i < max; i++) {
          radios[i].checked = false;
          radios[i].onclick = function () {
            getUrl(
              urlWidget.replace("delivery", removeReasonLink) +
                "?idw=" +
                idw +
                "&idr=" +
                idr +
                "&idu=" +
                idu +
                "&idi=" +
                idi +
                "&idic=" +
                idic +
                "&reason=" +
                this.value +
                "&ref=" +
                encodeURIComponent(getRealUrl()) +
                "&refref=" +
                encodeURIComponent(getRealReferrer()),
              function (err, data) {
                adremoveBox.style.visibility = "hidden";
              }
            );
          };
        }
      }
    );
  }

  function restoreAd(nativery, article, boxRestore, isProgrammatic) {
    // widget_id, referef, ad_id, impression,
    var idw = article.dataset.idw;
    var idr = article.dataset.idr;
    var idu = article.dataset.idu;
    var idi = article.dataset.idi;
    var idic = article.dataset.idic;
    let restoreLink = isProgrammatic ? "are-prebid" : "adRestore";
    getUrl(
      urlWidget.replace("delivery", restoreLink) +
        "?idw=" +
        idw +
        "&idr=" +
        idr +
        "&idu=" +
        idu +
        "&idi=" +
        idi +
        "&idic=" +
        idic +
        "&ref=" +
        encodeURIComponent(getRealUrl()) +
        "&refref=" +
        encodeURIComponent(getRealReferrer()),
      function (err, data) {
        (function () {
          var box = article.getElementsByClassName("nat-adremove");
          if (box[0]) {
            box = box[0];
            box.style.visibility = "";
          }
        })(); // immediate invocation
        boxRestore.style.display = "none";
        removeClass(article, "removed");
        var adremoveBox = nativery.getElementsByClassName("nat-adremoveBox")[0];
        adremoveBox.style.visibility = "hidden";
      }
    );
  }

  function popupApply(nativery) {
    var popOpen = nativery.querySelectorAll(".natPopOpen");
    var popUpnativery = nativery.querySelectorAll(".nat-popup");

    for (var i = 0; i < popOpen.length; i++) {
      var singleP = popOpen[i];
      if (singleP.addEventListener)
        singleP.addEventListener(
          "click",
          function (e) {
            popupshow(popUpnativery);
            e.preventDefault();
          },
          false
        );
      else if (singleP.attachEvent)
        singleP.attachEvent("onclick", function (e) {
          popupshow(popUpnativery);
          e.preventDefault();
        });
      else
        singleP.onclick = function (e) {
          popupshow(popUpnativery);
          e.preventDefault();
        };
      /*singleP.addEventListener('click', function(e) {
            popUpnativery[0].className = "nativery-popup showed";
            e.preventDefault();
            }, false);*/
    }

    //-------same height
    var swidget = nativery.querySelectorAll(".nat-widget");
    for (var isw = 0; isw < swidget.length; isw++) {
      var singleWidget = swidget[isw];

      if (
        hasClass(singleWidget, "nat-horizontal") &&
        (hasClass(singleWidget, "nat-wSimple") ||
          hasClass(singleWidget, "nat-wTred") ||
          hasClass(singleWidget, "nat-wGlossy"))
      ) {
        var captions = singleWidget.querySelectorAll(".nat-caption");
        var hightest = 0;

        for (var i = 0; i < captions.length; i++) {
          var height = captions[i].offsetHeight;
          if (height > hightest) {
            hightest = height;
          }
        }
        for (var i = 0; i < captions.length; i++) {
          captions[i].style.minHeight = hightest + "px";
        }
      }
    }

    //------------------
    if (nativery.querySelectorAll(".nat-popOver").length > 0) {
      if (window.addEventListener)
        window.addEventListener(
          "scroll",
          function () {
            onPageScroll(nativery);
          },
          false
        );
      else if (window.attachEvent)
        window.attachEvent("onscroll", function () {
          onPageScroll(nativery);
        });
      else
        window.onscroll = function () {
          onPageScroll(nativery);
        };
    }
    //-------------------
    var popoverToggle = nativery.querySelectorAll(".nat-popOverToggle");
    var popOver = nativery.getElementsByClassName("nat-popOver");
    if (popOver.length > 0) {
      var singlePopClose = popoverToggle[0];
      if (singlePopClose.addEventListener)
        singlePopClose.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            poptoggle(popOver[0], nativery);
          },
          false
        );
      else if (singlePopClose.attachEvent)
        singlePopClose.attachEvent("onclick", function (e) {
          e.preventDefault();
          poptoggle(popOver[0], nativery);
        });
      else
        singlePopClose.onclick = function (e) {
          e.preventDefault();
          poptoggle(popOver[0], nativery);
        };
    }
    var popOverMobile = nativery.getElementsByClassName("nat-popOverMobile");
    if (popOverMobile.length > 0) {
      var singlePopClose = popoverToggle[0];
      if (singlePopClose.addEventListener)
        singlePopClose.addEventListener(
          "click",
          function (e) {
            e.preventDefault();
            popMobiletoggle(popOverMobile[0], nativery);
          },
          false
        );
      else if (singlePopClose.attachEvent)
        singlePopClose.attachEvent("onclick", function (e) {
          e.preventDefault();
          popMobiletoggle(popOverMobile[0], nativery);
        });
      else
        singlePopClose.onclick = function (e) {
          e.preventDefault();
          popMobiletoggle(popOverMobile[0], nativery);
        };
    }
  }

  function scrollerApply(nativery) {
    if (nativery.querySelectorAll(".nat-scroller-main").length > 0) {
      var cel = 0;
      var buttonN = nativery.getElementsByClassName("nat-btnN")[0];
      var buttonP = nativery.getElementsByClassName("nat-btnP")[0];
      var elem = nativery.getElementsByClassName("nat-scroller-container")[0];
      var nItemsSlid = nativery.querySelectorAll(".nat-scroller-container")[0]
        .children[0].children.length;
      var wWithItem =
        nativery.getElementsByClassName("nat-article")[0].offsetWidth;

      var contWith = nItemsSlid * wWithItem;
      nativery.querySelectorAll(".nat-items")[0].style.width = contWith + "px";

      buttonN.addEventListener(
        "click",
        function (e) {
          cel++;
          scroll_to(elem, cel, 400, wWithItem, nativery, contWith);
          e.preventDefault();
        },
        false
      );
      buttonP.addEventListener(
        "click",
        function (e) {
          cel--;
          scroll_to(elem, cel, 400, wWithItem, nativery, contWith);
          e.preventDefault();
        },
        false
      );
    }
  }
  function instagramApply(nativery, dataFinal) {
    let startX = 0;
    let startY = 0;

    function handleTouchStart(e) {
      startX = e.changedTouches[0].screenX;
      startY = e.changedTouches[0].screenY;
    }

    function handleTouchEnd(e, c) {
      const diffX = e.changedTouches[0].screenX - startX;
      const diffY = e.changedTouches[0].screenY - startY;
      const ratioX = Math.abs(diffX / diffY);
      const ratioY = Math.abs(diffY / diffX);
      const absDiff = Math.abs(ratioX > ratioY ? diffX : diffY);

      // Ignore small movements.
      if (absDiff < 30) {
        return;
      }

      if (ratioX > ratioY) {
        if (diffX >= 0) {
          //right swipe
          if (c > 0) {
            var loader = nativery.getElementsByClassName("nat-loader" + c)[0];
            var article = nativery.getElementsByClassName("nat-article" + c)[0];
            loader.innerHTML = "";
            article.style.display = "none";
            loadItem(c - 1);
          }
        } else {
          //left swipe
          if (c + 1 < dataFinal.it.length) {
            var loader = nativery.getElementsByClassName("nat-loader" + c)[0];
            loader.innerHTML = '<div class="nat-loaded"></div>';
            loadItem(c + 1);
          }
        }
      } /* else {
            if (diffY >= 0) {
            console.log('down swipe');
            } else {
            console.log('up swipe');
            }
        }*/
    }

    var myTimeout;
    function loadItem(c) {
      //if(c<0) { return; }
      //if(c>=dataFinal.it.length) { return; }
      if (myTimeout) {
        clearTimeout(myTimeout);
      }
      var loader = nativery.getElementsByClassName("nat-loader" + c)[0];
      var loader_prec = nativery.getElementsByClassName(
        "nat-loader" + (c - 1)
      )[0];
      var article = nativery.getElementsByClassName("nat-article" + c)[0];
      var article_prec = nativery.getElementsByClassName(
        "nat-article" + (c - 1)
      )[0];

      loader.innerHTML = '<div class="nat-bar"></div>';
      if (article_prec) {
        article_prec.style.display = "none";
      }
      article.style.display = "block";

      loader.addEventListener("click", (event) => {
        for (var i = c; i < dataFinal.it.length; i++) {
          var loader_tmp = nativery.getElementsByClassName("nat-loader" + i)[0];
          loader_tmp.innerHTML = "";
          var loader_tmp2 = loader_tmp.cloneNode(true);
          loader_tmp.parentNode.replaceChild(loader_tmp2, loader_tmp);
          var article = nativery.getElementsByClassName("nat-article" + i)[0];
          article.style.display = "none";
        }
        loadItem(c);
      });
      article.addEventListener(
        "touchstart",
        function (e) {
          handleTouchStart(e);
        },
        false
      );
      article.addEventListener(
        "touchend",
        function (e) {
          handleTouchEnd(e, c);
        },
        false
      );

      myTimeout = setTimeout(function () {
        article.removeEventListener("touchstart", handleTouchStart);
        article.removeEventListener("touchend", handleTouchEnd);
        if (c + 1 < dataFinal.it.length) {
          loader.innerHTML = '<div class="nat-loaded"></div>';
          loadItem(c + 1);
        } else {
          var loaders = nativery.getElementsByClassName("nat-loader");
          var articles = nativery.getElementsByClassName("nat-article");
          for (var i = 0; i < loaders.length; i++) {
            loaders[i].innerHTML = "";
            articles[i].style.display = "none";
            loadItem(0);
          }
        }
      }, 6000);
    }

    if (nativery.querySelectorAll(".nat-instagram").length > 0) {
      loadItem(0);
    }
  }

  function onPageScroll(nativery) {
    var popOver = nativery.getElementsByClassName("nat-popOver");
    var nativeryoffsetY = parseInt(window.pageYOffset);

    if (popOver.length > 0) {
      if (nativeryoffsetY < 400) {
        //popOver[0].className = "nativery-widget nativery-popOver";
        removeClass(popOver[0], "nat-popOverOpen");
      } else {
        //popOver[0].className = "nativery-widget nativery-popOver nativery-popOverOpen";
        addClass(popOver[0], "nat-popOverOpen");
        //console.log(popOver[0].innerHTML);
      }
    }
  }
  //-
  function hasClass(ele, cls) {
    return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
  }

  function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
  }

  function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
      var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
      ele.className = ele.className.replace(reg, " ");
    }
  }

  scroll_to = function (elem, num, speed, step, nativery, contWith) {
    if (speed > 0) {
      setTimeout(function () {
        elem.scrollLeft += ((num * step - elem.scrollLeft) / speed) * 10;
        scroll_to(elem, num, speed - 5, step, nativery, contWith);
        checkN(elem, step, nativery, contWith);
      }, 5);
    }
  };

  checkN = function (elem, step, nativery, contWith) {
    //controllo se pos all'inizio o alla fine
    var leftSc = elem.scrollLeft;
    var widgetWith = nativery.getElementsByClassName(
      "nat-scroller-container"
    )[0].offsetWidth;
    var w = contWith - (leftSc + widgetWith);
    if (leftSc <= 0) {
      addClass(nativery.getElementsByClassName("nat-btnP")[0], "nat-hide");
    } else {
      removeClass(nativery.getElementsByClassName("nat-btnP")[0], "nat-hide");
    }
    //--
    if (w <= 0) {
      addClass(nativery.getElementsByClassName("nat-btnN")[0], "nat-hide");
    } else {
      removeClass(nativery.getElementsByClassName("nat-btnN")[0], "nat-hide");
    }
  };

  function poptoggle(elem, nativery) {
    var popoverToggle = nativery.querySelectorAll(".nat-popOverToggle");
    var popOver = nativery.getElementsByClassName("nat-popOver");

    if (hidePop == 0) {
      elem.style.bottom = "-" + (elem.offsetHeight - 30) + "px";
      //popOver[0].className = "nativery-widget nativery-popOver nativery-popOverOpen nativery-popOverHidden";
      addClass(popOver[0], "nat-popOverHidden");
      hidePop = 1;
    } else {
      if (elem.style.removeProperty) {
        elem.style.removeProperty("bottom");
      } else {
        elem.style.removeAttribute("bottom");
      }
      hidePop = 0;
      //popOver[0].className = "nativery-widget nativery-popOver nativery-popOverOpen";
      removeClass(popOver[0], "nat-popOverHidden");
      addClass(popOver[0], "nat-popOverOpen");
    }
  }

  function popMobiletoggle(elem, nativery) {
    var popoverToggle = nativery.querySelectorAll(".nat-popOverToggle");
    var popOverMobile = nativery.getElementsByClassName("nat-popOverMobile");

    if (hidePop == 0) {
      elem.style.bottom = "-" + (elem.offsetHeight - 0) + "px";
      //popOver[0].className = "nativery-widget nativery-popOver nativery-popOverOpen nativery-popOverHidden";
      addClass(popOverMobile[0], "nativery-popOverHidden");
      hidePop = 1;
    } else {
      if (elem.style.removeProperty) {
        elem.style.removeProperty("bottom");
      } else {
        elem.style.removeAttribute("bottom");
      }
      hidePop = 0;
      //popOver[0].className = "nativery-widget nativery-popOver nativery-popOverOpen";
      removeClass(popOverMobile[0], "nat-popOverHidden");
      addClass(popOverMobile[0], "nat-popOverOpen");
    }
  }

  GLOBAL_nativeryLocalFn["showData"] = showData;
  GLOBAL_nativeryLocalFn["ExcludeAdsNK"] = ExcludeAdsNK;
  // Check to avoid loading multiple install code
  if (GLOBAL_nativery.isFirstLoad(GLOBAL_nativery)) {
    //var contWith;
    var hidePop = 0;

    var _natobj = {};

    _natobj["ids"] = [];
    for (i in _nat) {
      if (_nat[i][0] === "id") {
        if (_nat[i][2] === undefined) _nat[i][2] = {};
        _natobj.ids.push({ id: [_nat[i][1]], options: _nat[i][2] });
      } else {
        _natobj[_nat[i][0]] = _nat[i][1];
      }
    }
    if (_natobj.deferred === undefined) _natobj.deferred = false;

    if (_natobj.deferred == true) {
      if (window.addEventListener)
        window.addEventListener("load", loadWidget, false);
      else if (window.attachEvent) window.attachEvent("onload", loadWidget);
      else window.onload = loadWidget;
    } else {
      if (
        document.readyState === "complete" ||
        (document.readyState !== "loading" &&
          !document.documentElement.doScroll)
      ) {
        loadWidget();
      } else {
        document.addEventListener("DOMContentLoaded", loadWidget);
      }
    }
  }
})();
/*!@license
 * UAParser.js v0.7.28
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright Â© 2012-2021 Faisal Salman <f@faisalman.com>
 * Licensed under MIT License
 */
!(function (r, b) {
  "use strict";
  var u = "function",
    e = "undefined",
    c = "object",
    a = "string",
    i = "model",
    s = "name",
    o = "type",
    n = "vendor",
    t = "version",
    l = "architecture",
    w = "console",
    d = "mobile",
    m = "tablet",
    p = "smarttv",
    f = "wearable",
    h = "embedded",
    g = {
      extend: function (i, s) {
        var e,
          o = {};
        for (e in i)
          s[e] && s[e].length % 2 == 0
            ? (o[e] = s[e].concat(i[e]))
            : (o[e] = i[e]);
        return o;
      },
      has: function (i, s) {
        return typeof i == a && -1 !== s.toLowerCase().indexOf(i.toLowerCase());
      },
      lowerize: function (i) {
        return i.toLowerCase();
      },
      major: function (i) {
        return typeof i == a ? i.replace(/[^\d\.]/g, "").split(".")[0] : b;
      },
      trim: function (i, s) {
        return (
          (i = i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")),
          typeof s == e ? i : i.substring(0, 255)
        );
      },
    },
    v = {
      rgx: function (i, s) {
        for (var e, o, r, a, n, t = 0; t < s.length && !a; ) {
          for (var l = s[t], w = s[t + 1], d = (e = 0); d < l.length && !a; )
            if ((a = l[d++].exec(i)))
              for (o = 0; o < w.length; o++)
                (n = a[++e]),
                  typeof (r = w[o]) == c && 0 < r.length
                    ? 2 == r.length
                      ? typeof r[1] == u
                        ? (this[r[0]] = r[1].call(this, n))
                        : (this[r[0]] = r[1])
                      : 3 == r.length
                      ? typeof r[1] != u || (r[1].exec && r[1].test)
                        ? (this[r[0]] = n ? n.replace(r[1], r[2]) : b)
                        : (this[r[0]] = n ? r[1].call(this, n, r[2]) : b)
                      : 4 == r.length &&
                        (this[r[0]] = n
                          ? r[3].call(this, n.replace(r[1], r[2]))
                          : b)
                    : (this[r] = n || b);
          t += 2;
        }
      },
      str: function (i, s) {
        for (var e in s)
          if (typeof s[e] == c && 0 < s[e].length) {
            for (var o = 0; o < s[e].length; o++)
              if (g.has(s[e][o], i)) return "?" === e ? b : e;
          } else if (g.has(s[e], i)) return "?" === e ? b : e;
        return i;
      },
    },
    x = {
      browser: {
        oldSafari: {
          version: {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/",
          },
        },
        oldEdge: {
          version: {
            0.1: "12.",
            21: "13.",
            31: "14.",
            39: "15.",
            41: "16.",
            42: "17.",
            44: "18.",
          },
        },
      },
      os: {
        windows: {
          version: {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
        },
      },
    },
    k = {
      browser: [
        [/\b(?:crmo|crios)\/([\w\.]+)/i],
        [t, [s, "Chrome"]],
        [/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],
        [t, [s, "Edge"]],
        [
          /(opera\smini)\/([\w\.-]+)/i,
          /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,
          /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i,
        ],
        [s, t],
        [/opios[\/\s]+([\w\.]+)/i],
        [t, [s, "Opera Mini"]],
        [/\sopr\/([\w\.]+)/i],
        [t, [s, "Opera"]],
        [
          /(kindle)\/([\w\.]+)/i,
          /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
          /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
          /(ba?idubrowser)[\/\s]?([\w\.]+)/i,
          /(?:ms|\()(ie)\s([\w\.]+)/i,
          /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
          /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,
          /(weibo)__([\d\.]+)/i,
        ],
        [s, t],
        [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
        [t, [s, "UCBrowser"]],
        [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
        [t, [s, "WeChat(Win) Desktop"]],
        [/micromessenger\/([\w\.]+)/i],
        [t, [s, "WeChat"]],
        [/konqueror\/([\w\.]+)/i],
        [t, [s, "Konqueror"]],
        [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
        [t, [s, "IE"]],
        [/yabrowser\/([\w\.]+)/i],
        [t, [s, "Yandex"]],
        [/(avast|avg)\/([\w\.]+)/i],
        [[s, /(.+)/, "$1 Secure Browser"], t],
        [/focus\/([\w\.]+)/i],
        [t, [s, "Firefox Focus"]],
        [/opt\/([\w\.]+)/i],
        [t, [s, "Opera Touch"]],
        [/coc_coc_browser\/([\w\.]+)/i],
        [t, [s, "Coc Coc"]],
        [/dolfin\/([\w\.]+)/i],
        [t, [s, "Dolphin"]],
        [/coast\/([\w\.]+)/i],
        [t, [s, "Opera Coast"]],
        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
        [t, [s, "MIUI Browser"]],
        [/fxios\/([\w\.-]+)/i],
        [t, [s, "Firefox"]],
        [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
        [[s, "360 Browser"]],
        [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
        [[s, /(.+)/, "$1 Browser"], t],
        [/(comodo_dragon)\/([\w\.]+)/i],
        [[s, /_/g, " "], t],
        [
          /\s(electron)\/([\w\.]+)\ssafari/i,
          /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,
          /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i,
        ],
        [s, t],
        [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
        [s],
        [/;fbav\/([\w\.]+);/i],
        [t, [s, "Facebook"]],
        [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
        [[s, "Facebook"]],
        [
          /safari\s(line)\/([\w\.]+)/i,
          /\b(line)\/([\w\.]+)\/iab/i,
          /(chromium|instagram)[\/\s]([\w\.-]+)/i,
        ],
        [s, t],
        [/\bgsa\/([\w\.]+)\s.*safari\//i],
        [t, [s, "GSA"]],
        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
        [t, [s, "Chrome Headless"]],
        [/\swv\).+(chrome)\/([\w\.]+)/i],
        [[s, "Chrome WebView"], t],
        [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
        [t, [s, "Android Browser"]],
        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
        [s, t],
        [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
        [t, [s, "Mobile Safari"]],
        [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
        [t, s],
        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
        [s, [t, v.str, x.browser.oldSafari.version]],
        [/(webkit|khtml)\/([\w\.]+)/i],
        [s, t],
        [/(navigator|netscape)\/([\w\.-]+)/i],
        [[s, "Netscape"], t],
        [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
        [t, [s, "Firefox Reality"]],
        [
          /ekiohf.+(flow)\/([\w\.]+)/i,
          /(swiftfox)/i,
          /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
          /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
          /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
          /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
          /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
          /(links)\s\(([\w\.]+)/i,
          /(gobrowser)\/?([\w\.]*)/i,
          /(ice\s?browser)\/v?([\w\._]+)/i,
          /(mosaic)[\/\s]([\w\.]+)/i,
        ],
        [s, t],
      ],
      cpu: [
        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
        [[l, "amd64"]],
        [/(ia32(?=;))/i],
        [[l, g.lowerize]],
        [/((?:i[346]|x)86)[;\)]/i],
        [[l, "ia32"]],
        [/\b(aarch64|armv?8e?l?)\b/i],
        [[l, "arm64"]],
        [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
        [[l, "armhf"]],
        [/windows\s(ce|mobile);\sppc;/i],
        [[l, "arm"]],
        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
        [[l, /ower/, "", g.lowerize]],
        [/(sun4\w)[;\)]/i],
        [[l, "sparc"]],
        [
          /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
        ],
        [[l, g.lowerize]],
      ],
      device: [
        [
          /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i,
        ],
        [i, [n, "Samsung"], [o, m]],
        [
          /\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,
          /\ssamsung[\s-]([\w-]+)/i,
          /sec-(sgh\w+)/i,
        ],
        [i, [n, "Samsung"], [o, d]],
        [/\((ip(?:hone|od)[\s\w]*);/i],
        [i, [n, "Apple"], [o, d]],
        [
          /\((ipad);[\w\s\),;-]+apple/i,
          /applecoremedia\/[\w\.]+\s\((ipad)/i,
          /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
        ],
        [i, [n, "Apple"], [o, m]],
        [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
        [i, [n, "Huawei"], [o, m]],
        [
          /d\/huawei([\w\s-]+)[;\)]/i,
          /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,
          /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i,
        ],
        [i, [n, "Huawei"], [o, d]],
        [
          /\b(poco[\s\w]+)(?:\sbuild|\))/i,
          /\b;\s(\w+)\sbuild\/hm\1/i,
          /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
          /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,
          /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i,
        ],
        [
          [i, /_/g, " "],
          [n, "Xiaomi"],
          [o, d],
        ],
        [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
        [
          [i, /_/g, " "],
          [n, "Xiaomi"],
          [o, m],
        ],
        [
          /;\s(\w+)\sbuild.+\soppo/i,
          /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
        ],
        [i, [n, "OPPO"], [o, d]],
        [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
        [i, [n, "Vivo"], [o, d]],
        [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
        [i, [n, "Realme"], [o, d]],
        [
          /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,
          /\smot(?:orola)?[\s-](\w*)/i,
          /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i,
        ],
        [i, [n, "Motorola"], [o, d]],
        [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
        [i, [n, "Motorola"], [o, m]],
        [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
        [i, [n, "LG"], [o, m]],
        [
          /(lm-?f100[nv]?|nexus\s[45])/i,
          /lg[e;\s\/-]+((?!browser|netcast)\w+)/i,
          /\blg(\-?[\d\w]+)\sbuild/i,
        ],
        [i, [n, "LG"], [o, d]],
        [
          /(ideatab[\w\-\s]+)/i,
          /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i,
        ],
        [i, [n, "Lenovo"], [o, m]],
        [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
        [
          [i, /_/g, " "],
          [n, "Nokia"],
          [o, d],
        ],
        [/droid.+;\s(pixel\sc)[\s)]/i],
        [i, [n, "Google"], [o, m]],
        [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
        [i, [n, "Google"], [o, d]],
        [
          /droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
        ],
        [i, [n, "Sony"], [o, d]],
        [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
        [
          [i, "Xperia Tablet"],
          [n, "Sony"],
          [o, m],
        ],
        [
          /\s(kb2005|in20[12]5|be20[12][59])\b/i,
          /\ba000(1)\sbuild/i,
          /\boneplus\s(a\d{4})[\s)]/i,
        ],
        [i, [n, "OnePlus"], [o, d]],
        [
          /(alexa)webm/i,
          /(kf[a-z]{2}wi)(\sbuild\/|\))/i,
          /(kf[a-z]+)(\sbuild\/|\)).+silk\//i,
        ],
        [i, [n, "Amazon"], [o, m]],
        [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
        [
          [i, "Fire Phone"],
          [n, "Amazon"],
          [o, d],
        ],
        [/\((playbook);[\w\s\),;-]+(rim)/i],
        [i, n, [o, m]],
        [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
        [i, [n, "BlackBerry"], [o, d]],
        [
          /(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i,
        ],
        [i, [n, "ASUS"], [o, m]],
        [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
        [i, [n, "ASUS"], [o, d]],
        [/(nexus\s9)/i],
        [i, [n, "HTC"], [o, m]],
        [
          /(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,
          /(zte)-(\w*)/i,
          /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
        ],
        [n, [i, /_/g, " "], [o, d]],
        [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
        [i, [n, "Acer"], [o, m]],
        [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
        [i, [n, "Meizu"], [o, d]],
        [
          /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
          /(hp)\s([\w\s]+\w)/i,
          /(asus)-?(\w+)/i,
          /(microsoft);\s(lumia[\s\w]+)/i,
          /(lenovo)[_\s-]?([\w-]+)/i,
          /linux;.+(jolla);/i,
          /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i,
        ],
        [n, i, [o, d]],
        [
          /(archos)\s(gamepad2?)/i,
          /(hp).+(touchpad(?!.+tablet)|tablet)/i,
          /(kindle)\/([\w\.]+)/i,
          /\s(nook)[\w\s]+build\/(\w+)/i,
          /(dell)\s(strea[kpr\s\d]*[\dko])/i,
          /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,
          /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,
          /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,
          /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i,
        ],
        [n, i, [o, m]],
        [/\s(surface\sduo)\s/i],
        [i, [n, "Microsoft"], [o, m]],
        [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
        [i, [n, "Fairphone"], [o, d]],
        [/\s(u304aa)\sbuild/i],
        [i, [n, "AT&T"], [o, d]],
        [/sie-(\w*)/i],
        [i, [n, "Siemens"], [o, d]],
        [/[;\/]\s?(rct\w+)\sbuild/i],
        [i, [n, "RCA"], [o, m]],
        [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
        [i, [n, "Dell"], [o, m]],
        [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
        [i, [n, "Verizon"], [o, m]],
        [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
        [i, [n, "Barnes & Noble"], [o, m]],
        [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
        [i, [n, "NuVision"], [o, m]],
        [/;\s(k88)\sbuild/i],
        [i, [n, "ZTE"], [o, m]],
        [/;\s(nx\d{3}j)\sbuild/i],
        [i, [n, "ZTE"], [o, d]],
        [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
        [i, [n, "Swiss"], [o, d]],
        [/[;\/]\s?(zur\d{3})\sbuild/i],
        [i, [n, "Swiss"], [o, m]],
        [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
        [i, [n, "Zeki"], [o, m]],
        [
          /[;\/]\s([yr]\d{2})\sbuild/i,
          /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i,
        ],
        [[n, "Dragon Touch"], i, [o, m]],
        [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
        [i, [n, "Insignia"], [o, m]],
        [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
        [i, [n, "NextBook"], [o, m]],
        [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
        [[n, "Voice"], i, [o, d]],
        [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
        [[n, "LvTel"], i, [o, d]],
        [/;\s(ph-1)\s/i],
        [i, [n, "Essential"], [o, d]],
        [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
        [i, [n, "Envizen"], [o, m]],
        [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
        [i, [n, "MachSpeed"], [o, m]],
        [/[;\/]\s?tu_(1491)\sbuild/i],
        [i, [n, "Rotor"], [o, m]],
        [/(shield[\w\s]+)\sbuild/i],
        [i, [n, "Nvidia"], [o, m]],
        [/(sprint)\s(\w+)/i],
        [n, i, [o, d]],
        [/(kin\.[onetw]{3})/i],
        [
          [i, /\./g, " "],
          [n, "Microsoft"],
          [o, d],
        ],
        [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
        [i, [n, "Zebra"], [o, m]],
        [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
        [i, [n, "Zebra"], [o, d]],
        [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
        [n, i, [o, w]],
        [/droid.+;\s(shield)\sbuild/i],
        [i, [n, "Nvidia"], [o, w]],
        [/(playstation\s[345portablevi]+)/i],
        [i, [n, "Sony"], [o, w]],
        [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
        [i, [n, "Microsoft"], [o, w]],
        [/smart-tv.+(samsung)/i],
        [n, [o, p]],
        [/hbbtv.+maple;(\d+)/i],
        [
          [i, /^/, "SmartTV"],
          [n, "Samsung"],
          [o, p],
        ],
        [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
        [
          [n, "LG"],
          [o, p],
        ],
        [/(apple)\s?tv/i],
        [n, [i, "Apple TV"], [o, p]],
        [/crkey/i],
        [
          [i, "Chromecast"],
          [n, "Google"],
          [o, p],
        ],
        [/droid.+aft([\w])(\sbuild\/|\))/i],
        [i, [n, "Amazon"], [o, p]],
        [/\(dtv[\);].+(aquos)/i],
        [i, [n, "Sharp"], [o, p]],
        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
        [
          [n, g.trim],
          [i, g.trim],
          [o, p],
        ],
        [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
        [[o, p]],
        [/((pebble))app\/[\d\.]+\s/i],
        [n, i, [o, f]],
        [/droid.+;\s(glass)\s\d/i],
        [i, [n, "Google"], [o, f]],
        [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
        [i, [n, "Zebra"], [o, f]],
        [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
        [n, [o, h]],
        [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
        [i, [o, d]],
        [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
        [i, [o, m]],
        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
        [[o, g.lowerize]],
        [/(android[\w\.\s\-]{0,9});.+build/i],
        [i, [n, "Generic"]],
        [/(phone)/i],
        [[o, d]],
      ],
      engine: [
        [/windows.+\sedge\/([\w\.]+)/i],
        [t, [s, "EdgeHTML"]],
        [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
        [t, [s, "Blink"]],
        [
          /(presto)\/([\w\.]+)/i,
          /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
          /ekioh(flow)\/([\w\.]+)/i,
          /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
          /(icab)[\/\s]([23]\.[\d\.]+)/i,
        ],
        [s, t],
        [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
        [t, s],
      ],
      os: [
        [/microsoft\s(windows)\s(vista|xp)/i],
        [s, t],
        [
          /(windows)\snt\s6\.2;\s(arm)/i,
          /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
          /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i,
        ],
        [s, [t, v.str, x.os.windows.version]],
        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
        [
          [s, "Windows"],
          [t, v.str, x.os.windows.version],
        ],
        [
          /ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
          /cfnetwork\/.+darwin/i,
        ],
        [
          [t, /_/g, "."],
          [s, "iOS"],
        ],
        [
          /(mac\sos\sx)\s?([\w\s\.]*)/i,
          /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i,
        ],
        [
          [s, "Mac OS"],
          [t, /_/g, "."],
        ],
        [
          /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
          /(blackberry)\w*\/([\w\.]*)/i,
          /(tizen|kaios)[\/\s]([\w\.]+)/i,
          /\((series40);/i,
        ],
        [s, t],
        [/\(bb(10);/i],
        [t, [s, "BlackBerry"]],
        [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
        [t, [s, "Symbian"]],
        [/mozilla.+\(mobile;.+gecko.+firefox/i],
        [[s, "Firefox OS"]],
        [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
        [t, [s, "webOS"]],
        [/crkey\/([\d\.]+)/i],
        [t, [s, "Chromecast"]],
        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
        [[s, "Chromium OS"], t],
        [
          /(nintendo|playstation)\s([wids345portablevuch]+)/i,
          /(xbox);\s+xbox\s([^\);]+)/i,
          /(mint)[\/\s\(\)]?(\w*)/i,
          /(mageia|vectorlinux)[;\s]/i,
          /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
          /(hurd|linux)\s?([\w\.]*)/i,
          /(gnu)\s?([\w\.]*)/i,
          /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
          /(haiku)\s(\w+)/i,
        ],
        [s, t],
        [/(sunos)\s?([\w\.\d]*)/i],
        [[s, "Solaris"], t],
        [
          /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
          /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
          /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
          /(unix)\s?([\w\.]*)/i,
        ],
        [s, t],
      ],
    },
    y = function (i, s) {
      if (("object" == typeof i && ((s = i), (i = b)), !(this instanceof y)))
        return new y(i, s).getResult();
      var e =
          i ||
          (void 0 !== r && r.navigator && r.navigator.userAgent
            ? r.navigator.userAgent
            : ""),
        o = s ? g.extend(k, s) : k;
      return (
        (this.getBrowser = function () {
          var i = { name: b, version: b };
          return v.rgx.call(i, e, o.browser), (i.major = g.major(i.version)), i;
        }),
        (this.getCPU = function () {
          var i = { architecture: b };
          return v.rgx.call(i, e, o.cpu), i;
        }),
        (this.getDevice = function () {
          var i = { vendor: b, model: b, type: b };
          return v.rgx.call(i, e, o.device), i;
        }),
        (this.getEngine = function () {
          var i = { name: b, version: b };
          return v.rgx.call(i, e, o.engine), i;
        }),
        (this.getOS = function () {
          var i = { name: b, version: b };
          return v.rgx.call(i, e, o.os), i;
        }),
        (this.getResult = function () {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU(),
          };
        }),
        (this.getUA = function () {
          return e;
        }),
        (this.setUA = function (i) {
          return (
            (e = typeof i == a && 255 < i.length ? g.trim(i, 255) : i), this
          );
        }),
        this.setUA(e),
        this
      );
    };
  (y.VERSION = "0.7.28"),
    (y.BROWSER = { NAME: s, MAJOR: "major", VERSION: t }),
    (y.CPU = { ARCHITECTURE: l }),
    (y.DEVICE = {
      MODEL: i,
      VENDOR: n,
      TYPE: o,
      CONSOLE: w,
      MOBILE: d,
      SMARTTV: p,
      TABLET: m,
      WEARABLE: f,
      EMBEDDED: h,
    }),
    (y.ENGINE = { NAME: s, VERSION: t }),
    (y.OS = { NAME: s, VERSION: t }),
    typeof exports != e
      ? (typeof module != e && module.exports && (exports = module.exports = y),
        (exports.UAParser = y))
      : "function" == typeof define && define.amd
      ? define(function () {
          return y;
        })
      : void 0 !== r && (r.UAParser = y);
  var S,
    E = void 0 !== r && (r.jQuery || r.Zepto);
  E &&
    !E.ua &&
    ((S = new y()),
    (E.ua = S.getResult()),
    (E.ua.get = function () {
      return S.getUA();
    }),
    (E.ua.set = function (i) {
      S.setUA(i);
      var s,
        e = S.getResult();
      for (s in e) E.ua[s] = e[s];
    }));
})("object" == typeof window ? window : this);
