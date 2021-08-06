<!DOCTYPE html>
<html lang="en">
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# hype-machine: http://ogp.me/ns/fb/hype-machine#">

    <title>Popular tracks / Hype Machine</title>

    <meta property="fb:app_id" content="149376585092829" />
    <meta property="og:url" content="https://hypem.com/popular" />
    <meta property="og:description" content="The most popular music on the web right now" />
    <meta property="og:title" content="Hype Machine" />
    <meta property="og:image" content="https://static.hypem.com/images/share-logo-wide.png" />
    <meta property="og:site_name" content="Hype Machine" />
    <meta property="twitter:image" content="https://static.hypem.com/images/share-logo-square.png" />
    <meta property="twitter:card" content="summary" />
    <meta name="viewport" content="width=device-width, maximum-scale=2" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="verify-v1" content="qwbaObdzdZWrdu9G4KvAUGD+eLPZj38HYoLP/rhlBYo=" />
    <meta name="description" content="The most popular music on the web right now" />
    
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    
        <link rel="canonical" href="/popular"/>
    
    <link rel="icon" href="https://static.hypem.com/favicon.png" type="image/x-icon"/>

    <link rel="shortcut icon" href="https://static.hypem.com/favicon.png" type="image/x-icon"/>

        <link rel="apple-touch-icon" href="/images/touch-icon-iphone.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/images/touch-icon-ipad.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/images/touch-icon-iphone4.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/images/touch-icon-iphone-retina.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/images/touch-icon-ipad-retina.png"/>
    <link rel="apple-touch-icon" sizes="167x167" href="/images/touch-icon-ipad-pro.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/touch-icon-iphone-6-plus.png"/>
    <link rel="search" type="application/opensearchdescription+xml" href="/hypemachine.xml" title="Hype Machine"/>
    
        <link rel="stylesheet" type="text/css" media="screen"
          href="https://static.hypem.com/rev_1627496638/css/stylish.css"/>

        <link rel="alternate" type="application/rss+xml" title="RSS"
          href="http://hypem.com/feed/popular/3day/1/feed.xml" />
    
    <script src="https://static.hypem.com/rev_1492790219/js/libs/jquery-3.2.1.min.js"></script>
<script src="https://static.hypem.com/rev_1627496649/js/hype_functions_min.js"></script>


<script>

