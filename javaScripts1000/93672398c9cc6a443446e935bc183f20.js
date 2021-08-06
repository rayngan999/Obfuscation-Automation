                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                





(function(module){
if(typeof window.define==='function'&&window.define.amd){

window.define(["underscore"],module);
}else{
module(window._);
}
}(function(_){
var applyToPrototype=function(prototype,methods){
for(var i=0;i<methods.length;i++){
(function(method){
if(!prototype[method]){
prototype[method]=function(){
var args=Array.prototype.slice.call(arguments)||[];
args.unshift(this);
return _[method].apply(this,args);
};
}
})(methods[i]);
}
};

applyToPrototype(Function.prototype,["bind"]);
applyToPrototype(Array.prototype,["forEach","map","reduce","reduceRight","filter","every","some","indexOf"]);
}));
