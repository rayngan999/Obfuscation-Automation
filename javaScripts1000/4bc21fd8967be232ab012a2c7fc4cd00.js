define(['mustache','util/templatemanager'],function(Mustache,TemplateManager){Function.prototype.curry=function(){var fn=this,args=Array.prototype.slice.call(arguments);return function(){return fn.apply(this,args.concat(Array.prototype.slice.call(arguments)));};};function getOffset(el){var _x=0;var _y=0;while(el&&!isNaN(el.offsetLeft)&&!isNaN(el.offsetTop)){_x+=el.offsetLeft-el.scrollLeft;_y+=el.offsetTop-el.scrollTop;el=el.offsetParent;}
return{top:_y,left:_x};}
function isScrolledIntoView(elem){var docViewTop=document.getElementsByTagName('html')[0].scrollTop,scrollpx=(window._config.lazyload_scroll_px||500),docViewBottom=(document.documentElement.clientHeight||window.innerHeight||document.body.clientHeight)+docViewTop,elemTop=getOffset(elem).top,elemBottom=elemTop-scrollpx;elemTop+=scrollpx;if(/div-gpt-ad-lowerbox/.test(elm.className)){attr=elm.getAttribute('data-param');var d_top=50,au=0;d_top=Function('return ('+attr+')')();if(d_top&&d_top.auto_load){au=d_top.auto_load;}
if(d_top&&d_top.dynamic_top){d_top=d_top.dynamic_top;}
elemTop=elemTop-d_top;elemBottom=elemTop-500;if(window._config.platform==au){return true;}}
if(/div-gpt-ad-lowerbanner/.test(elm.className)){var d_top=50,au=0;attr=elm.getAttribute('data-param');d_top=Function('return ('+attr+')')();if(d_top&&d_top.auto_load){au=d_top.auto_load;}
if(d_top&&d_top.dynamic_top){d_top=d_top.dynamic_top;}
elemTop=elemTop-d_top;elemBottom=elemTop-150;if(window._config.platform==au){return true;}}
if(/ad-bigbox-bottom/.test(elm.className)){attr=elm.getAttribute('data-param');var d_top=50;d_top=Function('return ('+attr+')')();if(d_top&&d_top.dynamic_top){d_top=d_top.dynamic_top;}
elemTop=elemTop-d_top;elemBottom=elemTop-50;}
return((elemBottom<=docViewBottom)&&(elemTop>=docViewTop));}
if(typeof document.getElementsByClassName!=='function'){document.getElementsByClassName=function(className){var results=[];function walkTheDOM(node,func){func(node);try{node=node.firstChild;while(node){walkTheDOM(node,func);node=node.nextSibling;}}catch(ex){}}
walkTheDOM(document.body,function(node){var a,c='',i=0;if(typeof node!=='undefined'){try{if(typeof node.className!=='undefined'){c=node.className;}}catch(ex){}}
if(c){a=c.split(' ');for(i=0;i<a.length;i++){if(a[i]===className){results.push(node);break;}}}});return results;}}
var Module=function(){};Module.loadStyle=function(elm){var sattr=elm.getAttribute('data-styles');if(sattr){elm.removeAttribute('data-styles');var sid=sattr.replace(/^[/]/,'').replace(/[/]/g,'-');if(!document.getElementById(sid)){sattr='r'+window._config._rev+'/'+sattr+'.css';if(typeof loadCSS=='function'&&false){loadCSS(window._config.css_url+sattr.replace('//','/'));}else{var sty=document.createElement('link');sty.id=sid;sty.href=window._config.css_url+sattr.replace('//','/');sty.rel="stylesheet";sty.media="none";sty.onload=(function(style){return function(){if(style.getAttribute('media')!='all'){style.setAttribute('media','all')};}})(sty);document.getElementsByTagName('head')[0].appendChild(sty);}}}}
Module.find=function(){var elms=document.getElementsByClassName('module'),attr='',i=0,parts=[],basePath=Module.basePath,_ar=Array.prototype.slice.call(arguments),_l=true;if(_ar.length){elms=document.getElementsByClassName(_ar.shift())}
if(basePath){basePath+='/';}
if(Module.prototype._debug){console.log('Module - Finding');console.log(elms);}
for(i=elms.length-1;i>=0;i--){elm=elms[i];attr=elm.getAttribute('data-template');if(attr&&!elm.getAttribute('data-loading')&&attr!=='services'){if(isScrolledIntoView(elm)){Module.loadStyle(elm);parts=attr.split('.');if(parts.length===1){parts[1]=parts[0];parts[0]='';}
attr=parts[1].replace(/\s+/g,'/');if(_l){elm.setAttribute('data-loading','1');}
TemplateManager.loader([{path:basePath+parts[0],name:attr}],(function(elm,attr){return function(){elm.removeAttribute('data-template');if(_l){Module.execute(elm);}}})(elm,attr));}}else{attr=elm.getAttribute('data-module');if(attr&&!elm.getAttribute('data-loading')){if(isScrolledIntoView(elm)){if(Module.prototype._debug){console.log('Data: Module');console.log(attr);}
Module.loadStyle(elm);elm.setAttribute('data-loading','1');Module.execute(elm);}}}}}
Module.boot=function(cb){var elms=document.getElementsByClassName('module'),attr='',boot=false,i=0,parts=[],basePath=Module.basePath;if(basePath){basePath+='/';}
if(Module.prototype._debug){console.log('Module - Finding');console.log(elms);}
for(i=elms.length-1;i>=0;i--){elm=elms[i];boot=elm.getAttribute('data-boot');attr=elm.getAttribute('data-module');if(attr&&boot){elm.setAttribute('data-loading','1');}}
if(typeof cb==='function'){cb();}}
Module.prototype={_name:"Module",version:'0.2',type:'',name:function(){return this._name;},inview:false,tpl:[],tpl_main:'',sty:'',addListener:function(l,f){if(Module.prototype._debug){console.info('listen for '+l);}
pelm.addListener(l,f);},isModule:function(m){var r=false;if(typeof m.prototype!=="undefined"&&typeof m.prototype.name!=="undefined"){if(m.name()==this.name()){r=true;}}
return r;},extend:function(base){if(!this.isModule(base)){base=Module.factory(base);}
for(prop in base){if(base.hasOwnProperty(prop)){this[prop]=base[prop];}}},_global_vars:{image_url:'',platform:'web'},_debug:false,_render:function(template,data,dnu,partials){if(typeof template!=='string'){if(window.templates[this.tpl_main]){template=window.templates[this.tpl_main];}
if(template){template=template[this.tpl_main];}else{return;}}
var frag=document.createDocumentFragment(),el=document.createElement('div'),i=0,m=0,r='';if(typeof data=='undefined'){data={};}
for(prop in Module.prototype._global_vars){if(typeof data[prop]=='undefined'){data[prop]=Module.prototype._global_vars[prop];}}
if(Module.prototype._debug){console.info('RENDERING');console.log(template);console.log(data);console.log(typeof partials!=='undefined'?partials:window.templates);console.log(typeof dnu=='undefined'?'display HTML':'return HTML var');console.log(this.elm);}
el.innerHTML=r=Mustache.render(template,data,{});el=el.childNodes;m=el.length;for(i=0;i<m;i++){frag.appendChild(el[i].cloneNode(true));}
if(this.elm&&typeof dnu=='undefined'){this.elm.innerHTML="";this.elm.appendChild(frag.cloneNode(true));r=true;}
return r;},element:function(el){if(el!==null&&typeof el=='object'){if(typeof el.tagName!=='undefined'){this.elm=el;}else if(el.length==1){this.element(el[0]);}}
return this.elm;},show:function(){if(typeof this.inview==='function'){this.inview();}},template_manager:TemplateManager}
Module.getGlobal=function(prop){var res=null;if(typeof Module.prototype._global_vars[prop]!=='undefined'){res=Module.prototype._global_vars[prop];}
return res;}
Module.factory=function(type){var constr=type,mod;if(typeof Module[constr]!=="function"){throw{name:"Error",message:constr+" doesn't exist"};}
if(typeof Module[constr].prototype.name!=="function"){Module[constr].prototype=new Module();}
mod=new Module[constr]();mod.elm=null;if(mod.tpl_main){mod.render=Module.prototype._render.curry(window.templates[mod.tpl_main]);}
return mod;};Module.load=function(domElement){var element=domElement,moduleName=element.getAttribute("data-module"),basePath=Module.basePath;if(Module.prototype._debug){console.log('load Module');console.log(moduleName);}
if(moduleName){element.removeAttribute("data-module");if(domElement.getAttribute('data-loading')){domElement.removeAttribute('data-loading');}
if(basePath){basePath+='/';}
require([basePath+'modules/'+moduleName],function(module){var m=null;if(typeof module!=='undefined'){if(typeof module._name!=='undefined'){module.init(element);}else if(typeof module.pop==='function'){while(m=module.shift()){m.init(element);}}}});}};Module.execute=function(element){var element=element,dataModules='',i=dataModules.length;if(Module.prototype._debug){console.log('Module.execute');console.log(element);}
if(i>0){for(i=i-1;i>=0;i--){Module.load(dataModules[i]);}}else if(element){Module.load(element);}};if(window._config){for(prop in Module.prototype._global_vars){if(typeof window._config[prop]!='undefined'){Module.prototype._global_vars[prop]=window._config[prop];}}}
Module.basePath=Module.prototype._global_vars.platform;Module.find();Module.find('_module');window._q.add(Module.find,2);window._Module=Module;return Module;});;