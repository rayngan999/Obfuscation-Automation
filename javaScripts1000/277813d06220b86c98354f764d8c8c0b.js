/* eslint-disable no-console */
// Video Autoplay
// @ Author: BHRIV

// Used to check if css added to head already. Only add the css styles once
function elementExists(element) {
  if (typeof element != "undefined" && element != null) {
    // console.log("Element " + element + " exists!");
    return true;
  } else {
    // console.log("Element " + element + " does not exist!");
    return false;
  }
}

// ------------
// Utilize IntersectionObserver to prevent firing of a function until in viewport
// ------------
// wrapper than contains target element
// var main = document.querySelector('.main');
// only use IntersectionObserver if supported by Browser
function playIfOnscreen(videoPlayer, videoPlayerElement) {
  cc("playIfOnscreen", "run");
  const useIntersectionObserver = true;
  // only if activated
  if (useIntersectionObserver) {
    if ("IntersectionObserver" in window) {
      var config = {
        root: null,
        // rootMargin: '150px 0 0 0',
        threshold: 1.0 // wait until full element is in viewport
      };
      // define your target element
      const targetElement = document.querySelector(
        'div.sdc-custom-video-player[data-projectname="' +
        videoPlayer.dataset["projectname"] +
        '"] video'
      );
      var observer = new IntersectionObserver(function (changes, config) {
        changes.forEach(function (change) {
          // console.log(change);

          if (!change.isIntersecting) {
            cc(
              "!change.isIntersecting - element not scrolling into view. Don't load"
            );
            if (videoPlayer.dataset["pauseoffscreen"] == "true") {
              videoPlayerElement.pause();

              if (
                document.querySelector(
                  `#${videoPlayer.dataset["projectname"]}-playButton`
                )
              ) {
                document.querySelector(
                  `#${videoPlayer.dataset["projectname"]}-playButton`
                ).style.display = "initial";
              }

              if (
                document.querySelector(
                  `#${videoPlayer.dataset["projectname"]}-pauseButton`
                )
              ) {
                document.querySelector(
                  `#${videoPlayer.dataset["projectname"]}-pauseButton`
                ).style.display = "none";
              }
            }
          } else {
            cc(
              "change.isIntersecting - element is scrolling into view. Load",
              "success"
            );
            // do main purpose here
            // initVideoAutoplay();

            videoPlayerElement.play();

            if (
              document.querySelector(
                `#${videoPlayer.dataset["projectname"]}-playButton`
              )
            ) {
              document.querySelector(
                `#${videoPlayer.dataset["projectname"]}-playButton`
              ).style.display = "none";
            }

            if (
              document.querySelector(
                `#${videoPlayer.dataset["projectname"]}-pauseButton`
              )
            ) {
              document.querySelector(
                `#${videoPlayer.dataset["projectname"]}-pauseButton`
              ).style.display = "initial";
            }
          }
        });
      });
      // use Observer on the target element
      observer.observe(targetElement);
    } else {
      // IntersectionObserver is not supported by the browser, load the script immediately
      // console.log("IntersectionObserver not supported. Load immediately.");
      // Do main function after page fully loaded
      document.onreadystatechange = function () {
        if (document.readyState === "complete") {
          // in any event dont start video before page load fully complete
          // console.log("readyState complete");
          // initVideoAutoplay();

          videoPlayerElement.play();
          document.querySelector(
            `#${videoPlayer.dataset["projectname"]}-playButton`
          ).style.display = "none";
          document.querySelector(
            `#${videoPlayer.dataset["projectname"]}-pauseButton`
          ).style.display = "initial";
        }
      };
    }
  }
}

// -------------------------
// Handle if consoleclass not available, reassign to console.log
// consoleclass active
// window.cc.disabled = false;

// if (!window.cc) {
//   var cc = console.log;
//   // console.log("consoleclass not found");
// } else if (window.cc.disabled == true) {
//   // var cc = console.log;
//   // console.log("consoleclass disabled");
// } else {
//   // cc = window.cc
//   cc("consoleclass", "ready");
// }
// end consoleclass handling
// -------------------------

// -------------------------
// SDC CUSTOM VIDEO PLAYER
// -------------------------

// options that dont change frequently
const baseURL = `https://sdcstatics.com/videos/`;
const controlIconsURL = `${baseURL}control-icons`;

// run
checkForVideoPlayers();

