"use strict";!function(){var e,d=document.getElementById("overlay"),o="active";window.freedom.nsPubSub.sub("overlay.display",function(e){"show"===e?window.freedom.addClass(d,o):"hide"===e&&window.freedom.removeClass(d,o)}),d||((d=document.createElement("div")).id="overlay",(e=document.body)&&e.appendChild(d)),d.addEventListener("click",function(e){window.freedom.nsPubSub.pub("overlay.clicked",e)},!1)}();