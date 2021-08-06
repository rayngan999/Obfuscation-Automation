

                                        /* old PRE 2020 solution - still used by some parts of page */


function loadVideo(item) {
    var id = item.find('a').attr('id');
    if (firstRunG) {
        defineYtplayer(id);
    } else {
        ytplayer.loadVideoById(id);
    }
}

function defineYtplayer(id) {
    swfobject.embedSWF("https://www.youtube.com/e/" + id + "?enablejsapi=1&playerapiid=ytplayer&rel=0&showinfo=0&showsearch=0&autohide=1&fs=1&wmode=transparent",
           "ytapiplayer", "594", "336", "8", null, null, params, atts);
    firstRunG = false;
    currentIdG = id;
}

function onYouTubePlayerReady() {
    ytplayer = document.getElementById("myytplayer");
    if (ytplayer) ytplayer.addEventListener("onStateChange", "stateChange");

    if (ytplayerType == 'edit-karaoke') {
        ytplayer.loadVideoById(karaokeVideoIdG);
        initKaraokeEditor();
        ytplayer.pauseVideo();
    }
}

function onPlaylistPlayerReady(event) {
    d("Player ready");

    if (ytplayerType == 'playlist') {
        if (currentItemG) {
            loadVideoAndText(null, currentItemG);
        } else if (emptyPlaylistG == false) {
            ytplayer.pauseVideo();
        } else if (currentIdG) {
            ytplayer.loadVideoById(currentIdG);
        }
    }
}

function onYouTubeIframeAPIReady() {
     d("OnYoutubeIframeAPIReady");
     if (!ytplayerType) {
     	return;
     }
     if (ytplayerType == 'playlist') {
        d("Start creating player");
        ytplayer = new YT.Player('player', {
            //height: '356',
            //width: '425',
            height: '',
            width: '',
            videoId: firstVideoIdG,
            events: {
                'onReady': onPlaylistPlayerReady,
                'onStateChange': onEmbedPlayerStateChange
            },
            playerVars: {
                'showinfo': 0,
                'autohide': 1,
                'fs': 1,
                'rel': 0,
                'theme': 'light',
                'modestbranding': 1,
                'enablejsapi': 1,
                'playerapiid': 'ytplayer',
                'wmode': 'transparent'
            }
        });
        d("Player created");

        firstRunG = false;
        currentIdG = firstVideoIdG;

    } else if (ytplayerType == 'show-lyrics') {
        d('Creating embed player');
        embedPlayerG = new YT.Player('embedPlayer', {
            events: {
              'onReady': onEmbedPlayerReady,
              'onStateChange': onEmbedPlayerStateChange
            }
        });
    }
}

/*
function onYouTubePlayerAPIReady() {
    d("OnYoutubeEmbedPlayerAPIReady");
    // for show-lyrics and karaoke
    embedPlayerG = new YT.Player('embedPlayer', {
        events: {
          'onReady': onEmbedPlayerReady,
          'onStateChange': onEmbedPlayerStateChange
        }
    });
}
*/

function onEmbedPlayerReady(event) {
    d("OnEmbedPlayerReady");
    embedPlayerG = event.target;
    if (ytplayerType == 'show-lyrics') {
        // set correct video - youtube_id in url
        if ((window.location.hash) && (window.location.hash != '#null') && (window.location.hash != '#')) {
            var ytId = window.location.hash.substring(1);
            if ($('#videos_box a[data-youtube_id="' + ytId + '"]').length != 0) {
                playVideoInShowLyrics(ytId);
            }
        }

    } else if (ytplayerType == 'karaoke') {
        embedPlayerG.playVideo();
        karaokeTimerG = window.setInterval("progressKaraoke()", 200);
    }
}

function onEmbedPlayerStateChange(event) {
    d('Embed State ' + event.data);
    if (ytplayerType == 'show-lyrics') {
        if (event.data == YT.PlayerState.PLAYING && measuredG == false) {
            clearInterval(timmerG);
            timmerG = setInterval("measureTime()", 10000);
        } else {
            clearInterval(timmerG);
        }

    } else if (ytplayerType == 'karaoke') {
        stateG = event.data;
        if (event.data != YT.PlayerState.PLAYING) {
            // paused
            window.clearInterval(karaokeTimerG);
            //$("a#playKaraoke").css('background-position', '0px');
            $("a#playKaraoke").css({
                'background': 'url("/img/karaoke/player_play.png") no-repeat',
                'background-size': '33px'
            });


        } else if (event.data == YT.PlayerState.PLAYING) {
            // playing
            karaokeTimerG = window.setInterval("progressKaraoke()", 200);
            //$("a#playKaraoke").css('background-position', '-26px');
            $("a#playKaraoke").css({
                'background': 'url("/img/karaoke/player_pause.png") no-repeat',
                'background-size': '33px'
            });
        }

    } else if (ytplayerType == 'playlist') {
        if (event.data == YT.PlayerState.ENDED) {
            //update plays
            $.get('/playlist/updatePlays/pid/' + pidG + '/seeked/' + seekedG);

            var nextItem = getNextItem(currentItemG.attr('order'));
            loadVideoAndText(currentItemG, nextItem);
            var offset = nextItem.attr('order') * 39;
            if (offset > 330) {
                $('#playlist').scrollTo(offset + 'px');
            } else {
                $('#playlist').scrollTo('0px');
            }

        } else if (event.data == YT.PlayerState.PAUSED) {
            var diff = Math.abs(ytplayer.getDuration() - ytplayer.getCurrentTime());
            if (diff > 10) seekedG = true;
        }

    } else if (ytplayerType == 'edit-karaoke') {
        // for karaoke Editor
        stateG = event.data;
        if (stateG == 1) setCurrentRow();

    } else if (ytplayerType == 'create-karaoke') {
        // for create karaoke
        stateG = event.data;
        if (stateG == 1) {
            setCurrentRow();
            $("#next_row").removeAttr('disabled');
            $("#start_again").attr('value', 'ZaÄÃ­t ÃºplnÄ znovu');
        } else {
            $("#next_row").attr('disabled', 'disabled');
        }
    }
}

function measureTime() {
    if (measuredG) return;

    measuredTimeG += 10;
    console.log(measuredTimeG);
    if (measuredTimeG >= 40) {
        measuredG = true;
        clearInterval(timmerG);
        $.get('/song/updatePlays/sid/' + sidG + '/vid/' + vidG);
    }
}