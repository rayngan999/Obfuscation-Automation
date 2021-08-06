
window.onload = function () {
    'use strict';

    var parentAds;
    var adsframe;
    var myxhr = new XMLHttpRequest();
    var mod_teks;
    var teks_ori;
    var is_mobile = false;

    var origin = "grid"

    //jika mobile
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var banner_display_class = "pickwordsHead__mobile";
        var width = "320px";
        var height = "50px";
        var device = "mobile";

        is_mobile = true;
    } else{
        var banner_display_class = "pickwordsHead__desktop";
        var width = "468px";
        var height = "60px";
        var device = "desktop";
    }

    var show_pw = 0;

    myxhr.onreadystatechange = function() {
        if (myxhr.readyState == 4 && myxhr.status == 200) {

            var res = myxhr.response;

            var frame_url = 'https://apis.kompas.com/api/pickwords/myframe?pw_cd=';
            var things = [];

            var readURL = window.location.href.replace(/^https?\:\/\//i, "");
            console.log(res);

            var urlCheck = readURL.split('/');
            var subDom = urlCheck[0].split('.')[0];

            teks_ori = document.querySelector('.read__right');
            
            // iterasi hasil dari controller
            var j = 0;
            var target_now = '';

            if(JSON.stringify(res) != JSON.stringify({})){
                for (var i = 0; i < res.item.length; i++) {

                    var target = res.item[i].keywords;

                    // kalo keyword > 1, explode lalu join.
                    if (target.split(',').length > 1) {
                        var target = target.split(',').map(function(item){
                            return item.trim();
                        });

                        var target = target.join('|');
                    }
                    // --- eof ---

                    //pasang banner display
                    var random_item = Math.floor(Math.random() * ((res.item.length - 1) - 0 + 1)) + 0;
                    if(j == 0){
                        var bd = document.createElement("div");
                        bd.className = 'pickwordsHead '+banner_display_class;

                        var bd_if = document.createElement('iframe');
                        bd_if.src = "https://apis.kompas.com/api/pickwords/myframe?pw_cd=" + res.item[random_item].banner_display;
                        bd_if.frameBorder = 0;
                        bd_if.width = width;
                        bd_if.height = height;
                        bd_if.scrolling = "no";

                        bd.appendChild(bd_if);
                    }
                    //eof pasang banner display

                    var pickwordsColorA = res.item[i].bg_color;
                    var pickwordsColorB = res.item[i].gradient;

                    var pickwordsColorBg = "linear-gradient(30deg, "+pickwordsColorA+" , "+pickwordsColorB+")";
                    var pw_url = frame_url + res.item[i].banner_tulip;
                    
                    var repl_teks = function (params) {

                        parentAds = document.createElement('span');
                        adsframe = document.createElement('iframe');
                        adsframe.src = frame_url + res.item[i].banner_tulip;
                        adsframe.frameBorder = 0;
                        adsframe.width = '320px';
                        adsframe.height = '50px';
                        adsframe.scrolling = 'no';

                        parentAds.appendChild(adsframe);

                        // var adsScript = '<a href="javascript:void(0);" id="ads" class="pickwords pw_fr" style="background-color:' + res.item[i].bg_color + ';color:' + res.item[i].link_color + ';padding: 0px 3px;">' + params + '</a>';
                        if(pickwordsColorB == "" || pickwordsColorB == null){
                            var adsScript = '<a href="javascript:void(0);" id="ads" class="pickwords pw_fr" style="background-color:' + pickwordsColorA + ';color:' + res.item[i].link_color + ';padding: 0px 3px;">' + params + '</a>';
                        } else{
                            var adsScript = '<a href="javascript:void(0);" id="ads" class="pickwords" style=" color:'+res.item[i].link_color+' !important; padding:0 3px; background: '+pickwordsColorBg+';background-size: 180% 180%;-webkit-animation: AnimationName 1.5s ease infinite;-moz-animation: AnimationName 1.5s ease infinite;animation: AnimationName 1.5s ease infinite;">' + params + '</a>';
                        }

                        return adsScript;
                    }

                    var tagp = teks_ori.querySelectorAll('p');

                    var limit_pw = res.item[i].target_limit;
                    [].forEach.call(tagp, function(objp){
                        if (objp.innerText != ''){
                            var reg_ex = new RegExp('\\b(' + target + ')\\b(?![^<]*?<\/a>)(?![^<]*?>)','ig');
                            var res = reg_ex.test(objp.innerHTML); 
                            if(res){
                                if(j == 0){
                                    teks_ori.prepend(bd);
                                    j = 1;
                                }

                                // limit for each pickwords
                                if(target_now == ''){
                                    target_now = target;
                                } else{
                                    if(target_now != target){
                                        show_pw = 0;
                                        target_now = target;
                                    }
                                }
                                // --- eof ---

                                if((limit_pw > show_pw)){
                                    objp.innerHTML = objp.innerHTML.replace(new RegExp('\\b(' + target + ')\\b(?![^<]*?<\/a>)(?![^<]*?>)','ig'), repl_teks('$1'));
                                    show_pw += 1;
                                }
                            }
                        }
                    });

                    var check_ads_pw = document.querySelectorAll('.pickwords');
                    if(check_ads_pw.length > limit_pw){
                        for (var m = limit_pw; m < check_ads_pw.length; m++){
                            var original_teks = check_ads_pw[m].innerHTML;
                            check_ads_pw[m].before(original_teks);
                            check_ads_pw[m].remove();
                        }
                    }
                    
                    // --- eof ---
                    
                }
            } else{
                console.log("---");
            }
            // --- eof ---

            hover_pickwords(pw_url);
            scrollOpenTulip();
            window.addEventListener("scroll", scrollOpenTulip); 
        }
    };
    
    myxhr.responseType = 'json'; // return value harus json
    myxhr.open('GET', 'https://apis.kompas.com/api/pickwords/list?origin='+origin, true); // jgn lupa ganti endpoint ke production
    myxhr.send();
}

