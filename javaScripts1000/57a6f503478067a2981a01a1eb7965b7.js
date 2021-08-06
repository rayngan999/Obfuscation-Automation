(function( screen, window,debug ) {
	
	var $thm = {
		_$thm:  window.$thm,
		_debug: debug,
		_body: document.getElementsByTagName('body')[0],
		adRenderQueue:{},
		deviceBreakpoints: IDG.DEVICE.breakpoints,
		deviceClass:'unknown',
		deviceClassAdSizes:undefined,
		useBusinessData:false,
		ip_cookie:'',
		ip_business_data:'',
        welcomeSeen: $.cookie('welcomeSeen'),
        ads:function(){
            let ads= {
                homepage: {
                    desktop: ["gpt-superstitial", "gpt-skin", "gpt-leaderboard", "gpt-showcase", "gpt-custom-promo", "interscroller", "gpt_custom_promo_2"],
                    tablet: ["gpt-leaderboard", "gpt-showcase", "interscroller", "gpt_custom_promo_2"],
                    mobile: ["gpt-leaderboard", "gpt-leaderboardmobile", "gpt-showcase", "gpt-showcasemobile", "interscroller", "gpt_custom_promo_2"]
                },
                article: {
                    desktop: ["gpt-superstitial", "gpt-leaderboard", "gpt-showcase", "inread","imu2","imu3", "imu4", "gpt_custom_promo_2"],
                    tablet: ["gpt-leaderboard", "gpt-showcase", "inread","topimu","imu2","imu3", "imu4", "gpt_custom_promo_2"],
                    mobile: ["gpt-leaderboard", "gpt-leaderboardmobile", "gpt-showcase", "gpt-showcasemobile", "inread","imu2","imu3", "imu4", "gpt_custom_promo_2"]
                },
                index: {
                    desktop: ["gpt-superstitial", "gpt-skin", "gpt-leaderboard", "gpt-showcase", "gpt-showcase-2", "gpt-custom-promo", "gpt-infunnel", "gpt_custom_promo_2"],
                    tablet: ["gpt-leaderboard", "gpt-showcase", "gpt-showcase-2", "gpt-custom-promo", "gpt_custom_promo_2"],
                    mobile: ["gpt-leaderboard", "gpt-leaderboardmobile", "gpt-showcase", "gpt-showcase-2", "gpt_custom_promo_2"]
                },
                tentpole: {
                    desktop: ["gpt-superstitial", "gpt-skin", "gpt-showcase","imu2", "gpt_custom_promo_2"],
                    tablet: ["gpt-superstitial", "imu2", "gpt_custom_promo_2"],
                    mobile: ["imu2", "gpt_custom_promo_2"]
                },
                video: {
                    desktop: ["gpt-skin", "gpt-leaderboard", "gpt_custom_promo_2"],
                    tablet: ["gpt_custom_promo_2"],
                    mobile: ["gpt-showcasemobile", "gpt_custom_promo_2"]
                },
                video_index: {
                    desktop: ["gpt-superstitial", "gpt_custom_promo_2"],
                    tablet: ["gpt_custom_promo_2"],
                    mobile: ["gpt-showcasemobile", "gpt_custom_promo_2"]
                },
                video_player: {
                    desktop: ["gpt-skin", "gpt_custom_promo_2"],
                    tablet: ["gpt_custom_promo_2"],
                    mobile: ["gpt-showcasemobile", "gpt_custom_promo_2"]
                },
                slideshow: {
                    desktop: ["gpt-superstitial", "gpt-leaderboard", "gpt-showcase", "small_leaderboard", "gpt_custom_promo_2"],
                    tablet: ["gpt-leaderboard","imu2","imu3", "imu4","imu5","imu6", "gpt_custom_promo_2"],
                    mobile: ["imu2","imu3", "imu4","imu5","imu6", "gpt_custom_promo_2"]
                },
                search: {
                    desktop: ["gpt-showcase", "gpt-showcase-2", "gpt-custom-promo"],
                    tablet: ["gpt-showcase", "gpt-showcase-2", "gpt-custom-promo"],
                    mobile: ["gpt-showcase", "gpt-showcasemobile"]
                },
                resources: {
                    desktop: ["gpt-superstitial", "gpt-leaderboard"],
                    tablet: ["gpt-leaderboard"],
                    mobile: ["gpt-showcasemobile"]
                },
                podcast: {
                    desktop: ["gpt-leaderboard", "gpt_custom_promo_2"],
                    tablet: ["gpt-leaderboard", "gpt_custom_promo_2"],
                    mobile: ["gpt-leaderboard,gpt-leaderboardmobile", "gpt_custom_promo_2"]
                }
            };
            if (IDG.GPT.isSharedHomepage) {            	
        		ads.homepage.desktop=["gpt-overlay", "gpt-skin", "oc_ad_2","oc_ad_3","oc_ad_4"];
        		ads.homepage.tablet=["oc_ad_2","oc_ad_3","oc_ad_4"];
        		ads.homepage.mobile=["oc_ad_2","oc_ad_3","oc_ad_4"];
            }
            if (IDG.GPT.isNewHeader) {
            	ads.homepage.desktop.push("oc_ad_1");
            	ads.homepage.tablet.push("oc_ad_1");
            	ads.homepage.mobile.push("oc_ad_1");
            	
            	ads.article.desktop.push("oc_ad_1");
            	ads.article.tablet.push("oc_ad_1");
            	ads.article.mobile.push("oc_ad_1");
            	
            	ads.index.desktop.push("oc_ad_1");
            	ads.index.tablet.push("oc_ad_1");
            	ads.index.mobile.push("oc_ad_1");
            	
            	ads.slideshow.desktop.push("oc_ad_1");
            	ads.slideshow.tablet.push("oc_ad_1");
            	ads.slideshow.mobile.push("oc_ad_1");
            	
            	ads.search.desktop.push("oc_ad_1");
            	ads.search.tablet.push("oc_ad_1");
            	ads.search.mobile.push("oc_ad_1");
            	
            	ads.resources.desktop.push("oc_ad_1");
            	ads.resources.tablet.push("oc_ad_1");
            	ads.resources.mobile.push("oc_ad_1");
            }
            return ads;
        },
        pos_values:function(){
            let pos_values= {
                gpt_leaderboard: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                gpt_showcase: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                topimu: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                imu2: {
                    desktop: "BTF1",
                    tablet: "BTF1",
                    mobile: "BTF1"
                },
                imu3: {
                    desktop: "BTF2",
                    tablet: "BTF2",
                    mobile: "BTF2"
                },
                imu4: {
                    desktop: "BTF3",
                    tablet: "BTF3",
                    mobile: "BTF3"
                },
                gpt_leaderboardmobile: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                gpt_showcase_2: {
                    desktop: "BTF1",
                    tablet: "BTF1",
                    mobile: "BTF1"
                },
                gpt_showcasemobile: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                gpt_custom_promo: {
                    desktop: "BTF1",
                    tablet: "BTF1",
                    mobile: "BTF1"
                },
                oc_ad_2: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                oc_ad_3: {
                    desktop: "BTF1",
                    tablet: "BTF1",
                    mobile: "BTF1"
                },
                oc_ad_4: {
                    desktop: "BTF2",
                    tablet: "BTF2",
                    mobile: "BTF2"
                },
                interscroller: {
                    desktop: "interscroller",
                    tablet: "interscroller",
                    mobile: "interscroller"
                },
                oc_ad_1: {
                	desktop: "ATF1",
	                tablet: "ATF1",
	                mobile: "ATF1"
	            },
				gpt_custom_promo_2: {
                	desktop: "ATF1",
	                tablet: "ATF1",
	                mobile: "ATF1"
	            }
            };
            return pos_values;
        },
		deviceWidth:function() {return document.documentElement.clientWidth > 0 ? document.documentElement.clientWidth : window.innerWidth;},
		deviceHeight:function() {return document.documentElement.clientHeight > 0 ? document.documentElement.clientHeight : window.innerHeight;},
		deviceOrientation: function(){return this.deviceWidth > this.deviceHeight? 'landscape':'portrait';},
		devicePixelRatio: function(){return window.devicePixelRatio !== undefined?window.devicePixelRatio:1},
		deviceWidthAtLeast:function(w){
			if(window.matchMedia != undefined){
				return window.matchMedia("(min-width: "+w+"px)").matches;
			} else{
				return this.deviceWidth() >= w;
			}
		},
		deviceWidthLessThan:function(w) {
			if (window.matchMedia != undefined) {
				return window.matchMedia("(max-width: " + (w-1) + "px)").matches;
			}
			else {
				return this.deviceWidth() < w;
			}
		},
		isZoomedOut:function(){return this.devicePixelRatio() < 1},
		isZoomedIn:function(){return this.devicePixelRatio() > 1},
		premiumAdOptStatus: undefined,
		debug: function(msg,force){
			var doDebug = force || this._debug;
			if(doDebug && window.console){
				typeof msg==='object'?window.console.dir(msg):window.console.log(msg);
			};
		},
		isMSIE: /*@cc_on!@*/false,
		MSIEVersion: function(){
			if(isMSIE){
				var appVersion = navigator.appVersion.split("MSIE");
				return appVersion.length >1 ? appVersion[1]:undefined;
			}
			return undefined;
		},
		noConflict: function(){
			// jquery style noConflict calls to free namespace/
			if ( window.$thm === this ) {
				//replace global $thm with old value
				window.$thm = _$thm;
				return this;
			};
		},
		setDeviceClass:function(width){
			if(width > this.deviceBreakpoints.superwide){
				return "superwide desktop";
			} else if(width >this.deviceBreakpoints.desktop){
				//also tablet landscape
				return "desktop";
			} else if(width >this.deviceBreakpoints.mobile){
				return "tablet";
			} else {
				return "mobile";
			}
		},
		adSlots:"",
		setFreqCapCookie:function() {
			var visitTime = new Date();
			visitTime.setTime(visitTime.getTime()+1000*60*60*12);
	      	$.cookie('welcomeSeen', 'true', { expires: visitTime, path: '/' });
		},
		setDeviceClassAdSizes:function(width){
			if(this._debug){
				this.debug("adUnitId: "+ IDG.GPT.unitName);
			}
			//TODO: targeting is set in document-head.jsp
			if (width > this.deviceBreakpoints.desktop) {
				// TABLET LANDSCAPE DESKTOP SUPERWIDE
				if (global_ShowHero) {
					try {
						IDG.GPT.addSlot("interscroller", [[1,1]]);
						IDG.GPT.addSlot("gpt-hero", [[1,1]]);
						IDG.GPT.addSlot("gpt-logo", [[1,1]]);
						IDG.GPT.addSlot("gpt-showcase", [[300,250]]);
						IDG.GPT.addSlot("topimu", [[300,250]]);
						IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
					}
					catch (e) {
						console.log("Error with IDG.GPT: " + e);
					}
				} else {
					try {
						//IDG.GPT.addSlot("gpt-showcase", [[300,250],[300,600]]);
						//IDG.GPT.isSlideshow ? IDG.GPT.addSlot("gpt-showcase", [300,250]) : IDG.GPT.addSlot("gpt-showcase", [[300,600],[300,250]]);
						if (IDG.GPT.isSlideshow) {
							if (window.matchMedia("screen and (min-width: 930px)").matches) {
								IDG.GPT.addSlot("gpt-showcase", [[300,250]]);
								IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
							}
							if (window.matchMedia("screen and (min-width: 1078px)").matches) {
								IDG.GPT.addSlot("small_leaderboard", [[728,90]]);
							}
						}
						if (!IDG.GPT.isSlideshow) {
							IDG.GPT.addSlot("topimu", [[300,250],[300,600],[120,600],[160,600]]);
							IDG.GPT.addSlot("gpt-showcase", [[300,600],[300,250],[120,600],[160,600]]);
							IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
						}
					}
					catch (e) {
						console.log("Error with IDG.GPT: " + e);
					}
				}
				if (global_ShowSuper) {
					try {
						//IDGMPM-15684 - if welcome ad frequency cap is in place, only add gpt-superstitial if cookie indicates 
						//it hasn't been seen in the past 12 hours
						if (IDG.GPT.welcomeFreqCap === true) {
							if (typeof $thm.welcomeSeen === 'undefined') {
								$thm.setFreqCapCookie();
						      	IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						      	//console.log("SHOWED WELCOME AD");
							}
							else {
								//console.log('SUPPRESS WELCOME AD');
							}
						}
						else {
							//console.log("NO WELCOME AD CAP");
							IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						}
					}
					catch (e) {
						console.log("Error with IDG.GPT: " + e);
					}
				}
				try {
					//IDG.GPT.addSlot("gpt-leaderboard", [[728,90],[970,90],[970,250],[768,66]]);
					//IDG.GPT.isSlideshow ? IDG.GPT.addSlot("gpt-leaderboard", [[970,90],[970,250],[728,90],[970,66],[970,55]]) : IDG.GPT.addSlot("gpt-leaderboard", [[728,90],[970,90],[970,250],[768,66]]);
					if (IDG.GPT.isSlideshow) {
						if (window.matchMedia("screen and (min-width: 970px)").matches) {
							IDG.GPT.addSlot("gpt-leaderboard", [[970,90],[970,250],[728,90],[970,66],[970,55]]);
							if (window.matchMedia("screen and (min-width: 1078px)").matches) {
								IDG.GPT.addSlot("small_leaderboard", [[728,90]]);
							}
						} else {
							IDG.GPT.addSlot("gpt-leaderboard", [[728,90]]); //less than 970px
						}
					}
					if (!IDG.GPT.isSlideshow) {
						IDG.GPT.addSlot("gpt-leaderboard", [[728,90],[970,90],[970,250],[768,66]]);
						IDG.GPT.addSlot("gpt-leaderboard-2", [[728,90],[768,66]]);
						IDG.GPT.addSlot("gpt-showcase-2", [[300,250]]);
	                    IDG.GPT.addSlot("gpt-crawl", [[1,3]]);
						IDG.GPT.addSlot("gpt-peek", [[596,120]]);
						IDG.GPT.addSlot("gpt-custom-promo", [[300,250],[300,600]]);
						IDG.GPT.addSlot("gpt-sponsored-download", [[610,143]]);
						IDG.GPT.addSlot("gpt-infunnel", [[878,185]]);
						IDG.GPT.addSlot("gpt-hero", [[1,1]]);
						IDG.GPT.addSlot("gpt-skin", [[1,1]]);
						IDG.GPT.addSlot("inread", [[1,1],[2,1]]);
						IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
					}
					if (IDG.GPT.isSlideshow) {
						if (IDG.GPT.welcomeFreqCap === true) {
							if (typeof $thm.welcomeSeen === 'undefined') {
								$thm.setFreqCapCookie();
						      	IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						      	//console.log("SHOWED WELCOME AD");
							}
							/*else {
								console.log('SUPPRESS WELCOME AD');
							}*/
						}
						else {
							//console.log("NO WELCOME AD CAP");
							IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						}
					}
					if (IDG.GPT.isNewHeader) {
						IDG.GPT.addSlot("oc_ad_1", [[7,7]]);
					}
					if (IDG.GPT.isSharedHomepage) {
						IDG.GPT.addSlot("oc_ad_2", [[970,90],[970,250],[728,90]]);
						IDG.GPT.addSlot("oc_ad_3", [[970,90],[970,250],[728,90],[300,250]]);
						IDG.GPT.addSlot("oc_ad_4", [[970,90],[970,250],[728,90],[300,250]]);
					}
				}
				catch (e) {
					console.log("Error with IDG.GPT: " + e);
				}
			} else if (width >= this.deviceBreakpoints.tablet) {
				// TABLET PORTRAIT
				if (global_ShowHero) {
					try {
						IDG.GPT.addSlot("interscroller", [[1,1]]);
						IDG.GPT.addSlot("gpt-hero", [[1,1]]);
						IDG.GPT.addSlot("gpt-logo", [[1,1]]);
						IDG.GPT.addSlot("gpt-showcase", [[300,250]]);
						IDG.GPT.addSlot("topimu", [[300,250]]);
						IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
						
					}
					catch (e) {
						console.log("Error with IDG.GPT: " + e);
					}
				} else {
					try {
						//IDG.GPT.addSlot("gpt-showcase", [[300,250],[300,600]]);
						//IDG.GPT.isSlideshow ? IDG.GPT.addSlot("gpt-showcase", [300,250]) : IDG.GPT.addSlot("gpt-showcase", [[300,600],[300,250]]);
						if (IDG.GPT.isSlideshow) {
							if (window.matchMedia("screen and (min-width: 930px)").matches) {
								IDG.GPT.addSlot("gpt-showcase", [[300,250]]);
								IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
							}
						}
						if (!IDG.GPT.isSlideshow) {
							IDG.GPT.addSlot("topimu", [[300,250],[300,600],[120,600],[160,600]]);
							IDG.GPT.addSlot("gpt-showcase", [[300,600],[300,250],[120,600],[160,600]]);
							IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
						}
					}
					catch (e) {
						console.log("Error with IDG.GPT: " + e);
					}
				}
				if (global_ShowSuper) {
					try {
						if (IDG.GPT.welcomeFreqCap === true) {
							if (typeof $thm.welcomeSeen === 'undefined') {
								$thm.setFreqCapCookie();
						      	IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						      	//console.log("SHOWED WELCOME AD");
							}
							else {
								//console.log('SUPPRESS WELCOME AD');
							}
						}
						else {
							//console.log("NO WELCOME AD CAP");
							IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						}
					}
					catch (e) {
						console.log("Error with IDG.GPT: " + e);
					}
				}
				try {
					//IDG.GPT.addSlot("gpt-leaderboard", [[728,90],[768,66]]);
					IDG.GPT.isSlideshow ? IDG.GPT.addSlot("gpt-leaderboard", [[728,90],[468,60]]) : IDG.GPT.addSlot("gpt-leaderboard", [[728,90],[768,66],[468,60]]);
					if (IDG.GPT.isSlideshow) {
						if (window.matchMedia("screen and (min-width: 930px)").matches) {
							IDG.GPT.addSlot("gpt-showcase", [[300,250]]);
						}
					}
					if (!IDG.GPT.isSlideshow) {
						IDG.GPT.addSlot("gpt-leaderboard-2", [[728,90],[768,66],[468,60]]);
						IDG.GPT.addSlot("gpt-showcase-2", [[300,250]]);
						IDG.GPT.addSlot("gpt-crawl", [[1,3]]);
						IDG.GPT.addSlot("gpt-peek", [[596,120]]);
						IDG.GPT.addSlot("gpt-custom-promo", [[300,250],[300,600]]);
						IDG.GPT.addSlot("gpt-sponsored-download", [[610,143]]);
						IDG.GPT.addSlot("gpt-infunnel", [[878,185]]);
						IDG.GPT.addSlot("gpt-hero", [[1,1]]);
						IDG.GPT.addSlot("gpt-skin", [[1,1]]);
						IDG.GPT.addSlot("inread", [[1,1],[2,1]]);
						IDG.GPT.addSlot("gpt-showcase", [[300,600],[300,250],[120,600],[160,600]]);
						IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
					}
					if (IDG.GPT.isSlideshow) {
						if (IDG.GPT.welcomeFreqCap === true) {
							if (typeof $thm.welcomeSeen === 'undefined') {
								$thm.setFreqCapCookie();
						      	IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						      	//console.log("SHOWED WELCOME AD");
							}
							else {
								//console.log('SUPPRESS WELCOME AD');
							}
						}
						else {
							//console.log("NO WELCOME AD CAP");
							IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						}
					}
					if (IDG.GPT.isNewHeader) {
						IDG.GPT.addSlot("oc_ad_1", [[7,7]]);
					}
					if (IDG.GPT.isSharedHomepage) {
						IDG.GPT.addSlot("oc_ad_2", [[728,90],[468,60]]);
						IDG.GPT.addSlot("oc_ad_3", [[728,90],[468,60],[300,250]]);
						IDG.GPT.addSlot("oc_ad_4", [[728,90],[468,60],[300,250]]);
					}
				}
				catch (e) {
					console.log("Error with IDG.GPT: " + e);
				}
			} else if (width > this.deviceBreakpoints.mobile){
				if (global_ShowHero) {
					try {
						IDG.GPT.addSlot("interscroller", [[1,1]]);
						IDG.GPT.addSlot("gpt-hero", [[1,1]]);
						IDG.GPT.addSlot("gpt-logo", [[1,1]]);
						IDG.GPT.addSlot("gpt-showcase", [[300,250]]); // need to addService(googletag.companionAds())
						IDG.GPT.addSlot("topimu", [[300,250]]); // need to addService(googletag.companionAds())
						IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
					}
					catch (e) {
						console.log("Error with IDG.GPT: " + e);
					}
				} else {
					try {
						//IDG.GPT.addSlot("gpt-showcase", [[300,250],[300,600]]); // need to addService(googletag.companionAds())
						//IDG.GPT.isSlideshow ? IDG.GPT.addSlot("gpt-showcase", [300,250]) : IDG.GPT.addSlot("gpt-showcase", [[300,600],[300,250]]);
						if (!IDG.GPT.isSlideshow) {
							IDG.GPT.addSlot("topimu", [[300,250],[300,600],[120,600],[160,600]]);
							IDG.GPT.addSlot("gpt-showcase", [[300,600],[300,250],[120,600],[160,600]]);
						}
					}
					catch (e) {
						console.log("Error with IDG.GPT: " + e);
					}	
				}
				if (global_ShowSuper) {
					try {
						if (IDG.GPT.welcomeFreqCap === true) {
							if (typeof $thm.welcomeSeen === 'undefined') {
								$thm.setFreqCapCookie();
						      	IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						      	//console.log("SHOWED WELCOME AD");
							}
							else {
								//console.log('SUPPRESS WELCOME AD');
							}
						}
						else {
							//console.log("NO WELCOME AD CAP");
							IDG.GPT.addSlot("gpt-superstitial", [[640,480]]);
						}
					}
					catch (e) {
						console.log("Error with IDG.GPT: " + e);
					}
				}
				try {
					if (!IDG.GPT.isSlideshow) {
						IDG.GPT.addSlot("gpt-leaderboard", [[300,50],[320,50]]);
						IDG.GPT.addSlot("gpt-showcase", [[300,600],[300,250],[120,600],[160,600]]);
						IDG.GPT.addSlot("gpt-showcase-2", [[300,250]]);
						IDG.GPT.addSlot("gpt-crawl", [[1,3]]);
						IDG.GPT.addSlot("gpt-custom-promo", [[300,250],[300,600]]);
						IDG.GPT.addSlot("gpt-sponsored-download", [[610,143]]);
						IDG.GPT.addSlot("inread", [[1,1],[2,1]]);
						IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
					}
					if (IDG.GPT.isNewHeader) {
						IDG.GPT.addSlot("oc_ad_1", [[7,7]]);
					}
				}
				catch (e) {
					console.log("Error with IDG.GPT: " + e);
				}
			} else {
				//SMALL MOBILE
				try {
					if (!IDG.GPT.isSlideshow) {
						IDG.GPT.addSlot("interscroller", [[1,1]]);
						IDG.GPT.addSlot("gpt-leaderboardmobile", [[300,50],[320,50]]); // has clearTargeting() before addService
						IDG.GPT.addSlot("gpt-leaderboard-2", [[300,50],[320,50]]); // has clearTargeting() before addService
						IDG.GPT.addSlot("gpt-crawl", [[1,3]]);
						IDG.GPT.addSlot("gpt-showcasemobile", [[300,250],[300,50],[320,50]]);
						IDG.GPT.addSlot("gpt-custom-promo", [[300,250]]);
						IDG.GPT.addSlot("inread", [[1,1],[2,1]]);
						IDG.GPT.addSlot("gpt_custom_promo_2", [[1,3]]);
					}
					if (IDG.GPT.isNewHeader) {
						IDG.GPT.addSlot("oc_ad_1", [[7,7]]);
					}
					if (IDG.GPT.isSharedHomepage) {
						IDG.GPT.addSlot("oc_ad_2", [[300,250],[300,50],[320,50]]);
						IDG.GPT.addSlot("oc_ad_3", [[300,250],[300,50],[320,50]]);
						IDG.GPT.addSlot("oc_ad_4", [[300,250],[300,50],[320,50]]);
					}
				}
				catch (e) {
					console.log("Error with IDG.GPT: " + e);
				}
			}
		},
		ord: null,
		getOrd: function(){
			return this.ord;
		},
		fpvKey: null,
		getFpvKey: function() {
			return this.fpvKey;
		},
		setFpvKey:function(){
			var c = this.readCookie('aiia');
			if (c == undefined || c == "") {
				this.fpvKey = ";c=AIIA";
				var expires = new Date (new Date().getTime()+86400000);//1day
				this.writeCookie('aiia', 'true', expires, this.cookieDomain);
			} else {
				this.fpvKey = "";
			}
		},
		isMobile:function(){
			return this.deviceClass =='mobile';
		},
		readRawCookie: function(name){
			var cookies = document.cookies;
			if(navigator.cookieEnabled&&cookies!=''){
				var strAll = document.cookie;
				var i1 = strAll.indexOf(name);
				if(i1!=-1){
					// skip name and '='
					i1 = i1+name.length+1;
					i2 = strAll.indexOf(';', i1);
					if(i2==-1) i2 = strAll.length;
					return strAll.substring(i1, i2);
				}
			}
			return "";
		},
		readCookie:function(name){
			return unescape(this.readRawCookie(name));
		},
		deleteCookie: function(name) {
			if(navigator.cookieEnabled){
				var d = new Date();
				d.setDate(d.getDate()-30);
				document.cookie=name+"=;expires="+d.toGMTString()+";domain="+domain+";path=/";
			}
		},
		writeRawCookie: function(name, value, expires, domain) { 
			if(navigator.cookieEnabled){
				var exp = (expires instanceof Date) ?expires.toGMTString():expires;
				document.cookie = name+"="+value+";expires="+exp+";domain="+domain+";path=/";
			}
		},
		writeCookie: function(name, value, expires, domain){
			this.writeRawCookie(name, value, expires, domain);
		},
		setDomain:function(){
			this.domain = window.location.hostname.match(/pcworld\.com|macworld\.com|techhive\.com/);
			this.cookieDomain = '.'+this.domain;
			
		},
		writeLastVisit:function(){
			var midnight = new Date();
			midnight.setHours(0);
			midnight.setMinutes(0);
			midnight.setSeconds(0);
			var now = new Date();
			var minutes = (parseInt(now.getMinutes()/15) * 15) % 60;
			now.setSeconds(0);
			now.setMinutes(minutes);
			var time = now.getTime()-midnight.getTime();
			var expires = new Date ( now.getTime()+ 86400000);//1 Day
			this.writeCookie('lv', time, expires, this.cookieDomain);
		},
		setPremiumAdOptStatus:function(){
			var c = this.readCookie('mwInsider');
			if (c != undefined && c != "" && typeof c == "string"){
				c = c.replace(/\"/g,"");
				return (c.charAt(c.length - 1) != '1');
			}
			
			return false;
		},
		qsToObject: function (qs) {
			// http://techtaunt.wordpress.com/2011/07/02/querystring-to-json/ 
	        var o = {};
	        qs.replace(
	            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
	            function ($0, $1, $2, $3) { o[$1] = $3; }
	            );
	        return o;
	    },
	    setIDGTargetings: function() {
			try {
				// set targeting to c, referrer, browser, squery, nlsource, insiderauth, device, env and mobile
				if (this.getFpvKey() != "") {
					IDG.GPT.addTarget("c", "AIIA");
				}
				
				IDG.GPT.addTarget("device", this.deviceClass);
			
			} catch(e) {
				//console.log(e);
			}
		},
	    logPlEvent: function(data) {
			this.ip_cookie=$thm.readCookie("idg_client_ip");
			if (data.hasOwnProperty("b") && data.hasOwnProperty("t") && data.hasOwnProperty("id") && data.hasOwnProperty("e")) {
	        	var qs = [];
	    		for (var key in data) {
	    			qs.push(key+"="+data[key]);
	    		}
	        	var pl = new Image(1, 1);
	            pl.onerror = pl.onload = function () {
	              pl.onerror = pl.onload = null;
	            };
                if (!this.ip_cookie) {
                    this.getIpAddress().then(function (result) {
                        document.cookie ="idg_client_ip"+"="+result["ip"];
                        this.ip_cookie = result["ip"];
                        $thm.logBusinessName(this.ip_cookie, pl, qs)
                    }, function (err) {
                        console.log("Error getting ip address: " + err);
                        pl.src = ["//pixel.staticworld.net/pixel.gif?" + qs.join("&") + "&ts=", (new Date()).getTime()].join('');
                    });
				}
				else {
                	$thm.logBusinessName(this.ip_cookie, pl, qs);
				}
	        }
	    },
		logIpAddress: function(data, pl, qs){
            pl.src = ["//pixel.staticworld.net/pixel.gif?" + qs.join("&") + "&ts=", (new Date()).getTime()].join('') + "&ip=" + data;
		},
        logBusinessName: function(data,pl, qs){
            if (this.useBusinessData) {
                this.getBusinessName(data).then(function (result){
                    let retVals = result["response"];
                    pl.src = ["//pixel.staticworld.net/pixel.gif?" + qs.join("&") + "&ts=", (new Date()).getTime()].join('') + "&ip=" + $thm.getFiltered(retVals["ip"]) +
                        "&dn=" + $thm.getFiltered(retVals["domain-name"]) + "&cn=" + $thm.getFiltered(retVals["company-name"])+ "&on=" + $thm.getFiltered(retVals["organization-name"]) + "&n_rt=" + $thm.getFiltered(retVals["n_rt"]);
                }, function (error){
                    console.log("Error retrieving Business Data: " + error);
                    $thm.logIpAddress(data);
                });
            }
            else {
                this.logIpAddress(this.ip_cookie, pl, qs);
            }
        },
		init: function(){
			try {
				this.adUnitId = IDG.GPT.unitName;
			}
			catch (exception) {
				console.log("Can't use IDG.GPT : " + exception);
			}
			this.deviceClass=this.setDeviceClass(this.deviceWidth());
			this.setDeviceClassAdSizes(this.deviceWidth());
			//this doesn't clean up prior settings, so it proliferates body tags onresize. must be fixed before used
			//this._body.className = this._body.className +' '+this.deviceClass+' '+this.deviceOrientation();
			this.setIDGTargetings();
			this.setDomain();
			this.setFpvKey();
			this.ord = ( new Date() ).getTime(); 
			if(this._debug){
				this.debug("deviceWidth:"+this.deviceWidth());
				this.debug("deviceHeight:"+this.deviceHeight());
				this.debug("deviceClass:"+this.deviceClass);
				this.debug("devicePixelRatio:"+this.devicePixelRatio());
				this.debug("deviceOrientation:"+this.deviceOrientation());
			}
		},
        getBusinessName: function(_ip){
            let startTime = new Date();
            return $.getJSON('//usa.cloud.netacuity.com/webservice/query?u=14c00d35-e85c-11e4-af66-0050568f6c90&ip=' + _ip + '&dbs=all&trans_id=test&json=true', function(data) {
                let endTime = new Date();
                let timeDiff = endTime - startTime;
                data["response"]["n_rt"]=timeDiff;
                return data;
            });
        },
        getIpAddress: function(){
            return $.getJSON('//api.ipify.org?format=jsonp&callback=?', function(data) {
                return data;
            });
        },
        getFiltered: function(item){
            item=item + "";
            return item.replace("?","");
        }
	};
	
	window.$thm =$thm;
	return $thm;
})(screen, window, false).init();

/* Logon namespace */
var Logon = new Object();
Logon.forumUser = $thm.readCookie('forumUser');
Logon.uname = $thm.readCookie('uname');
Logon.isValid = (Logon.forumUser && Logon.uname)?true:false;

