window.optiload = window.optiload || {};
optiload.cmd = optiload.cmd || [];

window.googletag = window.googletag || {};
googletag.cmd = googletag.cmd || [];

window.evopbjs = window.evopbjs || {};
evopbjs.que = evopbjs.que || [];

googletag.cmd.push(function() {
	googletag.pubads().enableSingleRequest();
	googletag.pubads().disableInitialLoad();
	googletag.pubads().collapseEmptyDivs(true, true);
	googletag.enableServices();
});

(function() {
	var s = document.createElement('script');
	s.async = true;
	s.type = 'text/javascript';
	s.src = 'https://assets.evolutionadv.it/optiload/4.x.x/optiload.min.js';
	var node = document.getElementsByTagName('script')[0];
	//@ts-ignore
	node.parentNode.insertBefore(s, node);
})();

//CONFIG
optiload.cmd.push(function() {
	optiload.config.domain = 'ideegreen.it';
	optiload.config.cmp_type = 'publisher';
	//optiload.config.intext_container = intextContainerCustom;
	optiload.config.sellerid = 42;

	var intextContainerCustom = '.post-content'; //desktop
	 if(optiload.fn.isMobile()) {
		intextContainerCustom = '.post-page-content'; //mobile
	 }
	 optiload.config.intext_container = intextContainerCustom;
});

//CONFIG CONTENT REVOLUTION
var contentRevolutionConfig = {
	evoFirstArticle: '.post-content',
	evoUAPublisher: 'UA-27691384-1',
	optiscrollAdunitId: 10,
	cssUrl: 'https://assets.evolutionadv.it/ideegreen_it/optiscroll.css',
	siteCod: 'ideegreen.it',
	launchManually: false, //infiniteScrollEvolution(); //oppure per mostrare solo su query ?contentrevolution=true !(window.location.href.indexOf('contentrevolution') > -1)
	// feedIdAlternative		:	null,
	// feedVariable			:	null,
	atfAdunitId: 2,
	atfSelector				:	'.evostep>.evo-articolo-spons-text p:nth-of-type(2)',
	insertIntext: true,
	//intextFinal			:	false,
	insertIntoPromo: false,
	//intextAdunitId			:	null,
	refreshSidebarSticky: false,
	//sidebarStickyAdunitId	:	5,
	refreshFloorad: true,
	refreshSkin: false,
};

function startContentRevolution() {
	//############## CONTENT REVOLUTION ##########
	//load content revolution conditions (only starts on posts page, varibles for feeds...)
	if (window.top.optiload.$('body', document.top).hasClass('single-post')) {
		//add box optiscroll if the conditions are different from standard below here!
		//window.top.optiload.$(contentRevolutionConfig.evoFirstArticle, document.top).first().after('<div id="'+evoOptiScrollDiv.replace('#','').replace('.','')+'"></div>');

		if (optiload.fn.isMobile()) {
			contentRevolutionConfig.evoFirstArticle = '#comments';
		}

		//content revolution start
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.src = 'https://assets.evolutionadv.it/content-revolution.js';
		var node = document.getElementsByTagName('script')[0];
		//@ts-ignore
		node.parentNode.insertBefore(s, node);
	}
	//############## CONTENT REVOLUTION ##########
}

