(function () {
    "use strict";
    
    function init(angular, eventLogging, remspect) {

        function truncateLog(text) {
            return (text && text.length > 4000) ? text.substring(0, 4000) + "....[truncated]" : text;
        }

        var _angularModule = angular.module;
        angular.module = function module() {
            try {
                return _angularModule.apply(this, arguments);
            }
            catch (exception) {
                var loggableEvent = new eventLogging.LoggableEvent("javascriptError", true);
                loggableEvent.message = truncateLog(exception.message);
                loggableEvent.url = window.location.href;
                loggableEvent.type = "angularModuleError";
                loggableEvent.name = exception.name;
                loggableEvent.stacktrace = truncateLog(exception.stack);
                eventLogging.queueEvent(loggableEvent);
                throw exception;
            }
        };

        var _moduleName = "AngularErrorLogger";

        angular.module(_moduleName, []).config(["$compileProvider", "$provide", "$sceDelegateProvider", function ($compileProvider, $provide, $sceDelegateProvider) {
	
			  $compileProvider.debugInfoEnabled(false);
			  $compileProvider.commentDirectivesEnabled(false);
			  $compileProvider.cssClassDirectivesEnabled(false);
			  
        	
            $provide.decorator("$exceptionHandler", ["$delegate", function ($delegate) {
                return function (exception, cause) {
                    var loggableEvent = new eventLogging.LoggableEvent("javascriptError", true);
                    try {
	
							  //With ng17 we're getting errors when an $q promise doesn't have an ultimate catch. Seems helpful but sometimes the error
							  // provides no context and isn't a big deal.
								if (cause == null &&
									(exception === "Possibly unhandled rejection: null"
									 || exception === "Possibly unhandled rejection: undefined"
									 || exception === "Possibly unhandled rejection: backdrop click" )) {
									return;
								}

                    	
                        //cause is an optional param angular doesnt appear to be using
                        $delegate(exception, cause);
                        //an attempt at parsing some log messages -- this is really hard exceptions have to many formats
                        //this one works for some angular messages
                        var urlCapture = /\((.+?):(\d+):(\d+)/g;
                        var matchUrl = urlCapture.exec(exception.stack);
                        if (matchUrl && matchUrl.length == 4) {
                            var url = matchUrl[1];
                            var line = matchUrl[2];
                            var col = matchUrl[3];

                            loggableEvent.sourceJavascript = url;
                            loggableEvent.lineNumber = line + ':' + col;
                        }
                    }
                    catch (e) {
                    }
                    
                    	if (typeof exception === 'string' && cause == null) {
                    		var message = exception;
                    		exception = {message: message}
							}
                    
                    loggableEvent.message = truncateLog(exception.message);
                    loggableEvent.url = window.location.href;
                    loggableEvent.type = "angular";
                    loggableEvent.name = exception.name;
                    loggableEvent.stacktrace = truncateLog(exception.stack);
                    
                    eventLogging.queueEvent(loggableEvent);
                };
            }]);
	
			  $provide.decorator("inputDirective", ["$delegate", function($delegate) {
		
				  //See hiddenInputBrowserCacheDirective in angular 1.7.8
				  //We're try catching a method that fails in some browsers causing the angular app to be completely broken.
				  var oldCompile = $delegate[1].compile;
				  $delegate[1].compile = function() {
					  var oldRet = oldCompile.apply(this, arguments);
					  var oldPre = oldRet && oldRet.pre;
					  if (oldPre) {
						  oldRet.pre = function() {
							  try {
								  oldPre.apply(this, arguments);
							  }
							  catch(e) {
								  console.warn("failed to prevent autocomplete on hidden input fields");
							  }
						  };
					  }
			
					  return oldRet;
				  };
		
				  return $delegate;
			  }]);
			  
			  $provide.decorator('$templateRequest', ['$delegate', "$q", "$rootScope", "$timeout", function($delegate, $q, $rootScope, $timeout) {
				  var mappingsLoaded = false;
				  var replacementMap = {
					  							"global/announcements": "19b3eeba2d",
							"instant-answers/editor": "48ba3e9766",
							"instant-answers/instant-answers-module": "1e84e39d8d",
							"instant-answers/popUp": "1724b17490",
							"update-browser/update-browser": "2e7ba8e54d",

				  };
		
				  function newImpl(tpl, ignoreRequestError) {
			
					  function mapRequestToVersionedPath(requestedFilePath) {
						  var mappedPath = requestedFilePath;
				
						  var lookupKey = requestedFilePath.replace(/^\/templates\//, "");
						  lookupKey = lookupKey.replace(/.tpl$/, "");
				
						  var versionString = replacementMap[lookupKey];
				
						  //if replacementMap has no mapping, then don't modify incoming request.
						  if (versionString) {
							  if (lookupKey.indexOf(".") === -1) {
								  mappedPath = "/tpls/" + lookupKey + "-" + versionString + ".tpl";
							  }
							  else {
								  //util/progress.directive -> util/progress-123123.directive
						
								  var lastDotIndex = lookupKey.indexOf(".");
								  var firstPartOfLookupKey = lookupKey.substring(0, lastDotIndex);
								  var lastPartOfLookupKey = lookupKey.substring(lastDotIndex);
						
								  mappedPath = "/tpls/" + firstPartOfLookupKey + "-" + versionString + lastPartOfLookupKey + ".tpl";
							  }
						  }
				
						  return mappedPath;
					  }
			
					  if (mappingsLoaded) {
						  tpl = mapRequestToVersionedPath(tpl);
						  return $delegate(tpl, ignoreRequestError);
					  }
			
					  //if initial state of map has resource, don't load the entire set
					  var initialLookup = mapRequestToVersionedPath(tpl);
					  if (initialLookup != tpl) {
						  return $delegate(initialLookup, ignoreRequestError);
					  }
			
					  var deferred = $q.defer();
					  require(["angular/util/template-file-mappings"], function(templateMappings) {
						  if (!mappingsLoaded) {
							  Object.keys(templateMappings).forEach(function(key) {
								  replacementMap[key] = templateMappings[key];
							  });
					
							  mappingsLoaded = true;
						  }
				
						  deferred.resolve();
					  });
			
					  return deferred.promise
					  .then(function() {
						  tpl = mapRequestToVersionedPath(tpl);
						  return $delegate(tpl, ignoreRequestError);
					  });
				  }
				
				  
				  //Maintains ng-animate/$templateRequest interaction
				  var deregisterWatch = $rootScope.$watch(
					function() {return $delegate.totalPendingRequests;},
					function(totalPendingRequests) {
						//Don't init to zero immediately otherwise animations start working too early
						if((newImpl.totalPendingRequests == null && totalPendingRequests > 0) || newImpl.totalPendingRequests != null) {
							newImpl.totalPendingRequests = totalPendingRequests;
							if (totalPendingRequests === 0) {
								deregisterWatch();
							}
						}
					}
				  );
				
				  //in case we didn't have any templates on the page, this enables ng-animate
				  $timeout(function() {
						if (newImpl.totalPendingRequests == null) {
							newImpl.totalPendingRequests = 0;
							deregisterWatch();
						}
					},
					6 * 1000
				  );
				  
				  return newImpl;
			  }]);
			  
        }]);

        var _angularBootstrap = angular.bootstrap;
        angular.bootstrap = function () {
            if (arguments.length > 1) {
                var modules = arguments[1];
                if (typeof modules !== 'undefined' && Array.isArray(modules))
                    modules.unshift(_moduleName);
            }
            try {
                return _angularBootstrap.apply(this, arguments);
            }
            catch (exception) {
                var loggableEvent = new eventLogging.LoggableEvent("javascriptError", true);
                loggableEvent.message = truncateLog(exception.message);
                loggableEvent.url = window.location.href;
                loggableEvent.type = "angularBootstrapError";
                loggableEvent.name = exception.name;
                loggableEvent.stacktrace = truncateLog(exception.stack);
                eventLogging.queueEvent(loggableEvent);
                throw exception;
            }
        };

        return angular;
    }

    define(["angularDependency", "eventLogging", "util/remspect"], init);
})();
