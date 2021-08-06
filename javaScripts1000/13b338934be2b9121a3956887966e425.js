define([],function(){var weatherConverter=function(){var self={};self.temperature=function(value,unit){var newval='-';value=value||'';if(value==''||isNaN(parseInt(value))){return newval;}
switch(unit.toLowerCase()){case'f':newval=Math.round((parseInt(value)*1.8)+32);break;case'c':newval=Math.round((parseInt(value)-32)*(5/9));break;}
return newval;};return self;};return weatherConverter();});;