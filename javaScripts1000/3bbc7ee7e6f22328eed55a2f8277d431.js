<!DOCTYPE html>
<!--[if IE 8]> <html lang="lv" class="ie8"> <![endif]-->
<!--[if IE 9]> <html lang="lv" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="lv"> <!--<![endif]-->  
<head>
<title>JaunÄkÄs ziÅas, komentÄri, pÄtÄ«jumi, foto, video tieÅ¡raides, izklaide - nra.lv</title>
<meta charset="utf-8"> 
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
<meta name="apple-itunes-app" content="app-id=1182159948" />
<link rel="icon" href="/favicon.ico">
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700|Roboto+Slab:400,700&amp;subset=latin-ext" rel="stylesheet">
	<link rel="stylesheet" href="/build/app.10256f16.css" />
<link rel="canonical" href="https://nra.lv/">
<meta name="description" content="PortÄls nra.lv - aktuÄlÄkÄs ziÅas, kas ietekmÄ tavu ikdienu. Beznaksas portÄls, kur uzzinÄt svarÄ«go, interesanto, pÄrsteidzoÅ¡o. Bezmaksas ziÅas un pÄtÄ«jumi." />
<script>
var AppConf = {};
AppConf.deviceType = 'desktop';
</script>
<!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
<script type="text/javascript" async=true>
(function() {
  var host = window.location.hostname;
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://quantcast.mgr.consensu.org'
    .concat('/choice/', '_UMQMV0c4sR2-', '/', host, '/choice.js')
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.type = 'text/javascript';
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length > 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        queue.push(args);
      }
    }

    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};

      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}

      var payload = json.__tcfapiCall;

      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            event.source.postMessage(returnMsg, '*');
          },
          payload.parameter
        );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  makeStub();

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
</script>
<!-- End Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
<script src="/build/runtime.24035dc8.js"></script><script src="/build/rekl.d826cc28.js"></script><script>
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
googletag.cmd.push(function() {
	appGPT.defineSlot(googletag, 'top1');
	appGPT.defineSlot(googletag, 'top2');
	appGPT.defineSlot(googletag, 'top3');
	appGPT.defineSlot(googletag, 'left1');
	appGPT.defineSlot(googletag, 'left2');
	appGPT.defineSlot(googletag, 'left2_1');
	appGPT.defineSlot(googletag, 'left2_2');
	appGPT.defineSlot(googletag, 'left3');
	appGPT.defineSlot(googletag, 'left4');
	appGPT.defineSlot(googletag, 'itemFooter');
	appGPT.defineSlot(googletag, 'itemGallery');
	appGPT.defineSlot(googletag, 'inArticle1');
	appGPT.defineSlot(googletag, 'inArticle2');
	appGPT.defineSlot(googletag, 'pageTop1');
	appGPT.defineSlot(googletag, 'rmFooter');appGPT.defineSlot(googletag, 'rmSides');
		googletag.pubads().setTargeting('nra_sad', 'sakums');
		googletag.pubads().enableSingleRequest();
	googletag.enableServices();
	
	googletag.pubads().addEventListener('slotRenderEnded', function(event) {
		window.appGPT.slotRenderEnded(event);
	});
});
</script>
<style>.async-hide { opacity: 0 !important} </style>
<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-T5DR2HK':true});</script>
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
function providePlugin(pluginName, pluginConstructor) {
	var ga = window[window['GoogleAnalyticsObject'] || 'ga'];
	if (typeof ga == 'function') {
	  ga('provide', pluginName, pluginConstructor);
	}
}
function isAdBlockEnabled(tracker, opts) {
	var ad = document.createElement('ins');
	ad.className = 'AdSense';
	ad.style.display = 'block';
	ad.style.position = 'absolute';
	ad.style.top = '-1px';
	ad.style.height = '1px';
	document.body.appendChild(ad);
	tracker.set('dimension' + opts.dimensionIndex, !ad.clientHeight);
	document.body.removeChild(ad);
}
providePlugin('abTracker', isAdBlockEnabled);
ga('create', 'UA-3406177-4', 'nra.lv');
ga('require', 'GTM-T5DR2HK');
ga('require', 'abTracker', {dimensionIndex: 1});
ga('send', 'pageview');
</script>



<!-- AdQuota base code -->
<script type="application/javascript" src="https://ced.sascdn.com/tag/3323/smart.js" async></script>
<script type="application/javascript">
var adQuotaFormats = [];
var sas = sas || {};
    sas.cmd = sas.cmd || [];
    sas.cmd.push(function() {
        sas.setup({ networkid: 3323, 
	domain: "https://www14.smartadserver.com", 
	async: true, 
	inSequence:1
});
    });
if (adQuotaFormats.length > 0) {
	sas.cmd.push(function() {
		sas.call("onecall", {
			siteId: 282222,
			pageId: 1074894,
			formats: adQuotaFormats,
			target: ''
		});
	});
}
</script>
<!-- AdNet base code -->
<script async src="https://keytarget.adnet.lt/stable/keytarget-nralv.min.js"></script>
<script>
    window.adnet = window.adnet || [];
    window.adnet.push('standalone');
    window.adnet.push(['_initialize']);
</script>

<script>
if (typeof window.__tcfapi !== 'undefined' ) {
	__tcfapi('addEventListener', 2, function(tcData, success) {
		if (success) {
			if (tcData.eventStatus == 'useractioncomplete' || tcData.eventStatus == 'tcloaded') {
				var hasStoreOnDeviceConsent = tcData.purpose.consents[1] || false;
				if (hasStoreOnDeviceConsent) {
					var adsbygoogle_script = document.createElement('script');
					adsbygoogle_script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
					document.head.appendChild(adsbygoogle_script);
				}
			}
		}
	});
}
</script>
</head>
<body>

<!-- (C)2000-2018 Gemius SA - gemiusPrism -->
<script>
<!--//--><![CDATA[//><!--
var pp_gemius_identifier = 'nGiQ1MibG0EqAF8xWSjus8dvnDmkNORP2nA373N1Y9T.37';
function gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_event');(function(d,t) {try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':''); gt.setAttribute('async','async');gt.setAttribute('defer','defer'); gt.src=l+'://galv.hit.gemius.pl/xgemius.js'; s.parentNode.insertBefore(gt,s);} catch (e) {}})(document,'script');
//--><!]]>
</script>

	

<div id='div-gpt-ad-1525262470913-pageTop1'><script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-pageTop1'); });</script></div>
	

		<div id="header-top"></div>
	<header id="header" class="wrap wrap-with-hspaces " data-user-api-url="/profils/api/get-user/">
		<div class="header-cont">
			<div class="mob-menu-bl h-bl show-on-mob-only">
				<a href="#" class="btn-show-menu">
					<span class="inact"><i class="material-icons">&#xE5D2;</i></span>
					<span class="act"><i class="material-icons">&#xE5CD;</i></span>
				</a>
				<nav id="mobile-nav">
	<ul class="items">		<li class='item'><a href='/latvija/riga/'>RÄ«gÄ</a></li>
			<li class='item'><a href='/latvija/'>LatvijÄ</a></li>
			<li class='item'><a href='/pasaule/'>PasaulÄ</a></li>
			<li class='item'><a href='/izklaide/'>Izklaide</a></li>
			<li class='item'><a href='/sports/'>Sports</a></li>
			<li class='item'><a href='/politika/'>Politika</a></li>
			<li class='item'><a href='/latvija/regionos/'>ReÄ£ionos</a></li>
			<li class='item'><a href='/viedokli/'>ViedokÄ¼i</a></li>
			<li class='item'><a href='/kultura/'>KultÅ«ra</a></li>
			<li class='item'><a href='/veseliba/'>VeselÄ«ba</a></li>
			<li class='item'><a href='/praktiski/'>Praktiski</a></li>
			<li class='item'><a href='/izklaide/turisms/'>TÅ«risms</a></li>
			<li class='item'><a href='/latvija/laika-apstakli/'>Laika apstÄkÄ¼i</a></li>
			<li class='item'><a href='/horoskopi/'>Horoskopi</a></li>
			<li class='item'><a href='/vakara-zinas/'>Vakara ZiÅas</a></li>
	</ul>
	<ul class="topics">		<li class="topic"><a href="/temas/184-ka-but-laimigai.htm">KÄ bÅ«t laimÄ«gai?</a></li>
			<li class="topic"><a href="/temas/137-izglitiba.htm">IzglÄ«tÄ«ba</a></li>
			<li class="topic"><a href="/temas/171-tautsaimnieciba.htm">TautsaimniecÄ«ba</a></li>
			<li class="topic"><a href="/temas/142-visinteresantakie-top.htm">VisinteresantÄkie TOP</a></li>
	</ul>
	<form action="/meklet/" method="GET" class="search-bl">
		<span class="field"><i class="material-icons">&#xE8B6;</i><input type="text" name="q" class="textfield" placeholder="..." /></span>
		<button type="submit" class="btn-search">MeklÄt</button>
		<div class="clear">&nbsp;</div>
	</form>
</nav>							</div>
			<div class="logo-bl h-bl">
				<a href="/"><img src="/build/images/logo.png" alt="nra.lv" /></a>			</div>
			<div class="weather-bl h-bl">	<a href='/laika-zinas/kur/riga/' class="cont">
		<span class="wico"><i class="wi wi-night-alt-cloudy"></i></span>
		<span class="t"><b>+15</b> <span class="deg">&deg;C</span></span>
		<span class="wind">R<i class="wi wi-wind towards-72-deg"></i> <span class="wind-speed">3.6 m/s</span></span>
		<style>
			.weather-bl-atb {
				display:block;
				position:absolute;
				left:44px;
				bottom:-8px;
				font-size:10px;
				line-height:16px;
				color:#999;
			}
			@media all and (max-width: 980px) {
				.weather-bl-atb {
					display: none;
				}
			}
		</style>
		<span class="weather-bl-atb">
								</span>
	</a>
</div>						<div class="date-names-bl h-bl show-on-pc-only">
	<p class="d"><b>Pirmdiena,</b> 2.augusts</p>
	<p class="n"><b>VÄrda dienas:</b> Normunds, Stefans</p>
</div>												<div class="relsites-bl show-on-pc-only">
				<a href="//lifehacks.nra.lv/?utm_source=nra.lv&amp;utm_medium=header-relsites-block&amp;utm_campaign=nralvLinks&amp;utm_content=logolink" class="logo logo-lh"><img src="/build/images/lh_logo_101x80px.png" alt="LifeHacks.lv" /></a>
								<a href="//tautaruna.nra.lv/?utm_source=nra.lv&amp;utm_medium=header-relsites-block&amp;utm_campaign=nralvLinks&amp;utm_content=logolink" class="logo logo-tr"><img src="//tautaruna.nra.lv/build/images/logo.svg?v=38" alt="Tauta RunÄ" /></a>
								<div class="subscribe-bl">	<a href="https://nra.lv/abonesana/?utm_source=nralv&utm_medium=header_subscr_banner&utm_campaign=Abonesana202010">
		<span class="label">AbonÄ</span>
		<span class="img-cont">
			<span class="img img-kbl"><img src="https://zinas.nra.lv/_mm/photos_press/2021-06/228px/520662_c48210e417.jpg" alt="" /></span>			<span class="img img-vz"><img src="https://zinas.nra.lv/_mm/photos_press/2021-08/228px/528163_89ac6d35f5.jpg" alt="" /></span>		</span>
	</a>
</div>				<div class="clear">&nbsp;</div>
			</div>									<div class="clear">&nbsp;</div>
		</div>
	</header>
	<nav id="nav">
		<div class="wrap">
			<ul class="items">
								<li><a href="/latvija/riga/">RÄ«gÄ</a></li>
				<li><a href="/latvija/">LatvijÄ</a></li>
				<li><a href="/pasaule/">PasaulÄ</a></li>
				<li><a href="/izklaide/">Izklaide</a></li>
				<li><a href="/ka-but-laimigai/">KBL</a></li>
								<li class="more">
					<a href="#">VairÄk<i class="material-icons">&#xE5C5;</i></a>
					<div class='more-menu-bl'>
	<div class='cont'>
		<ul class='cats'>			<li class='item'><a href='/sports/'>Sports</a></li>
					<li class='item'><a href='/politika/'>Politika</a></li>
					<li class='item'><a href='/latvija/regionos/'>ReÄ£ionos</a></li>
					<li class='item'><a href='/viedokli/'>ViedokÄ¼i</a></li>
					<li class='item'><a href='/kultura/'>KultÅ«ra</a></li>
					<li class='item'><a href='/veseliba/'>VeselÄ«ba</a></li>
					<li class='item'><a href='/praktiski/'>Praktiski</a></li>
					<li class='item'><a href='/izklaide/turisms/'>TÅ«risms</a></li>
					<li class='item'><a href='/latvija/laika-apstakli/'>Laika apstÄkÄ¼i</a></li>
					<li class='item'><a href='/horoskopi/'>Horoskopi</a></li>
					<li class='item'><a href='/vakara-zinas/'>Vakara ZiÅas</a></li>
		</ul>
		<div class='clear'>&nbsp;</div>
			</div>
		<div class='clear'>&nbsp;</div>
</div>									</li>
			</ul>
			<form action="/meklet/" method="GET" class="search-bl">
				<button type="submit" class="btn-search"><i class="material-icons">&#xE8B6;</i></button>
				<input type="text" name="q" class="textfield" placeholder="MeklÄt..." />
			</form>
			<div class="soc-icons-bl">
				<a href="https://www.facebook.com/nralv/" rel="nofollow noopener"><svg aria-labelledby="simpleicons-facebook-icon" role="img" viewBox="0 0 24 24" xmlns="//www.w3.org/2000/svg"><title id="simpleicons-facebook-icon">Facebook icon</title><path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"/></svg></a>
				<a href="https://www.draugiem.lv/nra.lv/" rel="nofollow noopener"><svg aria-labelledby="simpleicons-draugiemlv-icon" role="img" viewBox="0 0 24 24" xmlns="//www.w3.org/2000/svg"><title id="simpleicons-draugiemlv-icon">Draugiem.lv icon</title><path d="M8.154 15.096c.048.346.14.562.278.693.144.13.34.18.596.21.304-.03.51-.1.65-.3.083-.13.14-.33.166-.61l.098-1.16v-.02l-.02-.18-.03-.17-.03-.175-.032-.165-.03-.174-.03-.165-.03-.164-.03-.17-.028-.16-.03-.15-.03-.15v-.138l-.03-.136-.03-.133-.015-.126-.03-.116-.03-.1-.03-.17L9.41 11l-.045-.18-.045-.18-.013-.197-.052-.203-.045-.21-.053-.21-.03-.21-.043-.215-.03-.213-.017-.242-.015-.21-.01-.228V8.1l.02-.21.035-.21.046-.21.06-.2.09-.194.106-.186.04-.074c-.2-.046-.44-.076-.69-.076-.11 0-.2 0-.3.016-2.33.2-1.38 2.836-.98 4.283.28 1 .6 3.34.72 4.06l-.02-.02zm.28-8.664c.09.03.178.045.283.045.48 0 .79-.255.96-.645.112-.27.162-.602.153-.945-.014-.3-.074-.572-.164-.81-.195-.467-.54-.782-1.066-.782-.074 0-.135 0-.18.016-.675.11-.976.78-.945 1.61.015.78.314 1.43.93 1.58l.028-.06zm1.244 3.843c.084.36.168.69.237.975.285 1.156.562 3.843.665 4.668.098.826.39.99.97 1.05.576-.044.867-.224.965-1.034.097-.81.38-3.498.657-4.653.068-.28.16-.61.24-.96.258-1.05.466-2.29 0-3.1-.296-.51-.865-.84-1.86-.84-1.007 0-1.583.33-1.872.86-.465.81-.256 2.06 0 3.11l-.002-.06zm1.858-4.28h.015c.9 0 1.33-.823 1.33-1.83s-.42-1.846-1.32-1.846h-.01c-.91 0-1.33.84-1.33 1.86s.42 1.84 1.337 1.84v-.03zm2.827.752c-.27 0-.51.03-.705.075l.045.075.105.194.075.2.06.21.045.21.03.21.015.23v.44l-.015.23v.167l-.03.217-.03.213-.044.213-.046.21-.044.21-.045.206-.05.2-.05.197-.06.195-.05.18-.03.18-.05.168-.018.09-.03.12-.03.137-.026.134-.015.132-.03.12v.03l-.03.15-.03.15-.02.163-.03.168-.02.165-.03.165-.02.18-.013.165-.014.18-.014.18-.017.18V14c.045.496.075.93.09 1.17.03.287.075.48.166.616.14.2.35.27.66.3.26-.03.45-.07.6-.22.15-.12.23-.343.29-.69.12-.703.44-3.05.71-4.053.4-1.45 1.35-4.083-.98-4.284-.105-.014-.195-.014-.3-.014l.012-.05zm.016-.27c.09 0 .18-.014.27-.03.6-.15.9-.794.93-1.56.03-.81-.27-1.5-.95-1.592-.06-.016-.12-.016-.18-.016-.54 0-.89.33-1.07.79-.09.24-.15.52-.15.82-.02.36.03.69.15.96.16.4.48.66.96.66l.03-.05zm2.79 1.2c4.29.062 6.8 2.702 3.96 6.305-1.32 1.667-3.53 3.317-6.49 4.368l-.42.15c-.29.09-.56.18-.83.256-.65.18-1.26.345-1.86.465-.65.14-1.28.23-1.88.3-.44.05-.86.08-1.25.08-2.747.08-4.818-.67-5.49-2.28-.81-1.92.823-4.59 4.11-6.63-2.43.97-6.84 3.29-7.036 6.57v.42c.016.35.074.68.195 1.04.707 2.22 4.01 3.27 8.21 2.9.407-.03.827-.073 1.25-.14.605-.082 1.23-.21 1.86-.36.605-.13 1.23-.31 1.865-.51l.42-.13c.285-.09.557-.18.826-.285 3.646-1.32 6.35-3.075 7.926-5.102.9-1.152 1.365-2.232 1.455-3.18v-.733c-.26-2.413-3.06-3.824-6.877-3.435l.044-.045z"/></svg></a>
				<a href="https://twitter.com/nralv" rel="nofollow noopener"><svg aria-labelledby="simpleicons-twitter-icon" role="img" viewBox="0 0 24 24" xmlns="//www.w3.org/2000/svg"><title id="simpleicons-twitter-icon">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg></a>
				<a href="https://www.instagram.com/nra.lv/" rel="nofollow noopener"><svg aria-labelledby="simpleicons-instagram-icon" role="img" viewBox="0 0 24 24" xmlns="//www.w3.org/2000/svg"><title id="simpleicons-instagram-icon">Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
			</div>
						<a href="//nra.lv/veikals/?utm_source=nra.lv&amp;utm_medium=header-relsites-block&amp;utm_campaign=nralvLinks&amp;utm_content=logolink" class="logo-veikals"><img src="/build/images/veikals_logo_bw_160x36px.png" alt="nra.lv veikals" /></a>			<div class="clear">&nbsp;</div>
		</div>
	</nav>				
		
		
	<div id="page_skin"></div><div class="neatkariga-top-line">
	<div class="bg" style="background-image:url('https://neatkariga.nra.lv/_files/nralvtopadfiles/line-bg.png');"><div class="wrap"></div></div>
	<div class="line"></div>
	<div class="wrap cont" style="background-image:url('https://neatkariga.nra.lv/_files/nralvtopadfiles/202108/379_20210801185501_6106c3d5d6194.png');">
		<a href="https://neatkariga.nra.lv/" class="btn-lv" onclick="ga('send', 'event', 'header-neatkarigalv-line', 'click', 'to-lv');"></a>
		<a href="https://neatkariga.nra.lv/en/" class="btn-en" onclick="ga('send', 'event', 'header-neatkarigalv-line', 'click', 'to-en');"></a>
	</div>
</div>
	<main id="main">