//UNITS
optiload.cmd.push(function() {
	var adUnits = [];

	adUnits[1] = {
		name: '/5966054,1984258/IdeeGreen/IdeeGreen_sidebarMiddle',
		sizes: [[300, 250]],
		lazy: true,
		mappings: {
			desktop: [[300, 250]],
		},
		hb: {
			sizes: [[300, 250]],
			bids: [
				{
					bidder: 'adform',
					params: { mid: '747181' },
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '18068386' },
				},
				{
					bidder: 'openx',
					params: { unit: '540935618', delDomain: 'evolution-d.openx.net' },
				},
				{
					bidder: 'smartadserver',
					params: { siteId: 336185, pageId: 1178543, formatId: 58995 },
				},
			],
		},
	};

	adUnits[2] = {
		name: '/5966054,1984258/IdeeGreen/IdeeGreen_ATF',
		sizes: [[300, 250], [336, 280], [336, 250], 'fluid'],
		lazy: false,
		mappings: {
			desktop: [[300, 250], [336, 280], [336, 250], 'fluid'],
			mobile: [[300, 250], [336, 280], [336, 250], 'fluid'],
		},
		hb: {
			sizes: [
				[300, 250],
				[336, 280],
			],
			bids: [
				{
					bidder: 'adform',
					params: { mid: '937936' },
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '20779690' },
				},
				{
					bidder: 'openx',
					params: { unit: '543842067', delDomain: 'evolution-d.openx.net' },
				},
				{
					bidder: 'smartadserver',
					params: { siteId: 336185, pageId: 1178543, formatId: 58999 },
				},
				{
					bidder: "invibes",
					params: {
						placementId: "invibes_ideegreen",
						customEndpoint: "https://bid5.videostep.com/Bid/VideoAdContent"
					}
				}
			],
		},
		hbmobile: {
			sizes: [
				[300, 250],
				[336, 280],
			],
			bids: [
				{
					bidder: 'adform',
					params: { mid: '937936' },
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '20779690' },
				},
				{
					bidder: 'openx',
					params: { unit: '543842067', delDomain: 'evolution-d.openx.net' },
				},
				{
					bidder: 'smartadserver',
					params: { siteId: 336185, pageId: 1178543, formatId: 58999 },
				},
				{
					bidder: "invibes",
					params: {
						placementId: "invibes_ideegreen",
						customEndpoint: "https://bid5.videostep.com/Bid/VideoAdContent"
					}
				}
			],
		},
	};

	adUnits[3] = {
		name: '/5966054,1984258/IdeeGreen/IdeeGreen_intext',
		sizes: [[300, 250], [336, 280], [320, 480], [336, 250], 'fluid'],
		lazy: true,
		isIntext: true, //aggiungere sempre agli intext
		mappings: {
			desktop: [[300, 250], [336, 280], [320, 480], [336, 250], 'fluid'],
			mobile: [[300, 250], [336, 280], 'fluid'],
		},
		hb: {
			sizes: [
				[300, 250],
				[336, 280],
			],
			bids: [
				{
					bidder: 'adform',
					params: { mid: '937938' },
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '20779691' },
				},
				{
					bidder: 'openx',
					params: { unit: '543842070', delDomain: 'evolution-d.openx.net' },
				},
				{
					bidder: 'smartadserver',
					params: { siteId: 336185, pageId: 1178543, formatId: 58994 },
				},
			],
		},
		hbmobile: {
			sizes: [
				[300, 250],
				[336, 280],
			],
			bids: [
				{
					bidder: 'adform',
					params: { mid: '937938' },
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '20779691' },
				},
				{
					bidder: 'openx',
					params: { unit: '543842070', delDomain: 'evolution-d.openx.net' },
				},
				{
					bidder: 'smartadserver',
					params: { siteId: 336185, pageId: 1178543, formatId: 58994 },
				},
			],
		},
	};

	adUnits[4] = {
		name: '/5966054,1984258/IdeeGreen/IdeeGreen_BTF',
		sizes: [[300, 250], [336, 280], [336, 250], 'fluid'],
		lazy: false,
		mappings: {
			desktop: [],
			mobile: [[300, 250], [336, 280], [336, 250], 'fluid'],
		},
		hb: {
			sizes: [
				[300, 250],
				[336, 280],
			],
			bids: [
				{
					bidder: 'adform',
					params: { mid: '937937' },
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '20779694' },
				},
				{
					bidder: 'openx',
					params: { unit: '543842068', delDomain: 'evolution-d.openx.net' },
				},
				{
					bidder: 'smartadserver',
					params: { siteId: 336185, pageId: 1178543, formatId: 59001 },
				},
			],
		},
		hbmobile: {
			sizes: [
				[300, 250],
				[336, 280],
			],
			bids: [
				{
					bidder: 'adform',
					params: { mid: '937937' },
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '20779694' },
				},
				{
					bidder: 'openx',
					params: { unit: '543842068', delDomain: 'evolution-d.openx.net' },
				},
				{
					bidder: 'smartadserver',
					params: { siteId: 336185, pageId: 1178543, formatId: 59001 },
				},
			],
		},
	};

	adUnits[5] = {
		name: '/5966054,1984258/IdeeGreen/IdeeGreen_Floorad',
		sizes: [
			[1280, 100],
			[728, 90],
			[970, 90],
			[300, 100],
			[320, 100],
			[300, 50],
			[320, 50],
			[1, 1],
			[1, 4],
		],
		isFloorad: true, //da aggiungere SEMPRE per il floorad, senza non parte il floorad
		mappings: {
			desktop: [
				[1280, 100],
				[728, 90],
				[970, 90],
			],
			mobile: [
				[300, 100],
				[320, 100],
				[300, 50],
				[320, 50],
				[1, 1],
				[1, 4],
			],
		},
		hb: {
			sizes: [
				[1280, 100],
				[728, 90],
				[970, 90],
			],
			bids: [
				{
					bidder: 'adform',
					params: { mid: '937939' },
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '21453008' },
				},
				{
					bidder: 'openx',
					params: { unit: '543842069', delDomain: 'evolution-d.openx.net' },
				},
			],
		},
		hbmobile: {
			sizes: [
				[300, 100],
				[320, 100],
				[300, 50],
				[320, 50],
			],
			bids: [
				{
					bidder: 'adform',
					params: { mid: '937940' },
				},
				{
					bidder: 'appnexusAst',
					params: { placementId: '20779696' },
				},
				{
					bidder: 'openx',
					params: { unit: '543842069', delDomain: 'evolution-d.openx.net' },
				},
			],
		},
	};

	adUnits[10] = {
		name: '/5966054,1984258/IdeeGreen/IdeeGreen_optiscroll_premium',
		sizes: [[1, 10]],
		offset: 600,
		lazy: true,
		mappings: {
			desktop: [[1, 10]],
			mobile: [[1, 10]],
		},
		hb: {},
		hbmobile: {},
	};

	optiload.config.adunits = adUnits;
	optiload.enable();
});