function hover_pickwords(pw_url){
    var image_close = "https://adsimg.kompas.com/html5/assets_ads/pickwords/close.png?v=1"

    var ref_ads = document.querySelectorAll('.pickwords');
    for (i = 0; i < ref_ads.length; i++) {
        // span cangkang tulip
        var pickwordSpan = document.createElement("span"); 

        //div materi tulip
        var pickwordsTulip = document.createElement("div");
        pickwordsTulip.setAttribute("class", "pickwordsTulip"); 

        adsframe = document.createElement('iframe');
        adsframe.src = pw_url;
        adsframe.frameBorder = 0;
        adsframe.width = '320px';
        adsframe.height = '100px';
        adsframe.scrolling = 'no';

        pickwordSpan.appendChild(pickwordsTulip); 
        pickwordsTulip.appendChild(adsframe);      

        //btn close
        var pickwordsClose = document.createElement("div");
        pickwordsClose.setAttribute("class", "btnTulipClose"); 
        pickwordSpan.appendChild(pickwordsClose); 
        var pickwordsCloseImg = document.createElement("IMG");
        pickwordsCloseImg.setAttribute("src", image_close);
        pickwordsClose.appendChild(pickwordsCloseImg); 

        ref_ads[i].append(pickwordSpan); 

        //hover or tap and hide tulip
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            // desktop
            ["click", "mouseenter"].forEach(function(event) {
                pickwordsClose.addEventListener(event, function() {
                    this.parentElement.parentElement.classList.remove("activeTulip");
                    window.removeEventListener("scroll", scrollOpenTulip);       
                }, false);
            });            

            ["click", "mouseenter"].forEach(function(event) {
                ref_ads[i].addEventListener(event, function() {
                    this.classList.add("activeTulip");
                }, false);
            });
        } else {

            //mobile
            ref_ads[i].addEventListener('mouseenter', function(event){     
                this.classList.add("activeTulip");
            });

            pickwordsClose.addEventListener('click', function(event){     
                console.log(this.parentElement.parentElement);
                
                this.parentElement.parentElement.classList.remove("activeTulip");    
                window.removeEventListener("scroll", scrollOpenTulip);                   
            });
        }
    }
}

function scrollOpenTulip(){
    var ref_ads = document.querySelectorAll('.pickwords');
    for (i = 0; i < ref_ads.length; i++) {
        var position = ref_ads[i].getBoundingClientRect();       
        if(position.top >= 0 && position.bottom <= 500) {
            //console.log('Element is fully visible in screen');
            ref_ads[i].classList.add("activeTulip");
        } else{
            //console.log('hide');
            ref_ads[i].classList.remove("activeTulip");
        }
    }
}