<div class="wrap wrap-with-bg">
	
	<div class="top-margin-fix"></div>
	
	<div class="bl-ad-cont top-margin-2"><div class="bl-ad ad-full-width">
			<div id='div-gpt-ad-1525262470913-top1' class="gpt-ad" data-gpt-placement="top1" data-gpt-on-empty="passback">		<script>
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-top1'); });
		</script>
	</div>
	<script>
	gptPassbacks['div-gpt-ad-1525262470913-top1'] = function(el) {
		window.appGPT.addAdsenseSlot(el, 'ca-pub-6250374732409191', '6539362278', 'auto', {
			'class': 'gad_fullWidth_nr1'		});
	};
	</script>
	</div></div>		
		
		
	<div class="bl-head-items-v6 title-on-foot top-margin-2"><div class="row1 art-items with-side-padding"><div class="row-cont">			<div class="item-cont">
		<div class="art-item no-top-margin item-1">
			<span class="art-img-cont r16-9">
				<span class="img" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/600px/528319_104eb17c90.jpg);"><img src="https://zinas.nra.lv/_mm/photos/2021-08/600px/528319_104eb17c90.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</span>
			<div class="art-title-cont">
				<div class="art-title size-2 tabl-size-2 mob-size-3">
					<a href="/latvija/353957-pvo-koronavirusa-gadijumu-skaits-eiropa-parsniedzis-60-miljonus.htm" class="t">PVO: KoronavÄ«rusa gadÄ«jumu skaits EiropÄ pÄrsniedzis 60 miljonus</a>
					<a href="/latvija/353957-pvo-koronavirusa-gadijumu-skaits-eiropa-parsniedzis-60-miljonus.htm#comments" class="link-comm">19</a>				</div>
			</div>
				
					</div>
	</div>
					<div class="item-ad bl-ad-cont with-bg"><div class="bl-ad ad-left-lg">
			<div id='div-gpt-ad-1525262470913-left1' class="block gpt-ad" style='text-align:center; display:none;' data-gpt-placement="left1" data-gpt-on-empty="passback">		<script>
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-left1'); });
		</script>
	</div>
	<script>
	gptPassbacks['div-gpt-ad-1525262470913-left1'] = function(el) {
				window.appGPT.addAdsenseSlot(el, 'ca-pub-6250374732409191', '4560217499', 'auto', {
			'class': 'gad_left_nr1'
		});
	};
	</script>
	</div></div>
		</div></div><div class="row2 with-sm-side-padding art-items art-items-in-cols-3">
			<div class="art-item item-2"><div class="art-item-cont">
		<a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm" class="art-img-cont r16-9">
			<span class="img" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528348_9cafe1e15b.jpg);"><img src="https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528348_9cafe1e15b.jpg" alt="" /></span>						<span class="img-icons">
											</span>
					</a>
		<div class="art-title-cont"><div class="art-title size-6 mob-size-7"><a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm" class="t">Lietuvas robeÅ¾sardze plÄno pie robeÅ¾as ar Baltkrieviju uzbÅ«vÄt Äetrus metrus augstu stiepÄ¼u Å¾ogu</a><a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm#comments" class="link-comm">2</a></div></div>
			</div></div>
				<div class="art-item item-3"><div class="art-item-cont">
		<a href="/latvija/353982-satversmes-tiesas-tiesneses-amatam-izskata-prezidenta-padomnieci-kucinu.htm" class="art-img-cont r16-9">
			<span class="img" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528347_7ca4d601b0.jpg);"><img src="https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528347_7ca4d601b0.jpg" alt="" /></span>						<span class="img-icons">
											</span>
					</a>
		<div class="art-title-cont"><div class="art-title size-6 mob-size-7"><a href="/latvija/353982-satversmes-tiesas-tiesneses-amatam-izskata-prezidenta-padomnieci-kucinu.htm" class="t">Satversmes tiesas tiesneses amatam izskata prezidenta padomnieci Kucinu</a><a href="/latvija/353982-satversmes-tiesas-tiesneses-amatam-izskata-prezidenta-padomnieci-kucinu.htm#comments" class="link-comm">3</a></div></div>
			</div></div>
				<div class="art-item item-4"><div class="art-item-cont">
		<a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm" class="art-img-cont r16-9">
			<span class="img" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528341_c4b1494028.jpg);"><img src="https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528341_c4b1494028.jpg" alt="" /></span>						<span class="img-icons">
											</span>
					</a>
		<div class="art-title-cont"><div class="art-title size-6 mob-size-5"><a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm" class="t">&quot;Pfizer&quot; un &quot;Moderna&quot; paaugstinÄjuÅ¡as ES cenas par savÄm Covid-19 vakcÄ«nÄm</a><a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm#comments" class="link-comm">9</a></div></div>
			</div></div>
				<div class="clear">&nbsp;</div></div>
		
		<div class="top-margin-1">
			<a href="https://neatkariga.nra.lv/abonet/?utm_source=nralv&utm_medium=index_banner&utm_campaign=NeatkarigaAbon202012" rel="nofollow" style="display:block;">
				<img class="lazy" data-src="https://zinas.nra.lv/_mm/photos/2020-12/600px/496441_fadb9605ca.jpg" data-srcset="https://zinas.nra.lv/_mm/photos/2020-12/600px/496441_fadb9605ca.jpg 600w, https://zinas.nra.lv/_mm/photos/2020-12/orig/496441_fbd1727a54.jpg 1300w" alt="" style="display:block;width:100%;height:auto;" />
			</a>
		</div>
		
		<div class="row3 with-sm-side-padding art-items"><div class="row3-c1">
			<div class="art-item item-5"><div class="art-item-cont">
		<a href="/latvija/353959-nedelas-laika-latvija-par-tresdalu-audzis-jaunatklato-covid-19-gadijumu-skaits.htm" class="art-img-cont r16-9">
			<span class="img" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/860px/528321_fa395bafde.jpg);"><img src="https://zinas.nra.lv/_mm/photos/2021-08/860px/528321_fa395bafde.jpg" alt="" /></span>
									<span class="img-icons">
											</span>
					</a>
		<div class="art-title-cont"><div class="art-title size-3 tabl-size-4 mob-size-7"><a href="/latvija/353959-nedelas-laika-latvija-par-tresdalu-audzis-jaunatklato-covid-19-gadijumu-skaits.htm" class="t">NedÄÄ¼as laikÄ LatvijÄ par treÅ¡daÄ¼u audzis jaunatklÄto Covid-19 gadÄ«jumu skaits</a><a href="/latvija/353959-nedelas-laika-latvija-par-tresdalu-audzis-jaunatklato-covid-19-gadijumu-skaits.htm#comments" class="link-comm">10</a></div></div>
			</div></div>
				</div><div class="row3-c2">
			<div class="art-item item-6"><div class="art-item-cont">
		<a href="/latvija/353927-buvnieku-kartela-lieta-10-uznemumiem-piemerots-sods-vairak-neka-16-miljonu-eiro-apmera.htm" class="art-img-cont r16-9">
			<span class="img" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528260_3fe8db570d.jpg);"><img src="https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528260_3fe8db570d.jpg" alt="" /></span>						<span class="img-icons">
											</span>
					</a>
		<div class="art-title-cont"><div class="art-title size-6 mob-size-7"><a href="/latvija/353927-buvnieku-kartela-lieta-10-uznemumiem-piemerots-sods-vairak-neka-16-miljonu-eiro-apmera.htm" class="t">BÅ«vnieku karteÄ¼a lietÄ 10 uzÅÄmumiem piemÄrots sods vairÄk nekÄ 16 miljonu eiro apmÄrÄ</a><a href="/latvija/353927-buvnieku-kartela-lieta-10-uznemumiem-piemerots-sods-vairak-neka-16-miljonu-eiro-apmera.htm#comments" class="link-comm">11</a></div></div>
			</div></div>
				<div class="art-item item-7"><div class="art-item-cont">
		<a href="/latvija/353952-si-gada-julija-latvija-atkartots-karstaka-menesa-rekords.htm" class="art-img-cont r16-9">
			<span class="img" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528314_edb5996fc9.jpg);"><img src="https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528314_edb5996fc9.jpg" alt="" /></span>						<span class="img-icons">
											</span>
					</a>
		<div class="art-title-cont"><div class="art-title size-6 mob-size-7"><a href="/latvija/353952-si-gada-julija-latvija-atkartots-karstaka-menesa-rekords.htm" class="t">Å Ä« gada jÅ«lijÄ LatvijÄ atkÄrtots karstÄkÄ mÄneÅ¡a rekords</a><a href="/latvija/353952-si-gada-julija-latvija-atkartots-karstaka-menesa-rekords.htm#comments" class="link-comm">1</a></div></div>
			</div></div>
				<div class="art-item item-8"><div class="art-item-cont">
		<a href="/latvija/353914-svetdien-apstiprinati-26-jauni-covid-19-gadijumi.htm" class="art-img-cont r16-9">
			<span class="img" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528240_2a26aea736.jpg);"><img src="https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528240_2a26aea736.jpg" alt="" /></span>						<span class="img-icons">
											</span>
					</a>
		<div class="art-title-cont"><div class="art-title size-6 mob-size-7"><a href="/latvija/353914-svetdien-apstiprinati-26-jauni-covid-19-gadijumi.htm" class="t">SvÄtdien apstiprinÄti 26 jauni Covid-19 gadÄ«jumi</a><a href="/latvija/353914-svetdien-apstiprinati-26-jauni-covid-19-gadijumi.htm#comments" class="link-comm">23</a></div></div>
			</div></div>
				<div class="art-item item-9"><div class="art-item-cont">
		<a href="/latvija/353943-neplp-piemerojusi-4000-eiro-sodu-aizliegtajam-panemienam.htm" class="art-img-cont r16-9">
			<span class="img" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528305_5619615a77.jpg);"><img src="https://zinas.nra.lv/_mm/photos/2021-08/368x207px/528305_5619615a77.jpg" alt="" /></span>						<span class="img-icons">
											</span>
					</a>
		<div class="art-title-cont"><div class="art-title size-6 mob-size-7"><a href="/latvija/353943-neplp-piemerojusi-4000-eiro-sodu-aizliegtajam-panemienam.htm" class="t">NEPLP piemÄrojusi 4000 eiro sodu &quot;Aizliegtajam paÅÄmienam&quot;</a><a href="/latvija/353943-neplp-piemerojusi-4000-eiro-sodu-aizliegtajam-panemienam.htm#comments" class="link-comm">38</a></div></div>
			</div></div>
	</div><div class="clear">&nbsp;</div></div></div>		
			
		
		<div class="with-side-padding top-margin-1"></div>
	<div class="bl-spec-covidvakc">
	<div class="wrap">
		
		<div class="data-side with-side-padding">
			<h2 class="topic-title"><a href="https://nra.lv/covid-vakcina/"><img src="/_files/202101/covid-vakcina/title.png" alt="COVID vakcÄ«na" /></a></h2>
			<div class="topic-icon">
				<img src="/_files/202101/covid-vakcina/icon.png" alt="" />
			</div>
			<p class="updated">Dati: 12:52<br /><span>PirmreizÄjo vakcÄ«nu saÅÄmuÅ¡o personu skaits</span></p>
			<div class="vac_lv">
				<b>768 947</b>
				<span class="label">VakcinÄto cilvÄku <b>kopskaits LatvijÄ</b></span>
				<div class='vac_rate big'>
					<em>%</em> <b>40.3<span>%</span></b>
					<span class="bar"><span style="width:40.3%;"></span></span>
					<span class="clear">&nbsp;</span>
				</div>
			</div>
			<div class="vac_hist">
				<div>VakcinÄcijas vÄsture</div>
				<ul>					<li>
						<span class="d">30.07</span>
						<span class="bar"><span class="b"><span style="width:0%;"></span></span><b>2947</b></span>
					</li>
									<li>
						<span class="d">31.07</span>
						<span class="bar"><span class="b"><span style="width:37.6%;"></span></span><b>1838</b></span>
					</li>
									<li>
						<span class="d">01.08</span>
						<span class="bar"><span class="b"><span style="width:74.7%;"></span></span><b>745</b></span>
					</li>
				</ul>
			</div>
			<div class="vac_other_c">
				<div class="line">
					<span>VakcinÄto kopskaits <b>IgaunijÄ</b>:</span>
					<b>641 109</b>
				</div>
				<div class='vac_rate'>
					<em>%</em> <b>48.3<span>%</span></b>
					<span class="bar"><span style="width:48.3%;"></span></span>
					<span class="clear">&nbsp;</span>
				</div>
				<span class="clear">&nbsp;</span>
				<div class="line">
					<span>VakcinÄto kopskaits <b>LietuvÄ</b>:</span>
					<b>1 415 161</b>
				</div>
				<div class='vac_rate'>
					<em>%</em> <b>52.4<span>%</span></b>
					<span class="bar"><span style="width:52.4%;"></span></span>
					<span class="clear">&nbsp;</span>
				</div>
				<span class="clear">&nbsp;</span>
				<span class="perc">%</span>
			</div>
		</div>
		
		<div class="articles-side">
			<div class="with-sm-side-padding">
				<div class='art-items art-items-in-cols-2'>					<div class="art-item col-1">
						<a href="/latvija/izglitiba-karjera/353915-nedelas-laika-pieaudzis-vakcineto-izglitibas-iestazu-darbinieku-skaits.htm" class="art-img-cont">
							<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528241_569f6a71b0.jpg" alt="" /></span>
							<span class="img-icons">
																							</span>
						</a>
						<div class="art-title"><a href="/latvija/izglitiba-karjera/353915-nedelas-laika-pieaudzis-vakcineto-izglitibas-iestazu-darbinieku-skaits.htm" class="t">NedÄÄ¼as laikÄ pieaudzis vakcinÄto izglÄ«tÄ«bas iestÄÅ¾u darbinieku skaits</a><a href="/latvija/izglitiba-karjera/353915-nedelas-laika-pieaudzis-vakcineto-izglitibas-iestazu-darbinieku-skaits.htm#comments" class="link-comm">8</a></div>
					</div>
									<div class="art-item col-2">
						<a href="/latvija/353911-aizvaditaja-nedela-sapotets-par-11-mazak-cilveku-neka-nedelu-ieprieks.htm" class="art-img-cont">
							<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528233_d9f6c641b9.jpg" alt="" /></span>
							<span class="img-icons">
																							</span>
						</a>
						<div class="art-title"><a href="/latvija/353911-aizvaditaja-nedela-sapotets-par-11-mazak-cilveku-neka-nedelu-ieprieks.htm" class="t">AizvadÄ«tajÄ nedÄÄ¼Ä sapotÄts par 11% mazÄk cilvÄku nekÄ nedÄÄ¼u iepriekÅ¡</a><a href="/latvija/353911-aizvaditaja-nedela-sapotets-par-11-mazak-cilveku-neka-nedelu-ieprieks.htm#comments" class="link-comm">4</a></div>
					</div>
									<div class="art-item col-3">
						<a href="/latvija/353879-vakcinacijas-loterijas-it-risinajumu-planots-izstradat-vivat-liguma-ietvaros.htm" class="art-img-cont">
							<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528157_ca2dc3d673.jpg" alt="" /></span>
							<span class="img-icons">
																							</span>
						</a>
						<div class="art-title"><a href="/latvija/353879-vakcinacijas-loterijas-it-risinajumu-planots-izstradat-vivat-liguma-ietvaros.htm" class="t">VakcinÄcijas loterijas IT risinÄjumu plÄnots izstrÄdÄt &quot;ViVaT&quot; lÄ«guma ietvaros</a><a href="/latvija/353879-vakcinacijas-loterijas-it-risinajumu-planots-izstradat-vivat-liguma-ietvaros.htm#comments" class="link-comm">17</a></div>
					</div>
									<div class="art-item col-1">
						<a href="/latvija/regionos/353841-sodien-poti-pret-covid-19-bus-iespejams-sanemt-vecaku-pludmale.htm" class="art-img-cont">
							<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528082_e43ee56076.jpg" alt="" /></span>
							<span class="img-icons">
																							</span>
						</a>
						<div class="art-title"><a href="/latvija/regionos/353841-sodien-poti-pret-covid-19-bus-iespejams-sanemt-vecaku-pludmale.htm" class="t">Å odien poti pret Covid-19 bÅ«s iespÄjams saÅemt VecÄÄ·u pludmalÄ</a><a href="/latvija/regionos/353841-sodien-poti-pret-covid-19-bus-iespejams-sanemt-vecaku-pludmale.htm#comments" class="link-comm">32</a></div>
					</div>
				<div class="clear">&nbsp;</div></div>
			</div>
		</div>
		
		<div class="clear">&nbsp;</div>
		
			</div>
</div>	
		
	<div class="layout-two-cols with-side-padding">
		<div class="col col-left col-big col-with-gap">
			<div class="layout-two-cols">
				<div class="col col-left col-big col-with-gap">
					<div class="bl-latest">
	<h2 class="bl-title "><a href="/jaunakas-zinas/" class="t">JaunÄkais</a><a href="/jaunakas-zinas/" class="btn-more">VairÄk &gt;</a></h2>	<div class="items">		<div class="item">
			<span class="time">21:36</span>
			<span class="title"><a href="https://zinicenu.nra.lv/cenu-zinas/353974-degvielas-tirgotaji-kool-latvija-ipasnieku-maina-neradis-butiskas-izmainas-latvijas-tirgu" class="t">Degvielas tirgotÄji: &quot;Kool Latvija&quot; Ä«paÅ¡nieku maiÅa neradÄ«s bÅ«tiskas izmaiÅas Latvijas tirgÅ«</a></span>
		</div>
			<div class="item">
			<span class="time">21:04</span>
			<span class="title"><a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm" class="t">Lietuvas robeÅ¾sardze plÄno pie robeÅ¾as ar Baltkrieviju uzbÅ«vÄt Äetrus metrus augstu stiepÄ¼u Å¾ogu</a><a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm#comments" class="link-comm">2</a></span>
		</div>
			<div class="item">
			<span class="time">20:55</span>
			<span class="title"><a href="/latvija/353982-satversmes-tiesas-tiesneses-amatam-izskata-prezidenta-padomnieci-kucinu.htm" class="t">Satversmes tiesas tiesneses amatam izskata prezidenta padomnieci Kucinu</a><a href="/latvija/353982-satversmes-tiesas-tiesneses-amatam-izskata-prezidenta-padomnieci-kucinu.htm#comments" class="link-comm">3</a></span>
		</div>
			<div class="item">
			<span class="time">20:45</span>
			<span class="title"><a href="https://tautaruna.nra.lv/nebusanas/353980-divas-nedelas-ar-pacinu-nekas-nenotiek-pec-sutijuma-atmuitosanas-to-ilgstosi-uzglaba-pasta/" class="t">âDivas nedÄÄ¼as ar paciÅu nekas nenotiek!â pÄc sÅ«tÄ«juma atmuitoÅ¡anas to ilgstoÅ¡i uzglabÄ pastÄ</a><a href="https://tautaruna.nra.lv/nebusanas/353980-divas-nedelas-ar-pacinu-nekas-nenotiek-pec-sutijuma-atmuitosanas-to-ilgstosi-uzglaba-pasta/#comments" class="link-comm">1</a></span>
		</div>
			<div class="item">
			<span class="time">20:30</span>
			<span class="title"><a href="/latvija/353973-vairums-vakar-atklato-covid-19-gadijumu-registreti-riga-un-marupes-novada.htm" class="t">Vairums vakar atklÄto Covid-19 gadÄ«jumu reÄ£istrÄti RÄ«gÄ un MÄrupes novadÄ</a></span>
		</div>
			<div class="item show-on-pc-only">
			<span class="time">20:10</span>
			<span class="title"><a href="/sports/353979-plavinstocs-ceturtdalfinala-tiksies-ar-vel-vienu-olimpisko-cempionu.htm" class="t">PÄ¼aviÅÅ¡/ToÄs ceturtdaÄ¼finÄlÄ tiksies ar vÄl vienu olimpisko Äempionu</a></span>
		</div>
			<div class="item show-on-pc-only">
			<span class="time">20:00</span>
			<span class="title"><a href="https://lifehacks.nra.lv/virtuve/353754-gaspaco-ar-tomatu-sulu-lieliska-alternativa-latviesu-aukstajai-zupai/" class="t">GaspaÄo ar tomÄtu sulu. Lieliska alternatÄ«va latvieÅ¡u aukstajai zupai!</a></span>
		</div>
			<div class="item show-on-pc-only">
			<span class="time">19:38</span>
			<span class="title"><a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm" class="t">&quot;Pfizer&quot; un &quot;Moderna&quot; paaugstinÄjuÅ¡as ES cenas par savÄm Covid-19 vakcÄ«nÄm</a><a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm#comments" class="link-comm">9</a></span>
		</div>
			<div class="item show-on-pc-only">
			<span class="time">19:28</span>
			<span class="title"><a href="/latvija/353977-saja-nedelas-nogale-izbraukuma-vakcinacijas-sapoteti-158-cilveki.htm" class="t">Å ajÄ nedÄÄ¼as nogalÄ izbraukuma vakcinÄcijÄs sapotÄti 158 cilvÄki</a></span>
		</div>
			<div class="item show-on-pc-only">
			<span class="time">19:12</span>
			<span class="title"><a href="/izklaide/muzika/353899-rutulis-remikse-izcilo-dartas-stepanovas-un-dagamba-hitu.htm" class="t">Rutulis remiksÄ izcilo DÄrtas Stepanovas un âDaGambaâ hitu</a><a href="/izklaide/muzika/353899-rutulis-remikse-izcilo-dartas-stepanovas-un-dagamba-hitu.htm#comments" class="link-comm">2</a></span>
		</div>
	</div>
</div>									</div>
				<div class="col col-right col-sm col-with-gap">
					<div class='bl-lasitakie'>
	<h2 class="bl-title "><a href="/lasitakie/" class="t">LasÄ«tÄkie</a></h2>	<div class="art-items">		<div class="art-item mob-img-left">
			<a href="https://tautaruna.nra.lv/slavenibas/353917-vakar-mani-pameta-draugs-vaikule-dalas-ar-seru-vesti/" class="art-img-cont r16-9">
				<span class="img" style="background-image:url('https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528242_ba603c0b29.jpg');"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528242_ba603c0b29.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<span class="nr">1</span>
			<div class="art-title"><a href="https://tautaruna.nra.lv/slavenibas/353917-vakar-mani-pameta-draugs-vaikule-dalas-ar-seru-vesti/" class="t">&quot;Vakar mani pameta draugs&quot;; Vaikule dalÄs ar sÄru vÄsti</a></div>
			<div class="clear">&nbsp;</div>
		</div>
			<div class="art-item mob-img-left">
			<a href="https://lifehacks.nra.lv/dzivo-gudri/353866-4-iemesli-kapec-vistas-gala-nelabveligi-ietekme-veselibu/" class="art-img-cont r16-9">
				<span class="img" style="background-image:url('https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528125_53ead48f3e.jpg');"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528125_53ead48f3e.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<span class="nr">2</span>
			<div class="art-title"><a href="https://lifehacks.nra.lv/dzivo-gudri/353866-4-iemesli-kapec-vistas-gala-nelabveligi-ietekme-veselibu/" class="t">4 iemesli, kÄpÄc vistas gaÄ¼a nelabvÄlÄ«gi ietekmÄ veselÄ«bu</a><a href="https://lifehacks.nra.lv/dzivo-gudri/353866-4-iemesli-kapec-vistas-gala-nelabveligi-ietekme-veselibu/#comments" class="link-comm">4</a></div>
			<div class="clear">&nbsp;</div>
		</div>
			<div class="art-item mob-img-left">
			<a href="https://tautaruna.nra.lv/dzivesstils/353912-bricis-atklaj-kad-sonedel-atkal-varetu-but-30-laba-zina-senotajiem/" class="art-img-cont r16-9">
				<span class="img" style="background-image:url('https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528234_6e66aa9ff8.jpg');"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528234_6e66aa9ff8.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<span class="nr">3</span>
			<div class="art-title"><a href="https://tautaruna.nra.lv/dzivesstils/353912-bricis-atklaj-kad-sonedel-atkal-varetu-but-30-laba-zina-senotajiem/" class="t">Bricis atklÄj, kad Å¡onedÄÄ¼ atkal varÄtu bÅ«t +30; laba ziÅa sÄÅotÄjiem</a><a href="https://tautaruna.nra.lv/dzivesstils/353912-bricis-atklaj-kad-sonedel-atkal-varetu-but-30-laba-zina-senotajiem/#comments" class="link-comm">4</a></div>
			<div class="clear">&nbsp;</div>
		</div>
			<div class="art-item mob-img-left show-on-mob-only">
			<a href="https://tautaruna.nra.lv/dzivesstils/353910-kuram-zodiaka-zimem-2-augusts-bus-ipasi-veiksmigs/" class="art-img-cont r16-9">
				<span class="img" style="background-image:url('https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528232_9074e3b65a.jpg');"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528232_9074e3b65a.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<span class="nr">4</span>
			<div class="art-title"><a href="https://tautaruna.nra.lv/dzivesstils/353910-kuram-zodiaka-zimem-2-augusts-bus-ipasi-veiksmigs/" class="t">KurÄm zodiaka zÄ«mÄm 2. augusts bÅ«s Ä«paÅ¡i veiksmÄ«gs?</a><a href="https://tautaruna.nra.lv/dzivesstils/353910-kuram-zodiaka-zimem-2-augusts-bus-ipasi-veiksmigs/#comments" class="link-comm">1</a></div>
			<div class="clear">&nbsp;</div>
		</div>
			<div class="art-item mob-img-left show-on-mob-only">
			<a href="https://neatkariga.nra.lv/intervijas/353872-valdis-keris-iespejams-musu-varas-pilari-ir-sapuvusi" class="art-img-cont r16-9">
				<span class="img" style="background-image:url('https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528147_d9b8f3b999.jpg');"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528147_d9b8f3b999.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<span class="nr">5</span>
			<div class="art-title"><a href="https://neatkariga.nra.lv/intervijas/353872-valdis-keris-iespejams-musu-varas-pilari-ir-sapuvusi" class="t">Valdis Keris: IespÄjams, mÅ«su varas pÄ«lÄri ir sapuvuÅ¡i</a></div>
			<div class="clear">&nbsp;</div>
		</div>
	</div>
</div>									</div>
				<div class="clear">&nbsp;</div>
			</div>
		</div>
		<div class="col col-right col-sm col-with-gap">
			<div class="bl-ad-cont with-bg top-margin-1">
				<div class="bl-ad ad-left-lg">
			<div id='div-gpt-ad-1525262470913-left2' class="block gpt-ad" style='text-align:center; display:none;' data-gpt-placement="left2" data-gpt-on-empty="passback">		<script>
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-left2'); });
		</script>
	</div>
	<script>
	gptPassbacks['div-gpt-ad-1525262470913-left2'] = function(el) {
				window.appGPT.addAdsenseSlot(el, 'ca-pub-6250374732409191', '7325023778', 'auto', {
			'class': 'gad_left_nr2'
		});
	};
	</script>
	</div>			</div>
			<div class="bl-ad-cont top-margin-1">
				<div class="bl-ad ad-left-lg">
			<div id='div-gpt-ad-1525262470913-left2_1' class="block gpt-ad" style='text-align:center; display:none;' data-gpt-placement="left2_1" data-gpt-on-empty="remove">		<script>
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-left2_1'); });
		</script>
	</div>
	</div>			</div>
											</div>
		<div class="clear">&nbsp;</div>
	</div>

