<!DOCTYPE html>
<html lang="en-US">
<head><script>if(navigator.userAgent.match(/MSIE|Internet Explorer/i)||navigator.userAgent.match(/Trident\/7\..*?rv:11/i)){var href=document.location.href;if(!href.match(/[?&]nowprocket/)){if(href.indexOf("?")==-1){if(href.indexOf("#")==-1){document.location.href=href+"?nowprocket=1"}else{document.location.href=href.replace("#","?nowprocket=1#")}}else{if(href.indexOf("#")==-1){document.location.href=href+"&nowprocket=1"}else{document.location.href=href.replace("#","&nowprocket=1#")}}}}</script><script>class RocketLazyLoadScripts{constructor(e){this.triggerEvents=e,this.eventOptions={passive:!0},this.userEventListener=this.triggerListener.bind(this),this.delayedScripts={normal:[],async:[],defer:[]},this.allJQueries=[]}_addUserInteractionListener(e){this.triggerEvents.forEach((t=>window.addEventListener(t,e.userEventListener,e.eventOptions)))}_removeUserInteractionListener(e){this.triggerEvents.forEach((t=>window.removeEventListener(t,e.userEventListener,e.eventOptions)))}triggerListener(){this._removeUserInteractionListener(this),"loading"===document.readyState?document.addEventListener("DOMContentLoaded",this._loadEverythingNow.bind(this)):this._loadEverythingNow()}async _loadEverythingNow(){this._delayEventListeners(),this._delayJQueryReady(this),this._handleDocumentWrite(),this._registerAllDelayedScripts(),this._preloadAllScripts(),await this._loadScriptsFromList(this.delayedScripts.normal),await this._loadScriptsFromList(this.delayedScripts.defer),await this._loadScriptsFromList(this.delayedScripts.async),await this._triggerDOMContentLoaded(),await this._triggerWindowLoad(),window.dispatchEvent(new Event("rocket-allScriptsLoaded"))}_registerAllDelayedScripts(){document.querySelectorAll("script[type=rocketlazyloadscript]").forEach((e=>{e.hasAttribute("src")?e.hasAttribute("async")&&!1!==e.async?this.delayedScripts.async.push(e):e.hasAttribute("defer")&&!1!==e.defer||"module"===e.getAttribute("data-rocket-type")?this.delayedScripts.defer.push(e):this.delayedScripts.normal.push(e):this.delayedScripts.normal.push(e)}))}async _transformScript(e){return await this._requestAnimFrame(),new Promise((t=>{const n=document.createElement("script");let r;[...e.attributes].forEach((e=>{let t=e.nodeName;"type"!==t&&("data-rocket-type"===t&&(t="type",r=e.nodeValue),n.setAttribute(t,e.nodeValue))})),e.hasAttribute("src")?(n.addEventListener("load",t),n.addEventListener("error",t)):(n.text=e.text,t()),e.parentNode.replaceChild(n,e)}))}async _loadScriptsFromList(e){const t=e.shift();return t?(await this._transformScript(t),this._loadScriptsFromList(e)):Promise.resolve()}_preloadAllScripts(){var e=document.createDocumentFragment();[...this.delayedScripts.normal,...this.delayedScripts.defer,...this.delayedScripts.async].forEach((t=>{const n=t.getAttribute("src");if(n){const t=document.createElement("link");t.href=n,t.rel="preload",t.as="script",e.appendChild(t)}})),document.head.appendChild(e)}_delayEventListeners(){let e={};function t(t,n){!function(t){function n(n){return e[t].eventsToRewrite.indexOf(n)>=0?"rocket-"+n:n}e[t]||(e[t]={originalFunctions:{add:t.addEventListener,remove:t.removeEventListener},eventsToRewrite:[]},t.addEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.add.apply(t,arguments)},t.removeEventListener=function(){arguments[0]=n(arguments[0]),e[t].originalFunctions.remove.apply(t,arguments)})}(t),e[t].eventsToRewrite.push(n)}function n(e,t){let n=e[t];Object.defineProperty(e,t,{get:()=>n||function(){},set(r){e["rocket"+t]=n=r}})}t(document,"DOMContentLoaded"),t(window,"DOMContentLoaded"),t(window,"load"),t(window,"pageshow"),t(document,"readystatechange"),n(document,"onreadystatechange"),n(window,"onload"),n(window,"onpageshow")}_delayJQueryReady(e){let t=window.jQuery;Object.defineProperty(window,"jQuery",{get:()=>t,set(n){if(n&&n.fn&&!e.allJQueries.includes(n)){n.fn.ready=n.fn.init.prototype.ready=function(t){e.domReadyFired?t.bind(document)(n):document.addEventListener("rocket-DOMContentLoaded",(()=>t.bind(document)(n)))};const t=n.fn.on;n.fn.on=n.fn.init.prototype.on=function(){if(this[0]===window){function e(e){return e.split(" ").map((e=>"load"===e||0===e.indexOf("load.")?"rocket-jquery-load":e)).join(" ")}"string"==typeof arguments[0]||arguments[0]instanceof String?arguments[0]=e(arguments[0]):"object"==typeof arguments[0]&&Object.keys(arguments[0]).forEach((t=>{delete Object.assign(arguments[0],{[e(t)]:arguments[0][t]})[t]}))}return t.apply(this,arguments),this},e.allJQueries.push(n)}t=n}})}async _triggerDOMContentLoaded(){this.domReadyFired=!0,await this._requestAnimFrame(),document.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._requestAnimFrame(),window.dispatchEvent(new Event("rocket-DOMContentLoaded")),await this._requestAnimFrame(),document.dispatchEvent(new Event("rocket-readystatechange")),await this._requestAnimFrame(),document.rocketonreadystatechange&&document.rocketonreadystatechange()}async _triggerWindowLoad(){await this._requestAnimFrame(),window.dispatchEvent(new Event("rocket-load")),await this._requestAnimFrame(),window.rocketonload&&window.rocketonload(),await this._requestAnimFrame(),this.allJQueries.forEach((e=>e(window).trigger("rocket-jquery-load"))),window.dispatchEvent(new Event("rocket-pageshow")),await this._requestAnimFrame(),window.rocketonpageshow&&window.rocketonpageshow()}_handleDocumentWrite(){const e=new Map;document.write=document.writeln=function(t){const n=document.currentScript,r=document.createRange(),i=n.parentElement;let o=e.get(n);void 0===o&&(o=n.nextSibling,e.set(n,o));const a=document.createDocumentFragment();r.setStart(a,0),a.appendChild(r.createContextualFragment(t)),i.insertBefore(a,o)}}async _requestAnimFrame(){return new Promise((e=>requestAnimationFrame(e)))}static run(){const e=new RocketLazyLoadScripts(["keydown","mousemove","touchmove","touchstart","touchend","wheel"]);e._addUserInteractionListener(e)}}RocketLazyLoadScripts.run();
</script>
<meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <link rel="pingback" href="https://www.highgroundgaming.com/xmlrpc.php" /> <!--[if lt IE 9]>	<script src="https://www.highgroundgaming.com/wp-content/themes/Divi/js/html5.js" type="text/javascript"></script>	<![endif]--> <script type="rocketlazyloadscript" data-rocket-type="text/javascript">		document.documentElement.className = 'js';	</script>
<script>var et_site_url='https://www.highgroundgaming.com';var et_post_id='0';function et_core_page_resource_fallback(a,b){"undefined"===typeof b&&(b=a.sheet.cssRules&&0===a.sheet.cssRules.length);b&&(a.onerror=null,a.onload=null,a.href?a.href=et_site_url+"/?et_core_page_resource="+a.id+et_post_id:a.src&&(a.src=et_site_url+"/?et_core_page_resource="+a.id+et_post_id))}
</script><meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />

<title>High Ground Gaming | Gain the High Ground.</title><link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Open%20Sans%3A400%2C700%7CRoboto%20Condensed%3A300%2C300italic%2Cregular%2Citalic%2C700%2C700italic%7COpen%20Sans%3A300%2C300italic%2Cregular%2Citalic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%7CRoboto%3A100%2C100italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C700%2C700italic%2C900%2C900italic&#038;subset=latin%2Clatin-ext&#038;display=swap" /><style id="" media="print" onload="this.media='all'">/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWyV9hmIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWyV9hvIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWyV9hnIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWyV9hoIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWyV9hkIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWyV9hlIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWyV9hrIqOxjaPX.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem6YaGs126MiZpBA-UFUK0Udc1GAK6bt6o.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem6YaGs126MiZpBA-UFUK0ddc1GAK6bt6o.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem6YaGs126MiZpBA-UFUK0Vdc1GAK6bt6o.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem6YaGs126MiZpBA-UFUK0adc1GAK6bt6o.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem6YaGs126MiZpBA-UFUK0Wdc1GAK6bt6o.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem6YaGs126MiZpBA-UFUK0Xdc1GAK6bt6o.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem6YaGs126MiZpBA-UFUK0Zdc1GAK6b.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKXGUdhmIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKXGUdhvIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKXGUdhnIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKXGUdhoIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKXGUdhkIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKXGUdhlIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKXGUdhrIqOxjaPX.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWiUNhmIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWiUNhvIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWiUNhnIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWiUNhoIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWiUNhkIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWiUNhlIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKWiUNhrIqOxjaPX.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKW-U9hmIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKW-U9hvIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKW-U9hnIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKW-U9hoIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKW-U9hkIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKW-U9hlIqOxjaPXZSk.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/memnYaGs126MiZpBA-UFUKW-U9hrIqOxjaPX.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN_r8OX-hpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN_r8OVuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN_r8OXuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN_r8OUehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN_r8OXehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN_r8OXOhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOX-hpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOVuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOXuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOUehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOXehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN8rsOX-hpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN8rsOVuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN8rsOXuhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN8rsOUehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN8rsOXehpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN8rsOXOhpKKSTj5PW.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN8rsOUuhpKKSTjw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEz0dL-vwnYh2eg.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEzQdL-vwnYh2eg.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEzwdL-vwnYh2eg.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEzMdL-vwnYh2eg.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEz8dL-vwnYh2eg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEz4dL-vwnYh2eg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOiCnqEu92Fr1Mu51QrEzAdL-vwnYg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc3CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc-CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc2CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc5CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc1CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc0CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TjASc6CsTYl4BO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xFIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xMIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xEIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xLIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xHIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xGIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc3CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc-CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc2CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc5CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc1CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc0CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51S7ACc6CsTYl4BO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic3CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic-CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic2CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic5CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic1CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic0CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TzBic6CsTYl4BO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc3CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc-CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc2CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc5CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc1CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc0CsTYl4BOQ3o.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOjCnqEu92Fr1Mu51TLBCc6CsTYl4BO.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxFIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxMIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxEIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxLIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxHIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxGIzIXKMnyrYk.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOkCnqEu92Fr1MmgVxIIzIXKMny.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCBc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fCBc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfCRc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfABc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfCBc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfBxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfCxc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfChc4AMP6lbBP.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmYUtfBBc4AMP6lQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoYNNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoadNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoYdNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEobtNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoYtNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEoY9NZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDpCEobdNZUSdy4Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAgM9QPFUex17.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLCwM9QPFUex17.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAwM9QPFUex17.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLDAM9QPFUex17.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAAM9QPFUex17.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLAQM9QPFUex17.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVj2ZhZI2eCN5jzbjEETS9weq8-19eLDwM9QPFUew.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoYNNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoadNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoYdNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYobtNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoYtNZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYoY9NZUSdy4ehI.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVg2ZhZI2eCN5jzbjEETS9weq8-19eDtCYobdNZUSdy4Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCkYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCAYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCgYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCcYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCsYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCoYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-33mZGCQYb9lecyU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19-7DQk6YvNkeg.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19a7DQk6YvNkeg.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-1967DQk6YvNkeg.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19G7DQk6YvNkeg.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-1927DQk6YvNkeg.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19y7DQk6YvNkeg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVl2ZhZI2eCN5jzbjEETS9weq8-19K7DQk6YvM.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCkYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCAYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCgYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCcYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0370-03FF;
}
/* vietnamese */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCsYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCoYb9lecyVC4A.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(/fonts.gstatic.com/s/robotocondensed/v19/ieVi2ZhZI2eCN5jzbjEETS9weq8-32meGCQYb9lecyU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open%20Sans%3A400%2C700%7CRoboto%20Condensed%3A300%2C300italic%2Cregular%2Citalic%2C700%2C700italic%7COpen%20Sans%3A300%2C300italic%2Cregular%2Citalic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%7CRoboto%3A100%2C100italic%2C300%2C300italic%2Cregular%2Citalic%2C500%2C500italic%2C700%2C700italic%2C900%2C900italic&#038;subset=latin%2Clatin-ext&#038;display=swap" /></noscript>
<meta name="description" content="Gain the High Ground." />
<link rel="canonical" href="https://www.highgroundgaming.com/" />
<link rel="next" href="https://www.highgroundgaming.com/page/2/" />
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="High Ground Gaming | Gain the High Ground." />
<meta property="og:description" content="Gain the High Ground." />
<meta property="og:url" content="https://www.highgroundgaming.com/" />
<meta property="og:site_name" content="High Ground Gaming" />
<meta name="twitter:card" content="summary_large_image" />
<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://www.highgroundgaming.com/#website","url":"https://www.highgroundgaming.com/","name":"High Ground Gaming","description":"Gain the High Ground.","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.highgroundgaming.com/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"CollectionPage","@id":"https://www.highgroundgaming.com/#webpage","url":"https://www.highgroundgaming.com/","name":"High Ground Gaming | Gain the High Ground.","isPartOf":{"@id":"https://www.highgroundgaming.com/#website"},"description":"Gain the High Ground.","breadcrumb":{"@id":"https://www.highgroundgaming.com/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://www.highgroundgaming.com/"]}]},{"@type":"BreadcrumbList","@id":"https://www.highgroundgaming.com/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]}]}</script>

<link rel='dns-prefetch' href='//scripts.mediavine.com' />
<link href='https://fonts.gstatic.com' crossorigin rel='preconnect' />
<link rel="alternate" type="application/rss+xml" title="High Ground Gaming &raquo; Feed" href="https://www.highgroundgaming.com/feed/" />
<link rel="alternate" type="application/rss+xml" title="High Ground Gaming &raquo; Comments Feed" href="https://www.highgroundgaming.com/comments/feed/" />
<meta content="Divi Child Theme v.Updated for Divi 3+" name="generator" /><style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='stylesheet' id='wp-block-library-css' href='https://www.highgroundgaming.com/wp-includes/css/dist/block-library/style.min.css?ver=5.8' type='text/css' media='all' />
<link data-minify="1" rel='stylesheet' id='dpsp-frontend-style-pro-css' href='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/plugins/social-pug/assets/dist/style-frontend-pro.2.14.1.css?ver=1627688856' type='text/css' media='all' />
<link rel='stylesheet' id='toc-screen-css' href='https://www.highgroundgaming.com/wp-content/plugins/table-of-contents-plus/screen.min.css?ver=2106' type='text/css' media='all' />
<link data-minify="1" rel='stylesheet' id='parent-style-css' href='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/themes/Divi/style.css?ver=1627688856' type='text/css' media='all' />
<link rel='stylesheet' id='divi-style-css' href='https://www.highgroundgaming.com/wp-content/themes/Divi_Child/style.css?ver=4.9.10' type='text/css' media='all' />
<style id='divi-style-inline-css' type='text/css'>

				picture#logo {
					display: inherit;
				}
				picture#logo source, picture#logo img {
					width: auto;
					max-height: 79%;
					vertical-align: middle;
				}
				@media (min-width: 981px) {
					.et_vertical_nav #main-header picture#logo source,
					.et_vertical_nav #main-header picture#logo img {
						margin-bottom: 28px;
					}
				}
			
</style>
<link data-minify="1" rel='stylesheet' id='tablepress-default-css' href='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/uploads/tablepress-combined.min.css?ver=1627688856' type='text/css' media='all' />
<link rel='stylesheet' id='tablepress-responsive-tables-css' href='https://www.highgroundgaming.com/wp-content/plugins/tablepress-responsive-tables/css/tablepress-responsive.min.css?ver=1.8' type='text/css' media='all' />
<link data-minify="1" rel='stylesheet' id='fontawesome-css' href='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/plugins/wp-review-pro/public/css/font-awesome.min.css?ver=1627688856' type='text/css' media='all' />
<link data-minify="1" rel='stylesheet' id='wp_review-style-css' href='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/plugins/wp-review-pro/public/css/wp-review.css?ver=1627688856' type='text/css' media='all' />
<script type='text/javascript' async="async" data-noptimize="1" data-cfasync="false" src='https://scripts.mediavine.com/tags/high-ground-gaming.js?ver=5.8' id='mv-script-wrapper-js'></script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0' id='jquery-core-js' defer></script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2' id='jquery-migrate-js' defer></script>
<link rel="https://api.w.org/" href="https://www.highgroundgaming.com/wp-json/" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.highgroundgaming.com/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.highgroundgaming.com/wp-includes/wlwmanifest.xml" />
<style type="text/css" data-source="Grow Social by Mediavine">
				@media screen and ( max-width : 720px ) {
					.dpsp-content-wrapper.dpsp-hide-on-mobile,
					.dpsp-share-text.dpsp-hide-on-mobile,
					.dpsp-content-wrapper .dpsp-network-label {
						display: none;
					}
					.dpsp-has-spacing .dpsp-networks-btns-wrapper li {
						margin:0 2% 10px 0;
					}
					.dpsp-network-btn.dpsp-has-label:not(.dpsp-has-count) {
						max-height: 40px;
						padding: 0;
						justify-content: center;
					}
					.dpsp-content-wrapper.dpsp-size-small .dpsp-network-btn.dpsp-has-label:not(.dpsp-has-count){
						max-height: 32px;
					}
					.dpsp-content-wrapper.dpsp-size-large .dpsp-network-btn.dpsp-has-label:not(.dpsp-has-count){
						max-height: 46px;
					}
				}
			</style><style type="text/css">div#toc_container {width: 100%;}</style><link rel="preload" href="https://www.highgroundgaming.com/wp-content/themes/Divi/core/admin/fonts/modules.ttf" as="font" crossorigin="anonymous"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<script type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {
jQuery(document).ready(function() {
    jQuery(".social-icons > li > a").attr("rel", "nofollow");
});
});</script>
 <style id="wpsp-style-frontend"></style>
