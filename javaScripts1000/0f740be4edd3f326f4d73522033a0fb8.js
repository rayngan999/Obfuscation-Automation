//  Copyright (c) 2013-2020 Triblio, Inc. All rights reserved.
//https://github.com/jfriend00/docReady/blob/master/docready.js
/*global*/

(function(window, document) {
  var readyList = [];
  var readyFired = false;
  var readyEventHandlersInstalled = false;

  // call this when the document is ready
  // this function protects itself against being called more than once
  var ready = function ready() {
    if (!readyFired) {
      // this must be set to true before we start calling callbacks
      readyFired = true;
      for (var i = 0; i < readyList.length; i++) {
        // if a callback here happens to add new ready handlers,
        // the docReady() function will see that it already fired
        // and will schedule the callback to run right after
        // this event loop finishes so all handlers will still execute
        // in order and no new ones will be added to the readyList
        // while we are processing the list
        readyList[i].fn.call(window, readyList[i].ctx);
      }
      // allow any closures held by these functions to free
      readyList = [];
    }
  };

  var readyStateChange = function readyStateChange() {
    if ( document.readyState === "complete" ) {
      ready();
    }
  };

  // This is the one public interface
  // trDocReady(fn, context);
  // the context argument is optional - if present, it will be passed
  // as an argument to the callback
  window.trDocReady = function(callback, context) {
    // if ready has already fired, then just schedule the callback
    // to fire asynchronously, but right away
    if (readyFired) {
      setTimeout(function() {callback(context);}, 1);
      return;
    }
    else {
      // add the function and context to the list
      readyList.push({fn: callback, ctx: context});
    }
    // if document already ready to go, schedule the ready function to run
    if (document.readyState === "complete") {
      setTimeout(ready, 1);
    }
    else if (!readyEventHandlersInstalled) {
      // otherwise if we don't have event handlers installed, install them
      if (document.addEventListener) {
        // first choice is DOMContentLoaded event
        document.addEventListener("DOMContentLoaded", ready, false);
        // backup is window load event
        window.addEventListener("load", ready, false);
      }
      else {
        // must be IE
        document.attachEvent("onreadystatechange", readyStateChange);
        window.attachEvent("onload", ready);
      }
      readyEventHandlersInstalled = true;
    }
  };
})(window, document);

/*jshint sub:true*/
(function(window, document){
  if(window._hasNeonTrackingScriptEnabled) return;

  // polly fill for browsers that don't have window.location.origin
  // http://tosbourn.com/a-fix-for-window-location-origin-in-internet-explorer/
  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
  }
  window._hasNeonTrackingScriptEnabled = true;
  
  var VISIT = 0, TIME_ON_PAGE = 1;


  var paramsArray = function(obj){
    var ret = [];
    for(var key in obj) {
      if(obj.hasOwnProperty(key)) {
        ret.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
      }
    }
    return ret;
  };


  var track = function(type, env){
    //we actually want == here so we'll tell jshint to ignore
    if(typeof(env) == "undefined") { env = {}; } //jshint ignore:line
    // send some miscellaneous info about the request
    env.u = document.location.href;
    env.h = document.location.host;
    env.bw = window.innerWidth;
    env.bh = window.innerHeight;
    env.t = type;

    if(document.referrer && document.referrer !== "") {
      env.ref = document.referrer;
    }

    if (window.dataLayer && window.dataLayer[0] && window.dataLayer[0].userId) {
      env.hp = window.dataLayer[0].userId;
    }
    /*for uk sites*/
    if(!env.hp && localStorage && localStorage.getItem && localStorage.getItem("jStorage")){
      let jStorage;
      try{
        jStorage = JSON.parse(localStorage.getItem("jStorage"));
        if (jStorage.ARENA_LOOKUP_HUID) env.hp = jStorage.ARENA_LOOKUP_HUID;
      }
      catch(e){}
    }

    env.rnd = Math.floor(Math.random() * 10e12);

    var params = paramsArray(env);

    var img = new Image();
    img.src = 'https://intent.techhive.com/_t.gif?' + params.join('&');
  };

  //expose
  if(window['NeonAnalyticsObject']) window['NeonAnalyticsObject'].track = track;


  var env = {};

  window.trDocReady(function(){
    track(VISIT,env);
  }); 
  
  setTimeout(function(){
    track(TIME_ON_PAGE,env);
  }, 1000*30);
})(window, document);
