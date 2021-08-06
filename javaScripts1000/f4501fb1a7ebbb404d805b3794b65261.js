var expandedPanel = document.getElementById('collapsed');
var exitBtn = document.getElementById('exit');
var isiExit = document.getElementById('isiExit');

var trio_seemore = document.getElementById('trio_seemore');
var cdr_seemore = document.getElementById('cdr_seemore');

var trio_close = document.getElementById('trio_close');
var cdr_close = document.getElementById('cdr_close');

var trio_cta = document.getElementById('trio_cta');
var cdr_cta = document.getElementById('cdr_cta');

var trioPanel = document.getElementById('trioPanel');
var cdrPanel = document.getElementById('cdrPanel');

var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');

var scrollHolder;
var noInteraction = true;

$("#scrolText").niceScroll({
    cursorcolor: "#000000",
    cursorwidth: "10px",
    autohidemode: false,
    cursorborder: "0px solid #000000",
    cursorminheight: 10,
    railpadding: { top: 5, right: 0, bottom: 3 },
    scrollspeed: 400, // scrolling speed
    mousescrollstep: 7
});


function addListeners() {
	exitBtn.addEventListener('mouseenter', userInteraction, false);
	exitBtn.addEventListener('click', exitHandler, false);
  
  link1.addEventListener('click', label_Credelio_click, false);
  link2.addEventListener('click', label_Interceptor_click, false);
	
    trio_cta.addEventListener('click', exitCta, false);
    cdr_cta.addEventListener('click', exitCta, false);
  
    // hover effects
    trio_seemore.addEventListener('mouseenter', hoverTrio, false);
    cdr_seemore.addEventListener('mouseenter', hoverCDR, false);
    
    trio_close.addEventListener('mouseenter', hoverTrioInverse, false);
    cdr_close.addEventListener('mouseenter', hoverCDRInverse, false);
    
}

function animationsTrio(){
  gsap.to("#trioPanel", {left:"0px", duration: 0.5});
  gsap.to("#leftPanel", {autoAlpha:0, duration: 0.2});
  gsap.to("#trio_seemore", {autoAlpha:0, duration: 0.2, delay:0.5});
  gsap.to(["#trio_close", "#thumbUp3"], {autoAlpha:1, duration: 0.2, delay:0.5});

  gsap.to(["#trio_copy1", "#trio_thumb1"], {opacity:1, duration: 0.5, delay:1});
  gsap.to(["#trio_copy2", "#trio_thumb2"], {opacity:1, duration: 0.5, delay:2});
  gsap.to("#trio_cta", {opacity:1, scale:1, duration: 0.3, ease:"back", delay:3});

  gsap.to("#thumbUp3", 0.1, {rotation:16, yoyo:true, repeat:7, delay:5});
}
function animationsCDR(){
  gsap.to("#cdrPanel", {left:"241px", duration: 0.5});
    gsap.to("#cdr_seemore", {autoAlpha:0, duration: 0.2, delay:0.5});
    gsap.to("#cdr_close", {autoAlpha:1, duration: 0.2, delay:0.5});
    
    gsap.to(["#cdr_copy1", "#cdr_thumb1"], {opacity:1, duration: 0.5, delay:1});
    gsap.to(["#cdr_copy2", "#cdr_thumb2"], {opacity:1, duration: 0.5, delay:2});
    gsap.to("#cdr_cta", {autoAlpha:1, scale:1, duration: 0.3, ease:"back", delay:3});
    
    gsap.to("#cdr_cta", 0.1, {scale:0.9, yoyo:true, repeat:5, delay:5});
}

// Hover effect Functions
function hoverTrio() {
    noInteraction = false;
    animationsTrio();
    hoverCDRInverse();
}
function hoverTrioInverse() {
  gsap.to("#trioPanel", {left:"245px", duration: 0.5});
  gsap.to(["#trio_seemore", "#leftPanel"], {autoAlpha:1, duration: 0.2, delay:0.5});
  gsap.to(["#trio_close", "#thumbUp3"], {autoAlpha:0, duration: 0.2, delay:0.5});
  
  gsap.to(["#trio_copy1", "#trio_thumb1"], {opacity:0, duration: 0, delay:0.6});
  gsap.to(["#trio_copy2", "#trio_thumb2"], {opacity:0, duration: 0, delay:0.6});
  gsap.to("#trio_cta", {opacity:0, scale:0.5, duration: 0, ease:"back", delay:0.6});
}

function hoverCDR() {
    noInteraction = false;
    animationsCDR();
    hoverTrioInverse();
}
function hoverCDRInverse() {
  gsap.to("#cdrPanel", {left:"481px", duration: 0.5});
  gsap.to("#cdr_seemore", {autoAlpha:1, duration: 0.2, delay:0.5});
  gsap.to(["#cdr_close", "#cdr_cta"], {autoAlpha:0, duration: 0.2, delay:0.5});
  
  gsap.to(["#cdr_copy1", "#cdr_thumb1"], {opacity:0, duration: 0, delay:0.6});
  gsap.to(["#cdr_copy2", "#cdr_thumb2"], {opacity:0, duration: 0, delay:0.6});
  gsap.to("#cdr_cta", {autoAlpha:0, scale:0.5, duration: 0, ease:"back", delay:0.6});
}

// Exit
function exitHandler() {
  Enabler.exit('Click Exit');
}

function exitCta() {
  Enabler.exit('Click See the Difference');
}
function label_Credelio_click(e) {
    //Call Exits
    Enabler.exit('label_Credelio');
}
function label_Interceptor_click(e) {
    //Call Exits
    Enabler.exit('label_Interceptor');
}
function userInteraction() {
  noInteraction = false;
}

 //Close add if no user interaction
setTimeout(function(){
        if(noInteraction){
            actionClickHandler();    
        }
    }, 8500);

// Expand code

var isExpanded = true;

function expandStartHandler() {
  // Perform expand animation.
  gsap.to('#expanded-panel', { top: 0, duration: 0.5 });
  gsap.to('#collapsed-panel', { opacity: 0, duration: 0.5 });

  addListeners();

  // When animation finished must call
  Enabler.finishExpand();
}

function expandFinishHandler() {
  // Convenience callback for setting
  // final state when expanded.
  isExpanded = true;
}

function collapseStartHandler() {
  // Perform collapse animation.
  gsap.to('#expanded-panel', { top: '-100%', duration: 0.2 });
  document.getElementById('collapsed-panel').style.opacity = 1;
  // When animation finished must call
  Enabler.finishCollapse();
}

function collapseFinishHandler() {
  // Convenience callback for setting
  // final state when collapsed.
  isExpanded = false;
}

function actionClickHandler() {
  isExpanded ? Enabler.requestCollapse() : Enabler.requestExpand();
}

Enabler.addEventListener(
  studio.events.StudioEvent.EXPAND_START,
  expandStartHandler);

Enabler.addEventListener(
  studio.events.StudioEvent.EXPAND_FINISH,
  expandFinishHandler);

Enabler.addEventListener(
  studio.events.StudioEvent.COLLAPSE_START,
  collapseStartHandler);

Enabler.addEventListener(
  studio.events.StudioEvent.COLLAPSE_FINISH,
  collapseFinishHandler);

document.getElementById('collapseBtn').addEventListener('click', actionClickHandler, false);
document.getElementById('expandBtn').addEventListener('click', actionClickHandler, false);