// iterate through DOM to check for video players
// that are identified by div.sdc-custom-video-player
function checkForVideoPlayers() {
  // window.cc("checkForVideoPlayers", "run");
  const videoPlayers = document.querySelectorAll("div.sdc-custom-video-player");
  // console.log("videoPlayers", videoPlayers);
  const arr = Array.prototype.slice.call(videoPlayers);
  // console.log(arr);
  if (arr.length > 0) {
    // only once - build the stylesheet
    buildVideoStyles();
    // for each video player found, create unique players and bind to dom with events
    for (let i = 0; i < arr.length; i++) {
      // window.cc(`processing: ${i}`, "run");
      createVideoPlayer(arr[i]);
    }
  }
}

function buildVideoStyles() {
  // check for styles and only append custom stylesheet if not already appended
  var customStyles = document.getElementById("customStyles");
  var c = elementExists(customStyles);
  if (!c) {
    loadVideoPlayerStyles();
  }
}

// // STYLES
function loadVideoPlayerStyles() {
  // console.log("loadVideoPlayerStyles");
  var customStyles = document.createElement("style");
  customStyles.id = "customStyles";
  // Style the video controls
  customStyles.innerHTML =
    "div.sdc-custom-video-player {position:relative} div.sdc-custom-video-player figure {margin:0;padding:0;overflow:hidden;position:relative;top:-6px;} div.sdc-custom-video-player video {margin:0;padding:0;overflow:hidden;position:relative;top:6px;} div.sdc-custom-video-player .videoControls{padding:5px;border:none;background-image:none;background-color:transparent;color:#fff;float:right;margin-right:5px;width:40px;height:40px;border-radius:50%;background-repeat:no-repeat;position:absolute;z-index:99;top:0;right:0}div.sdc-custom-video-player .muteButton,div.sdc-custom-video-player .unmuteButton{top:42px}";
  document.head.appendChild(customStyles);
}