<link rel="icon" href="https://www.highgroundgaming.com/wp-content/uploads/2021/04/cropped-hgg_favicon-32x32.png" sizes="32x32" />
<link rel="icon" href="https://www.highgroundgaming.com/wp-content/uploads/2021/04/cropped-hgg_favicon-192x192.png" sizes="192x192" />
<link rel="apple-touch-icon" href="https://www.highgroundgaming.com/wp-content/uploads/2021/04/cropped-hgg_favicon-180x180.png" />
<meta name="msapplication-TileImage" content="https://www.highgroundgaming.com/wp-content/uploads/2021/04/cropped-hgg_favicon-270x270.png" />
<link rel="stylesheet" id="et-divi-customizer-global-cached-inline-styles" href="https://www.highgroundgaming.com/wp-content/et-cache/1/1/global/et-divi-customizer-global-162767141292.min.css" onerror="et_core_page_resource_fallback(this, true)" onload="et_core_page_resource_fallback(this)" /><link rel="stylesheet" id="et-core-unified-cpt-37508-cached-inline-styles" href="https://www.highgroundgaming.com/wp-content/et-cache/1/1/37508/et-core-unified-cpt-37508-162767144792.min.css" onerror="et_core_page_resource_fallback(this, true)" onload="et_core_page_resource_fallback(this)" /><link rel="stylesheet" id="et-core-unified-cpt-37037-cached-inline-styles" href="https://www.highgroundgaming.com/wp-content/et-cache/1/1/37037/et-core-unified-cpt-37037-162767144792.min.css" onerror="et_core_page_resource_fallback(this, true)" onload="et_core_page_resource_fallback(this)" /><noscript><style id="rocket-lazyload-nojs-css">.rll-youtube-player, [data-lazy-src]{display:none !important;}</style></noscript></head>
<body class="home blog et-tb-has-template et-tb-has-body et-tb-has-footer wp-schema-pro-2.6.3 et_bloom et_pb_button_helper_class et_non_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left home-posts et_cover_background et_pb_gutters2 et_divi_theme et-db et_minified_js et_minified_css">
<div id="page-container">
<div id="et-boc" class="et-boc">
<header id="main-header" data-height-onload="45">
<div class="container clearfix et_menu_container">
<div class="logo_container">
<span class="logo_helper"></span>
<a href="https://www.highgroundgaming.com/">
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/04/HGG_Logo.png" width="200" height="99" alt="High Ground Gaming" id="logo" data-height-percentage="79" />
</a>
</div>
<div id="et-top-navigation" data-height="45" data-fixed-height="40">
<nav id="top-menu-nav">
<ul id="top-menu" class="nav"><li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-31570"><a href="https://www.highgroundgaming.com/guides/">Guides</a>
<ul class="sub-menu">
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31569"><a href="https://www.highgroundgaming.com/guides/destiny-2/">Destiny 2</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-38081"><a href="https://www.highgroundgaming.com/guides/eso/">The Elder Scrolls Online</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31571"><a href="https://www.highgroundgaming.com/guides/lol/">League of Legends</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31572"><a href="https://www.highgroundgaming.com/guides/monster-hunter/">Monster Hunter</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31573"><a href="https://www.highgroundgaming.com/guides/osrs/">Old School RuneScape</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-38306"><a href="https://www.highgroundgaming.com/guides/valorant/">VALORANT</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31574"><a href="https://www.highgroundgaming.com/guides/witcher-3/">Witcher 3</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31575"><a href="https://www.highgroundgaming.com/guides/wow/">World of Warcraft</a></li>
</ul>
</li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31633"><a href="https://www.highgroundgaming.com/hardware/">Hardware</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31576"><a href="https://www.highgroundgaming.com/pros/">Pros</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31577"><a href="https://www.highgroundgaming.com/games/">Games</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31578"><a href="https://www.highgroundgaming.com/reviews/">Reviews</a></li>
<li class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-31579"><a href="https://www.highgroundgaming.com/tabletop/">Tabletop</a></li>
<li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-31580"><a href="#">More</a>
<ul class="sub-menu">
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31630"><a href="https://www.highgroundgaming.com/about/">About Us</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31632"><a href="https://www.highgroundgaming.com/meet-the-team/">Meet the Team</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-31631"><a href="https://www.highgroundgaming.com/contact-us/">Get in Touch</a></li>
</ul>
</li>
</ul> </nav>
<div id="et_top_search">
<span id="et_search_icon"></span>
</div>
<div id="et_mobile_nav_menu">
<div class="mobile_nav closed">
<span class="select_page">Select Page</span>
<span class="mobile_menu_bar mobile_menu_bar_toggle"></span>
</div>
</div> </div> 
</div> 
<div class="et_search_outer">
<div class="container et_search_form_container">
<form role="search" method="get" class="et-search-form" action="https://www.highgroundgaming.com/">
<input type="search" class="et-search-field" placeholder="Search &hellip;" value="" name="s" title="Search for:" /> </form>
<span class="et_close_search_field"></span>
</div>
</div>
</header> 
<div id="et-main-area">
<div id="main-content">
<div class="et-l et-l--body">
<div class="et_builder_inner_content et_pb_gutters2"><div class="et_pb_section et_pb_section_0_tb_body et_pb_with_background et_section_regular">
<div class="et_pb_row et_pb_row_0_tb_body">
<div class="et_pb_column et_pb_column_4_4 et_pb_column_0_tb_body  et_pb_css_mix_blend_mode_passthrough et-last-child">
<div class="et_pb_module et_pb_post_slider et_pb_post_slider_0_tb_body hpslide et_pb_slider et_pb_post_slider_image_background et_pb_slider_fullwidth_off et_pb_slider_no_pagination et_pb_slider_with_text_overlay">
<div class="et_pb_slides">
<div data-bg="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide.jpg" class="et_pb_slide et_pb_bg_layout_dark et_pb_post_slide-38435 rocket-lazyload" style="">
<div class="et_pb_container clearfix">
<div class="et_pb_slider_container_inner">
<div class="et_pb_slide_description">
<div class="et_pb_text_overlay_wrapper"> <h2 class="et_pb_slide_title"><a href="https://www.highgroundgaming.com/destiny-2-bounties-guide/">Destiny 2 Bounties Guide: How to Get and Track Them</a></h2>
<div class="et_pb_slide_content
																">
<p class="post-meta">by <span class="author vcard"><a href="https://www.highgroundgaming.com/author/kody-wirth/" title="Posts by Kody Wirth" rel="author">Kody Wirth</a></span> | <span class="published">Jul 29, 2021</span> | <a href="https://www.highgroundgaming.com/guides/destiny-2/" rel="category tag">Destiny 2</a>, <a href="https://www.highgroundgaming.com/guides/" rel="category tag">Guides</a> | 0 Comments</p><div></div> </div>
</div> </div> 
</div>
</div> 
</div> 
<div data-bg="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide.jpg" class="et_pb_slide et_pb_bg_layout_dark et_pb_post_slide-38433 rocket-lazyload" style="">
<div class="et_pb_container clearfix">
<div class="et_pb_slider_container_inner">
<div class="et_pb_slide_description">
<div class="et_pb_text_overlay_wrapper"> <h2 class="et_pb_slide_title"><a href="https://www.highgroundgaming.com/destiny-2-planetary-resources/">Destiny 2 | Planetary Resources Farming Guide (2021)</a></h2>
<div class="et_pb_slide_content
																">
<p class="post-meta">by <span class="author vcard"><a href="https://www.highgroundgaming.com/author/kody-wirth/" title="Posts by Kody Wirth" rel="author">Kody Wirth</a></span> | <span class="published">Jul 29, 2021</span> | <a href="https://www.highgroundgaming.com/guides/destiny-2/" rel="category tag">Destiny 2</a>, <a href="https://www.highgroundgaming.com/guides/" rel="category tag">Guides</a> | 0 Comments</p><div></div> </div>
</div> </div> 
</div>
</div> 
</div> 
<div data-bg="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked.jpg" class="et_pb_slide et_pb_bg_layout_dark et_pb_post_slide-38416 rocket-lazyload" style="">
<div class="et_pb_container clearfix">
<div class="et_pb_slider_container_inner">
<div class="et_pb_slide_description">
<div class="et_pb_text_overlay_wrapper"> <h2 class="et_pb_slide_title"><a href="https://www.highgroundgaming.com/destiny-2-planets-ranked/">All Destiny 2 Planets Ranked From Worst to Best (2021)</a></h2>
<div class="et_pb_slide_content
																">
<p class="post-meta">by <span class="author vcard"><a href="https://www.highgroundgaming.com/author/kody-wirth/" title="Posts by Kody Wirth" rel="author">Kody Wirth</a></span> | <span class="published">Jul 29, 2021</span> | <a href="https://www.highgroundgaming.com/guides/destiny-2/" rel="category tag">Destiny 2</a>, <a href="https://www.highgroundgaming.com/guides/" rel="category tag">Guides</a> | 0 Comments</p><div></div> </div>
</div> </div> 
</div>
</div> 
</div> 
<div data-bg="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2.jpg" class="et_pb_slide et_pb_bg_layout_dark et_pb_post_slide-38455 rocket-lazyload" style="">
<div class="et_pb_container clearfix">
<div class="et_pb_slider_container_inner">
<div class="et_pb_slide_description">
<div class="et_pb_text_overlay_wrapper"> <h2 class="et_pb_slide_title"><a href="https://www.highgroundgaming.com/destiny-2-best-pve-armor/">The Best PvE Armor in Destiny 2 (2021)</a></h2>
<div class="et_pb_slide_content
																">
<p class="post-meta">by <span class="author vcard"><a href="https://www.highgroundgaming.com/author/brett-moss/" title="Posts by Brett Moss" rel="author">Brett Moss</a></span> | <span class="published">Jul 29, 2021</span> | <a href="https://www.highgroundgaming.com/guides/destiny-2/" rel="category tag">Destiny 2</a>, <a href="https://www.highgroundgaming.com/guides/" rel="category tag">Guides</a> | 0 Comments</p><div></div> </div>
</div> </div> 
</div>
</div> 
</div> 
<div data-bg="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW.jpg" class="et_pb_slide et_pb_bg_layout_dark et_pb_post_slide-38478 rocket-lazyload" style="">
<div class="et_pb_container clearfix">
<div class="et_pb_slider_container_inner">
<div class="et_pb_slide_description">
<div class="et_pb_text_overlay_wrapper"> <h2 class="et_pb_slide_title"><a href="https://www.highgroundgaming.com/best-dps-in-wow/">The Best DPS Classes in WoW Shadowlands [2021]</a></h2>
<div class="et_pb_slide_content
																">