optiload.cmd.push(function() {
	optiload.addEventListener('ready', function() {
		//ADSENSE
		(function() {
			var k = document.createElement('script'),
				el = document.getElementsByTagName('script')[0];
			k.async = true;
			k.setAttribute('type', 'text/javascript');
			k.setAttribute('data-ad-client', 'ca-pub-8945354104464549');
			k.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
			el.parentNode.insertBefore(k, el);
		})();

		startContentRevolution();
		/*
		  optiload.$('.post-content>p').first().next().after('<div id="video-evo-desktop" class="gptslotvideo" data-adunitid="8" data-addesktop="true"></div>');
		  optiload.$('.post-page-content>p').first().next().after('<div id="video-evo-mobile" class="gptslotvideo" data-adunitid="9" data-admobile="true"></div>');
		  insertEvoBridPlayer();
*/

		if (window.top.optiload.$('body', document.top).hasClass('single-post')) {




			//video sotto intext negli articoli
			//	optiload.$('.post-content>p').first().next().after('<div id="video-evo-desktop" class="gptslotvideo" data-adunitid="8" data-addesktop="true"></div>');


			if(!optiload.fn.isMobile()) {


			optiload
					.$('.post-content>p')
					.first()
					.next()
					.after('<div id="video-evo-desktop" class="gptslotvideo" data-adunitid="8" data-addesktop="true"</div>');

			} else {
				optiload.$('body').append('<div id="video-evo-mobile" class="gptslotvideo" data-adunitid="9" data-admobile="true"</div>');


			}
			insertEvoBridPlayer();

		} else {
			optiload.$("#content").append('<div id="video-evo-desktop" class="gptslotvideo" data-adunitid="8" data-addesktop="true"></div>');
			optiload.$('#content').append('<div id="video-evo-mobile" class="gptslotvideo" data-adunitid="9" data-admobile="true"></div>');


			insertEvoBridPlayerHomeCategorie();
		}

		optiload.fn.standardConfig();
		optiload.fn.loadComscore();
	});
});

