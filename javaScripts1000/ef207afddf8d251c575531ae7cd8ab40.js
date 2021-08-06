    
/* TAGS 2 - 2021-08-03 01:59:57 */

function create_pixel_ad_sw(){
    var smile_img = document.createElement('img');

    smile_img.height = 1;
    smile_img.width = 1;
    smile_img.style = 'border-style:none';
    smile_img.alt = '';

    return smile_img;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function insert_script_js(script_src){
    var insert_script_js = document.createElement('script');
    insert_script_js.type = 'text/javascript';
    insert_script_js.async = true;
    insert_script_js.src = script_src;
    top.document.getElementsByTagName('head')[0].appendChild(insert_script_js);
}


function insert_stylesheet_css(css_src){
    var insert_stylesheet_css = document.createElement('link');
    insert_stylesheet_css.rel  = 'stylesheet';
    insert_stylesheet_css.type = 'text/css';
    insert_stylesheet_css.href = css_src;
    top.document.getElementsByTagName('head')[0].appendChild(insert_stylesheet_css);
}


var script_tag_csync = document.createElement("script");
script_tag_csync.type = "text/javascript";
script_tag_csync.src = "https://csync.smilewanted.com";
(document.getElementsByTagName("head")[0] || document.documentElement ).appendChild(script_tag_csync)

function push_script_content(code){var s = document.createElement("script");s.type = "text/javascript";s.text = code;top.document.getElementsByTagName('head')[0].appendChild(s); }
push_script_content("(function(i, s, o, g, r, a, m){i[\'GoogleAnalyticsObject\'] = r;i[r] = i[r] || function() {(i[r].q = i[r].q || []).push(arguments)}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m)})(window, document, \'script\', \'https:\/\/www.google-analytics.com\/analytics.js\', \'ga\');ga(\'create\', \'UA-116494254-23\', {\'name\': \'smile_interstitiel\'});");

push_script_content("(function() {var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;po.src = 'https://www.googletagmanager.com/gtag/js?id=G-K8JXZBSX4H&l=sw_gtag_data_layer';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);})();window.sw_gtag_data_layer = window.sw_gtag_data_layer || [];function sw_gtag_data_layer_function(){sw_gtag_data_layer.push(arguments);}sw_gtag_data_layer_function('js', new Date());sw_gtag_data_layer_function('config', 'G-K8JXZBSX4H');");

    top.ga('smile_interstitiel.set', 'anonymizeIp', true);

if(top.window.location.hostname.includes('cyclismactu.net')){
    // top.ga('smile_interstitiel.send', 'event', 'Quality Traffic', 'cyclismactu_net_9b6a646', 'Same domain');
}else{
    // top.ga('smile_interstitiel.send', 'event', 'Quality Traffic', 'cyclismactu_net_9b6a646', 'Not same domain');
    top.ga('smile_interstitiel.send', 'event', 'Not same domain', 'cyclismactu_net_9b6a646', top.window.location.hostname);
}


top.ga('smile_interstitiel.send', 'pageview');
top.ga('smile_interstitiel.send', 'event', 'Source Traffic', 'cyclismactu_net_9b6a646', 'interstitiel');


function insert_check_script_sw(url, callback) {
    var d = top.document.head || top.document.getElementsByTagName("head")[0];
    var s = top.document.createElement("script");

    s.type = "text/javascript";
    s.src = url;
    s.charset = "utf-8";
    d.appendChild(s);

    if(callback) {
        if(s.addEventListener) {
            s.onload = callback;
        } else if(s.readyState) {
            s.onreadystatechange = function() {
                s.readyState === "loaded" && callback();
            };
        }
    }
}

if(top.window.location.hostname.includes('cyclismactu.net') || top.window.location.hostname.includes("smilewanted.com") || top.window.location.hostname.includes("platformsh.site") || (top.window.location.href.indexOf("#force_domain") !== -1)){
    insert_stylesheet_css("https://tags.smilewanted.com/formats/config_formats/interstitiel/cyclismactu_net_9b6a646/style.css");

insert_script_js("https://ced.sascdn.com/tag/2491/smart.js");

var sw_inter = document.createElement('div');
sw_inter.id = 'sw_inter';
sw_inter.style.visibility = "hidden";

var sw_inter_content_ad = document.createElement('div');
sw_inter_content_ad.className = 'sw_inter_content_ad';

var sw_inter_zone = document.createElement('div');
sw_inter_zone.className = 'sw_inter_zone';
sw_inter_zone.onclick = function () {
    top.document.getElementById('sw_inter').style.display = 'none';
    top.document.getElementById('sw_inter').remove();
};
    
var sw_inter_close = document.createElement('div');
sw_inter_close.className = 'sw_inter_close';

var sw_inter_no_zones = document.createElement('div');
sw_inter_no_zones.className = 'sw_inter_no_zones';

var sw_inter_no_zone_up = document.createElement('div');
sw_inter_no_zone_up.className = 'sw_inter_no_zone_up';
    
var sw_inter_no_zone_down = document.createElement('div');
sw_inter_no_zone_down.className = 'sw_inter_no_zone_down';
    
var sw_inter_no_zone_left = document.createElement('div');
sw_inter_no_zone_left.className = 'sw_inter_no_zone_left';
    
var sw_inter_no_zone_right = document.createElement('div');
sw_inter_no_zone_right.className = 'sw_inter_no_zone_right';

sw_inter_no_zones.appendChild(sw_inter_no_zone_up);
sw_inter_no_zones.appendChild(sw_inter_no_zone_down);
sw_inter_no_zones.appendChild(sw_inter_no_zone_left);
sw_inter_no_zones.appendChild(sw_inter_no_zone_right);
    
var sw_inter_close_img = document.createElement('img');
sw_inter_close_img.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAImElEQVR42s2aWUxVRxiAL1tLpAHUREFIkKKggkvEpza1UdsmSuISHzRt1GiiLyYgYFRi9MUlafXJjWjrrq9GTIygTxZCpCpopO5NhOICuCuCCkz/bzLH3l7Pufecy4U6yZ97cs/Mv5z59xmfL7wRJRAtECcQL5AgMFhgmECawEiBLIFsgRwD2ea/kWbOMLMmweCIMzijfAMw/AWwmE8V+HL27NlfV1RUlDQ0NPx69+7dU/fv36958uTJn69fv24G5LmR/3jHnBMnTpSwhrUGhyVUvwsE4liBQQJDUlJSRq5atWr6+fPnN9+7d69SmL3b1dXV9u7duxcCHT09PZ0C73r+HTx38o45zGUNa8EBLnCC29CI7Q9hYgQ+F0hOTU3NWLdu3XfyVfe8ePHiemdnZyvM9fb29iilepX70csa1oIDXOBcs2bN99CAlqEZE8ldSJCRUlZW9s3Fixd/bm9vr+vo6GgTZnosrt6/f68aGxvVkSNH1ObNm5V8YbV48WI1d+5cDTzzH++OHj2qrl27ptf4jR5wghsa69evnwpNo2592h0WfiaQOGHChMxjx4792NzcXPHmzZu/5UtqDrq7uzXzO3fuVMuWLVPTp09XY8eOVenp6Wro0KFKGFGxsbEaeOY/3o0bN07PZQ1rwQEus03voQGt48eP/wRteDC8RIUrRPL8+fNzz5w5U/jo0aPfRQ1eQezt27fq1q1bavv27WrWrFlq1KhRKj4+Xsl8T8CarKwsjQNcN2/e1LgNjdfQhDY8GFXzJIwlRFJhYWF+bW3tBvE49WKoXfK1lCBXhw4dUgsXLlQZGRmemXcCcIET3K2treyMgia0L1y4sKG0tDQfnrwIgz4m8hUQAiMUpN3o8+3bt9XWrVvV+PHjIyZAIIAbGtCCJrRfvnx5HV7MziS6sRk8RAJ6yZY+fvy4AUTiVdTly5dVSUmJSktL6zchLIAGtC5duqSgDQ/sDDwZm/kimDdDwng8BYaNfooBvuWrIMSKFStUYmJivwthAbSWL1+uacMDvAhP1TgA483iTeC0dbPJa9eunYrHwNhER/UW83UGUgh/YYqLizUP8AJPEkBPwaPJBOICVQzJBhFZ8eHiz1vwHBjdli1bBkSdgqkZsQcnwxDX3FJXV/eLyQIG+e9KlJFsCFFVdLFOpO/GDeJBghl2VFSUGjFihMrNzVWCWMXExLhmkLkSwfVafsEVzAEcPHhQu2Z4g0d4lXdD/XcFiRKSkpIySRHEuIjYOk7gDp2QR0dH6+C2d+9e1dbWpnbv3q1Gjx7tShjmMHfPnj1KIrn+BRc4ndYsWLBA82R2pf3KlSvlw4cPzzSRX+8KEg1euXLlDFwtqQLGRYByihN8PbacdMR/sIPZ2dlBGeIdc5jrP8CFME47Ay/btm2z0poeXLLEuRl+tqKtP5UMlOSNWaQMBQUFjsygCnxFu3H48GGVk5PjuJZ3gUJYg91FVZ3WkgHAGwNe4dmUAMigt+bLpqamSjJRJpH/kHY4IUSvUSe7gR4jTF5enu063llpSOBAzezWWQBPO3bssJLUN8JzlalnkME3mAKH2sBSK5K5YLkTO1JeXu6Yn4vX01994sSJH9bwzH+8cxrsMriD5WZLly79oF7C81+mOEO9fMOksiul0CH5ZOvITEMZK3qOJ3EaYm+a8fz8fA0885/TYKfcOItp06ZZ6tUrO9t28uTJYlM2+9LFW/1G1WYZHWm2G8+DMDAga22ZEzepzp49q4Fnu8FaaGI7bjwevFlORgR5SdmMDAgykjrasg+CD97DTSzAA8EAwjipjLhKx3f8D1NjxowJ6un8Ad42bdpk2UnHnTt3TpmGhi+LpoDkMl28JCWgAPISfTHiUKpjp3pOTiEYwBuVpinsulpaWqpNd8aXTbdDIqa2oCVLluhqzmsqYRnz06dPQwrBHISYNGmSZzrwRtmsrV14lgy90bSafDm0a0zzQM2ZM0eXpuHkRRh1VVVVUM/EO2xmypQpYdGAN/FUVllMnd9k+maRE2Ty5MmuBWFupAVBtRr7qlpS8Gh37OSdAlWLuf5xJhKq1WdjxyXCmFdjZ40bV+/W2Pvkfq3AKOoZlvtlbahEM9D9wqOJQR3Ce4XlftMIKuEERCIxjDgFRFTo3LlzIQOilTV7DYjwbAJimk5RaCh7TVFI4Pbv3x8yTuCdMOxQqnfgwAHXKQpdSniFZ3i3UhTPSSPVoJWFOqlMYJzAsBGmP5NGK42vIuQzAybDTeOt3MkpjUeNnFQxVBpPV9L6gNgHpYd/Gm9bWFHEOCGk+KEIshtW7hROYRVqR2bOnBm0sNKlLmUj5WNfSl2rOnRT6gaWAJEodcNuPiCM1UBgh9x6Hsvj7dq1S6vovn37XDUfaHKb3WiH18DmQ5/aQf4tHa/tIJwGNoGqhmoHwUuodtAn36CDB3gJ1aD7T8uUk6LAlilpy6fSMhXeTpWVlX3r1DIN2sSmK/5/NbGh7aWJHfJYAYR8nYE6VoBWwLFCQ2VlZZGbY4WPDnpqamo2Pnv27Ib/QQ/66rU89QLghob/Qc/z589v1NbWbvRy0PPR0RvHXnwNtra/j95wscQXaEALmtBGiHCO3j46DD19+nTRw4cPq+0OQ4m2fT0MBYfdYSg0Uad58+blhXMYans8jZHhMXDNgcfT5D8kc26Pp5nDXNawNvB4GhrQisTxtO2FAU6K8OEEJJMBfHRhgDSFvlNRUZFatGiR7gEAPPMf75hjd2EAnOJg/oBGJC8M2F7hIBARVevr68vJd0jeyJrDvcLBWnCAizOP1atX/2CCXUSvcAS9VEPSRgZKCUBtIIVOu9tLNeRLrGEtOMA1EJdqAgWKM8SSTRqdWVBQ8BXV2tWrV/U1J5oCdDhevXrVDPD84MGDat4xhytRrGGtwZFscMYN1J2tUBfP0l1cPEuP9MWzfwAkQFdghu+J0QAAAABJRU5ErkJggg==");
    
var sw_inter_crea = document.createElement('div');
sw_inter_crea.id = 'sw_inter_crea';
    
sw_inter.appendChild(sw_inter_content_ad);
sw_inter_content_ad.appendChild(sw_inter_zone);
sw_inter_content_ad.appendChild(sw_inter_close);
sw_inter_close.appendChild(sw_inter_close_img);
sw_inter_content_ad.appendChild(sw_inter_no_zones);
sw_inter_content_ad.appendChild(sw_inter_crea);

    
// Native
    
var sw_inter_natif = document.createElement('div');
sw_inter_natif.id = 'sw_inter_natif';
sw_inter_natif.style.visibility = "hidden";
    
var sw_inter_natif_container = document.createElement('div');
sw_inter_natif_container.id = 'sw_inter_natif_container';
    
var sw_inter_natif_faces = document.createElement('div');
sw_inter_natif_faces.id = 'sw_inter_natif_faces';
    
var sw_inter_natif_face_back = document.createElement('div');
sw_inter_natif_face_back.id = 'sw_inter_natif_face_back';
    
var sw_inter_natif_back_to_the_future = document.createElement('div');
sw_inter_natif_back_to_the_future.id = 'sw_inter_natif_back_to_the_future';

var sw_inter_natif_back_to_the_future_img = document.createElement('img');
sw_inter_natif_back_to_the_future_img.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE2LTAyLTA4VDEyOjE0OjEwKzAxOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxNy0xMS0xN1QxMjozOToxNiswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxNy0xMS0xN1QxMjozOToxNiswMTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YzkyYWExNzctM2I4Ni00OTFmLTk5MWMtYjRmMTU2ZDcyNjhiIiB4bXBNTTpEb2N1bWVudElEPSJh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");
    
var sw_inter_natif_confirm_content = document.createElement('div');
sw_inter_natif_confirm_content.id = 'sw_inter_natif_confirm_content';
    
var inter_sw_native_description = document.createElement('p');
inter_sw_native_description.id = 'inter_sw_native_description';
    
var sw_inter_natif_visiter_site = document.createElement('button');
sw_inter_natif_visiter_site.id = 'sw_inter_natif_visiter_site';
    
var inter_sw_native_cta = document.createElement('a');
inter_sw_native_cta.id = 'inter_sw_native_cta';
    
var sw_inter_natif_close_message = document.createElement('button');
sw_inter_natif_close_message.id = 'sw_inter_natif_close_message';
sw_inter_natif_close_message.innerHTML = 'Fermer';
    
var sw_inter_natif_face_front = document.createElement('div');
sw_inter_natif_face_front.id = 'sw_inter_natif_face_front';
    
var sw_inter_natif_zone_close = document.createElement('div');
sw_inter_natif_zone_close.id = 'sw_inter_natif_zone_close';
sw_inter_natif_zone_close.onclick = function(){
    top.document.getElementById('sw_inter_natif').style.display = 'none';
    top.document.getElementById('sw_inter_natif').remove();
};

var sw_inter_natif_close = document.createElement('div');
sw_inter_natif_close.id = 'sw_inter_natif_close';
    
var sw_inter_natif_close_img = document.createElement('img');
sw_inter_natif_close_img.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAImElEQVR42s2aWUxVRxiAL1tLpAHUREFIkKKggkvEpza1UdsmSuISHzRt1GiiLyYgYFRi9MUlafXJjWjrrq9GTIygTxZCpCpopO5NhOICuCuCCkz/bzLH3l7Pufecy4U6yZ97cs/Mv5z59xmfL7wRJRAtECcQL5AgMFhgmECawEiBLIFsgRwD2ea/kWbOMLMmweCIMzijfAMw/AWwmE8V+HL27NlfV1RUlDQ0NPx69+7dU/fv36958uTJn69fv24G5LmR/3jHnBMnTpSwhrUGhyVUvwsE4liBQQJDUlJSRq5atWr6+fPnN9+7d69SmL3b1dXV9u7duxcCHT09PZ0C73r+HTx38o45zGUNa8EBLnCC29CI7Q9hYgQ+F0hOTU3NWLdu3XfyVfe8ePHiemdnZyvM9fb29iilepX70csa1oIDXOBcs2bN99CAlqEZE8ldSJCRUlZW9s3Fixd/bm9vr+vo6GgTZnosrt6/f68aGxvVkSNH1ObNm5V8YbV48WI1d+5cDTzzH++OHj2qrl27ptf4jR5wghsa69evnwpNo2592h0WfiaQOGHChMxjx4792NzcXPHmzZu/5UtqDrq7uzXzO3fuVMuWLVPTp09XY8eOVenp6Wro0KFKGFGxsbEaeOY/3o0bN07PZQ1rwQEus03voQGt48eP/wRteDC8RIUrRPL8+fNzz5w5U/jo0aPfRQ1eQezt27fq1q1bavv27WrWrFlq1KhRKj4+Xsl8T8CarKwsjQNcN2/e1LgNjdfQhDY8GFXzJIwlRFJhYWF+bW3tBvE49WKoXfK1lCBXhw4dUgsXLlQZGRmemXcCcIET3K2treyMgia0L1y4sKG0tDQfnrwIgz4m8hUQAiMUpN3o8+3bt9XWrVvV+PHjIyZAIIAbGtCCJrRfvnx5HV7MziS6sRk8RAJ6yZY+fvy4AUTiVdTly5dVSUmJSktL6zchLIAGtC5duqSgDQ/sDDwZm/kimDdDwng8BYaNfooBvuWrIMSKFStUYmJivwthAbSWL1+uacMDvAhP1TgA483iTeC0dbPJa9eunYrHwNhER/UW83UGUgh/YYqLizUP8AJPEkBPwaPJBOICVQzJBhFZ8eHiz1vwHBjdli1bBkSdgqkZsQcnwxDX3FJXV/eLyQIG+e9KlJFsCFFVdLFOpO/GDeJBghl2VFSUGjFihMrNzVWCWMXExLhmkLkSwfVafsEVzAEcPHhQu2Z4g0d4lXdD/XcFiRKSkpIySRHEuIjYOk7gDp2QR0dH6+C2d+9e1dbWpnbv3q1Gjx7tShjmMHfPnj1KIrn+BRc4ndYsWLBA82R2pf3KlSvlw4cPzzSRX+8KEg1euXLlDFwtqQLGRYByihN8PbacdMR/sIPZ2dlBGeIdc5jrP8CFME47Ay/btm2z0poeXLLEuRl+tqKtP5UMlOSNWaQMBQUFjsygCnxFu3H48GGVk5PjuJZ3gUJYg91FVZ3WkgHAGwNe4dmUAMigt+bLpqamSjJRJpH/kHY4IUSvUSe7gR4jTF5enu063llpSOBAzezWWQBPO3bssJLUN8JzlalnkME3mAKH2sBSK5K5YLkTO1JeXu6Yn4vX01994sSJH9bwzH+8cxrsMriD5WZLly79oF7C81+mOEO9fMOksiul0CH5ZOvITEMZK3qOJ3EaYm+a8fz8fA0885/TYKfcOItp06ZZ6tUrO9t28uTJYlM2+9LFW/1G1WYZHWm2G8+DMDAga22ZEzepzp49q4Fnu8FaaGI7bjwevFlORgR5SdmMDAgykjrasg+CD97DTSzAA8EAwjipjLhKx3f8D1NjxowJ6un8Ad42bdpk2UnHnTt3TpmGhi+LpoDkMl28JCWgAPISfTHiUKpjp3pOTiEYwBuVpinsulpaWqpNd8aXTbdDIqa2oCVLluhqzmsqYRnz06dPQwrBHISYNGmSZzrwRtmsrV14lgy90bSafDm0a0zzQM2ZM0eXpuHkRRh1VVVVUM/EO2xmypQpYdGAN/FUVllMnd9k+maRE2Ty5MmuBWFupAVBtRr7qlpS8Gh37OSdAlWLuf5xJhKq1WdjxyXCmFdjZ40bV+/W2Pvkfq3AKOoZlvtlbahEM9D9wqOJQR3Ce4XlftMIKuEERCIxjDgFRFTo3LlzIQOilTV7DYjwbAJimk5RaCh7TVFI4Pbv3x8yTuCdMOxQqnfgwAHXKQpdSniFZ3i3UhTPSSPVoJWFOqlMYJzAsBGmP5NGK42vIuQzAybDTeOt3MkpjUeNnFQxVBpPV9L6gNgHpYd/Gm9bWFHEOCGk+KEIshtW7hROYRVqR2bOnBm0sNKlLmUj5WNfSl2rOnRT6gaWAJEodcNuPiCM1UBgh9x6Hsvj7dq1S6vovn37XDUfaHKb3WiH18DmQ5/aQf4tHa/tIJwGNoGqhmoHwUuodtAn36CDB3gJ1aD7T8uUk6LAlilpy6fSMhXeTpWVlX3r1DIN2sSmK/5/NbGh7aWJHfJYAYR8nYE6VoBWwLFCQ2VlZZGbY4WPDnpqamo2Pnv27Ib/QQ/66rU89QLghob/Qc/z589v1NbWbvRy0PPR0RvHXnwNtra/j95wscQXaEALmtBGiHCO3j46DD19+nTRw4cPq+0OQ4m2fT0MBYfdYSg0Uad58+blhXMYans8jZHhMXDNgcfT5D8kc26Pp5nDXNawNvB4GhrQisTxtO2FAU6K8OEEJJMBfHRhgDSFvlNRUZFatGiR7gEAPPMf75hjd2EAnOJg/oBGJC8M2F7hIBARVevr68vJd0jeyJrDvcLBWnCAizOP1atX/2CCXUSvcAS9VEPSRgZKCUBtIIVOu9tLNeRLrGEtOMA1EJdqAgWKM8SSTRqdWVBQ8BXV2tWrV/U1J5oCdDhevXrVDPD84MGDat4xhytRrGGtwZFscMYN1J2tUBfP0l1cPEuP9MWzfwAkQFdghu+J0QAAAABJRU5ErkJggg==");
    
var sw_inter_natif_crea = document.createElement('div');
sw_inter_natif_crea.id = 'sw_inter_natif_crea';
    
var sw_inter_natif_crea_img = document.createElement('img');
sw_inter_natif_crea_img.id = 'sw_inter_natif_crea_img';
    
var sw_inter_natif_trigger_smart = document.createElement('div');
sw_inter_natif_trigger_smart.id = 'sas_60869';
    
sw_inter_natif.appendChild(sw_inter_natif_container);
sw_inter_natif_container.appendChild(sw_inter_natif_faces);
    
sw_inter_natif_faces.appendChild(sw_inter_natif_face_back);
sw_inter_natif_face_back.appendChild(sw_inter_natif_back_to_the_future);
sw_inter_natif_back_to_the_future.appendChild(sw_inter_natif_back_to_the_future_img);
sw_inter_natif_face_back.appendChild(sw_inter_natif_confirm_content);
sw_inter_natif_confirm_content.appendChild(inter_sw_native_description);
sw_inter_natif_confirm_content.appendChild(sw_inter_natif_visiter_site);
sw_inter_natif_visiter_site.appendChild(inter_sw_native_cta);
sw_inter_natif_face_back.appendChild(sw_inter_natif_close_message);

sw_inter_natif_faces.appendChild(sw_inter_natif_face_front);
sw_inter_natif_face_front.appendChild(sw_inter_natif_zone_close);
sw_inter_natif_face_front.appendChild(sw_inter_natif_close);
sw_inter_natif_close.appendChild(sw_inter_natif_close_img);
sw_inter_natif_face_front.appendChild(sw_inter_natif_crea);
sw_inter_natif_crea.appendChild(sw_inter_natif_crea_img);

var ready_inter = 0;
    
function load_jquery(url, callback) {
    var d = top.document.head || top.document.getElementsByTagName("head")[0];
    var s = top.document.createElement("script");
    
    s.type = "text/javascript";
    s.src = url;
    s.charset = "utf-8";
    d.appendChild(s);

    if(callback) {
        if(s.addEventListener) {
            s.onload = callback;
        } else if(s.readyState) {
            s.onreadystatechange = function() {
                s.readyState === "loaded" && callback();
            };
        }
    }
}

function doc_ready_inter(){
    if(top.document.body){
        top.document.getElementsByTagName('body')[0].appendChild(sw_inter);
        top.document.getElementsByTagName('body')[0].appendChild(sw_inter_natif);
        top.document.getElementsByTagName('body')[0].appendChild(sw_inter_natif_trigger_smart);
        
        insert_script_js("https://tags.smilewanted.com/formats/config_formats/interstitiel/cyclismactu_net_9b6a646/script.js");
        
    }else{
        setTimeout(doc_ready_inter, 10);
    }
}
    
doc_ready_inter();

}

// Inventory Check DAR
var content_script_dar = '<script async src=\"https:\/\/securepubads.g.doubleclick.net\/tag\/js\/gpt.js\"><\/script><script>window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot(\'\/275831643\/pixel_dar\', [1, 1], \'div-gpt-ad-1583771140312-0\').addService(googletag.pubads().setTargeting(\"sw_domain_name\", \"cyclismactu_net_9b6a646\"));googletag.pubads().enableSingleRequest();googletag.enableServices();});<\/script><div id=\'div-gpt-ad-1583771140312-0\' style=\'width: 0px; height: 0px;\'><script>googletag.cmd.push(function() { googletag.display(\'div-gpt-ad-1583771140312-0\'); });<\/script><\/div>';

function insertAfter(t,e){e.parentNode.insertBefore(t,e.nextSibling)}function sw_script_async(t){if(t){var e=document.createElement("div");e.innerHTML=t,insertAfter(e,top.document.getElementsByTagName("head")[0]),runScripts(e)}}function seq(t,e,c){void 0===c&&(c=0),t[c](function(){++c===t.length?e():seq(t,e,c)})}function scriptsDone(){var t=document.createEvent("Event");t.initEvent("DOMContentLoaded",!0,!0),document.dispatchEvent(t)}function insertScript(t,e){var c=document.createElement("script");c.type="text/javascript",t.src?(c.onload=e,c.onerror=e,c.src=t.src):c.textContent=t.innerText,document.head.appendChild(c),t.parentNode.removeChild(t),t.src||e()}function runScripts(t){var e,c=t.querySelectorAll("script"),r=[];[].forEach.call(c,function(t){(e=t.getAttribute("type"))&&-1===sw_script_passback_type.indexOf(e)||r.push(function(e){insertScript(t,e)})}),seq(r,scriptsDone)}var sw_script_passback_type=["application/javascript","application/ecmascript","application/x-ecmascript","application/x-javascript","text/ecmascript","text/javascript","text/javascript1.0","text/javascript1.1","text/javascript1.2","text/javascript1.3","text/javascript1.4","text/javascript1.5","text/jscript","text/livescript","text/x-ecmascript","text/x-javascript"];

// sw_script_async(content_script_dar);

// Inventory Check DAR V2
!function t(){var e;top.document.body?top.document.getElementById("div-gpt-ad-1612357021460-0")||((e=document.createElement("iframe")).setAttribute("id","div-gpt-ad-1612357021460-0"),e.setAttribute("frameborder",0),e.setAttribute("scrolling",0),e.setAttribute("marginheight",0),e.setAttribute("marginwidth",0),e.setAttribute("topmargin",0),e.setAttribute("leftmargin",0),e.setAttribute("width",0),e.setAttribute("height",0),e.setAttribute("src","https://pubads.g.doubleclick.net/gampad/adx?iu=/275831643/pixel_dar_test&sz=1x1&t=sw_domain_name%3Dcyclismactu_net_9b6a646&"+Date.now()),e.setAttribute("style","visibility:hidden;overflow:hidden;overflow-x:hidden;overflow-y:hidden;position:absolute;top:0px;left:0px;right:0px;bottom:0px"),top.document.getElementsByTagName("body")[0].appendChild(e)):setTimeout(t,10)}();
    
// Stats SW v2
(function(){var b=new XMLHttpRequest;b.open('POST','https://prebid.smilewanted.com/track/analytics/adcall.php?id_site=5438&id_format=3&id_device='+function(){return top.window.navigator.userAgent.match(/Mobile/i)||top.window.navigator.userAgent.match(/iPhone/i)||top.window.navigator.userAgent.match(/iPod/i)||top.window.navigator.userAgent.match(/IEMobile/i)||top.window.navigator.userAgent.match(/Windows Phone/i)||top.window.navigator.userAgent.match(/Android/i)||top.window.navigator.userAgent.match(/BlackBerry/i)||top.window.navigator.userAgent.match(/webOS/i)?top.window.navigator.userAgent.match(/Tablet/i)||top.window.navigator.userAgent.match(/iPad/i)||top.window.navigator.userAgent.match(/Nexus 7/i)||top.window.navigator.userAgent.match(/Nexus 10/i)||top.window.navigator.userAgent.match(/KFAPWI/i)?'2':'3':top.window.navigator.userAgent.match(/Intel Mac/i)?'1':'1'}(),!0),b.send()})();

// Stats VidÃ©o V2.5
if(void 0===sw_stats_video){var sw_stop_stats,domaine_sw="cyclismactu_net_9b6a646",sw_stats_video=!0;!function(){if(!(-1<(I=navigator.userAgent||navigator.vendor||window.opera).indexOf("FBAN")||-1<I.indexOf("FBAV"))){var n;top.window.onbeforeunload=function(){x()},top.document.addEventListener("visibilitychange",function(){document.hidden&&x()},!1);var e=!0,o=0,a=0,i=0,r=!1,s=!1,d=!1;function c(){n=top.window.setTimeout(m,250)}function t(t){e&&(top.window.clearTimeout(n),r=setInterval(function(){a+=100},100),d=setInterval(function(){o<1e4&&(i+=100)},100),c(),e=!1)}function m(){r&&clearInterval(r),d&&clearInterval(d),e=!0}function g(t,n){var e=Math.pow(10,n);return Math.round(t*e)/e}top.document.addEventListener("mousemove",t,!1),top.document.addEventListener("mousedown",t,!1),top.document.addEventListener("keypress",t,!1),top.document.addEventListener("DOMMouseScroll",t,!1),top.document.addEventListener("mousewheel",t,!1),top.document.addEventListener("touchmove",t,!1),top.document.addEventListener("MSPointerMove",t,!1),c(),s=setInterval(function(){o<1e4?o+=100:(clearInterval(d),clearInterval(s))},100);var l="ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|be|bf|bg|bh|bi|bj|bm|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|cl|cm|cn|co|cr|cu|cv|cw|cx|cz|de|dj|dk|dm|do|dz|ec|ee|eg|es|et|eu|fi|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|im|in|io|iq|ir|is|it|je|jo|jp|kg|ki|km|kn|kp|kr|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|na|nc|ne|nf|ng|nl|no|nr|nu|nz|om|pa|pe|pf|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|yt".split("|"),p="com|edu|gov|net|mil|org|nom|sch|caa|res|off|gob|int|tur|ip6|uri|urn|asn|act|nsw|qld|tas|vic|pro|biz|adm|adv|agr|arq|art|ato|bio|bmd|cim|cng|cnt|ecn|eco|emp|eng|esp|etc|eti|far|fnd|fot|fst|g12|ggf|imb|ind|inf|jor|jus|leg|lel|mat|med|mus|not|ntr|odo|ppg|psc|psi|qsl|rec|slg|srv|teo|tmp|trd|vet|zlg|web|ltd|sld|pol|fin|k12|lib|pri|aip|fie|eun|sci|prd|cci|pvt|mod|idv|rel|sex|gen|nic|abr|bas|cal|cam|emr|fvg|laz|lig|lom|mar|mol|pmn|pug|sar|sic|taa|tos|umb|vao|vda|ven|mie|åæµ·é|åæ­å±±|ç¥å¥å·|é¹¿åå³¶|ass|rep|tra|per|ngo|soc|grp|plc|its|air|and|bus|can|ddr|jfk|mad|nrw|nyc|ski|spy|tcm|ulm|usa|war|fhs|vgs|dep|eid|fet|fla|flÃ¥|gol|hof|hol|sel|vik|cri|iwi|ing|abo|fam|gok|gon|gop|gos|aid|atm|gsm|sos|elk|waw|est|aca|bar|cpa|jur|law|sec|plo|www|bir|cbg|jar|khv|msk|nov|nsk|ptz|rnd|spb|stv|tom|tsk|udm|vrn|cmw|kms|nkz|snz|pub|fhv|red|ens|nat|rns|rnu|bbs|tel|bel|kep|nhs|dni|fed|isa|nsn|gub|e12|tec|Ð¾ÑÐ³|Ð¾Ð±Ñ|ÑÐ¿Ñ|alt|nis|jpn|mex|ath|iki|nid|gda|inc".split("|"),w=function(t){for(var n=(t=t.replace(/^www\./,"")).split(".");3<n.length;)n.shift();return 3===n.length&&(2<n[1].length&&2<n[2].length||-1===p.indexOf(n[1])&&-1===l.indexOf(n[2]))&&n.shift(),n.join(".")};var u,v,h,f,b,k,A=0;function y(){var t,n=((t=document.createElement("img")).height=1,t.width=1,t.style="border-style:none",t.alt="",t),e=(new Date).getTime(),o={};o[0]=domaine_sw,o[1]=top.window.navigator.userAgent.match(/Mobile/i)||top.window.navigator.userAgent.match(/iPhone/i)||top.window.navigator.userAgent.match(/iPod/i)||top.window.navigator.userAgent.match(/IEMobile/i)||top.window.navigator.userAgent.match(/Windows Phone/i)||top.window.navigator.userAgent.match(/Android/i)||top.window.navigator.userAgent.match(/BlackBerry/i)||top.window.navigator.userAgent.match(/webOS/i)?top.window.navigator.userAgent.match(/Tablet/i)||top.window.navigator.userAgent.match(/iPad/i)||top.window.navigator.userAgent.match(/Nexus 7/i)||top.window.navigator.userAgent.match(/Nexus 10/i)||top.window.navigator.userAgent.match(/KFAPWI/i)?"tablet":"mobile":(top.window.navigator.userAgent.match(/Intel Mac/i),"desktop"),o[2]=top.window.location.pathname,o[3]=u,o[4]=v,o[5]=h,o[6]=f,o[7]=b,o[8]=k,o[9]=A,o[10]=top.window.location.host,o[11]=top.window.location.protocol,o[12]=top.window.location.href,o[13]=top.screen.width,o[14]=top.screen.height,o[15]=e,o[16]=function(t){for(var n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),e=[],o=0;o<t;o++){var a=(Math.random()*(n.length-1)).toFixed(0);e[o]=n[a]}return e.join("")}(30),o[17]=top.window.location.hostname,o[18]=w(top.window.location.hostname),n.src="//stats.smilewanted.com/stats_video_V2/pixel_V2.1.php?data="+btoa(JSON.stringify(o))}var j=!1,z=new Date;function x(){if(!j){var t=new Date;u=Math.round((t-z)/100,2)/10,h=g((v=a/1e3)/u*100,2),f=g(u-a/1e3,2),b=g(f/u*100,2),A=g((k=i/1e3)/10*100,2),y(),clearInterval(d),clearInterval(s),j=!0}}}var I}()}
    
    
// CPF - Pixel Code
var captify_kw_query_12357 = "";
(function(c,a,p,t,i,f,y){i=c.createElement(a);t=c.getElementsByTagName(a)[0];i.type='text/javascript';i.async=true;i.src=p;t.parentNode.insertBefore(i,t);})(document,'script','https://p.cpx.to/p/12357/px.js');

    

    
var sw_consent_string = "";

// Consent String V1
if(typeof __cmp !== 'undefined'){
    __cmp('getConsentData', null, function(result) {
        sw_consent_string = result.consentData;
    });
}

// Consent String V2
if(typeof __tcfapi !== 'undefined'){
    __tcfapi('getTCData', 2, (tcData, success) => {
      if(success) {
        sw_consent_string = tcData.tcString;
      }
    }, [1,2,3]);
}