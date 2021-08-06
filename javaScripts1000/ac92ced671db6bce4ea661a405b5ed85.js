<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Script</title>
<script>
/*! BEGIN: ENCAPSULATED FUNCTION **/
(function($, $$, window, document, undefined){

  var slidingDeals;
  var loopCounter = 0;
  var currentSlideIndex = 0;
  var magicNumberToClose = 0;
  var magicNumberToOpen = 0;
  var fireDesktop = true;
  var numberOfSlides = $('.promo-component .swiper-container .swiper-slide').length;

  var swiperOptions = function(sHeight, iSlide, sSpeed) {
      slidingDeals = new window.Swiper ($('.promo-component .swiper-container'), {
      initialSlide: iSlide,
      autoplay: numberOfSlides == 1 ? 0 : 2500,
      speed: sSpeed,
      loop: true,
      //keyboardControl: true,
      height: sHeight,
      autoHeight: true,
      slidesPerView: 1,
      direction: 'vertical',
      onInit: function(swiper) {
        if(numberOfSlides == 1) {
          $('.promo-component .swiper-container').addClass('swiper-no-swiping');
        }
        if(loopCounter >=3) {
          swiper.stopAutoplay();
        }
        /*! ADA - WCS-27532 **/
        $('.promo-component a').attr('tabindex','0');
        $('.promo-component a').each(function(){
          $(this).attr('title',$(this).text().toLowerCase());
        });
        $('.promo-component .details-text').each(function(){
          $(this).attr('title',$(this).parents('.swiper-slide').find('.primary-text').text().toLowerCase());
          $(this).attr('aria-label',$(this).parents('.swiper-slide').find('.primary-text').text().toLowerCase());
        });
        $('.promo-component .offer-code-text').each(function(){
          $(this).attr('title','Use offer code '+$(this).text()+' at checkout');
          $(this).attr('aria-label','Use offer code '+$(this).text()+' at checkout');
        });
      },
      onSlideChangeStart: function(swiper) {
        currentSlideIndex = swiper.realIndex;
      },
      onSlideChangeEnd: function(swiper) {
        var focusedEl = document.activeElement;
        if($(focusedEl).parents('.promo-component').length) {
          $('.promo-component .swiper-slide-active a:visible')[0].focus();
          $('.promo-component .swiper-slide-active a:visible').attr('tabindex','0');
          $('.promo-component .swiper-slide:not(.swiper-slide-active) a').attr('tabindex','-1');
        }
      },
      onReachEnd: function(swiper) {
        loopCounter++;
        if(loopCounter >=3) {
          swiper.stopAutoplay();
        }
      }
    });
  } 

  var swiperOptionsMobile = function() {
    slidingDeals = new window.Swiper ($('.promo-component .swiper-container'), {
      autoplay: numberOfSlides == 1 ? 0 : 2500,
      speed: 550,
      loop: true,
      keyboardControl: true,
      height: 53,
      autoHeight: true,
      slidesPerView: 1,
      direction: 'vertical',
      onInit: function(swiper) {
        if(numberOfSlides == 1) {
          $('.promo-component .swiper-container').addClass('swiper-no-swiping');
        }
        /*! ADA - WCS-27532 **/
        $('.promo-component a').attr('tabindex','0');
        $('.promo-component a').each(function(){
          $(this).attr('title',$(this).text().toLowerCase());
        });
        $('.promo-component .details-text').each(function(){
          $(this).attr('title',$(this).parents('.swiper-slide').find('.primary-text').text().toLowerCase());
          $(this).attr('aria-label',$(this).parents('.swiper-slide').find('.primary-text').text().toLowerCase());
        });
        $('.promo-component .offer-code-text').each(function(){
          $(this).attr('title','Use '+$(this).text()+' at checkout');
          $(this).attr('aria-label','Use '+$(this).text()+' at checkout');
        });
      },
      onReachEnd: function(swiper) {
        loopCounter++;
        if(loopCounter >=3) {
          swiper.stopAutoplay();
        }
      }
    })
  }

  var initSwiper = function(mgC, mgO) {
    if($(window).scrollTop() > mgC) {
      swiperOptions(mgO, currentSlideIndex, 1000);
    } else {
      swiperOptions(mgC, currentSlideIndex, 550);
    }
  }

  $(document).ready(function(){
    if($('html').hasClass('pwa-site') && !window.Swiper) {
      fireDesktop = false;
      $.getScript('/wcsstore/images/Cinmar/_wcm/js/plugins/idangerous.swiper3.min.js')
        .done(function(){
          swiperOptionsMobile();
      });
    }
      magicNumberToClose = $('html').hasClass('screen-lg-up') ? 30 : 48;
      magicNumberToOpen = $('html').hasClass('screen-lg-up') ? 67 : 69;

      if(fireDesktop) {
        $.getScript('/wcsstore/images/Cinmar/_wcm/js/plugins/idangerous.swiper3.min.js')
          .done(function(){
            initSwiper(magicNumberToClose, magicNumberToOpen);
        });
      }
  });

  $(window).scroll(function(){
    if(!window.isMobile && !$('html').hasClass('area-CheckOutArea') && slidingDeals != undefined) {
      if($(this).scrollTop() > 0 && slidingDeals.height == magicNumberToClose) {
        slidingDeals.destroy();
        swiperOptions(magicNumberToOpen, currentSlideIndex, 1000);
      } else if(slidingDeals.height == magicNumberToOpen && $(this).scrollTop() == 0){
        slidingDeals.destroy();
        swiperOptions(magicNumberToClose, currentSlideIndex, 550);
      }
    }
  });

  $(window).on('orientationchange', function(){
    if(!window.isMobile) {
      setTimeout(function(){
        magicNumberToClose = $('html').hasClass('screen-lg-up') ? 30 : 48;
        magicNumberToOpen = $('html').hasClass('screen-lg-up') ? 67 : 69;

        if(!$('html').hasClass('area-CheckOutArea') && slidingDeals != undefined) {
          if($(window).scrollTop() > 0 && slidingDeals.height != magicNumberToClose) {
            slidingDeals.destroy();
            swiperOptions(magicNumberToOpen, currentSlideIndex, 1000);
          } else if(slidingDeals.height != magicNumberToOpen && $(window).scrollTop() == 0){
            slidingDeals.destroy();
            swiperOptions(magicNumberToClose, currentSlideIndex, 550);
          }
        }
      }, 500)
    }
  });

  /*! LINK TRACKING **/
  $(document.body).on('click','.promo-component a', function(){
  	/*! IF ITS THE PROMO OR THE EXCLUSIONS LINK, IGNORE **/
  	if($(this).hasClass('anchor')) {
  		return true;
  	} else {
  		var slideID = $(this).closest('.swiper-slide').attr('data-swiper-slide-index');
  		var linkText = $(this).text();
      window.gtmTag('promo-banner','Slide #'+slideID,linkText);
  	}
  });

  $(document.body).off('click keypress','.promo-component .details-text').on('click keypress','.promo-component .details-text', function(e){

    if((e.type == 'keypress' && e.which == 13) || e.type == 'click') {
      var htmlToPass = '';
      var slideID = $(this).closest('.swiper-slide').data('swiper-slide-index') + 1;

      if(!window.isMobile) {
        htmlToPass = $(this).data('details-text').replace(/((?:<a[^>]+>)?(?:https?:\/\/)?www\.[^\s\"]+(?:<\/a>)?)/g,function(a){return/<a[^>]+>/.test(a)||(a='<a class="text-white" href="//'+a.replace(/^https?:\/\//,"")+'">'+a+"</a>"),a});
        if(!$('.promo-disclaimer-wrapper').hasClass('open-promo')){
          $('.promo-disclaimer-wrapper').show();
        }
        window.setPromotionalEspotDisclaimer(htmlToPass);
        window.togglePromotionalEspotDisclaimer();
      } else {
        htmlToPass = $(this).parent().parent().find('.details-text').eq(1).data('details-text').replace(/((?:<a[^>]+>)?(?:https?:\/\/)?www\.[^\s\"]+(?:<\/a>)?)/g,function(a){return/<a[^>]+>/.test(a)||(a='<a style="color:#fff;" href="//'+a.replace(/^https?:\/\//,"")+'">'+a+"</a>"),a});
        htmlToPass = '<div class="m-framework">'+htmlToPass+'</div>';
        if($('.m-promo_details_modal').length > 0) {
          window.setPromotionalEspotDisclaimer(htmlToPass);
          //window.togglePromotionalEspotDisclaimer();
        } else {
          window.setPromotionalEspotDisclaimer(htmlToPass);
          window.togglePromotionalEspotDisclaimer();
        }
        //window.goModal({html:htmlToPass, headless: true, width: 960, height: 500});
      }

      window.gtmTag('promo-banner','Slide #'+slideID,'Details Click');
    }

  });

  $(document.body).off('click keypress','.promo-component .offer-code-text').on('click keypress','.promo-component .offer-code-text', function(e){

    if((e.type == 'keypress' && e.which == 13) || e.type == 'click') {
      var promoCode = $(this).data('promo-code');
      var htmlToPass = 'Offer code <strong>'+promoCode+'</strong> has been applied.';
      var slideID = $(this).closest('.swiper-slide').data('swiper-slide-index') + 1;

      if(!window.isMobile) {
        /*! SET SOURCE CODE MIRROR, BASICALLY **/
        $.ajax({
          url: '/PromoCodeAtCheckout',
          type: 'POST',
          data: {'promoCode':promoCode,'isFromBanner':'true'}
        }).done(function(data) {
          var response = JSON.parse(data);
          var isValid = response.isValid;
          if(isValid == 'true') {
            var sourceCode = response.sourceCode;
            $('#sourceCode').text('Offer Code: '+sourceCode);
            if(window.breadcrumb.area == 'shopping-cart-area' || window.breadcrumb.area == 'check-out-area') {
              window.location = '/OrderCalculate?URL=/ShoppingCartView&updatePrices=1&calculationUsageId=-1&calculationUsageId=-2&calculationUsageId=-7&orderId=.';
            } else {
              if(!$('.promo-disclaimer-wrapper').hasClass('open-promo')){
                $('.promo-disclaimer-wrapper').show();
              }
              window.setPromotionalEspotDisclaimer(htmlToPass);
              window.togglePromotionalEspotDisclaimer();
            }
          } else {
            if(!$('.promo-disclaimer-wrapper').hasClass('open-promo')){
              $('.promo-disclaimer-wrapper').show();
            }
            htmlToPass = 'The Offer Code <strong>'+promoCode+'</strong> was not applied. Please enter a valid offer code.';
            window.setPromotionalEspotDisclaimer(htmlToPass);
            window.togglePromotionalEspotDisclaimer();
          }
        }).fail(function(){
          if(!$('.promo-disclaimer-wrapper').hasClass('open-promo')){
            $('.promo-disclaimer-wrapper').show();
          }
          htmlToPass = 'The Offer Code <strong>'+promoCode+'</strong> was not applied. Please enter a valid offer code.';
          window.setPromotionalEspotDisclaimer(htmlToPass);
          window.togglePromotionalEspotDisclaimer();
        });
      } else {
        window.setSourceCode(promoCode);
      }

      window.gtmTag('promo-banner','Slide #'+slideID,'Offer Code Click');
    }

  });

  /*! ADA - WCS-27532 **/
  $(document.body).on('focus','.swiper-slide-active a:visible, .swiper-slide-duplicate-active a:visible', function(e){
    if(slidingDeals.autoplaying) {
      slidingDeals.stopAutoplay();
    }
  });

  if(!window.isPWA) {
    $(window).on('keydown', function(e){
      if($('.promo-component a:visible').is(':focus') && (e.which == 38 || e.which == 40)) {
        e.preventDefault();
        if(e.which == 38) {
          slidingDeals.slidePrev();
        } else {
          slidingDeals.slideNext();
        }
      }
    });
  }

  /*! ADA - WCS-27532 **/
  $(document).on('soft-navigation', function(){
    loopCounter = 0;
    slidingDeals.startAutoplay();
  });


/*! END: ENCAPSULATED FUNCTION **/
}(parent.jQuery || (parent.jQuery = {}), parent.framework || (parent.framework = {}), parent.window, parent.document));
</script>

<script>(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"false","rua.cpush":"false","rua.upre":"false","rua.cpre":"false","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"","rua.cook":"false","rua.ims":"false","rua.ufprl":"false","rua.cfprl":"false","rua.isuxp":"false","rua.texp":"norulematch"}]);</script>
                              <script>!function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="887GX-Z3X8F-A5PYL-YXA4X-48ZZ4",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"887GX-Z3X8F-A5PYL-YXA4X-48ZZ4",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e=""=="true"?1:0,t="",n="o7wglkaxyzta6yiijfja-f-977152cef-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"32","ak.cp":"179561","ak.ai":parseInt("183670",10),"ak.ol":"0","ak.cr":15,"ak.ipv":4,"ak.proto":"h2","ak.rid":"cfd9fa0","ak.r":20734,"ak.a2":e,"ak.m":"x","ak.n":"essl","ak.bpcip":"119.236.101.0","ak.cport":57158,"ak.gh":"23.32.20.61","ak.quicv":"","ak.tlsv":"tls1.2","ak.0rtt":"","ak.csrc":"-","ak.acc":"","ak.t":"1627933010","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==IF9iF34186WNTQhmW8RjKq4ltHIvlpBWMwafucyi1rZl2HK79a5YHaDoLvGxM4W2kDakAELOQTIFeLl7xIybNChxoXYh0q5e5tgGYXIK5zfE0Zuoy15Cf+ujBUCT4F2fzuF1s6Fk8gUi0NQ5idgAQMkzrMpPHCeQM4NzUDhpZ/Lo85MTvvKsvDE7ZfjDPCQACfgyYifoFeZwuKNY/GGqBd24NzUlMHGU2EDeBTZKNCCCJq6LXako8ClsscD9McjACNXd2mYnEoTqrmy6KjXuAtyFaMkElsc+YjPY9XgIFqa4xswYr+NnjybpyEOSBrfrtzO7bhTKkohxNBxyk66jHiFlwrf2R1Csh2s4/dLKF82EKjp1SGKFjsblEnih3dw56U6jc8oyv77h05gxsYzS7eoWLaoR++1x/kc/uL0Gx8M=","ak.pv":"54","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script><script >bazadebezolkohpepadr="2057563237"</script><script type="text/javascript" src="https://www.frontgate.com/akam/11/7aa3efc7"  defer></script></head>
<body>
<noscript><img src="https://www.frontgate.com/akam/11/pixel_7aa3efc7?a=dD0wZGE1OTM4NTU3NDI1ZmExZTlmM2Q2YjZlZGI0ZWJjYjZjNGU3MWNkJmpzPW9mZg==" style="visibility: hidden; position: absolute; left: -999px; top: -999px;" /></noscript></body>
</html>
