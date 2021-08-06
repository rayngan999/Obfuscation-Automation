
// https://smiledirectclub.com/static/sdc_cms/js/vimeo_overlay.js
(function() {
  var body = $('body');
  var overlay = $('<div/>', {class: 'sdc-vimeo__overlay'});
  var closeButton = $('<button>Close Ãâ</button>').addClass('sdc-vimeo__close');
  var videoWrapper = $('<div/>', {class: 'sdc-vimeo__video'}).append(closeButton);
  body.prepend(overlay);

  var openVideo = function (event) {
    event.preventDefault();

    var placeholderElement = $(event.currentTarget);
    var data = {
      id: placeholderElement.data('video-id'),
      width: placeholderElement.data('video-width'),
      height: placeholderElement.data('video-height'),
      allowFullscreen: placeholderElement.data('allow-fullscreen').toLowerCase(),
    };

    var videoElement = $('<iframe/>', {
      src: 'http://player.vimeo.com/video/' + data.id,
      width: data.width,
      height: data.height,
      frameborder: "0",
      allowfullscreen: data.allowFullscreen,
      webkitallowfullscreen: data.allowFullscreen,
      mozallowfullscreen: data.allowFullscreen,
    });

    overlay.addClass('active');

    videoWrapper.addClass('active');

    body.css({overflow: 'hidden'});

    videoWrapper.append(videoElement);
  };

  var closeVideo = function () {
    overlay.removeClass('active');
    videoWrapper.removeClass('active');
    body.css({overflow: 'auto'});
    videoWrapper.find('iframe').remove();
  };

  overlay
    .after(videoWrapper)
    .on('click', closeVideo);
  closeButton.on('click', closeVideo);


  $('.page-content').on('click', '.article-video', openVideo);

})();

// https://smiledirectclub.com/static/sdc_cms/js/vimeo_hero.js

function VimeoHeroVideoPluginController($videoContainer){
  this.$videoContainer = $videoContainer;
  this.$placeholder = $videoContainer.siblings();
  this.videoId = parseInt($videoContainer.attr('data-video-id'));
  this.player = new Vimeo.Player($videoContainer.find('iframe')[0], {
    responsive: true
  });
  this.player.on('ended', this.onPlaybackEnd.bind(this));
  this.$ready = Promise
    .all([this.player.getVideoHeight(), this.player.getVideoWidth()])
    .then(([height, width]) => {
       this.height = height;
       this.width = width;
       this._whenDimensionsReady();
    });
}

VimeoHeroVideoPluginController.prototype._whenDimensionsReady = function() {
  const
    ratio = this.height / this.width * 100,
    pd = `${ratio}vw 0 0 0`;
  this.$videoContainer.css('padding', pd);
};

VimeoHeroVideoPluginController.prototype.onPlaybackEnd = function() {
  this.$placeholder.removeClass('hidden');
  this.$videoContainer.addClass('hidden');
  this.player.loadVideo(this.videoId);
};

VimeoHeroVideoPluginController.prototype.onPlaybackStart = function(e) {
  e.preventDefault();
  this.$placeholder.addClass('hidden');
  this.$videoContainer.removeClass('hidden');
  this.player.play();
};


(function() {
  if (typeof(CMS) !== 'undefined' && CMS) {
    if (CMS.$){
      CMS.$(window).on('cms-content-refresh', connectActivators);
    }
  }
  $(document).ready(connectActivators);
  function connectActivators() {
    const
      activators = $('[data-type="sdc-video"]'),
      targets = {};
    activators.map(function (_, handler) {
      let target = handler.attributes['data-target'].value;
      if (!targets[target]) {
        let $videoContainer = $(`.${target}`);
        targets[target] = new VimeoHeroVideoPluginController(
          $videoContainer
        );
      }
    });
    activators.on('click', function ($event) {
      targets[this.attributes['data-target'].value].onPlaybackStart($event);
    });
  }
})();

// https://smiledirectclub.com/static/website/js/vimeo_hero_video_v3.js

function VimeoHeroVideo($videoContainer, $placeholder, videoId) {
  this.$videoContainer = $videoContainer;
  this.$placeholder = $placeholder;
  this.$extraPlayButtons = $('.vimeo-hero-video-play-btn');
  this.videoId = videoId;
  this.player = new Vimeo.Player($videoContainer.find('iframe')[0], {
    responsive: true
  });
}

VimeoHeroVideo.prototype.init = function() {
  this.$placeholder.add(
    this.$placeholder.next('.white-section')
  ).find('a.btn').add(
    this.$extraPlayButtons
  ).on('click', this.onPlaybackStart.bind(this));
  this.player.on('ended', this.onPlaybackEnd.bind(this));
  return this;
};

VimeoHeroVideo.prototype.onPlaybackEnd = function() {
  this.$placeholder.add(this.$extraPlayButtons).removeClass('hidden');
  this.$videoContainer.addClass('hidden');
  this.player.loadVideo(this.videoId);
};

VimeoHeroVideo.prototype.onPlaybackStart = function(e) {
  e.preventDefault();
  this.$placeholder.add(this.$extraPlayButtons).addClass('hidden');
  this.$videoContainer.removeClass('hidden');
  this.player.play();
};