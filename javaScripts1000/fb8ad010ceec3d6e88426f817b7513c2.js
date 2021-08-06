<!DOCTYPE html><html xml:lang="en" lang="en"><head><link rel="dns-prefetch" href="\pagead2.googlesyndication.com"><link rel="dns-prefetch" href="\google-analytics.com"><link rel="dns-prefetch" href="\static.fctables.com"><link rel="dns-prefetch" href="\connect.facebook.net" /><title>Soccer statistics, predictions, tables and Head to Head</title><meta name="Description" content="The website provides soccer statistics tables, results, tips, and Head to head (H2H). Our algorithm presents every day tips that are worth bet. The service is available for Computer, Tablet and mobile." /><meta name="Keywords" content="soccer statistics, soccer stats,tables, tips, chart, statistics, football" /><meta charset="UTF-8"><meta property="fb:app_id" content="1007493516044195" /><meta name="viewport" content="width=device-width, minimum-scale=1.0, initial-scale=1.0" /><script async src="https://static.fctables.com/js/lang_en3.js"></script><script async src="//ads.fctables.com/www/delivery/asyncjs.php"></script><script src="https://static.fctables.com/js/reviveads_ver2.js?10"></script><link href="https://static.fctables.com/css/style75.min.css" rel="stylesheet" type="text/css" /><meta http-equiv="X-UA-Compatible" content="IE=10; IE=9; IE=8; IE=7; IE=EDGE" /><link rel="canonical" href="https://www.fctables.com/" /><meta name="robots" content="index,follow"/><link rel="shortcut icon" type="image/png" href="https://static.fctables.com/images/favicon_16x16.png" sizes="16x16"><link rel="shortcut icon" type="image/png" href="https://static.fctables.com/favicon.ico" sizes="32x32"><script async src="https://www.googletagmanager.com/gtag/js?id=UA-85452329-1"></script><link rel="alternate" hreflang="x-default" href="https://www.fctables.com" /><link rel="alternate" hreflang="en" href="https://www.fctables.com" /><link rel="alternate" hreflang="pl" href="https://pl.fctables.com" /><link rel="alternate" hreflang="it" href="https://it.fctables.com" /><!-- IE8 HTML5 support --><!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.js"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script><![endif]-->
       <!-- Global site tag (gtag.js) - Google Analytics -->

<script>
    function createCookie(e,t,n){var r;if(n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1000),r="; expires="+i.toGMTString()}else r="";document.cookie=e+"="+t+r+"; path=/"}function readCookie(e){for(var t=e+"=",n=document.cookie.split(";"),r=0;r<n.length;r++){for(var i=n[r];" "===i.charAt(0);)i=i.substring(1,i.length);if(0===i.indexOf(t))return i.substring(t.length,i.length)}return null}
        
    var isOperaMini = (navigator.userAgent.indexOf('Opera Mini') > -1);
    
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-85452329-1');
</script>
   
    </head><body>
   
    <div id="privacy-optin" style="width:100%;display:none;text-align:center;">
        <div style="z-index:99998;text-align:center;position:fixed;width:100%;height:1000px;background:white;opacity:0.8">

        </div>
        <div style="width:100%;text-align:center;top:50px;position:fixed;z-index:99999;opacity:1;">
            <div style="margin:auto;max-width:640px;width:90%;padding: 8px;">
                <div class="panel panel-default" style="-webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.3);
-moz-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.3);
box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.3);">
                    <div class="panel-heading">Cookies and privacy policy</div>
                    <div class="panel-body">
                        <div class="policy-info">
                            This website makes use of cookies and similar technologies to improve your user experience, 
                            analyse how the website is used and advertising that 
                            might interest you. For more information click here: <a href="#" onclick="privacy_policy_get(this)">More info</a>
                        </div>
                        <div id="privacy_policy_html" style="text-align:left;overflow-y:scroll;max-height:200px;width:100%;"></div>
                        <div onclick="privacy_optin_ok()" style="margin: 10px 0;" class="btn btn-lg btn-block btn-success">
                            I Accept and I'am<br class="visible-xs" /> over 18 years old
                        </div>

                        If you dont accept our policy close our website.
                    </div>
                  </div>
            </div>

        </div>  
    </div>
    
    <script>
         
        if(!readCookie('privacy_optin')){
            getCountryCheckPrivaccy();  
        }else{
            if(!readCookie('country_id')){
                getCountryCheckPrivaccy();
            }
            
            show_ads_script();
        }
        
        
        
        function getCountryCheckPrivaccy() {
            var xmlhttp = new XMLHttpRequest();

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                   if (xmlhttp.status == 200) {
                       var ci = JSON.parse(xmlhttp.responseText);
                  
                       if(ci.country_id){
                           createCookie('country_id', ci.country_id, 14);
                       }
                       
                       if(!readCookie('privacy_optin') && (ci.continent=='EU' || !ci.continent)){
                           document.getElementById('privacy-optin').style.display="block";
                       }else{
                           createCookie('privacy_optin',1,3650);
                           show_ads_script();
                       }
                    
                   } else if (xmlhttp.status == 400) {
                      
                   } else {
                       
                   }
                }
            };

            xmlhttp.open("GET", "/country.php", true);
            xmlhttp.send();
        }

        function privacy_policy_get(obj){
           
            obj = $(obj);
            $.ajax({
                url: "/page_text/298/",
                dataType: "html",
                cache:true,
                data: {},   
                beforeSend: function(){
                     obj.parent().parent().find('.policy-info').hide();
                     $('#privacy_policy_html').html('<div class="text-center"><img src="/images/ajax-loader.gif" /></div>');
                },
                success: function(data) {
                    $('#privacy_policy_html').html(data);
                }
            });
            
        }
        
        function privacy_optin_ok(){
            createCookie('privacy_optin',1,728);
            document.getElementById('privacy-optin').style.display="none";
            show_ads_script();
            
        }
        
        function inIframe(){
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }
        
        function get_obj_size(o){
          
            var w = o.offsetWidth;
            
            return {
                'w': w,
                'h': o.offsetHeight
            }
        }



        function show_ads_script(){
            if(inIframe())
                return;

            show_google_ads();
        }
        
        var adsense_loaded = false; 
        function show_google_ads(){
            
            show_ads_server_ads();

    
            var adsense_loaded = true; 
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
            document.body.appendChild(s);
            
            (adsbygoogle = window.adsbygoogle || []).push({
                 google_ad_client: "ca-pub-7973862450098125",
                 enable_page_level_ads: true
            });
            
    
        }
        
                function check_ads(){


                    if (typeof geoip_country_code === "undefined" && readCookie('country_code')){
                        geoip_country_code = readCookie('country_code');
                    }

                    
                    if (typeof geoip_country_code !== "undefined"){
                        if (!readCookie('country_code')){
                            createCookie('country_code',geoip_country_code,3650);
                        }


                        /*
                        if (geoip_country_code == "ng"){
                           
                            var x = document.querySelectorAll(".big-banner");
                          
                            for (var i = 0; i < x.length; i++) {
                                
                                 x[i].innerHTML = '<div class="visible-lg visible-md"><iframe scrolling="no" frameBorder="0" style="padding:0px; margin:0px; border:0px;border-style:none;border-style:none;" width="970" height="90" src="https://wlbet9ja.adsrv.eacdn.com/I.ashx?btag=a_151933b_643c_&affid=8695&siteid=151933&adid=643&c=" ></iframe></div><div class="hidden-lg hidden-md"><iframe scrolling="no" frameBorder="0" style="padding:0px; margin:0px; border:0px;border-style:none;border-style:none;" width="328" height="328" src="https://wlbet9ja.adsrv.eacdn.com/I.ashx?btag=a_151933b_528c_&affid=8695&siteid=151933&adid=528&c=" ></iframe></div>';
                            }

                            var x = document.querySelectorAll(".adsbygoogle:not(.big-banner)");
                           
                            for (var i = 0; i < x.length; i++) {
                                
                                x[i].innerHTML = '<iframe scrolling="no" frameBorder="0" style="padding:0px; margin:0px; border:0px;border-style:none;border-style:none;" width="328" height="328" src="https://wlbet9ja.adsrv.eacdn.com/I.ashx?btag=a_151933b_528c_&affid=8695&siteid=151933&adid=528&c=" ></iframe>';
                            }
                            
                        }else{
                            show_google_ads();
                        }
                        */
                        // show_google_ads();
                    }

                }

                document.addEventListener("DOMContentLoaded", function(event) { 
                    var head=document.getElementsByTagName('head')[0];
                    var sr=document.createElement('script');
                   // sr.async=1;
                    sr.src='https://geoip.fctables.com/geoip-'+new Date().getTime()+'-'+new Date().getTime()+Math.random()+'.js?t='+new Date().getTime()+Math.random();


                    var cc=readCookie('country_code');
                    if(cc){
                        check_ads();
                    }

                    if(!cc)
                        head.appendChild(sr);
                });
                        
                        
    </script>
    
<div id="fb-root"></div>
<script>
         
function elemIsHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}   

