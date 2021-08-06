var videoHDv2 = {
    videoStorage_ext: "http://video-thumbs-ext.mediacdn.vn",
    videoStorage: "https://video-thumbs.mediacdn.vn",
    namespace: 'thethaovanhoa',
    playerClassName: '.VCSortableInPreviewMode[type=VideoStream]',
	apiGetPlayerToken: '',
	secureToken: 'L3NlY3VyZS92ZXJpZnkveHZxcmNhZGhlYmZpMHY1dm5zM2Ywd3d3a3Y2MDdkMDgvMTAwMjcwL2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUp5WldZaU9pSWlMQ0poY0hCclpYa2lPaUo0ZG5GeVkyRmthR1ZpWm1rd2RqVjJibk16WmpCM2QzZHJkall3TjJRd09DSXNJbkJzWVhsbGNpSTZJakV3TURJM01DSXNJbWxuYm05eVpVVjRjR2x5WVhScGIyNGlPblJ5ZFdVc0ltbGhkQ0k2TVRVek1ERTNOVEF3T0N3aVpYaHdJam94TlRNd01UYzFNVEk0ZlEua1BDZzVfMmdQaThXWFp6R1U2Yk9HUXdDbHhqZWF3eWFILXJQN2xxREFTYw',
    init: function (wrap, settings) {
        var me = this;
        if (typeof (settings) == 'undefined')
            settings = {type: me.videoType.newsDetail};
            
		//console.log($(wrap).find(me.playerClassName));
        $(wrap).find(me.playerClassName).each(function () {
			var $this = $(this);
			
			console.log($this);			
			//Náº¿u ÄÃ£ cÃ³ player v2 rá»i thÃ¬ thÃ´i k cáº§n init láº¡i
			if ($this.find('.videoNewsPlayer').length > 0)
                return;


            var videoIda = $this.attr('videoid');
            $this.find('>div[videoid="' + videoIda + '"]').remove();
            $this.find('iframe[src*="vcplayer.vcmedia.vn"], iframe[src*="123.31.11.105"], iframe[src*="vcplayer.mediacdn.vn"]').remove();

			setTimeout(function () {
				me.initPlayer($this, settings);
			}, 300);
		});
    },
    initPlayer: function (wrap, settings) {
        var me = this;
        var $this = $(wrap);
		
        var vtype;
        if (settings.type) {
            vtype = me.getVideoType(settings.type);
        }
                
        var vidAttr = $this.attr('data-vid');
        var width = $this.attr('data-width');
        var height = $this.attr('data-height');		
        var locationAttr = $this.attr('data-location');
        var infoAttr = $this.attr('data-info');
        var autoplayAttr = $this.attr('data-autoplay') == 'true';
        var avatarAttr = $this.attr('data-thumb');
        var dataReplay = $this.attr('data-replay');
        var shareUrlVideo = $this.attr('data-share');        
        var dataIsTrailer = $this.attr('data-is-trailer');
				
        var dataMidroll = $this.attr('data-midroll');
		var dataNopre = $this.attr('data-nopre');
		var dataPostroll = $this.attr('data-postroll');

        if (typeof shareUrlVideo == "undefined" || shareUrlVideo == '') {
            shareUrlVideo = window.location.href;
        }

        if (shareUrlVideo.indexOf('?') != -1) {
            shareUrlVideo = shareUrlVideo.substr(0, shareUrlVideo.indexOf('?'));
        }

        var muteAttr = "";
        var vtypeAttr = "";
        var playTypeAttr = "";
        var datacontentId = $this.attr("data-contentId");
        var dataNamespace = $this.attr("data-namespace");
        if (typeof dataNamespace == "undefined" || dataNamespace == "")
            dataNamespace = me.namespace;

        if (!vidAttr.startsWith(dataNamespace + '/')) {
            vidAttr = dataNamespace + "/" + vidAttr;
        }

        if (vtype) {
            muteAttr = vtype.isMute;
            vtypeAttr = vtype.vtype;
            playTypeAttr = vtype.playType;

            if (vtype.playType == me.playType.autoplay) {
                autoplayAttr = true;
            }
        }

        //Check trÃ¹ng thÃ¬ gen thÃªm ext cho id
        var infoExt = '';
        var players = playerInitScript.getPlayers();
        if (typeof players != 'undefined') {
            var player = players["#streamid_" + infoAttr];
            if (typeof players != 'undefined') {
                infoExt = '_' + me.getRandomeString();
            }
        }
		
        $this.prepend('<video id="streamid_' + infoAttr + infoExt + '" class="videoNewsPlayer" playsinline="" webkit-playsinline="" height="' + height + '" width="' + width + '"></video>');
		
        var params = { vid: vidAttr, autoplay: autoplayAttr, location: locationAttr, _info: infoAttr, shareUrl: shareUrlVideo, mute: muteAttr, vtype: vtypeAttr, playType: playTypeAttr, poster: avatarAttr };
		
		if (typeof dataNopre == 'undefined' || dataNopre.toLowerCase() == 'true') {
			params.nopre = true;
		}

        if (typeof dataMidroll == 'undefined') {
            params.midroll = "0.8;20s";
        }
		else if (dataMidroll != '')
		{
			params.midroll = dataMidroll;
		}
		
        if (typeof dataPostroll == 'undefined' || dataPostroll.toLowerCase() == 'true' ) {
            params.postroll = true;
        }		
		
        if ((typeof dataReplay != 'undefined' && dataReplay.toLowerCase() == 'true') || vtype.replay) {
            params.replay = true;
        }

        try {
			//console.log(datacontentId);
			if (datacontentId != undefined && datacontentId != '')
			{
				var token = me.getPlayerToken(datacontentId, dataNamespace);
				if (token != null)
				{
					me.secureToken = token.secureSdkToken;				
					params.drmToken = token.kmsSdkToken;
				}
			}

			playerInitScript('streamid_' + infoAttr + infoExt, { params: params, secure: me.secureToken }, function () {
				var player = this;
				if (typeof (settings.functionCallBack) == 'function')
					settings.functionCallBack();
			});
        } catch (ex) {
            console.log(ex);
        }

    },
	getPlayerToken: function (datacontentId, namespace) {
        var me = this;
		var json = null;
		if (me.apiGetPlayerToken != '')
		{        
			$.ajax({
				async: false,
				url: me.apiGetPlayerToken,
				xhrFields: { withCredentials: true },
				data: { content_id: datacontentId, apinamespace: namespace },
				type: 'GET',
				dataType: 'json',
				success: function (r) {
					if (r.Success) {
						json = $.parseJSON(r.Data);
					}
				}
			});
		}
        return json;
    },
    image_thumb_w: function (url, w) {
        if (typeof url == "undefined" || url == "")
            return;

        var me = this;
        if (w == 0 || typeof w == "undefined")
            return url;
        var regex = /thumb_w\/\d+\/|zoom\/([0-9]+)_([0-9]+)\//g;
        url = url.replace(regex, '');
        var storageDomain = me.videoStorage;

        if (url.indexOf(me.videoStorage_ext) != -1) {
            storageDomain = me.videoStorage_ext;
            url = url.replace(me.videoStorage_ext, '');
        }
        else if (url.indexOf(me.videoStorage) != -1) {
            url = url.replace(me.videoStorage, '');
        }
        else if (url.indexOf("http://video-thumbs.mediacdn.vn") != -1) {
            url = url.replace("http://video-thumbs.mediacdn.vn", '');
        }
        else if (url.indexOf("http://video-thumbs.vcmedia.vn") != -1) {
            url = url.replace("http://video-thumbs.vcmedia.vn", '');
        }
        else if (url.indexOf("https://video-thumbs.mediacdn.vn") != -1) {
            url = url.replace("https://video-thumbs.mediacdn.vn", '');
        }

        if (url.startsWith("http"))
            return url;

        return String.format('{0}/thumb_w/{1}/{2}', storageDomain, w, url);
    },        
    playType: {
        viewable: 0,
        autoplay: 1,
        clickToPlay: 2
    },
    videoType: {
        newsDetail: 1,
        stream: 2,
        videoDetail: 3,
        boxVideo: 4,
        newsBottom: 5,
        boxMutex: 6,
        clickToPlay: 7,
        zoneVideo: 8
    },
    getVideoType: function (type) {
        var me = this;
        switch (type) {
            case 1:
                return { vtype: "1", position: "bÃ i chi tiáº¿t", playType: me.playType.viewable, isMute: false, note: "", replay: true };
                break;
            case 2:
                return { vtype: "2", position: "stream", playType: me.playType.viewable, isMute: true, note: "", replay: true };
                break;
            case 3:
                return { vtype: "3", position: "video chi tiáº¿t", playType: me.playType.autoplay, isMute: false, note: "" };
                break;
            case 4:
                return { vtype: "4", position: "box cáº¯t ngang", playType: me.playType.viewable, isMute: true, note: "unmute khi má» popup", replay: true };
                break;
            case 5:
                return { vtype: "5", position: "video chÃ¢n bÃ i", playType: me.playType.viewable, isMute: true, note: "unmute khi má» popup", replay: true };
                break;
            case 6:
                return { vtype: "6", position: "box mutex", playType: me.playType.viewable, isMute: true, note: "", replay: true };
                break;
            case 7:
                return { vtype: "7", position: "video áº¥n má»i cháº¡y", playType: me.playType.clickToPlay, isMute: false, note: "" };
                break;
            case 8:
                return { vtype: "8", position: "chuyÃªn má»¥c video", playType: me.playType.viewable, isMute: true, note: "", replay: true };
                break;
            default:
                return { vtype: "2", position: "stream", playType: me.playType.viewable, isMute: true, note: "", replay: true };
                break;
        }
    },
	getRandomeString: function (){
		return Math.random().toString(36).substr(2, 9);	
	}
};