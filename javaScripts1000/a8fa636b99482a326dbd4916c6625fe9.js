class AudioPlayer {
  constructor(playerHTML, mediaUrl, thumbnailUrl, playerId) {
    this.playerHTML = playerHTML;
    this.domElementsDeclare();
    this.thumbnailUrl = thumbnailUrl;
    this.playerId = playerId;
    this.mediaUrl = this.updateUrl(mediaUrl);
    this.player = this.createPlayer();

    this.updateDownloadURL();

    this.domElementsEvents();
    this.handleEvents();
    this.updateVolumeProgress();
  }

  updateDownloadURL() {
    const downloadElement = document.querySelector('.absolute-b-l.padding-left .title-medium')
    if (!downloadElement) return
    downloadElement.setAttribute('href', this.mediaUrl)
  }

  updateUrl(mediaUrl) {
    const url = new URL(mediaUrl);
    url.searchParams.set('aw_0_1st.playerId', this.playerId);

    return typeof com_adswizz_synchro_decorateUrl != 'undefined' ?
      com_adswizz_synchro_decorateUrl(url.toString()) :
      url.toString()
  }

  createPlayer() {
    return new Howl({
      src: [this.mediaUrl],
      volume: 0.5,
      html5: true
    });
  }

  togglePlay(stop) {
    const { player } = this;
    const { playButton } = this.elements;

    if (player.playing() || stop) {
      player.pause();
      playButton.classList.remove('fa', 'fa-pause', 'fa-2x');
      playButton.classList.add('pause', 'fa', 'fa-play-circle', 'fa-2x');
    } else {
      player.play();
      playButton.classList.remove('pause', 'fa', 'fa-play-circle', 'fa-2x');
      playButton.classList.add('fa', 'fa-pause', 'fa-2x');
    }
  }

  formatTime(secs) {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = (secs - minutes * 60) || 0;
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  updateTimeTracker() {
    const self = this;
    const { startTime, progress } = self.elements;
    const seek = self.player.seek() || 0;
    const currentTime = self.formatTime(Math.round(seek));

    startTime.innerText = currentTime;
    progress.value = (((seek / self.player.duration()) * 100) || 0);

    const retryInterval = setInterval(() => {
      if (self.player.playing()) {
        clearInterval(retryInterval);
        requestAnimationFrame(self.updateTimeTracker.bind(self));
      }
    }, 500);
  }


  domElementsDeclare() {
    const { playerHTML } = this;
    this.elements = {
      playButton: playerHTML.querySelector('.play-btn'),
      progress: playerHTML.querySelector('.seekObj'),
      startTime: playerHTML.querySelector('.start-time'),
      endTime: playerHTML.querySelector('.end-time'),
      volumeProgress: playerHTML.querySelector('.volume-progress'),
      volumeUp: playerHTML.querySelector('.volume-up'),
      volumeOff: playerHTML.querySelector('.volume-off')
    }
  }

  domElementsEvents() {
    const { playButton, progress, volumeProgress, volumeUp, volumeOff } = this.elements;
    playButton.addEventListener('click', () => { this.togglePlay(); }); // Arrow function to keep 'this'
    progress.addEventListener('click', event => { this.seekProgress(event); });
    volumeProgress.addEventListener('input', event => {
      this.seekVolumeProgress(event);
    });
    volumeUp.addEventListener('click', () => {
      this.player.mute(false);
      this.player.volume(1);
      this.updateVolumeProgress();
    });
    volumeOff.addEventListener('click', () => {
      this.player.mute(!this.player._muted);
      this.updateVolumeProgress();
    })
  }

  updateVolumeProgress() {
    this.elements.volumeProgress.value = this.player._muted ? 0 : this.player.volume() * 100;
  }

  changeVolume(volume) {
    if (volume == 0) {
      this.player.mute()
    }
    this.player.volume(volume);
  }

  seekProgress(event) {
    const { progress } = this.elements;
    const percent = event.offsetX / progress.offsetWidth;
    this.player.seek(percent * this.player.duration());
    progress.value = percent * 100;
  }

  seekVolumeProgress() {
    const { volumeProgress } = this.elements;
    const percent = volumeProgress.value / volumeProgress.offsetWidth;
    this.player.mute(false);
    this.player.volume(percent);
  }

  handleEvents() {
    const { endTime } = this.elements;

    this.player.on('play', () => {
      endTime.innerText = this.formatTime(Math.round(this.player.duration()));

      // Start updating the progress of the track.
      requestAnimationFrame(this.updateTimeTracker.bind(this));
    });

    this.player.on('end', () => {
      this.togglePlay(true);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const useRequire = (typeof requirejs == 'function');
  const howlerURL = 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.2/howler.min.js';

  if (useRequire) {
    require([howlerURL], function (Howler) {
      buildAudioPlayers()
    });
  } else {
    loadScriptPromisify(howlerURL).then(() => {
      buildAudioPlayers();
    })
  }

  function buildAudioPlayers() {
    const audioPlayers = document.querySelectorAll('.audio-player');
    audioPlayers.forEach(player => {
      const { mediaUrl, thumbnailUrl, playerId } = player.dataset;
      if (!mediaUrl || !thumbnailUrl) return;
          if (typeof __tcfapi != 'undefined') {
              __tcfapi('getTCData', 2, (tcData, success) => {

                  if (success) {

                      const newMediaUrl = new URL(mediaUrl);
                      newMediaUrl.searchParams.set('aw_0_req.userConsentV2', tcData.tcString);
                      new AudioPlayer(player, newMediaUrl.toString(), thumbnailUrl, playerId);

                  } else {

                      const newMediaUrl = new URL(mediaUrl);
                      newMediaUrl.searchParams.set('aw_0_req.gdpr', true);
                      new AudioPlayer(player, newMediaUrl.toString(), thumbnailUrl, playerId);

                  }

              });
          }

    });
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
});