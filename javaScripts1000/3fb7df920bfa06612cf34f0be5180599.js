/**
 * CleoPlayer Class
 */

class CleoPlayer {
    constructor(success, siteSectionObject) {
        this.player = success.ref;
        this.siteSectionObject = siteSectionObject;
        this.options = {};
        this.adVisibilityHandlerExecuted = false;
        this.parseOptions();
        console.log(`Player #${(this.player.id_)} ready`);

        this.resize();
        this.eventsHandling();
    }

    /* Methods */
    parseOptions() {
        const options = this.getPlayerHTML().parentElement.attributes;
        this.options = {
            autoplay: options.autoplay.value == "true" ? true : false,
            disableVisibilityHandler: typeof options.disableVisibilityHandler != 'undefined'
                && options.disableVisibilityHandler.value == 'true' ? true : false,
            isMobile: this.getPlayerHTML().classList.contains('vjs-touch-enabled') ? true : false
        }
        console.log('options', this.options);
    }
    getPlayerHTML() {
        return document.querySelector(`#${(this.player.id_)}`);
    }

    resize() {
        this.getPlayerHTML().classList.add('video_player');
    }

    autoplayHandling() {
        if (this.options.autoplay) {
            this.player.muted(true);
            const promise = this.player.play();

            if (promise !== undefined) {
                promise
                    .then(() => { // Autoplay started
                        this.addBigUnmuteButton();
                    })
                    .catch((error) => { // Autoplay was prevented
                        this.player.muted(true);
                        this.player.play();

                        this.addBigUnmuteButton();
                    });
            }
        } else {
            this.player.muted(false);
        }
    }

    addBigUnmuteButton() {
        const button = this.player.addChild('MuteToggle');
        button.addClass('muteCustomButton');
        button.addClass('vjs-vol-0');

        const removeMuteButton = () => {
            if (!this.player.muted()) {
                this.player.removeChild(button);
                this.player.off(['volumechange', 'playing'], removeMuteButton);
            }
        };
        this.player.on(['volumechange', 'playing'], removeMuteButton);
    }

    eStatStartMeasure() {
        const { player } = this;
        if (!player.hasOwnProperty('eStatApi')) {
            console.log("[eStat] Not available");
            return;
        }

        if (!player.eStatApi.hasOwnProperty('startMeasure')) {
            console.log("[eStat] No startMeasure");
            return;
        }

        const estatLauncherListener = setInterval(() => {
            if (player.readyState() >= 4) {
                console.log('[eStat] Started Measure');
                clearInterval(estatLauncherListener);
                player.eStatApi.startMeasure();
            }
        }, 300, player);
    }


    adVisibilityHandler() {
        if (!this.player.FreeWheelPlugin) {
            console.log(`FreeWheel Plugin not found. No adVisibilityHandler`);
            return;
        }

        const adPlayer = this.options.isMobile ? this.player : this.player.FreeWheelPlugin.adPlayer;
        let focus = true;
        if (!adPlayer) return;

        const checkVisibility = (_visibility) => {
            if (this.getPlayerHTML().classList.contains('vjs-ad-playing')) {
                if (_visibility._state.percentage > 0.5 && focus)
                    adPlayer.play();
                else
                    adPlayer.pause();
            }
        },

            monitor = VisSense(this.getPlayerHTML()).monitor();
        monitor.on('percentagechange', (newVisibility) => checkVisibility(newVisibility));
        monitor.start();

        window.addEventListener('blur', () => {
            const { activeElement } = document;
            if (typeof activeElement != 'undefined' && activeElement != null && activeElement.tagName != 'IFRAME') {
                focus = false;
                if (this.getPlayerHTML().classList.contains('vjs-ad-playing')) adPlayer.pause();
            }
        });
        window.addEventListener('focus', () => {
            focus = true;
            checkVisibility(monitor);
        });
    }