</div>
<div class="bl-full-width-base bl-full-w-ph-titl">
	<div class="wrap wrap-with-hspaces wrap-with-bg">
				<div class="top-margin-fix"></div>
		<h2 class="bl-title "><a href="https://nra.lv/tema/148-tokijas-vasaras-olimpiskas-speles.htm" class="t">Tokijas vasaras OlimpiskÄs spÄles</a><a href="https://nra.lv/tema/148-tokijas-vasaras-olimpiskas-speles.htm" class="btn-more">VairÄk &gt;</a></h2>
			</div>
	<div class="cont dark" style="background-color:#513c3c;">
		<div class="wrap wrap-with-hspaces">
			<div class="top-margin-fix"></div>
			<div class="art-items"><div class="col1">								<div class="art-item item-1">
					<div class="img-cont-wrap">
						<span class="art-img-cont r16-9">
							<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/860px/528342_518b76ab12.jpg" alt="" /></span>
							<span class="img-icons">
																							</span>
						</span>
						<div class="show-on-mob-only"><div class="art-title on-red size-4"><span class="t">PÄ¼aviÅÅ¡/ToÄs ceturtdaÄ¼finÄlÄ tiksies ar vÄl vienu olimpisko Äempionu</span></div></div>
						<div class="art-img-more">
							<span class="more-cont">
								<span class="date">20:10</span>
															</span>
						</div>
						<a href="/sports/353979-plavinstocs-ceturtdalfinala-tiksies-ar-vel-vienu-olimpisko-cempionu.htm" class="art-all-clickable"></a>
					</div>
				</div>
				</div><div class="col2">
					<div class="art-item intro-title-cont show-on-pc-only">
						<div class="art-title on-red size-2 tabl-size-3"><a href="/sports/353979-plavinstocs-ceturtdalfinala-tiksies-ar-vel-vienu-olimpisko-cempionu.htm" class="t">PÄ¼aviÅÅ¡/ToÄs ceturtdaÄ¼finÄlÄ tiksies ar vÄl vienu olimpisko Äempionu</a></div>
					</div>
															<div class="art-item title-in-bl item-2" style="border-color:#644545;">
					<div class="art-title size-5"><a href="/sports/353931-baltkrievijas-sprintere-cimanouska-lugusi-politisko-patverumu-polija.htm" class="t">Baltkrievijas sprintere Cimanouska lÅ«gusi politisko patvÄrumu PolijÄ</a><a href="/sports/353931-baltkrievijas-sprintere-cimanouska-lugusi-politisko-patverumu-polija.htm#comments" class="link-comm">40</a></div>
				</div>
															<div class="art-item title-in-bl item-3" style="border-color:#644545;">
					<div class="art-title size-5"><a href="/sports/353908-polija-un-cehija-piedavajusas-vizas-baltkrievijas-sprinterei-cimanouskai.htm" class="t">Polija un Äehija piedÄvÄjuÅ¡as vÄ«zas Baltkrievijas sprinterei Cimanouskai</a><a href="/sports/353908-polija-un-cehija-piedavajusas-vizas-baltkrievijas-sprinterei-cimanouskai.htm#comments" class="link-comm">10</a></div>
				</div>
															<div class="art-item title-in-bl item-4" style="border-color:#644545;">
					<div class="art-title size-5"><a href="/foto/sports/14320-jatnieks-kristaps-neretnieks-gatavojas-olimpisko-spelu-startam.htm" class="t">FOTO: JÄtnieks Kristaps Neretnieks gatavojas olimpisko spÄÄ¼u startam</a></div>
				</div>
							</div><div class="clear">&nbsp;</div></div>
			<div class="v-space"></div>
		</div>
	</div>
</div><div class="wrap wrap-with-bg"><div class="top-margin-fix"></div>
			
	
		
	<div class="bl-tautarunalv-slider">
	<div class="with-side-padding">
		<h2 class="bl-title with-img"><a href="//tautaruna.nra.lv/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=titlelink" class="t"><img src="//tautaruna.nra.lv/build/images/logo.svg?v=38" alt="" class="img" />&nbsp;</a></h2>
	</div>
	<div class="bl-tautarunalv-slider-items with-sm-side-padding">
		<div class="slider-wrap">
			<div class="art-items art-items-in-cols-4 slider items-q-4 equal-titles-h" data-eqth-maxw="any|480" data-eqth-cols="4|2">				<div class="art-item item-1">
					<a href="https://tautaruna.nra.lv/slavenibas/353414-boksera-brieza-masas-vira-arstesanai-nepilnas-dienas-laika-saziedoti-59-000-eiro/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/280x186px/527406_6e5e511ca3.jpg" alt="" /></span>
					</a>
					<div class="art-title size-7"><a href="https://tautaruna.nra.lv/slavenibas/353414-boksera-brieza-masas-vira-arstesanai-nepilnas-dienas-laika-saziedoti-59-000-eiro/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">Boksera BrieÅ¾a mÄsas vÄ«ra ÄrstÄÅ¡anai nepilnas dienas laikÄ saziedoti 59 000 eiro</a><a href="https://tautaruna.nra.lv/slavenibas/353414-boksera-brieza-masas-vira-arstesanai-nepilnas-dienas-laika-saziedoti-59-000-eiro/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlinkComm#comments" class="link-comm">12</a></div>
				</div>
							<div class="art-item item-2">
					<a href="https://tautaruna.nra.lv/slavenibas/353956-foto-vai-viens-no-karaliskas-gimenes-locekliem-piekerts-laulibas-parkapsana/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528318_3431144139.jpg" alt="" /></span>
					</a>
					<div class="art-title size-7"><a href="https://tautaruna.nra.lv/slavenibas/353956-foto-vai-viens-no-karaliskas-gimenes-locekliem-piekerts-laulibas-parkapsana/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">FOTO: Vai viens no karaliskÄs Ä£imenes locekÄ¼iem pieÄ·erts laulÄ«bas pÄrkÄpÅ¡anÄ?</a></div>
				</div>
							<div class="art-item item-3">
					<a href="https://tautaruna.nra.lv/nebusanas/353980-divas-nedelas-ar-pacinu-nekas-nenotiek-pec-sutijuma-atmuitosanas-to-ilgstosi-uzglaba-pasta/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528343_a48f02645f.jpg" alt="" /></span>
					</a>
					<div class="art-title size-7"><a href="https://tautaruna.nra.lv/nebusanas/353980-divas-nedelas-ar-pacinu-nekas-nenotiek-pec-sutijuma-atmuitosanas-to-ilgstosi-uzglaba-pasta/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">âDivas nedÄÄ¼as ar paciÅu nekas nenotiek!â pÄc sÅ«tÄ«juma atmuitoÅ¡anas to ilgstoÅ¡i uzglabÄ pastÄ</a><a href="https://tautaruna.nra.lv/nebusanas/353980-divas-nedelas-ar-pacinu-nekas-nenotiek-pec-sutijuma-atmuitosanas-to-ilgstosi-uzglaba-pasta/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlinkComm#comments" class="link-comm">1</a></div>
				</div>
							<div class="art-item item-4">
					<a href="https://tautaruna.nra.lv/nebusanas/353923-riga-sieviete-piedzivo-pamatigu-izbili-iesprostojot-mazuli-automasina/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528248_c45f9f6f3c.jpg" alt="" /></span>
					</a>
					<div class="art-title size-7"><a href="https://tautaruna.nra.lv/nebusanas/353923-riga-sieviete-piedzivo-pamatigu-izbili-iesprostojot-mazuli-automasina/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">RÄ«gÄ sieviete piedzÄ«vo pamatÄ«gu izbÄ«li, iesprostojot mazuli automaÅ¡Ä«nÄ</a><a href="https://tautaruna.nra.lv/nebusanas/353923-riga-sieviete-piedzivo-pamatigu-izbili-iesprostojot-mazuli-automasina/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlinkComm#comments" class="link-comm">1</a></div>
				</div>
			<div class="clear">&nbsp;</div></div>
		</div>
	</div>
</div>		
		
	<div class="layout-two-cols">
		<div class="col col-left col-sm">
			<div class="with-side-padding">
				<div class="bl-nra-viedokli">
	<h2 class="bl-title"><a href="/viedokli/nra/" class="t">Redakcijas viedoklis</a></h2>
	<div class="items">				<div class="item">
			<a href="https://neatkariga.nra.lv/komentari/bens-latkovskis/353871-lukasenka-kaitina-eiropu-eiropa-gul-pagaidam" class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos_profiles/2014-08/180x180px/87367_847c22550e.jpg" alt="" /></a>
			<span class="author">Bens Latkovskis</span>
			<span class="title"><a href="https://neatkariga.nra.lv/komentari/bens-latkovskis/353871-lukasenka-kaitina-eiropu-eiropa-gul-pagaidam" class="t">LukaÅ¡enka kaitina Eiropu. Eiropa guÄ¼. PagaidÄm</a><a href="https://neatkariga.nra.lv/komentari/bens-latkovskis/353871-lukasenka-kaitina-eiropu-eiropa-gul-pagaidam#comments" class="link-comm">73</a></span>
		</div>
					<div class="item">
			<a href="https://neatkariga.nra.lv/komentari/maris-krautmanis-3/353876-pavlutam-nepatik-sievietes-kermena-prieksmetiskosana" class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos_profiles/2013-11/180x180px/66058_93d9463edb.jpg" alt="" /></a>
			<span class="author">MÄris Krautmanis</span>
			<span class="title"><a href="https://neatkariga.nra.lv/komentari/maris-krautmanis-3/353876-pavlutam-nepatik-sievietes-kermena-prieksmetiskosana" class="t">PavÄ¼utam nepatÄ«k sievietes Ä·ermeÅa priekÅ¡metiskoÅ¡ana</a><a href="https://neatkariga.nra.lv/komentari/maris-krautmanis-3/353876-pavlutam-nepatik-sievietes-kermena-prieksmetiskosana#comments" class="link-comm">103</a></span>
		</div>
			<div class="clear">&nbsp;</div>		<div class="item">
			<a href="https://neatkariga.nra.lv/komentari/elita-veidemane/353482-vai-levits-un-karins-atbalsta-banditu-ieplusanu-valsti" class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos_profiles/2014-08/180x180px/87368_433f6e126c.jpg" alt="" /></a>
			<span class="author">Elita Veidemane</span>
			<span class="title"><a href="https://neatkariga.nra.lv/komentari/elita-veidemane/353482-vai-levits-un-karins-atbalsta-banditu-ieplusanu-valsti" class="t">Vai Levits un KariÅÅ¡ atbalsta bandÄ«tu ieplÅ«Å¡anu valstÄ«?</a></span>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>							</div>
		</div>
		<div class="col col-right col-big">
			<div class="with-sm-side-padding">
				<div class=''>	<div class="with-sm-side-padding"><h2 class="bl-title with-img"><a href="https://neatkariga.nra.lv/" class="t"><img src="/build/images/logo_neatkariga_204x36px.png" alt="NeatkarÄ«gÄ" class="img" /> raksta</a></h2></div>	<div class='art-items art-items-in-cols-3'>		<div class="art-item col-1">
			<a href="https://neatkariga.nra.lv/politika/353875-jaunizveidotaja-rezeknes-novada-latviskas-partijas-jutas-specigakas" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528152_363031ed61.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/politika/353875-jaunizveidotaja-rezeknes-novada-latviskas-partijas-jutas-specigakas" class="t">JaunizveidotajÄ RÄzeknes novadÄ latviskÄs partijas jÅ«tas spÄcÄ«gÄkas</a><a href="https://neatkariga.nra.lv/politika/353875-jaunizveidotaja-rezeknes-novada-latviskas-partijas-jutas-specigakas#comments" class="link-comm">5</a></div>
		</div>
			<div class="art-item col-2">
			<a href="https://neatkariga.nra.lv/ekonomika/353874-ikp-matematika-ka-1-4-parvertas-par-10-3" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528150_c69ddf4120.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/ekonomika/353874-ikp-matematika-ka-1-4-parvertas-par-10-3" class="t">IKP matemÄtika: kÄ +1,4% pÄrvÄrtÄs par +10,3%</a><a href="https://neatkariga.nra.lv/ekonomika/353874-ikp-matematika-ka-1-4-parvertas-par-10-3#comments" class="link-comm">4</a></div>
		</div>
			<div class="art-item col-3">
			<a href="https://neatkariga.nra.lv/izpete/353873-cerigs-sakums-gimenes-aizsardzibai-satversme" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528148_39405e45e8.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/izpete/353873-cerigs-sakums-gimenes-aizsardzibai-satversme" class="t">CerÄ«gs sÄkums Ä£imenes aizsardzÄ«bai SatversmÄ</a><a href="https://neatkariga.nra.lv/izpete/353873-cerigs-sakums-gimenes-aizsardzibai-satversme#comments" class="link-comm">56</a></div>
		</div>
			<div class="art-item col-1">
			<a href="https://neatkariga.nra.lv/izpete/353877-eksperts-vilto-dargas-zales-un-covid-vakcinas-lai-gutu-lielaku-pelnu" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528154_1f2d77b390.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/izpete/353877-eksperts-vilto-dargas-zales-un-covid-vakcinas-lai-gutu-lielaku-pelnu" class="t">Eksperts: vilto dÄrgas zÄles un Covid vakcÄ«nas, lai gÅ«tu lielÄku peÄ¼Åu</a><a href="https://neatkariga.nra.lv/izpete/353877-eksperts-vilto-dargas-zales-un-covid-vakcinas-lai-gutu-lielaku-pelnu#comments" class="link-comm">3</a></div>
		</div>
			<div class="art-item col-2 show-on-pc-only">
			<a href="https://neatkariga.nra.lv/izpete/353878-par-senkapu-nopostisanu-pakrata-ar-pirkstu-bet-par-senlietu-kolekcionesanu-kriminalsods" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528156_b05864008a.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/izpete/353878-par-senkapu-nopostisanu-pakrata-ar-pirkstu-bet-par-senlietu-kolekcionesanu-kriminalsods" class="t">Par senkapu nopostÄ«Å¡anu &quot;pakrata ar pirkstu&quot;, bet par senlietu kolekcionÄÅ¡anu â kriminÄlsods</a><a href="https://neatkariga.nra.lv/izpete/353878-par-senkapu-nopostisanu-pakrata-ar-pirkstu-bet-par-senlietu-kolekcionesanu-kriminalsods#comments" class="link-comm">15</a></div>
		</div>
			<div class="art-item col-3 show-on-pc-only">
			<a href="https://neatkariga.nra.lv/lasamgabali/353762-top-5-lasitakie-neatkarigas-raksti" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527907_c9958d68e4.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/lasamgabali/353762-top-5-lasitakie-neatkarigas-raksti" class="t">TOP 5 lasÄ«tÄkie NeatkarÄ«gÄs raksti</a><a href="https://neatkariga.nra.lv/lasamgabali/353762-top-5-lasitakie-neatkarigas-raksti#comments" class="link-comm">1</a></div>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>							</div>
		</div>
		<div class="clear">&nbsp;</div>
	</div>
	
				
	<div class="bl-ad-cont top-margin-1"><div class="bl-ad ad-full-width">
			<div id='div-gpt-ad-1525262470913-top2' class="gpt-ad" data-gpt-placement="top2" data-gpt-on-empty="passback">		<script>
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-top2'); });
		</script>
	</div>
	<script>
	gptPassbacks['div-gpt-ad-1525262470913-top2'] = function(el) {
				window.appGPT.addAdsenseSlot(el, 'ca-pub-6250374732409191', '5717235190', 'auto', {
			'class': 'gad_fullWidth_nr2'		});
	};
	</script>
	</div></div>	
</div>

<div class="wrap wrap-with-bg">
	
	<div class="top-margin-fix"></div>
	
	<div class="layout-two-cols">
		<div class="col col-left col-big">
			<div class="with-sm-side-padding">
				<div class=''>	<div class="with-sm-side-padding"><h2 class="bl-title with-img hide-more-mob"><a href="/tema/54-lielas-intervijas.htm" class="t"><img src="/build/images/logo_neatkariga_204x36px.png" alt="NeatkarÄ«gÄ" class="img" /> LielÄs intervijas</a><a href="/tema/54-lielas-intervijas.htm" class="btn-more">VairÄk &gt;</a></h2></div>	<div class='art-items art-items-in-cols-3'>		<div class="art-item col-1">
			<a href="https://neatkariga.nra.lv/intervijas/353872-valdis-keris-iespejams-musu-varas-pilari-ir-sapuvusi" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528147_d9b8f3b999.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/intervijas/353872-valdis-keris-iespejams-musu-varas-pilari-ir-sapuvusi" class="t">Valdis Keris: IespÄjams, mÅ«su varas pÄ«lÄri ir sapuvuÅ¡i</a></div>
		</div>
			<div class="art-item col-2">
			<a href="https://neatkariga.nra.lv/novados/353446-kristine-lemberga-ventspils-virsmerkis-saglabat-iedzivotaju-skaitu" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527450_d9593513cd.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/novados/353446-kristine-lemberga-ventspils-virsmerkis-saglabat-iedzivotaju-skaitu" class="t">KristÄ«ne Lemberga: Ventspils virsmÄrÄ·is â saglabÄt iedzÄ«votÄju skaitu</a><a href="https://neatkariga.nra.lv/novados/353446-kristine-lemberga-ventspils-virsmerkis-saglabat-iedzivotaju-skaitu#comments" class="link-comm">38</a></div>
		</div>
			<div class="art-item col-3 show-on-pc-only">
			<a href="https://neatkariga.nra.lv/novados/353376-ventspils-mers-janis-vitolins-visu-projektu-merkis-ir-uzlabot-ventspilnieku-dzives-kvalitati" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527506_b948f2b863.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/novados/353376-ventspils-mers-janis-vitolins-visu-projektu-merkis-ir-uzlabot-ventspilnieku-dzives-kvalitati" class="t">Ventspils mÄrs JÄnis VÄ«toliÅÅ¡: Visu projektu mÄrÄ·is ir uzlabot ventspilnieku dzÄ«ves kvalitÄti</a><a href="https://neatkariga.nra.lv/novados/353376-ventspils-mers-janis-vitolins-visu-projektu-merkis-ir-uzlabot-ventspilnieku-dzives-kvalitati#comments" class="link-comm">15</a></div>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>							</div>
		</div>
		<div class="col col-right col-sm">
			<div class="with-side-padding">
				<div class="show-on-pc-only"><div class="bl-ad-cont with-bg top-margin-1"><div class="bl-ad ad-left-lg">
			<div id='div-gpt-ad-1525262470913-left3' class="block gpt-ad" style='text-align:center; display:none;' data-gpt-placement="left3" data-gpt-on-empty="passback">		<script>
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-left3'); });
		</script>
	</div>
	<script>
	gptPassbacks['div-gpt-ad-1525262470913-left3'] = function(el) {
				window.appGPT.addAdsenseSlot(el, 'ca-pub-6250374732409191', '4136835224', 'auto', {
			'class': 'gad_left_nr3'
		});
	};
	</script>
	</div></div></div>
			</div>
		</div>	
		<div class="clear">&nbsp;</div>
	</div>
	
	<div class="bl-rekl-aktuali cols" data-on-mob-limit="5">
	<div class="with-side-padding">
		<h2 class="bl-title"><span class="t">AktuÄli</span></h2>
	</div>
	<div class="items-cont">
		<div class="items">			<div class="item item-1">
				<a href="https://nra.lv/izklaide/muzika/353439-koncertzale-latvija-skanes-roka-balades.htm" class="img"><img src="https://zinas.nra.lv/_mm/photos/2021-07/180x180px/527443_3f89618e2c.jpg" alt="" /></a>
				<a href="https://nra.lv/izklaide/muzika/353439-koncertzale-latvija-skanes-roka-balades.htm" class="t">KoncertzÄlÄ âLatvijaâ skanÄs roka balÄdes</a>
			</div>
					<div class="item item-2">
				<a href="https://nra.lv/reklamraksti/353425-jau-septembri-zalaja-rezima-gardezus-pulces-riga-food-2021-kipsala.htm" class="img"><img src="https://zinas.nra.lv/_mm/photos/2021-07/180x180px/527419_3e7c723d11.jpg" alt="" /></a>
				<a href="https://nra.lv/reklamraksti/353425-jau-septembri-zalaja-rezima-gardezus-pulces-riga-food-2021-kipsala.htm" class="t">Jau septembrÄ« zaÄ¼ajÄ reÅ¾Ä«mÄ gardÄÅ¾us pulcÄs &quot;Riga Food 2021&quot; Ä¶Ä«psalÄ!</a>
			</div>
					<div class="item item-3">
				<a href="https://nra.lv/latvija/353333-ar-ko-parvietoties-pa-pilsetu-vasara.htm" class="img"><img src="https://zinas.nra.lv/_mm/photos/2021-07/180x180px/527296_4fc99975cb.jpg" alt="" /></a>
				<a href="https://nra.lv/latvija/353333-ar-ko-parvietoties-pa-pilsetu-vasara.htm" class="t">Ar ko pÄrvietoties pa pilsÄtu vasarÄ?</a>
			</div>
		<div class="clear">&nbsp;</div></div>
		<div class="l1"></div>
		<div class="l2"></div>
	</div>
</div>
</div>
<div class="bl-full-width-base bl-full-w-ph-titl">
	<div class="wrap wrap-with-hspaces wrap-with-bg">
				<div class="top-margin-fix"></div>
		<h2 class="bl-title hide-more-mob"><a href="/tema/230-ekspresjautajums.htm" class="t"><img src="/_img/eksperesjautajums.png" alt="EkspresjautÄjums" class="img" style="display:block;float:left;max-width:400px;margin-top:-30px;" /></a><a href="/tema/230-ekspresjautajums.htm" class="btn-more">VairÄk &gt;</a></h2>
			</div>
	<div class="cont light" style="background-color:#d2e1f4;">
		<div class="wrap wrap-with-hspaces">
			<div class="top-margin-fix"></div>
			<div class="art-items"><div class="col1">								<div class="art-item item-1">
					<div class="img-cont-wrap">
						<span class="art-img-cont r16-9">
							<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/860px/527729_f64bcf7bf7.jpg" alt="" /></span>
							<span class="img-icons">
																							</span>
						</span>
						<div class="show-on-mob-only"><div class="art-title on-red size-4"><span class="t">EKSPRESJAUTÄJUMS. &quot;Lidl&quot; darbiniekiem sola darbu jau augustÄ. Vai Lidl beidzot ir gatavs atvÄrties?</span></div></div>
						<div class="art-img-more">
							<span class="more-cont">
								<span class="date">29.jÅ«l</span>
								<a href="https://neatkariga.nra.lv/ekonomika/353641-ekspresjautajums-lidl-darbiniekiem-sola-darbu-jau-augusta-vai-lidl-beidzot-ir-gatavs-atverties#comments" class="link-comm">13</a>							</span>
						</div>
						<a href="https://neatkariga.nra.lv/ekonomika/353641-ekspresjautajums-lidl-darbiniekiem-sola-darbu-jau-augusta-vai-lidl-beidzot-ir-gatavs-atverties" class="art-all-clickable"></a>
					</div>
				</div>
				</div><div class="col2">
					<div class="art-item intro-title-cont show-on-pc-only">
						<div class="art-title on-red size-2 tabl-size-3"><a href="https://neatkariga.nra.lv/ekonomika/353641-ekspresjautajums-lidl-darbiniekiem-sola-darbu-jau-augusta-vai-lidl-beidzot-ir-gatavs-atverties" class="t">EKSPRESJAUTÄJUMS. &quot;Lidl&quot; darbiniekiem sola darbu jau augustÄ. Vai Lidl beidzot ir gatavs atvÄrties?</a></div>
					</div>
															<div class="art-item title-in-bl item-2" style="border-color:#535456;">
					<div class="art-title size-5"><a href="https://neatkariga.nra.lv/lasamgabali/353484-ekspresjautajums-cik-latvijai-izmaksa-piedalisanas-tokijas-olimpiskajas-speles" class="t">EKSPRESJAUTÄJUMS. Cik Latvijai izmaksÄ piedalÄ«Å¡anÄs Tokijas olimpiskajÄs spÄlÄs?</a><a href="https://neatkariga.nra.lv/lasamgabali/353484-ekspresjautajums-cik-latvijai-izmaksa-piedalisanas-tokijas-olimpiskajas-speles#comments" class="link-comm">21</a></div>
				</div>
															<div class="art-item title-in-bl item-3" style="border-color:#535456;">
					<div class="art-title size-5"><a href="https://neatkariga.nra.lv/izpete/352637-vai-un-kas-nosaka-valsts-augstskolu-rektoru-algu" class="t">Vai un kas nosaka valsts augstskolu rektoru algu?</a><a href="https://neatkariga.nra.lv/izpete/352637-vai-un-kas-nosaka-valsts-augstskolu-rektoru-algu#comments" class="link-comm">11</a></div>
				</div>
							</div><div class="clear">&nbsp;</div></div>
			<div class="v-space"></div>
		</div>
	</div>
