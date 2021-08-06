define("components/articleComponent",["FR","jquery"],function(o,e){var n=function(){o.$el.body.on("click",".video_play_button",function(n){var i=e(this),t=i.data("video-link"),d=i.data("component-video-id"),a=i.data("component-video-name");o.$el.window.trigger("youtube-video-modal-open",[{videoUrl:t,videoID:d,videoName:a}])})};e(function(){n()})});
//# sourceMappingURL=articleComponent.js.map
