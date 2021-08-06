window['ListHubAnalyticsUID'] = 'rBEAA2EIuiWmwgAPGsniAg==';

(function(window, undefined) {
  // ensure we reference the correct document
  var document = window.document;

  var ListHubTracker = (function() {
    var protocol = 'https:' == document.location.protocol ? 'https://' : 'http://';
    var defaultHost = 'tracking.listhub.net';
    var trackerPath = '/tracker';
    var batchPath = '/batch';

    // allow the user to call ListHubTracker directly
    var ListHubTracker = function(conf, event, data) {
      if (conf === undefined) {
        return {
          submit: function(event, data) {}
        }
      }
      var tracker = new ListHubTracker.fn.init(conf);
      if (event !== undefined && data !== undefined) {
        tracker.submit(event, data);
      }
      return tracker;
    };

    // define ListHubTracker functions
    ListHubTracker.fn = ListHubTracker.prototype = {

      init: function(conf) {
        if (typeof conf === 'string') {
          this.conf = { 'provider': conf };
        } 
        else {
          this.conf = conf;
        }
        this.version = 3;
        this.conf['lhac'] = window['ListHubAnalyticsUID'];
        
        if (this.conf['host'] === undefined) {
          this.conf['host'] = protocol + defaultHost;
        }
      },

      sent: [],

      submit: function(event, data) {
        // reset the array of sent images
        this.sent = [];

        // if data is either a string or an object, put it in an array
        if (typeof data === 'string' || data.splice === undefined) {
          data = [data];
        }

        if (data.length > 1) {
          var self = this;

          var handledError = false;
          
          // If XHR fails for any reason, fallback to sendSimple
          var batchFailedHandler = function() {
            if(!handledError) {
              handledError = true;
              self.sendSimple(event, data);
            }
          };

          this.sendBatch(event, data, batchFailedHandler);
        }
        else {
          this.sendSimple(event, data);
        }
      },

      buildMessage: function(event, data) {
        var body = {
          cp: {
            ep: window.location.href,
            mp: this.conf['provider'],
            ev: (this.conf['test'] == true) ? 'QA_' + event : event,
            pr: (this.conf['referrer'] === undefined) ? document.referrer : this.conf['referrer'],            
            up: (this.conf['upstream'] === undefined) ? '' : this.conf['upstream'],
            lhac: (this.conf['lhac'] === undefined) ? '' : this.conf['lhac'],
            cljs: 'true',
            v: this.version,
            et: new Date().getTime()
          },
          inp: []
        }

        for (var element in data) {
          // don't iterate over inherited properties
          if (data.hasOwnProperty(element)) {
            var params = new Object();
            var value = data[element];
            if (typeof value === 'string') {
              params['lkey'] = value;
            } else {
              // it's a map
              for (var prop in value) {
                
                // don't iterate over inherited properties
                // Also, if a common param is already defined for this property,
                // do not override it in the instance params.
                if (value.hasOwnProperty(prop) && body.cp[prop] === undefined) {
                  params[prop] = value[prop];
                }
              }
            }

            body.inp.push(params);
          }
        }

        return body;
      },

      sendBatch: function(event, data, batchFailedHandler) {

        // XMLHttpRequest is available on IE 8+.  HTML files that do not specify <!DOCTYPE html> or 
        // <meta http-equiv="X-UA-Compatible" content="IE=EDGE" /> will prevent IE from running in 
        // Standards Mode, which disables window.JSON (required for serialization)
        if (!window.XMLHttpRequest || !window.JSON) {
          batchFailedHandler();
          return;
        }

        try {
          var batchUrl = this.conf['host'] + batchPath;

          var messageObject = this.buildMessage(event, data);
          var message = JSON.stringify(messageObject);

          var self = this;
          var callback = function(response) {
            if (response.status != 200) {
              batchFailedHandler();
            }
            else {
              self.sent.push(messageObject);
            }
          };

          this.sendAsync(batchUrl, message, callback, batchFailedHandler);
        }
        catch (e) {
          batchFailedHandler();          
        }
      },

      sendAsync: function(url, message, callback, batchFailedHandler) {

        var xmlHttp = new XMLHttpRequest();

        // XMLHttpRequest.withCredentials exists on XMLHttpRequest2, 
        // which is available in IE 10+.  For IE 8/9, CORS is only available 
        // via XDomainRequest, which is a different API

        if (('withCredentials' in xmlHttp) == false && window.XDomainRequest) {
          xmlHttp = new XDomainRequest();          
          xmlHttp.open('POST', url, 1);

          // In IE9, XDR may abort the call if all handlers are not defined.  
          // onProgress is not a concern here, so it is no-op'd.
          xmlHttp.onProgress = {};
          xmlHttp.onload = function() {
            callback({status: 200});
          };
          xmlHttp.onerror = batchFailedHandler;          
          xmlHttp.ontimeout = batchFailedHandler;          
        }
        else {          
          xmlHttp.open('POST', url, 1);
          xmlHttp.withCredentials = true;
          xmlHttp.onreadystatechange = function () {            
            if (xmlHttp.readyState == 4) {
              callback(xmlHttp);
            }
          };
        }
        
        // Send fast or Fail fast
        xmlHttp.timeout = 2000;
        
        // IE may abort if the XHR isn't initialized when send() is invoked.  
        // Give it a brief opportunity to initialize.
        setTimeout(function(){
          xmlHttp.send(message);
        }, 200);
      },

      sendSimple: function(event, data) {

        var message = this.buildMessage(event, data);

        for (var i=0; i<message.inp.length; i++) {

          var instanceParameters = message.inp[i];

          var params = new Object();
          for (var prop in message.cp) {
            if (message.cp.hasOwnProperty(prop)) {
              params[prop] = message.cp[prop];
            }
          }

          for (var prop in instanceParameters) {
            if (instanceParameters.hasOwnProperty(prop)) {
              params[prop] = instanceParameters[prop];
            }
          }

          this.send(params);
        }
      },

      send: function(params) {
        var self = this;

        setTimeout(function(){
          var img = new Image(1, 1);
          img.src = self.createUrl(params);
          img.onload = function() {
            self.onImageLoad();
          };
          self.sent.push(img);
        }, 10);
      },

      onImageLoad: function() {
        return;
      },

      createUrl: function(params) {
        var parts = [];
        var trackingUrl = this.conf['host'] + trackerPath;
        parts.push(trackingUrl);

        if (params !== undefined) {
          var sep = "?";
          if (typeof params === "string") {
            if (params[0] != "?") {
              parts.push(sep);
            }
            parts.push(params);
          } else {
            for (param in params) {
              if (params.hasOwnProperty(param)) {
                parts.push(sep);
                parts.push(escape(param));
                var value = params[param];
                if (value !== undefined) {
                  parts.push("=");
                  parts.push(escape(value));
                }
                sep = "&";
              }
            }
          }
        }
        return parts.join("");
      }           
    };

    // allows the user to instantiate ListHubTracker
    ListHubTracker.fn.init.prototype = ListHubTracker.fn;

    // set the GLOBAL ListHubTracker instance
    return (window.ListHubTracker = ListHubTracker);

  })();

})(window);