<p class="post-meta">by <span class="author vcard"><a href="https://www.highgroundgaming.com/author/jeffrey-hsu/" title="Posts by Jeffrey Hsu" rel="author">Jeffrey Hsu</a></span> | <span class="published">Jul 29, 2021</span> | <a href="https://www.highgroundgaming.com/guides/" rel="category tag">Guides</a>, <a href="https://www.highgroundgaming.com/guides/wow/" rel="category tag">World of Warcraft</a> | 0 Comments</p><div></div> </div>
</div> </div> 
</div>
</div> 
</div> 
</div> 
</div> 
</div> 
</div> <div class="et_pb_row et_pb_row_1_tb_body">
<div class="et_pb_column et_pb_column_1_2 et_pb_column_1_tb_body  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_text et_pb_text_0_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h2>LET&#8217;S CONNECT</h2></div>
</div> <div class="et_pb_module et_pb_text et_pb_text_1_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p>Subscribe to our email newsletter and follow us on social to keep up with the latest gaming news. We have regular giveaways, so keep your eyes peeled for awesome opportunities just ahead!</p></div>
</div> <ul class="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0_tb_body clearfix  et_pb_bg_layout_light">
<li class='et_pb_social_media_follow_network_0_tb_body et_pb_social_icon et_pb_social_network_link  et-social-facebook et_pb_social_media_follow_network_0_tb_body'><a href='https://www.facebook.com/highgg/' class='icon et_pb_with_border' title='Follow on Facebook' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li><li class='et_pb_social_media_follow_network_1_tb_body et_pb_social_icon et_pb_social_network_link  et-social-twitter et_pb_social_media_follow_network_1_tb_body'><a href='https://twitter.com/hgg_WASD' class='icon et_pb_with_border' title='Follow on Twitter' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li><li class='et_pb_social_media_follow_network_2_tb_body et_pb_social_icon et_pb_social_network_link  et-social-instagram et_pb_social_media_follow_network_2_tb_body'><a href='https://www.instagram.com/hgg_wasd/' class='icon et_pb_with_border' title='Follow on Instagram' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li><li class='et_pb_social_media_follow_network_3_tb_body et_pb_social_icon et_pb_social_network_link  et-social-pinterest et_pb_social_media_follow_network_3_tb_body'><a href='https://www.pinterest.com/hgg_wasd/' class='icon et_pb_with_border' title='Follow on Pinterest' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li><li class='et_pb_social_media_follow_network_4_tb_body et_pb_social_icon et_pb_social_network_link  et-social-youtube et_pb_social_media_follow_network_4_tb_body'><a href='https://www.youtube.com/channel/UC2ZHq7Gm1PRRK-N0-0uyfVg' class='icon et_pb_with_border' title='Follow on Youtube' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li>
</ul> 
</div> <div class="et_pb_column et_pb_column_1_2 et_pb_column_2_tb_body  et_pb_css_mix_blend_mode_passthrough et-last-child">
<div class="et_pb_module et_pb_signup_0_tb_body et_pb_newsletter_layout_top_bottom et_pb_newsletter et_pb_subscribe clearfix  et_pb_text_align_left et_pb_bg_layout_dark et_pb_newsletter_description_no_title et_pb_newsletter_description_no_content">
<div class="et_pb_newsletter_description et_multi_view_hidden"></div>
<div class="et_pb_newsletter_form">
<form method="post">
<div class="et_pb_newsletter_result et_pb_newsletter_error"></div>
<div class="et_pb_newsletter_result et_pb_newsletter_success">
<h2>Success!</h2>
</div>
<div class="et_pb_newsletter_fields">
<p class="et_pb_newsletter_field et_pb_contact_field_last et_pb_contact_field_last_tablet et_pb_contact_field_last_phone">
<label class="et_pb_contact_form_label" for="et_pb_signup_firstname" style="display: none;">Name</label>
<input id="et_pb_signup_firstname" class="input" type="text" placeholder="Name" name="et_pb_signup_firstname">
</p>
<p class="et_pb_newsletter_field et_pb_contact_field_last et_pb_contact_field_last_tablet et_pb_contact_field_last_phone">
<label class="et_pb_contact_form_label" for="et_pb_signup_email" style="display: none;">Email</label>
<input id="et_pb_signup_email" class="input" type="text" placeholder="Email" name="et_pb_signup_email">
</p>
<p class="et_pb_newsletter_button_wrap">
<a class="et_pb_newsletter_button et_pb_button" href="#" data-icon="">
<span class="et_subscribe_loader"></span>
<span class="et_pb_newsletter_button_text">Subscribe</span>
</a>
</p>
</div>
<input type="hidden" value="mailerlite" name="et_pb_signup_provider" />
<input type="hidden" value="106965706" name="et_pb_signup_list_id" />
<input type="hidden" value="High Ground Gaming" name="et_pb_signup_account_name" />
<input type="hidden" value="true" name="et_pb_signup_ip_address" /><input type="hidden" value="61bd1874b5fcb5a374e4e42bb1a9c0e5" name="et_pb_signup_checksum" />
</form>
</div>
</div>
</div> 
</div> <div class="et_pb_row et_pb_row_2_tb_body">
<div class="et_pb_column et_pb_column_4_4 et_pb_column_3_tb_body  et_pb_css_mix_blend_mode_passthrough et-last-child">
<div class="et_pb_module et_pb_text et_pb_text_2_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h2>GUIDES</h2></div>
</div> <div class="et_pb_module et_pb_text et_pb_text_3_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p style="text-align: center">Looking for tips and tricks in today&#8217;s most popular games? Our in-depth guides have you covered.</p></div>
</div> 
</div> 
</div> <div class="et_pb_row et_pb_row_3_tb_body et_pb_gutters2">
<div class="et_pb_column et_pb_column_1_4 et_pb_column_4_tb_body  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_image et_pb_image_0_tb_body et_pb_image_sticky">
<a href="https://www.highgroundgaming.com/guides/destiny-2/"><span class="et_pb_image_wrap "><picture title="Destiny 2 Cover" class="wp-image-37565">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover.jpg.webp 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover-480x640.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20600%20800&#039;%3E%3C/svg%3E" data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw" />
<img width="600" height="800" src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20600%20800&#039;%3E%3C/svg%3E" alt="D2 Cover Art" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover.jpg 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover-480x640.jpg 480w" data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover.jpg" />
</picture>
<noscript><picture title="Destiny 2 Cover" class="wp-image-37565">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover.jpg.webp 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover-480x640.jpg.webp 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw"/>
<img width="600" height="800" src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover.jpg" alt="D2 Cover Art" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover.jpg 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Cover-480x640.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw"/>
</picture>
</noscript></span></a>
</div><div class="et_pb_module et_pb_text et_pb_text_4_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h3 style="text-align: center">Destiny 2</h3></div>
</div> 
</div> <div class="et_pb_column et_pb_column_1_4 et_pb_column_5_tb_body  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_image et_pb_image_1_tb_body et_pb_image_sticky">
<a href="https://www.highgroundgaming.com/guides/lol/"><span class="et_pb_image_wrap "><picture title="League of Legends" class="wp-image-38066">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends.jpg.webp 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends-480x640.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20600%20800&#039;%3E%3C/svg%3E" data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw" />
<img width="600" height="800" src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20600%20800&#039;%3E%3C/svg%3E" alt="D2 Cover Art" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends.jpg 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends-480x640.jpg 480w" data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends.jpg" />
</picture>
<noscript><picture title="League of Legends" class="wp-image-38066">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends.jpg.webp 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends-480x640.jpg.webp 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw"/>
<img width="600" height="800" src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends.jpg" alt="D2 Cover Art" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends.jpg 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/League-of-Legends-480x640.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw"/>
</picture>
</noscript></span></a>
</div><div class="et_pb_module et_pb_text et_pb_text_5_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h3 style="text-align: center">League of Legends</h3></div>
</div> 
</div> <div class="et_pb_column et_pb_column_1_4 et_pb_column_6_tb_body  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_image et_pb_image_2_tb_body et_pb_image_sticky">
<a href="https://www.highgroundgaming.com/guides/monster-hunter/"><span class="et_pb_image_wrap "><img width="405" height="541" src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20405%20541'%3E%3C/svg%3E" alt="Monster Hunter" title="Monster Hunter" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Monster-Hunter.jpg 405w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Monster-Hunter-225x300.jpg 225w" data-lazy-sizes="(max-width: 405px) 100vw, 405px" class="wp-image-38070" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Monster-Hunter.jpg" /><noscript><img width="405" height="541" src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Monster-Hunter.jpg" alt="Monster Hunter" title="Monster Hunter" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Monster-Hunter.jpg 405w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Monster-Hunter-225x300.jpg 225w" sizes="(max-width: 405px) 100vw, 405px" class="wp-image-38070" /></noscript></span></a>
</div><div class="et_pb_module et_pb_text et_pb_text_6_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h3 style="text-align: center">Monster Hunter</h3></div>
</div> 
</div> <div class="et_pb_column et_pb_column_1_4 et_pb_column_7_tb_body  et_pb_css_mix_blend_mode_passthrough et-last-child">
<div class="et_pb_module et_pb_image et_pb_image_3_tb_body et_pb_image_sticky">
<a href="https://www.highgroundgaming.com/guides/osrs/"><span class="et_pb_image_wrap "><picture title="OSRS" class="wp-image-38072">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS.jpg.webp 526w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS-480x640.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20526%20701&#039;%3E%3C/svg%3E" data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 526px, 100vw" />
<img width="526" height="701" src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20526%20701&#039;%3E%3C/svg%3E" alt="OSRS" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS.jpg 526w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS-480x640.jpg 480w" data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 526px, 100vw" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS.jpg" />
</picture>
<noscript><picture title="OSRS" class="wp-image-38072">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS.jpg.webp 526w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS-480x640.jpg.webp 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 526px, 100vw"/>
<img width="526" height="701" src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS.jpg" alt="OSRS" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS.jpg 526w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/OSRS-480x640.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 526px, 100vw"/>
</picture>
</noscript></span></a>
</div><div class="et_pb_module et_pb_text et_pb_text_7_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h3 style="text-align: center">Old School RuneScape</h3></div>
</div> 
</div> 
</div> <div class="et_pb_row et_pb_row_4_tb_body et_pb_gutters2">
<div class="et_pb_column et_pb_column_1_4 et_pb_column_8_tb_body  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_image et_pb_image_4_tb_body et_pb_image_sticky">
<a href="https://www.highgroundgaming.com/guides/eso/"><span class="et_pb_image_wrap "><picture title="The ESO" class="wp-image-38125">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO.jpg.webp 420w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO-225x300.jpg.webp 225w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20420%20560&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width: 420px) 100vw, 420px" />
<img width="420" height="560" src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20420%20560&#039;%3E%3C/svg%3E" alt="The ESO" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO.jpg 420w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO-225x300.jpg 225w" data-lazy-sizes="(max-width: 420px) 100vw, 420px" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO.jpg" />
</picture>
<noscript><picture title="The ESO" class="wp-image-38125">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO.jpg.webp 420w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO-225x300.jpg.webp 225w" sizes="(max-width: 420px) 100vw, 420px"/>
<img width="420" height="560" src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO.jpg" alt="The ESO" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO.jpg 420w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-ESO-225x300.jpg 225w" sizes="(max-width: 420px) 100vw, 420px"/>
</picture>
</noscript></span></a>
</div><div class="et_pb_module et_pb_text et_pb_text_8_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h3 style="text-align: center">The Elder Scrolls Online</h3></div>
</div> 
</div> <div class="et_pb_column et_pb_column_1_4 et_pb_column_9_tb_body  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_image et_pb_image_5_tb_body et_pb_image_sticky">
<a href="https://www.highgroundgaming.com/guides/witcher-3/"><span class="et_pb_image_wrap "><picture title="The Witcher" class="wp-image-38087">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art.jpg.webp 420w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art-225x300.jpg.webp 225w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20420%20560&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width: 420px) 100vw, 420px" />
<img width="420" height="560" src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20420%20560&#039;%3E%3C/svg%3E" alt="The Witcher" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art.jpg 420w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art-225x300.jpg 225w" data-lazy-sizes="(max-width: 420px) 100vw, 420px" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art.jpg" />
</picture>
<noscript><picture title="The Witcher" class="wp-image-38087">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art.jpg.webp 420w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art-225x300.jpg.webp 225w" sizes="(max-width: 420px) 100vw, 420px"/>
<img width="420" height="560" src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art.jpg" alt="The Witcher" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art.jpg 420w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Witcher-Art-225x300.jpg 225w" sizes="(max-width: 420px) 100vw, 420px"/>
</picture>
</noscript></span></a>
</div><div class="et_pb_module et_pb_text et_pb_text_9_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h3 style="text-align: center">The Witcher</h3></div>
</div> 
</div> <div class="et_pb_column et_pb_column_1_4 et_pb_column_10_tb_body  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_image et_pb_image_6_tb_body et_pb_image_sticky">
<a href="https://www.highgroundgaming.com/guides/valorant/"><span class="et_pb_image_wrap "><picture title="VALORANT" class="wp-image-38085">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT.jpg.webp 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT-480x640.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20600%20800&#039;%3E%3C/svg%3E" data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw" />
<img width="600" height="800" src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20600%20800&#039;%3E%3C/svg%3E" alt="VALORANT" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT.jpg 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT-480x640.jpg 480w" data-lazy-sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT.jpg" />
</picture>
<noscript><picture title="VALORANT" class="wp-image-38085">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT.jpg.webp 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT-480x640.jpg.webp 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw"/>
<img width="600" height="800" src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT.jpg" alt="VALORANT" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT.jpg 600w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/VALORANT-480x640.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 600px, 100vw"/>
</picture>
</noscript></span></a>
</div><div class="et_pb_module et_pb_text et_pb_text_10_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h3 style="text-align: center">VALORANT</h3></div>
</div> 
</div> <div class="et_pb_column et_pb_column_1_4 et_pb_column_11_tb_body  et_pb_css_mix_blend_mode_passthrough et-last-child">
<div class="et_pb_module et_pb_image et_pb_image_7_tb_body et_pb_image_sticky">
<a href="https://www.highgroundgaming.com/guides/wow/"><span class="et_pb_image_wrap "><picture title="World of Warcraft" class="wp-image-38117">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art.jpg.webp 477w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art-225x300.jpg.webp 225w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20477%20637&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width: 477px) 100vw, 477px" />
<img width="477" height="637" src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20477%20637&#039;%3E%3C/svg%3E" alt="World of Warcraft" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art.jpg 477w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art-225x300.jpg 225w" data-lazy-sizes="(max-width: 477px) 100vw, 477px" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art.jpg" />
</picture>
<noscript><picture title="World of Warcraft" class="wp-image-38117">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art.jpg.webp 477w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art-225x300.jpg.webp 225w" sizes="(max-width: 477px) 100vw, 477px"/>
<img width="477" height="637" src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art.jpg" alt="World of Warcraft" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art.jpg 477w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/WoW-Art-225x300.jpg 225w" sizes="(max-width: 477px) 100vw, 477px"/>
</picture>
</noscript></span></a>
</div><div class="et_pb_module et_pb_text et_pb_text_11_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h3 style="text-align: center">World of Warcraft</h3></div>
</div> 
</div> 
</div> <div class="et_pb_row et_pb_row_5_tb_body">
<div class="et_pb_column et_pb_column_4_4 et_pb_column_12_tb_body  et_pb_css_mix_blend_mode_passthrough et-last-child">
<div class="et_pb_module et_pb_text et_pb_text_12_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><h2>LATEST</h2></div>
</div> <div class="et_pb_module et_pb_text et_pb_text_13_tb_body  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p style="text-align: center"><span class="JsGRdQ">Whether you enjoy news, guides, reviews, or other gaming content â HGG has something for everyone.</span></p></div>
</div> 
</div> 
</div> <div class="et_pb_row et_pb_row_6_tb_body">
<div class="et_pb_column et_pb_column_4_4 et_pb_column_13_tb_body  et_pb_css_mix_blend_mode_passthrough et-last-child">
<div class="et_pb_module et_pb_blog_0_tb_body et_pb_blog_grid_wrapper et_pb_bg_layout_light">
<div class="et_pb_blog_grid clearfix ">
<div class="et_pb_ajax_pagination_container">
<div class="et_pb_salvattore_content" data-columns>
<article id="post-38435" class="et_pb_post clearfix et_pb_blog_item_0_0 post-38435 post type-post status-publish format-standard has-post-thumbnail hentry category-destiny-2 category-guides tag-destiny-2 tag-destiny-2-bounties tag-destiny-2-guide tag-destiny-2-resources">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/destiny-2-bounties-guide/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="Destiny 2 Bounties Guide: How to Get and Track Them" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide-400x250.jpg" alt="Destiny 2 Bounties Guide: How to Get and Track Them" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Bounties-Guide-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/destiny-2-bounties-guide/">Destiny 2 Bounties Guide: How to Get and Track Them</a></h2>
<div class="post-content"><div class="post-content-inner"><p>Bounties in Destiny 2 are brief challenges and objectives meant to enrich your experience when patrolling and playing playlist content. They present great opportunities to stack different challenges...</p>
</div></div>
</article> 
<article id="post-38433" class="et_pb_post clearfix et_pb_blog_item_0_1 post-38433 post type-post status-publish format-standard has-post-thumbnail hentry category-destiny-2 category-guides">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/destiny-2-planetary-resources/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="Destiny 2 | Planetary Resources Farming Guide (2021)" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide-400x250.jpg" alt="Destiny 2 | Planetary Resources Farming Guide (2021)" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Destiny-2-Planetary-Resources-Guide-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/destiny-2-planetary-resources/">Destiny 2 | Planetary Resources Farming Guide (2021)</a></h2>
<div class="post-content"><div class="post-content-inner"><p>Planetary materials are a necessary and expansive currency system within Destiny 2. Each planet includes at least one unique resource to collect, although they are not connected to a direct purchase...</p>
</div></div>
</article> 
<article id="post-38416" class="et_pb_post clearfix et_pb_blog_item_0_2 post-38416 post type-post status-publish format-standard has-post-thumbnail hentry category-destiny-2 category-guides tag-destiny-2 tag-destiny-2-locations tag-destiny-2-planets tag-destiny-2-planets-ranked">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/destiny-2-planets-ranked/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="All Destiny 2 Planets Ranked From Worst to Best (2021)" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked-400x250.jpg" alt="All Destiny 2 Planets Ranked From Worst to Best (2021)" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/The-Destiny-2-Planets-Ranked-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/destiny-2-planets-ranked/">All Destiny 2 Planets Ranked From Worst to Best (2021)</a></h2>
<div class="post-content"><div class="post-content-inner"><p>One of the best parts about any galactic adventure is getting to visit new and exotic worlds. With almost a dozen unique locations within our Solar System emerging over the last few years, Destiny 2...</p>
</div></div>
</article> 
<article id="post-38455" class="et_pb_post clearfix et_pb_blog_item_0_3 post-38455 post type-post status-publish format-standard has-post-thumbnail hentry category-destiny-2 category-guides">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/destiny-2-best-pve-armor/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="The Best PvE Armor in Destiny 2 (2021)" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2-400x250.jpg" alt="The Best PvE Armor in Destiny 2 (2021)" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-PvE-Armor-Destiny-2-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/destiny-2-best-pve-armor/">The Best PvE Armor in Destiny 2 (2021)</a></h2>
<div class="post-content"><div class="post-content-inner"><p>Destiny 2 has a ton of armor options. In fact, Iâd say thatâs one of the reasons so many people like the game. Thereâs no limit to what you can do when it comes to customizing your characterâs...</p>
</div></div>
</article> 
<article id="post-38478" class="et_pb_post clearfix et_pb_blog_item_0_4 post-38478 post type-post status-publish format-standard has-post-thumbnail hentry category-guides category-wow">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/best-dps-in-wow/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="The Best DPS Classes in WoW Shadowlands [2021]" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW-400x250.jpg" alt="The Best DPS Classes in WoW Shadowlands [2021]" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-DPS-in-WoW-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/best-dps-in-wow/">The Best DPS Classes in WoW Shadowlands [2021]</a></h2>
<div class="post-content"><div class="post-content-inner"><p>âThatâs a lotta damage.â The words that every DPS wants to hear when their friends and party members look at the DPS charts and see their name at the top. A top tier DPSer can make previously...</p>
</div></div>
</article> 
<article id="post-38440" class="et_pb_post clearfix et_pb_blog_item_0_5 post-38440 post type-post status-publish format-standard has-post-thumbnail hentry category-display category-reviews">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/aoc-c32g2ze-gaming-monitor-review/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="AOC C32G2ZE Gaming Monitor Review" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2-400x250.jpg" alt="AOC C32G2ZE Gaming Monitor Review" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/AOC-C32G2ZE-2-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/aoc-c32g2ze-gaming-monitor-review/">AOC C32G2ZE Gaming Monitor Review</a></h2>
<div class="post-content"><div class="post-content-inner"><p>AOC has a reputation for building world-class gaming monitors. Now theyâve come out with a new line of G Line 2nd Gen monitors that are sure to keep the competition on their toes. All of these...</p>
</div></div>
</article> 
<article id="post-38378" class="et_pb_post clearfix et_pb_blog_item_0_6 post-38378 post type-post status-publish format-standard has-post-thumbnail hentry category-guides category-eso">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/best-solo-necromancer-builds-eso/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="The Best ESO Necromancer Solo Builds [2021]" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO-400x250.jpg" alt="The Best ESO Necromancer Solo Builds [2021]" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-Solo-Builds-ESO-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/best-solo-necromancer-builds-eso/">The Best ESO Necromancer Solo Builds [2021]</a></h2>
<div class="post-content"><div class="post-content-inner"><p>Soloing in the Flames of Ambition patch on a Necromancer feels very manageable and effective given the large range of skills the Necromancer can take advantage of to excel in any difficulty of Solo...</p>
</div></div>
</article> 
<article id="post-38356" class="et_pb_post clearfix et_pb_blog_item_0_7 post-38356 post type-post status-publish format-standard has-post-thumbnail hentry category-guides category-eso">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/best-pvp-necromancer-builds-eso/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="The Best ESO Necromancer Builds for PvP [2021]" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO-400x250.jpg" alt="The Best ESO Necromancer Builds for PvP [2021]" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVP-Builds-ESO-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/best-pvp-necromancer-builds-eso/">The Best ESO Necromancer Builds for PvP [2021]</a></h2>
<div class="post-content"><div class="post-content-inner"><p>For the Flames of Ambition patch in its current state, Necromancers are a strong pick whether you want to build a magicka or stamina based character. With great class abilities that help...</p>
</div></div>
</article> 
<article id="post-38296" class="et_pb_post clearfix et_pb_blog_item_0_8 post-38296 post type-post status-publish format-standard has-post-thumbnail hentry category-guides category-eso">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/best-pve-necromancer-builds-eso/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="The Best ESO Necromancer Builds for Group PvE [2021]" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO-400x250.jpg" alt="The Best ESO Necromancer Builds for Group PvE [2021]" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-Necromancer-PVE-Builds-in-ESO-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/best-pve-necromancer-builds-eso/">The Best ESO Necromancer Builds for Group PvE [2021]</a></h2>
<div class="post-content"><div class="post-content-inner"><p>In the Flames of Ambition patch, Necromancers are a strong choice for all of the types of play and fit into any group with ease in the Elder Scrolls Online. Necromancers excel at great bursts of AOE...</p>
</div></div>
</article> 
<article id="post-38267" class="et_pb_post clearfix et_pb_blog_item_0_9 post-38267 post type-post status-publish format-standard has-post-thumbnail hentry category-games">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/every-splinter-cell-game-ranked/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="Every Splinter Cell Game Ranked From Worst to Best [2021]" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1-400x250.jpg" alt="Every Splinter Cell Game Ranked From Worst to Best [2021]" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Splinter-Cell-Games-Ranked-1-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/every-splinter-cell-game-ranked/">Every Splinter Cell Game Ranked From Worst to Best [2021]</a></h2>
<div class="post-content"><div class="post-content-inner"><p>Inspired by the original sci-fi, stealth franchise, Metal Gear Solid, Tom Clancyâs Splinter Cell solidified the modern-day mechanics of the stealth-action genre. With six mainline titles, a couple...</p>
</div></div>
</article> 
<article id="post-38002" class="et_pb_post clearfix et_pb_blog_item_0_10 post-38002 post type-post status-publish format-standard has-post-thumbnail hentry category-guides category-valorant">
<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/valorant-best-mouse-sensitivity/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="VALORANT | Best Mouse Sensitivity and DPI Settings (2021)" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings-400x250.jpg" alt="VALORANT | Best Mouse Sensitivity and DPI Settings (2021)" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Valorant-Best-Mouse-Sensitivity-Settings-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/valorant-best-mouse-sensitivity/">VALORANT | Best Mouse Sensitivity and DPI Settings (2021)</a></h2>
<div class="post-content"><div class="post-content-inner"><p>Sensitivity isnât just for emotions or The Force. Your mouse sensitivity is core to your ability to accurately act in the digital space â especially in competitive games like VALORANT. Never gave it...</p>
</div></div>
</article> 
<article id="post-37932" class="et_pb_post clearfix et_pb_blog_item_0_11 post-37932 post type-post status-publish format-standard has-post-thumbnail hentry category-guides">