    handleSharing() {
        if (!this.player.social || !this.player.mediainfo) {
            console.log('No social or no mediainfo');
            return;
        }
        const embedURL = `https://www.bfmtv.com/static/nxt-video/embed-playerBridge.html?video=${this.player.mediainfo.id}&account=${this.player.bcinfo.accountId}`,
            options = {
                "services": {
                    "linkedin": true,
                    "pinterest": true,
                    "tumblr": true,
                    "twitter": true,
                    "google": true,
                    "facebook": true
                },
                "offset": "",
                "description": this.player.mediainfo.description,
                "title": this.player.mediainfo.name,
                "deeplinking": false,
                "embedCode": '<div style="display: block; position: relative;"><div style="padding-top: 56.25%;"><iframe src="' + embedURL + '" allowfullscreen webkitallowfullscreen mozallowfullscreen style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px; border:none;"></iframe></div></div>',
                "url": embedURL
            };

        this.player.social(options);

    }

    eventsHandling() {
        /* EVENT : < loadedmetadata || durationchange > */
        const autoplayableListener = (event) => {
            // for live videos we want to listen for durationchange
            if ((event.type === 'durationchange' && this.player.duration() === Infinity) || event.type === 'loadedmetadata') { // Handles VOD and Live

                this.autoplayHandling();

                if (this.player.duration() !== Infinity)
                    this.handleSharing();

                this.player.off(['loadedmetadata', 'durationchange'], autoplayableListener);
            }
        };
        this.player.on(['loadedmetadata', 'durationchange'], autoplayableListener);
        /**/


        /* EVENT : < playing > */
        this.player.on('playing', () => {
            this.eStatStartMeasure();
        });
        /**/


        /* EVENT : < loadstart | playing | play > */
        const customLogEvents = ['loadstart', 'playing', 'play'],
            triggeredEvents = [];
        let allEventsTriggered = false;

        this.player.on(customLogEvents, (event) => {
            console.log('Custom Log Event', event.type);

            if (!allEventsTriggered) {
                if (triggeredEvents.indexOf(event.type) == -1)
                    triggeredEvents.push(event.type);

                if (customLogEvents.filter((elem) => triggeredEvents.indexOf(elem) > -1).length == customLogEvents.length) {
                    allEventsTriggered = true;
                    console.log('Video Viewed', triggeredEvents);
                }
            }
        })
        /* EVENT : < BEFORE AD REQUEST > */
        this.player.on('fw-before-ad-request', () => {
            if (!this.adVisibilityHandlerExecuted) {
                this.adVisibilityHandlerExecuted = true;
                if (!this.options.disableVisibilityHandler) this.adVisibilityHandler();
            }

            // Dynamisation site section FreeWheel
            const mediaType = this.player.mediainfo.duration === 0 ? 'Live' : 'VOD',
                formattedAppId = typeof this.getPlayerHTML().dataset.applicationId != 'undefined' ?
                    this.getPlayerHTML().dataset.applicationId.trim().replace(/\s/g, '').toLowerCase() : 'undefined';
            this.player.FreeWheelPlugin.settings.Html5.siteSectionCustomId = `${this.siteSectionObject}-${mediaType}-${formattedAppId}`;


            // Tags in Key Values
            const allTags = this.player.mediainfo.tags;
            if (typeof allTags != 'undefined' && allTags.length > 0) {
                allTags.map((eachTag) => this.player.FreeWheelPlugin.settings.Html5.keyValues.push({ tags: eachTag }));
            }
        });
        /**/


        /* EVENT : < ready > */
        this.player.ready(() => {
            this.player.responsive(false);
        });


        /* EVENT : < error > */
        this.player.on('error', () => {
            const error = this.player.error(),
                holder = this.getPlayerHTML().parentElement;
            const errType = ((error.code == 'VIDEO_CLOUD_ERR_NOT_PLAYABLE' || error.code == 'VIDEO_CLOUD_ERR_VIDEO_NOT_FOUND') ? 'unavailable'
                : ((error.code == 'PLAYER_ERR_GEO_RESTRICTED') ? 'geobanned' : 'none'))
            if (errType != 'none') {
                this.player.dispose(); // Removes the (videojs) code of the player
                holder.innerHTML += `<div class="diverrmsg">
                                        <span class="fa-stack fa-4x">
                                            <i class="fa fa-${errType == 'unavailable' ? 'youtube-play' : 'globe'} fa-stack-1x "></i>
                                            <i class="fa fa-ban fa-stack-2x text-danger"></i>
                                        </span>
                                        <span class="texterrmsg">
                                            <br />Ce contenu n'est ${errType == 'unavailable' ? 'plus disponible' : 'pas disponible depuis votre pays'}
                                        </span>
                                    </div>`;
            };
        });
        /**/


        /* EVENT : < adend > | Gestion du saut entre la pub et le contenu Live
            MÃ©thode recommandÃ©e par Brightcove */
        this.player.on('ads-pod-ended', () => {
            console.log('SORTIE PUB');
            this.player.currentTime(0);
            this.player.pause();
            this.player.play();
        });
        /**/


        /* EVENT : < ads-ad-started > | DÃ©but de chaque pub : Affichage (& actualisation) du compteur de pubs */
        this.player.on('ads-ad-started', () => {
            const adCounter = document.createElement('div'),
                adContainer = document.querySelector('.video-js');

            adCounter.classList.add('ad-counter');
            adCounter.innerText = `Ad ${this.player.ads.ad.index + 1} of ${this.player.ads.pod.adCount}`;

            adContainer.appendChild(adCounter);

            this.player.one('ads-ad-ended', () => {
                adContainer.removeChild(adCounter);
            });
        });


        /* EVENT : < ads-pod-started > | DÃ©but de chaque slot publicitaire : Affichage du bouton de mute de la pub sur Webmobile */
        this.player.on('ads-pod-started', () => {
            if (this.options.isMobile) {
                const adMuteButton = this.player.addChild('MuteToggle');
                adMuteButton.addClass(`${this.player.muted() ? 'vjs-vol-0' : 'vjs-vol-3'}`);
                adMuteButton.addClass('adMuteButton');

                this.getPlayerHTML().querySelector('video').addEventListener('volumechange', () => {
                    adMuteButton.removeClass('vjs-vol-0');
                    adMuteButton.removeClass('vjs-vol-3');
                    adMuteButton.addClass(`${this.player.muted() ? 'vjs-vol-0' : 'vjs-vol-3'}`);
                });
                this.player.one('ads-ad-ended', () => {
                    this.player.removeChild(adMuteButton);
                });
            }
        });

        /* Fix resize VPAID on PIP */
        this.player.on(['pipactive', 'pipinactive', 'ads-ad-ended'], () => {
            if (this.player.ads.isAdPlaying() && this.player.FreeWheelPlugin.Html5.isVpaid())
                this.player.trigger('fw-resizeplayer');
        });
    }
}


