                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                


(function($){
var _mapCamelToDash={};



$.camelToDashCase=function(prop){

var value=_mapCamelToDash[prop];
if(!value){
value=prop.replace(/([A-Z])/g,"-$1").toLowerCase();
_mapCamelToDash[prop]=value;
}

return value;
};

var _mapDashToCamel={};


$.dashToCamelCase=function(sProperty){
var value=_mapDashToCamel[sProperty];


if(!value){
if(sProperty.indexOf("-")!=-1){

var aOut=[];
for(var i=0,len=sProperty.length;i<len;++i){
var sChar=sProperty.charAt(i);
if(sChar=="-"){
i++;
sChar=sProperty.charAt(i).toUpperCase();
aOut.push(sChar);
}else{
aOut.push(sChar);
}
}

value=aOut.join("");
}else{
value=sProperty;
}

_mapDashToCamel[sProperty]=value;
}

return value;
};

var cssKeyEncoder=function(s){
return $.trim($.camelToDashCase(s));
};

var cssKeyDecoder=function(s){
return $.trim($.dashToCamelCase(s));
};

$.encodeCssString=function(data){
return $.encodeDelimitedString(data,";",":",cssKeyEncoder,$.trim);
};

$.parseCssString=function(cssString){
return $.parseDelimitedString(cssString,";",":",cssKeyDecoder,$.trim);
};

})(jQuery);
