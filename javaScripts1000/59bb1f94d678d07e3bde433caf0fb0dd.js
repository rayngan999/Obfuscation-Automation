
// Reference to the creative's various properties and elements.
var creative = {};

var tl;

/**
 * Called on the window load event.
 */
function preInit() {
 // alert("jhhfdds")

  setupDom();
  if (!Enabler.isInitialized()) {
  Enabler.addEventListener(
    studio.events.StudioEvent.INIT,
    enablerInitialized);
} else {
   enablerInitialized();
}
}



function enablerInitialized() {
  // Enabler initialized.
  // In App ads are rendered offscreen so animation should wait for
  // the visible event. These are simulated with delays in the local
  // environment.
  if (!Enabler.isVisible()) {
    Enabler.addEventListener(
      studio.events.StudioEvent.VISIBLE,
      adVisible);
  } else {
     adVisible();
  }
}



function addListeners() {
  creative.dom.exit.addEventListener('click', exitClickHandler);
}

function exitClickHandler() {
//alert("ff")
  Enabler.exit('Background Exit', document.getElementById('bg-exit').alt);

}

/**
 * Set up references to DOM elements.
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('container');
  creative.dom.exit = document.getElementById('bg-exit');
  creative.dom.image0 = document.getElementById('main-img-0');
	creative.dom.loaderframe = document.getElementById('loaderframe');

}
function adVisible() {
  creative.dom.exit.style.display = "block";
  creative.dom.mainContainer.style.display = "block";
  creative.dom.loaderframe.style.display  = 'none';
  addListeners();
  tl = new TimelineLite();

  dynContent();
  
}




//ANIMATE
function animate(){
   stopWatch=new Date().getTime();

   //timeline animation here
   tl
  .add( function(){
      var tl= new TimelineLite()
      tl.to([bg, logo1],{opacity:1})
	  .to([frame1_bg_optimized],.5, {right:"-10px"}, "-=2")
	   .to([frame1_bg_optimized],.7, {right:"0px", opacity:1,ease:Quad.easeInOut}, "-=.8")
	   .fromTo([frame1_deco1_optimized_1],1,{left:"-400px"},{left:"0px", opacity:1,ease:Quad.easeInOut}, "-=.8")
       .fromTo([frame1_deco2_optimized_1],1,{left:"-400px"},{left:"0px", opacity:1,ease:Quad.easeInOut}, "-=.8")       
       .to([frame1_copy1],.7,{top:"88px", opacity:1,ease:Quad.easeInOut}, "-=.4")
       .to([frame1_copy2],.7,{top:"117px", opacity:1,ease:Quad.easeInOut}, "-=.5")
	   .to([frame1_copy3],.7,{top:"143px", opacity:1,ease:Quad.easeInOut}, "-=.6")
       .to([disclaimer1],.5,{opacity:1, ease:Quad.easeOut}, "-=.5")
		.to([frame1_copy1, frame1_copy2, frame1_copy3, disclaimer1, frame1_deco2_optimized_1, frame1_deco1_optimized_1, frame1_bg_optimized],1,{opacity:0,ease:Quad.easeOut, x:0}, "+=1")
       /*frame 2*/
       .fromTo([frame2_ppl_optimized],.5,{left:"-80px"},{left:"0px", opacity:1,ease:Quad.easeOut}, "+=.2")
	   .fromTo([frame2_bg_optimized_1],.5,{right:"-400px"},{right:"0px", opacity:.8,ease:Quad.easeInOut}, "-=.2")
	   .to([frame2_copy1, frame2_copy2, frame2_copy3],.5,{opacity:1,ease:Quad.easeInOut}, "-=0")
       //.to([frame2_copy1],.7,{right:"127px", opacity:1,ease:Quad.easeInOut}, "-=.2")
       //.to([frame2_copy2],.7,{right:"127px", opacity:1,ease:Quad.easeInOut}, "-=.6")
	   //.to([frame2_copy3],.7,{right:"127px", opacity:1,ease:Quad.easeInOut}, "-=.6")
       .to([disclaimer2],.5,{opacity:1, ease:Quad.easeOut}, "-=.5")
		.to([frame2_copy1, frame2_copy2, frame2_copy3, disclaimer2, frame2_bg_optimized_1, frame2_ppl_optimized],1,{opacity:0,ease:Quad.easeOut, x:0}, "+=2.5")
       /*frame 3*/
       .fromTo([frame3_ppl_optimized],.7,{top:"-80px"},{top:"0px", opacity:1,ease:Quad.easeOut}, "-=.8")
	   .fromTo([frame3_bg_optimized],.7,{top:"0px"},{bottom:"0px", opacity:.8,ease:Quad.easeInOut}, "-=.4")
	   .to([frame3_copy1, frame3_copy2, frame3_copy3],.4,{opacity:1,ease:Quad.easeInOut}, "-=.3")
       //.to([frame3_copy1],.7,{top:"97px", opacity:1,ease:Quad.easeInOut})
       //.to([frame3_copy2],.7,{top:"110px", opacity:1,ease:Quad.easeInOut}, "-=.6")
	   //.to([frame3_copy3],.7,{top:"125px", opacity:1,ease:Quad.easeInOut}, "-=.6")
       .to([disclaimer3],.5,{opacity:1, ease:Quad.easeOut}, "-=.5")
		.to([frame3_copy1, frame3_copy2, frame3_copy3, disclaimer3, frame3_bg_optimized, frame3_ppl_optimized],1,{opacity:0,ease:Quad.easeOut, x:0}, "+=2.5")
       /*frame 4*/
	   .fromTo([frame4_ppl_optimized],1,{top:"-80px"},{top:"0px", opacity:1,ease:Quad.easeInOut}, "-=.8")
       .fromTo([frame4_bg_optimized],.7,{bottom:"-80px"},{bottom:"0px", opacity:.8,ease:Quad.easeOut}, "-=.4")
	   .fromTo([frame4_deco1_optimized_1],1,{left:"-400px"},{left:"0px", opacity:1,ease:Quad.easeInOut}, "-=.8") 
	   .fromTo([frame4_deco2_optimized_1],1,{left:"-400px"},{left:"0px", opacity:1,ease:Quad.easeInOut}, "-=.8")
	   .to([frame4_copy1, frame4_copy2, frame4_copy3],.4,{opacity:1,ease:Quad.easeInOut}, "-=.7")
       //.to([frame4_copy1],.7,{top:"72px", opacity:1,ease:Quad.easeInOut})
       //.to([frame4_copy2],.7,{top:"90px", opacity:1,ease:Quad.easeInOut}, "-=.6")
	   //.to([frame4_copy3],.7,{top:"100px", opacity:1,ease:Quad.easeInOut}, "-=.6")
       .to([disclaimer4],.5,{opacity:1, ease:Quad.easeOut}, "-=.5")
	   .to([frame4_copy2],.2,{scaleX:1.1, scaleY:1.1})
	   .to([frame4_copy2],.5,{scaleX:1, scaleY:1})
		.to([frame4_copy1, frame4_copy2, frame4_copy3, disclaimer4, frame4_bg_optimized, frame4_deco1_optimized_1, frame4_deco2_optimized_1, frame4_ppl_optimized],1,{opacity:0,ease:Quad.easeOut, x:0}, "+=2.5")
       /*frame 5*/
       .fromTo([frame5_bg1_optimized],.5,{right:"-40px"},{right:"0px", opacity:.8,ease:Quad.easeOut}, "+=.8")
	   .fromTo([frame5_bg2_optimized],.5,{right:"-400px"},{right:"0px", opacity:1,ease:Quad.easeInOut}, "-=.8")         
      //  .fromTo([frame5_copy1],.3,{left:"0px",top:"92px"},{top:"92px",left:"284px", opacity:1,ease:Quad.easeInOut})
      //  .fromTo([frame5_copy2],.3,{left:"0px",top:"120px"},{top:"120px",left:"284px", opacity:1,ease:Quad.easeInOut})
      .fromTo([frame5_copy1, frame5_copy2],.3,{left:"0px"},{left:"281px", opacity:1,ease:Quad.easeInOut})

       .to([frame5_cta],.5,{left:"285px",opacity:1, ease:Quad.easeOut}, "-=.5")
	   .to([frame5_copy2],.2,{scaleX:1.1, scaleY:1.1}, "+=.5")
	   .to([frame5_copy2],.5,{scaleX:1, scaleY:1})
       .to([disclaimer5],.5,{opacity:1, ease:Quad.easeOut}, "-=.5")
   })
}

//IIFE TO EXTRACT DIMENSION DATA
var dimensions = (function(){
        var str = document.querySelectorAll("[name='ad.size']")[0].getAttributeNode("content").value;
        var widthMatch = /width\=(\d+)/.exec(str);
        var heightMatch = /height\=(\d+)/.exec(str);
        return {
            width: parseInt(widthMatch[1]),
            height: parseInt(heightMatch[1])
        }
})();


var stopWatch;


setTimeout(function() {
var element = document.getElementById("loaderframe");
document.getElementById("loaderframe").style.display  = 'none';
  }, 800);


function returnTimer(){
    stopWatch=((new Date().getTime())-stopWatch)*.001;
    console.log(stopWatch+" seconds");
}


//SET IDs IN DOM TO GLOBAL VARIABLES
function IDsToVars(){
    var allElements = document.getElementsByTagName("*");
    
    for (var q = 0; q<allElements.length; q++){
         var el = allElements[q];
         if (el.id){
            window[el.id]=document.getElementById(el.id);
        }
    }
};

