
(function() {
'use strict';

window.headerTagInjected = window.headerTagInjected || false;
window.insticator_tg = window.insticator_tg || null;

var selectedTestGroupInt = null;

if (typeof URLSearchParams !== 'undefined') {
  var urlParams = new URLSearchParams(window.location.search);
  var queryParamKey = "insticator_test_group";
  selectedTestGroupInt = urlParams.get(queryParamKey);
  if (!selectedTestGroupInt) {
    urlParams = new URLSearchParams(window.location.href);
    selectedTestGroupInt = urlParams.get(queryParamKey);
  }
}

/**
 * index.js
 */

main(JSON.parse("{\"tagID\":\"1f255cb8-568c-4ccd-8528-89175572729e\",\"adConfigGroups\":[{\"id\":\"78e8bfb3-7e3f-46f2-bd9e-4292649c6745\",\"trafficPercent\":50.0,\"testGroup\":1},{\"id\":\"7b075032-0c84-4e7b-964a-fae4d7fce8a8\",\"trafficPercent\":0.0,\"testGroup\":0},{\"id\":\"f37073f8-adaa-44f7-b8d5-af1038009d63\",\"trafficPercent\":50.0,\"testGroup\":2}],\"urlPrefix\":\"\/\/d3lcz8vpax4lo2.cloudfront.net\/header-tags\"}"));

/**
 * main.js
 */

function main(config) {
  var groups = config.adConfigGroups;
  var selectedGroupID = null;
  if (selectedTestGroupInt == null) {
    var pickedIndex = pickRandom(calcCumulativeRatios(groups));
    if (pickedIndex >= 0) {
      selectedGroupID = groups[pickedIndex].id;
      window.insticator_tg = groups[pickedIndex].testGroup;
    }
  } else {
    for (var i = 0; i < groups.length; ++i) {
      var group = groups[i];
      if (String(group.testGroup) === selectedTestGroupInt) {
        selectedGroupID = group.id;
        window.insticator_tg = String(group.testGroup);
        break;
      }
    }
  }
  if (selectedGroupID != null && !headerTagInjected) {
    headerTagInjected = true;
    addAsyncScript(config.urlPrefix + '/' + config.tagID + '/' + selectedGroupID + '.js');
  }
}

/**
 * cumulative-ratios.js
 */

/**
 * Calculate cumulative ratios.
 *
 * @param ratios - An array of objects each of which has a property called ratio
 * @return The cumulative ratios
 */
function calcCumulativeRatios(ratios) {
  var result = [];
  var sum = ratios.reduce(function(acc, cur) {
    var ratio = cur.trafficPercent;
    if (ratio < 1e-6) ratio = 0;
    acc += ratio;
    result.push(acc);
    return acc;
  }, 0);
  return sum === 0 ? result : result.map(function(r) { return r / sum; });
}

/**
 * Pick an cumulative ratio randomly.
 *
 * @param ratios - An array of cumulative ratios
 * @return The index of the ratio that is picked
 */
function pickRandom(ratios) {;
  var r = Math.random();
  var len = ratios.length
  for (var i = 0; i < len; ++i) {
    if (r < ratios[i]) return i;
  }
  return -1;
}

/**
 * dom-util.js
 */

function addAsyncScript(src) {
  var doc = window.document;
  var tagName = 'script';
  var scriptElem = doc.createElement(tagName);
  scriptElem.async = true;
  scriptElem.src = src;
  var refTag = doc.getElementsByTagName(tagName)[0];
  var parentNode = refTag ? refTag.parentNode : doc.head;
  parentNode.appendChild(scriptElem);
}

})();

window["Insticator"]["load"] = function(t, o) {
        var embedUUID = o["id"];
        embedLoad(embedUUID);
        checkAndConfirmEmbedUUID(embedUUID);
}
var insticatorQueue = window["Insticator"]["q"];
if(insticatorQueue && insticatorQueue.length>0) {
    for(var i=0; i < insticatorQueue.length; i++) {
        if(insticatorQueue[i]["t"] === "em") {
            var embedUUID = insticatorQueue[i]["o"]["id"];
            embedLoad(embedUUID);
            checkAndConfirmEmbedUUID(embedUUID);
        }
    }
}

function checkAndConfirmEmbedUUID(embedUUID) {
    if(typeof Insticator.ad.confirmEmbedUUID === 'function') {
        Insticator.ad.confirmEmbedUUID(embedUUID);
    }
}

function embedLoad(embedUUID){
    console.log("Prepare to load embed:", embedUUID);
    var targetDiv = document.querySelector("#insticator-container.embedid-" + embedUUID + " #insticator-embed") || document.querySelector("div[embed-id='" + embedUUID + "']") || document.querySelector("#insticator-embed");
    if(!!targetDiv && !targetDiv.childElementCount) {
        appendEmbedElements(targetDiv, embedUUID);
    }
}

function appendEmbedElements(targetElement, embedUUID) {
    var iFrame = document.createElement("iframe");
    iFrame.frameBorder = "0";
    iFrame.scrolling = "no";
    iFrame.marginheight = "0";
    iFrame.marginwidth = "0";
    iFrame.topmargin = "0";
    iFrame.leftmargin = "0";
    iFrame.id = "insticator-iframe";
    iFrame.allowtransparency = "true";
    targetElement.appendChild(iFrame);

    window.setTimeout(function(){
        var div = iFrame.contentWindow.document.createElement("div");
        div.id = "app";
        iFrame.contentWindow.document.body.appendChild(div);

        var script = iFrame.contentWindow.document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://d3lcz8vpax4lo2.cloudfront.net/embed-code/" + embedUUID + ".js";
        iFrame.contentWindow.document.head.appendChild(script);
    },500);
};