function insertEvoBridPlayer() {
	var evoSlotVideo = optiload.$("div[data-adunitid='8']");

	if (optiload.fn.isMobile()) {
		evoSlotVideo = optiload.$("div[data-adunitid='9']");
	}

	console.log('[BRIDTV] start');

	//load script
	// var sBrid = document.createElement("script");
	// sBrid.type = "text/javascript";
	// sBrid.src = "//services.brid.tv/player/build/brid.min.js";
	// var node = document.getElementsByTagName("script")[0];
	// //@ts-ignore
	// node.parentNode.insertBefore(sBrid, node);
	optiload.fn.utils.loadJs('https://services.brid.tv/player/build/brid.min.js', function() {
		for (var i = 0; i < evoSlotVideo.length; i++) {
			optiload.$(evoSlotVideo[i]).append('<div id="Brid_29506692_' + i + '" class="brid" style="z-index:10000000000;width:480;height:270;"></div>');

			//config
			var adErrorFired = false;

			var b4u_bridtv_conf = {
				div_id: 'Brid_29506692_' + i,
				player_id: 20333,
				player_width: 16,
				player_height: 9,
				end_sticky_timeout: 200,
				video_id: 'https://cdn.evolutionadv.it/ideegreen/ideegreen.json',
				passback_sync: false,
				passback_width_px: 300,
				passback_height_px: 250,
				passback_ad_unit: '/5966054/test/test',
			};

			var evoArVideoSrc = [];
			optiload.$.getJSON(b4u_bridtv_conf.video_id, function(data, textStatus, jqXHR) {
				evoArVideoSrc = data;
				evoArVideoSrc.sort(function(a, b) {
					return 0.5 - Math.random();
				});
				videoEvoStart();
			});

			// -------------------------------------------- AUXILIARY

			function b4u_brdtv_passback() {
				// config
				console.log('[BRIDTV] passback Async');
				var w = b4u_bridtv_conf.passback_width_px;
				var h = b4u_bridtv_conf.passback_height_px;
				var ad_unit = b4u_bridtv_conf.passback_ad_unit;
				var el = window.document.getElementById(b4u_bridtv_conf.div_id);
				el.innerHTML = '';
				el.style.display = 'none';

				// div
				var d = document.createElement('div');
				d.setAttribute('data-glade', '');
				d.setAttribute('data-ad-unit-path', ad_unit);
				d.setAttribute('width', w);
				d.setAttribute('height', h);
				d.setAttribute('style', 'width: ' + w + 'px; height: ' + h + 'px; position: relative; margin: 0px auto;');
				b4u_bridtv_insert_after(d, el);

				// script
				var s = document.createElement('script');
				s.setAttribute('async', 'async');
				s.src = 'https://securepubads.g.doubleclick.net/static/glade.js';
				b4u_bridtv_insert_after(s, el);

				// destroy "X"
				optiload.$('.brid-close').remove();

				console.log('[BRIDTV] passback Async rendered');
			}

			function b4u_brdtv_passback_sync() {
				// config
				console.log('[BRIDTV] passback sync');
				var w = b4u_bridtv_conf.passback_width_px;
				var h = b4u_bridtv_conf.passback_height_px;
				var ad_unit = b4u_bridtv_conf.passback_ad_unit;
				var el = document.getElementById(b4u_bridtv_conf.div_id);
				var id = b4u_bridtv_conf.div_id + '_passback_sync';
				var code = "googletag.pubads().definePassback('" + ad_unit + "', [" + w + ', ' + h + ']).display();';
				el.innerHTML = '';
				el.style.display = 'none';

				// iframe
				var iframe = document.createElement('iframe');
				iframe.setAttribute('id', id);
				iframe.setAttribute('frameBorder', '0');
				iframe.setAttribute('scrolling', 'no');
				iframe.setAttribute('width', w);
				iframe.setAttribute('height', h);
				iframe.setAttribute('marginwidth', '0');
				iframe.setAttribute('marginheight', '0');
				iframe.setAttribute('vspace', '0');
				iframe.setAttribute('hspace', '0');
				iframe.setAttribute('style', 'width:' + w + 'px;height:' + h + 'px;position:relative;');

				// javascript
				iframe.src = "JavaScript:''";
				b4u_bridtv_insert_after(iframe, el);
				code = "<p style='margin:0;padding:0;'></p><scr" + "ipt type='text/javascript'>var inDapIF = true </scr" + 'ipt><sc' + "ript src='https://www.googletagservices.com/tag/js/gpt.js'>" + code + '</scr' + 'ipt>';
				var ifr = window.document.getElementById(id);
				ifr.contentWindow.document.open('text/html', 'replace');
				ifr.contentWindow.document.write(code);
				ifr.contentWindow.document.close();

				// destroy "X"
				optiload.$('.brid-close').remove();

				console.log('[BRIDTV] passback sync rendered');
			}

			function b4u_bridtv_insert_after(newNode, referenceNode) {
				referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
			}

			// -------------------------------------------- EVENTS

			function b4u_bridtv_on_request_ad() {
				console.log('[BRIDTV] request ad');
				//optiload.$("#"+b4u_bridtv_conf.div_id).hide();
			}
			function b4u_bridtv_on_ad_start() {
				console.log('[BRIDTV] ad start');
				optiload.$('#' + b4u_bridtv_conf.div_id).show();
			}
			function b4u_bridtv_on_vpaid_start() {
				console.log('[BRIDTV] vpaid start');
				optiload.$('#' + b4u_bridtv_conf.div_id).show();
			}
			function b4u_bridtv_on_adImpression() {
				console.log('[BRIDTV] adImpression');
				optiload.$('#' + b4u_bridtv_conf.div_id).show();
				/*			setTimeout(function () {
					var s = document.createElement("script"),
					el = document.getElementsByTagName("script")[0];
					s.src = "https://ads.viralize.tv/display/?zid=AADXC3cOg2C2yMGm"; el.setAttribute('data-wid','auto');el.setAttribute('type','text/javascript');
					el.parentNode.insertBefore(s, el);
				},10000)(); */
			}
			function b4u_bridtv_on_adEnd() {
				if (!adErrorFired) {
					console.log('[BRIDTV] ad End ');

					/*
				//	setTimeout(function(){ (b4u_bridtv_conf.passback_sync)? b4u_brdtv_passback_sync() : b4u_brdtv_passback(); }, b4u_bridtv_conf.end_sticky_timeout+100);
					var s = document.createElement("script"),
					el = document.getElementsByTagName("script")[0];
					s.src = "https://ads.viralize.tv/display/?zid=AADXC3cOg2C2yMGm"; el.setAttribute('data-wid','auto');el.setAttribute('type','text/javascript');
					el.parentNode.insertBefore(s, el);
					*/
				}
			}
			function b4u_bridtv_on_error() {
				console.log('[BRIDTV] ad error');
				optiload.$('#' + b4u_bridtv_conf.div_id).pause();
				//	optiload.$("#"+b4u_bridtv_conf.div_id).remove();
				//	$bp(b4u_bridtv_conf.div_id).destroy();
				/*
				adErrorFired = true;
				//	setTimeout(function(){ (b4u_bridtv_conf.passback_sync)? b4u_brdtv_passback_sync() : b4u_brdtv_passback(); }, b4u_bridtv_conf.end_sticky_timeout+100);
					var s = document.createElement("script"),
					el = document.getElementsByTagName("script")[0];
					s.src = "https://ads.viralize.tv/display/?zid=AADXC3cOg2C2yMGm"; el.setAttribute('data-wid','auto');el.setAttribute('type','text/javascript');
					el.parentNode.insertBefore(s, el);
					*/
			}
			function b4u_bridtv_on_start() {
				console.log('[BRIDTV] Contenuto Start ');
				$bp('#' + b4u_bridtv_conf.div_id).SlideInView.forceHide();
				setTimeout(function() {
					$bp('#' + b4u_bridtv_conf.div_id).pause();
				}, 7000);
			}

			function b4u_bridtv_on_ready() {
				console.log('[BRIDTV] player ready');
				$bp(b4u_bridtv_conf.div_id).add('requestAd', b4u_bridtv_on_request_ad);
				$bp(b4u_bridtv_conf.div_id).add('adStart', b4u_bridtv_on_ad_start);
				$bp(b4u_bridtv_conf.div_id).add('vpaidStart', b4u_bridtv_on_vpaid_start);
				$bp(b4u_bridtv_conf.div_id).add('adImpression', b4u_bridtv_on_adImpression);
				$bp(b4u_bridtv_conf.div_id).add('adError', b4u_bridtv_on_error);
				$bp(b4u_bridtv_conf.div_id).add('adEnd', b4u_bridtv_on_adEnd);
				$bp(b4u_bridtv_conf.div_id).add('start', b4u_bridtv_on_start);

				//optiload.$("#"+b4u_bridtv_conf.div_id).hide();
			}

			// -------------------------------------------- INIT
			function videoEvoStart() {
				$bp(
					b4u_bridtv_conf.div_id.toString(),
					{
						id: b4u_bridtv_conf.player_id.toString(),
						width: b4u_bridtv_conf.player_width.toString(),
						height: b4u_bridtv_conf.player_height.toString(),
						video: {
							source: {
								src: evoArVideoSrc[0],
							},
						},
						inviewBottomOffset: '0px',
						inviewRightOffset: '0px',
						autoplayStickyAdOnly: true,
					},
					b4u_bridtv_on_ready
				);
				//	optiload.$("#"+b4u_bridtv_conf.div_id).hide();
			}
		}
	});
}

