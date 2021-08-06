window.sdc = window.sdc || {};
sdc.utils = sdc.utils || {};

(function () {
  const catchallNavbarHeight = 75;
  const arbitraryScrollPaddingAmount = 16;
  const samsungDeviceStrings = [
    'sm-g',
    'gt-p',
    'sch-i',
    'gt-i',
    'sgh-m',
    'sgh-i',
    'shv-e',
    'galaxy',
    'sc-04',
    'sph-l',
    'samsung',
  ];
  sdc.utils.scrollTo = function ($elem, ms) {
    const navbarHeight = $('.v3-navbar.stuck:visible').height() || catchallNavbarHeight;
    $('html, body').stop().animate({
      scrollTop: $elem.offset().top - navbarHeight - arbitraryScrollPaddingAmount,
    }, ms);
  };

  sdc.utils.isSamsung = function () {
    const re = new RegExp(samsungDeviceStrings.join('|'), 'i');
    return re.test(navigator.userAgent);
  };

  sdc.utils.isHfdCard = function (selectedCardSelector) {
    const selector = selectedCardSelector || 'input[name="selected_card"]:checked';
    const element = document.querySelector(selector);
    if (! element) return null;
    return Boolean(JSON.parse(element.getAttribute('data-is-hfd-card')));
  };

  sdc.utils.eventFactory = function (eventType, bubbles, cancelable) {
    if (bubbles === undefined) {
      bubbles = true;
    }
    if (cancelable === undefined) {
      cancelable = true;
    }
    const constructor = {
      function: Event,
      name: 'Event',
    };
    if (eventType === 'click') {
      constructor.function = MouseEvent;
      constructor.name = 'MouseEvent';
    }
    try {
      return new constructor.function(eventType, { bubbles, cancelable });
    } catch (e) {
      const event = document.createEvent(constructor.name);
      event.initEvent(eventType, bubbles, cancelable);
      return event;
    }
  };

  sdc.utils.getBrowserLanguage = function () {
    return window.navigator.userLanguage || window.navigator.language;
  };

  sdc.utils.getLocale = function () {
    if (! window.language) return 'en_US';
    const languageRegion = window.language.code.split('-');
    const lang = languageRegion[0];
    const region = languageRegion[1];
    return `${lang}_${region.toUpperCase()}`;
  };

  sdc.utils.getUrlParameterValue = function (urlParams, searchedParameter) {
    if (! urlParams) return '';
    searchedParameter = searchedParameter.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    const regexS = `[\\?&]${searchedParameter}=([^&#]*)`;
    const regex = new RegExp(regexS);
    const results = regex.exec(urlParams);
    return results == null ? '' : results[1];
  };

  sdc.utils.LazyLoader = function LazyLoader(urls, outputName) {
    /**
     * This util constructor function allows you to lazy load javascript files.
     * Instantiate this class via `new` keyword, pass the params, and bind
     * via an event. This function is agnostic of event bindings due to
     * interdependencies with some libraries and jQuery. Therefore, you must
     * bind the event yourself when using.
     *
     * Example usage:
     *
     * $("#buy-now-modal").on("shown.bs.modal", function() {
     *   var urls = [
     *     '{% static "parsleyjs/dist/parsley.min.js" %}',
     *     '{% static "website/js/form_validation_helpers_v3.js" %}',
     *     '{% static "website/js/modules/buy_now_modal.js" %}'
     *   ];
     *   var lazyLoader = new sdc.utils.LazyLoader(urls, "buy-now");
     *   lazyLoader.loadScripts();
     * });
     *
     * @param {Array} urls - An array of urls to lazy load (synchronously)
     * @param {String} outputName - The class which will be apended to the scripts in the DOM.
     *                              Used to prevent repeat script loading.
    */
    this.urls = urls;
    this.outputName = outputName;
    this.numberOfScripts = urls.length;
    this.isLoaded = Boolean(
      document.querySelectorAll(`.${this.outputName}-scripts`).length
        === this.numberOfScripts,
    );

    this.loadScripts = function () {
      if (this.isLoaded) return;
      for (let i = 0; i < this.urls.length; i++) {
        const injectedScript = document.createElement('script');
        injectedScript.async = false;
        injectedScript.src = this.urls[i];
        injectedScript.className = `${this.outputName}-scripts`;
        document.body.appendChild(injectedScript);
      }
    };
  };
}());

function csrfSafeMethod(method) {
  // these HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
function sameOrigin(url) {
  // test that a given url is a same-origin URL
  // url could be relative or scheme relative or absolute
  const host = document.location.host; // host + port
  const protocol = document.location.protocol;
  const sr_origin = `//${host}`;
  const origin = protocol + sr_origin;
  // Allow absolute or scheme relative URLs to same origin
  return (url == origin || url.slice(0, origin.length + 1) == `${origin}/`)
      || (url == sr_origin || url.slice(0, sr_origin.length + 1) == `${sr_origin}/`)
      // or any other URL that isn't scheme relative or absolute i.e relative.
      || ! (/^(\/\/|http:|https:).*/.test(url));
}
$.ajaxSetup({
  beforeSend(xhr, settings) {
    if (! csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
      // Send the token to same-origin, relative URLs only.
      // Send the token only if the method warrants CSRF protection
      // Using the CSRFToken value acquired earlier
      const csrftoken = getCookie('csrftoken');
      xhr.setRequestHeader('X-CSRFToken', csrftoken);
    }
  },
});

function getCookie(cname) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}

window.updateCSRFs = function (new_token) {
  $('input[name="csrfmiddlewaretoken"]').toArray().forEach(elem => {
    $(elem).val(new_token);
  });
};

$.prototype.behaveLikeRadioButtons = function () {
  const $this = $(this);
  const $checkBoxes = $this.find('input[type="checkbox"]');
  $checkBoxes.on('click', e => {
    const $clicked = $(e.target);
    $checkBoxes.prop('checked', false);
    $clicked.prop('checked', true);
  });
  return $this;
};

$.prototype.exists = function (callback) {
  const args = [].slice.call(arguments, 1);
  if (this.length) {
    callback.call(this, args);
  }
  return this;
};

if (! window.postalCodeMatchers) {
  $.get(window.endpoints.api.locationsPostalCodeMatchers).done(
    data => {
      window.postalCodeMatchers = data.matchers.map(
        pattern => new RegExp(pattern),
      );

      window.postalCodeExamples = data.examples;

      // add class "postal-code" to any input you want to re-initialise when this loads
      $('.postal-code').each((_, input) => {
        $(input).resetCustomField('postalCode', data.examples, data.matchers);
      });
    },
  );
}

// export sdc for test sdc-utils.spec;
if (! (typeof module !== 'undefined' && typeof module.exports !== 'undefined')) {
  window.sdc = sdc;
} else {
  const exports = module.exports = {};
  exports.sdc = sdc;
}
