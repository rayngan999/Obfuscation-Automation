define([],function(){if(!('indexOf'in Array.prototype)){Array.prototype.indexOf=function(find,i){if(i===undefined)
i=0;if(i<0)
i+=this.length;if(i<0)
i=0;for(var n=this.length;i<n;i++)
if(i in this&&this[i]===find)
return i;return-1;};}
var TemplateManager=function(){var url='/tpl/',_t={},self=this,_w=[],tries=30,steps=100,_cb=[],_get=function(url,p){if(!url||typeof url=='undefined'){return;}
var originalUrl=url;if(url.match(/tpl\/\w{2}_\w{2}\/r\d+\//)){url=url.replace(/tpl\/\w{2}_\w{2}\/r\d+\//,'tpl/')}
if(url.match(/tpl\/\w{2}_\w{2}\//)){url=url.replace(/tpl\/\w{2}_\w{2}\//,'tpl/')}
var tmprev='';var rev=window._config._rev;if(rev instanceof Array){rev=rev.pop();}
if(!rev){var _dt=new Date();tmprev='r'+_dt.getFullYear()+_dt.getMonth()+_dt.getDate();}else{tmprev='r'+rev;}
var tplurl=window._config.tpl_url;if(tplurl instanceof Array){tplurl=tplurl.pop();}
var lcle=window._config.locale;if(lcle instanceof Array){lcle=lcle.pop();}
url=url.replace(tplurl,tplurl+lcle+'/'+tmprev+'/');var failure=function(){tries=30;_get(originalUrl,p);};__.a(url,function(res){if(res){res=Function('return '+res)();}
_save(res,p);},function(res){setTimeout(failure,1000);});},_save=function(temp,p){var i=[],j='',k=_cb.length,rgx=null,rx=new RegExp('(^\/+)|([\/]{2,})|(\/+$)');if(typeof p==='string'){i=p.split('/');if(!i[i.length-1]){i.pop();}
if(i.length>1){while(j=i.pop()){if(temp[j]){_save(temp[j],j);}}
if(_w.indexOf(p)>=0){_w.splice(_w.indexOf(p),1);}
temp=null;}}
if(temp){_t[p]=temp;if(_w.indexOf(p)>=0){_w.splice(_w.indexOf(p),1);}
_t[p]=temp;rgx=new RegExp('(?:^|\/)'+p+'(?:\/|$)');for(k--;k>=0;k--){if(_cb[k][0]==p){_cb[k][1]();_cb.splice(k);}else{if(rgx.test(_cb[k][0])){_cb[k][0]=_cb[k][0].replace(rgx,'');_cb[k][0]=_cb[k][0].replace(rx,'');if(_cb[k][0].length==0){_cb[k][1]();}}}}
window.templates=_t;}};if(!(this instanceof TemplateManager)){return new TemplateManager();}
if(typeof window._config!=='undefined'&&typeof window._config.tpl_url!=='undefined'){url=window._config.tpl_url;}
self.get=function(){return t;};self.callback=function(cb){if(typeof cb.tries!="number"){cb.tries=tries;}
if(typeof cb=='function'){if(_w.length==0){cb();}else if(cb.tries){cb.tries=cb.tries-1;setTimeout(function(){self.callback(cb);},steps);}}};self.load=function(name,path){_get(url+(path?path+'/':'')+name,name);};self.isTemplateLoaded=function(tpl_name){var alreadyLoaded=false;var nameStr=tpl_name;if(typeof nameStr==='string'&&nameStr.indexOf('/')!=-1){var alreadyLoadedCounter=0;nameArray=nameStr.split('/');for(var q=0;q<nameArray.length;q++){if(_t[nameArray[q]])alreadyLoadedCounter++;}
if((alreadyLoadedCounter>0&&alreadyLoadedCounter<=nameArray.length)||_w.indexOf(tpl_name)!=-1){alreadyLoaded=true;}}else if(_t[tpl_name]){alreadyLoaded=true;}
return alreadyLoaded;};self.loader=function(o,cb){var i;if(typeof o.pop=='function'){while(i=o.pop()){if(typeof i.path!='undefined'&&typeof i.name!='undefined'&&(i.name&&i.name.indexOf("service")===-1)&&(i.path&&i.path.indexOf("service")===-1)){if(!self.isTemplateLoaded(i.name)){_w.push(i.name);_get(url+(i.path?i.path+'/':'')+i.name,i.name);}}}}
self.callback(cb);};_t={};if(typeof window.templates!=='undefined'){for(p in window.templates){_t[p]=window.templates[p];}}};return TemplateManager();});;