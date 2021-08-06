define("components/hero",["FR","jquery","underscore","modernizr","services/utilities"],function(e,o,i,t,n){var a,r,d,s,u,c,l,p,m,v,f={init:function(){b(),f.checkClipPathSupport(),f.initializeResponsiveImages()},checkClipPathSupport:function(){n.supportClipPath(o(".hero"))},initializeResponsiveImages:function(){o.cloudinary.responsive()}},h={bitrate:null,droppedFrames:null,fps:23,startupTime:null},g={update:function(e,o){h[e]!==o&&(h[e]=o,_.video.trigger("ANPL_QoSChange",h))},bindEvents:function(){_.video.on("timeupdate",function(e){if(void 0!==C.video.webkitDroppedFrameCount){var o=C.video.webkitDroppedFrameCount;o!==y&&(y=o,g.update("droppedFrames",y))}}),_.video.one("canplay",function(){g.reportStartupTime()}),r&&g.bindDashEvents()},bindDashEvents:function(){r.on(a.MediaPlayer.events.QUALITY_CHANGE_RENDERED,function(e){var o=r.getBitrateInfoListFor("video"),i=e.newQuality;g.isSet(o)&&g.isSet(o[i])&&g.update("bitrate",o[i].bitrate)}),r.on(a.MediaPlayer.events.PLAYBACK_ERROR,function(e){_.video.trigger("videoError",{player:"dash.js",data:e,type:e.error,message:"PLAYBACK_ERROR occurred"})})},reportStartupTime:function(){g.update("startupTime",moment().diff(m,"milliseconds"))},isSet:function(e){return null!=e&&""!==e}},_={},y=0,C={autoplay:!0,init:function(){C.cacheJQueryElements(),C.setCloudinaryConfig(),C.setAssetUrls(),C.updateHeroImageSrc(p),C.modifyCSSClasses(),C.hideYoutubeVideo(),C.addAnalyticsAttributes(),C.checkVideoSupport()},cacheJQueryElements:function(){_.window=e.$el.window,_.document=o(document),_.body=e.$el.body,_.hero=o(".hero,.hero_with_promotion,.hero__epic"),_.mute=o('<a href="javascript:;" class="hero__background__video_sound muted"><span class="sr-only">Toggle Sound</span><svg viewBox="0 0 48 43"><use xlink:href="#mute" class="mute" /><use xlink:href="#unmute" class="unmute" /></svg></a>'),_.imageContainer=_.hero.find(".hero__background__image, .hero_with_promotion__background__image"),_.heroImage=_.imageContainer.find("img"),_.videoContainer=o('<div class="hero__background__video"></div>')},addAnalyticsAttributes:function(){_.hero.attr("data-component-dab-id","DAB-20")},modifyCSSClasses:function(){_.hero.addClass("DAB-20"),_.hero.hasClass("hero--no_image")&&(_.hero.removeClass("hero--no_image").addClass("hero--image_above"),_.hero.find(".hero__content").removeClass("text-center"))},setCloudinaryConfig:function(){"true"==e.cloudinary.cloudUseCname?o.cloudinary.config({cloud_name:e.cloudinary.cloudName,cname:e.cloudinary.cloudCname,secure_distribution:e.cloudinary.cloudCname,secure:!0,private_cdn:!0}):o.cloudinary.config({cloud_name:e.cloudinary.cloudName,secure:!0})},setAssetUrls:function(){c="/DAB/DAB-20/"+v.name,p=o.cloudinary.video_thumbnail_url(c,{start_offset:0}),l=o.cloudinary.video_thumbnail_url(c,{start_offset:v.timestamp})},checkVideoSupport:function(){d=t.video.hls&&""!==t.video.hls,s=!!window.MediaSource,d||!s?C.createVideo():require(["dash"],function(e){a=e,C.createVideo()})},updateHeroImageSrc:function(e){_.heroImage.data("src",e).attr("src",e)},createVideo:function(){var e=d||s?[]:["webm","mp4","ogv"];if(m=moment(),_.video=o(o.cloudinary.video(c,{autoplay:!0,transformation:v.non_vbr_transformation,muted:!0,source_types:e,poster:p})),_.video.attr({"data-component-element":"HTML5Video","data-component-video-id":encodeURI(v.name.toLowerCase()),"data-component-video-name":v.name}),C.video=_.video[0],C.video.muted=!0,d){var i=o.cloudinary.url(c,{format:"m3u8",resource_type:"video",streaming_profile:v.streaming_profile});_.video.prepend('<source src="'+i+'" type="application/x-mpegURL">')}else if(s){r=a.MediaPlayer().create();var t=o.cloudinary.url(c,{format:"mpd",resource_type:"video",streaming_profile:v.streaming_profile});r.getDebug().setLogToBrowserConsole(!1),r.initialize(C.video,t,!0),1e3===r.getInitialBitrateFor("video")&&r.setInitialBitrateFor("video",2e3)}_.imageContainer.first().before(_.videoContainer),_.video.css("background-image","url("+l+")"),_.videoContainer.append(_.video,_.mute),_.window.trigger("DigitalDataDOM_Changed"),C.bindEvents(),g.bindEvents(),C.setMuteButtonPosition()},showVideo:function(){_.hero.addClass("DAB-20--ready"),C.updateHeroImageSrc(l),C.getVideoIsInView()||C.pause()},hideYoutubeVideo:function(){o(".component_container").first().has(".youtube_video_player").hide()},bindEvents:function(){_.mute.on("click",function(){_.video.prop("muted",!_.video.prop("muted"))}),_.video.on("canplay",function(){C.showVideo(),C.setMuteButtonPosition()}),_.video.one("play",function(){_.video.attr("poster",l)}),_.video.on("volumechange",C.setMuteClass),_.video.on("pause",function(e){"hidden"!==document.visibilityState&&(u=C.getVideoIsInView())}),_.video.on("play",function(e,o){o?u&&e.preventDefault():u=!1}),_.document.on("visibilitychange",function(){"hidden"===document.visibilityState?C.pause():C.getVideoIsInView()&&C.play()}),_.video.on("ended",C.onEnd),_.window.on("scroll",C.onScroll)},onEnd:function(){C.stopped(),_.hero.removeClass("DAB-20--ready")},setMuteClass:function(){C.video.muted?_.mute.addClass("muted"):_.mute.removeClass("muted")},setMuteButtonPosition:function(){_.window.scrollTop()+_.window.height()<=_.video.outerHeight()+_.video.offset().top?_.mute.addClass("sticky"):_.mute.removeClass("sticky")},onScroll:i.throttle(function(){C.setMuteButtonPosition(),C.autoplay&&!u&&(C.getVideoIsInView()?C.play():C.pause())},100),play:function(){_.video.trigger("play",!0)},pause:function(){_.video.trigger("pause")},stopped:function(){C.autoplay=!1},getVideoIsInView:function(){return _.window.scrollTop()<=_.video.offset().top+_.video.outerHeight()-e.$el.mainNav.outerHeight(!0)},supportsVideoAutoplay:function(e){var o,i;(i=document.createElement("video")).paused=!0,o="play"in i&&i.play(),e(!i.paused||"Promise"in window&&o instanceof window.Promise)}},w=!1,b=function(){!0===w&&C.supportsVideoAutoplay(function(e){e&&C.init()})},A={set_DAB_20:function(e){if(w=!!e){var o,t,n=window.location.pathname.toLowerCase();t="/"===n?function(e){return n===e.path}:function(e){var o=e.path?e.path.toLowerCase():null;return-1!==n.indexOf(o)},o=i.find(e.videos,t),(w=!!o)&&(v={name:o.name,timestamp:o.timestamp,non_vbr_transformation:e.non_vbr_transformation||"static_bitrate_720_2m",streaming_profile:e.streaming_profile||"dab_20"})}}};return o(function(){return f.init()}),{AB:A,init:f.init}});
//# sourceMappingURL=hero.js.map