</div><div class="wrap wrap-with-bg">
	<div class="top-margin-fix"></div>

		
		
			<div class="bl-tautarunalv-slider bl-lifehackslv-slider">
	<div class="with-side-padding">
		<h2 class="bl-title with-img"><a href="//lifehacks.nra.lv/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=titlelink" class="t"><img src="//lifehacks.nra.lv/build/images/logo_320x93px.png?v=38" alt="" class="img" />&nbsp;</a></h2>
	</div>
	<div class="bl-tautarunalv-slider-items bl-lifehackslv-slider-items">
		<div class="slider-wrap">
			<div class="art-items slider items-q-8 equal-titles-h" data-eqth-maxw="any|480" data-eqth-cols="4|2">				<div class="art-item item-1">
					<a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/miluli/353631-iepriecini-majas-miluli-divi-vienkarsi-pagatavojami-karumi/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/280x186px/527720_a69588ff9a.jpg" alt="" /></span>
					</a>
					<div class="art-title"><a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/miluli/353631-iepriecini-majas-miluli-divi-vienkarsi-pagatavojami-karumi/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">Iepriecini mÄjas mÄ«luli! Divi vienkÄrÅ¡i pagatavojami kÄrumi</a></div>
				</div>
							<div class="art-item item-2">
					<a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/virtuve/353617-izmegini-gardas-burbultejas-recepte/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/280x186px/527690_424e8212c1.jpg" alt="" /></span>
					</a>
					<div class="art-title"><a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/virtuve/353617-izmegini-gardas-burbultejas-recepte/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">IzmÄÄ£ini! GardÄs burbuÄ¼tÄjas recepte</a></div>
				</div>
							<div class="art-item item-3">
					<a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/dzivo-gudri/353866-4-iemesli-kapec-vistas-gala-nelabveligi-ietekme-veselibu/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528125_53ead48f3e.jpg" alt="" /></span>
					</a>
					<div class="art-title"><a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/dzivo-gudri/353866-4-iemesli-kapec-vistas-gala-nelabveligi-ietekme-veselibu/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">4 iemesli, kÄpÄc vistas gaÄ¼a nelabvÄlÄ«gi ietekmÄ veselÄ«bu</a><a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/dzivo-gudri/353866-4-iemesli-kapec-vistas-gala-nelabveligi-ietekme-veselibu/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlinkComm#comments" class="link-comm">4</a></div>
				</div>
							<div class="art-item item-4">
					<a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/virtuve/353645-ideja-pievieno-klat-darzenus-vasaras-dzerieniem/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/280x186px/527734_6f6a7597a5.jpg" alt="" /></span>
					</a>
					<div class="art-title"><a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/virtuve/353645-ideja-pievieno-klat-darzenus-vasaras-dzerieniem/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">Ideja! Pievieno klÄt dÄrzeÅus vasaras dzÄrieniem</a></div>
				</div>
							<div class="art-item item-5">
					<a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/virtuve/353754-gaspaco-ar-tomatu-sulu-lieliska-alternativa-latviesu-aukstajai-zupai/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/280x186px/527881_b9e21141b1.jpg" alt="" /></span>
					</a>
					<div class="art-title"><a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/virtuve/353754-gaspaco-ar-tomatu-sulu-lieliska-alternativa-latviesu-aukstajai-zupai/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">GaspaÄo ar tomÄtu sulu. Lieliska alternatÄ«va latvieÅ¡u aukstajai zupai!</a></div>
				</div>
							<div class="art-item item-6">
					<a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/dzivo-gudri/353824-4-paradumi-kas-liek-izskatitites-vecakai-par-saviem-gadiem/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/280x186px/528033_2cb5979438.jpg" alt="" /></span>
					</a>
					<div class="art-title"><a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/dzivo-gudri/353824-4-paradumi-kas-liek-izskatitites-vecakai-par-saviem-gadiem/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">4 paradumi, kas liek izskatÄ«tites vecÄkai par saviem gadiem</a></div>
				</div>
							<div class="art-item item-7">
					<a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/virtuve/353749-recepte-maigs-ogu-pirags-somu-gaume/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/280x186px/527860_5d6c63deb1.jpg" alt="" /></span>
					</a>
					<div class="art-title"><a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/virtuve/353749-recepte-maigs-ogu-pirags-somu-gaume/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">RECEPTE: maigs ogu pÄ«rÄgs somu gaumÄ</a></div>
				</div>
							<div class="art-item item-8">
					<a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/eksperiments/353761-eksperiments-neparastas-mini-versacis-berniem-vai-neliela-uzkoda-pieaugusajiem/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemimglink" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/280x186px/527899_f4a79066c3.jpg" alt="" /></span>
					</a>
					<div class="art-title"><a href="//lifehacks.nra.lvhttps://lifehacks.nra.lv/eksperiments/353761-eksperiments-neparastas-mini-versacis-berniem-vai-neliela-uzkoda-pieaugusajiem/?utm_source=nra.lv&amp;utm_medium=content-block&amp;utm_campaign=nralvLinks&amp;utm_content=itemlink" class="t">EKSPERIMENTS: neparastÄs mini vÄrÅ¡acis bÄrniem vai neliela uzkoda pieauguÅ¡ajiem</a></div>
				</div>
			<div class="clear">&nbsp;</div></div>
		</div>
	</div>
</div>				
	<div class="v-space double"></div>
	<div class="bl-spec-covid19-v2">
	<div class="wrap">
		<span class="virus-icon img-lazy-bg">
			<img src="//:0" data-src="/_files/202003/covid/virus_img.png" alt="VÄ«russ" />
		</span>
		<div class="head-line">
			<h2 class="bl-title no-border no-top-m"><a href="https://nra.lv/temas/193-bistamais-viruss.htm" class="t">KoronavÄ«russ <b>Covid-19</b></a></h2>
			<p class="updated">Dati: 13:51</p>
		</div>
		
		<div class="layout-two-cols">
			<div class="col col-left col-sm">
				<div class="with-side-padding">

					<div class="stats-bl top-margin-2">
						<div class="stats-st1 stats-cases with-nr bigtopm">
							<span class="label">GadÄ«jumu skaits <b>LatvijÄ</b><span class="br"> </span>(kopÄ):</span>
							<b class="nr big">138925</b>
							<div class="clear">&nbsp;</div>
							<span class="line"></span>
						</div>
						
						<div class="timeline-cont">
							<ul class="timeline timeline-perpage-7">								<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em></em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">10.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em></em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">11.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em></em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">12.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em></em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">13.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em></em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">14.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em></em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">15.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em></em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">16.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>26</b>
											<em class="red">(+24)</em>
											<span style="padding-top:47.6%;"></span>
										</span>
									</span> 
									<span class="d">17.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>11</b>
											<em class="red">(+9)</em>
											<span style="padding-top:20.1%;"></span>
										</span>
									</span> 
									<span class="d">18.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>15</b>
											<em class="red">(+9)</em>
											<span style="padding-top:27.4%;"></span>
										</span>
									</span> 
									<span class="d">19.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>25</b>
											<em class="red">(+24)</em>
											<span style="padding-top:45.7%;"></span>
										</span>
									</span> 
									<span class="d">20.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>13</b>
											<em class="red">(+4)</em>
											<span style="padding-top:23.8%;"></span>
										</span>
									</span> 
									<span class="d">21.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>15</b>
											<em class="red">(+11)</em>
											<span style="padding-top:27.4%;"></span>
										</span>
									</span> 
									<span class="d">22.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>41</b>
											<em class="red">(+37)</em>
											<span style="padding-top:75%;"></span>
										</span>
									</span> 
									<span class="d">23.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>17</b>
											<em>(-9)</em>
											<span style="padding-top:31.1%;"></span>
										</span>
									</span> 
									<span class="d">24.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>24</b>
											<em class="red">(+13)</em>
											<span style="padding-top:43.9%;"></span>
										</span>
									</span> 
									<span class="d">25.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>23</b>
											<em class="red">(+8)</em>
											<span style="padding-top:42.1%;"></span>
										</span>
									</span> 
									<span class="d">26.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>36</b>
											<em class="red">(+11)</em>
											<span style="padding-top:65.9%;"></span>
										</span>
									</span> 
									<span class="d">27.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>25</b>
											<em class="red">(+12)</em>
											<span style="padding-top:45.7%;"></span>
										</span>
									</span> 
									<span class="d">28.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>42</b>
											<em class="red">(+27)</em>
											<span style="padding-top:76.8%;"></span>
										</span>
									</span> 
									<span class="d">29.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>29</b>
											<em>(-12)</em>
											<span style="padding-top:53%;"></span>
										</span>
									</span> 
									<span class="d">30.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>22</b>
											<em class="red">(+5)</em>
											<span style="padding-top:40.2%;"></span>
										</span>
									</span> 
									<span class="d">31.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>48</b>
											<em class="red">(+24)</em>
											<span style="padding-top:87.8%;"></span>
										</span>
									</span> 
									<span class="d">01.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>12</b>
											<em>(-11)</em>
											<span style="padding-top:22%;"></span>
										</span>
									</span> 
									<span class="d">02.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>35</b>
											<em>(-1)</em>
											<span style="padding-top:64%;"></span>
										</span>
									</span> 
									<span class="d">03.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>16</b>
											<em>(-9)</em>
											<span style="padding-top:29.3%;"></span>
										</span>
									</span> 
									<span class="d">04.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>24</b>
											<em>(-18)</em>
											<span style="padding-top:43.9%;"></span>
										</span>
									</span> 
									<span class="d">05.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em>(-20)</em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">06.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em>(-16)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">07.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>29</b>
											<em>(-19)</em>
											<span style="padding-top:53%;"></span>
										</span>
									</span> 
									<span class="d">08.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>12</b>
											<em></em>
											<span style="padding-top:22%;"></span>
										</span>
									</span> 
									<span class="d">09.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>23</b>
											<em>(-12)</em>
											<span style="padding-top:42.1%;"></span>
										</span>
									</span> 
									<span class="d">10.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>18</b>
											<em class="red">(+2)</em>
											<span style="padding-top:32.9%;"></span>
										</span>
									</span> 
									<span class="d">11.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>21</b>
											<em>(-3)</em>
											<span style="padding-top:38.4%;"></span>
										</span>
									</span> 
									<span class="d">12.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-5)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">13.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em>(-4)</em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">14.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em>(-20)</em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">15.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em>(-3)</em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">16.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>7</b>
											<em>(-16)</em>
											<span style="padding-top:12.8%;"></span>
										</span>
									</span> 
									<span class="d">17.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>30</b>
											<em class="red">(+12)</em>
											<span style="padding-top:54.9%;"></span>
										</span>
									</span> 
									<span class="d">18.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>15</b>
											<em>(-6)</em>
											<span style="padding-top:27.4%;"></span>
										</span>
									</span> 
									<span class="d">19.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>12</b>
											<em class="red">(+8)</em>
											<span style="padding-top:22%;"></span>
										</span>
									</span> 
									<span class="d">20.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em class="red">(+7)</em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">21.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>13</b>
											<em class="red">(+4)</em>
											<span style="padding-top:23.8%;"></span>
										</span>
									</span> 
									<span class="d">22.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>17</b>
											<em class="red">(+8)</em>
											<span style="padding-top:31.1%;"></span>
										</span>
									</span> 
									<span class="d">23.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em>(-1)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">24.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>20</b>
											<em>(-10)</em>
											<span style="padding-top:36.6%;"></span>
										</span>
									</span> 
									<span class="d">25.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>8</b>
											<em>(-7)</em>
											<span style="padding-top:14.6%;"></span>
										</span>
									</span> 
									<span class="d">26.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em>(-6)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">27.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>18</b>
											<em class="red">(+9)</em>
											<span style="padding-top:32.9%;"></span>
										</span>
									</span> 
									<span class="d">28.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>13</b>
											<em></em>
											<span style="padding-top:23.8%;"></span>
										</span>
									</span> 
									<span class="d">29.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em>(-8)</em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">30.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>12</b>
											<em class="red">(+6)</em>
											<span style="padding-top:22%;"></span>
										</span>
									</span> 
									<span class="d">01.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-19)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">02.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>8</b>
											<em></em>
											<span style="padding-top:14.6%;"></span>
										</span>
									</span> 
									<span class="d">03.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>17</b>
											<em class="red">(+11)</em>
											<span style="padding-top:31.1%;"></span>
										</span>
									</span> 
									<span class="d">04.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-18)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">05.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-9)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">06.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em></em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">07.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>19</b>
											<em class="red">(+7)</em>
											<span style="padding-top:34.8%;"></span>
										</span>
									</span> 
									<span class="d">08.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em class="red">(+1)</em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">09.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em class="red">(+1)</em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">10.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>7</b>
											<em>(-10)</em>
											<span style="padding-top:12.8%;"></span>
										</span>
									</span> 
									<span class="d">11.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em class="red">(+4)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">12.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-3)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">13.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>11</b>
											<em class="red">(+2)</em>
											<span style="padding-top:20.1%;"></span>
										</span>
									</span> 
									<span class="d">14.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>8</b>
											<em>(-11)</em>
											<span style="padding-top:14.6%;"></span>
										</span>
									</span> 
									<span class="d">15.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>27</b>
											<em class="red">(+25)</em>
											<span style="padding-top:49.4%;"></span>
										</span>
									</span> 
									<span class="d">16.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>11</b>
											<em class="red">(+2)</em>
											<span style="padding-top:20.1%;"></span>
										</span>
									</span> 
									<span class="d">17.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-6)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">18.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em>(-1)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">19.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em class="red">(+3)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">20.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em>(-2)</em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">21.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>5</b>
											<em>(-3)</em>
											<span style="padding-top:9.1%;"></span>
										</span>
									</span> 
									<span class="d">22.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>16</b>
											<em>(-11)</em>
											<span style="padding-top:29.3%;"></span>
										</span>
									</span> 
									<span class="d">23.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-10)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">24.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em class="red">(+1)</em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">25.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em class="red">(+1)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">26.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em></em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">27.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-5)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">28.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em>(-2)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">29.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-15)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">30.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em></em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">31.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-2)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">01.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>5</b>
											<em class="red">(+1)</em>
											<span style="padding-top:9.1%;"></span>
										</span>
									</span> 
									<span class="d">02.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>8</b>
											<em class="red">(+4)</em>
											<span style="padding-top:14.6%;"></span>
										</span>
									</span> 
									<span class="d">03.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em>(-1)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">04.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em></em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">05.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em></em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">06.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em class="red">(+1)</em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">07.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em></em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">08.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-4)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">09.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em>(-5)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">10.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em>(-1)</em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">11.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em>(-1)</em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">12.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em></em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">13.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-2)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">14.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em></em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">15.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em></em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">16.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em class="red">(+3)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">17.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em class="red">(+2)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">18.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em></em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">19.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em></em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">20.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em></em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">21.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em></em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">22.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-1)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">23.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-6)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">24.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-4)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">25.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-1)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">26.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+2)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">27.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em class="red">(+1)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">28.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em class="red">(+1)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">29.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em class="red">(+1)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">30.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+3)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">01.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em class="red">(+1)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">02.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-1)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">03.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-2)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">04.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em></em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">05.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+2)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">06.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>7</b>
											<em class="red">(+6)</em>
											<span style="padding-top:12.8%;"></span>
										</span>
									</span> 
									<span class="d">07.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>7</b>
											<em class="red">(+4)</em>
											<span style="padding-top:12.8%;"></span>
										</span>
									</span> 
									<span class="d">08.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>13</b>
											<em class="red">(+12)</em>
											<span style="padding-top:23.8%;"></span>
										</span>
									</span> 
									<span class="d">09.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>11</b>
											<em class="red">(+11)</em>
											<span style="padding-top:20.1%;"></span>
										</span>
									</span> 
									<span class="d">10.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>8</b>
											<em class="red">(+7)</em>
											<span style="padding-top:14.6%;"></span>
										</span>
									</span> 
									<span class="d">11.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-1)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">12.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-2)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">13.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-7)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">14.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-3)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">15.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-12)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">16.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em>(-5)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">17.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-4)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">18.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+3)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">19.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-1)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">20.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em class="red">(+1)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">21.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em></em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">22.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em class="red">(+5)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">23.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em>(-4)</em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">24.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-3)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">25.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>13</b>
											<em class="red">(+10)</em>
											<span style="padding-top:23.8%;"></span>
										</span>
									</span> 
									<span class="d">26.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em></em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">27.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em></em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">28.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em></em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">29.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-2)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">30.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+1)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">31.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>7</b>
											<em class="red">(+6)</em>
											<span style="padding-top:12.8%;"></span>
										</span>
									</span> 
									<span class="d">01.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>5</b>
											<em>(-8)</em>
											<span style="padding-top:9.1%;"></span>
										</span>
									</span> 
									<span class="d">02.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+3)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">03.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+2)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">04.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>8</b>
											<em class="red">(+4)</em>
											<span style="padding-top:14.6%;"></span>
										</span>
									</span> 
									<span class="d">05.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>18</b>
											<em class="red">(+14)</em>
											<span style="padding-top:32.9%;"></span>
										</span>
									</span> 
									<span class="d">06.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em class="red">(+3)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">07.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>7</b>
											<em></em>
											<span style="padding-top:12.8%;"></span>
										</span>
									</span> 
									<span class="d">08.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em>(-3)</em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">09.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-3)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">10.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em></em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">11.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>10</b>
											<em class="red">(+2)</em>
											<span style="padding-top:18.3%;"></span>
										</span>
									</span> 
									<span class="d">12.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-14)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">13.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-5)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">14.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>7</b>
											<em></em>
											<span style="padding-top:12.8%;"></span>
										</span>
									</span> 
									<span class="d">15.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>7</b>
											<em class="red">(+5)</em>
											<span style="padding-top:12.8%;"></span>
										</span>
									</span> 
									<span class="d">16.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em class="red">(+1)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">17.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-3)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">18.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em>(-7)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">19.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-3)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">20.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+2)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">21.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em>(-4)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">22.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-3)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">23.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>0</b>
											<em>(-1)</em>
											<span style="padding-top:0%;"></span>
										</span>
									</span> 
									<span class="d">24.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>5</b>
											<em class="red">(+5)</em>
											<span style="padding-top:9.1%;"></span>
										</span>
									</span> 
									<span class="d">25.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>18</b>
											<em class="red">(+15)</em>
											<span style="padding-top:32.9%;"></span>
										</span>
									</span> 
									<span class="d">26.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em class="red">(+5)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">27.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em class="red">(+6)</em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">28.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em class="red">(+3)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">29.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>12</b>
											<em class="red">(+8)</em>
											<span style="padding-top:22%;"></span>
										</span>
									</span> 
									<span class="d">30.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+3)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">31.08</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>8</b>
											<em class="red">(+3)</em>
											<span style="padding-top:14.6%;"></span>
										</span>
									</span> 
									<span class="d">01.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>2</b>
											<em>(-16)</em>
											<span style="padding-top:3.7%;"></span>
										</span>
									</span> 
									<span class="d">02.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-2)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">03.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>6</b>
											<em>(-3)</em>
											<span style="padding-top:11%;"></span>
										</span>
									</span> 
									<span class="d">04.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>9</b>
											<em class="red">(+3)</em>
											<span style="padding-top:16.5%;"></span>
										</span>
									</span> 
									<span class="d">05.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em>(-9)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">06.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-2)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">07.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em>(-5)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">08.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>11</b>
											<em class="red">(+9)</em>
											<span style="padding-top:20.1%;"></span>
										</span>
									</span> 
									<span class="d">09.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>5</b>
											<em class="red">(+1)</em>
											<span style="padding-top:9.1%;"></span>
										</span>
									</span> 
									<span class="d">10.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>11</b>
											<em class="red">(+5)</em>
											<span style="padding-top:20.1%;"></span>
										</span>
									</span> 
									<span class="d">11.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>5</b>
											<em>(-4)</em>
											<span style="padding-top:9.1%;"></span>
										</span>
									</span> 
									<span class="d">12.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>10</b>
											<em class="red">(+7)</em>
											<span style="padding-top:18.3%;"></span>
										</span>
									</span> 
									<span class="d">13.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>3</b>
											<em class="red">(+2)</em>
											<span style="padding-top:5.5%;"></span>
										</span>
									</span> 
									<span class="d">14.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>5</b>
											<em class="red">(+2)</em>
											<span style="padding-top:9.1%;"></span>
										</span>
									</span> 
									<span class="d">15.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-7)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">16.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>8</b>
											<em class="red">(+3)</em>
											<span style="padding-top:14.6%;"></span>
										</span>
									</span> 
									<span class="d">17.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>4</b>
											<em>(-7)</em>
											<span style="padding-top:7.3%;"></span>
										</span>
									</span> 
									<span class="d">18.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>17</b>
											<em class="red">(+12)</em>
											<span style="padding-top:31.1%;"></span>
										</span>
									</span> 
									<span class="d">19.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>10</b>
											<em></em>
											<span style="padding-top:18.3%;"></span>
										</span>
									</span> 
									<span class="d">20.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1</b>
											<em>(-2)</em>
											<span style="padding-top:1.8%;"></span>
										</span>
									</span> 
									<span class="d">21.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>34</b>
											<em class="red">(+29)</em>
											<span style="padding-top:62.2%;"></span>
										</span>
									</span> 
									<span class="d">22.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>12</b>
											<em class="red">(+8)</em>
											<span style="padding-top:22%;"></span>
										</span>
									</span> 
									<span class="d">23.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>22</b>
											<em class="red">(+14)</em>
											<span style="padding-top:40.2%;"></span>
										</span>
									</span> 
									<span class="d">24.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>31</b>
											<em class="red">(+27)</em>
											<span style="padding-top:56.7%;"></span>
										</span>
									</span> 
									<span class="d">25.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>29</b>
											<em class="red">(+12)</em>
											<span style="padding-top:53%;"></span>
										</span>
									</span> 
									<span class="d">26.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>22</b>
											<em class="red">(+12)</em>
											<span style="padding-top:40.2%;"></span>
										</span>
									</span> 
									<span class="d">27.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>21</b>
											<em class="red">(+20)</em>
											<span style="padding-top:38.4%;"></span>
										</span>
									</span> 
									<span class="d">28.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>32</b>
											<em>(-2)</em>
											<span style="padding-top:58.5%;"></span>
										</span>
									</span> 
									<span class="d">29.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>95</b>
											<em class="red">(+83)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.09</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>44</b>
											<em class="red">(+22)</em>
											<span style="padding-top:80.5%;"></span>
										</span>
									</span> 
									<span class="d">01.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>77</b>
											<em class="red">(+46)</em>
											<span style="padding-top:140.9%;"></span>
										</span>
									</span> 
									<span class="d">02.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>74</b>
											<em class="red">(+45)</em>
											<span style="padding-top:135.4%;"></span>
										</span>
									</span> 
									<span class="d">03.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>67</b>
											<em class="red">(+45)</em>
											<span style="padding-top:122.6%;"></span>
										</span>
									</span> 
									<span class="d">04.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>40</b>
											<em class="red">(+19)</em>
											<span style="padding-top:73.2%;"></span>
										</span>
									</span> 
									<span class="d">05.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>68</b>
											<em class="red">(+36)</em>
											<span style="padding-top:124.4%;"></span>
										</span>
									</span> 
									<span class="d">06.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>67</b>
											<em>(-28)</em>
											<span style="padding-top:122.6%;"></span>
										</span>
									</span> 
									<span class="d">07.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>109</b>
											<em class="red">(+65)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">08.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>137</b>
											<em class="red">(+60)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">09.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>89</b>
											<em class="red">(+15)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">10.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>74</b>
											<em class="red">(+7)</em>
											<span style="padding-top:135.4%;"></span>
										</span>
									</span> 
									<span class="d">11.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>95</b>
											<em class="red">(+55)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">12.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>75</b>
											<em class="red">(+7)</em>
											<span style="padding-top:137.2%;"></span>
										</span>
									</span> 
									<span class="d">13.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>102</b>
											<em class="red">(+35)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">14.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>114</b>
											<em class="red">(+5)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">15.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>148</b>
											<em class="red">(+11)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">16.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>188</b>
											<em class="red">(+99)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">17.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>58</b>
											<em>(-16)</em>
											<span style="padding-top:106.1%;"></span>
										</span>
									</span> 
									<span class="d">18.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>44</b>
											<em>(-51)</em>
											<span style="padding-top:80.5%;"></span>
										</span>
									</span> 
									<span class="d">19.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>115</b>
											<em class="red">(+40)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">20.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>188</b>
											<em class="red">(+86)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">21.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>161</b>
											<em class="red">(+47)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">22.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>250</b>
											<em class="red">(+102)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">23.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>259</b>
											<em class="red">(+71)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">24.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>211</b>
											<em class="red">(+153)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">25.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>79</b>
											<em class="red">(+35)</em>
											<span style="padding-top:144.5%;"></span>
										</span>
									</span> 
									<span class="d">26.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>136</b>
											<em class="red">(+21)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">27.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>251</b>
											<em class="red">(+63)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">28.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>251</b>
											<em class="red">(+90)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">29.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>284</b>
											<em class="red">(+34)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>215</b>
											<em>(-44)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">31.10</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>242</b>
											<em class="red">(+31)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">01.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>132</b>
											<em class="red">(+53)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">02.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>171</b>
											<em class="red">(+35)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">03.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>313</b>
											<em class="red">(+62)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">04.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>367</b>
											<em class="red">(+116)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">05.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>357</b>
											<em class="red">(+73)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">06.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>404</b>
											<em class="red">(+189)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">07.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>215</b>
											<em>(-27)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">08.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>92</b>
											<em>(-40)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">09.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>208</b>
											<em class="red">(+37)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">10.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>453</b>
											<em class="red">(+140)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">11.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>533</b>
											<em class="red">(+166)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">12.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>455</b>
											<em class="red">(+98)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">13.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>395</b>
											<em>(-9)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">14.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>316</b>
											<em class="red">(+101)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">15.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>89</b>
											<em>(-3)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">16.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>278</b>
											<em class="red">(+70)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">17.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>442</b>
											<em>(-11)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">18.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>366</b>
											<em>(-167)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">19.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>380</b>
											<em>(-75)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">20.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>642</b>
											<em class="red">(+247)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">21.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>376</b>
											<em class="red">(+60)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">22.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>116</b>
											<em class="red">(+27)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">23.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>457</b>
											<em class="red">(+179)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">24.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>580</b>
											<em class="red">(+138)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">25.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>898</b>
											<em class="red">(+532)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">26.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>637</b>
											<em class="red">(+257)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">27.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>753</b>
											<em class="red">(+111)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">28.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>414</b>
											<em class="red">(+38)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">29.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>100</b>
											<em>(-16)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.11</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>612</b>
											<em class="red">(+155)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">01.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>690</b>
											<em class="red">(+110)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">02.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>930</b>
											<em class="red">(+32)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">03.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>686</b>
											<em class="red">(+49)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">04.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>794</b>
											<em class="red">(+41)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">05.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>526</b>
											<em class="red">(+112)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">06.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>207</b>
											<em class="red">(+107)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">07.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>584</b>
											<em>(-28)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">08.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>712</b>
											<em class="red">(+22)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">09.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>890</b>
											<em>(-40)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">10.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>680</b>
											<em>(-6)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">11.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>660</b>
											<em>(-134)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">12.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>629</b>
											<em class="red">(+103)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">13.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>210</b>
											<em class="red">(+3)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">14.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>587</b>
											<em class="red">(+3)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">15.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1023</b>
											<em class="red">(+311)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">16.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1040</b>
											<em class="red">(+150)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">17.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>892</b>
											<em class="red">(+212)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">18.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>870</b>
											<em class="red">(+210)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">19.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>643</b>
											<em class="red">(+14)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">20.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>395</b>
											<em class="red">(+185)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">21.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1004</b>
											<em class="red">(+417)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">22.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1145</b>
											<em class="red">(+122)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">23.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1270</b>
											<em class="red">(+230)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">24.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>666</b>
											<em>(-226)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">25.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>399</b>
											<em>(-471)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">26.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>511</b>
											<em>(-132)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">27.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>508</b>
											<em class="red">(+113)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">28.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>838</b>
											<em>(-166)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">29.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1367</b>
											<em class="red">(+222)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1861</b>
											<em class="red">(+591)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">31.12</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>711</b>
											<em class="red">(+45)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">01.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>314</b>
											<em>(-85)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">02.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>568</b>
											<em class="red">(+57)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">03.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>621</b>
											<em class="red">(+113)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">04.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>824</b>
											<em>(-14)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">05.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1229</b>
											<em>(-138)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">06.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1374</b>
											<em>(-487)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">07.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1237</b>
											<em class="red">(+526)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">08.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1170</b>
											<em class="red">(+856)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">09.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>616</b>
											<em class="red">(+48)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">10.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>331</b>
											<em>(-290)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">11.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>878</b>
											<em class="red">(+54)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">12.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1255</b>
											<em class="red">(+26)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">13.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>950</b>
											<em>(-424)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">14.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1084</b>
											<em>(-153)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">15.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1031</b>
											<em>(-139)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">16.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>567</b>
											<em>(-49)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">17.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>244</b>
											<em>(-87)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">18.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>812</b>
											<em>(-66)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">19.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1088</b>
											<em>(-167)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">20.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>902</b>
											<em>(-48)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">21.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>876</b>
											<em>(-208)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">22.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>910</b>
											<em>(-121)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">23.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>512</b>
											<em>(-55)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">24.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>223</b>
											<em>(-21)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">25.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>693</b>
											<em>(-119)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">26.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1103</b>
											<em class="red">(+15)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">27.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>965</b>
											<em class="red">(+63)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">28.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>931</b>
											<em class="red">(+55)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">29.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>785</b>
											<em>(-125)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>533</b>
											<em class="red">(+21)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">31.01</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>411</b>
											<em class="red">(+188)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">01.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1231</b>
											<em class="red">(+538)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">03.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>742</b>
											<em>(-361)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">04.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>876</b>
											<em>(-89)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">05.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1044</b>
											<em class="red">(+113)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">06.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>480</b>
											<em>(-305)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">07.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>288</b>
											<em>(-245)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">08.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>781</b>
											<em class="red">(+370)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">09.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>990</b>
											<em>(-241)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">10.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>842</b>
											<em class="red">(+100)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">11.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>808</b>
											<em>(-68)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">12.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>773</b>
											<em>(-271)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">13.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>424</b>
											<em>(-56)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">14.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>278</b>
											<em>(-10)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">15.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>713</b>
											<em>(-68)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">16.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>946</b>
											<em>(-44)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">17.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>708</b>
											<em>(-134)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">18.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>689</b>
											<em>(-119)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">19.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1069</b>
											<em class="red">(+296)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">20.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>410</b>
											<em>(-14)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">21.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>274</b>
											<em>(-4)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">22.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>669</b>
											<em>(-44)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">23.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>983</b>
											<em class="red">(+37)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">24.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>813</b>
											<em class="red">(+105)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">25.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>725</b>
											<em class="red">(+36)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">26.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>827</b>
											<em>(-242)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">27.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>376</b>
											<em>(-34)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">28.02</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>272</b>
											<em>(-2)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">01.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>645</b>
											<em>(-24)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">02.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>919</b>
											<em>(-64)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">03.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>646</b>
											<em>(-167)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">04.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>746</b>
											<em class="red">(+21)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">05.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>595</b>
											<em>(-232)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">06.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>322</b>
											<em>(-54)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">07.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>194</b>
											<em>(-78)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">08.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>472</b>
											<em>(-173)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">09.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>639</b>
											<em>(-280)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">10.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>638</b>
											<em>(-8)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">11.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>632</b>
											<em>(-114)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">12.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>578</b>
											<em>(-17)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">13.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>297</b>
											<em>(-25)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">14.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>178</b>
											<em>(-16)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">15.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>643</b>
											<em class="red">(+171)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">16.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>818</b>
											<em class="red">(+179)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">17.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>482</b>
											<em>(-156)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">18.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>622</b>
											<em>(-10)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">19.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>625</b>
											<em class="red">(+47)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">20.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>260</b>
											<em>(-37)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">21.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>177</b>
											<em>(-1)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">22.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>508</b>
											<em>(-135)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">23.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>776</b>
											<em>(-42)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">24.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>606</b>
											<em class="red">(+124)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">25.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>638</b>
											<em class="red">(+16)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">26.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>602</b>
											<em>(-23)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">27.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>324</b>
											<em class="red">(+64)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">28.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>167</b>
											<em>(-10)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">29.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>526</b>
											<em class="red">(+18)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>630</b>
											<em>(-146)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">31.03</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>638</b>
											<em class="red">(+32)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">01.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>587</b>
											<em>(-51)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">02.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>279</b>
											<em>(-323)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">03.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>238</b>
											<em>(-86)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">04.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>119</b>
											<em>(-48)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">05.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>309</b>
											<em>(-217)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">06.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>643</b>
											<em class="red">(+13)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">07.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>740</b>
											<em class="red">(+102)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">08.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>658</b>
											<em class="red">(+71)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">09.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>666</b>
											<em class="red">(+387)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">10.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>368</b>
											<em class="red">(+130)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">11.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>210</b>
											<em class="red">(+91)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">12.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>537</b>
											<em class="red">(+228)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">13.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>733</b>
											<em class="red">(+90)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">14.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>643</b>
											<em>(-97)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">15.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>612</b>
											<em>(-46)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">16.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>654</b>
											<em>(-12)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">17.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>337</b>
											<em>(-31)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">18.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>202</b>
											<em>(-8)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">19.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>688</b>
											<em class="red">(+151)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">20.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>759</b>
											<em class="red">(+26)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">21.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>578</b>
											<em>(-65)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">22.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>683</b>
											<em class="red">(+71)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">23.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>711</b>
											<em class="red">(+57)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">24.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>361</b>
											<em class="red">(+24)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">25.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>220</b>
											<em class="red">(+18)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">26.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>596</b>
											<em>(-92)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">27.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>967</b>
											<em class="red">(+208)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">28.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>696</b>
											<em class="red">(+118)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">29.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>763</b>
											<em class="red">(+80)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.04</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>812</b>
											<em class="red">(+101)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">01.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>380</b>
											<em class="red">(+19)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">02.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>203</b>
											<em>(-17)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">03.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>425</b>
											<em>(-171)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">04.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>358</b>
											<em>(-609)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">05.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>773</b>
											<em class="red">(+77)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">06.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>1036</b>
											<em class="red">(+273)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">07.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>786</b>
											<em>(-26)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">08.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>632</b>
											<em class="red">(+252)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">09.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>338</b>
											<em class="red">(+135)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">10.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>659</b>
											<em class="red">(+234)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">11.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>729</b>
											<em class="red">(+371)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">12.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>698</b>
											<em>(-75)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">13.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>666</b>
											<em>(-370)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">14.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>544</b>
											<em>(-242)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">15.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>381</b>
											<em>(-251)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">16.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>147</b>
											<em>(-191)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">17.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>563</b>
											<em>(-96)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">18.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>609</b>
											<em>(-120)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">19.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>497</b>
											<em>(-201)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">20.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>477</b>
											<em>(-189)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">21.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>441</b>
											<em>(-103)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">22.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>233</b>
											<em>(-148)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">23.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>134</b>
											<em>(-13)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">24.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>435</b>
											<em>(-128)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">25.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>396</b>
											<em>(-213)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">26.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>348</b>
											<em>(-149)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">27.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>354</b>
											<em>(-123)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">28.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>306</b>
											<em>(-135)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">29.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>180</b>
											<em>(-53)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>101</b>
											<em>(-33)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">31.05</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>319</b>
											<em>(-116)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">01.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>348</b>
											<em>(-48)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">02.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>296</b>
											<em>(-52)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">03.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>259</b>
											<em>(-95)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">04.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>256</b>
											<em>(-50)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">05.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>135</b>
											<em>(-45)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">06.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>76</b>
											<em>(-25)</em>
											<span style="padding-top:139%;"></span>
										</span>
									</span> 
									<span class="d">07.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>256</b>
											<em>(-63)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">08.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>244</b>
											<em>(-104)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">09.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>195</b>
											<em>(-101)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">10.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>178</b>
											<em>(-81)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">11.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>178</b>
											<em>(-78)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">12.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>90</b>
											<em>(-45)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">13.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>74</b>
											<em>(-2)</em>
											<span style="padding-top:135.4%;"></span>
										</span>
									</span> 
									<span class="d">14.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>143</b>
											<em>(-113)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">15.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>156</b>
											<em>(-88)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">16.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>141</b>
											<em>(-54)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">17.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>84</b>
											<em>(-94)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">19.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>74</b>
											<em>(-104)</em>
											<span style="padding-top:135.4%;"></span>
										</span>
									</span> 
									<span class="d">20.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>40</b>
											<em>(-50)</em>
											<span style="padding-top:73.2%;"></span>
										</span>
									</span> 
									<span class="d">21.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>125</b>
											<em class="red">(+51)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">22.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>102</b>
											<em>(-41)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">23.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>33</b>
											<em>(-123)</em>
											<span style="padding-top:60.4%;"></span>
										</span>
									</span> 
									<span class="d">24.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>20</b>
											<em>(-121)</em>
											<span style="padding-top:36.6%;"></span>
										</span>
									</span> 
									<span class="d">25.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>39</b>
											<em>(-45)</em>
											<span style="padding-top:71.3%;"></span>
										</span>
									</span> 
									<span class="d">26.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>41</b>
											<em>(-33)</em>
											<span style="padding-top:75%;"></span>
										</span>
									</span> 
									<span class="d">27.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>30</b>
											<em>(-10)</em>
											<span style="padding-top:54.9%;"></span>
										</span>
									</span> 
									<span class="d">28.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>89</b>
											<em>(-36)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">29.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>100</b>
											<em>(-2)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.06</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>71</b>
											<em class="red">(+38)</em>
											<span style="padding-top:129.9%;"></span>
										</span>
									</span> 
									<span class="d">01.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>40</b>
											<em class="red">(+20)</em>
											<span style="padding-top:73.2%;"></span>
										</span>
									</span> 
									<span class="d">02.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>60</b>
											<em class="red">(+21)</em>
											<span style="padding-top:109.8%;"></span>
										</span>
									</span> 
									<span class="d">03.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>31</b>
											<em>(-10)</em>
											<span style="padding-top:56.7%;"></span>
										</span>
									</span> 
									<span class="d">04.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>22</b>
											<em>(-8)</em>
											<span style="padding-top:40.2%;"></span>
										</span>
									</span> 
									<span class="d">05.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>46</b>
											<em>(-43)</em>
											<span style="padding-top:84.1%;"></span>
										</span>
									</span> 
									<span class="d">06.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>48</b>
											<em>(-52)</em>
											<span style="padding-top:87.8%;"></span>
										</span>
									</span> 
									<span class="d">07.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>50</b>
											<em>(-21)</em>
											<span style="padding-top:91.5%;"></span>
										</span>
									</span> 
									<span class="d">08.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>34</b>
											<em>(-6)</em>
											<span style="padding-top:62.2%;"></span>
										</span>
									</span> 
									<span class="d">09.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>32</b>
											<em>(-28)</em>
											<span style="padding-top:58.5%;"></span>
										</span>
									</span> 
									<span class="d">10.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>36</b>
											<em class="red">(+5)</em>
											<span style="padding-top:65.9%;"></span>
										</span>
									</span> 
									<span class="d">11.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>18</b>
											<em>(-4)</em>
											<span style="padding-top:32.9%;"></span>
										</span>
									</span> 
									<span class="d">12.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>53</b>
											<em class="red">(+7)</em>
											<span style="padding-top:97%;"></span>
										</span>
									</span> 
									<span class="d">13.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>34</b>
											<em>(-14)</em>
											<span style="padding-top:62.2%;"></span>
										</span>
									</span> 
									<span class="d">14.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>37</b>
											<em>(-13)</em>
											<span style="padding-top:67.7%;"></span>
										</span>
									</span> 
									<span class="d">15.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>46</b>
											<em class="red">(+12)</em>
											<span style="padding-top:84.1%;"></span>
										</span>
									</span> 
									<span class="d">16.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>39</b>
											<em class="red">(+7)</em>
											<span style="padding-top:71.3%;"></span>
										</span>
									</span> 
									<span class="d">17.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>33</b>
											<em>(-3)</em>
											<span style="padding-top:60.4%;"></span>
										</span>
									</span> 
									<span class="d">18.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>25</b>
											<em class="red">(+7)</em>
											<span style="padding-top:45.7%;"></span>
										</span>
									</span> 
									<span class="d">19.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>54</b>
											<em class="red">(+1)</em>
											<span style="padding-top:98.8%;"></span>
										</span>
									</span> 
									<span class="d">20.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>62</b>
											<em class="red">(+28)</em>
											<span style="padding-top:113.4%;"></span>
										</span>
									</span> 
									<span class="d">21.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>44</b>
											<em class="red">(+7)</em>
											<span style="padding-top:80.5%;"></span>
										</span>
									</span> 
									<span class="d">22.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>38</b>
											<em>(-8)</em>
											<span style="padding-top:69.5%;"></span>
										</span>
									</span> 
									<span class="d">23.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>43</b>
											<em class="red">(+4)</em>
											<span style="padding-top:78.7%;"></span>
										</span>
									</span> 
									<span class="d">24.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>56</b>
											<em class="red">(+23)</em>
											<span style="padding-top:102.4%;"></span>
										</span>
									</span> 
									<span class="d">25.07</span>
								</li>
															<li class="item hid">
									<span class="bar">
										<span class="bar-h">
											<b>23</b>
											<em>(-2)</em>
											<span style="padding-top:42.1%;"></span>
										</span>
									</span> 
									<span class="d">26.07</span>
								</li>
															<li class="item act">
									<span class="bar">
										<span class="bar-h">
											<b>68</b>
											<em class="red">(+14)</em>
											<span style="padding-top:124.4%;"></span>
										</span>
									</span> 
									<span class="d">27.07</span>
								</li>
															<li class="item act">
									<span class="bar">
										<span class="bar-h">
											<b>78</b>
											<em class="red">(+16)</em>
											<span style="padding-top:142.7%;"></span>
										</span>
									</span> 
									<span class="d">28.07</span>
								</li>
															<li class="item act">
									<span class="bar">
										<span class="bar-h">
											<b>67</b>
											<em class="red">(+23)</em>
											<span style="padding-top:122.6%;"></span>
										</span>
									</span> 
									<span class="d">29.07</span>
								</li>
															<li class="item act">
									<span class="bar">
										<span class="bar-h">
											<b>82</b>
											<em class="red">(+44)</em>
											<span style="padding-top:150%;"></span>
										</span>
									</span> 
									<span class="d">30.07</span>
								</li>
															<li class="item act">
									<span class="bar">
										<span class="bar-h">
											<b>64</b>
											<em class="red">(+21)</em>
											<span style="padding-top:117.1%;"></span>
										</span>
									</span> 
									<span class="d">31.07</span>
								</li>
															<li class="item act">
									<span class="bar">
										<span class="bar-h">
											<b>36</b>
											<em>(-20)</em>
											<span style="padding-top:65.9%;"></span>
										</span>
									</span> 
									<span class="d">01.08</span>
								</li>
															<li class="item act">
									<span class="bar">
										<span class="bar-h">
											<b>26</b>
											<em class="red">(+3)</em>
											<span style="padding-top:47.6%;"></span>
										</span>
									</span> 
									<span class="d">02.08</span>
								</li>
							<li class="clear">&nbsp;</li></ul>
							<a href="#" class="btn btn-prev"><span><span class="material-icons">chevron_left</span></span></a>
							<a href="#" class="btn btn-next hid"><span><span class="material-icons">chevron_right</span></span></a>
						</div>
						
						<div class="txt-line">
							<div class="info-line">IekavÄs norÄdÄ«tas izmaiÅas pret nedÄÄ¼u iepriekÅ¡.</div>
							IzmeklÄtas personas LatvijÄ: <b>3145512</b>
						</div>
						<div class="stats-st1 stats-cases-world equal-cols bigtopm">
							<span class="label">AktÄ«vie gadÄ«jumi LatvijÄ:</span>
							<span class="txt">
								<b>729</b>							</span>
							<div class="clear">&nbsp;</div>
						</div>
						<div class="stats-st1 stats-cases-world equal-cols">
							<span class="label">GadÄ«jumu skaits pasaulÄ:</span>
							<span class="txt">
								<b>199 051 292</b>							</span>
							<div class="clear">&nbsp;</div>
						</div>
																		<div class="stats-st1 stats-cases-world equal-cols">
														<span class="label">NÄves gadÄ«jumi pasaulÄ:</span>
							<span class="txt">
								<b>4 241 236</b>							</span>
							<div class="clear">&nbsp;</div>
						</div>
						<div class="stats-st1 stats-cases-world equal-cols">
														<span class="label">IzveseÄ¼ojuÅ¡ies pasaulÄ:</span>
							<span class="txt">
								<b>179 653 493</b>
							</span>
							<div class="clear">&nbsp;</div>
						</div>
											</div>
				</div>
			</div>
			<div class="col col-right col-big">
				<div class="with-sm-side-padding">
					<div class=''>		<div class='art-items art-items-in-cols-3'>		<div class="art-item col-1">
			<a href="/latvija/353973-vairums-vakar-atklato-covid-19-gadijumu-registreti-riga-un-marupes-novada.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528336_2de4ab5620.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/latvija/353973-vairums-vakar-atklato-covid-19-gadijumu-registreti-riga-un-marupes-novada.htm" class="t">Vairums vakar atklÄto Covid-19 gadÄ«jumu reÄ£istrÄti RÄ«gÄ un MÄrupes novadÄ</a></div>
		</div>
			<div class="art-item col-2">
			<a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528341_c4b1494028.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm" class="t">&quot;Pfizer&quot; un &quot;Moderna&quot; paaugstinÄjuÅ¡as ES cenas par savÄm Covid-19 vakcÄ«nÄm</a><a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm#comments" class="link-comm">9</a></div>
		</div>
			<div class="art-item col-3">
			<a href="/latvija/353977-saja-nedelas-nogale-izbraukuma-vakcinacijas-sapoteti-158-cilveki.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528340_f0ac6a0735.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/latvija/353977-saja-nedelas-nogale-izbraukuma-vakcinacijas-sapoteti-158-cilveki.htm" class="t">Å ajÄ nedÄÄ¼as nogalÄ izbraukuma vakcinÄcijÄs sapotÄti 158 cilvÄki</a></div>
		</div>
			<div class="art-item col-1">
			<a href="/latvija/353959-nedelas-laika-latvija-par-tresdalu-audzis-jaunatklato-covid-19-gadijumu-skaits.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528321_fa395bafde.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/latvija/353959-nedelas-laika-latvija-par-tresdalu-audzis-jaunatklato-covid-19-gadijumu-skaits.htm" class="t">NedÄÄ¼as laikÄ LatvijÄ par treÅ¡daÄ¼u audzis jaunatklÄto Covid-19 gadÄ«jumu skaits</a><a href="/latvija/353959-nedelas-laika-latvija-par-tresdalu-audzis-jaunatklato-covid-19-gadijumu-skaits.htm#comments" class="link-comm">10</a></div>
		</div>
			<div class="art-item col-2 show-on-pc-only">
			<a href="/latvija/353957-pvo-koronavirusa-gadijumu-skaits-eiropa-parsniedzis-60-miljonus.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528319_104eb17c90.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/latvija/353957-pvo-koronavirusa-gadijumu-skaits-eiropa-parsniedzis-60-miljonus.htm" class="t">PVO: KoronavÄ«rusa gadÄ«jumu skaits EiropÄ pÄrsniedzis 60 miljonus</a><a href="/latvija/353957-pvo-koronavirusa-gadijumu-skaits-eiropa-parsniedzis-60-miljonus.htm#comments" class="link-comm">19</a></div>
		</div>
			<div class="art-item col-3 show-on-pc-only">
			<a href="/latvija/353930-palielinajies-slimnicas-esoso-covid-19-pacientu-skaits.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528263_d5a7013cdd.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/latvija/353930-palielinajies-slimnicas-esoso-covid-19-pacientu-skaits.htm" class="t">PalielinÄjies slimnÄ«cÄs esoÅ¡o Covid-19 pacientu skaits</a><a href="/latvija/353930-palielinajies-slimnicas-esoso-covid-19-pacientu-skaits.htm#comments" class="link-comm">1</a></div>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>				</div>
			</div>
			<div class="clear">&nbsp;</div>
		</div>
		
	</div>