function mobile_menu2(obj){    
    var m=document.getElementById('menu');
    if(elemIsHidden(m)){
        m.style.display='block';
        
    }else{
        m.style.display='none';
    }
}    


    (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v2.10&appId=1007493516044195";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

</script>

<div id="main"><div class="page_top_parent"><div class="page_top" ><div class="box-width"><div class="pull-left"><div class="mobile-menu" onclick="mobile_menu2(this)"><div class="m-icon"></div></div><a href="/" title="FcTables"><img src="/images/logo_fctables2.jpg" width="179" height="38" alt="FcTables" class="logo hidden-xs" /></a><a href="/" title="FcTables"><img src="/images/fctables-logo-mobile2.jpg" width="90" height="35" alt="FcTables" class="logo visible-xs pull-left" /></a></div><div class="pull-right" ><form role="search" class="navbar-left app-search pull-left hidden-xs" action="/search/" method="POST"><input type="text" placeholder="Search..." id="search_top" class="form-control find_team" name="query" data-link="1" data-limit="3" data-type=""><button type="submit" class="fa fa-search"></button></form><div class="user-logged-menu" onclick="user_menu(this)"><img src="/images/no-player-image.jpg" class="img-circle user-avatar" alt="user avatar" /><div class="user_login">Sign In</div></div><div id="user_menu_box" class="notifications-container top-box-menu hide"><div class="title">
    User menu
</div>

<form class="form" action="/user/login/" method="POST">

        
    <input type="hidden" name="login_action" value="1" />

    <div class="text-center">
        <a href="/user/login_facebook/"><img class="login_facebook" src="/images/login_facebook.jpg" alt="login via facebook" /></a>
    </div>

    <div class="login_or"></div>

    <div class="form-group">
         <input type="text" class="form-control" placeholder="Login/Email" name="login_username" />
    </div>
    <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" name="login_password" />
    </div>

    <div class="" onclick="$(this).find('input').prop('checked', !$(this).find('input').prop('checked'))">
        <input type="checkbox" name="user_remeber" checked="checked" value="1" /> Autologin
    </div>

    <button class="btn btn-block btn-md btn-success" type="submit" name="submit" value="1"><i class="fa fa-sign-in" aria-hidden="true"></i> Sign In</button>
    <a class="btn btn-block btn-sm btn-primary" href="/user/register/" style="margin-top:20px;"><i class="fa fa-user-plus" aria-hidden="true"></i> Create new free account</a>

    <a href="/user/password_forget/">I forgot my password</a>
</form></div><div id="user_menu_login_box" class="notifications-container top-box-menu hide"><div class="title">User menu</div><div style="padding:10px 10px 0 10px;"><div class="tip-stat-box"><a href="/tipster/balance/"><div class="ic"><img src="/images/tip-wallet2.jpg" alt="cash"></div><div class="val"><div class="big-val" id="user-stack-top"><img src="/images/ajax-loader.gif" alt="cash loader" /></div></div></a></div></div><div class="notifications-list"><ul><li><a href="/profil/"><i class="fa fa-user" aria-hidden="true"></i> My profile</a></li><li><a href="/tipster/"><i class="fa fa-fire" aria-hidden="true"></i> Add new bets</a></li><li><a href="/tipster/bets/"><i class="fa fa-free-code-camp" aria-hidden="true"></i> Users bets</a></li><li><a href="/tipster/my_bets/"><i class="fa fa-list" aria-hidden="true"></i> My bets</a></li><li><a href="/tipster/balance/"><i class="fa fa-money" aria-hidden="true"></i> My balance</a></li><li><a href="/tipster/ranking/"><i class="fa fa-list-ol" aria-hidden="true"></i> Ranking</a></li><li><a href="/tipster/favorites/"><i class="fa fa-star-o" aria-hidden="true"></i> Favorites punters</a></li><li><a href="/user/user_data/"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit data</a></li><li class="line-top"><a href="/user/logout/"><i class="fa fa-sign-out" aria-hidden="true"></i> Sign out</a></li></ul></div></div><div data-toggle="tooltip" title="Settings" class="change_setting pull-left visible-xs mobile_search" onclick="mobile_search(this)"><a href="#" class="" aria-expanded="true"><i class="fa fa-search"></i></a></div><div data-toggle="tooltip" title="Settings" class="change_setting pull-left" onclick="top_menu_click(this,'#settings_box')"><div id="settings_box" class="notifications-container hide top-box-menu"><div class="title">Settings</div><div class="notifications-list"><ul><li onclick="change_language_box(this)"><div class="row"><div class="col-xs-2 i"><img id="lang-image" src="/images/blank.gif" class="flag flag-gb" /></div><div class="col-xs-10 n">Change language</div></div></li><li onclick="change_timezone_form(this);"><div class="row"><div class="col-xs-2 i"><i class="fa fa-clock-o" aria-hidden="true"></i></div><div class="col-xs-10 n">Change time zone</div></div></li><li  onclick="notification_manage(this)"><div class="row"><div class="col-xs-2 i"><i class="fa fa-bell" aria-hidden="true"></i></div><div class="col-xs-10 n">Notification settings</div></div></li><li onclick="odds_format(this)"><div class="row"><div class="col-xs-2 i"><i class="fa fa-arrows-alt" aria-hidden="true"></i></div><div class="col-xs-10 n">Odds format</div></div></li></ul></div></div><a href="#" class="dropdown-toggle waves-effect waves-light" aria-expanded="true"><i class="fa fa-cog" aria-hidden="true"></i> <i class="fa fa-caret-down"></i></a></div><div id="lang_box" class="notifications-container hide"><div class="title">Change language</div><div class="notifications-list"><ul><li><a href="https://www.fctables.com"><div class="row"><div class="col-xs-2 i"><img src="/images/blank.gif" class="flag flag-gb" alt="English" /></div><div class="col-xs-10 n">English</div></div></a></li><li><a href="https://pl.fctables.com"><div class="row"><div class="col-xs-2 i"><img src="/images/blank.gif" class="flag flag-pl" alt="Polski (Polska)" /></div><div class="col-xs-10 n">Polski (Polska)</div></div></a></li><li><a href="https://it.fctables.com"><div class="row"><div class="col-xs-2 i"><img src="/images/blank.gif" class="flag flag-it" alt="Italian (Italy)" /></div><div class="col-xs-10 n">Italian (Italy)</div></div></a></li></ul></div></div><div class="notifications pull-left" data-notification="1" onclick="top_menu_click(this,'#not_box')"><div id="not_box" class="notifications-container hide top-box-menu"><div style="padding:0 10px;"><div class="row" id="push-not-container"><div class="col-xs-8"><strong>Push Notifications</strong></div><div class="col-xs-4" onclick="push_notification.push_notification_click($(this).find('input'))"><input type="checkbox" id="push-subs-button" data-toggle="toggle" data-onstyle="success"></div></div><div class="row" id="predictions-not-container"><div class="col-xs-8"><strong>Predictions Notifications</strong></div><div class="col-xs-4" onclick="push_notification.predictions_notification_click($(this).find('input'))"><input type="checkbox" id="predictions-subs-button" data-toggle="toggle" data-onstyle="success"></div></div><button onclick="notification_manage(this)" type="button" class="btn btn-block btn-md btn-info waves-effect waves-light" style="border-radius:0;"><i class="fa fa-cog" aria-hidden="true"></i> Manage notifications</button></div><div class="title">Notifications<div id="not_count_box" class="pull-right hide"><span class="label label-xs label-default"><span></span> new</span></div></div><div class="notifications-list"><ul></ul><div class="alert alert-info text-center">There is no new notifications</div></div></div><a href="#" class="waves-effect waves-light" aria-expanded="true"><i class="fa fa-bell" ></i><i class="fa fa-caret-down"></i> <span class="badge badge-xs badge-danger hide" id="not_counter">0</span></a></div></div></div><div style="margin:0;position:relative;top: -1px" class="pull-right visible-lg visible-md"><a href="https://www.facebook.com/fctablescom/"><img width="43" height="43" src="/images/facebook-icon.png" alt="Facebook profil" /></a></div><div style="margin:0;position:relative;top: -1px" class="pull-right visible-lg visible-md"><a href="https://twitter.com/FcTables_com"><img src="/images/twitter.jpg" width="43" height="43" alt="Twitter profil" /></a></div></div></div><div class="menu" id="menu"><div class="box-width"><ul><li><a href="/"><div class="fa fa-home main-icon" aria-hidden="true"></div> Home</a></li><li ><a href="/premium_tips/"><div class="fa fa-fighter-jet main-icon" aria-hidden="true"></div> Premium tips</a><span class="badge badge-xs badge-danger hidden-xs" style="position: relative;top:-50px;left:40px;">BETA</span></li><li ><a href="/predictions/"><div class="fa fa-dot-circle-o main-icon" aria-hidden="true"></div> Free predictions</a><span class="badge badge-xs badge-danger hidden-xs" style="position: relative;top:-50px;left:40px;">Ver 1.8</span></li><li class="visible-sm visible-xs"><a href="/todays-match-predictions/"><div class="fa fa-circle-thin main-icon" aria-hidden="true"></div> Today's match predictions</a> <span class="badge badge-xs badge-danger hidden-xs" style="position: relative;top:-50px;left:40px;">New</span></li><li class="visible-sm visible-xs"><a href="https://statsdream.com"><img src="https://static.fctables.com/images/statsdream-logo.png" width="18" /> StatsDream.com</a></li><li class="has-submenu"><a href="/stats/"><div class="fa fa-line-chart main-icon" aria-hidden="true"></div> Stats</a><ul class="submenu megamenu teams_menu"><li><ul id="popular_templates_menu"><li><span><a href="/stats/">All statistics</a></span></li><li class="truncate"><a href="/todays-match-predictions/"> Today's match predictions</a>&nbsp;<span class="badge badge-xs badge-danger"><i class="glyphicon glyphicon-star"></i></span></li><li class="truncate"><a href="/ranking-tfi/">Ranking TFI (Team form index)</a></li><li class="truncate"><a href="/stats/bet-actual-profit/">Teams with highest profits</a> <span class="badge badge-xs badge-danger" ><i class="glyphicon glyphicon-star"></i></span></li><li class="truncate"><a href="/stats/h2h-series/">Streaks stats</a></li><li class="truncate"><a href="/stats/under_over_15/">Best teams Under/Over 1.5</a></li><li class="truncate"><a href="/stats/under_over_25/">Best teams Under/Over 2.5</a></li><li class="truncate"><a href="/stats/under_over_35/">Best teams Under/Over 3.5</a></li><li class="truncate"><a href="/stats/leagues-over-25/">Leagues with over 2.5 goals</a></li><li class="truncate"><a href="/stats/leagues-under-25/">Leagues with under 2.5 goals</a></li><li class="truncate"><a href="/stats/leagues-over-35/">Leagues with over 3.5 goals</a></li><li class="truncate"><a href="/stats/leagues-under-35/">Leagues with under 3.5 goals</a></li><li class="truncate"><a href="/stats/both_teams_to_score/">Best teams Both teams to score</a></li><li class="truncate"><a href="/stats/asian_handicap/">Best teams for asian handicap</a></li><li class="truncate"><a href="/stats/corners/">Best teams corners</a></li><li class="truncate"><a href="/stats/no_lost/">Teams series without defeit</a></li><li class="truncate"><a href="/stats/no_win/">Teams series without win</a></li><li class="truncate"><a href="/stats/ht_ft/">Best teams HT/FT Half-time/Full-time</a></li></ul></li></ul></li><li class="has-submenu"><a href="/tipster/"><div class="fa fa-fire main-icon" aria-hidden="true"></div> Tipsters</a><ul class="submenu megamenu tipster-top-menu"><li><ul><li><a href="/tipster/"><i class="fa fa-fire" aria-hidden="true"></i> Add new bets</a></li><li><a href="/tipster/bets/"><i class="fa fa-free-code-camp" aria-hidden="true"></i> Users bets</a></li><li><a href="/tipster/my_bets/"><i class="fa fa-list" aria-hidden="true"></i> My bets</a></li><li><a href="/tipster/balance/"><i class="fa fa-money" aria-hidden="true"></i> My balance</a></li><li><a href="/tipster/ranking/"><i class="fa fa-list-ol" aria-hidden="true"></i> Ranking</a></li><li><a href="/tipster/top_tips/"><i class="fa fa-users" aria-hidden="true"></i> Users tips</a></li><li><a href="/tipster/favorites/"><i class="fa fa-star-o" aria-hidden="true"></i> Favorites punters</a></li><li><a href="https://www.fctables.com/blog/about-tipster-contest/"><i class="fa fa-info-circle" aria-hidden="true"></i> About tipster and rules</a></li></ul></li></ul></li><li class="has-submenu menu-livescore"><a href="/livescore/"><div class="fa fa-clock-o main-icon"></div> Livescore & H2H</a><ul class="submenu megamenu small"><li><ul><li><span class="upper">The most important matches</span></li><li class="row"><a href="/risultati-live/usa-mexico-g1923430/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627866000">01:00</span><img src="https://static.fctables.com/upload/images/18x18/8g/8grde57b4b671c8f68/concacaf-gold-cup-1.png" width="18" height="18" alt="" /> CON</span><span class="col-xs-4 text-right truncate">USA <img src="https://static.fctables.com/upload/images/18x18/su/suqv157b477b06606e/usa.png" width="18" /></span><span class="col-xs-1 text-center score">1:0</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/i9/i91g657b477aeb5bcb/mexico.png" /> Mexico</span></a></li><li class="row"><a href="/risultati-live/cd-jaguares-atletico-huila-g1960919/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627866600">01:10</span> <div class="flag flag-co"></div> CO 1</span><span class="col-xs-4 text-right truncate">CD Jaguares <img src="https://static.fctables.com/upload/images/18x18/8j/8jrn157b477efbc3bb/cd-jaguares.png" width="18" /></span><span class="col-xs-1 text-center score">2:0</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/23/23ou657b477bd2fb0a/atletico-huila.png" /> Atletico Huila</span></a></li><li class="row"><a href="/risultati-live/henan-jianye-chongqing-lifan-g1914027/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627898400">10:00</span> <div class="flag flag-cn"></div> CN 1</span><span class="col-xs-4 text-right truncate popular">Henan Jianye <img src="https://static.fctables.com/upload/images/18x18/jf/jfhxv57b0be8c89ade/henan-jianye.jpg" width="18" /></span><span class="col-xs-1 text-center score">1:0</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/l2/l2uhv57b477c40c650/chongqing-lifan.png" /> Chongqing Lifan</span></a></li><li class="row"><a href="/risultati-live/shenzhen-fc-guangzhou-rf-fc-g1914029/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627905600">12:00</span> <div class="flag flag-cn"></div> CN 1</span><span class="col-xs-4 text-right truncate popular">Shenzhen FC <img src="https://static.fctables.com/upload/images/18x18/rr/rra1y57b477c31a991/shenzhen-fc.png" width="18" /></span><span class="col-xs-1 text-center score">0:1</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/sx/sxmkj57b477c415039/guangzhou-r&f-fc.png" /> Guangzhou R&F F.C.</span></a></li><li class="row"><a href="/risultati-live/fc-inter-honka-g1889613/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627918200">15:30</span> <div class="flag flag-fi"></div> FI 1</span><span class="col-xs-4 text-right truncate">FC Inter <img src="https://static.fctables.com/upload/images/18x18/ju/jubg257b477b2ba72f/fc-inter.png" width="18" /></span><span class="col-xs-1 text-center score">2:2</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/ng/ngdq157b477b29f31c/honka.png" /> Honka</span></a></li><li class="row"><a href="/risultati-live/sepsi-osk-cs-mioveni-g1942824/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627918200">15:30</span> <div class="flag flag-ro"></div> RO 1</span><span class="col-xs-4 text-right truncate">Sepsi OSK <img src="https://static.fctables.com/upload/images/18x18/b1/b14wz5d52e244bcb46/sepsi-osk.png" width="18" /></span><span class="col-xs-1 text-center score">1:2</span><span class="col-xs-4 truncate"><img width="18" height="18" src="/images/no-logo.gif" /> CS Mioveni</span></a></li><li class="row"><a href="/risultati-live/dinamo-brest-neman-grodno-g1898477/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627919400">15:50</span> <div class="flag flag-by"></div> BY 1</span><span class="col-xs-4 text-right truncate popular">Dinamo Brest <img src="https://static.fctables.com/upload/images/18x18/zf/zfhoq57b477bf82b98/dinamo-brest.png" width="18" /></span><span class="col-xs-1 text-center score">1:3</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/wq/wqrpz57b477bf4fa9a/neman-grodno.png" /> Neman Grodno</span></a></li><li class="row"><a href="/risultati-live/aik-halmstads-bk-g1883654/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627923600">17:00</span> <div class="flag flag-se"></div> SE 1</span><span class="col-xs-4 text-right truncate">AIK <img src="https://static.fctables.com/upload/images/18x18/q2/q26q657b477fec2ea9/aik.png" width="18" /></span><span class="col-xs-1 text-center score">1:0</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/hm/hm9ye57b477b2349b1/halmstads-bk.png" /> Halmstads BK</span></a></li><li class="row"><a href="/risultati-live/sirius-oerebro-g1883659/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627923600">17:00</span> <div class="flag flag-se"></div> SE 1</span><span class="col-xs-4 text-right truncate">Sirius <img src="https://static.fctables.com/upload/images/18x18/ch/ch26057ae15ec02bad/ik-sirius-fk.gif" width="18" /></span><span class="col-xs-1 text-center score">1:2</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/zt/ztmeq57b477b21f58c/oerebro.png" /> Oerebro</span></a></li><li class="row"><a href="/risultati-live/gif-sundsvall-ik-brage-g1883901/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627923600">17:00</span> <div class="flag flag-se"></div> SE 2</span><span class="col-xs-4 text-right truncate">GIF Sundsvall <img src="https://static.fctables.com/upload/images/18x18/pf/pfo8f57b109a9d8526/gif-sundsvall.jpg" width="18" /></span><span class="col-xs-1 text-center score">3:3</span><span class="col-xs-4 truncate"><img width="18" height="18" src="/images/no-logo.gif" /> IK Brage</span></a></li><li class="row"><a href="/risultati-live/ifk-gothenburg-ifk-norrkoeping-g1883651/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627923600">17:00</span> <div class="flag flag-se"></div> SE 1</span><span class="col-xs-4 text-right truncate">IFK Gothenburg <img src="https://static.fctables.com/upload/images/18x18/18/18qn257b477b21743b/ifk-gothenburg.png" width="18" /></span><span class="col-xs-1 text-center score">1:2</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/0d/0djek57b477b1cf1e1/ifk-norrkoeping.png" /> IFK Norrkoeping</span></a></li><li class="row"><a href="/risultati-live/dinamo-bucuresti-fc-academica-clinceni-g1942822/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627929000">18:30</span> <div class="flag flag-ro"></div> RO 1</span><span class="col-xs-4 text-right truncate">Dinamo Bucuresti <img src="https://static.fctables.com/upload/images/18x18/pt/pttdl57b477bd969d5/dinamo-bucuresti.png" width="18" /></span><span class="col-xs-1 text-center score">3:1</span><span class="col-xs-4 truncate"><img width="18" height="18" src="/images/no-logo.gif" /> FC Academica Clinceni</span></a></li><li class="row"><a href="/risultati-live/auxerre-grenoble-g1942109/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627929900">18:45</span> <div class="flag flag-fr"></div> FR 2</span><span class="col-xs-4 text-right truncate">Auxerre <img src="https://static.fctables.com/upload/images/18x18/f6/f629e57b477c91cc92/auxerre.png" width="18" /></span><span class="col-xs-1 text-center score">3:0</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/u4/u4rpu57b477d01dcfa/grenoble.png" /> Grenoble</span></a></li><li class="row"><a href="/risultati-live/fortaleza-fc-universitario-popayan-g1963123/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627930800">19:00</span> <div class="flag flag-co"></div> CO 2</span><span class="col-xs-4 text-right truncate">Fortaleza FC <img src="https://static.fctables.com/upload/images/18x18/7l/7l3jr57b477bd85f28/fortaleza-fc.png" width="18" /></span><span class="col-xs-1 text-center score">3:0</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/fr/fryp657b121a75c7e6/universitario-de-popayan.jpg" /> Universitario Popayan</span></a></li><li class="row"><a href="/risultati-live/argentinos-juniors-central-cordoba-de-santiago-g1943615/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627933500">19:45</span> <div class="flag flag-ar"></div> AR 1</span><span class="col-xs-4 text-right truncate popular">Argentinos Juniors <img src="https://static.fctables.com/upload/images/18x18/nw/nwc6a57b477b3b850e/argentinos-juniors.png" width="18" /></span><span class="col-xs-1 text-center score">1:1</span><span class="col-xs-4 truncate"><img width="18" height="18" src="/images/no-logo.gif" /> Central Cordoba de Santiago</span></a></li><li class="row live"><a href="/risultati-live/rosario-central-aldosivi-g1943610/"><span class="col-xs-3"><span style="padding:0;" class="text-left date_unix" data-unixtime="1627941600">22:00</span> <div class="flag flag-ar"></div> AR 1</span><span class="col-xs-4 text-right truncate popular">Rosario Central <img src="https://static.fctables.com/upload/images/18x18/rl/rllre57b477dc88338/rosario-central.png" width="18" /></span><span class="col-xs-1 text-center score">0:0</span><span class="col-xs-4 truncate"><img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/ea/eajdn57b477dc92d82/aldosivi.png" /> Aldosivi</span></a></li></ul></li></ul></li><li class="has-submenu"><a href="/tables/"><div class="fa fa-table main-icon" aria-hidden="true"></div> Tables</a><ul class="submenu megamenu teams_menu"><li><ul id="popular_templates_menu"><li><span>Popular leagues</span></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/zz/zzs12578de0617d997/premier-league-logo.png" width="20" height="20" alt="Premier League" /> <a href="/england/premier-league/" title="Table Premier League">Table Premier League</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/tk/tke55578e1f7b6af31/laliga-v-1200x1200.png" width="20" height="20" alt="La Liga" /> <a href="/spain/liga-bbva/" title="Table La Liga">Table La Liga</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/ae/ae4iu57b4bdc36378d/germany-1.png" width="20" height="20" alt="1. Bundesliga" /> <a href="/germany/1-bundesliga/" title="Table 1. Bundesliga">Table 1. Bundesliga</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/cu/cuj7g578ca22bc0cf1/italian-serie-a.jpg" width="20" height="20" alt="Serie A" /> <a href="/italy/serie-a/" title="Table Serie A">Table Serie A</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/p7/p7tnu57b4bdb3bcb7b/france-1.png" width="20" height="20" alt="Ligue 1" /> <a href="/france/ligue-1/" title="Table Ligue 1">Table Ligue 1</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/cm/cm4hx57b4c06cc5d68/russia-1.png" width="20" height="20" alt="Premier League" /> <a href="/russia/premier-league/" title="Table Premier League">Table Premier League</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/36/36naz578ca2f94314e/usa-major-league-soccer.gif" width="20" height="20" alt="Major League Soccer" /> <a href="/usa/major-league-soccer/" title="Table Major League Soccer">Table Major League Soccer</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/2t/2t8sw57b4a5e404b63/netherlands-1.png" width="20" height="20" alt="Eredivisie" /> <a href="/netherlands/eredivisie/" title="Table Eredivisie">Table Eredivisie</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/p9/p98c257b4c061d8e76/portugal-1.png" width="20" height="20" alt="Liga ZON Sagres" /> <a href="/portugal/liga-zon-sagres/" title="Table Liga ZON Sagres">Table Liga ZON Sagres</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/jv/jvyed592c7a88d60e7/belarus-league-logo.png" width="20" height="20" alt="Premier Division" /> <a href="/belarus/premier-division/" title="Table Premier Division">Table Premier Division</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/l0/l0kgf57b4a5f9b3994/turkey-1.png" width="20" height="20" alt="Super Lig" /> <a href="/turkey/super-lig/" title="Table Super Lig">Table Super Lig</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/v9/v9anv57b4bce078a8a/argentina-1.png" width="20" height="20" alt="Torneo Inicial" /> <a href="/argentina/torneo-inicial/" title="Table Torneo Inicial">Table Torneo Inicial</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/jt/jtkr857b4bd0ebaeed/brazil-1.png" width="20" height="20" alt="Serie A" /> <a href="/brazil/serie-a/" title="Table Serie A">Table Serie A</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/kc/kcs1257b4bd3f59828/china-1.png" width="20" height="20" alt="Super League" /> <a href="/china/super-league/" title="Table Super League">Table Super League</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/pf/pffk857b4a5ed371f6/poland-1.png" width="20" height="20" alt="Ekstraklasa" /> <a href="/poland/ekstraklasa/" title="Table Ekstraklasa">Table Ekstraklasa</a></li><li class="truncate"><img src="https://static.fctables.com/upload/images/20x20/1r/1rkfa578ddf198d6a4/24o11th.png" width="20" height="20" alt="Championship" /> <a href="/england/championship/" title="Table Championship">Table Championship</a></li></ul></li><li class="your_templates hide"><ul><li><span class="upper">Your leagues</span></li></ul></li></ul></li><li class="has-submenu menu_h2h"><a href="/h2h/"><div class="fa fa-clone main-icon" aria-hidden="true"></div> H2H</a><ul class="submenu megamenu"><li><ul><li><span class="upper">Today's matches</span></li><li class="row"><a href="/h2h/aldosivi/rosario-central/"><span class="col-xs-1 text-left date_unix popular" data-unixtime="1627941600">22:00</span><span class="col-xs-4 text-right truncate">Rosario Central</span><span class="col-xs-3 text-center"><img src="https://static.fctables.com/upload/images/18x18/rl/rllre57b477dc88338/rosario-central.png" width="18" height="18" /> <img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/ea/eajdn57b477dc92d82/aldosivi.png" /> </span><span class="col-xs-4 truncate">Aldosivi</span></a></li></ul></li><li><ul><li><span class="upper">Tomorrow's matches</span></li><li class="row"><a href="/h2h/deportivo-pasto/deportivo-pereira/"><span class="col-xs-1 text-left date_unix" data-unixtime="1627952400">01:00</span><span class="col-xs-4 text-right truncate">Deportivo Pasto</span><span class="col-xs-3 text-center"><img src="https://static.fctables.com/upload/images/18x18/h1/h1lpn57b477bd7d9a1/deportivo-pasto.png" width="18" height="18" /> <img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/91/91r4z57b1215f53f8e/deportivo-pereira.gif" /> </span><span class="col-xs-4 truncate">Deportivo Pereira</span></a></li><li class="row"><a href="/h2h/cerro-porteno/fluminense/"><span class="col-xs-1 text-left date_unix" data-unixtime="1628028900">22:15</span><span class="col-xs-4 text-right truncate">Fluminense</span><span class="col-xs-3 text-center"><img src="https://static.fctables.com/upload/images/18x18/no/nov3a57b477ae6cbd7/fluminense.png" width="18" height="18" /> <img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/hp/hpika57af4d898ff57/cerro-porteno.gif" /> </span><span class="col-xs-4 truncate">Cerro Porteno</span></a></li><li class="row"><a href="/h2h/atletico-nacional/santa-fe/"><span class="col-xs-1 text-left date_unix" data-unixtime="1628038800">01:00</span><span class="col-xs-4 text-right truncate">Santa Fe</span><span class="col-xs-3 text-center"><img src="https://static.fctables.com/upload/images/18x18/zk/zkjr357b477bd35737/santa-fe.png" width="18" height="18" /> <img width="18" height="18" src="https://static.fctables.com/upload/images/18x18/v0/v0tgl5900567ae5482/atletico-nacional.png" /> </span><span class="col-xs-4 truncate">Atletico Nacional</span></a></li></ul></li></ul></li><li class="has-submenu teams-menu"><a href="/teams/"><div class="fa fa-folder main-icon"></div> teams</a><ul class="submenu megamenu teams_menu"><li><ul><li><span class="upper">Popular teams</span></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/7y/7yzg857b477b364bd2/manchester-united.png" width="20" height="20" alt="Manchester United" /> <a href="/teams/manchester-united-189577/">Manchester United stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/v2/v2m5r57b477c7443ee/arsenal.png" width="20" height="20" alt="Arsenal" /> <a href="/teams/arsenal-180231/">Arsenal stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/zt/ztba857b477c75027d/real-madrid.png" width="20" height="20" alt="Real Madrid" /> <a href="/teams/real-madrid-192583/">Real Madrid stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/fq/fqmny57b477c75ba65/chelsea.png" width="20" height="20" alt="Chelsea" /> <a href="/teams/chelsea-182666/">Chelsea stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/ki/kimpd57b477c767ca2/barcelona.png" width="20" height="20" alt="Barcelona" /> <a href="/teams/barcelona-181013/">Barcelona stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/c6/c6a3f57b477c7297f0/liverpool.png" width="20" height="20" alt="Liverpool" /> <a href="/teams/liverpool-189071/">Liverpool stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/yv/yvyxj57b477ac395ae/bayern-munich.png" width="20" height="20" alt="Bayern Munich" /> <a href="/teams/bayern-munich-181104/">Bayern Munich stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/ti/tiq2j57b477c873db0/manchester-city.png" width="20" height="20" alt="Manchester City" /> <a href="/teams/manchester-city-189570/">Manchester City stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/u8/u8gid57b477b4bd706/ac-milan.png" width="20" height="20" alt="AC Milan" /> <a href="/teams/ac-milan-179125/">AC Milan stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/ze/zezox59f71449853bf/juventus-logo-new.png" width="20" height="20" alt="Juventus" /> <a href="/teams/juventus-187903/">Juventus stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/zg/zgdfx57b477ac49647/atletico-madrid.png" width="20" height="20" alt="Atletico Madrid" /> <a href="/teams/atletico-madrid-180603/">Atletico Madrid stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/7c/7clgr57b477b677537/paris-saint-germain.png" width="20" height="20" alt="PSG" /> <a href="/teams/paris-saint-germain-191585/">PSG stats</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/0l/0l2cb57b477c86244d/inter.png" width="20" height="20" alt="Inter" /> <a href="/teams/inter-187444/">Inter stats</a></li></ul></li><li class="your_teams hide"><ul><li><span class="upper">Your teams</span></li></ul></li></ul></li><li class="has-submenu menu-players"><a href="/players/"><div class="fa fa-users main-icon"></div> Players</a><ul class="submenu megamenu teams_menu"><li><ul><li><span class="upper">Most popular players</span></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/na/na34p58c995bc48c0a/cristiano-ronaldo.png" width="20" height="20" alt="Cristiano Ronaldo" /> <a href="/players/cristiano_ronaldo-222119/">Cristiano Ronaldo</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/e0/e03m358c995c05bae7/l-messi.png" width="20" height="20" alt="Lionel Messi" /> <a href="/players/lionel_messi-271592/">Lionel Messi</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/ny/nyzpd58c995c06ef78/neymar.png" width="20" height="20" alt="Neymar" /> <a href="/players/neymar-291274/">Neymar</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/v6/v6vbr58a234c88ad72/mesut-oezil.png" width="20" height="20" alt="Mesut Oezil" /> <a href="/players/mesut_oezil-283992/">Mesut Oezil</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/cn/cnxe458c995bc73b67/g-bale.png" width="20" height="20" alt="Gareth Bale" /> <a href="/players/gareth_bale-240689/">Gareth Bale</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/zf/zfmbx58a234d21037f/wayne-rooney.png" width="20" height="20" alt="Wayne Rooney" /> <a href="/players/wayne_rooney-327021/">Wayne Rooney</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/9z/9z4up58c995c04ab1d/l-suarez.png" width="20" height="20" alt="Luis Suarez" /> <a href="/players/luis_suarez-273528/">Luis Suarez</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/pu/pu89l58a234d061016/zlatan-ibrahimovic.png" width="20" height="20" alt="Zlatan Ibrahimovic" /> <a href="/players/zlatan_ibrahimovic-330572/">Zlatan Ibrahimovic</a></li><li class="text-left"><img src="https://static.fctables.com/upload/images/20x20/js/js29m58a2350d283cb/sergio-aguero.png" width="20" height="20" alt="Sergio Aguero" /> <a href="/players/sergio-aguero-312350/">Sergio Aguero</a></li></ul></li></ul></li><li class="has-submenu"><a href="/rankings/"><div class="fa fa-list-ol main-icon"></div> Rankings</a><ul class="submenu megamenu small"><li><ul><li><span class="upper">Best players and teams</span></li><li><a href="/fifa-rankings/" title="Fifa rankings LIVE">Fifa rankings LIVE</a></li><li><a href="/players/top-scorers-player-world/">Top scorers players</a></li><li><a href="/players/top-assists-world/">Players with the most assists</a></li><li><a href="/players/top-cards-world/">Most brutal players</a></li><li><a href="/players/top-goalkeepers-world/">Best goalkeepers</a></li><li><a href="/top_football_players/">Most valuable players in football</a></li></ul></li></ul></li><li class="has-submenu"><a href="/fixtures/"><i class="fa fa-calendar main-icon" aria-hidden="true"></i> Fixtures</a></li><li class="menu-webmaster"><a href="https://www.fctables.com/widgets/"><div class="fa fa-share-alt-square main-icon"></div> Webmaster</a></li><li class="has-submenu visible-xs"><a href="/contact/"><div class="fa fa-envelope-o main-icon"></div>Contact</a><br /></li><li class="has-submenu hidden-xs"><a href="#"><div class="fa fa-arrow-down main-icon"></div> Other</a><ul class="submenu"><li><a href="/blog/"><div class="fa fa-newspaper-o main-icon" aria-hidden="true"></div> Blog</a></li><li><a href="/contact/">Contact</a></li><li><a href="/links/">Links</a></li><li><a href="/blog/about-us/">About Us</a></li><li><a href="http://www.mfutebol.com" target="_blank" title="Placar ao vivo">Placar ao vivo</a></li></ul></li></ul></div><div class="clearfix"></div></div><div class="main-content"><div class="clearfix visible-xs"></div> <div class="box-width"><div class="lang-info-add"></div><h1>Fctables - Soccer statistics</h1><div style="margin: 10px;text-align:left;" class="hidden-xs hidden-sm"><div>Advertisements</div>
                        <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-7973862450098125"
                        data-ad-slot="1794601628"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                   <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                   </script>
                       
                        </div><div style="margin: 10px;text-align:left;" class="hidden-md hidden-lg"><div>Advertisements</div>
                        <ins class="adsbygoogle"
                        style="display:block"
                        data-ad-client="ca-pub-7973862450098125"
                        data-ad-slot="8084677806"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
                   <script>
                        (adsbygoogle = window.adsbygoogle || []).push({});
                   </script>
                        </div>   



                    
<h2>Popular matches</h2>
<div class="home-games-container-shadow"></div>
<div class="home-games-container">
   
    <div class="home-games-content">
<div class="home-game">
<div class="game-box-container">  

<div class="game-box-new status_not_started">
    <div class="notifi">
        <button style="margin-top:10px;" type="button" class="btn btn-md btn-pink btn-warning btn-rounded waves-effect waves-light bell_game_1960913" onclick="saveFavorite('game', 1960913, this)"><div class="fa fa-bell"></div></button>
    </div>
    <div class="hgleague">
        <img src="/images/blank.gif" class="flag flag-co" /><a href="/colombia/liga-postobon/">Liga Postobon</a>: Round 3
    </div>
    <div class="status-box" style="height:60px;">
        <span>Not started</span>
        <span class="min"><strong></strong><blink class="blink-min">'</blink></span>
    </div>
       
        <div class="away" ><a title="Deportivo Pereira" href="/teams/deportivo-pereira-183535/">Deportivo Pereira</a></div>
        <div class="score" onclick="window.location='/game/1960913/'">
            <div class="result">
                <div class="h truncate"><img src="https://static.fctables.com/upload/h1/h1lpn57b477bd7d9a1/deportivo-pasto.png" alt="Deportivo Pasto logo" /><strong>0</strong></div>
                <div class="a truncate"><strong>0</strong><img src="https://static.fctables.com/upload/91/91r4z57b1215f53f8e/deportivo-pereira.gif" alt="Deportivo Pereira logo" /></div>
            </div>     
            <div class="clearfix"></div>
            <div class="penalty hide">
                <div class="penalty-score">-</div>
                <p class="text-muted">penalties</p>
            </div>
            <time class="game_date date_unix" data-hour="1" data-unixtime="1627952400">tomorrow 01:00</time>
        </div>
        <div class="home"><a href="/teams/deportivo-pasto-183534/" title="Deportivo Pasto">Deportivo Pasto</a></div>
  
   <div class="stats">
    <label>Form:</label>
    <div class="row">
        <div class="col-xs-6">
            <div data-html="true" data-id="1960909" onclick="form_game(this)" class="label label-xs label-warning" data-toggle="tooltip" data-unixtime="1627434300" title="28 jul La Equidad <strong>0-0</strong> Deportivo Pasto<div onclick='game(1960909)' class='go'></div>">D</div>
<div data-html="true" data-id="1960898" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1626656400" title="19 jul Millonarios <strong>3-1</strong> Deportivo Pasto<div onclick='game(1960898)' class='go'></div>">L</div>
<div data-html="true" data-id="1881428" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1618777800" title="18 apr Deportivo Pereira <strong>4-2</strong> Deportivo Pasto<div onclick='game(1881428)' class='go'></div>">L</div>
<div data-html="true" data-id="1881334" onclick="form_game(this)" class="label label-xs label-warning" data-toggle="tooltip" data-unixtime="1618533600" title="16 apr Bucaramanga <strong>1-1</strong> Deportivo Pasto<div onclick='game(1881334)' class='go'></div>">D</div>
<div data-html="true" data-id="1881423" onclick="form_game(this)" class="label label-xs label-warning" data-toggle="tooltip" data-unixtime="1618180800" title="11 apr Atletico Junior <strong>0-0</strong> Deportivo Pasto<div onclick='game(1881423)' class='go'></div>">D</div>
        </div>
        <div class="col-xs-6">
            <div data-html="true" data-id="1960916" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1627347900" title="27 jul Alianza Petrolera <strong>2-0</strong> Deportivo Pereira<div onclick='game(1960916)' class='go'></div>">L</div>
<div data-html="true" data-id="1960897" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1626728400" title="19 jul Tolima <strong>1-0</strong> Deportivo Pereira<div onclick='game(1960897)' class='go'></div>">L</div>
<div data-html="true" data-id="1881428" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1618777800" title="18 apr Deportivo Pasto <strong>2-4</strong> Deportivo Pereira<div onclick='game(1881428)' class='go'></div>">W</div>
<div data-html="true" data-id="1881424" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1618173000" title="11 apr Envigado <strong>0-1</strong> Deportivo Pereira<div onclick='game(1881424)' class='go'></div>">W</div>
<div data-html="true" data-id="1881344" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1617750000" title="06 apr Independiente Medellin <strong>0-1</strong> Deportivo Pereira<div onclick='game(1881344)' class='go'></div>">W</div>
        </div>
    </div>
    
    <label>Propability:</label>
    <div class="progress">
        <div class="progress-bar progress-bar-success" style="width: 47%;">
          <span>1: 47%</span>
        </div>
        <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 29%;">
          <span>X: 29%</span>
        </div>
        <div class="progress-bar progress-bar-danger" style="width: 24%;">
          <span>2: 24%</span>
        </div>
         <div class="clearfix"></div>
    </div>
    
       </div>
    
</div>
    
   
    <div class="links">
       <div class="links-col c100">
           <a class="btn btn-lg btn-primary btn-block" href="/h2h/deportivo-pasto/deportivo-pereira/"><u class="fa fa-clone" aria-hidden="true" ></u> H2H</a>
            
       </div>
        <div class="links-col">
            <a class="btn btn-lg btn-primary btn-block" href="/colombia/liga-postobon/"><u class="fa fa-table" aria-hidden="true" ></u> League</a>
        </div>
        <div class="links-col">
            <a class="btn btn-lg btn-primary btn-block" href="/livescore/deportivo-pasto-deportivo-pereira-g1960913/"><u class="fa fa-futbol-o" aria-hidden="true" ></u> Live</a>
        </div>
        <div class="clearfix"></div>
    </div>
</div>    

</div>
<div class="home-game">
<div class="game-box-container">  

<div class="game-box-new status_not_started">
    <div class="notifi">
        <button style="margin-top:10px;" type="button" class="btn btn-md btn-pink btn-warning btn-rounded waves-effect waves-light bell_game_1924946" onclick="saveFavorite('game', 1924946, this)"><div class="fa fa-bell"></div></button>
    </div>
    <div class="hgleague">
         <a href="/copa-libertadores/">Copa Libertadores</a>: 1/8
    </div>
    <div class="status-box" style="height:60px;">
        <span>Not started</span>
        <span class="min"><strong></strong><blink class="blink-min">'</blink></span>
    </div>
       
        <div class="away" ><a title="Cerro Porteno" href="/teams/cerro-porteno-182531/">Cerro Porteno</a></div>
        <div class="score" onclick="window.location='/game/1924946/'">
            <div class="result">
                <div class="h truncate"><img src="https://static.fctables.com/upload/no/nov3a57b477ae6cbd7/fluminense.png" alt="Fluminense logo" /><strong>0</strong></div>
                <div class="a truncate"><strong>0</strong><img src="https://static.fctables.com/upload/hp/hpika57af4d898ff57/cerro-porteno.gif" alt="Cerro Porteno logo" /></div>
            </div>     
            <div class="clearfix"></div>
            <div class="penalty hide">
                <div class="penalty-score">-</div>
                <p class="text-muted">penalties</p>
            </div>
            <time class="game_date date_unix" data-hour="1" data-unixtime="1628028900">tomorrow 22:15</time>
        </div>
        <div class="home"><a href="/teams/fluminense-185683/" title="Fluminense">Fluminense</a></div>
  
   <div class="stats">
    <label>Form:</label>
    <div class="row">
        <div class="col-xs-6">
            <div data-html="true" data-id="1924945" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1626214500" title="13 jul Cerro Porteno <strong>0-2</strong> Fluminense<div onclick='game(1924945)' class='go'></div>">W</div>
<div data-html="true" data-id="1914274" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1621980900" title="25 may River Plate <strong>1-3</strong> Fluminense<div onclick='game(1914274)' class='go'></div>">W</div>
<div data-html="true" data-id="1915883" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1621384200" title="19 may Atletico Junior <strong>2-1</strong> Fluminense<div onclick='game(1915883)' class='go'></div>">L</div>
<div data-html="true" data-id="1914276" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1620864000" title="13 may Santa Fe <strong>1-2</strong> Fluminense<div onclick='game(1914276)' class='go'></div>">W</div>
<div data-html="true" data-id="1915857" onclick="form_game(this)" class="label label-xs label-warning" data-toggle="tooltip" data-unixtime="1620345600" title="07 may Atletico Junior <strong>1-1</strong> Fluminense<div onclick='game(1915857)' class='go'></div>">D</div>
        </div>
        <div class="col-xs-6">
            <div data-html="true" data-id="1924945" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1626214500" title="13 jul Fluminense <strong>2-0</strong> Cerro Porteno<div onclick='game(1924945)' class='go'></div>">L</div>
<div data-html="true" data-id="1914304" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1621989000" title="26 may America de Cali <strong>0-1</strong> Cerro Porteno<div onclick='game(1914304)' class='go'></div>">W</div>
<div data-html="true" data-id="1914302" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1621468800" title="20 may Atletico MG <strong>1-0</strong> Cerro Porteno<div onclick='game(1914302)' class='go'></div>">L</div>
<div data-html="true" data-id="1914301" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1620864000" title="13 may Deportivo La Guaira <strong>0-1</strong> Cerro Porteno<div onclick='game(1914301)' class='go'></div>">W</div>
<div data-html="true" data-id="1914290" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1620166500" title="04 may Atletico MG <strong>4-0</strong> Cerro Porteno<div onclick='game(1914290)' class='go'></div>">L</div>
        </div>
    </div>
    
    <label>Propability:</label>
    <div class="progress">
        <div class="progress-bar progress-bar-success" style="width: 54%;">
          <span>1: 54%</span>
        </div>
        <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 27%;">
          <span>X: 27%</span>
        </div>
        <div class="progress-bar progress-bar-danger" style="width: 19%;">
          <span>2: 19%</span>
        </div>
         <div class="clearfix"></div>
    </div>
    
       </div>
    
</div>
    
   
    <div class="links">
       <div class="links-col c100">
           <a class="btn btn-lg btn-primary btn-block" href="/h2h/cerro-porteno/fluminense/"><u class="fa fa-clone" aria-hidden="true" ></u> H2H</a>
            
       </div>
        <div class="links-col">
            <a class="btn btn-lg btn-primary btn-block" href="/copa-libertadores/"><u class="fa fa-table" aria-hidden="true" ></u> League</a>
        </div>
        <div class="links-col">
            <a class="btn btn-lg btn-primary btn-block" href="/livescore/fluminense-cerro-porteno-g1924946/"><u class="fa fa-futbol-o" aria-hidden="true" ></u> Live</a>
        </div>
        <div class="clearfix"></div>
    </div>
</div>    

</div>
<div class="home-game">
<div class="game-box-container">  

<div class="game-box-new status_not_started">
    <div class="notifi">
        <button style="margin-top:10px;" type="button" class="btn btn-md btn-pink btn-warning btn-rounded waves-effect waves-light bell_game_1960914" onclick="saveFavorite('game', 1960914, this)"><div class="fa fa-bell"></div></button>
    </div>
    <div class="hgleague">
        <img src="/images/blank.gif" class="flag flag-co" /><a href="/colombia/liga-postobon/">Liga Postobon</a>: Round 3
    </div>
    <div class="status-box" style="height:60px;">
        <span>Not started</span>
        <span class="min"><strong></strong><blink class="blink-min">'</blink></span>
    </div>
       
        <div class="away" ><a title="Atletico Nacional" href="/teams/atletico-nacional-180620/">Atletico Nacional</a></div>
        <div class="score" onclick="window.location='/game/1960914/'">
            <div class="result">
                <div class="h truncate"><img src="https://static.fctables.com/upload/zk/zkjr357b477bd35737/santa-fe.png" alt="Santa Fe logo" /><strong>0</strong></div>
                <div class="a truncate"><strong>0</strong><img src="https://static.fctables.com/upload/v0/v0tgl5900567ae5482/atletico-nacional.png" alt="Atletico Nacional logo" /></div>
            </div>     
            <div class="clearfix"></div>
            <div class="penalty hide">
                <div class="penalty-score">-</div>
                <p class="text-muted">penalties</p>
            </div>
            <time class="game_date date_unix" data-hour="1" data-unixtime="1628038800">4 august 2021</time>
        </div>
        <div class="home"><a href="/teams/santa-fe-193350/" title="Santa Fe">Santa Fe</a></div>
  
   <div class="stats">
    <label>Form:</label>
    <div class="row">
        <div class="col-xs-6">
            <div data-html="true" data-id="1960915" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1627245000" title="25 jul Bucaramanga <strong>4-3</strong> Santa Fe<div onclick='game(1960915)' class='go'></div>">L</div>
<div data-html="true" data-id="1960901" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1626570000" title="18 jul Deportivo Cali <strong>2-1</strong> Santa Fe<div onclick='game(1960901)' class='go'></div>">L</div>
<div data-html="true" data-id="1916566" onclick="form_game(this)" class="label label-xs label-warning" data-toggle="tooltip" data-unixtime="1619978400" title="02 may Atletico Junior <strong>0-0</strong> Santa Fe<div onclick='game(1916566)' class='go'></div>">D</div>
<div data-html="true" data-id="1916565" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1619382600" title="25 apr Atletico Junior <strong>3-1</strong> Santa Fe<div onclick='game(1916565)' class='go'></div>">L</div>
<div data-html="true" data-id="1881429" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1618777800" title="18 apr La Equidad <strong>1-2</strong> Santa Fe<div onclick='game(1881429)' class='go'></div>">W</div>
        </div>
        <div class="col-xs-6">
            <div data-html="true" data-id="1960906" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1627174800" title="25 jul Tolima <strong>0-1</strong> Atletico Nacional<div onclick='game(1960906)' class='go'></div>">W</div>
<div data-html="true" data-id="1960900" onclick="form_game(this)" class="label label-xs label-warning" data-toggle="tooltip" data-unixtime="1626640200" title="18 jul Envigado <strong>2-2</strong> Atletico Nacional<div onclick='game(1960900)' class='go'></div>">D</div>
<div data-html="true" data-id="1916568" onclick="form_game(this)" class="label label-xs label-warning" data-toggle="tooltip" data-unixtime="1619987400" title="02 may La Equidad <strong>2-2</strong> Atletico Nacional<div onclick='game(1916568)' class='go'></div>">D</div>
<div data-html="true" data-id="1916567" onclick="form_game(this)" class="label label-xs label-danger" data-toggle="tooltip" data-unixtime="1619398800" title="26 apr La Equidad <strong>1-0</strong> Atletico Nacional<div onclick='game(1916567)' class='go'></div>">L</div>
<div data-html="true" data-id="1881430" onclick="form_game(this)" class="label label-xs label-success" data-toggle="tooltip" data-unixtime="1618777800" title="18 apr Patriotas <strong>1-7</strong> Atletico Nacional<div onclick='game(1881430)' class='go'></div>">W</div>
        </div>
    </div>
    
    <label>Propability:</label>
    <div class="progress">
        <div class="progress-bar progress-bar-success" style="width: 41%;">
          <span>1: 41%</span>
        </div>
        <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 29%;">
          <span>X: 29%</span>
        </div>
        <div class="progress-bar progress-bar-danger" style="width: 30%;">
          <span>2: 30%</span>
        </div>
         <div class="clearfix"></div>
    </div>
    
       </div>
    
</div>
    
   
    <div class="links">
       <div class="links-col c100">
           <a class="btn btn-lg btn-primary btn-block" href="/h2h/atletico-nacional/santa-fe/"><u class="fa fa-clone" aria-hidden="true" ></u> H2H</a>
            
       </div>
        <div class="links-col">
            <a class="btn btn-lg btn-primary btn-block" href="/colombia/liga-postobon/"><u class="fa fa-table" aria-hidden="true" ></u> League</a>
        </div>
        <div class="links-col">
            <a class="btn btn-lg btn-primary btn-block" href="/livescore/santa-fe-atletico-nacional-g1960914/"><u class="fa fa-futbol-o" aria-hidden="true" ></u> Live</a>
        </div>
        <div class="clearfix"></div>
    </div>
</div>    

</div>
    </div>
</div>


<style>
    .home-games-container{
        overflow:auto;position:relative;width:100%; overflow-y: hidden;
          margin-bottom: 20px;
    }
    
    .hgleague{line-hight:30px;}
    .hgleague img{position:relative;top:-2px;margin-right:2px;}
    .home-games-content{white-space: nowrap;}
    .home-games-container-shadow{
        
        right:0;
         -webkit-box-shadow: inset -8px 0px 15px 1px rgba(0,0,0,0.34);
        -moz-box-shadow: inset -8px 0px 15px 1px rgba(0,0,0,0.34);
        box-shadow: inset -8px 0px 15px 1px rgba(0,0,0,0.34);
        width:20px;
        height:630px;
        z-index:20;
        position:absolute;
      
    }
    .home-game{width:310px;margin-right: 10px;vertical-align: top;display:inline-block;position:relative;}
    .home-game .progress{height:26px;line-height:26px;}
    .home-game .progress .progress-bar{height:26px!important;line-height:26px !important;font-size:12px;min-width:20%;max-width:60%;}
    .home-game label{margin: 10px 0 0 0;}
    .home-game .stats{clear:both;text-align:left;height:180px}
    .home-game .notifi{position:absolute;top:28px;right:6px;}
    .game-box-container{
        background:white;
        text-align:center;
        font-family: 'Oswald', Arial, sans-serif;
        background-image: url('/images/grass2.jpg');
        background-color: #FFFFFF;
        background-repeat:repeat-x;
        background-position:  top;
    
        height:630px;
    }
    .game-box-new{
        color:#252c33;
        margin:auto;
        max-width: 1000px;
        
        padding: 40px 10px 10px 10px;
    }
    
    .game-box-new .status-box{color:#d61919;text-transform: uppercase;margin: 5px 0 5px 0;}
    .game-box-new .status-box span{display:block;font-size:20px;}
    .game-box-new > .home{float:left;width:28%;font-size:18px;border-bottom: 4px #d61919 solid;margin-right:2%;min-height:56px;}
    .game-box-new > .away{float:right;width:28%;font-size:18px;border-bottom: 4px #d61919 solid;margin-left:2%;min-height:56px;}
    .game-box-new > .home a, .game-box-new > .away a{color:#252c33;text-decoration:none;}
    .game-box-new > .home a:hover, .game-box-new > .away a:hover{text-decoration:underline;}
    .game-box-new .score{float:right;width:40%;cursor:pointer;}
    .game-box-new .score .result{text-align:left;position:relative;}
    .game-box-new .score .result time{display:block;}
    .game-box-new .penalty{display: block;font-size:30px;position:relative;top:10px;}
    .game-box-new .score .result{color:white;font-weight: bold;font-size:40px;}
    .game-box-new .score .result .h{text-align:right;padding-right:6%;height:56px;line-height:56px;background:#d61919 url('/images/arrow-red.jpg') no-repeat right center;float:left;width:44%;}
    .game-box-new .score .result .a{padding-left:6%;height:56px;line-height:56px;background:#d61919 url('/images/arrow-red2.jpg') no-repeat left center;float:right;width:44%;}
    .game-box-new .score .result .h img{position:absolute;left:0;top:-5px;width:80px;height:80px;}
    .game-box-new .score .result .a img{position:absolute;right:0;top:-5px;width:80px;height:80px;}
    .game-box-new .bg{margin:30px auto 0 auto;}
    
    
    .game-box-new.status_started .score .result .h{background:#008522 url('/images/arrow-green-right.jpg') no-repeat right center;}
    .game-box-new.status_started .score .result .a{background:#008522 url('/images/arrow-green-left.jpg') no-repeat left center;}
    .game-box-new.status_started > .home{border-bottom-color: #008522;}
    .game-box-new.status_started > .away{border-bottom-color: #008522;}
    .game-box-new.status_started .status-box{color:#008522;}
    
    .game-box-new.status_not_started .score .result .h{background:#878987 url('/images/arrow-grey-right.jpg') no-repeat right center;}
    .game-box-new.status_not_started .score .result .a{background:#878987 url('/images/arrow-grey-left.jpg') no-repeat left center;}
    .game-box-new.status_not_started > .home{border-bottom-color: #878987;}
    .game-box-new.status_not_started > .away{border-bottom-color: #878987;}
    .game-box-new.status_not_started .status-box{color:#878987;}
    
   
   
    .game-box-new .status-box .min{visibility:hidden;}
    .game-box-new .status-box blink{display:none}
    
    .game-box-new.status_started .status-box .min{
        visibility:visible;
    }
    .game-box-new.status_started .status-box .min blink{display:inline;}
    
    .home-game .links{clear:both;font-size:12px;}
    .home-game .links a{text-decoration: none;}
    .home-game .links-col{float:left;width:50%;margin-bottom:10px;padding:0 5px;height:40px;}
    .home-game .links-col.c100{width:100%;}
    
@-webkit-keyframes blink-change2 {
  from { color: #008522; }
  to { color: inherit; }
}
@-moz-keyframes blink-change2 {
  from { color: #008522; }
  to { color: inherit; }
}
@-o-keyframes blink-change2 {
  from { color: #008522; }
  to { color: inherit; }
}
@keyframes blink-change2 {
  from { color: #008522; }
  to { color: inherit; }
}

.blink-min {
  -webkit-animation: blink-change2 1s infinite; /* Safari 4+ */
  -moz-animation:    blink-change2 1s infinite; /* Fx 5+ */
  -o-animation:      blink-change2 1s infinite; /* Opera 12+ */
  animation:         blink-change2 1s infinite; /* IE 10+ */
}


    .game-box-new .game-incidents .incident:nth-child(even){background:#f8f7f7;}
   
    /*mobile*/
        .game-box-new > .home{width:49%;position:relative;top:-30px;}
        .game-box-new > .away{position:relative;top:107px;width:49%;}
        .game-box-new .score{float:none;width:100%;clear:both;top:-55px;position:relative;}
        .game-box-new .score .result .h img, .game-box-new .score .result .a img{
            width:60px;
            height:60px;
        }
        
        .game-box-new .game-incidents{margin-top: 0px}
        .game-box-new .game-incidents .home, .game-box-new .game-incidents .away{display:none;}
        .game-box-new .game-incidents .thome{
            width:100%;
            display:block;
        }
        .game-box-new .game-incidents .taway{
            display:block;
            width:100%;
            text-align:right;
        }
        
        .home-games-container-shadow{display: none;}
        
        @media screen and (max-width: 790px) {
            .home-games-container-shadow{display: block;}
        }
        
</style>



<div style="margin:20px;text-align: left" class="hidden-lg hidden-md">

<ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:600px"
     data-ad-client="ca-pub-7973862450098125"
     data-ad-slot="8134352102"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

</div>

<div id="live"></div>



<div class="panel panel-default">
    <div class="panel-body pn home-live-box">
        <div class="row">
            <div class="col-lg-2 col-md-3 hidden-sm hidden-xs livescore_menu">
                <h3>Today's leagues</h3>
                <div class="live-game-left-menu">
                    <div class="lm-container" style="height: 252px">
                          <h4 class="m-t-0 header-title"><b>tournaments</b></h4>
<ul style="margin-bottom:20px;">
        <li><a href="/concacafgoldcup/">
                    <img src="https://static.fctables.com/upload/images/18x18/8g/8grde57b4b671c8f68/concacaf-gold-cup-1.png" alt="CONCACAF Gold Cup" />
        
        CONCACAF Gold Cup</a> 
    </li>
        <li><a href="/clubfriendlies/">
                    <img src="https://static.fctables.com/upload/images/18x18/ze/zevhk5799fbf4298d6/friendly-games.png" alt="Friendlies" />
        
        Friendlies</a> 
    </li>
        <li><a href="/kagameinterclubcup/">
        
        Kagame Inter-Club Cup</a> 
    </li>
    </ul>

<h4 class="m-t-0 header-title"><b>league</b></h4>
<ul>
        <li><a href="/russia/premier-league/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ru" alt="Russia"  />Russia 1</a></li>
        <li><a href="/belarus/premier-division/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-by" alt="Belarus"  />Belarus 1</a></li>
        <li><a href="/argentina/torneo-inicial/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ar" alt="Argentina"  />Argentina 1</a></li>
        <li><a href="/argentina/primera-b-nacional/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ar" alt="Argentina"  />Argentina 2</a></li>
        <li><a href="/argentina/primera-b-metropolitana/" data-toggle="tooltip" title="Third League in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ar" alt="Argentina"  />Argentina 3</a></li>
        <li><a href="/armenia/premier-league/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-am" alt="Armenia"  />Armenia 1</a></li>
        <li><a href="/australia/3/" data-toggle="tooltip" title="Third League in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-au" alt="Australia"  />Australia 3</a></li>
        <li><a href="/austria/regionalliga/" data-toggle="tooltip" title="Third League in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-at" alt="Austria"  />Austria 3</a></li>
        <li><a href="/bosnia-herzegovina/premier-league/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ba" alt="Bosnia-Herzegovina"  />Bosnia-Herzegovina 1</a></li>
        <li><a href="/brazil/serie-c/" data-toggle="tooltip" title="Third League in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-br" alt="Brazil"  />Brazil 3</a></li>
        <li><a href="/bulgaria/a-grupa/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-bg" alt="Bulgaria"  />Bulgaria 1</a></li>
        <li><a href="/chile/primera-division/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-cl" alt="Chile"  />Chile 1</a></li>
        <li><a href="/chile/primera-b/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-cl" alt="Chile"  />Chile 2</a></li>
        <li><a href="/china/super-league/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-cn" alt="China"  />China 1</a></li>
        <li><a href="/china/league/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-cn" alt="China"  />China 2</a></li>
        <li><a href="/colombia/liga-postobon/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-co" alt="Colombia"  />Colombia 1</a></li>
        <li><a href="/colombia/torneo-postobon/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-co" alt="Colombia"  />Colombia 2</a></li>
        <li><a href="/denmark/3f-ligaen/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-dk" alt="Denmark"  />Denmark 1</a></li>
        <li><a href="/ecuador/ecuador-serie-a/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ec" alt="Ecuador"  />Ecuador 1</a></li>
        <li><a href="/estonia/esiliiga/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ee" alt="Estonia"  />Estonia 2</a></li>
        <li><a href="/faroe-islands/effodeildin/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-fo" alt="Faroe Islands"  />Faroe Islands 1</a></li>
        <li><a href="/finland/ykkonen/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-fi" alt="Finland"  />Finland 2</a></li>
        <li><a href="/france/ligue-2/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-fr" alt="France"  />France 2</a></li>
        <li><a href="/germany/3-liga/" data-toggle="tooltip" title="Third League in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-de" alt="Germany"  />Germany 3</a></li>
        <li><a href="/germany/regionalliga/" data-toggle="tooltip" title="Fourth league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-de" alt="Germany"  />Germany 4</a></li>
        <li><a href="/hungary/nb-ii/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-hu" alt="Hungary"  />Hungary 2</a></li>
        <li><a href="/iceland/pepsi-deildin/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-is" alt="Iceland"  />Iceland 1</a></li>
        <li><a href="/ireland/airtricity-league/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ireland" alt="Ireland"  />Ireland 1</a></li>
        <li><a href="/jamaica/premier-league/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-jm" alt="Jamaica"  />Jamaica 1</a></li>
        <li><a href="/japan/cup/" data-toggle="tooltip" title="">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-jp" alt="Japan"  />Japan cup</a></li>
        <li><a href="/lithuania/a-lyga/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-lt" alt="Lithuania"  />Lithuania 1</a></li>
        <li><a href="/montenegro/telekom-1-cfl/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-me" alt="Montenegro"  />Montenegro 1</a></li>
        <li><a href="/nigeria/1-division/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ng" alt="Nigeria"  />Nigeria 1</a></li>
        <li><a href="/paraguay/division-intermedia/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-py" alt="Paraguay"  />Paraguay 2</a></li>
        <li><a href="/peru/primera-division/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-pe" alt="Peru"  />Peru 1</a></li>
        <li><a href="/poland/ekstraklasa/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-pl" alt="Poland"  />Poland 1</a></li>
        <li><a href="/poland/2-division/" data-toggle="tooltip" title="Third League in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-pl" alt="Poland"  />Poland 3</a></li>
        <li><a href="/romania/liga-i/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ro" alt="Romania"  />Romania 1</a></li>
        <li><a href="/scotland/1-division/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-scotland" alt="Scotland"  />Scotland 2</a></li>
        <li><a href="/serbia/super-liga/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-rs" alt="Serbia"  />Serbia 1</a></li>
        <li><a href="/sweden/shl/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-se" alt="Sweden"  />Sweden 1</a></li>
        <li><a href="/sweden/hockeyallsvenskan/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-se" alt="Sweden"  />Sweden 2</a></li>
        <li><a href="/ukraine/premier-league/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ua" alt="Ukraine"  />Ukraine 1</a></li>
        <li><a href="/ukraine/1-division/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ua" alt="Ukraine"  />Ukraine 2</a></li>
        <li><a href="/argentina/4/" data-toggle="tooltip" title="Fourth league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ar" alt="Argentina"  />Argentina 4</a></li>
        <li><a href="/uruguay/primera-division/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-uy" alt="Uruguay"  />Uruguay 1</a></li>
        <li><a href="/usa/nasl/" data-toggle="tooltip" title="Second league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-us" alt="USA"  />USA 2</a></li>
        <li><a href="/finland/veikkausliga/" data-toggle="tooltip" title="First league in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-fi" alt="Finland"  />Finland 1</a></li>
        <li><a href="/finland/kakkonen/" data-toggle="tooltip" title="Third League in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-fi" alt="Finland"  />Finland 3</a></li>
        <li><a href="/russia/2-division-center/" data-toggle="tooltip" title="Third League in country">&nbsp;&nbsp;<img src="/images/blank.gif" class="flag flag-ru" alt="Russia"  />Russia 3</a></li>
    </ul>                    </div>
                </div>
            </div>

            <div class="col-lg-8 col-md-9 col-sm-12">
                <h3>Live matches</h3>
                <div class="games live_games" id="live-games-box">
                    

<div id="lg_1943610" data-time="1627941600" data-status="started" data-id="1943610" data-ti="48" class="live-game status_t_started status_4">
    <div class="ln" title="Argentina - Torneo Inicial" data-toggle="tooltip"><div class="n"><a target="_blank" href="/argentina/torneo-inicial/"><div class="flag flag-ar" alt="Argentina"></div> ar 1</a></div></div>
    <div class="min"><span class="m">7'</span><span class="status">1H</span><span data-unixtime="1627941600" class="date date_unix">22:00</span></div>
    <div class="name game_hover_info" onclick="live_game_link(this)">
        <div class="home"><a href="/teams/rosario-central-192914/">Rosario Central</a></div>
        <div class="score"><a href="/livescore/rosario-central-aldosivi-g1943610/"><strong>0<i>-</i>0</strong></a></div>
        <div class="away"><a href="/teams/aldosivi-179800/">Aldosivi</a></div>
       <div class="slider"><div class="inner"></div></div>
    </div>
    <div class="ht"></div>
    <div class="l">
        <a class="btn btn-xs btn-info" href="/h2h/aldosivi/rosario-central/" target="_blank" title="H2H Rosario Central Aldosivi">H2H</a>
        <span class="not_block bell_game_1943610" data-toggle="tooltip" title="Add to notification" onclick="saveFavorite('game', 1943610, this)"><span class="fa fa-bell"></span></span>
    </div>
      
</div>


<div id="lg_1943614" data-time="1627941600" data-status="started" data-id="1943614" data-ti="48" class="live-game status_t_started status_4">
    <div class="ln" title="Argentina - Torneo Inicial" data-toggle="tooltip"><div class="n"><a target="_blank" href="/argentina/torneo-inicial/"><div class="flag flag-ar" alt="Argentina"></div> ar 1</a></div></div>
    <div class="min"><span class="m">7'</span><span class="status">1H</span><span data-unixtime="1627941600" class="date date_unix">22:00</span></div>
    <div class="name game_hover_info" onclick="live_game_link(this)">
        <div class="home"><a href="/teams/estudiantes-184419/">Estudiantes</a></div>
        <div class="score"><a href="/livescore/estudiantes-arsenal-sarandi-g1943614/"><strong>0<i>-</i>0</strong></a></div>
        <div class="away"><a href="/teams/arsenal-sarandi-180237/">Arsenal Sarandi</a></div>
       <div class="slider"><div class="inner"></div></div>
    </div>
    <div class="ht"></div>
    <div class="l">
        <a class="btn btn-xs btn-info" href="/h2h/arsenal-sarandi/estudiantes/" target="_blank" title="H2H Estudiantes Arsenal Sarandi">H2H</a>
        <span class="not_block bell_game_1943614" data-toggle="tooltip" title="Add to notification" onclick="saveFavorite('game', 1943614, this)"><span class="fa fa-bell"></span></span>
    </div>
      
</div>


<div id="lg_1968989" data-time="1627941600" data-status="started" data-id="1968989" data-ti="67" class="live-game status_t_started status_4">
    <div class="ln" title="Peru - Primera DivisiÃ³n" data-toggle="tooltip"><div class="n"><a target="_blank" href="/peru/primera-division/"><div class="flag flag-pe" alt="Peru"></div> pe 1</a></div></div>
    <div class="min"><span class="m">8'</span><span class="status">1H</span><span data-unixtime="1627941600" class="date date_unix">22:00</span></div>
    <div class="name game_hover_info" onclick="live_game_link(this)">
        <div class="home"><a href="/teams/ayacucho-fc-180777/">Ayacucho FC</a></div>
        <div class="score"><a href="/livescore/ayacucho-fc-universidad-san-martin-g1968989/"><strong>0<i>-</i>0</strong></a></div>
        <div class="away"><a href="/teams/universidad-san-martin-196350/">Universidad San Martin</a></div>
       <div class="slider"><div class="inner"></div></div>
    </div>
    <div class="ht"></div>
    <div class="l">
        <a class="btn btn-xs btn-info" href="/h2h/ayacucho-fc/universidad-san-martin/" target="_blank" title="H2H Ayacucho FC Universidad San Martin">H2H</a>
        <span class="not_block bell_game_1968989" data-toggle="tooltip" title="Add to notification" onclick="saveFavorite('game', 1968989, this)"><span class="fa fa-bell"></span></span>
    </div>
      
</div>


<div id="lg_1907792" data-time="1627941600" data-status="started" data-id="1907792" data-ti="187" class="live-game status_t_started status_4">
    <div class="ln" title="Chile - Primera Division" data-toggle="tooltip"><div class="n"><a target="_blank" href="/chile/primera-division/"><div class="flag flag-cl" alt="Chile"></div> cl 1</a></div></div>
    <div class="min"><span class="m">8'</span><span class="status">1H</span><span data-unixtime="1627941600" class="date date_unix">22:00</span></div>
    <div class="name game_hover_info" onclick="live_game_link(this)">
        <div class="home"><a href="/teams/atletico-nublense-180622/">Atletico Nublense</a></div>
        <div class="score"><a href="/livescore/atletico-nublense-ohiggins-g1907792/"><strong>0<i>-</i>0</strong></a></div>
        <div class="away"><a href="/teams/ohiggins-191003/">O'Higgins</a></div>
       <div class="slider"><div class="inner"></div></div>
    </div>
    <div class="ht"></div>
    <div class="l">
        <a class="btn btn-xs btn-info" href="/h2h/atletico-nublense/ohiggins/" target="_blank" title="H2H Atletico Nublense O'Higgins">H2H</a>
        <span class="not_block bell_game_1907792" data-toggle="tooltip" title="Add to notification" onclick="saveFavorite('game', 1907792, this)"><span class="fa fa-bell"></span></span>
    </div>
      
</div>


<div id="lg_1943613" data-time="1627933500" data-status="finished" data-id="1943613" data-ti="48" class="live-game status_t_finished status_2">
    <div class="ln" title="Argentina - Torneo Inicial" data-toggle="tooltip"><div class="n"><a target="_blank" href="/argentina/torneo-inicial/"><div class="flag flag-ar" alt="Argentina"></div> ar 1</a></div></div>
    <div class="min"><span class="m">90'</span><span class="status">FT</span><span data-unixtime="1627933500" class="date date_unix">19:45</span></div>
    <div class="name game_hover_info" onclick="live_game_link(this)">
        <div class="home"><a href="/teams/patronato-de-parana-191641/">Patronato de Parana</a></div>
        <div class="score"><a href="/livescore/patronato-de-parana-newells-old-boys-g1943613/"><strong>0<i>-</i>0</strong></a></div>
        <div class="away"><a href="/teams/newells-old-boys-190687/">Newells Old Boys</a></div>
       <div class="slider"><div class="inner"></div></div>
    </div>
    <div class="ht">0<i>-</i>0</div>
    <div class="l">
        <a class="btn btn-xs btn-info" href="/h2h/newells-old-boys/patronato-de-parana/" target="_blank" title="H2H Patronato de Parana Newells Old Boys">H2H</a>
        <span class="not_block bell_game_1943613" data-toggle="tooltip" title="Add to notification" onclick="saveFavorite('game', 1943613, this)"><span class="fa fa-bell"></span></span>
    </div>
      
</div>


<div id="lg_1943615" data-time="1627933500" data-status="finished" data-id="1943615" data-ti="48" class="live-game status_t_finished status_2">
    <div class="ln" title="Argentina - Torneo Inicial" data-toggle="tooltip"><div class="n"><a target="_blank" href="/argentina/torneo-inicial/"><div class="flag flag-ar" alt="Argentina"></div> ar 1</a></div></div>
    <div class="min"><span class="m">90'</span><span class="status">FT</span><span data-unixtime="1627933500" class="date date_unix">19:45</span></div>
    <div class="name game_hover_info" onclick="live_game_link(this)">
        <div class="home"><a href="/teams/argentinos-juniors-180172/">Argentinos Juniors</a></div>
        <div class="score"><a href="/livescore/argentinos-juniors-central-cordoba-de-santiago-g1943615/"><strong>1<i>-</i>1</strong></a></div>
        <div class="away"><a href="/teams/central-cordoba-de-santiago-182497/">Central Cordoba de Santiago</a></div>
       <div class="slider"><div class="inner"></div></div>
    </div>
    <div class="ht">0<i>-</i>1</div>
    <div class="l">
        <a class="btn btn-xs btn-info" href="/h2h/argentinos-juniors/central-cordoba-de-santiago/" target="_blank" title="H2H Argentinos Juniors Central Cordoba de Santiago">H2H</a>
        <span class="not_block bell_game_1943615" data-toggle="tooltip" title="Add to notification" onclick="saveFavorite('game', 1943615, this)"><span class="fa fa-bell"></span></span>
    </div>
      
</div>


<div id="lg_1913597" data-time="1627945200" data-status="not_started" data-id="1913597" data-ti="306" class="live-game status_t_not_started status_1">
    <div class="ln" title="Brazil - Serie C" data-toggle="tooltip"><div class="n"><a target="_blank" href="/brazil/serie-c/"><div class="flag flag-br" alt="Brazil"></div> br 3</a></div></div>
    <div class="min"><span class="m">'</span><span class="status"></span><span data-unixtime="1627945200" class="date date_unix">23:00</span></div>
    <div class="name game_hover_info" onclick="live_game_link(this)">
        <div class="home"><a href="/teams/parana-clube-191567/">Parana Clube</a></div>
        <div class="score"><a href="/livescore/parana-clube-ypiranga-rs-g1913597/"><strong>-</strong></a></div>
        <div class="away"><a href="/teams/ypiranga-rs-197621/">Ypiranga RS</a></div>
       <div class="slider"><div class="inner"></div></div>
    </div>
    <div class="ht"></div>
    <div class="l">
        <a class="btn btn-xs btn-info" href="/h2h/parana-clube/ypiranga-rs/" target="_blank" title="H2H Parana Clube Ypiranga RS">H2H</a>
        <span class="not_block bell_game_1913597" data-toggle="tooltip" title="Add to notification" onclick="saveFavorite('game', 1913597, this)"><span class="fa fa-bell"></span></span>
    </div>
      
</div>


<div id="lg_1965608" data-time="1627945200" data-status="not_started" data-id="1965608" data-ti="400" class="live-game status_t_not_started status_1">
    <div class="ln" title="Paraguay - Division Intermedia" data-toggle="tooltip"><div class="n"><a target="_blank" href="/paraguay/division-intermedia/"><div class="flag flag-py" alt="Paraguay"></div> py 2</a></div></div>
    <div class="min"><span class="m">'</span><span class="status"></span><span data-unixtime="1627945200" class="date date_unix">23:00</span></div>
    <div class="name game_hover_info" onclick="live_game_link(this)">
        <div class="home"><a href="/teams/deportivo-capiata-183501/">Deportivo Capiata</a></div>
        <div class="score"><a href="/livescore/deportivo-capiata-sportivo-ameliano-g1965608/"><strong>-</strong></a></div>
        <div class="away"><a href="/teams/sportivo-ameliano-530572/">Sportivo Ameliano</a></div>
       <div class="slider"><div class="inner"></div></div>
    </div>
    <div class="ht"></div>
    <div class="l">
        <a class="btn btn-xs btn-info" href="/h2h/deportivo-capiata/sportivo-ameliano/" target="_blank" title="H2H Deportivo Capiata Sportivo Ameliano">H2H</a>
        <span class="not_block bell_game_1965608" data-toggle="tooltip" title="Add to notification" onclick="saveFavorite('game', 1965608, this)"><span class="fa fa-bell"></span></span>
    </div>
      
</div>


<div id="lg_1963125" data-time="1627945200" data-status="not_started" data-id="1963125" data-ti="404" class="live-game status_t_not_started status_1">
    <div class="ln" title="Colombia - Torneo Aguila" data-toggle="tooltip"><div class="n"><a target="_blank" href="/colombia/torneo-postobon/"><div class="flag flag-co" alt="Colombia"></div> co 2</a></div></div>
    <div class="min"><span class="m">'</span><span class="status"></span><span data-unixtime="1627945200" class="date date_unix">23:00</span></div>
    <div class="name game_hover_info" onclick="live_game_link(this)">
        <div class="home"><a href="/teams/chico-fc-182726/">Chico FC</a></div>
        <div class="score"><a href="/livescore/chico-fc-real-cartagena-g1963125/"><strong>-</strong></a></div>
        <div class="away"><a href="/teams/real-cartagena-192566/">Real Cartagena</a></div>
       <div class="slider"><div class="inner"></div></div>
    </div>
    <div class="ht"></div>
    <div class="l">
        <a class="btn btn-xs btn-info" href="/h2h/chico-fc/real-cartagena/" target="_blank" title="H2H Chico FC Real Cartagena">H2H</a>
        <span class="not_block bell_game_1963125" data-toggle="tooltip" title="Add to notification" onclick="saveFavorite('game', 1963125, this)"><span class="fa fa-bell"></span></span>
    </div>
      
</div>
                </div>
                <div class="clearfix"></div>
                <a class="btn btn-sm btn-primary btn-block margint10" href="/livescore/">Check today's matches head to head <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div class="col-lg-2 visible-lg">

                <div class="text-center">   
                        
                  

                                            </div>
                </div>
            </div>



        </div>
    </div>
        
    <div style="margin:20px;text-align: left">
        
        <ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:600px"
     data-ad-client="ca-pub-7973862450098125"
     data-ad-slot="9035809151"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
        
    </div>


    <h3>Favorite leagues</h3>
    <div id="home_tables_box">
        <div class="text-center"><img src="/images/ajax-loader3.gif" /></div>
    </div>
   
    <div class="text-center" style="margin-bottom: 20px;">
        <div onclick="home_all_tables(this)" class="btn btn-block btn-primary btn-block">All popular tables <i class="fa fa-caret-down" aria-hidden="true"></i></div>
    </div>
 
    
    <script>
    document.addEventListener("site-build", function(event) { 
        
        var window_scroll_downloaded = false;
        $(window).scroll(function (event) {
            var scroll = $(window).scrollTop();
            if(!window_scroll_downloaded && scroll > 150){
                window_scroll_downloaded = true;
                var url = "/";
                if(!$.cookie('user_logged'))
                    url = "/no-logged/";
                
                $.ajax({
                    url: "/home_tables"+url,
                    dataType: "html",
                    cache: true,
                    data: {},
                    success: function (data){ 
                        $('#home_tables_box').html(data);
                    }
                });
            }
            // Do something
            
        });

        console.log('jquery loaded aaa');
 /*
        var tab_downloaded = false;
        var window = $(window);
        console.log($.cookie('user_logged'));
        $(window).scroll(function (event) {
console.log($(window).scrollTop());

            if(!tab_downloaded && $(window).scrollTop() > 250){
                tab_downloaded = true; 
                $.ajax({
                    url: "/home_tables/",
                    dataType: "html",
                    cache: false,
                    data: {},
                    success: function (data){ 
                        $('#home_tables_box').html(data);
                    }
                });
            }
        
            // Do something
        });
        */
/*
        window.on('scroll', function(){
            console.log('scroll');
            console.log($("body").scrollTop());
            
            if(!tab_downloaded && $("body").scrollTop() > 250){
                tab_downloaded = true; 
                $.ajax({
                    url: "/home_tables/",
                    dataType: "html",
                    cache: false,
                    data: {},
                    success: function (data){ 
                        $('#home_tables_box').html(data);
                    }
                });
            }
        });
  */      
    });
    </script>
    
    
<a class="btn btn-block btn-primary" href="/tables/" style="margin-bottom:20px;"><i class="fa fa-table" aria-hidden="true"></i> Go to all leagues page</a>



    

          

    <div class="panel panel-info">
        <div class="panel-heading">
            <div class="panel-title row">
                <div class="col-xs-12">
                    <div class="table-name">
                        <span>Info</span>
                    </div>
                </div>
               
            </div>
        </div>

        <div class="panel-body">
            <div class="row">
                <div class="col-sm-6 col-md-3" >
                    <h3>Today's match predictions</h3>
                    <a href="/todays-match-predictions/"><img class="img-responsive img-thumbnail" src="https://static.fctables.com/images/todays-match-predictions.jpg" alt="Today's match predictions" /></a>
                    <br><p style="min-height:140px">Check our today's match list with propability. This is our most popular section. Matches are sorted by propability</p>
                </div>
                <div class="col-sm-6 col-md-3">
                    <h3>Head to head</h3>
                    <a href="/h2h/"><img class="img-responsive img-thumbnail" src="https://static.fctables.com/images/soccer-head-to-head.jpg" alt="soccer Head to head" /></a>
                    <br><p style="min-height:140px">Check our Head to head and compare statistics of two selected football teams.</p>
                </div>
                <div class="col-sm-6 col-md-3">
                    <h3>Head to head series</h3>
                    <a href="/stats/h2h-series/"><img class="img-responsive img-thumbnail" src="https://static.fctables.com/images/h2h-teams-series.jpg" alt="H2H series" /></a>
                    <br><p style="min-height:140px">We also share site with H2H series. In this page you find the matches list for which there were a streaks in previous games of both teams.</p>
                </div>
                <div class="col-sm-6 col-md-3">
                    <h3>Players H2H</h3>
                    <a href="/players/"><img class="img-responsive img-thumbnail" src="https://static.fctables.com/images/football-player-versus.jpg" alt="Football players versus" /></a>
                    <br><p style="min-height:140px">Our new section Players H2H where you can compare stats of two selected football playersCheck our today's match list with propability. This is our most popular section. Matches are sorted by propability</p>
                </div>
            </div>
        </div>
    </div>

<div id="home2" style="min-height:200px" class="text-center"><img src="/images/ajax-loader3.gif" /></div>

<script>
  
  
    function share_fb_show() {
        $('.hidden-tips-info').addClass('hide');
        $('.hidden-tips').removeClass('hide');

    }

    function share_fb() {
        FB.ui({
            method: 'feed',
            link: 'https://www.fctables.com/predictions/',
            caption: 'Best Soccer predictions ...',
        }, function (response) {
            if (typeof response !== 'undefined') {
                share_fb_show();
                local_storage.set('prediction_share_ok', 1);
            }
        });
    }

document.addEventListener("site-build", function(event) { 
    
    function check(){
        var k = $('.hidden-tips-info');
        
        if(k.length > 0){         
            if ($.cookie('user_logged') || local_storage.get('prediction_share_ok')) {
                share_fb_show();
                console.log('show pred ok');
            }
         }else{
            setTimeout(function(){
                check();
            },2000);
        }
    }
    
    check();
    
   
});

document.addEventListener("jquery-loaded", function(event) { 
 

    $.ajax({
        url: "/home-second-page/",
        dataType: "html",
        cache: false,
        data: {},
        success: function (data){ 
     
            $('#home2').html(data);
                     
            console.log('share before'); 
           
           

            var menu = $('#submenu-item');

            set_submenu(menu);
            scroll_spy(menu);
        }
    });
});


    </script>  </div></div><div class="alphabet"><ul><li><a href="/" title="Home"><i class="glyphicon glyphicon-home"></i></a></li><li onclick="alphabet_c(this)" class="popular_templates_alphabet"><div class="glyphicon glyphicon-star text-warning"></div><ul id="popular_alphabet"><li class="popular" data-id="10"><img src="/images/blank.gif" class="flag flag-england" width="16" height="16" alt="Premier League" /> <span data-href="/england/premier-league/">Premier League</span></li><li class="popular" data-id="43"><img src="/images/blank.gif" class="flag flag-es" width="16" height="16" alt="La Liga" /> <span data-href="/spain/liga-bbva/">La Liga</span></li><li class="popular" data-id="16"><img src="/images/blank.gif" class="flag flag-de" width="16" height="16" alt="1. Bundesliga" /> <span data-href="/germany/1-bundesliga/">1. Bundesliga</span></li><li class="popular" data-id="17"><img src="/images/blank.gif" class="flag flag-it" width="16" height="16" alt="Serie A" /> <span data-href="/italy/serie-a/">Serie A</span></li><li class="popular" data-id="15"><img src="/images/blank.gif" class="flag flag-fr" width="16" height="16" alt="Ligue 1" /> <span data-href="/france/ligue-1/">Ligue 1</span></li><li class="popular" data-id="25"><img src="/images/blank.gif" class="flag flag-ru" width="16" height="16" alt="Premier League" /> <span data-href="/russia/premier-league/">Premier League</span></li><li class="popular" data-id="66"><img src="/images/blank.gif" class="flag flag-us" width="16" height="16" alt="Major League Soccer" /> <span data-href="/usa/major-league-soccer/">Major League Soccer</span></li><li class="popular" data-id="19"><img src="/images/blank.gif" class="flag flag-nl" width="16" height="16" alt="Eredivisie" /> <span data-href="/netherlands/eredivisie/">Eredivisie</span></li><li class="popular" data-id="23"><img src="/images/blank.gif" class="flag flag-pt" width="16" height="16" alt="Liga ZON Sagres" /> <span data-href="/portugal/liga-zon-sagres/">Liga ZON Sagres</span></li><li class="popular" data-id="178"><img src="/images/blank.gif" class="flag flag-by" width="16" height="16" alt="Premier Division" /> <span data-href="/belarus/premier-division/">Premier Division</span></li><li class="popular" data-id="33"><img src="/images/blank.gif" class="flag flag-tr" width="16" height="16" alt="Super Lig" /> <span data-href="/turkey/super-lig/">Super Lig</span></li><li class="popular" data-id="48"><img src="/images/blank.gif" class="flag flag-ar" width="16" height="16" alt="Torneo Inicial" /> <span data-href="/argentina/torneo-inicial/">Torneo Inicial</span></li><li class="popular" data-id="182"><img src="/images/blank.gif" class="flag flag-br" width="16" height="16" alt="Serie A" /> <span data-href="/brazil/serie-a/">Serie A</span></li><li class="popular" data-id="56"><img src="/images/blank.gif" class="flag flag-cn" width="16" height="16" alt="Super League" /> <span data-href="/china/super-league/">Super League</span></li><li class="popular" data-id="118"><img src="/images/blank.gif" class="flag flag-pl" width="16" height="16" alt="Ekstraklasa" /> <span data-href="/poland/ekstraklasa/">Ekstraklasa</span></li><li class="popular" data-id="11"><img src="/images/blank.gif" class="flag flag-england" width="16" height="16" alt="Championship" /> <span data-href="/england/championship/">Championship</span></li></ul></li><li onclick="alphabet_c(this)"><i class="fa fa-globe text-info" aria-hidden="true"></i><ul><li class="popular"><img src="https://static.fctables.com/upload/images/16x16/0x/0x4lz578ca3372c693/uefa-european-championship.jpg" width="16" height="16" alt="European Championship " /> <span data-href="/europeanchampionship/">European Championship </span></li><li class="popular"><img src="https://static.fctables.com/upload/images/16x16/5g/5gzdm57b4b6750bbd6/copa-america-1.png" width="16" height="16" alt="Copa America" /> <span data-href="/copaamerica/">Copa America</span></li><li class="popular"><img src="https://static.fctables.com/upload/images/16x16/2h/2hws957b4b68779d24/uefa-supercup-1.png" width="16" height="16" alt="UEFA Supercup" /> <span data-href="/uefasupercup/">UEFA Supercup</span></li><li class="popular"><img src="https://static.fctables.com/upload/images/16x16/kj/kj5y157cbf7418b8ca/logo-world-cup-2018.png" width="16" height="16" alt="World cup" /> <span data-href="/worldcup/">World cup</span></li><li class="popular"><img src="https://static.fctables.com/upload/images/16x16/lw/lwasc57b4e73b58a73/uefa_champions_league.png" width="16" height="16" alt="Champions League" /> <span data-href="/championsleague/">Champions League</span></li><li class="popular"><img src="https://static.fctables.com/upload/images/16x16/8g/8grde57b4b671c8f68/concacaf-gold-cup-1.png" width="16" height="16" alt="CONCACAF Gold Cup" /> <span data-href="/concacafgoldcup/">CONCACAF Gold Cup</span></li><li class="popular"><img src="https://static.fctables.com/upload/images/16x16/4d/4deim5940e3d5741c3/confederation-cup.png" width="16" height="16" alt="Confederations Cup" /> <span data-href="/confederationscup/">Confederations Cup</span></li><li class="popular"><img src="https://static.fctables.com/upload/images/16x16/d0/d0mf157b4b68c11990/world-club-championship-1.png" width="16" height="16" alt="World club championship" /> <span data-href="/worldclubchampionship/">World club championship</span></li></ul></li><li onclick="alphabet_c(this)">A<ul><li><img src="/images/blank.gif" class="flag flag-al" alt="Albania" /> <span data-href="/albania/">Albania</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-dz" alt="Algeria" /> <span data-href="/algeria/">Algeria</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-ad" alt="Andorra" /> <span data-href="/andorra/">Andorra</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-ao" alt="Angola" /> <span data-href="/angola/">Angola</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ag" alt="Antigua and Barbuda" /> <span data-href="/antigua-and-barbuda/">Antigua and Barbuda</span> (1)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-ar" alt="Argentina" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/argentina/">Argentina</span> (7)</li><li><img src="/images/blank.gif" class="flag flag-am" alt="Armenia" /> <span data-href="/armenia/">Armenia</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-au" alt="Australia" /> <span data-href="/australia/">Australia</span> (7)</li><li><img src="/images/blank.gif" class="flag flag-at" alt="Austria" /> <span data-href="/austria/">Austria</span> (7)</li><li><img src="/images/blank.gif" class="flag flag-az" alt="Azerbaijan" /> <span data-href="/azerbaijan/">Azerbaijan</span> (3)</li></ul></li><li onclick="alphabet_c(this)">B<ul><li><img src="/images/blank.gif" class="flag flag-bh" alt="Bahrain" /> <span data-href="/bahrain/">Bahrain</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-bb" alt="Barbados" /> <span data-href="/barbados/">Barbados</span> (1)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-by" alt="Belarus" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/belarus/">Belarus</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-be" alt="Belgium" /> <span data-href="/belgium/">Belgium</span> (6)</li><li><img src="/images/blank.gif" class="flag flag-bj" alt="Benin" /> <span data-href="/benin/">Benin</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-bm" alt="Bermuda" /> <span data-href="/bermuda/">Bermuda</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-bo" alt="Bolivia" /> <span data-href="/bolivia/">Bolivia</span> (3)</li><li><img src="/images/blank.gif" class="flag flag-ba" alt="Bosnia-Herzegovina" /> <span data-href="/bosnia-herzegovina/">Bosnia-Herzegovina</span> (3)</li><li><img src="/images/blank.gif" class="flag flag-bw" alt="Botswana" /> <span data-href="/botswana/">Botswana</span> (1)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-br" alt="Brazil" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/brazil/">Brazil</span> (8)</li><li><img src="/images/blank.gif" class="flag flag-bg" alt="Bulgaria" /> <span data-href="/bulgaria/">Bulgaria</span> (6)</li><li><img src="/images/blank.gif" class="flag flag-bf" alt="Burkina Faso" /> <span data-href="/burkina-faso/">Burkina Faso</span> (1)</li></ul></li><li onclick="alphabet_c(this)">C<ul><li><img src="/images/blank.gif" class="flag flag-cm" alt="Cameroon" /> <span data-href="/cameroon/">Cameroon</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ca" alt="Canada" /> <span data-href="/canada/">Canada</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-cv" alt="Cape Verde" /> <span data-href="/cape-verde/">Cape Verde</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-cl" alt="Chile" /> <span data-href="/chile/">Chile</span> (4)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-cn" alt="China" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/china/">China</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-co" alt="Colombia" /> <span data-href="/colombia/">Colombia</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-cg" alt="Congo" /> <span data-href="/congo/">Congo</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-cr" alt="Costa Rica" /> <span data-href="/costa-rica/">Costa Rica</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-" alt="Crimea" /> <span data-href="/crimea/">Crimea</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-hr" alt="Croatia" /> <span data-href="/croatia/">Croatia</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-cu" alt="Cuba" /> <span data-href="/cuba/">Cuba</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-cy" alt="Cyprus" /> <span data-href="/cyprus/">Cyprus</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-cz" alt="Czech Republic" /> <span data-href="/czech-republic/">Czech Republic</span> (6)</li></ul></li><li onclick="alphabet_c(this)">D<ul><li><img src="/images/blank.gif" class="flag flag-dk" alt="Denmark" /> <span data-href="/denmark/">Denmark</span> (13)</li><li><img src="/images/blank.gif" class="flag flag-cd" alt="DR Congo" /> <span data-href="/dr-congo/">DR Congo</span> (1)</li></ul></li><li onclick="alphabet_c(this)">E<ul><li><img src="/images/blank.gif" class="flag flag-ec" alt="Ecuador" /> <span data-href="/ecuador/">Ecuador</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-eg" alt="Egypt" /> <span data-href="/egypt/">Egypt</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-sv" alt="El Salvador" /> <span data-href="/el-salvador/">El Salvador</span> (1)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-england" alt="England" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/england/">England</span> (13)</li><li><img src="/images/blank.gif" class="flag flag-ee" alt="Estonia" /> <span data-href="/estonia/">Estonia</span> (4)</li></ul></li><li onclick="alphabet_c(this)">F<ul><li><img src="/images/blank.gif" class="flag flag-fo" alt="Faroe Islands" /> <span data-href="/faroe-islands/">Faroe Islands</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-fj" alt="Fiji" /> <span data-href="/fiji/">Fiji</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-fi" alt="Finland" /> <span data-href="/finland/">Finland</span> (7)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-fr" alt="France" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/france/">France</span> (7)</li></ul></li><li onclick="alphabet_c(this)">G<ul><li><img src="/images/blank.gif" class="flag flag-ga" alt="Gabon" /> <span data-href="/gabon/">Gabon</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-gm" alt="Gambia" /> <span data-href="/gambia/">Gambia</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ge" alt="Georgia" /> <span data-href="/georgia/">Georgia</span> (4)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-de" alt="Germany" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/germany/">Germany</span> (9)</li><li><img src="/images/blank.gif" class="flag flag-gh" alt="Ghana" /> <span data-href="/ghana/">Ghana</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-gi" alt="Gibraltar" /> <span data-href="/gibraltar/">Gibraltar</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-gr" alt="Greece" /> <span data-href="/greece/">Greece</span> (6)</li><li><img src="/images/blank.gif" class="flag flag-gd" alt="Grenada" /> <span data-href="/grenada/">Grenada</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-gp" alt="Guadeloupe" /> <span data-href="/guadeloupe/">Guadeloupe</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-gt" alt="Guatemala" /> <span data-href="/guatemala/">Guatemala</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-gn" alt="Guinea" /> <span data-href="/guinea/">Guinea</span> (1)</li></ul></li><li onclick="alphabet_c(this)">H<ul><li><img src="/images/blank.gif" class="flag flag-hn" alt="Honduras" /> <span data-href="/honduras/">Honduras</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-hk" alt="Hong Kong" /> <span data-href="/hong-kong/">Hong Kong</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-hu" alt="Hungary" /> <span data-href="/hungary/">Hungary</span> (5)</li></ul></li><li onclick="alphabet_c(this)">I<ul><li><img src="/images/blank.gif" class="flag flag-is" alt="Iceland" /> <span data-href="/iceland/">Iceland</span> (3)</li><li><img src="/images/blank.gif" class="flag flag-in" alt="India" /> <span data-href="/india/">India</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-id" alt="Indonesia" /> <span data-href="/indonesia/">Indonesia</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ht" alt="International" /> <span data-href="/international/">International</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ir" alt="Iran" /> <span data-href="/iran/">Iran</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-iq" alt="Iraq" /> <span data-href="/iraq/">Iraq</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ireland" alt="Ireland" /> <span data-href="/ireland/">Ireland</span> (6)</li><li><img src="/images/blank.gif" class="flag flag-il" alt="Israel" /> <span data-href="/israel/">Israel</span> (5)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-it" alt="Italy" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/italy/">Italy</span> (7)</li><li><img src="/images/blank.gif" class="flag flag-ci" alt="Ivory Coast" /> <span data-href="/ivory-coast/">Ivory Coast</span> (1)</li></ul></li><li onclick="alphabet_c(this)">J<ul><li><img src="/images/blank.gif" class="flag flag-jm" alt="Jamaica" /> <span data-href="/jamaica/">Jamaica</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-jp" alt="Japan" /> <span data-href="/japan/">Japan</span> (8)</li><li><img src="/images/blank.gif" class="flag flag-jo" alt="Jordan" /> <span data-href="/jordan/">Jordan</span> (1)</li></ul></li><li onclick="alphabet_c(this)">K<ul><li><img src="/images/blank.gif" class="flag flag-kz" alt="Kazakhstan" /> <span data-href="/kazakhstan/">Kazakhstan</span> (5)</li><li><img src="/images/blank.gif" class="flag flag-ke" alt="Kenya" /> <span data-href="/kenya/">Kenya</span> (5)</li><li><img src="/images/blank.gif" class="flag flag-xk" alt="Kosovo" /> <span data-href="/kosovo/">Kosovo</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-kw" alt="Kuwait" /> <span data-href="/kuwait/">Kuwait</span> (1)</li></ul></li><li onclick="alphabet_c(this)">L<ul><li><img src="/images/blank.gif" class="flag flag-lv" alt="Latvia" /> <span data-href="/latvia/">Latvia</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-lb" alt="Lebanon" /> <span data-href="/lebanon/">Lebanon</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ls" alt="Lesotho" /> <span data-href="/lesotho/">Lesotho</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-lr" alt="Liberia" /> <span data-href="/liberia/">Liberia</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ly" alt="Libya" /> <span data-href="/libya/">Libya</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-li" alt="Liechtenstein" /> <span data-href="/liechtenstein/">Liechtenstein</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-lt" alt="Lithuania" /> <span data-href="/lithuania/">Lithuania</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-lu" alt="Luxembourg" /> <span data-href="/luxembourg/">Luxembourg</span> (4)</li></ul></li><li onclick="alphabet_c(this)">M<ul><li><img src="/images/blank.gif" class="flag flag-mg" alt="Madagascar" /> <span data-href="/madagascar/">Madagascar</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-mw" alt="Malawi" /> <span data-href="/malawi/">Malawi</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-my" alt="Malaysia" /> <span data-href="/malaysia/">Malaysia</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-ml" alt="Mali" /> <span data-href="/mali/">Mali</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-mt" alt="Malta" /> <span data-href="/malta/">Malta</span> (3)</li><li><img src="/images/blank.gif" class="flag flag-mq" alt="Martinique" /> <span data-href="/martinique/">Martinique</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-mu" alt="Mauritius" /> <span data-href="/mauritius/">Mauritius</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-mx" alt="Mexico" /> <span data-href="/mexico/">Mexico</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-md" alt="Moldova" /> <span data-href="/moldova/">Moldova</span> (3)</li><li><img src="/images/blank.gif" class="flag flag-me" alt="Montenegro" /> <span data-href="/montenegro/">Montenegro</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-ma" alt="Morocco" /> <span data-href="/morocco/">Morocco</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-mz" alt="Mozambique" /> <span data-href="/mozambique/">Mozambique</span> (1)</li></ul></li><li onclick="alphabet_c(this)">N<ul><li><img src="/images/blank.gif" class="flag flag-nireland" alt="N. Ireland" /> <span data-href="/n-ireland/">N. Ireland</span> (5)</li><li><img src="/images/blank.gif" class="flag flag-na" alt="Namibia" /> <span data-href="/namibia/">Namibia</span> (1)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-nl" alt="Netherlands" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/netherlands/">Netherlands</span> (8)</li><li><img src="/images/blank.gif" class="flag flag-nz" alt="New Zealand" /> <span data-href="/new-zealand/">New Zealand</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-ni" alt="Nicaragua" /> <span data-href="/nicaragua/">Nicaragua</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ng" alt="Nigeria" /> <span data-href="/nigeria/">Nigeria</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-mk" alt="North Macedonia" /> <span data-href="/macedonia/">North Macedonia</span> (5)</li><li><img src="/images/blank.gif" class="flag flag-no" alt="Norway" /> <span data-href="/norway/">Norway</span> (11)</li></ul></li><li onclick="alphabet_c(this)">O<ul><li><img src="/images/blank.gif" class="flag flag-om" alt="Oman" /> <span data-href="/oman/">Oman</span> (1)</li></ul></li><li onclick="alphabet_c(this)">P<ul><li><img src="/images/blank.gif" class="flag flag-pk" alt="Pakistan" /> <span data-href="/pakistan/">Pakistan</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ps" alt="Palestine" /> <span data-href="/palestine/">Palestine</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-pa" alt="Panama" /> <span data-href="/panama/">Panama</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-py" alt="Paraguay" /> <span data-href="/paraguay/">Paraguay</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-pe" alt="Peru" /> <span data-href="/peru/">Peru</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-ph" alt="Philippines" /> <span data-href="/philippines/">Philippines</span> (1)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-pl" alt="Poland" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/poland/">Poland</span> (5)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-pt" alt="Portugal" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/portugal/">Portugal</span> (6)</li><li><img src="/images/blank.gif" class="flag flag-pr" alt="Puerto Rico" /> <span data-href="/puerto-rico/">Puerto Rico</span> (1)</li></ul></li><li onclick="alphabet_c(this)">Q<ul><li><img src="/images/blank.gif" class="flag flag-qa" alt="Qatar" /> <span data-href="/qatar/">Qatar</span> (1)</li></ul></li><li onclick="alphabet_c(this)">R<ul><li><img src="/images/blank.gif" class="flag flag-ro" alt="Romania" /> <span data-href="/romania/">Romania</span> (6)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-ru" alt="Russia" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/russia/">Russia</span> (8)</li><li><img src="/images/blank.gif" class="flag flag-rw" alt="Rwanda" /> <span data-href="/rwanda/">Rwanda</span> (1)</li></ul></li><li onclick="alphabet_c(this)">S<ul><li><img src="/images/blank.gif" class="flag flag-vc" alt="Saint Vincent and The Grenadines" /> <span data-href="/saint-vincent-and-the-grenadines/">Saint Vincent and The Grenadines</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-sm" alt="San Marino" /> <span data-href="/san-marino/">San Marino</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-sa" alt="Saudi Arabia" /> <span data-href="/saudi-arabia/">Saudi Arabia</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-scotland" alt="Scotland" /> <span data-href="/scotland/">Scotland</span> (10)</li><li><img src="/images/blank.gif" class="flag flag-sn" alt="Senegal" /> <span data-href="/senegal/">Senegal</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-rs" alt="Serbia" /> <span data-href="/serbia/">Serbia</span> (3)</li><li><img src="/images/blank.gif" class="flag flag-sl" alt="Sierra Leone" /> <span data-href="/sierra-leone/">Sierra Leone</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-sg" alt="Singapore" /> <span data-href="/singapore/">Singapore</span> (3)</li><li><img src="/images/blank.gif" class="flag flag-sk" alt="Slovakia" /> <span data-href="/slovakia/">Slovakia</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-si" alt="Slovenia" /> <span data-href="/slovenia/">Slovenia</span> (5)</li><li><img src="/images/blank.gif" class="flag flag-sb" alt="Solomon Islands" /> <span data-href="/solomon-islands/">Solomon Islands</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-za" alt="South Africa" /> <span data-href="/south-africa/">South Africa</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-kr" alt="South Korea" /> <span data-href="/south-korea/">South Korea</span> (5)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-es" alt="Spain" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/spain/">Spain</span> (6)</li><li><img src="/images/blank.gif" class="flag flag-kn" alt="St. Kitts and Nevis" /> <span data-href="/st-kitts-and-nevis/">St. Kitts and Nevis</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-sd" alt="Sudan" /> <span data-href="/sudan/">Sudan</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-sz" alt="Swaziland" /> <span data-href="/swaziland/">Swaziland</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-se" alt="Sweden" /> <span data-href="/sweden/">Sweden</span> (11)</li><li><img src="/images/blank.gif" class="flag flag-ch" alt="Switzerland" /> <span data-href="/switzerland/">Switzerland</span> (6)</li><li><img src="/images/blank.gif" class="flag flag-sy" alt="Syria" /> <span data-href="/syria/">Syria</span> (1)</li></ul></li><li onclick="alphabet_c(this)">T<ul><li><img src="/images/blank.gif" class="flag flag-pf" alt="Tahiti" /> <span data-href="/tahiti/">Tahiti</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-tw" alt="Taiwan" /> <span data-href="/taiwan/">Taiwan</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-tz" alt="Tanzania" /> <span data-href="/tanzania/">Tanzania</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-td" alt="Tchad" /> <span data-href="/tchad/">Tchad</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-th" alt="Thailand" /> <span data-href="/thailand/">Thailand</span> (2)</li><li><img src="/images/blank.gif" class="flag flag-tg" alt="Togo" /> <span data-href="/togo/">Togo</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-tt" alt="Trinidad and Tobago" /> <span data-href="/trinidad-and-tobago/">Trinidad and Tobago</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-tn" alt="Tunisia" /> <span data-href="/tunisia/">Tunisia</span> (2)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-tr" alt="Turkey" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/turkey/">Turkey</span> (7)</li></ul></li><li onclick="alphabet_c(this)">U<ul><li><img src="/images/blank.gif" class="flag flag-ae" alt="U.A.E." /> <span data-href="/uae/">U.A.E.</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ug" alt="Uganda" /> <span data-href="/uganda/">Uganda</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ua" alt="Ukraine" /> <span data-href="/ukraine/">Ukraine</span> (4)</li><li><img src="/images/blank.gif" class="flag flag-uy" alt="Uruguay" /> <span data-href="/uruguay/">Uruguay</span> (2)</li><li class="popular"><img src="/images/blank.gif" class="flag flag-us" alt="USA" /> <div class="glyphicon glyphicon-star"></div> <span data-href="/usa/">USA</span> (5)</li><li><img src="/images/blank.gif" class="flag flag-uz" alt="Uzbekistan" /> <span data-href="/uzbekistan/">Uzbekistan</span> (3)</li></ul></li><li onclick="alphabet_c(this)">V<ul><li><img src="/images/blank.gif" class="flag flag-vu" alt="Vanuatu" /> <span data-href="/vanuatu/">Vanuatu</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-ve" alt="Venezuela" /> <span data-href="/venezuela/">Venezuela</span> (3)</li><li><img src="/images/blank.gif" class="flag flag-vn" alt="Vietnam" /> <span data-href="/vietnam/">Vietnam</span> (2)</li></ul></li><li onclick="alphabet_c(this)">W<ul><li><img src="/images/blank.gif" class="flag flag-wales" alt="Wales" /> <span data-href="/wales/">Wales</span> (3)</li></ul></li><li onclick="alphabet_c(this)">Y<ul><li><img src="/images/blank.gif" class="flag flag-ye" alt="Yemen" /> <span data-href="/yemen/">Yemen</span> (1)</li></ul></li><li onclick="alphabet_c(this)">Z<ul><li><img src="/images/blank.gif" class="flag flag-zm" alt="Zambia" /> <span data-href="/zambia/">Zambia</span> (1)</li><li><img src="/images/blank.gif" class="flag flag-zw" alt="Zimbabwe" /> <span data-href="/zimbabwe/">Zimbabwe</span> (1)</li></ul></li></ul><div class="alphabet_show_box" onclick="show_alphabet(this)"><div class="fa fa-arrow-circle-right" aria-hidden="true"></div><div class="fa fa-arrow-circle-left" aria-hidden="true"></div></div></div><div class="scroll_up" onclick="scroll_up(this)"><i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i></div><link href="https://static.fctables.com/css/all5.min.css" rel="stylesheet" type="text/css" media="none" onload="if(media!='all')media='all'" /><script async type="text/javascript" src="https://static.fctables.com/js/all39.min.js"></script><script async type="text/javascript" src="https://static.fctables.com/js/script77.min.js"></script><script>var language_id=2;var timezone_server = '0';
            //mailing popup check
            document.addEventListener("site-build", function(event) { 
                setTimeout(function(){
                    check_predictions_mailing(true);
                },35000);
            });
</script><div class="text-center"></div><div class="text-center"><div style="margin: 20px 0 20px 0"><div class="clearfix text-center" style="margin-bottom:50px;"><div class="panel panel-default" style="-webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.3);-moz-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.3);box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.3);font-size:18px;"><div class="panel-body text-center"><a href="https://statsdream.com/basketball/" title="Basketball statistics"><img style="width:100%;max-width:320px;" src="/images/basketball-stats.jpg" alt="Basketball stats" /></a><br />Check our new website with basketball statistics</div></div></div></div><div style="height:50px;"></div></div><div class="mpb"></div><div class="page_footer">Copyright Â© 2021 <a href="/" title="FcTables">FcTables</a>. All rights reserved, <a href="/contact/" title="Contact Fctables">Contact</a>. <a href="https://www.fctables.com/blog/cookies/">Cookies and privacy policy</a><br />Our partners:<br /><div class="row text-left"><div class="col-xs-6 col-sm-4 col-lg-offset-1 col-lg-3"><a href="http://www.surebety.pl/nasze-typy" target="_blank">Free tips</a><br /><a href="http://www.replaymatches.com/" target="_blank">Football Highlights</a><br /><a href="/links/">Links</a></div><div class="col-xs-6 col-sm-4 col-lg-4"><a href="https://statsdream.com">StatsDream.com</a><br /><a href="https://www.flashscore.co.uk/" target="_blank">Football Results</a><br /><a href="http://www.injuriesandsuspensions.com" target="_blank" title="Injuries and Suspensions">Injuries and Suspensions</a><br /><a href="http://www.bettors.club" target="_blank" title="Betting Predictions">Betting Predictions</a><br /><a href="http://www.bookie4u.net">bookie4u</a><br /><br /></div><div class="col-xs-12 col-sm-4 col-lg-4"><a href="http://www.tippswetten.de/" target="_blank" title="Tippswetten - Wett Tipps fÃ¼r heute ...Wetttipps">Wetten Tipps</a><br /><a href="http://www.typersi.com/" target="_blank" title="Football predictions "> Football predictions </a><br /><a href="http://www.oddsportal.com/" target="_blank" title="Betting Odds Comparison">Betting Odds Comparison</a><br /><a href="https://www.footballkitnews.com/">Football Kit News</a><br /><br /></div></div></div><div class="modal fade" id="modal_mailing" tabindex="-1s" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" onclick="modal_mailing_close(this)" data-dismiss="modal" aria-hidden="true">Ã</button><h3 class="modal-title">Predictions notifications</h3></div><div class="modal-body text-center" style="padding:5px;"><img src="/images/ajax-loader.gif" alt="cash loader" /></div><div class="modal-footer"><button class="btn btn-danger btn-sm" onclick="modal_mailing_close(this)">Close</button></div></div></div></div><div class="modal fade" id="modal_mailing" tabindex="-1s" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" onclick="modal_mailing_close(this)" data-dismiss="modal" aria-hidden="true">Ã</button><h3 class="modal-title">Predictions notifications</h3></div><div class="modal-body text-center" style="padding:5px;"><img src="/images/ajax-loader.gif" alt="cash loader" /></div><div class="modal-footer"><button class="btn btn-danger btn-sm" onclick="modal_mailing_close(this)">Close</button></div></div></div></div><!-- end advertising --></body></html>