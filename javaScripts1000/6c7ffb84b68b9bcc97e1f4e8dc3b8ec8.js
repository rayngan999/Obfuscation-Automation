"use strict";window.freedom.banner_carrousel=function(i,d){var m=d.getElementById("banner-carousel-loading");function c(e){var n=m.getElementsByClassName("ns-loading");n!==[]&&n[0]&&(n[0].style.display=e)}function u(){c("none"),m.style.display="none"}function y(e){var n,t,o,r=m&&m.hasAttribute("data-countdown-timer-only");c("block"),""!==e.trim()?(t=e,(o=d.getElementsByClassName("banners-wrapper-inner")[0].getElementsByClassName("banner-section")[0].lastChild).querySelector("#banner-carousel-loading")&&o.removeChild(o.querySelector("#banner-carousel-loading")),d.querySelector(".home-bf__column .banner-section .home-bf__banner--medium")&&(d.querySelector(".home-bf__column .banner-section .home-bf__banner--medium").style.display="none"),d.querySelector(".LARGE-2 a")&&!d.querySelector(".home-bf__column .banner-section .home-bf__banner--medium")&&(d.querySelector(".LARGE-2 a").style.display="none"),o.insertAdjacentHTML("afterbegin",t),d.getElementById("endDate")&&d.getElementById("endDate").value&&(n=d.getElementById("endDate").value,r||i.freedom.carousel.init(),n&&i.freedom.countdown.initializeClock(n))):d.getElementsByClassName("LARGE-2")[0].style.display="block",setTimeout(u,500)}return{init:function(){var e=(m=d.getElementById("banner-carousel-loading"))&&m.hasAttribute("data-countdown-timer-only"),n=window.document.querySelector(".reference span"),t=e?"/banner/countdown/"+n.textContent:"/banner/countdown",o={displayLoading:!1,loadingContext:"#banner-carousel-loading",method:"get",preventRedirect:!0,error:function(){d.querySelector(".LARGE-2.ctdown-homebf")?d.getElementsByClassName("LARGE-2.ctdown-homebf .home-bf__banner--medium").style.display="block":d.getElementsByClassName("LARGE-2")[0].style.display="block",c("none"),setTimeout(u,500)},success:y};null!==m&&d.getElementsByClassName("LARGE-2")&&i.freedom.restClient.request(t,o),d.getElementById("home-product-types-banner")&&i.freedom.carousel.init("home-product-types-banner"),d.getElementById("home-brands-banner")&&i.freedom.carousel.init("home-brands-banner");var r=d.querySelectorAll("[swiper-banner-init]");if(r.length)for(var a=r.length,l=0;l<a;l++){var s=r[l].id||"";i.freedom.carousel.init(s)}return this}}}(window,window.document).init();