<div class="et_pb_image_container"><a href="https://www.highgroundgaming.com/best-gta-characters-ranked/" class="entry-featured-image-url"><picture class="">
<source type="image/webp" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked-400x250.jpg.webp 480w" srcset="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" data-lazy-sizes="(max-width:479px) 479px, 100vw" />
<img src="data:image/svg+xml,%3Csvg%20xmlns=&#039;http://www.w3.org/2000/svg&#039;%20viewBox=&#039;0%200%20400%20250&#039;%3E%3C/svg%3E" alt="The 10 Best GTA Playable Characters Ranked [2021]" data-lazy-srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked-400x250.jpg 480w" data-lazy-sizes="(max-width:479px) 479px, 100vw" width="400" height="250" data-lazy-src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked-400x250.jpg" />
</picture>
<noscript><picture class="">
<source type="image/webp" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked.jpg.webp 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked-400x250.jpg.webp 480w" sizes="(max-width:479px) 479px, 100vw"/>
<img src="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked-400x250.jpg" alt="The 10 Best GTA Playable Characters Ranked [2021]" srcset="https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked.jpg 479w, https://www.highgroundgaming.com/wp-content/uploads/2021/07/Best-GTA-Characters-Ranked-400x250.jpg 480w" sizes="(max-width:479px) 479px, 100vw" width="400" height="250"/>
</picture>
</noscript></a></div> 
<h2 class="entry-title"><a href="https://www.highgroundgaming.com/best-gta-characters-ranked/">The 10 Best GTA Playable Characters Ranked [2021]</a></h2>
<div class="post-content"><div class="post-content-inner"><p>Over the years, Rockstar Games has created many unforgettable characters within their flagship Grand Theft Auto series. While some of the playable characters fall into a more basic realm, most can...</p>
</div></div>
</article> 
</div><div><div class="pagination clearfix">
<div class="alignleft"><a href="https://www.highgroundgaming.com/page/2/?et_blog">&laquo; Older Entries</a></div>
<div class="alignright"></div>
</div></div></div> 
</div>
</div>
</div> 
</div> 
</div>  </div>
</div>
</div>
<footer class="et-l et-l--footer">
<div class="et_builder_inner_content et_pb_gutters2">
<div class="et_pb_section et_pb_section_0_tb_footer et_pb_with_background et_section_regular">
<div class="et_pb_row et_pb_row_0_tb_footer et_pb_equal_columns et_pb_gutters1">
<div class="et_pb_column et_pb_column_1_4 et_pb_column_0_tb_footer  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_text et_pb_text_0_tb_footer  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p>Info</p></div>
</div> <div class="et_pb_module et_pb_divider et_pb_divider_0_tb_footer et_pb_divider_position_ et_pb_space"><div class="et_pb_divider_internal"></div></div><div class="et_pb_module et_pb_text et_pb_text_1_tb_footer et_clickable  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p>About</p></div>
</div> <div class="et_pb_module et_pb_text et_pb_text_2_tb_footer et_clickable  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p>Contact Us</p></div>
</div> <div class="et_pb_module et_pb_text et_pb_text_3_tb_footer et_clickable  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p>Our Team</p></div>
</div> <div class="et_pb_module et_pb_text et_pb_text_4_tb_footer et_clickable  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p>Privacy Policy</p></div>
</div> <div class="et_pb_module et_pb_text et_pb_text_5_tb_footer et_clickable  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p>Terms and Conditions</p></div>
</div> 
</div> <div class="et_pb_column et_pb_column_1_4 et_pb_column_1_tb_footer  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_text et_pb_text_6_tb_footer  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p>High Ground Gaming</p></div>
</div> <div class="et_pb_module et_pb_divider et_pb_divider_1_tb_footer et_pb_divider_position_ et_pb_space"><div class="et_pb_divider_internal"></div></div><div class="et_pb_module et_pb_text et_pb_text_7_tb_footer  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p><span>Get to the high ground. HGG is a website that helps gamers optimize their gaming experience and get an edge over their adversaries. Content here is updated regularly, equipping you with the freshest information and latest product selections.</span></p></div>
</div> 
</div> <div class="et_pb_column et_pb_column_1_4 et_pb_column_2_tb_footer  et_pb_css_mix_blend_mode_passthrough">
<div class="et_pb_module et_pb_text et_pb_text_8_tb_footer  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><p>Quote of the Game</p></div>
</div> <div class="et_pb_module et_pb_divider et_pb_divider_2_tb_footer et_pb_divider_position_ et_pb_space"><div class="et_pb_divider_internal"></div></div><div class="et_pb_module et_pb_text et_pb_text_9_tb_footer  et_pb_text_align_center et_pb_bg_layout_light">
<div class="et_pb_text_inner"><blockquote>
<p>For me, the cool thing is doing things that could only be done in gaming.</p>
<p>-Warren Spector</p>
</blockquote></div>
</div> 
</div> <div class="et_pb_column et_pb_column_1_4 et_pb_column_3_tb_footer  et_pb_css_mix_blend_mode_passthrough et-last-child">
<ul class="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0_tb_footer clearfix  et_pb_text_align_center et_pb_bg_layout_light">
<li class='et_pb_social_media_follow_network_0_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-twitter et_pb_social_media_follow_network_0_tb_footer'><a href='https://twitter.com/hgg_WASD' class='icon et_pb_with_border' title='Follow on Twitter' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li><li class='et_pb_social_media_follow_network_1_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-facebook et_pb_social_media_follow_network_1_tb_footer'><a href='https://www.facebook.com/highgg' class='icon et_pb_with_border' title='Follow on Facebook' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li><li class='et_pb_social_media_follow_network_2_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-instagram et_pb_social_media_follow_network_2_tb_footer'><a href='https://www.instagram.com/hgg_wasd/' class='icon et_pb_with_border' title='Follow on Instagram' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li><li class='et_pb_social_media_follow_network_3_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-youtube et_pb_social_media_follow_network_3_tb_footer'><a href='https://www.youtube.com/channel/UC2ZHq7Gm1PRRK-N0-0uyfVg' class='icon et_pb_with_border' title='Follow on Youtube' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li><li class='et_pb_social_media_follow_network_4_tb_footer et_pb_social_icon et_pb_social_network_link  et-social-pinterest et_pb_social_media_follow_network_4_tb_footer'><a href='https://www.pinterest.com/hgg_wasd/' class='icon et_pb_with_border' title='Follow on Pinterest' target="_blank"><span class='et_pb_social_media_follow_network_name' aria-hidden='true'>Follow</span></a></li>
</ul> <div class="et_pb_with_border et_pb_module et_pb_signup_0_tb_footer et_pb_newsletter_layout_left_right et_pb_newsletter et_pb_subscribe clearfix  et_pb_text_align_left et_pb_bg_layout_dark et_pb_no_bg et_pb_newsletter_description_no_title et_pb_newsletter_description_no_content">
<div class="et_pb_newsletter_description et_multi_view_hidden"></div>
<div class="et_pb_newsletter_form">
<form method="post">
<div class="et_pb_newsletter_result et_pb_newsletter_error"></div>
<div class="et_pb_newsletter_result et_pb_newsletter_success">
<h2>Subscribed!</h2>
</div>
<div class="et_pb_newsletter_fields">
<p class="et_pb_newsletter_field et_pb_contact_field_last et_pb_contact_field_last_tablet et_pb_contact_field_last_phone">
<label class="et_pb_contact_form_label" for="et_pb_signup_firstname" style="display: none;">First Name</label>
<input id="et_pb_signup_firstname" class="input" type="text" placeholder="First Name" name="et_pb_signup_firstname">
</p>
<p class="et_pb_newsletter_field et_pb_contact_field_last et_pb_contact_field_last_tablet et_pb_contact_field_last_phone">
<label class="et_pb_contact_form_label" for="et_pb_signup_lastname" style="display: none;">Last Name</label>
<input id="et_pb_signup_lastname" class="input" type="text" placeholder="Last Name" name="et_pb_signup_lastname">
</p>
<p class="et_pb_newsletter_field et_pb_contact_field_last et_pb_contact_field_last_tablet et_pb_contact_field_last_phone">
<label class="et_pb_contact_form_label" for="et_pb_signup_email" style="display: none;">Email</label>
<input id="et_pb_signup_email" class="input" type="text" placeholder="Email" name="et_pb_signup_email">
</p>
<p class="et_pb_newsletter_button_wrap">
<a class="et_pb_newsletter_button et_pb_button et_pb_custom_button_icon" href="#" data-icon="&#xe046;">
<span class="et_subscribe_loader"></span>
<span class="et_pb_newsletter_button_text">Subscribe</span>
</a>
</p>
</div>
<input type="hidden" value="mailerlite" name="et_pb_signup_provider" />
<input type="hidden" value="106965706" name="et_pb_signup_list_id" />
<input type="hidden" value="High Ground Gaming" name="et_pb_signup_account_name" />
<input type="hidden" value="true" name="et_pb_signup_ip_address" /><input type="hidden" value="480fddad40c84d4e18a1a1bdba72f42d" name="et_pb_signup_checksum" />
</form>
</div>
</div><div class="et_pb_module et_pb_text et_pb_text_10_tb_footer  et_pb_text_align_left et_pb_bg_layout_light">
<div class="et_pb_text_inner">&copy; 2021 Top Shelf Media | All Rights Reserved.</div>
</div> 
</div> 
</div> 
</div>  </div>
</footer>
</div> 
</div>
</div> 
<script type="rocketlazyloadscript" data-rocket-type="text/javascript">
				var et_link_options_data = [{"class":"et_pb_text_1_tb_footer","url":"https:\/\/www.highgroundgaming.com\/about\/","target":"_self"},{"class":"et_pb_text_2_tb_footer","url":"https:\/\/www.highgroundgaming.com\/contact-us\/","target":"_self"},{"class":"et_pb_text_3_tb_footer","url":"https:\/\/www.highgroundgaming.com\/meet-the-team\/","target":"_self"},{"class":"et_pb_text_4_tb_footer","url":"https:\/\/www.highgroundgaming.com\/privacy-policy\/","target":"_self"},{"class":"et_pb_text_5_tb_footer","url":"https:\/\/www.highgroundgaming.com\/terms-and-conditions\/","target":"_self"}];
			</script>

