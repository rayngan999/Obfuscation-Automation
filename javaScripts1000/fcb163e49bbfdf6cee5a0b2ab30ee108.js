                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                (function(Date,undefined){
var origParse=Date.parse,
numericKeys=[1,4,5,6,7,10,11];



Date.parseISO=function(date,strict){
var struct,minutesOffset=0;

strict=!!strict;



if(!strict){

struct=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(date);
}else{

struct=/^(\d{4}|[+\-]\d{6})\-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})(?:(Z)|([+\-]))(\d{2}):(\d{2})$/.exec(date);
}

if(struct){

for(var i=0,k;
(k=numericKeys[i]);++i){
struct[k]=+struct[k]||0;
}


struct[2]=(+struct[2]||1)-1;
struct[3]=+struct[3]||1;

if(struct[8]!=='Z'&&struct[9]!==undefined){
minutesOffset=struct[10]*60+struct[11];

if(struct[9]==='+'){
minutesOffset=0-minutesOffset;
}
}

return Date.UTC(struct[1],struct[2],struct[3],struct[4],struct[5]+minutesOffset,struct[6],struct[7]);
}

return NaN;
};

var msDateRegEx=new RegExp(/^\/Date\((d|-|.*)\)[\/|\\]$/);


Date.parseMsDate=function(date){
if(msDateRegEx.test(date)){
return parseFloat(RegExp.$1,10);
}else{
return NaN;
}
};





Date.parse=function(date){
return origParse(date)||Date.parseMsDate(date)||Date.parseISO(date)||NaN;
};

}(Date));