(function() {

  var asyncHandle = window['ListHubAnalyticsObject'];

  // if this isn't defined, then we aren't in async mode
  if (asyncHandle === undefined) {
    return;
  }

  var isTypeArray = function(o) {
    return o && Object.prototype.toString.call(o) === '[object Array]';
  };

  var isTypeFunction = function(o) {
    return o && Object.prototype.toString.call(o) === '[object Function]';
  };

  // this will either
  // - a: pass in the tracker to a callback function
  // - b: execute a method on the tracker with the supplied arguments
  var run = function(e) {
    if (e.length == 1 && isTypeFunction(e[0])) {
      e[0](window[asyncHandle].tracker);
    } else {
      var m =  window[asyncHandle].tracker[e[0]];
      var a = e.slice(1);
      m.apply(window[asyncHandle].tracker, a);
    }
  };

  // only instance one ListHubTracker instance based on whether or not there is already one there
  // to avoid the race condition when our script is include more than once on the page asynchronously
  // we'll then always reference the tracker on the most recent window[asyncHandle].
  if (window[asyncHandle]) {
    window[asyncHandle].tracker = window[asyncHandle].tracker || new ListHubTracker({});
  }

  var newCollector = function() {
    // consider running this with setTimeout(function, 10) to completely
    // move the reporting code out of process. However, before you do that answer:
    // - what happens when the an event is reporting before a form is submitted
    // - really what happens when an event is reported right when the user is navigating off the page
    run(Array.prototype.slice.call(arguments));
  };

  // tag the new collector with the one true tracker
  newCollector.tracker = window[asyncHandle].tracker;

  // save the asyncCollector to process it's queue later if it exists
  var asyncCollector = window[asyncHandle];
  // swap out the implementation of the window[asyncMethod] function
  window[asyncHandle] = newCollector;

  // asyncCollector.q may not have been initialized yet if the script loaded before
  // any events were reported or if window[asyncHandle] was already switched out by
  // another asynchronous script
  if (asyncCollector && isTypeArray(asyncCollector.q)) {
    var args;
    while (args = asyncCollector.q.shift()) {
      run(Array.prototype.slice.call(args));
    }
  }

})();

// maintain backwards compatibility
function _listhub_tracker(listingId, channelId, event, origChan, referrer, eventUrl) {
  try { if ((typeof _listhub_tracker_qa != 'undefined') && _listhub_tracker_qa) { event = 'QA_' + event; } } catch (err) {}
  ListHubTracker({provider: channelId, upstream: origChan, referrer: referrer, base: eventUrl}, event, listingId);
  return true;
}
