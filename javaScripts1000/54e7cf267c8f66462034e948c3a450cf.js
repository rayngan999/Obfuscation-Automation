                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
(function($){

$.proxyAll=function(obj,methods){

if(!methods){
methods=[];
for(var prop in obj){
if(typeof obj[prop]=="function"){
methods.push(prop);
}
}
}

else if(!$.isArray(methods)){
methods=Array.prototype.slice.call(arguments,1);
}


$.each(methods,function(i,method){
obj[method]=$.proxy(obj[method],obj);
});
};

})(jQuery);
