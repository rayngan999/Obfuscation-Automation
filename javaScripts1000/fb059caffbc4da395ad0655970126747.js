                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


(function($){
var PLUS_RE=/\+/gi;

var urlDecode=function(s){

if(s==null){
return"";
}



return decodeURIComponent(s.replace(PLUS_RE," "));
};


$.deparam=function(queryString){
if(typeof queryString!="string"){
throw new Error("$.deparam() expects a string for 'queryString' argument.");
}


if(queryString&&queryString.charAt(0)=="?"){
queryString=queryString.substring(1,queryString.length);
}

return $.parseDelimitedString(queryString,"&","=",urlDecode);
};


$.parseQueryString=$.deparam;


$.currentQueryString=function(){
return $.deparam(window.location.search);
};


$.appendQueryString=function(url,parsedQueryString){
var qs=$.param(parsedQueryString);
if(qs.length>0){
qs="?"+qs;
}

return url+qs;
};

})(jQuery);
