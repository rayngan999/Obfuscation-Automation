define([], function() {
  var urls = {
    'SEARCHPAGEURL': '/search/',
    'PURCHASETRANSACTION': '/portal/purchase',
    'DISCLOSUREOFREMUNERATION': '/disclosure-of-executive-remuneration',
    'LOGIN': '/portal/login',
    'SIGNUP': '/portal/signup',
    'QUICK': '/portal/quickInvest',
    'DIGITALKYC':'/portal/digitalKYC',
    'UNCLAIMEDDIVIDENDSUCCESS': '/unclaimed-dividend-success',
    'UNCLAIMEDDIVIDENDFAILURE': '/unclaimed-dividend-not-found',
    'CVLREDIRECT': 'http://test.cdslolao.com/Customer/169a5242f4361ba/', // for eKYC verification URL/OLAOkey
    'KYCSUCCESS': '/kyc-success',
    'KYCSUCCESSPRELOGIN': '/kyc-success-prelogin',
    'KYCFAIL': '/kyc-failure',
    'QUICKKYC': '/servicerequest/aadhar-based-e-kyc',
  };


  var miscConstants = {
    MONTHARRAY: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    "2020MONTHARRAY": [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "1-15 October",
      "16-31 October",
      "1-15 November",
      "16-30 November",
      "1-15 December",
      "16-31 December",
    ],
    AFTER2020MONTHARRAY: [
      "1-15 January",

      "16-31 January",

      "1-15 February",

      "16-28 February",

      "1-15 March",

      "16-31 March",

      "1-15 April",

      "16-30 April",

      "1-15 May",

      "16-31 May",

      "1-15 June",

      "16-30 June",

      "1-15 July",

      "16-31 July",

      "1-15 August",

      "16-31 August",

      "1-15 September",

      "16-30 September",

      "1-15 October",

      "16-31 October",

      "1-15 November",

      "16-30 November",

      "1-15 December",

      "16-31 December",
    ],
    CRACode: 1604057,
    NpsIntegrationLicense: "b518599112f2fee236c88952db148751",
    ANDROIDAPPLINK:
      "https://play.google.com/store/apps/details?id=com.utimutualfunds.utimutualfund&hl=en",
    IOSAPPLINK:
      "https://itunes.apple.com/in/app/uti-mutual-fund/id1077281815?mt=8",
  };


    // add key name in small letters without space same as url slug
    var ProductpageData = {
      utibankingfinancialservicesfund: {
        CrawlableContent:
          "An open-ended equity scheme that invests in companies engaged in businesses of Banking, NBFC, Insurance and other Financial Services. The Fund focuses on well managed companies with a balance between compounders and turnaround opportunities.",
      },
      uticoreequityfund: {
        CrawlableContent:
          "An open-ended equity scheme predominantly investing in large & mid capitalisation stocks. The Fund focuses on stocks that are below its long term averages and/or undervalued, but are potential for value unlocking.",
      },
      utidividendyieldfund: {
        CrawlableContent:
          "An open-ended equity scheme  predominantly investing in dividend yielding stocks. The Fund endeavor to pick quality businesses and is diversifed across sectors and market capitalisation.",
      },
      utiflexicapfund: {
        CrawlableContent:
          "An open ended-equity scheme investing across large cap, mid cap and small cap stocks in a flexible manner. The Fund follows growth style of investment and looks for high quality business with an ability to sustain in the long run.",
      },
      utihealthcarefund: {
        CrawlableContent:
          "An open-ended equity scheme investing in healthcare services sector. The Fund has a high preference for companies with domestic focus, sound technical expertise and corporate governance.",
      },
      utiindiaconsumerfund: {
        CrawlableContent:
          "An open-ended equity scheme following the theme of changing consumer aspirations, changing lifestyle and growth of consumption. The Fund endeavor to capture growth from the potential demand uptick in consumption and has a focused play with high active weights, but agnostic to market capitalisation.",
      },
      utiinfrastructurefund: {
        CrawlableContent:
          "An open-ended equity fund following the infrastructure theme. The Fund aims to generate capital appreciation by investing in companies engaged either directly or indirectly in infrastructure related activities.",
      },
      utimncfund: {
        CrawlableContent:
          "An open-ended equity scheme following the theme of investing predominantly in equity and equity related securities of Multi-National Companies. The Fund provides a diversification opportunity through a differentiated offering especially due to the sector composition of the underlying index.",
      },
      utimastershareunitscheme: {
        CrawlableContent:
          " Indiaâs first equity oriented fund launched in October 1986. An open-ended equity scheme predominantly investing in large cap stocks. The Fund follows Growth at Reasonable Price (GARP) strategy with focus on companies with competitive advantage.",
      },
      utimidcapfund: {
        CrawlableContent:
          "An open-ended equity scheme predominantly investing in mid cap stocks. The Fund focuses on companies with scalable business models and long runway for growth.",
      },
      utismallcapfund: {
        CrawlableContent:
          "An open-ended equity scheme predominantly investing in small cap stocks. The Fund is well-diversifed and aims to exploit the potential growth opportunities of small-cap and select mid-cap companies.",
      },
      utitransportationlogisticsfund: {
        CrawlableContent:
          "UTI Transportation and Logistic Fund is a unique offering that endeavors to capitalize from growth opportunities of Automobile, Auto OEMs & Logistics industries in India which are closely linked to rising income levels and improving aspirations.",
      },
      utivalueopportunitiesfund: {
        CrawlableContent:
          "An open-ended equity scheme following a value investment strategy. The Fund follows the principle of intrinsic value for stock selection and has a flexibility to position itself actively across the market cap spectrum.",
      },
    };

  function getUrl(urlName) {
    if (urlName)
      return urls[urlName];
    return urls;
  }

  function getConstant(constantName) {
    return miscConstants[constantName];
  }

  function getPageConstant(constantName) {
    return ProductpageData[constantName];
  }

  function getConstants() {
    return miscConstants;
  }

  return {
    'getUrl': getUrl,
    'getConstant': getConstant,
    'getConstants': getConstants,
    'getPageConstant': getPageConstant,
  };
});
