require.config({
  baseUrl: '/static/assets/bundle/js/brandsite.1627905860179',
  config: {
    text: {
      onXhrComplete: function () {
var event = document.createEvent('Event');
event.initEvent('content-loaded', true, true); // can bubble, and is cancellable
document.dispatchEvent(event);
}
    }
  },
  paths: {
    autoload: 'autoload',
    brandsiteUtils: 'brandsite-utils',
    sessionUtils: 'session-utils',
    watchlistUtils: 'watchlist-utils',
    articlesUtils: 'common/articles-utils',
    productUtils: 'common/product-utils',
    apiService: 'common/api-service',
    leadFormService: 'common/lead-form-service',
    chartDefaults: 'common/chartDefaults',
    brandsiteConstants: 'brandsiteConstants',
    returnsCalculatorChart: 'common/widgets/returnsCalculatorChart',
    materialize: '../../../materialize/js/materialize.min',
    appear: '../../../../bower_components/appear/jquery.appear',
    'bxslider-4': '../../../../bower_components/bxslider-4/dist/jquery.bxslider.min',
    highcharts: '../../../../bower_components/highcharts/highcharts',
    jquery: '../../../../bower_components/jquery/dist/jquery.min',
    'jquery.cookie': '../../../../bower_components/jquery.cookie/jquery.cookie',
    jquery_appear: '../../../../bower_components/jquery_appear/jquery.appear',
    requirejs: '../../../../bower_components/requirejs/require',
    lodash: '../../../bower_components/lodash/lodash',
    'slick-carousel': '../../../../bower_components/slick-carousel/slick/slick',
    'twitter-share': 'common/widgets/social-sharing-widget/twitter/twitter-share',
    'google-share': 'common/widgets/social-sharing-widget/google/google-share',
    'fb-share': 'common/widgets/social-sharing-widget/fb/fb-share',
    'js-md5': '../../../../bower_components/js-md5/src/md5',
    wNumb: '../../../../bower_components/wnumb/wNumb',
    noUiSlider: '../../../../bower_components/nouislider/distribute/nouislider.min',
    'angular-slick': '../../../../bower_components/angular-slick/dist/slick',
    nouislider: '../../../../bower_components/nouislider/distribute/nouislider',
    wnumb: '../../../../bower_components/wnumb/wNumb',
    'crypto-js': '../../../../bower_components/crypto-js/index'
  },
  packages: [

  ],
  shim: {
    appear: {
      deps: [
        'jquery'
      ]
    },
    highcharts: {
      exports: 'Highcharts'
    },
    materialize: {
      deps: [
        'jquery'
      ]
    },
    'bxslider-4': {
      deps: [
        'jquery'
      ]
    },
    apiService: {
      deps: [
        'jquery'
      ]
    }
  }
});


require(['autoload'], function(autoload) {
  'use strict';

  window.scrollTo(0, 0);
  sessionStorage.removeItem('purchaseData');
  // `appended` is custom event triggered by widget integration sdk to load the required modules
  // this is done because the data-load doesnt work on appending dom by jquery.
  // so event is triggered by widget integration sdk on which autoload is listening

  autoload.when('ready show content-loaded appended');
  autoload.check();
});
