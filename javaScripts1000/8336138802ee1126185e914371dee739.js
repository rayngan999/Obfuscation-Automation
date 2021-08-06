;(function ( $, window, document, undefined ) {
    function isScrolledIntoView(elem, extraOffsetTop)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top + (extraOffsetTop||0);
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    var pluginName = "mvFeed",
        defaults = {
            'base_url' : '',
            'embed_url'     : '',
            'feedData'      : [],
            'mylang'        : [],
            'site_url'      : '',
            'isAuthorized'  : 'false',
            'authedUserId'  : false,
            'avatar_url'    : '',
            'feedUser'      : '',
            'feedReadToken' : '',
            'videoCoverUrl' : '',
            'videoContentMaxHeight' : 500,
            'feedLimit'     : 300
        },
        templates = {
            'modal' : {
                'default' : 'feed-video-modal-template',
                'video' : {
                    'slider'    : 'feed-video-modal-video-related-slider-template',
                    'user'      : 'feed-video-modal-video-user-template',
                    'actions'   : 'feed-video-modal-video-actions-template',
                    'sidebar'   : 'feed-video-modal-sidebar-template',
                    'countDown' : 'feed-video-modal-countdown-template'
                }
            },
            'parts' : {
                'video_title'   : 'feed-video-modal-video-title-template',
                'related_video' : 'feed-video-modal-video-related-item-template',
                'embed_generator' : 'feed-video-modal-embed-generator-template'
            }
        },
        elementsSelectors = {
            'default' : {
                'main_modal' : '#mv-single-video-modal',
                'relatedContentBottom' : '#mv-single-video-modal-related-content'
            },
            'video' : {
                'title'     : '.feed-video-modal-video-title',
                'user'      : '.feed-video-modal-video-user',
                'actions'   : '.feed-video-modal-video-actions',
                'player'    : '.mv-single-video-modal-player-wrap',
                'sidebar'   : '.mv-single-video-modal-player-sidebar',
                'likeDislike' : '#myvideo_rating',
                'countDown' : '#mvplayer-countdown',
                'embedGenerator' : '#mv-single-video-modal-embed-generator',
                'embedCodeField' : '#mv-single-video-modal-embed-generator-code',
                'embedVideoUrl' : '#mv-single-video-modal-embed-generator-url',
                'embedSizeLi'   : '.share-embed-size',
                'embedCustomSizeHolder' : '.mv-single-video-modal-embed-custom-size-holder'
            }
        };


    function Plugin( element, options ) {
        if(navigator.userAgent.indexOf("MYVIDEO")>-1){
            return;
        }
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;
        this.templateNames  = templates;
        this._elementsSelectors  = elementsSelectors;

        this._defaults = defaults;
        this._name = pluginName;
        this._feedData = this.options.feedData;
        this._videoPlayer = false;
        this.isAuthorized = this.options.isAuthorized;

        //Compile templates
        this.videoModalTemplates = {
            'video' : {
                'main'      : false,
                'title'     : false,
                'related'   : false,
                'user'      : false,
                'actions'   : false,
                'embedGenerator' : false,
                'countDown' : false
            }
        };

        this.videoHistoryIncrement = 0;
        this.openedVideo;
        this.activeVideo;
        this.lastVideoIndex = 0;
        this.lastRelatedVideoIndex = 0;
        this.lastVideoType  = 'main';
        this.lastChannelIndex = 0;
        this.opacityInterval = false;
        this.currentPage = 0;
        this.dataIsRendering = false;
        this.isFullscreen = false;
        this.lang = this.options.lang;
        this.overlayBannerVisible = false;
        this.overlayBannerSeenOnSeek = false;
        this.videoPlayerSeeking = false;
        this.playerBannerZoneId = false;
        this.playerBannerZoneSource = '';

        this._surpriseEnabled = false;
        this._p17Loaded = false;
        this.chromeAppInstalled = false;

        this.topInterval = false;
        this._p17interval = false;


        this.compileVideoModalTemplates();
        this.init();
    }

    Plugin.prototype = {


        init: function() {
            var _self = this;
            this.chromeAppInstalled = false;

            try {
                chrome.runtime.sendMessage(this.options.pip_key, {message: "test"},
                    function (reply) {
                        if (reply) {
                            _self.chromeAppInstalled = true;
                        }
                    });
            }
            catch (err) {
                // console.log(err);
            }
            if (typeof $.openxtag != 'undefined') {
                $.openxtag('init', {
                    delivery: 'http://open5.myvideo.ge/delivery/ajs.php',
                    deliverySSL: 'https://open5.myvideo.ge/delivery/ajs.php'
                });
            }



            this.setupGlobalListners();
            this.preRenderVideoModalTemplate();
        },

        setupGlobalListners: function(){
            var _self = this;

            /**
             * When video item is clicked, tender template with cached data,
             * also call ajax function to get latest info about video and update template
             */
            var initialURL = location.href;

            /*$('body').on('click','#mv-feed-data-holder .mv_video_item',function(event){
                event.preventDefault();
                var el = $(this);
                var channelIndex    = el.data('channel-index');
                var videoId         = el.data('video-id');
                var videoIndex      = el.data('video-index');

                var videoData = _self._feedData[channelIndex]['data'][videoIndex];
                _self.updateVideoTempalteWithVideoItem(videoData);

                _self.setPageUrl('/v/'+videoData.video_id);

                $.get('?CIA=1&ci_c=videomodal&video_id='+videoData.video_id,function(response){
                    var data = $.parseJSON(response);

                    var updatedVideoData = $.extend( {}, videoData, data);
                    $.get(updatedVideoData.file_url,function(response){
                        var urlData = $.parseJSON(response);
                        updatedVideoData.file_url = urlData.file;
                        _self._feedData[channelIndex]['data'][videoIndex] = updatedVideoData;
                        _self.updateVideoTempalteWithVideoItem(updatedVideoData);
                    })

                });
            });*/

            function showMvLeaderboardRandom () {

                $('#mv-feed-data-holder > div:not(.mv-leaderboard-random, .mv-leaderboard-random-loaded)').each(function(i, elem) {
                    if (((i+1) % 5) === 0 ) {
                        if ($(elem).next().is(':not(.mv-leaderboard-random, .mv-leaderboard-random-loaded)')) {
                            $(elem).after("<div class='mv-leaderboard-random' style='overflow:hidden; margin-bottom: 15px'></div>")
                        }
                    }
                })

                if (isScrolledIntoView($('.mv-leaderboard-random'), 150)) {
                    $('.mv-leaderboard-random')
                        .first()
                        .addClass('mv-leaderboard-random-loaded')
                        .removeClass('mv-leaderboard-random')
                        .height(0)
                        .openxtag('zone', 177)
                        .delay(100)
                        .animate({height: 160})
                }
            }

            setTimeout(function() {
                $(window).on('scroll.mv-leaderboard-random', showMvLeaderboardRandom);

                showMvLeaderboardRandom()
            }, 300)

            $('body').on('click','#p17popup-image-controls-yes',function(event){
                clearInterval(_self._p17interval);
            });

            $('body').on('click','#p17popup-image-controls-no',function(event){
                clearInterval(_self._p17interval);
                _self.showCountdownScreen();
            });



            //stupid event dispatcher
            $('body').on('click','.banner_close',function(event){
                event.preventDefault();
                _self.hideOverlayBanner();
            });

            $('body').on('click','.mv-single-video-modal-embed-old-style input[type="checkbox"]',function(event){
                var sizeType = 'custom';
                var width,height = 0;
                if($(_self._elementsSelectors.video.embedSizeLi+'.selected').length > 0){
                    sizeType = $(_self._elementsSelectors.video.embedSizeLi+'.selected').find('a').data('type');
                }else{
                    width   = $(_self._elementsSelectors.video.embedCustomSizeHolder+' input[data-type="width"]').val();
                    height  = $(_self._elementsSelectors.video.embedCustomSizeHolder+' input[data-type="height"]').val();
                }

                _self.updateEmbedGenerator(sizeType,false,width,height);
            });

            $('body').on('click','.feed-video-modal-video-social-menu a',function(){
                _self.trackEvent('sharedContent');
            });

            $('body').on('keyup',this._elementsSelectors.video.embedCustomSizeHolder+' input[type="text"]',function(event) {
                var inp = $(this);
                var width,height;
                if(inp.data('type') == 'width'){
                    width = parseInt(inp.val());
                    height = parseInt((width/16)*9);
                }else{
                    height = parseInt(inp.val());
                    width = parseInt((height/9)*16);
                }

                width = width || 0;
                height = height || 0;
                _self.updateEmbedGenerator('custom',false,width,height);
            });

            $('body').on('click','.mvfeed-user-action-trigger',function(event){
                event.preventDefault();
                if(!_self.isAuthorized){
                    event.stopImmediatePropagation();
                    console.info('Needs To auth');
                    if(_self._videoPlayer.getState() == "PLAYING"){
                        _self._videoPlayer.play();
                    }
                    setTimeout(function(){
                        $('#mv-feed-auth-trigger').trigger('click');
                    },200);
                    return;
                }
                console.info('Authorized: Continue bubbling');
            });

            $('body').on('click','.mvfeed-action-trigger',function(event){
                var action_type = $(this).data('feed-action-type');
                event.preventDefault();
                if(action_type == 'play-video'){
                    var el = $(this);
                    var channelIndex    = el.data('channel-index');
                    var videoId         = el.data('video-id');
                    var videoIndex      = parseInt(el.data('video-index'));
                    var contentType     = el.data('content-type');

                    var videoData;



                    //move to conf
                    if(contentType == 'relatedVideo'){

                        _self.lastRelatedVideoIndex = videoIndex;
                        if(parseInt(videoIndex) || videoIndex === 0){
                            _self.lastVideoType = contentType;
                            videoData = _self.openedVideo.relateds[videoIndex];
                        }else{
                            videoData = _self.openedVideo;
                            _self.lastVideoType = 'main';
                        }

                        _self.trackEvent('relatedVideo',_self.openedVideo.video_id);

                        if(!$(this).parent().is(':first-child')){
                            $('.mv-single-video-modal-player-wrap-prev-video').removeClass('disabled');
                        }else{
                            $('.mv-single-video-modal-player-wrap-prev-video').addClass('disabled');
                        }

                        if(!$(this).parent().is(':last-child')){
                            $('.mv-single-video-modal-player-wrap-next-video').removeClass('disabled');
                        }else{
                            $('.mv-single-video-modal-player-wrap-next-video').addClass('disabled');
                        }

                        $.get(videoData.file_url,function(response){
                            var urlData = $.parseJSON(response);
                            videoData.playable_file_url = urlData.file;
                            _self.updateVideoTempalteWithVideoItem(videoData);
                        })
                    }else{
                        _self.lastVideoIndex = videoIndex;
                        _self.lastVideoType = 'main';
                        _self.lastChannelIndex = channelIndex;
                        _self.openedVideo = videoData = _self._feedData[channelIndex]['data'][videoIndex];
                        $.get('?CIA=1&ci_c=videomodal&video_id='+videoId,function(response){
                            var data = $.parseJSON(response);

                            var updatedVideoData = $.extend( {}, videoData, data);
                            _self.openedVideo = updatedVideoData;
                            _self.updateVideoTempalteWithVideoItem(updatedVideoData);

                            if (updatedVideoData.tag_id) {
                                $.get('?CIA=1&ci_c=videomodal&ci_m=tagVideos&video_id='+videoId+'&tag_id='+updatedVideoData.tag_id,function(relatedResponse){
                                    var relateds = $.parseJSON(relatedResponse);
                                    _self.openedVideo['relateds'] = relateds;
                                    _self.updateVideoTempalteSliderWithVideoItem(_self.openedVideo);
                                });
                            } else {
                                $.get('?CIA=1&ci_c=videomodal&ci_m=latestUserVideos&video_id='+videoId+'&user_id='+updatedVideoData.user_id,function(relatedResponse){
                                    var relateds = $.parseJSON(relatedResponse);
                                    _self.openedVideo['relateds'] = relateds;
                                    _self.updateVideoTempalteSliderWithVideoItem(_self.openedVideo);
                                });
                            }

                            //$.get(updatedVideoData.file_url,function(response){
                            //    var urlData = $.parseJSON(response);
                            //    updatedVideoData.playable_file_url = urlData.file;
                            //    _self.openedVideo = _self._feedData[channelIndex]['data'][videoIndex] = updatedVideoData;
                            //    _self.updateVideoTempalteWithVideoItem(updatedVideoData);
                            //});
                        });
                    }

                    //_self.updateVideoTempalteWithVideoItem(videoData);
                    _self.setPageUrl({
                        'url' : '/v/'+videoData.video_id,
                        'page_type' : 'single_video',
                        'page_content_id'   : videoData.video_id,
                        'title' : videoData.video_id,
                        'content' : event.target.textContent
                    });
                }
                else if(action_type == 'close-sidebar'){
                    $('#mv-single-video-modal').removeClass('show-sidebar');
                }else if(action_type == 'show-sidebar'){
                    return;
                    if($(this).parents('.mv-single-video-modal-player-sidebar').length > 0){
                        return;
                    }
                    if($('#mv-single-video-modal').hasClass('show-sidebar')){
                        $('#mv-single-video-modal').removeClass('show-sidebar');
                        return;
                    }
                    $('#mv-single-video-modal').addClass('show-sidebar');
                }else if(action_type == 'next-video'){
                    if($(this).hasClass('disabled')){
                        return;
                    }
                    _self.goToNextVideo();
                }else if(action_type == 'prev-video'){
                    if($(this).hasClass('disabled')){
                        return;
                    }
                    _self.goToPrevVideo();
                }else if(action_type == 'video-to-favs'){
                    _self.manageFavoriteAction();
                }else if(action_type == 'subscribe-chan'){
                    _self.manageSubscribeAction();
                }else if(action_type == 'subscribe-chan-shelf'){
                    var index = $(this).parents('.mv-content-feed-shelf').data('channel-index');
                    var mode = $(this).hasClass('subscribed') ? 'sp_unsub' : 'sp_sub';
                    _self.manageSubscribeActionShelf(index,mode);
                }else if(action_type == 'load-more'){
                    _self.loadMoreFeed();
                }else if(action_type == 'show-embed-tools'){
                    if($(_self._elementsSelectors.video.embedGenerator).hasClass('active')){
                        _self.hideEmbedGenerator();
                    }else{
                        _self.showEmbedGenerator();
                    }
                }else if(action_type == 'close-embed-tools'){
                    _self.hideEmbedGenerator();
                }else if (action_type == 'hide-countdown') {
                    _self.hideCountdownScreen();
                } else if (action_type == 'desc-full') {
                    if ($('.mv-single-video-modal-player-sidebar-content-description').hasClass('full')) {
                        $('.mv-single-video-modal-player-sidebar-content-description').removeClass('full');
                        $('.mv-single-video-modal-player-sidebar-content-more').text('áá áªááá');
                    } else {
                        $('.mv-single-video-modal-player-sidebar-content-description').addClass('full');
                        $('.mv-single-video-modal-player-sidebar-content-more').text('ááááááá');
                    }
                }
            });

            this.setPageUrl({
                'url' : document.location.href,
                'page_type' : 'home',
                'page_content_id'   : 0,
                'title'     : document.title,
                'content'   : document.textContent
            });

            $('body').on('click','#mv-single-video-modal',function(event){
                var action_type = $(event.target).data('feed-action-type');
               if(action_type == 'close-modal'){
                   event.preventDefault();
                   _self.setPageUrl({
                       'url' : _self.options.base_url,
                       'page_type' : 'home',
                       'page_content_id'   : 0,
                       'title'     : document.title,
                       'content'   : document.textContent
                   });
                   _self.hideVideoModal();
               }
            });

            $('body').on('click',this._elementsSelectors.video.embedSizeLi+' a',function(event){
                event.preventDefault();
                var sizeType = $(this).data('type');
                _self.updateEmbedGenerator(sizeType);
            });

            $(window).on('beforeunload', function(event) {
                if(document.activeElement.tagName == 'BODY') {
                    $(window).scrollTop(0);
                }
            });

            $(window).keyup(function(e) {
                if (e.keyCode == 27) {
                    if(_self.isFullscreen){
                        return;
                    }
                    _self.setPageUrl({
                        'url' : _self.options.base_url,
                        'page_type' : 'home',
                        'page_content_id'   : 0,
                        'title'     : document.title,
                        'content'   : document.textContent
                    });
                    _self.hideVideoModal();
                }
            });

            $(window).scroll(function() {
                if(_self.dataIsRendering){
                    return;
                }
                if(_self._feedData.length == 0){
                    return;
                }

                var elementPositionTriger = _self._feedData.length-10;
                var LastVisibleFeedElement = $('.mv-content-feed-shelf[data-channel-index="'+elementPositionTriger+'"]');


                if($(LastVisibleFeedElement).offset().top < $(window).scrollTop()){
                    _self.loadMoreFeed()
                }
            });

            $('body').on('mousemove','#mv-single-video-modal',function(event){
                _self.setOpacity(1.0);
                _self.opacityInterval = setTimeout(function(){
                    _self.setOpacity(0.3,true);
                }, 5000);
            });


            window.addEventListener('popstate', function(event) {

                var state = event.state;
                var videoId = state.page_content_id;
                if(videoId == 0){
                    _self.hideVideoModal();
                    //_self.setPageUrl({
                    //    'url' : _self.options.base_url,
                    //    'page_type' : 'home',
                    //    'page_content_id'   : 0,
                    //    'title'     : document.title,
                    //    'content'   : document.textContent
                    //});
                    return;
                }else{
                    if(_self.openedVideo){
                        if(videoId == _self.openedVideo.video_id){
                            videoData = _self.openedVideo;
                        }else{
                            _self.openedVideo.relateds.map(function(video){
                                if(video.video_id == videoId){
                                    videoData = video;
                                    return;
                                }
                            });
                            return;
                        }
                    }
                }

                if(typeof videoData == 'object') {
                    _self.updateVideoTempalteWithVideoItem(videoData);
                }
            });


        },

        trackEvent: function(event_name,desc,value){
            if (typeof desc == 'number'){
                desc = desc.toString();
            }
            _gaq.push(['_trackEvent', 'mvfeed', event_name,desc,value]);
            //Facebook Pixel Event Tracking
            fbq('trackCustom', 'VideoView-mainpage-' + event_name + '-' + desc + '-' + value);
        },

        /**
         * Loads and injects next html page
         */
        loadMoreFeed: function(){
            var _self = this;
            var currentPage = this.currentPage + 1;
            var loadMoreButton = $('#mv-feed-load-more');
            if(loadMoreButton.hasClass('disabled')){
                return;
            }

            _gaq.push(['_trackEvent', 'mvfeed', 'loadMore']);
            loadMoreButton.addClass('disabled');
            this.dataIsRendering = true;
            $.get('?CIA=1&ci_c=home&ci_m=feedPager&page='+currentPage,function(response){
                var res = $.parseJSON(response);
                loadMoreButton.removeClass('disabled');
                if(res.status == 'error'){

                }else{
                    if(res.html && res.data.length > 0){
                        _self.currentPage = currentPage;
                        _self.options.feedData.push.apply(_self.options.feedData,res.data);
                        var html = $(res.html);
                        html.insertBefore(loadMoreButton);
                        mvInitResponsiveCarousels($(html).find('.mv_static_slider'));
                        if(res.last_page){
                            loadMoreButton.remove();
                        }
                    }else{
                        loadMoreButton.remove();
                    }

                }
                if(!res.last_page) {
                    _self.dataIsRendering = false;
                }
            });
        },

        goToNextVideo: function(){
            this.trackEvent('nextVideo',this.openedVideo.video_id);
            var currentVideoSliderItem = $('.mv-single-video-modal-related-video-item.current').parent();
            if(currentVideoSliderItem.length == 0){
                return;
            }

            var nextVideoSliderItem = currentVideoSliderItem.next();
            if(nextVideoSliderItem.length == 0){
                return;
            }

            if($(nextVideoSliderItem).is(':last-child')){
                $('.mv-single-video-modal-player-wrap-next-video').addClass('disabled');
            }

            $('.mv-single-video-modal-player-wrap-prev-video').removeClass('disabled');
            $(nextVideoSliderItem).find('.mv-single-video-modal-related-video-item').trigger('click');
        },

        goToPrevVideo: function(){
            this.trackEvent('prevVideo',this.openedVideo.video_id);
            var currentVideoSliderItem = $('.mv-single-video-modal-related-video-item.current').parent();
            if(currentVideoSliderItem.length == 0){
                return;
            }

            var nextVideoSliderItem = currentVideoSliderItem.prev();
            if(nextVideoSliderItem.length == 0){
                return;
            }

            if($(nextVideoSliderItem).is(':first-child')){
                $('.mv-single-video-modal-player-wrap-prev-video').addClass('disabled');
            }

            $('.mv-single-video-modal-player-wrap-next-video').removeClass('disabled');
            $(nextVideoSliderItem).find('.mv-single-video-modal-related-video-item').trigger('click');
        },

        commentsFetcher: function(video_id,page){
            var _self = this;
            $.get('?CIA=1&ci_c=comments&ci_m=pager&vid='+video_id+'&page='+page,function(response){
                var data = $.parseJSON(response);
                if(data.status == 'success'){
                    $('.mv-single-video-modal-player-sidebar-content-comments').html('<div class="comments-wrapper"><div class="comments-list-box"><ul id="comments-list-root" class="comments-list-root">'+data.html+'</ul></div></div>');
                    //var commentsTemplate = _self.videoModalTemplates.video.comments();
                    $('.mv-single-video-modal-player-sidebar-content-comments').html(commentsTemplate);
                }
            });
        },

        manageSubscribeActionShelf: function(index,mode){
            var _self = this;
            index = parseInt(index);
            if(typeof index != 'number'){
                return;
            }

            var video = this._feedData[index]['data'][0];

            if(!video.user_id){
                return;
            }

            $.get('ajax/subscribe.php?prov_id='+video.user_id+'&mode='+mode,function(data){
                $('.ajax_subscribe').html(data);
                if(mode == 'sp_sub'){

                    _self._feedData[index]['data'].map(function(item,i){
                        _self._feedData[index]['data'][i]['subscribed'] = 1;
                    });



                    $('.mv-content-feed-shelf[data-channel-index="' + index + '"] .mv-content-feed-shelf-subscribe').addClass('subscribed');
                    $('.mv-content-feed-shelf[data-channel-index="' + index + '"] .mv-content-feed-shelf-subscribe-verb').html('ááááá¬áá áááá');
                    _self.trackEvent('subscribedFromShelf',video.video_id);
                }else{
                    _self._feedData[index]['data'].map(function(item,i){
                        _self._feedData[index]['data'][i]['subscribed'] = 0;
                    });


                    $('.mv-content-feed-shelf[data-channel-index="' + index + '"] .mv-content-feed-shelf-subscribe').removeClass('subscribed');
                    $('.mv-content-feed-shelf[data-channel-index="' + index + '"] .mv-content-feed-shelf-subscribe-verb').html('ááááá¬áá á');
                    _self.trackEvent('unSubscribedFromShelf',video.video_id);
                }
            });
        },

        manageSubscribeAction: function(){
            var _self = this;
            var video;
            var mode = 'sp_sub';
            if(this.lastVideoType == 'main'){
                video = this._feedData[this.lastChannelIndex]['data'][this.lastVideoIndex];
            }else if(this.lastVideoType == 'relatedVideo'){
                video = this._feedData[this.lastChannelIndex]['data'][this.lastVideoIndex];
                //video = this._feedData[this.lastChannelIndex]['data'][this.lastVideoIndex]['relateds'][this.lastRelatedVideoIndex];
            }

            if(!video.user_id){
                return;
            }

            if(video.subscribed){
                mode = 'sp_unsub';
            }



            $.get('ajax/subscribe.php?prov_id='+video.user_id+'&mode='+mode,function(data){
                $('.ajax_subscribe').html(data);
                if(mode == 'sp_sub'){
                    if(_self.lastVideoType == 'main'){
                        _self._feedData[_self.lastChannelIndex]['data'].map(function(item,i){
                            _self._feedData[_self.lastChannelIndex]['data'][i]['subscribed'] = 1;
                        });
                    }else if(_self.lastVideoType == 'relatedVideo'){
                        //_self._feedData[_self.lastChannelIndex]['data'][_self.lastVideoIndex]['relateds'][_self.lastRelatedVideoIndex]['subscribed'] = 1;
                        _self._feedData[_self.lastChannelIndex]['data'].map(function(item,i){
                            _self._feedData[_self.lastChannelIndex]['data'][i]['subscribed'] = 1;
                        });
                    }

                    $('.feed-video-modal-subscribe-channel').addClass('subscribed');
                    $('.feed-video-modal-subscribe-channel i').html('ááááá¬áá áááá');
                    if(_self.lastVideoType == 'main') {
                        $('.mv-content-feed-shelf[data-channel-index="' + _self.lastChannelIndex + '"] .mv-content-feed-shelf-subscribe').addClass('subscribed');
                        $('.mv-content-feed-shelf[data-channel-index="' + _self.lastChannelIndex + '"] .mv-content-feed-shelf-subscribe-verb').html('ááááá¬áá áááá');
                    }
                    _self.trackEvent('subscribed',video.video_id);
                }else{
                    if(_self.lastVideoType == 'main'){
                        _self._feedData[_self.lastChannelIndex]['data'].map(function(item,i){
                            _self._feedData[_self.lastChannelIndex]['data'][i]['subscribed'] = 0;
                        });
                    }else if(_self.lastVideoType == 'relatedVideo'){
                        //_self._feedData[_self.lastChannelIndex]['data'][_self.lastVideoIndex]['relateds'][_self.lastRelatedVideoIndex]['subscribed'] = 0;
                        _self._feedData[_self.lastChannelIndex]['data'].map(function(item,i){
                            _self._feedData[_self.lastChannelIndex]['data'][i]['subscribed'] = 0;
                        });
                    }
                    $('.feed-video-modal-subscribe-channel').removeClass('subscribed');
                    $('.feed-video-modal-subscribe-channel i').html('ááááá¬áá á');
                    if(_self.lastVideoType == 'main') {
                        $('.mv-content-feed-shelf[data-channel-index="' + _self.lastChannelIndex + '"] .mv-content-feed-shelf-subscribe').removeClass('subscribed');
                        $('.mv-content-feed-shelf[data-channel-index="' + _self.lastChannelIndex + '"] .mv-content-feed-shelf-subscribe-verb').html('ááááá¬áá á');
                    }
                    _self.trackEvent('unSubscribed',video.video_id);
                }
            });
        },

        manageFavoriteAction: function(){
            var _self = this;
            var video;
            var mode = 'add_favs';
            if(this.lastVideoType == 'main'){
                video = this._feedData[this.lastChannelIndex]['data'][this.lastVideoIndex];
            }else if(this.lastVideoType == 'relatedVideo'){
                video = this._feedData[this.lastChannelIndex]['data'][this.lastVideoIndex]['relateds'][this.lastRelatedVideoIndex];
            }


            if(!video.video_id){
                return;
            }

            if(video.in_fav){
                mode = 'del_favs';
            }

            $.post('act_ajax_add_favs.php?act='+mode+'&f_video_id='+video.video_id,function(response){
                if(video.in_fav){
                    if(_self.lastVideoType == 'main'){
                        _self._feedData[_self.lastChannelIndex]['data'][_self.lastVideoIndex]['in_fav'] = 0;
                    }else if(_self.lastVideoType == 'relatedVideo'){
                        _self._feedData[_self.lastChannelIndex]['data'][_self.lastVideoIndex]['relateds'][_self.lastRelatedVideoIndex]['in_fav'] = 0;
                    }
                    $('.feed-video-modal-video-to-favs').removeClass('active');
                    _self.trackEvent('videoRemoveFromFav',video.video_id);
                }else{
                    if(_self.lastVideoType == 'main'){
                        _self._feedData[_self.lastChannelIndex]['data'][_self.lastVideoIndex]['in_fav'] = 1;
                    }else if(_self.lastVideoType == 'relatedVideo'){
                        _self._feedData[_self.lastChannelIndex]['data'][_self.lastVideoIndex]['relateds'][_self.lastRelatedVideoIndex]['in_fav'] = 1;
                    }
                    _self.trackEvent('videoToFav',video.video_id);
                    $('.feed-video-modal-video-to-favs').addClass('active');
                }
            });

        },

        calculatePaddedNewAspectRatio : function(rW, rH, cW, cH) {
            // aspect adjust WxH
            var w2 = Math.round((cH / 9) * 16);
            var h2 = Math.round((cW / 16) * 9);
            // new width and height, which to pad?
            var newWidth = (w2 < width) ? width : w2;
            var newHeight = (h2 < height) ? height : h2;
            // updated with and height, with correct aspect ratio w/ padding as needed.
            var dimensions = {
                width: newWidth,
                height: newHeight
            };
            return dimensions;
        },

        setPageUrl : function(data,replace){
            /*console.log('======= setPageUrl DATA ====== ');
            console.log(data);
            console.log('======= ----- ====== ');*/
            if(!replace) {
                history.pushState(data, data.content, data.url);
            }else{
                history.replaceState(data, data.content, data.url);
            }
            //if(replace){
            //    window.history.replaceState(null, null,url);
            //}else{
            //    this.videoHistoryIncrement += 1;
            //    window.history.pushState(this.videoHistoryIncrement, null,url);
            //}

        },

        updateVideoTempalteSliderWithVideoItem: function(video_data){
            var _self = this;
            this.renderRelatedVideos(video_data);
        },

        subscribeOnAction: function() {
            if (!$('.feed-video-modal-subscribe-channel').hasClass('subscribed')) {
                $('.feed-video-modal-subscribe-channel').trigger('click')
            }
        },

        /**
         * First time called when video item is clicked
         * First time it is called with data from cache,
         * Second time its called after success ajax callback,
         * and called with data selected from database
         * @param video_data
         */
        updateVideoTempalteWithVideoItem: function(video_data){

            var _self = this;
            clearInterval(_self._p17interval);
            this._p17Loaded = false;
            //es$('.mv-single-video-modal-player-wrap').p17popup('hidePopup');
            $('#p17-holder').html('');
            $('#p17-holder').hide();
            var videoTemplate = $(this.renderedVideoModaltemplate);
            this.activeVideo = video_data;
            this.resetOverlayBanner();
            this.hideCountdownScreen();
            $(this._elementsSelectors.video.embedGenerator).attr('data-video-id',video_data.video_id);
            this.updateEmbedGenerator();

            this.trackEvent('playVideo',video_data.video_id);

            var comment_callback = function(response) {
                _self.trackEvent('fb-comment',_self.activeVideo.video_id);
            }
            try {
                //if(video_data.player_conf.anotations.length) {
                    _self._videoPlayer.plugins.anotations.update(video_data.player_conf.anotations);
                //}
            } catch (err) {
                console.error(err)
            }


            //if(this._surpriseEnabled) {
            //    $('.mv-single-video-modal-player-wrap').p17popup('preparePopup');
            //}

            $('.video-title-partial-holder').css('width',$('.mv-single-video-modal-player-wrap').width());

            video_data.like_total       =  video_data.like_total || 0;
            video_data.dislike_total    =  video_data.dislike_total || 0;
            video_data.comments_int     =  video_data.comments_int || 0;
            //video_data.comments_int =  video_data.comments_int || '<span class="fb-comments-count" data-href="'+this.options.site_url+'?video_id='+video_data.video_id+'"></span>';

            video_data.like_total       = this.number_format(video_data.like_total, 0, ',', ' ');
            video_data.dislike_total    = this.number_format(video_data.dislike_total, 0, ',', ' ');
            video_data.comments_int     = this.number_format(video_data.comments_int, 0, ',', ' ');

            if(video_data.show_comments == 1){
                video_data.comments_int =  '<span class="fb-comments-count" data-href="http://www.myvideo.ge/?video_id='+video_data.video_id+'"></span>';

                if (typeof FB == 'object') {
                    FB.Event.subscribe('comment.create', comment_callback);
                }
            }

            var Comments = '';

            if(video_data.show_comments == 1){
                Comments = '<div class="fb-comments" data-href="http://www.myvideo.ge/?video_id='+video_data.video_id+'" data-numposts="5" width="310" order_by="time"></div>';
            }else if(video_data.show_comments == 2){
                Comments = this.htmlspecialchars_decode(video_data.comments_data);
            }

            //refresh sidebar
            $(_self._elementsSelectors.video.sidebar).replaceWith(this.videoModalTemplates.video.sidebar({
                'desc'          : video_data.video_desc,
                'video_id'      : video_data.video_id,
                'comments'      : Comments
            }));

            $('#tpgh').html('<script language="JavaScript" type="text/javascript" src="//counter.top.ge/cgi-bin/cod?100+8500"></script><a target="_top" href="//counter.top.ge/cgi-bin/showtop?8500"> <img src="//counter.top.ge/cgi-bin/count?ID:8500+JS:false" border="0" alt="TOP.GE" /></a>');

            clearTimeout(this.topInterval);
            this.topInterval = setTimeout(function(){
                $('#tpgh').html('<script language="JavaScript" type="text/javascript" src="//counter.top.ge/cgi-bin/cod?100+8500"></script><a target="_top" href="//counter.top.ge/cgi-bin/showtop?8500"> <img src="//counter.top.ge/cgi-bin/count?ID:8500+JS:false" border="0" alt="TOP.GE" /></a>');
            },3000);


            if(video_data.show_comments == 2) {
                $('#mv-single-video-modal #comments').mvComments().data('plugin_mvComments');
            }

            //refresh video user partial
            $(_self._elementsSelectors.video.user).replaceWith(this.videoModalTemplates.video.user({
                'user_name'     : video_data.us_chan_name ? video_data.us_chan_name : video_data.user_name,
                'user_avatar'   : video_data.user_avatar,
                'user_id'       : video_data.user_id,
                'subscribed'    : video_data.subscribed
            }));

            //refresh video title partial
            $(_self._elementsSelectors.video.title).replaceWith(this.videoModalTemplates.video.title({
                'title' : _self.htmlspecialchars_decode(video_data.video_title)
            }));


            $(_self._elementsSelectors.video.actions).replaceWith(this.videoModalTemplates.video.actions({
                'views_int'     : video_data.views_int,
                'likes_int'     : video_data.like_total,
                'dislikes_int'  : video_data.dislike_total,
                'comments_int'  : video_data.comments_int,
                'video_id'      : video_data.video_id,
                'isfav'         : video_data.in_fav,
                'date'          : video_data.video_upload_date_friendly,
                'url_to_share'  : _self.options.site_url+'v/'+video_data.video_id,
                'video_title'   : video_data.video_title,
                'screen'        : video_data.video_thumb_big
            }));


            var stat_url = this.options.site_url+"flv_player/set_video_stats.php?video_id="+video_data.video_id+"&user_id="+this.options.authedUserId;

            if (video_data.video_id) {
                $.get(stat_url);
            }




            //if(parseInt(video_data.show_comments) > 0){
            //    if(video_data.show_comments == 2) {
            //        this.commentsFetcher(video_data.video_id, 1);
            //    }
            //}

           /* $(_self._elementsSelectors.video.sidebar).find('.scrollable').mCustomScrollbar({
                theme:"minimal",
                scrollInertia : 0,
                scrollButtons:{ enable: false },
                keyboard:{ enable: false }
            });*/


            setTimeout(function(){
                if ($('.mv-single-video-modal-player-sidebar-content-description span').height() > parseInt($('.mv-single-video-modal-player-sidebar-content-description').css('max-height'))){
                    $('.mv-single-video-modal-player-sidebar-content-more').css('display','block');
                }
            },100);




            if(typeof FB != 'undefined') {
                FB.XFBML.parse();
            }

            $('.piro_overlay').remove();
            $('.piro_html').remove();
            $.piroBox_ext({
                piro_speed :1000,
                bg_alpha : 0.5,
                piro_scroll : true,
                piro_drag :false,
                piro_nav_pos: 'bottom'
            });



            //init likeDislike
            if(this.isAuthorized) {
                $(_self._elementsSelectors.video.actions).MyvideoLikeDis({
                    'sprinter_enabled': false,
                    'didFinishAction': function (data) {
                        if (!data) {
                            return;
                        }
                        _self.trackEvent('likeDislike');
                        _self.subscribeOnAction();
                        $('.feed-video-modal-total-likes').html(data.likes);
                        $('.feed-video-modal-total-dislikes').html(data.dislikes);
                    }
                }).data('plugin_MyvideoLikeDis');
            }

            //dim thinngs
            this.setOpacity(1.0);
            this.opacityInterval = setTimeout(function(){
                _self.setOpacity(0.3,true);
            }, 5000);

            //related things
            $('.mv-single-video-modal-related-slider').find('.current').removeClass('current');
            $('.mv-single-video-modal-related-slider').find('div[data-video-id="'+video_data.video_id+'"]').addClass('current');

            if(video_data.player_conf.inline_vast){
                this.playerBannerZoneId = video_data.player_conf['inline_vast']['player_banner_zone_id'];
            }

            this.playerBannerZoneSource = '';
            if (video_data.player_conf.ova_source && video_data.player_conf.ova_source.length > 0) {
                this.playerBannerZoneSource = video_data.player_conf.ova_source;
            }




            this.showVideoModal(function(){
                //set video file
                if(!video_data.player_conf){
                    return;
                }


                if(_self._videoPlayer.getState() == "PLAYING"){
                    _self._videoPlayer.forceAdvertismentClean().stop();
                }

                if(video_data.player_conf.vast !== false){
                    window.customAdSkipTime = video_data.player_conf.skip_ad_time;

                    _self._videoPlayer.load([{
                        tracks: video_data.player_conf.tracks,
                        sources: video_data.player_conf.sources,
                        adschedule : video_data.player_conf.vast
                    }]);
                }else{
                    _self._videoPlayer.load([{
                        sources: video_data.player_conf.sources,
                        tracks : video_data.player_conf.tracks
                    }]);
                }


                if(_self._videoPlayer.getState() != "PLAYING"){
                    _self._videoPlayer.play();
                    $($(_self._videoPlayer)[0].container).focus();
                }

                setTimeout(function() {
                    _self.renderRelatedVideos(video_data);
                },1000);

            });
        },

        hideCountdownScreen: function(){
            var _self = this;
            setTimeout(function(){
                $('#mvplayer-countdown-timer').remove();
                $(_self._elementsSelectors.video.countDown).hide();
            },300);
        },

        showCountdownScreen: function(){
            var _self = this;

            $('#p17-holder').html('');
            $('#p17-holder').hide();
            _self._p17Loaded = false;

            var currentVideoSliderItem = $('.mv-single-video-modal-related-video-item.current').parent();
            if(currentVideoSliderItem.length == 0){
                return;
            }

            var nextVideoSliderItem = currentVideoSliderItem.next();
            if(nextVideoSliderItem.length == 0){
                return;
            }

            $(_self._elementsSelectors.video.countDown).replaceWith(this.videoModalTemplates.video.countDown({
                'bg': _self.activeVideo.video_thumb_big,
                'url_to_share'  : _self.options.site_url+'v/'+_self.activeVideo.video_id,
                'title' : $(nextVideoSliderItem).find('.mv-single-video-modal-related-video-title').text()
            }));
            stButtons.locateElements();




            $('#mvplayer-countdown-timer').circleProgress({
                startAngle: -Math.PI / 2,
                value: 1.0,
                size: 88,
                fill: {
                    color: "#FFFFFF"
                },
                emptyFill : "rgba(97,97,97,1)",
                animation : {
                    duration: 5000
                }
            });

            $(this._elementsSelectors.video.countDown).show();

            $('#mvplayer-countdown-timer').on('circle-animation-end',function(){
                $(this).trigger('click');
            });
        },

        updateEmbedGenerator: function(size_type,old_style,customWidth,customHeight){
            size_type = size_type || 'medium';
            old_style = $('.mv-single-video-modal-embed-old-style input[type="checkbox"]').is(':checked');
            $(this._elementsSelectors.video.embedSizeLi).removeClass('selected');
            var sizeLiButton = $(this._elementsSelectors.video.embedSizeLi+'.'+size_type);
            sizeLiButton.addClass('selected');
            var sizeButton = sizeLiButton.find('a');
            var width = parseInt(customWidth) || sizeButton.data('width');
            var height = parseInt(customHeight) || sizeButton.data('height');
            var video_id = $(this._elementsSelectors.video.embedGenerator).attr('data-video-id');

            if(!width){
                width = 0;
            }

            if(!height){
                height = 0;
            }

            $(this._elementsSelectors.video.embedCustomSizeHolder+' input[data-type="width"]').val(width);
            $(this._elementsSelectors.video.embedCustomSizeHolder+' input[data-type="height"]').val(height);

            $(this._elementsSelectors.video.embedCodeField).val(this._buildEmbedCode(video_id,width,height,old_style));
            $(this._elementsSelectors.video.embedVideoUrl).val(this._buildVideoUrl(video_id));
        },

        _buildEmbedCode : function(video_id,width,height,old_style){
            old_style = old_style || false;
            width     = parseInt(width) || 640;
            height    = parseInt(height) || 360;

            var extenstion =  '.mp4';
            var url = this.options.embed_url+'flv_player/embed.php?video_id='+video_id;

            if(this.activeVideo.player_conf.embed_hash){
                url += url+'&h='+this.activeVideo.player_conf.embed_hash;
            }

            if(this.activeVideo.player_conf.embed_no_ads === true){
                url += url+'&noads=1';
            }

            if(old_style){
                url = 'flv_player/jwconfigembed.php?video_id='+video_id+extenstion;
                return '<object id="flowplayer" width="'+width+'" height="'+height+'" data="'+this.options.embed_old_pl_url+'" type="application/x-shockwave-flash"><param name="flashvars" value="config='+url+'" /><param name="movie" value="'+this.options.embed_old_pl_url+'" /><param name="allowfullscreen" value="true" /></object>';
            }

            return '<iframe width="'+width+'" height="'+height+'" src="'+url+'" frameborder="0" allowfullscreen="true"></iframe>';
        },

        _buildVideoUrl : function(video_id){
            return this.options.site_url+'v/'+video_id;
        },

        getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        setOpacity : function(opacity,animated){
            if(this.opacityInterval) {
                clearInterval(this.opacityInterval);
            }

            if(animated){
                $( ".adjust-opacity" ).animate({
                    opacity: opacity
                }, 500, function() {
                    // Animation complete.
                });
            }else{
                $('.adjust-opacity').css({
                    'opacity' : opacity
                });
            }
        },

        renderRelatedVideos: function(video_data){
            var relateds = video_data.relateds || []
            if(relateds.length == 0){
                return;
            }

            $('#mv-single-video-modal .mv-single-video-modal-content-player .mv-single-video-modal-player-wrap-next-video,#mv-single-video-modal .mv-single-video-modal-content-player .mv-single-video-modal-player-wrap-prev-video').show();


            var template = this.videoModalTemplates.video.slider({
                'data'      : relateds,
                'video'     : video_data
            });

            $(this._elementsSelectors.default.relatedContentBottom).html(template);

            $(this._elementsSelectors.default.relatedContentBottom).find('.owl-carousel').owlCarousel({
                navClass : ['mv-feed-content-slider-left','mv-feed-content-slider-right'],
                itemClass : 'mv-feed-slider-item',
                loop:false,
                margin:14,
                lazyLoad : true,
                stagePadding:60,
                nav:true,
                slideBy : 5,
                mouseDrag: false,
                touchDrag: false,
                pullDrag: false,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:7
                    },
                    1280:{
                        items:7

                    },
                    1440:{
                        items:7
                    },
                    1900:{
                        items: 9
                    }
                }
            })
        },

        /**
         * Shows video modal
         */
        showVideoModal : function(callback){
            var _self = this;
            if($('#mv-single-video-modal').is(':visible')){
                if(typeof callback == 'function'){
                    callback();
                }
                return;
            }

            //setTimeout(function(){
            //    $('#mv-single-video-modal').addClass('show-sidebar');
            //},3000);

            $('body').css('overflow','hidden');
            $('#mv-single-video-modal').css('display','block');
            if(typeof callback == 'function'){
                setTimeout(function(){
                    callback();
                }, 500);

            }
            //$('#mv-single-video-modal').fadeIn('fast',function(){
            //    if(typeof callback == 'function'){
            //        setTimeout(function(){
            //            callback();
            //        }, 500);
            //
            //    }
            //});
            //if(this._videoPlayer.getState() != "PLAYING"){
            //    this._videoPlayer.play();
            //}
        },

        /**
         * Shows video modal
         */
        hideVideoModal : function(){
            var _self = this;
            $('body').css('overflow','visible');
            if($('#mv-single-video-modal').is(':hidden')){
                return;
            }
            clearTimeout(this.topInterval);
            this.videoHistoryIncrement = 0;
            this.hideEmbedGenerator();
            this.hideCountdownScreen();
            $('#mv-single-video-modal').css('display','none');
            $('.mv-single-video-modal-player-wrap-next-video').removeClass('disabled').css('display','none')
            $('.mv-single-video-modal-player-wrap-prev-video').addClass('disabled').css('display','none');
            setTimeout(function(){
                _self._videoPlayer.forceAdvertismentClean();
                _self._videoPlayer.stop();
                $(_self._elementsSelectors.default.relatedContentBottom).html('');
            },200);

            //$('#mv-single-video-modal').fadeOut('fast',function(){
            //    _self._videoPlayer.forceAdvertismentClean();
            //    _self._videoPlayer.stop();
            //    $(_self._elementsSelectors.default.relatedContentBottom).html('');
            //});

        },

        showEmbedGenerator : function(){
            $(this._elementsSelectors.video.embedGenerator).addClass('active');
        },

        hideEmbedGenerator : function(){
            $(this._elementsSelectors.video.embedGenerator).removeClass('active');
        },

        /**
         * pre renders video modal template with placeholder data
         */
        preRenderVideoModalTemplate: function(){
            var template = this.videoModalTemplates.video.main();
            $(template).appendTo($('body'));
            this.initVideoPlayer();
        },

        openChromeApp: function(video_id,seconds, volume) {
            var url = this.options.site_url+"?CIA=1&ci_c=chromeappembed&video_id="+video_id;
            if (seconds) {
                url += "&elapsed=" + parseInt(seconds);
            }
            if(volume){
                url += "&v=" + parseInt(volume);
            }
            chrome.runtime.sendMessage(this.options.pip_key, {openUrl: url}, function (reply) {
            });
        },

        /**
         * Inits video player only once
         */
        initVideoPlayer: function(){
            if(this._videoPlayer){
                return;
            }

            var _self  = this;
            //var anotationsPluginUrl = _self.options.site_url;

            //if (this._surpriseEnabled) {
            //    $('.mv-single-video-modal-player-wrap').p17popup({
            //        'hide' : function(){
            //            _self.showCountdownScreen();
            //        }
            //    });
            //}

            this._videoPlayer = jwplayer("mvplayer").setup({
                file : 'dummy.mp4',
                locale : _self.lang.player,
                app: 'myvideo',
                autostart: false,
                width: '100%',
                height: '100%',
                //aspectratio: "16:9",
                googima : true,
                tracks : [],
                "advertisment": {
                    client: 'vast',
                    skipoffset: 6,
                    admessage: 'á áááááá ááá¡á á£ááááá xx á¬ááá¨á',
                    skiptext: 'ááááá¢ááá',
                    skipmessage: 'ááááá¢ááá xx á¬ááá¨á'
                },
                pip: {
                    enabled: (navigator.userAgent.toLowerCase().indexOf('chrome') > -1),
                    'clickCallback': function (instance, time) {
                        var volume = instance.jwGetVolume();

                        _self.trackEvent('pip','pip video open')
                        if (!_self.chromeAppInstalled) {
                            chrome.webstore.install("", function (e) {
                                    _self.chromeAppInstalled = true;
                                    _self.openChromeApp(_self.activeVideo.video_id,time, volume);
                                    instance.jwPause();
                                },
                                function (e) {
                                    console.log("install rejected");
                                }
                            );
                        } else {
                            _self.openChromeApp(_self.activeVideo.video_id,time, volume);
                            instance.jwPause();
                        }
                    }
                },
                plugins:{
                   "Scripts/mvplayer/3.0/anotations.js": {
                       anotations: {
                           "data": [],
                           "link":[]
                        }
                    }
                },
                events : {
                    onReady:function(){
                        $("#mvplayer_banner").detach().appendTo("#mvplayer.jwplayer .jwmain");

                    },
                    onPlay:function() {
                        if(_self.videoPlayerSeeking){
                            _self.videoPlayerSeeking = false;
                            return;
                        }

                        _self.hideOverlayBanner();
                    },
                    onSeek:function(){
                        _self.videoPlayerSeeking = true;
                    },
                    onPause: function(){
                        _self.showOverlayBanner();
                    },
                    onTime: function(time){

                        if (Math.floor(time.position) >= Math.floor(_self._videoPlayer.getDuration() - 10)) {
                            if(_self._surpriseEnabled && !_self._p17Loaded) {
                                //$('.mv-single-video-modal-player-wrap').p17popup('preparePopup');
                                project17fullscreen.init('709BC67866FD0EAEFBBE1327CB5CD5F35AF42ECF', 'Myvideo', '#p17-holder', function() {

                                    //_self.showCountdownScreen();
                                    //console.log($('#p17-holder').children().length);
                                    _self._p17Loaded = false;

                                });

                                _self._p17Loaded = true;

                            }
                        }



                        if (Math.floor(time.position) >= (_self._videoPlayer.getDuration() - 5)){
                            _self.hideOverlayBanner();
                        }

                        if(_self.overlayBannerSeenOnSeek){
                            return;
                        }
                        if(Math.floor(time.position) > 10){
                            _self.showOverlayBanner();
                            _self.overlayBannerSeenOnSeek = true;
                        }
                    },
                    onFullscreen: function(api){
                        setTimeout(function(){
                            _self.isFullscreen = api.fullscreen;
                        },300);

                    },
                    onResize : function(event){
                        if($('.jwplayer').hasClass('jwfullscreen')) {
                            return;
                        }
                            if(!_self.isFullscreen) {
                                $('.video-title-partial-holder').css('width', event.width);
                            }

                    },
                    onComplete : function(){
                        if (_self._surpriseEnabled && _self._p17Loaded) {
                            //$('.mv-single-video-modal-player-wrap').p17popup('showPopup');
                            $('#p17-holder').show();
                            project17fullscreen.show();
                            _self._p17Loaded = false;
                            _self._p17interval = setTimeout(function(){
                                _self.showCountdownScreen();
                                $('#p17popup-image-controls-no').trigger('click');
                            },12000);
                        }else {
                            _self.showCountdownScreen();
                        }
                    }
                }
            });
        },

        showOverlayBanner: function(){
            if(this.overlayBannerVisible){
                return;
            }
            this.overlayBannerVisible = true;

            if (typeof $.openxtag == 'undefined') {
                return;
            }

            _self = this;

            $('#mvplayer_banner .banner_code').html('');
            $('#mvplayer_banner .banner_code').openxtag('zone', this.playerBannerZoneId, {
                source : _self.playerBannerZoneSource
            }, function () {
                if($("#mvplayer_banner .banner_code").children().length > 1){
                    $("#mvplayer_banner").show();
                }
            });
        },

        hideOverlayBanner: function(){
            $("#mvplayer_banner").hide();
            this.overlayBannerVisible = false;
        },

        resetOverlayBanner: function(){
            $("#mvplayer_banner").hide();
            this.overlayBannerVisible = false;
            this.overlayBannerSeenOnSeek = false;
        },

        /**
         * Compiles video tempalte to handlebars
         * @returns {*}
         */
        compileVideoModalTemplates: function(){
            var videoTitleSource    = $('#'+this.templateNames.parts.video_title).html();
            var videoSliderTemplate = $('#'+this.templateNames.modal.video.slider).html();
            var videoUserTemplate   = $('#'+this.templateNames.modal.video.user).html();
            var videoActionsTemplate   = $('#'+this.templateNames.modal.video.actions).html();
            var videoSidebarTemplate   = $('#'+this.templateNames.modal.video.sidebar).html();
            var embedGeneratorTemplate   = $('#'+this.templateNames.parts.embed_generator).html();
            var countDownTemplate   = $('#'+this.templateNames.modal.video.countDown).html();
            //var videoCommentsTemplate  = $('#'+this.templateNames.modal.video.comments).html();


            Handlebars.registerPartial("videoTitlePartial", $('#'+this.templateNames.parts.video_title).html());
            Handlebars.registerPartial("videoRelatedItemPartial", $('#'+this.templateNames.parts.related_video).html());
            Handlebars.registerPartial("videoUser", videoUserTemplate);
            Handlebars.registerPartial("videoActions", videoActionsTemplate);
            Handlebars.registerPartial("videoSidebar", videoSidebarTemplate);
            Handlebars.registerPartial("embedGenerator",embedGeneratorTemplate);
            Handlebars.registerPartial("countDown",countDownTemplate);

            var mainSource   = $('#'+this.templateNames.modal.default).html();

            this.videoModalTemplates.video.main     =  Handlebars.compile(mainSource);
            this.videoModalTemplates.video.title    =  Handlebars.compile(videoTitleSource);
            this.videoModalTemplates.video.user     =  Handlebars.compile(videoUserTemplate);
            this.videoModalTemplates.video.countDown=  Handlebars.compile(countDownTemplate);
            this.videoModalTemplates.video.actions  =  Handlebars.compile(videoActionsTemplate);
            this.videoModalTemplates.video.sidebar  =  Handlebars.compile(videoSidebarTemplate);
            this.videoModalTemplates.video.slider   =  Handlebars.compile(videoSliderTemplate);
            this.videoModalTemplates.video.embedGenerator   =  Handlebars.compile(embedGeneratorTemplate);
            //this.videoModalTemplates.video.comments   =  Handlebars.compile(videoCommentsTemplate);
        },

        htmlspecialchars_decode : function(string, quote_style) {

            var optTemp = 0,
                i = 0,
                noquotes = false;
            if (typeof quote_style === 'undefined') {
                quote_style = 2;
            }
            string = string.toString()
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>');
            var OPTS = {
                'ENT_NOQUOTES': 0,
                'ENT_HTML_QUOTE_SINGLE': 1,
                'ENT_HTML_QUOTE_DOUBLE': 2,
                'ENT_COMPAT': 2,
                'ENT_QUOTES': 3,
                'ENT_IGNORE': 4
            };
            if (quote_style === 0) {
                noquotes = true;
            }
            if (typeof quote_style !== 'number') { // Allow for a single string or an array of string flags
                quote_style = [].concat(quote_style);
                for (i = 0; i < quote_style.length; i++) {
                    // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
                    if (OPTS[quote_style[i]] === 0) {
                        noquotes = true;
                    } else if (OPTS[quote_style[i]]) {
                        optTemp = optTemp | OPTS[quote_style[i]];
                    }
                }
                quote_style = optTemp;
            }
            if (quote_style & OPTS.ENT_HTML_QUOTE_SINGLE) {
                string = string.replace(/&#0*39;/g, "'"); // PHP doesn't currently escape if more than one 0, but it should
                // string = string.replace(/&apos;|&#x0*27;/g, "'"); // This would also be useful here, but not a part of PHP
            }
            if (!noquotes) {
                string = string.replace(/&quot;/g, '"');
            }
            // Put this in last place to avoid escape being double-decoded
            string = string.replace(/&amp;/g, '&');

            return string;
        },
        number_format : function (number, decimals, dec_point, thousands_sep) {
        number = (number + '')
            .replace(/[^0-9+\-Ee.]/g, '');
        var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function(n, prec) {
                var k = Math.pow(10, prec);
                return '' + (Math.round(n * k) / k)
                        .toFixed(prec);
            };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
            .split('.');
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '')
                .length < prec) {
            s[1] = s[1] || '';
            s[1] += new Array(prec - s[1].length + 1)
                .join('0');
        }
        return s.join(dec);
    }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );
