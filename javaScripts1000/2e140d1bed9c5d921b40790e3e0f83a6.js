window.optimizely.push({type:"load",data:{changes:[{"dependencies": [], "type": "custom_code", "id": "03E8FD38-11B8-4621-BCF0-7B50581AD9A1", "value": function($){/*
      DX-6666
      AUTHOR: efrain.pineda@smiledirectclub.com
      */
  function isInViewport() {
    var cardsContainer = document.querySelector(".card-container");
    var cards = document.querySelectorAll(".card-container .card");
    var dots = document.querySelectorAll(".dots");
   

    if (!cardsContainer || !cards || !dots) {
      console.log("[Carousel] re-trying isInViewPort");
      setTimeout(isInViewport, 500);
    } else {
      var activeDot = "dots active";
      var inactiveDot = "dots";

      console.log("[Carousel] Prepared scrolling detection");



      cardsContainer.addEventListener(
        "scroll",
        function (e) {
          debounce(viewportDetect, 30);
        },
        { passive: true }
      );
    }
    function debounce(method, delay) {
      clearTimeout(method._tId);
      method._tId = setTimeout(function () {
        method();
      }, delay);
    }

    function viewportDetect() {
      cards.forEach(function (card, index) {
        //THIS IS FOR FUTURE TESTING, DO NOT DELETE

        //   console.group(`${card.id} data`);
        //   console.log(`This is the ${card.id} viewport data: `);
        //   console.log(card.getBoundingClientRect());
        //   console.groupEnd(`${card.id} data`);

        if (
          card.getBoundingClientRect().x > -74 &&
          card.getBoundingClientRect().x < 256
        ) {
          // console.log(card.id + ' is in viewport'); //for testing
          dots[index].className = activeDot;
        } else {
          // console.log(card.id + ' is not in viewport') //for testing
          dots[index].className = inactiveDot;
        }
      });
    }
  }

  if (document.readyState === "complete") {
    isInViewport();
  } else {
    window.addEventListener("DOMContentLoaded", isInViewport);
  }
}}]}});