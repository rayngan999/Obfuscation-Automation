'use strict';

define(['jquery', 'apiService', 'brandsiteUtils', 'brandsiteConstants', 'sessionUtils','watchlistUtils','returnsCalculatorChart'],
  function($, apiService, brandsiteUtils, constants, sessionUtils,watchlistUtils,returnsCalculatorChart) {
  $(document).ready(function() {
    init();
    $('#js-navList a').each(function() {
      var destn = $(this).attr('href');
      if (destn.includes("doc.utimf.com")) {
   
          var maindes = destn.split('/');
          maindes.pop();
          maindes = maindes.join('/');
          $(this).attr('href', maindes);
          $(this).attr('target', '_blank');
      } else {
   
      }
   });
  });

  function init() {
    //Download App pop funtion
    $(function () {
      if (localStorage.getItem('popState') != 'shown') {
        // brandsiteUtils.openHomePopModal('Have you downloaded the UTI Mutual Fund App yet?');Ã
      }

      $('.home-pop-close').click(function (e) {
        $('#js-home-pop-dialog').modal('close');
          localStorage.setItem('popState', 'shown');
      });
    });
    //Moved to header file  
    // if($('#js-page-footer > div.container.white-text > div.footer-container.row > div.col.m9.s12 > div > div:nth-child(5) > ul > li:nth-child(5) > a')[0].href.endsWith('/')){
    //   let newUrl = $('#js-page-footer > div.container.white-text > div.footer-container.row > div.col.m9.s12 > div > div:nth-child(5) > ul > li:nth-child(5) > a')[0].href.split('pdf');
    //   $('#js-page-footer > div.container.white-text > div.footer-container.row > div.col.m9.s12 > div > div:nth-child(5) > ul > li:nth-child(5) > a')[0].href = newUrl[0] + 'pdf';
    // }

    $('#js-home-pop-cta').click(function (e) {
      $('#js-home-pop-cta').attr('disabled', true);
      var MobileNo = $("#js-home-pop-mobile-no").val();
      var mobilereg = new RegExp('^[6-9]{1}[0-9]{9}$')
      if(mobilereg.test(MobileNo)){
        $('.js-error-for-mobile-no').text('');
        var smsParams = {
          'mobile_number': MobileNo,
          'message': 'Thank you for your interest in UTI Mutual Fund mobile app. Click on the link to download the app now https://utimutualfunds.onelink.me/4261528944?pid=SMS&c=missed_call Mutual fund investments are subject to market risks, read all scheme related documents carefully.'
        };
        apiService.getRequest('SENDSMS', smsParams)
        .done(function(data) {
          $('#js-home-pop-cta').attr('disabled', false);
          $('#js-home-pop-dialog').modal('close');
        }).fail(function(err) {
          $('#js-home-pop-cta').attr('disabled', false);
          console.error(err);
        });
      }else{
        $('.js-error-for-mobile-no').text('Enter a valid mobile number');
      }
      localStorage.setItem('popState', 'shown');
    });

    $("#HomePageFund1").on("click", () => {
      dofaCodePage(".js-invest-btn-with-dofa-1 > button", "193");
    });

    $("#HomePageFund2").on("click", () => {
      dofaCodePage(".js-invest-btn-with-dofa-2 > button", "160");
    });

    $("#HomePageFund3").on("click", () => {
      dofaCodePage(".js-invest-btn-with-dofa-3 > button", "042");
    });

    $("#HomePageFund4").on("click", () => {
      dofaCodePage(".js-invest-btn-with-dofa-4 > button", "017");
    });

    $("#HomePageFund5").on("click", () => {
      dofaCodePage(".js-invest-btn-with-dofa-5 > button", "078");
    });

    const dofaCodePage = (index, dofaCode) => {
      let loaclscope = $(index);

      loaclscope[0].dataset.dofaSchemeCode = dofaCode;
    };

   var request = '',fundname;
    if (window.location.href.indexOf('#HomePageFund1') > -1) {
      $('#HomePageFund1').addClass('active');
      $('#fund-1').addClass('active');
      dofaCodePage(".js-invest-btn-with-dofa-1 > button", "193");
      $('html,body').animate({
        scrollTop: ($('#HomePageFund1').offset().top) - 180
      }, 500);
    }else if (window.location.href.indexOf('#HomePageFund2') > -1) {
      $('#HomePageFund1').removeClass('active');
      $('#fund-1').removeClass('active');
      $('#HomePageFund2').addClass('active');
      $('#fund-2').addClass('active');
      request ='index=2';
      fundname = 'fund-2'
      apiService.getRequest("GETTOPPODUCTBYINDEX", request).done(function(e){
        $('#fund-2').find(".js-product-wrap").html(e).removeClass("show-loader");
        var n=$('#fund-2').find(".js-plan-options select").find(":selected").data("productId");
        $('#fund-2').find('[data-chart-header="'+fundname+'"]').find(".js-product-id").val(n),
        $("#js-performance-chart-wrapper-"+fundname).data("chartLoaded",!0),returnsCalculatorChart.makeTopProductsChart(fundname),
        $("select").material_select(),watchlistUtils.checkWatchlistStatus($('#fund-2'))
      })
      dofaCodePage(".js-invest-btn-with-dofa-2 > button", "160");
      $('html,body').animate({
        scrollTop: ($('#HomePageFund1').offset().top) - 180
      }, 500);
    }else if (window.location.href.indexOf('#HomePageFund3') > -1) {
      $('#HomePageFund1').removeClass('active');
      $('#fund-1').removeClass('active');
      $('#HomePageFund3').addClass('active');
      $('#fund-3').addClass('active');
      request ='index=3';
      fundname = 'fund-3'
      apiService.getRequest("GETTOPPODUCTBYINDEX", request).done(function(e){
        $('#fund-3').find(".js-product-wrap").html(e).removeClass("show-loader");
        var n=$('#fund-3').find(".js-plan-options select").find(":selected").data("productId");
        $('#fund-3').find('[data-chart-header="'+fundname+'"]').find(".js-product-id").val(n),
        $("#js-performance-chart-wrapper-"+fundname).data("chartLoaded",!0),returnsCalculatorChart.makeTopProductsChart(fundname),
        $("select").material_select(),watchlistUtils.checkWatchlistStatus($('#fund-3'))
      })
      dofaCodePage(".js-invest-btn-with-dofa-3 > button", "042");
      $('html,body').animate({
        scrollTop: ($('#HomePageFund1').offset().top) - 180
      }, 500);
    }else if (window.location.href.indexOf('#HomePageFund4') > -1) {
      $('#HomePageFund1').removeClass('active');
      $('#fund-1').removeClass('active');
      $('#HomePageFund4').addClass('active');
      $('#fund-4').addClass('active');
      request ='index=4';
      fundname = 'fund-4'
      apiService.getRequest("GETTOPPODUCTBYINDEX", request).done(function(e){
        $('#fund-4').find(".js-product-wrap").html(e).removeClass("show-loader");
        var n=$('#fund-4').find(".js-plan-options select").find(":selected").data("productId");
        $('#fund-4').find('[data-chart-header="'+fundname+'"]').find(".js-product-id").val(n),
        $("#js-performance-chart-wrapper-"+fundname).data("chartLoaded",!0),returnsCalculatorChart.makeTopProductsChart(fundname),
        $("select").material_select(),watchlistUtils.checkWatchlistStatus($('#fund-4'))
      })
      dofaCodePage(".js-invest-btn-with-dofa-4 > button", "017");
      $('html,body').animate({
        scrollTop: ($('#HomePageFund1').offset().top) - 180
      }, 500);
    }else if (window.location.href.indexOf('#HomePageFund5') > -1) {
      $('#HomePageFund1').removeClass('active');
      $('#fund-1').removeClass('active');
      $('#HomePageFund5').addClass('active');
      $('#fund-5').addClass('active');
      request ='index=5';
      fundname = 'fund-5'
      apiService.getRequest("GETTOPPODUCTBYINDEX", request).done(function(e){
        $('#fund-5').find(".js-product-wrap").html(e).removeClass("show-loader");
        var n=$('#fund-5').find(".js-plan-options select").find(":selected").data("productId");
        $('#fund-5').find('[data-chart-header="'+fundname+'"]').find(".js-product-id").val(n),
        $("#js-performance-chart-wrapper-"+fundname).data("chartLoaded",!0),returnsCalculatorChart.makeTopProductsChart(fundname),
        $("select").material_select(),watchlistUtils.checkWatchlistStatus($('#fund-5'))
      })
      dofaCodePage(".js-invest-btn-with-dofa-5 > button", "078");
      $('html,body').animate({
        scrollTop: ($('#HomePageFund1').offset().top) - 180
      }, 500);
    }
    if (window.location.search) {
      var CVLResponse = brandsiteUtils.getURLParamsObj(window.location.search);
      var CVLRedirectUrl;
      if (CVLResponse.hasOwnProperty('eToken') && CVLResponse.hasOwnProperty('refId')) {
        if (CVLResponse.status === 'AuthToken')
          CVLRedirectUrl = constants.getUrl('CVLREDIRECT') + CVLResponse.refId + "/" + CVLResponse.eToken;
        else if (CVLResponse.status === 'Success') {
          if (sessionUtils.checkLoginWithoutPopup())
            CVLRedirectUrl = window.location.origin.toString() + constants.getUrl('KYCSUCCESS');
          else
            CVLRedirectUrl = window.location.origin.toString() + constants.getUrl('KYCSUCCESSPRELOGIN');          
        } else
          CVLRedirectUrl = window.location.origin.toString() + constants.getUrl('KYCFAIL');
      }
      if (CVLResponse.status !== 'AuthToken')
        saveCVLResponse(CVLResponse);
      if(CVLRedirectUrl != undefined){
        window.location.href = CVLRedirectUrl;
      }
    }
  }

  function saveCVLResponse(CVLResponse) {
    apiService
    .postRequest('SAVECVLRESPONSE', CVLResponse)
    .then(function() {      
      console.log(CVLResponse);
    })
    .fail(function(err) {
      console.error(err);
    });
  }
});
