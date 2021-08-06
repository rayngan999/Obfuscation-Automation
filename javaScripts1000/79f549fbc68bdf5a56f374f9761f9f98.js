var start = 0;
var end = 0

;(function (win, id, factory) {
  "use strict";
  if (typeof (module) !== 'undefined' && module.exports) {
    module.exports = factory(id, win)
  } else if (typeof (define) === 'function' && define.amd) {
    define(function () {
      return factory(id, win)
    })
  } else {
    if (!window.RadioPlayer) {
      win[id] = factory(id, win)
    }
  }
})(window, 'RadioPlayer', function (id, window) {
  "use strict";
  var extend = function (origin, add) {
    if (!add || typeof add !== 'object') return origin;
    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
      origin[keys[i]] = add[keys[i]]
    }
    return origin
  };

  function EventDispatch() { }
  EventDispatch.prototype = {
    constructor: EventDispatch,
    on: function (evt, fn, ctx) {
      this.subscribe(evt, fn, ctx, false)
    },
    one: function (evt, fn, ctx) {
      this.subscribe(evt, fn, ctx, true)
    },
    off: function (evt, fn) {
      if (this._listeners === undefined) return;
      var listerners = this._listeners,
        _fn;
      for (var i = 0, len = listerners[evt].length; i < len; i++) {
        _fn = listerners[evt][i].fn;
        if (_fn === fn) {
          listerners[evt].splice(i, 1);
          break
        }
      }
    },
    subscribe: function (evt, fn, ctx, once) {
      if (this._listeners === undefined) {
        this._listeners = {}
      }
      this._listeners[evt] = this._listeners[evt] || [];
      this._listeners[evt].push({
        fn: fn,
        ctx: ctx,
        once: (once || false)
      })
    },
    trigger: function (evt) {
      if (this._listeners && this._listeners.hasOwnProperty(evt)) {
        var args = Array.prototype.slice.call(arguments, 1);
        var listerners = this._listeners,
          _list = [],
          _listerner;
        while (listerners[evt].length > 0) {
          _listerner = listerners[evt].shift();
          if (typeof _listerner.fn === 'function') {
            _listerner.fn.apply(_listerner.ctx, args)
          }
          if (!_listerner.once) {
            _list.push(_listerner)
          }
        }
        listerners[evt] = _list
      }
    }
  };

  

  

  var RadioPlayer = function () {
    this.version = "1.17052018",
    this.player = null;
    this.playing = false;
    this.started = false;
    this.cast = false;
    this.vol = 1;
    this.duration = 0;
    this.position = 0;
    this.load_percent = 0;
    this.seekable = false;
    this.lastStatusRadio = null;
    this.ads = {adUnit: '', slot: null};
    this.intervalUpdate = null;
    this.track = {
      play: false,
      do25: false,
      do50: false,
      do75: false
    };
    this.config = {};
    this.liveConfig = xsl.fn.getStationArray();
    this.html = document.getElementsByTagName('html')[0];
    this.init(this.liveConfig);
    this.second = false;
  };

  RadioPlayer.prototype = {
    constructor: RadioPlayer,
    init: function (config) {
      var that = this;
      this.config = config;
      this.MSId = 'lgnPlayer';
      this.autoplay = false;

      this.container = document.getElementById('radioComponent');
      if(!this.container){
        console.error('content radioComponent is null');
        return;
      }
      //var audio = document.createElement('audio');


      //this.container.appendChild(audio);
      //this.audio = audio;
      //this.playList = [];
      this.draw(config);
      //this.bindEvents();
      

      if(document.body.dataset.require == 'rppplayer' && document.body.classList.contains('home')){
        //if(document.body.classList.contains('home')) this.reconnect({play: true});
        //else this.load(config.media);
        this.autoplay = true;
      }
      this.createLighNing({type: 'live', idMS: this.liveConfig.media});



      this.findSubPlayers();

      try {
        swSpa.aftermount.push({
          fn: function(){
            that.findSubPlayers();
            that.setFr();
          }
        });
      } catch (e) { }
    },
    isMobile: navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      || false,
    updateInfo: function(){
      var that = this;      
      var id =  that.liveConfig.second ? 54 : that.liveConfig.id;

      xsl.fn.setLive(id).then(function(data){
        that.setTitle(data.onlive.name, null);
        that.setCover(data.onlive.imageWeb || data.onlive.imageUrl);
        that.setLink(data.onlive.url_programa);
      });
      
    },
    initInterval: function(){
      var that = this;
      that.updateInfo();
      that.intervalUpdate = setInterval(function(){
        that.updateInfo();
      },60000);
    },
    destroyInterval: function(){

      clearInterval(this.intervalUpdate);
      console.log("interval destroy");
    },
    binnedSubPlayer: function(el){

      var that = this, data = null, active = null, duratioElement = el.querySelector('.total-time');
      if(this.playing && this.config.id == el.dataset.id){
        el.classList.add('playing');
      } 
      
      active = el.querySelector('[data-active]') || el; 


 
      if(typeof _firtPlayers !== 'object') return;
      data = _firtPlayers[el.dataset.id];


      active.onclick = function(e){
        event.preventDefault ? event.preventDefault() : event.returnValue = false;        
        //var dataFirt = this.dataset.source;
        if(this.classList.contains('loading')) return;

        var dataFirt =  _firtPlayers[el.dataset.id];          
        if(dataFirt){
          that.html.classList.remove('rd-playing');           
          dataFirt.method = 'play';
          if(that.config.id == dataFirt.id){
            that.playPause();
          }else{
            //this.classList.add('loading');
            that.controlsUpdate('removeLoading');
            that.changeAudio(dataFirt);
            that.controlsUpdate('loading');
          } 
        }
      }
    },
    setFr: function(){
      var that = this;
     
      if(document.body.dataset.require == "rppplayer" && document.body.classList.contains('home')){
        
        var estationArray = xsl.fn.getStationArray();

      if(that.liveConfig.id !== estationArray.id){
        
          that.liveConfig = estationArray;
          that.changeAudio(that.liveConfig, true);   
          that.updateInfo();

      }else if(this.player.paused)  that.reconnect({play: true}); 

        //else if(!that.playing){ 



       // if(this.player.playing)  
       //that.reconnect({play: true}); 

          //}

      }
    },
    findSubPlayers: function(){
      var that = this;
      var players = document.querySelectorAll('.faux-audio');
      players.forEach(function(el){
        that.binnedSubPlayer(el);       
      });
    },
    changeAudio: function(config, setfr){

      var that = this;
      if(this.player && !this.player.paused){
        this.player.pause();
        this.controlsUpdate('pause');
      }       
      

      this.config = config;

      this.destroyInterval();

      ;

      
      if(config.method == 'live'){
        if(this.lastStatusRadio == 'on' || setfr) this.reconnect({setfr: setfr});  
        this.initInterval();

        //this.reconnect({play: (this.lastStatusRadio == 'on' ? true : false)});  
      }else{
        //this.lastStatusRadio = this.playing && this.config.method == 'live' ? 'on' : 'off'

        
        this.setTitle(this.config.title);
        this.setCover(this.config.cover);        
        this.setLink(this.config.url);
        //this.load(config.media); 


        this.createLighNing({type: 'media', idMS: this.config.id});
        





        /*if (!this.seekable) {
          this.timer = setInterval(this.onProgress.bind(this), 500)
        }*/

        swift.bindLink(this.ui.title);
        swift.bindLink(this.ui.cover);

      } 



      this.stopOtherMedia();

    },
    createLighNing: function({type, idMS}){
      var that = this;
      that.nIdMS = idMS;

      this.container.classList.add('ca-loading')

      if(that.player){
        that.player.load({type: type, id: idMS});
        return;
      }

      loadMSPlayer(that.MSId, {
        type: type,
        id: idMS,
        volume: 1,
        appName: 'audioplayer_web',
        appType: 'web-app',
        renderAs: 'audio',
        view: 'none',
        autoplay: this.autoplay,
        debug: false
      }).then(player => {
        that.player = player
        player.on('play', that.onPlay.bind(that))
        player.on('loadeddata', that.onLoadMetadata.bind(that))
        player.on('timeupdate', that.onTimeUpdate.bind(that))
        player.on('durationchange', that.onTimeUpdate.bind(that))
        player.on('pause', that.onPause.bind(that))

        player.on('ended', that.onEnded.bind(that))
        
        

        //player.on('ready', function(){})
        player.on('canplay', that.onCanplay.bind(that))
      });


    },

    onLoadStart: function () {
      this.trigger('loadstart')
    },
    onCanplay: function () {
      this.container.classList.remove('ca-loading');
      /*this.seekable = this.audio.seekable && this.audio.seekable.length > 0;
      if (this.seekable) {
        this.timer = setInterval(this.onProgress.bind(this), 500)
      }*/
      /*
      var name = this.list[this.index].name || '',
          time = this.list[this.index].time || '';
      this.trigger('canplay', time, name, this.list[this.index])
      */
    },

    onLoadMetadata: function () {
  
      if (this.player.duration === Infinity) {
        this.container.classList.add('live');
        //this.player.removeEventListener('timeupdate', this.listeners.timeupdate);
      } else {
        this.ui.LabelTimeTotal.innerText = formatSec(this.player.duration);
        this.container.classList.remove('live');
        //this.clipDuration();       
      }
      //this.container.classList.remove('ca-loading');
      this.container.classList.remove('ca-loading');
      this.trigger('loadedmetadata');
      //this.play(this.config.method === 'live'? 1 : 0); // verificar
      
      //if(this.config.method !== 'live') this.play();  

       

      //this.trigger('loadedmetadata');
      //this.play(this.config.method === 'live'? 1 : 0); // verificar
      
      //if(this.config.method !== 'live') this.play();     

    },
    onPlay: function () {
      this.playing = true;
      
      if (!this.started) {
        this.started = true;
        this.container.classList.add('ca-started');
      }

      this.container.classList.remove('ca-loading');
      this.container.classList.add('ca-playing');

      if(this.config.method !== 'live'){
        this.controlsUpdate('play');
        this.handleTrack('play');
      }else{
        this.html.classList.add('rd-playing');
        this.lastStatusRadio =  'on';
        this.handleTrack('live-play'); 
      }     

      if(this.config.url && this.config.url.includes("/el-gran-resumen-de-la-hora")){
        this.handleTrack('play', true);
      }  

    },
    onTimeUpdate: function () {
      //if (this.vast && this.vast.status === 2) return;
      if (this.player && !this.player.paused) {
        var formatTime, playedPercent;
        try {

          //castPlayer;
          this.position = this.player.currentTime;
          this.duration = this.player.duration === Infinity ? null : this.player.duration;


          formatTime = formatSec(this.position);
          playedPercent = ((this.position / this.duration) * 100).toFixed(6);
        } catch (e) { }

        //this.trigger('timeupdate', playedPercent, this.position, this.duration);

        this.ui.sliderMove.style.width = playedPercent + '%';
        this.ui.labelTime.innerText = formatSec(this.player.currentTime);

      }
    },
    controlsUpdate: function(action){
      var btnPlaylist = null;
      if(this.config.playlistId){
        btnPlaylist = document.querySelector('[data-playlist-id="'+ this.config.playlistId +'"]');
        if(btnPlaylist) btnPlaylist.dataset.id = this.config.id;
      } 

      var btcs = document.querySelectorAll('.faux-audio[data-id="'+ this.config.id +'"]');
      
      
      //var currentId = this.config.id;

      btcs.forEach(function(el){
        var active = el.querySelector('[data-active]') || el;
        switch (action){          
          case 'play':
            el.classList.add('playing');              
            if(active.classList.contains('loading')) active.classList.remove('loading');
            //if(btnPlaylist) btnPlaylist.classList.add('playing'); 
          break;
          case 'pause':
            el.classList.remove('playing');
            //if(btnPlaylist) btnPlaylist.classList.remove('playing');                       
          break;
          case 'removeLoading':
            if(active.classList.contains('loading')) active.classList.remove('loading');
          break;
          case 'loading':
            active.classList.add('loading');
          break;
        }
      });
    },
    onPause: function () {
      this.playing = false;
      //this.trigger('pause');
      this.container.classList.remove('ca-playing');

    },
    onEnded: function () {
      this.playing = false;
      this.trigger('ended');

      //this.handleTrack('ended');

      this.container.classList.remove('ca-playing');
      this.track = {
        play: false,
        do25: false,
        do50: false,
        do75: false,
      }
      this.controlsUpdate('pause');

      if(this.config.playlistId){
        var nextAudio = null     
        for (const au in _firtPlayers) {
          if(_firtPlayers[au].position == this.config.position + 1) nextAudio = _firtPlayers[au];
        }

        if(nextAudio) this.changeAudio(nextAudio);
      }    
      //if(rppplayer.playList && rppplayer.playList.length > 1) rppplayer.nextAudio(this.config.id);
    },
    onError: function (e) {
      //this.ui.wrap.classList.add('ca-error');
      //this.trigger('error', e)
    },
    onSeeking: function () {
      this.trigger('seeking');
      if(this.lastStatusRadio == 'on') this.container.classList.add('ca-loading');
    },
    onSeeked: function () {
      this.trigger('seeked');
      //this.container.classList.remove('ca-loading');
    },
    onProgress: function () {
      if (this.audio && this.audio.buffered !== null && this.audio.buffered.length) {
        this.duration = this.config.method === 'live' ? null : this.player.duration;
        this.load_percent = ((this.audio.buffered.end(this.audio.buffered.length - 1) / this.duration) * 100).toFixed(4);
        if (isNaN(this.load_percent)) {
          this.load_percent = 0
        }
        if (parseFloat(this.load_percent) >= 100) {
          this.clearLoadProgress()
        }
        this.trigger('progress', this.load_percent)
      }
    },
    onWaiting: function () {
      this.trigger('waiting')
    },
    clearLoadProgress: function () {
      if (this.timer !== undefined) {
        clearInterval(this.timer);
        delete this.timer
      }
    },
    reset: function () {
      this.clearLoadProgress();
      this.seekable = false;
      this.duration = 0;
      this.position = 0;
      this.load_percent = 0
    },
    load: function (url, ads) {
      console.log(this.player);
      //this.audio.src = url;

      //this.audio.load();
      

    },
    play: function (notFirePlay) {

      var that = this;


      /*if (!this.seekable) {
        this.timer = setInterval(this.onProgress.bind(this), 500)
      }*/

      //var $btu = document.querySelector('.faux-audio[data-id="'+ that.config.id +'"]');
      //$btu.classList.add('loading');

      
      /*if (this.vast && this.vast.status === 0) {
        this.vast.getContent();
        return;
      }*/

      //this.setTitle(this.config.title);
      //console.log(this.config);

      //if(this.config.cover) this.setCover(this.config.cover);
 
      //this.audio.play();

      //that.audio.play()
      
      this.player.play();


      //document.gerElementById("playRadio").dispatchEvent(new Event('click'));

      //this.controlsUpdate('play');
      

    }, 
    pause: function () {
      //this.setTitle(this.config.title, false, true);
      if(this.player){   
        this.player.pause();
        this.controlsUpdate('pause');
      }
    },
      
    stopOtherMedia: function(){
      if(typeof jwV == 'object') jwV.action('pause');

      if(typeof _audioEmbeds == 'object'){
        for (var i = 0; i < _audioEmbeds.length; i++) {
          if(_audioEmbeds[i].playing) _audioEmbeds[i].pause();
        }
      }
    },
    disconnect: function(){
      //this.audio.src = 'about:blank';
      //console.log('ff', this.config.title);
      //this.setTitle(this.config.title, false, true);    
      this.player.pause();
      //this.player.destroy();
     
      this.controlsUpdate('pause');
      this.lastStatusRadio = 'off';
      //this.load('');
      //this.load(config.media);

      //this.playing = false;
      this.container.classList.remove('ca-playing', 'ca-loading');
      this.html.classList.remove('rd-playing');
      //this.controlsUpdate('pause');

      //this.handleTrack('live-disconnect');
    },
    reconnect: function({setfr}){
      //this.load(this.config.media);



      //var dataTm = data || rppplayer.getConfigLive();

      //this.config = dataTm;
      //this.load(!this.config.second ? this.config.media : this.config.secondMedia);
      
        //this.player.play();
        //this.createLighNing()


        //if(this.player.isLive && setfr !== true || this.player.isLive && this.second == this.config.second && setfr !== true){
        if(this.player && this.player.isLive && this.second == this.config.second || this.player && this.player.isLive && this.player.paused && !this.config.second && this.config.media === this.nIdMS){
   
          this.player.play();
        }else{
          var idmed = (!this.config.second ? this.config.media : this.config.secondMedia);

          this.createLighNing({type: 'live', idMS: idmed});
        }

        this.second = this.config.second ? true : false;


        //if(this.config.method == 'live'){
        

        

        /*}else{


        }*/

        //this.playing = true;
        this.container.classList.add('ca-loading');
        
      

      // ---- this.updateInfo(); -----
          
      
      

      //this.handleTrack('live-reconnect');
    },
    
    playPause: function () {

      //if(this.player.paused) this.stopOtherMedia();
      if(this.config.method == 'live'){      
        
        if(this.player.paused){
          this.updateInfo();
          this.reconnect({play: true});

        } 
        else{
          //this.pause();         
          this.disconnect(); 

        } 
      }else{
        this[this.player.paused ? 'play' : 'pause']();

      }      
      
    },
    rewind10: function(){      
      this.progress(this.audio.currentTime - 10);
    },
    forward10: function(){      
      this.progress(this.audio.currentTime + 10);
    },

    progress: function (sec) {
      if (sec) {
        this.player.pause();
        this.player.currentTime = sec;
        this.player.play()
      } else {
        return this.player.currentTime
      }
    },
    draw: function (config) {
      var that = this;
      //var iframe = document.createElement("iframe");
      /*var iframeId = "iframe" + config.wrapId;

      iframe.scrolling = "no";
      iframe.setAttribute("id", iframeId);
      iframe.setAttribute("width", "100%");
      iframe.setAttribute("height", 75);
      iframe.frameBorder = 0;*/

      

      //this.container.appendChild(iframe);

      var rppplayer = this.container;
      //rppplayer.classList.add('wrapp-PlayerAudio');
      //rppplayer.classList.add('player-'+ (that.config.method === 'live' ? 'radio':'podcast'));
   

      that.playerBlock = rppplayer;
      //setTimeout(function(){
       // that.container.appendChild(rppplayer);
      //},400);
      

      //iframe = document.getElementById(iframeId); // TODO Â¿?
      //this.iframe = iframe;

      /*var whatsapp = this.isMobile ? '<li class="ca-sharewa">' +
        '<a href="whatsapp://send?text=' + config.title + ' ' + config.url + '" target="_blank" class="ca-circle ca-lnkwa" data-type="whatsapp">'+
          '<span class="ca-ico"></span>' +
        '</a>' +
      '</li>' : '';*/
      //var iFrWin = iframe.contentWindow;// || iframe.contentDocument;

      // css

      //var iFrDoc = rppplayer;
      //iFrDoc.addEventListener

      this.ui = {};

      // wrap
      //this.ui.wrap = find('.ca-wrap', rppplayer);

      // playpause

      this.ui.playPause = find('.live-play', rppplayer);
      this.ui.playPause.addEventListener('click', this.playPause.bind(this), false);

      //return radio
      this.ui.radioReturn = find('.return-radio', rppplayer)
      this.ui.radioReturn.addEventListener('click', this.handleReturn.bind(this), false);
      // slider
      this.ui.sliderMove = find('.ca-slidermove', rppplayer);
      //title
      this.ui.title = find('.title-live', rppplayer)
      //cover
      this.ui.cover = find('.image-cover', rppplayer)
      //background
      this.ui.background = find('.bg-filter', rppplayer)

      this.ui.contentItems = find('.schedule', rppplayer)
      

      // more modal
      /*this.ui.btnMore = find('.ca-icomore', iFrDoc);
      this.ui.btnMore.addEventListener('click', this.handleMore.bind(this), false);
      this.ui.btnMoreClose = find('.ca-modalclose', iFrDoc);
      this.ui.btnMoreClose.addEventListener('click', this.handleMore.bind(this), false);*/

      // copy
      //this.ui.btnCopy = find('.ca-lnkeb', iFrDoc);
      //this.ui.btnCopy.addEventListener('click', this.handleCopy.bind(this), false);

      // seek
      this.ui.sliderArea = find('.ca-sliderarea', rppplayer);
      this.ui.sliderArea.addEventListener('click', this.handleSeek.bind(this), false);

      // labelAdsSkip
      this.ui.adsLabelSkip = find('.ca-ads-label', rppplayer);

      this.ui.labelNext = find('.sch-name', rppplayer);
      
      // label progress
      this.ui.labelTime = find('.ca-currenttime', rppplayer);
      this.ui.LabelTimeTotal = find('.total-time', rppplayer);

      if(this.config.method === 'live'){
        this.initInterval();
      } 

    },
    setCover: function(url) {
      var that = this;
      var bgImg = new Image();
      bgImg.onload = function(){
        that.ui.cover.style.backgroundImage = 'url('+ url +')';      
        that.ui.background.style.backgroundImage = 'url('+ url +')';
        that.container.classList.add('loaded');
      };
      bgImg.src = url;      
    },
    setLink: function(url){
      this.ui.cover.href = url || '';
      this.ui.title.href = url || '';
    },

    setTimeTable: function(data, type){
      if(data[0] && type != 'PE_E'){
        this.ui.labelNext.textContent = data[0].name;
        this.ui.labelNext.closest('.item-next-1').style.display = 'block';

      }else this.ui.labelNext.closest('.item-next-1').style.display = 'none';
    },
    setTitle: function(title, fnClick, hideMarquee) {
      //var child = this.isMobile && !hideMarquee ? ('<marquee><span>' + title + '</span></marquee>') : '<span>' + title + '</span>';
      var child = '<span>' + title + '</span>';
      var link;
      if (fnClick) {
        link = document.createElement("a");
        link.innerHTML = child;
        link.onclick = fnClick;
      }
      this.ui.title.innerHTML = null;
      if (link){
        this.ui.title.appendChild(link);
      } else {
        this.ui.title.innerHTML = child;
      }
    },
    seekTo: function (seconds) {      
      this.progress(seconds);
    },
    handleSeek: function (event) {

      this.container.classList.add('ca-loading');
      var pos = (event.offsetX * this.player.duration) / this.ui.sliderArea.offsetWidth;
      this.progress(pos);
      //this.audio.currentTime = pos;

      var playedPercent = ((pos / this.duration) * 100).toFixed(6);
      this.ui.sliderMove.style.width = playedPercent + '%';
    },
    handleReturn: function (event) {
      this.container.classList.add('live');
      this.changeAudio(this.liveConfig);
    },
    handleTrack: function (event, granresumen) {
      try {
        var origin =  this.config.url ? (' | '+ this.config.url) : '';
        dataLayer.push({"event":"analyticsEvent","eventCategory": (granresumen ? "RPP_Player" : "audio_mediastream"),"eventAction":event,"eventLabel":this.config.id + origin}); 

      } catch (e) { }
    }
  };

  function find(str, doc) {
    var _document = doc || document;
    var result = _document.querySelector(str, doc);
    return result;
  };
  function findAll(str, doc) {
    var _document = doc || document;
    var result = _document.querySelectorAll(str, doc);
    return result;
  };

  function formatSec(second) {
    var _min, _sec;
    _min = parseInt(second / 60);
    _sec = parseInt(second % 60);
    return (_min >= 10 ? _min : '0' + _min) + ':' + (_sec >= 10 ? _sec : '0' + _sec)
  };


  /*function sendAudio(){
    if(typeof _firtPlayers !== 'object') return;

    el.classList.add('playing');
    that.singleAudio =  _firtPlayers[el.id] || {}

    that.connect();
  }*/


  if ('__proto__' in {}) {
    RadioPlayer.prototype.__proto__ = EventDispatch.prototype
  } else {
    extend(RadioPlayer.prototype, EventDispatch.prototype)
  };


  return RadioPlayer
});




var radioApp = new RadioPlayer();