</div>	
	<div class="layout-two-cols">
		<div class="col col-left col-big">
						<div class="with-sm-side-padding">
				<div class=''>	<div class="with-sm-side-padding"><h2 class="bl-title "><a href="/horoskopi/" class="t">AstroloÄ£ija</a><a href="/horoskopi/" class="btn-more">VairÄk &gt;</a></h2></div>	<div class='art-items art-items-in-cols-3'>		<div class="art-item col-1">
			<a href="https://tautaruna.nra.lv/dzivesstils/353910-kuram-zodiaka-zimem-2-augusts-bus-ipasi-veiksmigs/" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528232_9074e3b65a.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://tautaruna.nra.lv/dzivesstils/353910-kuram-zodiaka-zimem-2-augusts-bus-ipasi-veiksmigs/" class="t">KurÄm zodiaka zÄ«mÄm 2. augusts bÅ«s Ä«paÅ¡i veiksmÄ«gs?</a><a href="https://tautaruna.nra.lv/dzivesstils/353910-kuram-zodiaka-zimem-2-augusts-bus-ipasi-veiksmigs/#comments" class="link-comm">1</a></div>
		</div>
			<div class="art-item col-2">
			<a href="https://tautaruna.nra.lv/dzivesstils/353320-3-horoskopa-zimes-kuras-sobrid-ir-gatavas-laulibam/" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527275_cef7703e78.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://tautaruna.nra.lv/dzivesstils/353320-3-horoskopa-zimes-kuras-sobrid-ir-gatavas-laulibam/" class="t">3 horoskopa zÄ«mes, kuras Å¡obrÄ«d ir gatavas laulÄ«bÄm</a><a href="https://tautaruna.nra.lv/dzivesstils/353320-3-horoskopa-zimes-kuras-sobrid-ir-gatavas-laulibam/#comments" class="link-comm">2</a></div>
		</div>
			<div class="art-item col-3">
			<a href="https://tautaruna.nra.lv/dzivesstils/353328-3-horoskopa-zimes-kuras-saja-laika-velesies-mainit-pasauli/" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527291_53229a00ec.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://tautaruna.nra.lv/dzivesstils/353328-3-horoskopa-zimes-kuras-saja-laika-velesies-mainit-pasauli/" class="t">3 horoskopa zÄ«mes, kuras Å¡ajÄ laikÄ vÄlÄsies mainÄ«t pasauli</a><a href="https://tautaruna.nra.lv/dzivesstils/353328-3-horoskopa-zimes-kuras-saja-laika-velesies-mainit-pasauli/#comments" class="link-comm">2</a></div>
		</div>
			<div class="art-item col-1">
			<a href="https://tautaruna.nra.lv/dzivesstils/353415-uzzini-kada-ir-tavas-zodiaka-zimes-visizplatitaka-veselibas-problema/" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527409_8e3c410805.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://tautaruna.nra.lv/dzivesstils/353415-uzzini-kada-ir-tavas-zodiaka-zimes-visizplatitaka-veselibas-problema/" class="t">Uzzini, kÄda ir tavas zodiaka zÄ«mes visizplatÄ«tÄkÄ veselÄ«bas problÄma</a><a href="https://tautaruna.nra.lv/dzivesstils/353415-uzzini-kada-ir-tavas-zodiaka-zimes-visizplatitaka-veselibas-problema/#comments" class="link-comm">6</a></div>
		</div>
			<div class="art-item col-2 show-on-pc-only">
			<a href="https://tautaruna.nra.lv/dzivesstils/353571-latvijas-astrologs-atklaj-kad-sogad-ir-labakais-laiks-projektiem/" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527624_88ee16a608.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://tautaruna.nra.lv/dzivesstils/353571-latvijas-astrologs-atklaj-kad-sogad-ir-labakais-laiks-projektiem/" class="t">Latvijas astrologs atklÄj, kad Å¡ogad ir labÄkais laiks projektiem</a></div>
		</div>
			<div class="art-item col-3 show-on-pc-only">
			<a href="https://tautaruna.nra.lv/dzivesstils/353554-nosauktas-horoskopa-zimes-kuras-pievelk-naudu/" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527604_0eee5f9c53.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://tautaruna.nra.lv/dzivesstils/353554-nosauktas-horoskopa-zimes-kuras-pievelk-naudu/" class="t">Nosauktas horoskopa zÄ«mes, kuras pievelk naudu</a><a href="https://tautaruna.nra.lv/dzivesstils/353554-nosauktas-horoskopa-zimes-kuras-pievelk-naudu/#comments" class="link-comm">2</a></div>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>											</div>
					</div>
		<div class="col col-right col-sm">
			<div class="with-side-padding">
				<div class="bl-nra-viedokli lasitaju">
	<h2 class="bl-title"><a href="/viedokli/lasitaju/" class="t">ViedokÄ¼i</a></h2>
	<div class="items">				<div class="item">
			<span class="author"><a href="/viedokli/partijas-ns-taisnigums-biedrs-generala-petera-radzina-biedribas-valdes-priekssedetajs-atvalinats-virsnieks-agris-purvins/353794-par-obligato-vakcinaciju-nbs.htm">Partijas NS TaisnÄ«gums biedrs, Ä¢enerÄÄ¼a PÄtera RadziÅa biedrÄ«bas valdes priekÅ¡sÄdÄtÄjs, atvaÄ¼inÄts virsnieks Agris PurviÅÅ¡</a></span>
			<span class="title"><a href="/viedokli/partijas-ns-taisnigums-biedrs-generala-petera-radzina-biedribas-valdes-priekssedetajs-atvalinats-virsnieks-agris-purvins/353794-par-obligato-vakcinaciju-nbs.htm" class="t">Par obligÄto vakcinÄciju NBS</a><a href="/viedokli/partijas-ns-taisnigums-biedrs-generala-petera-radzina-biedribas-valdes-priekssedetajs-atvalinats-virsnieks-agris-purvins/353794-par-obligato-vakcinaciju-nbs.htm#comments" class="link-comm">17</a></span>
		</div>
					<div class="item">
			<span class="author"><a href="https://neatkariga.nra.lv/lasitaju-viedokli/janis-urbanovics/353104-robezas-plustosas-smiltis">JÄnis UrbanoviÄs</a></span>
			<span class="title"><a href="https://neatkariga.nra.lv/lasitaju-viedokli/janis-urbanovics/353104-robezas-plustosas-smiltis" class="t">RobeÅ¾as plÅ«stoÅ¡Äs smiltÄ«s</a><a href="https://neatkariga.nra.lv/lasitaju-viedokli/janis-urbanovics/353104-robezas-plustosas-smiltis#comments" class="link-comm">21</a></span>
		</div>
			<div class="clear">&nbsp;</div>		<div class="item">
			<span class="author"><a href="/viedokli/peteris-apinis/352105-pret-obligatu-piespiedu-vakcinaciju-pret-latvijas-iedzivotaju-skelsanu.htm">PÄteris Apinis</a></span>
			<span class="title"><a href="/viedokli/peteris-apinis/352105-pret-obligatu-piespiedu-vakcinaciju-pret-latvijas-iedzivotaju-skelsanu.htm" class="t">Pret obligÄtu piespiedu vakcinÄciju, pret Latvijas iedzÄ«votÄju Å¡Ä·elÅ¡anu</a><a href="/viedokli/peteris-apinis/352105-pret-obligatu-piespiedu-vakcinaciju-pret-latvijas-iedzivotaju-skelsanu.htm#comments" class="link-comm">74</a></span>
		</div>
					<div class="item show-on-pc-only">
			<span class="author"><a href="/viedokli/aivars-lembergs-politiski-represetais/350848-atklata-vestule-latvijas-valsts-prezidentam-egilam-levitam.htm">Aivars Lembergs, politiski represÄtais</a></span>
			<span class="title"><a href="/viedokli/aivars-lembergs-politiski-represetais/350848-atklata-vestule-latvijas-valsts-prezidentam-egilam-levitam.htm" class="t">AtklÄta vÄstule Latvijas Valsts prezidentam Egilam Levitam</a></span>
		</div>
			<div class="clear">&nbsp;</div>		<div class="item show-on-pc-only">
			<span class="author"><a href="/viedokli/alise-smehova/350793-vecaku-grupa-iesniedz-sudzibu-satversmes-tiesa-par-attalinatajam-macibam.htm">Alise Smehova</a></span>
			<span class="title"><a href="/viedokli/alise-smehova/350793-vecaku-grupa-iesniedz-sudzibu-satversmes-tiesa-par-attalinatajam-macibam.htm" class="t">VecÄku grupa iesniedz sÅ«dzÄ«bu Satversmes tiesÄ par attÄlinÄtajÄm mÄcÄ«bÄm</a><a href="/viedokli/alise-smehova/350793-vecaku-grupa-iesniedz-sudzibu-satversmes-tiesa-par-attalinatajam-macibam.htm#comments" class="link-comm">69</a></span>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>							</div>
		</div>
		<div class="clear">&nbsp;</div>
	</div>
		
</div>
<div class="bl-full-width-base bl-full-w-5-items-grid vz-full-bl">
	<div class="wrap wrap-with-hspaces wrap-with-bg">
				<div class="top-margin-fix"></div>
		<h2 class="bl-title with-img"><a href="/vakara-zinas/" class="t"><img src="//nra.lv/_img/vz_logo_380x81px.png" alt="Vakara ZiÅas" class="img" /></a></h2>
			</div>
	<div class="cont light" style="background-color:#ffc30d;">
		<span class="bg" style="background-image:url(https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528164_0bc9f401a5.jpg);"></span>
		<div class="wrap">
			<div class="top-margin-fix"></div>
			<div>
				<div class="row1 art-items with-side-padding">												<div class="art-item item-1">
					<div class="img-cont-wrap">
						<span class="art-img-cont">
							<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/860px/528164_0bc9f401a5.jpg" alt="" /></span>
							<span class="img-icons">
																							</span>
						</span>
						<div class="show-on-mob-only"><div class="art-title on-red mob-size-4"><span class="t">VAKARA ZIÅAS. Astroportrets. Kristaps PorziÅÄ£is. Daudz jÄstrÄdÄ ar sevi</span></div></div>
						<div class="art-img-more">
							<span class="more-cont">
								<span class="date">5:45</span>
								<a href="/vakara-zinas/353886-vakara-zinas-astroportrets-kristaps-porzingis-daudz-jastrada-ar-sevi.htm#comments" class="link-comm">2</a>							</span>
						</div>
						<a href="/vakara-zinas/353886-vakara-zinas-astroportrets-kristaps-porzingis-daudz-jastrada-ar-sevi.htm" class="art-all-clickable"></a>
					</div>
					<div class="cont show-on-pc-only">
						<div class="art-title on-red size-2"><a href="/vakara-zinas/353886-vakara-zinas-astroportrets-kristaps-porzingis-daudz-jastrada-ar-sevi.htm" class="t">VAKARA ZIÅAS. Astroportrets. Kristaps PorziÅÄ£is. Daudz jÄstrÄdÄ ar sevi</a></div>
						<div class="art-descr size-1 with-lim-h">Â«Tagad ir priekÅ¡Ä pirmÄ vasara, kad varu ielikt daudz darba un kÄrtÄ«gi strÄdÄt. Esmu priecÄ«gs, ka atrodos Å¡ajÄ situÄcijÄ. Esmu gatavs ielikt kÄrtÄ«gu darbu un atgÄdinÄt visiem, uz ko esmu spÄjÄ«gs,Â» tÄ intervijÄ medijam Â«sportacentrs.comÂ» 25 gadus vecais basketbolists Kristaps PorziÅÄ£is.</div>
					</div>
					<div class="clear">&nbsp;</div>
				</div>
																	<div class="clear">&nbsp;</div>
					</div><div class="row2 art-items art-items-in-cols-4 with-sm-side-padding">
												<div class="art-item item-2">
					<a href="/vakara-zinas/353704-vakara-zinas-makslinieci-gundegu-dudumu-iedvesmojusi-frida-kalo.htm" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527812_ab51fa86cf.jpg" alt="" /></span>
						<span class="img-icons">
																				</span>
					</a>
					<div class="art-title"><a href="/vakara-zinas/353704-vakara-zinas-makslinieci-gundegu-dudumu-iedvesmojusi-frida-kalo.htm" class="t">VAKARA ZIÅAS. MÄkslinieci Gundegu DÅ«dumu iedvesmojusi FrÄ«da Kalo</a></div>
				</div>
																				<div class="art-item item-3">
					<a href="/vakara-zinas/353705-vakara-zinas-ko-dara-boriss-rezniks.htm" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527813_0f132d2424.jpg" alt="" /></span>
						<span class="img-icons">
																				</span>
					</a>
					<div class="art-title"><a href="/vakara-zinas/353705-vakara-zinas-ko-dara-boriss-rezniks.htm" class="t">VAKARA ZIÅAS. Ko dara Boriss RezÅiks</a><a href="/vakara-zinas/353705-vakara-zinas-ko-dara-boriss-rezniks.htm#comments" class="link-comm">1</a></div>
				</div>
																				<div class="art-item item-4">
					<a href="/vakara-zinas/353630-vakara-zinas-rezija-kalnina-vairs-nav-pasvaldibas-deputate.htm" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527716_7fc2394385.jpg" alt="" /></span>
						<span class="img-icons">
																				</span>
					</a>
					<div class="art-title"><a href="/vakara-zinas/353630-vakara-zinas-rezija-kalnina-vairs-nav-pasvaldibas-deputate.htm" class="t">VAKARA ZIÅAS. RÄzija KalniÅa vairs nav paÅ¡valdÄ«bas deputÄte</a><a href="/vakara-zinas/353630-vakara-zinas-rezija-kalnina-vairs-nav-pasvaldibas-deputate.htm#comments" class="link-comm">14</a></div>
				</div>
																				<div class="art-item item-5">
					<a href="/vakara-zinas/353702-vakara-zinas-elina-garanca-lauj-ielukoties-privataja-dzive.htm" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527810_5461f6ff84.jpg" alt="" /></span>
						<span class="img-icons">
																				</span>
					</a>
					<div class="art-title"><a href="/vakara-zinas/353702-vakara-zinas-elina-garanca-lauj-ielukoties-privataja-dzive.htm" class="t">VAKARA ZIÅAS. ElÄ«na GaranÄa Ä¼auj ielÅ«koties privÄtajÄ dzÄ«vÄ</a><a href="/vakara-zinas/353702-vakara-zinas-elina-garanca-lauj-ielukoties-privataja-dzive.htm#comments" class="link-comm">6</a></div>
				</div>
								<div class="clear">&nbsp;</div></div>
			</div>
			<div class="v-space"></div>
		</div>
	</div>
</div><div class="wrap wrap-with-bg">
	<div class="top-margin-fix"></div>
	
	<div class="bl-quote with-side-padding">
	<h2 class="bl-title"><span class="t">Dienas citÄts</span></h2>
	<div class="cont">
		<div class="quote"><div class="txt">â100% piekrÄ«tu, ka sports var bÅ«t skaists,â saka veselÄ«bas PavÄ¼uts, kad skaistÄ kritienÄ tiek parÄdÄ«ta pludmales volejboliste, bet âman ir problÄma ar vizualizÄciju pie raksta; sievietes Ä·ermeÅa priekÅ¡metiskoÅ¡ana un seksualizÄcija nav veids, kÄ sporta skaistumu ilustrÄt. Varam labÄk.â Nezinu, vai PavÄ¼uts ar savu kompÄniju var labÄk â bÅ«s jÄvÄrtÄ plikumi un noslÄpumi, krÄniÅi un rokturÄ«Å¡i, un Ä·ermeÅa  priekÅ¡metiskoÅ¡ana gaidÄmajÄ RÄ«gas praidÄ, ko, cerams, atbalstÄ«s arÄ« jaukais Daniels. Un diskusija par âpareizo seksualizÄcijuâ bÅ«s daudz svarÄ«gÄka par to, ka augustÄ saÅemsim divreiz lielÄkus rÄÄ·inus par elektrÄ«bu un gÄzi. PareizajÄ laikÄ ieraudzÄ«jÄt sporta meiteÅu grÄciju, biedri PavÄ¼ut. Viss pareizi: kuru gan interesÄs kaut kÄdi rubÄ¼i, ja to vietÄ varÄs pastrÄ«dÄties ar puritÄnijas profesoru PavÄ¼utu.</div></div>
		<div class="author">- Elita Veidemane</div>
	</div>
</div>		
	<div class="bl-grid-big-4small">
	<div class="with-side-padding"><h2 class="bl-title "><a href="/latvija/riga/" class="t">RÄ«gÄ</a><a href="/latvija/riga/" class="btn-more">VairÄk &gt;</a></h2></div>	<div class="layout-two-cols with-sm-side-padding">
		<div class="col col-left col-sm art-items with-sm-side-padding">						<div class="art-item item-0">
				<a href="https://tautaruna.nra.lv/nebusanas/353923-riga-sieviete-piedzivo-pamatigu-izbili-iesprostojot-mazuli-automasina/" class="art-img-cont">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/540px/528248_c45f9f6f3c.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title size-3 mob-size-5"><a href="https://tautaruna.nra.lv/nebusanas/353923-riga-sieviete-piedzivo-pamatigu-izbili-iesprostojot-mazuli-automasina/" class="t">RÄ«gÄ sieviete piedzÄ«vo pamatÄ«gu izbÄ«li, iesprostojot mazuli automaÅ¡Ä«nÄ</a><a href="https://tautaruna.nra.lv/nebusanas/353923-riga-sieviete-piedzivo-pamatigu-izbili-iesprostojot-mazuli-automasina/#comments" class="link-comm">1</a></div>
				<div class="art-descr with-lim-h show-on-pc-only">KÄda sieviete iesÄdinÄjusi Ä£imenes automaÅ¡Ä«nÄ savu bÄrnu un jau grasÄ«jusies doties uz vadÄ«tÄja vietu, kad atklÄjies, ka braucamrÄ«ks aizslÄdzies, bet mazulis iesprostots spÄkratÄ viens pats, stÄsta TV3 raidÄ«jums âDegpunktÄâ.</div>			</div>
					</div><div class="col col-right col-big art-items art-items-in-cols-2">			<div class="art-item item-1">
				<a href="/foto/riga/14323-riga-atklats-baltic-pride-2021.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528284_91b7c54212.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/foto/riga/14323-riga-atklats-baltic-pride-2021.htm" class="t">FOTO: RÄ«gÄ atklÄts &quot;Baltic Pride 2021&quot;</a></div>
							</div>
								<div class="art-item item-2">
				<a href="/pasaule/353918-glabjoties-no-sankcijam-pardots-lukasenko-tuva-uznemeja-bizness-latvija.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528244_1b66cbffe5.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/pasaule/353918-glabjoties-no-sankcijam-pardots-lukasenko-tuva-uznemeja-bizness-latvija.htm" class="t">GlÄbjoties no sankcijÄm, pÄrdots LukaÅ¡enko tuva uzÅÄmÄja bizness LatvijÄ</a><a href="/pasaule/353918-glabjoties-no-sankcijam-pardots-lukasenko-tuva-uznemeja-bizness-latvija.htm#comments" class="link-comm">7</a></div>
							</div>
								<div class="art-item item-3">
				<a href="/latvija/riga/satiksme/353892-lidz-decembra-vidum-bus-slegta-satiksme-zemgala-gatve-un-unijas-iela.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528181_7a3af6b1c8.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/latvija/riga/satiksme/353892-lidz-decembra-vidum-bus-slegta-satiksme-zemgala-gatve-un-unijas-iela.htm" class="t">LÄ«dz decembra vidum bÅ«s slÄgta satiksme Zemgala gatvÄ un Åªnijas ielÄ</a></div>
							</div>
								<div class="art-item item-4">
				<a href="/latvija/riga/353909-ridzinieka-kartes-ipasniekiem-atcels-samazinato-tarifu-autostavvietu-lietosanai.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528231_c19700e802.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/latvija/riga/353909-ridzinieka-kartes-ipasniekiem-atcels-samazinato-tarifu-autostavvietu-lietosanai.htm" class="t">RÄ«dzinieka kartes Ä«paÅ¡niekiem atcels samazinÄto tarifu autostÄvvietu lietoÅ¡anai</a><a href="/latvija/riga/353909-ridzinieka-kartes-ipasniekiem-atcels-samazinato-tarifu-autostavvietu-lietosanai.htm#comments" class="link-comm">1</a></div>
							</div>
		</div><div class="clear">&nbsp;</div>
	</div>
