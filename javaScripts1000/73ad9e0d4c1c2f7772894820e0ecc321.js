                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
(function($){



$.encodeDelimitedString=function(data,itemDelimiter,pairDelimiter,keyEncoder,valueEncoder){
if(!data){
return"";
}

keyEncoder=keyEncoder||function(s){
return s;
};
valueEncoder=valueEncoder||keyEncoder;

var sb=[];

for(var key in data){
if(data.hasOwnProperty(key)){
sb.push(keyEncoder(key)+pairDelimiter+valueEncoder(data[key]));
}
}

return sb.join(itemDelimiter);
};



$.parseDelimitedString=function(delimitedString,itemDelimiter,pairDelimiter,keyDecoder,valueDecoder){
keyDecoder=keyDecoder||function(s){
return s;
};
valueDecoder=valueDecoder||keyDecoder;

var ret={};

if(delimitedString){
var pairs=delimitedString.split(itemDelimiter);
var len=pairs.length;
for(var i=0;i<len;i++){
var pair=pairs[i];

if(pair.length>0){
var delimIndex=pair.indexOf(pairDelimiter);
var key,value;

if(delimIndex>0&&delimIndex<=pair.length-1){
key=pair.substring(0,delimIndex);
value=pair.substring(delimIndex+1);
}else{
key=pair;
}

ret[keyDecoder(key)]=valueDecoder(value);
}
}
}

return ret;
};

})(jQuery);
