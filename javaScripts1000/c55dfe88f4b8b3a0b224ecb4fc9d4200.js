"use strict";!function(){var u={timeSwipe:5e3,timeInteval:0,init:function(){u.events.clickIndicator(),u.events.loopSlide(),u.plugins.swipe(document.querySelectorAll(".carousel__slides>li"))},helpers:{nextOrPrev:function(e){switch(e){case"prev":!!document.querySelector(".carousel__slides>li.active").previousElementSibling&&document.querySelector(".carousel__slides>li.active").previousElementSibling.classList.contains("carousel__slides--item")&&(u.handle.changeSlide(document.querySelector(".carousel__slides>li.active").previousElementSibling),u.handle.changeIndicator(document.querySelector(".carousel__slides--indicators>li.active").previousElementSibling));break;case"next":!!document.querySelector(".carousel__slides>li.active").nextElementSibling&&document.querySelector(".carousel__slides>li.active").nextElementSibling.classList.contains("carousel__slides--item")&&(u.handle.changeSlide(document.querySelector(".carousel__slides>li.active").nextElementSibling),u.handle.changeIndicator(document.querySelector(".carousel__slides--indicators>li.active").nextElementSibling))}}},plugins:{swipe:function(e){var l,n,i=window.innerWidth||document.body.clientWidth,s=Math.max(1,Math.floor(.01*i)),a=0,r=0,o=Math.tan(.375*Math.PI);e.forEach(function(e){e.addEventListener("touchstart",function(e){a=e.changedTouches[0].screenX,r=e.changedTouches[0].screenY},!1)}),e.forEach(function(e){e.addEventListener("touchend",function(e){var i,t,c;l=e.changedTouches[0].screenX,n=e.changedTouches[0].screenY,i=l-a,t=n-r,c=Math.abs(t/i),(Math.abs(i)>s||Math.abs(t)>s)&&c<=o&&(i<0?u.helpers.nextOrPrev("next"):u.helpers.nextOrPrev("prev"))},!1)})}},handle:{changeIndicator:function(e){document.querySelector(".carousel__slides--indicators>li.active").classList.remove("active"),e.classList.add("active")},changeSlide:function(e){document.querySelector(".carousel__slides>li.active").classList.remove("active"),e.classList.add("active")}},events:{clickIndicator:function(){document.querySelectorAll(".carousel__slides--indicators>li").forEach(function(e){e.addEventListener("click",function(){var e=this.classList[0].split("dot-")[1];u.handle.changeSlide(document.querySelector(".carousel__slides >li.item-"+e)),u.handle.changeIndicator(this),clearInterval(u.timeInteval),u.events.loopSlide()})})},loopSlide:function(){u.timeInteval=setInterval(function(){var e=document.querySelectorAll(".carousel__slides--indicators li").length,i=document.querySelector(".carousel__slides--indicators li.active"),t=i&&i.classList&&i.classList.value&&i.classList.value.replace?i.classList.value.replace(/[^0-9]/g,""):0,c=Number(t)<e-1?Number(t)+1:Number(t)-(e-1);u.handle.changeSlide(document.querySelector(".carousel__slides >li.item-"+c)),u.handle.changeIndicator(document.querySelectorAll(".carousel__slides--indicators li")[c])},u.timeSwipe)}}};try{u.init()}catch(e){console.error("ERROR|Home|Carousel"+e)}}();