(function($) {

    window.takeovers = []; /* this is included prior to header_scripts.php, in header.php */

    /* utility jQuery extensions */
    jQuery.cachedScript = function(url, options) {
        options = $.extend(options || {}, {
            dataType: "script",
            cache: true,
            url: url
        });

        return jQuery.ajax(options);
    };

    /*
        INIT User-Agent info
        This should be reworked eventually, but we do need to sometimes know, is_ios, is_android, and etc.
    */
    if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) { ua_info.is_ios = true; } 
    else if (navigator.userAgent.match(/android/i)) { ua_info.is_android = true; }
    else if (navigator.userAgent.match(/playbook/i)) { ua_info.is_playbook = true; } 
    else if (navigator.userAgent.match(/\(BB10;/i)) { ua_info.is_blackberry = true; }
    else if (navigator.userAgent.match(/Windows Phone/i)) { ua_info.is_win_phone = true; } 
    else if (navigator.userAgent.match(/Mozilla\/5\.0 \(Mobile; rv:/) ) { ua_info.is_ff_os = true; } 

    if (navigator.userAgent.match(/android 2\.1/i) ) { ua_info.is_android_old_flash = true; } 
    else { ua_info.is_android_old_flash = false; }

    if (navigator.userAgent.match(/msie (5|6|7|8)/i)) { ua_info.is_old_ie = true; } 
    else { ua_info.is_old_ie = false; }

    if ( navigator.userAgent.match(/version\//i) 
         && navigator.userAgent.match(/safari\//i) ) {
        ua_info.is_safari = true;
    } else {
        ua_info.is_safari = false;
    }

    if ( navigator.userAgent.match(/chromium\//i) ) { ua_info.is_chromium = true; } 
    else { ua_info.is_chromium = false; }

    if ( navigator.userAgent.match(/chrome\/(25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40)/i) ) {
        ua_info.is_bad_chrome = true;
    } else {
        ua_info.is_bad_chrome = false;
    }

    if(
        ua_info.is_ios ||
        ua_info.is_playbook ||
        ua_info.is_android ||
        navigator.userAgent.match(/Mozilla\/5\.0 \(Mobile; rv:/) || /* Firefox Mobile OS */ 
        navigator.userAgent.match(/blackberry/i) ||
        navigator.userAgent.match(/palm/i) ||
        navigator.userAgent.match(/sony/i) ||
        navigator.userAgent.match(/symbian/i) ||
        navigator.userAgent.match(/nokia/i) ||
        navigator.userAgent.match(/samsung/i) ||
        navigator.userAgent.match(/mobile/i) ||
        navigator.userAgent.match(/windows ce/i) ||
        navigator.userAgent.match(/epoc/i) ||
        navigator.userAgent.match(/opera mini/i) ||
        navigator.userAgent.match(/nitro/i) ||
        navigator.userAgent.match(/j2me/i) ||
        navigator.userAgent.match(/midp\-/i) ||
        navigator.userAgent.match(/cldc\-/i) ||
        navigator.userAgent.match(/netfront/i) ||
        navigator.userAgent.match(/mot/i) ||
        navigator.userAgent.match(/up\.browser/i) ||
        navigator.userAgent.match(/up\.link/i) ||
        navigator.userAgent.match(/audiovox/i) ||
        navigator.userAgent.match(/ericsson/i) ||
        navigator.userAgent.match(/panasonic/i) ||
        navigator.userAgent.match(/philips/i) ||
        navigator.userAgent.match(/sanyo/i) ||
        navigator.userAgent.match(/sharp/i) ||
        navigator.userAgent.match(/sie-/i) ||
        navigator.userAgent.match(/portalmmm/i) ||
        navigator.userAgent.match(/blazer/i) ||
        navigator.userAgent.match(/avantgo/i) ||
        navigator.userAgent.match(/danger/i) ||
        navigator.userAgent.match(/series60/i) ||
        navigator.userAgent.match(/palmsource/i) ||
        navigator.userAgent.match(/pocketpc/i) ||
        navigator.userAgent.match(/smartphone/i) ||
        navigator.userAgent.match(/rover/i) ||
        navigator.userAgent.match(/ipaq/i) ||
        navigator.userAgent.match(/au\-mic/i) ||
        navigator.userAgent.match(/alcatel/i) ||
        navigator.userAgent.match(/ericy/i) ||
        navigator.userAgent.match(/up\.link/i) ||
        navigator.userAgent.match(/vodafone/i) ||
        navigator.userAgent.match(/wap1\./i) ||
        navigator.userAgent.match(/wap2\./i)
    ) {
        ua_info.is_mobile = true;
    } else {
        ua_info.is_mobile = false;
    }

    ua_info.ua = navigator.userAgent;

    /*
    (function() {
        if(ua_info.is_mobile) {
            var head = document.getElementsByTagName('head')[0];
            var css_sheet = document.createElement('link');
            css_sheet.type = "text/css";
            css_sheet.rel = "stylesheet";
            css_sheet.id = "mobile_css";
            css_sheet.href = 'https://static.hypem.com/rev_1627496634/css/mobile.css';
            head.appendChild(css_sheet);
        }
    })();
    */

    static_http_server = "https://static.hypem.com";
    server_time = 1627923955;

    window.custom_css = [
    {
        match: /\/zeitgeist\/2007/, id: "css_zeitgeist07",
        href: "https://static.hypem.com/rev_1518129520/css/zeitgeist-2007.css"
    },
    {
        match: /\/zeitgeist\/2008/, id: "css_zeitgeist08",
        href: "https://static.hypem.com/rev_1518129520/css/zeitgeist-2008.css"
    },
    {
        match: /\/zeitgeist\/2009/, id: "css_zeitgeist09",
        href: "https://static.hypem.com/rev_1518129520/css/zeitgeist-2009.css"
    },
    {
        match: /\/zeitgeist\/2010/, id: "css_zeitgeist10",
        href: "https://static.hypem.com/rev_1518129520/css/zeitgeist-2010.css"
    },
    {
        match: /\/zeitgeist\/2011/, id: "css_zeitgeist11",
        href: "https://static.hypem.com/rev_1590107838/css/zeitgeist-2011.css"
    },
    {
        match: /\/zeitgeist\/2011\/artists/, id: "css_zeitgeist11_artists",
        href: "https://static.hypem.com/rev_1590107838/css/zeitgeist-2011-map-ui.css"
    },
    {
        match: /\/zeitgeist\/2012/, id: "css_zeitgeist12",
        href: "https://static.hypem.com/rev_1627496641/css/zeitgeist-2012.css"
    },
    {
        match: /\/zeitgeist\/2013/, id: "css_zeitgeist13",
        href: "https://static.hypem.com/rev_1627496641/css/zeitgeist-2013.css"
    },
    {
        match: /\/zeitgeist\/2014/, id: "css_zeitgeist14",
        href: "https://static.hypem.com/rev_1627496642/css/zeitgeist-2014.css"
    }, 
    {
        match: /\/zeitgeist\/2015/, id: "css_zeitgeist15",
        href: "https://static.hypem.com/rev_1627496643/css/zeitgeist-2015.css"
    }, 
    {
        match: /\/zeitgeist\/2016/, id: "css_zeitgeist16",
        href: "https://static.hypem.com/rev_1627496644/css/zeitgeist-2016.css"
    },
    {
        match: /\/zeitgeist\/2017/, id: "css_zeitgeist17",
        href: "https://static.hypem.com/rev_1627496644/css/zeitgeist-2017.css"
    },  
    {
        match: /\/zeitgeist\/2018/, id: "css_zeitgeist18",
        href: "https://static.hypem.com/rev_1627496645/css/zeitgeist-2018.css"
    },  
    {
        match: /\/zeitgeist\/2019/, id: "css_zeitgeist19",
        href: "https://static.hypem.com/rev_1627496646/css/zeitgeist-2019.css"
    },  
    {
        match: /\/zeitgeist\/2020/, id: "css_zeitgeist20",
        href: "https://static.hypem.com/rev_1627496646/css/zeitgeist-2020.css"
    },  
    {
        match: /\/hotel\/2014/, id: "css_sxsw2014_wrap",
        href: "https://static.hypem.com/rev_1627496638/css/sxsw-2014_wrap.css"
    }, 
    {
        match: /\/hotel\/2015/, id: "css_sxsw2015",
        href: "https://static.hypem.com/rev_1627496639/css/sxsw-2015.css"
    }, 
    {
        match: /\/hotel\/2016/, id: "css_sxsw2016",
        href: "https://static.hypem.com/rev_1627496639/css/sxsw-2016.css"
    }, 
    {
        match: /\/special\/ones-to-watch-2015-2/, id: "css_otw2015_2",
        href: "https://static.hypem.com/rev_1627496636/css/otw-2015_2.css"
    }, 
    { 
        match: /\/special\/moogfest-2016/, id: "css_moogfest2016",
        href: "https://static.hypem.com/rev_1627496635/css/moogfest-2016.css"
    }, 
    { 
        match: /\/special\/moogfest-2016/, id: "css_moogfest2016",
        href: "https://static.hypem.com/rev_1627496635/css/moogfest-2016.css"
    }, 
    { 
        match: /\/special\/form-2016/, id: "css_form2016",
        href: "https://static.hypem.com/rev_1627496634/css/form-2016.css"
    }, 
    { 
        match: /\/cmj2015/, id: "css_cmj2015",
        href: "https://static.hypem.com/rev_1627496632/css/cmj-2015.css"
    }, 
    {
        match: /\/hotel\/video/, id: "css_baeble_video",
        href: "http://hypehotel.baeblemusic.com/fancybox/source/jquery.fancybox.css?v=2.0.6"
    },
    {
        match: /\/hotel\/mobile/, id: "css_tb_special",
        href: "https://static.hypem.com/rev_1335021536/css/tb-mobile-special.css"
    },
    {
        match: /\/spy/, id: "css_spy_map",
        href: "https://static.hypem.com/rev_1493874591/js/jquery-jvectormap-2.0.3/jquery-jvectormap-2.0.3.css"
    }
    ];

    


    /* Mini-scroll action to remove the location bar on iOS */
    if(ua_info.is_ios) {

        window.addEventListener("load",function() {

            /* timeout required for this to work, somehow */
            setTimeout(function(){
                window.scrollTo(0, 1); /* Hide the address bar! */
            }, 1000);

        });

    }
 

    /* load libs */
    /* global namespaces */
    var libs = {
        Base64 : 'https://static.hypem.com/rev_1320095547/js/base64.js',
        Waypoints : 'https://static.hypem.com/rev_1443595686/js/libs/jquery.waypoints.min.js',
        Lightbox : 'https://static.hypem.com/rev_1544208599/js/libs/jquery.lightbox.js' /* WARNING: not really a jquery plugin */
        //Lightbox : 'https://static.hypem.com/rev_1627496652/js/libs/jquery.lightbox_min.js' /* WARNING: not really a jquery plugin... */
    };
    var libs_loaded = [];
    for(var lib in libs){
        if(typeof window[lib] === 'undefined'){
            libs_loaded.push($.cachedScript(libs[lib]));
        }
    }

    /* namespaces under jQuery */
    var jquery_libs = {
        tooltip: 'https://static.hypem.com/rev_1627496651/js/libs/tooltip_min.js'
    };
    for(var jquery_lib in jquery_libs){
        if(!$.fn[jquery_lib]){
            libs_loaded.push($.cachedScript(jquery_libs[jquery_lib]));
        }
    }


    /* load and init soundmanager */
    $.cachedScript('https://static.hypem.com/rev_1543440594/js/soundmanagerv297a-20170601/script/soundmanager2-nodebug-jsmin.js')
        .then(init_soundmanager);

    if(is_hypem()) {
        $.cachedScript('https://static.hypem.com/rev_1627496650/js/libs/fingerprint_min.js')
        .then(init_fp);
    }
    
    $(document).ready(function() { /* this attaches to outer document scope only and fires once per hard page reload */
        show_loading();

        activeList = get_current_rel_url();

        init_selectors();

        attach_clicks();
        attach_clicks_player_bar();

        init_visibility_check();

        if(!ua_info.is_mobile) {
            $(window).scroll(sticky_relocate);
            sticky_relocate();
        }

        /* wait for user menu callback to return with user info */
        $.when(load_user_menu()).done(function(){
            page_url_state_init();
        }); 

    }); 

    })(jQuery); 

</script>

    <!-- facebook setup-->
    <script>
            window.facebook_authed = false;
            window.facebook_auto_share = false;
    </script>

</head>

<body id="popular" class="">

<div id="about-site">
The best place to find new music on the web. Every day, thousands of people around the world write about music they love â and it all ends up here.
</div>

<div id="sticky-anchor"></div>

<div id="header" data-header-type="standard" >

    <div id="header-inner" class="content-centered">
        <a id="logo-txt" class="logo-txt icon-logo" href="/latest" title="Hype Machine"></a>
        <a id="header-view-in-app" title="View in app" href="hypem://">Open in App &rarr;</a>
        <ul class="menu">
            <li id="menu-item-latest" ><a href="/latest" title="Latest music">Latest</a>

                            </li>
            <li id="menu-item-popular"  class="active"><a href="/popular" title="Popular tracks">Popular</a>
            </li>
            <li id="menu-item-stack"><a href="/stack" title="Stack newsletter"><span>&#x2709;</span>&nbsp;&nbsp;Stack</a></li>
                        <li id="menu-item-supportus"><a href="https://hypem.com/support-us" title="Fund Hype Machine">Support us</a></li>
            
            <li id="menu-item-more"><a title="More"><b>&#9679; &#9679; &#9679;</b></a>
                <ul>
                    <li id="menu-item-album"><a href="/albums" title="Featured albums">Featured Albums</a></li>
                    <li id="menu-item-mixes"><a href="/mixes" title="A collection of mixes from our newsletter">Good Mixes</a></li>
                    <li id="menu-item-reads"><a href="/reads" title="Music longreads from our newsletter">Good Reads</a></li>
                    <li id="menu-item-spy"><a href="/spy" title="View real-time activity on the site">Spy</a></li>
                    <li id="menu-item-directory"><a href="/sites" title="All the sites we index">Indexed Sites</a></li>
                    <li id="menu-item-merchtable"><a href="/merch-table" title="Merch Table">Merch Table</a></li>
                    <li id="menu-item-zeitgeist"><a href="/zeitgeist/2020" title="Best of the year"><span style="color: red;">&#x2605;</span> Zeitgeist 2007-2020</a></li>
                </ul>
            </li>
        </ul>
        <form id="search-form" action="/search" method="get" onSubmit="load_search(); return false;" name="searchform">
            <input name="q" type="text" id="q" value="Artist or Track" title="Artist or Track" class="clear-on-click"/>
            <input type="submit" id="g" value="Search"/>
            <!--<a href="/random_search" id="shuf" class="icon-shuffle" onclick="load_random_search();return false;" title="Do the search shuffle"></a>-->
        </form>
        <div id="filter" class="user-menu"></div><!-- filter -->    </div>

</div>

<div id="flash-message"></div>

<div id="player-loading"><span>LOADING</span></div>

<div id="player-container">

    <div id="yt-container"></div>

    <div id="player-inner" class="content-centered">

        <div id="player-page"></div>

        <div id="player-controls" class="haarp-fav-active">
            <a id="playerPrev" class="icon-previous"></a>
            <a id="playerPlay" class="play-ctrl haarp-play-ctrl icon-play"></a>
            <a id="playerFav" class="icon-heart haarp-fav-ctrl"></a>
            <a id="playerNext" class="icon-next"></a>
            <a id="playerRepeat" class="icon-repeat"></a>

            <div id="player-queue"></div>
            <div id="player-nowplaying"></div>

            <div id="player-timebar">
                <div id="player-time-position">0:00</div>
                <div id="player-time-total"></div>
                <div id="player-progress-outer">
                    <div id="player-progress-loading">&nbsp;</div>
                    <div id="player-progress-playing">&nbsp;</div>
                </div>
                <div id="player-volume-container">
                    <div id="player-volume-mute" class="icon-speaker"><span>&nbsp;</span>
                    </div>
                    <div id="player-volume-outer">
                        <div id="player-volume-ctrl">&nbsp;</div>
                    </div>
                </div>
            </div> <!-- player-timebar -->
            
        </div><!-- player-controls-->

    </div><!-- player-inner -->

</div><!-- player-container -->
<div id="content-wrapper">

    
        <script>
        jQuery('body').attr('id', 'popular'); // apply appropriate css styles by changing body id
        window.displayList['url'] = document.location.href; // FIXME: should be rel?
    </script>
    
    <div id="container">

        
                    <div class="ad-breakout"><div class="ad-wrapper ad-leaderboard" id="ad-leaderboard"></div></div>
                <div id="content" class="content-centered"><!-- oh look you are reading comments. well, we love you.  -->
<div id="content-right" >
    <div class="section social-summary">

        <div style="padding-top: 4px; margin-bottom:12px;"><a href="https://hypem.com/support-us?e=sidebar" style="text-decoration: none;"><div class="supportus-button">Join 3,474 supporters.<br/>Fund Hype Machine &rarr;</div></a></div>       

        <div class="summary-item">
            <div class="summary-other"><a href="/about">About/FAQ</a> &bull; <a href="/contact">Contact</a> &bull; <a href="http://merch.hypem.com">Tees &amp; Merch</a></div>
        </div>

        <div class="summary-item">
            <div class="summary-title">Apps</div>
            <div class="summary-content">
                <a class="icon-apple" href="/iphone"></a>
                <a class="icon-android" href="/android"></a>
            </div>
        </div>  
        <div class="summary-item">
            <div class="summary-title">Social</div>
            <div class="summary-content">
        		<a class="icon-instagram" href="https://instagram.com/hypem"></a>
        		<a class="icon-twitter" href="https://twitter.com/hypem"></a>
                <a class="icon-spotify" href="https://open.spotify.com/user/hypem"></a>
                <a class="icon-sc" href="https://soundcloud.com/hypem"></a>        
            </div>
        </div>

    </div>
        <div class="ad-wrapper ad-rectangle-modern ad-rectangleA" id="ad-rectangleA"></div>    <div class="section" style="margin-bottom:10px;">

        <a href="/stack" style="margin-left: -10px;">
            <img src="https://static.hypem.com/rev_1420743250/images/stack_sidebar.svg" alt="Stack logo" />
        </a>

        <p style="margin-top:-7px;">
        Once a week, Stack delivers a mix of the most interesting new music on the web, handpicked by the Hype Machine team. <a href="/stack/">Here's a recent mix</a>.
        </p>

                <!-- Begin MailChimp Signup Form -->
        <div id="mc_embed_signup" style="padding: 5px 0px;font-size:13px;">
            <form id="mc-embedded-subscribe-form" class="validate" action="https://hypem.us7.list-manage.com/subscribe/post?u=e9e17a06a5cc8fcbf10aaddf3&amp;id=28a82e4150" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">
                <div class="mc-field-group" style="float:left;">
                    <label for="mce-EMAIL" style="margin-right:5px;font-size:13px;">Email </label>
                    <input id="mce-EMAIL" class="required email" style="width: 140px;font-size:13px;" name="EMAIL" type="email" value="" />
                    <input type="hidden" name="SIGNUP_SRC" id="SIGNUP_SRC" value="site_sidebar" />
                </div>
            
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;"><input tabindex="-1" name="b_e9e17a06a5cc8fcbf10aaddf3_28a82e4150" type="text" value="" /></div>

                <input id="mc-embedded-subscribe" class="button" style="font-size:13px;background:#ddd;" name="subscribe" type="submit" value="Subscribe" />
            </form>
        </div><!--End mc_embed_signup-->
            </div>
<div class="ad-wrapper ad-rectangle-modern ad-rectangleB" id="ad-rectangleB"></div>    <div id="news" class="section">
        <h3><a href="https://blog.hypem.com">HYPE MACHINE PROJECT NEWS</a></h3>
        <ul>
                                <li><a href="https://blog.hypem.com/2021/07/new-audius-support/">
                            <span class="dates">Jul 28</span>
                            <span class="title">New: Audius support</span>
                        </a>
                    </li>
                                    <li><a href="https://blog.hypem.com/2021/01/zeitgeist-2020/">
                            <span class="dates">Jan 5</span>
                            <span class="title">Zeitgeist 2020</span>
                        </a>
                    </li>
                                    <li><a href="https://blog.hypem.com/2020/04/were-15/">
                            <span class="dates">Apr 27</span>
                            <span class="title">Weâre 15!</span>
                        </a>
                    </li>
                                    <li><a href="https://blog.hypem.com/2020/01/zeitgeist-2019/">
                            <span class="dates">Jan 2</span>
                            <span class="title">Zeitgeist 2019</span>
                        </a>
                    </li>
                                    <li><a href="https://blog.hypem.com/2019/07/state-of-hype-machines-crowdfunding-year-two/">
                            <span class="dates">Jul 29</span>
                            <span class="title">State of Hype Machineâs Crowdfunding: Year Two</span>
                        </a>
                    </li>
                                    <li><a href="https://blog.hypem.com/2019/04/loved-by-your-music-neighbors/">
                            <span class="dates">Apr 12</span>
                            <span class="title">Loved by â your music neighbors</span>
                        </a>
                    </li>
                        </ul>
    </div><!-- news -->

<div id="rectangleC-sticky-anchor"></div>
          <div class="ad-wrapper ad-rectangle-modern ad-rectangleC" id="ad-rectangleC">
              <div id="ds_default_anchor"></div>
          </div>
</div> <!-- content-right -->


    <div id="message" class="">

        <h1>Popular Now</h1>    </div><!-- message -->
<ul id="submenu" class="">

            <li id="nav-now">
              <a href="/popular" class="selected">Now</a>
            </li>
            <li id="nav-lastweek">
              <a href="/popular/lastweek" >Time Machine</a>
            </li>
            <li id="nav-remixes_only">
              <a href="/popular/remix" >Only Remixes</a>
            </li>
            <li id="nav-no_remixes">
              <a href="/popular/noremix" >No Remixes</a>
            </li>
            <li id="nav-artists">
              <a href="/popular/artists" >Artists</a>
            </li>
            <li id="nav-videos">
              <a href="/popular/videos" >Videos</a>
            </li>

    <li id="submenu-filter">
        <span class="title">Sort:</span>
                            <span id="submenu-filter-title">1 to 50 &darr;</span>
                    
        <ul>
                    <li>
              <a  href="/popular?">1 to 50 <span class="checkmark">&#x2713;</span></a>
          </li>
                    <li>
              <a  href="/popular?sortby=rank">50 to 1 </a>
          </li>
                    <li>
              <a  href="/popular?sortby=shuffle">Shuffle </a>
          </li>
                </ul>
    </li>
  
</ul>




<div id="content-left">

    
    <script type="text/javascript">set_nav_item_active('menu-item-popular');</script>

    <div id="track-list">

    


<div data-itemid="314nn" id="section-track-314nn"
     class="section section-track haarp-section-track  first"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">1</span>


    <a class="thumb"
                    href="/track/314nn/Ada+Lea+-+damn"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/b5/314nn_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Ada Lea - search Hype Machine for this artist"
               href="/artist/Ada+Lea">Ada Lea</a><span class="divider"> - </span>        <a class="track" title="damn - go to page for this track"
           href="/track/314nn/Ada+Lea+-+damn">
            <span class="base-title">damn</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F314nn&text=Ada+Lea+-+damn%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_314nn" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_314nn"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 3 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/314nn">Bandcamp</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/11vHf53qTRiEk7bRzyZXr3">Spotify</a>
            
                             &bull;                 <a rel="nofollow"
                          href="/go/itunes_web/?entity=album">Apple Music</a>
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/abduction+radiation/21500">Abduction Radiation</a><a
                            class="follow-pill fav_site_21500 follow"
                            onclick="toggleFavoriteBlog('21500');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Montreal, Quebec â Ada Lea, the moniker of Alexandra Levy, will be releasing her new album&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://abductionradiation.tumblr.com/post/658051946312269824/montreal-quebec-ada-lea-the-moniker-of"
                            title="29 Jul 2021 - 9:00 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="313z4" id="section-track-313z4"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">2</span>


    <a class="thumb"
                    href="/track/313z4/Smokehouse+-+Too+Many"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/e4/313z4_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Smokehouse - search Hype Machine for this artist"
               href="/artist/Smokehouse">Smokehouse</a><span class="divider"> - </span>        <a class="track" title="Too Many - go to page for this track"
           href="/track/313z4/Smokehouse+-+Too+Many">
            <span class="base-title">Too Many</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F313z4&text=Smokehouse+-+Too+Many%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_313z4" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_313z4"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 7 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/sc/313z4">SoundCloud</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/2aWEJWqgUbpBgDuzPao9eJ">Spotify</a>
            
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/iggy+magazine/23747">IGGY MAGAZINE</a><a
                            class="follow-pill fav_site_23747 follow"
                            onclick="toggleFavoriteBlog('23747');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Retour au Canada pour dÃ©couvrir un duo musical enveloppÃ© de douceur langoureuse. Le duo canadien SMOKEHOUSE&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://www.iggymagazine.com/indie-pop-langoureuse-avec-too-many-du-duo-canadien-smokehouse/"
                            title="29 Jul 2021 - 7:13 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="312zv" id="section-track-312zv"
     class="section section-track haarp-section-track  even"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">3</span>


    <a class="thumb"
                    href="/track/312zv/Emancipator+%26+Cloudchord+-+Jade"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/fb/312zv_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Emancipator &amp; Cloudchord - search Hype Machine for this artist"
               href="/artist/Emancipator+%26+Cloudchord">Emancipator & Cloudchord</a><span class="divider"> - </span>        <a class="track" title="Jade - go to page for this track"
           href="/track/312zv/Emancipator+%26+Cloudchord+-+Jade">
            <span class="base-title">Jade</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F312zv&text=Emancipator+%26+Cloudchord+-+Jade%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_312zv" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_312zv"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 3 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/sc/312zv">SoundCloud</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/2YmgONHQR1veqs0K7hauj1">Spotify</a>
            
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/indie+shuffle/11626">Indie Shuffle</a><a
                            class="follow-pill fav_site_11626 follow"
                            onclick="toggleFavoriteBlog('11626');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Sounds like: Bonobo, FKJ Song: Emancipator x Cloudchord - Jade What's so good? I've been a&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://www.indieshuffle.com/emancipator-x-cloudchord-jade/"
                            title="31 Jul 2021 - 1:14 PM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="2va0q" id="section-track-2va0q"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">4</span>


    <a class="thumb"
                    href="/track/2va0q/Dennis+Young+-+Primitive+Substance"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/17/2va0q_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Dennis Young - search Hype Machine for this artist"
               href="/artist/Dennis+Young">Dennis Young</a><span class="divider"> - </span>        <a class="track" title="Primitive Substance - go to page for this track"
           href="/track/2va0q/Dennis+Young+-+Primitive+Substance">
            <span class="base-title">Primitive Substance</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F2va0q&text=Dennis+Young+-+Primitive+Substance%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_2va0q" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_2va0q"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 3 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/2va0q">Bandcamp</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/4X7AhtWTvQnwA7EkTKkSiU">Spotify</a>
            
                             &bull;                 <a rel="nofollow"
                          href="/go/itunes_web/primitive-substance%2F1461468104%3Fi%3D1461468109?entity=album">Apple Music</a>
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/the+vinyl+factory/23991">The Vinyl Factory</a><a
                            class="follow-pill fav_site_23991 follow"
                            onclick="toggleFavoriteBlog('23991');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Brazilian electronics, downtown variations and bank holiday bangers. In the singles section this week, Melodies International&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://thevinylfactory.com/features/the-10-best-new-vinyl-releases-this-week-24th-may/"
                            title="24 May 2019 - 8:12 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="315et" id="section-track-315et"
     class="section section-track haarp-section-track  even"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">5</span>


    <a class="thumb"
                    href="/track/315et/Kislaw+-+Glitter+%28La+Felix+Remix%29"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/da/315et_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Kislaw - search Hype Machine for this artist"
               href="/artist/Kislaw">Kislaw</a><span class="divider"> - </span>        <a class="track" title="Glitter (La Felix Remix) - go to page for this track"
           href="/track/315et/Kislaw+-+Glitter+%28La+Felix+Remix%29">
            <span class="base-title">Glitter</span> <span class="remix-link">La Felix Remix</span>         </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F315et&text=Kislaw+-+Glitter+%28La+Felix+Remix%29%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_315et" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_315et"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 1 site</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/sc/315et">SoundCloud</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/0tnbZgXVCjGT7Ph4eo192t">Spotify</a>
            
                             &bull;                 <a rel="nofollow"
                          href="/go/itunes_web/?entity=album">Apple Music</a>
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/riptide+mag/24155">Riptide Mag</a><a
                            class="follow-pill fav_site_24155 follow"
                            onclick="toggleFavoriteBlog('24155');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Coup de cÅur Ã  mettre de toute Ã©vidence dans sa playlist de lâÃ©tÃ©. Le remix de&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://www.riptidemag.fr/kislaw-le-producteur-lillois-degaine-le-remix-de-glitter/"
                            title="31 Jul 2021 - 9:22 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="315f3" id="section-track-315f3"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">6</span>


    <a class="thumb"
                    href="/track/315f3/Girma+Beyene+-+Ene+Negn+Bay+Manesh"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/e3/315f3_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Girma Beyene - search Hype Machine for this artist"
               href="/artist/Girma+Beyene">Girma Beyene</a><span class="divider"> - </span>        <a class="track" title="Ene Negn Bay Manesh - go to page for this track"
           href="/track/315f3/Girma+Beyene+-+Ene+Negn+Bay+Manesh">
            <span class="base-title">Ene Negn Bay Manesh</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F315f3&text=Girma+Beyene+-+Ene+Negn+Bay+Manesh%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_315f3" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_315f3"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 1 site</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/sc/315f3">SoundCloud</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/2IUc2Gh0GwHSTB9SDdoqmr">Spotify</a>
            
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/the+listening+post+blog/18687">The Listening Post Blog</a><a
                            class="follow-pill fav_site_18687 follow"
                            onclick="toggleFavoriteBlog('18687');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Born in Addis Ababa, Girma BÃ¨yÃ¨nÃ¨ is an Ethiopian lyricist, composer, arranger, vocalist and pianist. Active&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://thelisteningpostblog.wordpress.com/2021/07/31/song-of-the-day-girma-beyene-ene-negn-bay-manesh/"
                            title="31 Jul 2021 - 12:41 PM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="312fr" id="section-track-312fr"
     class="section section-track haarp-section-track  even"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">7</span>


    <a class="thumb"
                    href="/track/312fr/Courrier+Sud+-+Fool+Moon+%28Delicieuse+Records%29"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/f8/312fr_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Courrier Sud - search Hype Machine for this artist"
               href="/artist/Courrier+Sud">Courrier Sud</a><span class="divider"> - </span>        <a class="track" title="Fool Moon (Delicieuse Records) - go to page for this track"
           href="/track/312fr/Courrier+Sud+-+Fool+Moon+%28Delicieuse+Records%29">
            <span class="base-title">Fool Moon (Delicieuse Records)</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F312fr&text=Courrier+Sud+-+Fool+Moon+%28Delicieuse+Records%29%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_312fr" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_312fr"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 2 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/sc/312fr">SoundCloud</a> 
        
            </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/indie+shuffle/11626">Indie Shuffle</a><a
                            class="follow-pill fav_site_11626 follow"
                            onclick="toggleFavoriteBlog('11626');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Sounds like: Metronomy, Hot Chip, Myd Song: Courrier Sud - Fool Moon What's so good? Yoh,&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://www.indieshuffle.com/courrier-sud-fool-moon/"
                            title="31 Jul 2021 - 1:05 PM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->
<div class="ad-wrapper ad-leaderboard ad-leaderboard-tracks ad-leaderboard-tracks-A" id="ad-leaderboard-tracks-A"></div>


<div data-itemid="16w3z" id="section-track-16w3z"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">8</span>


    <a class="thumb"
                    href="/track/16w3z/Sly+%26+The+Family+Stone+-+Stand%21"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/7f/16w3z_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Sly &amp; The Family Stone - search Hype Machine for this artist"
               href="/artist/Sly+%26+The+Family+Stone">Sly & The Family Stone</a><span class="divider"> - </span>        <a class="track" title="Stand! - go to page for this track"
           href="/track/16w3z/Sly+%26+The+Family+Stone+-+Stand%21">
            <span class="base-title">Stand!</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F16w3z&text=Sly+%26+The+Family+Stone+-+Stand%21%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_16w3z" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_16w3z"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 3 sites</a>
                </span>

        <span class="download">
            
        &bull;

        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/68DqLs1hv7zI08EBvu53wV">Spotify</a>
            
                             &bull;                 <a rel="nofollow"
                          href="/go/itunes_web/stand%21%2Fid193125445%3Fi%3D193125819?entity=album">Apple Music</a>
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/popdose/5103">Popdose</a><a
                            class="follow-pill fav_site_5103 follow"
                            onclick="toggleFavoriteBlog('5103');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;You can do it with love in your heart. You can do it with the red&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="http://popdose.com/the-weekly-mixtape-election-day-2012-edition/"
                            title="5 Nov 2012 - 4:00 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="30kxx" id="section-track-30kxx"
     class="section section-track haarp-section-track  even"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">9</span>


    <a class="thumb"
                    href="/track/30kxx/Solid+Gold+Playaz+-+Optical+Illusion"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/bd/30kxx_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Solid Gold Playaz - search Hype Machine for this artist"
               href="/artist/Solid+Gold+Playaz">Solid Gold Playaz</a><span class="divider"> - </span>        <a class="track" title="Optical Illusion - go to page for this track"
           href="/track/30kxx/Solid+Gold+Playaz+-+Optical+Illusion">
            <span class="base-title">Optical Illusion</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F30kxx&text=Solid+Gold+Playaz+-+Optical+Illusion%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_30kxx" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_30kxx"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 2 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/30kxx">Bandcamp</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/41aSJIRbdEQ3k52BNSPlcr">Spotify</a>
            
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/5+magazine/24277">5 Magazine</a><a
                            class="follow-pill fav_site_24277 follow"
                            onclick="toggleFavoriteBlog('24277');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Jimpster's Freerange drops another "buy on sight" record - Mind in a Daze - from underground&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://5mag.net/tracks/new-releases/solid-gold-playaz-mind-daze/"
                            title="30 Jul 2021 - 2:38 PM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="315es" id="section-track-315es"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">10</span>


    <a class="thumb"
                    href="/track/315es/Machinedrum+-+Only+One+%28feat.+Angelica+Bess%29"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/d9/315es_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Machinedrum - search Hype Machine for this artist"
               href="/artist/Machinedrum">Machinedrum</a><span class="divider"> - </span>        <a class="track" title="Only One (feat. Angelica Bess) - go to page for this track"
           href="/track/315es/Machinedrum+-+Only+One+%28feat.+Angelica+Bess%29">
            <span class="base-title">Only One (feat. Angelica Bess)</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F315es&text=Machinedrum+-+Only+One+%28feat.+Angelica+Bess%29%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_315es" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_315es"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 1 site</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/315es">Bandcamp</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/4Bigp1M2cas5ocOo0nO8kn">Spotify</a>
            
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/xlr8r/3751">XLR8R</a><a
                            class="follow-pill fav_site_3751 follow"
                            onclick="toggleFavoriteBlog('3751');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Travis Stewart has released a new EP as Machinedrum. Psyconia, a follow up to Stewartâs A&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://xlr8r.com/news/machinedrums-back-with-a-new-ep-listen-now/"
                            title="31 Jul 2021 - 8:47 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="315dk" id="section-track-315dk"
     class="section section-track haarp-section-track  even"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">11</span>


    <a class="thumb"
                    href="/track/315dk/Billie+Eilish+-+Your+Power+%28GONE+Remix%29"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/b3/315dk_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Billie Eilish - search Hype Machine for this artist"
               href="/artist/Billie+Eilish">Billie Eilish</a><span class="divider"> - </span>        <a class="track" title="Your Power (GONE Remix) - go to page for this track"
           href="/track/315dk/Billie+Eilish+-+Your+Power+%28GONE+Remix%29">
            <span class="base-title">Your Power</span> <span class="remix-link">GONE Remix</span>         </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F315dk&text=Billie+Eilish+-+Your+Power+%28GONE+Remix%29%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_315dk" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_315dk"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 1 site</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/sc/315dk">SoundCloud</a> 
        
            </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/acid+stag/17657">acid stag</a><a
                            class="follow-pill fav_site_17657 follow"
                            onclick="toggleFavoriteBlog('17657');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Thrust your hips to these saucy remixes ð¶ The post Remix This #266 appeared first on&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://acidstag.com/2021/07/remix-this-266/"
                            title="30 Jul 2021 - 6:00 PM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="3156e" id="section-track-3156e"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">12</span>


    <a class="thumb"
                    href="/track/3156e/Gustaf+-+Book"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/ce/3156e_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Gustaf - search Hype Machine for this artist"
               href="/artist/Gustaf">Gustaf</a><span class="divider"> - </span>        <a class="track" title="Book - go to page for this track"
           href="/track/3156e/Gustaf+-+Book">
            <span class="base-title">Book</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F3156e&text=Gustaf+-+Book%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_3156e" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_3156e"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 4 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/3156e">Bandcamp</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/6lpyYxV1Hd72S4ezzA47fb">Spotify</a>
            
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/record+turnover/24596">Record Turnover</a><a
                            class="follow-pill fav_site_24596 follow"
                            onclick="toggleFavoriteBlog('24596');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Audio Drag For Ego Slobs is the name of the debut album from NYC post-punk group&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://www.recordturnover.com/2021/07/30/gustaf-lp/"
                            title="30 Jul 2021 - 7:02 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="315dh" id="section-track-315dh"
     class="section section-track haarp-section-track  even"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">13</span>


    <a class="thumb"
                    href="/track/315dh/Jessie+J+-+I+Want+Love+%28Ana-Tole+x+DMO+Bootleg+Remix%29"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/b1/315dh_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Jessie J - search Hype Machine for this artist"
               href="/artist/Jessie+J">Jessie J</a><span class="divider"> - </span>        <a class="track" title="I Want Love (Ana-Tole x DMO Bootleg Remix) - go to page for this track"
           href="/track/315dh/Jessie+J+-+I+Want+Love+%28Ana-Tole+x+DMO+Bootleg+Remix%29">
            <span class="base-title">I Want Love</span> <span class="remix-link">Ana-Tole x DMO Bootleg Remix</span>         </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F315dh&text=Jessie+J+-+I+Want+Love+%28Ana-Tole+x+DMO+Bootleg+Remix%29%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_315dh" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_315dh"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 1 site</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/sc/315dh">SoundCloud</a> 
        
            </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/acid+stag/17657">acid stag</a><a
                            class="follow-pill fav_site_17657 follow"
                            onclick="toggleFavoriteBlog('17657');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Thrust your hips to these saucy remixes ð¶ The post Remix This #266 appeared first on&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://acidstag.com/2021/07/remix-this-266/"
                            title="30 Jul 2021 - 6:00 PM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="315dg" id="section-track-315dg"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">14</span>


    <a class="thumb"
                    href="/track/315dg/Last+Chance+-+Hot+Chip+Remix"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/b0/315dg_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Last Chance - search Hype Machine for this artist"
               href="/artist/Last+Chance">Last Chance</a><span class="divider"> - </span>        <a class="track" title="Hot Chip Remix - go to page for this track"
           href="/track/315dg/Last+Chance+-+Hot+Chip+Remix">
            <span class="base-title">Hot Chip Remix</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F315dg&text=Last+Chance+-+Hot+Chip+Remix%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_315dg" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_315dg"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 1 site</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/sc/315dg">SoundCloud</a> 
        
            </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/acid+stag/17657">acid stag</a><a
                            class="follow-pill fav_site_17657 follow"
                            onclick="toggleFavoriteBlog('17657');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Thrust your hips to these saucy remixes ð¶ The post Remix This #266 appeared first on&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://acidstag.com/2021/07/remix-this-266/"
                            title="30 Jul 2021 - 6:00 PM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->
<div class="ad-wrapper ad-leaderboard ad-leaderboard-tracks ad-leaderboard-tracks-B" id="ad-leaderboard-tracks-B"></div>


<div data-itemid="30t0j" id="section-track-30t0j"
     class="section section-track haarp-section-track  even"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">15</span>


    <a class="thumb"
                    href="/track/30t0j/King+Woman+-+Morning+Star"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/12/30t0j_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="King Woman - search Hype Machine for this artist"
               href="/artist/King+Woman">King Woman</a><span class="divider"> - </span>        <a class="track" title="Morning Star - go to page for this track"
           href="/track/30t0j/King+Woman+-+Morning+Star">
            <span class="base-title">Morning Star</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F30t0j&text=King+Woman+-+Morning+Star%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_30t0j" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_30t0j"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 7 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/30t0j">Bandcamp</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/1Ih6CjzqI055l87s7W3LIg">Spotify</a>
            
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/ears+to+feed/24357">Ears To Feed</a><a
                            class="follow-pill fav_site_24357 follow"
                            onclick="toggleFavoriteBlog('24357');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Every Friday, Ears to Feed staffers will be highlighting our favorite tracks of the week. Editorial&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://earstofeed.com/ears-to-feeds-top-tracks-of-the-week-3/"
                            title="16 Jul 2021 - 10:53 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="3156p" id="section-track-3156p"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">16</span>


    <a class="thumb"
                    href="/track/3156p/Volleyball+-+Aloosh"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/d6/3156p_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Volleyball - search Hype Machine for this artist"
               href="/artist/Volleyball">Volleyball</a><span class="divider"> - </span>        <a class="track" title="Aloosh - go to page for this track"
           href="/track/3156p/Volleyball+-+Aloosh">
            <span class="base-title">Aloosh</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F3156p&text=Volleyball+-+Aloosh%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_3156p" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_3156p"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 2 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/sc/3156p">SoundCloud</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/1QXWQI6mW2ECxFd3hTBpDC">Spotify</a>
            
                             &bull;                 <a rel="nofollow"
                          href="/go/itunes_web/?entity=album">Apple Music</a>
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/the+line+of+best+fit/3411">The Line Of Best Fit</a><a
                            class="follow-pill fav_site_3411 follow"
                            onclick="toggleFavoriteBlog('3411');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Concluding their recent six-track campaign, Volleyball return with resplendent psychedelia on "Aloosh".>&rdquo;
                        <a
                            class="readpost"
                            href="https://www.thelineofbestfit.com/new-music/discovery/volleyball-aloosh"
                            title="30 Jul 2021 - 6:10 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="xahw" id="section-track-xahw"
     class="section section-track haarp-section-track  even"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">17</span>


    <a class="thumb"
                    href="/track/xahw/Tapes+-+C20+Riddim"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/3c/xahw_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Tapes - search Hype Machine for this artist"
               href="/artist/Tapes">Tapes</a><span class="divider"> - </span>        <a class="track" title="C20 Riddim - go to page for this track"
           href="/track/xahw/Tapes+-+C20+Riddim">
            <span class="base-title">C20 Riddim</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2Fxahw&text=Tapes+-+C20+Riddim%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_xahw" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_xahw"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 3 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/xahw">Bandcamp</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/7CHMjS0OsFv5755JnBjzGD">Spotify</a>
            
                             &bull;                 <a rel="nofollow"
                          href="/go/itunes_web/c20-riddim%2Fid333291745%3Fi%3D333291870?entity=album">Apple Music</a>
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/sound+of+the+day/24691">Sound Of The Day</a><a
                            class="follow-pill fav_site_24691 follow"
                            onclick="toggleFavoriteBlog('24691');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            
                        <a
                            class="readpost"
                            href="https://soundoftheday.co.uk/2021/07/31/tapes-c20-riddim/"
                            title="31 Jul 2021 - 1:00 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="2yftf" id="section-track-2yftf"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">18</span>


    <a class="thumb"
                    href="/track/2yftf/OSEES+-+BLOOD+ON+YOUR+BOOTS"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/4f/2yftf_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="OSEES - search Hype Machine for this artist"
               href="/artist/OSEES">OSEES</a><span class="divider"> - </span>        <a class="track" title="BLOOD ON YOUR BOOTS - go to page for this track"
           href="/track/2yftf/OSEES+-+BLOOD+ON+YOUR+BOOTS">
            <span class="base-title">BLOOD ON YOUR BOOTS</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F2yftf&text=OSEES+-+BLOOD+ON+YOUR+BOOTS%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_2yftf" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_2yftf"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 8 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/2yftf">Bandcamp</a> 
        
            </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/dansende+beren/23612">Dansende Beren</a><a
                            class="follow-pill fav_site_23612 follow"
                            onclick="toggleFavoriteBlog('23612');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;De klassieke opener van een artikel over Osees is het opsommen van alle namen waaronder het&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://www.dansendeberen.be/2020/07/03/nieuwe-single-osees-blood-on-your-boots/"
                            title="3 Jul 2020 - 5:28 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="312ha" id="section-track-312ha"
     class="section section-track haarp-section-track  even"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">19</span>


    <a class="thumb"
                    href="/track/312ha/Beige+Banquet+-+AWAKE"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/2a/312ha_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Beige Banquet - search Hype Machine for this artist"
               href="/artist/Beige+Banquet">Beige Banquet</a><span class="divider"> - </span>        <a class="track" title="AWAKE - go to page for this track"
           href="/track/312ha/Beige+Banquet+-+AWAKE">
            <span class="base-title">AWAKE</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F312ha&text=Beige+Banquet+-+AWAKE%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_312ha" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_312ha"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 5 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/312ha">Bandcamp</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/7cfdlkMOGy7eqopnCslwKm">Spotify</a>
            
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/ohestee/22602">ohestee</a><a
                            class="follow-pill fav_site_22602 follow"
                            onclick="toggleFavoriteBlog('22602');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Earlier this year, Beige Banquet released their debut album âBetaâ and now returns with the first&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="https://www.ohestee.com/music/rock/beige-banquet-announces-s-t-ep-shares-awake/"
                            title="2 Aug 2021 - 10:35 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->



<div data-itemid="1rmps" id="section-track-1rmps"
     class="section section-track haarp-section-track  odd"  >




<div class="track-info"></div>


<div class="playlist-ctrls playlist-off">
    <a data-playlist-id="3" title="Weird" class="haarp-playlist-ctrl playlist-3 playlist-option " href=""></a>
    <a data-playlist-id="2" title="Down" class="haarp-playlist-ctrl playlist-2 playlist-option " href=""></a>
    <a data-playlist-id="1" title="Up" class="haarp-playlist-ctrl playlist-1 playlist-option " href=""></a>
    <a class="playlist-selected " href=""></a>
</div>









<div class="section-player">

    <span class="rank">20</span>


    <a class="thumb"
                    href="/track/1rmps/Amor+de+D%C3%ADas+-+Jean%27s+Waving"
               title="Go to the page for this track"
       style="background:url(https://static.hypem.com/items_images/d9/1rmps_320.jpg) center center;background-size:cover;">
    </a>


<h3 class="track_name">
    
                    <a class="artist" title="Amor de D&iacute;as - search Hype Machine for this artist"
               href="/artist/Amor+de+D%C3%ADas">Amor de DÃ­as</a><span class="divider"> - </span>        <a class="track" title="Jean's Waving - go to page for this track"
           href="/track/1rmps/Amor+de+D%C3%ADas+-+Jean%27s+Waving">
            <span class="base-title">Jean's Waving</span>        </a>
    

    
</h3>



<span class="share-links">
    <a class="twitter-share icon-twitter fire-share-modal"
       data-href="//hypem.com/share?share_type=twitter&create_type=hypem-player&url=https%3A%2F%2Fhypem.com%2Ftrack%2F1rmps&text=Amor+de+D%C3%ADas+-+Jean%27s+Waving%20on%20@hypem&via=hypem"></a>
</span>


<ul class="tools">
            <li class="playdiv">
            <a id="play_ctrl_1rmps" class="play-ctrl play icon-toggle haarp-play-ctrl"
               title="Play"
               href="">
            </a>
        </li>
    
            <li class="favdiv">

                        <a class="haarp-fav-ctrl icon-heart fav-off"
               id="fav_item_1rmps"
               title="Favorite"
               href="">
            </a>
        </li>

    
</ul>



<div class="meta">
    <span class="buy">
                        <a href="" class="toggle-reposts">Posted by 15 sites</a>
                </span>

        <span class="download">
            
        &bull;

                    On <a rel="nofollow" href="/go/bc/1rmps">Bandcamp</a> 
        
                    
            <span class="download-extra">
             &bull;             Also on:

                            <a rel="nofollow" href="/go/spotify_track/7ctXFNKyav1v3J6EOtPil2">Spotify</a>
            
                             &bull;                 <a rel="nofollow"
                          href="/go/itunes_web/jeans-waving%2Fid575221159%3Fi%3D575221257?entity=album">Apple Music</a>
            
                        </span>

             </span>
    </div>




    
        <p class="post_info">

            
                    
                        <a
                            class="blog-fav-off"
                            title="See other tracks posted by this blog"
                            href="/site/chromewaves/389">Chromewaves</a><a
                            class="follow-pill fav_site_389 follow"
                            onclick="toggleFavoriteBlog('389');return false;"
                            href="#"><em></em><span>Follow</span></a>

                            &ldquo;Alfredo Arias HorasWhen Amor de DÃ­as released their first album Street Of The Love Of Days&hellip;&rdquo;
                        <a
                            class="readpost"
                            href="http://www.chromewaves.net/2013/01/review-of-amor-de-dias-house-at-sea/"
                            title="24 Jan 2013 - 6:32 AM CST">

                            Read &nbsp;&rarr;

                        </a>
                    
                
        </p>

    
    <div class="act_info" style="display:none"></div>
    




</div><!-- section player -->



</div><!-- section track -->

        <div class="paginator infinite">
        
                </div>
        
        <script type="text/javascript">
            enable_infinite_page_scroll();
        </script>

    


    
    
    </div>            

</div>		 




	 
    <script type="application/json" id="displayList-data">
    {"page_cur":"\/popular","page_num":1,"tracks":[{"type":"normal","id":"314nn","time":261,"ts":1627579688,"postid":3970136,"posturl":"https:\/\/abductionradiation.tumblr.com\/post\/658051946312269824\/montreal-quebec-ada-lea-the-moniker-of","fav":0,"key":"b6155f2d136634a6da1990e7503891bc","artist":"Ada Lea","song":"damn","is_sc":true,"is_bc":true,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:11vHf53qTRiEk7bRzyZXr3"},{"type":"normal","id":"313z4","time":208,"ts":1627563857,"postid":3969976,"posturl":"https:\/\/www.iggymagazine.com\/indie-pop-langoureuse-avec-too-many-du-duo-canadien-smokehouse\/","fav":0,"key":"4684a17f5235574c52b17a37cdda627f","artist":"Smokehouse","song":"Too Many","is_sc":true,"is_bc":false,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:2aWEJWqgUbpBgDuzPao9eJ"},{"type":"normal","id":"312zv","time":263,"ts":1627757321,"postid":3971012,"posturl":"https:\/\/www.indieshuffle.com\/emancipator-x-cloudchord-jade\/","fav":0,"key":"61eb296aa8d12502703a20acb54a7061","artist":"Emancipator & Cloudchord","song":"Jade","is_sc":true,"is_bc":false,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:2YmgONHQR1veqs0K7hauj1"},{"type":"normal","id":"2va0q","time":310,"ts":1558704141,"postid":3573098,"posturl":"https:\/\/thevinylfactory.com\/features\/the-10-best-new-vinyl-releases-this-week-24th-may\/","fav":0,"key":"d65f365f92562ab38d672baa215e8ec0","artist":"Dennis Young","song":"Primitive Substance","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:4X7AhtWTvQnwA7EkTKkSiU"},{"type":"normal","id":"315et","time":169,"ts":1627742888,"postid":3970988,"posturl":"https:\/\/www.riptidemag.fr\/kislaw-le-producteur-lillois-degaine-le-remix-de-glitter\/","fav":0,"key":"9dc23013fac92a77df3eaff118a89de9","artist":"Kislaw","song":"Glitter (La Felix Remix)","is_sc":true,"is_bc":false,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:0tnbZgXVCjGT7Ph4eo192t"},{"type":"normal","id":"315f3","time":240,"ts":1627754195,"postid":3971006,"posturl":"https:\/\/thelisteningpostblog.wordpress.com\/2021\/07\/31\/song-of-the-day-girma-beyene-ene-negn-bay-manesh\/","fav":0,"key":"5412e0f85c99fd04f551388326e668e6","artist":"Girma Beyene","song":"Ene Negn Bay Manesh","is_sc":true,"is_bc":false,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:2IUc2Gh0GwHSTB9SDdoqmr"},{"type":"normal","id":"312fr","time":215,"ts":1627757302,"postid":3971011,"posturl":"https:\/\/www.indieshuffle.com\/courrier-sud-fool-moon\/","fav":0,"key":"34811bb141f39ca219d5e3ad5e36e865","artist":"Courrier Sud","song":"Fool Moon (Delicieuse Records)","is_sc":true,"is_bc":false,"is_am":false,"is_au":false},{"type":"normal","id":"16w3z","time":187,"ts":1352113328,"postid":1985734,"posturl":"http:\/\/popdose.com\/the-weekly-mixtape-election-day-2012-edition\/","fav":0,"key":"541ffd82316dea5d3c15547edc3cb4c5","artist":"Sly & The Family Stone","song":"Stand!","is_sc":false,"is_bc":false,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:68DqLs1hv7zI08EBvu53wV"},{"type":"normal","id":"30kxx","time":414,"ts":1627674097,"postid":3970828,"posturl":"https:\/\/5mag.net\/tracks\/new-releases\/solid-gold-playaz-mind-daze\/","fav":0,"key":"7bb983986f2075e947634f96155ba205","artist":"Solid Gold Playaz","song":"Optical Illusion","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:41aSJIRbdEQ3k52BNSPlcr"},{"type":"normal","id":"315es","time":277,"ts":1627742173,"postid":3970984,"posturl":"https:\/\/xlr8r.com\/news\/machinedrums-back-with-a-new-ep-listen-now\/","fav":0,"key":"6dc7c9936c05866728c23671dbaadfee","artist":"Machinedrum","song":"Only One (feat. Angelica Bess)","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:4Bigp1M2cas5ocOo0nO8kn"},{"type":"normal","id":"315dk","time":223,"ts":1627688911,"postid":3970885,"posturl":"https:\/\/acidstag.com\/2021\/07\/remix-this-266\/","fav":0,"key":"84e9570ecedb0bfd302bfb43e94d5548","artist":"Billie Eilish","song":"Your Power (GONE Remix)","is_sc":true,"is_bc":false,"is_am":false,"is_au":false},{"type":"normal","id":"3156e","time":120,"ts":1627647724,"postid":3970495,"posturl":"https:\/\/www.recordturnover.com\/2021\/07\/30\/gustaf-lp\/","fav":0,"key":"27312b244e8d8258072e330dbeca1bf6","artist":"Gustaf","song":"Book","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:6lpyYxV1Hd72S4ezzA47fb"},{"type":"normal","id":"315dh","time":332,"ts":1627688898,"postid":3970885,"posturl":"https:\/\/acidstag.com\/2021\/07\/remix-this-266\/","fav":0,"key":"d72efdc5ea109f9a4399b5c45a4e76c8","artist":"Jessie J","song":"I Want Love (Ana-Tole x DMO Bootleg Remi...","is_sc":true,"is_bc":false,"is_am":false,"is_au":false},{"type":"normal","id":"315dg","time":321,"ts":1627688892,"postid":3970885,"posturl":"https:\/\/acidstag.com\/2021\/07\/remix-this-266\/","fav":0,"key":"ee1074ee174e2f45cb0593a1244caa91","artist":"Last Chance","song":"Hot Chip Remix","is_sc":true,"is_bc":false,"is_am":false,"is_au":false},{"type":"normal","id":"30t0j","time":234,"ts":1626453671,"postid":3965091,"posturl":"https:\/\/earstofeed.com\/ears-to-feeds-top-tracks-of-the-week-3\/","fav":0,"key":"65a4fe7e2148194c8b4dfaa1e6660698","artist":"King Woman","song":"Morning Star","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:1Ih6CjzqI055l87s7W3LIg"},{"type":"normal","id":"3156p","time":183,"ts":1627643551,"postid":3970463,"posturl":"https:\/\/www.thelineofbestfit.com\/new-music\/discovery\/volleyball-aloosh","fav":0,"key":"9ebe39b805cdc8eca6f08922b120ad4e","artist":"Volleyball","song":"Aloosh","is_sc":true,"is_bc":false,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:1QXWQI6mW2ECxFd3hTBpDC"},{"type":"normal","id":"xahw","time":169,"ts":1627712414,"postid":3970918,"posturl":"https:\/\/soundoftheday.co.uk\/2021\/07\/31\/tapes-c20-riddim\/","fav":0,"key":"57b9b39452de8f0cd61f81c05c2fc49e","artist":"Tapes","song":"C20 Riddim","is_sc":false,"is_bc":true,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:7CHMjS0OsFv5755JnBjzGD"},{"type":"normal","id":"2yftf","time":101,"ts":1593782973,"postid":3790902,"posturl":"https:\/\/www.dansendeberen.be\/2020\/07\/03\/nieuwe-single-osees-blood-on-your-boots\/","fav":0,"key":"d88311bb4d7206a469d4d66105c8a143","artist":"OSEES","song":"BLOOD ON YOUR BOOTS","is_sc":true,"is_bc":true,"is_am":false,"is_au":false},{"type":"normal","id":"312ha","time":154,"ts":1627920966,"postid":3971439,"posturl":"https:\/\/www.ohestee.com\/music\/rock\/beige-banquet-announces-s-t-ep-shares-awake\/","fav":0,"key":"53faa319b83da70d994decdcc5e8d3fb","artist":"Beige Banquet","song":"AWAKE","is_sc":true,"is_bc":true,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:7cfdlkMOGy7eqopnCslwKm"},{"type":"normal","id":"1rmps","time":183,"ts":1359034102,"postid":2062183,"posturl":"http:\/\/www.chromewaves.net\/2013\/01\/review-of-amor-de-dias-house-at-sea\/","fav":0,"key":"775994b0f29f2d3ce916ee961e0043c1","artist":"Amor de D\u00edas","song":"Jean's Waving","is_sc":true,"is_bc":true,"is_am":false,"is_au":false,"spotify_uri":"spotify:track:7ctXFNKyav1v3J6EOtPil2"}],"page_name":"popular","page_mode":"3day","page_arg":"","page_sort":"","title":"Popular tracks \/ Hype Machine","page_next":"\/popular\/2"}    </script>


<script>
    enable_notification_check();
    </script>

    </div><!-- content -->
    </div><!-- container -->

    
    <!-- PAGE TOTAL: 0.069s -->

</div><!-- end content wrapper -->


<div id="footer-menu">

    <div id="footer-menu-inner" class="content-centered">

        <ul class="menu">
            <li><a href="/about">About</a></li>
            <li><a class="user" href="/contact">Contact</a></li>
                        <li><a target="_blank" href="http://blog.hypem.com">Our Blog</a></li>
            <li><a target="_blank" class="hide_mobile" href="http://merch.hypem.com/">Merch</a></li>
            <li><a href="/stack" class="hide_mobile">Stack: Weekly Mix</a></li>
            <li><a target="_blank" class="hide_mobile" href="/premiere" title="Featured album premieres">Featured Albums</a></li>
                    </ul>

    </div>

</div>

<div id="footer">

    <div id="footer-inner" class="content-centered">

        <p>
                Since 2005, Hype Machine is made in Brooklyn, NY<span class="hide_mobile"> by <a href="https://hypem.com/anthony" title="Anthony Volodkin">Anthony</a>, <a href="https://hypem.com/zoya" title="Zoya Feldman">Zoya</a>, <a href="https://hypem.com/scott" title="Scott Kidder">Scott</a> &amp; <a href="https://hypem.com/stadiumsshrines" title="Dave Sutton">Dave</a></span> and is funded by listeners like you. <a href="https://hypem.com/support-us">Support us here</a>.
        
        
        <br />
        <a href="/terms">Terms of Use</a> &bull; <a href="/privacy">Privacy Policy</a>

                <span class="hide_mobile">
                &bull; Advertising by <a href="http://hear-there.com/">Hear &amp; There</a>. <a href="http://hear-there.com/#contact" target="_blank">Advertise</a><br />
                </span>
        
        
        
	</div>
</div>



<div id="toast-prompt">
    <h5>Want to be notified when the track changes?</h5>
    <p>Click <strong>Allow</strong> to get desktop notifications when Hype Machine is in the background.</p>
</div>


    
        
    
            <script>
            var _qevents = _qevents || [];
            (function() {
                var elem = document.createElement('script');
                elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
                elem.async = true;
                elem.type = "text/javascript";
                var scpt = document.getElementsByTagName('script')[0];
                scpt.parentNode.insertBefore(elem, scpt);
            })();
        </script>
    
    
        <script>
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-97430-1']);

            (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();

            _gaq.push(['_addIgnoredOrganic', 'hypem']); 
            _gaq.push(['_addIgnoredOrganic', 'hype machine']); 
            _gaq.push(['_addIgnoredOrganic', 'hypemachine']); 
            _gaq.push(['_addIgnoredOrganic', 'hypem.com']); 
            _gaq.push(['_addIgnoredOrganic', 'the hype machine']); 
            _gaq.push(['_addIgnoredOrganic', 'http://hypem.com/']); 
            _gaq.push(['_addIgnoredOrganic', 'hype m']); 
            _gaq.push(['_addIgnoredOrganic', 'www.hypem.com']);
            _gaq.push(['_addIgnoredOrganic', 'http://hypem.com/popular']);

        </script>

   
        
    <div id="keyboard">
    <div class="overlay"></div>
    <div class="popup">
        <div id="close-keyboard-shortcuts"></div>
        <h1>Keyboard Shortcuts</h1>
        <div class="function">
            Show / Hide this menu
        </div>
        <div class="keys">
            <span>?</span>
        </div>
        <div class="function">
            Next Track
        </div>
        <div class="keys">
            <span>n</span>
            <span>j</span>
            <span>b</span>
            <span>â</span>
        </div>
        <div class="function">
            Previous Track
        </div>
        <div class="keys">
            <span>p</span>
            <span>k</span>
            <span>z</span>
            <span>â</span>
        </div>
        <div class="function">
            Play / Pause
        </div>
        <div class="keys">
            <span>space</span>
            <span>x</span>
            <span>c</span>
        </div>
        <div class="function">
            Stop
        </div>
        <div class="keys">
            <span>v</span>
        </div>
        <div class="function">
            Heart
        </div>
        <div class="keys">
            <span>l</span>
            <span>h</span>
            <span>f</span>
        </div>
        <div class="function">
            Focus Search Bar
        </div>
        <div class="keys">
            <span>/</span>
        </div>
        <div class="function">
            Volume Up / Down
        </div>
        <div class="keys">
            <span>+</span>
            <span>-</span>
        </div>
        <div class="function">
            Close Popups
        </div>
        <div class="keys">
            <span>esc</span>
        </div>
    </div>
</div>

    
</body>

</html>
