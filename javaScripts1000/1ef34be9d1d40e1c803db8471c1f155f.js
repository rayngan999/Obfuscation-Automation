var wpp_params=null,WordPressPopularPosts=function(){var g=function(){},e=!!HTMLElement.prototype.attachShadow,d=function(b,c,a,h){var f=new XMLHttpRequest;b=-1!=["GET","POST"].indexOf(b)?b:"GET";f.open(b,c+("GET"==b?"?"+a:""),!0);"POST"==b&&f.setRequestHeader("Content-type","application/x-www-form-urlencoded");f.setRequestHeader("X-Requested-With","XMLHttpRequest");f.onreadystatechange=function(){4===f.readyState&&200<=f.status&&300>f.status&&"function"===typeof h&&h.call(void 0,f.response)};f.send("POST"==
b?a:null)};return{get:function(b,c,a){a="function"===typeof a?a:g;d("GET",b,c,a)},post:function(b,c,a){a="function"===typeof a?a:g;d("POST",b,c,a)},ajax:d,theme:function(b){if(e){var c=document.createElement("style"),a=document.createElement("ul");a.innerHTML='<li><a href="#"></a></li>';b.parentNode.appendChild(a);var h=getComputedStyle(a.querySelector("li")),f=getComputedStyle(a.querySelector("li a"));c.innerHTML=".wpp-list li {font-size: "+h.fontSize+"}";c.innerHTML+=".wpp-list li a {color: "+f.color+
"}";b.parentNode.removeChild(a);a=b.attachShadow({mode:"open"});for(a.append(c);b.firstElementChild;)a.append(b.firstElementChild)}}}}();
(function(){try{var g=document.querySelector("script#wpp-json"),e=!0;wpp_params=JSON.parse(g.textContent);wpp_params.ID&&("1"==wpp_params.sampling_active&&(e=1===Math.floor(Math.random()*wpp_params.sampling_rate)+1),e&&WordPressPopularPosts.post(wpp_params.ajax_url,"_wpnonce="+wpp_params.token+"&wpp_id="+wpp_params.ID+"&sampling="+wpp_params.sampling_active+"&sampling_rate="+wpp_params.sampling_rate,function(d){wpp_params.debug&&window.console&&window.console.log&&window.console.log(JSON.parse(d))}))}catch(d){console.error("WPP: Couldn't read JSON data")}})();
document.addEventListener("DOMContentLoaded",function(){function g(b){WordPressPopularPosts.get(wpp_params.ajax_url+"/widget/"+b.getAttribute("data-widget-id").split("-")[1],"is_single="+wpp_params.ID+(wpp_params.lang?"&lang="+wpp_params.lang:""),function(c){b.insertAdjacentHTML("afterend",JSON.parse(c).widget);c=b.parentNode;var a=c.querySelector(".popular-posts-sr");c.removeChild(b);a&&WordPressPopularPosts.theme(a);a=null;"function"===typeof Event?a=new Event("wpp-onload",{bubbles:!0,cancelable:!1}):
document.createEvent&&(a=document.createEvent("Event"),a.initEvent("wpp-onload",!0,!1));a&&c.dispatchEvent(a)})}for(var e=document.querySelectorAll(".wpp-widget-placeholder"),d=0;d<e.length;)g(e[d]),d++;e=document.querySelectorAll(".popular-posts-sr");if(e.length)for(d=0;d<e.length;d++)WordPressPopularPosts.theme(e[d])});