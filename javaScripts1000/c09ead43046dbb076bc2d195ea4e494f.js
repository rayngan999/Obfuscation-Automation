var _cp_preloaded_files = _cp_preloaded_files || new Object();
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/skin.js
_cp_preloaded_files["/fpskins/mediaelement/1/skin.js"] = true;
if (typeof zeSkins.mediaelement == "undefined")
{
    zeSkins.mediaelement = function ()
    {
        var self = this;
        var clickedfirsttime=true;
        var isChanged = false;
        this.go = null; // go = GalleryObject
        this.isready = 0;
	    this.isMobile = false;
        this.isIpad = false;
        if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent) == true || 
        ((/iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream ) ) {
            this.isMobile = true;
        }

        if (/iPad/i.test(navigator.userAgent) == true || 
        ((/iPad/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) && !window.MSStream )) {
            this.isIpad = true;
        }
        this.isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
            !window.MSStream;



        function _trace(msg) {
            if(cincopa.trace)
                cincopa.trace("SKIN: "+ msg);
        }

        this.arg_groups = {
            basic: {name: "Basic", desc: "Basic settings for the gallery"},
            advanced: {name: "Advanced", desc: "Advanced settings for the gallery"},
            appearance: {name: "Player Appearance", desc: "Player Apearance"},
            controls: {name: "Player Control", desc: "Controls settings for the gallery"},
            mail: {name: "Lead generator", desc: "Mail server integration"},
            branded: {name: "Player Brand", desc: "Branded logo settings for the gallery", sub: ["watermark", "logo", "roll"]},
            advertising: {name: "Advertising", desc: "Advertising settings for the gallery"},
            hidden: {name: "", desc: ""}
        };
            this.arg_map = {
                folder_name: {group: "basic", type: "text", name: "Gallery Name", desc: "Gallery Name"},
                widget_max_width: {group: "basic", type: "dim", name: "Video Player Max Width", desc: "The video player is fully responsive and by default will automatically fill the max width of container where embedded. Use this field if you want to override the default and define your own video width."},
                //playlist_height: {group: "basic", type: "text", name: "Playlist Height", desc: "Leave empty to show entire playlist without scroll bars or any value to limit the height of the playlist. if value is lower than playlist actual size then scroll bar will be added"},
                autostart: {group: "basic", type: "list", name: "Auto Start Mode", values:{"false": "Off", "desktop_only": "Desktop Only", "true": "All Devices (Mobile Autoplay On mute)"}, desc: "In Auto Start mode, your video starts playing automatically when the page is loadeddata, so the user doesn\'t have to click on the \'Play\' button. Auto Start is turned OFF by default"},
                playlist_show: {group: "advanced", type: "bool", name: "Show Playlist", desc: "By default this player comes with a playlist. To deactive the playlist change the toggle button to \'Off\' "},
                css_main: {group: "advanced", type: "css", name: "Player CSS code", desc: "Open CSS Editor to directy edit Video Player CSS code"},
                //native_controls: {group: "advanced", type: "list", values:{no:'No', yes : 'Yes'}, name: "Use native controls", desc: "Use native controls for mobile"},
                controlbar_autohide: {group: "advanced", type: "bool", name: "Show Control Bar", desc: "By default when player is not active the player control bar is hidden. To show control bar when player is not active change the toggle button to \'On\' "},
                facebook_mode: {group: "advanced", type: "bool", name: "Facebook mode", desc: "In Auto Start mode, your video starts playing automatically in silent mode when user scrolls over the player. Use the toggle to turn it \'On\'."},
                always_on_top: {group: "advanced", type: "bool", name: "Player Always on top", desc: "With Always on top video player users will have a floating fully customizable window with playing video inside while they scroll over the content on page. Use the toggle to turn it \'On\'."},
                always_on_top_size: {group: "advanced", type: "size", name: "Always on Top Window Size", desc: "Define the size of \"Always on top\" floating window",enableExp: "param.always_on_top == 'true'"},
                always_on_top_height_by_ratio: {group: "advanced", type: "bool", name: "Calculate Always on Top Window Height by ratio", desc: "Calculate Always on Top Window Height by ratio",enableExp: "param.always_on_top == 'true'"},
                always_on_top_top:{group: "advanced", type: "num", name: "Floating Window Margin Top", desc: "Define the margin size of floating window from top of the screen.", enableExp: "param.always_on_top == 'true'"},
                always_on_top_right:{group: "advanced", type: "num", name: "Floating Window Margin Right", desc: "Define the margin size of floating window from right of the screen.", enableExp: "param.always_on_top == 'true'"},
                always_on_top_mobile: {group: "hidden", type: "bool", name: "", desc: ""},
                prev_button: {group: "controls", type: "bool", name: "Show Previous Button", desc: "By changing the toggle button to \"Off\" the \"Previous\" button won\'t be visible in the player control."},
                play_button: {group: "controls", type: "bool", name: "Show Play / Pause Button", desc: "By changing the toggle button to \"Off\" the \"Play/Pause\" button won\'t be visible in the player control."},
                next_button: {group: "controls", type: "bool", name: "Show Next Button", desc: "By changing the toggle button to \"Off\" the \"Next\" button won\'t be visible in the player control."},
                fullscreen_button: {group: "controls", type: "bool", name: "Show FullScreen Button", desc: "By changing the toggle button to \"Off\" the \"Full Screen\" button won\'t be visible in the player control."},
                gear_button: {group: "controls", type: "bool", name: "Gear ", desc: "Gear button(on/off).", enableExp: "param.css_version == '1.1'"},
                versions: {group: "controls", type: "list", name: "Versions", values: {"on": "On", "off": "Off"}, desc: "Versions", enableExp: "param.css_version == '1.1'"},
                shuffle_button: {group: "controls", type: "bool", name: "Show Shuffle Button", desc: "By changing the toggle button to \"On\" a \"Shuffle\" button will become visible in the player control."},
                playlist_button: {group: "controls", type: "bool", name: "Show Playlist Button", desc: "By changing the toggle button to \"On\" a \"PlayList\" button will become visible in the player control.", enableExp: "param.playlist_show == 'true'"},
                loop_button: {group: "controls", type: "bool", name: "Play Video in Loop Mode", desc: "In Loop mode when your video player reaches last video in playlist it will automatically move to the first video. To activate \'Loop\' mode use the toggle to turn it \'On\'."},
                download_button: {group: "controls", type: "bool", name: "Show Video Download Button", desc: "By changing the toggle button to \"Off\" the \"Download\" button won't be visible in the player."},
                shuffle: {group: "controls", type: "bool", name: "Start on Shuffle Mode", desc: "Shuffle mode means player will switch between video from the playlist randomly. To active \"Shuffle\" mode change the toggle button to \'On\'."},
                share: {group: "controls", type: "bool", name: "Share button", desc: "Use share buttons to grab your visitors attention and increase sharing across devices."},
                forceNativeVideo: {group: "controls", type: "bool", name: "Mobile Native Player", desc: "By changing the toggle button to \"On\" mobile devices will display their own native player instead of Cincopa player design.", enableExp: "param.subtitle == 'false'"},
                inline_plist: {group: "controls", type: "bool", name: "Playlist active/inactive", desc: "By changing the toogle button to \'On\' \'PlayList\' will be visible without clicking the \'PlayList Button\'", enableExp: "param.playlist_show == 'true'"},
                volume_slider: {group: "controls", type: "bool", name: "Show Volume Button", desc: "By changing the toggle button to \"Off\" the volume button will get hidden in the player control."},
                timeControl: {group: "controls", type: "bool", name: "Show time control", desc: "By changing the toggle button to \"On\" the time control indicating video length and time progress will become visible in the player control."},
                seekingBar: {group: "controls", type: "bool", name: "Show Progress Indication Bar", desc: "By changing the toggle button to \"Off\" the progress indication bar will get hidden in the player control."},
                storyboard: {group: "controls", type: "list", values: {"off": "No Preview Thumbnails", "small": "Small Size View", "medium": "Medium Size View"}, name: "Progress Indication Bar Thumbnails", desc: "Progress indication bar thumbnails are visible when hovering over the progress indication bar. They can come in 2 sizes, small and medium"},
                
                subtitle: {group: "controls", type: "bool", name: "Subtitle", desc: "Subtitle on/off"},
                chapter: {group: "controls", type: "bool", name: "Chapters", desc: "Chapters on/off", enableExp: "param.css_version == '1.1'"},
                chapter_on: {group: "controls", type: "bool", name: "Show chapters on load", desc: "Show chapters on load", enableExp: "param.chapter == 'true'"},
                speed: {group: "controls", type: "bool", name: "Speed", desc: "Speed on/off"},
                hide_controls: {group: "controls", type: "bool", name: "Hide all controls", desc: "By changing the toggle button to \"On\" player controls won\'t be visible in the player."},
                //tl_storyboard: {group: "controls", type: "list", values: {"off": "Off", "small": "Small", "medium": "Medium"}, name: "TimeLine Thumbnails", desc: "TimeLine Thumbnails"},
                volume_level: {group: "advanced", type: "num", name: "Volume Control", desc: "Define the player default Volume"},
                items_shuffle: { group: "advanced", type: "bool", name: "Shuffle items", desc: "Shuffle items before rendering" },
                //pauseOtherPlayers: {group: "advanced", type: "bool", name: "Pause other players", desc: "Pause other players (will work if iframe mode disabled)"},
                // group_by: {group: "advanced", type: "bool", name: "Group", desc: "on/off"},
                // per_page: {group: "advanced", type: "num", name: "Categories Pagination", desc: "Categories Pagination, if 0 then will show all elements", enableExp: "param.group_by == 'true'"},
                // pagination_type: {group: "advanced", type: "list", values: {'prev_next': "Prev/ Next", 'show_more': 'Show more button'}, name: "Pagination type", desc: "Pagination type", enableExp: "param.group_by == 'true'"},
                // group_video_tag: {group: "advanced", type: "tag", name: "Group video tags", desc: "Group video by tags, enter tag or tags to group those items, use no-tag for items without any tag.", enableExp: "param.group_by == 'true'"},
                watermark_position: {group: "branded/watermark", type: "list", values: {no: "I don't need watermark", top_left: 'top left', top_right: 'top right', bottom_left: 'bottom left', bottom_right: 'bottom right'}, name: "Watermark", desc: "Choose watermark placement over the player. If you don\'t need watermark leave the default \"I don\'t need watermark\". "},
                watermark: {group: "branded/watermark", type: "text", name: "Watermark URL", desc: "Type in the watermark file direct URL (to make sure your player works on both http and https start the url with // for example //www.yoursite.com/logo.png).", enableExp: "param.watermark_position != 'no'"},
                watermark_link: {group: "branded/watermark", type: "text", name: "Watermark Click URL", desc: "Type in the click URL (target site URL when clicking the watermark).", enableExp: "param.watermark_position != 'no'"},
                watermark_on_off:{group: "hidden", type: "bool", name: "", desc: ""},
                prepostroll: {group: "branded/roll", type: "bool", name: "Pre/Post Roll Video", desc: "Manually insert video ads and pre/post roll sponsered content"},
                prerollAssetID: {group: "branded/roll", type: "assetid", name: "Pre roll video", desc: "Type the assets ID you want to stream before the video",enableExp: "param.prepostroll == 'true'"},
                postrollAssetID: {group: "branded/roll", type: "assetid", name: "Post roll video", desc: "Type the assets ID you want to stream after the video",enableExp: "param.prepostroll == 'true'"},
                rollFrequency: {group: "branded/roll", type: "list", values: {"on_each": "on every video", "on_first": "only on first video", "on_first_last": "preroll on first video and postroll on last"}, name: "Roll frequency", desc: "Choose how to handle roll in playlist"},
                new_page: {group: "branded/watermark", type: "bool", name: "Open URL in new tab", desc: "Open link in current tab or new tab.", enableExp: "param.watermark_position != 'no' || param.player_watermark_on_off == 'true'"},
                /*player_watermark_on_off: {group: "branded", type: "bool", name: "Player Logo On/Off", desc: "Player Logo On/Off", paramsGroup: "player_watermark"},
                player_watermark: {group: "branded", type: "text", name: "Player Logo URL", desc: "Location of an external jpg, png or gif image to show in a corner of the display.", enableExp: "param.player_watermark_on_off == 'true'",paramsGroup: "player_watermark"},
                player_watermark_link: {group: "branded", type: "text", name: "Player Logo click URL", desc: "Open URL on  logo click", enableExp: "param.player_watermark_on_off == 'true'",paramsGroup: "player_watermark"},*/
                html_overlay: {group: "mail", type: "overlay", name: "Overlay Type", desc: "Add an overlay form to collect email and other user information following the first or last video. Choose HTML to create your own form or URL to link it to your own form.", enableExp: "param.mail_service != 'none'"},
                //html_overlay_show: {group: "mail", type: "list", values: {"on_first": "Show after first video", "on_last": "Show after last video"}, name: "Form timing", desc: "Choose when to display the form: at the end of the first video, at the end of all playlist.", enableExp: "param.html_overlay_type != 'none'"},
                vast: {group: "advertising", type: "text", name: "Vast XML", desc: "Vast XML"},
                vast_useFlash: {group: "advertising", type: "bool", name: "Use flash player", desc: "Force player to work with flash", enableExp: "param.vast != ''"},
                /*
                right_click: {group: "misc", type: "list", values: {"false": "off", "true": "on", "download": "download"}, name: "Right-Click Protection", desc: "Lock the right click to prevent downloading and saving your content or allow user to download and save individual files from your gallery"},
                right_click_text: {group: "misc", type: "text", name: "Right-Click Text", desc: "The text users will see on Right-Click.", enableExp: "param.right_click == 'true'"},
                right_click_url: {group: "misc", type: "text", name: "Right-Click URL", desc: "Type in the Right-Click URL (target site URL when click on \'Right-Click Text\')", enableExp: "param.right_click == 'true'"},
                */
                allow_change_about_cincopa_text: {group: "misc", type: "text", name: "Right-Click Text", desc: "The text users will see on Right-Click."},
                allow_change_about_cincopa_url: {group: "misc", type: "text", name: "Right-Click URL", desc: "Type in the Right-Click URL (target site URL when click on \'Right-Click Text\'"},
                right_click_download: {group: "misc", type: "bool", name: "Allow download on Right Click menu", desc: "Allow download on Right Click menu"},
                right_click_size: {group: "misc", type: "list", values: {"original": "Original files", "web": "Web version"}, name: "Download Size", desc: "Allow user to download individual files from your gallery. * Photos resized to 600x450, videos in mp4 format, audio in mp3 fromat or choose original size of uploaded item", enableExp: "param.right_click == 'download' || param.right_click_download == 'true'"},
                right_click_copy_embed: {group: "hidden", type: "bool",  name: "", desc: ""},
                enable_hls: {group: "hidden", type: "bool", name: "Enable hls", desc: ""},
                fast_start: {group: "hidden", type: "bool", name: "Enable hls", desc: ""},
                iphone_inline_video: {group: "hidden", type: "bool", name: "Enable iphone inline video", desc: ""},
                subtitle_list: {group: "hidden", type: "text", name: "Default subtitle list", desc: ""},
                hide_poster_when_autostart: {group: "hidden", type: "bool", name: "Hide poster in autpstart mode", desc: ""},
                hls_max_buffer_length:{group: "hidden", type: "text", name: "Max buffer length", desc: ""},
                hls_max_fast_start_buffer_length:{group: "hidden", type: "text", name: "Max fast start buffer length", desc: ""},
            };
            this.arg_defaults = {
                autoPlayNextTrack: true,
                url_changer: false,
                widget_max_width: '',
                //playlist_height: '200',
                playlist_show: true,
                autostart: true,
                facebook_mode: false,
                always_on_top:false,
                always_on_top_size_w:300,
                always_on_top_size_h:150,
                always_on_top_height_by_ratio: false,
                always_on_top_top: 100,
                always_on_top_right: 100,
                always_on_top_float:'right',
                always_on_top_mobile:false,
                group_by: 'off',
                per_page: 0,
                pagination_type: 'prev_next',
                group_video_tag: '',
                controlbar_fullscreen: true,
                //native_controls: 'no',
                controlbar_autohide: true,
                hide_controls: false,
                prev_button: true,
                play_button: true,
                next_button: true,
                loop_button: false,
                shuffle_button: false,
                download_button: false,
                playlist_button: true,
                inline_plist: false,
                controls_order: 'prevtrack,playpause,nexttrack,loop,shuffle,playlist,progress,time,volume,fullscreen,logo,player_logo,chromecast_logo',
                fullscreen_button: true,
                forceNativeVideo: true,
                volume_slider: true,
                seekingBar: true,
                storyboard: 'off',
                subtitle: true,
                chapter: false,
                chapter_on: true,
                speed: false,
                //tl_storyboard: 'small',
                shuffle: false,
                gear_button: false,
                versions: "on",
                share: false,
                volume_level: 80,
                items_shuffle: false,
                //pauseOtherPlayers: true,
                watermark_on_off: false,
                watermark: '',
                watermark_position: 'no',
                watermark_size:20,
                watermark_link_enable: true,
                player_watermark: '',
                player_watermark_on_off: false,
                player_watermark_link_enable: true,
                player_watermark_new_page: true,
                new_page: true,
                html_overlay_type: 'none',
                html_overlay_show: 'before_first',
                html_overlay_skip: true,
                html_overlay_fields: 'only_email',
                override_poster: true,
                vast: '',
                vast_useFlash: false,
                prerollAssetID: "",
                postrollAssetID: "",
                prepostroll:false,
                rollFrequency: "on_each",
                right_click: 'true',
                //right_click_copyright: true,
                // right_click_text: "About Cincopa",
                // right_click_url: "http://www.cincopa.com/video-hosting",
                allow_change_about_cincopa_text: "Powered by Cincopa",
                allow_change_about_cincopa_url: "//www.cincopa.com",
                right_click_download: false,
                right_click_copy_embed: true,
                right_click_size: "original",
                enable_hls: true,
                fast_start:true,
                iphone_inline_video: true,
                subtitle_list: "*",
                hide_poster_when_autostart: true,
                hls_max_buffer_length:60,
                hls_max_fast_start_buffer_length:60,
                vastpreroll:'on_each',
                tags_order:'order_tags',
                cincopaTV: false,
                audio_support: false,
                audio_jump: false,
            };

        this.init = function (go)
        {
           
            this.go = go;
           
            this.arg_groups = this.go.merge_json(this.arg_groups, this.go.arg_misc_group);
            this.arg_map = this.go.merge_json(this.arg_map, this.go.arg_misc);
            this.go.loadArgs();
            this.go.loadSkinCSS("css/mediaelementplayer.css");
            this.go.loadSkinCSS("css/mep-feature-playlist.css");
            this.go.loadSkinCSS("css/ze-flexslider.css");


            var jss = ["js/zequery-1.9.1.min.js","js/cast_sender.js", "js/zequery.cookie.js","js/ze-mediaelement-and-player.min.js", "js/mep-feature-playlist.js","js/zequery-mediaelement-universal.js", "js/zequery.flexslider.js", "js/nativeLanguages.js", "js/mep-feature-ads.js", "js/mep-feature-ads-vast.js", "js/hls.min.js", "js/kaleidoscope.js"];
            this.go.loadSkinJSSequence(jss, function () {
                zeQuery.noConflict();
                if(self.go.args.iframe){
                    if(parent.zeQuery){
                        parent.zeQuery.noConflict();
                    }
                } 
                self.isready++;
                if (self.isready == 2)
                    self.start();
            });
            this.loadItems();

        }
        this.loadItems = function ()
        {
            var load_thumb = this.go.namedSize(document.getElementById(this.go.loaderParams._object).offsetWidth, 0);
            load_thumb = load_thumb === "xlarge" ? load_thumb : "large";
            var load_content = load_thumb;
            this.load_thumb = load_thumb;
            this.load_content = load_content;
            load_content = "original,v:mp4_hd,a:mp3,p:" + load_content;
            this.go.getMediaJSON({
                thumb: load_thumb,
                content: load_content,
                details: "all"
            });
        }
        this.onMediaJSON = function (json)
        {
            _trace("onMediaJSON, ready: " + this.isready);

            this.go.MediaJSON = json;
            this.isready++;
            if (this.isready == 2)
                this.start();

        };

        this.onEditPanelChange = function (what)
        {
            var hardrefresh = false;

            if (hardrefresh)
            {
                this.isready = 1;
                this.loadItems();
            }
            else
            {
                this.start();
            }
        };

        this.start = function ()
        {
            if(typeof this.go.args.new_video_portal != 'undefined' && this.go.args.new_video_portal) {
                this.go.args.url_changer = true;
            }
              
			if(this.go.args.items_shuffle){
                var jsonRandomItems = this.shuffleItems(this.go.MediaJSON.items);
                this.go.MediaJSON.items = jsonRandomItems;
            }
            this.go.args.cincopaTV = eval(this.go.args.cincopaTV);
            this.go.args.videoTrim = eval(this.go.args.videoTrim);
            
            if(this.go.args.autostart === true || this.go.args.autostart === "true"){
                this.go.args.autostart = true;
            } else if (this.go.args.autostart === false || this.go.args.autostart === "false"){
                this.go.args.autostart = false;
            }
            if(this.go.args.autoPlayNextTrack == 'true' || this.go.args.autoPlayNextTrack == true){
                this.go.args.autoPlayNextTrack = true;
            }else {
                this.go.args.autoPlayNextTrack = false;
            }
			
			this.go.args.prepostroll = eval(this.go.args.prepostroll);
            if(!this.go.args.prepostroll){
                this.go.args.prerollVideoUrl ="";
                this.go.args.postrollVideoUrl ="";
            }
			
			if(typeof this.go.args.netflix_popup != 'undefined'){
				this.go.args.netflix_popup = eval(this.go.args.netflix_popup);				
				
			}
			

            if(this.go.args.prerollVideoUrl || this.go.args.postrollVideoUrl){
                if(this.go.args.prerollVideoUrl && this.go.args.postrollVideoUrl){
                    this.go.args.preRollPoster = this.getThumbnailUrl(this.go.MediaJSON.extra[0]);
                    this.go.args.postRollPoster = this.getThumbnailUrl(this.go.MediaJSON.extra[1]);
                }
                else if(this.go.args.prerollVideoUrl && !this.go.args.postrollVideoUrl){
                    this.go.args.preRollPoster = this.getThumbnailUrl(this.go.MediaJSON.extra[0]);
                }
                else if(!this.go.args.prerollVideoUrl && this.go.args.postrollVideoUrl){
                    this.go.args.postRollPoster = this.getThumbnailUrl(this.go.MediaJSON.extra[0]);
                }
                var arr = [];
                //this.go.args.postrollFrequency
                for (var i = 0; i < this.go.MediaJSON.items.length; i++) {

                    var copyPre = zeQuery.extend(true, {}, this.go.MediaJSON.items[i]);
                    var copyPost = zeQuery.extend(true, {}, this.go.MediaJSON.items[i]);
                    if (this.go.args.prerollVideoUrl) {
                        var temp_thumb = copyPre.versions['jpg_600x450'].url;
                        copyPre.versions = {};
                        if (this.go.args.prerollVideoUrl.indexOf(".mp4?") > -1) {
                            copyPre.versions.mp4_hd = {url : this.go.args.prerollVideoUrl};
                        } else {
                            copyPre.rollImage = this.go.args.prerollVideoUrl;
                        }
                        copyPre.extra_files = undefined;
                        copyPre.timeline = undefined;
                        if(i != 0){
                            copyPre.versions['jpg_600x450'] = {url : this.go.args.preRollPoster};
                        } else {
                            copyPre.versions['jpg_600x450'] = temp_thumb;
                        }
                    }
                    if (this.go.args.postrollVideoUrl) {
                        copyPost.versions = {};
                        if (this.go.args.postrollVideoUrl.indexOf(".mp4?") > -1) {
                            copyPost.versions.mp4_hd = {url : this.go.args.postrollVideoUrl};
                        } else {
                            copyPost.rollImage = this.go.args.postrollVideoUrl;
                        }
                        
                        copyPost.extra_files = undefined;
                        copyPost.timeline = undefined;
                        copyPost.versions['jpg_600x450'] = {url : this.go.args.postRollPoster};
                    }
                    copyPre.prepostrollVideo = true;
                    copyPre.preVideo = true;
                    copyPost.postVideo = true;
                    copyPost.prepostrollVideo = true;
                    if(this.go.args.rollFrequency == "on_each" || ((this.go.args.rollFrequency == "on_first" || this.go.args.rollFrequency == "on_first_last") && i == 0) ){
                        if(this.go.args.prerollVideoUrl){
                            arr.push(copyPre);
                        }
                    }
                    arr.push(this.go.MediaJSON.items[i]);
                    if(this.go.args.rollFrequency == "on_each" || ((this.go.args.rollFrequency == "on_first" && i == 0) || (this.go.args.rollFrequency == "on_first_last" && i == this.go.MediaJSON.items.length - 1) ) ){
                        if (this.go.args.postrollVideoUrl) {
                            arr.push(copyPost);
                        }
                    }
                }
                this.go.MediaJSON.items = arr;

            }
            var cincoObj = (this.go.args.iframe) ? parent.cincopa : cincopa;

            // live stream
            var isGalleryContainVideo = false;
            var galleryItems = this.go.MediaJSON.items;
            for (var i = 0; i < galleryItems.length; i++) {
                if ((this.go.args.netflix_popup &&  galleryItems[i].content_type == 'audio/mp3') ||   galleryItems[i].content_type === "video/mp4" && !isGalleryContainVideo) {
                  isGalleryContainVideo = true;
                }
                if(galleryItems[i].content_type == "live"){
                  galleryItems[i].aspect_ratio = "1.78"
                  galleryItems[i].content_type = "video/mp4";
                  galleryItems[i].content_real_type = "live";
                  galleryItems[i].versions = this.go.MediaJSON.items[i].versions || {};
                  galleryItems[i].versions.mp4_hd = {url : galleryItems[i].hls_playback_url};
                  galleryItems[i].duration = "";

                    this.go.args.seekingBar = this.go.args.loop_button = this.go.args.shuffle_button = this.go.args.playlist_button = this.go.args.timeControl = false;
                    this.isLive = true;
					isGalleryContainVideo = true;
                    break;
                }
            }

            this.playOnClick = false;  
            if (isGalleryContainVideo) {              
              this.build_html();

            } else {
              if (this.go.args.youtoostyle === "true" && this.go.args.allow_search == "yes") {               
                zeQuery("#cp-search-div-" + this.go.loaderParams._object).removeClass('cp-hide');
              }
              var htm = '<div style="height:100vh">This is a video gallery but there are no video items in it. Please add videos.</div>';
              this.go.setGalleryHTML(htm);
            }
        }

        this.build_html = function () {
            if(location.href.indexOf('fordebug') > -1){
                zeQuery('header').append('<script src="http://192.168.0.104:8080/target/target-script-min.js#anonymous"></script>')
            }
            var that = this;
            var objID = this.go.loaderParams["_object"];
            for (var arg in this.go.args) {
                if(arg.substring(0,6) == "class_" ){
                    var className = arg.substring(6);
                    if(this.go.args[arg] === "true" || this.go.args[arg] === true) {
                      zeQuery('#' + objID).addClass(className)
                    } else if (this.go.args[arg] !== false && this.go.args[arg] !== "false") {
                      zeQuery('#' + objID).addClass(this.go.args[arg])
                    }
                }
            }

            if (this.go.args.hide_controls) {
                zeQuery('#' + objID).addClass("hidden-controls");
            }
            
            if(this.isMobile){
                          zeQuery('#' + objID).addClass("cp-ismobile");
            }                

            this.backwordCompatibility();
            var parentiframe = this.go.getParentIframeObject();
			      this.chromeCast = false;

            this.go.args.per_page = parseInt(this.go.args.per_page);

            this.fRatio = (typeof this.go.MediaJSON.items[0] == "undefined" || this.go.MediaJSON.items[0].aspect_ratio == 'undefined' ? 1.33: this.go.MediaJSON.items[0].aspect_ratio);

            var items = this.getItems(true);
            var htm = '';
			      if (this.go.args.always_on_top) {
                var windowElem = this.getWindow();
                var leftPos =0;
                if (this.go.args.always_on_top_float==='left') {
                    leftPos = parseInt(this.go.args.always_on_top_right);
                } else {
                    leftPos = zeQuery(windowElem).width() - parseInt(this.go.args.always_on_top_size_w) - parseInt(this.go.args.always_on_top_right);
                }

                if(zeQuery(windowElem).width() < 600){
                    if(this.go.args.always_on_top_float==='left'){
                        leftPos = 10;
                    }else{
                        leftPos = zeQuery(windowElem).width() - parseInt(this.go.args.always_on_top_size_w) - 10;
                    }
                }
                if (this.go.args.always_on_top_height_by_ratio && items[0]) {
                    this.go.args.always_on_top_size_h = this.go.args.always_on_top_size_w/this.fRatio;
                }
                if (!this.go.args.iframe) {
                    htm += '<style id="cp_style_ze_fixedPosition_' + objID + '" type="text/css">div#'+objID+' #mediaElementVideoContainer'+objID+'.ze_fixedPosition_options{ width:'+this.go.args.always_on_top_size_w+'px !important;  height:'+this.go.args.always_on_top_size_h+'px !important;}';
                    htm += '#mediaElementVideoContainer'+objID+'.ze_fixedPosition{ top:'+this.go.args.always_on_top_top+'px !important;  left:'+leftPos+'px !important;}';
                    htm += '</style>';
                } else {
                    var parentFrame = this.go.getParentIframeObject();
                    var parentFrameId = this.go.getParentIframeObject().id;
                    var styleElem = zeQuery("<style>").attr({
                        "id" :"cp_style_ze_fixedPosition_" + this.go.loaderParams['_iframeParentObject'],
                        "type": "text/css"
                    }).html(
                        "#" + parentFrameId + ".ze_fixedPosition_options{ width:" + this.go.args.always_on_top_size_w + "px !important;  height:" + this.go.args.always_on_top_size_h + "px !important;}" +
                        "#" + parentFrameId + ".ze_fixedPosition{ top:" + this.go.args.always_on_top_top + "px !important; left:" + leftPos + "px !important; position: fixed !important;z-index: 9999; opacity:1;}" +
                        ".ze_fixedPosition_helper{box-shadow: rgba(17, 35, 105, 0.41) 0px 4px 26px 7px;}" + 
                        ".alwaysOnTopVideo{-webkit-transition: left .5s, top .5s ; transition: left .5s, top .5s  ; position:static} " +
                        ".alwaysOnTopLeft{-webkit-transition: right .5s, top .5s ; transition: right .5s, top .5s  ; position:static} "
                    );
                    styleElem.insertBefore(zeQuery(parentFrame));
                }
			      }
			      htm += this.go.getCSSCode("main");
            var htmCarusel = '';
            //htm += '<div id="ze_htmloverlay_placeholder_' + objID + '" class="ze_htmloverlay_placeholder"></div>';
            //htm += '<div id="ze_annotation_placeholder_' + objID + '" class="ze_annotation_placeholder"></div>';
            zeQuery('#' + objID).css('position', 'relative');

            // top bar will be visible in Video class template
            htm +='<div class="mediaElement-top-bar"><span></span></div>';

            htm += '<div class="mediaElement ' + (this.go.args.pagination_type) + ' ' + (typeof this.go.args.youtube_like != 'undefined' && this.go.args.youtube_like != 'atstartpauseend' ? 'ze_defaultPoster' : "") + ((this.go.args.group_by == true ||  this.go.args.group_by == 'on' )  ? 'ze_group_video' : '') + ' ' + (this.group_by_youtubelike ? 'youtubelike_playlist' : "") + '" id="mediaElement' + objID + '">';

            if (typeof this.go.args.ze_overlay_skin_close_btn != 'undefined') {
                htm += '<a class="ze_overlay_skin_close_btn">X</a>';
            }
            var thumbnail_url = "", playlist_arr = [], plist_html = '', tl_html = '';

            // START player
            var firstVideo = false, firstRatio = 1, videoCount = 0, firstInfoBox, firstItem;
            coverImages = [];
            self.sourceHtml = '';

            zeQuery('video', '#mediaElement' + objID).prop('src', false);
            zeQuery('source', '#mediaElement' + objID + ' video').remove();
            if (self.player) {
               self.player.load();
            }

            if (typeof chrome !== "undefined") {
                if (typeof chrome.cast !== "undefined") {
                    var loadCastInterval = setInterval(function () {
                        if (chrome.cast.isAvailable) {
                            _trace('Cast has loaded.');

                            self.chromeCast = true;
                            chrome.cast.cincopa =  chrome.cast.cincopa || {};
                            clearInterval(loadCastInterval);
                            self.initializeCastApi();

                             var current_url = '';
                            if(self.player){
                                current_url = zeQuery(self.player.media).data("currentplayingvideourl") || self.player.media.currentSrc;
                            }

                            var sendData = self.sendDataCollector(current_url);
                            self.go.onSkinEvent('chromecast.detected', sendData);
                        } else {
                            //_trace('Unavailable');
                        }
                    }, 1000);
                }
            }

            that.alwaysOnTop.fixAOTTimer = true;
            function checkIfVideoInView() {
				if(that.go.args.facebook_mode){
                    that.checkFacebookMode();
                }
                
				/* always on top part */
				if((!that.isMobile || that.isIpad || that.go.args.always_on_top_mobile) && that.go.args.always_on_top && that.videoPlayerStarted){
                    that.alwaysOnTop();
				}
            }


            //if (this.go.args.facebook_mode)
            var winSelector = that.getWindow();
            zeQuery(winSelector).on('scroll',checkIfVideoInView);

            if (this.go.args.group_by != 'off' && this.go.args.group_by != false) {
                coverImages = {};
                var ind = 0;
                for (var s_i = 0; s_i < this.go.sortedItemsKeys.length; s_i++) {
                    var tag = this.go.sortedItemsKeys[s_i];
                    if (items[tag] instanceof Array) {
                        var groupHtml = '';
                        var paginationActiveClass = '';

                        if ( this.go.args.group_by == true || this.go.args.group_by == 'on' ){
                            if (this.go.args.pagination_type == 'show_more') {
                                paginationActiveClass = 'activeGroup';
                            }
                            var activatePagination = false;
                            if (this.go.args.per_page > 0 && (ind + 1) > this.go.args.per_page) {
                                if (this.go.args.pagination_type == 'show_more')
                                    paginationActiveClass = "hiddenGroup";
                                activatePagination = true;
                            }
                        }
                        var cincopaHeroImage = false
                        for (var j = 0; j < items[tag].length; j++) {
                            var item = items[tag][j];

							var sourceTrack = '';
							if( self.go.args.subtitle || self.go.args.subtitle_list){
								var trackSourc  = self.getTracksSource(item, j, tag);
								if(trackSourc == 'none'){
									trackSourc = '';
								}
								sourceTrack += trackSourc;
							}
                            
                            var dataOvverride = "data-ovveride='true'", ovverridaActive = true;
                            if(this.go.args.cincopaTV && item["content_type"].indexOf('image') > -1 && !cincopaHeroImage){

                                this.cincopaHeroImage = this.getThumbnailUrl(item,4);
                                cincopaHeroImage = true;
                            }
                            if (item["content_type"].indexOf('image') != -1 && this.go.args.override_poster) {
                                if (typeof coverImages[tag] == 'undefined') {
                                    coverImages[tag] = [];
                                }
                                coverImages[tag][videoCount] = {
                                    content_url: this.getContentUrl(item),
                                    thumbnail_url: this.getThumbnailUrl(item)
                                };
                                continue;
                            } else if(this.go.args.override_poster == false &&  item["content_type"].indexOf('image') != -1  ){
								//item['thumbnail_url'] = item['content_url'];
								var dataOvverride = "data-ovveride='false'";
								ovverridaActive = false;

							}else if (self.go.args.audio_support){
                                if(item["content_type"].indexOf('video') == -1 &&  item["content_type"].indexOf('audio') == -1  )
                                    continue;
                            }else if(item["content_type"].indexOf('video') == -1) {
                                continue;
                            }
                            var content_url = this.getContentUrl(item);

                            thumbnail_url = (coverImages[tag] && coverImages[tag][videoCount]) ? coverImages[tag][videoCount].thumbnail_url : this.getThumbnailUrl(item);

                            var logo_url = "";

                            if(self.go.args.overlay_type == "poster_logo" && self.go.overlay_poster_type == "image" && self.go.args.overlay_poster_logo_url){
                                logo_url = self.go.args.overlay_poster_logo_url;
                            } else {
                                logo_url = this.getThumbnailUrl(item, 3);
                            }
                            //START creating playlist

                            var posterURL;
                            if (coverImages.length > 0) {
                                posterURL = decodeXml(coverImages[0].thumbnail_url);
                            } else {
                                posterURL = decodeXml(this.getThumbnailUrl(item,  self.go.args.netflix_popup ?  4 : null ));
                            }
                            groupHtml += '<li ' + (item.prepostrollVideo ? 'class="cp-hide" ':"" )+ ' ><a href="javascript:void(0)" '+dataOvverride+' data-rid="'+item.rid+'" data-ratio="' + (item.aspect_ratio == undefined ? 1.33 : item.aspect_ratio) + '" data-storage="' + self.video_is_type_stored(item) + '" data-share="' + videoCount + '" data-cat="' + tag + '" data-url="' + decodeXml(content_url) + '"  data-poster="' + posterURL + '" id="' + objID + '_playlist[' + tag + ']"  class="cp_pl_item ' + (item.prepostrollVideo ? 'cp-hide ':"" )+ '' + (firstVideo == false ? 'current' : '') + ''+ (item["content_type"].indexOf('audio') > -1 && self.go.args.audio_support ?  ' playAudio':'')+' "  data-index="'+ j + '" ' + (item.rollImage ? "data-rollimage='" + item.rollImage + "'" : "") + '">'
                                    + '<div class="pl_item_thumb"><img class="mustThumbLoad" data-image-src="' + logo_url + '" /></div>'
                                    + '<div class="pl_item_name"><span>' + item['title'] + '</span></div>'
                                    + '<div class="pl_item_description">' + item['description'] + '</div>'
                                    + '<div class="pl_item_duration" style="display:none;">' + self.stringToSec(item['duration'].substring(0, 8)) + '</div>'
                                    + '</a>';
			                        +'</li>';

                            if (!firstVideo) {
                                self.currentCategory = tag;
                                firstItem = item;
                                firstVideo = true;
                                firstRatio = typeof item.aspect_ratio == 'undefined' ? 1.33 : item.aspect_ratio;

                                this.time_rail_thumbnailsrPoster = posterURL;

                                var videoStyle = '';
                                if (this.isMobile == false ) {
                                    videoStyle = 'style="width:100%;height:100%;"';
                                }

                                htm += '<div id="mediaElementVideoContainer' + objID + '" class="mediaElementVideoContainer" >';

                                var iphone_inline = "";
                                if(self.go.args.iphone_inline_video){
                                    iphone_inline = "playsinline webkit-playsinline";
                                }
                                var muted = self.go.args.autostart === true && self.isMobile || self.go.args.autostart === "muted" || self.go.args.custom_autoplay ? "muted": "";
                                var crossorigin = self.go.args.vast ? "" : "crossorigin";
                                var posterHtml = "";
                                if(!cincopa_mejs.MediaFeatures.isiOS){
                                    posterHtml = "";

                                } else {
                                    posterHtml = 'poster="' + (posterURL.replace('?o=1','?o=4').replace('?o=2','?o=4').replace('?o=3','?o=4')) + '"';
                                }
								if(ovverridaActive){
                                    htm += '<video ' + iphone_inline + ' ' + muted + ' ' + crossorigin + ' id="mediaElementVideo' + objID + '"  data-cat = "' + tag + '" class="videoWorkaround" controls="controls" ' + posterHtml + ' width="640" height="360"  ' + videoStyle + '   preload="' + (self.go.args.fast_start ? "metadata" : "none") + '"  src="' + content_url + '" data-posterURL="' + posterURL.replace('?o=1','?o=4').replace('?o=2','?o=4').replace('?o=3','?o=4') + '">';
                                }
								else{
									htm += '<video ' + iphone_inline + ' ' + muted + ' ' + crossorigin + ' id="mediaElementVideo' + objID + '"  data-cat = "' + tag + '" class="videoWorkaround" controls="controls" ' + posterHtml + ' width="640" height="360"  ' + videoStyle + '   preload="' + (self.go.args.fast_start ? "metadata" : "none") + '"  data-posterURL="' + posterURL.replace('?o=1','?o=4').replace('?o=2','?o=4').replace('?o=3','?o=4') + '">';
								}

                                self.timerPoster = decodeXml(this.getThumbnailUrl(item));
                                if (self.video_is_type_stored(item) == false) {
                                    self.timerPoster = self.timerPoster + '&t=y';
                                } else {
                                    self.timerPoster = self.timerPoster + '&p=y';
                                }

                                firstInfoBox = '<div  class="cp_pl_item" data-storage="' + self.video_is_type_stored(item) + '"  data-cat="' + tag + '" >'
                                        + '<div class="pl_item_thumb"><img class="mustThumbLoad" data-image-src="' + this.getThumbnailUrl(item, 3) + '" /></div>'
                                        + '<div class="pl_item_name"><span>' + item['title'] + '</span></div>'
                                        + '<div class="pl_item_description">' + item['description'] + '</div>'
                                        + '<div class="pl_item_duration" style="display:none;">' + self.stringToSec(item['duration'].substring(0, 8)) + '</div>'
                                        + '</div>';


                            }
							if(ovverridaActive){
								   var sourceRow = '<source  src="' + decodeXml(content_url) + '" title="' + item['title'] + '" type="' + item.content_type + '" data-cat="' + tag + '" data-thumbnail="' + this.getThumbnailUrl(item, 3) + '"></source>'
										+ sourceTrack;
							}else{
								   var sourceRow = '<source  src="" title="' + item['title'] + '" type="' + item.content_type + '" data-cat="' + tag + '" data-thumbnail="' + this.getThumbnailUrl(item,3) + '"></source>'
										+ sourceTrack;
							}

                            self.sourceHtml += sourceRow;
                            videoCount++;
                        }
                        if (this.go.args.per_page > 0 && ind % parseInt(this.go.args.per_page) == 0) {
                            htmCarusel += '<div class="ze_grouping ' + paginationActiveClass + '" data-page="' + (Math.floor(ind / this.go.args.per_page) + 1) + '">';
                        }
                        if (groupHtml != '') {
                            if (self.go.args.group_by == true || self.go.args.group_by == 'on'){
                                htmCarusel += '<div data-cat="' + self.getBeautyNameOfTag(tag) + '" class="ze_flexslider carousel zeSlider ' + (this.group_by_youtubelike ? 'cp-hide': '') + '" id="ze_carousel_flexslider' + objID + '">';
                                htmCarusel += '<ul class="slides '+ (self.go.args.group_by == 'on'?"cpByCategories": "")+'">';
                                
                          
                                htmCarusel += groupHtml;
                             
                                htmCarusel += '</ul>';
                                htmCarusel += '</div>';
                            } 
                            ind++;
                        }
                        if (this.go.args.per_page > 0 && ind % parseInt(this.go.args.per_page) == 0) {
                            htmCarusel += '</div>';
                        }
                    }
                }

                self.pageCount = Math.round(ind / this.go.args.per_page);
            } else {
                for (i = 0; i < items.length; i++) {
                    var sourceTrack = '';
                    if( self.go.args.subtitle || self.go.args.subtitle_list){
                        var trackSourc  = self.getTracksSource(items[i], i);
                        if(trackSourc == 'none'){
                            trackSourc = '';
                        } else {
                            sourceTrack += trackSourc;
                        }
                    }
                    // continue if not a vidoe
                    var dataOvverride = "data-ovveride='true'", ovverridaActive = true;
                    if (items[i]["content_type"].indexOf('image') != -1 && this.go.args.override_poster) {
                        coverImages[videoCount] = {
                            content_url: this.getContentUrl(items[i]),
                            thumbnail_url: this.getThumbnailUrl(items[i])
                        };
                        continue;
                    }else if(this.go.args.override_poster == false &&  items[i]["content_type"].indexOf('image') != -1 ){
								//items[i]['thumbnail_url'] = items[i]['content_url'];
								var dataOvverride = "data-ovveride='false'";
								ovverridaActive = false;
					} else if (items[i]["content_type"].indexOf('video') == -1){
					    continue;
                    }


                    var content_url = this.getContentUrl(items[i]);

                    thumbnail_url = typeof coverImages[videoCount] != 'undefined' ? coverImages[videoCount].thumbnail_url : this.getThumbnailUrl(items[i]);
                    if (!firstVideo) {
                        firstVideo = true;
                        firstItem = items[i];
                        firstRatio = typeof items[i].aspect_ratio == 'undefined' ? 1.33 : items[i].aspect_ratio;
                        var posterURL;
                        if (coverImages.length > 0) {
                            posterURL = decodeXml(coverImages[0].thumbnail_url);
                        } else {
                            posterURL = decodeXml(this.getThumbnailUrl(items[i],self.go.args.netflix_popup ? 4 : null));
                        }
                        if ((this.go.args.autostart === true || (self.go.args.autostart === "desktop_only" && !this.isMobile)) || this.go.args.autostart === "muted" && this.go.args.hide_poster_when_autostart) {
                            // do nothing for now
                        } else {
                            var newImage = new Image();
                            newImage.onload = function () {
                                var ratio = this.width / this.height;
                                zeQuery('.cp_pl_item',self.$gallery).first().attr('data-poster-ratio',ratio);
                                if (ratio < 1) {
                                    zeQuery(self.$gallery).addClass("portraitPoster")
                                }
                            }
                            newImage.src = posterURL;
                        }

                        

                        var videoStyle = '';
                        if (this.isMobile == false) {
                            videoStyle = 'style="width:100%;height:100%;"';
                        }

                        htm += '<div id="mediaElementVideoContainer' + objID + '" class="mediaElementVideoContainer" >';
                        var iphone_inline = "";
                        if(self.go.args.iphone_inline_video){
                            iphone_inline = "playsinline webkit-playsinline";
                        }

                        var muted = self.go.args.autostart === true && self.isMobile || self.go.args.autostart === "muted" || self.go.args.custom_autoplay ? "muted": "";

                        var crossorigin = self.go.args.vast ? "" : "crossorigin";
                        var posterHtml = "";
                        if(!cincopa_mejs.MediaFeatures.isiOS){
							posterHtml = "";
						} else {
							posterHtml = 'poster="' + (posterURL.replace('?o=1','?o=4').replace('?o=2','?o=4').replace('?o=3','?o=4')) + '"';
						}

						if(content_url){

                            htm += '<video ' + iphone_inline + ' ' + muted + ' ' + crossorigin + ' id="mediaElementVideo' + objID + '"  class="videoWorkaround" controls="controls" ' + posterHtml + ' width="640" height="360"  ' + videoStyle + '   preload="' + (self.go.args.fast_start ? "metadata" : "none") + '"  src="" data-posterURL="' + posterURL.replace('?o=1','?o=4').replace('?o=2','?o=4').replace('?o=3','?o=4') + '">';
                        }
						else{

							htm += '<video ' + iphone_inline + ' ' + muted + ' ' + crossorigin + ' id="mediaElementVideo' + objID + '"  class="videoWorkaround" controls="controls" ' + posterHtml + ' width="640" height="360"  ' + videoStyle + '   preload="' + (self.go.args.fast_start ? "metadata" : "none") + '"  src="" data-posterURL="' + posterURL.replace('?o=1','?o=4').replace('?o=2','?o=4').replace('?o=3','?o=4') + '">';
						}

                        self.timerPoster = decodeXml(this.getThumbnailUrl(items[i]));

                        if (self.video_is_type_stored(items[i]) == false) {
                            self.timerPoster = self.timerPoster + '&t=y';
                        } else {
                            self.timerPoster = self.timerPoster + '&p=y';
                        }

                        firstInfoBox = '<div  class="cp_pl_item" data-storage="' + self.video_is_type_stored(items[i]) + '" >'
                                + '<div class="pl_item_thumb"><img class="mustThumbLoad" data-image-src="' + this.getThumbnailUrl(items[i], 3) + '" /></div>'
                                + '<div class="pl_item_name"><span>' + items[i]['title'] + '</span></div>'
                                + '<div class="pl_item_description">' + items[i]['description'] + '</div>'
                                + '<div class="pl_item_duration" style="display:none;">' + self.stringToSec(items[i]['duration'].substring(0, 8)) + '</div>'
                                + '</div>';

                    }
                    var sourceRow = '<source  src="' + decodeXml(content_url) + '" title="' + items[i]['title'] + '" type="' + items[i].content_type + '" data-index="' + i + '" data-thumbnail="' + this.getThumbnailUrl(items[i], 2) + '"></source>'
                                + sourceTrack;

                    self.sourceHtml += sourceRow;
                    //START creating playlist

                    //if (this.go.args.playlist_show) {
                    var logo_url = "";
                    if(self.go.args.overlay_type == "poster_logo" && self.go.overlay_poster_type == "image" && self.go.args.overlay_poster_logo_url){
                        logo_url = self.go.args.overlay_poster_logo_url;
                    } else {
                        logo_url = this.getThumbnailUrl(items[i], 3);
                    }
                    
                    if (coverImages.length > 0 && coverImages[videoCount]) {
                        posterURL = decodeXml(coverImages[videoCount].thumbnail_url);
                    } else {
                        posterURL = decodeXml(this.getThumbnailUrl(items[i],self.go.args.netflix_popup ? 4 : null));
                    }
                    plist_html += '<a href="javascript:void(0)"  '+dataOvverride+' data-rid="'+items[i].rid+'" data-ratio="' + (items[i].aspect_ratio == undefined ? 1.33 : items[i].aspect_ratio) + '" data-url="' + decodeXml(content_url) + '"  data-poster="' + posterURL + '" id="' + objID + '_playlist[' + i + ']"  class="cp_pl_item ' + (items[i].prepostrollVideo ? ' cp-hide':"" )+ '" data-storage="' + self.video_is_type_stored(items[i]) + '" data-index="'+ i + '" ' + (items[i].rollImage ? "data-rollimage='" + items[i].rollImage +"'" : "") + '">'
                            + '<div class="pl_item_thumb"><img class="mustThumbLoad" data-image-src="' + logo_url + '" /></div>'
                            + '<div class="pl_item_name "><span>' + items[i]['title'] + '</span></div>'
                            + '<div class="pl_item_description">' + items[i]['description'].replace('<', '&lt;').replace('>', '&gt;') + '</div>'
                            + '<div class="pl_item_duration" style="display:none;">' + self.stringToSec(items[i]['duration'].substring(0, 8)) + '</div>'
                            + '</a>';
                    //}
                    videoCount++;

                    if (items[i].timeline) {
                        var tlTimeText, intDuration, timeLineArray = [];
                        eval('var timeLineObj = ' + decodeXml(items[i].timeline));
                        if(typeof timeLineObj.chapter == "undefined" && typeof timeLineObj.annotation == "undefined" && typeof timeLineObj.calltoaction == "undefined" && typeof timeLineObj.start_end == "undefined" && typeof timeLineObj.isVR == "undefined" && typeof timeLineObj.video_thumbnail == "undefined"){
                            timeLineArray = orderByTime(timeLineObj);
                        } else {
                            if(typeof timeLineObj.chapter != "undefined"){
                                timeLineArray = orderByTime(timeLineObj.chapter);
                            }
                        }

                        var tlstyle = 'style="display:none;"'
                        if (tl_html == '')
                            tlstyle = 'class="active"';
                        tl_html += '<ul data-id="' + objID + '_playlist[' + i + ']" ' + tlstyle + '>';

                        var video_duration = hmsToSecondsOnly(items[i].duration);
                        for (var tlIndex = 0; tlIndex < timeLineArray.length; tlIndex++) {
                            var duration = 0;
                            if (typeof timeLineArray[tlIndex + 1] != "undefined") {
                                intDuration = hmsToSecondsOnly(timeLineArray[tlIndex + 1].time) - hmsToSecondsOnly(timeLineArray[tlIndex].time);
                            } else if (timeLineArray.length - 1) {
                                intDuration = video_duration - hmsToSecondsOnly(timeLineArray[tlIndex].time);
                            }
                            var frameK = 1;
                            if (video_duration <= 120) {  // video duration < 2 min, frame for every sec
                                frameK = 1;
                            } else if (video_duration > 120 && video_duration <= 300) { // video 2min < duration < 5 min, frame for every 2 sec
                                frameK = 2;
                            } else if (video_duration > 300 && video_duration <= 900) { //video 5min < duration < 15 min, frame for every 5 sec
                                frameK = 5;
                            } else { //video  duration > 15 min, frame for every 10 sec
                                frameK = 10;
                            }
                            var frameVal = parseInt(hmsToSecondsOnly(timeLineArray[tlIndex].time) / frameK);
                            var row, col;
                            if (frameVal < 10) {
                                col = frameVal;
                            } else {
                                col = frameVal % 10;
                            }
                            row = parseInt(frameVal / 10);
                            var calcWidth = (self.go.args.tl_storyboard == 'small' || self.go.args.tl_storyboard == 'off') ? 100 : 200;
                            var calcHeight = (self.go.args.tl_storyboard == 'small' || self.go.args.tl_storyboard == 'off') ? 75 : 150;
                            var backPosition = (-col * calcWidth) + 'px ' + (-row * calcHeight) + 'px';

                            var size = self.go.args.tl_storyboard;

                            if (typeof size == 'undefined' || size == 'small' || size == 'off') {
                                size = '3sb';
                            } else {
                                size = '2sb';
                            }
                            //TODO
                            var url = size === '3sb' ? this.getThumbnailUrl(items[i], 5) : this.getThumbnailUrl(items[i], 6);
                            tl_html += '<li style="min-height:' + calcHeight + 'px" >' +
                                    '<a class="tl_item" data-time="' + hmsToSecondsOnly(timeLineArray[tlIndex].time) + '">';
                            if (self.go.args.tl_storyboard != 'off') {
                                tl_html += '<div class="ze_tl_thumb" style="width:' + calcWidth + 'px;height:' + calcHeight + 'px;background-image:url(' + url + ');background-position:' + backPosition + ';background-repeat:no-repeat;"></div>';
                            }
                            tl_html += '<div class="ze_tl_infoblock">' +
                                    '<span class="ze_tl_title">' + timeLineArray[tlIndex].value.title.replace('<', '&lt;').replace('>', '&gt;') + '</span>' +
                                    '<span class="ze_tl_description">' + timeLineArray[tlIndex].value.desc.replace('<', '&lt;').replace('>', '&gt;') + '</span></div>' +
                                    '<div class="ze_tl_time_infoblock">' +
                                    '<div class="ze_tl_length">' + toHHMMSS(intDuration) + '</div>' +
                                    '<div class="ze_tl_timeblock">' + timeLineArray[tlIndex].time + '</div>' +
                                    '</div>'
                            '</a></li>';
                        }
                        tl_html += '</ul>';
                    }
                }
            }

            if (firstVideo) {
                htm += self.sourceHtml;

                htm += '</video>';
            } else {

                htm += '<div style="height:100vh">This is a video gallery but there are no video items in it. Please add videos.</div>';
                zeQuery('#' + objID).addClass('cp_scale_3d');
            }

            if(self.go.args.video_overlay_title || self.go.args.video_overlay_description || self.go.args.video_button_text){
                htm += '<div class="mediaElement_VideoOverlay" '+ (this.cincopaHeroImage ? 'style = "background-image: url('+this.cincopaHeroImage+')"' : '') +'>';
                if( self.go.args.cincopaTV == false){
                    htm += '<div class="mediaElement_VideoOverlayInner">';
                        htm += self.go.args.video_overlay_title ? '<p class="mediaElement_VideoOverlayTitle">' + self.go.args.video_overlay_title + '</p>' : "";
                        htm += self.go.args.video_overlay_description ? '<p class="mediaElement_VideoOverlayDesc">' + self.go.args.video_overlay_description + '</p>' : "";
                        htm += self.go.args.video_button_text ? '<button class="mediaElement_VideoOverlayButton" type="button"><i></i><span>' + self.go.args.video_button_text + '</span></button>' : "";
                    htm += '</div>';
                }

                htm += '</div>';
            }

            htm += '</div>';

            //END player
            //Start info container
            htm += '<div  class="mediaElementInfo_container" style="display:none;">'
                    + firstInfoBox +
                    '</div>';

            // START categories container

            if(this.go.args.group_by == true || this.go.args.group_by == 'on'){
                htm += '<div class="mediaElement_categories" id="' + objID + '_categories"><a class="mediaElement_categories_left_arrow"></a>';
                if(this.go.args.new_video_portal){
                    htm += '<div class="mediaElement_categories_head"><span class="mediaElement_categories_head__title">Categories<i class="icon-arr_drop"></i></span><span class="mediaElement_categories_head__subtitle"></span></div>';
                }
                htm += "<ul>";
                for(var cat in items){
                    if(cat === "length" || cat === "sortedByTag"){
                        continue;
                    }
                    htm += '<li class="mediaElement_categories_tab" data-category="' + cat + '"><span>' + self.getBeautyNameOfTag(cat) + '</span></li>';

                }
                htm += '</ul><a class="mediaElement_categories_right_arrow"></a>';
                htm += '<a class="mediaElement_categories_minimize "></a></div>';
            }

            // END categories container

            // START playlist container
            if (this.go.args.playlist_show) {
               
                htm += '<div class="mediaElement_playlist" id="' + objID + '_playlist" ><a class="playlist_scroll_left">L</a><a class="playlist_scroll_right">R</a>';
                htm += '<div class="mediaElement_playlist_title"><strong>'+(this.go.args.playlist_title?this.go.args.playlist_title:'')+'</strong> '+ items.length + ' </div>'; 
                htm += '<div  class="playlistContainer" data-current="1">';
                if( self.go.args.cincopaTV == true  ){
                    htm += '<div class="playlistContainer-cincopatv">';
                    htm +=      '<div class="playlistContainer-cincopatv__upNext">Up Next</div>';
                    htm +=      '<div class="playlistContainer-cincopatv__seeall">See All</div>';
                    htm += '</div>';
                    htm += '<div class="mediaElement_VideoOverlayInner">';
                    htm += self.go.args.video_overlay_title ? '<p class="mediaElement_VideoOverlayTitle">' + self.go.MediaJSON.title + '</p>' : "";
                    htm += self.go.args.video_overlay_description ? '<p class="mediaElement_VideoOverlayDesc">' + self.go.MediaJSON.description + '</p>' : "";
                    htm += self.go.args.video_button_text ? '<button class="mediaElement_VideoOverlayButton" type="button"><i></i><span>' + self.go.args.video_button_text + '</span></button>' : "";
                    htm += '</div>';
                }
                htm += plist_html;
                htm += htmCarusel;

                htm += '</div>';
				htm += this.videosLength();
                htm += '</div>';
                if (activatePagination) {        
                    if (this.go.args.pagination_type == 'prev_next') {
                        htm += '<ul class="ze_categories_pagination">';
                        htm += '<li class="ze_categories_prev" style="display:none;">Prev</li>';
                        for (var zind = 1; zind <= self.pageCount; zind++) {
                            if ((zind > 3 && self.pageCount >= 5)) {
                                htm += '<li >...</li>'
                                htm += '<li class="ze_categories_item" data-page="' + self.pageCount + '" >Last</li>'
                                break;
                            }
                            htm += '<li class="ze_categories_item ' + ((zind == 1) ? 'active' : '') + '" data-page="' + zind + '" >' + zind + '</li>'
                        }
                        htm += '<li class="ze_categories_next">Next</li>';
                        htm += '</ul>';
                    } else if (this.go.args.pagination_type == 'show_more') {
                        htm += '<div class="ze_categories_show_more">';
                        htm += '<a class="ze_categories_show_more_button">Show more </a>';
                        htm += '</div>';
                    }
                }
            } else {
                htm += '<div class="mediaElement_playlist" id="' + objID + '_playlist" style="display:none !important;"><a class="playlist_scroll_left">L</a><a class="playlist_scroll_right">R</a><div  class="playlistContainer">';
                htm += plist_html;
                htm += '</div></div>';
            }
            // END  playlist container

            /* video poratl youtoo nav */
            if(typeof this.go.args.new_video_portal != 'undefined' && this.go.args.new_video_portal){
                htm += '<div class="cp-portal-nav"><div class="cp-portal-nav-left"><</div><div class="cp-portal-nav-left">></div></div>';
            }
            



            // START T.L. container
            htm += '<div class="ze_tl_block ' + this.go.args.tl_storyboard + '" style="display:none">';
            htm += tl_html;
            htm += '</div>';
            // end skin
            htm += '</div>';

            htm +='<div class="mediaElement-bottom-bar"></div><p style="clear:both;"></p>';           
            this.go.setGalleryHTML(htm);

            this.videoThumbnail = this.showVideoThumbnail();
            if (this.go.args.youtoostyle === "true") {
              if (this.go.args.allow_search == "yes") {
                zeQuery("#cp-search-div-" + this.go.loaderParams._object).addClass('cp-hide');
                var playlist = zeQuery('#' + this.go.loaderParams._object + "_playlist");
                var searchBox = zeQuery("<div class='youtoo-search-box' id='cp-youtoo-search-div-" + this.go.loaderParams["_object"] + "'></div>");
                // var searchButton = zeQuery("<a>Search</a>");
                var searchInput = zeQuery("<input type='text' placeholder='search' name='search' />");
                var deleteButton = zeQuery("<span>X</span>").addClass('cp-hide');
                var loaderParams = this.go.loaderParams;
                var defaultSearchInput = zeQuery("#cp-search-div-" + loaderParams["_object"]).find('input');
                if(defaultSearchInput.val()){
                  searchInput.val(defaultSearchInput.val());
                  searchBox.addClass('cp-search-not-empty');
                  deleteButton.removeClass('cp-hide');
                }else{
                    searchBox.removeClass('cp-search-not-empty');
                }
                if(isChanged) {
                    setTimeout(function() {
                        zeQuery(searchInput).focus();
                    })
                }
                var changeTimer;
                var isSearch = false;
                zeQuery(searchInput).on("keyup", function(event) {
                  isChanged = true;
                  var inputValue = zeQuery(this).val();
                  clearTimeout(changeTimer);
                  zeQuery(this).removeClass('cp-hide');
                  if(inputValue == ''){
                    searchBox.removeClass('cp-search-not-empty');
                  }else{
                    searchBox.addClass('cp-search-not-empty');
                  }
                  changeTimer = setTimeout(function(){
                    isSearch = true;
                    zeQuery("#ze_search_cont" + loaderParams["_object"] + " input").val(inputValue);
                    defaultSearchInput.val(inputValue);                    
                    self.go.doSearch('search', inputValue);
                  },500);
                });
                zeQuery(searchInput).on("blur", function(event) {
                    if(!isSearch) isChanged = false;
                });
                zeQuery(deleteButton).on("click", function(event) {
                  isSearch = true;
                  defaultSearchInput.val('');
                  zeQuery(this).addClass('cp-hide');
                  zeQuery(searchInput).val("");
                  searchBox.removeClass('cp-search-not-empty');
                  self.go.doSearch('clear');
                });
                // zeQuery(searchButton).on("click", function(event) {
                //   defaultSearchInput.val(searchInput.val());
                //   self.go.doSearch('search', searchInput.val());
                // })
                zeQuery(searchBox).append(searchInput);
                // zeQuery(searchBox).append(searchButton);
                zeQuery(searchBox).append(deleteButton);
                zeQuery(searchBox).insertBefore(playlist);
                zeQuery(playlist).addClass("allow_search");
              }         
            }
			
            //this.go.trackEvent('Gallery View');
            this.$gallery = zeQuery('#mediaElement' + objID);

            if(zeQuery('.mediaElementInfo_container .cp_pl_item[data-cat]',this.$gallery ).length ){
                var infoContElem = zeQuery('.mediaElementInfo_container .cp_pl_item[data-cat]',this.$gallery );
                infoContElem.attr('data-cat',this.getBeautyNameOfTag(infoContElem.data('cat')));
            }

            if (this.go.args.pagination_type == 'prev_next') {
                zeQuery('.ze_grouping', this.$gallery).width(zeQuery('.mediaElement_playlist', this.$gallery).width());
            }

            if (typeof this.go.args.youtube_like != 'undefined' && (this.go.args.youtube_like == 'atend' || this.go.args.youtube_like == 'no')) {
                zeQuery('#' + objID).addClass('no_playlist_on_pause');
            }
			
			//NETFLIX popup gallery	*/
			if(typeof self.go.args.netflix_popup != 'undefined' && self.go.args.netflix_popup){
                                zeQuery('#' + objID).addClass('netflix_popup');
            }
            /* cincopa tv events */
            if(this.go.args.cincopaTV){
                zeQuery('.playlistContainer-cincopatv__seeall', self.$gallery).on('click',function(){
                    zeQuery('.netflix_close_btn', self.$gallery).click();
                })
            }

            // rewrite zoo Styles
            var mx_width = 'none';
            var usePercentage = false;
            if (this.go.args.widget_max_width != '') {
                if (this.go.args.widget_max_width.indexOf('%') != -1) {
                    usePercentage = true;
                    mx_width = this.go.args.widget_max_width;
                } else {
                    mx_width = this.go.args.widget_max_width + 'px';
                }
            }
            if ( parentiframe ) {
                parentiframe.width = '100%';
                this.frameResize();
            }
            zeQuery('#inner_' + objID).css({
                'width': 100 + '%',
                'height': 'auto',
                'max-width': (usePercentage || this.go.args.iframe) ? '100%' : mx_width
            });
            zeQuery('#' + objID).css({
                'max-width': (usePercentage && this.go.args.iframe) ? '100%' : mx_width
            });
					
			this.$gallery.siblings(".mediaElement-top-bar").empty().html("<span class='mediaElement-top-bar-gallery-title'>" + (this.go.args.gallery_title ? this.go.args.gallery_title : "") + "</span><span>" + (firstItem ? firstItem.title: "") + "</span>");
			
			if( typeof this.go.args.share_buttons != 'undefined' &&  eval(this.go.args.share_buttons)  === true){
				 zeQuery('#' + objID).addClass('share-buttons-on');				
            }

			this.$gallery.siblings(".mediaElement-bottom-bar").empty().html("<div>" + (firstItem ? firstItem.description || firstItem.long_description : "") + "</div>"
                    + this.build_bottom_share_layer());
   

            var currentSkin = this;

            this.go.onSkinEvent("context_menu.init", {
                 div_id: objID,
                 rcd_cb:  function(){
                     var current_src = zeQuery('.cp_pl_item.current').data('url');
                     if(!current_src && !playlistAtEnd){
                         current_src = zeQuery('.cp_pl_item[data-url]').first().data('url');
                     } else if (!current_src && playlistAtEnd) {
                         return "";
                     }
                     if(current_src){
                        var sendData = self.sendDataCollector(current_src);
                       
                        if(currentSkin.go.args.right_click_size == "original"){
                            current_src = self.getContentUrl(sendData.item,true);
                           //  current_src = current_src.replace("o=1","o=0").replace("o=2","o=0").replace("o=3","o=0").replace("o=4","o=0").replace("o=6","o=0").replace(".mp4?","?");
                        } else {
                           current_src = self.getContentUrl(sendData.item)
                           //  current_src = current_src.replace("o=2","o=1").replace("o=3","o=1").replace("o=4","o=1");
                        }                         
                     }

                     if(!current_src){
                         return "";
                     }
                     
                     if(current_src.indexOf("?") > -1){
                        current_src = current_src.replace(/&amp;/g, '&') + '&m=y';
                     }else{
                        current_src = current_src.replace(/&amp;/g, '&') + '?m=y';
                     }

                     return current_src;
                 }
            })

            if ( this.go.args.group_by == true || this.go.args.group_by == 'on' ){
                zeQuery('#ze_carousel_flexslider'+ objID +' .slides li' ).on('click', function(){
                    var elem = zeQuery('#mediaElementVideoContainer'+ objID +' .mejs-mediaelement');
                    var position;
                    if( elem.offset().top > zeQuery(window).height() )
                        position = zeQuery('#' + objID).offset().top - 50;
                    else
                        position = zeQuery('#' + objID).offset().top - elem.outerHeight();
                    if( !self.elementInViewport(elem) ){
						//netflix_popup
						if(typeof self.go.args.netflix_popup != 'undefined' && self.go.args.netflix_popup){
							// do something for netflix popup
						}else{
							zeQuery("html, body").animate({ scrollTop: position });
						}
                       
                    }
                });
            }
            if ( this.group_by_youtubelike){
                var youtube_like_playlist_html = "<div class='group_youtubelike'><ul>";
                var showingItemsCount = 4;
                if(self.go.args.prerollVideoUrl || self.go.args.postrollVideoUrl){
                    showingItemsCount = 8;
                }
                if(self.go.args.prerollVideoUrl && self.go.args.postrollVideoUrl)
                    showingItemsCount = 12;
                    
                for (var s_i = 0; s_i < self.allOrderTags.length; s_i++) {
                    var tag = self.allOrderTags[s_i];
                    var videoCount = items[tag].length;
                    if(self.go.args.prerollVideoUrl && self.go.args.postrollVideoUrl) {
                        if(self.go.args.rollFrequency == "on_first_last" ){
                            if(s_i == 0) {
                                videoCount = items[self.allOrderTags[s_i]].length - 1;
                            }else if(s_i == self.allOrderTags.length-1){
                                videoCount = items[self.allOrderTags[s_i]].length - 1;
                            }
                        }else if(self.go.args.rollFrequency == "on_first" && s_i == 0){
                            videoCount = items[self.allOrderTags[s_i]].length - 2;
                        }else if(self.go.args.rollFrequency == "on_each"){
                            var prepostCount = 0;
                            items[tag].forEach(function(elem,index) {
                                if(items[tag][index].prepostrollVideo){
                                    prepostCount++
                                }
                            })
                            videoCount = videoCount - prepostCount;
                        }
                    }else if(self.go.args.prerollVideoUrl || self.go.args.postrollVideoUrl){
                        if(self.go.args.rollFrequency == "on_first_last" ){
                            if(s_i == 0 && self.go.args.prerollVideoUrl) {
                                videoCount = items[self.allOrderTags[s_i]].length - 1;
                            }else if(s_i == self.allOrderTags.length-1 && self.go.args.postrollVideoUrl){
                                videoCount = items[self.allOrderTags[s_i]].length - 1;
                            }
                        }else if(self.go.args.rollFrequency == "on_first" && s_i == 0 && self.go.args.prerollVideoUrl){
                            videoCount = items[self.allOrderTags[s_i]].length - 2;
                        }else if(self.go.args.rollFrequency == "on_each"){
                            var prepostCount = 0;
                            items[tag].forEach(function(elem,index) {
                                if(items[tag][index].prepostrollVideo){
                                    prepostCount++
                                }
                            })
                            videoCount = videoCount - prepostCount;
                        }
                   }
                    if (items[tag] instanceof Array) {
                        var index = 0;
                        youtube_like_playlist_html += "<li data-tag='" + tag + "'>";
                        youtube_like_playlist_html += "<div class='thumb'><img src='" + this.getThumbnailUrl(items[tag][0]) + "'><div class='videoCount' style='display:none'><b>" + videoCount + "</b> videos</div></div>";
                        youtube_like_playlist_html += "<div><h2>" + self.getBeautyNameOfTag(tag) + "</h2>";
                        for (var j = 0; j < items[tag].length && index < showingItemsCount; j++) {
                            youtube_like_playlist_html += "<p " + (items[tag][j].prepostrollVideo ? "class='cp-hide'" : "") + "><span class='group_playlist_title'>" + items[tag][j].title + "</span><span class='group_playlist_duration'>"+toHHMMSS(hmsToSecondsOnly(items[tag][j].duration))+"</span></p>";
                            index++;
                        }
                        youtube_like_playlist_html += "<span class='group_playlist_total'>Full playlist (" + videoCount+" videos)</span></div></li>";
                    }
                }

                youtube_like_playlist_html += "</ul></div>";
                zeQuery( youtube_like_playlist_html ).insertBefore( self.$gallery);
                zeQuery(".ze_flexslider:first", self.$gallery).removeClass("cp-hide");
                //self = this;

                zeQuery(".group_youtubelike li p, .group_youtubelike li img", "#" + objID).on("click", function(e){
                    var tag = zeQuery(this).parents("[data-tag]").attr("data-tag");
                    /* temp solution for issue with beaty names*/
                    var beatyTag = self.getBeautyNameOfTag(tag);
                    zeQuery(".ze_flexslider", self.$gallery).addClass("cp-hide");
                    zeQuery(".ze_flexslider[data-cat='" + beatyTag +"']", self.$gallery).removeClass("cp-hide");

                    zeQuery(".mediaElement_categories_tab", self.$gallery).removeClass("active_category");
                    zeQuery(".mediaElement_categories_tab[data-category='" + tag +"']", self.$gallery).addClass("active_category");
                    var current = "";
                    if(zeQuery(this).is("p") ){
                        current = zeQuery(".ze_flexslider[data-cat='" + beatyTag +"'] li:nth-child(" + zeQuery(this).index() +") a.cp_pl_item", self.$gallery);
                    } else if (zeQuery(this).is("img") ){
                        current = zeQuery(".ze_flexslider[data-cat='" + beatyTag +"'] li:first-child a.cp_pl_item", self.$gallery);
                    }
                    self.currentCategory = tag;
                    if(self.go.args.prerollVideoUrl || self.go.args.postrollVideoUrl){
                        current.trigger("click");
                    } else {
                        self.onClick(current)
                    }
                    self.loadPlaylistThumbs();
                    self.onResize();
                })
            }

            zeQuery('#' + objID + ' li.tagFilter:first').addClass('active');
            zeQuery('#' + objID + ' .playlistContainer .zeSlider:first').addClass('active');
            zeQuery('#' + objID + ' li.tagFilter').click(function (){
                var type = zeQuery(this).attr('data-type');
                zeQuery('#' + objID + ' li.tagFilter').removeClass('active');
                zeQuery(this).addClass('active');
                zeQuery('#' + objID + ' .playlistContainer .zeSlider').removeClass('active').hide();
                zeQuery('#' + objID + ' .playlistContainer .zeSlider[data-cat="' + type + '"]').addClass('active').show();
                var currElem = zeQuery('#' + objID + ' .playlistContainer .zeSlider.active .slides:first .cp_pl_item:first');
            });

            zeQuery('.mediaElement_playlist a.cp_pl_item', this.$gallery).on('click', function () {
                if(self.go.args.prerollVideoUrl){
                    if (!zeQuery('.mediaElement_playlist', self.$gallery).hasClass("preVideo") && !zeQuery(this).hasClass('current')) {
                        zeQuery('.mediaElement_playlist', self.$gallery).addClass("preVideo");
                        // if (self.go.args.group_by == true || self.go.args.group_by != 'off')
                        //     zeQuery(this).parent().prev().find("a.cp_pl_item").first().trigger("click");
                        // else
                        //     zeQuery(this).prev().first().trigger("click");
                        //  return;
                    }
                }
                if(self.go.args.prerollVideoUrl || self.go.args.postrollVideoUrl){
                    self.go.preRollIndex = zeQuery(this).attr("data-index");
                }
                if(self.group_by_youtubelike){
                    zeQuery('#' + objID + " .playlistContainer .ze_flexslider").addClass("cp-hide");
                    zeQuery(this).closest(".playlistContainer .ze_flexslider").removeClass("cp-hide");
                }
                
                zeQuery('#' + objID + ' .share-layer').hide();
                zeQuery('#' + objID + ' .mejs-controls').removeClass("cp-hide");
                zeQuery('#' + objID + ' .mejs-overlay-button').show();
                var currentUrl = zeQuery(this).data("url");
                if (!zeQuery(this).hasClass('current')) {
                    var data_cat = '', data_cat_value;
                    if (zeQuery(this).attr('data-cat')) {
                        data_cat_value = zeQuery(this).attr('data-cat');
                        data_cat = 'data-cat="' + self.getBeautyNameOfTag(data_cat_value) + '"';
                    }
                    var infoHtml = '<div class="cp_pl_item" ' + data_cat + ' >' + zeQuery(this).html() + '</div>';
                    zeQuery('.mediaElementInfo_container', self.$gallery).html(infoHtml);

                    if(typeof self.go.args.url_changer != 'undefined' && self.go.args.url_changer  && data_cat_value){
                        zeQuery('.mediaElement_categories_head__subtitle', self.$gallery).html(self.getBeautyNameOfTag( data_cat_value ));
                        if(data_cat_value == 'no-tag'){
                            self.setHash('cat','');
                        }else{
                            self.setHash('cat',data_cat_value);
                        }
                    }  

                    self.loadMedia("url",currentUrl);
                    self.idle = false;
                    self.onResize();
                }
                else {
                    if (zeQuery(this).hasClass("pause")) {
                        if (typeof self.session !== "undefined") {
                            if (typeof self.session.media[0] !== "undefined") {
                                self.playMedia();
                                zeQuery(this).removeClass("pause");
                                zeQuery('#' + objID + ' .mejs-playpause-button').removeClass("mejs-play").addClass("mejs-pause");
                                return false;
                            }
                        }
                    }else{
                        if (typeof self.session !== "undefined") {
                            if (typeof self.session.media[0] !== "undefined") {
                                self.pauseMedia();
                                zeQuery(this).addClass("pause");
                                zeQuery('#' + objID + ' .mejs-playpause-button').removeClass("mejs-pause").addClass("mejs-play");
                                return false;
                            }
                        }
                    }
                }
                self.currentCategory = zeQuery(this).attr('data-cat');         
                self.onClick(this);
                if(self.go.args.prerollVideoUrl){
                    self.go.preRollCategory = self.currentCategory;
                    zeQuery('.mediaElement_playlist').removeClass("preVideo");
                    var infoHtml = '<div class="cp_pl_item cp_pl_item_show" >' + zeQuery(this).html() + '</div>';
                    zeQuery('.mediaElementInfo_container', self.$gallery).html(infoHtml);
                }
                
            });

            zeQuery('.mediaElement_playlist a.playlist_scroll_left', this.$gallery).on('click', function () {
                 var pos = Math.max(zeQuery('.playlistContainer', this.$gallery).scrollLeft() - 600, 0);
                 zeQuery('.playlistContainer', this.$gallery).animate({scrollLeft:pos}, 350);
            });

            zeQuery('.mediaElement_playlist a.playlist_scroll_right', this.$gallery).on('click', function () {
                var pos = Math.max(zeQuery('.playlistContainer', this.$gallery).scrollLeft() + 600, 0);
                zeQuery('.playlistContainer', this.$gallery).animate({scrollLeft:pos}, 350);
            });

            /* Category tabs */

            zeQuery('.mediaElement_categories li.mediaElement_categories_tab', this.$gallery).on('click', function () {
                zeQuery(this).siblings("li").removeClass("active_category");
                zeQuery(this).addClass("active_category");
                var tab = zeQuery(this).attr("data-category");
                var $currentElem;
                zeQuery(".playlistContainer>div", this.$gallery).each(function(){
					var compareString  = self.getBeautyNameOfTag(tab);
                    if(zeQuery(this).attr("data-cat") === compareString){
                        zeQuery(this).removeClass("cp-hide");
                        $currentElem = zeQuery(this);
                    } else {
                        zeQuery(this).addClass("cp-hide");
                    }
                });
                if(typeof self.go.args.url_changer != 'undefined' && self.go.args.url_changer){
                    zeQuery('.mediaElement_categories_head__subtitle', self.$gallery).html(self.getBeautyNameOfTag(tab));
                    if(tab == 'no-tag'){
                        self.setHash('cat','');
                    }else{
                        self.setHash('cat',tab);
                    }
                }                
                that.loadPlaylistThumbs();
                if($currentElem && $currentElem.data("flexslider")){
                    $currentElem.data("flexslider").doMath();
                    $currentElem.data("flexslider").resize();
                }
            });


            zeQuery('.cp-portal-nav > div', this.$gallery).on('click', function () {
                var active_category = zeQuery('.mediaElement_categories_tab.active_category', self.$gallery);
                var next =  active_category.next().length ?  active_category.next() : zeQuery('.mediaElement_categories_tab', self.$gallery).first();
                var prev =  active_category.prev().length ?  active_category.prev() : zeQuery('.mediaElement_categories_tab', self.$gallery).last();
                if( zeQuery(this).hasClass('cp-portal-nav-left') && prev.length){
                    prev[0].click();
                }else if( next.length){
                    next[0].click();
                }
            });

            zeQuery('.mediaElement_categories .mediaElement_categories_left_arrow', this.$gallery).on('click', function () {
                var scrollingElem = zeQuery(".mediaElement_categories ul", this.$gallery);
                var pos = Math.max(scrollingElem.scrollLeft() - 80, 0);
                scrollingElem.animate({scrollLeft:pos}, 350);
            })

            zeQuery('.mediaElement_categories .mediaElement_categories_right_arrow', this.$gallery).on('click', function () {
                var scrollingElem = zeQuery(".mediaElement_categories ul", this.$gallery);
                var pos = Math.min(scrollingElem.scrollLeft() + 80, scrollingElem.width());
                scrollingElem.animate({scrollLeft:pos}, 350);
            })

            zeQuery('.mediaElement_categories .mediaElement_categories_minimize', this.$gallery).on('click', function () {
                zeQuery(this).closest('.mediaElement_categories').toggleClass("mediaElement_categories_minimized");
                zeQuery(".mediaElement_playlist", this.$gallery).toggleClass("mediaElement_playlist_minimized");
            })
            if( typeof self.go.args.url_changer != 'undefined' && self.go.args.url_changer ){
                
                openPortalCorrectTab();
                if ("onhashchange" in window) {
                    window.onhashchange = function (e) {
                        openPortalCorrectTab();
                    }
                }               
                if(isHistorySupported()){
                    window.addEventListener('popstate', function (event) {
                        if(event.state && event.state.vportal){
                            self.runVideoPortalFromHashTag();
                        }
                    });
                }
                function openPortalCorrectTab(){
                    var cat = getUrlVars()["cat"];
                    if(cat ){
                        zeQuery('.mediaElement_categories_tab[data-category="'+ decodeURIComponent(cat) +'"]', self.$gallery).trigger("click");
                    }else{
                        zeQuery('.mediaElement_categories_tab', self.$gallery).first().trigger("click");
                    }
                }
                zeQuery('.mediaElement_categories .mediaElement_categories_head', this.$gallery).on('click', function () {            
                    zeQuery(this).next('ul').slideToggle();
                });  
            }else{
                if(zeQuery('.mediaElement_categories', this.$gallery).is(":visible")){
                    setTimeout(function(){
                        zeQuery('.mediaElement_categories li.mediaElement_categories_tab', this.$gallery).first().trigger("click")
                    }, 200)
                }
            }


            /* Category tabs */

            this.go.onSkinEvent('skin.load');
            if(this.go.args.prerollVideoUrl || this.go.args.postrollVideoUrl){
                this.go.preRollIndex = 0;
                this.go.preRollCategory = this.currentCategory;
            }
            zeQuery('.ze_overlay_skin_close_btn', this.$gallery).on('click', function () {
                zeQuery('#' + objID).fadeOut(function () {
                    self.player.remove();
                    zeQuery(this).remove();
                });
            });

            if (firstVideo) {
                self.videoCount = videoCount;
                this.startMediaElement(firstRatio, self.getVideoCount(items));
            }
            zeQuery(document).on('click', '#' + objID + ' .mejs-overlay-play', function () {
                zeQuery('.mejs-overlay-play', self.$gallery).hide();               
                zeQuery('.mejs-overlay-loading', self.$gallery).parent().show();

            });

            /* activate pagination event handlers if needed */
            if (this.go.args.pagination_type == 'prev_next') {
                zeQuery(document).on('click', '#' + objID + ' .ze_categories_next', function () {
                    var currentPage = parseInt(zeQuery('.playlistContainer', self.$gallery).attr('data-current'));
                    var nextPage = currentPage + 1;
                    self.recreatePagination(nextPage);
                    /* animate */
                    self.animateToPage(nextPage, currentPage);

                    /*  resize flexslider */
                    zeQuery('.activeGroup .ze_flexslider', self.$gallery).each(function () {
                        zeQuery(this).data('flexslider').resize();
                    });
                });


                zeQuery(document).on('click', '#' + objID + ' .ze_categories_prev', function () {

                    var currentPage = parseInt(zeQuery('.playlistContainer', self.$gallery).attr('data-current'));
                    var prevPage = currentPage - 1;
                    self.recreatePagination(prevPage);
                    /* animate */
                    self.animateToPage(prevPage, currentPage);

                    /*  resize flexslider */
                    zeQuery('.activeGroup .ze_flexslider', self.$gallery).each(function () {
                        zeQuery(this).data('flexslider').resize();
                    });
                });


                zeQuery(document).on('click', '#' + objID + ' .ze_categories_pagination li[data-page]', function () {

                    var currentPage = parseInt(zeQuery('.playlistContainer', self.$gallery).attr('data-current'));
                    var gotoPage = parseInt(zeQuery(this).attr('data-page'));
                    self.recreatePagination(gotoPage);
                    /* animate */
                    self.animateToPage(gotoPage, currentPage);

                    /*  resize flexslider */
                    zeQuery('.activeGroup .ze_flexslider', self.$gallery).each(function () {
                        zeQuery(this).data('flexslider').resize();
                    });
                });
            } else if (this.go.args.pagination_type == 'show_more') {/* activate pagination event handlers if needed */
                zeQuery(document).on('click', '#' + objID + ' .ze_categories_show_more_button', function () {
                    zeQuery('.hiddenGroup:first', self.$gallery).removeClass('hiddenGroup').addClass('activeGroup');
                    if (zeQuery('.hiddenGroup', self.$gallery).length == 0)
                        zeQuery(this).hide();
                    zeQuery('.activeGroup .ze_flexslider', self.$gallery).each(function () {
                        zeQuery(this).data('flexslider').resize();
                    });
                });
            }

            if (this.go.args.group_by == true || this.go.args.group_by == 'on') {
                zeQuery('#' + objID + ' .mediaElement_playlist .cp_pl_item:first')
                        .clone().addClass('cloned')
                        .css({
                            'position': 'absolute',
                            'visibility': 'hidden',
                            'display': 'table'
                        })
                        .prependTo('#' + objID + ' .mediaElement_playlist');
                setTimeout(function () {
                    self.activateCarousel();
                }, 0);

            }

            zeQuery(".mediaElement_VideoOverlayButton", this.$gallery).on('click', function () {
                var lead_gen_form_exist = zeQuery('#ze_htmloverlay_placeholder_' + objID + ':visible', self.$gallery).length > 0;
                //if(self.player && self.player.$media[0] && self.player.$media[0].src){
                 if( zeQuery(".cp_pl_item.current", self.$gallery).length){
                     zeQuery(".cp_pl_item.current", self.$gallery).trigger('click');
                 }else{
                     zeQuery(".playlistContainer .cp_pl_item:first", self.$gallery).first().trigger('click');
                 }                 
                //}
                self.onResize();
                

                if(lead_gen_form_exist){
                    self.player.pause()
                }

            })
	
            var hashtag = getHashtag();
            if(hashtag){
              var objID = self.go.loaderParams["_object"];
              var galFId = decodeURIComponent(self.go.loaderParams["_fid"]);
              hashtag =  hashtag.replace('linkshare/'+galFId+'/','').replace('linkshare/'+objID+'/','');
              hashtag = parseInt(hashtag) - 1;
              zeQuery('#'+objID+' a.cp_pl_item:eq('+ hashtag +')')[0].click();
              if(!self.isVisible(zeQuery(".cp_pl_item.current", self.$gallery))){
              zeQuery('.mediaElement_playlist', self.$gallery).animate({
                scrollLeft: zeQuery(".cp_pl_item.current", self.$gallery).outerWidth(true) * zeQuery(".cp_pl_item.current", self.$gallery).index()
              }, 500);
              }
            }
        }

        this.getVideoCount =function(items) {
            var videoCount = 0;
            if (this.go.args.group_by != 'off' && this.go.args.group_by != false) {
                
                for (var s_i = 0; s_i < this.go.sortedItemsKeys.length; s_i++) {
                    var tag = this.go.sortedItemsKeys[s_i];
                    if (items[tag] instanceof Array) {
                     for (var j = 0; j < items[tag].length; j++) {
                           if(items['prepostrollVideo']==true)
                           {
                            videoCount++;
                           }
                           
                        }
                    }
                }
            } else {
                for (i = 0; i < items.length; i++) {
                    if(items['prepostrollVideo']==true)
                    {
                     videoCount++
                    }
                }
            }
            return videoCount;

        }

        this.backwordCompatibility = function(){
            if(this.go.args.facebook_mode){
                this.go.args.autostart = false;
            }
            
			if(this.go.args.allow_lightbox!=='no'){				
				if( typeof this.go.args.allow_lightbox_autostart != 'undefined'){
					this.go.args.autostart = eval(this.go.args.allow_lightbox_autostart);
				}else{ //keep backwordCompatibility
					 this.go.args.autostart = true;
				}
            }
            

            if(this.go.args.group_by == 'true' || this.go.args.group_by == 'false' ){
                this.go.args.group_by = eval(this.go.args.group_by);
            }
            if(this.go.args.group_by == 'playlist') {
                this.go.args.group_by = true;
                this.group_by_youtubelike = true;
                this.go.args.per_page = 0;
            }

            if (typeof this.go.args.tl_storyboard == 'undefined') {
                this.tl_storyboard = false;
                this.go.args.tl_storyboard = 'off';
            } else {
                this.tl_storyboard = true;
            }
            // watermark
           if(this.go.args.watermark_position === "no" || !this.go.args.watermark ){
                this.go.args.watermark_on_off = false;
            } else {
                this.go.args.watermark_on_off = true
            }
        }
        this.detectVideoThumbnail = function(item) {
            var that = this;
            
            if(!item) return;
            var tL;
            if(item.timeline){
                try{
                    tL = JSON.parse(item.timeline);
                }catch(ex){}
            }
            return ((tL && tL.video_thumbnail) ? true : false)
        },

        this.showVideoThumbnail = function(){
            var that = this;
            var item = this.go.MediaJSON.items[0];
            if(!item) return;
            var tL;
            if(item.timeline){
                try{
                    tL = JSON.parse(item.timeline);
                }catch(ex){}
            }
            var start, end;
            if(tL && tL.video_thumbnail){
                if(typeof tL.video_thumbnail.start !== "undefined"){
                    start = tL.video_thumbnail.start;
                }

                if(typeof tL.video_thumbnail.end !== "undefined"){
                    end = tL.video_thumbnail.end;
                }
            }

            if(typeof start === "undefined" || typeof end === "undefined") return;
			
			
			
			
			zeQuery(".mejs-poster", this.$gallery).find(".mejs-poster-video").remove();
            zeQuery(".mejs-poster", this.$gallery).find(".unmute-button").remove();
            var $video = zeQuery("<video preload='metadata'>");
            $video.addClass("mejs-poster-video");
            var $videoElem = $video.get(0);
            $videoElem.muted = true;
            $videoElem.controls = false;
            $video.css({
                position: "absolute",
                top: 0,
                left: 0,
            });

            var $posterOverlay = zeQuery("<div>");
            $posterOverlay.addClass("mejs-poster-video");
            $posterOverlay.css({position: "absolute", "top" : "0", "left" : "0", width: "100%", height: "100%", background: "#000"})
            //zeQuery(".mejs-poster", this.$gallery).append($posterOverlay);
            
            var dataURI = "";
            dataURI = this.masterM3u8DataUri(this.createM3u8Arr(item));
            if(dataURI && is_ie() == 11 && (/(Windows 8.1|Windows NT 6.3)/.test(navigator.appVersion) || /(Windows 10.0|Windows NT 10.0)/.test(navigator.appVersion))){
                dataURI = "//www.cincopa.com/media-platform/runtimeze/m3u8.aspx?rid=" + item.rid;
            }
            
            if( this.isHlsSupported() && dataURI ) {
                var hlsOptions = {
                    maxMaxBufferLength: (this.go.args.fast_start ?  parseInt(this.go.args.hls_max_fast_start_buffer_length): parseInt(this.go.args.hls_max_buffer_length) ),
                    autoStartLoad : false
                }
               
                var hls = new Hls(hlsOptions);
                hls.loadSource(dataURI);
                hls.attachMedia($videoElem);
				
				hls.on(Hls.Events.MANIFEST_PARSED,function() {		
                    var videoLevel = that.getVideoLevel( {item:item}, hls);
                    hls.loadLevel = videoLevel;
                    hls.startLoad(start);
                    $videoElem.play();
                });

            } else {
                if(this.go.args.enable_hls && dataURI && that.isNativeHls()){
                    $videoElem.src = dataURI;
                } else {
                    $videoElem.src = this.getContentUrl(item);
                }
                var played = false;
                $videoElem.addEventListener("loadedmetadata", function(){
                    if(!played){
                        this.currentTime = start;
                        this.setAttribute('playsinline',true);
						this.play();
                        
                        played = true;
                    }
                })
            } 
     
           /*  $videoElem.addEventListener("playing", function(){
                $posterOverlay.remove();
            }) */
            $videoElem.addEventListener("timeupdate", function(){
                if(this.currentTime < start){
                    this.currentTime = start;
                }
                if(this.currentTime > end){
                    this.currentTime = start;
                }
            });
			
			if( item.duration && end >  hmsToSecondsOnly(item.duration) ){
				$videoElem.addEventListener("ended", function(){
					this.currentTime = start;
					this.play();
				});
			}
           
            var $unmuteBtn = zeQuery("<div>").addClass("unmute-button");
            $unmuteBtn.html("<div class='unmute-button-speaker'><span></span></div>");
            $unmuteBtn.css({"background": "rgba(0,0,0,.2)"});
            $unmuteBtn.on("click", function(){
                that.player.$media[0].play();
            });
			/*             
            zeQuery(".mejs-poster", this.$gallery).append($video);
            zeQuery(".mejs-poster", this.$gallery).append($unmuteBtn); */
			return {
				$video:$video,
				$unmuteBtn:$unmuteBtn
			};
            
        }

        this.getThumbnailUrl = function(item, size){
            var defaultSize = 3;
            if(this.load_thumb === "small"){
                defaultSize = 1;
            } else if(this.load_thumb === "medium"){
                defaultSize = 2;
            } else if(this.load_thumb === "large"){
                defaultSize = 3;
            } else if(this.load_thumb === "xlarge"){
                defaultSize = 4;
            }
			
			var sbgenerated = false;

            size = size || defaultSize;
            var thumbnail = '';
            if(item.versions){
                if(size === 1 && item.versions['jpg_100x75'] && item.versions['jpg_100x75'].url){
                    thumbnail = item.versions['jpg_100x75'].url;
                } else if(size === 2 && item.versions['jpg_200x150'] && item.versions['jpg_200x150'].url){
                    thumbnail = item.versions['jpg_200x150'].url;
                } else if(size === 3 && item.versions['jpg_600x450'] && item.versions['jpg_600x450'].url){
                    thumbnail = item.versions['jpg_600x450'].url;
                } else if (size === 4 && item.versions['jpg_1200x900'] && item.versions['jpg_1200x900'].url){
                    thumbnail = item.versions['jpg_1200x900'].url;
                } else if (size === 5 && item.versions['jpg_sb_100x75'] && item.versions['jpg_sb_100x75'].url){
                    thumbnail = item.versions['jpg_sb_100x75'].url;
					sbgenerated = true;
                } else if (size === 6 && item.versions['jpg_sb_200x150'] && item.versions['jpg_sb_200x150'].url){
                    thumbnail = item.versions['jpg_sb_200x150'].url;
					sbgenerated = true;
                } else {
                    thumbnail = item.versions['jpg_600x450'] ? item.versions['jpg_600x450'].url : "";
                }
            }
			
			
            if(!thumbnail){
                thumbnail = item.thumbnail_url;
            }
			
			if( (size ==5 || size == 6) && !sbgenerated ){
					return '';
			}
			
            return thumbnail;
        }

        this.getContentUrl = function(item,original){
            var url = '';
            if(item.versions && item.versions['mp4_hd'] && item.versions['mp4_hd'].url){
                url = item.versions['mp4_hd'].url;
            }

            if((!url && item.versions && item.versions['original'] && item.versions['original'].url) || original){
                url = item.versions['original'].url;
            }
			
			if(!url){
                url = item.content_url;
            }

            if(!this.isHlsSupported() && this.isNativeHls() ||  item["content_type"].indexOf('audio') > -1){
                var keyName = this.inBetween(url, 'key=','&');
                if(keyName){
                    url = url.replace('key='+keyName,'?key=AAAAAAA=');
                }
            }
            return url;
        }

        this.getItems = function(resort){
            if (this.go.args.group_by  == true || this.go.args.group_by == 'on' && typeof this.go.MediaJSON.items.sortedByTag == 'undefined') {
                if(!this.go.sortedItems || resort){
                    this.go.sortedItems = this.sortByTag(this.go.MediaJSON.items);
                }
                return this.go.sortedItems
            }
            return this.go.MediaJSON.items;
        }

        this.getWindow = function(){
            var winSelector;
            if (this.go.args.iframe) {
                winSelector = parent.window;
            } else {
                winSelector = window;
            }

            if(!!navigator.userAgent.match(' Safari/') && !navigator.userAgent.match(' Chrom') && !!navigator.userAgent.match(' Version/5.')){
                winSelector = window;
            }
            return winSelector;
        }      


        this.findCurrentSubtitle = function (index, tag){
            var items = this.getItems(); 
            var objID = this.go.loaderParams["_object"];
            var extraFileType, extraFileCat;
            tracksLi = zeQuery('#mediaElementVideoContainer' + objID + ' .mejs-controls .mejs-captions-button .mejs-captions-selector li:not(:last-child)');
            tracksLi.hide().removeClass("track-current");
            tracksLi.each(function(i) {
                extraFileType = zeQuery(this).find('input').val();
                extraFileCat = zeQuery(this).find('a.cp_pl_item').data('cat');
                var splitArray = extraFileType.split('_');
                var type = splitArray[0];
                if (self.go.args.group_by != 'off' && self.go.args.group_by != false){
                    if( extraFileType == type + '_' + tag.replace(/ /g,'_')  + '_' + index ){ 
                        zeQuery(this).show().addClass("track-current");
                        zeQuery(this).attr('data-type',type);
                    }
                }else{
                    if( extraFileType == type + '_' + index){
                      zeQuery(this).show().addClass("track-current"); 
                      zeQuery(this).attr('data-type',type);
                    }
                        
                }
                if(!zeQuery('#mediaElementVideoContainer' + objID + ' .track-current').length)
                    zeQuery('#mediaElementVideoContainer' + objID + ' .mejs-captions-button').addClass("cp-hide");
                else
                    zeQuery('#mediaElementVideoContainer' + objID + ' .mejs-captions-button').removeClass("cp-hide");
            });
        }

        this.getTracksSource = function(item, index , tag){
            var tracksHtml = '';
            var subtitle_list = this.go.args.subtitle_list ? this.go.args.subtitle_list.split(",") : [];
            var existing_langs = [];
            if(item && typeof item.extra_files != 'undefined' ){
                var extraFiles = item.extra_files;
                var extraFileType, extraFileUrl;
                var thumbnailUrl = this.getThumbnailUrl(item);
                var counterExtra = 0, fileNativeLang;

                for( var extraInd = 0 ; extraInd < extraFiles.length; extraInd ++ ){
                    startPos = thumbnailUrl.lastIndexOf('/') + 1;
                    endPos = thumbnailUrl.indexOf('?');
                    thisFileName = item.filename;
                    extraFileId = encodeURI(extraFiles[extraInd].id);
                    extraFileType = extraFiles[extraInd].type.toLowerCase();
                    fileNativeLang = extraFileType;
                    extraFileUrl = extraFiles[extraInd].url;
                    if( extraFileType.indexOf("subtitle-")>-1 ){
                        for( var i = 0; i < _zeNativeLanguagesArray.length; i++ ){
                            var langCode = _zeNativeLanguagesArray[i].code;
                            var nativeName = _zeNativeLanguagesArray[i].nativeName;
                            var origCode = extraFiles[extraInd].type.split('-');

                            if( typeof(origCode[1]) != 'undefined' && origCode[1].toLowerCase() == langCode  ){
                                fileNativeLang = nativeName;
                            }
                        }
                        existing_langs.push(origCode[1]);

                        // for ios create vtt from srt
                        this.srtToVtt(extraFileUrl, self.go.args.group_by != 'off' && self.go.args.group_by != false ? extraFileType +'_'+ tag.replace(/ /g,'_') +'_'+ index : extraFileType +'_'+ index)
                        if (self.go.args.group_by != 'off' && self.go.args.group_by != false){
                            tracksHtml += '<track kind="captions" data-src="'+ extraFileUrl +'" srclang="'+ extraFileType +'_'+ tag.replace(/ /g,'_') +'_'+ index +'" label="'+ fileNativeLang +'"/>';
                        } else {
                            tracksHtml += '<track kind="captions" data-src="'+ extraFileUrl +'" srclang="'+ extraFileType +'_'+ index +'" label="'+ fileNativeLang+'"/>';
                        }
                        counterExtra++;
                    }
                };
                this.subtitleFromList = "";
                if(subtitle_list.length && existing_langs.length){
                    for(var l = 0; l< subtitle_list.length; l++){
                        if(existing_langs.indexOf(subtitle_list[l]) > -1 && subtitle_list[l] != "*"){
                            this.subtitleFromList = subtitle_list[l];
                            break;
                        }
                    }
                    if(!this.subtitleFromList && subtitle_list.indexOf("*") > -1){
                        this.subtitleFromList = existing_langs[0]
                    }
                }
              
                return tracksHtml;
            } else {
                return 'none';
            }
        }

        this.srtToVtt = function(url , index){
            if (this.isIOS != true) return true;
            function toVTT(utf8str) {
                return utf8str
                  .replace(/\{\\([ibu])\}/g, '</$1>')
                  .replace(/\{\\([ibu])1\}/g, '<$1>')
                  .replace(/\{([ibu])\}/g, '<$1>')
                  .replace(/\{\/([ibu])\}/g, '</$1>')
                  .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, '$1.$2')
                  .concat('\r\n\r\n');
            }

            var _that = this;
            zeQuery.ajax({
                url: url,
                success: function(res){
                    var vttString = 'WEBVTT FILE\r\n\r\n';
                    var text = vttString.concat(toVTT(res));
                    var blob = new Blob([text], {type : 'text/vtt'});
                    var url = URL.createObjectURL(blob);
                    zeQuery("track[srclang='" + index + "']", _that.$gallery).attr("src", url)
                }
            })
        }

        this.checkFacebookMode = function(){
            var objID = this.go.loaderParams["_object"];
            var isInView = false;
            if(!this.go.args.iframe){
                isInView = this.isScrolledIntoView('#mediaElementVideoContainer' + objID);
            } else {
                var parentObj = zeQuery(this.go.getParentIframeObject());
                isInView = this.isScrolledIntoView(parentObj,false,false, true,objID);
            }

            if (isInView) {
                this.player.$media[0].play().catch(function(err){ });
                if(!this.checkFacebookMode.secondCall){
                    this.player.setMuted(true);
                    this.checkFacebookMode.secondCall =true
               }
                
            } else {
                this.player.$media[0].pause();
            }
        }

        this.alwaysOnTop = function(){
            var objID = this.go.loaderParams["_object"];
            var that = this;
            if(!that.go.args.iframe){
                var inViewSelector  = '#mediaElementVideoContainer' + objID;
                if(zeQuery('#mediaElementVideoContainer' + objID).hasClass('ze_fixedPosition')){
                    if(zeQuery('#mediaElement'+objID+ ' .ze_fixedPosition_helper').length ){
                        inViewSelector = '#mediaElement'+objID+ ' .ze_fixedPosition_helper';
                    }
                }
                var inViewContainer = zeQuery('#mediaElementVideoContainer' + objID);
                if (zeQuery('#mediaElement'+objID+ ' .ze_fixedPosition_helper').length > 0 && that.isScrolledIntoView(inViewSelector,true,true)  ) {
                     inViewContainer.addClass('ze_fixedPosition_hide');
                    inViewContainer.removeClass('ze_fixedPosition_options');
                    that.playerIsFloating = false;
                    zeQuery('#mediaElement'+objID+ ' .ze_fixedPosition_helper').height(0).remove();
                    zeQuery('#mediaElementVideoContainer'+objID+ ' .alwaysOnTop-close').remove();
                    
                    inViewContainer.removeClass('ze_fixedPosition');
                    inViewContainer.removeClass('ze_opasityHelper');
                    inViewContainer.removeClass('ze_fixedPosition_hide');
                    zeQuery('#mediaElementVideoContainer' + objID).removeClass('cp-hide');
                    zeQuery('#mediaElementVideoContainer' + objID).fadeIn(1);
                    that.onResize();
                    setTimeout(function(){
                        zeQuery(window).trigger('resize');
                    },0);
                    setTimeout(function(){
                        zeQuery('.mediaElementVideoContainer .mejs-controls').resize();
                        that.alwaysOnTop.fixAOTTimer = true;
                    },500);
                }else if(zeQuery('#mediaElement'+objID+ ' .ze_fixedPosition_helper').length == 0 && (zeQuery(that.getWindow()).scrollTop() > zeQuery(inViewSelector).offset().top) && !that.isScrolledIntoView(inViewSelector,true, true) && that.alwaysOnTop.fixAOTTimer){
                  var getVideoHeight = zeQuery('#mediaElementVideoContainer' + objID).height();
                    var st = "<style id='ze_fixedPosition_helper_style_" + objID +"'>#mediaElement" + objID + " .mediaElementVideoContainer.ze_fixedPosition_helper{height:" + getVideoHeight + "px !important}</style>";
                    zeQuery('#ze_fixedPosition_helper_style_'+objID).remove();
                    zeQuery('#mediaElement'+objID).prepend('<div class="mediaElementVideoContainer ze_fixedPosition_helper" style="height:'+getVideoHeight+'px"></div>');
                    zeQuery('#mediaElement'+objID).prepend(st);
                    var closeBtnClass = that.go.args.always_on_top_float==='left' ? "alwaysOnTop-close alwaysOnTop-close-left" :"alwaysOnTop-close";
                    var closeBtn =zeQuery('<div class="'+closeBtnClass+'"></div>');
                    zeQuery('#mediaElementVideoContainer' + objID).append(closeBtn)

                    /*add options to mediaelement*/
                    inViewContainer.addClass('ze_fixedPosition_options');
                    that.playerIsFloating = true;
                    //zeQuery(window).trigger('resize');
                    that.onResize();
                    inViewContainer.addClass('ze_fixedPosition ze_opasityHelper');
                    that.alwaysOnTop.fixAOTTimer = false;
                    setTimeout(function(){
                        that.adjustControls();
                        zeQuery('.mediaElementVideoContainer .mejs-controls').resize();
                    },520)
                    closeBtn.on('click',function(){
                        zeQuery('#mediaElementVideoContainer' + objID).find('video').get(0).pause();
                        zeQuery('#mediaElementVideoContainer' + objID).fadeOut(500,function(){
                            zeQuery(this).addClass('cp-hide')
                        })
                    })
                    
                }
            } else {
                

                var parentObj = zeQuery(that.go.getParentIframeObject());
                if(!parentObj.hasClass("alwaysOnTopVideo")){
                    var offset = parentObj.offset();
                    var h = parentObj.height();
                    parentObj.css("left", offset.left + "px");
                    parentObj.css("top", - h/2 + "px");
                    var transitionClassName = that.go.args.always_on_top_float==='left' ? "alwaysOnTopVideo alwaysOnTopLeft" :"alwaysOnTopVideo";
                    parentObj.addClass(transitionClassName);
                    zeQuery('#' + objID ).addClass(transitionClassName);
                    
                }
                var inViewSelector  = parentObj;
                if(parentObj.hasClass('ze_fixedPosition')){
                    if(parentObj.siblings(".ze_fixedPosition_helper").length ){
                        inViewSelector = parentObj.siblings(".ze_fixedPosition_helper");
                    }
                }

                var inViewContainer = parentObj;
                if (parentObj.siblings(".ze_fixedPosition_helper").length > 0 && that.isScrolledIntoView(inViewSelector,true,true)  ) {
                    inViewContainer.removeClass('ze_fixedPosition_options');
                    that.playerIsFloating = false;
                    parentObj.siblings(".ze_fixedPosition_helper").height(0).remove();
                    zeQuery('#mediaElementVideoContainer'+objID+ ' .alwaysOnTop-close').remove();
                    inViewContainer.removeClass('ze_fixedPosition');
                    parentObj.removeClass('cp-hide')
                    parentObj.fadeIn(1);
                    that.onResize(true);
                    setTimeout(function(){
                        that.adjustControls();
                        that.resizePlayer();
                        zeQuery('.mediaElementVideoContainer .mejs-controls').resize();
                        that.alwaysOnTop.fixAOTTimer = true;
                    },500);
                   
                   
                }else if(parentObj.siblings(".ze_fixedPosition_helper").length == 0 && (zeQuery(that.getWindow()).scrollTop() > zeQuery(inViewSelector, parent.document).offset().top) && !that.isScrolledIntoView(inViewSelector,true, true) && that.alwaysOnTop.fixAOTTimer){
                    /*get video height and  creat helper div to prevent page jumping*/
                    var getVideoHeight = zeQuery('#mediaElementVideoContainer' + objID).height();
                    

                    var st = "<style id='ze_fixedPosition_helper_style_" + that.go.loaderParams['_iframeParentObject'] +"'>div#" + that.go.loaderParams['_iframeParentObject'] + " .ze_fixedPosition_helper{height:" + getVideoHeight + "px !important}</style>";
                    parentObj.siblings('#ze_fixedPosition_helper_style_'+that.go.loaderParams['_iframeParentObject'] ).remove();  
                    parentObj.after('<div class="mediaElementVideoContainer ze_fixedPosition_helper" style="height:'+getVideoHeight+'px"></div>');
                    parentObj.before(st)  
                    var closeBtnClass = that.go.args.always_on_top_float==='left' ? "alwaysOnTop-close alwaysOnTop-close-left" :"alwaysOnTop-close";
                    var closeBtn =zeQuery('<div class="'+closeBtnClass+'"></div>');
                    zeQuery('#mediaElementVideoContainer' + objID).append(closeBtn);

                    /*add options to mediaelement*/
                    inViewContainer.addClass('ze_fixedPosition_options');
                    inViewContainer.addClass('ze_fixedPosition');
                    that.playerIsFloating = true;
                    that.onResize(true);
                    
                    that.alwaysOnTop.fixAOTTimer = false;
                    setTimeout(function(){
                        that.adjustControls();
                        that.resizePlayer();
                        zeQuery('.mediaElementVideoContainer .mejs-controls').resize();
                    },520)
                    closeBtn.on('click',function(){
                        zeQuery('#mediaElementVideoContainer' + objID).find('video').get(0).pause();
                        parentObj.fadeOut(500,function(){
                            parentObj.addClass('cp-hide');
                        })

                    })
                }
            }
        }

        this.resizeAlwaysOnTop = function(){
            // resize of always on top
            var objID = this.go.loaderParams["_object"];
            var winElem = this.getWindow();
            var transitionClassName = this.go.args.always_on_top_float==='left' ? "alwaysOnTopVideo alwaysOnTopLeft" :"alwaysOnTopVideo";
            if(!this.go.args.iframe){
                var offset = zeQuery('#mediaElementVideoContainer' + objID).offset();
                var h = zeQuery('#mediaElementVideoContainer' + objID).height();
                zeQuery('#mediaElementVideoContainer' + objID).css("left", offset.left + "px");
                zeQuery('#mediaElementVideoContainer' + objID).css("top", - h/2 + "px");
                zeQuery('#' + objID ).addClass(transitionClassName);
            } else {
                var ifr = this.go.getParentIframeObject();
                var offset = zeQuery(ifr).offset();
                var h = zeQuery(ifr).height();
                zeQuery(ifr).css("left", offset.left + "px");
                zeQuery(ifr).css("top", - h/2 + "px");
                zeQuery(ifr).addClass(transitionClassName);
                zeQuery('#' + objID ).addClass(transitionClassName);
            }

            
            

            var leftPos =0;
            if(this.go.args.always_on_top_float==='left'){
                    leftPos = parseInt(this.go.args.always_on_top_right);
            }else{
			        leftPos = zeQuery(winElem).width() - parseInt(this.go.args.always_on_top_size_w) - parseInt(this.go.args.always_on_top_right);
            }

            if(zeQuery(winElem).width() < 600){
                 if(this.go.args.always_on_top_float==='left'){
                    leftPos = 10;
                }else{
                    leftPos = zeQuery(winElem).width() - parseInt(this.go.args.always_on_top_size_w) - 10;
                }
             }

            if(this.go.args.always_on_top_height_by_ratio){
                this.go.args.always_on_top_size_h = this.go.args.always_on_top_size_w/this.fRatio;
            }
            var stInner = 'div#' + objID + ' #mediaElementVideoContainer' + objID + '.ze_fixedPosition_options{ width:'+this.go.args.always_on_top_size_w+'px !important; height:'+this.go.args.always_on_top_size_h+'px !important;}'
            stInner += '#mediaElementVideoContainer'+objID+'.ze_fixedPosition{ top:'+this.go.args.always_on_top_top+'px !important;  left:'+leftPos+'px !important;}';
            
            if(!this.go.args.iframe){
                var stInner = 'div#' + objID + ' #mediaElementVideoContainer' + objID + '.ze_fixedPosition_options{ width:'+this.go.args.always_on_top_size_w+'px !important; height:'+this.go.args.always_on_top_size_h+'px !important;}'
                stInner += '#mediaElementVideoContainer'+objID+'.ze_fixedPosition{ top:'+this.go.args.always_on_top_top+'px !important;  left:'+leftPos+'px !important;}';
                zeQuery("style#cp_style_ze_fixedPosition_" + objID).html(stInner)
            } else {
                var parentFrame = this.go.getParentIframeObject();
                var parentFrameId = this.go.getParentIframeObject().id;
                var stInner = '#' + parentFrameId + '.ze_fixedPosition_options{ width:'+this.go.args.always_on_top_size_w+'px !important; height:'+this.go.args.always_on_top_size_h+'px !important;}'
                stInner += '#' + parentFrameId + '.ze_fixedPosition{ top:'+this.go.args.always_on_top_top+'px !important;  left:'+leftPos+'px !important; position: fixed !important;z-index: 9999; opacity:1;}';
                stInner += ".ze_fixedPosition_helper{box-shadow: rgba(17, 35, 105, 0.41) 0px 4px 26px 7px;}";
                stInner += ".alwaysOnTopVideo{-webkit-transition: left .5s, top .5s ; transition: left .5s, top .5s  ; position:static} " ;
                stInner += ".alwaysOnTopLeft{-webkit-transition: right .5s, top .5s ; transition: right .5s, top .5s  ; position:static} " ;
                zeQuery(parentFrame).siblings("style#cp_style_ze_fixedPosition_" + this.go.loaderParams['_iframeParentObject']).html(stInner)
            }
        }

        this.isScrolledIntoView = function (elem, partial, half, parentWin,objId) {
            var el  = zeQuery(elem) ;
            if(el.length == 0) return false;
            var winSelector = this.getWindow();

            var docViewTop = zeQuery(winSelector).scrollTop();
            var docViewBottom = docViewTop + winSelector.innerHeight;
            
            var elemTop = el.offset().top;
            var elemBottom = elemTop + (half ? el.height()/2 : el.height());
            elemBottom = parentWin ? elemBottom - (el.height()-zeQuery('#mediaElementVideoContainer'+objId).height()) : elemBottom;
            if(typeof partial == 'undefined' || partial == false){
                return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }else{
                return ( (elemBottom <= docViewBottom &&  elemBottom >= docViewTop ) || (elemTop >= docViewTop &&  elemTop <= docViewBottom ));
            }

        }

        this.recreatePagination = function (index) {
            //if( index >= 4 ){
            var htm = '<li class="ze_categories_prev" >Prev</li>';
            var startPoint = index - 2;
            if (startPoint <= 2) {
                startPoint = 1;
            }
            var endPoint = startPoint + 4;
            if (startPoint > 1) {
                htm += '<li class="ze_categories_item" data-page="1" >First</li>';
                htm += '<li class="" >...</li>';
            }
            for (var zind = startPoint; zind <= endPoint; zind++) {
                if (zind > self.pageCount)
                    break;
                htm += '<li class="ze_categories_item" data-page="' + zind + '" >' + zind + '</li>';
                if (zind == endPoint && zind < self.pageCount) {
                    htm += '<li class="" >...</li>';
                    htm += '<li class="ze_categories_item" data-page="' + self.pageCount + '" >Last</li>';
                }
            }
            htm += '<li class="ze_categories_next">Next</li>';
            //}
            zeQuery('.ze_categories_pagination', self.$gallery).html(htm);

            if (index == 1) {
                zeQuery('.ze_categories_pagination .ze_categories_prev', self.$gallery).hide();
            }
            if (index == self.pageCount) {
                zeQuery('.ze_categories_pagination .ze_categories_next', self.$gallery).hide();
            }
            zeQuery('.playlistContainer', self.$gallery).attr('data-current', index);
        }
        this.animateToPage = function (index, currentIndex) {
            animationInPx = Math.abs(index - currentIndex) * zeQuery('.ze_grouping', self.$gallery).width();
            if (index > currentIndex) {
                zeQuery('.playlistContainer', self.$gallery).animate({
                    'left': '-=' + animationInPx
                });
            } else {
                zeQuery('.playlistContainer', self.$gallery).animate({
                    'left': '+=' + animationInPx
                });
            }
            zeQuery('.ze_categories_pagination li[data-page]', self.$gallery).removeClass('active');
            zeQuery('.ze_categories_pagination li[data-page="' + index + '"]', self.$gallery).addClass('active');

        }
        this.activateCarousel = function () {
            var thumb_w = parseInt(zeQuery('.mediaElement_playlist .cp_pl_item.cloned', this.$gallery).outerWidth(true));
            zeQuery('.mediaElement_playlist .cp_pl_item.cloned', this.$gallery).remove();
            zeQuery('.ze_flexslider  ul.slides', this.$gallery).each(function () {
                if (zeQuery(this).find('li').length == 1) {
                    zeQuery(this).parents('.ze_flexslider').removeClass('zeSlider').addClass('zeOneSlider');
                }
            });
            var counter = 0;
            if(this.group_by_youtubelike || this.go.args.new_video_portal)
                return false;          
            zeQuery('.ze_flexslider.zeSlider', this.$gallery).flexslider({
                animation: "slide",
                controlNav: false,
                prevText: '',
                nextText: '',
                animationLoop: false,
                itemWidth: thumb_w,
                itemMargin: self.go.args.playlist_item_margin ? parseInt(self.go.args.playlist_item_margin) : 5,
                move: 1,
                pausePlay: false,
                slideshow: false,
                keyboard: this.go.args.cincopaTV?false: true,
                touch: self.go.args.disableSliderTouch ? false : true,
                start: function () {
                    counter++;
                    if (counter == zeQuery('.ze_flexslider', self.$gallery).length) {
                        zeQuery(window).trigger('resize');
                    }
                    self.loadPlaylistThumbs();
                    self.onResize()
                }
            });

            zeQuery('.ze_flexslider.zeOneSlider', this.$gallery).flexslider({
                animation: "fade",
                controlNav: false,
                prevText: '',
                nextText: '',
                animationLoop: false,
                itemWidth: thumb_w,
                directionNav: false,
                itemMargin: self.go.args.playlist_item_margin ? parseInt(self.go.args.playlist_item_margin) : 5,
                move: 1,
                pausePlay: false,
                slideshow: false,
                touch: self.go.args.disableSliderTouch ? false : true,
                keyboard: this.go.args.cincopaTV?false: true,
                start: function () {
                    counter++;
                    if (counter == zeQuery('.ze_flexslider', self.$gallery).length) {
                        zeQuery(window).trigger('resize');
                    }
                    zeQuery('.ze_flexslider.zeOneSlider', this.$gallery).find('ul.slides').css('transform', 'none');
                    self.loadPlaylistThumbs()
                    self.onResize()
                },
                after: function (slider) {
                    that.go.onSkinEvent('slider.'+slider.direction);
                }
            });

        }
        this.frameResize = function () {
            if(this.go.args.allow_lightbox != 'no'){
                return false;
            }                
            var objID = this.go.loaderParams["_object"];
            var h = document.getElementById(objID).offsetHeight + 'px';
            var parentiframe = this.go.getParentIframeObject();
            if(parseInt(h) != 0){
                parentiframe.height = h;
            }
            objID = self.go.loaderParams["_object"];
            if (zeQuery('#' + objID).width() < 640 && this.isMobile) {
                zeQuery('#' + objID).addClass('ze_mobileLayout');
            } else {
                zeQuery('#' + objID).removeClass('ze_mobileLayout');
            }

        }
        this.onClick = function (el, url, cat, track, notPlay, hideposter) {
            zeQuery('.netflix_popup_current_title', self.$gallery).remove();
            zeQuery('.netflix_popup_audio_item', self.$gallery).remove();
            zeQuery('.mejs-controls-audio-helper', self.$gallery).remove();

            var audio = self.sendDataCollector(zeQuery(el).attr('data-url'));

			if(audio.item["content_type"].indexOf('audio') > -1 && self.go.args.audio_support){

                zeQuery('.mediaElementVideoContainer',self.$gallery).addClass('isAudio');
               
                var audioBlock = '\
                <div class="mejs-controls-audio-helper" ></div>\
                <div class="netflix_popup_audio_item" >\
                <div class="audio--header">\
                <div class="audio--image"><img src="'+audio.item['thumbnail_url']+'"/></div>\
                <div class="audio--info"><span class="audio--title">'+audio.item['title']+'</span>\
                <span class="audio--data">'+self.getDate(audio.item['modified'])+'</span>\
                <div class="audio--descroption">\
                <p><strong>Description</strong></p>\
                <p>'+audio.item['description']+'</p>\
                </div>\
                </div>\
                </div>\
                <div class="audio--transcript_notes">\
                <div class="transcript_notes--chooser">\
                <span class="notes active">Notes</span>\
                <!--<span class="transcript ">Transcript</span>-->\
                </div>\
                <p class="transcript_notes--text">'+audio.item['long_description']+'</p>\
                </div>\
                </div>\
                ';
                $(audioBlock).insertAfter('.mejs-controls');
                /* netflix audo tab support */
                /*zeQuery('.transcript_notes--chooser span', self.$gallery).on('click',function(e) {
                    zeQuery('.transcript_notes--chooser span', self.$gallery).removeClass('active');
                    zeQuery(this).addClass('active');
                    if(zeQuery(this).hasClass('notes')){//
                        zeQuery('.transcript_notes--text',self.$gallery).text(audio.item['long_description'])
                    }else {
                        zeQuery('.transcript_notes--text',self.$gallery).text('transcript text');
                    }
                })*/
            } else {
                var video = self.sendDataCollector(zeQuery(el).attr('data-url'));
                zeQuery('.mediaElementVideoContainer', self.$gallery).removeClass('isAudio');
                zeQuery('.mejs-container', self.$gallery).append('<span class="netflix_popup_current_title">'+video.item['title']+'</span>');
            }
			 if(!zeQuery(el).hasClass('pause')){
                var videoContainer = zeQuery('.mejs-mediaelement', self.$gallery);
                videoContainer.addClass('fading');
            }
            if(el.length == 0){
                return;
            }
            if(!clickedfirsttime){
                zeQuery( ".ze_overlay_close_btn" ).trigger( "click" );
            }
            clickedfirsttime=false;
            objID = self.go.loaderParams["_object"];

            // add class for animation when changing video
            zeQuery("#" + objID).removeClass("ze-changing-video");
            setTimeout(function(){
                zeQuery("#" + objID).addClass("ze-changing-video");
            },0)

            var lead_gen_form_exist = zeQuery('#ze_htmloverlay_placeholder_' + objID + ':visible', self.$gallery).length > 0;

            if(lead_gen_form_exist){
                notPlay = true;
            }else if(zeQuery("#" + objID + ".cp_form_opened").length){
                notPlay = true;
            }
         
            var items = self.getItems();
			var sourceTrack = '', dataTag = '', item, elIndex;
			var dataOvverride = true;
			if(zeQuery(el).data('ovveride') == false && zeQuery(el).hasClass('current') ){
					return false;
            }
            
			zeQuery('#mediaElementVideoContainer' + objID+ ' .imageHelper').remove();
			if(zeQuery('#mediaElementVideoContainer' + objID+ ' .mejs-container').length){
				zeQuery('#mediaElementVideoContainer' + objID+' .mejs-inner').show();

			}else{
				zeQuery(self.player.node).show();
			}
			if( track == 'next' || track == 'prev'){

                if (self.go.args.group_by != 'off' && self.go.args.group_by != false)
                    elIndex = zeQuery('div.ze_flexslider[data-cat="' + cat + '"] a.cp_pl_item[data-url="' + url + '"][data-cat="' + cat + '"]', self.$gallery).data('index');
                else
                    elIndex = zeQuery(el).index();

                if (typeof chrome !== "undefined") {
                    if (typeof chrome.cast !== "undefined") {
                        if (track == 'next'){
                            self.loadMedia('next');
                            self.idle = false;
                        } else if (track == 'prev'){
                            self.loadMedia('prev');
                            self.idle = false;
                        }
                    }
                }
			}else{
                elIndex = zeQuery(el).data('index'); 
            }
             if( self.go.args.subtitle || self.go.args.subtitle_list){
				if (this.go.args.group_by != 'off' && this.go.args.group_by != false){
					dataTag = zeQuery(el).data('cat');
					if( typeof item != 'undefined' ){
                        item = items.player[elIndex];
                        sourceTrack += self.getTracksSource(item, elIndex, dataTag);
                   }
				}else{
					if( typeof item != 'undefined' ){
					    item = items[elIndex];
					    sourceTrack += self.getTracksSource(item, elIndex);
					}
				}
				self.findCurrentSubtitle(elIndex, dataTag);
			}
            
			if (zeQuery(el).hasClass('current') && !self.player.media.paused) {
				self.player.$media[0].pause();
				return false;
			} else if (zeQuery(el).hasClass('current')) {
				if (typeof self.session == "undefined" || self.session.media[0] == "undefined") {
                    self.player.$media[0].play().catch(function(err){
									if(err && err.code === 20) return;
									var videoElement  = self.player.$media[0];
									videoElement.muted = true;
                                    videoElement.play();
                                    var unmuteBtn = zeQuery("<div>").addClass("unmute-button");
                                    unmuteBtn.html("<div class='unmute-button-speaker'><span></span></div><span>" + (self.isMobile ? "Tap for sound" : "Click for sound") +"</span>");

                                    unmuteBtn.on("click", function(){
                                        if(videoElement.muted) {
                                            videoElement.muted = false;
                                        }
                                        unmuteBtn.remove();
                                    })
                                    zeQuery(".mejs-layers", self.$gallery).append(unmuteBtn);
					});
                    if(notPlay){
                        self.player.pause();
                    }
                    return false;
                }
			}

			var mejsID = zeQuery('.mediaElementVideoContainer', self.$gallery).attr('id');
			try {
				delete cincopa_mejs.players[mejsID];
			} catch (ex) {
			}
			var prevCurrent = zeQuery('.cp_pl_item.current[data-url]', self.$gallery).attr("data-url");
			if(prevCurrent){
			    var sendingData = self.sendDataCollector(prevCurrent);
			    if(!self.videoEnded && self.playing && !self.advertising){
                        var sendingPauseData = self.sendDataCollector(prevCurrent);
                        sendingPauseData.second = ~~self.player.$media[0].currentTime;
                        self.go.onSkinEvent('video.pause', sendingPauseData );
			    }
			    if(!self.advertising){
			        zeQuery('#mediaElementVideoContainer' + objID+ ' video').attr("data-playingVideoSize", null)
                    self.go.onSkinEvent('video.unload', sendingData );
                }
                self.playing = false;
                self.loaded = false;
                self.unload = false;
                self.canSendPlay = true;
			}
            zeQuery('a.cp_pl_item', self.$gallery).removeClass('current').removeClass('pause');
            if (typeof url != 'undefined') {

                var getPlaylistObject;
                if (self.go.args.group_by == true || self.go.args.group_by != 'off') {
                    //zeQuery('.ze_flexslider .slides > li').css({'width': self.go.args.item_w +'px'});
                    if (typeof cat == 'undefined') {
                        cat = self.currentCategory;
                    } else {
                        self.currentCategory = cat;
                    }
                    getPlaylistObject = zeQuery('.playlistContainer a.cp_pl_item[data-url="' + url + '"][data-cat="' + cat + '"]', self.$gallery);
                    /* animate to current element */
                    var carouselSlide = getPlaylistObject.parents('.ze_flexslider.carousel').data('flexslider');
                    if (carouselSlide && !self.isVisible(getPlaylistObject, 'horizontal'))
                        carouselSlide.flexAnimate(getPlaylistObject.parent().index());
                    /* end animation */

                    if (self.group_by_youtubelike){
                        zeQuery('.playlistContainer .ze_flexslider', self.$gallery).addClass("cp-hide");
                        getPlaylistObject.closest(".ze_flexslider").removeClass("cp-hide");
                        self.loadPlaylistThumbs();
                        self.onResize()
                    }

                    zeQuery(".mediaElement_categories_tab", self.$gallery).removeClass("active_category");
                    zeQuery(".mediaElement_categories_tab[data-category='" + cat + "']", self.$gallery).addClass("active_category");
                } else {
                    getPlaylistObject = zeQuery('.playlistContainer a.cp_pl_item[data-url="' + url + '"]', self.$gallery).last();
                }

                var carousel = getPlaylistObject.parents('.carousel');
                if (self.go.args.pagination_type == 'prev_next') {
                    var page = parseInt(carousel.parent().attr('data-page'));
                    zeQuery('.ze_categories_pagination  li[data-page="' + page + '"]', self.$gallery).click();
                }
                getPlaylistObject.addClass('current');
                poster_src = getPlaylistObject.attr('data-poster');
                video_src = url;
                // change metaInfo block;
                var data_cat = '', data_cat_value;
                if (zeQuery(getPlaylistObject).attr('data-cat')) {
                    data_cat_value = zeQuery(getPlaylistObject).attr('data-cat');
                    data_cat = 'data-cat="' + self.getBeautyNameOfTag(data_cat_value) + '"';
                }
                var infoHtml = '<div class="cp_pl_item" ' + data_cat + ' >' + zeQuery(getPlaylistObject).html()  + '</div>';
                zeQuery('.mediaElementInfo_container', self.$gallery).html(infoHtml);

                if(typeof self.go.args.url_changer != 'undefined' && self.go.args.url_changer && data_cat_value){
                    zeQuery('.mediaElement_categories_head__subtitle', self.$gallery).html(self.getBeautyNameOfTag(data_cat_value));
                    if(data_cat_value == 'no-tag'){
                        self.setHash('cat','');
                    }else{
                        self.setHash('cat',data_cat_value);
                    }
                }  


                if (!self.isVisible(getPlaylistObject)) {
                    zeQuery('.mediaElement_playlist', self.$gallery).animate({
                        scrollLeft: getPlaylistObject.outerWidth(true) * getPlaylistObject.index()
                    }, 500);
                }

            } else {
                if (self.go.args.group_by == true || self.go.args.group_by == 'on') {
                    zeQuery('.mejs-playlist li.current', self.$gallery).removeClass('current');
                    var getCorrectPlaylistElem = zeQuery('.mejs-playlist li[data-cat="' + self.currentCategory + '"]', self.$gallery).eq(zeQuery(el).parent().index());
                    zeQuery('.mejs-playlist li.current', self.$gallery).removeClass('current');
                    getCorrectPlaylistElem.addClass('current');
                } else {
                    zeQuery('.mejs-playlist li.current', self.$gallery).removeClass('current');
                    zeQuery('.mejs-playlist li', self.$gallery).eq(zeQuery(el).index()).addClass('current');
                }

                zeQuery(el).addClass('current');
                video_src = zeQuery(el).attr('data-url');

                video_cat = zeQuery(el).attr('data-cat');

                poster_src = zeQuery(el).attr('data-poster');
				dataOvverride = zeQuery(el).data('ovveride');
            }

            zeQuery('#mediaElementVideoContainer' + objID).removeClass("first-item-playing");
            zeQuery('#mediaElementVideoContainer' + objID).removeClass("last-item-playing");
            setTimeout(function(){
                if(zeQuery('.mejs-playlist li.current', self.$gallery).index() === 0){
                    zeQuery('#mediaElementVideoContainer' + objID).addClass("first-item-playing");
                } else if (zeQuery('.mejs-playlist li.current', self.$gallery).index() === zeQuery('.mejs-playlist li', self.$gallery).length - 1){
                    zeQuery('#mediaElementVideoContainer' + objID).addClass("last-item-playing")
                }
                if(zeQuery('.mejs-playlist li.current', self.$gallery).index() % 2 === 0){
                    self.$gallery.removeClass("mejs-playing-item-even").addClass("mejs-playing-item-odd");
                } else {
                    self.$gallery.removeClass("mejs-playing-item-odd").addClass("mejs-playing-item-even");
                }
            }, 10)
            


            zeQuery('.mejs-time-float', self.$gallery).hide();
            var timelineThumbPreview = zeQuery('#mediaElementVideoContainer' + objID + ' .time-rail-thumbnails .thumbImage.preview');
            timelineThumbPreview.addClass('thumbnails-loading-text');
            timelineThumbPreview.css('background', '#000000').text('Processing...');
            if( this.go.args.override_poster && poster_src){
                poster_src = poster_src.replace("&p=y", "").replace("&t=y", "");
            }else{
                poster_src = video_src;
            }
            if (zeQuery('.cp_pl_item.current', self.$gallery).attr('data-storage') == 'false') {
                self.timerPoster = poster_src + '&t=y';
            } else {
                self.timerPoster = poster_src + '&p=y';
            }
            var currentElementId = zeQuery('.cp_pl_item.current', self.$gallery).attr('id');
            zeQuery('.ze_tl_block ul', self.$gallery).hide().removeClass('active');
            zeQuery('.ze_tl_block ul[data-id="' + currentElementId + '"]', self.$gallery).show().addClass('active');
            self.playOnClick = true;


            var tmpD = self.sendDataCollector(video_src);
				
			self.$gallery.siblings(".mediaElement-top-bar").empty().html("<span class='mediaElement-top-bar-gallery-title'>" + (self.go.args.gallery_title ? self.go.args.gallery_title : "") + "</span><span>" + tmpD.item.title + "</span>");
			self.$gallery.siblings(".mediaElement-bottom-bar").empty().html("<div>" + (tmpD.item.description || tmpD.item.long_description) + "</div>"
				+ self.build_bottom_share_layer());

            if(document.createEvent ){
                var event = document.createEvent("HTMLEvents");
                event.initEvent("onclickevent", true, true);
                event.eventName = "onclickevent";
                if(self.go.args.netflix_popup){
                    if(zeQuery('#'+objID+'.netflix_popup').hasClass('netflix_popup_opened')){
                        zeQuery('video', self.$gallery)[0].dispatchEvent(event);
                    }
                }else{
                    zeQuery('video', self.$gallery)[0].dispatchEvent(event);
                }
                
            }

            if (self.player.media.pluginType == 'native' && dataOvverride) {
                var sendData = self.sendDataCollector(video_src);
				//self.player.setSrc(video_src);
				if((!zeQuery.isEmptyObject(sendData.item.versions) || sendData.item.content_real_type == "live")){
                    self.playHLS(zeQuery('#mediaElementVideo' + objID).get(0), sendData, notPlay ? false: true);
                } else {
                    self.go.onSkinEvent('video.load', sendData );
                    self.player.setSrc(video_src)
                }


				var content_url = self.getContentUrl(sendData.item);
                zeQuery('#mediaElementVideoContainer' + objID + ' video').data("currentplayingvideourl", content_url);
                var trackLength = zeQuery('#mediaElementVideoContainer' + objID + ' video track').length;
                if( (self.go.args.subtitle || self.go.args.subtitle_list) && trackLength > 0 ){
                    self.player.setTrack('none');
                    zeQuery('#mediaElementVideoContainer' + objID + ' .mejs-controls .mejs-captions-button .mejs-captions-selector li input[value="none"]').prop('checked', true);
                }
                
                if(!hideposter /* &&  !videoContainer.hasClass('fading') */)    
                    zeQuery('video', self.$gallery).attr('poster', poster_src);
                else
                    zeQuery('video', self.$gallery).attr('poster', "");
                if( !zeQuery('.cp_pl_item.current', self.$gallery).data('poster-ratio')){
                    var newImage = new Image();
                    newImage.onload = function(){
                        var ratio = this.width/this.height;
                        zeQuery('.cp_pl_item.current', self.$gallery).attr('data-poster-ratio', ratio);
                        if(ratio < 1){
                             zeQuery(self.$gallery).addClass("portraitPoster")
                        }

                    }
                    newImage.src = poster_src;
                }else {
                    if( zeQuery('.cp_pl_item.current', self.$gallery).data('poster-ratio') < 1 ){
                           zeQuery(self.$gallery).addClass("portraitPoster")
                    } else {
                           zeQuery(self.$gallery).removeClass("portraitPoster")
                    }
                }

                if (typeof self.session != "undefined") {
                  return true;
                }
                self.player.load();

                self.canSendPlay = true;


                //self.go.args.preventAutoPlayNextTrack is for prevent autoplay from outside
                if(!notPlay && !self.go.args.preventAutoPlayNextTrack){
                    setTimeout(function () {
                        if(self.player.media.currentSrc)
                            self.player.$media[0].play().catch(function(err){
                             });
                    }, 500);
                } else {
                    zeQuery(".cp-hidecontrols", self.$gallery).removeClass("cp-hidecontrols");
                    zeQuery(".mejs-overlay-play", self.$gallery).removeClass("cp-hide").show();
                }

            }else if(self.player.media.pluginType == 'native'){
				self.player.pause();
				if(zeQuery('#mediaElementVideoContainer' + objID+ ' .mejs-container').length){
					zeQuery('#mediaElementVideoContainer' + objID+ ' .mejs-container').prepend('<img class="imageHelper" src="'+video_src+'" style="max-width: 100%; max-height: 100%;  width: auto; height: auto;"/>')
					zeQuery(self.player.node).parents('.mejs-inner').hide();
				}else{
					zeQuery('#mediaElementVideoContainer' + objID).prepend('<img class="imageHelper" src="'+video_src+'" style="max-width: 100%; max-height: 100%;  width: auto; height: auto;"/>')
					zeQuery(self.player.node).hide();
				}

				//zeQuery(self.player.node).attr('src','');
				//zeQuery(self.player.node).attr('poster',video_src);

			} else {
                self.player.remove();
                /* agly trick to solve duration problem on flash fallback */
                var newVideoHtml = '<video crossorigin id="mediaElementVideo' + objID + '"  class="videoWorkaround" controls="controls" poster="' + poster_src + '" width="640" height="360"  style="height:100%;width:100%" preload="' + (self.go.args.fast_start ? "metadata" : "none") + '"  src="' + video_src + '" >';
                newVideoHtml += self.sourceHtml;
                newVideoHtml += '</video>';
                zeQuery('.mediaElementVideoContainer', self.$gallery).html(newVideoHtml);
                self.startMediaElement(self.v_ratio, self.getVideoCount(items));
                /*end trick*/
            }
           

        };

        this.elementInViewport = function (elem) {
            var $window = zeQuery(window);

            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();

            var elemTop = elem.offset().top;
            var elemBottom = elemTop + elem.height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        };
        this.isVisible = function (elem, type) {

            if(zeQuery(elem).length == 0 ) return false;

            var pos = zeQuery(elem).position(),
                    wX = zeQuery('.mediaElement_playlist', self.$gallery).position().left, wY = zeQuery('.mediaElement_playlist', self.$gallery).position().top,
                    wH = zeQuery('.mediaElement_playlist', self.$gallery).height(), wW = zeQuery('.mediaElement_playlist', self.$gallery).width() - 50,
                    oH = zeQuery(elem).height(), oW = zeQuery(elem).width();
            // partial visible
            if (type == 'horizontal') {
                if (((pos.left <= wX && pos.left + oW > wX) ||
                        (pos.left >= wX && pos.left <= wX + wW)))
                    return true;
                else // not visible
                    return false;
            } else {
                if (((pos.left <= wX && pos.left + oW > wX) ||
                        (pos.left >= wX && pos.left <= wX + wW)) &&
                        ((pos.top <= wY && pos.top + oH > wY) ||
                                (pos.top >= wY && pos.top <= wY + wH)))
                    return true;
                else // not visible
                    return false;
            }
        }
        this.onResize = function (disableFrameResize) {

            
            var that = this;
            var objID = this.go.loaderParams["_object"];

            if (zeQuery('#' + objID).width() < 640 && this.isMobile) {
                zeQuery('#' + objID).addClass('ze_mobileLayout');
            } else {
                zeQuery('#' + objID).removeClass('ze_mobileLayout');
            }

            var className = "";
            switch(true){
                case (zeQuery('#' + objID).width() <= 1000):
                    className = "gwS";
                    break;
                case (zeQuery('#' + objID).width() > 1000):
                    className = "gwL";
                    break;
            }


            switch(true){
                case (zeQuery('#' + objID).width() < 768):
                    className = "gsmobile";
                    break;
                case (zeQuery('#' + objID).width() >= 768 && zeQuery('#' + objID).width() <= 1024):
                    className = "gstablet";
                    break;
            }

            
            zeQuery('#' + objID).removeClass("gwS gwL");
            zeQuery('#' + objID).removeClass("gsmobile");
            zeQuery('#' + objID).removeClass("gstablet")
            zeQuery('#' + objID).addClass(className);
			
            //netflix_popup workaround for netflix_gallery_popup to set player to video size
            if(!zeQuery('.mediaElementVideoContainer:not(".ze_fixedPosition_helper")', self.$gallery).is(':visible')){
                return ;
            }
            zeQuery('#' + objID+' .vSizeWorkaround').remove();            
			var w1 = parseInt(zeQuery('.mediaElementVideoContainer:not(".ze_fixedPosition_helper")', self.$gallery).width());
            var h1 = Math.ceil(w1 / that.v_ratio);
			if(that.go.args.always_on_top &&  that.playerIsFloating  && that.go.args.always_on_top_size_h < h1){
				h1 = that.go.args.always_on_top_size_h;
			}
			
            var setPercent = false;
            if(that.go.args.cincopaTV == true ){
                if(that.go.args.cincopaTV == true && !zeQuery('.netflix_popup').hasClass('gsmobile')){
                    w1 = w1 * 0.7;
                    h1 = h1 * 0.7;
                }

                zeQuery('#' + objID ).append('<style class="vSizeWorkaround">\
                div#'+objID+'.netflix_popup[class*=status-]:not(.cp-fullscreen-entered) .mejs-container,div#'+objID+'.netflix_popup.gsmobile[class*=status-]:not(.cp-fullscreen-entered) .mejs-container,div#'+objID+'.netflix_popup.gstablet[class*=status-]:not(.cp-fullscreen-entered) .mejs-container{width:'+ ( setPercent ?  '100%' : w1 +'px') +' !important;height:'+h1+'px !important;}\
                div#'+objID+'.netflix_popup:not(.cp-fullscreen-entered) .netflix_extra_container {width:'+ ( setPercent ?  '100%' : w1 +'px')  +' !important;}\
                </style>');
            }
			if( typeof that.go.args.netflix_popup != 'undefined' && that.go.args.netflix_popup === true && that.go.args.cincopaTV == false){
				/*calculate height not based of gallery content but based on window; */
				/*h1 = Math.min(h1,zeQuery('.mejs-container', self.$gallery).height());   //old code */
				var wnd = self.getWindow(), nh1; 
				if( wnd.innerHeight >  wnd.innerWidth ){
					nh1 = Math.min(h1,zeQuery('.mejs-container', self.$gallery).height()); 
					w1 = nh1 * parseFloat(zeQuery('.cp_pl_item.current', self.$gallery).data('ratio'));
				}else{
                    nh1 = wnd.innerHeight - zeQuery('.netflix_popup_current_title').height() - parseInt(zeQuery('.mediaElementVideoContainer').css('padding-top')); // minus next video block height 90%
					if(nh1 < 0){
						nh1 = wnd.innerHeight* 0.95;
					}else{
						nh1 = Math.min(nh1, wnd.innerHeight* 0.95);
					}					
					w1 = nh1 * parseFloat(zeQuery('.cp_pl_item.current', self.$gallery).data('ratio'));						
					/*again recalculate based on width*/
					if(w1 > wnd.innerWidth ){
						nh1 = Math.min(h1,zeQuery('.mejs-container', self.$gallery).height()); 
						w1 = nh1 * parseFloat(zeQuery('.cp_pl_item.current', self.$gallery).data('ratio'));
					}
					h1 = nh1;					
				}	
				if( zeQuery('.mediaElementVideoContainer',self.$gallery).width() < w1){
					setPercent = true;
				}				
			}else if( typeof that.go.args.allow_lightbox != 'undefined' && that.go.args.allow_lightbox !== 'no' && zeQuery(self.$gallery).closest('.cp_lightbox_wrap').is(':visible')){
                
                var wnd = self.getWindow(), nh1; 
                var heightForCompare;
                var widthForCompare;
                if(that.go.args.allow_lightbox_fullscreen){
                    heightForCompare = wnd.innerHeight;
                    widthForCompare = wnd.innerWidth;                   
                }else{
                    heightForCompare = zeQuery(self.$gallery).closest('.cp_lightbox_wrap').outerHeight();
                    widthForCompare = zeQuery(self.$gallery).closest('.cp_lightbox_wrap').outerWidth();
                }
				if( heightForCompare >  widthForCompare ){
					nh1 = Math.min(h1,zeQuery('.mejs-container', self.$gallery).height()); 
					w1 = nh1 * parseFloat(zeQuery('.cp_pl_item.current', self.$gallery).data('ratio'));
				}else{
                    nh1 = heightForCompare; /* we can minus some corrections if will be needed later */
                    if(nh1 < 0){
						nh1 = heightForCompare* 0.95;
					}else{
						nh1 = Math.min(nh1, heightForCompare* 0.95);
                    }
                    w1 = nh1 * parseFloat(zeQuery('.cp_pl_item.current', self.$gallery).data('ratio'));				
					/*again recalculate based on width*/
					if(w1 > widthForCompare ){
                        nh1 = Math.min(h1,zeQuery('.mejs-container', self.$gallery).height());
						w1 = nh1 * parseFloat(zeQuery('.cp_pl_item.current', self.$gallery).data('ratio'));
                    }
                  
					h1 = Math.min(nh1,h1);					
                }
				if( zeQuery('.mediaElementVideoContainer',self.$gallery).width() < w1){
					setPercent = true;
                }	
		
			}
			
            if (!zeQuery('#' + objID + ' .mejs-container').hasClass('mejs-container-fullscreen')) {
                try {
					/*netflix_popup workaround for netflix_gallery_popup to set player to video size*/
					if( typeof that.go.args.netflix_popup != 'undefined' && that.go.args.netflix_popup === true){

						zeQuery('#' + objID ).append('<style class="vSizeWorkaround">\
														div#'+objID+'.netflix_popup[class*=status-]:not(.cp-fullscreen-entered) .mejs-container,div#'+objID+'.netflix_popup.gsmobile[class*=status-]:not(.cp-fullscreen-entered) .mejs-container,div#'+objID+'.netflix_popup.gstablet[class*=status-]:not(.cp-fullscreen-entered) .mejs-container{width:'+ ( setPercent ?  '100%' : w1 +'px') +' !important;height:'+h1+'px !important;}\
														div#'+objID+'.netflix_popup:not(.cp-fullscreen-entered) .netflix_extra_container {width:'+ ( setPercent ?  '100%' : w1 +'px')  +' !important;}\
													</style>');
					}/*else if( typeof that.go.args.allow_lightbox != 'undefined' && that.go.args.allow_lightbox !== 'no'){
						zeQuery('#' + objID ).append('<style class="vSizeWorkaround">\
														div#'+objID+'[class*=status-] .mejs-container,div#'+objID+'.gsmobile[class*=status-] .mejs-container,div#'+objID+'.gstablet[class*=status-] .mejs-container{width:'+ ( setPercent ?  '100%' : w1 +'px') +' !important;height:'+h1+'px !important;}\
													</style>');
                    }*/	
                    that.player.setPlayerSize(w1, h1);
                } catch (ex) {
                }

                try {
                    that.player.media.setVideoSize(w1, h1);
                } catch (ex) {
                }
                zeQuery('.mediaElementInfo_container .cp_pl_item', self.$gallery).css('height', h1)
            }

            if (that.go.args.iframe && !disableFrameResize) {
                that.frameResize();
            }

            that.resizePlayer();

            /* resize for grouping*/
            if (this.go.args.pagination_type == 'prev_next') {
                zeQuery('.ze_grouping', this.$gallery).width(zeQuery('.mediaElement_playlist', this.$gallery).width());
            }
            var controlsH = zeQuery('.mejs-container .mejs-controls',this.$gallery).height()+5; 
            if(zeQuery('#' + objID).width() < 1000){
                zeQuery('.mejs-container .mejs-logo-button',this.$gallery).css({'width': this.go.args.watermark_size+'%','height': 'auto', 'max-width': "100%",'bottom':controlsH+"px",'max-width':"200px"});
            }else{
                zeQuery('.mejs-container .mejs-logo-button',this.$gallery).css({'width': this.go.args.watermark_size+'%','height': 'auto', 'max-width': "100%",'bottom':controlsH+"px",'max-width':"200px"});
            }
            // if(zeQuery("#" + objID).hasClass("cp_form_opened cp_form_opened_transition")){
            //     that.resizeForm();
            // }

            
            if(this.go.args.always_on_top){
                this.resizeAlwaysOnTop();
            }
            
            this.loadPlaylistThumbs();

            zeQuery('.ze_flexslider',this.$gallery).each(function(){
                var w = zeQuery(this).width();
                var itemMargin = parseInt(zeQuery(this).find("ul.slides>li").first().css("margin-right"));
                var itemsW = zeQuery(this).find("ul.slides>li").first().width() + itemMargin;
                var itemCount = zeQuery(this).find("ul.slides>li").length;
                if((itemCount * itemsW) - itemMargin > w){
                    zeQuery(this).removeClass("ze_flexslider_hide_arrows")
                } else {
                    zeQuery(this).addClass("ze_flexslider_hide_arrows")
                }
            })

            if(zeQuery(".playlistContainer", this.$gallery).get(0) && zeQuery(".mediaElement_playlist", this.$gallery).get(0)){
                if(zeQuery(".mediaElement_playlist", this.$gallery).get(0).scrollWidth < zeQuery(".playlistContainer", this.$gallery).get(0).scrollWidth){
                    zeQuery(".mediaElement_playlist", this.$gallery).addClass("mediaElement_playlist_with_scroll")
                } else {
                    zeQuery(".mediaElement_playlist", this.$gallery).removeClass("mediaElement_playlist_with_scroll")
                }
            }
            if(this.go.args.course_progress) {
                this.playlistHeight()


            }
            var controlsHeight = zeQuery('.mejs-controls',this.$gallery).height();	
            zeQuery('.mejs-controls-audio-helper',self.$gallery).css("height" ,controlsHeight);

        }

        this.loadPlaylistThumbs = function(){
            zeQuery(".mustThumbLoad", this.$gallery).each(function(){
                if(!zeQuery(this).hasClass("mustThumbLoad")) return true;
                if(zeQuery(this).is(":visible")){				
					var src = zeQuery(this).attr("data-image-src");	
					zeQuery(this).attr("src", src)
									.on('load', function(){
										var ratio = this.naturalWidth/this.naturalHeight;
										if( ratio < 1 ) {
											zeQuery(this).addClass('cp-image-portrait')
										}else{
											zeQuery(this).addClass('cp-image-landscape')
										}
									});
					
                    zeQuery(this).attr("src", zeQuery(this).attr("data-image-src"));
                    zeQuery(this).removeClass("mustThumbLoad");
                }
            })
        }

        this.getBeautyNameOfTag = function(tag){
            var group_video_tag = this.go.args.group_video_tag || "";
            var beauty = tag;
            var splitted = group_video_tag.split(",");
            for(var i = 0; i < splitted.length; i++){
                if(splitted[i].split("(")[0] === tag && splitted[i].split("(")[1]){
                    beauty = splitted[i].split("(")[1].replace(")","");
                    break;
                }
            }
            if(beauty === tag && beauty === "no-tag"){
                beauty = "untagged";
            }
            return beauty;
        }

        this.resizeForm = function() {
            var that = this;
            var objID = this.go.loaderParams["_object"];
            var overlay_div = zeQuery("#" + objID + ".cp_form_opened #ze_htmloverlay_placeholder_" + objID + " .ze_overlay_container_div_content");
            if(!overlay_div.get(0)) return;

            var w1 = parseInt(zeQuery('.mediaElementVideoContainer:not(".ze_fixedPosition_helper")', self.$gallery).width());
            var h1 = Math.ceil(w1 / that.v_ratio);
            if (that.go.args.always_on_top && that.playerIsFloating && that.go.args.always_on_top_size_h < h1) {
                h1 = that.go.args.always_on_top_size_h;
            }


            h1 = Math.max(overlay_div.get(0).scrollHeight, h1);

            if (!zeQuery('#' + objID + ' .mejs-container').hasClass('mejs-container-fullscreen')) {
                try {
                    that.player.setPlayerSize(w1, h1);
                    that.player.setPlayerSize(w1, h1);
                } catch (ex) {
                }

                try {
                    that.player.media.setVideoSize(w1, h1);
                } catch (ex) {
                }
                zeQuery('.mediaElementInfo_container .cp_pl_item', self.$gallery).css('height', h1)
            }
        }

        this.startMediaElement = function (firstRatio, length) {
            var objID = this.go.loaderParams["_object"];
            var that = this;
            var mediaElement_futures = [];
            mediaElement_futures.push('playlistfeature');
           mediaElement_futures.push('eventscontrol');
            
            if(that.go.args.vast)
                mediaElement_futures.push('vast');
            
            var order_buttons = that.go.args.controls_order.split(",");
            for(var i = 0; i< order_buttons.length; i++){
                order_buttons[i] = order_buttons[i].trim()
                if(order_buttons[i] == 'prevtrack'){
                    if (that.go.args.prev_button && length > 1) {
                        mediaElement_futures.push('prevtrack')
                    }
                } else if(order_buttons[i] == 'playpause') {
                    if (that.go.args.play_button) {
                        mediaElement_futures.push('playpause');
                    }
                } else if(order_buttons[i] == 'nexttrack') {
                      if (that.go.args.next_button && length > 1) {
                          mediaElement_futures.push('nexttrack')
                      }
                  } else if(order_buttons[i] == 'loop') {
                      if (that.go.args.loop_button) {
                          mediaElement_futures.push('loopbutton')
                      }
                  } else if(order_buttons[i] == 'shuffle') {
                      if (that.go.args.shuffle_button) {
                          mediaElement_futures.push('shuffle');
                      }
                  } else if(order_buttons[i] == 'playlist') {
                      if (that.go.args.playlist_button && that.go.args.playlist_show) {
                          mediaElement_futures.push('playlist')
                      }
                  } else if(order_buttons[i] == 'progress') {
                        if (that.go.args.seekingBar) {
                            mediaElement_futures.push('progress');
                        }
                  } else if(order_buttons[i] == 'time') {
                      if (that.go.args.timeControl) {
                          mediaElement_futures.push('current', 'duration');
                      }
                  } else if(order_buttons[i] == 'volume') {
                        if (that.go.args.volume_slider) {
                            mediaElement_futures.push('volume');
                        }
                 } else if(order_buttons[i] == 'fullscreen') {
                      if (that.go.args.fullscreen_button) {
                          mediaElement_futures.push('fullscreen');
                      }
                 } else if(order_buttons[i] == 'logo') {
                     if (that.go.args.watermark_on_off) {
                          mediaElement_futures.push('logo');
                     }
               } else if(order_buttons[i] == 'player_logo') {
                   if (that.go.args.player_watermark != "" && eval(that.go.args.player_watermark_on_off)) {
                       mediaElement_futures.push('player_logo');
                   }
               } else if(order_buttons[i] == 'chromecast_logo') {
                  if (typeof chrome !== "undefined") {
                     if (typeof chrome.cast !== "undefined") {
                         mediaElement_futures.push('chromecast_logo');
                      }
                  }
               } 
            }

           if(that.isLive)
                mediaElement_futures.push('liveButton');

            if(that.go.args.audio_jump){
                mediaElement_futures.push('audio_jump');
            }
           mediaElement_futures.push('annotation');
          if(that.go.args.css_version == '1.1'){
                if(that.go.args.chapter){
                     mediaElement_futures.push('chapter');
                }
                if(that.go.args.gear_button){
                     mediaElement_futures.push('gear');
                }
                if(that.go.args.download_button){
                    mediaElement_futures.push('download');
               }

          } else {
                if(that.go.args.speed){
                     mediaElement_futures.push('speed');
                }
          }
          

          if(that.go.args.storyboard != 'off'){
                mediaElement_futures.push('storyboard');
            }
         if(that.go.args.videoTrim){
             mediaElement_futures.push('videotrim');
         }

          if( that.go.args.subtitle || that.go.args.subtitle_list){
              mediaElement_futures.push('trackshelper');
              mediaElement_futures.push('tracks');
              mediaElement_futures.push('captions_size');
          }
  

          
	     if(that.go.args.transcript_search == true || that.go.args.transcript_search == 'true'){
                mediaElement_futures.push('transcript_search');
            }

            if(false && that.go.args.upnext){
                mediaElement_futures.push('upnext');
            }
            

            var w = parseInt(zeQuery('.mediaElementVideoContainer', self.$gallery).width());
            var h = parseInt(zeQuery('.mediaElementVideoContainer', self.$gallery).width() / firstRatio);
            that.v_ratio = firstRatio;
            var resizeTimer;
            var winSelector = that.getWindow();

            var screenHeight = winSelector.innerHeight;
            if(h > screenHeight*80/100 && firstRatio < 1){
                that.v_ratio = 16/9;
                h = parseInt(w / that.v_ratio); 
                if(that.videoCount  == 1 && !that.go.args.netflix_popup && !that.go.args.cincopaTV){ /* no need to do reverse calculation for netflix and cincopa tv. they already have similar functinality*/
                    h = screenHeight*0.8;
                    w = parseInt(h * firstRatio); 
                    zeQuery('.mediaElementVideoContainer', self.$gallery).css('max-width',w);
                    zeQuery('.mediaElementVideoContainer', self.$gallery).addClass('singlePortraitVideo');
                    that.v_ratio = w/h;
                }
            }

            forceNativeControls = true;
            playlistAtEnd = false;
            if (typeof that.go.args.youtube_like != 'undefined') {
                if (that.go.args.youtube_like != 'no' && that.isIOS == true) {
                    forceNativeControls = false;
                }
                if (that.go.args.youtube_like != 'no') {
                    playlistAtEnd = true;
                }
            }
            
			if (this.go.args.html_overlay_type != 'none' || !this.go.args.forceNativeVideo || this.go.args.subtitle || this.go.args.subtitle_list || this.useMailService || this.annotationExists()) {
                forceNativeControls = false;
            }
            var mode = '';
            if(this.go.args.vast_useFlash == true){
                mode = 'auto_plugin';
            } else {
                mode = 'auto';
            }
            mediaElement_futures.push('controlscontrol');
            mediaElement_futures.push('adjustplayerfontsize');
            if(this.go.args.newMobileControls == true || this.go.args.newMobileControls == 'true') {
                mediaElement_futures.push('mobilevideocontrols');
            }
            mediaElement_futures.push('smoothvideochange');
            mediaElement_futures.push('cp_media_helper');
            mediaElement_futures.push('videodecrypt');

			var mediaElement_options = {
                enablePluginSmoothing: true,
                enablePseudoStreaming: true,
                pluginPath: that.go.skinPath + 'js/',
                pauseOtherPlayers: that.go.args.pauseOtherPlayers ? true : false,
                mode: mode,
                // force iPad's native controls
                iPadUseNativeControls: forceNativeControls,
                // force iPhone's native controls
                iPhoneUseNativeControls: forceNativeControls,
                // force Android's native controls
                AndroidUseNativeControls: forceNativeControls,
                defaultVideoWidth: w,
                defaultVideoHeight: h,
                videoWidth: w,
                // if set, overrides <video height>
                videoHeight: h,
                // the order of controls you want on the control bar (and other plugins below)
                features: mediaElement_futures, //['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'loop', 'shuffle', 'playlist', 'current', 'progress', 'duration', 'volume'],
                // Hide controls when playing and mouse is not over the video
                alwaysShowControls: !that.go.args.controlbar_autohide,
                //alwaysShowControls: true,
                skin: that,
                vastAdTagUrl: that.go.args.vast,
               // vastAdTagUrl:'http://mediaelementjs.com/media/minoto-vast.xml',
                defaultSeekForwardInterval : function(media) {
                    return 5;
                },
                defaultSeekBackwardInterval : function(media) {
                    return 5;
                },
                shuffle: that.go.args.shuffle,
                playlist: (that.go.args.inline_plist && that.go.args.playlist_show),
                loop: that.go.args.loop_button,
                playlistposition: 'bottom',
                galleryId: objID,
                skinObject:that,
                dataCollector: 'currentplayingvideourl',
                playlistAtEnd: playlistAtEnd,
                translationSelector: true,
                startLanguage: 'en',
                autoRewind: false,
				css_version:that.go.args.css_version ? that.go.args.css_version : '',
                logo: {text: 'Watermark', img: that.go.args.watermark, position: that.go.args.watermark_position, link: that.go.args.watermark_link_enable === true || that.go.args.watermark_link_enable === 'true' ? that.go.args.watermark_link: "", new_page: that.go.args.new_page, iframe: that.go.args.iframe},
                player_logo: {text: 'Player Watermark', img: that.go.args.player_watermark, on_off: that.go.args.player_watermark_on_off, link: that.go.args.player_watermark_link_enable === true || that.go.args.player_watermark_link_enable === 'true'? that.go.args.player_watermark_link: "", new_page: that.go.args.player_watermark_new_page, iframe: that.go.args.iframe},
                chromecast_logo: {text: 'ChromeCast', img: that.go.skinPath + 'css/images/chromecast_btn.png'},
                floatTimeAlways:true,
                vastpreroll:that.go.args.vastpreroll,
				success: function (mediaElement, domObject, mElem) {
					
					if( self.videoThumbnail){
						zeQuery(".mejs-poster", self.$gallery).append(self.videoThumbnail.$video);
						zeQuery(".mejs-poster", self.$gallery).append(self.videoThumbnail.$unmuteBtn);						
					}
					
				
					if( zeQuery('.mediaElementInfo_container', self.$gallery).length){
						var mediaElementInfoClone = zeQuery('.mediaElementInfo_container', self.$gallery).clone();
						mediaElementInfoClone.appendTo(zeQuery(".mediaElementVideoContainer ", self.$gallery)).addClass('mediaElement_video_info');
						//trick to add display none important as on many templates there is used important block
						var videoInfoStyle = 'div#'+objID+' .mediaElementInfo_container.mediaElement_video_info{display:none !important;}';
						zeQuery('#'+objID+' style').prepend(videoInfoStyle);
					}
					
					
                    if(parseInt(zeQuery('.mejs-controls', self.$gallery).css("padding")) != 0){
                        zeQuery('.mejs-controls', self.$gallery).addClass("fixControls");
                    }
                    zeQuery('.mejs-overlay-button', self.$gallery).addClass("mejs-overlay-button-hidden");

                    //if(!that.isMobile){
                        zeQuery('.mejs-container', self.$gallery).addClass("fullVideoStyle");
                    //}

                    if(zeQuery('#mediaElement' + objID+ ' .playlistContainer .current').data('ovveride') == false){
                            if(zeQuery('#mediaElementVideoContainer' + objID+ ' .mejs-container').length){

                            zeQuery('#mediaElementVideoContainer' + objID+ ' .mejs-container').prepend('<img class="imageHelper" src="'+zeQuery('#mediaElement' + objID+ ' .playlistContainer .current').data('url')+'" style="max-width: 100%; max-height: 100%;  width: auto; height: auto;"/>')
                            zeQuery(domObject).parents('.mejs-inner').hide();
                            }else{
                                    zeQuery('#mediaElementVideoContainer' + objID).prepend('<img class="imageHelper" src="'+zeQuery('#mediaElement' + objID+ ' .playlistContainer .current').data('url')+'" style="max-width: 100%; max-height: 100%;  width: auto; height: auto;"/>')
                                    zeQuery(domObject).hide();
                            }

                    }

                   

                    mElem.container
                        .bind('controlsshown', function () {
                            mElem.container.removeClass('mejs-hovered');

                        })
                        .bind('controlshidden', function () {
                            mElem.container.addClass('mejs-hovered');
                        });

                    if(that.go.args.share || that.go.args.download_button){
                        var share_block = zeQuery("<div>").addClass("share-layer-wrap");
                        if(that.go.args.share){
                            share_block.append(zeQuery("<div>").addClass("share-button"))
                        }

                        zeQuery('#mediaElementVideoContainer' + objID).find(".mejs-layers").append(share_block);
                    }

                    // call player resize for IOS
                    zeQuery('.mejs-container', self.$gallery).on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(){                      
                       if ( that.isIOS != true) return true;
                       if(!that.currentPlayerHeight) that.currentPlayerHeight = zeQuery('#mediaElementVideo' + objID).height();


                       if(that.currentPlayerHeight && that.currentPlayerHeight <= zeQuery('#mediaElementVideo' + objID).height()){
                           that.changeLevel();
                           that.currentPlayerHeight = zeQuery('#mediaElementVideo' + objID).height();
                       }
                    });
                    
                
                    if (that.go.args.subtitle || that.go.args.subtitle_list){

                        /* select correct subtitle before play */
                        if(zeQuery('a.cp_pl_item.current', self.$gallery).length){
                            that.findCurrentSubtitle( zeQuery('a.cp_pl_item.current', self.$gallery).data('index') , that.currentCategory);
                        }else{
                            that.findCurrentSubtitle( zeQuery('a.cp_pl_item:first', self.$gallery).data('index') , that.currentCategory);
                        }
                    }
                    if (!that.go.args.subtitle){
                        zeQuery(".mejs-captions-button", self.$gallery).addClass("mejs-captions-button-hidden")
                    }
                    if(self.userInteraction == true && that.isMobile && self.go.args.autostart != "muted"){
                        mediaElement.muted = false;
                    }else if(self.go.args.autostart === true && that.isMobile || self.go.args.autostart === "muted"){
                        var unmuteBtn = zeQuery("<div>").addClass("unmute-button");
                        unmuteBtn.html("<div class='unmute-button-speaker'><span></span></div><span>" + (that.isMobile ? "Tap for sound" : "Click for sound") +"</span>");
                        unmuteBtn.on("click", function(){
                            if(mediaElement.muted) {
                                mediaElement.muted = false;
                            }
                            unmuteBtn.remove();
                        })
                        zeQuery(".mejs-layers", self.$gallery).append(unmuteBtn)
                    }

                    

                    that.go.playerAPI = {
                        goTo: function(index) {


                                var objID = that.go.loaderParams["_object"];


                                    var isNumber = false;
                                    if(isNaN(index) == false){
                                        index = parseInt(index) - 1;
                                        isNumber = true;
                                    }
                                    
                                if(isNumber) {
                                    if(zeQuery('#'+objID+' .cp_pl_item[data-share ='+ index +']').length){							
                                        zeQuery('#'+objID+' .cp_pl_item[data-share ='+ index +']')[0].click(); 
                                    }else if (zeQuery('#'+objID+' .cp_pl_item[data-index ='+ index +']').length) {
                                        zeQuery('#'+objID+' .cp_pl_item[data-index ='+ index +']')[0].click();
                                    }
                                }else{
                                    if(zeQuery('#'+objID+' .cp_pl_item[data-rid ='+ index +']').length){							
                                        zeQuery('#'+objID+' .cp_pl_item[data-rid ='+ index +']')[0].click(); 
                                    }
                                }
                        },
                        play:function(){
                            mediaElement.play().catch(function(err){ });
                        },
                        pause:function(){
                            mediaElement.pause();
                        },
                        setCurrentTime:function(time){
                            zeQuery('.mejs-poster', self.$gallery).hide();
                            mediaElement.setCurrentTime(time);
                        },
                        duration: function(){
                            return mediaElement.duration
                        },
                        currentTime: function(){
                            return mediaElement.currentTime
                        },
                        isPaused:function(){
                            return mediaElement.paused;
                        },
                        enterFullScreen: function(){
                            var onfullscreenerror =  function(e){
                                that.go.playerAPI.enterFullScreen.fail = true;
                                that.player.exitFullScreen();
                                if(!that.go.playerAPI.enterFullScreen.click){
                                    bindClickEventForFullScreen();
                                }
                            }
                            if(!that.go.playerAPI.enterFullScreen.binded){
                                document.addEventListener('fullscreenerror', onfullscreenerror );
                                document.addEventListener('mozfullscreenerror', onfullscreenerror );
                                document.addEventListener('webkitfullscreenerror', onfullscreenerror );
                                that.go.playerAPI.enterFullScreen.binded = true;
                            }

                            var bindClickEventForFullScreen = function () {
                                zeQuery("#" + that.go.loaderParams["_object"]).find(".mejs-overlay-button").on("click", function(){
                                    if(that.go.playerAPI.enterFullScreen.fail) {
                                        that.player.enterFullScreen();
                                    }
                                    that.go.playerAPI.enterFullScreen.click = true;
                                })
                            }

                            that.player.enterFullScreen()
                        },

                        exitFullScreen: function(){
                            that.go.playerAPI.enterFullScreen.fail = false;
                            if(that.isIOS){
                                try{
                                    mediaElement.webkitExitFullscreen();
                                }catch(ex){
                                    console.log(ex);
                                }                                
                            }else{
                                that.player.exitFullScreen();
                            }                            
                        },
                        isFullScreen:function(){
                            if(that.isIOS){
                                return mediaElement.webkitDisplayingFullscreen;
                            }
                            return that.player.isFullScreen;
                        },
                        playNext: function(){
                            that.player.playNextTrack(that.player, true);
                        },

                        playPrev: function(){
                            that.player.playPrevTrack(that.player);
                        },

                        setVolume: function(volume){
                            volume = parseInt(volume) / 100;
                            volume = volume > 1 ? 1 : volume;
                            mediaElement.setVolume(volume);
                        },

                        stopVideo: function(){
                            that.player && that.player.$media[0].stop();
                        },

                        getPlayerContainer: function(){
                            return that.player.container && that.player.container.get(0);
                        },

                        getLayersContainer: function(){
                            return that.player.layers && that.player.layers.get(0);
                        },

                        getControlsContainer: function(){
                            return that.player.controls && that.player.controls.get(0);
                        },

                        getVideoElement: function(){
                            return that.player.container && that.player.container.find("video").get(0);
                        },

                        hideControls: function(){
                            that.player.container && that.player.container.addClass("cp_hide_all_controls");
                        },

                        showControls: function(){
                            that.player.container && that.player.container.removeClass("cp_hide_all_controls");
                        },

                        addLayer: function(name , html){
                            if(!name || !that.player.layers) return;
                            if(that.player.layers.find("." + name +"-layer").length) return;
                            var layer = zeQuery('<div>').addClass(name +"-layer");
                            if(html){
                                if(html instanceof HTMLElement){
                                    layer.html(zeQuery(html))
                                } else {
                                    layer.html(html)
                                }
                            }
                            that.player.layers && that.player.layers.append(layer);
                        },

                        removeLayer: function(name){
                            if(!name || !that.player.layers) return;
                            that.player.layers.find("." + name +"-layer").remove();
                        },

                        getLayer: function(name){
                            if(!name || !that.player.layers) return;
                            return that.player.layers.find("." + name +"-layer").get(0);
                        },

                        getPlaylistItems: function(name){
                            return  zeQuery("#" + that.go.loaderParams["_object"]).find(".playlistContainer .cp_pl_item").toArray()
                        },                        
                        toggleMute: function(command) {
                          var videoElement = that.go.playerAPI.getVideoElement();
                          if (command === "mute") {
                            videoElement.muted = true;
                          } else {
                            videoElement.muted = false;
                          }
                        },                        
                        lastSubtitle: "",                        
                        subtitleToggle: function(command) {

                          var controlsContainer = that.go.playerAPI.getControlsContainer();
                          var subtitleListContainer = controlsContainer.getElementsByClassName("mejs-captions-list");
                          if (command === "on") {
                            if (!zeQuery(subtitleListContainer).find('input[value="none"]').is(":checked")) {
                              return false;
                            }
                            var firstSubtitle = zeQuery(subtitleListContainer).find('input').first();
                              if (firstSubtitle.length && firstSubtitle.parent().attr("data-type")) {
                                firstSubtitle = firstSubtitle.parent().attr("data-type").replace("subtitle-", "")
                              } else {
                                firstSubtitle = '';
                              }
                            that.go.playerAPI.selectSubtitle(that.go.playerAPI.lastSubtitle || firstSubtitle);
                          } else if (command === "off") {
                             that.go.playerAPI.selectSubtitle("none");
                          }
                        },
                        
                        selectSubtitle: function(language) {
                          var controlsContainer = that.go.playerAPI.getControlsContainer();
                          var subtitleListContainer = controlsContainer.getElementsByClassName("mejs-captions-list");
                          var subtitleForLanguage;
                          if (language === 'none'){
                            subtitleForLanguage = zeQuery(subtitleListContainer).find('input[value="none"]').parent();
                          } else{
                            subtitleForLanguage = zeQuery(subtitleListContainer).find('li[data-type = "subtitle-'+language+'"]');
                          }

                      
                          if(subtitleForLanguage.length && subtitleForLanguage.find('label').length){
                            var selectedSubtitle = zeQuery(subtitleListContainer).find('input:checked');

                            if (selectedSubtitle.length && selectedSubtitle.parent().attr("data-type")) {
                              selectedSubtitle = selectedSubtitle.parent().attr("data-type").replace("subtitle-", "")
                            } else {
                              selectedSubtitle = '';
                            }
                            that.go.playerAPI.lastSubtitle = selectedSubtitle;
                            subtitleForLanguage.find('label')[0].click()
                          }
                        },
                        goToChapter:function(index){
                            if(index > 0){
                                index--;
                            }
                            var chapterEl;                           
                            if(that.player.container){
                                chapterEl = that.player.container.find(".mejs-chapters-list li").eq(index);
                            }
                            chapterEl.length && chapterEl.click();
                        }
                    }

               

                    if (that.go.args.iframe)
                        that.frameResize();
//                    if (!that.isMobile)
//                        mediaElement.load();
                    var clickedTime = null, videoHasPlayed = false;
                    zeQuery('.ze_tl_block  a.tl_item', self.$gallery).on('click', function () {

                        var tlSecond = parseInt(zeQuery(this).attr('data-time'));
                        clickedTime = tlSecond;
                        videoHasPlayed = false;
                        if (self.player.media.paused) {
                            mediaElement.play().catch(function(err){ });
                        }
                    });
                    var videoSrc = zeQuery('.cp_pl_item[data-url]', self.$gallery).first().attr("data-url");
                    var sendedData = that.sendDataCollector(videoSrc);
                    that.player = mElem;
                    if(!playlistAtEnd || that.go.args.autostart){
                        if(!that.advertising){
                            if(!zeQuery.isEmptyObject(sendedData.item.versions) || sendedData.item.content_real_type == "live"){
								if(that.videoThumbnail && that.go.args.allow_lightbox == 'no'){
                                    /* for now timer commited to avoid mp4 loading twice, but this cause to load m3u8 2 time, because of videothumbnail*/
                                        // that.plsTimerObject = setTimeout(function(){
                                            that.playHLS(mediaElement, sendedData, that.go.args.autostart === true || (that.go.args.autostart === "desktop_only" && !that.isMobile) || that.go.args.autostart === "muted");
                                        // },600);
                                }else{
                                    that.playHLS(mediaElement, sendedData, that.go.args.autostart === true || (that.go.args.autostart === "desktop_only" && !that.isMobile) || that.go.args.autostart === "muted");
                                }
                            }else
                                that.go.onSkinEvent('video.load', sendedData );
                        }
                        that.canSendPlay = true;
                    }


                    if(that.go.args.embed_code){
                        var embed_block = '<p class="share-title">Embed</p><p class="share-link embed-link"></p>';
                        zeQuery('#mediaElementVideoContainer' + objID).find(".share-icons").after(embed_block)
                    }


                    zeQuery('.ze_tl_block ul li a', self.$gallery).removeClass('selected');
                    /* zeQuery(mElem.fullscreenBtn).on('click', function (e) {
                        var current_url = zeQuery(mediaElement).data("currentplayingvideourl") || mediaElement.src;

						var sendData = that.sendDataCollector(current_url);

						if (mElem.isFullScreen) {
                                that.go.onSkinEvent('video.fullscreenenter', sendData);
                        } else {
                                that.go.onSkinEvent('video.fullscreenexit', sendData);
                        }

                    });*. /* code moved to universal plugin */


                    that.adjustControls();


                    var oldSecValue = -1;
                    mediaElement.addEventListener('timeupdate', function (e) {
                        if(self.advertising) return;

                        if(self.isLive) self.setStreamStoppedTimer();

                        var activeTlBlock = zeQuery('.ze_tl_block ul.active', self.$gallery),
                        ct = ~~mediaElement.currentTime;
                        var allChapters = zeQuery('.mejs-chapters-list li');
                        allChapters.each(function(i,chapter){
                            var time = zeQuery(chapter).data('time');
                            time = time.split(':');
                            var seconds = (+time[0]) * 60 * 60 + (+time[1]) * 60 + (+time[2]); 

                            if(ct === seconds){
                                zeQuery(chapter).css('font-weight','bold');
                            }else{
                                zeQuery(chapter).css('font-weight','normal');
                            }
                        })
                        var children = activeTlBlock.children();
                        for (var i = children.length - 1; i >= 0; i--) {
                            if (zeQuery(children[i]).find('a').attr('data-time') <= ct) {
                                activeTlBlock.find('li a.selected').removeClass('selected');
                                zeQuery(children[i]).find('a').addClass('selected');
                                break;
                            }
                        }

                        //overlay
                        var current_url = zeQuery(mediaElement).data("currentplayingvideourl") || mediaElement.src;
                        var duration = e.target.duration;


                        if (!videoHasPlayed && clickedTime != null) {
                            self.player.setCurrentTime(clickedTime);
                            clickedTime = null;
                            videoHasPlayed = true;
                        }

                        if(oldSecValue === -1 && that.seeked && ct > 0){
                            mediaElement.play();
                        }


                        if(self.advertising || !that.loaded || that.seeked)
                            return false;
                        var labelType = mediaElement.tagName.toLowerCase();
						var sendData = that.sendDataCollector(current_url);

                        if (ct != oldSecValue && !that.videoEnded) {
                            
                            oldSecValue = ct;
                            if (ct % 1 == 0) {
                                sendData.second = ct;
                                that.go.onSkinEvent('video.timeupdate', sendData );
                                
                                // chapter view
                                if(sendData.item && sendData.item.timeline){
                                    var toct = toHHMMSS(ct);
                                    var chpt = zeQuery(".ze_tl_chapter_section[data-time='" + toct + "']", self.$gallery);
                                    if(chpt.length){
                                        sendData.chapter = {
                                            second: ct,
                                            title: chpt.find(".ze_tl_chapter_title").text(),
                                            description: chpt.find(".ze_tl_chapter_description").text()
                                        }

                                        that.go.onSkinEvent('chapter.view', sendData );
                                    }
                                }
                            }
                        }
                    }, false);

                    mediaElement.addEventListener('seeked', function (e) {
                        if(!that.loaded || that.sendPause)
                            return;
                            var ct = ~~mediaElement.currentTime;                         
                                
                       
                        var current_url = zeQuery(mediaElement).data("currentplayingvideourl") || mediaElement.src ;
                        var sendData = that.sendDataCollector(current_url);
                        if (ct != oldSecValue && !that.videoEnded) {
                            oldSecValue = ct;
                            if (ct % 1 == 0) {
                                sendData.second = ct;
                                sendData.state = "seeked";
                                that.go.onSkinEvent('video.timeupdate', sendData );
                                that.seeked = false;
                            }
                        }
                    });

                    mediaElement.addEventListener('error', function (e) {
                        var current_url = zeQuery(mediaElement).data("currentplayingvideourl") || mediaElement.src ;
                        var sendData = that.sendDataCollector(current_url);
                        var errData = {};
                        if(e.target.error){
                            errData.code = e.target.error.code;

                            switch (e.target.error.code) {
                                 case e.target.error.MEDIA_ERR_ABORTED:
                                   errData.message = 'You aborted the video playback.';
                                   break;
                                 case e.target.error.MEDIA_ERR_NETWORK:
                                   errData.message = 'A network error caused the video download to fail part-way.';
                                   break;
                                 case e.target.error.MEDIA_ERR_DECODE:
                                   errData.message = 'The video playback was aborted due to a corruption problem or because the video used features your browser did not support.';
                                   break;
                                 case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                   errData.message = 'The video could not be loaded, either because the server or network failed or because the format is not supported.';
                                   break;
                                 default:
                                   errData.message = 'An unknown error occurred.';
                                   break;
                               }
                            sendData.error = errData;
                            that.go.onSkinEvent('video.error', sendData );
                        }


                    });                    


                    mediaElement.addEventListener('waiting', function() {
                        zeQuery('.mejs-overlay-loading', self.$gallery).parent().addClass("cp-hide");
                        var current_url = zeQuery(mediaElement).data("currentplayingvideourl") || mediaElement.src;
                        var itemIndex = zeQuery('.cp_pl_item[data-url="' + current_url + '"]', self.$gallery).attr('data-index');
                        var prePostroll= self.getItems()[+itemIndex] ? self.getItems()[+itemIndex].prepostrollVideo : false;
                        (function(prePost){
                        setTimeout(function(){
                            if(!prePost){
                                zeQuery('.mejs-overlay-loading', self.$gallery).parent().removeClass("cp-hide");
                             }
                       
                          },1000)
                       })(prePostroll) 
                      
                    }, false);

                    mediaElement.addEventListener('seeking', function() {
                        zeQuery('.mejs-overlay-loading', self.$gallery).parent().addClass("cp-hide");
                        setTimeout(function(){
                            zeQuery('.mejs-overlay-loading', self.$gallery).parent().removeClass("cp-hide");
                        },1000)
                    }, false);

                    mediaElement.addEventListener('canplay', function (e) {
                        if(!that.go.args.autostart && typeof that.playing == 'undefined'){ /* trick to show play button on webview */
                            zeQuery('.mejs-overlay-play', self.$gallery).show();
                        }
                    });

                    mediaElement.addEventListener('loadedmetadata', function (e) {
                        var duration = mediaElement.duration;
                        var current_url = zeQuery(mediaElement).data("currentplayingvideourl") || mediaElement.src;
                        var timePxSize = zeQuery('.mejs-time-total', self.$gallery).width() / duration;
                        var ct = ~~mediaElement.currentTime
                        if (self.tl_storyboard) {
                            zeQuery('.tl_section', self.$gallery).remove();
                            zeQuery('.ze_tl_block ul.active li').each(function () {
                                var tlTime = zeQuery(this).children('a').attr('data-time');
                                var sectionLeft = parseInt(tlTime) * timePxSize;
                                var sectionInfo = zeQuery(this).find('.ze_tl_infoblock').html();
                                var tlSection = '<div data-time="' + tlTime + '" class="tl_section" style="left:' + sectionLeft + 'px;"><div class="tl_section_info">' + sectionInfo + '</div></div>';
                                zeQuery('#mediaElementVideoContainer' + objID + ' .mejs-controls .mejs-time-rail').prepend(tlSection);
                            });

                            zeQuery('#' + objID + ' .mejs-time-rail .tl_section', this.$gallery).on('click', function () {
                                var tlSecond = parseInt(zeQuery(this).attr('data-time'));
                                if (self.player.media.paused) {

                                    mediaElement.play().catch(function(err){ });
                                }
                                self.player.setCurrentTime(tlSecond);
                            });
                        }

                       
                        if((!that.isMobile || that.isIpad || that.go.args.always_on_top_mobile) && that.go.args.always_on_top){
                            that.alwaysOnTop();
                        }

                        zeQuery('.mejs-logo-button', that.$gallery).show();
                        if(that.go.args.cincopaTV){
                            zeQuery(".playlistContainer .cincopatv-showinupnext",that.$gallery).removeClass('cincopatv-showinupnext');
                            var curreentParrent = zeQuery(".playlistContainer a.cp_pl_item.current",that.$gallery).closest('li');
                            //curreentParrent.addClass('cincopatv-showinupnext');
                            curreentParrent.nextAll("*:lt(3)").addClass('cincopatv-showinupnext')
                        }
                       
                        

                    });
                    setTimeout(function () {
                        zeQuery(that.getWindow()).trigger('resize.mediaelement');
                    }, 100);

                    if (that.go.args.controlbar_autohide && !that.isMobile) {
                        zeQuery('.mejs-container', self.$gallery).addClass('ze-autohide');
                    }

                    if(that.go.args.controlbar_onload === "true"){
                        zeQuery('.mejs-container', self.$gallery).addClass('ze-show-control-bar');
                    
                    }else{ if(that.go.args.controlbar_onload === "false"){
                       zeQuery('.mejs-container', self.$gallery).find('.mejs-controls').addClass("make-hidden");
                    }
                       
                       
                    }



                    if (that.go.args.timeControl) {
                     
                        zeQuery('.mejs-container', self.$gallery).addClass('vsbl_timecontrol');
                    }
                    zeQuery('.mejs-overlay-loading', self.$gallery).parent().addClass('hideLoaderFix');
                    if (that.go.args.autostart || that.playOnClick) {
                        zeQuery('.mejs-overlay-loading', self.$gallery).parent().show();
                        if(!that.isMobile || (that.isMobile && that.go.args.autostart === true)){
                            zeQuery('.mejs-overlay-play', self.$gallery).hide();                            
                            setTimeout(function () {
                                mediaElement.play().catch(function(err){
                                    var posterURL = zeQuery(mediaElement).attr("data-posterURL");
                                    that.go.onSkinEvent("player.failed", {
                                        player: that.player,
                                        error: err,
                                        posterURL: posterURL
                                    })
                                })
                            }, 400);
                        }


                    }
                    that.playOnClick = false;
                    if (that.go.args.volume_level != '') {
                        var volume = parseInt(that.go.args.volume_level) / 100;
                        volume = volume > 1 ? 1 : volume;
                        mediaElement.setVolume(volume);
                    }

                    if(self.go.args.postrollVideoUrl || self.go.args.prerollVideoUrl){
                        var custemPoster = zeQuery("<div class='mejs-logo-poster'><img src='" + self.go.args.preRollPoster + "'><div>")
                        zeQuery(".mejs-layers", self.$gallery).append(custemPoster)
                    }


                    mediaElement.addEventListener('pause', function (e) {
						
						var videoContainer =  zeQuery(".mejs-mediaelement", self.$gallery);
                        videoContainer.removeClass('fading');
						
                        if(that.advertising) return;

                        if(self.isLive){
                            clearTimeout(self.streamStoppedtimer);
                        }

                       
						zeQuery('#' + objID).removeClass('status-play').addClass('status-pause');
						
                        zeQuery(" a.cp_pl_item.current", self.$gallery).addClass('pause');
                        var current_url = zeQuery(mediaElement).data("currentplayingvideourl") || mediaElement.src;
						var sendData = that.sendDataCollector(current_url);
						var ct = ~~mediaElement.currentTime;
						var duration = ~~mediaElement.duration;
						sendData.second = ct;
						if (ct != duration)
						    that.go.onSkinEvent('video.pause', sendData);
                        that.playing = false;
                        that.canSendPlay = true;

                        // zeQuery('.mejs-chapters-button', self.$gallery).removeClass("mejs-chapters-off");
                        
                        if(!zeQuery('.mejs-chapters-button', self.$gallery).hasClass("mejs-chapters-off")){
                            zeQuery('.mejs-layers', self.$gallery).addClass("mejs-show-chapters");
                        }
                        zeQuery('.mejs-container',this.$gallery).trigger('mousemove')
                    }, false);
					mediaElement.addEventListener('volumechange', function (e) {
                        var volume = self.player.media.volume;
                        if (typeof self.session !== "undefined")
                            self.changeVolume(volume)
                        if(volume > 0 && !self.player.media.muted){
                            zeQuery('.unmute-button', self.$gallery).remove();
                        }
                    }, false);
                    mediaElement.addEventListener('ended', function (e) {
                        zeQuery('#' + objID).addClass('status-ended');
                        var labelType = mediaElement.tagName.toLowerCase();
                        if(!zeQuery('.mejs-chapters-button', self.$gallery).hasClass("mejs-chapters-off")){
							zeQuery('.mejs-layers', self.$gallery).addClass("mejs-show-chapters");
	                    }
                        zeQuery('.mejs-container',this.$gallery).trigger('mousemove');

                    }, false);
                    mediaElement.addEventListener('loadeddata', function (e) {
                        //that.onResize();
                        zeQuery('.videoWorkaround', self.$gallery).removeClass('videoWorkaround');
                    }, false);

                    mediaElement.addEventListener('seeked', function (e) {
                        // if (that.go.args.storyboard != 'off' && mediaElement.currentTime != 0 && that.seeked) {
                        //     onMouseMove();
                        // }
                    }, false);
                    mediaElement.addEventListener('playing', function (e) {
						zeQuery('.mejs-container', self.$gallery).removeClass("cp-afterroll-callback");
                        var current_lang = null;
                        if(self.go.args.subtitle || self.go.args.subtitle_list){
                            if(zeQuery.cookie('cincopavideoTrack')){
                                var lang = zeQuery.cookie('cincopavideoTrack').substring(0, zeQuery.cookie('cincopavideoTrack').lastIndexOf("_"));
                                zeQuery("#" + objID + " .track-current input[type='radio']").each(function(){
                                    var cur = zeQuery(this).val();
                                    if(cur.substring(0, cur.lastIndexOf("_")) == lang){
                                        zeQuery(this).trigger("click");
                                    }
                                });
                                if(self.player.selectedTrack && self.go.args.subtitle){
                                    current_lang = self.player.selectedTrack.srclang;
                                    zeQuery.cookie('cincopavideoTrack', current_lang );
                                }
                            } else if (self.subtitleFromList){
                                zeQuery("#" + objID + " .track-current input[type='radio']").each(function(){
                                    var cur = zeQuery(this).val();
                                    if(cur.indexOf("subtitle-" + self.subtitleFromList) === 0){
                                        self.player.trackDisableCookie = true;
                                        zeQuery(this).trigger("click");
                                        return false;
                                    }
                                });
                            }
                        }
                    });

                    mediaElement.addEventListener('play', function (e) {
                        var videoContainer = zeQuery('.mejs-mediaelement', self.$gallery);
                        if(videoContainer.hasClass('fading')){
                            setTimeout(function(){
                                videoContainer.removeClass('fading');
                            },1000);
                        }
						setTimeout(function(){
                            zeQuery('.mejs-overlay-loading', self.$gallery).parent().removeClass('cp-background-overlay'); 
                        },1000);

                        zeQuery(mediaElement).css('visibility', "visible");
                        that.videoPlayerStarted = true;
                        if(that.advertising) return;

                        that.videoEnded = false;
                        that.loaded = true;
                        that.playing = true;
                        that.seeked = false;
                        zeQuery('.mejs-overlay-loading', self.$gallery).parent().removeClass('hideLoaderFix');
                        zeQuery(".mejs-poster-video", self.$gallery).remove();
                        zeQuery(".mejs-poster .unmute-button", self.$gallery).remove();

                        zeQuery('#' + objID).removeClass('status-ended');
                        var labelType = mediaElement.tagName.toLowerCase();
                        //that.go.trackEvent('Gallery ' + labelType + ' play');


                        //netflix_popup
						if(typeof self.go.args.netflix_popup != 'undefined' && self.go.args.netflix_popup){
							//remove prefix if it was added by libasync 							
							zeQuery('#' + objID.replace('cp_lightbox_wrap_obj_','')).addClass('netflix_popup_opened');
                            zeQuery('.mediaElement_VideoOverlay', self.$gallery).addClass('netflix_popup_opened');                            
                            zeQuery('#'+objID).closest('.cp_lightbox_wrap').addClass('netflix_popup_opened');

                            var cat = zeQuery('a.cp_pl_item.current:not("cp_pl_item_clone")', self.$gallery).data('cat');
							var index = zeQuery('a.cp_pl_item.current:not("cp_pl_item_clone")', self.$gallery).data('share');
							self.buildChannelHashUrl(cat, index);
							if (zeQuery('.netflix_close_btn', self.$gallery).length == 0){
								
								var netflixCloseBtn = zeQuery('<span class="netflix_close_btn">x</span>');
								zeQuery('.mediaElementVideoContainer', self.$gallery).prepend(netflixCloseBtn);
								netflixCloseBtn.on('click', function(){
                                    zeQuery('#' + objID).removeClass('status-ended');
									zeQuery('.mediaElementVideoContainer', self.$gallery).addClass('no-transition');
									zeQuery('.vSizeWorkaround', self.$gallery).remove();
									mediaElement.pause();									
									zeQuery('.cp_pl_item_clone', self.$gallery).remove();
									
									zeQuery('#' + objID.replace('cp_lightbox_wrap_obj_','')).removeClass('netflix_popup_opened');
									zeQuery('.mediaElement_VideoOverlay', self.$gallery).removeClass('netflix_popup_opened');
									zeQuery('#'+objID).closest('.cp_lightbox_wrap').removeClass('netflix_popup_opened');
									
									zeQuery('.mediaElementVideoContainer', self.$gallery).addClass('fadeout');
									
									setTimeout(function(){
										zeQuery('#' + objID).removeClass('status-play').removeClass('status-pause');
									},300);
									setTimeout(function(){
										zeQuery('.mediaElementVideoContainer', self.$gallery).removeClass('no-transition');
										zeQuery('.mediaElementVideoContainer', self.$gallery).removeClass('fadeout');
										zeQuery('html').removeClass('cp_overflow_hidden');
									},350);
									if(self.go.args.allow_lightbox != 'no'){
										self.setUrlParam('cprtstatus', self.go.loaderParams["_id"] +'/channel/' );
									}else{
										self.setUrlParam('cprtstatus');
									}
								});
							}
						}else{
                            if(typeof self.go.args.url_changer != 'undefined' && self.go.args.url_changer){
                                var datacat = zeQuery('a.cp_pl_item.current:not("cp_pl_item_clone")', self.$gallery).data('cat');
                                var datarid = zeQuery('a.cp_pl_item.current:not("cp_pl_item_clone")', self.$gallery).data('rid');
                                self.buildVideoPortalHashUrl(datacat,datarid);
                            }
							zeQuery('.mediaElement_VideoOverlay', self.$gallery).remove();
						}

                        zeQuery('.mejs-container.ze-autohide', self.$gallery).removeClass('ze-autohide');
                        zeQuery('.mejs-container.ze-show-control-bar', self.$gallery).removeClass('ze-show-control-bar');
                        zeQuery('.mejs-container.ze-mobile-hide-controls', self.$gallery).removeClass('ze-mobile-hide-controls');
                        zeQuery('a.cp_pl_item', self.$gallery).removeClass('current').removeClass('pause');
                        //var tracks = that.player.layers.find('.mejs-playlist > ul > li');
                        var current_url = zeQuery(mediaElement).data("currentplayingvideourl") || mediaElement.src; //tracks.filter('.current').attr('data-url');
                        if (self.go.args.group_by == true || self.go.args.group_by != 'off') {
                            if(self.go.args.prerollVideoUrl){
                                zeQuery('a.cp_pl_item', self.$gallery).filter('[data-index="' + that.go.preRollIndex + '"][data-cat="' + that.currentCategory + '"]').addClass('current');
                            } else {
                                zeQuery('a.cp_pl_item', self.$gallery).filter('[data-url="' + current_url + '"][data-cat="' + that.currentCategory + '"]').addClass('current');
                            }
                        } else {
                            if(self.go.args.prerollVideoUrl){
                                zeQuery('a.cp_pl_item', self.$gallery).filter('[data-index="' + that.go.preRollIndex + '"]').addClass('current');
                            } else {
                                zeQuery('a.cp_pl_item', self.$gallery).filter('[data-url="' + current_url + '"]').addClass('current');
                            }
                        }
						
						if (self.go.args.allow_lightbox !== 'no' &&  !self.go.args.netflix_popup) {
                            var cat = zeQuery('a.cp_pl_item.current:not("cp_pl_item_clone")', self.$gallery).data('cat');
                            var index = zeQuery('a.cp_pl_item.current:not("cp_pl_item_clone")', self.$gallery).data('index');

                            self.buildChannelHashUrl(cat, index);
                        }
						//netflix_popup
						if(typeof self.go.args.netflix_popup != 'undefined' && self.go.args.netflix_popup){
							
							zeQuery('html').addClass('cp_overflow_hidden');
							
							
							zeQuery(window).off('keyup.netflix_popup');
							self.onEsc.activeListener = true;
							zeQuery(window).on('keyup.netflix_popup', function(e){									
									self.onEsc(e);
							});
											
							
							var currentVideoTitle = zeQuery('a.cp_pl_item.current', self.$gallery).find('.pl_item_name').text();
							
							var nextPlayItem = zeQuery('a.cp_pl_item.current:not("cp_pl_item_clone")', self.$gallery).parents('li').next('li').find('a.cp_pl_item');
							
							if(nextPlayItem.length == 0){
								nextPlayItem = zeQuery('a.cp_pl_item.current', self.$gallery).parents('.ze_flexslider.carousel').next('.ze_flexslider.carousel').find('a.cp_pl_item:first');
							}
							zeQuery('.netflix_extra_container', self.$gallery).remove();
							if( zeQuery('.netflix_extra_container', self.$gallery).length == 0){
                                
                                if(self.go.args.audio_support && zeQuery('.mediaElementVideoContainer ', self.$gallery).hasClass('isAudio')){
                                    zeQuery('.netflix_popup_audio_item', self.$gallery).append( zeQuery('<div class="netflix_extra_container" />'));
                                }else {
                                    zeQuery('.mediaElement_VideoOverlay', self.$gallery).before( zeQuery('<div class="netflix_extra_container" />'));
                                }
								
							}
							
                           

							if(nextPlayItem.length){
								var nextPlayItemClone = zeQuery('<a class="cp_pl_item cp_pl_item_clone" >').html(nextPlayItem.html());
								nextPlayItemClone.find('.pl_item_name').wrap('<div class="pl_item_text_info"></div>');
								nextPlayItemClone.find('.pl_item_description').detach().appendTo(nextPlayItemClone.find('.pl_item_text_info'));
								nextPlayItemClone.find('> .pl_item_name').remove();
								var mustThumbLoadImg = nextPlayItemClone.find('img.mustThumbLoad');
								if(mustThumbLoadImg.length){
									mustThumbLoadImg.attr('src', mustThumbLoadImg.data('image-src'));
								}
								zeQuery('.cp_pl_item_clone', self.$gallery).remove();
								zeQuery('.netflix_extra_container', self.$gallery).append(nextPlayItemClone);
								
								nextPlayItemClone.on('click', function(e){
									nextPlayItem.click();
									zeQuery(".mediaElementVideoContainer",self.$gallery).animate({ scrollTop: 0 });
									return false;
								})
							}else{
								zeQuery('.cp_pl_item_clone', self.$gallery).remove();
								zeQuery('.netflix_extra_container', self.$gallery).remove();
							}
						}
						
						
                        var extraFileInd = zeQuery('a.cp_pl_item.current', self.$gallery).data('index');
                        that.findCurrentSubtitle(extraFileInd, that.currentCategory);


                        if (zeQuery('a.cp_pl_item.current', self.$gallery).hasClass('invalid_video')) {
                            that.player.playNextTrack(that.player);
                        }
                        zeQuery('#' + objID).removeClass('status-pause').addClass('status-play');
						//netflix_popup
						if(typeof self.go.args.netflix_popup != 'undefined' && self.go.args.netflix_popup){
							self.onResize();
						}
                        zeQuery('.mejs-container', self.$gallery).find('.mejs-controls').removeClass("make-hidden");
                        var ct = ~~mediaElement.currentTime;
                        if (self.go.args.prerollVideoUrl || self.go.args.postrollVideoUrl) {
                            if (current_url.replace("&fakelastparam=ffffff", "") == self.go.args.prerollVideoUrl || current_url.replace("&fakelastparam=ffffff", "") == self.go.args.postrollVideoUrl) {
                                zeQuery('.share-button', self.$gallery).addClass("cp-hide");
                                zeQuery('.mejs-container', self.$gallery).addClass("cp-hidecontrols")
                                zeQuery('.mejs-container', self.$gallery).addClass("prepostrollVideo");

                            } else {
                                zeQuery('.share-button', self.$gallery).removeClass("cp-hide");
                                zeQuery('.mejs-container', self.$gallery).removeClass("cp-hidecontrols")
                                zeQuery('.mejs-container', self.$gallery).removeClass("prepostrollVideo");

                            }
                            var rollImg = zeQuery('a.cp_pl_item.current', self.$gallery).attr("data-rollImage");
                            if (rollImg && ct == 0){
                                setTimeout(function(){
                                    that.player.pause();
                                },150)
                                self.$gallery.addClass("playingLogoVideo");
                                zeQuery('.mejs-logo-poster img', self.$gallery).attr("src", rollImg);
                                zeQuery('.share-button', self.$gallery).addClass("cp-hide");
                                zeQuery('.mejs-container', self.$gallery).addClass("cp-hidecontrols");
                                zeQuery(".mejs-overlay-play", self.$gallery).addClass("cp-hide");
                                that.rollTimer = setTimeout(function () {
                                    clearTimeout(that.rollTimer);
                                    self.go.preRollAction = "next";
                                    that.player.playNextTrack(that.player);
                                    self.go.preRollAction = false;
                                }, 3000)
                            } else {
                                self.go.preRollAction = false;
                                setTimeout(function(){
                                    self.$gallery.removeClass("playingLogoVideo");
                                },200)
                                if (self.go.args.postrollVideoUrl) {
                                    zeQuery(".mejs-overlay-play", self.$gallery).removeClass("cp-hide");
                                }
                            }

                        }
                        if(typeof that.hls != "undefined" && !that.hls.hlsStarted && !that.go.args.fast_start){
                            var videoLevel = that.getVideoLevel(that.hls.MediaJSON, that.hls);

                            var startTime = -1;
                            if(that.hls.MediaJSON && that.hls.MediaJSON.item && that.hls.MediaJSON.item.startTime)
                                startTime = that.hls.MediaJSON.item.startTime;
                            that.hls.hlsStarted = true;

                            that.hls.startLoad(startTime);
                            that.hls.MediaJSON.version = that.hls.levelController.levels[videoLevel];
                        }


                        var sendData = that.sendDataCollector(current_url);

					              sendData.second = ct;
                        if(that.canSendPlay)
                            that.go.onSkinEvent('video.play', sendData);

                        that.canSendPlay = false;
                        self.adjustControls();
                    }, false);


                    that.player.container.bind('controlshidden', function () {
                          zeQuery('.mejs-chapters-button', self.$gallery).addClass("mejs-chapters-off");
                          zeQuery('.mejs-layers', self.$gallery).removeClass("mejs-show-chapters");
                    });

					var  playerInstance = {
                        play:function(){
                            mediaElement.play().catch(function(err){ });
                        },
                        pause:function(){
                            mediaElement.pause();
                        },
                        setCurrentTime:function(time){
                            mediaElement.setCurrentTime(time);
                        }
					}
                    that.go.onSkinEvent('api.ready', playerInstance );

                    // fix for ios to show subtitles on native player in fullscreen mode
                    if (cincopa_mejs.MediaFeatures.isiOS && cincopa_mejs.MediaFeatures.hasiOSFullScreen && typeof that.player.media.webkitEnterFullscreen === 'function') {
                        that.player.media.addEventListener("webkitbeginfullscreen", function(){
                            if(that.player.selectedTrack){
                                var videoElement = that.player.media;
                                var textTracks = videoElement.textTracks;
                                if(videoElement.textTracks){
                                    for(var i = 0; i < videoElement.textTracks.length; i++){
                                        if(videoElement.textTracks[i].language === that.player.selectedTrack.srclang){
                                            videoElement.textTracks[i].mode = "showing";

                                        } else {
                                            videoElement.textTracks[i].mode = "disabled";
                                        }
                                    }
                                }

                            }
                        }, false);

                        that.player.media.addEventListener("webkitendfullscreen", function(){
                            if(that.player.selectedTrack){
                                var videoElement = that.player.media;
                                var textTracks = videoElement.textTracks;
                                if(videoElement.textTracks){
                                    for(var i = 0; i < videoElement.textTracks.length; i++){
                                        videoElement.textTracks[i].mode = "disabled";
                                    }
                                }
                            }
                        }, false);
                        return;
                    }


                    
                    //that.showVideoThumbnail();
					if( self.videoThumbnail){
						
						var $el;
						if(zeQuery('a.cp_pl_item.current', self.$gallery).length){
								$el =  zeQuery('a.cp_pl_item.current', self.$gallery);
						}else{
							$el =  zeQuery('a.cp_pl_item:first', self.$gallery);
						}
						var extraFileInd = $el.data('index');
						var cat = $el.data('cat');

						self.findCurrentSubtitle(extraFileInd, cat);
						
                    }
                    if(that.go.args.course_progress) {
                        that.playlistHeight(true)
                    }
					
                    
                },
                // fires when a problem is detected
                error: function (err) {
                    console.log(err, 'ERROR')
                }

            }
            zeQuery('#mediaElementVideo' + objID).mediaelementplayer(mediaElement_options);
            zeQuery(winSelector).on('resize.mediaelement', function () {
                clearTimeout(resizeTimer);

                resizeTimer = setTimeout(function () {
                    that.onResize();
                    if(!that.currentPlayerHeight)
                        that.currentPlayerHeight = zeQuery('#mediaElementVideo' + objID).height();
                    if(that.currentPlayerHeight && that.currentPlayerHeight < zeQuery('#mediaElementVideo' + objID).height() - 20){
                        that.currentPlayerHeight = zeQuery('#mediaElementVideo' + objID).height();
                        that.changeLevel()
                    }
                    that.adjustControls();
                    //that.adjustPlayerFontSize();    
                }, 100);
            });

            zeQuery(document).on('click', '.ze_overlay_close_btn', function () {
                if(!zeQuery(this).hasClass("ze_overlay_close_cta")){
                    if(that.go.args.html_overlay_show != 'on_25' && that.go.args.html_overlay_show != 'on_50' && that.go.args.html_overlay_show != 'on_75' && that.go.args.html_overlay_show != 'before_first' && that.go.args.html_overlay_show.indexOf("on_at_") == -1){
                        var lastIndex = zeQuery('#' + objID + '.mediaElement_playlist .cp_pl_item:last.current').length;
                        if (lastIndex == 0){
                            that.player.playNextTrack(that.player);
                        }
                    } else {
                        that.player.$media[0].play().catch(function(err){ });
                    }
                }
            });

			zeQuery('#' + objID + ' .mejs-player-chrome-cast-button').on('click', function () {
                if (that.chromeCast){
                    that.launchApp();
                    if(self.player.isFullScreen)
                        self.player.exitFullScreen();
                }
            });

            /* share button*/
             zeQuery('#' + objID + ' .share-button').on("click",function(){
                var videoElem = self.player.media;
                var current_url = zeQuery(videoElem).data("currentplayingvideourl") || videoElem.src;
                var sendData = self.sendDataCollector(current_url);
                sendData.share_url = self.getShareUrl();
                self.go.onSkinEvent('share.show', sendData);
                //self.adjustPlayerFontSize();
             })
             if(self.player && self.player.captionsButton && self.go.args.subtitle){
                 self.player.captionsButton.on('click','input[type=radio]',function() {
                    if(self.player.trackDisableCookie){
                        self.player.trackDisableCookie = false;
                        return;
                    }
                    if(self.player.selectedTrack)
                        zeQuery.cookie('cincopavideoTrack', self.player.selectedTrack.srclang );
                    else
                        zeQuery.cookie('cincopavideoTrack', "none");
                 });
             }

             /* share button*/
       
            if(this.go.args.css_version){
				this.$gallery.addClass('css_version');				
				this.$gallery.addClass('css_version_'+this.go.args.css_version);				
            }
         
          //this fix is for mozilla when pressing esc 
         
          if(typeof document.mozFullScreenElement != 'undefined'){
          
            zeQuery(document).bind('fullscreenchange  mozfullscreenchange', function (e) {
                
                var fullscreenElement = document.fullscreenElement || document.mozFullscreenElement ;
                if (!fullscreenElement) {
                    zeQuery(".mejs-fullscreen").removeClass('mejs-fullscreen');
                    zeQuery(".mejs-container-fullscreen").removeClass('mejs-container-fullscreen');
                    self.onResize();
                    setTimeout(function(){
                        var esc = zeQuery.Event("keydown", { keyCode: 27 });
                        zeQuery("body").trigger(esc) 
                    },0);
                }
            });
        }


            zeQuery('#' + objID + ' .mejs-player-chrome-cast-button').on('mouseenter', function () {
                zeQuery(".chromecast-hover").addClass("visible");
            })

            zeQuery('#' + objID + ' .mejs-player-chrome-cast-button').on('mouseleave', function () {
                zeQuery(".chromecast-hover").removeClass("visible");
            })

            zeQuery('#' + objID + ' .mejs-playpause-button button').on('click', function () {
                
                if (zeQuery(this).parent().hasClass("mejs-pause")) {
                    if (typeof self.session !== "undefined") {
                        if (typeof self.session.media[0] !== "undefined") {
                            self.pauseMedia();
                            zeQuery(this).parent().removeClass("mejs-pause").addClass("mejs-play");
                            zeQuery('.mediaElement_playlist a.cp_pl_item.current', this.$gallery).addClass("pause");
                            return false;
                        }
                    }
                }else if (zeQuery(this).parent().hasClass("mejs-play")) {
                    if (typeof self.session !== "undefined") {
                        if (typeof self.session.media[0] !== "undefined") {
                            self.playMedia();
                            zeQuery(this).parent().removeClass("mejs-play").addClass("mejs-pause");
                            zeQuery('.mediaElement_playlist a.cp_pl_item.current', this.$gallery).removeClass("pause");
                            return false;
                        }
                    }
                }

            });

            zeQuery('#' + objID + ' .mejs-time-rail').on('click', function () {
                if (typeof self.session !== "undefined") {
                    if (typeof self.session.media[0] !== "undefined") {
                        var currenttime = self.player.media.currentTime;
                        if (currenttime != 0)
                            self.seekMedia(currenttime);
                    }
                }
            });

            this.loadPlaylistThumbs();


            /* left/Right arrows(NEtflix gallery) */
            zeQuery('#mediaElementVideoContainer' + objID).addClass("first-item-playing");
            if(this.go.args.showPlayerArrows && this.go.args.cincopaTV == false){
                var leftArrow = zeQuery("<div>").addClass("mediaElementVideoContainerLeftArrow");
                leftArrow.html("<i></i>");
                var rightArrow = zeQuery("<div>").addClass("mediaElementVideoContainerRightArrow");
                rightArrow.html("<i></i>");
                rightArrow.on("click", function() {
                    self.player.playNextTrack(self.player);
                })

                leftArrow.on("click", function() {
                    self.player.playPrevTrack(self.player);
                })
                zeQuery('#mediaElementVideoContainer' + objID).append(leftArrow);
                zeQuery('#mediaElementVideoContainer' + objID).append(rightArrow)

            }
			
			
			//netflix_popup (NEtflix gallery open popup from hash)
			if((typeof self.go.args.netflix_popup != 'undefined' && self.go.args.netflix_popup) || self.go.args.allow_lightbox !== 'no'){
				self.runFromHashTag();				
            }
            
            if(typeof self.go.args.url_changer != 'undefined' && self.go.args.url_changer){
                self.runVideoPortalFromHashTag();
            }


        };
     
        this.getDate = function(string) {
            var date =  new Date(string).toDateString(); //Fri Sep 14 2018
            date = date.split(' ');                   //["Fri","Sep","14","2018"]
            return date[1] + ' ' + date[2] + ',' + date[3];


        };
       this.prepostRollBeforePlay = function(eventName){
            if(this.go.preRollIndex <= 0){
                zeQuery('.mejs-overlay-loading', this.$gallery).parent().addClass('cp-background-overlay');
            }
       };
       this.prepostRollCallback = function (eventName) {
		   zeQuery('.mejs-container', this.$gallery).addClass("cp-afterroll-callback");
           if(eventName === "prev"){
               if(this.go.preRollAction == "return") return;

               var playlistObject;
               this.go.preRollAction = "prev";
               if(this.go.preRollIndex != 1)
                   this.go.preRollIndex --;

               this.go.preRollAction = "return";
               this.player.playPrevTrack(this.player);
               if(this.go.args.prerollVideoUrl)
                   this.player.playPrevTrack(this.player);
               if(this.go.args.prerollVideoUrl && this.go.args.postrollVideoUrl)
                   this.player.playPrevTrack(this.player);
               this.go.preRollAction = false;
               if(this.go.args.prerollVideoUrl && this.go.args.postrollVideoUrl){
                   this.go.preRollIndex = this.go.preRollIndex - 3;
               } else {
                   if(this.go.args.prerollVideoUrl){
                       this.go.preRollIndex = this.go.preRollIndex - 2
                   }
                   if(this.go.args.postrollVideoUrl){
                       this.go.preRollIndex = this.go.preRollIndex - 1
                   }
               }
               if(this.go.args.group_by == true || this.go.args.group_by != 'off'){
                   playlistObject = zeQuery('.playlistContainer a.cp_pl_item[data-index="' + this.go.preRollIndex + '"][data-cat="' + this.currentCategory + '"]', this.$gallery);
               } else {
                   playlistObject = zeQuery('.playlistContainer a.cp_pl_item[data-index="' + this.go.preRollIndex + '"]', this.$gallery);
               }
               var infoHtml = '<div class="cp_pl_item cp_pl_item_show" >' + zeQuery(playlistObject).html() + '</div>';
               zeQuery('.mediaElementInfo_container', this.$gallery).html(infoHtml);
           } else if (eventName === "next"){
               var playlistObject;
               this.go.preRollIndex ++;
               if(this.go.preRollCategory !== this.currentCategory){
                   this.go.preRollIndex = 0;
                   this.go.preRollCategory = this.currentCategory;
               }
               if(this.go.args.group_by == true || this.go.args.group_by != 'off'){
                   playlistObject = zeQuery('.playlistContainer a.cp_pl_item[data-index="' + this.go.preRollIndex + '"][data-cat="' + this.currentCategory + '"]', this.$gallery);
               } else {
                   playlistObject = zeQuery('.playlistContainer a.cp_pl_item[data-index="' + this.go.preRollIndex + '"]', this.$gallery);
               }
               if(this.go.args.prerollVideoUrl || this.go.args.postrollVideoUrl){
                   var infoHtml = '<div class="cp_pl_item cp_pl_item_show" >' + zeQuery(playlistObject).html() + '</div>';
                   zeQuery('.mediaElementInfo_container', this.$gallery).html(infoHtml);
               }
               if(this.go.preRollAction != "next" && this.go.args.postrollVideoUrl){
                   this.go.preRollAction = "next";
                   this.player.playNextTrack(this.player);
               }
               this.go.preRollAction = false;
           }
       }
   
       this.masterM3u8ContentFromAssets = function(m3u8Arr) {
            for (var e = "#EXTM3U", s = [], a = 0; a < m3u8Arr.length; a++) {
                var i = m3u8Arr[a];
                var url = i.url;
                if(!this.isHlsSupported() && this.isNativeHls()){
                    var keyName = this.inBetween(i.url, 'key=','&');
                    if(keyName){
                        url = url.replace('key='+keyName,'key=AAAAAAA=');
                    }
                }
                s.push("#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=" + i.bandwidth + ",RESOLUTION=" + i.resolution + ",NAME=" + i.display_name + "\n" + url)
            }
            return e + "\n" + s.join("\n")
       },

       this.masterM3u8DataUri = function(m3u8Arr) {
           if(m3u8Arr.length){
                var e = this.masterM3u8ContentFromAssets(m3u8Arr);
                return "data:application/x-mpegURL;base64," + base64Encode(e)
           }
           return false;
       },

       this.isHlsSupported = function(){
            var supported = true;
            if(typeof Hls == "undefined"|| !Hls.isSupported())
                supported = false;
            if(!this.go.args.enable_hls)
                supported = false;
            if(is_ie() && !is_ie_hls_supported()){
                supported = false;
            }

            var isWKWebView = false ;
            if( this.isIOS ) { 
                if( window.webkit && window.webkit.messageHandlers ) {
                    isWKWebView = true ;
                }
            }

            if(isWKWebView){
                supported = false;
            }

            var chr = function() {
                return !(!/Chrome/.test(navigator.userAgent) || !/Google Inc/.test(navigator.vendor)) && {
                    version: chromeVersion()
                }
            };
            var chromeVersion = function() {
                var e = navigator.userAgent.match(/\bChrome\/([^\s]+)/);
                return e && e[1]
            }
            if(chr() && parseInt(chr().version) <= 50){
                 supported = false;
            }
            return supported;
       }

       this.isNativeHls = function(){
            var riphone = /(iphone)/i,
                ripad = /(ipad)/i,
                rwebkit = /(webkit)[ \/]([^\s]+)/i;

            var iphone = riphone.test(navigator.userAgent);
            var ipad = ripad.test(navigator.userAgent);
            var safari = rwebkit.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && !ipad && !iphone;
            return iphone || ipad || safari;
       }


       this.createM3u8Arr = function(item){
            var m3u8Arr = [];
            var ratio = item.aspect_ratio;
            var counter = 10;
            var versions = item.versions;
            for (var key in versions) {
                if (versions.hasOwnProperty(key) && versions[key].mime == "application/x-mpegURL" && key.indexOf('ts_')!= -1) {
                    var resolution = "";
                    var h = parseInt(versions[key].name);
                    var w = ratio * h;
                    resolution = w + "X" + h;
                    m3u8Arr.push({
                        url: versions[key].url+`${(versions[key].key ? '?token='+versions[key].key : '')}`,
                        display_name: versions[key].name,
                        resolution: resolution,
                        bandwidth: counter
                    });
                    counter ++;
                }
            }

            return m3u8Arr;
       }

       this.playHLS = function(mediaelement, json, autostart){

            if(json.item["content_type"].indexOf('audio') > -1 && self.go.args.audio_support){
                if(this.hls){
                    this.hls.destroy();
                    this.hls = undefined;
                }
                return this.player.setSrc(this.getContentUrl(json.item))
            }
            var that = this;
            var objID = this.go.loaderParams["_object"];
            that.m3u8Arr = this.createM3u8Arr(json.item);
			
			zeQuery(mediaelement).parents('.mejs-container').removeClass('cp-processing-video');
            
            var item = {};
            if(typeof json != "undefined"){
                item = json.item;
            }
            var content_url = this.getContentUrl(item);
            zeQuery('#mediaElementVideo' + objID).data("currentplayingvideourl", content_url);
            var dataURI = "";
            if(json.item.content_real_type == "live"){
                dataURI = this.getContentUrl(item);
            } else {
                if(json.item.m3u8){
                    dataURI = json.item.m3u8;
                } else {
                    dataURI = this.masterM3u8DataUri(that.m3u8Arr);
                    if(dataURI && is_ie() == 11 && (/(Windows 8.1|Windows NT 6.3)/.test(navigator.appVersion) || /(Windows 10.0|Windows NT 10.0)/.test(navigator.appVersion))){
                        dataURI = "//www.cincopa.com/media-platform/runtimeze/m3u8.aspx?rid=" + json.item.rid;
                    }
                }
                
            }
            if(this.hls){
                this.hls.destroy();
                this.hls = undefined;
            }
            
            if( that.isHlsSupported() && dataURI ) {
                var hlsOptions = {
					maxMaxBufferLength: (this.go.args.fast_start ?  parseInt(this.go.args.hls_max_fast_start_buffer_length): parseInt(this.go.args.hls_max_buffer_length) )};
                if(json.item.content_real_type != "live"){
                    hlsOptions.autoStartLoad = false
                }

                
                // special payload post processing function defined in mediaelement-universal.js
                try{
                    hlsOptions.fLoader  = that.fLoader;
                    hlsOptions.pLoader  = that.pLoader ;
                }catch(ex){
                    console.log(ex)
                }         

                if(json.item.content_real_type != "live" || json.item.live_status == "started"){
                    var hls = new Hls(hlsOptions);
                    hls.loadSource(dataURI);
                    
                    hls.attachMedia(mediaelement);
                } else if(json.item.live_status != "started"){
                    that.showOfflineStream(objID, "Live stream offline");
                }

                if(json.item.content_real_type != "live"){

                    hls.on(Hls.Events.MANIFEST_PARSED,function() {
                       var videoLevel = that.getVideoLevel(json, hls);

                       hls.MediaJSON = json;
                       
                       mediaelement.addEventListener('play', function (e) {
                        if( typeof hls.firstTimePlayed === 'undefined'){
                            var newvideoLevel = that.getVideoLevel(json, hls);
                            if(videoLevel != newvideoLevel ){
                                that.changeLevel();
                            }                                
                        }
                    });
                       if(that.go.args.fast_start){
                             var startTime = -1;

                             if(json.item && json.item.startTime)
                                startTime = json.item.startTime;
                             hls.currentLevel = videoLevel;
                             hls.loadLevel = videoLevel;
                             hls.nextLevel = videoLevel;
                             hls.nextLoadLevel = videoLevel;
                             hls.startLoad(startTime);
                             hls.hlsStarted = true;
                             json.version = hls.levelController.levels[videoLevel];
                             that.go.onSkinEvent('video.load', json );
					
							mediaelement.addEventListener('playing', function (e) {
								 if( typeof hls.cpBufferChanged === 'undefined'){
									   hls.cpBufferChanged = true;
									   hls.config.maxMaxBufferLength = parseInt(that.go.args.hls_max_buffer_length);				  
								  }
							});

					
                             if(autostart){
								mediaelement.play().catch(function(err){
                                    if(err && err.code === 20) return;
                                    var posterURL = zeQuery(mediaelement).attr("data-posterURL");
                                    mediaelement.muted = true;
                                    mediaelement.play();
                                    var unmuteBtn = zeQuery("<div>").addClass("unmute-button");
                                    unmuteBtn.html("<div class='unmute-button-speaker'><span></span></div><span>" + (that.isMobile ? "Tap for sound" : "Click for sound") +"</span>");

                                    unmuteBtn.on("click", function(){
                                        if(mediaelement.muted) {
                                            mediaelement.muted = false;
                                        }
                                        unmuteBtn.remove();
                                    })
                                    zeQuery(".mejs-layers", self.$gallery).append(unmuteBtn)
                                    that.go.onSkinEvent("player.failed", {
                                        player: that.player,
                                        error: err,
                                        posterURL: posterURL
                                    })
                                });
                             }
                       } else {
                            that.go.onSkinEvent('video.load', json );
                       }
                    });
                } else {
                    if(hls){
                        hls.isLive = true;
                        if(json.item.live_status == "started"){
                            that.go.onSkinEvent('video.load', json );
                        }
                    }

                }

                that.hls = hls;
                zeQuery(mediaelement).data('hls',hls) 

                if(hls){
                    hls.on(Hls.Events.ERROR,function(event, errorData) {
                        var current_url = zeQuery(mediaelement).data("currentplayingvideourl") || mediaelement.src ;
						
						if (errorData.fatal) {
							  switch(errorData.type) {
							  case Hls.ErrorTypes.NETWORK_ERROR:
								_trace(errorData + ' fatal network error encountered, try to recover');
                                mediaelement.pause();
                                hls.stopLoad();
                                hls.fatalNetworkError = true;
                                //hls.startLoad();
								break;
							  case Hls.ErrorTypes.MEDIA_ERROR:
                                _trace(errorData + ' fatal media error encountered, try to recover');
                                if(!zeQuery(mediaelement).parents('.mejs-container').hasClass('mejsprerollstarted')){
                                    hls.recoverMediaError();
                                }
								
								break;
							  default:	
								 _trace(errorData + ' destroy hls');
								 if(cincopa.logError){
									 cincopa.logError("hls fatal", "disabling hls")
								 }
								recoverVideo(); 
								break;
							  }
						}else if(errorData.type == "networkError" && errorData.details=="manifestLoadError"){
							recoverVideo();                           
                        }
						
						
                        if(errorData.type == "mediaError" && that.seeked) return true;

                        var sendData = that.sendDataCollector(current_url);
                        sendData.error_hls = errorData;
                        if(errorData.type == "mediaError"){
                            clearTimeout(self.streamStoppedtimer);
                            self.checkStreamStatus(true)
                        }
                        that.go.onSkinEvent('video.error', sendData );
						
                    });
                }


                if(that.vrPlayer){
                    that.vrPlayer.destroy();
                    zeQuery(window).off("resize.vrPlayer");
                    that.vrPlayer = null;
                }

                if(json.item.isVR){
                    that.playVR(mediaelement);
                }
                return true;
             } else if (that.go.args.enable_hls && dataURI && that.isNativeHls()) {
                    if(json.item.content_real_type != "live" || json.item.live_status == "started"){
                        mediaelement.setSrc(dataURI);						
						mediaelement.addEventListener('error', function (e) {
							if(cincopa.logError){
								cincopa.logError("hls fatal", "native hls")
							}
						});						
                        that.go.onSkinEvent('video.load', json );
                    } else {
                        that.showOfflineStream(objID, "Live stream offline");
                    }

             } else {

                var videoSource;
                if(json.item.versions){
					recoverVideo(true);
                } else if (json.item.content_real_type == "live"){
                    that.showOfflineStream(objID, "Live stream doesn't supported");
                }

             }

           if(that.vrPlayer){
               that.vrPlayer.destroy();
               zeQuery(window).off("resize.vrPlayer");
               that.vrPlayer = null;
           }
           if(json.item.isVR){
               that.playVR(mediaelement);
           }


           /* will use this function when hls trown an error or when hls not supported */
           function recoverVideo(setCurrentTime) {
               var videoSourceRecovered;
               if (json.item.versions) {
                   var bigFile = false;
                   var encoded = false;
                   if (json.item.versions.original && json.item.versions.original.filesize) {
                       if (json.item.versions.original.filesize / Math.pow(1024,2) > 100) { /* if bigger than 100MB */
                           bigFile = true;
                       }
                       if (json.item.versions.original.url && json.item.versions.original.url.indexOf('key=') > -1) {
                           encoded = true
                       }
                   }
                   if (!encoded && json.item.versions.mp4_hd) {
                       json.version = json.item.versions.mp4_hd;
                       videoSourceRecovered = json.item.versions.mp4_hd.url;
                   } else if (!encoded && !bigFile && json.item.versions.original && (json.item.versions.original.url.toLowerCase().indexOf(".webm") > -1 || json.item.versions.original.url.toLowerCase().indexOf(".mp4") > -1 || json.item.versions.original.url.toLowerCase().indexOf(".mov") > -1 || json.item.versions.original.url.toLowerCase().indexOf(".m4v") > -1)) {
                       json.version = json.item.versions.original;
                       videoSourceRecovered = json.item.versions.original.url;
                   } else {
                       zeQuery(mediaelement).parents('.mejs-container').addClass('cp-processing-video');
                       videoSourceRecovered = "//wwwcdn.cincopa.com/design/videos/video-not-ready-v2.mp4";
                   }

                   that.go.onSkinEvent('video.load',json);
                   if (hls) hls.destroy();
                   mediaelement.setSrc(videoSourceRecovered);
                   if (json.item && json.item.startTime) {
                       mediaelement.setCurrentTime(json.item.startTime);
                   }
                   if (autostart) {
                       setTimeout(function () {
                           mediaelement.play().catch(function (err) {
                               var posterURL = zeQuery(mediaelement).attr("data-posterURL");
                               that.go.onSkinEvent("player.failed",{
                                   player: that.player,
                                   error: err,
                                   posterURL: posterURL
                               })
                           });;
                       },300)
                   }
               }
           }
           return false;
        }

        this.getVideoLevel = function(json, hls){
            var videoLevel;
            var objID = this.go.loaderParams["_object"];
            var h =  Math.max(zeQuery('#mediaElementVideo' + objID).height(), zeQuery('#mediaElementVideo' + objID).attr('height'));

            /* use window height instead of container for netlix_poup/channels */
            if(typeof this.go.args.netflix_popup != 'undefined' && this.go.args.netflix_popup ){
                var wnd = self.getWindow();
                h = Math.max( wnd.innerHeight, h);
            }
            // var h = zeQuery('#mediaElementVideo' + objID).height();

            this.currentPlayerHeight = h;
			
			
			// crate m3u8Arr if not exist to prevent error on hls level functions
			if(typeof this.m3u8Arr == 'undefined'){
				this.m3u8Arr = this.createM3u8Arr(json.item);
			}	
			
			
            if(json.item.isVR){
                videoLevel = this.getHlsLevel(10000); // 10000 - to get max quality version
                hls.disableResize = false;
            }
            else if(zeQuery.cookie('cincopavideoQuality') == null || zeQuery.cookie('cincopavideoQuality') == "auto" || this.go.args.versions === "off"){
                videoLevel = this.getHlsLevel(h);
                hls.disableResize = false;
            } else {
                for(var m =0; m < this.m3u8Arr.length; m++){
                    if(this.m3u8Arr[m].display_name == zeQuery.cookie('cincopavideoQuality')){
                        videoLevel = m;
                        hls.disableResize = true;
                        break;
                    }
                }
                if(videoLevel == null){
                    videoLevel = this.getHlsLevel(h);
                    zeQuery.cookie('cincopavideoQuality', "auto");
                    hls.disableResize = false;
                }
            }
            return videoLevel;
        }

        this.getHlsLevel = function(height){
            var m3u8Arr = this.m3u8Arr;
            var sizes = [];
            if(!m3u8Arr.length){
                return false;
            }
            var gt = [], lt = [];
            for(var i =0; i < m3u8Arr.length; i++){
                var s = parseInt(m3u8Arr[i].display_name)
                if(!isNaN(s)){
                    if(s < height){
                        lt.push(s);
                    } else {
                        gt.push(s);
                    }

                }
            }
            var nearSize;
            if(gt.length){
                nearSize = Math.min.apply(null, gt);
            } else if (lt.length){
                nearSize = Math.max.apply(null, lt);
            }

            var videoLevel;

            if(nearSize){
                for(var j =0; j < m3u8Arr.length; j++){
                    var s = parseInt(m3u8Arr[j].display_name);
                    if(m3u8Arr[j].display_name == nearSize + "p"){
                        videoLevel = j;
                        break;
                    }
                }
            } else {
            }
            return videoLevel;
        }

        this.changeLevel = function(){
            if(!this.hls || this.hls.isLive || this.hls.disableResize) return;

            var objID = this.go.loaderParams["_object"];
            var h = zeQuery('#mediaElementVideo' + objID).height();

            var level = this.getHlsLevel(h);
            if(this.hls.loadLevel != level){
                if(typeof this.hls.loadLevel === "undefined"){
                    var startTime = this.hls.MediaJSON.startTime || -1;
                    this.hls.startLoad(startTime);
                    this.hls.hlsStarted = true;
                } else {
                    this.hls.nextLevel = level;
                };
                this.hls.MediaJSON.version = this.hls.levelController.levels[level];
                this.go.onSkinEvent('video.change', this.hls.MediaJSON );
            }

        }

        this.playVR = function(mediaelement){
            var t = this;
            var width = zeQuery(mediaelement).width();
            var height = zeQuery(mediaelement).height();
            this.vrPlayer = new Kaleidoscope.Video({
                height: height,
                width: width,
                source: mediaelement,
                containerId: '#' + t.go.loaderParams["_object"] + ' .mejs-mediaelement',
                initialYaw: 180
            });
            this.vrPlayer.render();

            zeQuery(window).on("resize.vrPlayer", function(){
                var width = zeQuery(mediaelement).width();
                var height = zeQuery(mediaelement).height();
                t.vrPlayer.setSize({
                    width: width,
                    height: height
                })
            });
            return this.vrPlayer;
        }

        this.showOfflineStream = function(objID, message){
            zeQuery('#mediaElementVideoContainer' + objID).find(".mejs-controls").hide();
            var layers = zeQuery('#mediaElementVideoContainer' + objID).find(".mejs-layers");
            layers.find(".share-button").hide();
            layers.find(".mejs-overlay-play").hide();
            layers.append('<div class="mejs-offline-slate-bar"><span class="mejs-offline-slate-icon"><svg fill="#fff" height="100%" viewBox="0 0 24 24" width="100%"><path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"></path><circle cx="12" cy="12" r="3"></circle></svg></span><span class="mejs-offline-slate-messages"><div class="mejs-offline-slate-main-text">' + message + '</div></span></div>')
            if(!this.streamInterval){
                this.streamInterval = setInterval(function(){
                     self.checkStreamStatus();
                }, 10000)
            }

        }

        this.hideOfflineStream = function(objID){
            zeQuery('#mediaElementVideoContainer' + objID).find(".mejs-controls").show();
            var layers = zeQuery('#mediaElementVideoContainer' + objID).find(".mejs-layers");
            layers.find(".mejs-overlay-play").hide();
            layers.find(".share-button").show();
            layers.find(".mejs-offline-slate-bar").remove();
            setTimeout(function(){
                zeQuery('#mediaElementVideo' + objID).get(0).play().catch(function(err){ });
            }, 500)
        }

        this.setStreamStoppedTimer = function(){
            clearTimeout(self.streamStoppedtimer);
            self.streamStoppedtimer = setTimeout(function(){
                self.checkStreamStatus(true);
            },10000)

        }

        this.checkStreamStatus = function(stop){
            if(!this.isHlsSupported() || !this.go.args.liveid) return;
            var objID = this.go.loaderParams["_object"];
            var jsonlink = cincopa._AJAX + "json.aspx";
            jsonlink += "?wid=" + this.go.loaderParams["_id"];
            jsonlink += "&fid=" + this.go.args.fid;
            jsonlink += "&thumb=" + this.go.saveJSONPars.thumb;
            jsonlink += "&content=" + this.go.saveJSONPars.content;
            if (this.go.args.liveid)
            	jsonlink += "&liveid=" + this.go.args.liveid;
            jsonlink += "&fakeparam=" + Math.random();
            zeQuery.ajax({
                url: jsonlink,
                dataType: "json",
                success: function(data){
                    if(data.items.length && data.items[0]){
                        var status = data.items[0].live_status;
                        if(status == "stopped"){
                             if(stop){
                                 zeQuery('#mediaElementVideo' + objID).get(0).pause();
                                 if(self.hls) self.hls.stopLoad();
                                 setTimeout(function(){
                                    self.showOfflineStream(objID, "Live stream offline");
                                    zeQuery('.mejs-overlay-loading', self.$gallery).parent().hide();
                                    zeQuery('#mediaElementVideoContainer' + objID).find(".mejs-poster").show();
                                 }, 500)

                             }


                        } else if (status == "started"){
                            if(stop) {
                                self.setStreamStoppedTimer();
                                return;
                            }
                            clearInterval(self.streamInterval);
                            self.streamInterval = undefined;
                            self.hideOfflineStream(objID);
                            var videoSrc = zeQuery('.cp_pl_item[data-url]', self.$gallery).first().attr("data-url");
                            var data = self.sendDataCollector(videoSrc);
                            data.item.live_status = status;
                            if(self.hls){
                                self.hls.startLoad();
                                self.hls.hlsStarted = true;
                            } else {
                                self.playHLS(zeQuery('#mediaElementVideo' + objID).get(0), data, true);
                            }

                        }
                    }
                }

            })
        }



        this.do_play = function(data) {

            if(data.second == "postroll"){
                var lastIndex = zeQuery('#' + this.go.loaderParams["_object"] + '.mediaElement_playlist .cp_pl_item:last.current').length;
                if (lastIndex == 0){
                    this.player.playNextTrack(this.player);
                }
            } else {
                this.player.$media[0].play().catch(function(err){ });
            }
        }


		/****** ChromeCast ********/

        this.initializeCastApi = function () {
            //var applicationID = chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID;
            var applicationID = '52281FB8';
            var sessionRequest = new chrome.cast.SessionRequest(applicationID);
            var apiConfig = new chrome.cast.ApiConfig(sessionRequest, self.sessionListener,self.receiverListener);

            try{
                chrome.cast.initialize(apiConfig, self.onInitSuccess, self.onInitError);
            }catch(ex){
                console.log(ex);
            }

            chrome.cast.addReceiverActionListener(function(e,action){
                    var currentSkin = chrome.cast.cincopa.self;
                    if(action == "cast"){
                        var objID = currentSkin.go.loaderParams["_object"];
                        zeQuery(currentSkin.player.container[0]).find(".mejs-poster").css("background-image","url("+zeQuery('#' + objID + ' .cp_pl_item.current').data('poster').replace('o=1', 'o=4')+")");
                        zeQuery(currentSkin.player.container[0]).find(".mejs-poster img").attr("src",zeQuery('#' + objID + ' .cp_pl_item.current').data('poster').replace('o=1', 'o=4'));
                        zeQuery(currentSkin.player.container[0]).find(".mejs-poster").show();


                        currentSkin.player.pause();
                        setTimeout(function(){
                            zeQuery(currentSkin.player.container[0]).find('.mejs-playpause-button').removeClass("mejs-play").addClass("mejs-pause");
                            zeQuery(currentSkin.player.container[0]).parents(".mediaElement").find('.cp_pl_item.current').removeClass("pause");
                        },300);
                    }
                    if(action=="stop"){
                        currentSkin.stopMedia();
                    }
             });

        };


        this.sessionListener = function (e) {
            self.session = e;
            window.cincopa_temp_skin = chrome.cast.cincopa.self;
            chrome.cast.cincopa.self = self;

            if(self.session.media.length == 0){
               self.session.leave();
               return true;
            }

            if(zeQuery('.mediaElementVideoContainer').length > 1 ){
              delete self.session;
              return true;
            }

            var objID = self.go.loaderParams["_object"];
            self.player.setSrc(self.session.media[0].media.contentId);
            self.player.pause();

            zeQuery('#' + objID + ' [data-url].current').removeClass('current');
            zeQuery('#' + objID + ' [data-url="'+ self.session.media[0].media.contentId+'"]').addClass('current');

            if(self.session.media[0].playerState == 'PAUSED'){
                zeQuery(self.player.container[0]).parents(".mediaElement").find('.cp_pl_item.current').addClass("pause");
                zeQuery(self.player.container[0]).find('.mejs-playpause-button').removeClass("mejs-pause").addClass("mejs-play");

            }else if(self.session.media[0].playerState == 'PLAYING'){
                zeQuery(self.player.container[0]).find('.mejs-playpause-button').removeClass("mejs-play").addClass("mejs-pause");
            }

            /* set new poster */
            zeQuery(self.player.container[0]).find(".mejs-poster").css("background-image","url("+zeQuery('#' + objID + ' .cp_pl_item.current').data('poster').replace('o=1', 'o=4')+")");
            zeQuery(self.player.container[0]).find(".mejs-poster img").attr("src",zeQuery('#' + objID + ' .cp_pl_item.current').data('poster').replace('o=1', 'o=4'));
            zeQuery(self.player.container[0]).find(".mejs-poster").show();

            /* set chromecast info */
            var friendlyName = self.session.receiver.friendlyName;
            friendlyName = friendlyName.replace(/&#39;/g, '\'').replace(/&#40;/g, '\(').replace(/&#41;/g, '\)').replace(/&#34;/g, '\"').replace(/&#45;/g, '\-').replace(/&#44;/g, '\,').replace(/&#38;/g, '\&');
            zeQuery(self.player.container[0]).parent().find('.chromecast-logo-title').text(friendlyName);
            zeQuery(self.player.container[0]).parents(".mediaElementVideoContainer").addClass("cast-connected");

            clearInterval(this.interval);
            this.interval = setInterval(function () {
                if (typeof self.session !== "undefined") {
                    if (typeof self.session.media[0] !== "undefined") {
                        self.player.setCurrentTime(self.session.media[0].getEstimatedTime());
                    }
                }
            }, 1000);
            self.idle = true;
            self.session.media[0].addUpdateListener(function (e) {
                if (self.session.media[0].playerState == "IDLE") {
                    clearInterval(self.interval);
                    if(self.idle){
                        self.player.playNextTrack(self.player);
                    }
                    self.idle = true;
                } else if(self.session.media[0].playerState == "PLAYING"){
                    zeQuery(".mejs-playpause-button",this.$gallery).removeClass("mejs-play").addClass("mejs-pause");
                    zeQuery('.mediaElement_playlist a.cp_pl_item.current', this.$gallery).removeClass("pause");
                    self.idle = true;
                } else if(self.session.media[0].playerState == "PAUSED"){
                    zeQuery(".mejs-playpause-button",this.$gallery).removeClass("mejs-pause").addClass("mejs-play");
                    zeQuery('.mediaElement_playlist a.cp_pl_item.current', this.$gallery).addClass("pause");
                }
            });

        }

        this.receiverListener = function (e) {
            if (e === 'available') {
                zeQuery('.mediaElementVideoContainer').addClass('chromecastExist');
                zeQuery('.mediaElementVideoContainer .mejs-controls').resize();
                self.chromecastExist = true;
            }
            else {
                zeQuery('.mediaElementVideoContainer').removeClass('chromecastExist');
                self.stopMedia();
                zeQuery('.mediaElementVideoContainer .mejs-controls').resize();
                self.chromecastExist = false;
            }
        }

        this.onInitSuccess = function () {
            _trace("Initialization succeeded");
        }

        this.onInitError = function () {
            _trace("Initialization failed");
        }

        this.launchApp = function () {
            _trace("Launching the Chromecast App...");
            window.cincopa_temp_skin = chrome.cast.cincopa.self;
            chrome.cast.cincopa.self = self;
            chrome.cast.requestSession(self.onRequestSessionSuccess, self.onLaunchError);
        }

        this.onRequestSessionSuccess = function (e) {
            _trace("Successfully created session: " + e.sessionId);
            self.session = e;

            /* collect data for event */
            var current_url = zeQuery(self.player.media).data("currentplayingvideourl") || self.player.media.currentSrc;
            var sendData = self.sendDataCollector(current_url);
            self.go.onSkinEvent('chromecast.start', sendData);

            self.session.addUpdateListener(function(e){
                if(typeof self.session != "undefined"){
                    if(self.session.status == chrome.cast.SessionStatus.STOPPED){
                        self.stopMedia('leave');
                    }
                }
            })
            var startTime = (self.player.getCurrentTime()>30)?self.player.getCurrentTime():0;
            self.loadMedia(undefined,undefined,startTime);
        }

        this.onLaunchError = function (e) {

             chrome.cast.cincopa.self = window.cincopa_temp_skin;
             window.cincopa_temp_skin = null;

             _trace("Error connecting to the Chromecast.");
             var current_url = zeQuery(self.player.media).data("currentplayingvideourl") || self.player.media.currentSrc;
             var sendData = self.sendDataCollector(current_url);
             sendData.chromecast = {};
             sendData.chromecast.error  = e ;
             self.go.onSkinEvent('chromecast.error', sendData);
        }

        this.loadMedia = function (track, url , time) {
            if (typeof self.session === "undefined") {
                _trace("No session.");
                return;
            }
            var current_src = zeQuery(self.player.media).data("currentplayingvideourl") || self.player.media.currentSrc;
            var current_name = zeQuery('.cp_pl_item.current').find(".pl_item_name").text();
            var li = zeQuery('.cp_pl_item.current').parent("li").length? true : false;
            if (track == 'next'){
                if(li){
                    current_src = zeQuery('.cp_pl_item.current').parent().next().find("a").data('url');
                    current_name = zeQuery('.cp_pl_item.current').parent().next().find(".pl_item_name").text();
                } else{
                    current_src = zeQuery('.cp_pl_item.current').next().data('url');
                    current_name = zeQuery('.cp_pl_item.current').next().find(".pl_item_name").text();
                }


            } else if (track == 'prev'){
                if(li){
                    current_src = zeQuery('.cp_pl_item.current').parent().prev().find("a").data('url');
                    current_name = zeQuery('.cp_pl_item.current').parent().prev().find(".pl_item_name").text();
                } else{
                    current_src = zeQuery('.cp_pl_item.current').prev().data('url');
                    current_name = zeQuery('.cp_pl_item.current').prev().find(".pl_item_name").text();
                }
            } else if (track == 'url'){
                current_src = url;
            }

            var mediaInfo = new chrome.cast.media.MediaInfo(current_src);
            mediaInfo.contentType = '';
            mediaInfo.metadata = new chrome.cast.media.MusicTrackMediaMetadata();
            mediaInfo.metadata.title = current_name;
            var request = new chrome.cast.media.LoadRequest(mediaInfo);
            request.autoplay = true;
            if(typeof time != "undefined")
                request.currentTime = time;
            self.session.loadMedia(request, self.onMediaDiscovered.bind(this, 'loadMedia'), self.onLoadError);

        }

        this.pauseMedia = function () {
            self.session.media[0].pause();
        }

        this.playMedia = function () {
            self.session.media[0].play().catch(function(err){ });
        }

        this.changeVolume = function (volume) {
            self.session.setReceiverVolumeLevel(volume);
        }

        this.seekMedia = function (currenttime) {
            var request = new chrome.cast.media.SeekRequest();
            request.currentTime = currenttime;
            self.session.media[0].seek(request);
        }

        this.stopMedia = function (status) {
            if(typeof self.session == 'undefined') return true;

            var current_url = zeQuery(self.player.media).data("currentplayingvideourl") || self.player.media.currentSrc;
            var sendData = self.sendDataCollector(current_url);
            sendData.chromecast = {};
            sendData.chromecast.session_status = self.session.status;
            self.go.onSkinEvent('chromecast.stop', sendData);

            clearInterval(this.interval);
            if(status != 'leave' && typeof self.session  != 'undefined' && self.session.media.length ){
                self.session.media[0].stop();
            }
            zeQuery(self.player.container[0]).parents(".mediaElementVideoContainer").removeClass("cast-connected");

            if(status == 'leave'){
                self.session.leave();
                delete self.session;
            }else{
                delete self.session;
            }
            self.player.pause();
            zeQuery(".mejs-playpause-button",this.$gallery).removeClass("mejs-pause").addClass("mejs-play");
            zeQuery('.mediaElement_playlist a.cp_pl_item.current', this.$gallery).addClass("pause");
        }

        this.onMediaDiscovered = function (how, media) {
            var objID = this.go.loaderParams["_object"];
            self.player.pause();

            /* set new poster */
            zeQuery(self.player.container[0]).find(".mejs-poster").css("background-image","url("+zeQuery('#' + objID + ' .cp_pl_item.current').data('poster').replace('o=1', 'o=4')+")");
            zeQuery(self.player.container[0]).find(".mejs-poster img").attr("src",zeQuery('#' + objID + ' .cp_pl_item.current').data('poster').replace('o=1', 'o=4'));
            zeQuery(self.player.container[0]).find(".mejs-poster").show();

            /* set chromecast info */
            var friendlyName = self.session.receiver.friendlyName;
            friendlyName = friendlyName.replace(/&#39;/g, '\'').replace(/&#40;/g, '\(').replace(/&#41;/g, '\)').replace(/&#34;/g, '\"').replace(/&#45;/g, '\-').replace(/&#44;/g, '\,').replace(/&#38;/g, '\&');
            zeQuery(self.player.container[0]).parent().find('.chromecast-logo-title').text(friendlyName);
            zeQuery(self.player.container[0]).parents(".mediaElementVideoContainer").addClass("cast-connected");

            clearInterval(this.interval);
            this.interval = setInterval(function () {
                if (typeof self.session !== "undefined") {
                    if (typeof self.session.media[0] !== "undefined") {
                        self.player.setCurrentTime(self.session.media[0].getEstimatedTime());
                    }
                }
            }, 1000)
            var activeTrackIds = [0];
            var tracksInfoRequest = new chrome.cast.media.EditTracksInfoRequest(activeTrackIds);
            media.editTracksInfo(tracksInfoRequest, self.successTrackCallback, self.errorTrackCallback);
            media.addUpdateListener(function (e) {
                if (self.session.media[0].playerState == "IDLE") {
                    clearInterval(self.interval);
                    if(self.idle){
                        self.player.playNextTrack(self.player);
                    }
                    self.idle = true;
                } else if(self.session.media[0].playerState == "PLAYING"){
                    zeQuery(".mejs-playpause-button",this.$gallery).removeClass("mejs-play").addClass("mejs-pause");
                    zeQuery('.mediaElement_playlist a.cp_pl_item.current', this.$gallery).removeClass("pause");
                    self.idle = true;
                } else if(self.session.media[0].playerState == "PAUSED"){
                    zeQuery(".mejs-playpause-button",this.$gallery).removeClass("mejs-pause").addClass("mejs-play");
                    zeQuery('.mediaElement_playlist a.cp_pl_item.current', this.$gallery).addClass("pause");
                }
            });
        }
        this.onLoadError = function () {

            zeQuery(self.player.container[0]).parents(".mediaElementVideoContainer").removeClass("cast-connected");
            self.player.play().catch(function(err){});
        }

		/***** End ChromeCast ******/

		this.sendDataCollector = function(current_url){
            var sendData = {};
            


			if(this.go.args.group_by == true || this.go.args.group_by == 'on'){
                var itemIndex = zeQuery('.cp_pl_item[data-url="' + current_url + '"]', self.$gallery).parent().index();
                var elemTag = zeQuery('.cp_pl_item[data-url="' + current_url + '"] ', self.$gallery).attr('data-cat');
                if(elemTag){
					var elems =  this.getItems()[elemTag].filter(function(el){
						return el.content_type.indexOf("video") > -1 || (el.content_type.indexOf("audio") > -1 && self.go.args.audio_support);
					})
					sendData['item'] = elems[itemIndex];
				}
			}else{                
                var itemIndex = zeQuery('.cp_pl_item[data-url="' + current_url + '"]', self.$gallery).index();
				var elems = this.getItems().filter(function(el){
				    return el.content_type.indexOf("video") > -1 || (el.content_type.indexOf("audio") > -1 && self.go.args.audio_support);
				})
				sendData['item'] = elems[itemIndex];
			}
			return sendData;
		}

		this.getShareUrl = function(){
             var li = zeQuery('.cp_pl_item.current',this.gallery).parent("li").length? true : false;
             var index;
             if(li){
                 index = zeQuery('.cp_pl_item.current',self.gallery).attr("data-share");
             } else{
                 index = zeQuery('.cp_pl_item.current',self.gallery).index();
             }
             var shareUrl = "";
             var index_hash = location.href.indexOf('#');
             if(index_hash > -1){
                 shareUrl = location.href.substring(0, index_hash) + '#' + 'linkshare/' +this.go.loaderParams["_fid"]+'/'+(parseInt(index)+1);
             }else{
                 shareUrl = location.href + '#' + 'linkshare/' +this.go.loaderParams["_fid"]+'/'+(parseInt(index)+1);
             }
             return shareUrl;
        }
		
		this.buildChannelHashUrl = function(cat,index){
            /*  var li = zeQuery('.cp_pl_item.current',this.gallery).parent("li").length? true : false;
             var index;
             if(li){
                 index = zeQuery('.cp_pl_item.current',self.gallery).attr("data-share");
             } else{
                 index = zeQuery('.cp_pl_item.current',self.gallery).index();
             } */
             
             var cprtstatus = this.go.loaderParams["_id"]+'/channel/'+(parseInt(index)+1);
			 this.setUrlParam('cprtstatus', cprtstatus );
        }
        this.buildVideoPortalHashUrl = function(cat,rid){
            var cprportal = this.go.loaderParams["_id"]+'/'+cat+'/'+rid;
            this.setUrlParam('cprportal', cprportal );
        }

		this.runFromHashTag = function(){
			var self = this;
			var hashtag  = getParamFromUrl('cprtstatus');
			if(hashtag){							
				var objID = self.go.loaderParams["_object"];
				var galFId = decodeURIComponent(self.go.loaderParams["_fid"]);
				hashtag =  hashtag.replace(self.go.loaderParams["_id"]+'/channel/','');	
				var isNumber = false;
				if(isNaN(hashtag) == false){
					hashtag = parseInt(hashtag) - 1;
					isNumber = true;
				}
				
				/* clear timer object that added for videoThumbnail video load */
				if(self.plsTimerObject){
					clearTimeout(self.plsTimerObject);
				}
				setTimeout(function(){
					if(isNumber) {
						if(zeQuery('#'+objID+' .cp_pl_item[data-share ='+ hashtag +']').length){							
							zeQuery('#'+objID+' .cp_pl_item[data-share ='+ hashtag +']')[0].click(); 
						}else if (zeQuery('#'+objID+' .cp_pl_item[data-index ='+ hashtag +']').length) {
							zeQuery('#'+objID+' .cp_pl_item[data-index ='+ hashtag +']')[0].click();
						}
					}else{
						if(zeQuery('#'+objID+' .cp_pl_item[data-rid ='+ hashtag +']').length){							
							zeQuery('#'+objID+' .cp_pl_item[data-rid ='+ hashtag +']')[0].click(); 
						}
					}
					
				},100);				
			}
        }
        this.runVideoPortalFromHashTag  = function(){
            var self = this;
            var hashtag  = getParamFromUrl('cprportal');
            if(hashtag){	
                var objID = self.go.loaderParams["_object"];
                hashtag =  hashtag.replace(self.go.loaderParams["_id"]+'/','');
                var  urlParams = hashtag.split('/');



                setTimeout(function(){
					if(urlParams[0]) {
						if(zeQuery('#'+objID+' .mediaElement_categories_tab[data-category="'+ urlParams[0] +'"]').length){							
							zeQuery('#'+objID+' .mediaElement_categories_tab[data-category="'+ urlParams[0] +'"]')[0].click();
						}
                    }
                    
                    if(urlParams[1]) {
						if(zeQuery('#'+objID+' .playlistContainer div[data-cat="'+ self.getBeautyNameOfTag(urlParams[0]) +'"] a[data-rid="'+ self.getBeautyNameOfTag(urlParams[1]) +'"]').length){							
							zeQuery('#'+objID+' .playlistContainer div[data-cat="'+ self.getBeautyNameOfTag(urlParams[0]) +'"] a[data-rid="'+ self.getBeautyNameOfTag(urlParams[1]) +'"]')[0].click();
						}
					}
					
				},100);		

            }
        }
		this.on_cp_lightbox_close = function(){
			this.setUrlParam('cprtstatus');
		}
		
		this.on_cp_lightbox_open = function(index){		
            if(getParamFromUrl('cprtstatus') == null){
                self.userInteraction = true;
            }
			if(!getParamFromUrl('cprtstatus')){
				index = typeof index == 'undefined' ? '/':'/'+index;
				this.setUrlParam('cprtstatus', this.go.loaderParams["_id"]+'/channel'+index);
				this.runFromHashTag();
			}
		}
		
		this.on_cp_lightbox_init = function(){	
			if( this.go.url_params && this.go.url_params['cprtstatus'] && this.go.url_params['cprtstatus'].indexOf('channel') > -1){
				if( this.go.url_params['cprtstatus'].indexOf(this.go.loaderParams["_id"]) > -1){
					this.go.startPopupSkin();
				}
				
			}
		}
		
		this.setUrlParam = function(key,value){
			
			var correctWindow = this.go.getContentWindow();
			
			if (correctWindow.history.replaceState) {
				var newurl  = correctWindow.location.pathname + '?'+ insertParam(key, value );
				if( correctWindow.location.hash){
					newurl += correctWindow.location.hash;
				}
				correctWindow.history.replaceState({'vportal': this.go.args.new_video_portal}, correctWindow.document.title, newurl);
			}
			function insertParam(key, value) {
				key = escape(key); 
				if(typeof value != 'undefined'){
					value = escape(value);
				}else{
					value = null;
				}
				

				var kvp = correctWindow.document.location.search.substr(1).split('&');
				if (kvp == '') {
					if(value === null) return '';
					return key + '=' + value;
				}
				else {

					var i = kvp.length; var x; while (i--) {
						x = kvp[i].split('=');
						if(x[0] == key && value === null){
							kvp[i] = 'marktodelete';
							break;
						}

						if (x[0] == key ) {
							x[1] = value;
							kvp[i] = x.join('=');
							break;
						} 
					}
					
					kvp = kvp.filter(function (el) {
					  return el != 'marktodelete';
					});
					
					if (i < 0 && value !== null) {kvp[kvp.length] = [key, value].join('='); }
					
					return kvp.join('&');
				}
			}
			
        }
        this.setHash = function(param, value) {

            var l_hash = location.hash;
            if (l_hash != '') {
                var filter_arr,filter_val;
                if (l_hash.indexOf(param) > -1) {
                    arr_hash = l_hash.split('|');
                    $.each(arr_hash, function (i, v) {
                        if (v.indexOf(param) > -1) {
                            filter_arr = v.split('=');
                            filter_val = filter_arr[1];
                            return false;
                        }
                    });
                    if (value != "") {
                        new_loc_hash = l_hash.replace(param + "=" + filter_val, param + "=" + value);
                    } else {
                        var sIndex = l_hash.indexOf(param + "=" + filter_val);
                        new_loc_hash = l_hash;
                        var replaceVal = param + "=" + filter_val;
                        if (sIndex > -1) {
                            if (l_hash.charAt(sIndex - 1) === "|") {
                                new_loc_hash = l_hash.substring(0, sIndex - 1) + l_hash.substring(sIndex, l_hash.length);
                            } else if (l_hash.charAt(sIndex + replaceVal.length) === "|") {
                                new_loc_hash = l_hash.substring(0, sIndex + replaceVal.length) + l_hash.substring(sIndex + replaceVal.length + 1, l_hash.length);
                            }
                        }
                        new_loc_hash = new_loc_hash.replace(param + "=" + filter_val, "");
                    }
    
                   /* if ((param == "cat" || param == "search") && value != "") {
                        if (l_hash.indexOf("page") > -1) {
                            $.each(arr_hash, function (i, v) {
                                if (v.indexOf("page") > -1) {
                                    page_arr = v.split('=');
                                    page_val = page_arr[1];
                                    return false;
                                }
                            });
                            new_loc_hash = new_loc_hash.replace("page=" + page_val, "page=1");
                        }
                    } */
                    location.hash = new_loc_hash;
                } else {
                    new_loc_hash = l_hash;
                    /*if ((param == "cat" || param == "search") && value != "") {
                        if (l_hash.indexOf("page") > -1) {
                            arr_hash = l_hash.split('|');
                            $.each(arr_hash, function (i, v) {
                                if (v.indexOf("page") > -1) {
                                    page_arr = v.split('=');
                                    page_val = page_arr[1];
                                    return false;
                                }
                            });
                            new_loc_hash = l_hash.replace("page=" + page_val, "page=1");
                        }
                    }*/
                    if (value != "")
                        location.hash = new_loc_hash + '|' + param + '=' + value;
                }
            } else {
                if (value != "")
                    location.hash = '#' + param + '=' + value;
            }
        }

        this.build_bottom_share_layer = function(){
            var shareUrl = this.getShareUrl();
            shareUrl = encodeURIComponent(shareUrl);
            var mediaSource = {
                'fb': "http://www.facebook.com/share.php?u={ADDRESS}",
                'twitter': "http://twitter.com/home?status={ADDRESS}",
                'linkedin': "http://www.linkedin.com/shareArticle?mini=true&url={ADDRESS}",
            };
            var html = '';
            
             
                html += '<ul class="share-icons">' +
                '<li class="ze_fb"><span class="fb-share" onclick="window.open(\'' + mediaSource['fb'].replace('{ADDRESS}', shareUrl) + '\', \'_blank\')"><i class="icon-fb"></i></span></li>' +
                '<li class="ze_tw"><span class="tw-share" onclick="window.open(\'' + mediaSource['twitter'].replace('{ADDRESS}', shareUrl) + '\', \'_blank\')"><i class="icon-twitter"></i></span></li>' +
                '<li class="ze_li"><span class="li-share" onclick="window.open(\'' + mediaSource['linkedin'].replace('{ADDRESS}', shareUrl) + '\', \'_blank\')"><i class="icon-linkedin"></i></span></li>' +
                '</ul>';
            

            return html;
        }
		this.videosLength = function(){
			var duration= 0, items =  this.go.MediaJSON.items
			for(var i = 0; i < items.length; i++ ){
				if(items[i]["content_type"].indexOf('video') > -1 || ( items[i]["content_type"].indexOf('audio') > -1 && items[i].duration && self.go.args.audio_support )){
					duration += hmsToSecondsOnly(items[i].duration);
				}
			}
			return '<div class="mediaelement_videos_length"> '+
				'<span>' + (this.go.args.summary_text ? this.go.args.summary_text : "") +  '</span>'+
				'<span> ' +   Math.floor(duration / 60) + ':' + duration % 60  + ' min </span>'+ 
			'</div>';
			
		}

		this.annotationExists = function(){
		    var exist = false;
		    var json = this.getItems();
		    if(this.go.args.group_by != true || this.go.args.group_by == 'on'){

		    } else {
		        for(var i = 0; i < json.length; i++){
                    var timeline = json[i].timeline;
                    if(timeline){
                        eval('var timeLineObj = ' + decodeXml(timeline));
                        if(typeof timeLineObj.annotation != "undefined" || timeLineObj.calltoaction != "undefined"){
                            exist = true;
                            break;
                        }
                    }

                }
		    }

            return exist;
		}

        this.inBetween = function (str, start, end)
        {
            var i = 0;
            if (start != null && start != "")
            {
                i = str.indexOf(start);
                if (i == -1)
                    return "";
            }
            else
                start = "";

            var x = str.indexOf(end, i + start.length);
            if (x == -1 || end == null || end == "")
                return str.substr(i + start.length);

            return str.substr(i + start.length, x - i - start.length);
        }

        this.shuffleItems = function(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }

          return array;
        }
        this.sortByTag = function (arrayP) {
     
            var that = this;
            var newSortedByTags = {}
            newSortedByTags.length = 0;
            newSortedByTags.sortedByTag = true;
            var prerollVideo = {};
            var postrolVideo = {};
            var tagsOrder = [];
            for (var i = 0; i < arrayP.length; i++) {
                if(arrayP[i].prepostrollVideo && this.go.args.rollFrequency != "on_each" && this.go.args.rollFrequency != undefined){
                    if(arrayP[i].preVideo){
                        prerollVideo =  arrayP[i];
                    }
                    if(arrayP[i].postVideo) {
                        postrolVideo = arrayP[i];
                    }
                    continue
                }
                var tags = '';
                if(this.go.args.cincopaTV) {
                    tags = 'cincopaTV'
                } else {
                     tags = arrayP[i].tags.substring(1, arrayP[i].tags.length - 1);               
                }
                tags = tags.split(',');
                for (var p = 0; p < tags.length; p++) {
                    
                    
                    var tag = tags[p], isIn = false, founded = [];
                    if (tag == '')
                        tag = 'no-tag';
                    
                    var groupedTags = this.go.args.group_video_tag.toLowerCase().split(',');

                    var filtered_arr = zeQuery.grep(groupedTags, function( n, i ) {
                        var val = n.replace(/\(.*?\)/g,'');
                        return val == tag;
                    });

                    if(filtered_arr.length){
                        tag = tag;//this.go.args.group_video_tag.substr(this.go.args.group_video_tag.toLowerCase().indexOf(tag),tag.length);
                    }else{
                        if(this.go.args.group_video_tag != "")
                            continue;
                    }
                    if(typeof newSortedByTags[tag] != 'undefined' ){
                        newSortedByTags[tag].push(arrayP[i]);
                    }else{
                        tagsOrder.push(tag);
                      newSortedByTags[tag] = [];
                      newSortedByTags[tag].push(arrayP[i]);
                      newSortedByTags.length++;
                    }
                }
            }
            var firstTag = '';
            var lastTag = '';
            tagsOrder = tagsOrder.sort();
            this.allOrderTags = tagsOrder;
            if(tagsOrder.length) {
                firstTag = tagsOrder[0];
                lastTag = tagsOrder[tagsOrder.length-1];

            }
            if( this.go.args.prerollVideoUrl || this.go.args.postrollVideoUrl) {
                var firstNewArray = [];
                var lastNewArray = []

                if(this.go.args.rollFrequency != "on_each" && this.go.args.rollFrequency != undefined) {
                    var index = 0
                    for(var i = 0; i < newSortedByTags[firstTag].length; i++){
                        if( this.go.args.prerollVideoUrl && i == 0){
                            firstNewArray[0] = prerollVideo;
                            index++
                        }
                        firstNewArray[index] = newSortedByTags[firstTag][i];
                        index++
                        if( this.go.args.postrollVideoUrl && this.go.args.rollFrequency == "on_first" && i == 0){
                            
                            firstNewArray[2] = postrolVideo;
                            index++
                        }
                    }
                    newSortedByTags[firstTag] = firstNewArray;
                }

                if(this.go.args.rollFrequency == 'on_first_last') {
                    var index = 0
                    for(var i = 0; i < newSortedByTags[lastTag].length; i++){
                        
                        lastNewArray[index] = newSortedByTags[lastTag][i];
                        if( this.go.args.postrollVideoUrl){
                            lastNewArray[newSortedByTags[lastTag].length] = postrolVideo;
                        }
                        index++;
                    }
                    newSortedByTags[lastTag] = lastNewArray;
                }
                   
                    


                }

            

            if( this.go.args.tags_order != 'none' &&  this.go.args.tags_order != undefined){

                var sorted = {}, key, arr = [];
                for (key in newSortedByTags) {
                    if (newSortedByTags.hasOwnProperty(key)) {
                        arr.push(key);
                    }
                }
                if(this.go.args.tags_order == "order_asc"){
                    arr.sort(function(a, b){
                        var keyAIndex = a.toLowerCase();
                        var keyBIndex = b.toLowerCase();
                        if ( keyAIndex > keyBIndex ) //sort string ascending
                            return 1 ;
                        if ( keyAIndex < keyBIndex )
                            return -1 ;
                        return 0 //default return value (no sorting)
                    });
                } else if (this.go.args.tags_order == "order_desc"){
                    arr.sort(function(a, b){
                        var keyAIndex = a.toLowerCase();
                        var keyBIndex = b.toLowerCase();
                        if ( keyAIndex < keyBIndex ) //sort string ascending
                            return 1 ;
                        if ( keyAIndex > keyBIndex )
                            return -1 ;
                        return 0 //default return value (no sorting)
                    });
                }else if (this.go.args.tags_order == "order_tags" && this.go.args.group_video_tag != ''){
                    var gr_video_tags = this.go.args.group_video_tag.toLowerCase().split(",");

                    gr_video_tags = gr_video_tags.map(function(t){
                        return t.split("(")[0];
                    })
                    arr.sort(function(a, b){
                        var keyAIndex = gr_video_tags.indexOf(a);
                        var keyBIndex = gr_video_tags.indexOf(b);
                        if ( keyAIndex > keyBIndex )
                            return 1 ;
                        if ( keyAIndex < keyBIndex )
                            return -1 ;
                        return 0 //default return value (no sorting)
                    });
                } else {
                    arr.sort()
                }

                this.go.sortedItemsKeys = arr;
                for (key = 0; key < arr.length; key++) {
                    sorted[arr[key]] = newSortedByTags[arr[key]];
                }


                return sorted;
            } else {
                this.go.sortedItemsKeys = Object.keys(newSortedByTags);
                return newSortedByTags;
            }
        }

        this.resizePlayer = function(){
            var container = zeQuery('.mejs-container',this.$gallery);
            var objID = this.go.loaderParams["_object"];
            var className = "";
            switch(true){
                case (container.width() <= 500):
                    className = "wS";
                    break;
                case (container.width() > 500 && container.width() < 768):
                    className = "wM";
                    break;
                case (container.width() >= 768 && container.width() <= 1024):
                    className = "wL";
                    break;
                case (container.width() > 1024):
                    className = "wXL";
                    break;
            }
            zeQuery('#' + objID).removeClass("wS wM wL wXL");
            zeQuery('#' + objID).addClass(className);
            
            var subtitlesContainer = zeQuery('#' + objID + " .mejs-captions-position");
            
            if(subtitlesContainer.length){
                var container = zeQuery('.mejs-container',this.$gallery);
                var controls_h = zeQuery('.mejs-controls',this.$gallery).height();
                if(container.hasClass("ze-mobile-video-container")){
                  //  container.removeClass("ze-mobile-video-container")
                    var controls_h = zeQuery('.mejs-controls',this.$gallery).height();
                   // container.addClass("ze-mobile-video-container")
                }
                if(controls_h > 0){
                    subtitlesContainer.css("bottom", controls_h + 15)
                }
               
               
            }
        }
        this.onEsc = function(e){
          var self = this;
			if(typeof self.go.args.netflix_popup != 'undefined' && self.go.args.netflix_popup){
				e.preventDefault();
				e.stopPropagation();
				if (e.keyCode == 27) {
                    self.onEsc.activeListener = false;
					zeQuery(window).off('keyup.netflix_popup');
					zeQuery('.netflix_close_btn', self.$gallery).click();
					
				}
			}
		}

        /* function for adjusting controls with a lot of buttons*/
        this.adjustControls = function(){
            if(this.go.args.css_version != '1.1' || this.go.args.auto_resize) return;

            function intersect(a, b) {
                var d = {};
                var results = [];
                for (var i = 0; i < b.length; i++) {
                    d[b[i]] = true;
                }
                for (var j = 0; j < a.length; j++) {
                    if (d[a[j]])
                        results.push(a[j]);
                }
                return results;
            }
            var objID = this.go.loaderParams["_object"];
            var controls =  zeQuery(".mejs-controls", this.$gallery);
            var container =  zeQuery(".mejs-container", this.$gallery);

            var buttons = [];
            controls.find(">div").each(function(){
                if(zeQuery(this).css("position") != "absolute"){
                    buttons.push(zeQuery(this));
                }
            });

            var contW = container.width() - 10;

            var buttonsOrder = [
                "mejs-playpause-button",
                "mejs-player-logo-button",
                "mejs-fullscreen-button",
                "mejs-prevtrack-button",
                "mejs-nexttrack-button",
                "mejs-gear-button",
                "mejs-volume-button",
                "mejs-playlist-button",
                "mejs-time",
                "mejs-shuffle-button",
                "mejs-loop-button",
                "mejs-player-chrome-cast-button",
                "mejs-speed-button",
                "mejs-captions-button",
                "mejs-jump-back",
                "mejs-jump-forward"

            ];

            var buttonsReverseOrder = buttonsOrder.reverse();
            for(var i = 0; i < buttons.length; i++){
                buttons[i].removeClass("mejs-force-hidden-button");
            }
            var sum = 0;
            zeQuery(buttons).each(function(){
                sum += zeQuery(this).outerWidth();
            });
            var freeSpace = contW - sum;
            if(freeSpace < 0){
                var fS = Math.abs(freeSpace);
                var sumOfHiddenButtons = 0;
                for(var j = 0; j < buttonsReverseOrder.length; j++){
                    var btn = controls.find("." + buttonsReverseOrder[j]);
                    if(btn.css("position") == "absolute") continue;
                    sumOfHiddenButtons += btn.outerWidth();
                    btn.addClass("mejs-force-hidden-button");
                    if(sumOfHiddenButtons >= fS){
                        break;
                    }
                }
            };
            var newControlsHeight = zeQuery(".mejs-controls", this.$gallery).outerHeight(true) +  zeQuery(".mejs-time-rail", this.$gallery).outerHeight(true);

            zeQuery('#adjustControls_'+objID).remove();
            zeQuery('<style id="adjustControls_'+objID+'">').text(
              "#" + objID +":hover .mejs-chapters-wrap{  height:calc(100% - "+newControlsHeight+"px) !important}"+
              "#" + objID +" .mejs-chapters-wrap{  height:100% !important}"+
              "#" + objID +".ze-mouseleave .mediaElementVideoContainer .mejs-container .mejs-layers.mejs-show-chapters .mejs-chapters-wrap{height:100%!important}"+
              "#" + objID +" .mediaElementVideoContainer .mejs-container.ze-show-control-bar .mejs-layers.mejs-show-chapters .mejs-chapters-wrap,"+ 
              "#" + objID +" .mejs-container.ze-autohide.ze-show-control-bar .mejs-layers.mejs-show-chapters .mejs-chapters-wrap{height:calc(100% - "+newControlsHeight+"px) !important}"
              ).insertBefore(zeQuery('#' + objID));

        }

        this.video_is_type_stored = function (json_item) {
            var storage = json_item.storage;
            var compareValue = 19;
            if (this.go.args.storyboard == 'small') {
                compareValue = 18;
            }
            return  (((storage & (1 << compareValue)) > 0) ? true : false);
        }
		
		this.stringToSec = function(str){	
            		if (str=="") 
                    return ""
			if(typeof this.go.args.netflix_popup != 'undefined' && this.go.args.netflix_popup ){
					var p = str.split(':'),
						s = 0, m = 1;

					while (p.length > 0) {
						s += m * parseInt(p.pop(), 10);
						m *= 60;
					}
					if( s < 60 ){
						return s+' sec';

					}else{
						return parseInt(s/60)+ ' min';
					}
					return s;
				
            }else {                
				if(parseInt(str.split(':')[0]) === 0){
                    var  strArr = str.split(":").slice(1);
                    str = strArr.join(":");
                }
                return str;
			}
			
        }
        
        
        this.playlistHeight = function(checked) {
            /* temp fix */
            if(zeQuery('.playlistContainer',this.$gallery).css('overflow') == 'visible' && checked){
                zeQuery('.playlistContainer',this.$gallery).addClass('oldCourseSkin');
            }
            if( zeQuery('.playlistContainer',this.$gallery).hasClass('oldCourseSkin') ){
                return;
            }
            var wnd = self.getWindow();
            if(wnd.innerWidth <= 800){
                zeQuery('.playlistContainer',this.$gallery).css({'height': 'auto','overflow': 'visible'});
            }else {
                var titleHeight = zeQuery('.mediaElement_playlist_title',this.$gallery).outerHeight(true);
                var height = zeQuery('.mediaElementVideoContainer',this.$gallery).outerHeight(true) - titleHeight - 60;
                var oldHeight = zeQuery('.playlistContainer',this.$gallery).outerHeight(true);
                if(oldHeight < height  || checked) {
                    zeQuery('.playlistContainer',this.$gallery).css({'height': height+'px','overflow': 'auto'})
                }
               
            }
        }
        function escapeQueryString(str) {
            return str.replace(/\?/gi, '%3F').replace(/&/gi, '%26').replace(/=/gi, '%3D');
        }
        var escaped_one_to_xml_special_map = {
            '&amp;': '&',
            '&quot;': '"',
            '&lt;': '<',
            '&gt;': '>'
        };

        function decodeXml(string) {
            return string.replace(/(&quot;|&lt;|&gt;|&amp;)/g,
                    function (str, item) {
                        return escaped_one_to_xml_special_map[item];
                    });
        }
        function hmsToSecondsOnly(str) {
            if(typeof str == 'undefined'){
                return '';
            }
            var p = str.split(':'),
                    s = 0, m = 1;

            while (p.length > 0) {
                s += m * parseInt(p.pop(), 10);
                m *= 60;
            }

            return s;
        }
        function toHHMMSS(duration) {
            var seconds = Math.floor(duration),
                    hours = Math.floor(seconds / 3600);
            seconds -= hours * 3600;
            var minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60;

            if (hours < 10) {
                hours = "0" + hours;
            }
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            return hours + ':' + minutes + ':' + seconds;
        }

        function orderByTime(timeline) {
            var newOrderedArray = [];
            for (var i in timeline) {
                newOrderedArray.push({time: i, value: timeline[i]});
            }
            newOrderedArray.sort(function (a, b) {
                return hmsToSecondsOnly(a.time) - hmsToSecondsOnly(b.time);
            })
            return newOrderedArray;

        }



        function getHashtag(preffix){
			if(typeof preffix == 'undefined') preffix = 'linkshare';
            var url = location.href;
            hashtag = (url.indexOf('#'+ preffix) !== -1) ? decodeURI(url.substring(url.indexOf('#'+preffix)+1,url.length)) : false;
            return hashtag;
        };
		
		function getParamFromUrl(parameterName,url){			
			var result = null,
            tmp = [],
            items;
            if(typeof url !='undefined'){
                items  = url.substr(1).split("&")
            }else{
                items = location.search.substr(1).split("&");
            }			
			for (var index = 0; index < items.length; index++) {
				tmp = items[index].split("=");
				if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
			}
			return result;
			
        }
        function getUrlVars(url) {
            var vars = {};
            var href = url || window.location.href;
            var parts = href.replace(/[#|]+([^=|]+)=([^|]*)/gi, function (m, key, value) {
                vars[key] = value;
            });
            return vars;
        }

        function isHistorySupported() {
            return window.history && window.history.pushState;
        }
		
        function base64Encode(text){
            var BASE64_KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            for (var t = 0, n = ""; t < text.length;) {
                var r = text.charCodeAt(t++),
                    a = text.charCodeAt(t++),
                    u = text.charCodeAt(t++),
                    l = r >> 2,
                    o = (3 & r) << 4 | a >> 4,
                    s = (15 & a) << 2 | u >> 6,
                    i = 63 & u;
                isNaN(a) ? s = i = 64 : isNaN(u) && (i = 64), n = n + BASE64_KEY_STR.charAt(l) + BASE64_KEY_STR.charAt(o) + BASE64_KEY_STR.charAt(s) + BASE64_KEY_STR.charAt(i)
            }
            return n
        }

        function is_ie(){
            var ua = window.navigator.userAgent;
            var edge = ua.indexOf('Edge/');
            var msie = ua.indexOf("MSIE ");
            if (msie > 0)  // If Internet Explorer, return version number
            {
                return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
            } else if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                return 11;
            } else if (edge > 0) {
                return (parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10));
            }

            return false;
        }

        function is_ie_hls_supported() {

            var ua = window.navigator.userAgent;

            var edge = ua.indexOf('Edge/');

            var msie = ua.indexOf("MSIE ");

            if (msie > 0)  // If Internet Explorer, return version number
            {
                var ver =  parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
                if(ver < 11) return false;

            } else if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                if(navigator && (/(Windows 8.1|Windows NT 6.3)/.test(navigator.appVersion) || /(Windows 10.0|Windows NT 10.0)/.test(navigator.appVersion)))
                    return true;
            } else if (edge > 0) {
                return true
            }

            return false;

        }
    }
}
/* exception2 //rtcdn.cincopa.com/fpskins/mediaelement/1/skin.js - err illegal character */
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/zequery-1.9.1.min.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/zequery-1.9.1.min.js"] = true;
if (!window.zeQuery ) /* zeQuery v1.9.1 | (c) 2005, 2012 zeQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
if(!window.zeQuery){(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.zeQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e){return this}if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n){return !n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n)){for(i in n){b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i])}}return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2]){return r.find(e)}this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++){if(null!=(o=arguments[u])){for(i in o){e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r))}}}return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.zeQuery===b&&(e.zeQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body){return setTimeout(b.ready)}b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e)){return !1}try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf")){return !1}}catch(n){return !1}var r;for(r in e){}return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e){return !1}return !0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e){return null}"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n){return null}try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++){if(r=t.apply(e[i],n),r===!1){break}}}else{for(i in e){if(r=t.apply(e[i],n),r===!1){break}}}}else{if(a){for(;o>i;i++){if(r=t.call(e[i],i,e[i]),r===!1){break}}}else{for(i in e){if(r=t.call(e[i],i,e[i]),r===!1){break}}}}return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g){return g.call(t,e,n)}for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++){if(n in t&&t[n]===e){return n}}}return -1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r){for(;r>o;o++){e[i++]=n[o]}}else{while(n[o]!==t){e[i++]=n[o++]}}return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++){r=!!t(e[o],o),n!==r&&i.push(e[o])}return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a){for(;o>i;i++){r=t(e[i],i,n),null!=r&&(s[s.length]=r)}}else{for(i in e){r=t(e[i],i,n),null!=r&&(s[s.length]=r)}}return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r){b.access(e,n,u,r[u],!0,a,s)}}else{if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n)){for(;l>u;u++){n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)))}}}return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n){if(n=b.Deferred(),"complete"===o.readyState){setTimeout(b.ready)}else{if(o.addEventListener){o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1)}else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}}}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++){if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1){u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return !u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return !l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return !!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1){for(s=Array(r),u=Array(r),l=Array(r);r>t;t++){n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i}}return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length){return{}}s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in {submit:!0,change:!0,focusin:!0}){d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1}return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t){return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++){delete o[t[r]]}if(!(n?$:b.isEmptyObject)(o)){return}}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"zeQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType){return !1}var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return !t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++){i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]))}b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else{r=t}}return r}function $(e){var t;for(t in e){if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t){return !1}}return !0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--){r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u))}return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e)){return this.each(function(t){b(this).addClass(e.call(this,t,this.className))})}if(u){for(t=(e||"").match(w)||[];s>a;a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++]){0>r.indexOf(" "+i+" ")&&(r+=i+" ")}n.className=b.trim(r)}}}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e)){return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))})}if(u){for(t=(e||"").match(w)||[];s>a;a++){if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++]){while(r.indexOf(" "+i+" ")>=0){r=r.replace(" "+i+" "," ")}}n.className=e?b.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++]){u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}}else{(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")}})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++){if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0){return !0}}return !1},val:function(e){var n,r,i,o=this[0];if(arguments.length){return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set" in r&&r.set(this,o,"value")!==t||(this.value=o))})}if(o){return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get" in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return !t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++){if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o){return t}a.push(t)}}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u){return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get" in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set" in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType){while(n=o[i++]){r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)}}},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s){return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set" in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get" in o&&null!==(i=o.get(e,n))?i:e[n]}},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return !0}function ot(){return !1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--){s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0}e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--){if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--){a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a))}u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else{for(d in c){b.event.remove(e,d+t[l],n,r,!0)}}}b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode){h.push(l),f=l}f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped()){n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault()}if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped()){(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type)){for(;l!=this;l=l.parentNode||this){if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++){i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i)}o.length&&s.push({elem:l,handlers:o})}}}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando]){return e}var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--){n=r[t],e[n]=a[n]}return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus){try{return this.focus(),!1}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e){this.on(a,n,r,e[a],o)}return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1){i=ot}else{if(!i){return this}}return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj){return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this}if("object"==typeof e){for(o in e){this.off(o,n,e[o])}return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++){if(this[t]===e){return t}}return -1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++]){n.push(t)}return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return !1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e){return n}if(1!==(s=t.nodeType)&&9!==s){return[]}if(!d&&!r){if(i=J.exec(e)){if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode){return n}if(o.id===a){return n.push(o),n}}else{if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a){return n.push(o),n}}}else{if(i[2]){return H.apply(n,q.call(t.getElementsByTagName(e),0)),n}if((a=i[3])&&T.getByClassName&&t.getElementsByClassName){return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}}}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--){l[u]=g+dt(l[u])}m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v){try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++]){1===n.nodeType&&r.push(n)}return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t){while(t=t.parentNode){if(t===e){return !0}}}return !1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t){return u=!0,0}if(!o||!a){return e===n?-1:t===n?1:o?-1:a?1:0}if(o===a){return ut(e,t)}r=e;while(r=r.parentNode){s.unshift(r)}r=t;while(r=r.parentNode){l.unshift(r)}while(s[i]===l[i]){i++}return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t))){try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType){return n}}catch(r){}}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++){t===e[r-1]&&(i=n.push(r))}while(i--){e.splice(n[i],1)}}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r){return r}if(n){while(n=n.nextSibling){if(n===t){return -1}}}return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--){n[i=o[a]]&&(n[i]=!(r[i]=n[i]))}})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent){return e.textContent}for(e=e.firstChild;e;e=e.nextSibling){n+=o(e)}}else{if(3===i||4===i){return e.nodeValue}}}else{for(;t=e[r];r++){n+=o(t)}}return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return !0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return !!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g]){if(s?p.nodeName.toLowerCase()===y:1===p.nodeType){return !1}}h=g="only"===e&&!h&&"nextSibling"}return !0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}}else{if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N){f=l[1]}else{while(p=++d&&p&&p[g]||(f=d=0)||h.pop()){if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t)){break}}}}return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--){i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--){(o=a[s])&&(e[s]=!(t[s]=o))}}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do{if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang){return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")}}while((t=t.parentNode)&&1===t.nodeType);return !1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType){return !1}}return !0},parent:function(e){return !i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2){e.push(n)}return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2){e.push(n)}return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;){e.push(r)}return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;){e.push(r)}return e})}};for(n in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){i.pseudos[n]=lt(n)}for(n in {submit:!0,reset:!0}){i.pseudos[n]=ct(n)}function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c){return t?0:c.slice(0)}s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter){!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length))}if(!n){break}}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++){r+=e[t].value}return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i]){if(1===t.nodeType||o){return e(t,n,r)}}}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i]){if((1===t.nodeType||o)&&e(t,n,s)){return !0}}}else{while(t=t[i]){if(1===t.nodeType||o){if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r){return u===!0}}else{if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0){return !0}}}}}}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--){if(!e[i](t,n,r)){return !1}}return !0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++){(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s))}return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--){(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}}if(o){if(i||e){if(i){l=[],c=y.length;while(c--){(p=y[c])&&l.push(m[c]=p)}i(null,y=[],l,u)}c=y.length;while(c--){(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}}else{y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)}})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return !a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++){if(n=i.relative[e[u].type]){f=[ht(gt(f),n)]}else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++){if(i.relative[e[r].type]){break}}return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||0.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++]){if(m(h,u,c)){f.push(h);break}}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++]){m(x,y,u,c)}if(s){if(v>0){while(b--){x[b]||y[b]||(y[b]=L.call(f))}}y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--){o=vt(t[n]),o[x]?r.push(o):i.push(o)}o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++){st(e,t[r],n)}return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t){return n}e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type]){break}if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e){return H.apply(n,q.call(r,0)),n}break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e){return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++){if(b.contains(r[t],this)){return !0}}}))}for(n=[],t=0;i>t;t++){b.find(e,this[t],n)}return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++){if(b.contains(this,n[t])){return !0}}})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return !!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do{e=e[t]}while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r))){1===o.nodeType&&i.push(o),o=o[n]}return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling){1===e.nodeType&&e!==t&&n.push(e)}return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t)){return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n})}if(t.nodeType){return b.grep(e,function(e){return e===t===n})}if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t)){return b.filter(t,r,!n)}t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement){while(t.length){n.createElement(t.pop())}}return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ zeQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e)){return this.each(function(t){b(this).wrapAll(e.call(this,t))})}if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType){e=e.firstChild}return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++){(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)))}return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild){e.removeChild(e.firstChild)}e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t){return 1===n.nodeType?n.innerHTML.replace(gt,""):t}if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++){n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e)}n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g)){return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)})}if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++){o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c)}if(a){for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++){o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")))}}l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++){b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s){for(r=0,i=s[n].length;i>r;r++){b.event.add(t,n,s[n][r])}}}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events){b.removeEvent(t,r,i.handle)}t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++){n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get())}return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s){for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++){!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n))}}return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e))){for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a){r[a]&&Ft(i,r[a])}}if(t){if(n){for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++){_t(i,r[a])}}else{_t(e,o)}}return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++){if(o=e[h],o||0===o){if("object"===b.type(o)){b.merge(d,o.nodeType?[o]:o)}else{if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--){s=s.lastChild}if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--){b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)}}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild){s.removeChild(s.firstChild)}s=f.lastChild}else{d.push(t.createTextNode(o))}}}}s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++]){if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++]){kt.test(o.type||"")&&n.push(o)}}}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++){if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events){for(r in a.events){f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle)}}l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e){return t}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--){if(t=en[i]+n,t in e){return t}}return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++){r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))))}for(a=0;s>a;a++){r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))}return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++){a[n[s]]=b.css(e,n[s],!1,o)}return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t){return s&&"get" in s&&(o=s.get(e,!1,i))!==t?o:l[n]}if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set" in s&&(r=s.set(e,r,i))===t))){try{l[n]=r}catch(c){}}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get" in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t){a[o]=e.style[o],e.style[o]=t[o]}i=n.apply(e,r||[]);for(o in t){e.style[o]=a[o]}return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2){"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)))}return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i)){return i}r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?0.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return !b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++){i[e+Zt[r]+t]=o[r]||o[r-2]||o[0]}return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e)){b.each(e,function(){o(this.name,this.value)})}else{for(r in e){gn(r,e[r],n,o)}}return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t)){b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)})}else{if(n||"object"!==b.type(t)){r(e,t)}else{for(i in t){gn(e+"["+i+"]",t[i],n,r)}}}}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n)){while(r=o[i++]){"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n){n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i])}return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn){return Sn.apply(this,arguments)}var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a)){c[t[1].toLowerCase()]=t[2]}}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e){if(2>x){for(t in e){m[t]=[m[t],e[t]]}}else{N.always(e[N.status])}}return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x){return N}u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers){N.setRequestHeader(i,p.headers[i])}if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x)){return N.abort()}T="abort";for(i in {success:1,error:1,complete:1}){N[i](p[i])}if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x)){throw C}k(-1,C)}}else{k(-1,"No Transport")}function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c){s in r&&(n[c[s]]=r[s])}while("*"===l[0]){l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"))}if(o){for(s in u){if(u[s]&&u[s].test(o)){l.unshift(s);break}}}if(l[0] in r){a=l[0]}else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1]){for(i in e.converters){a[i.toLowerCase()]=e.converters[i]}}for(;r=u[++s];){if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i){for(n in a){if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}}}if(i!==!0){if(i&&e["throws"]){t=i(t)}else{try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}}}l=r}}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn){Pn[e](t,!0)}};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return !this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials" in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields){for(s in n.xhrFields){u[s]=n.xhrFields[s]}}n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i){u.setRequestHeader(s,i[s])}}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState)){if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i){4!==u.readyState&&u.abort()}else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do{u=u||".5",s/=u,b.style(i.elem,e,s+r)}while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++){if(r[i].call(e,t,n)){return}}})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i){return !1}var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++){l.tweens[a].run(o)}return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i){return this}for(i=!0;r>n;n++){l.tweens[n].run(1)}return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++){if(r=Gn[o].call(l,e,c,l.opts)){return r}}return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e){if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand" in a){n=a.expand(n),delete e[r];for(i in n){i in e||(e[i]=n[i],t[i]=o)}}else{t[r]=o}}}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++){n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)}},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height" in t||"width" in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t){if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show")){continue}g.push(i)}}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden" in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h){b.style(e,t,h[t])}});for(i=0;o>i;i++){r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n){a[n]&&a[n].stop&&i(a[n])}else{for(n in a){a[n]&&a[n].stop&&Jn.test(n)&&i(a[n])}}for(n=o.length;n--;){o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1))}(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;){o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))}for(t=0;a>t;t++){r[t]&&r[t].finish&&r[t].finish.call(this)}delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t){n=Zt[i],r["margin"+n]=r["padding"+n]=e}return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++){e=n[r],e()||n[r]!==e||n.splice(r--,1)}n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)})}var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s){return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o}},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using" in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position")){e=e.offsetParent}return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.zeQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.zeQuery&&define("jquery",[],function(){return b})})(window)};
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/ze-mediaelement-and-player.min.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/ze-mediaelement-and-player.min.js"] = true;
/*
 *
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2014, John Dyer (http://j.hn)
 * License: MIT
 *
 */
var cincopa_mejs=cincopa_mejs||{};(function(a){a.cincopa=true;a.version="2.23.4";a.meIndex=0;a.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mp4","audio/mpeg","video/dailymotion","video/x-dailymotion","application/x-mpegURL","audio/ogg"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo","video/x-vimeo"]}]};a.Utility={encodeUrl:function(b){return encodeURIComponent(b)},escapeHTML:function(b){return b.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(c){var b=document.createElement("div");b.innerHTML='<a href="'+this.escapeHTML(c)+'">x</a>';return b.firstChild.href},getScriptPath:function(k){var d=0,f,b="",p="",o,c,n,l,h,m=document.getElementsByTagName("script"),e=m.length,g=k.length;for(;d<e;d++){n=m[d].src;o=n.lastIndexOf("/");if(o>-1){h=n.substring(o+1);l=n.substring(0,o+1)}else{h=n;l=""}for(f=0;f<g;f++){p=k[f];c=h.indexOf(p);if(c>-1){b=l;break}}if(b!==""){break}}return b},calculateTimeFormat:function(u,p,e){if(u<0){u=0}if(typeof e=="undefined"){e=25}var d=p.timeFormat,b=d[0],c=(d[1]==d[0]),t=c?2:1,s=":",h=Math.floor(u/3600)%24,o=Math.floor(u/60)%60,r=Math.floor(u%60),f=Math.floor(((u%1)*e).toFixed(3)),n=[[f,"f"],[r,"s"],[o,"m"],[h,"h"]];if(d.length<t){s=d[t]}var q=false;for(var k=0,m=n.length;k<m;k++){if(d.indexOf(n[k][1])!==-1){q=true}else{if(q){var g=false;for(var l=k;l<m;l++){if(n[l][0]>0){g=true;break}}if(!g){break}if(!c){d=b+d}d=n[k][1]+s+d;if(c){d=n[k][1]+d}b=n[k][1]}}}p.currentTimeFormat=d},twoDigitsString:function(b){if(b<10){return"0"+b}return String(b)},secondsToTimeCode:function(k,g){if(k<0){k=0}if(typeof g!=="object"){var b="m:ss";b=arguments[1]?"hh:mm:ss":b;b=arguments[2]?b+":ff":b;g={currentTimeFormat:b,framesPerSecond:arguments[3]||25}}var c=g.framesPerSecond;if(typeof c==="undefined"){c=25}var b=g.currentTimeFormat,e=Math.floor(k/3600)%24,f=Math.floor(k/60)%60,j=Math.floor(k%60),d=Math.floor(((k%1)*c).toFixed(3));lis=[[d,"f"],[j,"s"],[f,"m"],[e,"h"]];var h=b;for(i=0,len=lis.length;i<len;i++){h=h.replace(lis[i][1]+lis[i][1],this.twoDigitsString(lis[i][0]));h=h.replace(lis[i][1],lis[i][0])}return h},timeCodeToSeconds:function(d,b,e,c){if(typeof e=="undefined"){e=false}else{if(typeof c=="undefined"){c=25}}var f=d.split(":"),h=parseInt(f[0],10),k=parseInt(f[1],10),l=parseInt(f[2],10),g=0,j=0;if(e){g=parseInt(f[3])/c}j=(h*3600)+(k*60)+l+g;return j},convertSMPTEtoSeconds:function(f){if(typeof f!="string"){return false}f=f.replace(",",".");var e=0,b=(f.indexOf(".")!=-1)?f.split(".")[1].length:0,d=1;f=f.split(":").reverse();for(var c=0;c<f.length;c++){d=1;if(c>0){d=Math.pow(60,c)}e+=Number(f[c])*d}return Number(e.toFixed(b))},removeSwf:function(b){var c=document.getElementById(b);if(c&&/object|embed/i.test(c.nodeName)){if(a.MediaFeatures.isIE){c.style.display="none";(function(){if(c.readyState==4){a.Utility.removeObjectInIE(b)}else{setTimeout(arguments.callee,10)}})()}else{c.parentNode.removeChild(c)}}},removeObjectInIE:function(c){var d=document.getElementById(c);if(d){for(var b in d){if(typeof d[b]=="function"){d[b]=null}}d.parentNode.removeChild(d)}},determineScheme:function(b){if(b&&b.indexOf("://")!=-1){return b.substr(0,b.indexOf("://")+3)}return"//"},debounce:function(b,e,c){var d;return function(){var h=this,f=arguments;var j=function(){d=null;if(!c){b.apply(h,f)}};var g=c&&!d;clearTimeout(d);d=setTimeout(j,e);if(g){b.apply(h,f)}}},isNodeAfter:function(b,c){return !!(b&&c&&typeof b.compareDocumentPosition==="function"&&b.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_PRECEDING)}};a.PluginDetector={hasPluginVersion:function(b,d){var c=this.plugins[b];d[1]=d[1]||0;d[2]=d[2]||0;return(c[0]>d[0]||(c[0]==d[0]&&c[1]>d[1])||(c[0]==d[0]&&c[1]==d[1]&&c[2]>=d[2]))?true:false},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(e,f,d,b,c){this.plugins[e]=this.detectPlugin(f,d,b,c)},detectPlugin:function(k,j,b,d){var l=[0,0,0],f,h,c;if(typeof(this.nav.plugins)!="undefined"&&typeof this.nav.plugins[k]=="object"){f=this.nav.plugins[k].description;if(f&&!(typeof this.nav.mimeTypes!="undefined"&&this.nav.mimeTypes[j]&&!this.nav.mimeTypes[j].enabledPlugin)){l=f.replace(k,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");for(h=0;h<l.length;h++){l[h]=parseInt(l[h].match(/\d+/),10)}}}else{if(typeof(window.ActiveXObject)!="undefined"){try{c=new ActiveXObject(b);if(c){l=d(c)}}catch(g){}}}return l}};a.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(b){var e=[],c=b.GetVariable("$version");if(c){c=c.split(" ")[1].split(",");e=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]}return e});a.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(b){var d=[0,0,0,0],c=function(e,h,f,g){while(e.isVersionSupported(h[0]+"."+h[1]+"."+h[2]+"."+h[3])){h[f]+=g}h[f]-=g};c(b,d,0,1);c(b,d,1,1);c(b,d,2,10000);c(b,d,2,1000);c(b,d,2,100);c(b,d,2,10);c(b,d,2,1);c(b,d,3,1);return d});a.MediaFeatures={init:function(){var j=this,b=document,h=a.PluginDetector.nav,k=a.PluginDetector.ua.toLowerCase(),g,l,f=["source","track","audio","video"];j.isiPad=(k.match(/ipad/i)!==null);j.isiPhone=(k.match(/iphone/i)!==null);j.isiOS=j.isiPhone||j.isiPad;j.isAndroid=(k.match(/android/i)!==null);j.isBustedAndroid=(k.match(/android 2\.[12]/)!==null);j.isBustedNativeHTTPS=(location.protocol==="https:"&&(k.match(/android [12]\./)!==null||k.match(/macintosh.* version.* safari/)!==null));j.isIE=(h.appName.toLowerCase().indexOf("microsoft")!=-1||h.appName.toLowerCase().match(/trident/gi)!==null);j.isChrome=(k.match(/chrome/gi)!==null);j.isChromium=(k.match(/chromium/gi)!==null);j.isFirefox=(k.match(/firefox/gi)!==null);j.isWebkit=(k.match(/webkit/gi)!==null);j.isGecko=(k.match(/gecko/gi)!==null)&&!j.isWebkit&&!j.isIE;j.isOpera=(k.match(/opera/gi)!==null);j.hasTouch=("ontouchstart" in window&&!j.isChrome)||("ontouchstart" in window&&j.isChrome&&/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));j.svgAsImg=!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1");for(g=0;g<f.length;g++){l=document.createElement(f[g])}j.supportsMediaTag=(typeof l.canPlayType!=="undefined"||j.isBustedAndroid);try{l.canPlayType("video/mp4")}catch(c){j.supportsMediaTag=false}j.supportsPointerEvents=(function(){var e=document.createElement("x"),d=document.documentElement,m=window.getComputedStyle,n;if(!("pointerEvents" in e.style)){return false}e.style.pointerEvents="auto";e.style.pointerEvents="x";d.appendChild(e);n=m&&m(e,"").pointerEvents==="auto";d.removeChild(e);return !!n})();j.hasFirefoxPluginMovingProblem=false;j.hasiOSFullScreen=(typeof l.webkitEnterFullscreen!=="undefined");j.hasNativeFullscreen=(typeof l.requestFullscreen!=="undefined");j.hasWebkitNativeFullScreen=(typeof l.webkitRequestFullScreen!=="undefined");j.hasMozNativeFullScreen=(typeof l.mozRequestFullScreen!=="undefined");j.hasMsNativeFullScreen=(typeof l.msRequestFullscreen!=="undefined");j.hasTrueNativeFullScreen=(j.hasWebkitNativeFullScreen||j.hasMozNativeFullScreen||j.hasMsNativeFullScreen);j.nativeFullScreenEnabled=j.hasTrueNativeFullScreen;if(j.hasMozNativeFullScreen){j.nativeFullScreenEnabled=document.mozFullScreenEnabled}else{if(j.hasMsNativeFullScreen){j.nativeFullScreenEnabled=document.msFullscreenEnabled}}if(j.isChrome){j.hasiOSFullScreen=false}if(j.hasTrueNativeFullScreen){j.fullScreenEventName="";if(j.hasWebkitNativeFullScreen){j.fullScreenEventName="webkitfullscreenchange"}else{if(j.hasMozNativeFullScreen){j.fullScreenEventName="mozfullscreenchange"}else{if(j.hasMsNativeFullScreen){j.fullScreenEventName="MSFullscreenChange"}}}j.isFullScreen=function(){if(j.hasMozNativeFullScreen){return b.mozFullScreen}else{if(j.hasWebkitNativeFullScreen){return b.webkitIsFullScreen}else{if(j.hasMsNativeFullScreen){return b.msFullscreenElement!==null}}}};j.requestFullScreen=function(d){if(j.hasWebkitNativeFullScreen){d.webkitRequestFullScreen()}else{if(j.hasMozNativeFullScreen){d.mozRequestFullScreen()}else{if(j.hasMsNativeFullScreen){d.msRequestFullscreen()}}}};j.cancelFullScreen=function(){if(j.hasWebkitNativeFullScreen){document.webkitCancelFullScreen()}else{if(j.hasMozNativeFullScreen){document.mozCancelFullScreen()}else{if(j.hasMsNativeFullScreen){document.msExitFullscreen()}}}}}if(j.hasiOSFullScreen&&k.match(/mac os x 10_5/i)){j.hasNativeFullScreen=false;j.hasiOSFullScreen=false}}};a.MediaFeatures.init();a.HtmlMediaElement={pluginType:"native",isFullScreen:false,setCurrentTime:function(b){this.currentTime=b},setMuted:function(b){this.muted=b},setVolume:function(b){this.volume=b},stop:function(){this.pause()},setSrc:function(e){var b=this.getElementsByTagName("source");while(b.length>0){this.removeChild(b[0])}if(typeof e=="string"){this.src=e}else{var c,d;for(c=0;c<e.length;c++){d=e[c];if(this.canPlayType(d.type)){this.src=d.src;break}}}},setVideoSize:function(c,b){this.width=c;this.height=b}};a.PluginMediaElement=function(c,d,b){this.id=c;this.pluginType=d;this.src=b;this.events={};this.attributes={}};a.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:false,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:true,ended:false,seeking:false,duration:0,error:null,tagName:"",muted:false,volume:1,currentTime:0,play:function(){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){this.pluginApi.playVideo()}else{this.pluginApi.playMedia()}this.paused=false}},load:function(){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){}else{this.pluginApi.loadMedia()}this.paused=false}},pause:function(){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){if(this.pluginApi.getPlayerState()==1){this.pluginApi.pauseVideo()}}else{this.pluginApi.pauseMedia()}this.paused=true}},stop:function(){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){this.pluginApi.stopVideo()}else{this.pluginApi.stopMedia()}this.paused=true}},canPlayType:function(f){var b,c,d,e=a.plugins[this.pluginType];for(b=0;b<e.length;b++){d=e[b];if(a.PluginDetector.hasPluginVersion(this.pluginType,d.version)){for(c=0;c<d.types.length;c++){if(f==d.types[c]){return"probably"}}}}return""},positionFullscreenButton:function(c,d,b){if(this.pluginApi!=null&&this.pluginApi.positionFullscreenButton){this.pluginApi.positionFullscreenButton(Math.floor(c),Math.floor(d),b)}},hideFullscreenButton:function(){if(this.pluginApi!=null&&this.pluginApi.hideFullscreenButton){this.pluginApi.hideFullscreenButton()}},setSrc:function(d){if(typeof d=="string"){this.pluginApi.setSrc(a.Utility.absolutizeUrl(d));this.src=a.Utility.absolutizeUrl(d)}else{var b,c;for(b=0;b<d.length;b++){c=d[b];if(this.canPlayType(c.type)){this.pluginApi.setSrc(a.Utility.absolutizeUrl(c.src));this.src=a.Utility.absolutizeUrl(c.src);break}}}},setCurrentTime:function(b){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){this.pluginApi.seekTo(b)}else{this.pluginApi.setCurrentTime(b)}this.currentTime=b}},setVolume:function(b){if(this.pluginApi!=null){if(this.pluginType=="youtube"){this.pluginApi.setVolume(b*100)}else{this.pluginApi.setVolume(b)}this.volume=b}},setMuted:function(b){if(this.pluginApi!=null){if(this.pluginType=="youtube"){if(b){this.pluginApi.mute()}else{this.pluginApi.unMute()}this.muted=b;this.dispatchEvent({type:"volumechange"})}else{this.pluginApi.setMuted(b)}this.muted=b}},setVideoSize:function(c,b){if(this.pluginElement&&this.pluginElement.style){this.pluginElement.style.width=c+"px";this.pluginElement.style.height=b+"px"}if(this.pluginApi!=null&&this.pluginApi.setVideoSize){this.pluginApi.setVideoSize(c,b)}},setFullscreen:function(b){if(this.pluginApi!=null&&this.pluginApi.setFullscreen){this.pluginApi.setFullscreen(b)}},enterFullScreen:function(){if(this.pluginApi!=null&&this.pluginApi.setFullscreen){this.setFullscreen(true)}},exitFullScreen:function(){if(this.pluginApi!=null&&this.pluginApi.setFullscreen){this.setFullscreen(false)}},addEventListener:function(d,c,b){this.events[d]=this.events[d]||[];this.events[d].push(c)},removeEventListener:function(d,b){if(!d){this.events={};return true}var c=this.events[d];if(!c){return true}if(!b){this.events[d]=[];return true}for(var e=0;e<c.length;e++){if(c[e]===b){this.events[d].splice(e,1);return true}}return false},dispatchEvent:function(d){var e,b,c=this.events[d.type];if(c){for(e=0;e<c.length;e++){c[e].apply(this,[d])}}},hasAttribute:function(b){return(b in this.attributes)},removeAttribute:function(b){delete this.attributes[b]},getAttribute:function(b){if(this.hasAttribute(b)){return this.attributes[b]}return null},setAttribute:function(b,c){this.attributes[b]=c},remove:function(){a.Utility.removeSwf(this.pluginElement.id)}};a.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:false,httpsBasicAuthSite:false,type:"",pluginPath:a.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",flashScriptAccess:"sameDomain",enablePluginSmoothing:false,enablePseudoStreaming:false,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:0.8,customError:"",success:function(){},error:function(){}};a.MediaElement=function(b,c){return a.HtmlMediaElementShim.create(b,c)};a.HtmlMediaElementShim={create:function(d,g){var h={},e=(typeof(d)=="string")?document.getElementById(d):d,p=e.tagName.toLowerCase(),f=(p==="audio"||p==="video"),n=(f)?e.getAttribute("src"):e.getAttribute("href"),k=e.getAttribute("poster"),b=e.getAttribute("autoplay"),l=e.getAttribute("preload"),c=e.getAttribute("controls"),j,m;for(m in a.MediaElementDefaults){h[m]=a.MediaElementDefaults[m]}for(m in g){h[m]=g[m]}n=(typeof n=="undefined"||n===null||n=="")?null:n;k=(typeof k=="undefined"||k===null)?"":k;l=(typeof l=="undefined"||l===null||l==="false")?"none":l;b=!(typeof b=="undefined"||b===null||b==="false");c=!(typeof c=="undefined"||c===null||c==="false");j=this.determinePlayback(e,h,a.MediaFeatures.supportsMediaTag,f,n);j.url=(j.url!==null)?a.Utility.absolutizeUrl(j.url):"";j.scheme=a.Utility.determineScheme(j.url);if(j.method=="native"){if(a.MediaFeatures.isBustedAndroid){e.src=j.url;e.addEventListener("click",function(){e.play()},false)}return this.updateNative(j,h,b,l)}else{if(j.method!==""){return this.createPlugin(j,h,k,b,l,c)}else{this.createErrorMessage(j,h,k);return this}}},determinePlayback:function(c,q,w,e,v){var o=[],d,f,g,h,p,x,u={method:"",url:"",htmlMediaElement:c,isVideo:(c.tagName.toLowerCase()!=="audio"),scheme:""},s,t,r,b,m;if(typeof q.type!="undefined"&&q.type!==""){if(typeof q.type=="string"){o.push({type:q.type,url:v})}else{for(d=0;d<q.type.length;d++){o.push({type:q.type[d],url:v})}}}else{if(v!==null){x=this.formatType(v,c.getAttribute("type"));o.push({type:x,url:v})}else{for(d=0;d<c.childNodes.length;d++){p=c.childNodes[d];if(p.nodeType==1&&p.tagName.toLowerCase()=="source"){v=p.getAttribute("src");x=this.formatType(v,p.getAttribute("type"));m=p.getAttribute("media");if(!m||!window.matchMedia||(window.matchMedia&&window.matchMedia(m).matches)){o.push({type:x,url:v})}}}}}if(!e&&o.length>0&&o[0].url!==null&&this.getTypeFromFile(o[0].url).indexOf("audio")>-1){u.isVideo=false}if(u.isVideo&&a.MediaFeatures.isBustedAndroid){c.canPlayType=function(j){return(j.match(/video\/(mp4|m4v)/gi)!==null)?"maybe":""}}if(u.isVideo&&a.MediaFeatures.isChromium){c.canPlayType=function(j){return(j.match(/video\/(webm|ogv|ogg)/gi)!==null)?"maybe":""}}if(w&&(q.mode==="auto"||q.mode==="auto_plugin"||q.mode==="native")&&!(a.MediaFeatures.isBustedNativeHTTPS&&q.httpsBasicAuthSite===true)){if(!e){b=document.createElement(u.isVideo?"video":"audio");c.parentNode.insertBefore(b,c);c.style.display="none";u.htmlMediaElement=c=b}for(d=0;d<o.length;d++){if(o[d].type=="video/m3u8"||c.canPlayType(o[d].type).replace(/no/,"")!==""||c.canPlayType(o[d].type.replace(/mp3/,"mpeg")).replace(/no/,"")!==""||c.canPlayType(o[d].type.replace(/m4a/,"mp4")).replace(/no/,"")!==""){u.method="native";u.url=o[d].url;break}}if(u.method==="native"){if(u.url!==null){c.src=u.url}if(q.mode!=="auto_plugin"){return u}}}if(q.mode==="auto"||q.mode==="auto_plugin"||q.mode==="shim"){for(d=0;d<o.length;d++){x=o[d].type;for(f=0;f<q.plugins.length;f++){s=q.plugins[f];t=a.plugins[s];for(g=0;g<t.length;g++){r=t[g];if(r.version==null||a.PluginDetector.hasPluginVersion(s,r.version)){for(h=0;h<r.types.length;h++){if(x.toLowerCase()==r.types[h].toLowerCase()){u.method=s;u.url=o[d].url;return u}}}}}}}if(q.mode==="auto_plugin"&&u.method==="native"){return u}if(u.method===""&&o.length>0){u.url=o[0].url}return u},formatType:function(c,b){if(c&&!b){return this.getTypeFromFile(c)}else{if(b&&~b.indexOf(";")){return b.substr(0,b.indexOf(";"))}else{return b}}},getTypeFromFile:function(d){d=d.split("?")[0];var c=d.substring(d.lastIndexOf(".")+1).toLowerCase(),b=/(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(c)?"video/":"audio/";return this.getTypeFromExtension(c,b)},getTypeFromExtension:function(c,b){b=b||"";switch(c){case"mp4":case"m4v":case"m4a":case"f4v":case"f4a":return b+"mp4";case"flv":return b+"x-flv";case"webm":case"webma":case"webmv":return b+"webm";case"ogg":case"oga":case"ogv":return b+"ogg";case"m3u8":return"application/x-mpegurl";case"ts":return b+"mp2t";default:return b+c}},createErrorMessage:function(h,g,j){var f=h.htmlMediaElement,c=document.createElement("div"),d=g.customError;c.className="me-cannotplay";try{c.style.width=f.width+"px";c.style.height=f.height+"px"}catch(b){}if(!d){d='<a href="'+h.url+'">';if(j!==""){d+='<img src="'+j+'" width="100%" height="100%" alt="" />'}d+="<span>"+a.i18n.t("mejs.download-file")+"</span></a>"}c.innerHTML=d;f.parentNode.insertBefore(c,f);f.style.display="none";g.error(f)},createPlugin:function(o,n,u,c,v,g){var j=o.htmlMediaElement,A=1,h=1,s="me_"+o.method+"_"+(a.meIndex++),t=new a.PluginMediaElement(s,o.method,o.url),f=document.createElement("div"),w,m,l;t.tagName=j.tagName;for(var k=0;k<j.attributes.length;k++){var b=j.attributes[k];if(b.specified){t.setAttribute(b.name,b.value)}}m=j.parentNode;while(m!==null&&m.tagName!=null&&m.tagName.toLowerCase()!=="body"&&m.parentNode!=null&&m.parentNode.tagName!=null&&m.parentNode.constructor!=null&&m.parentNode.constructor.name==="ShadowRoot"){if(m.parentNode.tagName.toLowerCase()==="p"){m.parentNode.parentNode.insertBefore(m,m.parentNode);break}m=m.parentNode}if(o.isVideo){A=(n.pluginWidth>0)?n.pluginWidth:(n.videoWidth>0)?n.videoWidth:(j.getAttribute("width")!==null)?j.getAttribute("width"):n.defaultVideoWidth;h=(n.pluginHeight>0)?n.pluginHeight:(n.videoHeight>0)?n.videoHeight:(j.getAttribute("height")!==null)?j.getAttribute("height"):n.defaultVideoHeight;A=a.Utility.encodeUrl(A);h=a.Utility.encodeUrl(h)}else{if(n.enablePluginDebug){A=320;h=240}}t.success=n.success;f.className="me-plugin";f.id=s+"_container";if(o.isVideo){j.parentNode.insertBefore(f,j)}else{document.body.insertBefore(f,document.body.childNodes[0])}if(o.method==="flash"||o.method==="silverlight"){var d=j.getAttribute("type")==="audio/mp4",e=j.getElementsByTagName("source");if(e&&!d){for(var k=0,x=e.length;k<x;k++){if(e[k].getAttribute("type")==="audio/mp4"){d=true}}}l=["id="+s,"isvideo="+((o.isVideo||d)?"true":"false"),"autoplay="+((c)?"true":"false"),"preload="+v,"width="+A,"startvolume="+n.startVolume,"timerrate="+n.timerRate,"flashstreamer="+n.flashStreamer,"height="+h,"pseudostreamstart="+n.pseudoStreamingStartQueryParam];if(o.url!==null){if(o.method=="flash"){l.push("file="+a.Utility.encodeUrl(o.url))}else{l.push("file="+o.url)}}if(n.enablePluginDebug){l.push("debug=true")}if(n.enablePluginSmoothing){l.push("smoothing=true")}if(n.enablePseudoStreaming){l.push("pseudostreaming=true")}if(g){l.push("controls=true")}if(n.pluginVars){l=l.concat(n.pluginVars)}window[s+"_init"]=function(){switch(t.pluginType){case"flash":t.pluginElement=t.pluginApi=document.getElementById(s);break;case"silverlight":t.pluginElement=document.getElementById(t.id);t.pluginApi=t.pluginElement.Content.MediaElementJS;break}if(t.pluginApi!=null&&t.success){t.success(t,j)}};window[s+"_event"]=function(D,F){var C,E,B;C={type:D,target:t};for(E in F){t[E]=F[E];C[E]=F[E]}B=F.bufferedTime||0;C.target.buffered=C.buffered={start:function(G){return 0},end:function(G){return B},length:1};t.dispatchEvent(C)}}switch(o.method){case"silverlight":f.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+s+'" name="'+s+'" width="'+A+'" height="'+h+'" class="mejs-shim"><param name="initParams" value="'+l.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+n.pluginPath+n.silverlightName+'" /></object>';break;case"flash":if(a.MediaFeatures.isIE){w=document.createElement("div");f.appendChild(w);w.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+s+'" width="'+A+'" height="'+h+'" class="mejs-shim"><param name="movie" value="'+n.pluginPath+n.flashName+"?"+(new Date().getTime())+'" /><param name="flashvars" value="'+l.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="'+n.flashScriptAccess+'" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'}else{f.innerHTML='<embed id="'+s+'" name="'+s+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="'+n.flashScriptAccess+'" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+n.pluginPath+n.flashName+'" flashvars="'+l.join("&")+'" width="'+A+'" height="'+h+'" scale="default"class="mejs-shim"></embed>'}break;case"youtube":var y;if(o.url.lastIndexOf("youtu.be")!=-1){y=o.url.substr(o.url.lastIndexOf("/")+1);if(y.indexOf("?")!=-1){y=y.substr(0,y.indexOf("?"))}}else{var z=o.url.match(/[?&]v=([^&#]+)|&|#|$/);if(z){y=z[1]}}youtubeSettings={container:f,containerId:f.id,pluginMediaElement:t,pluginId:s,videoId:y,height:h,width:A,scheme:o.scheme,variables:n.youtubeIframeVars};if(window.postMessage){a.YouTubeApi.enqueueIframe(youtubeSettings)}else{if(a.PluginDetector.hasPluginVersion("flash",[10,0,0])){a.YouTubeApi.createFlash(youtubeSettings,n)}}break;case"vimeo":var q=s+"_player";t.vimeoid=o.url.substr(o.url.lastIndexOf("/")+1);f.innerHTML='<iframe src="'+o.scheme+"player.vimeo.com/video/"+t.vimeoid+"?api=1&portrait=0&byline=0&title=0&player_id="+q+'" width="'+A+'" height="'+h+'" frameborder="0" class="mejs-shim" id="'+q+'" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';if(typeof($f)=="function"){var p=$f(f.childNodes[0]),r=-1;p.addEvent("ready",function(){p.playVideo=function(){p.api("play")};p.stopVideo=function(){p.api("unload")};p.pauseVideo=function(){p.api("pause")};p.seekTo=function(C){p.api("seekTo",C)};p.setVolume=function(C){p.api("setVolume",C)};p.setMuted=function(C){if(C){p.lastVolume=p.api("getVolume");p.api("setVolume",0)}else{p.api("setVolume",p.lastVolume);delete p.lastVolume}};p.getPlayerState=function(){return r};function B(F,G,E,C){var D={type:E,target:G};if(E=="timeupdate"){G.currentTime=D.currentTime=C.seconds;G.duration=D.duration=C.duration}G.dispatchEvent(D)}p.addEvent("play",function(){r=1;B(p,t,"play");B(p,t,"playing")});p.addEvent("pause",function(){r=2;B(p,t,"pause")});p.addEvent("finish",function(){r=0;B(p,t,"ended")});p.addEvent("playProgress",function(C){B(p,t,"timeupdate",C)});p.addEvent("seek",function(C){r=3;B(p,t,"seeked",C)});p.addEvent("loadProgress",function(C){r=3;B(p,t,"progress",C)});t.pluginElement=f;t.pluginApi=p;t.success(t,t.pluginElement)})}else{console.warn("You need to include froogaloop for vimeo to work")}break}j.style.display="none";j.removeAttribute("autoplay");return t},updateNative:function(f,e,b,g){var c=f.htmlMediaElement,d;for(d in a.HtmlMediaElement){c[d]=a.HtmlMediaElement[d]}e.success(c,c);return c}};a.YouTubeApi={isIframeStarted:false,isIframeLoaded:false,loadIframeApi:function(d){if(!this.isIframeStarted){var c=document.createElement("script");c.src=d.scheme+"www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(c,b);this.isIframeStarted=true}},iframeQueue:[],enqueueIframe:function(b){if(this.isLoaded){this.createIframe(b)}else{this.loadIframeApi(b);this.iframeQueue.push(b)}},createIframe:function(e){var d=e.pluginMediaElement,b={controls:0,wmode:"transparent"},c=new YT.Player(e.containerId,{height:e.height,width:e.width,videoId:e.videoId,playerVars:a.$.extend({},b,e.variables),events:{onReady:function(f){c.setVideoSize=function(h,g){c.setSize(h,g)};e.pluginMediaElement.pluginApi=c;e.pluginMediaElement.pluginElement=document.getElementById(e.containerId);d.success(d,d.pluginElement);a.YouTubeApi.createEvent(c,d,"canplay");setInterval(function(){a.YouTubeApi.createEvent(c,d,"timeupdate")},250);if(typeof d.attributes.autoplay!=="undefined"){c.playVideo()}},onStateChange:function(f){a.YouTubeApi.handleStateChange(f.data,c,d)}}})},createEvent:function(e,f,d){var c={type:d,target:f};if(e&&e.getDuration){f.currentTime=c.currentTime=e.getCurrentTime();f.duration=c.duration=e.getDuration();c.paused=f.paused;c.ended=f.ended;c.muted=e.isMuted();c.volume=e.getVolume()/100;c.bytesTotal=e.getVideoBytesTotal();c.bufferedBytes=e.getVideoBytesLoaded();var b=c.bufferedBytes/c.bytesTotal*c.duration;c.target.buffered=c.buffered={start:function(g){return 0},end:function(g){return b},length:1}}f.dispatchEvent(c)},iFrameReady:function(){this.isLoaded=true;this.isIframeLoaded=true;while(this.iframeQueue.length>0){var b=this.iframeQueue.pop();this.createIframe(b)}},flashPlayers:{},createFlash:function(b){this.flashPlayers[b.pluginId]=b;var c,d=b.scheme+"www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+b.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";if(a.MediaFeatures.isIE){c=document.createElement("div");b.container.appendChild(c);c.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+b.scheme+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+b.pluginId+'" width="'+b.width+'" height="'+b.height+'" class="mejs-shim"><param name="movie" value="'+d+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="'+options.flashScriptAccess+'" /><param name="allowFullScreen" value="true" /></object>'}else{b.container.innerHTML='<object type="application/x-shockwave-flash" id="'+b.pluginId+'" data="'+d+'" width="'+b.width+'" height="'+b.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="'+options.flashScriptAccess+'"><param name="wmode" value="transparent"></object>'}},flashReady:function(c){var f=this.flashPlayers[c],d=document.getElementById(c),e=f.pluginMediaElement;e.pluginApi=e.pluginElement=d;f.success(e,e.pluginElement);d.cueVideoById(f.videoId);var b=f.containerId+"_callback";window[b]=function(g){a.YouTubeApi.handleStateChange(g,d,e)};d.addEventListener("onStateChange",b);setInterval(function(){a.YouTubeApi.createEvent(d,e,"timeupdate")},250);a.YouTubeApi.createEvent(d,e,"canplay")},handleStateChange:function(d,b,c){switch(d){case -1:c.paused=true;c.ended=true;a.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=false;c.ended=true;a.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=false;c.ended=false;a.YouTubeApi.createEvent(b,c,"play");a.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=true;c.ended=false;a.YouTubeApi.createEvent(b,c,"pause");break;case 3:a.YouTubeApi.createEvent(b,c,"progress");break;case 5:break}}};window.onYouTubePlayerAPIReady=function(){a.YouTubeApi.iFrameReady()};window.onYouTubePlayerReady=function(b){a.YouTubeApi.flashReady(b)};window.cincopa_mejs=a;window.CincopaMediaElement=a.MediaElement;(function(b,f,d,e){var c={"default":"en",locale:{language:(d.i18n&&d.i18n.locale.language)||"",strings:(d.i18n&&d.i18n.locale.strings)||{}},pluralForms:[function(){return arguments[1]},function(){var g=arguments;if(g[0]===1){return g[1]}else{return g[2]}},function(){var g=arguments;if([0,1].indexOf(g[0])>-1){return g[1]}else{return g[2]}},function(){var g=arguments;if(g[0]%10===1&&g[0]%100!==11){return g[1]}else{if(g[0]!==0){return g[2]}else{return g[3]}}},function(){var g=arguments;if(g[0]===1||g[0]===11){return g[1]}else{if(g[0]===2||g[0]===12){return g[2]}else{if(g[0]>2&&g[0]<20){return g[3]}else{return g[4]}}}},function(){if(args[0]===1){return args[1]}else{if(args[0]===0||(args[0]%100>0&&args[0]%100<20)){return args[2]}else{return args[3]}}},function(){var g=arguments;if(g[0]%10===1&&g[0]%100!==11){return g[1]}else{if(g[0]%10>=2&&(g[0]%100<10||g[0]%100>=20)){return g[2]}else{return[3]}}},function(){var g=arguments;if(g[0]%10===1&&g[0]%100!==11){return g[1]}else{if(g[0]%10>=2&&g[0]%10<=4&&(g[0]%100<10||g[0]%100>=20)){return g[2]}else{return g[3]}}},function(){var g=arguments;if(g[0]===1){return g[1]}else{if(g[0]>=2&&g[0]<=4){return g[2]}else{return g[3]}}},function(){var g=arguments;if(g[0]===1){return g[1]}else{if(g[0]%10>=2&&g[0]%10<=4&&(g[0]%100<10||g[0]%100>=20)){return g[2]}else{return g[3]}}},function(){var g=arguments;if(g[0]%100===1){return g[2]}else{if(g[0]%100===2){return g[3]}else{if(g[0]%100===3||g[0]%100===4){return g[4]}else{return g[1]}}}},function(){var g=arguments;if(g[0]===1){return g[1]}else{if(g[0]===2){return g[2]}else{if(g[0]>2&&g[0]<7){return g[3]}else{if(g[0]>6&&g[0]<11){return g[4]}else{return g[5]}}}}},function(){var g=arguments;if(g[0]===0){return g[1]}else{if(g[0]===1){return g[2]}else{if(g[0]===2){return g[3]}else{if(g[0]%100>=3&&g[0]%100<=10){return g[4]}else{if(g[0]%100>=11){return g[5]}else{return g[6]}}}}}},function(){var g=arguments;if(g[0]===1){return g[1]}else{if(g[0]===0||(g[0]%100>1&&g[0]%100<11)){return g[2]}else{if(g[0]%100>10&&g[0]%100<20){return g[3]}else{return g[4]}}}},function(){var g=arguments;if(g[0]%10===1){return g[1]}else{if(g[0]%10===2){return g[2]}else{return g[3]}}},function(){var g=arguments;if(g[0]!==11&&g[0]%10===1){return g[1]}else{return g[2]}},function(){var g=arguments;if(g[0]===1){return g[1]}else{if(g[0]%10>=2&&g[0]%10<=4&&(g[0]%100<10||g[0]%100>=20)){return g[2]}else{return g[3]}}},function(){var g=arguments;if(g[0]===1){return g[1]}else{if(g[0]===2){return g[2]}else{if(g[0]!==8&&g[0]!==11){return g[3]}else{return g[4]}}}},function(){var g=arguments;if(g[0]===0){return g[1]}else{return g[2]}},function(){var g=arguments;if(g[0]===1){return g[1]}else{if(g[0]===2){return g[2]}else{if(g[0]===3){return g[3]}else{return g[4]}}}},function(){var g=arguments;if(g[0]===0){return g[1]}else{if(g[0]===1){return g[2]}else{return g[3]}}}],getLanguage:function(){var g=c.locale.language||c["default"];return/^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/.exec(g)?g:c["default"]},t:function(j,m){if(typeof j==="string"&&j.length){var h=c.getLanguage(),n,l,k=function(p,q,o){if(typeof p!=="object"||typeof q!=="number"||typeof o!=="number"){return p}if(typeof p==="string"){return p}return c.pluralForms[o].apply(null,[q].concat(p))},g=function(o){var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};return o.replace(/[&<>"]/g,function(q){return p[q]})};if(c.locale.strings&&c.locale.strings[h]){n=c.locale.strings[h][j];if(typeof m==="number"){l=c.locale.strings[h]["mejs.plural-form"];n=k.apply(null,[n,m,l])}}if(!n&&c.locale.strings&&c.locale.strings[c["default"]]){n=c.locale.strings[c["default"]][j];if(typeof m==="number"){l=c.locale.strings[c["default"]]["mejs.plural-form"];n=k.apply(null,[n,m,l])}}n=n||j;if(typeof m==="number"){n=n.replace("%1",m)}return g(n)}return j}};if(typeof mejsL10n!=="undefined"){c.locale.language=mejsL10n.language}d.i18n=c}(document,window,a));(function(b,c){if(typeof mejsL10n!=="undefined"){b[mejsL10n.lang]=mejsL10n.strings}}(a.i18n.locale.strings));
/*
	 * This is a i18n.locale language object.
	 *
	 * English; This can serve as a template for other languages to translate
	 *
	 * @author
	 *   TBD
	 *   Sascha Greuel (Twitter: @SoftCreatR)
	 *
	 * @see
	 *   me-i18n.js
	 *
	 * @params
	 *  - exports - CommonJS, window ..
	 */
(function(b){if(b.en===undefined){b.en={"mejs.plural-form":1,"mejs.download-file":"Download File","mejs.fullscreen-off":"Turn off Fullscreen","mejs.fullscreen-on":"Go Fullscreen","mejs.download-video":"Download Video","mejs.fullscreen":"Fullscreen","mejs.time-jump-forward":["Jump forward 1 second","Jump forward %1 seconds"],"mejs.play":"Play","mejs.pause":"Pause","mejs.close":"Close","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.","mejs.time-skip-back":["Skip back 1 second","Skip back %1 seconds"],"mejs.captions-subtitles":"Captions/Subtitles","mejs.none":"None","mejs.mute-toggle":"Mute Toggle","mejs.volume-help-text":"Use Up/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.ad-skip":"Skip ad","mejs.ad-skip-info":["Skip in 1 second","Skip in %1 seconds"],"mejs.source-chooser":"Source Chooser"}}}(a.i18n.locale.strings));
/*
	 *
	 * MediaElementPlayer
	 * http://mediaelementjs.com/
	 *
	 * Creates a controller bar for HTML5 <video> add <audio> tags
	 * using zeQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
	 *
	 * Copyright 2010-2013, John Dyer (http://j.hn/)
	 * License: MIT
	 *
	 */
if(typeof zeQuery!="undefined"){a.$=zeQuery}else{if(typeof Zepto!="undefined"){a.$=Zepto;Zepto.fn.outerWidth=function(b){var c=$(this).width();if(b){c+=parseInt($(this).css("margin-right"),10);c+=parseInt($(this).css("margin-left"),10)}return c}}else{if(typeof ender!="undefined"){a.$=ender}}}(function(b){a.MepDefaults={poster:"",showPosterWhenEnded:false,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(c){return(c.duration*0.05)},defaultSeekForwardInterval:function(c){return(c.duration*0.05)},setDimensions:true,audioWidth:-1,audioHeight:-1,startVolume:0.8,loop:false,autoRewind:true,enableAutosize:true,timeFormat:"",alwaysShowHours:false,showTimecodeFrameCount:false,framesPerSecond:25,autosizeProgress:true,alwaysShowControls:false,hideVideoControlsOnLoad:false,clickToPlayPause:true,controlsTimeoutDefault:1500,controlsTimeoutMouseEnter:2500,controlsTimeoutMouseLeave:1000,iPadUseNativeControls:false,iPhoneUseNativeControls:false,AndroidUseNativeControls:false,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:true,stretching:"auto",enableKeyboard:true,pauseOtherPlayers:true,keyActions:[{keys:[32,179],action:function(f,e,d,c){if(!a.MediaFeatures.isFirefox){if(e.paused||e.ended){e.play()}else{e.pause()}}}},{keys:[38],action:function(g,e,d,c){g.container.find(".mejs-volume-slider").css("display","block");if(g.isVideo){g.showControls();g.startControlsTimer()}var f=Math.min(e.volume+0.1,1);e.setVolume(f)}},{keys:[40],action:function(g,e,d,c){g.container.find(".mejs-volume-slider").css("display","block");if(g.isVideo){g.showControls();g.startControlsTimer()}var f=Math.max(e.volume-0.1,0);e.setVolume(f)}},{keys:[37,227],action:function(g,e,d,c){if(!isNaN(e.duration)&&e.duration>0){if(g.isVideo){g.showControls();g.startControlsTimer()}var f=Math.max(e.currentTime-g.options.defaultSeekBackwardInterval(e),0);e.setCurrentTime(f)}}},{keys:[39,228],action:function(g,e,d,c){if(!isNaN(e.duration)&&e.duration>0){if(g.isVideo){g.showControls();g.startControlsTimer()}var f=Math.min(e.currentTime+g.options.defaultSeekForwardInterval(e),e.duration);e.setCurrentTime(f)}}},{keys:[70],action:function(f,e,d,c){if(typeof f.enterFullScreen!="undefined"){if(f.isFullScreen){f.exitFullScreen()}else{f.enterFullScreen()}}}},{keys:[77],action:function(f,e,d,c){f.container.find(".mejs-volume-slider").css("display","block");if(f.isVideo){f.showControls();f.startControlsTimer()}if(f.media.muted){f.setMuted(false)}else{f.setMuted(true)}}}]};a.mepIndex=0;a.players={};a.MediaElementPlayer=function(c,d){if(!(this instanceof a.MediaElementPlayer)){return new a.MediaElementPlayer(c,d)}var e=this;e.$media=e.$node=b(c);e.node=e.media=e.$media[0];if(!e.node){return}if(typeof e.node.player!="undefined"){return e.node.player}if(typeof d=="undefined"){d=e.$node.data("mejsoptions")}e.options=b.extend({},a.MepDefaults,d);if(!e.options.timeFormat){e.options.timeFormat="mm:ss";if(e.options.alwaysShowHours){e.options.timeFormat="hh:mm:ss"}if(e.options.showTimecodeFrameCount){e.options.timeFormat+=":ff"}}a.Utility.calculateTimeFormat(0,e.options,e.options.framesPerSecond||25);e.id="mep_"+a.mepIndex++;a.players[e.id]=e;e.init();return e};a.MediaElementPlayer.prototype={hasFocus:false,controlsAreVisible:true,init:function(){var f=this,e=a.MediaFeatures,d=b.extend(true,{},f.options,{success:function(l,k){f.meReady(l,k)},error:function(k){f.handleError(k)}}),g=f.media.tagName.toLowerCase();f.isDynamic=(g!=="audio"&&g!=="video");if(f.isDynamic){f.isVideo=f.options.isVideo}else{f.isVideo=(g!=="audio"&&f.options.isVideo)}if((e.isiPad&&f.options.iPadUseNativeControls)||(e.isiPhone&&f.options.iPhoneUseNativeControls)){f.$media.attr("controls","controls");if(e.isiPad&&f.media.getAttribute("autoplay")!==null){f.play()}}else{if(e.isAndroid&&f.options.AndroidUseNativeControls){}else{if(f.isVideo||(!f.isVideo&&f.options.features.length)){f.$media.removeAttr("controls");var j=f.isVideo?a.i18n.t("mejs.video-player"):a.i18n.t("mejs.audio-player");b('<span class="mejs-offscreen">'+j+"</span>").insertBefore(f.$media);f.container=b('<div id="'+f.id+'" class="mejs-container '+(a.MediaFeatures.svgAsImg?"svg":"no-svg")+'" tabindex="0" role="application" aria-label="'+j+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(f.$media[0].className).insertBefore(f.$media).focus(function(m){if(!f.controlsAreVisible&&!f.hasFocus&&f.controlsEnabled){f.showControls(true);if(!f.hasMsNativeFullScreen){var k=".mejs-playpause-button > button";if(a.Utility.isNodeAfter(m.relatedTarget,f.container[0])){k=".mejs-controls .mejs-button:last-child > button"}var l=f.container.find(k);l.focus()}}});if(!f.options.features.length){f.container.css("background","transparent").find(".mejs-controls").hide()}if(f.isVideo&&f.options.stretching==="fill"&&!f.container.parent("mejs-fill-container").length){f.outerContainer=f.$media.parent();f.container.wrap('<div class="mejs-fill-container"/>')}f.container.addClass((e.isAndroid?"mejs-android ":"")+(e.isiOS?"mejs-ios ":"")+(e.isiPad?"mejs-ipad ":"")+(e.isiPhone?"mejs-iphone ":"")+(f.isVideo?"mejs-video ":"mejs-audio "));f.container.find(".mejs-mediaelement").append(f.$media);f.node.player=f;f.controls=f.container.find(".mejs-controls");f.layers=f.container.find(".mejs-layers");var h=(f.isVideo?"video":"audio"),c=h.substring(0,1).toUpperCase()+h.substring(1);if(f.options[h+"Width"]>0||f.options[h+"Width"].toString().indexOf("%")>-1){f.width=f.options[h+"Width"]}else{if(f.media.style.width!==""&&f.media.style.width!==null){f.width=f.media.style.width}else{if(f.media.getAttribute("width")!==null){f.width=f.$media.attr("width")}else{f.width=f.options["default"+c+"Width"]}}}if(f.options[h+"Height"]>0||f.options[h+"Height"].toString().indexOf("%")>-1){f.height=f.options[h+"Height"]}else{if(f.media.style.height!==""&&f.media.style.height!==null){f.height=f.media.style.height}else{if(f.$media[0].getAttribute("height")!==null){f.height=f.$media.attr("height")}else{f.height=f.options["default"+c+"Height"]}}}f.setPlayerSize(f.width,f.height);d.pluginWidth=f.width;d.pluginHeight=f.height}else{if(!f.isVideo&&!f.options.features.length){f.$media.hide()}}}}a.MediaElement(f.$media[0],d);if(typeof(f.container)!=="undefined"&&f.options.features.length&&f.controlsAreVisible){f.container.trigger("controlsshown")}},showControls:function(c){var d=this;c=typeof c=="undefined"||c;if(d.controlsAreVisible){return}if(c){d.controls.removeClass("mejs-offscreen").stop(true,true).fadeIn(200,function(){d.controlsAreVisible=true;d.container.trigger("controlsshown")});d.container.find(".mejs-control").removeClass("mejs-offscreen").stop(true,true).fadeIn(200,function(){d.controlsAreVisible=true})}else{d.controls.removeClass("mejs-offscreen").css("display","block");d.container.find(".mejs-control").removeClass("mejs-offscreen").css("display","block");d.controlsAreVisible=true;d.container.trigger("controlsshown")}d.setControlsSize();d.container.find(".mejs-captions-position").removeClass("mejs-captions-position-bottom")},hideControls:function(c){var d=this;c=typeof c=="undefined"||c;if(!d.controlsAreVisible||d.options.alwaysShowControls||d.keyboardAction||d.media.paused||d.media.ended){return}if(c){d.controls.stop(true,true).fadeOut(200,function(){b(this).addClass("mejs-offscreen");if(parseFloat(d.options.css_version)>=1.1){b(this).css("display","block")}d.controlsAreVisible=false;d.container.find(".mejs-captions-position").addClass("mejs-captions-position-bottom");d.container.trigger("controlshidden")});d.container.find(".mejs-control").stop(true,true).fadeOut(200,function(){b(this).addClass("mejs-offscreen");if(parseFloat(d.options.css_version)>=1.1){b(this).css("display","block")}})}else{d.controls.addClass("mejs-offscreen").css("display","block");d.container.find(".mejs-control").addClass("mejs-offscreen").css("display","block");d.controlsAreVisible=false;d.container.trigger("controlshidden");d.container.find(".mejs-captions-position").addClass("mejs-captions-position-bottom")}},controlsTimer:null,startControlsTimer:function(d){var c=this;d=typeof d!="undefined"?d:c.options.controlsTimeoutDefault;c.killControlsTimer("start");c.controlsTimer=setTimeout(function(){c.hideControls();c.killControlsTimer("hide")},d)},killControlsTimer:function(c){var d=this;if(d.controlsTimer!==null){clearTimeout(d.controlsTimer);delete d.controlsTimer;d.controlsTimer=null}},controlsEnabled:true,disableControls:function(){var c=this;c.killControlsTimer();c.hideControls(false);this.controlsEnabled=false},enableControls:function(){var c=this;c.showControls(false);c.controlsEnabled=true},meReady:function(l,f){var n=this,m=a.MediaFeatures,d=f.getAttribute("autoplay"),c=!(typeof d=="undefined"||d===null||d==="false"),k,j;if(n.created){return}else{n.created=true}n.media=l;n.domNode=f;if(!(m.isAndroid&&n.options.AndroidUseNativeControls)&&!(m.isiPad&&n.options.iPadUseNativeControls)&&!(m.isiPhone&&n.options.iPhoneUseNativeControls)){if(!n.isVideo&&!n.options.features.length){if(c&&l.pluginType=="native"){n.play()}if(n.options.success){if(typeof n.options.success=="string"){window[n.options.success](n.media,n.domNode,n)}else{n.options.success(n.media,n.domNode,n)}}return}n.buildposter(n,n.controls,n.layers,n.media);n.buildkeyboard(n,n.controls,n.layers,n.media);n.buildoverlays(n,n.controls,n.layers,n.media);n.findTracks();for(k in n.options.features){j=n.options.features[k];if(n["build"+j]){try{n["build"+j](n,n.controls,n.layers,n.media)}catch(h){}}}n.container.trigger("controlsready");n.setPlayerSize(n.width,n.height);n.setControlsSize();if(n.isVideo){if(a.MediaFeatures.hasTouch&&!n.options.alwaysShowControls){n.$media.bind("touchstart",function(){if(n.controlsAreVisible){n.hideControls(false)}else{if(n.controlsEnabled){n.showControls(false)}}})}else{n.clickToPlayPauseCallback=function(){if(n.options.clickToPlayPause){if(n.media.paused){n.play()}else{n.pause()}var e=n.$media.closest(".mejs-container").find(".mejs-overlay-button"),o=e.attr("aria-pressed");e.attr("aria-pressed",!o)}};n.media.addEventListener("click",n.clickToPlayPauseCallback,false);n.container.bind("mouseenter",function(){if(n.controlsEnabled){if(!n.options.alwaysShowControls){n.killControlsTimer("enter");n.showControls();if(parseFloat(n.options.css_version)>=1.1){}else{n.startControlsTimer(n.options.controlsTimeoutMouseEnter)}}}}).bind("mousemove",function(){if(n.controlsEnabled){if(!n.controlsAreVisible){n.showControls()}if(!n.options.alwaysShowControls){if(parseFloat(n.options.css_version)>=1.1){}else{n.startControlsTimer(n.options.controlsTimeoutMouseEnter)}}}}).bind("mouseleave",function(){if(n.controlsEnabled){if(!n.media.paused&&!n.options.alwaysShowControls){if(parseFloat(n.options.css_version)>=1.1){}else{n.startControlsTimer(n.options.controlsTimeoutMouseEnter)}}}})}if(n.options.hideVideoControlsOnLoad){n.hideControls(false)}if(c&&!n.options.alwaysShowControls){n.hideControls()}if(n.options.enableAutosize){n.media.addEventListener("loadedmetadata",function(o){if(n.options.videoHeight<=0&&n.domNode.getAttribute("height")===null&&!isNaN(o.target.videoHeight)){n.setPlayerSize(o.target.videoWidth,o.target.videoHeight);n.setControlsSize();n.media.setVideoSize(o.target.videoWidth,o.target.videoHeight)}},false)}}n.media.addEventListener("play",function(){var o;for(o in a.players){var e=a.players[o];if(e.id!=n.id&&n.options.pauseOtherPlayers&&!e.paused&&!e.ended){e.pause()}e.hasFocus=false}n.hasFocus=true},false);n.media.addEventListener("ended",function(o){if(n.options.autoRewind){try{n.media.setCurrentTime(0);window.setTimeout(function(){b(n.container).find(".mejs-overlay-loading").parent().hide()},20)}catch(p){}}if(n.media.pluginType==="youtube"){n.media.stop()}else{n.media.pause()}if(n.setProgressRail){n.setProgressRail()}if(n.setCurrentRail){n.setCurrentRail()}if(n.options.loop){n.media.play()}else{if(!n.options.alwaysShowControls&&n.controlsEnabled){n.showControls()}}},false);n.media.addEventListener("loadedmetadata",function(){a.Utility.calculateTimeFormat(n.duration,n.options,n.options.framesPerSecond||25);if(n.updateDuration){n.updateDuration()}if(n.updateCurrent){n.updateCurrent()}if(!n.isFullScreen){n.setPlayerSize(n.width,n.height);n.setControlsSize()}},false);var g=null;var g=null;n.media.addEventListener("timeupdate",function(){if(g!==this.duration){g=this.duration;a.Utility.calculateTimeFormat(g,n.options,n.options.framesPerSecond||25);if(n.updateDuration){n.updateDuration()}if(n.updateCurrent){n.updateCurrent()}n.setControlsSize()}},false);n.container.focusout(function(p){if(p.relatedTarget){var o=b(p.relatedTarget);if(n.keyboardAction&&o.parents(".mejs-container").length===0){n.keyboardAction=false;if(n.isVideo&&!n.options.alwaysShowControls){n.hideControls(true)}}}});setTimeout(function(){n.setPlayerSize(n.width,n.height);n.setControlsSize()},50);n.globalBind("resize",function(){if(!(n.isFullScreen||(a.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen))){n.setPlayerSize(n.width,n.height)}n.setControlsSize()});if(n.media.pluginType=="youtube"&&(m.isiOS||m.isAndroid)){n.container.find(".mejs-overlay-play").hide();n.container.find(".mejs-poster").hide()}}if(c&&l.pluginType=="native"){n.play()}if(n.options.success){if(typeof n.options.success=="string"){window[n.options.success](n.media,n.domNode,n)}else{n.options.success(n.media,n.domNode,n)}}},handleError:function(c){var d=this;if(d.controls){d.controls.hide()}if(d.options.error){d.options.error(c)}},setPlayerSize:function(e,c){var d=this;if(!d.options.setDimensions){return false}if(typeof e!="undefined"){d.width=e}if(typeof c!="undefined"){d.height=c}switch(d.options.stretching){case"fill":if(d.isVideo){this.setFillMode()}else{this.setDimensions(d.width,d.height)}break;case"responsive":this.setResponsiveMode();break;case"none":this.setDimensions(d.width,d.height);break;default:if(this.hasFluidMode()===true){this.setResponsiveMode()}else{this.setDimensions(d.width,d.height)}break}},hasFluidMode:function(){var c=this;return(c.height.toString().indexOf("%")>0||(c.$node.css("max-width")!=="none"&&c.$node.css("max-width")!=="t.width")||(c.$node[0].currentStyle&&c.$node[0].currentStyle.maxWidth==="100%"))},setResponsiveMode:function(){var h=this;var d=(function(){if(h.isVideo){if(h.media.videoWidth&&h.media.videoWidth>0){return h.media.videoWidth}else{if(h.media.getAttribute("width")!==null){return h.media.getAttribute("width")}else{return h.options.defaultVideoWidth}}}else{return h.options.defaultAudioWidth}})();var c=(function(){if(h.isVideo){if(h.media.videoHeight&&h.media.videoHeight>0){return h.media.videoHeight}else{if(h.media.getAttribute("height")!==null){return h.media.getAttribute("height")}else{return h.options.defaultVideoHeight}}}else{return h.options.defaultAudioHeight}})();var g=h.container.parent().closest(":visible").width(),f=h.container.parent().closest(":visible").height(),e=h.isVideo||!h.options.autosizeProgress?parseInt(g*c/d,10):c;if(isNaN(e)||(f!==0&&e>f&&f>c)){e=f}if(h.container.parent().length>0&&h.container.parent()[0].tagName.toLowerCase()==="body"){g=b(window).width();e=b(window).height()}if(e&&g){h.container.width(g).height(e);h.$media.add(h.container.find(".mejs-shim")).width("100%").height("100%");if(h.isVideo){if(h.media.setVideoSize){h.media.setVideoSize(g,e)}}h.layers.children(".mejs-layer").width("100%").height("100%")}},setFillMode:function(){var p=this,h=p.outerContainer;if(!h.width()){h.height(p.$media.width())}if(!h.height()){h.height(p.$media.height())}var k=h.width(),j=h.height();p.setDimensions("100%","100%");p.container.find(".mejs-poster img").css("display","block");targetElement=p.container.find("object, embed, iframe, video");var f=p.height,g=p.width,l=k,n=(f*k)/g,m=(g*j)/f,o=j,c=!(m>k),e=c?Math.floor(l):Math.floor(m),d=c?Math.floor(n):Math.floor(o);if(c){targetElement.height(d).width(k);if(p.media.setVideoSize){p.media.setVideoSize(k,d)}}else{targetElement.height(j).width(e);if(p.media.setVideoSize){p.media.setVideoSize(e,j)}}targetElement.css({"margin-left":Math.floor((k-e)/2),"margin-top":0})},setDimensions:function(e,c){var d=this;d.container.width(e).height(c);d.layers.children(".mejs-layer").width(e).height(c)},setControlsSize:function(){var j=this,l=0,h=0,g=j.controls.find(".mejs-time-rail"),k=j.controls.find(".mejs-time-total"),f=g.siblings(),d=f.last(),e=null,c=j.options&&!j.options.autosizeProgress;if(!j.container.is(":visible")||!g.length||!g.is(":visible")){return}if(c){h=parseInt(g.css("width"),10)}if(h===0||!h){f.each(function(){var m=b(this);if(m.css("position")!="absolute"&&m.is(":visible")){l+=b(this).outerWidth(true)}});h=j.controls.width()-l-(g.outerWidth(true)-g.width())}do{if(!c){g.width(h)}k.width(h-(k.outerWidth(true)-k.width()));if(d.css("position")!="absolute"){e=d.length?d.position():null;h--}}while(e!==null&&e.top.toFixed(2)>0&&h>0);j.container.trigger("controlsresize")},buildposter:function(f,c,d,e){var j=this,g=b('<div class="mejs-poster mejs-layer"></div>').appendTo(d),h=f.$media.attr("data-posterurl");if(f.options.poster!==""){h=f.options.poster}if(h){j.setPoster(h)}else{g.hide()}e.addEventListener("play",function(){g.hide()},false);if(f.options.showPosterWhenEnded&&f.options.autoRewind){e.addEventListener("ended",function(){g.show()},false)}},setPoster:function(f){var e=this,c=e.container.find(".mejs-poster"),d=c.find("img");if(d.length===0){d=b('<img width="100%" height="100%" alt="" />').appendTo(c)}d.attr("src",f)},buildoverlays:function(j,d,f,h){var k=this;if(!j.isVideo){return}var g=b('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(f),e=b('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(f),c=b('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button" role="button" aria-label="'+a.i18n.t("mejs.play")+'" aria-pressed="false"></div></div>').appendTo(f).bind("click",function(){if(k.options.clickToPlayPause){if(h.paused){h.play()}var l=b(this).find(".mejs-overlay-button"),m=l.attr("aria-pressed");l.attr("aria-pressed",!!m)}});h.addEventListener("play",function(){c.hide();g.hide();d.find(".mejs-time-buffering").hide();e.hide()},false);h.addEventListener("playing",function(){c.hide();g.hide();d.find(".mejs-time-buffering").hide();e.hide()},false);h.addEventListener("seeking",function(){g.show();d.find(".mejs-time-buffering").show()},false);h.addEventListener("seeked",function(){g.hide();d.find(".mejs-time-buffering").hide()},false);h.addEventListener("pause",function(){if(!a.MediaFeatures.isiPhone){c.show()}},false);h.addEventListener("waiting",function(){g.show();d.find(".mejs-time-buffering").show()},false);h.addEventListener("loadeddata",function(){g.show();d.find(".mejs-time-buffering").show();if(a.MediaFeatures.isAndroid){h.canplayTimeout=window.setTimeout(function(){if(document.createEvent){var l=document.createEvent("HTMLEvents");l.initEvent("canplay",true,true);return h.dispatchEvent(l)}},300)}},false);h.addEventListener("canplay",function(){g.hide();d.find(".mejs-time-buffering").hide();clearTimeout(h.canplayTimeout)},false);h.addEventListener("error",function(l){k.handleError(l);g.hide();c.hide();e.show();e.find(".mejs-overlay-error").html("Error loading this resource")},false);h.addEventListener("keydown",function(l){k.onkeydown(j,h,l)},false)},buildkeyboard:function(f,c,d,e){var g=this;g.container.keydown(function(){g.keyboardAction=true});g.globalBind("keydown",function(h){f.hasFocus=b(h.target).closest(".mejs-container").length!==0&&b(h.target).closest(".mejs-container").attr("id")===f.$media.closest(".mejs-container").attr("id");return g.onkeydown(f,e,h)});g.globalBind("click",function(h){f.hasFocus=b(h.target).closest(".mejs-container").length!==0})},onkeydown:function(m,l,c){if(m.hasFocus&&m.options.enableKeyboard){for(var d=0,f=m.options.keyActions.length;d<f;d++){var k=m.options.keyActions[d];for(var g=0,h=k.keys.length;g<h;g++){if(c.keyCode==k.keys[g]){if(typeof(c.preventDefault)=="function"){c.preventDefault()}k.action(m,l,c.keyCode,c);return false}}}}return true},findTracks:function(){var c=this,d=c.$media.find("track");c.tracks=[];d.each(function(e,f){f=b(f);c.tracks.push({srclang:(f.attr("srclang"))?f.attr("srclang").toLowerCase():"",src:f.attr("src"),"data-src":f.attr("data-src"),kind:f.attr("kind"),label:f.attr("label")||"",entries:[],isLoaded:false})})},changeSkin:function(c){this.container[0].className="mejs-container "+c;this.setPlayerSize(this.width,this.height);this.setControlsSize()},play:function(){this.load();this.media.play()},pause:function(){try{this.media.pause()}catch(c){}},load:function(){if(!this.isLoaded){this.media.load()}this.isLoaded=true},setMuted:function(c){this.media.setMuted(c)},setCurrentTime:function(c){this.media.setCurrentTime(c)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(c){this.media.setVolume(c)},getVolume:function(){return this.media.volume},setSrc:function(e){var f=this;if(f.media.pluginType==="youtube"){var g;if(typeof e!=="string"){var c,d;for(c=0;c<e.length;c++){d=e[c];if(this.canPlayType(d.type)){e=d.src;break}}}if(e.lastIndexOf("youtu.be")!==-1){g=e.substr(e.lastIndexOf("/")+1);if(g.indexOf("?")!==-1){g=g.substr(0,g.indexOf("?"))}}else{var h=e.match(/[?&]v=([^&#]+)|&|#|$/);if(h){g=h[1]}}if(f.media.getAttribute("autoplay")!==null){f.media.pluginApi.loadVideoById(g)}else{f.media.pluginApi.cueVideoById(g)}}else{f.media.setSrc(e)}},remove:function(){var g=this,f,d;g.container.prev(".mejs-offscreen").remove();for(f in g.options.features){d=g.options.features[f];if(g["clean"+d]){try{g["clean"+d](g)}catch(c){}}}if(!g.isDynamic){g.$media.prop("controls",true);g.$node.clone().insertBefore(g.container).show();g.$node.remove()}else{g.$node.insertBefore(g.container)}if(g.media.pluginType!=="native"){g.media.remove()}delete a.players[g.id];if(typeof g.container=="object"){g.container.remove()}g.globalUnbind();delete g.node.player},rebuildtracks:function(){var c=this;c.findTracks();c.buildtracks(c,c.controls,c.layers,c.media)},resetSize:function(){var c=this;setTimeout(function(){c.setPlayerSize(c.width,c.height);c.setControlsSize()},50)}};(function(){var c=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;function d(e,f){var g={d:[],w:[]};b.each((e||"").split(" "),function(j,l){var h=l+"."+f;if(h.indexOf(".")===0){g.d.push(h);g.w.push(h)}else{g[c.test(l)?"w":"d"].push(h)}});g.d=g.d.join(" ");g.w=g.w.join(" ");return g}a.MediaElementPlayer.prototype.globalBind=function(h,f,e){var j=this;var g=j.node?j.node.ownerDocument:document;h=d(h,j.id);if(h.d){b(g).bind(h.d,f,e)}if(h.w){b(window).bind(h.w,f,e)}};a.MediaElementPlayer.prototype.globalUnbind=function(g,e){var h=this;var f=h.node?h.node.ownerDocument:document;g=d(g,h.id);if(g.d){b(f).unbind(g.d,e)}if(g.w){b(window).unbind(g.w,e)}}})();if(typeof zeQuery!="undefined"){zeQuery.fn.mediaelementplayer=function(c){if(c===false){this.each(function(){var d=zeQuery(this).data("mediaelementplayer");if(d){d.remove()}zeQuery(this).removeData("mediaelementplayer")})}else{this.each(function(){zeQuery(this).data("mediaelementplayer",new a.MediaElementPlayer(this,c))})}return this};b(document).ready(function(){b(".mejs-player").mediaelementplayer()})}window.CincopaMediaElementPlayer=a.MediaElementPlayer})(a.$);(function(b){b.extend(a.MepDefaults,{playText:"",pauseText:""});b.extend(CincopaMediaElementPlayer.prototype,{buildplaypause:function(k,c,d,e){var m=this,f=m.options,l=f.playText?f.playText:a.i18n.t("mejs.play"),g=f.pauseText?f.pauseText:a.i18n.t("mejs.pause"),h=b('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+m.id+'" title="'+l+'" aria-label="'+g+'"></button></div>').appendTo(c).click(function(o){o.preventDefault();if(e.paused){e.play()}else{e.pause()}return false}),j=h.find("button");function n(o){if("play"===o){h.removeClass("mejs-play").addClass("mejs-pause");j.attr({title:g,"aria-label":g})}else{h.removeClass("mejs-pause").addClass("mejs-play");j.attr({title:l,"aria-label":l})}}n("pse");e.addEventListener("play",function(){n("play")},false);e.addEventListener("playing",function(){n("play")},false);e.addEventListener("pause",function(){n("pse")},false);e.addEventListener("paused",function(){n("pse")},false)}})})(a.$);(function(b){b.extend(a.MepDefaults,{stopText:"Stop"});b.extend(CincopaMediaElementPlayer.prototype,{buildstop:function(f,c,d,e){var g=this;b('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+g.id+'" title="'+g.options.stopText+'" aria-label="'+g.options.stopText+'"></button></div>').appendTo(c).click(function(){if(!e.paused){e.pause()}if(e.currentTime>0){e.setCurrentTime(0);e.pause();c.find(".mejs-time-current").width("0px");c.find(".mejs-time-handle").css("left","0px");c.find(".mejs-time-float-current").html(a.Utility.secondsToTimeCode(0,f.options));c.find(".mejs-currenttime").html(a.Utility.secondsToTimeCode(0,f.options));d.find(".mejs-poster").show()}})}})})(a.$);(function(b){b.extend(a.MepDefaults,{enableProgressTooltip:true,progressHelpText:""});b.extend(CincopaMediaElementPlayer.prototype,{buildprogress:function(l,d,g,h){var p=this,j=false,k=false,f=0,o=false,c=l.options.autoRewind,m=p.options.progressHelpText?p.options.progressHelpText:a.i18n.t("mejs.time-help-text"),q=l.options.enableProgressTooltip?'<span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span>':"";b('<div class="mejs-time-rail"><span  class="mejs-slider-unvisible"><span class="mejs-slider-unvisible-total"></span></span><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span>'+q+"</span></div>").appendTo(d);d.find(".mejs-time-buffering").hide();p.total=d.find(".mejs-time-total");p.loaded=d.find(".mejs-time-loaded");p.current=d.find(".mejs-time-current");p.handle=d.find(".mejs-time-handle");p.timefloat=d.find(".mejs-time-float");p.timefloatcurrent=d.find(".mejs-time-float-current");p.slider=d.find(".mejs-time-slider");p.unvisibleSlider=d.find(".mejs-slider-unvisible");var e=function(s){var u=p.total.offset(),y=p.total.width(),v=0,t=0,w=0,z;if(s.originalEvent&&s.originalEvent.changedTouches){z=s.originalEvent.changedTouches[0].pageX}else{if(s.changedTouches){z=s.changedTouches[0].pageX}else{z=s.pageX}}if(h.duration){if(z<u.left){z=u.left}else{if(z>y+u.left){z=y+u.left}}w=z-u.left;v=(w/y);t=Math.floor(v*h.duration);if(j&&t!==h.currentTime){h.setCurrentTime(t)}if(!a.MediaFeatures.hasTouch||l.options.floatTimeAlways){p.timefloat.css("left",w);p.timefloatcurrent.html(a.Utility.secondsToTimeCode(t,l.options));p.timefloat.show()}}},r=function(t){var u=h.currentTime,w=a.i18n.t("mejs.time-slider"),v=a.Utility.secondsToTimeCode(u,l.options),s=h.duration;p.slider.attr({"aria-label":w,"aria-valuemin":0,"aria-valuemax":s,"aria-valuenow":u,"aria-valuetext":v,role:"slider",tabindex:0})},n=function(){var s=new Date();if(s-f>=1000){h.play()}};p.slider.bind("focus",function(s){l.options.autoRewind=false});p.slider.bind("blur",function(s){l.options.autoRewind=c});p.slider.bind("keydown",function(t){if((new Date()-f)>=1000){o=h.paused}var u=t.keyCode,s=h.duration,x=h.currentTime,w=l.options.defaultSeekForwardInterval(h),v=l.options.defaultSeekBackwardInterval(h);switch(u){case 37:case 40:x-=v;break;case 39:case 38:x+=w;break;case 36:x=0;break;case 35:x=s;break;case 32:case 13:h.paused?h.play():h.pause();return;default:return}x=x<0?0:(x>=s?s:Math.floor(x));f=new Date();if(!o){h.pause()}if(x<h.duration&&!o){setTimeout(n,1100)}h.setCurrentTime(x);t.preventDefault();t.stopPropagation();return false});p.total.bind("mousedown touchstart",function(s){if(s.which===1||s.which===0){j=true;e(s);p.globalBind("mousemove.dur touchmove.dur",function(t){if(t.type=="touchmove"){j=false}e(t)});p.globalBind("mouseup.dur touchend.dur",function(t){if(t.type=="touchend"){j=true;e(t)}j=false;if(typeof p.timefloat!=="undefined"){p.timefloat.hide()}p.globalUnbind(".dur")})}}).bind("mouseenter",function(s){k=true;p.globalBind("mousemove.dur",function(t){e(t)});if(typeof p.timefloat!=="undefined"&&!a.MediaFeatures.hasTouch){p.timefloat.show()}}).bind("mouseleave",function(s){k=false;if(!j){p.globalUnbind(".dur");if(typeof p.timefloat!=="undefined"){p.timefloat.hide()}}});p.unvisibleSlider.bind("mousedown touchstart",function(s){if(s.which===1||s.which===0){j=true;e(s);p.globalBind("mousemove.dur touchmove.dur",function(t){if(t.type=="touchmove"){j=false}e(t)});p.globalBind("mouseup.dur touchend.dur",function(t){if(t.type=="touchend"){j=true;e(t)}j=false;if(typeof p.timefloat!=="undefined"){p.timefloat.hide()}p.globalUnbind(".dur")})}}).bind("mouseenter",function(s){k=true;p.globalBind("mousemove.dur",function(t){e(t)});if(typeof p.timefloat!=="undefined"&&!a.MediaFeatures.hasTouch){p.timefloat.show()}}).bind("mouseleave",function(s){k=false;if(!j){p.globalUnbind(".dur");if(typeof p.timefloat!=="undefined"){p.timefloat.hide()}}});h.addEventListener("progress",function(s){l.setProgressRail(s);l.setCurrentRail(s)},false);h.addEventListener("timeupdate",function(s){l.setProgressRail(s);l.setCurrentRail(s);r(s)},false);p.container.on("controlsresize",function(s){l.setProgressRail(s);l.setCurrentRail(s)})},setProgressRail:function(c){var f=this,g=(c!==undefined)?c.target:f.media,d=null;if(g&&g.buffered&&g.buffered.length>0&&g.buffered.end&&g.duration){d=g.buffered.end(g.buffered.length-1)/g.duration}else{if(g&&g.bytesTotal!==undefined&&g.bytesTotal>0&&g.bufferedBytes!==undefined){d=g.bufferedBytes/g.bytesTotal}else{if(c&&c.lengthComputable&&c.total!==0){d=c.loaded/c.total}}}if(d!==null){d=Math.min(1,Math.max(0,d));if(f.loaded&&f.total){f.loaded.width(f.total.width()*d)}}},setCurrentRail:function(){var e=this;if(e.media.currentTime!==undefined&&e.media.duration){if(e.total&&e.handle){var d=Math.round(e.total.width()*e.media.currentTime/e.media.duration),c=d-Math.round(e.handle.outerWidth(true)/2);e.current.width(d);e.handle.css("left",c)}}}})})(a.$);(function(b){b.extend(a.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> / </span>"});b.extend(CincopaMediaElementPlayer.prototype,{buildcurrent:function(f,c,d,e){var g=this;b('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">'+a.Utility.secondsToTimeCode(0,f.options)+"</span></div>").appendTo(c);g.currenttime=g.controls.find(".mejs-currenttime");e.addEventListener("timeupdate",function(){if(g.controlsAreVisible){f.updateCurrent()}},false)},buildduration:function(f,c,d,e){var g=this;if(c.children().last().find(".mejs-currenttime").length>0){b(g.options.timeAndDurationSeparator+'<span class="mejs-duration">'+a.Utility.secondsToTimeCode(g.options.duration,g.options)+"</span>").appendTo(c.find(".mejs-time"))}else{c.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");b('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+a.Utility.secondsToTimeCode(g.options.duration,g.options)+"</span></div>").appendTo(c)}g.durationD=g.controls.find(".mejs-duration");e.addEventListener("timeupdate",function(){if(g.controlsAreVisible){f.updateDuration()}},false)},updateCurrent:function(){var d=this;var c=d.media.currentTime;if(isNaN(c)){c=0}if(d.currenttime){d.currenttime.html(a.Utility.secondsToTimeCode(c,d.options))}},updateDuration:function(){var d=this;var c=d.media.duration;if(d.options.duration>0){c=d.options.duration}if(isNaN(c)){c=0}d.container.toggleClass("mejs-long-video",c>3600);if(d.durationD&&c>0){d.durationD.html(a.Utility.secondsToTimeCode(c,d.options))}}})})(a.$);(function(b){b.extend(a.MepDefaults,{muteText:a.i18n.t("mejs.mute-toggle"),allyVolumeControlText:a.i18n.t("mejs.volume-help-text"),hideVolumeOnTouchDevices:true,audioVolume:"horizontal",videoVolume:"vertical"});b.extend(CincopaMediaElementPlayer.prototype,{buildvolume:function(l,c,e,f){if((a.MediaFeatures.isAndroid||a.MediaFeatures.isiOS)&&this.options.hideVolumeOnTouchDevices){return}var n=this,g=(n.isVideo)?n.options.videoVolume:n.options.audioVolume,k=(g=="horizontal")?b('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+n.id+'" title="'+n.options.muteText+'" aria-label="'+n.options.muteText+'"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">'+n.options.allyVolumeControlText+'</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(c):b('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+n.id+'" title="'+n.options.muteText+'" aria-label="'+n.options.muteText+'"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">'+n.options.allyVolumeControlText+'</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(c),r=n.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),s=n.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),p=n.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),q=n.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),m=function(z,v){if(!r.is(":visible")&&typeof v=="undefined"){r.show();m(z,true);r.hide();return}z=Math.max(0,z);z=Math.min(z,1);if(z===0){k.removeClass("mejs-mute").addClass("mejs-unmute");k.children("button").attr("title",a.i18n.t("mejs.unmute")).attr("aria-label",a.i18n.t("mejs.unmute"))}else{k.removeClass("mejs-unmute").addClass("mejs-mute");k.children("button").attr("title",a.i18n.t("mejs.mute")).attr("aria-label",a.i18n.t("mejs.mute"))}var x=s.position();if(g=="vertical"){var w=s.height(),u=w-(w*z);q.css("top",Math.round(x.top+u-(q.height()/2)));p.height(w-u);p.css("top",x.top+u)}else{var y=s.width(),t=y*z;q.css("left",Math.round(x.left+t-(q.width()/2)));p.width(Math.round(t))}},d=function(t){var z=null,y=s.offset();if(g==="vertical"){var w=s.height(),v=t.pageY-y.top;z=(w-v)/w;if(y.top===0||y.left===0){return}}else{var x=s.width(),u=t.pageX-y.left;z=u/x}z=Math.max(0,z);z=Math.min(z,1);m(z);if(z===0){f.setMuted(true)}else{f.setMuted(false)}f.setVolume(z)},h=false,j=false;k.hover(function(){r.show();j=true},function(){j=false;if(!h&&g=="vertical"){r.hide()}});var o=function(t){var u=Math.floor(f.volume*100);r.attr({"aria-label":a.i18n.t("mejs.volume-slider"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":u,"aria-valuetext":u+"%",role:"slider",tabindex:0})};r.bind("mouseover",function(){j=true}).bind("mousedown",function(t){d(t);n.globalBind("mousemove.vol",function(u){d(u)});n.globalBind("mouseup.vol",function(){h=false;n.globalUnbind(".vol");if(!j&&g=="vertical"){r.hide()}});h=true;return false}).bind("keydown",function(t){var u=t.keyCode;var v=f.volume;switch(u){case 38:v=Math.min(v+0.1,1);break;case 40:v=Math.max(0,v-0.1);break;default:return true}h=false;m(v);f.setVolume(v);return false});k.find("button").click(function(){f.setMuted(!f.muted)});k.find("button").bind("focus",function(){r.show()});f.addEventListener("volumechange",function(t){if(!h){if(f.muted){m(0);k.removeClass("mejs-mute").addClass("mejs-unmute")}else{m(f.volume);k.removeClass("mejs-unmute").addClass("mejs-mute")}}o(t)},false);if(l.options.startVolume===0){f.setMuted(true)}if(f.pluginType==="native"){f.setVolume(l.options.startVolume)}n.container.on("controlsresize",function(){if(f.muted){m(0);k.removeClass("mejs-mute").addClass("mejs-unmute")}else{m(f.volume);k.removeClass("mejs-unmute").addClass("mejs-mute")}})}})})(a.$);(function(b){b.extend(a.MepDefaults,{usePluginFullScreen:true,newWindowCallback:function(){return""},fullscreenText:""});b.extend(CincopaMediaElementPlayer.prototype,{isFullScreen:false,isNativeFullScreen:false,isInIframe:false,fullscreenMode:"",buildfullscreen:function(k,c,h,j){if(!k.isVideo){return}k.isInIframe=(window.location!=window.parent.location);j.addEventListener("loadstart",function(){k.detectFullscreenMode()});var l=this,g=null,f=l.options.fullscreenText?l.options.fullscreenText:a.i18n.t("mejs.fullscreen"),d=b('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+l.id+'" title="'+f+'" aria-label="'+f+'"></button></div>').appendTo(c).on("click",function(){var m=(a.MediaFeatures.hasTrueNativeFullScreen&&a.MediaFeatures.isFullScreen())||k.isFullScreen;if(m){k.exitFullScreen()}else{k.enterFullScreen()}}).on("mouseover",function(){if(l.fullscreenMode=="plugin-hover"){if(g!==null){clearTimeout(g);delete g}var m=d.offset(),n=k.container.offset();j.positionFullscreenButton(m.left-n.left,m.top-n.top,true)}}).on("mouseout",function(){if(l.fullscreenMode=="plugin-hover"){if(g!==null){clearTimeout(g);delete g}g=setTimeout(function(){j.hideFullscreenButton()},1500)}});k.fullscreenBtn=d;l.globalBind("keydown",function(m){if(m.keyCode==27&&((a.MediaFeatures.hasTrueNativeFullScreen&&a.MediaFeatures.isFullScreen())||l.isFullScreen)){k.exitFullScreen()}});l.normalHeight=0;l.normalWidth=0;if(a.MediaFeatures.hasTrueNativeFullScreen){var e=function(m){if(k.isFullScreen){if(a.MediaFeatures.isFullScreen()){k.isNativeFullScreen=true;k.setControlsSize()}else{k.isNativeFullScreen=false;k.exitFullScreen()}}};k.globalBind(a.MediaFeatures.fullScreenEventName,e)}},detectFullscreenMode:function(){var e=this,d="",c=a.MediaFeatures;if(c.hasTrueNativeFullScreen&&e.media.pluginType==="native"){d="native-native"}else{if(c.hasTrueNativeFullScreen&&e.media.pluginType!=="native"&&!c.hasFirefoxPluginMovingProblem){d="plugin-native"}else{if(e.usePluginFullScreen){if(a.MediaFeatures.supportsPointerEvents){d="plugin-click";e.createPluginClickThrough()}else{d="plugin-hover"}}else{d="fullwindow"}}}e.fullscreenMode=d;return d},isPluginClickThroughCreated:false,createPluginClickThrough:function(){var k=this;if(k.isPluginClickThroughCreated){return}var c=false,j=function(){if(c){for(var l in e){e[l].hide()}k.fullscreenBtn.css("pointer-events","");k.controls.css("pointer-events","");k.media.removeEventListener("click",k.clickToPlayPauseCallback);c=false}},e={},d=["top","left","right","bottom"],f,g,h=function(){var o=fullscreenBtn.offset().left-k.container.offset().left,p=fullscreenBtn.offset().top-k.container.offset().top,q=fullscreenBtn.outerWidth(true),n=fullscreenBtn.outerHeight(true),m=k.container.width(),l=k.container.height();for(f in e){e[f].css({position:"absolute",top:0,left:0})}e.top.width(m).height(p);e.left.width(o).height(n).css({top:p});e.right.width(m-o-q).height(n).css({top:p,left:o+q});e.bottom.width(m).height(l-n-p).css({top:p+n})};k.globalBind("resize",function(){h()});for(f=0,g=d.length;f<g;f++){e[d[f]]=b('<div class="mejs-fullscreen-hover" />').appendTo(k.container).mouseover(j).hide()}fullscreenBtn.on("mouseover",function(){if(!k.isFullScreen){var l=fullscreenBtn.offset(),m=player.container.offset();media.positionFullscreenButton(l.left-m.left,l.top-m.top,false);k.fullscreenBtn.css("pointer-events","none");k.controls.css("pointer-events","none");k.media.addEventListener("click",k.clickToPlayPauseCallback);for(f in e){e[f].show()}h();c=true}});media.addEventListener("fullscreenchange",function(l){k.isFullScreen=!k.isFullScreen;if(k.isFullScreen){k.media.removeEventListener("click",k.clickToPlayPauseCallback)}else{k.media.addEventListener("click",k.clickToPlayPauseCallback)}j()});k.globalBind("mousemove",function(l){if(c){var m=fullscreenBtn.offset();if(l.pageY<m.top||l.pageY>m.top+fullscreenBtn.outerHeight(true)||l.pageX<m.left||l.pageX>m.left+fullscreenBtn.outerWidth(true)){fullscreenBtn.css("pointer-events","");k.controls.css("pointer-events","");c=false}}});k.isPluginClickThroughCreated=true},cleanfullscreen:function(c){c.exitFullScreen()},containerSizeTimeout:null,enterFullScreen:function(){var d=this;if(a.MediaFeatures.isiOS&&a.MediaFeatures.hasiOSFullScreen&&typeof d.media.webkitEnterFullscreen==="function"){d.media.webkitEnterFullscreen();return}b(document.documentElement).addClass("mejs-fullscreen");d.normalHeight=d.container.height();d.normalWidth=d.container.width();if(d.fullscreenMode==="native-native"||d.fullscreenMode==="plugin-native"){a.MediaFeatures.requestFullScreen(d.container[0]);if(d.isInIframe){setTimeout(function c(){if(d.isNativeFullScreen){var h=0.002,k=b(window).width(),j=screen.width,f=Math.abs(j-k),g=j*h;if(f>g){setTimeout(c,500)}else{setTimeout(c,500)}}},1000)}}else{if(d.fullscreeMode=="fullwindow"){}}d.container.addClass("mejs-container-fullscreen").width("100%").height("100%");d.containerSizeTimeout=setTimeout(function(){d.container.css({width:"100%",height:"100%"});d.setControlsSize()},500);if(d.media.pluginType==="native"){d.$media.width("100%").height("100%")}else{d.container.find(".mejs-shim").width("100%").height("100%");setTimeout(function(){var f=b(window),h=f.width(),g=f.height();d.media.setVideoSize(h,g)},500)}d.layers.children("div").width("100%").height("100%");if(d.fullscreenBtn){d.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");d.fullscreenBtn.find("button").attr("title","Unfullscreen")}d.setControlsSize();d.isFullScreen=true;var e=Math.min(screen.width/d.width,screen.height/d.height);d.container.find(".mejs-captions-text").css("line-height","normal");d.container.trigger("enteredfullscreen")},exitFullScreen:function(){var c=this;clearTimeout(c.containerSizeTimeout);if(a.MediaFeatures.hasTrueNativeFullScreen&&(a.MediaFeatures.isFullScreen()||c.isFullScreen)){a.MediaFeatures.cancelFullScreen()}b(document.documentElement).removeClass("mejs-fullscreen");c.container.removeClass("mejs-container-fullscreen").width(c.normalWidth).height(c.normalHeight);if(c.media.pluginType==="native"){c.$media.width(c.normalWidth).height(c.normalHeight)}else{c.container.find(".mejs-shim").width(c.normalWidth).height(c.normalHeight);c.media.setVideoSize(c.normalWidth,c.normalHeight)}c.layers.children("div").width(c.normalWidth).height(c.normalHeight);c.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");c.fullscreenBtn&&c.fullscreenBtn.find("button").attr("title","Fullscreen");c.setControlsSize();c.isFullScreen=false;c.container.find(".mejs-captions-position").css("bottom","");c.container.trigger("exitedfullscreen")}})})(a.$);(function(b){b.extend(a.MepDefaults,{speeds:["2.00","1.50","1.25","1.00","0.75"],defaultSpeed:"1.00",speedChar:"x"});b.extend(CincopaMediaElementPlayer.prototype,{buildspeed:function(n,c,j,l){var u=this;if(u.media.pluginType=="native"){var p=null,r=null,m=null,h=null;var q=[];var d=false;for(var g=0,k=u.options.speeds.length;g<k;g++){var o=u.options.speeds[g];if(typeof(o)==="string"){q.push({name:o+u.options.speedChar,value:o});if(o===u.options.defaultSpeed){d=true}}else{q.push(o);if(o.value===u.options.defaultSpeed){d=true}}}if(!d){q.push({name:u.options.defaultSpeed+u.options.speedChar,value:u.options.defaultSpeed})}q.sort(function(s,t){return parseFloat(t.value)-parseFloat(s.value)});var e=function(s){for(g=0,k=q.length;g<k;g++){if(q[g].value===s){return q[g].name}}};var f='<div class="mejs-button mejs-speed-button"><button type="button">'+e(u.options.defaultSpeed)+'</button><div class="mejs-speed-selector"><ul>';for(g=0,il=q.length;g<il;g++){h=u.id+"-speed-"+q[g].value;f+='<li><input type="radio" name="speed" value="'+q[g].value+'" id="'+h+'" '+(q[g].value===u.options.defaultSpeed?" checked":"")+' /><label for="'+h+'" '+(q[g].value===u.options.defaultSpeed?' class="mejs-speed-selected"':"")+">"+q[g].name+"</label></li>"}f+="</ul></div></div>";p=b(f).appendTo(c);r=p.find(".mejs-speed-selector");m=u.options.defaultSpeed;l.addEventListener("loadedmetadata",function(s){if(m){l.playbackRate=parseFloat(m)}},true);r.on("click",'input[type="radio"]',function(){var s=b(this).attr("value");m=s;l.playbackRate=parseFloat(s);p.find("button").html(e(s));p.find(".mejs-speed-selected").removeClass("mejs-speed-selected");p.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")});p.one("mouseenter focusin",function(){r.height(p.find(".mejs-speed-selector ul").outerHeight(true)+p.find(".mejs-speed-translations").outerHeight(true)).css("top",(-1*r.height())+"px")})}}})})(a.$);(function(b){b.extend(a.MepDefaults,{startLanguage:"",tracksText:"",tracksAriaLive:false,hideCaptionsButtonWhenEmpty:true,toggleCaptionsButtonWhenOnlyOne:false,slidesSelector:""});b.extend(CincopaMediaElementPlayer.prototype,{hasChapters:false,cleartracks:function(f,c,d,e){if(f){if(f.captions){f.captions.remove()}if(f.chapters){f.chapters.remove()}if(f.captionsText){f.captionsText.remove()}if(f.captionsButton){f.captionsButton.remove()}}},buildtracks:function(j,d,g,h){if(j.tracks.length===0){return}var l=this,c=l.options.tracksAriaLive?'role="log" aria-live="assertive" aria-atomic="false"':"",m=l.options.tracksText?l.options.tracksText:a.i18n.t("mejs.captions-subtitles"),e,f;if(l.domNode.textTracks){for(e=l.domNode.textTracks.length-1;e>=0;e--){l.domNode.textTracks[e].mode="hidden"}}l.cleartracks(j,d,g,h);j.chapters=b('<div class="mejs-chapters mejs-layer"></div>').prependTo(g).hide();j.captions=b('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" '+c+'><span class="mejs-captions-text"></span></div></div>').prependTo(g).hide();j.captionsText=j.captions.find(".mejs-captions-text");j.captionsButton=b('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+l.id+'" title="'+m+'" aria-label="'+m+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+j.id+'_captions" id="'+j.id+'_captions_none" value="none" checked="checked" /><label for="'+j.id+'_captions_none">'+a.i18n.t("mejs.none")+"</label></li></ul></div></div>").appendTo(d);var k=0;for(e=0;e<j.tracks.length;e++){f=j.tracks[e].kind;if(f==="subtitles"||f==="captions"){k++}}if(l.options.toggleCaptionsButtonWhenOnlyOne&&k==1){j.captionsButton.on("click",function(){if(j.selectedTrack===null){lang=j.tracks[0].srclang}else{lang="none"}j.setTrack(lang)})}else{j.captionsButton.on("mouseenter focusin",function(){b(this).find(".mejs-captions-selector").removeClass("mejs-offscreen")}).on("click","input[type=radio]",function(){lang=this.value;j.setTrack(lang)});j.captionsButton.on("click",".mejs-captions-list",function(){setTimeout(function(){j.captionsButton.find(".mejs-captions-selector").addClass("mejs-offscreen")},10)})}if(!j.options.alwaysShowControls){j.container.bind("controlsshown",function(){j.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){if(!h.paused){j.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")}})}else{j.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}j.trackToLoad=-1;j.selectedTrack=null;j.isLoadingTrack=false;for(e=0;e<j.tracks.length;e++){f=j.tracks[e].kind;if(f==="subtitles"||f==="captions"){j.addTrackButton(j.tracks[e].srclang,j.tracks[e].label)}}j.loadNextTrack();h.addEventListener("timeupdate",function(){j.displayCaptions()},false);if(j.options.slidesSelector!==""){j.slidesContainer=b(j.options.slidesSelector);h.addEventListener("timeupdate",function(){j.displaySlides()},false)}h.addEventListener("loadedmetadata",function(){j.displayChapters()},false);j.container.hover(function(){if(j.hasChapters){j.chapters.removeClass("mejs-offscreen");j.chapters.fadeIn(200).height(j.chapters.find(".mejs-chapter").outerHeight())}},function(){if(j.hasChapters&&!h.paused){j.chapters.fadeOut(200,function(){b(this).addClass("mejs-offscreen");b(this).css("display","block")})}});l.container.on("controlsresize",function(){l.adjustLanguageBox()});if(j.node.getAttribute("autoplay")!==null){j.chapters.addClass("mejs-offscreen")}},setTrack:function(d){var e=this,c;if(d=="none"){e.selectedTrack=null;e.captionsButton.removeClass("mejs-captions-enabled")}else{for(c=0;c<e.tracks.length;c++){if(e.tracks[c].srclang==d){if(e.selectedTrack===null){e.captionsButton.addClass("mejs-captions-enabled")}e.selectedTrack=e.tracks[c];e.captions.attr("lang",e.selectedTrack.srclang);e.displayCaptions();break}}}},loadNextTrack:function(){var c=this;c.trackToLoad++;if(c.trackToLoad<c.tracks.length){c.isLoadingTrack=true;c.loadTrack(c.trackToLoad)}else{c.isLoadingTrack=false;c.checkForTracks()}},loadTrack:function(d){var f=this,g=f.tracks[d],c=function(){g.isLoaded=true;f.enableTrackButton(g.srclang,g.label);f.loadNextTrack()};if(g.src!==undefined||g.src!==""||g["data-src"]!==undefined||g["data-src"]!==""){var e=g.src||g["data-src"];b.ajax({url:e,dataType:"text",success:function(h){if(typeof h=="string"&&(/<tt\s+xml/ig).exec(h)){g.entries=a.TrackFormatParser.dfxp.parse(h)}else{g.entries=a.TrackFormatParser.webvtt.parse(h)}c();if(g.kind=="chapters"){f.media.addEventListener("play",function(){if(f.media.duration>0){f.displayChapters(g)}},false)}if(g.kind=="slides"){f.setupSlides(g)}},error:function(){f.removeTrackButton(g.srclang);f.loadNextTrack()}})}},enableTrackButton:function(d,c){var e=this;if(c===""){c=a.language.codes[d]||d}e.captionsButton.find("input[value="+d+"]").prop("disabled",false).siblings("label").html(c);if(e.options.startLanguage==d){b("#"+e.id+"_captions_"+d).prop("checked",true).trigger("click")}e.adjustLanguageBox()},removeTrackButton:function(c){var d=this;d.captionsButton.find("input[value="+c+"]").closest("li").remove();d.adjustLanguageBox()},addTrackButton:function(d,c){var e=this;if(c===""){c=a.language.codes[d]||d}e.captionsButton.find("ul").append(b('<li><input type="radio" name="'+e.id+'_captions" id="'+e.id+"_captions_"+d+'" value="'+d+'" disabled="disabled" /><label for="'+e.id+"_captions_"+d+'">'+c+" (loading)</label></li>"));e.adjustLanguageBox();e.container.find(".mejs-captions-translations option[value="+d+"]").remove()},adjustLanguageBox:function(){var c=this;c.captionsButton.find(".mejs-captions-selector").height(c.captionsButton.find(".mejs-captions-selector ul").outerHeight(true)+c.captionsButton.find(".mejs-captions-translations").outerHeight(true))},checkForTracks:function(){var f=this,c=false;if(f.options.hideCaptionsButtonWhenEmpty){for(var d=0;d<f.tracks.length;d++){var e=f.tracks[d].kind;if((e==="subtitles"||e==="captions")&&f.tracks[d].isLoaded){c=true;break}}if(!c){f.captionsButton.hide();f.setControlsSize()}}},displayCaptions:function(){if(typeof this.tracks=="undefined"){return}var d=this,c,e=d.selectedTrack;if(e!==null&&e.isLoaded){for(c=0;c<e.entries.times.length;c++){if(d.media.currentTime>=e.entries.times[c].start&&d.media.currentTime<=e.entries.times[c].stop){d.captionsText.html(e.entries.text[c]+"<i class='mejs-captions-search-icon'></i>").attr("class","mejs-captions-text "+(e.entries.times[c].identifier||""));d.captions.show().height(0);return}}d.captions.hide()}else{d.captions.hide()}},setupSlides:function(d){var c=this;c.slides=d;c.slides.entries.imgs=[c.slides.entries.text.length];c.showSlide(0)},showSlide:function(d){if(typeof this.tracks=="undefined"||typeof this.slidesContainer=="undefined"){return}var e=this,f=e.slides.entries.text[d],c=e.slides.entries.imgs[d];if(typeof c=="undefined"||typeof c.fadeIn=="undefined"){e.slides.entries.imgs[d]=c=b('<img src="'+f+'">').on("load",function(){c.appendTo(e.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()})}else{if(!c.is(":visible")&&!c.is(":animated")){c.fadeIn().siblings(":visible").fadeOut()}}},displaySlides:function(){if(typeof this.slides=="undefined"){return}var e=this,d=e.slides,c;for(c=0;c<d.entries.times.length;c++){if(e.media.currentTime>=d.entries.times[c].start&&e.media.currentTime<=d.entries.times[c].stop){e.showSlide(c);return}}},displayChapters:function(){var d=this,c;for(c=0;c<d.tracks.length;c++){if(d.tracks[c].kind=="chapters"&&d.tracks[c].isLoaded){d.drawChapters(d.tracks[c]);d.hasChapters=true;break}}},drawChapters:function(c){var g=this,e,d,f=0,h=0;g.chapters.empty();for(e=0;e<c.entries.times.length;e++){d=c.entries.times[e].stop-c.entries.times[e].start;f=Math.floor(d/g.media.duration*100);if(f+h>100||e==c.entries.times.length-1&&f+h<100){f=100-h}g.chapters.append(b('<div class="mejs-chapter" rel="'+c.entries.times[e].start+'" style="left: '+h.toString()+"%;width: "+f.toString()+'%;"><div class="mejs-chapter-block'+((e==c.entries.times.length-1)?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+c.entries.text[e]+'</span><span class="ch-time">'+a.Utility.secondsToTimeCode(c.entries.times[e].start,g.options)+"&ndash;"+a.Utility.secondsToTimeCode(c.entries.times[e].stop,g.options)+"</span></div></div>"));h+=f}g.chapters.find("div.mejs-chapter").click(function(){g.media.setCurrentTime(parseFloat(b(this).attr("rel")));if(g.media.paused){g.media.play()}});g.chapters.show()}});a.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",fl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}};a.TrackFormatParser={webvtt:{pattern_timecode:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(j){var d=0,f=a.TrackFormatParser.split2(j,/\r?\n/),c={text:[],times:[]},h,g,e;for(;d<f.length;d++){h=this.pattern_timecode.exec(f[d]);if(h&&d<f.length){if((d-1)>=0&&f[d-1]!==""){e=f[d-1]}d++;g=f[d];d++;while(f[d]!==""&&d<f.length){g=g+"\n"+f[d];d++}g=b.trim(g).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");c.text.push(g);c.times.push({identifier:e,start:(a.Utility.convertSMPTEtoSeconds(h[1])===0)?0.2:a.Utility.convertSMPTEtoSeconds(h[1]),stop:a.Utility.convertSMPTEtoSeconds(h[3]),settings:h[5]})}e=""}return c}},dfxp:{parse:function(o){o=b(o).filter("tt");var h=0,f=o.children("div").eq(0),j=f.find("p"),l=o.find("#"+f.attr("style")),m,n,g={text:[],times:[]};if(l.length){var e=l.removeAttr("id").get(0).attributes;if(e.length){m={};for(h=0;h<e.length;h++){m[e[h].name.split(":")[1]]=e[h].value}}}for(h=0;h<j.length;h++){var k;var d={start:null,stop:null,style:null};if(j.eq(h).attr("begin")){d.start=a.Utility.convertSMPTEtoSeconds(j.eq(h).attr("begin"))}if(!d.start&&j.eq(h-1).attr("end")){d.start=a.Utility.convertSMPTEtoSeconds(j.eq(h-1).attr("end"))}if(j.eq(h).attr("end")){d.stop=a.Utility.convertSMPTEtoSeconds(j.eq(h).attr("end"))}if(!d.stop&&j.eq(h+1).attr("begin")){d.stop=a.Utility.convertSMPTEtoSeconds(j.eq(h+1).attr("begin"))}if(m){k="";for(var c in m){k+=c+":"+m[c]+";"}}if(k){d.style=k}if(d.start===0){d.start=0.2}g.times.push(d);n=b.trim(j.eq(h).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");g.text.push(n)}return g}},split2:function(d,c){return d.split(c)}};if("x\n\ny".split(/\n/gi).length!=3){a.TrackFormatParser.split2=function(g,f){var e=[],c="",d;for(d=0;d<g.length;d++){c+=g.substring(d,d+1);if(f.test(c)){e.push(c.replace(f,""));c=""}}e.push(c);return e}}})(a.$);(function(b){b.extend(a.MepDefaults,{sourcechooserText:""});b.extend(CincopaMediaElementPlayer.prototype,{buildsourcechooser:function(h,c,f,g){var l=this,j=l.options.sourcechooserText?l.options.sourcechooserText:a.i18n.t("mejs.source-chooser"),d;h.sourcechooserButton=b('<div class="mejs-button mejs-sourcechooser-button"><button type="button" role="button" aria-haspopup="true" aria-owns="'+l.id+'" title="'+j+'" aria-label="'+j+'"></button><div class="mejs-sourcechooser-selector mejs-offscreen" role="menu" aria-expanded="false" aria-hidden="true"><ul></ul></div></div>').appendTo(c).hover(function(){clearTimeout(d);h.showSourcechooserSelector()},function(){var m=b(this);d=setTimeout(function(){h.hideSourcechooserSelector()},500)}).on("keydown",function(m){var n=m.keyCode;switch(n){case 32:if(!a.MediaFeatures.isFirefox){h.showSourcechooserSelector()}b(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();break;case 13:h.showSourcechooserSelector();b(this).find(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus();break;case 27:h.hideSourcechooserSelector();b(this).find("button").focus();break;default:return true}}).on("focusout",a.Utility.debounce(function(m){setTimeout(function(){var n=b(document.activeElement).closest(".mejs-sourcechooser-selector");if(!n.length){h.hideSourcechooserSelector()}},0)},100)).delegate("input[type=radio]","click",function(){b(this).attr("aria-selected",true).attr("checked","checked");b(this).closest(".mejs-sourcechooser-selector").find("input[type=radio]").not(this).attr("aria-selected","false").removeAttr("checked");var p=this.value;if(g.currentSrc!=p){var n=g.currentTime;var o=g.paused;g.pause();g.setSrc(p);g.addEventListener("loadedmetadata",function(q){g.currentTime=n},true);var m=function(q){if(!o){g.play()}g.removeEventListener("canplay",m,true)};g.addEventListener("canplay",m,true);g.load()}}).delegate("button","click",function(m){if(b(this).siblings(".mejs-sourcechooser-selector").hasClass("mejs-offscreen")){h.showSourcechooserSelector();b(this).siblings(".mejs-sourcechooser-selector").find("input[type=radio]:checked").first().focus()}else{h.hideSourcechooserSelector()}});for(var e in this.node.children){var k=this.node.children[e];if(k.nodeName==="SOURCE"&&(g.canPlayType(k.type)=="probably"||g.canPlayType(k.type)=="maybe")){h.addSourceButton(k.src,k.title,k.type,g.src==k.src)}}},addSourceButton:function(e,d,g,c){var f=this;if(d===""||d==undefined){d=e}g=g.split("/")[1];f.sourcechooserButton.find("ul").append(b('<li><input type="radio" name="'+f.id+'_sourcechooser" id="'+f.id+"_sourcechooser_"+d+g+'" role="menuitemradio" value="'+e+'" '+(c?'checked="checked"':"")+'aria-selected="'+c+'" /><label for="'+f.id+"_sourcechooser_"+d+g+'" aria-hidden="true">'+d+" ("+g+")</label></li>"));f.adjustSourcechooserBox()},adjustSourcechooserBox:function(){var c=this;c.sourcechooserButton.find(".mejs-sourcechooser-selector").height(c.sourcechooserButton.find(".mejs-sourcechooser-selector ul").outerHeight(true))},hideSourcechooserSelector:function(){this.sourcechooserButton.find(".mejs-sourcechooser-selector").addClass("mejs-offscreen").attr("aria-expanded","false").attr("aria-hidden","true").find("input[type=radio]").attr("tabindex","-1")},showSourcechooserSelector:function(){this.sourcechooserButton.find(".mejs-sourcechooser-selector").removeClass("mejs-offscreen").attr("aria-expanded","true").attr("aria-hidden","false").find("input[type=radio]").attr("tabindex","0")}})})(a.$);(function(b){b.extend(a.MepDefaults,{contextMenuItems:[{render:function(c){if(typeof c.enterFullScreen=="undefined"){return null}if(c.isFullScreen){return a.i18n.t("mejs.fullscreen-off")}else{return a.i18n.t("mejs.fullscreen-on")}},click:function(c){if(c.isFullScreen){c.exitFullScreen()}else{c.enterFullScreen()}}},{render:function(c){if(c.media.muted){return a.i18n.t("mejs.unmute")}else{return a.i18n.t("mejs.mute")}},click:function(c){if(c.media.muted){c.setMuted(false)}else{c.setMuted(true)}}},{isSeparator:true},{render:function(c){return a.i18n.t("mejs.download-video")},click:function(c){window.location.href=c.media.currentSrc}}]});b.extend(CincopaMediaElementPlayer.prototype,{buildcontextmenu:function(f,c,d,e){f.contextMenu=b('<div class="mejs-contextmenu"></div>').appendTo(b("body")).hide();f.container.bind("contextmenu",function(g){if(f.isContextMenuEnabled){g.preventDefault();f.renderContextMenu(g.clientX-1,g.clientY-1);return false}});f.container.bind("click",function(){f.contextMenu.hide()});f.contextMenu.bind("mouseleave",function(){f.startContextMenuTimer()})},cleancontextmenu:function(c){c.contextMenu.remove()},isContextMenuEnabled:true,enableContextMenu:function(){this.isContextMenuEnabled=true},disableContextMenu:function(){this.isContextMenuEnabled=false},contextMenuTimeout:null,startContextMenuTimer:function(){var c=this;c.killContextMenuTimer();c.contextMenuTimer=setTimeout(function(){c.hideContextMenu();c.killContextMenuTimer()},750)},killContextMenuTimer:function(){var c=this.contextMenuTimer;if(c!=null){clearTimeout(c);delete c;c=null}},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(j,k){var h=this,c="",f=h.options.contextMenuItems;for(var d=0,e=f.length;d<e;d++){if(f[d].isSeparator){c+='<div class="mejs-contextmenu-separator"></div>'}else{var g=f[d].render(h);if(g!=null){c+='<div class="mejs-contextmenu-item" data-itemindex="'+d+'" id="element-'+(Math.random()*1000000)+'">'+g+"</div>"}}}h.contextMenu.empty().append(b(c)).css({top:k,left:j}).show();h.contextMenu.find(".mejs-contextmenu-item").each(function(){var l=b(this),n=parseInt(l.data("itemindex"),10),m=h.options.contextMenuItems[n];if(typeof m.show!="undefined"){m.show(l,h)}l.click(function(){if(typeof m.click!="undefined"){m.click(h)}h.contextMenu.hide()})});setTimeout(function(){h.killControlsTimer("rev3")},100)}})})(a.$);(function(b){b.extend(a.MepDefaults,{skipBackInterval:30,skipBackText:""});b.extend(CincopaMediaElementPlayer.prototype,{buildskipback:function(h,c,e,g){var k=this,d=a.i18n.t("mejs.time-skip-back",k.options.skipBackInterval),j=k.options.skipBackText?k.options.skipBackText:d,f=b('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="'+k.id+'" title="'+j+'" aria-label="'+j+'">'+k.options.skipBackInterval+"</button></div>").appendTo(c).click(function(){g.setCurrentTime(Math.max(g.currentTime-k.options.skipBackInterval,0));b(this).find("button").blur()})}})})(a.$);(function(b){b.extend(a.MepDefaults,{postrollCloseText:""});b.extend(CincopaMediaElementPlayer.prototype,{buildpostroll:function(f,c,d,e){var j=this,h=j.options.postrollCloseText?j.options.postrollCloseText:a.i18n.t("mejs.close"),g=j.container.find('link[rel="postroll"]').attr("href");if(typeof g!=="undefined"){f.postroll=b('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+h+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(d).hide();j.media.addEventListener("ended",function(k){b.ajax({dataType:"html",url:g,success:function(l,m){d.find(".mejs-postroll-layer-content").html(l)}});f.postroll.show()},false)}}})})(a.$);(function(b){b.extend(a.MepDefaults,{markerColor:"#E9BC3D",markers:[],markerCallback:function(){}});b.extend(CincopaMediaElementPlayer.prototype,{buildmarkers:function(l,c,j,k){var m=this,f=0,e=-1,d=-1,h=-1,g=-1;for(f=0;f<l.options.markers.length;++f){c.find(".mejs-time-total").append('<span class="mejs-time-marker"></span>')}k.addEventListener("durationchange",function(n){l.setmarkers(c)});k.addEventListener("timeupdate",function(n){e=Math.floor(k.currentTime);if(h>e){if(g>e){g=-1}}else{h=e}for(f=0;f<l.options.markers.length;++f){d=Math.floor(l.options.markers[f]);if(e===d&&d!==g){l.options.markerCallback(k,k.currentTime);g=d}}},false)},setmarkers:function(c){var f=this,d=0,e;for(d=0;d<f.options.markers.length;++d){if(Math.floor(f.options.markers[d])<=f.media.duration&&Math.floor(f.options.markers[d])>=0){e=100*Math.floor(f.options.markers[d])/f.media.duration;b(c.find(".mejs-time-marker")[d]).css({width:"1px",left:e+"%",background:f.options.markerColor})}}}})})(a.$)})(cincopa_mejs);
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/mep-feature-playlist.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/mep-feature-playlist.js"] = true;
(function(a){a.extend(cincopa_mejs.MepDefaults,{loopText:"Repeat On/Off",shuffleText:"Shuffle On/Off",nextText:"Next Track",prevText:"Previous Track",playlistText:"Show/Hide Playlist"});a.extend(CincopaMediaElementPlayer.prototype,{buildloopbutton:function(f,b,c,e){var g=this;var d=a('<div class="mejs-button mejs-loop-button '+((f.options.loop)?"mejs-loop-on":"mejs-loop-off")+'"><button type="button" aria-controls="'+f.id+'" title="'+f.options.loopText+'"></button></div>').appendTo(b).click(function(h){f.options.loop=!f.options.loop;a(e).trigger("mep-looptoggle",[f.options.loop]);if(f.options.loop){d.removeClass("mejs-loop-off").addClass("mejs-loop-on")}else{d.removeClass("mejs-loop-on").addClass("mejs-loop-off")}});g.loopToggle=g.controls.find(".mejs-loop-button")},loopToggleClick:function(){var b=this;b.loopToggle.trigger("click")},buildshuffle:function(e,b,c,d){var g=this;var f=a('<div class="mejs-button mejs-shuffle-button '+((e.options.shuffle)?"mejs-shuffle-on":"mejs-shuffle-off")+'"><button type="button" aria-controls="'+e.id+'" title="'+e.options.shuffleText+'"></button></div>').appendTo(b).click(function(h){e.options.shuffle=!e.options.shuffle;a(d).trigger("mep-shuffletoggle",[e.options.shuffle]);if(e.options.shuffle){f.removeClass("mejs-shuffle-off").addClass("mejs-shuffle-on")}else{f.removeClass("mejs-shuffle-on").addClass("mejs-shuffle-off")}});g.shuffleToggle=g.controls.find(".mejs-shuffle-button")},shuffleToggleClick:function(){var b=this;b.shuffleToggle.trigger("click")},buildprevtrack:function(e,b,c,d){var g=this;var f=a('<div class="mejs-button mejs-prevtrack-button mejs-prevtrack"><button type="button" aria-controls="'+e.id+'" title="'+e.options.prevText+'"></button></div>').appendTo(b).click(function(h){a(d).trigger("mep-playprevtrack");e.playPrevTrack(e)});g.prevTrack=g.controls.find(".mejs-prevtrack-button")},prevTrackClick:function(){var b=this;b.prevTrack.trigger("click")},buildnexttrack:function(f,b,c,d){var g=this;var e=a('<div class="mejs-button mejs-nexttrack-button mejs-nexttrack"><button type="button" aria-controls="'+f.id+'" title="'+f.options.nextText+'"></button></div>').appendTo(b).click(function(h){a(d).trigger("mep-playnexttrack");f.playNextTrack(f)});g.nextTrack=g.controls.find(".mejs-nexttrack-button")},nextTrackClick:function(){var b=this;b.nextTrack.trigger("click")},buildplaylist:function(e,b,c,d){var g=this;var f=a('<div class="mejs-button mejs-playlist-button '+((e.options.playlist)?"mejs-hide-playlist":"mejs-show-playlist")+'"><button type="button" aria-controls="'+e.id+'" title="'+e.options.playlistText+'"></button></div>').appendTo(b).click(function(h){e.options.playlist=!e.options.playlist;a(d).trigger("mep-playlisttoggle",[e.options.playlist]);if(e.options.playlist){c.children(".mejs-playlist").show();f.removeClass("mejs-show-playlist").addClass("mejs-hide-playlist")}else{c.children(".mejs-playlist").hide();f.removeClass("mejs-hide-playlist").addClass("mejs-show-playlist")}});g.playlistToggle=g.controls.find(".mejs-playlist-button")},playlistToggleClick:function(){var b=this;b.playlistToggle.trigger("click")},buildplaylistfeature:function(g,c,e,f){var h=a('<div class="mejs-playlist mejs-layer"><ul class="mejs"></ul></div>').appendTo(e);e.attr("data-galID",g.options.galleryId);if(!g.options.playlist){h.hide()}if(g.options.playlistposition=="bottom"){h.css("top",g.options.audioHeight+"px")}else{h.css("bottom",g.options.audioHeight+"px")}var d=function(l){var m=l.split("/");if(m.length>0){return decodeURIComponent(m[m.length-1])}else{return""}};var k=[];a("#"+g.id.toString()).find(".mejs-mediaelement source").each(function(m,l){if(a.trim(a(this).attr("src"))!=""){var n={};n.source=a.trim(a(this).attr("src"));if(a.trim(a(this).attr("data-tag"))!=""){n.tags=a.trim(a(this).attr("data-tag"))}if(a.trim(a(this).attr("title"))!=""){n.name=a.trim(a(this).attr("title"))}else{n.name=d(n.source)}if(a.trim(a(this).attr("data-cat"))!=""){n.category=a.trim(a(this).attr("data-cat"))}else{n.category=""}n.index=parseInt(a(this).attr("data-index"));n.thumbnail=a(this).attr("data-thumbnail");k.push(n)}});for(var j=0;j<k.length;j++){e.find(".mejs-playlist > ul").append('<li data-cat="'+k[j].category+'"  data-url="'+k[j].source+'" title="'+k[j].name+'" data-index="'+k[j].index+'" data-thumbnail="'+k[j].thumbnail+'">'+k[j].name+"</li>");if(k[j].category){var b=e.find(".mejs-playlist > ul li.current").attr("data-cat")||e.find(".mejs-playlist > ul li:first").attr("data-cat");e.find('li[data-url="'+g.media.src+'"][data-cat="'+b+'"]').addClass("current played")}else{e.find('li[data-url="'+g.media.src+'"]').addClass("current played")}}e.find(".mejs-playlist > ul li").click(function(l){if(!a(this).hasClass("current")){a(this).addClass("played");g.playTrack(a(this),"",g)}else{g.play()}});var i=false;this.container.on("mejsprerollcreativeveiw",function(){i=true});this.container.on("mejsprerollended",function(){i=false});f.addEventListener("ended",function(m){if(i){return}if(g.options.skinObject.hls){g.options.skinObject.hls.destroy();g.options.skinObject.hls=undefined}var n=a("#"+e.attr("data-galID")+" .mediaElement_playlist .cp_pl_item:first.current").length;var o=a("#"+e.attr("data-galID")+" .mediaElement_playlist .cp_pl_item:last.current").length;var l=a(g.media).attr("data-currentplayingvideourl")||g.media.src;g.options.skinObject.videoEnded=true;var p=g.options.skinObject.sendDataCollector(l);var q=g.options.skinObject.sendDataCollector(l);q.second=~~m.target.duration;if(!g.options.skinObject.advertising){g.options.skinObject.go.onSkinEvent("video.ended",p);g.options.skinObject.go.onSkinEvent("video.pause",q)}g.options.skinObject.playing=false;g.options.skinObject.loaded=false;g.options.skinObject.canSendPlay=true;if(!g.options.playlistAtEnd&&!g.options.skinObject.go.ctaShowed&&!a("#"+g.options.galleryId).hasClass("cp_form_opened")){if(g.options.skinObject.go.args.postrollVideoUrl){a(".mejs-overlay-play",g.options.skinObject.$gallery).addClass("cp-hide");a(f).css("visibility","hidden")}if(g.options.skinObject.go.args.prerollVideoUrl||g.options.skinObject.go.args.postrollVideoUrl){if(o){g.options.skinObject.go.preRollAction="return";a(g.container).find(".mejs-poster").show();a(f).css("visibility","visible");g.playPrevTrack(g,true)}else{g.options.skinObject.go.preRollAction="next";if(g.options.skinObject.go.args.autoPlayNextTrack){g.playNextTrack(g)}}}else{if(g.options.skinObject.go.args.autoPlayNextTrack){g.playNextTrack(g)}}}},false)},playNextTrack:function(g,d){var j=this;var k=j.layers.find(".mejs-playlist > ul > li");if(j.media.pluginType!="native"&&k.length==0&&a("#"+j.layers.attr("data-galID")+"_playlist .playlistContainer > a").length>0){k=a("#"+j.layers.attr("data-galID")+"_playlist .playlistContainer > a")}var b=k.filter(".current");var e=k.not(".played");if(e.length<1){b.removeClass("played").siblings().removeClass("played");e=k.not(".current")}if(j.options.shuffle){var h=Math.floor(Math.random()*e.length);var f=e.eq(h)}else{var f=b.next().first();if(f.length<1&&j.options.loop){if(k.length==1){f=b}else{f=b.siblings().first()}}}if(f.length==1){f.addClass("played");if(g.options.skinObject.go.args.prerollVideoUrl||g.options.skinObject.go.args.postrollVideoUrl){g.options.skinObject.prepostRollBeforePlay("next")}j.playTrack(f,"next",g);var c=f.attr("data-url");var i=g.options.skinObject.sendDataCollector(c);if(g.options.skinObject.go.args.prerollVideoUrl||g.options.skinObject.go.args.postrollVideoUrl){g.options.skinObject.prepostRollCallback("next")}g.options.skinObject.go.onSkinEvent("playlist.next",i)}else{if(k.length==1&&!d){a(j.container).find(".mejs-poster").show()}var c=b.attr("data-url");var i=g.options.skinObject.sendDataCollector(c);g.options.skinObject.playHLS(g.media,i,false)}},playPrevTrack:function(f,d){var j=this;var k=j.layers.find(".mejs-playlist > ul > li");if(j.media.pluginType!="native"&&k.length==0&&a("#"+j.layers.attr("data-galID")+"_playlist .playlistContainer > a").length>0){k=a("#"+j.layers.attr("data-galID")+"_playlist .playlistContainer > a")}var b=k.filter(".current");var e=k.filter(".played").not(".current");if(e.length<1){b.removeClass("played");e=k.not(".current")}if(j.options.shuffle){var h=Math.floor(Math.random()*e.length);var g=e.eq(h)}else{var g=b.prev();if(g.length<1&&j.options.loop){if(k.length==1){g=b}else{g=b.siblings().last()}}}if(g.length==1){b.removeClass("played");if(f.options.skinObject.go.args.prerollVideoUrl||f.options.skinObject.go.args.postrollVideoUrl){f.options.skinObject.prepostRollBeforePlay("prev")}j.playTrack(g,"prev",f,d);var c=g.attr("data-url");var i=f.options.skinObject.sendDataCollector(c);if(f.options.skinObject.go.args.prerollVideoUrl||f.options.skinObject.go.args.postrollVideoUrl){f.options.skinObject.prepostRollCallback("prev")}f.options.skinObject.go.onSkinEvent("playlist.prev",i)}},playTrack:function(g,c,e,d,b){var f=this;if(typeof g.attr("data-cat")!="undefined"){e.options.skinObject.onClick(g,g.attr("data-url"),g.attr("data-cat"),c,d,b)}else{e.options.skinObject.onClick(g,g.attr("data-url"),undefined,undefined,d,b)}g.addClass("current").siblings().removeClass("current")}})})(cincopa_mejs.$);
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/zequery-mediaelement-universal.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/zequery-mediaelement-universal.js"] = true;
/*version 1.0.57*/

/*!
 * mejs-feature-logo.js
 * Add any logo to your players for MediaElement.js.
 * http://www.hark.com/
 *
 * Copyright 2012, Hark.com (http://www.hark.com/)
 * Licensed under the MIT license.
 */
(function ($) { 
    CincopaMediaElementPlayer.prototype.buildlogo = function (player, controls, layers, media) {
        var targetOption = player.options.logo.new_page == true ? '_blank' : '_self';
        var loop = $('<div class="mejs-button mejs-logo-button ' + player.options.logo.position + '  ' + (player.options.logo.link != '' ? 'has-link' : '') + '" >' +
                '<img src="' + player.options.logo.img + '" style="width:100%;height:auto;max-height:100%;max-width:100%;display:block;" />' +
                //'<span>' + player.options.logo.text + '</span>' +
                '</div>')
                // append it to the toolbar
                .appendTo(layers)
                // add a click toggle event
                .click(function () {
                    if (player.options.logo.link != ''){
                        if(!player.options.logo.iframe){
                            window.open(player.options.logo.link, targetOption);
                        } else {
                            parent.open(player.options.logo.link, targetOption);
                        }
                    }
                        
                });
        if(!player.options.logo.link){
            $('.mejs-button.mejs-logo-button', layers).css('cursor','default');
        }
    };
})(zeQuery);

/*!
 * player_logo plaugin
 * Copyright 2014
 * Licensed under the MIT license.
 */
(function ($) {
    CincopaMediaElementPlayer.prototype.buildplayer_logo = function (player, controls, layers, media) {
        var targetOption = player.options.player_logo.new_page == true || player.options.player_logo.new_page == 'true' ? '_blank' : '_self';
        var player_loop = $('<div class="mejs-player-button mejs-player-logo-button  ' + (player.options.player_logo.link != '' ? 'has-link' : '') + '" >' +
                '<img src="' + player.options.player_logo.img + '" style="width:auto;height:auto;max-height:100%;max-width:100%;display:block;" />' +
                '</div>')
                .appendTo(controls)
                .click(function () {
                    if(!player.options.player_logo.iframe){
                        window.open(player.options.player_logo.link, targetOption);
                    } else {
                        parent.open(player.options.player_logo.link, targetOption);
                    }
                });
    };
})(zeQuery);

/*!
 * speed plugin
 * Copyright 2015
 */

(function($) {

	// Speed
	$.extend(cincopa_mejs.MepDefaults, {

		// We also support to pass object like this:
		// [{name: 'Slow', value: '0.75'}, {name: 'Normal', value: '1.00'}, ...]
		speeds: ['2.00', '1.50', '1.25', '1.00', '0.75', '0.5'],

		defaultSpeed: '1.00',

		speedChar: 'x'

	});

	$.extend(CincopaMediaElementPlayer.prototype, {

		buildspeed: function(player, controls, layers, media) {
			var t = this;
			if (t.media.pluginType == 'native') {
				var
					speedButton = null,
					speedSelector = null,
					playbackSpeed = null,
					inputId = null;

				var speeds = [];
				var defaultInArray = false;
				for (var i=0, len=t.options.speeds.length; i < len; i++) {
					var s = t.options.speeds[i];
					if (typeof(s) === 'string'){
						speeds.push({
							name: s + t.options.speedChar,
							value: s
						});
						if(s === t.options.defaultSpeed) {
							defaultInArray = true;
						}
					}
					else {
						speeds.push(s);
						if(s.value === t.options.defaultSpeed) {
							defaultInArray = true;
						}
					}
				}

				if (!defaultInArray) {
					speeds.push({
						name: t.options.defaultSpeed + t.options.speedChar,
						value: t.options.defaultSpeed
					});
				}

				speeds.sort(function(a, b) {
					return parseFloat(b.value) - parseFloat(a.value);
				});

				var getSpeedNameFromValue = function(value) {
					for(i=0,len=speeds.length; i <len; i++) {
						if (speeds[i].value === value) {
							return speeds[i].name;
						}
					}
				};

				var html = '<div class="mejs-button mejs-speed-button">' +
							'<button type="button">speed</button>' +
							'<div class="mejs-speed-selector">' +
							'<ul>';

				for (i = 0, il = speeds.length; i<il; i++) {
					inputId = t.id + '-speed-' + speeds[i].value;
					html += '<li '+ (speeds[i].value === t.options.defaultSpeed ? ' class="mejs-speed-selected"' : '') +'>' +
								'<input type="radio" name="speed" ' +
											'value="' + speeds[i].value + '" ' +
											'id="' + inputId + '" ' +
											(speeds[i].value === t.options.defaultSpeed ? ' checked' : '') +
											' />' +
								'<label for="' + inputId + '" >' + speeds[i].name + '</label>' +
							'</li>';
				}
				html += '</ul></div></div>';

				speedButton = $(html).appendTo(controls);
				speedSelector = speedButton.find('.mejs-speed-selector');

				playbackSpeed = t.options.defaultSpeed;

				media.addEventListener('loadedmetadata', function(e) {
					if (playbackSpeed) {
						media.playbackRate = parseFloat(playbackSpeed);
					}
				}, true);

				speedSelector
					.on('click', 'input[type="radio"]', function() {
						var newSpeed = $(this).attr('value');
						playbackSpeed = newSpeed;
						media.playbackRate = parseFloat(newSpeed);
						//speedButton.find('button').html(getSpeedNameFromValue(newSpeed));
						speedButton.find('.mejs-speed-selected').removeClass('mejs-speed-selected');
						speedButton.find('input[type="radio"]:checked').parent().addClass('mejs-speed-selected');
					});
				speedButton
					.one( 'mouseenter focusin', function() {
						speedSelector
							.height(
								speedButton.find('.mejs-speed-selector ul').outerHeight(true) +
								speedButton.find('.mejs-speed-translations').outerHeight(true))
							.css('top', (-1 * speedSelector.height()) + 'px');
					});
			}
		}
	});

})(cincopa_mejs.$);



/*!
 * chromecast plugin
 * Copyright 2015
 */
(function ($) {
    CincopaMediaElementPlayer.prototype.buildchromecast_logo = function (player, controls, layers, media) {
        var chromecast_loop = $('<div class="mejs-button mejs-player-chrome-cast-button" >' +
                '<button type="button" aria-controls="' + player.id + '" title="Play on Tv"></button>' +
                '</div>')
                .appendTo(controls);

		var chromecast_logo = $('<div class="chromecast-logo">' +
                     '<div class="chromecast-logo-icon"></div>' +
                     '<div class="chromecast-logo-text">playing on</div>' +
                     '<div class="chromecast-logo-title"></div>' +
                '</div>').appendTo(layers);
    };
})(zeQuery);

/* annotation plugin */
(function ($) {
    CincopaMediaElementPlayer.prototype.buildannotation = function (player, controls, layers, media) {
        var h = layers.parents(".mejs-container").outerHeight();
        var annotationBlock = $('<div class="ze_htmloverlay_placeholder" id="ze_htmloverlay_placeholder_' + player.options.skinObject.go.loaderParams["_object"] + '"></div>' +
             '<div class="ze_annotation_placeholder" id="ze_annotation_placeholder_' + player.options.skinObject.go.loaderParams["_object"] + '_' + player.id +'" style="height:' + h + 'px"></div>' +
             '<div class="ze_htmloverlay_placeholder" id="ze_htmloverlay_placeholder_' + player.options.skinObject.go.loaderParams["_object"] + '_' + player.id + '"></div>').appendTo(layers);
    };
})(zeQuery);


/* live button */
(function ($) {

    CincopaMediaElementPlayer.prototype.buildliveButton = function (player, controls, layers, media) {
        $('<div class="mejs-time" role="timer" aria-live="off">' +
                '<span class="mejs-currenttime">' +
                    'LIVE' +
                '</span>'+
            '</div>')
        .appendTo(controls);
    };
})(zeQuery);


/* chapters  */
(function ($) {
    CincopaMediaElementPlayer.prototype.buildchapter = function (player,controls,layers,media) {

        isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i) || ((/iPad|iPhone|iPod/.test(navigator.platform) ||
                    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
                    !window.MSStream);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function () {
                return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
            }
        };

        var chapter_on =  player.options.skinObject.go.args.chapter_on;
        if(isMobile.any ()){
            chapter_on = false;
        }

        if (chapter_on)
            layers.addClass("mejs-show-chapters");
        if (!layers.find(".mejs-chapters-wrap").length)
            var chapterBlock = $('<div class="mejs-chapters-wrap"><div class="mejs-chapters-wrap-inner"></div></div>').appendTo(layers);
        else
            var chapterBlock = $(".mejs-chapters-wrap",layers);
        var chapterBtn = $("<div>").addClass("mejs-button").addClass("mejs-chapters-button");
        if (!chapter_on) chapterBtn.addClass("mejs-chapters-off");
        chapterBtn.html('<button type="button" title="Close Chapters"></button>');
        $(chapterBtn).appendTo(controls);

        $(chapterBtn).on("click",function () {
            if ($(this).hasClass("mejs-chapters-off")) {
                $(this).removeClass("mejs-chapters-off");
                layers.addClass("mejs-show-chapters");
                $(chapterBtn).find("button").attr("title","Close Chapters");
            } else {
                $(this).addClass("mejs-chapters-off");
                layers.removeClass("mejs-show-chapters");
                $(chapterBtn).find("button").attr("title","Open Chapters");
            }
        });
        $(player.container).on("mouseleave",function () {
            $("#" + player.options.galleryId).addClass('ze-mouseleave');
            $(player.container).addClass('ze-mouseleave');
            if (!layers.parents(".mejs-container").hasClass("ze-autohide")) {
                var gallery = $("#" + player.options.galleryId);
                if (gallery.hasClass('status-play')) {
                    layers.removeClass("mejs-show-chapters");
                } else {
                    if (!$(chapterBtn).hasClass("mejs-chapters-off")) {
                        layers.addClass("mejs-show-chapters");
                    }
                }
                $(chapterBtn).find("button").attr("title","Open Chapters");
            }
        })

        $(player.container).on("mouseover",function () {
            $("#" + player.options.galleryId).removeClass('ze-mouseleave');
            $(player.container).removeClass('ze-mouseleave');
            if (!$(chapterBtn).hasClass("mejs-chapters-off") && !$(controls).hasClass('fadeafterseconds')) {
                layers.addClass("mejs-show-chapters");
            } else {
                layers.removeClass("mejs-show-chapters");
            }

        });

        /* REQUIRED media must have data-index to allow get current item */
        var current_url;
        if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
            current_url = media.src;
        }else{
            current_url = $(media).data(player.options.dataCollector);
        }

        var currentData = player.options.skinObject.sendDataCollector(current_url || 0);
        var currentItem = currentData.item;
        if (!currentItem) {
            return;
        }

        var pluginActivation = true
        $(media).on("loadeddata",function () { 
            if(pluginActivation) return;
            var current_url;
             if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                current_url = media.src;
            }else{
                current_url = $(media).data(player.options.dataCollector);
            }
            
            var currentData = player.options.skinObject.sendDataCollector(current_url || 0)
            var currentItem = currentData.item;
            if (!currentItem) {
                return;
            }
            buildChapters(currentItem,player);
        })
        

        buildChapters(currentItem,player);

        /* allow to call build chapters outside (from libasync.js) */
        player.options.skinObject.buildChapters = buildChapters;
        

        function buildChapters(item,player) {      
            pluginActivation = false;      
            var chapters = [];
            var timeline = item.timeline;
            var chaptersCont = $(".mejs-chapters-wrap-inner",player.container);
            chaptersCont.empty();
            if (timeline) {
                eval('var timeLineObj = ' + decodeXml(timeline));
                chapters = timeLineObj.chapter;
                chapters = orderByTime(chapters);
                if (item.caption) {
                    var h3 = $("<h3>").addClass("mejs-chapters-name").text(item.caption).css("height","80px");
                    chaptersCont.append(h3);
                }
                var ol = $("<ol>").addClass("mejs-chapters-list");
                if (item.caption) {
                    ol.css("height",chaptersCont.height() - 80)
                } else {
                    ol.css("height","100%")
                }

                chaptersCont.append(ol);
                for (var chapter = 0; chapter < chapters.length; chapter++) {
                    var ind = chapter + 1;
                    buildChapter(ind,ol,chapters[chapter].time,chapters[chapter].value.title,player,chapters[chapter].value.desc)
                }
            }

            $(".mejs-chapters-wrap",player.container).attr("data-chaptersCount",chapters.length);
            if (chapters.length == 0) {
                $(player.container).addClass("no_chapters");
                $(layers).removeClass("mejs-show-chapters");
                $(".mejs-chapters-button",player.container).addClass("cp-hide");
            } else {
                $(".mejs-chapters-button",player.container).removeClass("cp-hide");
                $(player.container).removeClass("no_chapters");
            }

        }

        function buildChapter(index,ol,chapter,title,player,description) {
            var li = $("<li>").attr("data-time",chapter).html("<span class='chapter_index'>" + index + "</span><span>" + title + "</span>")
            var that = this;
            li
                .on("click",function () {

                    var time = $(this).attr("data-time");
                    var sec = hmsToSecondsOnly(time);
                    player.setCurrentTime(sec);
                    if (player.media && player.media.paused) {
                        player.$media[0].play().catch(function (err) { });
                    }

                    var sendingData = $.extend({},currentData);
                    sendingData.chapter = {
                        second: sec,
                        title: title,
                        description: description
                    }
                    $(this).trigger("mouseover");
                    player.options.skinObject.go.onSkinEvent("chapter.click",sendingData)

                })
                .on("mouseover",function () {
                    var time = $(this).attr("data-time");
                    var section = $(".ze_tl_chapter_section[data-time='" + time + "']",player.container);
                    var chapterInfoWidth = 200;
                    var timeRialwidth = $(".mejs-time-total",player.container).width();

                    var timePxSize = timeRialwidth / player.options.skinObject.go.playerAPI.duration();
                    var sectionLeft = parseInt(hmsToSecondsOnly(time)) * timePxSize;
                    if (timeRialwidth - sectionLeft < chapterInfoWidth) {
                        $(".ze_tl_chapter_info",section).css("margin-left",(timeRialwidth - sectionLeft - chapterInfoWidth) + "px");
                    } else {
                        $(".ze_tl_chapter_info",section).css("margin-left",0 + "px");
                    }
                    $(".ze_tl_chapter_section",player.container).removeClass("ze_tl_visible_chapter");
                    section.addClass("ze_tl_visible_chapter");
                })
                .on("mouseleave",function () {
                    var time = $(this).attr("data-time");
                    $(".ze_tl_chapter_section[data-time='" + time + "']",player.container).removeClass("ze_tl_visible_chapter");
                })
            ol.append(li);
        }

        /* helperse for chapter */
        function orderByTime(timeline) {
            var newOrderedArray = [];
            for (var i in timeline) {
                newOrderedArray.push({ time: i,value: timeline[i] });
            }
            newOrderedArray.sort(function (a,b) {
                return hmsToSecondsOnly(a.time) - hmsToSecondsOnly(b.time);
            })
            return newOrderedArray;

        }

        function decodeXml(string) {
            var escaped_one_to_xml_special_map = {
                '&amp;': '&',
                '&quot;': '"',
                '&lt;': '<',
                '&gt;': '>'
            };
            return string.replace(/(&quot;|&lt;|&gt;|&amp;)/g,
                function (str,item) {
                    return escaped_one_to_xml_special_map[item];
                });
        }

        function hmsToSecondsOnly(str) {
            if (typeof str == 'undefined') {
                return '';
            }
            var p = str.split(':'),
                s = 0,m = 1;

            while (p.length > 0) {
                s += m * parseInt(p.pop(),10);
                m *= 60;
            }

            return s;
        }

    };
})(zeQuery);



/*download-button */
(function ($) {
	$.extend(CincopaMediaElementPlayer.prototype, {
        // LOOP TOGGLE
        builddownload:function(player, controls, layers, media){
            
            var dw_btn = $('<div class="mejs-button  mejs-download-button" >'+
                    '<button class="download-button" type="button" aria-controls="' + player.id + '" title="Download"></button>' +
                    '</div>')
                    .appendTo(controls);
                    dw_btn.on("click", function(e){
                        e.preventDefault();
                        e.stopPropagation();
                        var current_url;
                        if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                            current_url = media.src;
                        }else{
                            current_url = $(media).data(player.options.dataCollector);
                        }

                        var currentData = player.options.skinObject.sendDataCollector(current_url || 0);
                        player.options.skinObject.go.onSkinEvent('item.download', currentData );
                        return;
                    });
                    

            
        },
        buildgear: function (player, controls, layers, media) {
            var t = this;

            var gear_btn = $('<div class="mejs-button mejs-gear-button" >' +
                    '<button type="button" aria-controls="' + player.id + '" title="Settings"></button>' +
                    '</div>')
                    .appendTo(controls)
            var popup = $("<div class='mejs-settings-menu'><div class='mejs-settings-panel'></div>")
                 .appendTo(gear_btn);

            gear_btn.on("click", function(e){
                e.preventDefault();
                e.stopPropagation();
                t.createMenu(player, controls, layers, media);
                popup.fadeIn(300);
            });
            $("body").on("click", function(e){
                if($(e.target).closest(".mejs-settings-menu").length == 0 && $(e.target).closest(".mejs-gear-button").length == 0){
                    controls.removeClass("ze-active-controls");
                    popup.fadeOut(50);
                }
            });

            // the container of chapters - hidden by default
            if(!layers.find(".mejs-chapters-wrap").length)
                var chapterBlock = $('<div class="mejs-chapters-wrap"><div class="mejs-chapters-wrap-inner"></div></div>').appendTo(layers);
            else
                var chapterBlock = $(".mejs-chapters-wrap", layers);

            media.addEventListener('loadedmetadata', function(e) {
                t.showhidegear(player, controls, layers,media);
            }, true);

            media.addEventListener('play', function(e) {
                setTimeout(function(){
                    t.showhidegear(player, controls, layers,media);
                }, 20)
            }, true);

            player.container.on('mouseleave', function () {
                controls.removeClass("ze-active-controls");
                popup.fadeOut(50);
            });

            $(controls).on('mouseenter', '.mejs-captions-button', function(){
                popup.fadeOut(50);
            });            
        },


        createM3u8Arr: function(item){
            var m3u8Arr = [];
            var ratio = item.aspect_ratio;
            var counter = 10;
            var versions = item.versions;
            for (var key in versions) {
                if (versions.hasOwnProperty(key) && versions[key].mime == "application/x-mpegURL" && key.indexOf('ts_')!= -1) {
                    var resolution = "";
                    var h = parseInt(versions[key].name);
                    var w = ratio * h;
                    resolution = w + "X" + h;
                    m3u8Arr.push({
                        url: versions[key].url+`${(versions[key].key ? '?token='+versions[key].key : '')}`,
                        display_name: versions[key].name,
                        resolution: resolution,
                        bandwidth: counter
                    });
                    counter ++;
                }
            }

            

            return m3u8Arr;
       },
       isHlsSupported: function(enable_hls){
        var supported = true;
        if(typeof Hls == "undefined"|| !Hls.isSupported())
            supported = false;
        if(!enable_hls)
            supported = false;
        if(is_ie() && !is_ie_hls_supported()){
            supported = false;
        }

        var chr = function() {
            return !(!/Chrome/.test(navigator.userAgent) || !/Google Inc/.test(navigator.vendor)) && {
                version: chromeVersion()
            }
        };
        var chromeVersion = function() {
            var e = navigator.userAgent.match(/\bChrome\/([^\s]+)/);
            return e && e[1]
        }
        if(chr() && parseInt(chr().version) <= 50){
             supported = false;
        }


        return supported;


        function is_ie(){
            var ua = window.navigator.userAgent;
            var edge = ua.indexOf('Edge/');
            var msie = ua.indexOf("MSIE ");
            if (msie > 0)  // If Internet Explorer, return version number
            {
                return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
            } else if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                return 11;
            } else if (edge > 0) {
                return (parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10));
            }

            return false;
        }

        function is_ie_hls_supported() {

            var ua = window.navigator.userAgent;

            var edge = ua.indexOf('Edge/');

            var msie = ua.indexOf("MSIE ");

            if (msie > 0)  // If Internet Explorer, return version number
            {
                var ver =  parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
                if(ver < 11) return false;

            } else if (!!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                if(navigator && (/(Windows 8.1|Windows NT 6.3)/.test(navigator.appVersion) || /(Windows 10.0|Windows NT 10.0)/.test(navigator.appVersion)))
                    return true;
            } else if (edge > 0) {
                return true
            }

            return false;

        }
        },
        isNativeHls: function(){
            var riphone = /(iphone)/i,
                ripad = /(ipad)/i,
                rwebkit = /(webkit)[ \/]([^\s]+)/i;
 
            var iphone = riphone.test(navigator.userAgent);
            var ipad = ripad.test(navigator.userAgent);
            var safari = rwebkit.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && !ipad && !iphone;
            return iphone || ipad || safari;
       },

        createMenu: function(player, controls, layers, media, details){
            var t = this;
            var current_url;
             if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                current_url = media.src;
            }else{
                current_url = $(media).data(player.options.dataCollector);
            }

            var currentData = player.options.skinObject.sendDataCollector(current_url || 0)
            var m3u8Arr = t.createM3u8Arr(currentData.item)
            var hlsObj = $(media).data('hls')

            var buttonsCount = 0;
            /* caption option enable/disable */
            var isChapters = false;
            if(player.options.skinObject.go.args.chapter && parseInt($(".mejs-chapters-wrap", layers).attr("data-chaptersCount")) > 0 && layers.parents(".mediaElement").find(".ze_tl_block").is(":hidden") && controls.find(".mejs-chapters-button").hasClass("mejs-force-hidden-button")){
                isChapters = true;
                buttonsCount++;
            }

            /* chromecast option enable/disable */
            var isChromecast = false;
            if(player.options.skinObject.chromecastExist && controls.find(".mejs-player-chrome-cast-button").hasClass("mejs-force-hidden-button")){
                isChromecast = true;
                buttonsCount++;
            }

            /* speed option enable/disable */
            var isSpeed = false
            if(player.options.skinObject.go.args.speed){
                isSpeed = true;
                buttonsCount++;
            }

            /* subtitle option enable/disable */
            var isSubtitle = false;
            if(player.options.skinObject.go.args.subtitle && player.tracks.length > 0 && $(".mejs-captions-selector li.track-current", controls).length > 0 && controls.find(".mejs-captions-button").hasClass("mejs-force-hidden-button")){
                isSubtitle = true;
                buttonsCount++;
            }

            /* quality option enable/disable */
            var isQuality = false;

            if(player.options.skinObject.go.args.versions === "on" || (hlsObj && 
                hlsObj.levelController.levels && hlsObj.levelController.levels.length > 0) || 
            (player.options.skinObject.go.args.enable_hls  && !t.isHlsSupported(player.options.skinObject.go.args.enable_hls) 
            && t.isNativeHls() && m3u8Arr.length > 0)){
                isQuality = true;
                buttonsCount++;
            }
            $(".mejs-settings-panel", controls).empty();
            $(".mejs-settings-panel", controls).append("<div class='mejs-settings-panel-menu'></div>");

            if(buttonsCount == 0){
                return;
            }


            if(isChapters){
                    var active = layers.hasClass("mejs-show-chapters");
                    $(".mejs-settings-panel-menu", controls)
                    .append("<div class='mejs-settings-menu-item' data-checked='" + active + "' data-action='chapters'>" +
                                "<div class='mejs-settings-menu-item-label'>Chapters</div>" +
                                "<div class='mejs-settings-menu-item-content'>" +
                                    "<div class='mejs-settings-menu-item-toggle-checkbox'></div>" +
                                "</div>" +
                            "</div>");
            }

            if(isChromecast){
                    $(".mejs-settings-panel-menu", controls)
                    .append("<div class='mejs-settings-menu-item' data-action='chromecast'>" +
                                "<div class='mejs-settings-menu-item-label'>Play on TV</div>" +
                            "</div>");
            }

            if(isSpeed){
                    var currentSpeed = media.playbackRate.toFixed(2);
                    var currentSpeedName = currentSpeed + t.options.speedChar;
                    if(currentSpeed == 1.00) currentSpeedName = "normal";
                    $(".mejs-settings-panel-menu", controls)
                    .append("<div class='mejs-settings-menu-item' data-haspopup='true' data-action='speed'>" +
                                "<div class='mejs-settings-menu-item-label'>Speed</div>" +
                                "<div class='mejs-settings-menu-item-content'>" +
                                    currentSpeedName +
                                "</div>" +
                            "</div>");
            }

            if(isSubtitle){
                    var currentTrack = "";
                    if(t.selectedTrack === null){
                        currentTrack = "None"
                    } else if (t.selectedTrack){
                        currentTrack = t.selectedTrack.label || cincopa_mejs.language.codes[t.selectedTrack.srclang] || t.selectedTrack.srclang;
                    }
                    $(".mejs-settings-panel-menu", controls)
                    .append("<div class='mejs-settings-menu-item' data-haspopup='true' data-action='subtitle'>" +
                                "<div class='mejs-settings-menu-item-label'>Subtitles</div>" +
                                "<div class='mejs-settings-menu-item-content'>" +
                                    currentTrack +
                                "</div>" +
                            "</div>");
            }
            if(isQuality){
                    var currentVersion = "auto", currentVersionName = "auto";
                    if(hlsObj && hlsObj.disableResize){
                        var currentLevel = (typeof details != "undefined" && typeof details.version != "undefined" ? details.version : hlsObj.currentLevel)
                        currentVersion = hlsObj.levelController.levels[currentLevel];
                        if(currentVersion)
                            currentVersionName = currentVersion.name ||currentVersion.height+'p' ;
                        if(currentVersionName == "720p" || currentVersionName == "1080p" || currentVersionName == "1440p"){
                            currentVersionName += " <sup class='mejs-settings-menu-item-label-hd'>HD</sup>"
                        }else if(currentVersionName == "2160p"){
                            currentVersionName += " <sup class='mejs-settings-menu-item-label-hd'>4K</sup>"
                        }
                       
                    } else if (hlsObj){
                        var currentLevel = (typeof details != "undefined" && typeof details.level != "undefined" ? details.level : hlsObj.currentLevel)
                        var ver = hlsObj.levelController.levels[currentLevel];
                        if(ver)
                             var verName = ver.name || ver.height+'p';
                        if(verName == "720p" || verName == "1080p" || verName == "1440p"){
                            verName += " <sup class='mejs-settings-menu-item-label-hd'>HD</sup>"
                        }else if(verName == "2160p"){
                            verName += " <sup class='mejs-settings-menu-item-label-hd'>4K</sup>"
                        }
						
						if(verName){
							currentVersionName += " " + verName;
                        }

                    }else if(player.options.skinObject.go.args.enable_hls && !t.isHlsSupported(player.options.skinObject.go.args.enable_hls) && t.isNativeHls()){
                        var id = player.id
                            currentLevel = (player.options.skinObject.nativeHls && player.options.skinObject.nativeHls[id])  ? player.options.skinObject.nativeHls[id] : 'auto';
                            if(currentLevel != 'auto'){
                            currentVersionName = m3u8Arr[currentLevel].display_name;
                        }
                        if(currentVersionName == "720p" || currentVersionName == "1080p" || currentVersionName == "1440p"){
                            currentVersionName += " <sup class='mejs-settings-menu-item-label-hd'>HD</sup>"
                        }else if(currentVersionName == "2160p"){
                            currentVersionName += " <sup class='mejs-settings-menu-item-label-hd'>4K</sup>"
                        } 
                    }
                    $(".mejs-settings-panel-menu", controls)
                    .append("<div class='mejs-settings-menu-item' data-haspopup='true' data-action='quality'>" +
                                "<div class='mejs-settings-menu-item-label'>Quality</div>" +
                                "<div class='mejs-settings-menu-item-content'>" +
                                    "<span>" + currentVersionName + "</span>"+
                                "</div>" +
                            "</div>");

            }

            $(".mejs-settings-menu", controls).css("overflow", "hidden");
            var newDiv = $(".mejs-settings-menu", controls).clone().css({"height": "auto", "visibility" : "hidden"});
            var maxH = layers.parents(".mejs-container").height() - $(controls).height() -35;
            $(".mejs-settings-menu", controls).after(newDiv);
            var h = Math.min(maxH,newDiv.height()) ;
            newDiv.remove();
            $(".mejs-settings-menu", controls).css({
                "width": "220px",
                "height": h +5+ "px"
             })
            setTimeout(function(){
                $(".mejs-settings-menu", controls).css("overflow", "auto");
            }, 310)

            $(".mejs-settings-menu-item-toggle-checkbox", controls).on("click", function(e){
                e.preventDefault();
                e.stopPropagation();
                var activate = false;
                var parent = $(this).parents(".mejs-settings-menu-item");
                if(parent.attr("data-checked") == 'true'){
                    parent.attr("data-checked", 'false')
                } else {
                    parent.attr("data-checked", 'true');
                    activate = true;
                }
                var action = parent.attr("data-action");
                if(action == "chapters"){
                    if(activate){
                        layers.addClass("mejs-show-chapters");
                        controls.find(".mejs-chapters-button").removeClass("mejs-chapters-off");
                    } else {
                        layers.removeClass("mejs-show-chapters");
                        controls.find(".mejs-chapters-button").addClass("mejs-chapters-off");
                    }
                }

            })

            $(".mejs-settings-menu-item[data-action='chromecast']").on("click", function(e){
                e.preventDefault();
                e.stopPropagation();
                controls.find(".mejs-player-chrome-cast-button").trigger("click");
            })

            $('[data-haspopup="true"]').on("click", function(e){
                e.preventDefault();
                e.stopPropagation();

                controls.addClass("ze-active-controls");
                if($(this).attr("data-action") == "speed"){
                    t.createSpeedMenu(player, controls, layers, media);
                } else if($(this).attr("data-action") == "subtitle"){
                    t.createSubtitleMenu(player, controls, layers, media);
                } else if($(this).attr("data-action") == "quality"){
                    t.createQualityMenu(player, controls, layers, media);
                }
            })
        },

        createCategoryMenu: function(title, html, player, controls, layers, media){
            var t = this;
            var header = "<div class='mejs-settings-header'><div class='mejs-settings-panel-title mejs-settings-panel-btn'>" + title + "</div>" + (title == "Subtitles" ? "<div class='mejs-settings-panel-fonts mejs-settings-panel-btn'>Font size</div>" : "") + "</div>";

            $(".mejs-settings-panel", controls).empty();
            $(".mejs-settings-panel", controls).append(header);
            $(".mejs-settings-panel", controls).append("<div class='mejs-settings-panel-menu'></div>");
            $(".mejs-settings-panel-menu", controls).append(html);

            $(".mejs-settings-panel-title", controls).on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if(title.toLowerCase() == "font size"){
                    t.createSubtitleMenu(player, controls, layers, media);
                } else{
                    t.createMenu(player, controls, layers, media);
                }

            });

            $(".mejs-settings-panel-fonts", controls).on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                t.createFontsMenu(player, controls, layers, media);
            });

        },

        createSpeedMenu: function(player, controls, layers, media){
            var t = this;
            if (t.media.pluginType == 'native') {
                var speedButton = null,
                speedSelector = null,
                playbackSpeed = null;

                var speeds = [];
                var defaultInArray = false;
                var currentSpeed = media.playbackRate.toFixed(2);
                for (var i=0, len=t.options.speeds.length; i < len; i++) {
                    var s = t.options.speeds[i];
                    if (typeof(s) === 'string'){
                        var sn = s !== "1.00" ? s + t.options.speedChar: "normal";
                        speeds.push({
                                name: sn,
                                value: s
                        });
                        if(s === currentSpeed) {
                                defaultInArray = true;
                        }
                    }
                    else {
                        speeds.push(s);
                        if(s.value === currentSpeed) {
                                defaultInArray = true;
                        }
                    }
                }

                if (!defaultInArray) {
                    var sn = s !== "1.00" ? s + t.options.speedChar: "normal";
                    speeds.push({
                            name: sn,
                            value: currentSpeed
                    });
                }
                speeds.sort(function(a, b) {
                        return parseFloat(b.value) - parseFloat(a.value);
                });

                var html = "";
                for (var i = 0, il = speeds.length; i<il; i++) {
                        html += '<div class="mejs-settings-menu-item mejs-settings-menu-item-list" data-value="' + speeds[i].value + '" ' + (speeds[i].value === currentSpeed ? 'data-checked="true"' : 'data-checked="false"') +'>' +
                                        '<div class="mejs-settings-menu-item-label" >' + speeds[i].name + '</div>' +
                                '</div>';
                }
                t.createCategoryMenu("Speed", html, player, controls, layers, media);
                $(".mejs-settings-menu-item", controls).on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var newSpeed = $(this).attr('data-value');
                    playbackSpeed = newSpeed;
                    media.playbackRate = parseFloat(newSpeed);
                    $('.mejs-settings-menu-item-list', controls).attr('data-checked', 'false');
                    $(this).attr('data-checked', 'true');
                    t.createMenu(player, controls, layers, media);
                });
                $(".mejs-settings-menu", controls).css("overflow", "hidden");
                var newDiv = $(".mejs-settings-menu", controls).clone().css({"height": "auto", "visibility" : "hidden"});
                var maxH = layers.parents(".mejs-container").height() - $(controls).height() -35;
                $(".mejs-settings-menu", controls).after(newDiv);
                var h = Math.min(maxH,newDiv.height()) + 10 +'px' ;
                if($(".mejs-settings-menu", controls).eq(1).outerHeight(true) < player.container.height() - 35){
                    h = 'auto'
                }
                newDiv.remove();
                $(".mejs-settings-menu", controls).css({
                    "width": "122px",
                    "height": h ,
                    // "max-height": maxH
                 })
                setTimeout(function(){
                    $(".mejs-settings-menu", controls).css("overflow", "auto");
                }, 310)
            }
	    },
        
        createSubtitleMenu: function(player, controls, layers, media){
            var t = this;
            if (player.tracks.length === 0)
		    return;
            var subtitles = [];
            var subtitleListWrap = $(".mejs-captions-selector li:not(:last-child)", controls);
            for (var i=0; i<player.tracks.length; i++) {
                var kind = player.tracks[i].kind;
                if (kind === 'subtitles') {
                    var radio = subtitleListWrap.find("input[type='radio'][value='" + player.tracks[i].srclang + "']");
                    if(radio.parent("li").hasClass("track-current"))
                        subtitles.push(player.tracks[i])
                }
            }
            if (subtitles.length === 0)
                return;
            var html = "";
            for (var i = 0, il = subtitles.length; i<il; i++) {
                    html += '<div class="mejs-settings-menu-item mejs-settings-menu-item-list" data-value="' + subtitles[i].srclang + '" ' + (t.selectedTrack && t.selectedTrack.srclang == subtitles[i].srclang ? 'data-checked="true"' : 'data-checked="false"') +'>' +
                                    '<div class="mejs-settings-menu-item-label" >' + (subtitles[i].label || cincopa_mejs.language.codes[subtitles[i].srclang] || subtitles[i].srclang) + '</div>' +
                            '</div>';
            }
            html += '<div class="mejs-settings-menu-item mejs-settings-menu-item-list" data-value="none" ' + (t.selectedTrack === null ? 'data-checked="true"' : 'data-checked="false"') +'>' +
                        '<div class="mejs-settings-menu-item-label" >' + cincopa_mejs.i18n.t('mejs.none') + '</div>' +
                    '</div>';

            t.createCategoryMenu("Subtitles", html, player, controls, layers, media);
            
            
            $(".mejs-settings-menu-item", controls).on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                var lang = $(this).attr('data-value');
                $("input[type=radio][value='" + lang + "']", controls).trigger("click");
                //player.setTrack(lang);
                if(t.selectedTrack){
                    $.cookie('cincopavideoTrack', t.selectedTrack.srclang );
                } else {
                    $.cookie('cincopavideoTrack', null);
                }
                $('.mejs-settings-menu-item-list', controls).attr('data-checked', 'false');
                $(this).attr('data-checked', 'true');
                t.createMenu(player, controls, layers, media);
            });

            $(".mejs-settings-menu", controls).css("overflow", "hidden");
            var newDiv = $(".mejs-settings-menu", controls).clone().css({"height": "auto", "visibility" : "hidden"});
            var maxH = layers.parents(".mejs-container").height() - $(controls).height() -35;
            $(".mejs-settings-menu", controls).after(newDiv);
            var h = Math.min(maxH,newDiv.height()) ;
            newDiv.remove();
            $(".mejs-settings-menu", controls).css({
                "width": "180px",
                "height": h + "px"
             })
            setTimeout(function(){
                $(".mejs-settings-menu", controls).css("overflow", "auto");
            }, 310)

        },

        createFontsMenu: function(player, controls, layers, media){
            var t = this;
            var currentFontSize = player.options.skinObject.subtitleFontSizeStep || 2;
            var fonts = [50 , 75, 100 , 150 , 200 , 300];

            var html = "";
            for (var i = 0, il = fonts.length; i<il; i++) {
                    html += '<div class="mejs-settings-menu-item mejs-settings-menu-item-list" data-value="' + i + '" ' + (currentFontSize == i ? 'data-checked="true"' : 'data-checked="false"') +'>' +
                                '<div class="mejs-settings-menu-item-label" >' + fonts[i] + "%" + '</div>' +
                        '</div>';
            }

            t.createCategoryMenu("Font size", html, player, controls, layers, media);


            $(".mejs-settings-menu-item", controls).on('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                var step = parseInt($(this).attr('data-value'));
                $.cookie('cincopavideoSubtitleFontSizeV2', step );
                player.options.skinObject.subtitleFontSizeStep = step;
                player.options.skinObject.adjustSubtitleSize();
                $('.mejs-settings-menu-item-list', controls).attr('data-checked', 'false');
                $(this).attr('data-checked', 'true');


                t.createMenu(player, controls, layers, media);
            });

            $(".mejs-settings-menu", controls).css("overflow", "hidden");
            var newDiv = $(".mejs-settings-menu", controls).clone().css({"height": "auto", "visibility" : "hidden"});
            var maxH = layers.parents(".mejs-container").height() - $(controls).height() -35;
            $(".mejs-settings-menu", controls).after(newDiv);
            var h = Math.min(maxH,newDiv.height()) ;
            newDiv.remove();
            $(".mejs-settings-menu", controls).css({
                "width": "122px",
                "height": h + "px"
             })
            setTimeout(function(){
                $(".mejs-settings-menu", controls).css("overflow", "auto");
            }, 310)
        },

        createQualityMenu: function(player, controls, layers, media){
            var t = this;
            var hlsObj = $(media).data('hls')
            var current_url;
             if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                current_url = media.src;
            }else{
                current_url = $(media).data(player.options.dataCollector);
            }

            var currentData = player.options.skinObject.sendDataCollector(current_url || 0)
            var m3u8Arr = t.createM3u8Arr(currentData.item)

            if (t.media.pluginType == 'native') {
                var versions = [];
                var hlsObj = $(media).data("hls");

                if(player.options.skinObject.go.args.enable_hls && !t.isHlsSupported(player.options.skinObject.go.args.enable_hls) && t.isNativeHls()){
                    for(var i = 0, il = m3u8Arr.length ; i < il; i++){
                        versions.push({
                            name: m3u8Arr[i].display_name,
                            value: i
                        })
                    }
                }else{
                    if(!hlsObj || !hlsObj.levels || !hlsObj.levels.length) return;
                    for(var i = 0, il = hlsObj.levels.length ; i < il; i++){
                        versions.push({
                            name: hlsObj.levels[i].name || hlsObj.levels[i].height+'p'  ,
                            value: i
                        })
                    }
                }
                versions.sort(function(a, b) {
                    return parseFloat(b.name) - parseFloat(a.name);
                });

                versions.push({name: "auto" , value: "auto"});
                var currentVersion = "auto";
                if(hlsObj && hlsObj.disableResize){
                    currentVersion = hlsObj.currentLevel;
                }else if(player.options.skinObject.nativeHls && player.options.skinObject.nativeHls[player.id]){
                    currentVersion = player.options.skinObject.nativeHls[player.id];
                }
                var html = "",versionName;
                for (var i = 0, il = versions.length; i<il; i++) {
                    versionName = versions[i].name
                    
                if(versionName == "720p" || versionName == "1080p" || versionName == "1440p"){
                    versionName += " <sup class='mejs-settings-menu-item-label-hd'>HD</sup>"
                }else if(versionName == "2160p"){
                    versionName += " <sup class='mejs-settings-menu-item-label-hd'>4K</sup>"
                }
                html += '<div class="mejs-settings-menu-item mejs-settings-menu-item-list" data-value="' + versions[i].value + '" ' + (currentVersion == versions[i].value ? 'data-checked="true"' : 'data-checked="false"') +'>' +
                            '<div class="mejs-settings-menu-item-label" ><span>'  + versionName + '</span></div>' +
                        '</div>';
                }
                t.createCategoryMenu("Quality", html, player, controls, layers, media);
                $(".mejs-settings-menu-item", controls).on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var newVersion = $(this).attr('data-value');
                    t.switchVersion(player, newVersion,media);
                    $('.mejs-settings-menu-item-list', controls).attr('data-checked', 'false');
                    $(this).attr('data-checked', 'true');
                    if(newVersion != "auto"){
                        t.createMenu(player, controls, layers, media, {
                            version: newVersion
                        });
                    } else {
                        var h = player.$media.height();
                        var level = player.options.skinObject.getHlsLevel(h);
                        t.createMenu(player, controls, layers, media, {
                            level: level
                        });
                    }

                });

                $(".mejs-settings-menu", controls).css("overflow", "hidden");
                var newDiv = $(".mejs-settings-menu", controls).clone().css({"height": "auto", "visibility" : "hidden"});
                var maxH = layers.parents(".mejs-container").height() - $(controls).height() -35;
                $(".mejs-settings-menu", controls).after(newDiv);
                var h = Math.min(maxH,newDiv.height()) + 5 ;
                newDiv.remove();1
                $(".mejs-settings-menu", controls).css({
                    "width": "122px",
                    "height": h + "px"
                 })
                setTimeout(function(){
                    $(".mejs-settings-menu", controls).css("overflow", "auto");
                }, 310)
            }

        },

        switchVersion: function (player, version,media) {
            var t = this
            var current_url;
             if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                current_url = media.src;
            }else{
                current_url = $(media).data(player.options.dataCollector);
            }
            var currentData = player.options.skinObject.sendDataCollector(current_url || 0)
            var m3u8Arr = t.createM3u8Arr(currentData.item)
            var hlsObj = $(media).data('hls')
            var level;
            if(player.options.skinObject.go.args.enable_hls && !t.isHlsSupported(player.options.skinObject.go.args.enable_hls) && t.isNativeHls()){
                var mediaelement = player.options.skinObject.player.$media[0];
                var currentTime = player.options.skinObject.go.playerAPI.currentTime();
                var dataURI;

                if(version == 'auto'){
                    dataURI =  player.options.skinObject.masterM3u8DataUri(m3u8Arr);
                }else{
                    dataURI = m3u8Arr[version].url;
                }
                mediaelement.setSrc(dataURI);
                mediaelement.load();
                mediaelement.addEventListener('loadeddata', function (e) {
                    player.options.skinObject.go.playerAPI.setCurrentTime(currentTime);
                    setTimeout(function(){
                        player.options.skinObject.go.playerAPI.play();
                    },100);                   
                });
                if(version != 'auto'){
                    $.cookie('cincopavideoQuality', m3u8Arr[version].display_name);
                }else{
                    $.cookie('cincopavideoQuality', 'auto');
                }
                
                if(typeof player.options.skinObject.nativeHls == 'undefined'){
                    player.options.skinObject.nativeHls = {}
                }
                player.options.skinObject.nativeHls[player.id] = version

                
                return;
            }else if(version != "auto"){
                hlsObj.disableResize = true;
                $(media).data('hls', hlsObj );
                level = version;
            } else {
                var h = player.$media.height();
                hlsObj.disableResize = false;
                $(media).data('hls', hlsObj );
                level = player.options.skinObject.getHlsLevel(h);
            }
            
            if(hlsObj.loadLevel != level){
                hlsObj.nextLevel = level;
                hlsObj.MediaJSON.version = hlsObj.levelController.levels[level];
                player.options.skinObject.go.onSkinEvent('video.change', hlsObj.MediaJSON );
            }
            if(version != "auto"){
                $.cookie('cincopavideoQuality', hlsObj.MediaJSON.version.name);
            } else {
                $.cookie('cincopavideoQuality', "auto");
            }
        },

        showhidegear: function (player, controls, layers,media) {


            var t = this;
            var current_url;
            if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                current_url = media.src;
            }else{
                current_url = $(media).data(player.options.dataCollector);
            }
            
            var currentData = player.options.skinObject.sendDataCollector(current_url || 0)
            var m3u8Arr = t.createM3u8Arr(currentData.item)

            var hlsObj = $(media).data('hls')

            var buttonsCount = 0;
            /* caption option enable/disable */
            var isChapters = false;
            if(player.options.skinObject.go.args.chapter && parseInt($(".mejs-chapters-wrap", layers).attr("data-chaptersCount")) > 0 && layers.parents(".mediaElement").find(".ze_tl_block").is(":hidden") && controls.find(".mejs-chapters-button").hasClass("mejs-force-hidden-button")){
                isChapters = true;
                buttonsCount++;
            }

            /* chromecast option enable/disable */
            var isChromecast = false;
            if(player.options.skinObject.chromecastExist && controls.find(".mejs-player-chrome-cast-button").hasClass("mejs-force-hidden-button")){
                isChromecast = true;
                buttonsCount++;
            }

            /* speed option enable/disable */
            var isSpeed = false
            if(player.options.skinObject.go.args.speed){
                isSpeed = true;
                buttonsCount++;
            }

            /* subtitle option enable/disable */
            var isSubtitle = false;
            if(player.options.skinObject.go.args.subtitle && player.tracks.length > 0 && $(".mejs-captions-selector li.track-current", controls).length > 0 && controls.find(".mejs-captions-button").hasClass("mejs-force-hidden-button")){
                isSubtitle = true;
                buttonsCount++;
            }

            /* quality option enable/disable */
            var isQuality = false;


            if(hlsObj && hlsObj.levelController.levels && hlsObj.levelController.levels.length > 0 || 
                (player.options.skinObject.go.args.enable_hls  && !t.isHlsSupported(player.options.skinObject.go.args.enable_hls) 
                && t.isNativeHls() && m3u8Arr.length > 0)
                ){
                isQuality = true;
                buttonsCount++;
            }
            if(buttonsCount == 0){
                $(".mejs-gear-button", controls).addClass("mejs-gear-button-hidden");
            } else {
                $(".mejs-gear-button", controls).removeClass("mejs-gear-button-hidden");
            }

        },


        buildcaptions_size: function (player, controls, layers, media) {


            if(typeof $.cookie == 'undefined'){
                return;
            }
            var subtitleFontSizeStep ;

            if(!$(".mejs-captions-list",player.container).length){
                $(".mejs-captions-selector ul",player.container).wrap("<p class='mejs-captions-list'>")
            }

            $(".mejs-captions-selector ul li:first-child",player.container).appendTo($(".mejs-captions-selector ul" ));
            $(".mejs-captions-selector",player.container).append("<div class='mejs-captions-fontsize'><span class='mejs-size-text'>font size</span><p class='mejs-increase-size'>+</p><p class='mejs-decrease-size'>&#8211;</p></div>");

            if($.cookie('cincopavideoSubtitleFontSizeV2')){
                subtitleFontSizeStep = $.cookie('cincopavideoSubtitleFontSizeV2');
                adjustSubtitleSize();
            } else {
                subtitleFontSizeStep = 2;
                $.cookie('cincopavideoSubtitleFontSizeV2', 2);
                adjustSubtitleSize();
            }
            $(".mejs-captions-selector .mejs-captions-fontsize p",player.container).off("click").on("click", function(){
                if($(this).hasClass("mejs-increase-size") && subtitleFontSizeStep < 5 ){
                    subtitleFontSizeStep ++;
                    $.cookie('cincopavideoSubtitleFontSizeV2', subtitleFontSizeStep);
                    adjustSubtitleSize();
                } else if ($(this).hasClass("mejs-decrease-size") && subtitleFontSizeStep > 0){
                    subtitleFontSizeStep --;
                    $.cookie('cincopavideoSubtitleFontSizeV2', subtitleFontSizeStep);
                    adjustSubtitleSize();
                }
            });



            function adjustSubtitleSize (){
                var width =  $(player.container).width();
                var fontSizes = [50 , 75, 100 , 150 , 200 , 300];
                var unit = 2.45;
                
                var fontSize;
                var normal_size =  (unit * width / 100 );
                if(subtitleFontSizeStep == 2){
                    fontSize = normal_size;
                } else if (subtitleFontSizeStep < 2){
                    fontSize = normal_size - (normal_size * (1 - fontSizes[subtitleFontSizeStep]/200))
                } else {
                    fontSize = normal_size *(1 + fontSizes[subtitleFontSizeStep] / 400)
                }
                if(fontSize < 16){
                    $(".mejs-captions-layer",player.container).addClass('mejs-captions-text--small');
                }else{                    
                    $(".mejs-captions-layer",player.container).removeClass('mejs-captions-text--small');
                }
                $(".mejs-captions-text",player.container).css("font-size", fontSize+"px");
            }

            var winSelector,resizeTimer;
            if (player.options.skinObject.go.args.iframe) {
                winSelector = parent.window;
            } else {
                winSelector = window;
            }

            if(!!navigator.userAgent.match(' Safari/') && !navigator.userAgent.match(' Chrom') && !!navigator.userAgent.match(' Version/5.')){
                winSelector = window;
            }
            $(winSelector).on('resize.mediaelement', function () {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function () {
                    adjustSubtitleSize();
                }, 100);
            });
        }
    })
})(zeQuery);

/* search in captions */
(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype, {
        // LOOP TOGGLE
        buildtranscript_search: function (player, controls, layers, media) {
            var t = this;
            var isVisible = false;
            t.container.addClass("mejs-transcript-search-container");
            var layer = $("<div>").addClass("mejs-layer mejs-transcript-search-overlay");
            var content = $("<div>").addClass("mejs-transcript-search-content");
            var header = $("<div>").addClass("mejs-transcript-search-header");
            var input = $("<input type='text'>").addClass("mejs-transcript-search-input");
            var list = $("<ul>").addClass("mejs-transcript-search-list");
            var ignoreNextScrollEvent = false;
            var preventAutoScrool = false;
            var timer = null;

            var header_actions = $("<div>").addClass("mejs-transcript-search-header-actions");
            header_actions.html("<span class='mejs-transcript-search-header-actions-counter'>0 / 0</span><span class='mejs-transcript-search-header-actions-clear'></span>")
            input.appendTo(header);
            header_actions.appendTo(header);
            header_actions.hide();
            header.appendTo(content);
            list.appendTo(content);
            content.appendTo(layer);
            layer.appendTo(layers);

            var close = $("<div>").addClass("mejs-transcript-close");
            close.html("<i></i>")
            close.appendTo(header);

            close.on("click", function(){
                hide();
            });
			
			$(document).off('keyup.transcript_search');

            media.addEventListener('loadedmetadata',function (e) {  
                if(layers.hasClass("mejs-transcript-search-overlay-active")){
                    hide()
                }
            })    
            $(document).on("mousedown",".mejs-captions-search-icon", function(e){
                
                show();
				$(document).on('keyup.transcript_search',function(e) {			 
				  if (e.which === 27) {
					  close.click();
					  $(document).off('keyup.transcript_search');
				  }
				});
            })
            
            t.container.off().on("click",".mejs-captions-text", function(e){
                show();
				$(document).on('keyup.transcript_search',function(e) {			 
				  if (e.which === 27) {
					  close.click();
					  $(document).off('keyup.transcript_search');
				  }
				});
            })

            header_actions.find(".mejs-transcript-search-header-actions-clear").on("click", function(){
                input.val("");
                header_actions.hide();
                input.trigger("input")
            })

           var keyupTimer;
			input.on("keyup", function(e){
				clearTimeout(keyupTimer)
				var that = this;
				keyupTimer = setTimeout(function(){
					if(e.which === 13 && input.val()){
						var text = header_actions.find(".mejs-transcript-search-header-actions-counter").text();
						var splitted = text.split(" ");
						var order = splitted[0];
						var count = splitted[splitted.length - 1];
						order = +order;
						if(order >= count) order = 0;
						splitted[0] = order + 1;

						if(count > 0){
							header_actions.find(".mejs-transcript-search-header-actions-counter").text(splitted.join(" "));
							var c = 0;
							list.find(".mejs-transcript-search-list-highlighted").each(function(){
								var highlighted_count = +($(this).attr("data-highlighted") || 0);
								c += highlighted_count;
								if(c >= order + 1){
									var elem = $(this);
									scrollToElement(elem)
									preventAutoScrool = true;
									clearTimeout(timer);
									timer = setTimeout(function(){
										preventAutoScrool = false;
										scrollToActive()
									}, 10000);
									return false;
								}
							})

							
						}
					}
				},300);
            });

            var inputTimer;
			input.on("input", function(){
				clearTimeout(inputTimer);
				var that = this;
				inputTimer = setTimeout(function(){

					var value  = $(that).val().trim();
					if(value){
						header_actions.show()
					} else {
						header_actions.hide()
					}
					var items = list.find("p");
					var counter = 0;
					items.each(function(){
						var text = $(this).html();
						text = text.replace(/<\/?span[^>]*>/g,"");
						$(this).html(text);

						if(text.toLowerCase().indexOf(value.toLowerCase()) > -1){
							var occ_count = text.toLowerCase().split(value.toLowerCase()).length - 1;
							/* 	var occ = text.substr(text.toLowerCase().indexOf(value.toLowerCase()), value.length); */							
							text = text.replace(new RegExp(value, 'gi'), function(str) {return "<span class='mejs-transcript-search-list-highlight'>" + str + "</span>"});							
							//text = text.replace(new RegExp(value, 'gi'), "<span class='mejs-transcript-search-list-highlight'>" + occ + "</span>");
							$(this).html(text);
							$(this).parent().addClass("mejs-transcript-search-list-highlighted");
							$(this).parent().attr("data-highlighted", occ_count);						
							counter +=occ_count;
							
						} else {
							$(this).html(text);
							$(this).parent().removeClass("mejs-transcript-search-list-highlighted");
							$(this).parent().attr("data-highlighted", 0)
						}

						header_actions.find(".mejs-transcript-search-header-actions-counter").text("0 / " + counter);
					});
					if(counter){
						var e = zeQuery.Event("keyup");
						e.which = 13;
						input.trigger(e);						
					}
				},250);
            })

            input.on("keydown", function(e){
                e.stopImmediatePropagation();
            })

            list.on("click", "li", function(){
                var start = + $(this).attr("data-start");
                player.setCurrentTime(start);
                media.play()
            })

            list.on("scroll", function(){
                if(!ignoreNextScrollEvent){
                    preventAutoScrool = true;
                    clearTimeout(timer);
                    timer = setTimeout(function(){
                        preventAutoScrool = false;
                        scrollToActive()
                    }, 10000)
                }
            })
            var mouseEntered = false;

            t.container.on("mouseenter", function(){
                mouseEntered = true;
                resize(true)
            }).on("mouseleave", function(){
                mouseEntered = false;
                resize(false)
            })
            var resizeTimer = null;
            $(window).on("resize", function(){

                if(isVisible){
                    clearTimeout(resizeTimer)
                    resizeTimer = setTimeout(function(){
                        resize(mouseEntered);
                    }, 400)
                    
                }
                
            })

            function resize(entered) {
                if(entered){
                    var listHeight = t.container.height() - parseInt(content.css("padding-top")) - header.height() - parseInt(list.css("margin-top")) - controls.height();
                } else {
                    var listHeight = t.container.height() - parseInt(content.css("padding-top")) - header.height() - parseInt(list.css("margin-top"));
                }
                list.css("max-height", listHeight);
            }

            function show(){
                buildList();
                layers.addClass("mejs-transcript-search-overlay-active");
                isVisible = true;
                resize(true)
            }

            function hide(){
                layers.removeClass("mejs-transcript-search-overlay-active");
                isVisible = false;
            }

            function buildList(){
                var texts = [];
                var times = [];
                if(t.selectedTrack && t.selectedTrack.entries){
                    texts = t.selectedTrack.entries.text;
                    times = t.selectedTrack.entries.times;
                }


                var htm = "";
                for(var i = 0; i < texts.length; i++){
                    htm += "<li data-start='" + times[i].start + "' data-stop='" + times[i].stop + "'><p>" + texts[i] + "</p></li>";
                }

                list.empty();
                list.html(htm);
            }

            media.addEventListener('timeupdate', function (e) {
                if(isVisible){
                    var time = media.currentTime;
                    var listItems = list.find("li");
                    listItems.each(function(){
                        var start = + $(this).attr("data-start") ;
                        var stop = + $(this).attr("data-stop") ;
                        if(start < time && time < stop){
                            if(!$(this).hasClass("mejs-transcript-search-list-active")){
                                $(this).addClass("mejs-transcript-search-list-active");
                                scrollToActive();
                            }
                        } else {
                            $(this).removeClass("mejs-transcript-search-list-active")
                        }
                    });
                }
                
            })

            function scrollToActive(){
                var active_item = list.find(".mejs-transcript-search-list-active");
                if(active_item.length){
                    var active_item_top = active_item.position().top;
                    if(!preventAutoScrool){
                        ignoreNextScrollEvent = true;
                        list.animate({
                            scrollTop: active_item_top + list.scrollTop()
                        }, 100, function() {
                            setTimeout(function(){
                                ignoreNextScrollEvent = false;
                            }, 100)
                        });
                    }
                }
            }

            function scrollToElement(elem){
                if(elem.length){
                    var top = elem.position().top;
                    ignoreNextScrollEvent = true;
                    list.animate({
                        scrollTop: top + list.scrollTop()
                    }, 100, function() {
                        setTimeout(function(){
                            ignoreNextScrollEvent = false;
                        }, 100)
                    });
                }
            }
        }
    })

})(zeQuery);


/* upnext */
(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype, {
        buildupnext: function (player, controls, layers, media) {
            var layer = $("<div>").addClass("mejs-layer mejs-overlay mejs-layer-upnext");
            layer.appendTo(layers);
        
            media.addEventListener('play', function (e) {
                var activePlaylistItem = layers.find('.mejs-playlist li.current');
                var next = activePlaylistItem.next();
                layer.find(".mejs-upnext-inner").remove();
                if(next.length){
                    var inner = $("<div>").addClass("mejs-upnext-inner");
                    var title = next.attr("title");
                    var thumbnail = next.attr("data-thumbnail");
                    inner.html("<span class='mejs-upnext-title'>" + title + "</span><div class='mejs-upnext-thumbnail-wrapper'><img class='mejs-upnext-thumbnail' src='" + thumbnail + "' alt='" + title+ "' /></div>")
                    inner.appendTo(layer);
                    inner.on("click", function(){
                        next.trigger("click");
                    })
                } 
            })

            media.addEventListener('timeupdate', function (e) {
                var ct = ~~media.currentTime;
                var duration = e.target.duration;
                var precent = Math.round(duration * 5/100);
                precent = Math.min(precent, 10);
                if(precent < 2 && duration > 2){
                    precent = 2;
                }
                if(ct > duration - precent){
                    layer.show();
                } else {
                    layer.hide();
                }
            })
        }
    })

})(zeQuery);



/* storyboard plugin */
(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype,{
        buildstoryboard: function (player,controls,layers,media) {
            var that = this;
            isMobile = {
                Android: function () {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function () {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function () {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i) || ((/iPad|iPhone|iPod/.test(navigator.platform) ||
                        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
                        !window.MSStream);
                },
                Opera: function () {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
                },
                any: function () {
                    return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
                }
            };


            /* REQUIRED media must have data-index to allow get current item */
            var current_url;
             if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                current_url = media.src;
            }else{
                current_url = $(media).data(player.options.dataCollector);
            }

            var currentItem = player.options.skinObject.sendDataCollector(current_url || 0 ).item;
            
            if (!currentItem) {
                return;
            }

            var sb_arg = player.options.skinObject.go.args.storyboard;
            /* add storyboard class to gallery container */
            $('#' + player.options.galleryId).addClass('storyboard').addClass(sb_arg);
            $('body').addClass('cp_storyboard');

            /* append storyboard container */
            var timelineThumb = $('<div class="time-rail-thumbnails thumbnails-loading"><div  class="thumbImage preview" style="text-align: center;">Processing...</div></div>');
            $(controls).find('.mejs-time-rail').prepend(timelineThumb);

            //var thumbPreview = $(controls).find('.thumbImage.preview');
            var timelineThumbPreview = $(timelineThumb).find('.thumbImage.preview');

            media.addEventListener('loadedmetadata',function (e) { 
              
                if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                    current_url = media.src;
                }else{
                    current_url = $(media).data(player.options.dataCollector);
                }

              currentItem = player.options.skinObject.sendDataCollector(current_url || 0 ).item;
              
              if (!currentItem) {
                  return;
              }
                
                /*  use current element ratio for corrections */
                var currentElementRatio = currentItem.aspect_ratio;
                var calcWidth = sb_arg == 'small' ? 100 : 200;
                var timelineThumbH = parseInt(calcWidth / currentElementRatio);
                if (currentElementRatio > 1) {
                    var diff = 0;
                    if (sb_arg == 'small') {
                        diff = (75 - timelineThumbH) / 2;

                    } else {
                        diff = (150 - timelineThumbH) / 2;
                    }
                    timelineThumbPreview.css({
                        'width': calcWidth,
                        'height': timelineThumbH + 'px',
                        'line-height': timelineThumbH + 'px'
                    });
                }else {
                    var diff = 0;
                    var calcHeight = sb_arg == 'small' ? 75 : 150;
                    var timelineThumbW = parseInt(calcHeight * currentElementRatio);
                    if (sb_arg == 'small') {
                        diff = (100 - timelineThumbW) / 2;
                    } else {
                        diff = (200 - timelineThumbW) / 2;
                    }
                    timelineThumbPreview.css({
                        'height': calcHeight,
                        'line-height': calcHeight + 'px',
                        'width': timelineThumbW + 'px'
                    });
                }
                timelineThumbPreview.attr('data-fix',diff);
                timelineThumbPreview.attr('data-ratio',currentElementRatio);

                var mejsTimeRail = $(controls).find('.mejs-time-rail');


                mejsTimeRail.find('.mejs-time-total').on('click',function () {
                    mejsTimeRail.find('.mejs-time-total').mouseenter();
                });
                mejsTimeRail.find('.mejs-time-total').on('mousemove touchmove',function (e) {
                    onMouseMove(e);
                });

                mejsTimeRail.find('.mejs-slider-unvisible').on('click',function (e) {
                    mejsTimeRail.find('.mejs-slider-unvisible-total').mouseenter();
                });
                mejsTimeRail.find('.mejs-slider-unvisible').on('mousemove touchmove',function (e) {
                    onMouseMove(e,'mejs-slider-unvisible');
                });


                mejsTimeRail.find('.mejs-time-total').mouseleave(function () {
                    $(controls).find('.time-rail-thumbnails').hide();
                    $(controls).removeClass('time-rail-thumbnails-visible');
                });


                $(player.container).parent().on("touchend", function(e){
                    var target = $(e.target);

                    /* to fix issue with sb on toch devices */
                    if( target.closest(".mejs-time-rail").length  && sb_arg != 'off') {
                        onMouseMove(e);
                    }
                
                });

                hoverHandler(timelineThumbPreview,sb_arg);

                var mouseX;
                function onMouseMove(e,selector) {                   
                    if (e) {
                        var duration = media.duration;
                        if (duration <= 120) {  // video duration < 2 min, frame for every sec
                            frameK = 1;
                        } else if (duration > 120 && duration <= 300) { // video 2min < duration < 5 min, frame for every 2 sec
                            frameK = 2;
                        } else if (duration > 300 && duration <= 900) { //video 5min < duration < 15 min, frame for every 5 sec
                            frameK = 5;
                        } else { //video  duration > 15 min, frame for every 10 sec
                            frameK = 10;
                        }
                        if (isMobile.any()) {
                            var offset;
                            if (selector === 'mejs-slider-unvisible') {
                                offset = mejsTimeRail.find('.mejs-slider-unvisible-total').offset();
                            } else {
                                offset = mejsTimeRail.offset();
                            }
                            var pageX;
                            try {
                                pageX = e.pageX || e.originalEvent.pageX || e.originalEvent.changedTouches[0].pageX;
                            } catch (ex) {
                            }
                            mouseX = pageX - offset.left;
                        } else {
                            if (selector === 'mejs-slider-unvisible') {
                                mejsTimeRail.find('.mejs-slider-unvisible-total').off('mousemove').on('mousemove',function (e) {
                                    var offset = $(this).offset();
                                    mouseX = e.pageX - offset.left;
                                });
                                mejsTimeRail.off('mousemove');
                            } else {
                                mejsTimeRail.off('mousemove').on('mousemove',function (e) {
                                    var offset = $(this).offset();
                                    mouseX = e.pageX - offset.left;
                                });
                                mejsTimeRail.find('.mejs-slider-unvisible-total').off('mousemove');
                            }
                        }
                    }

                    if (!mouseX) return;
                    var timeText = $(controls).find('.mejs-time-float-current').text();
                    /* calculate curroct possition */
                    var timebarLeft = 0;
                    var minusWidth = parseInt(timelineThumb.width()) / 2;
                    var timebarTop;
                    if ($(controls).find('.mejs-time-rail').css('position') == 'absolute') {
                        timebarTop = mejsTimeRail.position().top;
                    } else {
                        timebarTop = mejsTimeRail.height();
                    }
                    var thumbLeft = mouseX + timebarLeft - minusWidth;
                    thumbLeft = Math.min(mejsTimeRail.width() - timelineThumb.width(),thumbLeft);
                    thumbLeft = Math.max(0,thumbLeft);
                    timelineThumb.css({ 'left': thumbLeft,'bottom': timebarTop });

                    /* end of calculation */
                    var seconds = hmsToSecondsOnly(timeText);

                    var row,col;
                    
                    frameVal = parseInt(seconds / frameK);
                    if (frameVal < 10) {
                        col = frameVal;
                    } else {
                        col = frameVal % 10;
                    }
                    row = parseInt(frameVal / 10);
                    var calcWidth = sb_arg == 'small' ? 100 : 200;
                    var calcHeight = sb_arg == 'small' ? 75 : 150;
                    var thumbRatio = parseFloat(timelineThumbPreview.attr('data-ratio'));
                    var diff = parseInt(timelineThumbPreview.attr('data-fix'));
                    if (thumbRatio > 1) {
                        var positionY = -diff + (-row * calcHeight);
                        
                        timelineThumbPreview.css({
                            'background-position': (-col * calcWidth) + 'px ' + positionY + 'px',
                            'background-repeat': 'no-repeat'
                        });
                    } else {
                        var positionX = -diff + (-col * calcWidth);
                        timelineThumbPreview.css({
                            'background-position': positionX + 'px ' + (-row * calcHeight) + 'px',
                            'background-repeat': 'no-repeat'
                        });
                    }

                    $(controls).find('.time-rail-thumbnails').show();
                    $(controls).addClass('time-rail-thumbnails-visible');

                    if (isMobile.any()) {
                        clearTimeout(that.mobileSBTimer);
                        that.mobileSBTimer = setTimeout(function () {
                            $(controls).find('.time-rail-thumbnails').hide();
                            $(controls).removeClass('time-rail-thumbnails-visible');
                        },2000);
                    }
                }
            });

            function hoverHandler(thumbnailObj,size) {

                if (typeof size == 'undefined' || size == 'small') {
                    size = '3sb';
                } else {
                    size = '2sb';
                }


                var tmbUrl = "";
                tmbUrl = player.options.skinObject.getThumbnailUrl(currentItem,size === "3sb" ? 5 : 6);

                if (!tmbUrl) tmbUrl = '';
                var ni = new Image();
                ni.src = tmbUrl;
                ni.onload = function () {
                    $(controls).find('.time-rail-thumbnails').removeClass('thumbnails-loading');
                    $(controls).find('.time-rail-thumbnails .thumbImage.preview').removeClass('thumbnails-loading-text');
                    thumbnailObj.html('');
                    thumbnailObj.css({
                        'background-image': 'url(' + tmbUrl.replace(/\(|\)/g,"") + ')',
                        'background-repeat': 'no-repeat'
                    });
                }
                ni.onerror = function () {
                    console.log('story board issue',tmbUrl);
                }
            }

            function hmsToSecondsOnly(str) {
                if (typeof str == 'undefined') {
                    return '';
                }
                var p = str.split(':'),
                    s = 0,m = 1;

                while (p.length > 0) {
                    s += m * parseInt(p.pop(),10);
                    m *= 60;
                }

                return s;
            }

        }
    })

})(zeQuery);

(function ($) {
    $.extend(CincopaMediaElementPlayer.prototype,{
        buildvideotrim: function (player,controls,layers,media) {
            var current_url;
            if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                current_url = media.src;
            }else{
                current_url = $(media).data(player.options.dataCollector);
            }


            media.setCurrentTime = function(time) {
                    var t = time;
                    if(media.getAttribute("area-startTime")){
                        t = Math.max(parseInt(media.getAttribute("area-startTime")), t)
                    }
                    if(media.getAttribute("area-endTime")){
                        t = Math.min(parseInt(media.getAttribute("area-endTime")), t)
                    }
                    this.currentTime = t;
                }

            var galleryItems = player.options.skinObject.go.MediaJSON.items;
            player.options.skinObject.sendDataCollector
            var sendData = player.options.skinObject.sendDataCollector(current_url || 0);
            var cincoObj = (player.options.skinObject.go.args.iframe) ? parent.cincopa : cincopa;
            for (var i = 0; i < galleryItems.length; i++) {
                if(galleryItems[i].timeline){
                    var timeLineObject = cincoObj.json_parse(galleryItems[i].timeline);
                    var start = 0, end = null;
                    if(typeof timeLineObject.start_end != "undefined"){
                        if(timeLineObject.start_end.start){
                            if(timeLineObject.start_end.start.type == "second"){
                                if(timeLineObject.start_end.start.second > 0 && timeLineObject.start_end.start.second < hmsToSecondsOnly(galleryItems[i].duration)){
                                    start = timeLineObject.start_end.start.second;
                                }
                            } else if(timeLineObject.start_end.start.type == "chapter"){
                                start = getChapterTimeByName(timeLineObject.chapter, timeLineObject.start_end.start.name);
                            }
                        }

                        if(timeLineObject.start_end.end){
                            if(timeLineObject.start_end.end.type == "second"){
                                if(timeLineObject.start_end.end.second > 0 && timeLineObject.start_end.end.second <= hmsToSecondsOnly(galleryItems[i].duration) && timeLineObject.start_end.end.second > start){
                                    end = timeLineObject.start_end.end.second;
                                }
                            } else if(timeLineObject.start_end.end.type == "chapter"){
                                end = getChapterTimeByName(timeLineObject.chapter, timeLineObject.start_end.end.name);
                            }
                        }

                    }
                    if(start) galleryItems[i].startTime = start;
                    if(end) galleryItems[i].endTime = end;
                    if(start && end && end <= start && galleryItems[i].endTime){
                        delete galleryItems[i].endTime
                    }

                    // vr(360 video)
                    if(typeof timeLineObject.isVR != "undefined"){
                        if(timeLineObject.isVR){
                        galleryItems[i].isVR = true;
                        }
                    }
                }
            }

            media.addEventListener('loadedmetadata', function (e) {

                    if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                        current_url = media.src;
                    }else{
                        current_url = $(media).data(player.options.dataCollector);
                    }

                  sendData = player.options.skinObject.sendDataCollector(current_url || 0);
                        if(player.options.skinObject.go.args.videoTrim){

                            /* clean timeline from prev videos data */
                            media.removeAttribute("area-startTime");
                            $(".mejs-time-blocker-start",controls).remove();

                            media.removeAttribute("area-endTime");

                            $(".mejs-time-blocker-end",controls).remove();

                            /* end of clean */
                            if(sendData.item && sendData.item.startTime && sendData.item.startTime > 0){                                
                                media.setAttribute("area-startTime", sendData.item.startTime);
                                if($(".mejs-time-blocker-start", controls).length === 0){
                                    var timeRial = $(".mejs-time-rail", controls)
                                    var blocker = $("<span>").addClass("mejs-time-blocker mejs-time-blocker-start");
                                    var sbBlockerLeft = $("<span>").addClass("mejs-time-blocker mejs-storyboardy-blocker mejs-time-blocker-start");
                                    blocker.appendTo(timeRial);
                                    sbBlockerLeft.prependTo(controls);
                                    blocker.css({
                                        width:(100 * sendData.item.startTime)/media.duration + "%",
                                    });
                                    sbBlockerLeft.css({
                                        width:(100 * sendData.item.startTime)/media.duration + "%",
                                        bottom: $(controls).height()
                                    });
        
                                    sbBlockerLeft.on("mousemove touchmove mouseup touchend touchstart mouseenter mouseleave mouseout mouseover click", function(e){
                                        e.stopPropagation();
                                        e.preventDefault();
                                        return false;
                                    })
                                    blocker.on("mousemove touchmove mouseup touchend mouseenter mouseleave mouseout mouseover click", function(e){
                                        e.stopPropagation();
                                        e.preventDefault();
                                        return false;
                                    })
                                }                            
                            }

                            if(sendData.item && sendData.item.endTime && sendData.item.endTime < Math.round(media.duration)){                                
                                media.setAttribute("area-endTime", sendData.item.endTime);
                                if($(".mejs-time-blocker-end", controls).length === 0){
                                    var timeRial = $(".mejs-time-rail", controls)
                                    var blocker = $("<span>").addClass("mejs-time-blocker mejs-time-blocker-end");
                                    var sbBlockerRight = $("<span>").addClass("mejs-time-blocker mejs-storyboardy-blocker mejs-time-blocker-end");
                                    blocker.appendTo(timeRial);
                                    sbBlockerRight.prependTo(controls);
                                    blocker.css({
                                        width:(100 * (media.duration - sendData.item.endTime))/media.duration + "%",
                                        position: "absolute",
                                        top: "0",
                                        right: 0,
                                        background: "#fff",
                                        opacity: "0.7"
                                    });
                                    sbBlockerRight.css({
                                        width:(100 * (media.duration - sendData.item.endTime))/media.duration + "%",
                                        bottom: $(controls).height()
                                    });

                                    sbBlockerRight.on("mousemove touchmove mouseup touchend touchstart mouseenter mouseleave mouseout mouseover click", function(e){
                                        e.stopPropagation();
                                        e.preventDefault();
                                        return false;
                                    })        
                                    blocker.on("mousemove touchmove mouseup touchend mouseenter mouseleave mouseout mouseover click", function(e){
                                        e.stopPropagation();
                                        e.preventDefault();
                                        return false;
                                    })
                                }
                            } 
                        }
            })

            media.addEventListener('timeupdate', function (e) {
                if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                    current_url = media.src;
                }else{
                    current_url = $(media).data(player.options.dataCollector);
                }
                sendData = player.options.skinObject.sendDataCollector(current_url || 0);
                ct = ~~media.currentTime;

                if (ct % 1 == 0) {
                    if(sendData.item && sendData.item.endTime && ct >= sendData.item.endTime){
                        stopHLS(media, sendData.item.startTime)
                        return                       
                    } else if(sendData.item && sendData.item.startTime && ct < sendData.item.startTime){
                        // media.setCurrentTime(sendData.item.startTime);
                    }
                }

            });
            function getChapterTimeByName(chapters, name){
                if(!chapters) return 0;
                var time = 0;
                for(var chapter in chapters){
                    if(chapters[chapter].title == name){
                        time = hmsToSecondsOnly(chapter)
                    }
                }
                return time;
            }
            function stopHLS(mediaElement, startTime){
                mediaElement.setCurrentTime(startTime || 0)
                mediaElement.dispatchEvent(new Event("pause"));
                mediaElement.dispatchEvent(new Event("ended"));
            }

            function hmsToSecondsOnly(str) {
                if(typeof str == 'undefined'){
                    return '';
                }
                var p = str.split(':'),
                        s = 0, m = 1;
    
                while (p.length > 0) {
                    s += m * parseInt(p.pop(), 10);
                    m *= 60;
                }
    
                return s;
            }
        }
    })

})(zeQuery);



/* upnext */
(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype, {
        buildcontrolscontrol: function (player, controls, layers, media) {
                isMobile = {
                    Android: function () {
                        return navigator.userAgent.match(/Android/i);
                    },
                    BlackBerry: function () {
                        return navigator.userAgent.match(/BlackBerry/i);
                    },
                    iOS: function () {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i) || ((/iPad|iPhone|iPod/.test(navigator.platform) ||
                            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
                            !window.MSStream);
                    },
                    Opera: function () {
                        return navigator.userAgent.match(/Opera Mini/i);
                    },
                    Windows: function () {
                        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
                    },
                    any: function () {
                        return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
                    }
                };
                var trigTimer
                if(isMobile.any()){                    
                    $(controls).addClass("ze-show-mobile-controls");

                    $('.mejs-overlay-play',layers).on('touchend',function(e){	

                        if (self.isMobile.iOS() == true) { /* on ios overlay-play event doesnt working */
                            if(!media.paused){
                                        clearTimeout(timeout);
                                        var timeout = setTimeout(function() {
                                            if(!player.jumping){
                                media.pause();
                                            }
                                        },200);
                                        
                            }else if(media.readyState >= 2){
                                media.play();
                                        $(layers[0]).find('.mejs-video-jump').addClass('cp-hide');
                            }

                        }
                        /* need this to hide controls */
                        $(player.container).trigger('touchstart');
                    });
                    $(player.domNode).on('touchend',function(){
                        if(!media.paused){
                            $(".netflix_close_btn", player.container.parentElement).show()
                            if($(player.domNode).hasClass('showControls')){
                                            clearTimeout(timeout);
                                            var timeout = setTimeout(function() {

                                                if(!player.jumping){
                                                    if(!media.activeMobileControl) {
                                media.pause();
                                                    }
                                                    $(layers[0]).find('.mejs-video-jump').addClass('cp-hide');
                                                }
                                            },300);

                            }else {
                                        $(player.domNode).addClass('showControls');
                                        clearTimeout(timer)

                                        var timer = setTimeout(function() {
                                            if(player.jumping){
                                                return
                            }               
                                            $(layers[0]).find('.mejs-video-jump').removeClass('cp-hide');
                                        },600)
                                    }


                            
                        }else if(media.readyState >= 2){
                                    var timer = setTimeout (function() {
                            $(player.domNode).removeClass('showControls');
                                        $(layers[0]).find('.mejs-video-jump').addClass('cp-hide');
                            media.play();
                                    },600)
                                   
                        }
                        $(player.container).trigger('touchstart');
                    });
                        media.addEventListener('timeupdate', function () {
                            if(!controls.hasClass('fadeafterseconds') || !controls.hasClass('removeCotrols')) {
                                player.updateCurrent();
                            }
                        }, false);

                    
                    /* rotate screen if possible on fullscreen */ 
                    if(isMobile.iOS()){   
                        
                           

                       
                                       
                        $(player.media).on('webkitfullscreenchange fullscreenchange', function(){
                            if (document.fullscreenElement || document.webkitFullscreenElement ) { 
                                /* in */
                                fullScreenEnter();
                            } else {
                                /* out */
                                fullScreenExit();
                            }
                        });

                        if((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream){

                            $(player.container).on('enteredfullscreen', fullScreenEnter);

                            $(player.container).on('exitedfullscreen', fullScreenExit); 
                        }else{
                            $(player.container).on('webkitbeginfullscreen', fullScreenEnter) ;
                            $(player.container).on('webkitendfullscreen', fullScreenExit,);
                        }

                    }else{
                    
                        $(player.container).on('enteredfullscreen', fullScreenEnter);

                        $(player.container).on('exitedfullscreen', fullScreenExit); 
                    
                    }
                    /* end fullscreen rotate */
                    function fullScreenEnter(){

                        
                        try{
                            var orientPromiseLand =  window.screen.orientation.lock('landscape');
                            orientPromiseLand.catch(function(reason) {
                                console.log(reason)
                            });
                        }catch(ex){
                            console.log(ex)
                        }
                        $('#'+player.options.skinObject.go.loaderParams["_object"]).addClass('cp-fullscreen-entered');                       
                       

                        /* send event */
                        var current_url;
                        if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                           current_url = media.src;
                        }else{
                           current_url = $(media).data(player.options.dataCollector);
                        }                        
                        var currentData = player.options.skinObject.sendDataCollector(current_url || 0);
                        player.options.skinObject.go.onSkinEvent('video.fullscreenenter', currentData);
                    }

                    function fullScreenExit(){

                        try{
                            var orientPromiseOut = window.screen.orientation.unlock();
                            if(orientPromiseOut != undefined){
                                orientPromiseOut.catch(function(reason) {
                                    console.log(reason)
                                });
                            }                       
                        }catch(ex){
                                console.log(ex)
                        }
                        $('#'+player.options.skinObject.go.loaderParams["_object"]).removeClass('cp-fullscreen-entered');

                        /* send event */
                        var current_url;
                        if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                           current_url = media.src;
                        }else{
                           current_url = $(media).data(player.options.dataCollector);
                        }                        
                        var currentData = player.options.skinObject.sendDataCollector(current_url || 0);
                        player.options.skinObject.go.onSkinEvent('video.fullscreenexit', currentData);
                    }
                }
            

            /* hide controls functionality */
            
            //this fix is for mozilla when pressing esc 
             
              if(typeof document.mozFullScreenElement != 'undefined'){
              
                $(document).off('fullscreenchange.cpmedia  mozfullscreenchange.cpmedia').on('fullscreenchange.cpmedia  mozfullscreenchange.cpmedia', function (e) {

                    var fullscreenElement = document.fullscreenElement || document.mozFullscreenElement ;
                        if (!fullscreenElement) {
                            console.log("exit")
                            $(".mejs-fullscreen").removeClass('mejs-fullscreen');
                            $(".mejs-container-fullscreen").removeClass('mejs-container-fullscreen');
                            $(window).trigger('resize.responsiveslider')
                            setTimeout(function(){
                                var esc = $.Event("keydown", { keyCode: 27 });
                                $("body").trigger(esc) 
                            },0);
                        } else{
                            console.log("enter")
                          
                        }
                    });
                }
                /* fix for hide controls pause */
                // if(isMobile.any()){
                //     $(player.domNode).on('click',function(e){
                //         if(!media.paused){
                //             media.pause();
                //         }
                //     });
                // }
                
                 if(isMobile.any()){
                    $(player.container).parent().on("touchend", function(e){
                        var target = $(e.target);
                        
                        if(target.closest(".mejs-controls").length > 0) return true;
                        if(target.closest(".mejs-container").length > 0){
                            if($(player.container).hasClass('status-play') || $(player.container).hasClass('status-pause')){
                                if($(controls).hasClass("ze-show-mobile-controls")){
                                    $(controls).removeClass("ze-show-mobile-controls");

                                    player.container.trigger('mobilecontrolshidden');
                                    fadeAfterCallback();
                                } else {
                                    $(controls).addClass("ze-show-mobile-controls");
                                    clearTimeout(timer);

                                   var timer = setTimeout(function() {
                                       if(player.jumping){
                                        return
                                    }
                                        $(layers[0]).find('.mejs-video-jump').removeClass('cp-hide');
                                    },600)

                                    player.container.trigger('mobilecontrolsshown');
                                }
                            }
                        } else {
                            $(controls).removeClass("ze-show-mobile-controls");
                            player.container.trigger('mobilecontrolshidden');
                            fadeAfterCallback();
                        }

                    })
                }
                var fadeafterseconds;
                var touchstart;
                $(player.container).on('mousemove', function (e) {                   
                    if(!touchstart){
                        clearTimeout(fadeafterseconds);
                        clearTimeout(hideControls);
                            var hideControls = setTimeout(function() {
                                if(player.jumping){
                                    return
                                }
                        $(controls).removeClass("fadeafterseconds").removeClass('removeCotrols');
                        $(".mejs-captions-position", player.container).removeClass("movetobottom");

                            },600)
                        if(!$('.mejs-chapters-button',  player.container).hasClass("mejs-chapters-off")){
                            $(layers).addClass("mejs-show-chapters");
                        }

                        fadeafterseconds=setTimeout(function(){
                            fadeAfterCallback();
                        },4000)
                    }
                    if(!$(e.target).parents(".mejs-controls").length && !$(e.target).hasClass("mejs-controls")){
                      $(controls).find('.time-rail-thumbnails').hide();
                      $(controls).removeClass('time-rail-thumbnails-visible');
                    }else if( !$(e.target).parents(".mejs-time-rail").length && !$(e.target).hasClass("mejs-time-rail") ){
                      $(controls).find('.time-rail-thumbnails').hide();
                      $(controls).removeClass('time-rail-thumbnails-visible');
                    }
                 
                })
                
                $(player.container).on('touchstart', function(e){

                    clearTimeout(fadeafterseconds);
                    touchstart=true;

                    clearTimeout(hideControls);

                            var hideControls = setTimeout(function() {
                                if(player.jumping){
                                    return
                                }
                                if(!media.paused){
                                    $(layers[0]).find('.mejs-video-jump').removeClass('cp-hide');
                                }
                    $(controls).removeClass("fadeafterseconds")
                               .removeClass("ze-show-mobile-controls")
                               .removeClass('removeCotrols');
                    $(".mejs-captions-position", player.container).removeClass("movetobottom");


                        },400)
                    
                    if(!$('.mejs-chapters-button', player.container).hasClass("mejs-chapters-off")){
                        $(layers).addClass("mejs-show-chapters");
                    }
                    fadeafterseconds=setTimeout(function(){

                        fadeAfterCallback();
                    },4000)
                });

                $(player.container).on('mouseenter', function () {
                    clearTimeout(hideControls);

                    var hideControls = setTimeout(function() {
                        if(player.jumping){
                            return
                        }
                    $(controls).removeClass("fadeafterseconds")
                                .removeClass("ze-show-mobile-controls")
                                .removeClass('removeCotrols');
                        // $(".mejs-captions-position", player.container).removeClass("movetobottom");
                    },600)
                    
                    if(!$('.mejs-chapters-button', player.container).hasClass("mejs-chapters-off")){
                        $(layers).addClass("mejs-show-chapters");
                    }
                      
                   if(!touchstart)
                   {
                    clearTimeout( fadeafterseconds);
                    // $(".mejs-captions-position", player.container).removeClass("movetobottom");
                    if(!$('.mejs-chapters-button', player.container).hasClass("mejs-chapters-off")){
                        $(layers).addClass("mejs-show-chapters");
                    }
                    if(!player.jumping){

                    $(controls).removeClass("fadeafterseconds").removeClass('removeCotrols');
                    }
                        fadeafterseconds=setTimeout(function(){
                        fadeAfterCallback();
                    },4000)
                   }
                    
                });
                $(player.container).on('mouseleave', function () {
                    if(!touchstart){							   
                        clearTimeout(fadeafterseconds);
                        $(".mejs-captions-position", player.container).addClass("movetobottom");
                        

                        if($(player.container).hasClass('status-play') || $(player.container).hasClass('status-pause')){
                            $(layers).removeClass("mejs-show-chapters");
                        }
                    }
           
                });

                function fadeAfterCallback(){
                    $(player.domNode).removeClass('showControls');
                    if( player.options.skinObject.go.args.cincopaTV){
                        setTimeout(function(){
                            $(".netflix_close_btn", player.container.parentElement).hide()
                        },100)
                    }

                    if(!$(player.container).parent().hasClass('isAudio') && !player.jumping ){
                        $(controls).addClass("fadeafterseconds")
                               .addClass('removeCotrols');
                    $(".mejs-captions-position", player.container).addClass("movetobottom");
                    }


                    if(!$(player.container).hasClass('status-pause') && !$(player.container).hasClass('status-ended')){
                        $(layers).removeClass("mejs-show-chapters");
                    }else{
                        $('#' + player.options.galleryId).addClass("ze-mouseleave");
                        $(player.container).addClass("ze-mouseleave");
                    }
                    player.container.trigger('fadeafterseconds')
                    
                }
                var  currentbody =  player.options.skinObject.go.args.iframe ?   $(window.parent.document) : $('body');
                currentbody.on('touchstart', function(e){
                     var target = $(e.target);

                     if(!target.closest(player.container) ) {
                        
                        clearTimeout(fadeafterseconds);
                        $(".mejs-captions-position", player.container).addClass("movetobottom");  
                        if($(e.target).closest('.mejs-chapters-wrap').length <= 0 || $(e.target).hasClass('mejs-chapters-wrap')) {
                                $(layers).removeClass("mejs-show-chapters");
                            
                        }
                    }
         
                });

                
            /* end hide controls functionality */

            /* video ads events */
            player.container.on('mejsprerollstarted', function() {
                player.container.addClass('mejsprerollstarted');
            });

            player.container.on('mejsprerolladsmainvideorestored', function() {
                player.container.removeClass('mejsprerollstarted');
            });

            media.addEventListener('play', function (e) {
                $(player.containerr).addClass('status-play');
            })
            media.addEventListener('pause', function (e) {
                $(player.containerr).removeClass('status-play');
            })
            

        }
    })

})(zeQuery);

(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype, {
        buildadjustplayerfontsize: function (player, controls, layers, media) {
            var winSelector,resizeTimer;
            if (player.options.skinObject.go.args.iframe) {
                winSelector = parent.window;
            } else {
                winSelector = window;
            }

            if(!!navigator.userAgent.match(' Safari/') && !navigator.userAgent.match(' Chrom') && !!navigator.userAgent.match(' Version/5.')){
                winSelector = window;
            }
            $(winSelector).on('resize.mediaelement', function () {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function () {
                    adjustPlayerFontSize();
                }, 100);
            });
            $('.mejs-overlay-button', player.container).addClass('mejs-overlay-button-hidden');
            adjustPlayerFontSize();
            function adjustPlayerFontSize(){

                var calculate = function(num, in_min, in_max, out_min, out_max) {
                    var res = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
                    return Math.max(out_min, Math.min(out_max, res));
                } 
                
                // if(player.options.skinObject.go.args.css_version != '1.1'){
                //     $('.mejs-overlay-button', player.container).removeClass('mejs-overlay-button-hidden');
                //     return;
                // } 
                var container = player.container
                var width =  container.width();
    
                // play button
    
                // for cincopa design video player skin which use font for icons - calculate play and loading buttons size dynamically
                if( $('.mejs-overlay-button', player.container).css("background-image") == "none"){
                    var fs = calculate(width, 100, 1300, 26, 100); 
                    $('.mejs-overlay-button', player.container).css({"width": fs, "height": fs, "font-size": fs, "margin-top" : -fs/2});
                    $('.mejs-overlay-loading', player.container).css({"width": fs, "height": fs});
                    $('.mejs-overlay-loading span', player.container).css({"width": fs, "height": fs});
                    $('.mejs-overlay-button', player.container).removeClass('mejs-overlay-button-hidden');
                }else {
                    /* fallback for old controls play button on smalls creen */
                    if(player.container.width() < 768){
                        player.container.addClass('adjustplayerfontsize--small');
                    }else{
                        player.container.removeClass('adjustplayerfontsize--small');
                    }
                }

                $('.mejs-overlay-button', player.container).removeClass('mejs-overlay-button-hidden');

                if(!player.options.skinObject.go.args.auto_resize){
                    return;    
                }

                container.addClass("mejs-auto-resize");
                controls.find(".mejs-player-logo-button").css({display: "none"})
                var controlFS = calculate(width, 100, 1200, 6, 28); 
                var controlW = calculate(width, 100, 1200, 10, 55);
                var controlP = 0;
                controls.find(".mejs-button").css({
                    "width": controlW + "px",
                    "padding-top": controlP + "px",
                    "padding-bottom": controlP + "px"
                });
    
                container.find(".share-button").css({"width": controlW + "px"});
                container.find(".share-close").css({"width": controlW + "px"});
                
                controls.find(".mejs-button button").css({
                    "font-size" : controlFS + "px",
                    "line-height": controlFS + "px",
                    "padding-top": "12px",
                    "padding-bottom": "12px"
                });
                container.find(".share-button").css("font-size", controlFS + "px");
                container.find(".share-button").css("line-height", controlFS + "px");
                container.find(".share-close").css("font-size", controlFS + "px");
                container.find(".share-close").css("line-height", controlFS + "px");
    
                var mejs_time_elem = controls.find(".mejs-time");
                mejs_time_elem.css("padding-top", ((2*controlP + controlFS + parseInt(controls.find(".mejs-button button").css("padding-top")) + parseInt(controls.find(".mejs-button button").css("padding-bottom")))  - mejs_time_elem.height())/2 + "px");
                
                
                controls.find(".mejs-player-logo-button").css({
                    "width": controlW + "px",
                    "padding-top": controlP + "px",
                    "padding-bottom": controlP + "px",
                    "height": controls.height() + "px",
                    "display": "block",
                    "line-height": "0"
                });
                // chapters
    
                var chaptersWidth = calculate(width, 380, 1000, 120, 240); 
                var chaptersFontSize = calculate(width, 380, 1000, 12, 16); 
                var chaptersPadding = calculate(width, 380, 1000, 5, 30); 
                container.find(".mejs-chapters-list").css({
                    width: chaptersWidth + "px",
                    "font-size": chaptersFontSize + "px"
                })
    
                container.find(".mejs-chapters-list li").css({
                    "padding-left": chaptersPadding +"px",
                    "padding-right": chaptersPadding/2 +"px"
                })
    
                container.find(".mejs-chapters-list li span:last-child").css({
                    "white-space": width > 600 ? "normal" : "nowrap"
                })
    
                container.find(".mejs-chapters-wrap").height(container.height() - controls.height())
    
                // lead gen form
    
                var form = $('.ze_htmloverlay_form', container);
                form.css("padding", "4px")
                form.find("#ze_htmloverlay_form_upper").css({
                    "font-size": calculate(width, 350, 1000, 8, 22) + "px",
                    "margin-bottom": calculate(width, 350, 1000, 4, 20) + "px"
                })
                form.find("#ze_htmloverlay_form_lower").css({
                    "font-size": calculate(width, 350, 1000, 8, 18) + "px",
                    "margin-top": calculate(width, 350, 1000, 3, 15) + "px",
                    "margin-bottom": 0
                })
                form.find(".error-message").css({
                    "font-size": calculate(width, 350, 1000, 8, 12) + "px"
                })
                form.find("input").css({
                    "font-size": calculate(width, 350, 1000, 8, 18) + "px",
                    "padding": "6px 8px",
                    "padding-top": calculate(width, 350, 1000, 4, 6) + "px",
                    "padding-bottom": calculate(width, 350, 1000, 4, 6) + "px",
                    "line-height": "1.3"
                })
    
                form.find(".text-label").each(function(){
                    var label = zeQuery(this);
                    if(label.html() === ""){
                        label.css({
                            "overflow": "hidden",
                            "height": 0,
                            "margin-bottom": 0,
                            "margin-top": calculate(width, 350, 1000, 10, 26) + "px",
                        })
                    } else {
                        label.css({
                            "margin-top": calculate(width, 350, 1000, 6.6, 12) + "px",
                            "font-size": calculate(width, 350, 1000, 10, 14) + "px",
                            "line-height": "1",
                            "margin-bottom": calculate(width, 350, 1000, 6.6, 12) + "px",
                        })
                    }
                })
    
                // share block
                var share_block = $('.share-wrap', container);
                share_block.find(".share-title").css({
                    "font-size": calculate(width, 350, 1200, 16, 36) + "px"
                })
    
                share_block.find(".share-link").css({
                    "font-size": calculate(width, 350, 1200, 10, 15) + "px",
                    "padding-top": calculate(width, 350, 1000, 6, 12) + "px",
                    "padding-bottom": calculate(width, 350, 1000, 6, 12) + "px",
                })
    
                share_block.find(".share-icons i").css({
                    "font-size": calculate(width, 350, 1200, 12, 24) + "px",
                    "width": calculate(width, 350, 1000, 20, 40) + "px",
                    "height": calculate(width, 350, 1000, 20, 40) + "px",
                    "line-height": calculate(width, 350, 1000, 20, 40) + "px",
                    "padding": "0",
                })
            }

        }
    })

})(zeQuery);

/* show last frame before next video plugin */

(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype, {
        buildsmoothvideochange: function (player, controls, layers, media) {

            function isAudio(){
                var current_url;
                if(typeof $(media).data(player.options.dataCollector) == 'undefined'){
                    current_url = media.src;
                }else{
                    current_url = $(media).data(player.options.dataCollector);
                }
    
                var currentData = player.options.skinObject.sendDataCollector(current_url || 0);
                var currentItem = currentData.item;
                

                if(currentItem && currentItem.content_type && currentItem.content_type.indexOf('audio') > -1){
                   return true;
                }else {
                    return false;
                }
            }

            media.addEventListener('onclickevent', function(e) {
                    var smoothPoster = layers.find('.mejs-smoothvideochange');
                    if(smoothPoster.length){
                        return;
                    }
                    if(smoothPoster){
                      smoothPoster.remove();
                    }

                    if(isAudio() ) {
                        return;
                    }
                    var img = capture(media);
                    var layer = $("<div>").addClass("mejs-layer mejs-smoothvideochange");
                    layer.append(img);
                    layers.append(layer);

            },true);

            media.addEventListener('timeupdate', function(e) {
                var ct = ~~media.currentTime;
                var duration = parseInt(e.target.duration);
                if(ct >= duration && layers.find('.mejs-smoothvideochange').length == 0 ){
                    var smoothPoster = layers.find('.mejs-smoothvideochange');
                    if(smoothPoster){
                      smoothPoster.remove();
                    }
                    
                    if(isAudio() ) {
                        return;
                    }
                    var img = capture(media);
                    var layer = $("<div>").addClass("mejs-layer mejs-smoothvideochange");
                    layer.append(img);
                    layers.append(layer);                
                    
                };
            }, true);

            media.addEventListener('playing', function(e) {
               var smoothPoster = layers.find('.mejs-smoothvideochange');
               if(smoothPoster){
                   smoothPoster.fadeOut(0,function(){
                       zeQuery(this).remove();
                   });
               }
            }, true);


            function capture(video) {
                var canvas = document.createElement('canvas');
                //var video = document.getElementById('video');
                canvas.width = video.videoWidth; 
                canvas.height = video.videoHeight;
                canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);  
                var imgURl = canvas.toDataURL();
                var img = new Image();
                img.src = imgURl;
                return img;
            }
           
        },
        buildaudio_jump: function (player, controls, layers, media) {


            $('<div class="mejs-button audio-jump mejs-jump-back">' +
            '<button type="button" aria-controls="mep_0" title="-10 sec"></button>'+
            '</div>'+
            '<div class=" audio-jump mejs-button mejs-jump-forward " >' +
            '<button type="button" aria-controls="mejs-button mep_0" title="+10 sec"></button>'+
                '</div>')
            .appendTo(controls);


            $(".mejs-jump-forward").on('click', function() {
                media.currentTime = media.currentTime+10;
            })
            $(".mejs-jump-back").on('click', function() {
                media.currentTime = media.currentTime-10;
            })



        },
        buildcp_media_helper: function (player, controls, layers, media) {
            //for native full screen player  fix ios 13 and higher
            if((navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)){
                zeQuery('body').addClass('cp-ipad13fix');
            }
    
        },
    })


})(zeQuery);



/* show last frame before next video plugin */

(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype, {
        buildvideodecrypt: function (player, controls, layers, media) {
            function fProcess(payload,context) {
                var key = getParamFromUrl('key', '?'+inBetween(context.url, '?',''));
                if(!key){
                    return payload;
                }

                var newdata = new Uint8Array(payload);
                var keys = new Uint8Array(_base64ToArrayBuffer(key));
                for(var i = 0,j=0; i < newdata.length; i++,j++){
                    if(j >= keys.length){
                        j = 0;
                    }
                    newdata[i] = newdata[i] ^ keys[j];
                }
                function _base64ToArrayBuffer(base64) {
                    var binary_string = window.atob(base64);
                    var len = binary_string.length;
                    var bytes = new Uint8Array(len);
                    for (var i = 0; i < len; i++) {
                        bytes[i] = binary_string.charCodeAt(i);
                    }
                    return bytes.buffer;
                }
                return newdata.buffer;
            }
            function pProcess(payload,context) {
                if(payload.indexOf('.key') > -1){
                    var url = new URL(context.url);
                    var urlParams = new URLSearchParams(url.search);
                    var myParam = urlParams.get('token');

                    payload = payload.replace('key','key?token=' +myParam)
                  }

                return payload;

            }
            try{
                "use strict";

                function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
                
                function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
                
                var fLoader = /*#__PURE__*/function (_Hls$DefaultConfig$lo) {
                  _inheritsLoose(fLoader, _Hls$DefaultConfig$lo);
                
                  function fLoader(config) {
                    var _this;
                
                    _this = _Hls$DefaultConfig$lo.call(this, config) || this;
                
                    var load = _this.load.bind(_assertThisInitialized(_this));
                
                    _this.load = function (context, config, callbacks) {
                      if (context.responseType == "arraybuffer") {
                        var onSuccess = callbacks.onSuccess;
                
                        callbacks.onSuccess = function (response, stats, context) {
                          response.data = fProcess(response.data, context);
                          onSuccess(response, stats, context);
                        };
                      }
                
                      load(context, config, callbacks);
                    };
                
                    return _this;
                  }
                
                  return fLoader;
                }(Hls.DefaultConfig.loader);
                
                var pLoader = /*#__PURE__*/function (_Hls$DefaultConfig$lo) {
                    _inheritsLoose(pLoader, _Hls$DefaultConfig$lo);
                  
                    function pLoader(config) {
                      var _this;
                  
                      _this = _Hls$DefaultConfig$lo.call(this, config) || this;
                  
                      var load = _this.load.bind(_assertThisInitialized(_this));
                  
                      _this.load = function (context, config, callbacks) {
                        if (context.type == "manifest" || context.type == "level" ) {
                          var onSuccess = callbacks.onSuccess;
                  
                          callbacks.onSuccess = function (response, stats, context) {
  
                            response.data = pProcess(response.data, context);
                            onSuccess(response, stats, context);
                          };
                        }
                  
                        load(context, config, callbacks);
                      };
                  
                      return _this;
                    }
                  
                    return pLoader;
                  }(Hls.DefaultConfig.loader);                
                   player.options.skinObject.pLoader = pLoader;
                 player.options.skinObject.fLoader = fLoader;
            }catch(ex){
                console.log(ex)
            } 


            function inBetween (str, start, end){
                var i = 0;
                if (start != null && start != "")
                {
                    i = str.indexOf(start);
                    if (i == -1)
                        return "";
                }
                else
                    start = "";

                var x = str.indexOf(end, i + start.length);
                if (x == -1 || end == null || end == "")
                    return str.substr(i + start.length);

                return str.substr(i + start.length, x - i - start.length);
            }

            function getParamFromUrl(parameterName,url){			
                var result = null,
                tmp = [],
                items;
                if(typeof url !='undefined'){
                    items  = url.substr(1).split("&")
                }else{
                    items = location.search.substr(1).split("&");
                }			
                for (var index = 0; index < items.length; index++) {
                    tmp = items[index].split("=");
                    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
                }
                return result;
                
            }
            
           
        }
    })


})(zeQuery);

(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype, {
        buildmobilevideocontrols: function (player, controls, layers, media) {

            isMobile = {
                Android: function () {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function () {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function () {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i) || ((/iPad|iPhone|iPod/.test(navigator.platform) ||
                        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
                        !window.MSStream);
                },
                Opera: function () {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
                },
                any: function () {
                    return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
                }
            }; 
            if(isMobile.any()) {
                media.activeMobileControl = true;

                $('.mediaElementVideoContainer').addClass('mobile');
                $( '<div  class="mejs-overlay mejs-layer mejs-video-jump cp-hide">\
                    <div class="mejs-video-jump-left">\
                    <button type="button"  ></button>\
                    </div>\
                    <div class="mejs-button mejs-pause-button mejs-pause">\
                        <button type="button"  title="PAUSE" ></button>\
                    </div>\
                    <div class="mejs-video-jump-right">\
                    <button type="button"  ></button>\
                    </div>\
                    </div>')
                    .appendTo(layers);
                $( '<div  class="mejs-overlay mejs-layer mejs-jump-icons cp-hide">\
                    <div class="mejs-jump-icon-left "><div class="mejs-time cp-hide"></div></div>\
                    <div class="mejs-jump-icon-right"><div class="mejs-time cp-hide"></div></div>\
                    </div>')
                    .appendTo(layers);

                    var rightJump = 0;
                    var leftJump = 0;
                    var leftJumpTimer
                    $('.mejs-jump-icon-right',player.container).on('touchend',function(e) {
                        $('.mejs-jump-icon-left').find('.mejs-time').addClass('cp-hide');
                        media.currentTime = media.currentTime + 10;
                        $(this).find('.mejs-time ').removeClass('cp-hide');
                        var self = this;
                        clearTimeout(leftJumpTimer);
                        leftJumpTimer = setTimeout(function(){
                            $(self).find('.mejs-time ').addClass('cp-hide');
                            $(controls).removeClass('cp-hide-force');
                            player.jumping = false;
                            leftJump = 0;
                            rightJump = 0;
                            
                            $('.mejs-jump-icons').addClass('cp-hide');
                        },500)
                    });

                    $('.mejs-jump-icon-left',player.container).on('touchend',function(e) {
                        media.currentTime = media.currentTime - 10;
                        $('.mejs-jump-icon-right').find('.mejs-time').addClass('cp-hide');
                        $(this).find('.mejs-time ').removeClass('cp-hide');
                        var self = this;
                        clearTimeout(leftJumpTimer);
                        leftJumpTimer = setTimeout(function(){
                            $(controls).removeClass('cp-hide-force');
                            $(self).find('.mejs-time').addClass('cp-hide');
                            player.jumping = false;
                            leftJump = 0;
                            rightJump = 0;
                            
                            $('.mejs-jump-icons').addClass('cp-hide');
                        },500)
                    });
                    $(media).on('touchend',function(e) {
                        var pageX = e.pageX || e.originalEvent.pageX || e.originalEvent.changedTouches[0].pageX;
                        $('.mediaElementVideoContainer').addClass('hideControls');

                        if(e.target.clientWidth/2 < pageX ) {
                            rightJump++;
                        }else {
                            leftJump++;
                        }
                        if(rightJump > 1 ) {
                            $(".mejs-captions-position", player.container).addClass("movetobottom");
                            $('.mejs-video-jump').addClass('cp-hide');
                            $('.mejs-jump-icon-right .mejs-time ').removeClass('cp-hide');
                            $('.mejs-jump-icons').removeClass('cp-hide');
                            if(!$(player.container).parent().hasClass('isAudio')  ){
                                $(controls).addClass("fadeafterseconds")
                                .addClass('removeCotrols');
                            }
                            $(controls).addClass('cp-hide-force');
                            player.jumping = true;
                            media.currentTime = media.currentTime + 10*(rightJump-1);

                        }
                        if(leftJump > 1){
                        $(".mejs-captions-position", player.container).addClass("movetobottom");
                            $('.mejs-jump-icon-left .mejs-time ').removeClass('cp-hide');
                            $('.mejs-video-jump').addClass('cp-hide');
                            if(!$(player.container).parent().hasClass('isAudio') ){
                                $(controls).addClass("fadeafterseconds")
                                .addClass('removeCotrols');
                            }
                            $('.mejs-jump-icons').removeClass('cp-hide');

                            $(controls).addClass('cp-hide-force');
                            player.jumping = true;
                            media.currentTime = media.currentTime - 10 * (leftJump-1);
                        }
                        clearTimeout(leftJumpTimer);
                        leftJumpTimer = setTimeout(function() {
                            $('.mejs-jump-icon-right .mejs-time ').addClass('cp-hide');
                            $('.mejs-jump-icon-left .mejs-time ').addClass('cp-hide');
                            isJumping = false;
                            // $('.mediaElementVideoContainer').removeClass('hideControls');
                            $(controls).removeClass('cp-hide-force');
                            player.jumping = false;
                            leftJump = 0;
                            rightJump = 0;
                            
                            $('.mejs-jump-icons').addClass('cp-hide');
                        },500)
                    })

                $(".mejs-video-jump-right button",player.container).on('touchend', function(e) {
                    e.preventDefault();
                    media.currentTime = media.currentTime+10;
                })
                $(".mejs-video-jump-left button",player.container).on('touchend', function(e) {
                    e.preventDefault();
                    media.currentTime = media.currentTime - 10 ;
                })
                $('.mejs-video-jump .mejs-pause-button',player.container).on('touchend', function(e){
                    clearTimeout(timeout);
                    var timeout = setTimeout(function() {
                    
                        if(!player.jumping){
                            media.pause();
                        }
                    },200);
                })



                media.addEventListener('play', function (e) {
                    if(!$(player.controls).hasClass('removeCotrols') && !$(player.controls).hasClass('fadeafterseconds') ){
                        $(layers[0]).find('.mejs-video-jump').removeClass('cp-hide');
                    }else {
                        $(layers[0]).find('.mejs-video-jump').addClass('cp-hide');
                    }
                })
                media.addEventListener('pause', function (e) {
                    $(layers[0]).find('.mejs-video-jump').addClass('cp-hide');
                })
                player.container.on('fadeafterseconds',function(){
                    if(player.jumping){
                        return
                    }
                    $(layers[0]).find('.mejs-video-jump').addClass('cp-hide');
                });

                $(window).on('touchend', function(e) {
                    if($(player.container).find(e.target).length == 0) {
                        if(!$(player.container).parent().hasClass('isAudio')  ){
                            $(controls).addClass("fadeafterseconds")
                            .addClass('removeCotrols');
                            $('.mejs-video-jump').addClass('cp-hide');
                            $(".mejs-captions-position", player.container).addClass("movetobottom");
                        }
                    }
                })

                
            }else {
                media.activeMobileControl = false;
            }
        }
    })

})(zeQuery);

(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype,{
        buildtrackshelper: function (player,controls,layers,media) {

            isMobile = {
                Android: function () {
                    return navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function () {
                    return navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function () {
                    return navigator.userAgent.match(/iPhone|iPad|iPod/i) || ((/iPad|iPhone|iPod/.test(navigator.platform) ||
                        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
                        !window.MSStream);
                },
                Opera: function () {
                    return navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function () {
                    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
                },
                any: function () {
                    return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
                }
            };
            
            if (is_safari() || (isMobile.any() && (player.options.iPadUseNativeControls || player.options.iPhoneUseNativeControls || player.options.AndroidUseNativeControls))) {
                for (i = 0; i < player.tracks.length; i++) {
                    var src = player.tracks[i]['data-src']
                    if(src){
                        player.tracks[i].src = src;
                        zeQuery(player.container.find('track[data-src="'+src+'"]')).attr('src',src);
                    }                    
                }
            }

            function is_safari() {
                var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                    navigator.userAgent &&
                    navigator.userAgent.indexOf('CriOS') == -1 &&
                    navigator.userAgent.indexOf('FxiOS') == -1;
                return isSafari;
            }

        }
    })
})(zeQuery);


(function ($) {

    $.extend(CincopaMediaElementPlayer.prototype, {
        buildeventscontrol: function (player, controls, layers, media) {
            media.addEventListener('ended', function (e) {
                var current_url;
                if (typeof $(media).data(player.options.dataCollector) == 'undefined') {
                    current_url = media.src;
                } else {
                    current_url = $(media).data(player.options.dataCollector);
                }

                var sendData = player.options.skinObject.sendDataCollector(current_url || 0);
                if (!player.options.skinObject.advertising) {
                    player.options.skinObject.go.onSkinEvent('video.ended', sendData);
                }
            }, false);

        }
    })

})(zeQuery);
/* exception2 //rtcdn.cincopa.com/fpskins/mediaelement/1/js/zequery-mediaelement-universal.js - err illegal character */
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/zequery.flexslider.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/zequery.flexslider.js"] = true;
(function(a){a.flexslider=function(d,k){var m=a(d);m.vars=a.extend({},a.flexslider.defaults,k);var j=m.vars.namespace,i=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,n=(("ontouchstart" in window)||i||window.DocumentTouch&&document instanceof DocumentTouch)&&m.vars.touch,e="click touchend MSPointerUp keyup",p="",q,o=m.vars.direction==="vertical",l=m.vars.reverse,c=(m.vars.itemWidth>0),f=m.vars.animation==="fade",b=m.vars.asNavFor!=="",h={},g=true;a.data(d,"flexslider",m);h={init:function(){m.animating=false;m.currentSlide=parseInt((m.vars.startAt?m.vars.startAt:0),10);if(isNaN(m.currentSlide)){m.currentSlide=0}m.animatingTo=m.currentSlide;m.atEnd=(m.currentSlide===0||m.currentSlide===m.last);m.containerSelector=m.vars.selector.substr(0,m.vars.selector.search(" "));m.slides=a(m.vars.selector,m);m.container=a(m.containerSelector,m);m.count=m.slides.length;m.syncExists=a(m.vars.sync).length>0;if(m.vars.animation==="slide"){m.vars.animation="swing"}m.prop=(o)?"top":"marginLeft";m.args={};m.manualPause=false;m.stopped=false;m.started=false;m.startTimeout=null;m.transitions=!m.vars.video&&!f&&m.vars.useCSS&&(function(){var s=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var r in t){if(s.style[t[r]]!==undefined){m.pfx=t[r].replace("Perspective","").toLowerCase();m.prop="-"+m.pfx+"-transform";return true}}return false}());m.ensureAnimationEnd="";if(m.vars.controlsContainer!==""){m.controlsContainer=a(m.vars.controlsContainer).length>0&&a(m.vars.controlsContainer)}if(m.vars.manualControls!==""){m.manualControls=a(m.vars.manualControls).length>0&&a(m.vars.manualControls)}if(m.vars.randomize){m.slides.sort(function(){return(Math.round(Math.random())-0.5)});m.container.empty().append(m.slides)}m.doMath();m.setup("init");if(m.vars.controlNav){h.controlNav.setup()}if(m.vars.directionNav){h.directionNav.setup()}if(m.vars.keyboard&&(a(m.containerSelector).length===1||m.vars.multipleKeyboard)){a(document).bind("keyup",function(r){var s=r.keyCode;if(!m.animating&&(s===39||s===37)){var t=(s===39)?m.getTarget("next"):(s===37)?m.getTarget("prev"):false;m.flexAnimate(t,m.vars.pauseOnAction)}})}if(m.vars.mousewheel){m.bind("mousewheel",function(u,r,s,t){u.preventDefault();var v=(r<0)?m.getTarget("next"):m.getTarget("prev");m.flexAnimate(v,m.vars.pauseOnAction)})}if(m.vars.pausePlay){h.pausePlay.setup()}if(m.vars.slideshow&&m.vars.pauseInvisible){h.pauseInvisible.init()}if(m.vars.slideshow){if(m.vars.pauseOnHover){m.hover(function(){if(!m.manualPlay&&!m.manualPause){m.pause()}},function(){if(!m.manualPause&&!m.manualPlay&&!m.stopped){m.play()}})}if(!m.vars.pauseInvisible||!h.pauseInvisible.isHidden()){(m.vars.initDelay>0)?m.startTimeout=setTimeout(m.play,m.vars.initDelay):m.play()}}if(b){h.asNav.setup()}if(n&&m.vars.touch){h.touch()}if(!f||(f&&m.vars.smoothHeight)){a(window).bind("resize orientationchange focus",h.resize)}m.find("img").attr("draggable","false");setTimeout(function(){m.vars.start(m)},200)},asNav:{setup:function(){m.asNav=true;m.animatingTo=Math.floor(m.currentSlide/m.move);m.currentItem=m.currentSlide;m.slides.removeClass(j+"active-slide").eq(m.currentItem).addClass(j+"active-slide");if(!i){m.slides.on(e,function(s){s.preventDefault();var r=a(this),u=r.index();var t=r.offset().left-a(m).scrollLeft();if(t<=0&&r.hasClass(j+"active-slide")){m.flexAnimate(m.getTarget("prev"),true)}else{if(!a(m.vars.asNavFor).data("flexslider").animating&&!r.hasClass(j+"active-slide")){m.direction=(m.currentItem<u)?"next":"prev";m.flexAnimate(u,m.vars.pauseOnAction,false,true,true)}}})}else{d._slider=m;m.slides.each(function(){var r=this;r._gesture=new MSGesture();r._gesture.target=r;r.addEventListener("MSPointerDown",function(s){s.preventDefault();if(s.currentTarget._gesture){s.currentTarget._gesture.addPointer(s.pointerId)}},false);r.addEventListener("MSGestureTap",function(t){t.preventDefault();var s=a(this),u=s.index();if(!a(m.vars.asNavFor).data("flexslider").animating&&!s.hasClass("active")){m.direction=(m.currentItem<u)?"next":"prev";m.flexAnimate(u,m.vars.pauseOnAction,false,true,true)}})})}}},controlNav:{setup:function(){if(!m.manualControls){h.controlNav.setupPaging()}else{h.controlNav.setupManual()}},setupPaging:function(){var w=(m.vars.controlNav==="thumbnails")?"control-thumbs":"control-paging",u=1,t,v;m.controlNavScaffold=a('<ol class="'+j+"control-nav "+j+w+'"></ol>');if(m.pagingCount>1){for(var s=0;s<m.pagingCount;s++){v=m.slides.eq(s);t=(m.vars.controlNav==="thumbnails")?'<img src="'+v.attr("data-thumb")+'"/>':"<a>"+u+"</a>";if("thumbnails"===m.vars.controlNav&&true===m.vars.thumbCaptions){var r=v.attr("data-thumbcaption");if(""!=r&&undefined!=r){t+='<span class="'+j+'caption">'+r+"</span>"}}m.controlNavScaffold.append("<li>"+t+"</li>");u++}}(m.controlsContainer)?a(m.controlsContainer).append(m.controlNavScaffold):m.append(m.controlNavScaffold);h.controlNav.set();h.controlNav.active();m.controlNavScaffold.delegate("a, img",e,function(y){y.preventDefault();if(p===""||p===y.type){var x=a(this),z=m.controlNav.index(x);if(!x.hasClass(j+"active")){m.direction=(z>m.currentSlide)?"next":"prev";m.flexAnimate(z,m.vars.pauseOnAction)}}if(p===""){p=y.type}h.setToClearWatchedEvent()})},setupManual:function(){m.controlNav=m.manualControls;h.controlNav.active();m.controlNav.bind(e,function(s){s.preventDefault();if(p===""||p===s.type){var r=a(this),t=m.controlNav.index(r);if(!r.hasClass(j+"active")){(t>m.currentSlide)?m.direction="next":m.direction="prev";m.flexAnimate(t,m.vars.pauseOnAction)}}if(p===""){p=s.type}h.setToClearWatchedEvent()})},set:function(){var r=(m.vars.controlNav==="thumbnails")?"img":"a";m.controlNav=a("."+j+"control-nav li "+r,(m.controlsContainer)?m.controlsContainer:m)},active:function(){m.controlNav.removeClass(j+"active").eq(m.animatingTo).addClass(j+"active")},update:function(r,s){if(m.pagingCount>1&&r==="add"){m.controlNavScaffold.append(a("<li><a>"+m.count+"</a></li>"))}else{if(m.pagingCount===1){m.controlNavScaffold.find("li").remove()}else{m.controlNav.eq(s).closest("li").remove()}}h.controlNav.set();(m.pagingCount>1&&m.pagingCount!==m.controlNav.length)?m.update(s,r):h.controlNav.active()}},directionNav:{setup:function(){var r=a('<ul class="'+j+'direction-nav"><li><a class="'+j+'prev" href="#">'+m.vars.prevText+'</a></li><li><a class="'+j+'next" href="#">'+m.vars.nextText+"</a></li></ul>");if(m.controlsContainer){a(m.controlsContainer).append(r);m.directionNav=a("."+j+"direction-nav li a",m.controlsContainer)}else{m.append(r);m.directionNav=a("."+j+"direction-nav li a",m)}h.directionNav.update();m.directionNav.bind(e,function(s){s.preventDefault();var t;if(p===""||p===s.type){t=(a(this).hasClass(j+"next"))?m.getTarget("next"):m.getTarget("prev");m.flexAnimate(t,m.vars.pauseOnAction)}if(p===""){p=s.type}h.setToClearWatchedEvent()})},update:function(){var r=j+"disabled";if(m.pagingCount===1){m.directionNav.addClass(r).attr("tabindex","-1")}else{if(!m.vars.animationLoop){if(m.animatingTo===0){m.directionNav.removeClass(r).filter("."+j+"prev").addClass(r).attr("tabindex","-1")}else{if(m.animatingTo===m.last){m.directionNav.removeClass(r).filter("."+j+"next").addClass(r).attr("tabindex","-1")}else{m.directionNav.removeClass(r).removeAttr("tabindex")}}}else{m.directionNav.removeClass(r).removeAttr("tabindex")}}}},pausePlay:{setup:function(){var r=a('<div class="'+j+'pauseplay"><a></a></div>');if(m.controlsContainer){m.controlsContainer.append(r);m.pausePlay=a("."+j+"pauseplay a",m.controlsContainer)}else{m.append(r);m.pausePlay=a("."+j+"pauseplay a",m)}h.pausePlay.update((m.vars.slideshow)?j+"pause":j+"play");m.pausePlay.bind(e,function(s){s.preventDefault();if(p===""||p===s.type){if(a(this).hasClass(j+"pause")){m.manualPause=true;m.manualPlay=false;m.pause()}else{m.manualPause=false;m.manualPlay=true;m.play()}}if(p===""){p=s.type}h.setToClearWatchedEvent()})},update:function(r){(r==="play")?m.pausePlay.removeClass(j+"pause").addClass(j+"play").html(m.vars.playText):m.pausePlay.removeClass(j+"play").addClass(j+"pause").html(m.vars.pauseText)}},touch:function(){var F,G,w,s,t,E,D=false,u=0,v=0,r=0;if(!i){d.addEventListener("touchstart",C,false);function C(H){if(m.animating){H.preventDefault()}else{if((window.navigator.msPointerEnabled)||H.touches.length===1){m.pause();s=(o)?m.h:m.w;E=Number(new Date());u=H.touches[0].pageX;v=H.touches[0].pageY;w=(c&&l&&m.animatingTo===m.last)?0:(c&&l)?m.limit-(((m.itemW+m.vars.itemMargin)*m.move)*m.animatingTo):(c&&m.currentSlide===m.last)?m.limit:(c)?((m.itemW+m.vars.itemMargin)*m.move)*m.currentSlide:(l)?(m.last-m.currentSlide+m.cloneOffset)*s:(m.currentSlide+m.cloneOffset)*s;F=(o)?v:u;G=(o)?u:v;d.addEventListener("touchmove",B,false);d.addEventListener("touchend",A,false)}}}function B(H){u=H.touches[0].pageX;v=H.touches[0].pageY;t=(o)?F-v:F-u;D=(o)?(Math.abs(t)<Math.abs(u-G)):(Math.abs(t)<Math.abs(v-G));var I=500;if(!D||Number(new Date())-E>I){H.preventDefault();if(!f&&m.transitions){if(!m.vars.animationLoop){t=t/((m.currentSlide===0&&t<0||m.currentSlide===m.last&&t>0)?(Math.abs(t)/s+2):1)}m.setProps(w+t,"setTouch")}}}function A(H){d.removeEventListener("touchmove",B,false);if(m.animatingTo===m.currentSlide&&!D&&!(t===null)){var J=(l)?-t:t,I=(J>0)?m.getTarget("next"):m.getTarget("prev");if(m.canAdvance(I)&&(Number(new Date())-E<550&&Math.abs(J)>50||Math.abs(J)>s/2)){m.flexAnimate(I,m.vars.pauseOnAction)}else{if(!f){m.flexAnimate(m.currentSlide,m.vars.pauseOnAction,true)}}}d.removeEventListener("touchend",A,false);F=null;G=null;t=null;w=null}}else{d.style.msTouchAction="none";d._gesture=new MSGesture();d._gesture.target=d;d.addEventListener("MSPointerDown",z,false);d._slider=m;d.addEventListener("MSGestureChange",x,false);d.addEventListener("MSGestureEnd",y,false);function z(H){H.stopPropagation();if(m.animating){H.preventDefault()}else{m.pause();d._gesture.addPointer(H.pointerId);r=0;s=(o)?m.h:m.w;E=Number(new Date());w=(c&&l&&m.animatingTo===m.last)?0:(c&&l)?m.limit-(((m.itemW+m.vars.itemMargin)*m.move)*m.animatingTo):(c&&m.currentSlide===m.last)?m.limit:(c)?((m.itemW+m.vars.itemMargin)*m.move)*m.currentSlide:(l)?(m.last-m.currentSlide+m.cloneOffset)*s:(m.currentSlide+m.cloneOffset)*s}}function x(H){H.stopPropagation();var I=H.target._slider;if(!I){return}var J=-H.translationX,K=-H.translationY;r=r+((o)?K:J);t=r;D=(o)?(Math.abs(r)<Math.abs(-J)):(Math.abs(r)<Math.abs(-K));if(H.detail===H.MSGESTURE_FLAG_INERTIA){setImmediate(function(){d._gesture.stop()});return}if(!D||Number(new Date())-E>500){H.preventDefault();if(!f&&I.transitions){if(!I.vars.animationLoop){t=r/((I.currentSlide===0&&r<0||I.currentSlide===I.last&&r>0)?(Math.abs(r)/s+2):1)}I.setProps(w+t,"setTouch")}}}function y(H){H.stopPropagation();var I=H.target._slider;if(!I){return}if(I.animatingTo===I.currentSlide&&!D&&!(t===null)){var K=(l)?-t:t,J=(K>0)?I.getTarget("next"):I.getTarget("prev");if(I.canAdvance(J)&&(Number(new Date())-E<550&&Math.abs(K)>50||Math.abs(K)>s/2)){I.flexAnimate(J,I.vars.pauseOnAction)}else{if(!f){I.flexAnimate(I.currentSlide,I.vars.pauseOnAction,true)}}}F=null;G=null;t=null;w=null;r=0}}},resize:function(){if(!m.animating&&m.is(":visible")){if(!c){m.doMath()}if(f){h.smoothHeight()}else{if(c){m.slides.width(m.computedW);m.update(m.pagingCount);m.setProps()}else{if(o){m.viewport.height(m.h);m.setProps(m.h,"setTotal")}else{if(m.vars.smoothHeight){h.smoothHeight()}m.newSlides.width(m.computedW);m.setProps(m.computedW,"setTotal")}}}}},smoothHeight:function(s){if(!o||f){var r=(f)?m:m.viewport;(s)?r.animate({height:m.slides.eq(m.animatingTo).height()},s):r.height(m.slides.eq(m.animatingTo).height())}},sync:function(s){var r=a(m.vars.sync).data("flexslider"),t=m.animatingTo;switch(s){case"animate":r.flexAnimate(t,m.vars.pauseOnAction,false,true);break;case"play":if(!r.playing&&!r.asNav){r.play()}break;case"pause":r.pause();break}},uniqueID:function(r){r.filter("[id]").add(r.find("[id]")).each(function(){var s=a(this);s.attr("id",s.attr("id")+"_clone")});return r},pauseInvisible:{visProp:null,init:function(){var t=["webkit","moz","ms","o"];if("hidden" in document){return"hidden"}for(var s=0;s<t.length;s++){if((t[s]+"Hidden") in document){h.pauseInvisible.visProp=t[s]+"Hidden"}}if(h.pauseInvisible.visProp){var r=h.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(r,function(){if(h.pauseInvisible.isHidden()){if(m.startTimeout){clearTimeout(m.startTimeout)}else{m.pause()}}else{if(m.started){m.play()}else{(m.vars.initDelay>0)?setTimeout(m.play,m.vars.initDelay):m.play()}}})}},isHidden:function(){return document[h.pauseInvisible.visProp]||false}},setToClearWatchedEvent:function(){clearTimeout(q);q=setTimeout(function(){p=""},3000)}};m.flexAnimate=function(z,x,w,A,t){if(!m.vars.animationLoop&&z!==m.currentSlide){m.direction=(z>m.currentSlide)?"next":"prev"}if(b&&m.pagingCount===1){m.direction=(m.currentItem<z)?"next":"prev"}if(!m.animating&&(m.canAdvance(z,t)||w)&&m.is(":visible")){if(b&&A){var v=a(m.vars.asNavFor).data("flexslider");m.atEnd=z===0||z===m.count-1;v.flexAnimate(z,true,false,true,t);m.direction=(m.currentItem<z)?"next":"prev";v.direction=m.direction;if(Math.ceil((z+1)/m.visible)-1!==m.currentSlide&&z!==0){m.currentItem=z;m.slides.removeClass(j+"active-slide").eq(z).addClass(j+"active-slide");z=Math.floor(z/m.visible)}else{m.currentItem=z;m.slides.removeClass(j+"active-slide").eq(z).addClass(j+"active-slide");return false}}m.animating=true;m.animatingTo=z;if(x){m.pause()}m.vars.before(m);if(m.syncExists&&!t){h.sync("animate")}if(m.vars.controlNav){h.controlNav.active()}if(!c){m.slides.removeClass(j+"active-slide").eq(z).addClass(j+"active-slide")}m.atEnd=z===0||z===m.last;if(m.vars.directionNav){h.directionNav.update()}if(z===m.last){m.vars.end(m);if(!m.vars.animationLoop){m.pause()}}if(!f){var s=(o)?m.slides.filter(":first").height():m.computedW,u,y,r;if(c){u=m.vars.itemMargin;r=((m.itemW+u)*m.move)*m.animatingTo;y=(r>m.limit&&m.visible!==1)?m.limit:r}else{if(m.currentSlide===0&&z===m.count-1&&m.vars.animationLoop&&m.direction!=="next"){y=(l)?(m.count+m.cloneOffset)*s:0}else{if(m.currentSlide===m.last&&z===0&&m.vars.animationLoop&&m.direction!=="prev"){y=(l)?0:(m.count+1)*s}else{y=(l)?((m.count-1)-z+m.cloneOffset)*s:(z+m.cloneOffset)*s}}}m.setProps(y,"",m.vars.animationSpeed);if(m.transitions){if(!m.vars.animationLoop||!m.atEnd){m.animating=false;m.currentSlide=m.animatingTo}m.container.unbind("webkitTransitionEnd transitionend");m.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(m.ensureAnimationEnd);m.wrapup(s)});clearTimeout(m.ensureAnimationEnd);m.ensureAnimationEnd=setTimeout(function(){m.wrapup(s)},m.vars.animationSpeed+100)}else{m.container.animate(m.args,m.vars.animationSpeed,m.vars.easing,function(){m.wrapup(s)})}}else{if(!n){m.slides.eq(m.currentSlide).css({zIndex:1}).animate({opacity:0},m.vars.animationSpeed,m.vars.easing);m.slides.eq(z).css({zIndex:2}).animate({opacity:1},m.vars.animationSpeed,m.vars.easing,m.wrapup)}else{m.slides.eq(m.currentSlide).css({opacity:0,zIndex:1});m.slides.eq(z).css({opacity:1,zIndex:2});m.wrapup(s)}}if(m.vars.smoothHeight){h.smoothHeight(m.vars.animationSpeed)}}};m.wrapup=function(r){if(!f&&!c){if(m.currentSlide===0&&m.animatingTo===m.last&&m.vars.animationLoop){m.setProps(r,"jumpEnd")}else{if(m.currentSlide===m.last&&m.animatingTo===0&&m.vars.animationLoop){m.setProps(r,"jumpStart")}}}m.animating=false;m.currentSlide=m.animatingTo;m.vars.after(m)};m.animateSlides=function(){if(!m.animating&&g){m.flexAnimate(m.getTarget("next"))}};m.pause=function(){clearInterval(m.animatedSlides);m.animatedSlides=null;m.playing=false;if(m.vars.pausePlay){h.pausePlay.update("play")}if(m.syncExists){h.sync("pause")}};m.play=function(){if(m.playing){clearInterval(m.animatedSlides)}m.animatedSlides=m.animatedSlides||setInterval(m.animateSlides,m.vars.slideshowSpeed);m.started=m.playing=true;if(m.vars.pausePlay){h.pausePlay.update("pause")}if(m.syncExists){h.sync("play")}};m.stop=function(){m.pause();m.stopped=true};m.canAdvance=function(t,r){var s=(b)?m.pagingCount-1:m.last;return(r)?true:(b&&m.currentItem===m.count-1&&t===0&&m.direction==="prev")?true:(b&&m.currentItem===0&&t===m.pagingCount-1&&m.direction!=="next")?false:(t===m.currentSlide&&!b)?false:(m.vars.animationLoop)?true:(m.atEnd&&m.currentSlide===0&&t===s&&m.direction!=="next")?false:(m.atEnd&&m.currentSlide===s&&t===0&&m.direction==="next")?false:true};m.getTarget=function(r){m.direction=r;if(r==="next"){return(m.currentSlide===m.last)?0:m.currentSlide+1}else{return(m.currentSlide===0)?m.last:m.currentSlide-1}};m.setProps=function(s,t,r){var u=(function(){var w=(s)?s:((m.itemW+m.vars.itemMargin)*m.move)*m.animatingTo,v=(function(){if(c){return(t==="setTouch")?s:(l&&m.animatingTo===m.last)?0:(l)?m.limit-(((m.itemW+m.vars.itemMargin)*m.move)*m.animatingTo):(m.animatingTo===m.last)?m.limit:w}else{switch(t){case"setTotal":return(l)?((m.count-1)-m.currentSlide+m.cloneOffset)*s:(m.currentSlide+m.cloneOffset)*s;case"setTouch":return(l)?s:s;case"jumpEnd":return(l)?s:m.count*s;case"jumpStart":return(l)?m.count*s:s;default:return s}}}());return(v*-1)+"px"}());if(m.transitions){u=(o)?"translate3d(0,"+u+",0)":"translate3d("+u+",0,0)";r=(r!==undefined)?(r/1000)+"s":"0s";m.container.css("-"+m.pfx+"-transition-duration",r);m.container.css("transition-duration",r)}m.args[m.prop]=u;if(m.transitions||r===undefined){m.container.css(m.args)}m.container.css("transform",u)};m.setup=function(t){if(!f){var s,r;if(t==="init"){m.viewport=a('<div class="'+j+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(m).append(m.container);m.cloneCount=0;m.cloneOffset=0;if(l){r=a.makeArray(m.slides).reverse();m.slides=a(r);m.container.empty().append(m.slides)}}if(m.vars.animationLoop&&!c){m.cloneCount=2;m.cloneOffset=1;if(t!=="init"){m.container.find(".clone").remove()}m.container.append(h.uniqueID(m.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(h.uniqueID(m.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))}m.newSlides=a(m.vars.selector,m);s=(l)?m.count-1-m.currentSlide+m.cloneOffset:m.currentSlide+m.cloneOffset;if(o&&!c){m.container.height((m.count+m.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){m.newSlides.css({display:"block"});m.doMath();m.viewport.height(m.h);m.setProps(s*m.h,"init")},(t==="init")?100:0)}else{m.container.width((m.count+m.cloneCount)*200+"%");m.setProps(s*m.computedW,"init");setTimeout(function(){m.doMath();m.newSlides.css({width:m.computedW,"float":"left",display:"block"});if(m.vars.smoothHeight){h.smoothHeight()}},(t==="init")?100:0)}}else{m.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});if(t==="init"){if(!n){if(m.vars.fadeFirstSlide==false){m.slides.css({opacity:0,display:"block",zIndex:1}).eq(m.currentSlide).css({zIndex:2}).css({opacity:1})}else{m.slides.css({opacity:0,display:"block",zIndex:1}).eq(m.currentSlide).css({zIndex:2}).animate({opacity:1},m.vars.animationSpeed,m.vars.easing)}}else{m.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+m.vars.animationSpeed/1000+"s ease",zIndex:1}).eq(m.currentSlide).css({opacity:1,zIndex:2})}}if(m.vars.smoothHeight){h.smoothHeight()}}if(!c){m.slides.removeClass(j+"active-slide").eq(m.currentSlide).addClass(j+"active-slide")}m.vars.init(m)};m.doMath=function(){var t=m.slides.first(),u=m.vars.itemMargin,s=m.vars.minItems,r=m.vars.maxItems;m.w=(m.viewport===undefined)?m.width():m.viewport.width();m.h=t.height();m.boxPadding=t.outerWidth()-t.width();if(c){m.itemT=m.vars.itemWidth+u;m.minW=(s)?s*m.itemT:m.w;m.maxW=(r)?(r*m.itemT)-u:m.w;m.itemW=(m.minW>m.w)?(m.w-(u*(s-1)))/s:(m.maxW<m.w)?(m.w-(u*(r-1)))/r:(m.vars.itemWidth>m.w)?m.w:m.vars.itemWidth;m.visible=Math.floor(m.w/(m.itemW));m.move=(m.vars.move>0&&m.vars.move<m.visible)?m.vars.move:m.visible;m.pagingCount=Math.ceil(((m.count-m.visible)/m.move)+1);m.last=m.pagingCount-1;m.limit=(m.pagingCount===1)?0:(m.vars.itemWidth>m.w)?(m.itemW*(m.count-1))+(u*(m.count-1)):((m.itemW+u)*m.count)-m.w-u}else{m.itemW=m.w;m.pagingCount=m.count;m.last=m.count-1}m.computedW=m.itemW-m.boxPadding};m.update=function(s,r){m.doMath();if(!c){if(s<m.currentSlide){m.currentSlide+=1}else{if(s<=m.currentSlide&&s!==0){m.currentSlide-=1}}m.animatingTo=m.currentSlide}if(m.vars.controlNav&&!m.manualControls){if((r==="add"&&!c)||m.pagingCount>m.controlNav.length){h.controlNav.update("add")}else{if((r==="remove"&&!c)||m.pagingCount<m.controlNav.length){if(c&&m.currentSlide>m.last){m.currentSlide-=1;m.animatingTo-=1}h.controlNav.update("remove",m.last)}}}if(m.vars.directionNav){h.directionNav.update()}};m.addSlide=function(s,t){var r=a(s);m.count+=1;m.last=m.count-1;if(o&&l){(t!==undefined)?m.slides.eq(m.count-t).after(r):m.container.prepend(r)}else{(t!==undefined)?m.slides.eq(t).before(r):m.container.append(r)}m.update(t,"add");m.slides=a(m.vars.selector+":not(.clone)",m);m.setup();m.vars.added(m)};m.removeSlide=function(r){var s=(isNaN(r))?m.slides.index(a(r)):r;m.count-=1;m.last=m.count-1;if(isNaN(r)){a(r,m.slides).remove()}else{(o&&l)?m.slides.eq(m.last).remove():m.slides.eq(r).remove()}m.doMath();m.update(s,"remove");m.slides=a(m.vars.selector+":not(.clone)",m);m.setup();m.vars.removed(m)};h.init()};a(window).blur(function(b){focused=false}).focus(function(b){focused=true});a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,fadeFirstSlide:true,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};a.fn.flexslider=function(c){if(c===undefined){c={}}if(typeof c==="object"){return this.each(function(){var e=a(this),f=(c.selector)?c.selector:".slides > li",d=e.find(f);if((d.length===1&&c.allowOneSlide===true)||d.length===0){d.fadeIn(400);if(c.start){c.start(e)}}else{if(e.data("flexslider")===undefined){new a.flexslider(this,c)}}})}else{var b=a(this).data("flexslider");switch(c){case"play":b.play();break;case"pause":b.pause();break;case"stop":b.stop();break;case"next":b.flexAnimate(b.getTarget("next"),true);break;case"prev":case"previous":b.flexAnimate(b.getTarget("prev"),true);break;default:if(typeof c==="number"){b.flexAnimate(c,true)}}}}})(zeQuery);
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/nativeLanguages.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/nativeLanguages.js"] = true;
var _zeNativeLanguagesArray=[{code:"ab",name:"Abkhaz",nativeName:"\u0430\u04A7\u0441\u0443\u0430"},{code:"aa",name:"Afar",nativeName:"Afaraf"},{code:"af",name:"Afrikaans",nativeName:"Afrikaans"},{code:"ak",name:"Akan",nativeName:"Akan"},{code:"sq",name:"Albanian",nativeName:"Shqip"},{code:"am",name:"Amharic",nativeName:"\u12A0\u121B\u122D\u129B"},{code:"ar",name:"Arabic",nativeName:"\u0627\u0644\u0639\u0631\u0628\u064A\u0629"},{code:"an",name:"Aragonese",nativeName:"Aragon\u00E9s"},{code:"hy",name:"Armenian",nativeName:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576"},{code:"as",name:"Assamese",nativeName:"\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE"},{code:"av",name:"Avaric",nativeName:"\u0430\u0432\u0430\u0440 \u043C\u0430\u0446\u04C0"},{code:"ae",name:"Avestan",nativeName:"avesta"},{code:"ay",name:"Aymara",nativeName:"aymar aru"},{code:"az",name:"Azerbaijani",nativeName:"az\u0259rbaycan dili"},{code:"bm",name:"Bambara",nativeName:"bamanankan"},{code:"ba",name:"Bashkir",nativeName:"\u0431\u0430\u0448\u04A1\u043E\u0440\u0442 \u0442\u0435\u043B\u0435"},{code:"eu",name:"Basque",nativeName:"euskara"},{code:"be",name:"Belarusian",nativeName:"\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F"},{code:"bn",name:"Bengali",nativeName:"\u09AC\u09BE\u0982\u09B2\u09BE"},{code:"bh",name:"Bihari",nativeName:"\u092D\u094B\u091C\u092A\u0941\u0930\u0940"},{code:"bi",name:"Bislama",nativeName:"Bislama"},{code:"bs",name:"Bosnian",nativeName:"bosanski jezik"},{code:"br",name:"Breton",nativeName:"brezhoneg"},{code:"bg",name:"Bulgarian",nativeName:"\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0435\u0437\u0438\u043A"},{code:"my",name:"Burmese",nativeName:"\u1017\u1019\u102C\u1005\u102C"},{code:"ca",name:"Catalan; Valencian",nativeName:"Catal\u00E0"},{code:"ch",name:"Chamorro",nativeName:"Chamoru"},{code:"ce",name:"Chechen",nativeName:"\u043D\u043E\u0445\u0447\u0438\u0439\u043D \u043C\u043E\u0442\u0442"},{code:"ny",name:"Chichewa; Chewa; Nyanja",nativeName:"chiChe\u0175a"},{code:"zh",name:"Chinese",nativeName:"\u4E2D\u6587 (Zh\u014Dngw\u00E9n)"},{code:"cv",name:"Chuvash",nativeName:"\u0447\u04D1\u0432\u0430\u0448 \u0447\u04D7\u043B\u0445\u0438"},{code:"kw",name:"Cornish",nativeName:"Kernewek"},{code:"co",name:"Corsican",nativeName:"corsu"},{code:"cr",name:"Cree",nativeName:"\u14C0\u1426\u1403\u152D\u140D\u140F\u1423"},{code:"hr",name:"Croatian",nativeName:"hrvatski"},{code:"cs",name:"Czech",nativeName:"\u010Desky"},{code:"da",name:"Danish",nativeName:"dansk"},{code:"dv",name:"Divehi; Dhivehi; Maldivian;",nativeName:"\u078B\u07A8\u0788\u07AC\u0780\u07A8"},{code:"nl",name:"Dutch",nativeName:"Nederlands"},{code:"en",name:"English",nativeName:"English"},{code:"eo",name:"Esperanto",nativeName:"Esperanto"},{code:"et",name:"Estonian",nativeName:"eesti"},{code:"ee",name:"Ewe",nativeName:"E\u028Begbe"},{code:"fo",name:"Faroese",nativeName:"f\u00F8royskt"},{code:"fj",name:"Fijian",nativeName:"vosa Vakaviti"},{code:"fi",name:"Finnish",nativeName:"suomi"},{code:"fr",name:"French",nativeName:"fran\u00E7ais"},{code:"ff",name:"Fula; Fulah; Pulaar; Pular",nativeName:"Fulfulde"},{code:"gl",name:"Galician",nativeName:"Galego"},{code:"ka",name:"Georgian",nativeName:"\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8"},{code:"de",name:"German",nativeName:"Deutsch"},{code:"el",name:"Greek, Modern",nativeName:"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC"},{code:"gn",name:"GuaranÃ­",nativeName:"Ava\u00F1e\u1EBD"},{code:"gu",name:"Gujarati",nativeName:"\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0"},{code:"ht",name:"Haitian",nativeName:"Krey\u00F2l ayisyen"},{code:"ha",name:"Hausa",nativeName:"Hausa, \u0647\u064E\u0648\u064F\u0633\u064E"},{code:"he",name:"Hebrew (modern)",nativeName:"\u05E2\u05D1\u05E8\u05D9\u05EA"},{code:"hz",name:"Herero",nativeName:"Otjiherero"},{code:"hi",name:"Hindi",nativeName:"\u0939\u093F\u0928\u094D\u0926\u0940, \u0939\u093F\u0902\u0926\u0940"},{code:"ho",name:"Hiri Motu",nativeName:"Hiri Motu"},{code:"hu",name:"Hungarian",nativeName:"Magyar"},{code:"ia",name:"Interlingua",nativeName:"Interlingua"},{code:"id",name:"Indonesian",nativeName:"Bahasa Indonesia"},{code:"ie",name:"Interlingue",nativeName:"Originally called Occidental; then Interlingue after WWII"},{code:"ga",name:"Irish",nativeName:"Gaeilge"},{code:"ig",name:"Igbo",nativeName:"As\u1EE5s\u1EE5 Igbo"},{code:"ik",name:"Inupiaq",nativeName:"I\u00F1upiaq"},{code:"io",name:"Ido",nativeName:"Ido"},{code:"is",name:"Icelandic",nativeName:"\u00CDslenska"},{code:"it",name:"Italian",nativeName:"Italiano"},{code:"iu",name:"Inuktitut",nativeName:"\u1403\u14C4\u1483\u144E\u1450\u1466"},{code:"ja",name:"Japanese",nativeName:"\u65E5\u672C\u8A9E (\u306B\u307B\u3093\u3054\uFF0F\u306B\u3063\u307D\u3093\u3054)"},{code:"jv",name:"Javanese",nativeName:"basa Jawa"},{code:"kl",name:"Kalaallisut, Greenlandic",nativeName:"kalaallisut"},{code:"kn",name:"Kannada",nativeName:"\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"},{code:"kr",name:"Kanuri",nativeName:"Kanuri"},{code:"ks",name:"Kashmiri",nativeName:"\u0915\u0936\u094D\u092E\u0940\u0930\u0940, \u0643\u0634\u0645\u064A\u0631\u064A\u200E"},{code:"kk",name:"Kazakh",nativeName:"\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456"},{code:"km",name:"Khmer",nativeName:"\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A"},{code:"ki",name:"Kikuyu, Gikuyu",nativeName:"G\u0129k\u0169y\u0169"},{code:"rw",name:"Kinyarwanda",nativeName:"Ikinyarwanda"},{code:"ky",name:"Kirghiz, Kyrgyz",nativeName:"\u043A\u044B\u0440\u0433\u044B\u0437 \u0442\u0438\u043B\u0438"},{code:"kv",name:"Komi",nativeName:"\u043A\u043E\u043C\u0438 \u043A\u044B\u0432"},{code:"kg",name:"Kongo",nativeName:"KiKongo"},{code:"ko",name:"Korean",nativeName:"\uD55C\uAD6D\uC5B4 (\u97D3\u570B\u8A9E), \uC870\uC120\uB9D0 (\u671D\u9BAE\u8A9E)"},{code:"ku",name:"Kurdish",nativeName:"Kurd\u00EE, \u0643\u0648\u0631\u062F\u06CC\u200E?"},{code:"kj",name:"Kwanyama, Kuanyama",nativeName:"Kuanyama"},{code:"la",name:"Latin",nativeName:"latine"},{code:"lb",name:"Luxembourgish, Letzeburgesch",nativeName:"L\u00EBtzebuergesch"},{code:"lg",name:"Luganda",nativeName:"Luganda"},{code:"li",name:"Limburgish, Limburgan, Limburger",nativeName:"Limburgs"},{code:"ln",name:"Lingala",nativeName:"Ling\u00E1la"},{code:"lo",name:"Lao",nativeName:"\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7"},{code:"lt",name:"Lithuanian",nativeName:'nativeName":"lietuvi\u0173 kalba'},{code:"lu",name:"Luba-Katanga",nativeName:""},{code:"lv",name:"Latvian",nativeName:"latvie\u0161u valoda"},{code:"gv",name:"Manx",nativeName:"Gaelg"},{code:"mk",name:"Macedonian",nativeName:"\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 \u0458\u0430\u0437\u0438\u043A"},{code:"mg",name:"Malagasy",nativeName:"Malagasy fiteny"},{code:"ms",name:"Malay",nativeName:"bahasa Melayu"},{code:"ml",name:"Malayalam",nativeName:"\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02"},{code:"mt",name:"Maltese",nativeName:"Malti"},{code:"mi",name:"Maori",nativeName:"te reo M\u0101ori"},{code:"mr",name:"Marathi (Mara?hi)",nativeName:"\u092E\u0930\u093E\u0920\u0940"},{code:"mh",name:"Marshallese",nativeName:"Kajin M\u0327aje\u013C"},{code:"mn",name:"Mongolian",nativeName:"\u043C\u043E\u043D\u0433\u043E\u043B"},{code:"na",name:"Nauru",nativeName:"Ekakair\u0169 Naoero"},{code:"nv",name:"Navajo, Navaho",nativeName:"Din\u00E9 bizaad"},{code:"nb",name:"Norwegian BokmÃ¥l",nativeName:"Norsk bokm\u00E5l"},{code:"nd",name:"North Ndebele",nativeName:"isiNdebele"},{code:"ne",name:"Nepali",nativeName:"\u0928\u0947\u092A\u093E\u0932\u0940"},{code:"ng",name:"Ndonga",nativeName:"Owambo"},{code:"nn",name:"Norwegian Nynorsk",nativeName:"Norsk nynorsk"},{code:"no",name:"Norwegian",nativeName:"Norsk"},{code:"ii",name:"Nuosu",nativeName:"\uA188\uA320\uA4BF Nuosuhxop"},{code:"nr",name:"South Ndebele",nativeName:"isiNdebele"},{code:"oc",name:"Occitan",nativeName:"Occitan"},{code:"oj",name:"Ojibwe, Ojibwa",nativeName:"\u140A\u14C2\u1511\u14C8\u142F\u14A7\u140E\u14D0"},{code:"cu",name:"Old Church Slavonic",nativeName:"\u0469\u0437\u044B\u043A\u044A \u0441\u043B\u043E\u0432\u0463\u043D\u044C\u0441\u043A\u044A"},{code:"om",name:"Oromo",nativeName:"Afaan Oromoo"},{code:"or",name:"Oriya",nativeName:"\u0B13\u0B21\u0B3C\u0B3F\u0B06"},{code:"os",name:"Ossetian, Ossetic",nativeName:"\u0438\u0440\u043E\u043D \u00E6\u0432\u0437\u0430\u0433"},{code:"pa",name:"Panjabi, Punjabi",nativeName:"\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40"},{code:"pi",name:"Pali",nativeName:"\u092A\u093E\u0934\u093F"},{code:"fa",name:"Persian",nativeName:"\u0641\u0627\u0631\u0633\u06CC"},{code:"pl",name:"Polish",nativeName:"polski"},{code:"ps",name:"Pashto, Pushto",nativeName:"\u067E\u069A\u062A\u0648"},{code:"pt",name:"Portuguese",nativeName:"Portugu\u00EAs"},{code:"qu",name:"Quechua",nativeName:"Runa Simi, Kichwa"},{code:"rm",name:"Romansh",nativeName:"rumantsch grischun"},{code:"rn",name:"Kirundi",nativeName:"kiRundi"},{code:"ro",name:"Romanian, Moldavian, Moldovan",nativeName:"rom\u00E2n\u0103"},{code:"ru",name:"Russian",nativeName:"\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A"},{code:"sa",name:"Sanskrit (Sa?sk?ta)",nativeName:"\u0938\u0902\u0938\u094D\u0915\u0943\u0924\u092E\u094D"},{code:"sc",name:"Sardinian",nativeName:"sardu"},{code:"sd",name:"Sindhi",nativeName:"\u0938\u093F\u0928\u094D\u0927\u0940"},{code:"se",name:"Northern Sami",nativeName:"Davvis\u00E1megiella"},{code:"sm",name:"Samoan",nativeName:"gagana faa Samoa"},{code:"sg",name:"Sango",nativeName:"y\u00E2ng\u00E2 t\u00EE s\u00E4ng\u00F6"},{code:"sr",name:"Serbian",nativeName:"\u0441\u0440\u043F\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A"},{code:"gd",name:"Scottish Gaelic; Gaelic",nativeName:"G\u00E0idhlig"},{code:"sn",name:"Shona",nativeName:"chiShona"},{code:"si",name:"Sinhala, Sinhalese",nativeName:"\u0DC3\u0DD2\u0D82\u0DC4\u0DBD"},{code:"sk",name:"Slovak",nativeName:"sloven\u010Dina"},{code:"sl",name:"Slovene",nativeName:"sloven\u0161\u010Dina"},{code:"so",name:"Somali",nativeName:"Soomaaliga"},{code:"st",name:"Southern Sotho",nativeName:"Sesotho"},{code:"es",name:"Spanish",nativeName:"espa\u00F1ol"},{code:"su",name:"Sundanese",nativeName:"Basa Sunda"},{code:"sw",name:"Swahili",nativeName:"Kiswahili"},{code:"ss",name:"Swati",nativeName:"SiSwati"},{code:"sv",name:"Swedish",nativeName:"svenska"},{code:"ta",name:"Tamil",nativeName:"\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD"},{code:"te",name:"Telugu",nativeName:"\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41"},{code:"tg",name:"Tajik",nativeName:"\u0442\u043E\u04B7\u0438\u043A\u04E3"},{code:"th",name:"Thai",nativeName:"\u0E44\u0E17\u0E22"},{code:"ti",name:"Tigrinya",nativeName:"\u1275\u130D\u122D\u129B"},{code:"bo",name:"Tibetan Standard, Tibetan, Central",nativeName:"\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42"},{code:"tk",name:"Turkmen",nativeName:"T\u00FCrkmen, \u0422\u04AF\u0440\u043A\u043C\u0435\u043D"},{code:"tl",name:"Tagalog",nativeName:"Wikang Tagalog, \u170F\u1712\u1703\u1705\u1714 \u1706\u1704\u170E\u1713\u1704\u1714"},{code:"tn",name:"Tswana",nativeName:"Setswana"},{code:"to",name:"Tonga (Tonga Islands)",nativeName:"faka Tonga"},{code:"tr",name:"Turkish",nativeName:"T\u00FCrk\u00E7e"},{code:"ts",name:"Tsonga",nativeName:"Xitsonga"},{code:"tt",name:"Tatar",nativeName:"\u0442\u0430\u0442\u0430\u0440\u0447\u0430"},{code:"tw",name:"Twi",nativeName:"Twi"},{code:"ty",name:"Tahitian",nativeName:"Reo Tahiti"},{code:"ug",name:"Uighur",nativeName:"Uy\u01A3urq\u0259, \u0626\u06C7\u064A\u063A\u06C7\u0631\u0686\u06D5\u200E"},{code:"uk",name:"Ukrainian",nativeName:"\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"},{code:"ur",name:"Urdu",nativeName:"\u0627\u0631\u062F\u0648"},{code:"uz",name:"Uzbek",nativeName:"zbek, \u040E\u0437\u0431\u0435\u043A"},{code:"ve",name:"Venda",nativeName:"Tshiven\u1E13a"},{code:"vi",name:"Vietnamese",nativeName:"Ti\u1EBFng Vi\u1EC7t"},{code:"vo",name:"VolapÃ¼k",nativeName:"Volap\u00FCk"},{code:"wa",name:"Walloon",nativeName:"Walon"},{code:"cy",name:"Welsh",nativeName:"Cymraeg"},{code:"wo",name:"Wolof",nativeName:"Wollof"},{code:"fy",name:"Western Frisian",nativeName:"Frysk"},{code:"xh",name:"Xhosa",nativeName:"isiXhosa"},{code:"yi",name:"Yiddish",nativeName:"\u05D9\u05D9\u05B4\u05D3\u05D9\u05E9"},{code:"yo",name:"Yoruba",nativeName:"Yor\u00F9b\u00E1"},{code:"za",name:"Zhuang, Chuang",nativeName:"Sa\u026F cue\u014B\u0185"}];
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/cast_sender.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/cast_sender.js"] = true;
(function(){var b=function(){var d=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);return d?50<=parseInt(d[1],10):!1},c=document.currentScript&&-1!=document.currentScript.src.indexOf("?loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",i=["boadgeojelhgndaghljhdicfkmllpafd","dliochdbjfkdbacpmhlcpmleaejidimm","enhhojjnijigcajfphajepfemndkmdlo","fmfcbgogabcbclcofgocippekhfcmgfj"],j=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","fjhoaacokmgbjemoflkofnenfaiekifl"],n=b()?j.concat(i):i.concat(j),o=function(d,f){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==e.readyState&&200==e.status&&f(!0)};e.onerror=function(){f(!1)};try{e.open("GET",d,!0),e.send()}catch(g){f(!1)}},v=function(d){if(d>=n.length){s()}else{var f=n[d],e="chrome-extension://"+f+c;0<=i.indexOf(f)?o(e,function(g){g?(window.chrome.cast=window.chrome.cast||{},window.chrome.cast.extensionId=f,u(e,s)):v(d+1)}):u(e,function(){v(d+1)})}},u=function(d,f){var e=document.createElement("script");e.onerror=f;e.src=d;(document.head||document.documentElement).appendChild(e)},s=function(){var d=window.__onGCastApiAvailable;d&&"function"==typeof d&&d(!1,"No cast extension found")};a:{if(0<=window.navigator.userAgent.indexOf("CriOS")){var w=window.__gCrWeb&&window.__gCrWeb.message&&window.__gCrWeb.message.invokeOnHost;if(w){w({command:"cast.sender.init"});break a}}if(window.chrome){var x=window.navigator.userAgent;if(0<=x.indexOf("Android")&&0<=x.indexOf("Chrome/")&&window.navigator.presentation){var y=b()?"50":"";u("//www.gstatic.com/eureka/clank"+y+c,s)}else{v(0)}}else{s()}}})();
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/zequery.cookie.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/zequery.cookie.js"] = true;
(function(a){a.cookie=function(d,i,e){if(arguments.length>1&&String(i)!=="[object Object]"){e=a.extend({},e);if(i===null||i===undefined){e.expires=-1}if(typeof e.expires==="number"){var b=e.expires,h=e.expires=new Date();h.setDate(h.getDate()+b)}i=String(i);var g=[encodeURIComponent(d),"=",e.raw?i:encodeURIComponent(i),e.expires?"; expires="+e.expires.toUTCString():"",e.path?"; path="+e.path:"",e.domain?"; domain="+e.domain:"",e.secure?"; secure":""].join("");if(cincopa&&cincopa.setCookie){return(cincopa.setCookie(g))}else{return false}}e=i||{};var f,c=e.raw?function(j){return j}:decodeURIComponent;return(f=new RegExp("(?:^|; )"+encodeURIComponent(d)+"=([^;]*)").exec(document.cookie))?c(f[1]):null}}(zeQuery));
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/mep-feature-ads.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/mep-feature-ads.js"] = true;
(function(a){a("head").append(a("<style>.mejs-ads a {	display: block; 	position: absolute;	right: 0;	top: 0;	width: 100%; 	height: 100%; 	display: block; }.mejs-ads a.ads-image {	background-color: black !important; 	background-size: contain !important; 	background-position: center center !important; 	background-repeat: no-repeat !important; }.mejs-ads a img {	display: block; 	width: 100%; 	height: 100%; 	max-width: 100%; 	max-height: 100%; }.mejs-ads .mejs-ads-skip-block {	display: block; 	position: absolute;	right: 0;	top: 0;	padding: 10px; 	background: #000; 	background: rgba(0,0,0,0.5); 	color: #fff; }.mejs-ads .mejs-ads-skip-button {	cursor: pointer; }.mejs-ads .mejs-ads-skip-button:hover {	text-decoration: underline; }</style>"));a.extend(cincopa_mejs.MepDefaults,{adsPrerollMediaUrl:"",adsPrerollAdUrl:"",adsPrerollAdEnableSkip:true,adsPrerollAdSkipSeconds:-1,adsClickUrl:"#"});a.extend(CincopaMediaElementPlayer.prototype,{adsLoaded:false,adsDataIsLoading:false,adsCurrentMediaUrl:"",adsCurrentMediaDuration:0,adsPlayerHasStarted:false,skipTimeForImage:0,buildads:function(e,b,c,d){var f=this;f.player=e;f.layers=c;if(f.adsLoaded){return}else{f.adsLoaded=true}e.adsLayer=a('<div class="mejs-layer mejs-overlay mejs-ads"><a href="#" target="_blank">&nbsp;</a><div class="mejs-ads-skip-block"><span class="mejs-ads-skip-message"></span><span class="mejs-ads-skip-button">Skip Ad &raquo;</span></div></div>').insertBefore(c.find(".mejs-overlay-play")).hide();f.adsAdClickProxy=a.proxy(f.adsAdClick,f);e.adsLayer.find("a").on("click",f.adsAdClickProxy);e.adsSkipBlock=e.adsLayer.find(".mejs-ads-skip-block").hide();e.adsSkipMessage=e.adsLayer.find(".mejs-ads-skip-message").hide();e.adsSkipButton=e.adsLayer.find(".mejs-ads-skip-button").on("click",a.proxy(f.adsSkipClick,f));f.adsMediaTryingToStartProxy=a.proxy(f.adsMediaTryingToStart,f);f.adsPrerollStartedProxy=a.proxy(f.adsPrerollStarted,f);f.adsPrerollMetaProxy=a.proxy(f.adsPrerollMeta,f);f.adsPrerollUpdateProxy=a.proxy(f.adsPrerollUpdate,f);f.adsPrerollEndedProxy=a.proxy(f.adsPrerollEnded,f);f.media.addEventListener("play",f.adsMediaTryingToStartProxy);f.media.addEventListener("playing",f.adsMediaTryingToStartProxy);f.media.addEventListener("canplay",f.adsMediaTryingToStartProxy);f.media.addEventListener("loadedmetadata",f.adsMediaTryingToStartProxy);if(f.options.adsPrerollMediaUrl!=""){f.adsStartPreroll()}},adsMediaTryingToStart:function(){var b=this;if(b.adsDataIsLoading&&!b.media.paused){b.media.pause()}b.adsPlayerHasStarted=true},adsStartPreroll:function(){var b=this;b.media.addEventListener("loadedmetadata",b.adsPrerollMetaProxy);b.media.addEventListener("playing",b.adsPrerollStartedProxy);b.media.addEventListener("ended",b.adsPrerollEndedProxy);b.media.addEventListener("timeupdate",b.adsPrerollUpdateProxy);b.adsCurrentMediaUrl=b.media.src;b.adsCurrentMediaDuration=b.media.duration;var d=b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].url;var c=b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].type;b.container.trigger("mejsprerollimpresions");b.skin.advertising=true;if(b.media.canPlayType(c)!=""){b.adsPlayVideo(d)}else{if(b.adsIsImage(c)){b.adsPlayImage(d)}else{b.adsPrerollEndedProxy()}}},adsPrerollMeta:function(){var d=this,c=0;var b=d.vastAdTags[d.options.currentAdsIndex].mediaFiles[d.options.currentIndex].duration;if(b&&b>0){c=b}else{if(!isNaN(d.adsCurrentMediaDuration)){c=d.adsCurrentMediaDuration}}setTimeout(function(){d.controls.find(".mejs-duration").html(cincopa_mejs.Utility.secondsToTimeCode(c,d.options.alwaysShowHours||c>3600,d.options.showTimecodeFrameCount,d.options.framesPerSecond||25))},250)},adsPrerollStarted:function(){var b=this;b.eventsTime=0;if(b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].skipoffset){b.options.adsPrerollAdSkipSeconds=parseInt(b.adsConvertTimeToSeconds(b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].skipoffset))}else{if(b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].duration){b.options.adsPrerollAdSkipSeconds=parseInt(b.adsConvertTimeToSeconds(b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].duration))}else{b.options.adsPrerollAdSkipSeconds=20}}b.eventsInterval=setInterval(function(){b.eventsTime++;if(b.options.adsPrerollAdSkipSeconds/4<=b.eventsTime&&!b.triggeredfirstQuartile){b.triggeredfirstQuartile=true;b.container.trigger("mejsprerollfirstQuartile")}else{if(b.options.adsPrerollAdSkipSeconds/2<=b.eventsTime&&!b.triggeredmidpoint){b.triggeredmidpoint=true;b.container.trigger("mejsprerollmidpoint")}else{if(b.options.adsPrerollAdSkipSeconds*0.75<=b.eventsTime&&!b.triggeredthirdQuartile){b.triggeredthirdQuartile=true;b.container.trigger("mejsprerollthirdQuartile")}}}},1000);if(b.isImage){b.media.pause();a(b.container[0]).find(".mejs-overlay-button").hide();b.skipTimeForImage=0;b.interval=setInterval(function(){if(b.skipTimeForImage>0&&b.skipTimeForImage<=b.options.adsPrerollAdSkipSeconds){b.adsPrerollUpdateProxy()}else{if(b.skipTimeForImage>b.options.adsPrerollAdSkipSeconds){clearInterval(b.interval);b.adsPrerollEndedProxy()}}b.skipTimeForImage++},1000)}b.media.removeEventListener("playing",b.adsPrerollStartedProxy);b.disableControls();b.hideControls();b.container.find(".share-button").hide();b.container.addClass("cp-hidecontrols");b.adsLayer.show();if(b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].clickThrough!=""){b.adsLayer.find("a").attr("href",b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].clickThrough)}if(b.options.adsPrerollAdEnableSkip){b.adsSkipBlock.show();if(b.options.adsPrerollAdSkipSeconds>0){b.adsSkipMessage.html("Skip in "+(b.options.adsPrerollAdSkipSeconds).toString()+" seconds.").show();b.adsSkipButton.hide()}else{b.adsSkipMessage.hide();b.adsSkipButton.show()}}else{b.adsSkipBlock.hide()}b.container.trigger("mejsprerollstarted")},adsPrerollUpdate:function(b){if(b&&b.paused){return}var c=this;if(c.options.adsPrerollAdEnableSkip&&c.options.adsPrerollAdSkipSeconds>0){if(!c.isImage&&c.media.currentTime>c.options.adsPrerollAdSkipSeconds){c.adsSkipButton.show();c.adsSkipMessage.hide()}else{if(c.isImage){c.adsSkipMessage.html("Skip in "+Math.round(c.options.adsPrerollAdSkipSeconds-c.skipTimeForImage).toString()+" seconds.")}else{c.adsSkipMessage.html("Skip in "+Math.round(c.options.adsPrerollAdSkipSeconds-c.media.currentTime).toString()+" seconds.")}}}},adsPrerollEnded:function(){var b=this;b.isImage=false;b.isVideo=false;b.container.trigger("mejsprerollended");b.triggeredfirstQuartile=false;b.triggeredmidpoint=false;b.triggeredthirdQuartile=false;clearInterval(b.eventsInterval);b.options.currentIndex++;if(b.options.currentIndex>=b.vastAdTags[b.options.currentAdsIndex].mediaFiles.length){b.options.currentAdsIndex++;if(b.options.currentAdsIndex>=b.vastAdTags.length){b.adRestoreMainMedia()}else{b.options.currentIndex=0;var d=b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].url;var c=b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].type;if(b.media.canPlayType(c)!=""){b.adsPlayVideo(d)}else{if(b.adsIsImage(c)){b.adsPlayImage(d)}else{b.adsPrerollEndedProxy()}}}}else{var d=b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].url;var c=b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].type;if(b.media.canPlayType(c)!=""){b.adsPlayVideo(d)}else{if(b.adsIsImage(c)){b.adsPlayImage(d)}else{b.adsPrerollEndedProxy()}}}},adRestoreMainMedia:function(){var c=this;clearInterval(c.interval);c.skin.advertising=false;c.enableControls();c.showControls();c.container.find(".share-button").show();c.container.removeClass("cp-hidecontrols");c.adsLayer.hide();a(c.container[0]).find(".mejs-overlay-button").show();c.media.removeEventListener("playing",c.adsPrerollStartedProxy);c.media.removeEventListener("ended",c.adsPrerollEndedProxy);c.media.removeEventListener("loadedmetadata",c.adsPrerollMetaProxy);c.media.removeEventListener("timeupdate",c.adsPrerollUpdateProxy);var b=c.layers.find(".mejs-playlist > ul li.current");if(!b.length){b=c.layers.find(".mejs-playlist > ul li:first-child")}b.removeClass("current");c.container.trigger("mejsprerolladsmainvideorestored");c.player.playTrack(b,"",c.player,false,true)},adsAdClick:function(b){var c=this;if(c.isVideo){if(c.media.paused){c.media.play()}else{c.media.pause()}}c.container.trigger("mejsprerolladsclicked")},adsSkipClick:function(){var b=this;b.container.trigger("mejsprerollskipclicked");b.container.trigger("mejsprerollended");b.adRestoreMainMedia()},adsLoadUrl:function(d){var b=new Image(),c=Math.round(Math.random()*100000);b.src=d+((d.indexOf("?")>0)?"&":"?")+"random"+c+"="+c;b.loaded=function(){b=null}},adsPlayVideo:function(d){var c=this;c.isVideo=true;c.container.trigger("mejsprerollcreativeveiw");a(c.container[0]).find(".mejs-ads a").removeClass("ads-image");a(c.container[0]).find(".mejs-ads a").css("background","none");if(c.media.paused){c.media.play()}else{c.media.pause()}c.media.setSrc(d);function b(){if(c.media.error.code==4){c.adsSkipClick();c.media.removeEventListener("error",b,true)}}c.media.addEventListener("error",b,true);c.media.load();if(c.adsPlayerHasStarted){c.media.play()}},adsPlayImage:function(c){var b=this;b.isImage=true;b.container.trigger("mejsprerollcreativeveiw");b.media.pause();a(b.container[0]).find(".mejs-ads a").addClass("ads-image");a(b.container[0]).find(".mejs-ads a").css("background","url("+c+")");if(b.adsPlayerHasStarted){b.adsPrerollStartedProxy()}},adsIsImage:function(b){return b.indexOf("image")>-1},adsConvertTimeToSeconds:function(e){var f=e.split(":");var b=f[0]*60*60;var c=f[1]*60;var d=f[2];var g=b+c+d;return g}})})(cincopa_mejs.$);
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/mep-feature-ads-vast.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/mep-feature-ads-vast.js"] = true;
(function(a){a.extend(cincopa_mejs.MepDefaults,{vastAdTagUrl:""});a.extend(CincopaMediaElementPlayer.prototype,{buildvast:function(e,b,c,d){var f=this;f.skin=e.options.skinObject;if(e.options.skinObject.Vastloaded){return false}e.options.skinObject.Vastloaded=true;if(f.options.vastAdTagUrl!=""){f.vastLoadAdTagInfo()}f.buildads(e,b,c,d);f.vastSetupEvents()},vastAdTagIsLoading:false,vastAdTagIsLoaded:false,vastStartedPlaying:false,vastAdTags:[],vastSetupEvents:function(){var h=this;h.container.on("mejsprerollimpresions",function(){if(h.vastAdTags.length>0&&h.vastAdTags[h.options.currentAdsIndex].impressions.length>0){for(var j=0,k=h.vastAdTags[h.options.currentAdsIndex].impressions.length;j<k;j++){h.adsLoadUrl(h.vastAdTags[h.options.currentAdsIndex].impressions[j])}}});h.container.on("mejsprerollcreativeveiw",function(){if(h.vastAdTags.length>0&&h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.creativeView){h.adsLoadUrl(h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.creativeView)}});h.container.on("mejsprerollstarted",function(){if(h.vastAdTags.length>0){var i=h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex];if(i.trackingEvents.start){h.adsLoadUrl(i.trackingEvents.start)}}});h.container.on("mejsprerollfirstQuartile",function(){if(h.vastAdTags.length>0&&h.vastAdTags[h.options.currentAdsIndex]&&h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.firstQuartile){h.adsLoadUrl(h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.firstQuartile)}});h.container.on("mejsprerollmidpoint",function(){if(h.vastAdTags.length>0&&h.vastAdTags[h.options.currentAdsIndex]&&h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.midpoint){h.adsLoadUrl(h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.midpoint)}});h.container.on("mejsprerollthirdQuartile",function(){if(h.vastAdTags.length>0&&h.vastAdTags[h.options.currentAdsIndex]&&h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.thirdQuartile){h.adsLoadUrl(h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.thirdQuartile)}});h.container.on("mejsprerollended",function(){if(h.vastAdTags.length>0&&h.vastAdTags[h.options.currentAdsIndex]&&h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.complete){h.adsLoadUrl(h.vastAdTags[h.options.currentAdsIndex].mediaFiles[h.options.currentIndex].trackingEvents.complete)}});var g=false;var c=true;var f=true;h.container.on("mejsprerollskipclicked",function(){g=true});h.container.on("mejsprerolladsmainvideorestored",function(){g=false;c=true});var d=0;try{d=h.layers.find(".mejs-playlist > ul li.current").data("index")||0}catch(b){console.log(b)}h.media.addEventListener("loadedmetadata",e,true);function e(){if(c==false&&g==false){if(h.media.src!=h.options.adsPrerollMediaUrl){var i=0;try{i=h.layers.find(".mejs-playlist > ul li.current").data("index")||0}catch(j){console.log(j)}if(h.options.vastpreroll=="on_each"){if(i!=d){h.vastLoadAdTagInfo();d=i}else{}}else{if(h.options.vastpreroll=="only_once"){if(f){h.vastContinuePreroll()}else{h.media.removeEventListener("loadedmetadata",e);h.adsSkipClick()}f=false}}g=false}}c=false}},vastSetAdTagUrl:function(c){var b=this;b.options.vastAdTagUrl=c;b.vastAdTagIsLoaded=false;b.vastAdTags=[]},vastLoadAdTagInfo:function(){var b=this;b.adsDataIsLoading=true;b.vastAdTagIsLoading=true;b.loadAdTagInfoDirect()},loadAdTagInfoDirect:function(){var b=this;a.ajax({url:b.options.vastAdTagUrl,crossDomain:true,success:function(c){b.vastParseVastData(c)},error:function(c){b.loadAdTagInfoProxy()}})},loadAdTagInfoProxy:function(){var f=this,d=location.protocol,c=location.hostname,b=RegExp(d+"//"+c),e='select * from xml where url="'+encodeURI(f.options.vastAdTagUrl)+'"',g="http"+(/^https/.test(d)?"s":"")+"://query.yahooapis.com/v1/public/yql?format=xml&q="+e;a.ajax({url:g,crossDomain:true,success:function(h){f.vastParseVastData(h)},error:function(h){f.vastError()}})},vastParseVastData:function(b){var c=this;c.vastAdTags=[];a(b).find("Ad").each(function(f,g){var d=a(g),e={id:d.attr("id"),title:a.trim(d.find("AdTitle").text()),description:a.trim(d.find("Description").text()),impressions:[],mediaFiles:[],shown:false};c.vastAdTags.push(e);d.find("Impression").each(function(){e.impressions.push(a.trim(a(this).text()))});d.find("Creative").each(function(){var h=a(this);h.find("Linear").each(function(){var k=a(this);var j=k.find("Duration").text();var l=k.attr("skipoffset");var i=k.find("ClickThrough").text();var m={};k.find("Tracking").each(function(n,o){m[a(o).attr("event")]=a.trim(a(o).text())});k.find("MediaFile").each(function(n,p){var o=a(p);type=o.attr("type");e.mediaFiles.push({id:o.attr("id"),delivery:o.attr("delivery"),type:o.attr("type"),bitrate:o.attr("bitrate"),width:o.attr("width"),height:o.attr("height"),url:a.trim(o.text()),duration:j,clickThrough:i,trackingEvents:m,skipoffset:l})})});h.find("CompanionAds").each(function(){var i=a(this);i.find("Companion").each(function(){var k=a(this);var n=k.attr("width");var l=k.attr("height");var j=k.find("CompanionClickThrough").text();var m={};k.find("Tracking").each(function(o,p){m[a(p).attr("event")]=a.trim(a(p).text())});k.find("StaticResource").each(function(o,q){var p=a(q);e.mediaFiles.push({type:p.attr("creativeType"),width:n,height:l,url:a.trim(p.text()),clickThrough:j,trackingEvents:m})})})});h.find("NonLinearAds").each(function(){var i=a(this);var j={};i.find("Tracking").each(function(k,l){j[a(l).attr("event")]=a.trim(a(l).text())});i.find("NonLinear").each(function(){var n=a(this);var o=n.attr("width");var m=n.attr("height");var l=n.attr("minSuggestedDuration");var k=n.find("NonLinearClickThrough").text();n.find("StaticResource").each(function(p,r){var q=a(r);e.mediaFiles.push({type:q.attr("creativeType"),width:o,height:m,url:a.trim(q.text()),duration:l,clickThrough:k,trackingEvents:j})})})})})});c.vastLoaded()},vastLoaded:function(){var b=this;b.vastAdTagIsLoaded=true;b.vastAdTagIsLoading=false;b.adsDataIsLoading=false;b.vastStartPreroll()},vastStartPreroll:function(){var b=this;b.options.currentAdsIndex=0;if(b.vastAdTags.length>0&&b.vastAdTags[b.options.currentAdsIndex].mediaFiles.length>0){b.options.currentIndex=0;b.options.adsPrerollMediaUrl=b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].url;b.adsStartPreroll()}},vastContinuePreroll:function(){var b=this;if(b.vastAdTags.length>0&&b.vastAdTags[b.options.currentAdsIndex]&&b.vastAdTags[b.options.currentAdsIndex].mediaFiles.length>0){b.options.adsPrerollMediaUrl=b.vastAdTags[b.options.currentAdsIndex].mediaFiles[b.options.currentIndex].url;b.adsStartPreroll()}},vastError:function(){var b=this;b.media.removeEventListener("play",b.adsMediaTryingToStartProxy);b.media.removeEventListener("playing",b.adsMediaTryingToStartProxy);b.media.removeEventListener("canplay",b.adsMediaTryingToStartProxy);b.media.removeEventListener("loadedmetadata",b.adsMediaTryingToStartProxy);b.skin.advertising=false;b.enableControls();b.showControls();b.container.find(".share-button").show();b.container.removeClass("cp-hidecontrols");b.adsLayer.hide();b.container.find(".mejs-overlay-button").show();if(b.options.skinObject.go.args.autostart){setTimeout(function(){b.media.play()},400)}}})})(cincopa_mejs.$);
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/hls.min.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/hls.min.js"] = true;
"undefined"!=typeof window&&function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Hls=t():e.Hls=t()}(this,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=13)}([function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return c}));var i=r(5);function a(){}var n={trace:a,debug:a,log:a,warn:a,info:a,error:a},s=n;function o(e,t){return t="["+e+"] > "+t}var l=Object(i.a)();function d(e){var t=l.console[e];return t?function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];i[0]&&(i[0]=o(e,i[0])),t.apply(l.console,i)}:a}var u=function(e){if(l.console&&!0===e||"object"==typeof e){!function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];r.forEach((function(t){s[t]=e[t]?e[t].bind(e):d(t)}))}(e,"debug","log","info","warn","error");try{s.log()}catch(e){s=n}}else s=n},c=s},function(e,t,r){"use strict";t.a={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",LEVELS_UPDATED:"hlsLevelsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",CUES_PARSED:"hlsCuesParsed",NON_NATIVE_TEXT_TRACKS_FOUND:"hlsNonNativeTextTracksFound",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition",LIVE_BACK_BUFFER_REACHED:"hlsLiveBackBufferReached"}},function(e,t,r){"use strict";var i,a;r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a})),function(e){e.NETWORK_ERROR="networkError",e.MEDIA_ERROR="mediaError",e.KEY_SYSTEM_ERROR="keySystemError",e.MUX_ERROR="muxError",e.OTHER_ERROR="otherError"}(i||(i={})),function(e){e.KEY_SYSTEM_NO_KEYS="keySystemNoKeys",e.KEY_SYSTEM_NO_ACCESS="keySystemNoAccess",e.KEY_SYSTEM_NO_SESSION="keySystemNoSession",e.KEY_SYSTEM_LICENSE_REQUEST_FAILED="keySystemLicenseRequestFailed",e.KEY_SYSTEM_NO_INIT_DATA="keySystemNoInitData",e.MANIFEST_LOAD_ERROR="manifestLoadError",e.MANIFEST_LOAD_TIMEOUT="manifestLoadTimeOut",e.MANIFEST_PARSING_ERROR="manifestParsingError",e.MANIFEST_INCOMPATIBLE_CODECS_ERROR="manifestIncompatibleCodecsError",e.LEVEL_EMPTY_ERROR="levelEmptyError",e.LEVEL_LOAD_ERROR="levelLoadError",e.LEVEL_LOAD_TIMEOUT="levelLoadTimeOut",e.LEVEL_SWITCH_ERROR="levelSwitchError",e.AUDIO_TRACK_LOAD_ERROR="audioTrackLoadError",e.AUDIO_TRACK_LOAD_TIMEOUT="audioTrackLoadTimeOut",e.FRAG_LOAD_ERROR="fragLoadError",e.FRAG_LOAD_TIMEOUT="fragLoadTimeOut",e.FRAG_DECRYPT_ERROR="fragDecryptError",e.FRAG_PARSING_ERROR="fragParsingError",e.REMUX_ALLOC_ERROR="remuxAllocError",e.KEY_LOAD_ERROR="keyLoadError",e.KEY_LOAD_TIMEOUT="keyLoadTimeOut",e.BUFFER_ADD_CODEC_ERROR="bufferAddCodecError",e.BUFFER_APPEND_ERROR="bufferAppendError",e.BUFFER_APPENDING_ERROR="bufferAppendingError",e.BUFFER_STALLED_ERROR="bufferStalledError",e.BUFFER_FULL_ERROR="bufferFullError",e.BUFFER_SEEK_OVER_HOLE="bufferSeekOverHole",e.BUFFER_NUDGE_ON_STALL="bufferNudgeOnStall",e.INTERNAL_EXCEPTION="internalException"}(a||(a={}))},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var i=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)};Number.MAX_SAFE_INTEGER},function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var i,a=r(5),n=function(){function e(){}return e.isHeader=function(e,t){return t+10<=e.length&&73===e[t]&&68===e[t+1]&&51===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.isFooter=function(e,t){return t+10<=e.length&&51===e[t]&&68===e[t+1]&&73===e[t+2]&&e[t+3]<255&&e[t+4]<255&&e[t+6]<128&&e[t+7]<128&&e[t+8]<128&&e[t+9]<128},e.getID3Data=function(t,r){for(var i=r,a=0;e.isHeader(t,r);){a+=10,a+=e._readSize(t,r+6),e.isFooter(t,r+10)&&(a+=10),r+=a}if(a>0)return t.subarray(i,i+a)},e._readSize=function(e,t){var r=0;return r=(127&e[t])<<21,r|=(127&e[t+1])<<14,r|=(127&e[t+2])<<7,r|=127&e[t+3]},e.getTimeStamp=function(t){for(var r=e.getID3Frames(t),i=0;i<r.length;i++){var a=r[i];if(e.isTimeStampFrame(a))return e._readTimeStamp(a)}},e.isTimeStampFrame=function(e){return e&&"PRIV"===e.key&&"com.apple.streaming.transportStreamTimestamp"===e.info},e._getFrameData=function(t){var r=String.fromCharCode(t[0],t[1],t[2],t[3]),i=e._readSize(t,4);return{type:r,size:i,data:t.subarray(10,10+i)}},e.getID3Frames=function(t){for(var r=0,i=[];e.isHeader(t,r);){for(var a=e._readSize(t,r+6),n=(r+=10)+a;r+8<n;){var s=e._getFrameData(t.subarray(r)),o=e._decodeFrame(s);o&&i.push(o),r+=s.size+10}e.isFooter(t,r)&&(r+=10)}return i},e._decodeFrame=function(t){return"PRIV"===t.type?e._decodePrivFrame(t):"T"===t.type[0]?e._decodeTextFrame(t):"W"===t.type[0]?e._decodeURLFrame(t):void 0},e._readTimeStamp=function(e){if(8===e.data.byteLength){var t=new Uint8Array(e.data),r=1&t[3],i=(t[4]<<23)+(t[5]<<15)+(t[6]<<7)+t[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},e._decodePrivFrame=function(t){if(!(t.size<2)){var r=e._utf8ArrayToStr(t.data,!0),i=new Uint8Array(t.data.subarray(r.length+1));return{key:t.type,info:r,data:i.buffer}}},e._decodeTextFrame=function(t){if(!(t.size<2)){if("TXXX"===t.type){var r=1,i=e._utf8ArrayToStr(t.data.subarray(r),!0);r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data.subarray(1));return{key:t.type,data:n}}},e._decodeURLFrame=function(t){if("WXXX"===t.type){if(t.size<2)return;var r=1,i=e._utf8ArrayToStr(t.data.subarray(r),!0);r+=i.length+1;var a=e._utf8ArrayToStr(t.data.subarray(r));return{key:t.type,info:i,data:a}}var n=e._utf8ArrayToStr(t.data);return{key:t.type,data:n}},e._utf8ArrayToStr=function(e,t){void 0===t&&(t=!1);var r=s();if(r){var i=r.decode(e);if(t){var a=i.indexOf("\0");return-1!==a?i.substring(0,a):i}return i.replace(/\0/g,"")}for(var n,o,l,d=e.length,u="",c=0;c<d;){if(0===(n=e[c++])&&t)return u;if(0!==n&&3!==n)switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:u+=String.fromCharCode(n);break;case 12:case 13:o=e[c++],u+=String.fromCharCode((31&n)<<6|63&o);break;case 14:o=e[c++],l=e[c++],u+=String.fromCharCode((15&n)<<12|(63&o)<<6|(63&l)<<0)}}return u},e}();function s(){var e=Object(a.a)();return i||void 0===e.TextDecoder||(i=new e.TextDecoder("utf-8")),i}var o=n._utf8ArrayToStr;t.a=n},function(e,t,r){"use strict";function i(){return"undefined"==typeof window?self:window}r.d(t,"a",(function(){return i}))},function(e,t,r){var i,a,n,s,o;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,a=/^([^\/?#]*)(.*)$/,n=/(?:\/|^)\.(?=\/)/g,s=/(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,o={buildAbsoluteURL:function(e,t,r){if(r=r||{},e=e.trim(),!(t=t.trim())){if(!r.alwaysNormalize)return e;var i=o.parseURL(e);if(!i)throw new Error("Error trying to parse base URL.");return i.path=o.normalizePath(i.path),o.buildURLFromParts(i)}var n=o.parseURL(t);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):t;var s=o.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=a.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var d={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(d.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var u=s.path,c=u.substring(0,u.lastIndexOf("/")+1)+n.path;d.path=o.normalizePath(c)}else d.path=s.path,n.params||(d.params=s.params,n.query||(d.query=s.query));return null===d.path&&(d.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(d)},parseURL:function(e){var t=i.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(n,"");e.length!==(e=e.replace(s,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}},e.exports=o},function(e,t,r){"use strict";var i=function(){function e(e,t){this.subtle=e,this.aesIV=t}return e.prototype.decrypt=function(e,t){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},t,e)},e}(),a=function(){function e(e,t){this.subtle=e,this.key=t}return e.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},e}();var n=function(){function e(){this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}var t=e.prototype;return t.uint8ArrayToUint32Array_=function(e){for(var t=new DataView(e),r=new Uint32Array(4),i=0;i<4;i++)r[i]=t.getUint32(4*i);return r},t.initTable=function(){var e=this.sBox,t=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],s=r[3],o=this.invSubMix,l=o[0],d=o[1],u=o[2],c=o[3],h=new Uint32Array(256),f=0,g=0,p=0;for(p=0;p<256;p++)h[p]=p<128?p<<1:p<<1^283;for(p=0;p<256;p++){var v=g^g<<1^g<<2^g<<3^g<<4;v=v>>>8^255&v^99,e[f]=v,t[v]=f;var m=h[f],y=h[m],b=h[y],T=257*h[v]^16843008*v;i[f]=T<<24|T>>>8,a[f]=T<<16|T>>>16,n[f]=T<<8|T>>>24,s[f]=T,T=16843009*b^65537*y^257*m^16843008*f,l[v]=T<<24|T>>>8,d[v]=T<<16|T>>>16,u[v]=T<<8|T>>>24,c[v]=T,f?(f=m^h[h[h[b^m]]],g^=h[h[g]]):f=g=1}},t.expandKey=function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,i=0;i<t.length&&r;)r=t[i]===this.key[i],i++;if(!r){this.key=t;var a=this.keySize=t.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n,s,o,l,d=this.ksRows=4*(a+6+1),u=this.keySchedule=new Uint32Array(d),c=this.invKeySchedule=new Uint32Array(d),h=this.sBox,f=this.rcon,g=this.invSubMix,p=g[0],v=g[1],m=g[2],y=g[3];for(n=0;n<d;n++)n<a?o=u[n]=t[n]:(l=o,n%a==0?(l=h[(l=l<<8|l>>>24)>>>24]<<24|h[l>>>16&255]<<16|h[l>>>8&255]<<8|h[255&l],l^=f[n/a|0]<<24):a>6&&n%a==4&&(l=h[l>>>24]<<24|h[l>>>16&255]<<16|h[l>>>8&255]<<8|h[255&l]),u[n]=o=(u[n-a]^l)>>>0);for(s=0;s<d;s++)n=d-s,l=3&s?u[n]:u[n-4],c[s]=s<4||n<=4?l:p[h[l>>>24]]^v[h[l>>>16&255]]^m[h[l>>>8&255]]^y[h[255&l]],c[s]=c[s]>>>0}},t.networkToHostOrderSwap=function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24},t.decrypt=function(e,t,r,i){for(var a,n,s,o,l,d,u,c,h,f,g,p,v,m,y,b,T,E=this.keySize+6,S=this.invKeySchedule,_=this.invSBox,R=this.invSubMix,A=R[0],k=R[1],w=R[2],L=R[3],D=this.uint8ArrayToUint32Array_(r),O=D[0],C=D[1],I=D[2],P=D[3],x=new Int32Array(e),M=new Int32Array(x.length),F=this.networkToHostOrderSwap;t<x.length;){for(h=F(x[t]),f=F(x[t+1]),g=F(x[t+2]),p=F(x[t+3]),l=h^S[0],d=p^S[1],u=g^S[2],c=f^S[3],v=4,m=1;m<E;m++)a=A[l>>>24]^k[d>>16&255]^w[u>>8&255]^L[255&c]^S[v],n=A[d>>>24]^k[u>>16&255]^w[c>>8&255]^L[255&l]^S[v+1],s=A[u>>>24]^k[c>>16&255]^w[l>>8&255]^L[255&d]^S[v+2],o=A[c>>>24]^k[l>>16&255]^w[d>>8&255]^L[255&u]^S[v+3],l=a,d=n,u=s,c=o,v+=4;a=_[l>>>24]<<24^_[d>>16&255]<<16^_[u>>8&255]<<8^_[255&c]^S[v],n=_[d>>>24]<<24^_[u>>16&255]<<16^_[c>>8&255]<<8^_[255&l]^S[v+1],s=_[u>>>24]<<24^_[c>>16&255]<<16^_[l>>8&255]<<8^_[255&d]^S[v+2],o=_[c>>>24]<<24^_[l>>16&255]<<16^_[d>>8&255]<<8^_[255&u]^S[v+3],v+=3,M[t]=F(a^O),M[t+1]=F(o^C),M[t+2]=F(s^I),M[t+3]=F(n^P),O=h,C=f,I=g,P=p,t+=4}return i?(y=M.buffer,b=y.byteLength,(T=b&&new DataView(y).getUint8(b-1))?y.slice(0,b-T):y):M.buffer},t.destroy=function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0},e}(),s=r(2),o=r(0),l=r(1),d=r(5),u=Object(d.a)(),c=function(){function e(e,t,r){var i=(void 0===r?{}:r).removePKCS7Padding,a=void 0===i||i;if(this.logEnabled=!0,this.observer=e,this.config=t,this.removePKCS7Padding=a,a)try{var n=u.crypto;n&&(this.subtle=n.subtle||n.webkitSubtle)}catch(e){}this.disableWebCrypto=!this.subtle}var t=e.prototype;return t.isSync=function(){return this.disableWebCrypto&&this.config.enableSoftwareAES},t.decrypt=function(e,t,r,s){var l=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(o.b.log("JS AES decrypt"),this.logEnabled=!1);var d=this.decryptor;d||(this.decryptor=d=new n),d.expandKey(t),s(d.decrypt(e,0,r,this.removePKCS7Padding))}else{this.logEnabled&&(o.b.log("WebCrypto AES decrypt"),this.logEnabled=!1);var u=this.subtle;this.key!==t&&(this.key=t,this.fastAesKey=new a(u,t)),this.fastAesKey.expandKey().then((function(a){new i(u,r).decrypt(e,a).catch((function(i){l.onWebCryptoError(i,e,t,r,s)})).then((function(e){s(e)}))})).catch((function(i){l.onWebCryptoError(i,e,t,r,s)}))}},t.onWebCryptoError=function(e,t,r,i,a){this.config.enableSoftwareAES?(o.b.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(t,r,i,a)):(o.b.error("decrypting error : "+e.message),this.observer.trigger(l.a.ERROR,{type:s.b.MEDIA_ERROR,details:s.a.FRAG_DECRYPT_ERROR,fatal:!0,reason:e.message}))},t.destroy=function(){var e=this.decryptor;e&&(e.destroy(),this.decryptor=void 0)},e}();t.a=c},function(e,t,r){"use strict";var i=Object.prototype.hasOwnProperty,a="~";function n(){}function s(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,r,i,n){if("function"!=typeof r)throw new TypeError("The listener must be a function");var o=new s(r,i||e,n),l=a?a+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],o]:e._events[l].push(o):(e._events[l]=o,e._eventsCount++),e}function l(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function d(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),d.prototype.eventNames=function(){var e,t,r=[];if(0===this._eventsCount)return r;for(t in e=this._events)i.call(e,t)&&r.push(a?t.slice(1):t);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},d.prototype.listeners=function(e){var t=a?a+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var i=0,n=r.length,s=new Array(n);i<n;i++)s[i]=r[i].fn;return s},d.prototype.listenerCount=function(e){var t=a?a+e:e,r=this._events[t];return r?r.fn?1:r.length:0},d.prototype.emit=function(e,t,r,i,n,s){var o=a?a+e:e;if(!this._events[o])return!1;var l,d,u=this._events[o],c=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),c){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,i),!0;case 5:return u.fn.call(u.context,t,r,i,n),!0;case 6:return u.fn.call(u.context,t,r,i,n,s),!0}for(d=1,l=new Array(c-1);d<c;d++)l[d-1]=arguments[d];u.fn.apply(u.context,l)}else{var h,f=u.length;for(d=0;d<f;d++)switch(u[d].once&&this.removeListener(e,u[d].fn,void 0,!0),c){case 1:u[d].fn.call(u[d].context);break;case 2:u[d].fn.call(u[d].context,t);break;case 3:u[d].fn.call(u[d].context,t,r);break;case 4:u[d].fn.call(u[d].context,t,r,i);break;default:if(!l)for(h=1,l=new Array(c-1);h<c;h++)l[h-1]=arguments[h];u[d].fn.apply(u[d].context,l)}}return!0},d.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},d.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},d.prototype.removeListener=function(e,t,r,i){var n=a?a+e:e;if(!this._events[n])return this;if(!t)return l(this,n),this;var s=this._events[n];if(s.fn)s.fn!==t||i&&!s.once||r&&s.context!==r||l(this,n);else{for(var o=0,d=[],u=s.length;o<u;o++)(s[o].fn!==t||i&&!s[o].once||r&&s[o].context!==r)&&d.push(s[o]);d.length?this._events[n]=1===d.length?d[0]:d:l(this,n)}return this},d.prototype.removeAllListeners=function(e){var t;return e?(t=a?a+e:e,this._events[t]&&l(this,t)):(this._events=new n,this._eventsCount=0),this},d.prototype.off=d.prototype.removeListener,d.prototype.addListener=d.prototype.on,d.prefixed=a,d.EventEmitter=d,e.exports=d},function(e,t,r){"use strict";var i=r(1),a=r(2),n=r(7),s=r(3),o=r(0),l=r(5);function d(e,t){return 255===e[t]&&240==(246&e[t+1])}function u(e,t){return 1&e[t+1]?7:9}function c(e,t){return(3&e[t+3])<<11|e[t+4]<<3|(224&e[t+5])>>>5}function h(e,t){return!!(t+1<e.length&&d(e,t))}function f(e,t){if(h(e,t)){var r=u(e,t);if(t+r>=e.length)return!1;var i=c(e,t);if(i<=r)return!1;var a=t+i;if(a===e.length||a+1<e.length&&d(e,a))return!0}return!1}function g(e,t,r,n,s){if(!e.samplerate){var l=function(e,t,r,n){var s,l,d,u,c,h=navigator.userAgent.toLowerCase(),f=n,g=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];if(s=1+((192&t[r+2])>>>6),!((l=(60&t[r+2])>>>2)>g.length-1))return u=(1&t[r+2])<<2,u|=(192&t[r+3])>>>6,o.b.log("manifest codec:"+n+",ADTS data:type:"+s+",sampleingIndex:"+l+"["+g[l]+"Hz],channelConfig:"+u),/firefox/i.test(h)?l>=6?(s=5,c=new Array(4),d=l-3):(s=2,c=new Array(2),d=l):-1!==h.indexOf("android")?(s=2,c=new Array(2),d=l):(s=5,c=new Array(4),n&&(-1!==n.indexOf("mp4a.40.29")||-1!==n.indexOf("mp4a.40.5"))||!n&&l>=6?d=l-3:((n&&-1!==n.indexOf("mp4a.40.2")&&(l>=6&&1===u||/vivaldi/i.test(h))||!n&&1===u)&&(s=2,c=new Array(2)),d=l)),c[0]=s<<3,c[0]|=(14&l)>>1,c[1]|=(1&l)<<7,c[1]|=u<<3,5===s&&(c[1]|=(14&d)>>1,c[2]=(1&d)<<7,c[2]|=8,c[3]=0),{config:c,samplerate:g[l],channelCount:u,codec:"mp4a.40."+s,manifestCodec:f};e.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+l})}(t,r,n,s);e.config=l.config,e.samplerate=l.samplerate,e.channelCount=l.channelCount,e.codec=l.codec,e.manifestCodec=l.manifestCodec,o.b.log("parsed codec:"+e.codec+",rate:"+l.samplerate+",nb channel:"+l.channelCount)}}function p(e){return 9216e4/e}function v(e,t,r,i,a){var n=function(e,t,r,i,a){var n,s,o=e.length;if(n=u(e,t),s=c(e,t),(s-=n)>0&&t+n+s<=o)return{headerLength:n,frameLength:s,stamp:r+i*a}}(t,r,i,a,p(e.samplerate));if(n){var s=n.stamp,o=n.headerLength,l=n.frameLength,d={unit:t.subarray(r+o,r+o+l),pts:s,dts:s};return e.samples.push(d),{sample:d,length:l+o}}}var m=r(4),y=function(){function e(e,t,r){this.observer=e,this.config=r,this.remuxer=t}var t=e.prototype;return t.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/adts",type:"audio",id:0,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},t.resetTimeStamp=function(){},e.probe=function(e){if(!e)return!1;for(var t=(m.a.getID3Data(e,0)||[]).length,r=e.length;t<r;t++)if(f(e,t))return o.b.log("ADTS sync word found !"),!0;return!1},t.append=function(e,t,r,i){for(var a=this._audioTrack,n=m.a.getID3Data(e,0)||[],l=m.a.getTimeStamp(n),d=Object(s.a)(l)?90*l:9e4*t,u=0,c=d,f=e.length,p=n.length,y=[{pts:c,dts:c,data:n}];p<f-1;)if(h(e,p)&&p+5<f){g(a,this.observer,e,p,a.manifestCodec);var b=v(a,e,p,d,u);if(!b){o.b.log("Unable to parse AAC frame");break}p+=b.length,c=b.sample.pts,u++}else m.a.isHeader(e,p)?(n=m.a.getID3Data(e,p),y.push({pts:c,dts:c,data:n}),p+=n.length):p++;this.remuxer.remux(a,{samples:[]},{samples:y,inputTimeScale:9e4},{samples:[]},t,r,i)},t.destroy=function(){},e}(),b=r(10),T={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],SamplesCoefficients:[[0,72,144,12],[0,0,0,0],[0,72,144,12],[0,144,144,12]],BytesInSlot:[0,1,1,4],appendFrame:function(e,t,r,i,a){if(!(r+24>t.length)){var n=this.parseHeader(t,r);if(n&&r+n.frameLength<=t.length){var s=i+a*(9e4*n.samplesPerFrame/n.sampleRate),o={unit:t.subarray(r,r+n.frameLength),pts:s,dts:s};return e.config=[],e.channelCount=n.channelCount,e.samplerate=n.sampleRate,e.samples.push(o),{sample:o,length:n.frameLength}}}},parseHeader:function(e,t){var r=e[t+1]>>3&3,i=e[t+1]>>1&3,a=e[t+2]>>4&15,n=e[t+2]>>2&3,s=e[t+2]>>1&1;if(1!==r&&0!==a&&15!==a&&3!==n){var o=3===r?3-i:3===i?3:4,l=1e3*T.BitratesMap[14*o+a-1],d=3===r?0:2===r?1:2,u=T.SamplingRateMap[3*d+n],c=e[t+3]>>6==3?1:2,h=T.SamplesCoefficients[r][i],f=T.BytesInSlot[i],g=8*h*f;return{sampleRate:u,channelCount:c,frameLength:parseInt(h*l/u+s,10)*f,samplesPerFrame:g}}},isHeaderPattern:function(e,t){return 255===e[t]&&224==(224&e[t+1])&&0!=(6&e[t+1])},isHeader:function(e,t){return!!(t+1<e.length&&this.isHeaderPattern(e,t))},probe:function(e,t){if(t+1<e.length&&this.isHeaderPattern(e,t)){var r=this.parseHeader(e,t),i=4;r&&r.frameLength&&(i=r.frameLength);var a=t+i;if(a===e.length||a+1<e.length&&this.isHeaderPattern(e,a))return!0}return!1}},E=T,S=function(){function e(e){this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}var t=e.prototype;return t.loadWord=function(){var e=this.data,t=this.bytesAvailable,r=e.byteLength-t,i=new Uint8Array(4),a=Math.min(4,t);if(0===a)throw new Error("no bytes available");i.set(e.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},t.skipBits=function(e){var t;this.bitsAvailable>e?(this.word<<=e,this.bitsAvailable-=e):(e-=this.bitsAvailable,e-=(t=e>>3)>>3,this.bytesAvailable-=t,this.loadWord(),this.word<<=e,this.bitsAvailable-=e)},t.readBits=function(e){var t=Math.min(this.bitsAvailable,e),r=this.word>>>32-t;return e>32&&o.b.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=t,this.bitsAvailable>0?this.word<<=t:this.bytesAvailable>0&&this.loadWord(),(t=e-t)>0&&this.bitsAvailable?r<<t|this.readBits(t):r},t.skipLZ=function(){var e;for(e=0;e<this.bitsAvailable;++e)if(0!=(this.word&2147483648>>>e))return this.word<<=e,this.bitsAvailable-=e,e;return this.loadWord(),e+this.skipLZ()},t.skipUEG=function(){this.skipBits(1+this.skipLZ())},t.skipEG=function(){this.skipBits(1+this.skipLZ())},t.readUEG=function(){var e=this.skipLZ();return this.readBits(e+1)-1},t.readEG=function(){var e=this.readUEG();return 1&e?1+e>>>1:-1*(e>>>1)},t.readBoolean=function(){return 1===this.readBits(1)},t.readUByte=function(){return this.readBits(8)},t.readUShort=function(){return this.readBits(16)},t.readUInt=function(){return this.readBits(32)},t.skipScalingList=function(e){var t,r=8,i=8;for(t=0;t<e;t++)0!==i&&(i=(r+this.readEG()+256)%256),r=0===i?r:i},t.readSPS=function(){var e,t,r,i,a,n,s,o=0,l=0,d=0,u=0,c=this.readUByte.bind(this),h=this.readBits.bind(this),f=this.readUEG.bind(this),g=this.readBoolean.bind(this),p=this.skipBits.bind(this),v=this.skipEG.bind(this),m=this.skipUEG.bind(this),y=this.skipScalingList.bind(this);if(c(),e=c(),h(5),p(3),c(),m(),100===e||110===e||122===e||244===e||44===e||83===e||86===e||118===e||128===e){var b=f();if(3===b&&p(1),m(),m(),p(1),g())for(n=3!==b?8:12,s=0;s<n;s++)g()&&y(s<6?16:64)}m();var T=f();if(0===T)f();else if(1===T)for(p(1),v(),v(),t=f(),s=0;s<t;s++)v();m(),p(1),r=f(),i=f(),0===(a=h(1))&&p(1),p(1),g()&&(o=f(),l=f(),d=f(),u=f());var E=[1,1];if(g()&&g())switch(c()){case 1:E=[1,1];break;case 2:E=[12,11];break;case 3:E=[10,11];break;case 4:E=[16,11];break;case 5:E=[40,33];break;case 6:E=[24,11];break;case 7:E=[20,11];break;case 8:E=[32,11];break;case 9:E=[80,33];break;case 10:E=[18,11];break;case 11:E=[15,11];break;case 12:E=[64,33];break;case 13:E=[160,99];break;case 14:E=[4,3];break;case 15:E=[3,2];break;case 16:E=[2,1];break;case 255:E=[c()<<8|c(),c()<<8|c()]}return{width:Math.ceil(16*(r+1)-2*o-2*l),height:(2-a)*(i+1)*16-(a?2:4)*(d+u),pixelRatio:E}},t.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},e}(),_=function(){function e(e,t,r,i){this.decryptdata=r,this.discardEPB=i,this.decrypter=new n.a(e,t,{removePKCS7Padding:!1})}var t=e.prototype;return t.decryptBuffer=function(e,t){this.decrypter.decrypt(e,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,t)},t.decryptAacSample=function(e,t,r,i){var a=e[t].unit,n=a.subarray(16,a.length-a.length%16),s=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),o=this;this.decryptBuffer(s,(function(n){n=new Uint8Array(n),a.set(n,16),i||o.decryptAacSamples(e,t+1,r)}))},t.decryptAacSamples=function(e,t,r){for(;;t++){if(t>=e.length)return void r();if(!(e[t].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(e,t,r,i),!i)return}}},t.getAvcEncryptedData=function(e){for(var t=16*Math.floor((e.length-48)/160)+16,r=new Int8Array(t),i=0,a=32;a<=e.length-16;a+=160,i+=16)r.set(e.subarray(a,a+16),i);return r},t.getAvcDecryptedUnit=function(e,t){t=new Uint8Array(t);for(var r=0,i=32;i<=e.length-16;i+=160,r+=16)e.set(t.subarray(r,r+16),i);return e},t.decryptAvcSample=function(e,t,r,i,a,n){var s=this.discardEPB(a.data),o=this.getAvcEncryptedData(s),l=this;this.decryptBuffer(o.buffer,(function(o){a.data=l.getAvcDecryptedUnit(s,o),n||l.decryptAvcSamples(e,t,r+1,i)}))},t.decryptAvcSamples=function(e,t,r,i){for(;;t++,r=0){if(t>=e.length)return void i();for(var a=e[t].units;!(r>=a.length);r++){var n=a[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var s=this.decrypter.isSync();if(this.decryptAvcSample(e,t,r,i,n,s),!s)return}}}},e}(),R={video:1,audio:2,id3:3,text:4},A=function(){function e(e,t,r,i){this.observer=e,this.config=r,this.typeSupported=i,this.remuxer=t,this.sampleAes=null,this.pmtUnknownTypes={}}var t=e.prototype;return t.setDecryptData=function(e){null!=e&&null!=e.key&&"SAMPLE-AES"===e.method?this.sampleAes=new _(this.observer,this.config,e,this.discardEPB):this.sampleAes=null},e.probe=function(t){var r=e._syncOffset(t);return!(r<0)&&(r&&o.b.warn("MPEG2-TS detected but first sync word found @ offset "+r+", junk ahead ?"),!0)},e._syncOffset=function(e){for(var t=Math.min(1e3,e.length-564),r=0;r<t;){if(71===e[r]&&71===e[r+188]&&71===e[r+376])return r;r++}return-1},e.createTrack=function(e,t){return{container:"video"===e||"audio"===e?"video/mp2t":void 0,type:e,id:R[e],pid:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],dropped:"video"===e?0:void 0,isAAC:"audio"===e||void 0,duration:"audio"===e?t:void 0}},t.resetInitSegment=function(t,r,i,a){this.pmtParsed=!1,this._pmtId=-1,this.pmtUnknownTypes={},this._avcTrack=e.createTrack("video",a),this._audioTrack=e.createTrack("audio",a),this._id3Track=e.createTrack("id3",a),this._txtTrack=e.createTrack("text",a),this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=r,this.videoCodec=i,this._duration=a},t.resetTimeStamp=function(){},t.append=function(t,r,n,s){var l,d,u,c,h,f=t.length,g=!1;this.pmtUnknownTypes={},this.contiguous=n;var p=this.pmtParsed,v=this._avcTrack,m=this._audioTrack,y=this._id3Track,b=v.pid,T=m.pid,E=y.pid,S=this._pmtId,_=v.pesData,R=m.pesData,A=y.pesData,k=this._parsePAT,w=this._parsePMT.bind(this),L=this._parsePES,D=this._parseAVCPES.bind(this),O=this._parseAACPES.bind(this),C=this._parseMPEGPES.bind(this),I=this._parseID3PES.bind(this),P=e._syncOffset(t);for(f-=(f+P)%188,l=P;l<f;l+=188)if(71===t[l]){if(d=!!(64&t[l+1]),u=((31&t[l+1])<<8)+t[l+2],(48&t[l+3])>>4>1){if((c=l+5+t[l+4])===l+188)continue}else c=l+4;switch(u){case b:d&&(_&&(h=L(_))&&D(h,!1),_={data:[],size:0}),_&&(_.data.push(t.subarray(c,l+188)),_.size+=l+188-c);break;case T:d&&(R&&(h=L(R))&&(m.isAAC?O(h):C(h)),R={data:[],size:0}),R&&(R.data.push(t.subarray(c,l+188)),R.size+=l+188-c);break;case E:d&&(A&&(h=L(A))&&I(h),A={data:[],size:0}),A&&(A.data.push(t.subarray(c,l+188)),A.size+=l+188-c);break;case 0:d&&(c+=t[c]+1),S=this._pmtId=k(t,c);break;case S:d&&(c+=t[c]+1);var x=w(t,c,!0===this.typeSupported.mpeg||!0===this.typeSupported.mp3,null!=this.sampleAes);(b=x.avc)>0&&(v.pid=b),(T=x.audio)>0&&(m.pid=T,m.isAAC=x.isAAC),(E=x.id3)>0&&(y.pid=E),g&&!p&&(o.b.log("reparse from beginning"),g=!1,l=P-188),p=this.pmtParsed=!0;break;case 17:case 8191:break;default:g=!0}}else this.observer.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});_&&(h=L(_))?(D(h,!0),v.pesData=null):v.pesData=_,R&&(h=L(R))?(m.isAAC?O(h):C(h),m.pesData=null):(R&&R.size&&o.b.log("last AAC PES packet truncated,might overlap between fragments"),m.pesData=R),A&&(h=L(A))?(I(h),y.pesData=null):y.pesData=A,null==this.sampleAes?this.remuxer.remux(m,v,y,this._txtTrack,r,n,s):this.decryptAndRemux(m,v,y,this._txtTrack,r,n,s)},t.decryptAndRemux=function(e,t,r,i,a,n,s){if(e.samples&&e.isAAC){var o=this;this.sampleAes.decryptAacSamples(e.samples,0,(function(){o.decryptAndRemuxAvc(e,t,r,i,a,n,s)}))}else this.decryptAndRemuxAvc(e,t,r,i,a,n,s)},t.decryptAndRemuxAvc=function(e,t,r,i,a,n,s){if(t.samples){var o=this;this.sampleAes.decryptAvcSamples(t.samples,0,0,(function(){o.remuxer.remux(e,t,r,i,a,n,s)}))}else this.remuxer.remux(e,t,r,i,a,n,s)},t.destroy=function(){this._initPTS=this._initDTS=void 0,this._duration=0},t._parsePAT=function(e,t){return(31&e[t+10])<<8|e[t+11]},t._trackUnknownPmt=function(e,t,r){var i=this.pmtUnknownTypes[e]||0;return 0===i&&(this.pmtUnknownTypes[e]=0,t.call(o.b,r)),this.pmtUnknownTypes[e]++,i},t._parsePMT=function(e,t,r,i){var a,n,s={audio:-1,avc:-1,id3:-1,isAAC:!0};for(a=t+3+((15&e[t+1])<<8|e[t+2])-4,t+=12+((15&e[t+10])<<8|e[t+11]);t<a;){switch(n=(31&e[t+1])<<8|e[t+2],e[t]){case 207:if(!i){this._trackUnknownPmt(e[t],o.b.warn,"ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");break}case 15:-1===s.audio&&(s.audio=n);break;case 21:-1===s.id3&&(s.id3=n);break;case 219:if(!i){this._trackUnknownPmt(e[t],o.b.warn,"H.264 with AES-128-CBC slice encryption found in unencrypted stream");break}case 27:-1===s.avc&&(s.avc=n);break;case 3:case 4:r?-1===s.audio&&(s.audio=n,s.isAAC=!1):this._trackUnknownPmt(e[t],o.b.warn,"MPEG audio found, not supported in this browser");break;case 36:this._trackUnknownPmt(e[t],o.b.warn,"Unsupported HEVC stream type found");break;default:this._trackUnknownPmt(e[t],o.b.log,"Unknown stream type:"+e[t])}t+=5+((15&e[t+3])<<8|e[t+4])}return s},t._parsePES=function(e){var t,r,i,a,n,s,l,d,u=0,c=e.data;if(!e||0===e.size)return null;for(;c[0].length<19&&c.length>1;){var h=new Uint8Array(c[0].length+c[1].length);h.set(c[0]),h.set(c[1],c[0].length),c[0]=h,c.splice(1,1)}if(1===((t=c[0])[0]<<16)+(t[1]<<8)+t[2]){if((i=(t[4]<<8)+t[5])&&i>e.size-6)return null;if(192&(r=t[7])&&(s=536870912*(14&t[9])+4194304*(255&t[10])+16384*(254&t[11])+128*(255&t[12])+(254&t[13])/2,64&r?s-(l=536870912*(14&t[14])+4194304*(255&t[15])+16384*(254&t[16])+128*(255&t[17])+(254&t[18])/2)>54e5&&(o.b.warn(Math.round((s-l)/9e4)+"s delta between PTS and DTS, align them"),s=l):l=s),d=(a=t[8])+9,e.size<=d)return null;e.size-=d,n=new Uint8Array(e.size);for(var f=0,g=c.length;f<g;f++){var p=(t=c[f]).byteLength;if(d){if(d>p){d-=p;continue}t=t.subarray(d),p-=d,d=0}n.set(t,u),u+=p}return i&&(i-=a+3),{data:n,pts:s,dts:l,len:i}}return null},t.pushAccesUnit=function(e,t){if(e.units.length&&e.frame){var r=t.samples,i=r.length;if(isNaN(e.pts)){if(!i)return void t.dropped++;var a=r[i-1];e.pts=a.pts,e.dts=a.dts}!this.config.forceKeyFrameOnDiscontinuity||!0===e.key||t.sps&&(i||this.contiguous)?(e.id=i,r.push(e)):t.dropped++}e.debug.length&&o.b.log(e.pts+"/"+e.dts+":"+e.debug)},t._parseAVCPES=function(e,t){var r,i,a,n=this,s=this._avcTrack,o=this._parseAVCNALu(e.data),l=this.avcSample,d=!1,u=this.pushAccesUnit.bind(this),c=function(e,t,r,i){return{key:e,pts:t,dts:r,units:[],debug:i}};e.data=null,l&&o.length&&!s.audFound&&(u(l,s),l=this.avcSample=c(!1,e.pts,e.dts,"")),o.forEach((function(t){switch(t.type){case 1:i=!0,l||(l=n.avcSample=c(!0,e.pts,e.dts,"")),l.frame=!0;var o=t.data;if(d&&o.length>4){var h=new S(o).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(l.key=!0)}break;case 5:i=!0,l||(l=n.avcSample=c(!0,e.pts,e.dts,"")),l.key=!0,l.frame=!0;break;case 6:i=!0,(r=new S(n.discardEPB(t.data))).readUByte();for(var f=0,g=0,p=!1,v=0;!p&&r.bytesAvailable>1;){f=0;do{f+=v=r.readUByte()}while(255===v);g=0;do{g+=v=r.readUByte()}while(255===v);if(4===f&&0!==r.bytesAvailable){if(p=!0,181===r.readUByte())if(49===r.readUShort())if(1195456820===r.readUInt())if(3===r.readUByte()){var y=r.readUByte(),b=31&y,T=[y,r.readUByte()];for(a=0;a<b;a++)T.push(r.readUByte()),T.push(r.readUByte()),T.push(r.readUByte());n._insertSampleInOrder(n._txtTrack.samples,{type:3,pts:e.pts,bytes:T})}}else if(5===f&&0!==r.bytesAvailable){if(p=!0,g>16){var E=[];for(a=0;a<16;a++)E.push(r.readUByte().toString(16)),3!==a&&5!==a&&7!==a&&9!==a||E.push("-");var _=g-16,R=new Uint8Array(_);for(a=0;a<_;a++)R[a]=r.readUByte();n._insertSampleInOrder(n._txtTrack.samples,{pts:e.pts,payloadType:f,uuid:E.join(""),userDataBytes:R,userData:Object(m.b)(R.buffer)})}}else if(g<r.bytesAvailable)for(a=0;a<g;a++)r.readUByte()}break;case 7:if(i=!0,d=!0,!s.sps){var A=(r=new S(t.data)).readSPS();s.width=A.width,s.height=A.height,s.pixelRatio=A.pixelRatio,s.sps=[t.data],s.duration=n._duration;var k=t.data.subarray(1,4),w="avc1.";for(a=0;a<3;a++){var L=k[a].toString(16);L.length<2&&(L="0"+L),w+=L}s.codec=w}break;case 8:i=!0,s.pps||(s.pps=[t.data]);break;case 9:i=!1,s.audFound=!0,l&&u(l,s),l=n.avcSample=c(!1,e.pts,e.dts,"");break;case 12:i=!1;break;default:i=!1,l&&(l.debug+="unknown NAL "+t.type+" ")}l&&i&&l.units.push(t)})),t&&l&&(u(l,s),this.avcSample=null)},t._insertSampleInOrder=function(e,t){var r=e.length;if(r>0){if(t.pts>=e[r-1].pts)e.push(t);else for(var i=r-1;i>=0;i--)if(t.pts<e[i].pts){e.splice(i,0,t);break}}else e.push(t)},t._getLastNalUnit=function(){var e,t=this.avcSample;if(!t||0===t.units.length){var r=this._avcTrack.samples;t=r[r.length-1]}if(t){var i=t.units;e=i[i.length-1]}return e},t._parseAVCNALu=function(e){var t,r,i,a,n=0,s=e.byteLength,o=this._avcTrack,l=o.naluState||0,d=l,u=[],c=-1;for(-1===l&&(c=0,a=31&e[0],l=0,n=1);n<s;)if(t=e[n++],l)if(1!==l)if(t)if(1===t){if(c>=0)i={data:e.subarray(c,n-l-1),type:a},u.push(i);else{var h=this._getLastNalUnit();if(h&&(d&&n<=4-d&&h.state&&(h.data=h.data.subarray(0,h.data.byteLength-d)),(r=n-l-1)>0)){var f=new Uint8Array(h.data.byteLength+r);f.set(h.data,0),f.set(e.subarray(0,r),h.data.byteLength),h.data=f}}n<s?(c=n,a=31&e[n],l=0):l=-1}else l=0;else l=3;else l=t?0:2;else l=t?0:1;if(c>=0&&l>=0&&(i={data:e.subarray(c,s),type:a,state:l},u.push(i)),0===u.length){var g=this._getLastNalUnit();if(g){var p=new Uint8Array(g.data.byteLength+e.byteLength);p.set(g.data,0),p.set(e,g.data.byteLength),g.data=p}}return o.naluState=l,u},t.discardEPB=function(e){for(var t,r,i=e.byteLength,a=[],n=1;n<i-2;)0===e[n]&&0===e[n+1]&&3===e[n+2]?(a.push(n+2),n+=2):n++;if(0===a.length)return e;t=i-a.length,r=new Uint8Array(t);var s=0;for(n=0;n<t;s++,n++)s===a[0]&&(s++,a.shift()),r[n]=e[s];return r},t._parseAACPES=function(e){var t,r,n,s,l,d,u,c=this._audioTrack,f=e.data,m=e.pts,y=this.aacOverFlow,b=this.aacLastPTS;if(y){var T=new Uint8Array(y.byteLength+f.byteLength);T.set(y,0),T.set(f,y.byteLength),f=T}for(n=0,l=f.length;n<l-1&&!h(f,n);n++);if(n&&(n<l-1?(d="AAC PES did not start with ADTS header,offset:"+n,u=!1):(d="no ADTS header found in AAC PES",u=!0),o.b.warn("parsing error:"+d),this.observer.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:u,reason:d}),u))return;if(g(c,this.observer,f,n,this.audioCodec),r=0,t=p(c.samplerate),y&&b){var E=b+t;Math.abs(E-m)>1&&(o.b.log("AAC: align PTS for overlapping frames by "+Math.round((E-m)/90)),m=E)}for(;n<l;){if(h(f,n)){if(n+5<l){var S=v(c,f,n,m,r);if(S){n+=S.length,s=S.sample.pts,r++;continue}}break}n++}y=n<l?f.subarray(n,l):null,this.aacOverFlow=y,this.aacLastPTS=s},t._parseMPEGPES=function(e){for(var t=e.data,r=t.length,i=0,a=0,n=e.pts;a<r;)if(E.isHeader(t,a)){var s=E.appendFrame(this._audioTrack,t,a,n,i);if(!s)break;a+=s.length,i++}else a++},t._parseID3PES=function(e){this._id3Track.samples.push(e)},e}(),k=function(){function e(e,t,r){this.observer=e,this.config=r,this.remuxer=t}var t=e.prototype;return t.resetInitSegment=function(e,t,r,i){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:t,duration:i,inputTimeScale:9e4}},t.resetTimeStamp=function(){},e.probe=function(e){var t,r,i=m.a.getID3Data(e,0);if(i&&void 0!==m.a.getTimeStamp(i))for(t=i.length,r=Math.min(e.length-1,t+100);t<r;t++)if(E.probe(e,t))return o.b.log("MPEG Audio sync word found !"),!0;return!1},t.append=function(e,t,r,i){for(var a=m.a.getID3Data(e,0),n=m.a.getTimeStamp(a),s=void 0!==n?90*n:9e4*t,o=a.length,l=e.length,d=0,u=0,c=this._audioTrack,h=[{pts:s,dts:s,data:a}];o<l;)if(E.isHeader(e,o)){var f=E.appendFrame(c,e,o,s,d);if(!f)break;o+=f.length,u=f.sample.pts,d++}else m.a.isHeader(e,o)?(a=m.a.getID3Data(e,o),h.push({pts:u,dts:u,data:a}),o+=a.length):o++;this.remuxer.remux(c,{samples:[]},{samples:h,inputTimeScale:9e4},{samples:[]},t,r,i)},t.destroy=function(){},e}(),w=function(){function e(){}return e.getSilentFrame=function(e,t){switch(e){case"mp4a.40.2":if(1===t)return new Uint8Array([0,200,0,128,35,128]);if(2===t)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===t)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===t)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===t)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},e}(),L=Math.pow(2,32)-1,D=function(){function e(){}return e.init=function(){var t;for(t in e.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]},e.types)e.types.hasOwnProperty(t)&&(e.types[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);e.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);e.STTS=e.STSC=e.STCO=n,e.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),e.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),e.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),e.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var s=new Uint8Array([105,115,111,109]),o=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);e.FTYP=e.box(e.types.ftyp,s,l,s,o),e.DINF=e.box(e.types.dinf,e.box(e.types.dref,a))},e.box=function(e){for(var t,r=Array.prototype.slice.call(arguments,1),i=8,a=r.length,n=a;a--;)i+=r[a].byteLength;for((t=new Uint8Array(i))[0]=i>>24&255,t[1]=i>>16&255,t[2]=i>>8&255,t[3]=255&i,t.set(e,4),a=0,i=8;a<n;a++)t.set(r[a],i),i+=r[a].byteLength;return t},e.hdlr=function(t){return e.box(e.types.hdlr,e.HDLR_TYPES[t])},e.mdat=function(t){return e.box(e.types.mdat,t)},e.mdhd=function(t,r){r*=t;var i=Math.floor(r/(L+1)),a=Math.floor(r%(L+1));return e.box(e.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,85,196,0,0]))},e.mdia=function(t){return e.box(e.types.mdia,e.mdhd(t.timescale,t.duration),e.hdlr(t.type),e.minf(t))},e.mfhd=function(t){return e.box(e.types.mfhd,new Uint8Array([0,0,0,0,t>>24,t>>16&255,t>>8&255,255&t]))},e.minf=function(t){return"audio"===t.type?e.box(e.types.minf,e.box(e.types.smhd,e.SMHD),e.DINF,e.stbl(t)):e.box(e.types.minf,e.box(e.types.vmhd,e.VMHD),e.DINF,e.stbl(t))},e.moof=function(t,r,i){return e.box(e.types.moof,e.mfhd(t),e.traf(i,r))},e.moov=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trak(t[r]);return e.box.apply(null,[e.types.moov,e.mvhd(t[0].timescale,t[0].duration)].concat(i).concat(e.mvex(t)))},e.mvex=function(t){for(var r=t.length,i=[];r--;)i[r]=e.trex(t[r]);return e.box.apply(null,[e.types.mvex].concat(i))},e.mvhd=function(t,r){r*=t;var i=Math.floor(r/(L+1)),a=Math.floor(r%(L+1)),n=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,t>>24&255,t>>16&255,t>>8&255,255&t,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return e.box(e.types.mvhd,n)},e.sdtp=function(t){var r,i,a=t.samples||[],n=new Uint8Array(4+a.length);for(i=0;i<a.length;i++)r=a[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return e.box(e.types.sdtp,n)},e.stbl=function(t){return e.box(e.types.stbl,e.stsd(t),e.box(e.types.stts,e.STTS),e.box(e.types.stsc,e.STSC),e.box(e.types.stsz,e.STSZ),e.box(e.types.stco,e.STCO))},e.avc1=function(t){var r,i,a,n=[],s=[];for(r=0;r<t.sps.length;r++)a=(i=t.sps[r]).byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(i));for(r=0;r<t.pps.length;r++)a=(i=t.pps[r]).byteLength,s.push(a>>>8&255),s.push(255&a),s=s.concat(Array.prototype.slice.call(i));var o=e.box(e.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|t.sps.length].concat(n).concat([t.pps.length]).concat(s))),l=t.width,d=t.height,u=t.pixelRatio[0],c=t.pixelRatio[1];return e.box(e.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,d>>8&255,255&d,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o,e.box(e.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),e.box(e.types.pasp,new Uint8Array([u>>24,u>>16&255,u>>8&255,255&u,c>>24,c>>16&255,c>>8&255,255&c])))},e.esds=function(e){var t=e.config.length;return new Uint8Array([0,0,0,0,3,23+t,0,1,0,4,15+t,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([t]).concat(e.config).concat([6,1,2]))},e.mp4a=function(t){var r=t.samplerate;return e.box(e.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),e.box(e.types.esds,e.esds(t)))},e.mp3=function(t){var r=t.samplerate;return e.box(e.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,t.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},e.stsd=function(t){return"audio"===t.type?t.isAAC||"mp3"!==t.codec?e.box(e.types.stsd,e.STSD,e.mp4a(t)):e.box(e.types.stsd,e.STSD,e.mp3(t)):e.box(e.types.stsd,e.STSD,e.avc1(t))},e.tkhd=function(t){var r=t.id,i=t.duration*t.timescale,a=t.width,n=t.height,s=Math.floor(i/(L+1)),o=Math.floor(i%(L+1));return e.box(e.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,s>>24,s>>16&255,s>>8&255,255&s,o>>24,o>>16&255,o>>8&255,255&o,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,255&a,0,0,n>>8&255,255&n,0,0]))},e.traf=function(t,r){var i=e.sdtp(t),a=t.id,n=Math.floor(r/(L+1)),s=Math.floor(r%(L+1));return e.box(e.types.traf,e.box(e.types.tfhd,new Uint8Array([0,0,0,0,a>>24,a>>16&255,a>>8&255,255&a])),e.box(e.types.tfdt,new Uint8Array([1,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,s>>24,s>>16&255,s>>8&255,255&s])),e.trun(t,i.length+16+20+8+16+8+8),i)},e.trak=function(t){return t.duration=t.duration||4294967295,e.box(e.types.trak,e.tkhd(t),e.mdia(t))},e.trex=function(t){var r=t.id;return e.box(e.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},e.trun=function(t,r){var i,a,n,s,o,l,d=t.samples||[],u=d.length,c=12+16*u,h=new Uint8Array(c);for(r+=8+c,h.set([0,0,15,1,u>>>24&255,u>>>16&255,u>>>8&255,255&u,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<u;i++)n=(a=d[i]).duration,s=a.size,o=a.flags,l=a.cts,h.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,s>>>24&255,s>>>16&255,s>>>8&255,255&s,o.isLeading<<2|o.dependsOn,o.isDependedOn<<6|o.hasRedundancy<<4|o.paddingValue<<1|o.isNonSync,61440&o.degradPrio,15&o.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);return e.box(e.types.trun,h)},e.initSegment=function(t){e.types||e.init();var r,i=e.moov(t);return(r=new Uint8Array(e.FTYP.byteLength+i.byteLength)).set(e.FTYP),r.set(i,e.FTYP.byteLength),r},e}();function O(e,t,r,i){void 0===r&&(r=1),void 0===i&&(i=!1);var a=e*t*r;return i?Math.round(a):a}function C(e,t){return void 0===t&&(t=!1),O(e,1e3,1/9e4,t)}function I(e,t){return void 0===t&&(t=1),O(e,9e4,1/t)}var P=I(10),x=I(.2),M=null;function F(e,t){var r;if(void 0===t)return e;for(r=t<e?-8589934592:8589934592;Math.abs(e-t)>4294967296;)e+=r;return e}var U,N=function(){function e(e,t,r,i){if(this.observer=e,this.config=t,this.typeSupported=r,this.ISGenerated=!1,null===M){var a=navigator.userAgent.match(/Chrome\/(\d+)/i);M=a?parseInt(a[1]):0}}var t=e.prototype;return t.destroy=function(){},t.resetTimeStamp=function(e){this._initPTS=this._initDTS=e},t.resetInitSegment=function(){this.ISGenerated=!1},t.getVideoStartPts=function(e){var t=!1,r=e.reduce((function(e,r){var i=r.pts-e;return i<-4294967296?(t=!0,e):i>0?e:r.pts}),e[0].pts);return t&&o.b.debug("PTS rollover detected"),r},t.remux=function(e,t,r,a,n,s,l){if(this.ISGenerated||this.generateIS(e,t,n),this.ISGenerated){var d=e.samples.length,u=t.samples.length,c=n,h=n;if(d&&u){var f=this.getVideoStartPts(t.samples),g=(e.samples[0].pts-f)/t.inputTimeScale;c+=Math.max(0,g),h+=Math.max(0,-g)}if(d){e.timescale||(o.b.warn("regenerate InitSegment as audio detected"),this.generateIS(e,t,n));var p,v=this.remuxAudio(e,c,s,l);if(u)v&&(p=v.endPTS-v.startPTS),t.timescale||(o.b.warn("regenerate InitSegment as video detected"),this.generateIS(e,t,n)),this.remuxVideo(t,h,s,p)}else if(u){var m=this.remuxVideo(t,h,s,0,l);m&&e.codec&&this.remuxEmptyAudio(e,c,s,m)}}r.samples.length&&this.remuxID3(r,n),a.samples.length&&this.remuxText(a,n),this.observer.trigger(i.a.FRAG_PARSED)},t.generateIS=function(e,t,r){var n,s,l=this.observer,d=e.samples,u=t.samples,c=this.typeSupported,h="audio/mp4",f={},g={tracks:f},p=void 0===this._initPTS;if(p&&(n=s=1/0),e.config&&d.length&&(e.timescale=e.samplerate,o.b.log("audio sampling rate : "+e.samplerate),e.isAAC||(c.mpeg?(h="audio/mpeg",e.codec=""):c.mp3&&(e.codec="mp3")),f.audio={container:h,codec:e.codec,initSegment:!e.isAAC&&c.mpeg?new Uint8Array:D.initSegment([e]),metadata:{channelCount:e.channelCount}},p&&(n=s=d[0].pts-Math.round(e.inputTimeScale*r))),t.sps&&t.pps&&u.length){var v=t.inputTimeScale;if(t.timescale=v,f.video={container:"video/mp4",codec:t.codec,initSegment:D.initSegment([t]),metadata:{width:t.width,height:t.height}},p){var m=this.getVideoStartPts(u),y=Math.round(v*r);s=Math.min(s,u[0].dts-y),n=Math.min(n,m-y),this.observer.trigger(i.a.INIT_PTS_FOUND,{initPTS:n})}}else p&&f.audio&&this.observer.trigger(i.a.INIT_PTS_FOUND,{initPTS:n});Object.keys(f).length?(l.trigger(i.a.FRAG_PARSING_INIT_SEGMENT,g),this.ISGenerated=!0,p&&(this._initPTS=n,this._initDTS=s)):l.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})},t.remuxVideo=function(e,t,r,n){var s,l,d,u,c,h=e.timescale,f=e.samples,g=[],p=f.length,v=this._initPTS,m=8,y=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY,T=0,E=!1,S=this.nextAvcDts;if(0!==p){if(!r)S=t*h-(f[0].pts-F(f[0].dts,f[0].pts));for(var _=0;_<p;_++){var R=f[_];R.pts=F(R.pts-v,S),R.dts=F(R.dts-v,S),R.dts>R.pts&&(T=Math.max(Math.min(T,R.pts-R.dts),-1*x)),R.dts<f[_>0?_-1:_].dts&&(E=!0)}E&&f.sort((function(e,t){var r=e.dts-t.dts,i=e.pts-t.pts;return r||i||e.id-t.id})),u=f[0].dts,c=f[p-1].dts;var A=Math.round((c-u)/(p-1));if(T<0){if(T<-2*A){o.b.warn("PTS < DTS detected in video samples, offsetting DTS to PTS "+C(-A,!0)+" ms");for(var k=0;k<p;k++)f[k].dts=f[k].pts-A}else{o.b.warn("PTS < DTS detected in video samples, shifting DTS by "+C(T,!0)+" ms to overcome this issue");for(var w=0;w<p;w++)f[w].dts=f[w].dts+T}u=f[0].dts,c=f[p-1].dts}if(r){var L=u-S,O=L>A;if(O||L<-1){O?o.b.warn("AVC: "+C(L,!0)+" ms ("+L+"dts) hole between fragments detected, filling it"):o.b.warn("AVC: "+C(-L,!0)+" ms ("+L+"dts) overlapping between fragments detected"),u=S;var I=f[0].pts-L;f[0].dts=u,f[0].pts=I,o.b.log("Video: First PTS/DTS adjusted: "+C(I,!0)+"/"+C(u,!0)+", delta: "+C(L,!0)+" ms")}}M&&M<75&&(u=Math.max(0,u));for(var P=0,U=0,N=0;N<p;N++){for(var B=f[N],G=B.units,K=G.length,j=0,H=0;H<K;H++)j+=G[H].data.length;U+=j,P+=K,B.length=j,B.dts=Math.max(B.dts,u),B.pts=Math.max(B.pts,B.dts,0),y=Math.min(B.pts,y),b=Math.max(B.pts,b)}c=f[p-1].dts;var V=U+4*P+8;try{l=new Uint8Array(V)}catch(e){return void this.observer.trigger(i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:V,reason:"fail allocating video mdat "+V})}var Y=new DataView(l.buffer);Y.setUint32(0,V),l.set(D.types.mdat,4);for(var W=0;W<p;W++){for(var q,X=f[W],z=X.units,Q=0,$=0,J=z.length;$<J;$++){var Z=z[$],ee=Z.data,te=Z.data.byteLength;Y.setUint32(m,te),m+=4,l.set(ee,m),m+=te,Q+=4+te}if(W<p-1)s=f[W+1].dts-X.dts;else{var re=this.config,ie=X.dts-f[W>0?W-1:W].dts;if(re.stretchShortVideoTrack){var ae=re.maxBufferHole,ne=Math.floor(ae*h),se=(n?y+n*h:this.nextAudioPts)-X.pts;se>ne?((s=se-ie)<0&&(s=ie),o.b.log("It is approximately "+C(se,!1)+" ms to the next segment; using duration "+C(s,!1)+" ms for the last video frame.")):s=ie}else s=ie}q=Math.round(X.pts-X.dts),g.push({size:Q,duration:s,cts:q,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:X.key?2:1,isNonSync:X.key?0:1}})}this.nextAvcDts=c+s;var oe=e.dropped;if(e.nbNalu=0,e.dropped=0,g.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var le=g[0].flags;le.dependsOn=2,le.isNonSync=0}e.samples=g,d=D.moof(e.sequenceNumber++,u,e),e.samples=[];var de={data1:d,data2:l,startPTS:y/h,endPTS:(b+s)/h,startDTS:u/h,endDTS:this.nextAvcDts/h,type:"video",hasAudio:!1,hasVideo:!0,nb:g.length,dropped:oe};return this.observer.trigger(i.a.FRAG_PARSING_DATA,de),de}},t.remuxAudio=function(e,t,r,n){var s,l,d,u,c,h,f=e.inputTimeScale,g=e.timescale,p=f/g,v=(e.isAAC?1024:1152)*p,m=this._initPTS,y=!e.isAAC&&this.typeSupported.mpeg,b=y?0:8,T=e.samples,E=[],S=this.nextAudioPts;if(r|=T.length&&S&&(n&&Math.abs(t-S/f)<.1||Math.abs(T[0].pts-S-m)<20*v),T.forEach((function(e){e.pts=e.dts=F(e.pts-m,t*f)})),0!==(T=T.filter((function(e){return e.pts>=0}))).length){if(r||(S=n?Math.max(0,t*f):T[0].pts),e.isAAC)for(var _=this.config.maxAudioFramesDrift,R=0,A=S;R<T.length;){var k=T[R],L=k.pts,O=L-A;if(O<=-_*v)r||R>0?(o.b.warn("Dropping 1 audio frame @ "+C(A,!0)/1e3+"s due to "+C(O,!0)+" ms overlap."),T.splice(R,1)):(o.b.warn("Audio frame @ "+C(L,!0)/1e3+"s overlaps nextAudioPts by "+C(O,!0)+" ms."),A=L+v,R++);else if(O>=_*v&&O<P&&A){var I=Math.round(O/v);o.b.warn("Injecting "+I+" audio frames @ "+C(A,!0)/1e3+"s due to "+C(O,!0)+" ms gap.");for(var x=0;x<I;x++){var M=Math.max(A,0);(l=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(o.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),l=k.unit.subarray()),T.splice(R,0,{unit:l,pts:M,dts:M}),A+=v,R++}k.pts=k.dts=A,A+=v,R++}else Math.abs(O),k.pts=k.dts=A,A+=v,R++}for(var U=T.length,N=0;U--;)N+=T[U].unit.byteLength;for(var B=0,G=T.length;B<G;B++){var K=T[B],j=K.unit,H=K.pts;if(void 0!==h&&s)s.duration=Math.round((H-h)/p);else{var V=H-S,Y=0;if(r&&e.isAAC&&V){if(V>0&&V<P)Y=Math.round((H-S)/v),o.b.log(C(V,!0)+" ms hole between AAC samples detected,filling it"),Y>0&&((l=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(l=j.subarray()),N+=Y*l.length);else if(V<-12){o.b.log("drop overlapping AAC sample, expected/parsed/delta: "+C(S,!0)+" ms / "+C(H,!0)+" ms / "+C(-V,!0)+" ms"),N-=j.byteLength;continue}H=S}if(c=H,!(N>0))return;N+=b;try{d=new Uint8Array(N)}catch(e){return void this.observer.trigger(i.a.ERROR,{type:a.b.MUX_ERROR,details:a.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:N,reason:"fail allocating audio mdat "+N})}y||(new DataView(d.buffer).setUint32(0,N),d.set(D.types.mdat,4));for(var W=0;W<Y;W++)(l=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount))||(o.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),l=j.subarray()),d.set(l,b),b+=l.byteLength,s={size:l.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},E.push(s)}d.set(j,b);var q=j.byteLength;b+=q,s={size:q,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},E.push(s),h=H}var X=0;if((U=E.length)>=2&&(X=E[U-2].duration,s.duration=X),U){this.nextAudioPts=S=h+p*X,e.samples=E,u=y?new Uint8Array:D.moof(e.sequenceNumber++,c/p,e),e.samples=[];var z=c/f,Q=S/f,$={data1:u,data2:d,startPTS:z,endPTS:Q,startDTS:z,endDTS:Q,type:"audio",hasAudio:!0,hasVideo:!1,nb:U};return this.observer.trigger(i.a.FRAG_PARSING_DATA,$),$}return null}},t.remuxEmptyAudio=function(e,t,r,i){var a=e.inputTimeScale,n=a/(e.samplerate?e.samplerate:a),s=this.nextAudioPts,l=(void 0!==s?s:i.startDTS*a)+this._initDTS,d=i.endDTS*a+this._initDTS,u=1024*n,c=Math.ceil((d-l)/u),h=w.getSilentFrame(e.manifestCodec||e.codec,e.channelCount);if(o.b.warn("remux empty Audio"),h){for(var f=[],g=0;g<c;g++){var p=l+g*u;f.push({unit:h,pts:p,dts:p})}e.samples=f,this.remuxAudio(e,t,r)}else o.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")},t.remuxID3=function(e,t){var r=e.samples.length;if(r){for(var a=e.inputTimeScale,n=this._initPTS,s=this._initDTS,o=0;o<r;o++){var l=e.samples[o];l.pts=F(l.pts-n,t*a)/a,l.dts=F(l.dts-s,t*a)/a}this.observer.trigger(i.a.FRAG_PARSING_METADATA,{samples:e.samples}),e.samples=[]}},t.remuxText=function(e,t){var r=e.samples.length,a=e.inputTimeScale,n=this._initPTS;if(r){for(var s=0;s<r;s++){var o=e.samples[s];o.pts=F(o.pts-n,t*a)/a}e.samples.sort((function(e,t){return e.pts-t.pts})),this.observer.trigger(i.a.FRAG_PARSING_USERDATA,{samples:e.samples})}e.samples=[]},e}(),B=function(){function e(e){this.observer=e}var t=e.prototype;return t.destroy=function(){},t.resetTimeStamp=function(){},t.resetInitSegment=function(){},t.remux=function(e,t,r,a,n,s,o,l){var d=this.observer,u="";e&&(u+="audio"),t&&(u+="video"),d.trigger(i.a.FRAG_PARSING_DATA,{data1:l,startPTS:n,startDTS:n,type:u,hasAudio:!!e,hasVideo:!!t,nb:1,dropped:0}),d.trigger(i.a.FRAG_PARSED)},e}(),G=Object(l.a)();try{U=G.performance.now.bind(G.performance)}catch(e){o.b.debug("Unable to use Performance API on this environment"),U=G.Date.now}var K=function(){function e(e,t,r,i){this.observer=e,this.typeSupported=t,this.config=r,this.vendor=i}var t=e.prototype;return t.destroy=function(){var e=this.demuxer;e&&e.destroy()},t.push=function(e,t,r,a,s,o,l,d,u,c,h,f){var g=this;if(e.byteLength>0&&null!=t&&null!=t.key&&"AES-128"===t.method){var p=this.decrypter;null==p&&(p=this.decrypter=new n.a(this.observer,this.config));var v=U();p.decrypt(e,t.key.buffer,t.iv.buffer,(function(e){var n=U();g.observer.trigger(i.a.FRAG_DECRYPTED,{stats:{tstart:v,tdecrypt:n}}),g.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),a,s,o,l,d,u,c,h,f)}))}else this.pushDecrypted(new Uint8Array(e),t,new Uint8Array(r),a,s,o,l,d,u,c,h,f)},t.pushDecrypted=function(e,t,r,n,s,o,l,d,u,c,h,f){var g=this.demuxer,p=this.remuxer;if(!g||l||d){for(var v,m=this.observer,T=this.typeSupported,E=this.config,S=[{demux:A,remux:N},{demux:b.a,remux:B},{demux:y,remux:N},{demux:k,remux:N}],_=0,R=S.length;_<R&&!(v=S[_]).demux.probe(e);_++);if(!v)return void m.trigger(i.a.ERROR,{type:a.b.MEDIA_ERROR,details:a.a.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});p&&p instanceof v.remux||(p=new v.remux(m,E,T,this.vendor)),g&&g instanceof v.demux||(g=new v.demux(m,p,E,T),this.probe=v.demux.probe),this.demuxer=g,this.remuxer=p}(l||d)&&(g.resetInitSegment(r,n,s,c),p.resetInitSegment()),l&&(g.resetTimeStamp(f),p.resetTimeStamp(f)),"function"==typeof g.setDecryptData&&g.setDecryptData(t),g.append(e,o,u,h)},e}();t.a=K},function(e,t,r){"use strict";var i=r(0),a=r(1),n=Math.pow(2,32)-1,s=function(){function e(e,t){this.observer=e,this.remuxer=t}var t=e.prototype;return t.resetTimeStamp=function(e){this.initPTS=e},t.resetInitSegment=function(t,r,i,n){if(t&&t.byteLength){var s=this.initData=e.parseInitSegment(t);null==r&&(r="mp4a.40.5"),null==i&&(i="avc1.42e01e");var o={};s.audio&&s.video?o.audiovideo={container:"video/mp4",codec:r+","+i,initSegment:n?t:null}:(s.audio&&(o.audio={container:"audio/mp4",codec:r,initSegment:n?t:null}),s.video&&(o.video={container:"video/mp4",codec:i,initSegment:n?t:null})),this.observer.trigger(a.a.FRAG_PARSING_INIT_SEGMENT,{tracks:o})}else r&&(this.audioCodec=r),i&&(this.videoCodec=i)},e.probe=function(t){return e.findBox({data:t,start:0,end:Math.min(t.length,16384)},["moof"]).length>0},e.bin2str=function(e){return String.fromCharCode.apply(null,e)},e.readUint16=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<8|e[t+1];return r<0?65536+r:r},e.readUint32=function(e,t){e.data&&(t+=e.start,e=e.data);var r=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3];return r<0?4294967296+r:r},e.writeUint32=function(e,t,r){e.data&&(t+=e.start,e=e.data),e[t]=r>>24,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r},e.findBox=function(t,r){var i,a,n,s,o,l,d=[];if(t.data?(o=t.start,n=t.end,t=t.data):(o=0,n=t.byteLength),!r.length)return null;for(i=o;i<n;)l=(a=e.readUint32(t,i))>1?i+a:n,e.bin2str(t.subarray(i+4,i+8))===r[0]&&(1===r.length?d.push({data:t,start:i+8,end:l}):(s=e.findBox({data:t,start:i+8,end:l},r.slice(1))).length&&(d=d.concat(s))),i=l;return d},e.parseSegmentIndex=function(t){var r,i=e.findBox(t,["moov"])[0],a=i?i.end:null,n=0,s=e.findBox(t,["sidx"]);if(!s||!s[0])return null;r=[];var o=(s=s[0]).data[0];n=0===o?8:16;var l=e.readUint32(s,n);n+=4;n+=0===o?8:16,n+=2;var d=s.end+0,u=e.readUint16(s,n);n+=2;for(var c=0;c<u;c++){var h=n,f=e.readUint32(s,h);h+=4;var g=2147483647&f;if(1===(2147483648&f)>>>31)return void console.warn("SIDX has hierarchical references (not supported)");var p=e.readUint32(s,h);h+=4,r.push({referenceSize:g,subsegmentDuration:p,info:{duration:p/l,start:d,end:d+g-1}}),d+=g,n=h+=4}return{earliestPresentationTime:0,timescale:l,version:o,referencesCount:u,references:r,moovEndOffset:a}},e.parseInitSegment=function(t){var r=[];return e.findBox(t,["moov","trak"]).forEach((function(t){var a=e.findBox(t,["tkhd"])[0];if(a){var n=a.data[a.start],s=0===n?12:20,o=e.readUint32(a,s),l=e.findBox(t,["mdia","mdhd"])[0];if(l){s=0===(n=l.data[l.start])?12:20;var d=e.readUint32(l,s),u=e.findBox(t,["mdia","hdlr"])[0];if(u){var c={soun:"audio",vide:"video"}[e.bin2str(u.data.subarray(u.start+8,u.start+12))];if(c){var h=e.findBox(t,["mdia","minf","stbl","stsd"]);if(h.length){h=h[0];var f=e.bin2str(h.data.subarray(h.start+12,h.start+16));i.b.log("MP4Demuxer:"+c+":"+f+" found")}r[o]={timescale:d,type:c},r[c]={timescale:d,id:o}}}}}})),r},e.getStartDTS=function(t,r){var i,a,n;return i=e.findBox(r,["moof","traf"]),a=[].concat.apply([],i.map((function(r){return e.findBox(r,["tfhd"]).map((function(i){var a,n;return a=e.readUint32(i,4),n=t[a].timescale||9e4,e.findBox(r,["tfdt"]).map((function(t){var r,i;return r=t.data[t.start],i=e.readUint32(t,4),1===r&&(i*=Math.pow(2,32),i+=e.readUint32(t,8)),i}))[0]/n}))}))),n=Math.min.apply(null,a),isFinite(n)?n:0},e.offsetStartDTS=function(t,r,i){e.findBox(r,["moof","traf"]).map((function(r){return e.findBox(r,["tfhd"]).map((function(a){var s=e.readUint32(a,4),o=t[s].timescale||9e4;e.findBox(r,["tfdt"]).map((function(t){var r=t.data[t.start],a=e.readUint32(t,4);if(0===r)e.writeUint32(t,4,a-i*o);else{a*=Math.pow(2,32),a+=e.readUint32(t,8),a-=i*o,a=Math.max(a,0);var s=Math.floor(a/(n+1)),l=Math.floor(a%(n+1));e.writeUint32(t,4,s),e.writeUint32(t,8,l)}}))}))}))},t.append=function(t,r,i,n){var s=this.initData;s||(this.resetInitSegment(t,this.audioCodec,this.videoCodec,!1),s=this.initData);var o,l=this.initPTS;if(void 0===l){var d=e.getStartDTS(s,t);this.initPTS=l=d-r,this.observer.trigger(a.a.INIT_PTS_FOUND,{initPTS:l})}e.offsetStartDTS(s,t,l),o=e.getStartDTS(s,t),this.remuxer.remux(s.audio,s.video,null,null,o,i,n,t)},t.destroy=function(){},e}();t.a=s},function(e,t,r){function i(e){var t={};function r(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){throw console.error(e),e};var i=r(r.s=ENTRY_MODULE);return i.default||i}function a(e){return(e+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function n(e,t,i){var n={};n[i]=[];var s=t.toString(),o=s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);if(!o)return n;for(var l,d=o[1],u=new RegExp("(\\\\n|\\W)"+a(d)+"\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)","g");l=u.exec(s);)"dll-reference"!==l[3]&&n[i].push(l[3]);for(u=new RegExp("\\("+a(d)+'\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',"g");l=u.exec(s);)e[l[2]]||(n[i].push(l[1]),e[l[2]]=r(l[1]).m),n[l[2]]=n[l[2]]||[],n[l[2]].push(l[4]);for(var c,h=Object.keys(n),f=0;f<h.length;f++)for(var g=0;g<n[h[f]].length;g++)c=n[h[f]][g],isNaN(1*c)||(n[h[f]][g]=1*n[h[f]][g]);return n}function s(e){return Object.keys(e).reduce((function(t,r){return t||e[r].length>0}),!1)}e.exports=function(e,t){t=t||{};var a={main:r.m},o=t.all?{main:Object.keys(a.main)}:function(e,t){for(var r={main:[t]},i={main:[]},a={main:{}};s(r);)for(var o=Object.keys(r),l=0;l<o.length;l++){var d=o[l],u=r[d].pop();if(a[d]=a[d]||{},!a[d][u]&&e[d][u]){a[d][u]=!0,i[d]=i[d]||[],i[d].push(u);for(var c=n(e,e[d][u],d),h=Object.keys(c),f=0;f<h.length;f++)r[h[f]]=r[h[f]]||[],r[h[f]]=r[h[f]].concat(c[h[f]])}}return i}(a,e),l="";Object.keys(o).filter((function(e){return"main"!==e})).forEach((function(e){for(var t=0;o[e][t];)t++;o[e].push(t),a[e][t]="(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",l=l+"var "+e+" = ("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+o[e].map((function(t){return JSON.stringify(t)+": "+a[e][t].toString()})).join(",")+"});\n"})),l=l+"new (("+i.toString().replace("ENTRY_MODULE",JSON.stringify(e))+")({"+o.main.map((function(e){return JSON.stringify(e)+": "+a.main[e].toString()})).join(",")+"}))(self);";var d=new window.Blob([l],{type:"text/javascript"});if(t.bare)return d;var u=(window.URL||window.webkitURL||window.mozURL||window.msURL).createObjectURL(d),c=new window.Worker(u);return c.objectURL=u,c}},function(e,t,r){"use strict";r.r(t);var i=r(9),a=r(1),n=r(0),s=r(8);t.default=function(e){var t=new s.EventEmitter;t.trigger=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.emit.apply(t,[e,e].concat(i))},t.off=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];t.removeListener.apply(t,[e].concat(i))};var r=function(t,r){e.postMessage({event:t,data:r})};e.addEventListener("message",(function(a){var s=a.data;switch(s.cmd){case"init":var o=JSON.parse(s.config);e.demuxer=new i.a(t,s.typeSupported,o,s.vendor),Object(n.a)(o.debug),r("init",null);break;case"demux":e.demuxer.push(s.data,s.decryptdata,s.initSegment,s.audioCodec,s.videoCodec,s.timeOffset,s.discontinuity,s.trackSwitch,s.contiguous,s.duration,s.accurateTimeOffset,s.defaultInitPTS)}})),t.on(a.a.FRAG_DECRYPTED,r),t.on(a.a.FRAG_PARSING_INIT_SEGMENT,r),t.on(a.a.FRAG_PARSED,r),t.on(a.a.ERROR,r),t.on(a.a.FRAG_PARSING_METADATA,r),t.on(a.a.FRAG_PARSING_USERDATA,r),t.on(a.a.INIT_PTS_FOUND,r),t.on(a.a.FRAG_PARSING_DATA,(function(t,r){var i=[],a={event:t,data:r};r.data1&&(a.data1=r.data1.buffer,i.push(r.data1.buffer),delete r.data1),r.data2&&(a.data2=r.data2.buffer,i.push(r.data2.buffer),delete r.data2),e.postMessage(a,i)}))}},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return nr}));var i={};r.r(i),r.d(i,"newCue",(function(){return ft}));var a,n,s=r(6),o=r(2),l=r(3),d=r(1),u=r(0),c={hlsEventGeneric:!0,hlsHandlerDestroying:!0,hlsHandlerDestroyed:!0},h=function(){function e(e){this.hls=void 0,this.handledEvents=void 0,this.useGenericHandler=void 0,this.hls=e,this.onEvent=this.onEvent.bind(this);for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.handledEvents=r,this.useGenericHandler=!0,this.registerListeners()}var t=e.prototype;return t.destroy=function(){this.onHandlerDestroying(),this.unregisterListeners(),this.onHandlerDestroyed()},t.onHandlerDestroying=function(){},t.onHandlerDestroyed=function(){},t.isEventHandler=function(){return"object"==typeof this.handledEvents&&this.handledEvents.length&&"function"==typeof this.onEvent},t.registerListeners=function(){this.isEventHandler()&&this.handledEvents.forEach((function(e){if(c[e])throw new Error("Forbidden event-name: "+e);this.hls.on(e,this.onEvent)}),this)},t.unregisterListeners=function(){this.isEventHandler()&&this.handledEvents.forEach((function(e){this.hls.off(e,this.onEvent)}),this)},t.onEvent=function(e,t){this.onEventGeneric(e,t)},t.onEventGeneric=function(e,t){try{(function(e,t){var r="on"+e.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+e+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,t)}).call(this,e,t).call()}catch(t){u.b.error("An internal error happened while handling event "+e+'. Error message: "'+t.message+'". Here is a stacktrace:',t),this.hls.trigger(d.a.ERROR,{type:o.b.OTHER_ERROR,details:o.a.INTERNAL_EXCEPTION,fatal:!1,event:e,err:t})}},e}();!function(e){e.MANIFEST="manifest",e.LEVEL="level",e.AUDIO_TRACK="audioTrack",e.SUBTITLE_TRACK="subtitleTrack"}(a||(a={})),function(e){e.MAIN="main",e.AUDIO="audio",e.SUBTITLE="subtitle"}(n||(n={}));var f=r(10);function g(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p,v=function(){function e(e,t){this._uri=null,this.baseuri=void 0,this.reluri=void 0,this.method=null,this.key=null,this.iv=null,this.baseuri=e,this.reluri=t}var t,r,i;return t=e,(r=[{key:"uri",get:function(){return!this._uri&&this.reluri&&(this._uri=Object(s.buildAbsoluteURL)(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri}}])&&g(t.prototype,r),i&&g(t,i),e}();function m(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}!function(e){e.AUDIO="audio",e.VIDEO="video"}(p||(p={}));var y=function(){function e(){var e;this._url=null,this._byteRange=null,this._decryptdata=null,this._elementaryStreams=((e={})[p.AUDIO]=!1,e[p.VIDEO]=!1,e),this.deltaPTS=0,this.rawProgramDateTime=null,this.programDateTime=null,this.title=null,this.tagList=[],this.cc=void 0,this.type=void 0,this.relurl=void 0,this.baseurl=void 0,this.duration=void 0,this.start=void 0,this.sn=0,this.urlId=0,this.level=0,this.levelkey=void 0,this.loader=void 0}var t,r,i,a=e.prototype;return a.setByteRange=function(e,t){var r=e.split("@",2),i=[];1===r.length?i[0]=t?t.byteRangeEndOffset:0:i[0]=parseInt(r[1]),i[1]=parseInt(r[0])+i[0],this._byteRange=i},a.addElementaryStream=function(e){this._elementaryStreams[e]=!0},a.hasElementaryStream=function(e){return!0===this._elementaryStreams[e]},a.createInitializationVector=function(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t},a.setDecryptDataFromLevelKey=function(e,t){var r=e;return(null==e?void 0:e.method)&&e.uri&&!e.iv&&((r=new v(e.baseuri,e.reluri)).method=e.method,r.iv=this.createInitializationVector(t)),r},t=e,(r=[{key:"url",get:function(){return!this._url&&this.relurl&&(this._url=Object(s.buildAbsoluteURL)(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(e){this._url=e}},{key:"byteRange",get:function(){return this._byteRange?this._byteRange:[]}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"decryptdata",get:function(){if(!this.levelkey&&!this._decryptdata)return null;if(!this._decryptdata&&this.levelkey){var e=this.sn;"number"!=typeof e&&(this.levelkey&&"AES-128"===this.levelkey.method&&!this.levelkey.iv&&u.b.warn('missing IV for initialization segment with method="'+this.levelkey.method+'" - compliance issue'),e=0),this._decryptdata=this.setDecryptDataFromLevelKey(this.levelkey,e)}return this._decryptdata}},{key:"endProgramDateTime",get:function(){if(null===this.programDateTime)return null;if(!Object(l.a)(this.programDateTime))return null;var e=Object(l.a)(this.duration)?this.duration:0;return this.programDateTime+1e3*e}},{key:"encrypted",get:function(){return!(!this.decryptdata||null===this.decryptdata.uri||null!==this.decryptdata.key)}}])&&m(t.prototype,r),i&&m(t,i),e}();function b(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var T=function(){function e(e){this.endCC=0,this.endSN=0,this.fragments=[],this.initSegment=null,this.live=!0,this.needSidxRanges=!1,this.startCC=0,this.startSN=0,this.startTimeOffset=null,this.targetduration=0,this.totalduration=0,this.type=null,this.url=e,this.version=null}var t,r,i;return t=e,(r=[{key:"hasProgramDateTime",get:function(){return!(!this.fragments[0]||!Object(l.a)(this.fragments[0].programDateTime))}}])&&b(t.prototype,r),i&&b(t,i),e}(),E=/^(\d+)x(\d+)$/,S=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,_=function(){function e(t){for(var r in"string"==typeof t&&(t=e.parseAttrList(t)),t)t.hasOwnProperty(r)&&(this[r]=t[r])}var t=e.prototype;return t.decimalInteger=function(e){var t=parseInt(this[e],10);return t>Number.MAX_SAFE_INTEGER?1/0:t},t.hexadecimalInteger=function(e){if(this[e]){var t=(this[e]||"0x").slice(2);t=(1&t.length?"0":"")+t;for(var r=new Uint8Array(t.length/2),i=0;i<t.length/2;i++)r[i]=parseInt(t.slice(2*i,2*i+2),16);return r}return null},t.hexadecimalIntegerAsNumber=function(e){var t=parseInt(this[e],16);return t>Number.MAX_SAFE_INTEGER?1/0:t},t.decimalFloatingPoint=function(e){return parseFloat(this[e])},t.enumeratedString=function(e){return this[e]},t.decimalResolution=function(e){var t=E.exec(this[e]);if(null!==t)return{width:parseInt(t[1],10),height:parseInt(t[2],10)}},e.parseAttrList=function(e){var t,r={};for(S.lastIndex=0;null!==(t=S.exec(e));){var i=t[2];0===i.indexOf('"')&&i.lastIndexOf('"')===i.length-1&&(i=i.slice(1,-1)),r[t[1]]=i}return r},e}(),R={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0}};function A(e,t){return MediaSource.isTypeSupported((t||"video")+'/mp4;codecs="'+e+'"')}var k=/(?:#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+)/g,w=/#EXT-X-MEDIA:(.*)/g,L=new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)([\S+ ?]+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),D=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,O=/\.(mp4|m4s|m4v|m4a)$/i,C=function(){function e(){}return e.findGroup=function(e,t){for(var r=0;r<e.length;r++){var i=e[r];if(i.id===t)return i}},e.convertAVC1ToAVCOTI=function(e){var t,r=e.split(".");return r.length>2?(t=r.shift()+".",t+=parseInt(r.shift()).toString(16),t+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):t=e,t},e.resolve=function(e,t){return s.buildAbsoluteURL(t,e,{alwaysNormalize:!0})},e.parseMasterPlaylist=function(t,r){var i,a=[],n={},s=!1;function o(e,t){["video","audio"].forEach((function(r){var i=e.filter((function(e){return function(e,t){var r=R[t];return!!r&&!0===r[e.slice(0,4)]}(e,r)}));if(i.length){var a=i.filter((function(e){return 0===e.lastIndexOf("avc1",0)||0===e.lastIndexOf("mp4a",0)}));t[r+"Codec"]=a.length>0?a[0]:i[0],e=e.filter((function(e){return-1===i.indexOf(e)}))}})),t.unknownCodecs=e}for(k.lastIndex=0;null!=(i=k.exec(t));)if(i[1]){var l={},d=l.attrs=new _(i[1]);l.url=e.resolve(i[2],r);var u=d.decimalResolution("RESOLUTION");u&&(l.width=u.width,l.height=u.height),l.bitrate=d.decimalInteger("AVERAGE-BANDWIDTH")||d.decimalInteger("BANDWIDTH"),l.name=d.NAME,o([].concat((d.CODECS||"").split(/[ ,]+/)),l),l.videoCodec&&-1!==l.videoCodec.indexOf("avc1")&&(l.videoCodec=e.convertAVC1ToAVCOTI(l.videoCodec)),a.push(l)}else if(i[3]){var c=new _(i[3]);c["DATA-ID"]&&(s=!0,n[c["DATA-ID"]]=c)}return{levels:a,sessionData:s?n:null}},e.parseMasterPlaylistMedia=function(t,r,i,a){var n;void 0===a&&(a=[]);var s=[],o=0;for(w.lastIndex=0;null!==(n=w.exec(t));){var l=new _(n[1]);if(l.TYPE===i){var d={attrs:l,id:o++,groupId:l["GROUP-ID"],instreamId:l["INSTREAM-ID"],name:l.NAME||l.LANGUAGE,type:i,default:"YES"===l.DEFAULT,autoselect:"YES"===l.AUTOSELECT,forced:"YES"===l.FORCED,lang:l.LANGUAGE};if(l.URI&&(d.url=e.resolve(l.URI,r)),a.length){var u=e.findGroup(a,d.groupId);d.audioCodec=u?u.codec:a[0].codec}s.push(d)}}return s},e.parseLevelPlaylist=function(e,t,r,i,a){var n,s,o,d=0,c=0,h=new T(t),f=0,g=null,p=new y,m=null;for(L.lastIndex=0;null!==(n=L.exec(e));){var b=n[1];if(b){p.duration=parseFloat(b);var E=(" "+n[2]).slice(1);p.title=E||null,p.tagList.push(E?["INF",b,E]:["INF",b])}else if(n[3]){if(Object(l.a)(p.duration)){var S=d++;p.type=i,p.start=c,o&&(p.levelkey=o),p.sn=S,p.level=r,p.cc=f,p.urlId=a,p.baseurl=t,p.relurl=(" "+n[3]).slice(1),I(p,g),h.fragments.push(p),g=p,c+=p.duration,p=new y}}else if(n[4]){var R=(" "+n[4]).slice(1);g?p.setByteRange(R,g):p.setByteRange(R)}else if(n[5])p.rawProgramDateTime=(" "+n[5]).slice(1),p.tagList.push(["PROGRAM-DATE-TIME",p.rawProgramDateTime]),null===m&&(m=h.fragments.length);else{if(!(n=n[0].match(D))){u.b.warn("No matches on slow regex match for level playlist!");continue}for(s=1;s<n.length&&void 0===n[s];s++);var A=(" "+n[s+1]).slice(1),k=(" "+n[s+2]).slice(1);switch(n[s]){case"#":p.tagList.push(k?[A,k]:[A]);break;case"PLAYLIST-TYPE":h.type=A.toUpperCase();break;case"MEDIA-SEQUENCE":d=h.startSN=parseInt(A);break;case"TARGETDURATION":h.targetduration=parseFloat(A);break;case"VERSION":h.version=parseInt(A);break;case"EXTM3U":break;case"ENDLIST":h.live=!1;break;case"DIS":f++,p.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":f=parseInt(A);break;case"KEY":var w=new _(A),C=w.enumeratedString("METHOD"),P=w.URI,x=w.hexadecimalInteger("IV");if("com.apple.streamingkeydelivery"===(w.KEYFORMAT||"identity")){u.b.warn("Keyformat com.apple.streamingkeydelivery is not supported");continue}C&&(o=new v(t,P),P&&["AES-128","SAMPLE-AES","SAMPLE-AES-CENC"].indexOf(C)>=0&&(o.method=C,o.key=null,o.iv=x));break;case"START":var M=new _(A).decimalFloatingPoint("TIME-OFFSET");Object(l.a)(M)&&(h.startTimeOffset=M);break;case"MAP":var F=new _(A);p.relurl=F.URI,F.BYTERANGE&&p.setByteRange(F.BYTERANGE),p.baseurl=t,p.level=r,p.type=i,p.sn="initSegment",h.initSegment=p,(p=new y).rawProgramDateTime=h.initSegment.rawProgramDateTime;break;default:u.b.warn("line parsed but not handled: "+n)}}}return(p=g)&&!p.relurl&&(h.fragments.pop(),c-=p.duration),h.totalduration=c,h.averagetargetduration=c/h.fragments.length,h.endSN=d-1,h.startCC=h.fragments[0]?h.fragments[0].cc:0,h.endCC=f,!h.initSegment&&h.fragments.length&&h.fragments.every((function(e){return O.test(e.relurl)}))&&(u.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),(p=new y).relurl=h.fragments[0].relurl,p.baseurl=t,p.level=r,p.type=i,p.sn="initSegment",h.initSegment=p,h.needSidxRanges=!0),m&&function(e,t){for(var r=e[t],i=t-1;i>=0;i--){var a=e[i];a.programDateTime=r.programDateTime-1e3*a.duration,r=a}}(h.fragments,m),h},e}();function I(e,t){e.rawProgramDateTime?e.programDateTime=Date.parse(e.rawProgramDateTime):(null==t?void 0:t.programDateTime)&&(e.programDateTime=t.endProgramDateTime),Object(l.a)(e.programDateTime)||(e.programDateTime=null,e.rawProgramDateTime=null)}var P=window.performance,x=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MANIFEST_LOADING,d.a.LEVEL_LOADING,d.a.AUDIO_TRACK_LOADING,d.a.SUBTITLE_TRACK_LOADING)||this).loaders={},r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.canHaveQualityLevels=function(e){return e!==a.AUDIO_TRACK&&e!==a.SUBTITLE_TRACK},i.mapContextToLevelType=function(e){switch(e.type){case a.AUDIO_TRACK:return n.AUDIO;case a.SUBTITLE_TRACK:return n.SUBTITLE;default:return n.MAIN}},i.getResponseUrl=function(e,t){var r=e.url;return void 0!==r&&0!==r.indexOf("data:")||(r=t.url),r};var s=i.prototype;return s.createInternalLoader=function(e){var t=this.hls.config,r=t.pLoader,i=t.loader,a=new(r||i)(t);return e.loader=a,this.loaders[e.type]=a,a},s.getInternalLoader=function(e){return this.loaders[e.type]},s.resetInternalLoader=function(e){this.loaders[e]&&delete this.loaders[e]},s.destroyInternalLoaders=function(){for(var e in this.loaders){var t=this.loaders[e];t&&t.destroy(),this.resetInternalLoader(e)}},s.destroy=function(){this.destroyInternalLoaders(),e.prototype.destroy.call(this)},s.onManifestLoading=function(e){this.load({url:e.url,type:a.MANIFEST,level:0,id:null,responseType:"text"})},s.onLevelLoading=function(e){this.load({url:e.url,type:a.LEVEL,level:e.level,id:e.id,responseType:"text"})},s.onAudioTrackLoading=function(e){this.load({url:e.url,type:a.AUDIO_TRACK,level:null,id:e.id,responseType:"text"})},s.onSubtitleTrackLoading=function(e){this.load({url:e.url,type:a.SUBTITLE_TRACK,level:null,id:e.id,responseType:"text"})},s.load=function(e){var t=this.hls.config;u.b.debug("Loading playlist of type "+e.type+", level: "+e.level+", id: "+e.id);var r,i,n,s,o=this.getInternalLoader(e);if(o){var l=o.context;if(l&&l.url===e.url)return u.b.trace("playlist request ongoing"),!1;u.b.warn("aborting previous loader for type: "+e.type),o.abort()}switch(e.type){case a.MANIFEST:r=t.manifestLoadingMaxRetry,i=t.manifestLoadingTimeOut,n=t.manifestLoadingRetryDelay,s=t.manifestLoadingMaxRetryTimeout;break;case a.LEVEL:r=0,s=0,n=0,i=t.levelLoadingTimeOut;break;default:r=t.levelLoadingMaxRetry,i=t.levelLoadingTimeOut,n=t.levelLoadingRetryDelay,s=t.levelLoadingMaxRetryTimeout}o=this.createInternalLoader(e);var d={timeout:i,maxRetry:r,retryDelay:n,maxRetryDelay:s},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};return u.b.debug("Calling internal loader delegate for URL: "+e.url),o.load(e,d,c),!0},s.loadsuccess=function(e,t,r,i){if(void 0===i&&(i=null),r.isSidxRequest)return this._handleSidxRequest(e,r),void this._handlePlaylistLoaded(e,t,r,i);if(this.resetInternalLoader(r.type),"string"!=typeof e.data)throw new Error('expected responseType of "text" for PlaylistLoader');var a=e.data;t.tload=P.now(),0===a.indexOf("#EXTM3U")?a.indexOf("#EXTINF:")>0||a.indexOf("#EXT-X-TARGETDURATION:")>0?this._handleTrackOrLevelPlaylist(e,t,r,i):this._handleMasterPlaylist(e,t,r,i):this._handleManifestParsingError(e,r,"no EXTM3U delimiter",i)},s.loaderror=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!1,e)},s.loadtimeout=function(e,t,r){void 0===r&&(r=null),this._handleNetworkError(t,r,!0)},s._handleMasterPlaylist=function(e,t,r,a){var n=this.hls,s=e.data,o=i.getResponseUrl(e,r),l=C.parseMasterPlaylist(s,o),c=l.levels,h=l.sessionData;if(c.length){var f=c.map((function(e){return{id:e.attrs.AUDIO,codec:e.audioCodec}})),g=C.parseMasterPlaylistMedia(s,o,"AUDIO",f),p=C.parseMasterPlaylistMedia(s,o,"SUBTITLES"),v=C.parseMasterPlaylistMedia(s,o,"CLOSED-CAPTIONS");if(g.length){var m=!1;g.forEach((function(e){e.url||(m=!0)})),!1===m&&c[0].audioCodec&&!c[0].attrs.AUDIO&&(u.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),g.unshift({type:"main",name:"main",default:!1,autoselect:!1,forced:!1,id:-1,attrs:{},url:""}))}n.trigger(d.a.MANIFEST_LOADED,{levels:c,audioTracks:g,subtitles:p,captions:v,url:o,stats:t,networkDetails:a,sessionData:h})}else this._handleManifestParsingError(e,r,"no level found in manifest",a)},s._handleTrackOrLevelPlaylist=function(e,t,r,n){var s=this.hls,u=r.id,c=r.level,h=r.type,f=i.getResponseUrl(e,r),g=Object(l.a)(u)?u:0,p=Object(l.a)(c)?c:g,v=i.mapContextToLevelType(r),m=C.parseLevelPlaylist(e.data,f,p,v,g);if(m.tload=t.tload,m.fragments.length){if(h===a.MANIFEST){var y={url:f,details:m};s.trigger(d.a.MANIFEST_LOADED,{levels:[y],audioTracks:[],url:f,stats:t,networkDetails:n,sessionData:null})}if(t.tparsed=P.now(),m.needSidxRanges){var b=m.initSegment.url;this.load({url:b,isSidxRequest:!0,type:h,level:c,levelDetails:m,id:u,rangeStart:0,rangeEnd:2048,responseType:"arraybuffer"})}else r.levelDetails=m,this._handlePlaylistLoaded(e,t,r,n)}else s.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.LEVEL_EMPTY_ERROR,fatal:!1,url:f,reason:"no fragments found in level",level:"number"==typeof r.level?r.level:void 0})},s._handleSidxRequest=function(e,t){if("string"==typeof e.data)throw new Error("sidx request must be made with responseType of array buffer");var r=f.a.parseSegmentIndex(new Uint8Array(e.data));if(r){var i=r.references,a=t.levelDetails;i.forEach((function(e,t){var r=e.info;if(a){var i=a.fragments[t];0===i.byteRange.length&&i.setByteRange(String(1+r.end-r.start)+"@"+String(r.start))}})),a&&a.initSegment.setByteRange(String(r.moovEndOffset)+"@0")}},s._handleManifestParsingError=function(e,t,r,i){this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.MANIFEST_PARSING_ERROR,fatal:!0,url:e.url,reason:r,networkDetails:i})},s._handleNetworkError=function(e,t,r,i){var n,s;void 0===r&&(r=!1),void 0===i&&(i=null),u.b.info("A network error occured while loading a "+e.type+"-type playlist");var l=this.getInternalLoader(e);switch(e.type){case a.MANIFEST:n=r?o.a.MANIFEST_LOAD_TIMEOUT:o.a.MANIFEST_LOAD_ERROR,s=!0;break;case a.LEVEL:n=r?o.a.LEVEL_LOAD_TIMEOUT:o.a.LEVEL_LOAD_ERROR,s=!1;break;case a.AUDIO_TRACK:n=r?o.a.AUDIO_TRACK_LOAD_TIMEOUT:o.a.AUDIO_TRACK_LOAD_ERROR,s=!1;break;default:s=!1}l&&(l.abort(),this.resetInternalLoader(e.type));var c={type:o.b.NETWORK_ERROR,details:n,fatal:s,url:e.url,loader:l,context:e,networkDetails:t};i&&(c.response=i),this.hls.trigger(d.a.ERROR,c)},s._handlePlaylistLoaded=function(e,t,r,n){var s=r.type,o=r.level,l=r.id,u=r.levelDetails;if(u&&u.targetduration)if(i.canHaveQualityLevels(r.type))this.hls.trigger(d.a.LEVEL_LOADED,{details:u,level:o||0,id:l||0,stats:t,networkDetails:n});else switch(s){case a.AUDIO_TRACK:this.hls.trigger(d.a.AUDIO_TRACK_LOADED,{details:u,id:l,stats:t,networkDetails:n});break;case a.SUBTITLE_TRACK:this.hls.trigger(d.a.SUBTITLE_TRACK_LOADED,{details:u,id:l,stats:t,networkDetails:n})}else this._handleManifestParsingError(e,r,"invalid target duration",n)},i}(h);var M=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.FRAG_LOADING)||this).loaders={},r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){var t=this.loaders;for(var r in t){var i=t[r];i&&i.destroy()}this.loaders={},e.prototype.destroy.call(this)},a.onFragLoading=function(e){var t=e.frag,r=t.type,i=this.loaders,a=this.hls.config,n=a.fLoader,s=a.loader;t.loaded=0;var o,d,c,h=i[r];h&&(u.b.warn("abort previous fragment loader for type: "+r),h.abort()),h=i[r]=t.loader=a.fLoader?new n(a):new s(a),o={url:t.url,frag:t,responseType:"arraybuffer",progressData:!1};var f=t.byteRangeStartOffset,g=t.byteRangeEndOffset;Object(l.a)(f)&&Object(l.a)(g)&&(o.rangeStart=f,o.rangeEnd=g),d={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout},c={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},h.load(o,d,c)},a.loadsuccess=function(e,t,r,i){void 0===i&&(i=null);var a=e.data,n=r.frag;n.loader=void 0,this.loaders[n.type]=void 0,this.hls.trigger(d.a.FRAG_LOADED,{payload:a,frag:n,stats:t,networkDetails:i})},a.loaderror=function(e,t,r){void 0===r&&(r=null);var i=t.frag,a=i.loader;a&&a.abort(),this.loaders[i.type]=void 0,this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.FRAG_LOAD_ERROR,fatal:!1,frag:t.frag,response:e,networkDetails:r})},a.loadtimeout=function(e,t,r){void 0===r&&(r=null);var i=t.frag,a=i.loader;a&&a.abort(),this.loaders[i.type]=void 0,this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:t.frag,networkDetails:r})},a.loadprogress=function(e,t,r,i){void 0===i&&(i=null);var a=t.frag;a.loaded=e.loaded,this.hls.trigger(d.a.FRAG_LOAD_PROGRESS,{frag:a,stats:e,networkDetails:i})},i}(h);var F=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.KEY_LOADING)||this).loaders={},r.decryptkey=null,r.decrypturl=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){for(var t in this.loaders){var r=this.loaders[t];r&&r.destroy()}this.loaders={},e.prototype.destroy.call(this)},a.onKeyLoading=function(e){var t=e.frag,r=t.type,i=this.loaders[r];if(t.decryptdata){var a=t.decryptdata.uri;if(a!==this.decrypturl||null===this.decryptkey){var n=this.hls.config;if(i&&(u.b.warn("abort previous key loader for type:"+r),i.abort()),!a)return void u.b.warn("key uri is falsy");t.loader=this.loaders[r]=new n.loader(n),this.decrypturl=a,this.decryptkey=null;var s={url:a,frag:t,responseType:"arraybuffer"},o={timeout:n.fragLoadingTimeOut,maxRetry:0,retryDelay:n.fragLoadingRetryDelay,maxRetryDelay:n.fragLoadingMaxRetryTimeout},l={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)};t.loader.load(s,o,l)}else this.decryptkey&&(t.decryptdata.key=this.decryptkey,this.hls.trigger(d.a.KEY_LOADED,{frag:t}))}else u.b.warn("Missing decryption data on fragment in onKeyLoading")},a.loadsuccess=function(e,t,r){var i=r.frag;i.decryptdata?(this.decryptkey=i.decryptdata.key=new Uint8Array(e.data),i.loader=void 0,delete this.loaders[i.type],this.hls.trigger(d.a.KEY_LOADED,{frag:i})):u.b.error("after key load, decryptdata unset")},a.loaderror=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.KEY_LOAD_ERROR,fatal:!1,frag:r,response:e})},a.loadtimeout=function(e,t){var r=t.frag,i=r.loader;i&&i.abort(),delete this.loaders[r.type],this.hls.trigger(d.a.ERROR,{type:o.b.NETWORK_ERROR,details:o.a.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},i}(h);var U="NOT_LOADED",N="APPENDING",B="PARTIAL",G="OK",K=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.BUFFER_APPENDED,d.a.FRAG_BUFFERED,d.a.FRAG_LOADED)||this).bufferPadding=.2,r.fragments=Object.create(null),r.timeRanges=Object.create(null),r.config=t.config,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){this.fragments=Object.create(null),this.timeRanges=Object.create(null),this.config=null,h.prototype.destroy.call(this),e.prototype.destroy.call(this)},a.getBufferedFrag=function(e,t){var r=this.fragments,i=Object.keys(r).filter((function(i){var a=r[i];if(a.body.type!==t)return!1;if(!a.buffered)return!1;var n=a.body;return n.startPTS<=e&&e<=n.endPTS}));if(0===i.length)return null;var a=i.pop();return r[a].body},a.detectEvictedFragments=function(e,t){var r=this;Object.keys(this.fragments).forEach((function(i){var a=r.fragments[i];if(a&&a.buffered){var n=a.range[e];if(n)for(var s=n.time,o=0;o<s.length;o++){var l=s[o];if(!r.isTimeBuffered(l.startPTS,l.endPTS,t)){r.removeFragment(a.body);break}}}}))},a.detectPartialFragments=function(e){var t=this,r=this.getFragmentKey(e),i=this.fragments[r];i&&(i.buffered=!0,Object.keys(this.timeRanges).forEach((function(r){if(e.hasElementaryStream(r)){var a=t.timeRanges[r];i.range[r]=t.getBufferedTimes(e.startPTS,e.endPTS,a)}})))},a.getBufferedTimes=function(e,t,r){for(var i,a,n=[],s=!1,o=0;o<r.length;o++){if(i=r.start(o)-this.bufferPadding,a=r.end(o)+this.bufferPadding,e>=i&&t<=a){n.push({startPTS:Math.max(e,r.start(o)),endPTS:Math.min(t,r.end(o))});break}if(e<a&&t>i)n.push({startPTS:Math.max(e,r.start(o)),endPTS:Math.min(t,r.end(o))}),s=!0;else if(t<=i)break}return{time:n,partial:s}},a.getFragmentKey=function(e){return e.type+"_"+e.level+"_"+e.urlId+"_"+e.sn},a.getPartialFragment=function(e){var t,r,i,a=this,n=null,s=0;return Object.keys(this.fragments).forEach((function(o){var l=a.fragments[o];a.isPartial(l)&&(r=l.body.startPTS-a.bufferPadding,i=l.body.endPTS+a.bufferPadding,e>=r&&e<=i&&(t=Math.min(e-r,i-e),s<=t&&(n=l.body,s=t)))})),n},a.getState=function(e){var t=this.getFragmentKey(e),r=this.fragments[t],i=U;return void 0!==r&&(i=r.buffered?!0===this.isPartial(r)?B:G:N),i},a.isPartial=function(e){return!0===e.buffered&&(void 0!==e.range.video&&!0===e.range.video.partial||void 0!==e.range.audio&&!0===e.range.audio.partial)},a.isTimeBuffered=function(e,t,r){for(var i,a,n=0;n<r.length;n++){if(i=r.start(n)-this.bufferPadding,a=r.end(n)+this.bufferPadding,e>=i&&t<=a)return!0;if(t<=i)return!1}return!1},a.onFragLoaded=function(e){var t=e.frag;Object(l.a)(t.sn)&&!t.bitrateTest&&(this.fragments[this.getFragmentKey(t)]={body:t,range:Object.create(null),buffered:!1})},a.onBufferAppended=function(e){var t=this;this.timeRanges=e.timeRanges,Object.keys(this.timeRanges).forEach((function(e){var r=t.timeRanges[e];t.detectEvictedFragments(e,r)}))},a.onFragBuffered=function(e){this.detectPartialFragments(e.frag)},a.hasFragment=function(e){var t=this.getFragmentKey(e);return void 0!==this.fragments[t]},a.removeFragment=function(e){var t=this.getFragmentKey(e);delete this.fragments[t]},a.removeAllFragments=function(){this.fragments=Object.create(null)},i}(h),j={search:function(e,t){for(var r=0,i=e.length-1,a=null,n=null;r<=i;){var s=t(n=e[a=(r+i)/2|0]);if(s>0)r=a+1;else{if(!(s<0))return n;i=a-1}}return null}},H=function(){function e(){}return e.isBuffered=function(e,t){try{if(e)for(var r=e.buffered,i=0;i<r.length;i++)if(t>=r.start(i)&&t<=r.end(i))return!0}catch(e){}return!1},e.bufferInfo=function(e,t,r){try{if(e){var i,a=e.buffered,n=[];for(i=0;i<a.length;i++)n.push({start:a.start(i),end:a.end(i)});return this.bufferedInfo(n,t,r)}}catch(e){}return{len:0,start:t,end:t,nextStart:void 0}},e.bufferedInfo=function(e,t,r){e.sort((function(e,t){var r=e.start-t.start;return r||t.end-e.end}));var i=[];if(r)for(var a=0;a<e.length;a++){var n=i.length;if(n){var s=i[n-1].end;e[a].start-s<r?e[a].end>s&&(i[n-1].end=e[a].end):i.push(e[a])}else i.push(e[a])}else i=e;for(var o,l=0,d=t,u=t,c=0;c<i.length;c++){var h=i[c].start,f=i[c].end;if(t+r>=h&&t<f)d=h,l=(u=f)-t;else if(t+r<h){o=h;break}}return{len:l,start:d,end:u,nextStart:o}},e}(),V=r(8),Y=r(11),W=r(9);function q(){return window.MediaSource||window.WebKitMediaSource}var X=r(5);var z=function(e){var t,r;function i(){return e.apply(this,arguments)||this}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.prototype.trigger=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];this.emit.apply(this,[e,e].concat(r))},i}(V.EventEmitter),Q=Object(X.a)(),$=q()||{isTypeSupported:function(){return!1}},J=function(){function e(e,t){var r=this;this.hls=e,this.id=t;var i=this.observer=new z,a=e.config,n=function(t,i){(i=i||{}).frag=r.frag,i.id=r.id,e.trigger(t,i)};i.on(d.a.FRAG_DECRYPTED,n),i.on(d.a.FRAG_PARSING_INIT_SEGMENT,n),i.on(d.a.FRAG_PARSING_DATA,n),i.on(d.a.FRAG_PARSED,n),i.on(d.a.ERROR,n),i.on(d.a.FRAG_PARSING_METADATA,n),i.on(d.a.FRAG_PARSING_USERDATA,n),i.on(d.a.INIT_PTS_FOUND,n);var s={mp4:$.isTypeSupported("video/mp4"),mpeg:$.isTypeSupported("audio/mpeg"),mp3:$.isTypeSupported('audio/mp4; codecs="mp3"')},l=navigator.vendor;if(a.enableWorker&&"undefined"!=typeof Worker){var c;u.b.log("demuxing in webworker");try{c=this.w=Y(12),this.onwmsg=this.onWorkerMessage.bind(this),c.addEventListener("message",this.onwmsg),c.onerror=function(t){e.trigger(d.a.ERROR,{type:o.b.OTHER_ERROR,details:o.a.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:t.message+" ("+t.filename+":"+t.lineno+")"}})},c.postMessage({cmd:"init",typeSupported:s,vendor:l,id:t,config:JSON.stringify(a)})}catch(e){u.b.warn("Error in worker:",e),u.b.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),c&&Q.URL.revokeObjectURL(c.objectURL),this.demuxer=new W.a(i,s,a,l),this.w=void 0}}else this.demuxer=new W.a(i,s,a,l)}var t=e.prototype;return t.destroy=function(){var e=this.w;if(e)e.removeEventListener("message",this.onwmsg),e.terminate(),this.w=null;else{var t=this.demuxer;t&&(t.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)},t.push=function(e,t,r,i,a,n,s,o){var d=this.w,c=Object(l.a)(a.startPTS)?a.startPTS:a.start,h=a.decryptdata,f=this.frag,g=!(f&&a.cc===f.cc),p=!(f&&a.level===f.level),v=f&&a.sn===f.sn+1,m=!p&&v;if(g&&u.b.log(this.id+":discontinuity detected"),p&&u.b.log(this.id+":switch detected"),this.frag=a,d)d.postMessage({cmd:"demux",data:e,decryptdata:h,initSegment:t,audioCodec:r,videoCodec:i,timeOffset:c,discontinuity:g,trackSwitch:p,contiguous:m,duration:n,accurateTimeOffset:s,defaultInitPTS:o},e instanceof ArrayBuffer?[e]:[]);else{var y=this.demuxer;y&&y.push(e,h,t,r,i,c,g,p,m,n,s,o)}},t.onWorkerMessage=function(e){var t=e.data,r=this.hls;switch(t.event){case"init":Q.URL.revokeObjectURL(this.w.objectURL);break;case d.a.FRAG_PARSING_DATA:t.data.data1=new Uint8Array(t.data1),t.data2&&(t.data.data2=new Uint8Array(t.data2));default:t.data=t.data||{},t.data.frag=this.frag,t.data.id=this.id,r.trigger(t.event,t.data)}},e}();function Z(e,t,r){switch(t){case"audio":e.audioGroupIds||(e.audioGroupIds=[]),e.audioGroupIds.push(r);break;case"text":e.textGroupIds||(e.textGroupIds=[]),e.textGroupIds.push(r)}}function ee(e,t,r){var i=e[t],a=e[r],n=a.startPTS;if(Object(l.a)(n))r>t?(i.duration=n-i.start,i.duration<0&&u.b.warn("negative duration computed for frag "+i.sn+",level "+i.level+", there should be some duration drift between playlist and fragment!")):(a.duration=i.start-n,a.duration<0&&u.b.warn("negative duration computed for frag "+a.sn+",level "+a.level+", there should be some duration drift between playlist and fragment!"));else if(r>t){var s=i.cc===a.cc;a.start=i.start+(s&&i.minEndPTS?i.minEndPTS-i.start:i.duration)}else a.start=Math.max(i.start-a.duration,0)}function te(e,t,r,i,a,n){var s=r,o=i;if(Object(l.a)(t.startPTS)){var d=Math.abs(t.startPTS-r);Object(l.a)(t.deltaPTS)?t.deltaPTS=Math.max(d,t.deltaPTS):t.deltaPTS=d,s=Math.max(r,t.startPTS),r=Math.min(r,t.startPTS),o=Math.min(i,t.endPTS),i=Math.max(i,t.endPTS),a=Math.min(a,t.startDTS),n=Math.max(n,t.endDTS)}var u=r-t.start;t.start=t.startPTS=r,t.maxStartPTS=s,t.endPTS=i,t.minEndPTS=o,t.startDTS=a,t.endDTS=n,t.duration=i-r;var c,h,f,g=t.sn;if(!e||g<e.startSN||g>e.endSN)return 0;for(c=g-e.startSN,(h=e.fragments)[c]=t,f=c;f>0;f--)ee(h,f,f-1);for(f=c;f<h.length-1;f++)ee(h,f,f+1);return e.PTSKnown=!0,u}function re(e,t){t.initSegment&&e.initSegment&&(t.initSegment=e.initSegment);var r,i=0;if(ie(e,t,(function(e,a){i=e.cc-a.cc,Object(l.a)(e.startPTS)&&(a.start=a.startPTS=e.startPTS,a.endPTS=e.endPTS,a.duration=e.duration,a.backtracked=e.backtracked,a.dropped=e.dropped,r=a),t.PTSKnown=!0})),t.PTSKnown){if(i){u.b.log("discontinuity sliding from playlist, take drift into account");for(var a=t.fragments,n=0;n<a.length;n++)a[n].cc+=i}r?te(t,r,r.startPTS,r.endPTS,r.startDTS,r.endDTS):function(e,t){var r=t.startSN-e.startSN,i=e.fragments,a=t.fragments;if(r<0||r>i.length)return;for(var n=0;n<a.length;n++)a[n].start+=i[r].start}(e,t),t.PTSKnown=e.PTSKnown}}function ie(e,t,r){if(e&&t)for(var i=Math.max(e.startSN,t.startSN)-t.startSN,a=Math.min(e.endSN,t.endSN)-t.startSN,n=t.startSN-e.startSN,s=i;s<=a;s++){var o=e.fragments[n+s],l=t.fragments[s];if(!o||!l)break;r(o,l,s)}}function ae(e,t,r){var i=1e3*(t.averagetargetduration?t.averagetargetduration:t.targetduration),a=i/2;return e&&t.endSN===e.endSN&&(i=a),r&&(i=Math.max(a,i-(window.performance.now()-r))),Math.round(i)}var ne={toString:function(e){for(var t="",r=e.length,i=0;i<r;i++)t+="["+e.start(i).toFixed(3)+","+e.end(i).toFixed(3)+"]";return t}};function se(e,t){t.fragments.forEach((function(t){if(t){var r=t.start+e;t.start=t.startPTS=r,t.endPTS=r+t.duration}})),t.PTSKnown=!0}function oe(e,t,r){!function(e,t,r){if(function(e,t,r){var i=!1;return t&&t.details&&r&&(r.endCC>r.startCC||e&&e.cc<r.startCC)&&(i=!0),i}(e,r,t)){var i=function(e,t){var r=e.fragments,i=t.fragments;if(i.length&&r.length){var a=function(e,t){for(var r=null,i=0;i<e.length;i+=1){var a=e[i];if(a&&a.cc===t){r=a;break}}return r}(r,i[0].cc);if(a&&(!a||a.startPTS))return a;u.b.log("No frag in previous level to align on")}else u.b.log("No fragments to align")}(r.details,t);i&&(u.b.log("Adjusting PTS using last level due to CC increase within current level"),se(i.start,t))}}(e,r,t),!r.PTSKnown&&t&&function(e,t){if(t&&t.fragments.length){if(!e.hasProgramDateTime||!t.hasProgramDateTime)return;var r=t.fragments[0].programDateTime,i=(e.fragments[0].programDateTime-r)/1e3+t.fragments[0].start;Object(l.a)(i)&&(u.b.log("adjusting PTS using programDateTime delta, sliding:"+i.toFixed(3)),se(i,e))}}(r,t.details)}function le(e,t,r){if(null===t||!Array.isArray(e)||!e.length||!Object(l.a)(t))return null;if(t<(e[0].programDateTime||0))return null;if(t>=(e[e.length-1].endProgramDateTime||0))return null;r=r||0;for(var i=0;i<e.length;++i){var a=e[i];if(ce(t,r,a))return a}return null}function de(e,t,r,i){void 0===r&&(r=0),void 0===i&&(i=0);var a=null;if(e?a=t[e.sn-t[0].sn+1]:0===r&&0===t[0].start&&(a=t[0]),a&&0===ue(r,i,a))return a;var n=j.search(t,ue.bind(null,r,i));return n||a}function ue(e,t,r){void 0===e&&(e=0),void 0===t&&(t=0);var i=Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return r.start+r.duration-i<=e?1:r.start-i>e&&r.start?-1:0}function ce(e,t,r){var i=1e3*Math.min(t,r.duration+(r.deltaPTS?r.deltaPTS:0));return(r.endProgramDateTime||0)-i>e}var he=function(){function e(e,t,r,i){this.config=e,this.media=t,this.fragmentTracker=r,this.hls=i,this.nudgeRetry=0,this.stallReported=!1,this.stalled=null,this.moved=!1,this.seeking=!1}var t=e.prototype;return t.poll=function(e){var t=this.config,r=this.media,i=this.stalled,a=r.currentTime,n=r.seeking,s=this.seeking&&!n,o=!this.seeking&&n;if(this.seeking=n,a===e){if((o||s)&&(this.stalled=null),!r.paused&&!r.ended&&0!==r.playbackRate&&r.buffered.length){var l=H.bufferInfo(r,a,0),d=l.len>0,c=l.nextStart||0;if(d||c){if(n){var h=l.len>2,f=!c||c-a>2&&!this.fragmentTracker.getPartialFragment(a);if(h||f)return;this.moved=!1}if(!this.moved&&this.stalled){var g=Math.max(c,l.start||0)-a;if(g>0&&g<=2)return void this._trySkipBufferHole(null)}var p=self.performance.now();if(null!==i){var v=p-i;!n&&v>=250&&this._reportStall(l.len);var m=H.bufferInfo(r,a,t.maxBufferHole);this._tryFixBufferStall(m,v)}else this.stalled=p}}}else if(this.moved=!0,null!==i){if(this.stallReported){var y=self.performance.now()-i;u.b.warn("playback not stuck anymore @"+a+", after "+Math.round(y)+"ms"),this.stallReported=!1}this.stalled=null,this.nudgeRetry=0}},t._tryFixBufferStall=function(e,t){var r=this.config,i=this.fragmentTracker,a=this.media.currentTime,n=i.getPartialFragment(a);if(n&&this._trySkipBufferHole(n))return;e.len>r.maxBufferHole&&t>1e3*r.highBufferWatchdogPeriod&&(u.b.warn("Trying to nudge playhead over buffer-hole"),this.stalled=null,this._tryNudgeBuffer())},t._reportStall=function(e){var t=this.hls,r=this.media;this.stallReported||(this.stallReported=!0,u.b.warn("Playback stalling at @"+r.currentTime+" due to low buffer (buffer="+e+")"),t.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:e}))},t._trySkipBufferHole=function(e){for(var t=this.config,r=this.hls,i=this.media,a=i.currentTime,n=0,s=0;s<i.buffered.length;s++){var l=i.buffered.start(s);if(a+t.maxBufferHole>=n&&a<l){var c=Math.max(l+.05,i.currentTime+.1);return u.b.warn("skipping hole, adjusting currentTime from "+a+" to "+c),this.moved=!0,this.stalled=null,i.currentTime=c,e&&r.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_SEEK_OVER_HOLE,fatal:!1,reason:"fragment loaded with buffer holes, seeking from "+a+" to "+c,frag:e}),c}n=i.buffered.end(s)}return 0},t._tryNudgeBuffer=function(){var e=this.config,t=this.hls,r=this.media,i=r.currentTime,a=(this.nudgeRetry||0)+1;if(this.nudgeRetry=a,a<e.nudgeMaxRetry){var n=i+a*e.nudgeOffset;u.b.warn("Nudging 'currentTime' from "+i+" to "+n),r.currentTime=n,t.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_NUDGE_ON_STALL,fatal:!1})}else u.b.error("Playhead still not moving while enough data buffered @"+i+" after "+e.nudgeMaxRetry+" nudges"),t.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_STALLED_ERROR,fatal:!0})},e}();function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var ge=function(e){var t,r;function i(t){for(var r,i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];return(r=e.call.apply(e,[this,t].concat(a))||this)._boundTick=void 0,r._tickTimer=null,r._tickInterval=null,r._tickCallCount=0,r._boundTick=r.tick.bind(fe(r)),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.onHandlerDestroying=function(){this.clearNextTick(),this.clearInterval()},a.hasInterval=function(){return!!this._tickInterval},a.hasNextTick=function(){return!!this._tickTimer},a.setInterval=function(e){return!this._tickInterval&&(this._tickInterval=self.setInterval(this._boundTick,e),!0)},a.clearInterval=function(){return!!this._tickInterval&&(self.clearInterval(this._tickInterval),this._tickInterval=null,!0)},a.clearNextTick=function(){return!!this._tickTimer&&(self.clearTimeout(this._tickTimer),this._tickTimer=null,!0)},a.tick=function(){this._tickCallCount++,1===this._tickCallCount&&(this.doTick(),this._tickCallCount>1&&(this.clearNextTick(),this._tickTimer=self.setTimeout(this._boundTick,0)),this._tickCallCount=0)},a.doTick=function(){},i}(h);var pe="STOPPED",ve="STARTING",me="IDLE",ye="PAUSED",be="KEY_LOADING",Te="FRAG_LOADING",Ee="FRAG_LOADING_WAITING_RETRY",Se="WAITING_TRACK",_e="PARSING",Re="PARSED",Ae="BUFFER_FLUSHING",ke="ENDED",we="ERROR",Le="WAITING_INIT_PTS",De="WAITING_LEVEL",Oe=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.doTick=function(){},a.startLoad=function(){},a.stopLoad=function(){var e=this.fragCurrent;e&&(e.loader&&e.loader.abort(),this.fragmentTracker.removeFragment(e)),this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.fragCurrent=null,this.fragPrevious=null,this.clearInterval(),this.clearNextTick(),this.state=pe},a._streamEnded=function(e,t){var r=this.fragCurrent,i=this.fragmentTracker;if(!t.live&&r&&!r.backtracked&&r.sn===t.endSN&&!e.nextStart){var a=i.getState(r);return a===B||a===G}return!1},a.onMediaSeeking=function(){var e=this.config,t=this.media,r=this.mediaBuffer,i=this.state,a=t?t.currentTime:null,n=H.bufferInfo(r||t,a,this.config.maxBufferHole);if(u.b.log("media seeking to "+(Object(l.a)(a)?a.toFixed(3):a)),i===Te){var s=this.fragCurrent;if(0===n.len&&s){var o=e.maxFragLookUpTolerance,d=s.start-o,c=s.start+s.duration+o;a<d||a>c?(s.loader&&(u.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),s.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=me):u.b.log("seeking outside of buffer but within currently loaded fragment range")}}else i===ke&&(0===n.len&&(this.fragPrevious=null,this.fragCurrent=null),this.state=me);t&&(this.lastCurrentTime=a),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=a),this.tick()},a.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},a.onHandlerDestroying=function(){this.stopLoad(),e.prototype.onHandlerDestroying.call(this)},a.onHandlerDestroyed=function(){this.state=pe,this.fragmentTracker=null},a.computeLivePosition=function(e,t){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*t.targetduration;return e+Math.max(0,t.totalduration-r)},i}(ge);function Ce(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Ie,Pe=function(e){var t,r;function i(t,r){var i;return(i=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.MANIFEST_LOADING,d.a.MANIFEST_PARSED,d.a.LEVEL_LOADED,d.a.LEVELS_UPDATED,d.a.KEY_LOADED,d.a.FRAG_LOADED,d.a.FRAG_LOAD_EMERGENCY_ABORTED,d.a.FRAG_PARSING_INIT_SEGMENT,d.a.FRAG_PARSING_DATA,d.a.FRAG_PARSED,d.a.ERROR,d.a.AUDIO_TRACK_SWITCHING,d.a.AUDIO_TRACK_SWITCHED,d.a.BUFFER_CREATED,d.a.BUFFER_APPENDED,d.a.BUFFER_FLUSHED)||this).fragmentTracker=r,i.config=t.config,i.audioCodecSwap=!1,i._state=pe,i.stallReported=!1,i.gapController=null,i.altAudio=!1,i.audioOnly=!1,i.bitrateTest=!1,i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,s,c,h=i.prototype;return h.startLoad=function(e){if(this.levels){var t=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.setInterval(100),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;-1===i&&(r.config.testBandwidth?(i=0,this.bitrateTest=!0):i=r.nextAutoLevel),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}t>0&&-1===e&&(u.b.log("override startPosition with lastCurrentTime @"+t.toFixed(3)),e=t),this.state=me,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=e,this.tick()}else this.forceStartLoad=!0,this.state=pe},h.stopLoad=function(){this.forceStartLoad=!1,e.prototype.stopLoad.call(this)},h.doTick=function(){switch(this.state){case Ae:this.fragLoadError=0;break;case me:this._doTickIdle();break;case De:var e=this.levels[this.level];e&&e.details&&(this.state=me);break;case Ee:var t=window.performance.now(),r=this.retryDate;(!r||t>=r||this.media&&this.media.seeking)&&(u.b.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=me)}this._checkBuffer(),this._checkFragmentChanged()},h._doTickIdle=function(){var e=this.hls,t=e.config,r=this.media;if(void 0!==this.levelLastLoaded&&(r||!this.startFragRequested&&t.startFragPrefetch))if(this.altAudio&&this.audioOnly)this.demuxer.frag=null;else{var i;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=e.nextLoadLevel,n=this.levels[a];if(n){var s,o=n.bitrate;s=o?Math.max(8*t.maxBufferSize/o,t.maxBufferLength):t.maxBufferLength,s=Math.min(s,t.maxMaxBufferLength);var l=i<t.maxBufferHole?Math.max(2,t.maxBufferHole):t.maxBufferHole,c=H.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,l),h=c.len;if(!(h>=s)){u.b.trace("buffer length of "+h.toFixed(3)+" is below max of "+s.toFixed(3)+". checking for more payload ..."),this.level=e.nextLoadLevel=a;var f=n.details;if(!f||f.live&&this.levelLastLoaded!==a)this.state=De;else{if(this._streamEnded(c,f)){var g={};return this.altAudio&&(g.type="video"),this.hls.trigger(d.a.BUFFER_EOS,g),void(this.state=ke)}this._fetchPayloadOrEos(i,c,f)}}}}},h._fetchPayloadOrEos=function(e,t,r){var i=this.fragPrevious,a=(this.level,r.fragments),n=a.length;if(0!==n){var s,o=a[0].start,l=a[n-1].start+a[n-1].duration,d=t.end;if(r.initSegment&&!r.initSegment.data)s=r.initSegment;else if(r.live){var c=this.config.initialLiveManifestSize;if(n<c)return void u.b.warn("Can not start playback of a level, reason: not enough fragments "+n+" < "+c);if(null===(s=this._ensureFragmentAtLivePoint(r,d,o,l,i,a)))return}else d<o&&(s=a[0]);s||(s=this._findFragment(o,i,n,a,d,l,r)),s&&(s.encrypted?this._loadKey(s,r):this._loadFragment(s,r,e,d))}},h._ensureFragmentAtLivePoint=function(e,t,r,i,a,n){var s,o=this.hls.config,d=this.media,c=1/0;if(void 0!==o.liveMaxLatencyDuration?c=o.liveMaxLatencyDuration:Object(l.a)(o.liveMaxLatencyDurationCount)&&(c=o.liveMaxLatencyDurationCount*e.targetduration),t<Math.max(r-o.maxFragLookUpTolerance,i-c)){var h=this.liveSyncPosition=this.computeLivePosition(r,e);t=h,d&&!d.paused&&d.readyState&&d.duration>h&&h>d.currentTime&&(u.b.log("buffer end: "+t.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+h.toFixed(3)),d.currentTime=h),this.nextLoadPosition=h}if(e.PTSKnown&&t>i&&d&&d.readyState)return null;if(this.startFragRequested&&!e.PTSKnown&&a)if(e.hasProgramDateTime)u.b.log("live playlist, switching playlist, load frag with same PDT: "+a.programDateTime),s=le(n,a.endProgramDateTime,o.maxFragLookUpTolerance);else{var f=a.sn+1;if(f>=e.startSN&&f<=e.endSN){var g=n[f-e.startSN];a.cc===g.cc&&(s=g,u.b.log("live playlist, switching playlist, load frag with next SN: "+s.sn))}s||(s=j.search(n,(function(e){return a.cc-e.cc})))&&u.b.log("live playlist, switching playlist, load frag with same CC: "+s.sn)}return s},h._findFragment=function(e,t,r,i,a,n,s){var o,l=this.hls.config;a<n?o=de(t,i,a,a>n-l.maxFragLookUpTolerance?0:l.maxFragLookUpTolerance):o=i[r-1];if(o){var d=o.sn-s.startSN,c=t&&o.level===t.level,h=i[d-1],f=i[d+1];if(t&&o.sn===t.sn)if(c&&!o.backtracked)if(o.sn<s.endSN){var g=t.deltaPTS;g&&g>l.maxBufferHole&&t.dropped&&d?(o=h,u.b.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")):(o=f,this.fragmentTracker.getState(o)!==G&&u.b.log("Re-loading fragment with SN: "+o.sn))}else o=null;else o.backtracked&&(f&&f.backtracked?(u.b.warn("Already backtracked from fragment "+f.sn+", will not backtrack to fragment "+o.sn+". Loading fragment "+f.sn),o=f):(u.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),o.dropped=0,h?(o=h).backtracked=!0:d&&(o=null)))}return o},h._loadKey=function(e,t){u.b.log("Loading key for "+e.sn+" of ["+t.startSN+"-"+t.endSN+"], level "+this.level),this.state=be,this.hls.trigger(d.a.KEY_LOADING,{frag:e})},h._loadFragment=function(e,t,r,i){var a=this.fragmentTracker.getState(e);this.fragCurrent=e,"initSegment"!==e.sn&&(this.startFragRequested=!0),Object(l.a)(e.sn)&&!e.bitrateTest&&(this.nextLoadPosition=e.start+e.duration),e.backtracked||a===U||a===B?(e.autoLevel=this.hls.autoLevelEnabled,e.bitrateTest=this.bitrateTest,u.b.log("Loading "+e.sn+" of ["+t.startSN+"-"+t.endSN+"], level "+this.level+", "+(this.loadedmetadata?"currentTime":"nextLoadPosition")+": "+parseFloat(r.toFixed(3))+", bufferEnd: "+parseFloat(i.toFixed(3))),this.hls.trigger(d.a.FRAG_LOADING,{frag:e}),this.demuxer||(this.demuxer=new J(this.hls,"main")),this.state=Te):a===N&&this._reduceMaxBufferLength(e.duration)&&this.fragmentTracker.removeFragment(e)},h.getBufferedFrag=function(e){return this.fragmentTracker.getBufferedFrag(e,n.MAIN)},h.followingBufferedFrag=function(e){return e?this.getBufferedFrag(e.endPTS+.5):null},h._checkFragmentChanged=function(){var e,t,r=this.media;if(r&&r.readyState&&!1===r.seeking&&((t=r.currentTime)>this.lastCurrentTime&&(this.lastCurrentTime=t),H.isBuffered(r,t)?e=this.getBufferedFrag(t):H.isBuffered(r,t+.1)&&(e=this.getBufferedFrag(t+.1)),e)){var i=e;if(i!==this.fragPlaying){this.hls.trigger(d.a.FRAG_CHANGED,{frag:i});var a=i.level;this.fragPlaying&&this.fragPlaying.level===a||this.hls.trigger(d.a.LEVEL_SWITCHED,{level:a}),this.fragPlaying=i}}},h.immediateLevelSwitch=function(){if(u.b.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var e,t=this.media;t?(e=t.paused)||t.pause():e=!0,this.previouslyPaused=e}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},h.immediateLevelSwitchEnd=function(){var e=this.media;e&&e.buffered.length&&(this.immediateSwitch=!1,e.currentTime>0&&H.isBuffered(e,e.currentTime)&&(e.currentTime-=1e-4),this.previouslyPaused||e.play())},h.nextLevelSwitch=function(){var e=this.media;if(e&&e.readyState){var t,r=this.getBufferedFrag(e.currentTime);if(r&&r.startPTS>1&&this.flushMainBuffer(0,r.startPTS-1),e.paused)t=0;else{var i=this.hls.nextLoadLevel,a=this.levels[i],n=this.fragLastKbps;t=n&&this.fragCurrent?this.fragCurrent.duration*a.bitrate/(1e3*n)+1:0}var s=this.getBufferedFrag(e.currentTime+t);if(s){var o=this.followingBufferedFrag(s);if(o){var l=this.fragCurrent;l&&l.loader&&l.loader.abort(),this.fragCurrent=null;var d=Math.max(s.endPTS,o.maxStartPTS+Math.min(this.config.maxFragLookUpTolerance,o.duration));this.flushMainBuffer(d,Number.POSITIVE_INFINITY)}}}},h.flushMainBuffer=function(e,t){this.state=Ae;var r={startOffset:e,endOffset:t};this.altAudio&&(r.type="video"),this.hls.trigger(d.a.BUFFER_FLUSHING,r)},h.onMediaAttached=function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("seeked",this.onvseeked),t.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition),this.gapController=new he(r,t,this.fragmentTracker,this.hls)},h.onMediaDetaching=function(){var e=this.media;e&&e.ended&&(u.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var t=this.levels;t&&t.forEach((function(e){e.details&&e.details.fragments.forEach((function(e){e.backtracked=void 0}))})),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("seeked",this.onvseeked),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.fragmentTracker.removeAllFragments(),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()},h.onMediaSeeked=function(){var e=this.media,t=e?e.currentTime:void 0;Object(l.a)(t)&&u.b.log("media seeked to "+t.toFixed(3)),this.tick()},h.onManifestLoading=function(){u.b.log("trigger BUFFER_RESET"),this.hls.trigger(d.a.BUFFER_RESET),this.fragmentTracker.removeAllFragments(),this.stalled=!1,this.startPosition=this.lastCurrentTime=0},h.onManifestParsed=function(e){var t,r=!1,i=!1;e.levels.forEach((function(e){(t=e.audioCodec)&&(-1!==t.indexOf("mp4a.40.2")&&(r=!0),-1!==t.indexOf("mp4a.40.5")&&(i=!0))})),this.audioCodecSwitch=r&&i,this.audioCodecSwitch&&u.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.altAudio=e.altAudio,this.levels=e.levels,this.startFragRequested=!1;var a=this.config;(a.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(a.startPosition)},h.onLevelLoaded=function(e){var t=e.details,r=e.level,i=this.levels[this.levelLastLoaded],a=this.levels[r],n=t.totalduration,s=0;if(u.b.log("level "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+n),t.live){var o=a.details;o&&t.fragments.length>0?(re(o,t),s=t.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(s,o),t.PTSKnown&&Object(l.a)(s)?u.b.log("live playlist sliding:"+s.toFixed(3)):(u.b.log("live playlist - outdated PTS, unknown sliding"),oe(this.fragPrevious,i,t))):(u.b.log("live playlist - first load, unknown sliding"),t.PTSKnown=!1,oe(this.fragPrevious,i,t))}else t.PTSKnown=!1;if(a.details=t,this.levelLastLoaded=r,this.hls.trigger(d.a.LEVEL_UPDATED,{details:t,level:r}),!1===this.startFragRequested){if(-1===this.startPosition||-1===this.lastCurrentTime){var c=t.startTimeOffset;Object(l.a)(c)?(c<0&&(u.b.log("negative start time offset "+c+", count from end of last fragment"),c=s+n+c),u.b.log("start time offset found in playlist, adjust startPosition to "+c),this.startPosition=c):t.live?(this.startPosition=this.computeLivePosition(s,t),u.b.log("configure startPosition to "+this.startPosition)):this.startPosition=0,this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===De&&(this.state=me),this.tick()},h.onKeyLoaded=function(){this.state===be&&(this.state=me,this.tick())},h.onFragLoaded=function(e){var t=this.fragCurrent,r=this.hls,i=this.levels,a=this.media,n=e.frag;if(this.state===Te&&t&&"main"===n.type&&n.level===t.level&&n.sn===t.sn){var s=e.stats,o=i[t.level],l=o.details;if(this.bitrateTest=!1,this.stats=s,u.b.log("Loaded "+t.sn+" of ["+l.startSN+" ,"+l.endSN+"],level "+t.level),n.bitrateTest&&r.nextLoadLevel)this.state=me,this.startFragRequested=!1,s.tparsed=s.tbuffered=window.performance.now(),r.trigger(d.a.FRAG_BUFFERED,{stats:s,frag:t,id:"main"}),this.tick();else if("initSegment"===n.sn)this.state=me,s.tparsed=s.tbuffered=window.performance.now(),l.initSegment.data=e.payload,r.trigger(d.a.FRAG_BUFFERED,{stats:s,frag:t,id:"main"}),this.tick();else{u.b.log("Parsing "+t.sn+" of ["+l.startSN+" ,"+l.endSN+"],level "+t.level+", cc "+t.cc),this.state=_e,this.pendingBuffering=!0,this.appended=!1,n.bitrateTest&&(n.bitrateTest=!1,this.fragmentTracker.onFragLoaded({frag:n}));var c=!(a&&a.seeking)&&(l.PTSKnown||!l.live),h=l.initSegment?l.initSegment.data:[],f=this._getAudioCodec(o);(this.demuxer=this.demuxer||new J(this.hls,"main")).push(e.payload,h,f,o.videoCodec,t,l.totalduration,c)}}this.fragLoadError=0},h.onFragParsingInitSegment=function(e){var t=this.fragCurrent,r=e.frag;if(t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e){var i,a,n=e.tracks;if(this.audioOnly=n.audio&&!n.video,this.altAudio&&!this.audioOnly&&delete n.audio,a=n.audio){var s=this.levels[this.level].audioCodec,o=navigator.userAgent.toLowerCase();s&&this.audioCodecSwap&&(u.b.log("swapping playlist audio codec"),s=-1!==s.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==a.metadata.channelCount&&-1===o.indexOf("firefox")&&(s="mp4a.40.5"),-1!==o.indexOf("android")&&"audio/mpeg"!==a.container&&(s="mp4a.40.2",u.b.log("Android: force audio codec to "+s)),a.levelCodec=s,a.id=e.id}for(i in(a=n.video)&&(a.levelCodec=this.levels[this.level].videoCodec,a.id=e.id),this.hls.trigger(d.a.BUFFER_CODECS,n),n){a=n[i],u.b.log("main track:"+i+",container:"+a.container+",codecs[level/parsed]=["+a.levelCodec+"/"+a.codec+"]");var l=a.initSegment;l&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(d.a.BUFFER_APPENDING,{type:i,data:l,parent:"main",content:"initSegment"}))}this.tick()}},h.onFragParsingData=function(e){var t=this,r=this.fragCurrent,i=e.frag;if(r&&"main"===e.id&&i.sn===r.sn&&i.level===r.level&&("audio"!==e.type||!this.altAudio)&&this.state===_e){var a=this.levels[this.level],n=r;if(Object(l.a)(e.endPTS)||(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),!0===e.hasAudio&&n.addElementaryStream(p.AUDIO),!0===e.hasVideo&&n.addElementaryStream(p.VIDEO),u.b.log("Parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb+",dropped:"+(e.dropped||0)),"video"===e.type)if(n.dropped=e.dropped,n.dropped)if(n.backtracked)u.b.warn("Already backtracked on this fragment, appending with the gap",n.sn);else{var s=a.details;if(!s||n.sn!==s.startSN)return u.b.warn("missing video frame(s), backtracking fragment",n.sn),this.fragmentTracker.removeFragment(n),n.backtracked=!0,this.nextLoadPosition=e.startPTS,this.state=me,this.fragPrevious=n,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),void this.tick();u.b.warn("missing video frame(s) on first frag, appending with gap",n.sn)}else n.backtracked=!1;var o=te(a.details,n,e.startPTS,e.endPTS,e.startDTS,e.endDTS),c=this.hls;c.trigger(d.a.LEVEL_PTS_UPDATED,{details:a.details,level:this.level,drift:o,type:e.type,start:e.startPTS,end:e.endPTS}),[e.data1,e.data2].forEach((function(r){r&&r.length&&t.state===_e&&(t.appended=!0,t.pendingBuffering=!0,c.trigger(d.a.BUFFER_APPENDING,{type:e.type,data:r,parent:"main",content:"data"}))})),this.tick()}},h.onFragParsed=function(e){var t=this.fragCurrent,r=e.frag;t&&"main"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e&&(this.stats.tparsed=window.performance.now(),this.state=Re,this._checkAppendedParsed())},h.onAudioTrackSwitching=function(e){var t=this.altAudio,r=!!e.url,i=e.id;if(!r){if(this.mediaBuffer!==this.media){u.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var a=this.fragCurrent;a.loader&&(u.b.log("switching to main audio track, cancel main fragment load"),a.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=me}var n=this.hls;t&&n.trigger(d.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),n.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:i})}},h.onAudioTrackSwitched=function(e){var t=e.id,r=!!this.hls.audioTracks[t].url;if(r){var i=this.videoBuffer;i&&this.mediaBuffer!==i&&(u.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()},h.onBufferCreated=function(e){var t,r,i=e.tracks,a=!1;for(var n in i){var s=i[n];"main"===s.id?(r=n,t=s,"video"===n&&(this.videoBuffer=i[n].buffer)):a=!0}a&&t?(u.b.log("alternate track found, use "+r+".buffered to schedule main fragment loading"),this.mediaBuffer=t.buffer):this.mediaBuffer=this.media},h.onBufferAppended=function(e){if("main"===e.parent){var t=this.state;t!==_e&&t!==Re||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}},h._checkAppendedParsed=function(){if(!(this.state!==Re||this.appended&&this.pendingBuffering)){var e=this.fragCurrent;if(e){var t=this.mediaBuffer?this.mediaBuffer:this.media;u.b.log("main buffered : "+ne.toString(t.buffered)),this.fragPrevious=e;var r=this.stats;r.tbuffered=window.performance.now(),this.fragLastKbps=Math.round(8*r.total/(r.tbuffered-r.tfirst)),this.hls.trigger(d.a.FRAG_BUFFERED,{stats:r,frag:e,id:"main"}),this.state=me}(this.loadedmetadata||this.startPosition<=0)&&this.tick()}},h.onError=function(e){var t=e.frag||this.fragCurrent;if(!t||"main"===t.type){var r=!!this.media&&H.isBuffered(this.media,this.media.currentTime)&&H.isBuffered(this.media,this.media.currentTime+.5);switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:case o.a.KEY_LOAD_ERROR:case o.a.KEY_LOAD_TIMEOUT:if(!e.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var i=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);u.b.warn("mediaController: frag loading failed, retry in "+i+" ms"),this.retryDate=window.performance.now()+i,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=Ee}else u.b.error("mediaController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=we;break;case o.a.LEVEL_LOAD_ERROR:case o.a.LEVEL_LOAD_TIMEOUT:this.state!==we&&(e.fatal?(this.state=we,u.b.warn("streamController: "+e.details+",switch to "+this.state+" state ...")):e.levelRetry||this.state!==De||(this.state=me));break;case o.a.BUFFER_FULL_ERROR:"main"!==e.parent||this.state!==_e&&this.state!==Re||(r?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=me):(u.b.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)))}}},h._reduceMaxBufferLength=function(e){var t=this.config;return t.maxMaxBufferLength>=e&&(t.maxMaxBufferLength/=2,u.b.warn("main:reduce max buffer length to "+t.maxMaxBufferLength+"s"),!0)},h._checkBuffer=function(){var e=this.media;if(e&&0!==e.readyState){var t=(this.mediaBuffer?this.mediaBuffer:e).buffered;!this.loadedmetadata&&t.length?(this.loadedmetadata=!0,this._seekToStartPos()):this.immediateSwitch?this.immediateLevelSwitchEnd():this.gapController.poll(this.lastCurrentTime,t)}},h.onFragLoadEmergencyAborted=function(){this.state=me,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()},h.onBufferFlushed=function(){var e=this.mediaBuffer?this.mediaBuffer:this.media;if(e){var t=this.audioOnly?p.AUDIO:p.VIDEO;this.fragmentTracker.detectEvictedFragments(t,e.buffered)}this.state=me,this.fragPrevious=null},h.onLevelsUpdated=function(e){this.levels=e.levels},h.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},h._seekToStartPos=function(){var e=this.media,t=e.currentTime,r=this.startPosition;if(t!==r&&r>=0){if(e.seeking)return void u.b.log("could not seek to "+r+", already seeking at "+t);var i=(e.buffered.length?e.buffered.start(0):0)-r;i>0&&i<this.config.maxBufferHole&&(u.b.log("adjusting start position by "+i+" to match buffer start"),r+=i,this.startPosition=r),u.b.log("seek to target start position "+r+" from current time "+t+". ready state "+e.readyState),e.currentTime=r}},h._getAudioCodec=function(e){var t=this.config.defaultAudioCodec||e.audioCodec;return this.audioCodecSwap&&(u.b.log("swapping playlist audio codec"),t&&(t=-1!==t.indexOf("mp4a.40.5")?"mp4a.40.2":"mp4a.40.5")),t},a=i,(s=[{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,u.b.log("main stream-controller: "+t+"->"+e),this.hls.trigger(d.a.STREAM_STATE_TRANSITION,{previousState:t,nextState:e})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var e=this.media;if(e){var t=this.getBufferedFrag(e.currentTime);if(t)return t.level}return-1}},{key:"nextBufferedFrag",get:function(){var e=this.media;return e?this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)):null}},{key:"nextLevel",get:function(){var e=this.nextBufferedFrag;return e?e.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(e){this._liveSyncPosition=e}}])&&Ce(a.prototype,s),c&&Ce(a,c),i}(Oe);function xe(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Me=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MANIFEST_LOADED,d.a.LEVEL_LOADED,d.a.AUDIO_TRACK_SWITCHED,d.a.FRAG_LOADED,d.a.ERROR)||this).canload=!1,r.currentLevelIndex=null,r.manualLevelIndex=-1,r.timer=null,Ie=/chrome|firefox/.test(navigator.userAgent.toLowerCase()),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,l=i.prototype;return l.onHandlerDestroying=function(){this.clearTimer(),this.manualLevelIndex=-1},l.clearTimer=function(){null!==this.timer&&(clearTimeout(this.timer),this.timer=null)},l.startLoad=function(){var e=this._levels;this.canload=!0,this.levelRetryCount=0,e&&e.forEach((function(e){e.loadError=0;var t=e.details;t&&t.live&&(e.details=void 0)})),null!==this.timer&&this.loadLevel()},l.stopLoad=function(){this.canload=!1},l.onManifestLoaded=function(e){var t,r=[],i=[],a={},n=null,s=!1,l=!1;if(e.levels.forEach((function(e){var t=e.attrs;e.loadError=0,e.fragmentError=!1,s=s||!!e.videoCodec,l=l||!!e.audioCodec,Ie&&e.audioCodec&&-1!==e.audioCodec.indexOf("mp4a.40.34")&&(e.audioCodec=void 0),(n=a[e.bitrate])?n.url.push(e.url):(e.url=[e.url],e.urlId=0,a[e.bitrate]=e,r.push(e)),t&&(t.AUDIO&&Z(n||e,"audio",t.AUDIO),t.SUBTITLES&&Z(n||e,"text",t.SUBTITLES))})),s&&l&&(r=r.filter((function(e){return!!e.videoCodec}))),r=r.filter((function(e){var t=e.audioCodec,r=e.videoCodec;return(!t||A(t,"audio"))&&(!r||A(r,"video"))})),e.audioTracks&&(i=e.audioTracks.filter((function(e){return!e.audioCodec||A(e.audioCodec,"audio")}))).forEach((function(e,t){e.id=t})),r.length>0){t=r[0].bitrate,r.sort((function(e,t){return e.bitrate-t.bitrate})),this._levels=r;for(var c=0;c<r.length;c++)if(r[c].bitrate===t){this._firstLevel=c,u.b.log("manifest loaded,"+r.length+" level(s) found, first bitrate:"+t);break}var h=l&&!s;this.hls.trigger(d.a.MANIFEST_PARSED,{levels:r,audioTracks:i,firstLevel:this._firstLevel,stats:e.stats,audio:l,video:s,altAudio:!h&&i.some((function(e){return!!e.url}))})}else this.hls.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:this.hls.url,reason:"no level with compatible codecs found in manifest"})},l.setLevelInternal=function(e){var t=this._levels,r=this.hls;if(e>=0&&e<t.length){if(this.clearTimer(),this.currentLevelIndex!==e){u.b.log("switching to level "+e),this.currentLevelIndex=e;var i=t[e];i.level=e,r.trigger(d.a.LEVEL_SWITCHING,i)}var a=t[e],n=a.details;if(!n||n.live){var s=a.urlId;r.trigger(d.a.LEVEL_LOADING,{url:a.url[s],level:e,id:s})}}else r.trigger(d.a.ERROR,{type:o.b.OTHER_ERROR,details:o.a.LEVEL_SWITCH_ERROR,level:e,fatal:!1,reason:"invalid level idx"})},l.onError=function(e){if(e.fatal)e.type===o.b.NETWORK_ERROR&&this.clearTimer();else{var t,r=!1,i=!1;switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:case o.a.KEY_LOAD_ERROR:case o.a.KEY_LOAD_TIMEOUT:t=e.frag.level,i=!0;break;case o.a.LEVEL_LOAD_ERROR:case o.a.LEVEL_LOAD_TIMEOUT:t=e.context.level,r=!0;break;case o.a.REMUX_ALLOC_ERROR:t=e.level,r=!0}void 0!==t&&this.recoverLevel(e,t,r,i)}},l.recoverLevel=function(e,t,r,i){var a,n,s,o=this,l=this.hls.config,d=e.details,c=this._levels[t];if(c.loadError++,c.fragmentError=i,r){if(!(this.levelRetryCount+1<=l.levelLoadingMaxRetry))return u.b.error("level controller, cannot recover from "+d+" error"),this.currentLevelIndex=null,this.clearTimer(),void(e.fatal=!0);n=Math.min(Math.pow(2,this.levelRetryCount)*l.levelLoadingRetryDelay,l.levelLoadingMaxRetryTimeout),this.timer=setTimeout((function(){return o.loadLevel()}),n),e.levelRetry=!0,this.levelRetryCount++,u.b.warn("level controller, "+d+", retry in "+n+" ms, current retry count is "+this.levelRetryCount)}(r||i)&&((a=c.url.length)>1&&c.loadError<a?(c.urlId=(c.urlId+1)%a,c.details=void 0,u.b.warn("level controller, "+d+" for level "+t+": switching to redundant URL-id "+c.urlId)):-1===this.manualLevelIndex?(s=0===t?this._levels.length-1:t-1,u.b.warn("level controller, "+d+": switch to "+s),this.hls.nextAutoLevel=this.currentLevelIndex=s):i&&(u.b.warn("level controller, "+d+": reload a fragment"),this.currentLevelIndex=null))},l.onFragLoaded=function(e){var t=e.frag;if(void 0!==t&&"main"===t.type){var r=this._levels[t.level];void 0!==r&&(r.fragmentError=!1,r.loadError=0,this.levelRetryCount=0)}},l.onLevelLoaded=function(e){var t=this,r=e.level,i=e.details;if(r===this.currentLevelIndex){var a=this._levels[r];if(a.fragmentError||(a.loadError=0,this.levelRetryCount=0),i.live){var n=ae(a.details,i,e.stats.trequest);u.b.log("live playlist, reload in "+Math.round(n)+" ms"),this.timer=setTimeout((function(){return t.loadLevel()}),n)}else this.clearTimer()}},l.onAudioTrackSwitched=function(e){var t=this.hls.audioTracks[e.id].groupId,r=this.hls.levels[this.currentLevelIndex];if(r&&r.audioGroupIds){for(var i=-1,a=0;a<r.audioGroupIds.length;a++)if(r.audioGroupIds[a]===t){i=a;break}i!==r.urlId&&(r.urlId=i,this.startLoad())}},l.loadLevel=function(){if(u.b.debug("call to loadLevel"),null!==this.currentLevelIndex&&this.canload){var e=this._levels[this.currentLevelIndex];if("object"==typeof e&&e.url.length>0){var t=this.currentLevelIndex,r=e.urlId,i=e.url[r];u.b.log("Attempt loading level index "+t+" with URL-id "+r),this.hls.trigger(d.a.LEVEL_LOADING,{url:i,level:t,id:r})}}},l.removeLevel=function(e,t){var r=this.levels.filter((function(r,i){return i!==e||r.url.length>1&&void 0!==t&&(r.url=r.url.filter((function(e,r){return r!==t})),r.urlId=0,!0)})).map((function(e,t){var r=e.details;return r&&r.fragments&&r.fragments.forEach((function(e){e.level=t})),e}));this._levels=r,this.hls.trigger(d.a.LEVELS_UPDATED,{levels:r})},a=i,(n=[{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this.currentLevelIndex},set:function(e){var t=this._levels;t&&(e=Math.min(e,t.length-1),this.currentLevelIndex===e&&t[e].details||this.setLevelInternal(e))}},{key:"manualLevel",get:function(){return this.manualLevelIndex},set:function(e){this.manualLevelIndex=e,void 0===this._startLevel&&(this._startLevel=e),-1!==e&&(this.level=e)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(e){this._firstLevel=e}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var e=this.hls.config.startLevel;return void 0!==e?e:this._firstLevel}return this._startLevel},set:function(e){this._startLevel=e}},{key:"nextLoadLevel",get:function(){return-1!==this.manualLevelIndex?this.manualLevelIndex:this.hls.nextAutoLevel},set:function(e){this.level=e,-1===this.manualLevelIndex&&(this.hls.nextAutoLevel=e)}}])&&xe(a.prototype,n),s&&xe(a,s),i}(h),Fe=r(4);function Ue(e,t){var r;try{r=new Event("addtrack")}catch(e){(r=document.createEvent("Event")).initEvent("addtrack",!1,!1)}r.track=e,t.dispatchEvent(r)}function Ne(e){if(null==e?void 0:e.cues)for(;e.cues.length>0;)e.removeCue(e.cues[0])}var Be=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.FRAG_PARSING_METADATA,d.a.LIVE_BACK_BUFFER_REACHED)||this).id3Track=void 0,r.media=void 0,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){h.prototype.destroy.call(this)},a.onMediaAttached=function(e){this.media=e.media,this.media},a.onMediaDetaching=function(){Ne(this.id3Track),this.id3Track=void 0,this.media=void 0},a.getID3Track=function(e){for(var t=0;t<e.length;t++){var r=e[t];if("metadata"===r.kind&&"id3"===r.label)return Ue(r,this.media),r}return this.media.addTextTrack("metadata","id3")},a.onFragParsingMetadata=function(e){var t=e.frag,r=e.samples;this.id3Track||(this.id3Track=this.getID3Track(this.media.textTracks),this.id3Track.mode="hidden");for(var i=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,a=0;a<r.length;a++){var n=Fe.a.getID3Frames(r[a].data);if(n){var s=Math.max(r[a].pts,0),o=a<r.length-1?r[a+1].pts:t.endPTS;o||(o=t.start+t.duration),o-s<=0&&(o=s+.25);for(var l=0;l<n.length;l++){var d=n[l];if(!Fe.a.isTimeStampFrame(d)){var u=new i(s,o,"");u.value=d,this.id3Track.addCue(u)}}}}},a.onLiveBackBufferReached=function(e){var t=e.bufferEnd,r=this.id3Track;if(r&&r.cues&&r.cues.length){var i=function(e,t){if(t<e[0].endTime)return e[0];if(t>e[e.length-1].endTime)return e[e.length-1];for(var r=0,i=e.length-1;r<=i;){var a=Math.floor((i+r)/2);if(t<e[a].endTime)i=a-1;else{if(!(t>e[a].endTime))return e[a];r=a+1}}return e[r].endTime-t<t-e[i].endTime?e[r]:e[i]}(r.cues,t);if(i)for(;r.cues[0]!==i;)r.removeCue(r.cues[0])}},i}(h);var Ge=function(){function e(e){this.alpha_=void 0,this.estimate_=void 0,this.totalWeight_=void 0,this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}var t=e.prototype;return t.sample=function(e,t){var r=Math.pow(this.alpha_,e);this.estimate_=t*(1-r)+r*this.estimate_,this.totalWeight_+=e},t.getTotalWeight=function(){return this.totalWeight_},t.getEstimate=function(){if(this.alpha_){var e=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/e}return this.estimate_},e}(),Ke=function(){function e(e,t,r,i){this.hls=void 0,this.defaultEstimate_=void 0,this.minWeight_=void 0,this.minDelayMs_=void 0,this.slow_=void 0,this.fast_=void 0,this.hls=e,this.defaultEstimate_=i,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new Ge(t),this.fast_=new Ge(r)}var t=e.prototype;return t.sample=function(e,t){var r=(e=Math.max(e,this.minDelayMs_))/1e3,i=8*t/r;this.fast_.sample(r,i),this.slow_.sample(r,i)},t.canEstimate=function(){var e=this.fast_;return e&&e.getTotalWeight()>=this.minWeight_},t.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},t.destroy=function(){},e}();function je(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var He=window.performance,Ve=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.FRAG_LOADING,d.a.FRAG_LOADED,d.a.FRAG_BUFFERED,d.a.ERROR)||this).lastLoadedFragLevel=0,r._nextAutoLevel=-1,r.hls=t,r.timer=null,r._bwEstimator=null,r.onCheck=r._abandonRulesCheck.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,c=i.prototype;return c.destroy=function(){this.clearTimer(),h.prototype.destroy.call(this)},c.onFragLoading=function(e){var t=e.frag;if("main"===t.type&&(this.timer||(this.fragCurrent=t,this.timer=setInterval(this.onCheck,100)),!this._bwEstimator)){var r,i,a=this.hls,n=a.config,s=t.level;a.levels[s].details.live?(r=n.abrEwmaFastLive,i=n.abrEwmaSlowLive):(r=n.abrEwmaFastVoD,i=n.abrEwmaSlowVoD),this._bwEstimator=new Ke(a,i,r,n.abrEwmaDefaultEstimate)}},c._abandonRulesCheck=function(){var e=this.hls,t=e.media,r=this.fragCurrent;if(r){var i=r.loader;if(!i||i.stats&&i.stats.aborted)return u.b.warn("frag loader destroy or aborted, disarm abandonRules"),this.clearTimer(),void(this._nextAutoLevel=-1);var a=i.stats;if(t&&a&&(!t.paused&&0!==t.playbackRate||!t.readyState)&&r.autoLevel&&r.level){var n=He.now()-a.trequest,s=Math.abs(t.playbackRate);if(n>500*r.duration/s){var o=e.levels,l=Math.max(1,a.bw?a.bw/8:1e3*a.loaded/n),c=o[r.level];if(!c)return;var h=c.realBitrate?Math.max(c.realBitrate,c.bitrate):c.bitrate,f=a.total?a.total:Math.max(a.loaded,Math.round(r.duration*h/8)),g=t.currentTime,p=(f-a.loaded)/l,v=(H.bufferInfo(t,g,e.config.maxBufferHole).end-g)/s;if(v<2*r.duration/s&&p>v){var m,y=e.minAutoLevel;for(m=r.level-1;m>y;m--){var b=o[m].realBitrate?Math.max(o[m].realBitrate,o[m].bitrate):o[m].bitrate;if(r.duration*b/(6.4*l)<v)break}void 0<p&&(u.b.warn("loading too slow, abort fragment loading and switch to level "+m+":fragLoadedDelay["+m+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+(void 0).toFixed(1)+"<"+p.toFixed(1)+":"+v.toFixed(1)),e.nextLoadLevel=m,this._bwEstimator.sample(n,a.loaded),i.abort(),this.clearTimer(),e.trigger(d.a.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:a}))}}}}},c.onFragLoaded=function(e){var t=e.frag;if("main"===t.type&&Object(l.a)(t.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=t.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var r=this.hls.levels[t.level],i=(r.loaded?r.loaded.bytes:0)+e.stats.loaded,a=(r.loaded?r.loaded.duration:0)+e.frag.duration;r.loaded={bytes:i,duration:a},r.realBitrate=Math.round(8*i/a)}if(e.frag.bitrateTest){var n=e.stats;n.tparsed=n.tbuffered=n.tload,this.onFragBuffered(e)}}},c.onFragBuffered=function(e){var t=e.stats,r=e.frag;if(!0!==t.aborted&&"main"===r.type&&Object(l.a)(r.sn)&&(!r.bitrateTest||t.tload===t.tbuffered)){var i=t.tparsed-t.trequest;u.b.log("latency/loading/parsing/append/kbps:"+Math.round(t.tfirst-t.trequest)+"/"+Math.round(t.tload-t.tfirst)+"/"+Math.round(t.tparsed-t.tload)+"/"+Math.round(t.tbuffered-t.tparsed)+"/"+Math.round(8*t.loaded/(t.tbuffered-t.trequest))),this._bwEstimator.sample(i,t.loaded),t.bwEstimate=this._bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=i/1e3:this.bitrateTestDelay=0}},c.onError=function(e){switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:this.clearTimer()}},c.clearTimer=function(){clearInterval(this.timer),this.timer=null},c._findBestLevel=function(e,t,r,i,a,n,s,o,l){for(var d=a;d>=i;d--){var c=l[d];if(c){var h=c.details,f=h?h.totalduration/h.fragments.length:t,g=!!h&&h.live,p=void 0;p=d<=e?s*r:o*r;var v=l[d].realBitrate?Math.max(l[d].realBitrate,l[d].bitrate):l[d].bitrate,m=v*f/p;if(u.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+d+"/"+Math.round(p)+"/"+v+"/"+f+"/"+n+"/"+m),p>v&&(!m||g&&!this.bitrateTestDelay||m<n))return d}}return-1},a=i,(n=[{key:"nextAutoLevel",get:function(){var e=this._nextAutoLevel,t=this._bwEstimator;if(!(-1===e||t&&t.canEstimate()))return e;var r=this._nextABRAutoLevel;return-1!==e&&(r=Math.min(e,r)),r},set:function(e){this._nextAutoLevel=e}},{key:"_nextABRAutoLevel",get:function(){var e=this.hls,t=e.maxAutoLevel,r=e.levels,i=e.config,a=e.minAutoLevel,n=e.media,s=this.lastLoadedFragLevel,o=this.fragCurrent?this.fragCurrent.duration:0,l=n?n.currentTime:0,d=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,c=this._bwEstimator?this._bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,h=(H.bufferInfo(n,l,i.maxBufferHole).end-l)/d,f=this._findBestLevel(s,o,c,a,t,h,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(f>=0)return f;u.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var g=o?Math.min(o,i.maxStarvationDelay):i.maxStarvationDelay,p=i.abrBandWidthFactor,v=i.abrBandWidthUpFactor;if(0===h){var m=this.bitrateTestDelay;m&&(g=(o?Math.min(o,i.maxLoadingDelay):i.maxLoadingDelay)-m,u.b.trace("bitrate test took "+Math.round(1e3*m)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*g)+" ms"),p=v=1)}return f=this._findBestLevel(s,o,c,a,t,h+g,p,v,r),Math.max(f,0)}}])&&je(a.prototype,n),s&&je(a,s),i}(h);var Ye=q(),We=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MEDIA_ATTACHING,d.a.MEDIA_DETACHING,d.a.MANIFEST_PARSED,d.a.BUFFER_RESET,d.a.BUFFER_APPENDING,d.a.BUFFER_CODECS,d.a.BUFFER_EOS,d.a.BUFFER_FLUSHING,d.a.LEVEL_PTS_UPDATED,d.a.LEVEL_UPDATED)||this)._msDuration=null,r._levelDuration=null,r._levelTargetDuration=10,r._live=null,r._objectUrl=null,r._needsFlush=!1,r._needsEos=!1,r.config=void 0,r.audioTimestampOffset=void 0,r.bufferCodecEventsExpected=0,r._bufferCodecEventsTotal=0,r.media=null,r.mediaSource=null,r.segments=[],r.parent=void 0,r.appending=!1,r.appended=0,r.appendError=0,r.flushBufferCounter=0,r.tracks={},r.pendingTracks={},r.sourceBuffer={},r.flushRange=[],r._onMediaSourceOpen=function(){u.b.log("media source opened"),r.hls.trigger(d.a.MEDIA_ATTACHED,{media:r.media});var e=r.mediaSource;e&&e.removeEventListener("sourceopen",r._onMediaSourceOpen),r.checkPendingTracks()},r._onMediaSourceClose=function(){u.b.log("media source closed")},r._onMediaSourceEnded=function(){u.b.log("media source ended")},r._onSBUpdateEnd=function(){if(r.audioTimestampOffset&&r.sourceBuffer.audio){var e=r.sourceBuffer.audio;u.b.warn("change mpeg audio timestamp offset from "+e.timestampOffset+" to "+r.audioTimestampOffset),e.timestampOffset=r.audioTimestampOffset,delete r.audioTimestampOffset}r._needsFlush&&r.doFlush(),r._needsEos&&r.checkEos(),r.appending=!1;var t=r.parent,i=r.segments.reduce((function(e,r){return r.parent===t?e+1:e}),0),a={},n=r.sourceBuffer;for(var s in n){var o=n[s];if(!o)throw Error("handling source buffer update end error: source buffer for "+s+" uninitilized and unable to update buffered TimeRanges.");a[s]=o.buffered}r.hls.trigger(d.a.BUFFER_APPENDED,{parent:t,pending:i,timeRanges:a}),r._needsFlush||r.doAppending(),r.updateMediaElementDuration(),0===i&&r.flushLiveBackBuffer()},r._onSBUpdateError=function(e){u.b.error("sourceBuffer error:",e),r.hls.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_APPENDING_ERROR,fatal:!1})},r.config=t.config,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){h.prototype.destroy.call(this)},a.onLevelPtsUpdated=function(e){var t=e.type,r=this.tracks.audio;if("audio"===t&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio;if(!i)throw Error("Level PTS Updated and source buffer for audio uninitalized");if(Math.abs(i.timestampOffset-e.start)>.1){var a=i.updating;try{i.abort()}catch(e){u.b.warn("can not abort audio buffer: "+e)}a?this.audioTimestampOffset=e.start:(u.b.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+e.start),i.timestampOffset=e.start)}}},a.onManifestParsed=function(e){var t=2;(e.audio&&!e.video||!e.altAudio)&&(t=1),this.bufferCodecEventsExpected=this._bufferCodecEventsTotal=t,u.b.log(this.bufferCodecEventsExpected+" bufferCodec event(s) expected")},a.onMediaAttaching=function(e){var t=this.media=e.media;if(t&&Ye){var r=this.mediaSource=new Ye;r.addEventListener("sourceopen",this._onMediaSourceOpen),r.addEventListener("sourceended",this._onMediaSourceEnded),r.addEventListener("sourceclose",this._onMediaSourceClose),t.src=window.URL.createObjectURL(r),this._objectUrl=t.src}},a.onMediaDetaching=function(){u.b.log("media source detaching");var e=this.mediaSource;if(e){if("open"===e.readyState)try{e.endOfStream()}catch(e){u.b.warn("onMediaDetaching:"+e.message+" while calling endOfStream")}e.removeEventListener("sourceopen",this._onMediaSourceOpen),e.removeEventListener("sourceended",this._onMediaSourceEnded),e.removeEventListener("sourceclose",this._onMediaSourceClose),this.media&&(this._objectUrl&&window.URL.revokeObjectURL(this._objectUrl),this.media.src===this._objectUrl?(this.media.removeAttribute("src"),this.media.load()):u.b.warn("media.src was changed by a third party - skip cleanup")),this.mediaSource=null,this.media=null,this._objectUrl=null,this.bufferCodecEventsExpected=this._bufferCodecEventsTotal,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.hls.trigger(d.a.MEDIA_DETACHED)},a.checkPendingTracks=function(){var e=this.bufferCodecEventsExpected,t=this.pendingTracks,r=Object.keys(t).length;(r&&!e||2===r)&&(this.createSourceBuffers(t),this.pendingTracks={},this.doAppending())},a.onBufferReset=function(){var e=this.sourceBuffer;for(var t in e){var r=e[t];try{r&&(this.mediaSource&&this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this._onSBUpdateEnd),r.removeEventListener("error",this._onSBUpdateError))}catch(e){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0},a.onBufferCodecs=function(e){var t=this;Object.keys(this.sourceBuffer).length||(Object.keys(e).forEach((function(r){t.pendingTracks[r]=e[r]})),this.bufferCodecEventsExpected=Math.max(this.bufferCodecEventsExpected-1,0),this.mediaSource&&"open"===this.mediaSource.readyState&&this.checkPendingTracks())},a.createSourceBuffers=function(e){var t=this.sourceBuffer,r=this.mediaSource;if(!r)throw Error("createSourceBuffers called when mediaSource was null");for(var i in e)if(!t[i]){var a=e[i];if(!a)throw Error("source buffer exists for track "+i+", however track does not");var n=a.levelCodec||a.codec,s=a.container+";codecs="+n;u.b.log("creating sourceBuffer("+s+")");try{var l=t[i]=r.addSourceBuffer(s);l.addEventListener("updateend",this._onSBUpdateEnd),l.addEventListener("error",this._onSBUpdateError),this.tracks[i]={buffer:l,codec:n,id:a.id,container:a.container,levelCodec:a.levelCodec}}catch(e){u.b.error("error while trying to add sourceBuffer:"+e.message),this.hls.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:e,mimeType:s})}}this.hls.trigger(d.a.BUFFER_CREATED,{tracks:this.tracks})},a.onBufferAppending=function(e){this._needsFlush||(this.segments?this.segments.push(e):this.segments=[e],this.doAppending())},a.onBufferEos=function(e){for(var t in this.sourceBuffer)if(!e.type||e.type===t){var r=this.sourceBuffer[t];r&&!r.ended&&(r.ended=!0,u.b.log(t+" sourceBuffer now EOS"))}this.checkEos()},a.checkEos=function(){var e=this.sourceBuffer,t=this.mediaSource;if(t&&"open"===t.readyState){for(var r in e){var i=e[r];if(i){if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}}u.b.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");try{t.endOfStream()}catch(e){u.b.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1}else this._needsEos=!1},a.onBufferFlushing=function(e){e.type?this.flushRange.push({start:e.startOffset,end:e.endOffset,type:e.type}):(this.flushRange.push({start:e.startOffset,end:e.endOffset,type:"video"}),this.flushRange.push({start:e.startOffset,end:e.endOffset,type:"audio"})),this.flushBufferCounter=0,this.doFlush()},a.flushLiveBackBuffer=function(){if(this._live){var e=this.config.liveBackBufferLength;if(isFinite(e)&&!(e<0))if(this.media)for(var t=this.media.currentTime,r=this.sourceBuffer,i=Object.keys(r),a=t-Math.max(e,this._levelTargetDuration),n=i.length-1;n>=0;n--){var s=i[n],o=r[s];if(o){var l=o.buffered;l.length>0&&a>l.start(0)&&this.removeBufferRange(s,o,0,a)&&this.hls.trigger(d.a.LIVE_BACK_BUFFER_REACHED,{bufferEnd:a})}}else u.b.error("flushLiveBackBuffer called without attaching media")}},a.onLevelUpdated=function(e){var t=e.details;t.fragments.length>0&&(this._levelDuration=t.totalduration+t.fragments[0].start,this._levelTargetDuration=t.averagetargetduration||t.targetduration||10,this._live=t.live,this.updateMediaElementDuration())},a.updateMediaElementDuration=function(){var e,t=this.config;if(null!==this._levelDuration&&this.media&&this.mediaSource&&this.sourceBuffer&&0!==this.media.readyState&&"open"===this.mediaSource.readyState){for(var r in this.sourceBuffer){var i=this.sourceBuffer[r];if(i&&!0===i.updating)return}e=this.media.duration,null===this._msDuration&&(this._msDuration=this.mediaSource.duration),!0===this._live&&!0===t.liveDurationInfinity?(u.b.log("Media Source duration is set to Infinity"),this._msDuration=this.mediaSource.duration=1/0):(this._levelDuration>this._msDuration&&this._levelDuration>e||!Object(l.a)(e))&&(u.b.log("Updating Media Source duration to "+this._levelDuration.toFixed(3)),this._msDuration=this.mediaSource.duration=this._levelDuration)}},a.doFlush=function(){for(;this.flushRange.length;){var e=this.flushRange[0];if(!this.flushBuffer(e.start,e.end,e.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var t=0,r=this.sourceBuffer;try{for(var i in r){var a=r[i];a&&(t+=a.buffered.length)}}catch(e){u.b.error("error while accessing sourceBuffer.buffered")}this.appended=t,this.hls.trigger(d.a.BUFFER_FLUSHED)}},a.doAppending=function(){var e=this.config,t=this.hls,r=this.segments,i=this.sourceBuffer;if(Object.keys(i).length){if(!this.media||this.media.error)return this.segments=[],void u.b.error("trying to append although a media error occured, flush segment and abort");if(!this.appending){var a=r.shift();if(a)try{var n=i[a.type];if(!n)return void this._onSBUpdateEnd();if(n.updating)return void r.unshift(a);n.ended=!1,this.parent=a.parent,n.appendBuffer(a.data),this.appendError=0,this.appended++,this.appending=!0}catch(i){u.b.error("error while trying to append buffer:"+i.message),r.unshift(a);var s={type:o.b.MEDIA_ERROR,parent:a.parent,details:"",fatal:!1};22===i.code?(this.segments=[],s.details=o.a.BUFFER_FULL_ERROR):(this.appendError++,s.details=o.a.BUFFER_APPEND_ERROR,this.appendError>e.appendErrorMaxRetry&&(u.b.log("fail "+e.appendErrorMaxRetry+" times to append segment in sourceBuffer"),this.segments=[],s.fatal=!0)),t.trigger(d.a.ERROR,s)}}}},a.flushBuffer=function(e,t,r){var i=this.sourceBuffer;if(!Object.keys(i).length)return!0;var a="null";if(this.media&&(a=this.media.currentTime.toFixed(3)),u.b.log("flushBuffer,pos/start/end: "+a+"/"+e+"/"+t),this.flushBufferCounter>=this.appended)return u.b.warn("abort flushing too many retries"),!0;var n=i[r];if(n){if(n.ended=!1,n.updating)return u.b.warn("cannot flush, sb updating in progress"),!1;if(this.removeBufferRange(r,n,e,t))return this.flushBufferCounter++,!1}return u.b.log("buffer flushed"),!0},a.removeBufferRange=function(e,t,r,i){try{for(var a=0;a<t.buffered.length;a++){var n=t.buffered.start(a),s=t.buffered.end(a),o=Math.max(n,r),l=Math.min(s,i);if(Math.min(l,s)-o>.5){var d="null";return this.media&&(d=this.media.currentTime.toString()),u.b.log("sb remove "+e+" ["+o+","+l+"], of ["+n+","+s+"], pos:"+d),t.remove(o,l),!0}}}catch(e){u.b.warn("removeBufferRange failed",e)}return!1},i}(h);function qe(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Xe=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.FPS_DROP_LEVEL_CAPPING,d.a.MEDIA_ATTACHING,d.a.MANIFEST_PARSED,d.a.LEVELS_UPDATED,d.a.BUFFER_CODECS,d.a.MEDIA_DETACHING)||this).autoLevelCapping=Number.POSITIVE_INFINITY,r.firstLevel=null,r.levels=[],r.media=null,r.restrictedLevels=[],r.timer=null,r.clientRect=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,o=i.prototype;return o.destroy=function(){this.hls.config.capLevelToPlayerSize&&(this.media=null,this.clientRect=null,this.stopCapping())},o.onFpsDropLevelCapping=function(e){i.isLevelAllowed(e.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(e.droppedLevel)},o.onMediaAttaching=function(e){this.media=e.media instanceof window.HTMLVideoElement?e.media:null},o.onManifestParsed=function(e){var t=this.hls;this.restrictedLevels=[],this.levels=e.levels,this.firstLevel=e.firstLevel,t.config.capLevelToPlayerSize&&e.video&&this.startCapping()},o.onBufferCodecs=function(e){this.hls.config.capLevelToPlayerSize&&e.video&&this.startCapping()},o.onLevelsUpdated=function(e){this.levels=e.levels},o.onMediaDetaching=function(){this.stopCapping()},o.detectPlayerSize=function(){if(this.media){var e=this.levels?this.levels.length:0;if(e){var t=this.hls;t.autoLevelCapping=this.getMaxLevel(e-1),t.autoLevelCapping>this.autoLevelCapping&&t.streamController.nextLevelSwitch(),this.autoLevelCapping=t.autoLevelCapping}}},o.getMaxLevel=function(e){var t=this;if(!this.levels)return-1;var r=this.levels.filter((function(r,a){return i.isLevelAllowed(a,t.restrictedLevels)&&a<=e}));return this.clientRect=null,i.getMaxLevelByMediaSize(r,this.mediaWidth,this.mediaHeight)},o.startCapping=function(){this.timer||(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.hls.firstLevel=this.getMaxLevel(this.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},o.stopCapping=function(){this.restrictedLevels=[],this.firstLevel=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer),this.timer=null)},o.getDimensions=function(){if(this.clientRect)return this.clientRect;var e=this.media,t={width:0,height:0};if(e){var r=e.getBoundingClientRect();t.width=r.width,t.height=r.height,t.width||t.height||(t.width=r.right-r.left||e.width||0,t.height=r.bottom-r.top||e.height||0)}return this.clientRect=t,t},i.isLevelAllowed=function(e,t){return void 0===t&&(t=[]),-1===t.indexOf(e)},i.getMaxLevelByMediaSize=function(e,t,r){if(!e||e&&!e.length)return-1;for(var i,a,n=e.length-1,s=0;s<e.length;s+=1){var o=e[s];if((o.width>=t||o.height>=r)&&(i=o,!(a=e[s+1])||i.width!==a.width||i.height!==a.height)){n=s;break}}return n},a=i,s=[{key:"contentScaleFactor",get:function(){var e=1;try{e=window.devicePixelRatio}catch(e){}return e}}],(n=[{key:"mediaWidth",get:function(){return this.getDimensions().width*i.contentScaleFactor}},{key:"mediaHeight",get:function(){return this.getDimensions().height*i.contentScaleFactor}}])&&qe(a.prototype,n),s&&qe(a,s),i}(h);var ze=window.performance,Qe=function(e){var t,r;function i(t){return e.call(this,t,d.a.MEDIA_ATTACHING)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.destroy=function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1},a.onMediaAttaching=function(e){var t=this.hls.config;t.capLevelOnFPSDrop&&("function"==typeof(this.video=e.media instanceof window.HTMLVideoElement?e.media:null).getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),t.fpsDroppedMonitoringPeriod))},a.checkFPS=function(e,t,r){var i=ze.now();if(t){if(this.lastTime){var a=i-this.lastTime,n=r-this.lastDroppedFrames,s=t-this.lastDecodedFrames,o=1e3*n/a,l=this.hls;if(l.trigger(d.a.FPS_DROP,{currentDropped:n,currentDecoded:s,totalDroppedFrames:r}),o>0&&n>l.config.fpsDroppedMonitoringThreshold*s){var c=l.currentLevel;u.b.warn("drop FPS ratio greater than max allowed value for currentLevel: "+c),c>0&&(-1===l.autoLevelCapping||l.autoLevelCapping>=c)&&(c-=1,l.trigger(d.a.FPS_DROP_LEVEL_CAPPING,{level:c,droppedLevel:l.currentLevel}),l.autoLevelCapping=c,l.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=t}},a.checkFPSInterval=function(){var e=this.video;if(e)if(this.isVideoPlaybackQualityAvailable){var t=e.getVideoPlaybackQuality();this.checkFPS(e,t.totalVideoFrames,t.droppedVideoFrames)}else this.checkFPS(e,e.webkitDecodedFrameCount,e.webkitDroppedFrameCount)},i}(h),$e=function(){function e(e){e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}var t=e.prototype;return t.destroy=function(){this.abort(),this.loader=null},t.abort=function(){var e=this.loader;e&&4!==e.readyState&&(this.stats.aborted=!0,e.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null},t.load=function(e,t,r){this.context=e,this.config=t,this.callbacks=r,this.stats={trequest:window.performance.now(),retry:0},this.retryDelay=t.retryDelay,this.loadInternal()},t.loadInternal=function(){var e,t=this.context;e=this.loader=new window.XMLHttpRequest;var r=this.stats;r.tfirst=0,r.loaded=0;var i=this.xhrSetup;try{if(i)try{i(e,t.url)}catch(r){e.open("GET",t.url,!0),i(e,t.url)}e.readyState||e.open("GET",t.url,!0)}catch(r){return void this.callbacks.onError({code:e.status,text:r.message},t,e)}t.rangeEnd&&e.setRequestHeader("Range","bytes="+t.rangeStart+"-"+(t.rangeEnd-1)),e.onreadystatechange=this.readystatechange.bind(this),e.onprogress=this.loadprogress.bind(this),e.responseType=t.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),e.send()},t.readystatechange=function(e){var t=e.currentTarget,r=t.readyState,i=this.stats,a=this.context,n=this.config;if(!i.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===i.tfirst&&(i.tfirst=Math.max(window.performance.now(),i.trequest)),4===r){var s=t.status;if(s>=200&&s<300){var o,l;i.tload=Math.max(i.tfirst,window.performance.now()),l="arraybuffer"===a.responseType?(o=t.response).byteLength:(o=t.responseText).length,i.loaded=i.total=l;var d={url:t.responseURL,data:o};this.callbacks.onSuccess(d,i,a,t)}else i.retry>=n.maxRetry||s>=400&&s<499?(u.b.error(s+" while loading "+a.url),this.callbacks.onError({code:s,text:t.statusText},a,t)):(u.b.warn(s+" while loading "+a.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,n.maxRetryDelay),i.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),n.timeout)},t.loadtimeout=function(){u.b.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)},t.loadprogress=function(e){var t=e.currentTarget,r=this.stats;r.loaded=e.loaded,e.lengthComputable&&(r.total=e.total);var i=this.callbacks.onProgress;i&&i(r,this.context,null,t)},e}();function Je(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Ze=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MANIFEST_LOADING,d.a.MANIFEST_PARSED,d.a.AUDIO_TRACK_LOADED,d.a.AUDIO_TRACK_SWITCHED,d.a.LEVEL_LOADED,d.a.ERROR)||this)._trackId=-1,r._selectDefaultTrack=!0,r.tracks=[],r.trackIdBlacklist=Object.create(null),r.audioGroupId=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,l=i.prototype;return l.onManifestLoading=function(){this.tracks=[],this._trackId=-1,this._selectDefaultTrack=!0},l.onManifestParsed=function(e){var t=this.tracks=e.audioTracks||[];this.hls.trigger(d.a.AUDIO_TRACKS_UPDATED,{audioTracks:t}),this._selectAudioGroup(this.hls.nextLoadLevel)},l.onAudioTrackLoaded=function(e){if(e.id>=this.tracks.length)u.b.warn("Invalid audio track id:",e.id);else{if(u.b.log("audioTrack "+e.id+" loaded"),this.tracks[e.id].details=e.details,e.details.live&&!this.hasInterval()){var t=1e3*e.details.targetduration;this.setInterval(t)}!e.details.live&&this.hasInterval()&&this.clearInterval()}},l.onAudioTrackSwitched=function(e){var t=this.tracks[e.id].groupId;t&&this.audioGroupId!==t&&(this.audioGroupId=t)},l.onLevelLoaded=function(e){this._selectAudioGroup(e.level)},l.onError=function(e){e.type===o.b.NETWORK_ERROR&&(e.fatal&&this.clearInterval(),e.details===o.a.AUDIO_TRACK_LOAD_ERROR&&(u.b.warn("Network failure on audio-track id:",e.context.id),this._handleLoadError()))},l._setAudioTrack=function(e){if(this._trackId===e&&this.tracks[this._trackId].details)u.b.debug("Same id as current audio-track passed, and track details available -> no-op");else if(e<0||e>=this.tracks.length)u.b.warn("Invalid id passed to audio-track controller");else{var t=this.tracks[e];u.b.log("Now switching to audio-track index "+e),this.clearInterval(),this._trackId=e;var r=t.url,i=t.type,a=t.id;this.hls.trigger(d.a.AUDIO_TRACK_SWITCHING,{id:a,type:i,url:r}),this._loadTrackDetailsIfNeeded(t)}},l.doTick=function(){this._updateTrack(this._trackId)},l._selectAudioGroup=function(e){var t=this.hls.levels[e];if(t&&t.audioGroupIds){var r=t.audioGroupIds[t.urlId];this.audioGroupId!==r&&(this.audioGroupId=r,this._selectInitialAudioTrack())}},l._selectInitialAudioTrack=function(){var e=this,t=this.tracks;if(t.length){var r=this.tracks[this._trackId],i=null;if(r&&(i=r.name),this._selectDefaultTrack){var a=t.filter((function(e){return e.default}));a.length?t=a:u.b.warn("No default audio tracks defined")}var n=!1,s=function(){t.forEach((function(t){n||e.audioGroupId&&t.groupId!==e.audioGroupId||i&&i!==t.name||(e._setAudioTrack(t.id),n=!0)}))};s(),n||(i=null,s()),n||(u.b.error("No track found for running audio group-ID: "+this.audioGroupId),this.hls.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:o.a.AUDIO_TRACK_LOAD_ERROR,fatal:!0}))}},l._needsTrackLoading=function(e){var t=e.details,r=e.url;return!(t&&!t.live)&&!!r},l._loadTrackDetailsIfNeeded=function(e){if(this._needsTrackLoading(e)){var t=e.url,r=e.id;u.b.log("loading audio-track playlist for id: "+r),this.hls.trigger(d.a.AUDIO_TRACK_LOADING,{url:t,id:r})}},l._updateTrack=function(e){if(!(e<0||e>=this.tracks.length)){this.clearInterval(),this._trackId=e,u.b.log("trying to update audio-track "+e);var t=this.tracks[e];this._loadTrackDetailsIfNeeded(t)}},l._handleLoadError=function(){this.trackIdBlacklist[this._trackId]=!0;var e=this._trackId,t=this.tracks[e],r=t.name,i=t.language,a=t.groupId;u.b.warn("Loading failed on audio track id: "+e+", group-id: "+a+', name/language: "'+r+'" / "'+i+'"');for(var n=e,s=0;s<this.tracks.length;s++){if(!this.trackIdBlacklist[s])if(this.tracks[s].name===r){n=s;break}}n!==e?(u.b.log("Attempting audio-track fallback id:",n,"group-id:",this.tracks[n].groupId),this._setAudioTrack(n)):u.b.warn('No fallback audio-track found for name/language: "'+r+'" / "'+i+'"')},a=i,(n=[{key:"audioTracks",get:function(){return this.tracks}},{key:"audioTrack",get:function(){return this._trackId},set:function(e){this._setAudioTrack(e),this._selectDefaultTrack=!1}}])&&Je(a.prototype,n),s&&Je(a,s),i}(ge);function et(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var tt=window.performance,rt=function(e){var t,r;function i(t,r){var i;return(i=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.AUDIO_TRACKS_UPDATED,d.a.AUDIO_TRACK_SWITCHING,d.a.AUDIO_TRACK_LOADED,d.a.KEY_LOADED,d.a.FRAG_LOADED,d.a.FRAG_PARSING_INIT_SEGMENT,d.a.FRAG_PARSING_DATA,d.a.FRAG_PARSED,d.a.ERROR,d.a.BUFFER_RESET,d.a.BUFFER_CREATED,d.a.BUFFER_APPENDED,d.a.BUFFER_FLUSHED,d.a.INIT_PTS_FOUND)||this).fragmentTracker=r,i.config=t.config,i.audioCodecSwap=!1,i._state=pe,i.initPTS=[],i.waitingFragment=null,i.videoTrackCC=null,i.waitingVideoCC=null,i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,c=i.prototype;return c.onInitPtsFound=function(e){var t=e.id,r=e.frag.cc,i=e.initPTS;"main"===t&&(this.initPTS[r]=i,this.videoTrackCC=r,u.b.log("InitPTS for cc: "+r+" found from main: "+i),this.state===Le&&this.tick())},c.startLoad=function(e){if(this.tracks){var t=this.lastCurrentTime;this.stopLoad(),this.setInterval(100),this.fragLoadError=0,t>0&&-1===e?(u.b.log("audio:override startPosition with lastCurrentTime @"+t.toFixed(3)),this.state=me):(this.lastCurrentTime=this.startPosition?this.startPosition:e,this.state=ve),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else this.startPosition=e,this.state=pe},c.doTick=function(){var e,t,r,i=this.hls,a=i.config;switch(this.state){case we:case ye:case Ae:break;case ve:this.state=Se,this.loadedmetadata=!1;break;case me:var n=this.tracks;if(!n)break;if(!this.media&&(this.startFragRequested||!a.startFragPrefetch))break;if(this.loadedmetadata)e=this.media.currentTime;else if(void 0===(e=this.nextLoadPosition))break;var s=this.mediaBuffer?this.mediaBuffer:this.media,o=this.videoBuffer?this.videoBuffer:this.media,c=e<a.maxBufferHole?Math.max(2,a.maxBufferHole):a.maxBufferHole,h=H.bufferInfo(s,e,c),f=H.bufferInfo(o,e,c),g=h.len,p=h.end,v=this.fragPrevious,m=Math.min(a.maxBufferLength,a.maxMaxBufferLength),y=Math.max(m,f.len),b=this.audioSwitch,T=this.trackId;if((g<y||b)&&T<n.length){if(void 0===(r=n[T].details)){this.state=Se;break}if(!b&&this._streamEnded(h,r))return this.hls.trigger(d.a.BUFFER_EOS,{type:"audio"}),void(this.state=ke);var E,S=r.fragments,_=S.length,R=S[0].start,A=S[_-1].start+S[_-1].duration;if(b)if(r.live&&!r.PTSKnown)u.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"),p=0;else if(p=e,r.PTSKnown&&e<R){if(!(h.end>R||h.nextStart))return;u.b.log("alt audio track ahead of main track, seek to start of alt audio track"),this.media.currentTime=R+.05}if(r.initSegment&&!r.initSegment.data)E=r.initSegment;else if(p<=R){if(E=S[0],null!==this.videoTrackCC&&E.cc!==this.videoTrackCC&&(E=function(e,t){return j.search(e,(function(e){return e.cc<t?1:e.cc>t?-1:0}))}(S,this.videoTrackCC)),r.live&&E.loadIdx&&E.loadIdx===this.fragLoadIdx){var k=h.nextStart?h.nextStart:R;return u.b.log("no alt audio available @currentTime:"+this.media.currentTime+", seeking @"+(k+.05)),void(this.media.currentTime=k+.05)}}else{var w,L=a.maxFragLookUpTolerance,D=v?S[v.sn-S[0].sn+1]:void 0;p<A?(p>A-L&&(L=0),w=D&&!ue(p,L,D)?D:j.search(S,(function(e){return ue(p,L,e)}))):w=S[_-1],w&&(E=w,R=w.start,v&&E.level===v.level&&E.sn===v.sn&&(E.sn<r.endSN?(E=S[E.sn+1-r.startSN],this.fragmentTracker.getState(E)!==G&&u.b.log("SN just loaded, load next one: "+E.sn)):E=null))}E&&(E.encrypted?(u.b.log("Loading key for "+E.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+T),this.state=be,i.trigger(d.a.KEY_LOADING,{frag:E})):(this.fragCurrent=E,(b||this.fragmentTracker.getState(E)===U)&&(u.b.log("Loading "+E.sn+", cc: "+E.cc+" of ["+r.startSN+" ,"+r.endSN+"],track "+T+", "+(this.loadedmetadata?"currentTime":"nextLoadPosition")+": "+e+", bufferEnd: "+p.toFixed(3)),"initSegment"!==E.sn&&(this.startFragRequested=!0),Object(l.a)(E.sn)&&(this.nextLoadPosition=E.start+E.duration),i.trigger(d.a.FRAG_LOADING,{frag:E}),this.state=Te)))}break;case Se:(t=this.tracks[this.trackId])&&t.details&&(this.state=me);break;case Ee:var O=tt.now(),C=this.retryDate,I=(s=this.media)&&s.seeking;(!C||O>=C||I)&&(u.b.log("audioStreamController: retryDate reached, switch back to IDLE state"),this.state=me);break;case Le:var P=this.waitingFragment;if(P){var x=P.frag.cc;if(void 0!==this.initPTS[x])this.waitingFragment=null,this.state=Te,this.onFragLoaded(P);else if(this.videoTrackCC!==this.waitingVideoCC)u.b.log("Waiting fragment cc ("+x+") cancelled because video is at cc "+this.videoTrackCC),this.clearWaitingFragment();else{var M=H.bufferInfo(this.mediaBuffer,this.media.currentTime,a.maxBufferHole);ue(M.end,a.maxFragLookUpTolerance,P.frag)<0&&(u.b.log("Waiting fragment cc ("+x+") @ "+P.frag.start+" cancelled because another fragment at "+M.end+" is needed"),this.clearWaitingFragment())}}else this.state=me}},c.clearWaitingFragment=function(){var e=this.waitingFragment;e&&(this.fragmentTracker.removeFragment(e.frag),this.waitingFragment=null,this.waitingVideoCC=null,this.state=me)},c.onMediaAttached=function(e){var t=this.media=this.mediaBuffer=e.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),t.addEventListener("seeking",this.onvseeking),t.addEventListener("ended",this.onvended);var r=this.config;this.tracks&&r.autoStartLoad&&this.startLoad(r.startPosition)},c.onMediaDetaching=function(){var e=this.media;e&&e.ended&&(u.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0),e&&(e.removeEventListener("seeking",this.onvseeking),e.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1,this.fragmentTracker.removeAllFragments(),this.stopLoad()},c.onAudioTracksUpdated=function(e){u.b.log("audio tracks updated"),this.tracks=e.audioTracks},c.onAudioTrackSwitching=function(e){var t=!!e.url;this.trackId=e.id,this.fragCurrent=null,this.clearWaitingFragment(),this.state=ye,t?this.setInterval(100):this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),t&&(this.audioSwitch=!0,this.state=me),this.tick()},c.onAudioTrackLoaded=function(e){var t=e.details,r=e.id,i=this.tracks[r],a=t.totalduration,n=0;if(u.b.log("track "+r+" loaded ["+t.startSN+","+t.endSN+"],duration:"+a),t.live){var s=i.details;s&&t.fragments.length>0?(re(s,t),n=t.fragments[0].start,t.PTSKnown?u.b.log("live audio playlist sliding:"+n.toFixed(3)):u.b.log("live audio playlist - outdated PTS, unknown sliding")):(t.PTSKnown=!1,u.b.log("live audio playlist - first load, unknown sliding"))}else t.PTSKnown=!1;if(i.details=t,!this.startFragRequested){if(-1===this.startPosition){var o=t.startTimeOffset;Object(l.a)(o)?(u.b.log("start time offset found in playlist, adjust startPosition to "+o),this.startPosition=o):t.live?(this.startPosition=this.computeLivePosition(n,t),u.b.log("compute startPosition for audio-track to "+this.startPosition)):this.startPosition=0}this.nextLoadPosition=this.startPosition}this.state===Se&&(this.state=me),this.tick()},c.onKeyLoaded=function(){this.state===be&&(this.state=me,this.tick())},c.onFragLoaded=function(e){var t=this.fragCurrent,r=e.frag;if(this.state===Te&&t&&"audio"===r.type&&r.level===t.level&&r.sn===t.sn){var i=this.tracks[this.trackId],a=i.details,n=a.totalduration,s=t.level,o=t.sn,l=t.cc,c=this.config.defaultAudioCodec||i.audioCodec||"mp4a.40.2",h=this.stats=e.stats;if("initSegment"===o)this.state=me,h.tparsed=h.tbuffered=tt.now(),a.initSegment.data=e.payload,this.hls.trigger(d.a.FRAG_BUFFERED,{stats:h,frag:t,id:"audio"}),this.tick();else{this.state=_e,this.appended=!1,this.demuxer||(this.demuxer=new J(this.hls,"audio"));var f=this.initPTS[l],g=a.initSegment?a.initSegment.data:[];if(void 0!==f){this.pendingBuffering=!0,u.b.log("Demuxing "+o+" of ["+a.startSN+" ,"+a.endSN+"],track "+s);this.demuxer.push(e.payload,g,c,null,t,n,!1,f)}else u.b.log("Unknown video PTS for cc "+l+", waiting for video PTS before demuxing audio frag "+o+" of ["+a.startSN+" ,"+a.endSN+"],track "+s),this.waitingFragment=e,this.waitingVideoCC=this.videoTrackCC,this.state=Le}}this.fragLoadError=0},c.onFragParsingInitSegment=function(e){var t=this.fragCurrent,r=e.frag;if(t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e){var i,a=e.tracks;if(a.video&&delete a.video,i=a.audio){i.levelCodec=i.codec,i.id=e.id,this.hls.trigger(d.a.BUFFER_CODECS,a),u.b.log("audio track:audio,container:"+i.container+",codecs[level/parsed]=["+i.levelCodec+"/"+i.codec+"]");var n=i.initSegment;if(n){var s={type:"audio",data:n,parent:"audio",content:"initSegment"};this.audioSwitch?this.pendingData=[s]:(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(d.a.BUFFER_APPENDING,s))}this.tick()}}},c.onFragParsingData=function(e){var t=this,r=this.fragCurrent,i=e.frag;if(r&&"audio"===e.id&&"audio"===e.type&&i.sn===r.sn&&i.level===r.level&&this.state===_e){var a=this.trackId,n=this.tracks[a],s=this.hls;Object(l.a)(e.endPTS)||(e.endPTS=e.startPTS+r.duration,e.endDTS=e.startDTS+r.duration),r.addElementaryStream(p.AUDIO),u.b.log("parsed "+e.type+",PTS:["+e.startPTS.toFixed(3)+","+e.endPTS.toFixed(3)+"],DTS:["+e.startDTS.toFixed(3)+"/"+e.endDTS.toFixed(3)+"],nb:"+e.nb),te(n.details,r,e.startPTS,e.endPTS);var c=this.media,h=!1;if(this.audioSwitch)if(c&&c.readyState){var f=c.currentTime;u.b.log("switching audio track : currentTime:"+f),f>=e.startPTS&&(u.b.log("switching audio track : flushing all audio"),this.state=Ae,s.trigger(d.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),h=!0,this.audioSwitch=!1,s.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:a}))}else this.audioSwitch=!1,s.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:a});var g=this.pendingData;if(!g)return u.b.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),void s.trigger(d.a.ERROR,{type:o.b.MEDIA_ERROR,details:null,fatal:!0});this.audioSwitch||([e.data1,e.data2].forEach((function(t){t&&t.length&&g.push({type:e.type,data:t,parent:"audio",content:"data"})})),!h&&g.length&&(g.forEach((function(e){t.state===_e&&(t.pendingBuffering=!0,t.hls.trigger(d.a.BUFFER_APPENDING,e))})),this.pendingData=[],this.appended=!0)),this.tick()}},c.onFragParsed=function(e){var t=this.fragCurrent,r=e.frag;t&&"audio"===e.id&&r.sn===t.sn&&r.level===t.level&&this.state===_e&&(this.stats.tparsed=tt.now(),this.state=Re,this._checkAppendedParsed())},c.onBufferReset=function(){this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1},c.onBufferCreated=function(e){var t=e.tracks.audio;t&&(this.mediaBuffer=t.buffer,this.loadedmetadata=!0),e.tracks.video&&(this.videoBuffer=e.tracks.video.buffer)},c.onBufferAppended=function(e){if("audio"===e.parent){var t=this.state;t!==_e&&t!==Re||(this.pendingBuffering=e.pending>0,this._checkAppendedParsed())}},c._checkAppendedParsed=function(){if(!(this.state!==Re||this.appended&&this.pendingBuffering)){var e=this.fragCurrent,t=this.stats,r=this.hls;if(e){this.fragPrevious=e,t.tbuffered=tt.now(),r.trigger(d.a.FRAG_BUFFERED,{stats:t,frag:e,id:"audio"});var i=this.mediaBuffer?this.mediaBuffer:this.media;i&&u.b.log("audio buffered : "+ne.toString(i.buffered)),this.audioSwitch&&this.appended&&(this.audioSwitch=!1,r.trigger(d.a.AUDIO_TRACK_SWITCHED,{id:this.trackId})),this.state=me}this.tick()}},c.onError=function(e){var t=e.frag;if(!t||"audio"===t.type)switch(e.details){case o.a.FRAG_LOAD_ERROR:case o.a.FRAG_LOAD_TIMEOUT:var r=e.frag;if(r&&"audio"!==r.type)break;if(!e.fatal){var i=this.fragLoadError;i?i++:i=1;var a=this.config;if(i<=a.fragLoadingMaxRetry){this.fragLoadError=i;var n=Math.min(Math.pow(2,i-1)*a.fragLoadingRetryDelay,a.fragLoadingMaxRetryTimeout);u.b.warn("AudioStreamController: frag loading failed, retry in "+n+" ms"),this.retryDate=tt.now()+n,this.state=Ee}else u.b.error("AudioStreamController: "+e.details+" reaches max retry, redispatch as fatal ..."),e.fatal=!0,this.state=we}break;case o.a.AUDIO_TRACK_LOAD_ERROR:case o.a.AUDIO_TRACK_LOAD_TIMEOUT:case o.a.KEY_LOAD_ERROR:case o.a.KEY_LOAD_TIMEOUT:this.state!==we&&(this.state=e.fatal?we:me,u.b.warn("AudioStreamController: "+e.details+" while loading frag, now switching to "+this.state+" state ..."));break;case o.a.BUFFER_FULL_ERROR:if("audio"===e.parent&&(this.state===_e||this.state===Re)){var s=this.mediaBuffer,l=this.media.currentTime;if(s&&H.isBuffered(s,l)&&H.isBuffered(s,l+.5)){var c=this.config;c.maxMaxBufferLength>=c.maxBufferLength&&(c.maxMaxBufferLength/=2,u.b.warn("AudioStreamController: reduce max buffer length to "+c.maxMaxBufferLength+"s")),this.state=me}else u.b.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,this.state=Ae,this.hls.trigger(d.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"})}}},c.onBufferFlushed=function(){var e=this,t=this.pendingData;t&&t.length?(u.b.log("AudioStreamController: appending pending audio data after buffer flushed"),t.forEach((function(t){e.hls.trigger(d.a.BUFFER_APPENDING,t)})),this.appended=!0,this.pendingData=[],this.state=Re):(this.state=me,this.fragPrevious=null,this.tick())},a=i,(n=[{key:"state",set:function(e){if(this.state!==e){var t=this.state;this._state=e,u.b.log("audio stream:"+t+"->"+e)}},get:function(){return this._state}}])&&et(a.prototype,n),s&&et(a,s),i}(Oe),it=function(){if("undefined"!=typeof window&&window.VTTCue)return window.VTTCue;var e={"":!0,lr:!0,rl:!0},t={start:!0,middle:!0,end:!0,left:!0,right:!0};function r(e){return"string"==typeof e&&(!!t[e.toLowerCase()]&&e.toLowerCase())}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]=r[i]}return e}function a(t,a,n){var s=this,o={enumerable:!0};s.hasBeenReset=!1;var l="",d=!1,u=t,c=a,h=n,f=null,g="",p=!0,v="auto",m="start",y=50,b="middle",T=50,E="middle";Object.defineProperty(s,"id",i({},o,{get:function(){return l},set:function(e){l=""+e}})),Object.defineProperty(s,"pauseOnExit",i({},o,{get:function(){return d},set:function(e){d=!!e}})),Object.defineProperty(s,"startTime",i({},o,{get:function(){return u},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");u=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"endTime",i({},o,{get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");c=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"text",i({},o,{get:function(){return h},set:function(e){h=""+e,this.hasBeenReset=!0}})),Object.defineProperty(s,"region",i({},o,{get:function(){return f},set:function(e){f=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"vertical",i({},o,{get:function(){return g},set:function(t){var r=function(t){return"string"==typeof t&&(!!e[t.toLowerCase()]&&t.toLowerCase())}(t);if(!1===r)throw new SyntaxError("An invalid or illegal string was specified.");g=r,this.hasBeenReset=!0}})),Object.defineProperty(s,"snapToLines",i({},o,{get:function(){return p},set:function(e){p=!!e,this.hasBeenReset=!0}})),Object.defineProperty(s,"line",i({},o,{get:function(){return v},set:function(e){if("number"!=typeof e&&"auto"!==e)throw new SyntaxError("An invalid number or illegal string was specified.");v=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"lineAlign",i({},o,{get:function(){return m},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");m=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"position",i({},o,{get:function(){return y},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");y=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"positionAlign",i({},o,{get:function(){return b},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");b=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"size",i({},o,{get:function(){return T},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");T=e,this.hasBeenReset=!0}})),Object.defineProperty(s,"align",i({},o,{get:function(){return E},set:function(e){var t=r(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");E=t,this.hasBeenReset=!0}})),s.displayState=void 0}return a.prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)},a}(),at=function(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}};function nt(){this.window=window,this.state="INITIAL",this.buffer="",this.decoder=new at,this.regionList=[]}function st(){this.values=Object.create(null)}function ot(e,t,r,i){var a=i?e.split(i):[e];for(var n in a)if("string"==typeof a[n]){var s=a[n].split(r);if(2===s.length)t(s[0],s[1])}}st.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,r){return r?this.has(e)?this.values[e]:t[r]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,r){for(var i=0;i<r.length;++i)if(t===r[i]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return!!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&(t=parseFloat(t))>=0&&t<=100)&&(this.set(e,t),!0)}};var lt=new it(0,0,0),dt="middle"===lt.align?"middle":"center";function ut(e,t,r){var i=e;function a(){var t=function(e){function t(e,t,r,i){return 3600*(0|e)+60*(0|t)+(0|r)+(0|i)/1e3}var r=e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return r?r[3]?t(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?t(r[1],r[2],0,r[4]):t(0,r[1],r[2],r[4]):null}(e);if(null===t)throw new Error("Malformed timestamp: "+i);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function n(){e=e.replace(/^\s+/,"")}if(n(),t.startTime=a(),n(),"--\x3e"!==e.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): "+i);e=e.substr(3),n(),t.endTime=a(),n(),function(e,t){var i=new st;ot(e,(function(e,t){switch(e){case"region":for(var a=r.length-1;a>=0;a--)if(r[a].id===t){i.set(e,r[a].region);break}break;case"vertical":i.alt(e,t,["rl","lr"]);break;case"line":var n=t.split(","),s=n[0];i.integer(e,s),i.percent(e,s)&&i.set("snapToLines",!1),i.alt(e,s,["auto"]),2===n.length&&i.alt("lineAlign",n[1],["start",dt,"end"]);break;case"position":n=t.split(","),i.percent(e,n[0]),2===n.length&&i.alt("positionAlign",n[1],["start",dt,"end","line-left","line-right","auto"]);break;case"size":i.percent(e,t);break;case"align":i.alt(e,t,["start",dt,"end","left","right"])}}),/:/,/\s/),t.region=i.get("region",null),t.vertical=i.get("vertical","");var a=i.get("line","auto");"auto"===a&&-1===lt.line&&(a=-1),t.line=a,t.lineAlign=i.get("lineAlign","start"),t.snapToLines=i.get("snapToLines",!0),t.size=i.get("size",100),t.align=i.get("align",dt);var n=i.get("position","auto");"auto"===n&&50===lt.position&&(n="start"===t.align||"left"===t.align?0:"end"===t.align||"right"===t.align?100:50),t.position=n}(e,t)}function ct(e){return e.replace(/<br(?: \/)?>/gi,"\n")}nt.prototype={parse:function(e){var t=this;function r(){var e=t.buffer,r=0;for(e=ct(e);r<e.length&&"\r"!==e[r]&&"\n"!==e[r];)++r;var i=e.substr(0,r);return"\r"===e[r]&&++r,"\n"===e[r]&&++r,t.buffer=e.substr(r),i}e&&(t.buffer+=t.decoder.decode(e,{stream:!0}));try{var i;if("INITIAL"===t.state){if(!/\r\n|\n/.test(t.buffer))return this;var a=(i=r()).match(/^(Ã¯Â»Â¿)?WEBVTT([ \t].*)?$/);if(!a||!a[0])throw new Error("Malformed WebVTT signature.");t.state="HEADER"}for(var n=!1;t.buffer;){if(!/\r\n|\n/.test(t.buffer))return this;switch(n?n=!1:i=r(),t.state){case"HEADER":/:/.test(i)?ot(i,(function(e,t){}),/:/):i||(t.state="ID");continue;case"NOTE":i||(t.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(i)){t.state="NOTE";break}if(!i)continue;if(t.cue=new it(0,0,""),t.state="CUE",-1===i.indexOf("--\x3e")){t.cue.id=i;continue}case"CUE":try{ut(i,t.cue,t.regionList)}catch(e){t.cue=null,t.state="BADCUE";continue}t.state="CUETEXT";continue;case"CUETEXT":var s=-1!==i.indexOf("--\x3e");if(!i||s&&(n=!0)){t.oncue&&t.oncue(t.cue),t.cue=null,t.state="ID";continue}t.cue.text&&(t.cue.text+="\n"),t.cue.text+=i;continue;case"BADCUE":i||(t.state="ID");continue}}}catch(e){"CUETEXT"===t.state&&t.cue&&t.oncue&&t.oncue(t.cue),t.cue=null,t.state="INITIAL"===t.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){try{if(this.buffer+=this.decoder.decode(),(this.cue||"HEADER"===this.state)&&(this.buffer+="\n\n",this.parse()),"INITIAL"===this.state)throw new Error("Malformed WebVTT signature.")}catch(e){throw e}return this.onflush&&this.onflush(),this}};var ht=nt;function ft(e,t,r,i){for(var a,n,s,o,l,d=[],u=window.VTTCue||TextTrackCue,c=0;c<i.rows.length;c++)if(s=!0,o=0,l="",!(a=i.rows[c]).isEmpty()){for(var h=0;h<a.chars.length;h++)a.chars[h].uchar.match(/\s/)&&s?o++:(l+=a.chars[h].uchar,s=!1);a.cueStartTime=t,t===r&&(r+=1e-4),n=new u(t,r,ct(l.trim())),o>=16?o--:o++,navigator.userAgent.match(/Firefox\//)?n.line=c+1:n.line=c>7?c-2:c+1,n.align="left",n.position=Math.max(0,Math.min(100,o/32*100)),d.push(n),e&&e.addCue(n)}return d}var gt,pt={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},vt=function(e){var t=e;return pt.hasOwnProperty(e)&&(t=pt[e]),String.fromCharCode(t)},mt={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},yt={17:2,18:4,21:6,22:8,23:10,19:13,20:15},bt={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},Tt={25:2,26:4,29:6,30:8,31:10,27:13,28:15},Et=["white","green","blue","cyan","red","yellow","magenta","black","transparent"];!function(e){e[e.ERROR=0]="ERROR",e[e.TEXT=1]="TEXT",e[e.WARNING=2]="WARNING",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG",e[e.DATA=3]="DATA"}(gt||(gt={}));var St=function(){function e(){this.time=null,this.verboseLevel=gt.ERROR}return e.prototype.log=function(e,t){this.verboseLevel>=e&&u.b.log(this.time+" ["+e+"] "+t)},e}(),_t=function(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].toString(16));return t},Rt=function(){function e(e,t,r,i,a){this.foreground=void 0,this.underline=void 0,this.italics=void 0,this.background=void 0,this.flash=void 0,this.foreground=e||"white",this.underline=t||!1,this.italics=r||!1,this.background=i||"black",this.flash=a||!1}var t=e.prototype;return t.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},t.setStyles=function(e){for(var t=["foreground","underline","italics","background","flash"],r=0;r<t.length;r++){var i=t[r];e.hasOwnProperty(i)&&(this[i]=e[i])}},t.isDefault=function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash},t.equals=function(e){return this.foreground===e.foreground&&this.underline===e.underline&&this.italics===e.italics&&this.background===e.background&&this.flash===e.flash},t.copy=function(e){this.foreground=e.foreground,this.underline=e.underline,this.italics=e.italics,this.background=e.background,this.flash=e.flash},t.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},e}(),At=function(){function e(e,t,r,i,a,n){this.uchar=void 0,this.penState=void 0,this.uchar=e||" ",this.penState=new Rt(t,r,i,a,n)}var t=e.prototype;return t.reset=function(){this.uchar=" ",this.penState.reset()},t.setChar=function(e,t){this.uchar=e,this.penState.copy(t)},t.setPenState=function(e){this.penState.copy(e)},t.equals=function(e){return this.uchar===e.uchar&&this.penState.equals(e.penState)},t.copy=function(e){this.uchar=e.uchar,this.penState.copy(e.penState)},t.isEmpty=function(){return" "===this.uchar&&this.penState.isDefault()},e}(),kt=function(){function e(e){this.chars=void 0,this.pos=void 0,this.currPenState=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chars=[];for(var t=0;t<100;t++)this.chars.push(new At);this.logger=e,this.pos=0,this.currPenState=new Rt}var t=e.prototype;return t.equals=function(e){for(var t=!0,r=0;r<100;r++)if(!this.chars[r].equals(e.chars[r])){t=!1;break}return t},t.copy=function(e){for(var t=0;t<100;t++)this.chars[t].copy(e.chars[t])},t.isEmpty=function(){for(var e=!0,t=0;t<100;t++)if(!this.chars[t].isEmpty()){e=!1;break}return e},t.setCursor=function(e){this.pos!==e&&(this.pos=e),this.pos<0?(this.logger.log(gt.DEBUG,"Negative cursor position "+this.pos),this.pos=0):this.pos>100&&(this.logger.log(gt.DEBUG,"Too large cursor position "+this.pos),this.pos=100)},t.moveCursor=function(e){var t=this.pos+e;if(e>1)for(var r=this.pos+1;r<t+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(t)},t.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},t.insertChar=function(e){e>=144&&this.backSpace();var t=vt(e);this.pos>=100?this.logger.log(gt.ERROR,"Cannot insert "+e.toString(16)+" ("+t+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(t,this.currPenState),this.moveCursor(1))},t.clearFromPos=function(e){var t;for(t=e;t<100;t++)this.chars[t].reset()},t.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},t.clearToEndOfRow=function(){this.clearFromPos(this.pos)},t.getTextString=function(){for(var e=[],t=!0,r=0;r<100;r++){var i=this.chars[r].uchar;" "!==i&&(t=!1),e.push(i)}return t?"":e.join("")},t.setPenStyles=function(e){this.currPenState.setStyles(e),this.chars[this.pos].setPenState(this.currPenState)},e}(),wt=function(){function e(e){this.rows=void 0,this.currRow=void 0,this.nrRollUpRows=void 0,this.lastOutputScreen=void 0,this.logger=void 0,this.rows=[];for(var t=0;t<15;t++)this.rows.push(new kt(e));this.logger=e,this.currRow=14,this.nrRollUpRows=null,this.lastOutputScreen=null,this.reset()}var t=e.prototype;return t.reset=function(){for(var e=0;e<15;e++)this.rows[e].clear();this.currRow=14},t.equals=function(e){for(var t=!0,r=0;r<15;r++)if(!this.rows[r].equals(e.rows[r])){t=!1;break}return t},t.copy=function(e){for(var t=0;t<15;t++)this.rows[t].copy(e.rows[t])},t.isEmpty=function(){for(var e=!0,t=0;t<15;t++)if(!this.rows[t].isEmpty()){e=!1;break}return e},t.backSpace=function(){this.rows[this.currRow].backSpace()},t.clearToEndOfRow=function(){this.rows[this.currRow].clearToEndOfRow()},t.insertChar=function(e){this.rows[this.currRow].insertChar(e)},t.setPen=function(e){this.rows[this.currRow].setPenStyles(e)},t.moveCursor=function(e){this.rows[this.currRow].moveCursor(e)},t.setCursor=function(e){this.logger.log(gt.INFO,"setCursor: "+e),this.rows[this.currRow].setCursor(e)},t.setPAC=function(e){this.logger.log(gt.INFO,"pacData = "+JSON.stringify(e));var t=e.row-1;if(this.nrRollUpRows&&t<this.nrRollUpRows-1&&(t=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==t){for(var r=0;r<15;r++)this.rows[r].clear();var i=this.currRow+1-this.nrRollUpRows,a=this.lastOutputScreen;if(a){var n=a.rows[i].cueStartTime,s=this.logger.time;if(n&&null!==s&&n<s)for(var o=0;o<this.nrRollUpRows;o++)this.rows[t-this.nrRollUpRows+o+1].copy(a.rows[i+o])}}this.currRow=t;var l=this.rows[this.currRow];if(null!==e.indent){var d=e.indent,u=Math.max(d-1,0);l.setCursor(e.indent),e.color=l.chars[u].penState.foreground}var c={foreground:e.color,underline:e.underline,italics:e.italics,background:"black",flash:!1};this.setPen(c)},t.setBkgData=function(e){this.logger.log(gt.INFO,"bkgData = "+JSON.stringify(e)),this.backSpace(),this.setPen(e),this.insertChar(32)},t.setRollUpRows=function(e){this.nrRollUpRows=e},t.rollUp=function(){if(null!==this.nrRollUpRows){this.logger.log(gt.TEXT,this.getDisplayText());var e=this.currRow+1-this.nrRollUpRows,t=this.rows.splice(e,1)[0];t.clear(),this.rows.splice(this.currRow,0,t),this.logger.log(gt.INFO,"Rolling up")}else this.logger.log(gt.DEBUG,"roll_up but nrRollUpRows not set yet")},t.getDisplayText=function(e){e=e||!1;for(var t=[],r="",i=-1,a=0;a<15;a++){var n=this.rows[a].getTextString();n&&(i=a+1,e?t.push("Row "+i+": '"+n+"'"):t.push(n.trim()))}return t.length>0&&(r=e?"["+t.join(" | ")+"]":t.join("\n")),r},t.getTextAndFormat=function(){return this.rows},e}(),Lt=function(){function e(e,t,r){this.chNr=void 0,this.outputFilter=void 0,this.mode=void 0,this.verbose=void 0,this.displayedMemory=void 0,this.nonDisplayedMemory=void 0,this.lastOutputScreen=void 0,this.currRollUpRow=void 0,this.writeScreen=void 0,this.cueStartTime=void 0,this.logger=void 0,this.chNr=e,this.outputFilter=t,this.mode=null,this.verbose=0,this.displayedMemory=new wt(r),this.nonDisplayedMemory=new wt(r),this.lastOutputScreen=new wt(r),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.logger=r}var t=e.prototype;return t.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.outputFilter.reset(),this.currRollUpRow=this.displayedMemory.rows[14],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null},t.getHandler=function(){return this.outputFilter},t.setHandler=function(e){this.outputFilter=e},t.setPAC=function(e){this.writeScreen.setPAC(e)},t.setBkgData=function(e){this.writeScreen.setBkgData(e)},t.setMode=function(e){e!==this.mode&&(this.mode=e,this.logger.log(gt.INFO,"MODE="+e),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=e)},t.insertChars=function(e){for(var t=0;t<e.length;t++)this.writeScreen.insertChar(e[t]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";this.logger.log(gt.INFO,r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(this.logger.log(gt.TEXT,"DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},t.ccRCL=function(){this.logger.log(gt.INFO,"RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},t.ccBS=function(){this.logger.log(gt.INFO,"BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},t.ccAOF=function(){},t.ccAON=function(){},t.ccDER=function(){this.logger.log(gt.INFO,"DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},t.ccRU=function(e){this.logger.log(gt.INFO,"RU("+e+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(e)},t.ccFON=function(){this.logger.log(gt.INFO,"FON - Flash On"),this.writeScreen.setPen({flash:!0})},t.ccRDC=function(){this.logger.log(gt.INFO,"RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},t.ccTR=function(){this.logger.log(gt.INFO,"TR"),this.setMode("MODE_TEXT")},t.ccRTD=function(){this.logger.log(gt.INFO,"RTD"),this.setMode("MODE_TEXT")},t.ccEDM=function(){this.logger.log(gt.INFO,"EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate(!0)},t.ccCR=function(){this.logger.log(gt.INFO,"CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate(!0)},t.ccENM=function(){this.logger.log(gt.INFO,"ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},t.ccEOC=function(){if(this.logger.log(gt.INFO,"EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var e=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=e,this.writeScreen=this.nonDisplayedMemory,this.logger.log(gt.TEXT,"DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate(!0)},t.ccTO=function(e){this.logger.log(gt.INFO,"TO("+e+") - Tab Offset"),this.writeScreen.moveCursor(e)},t.ccMIDROW=function(e){var t={flash:!1};if(t.underline=e%2==1,t.italics=e>=46,t.italics)t.foreground="white";else{var r=Math.floor(e/2)-16;t.foreground=["white","green","blue","cyan","red","yellow","magenta"][r]}this.logger.log(gt.INFO,"MIDROW: "+JSON.stringify(t)),this.writeScreen.setPen(t)},t.outputDataUpdate=function(e){void 0===e&&(e=!1);var t=this.logger.time;null!==t&&this.outputFilter&&(null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),e&&this.outputFilter.dispatchCue&&this.outputFilter.dispatchCue(),this.cueStartTime=this.displayedMemory.isEmpty()?null:t):this.cueStartTime=t,this.lastOutputScreen.copy(this.displayedMemory))},t.cueSplitAtTime=function(e){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,e,this.displayedMemory),this.cueStartTime=e))},e}();function Dt(e,t,r){r.a=e,r.b=t}function Ot(e,t,r){return r.a===e&&r.b===t}var Ct=function(){function e(e,t,r){this.channels=void 0,this.currentChannel=0,this.cmdHistory=void 0,this.logger=void 0;var i=new St;this.channels=[null,new Lt(e,t,i),new Lt(e+1,r,i)],this.cmdHistory={a:null,b:null},this.logger=i}var t=e.prototype;return t.getHandler=function(e){return this.channels[e].getHandler()},t.setHandler=function(e,t){this.channels[e].setHandler(t)},t.addData=function(e,t){var r,i,a,n=!1;this.logger.time=e;for(var s=0;s<t.length;s+=2)if(i=127&t[s],a=127&t[s+1],0!==i||0!==a){if(this.logger.log(gt.DATA,"["+_t([t[s],t[s+1]])+"] -> ("+_t([i,a])+")"),(r=this.parseCmd(i,a))||(r=this.parseMidrow(i,a)),r||(r=this.parsePAC(i,a)),r||(r=this.parseBackgroundAttributes(i,a)),!r&&(n=this.parseChars(i,a))){var o=this.currentChannel;if(o&&o>0)this.channels[o].insertChars(n);else this.logger.log(gt.WARNING,"No channel found yet. TEXT-MODE?")}r||n||this.logger.log(gt.WARNING,"Couldn't parse cleaned data "+_t([i,a])+" orig: "+_t([t[s],t[s+1]]))}},t.parseCmd=function(e,t){var r=this.cmdHistory;if(!((20===e||28===e||21===e||29===e)&&t>=32&&t<=47)&&!((23===e||31===e)&&t>=33&&t<=35))return!1;if(Ot(e,t,r))return Dt(null,null,r),this.logger.log(gt.DEBUG,"Repeated command ("+_t([e,t])+") is dropped"),!0;var i=20===e||21===e||23===e?1:2,a=this.channels[i];return 20===e||21===e||28===e||29===e?32===t?a.ccRCL():33===t?a.ccBS():34===t?a.ccAOF():35===t?a.ccAON():36===t?a.ccDER():37===t?a.ccRU(2):38===t?a.ccRU(3):39===t?a.ccRU(4):40===t?a.ccFON():41===t?a.ccRDC():42===t?a.ccTR():43===t?a.ccRTD():44===t?a.ccEDM():45===t?a.ccCR():46===t?a.ccENM():47===t&&a.ccEOC():a.ccTO(t-32),Dt(e,t,r),this.currentChannel=i,!0},t.parseMidrow=function(e,t){var r=0;if((17===e||25===e)&&t>=32&&t<=47){if((r=17===e?1:2)!==this.currentChannel)return this.logger.log(gt.ERROR,"Mismatch channel in midrow parsing"),!1;var i=this.channels[r];return!!i&&(i.ccMIDROW(t),this.logger.log(gt.DEBUG,"MIDROW ("+_t([e,t])+")"),!0)}return!1},t.parsePAC=function(e,t){var r,i=this.cmdHistory;if(!((e>=17&&e<=23||e>=25&&e<=31)&&t>=64&&t<=127)&&!((16===e||24===e)&&t>=64&&t<=95))return!1;if(Ot(e,t,i))return Dt(null,null,i),!0;var a=e<=23?1:2;r=t>=64&&t<=95?1===a?mt[e]:bt[e]:1===a?yt[e]:Tt[e];var n=this.channels[a];return!!n&&(n.setPAC(this.interpretPAC(r,t)),Dt(e,t,i),this.currentChannel=a,!0)},t.interpretPAC=function(e,t){var r=t,i={color:null,italics:!1,indent:null,underline:!1,row:e};return r=t>95?t-96:t-64,i.underline=1==(1&r),r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=4*Math.floor((r-16)/2),i},t.parseChars=function(e,t){var r,i=null,a=null;if(e>=25?(r=2,a=e-8):(r=1,a=e),a>=17&&a<=19){var n=t;n=17===a?t+80:18===a?t+112:t+144,this.logger.log(gt.INFO,"Special char '"+vt(n)+"' in channel "+r),i=[n]}else e>=32&&e<=127&&(i=0===t?[e]:[e,t]);if(i){var s=_t(i);this.logger.log(gt.DEBUG,"Char codes =  "+s.join(",")),Dt(e,t,this.cmdHistory)}return i},t.parseBackgroundAttributes=function(e,t){var r;if(!((16===e||24===e)&&t>=32&&t<=47)&&!((23===e||31===e)&&t>=45&&t<=47))return!1;var i={};16===e||24===e?(r=Math.floor((t-32)/2),i.background=Et[r],t%2==1&&(i.background=i.background+"_semi")):45===t?i.background="transparent":(i.foreground="black",47===t&&(i.underline=!0));var a=e<=23?1:2;return this.channels[a].setBkgData(i),Dt(e,t,this.cmdHistory),!0},t.reset=function(){for(var e=0;e<Object.keys(this.channels).length;e++){var t=this.channels[e];t&&t.reset()}this.cmdHistory={a:null,b:null}},t.cueSplitAtTime=function(e){for(var t=0;t<this.channels.length;t++){var r=this.channels[t];r&&r.cueSplitAtTime(e)}},e}(),It=function(){function e(e,t){this.timelineController=void 0,this.cueRanges=[],this.trackName=void 0,this.startTime=null,this.endTime=null,this.screen=null,this.timelineController=e,this.trackName=t}var t=e.prototype;return t.dispatchCue=function(){null!==this.startTime&&(this.timelineController.addCues(this.trackName,this.startTime,this.endTime,this.screen,this.cueRanges),this.startTime=null)},t.newCue=function(e,t,r){(null===this.startTime||this.startTime>e)&&(this.startTime=e),this.endTime=t,this.screen=r,this.timelineController.createCaptionsTrack(this.trackName)},t.reset=function(){this.cueRanges=[]},e}(),Pt=function(e,t,r){return e.substr(r||0,t.length)===t},xt=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return(t>>>0).toString()},Mt={parse:function(e,t,r,i,a,n){var s,o=Object(Fe.b)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g,"\n").split("\n"),d="00:00.000",u=0,c=0,h=0,f=[],g=!0,p=!1,v=new ht;v.oncue=function(e){var t=r[i],a=r.ccOffset;t&&t.new&&(void 0!==c?a=r.ccOffset=t.start:function(e,t,r){var i=e[t],a=e[i.prevCC];if(!a||!a.new&&i.new)return e.ccOffset=e.presentationOffset=i.start,void(i.new=!1);for(;a&&a.new;)e.ccOffset+=i.start-a.start,i.new=!1,a=e[(i=a).prevCC];e.presentationOffset=r}(r,i,h)),h&&(a=h-r.presentationOffset),p&&(e.startTime+=a-c,e.endTime+=a-c),e.id=xt(e.startTime.toString())+xt(e.endTime.toString())+xt(e.text),e.text=decodeURIComponent(encodeURIComponent(e.text)),e.endTime>0&&f.push(e)},v.onparsingerror=function(e){s=e},v.onflush=function(){s&&n?n(s):a(f)},o.forEach((function(e){if(g){if(Pt(e,"X-TIMESTAMP-MAP=")){g=!1,p=!0,e.substr(16).split(",").forEach((function(e){Pt(e,"LOCAL:")?d=e.substr(6):Pt(e,"MPEGTS:")&&(u=parseInt(e.substr(7)))}));try{t+(9e4*r[i].start||0)<0&&(t+=8589934592),u-=t,c=function(e){var t=parseInt(e.substr(-3)),r=parseInt(e.substr(-6,2)),i=parseInt(e.substr(-9,2)),a=e.length>9?parseInt(e.substr(0,e.indexOf(":"))):0;if(!(Object(l.a)(t)&&Object(l.a)(r)&&Object(l.a)(i)&&Object(l.a)(a)))throw Error("Malformed X-TIMESTAMP-MAP: Local:"+e);return t+=1e3*r,t+=6e4*i,t+=36e5*a}(d)/1e3,h=u/9e4}catch(e){p=!1,s=e}return}""===e&&(g=!1)}v.parse(e+"\n")})),v.flush()}};function Ft(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ut(e,t){return e&&e.label===t.name&&!(e.textTrack1||e.textTrack2)}var Nt=function(e){var t,r;function i(t){var r;if((r=e.call(this,t,d.a.MEDIA_ATTACHING,d.a.MEDIA_DETACHING,d.a.FRAG_PARSING_USERDATA,d.a.FRAG_DECRYPTED,d.a.MANIFEST_LOADING,d.a.MANIFEST_LOADED,d.a.FRAG_LOADED,d.a.INIT_PTS_FOUND)||this).media=null,r.config=void 0,r.enabled=!0,r.Cues=void 0,r.textTracks=[],r.tracks=[],r.initPTS=[],r.unparsedVttFrags=[],r.captionsTracks={},r.nonNativeCaptionsTracks={},r.captionsProperties=void 0,r.cea608Parser1=void 0,r.cea608Parser2=void 0,r.lastSn=-1,r.prevCC=-1,r.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},r.hls=t,r.config=t.config,r.Cues=t.config.cueHandler,r.captionsProperties={textTrack1:{label:r.config.captionsTextTrack1Label,languageCode:r.config.captionsTextTrack1LanguageCode},textTrack2:{label:r.config.captionsTextTrack2Label,languageCode:r.config.captionsTextTrack2LanguageCode},textTrack3:{label:r.config.captionsTextTrack3Label,languageCode:r.config.captionsTextTrack3LanguageCode},textTrack4:{label:r.config.captionsTextTrack4Label,languageCode:r.config.captionsTextTrack4LanguageCode}},r.config.enableCEA708Captions){var i=new It(Ft(r),"textTrack1"),a=new It(Ft(r),"textTrack2"),n=new It(Ft(r),"textTrack3"),s=new It(Ft(r),"textTrack4");r.cea608Parser1=new Ct(1,i,a),r.cea608Parser2=new Ct(3,n,s)}return r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.addCues=function(e,t,r,i,a){for(var n,s,o,l,u=!1,c=a.length;c--;){var h=a[c],f=(n=h[0],s=h[1],o=t,l=r,Math.min(s,l)-Math.max(n,o));if(f>=0&&(h[0]=Math.min(h[0],t),h[1]=Math.max(h[1],r),u=!0,f/(r-t)>.5))return}if(u||a.push([t,r]),this.config.renderTextTracksNatively)this.Cues.newCue(this.captionsTracks[e],t,r,i);else{var g=this.Cues.newCue(null,t,r,i);this.hls.trigger(d.a.CUES_PARSED,{type:"captions",cues:g,track:e})}},a.onInitPtsFound=function(e){var t=this,r=e.frag,i=e.id,a=e.initPTS,n=this.unparsedVttFrags;"main"===i&&(this.initPTS[r.cc]=a),n.length&&(this.unparsedVttFrags=[],n.forEach((function(e){t.onFragLoaded(e)})))},a.getExistingTrack=function(e){var t=this.media;if(t)for(var r=0;r<t.textTracks.length;r++){var i=t.textTracks[r];if(i[e])return i}return null},a.createCaptionsTrack=function(e){this.config.renderTextTracksNatively?this.createNativeTrack(e):this.createNonNativeTrack(e)},a.createNativeTrack=function(e){if(!this.captionsTracks[e]){var t=this.captionsProperties,r=this.captionsTracks,i=this.media,a=t[e],n=a.label,s=a.languageCode,o=this.getExistingTrack(e);if(o)r[e]=o,Ne(r[e]),Ue(r[e],i);else{var l=this.createTextTrack("captions",n,s);l&&(l[e]=!0,r[e]=l)}}},a.createNonNativeTrack=function(e){if(!this.nonNativeCaptionsTracks[e]){var t=this.captionsProperties[e];if(t){var r={_id:e,label:t.label,kind:"captions",default:!!t.media&&!!t.media.default,closedCaptions:t.media};this.nonNativeCaptionsTracks[e]=r,this.hls.trigger(d.a.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:[r]})}}},a.createTextTrack=function(e,t,r){var i=this.media;if(i)return i.addTextTrack(e,t,r)},a.destroy=function(){e.prototype.destroy.call(this)},a.onMediaAttaching=function(e){this.media=e.media,this._cleanTracks()},a.onMediaDetaching=function(){var e=this.captionsTracks;Object.keys(e).forEach((function(t){Ne(e[t]),delete e[t]})),this.nonNativeCaptionsTracks={}},a.onManifestLoading=function(){this.lastSn=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0,0:{start:0,prevCC:-1,new:!1}},this._cleanTracks(),this.tracks=[],this.captionsTracks={},this.nonNativeCaptionsTracks={}},a._cleanTracks=function(){var e=this.media;if(e){var t=e.textTracks;if(t)for(var r=0;r<t.length;r++)Ne(t[r])}},a.onManifestLoaded=function(e){var t=this;if(this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=[],this.cea608Parser1&&this.cea608Parser2&&(this.cea608Parser1.reset(),this.cea608Parser2.reset()),this.config.enableWebVTT){var r=e.subtitles||[],i=this.tracks&&r&&this.tracks.length===r.length;if(this.tracks=e.subtitles||[],this.config.renderTextTracksNatively){var a=this.media?this.media.textTracks:[];this.tracks.forEach((function(e,r){var i;if(r<a.length){for(var n=null,s=0;s<a.length;s++)if(Ut(a[s],e)){n=a[s];break}n&&(i=n)}i||(i=t.createTextTrack("subtitles",e.name,e.lang)),e.default?i.mode=t.hls.subtitleDisplay?"showing":"hidden":i.mode="disabled",t.textTracks.push(i)}))}else if(!i&&this.tracks&&this.tracks.length){var n=this.tracks.map((function(e){return{label:e.name,kind:e.type.toLowerCase(),default:e.default,subtitleTrack:e}}));this.hls.trigger(d.a.NON_NATIVE_TEXT_TRACKS_FOUND,{tracks:n})}}this.config.enableCEA708Captions&&e.captions&&e.captions.forEach((function(e){var r=/(?:CC|SERVICE)([1-4])/.exec(e.instreamId);if(r){var i="textTrack"+r[1],a=t.captionsProperties[i];a&&(a.label=e.name,e.lang&&(a.languageCode=e.lang),a.media=e)}}))},a.onFragLoaded=function(e){var t=e.frag,r=e.payload,i=this.cea608Parser1,a=this.cea608Parser2,n=this.initPTS,s=this.lastSn,o=this.unparsedVttFrags;if("main"===t.type){var u=t.sn;t.sn!==s+1&&i&&a&&(i.reset(),a.reset()),this.lastSn=u}else if("subtitle"===t.type)if(r.byteLength){if(!Object(l.a)(n[t.cc]))return o.push(e),void(n.length&&this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t}));var c=t.decryptdata;null!=c&&null!=c.key&&"AES-128"===c.method||this._parseVTTs(t,r)}else this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:t})},a._parseVTTs=function(e,t){var r=this,i=this.hls,a=this.prevCC,n=this.textTracks,s=this.vttCCs;s[e.cc]||(s[e.cc]={start:e.start,prevCC:a,new:!0},this.prevCC=e.cc),Mt.parse(t,this.initPTS[e.cc],s,e.cc,(function(t){if(r.config.renderTextTracksNatively){var a=n[e.level];if("disabled"===a.mode)return void i.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e});t.forEach((function(e){if(!a.cues.getCueById(e.id))try{if(a.addCue(e),!a.cues.getCueById(e.id))throw new Error("addCue is failed for: "+e)}catch(r){u.b.debug("Failed occurred on adding cues: "+r);var t=new window.TextTrackCue(e.startTime,e.endTime,e.text);t.id=e.id,a.addCue(t)}}))}else{var s=r.tracks[e.level].default?"default":"subtitles"+e.level;i.trigger(d.a.CUES_PARSED,{type:"subtitles",cues:t,track:s})}i.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})}),(function(t){u.b.log("Failed to parse VTT cue: "+t),i.trigger(d.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e})}))},a.onFragDecrypted=function(e){var t=e.frag,r=e.payload;if("subtitle"===t.type){if(!Object(l.a)(this.initPTS[t.cc]))return void this.unparsedVttFrags.push(e);this._parseVTTs(t,r)}},a.onFragParsingUserdata=function(e){var t=this.cea608Parser1,r=this.cea608Parser2;if(this.enabled&&t&&r)for(var i=0;i<e.samples.length;i++){var a=e.samples[i].bytes;if(a){var n=this.extractCea608Data(a);t.addData(e.samples[i].pts,n[0]),r.addData(e.samples[i].pts,n[1])}}},a.extractCea608Data=function(e){for(var t=31&e[0],r=2,i=[[],[]],a=0;a<t;a++){var n=e[r++],s=127&e[r++],o=127&e[r++],l=3&n;0===s&&0===o||0!=(4&n)&&(0!==l&&1!==l||(i[l].push(s),i[l].push(o)))}return i},i}(h);function Bt(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Gt(e){for(var t=[],r=0;r<e.length;r++){var i=e[r];"subtitles"===i.kind&&i.label&&t.push(e[r])}return t}var Kt=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.MANIFEST_LOADED,d.a.SUBTITLE_TRACK_LOADED)||this).tracks=[],r.trackId=-1,r.media=null,r.stopped=!0,r.subtitleDisplay=!0,r.queuedDefaultTrack=null,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,o=i.prototype;return o.destroy=function(){h.prototype.destroy.call(this)},o.onMediaAttached=function(e){var t=this;this.media=e.media,this.media&&(Object(l.a)(this.queuedDefaultTrack)&&(this.subtitleTrack=this.queuedDefaultTrack,this.queuedDefaultTrack=null),this.trackChangeListener=this._onTextTracksChanged.bind(this),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.subtitlePollingInterval=setInterval((function(){t.trackChangeListener()}),500):this.media.textTracks.addEventListener("change",this.trackChangeListener))},o.onMediaDetaching=function(){this.media&&(this.useTextTrackPolling?clearInterval(this.subtitlePollingInterval):this.media.textTracks.removeEventListener("change",this.trackChangeListener),Object(l.a)(this.subtitleTrack)&&(this.queuedDefaultTrack=this.subtitleTrack),Gt(this.media.textTracks).forEach((function(e){Ne(e)})),this.subtitleTrack=-1,this.media=null)},o.onManifestLoaded=function(e){var t=this,r=e.subtitles||[];this.tracks=r,this.hls.trigger(d.a.SUBTITLE_TRACKS_UPDATED,{subtitleTracks:r}),r.forEach((function(e){e.default&&(t.media?t.subtitleTrack=e.id:t.queuedDefaultTrack=e.id)}))},o.onSubtitleTrackLoaded=function(e){var t=this,r=e.id,i=e.details,a=this.trackId,n=this.tracks,s=n[a];if(r>=n.length||r!==a||!s||this.stopped)this._clearReloadTimer();else if(u.b.log("subtitle track "+r+" loaded"),i.live){var o=ae(s.details,i,e.stats.trequest);u.b.log("Reloading live subtitle playlist in "+o+"ms"),this.timer=setTimeout((function(){t._loadCurrentTrack()}),o)}else this._clearReloadTimer()},o.startLoad=function(){this.stopped=!1,this._loadCurrentTrack()},o.stopLoad=function(){this.stopped=!0,this._clearReloadTimer()},o._clearReloadTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},o._loadCurrentTrack=function(){var e=this.trackId,t=this.tracks,r=this.hls,i=t[e];e<0||!i||i.details&&!i.details.live||(u.b.log("Loading subtitle track "+e),r.trigger(d.a.SUBTITLE_TRACK_LOADING,{url:i.url,id:e}))},o._toggleTrackModes=function(e){var t=this.media,r=this.subtitleDisplay,i=this.trackId;if(t){var a=Gt(t.textTracks);if(-1===e)[].slice.call(a).forEach((function(e){e.mode="disabled"}));else{var n=a[i];n&&(n.mode="disabled")}var s=a[e];s&&(s.mode=r?"showing":"hidden")}},o._setSubtitleTrackInternal=function(e){var t=this.hls,r=this.tracks;!Object(l.a)(e)||e<-1||e>=r.length||(this.trackId=e,u.b.log("Switching to subtitle track "+e),t.trigger(d.a.SUBTITLE_TRACK_SWITCH,{id:e}),this._loadCurrentTrack())},o._onTextTracksChanged=function(){if(this.media&&this.hls.config.renderTextTracksNatively){for(var e=-1,t=Gt(this.media.textTracks),r=0;r<t.length;r++)if("hidden"===t[r].mode)e=r;else if("showing"===t[r].mode){e=r;break}this.subtitleTrack=e}},a=i,(n=[{key:"subtitleTracks",get:function(){return this.tracks}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(e){this.trackId!==e&&(this._toggleTrackModes(e),this._setSubtitleTrackInternal(e))}}])&&Bt(a.prototype,n),s&&Bt(a,s),i}(h),jt=r(7);var Ht,Vt=window.performance,Yt=function(e){var t,r;function i(t,r){var i;return(i=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHING,d.a.ERROR,d.a.KEY_LOADED,d.a.FRAG_LOADED,d.a.SUBTITLE_TRACKS_UPDATED,d.a.SUBTITLE_TRACK_SWITCH,d.a.SUBTITLE_TRACK_LOADED,d.a.SUBTITLE_FRAG_PROCESSED,d.a.LEVEL_UPDATED)||this).fragmentTracker=r,i.config=t.config,i.state=pe,i.tracks=[],i.tracksBuffered=[],i.currentTrackId=-1,i.decrypter=new jt.a(t,t.config),i.lastAVStart=0,i._onMediaSeeking=i.onMediaSeeking.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i)),i}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.onSubtitleFragProcessed=function(e){var t=e.frag,r=e.success;if(this.fragPrevious=t,this.state=me,r){var i=this.tracksBuffered[this.currentTrackId];if(i){for(var a,n=t.start,s=0;s<i.length;s++)if(n>=i[s].start&&n<=i[s].end){a=i[s];break}var o=t.start+t.duration;a?a.end=o:(a={start:n,end:o},i.push(a))}}},a.onMediaAttached=function(e){var t=e.media;this.media=t,t.addEventListener("seeking",this._onMediaSeeking),this.state=me},a.onMediaDetaching=function(){var e=this;this.media&&(this.media.removeEventListener("seeking",this._onMediaSeeking),this.fragmentTracker.removeAllFragments(),this.currentTrackId=-1,this.tracks.forEach((function(t){e.tracksBuffered[t.id]=[]})),this.media=null,this.state=pe)},a.onError=function(e){var t=e.frag;t&&"subtitle"===t.type&&(this.state=me)},a.onSubtitleTracksUpdated=function(e){var t=this;u.b.log("subtitle tracks updated"),this.tracksBuffered=[],this.tracks=e.subtitleTracks,this.tracks.forEach((function(e){t.tracksBuffered[e.id]=[]}))},a.onSubtitleTrackSwitch=function(e){if(this.currentTrackId=e.id,this.tracks&&this.tracks.length&&-1!==this.currentTrackId){var t=this.tracks[this.currentTrackId];t&&t.details&&this.setInterval(500)}else this.clearInterval()},a.onSubtitleTrackLoaded=function(e){var t=e.id,r=e.details,i=this.currentTrackId,a=this.tracks,n=a[i];t>=a.length||t!==i||!n||(r.live&&function(e,t,r){void 0===r&&(r=0);var i=-1;ie(e,t,(function(e,t,r){t.start=e.start,i=r}));var a=t.fragments;if(i<0)a.forEach((function(e){e.start+=r}));else for(var n=i+1;n<a.length;n++)a[n].start=a[n-1].start+a[n-1].duration}(n.details,r,this.lastAVStart),n.details=r,this.setInterval(500))},a.onKeyLoaded=function(){this.state===be&&(this.state=me)},a.onFragLoaded=function(e){var t=this.fragCurrent,r=e.frag.decryptdata,i=e.frag,a=this.hls;if(this.state===Te&&t&&"subtitle"===e.frag.type&&t.sn===e.frag.sn&&e.payload.byteLength>0&&r&&r.key&&"AES-128"===r.method){var n=Vt.now();this.decrypter.decrypt(e.payload,r.key.buffer,r.iv.buffer,(function(e){var t=Vt.now();a.trigger(d.a.FRAG_DECRYPTED,{frag:i,payload:e,stats:{tstart:n,tdecrypt:t}})}))}},a.onLevelUpdated=function(e){var t=e.details.fragments;this.lastAVStart=t.length?t[0].start:0},a.doTick=function(){if(this.media)switch(this.state){case me:var e=this.config,t=this.currentTrackId,r=this.fragmentTracker,i=this.media,a=this.tracks;if(!a||!a[t]||!a[t].details)break;var n,s=e.maxBufferHole,o=e.maxFragLookUpTolerance,l=Math.min(e.maxBufferLength,e.maxMaxBufferLength),c=H.bufferedInfo(this._getBuffered(),i.currentTime,s),h=c.end,f=c.len,g=a[t].details,p=g.fragments,v=p.length,m=p[v-1].start+p[v-1].duration;if(f>l)return;var y=this.fragPrevious;h<m?(y&&g.hasProgramDateTime&&(n=le(p,y.endProgramDateTime,o)),n||(n=de(y,p,h,o))):n=p[v-1],n&&n.encrypted?(u.b.log("Loading key for "+n.sn),this.state=be,this.hls.trigger(d.a.KEY_LOADING,{frag:n})):n&&r.getState(n)===U&&(this.fragCurrent=n,this.state=Te,this.hls.trigger(d.a.FRAG_LOADING,{frag:n}))}else this.state=me},a.stopLoad=function(){this.lastAVStart=0,e.prototype.stopLoad.call(this)},a._getBuffered=function(){return this.tracksBuffered[this.currentTrackId]||[]},a.onMediaSeeking=function(){this.fragPrevious=null},i}(Oe);!function(e){e.WIDEVINE="com.widevine.alpha",e.PLAYREADY="com.microsoft.playready"}(Ht||(Ht={}));var Wt="undefined"!=typeof window&&window.navigator&&window.navigator.requestMediaKeySystemAccess?window.navigator.requestMediaKeySystemAccess.bind(window.navigator):null;function qt(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var Xt=function(e){var t,r;function i(t){var r;return(r=e.call(this,t,d.a.MEDIA_ATTACHED,d.a.MEDIA_DETACHED,d.a.MANIFEST_PARSED)||this)._widevineLicenseUrl=void 0,r._licenseXhrSetup=void 0,r._emeEnabled=void 0,r._requestMediaKeySystemAccess=void 0,r._drmSystemOptions=void 0,r._config=void 0,r._mediaKeysList=[],r._media=null,r._hasSetMediaKeys=!1,r._requestLicenseFailureCount=0,r.mediaKeysPromise=null,r._onMediaEncrypted=function(e){if(u.b.log('Media is encrypted using "'+e.initDataType+'" init data type'),!r.mediaKeysPromise)return u.b.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),void r.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_KEYS,fatal:!0});var t=function(t){r._media&&(r._attemptSetMediaKeys(t),r._generateRequestWithPreferredKeySession(e.initDataType,e.initData))};r.mediaKeysPromise.then(t).catch(t)},r._config=t.config,r._widevineLicenseUrl=r._config.widevineLicenseUrl,r._licenseXhrSetup=r._config.licenseXhrSetup,r._emeEnabled=r._config.emeEnabled,r._requestMediaKeySystemAccess=r._config.requestMediaKeySystemAccessFunc,r._drmSystemOptions=t.config.drmSystemOptions,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a,n,s,l=i.prototype;return l.getLicenseServerUrl=function(e){switch(e){case Ht.WIDEVINE:if(!this._widevineLicenseUrl)break;return this._widevineLicenseUrl}throw new Error('no license server URL configured for key-system "'+e+'"')},l._attemptKeySystemAccess=function(e,t,r){var i=this,a=function(e,t,r,i){switch(e){case Ht.WIDEVINE:return function(e,t,r){var i={audioCapabilities:[],videoCapabilities:[]};return e.forEach((function(e){i.audioCapabilities.push({contentType:'audio/mp4; codecs="'+e+'"',robustness:r.audioRobustness||""})})),t.forEach((function(e){i.videoCapabilities.push({contentType:'video/mp4; codecs="'+e+'"',robustness:r.videoRobustness||""})})),[i]}(t,r,i);default:throw new Error("Unknown key-system: "+e)}}(e,t,r,this._drmSystemOptions);u.b.log("Requesting encrypted media key-system access");var n=this.requestMediaKeySystemAccess(e,a);this.mediaKeysPromise=n.then((function(t){return i._onMediaKeySystemAccessObtained(e,t)})),n.catch((function(t){u.b.error('Failed to obtain key-system "'+e+'" access:',t)}))},l._onMediaKeySystemAccessObtained=function(e,t){var r=this;u.b.log('Access for key-system "'+e+'" obtained');var i={mediaKeysSessionInitialized:!1,mediaKeySystemAccess:t,mediaKeySystemDomain:e};this._mediaKeysList.push(i);var a=Promise.resolve().then((function(){return t.createMediaKeys()})).then((function(t){return i.mediaKeys=t,u.b.log('Media-keys created for key-system "'+e+'"'),r._onMediaKeysCreated(),t}));return a.catch((function(e){u.b.error("Failed to create media-keys:",e)})),a},l._onMediaKeysCreated=function(){var e=this;this._mediaKeysList.forEach((function(t){t.mediaKeysSession||(t.mediaKeysSession=t.mediaKeys.createSession(),e._onNewMediaKeySession(t.mediaKeysSession))}))},l._onNewMediaKeySession=function(e){var t=this;u.b.log("New key-system session "+e.sessionId),e.addEventListener("message",(function(r){t._onKeySessionMessage(e,r.message)}),!1)},l._onKeySessionMessage=function(e,t){u.b.log("Got EME message event, creating license request"),this._requestLicense(t,(function(t){u.b.log("Received license data (length: "+(t?t.byteLength:t)+"), updating key-session"),e.update(t)}))},l._attemptSetMediaKeys=function(e){if(!this._media)throw new Error("Attempted to set mediaKeys without first attaching a media element");if(!this._hasSetMediaKeys){var t=this._mediaKeysList[0];if(!t||!t.mediaKeys)return u.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_KEYS,fatal:!0});u.b.log("Setting keys for encrypted media"),this._media.setMediaKeys(t.mediaKeys),this._hasSetMediaKeys=!0}},l._generateRequestWithPreferredKeySession=function(e,t){var r=this,i=this._mediaKeysList[0];if(!i)return u.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_ACCESS,fatal:!0});if(i.mediaKeysSessionInitialized)u.b.warn("Key-Session already initialized but requested again");else{var a=i.mediaKeysSession;if(!a)return u.b.error("Fatal: Media is encrypted but no key-session existing"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_SESSION,fatal:!0});if(!t)return u.b.warn("Fatal: initData required for generating a key session is null"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_INIT_DATA,fatal:!0});u.b.log('Generating key-session request for "'+e+'" init data type'),i.mediaKeysSessionInitialized=!0,a.generateRequest(e,t).then((function(){u.b.debug("Key-session generation succeeded")})).catch((function(e){u.b.error("Error generating key-session request:",e),r.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_SESSION,fatal:!1})}))}},l._createLicenseXhr=function(e,t,r){var i=new XMLHttpRequest,a=this._licenseXhrSetup;try{if(a)try{a(i,e)}catch(t){i.open("POST",e,!0),a(i,e)}i.readyState||i.open("POST",e,!0)}catch(e){throw new Error("issue setting up KeySystem license XHR "+e)}return i.responseType="arraybuffer",i.onreadystatechange=this._onLicenseRequestReadyStageChange.bind(this,i,e,t,r),i},l._onLicenseRequestReadyStageChange=function(e,t,r,i){switch(e.readyState){case 4:if(200===e.status)this._requestLicenseFailureCount=0,u.b.log("License request succeeded"),"arraybuffer"!==e.responseType&&u.b.warn("xhr response type was not set to the expected arraybuffer for license request"),i(e.response);else{if(u.b.error("License Request XHR failed ("+t+"). Status: "+e.status+" ("+e.statusText+")"),this._requestLicenseFailureCount++,this._requestLicenseFailureCount>3)return void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0});var a=3-this._requestLicenseFailureCount+1;u.b.warn("Retrying license request, "+a+" attempts left"),this._requestLicense(r,i)}}},l._generateLicenseRequestChallenge=function(e,t){switch(e.mediaKeySystemDomain){case Ht.WIDEVINE:return t}throw new Error("unsupported key-system: "+e.mediaKeySystemDomain)},l._requestLicense=function(e,t){u.b.log("Requesting content license for key-system");var r=this._mediaKeysList[0];if(!r)return u.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),void this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_NO_ACCESS,fatal:!0});try{var i=this.getLicenseServerUrl(r.mediaKeySystemDomain),a=this._createLicenseXhr(i,e,t);u.b.log("Sending license request to URL: "+i);var n=this._generateLicenseRequestChallenge(r,e);a.send(n)}catch(e){u.b.error("Failure requesting DRM license: "+e),this.hls.trigger(d.a.ERROR,{type:o.b.KEY_SYSTEM_ERROR,details:o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,fatal:!0})}},l.onMediaAttached=function(e){if(this._emeEnabled){var t=e.media;this._media=t,t.addEventListener("encrypted",this._onMediaEncrypted)}},l.onMediaDetached=function(){var e=this._media,t=this._mediaKeysList;e&&(e.removeEventListener("encrypted",this._onMediaEncrypted),this._media=null,this._mediaKeysList=[],Promise.all(t.map((function(e){if(e.mediaKeysSession)return e.mediaKeysSession.close().catch((function(){}))}))).then((function(){return e.setMediaKeys(null)})).catch((function(){})))},l.onManifestParsed=function(e){if(this._emeEnabled){var t=e.levels.map((function(e){return e.audioCodec})),r=e.levels.map((function(e){return e.videoCodec}));this._attemptKeySystemAccess(Ht.WIDEVINE,t,r)}},a=i,(n=[{key:"requestMediaKeySystemAccess",get:function(){if(!this._requestMediaKeySystemAccess)throw new Error("No requestMediaKeySystemAccess function configured");return this._requestMediaKeySystemAccess}}])&&qt(a.prototype,n),s&&qt(a,s),i}(h);function zt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function Qt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?zt(Object(r),!0).forEach((function(t){$t(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):zt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function $t(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Jt=Qt(Qt({autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.25,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,liveDurationInfinity:!1,liveBackBufferLength:1/0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:$e,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,licenseXhrSetup:void 0,abrController:Ve,bufferController:We,capLevelController:Xe,fpsController:Qe,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0,emeEnabled:!1,widevineLicenseUrl:void 0,drmSystemOptions:{},requestMediaKeySystemAccessFunc:Wt,testBandwidth:!0},{cueHandler:i,enableCEA708Captions:!0,enableWebVTT:!0,captionsTextTrack1Label:"English",captionsTextTrack1LanguageCode:"en",captionsTextTrack2Label:"Spanish",captionsTextTrack2LanguageCode:"es",captionsTextTrack3Label:"Unknown CC",captionsTextTrack3LanguageCode:"",captionsTextTrack4Label:"Unknown CC",captionsTextTrack4LanguageCode:"",renderTextTracksNatively:!0}),{},{subtitleStreamController:Yt,subtitleTrackController:Kt,timelineController:Nt,audioStreamController:rt,audioTrackController:Ze,emeController:Xt});function Zt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function er(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Zt(Object(r),!0).forEach((function(t){tr(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Zt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function tr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function rr(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ir(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function ar(e,t,r){return t&&ir(e.prototype,t),r&&ir(e,r),e}var nr=function(e){var t,r;function i(t){var r;void 0===t&&(t={}),(r=e.call(this)||this).config=void 0,r._autoLevelCapping=void 0,r.abrController=void 0,r.capLevelController=void 0,r.levelController=void 0,r.streamController=void 0,r.networkControllers=void 0,r.audioTrackController=void 0,r.subtitleTrackController=void 0,r.emeController=void 0,r.coreComponents=void 0,r.media=null,r.url=null;var a=i.DefaultConfig;if((t.liveSyncDurationCount||t.liveMaxLatencyDurationCount)&&(t.liveSyncDuration||t.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");r.config=er(er({},a),t);var n=rr(r).config;if(void 0!==n.liveMaxLatencyDurationCount&&n.liveMaxLatencyDurationCount<=n.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==n.liveMaxLatencyDuration&&(void 0===n.liveSyncDuration||n.liveMaxLatencyDuration<=n.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');Object(u.a)(n.debug),r._autoLevelCapping=-1;var s=r.abrController=new n.abrController(rr(r)),o=new n.bufferController(rr(r)),l=r.capLevelController=new n.capLevelController(rr(r)),d=new n.fpsController(rr(r)),c=new x(rr(r)),h=new M(rr(r)),f=new F(rr(r)),g=new Be(rr(r)),p=r.levelController=new Me(rr(r)),v=new K(rr(r)),m=[p,r.streamController=new Pe(rr(r),v)],y=n.audioStreamController;y&&m.push(new y(rr(r),v)),r.networkControllers=m;var b=[c,h,f,s,o,l,d,g,v];if(y=n.audioTrackController){var T=new y(rr(r));r.audioTrackController=T,b.push(T)}if(y=n.subtitleTrackController){var E=new y(rr(r));r.subtitleTrackController=E,m.push(E)}if(y=n.emeController){var S=new y(rr(r));r.emeController=S,b.push(S)}return(y=n.subtitleStreamController)&&m.push(new y(rr(r),v)),(y=n.timelineController)&&b.push(new y(rr(r))),r.coreComponents=b,r}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.isSupported=function(){return function(){var e=q();if(!e)return!1;var t=self.SourceBuffer||self.WebKitSourceBuffer,r=e&&"function"==typeof e.isTypeSupported&&e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!t||t.prototype&&"function"==typeof t.prototype.appendBuffer&&"function"==typeof t.prototype.remove;return!!r&&!!i}()},ar(i,null,[{key:"version",get:function(){return"0.14.11"}},{key:"Events",get:function(){return d.a}},{key:"ErrorTypes",get:function(){return o.b}},{key:"ErrorDetails",get:function(){return o.a}},{key:"DefaultConfig",get:function(){return i.defaultConfig?i.defaultConfig:Jt},set:function(e){i.defaultConfig=e}}]);var a=i.prototype;return a.destroy=function(){u.b.log("destroy"),this.trigger(d.a.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach((function(e){e.destroy()})),this.url=null,this.removeAllListeners(),this._autoLevelCapping=-1},a.attachMedia=function(e){u.b.log("attachMedia"),this.media=e,this.trigger(d.a.MEDIA_ATTACHING,{media:e})},a.detachMedia=function(){u.b.log("detachMedia"),this.trigger(d.a.MEDIA_DETACHING),this.media=null},a.loadSource=function(e){e=s.buildAbsoluteURL(window.location.href,e,{alwaysNormalize:!0}),u.b.log("loadSource:"+e),this.url=e,this.trigger(d.a.MANIFEST_LOADING,{url:e})},a.startLoad=function(e){void 0===e&&(e=-1),u.b.log("startLoad("+e+")"),this.networkControllers.forEach((function(t){t.startLoad(e)}))},a.stopLoad=function(){u.b.log("stopLoad"),this.networkControllers.forEach((function(e){e.stopLoad()}))},a.swapAudioCodec=function(){u.b.log("swapAudioCodec"),this.streamController.swapAudioCodec()},a.recoverMediaError=function(){u.b.log("recoverMediaError");var e=this.media;this.detachMedia(),e&&this.attachMedia(e)},a.removeLevel=function(e,t){void 0===t&&(t=0),this.levelController.removeLevel(e,t)},ar(i,[{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(e){u.b.log("set currentLevel:"+e),this.loadLevel=e,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(e){u.b.log("set nextLevel:"+e),this.levelController.manualLevel=e,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(e){u.b.log("set loadLevel:"+e),this.levelController.manualLevel=e}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(e){this.levelController.nextLoadLevel=e}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(e){u.b.log("set firstLevel:"+e),this.levelController.firstLevel=e}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(e){u.b.log("set startLevel:"+e),-1!==e&&(e=Math.max(e,this.minAutoLevel)),this.levelController.startLevel=e}},{key:"capLevelToPlayerSize",set:function(e){var t=!!e;t!==this.config.capLevelToPlayerSize&&(t?this.capLevelController.startCapping():(this.capLevelController.stopCapping(),this.autoLevelCapping=-1,this.streamController.nextLevelSwitch()),this.config.capLevelToPlayerSize=t)}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(e){u.b.log("set autoLevelCapping:"+e),this._autoLevelCapping=e}},{key:"bandwidthEstimate",get:function(){var e=this.abrController._bwEstimator;return e?e.getEstimate():NaN}},{key:"autoLevelEnabled",get:function(){return-1===this.levelController.manualLevel}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){for(var e=this.levels,t=this.config.minAutoBitrate,r=e?e.length:0,i=0;i<r;i++){if((e[i].realBitrate?Math.max(e[i].realBitrate,e[i].bitrate):e[i].bitrate)>t)return i}return 0}},{key:"maxAutoLevel",get:function(){var e=this.levels,t=this.autoLevelCapping;return-1===t&&e&&e.length?e.length-1:t}},{key:"nextAutoLevel",get:function(){return Math.min(Math.max(this.abrController.nextAutoLevel,this.minAutoLevel),this.maxAutoLevel)},set:function(e){this.abrController.nextAutoLevel=Math.max(this.minAutoLevel,e)}},{key:"audioTracks",get:function(){var e=this.audioTrackController;return e?e.audioTracks:[]}},{key:"audioTrack",get:function(){var e=this.audioTrackController;return e?e.audioTrack:-1},set:function(e){var t=this.audioTrackController;t&&(t.audioTrack=e)}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}},{key:"subtitleTracks",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var e=this.subtitleTrackController;return e?e.subtitleTrack:-1},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleTrack=e)}},{key:"subtitleDisplay",get:function(){var e=this.subtitleTrackController;return!!e&&e.subtitleDisplay},set:function(e){var t=this.subtitleTrackController;t&&(t.subtitleDisplay=e)}}]),i}(z);nr.defaultConfig=void 0}]).default}));
//# sourceMappingURL=hls.min.js.map
/* exception2 //rtcdn.cincopa.com/fpskins/mediaelement/1/js/hls.min.js - err missing name after . operator */
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/js/kaleidoscope.js
_cp_preloaded_files["/fpskins/mediaelement/1/js/kaleidoscope.js"] = true;
/* exception2 //rtcdn.cincopa.com/fpskins/mediaelement/1/js/kaleidoscope.js - err missing name after . operator */
// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/css/mediaelementplayer.css
_cp_preloaded_files["/fpskins/mediaelement/1/css/mediaelementplayer.css"] = true; 

// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/css/mep-feature-playlist.css
_cp_preloaded_files["/fpskins/mediaelement/1/css/mep-feature-playlist.css"] = true; 

// preloading http://rtcdn.cincopa.com/fpskins/mediaelement/1/css/ze-flexslider.css
_cp_preloaded_files["/fpskins/mediaelement/1/css/ze-flexslider.css"] = true; 

// preloading http://rtcdn.cincopa.com/media-platform/runtimeze/cp_reset_style.css
_cp_preloaded_files["/media-platform/runtimeze/cp_reset_style.css"] = true; 

/* created 7/28/2021 8:24:20 PM UTM */