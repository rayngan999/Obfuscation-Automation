        
        function create_pixel_ad_smilewanted(){
            var smile_img = document.createElement('img');

            smile_img.height = 1;
            smile_img.width = 1;
            smile_img.style = 'border-style:none';
            smile_img.alt = '';

            return smile_img;
        }
        
        function push_event_ctr(format, type){
            var smile_img_1 = create_pixel_ad_smilewanted();
            
            smile_img_1.src = 'https://stats.smilewanted.com/stats_click/pixel.php?format='+format+'&domaine=cyclismactu_net_9b6a646&type='+type;
            
            if(type == 'impression'){
                var smile_img_2 = create_pixel_ad_smilewanted();
                smile_img_2.src = 'https://prebid.smilewanted.com/track/analytics/impression.php?id_site=5438&id_format=3&id_device=3&code_partner=smart';   
            }
        }
        
        function insertAfter(t,e){e.parentNode.insertBefore(t,e.nextSibling)}function sw_execute_passback(t){if(t){var e=document.createElement("div");e.innerHTML=t,insertAfter(e,document.querySelector("body")),runScripts(e),document.getElementById("sw_inter").remove()}}function seq(t,e,c){void 0===c&&(c=0),t[c](function(){++c===t.length?e():seq(t,e,c)})}function scriptsDone(){var t=document.createEvent("Event");t.initEvent("DOMContentLoaded",!0,!0),document.dispatchEvent(t)}function insertScript(t,e){var c=document.createElement("script");c.type="text/javascript",t.src?(c.onload=e,c.onerror=e,c.src=t.src):c.textContent=t.innerText,document.head.appendChild(c),t.parentNode.removeChild(t),t.src||e()}function runScripts(t){var e,c=t.querySelectorAll("script"),i=[];[].forEach.call(c,function(t){(e=t.getAttribute("type"))&&-1===sw_script_passback_type.indexOf(e)||i.push(function(e){insertScript(t,e)})}),seq(i,scriptsDone)}var sw_script_passback_type=["application/javascript","application/ecmascript","application/x-ecmascript","application/x-javascript","text/ecmascript","text/javascript","text/javascript1.0","text/javascript1.1","text/javascript1.2","text/javascript1.3","text/javascript1.4","text/javascript1.5","text/jscript","text/livescript","text/x-ecmascript","text/x-javascript"];
        
        
        // Native
        
        var first_click = 0;
        
        var passback_inter_native = 0;
        
        var script_sw_inter_natif_faces = document.querySelector('#sw_inter_natif_faces');

        var script_sw_inter_natif_face_front = script_sw_inter_natif_faces.querySelector('#sw_inter_natif_face_front'),
            script_sw_inter_natif_face_back = script_sw_inter_natif_faces.querySelector('#sw_inter_natif_face_back');

        document.getElementById('sw_inter_natif_close_message').addEventListener('click', function(){
            document.getElementById('sw_inter_natif').remove();
        });

        document.getElementById('sw_inter_natif_close').addEventListener('click', function(){
            document.getElementById('sw_inter_natif').remove();
        });

        script_sw_inter_natif_face_front.addEventListener('click', function(event){
            var mx = event.clientX - script_sw_inter_natif_faces.offsetLeft,
              my = event.clientY - script_sw_inter_natif_faces.offsetTop;

            var w = script_sw_inter_natif_faces.offsetWidth,
              h = script_sw_inter_natif_faces.offsetHeight;

            var directions = [
            { id: 'top', x: w/2, y: 0 },
            { id: 'right', x: w, y: h/2 },
            { id: 'bottom', x: w/2, y: h },
            { id: 'left', x: 0, y: h/2 }
            ];

            directions.sort(function(a,b){
            return distance(mx,my,a.x,a.y) - distance(mx,my,b.x,b.y);
            });

            script_sw_inter_natif_faces.setAttribute('data-direction', directions.shift().id);
            script_sw_inter_natif_faces.classList.add('is-open');

            if(!first_click){
                
                ga('smile_interstitiel.send', 'event', 'Click Crea', 'cyclismactu_net_9b6a646', 'Smart - Mobile Interstitial Native');
                
                first_click = 1;
            }
        });

        script_sw_inter_natif_face_back.addEventListener('click', function(event){
            script_sw_inter_natif_faces.classList.remove('is-open');
        });

        document.getElementById("inter_sw_native_cta").addEventListener('click', function(event){
            document.getElementById('sw_inter_natif').remove();
            ga('smile_interstitiel.send', 'event', 'Click Bouton CTA', 'cyclismactu_net_9b6a646', 'Smart - Mobile Interstitial Native');
        });
        
        function distance(x1, y1, x2, y2){
          var dx = x1-x2;
          var dy = y1-y2;
          return Math.sqrt(dx*dx + dy*dy);
        }
        
        function setCookie(cname, cvalue, exdays){
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        
        function getCookie(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function if_show_ad_inter(cookie_name, capping){
            if(capping == 0){
                return true;
            }
            if(getCookie(cookie_name) != ""){
                var nb_cookie = getCookie(cookie_name);

                if(nb_cookie <= capping){
                    return true;
                }else{
                    return false;
                }
            }else{
                setCookie(cookie_name, 1, 1);
                return true;
            }
        }

        function increment_cookie_inter(cookie_name){
            var nb_cookie = getCookie(cookie_name);
            setCookie(cookie_name, ++nb_cookie, 1);
        }
        
        var referrer_google = false;
        
                
        document.getElementById("sw_inter_crea").addEventListener('mouseover', function(e){
            push_event_ctr(this.getAttribute('data-nom-inter'), 'click');
        }, false);
        
        if(if_show_ad_inter("sw_inter", 0)){
            var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
            if(isMobile){
                var sas = sas || {};
                sas.cmd = sas.cmd || [];
                sas.cmd.push(
                    function(){
                        sas.call({
                                siteId: 340228,
                                pageId: 1190791,
                                formatId: 58811,
                                tagId: "sw_inter_crea"
                            }, {
                                networkId: 2491,
                                domain: "https://prg.smartadserver.com",
                                onAd: function(data){
                                    var nom_inter = 'mobile_interstitial_1st_page';
                                    push_event_ctr(nom_inter, 'impression');
                                    document.getElementsByClassName("sw_inter_content_ad")[0].style.width = "320px";
                                    document.getElementsByClassName("sw_inter_content_ad")[0].style.height = "480px";
                                    document.getElementById("sw_inter_crea").setAttribute("data-nom-inter", nom_inter);
                                    document.getElementById("sw_inter").className = nom_inter;
                                    document.getElementById("sw_inter").style.visibility = 'visible';
                                    increment_cookie_inter("sw_inter");
                                    ga('smile_interstitiel.send', 'event', 'Impressions Inter', 'cyclismactu_net_9b6a646', 'Smart - Mobile Interstitial 1st Page');

                                    setTimeout(function(){if(document.getElementById("sw_inter")){document.getElementById("sw_inter").remove();}}, 10000);
                                },
                                onNoad: function(data){
                                    sas.cmd.push(
                                        function(){
                                            sas.call({
                                                siteId: 340228,
                                                pageId: 1190791,
                                                formatId: 52758,
                                                tagId: "sw_inter_crea"
                                            }, {
                                                networkId: 2491,
                                                domain: "https://prg.smartadserver.com",
                                                onAd: function(data){
                                                    var nom_inter = 'mobile_interstitial_2nd_page';
                                                    push_event_ctr(nom_inter, 'impression');
                                                    document.getElementsByClassName("sw_inter_content_ad")[0].style.width = "320px";
                                                    document.getElementsByClassName("sw_inter_content_ad")[0].style.height = "480px";
                                                    document.getElementById("sw_inter_crea").setAttribute("data-nom-inter", nom_inter);
                                                    document.getElementById("sw_inter").className = nom_inter;
                                                    document.getElementById("sw_inter").style.visibility = 'visible';
                                                    increment_cookie_inter("sw_inter");
                                                    ga('smile_interstitiel.send', 'event', 'Impressions Inter', 'cyclismactu_net_9b6a646', 'Smart - Mobile Interstitial 2nd Page');

                                                    setTimeout(function(){if(document.getElementById("sw_inter")){document.getElementById("sw_inter").remove();}}, 10000);
                                                },
                                                onNoad: function(data){
                                                        sas.cmd.push(
                                                            function(){
                                                                sas.call({
                                                                    siteId: 340228,
                                                                    pageId: 1190791,
                                                                    formatId: 61277,
                                                                    tagId: "sw_inter_crea"
                                                                }, {
                                                                    networkId: 2491,
                                                                    domain: "https://prg.smartadserver.com",
                                                                    onAd: function(data){
                                                                        var nom_inter = 'mobile_interstitial_v';
                                                                        push_event_ctr(nom_inter, 'impression');
                                                                        document.getElementsByClassName("sw_inter_content_ad")[0].style.width = "320px";
                                                                        document.getElementsByClassName("sw_inter_content_ad")[0].style.height = "480px";
                                                                        document.getElementById("sw_inter_crea").setAttribute("data-nom-inter", nom_inter);
                                                                        document.getElementById("sw_inter").className = nom_inter;
                                                                        document.getElementById("sw_inter").style.visibility = 'visible';
                                                                        document.getElementsByClassName("sw_inter_no_zones")[0].style.display = 'block';
                                                                        increment_cookie_inter("sw_inter");
                                                                        ga('smile_interstitiel.send', 'event', 'Impressions Inter', 'cyclismactu_net_9b6a646', 'Smart - Mobile Interstitial V');

                                                                        setTimeout(function(){if(document.getElementById("sw_inter")){document.getElementById("sw_inter").remove();}}, 10000);
                                                                    },
                                                                    onNoad: function(data){
                                                                            sas.cmd.push(
                                                                                function(){
                                                                                    sas.call({
                                                                                            siteId: 340228,
                                                                                            pageId: 1190791,
                                                                                            formatId: 60094,
                                                                                            tagId: "sw_inter_crea"
                                                                                        }, {
                                                                                            networkId: 2491,
                                                                                            domain: "https://prg.smartadserver.com",
                                                                                            onAd: function(data){
                                                                                                var nom_inter = 'mobile_pop';
                                                                                                push_event_ctr(nom_inter, 'impression');
                                                                                                document.getElementsByClassName("sw_inter_content_ad")[0].style.width = "300px";
                                                                                                document.getElementsByClassName("sw_inter_content_ad")[0].style.height = "250px";
                                                                                                document.getElementById("sw_inter_crea").setAttribute("data-nom-inter", nom_inter);
                                                                                                document.getElementById("sw_inter").className = nom_inter;
                                                                                                document.getElementById("sw_inter").style.visibility = 'visible';
                                                                                                increment_cookie_inter("sw_inter");
                                                                                                ga('smile_interstitiel.send', 'event', 'Impressions Inter', 'cyclismactu_net_9b6a646', 'Smart - Mobile Pop');

                                                                                                setTimeout(function(){if(document.getElementById("sw_inter")){document.getElementById("sw_inter").remove();}}, 10000);
                                                                                            },
                                                                                            onNoad: function(data){
                                                                                                sas.cmd.push(
                                                                                                    function(){
                                                                                                        sas.call({
                                                                                                                siteId: 340228,
                                                                                                                pageId: 1190791,
                                                                                                                formatId: 65961,
                                                                                                                tagId: "sw_inter_crea"
                                                                                                            }, {
                                                                                                                networkId: 2491,
                                                                                                                domain: "https://prg.smartadserver.com",
                                                                                                                onAd: function(data){
                                                                                                                    var nom_inter = 'mobile_pop_2';
                                                                                                                    push_event_ctr(nom_inter, 'impression');
                                                                                                                    document.getElementsByClassName("sw_inter_content_ad")[0].style.width = "300px";
                                                                                                                    document.getElementsByClassName("sw_inter_content_ad")[0].style.height = "250px";
                                                                                                                    document.getElementById("sw_inter_crea").setAttribute("data-nom-inter", nom_inter);
                                                                                                                    document.getElementById("sw_inter").className = nom_inter;
                                                                                                                    document.getElementById("sw_inter").style.visibility = 'visible';
                                                                                                                    increment_cookie_inter("sw_inter");
                                                                                                                    ga('smile_interstitiel.send', 'event', 'Impressions Inter', 'cyclismactu_net_9b6a646', 'Smart - Mobile Pop 2');

                                                                                                                    setTimeout(function(){if(document.getElementById("sw_inter")){document.getElementById("sw_inter").remove();}}, 10000);
                                                                                                                },
                                                                                                                onNoad: function(data){
                                                                                                                    sas.cmd.push(
                                                                                                                        function(){
                                                                                                                            sas.call({
                                                                                                                                    siteId: 340228,
                                                                                                                                    pageId: 1190791,
                                                                                                                                    formatId: 60869,
                                                                                                                                    tagId: "sas_60869"
                                                                                                                                }, {
                                                                                                                                    networkId: 2491,
                                                                                                                                    domain: "https://prg.smartadserver.com",
                                                                                                                                    onNoad: function(data){
                                                                                                                                        passback_inter_native = 1;
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            );
                                                                                                                        }
                                                                                                                    );
                                                                                                                }
                                                                                                            }
                                                                                                        );
                                                                                                    }
                                                                                                );
                                                                                            }
                                                                                        }
                                                                                    );
                                                                                }
                                                                            );

                                                                            function check_ready_inter_native(){
                                                                                if(document.getElementById("sw_native_values")){
                                                                                    var sw_native_cta = document.getElementById("sw_native_cta").value;
                                                                                    var sw_native_description = document.getElementById("sw_native_description").value;
                                                                                    var sw_native_img = document.getElementById("sw_native_img").value;
                                                                                    var sw_native_click = document.getElementById("sw_native_click").value;

                                                                                    if(sw_native_cta){
                                                                                        document.getElementById("inter_sw_native_cta").innerHTML = sw_native_cta;
                                                                                    }else{
                                                                                        document.getElementById("inter_sw_native_cta").innerHTML = "Visiter le site";
                                                                                    }

                                                                                    if(sw_native_description){
                                                                                        document.getElementById("inter_sw_native_description").innerHTML = sw_native_description;   
                                                                                    }

                                                                                    if(sw_native_img){
                                                                                        document.getElementById("sw_inter_natif_crea_img").src = sw_native_img;   
                                                                                    }

                                                                                    if(sw_native_click){
                                                                                        document.getElementById("inter_sw_native_cta").href = sw_native_click;
                                                                                    }

                                                                                    if(sw_native_img && sw_native_click){
                                                                                        document.getElementById('sw_inter_natif').style.display = "flex";
                                                                                        document.getElementById('sw_inter_natif').style.visibility = "visible";
                                                                                        ga('smile_interstitiel.send', 'event', 'Impressions Inter', 'cyclismactu_net_9b6a646', 'Smart - Mobile Interstitial Native');

                                                                                        setTimeout(function(){if(document.getElementById("sw_inter")){document.getElementById("sw_inter").remove();}}, 10000);
                                                                                    }

                                                                                }else{
                                                                                    if(passback_inter_native){
                                                                                        sw_execute_passback("");
                                                                                        top.ga('smile_interstitiel.send', 'event', 'Passback Inter', 'cyclismactu_net_9b6a646', 'Cascade');
                                                                                    }else{
                                                                                        setTimeout(check_ready_inter_native, 10);
                                                                                    }
                                                                                }
                                                                            }

                                                                            check_ready_inter_native();
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                        );      
                                                    }
                                                }
                                            );
                                        }
                                    );
                                }
                            }
                        );
                    }
                );
            }else{
                sw_execute_passback("");
                top.ga('smile_interstitiel.send', 'event', 'Passback Inter', 'cyclismactu_net_9b6a646', 'Desktop');
            }
        }else{
            sw_execute_passback("");
            top.ga('smile_interstitiel.send', 'event', 'Capping Inter', 'cyclismactu_net_9b6a646', 0);
            top.ga('smile_interstitiel.send', 'event', 'Passback Inter', 'cyclismactu_net_9b6a646', 'Capping');
        }
        
        