</div>	
		
	<div class='bl-albums '>
	<div class="with-side-padding"><h2 class="bl-title "><a href="/foto/" class="t">JaunÄkÄs galerijas</a></h2></div>	<div class="items with-sm-side-padding"><div class="row1">				<div class="item item-1">
			<a href="/foto/izklaide/14321-mazaja-mezotnes-pili-krasni-nosvineta-petera-vaska-fonda-10-jubileja.htm" class="item-link">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/540px/528226_8c9669c866.jpg" alt="" /></span>
				<span class="title">FOTO: MazajÄ MeÅ¾otnes pilÄ« krÄÅ¡Åi nosvinÄta PÄtera Vaska fonda 10.jubileja<span class="q">17<i class="material-icons">&#xE412;</i></span></span>
			</a>
		</div>
					<div class="item item-2">
			<a href="/foto/riga/14323-riga-atklats-baltic-pride-2021.htm" class="item-link">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528284_91b7c54212.jpg" alt="" /></span>
				<span class="title">FOTO: RÄ«gÄ atklÄts &quot;Baltic Pride 2021&quot;</span>
			</a>
		</div>
					<div class="item item-3">
			<a href="/foto/sakums/14322-ka-sobrid-izskatas-garkalnes-mezs-pec-postosa-ugunsgreka.htm" class="item-link">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528269_cbcbcb43b4.jpg" alt="" /></span>
				<span class="title">FOTO: KÄ Å¡obrÄ«d izskatÄs Garkalnes meÅ¾s pÄc postoÅ¡Ä ugunsgrÄka?</span>
			</a>
		</div>
			<div class="clear">&nbsp;</div></div><div class="row2">		<div class="item item-4">
			<a href="/foto/sports/14320-jatnieks-kristaps-neretnieks-gatavojas-olimpisko-spelu-startam.htm" class="item-link">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528187_bf0c69205b.jpg" alt="" /></span>
				<span class="title">FOTO: JÄtnieks Kristaps Neretnieks gatavojas olimpisko spÄÄ¼u startam</span>
			</a>
		</div>
					<div class="item item-5">
			<a href="/foto/pasaule/14319-berline-noritejis-protests-pret-covid-19-ierobezojumiem-aiztureti-600-cilveki.htm" class="item-link">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528180_793dd0bf8a.jpg" alt="" /></span>
				<span class="title">FOTO: BerlÄ«nÄ noritÄjis protests pret Covid-19 ierobeÅ¾ojumiem; aizturÄti 600 cilvÄki</span>
			</a>
		</div>
					<div class="item item-6 show-on-pc-only">
			<a href="/foto/riga/14318-viesturdarzam-300-atklats-parka-audiogids.htm" class="item-link">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528138_d46d47f0c6.jpg" alt="" /></span>
				<span class="title">FOTO: ViesturdÄrzam 300! AtklÄts parka audiogids</span>
			</a>
		</div>
	<div class="clear">&nbsp;</div></div></div>
</div>		
	<div class="layout-two-cols">
		<div class="col col-left col-big">
			<div class="with-sm-side-padding">
				<div class=''>	<div class="with-sm-side-padding"><h2 class="bl-title "><a href="//nra.lv/temas/105-satiksmes-aktualitates.htm" class="t">Satiksme</a><a href="//nra.lv/temas/105-satiksmes-aktualitates.htm" class="btn-more">VairÄk &gt;</a></h2></div>	<div class='art-items art-items-in-cols-3'>		<div class="art-item col-1">
			<a href="/latvija/riga/satiksme/353892-lidz-decembra-vidum-bus-slegta-satiksme-zemgala-gatve-un-unijas-iela.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528181_7a3af6b1c8.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/latvija/riga/satiksme/353892-lidz-decembra-vidum-bus-slegta-satiksme-zemgala-gatve-un-unijas-iela.htm" class="t">LÄ«dz decembra vidum bÅ«s slÄgta satiksme Zemgala gatvÄ un Åªnijas ielÄ</a></div>
		</div>
			<div class="art-item col-2">
			<a href="/latvija/riga/353909-ridzinieka-kartes-ipasniekiem-atcels-samazinato-tarifu-autostavvietu-lietosanai.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528231_c19700e802.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/latvija/riga/353909-ridzinieka-kartes-ipasniekiem-atcels-samazinato-tarifu-autostavvietu-lietosanai.htm" class="t">RÄ«dzinieka kartes Ä«paÅ¡niekiem atcels samazinÄto tarifu autostÄvvietu lietoÅ¡anai</a><a href="/latvija/riga/353909-ridzinieka-kartes-ipasniekiem-atcels-samazinato-tarifu-autostavvietu-lietosanai.htm#comments" class="link-comm">1</a></div>
		</div>
			<div class="art-item col-3 show-on-pc-only">
			<a href="/latvija/riga/satiksme/353632-no-sodienas-gaidamas-izmainas-vairakos-rigas-pilsetas-autobusu-trolejbusu-reisos.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527721_a82b9faa7a.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/latvija/riga/satiksme/353632-no-sodienas-gaidamas-izmainas-vairakos-rigas-pilsetas-autobusu-trolejbusu-reisos.htm" class="t">No Å¡odienas gaidÄmas izmaiÅas vairÄkos RÄ«gas pilsÄtas autobusu, trolejbusu reisos</a></div>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>							</div>
		</div>
		<div class="col col-right col-sm">
			<div class="with-side-padding">
				<div class="bl-ad-cont with-bg top-margin-1"><div class="bl-ad ad-left-lg"><div id="NRA02_300x250_1" style="width:300px; margin:0 auto;"></div>
<script>
    window.adnet.push(['NRA02_300x250_1']);
    window.adnet.push(['_requestHeaderBidderBanners', 'NRA02_300x250_1']);
</script></div>
</div>
			</div>
		</div>	
		<div class="clear">&nbsp;</div>
	</div>
	
	<div class="layout-3eq-cols">
		<div class="col with-side-padding">
			<div class="bl-big-and-titles ">
	<h2 class="bl-title "><a href="/latvija/" class="t">LatvijÄ</a></h2>	<div class="art-items">		<div class="art-item item-big mob-img-left">
			<a href="https://zinicenu.nra.lv/cenu-zinas/353974-degvielas-tirgotaji-kool-latvija-ipasnieku-maina-neradis-butiskas-izmainas-latvijas-tirgu" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528337_b28c8096d6.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>			<div class="art-title"><a href="https://zinicenu.nra.lv/cenu-zinas/353974-degvielas-tirgotaji-kool-latvija-ipasnieku-maina-neradis-butiskas-izmainas-latvijas-tirgu" class="t">Degvielas tirgotÄji: &quot;Kool Latvija&quot; Ä«paÅ¡nieku maiÅa neradÄ«s bÅ«tiskas izmaiÅas Latvijas tirgÅ«</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm" class="t">Lietuvas robeÅ¾sardze plÄno pie robeÅ¾as ar Baltkrieviju uzbÅ«vÄt Äetrus metrus augstu stiepÄ¼u Å¾ogu</a><a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm#comments" class="link-comm">2</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="/latvija/353982-satversmes-tiesas-tiesneses-amatam-izskata-prezidenta-padomnieci-kucinu.htm" class="t">Satversmes tiesas tiesneses amatam izskata prezidenta padomnieci Kucinu</a><a href="/latvija/353982-satversmes-tiesas-tiesneses-amatam-izskata-prezidenta-padomnieci-kucinu.htm#comments" class="link-comm">3</a></div>
		</div>
	</div>
</div>					</div>
		<div class="col with-side-padding">
			<div class="bl-big-and-titles ">
	<h2 class="bl-title "><a href="/latvija/regionos/" class="t">ReÄ£ionos</a></h2>	<div class="art-items">		<div class="art-item item-big mob-img-left">
			<a href="/latvija/353963-ventspili-specigais-vejs-nolauzis-100-gadus-vecu-dizkoku.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528325_ba9a993c05.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>			<div class="art-title"><a href="/latvija/353963-ventspili-specigais-vejs-nolauzis-100-gadus-vecu-dizkoku.htm" class="t">VentspilÄ« spÄcÄ«gais vÄjÅ¡ nolauzis 100 gadus vecu diÅ¾koku</a><a href="/latvija/353963-ventspili-specigais-vejs-nolauzis-100-gadus-vecu-dizkoku.htm#comments" class="link-comm">1</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="/latvija/regionos/353905-afrikas-cuku-meris-ventspils-novada-varves-pagasta-noteikta-karantinas-zona.htm" class="t">Äfrikas cÅ«ku mÄris: Ventspils novada VÄrves pagastÄ noteikta karantÄ«nas zona</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="/latvija/politika/353889-sakas-pieteiksanas-balsosanai-pa-pastu-no-arvalstim-varaklanu-un-rezeknes-domes-velesanas.htm" class="t">SÄkas pieteikÅ¡anÄs balsoÅ¡anai pa pastu no ÄrvalstÄ«m VarakÄ¼Änu un RÄzeknes domes vÄlÄÅ¡anÄs</a><a href="/latvija/politika/353889-sakas-pieteiksanas-balsosanai-pa-pastu-no-arvalstim-varaklanu-un-rezeknes-domes-velesanas.htm#comments" class="link-comm">1</a></div>
		</div>
	</div>
</div>									<div style="border-top:1px solid #eee;text-align:right;padding-top:5px;margin-top:10px;">
				<img src="/_files/202101/20210113_nra_novados_21.jpg" alt="" style="display:inline-block;width:100%;height:auto;max-width:320px;" />
			</div>
		</div>
		<div class="col with-side-padding">
			<div class="bl-big-and-titles ">
	<h2 class="bl-title "><a href="/pasaule/" class="t">PasaulÄ</a></h2>	<div class="art-items">		<div class="art-item item-big mob-img-left">
			<a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528348_9cafe1e15b.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>			<div class="art-title"><a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm" class="t">Lietuvas robeÅ¾sardze plÄno pie robeÅ¾as ar Baltkrieviju uzbÅ«vÄt Äetrus metrus augstu stiepÄ¼u Å¾ogu</a><a href="/pasaule/353983-lietuvas-robezsardze-plano-pie-robezas-ar-baltkrieviju-uzbuvet-cetrus-metrus-augstu-stieplu-zogu.htm#comments" class="link-comm">2</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm" class="t">&quot;Pfizer&quot; un &quot;Moderna&quot; paaugstinÄjuÅ¡as ES cenas par savÄm Covid-19 vakcÄ«nÄm</a><a href="/pasaule/353978-pfizer-un-moderna-paaugstinajusas-es-cenas-par-savam-covid-19-vakcinam.htm#comments" class="link-comm">9</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="/pasaule/353964-griekija-piedzivo-smagako-karstuma-vilni-trijas-desmitgades.htm" class="t">GrieÄ·ija piedzÄ«vo smagÄko karstuma vilni trijÄs desmitgadÄs</a><a href="/pasaule/353964-griekija-piedzivo-smagako-karstuma-vilni-trijas-desmitgades.htm#comments" class="link-comm">1</a></div>
		</div>
	</div>
</div>					</div>
		<div class="clear">&nbsp;</div>
	</div>

	<div class="layout-two-cols">
		<div class="col col-left col-big">
			<div class="with-sm-side-padding">
				<div class=''>	<div class="with-sm-side-padding"><h2 class="bl-title "><a href="https://nra.lv/temas/171-tautsaimnieciba.htm" class="t">TautsaimniecÄ«ba</a><a href="https://nra.lv/temas/171-tautsaimnieciba.htm" class="btn-more">VairÄk &gt;</a></h2></div>	<div class='art-items art-items-in-cols-3'>		<div class="art-item col-1">
			<a href="https://neatkariga.nra.lv/ekonomika/353874-ikp-matematika-ka-1-4-parvertas-par-10-3" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528150_c69ddf4120.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/ekonomika/353874-ikp-matematika-ka-1-4-parvertas-par-10-3" class="t">IKP matemÄtika: kÄ +1,4% pÄrvÄrtÄs par +10,3%</a><a href="https://neatkariga.nra.lv/ekonomika/353874-ikp-matematika-ka-1-4-parvertas-par-10-3#comments" class="link-comm">4</a></div>
		</div>
			<div class="art-item col-2">
			<a href="https://neatkariga.nra.lv/ekonomika/353479-rupniecibas-latvija-nebus" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527482_531868b20a.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/ekonomika/353479-rupniecibas-latvija-nebus" class="t">RÅ«pniecÄ«bas LatvijÄ nebÅ«s</a><a href="https://neatkariga.nra.lv/ekonomika/353479-rupniecibas-latvija-nebus#comments" class="link-comm">43</a></div>
		</div>
			<div class="art-item col-3 show-on-pc-only">
			<a href="https://neatkariga.nra.lv/izpete/353228-cik-reala-iespeja-bezdarbniekam-ir-atrast-darbu-latvija" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527108_1e08249d70.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/izpete/353228-cik-reala-iespeja-bezdarbniekam-ir-atrast-darbu-latvija" class="t">Cik reÄla iespÄja bezdarbniekam ir atrast darbu LatvijÄ?</a><a href="https://neatkariga.nra.lv/izpete/353228-cik-reala-iespeja-bezdarbniekam-ir-atrast-darbu-latvija#comments" class="link-comm">59</a></div>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>							</div>
		</div>
		<div class="col col-right col-sm">
			<div class="with-side-padding">
				<div class="bl-ad-cont with-bg top-margin-1"><div class="bl-ad ad-left-lg">
			<div style="width:100%;max-width:336px;height:300px;overflow:hidden;margin:0 auto;">
		<iframe src="https://jauns.lv/widget/nralv-new-336x300" width="336" height="300" style="border-width:0;overflow:hidden;max-width:336px;width:100%;"></iframe>
	</div>
</div></div>
			</div>
		</div>
		<div class="clear">&nbsp;</div>
	</div>
	
	<div class="bl-ad-cont top-margin-1 show-on-pc-only"><div class="bl-ad ad-full-width">
			<div id='div-gpt-ad-1525262470913-top3' class="gpt-ad" data-gpt-placement="top3" data-gpt-on-empty="passback">		<script>
		googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-top3'); });
		</script>
	</div>
	<script>
	gptPassbacks['div-gpt-ad-1525262470913-top3'] = function(el) {
				window.appGPT.addAdsenseSlot(el, 'ca-pub-6250374732409191', '1586418490', 'auto', {
			'class': 'gad_fullWidth_nr3'		});
	};
	</script>
	</div></div>
	
	<div class="layout-two-cols">
		<div class="col col-left col-sm">
			<div class="with-side-padding">
				<div>
	<h2 class="bl-title "><a href="/izklaide/" class="t">Izklaide</a></h2>	<div class='art-items'>		<div class='art-item img-left'>
			<a href="/izklaide/muzika/353899-rutulis-remikse-izcilo-dartas-stepanovas-un-dagamba-hitu.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528198_9f5af57341.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/izklaide/muzika/353899-rutulis-remikse-izcilo-dartas-stepanovas-un-dagamba-hitu.htm" class="t">Rutulis remiksÄ izcilo DÄrtas Stepanovas un âDaGambaâ hitu</a><a href="/izklaide/muzika/353899-rutulis-remikse-izcilo-dartas-stepanovas-un-dagamba-hitu.htm#comments" class="link-comm">2</a></div>
			<div class="clear">&nbsp;</div>
		</div>
			<div class='art-item img-left'>
			<a href="/izklaide/muzika/353898-astronout-prezente-jaunas-dziesmas-video.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528197_18d93a6cdf.jpg" alt="" /></span>
				<span class="img-icons">
										<span class="img-icon video"><i class="material-icons">&#xE039;</i></span>				</span>
			</a>
			<div class="art-title"><a href="/izklaide/muzika/353898-astronout-prezente-jaunas-dziesmas-video.htm" class="t">âAstroânâoutâ prezentÄ jaunas dziesmas video</a></div>
			<div class="clear">&nbsp;</div>
		</div>
			<div class='art-item img-left'>
			<a href="/foto/izklaide/14321-mazaja-mezotnes-pili-krasni-nosvineta-petera-vaska-fonda-10-jubileja.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/280x186px/528226_8c9669c866.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="/foto/izklaide/14321-mazaja-mezotnes-pili-krasni-nosvineta-petera-vaska-fonda-10-jubileja.htm" class="t">FOTO: MazajÄ MeÅ¾otnes pilÄ« krÄÅ¡Åi nosvinÄta PÄtera Vaska fonda 10.jubileja</a></div>
			<div class="clear">&nbsp;</div>
		</div>
	</div>
</div>							</div>
		</div>
		<div class="col col-right col-big">
			<div class="bl-big-3cols video">
	<div class="with-side-padding">
		<h2 class="bl-title "><a href="/video/" class="t">Video</a><a href="/video/" class="btn-more">VairÄk &gt;</a></h2>		<div class="bl-big-item video">			<div class='art-items art-items-in-rows'>
				<div class='art-item img-left mob-img-full'>
					<a href="/video/8453-noklausies-100debija-klausitajiem-nodod-savu-jaunako-singlu-aizveja.htm" class="art-img-cont">
						<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos_video/2021-07/540px/527915_2b783a9a3d.jpg" alt="" /></span>
						<span class="img-icons">
														<span class="img-icon video"><i class="material-icons">&#xE039;</i></span>						</span>
					</a>
					<div class="cont">
						<div class="art-title size-4 mob-size-5"><a href="/video/8453-noklausies-100debija-klausitajiem-nodod-savu-jaunako-singlu-aizveja.htm" class="t">VIDEO: Noklausies! 100Debija klausÄ«tÄjiem nodod savu jaunÄko singlu âAizvÄjÄâ</a></div>
						<div class="art-descr with-lim-h max-h-3lines show-on-pc-only">30. jÅ«lija piektdienÄ grupa 100Debija pirmizrÄdÄ sÅ«ta savu jaunÄko singlu âAizvÄjÄâ! Deju mÅ«zikas stilistikÄ ieturÄtÄ dziesma ir abu grupas dalÄ«bnieku radoÅ¡s kopdarbs, kurÄ Gints StankeviÄs ir radÄ«jis mÅ«ziku, filigrÄni veicot arÄ« muzikÄlÄ producenta pienÄkumus, savukÄrt, Agris SemÄvics tradicionÄli ir dziesmas teksta autors un vadoÅ¡ais vokÄls ierakstÄ. 

Dziesmas âAizvÄjÄâ pirmatskaÅojums sasaucas ar notikumiem  2020. jÅ«lija paÅ¡Äs beigÄs, kad 100Debija laida klajÄ savu iepriekÅ¡Äjo singlu âAr mani viss notiek tÄâ. VÄl jÄpiemin, ka Å¡is ir arÄ« oficiÄlais grupas darbÄ«bas atsÄkÅ¡anas laiks pagÄjuÅ¡ajÄ gadÄ. Bet par ko ir Å¡Ä« dziesma? Par visapkÄrt valdoÅ¡ajÄm puspatiesÄ«bÄm un sirdsbalsi. Sirdsbalsi, kas, iespÄjams, ir viena no Å¡Ä« laika lielÄkajÄm vÄrtÄ«bÄmâ¦</div>					</div>
					<div class="clear">&nbsp;</div>
				</div>
			</div>
		</div>
	</div>
	<div class="with-sm-side-padding">
		<div class='sm-items'>		<div class='art-items art-items-in-cols-3'>		<div class="art-item col-1">
			<a href="/video/8452-slepeni-filmets-video-atklaj-sokejosu-vardarbibu-un-cietsirdibu-pret-dzivniekiem-kazokzveru-audzetava.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos_video/2021-06/360x280px/521382_190b122db6.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
										<span class="img-icon video"><i class="material-icons">&#xE039;</i></span>				</span>
			</a>
			<div class="art-title"><a href="/video/8452-slepeni-filmets-video-atklaj-sokejosu-vardarbibu-un-cietsirdibu-pret-dzivniekiem-kazokzveru-audzetava.htm" class="t">VIDEO: Slepeni filmÄts video atklÄj Å¡okÄjoÅ¡u vardarbÄ«bu un cietsirdÄ«bu pret dzÄ«vniekiem kaÅ¾okzvÄru audzÄtavÄ</a><a href="/video/8452-slepeni-filmets-video-atklaj-sokejosu-vardarbibu-un-cietsirdibu-pret-dzivniekiem-kazokzveru-audzetava.htm#comments" class="link-comm">52</a></div>
		</div>
			<div class="art-item col-2">
			<a href="/video/8451-ka-pagatavot-midijas.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos_video/2021-06/360x280px/520737_eaee98363d.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
										<span class="img-icon video"><i class="material-icons">&#xE039;</i></span>				</span>
			</a>
			<div class="art-title"><a href="/video/8451-ka-pagatavot-midijas.htm" class="t">VIDEO: KÄ pagatavot mÄ«dijas</a><a href="/video/8451-ka-pagatavot-midijas.htm#comments" class="link-comm">5</a></div>
		</div>
			<div class="art-item col-3 show-on-pc-only">
			<a href="/video/8449-grupa-simple-man-kopa-ar-yohn-volk-izdod-jaudigu-dziesmu-latviesu-valoda.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos_video/2021-05/360x280px/520053_0ebf20abe3.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
										<span class="img-icon video"><i class="material-icons">&#xE039;</i></span>				</span>
			</a>
			<div class="art-title"><a href="/video/8449-grupa-simple-man-kopa-ar-yohn-volk-izdod-jaudigu-dziesmu-latviesu-valoda.htm" class="t">VIDEO: Grupa &quot;Simple Man&quot; kopÄ ar Yohn Volk izdod jaudÄ«gu dziesmu latvieÅ¡u valodÄ</a><a href="/video/8449-grupa-simple-man-kopa-ar-yohn-volk-izdod-jaudigu-dziesmu-latviesu-valoda.htm#comments" class="link-comm">7</a></div>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>	</div>
</div>					</div>	
		<div class="clear">&nbsp;</div>
	</div>
	
	<div class="layout-two-cols">
		<div class="col col-left col-big">
			<div class="with-sm-side-padding">
				<div class=''>	<div class="with-sm-side-padding"><h2 class="bl-title hide-more-mob"><a href="/tema/142-visinteresantakie-top.htm" class="t">VisinteresantÄkie TOP</a><a href="/tema/142-visinteresantakie-top.htm" class="btn-more">VairÄk &gt;</a></h2></div>	<div class='art-items art-items-in-cols-3'>		<div class="art-item col-1">
			<a href="https://neatkariga.nra.lv/lasamgabali/353762-top-5-lasitakie-neatkarigas-raksti" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527907_c9958d68e4.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/lasamgabali/353762-top-5-lasitakie-neatkarigas-raksti" class="t">TOP 5 lasÄ«tÄkie NeatkarÄ«gÄs raksti</a><a href="https://neatkariga.nra.lv/lasamgabali/353762-top-5-lasitakie-neatkarigas-raksti#comments" class="link-comm">1</a></div>
		</div>
			<div class="art-item col-2">
			<a href="https://neatkariga.nra.lv/lasamgabali/353120-top-5-lasitakie-neatkarigas-raksti" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/526985_264f4a6219.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/lasamgabali/353120-top-5-lasitakie-neatkarigas-raksti" class="t">TOP 5 lasÄ«tÄkie NeatkarÄ«gÄs raksti</a></div>
		</div>
			<div class="art-item col-3 show-on-pc-only">
			<a href="https://neatkariga.nra.lv/lasamgabali/352582-top-5-lasitakie-neatkarigas-raksti" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/526125_07a5280f3f.jpg" width="360" height="280" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>
			<div class="art-title"><a href="https://neatkariga.nra.lv/lasamgabali/352582-top-5-lasitakie-neatkarigas-raksti" class="t">TOP 5 lasÄ«tÄkie NeatkarÄ«gÄs raksti</a><a href="https://neatkariga.nra.lv/lasamgabali/352582-top-5-lasitakie-neatkarigas-raksti#comments" class="link-comm">4</a></div>
		</div>
	<div class="clear">&nbsp;</div></div>