function insertEvoBridPlayerHomeCategorie() {
	var evoSlotVideo = optiload.$("div[data-adunitid='8']");

	if (optiload.fn.isMobile()) {
		evoSlotVideo = optiload.$("div[data-adunitid='9']");
	}

	console.log('[BRIDTV] start');

	//load script
	// var sBrid = document.createElement("script");
	// sBrid.type = "text/javascript";
	// sBrid.src = "//services.brid.tv/player/build/brid.min.js";
	// var node = document.getElementsByTagName("script")[0];
	// //@ts-ignore
	// node.parentNode.insertBefore(sBrid, node);
	optiload.fn.utils.loadJs('https://services.brid.tv/player/build/brid.min.js', function() {
		for (var i = 0; i < evoSlotVideo.length; i++) {
			optiload.$(evoSlotVideo[i]).append('<div id="Brid_29506692_' + i + '" class="brid" style="z-index:10000000000;width:480;height:270;"></div>');

			//config
			var adErrorFired = false;

			var b4u_bridtv_conf = {
				div_id: 'Brid_29506692_' + i,
				player_id: 24871,
				player_width: 16,
				player_height: 9,
				end_sticky_timeout: 200,
				video_id: 'https://cdn.evolutionadv.it/ideegreen/ideegreen.json',
				passback_sync: false,
				passback_width_px: 300,
				passback_height_px: 250,
				passback_ad_unit: '/5966054/test/test',
			};

			var evoArVideoSrc = [];
			optiload.$.getJSON(b4u_bridtv_conf.video_id, function(data, textStatus, jqXHR) {
				evoArVideoSrc = data;
				evoArVideoSrc.sort(function(a, b) {
					return 0.5 - Math.random();
				});
				videoEvoStart();
			});

			// -------------------------------------------- AUXILIARY

			function b4u_brdtv_passback() {
				// config
				console.log('[BRIDTV] passback Async');
				var w = b4u_bridtv_conf.passback_width_px;
				var h = b4u_bridtv_conf.passback_height_px;
				var ad_unit = b4u_bridtv_conf.passback_ad_unit;
				var el = window.document.getElementById(b4u_bridtv_conf.div_id);
				el.innerHTML = '';
				el.style.display = 'none';

				// div
				var d = document.createElement('div');
				d.setAttribute('data-glade', '');
				d.setAttribute('data-ad-unit-path', ad_unit);
				d.setAttribute('width', w);
				d.setAttribute('height', h);
				d.setAttribute('style', 'width: ' + w + 'px; height: ' + h + 'px; position: relative; margin: 0px auto;');
				b4u_bridtv_insert_after(d, el);

				// script
				var s = document.createElement('script');
				s.setAttribute('async', 'async');
				s.src = 'https://securepubads.g.doubleclick.net/static/glade.js';
				b4u_bridtv_insert_after(s, el);

				// destroy "X"
				optiload.$('.brid-close').remove();

				console.log('[BRIDTV] passback Async rendered');
			}

			function b4u_brdtv_passback_sync() {
				// config
				console.log('[BRIDTV] passback sync');
				var w = b4u_bridtv_conf.passback_width_px;
				var h = b4u_bridtv_conf.passback_height_px;
				var ad_unit = b4u_bridtv_conf.passback_ad_unit;
				var el = document.getElementById(b4u_bridtv_conf.div_id);
				var id = b4u_bridtv_conf.div_id + '_passback_sync';
				var code = "googletag.pubads().definePassback('" + ad_unit + "', [" + w + ', ' + h + ']).display();';
				el.innerHTML = '';
				el.style.display = 'none';

				// iframe
				var iframe = document.createElement('iframe');
				iframe.setAttribute('id', id);
				iframe.setAttribute('frameBorder', '0');
				iframe.setAttribute('scrolling', 'no');
				iframe.setAttribute('width', w);
				iframe.setAttribute('height', h);
				iframe.setAttribute('marginwidth', '0');
				iframe.setAttribute('marginheight', '0');
				iframe.setAttribute('vspace', '0');
				iframe.setAttribute('hspace', '0');
				iframe.setAttribute('style', 'width:' + w + 'px;height:' + h + 'px;position:relative;');

				// javascript
				iframe.src = "JavaScript:''";
				b4u_bridtv_insert_after(iframe, el);
				code = "<p style='margin:0;padding:0;'></p><scr" + "ipt type='text/javascript'>var inDapIF = true </scr" + 'ipt><sc' + "ript src='https://www.googletagservices.com/tag/js/gpt.js'>" + code + '</scr' + 'ipt>';
				var ifr = window.document.getElementById(id);
				ifr.contentWindow.document.open('text/html', 'replace');
				ifr.contentWindow.document.write(code);
				ifr.contentWindow.document.close();

				// destroy "X"
				optiload.$('.brid-close').remove();

				console.log('[BRIDTV] passback sync rendered');
			}

			function b4u_bridtv_insert_after(newNode, referenceNode) {
				referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
			}

			// -------------------------------------------- EVENTS

			function b4u_bridtv_on_request_ad() {
				console.log('[BRIDTV] request ad');
				//optiload.$("#"+b4u_bridtv_conf.div_id).hide();
			}
			function b4u_bridtv_on_ad_start() {
				console.log('[BRIDTV] ad start');
				optiload.$('#' + b4u_bridtv_conf.div_id).show();
			}
			function b4u_bridtv_on_vpaid_start() {
				console.log('[BRIDTV] vpaid start');
				optiload.$('#' + b4u_bridtv_conf.div_id).show();
			}
			function b4u_bridtv_on_adImpression() {
				console.log('[BRIDTV] adImpression');
				optiload.$('#' + b4u_bridtv_conf.div_id).show();
				/*			setTimeout(function () {
					var s = document.createElement("script"),
					el = document.getElementsByTagName("script")[0];
					s.src = "https://ads.viralize.tv/display/?zid=AADXC3cOg2C2yMGm"; el.setAttribute('data-wid','auto');el.setAttribute('type','text/javascript');
					el.parentNode.insertBefore(s, el);
				},10000)(); */
			}
			function b4u_bridtv_on_adEnd() {
				if (!adErrorFired) {
					console.log('[BRIDTV] ad End ');

					/*
				//	setTimeout(function(){ (b4u_bridtv_conf.passback_sync)? b4u_brdtv_passback_sync() : b4u_brdtv_passback(); }, b4u_bridtv_conf.end_sticky_timeout+100);
					var s = document.createElement("script"),
					el = document.getElementsByTagName("script")[0];
					s.src = "https://ads.viralize.tv/display/?zid=AADXC3cOg2C2yMGm"; el.setAttribute('data-wid','auto');el.setAttribute('type','text/javascript');
					el.parentNode.insertBefore(s, el);
					*/
				}
			}
			function b4u_bridtv_on_error() {
				console.log('[BRIDTV] ad error');
				optiload.$('#' + b4u_bridtv_conf.div_id).pause();
				//	optiload.$("#"+b4u_bridtv_conf.div_id).remove();
				//	$bp(b4u_bridtv_conf.div_id).destroy();
				/*
				adErrorFired = true;
				//	setTimeout(function(){ (b4u_bridtv_conf.passback_sync)? b4u_brdtv_passback_sync() : b4u_brdtv_passback(); }, b4u_bridtv_conf.end_sticky_timeout+100);
					var s = document.createElement("script"),
					el = document.getElementsByTagName("script")[0];
					s.src = "https://ads.viralize.tv/display/?zid=AADXC3cOg2C2yMGm"; el.setAttribute('data-wid','auto');el.setAttribute('type','text/javascript');
					el.parentNode.insertBefore(s, el);
					*/
			}
			function b4u_bridtv_on_start() {
				console.log('[BRIDTV] Contenuto Start ');
				$bp('#' + b4u_bridtv_conf.div_id).SlideInView.forceHide();
				setTimeout(function() {
					$bp('#' + b4u_bridtv_conf.div_id).pause();
				}, 7000);
			}

			function b4u_bridtv_on_ready() {
				console.log('[BRIDTV] player ready');
				$bp(b4u_bridtv_conf.div_id).add('requestAd', b4u_bridtv_on_request_ad);
				$bp(b4u_bridtv_conf.div_id).add('adStart', b4u_bridtv_on_ad_start);
				$bp(b4u_bridtv_conf.div_id).add('vpaidStart', b4u_bridtv_on_vpaid_start);
				$bp(b4u_bridtv_conf.div_id).add('adImpression', b4u_bridtv_on_adImpression);
				$bp(b4u_bridtv_conf.div_id).add('adError', b4u_bridtv_on_error);
				$bp(b4u_bridtv_conf.div_id).add('adEnd', b4u_bridtv_on_adEnd);
				$bp(b4u_bridtv_conf.div_id).add('start', b4u_bridtv_on_start);

				//optiload.$("#"+b4u_bridtv_conf.div_id).hide();
			}

			// -------------------------------------------- INIT
			function videoEvoStart() {
				$bp(
					b4u_bridtv_conf.div_id.toString(),
					{
						id: b4u_bridtv_conf.player_id.toString(),
						width: b4u_bridtv_conf.player_width.toString(),
						height: b4u_bridtv_conf.player_height.toString(),
						video: {
							source: {
								src: evoArVideoSrc[0],
							},
						},
						inviewBottomOffset: '0px',
						inviewRightOffset: '0px',
						prebid_timeout: 5000,
						prebid_variable: 'evopbjs',
						a9_timeout: 5000,
						autoplayStickyAdOnly: true,
					},
					b4u_bridtv_on_ready
				);
				//	optiload.$("#"+b4u_bridtv_conf.div_id).hide();
			}
		}
	});
}