<script type="rocketlazyloadscript" async src="https://www.googletagmanager.com/gtag/js?id=UA-47659413-1"></script>
<script type="rocketlazyloadscript">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-47659413-1', { 'optimize_id': 'GTM-MCD58LF'});
	
</script>

<script type="rocketlazyloadscript" async src="https://www.googletagmanager.com/gtag/js?id=UA-47659413-25"></script>
<script type="rocketlazyloadscript">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-47659413-25');
</script>
<script type="rocketlazyloadscript">window.addEventListener('DOMContentLoaded', function() {
var year = new Date();
year = year.getFullYear();
jQuery(function($){
	$('#footer-info').html('&copy; ' + year + ' Top Shelf Media LLC | All Rights Reserved.');
});
});</script>
<link rel='stylesheet' id='mediaelement-css' href='https://www.highgroundgaming.com/wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css?ver=4.2.16' type='text/css' media='all' />
<link rel='stylesheet' id='wp-mediaelement-css' href='https://www.highgroundgaming.com/wp-includes/js/mediaelement/wp-mediaelement.min.css?ver=5.8' type='text/css' media='all' />
<link data-minify="1" rel='stylesheet' id='et_bloom-css-css' href='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/plugins/bloom/css/style.css?ver=1627688856' type='text/css' media='all' />
<script type='text/javascript' id='toc-front-js-extra'>
/* <![CDATA[ */
var tocplus = {"visibility_show":"show","visibility_hide":"hide","width":"100%"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-content/plugins/table-of-contents-plus/front.min.js?ver=2106' id='toc-front-js' defer></script>
<script type='text/javascript' id='rocket-browser-checker-js-after'>
"use strict";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var RocketBrowserCompatibilityChecker=function(){function RocketBrowserCompatibilityChecker(options){_classCallCheck(this,RocketBrowserCompatibilityChecker),this.passiveSupported=!1,this._checkPassiveOption(this),this.options=!!this.passiveSupported&&options}return _createClass(RocketBrowserCompatibilityChecker,[{key:"_checkPassiveOption",value:function(self){try{var options={get passive(){return!(self.passiveSupported=!0)}};window.addEventListener("test",null,options),window.removeEventListener("test",null,options)}catch(err){self.passiveSupported=!1}}},{key:"initRequestIdleCallback",value:function(){!1 in window&&(window.requestIdleCallback=function(cb){var start=Date.now();return setTimeout(function(){cb({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-start))}})},1)}),!1 in window&&(window.cancelIdleCallback=function(id){return clearTimeout(id)})}},{key:"isDataSaverModeOn",value:function(){return"connection"in navigator&&!0===navigator.connection.saveData}},{key:"supportsLinkPrefetch",value:function(){var elem=document.createElement("link");return elem.relList&&elem.relList.supports&&elem.relList.supports("prefetch")&&window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype}},{key:"isSlowConnection",value:function(){return"connection"in navigator&&"effectiveType"in navigator.connection&&("2g"===navigator.connection.effectiveType||"slow-2g"===navigator.connection.effectiveType)}}]),RocketBrowserCompatibilityChecker}();
</script>
<script type='text/javascript' id='rocket-preload-links-js-extra'>
/* <![CDATA[ */
var RocketPreloadLinksConfig = {"excludeUris":"\/(.+\/)?feed\/?.+\/?|\/(?:.+\/)?embed\/|\/(index\\.php\/)?wp\\-json(\/.*|$)|\/wp-admin\/|\/logout\/|\/wp-login.php","usesTrailingSlash":"1","imageExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif","fileExt":"jpg|jpeg|gif|png|tiff|bmp|webp|avif|php|pdf|html|htm","siteUrl":"https:\/\/www.highgroundgaming.com","onHoverDelay":"100","rateThrottle":"3"};
/* ]]> */
</script>
<script type='text/javascript' id='rocket-preload-links-js-after'>
(function() {
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function(){function n(e,t){i(this,n),this.browser=e,this.config=t,this.options=this.browser.options,this.prefetched=new Set,this.eventTime=null,this.threshold=1111,this.numOnHover=0}return e(n,[{key:"init",value:function(){!this.browser.supportsLinkPrefetch()||this.browser.isDataSaverModeOn()||this.browser.isSlowConnection()||(this.regex={excludeUris:RegExp(this.config.excludeUris,"i"),images:RegExp(".("+this.config.imageExt+")$","i"),fileExt:RegExp(".("+this.config.fileExt+")$","i")},this._initListeners(this))}},{key:"_initListeners",value:function(e){-1<this.config.onHoverDelay&&document.addEventListener("mouseover",e.listener.bind(e),e.listenerOptions),document.addEventListener("mousedown",e.listener.bind(e),e.listenerOptions),document.addEventListener("touchstart",e.listener.bind(e),e.listenerOptions)}},{key:"listener",value:function(e){var t=e.target.closest("a"),n=this._prepareUrl(t);if(null!==n)switch(e.type){case"mousedown":case"touchstart":this._addPrefetchLink(n);break;case"mouseover":this._earlyPrefetch(t,n,"mouseout")}}},{key:"_earlyPrefetch",value:function(t,e,n){var i=this,r=setTimeout(function(){if(r=null,0===i.numOnHover)setTimeout(function(){return i.numOnHover=0},1e3);else if(i.numOnHover>i.config.rateThrottle)return;i.numOnHover++,i._addPrefetchLink(e)},this.config.onHoverDelay);t.addEventListener(n,function e(){t.removeEventListener(n,e,{passive:!0}),null!==r&&(clearTimeout(r),r=null)},{passive:!0})}},{key:"_addPrefetchLink",value:function(i){return this.prefetched.add(i.href),new Promise(function(e,t){var n=document.createElement("link");n.rel="prefetch",n.href=i.href,n.onload=e,n.onerror=t,document.head.appendChild(n)}).catch(function(){})}},{key:"_prepareUrl",value:function(e){if(null===e||"object"!==(void 0===e?"undefined":r(e))||!1 in e||-1===["http:","https:"].indexOf(e.protocol))return null;var t=e.href.substring(0,this.config.siteUrl.length),n=this._getPathname(e.href,t),i={original:e.href,protocol:e.protocol,origin:t,pathname:n,href:t+n};return this._isLinkOk(i)?i:null}},{key:"_getPathname",value:function(e,t){var n=t?e.substring(this.config.siteUrl.length):e;return n.startsWith("/")||(n="/"+n),this._shouldAddTrailingSlash(n)?n+"/":n}},{key:"_shouldAddTrailingSlash",value:function(e){return this.config.usesTrailingSlash&&!e.endsWith("/")&&!this.regex.fileExt.test(e)}},{key:"_isLinkOk",value:function(e){return null!==e&&"object"===(void 0===e?"undefined":r(e))&&(!this.prefetched.has(e.href)&&e.origin===this.config.siteUrl&&-1===e.href.indexOf("?")&&-1===e.href.indexOf("#")&&!this.regex.excludeUris.test(e.href)&&!this.regex.images.test(e.href))}}],[{key:"run",value:function(){"undefined"!=typeof RocketPreloadLinksConfig&&new n(new RocketBrowserCompatibilityChecker({capture:!0,passive:!0}),RocketPreloadLinksConfig).init()}}]),n}();t.run();
}());
</script>
<script type='text/javascript' id='divi-custom-script-js-extra'>
/* <![CDATA[ */
var DIVI = {"item_count":"%d Item","items_count":"%d Items"};
var et_shortcodes_strings = {"previous":"Previous","next":"Next"};
var et_pb_custom = {"ajaxurl":"https:\/\/www.highgroundgaming.com\/wp-admin\/admin-ajax.php","images_uri":"https:\/\/www.highgroundgaming.com\/wp-content\/themes\/Divi\/images","builder_images_uri":"https:\/\/www.highgroundgaming.com\/wp-content\/themes\/Divi\/includes\/builder\/images","et_frontend_nonce":"d74d5f567c","subscription_failed":"Please, check the fields below to make sure you entered the correct information.","et_ab_log_nonce":"e08cd84862","fill_message":"Please, fill in the following fields:","contact_error_message":"Please, fix the following errors:","invalid":"Invalid email","captcha":"Captcha","prev":"Prev","previous":"Previous","next":"Next","wrong_captcha":"You entered the wrong number in captcha.","wrong_checkbox":"Checkbox","ignore_waypoints":"no","is_divi_theme_used":"1","widget_search_selector":".widget_search","ab_tests":[],"is_ab_testing_active":"","page_id":"38435","unique_test_id":"","ab_bounce_rate":"5","is_cache_plugin_active":"yes","is_shortcode_tracking":"","tinymce_uri":""}; var et_builder_utils_params = {"condition":{"diviTheme":true,"extraTheme":false},"scrollLocations":["app","top"],"builderScrollLocations":{"desktop":"app","tablet":"app","phone":"app"},"onloadScrollLocation":"app","builderType":"fe"}; var et_frontend_scripts = {"builderCssContainerPrefix":"#et-boc","builderCssLayoutPrefix":"#et-boc .et-l"};
var et_pb_box_shadow_elements = [];
var et_pb_motion_elements = {"desktop":[],"tablet":[],"phone":[]};
var et_pb_sticky_elements = [];
/* ]]> */
</script>
<script data-minify="1" type='text/javascript' src='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/themes/Divi/js/custom.unified.js?ver=1627688856' id='divi-custom-script-js' defer></script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-content/plugins/wp-review-pro/public/js/js.cookie.min.js?ver=2.1.4' id='js-cookie-js' defer></script>
<script data-minify="1" type='text/javascript' src='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/plugins/wp-review-pro/public/js/jquery.appear.js?ver=1627688856' id='wp_review-jquery-appear-js' defer></script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-includes/js/underscore.min.js?ver=1.8.3' id='underscore-js' defer></script>
<script type='text/javascript' id='wp-util-js-extra'>
/* <![CDATA[ */
var _wpUtilSettings = {"ajax":{"url":"\/wp-admin\/admin-ajax.php"}};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-includes/js/wp-util.min.js?ver=5.8' id='wp-util-js' defer></script>
<script type='text/javascript' id='wp_review-js-js-extra'>
/* <![CDATA[ */
var wpreview = {"ajaxurl":"https:\/\/www.highgroundgaming.com\/wp-admin\/admin-ajax.php","popup":{"enable":"0","width":"800px","animation_in":"bounceIn","animation_out":"bounceOut","overlay_color":"#0b0b0b","overlay_opacity":"0.8","post_type":"post","queryby":"category","orderby":"random","category":"0","tag":0,"review_type":"star","limit":"6","expiration":"30","cookie_name":"wpr-popup","delay":"0","show_on_load":false,"show_on_reach_bottom":false,"exit_intent":true,"screen_size_check":false,"screen_width":"0","embed_show_title":"","embed_show_thumbnail":"","embed_show_excerpt":"","embed_show_rating_box":"","embed_show_credit":""},"rateAllFeatures":"Please rate all features","verifiedPurchase":"(Verified purchase)","commentImageUploadNonce":"b0d293b440"};
/* ]]> */
</script>
<script data-minify="1" type='text/javascript' src='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/plugins/wp-review-pro/public/js/main.js?ver=1627688856' id='wp_review-js-js' defer></script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-content/plugins/wp-review-pro/public/js/jquery.knob.min.js?ver=1.1' id='jquery-knob-js' defer></script>
<script data-minify="1" type='text/javascript' src='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/themes/Divi/core/admin/js/common.js?ver=1627688856' id='et-core-common-js' defer></script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-includes/js/wp-embed.min.js?ver=5.8' id='wp-embed-js' defer></script>
<script type='text/javascript' id='mediaelement-core-js-before'>
var mejsL10n = {"language":"en","strings":{"mejs.download-file":"Download File","mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up\/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions\/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}};
</script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-includes/js/mediaelement/mediaelement-and-player.min.js?ver=4.2.16' id='mediaelement-core-js' defer></script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-includes/js/mediaelement/mediaelement-migrate.min.js?ver=5.8' id='mediaelement-migrate-js' defer></script>
<script type='text/javascript' id='mediaelement-js-extra'>
/* <![CDATA[ */
var _wpmejsSettings = {"pluginPath":"\/wp-includes\/js\/mediaelement\/","classPrefix":"mejs-","stretching":"responsive"};
/* ]]> */
</script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-includes/js/mediaelement/wp-mediaelement.min.js?ver=5.8' id='wp-mediaelement-js' defer></script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-content/plugins/bloom/js/jquery.uniform.min.js?ver=1.3.12' id='et_bloom-uniform-js-js' defer></script>
<script type='text/javascript' id='et_bloom-custom-js-js-extra'>
/* <![CDATA[ */
var bloomSettings = {"ajaxurl":"https:\/\/www.highgroundgaming.com\/wp-admin\/admin-ajax.php","pageurl":"","stats_nonce":"6f47c28eb5","subscribe_nonce":"cddf3109ba","is_user_logged_in":"not_logged"};
/* ]]> */
</script>
<script data-minify="1" type='text/javascript' src='https://www.highgroundgaming.com/wp-content/cache/min/1/wp-content/plugins/bloom/js/custom.js?ver=1627688856' id='et_bloom-custom-js-js' defer></script>
<script type='text/javascript' src='https://www.highgroundgaming.com/wp-content/plugins/bloom/js/idle-timer.min.js?ver=1.3.12' id='et_bloom-idle-timer-js-js' defer></script>
<script type="rocketlazyloadscript" data-rocket-type="text/javascript" id="wpsp-script-frontend"></script>
<script>window.lazyLoadOptions={elements_selector:"img[data-lazy-src],.rocket-lazyload",data_src:"lazy-src",data_srcset:"lazy-srcset",data_sizes:"lazy-sizes",class_loading:"lazyloading",class_loaded:"lazyloaded",threshold:300,callback_loaded:function(element){if(element.tagName==="IFRAME"&&element.dataset.rocketLazyload=="fitvidscompatible"){if(element.classList.contains("lazyloaded")){if(typeof window.jQuery!="undefined"){if(jQuery.fn.fitVids){jQuery(element).parent().fitVids()}}}}}};window.addEventListener('LazyLoad::Initialized',function(e){var lazyLoadInstance=e.detail.instance;if(window.MutationObserver){var observer=new MutationObserver(function(mutations){var image_count=0;var iframe_count=0;var rocketlazy_count=0;mutations.forEach(function(mutation){for(i=0;i<mutation.addedNodes.length;i++){if(typeof mutation.addedNodes[i].getElementsByTagName!=='function'){continue}
if(typeof mutation.addedNodes[i].getElementsByClassName!=='function'){continue}
images=mutation.addedNodes[i].getElementsByTagName('img');is_image=mutation.addedNodes[i].tagName=="IMG";iframes=mutation.addedNodes[i].getElementsByTagName('iframe');is_iframe=mutation.addedNodes[i].tagName=="IFRAME";rocket_lazy=mutation.addedNodes[i].getElementsByClassName('rocket-lazyload');image_count+=images.length;iframe_count+=iframes.length;rocketlazy_count+=rocket_lazy.length;if(is_image){image_count+=1}
if(is_iframe){iframe_count+=1}}});if(image_count>0||iframe_count>0||rocketlazy_count>0){lazyLoadInstance.update()}});var b=document.getElementsByTagName("body")[0];var config={childList:!0,subtree:!0};observer.observe(b,config)}},!1)</script><script data-no-minify="1" async src="https://www.highgroundgaming.com/wp-content/plugins/wp-rocket/assets/js/lazyload/16.1/lazyload.min.js"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"rayId":"678c3303ecb33d54","token":"05afdba1c2114a7ea42709d66285a7e3","version":"2021.7.0","si":10}'></script>
</body>
</html>
