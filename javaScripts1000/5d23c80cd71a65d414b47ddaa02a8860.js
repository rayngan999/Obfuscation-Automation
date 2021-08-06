"use strict";
define(["jquery", "sessionUtils"], function($, sessionUtils) {
  return {
    API_ENDPOINTS: {
      GETPRODUCTCOUNTBYCATEGORY: "/product/get-product-count-by-category/",
      GETDISTINCTPLANOPTIONCODES: "/product/get-distinct-plan-option-codes/",
      GETDISTINCTPLANOPTIONCODESDETAILSPAGE:
        "/product/get-distinct-plan-option-codes-details-page/",
      GETLISTPAGE: "/product/list-page/",
      GETSECTORALBREAKDOWN: "/product/get-sectoral-data/",
      GETASSETALLOCATION: "/product/get-portfolio-data/",
      GETTOPANDBOTTOMPRODUCTS: "/product/get-top-five-bot-five/",
      GETMARKETCAPITALIZATION: "/product/get-mcapper-data/",
      GETSEBIDATA: "/product/get-sebi-data/",
      GETCALENDERYEARRETURNDATA: "product/get-calendar-year-returns-data/",
      GETQUANTITATIVEDATA: "/product/get-quantitative-data/",
      GETPRODUCTDETAILS: "/product/product-details/",
      GETSCHEMERELATEDDOCS: "get-scheme-related-doc/",
      GETGRIDVIEW: "/product/grid-view/",
      GETLISTVIEW: "/product/list-view/",
      GETTOPFIVEPRODUCTS: "/product/get-top-five-products/",
      GETCOMPARETABLE: "product/product-compare/",
      GETPRODUCTSEARCHFILTER: "product/search-filter/",
      TRANSACTIONGETPRODUCTDETAIL: "transaction/get-product-detail/",
      TRANSACTIONGETPRODUCTDETAILQUICK: "transaction/get-product-detail-quick/",
      GETPRODUCTDETAILFROMFUNDMANAGER:
        "/product/get-product-detail-from-fund-manager/",

      // notification apis
      GETNOTIFICATIONS: "/dashboard/get-notifications/",
      SETNOTIFICATIONSREAD: "/dashboard/set-notifications-read/",

      // service request apis
      TRACKTRANSACTION: "/track-transaction-form-submit/",

      // pincode list and advisor
      GETPINCODELIST: "/service/get-pincode-list/",
      GETADVISORTHROUGHPINCODE: "/service/get-advisor-data/",
      GETWOMENADVISORTHROUGHPINCODE: "/service/get-woman-advisor-data/",
      GETEUINBYARN: "/transaction/get-euin-by-arn/",

      // city list and offices
      GETCITYLIST: "/service/get-city-list/",
      GETOFFICESTHROUGHCITY: "/service/get-office-data/",
      // city list and stock brioker
      GETSTOCKBROKERCITYLIST: "service/get-stock-broker-city-list/",
      GETSTOCKBROKERTHROUGHCITY: "/service/get-stock-broker-data/",
      // city list
      GETCOLLECTIONCENTRECITYLIST: "/service/get-collection-centre-city-list/",
      GETCOLLECTIONCENTRETHROUGHCITY: "/service/get-collection-centre-data/",

      PRODUCTFILTERLIST: "/product/filter-list/",
      GETSEARCHSUGGESTIONS: "/product/global-search-suggestions/",
      PRODUCTLIST: "product/search/",
      RETURNSCALCULATORCHART: "/product/scheme-returns/",
      GETAPPLICATIONFORM: "product/get-application-form/",
      GETKIMANDADDENDUMS: "product/get-kim-and-addendums/",
      GETCUMULATIVECHARTDATA: "/product/cummulative-returns/",
      GETDIVIDENDCHARTDATA: "/product/get-dividend-history/",
      GETCREDITCHARTDATA: "/product/get-rating-profile-data/",
      GETTOPPODUCTBYINDEX: "/product/get-product-details-by-dofa/",
      GETTOPPROUDCTNAMES: "/product/get-featured-product-names/",
      SOLUTIONBASEDPLANPRODUCT: "/product/get-mfi-plan/",
      GETSCHEMERETURNSTABLE: "/product/scheme-returns-tabular/",

      GETATICLEPAGINATED: "article/article-list-paginated/",
      GETARTICLELIST: "article/article-list/",
      GETBOOKREVEWLIST: "article/impactful-books-list/",
      GETARTICLESGRID: "article-data-list/",
      GETBOOKREVIEWGRID: "impactful-books-data-list/",
      SAVEUSERINFOFOREBOOK: "save-user-info-for-ebook/",
      GETEXPERIENCELEVEL: "account/get-user-experience-level/",
      GETDISTINCTOPTIONCODES: "/product/get-distinct-option-codes/",
      GETTOPPODUCTBYINDEXMOBILE: "/product/get-product-details-by-dofa-mobile/",
      SENDSMS: "/notification/send-sms/",
      SENDMAIL: "/notification/send-email/",
      YEARBASEDDOCUMENTFILTER: "/media-document-list/",

      // forms APIs
      GETSERVICEREQUESTCATEGORY: "get-service-request-category/",
      GETAPPLICATIONFORMS: "get-application-forms/",
      GETKIMADDENDUMS: "get-kim-addendums/",
      GETFINANCIALADDENDUMS: "get-financial-addendums/",
      GETFINANCIALREPORTS: "get-financial-reports/",
      GETKYCFORMS: "get-kyc-forms/",
      GETMFUTILITYFORMS: "get-mf-utility-forms/",
      GETSCHEMEPORTFOLIODISCLOSURE: "get-scheme-portfolio-disclosure/",
      GETCONSOLIDATEPORTFOLIODISCLOSURE:
        "get-consolidate-portfolio-disclosure/",
        GETCONSOLIDATEDEBTPORTFOLIODISCLOSURE:
        "get-consolidate-debt-portfolio-disclosure/",
      GETFACTSHEET: "get-fact-sheet/",
      GETSAI: "get-sai/",
      GETTER: "get-ter/",
      GETSIDCATEGORIES: "get-sid-categories/",
      GETSIDDOCUMENTS: "get-scheme-information-documents/",
      GETSIDSEARCH: "service/search/",
      GETSERVICEREQUESTFORMS: "get-service-request-forms/",
      GETSCHEMEINFORMATIONDOCUMENTS: "get-scheme-information-documents/",
      GETSCHEMEFINANCIAL: "get-scheme-financial/",
      GETSCHEMESFORCATEGORY: "get-schemes-from-category/",
      GETTERDOWNLOAD: "/get-scheme-ter/",
      SAVECVLRESPONSE: "cvl/save-ekyc-data/",

      // careers API
      UPLOADCV: "career/upload-resume/",
      APPLYJOB: "career/submit-career-form/",
      DELETECV: "career/delete-file/",

      // fund performance APIs
      GETREALTIMENAV: "product/etf-realtime-nav/",
      GETCREATIONUNITPRODUCTS: "/product/etf-products/",
      GETCREATIONUNITDATA: "/product/creation-unit-data/",
      GETFUNDPERFORMANCENAV: "/product/get-fund-performance-nav/",
      GETFUNDPERFORMANCEDIVIDEND: "/product/get-fund-performance-dividend/",
      SETALERT: "dashboard/nav-alert/",
      GETDISTINCTDOFATYPELIST: "/product/get-distinct-dofa-type-list/",
      GETDOFATYPELIST: "/product/get-dofa-type-list/",
      GETDISTINCTDOFATYPELISTWITHARCHIVE:
        "product/get-distinct-dofa-type-list-with-archive/",
      GETDISTINCTDOFATYPELISTFORNAV:
        "/product/get-distinct-dofa-type-list-for-nav/",
      GETFUNDPERFORMANCEPRODUCTOPTION:
        "/product/get-fund-performance-nav-products/",
      GETFUNDPERFORMANCEDIVIDENDPRODUCTOPTION:
        "/product/dividend-fund-performance-options/",
      GETFUNDPERFORMANCENAVFILE: "/product/get-fund-performance-nav-file/",

      // watchlist api
      SAVESCHEMEWATCHLIST: "/dashboard/save-scheme-watchlist/",
      DELETESCHEMEWATCHLIST: "/dashboard/delete-watchlist-data/",
      GETSCHEMEWATCHLISTSTATUS: "/dashboard/get-scheme-watchlist-status/",

      // remuneration form api
      REMUNERATIONFORMSUBMIT: "remuneration-form-submit/",

      // accordion list nps button api
      NPSINVEST: "https://cra.karvy.com/POPonline/POPAuthenticate",

      // subscribe api
      SUBSCRIBE: "/subscribe/",

      // Unclaimed Dividend
      UNCLAIMEDDIVIDEND: "/unclaimed-dividend-form-submit/",
      GETSCHEMESEARCH: "/get-schemes-search/",

      // SOA api
      GETSOA: "/dashboard/get-soa/",

      // Eligible Banks Online Bank Mandate
      ELIGIBLEBANKSONLINEBANKMANDATE:
        "dashboard/get-billdesk-eligible-banks-emandate/",

      // dividend-summary api
      GETDIVIDENDSUMMARY: "/dashboard/get-dividend-summery/",

      // Write to Us
      GETPRODUCTLIST: "/get-schemes-from-category/",
      COMPLAINTTYPE: "/service/get-complaint-types/",
      WRITETOUSSUBMIT: "/write-to-us-form-submit/",
      GETSTATELIST: "/get-state-list/",
      GETCITYLISTBYSTATE: "/get-city-by-state/",

      // Ulip Renewal
      ULIPRENEWALDETAILS: "/transaction/get-ulip-due-details/",
      DETAILSFORCONFIRMATION: "/transaction/insert-ulip-transaction/",
      CONFIRMATIONBILLDESK: "/transaction/confirm-ulip-transaction/",
      BILLDESKRESPOSEFORULIP: "/transaction/get-ulip-renewal-status/",

      //sip-campaign api
      SAVECAMPAIGNUSER: "/account/sip-campaign/",
      SIPGENERATEOTP: "/account/sip-generate-otp/",
      SIPVALIDATEOTP: "/account/sip-validate-otp/",

      //fund-campaign api
      'SAVEFUNDCAMPAIGNUSER' : '/account/index-fund-campaign/',
      'FUNDGENERATEOTP' : '/account/index-fund-generate-otp/',
      'FUNDVALIDATEOTP' : '/account/index-fund-validate-otp/',

      //nps api
      NPSAPPLICATION: "/service/save-nps-enquiry-form/",

      // sip calculator api
      SIPMONTHLYCALCULATOR:
        "/calculator/sip-calculator-new/calculate-initial-sip/",
      SIPCORPUSCALCULATOR: "/calculator/sip-calculator-new/calculate-corpus/",

      // calculator report download
      CALCULATORUSERREPORT: "/calculator/download-report/",
      // arn-brd api
      VALIDATEARN: "/transaction/validate-online-arn/",
      EMPANELMENTOTP: "/transaction/validate-online-empanelment-otp/",
      VALIDATEMTUALFUND: "service/save-download-info-for-ebook/",

      // retirement calculator api
      CALCULATERETIREMENTCORPUS:
        "/calculator/retirement-calculator-new/calculate-retirement-corpus/",
      CALCULATESHORTFALL:
        "/calculator/retirement-calculator-new/calculate-shortfall/",
      MAGICDUOCALCULATOR:
        "/calculator/magic-duo-calculator/",
      RCMAGICDUOCALCULATOR: 
        "/calculator/retirement-magic-duo-calculator/", 
      CORPUSRCMAGICDUOCALCULATOR: 
        "/calculator/retirement-corpus-magic-duo-calculator/",
      FINANCIALFREEDOMCALCULATOR: 
        "/calculator/financial-freedom-calculator/",
      GOALCALCULATOR: "calculator/goal-calculator/",   
      VALIDATEPAN: 'account/validate-pan/',
      GETFOLIOFLAG:'/account/get-folio-flag/',
      CALLMEBACK:'/account/call-me-back-campaign/',
      WHATSAPPOTP:'/account/whatsapp-generate-otp/',
      WHATSAPPVALIDATEOTP:'/account/whatsapp-validate-otp/',
      WHATSAPPSENDFORM:'/account/whatsapp-common-consent/',
      GETBASKETFAILEDSTATUS: 'transaction/get-fail-billdesk-message/',
      GETUSERDETAILS: '/account/get-user-details/',

      GENERICGENRATEOTP:'/account/generic-generate-otp/',
      GENERICVALIDATEOTP: '/account/generic-validate-otp/',
      KYCREDIRECT: '/account/check-redirect-digital-kyc/',
    },
    getRequest: function(endpoint, param) {
      var defer = $.Deferred();
      var self = this;
      var data;
      if (param) data = param;
      else data = null;
      $.ajax({
        type: "GET",
        data: data,
        url: self.API_ENDPOINTS[endpoint],
        beforeSend: function(jqXHR) {
          var token = sessionUtils.getSessionToken();
          var isTokenValid = token && token !== "null";
          if (isTokenValid)
            jqXHR.setRequestHeader("Authorization", "Bearer " + token);
          else
            jqXHR.setRequestHeader(
              "Authorization",
              "Bearer UTIGUEST" + +new Date()
            ); // sending timestamp
        },
        success: function(response, _status, request) {
          var gzip = request.getResponseHeader("Content-Type") === "gzip";
          if (gzip) response = JSON.parse(response);
          defer.resolve(response);
        },
        error: function(error) {
          defer.reject(error);
        }
      });
      return defer.promise();
    },
    postRequest: function(endpoint, param) {
      var defer = $.Deferred();
      var self = this;
      var data;
      if (param) data = JSON.stringify(param);
      else data = null;
      $.ajax({
        type: "POST",
        url: self.API_ENDPOINTS[endpoint],
        contentType: "application/json",
        data: data,
        beforeSend: function(jqXHR) {
          var token = sessionUtils.getSessionToken();
          var isTokenValid = token && token !== "null";
          if (isTokenValid)
            jqXHR.setRequestHeader("Authorization", "Bearer " + token);
          else
            jqXHR.setRequestHeader(
              "Authorization",
              "Bearer UTIGUEST" + +new Date()
            ); // sending timestamp
        },
        success: function(response, _status, request) {
          var gzip = request.getResponseHeader("Content-Type") === "gzip";
          if (gzip) response = JSON.parse(response);
          defer.resolve(response);
        },
        error: function(error) {
          if (error.responseJSON && !error.hasOwnProperty("data"))
            error.data = error.responseJSON;
          defer.reject(error);
        }
      });
      return defer.promise();
    },
    fileRequest: function(endpoint, formData) {
      var defer = $.Deferred();
      var self = this;
      $.ajax({
        type: "POST",
        url: self.API_ENDPOINTS[endpoint],
        contentType: false,
        processData: false,
        data: formData,
        beforeSend: function(jqXHR) {
          var token = sessionUtils.getSessionToken();
          var isTokenValid = token && token !== "null";
          if (isTokenValid)
            jqXHR.setRequestHeader("Authorization", "Bearer " + token);
          else
            jqXHR.setRequestHeader(
              "Authorization",
              "Bearer UTIGUEST" + +new Date()
            ); // sending timestamp
        },
        success: function(response) {
          defer.resolve(response);
        },
        error: function(error) {
          if (error.responseJSON && !error.hasOwnProperty("data"))
            error.data = error.responseJSON;
          defer.reject(error);
        }
      });
      return defer.promise();
    },
    getByUrl: function(requestUrl) {
      var defer = $.Deferred();
      $.ajax({
        type: "GET",
        url: requestUrl,
        contentType: "application/json",
        beforeSend: function(jqXHR) {
          var token = sessionUtils.getSessionToken();
          var isTokenValid = token && token !== "null";
          if (isTokenValid)
            jqXHR.setRequestHeader("Authorization", "Bearer " + token);
          else
            jqXHR.setRequestHeader(
              "Authorization",
              "Bearer UTIGUEST" + +new Date()
            ); // sending timestamp
        },
        success: function(response, _status, request) {
          var gzip = request.getResponseHeader("Content-Type") === "gzip";
          if (gzip) response = JSON.parse(response);
          defer.resolve(response);
        },
        error: function(error) {
          defer.reject(error);
        }
      });
      return defer.promise();
    }
  };
});