</div>							</div>
		</div>
		<div class="col col-right col-sm">
			<div class="with-side-padding">
								<div class="bl-ad-cont with-bg top-margin-1"><div class="bl-ad ad-left-lg">
	<div style="width:100%;max-width:336px;height:300px;overflow:hidden;margin:0 auto;">
		<iframe scrolling="no" height="300" frameborder="0" width="300" src="https://www.la.lv/widget/news1" marginwidth="0" marginheight="0" style="border-width:0;overflow:hidden;max-width:336px;width:100%;"></iframe>
	</div>
</div></div>
			</div>
		</div>	
		<div class="clear">&nbsp;</div>
	</div>
		
</div>
	

<div class="wrap wrap-with-bg">
	
	<div class="top-margin-fix"></div>
	
	<div class="bl-grid-big-4small">
	<div class="with-side-padding"><h2 class="bl-title "><a href="/veseliba/" class="t">VeselÄ«ba</a><a href="/veseliba/" class="btn-more">VairÄk &gt;</a></h2></div>	<div class="layout-two-cols with-sm-side-padding">
		<div class="col col-left col-sm art-items with-sm-side-padding">						<div class="art-item item-0">
				<a href="/veseliba/353750-ko-darit-un-ko-nedarit-atvalinajuma-laika-uztura-specialiste-dalas-ar-8-vertigiem-padomiem.htm" class="art-img-cont">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/540px/527861_bfeeb6cff8.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title size-3 mob-size-5"><a href="/veseliba/353750-ko-darit-un-ko-nedarit-atvalinajuma-laika-uztura-specialiste-dalas-ar-8-vertigiem-padomiem.htm" class="t">Ko darÄ«t un ko nedarÄ«t atvaÄ¼inÄjuma laikÄ? Uztura speciÄliste dalÄs ar 8 vÄrtÄ«giem padomiem</a></div>
				<div class="art-descr with-lim-h show-on-pc-only">Laiska atpÅ«ta, mazliet slinkuma, nesteidzÄ«gas uzkodas, gardi naÅ¡Ä·i un lieliskÄ iespÄja sev neliegt neko â tieÅ¡i Å¡Äda pieeja bieÅ¾i vien raksturo atpÅ«tnieku ikdienas ritmu un Ädienu izvÄli atvaÄ¼inÄjuma laikÄ.</div>			</div>
					</div><div class="col col-right col-big art-items art-items-in-cols-2">			<div class="art-item item-1">
				<a href="/veseliba/353310-farmaceite-atspeko-popularakos-uztura-un-sirds-veselibas-mitus.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527256_78455e5cd6.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/veseliba/353310-farmaceite-atspeko-popularakos-uztura-un-sirds-veselibas-mitus.htm" class="t">Farmaceite atspÄko populÄrÄkos uztura un sirds veselÄ«bas mÄ«tus</a><a href="/veseliba/353310-farmaceite-atspeko-popularakos-uztura-un-sirds-veselibas-mitus.htm#comments" class="link-comm">1</a></div>
							</div>
								<div class="art-item item-2">
				<a href="/veseliba/353748-specigai-sirdij-specialisti-nosauc-8-labakos-produktus-sirds-veselibai.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527859_e5ddf8bc98.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/veseliba/353748-specigai-sirdij-specialisti-nosauc-8-labakos-produktus-sirds-veselibai.htm" class="t">SpÄcÄ«gai sirdij! SpeciÄlisti nosauc 8 labÄkos produktus sirds veselÄ«bai</a></div>
							</div>
								<div class="art-item item-3">
				<a href="/veseliba/353648-miti-un-patiesiba-ka-saulainas-dienas-ietekme-adu-un-veselibu.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527737_bc11610a11.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/veseliba/353648-miti-un-patiesiba-ka-saulainas-dienas-ietekme-adu-un-veselibu.htm" class="t">MÄ«ti un patiesÄ«ba: kÄ saulainÄs dienas ietekmÄ Ädu un veselÄ«bu?</a><a href="/veseliba/353648-miti-un-patiesiba-ka-saulainas-dienas-ietekme-adu-un-veselibu.htm#comments" class="link-comm">1</a></div>
							</div>
								<div class="art-item item-4">
				<a href="/veseliba/353768-petijums-ierobezojumu-atvieglosana-palielina-risku-ka-radisies-pret-vakcinam-noturigaki-paveidi.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527912_bf8711773a.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/veseliba/353768-petijums-ierobezojumu-atvieglosana-palielina-risku-ka-radisies-pret-vakcinam-noturigaki-paveidi.htm" class="t">PÄtÄ«jums: ierobeÅ¾ojumu atviegloÅ¡ana palielina risku, ka radÄ«sies pret vakcÄ«nÄm noturÄ«gÄki paveidi</a><a href="/veseliba/353768-petijums-ierobezojumu-atvieglosana-palielina-risku-ka-radisies-pret-vakcinam-noturigaki-paveidi.htm#comments" class="link-comm">23</a></div>
							</div>
		</div><div class="clear">&nbsp;</div>
	</div>
</div>			
	<div class="bl-ad-cont top-margin-1"><div class="bl-ad ad-full-width">
									<ins class="adsbygoogle gad_fullWidth_nr4"
			 style="display:block"
			 data-ad-client="ca-pub-6250374732409191"
			 data-ad-slot="8199369164"
			 data-ad-format="auto"></ins>
		<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
		</script>
	</div></div>
	
	<div class="layout-3eq-cols">
		<div class="col with-side-padding">
			<div class="bl-big-and-titles ">
	<h2 class="bl-title "><a href="/kultura/" class="t">KultÅ«ra</a></h2>	<div class="art-items">		<div class="art-item item-big mob-img-left">
			<a href="https://neatkariga.nra.lv/pasakumi/353781-dailes-teatris-sak-ar-7-jaunam-programmam" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527930_36e3900a7d.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>			<div class="art-title"><a href="https://neatkariga.nra.lv/pasakumi/353781-dailes-teatris-sak-ar-7-jaunam-programmam" class="t">Dailes teÄtris sÄk ar 7 jaunÄm programmÄm</a><a href="https://neatkariga.nra.lv/pasakumi/353781-dailes-teatris-sak-ar-7-jaunam-programmam#comments" class="link-comm">7</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="https://neatkariga.nra.lv/pasakumi/353758-neatkariga-iesaka-top10-notikumi-kultura-no-31-julija-lidz-6-augustam" class="t">NeatkarÄ«gÄ iesaka: TOP10 notikumi kultÅ«rÄ no 31. jÅ«lija lÄ«dz 6. augustam</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="https://neatkariga.nra.lv/pasakumi/353782-janis-vimba-mes-neskirojam-skatitajus-skatitaji-pasi-sevi-skiro" class="t">JÄnis Vimba: MÄs neÅ¡Ä·irojam skatÄ«tÄjus, skatÄ«tÄji paÅ¡i sevi Å¡Ä·iro</a><a href="https://neatkariga.nra.lv/pasakumi/353782-janis-vimba-mes-neskirojam-skatitajus-skatitaji-pasi-sevi-skiro#comments" class="link-comm">198</a></div>
		</div>
	</div>
</div>					</div>
		<div class="col with-side-padding">
			<div class="bl-big-and-titles ">
	<h2 class="bl-title "><a href="/tema/100-turisms.htm" class="t">TÅ«risms</a></h2>	<div class="art-items">		<div class="art-item item-big">
			<a href="https://neatkariga.nra.lv/lasamgabali/353119-slavenakie-igaunijas-kugi-jura-un-tas-dzelme" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/526978_b68bad86e3.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>			<div class="art-title"><a href="https://neatkariga.nra.lv/lasamgabali/353119-slavenakie-igaunijas-kugi-jura-un-tas-dzelme" class="t">SlavenÄkie Igaunijas kuÄ£i jÅ«rÄ un tÄs dzelmÄ</a><a href="https://neatkariga.nra.lv/lasamgabali/353119-slavenakie-igaunijas-kugi-jura-un-tas-dzelme#comments" class="link-comm">5</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="https://neatkariga.nra.lv/lasamgabali/352576-interesantakie-igaunijas-muzeji-kuros-runa-ari-latviesu-valoda" class="t">InteresantÄkie Igaunijas muzeji, kuros runÄ arÄ« latvieÅ¡u valodÄ</a><a href="https://neatkariga.nra.lv/lasamgabali/352576-interesantakie-igaunijas-muzeji-kuros-runa-ari-latviesu-valoda#comments" class="link-comm">2</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="/latvija/351860-aptauja-vai-iedzivotaji-sogad-dosies-celojumos-arpus-latvijas.htm" class="t">Aptauja: vai iedzÄ«votÄji Å¡ogad dosies ceÄ¼ojumos Ärpus Latvijas?</a><a href="/latvija/351860-aptauja-vai-iedzivotaji-sogad-dosies-celojumos-arpus-latvijas.htm#comments" class="link-comm">9</a></div>
		</div>
	</div>
</div>					</div>
		<div class="col with-side-padding">
			<div class="bl-big-and-titles ">
	<h2 class="bl-title "><a href="/izklaide/gardeziem/" class="t">GardÄÅ¾iem</a></h2>	<div class="art-items">		<div class="art-item item-big mob-img-left">
			<a href="https://lifehacks.nra.lv/virtuve/352996-izmegini-netradicionalas-auksto-zupu-receptes/" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/526700_4e771edc61.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>			<div class="art-title"><a href="https://lifehacks.nra.lv/virtuve/352996-izmegini-netradicionalas-auksto-zupu-receptes/" class="t">IzmÄÄ£ini! NetradicionÄlÄs auksto zupu receptes</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="https://lifehacks.nra.lv/virtuve/351356-universala-recepte-darzenu-marinesanai/" class="t">UniversÄla recepte dÄrzeÅu marinÄÅ¡anai</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="/izklaide/gardeziem/351407-tiks-izdota-pavargramata-ar-baltijas-valstu-pavaru-apkopotam-180-receptem.htm" class="t">Tiks izdota pavÄrgrÄmata ar Baltijas valstu pavÄru apkopotÄm 180 receptÄm</a><a href="/izklaide/gardeziem/351407-tiks-izdota-pavargramata-ar-baltijas-valstu-pavaru-apkopotam-180-receptem.htm#comments" class="link-comm">3</a></div>
		</div>
	</div>
</div>								</div>
		<div class="clear">&nbsp;</div>
	</div>
	
	<div class="with-side-padding">
		<div class="bl-subscribe">
	<div class="t">IzvÄlies labÄko abonÄÅ¡anas<span class="br"> </span>piedÄvÄjumu tieÅ¡i tavÄm vÄlmÄm</div>
	<div class="covers">		<div class="item"><span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos_press/2021-08/228px/528163_89ac6d35f5.jpg" alt="" /></span></div>
			<div class="item"><span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos_press/2021-06/228px/520662_c48210e417.jpg" alt="" /></span></div>
	<div class="clear">&nbsp;</div></div>
	<div class="btn-line"><a href="/abonesana/" class="btn">AbonÄt</a></div>
</div>			</div>
	
	<div>
								<div class="with-side-padding"><h2 class="bl-title"><a href="/sports/" class="t">Sports</a><a href="/sports/" class="btn-more">VairÄk &gt;</a></h2></div>
		<div class="bl-grid-big-4small">
		<div class="layout-two-cols with-sm-side-padding">
		<div class="col col-left col-sm art-items with-sm-side-padding">						<div class="art-item item-0">
				<a href="/sports/353979-plavinstocs-ceturtdalfinala-tiksies-ar-vel-vienu-olimpisko-cempionu.htm" class="art-img-cont">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/540px/528342_518b76ab12.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title size-3 mob-size-5"><a href="/sports/353979-plavinstocs-ceturtdalfinala-tiksies-ar-vel-vienu-olimpisko-cempionu.htm" class="t">PÄ¼aviÅÅ¡/ToÄs ceturtdaÄ¼finÄlÄ tiksies ar vÄl vienu olimpisko Äempionu</a></div>
				<div class="art-descr with-lim-h show-on-pc-only">Latvijas pludmales volejbola duets MÄrtiÅÅ¡ PÄ¼aviÅÅ¡/Edgars ToÄs Tokijas olimpisko spÄÄ¼u turnÄ«ra ceturtdaÄ¼finÄlÄ tiksies ar brazÄ«lieÅ¡iem Alisonu Seruti/Alvaru Filju.</div>			</div>
					</div><div class="col col-right col-big art-items art-items-in-cols-2">			<div class="art-item item-1">
				<a href="/sports/353931-baltkrievijas-sprintere-cimanouska-lugusi-politisko-patverumu-polija.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528264_a09d4d821c.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/sports/353931-baltkrievijas-sprintere-cimanouska-lugusi-politisko-patverumu-polija.htm" class="t">Baltkrievijas sprintere Cimanouska lÅ«gusi politisko patvÄrumu PolijÄ</a><a href="/sports/353931-baltkrievijas-sprintere-cimanouska-lugusi-politisko-patverumu-polija.htm#comments" class="link-comm">40</a></div>
							</div>
								<div class="art-item item-2">
				<a href="/sports/353908-polija-un-cehija-piedavajusas-vizas-baltkrievijas-sprinterei-cimanouskai.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528230_a8e8e5183c.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/sports/353908-polija-un-cehija-piedavajusas-vizas-baltkrievijas-sprinterei-cimanouskai.htm" class="t">Polija un Äehija piedÄvÄjuÅ¡as vÄ«zas Baltkrievijas sprinterei Cimanouskai</a><a href="/sports/353908-polija-un-cehija-piedavajusas-vizas-baltkrievijas-sprinterei-cimanouskai.htm#comments" class="link-comm">10</a></div>
							</div>
								<div class="art-item item-3">
				<a href="/foto/sports/14320-jatnieks-kristaps-neretnieks-gatavojas-olimpisko-spelu-startam.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528187_bf0c69205b.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/foto/sports/14320-jatnieks-kristaps-neretnieks-gatavojas-olimpisko-spelu-startam.htm" class="t">FOTO: JÄtnieks Kristaps Neretnieks gatavojas olimpisko spÄÄ¼u startam</a></div>
							</div>
								<div class="art-item item-4">
				<a href="/sports/volejbols/353904-plavins-ar-speku-mes-nevienu-nepanemsim-to-varam-spelejot-ar-galvu.htm" class="art-img-cont r16-9">
					<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-08/360x280px/528210_0a72602659.jpg" alt="" /></span>
					<span class="img-icons">
																	</span>
				</a>
				<div class="art-title"><a href="/sports/volejbols/353904-plavins-ar-speku-mes-nevienu-nepanemsim-to-varam-spelejot-ar-galvu.htm" class="t">PÄ¼aviÅÅ¡: Ar spÄku mÄs nevienu nepaÅemsim, to varam, spÄlÄjot ar galvu</a></div>
							</div>
		</div><div class="clear">&nbsp;</div>
	</div>
</div>			</div>
	
	<div class="bl-ad-cont top-margin-1"><div class="bl-ad ad-full-width">
									<ins class="adsbygoogle gad_fullWidth_nr5"
			 style="display:block"
			 data-ad-client="ca-pub-6250374732409191"
			 data-ad-slot="1243078578"
			 data-ad-format="auto"></ins>
		<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
		</script>
	</div></div>
	
	<div class="layout-3eq-cols">
		<div class="col with-side-padding">
			<div class="bl-big-and-titles ">
	<h2 class="bl-title "><a href="/tema/92-darba-tirgus.htm" class="t">Darba tirgus</a></h2>	<div class="art-items">		<div class="art-item item-big mob-img-left">
			<a href="/latvija/izglitiba-karjera/341567-eksperti-nosauc-kuras-profesijas-tuvakaja-laika-bus-vispieprasitakas-darba-tirgu.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-03/360x280px/509759_898d7b8388.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>			<div class="art-title"><a href="/latvija/izglitiba-karjera/341567-eksperti-nosauc-kuras-profesijas-tuvakaja-laika-bus-vispieprasitakas-darba-tirgu.htm" class="t">Eksperti nosauc, kuras profesijas tuvakajÄ laikÄ bÅ«s vispieprasÄ«tÄkÄs darba tirgÅ«</a><a href="/latvija/izglitiba-karjera/341567-eksperti-nosauc-kuras-profesijas-tuvakaja-laika-bus-vispieprasitakas-darba-tirgu.htm#comments" class="link-comm">27</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="https://tautaruna.nra.lv/redakcijas-viedoklis/328232-pavaicajiet-sesdesmitgadniekiem/" class="t">PavaicÄjiet seÅ¡desmitgadniekiem!</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="/latvija/327475-petijums-apmierinatiba-ar-darbu-ir-ciesi-saistita-ar-emocionalo-inteligenci.htm" class="t">PÄtÄ«jums: ApmierinÄtÄ«ba ar darbu ir cieÅ¡i saistÄ«ta ar emocionÄlo inteliÄ£enci</a><a href="/latvija/327475-petijums-apmierinatiba-ar-darbu-ir-ciesi-saistita-ar-emocionalo-inteligenci.htm#comments" class="link-comm">28</a></div>
		</div>
	</div>
</div>								</div>
		<div class="col with-side-padding">
			<div class="bl-big-and-titles ">
	<h2 class="bl-title "><a href="/tema/137-izglitiba-20182019.htm" class="t">IzglÄ«tÄ«ba</a></h2>	<div class="art-items">		<div class="art-item item-big">
			<a href="https://neatkariga.nra.lv/izglitiba/353097-logistikas-joma-plasas-darba-un-izaugsmes-iespejas" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/526895_0439a67499.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>			<div class="art-title"><a href="https://neatkariga.nra.lv/izglitiba/353097-logistikas-joma-plasas-darba-un-izaugsmes-iespejas" class="t">LoÄ£istikas joma â plaÅ¡as darba un izaugsmes iespÄjas</a><a href="https://neatkariga.nra.lv/izglitiba/353097-logistikas-joma-plasas-darba-un-izaugsmes-iespejas#comments" class="link-comm">3</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="https://neatkariga.nra.lv/izglitiba/349963-tsi-aicina-pieteikties-studijam-jau-sodien" class="t">TSI aicina pieteikties studijÄm jau Å¡odien</a><a href="https://neatkariga.nra.lv/izglitiba/349963-tsi-aicina-pieteikties-studijam-jau-sodien#comments" class="link-comm">2</a></div>
		</div>
			<div class="art-item item-title">
						<div class="art-title"><a href="https://neatkariga.nra.lv/izglitiba/349249-maxima-paplasina-darba-iespejas-pilngadigiem-jauniesiem" class="t">&quot;Maxima&quot; paplaÅ¡ina darba iespÄjas pilngadÄ«giem jaunieÅ¡iem</a><a href="https://neatkariga.nra.lv/izglitiba/349249-maxima-paplasina-darba-iespejas-pilngadigiem-jauniesiem#comments" class="link-comm">2</a></div>
		</div>
	</div>
</div>					</div>
		<div class="col with-side-padding">
			<div class="bl-big-and-titles ">
	<h2 class="bl-title "><a href="/reklamraksti/" class="t">ReklÄmraksti</a></h2>	<div class="art-items">		<div class="art-item item-big mob-img-left">
			<a href="/reklamraksti/353425-jau-septembri-zalaja-rezima-gardezus-pulces-riga-food-2021-kipsala.htm" class="art-img-cont">
				<span class="img img-lazy-bg"><img src="//:0" data-src="https://zinas.nra.lv/_mm/photos/2021-07/360x280px/527419_3e7c723d11.jpg" alt="" /></span>
				<span class="img-icons">
														</span>
			</a>			<div class="art-title"><a href="/reklamraksti/353425-jau-septembri-zalaja-rezima-gardezus-pulces-riga-food-2021-kipsala.htm" class="t">Jau septembrÄ« zaÄ¼ajÄ reÅ¾Ä«mÄ gardÄÅ¾us pulcÄs &quot;Riga Food 2021&quot; Ä¶Ä«psalÄ!</a></div>
		</div>
	</div>
</div>					</div>
		<div class="clear">&nbsp;</div>
	</div>
	
			
			
	<div class="v-space double"></div>
	
</div>
	


</main>
		
	<footer id="footer">
		<div class="cont wrap wrap-with-hspaces">
			<ul>
				<li class="title">nra.lv:</li>
				<li class="link first"><a href="/info/par-nralv/">Par nra.lv</a></li>
				<li class="link"><a href="/info/par-komentariem/">Par komentÄriem</a></li>
				<li class="link"><a href="/info/lietosanas-noteikumi/">LietoÅ¡anas noteikumi</a></li>
				<li class="link"><a href="/info/autortiesibas/">AutortiesÄ«bas</a></li>
				<li class="link"><a href="/info/etikas-kodekss/">Ätikas kodekss</a></li>
				<li class="link"><a href="/info/kontakti/">Kontakti</a></li>
			</ul>
			<ul>
				<li class="title">ReklÄmdevÄjiem:</li>
				<li class="link first"><a href="/info/reklama/">ReklÄma</a></li>
				<li class="link"><a href="/info/logo/">MÅ«su logo</a></li>
			</ul>
			<p class="copyright">Visas tiesÄ«bas aizsargÄtas Â© nra.lv, 2021</p>
		</div>
	</footer>

<div>
			
<!-- /2793495/nralv_rm_footer -->
<div id='div-gpt-ad-1525262470913-rmFooter' style='display:none;'>
<script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-rmFooter'); });</script>
</div>
<script>
function genecyWallpaperLoaded() {
	document.getElementById('header-top').className = 'wrap';
	document.getElementById('header').style.backgroundColor = '#fafafa';
	document.getElementById('nav').className = 'wrap';
	document.querySelector('div.head-hot-topics').className = 'head-hot-topics wrap';
}
</script>
<!-- /2793495/nralv_rm_sides -->
<div id='div-gpt-ad-1525262470913-rmSides' style='display:none;'>
<script>googletag.cmd.push(function() { googletag.display('div-gpt-ad-1525262470913-rmSides'); });</script>
</div>
			
		<script src="/build/app.ecf9404d.js"></script>
	<script>
	$(document).ready(function() {
		$('img.lazy').lazy();
	});
	</script>



<div id="utr-cont-nralv"><script>
(function(w, d, n) {
	w['UserTrackingObject'] = n;
	w[n] = w[n] || function() {
		(w[n].q = w[n].q || []).push(arguments);
	};
	var tn = 'script';
	var el = d.createElement(tn);
	el.async = 1;
	el.src = '/build/utr.06519758.js';
	var bScrEl = d.getElementsByTagName(tn)[0];
	bScrEl.parentNode.insertBefore(el, bScrEl);
})(window, document, 'utr');
utr('opts', {cbid: true, id: 'utr-cont-nralv', iurl: '/utr/utr.php'});
utr('send');
</script></div>





</div>



<script type="application/javascript" async src="https://apps-cdn.relevant-digital.com/static/tags/1136305141024894320.js"></script>
</body>
</html>