function createVideoPlayer(videoPlayer) {
  // cc("createVideoPlayer", "run");
  const projectname = videoPlayer.dataset["projectname"];
  // window.cc("creating video for projectname:" + projectname, "info");

  // console.log(videoPlayer.dataset["projectname"]);

  if (!videoPlayer.dataset["projectname"]) {
    console.error('videoPlayer.dataset["projectname"] not found');
  } else {
    buildVideoPlayer(videoPlayer);
  }

  function buildVideoPlayerControls(videoPlayer, videoPlayerElement) {
    console.info("buildVideoPlayerControls");

    var playButton = document.createElement("button");
    var pauseButton = document.createElement("button");
    var muteButton = document.createElement("button");
    var unmuteButton = document.createElement("button");

    playButton.id = videoPlayer.dataset["projectname"] + "-playButton";
    pauseButton.id = videoPlayer.dataset["projectname"] + "-pauseButton";
    unmuteButton.id = videoPlayer.dataset["projectname"] + "-unmuteButton";
    muteButton.id = videoPlayer.dataset["projectname"] + "-muteButton";

    playButton.classList += videoPlayer.dataset["projectname"] + " playButton";
    pauseButton.classList +=
      videoPlayer.dataset["projectname"] + " pauseButton";
    unmuteButton.classList +=
      videoPlayer.dataset["projectname"] + " unmuteButton";
    muteButton.classList += videoPlayer.dataset["projectname"] + " muteButton";

    playButton.style.display = "none";
    pauseButton.style.display = "none";
    unmuteButton.style.display = "none";
    muteButton.style.display = "none";

    playButton.classList.add("videoControls");
    pauseButton.classList.add("videoControls");
    unmuteButton.classList.add("videoControls");
    muteButton.classList.add("videoControls");

    // BUTTON CONTENT

    let iconColor = videoPlayer.dataset["iconcolor"];

    if (iconColor !== "black" || iconColor !== "white") {
      iconColor = "black";
    }

    let iconHeight = 20;
    let iconWidth = 20;
    let iconsize = parseInt(videoPlayer.dataset["iconsize"]);

    if (iconsize > 0) {
      iconHeight = iconsize;
      iconWidth = iconsize;
    }

    playButton.innerHTML = `<span><img src=${controlIconsURL}/${iconColor}/play.png width="${iconWidth}" height="${iconHeight}" aria-label="Play"></span>`;
    pauseButton.innerHTML = `<span><img src=${controlIconsURL}/${iconColor}/pause.png width="${iconWidth}" height="${iconHeight}" aria-label="Pause"></span>`;
    unmuteButton.innerHTML = `<span><img src=${controlIconsURL}/${iconColor}/mute.png width="${iconWidth}" height="${iconHeight}" aria-label="Mute"></span>`;
    muteButton.innerHTML = `<span><img src=${controlIconsURL}/${iconColor}/unmute.png width="${iconWidth}" height="${iconHeight}" aria-label="Unmute"></span>`;

    // topLayer.appendChild(enterSite)

    const controlLayer = document.querySelector(
      'div.sdc-custom-video-player[data-projectname="' +
      videoPlayer.dataset["projectname"] +
      '"]'
    );
    // console.log("controlLayer by data-attribute query ", controlLayer);
    controlLayer.appendChild(playButton);
    controlLayer.appendChild(pauseButton);
    controlLayer.appendChild(unmuteButton);
    controlLayer.appendChild(muteButton);

    // Toggle the video contols
    playButton.style.display = "none";
    pauseButton.style.display = "initial";
    unmuteButton.style.display = "initial";
    // muteButton.style.display = "initial";

    addButtonEventListeners(
      videoPlayer.dataset["projectname"],
      videoPlayerElement
    );
  }

  function addButtonEventListeners(projectname, videoPlayerElement) {
    const playButton = document.querySelector(`#${projectname}-playButton`);
    const pauseButton = document.querySelector(`#${projectname}-pauseButton`);
    const unmuteButton = document.querySelector(`#${projectname}-unmuteButton`);
    const muteButton = document.querySelector(`#${projectname}-muteButton`);

    playButton.addEventListener(
      "click",
      function (e) {
        cc("playButton clicked", "info");
        playButton.style.display = "none";
        pauseButton.style.display = "initial";
        videoPlayerElement.play();
        videoPlayerElement.classList.add("watching");
      },
      false
    );

    pauseButton.addEventListener(
      "click",
      function (e) {
        cc("pauseButton clicked", "info");
        pauseButton.style.display = "none";
        playButton.style.display = "initial";
        videoPlayerElement.pause();
        videoPlayerElement.classList.remove("watching");
      },
      false
    );

    unmuteButton.addEventListener(
      "click",
      function (e) {
        unmuteButton.style.display = "none";
        muteButton.style.display = "initial";
        videoPlayerElement.muted = false;
        videoPlayerElement.classList.add("listening");
      },
      false
    );

    muteButton.addEventListener(
      "click",
      function (e) {
        muteButton.style.display = "none";
        unmuteButton.style.display = "initial";
        videoPlayerElement.muted = true;
        videoPlayerElement.classList.remove("listening");
      },
      false
    );
  }
  // function initVideoAutoplay() {
  //   console.log("#### initVideoAutoplay initiated #####");

  //   // buildVideoPlayer();
  //   setTimeout(function() {
  //     buildVideoPlayer();
  //   }, 1000);
  // }

  function buildVideoPlayer(videoPlayer) {
    // console.log("buildVideoPlayer", videoPlayer);
    // console.log(`${videoPlayer.dataset["projectbaseurl"]}`);

    // VIDEO PLAYER
    var videoHolder = document.createElement("figure");
    videoHolder.id = `${videoPlayer.dataset["projectname"]}-video-holder`;
    var videoPlayerElement = document.createElement("video");
    videoPlayerElement.id = `${videoPlayer.dataset["projectname"]}-video-player`;

    // VIDEO SETTINGS
    // OPTIONS
    videoPlayerElement.setAttribute(
      "poster",
      `${videoPlayer.dataset["projectbaseurl"]}${videoPlayer.dataset["projectname"]}.jpg`
    );

    if (videoPlayer.dataset["muteplayback"] == "true") {
      videoPlayerElement.muted = true;
    } else {
      videoPlayerElement.muted = false;
    }

    if (videoPlayer.dataset["playbackinline"] == "true") {
      videoPlayerElement.setAttribute("playsinline", "null");
      videoPlayerElement.setAttribute(
        "webkit-playsinline",
        "webkit-playsinline"
      );
    }

    if (videoPlayer.dataset["usecustomcontrols"] != "true") {
      videoPlayerElement.setAttribute("controls", "true");
      // console.log("!! custom controls");
    }

    if (videoPlayer.dataset["loopplayback"] == "true") {
      videoPlayerElement.setAttribute("loop", "true");
      // console.log("!! looping is enabled");
    }

    if (videoPlayer.dataset["disablepip"] == "true") {
      videoPlayerElement.setAttribute("disablePictureInPicture", "true");
      // console.log("!! pip is disabled");
    }

    if (videoPlayer.dataset["disabledownload"] == "true") {
      videoPlayerElement.setAttribute("controlsList", "nodownload");
      // console.log("!! download is disabled");
    }

    if (videoPlayer.dataset["disablefullscreen"] == "true") {
      videoPlayerElement.setAttribute("controlsList", "nofullscreen");
      // console.log("!! fullscreen is disabled");
    }

    if (videoPlayer.dataset["disablefullscreen"] == "true" && videoPlayer.dataset["disabledownload"] == "true") {
      videoPlayerElement.setAttribute("controlsList", "nofullscreen, nodownload");
      // console.log("!! fullscreen and download are disabled");
    }

    // DYNAMIC STYLES
    // var device = getDevice();
    videoHolder.style.width = "100%";
    videoHolder.style.height = "auto";
    videoHolder.style.position = "relative";
    videoPlayerElement.style.width = "100%";
    videoPlayerElement.style.height = "auto";

    // videoPlayer.loop = true;

    // Set the video file URLs.
    // If videos are dynamically chosen based on a parameter, add that switch code here and dynamically generate the URL
    // Example:
    // var videoSrcMP4 = `${device.name}-${device.orientation}`
    // var videoSrcWEBM = `${device.name}-${device.orientation}`

    var videoSrcMP4 = `${videoPlayer.dataset["projectbaseurl"]}${videoPlayer.dataset["projectname"]}.mp4`;
    var videoSrcWEBM = `${videoPlayer.dataset["projectbaseurl"]}${videoPlayer.dataset["projectname"]}.webm`;
    // console.log(videoSrcMP4);
    // If no webm file was supplied use an online converter such as https://video.online-convert.com/convert-to-webm

    // NOTE - ogg file types generally not needed depending on support
    // var videoSrcOGG = "https://vulcan-html-statics.s3.us-west-1.amazonaws.com/video/iPhone6Plus/Smileshop-iPhone6Plus.ogg";

    videoPlayerElement.innerHTML =
      '<source src="' +
      videoSrcMP4 +
      '" type="video/mp4"><source src="' +
      videoSrcWEBM +
      '" type="video/webm">';
    // IF ogg file type support needed, add the support:
    // videoPlayer.innerHTML += '<source src="video/movie-landscrape.ogg" type="video/ogg">'

    // console.log('videoSrc: ' + videoSrcMP4);
    // console.log("videoPlayerElement", videoPlayerElement);

    // Put the <video> inside the <figure> element
    videoHolder.appendChild(videoPlayerElement);
    // console.log("videoHolder", videoHolder);

    // If binding to a modal or other overlay element
    // topLayer.appendChild(videoHolder);

    // Query DOM element where the video player should be placed, then append the holder (that contains the player)

    videoPlayer.appendChild(videoHolder);
    // console.log("videoHolder", videoHolder);

    // IF player requires contols
    if (videoPlayer.dataset["usecustomcontrols"] == "true") {
      buildVideoPlayerControls(videoPlayer, videoPlayerElement);
    }

    // PLAY the video - this is the magic - initiating playing the video as a solution to autoplay that works on mobile
    if (videoPlayer.dataset["autoplayonload"] == "true") {
      // console.log('videoPlayer.dataset["autoplayonload"] TRUE.');
      playIfOnscreen(videoPlayer, videoPlayerElement);
    } else {
      // console.log('videoPlayer.dataset["autoplayonload"] FALSE.');
    }

    function simulatePlayClick() {
      console.log("body el was clicked DISABLED");
      // console.log("simulatePlayClick using videoPlayer.play");
      // videoPlayerElement.play();
      playIfOnscreen(videoPlayer, videoPlayerElement);
    }
    if(videoPlayer.dataset["autoplayonload"] == "true"){
      const el = document.querySelector("body");
      el.addEventListener("click", simulatePlayClick, {
        once: true,
        passive: true
      });
    }

    // if (videoPlayer.dataset["mobileautoplay"];){
    //   console.log('use click event to trigger playback')

    // }
  }
}