/**
 * This bridge makes the Cleo Player compatible with Orion
 */

if (window.location.href.indexOf('rmcdecouverte.bfmtv.com') > -1 ||
    window.location.href.indexOf('front-rmcd') > -1 ||
    window.location.href.indexOf('rmcstory.fr') > -1 ||
    window.location.href.indexOf('rmcstory.com') > -1 ||
    window.location.href.indexOf('rmcstory.bfmtv.com') > -1 ||
    window.location.href.indexOf('rmc-story-web.preprod.hubee.tv') > -1) {
    console.log('On RMC Decouverte / RMC Story');
    playerBridge();
} else {
    console.log('Not On RMC Decouverte / RMC Story');
    window.addEventListener('DOMContentLoaded', () => {
        playerBridge();
    });
}


function playerBridge() {
    const useRequire = (typeof requirejs == 'function'),
        divNextPlayers = document.querySelectorAll('.next-player'),
        scripts = {};

    console.log(`RequireJS : ${useRequire}`);

    divNextPlayers.forEach((el, index) => {
        console.log('#' + (index + 1) + ' : .next-player found');
        adaptAttributes(el, index, divNextPlayers.length);

        const playerURL = `https://players.brightcove.net/${el.dataset.account}/${el.dataset.player}_default/index.min`;
        /* VÃ©rification de la non-existence d'un script doublon avant l'ajout dans l'objet */

        if (Object.keys(scripts).filter(current => scripts[current] == playerURL).length == 0) {
            scripts[Object.keys(scripts).length] = playerURL;
        }

        if (index == divNextPlayers.length - 1) {
            console.log('scripts ', scripts);
            if (useRequire) {
                Object.keys(scripts).map(objectKey => require.undef(objectKey));

                // Configure RequireJS
                require.config({
                    'paths': scripts,
                    timeout: 60,
                    waitSeconds: 60
                });

                const loadPromises = Object.keys(scripts).map(objectKey => requireJSPromisify(objectKey));

                Promise.all(loadPromises)
                    .then(() => bridgeFinished())
                    .catch(err => console.log('requireJSPromisify Error : ', err));

            } else {
                const loadPromises = Object.keys(scripts).map(objectKey => loadScriptPromisify(`${scripts[objectKey]}.js`));
                Promise.all(loadPromises)
                    .then(() => bridgeFinished())
                    .catch(err => console.log('loadScriptPromisify Error : ', err));
            }
        }
    });

    function bridgeFinished() {
        const divPlayers = document.querySelectorAll('.video_block'),
            players = [],
            deviceType = getDeviceType();

        /* Condition pour dÃ©caler le PIP Ã  droite du menu sur 01net */
        // if (typeof site !== 'undefined' && site == 'site01net') {
        //     const sheet = window.document.styleSheets[0];
        //     const videoWrapper = document.querySelector('.BCLvideoWrapper').getBoundingClientRect();
        //     sheet.insertRule(`.vjs-pip-active { margin-left: ${videoWrapper.x}px; }`, sheet.cssRules.length);
        // }
        /**/

        divPlayers.forEach((el, index) => {
            players.push(
                new CleoPlayer(
                    {
                        ref: useRequire ?
                            videojs.getPlayer(`${el.id}_vjs`)
                            : bc(`${el.id}_vjs`)
                    },
                    getSiteSection(el.dataset.account, deviceType)
                )
            );
            if (el.classList.contains('vjs-pip-container'))
                disableStickyOnOutbrain(el);

            if (index == divPlayers.length - 1)
                console.log('Bridge Finished');
        });
    }


    function disableStickyOnOutbrain(videoBlock) {
        const outbrainSelector = '.OUTBRAIN[data-widget-id="AR_1"], .OUTBRAIN[data-widget-id="AR_2"], .OUTBRAIN[data-widget-id="AR_4"]',
            outbrainElement = document.querySelector(outbrainSelector),
            player = videojs.getPlayer(`${videoBlock.id}_vjs`),
            playerPos = document.querySelector('.media-video').getBoundingClientRect().bottom;
        if (typeof outbrainElement != 'undefined' && outbrainElement != null) {
            window.addEventListener('scroll', throttle(() => {
                const throttleOutbrainElement = document.querySelector(outbrainSelector); // Non-live Component so must be refreshed
                if (isArticle && isMobile.any()) {
                  if (window.innerHeight + window.pageYOffset > (throttleOutbrainElement.getBoundingClientRect().top + (document.documentElement.scrollTop - document.documentElement.clientTop))) {
                    if (player.pip().state.active) {
                        player.pip().disable();
                        player.pip().deactivate();
                    }
                  } else {
                      if (!player.pip().state.active && (document.documentElement.scrollTop + 100) > playerPos) {
                          player.pip().enable();
                          player.pip().activate();
                      }
                  }
                }
                else{
                  if ((scrollY + 79) > throttleOutbrainElement.offsetTop) {  // On vÃ©rifie si le player a dÃ©passÃ© la zone Outbrain
                    if (player.pip().state.active) {
                        player.pip().disable();
                        player.pip().deactivate();
                    }
                } else {
                    if (!player.pip().state.active && scrollY > 500) {
                        player.pip().enable();
                        player.pip().activate();
                    }
                  }
                }
            }, 300));
        } else
            return;


        function throttle(fn, wait) {
            var time = Date.now();
            return function () {
                if ((time + wait - Date.now()) < 0) {
                    fn();
                    time = Date.now();
                }
            }
        }
    }

    function adaptAttributes(el, index, totalLength) {
        if (!el.getAttribute('autoplay')) el.setAttribute('autoplay', (el.dataset.applicationId != 'Article' && totalLength == 1));
        el.setAttribute('stickypluginmobile', 'true');
        el.setAttribute('id', `video_player_${index}`);
        if (el.getAttribute('stickypluginmobile') == 'true' && totalLength == 1 && el.dataset.applicationId != 'Article')
            el.classList.add('vjs-pip-container');

        el.classList.add('video_block');

        const playerHTML = `<video-js 
                            id="${`video_player_${index}_vjs`}" 
                            ${(el.dataset.videoId) ? `data-video-id="${el.dataset.videoId}"` : `data-playlist-id="${el.dataset.playlistId}"`}
                            data-account="${el.dataset.account}" 
                            data-player="${el.dataset.player}" 
                            data-application-id="${el.dataset.applicationId}"
                            data-embed="default" class="video-js" ${(el.getAttribute('autoplay') == 'true') ? ' muted ' : ' '}playsinline controls
                            ${(el.dataset.adConfigId) ? `data-ad-config-id="${el.dataset.adConfigId}"` : ``}>
                            </video-js>`;

        el.innerHTML = playerHTML;
    }


    function loadScriptPromisify(src) {
        return new Promise((resolve, reject) => {
            const scriptTag = document.createElement('script');
            scriptTag.onload = () => {
                return resolve();
            };
            scriptTag.onerror = () => {
                return reject();
            }

            scriptTag.setAttribute('src', src);
            document.body.appendChild(scriptTag);
        });
    }


    // Promisify require function from requireJS
    function requireJSPromisify(_script) {
        return new Promise((resolve, reject) => {
            require([_script], () => {
                return resolve();
            }, (err) => {
                return reject(err);
            });
        });
    }


    function getDeviceType() {
        const windowWidth = window.innerWidth;
        let device;
        if (windowWidth > 992)
            device = 'desktop';
        else
            device = 'webmobile';
        return device;
    }

    function getSiteSection(accountId, deviceType) {
        const mappingSiteSection = {
            876450612001: 'BFMBusiness', // BFM BUSINESS
            5132998232001: 'BFMParis', // BFM PARIS
            6012566821001: 'BFMLyon', // BFM Lyon
            876450610001: 'BFMTV', // BFMTV
            6093072304001: 'BFMGrandLille', // BFM LILLE
            6102712761001: 'BFMGrandLittoral', // BFM GRAND LITTORAL
            876630703001: 'RMCInfo', // RMC
            1969646226001: 'RMCDecouverte', // RMC DECOUVERTE
            887906353001: 'RMCSport', // RMC SPORT
            5817780576001: 'RMCStory', // RMC STORY
            854081247001: '01Net', // 01NET
            4005328962001: 'BFMTV', // Temoins
            876450613001: 'BFMTV' // TEST01
        };

        return Object.keys(mappingSiteSection).filter(current => current == accountId).length > 0 ?
            `${mappingSiteSection[accountId]}_all-${deviceType}` :
            `unknown_sitesection-${deviceType}`;
    }
}