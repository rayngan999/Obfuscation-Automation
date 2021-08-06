<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="ad.size" content="width=970,height=250">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <script src="/879366/Enabler_01_246.js" type="text/javascript"></script>

  <style>
    #main-panel {
      display: none;
      position: relative;
      top: 0;
      left: 0;
      z-index: 20;
      overflow: hidden;
    }
  </style>
  
  <script language="javascript">

    
    Enabler.setExpandingPixelOffsets(
      0, // left offset of expanded ad
      0, // top offset of expanded ad
      970, // expanded width of ad
      250); // expanded height of ad      
      
      Enabler.setStartExpanded(false);  

    //Initialize Enabler
    if (Enabler.isInitialized()) {
      init();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
    }
    //Run when Enabler is ready
    function init() {
      //Load in Javascript
      if (Enabler.isPageLoaded()) {
        politeInit();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
      }
    }

    function politeInit() {
        
      setTimeout(function(){
		Enabler.requestExpand();	
	   }, 1500);
        

      //Load in CSS
      var extCSS = document.createElement('link');
      extCSS.setAttribute("rel", "stylesheet");
      extCSS.setAttribute("type", "text/css");
      extCSS.setAttribute("href", Enabler.getUrl("style.css"));
      document.getElementsByTagName("head")[0].appendChild(extCSS);

      //Load in Javascript
      var extJavascript = document.createElement('script');
      extJavascript.setAttribute('type', 'text/javascript');
      extJavascript.setAttribute('src', Enabler.getUrl('script.js'));
      document.getElementsByTagName('head')[0].appendChild(extJavascript);
      setTimeout(function () {
            document.getElementById("main-panel").style.display = "block";
        }, 50);
      
    }
  </script>
</head>

<body>
  <div id="main-panel">
    <div id="collapsed-panel">
      <div id="expandBtn">
        <div id="showAd">Show Ad</div>
        <div id="plus">+</div>
      </div>
    </div>
    <div id="expanded-panel">
     
     <div id="leftPanel"></div>
     <div id="exit"></div>
     <div id="trioPanel">
       <div id="trio_product"></div>
       <div id="trio_copy1"></div>
       <div id="trio_copy2"></div>
       <div id="trio_thumb1" class="thumbs"></div>
       <div id="trio_thumb2" class="thumbs"></div>
       <div id="trio_cta"></div>
       <div id="trio_seemore"></div>
       <div id="trio_close"></div>
       <div id="openCloseTrio"></div>
     </div>
     <div id="cdrPanel">
       <div id="cdr_product"></div>
       <div id="cdr_copy1"></div>
       <div id="cdr_copy2"></div>
       <div id="cdr_thumb1" class="thumbs2"></div>
       <div id="cdr_thumb2" class="thumbs2"></div>
       <div id="cdr_cta"></div>
       <div id="cdr_seemore"></div>
       <div id="thumbUp3"></div>
       <div id="cdr_close"></div>
     </div>
     
     <div id="rightPanel"></div>
     
     
      <div id="collapseBtn">
        <div id="closeAd">
          Close Ad<span id="x">â</span>
        </div>
      </div> 
          <div id="scrollHolder" class="general">
                <div id="scrolText">
                    <div class="img-container">
                        <div class="copylegal">
                          <h1>CREDELIO AND INTERCEPTOR PLUS INDICATIONS AND IMPORTANT SAFETY INFORMATION</h1>
                          <h2>CREDELIO INDICATIONS</h2>
                          <p>
                            Credelio kills adult fleas and is indicated for the treatment and prevention of flea infestations (<i>Ctenocephalides felis</i>) and the treatment and control of tick infestations [<i>Amblyomma americanum</i> (lone star 
tick), <i>Dermacentor</i> <i>variabilis</i> (American dog tick), <i>Ixodes scapularis</i> (black-legged tick) and <i>Rhipicephalus sanguineus</i> (brown dog tick)] for one month in dogs and puppies 8 weeks of age and older and 
weighing 4.4 pounds or greater. 
                          </p>
                          <h2>CREDELIO IMPORTANT SAFETY INFORMATION</h2>
                          <p>Lotilaner is a member of the isoxazoline class. This class has been associated with neurologic adverse reactions including tremors, ataxia, and seizures. Seizures have been reported in dogs receiving this 
class of drugs, even in dogs without a history of seizures. Use with caution in dogs with a history of seizures or neurologic disorders. The safe use of Credelio in breeding, pregnant or lactating dogs has 
not been evaluated. The most frequently reported adverse reactions are weight loss, elevated blood urea nitrogen, polyuria, and diarrhea. For full prescribing information see Credelio <a href="#" id="link1">package insert</a></p>
                       <h2>INTERCEPTOR PLUS INDICATIONS</h2>
                       <p>Interceptor Plus is indicated for the prevention of heartworm disease caused by <i>Dirofilaria immitis</i> and for the treatment and control of adult roundworm (T<i>oxocara canis, Toxascaris leonina</i>), adult 
hookworm (<i>Ancylostoma caninum</i>), adult whipworm (<i>Trichuris vulpis</i>), and adult tapeworm (<i>Taenia pisiformis, Echinococcus multilocularis, Echinococcus granulosus</i> and <i>Dipylidium caninum</i>) infections in 
dogs and puppies 6 weeks of age or older and 2 pounds of body weight or greater. </p>
                       <h2>INTERCEPTOR PLUS IMPORTANT SAFETY INFORMATION </h2>
                       
                       <p>Treatment with fewer than 6 monthly doses after the last exposure to mosquitoes may not provide complete heartworm prevention. Prior to administration of Interceptor Plus, dogs should be tested for 
existing heartworm infections. The safety of Interceptor Plus has not been evaluated in dogs used for breeding or in lactating females. The following adverse reactions have been reported in dogs after 
administration of milbemycin oxime or praziquantel: vomiting, diarrhea, depression/lethargy, ataxia, anorexia, convulsions, weakness, and salivation. For full prescribing information see Interceptor Plus 
<a href="#" id="link2">package insert</a>.</p>
                       <p>*Simparica Trio protects against heartworm disease, roundworm and hookworm (<i>A. caninum, U. stenocephala</i>).</p>
                       <p><sup>1</sup>
Stafford K, et al. Parasite Vector. 2020;13:275.</p>
                       <p>Credelio and Interceptor are trademarks of Elanco or its affiliates. All other company and product names are trademarks of their respective owners.<br> Â© 2021 Elanco or its affiliates.</p>
                       <p>PM-US-21-1633(2)</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="bleft"></div>
            <div class="btop"></div>
            <div class="bright"></div>
            <div class="bbottom"></div>
    </div>
  </div>
  <script src="gsap.min.js" type="text/javascript"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.6.8-fix/jquery.nicescroll.min.js"></script>
</body>

</html>