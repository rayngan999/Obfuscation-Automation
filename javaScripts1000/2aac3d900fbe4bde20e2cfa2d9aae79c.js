define(['module.base','session','lib/geoPosition/geoPosition'],function(Module,_session,geoPosition){Module.GPS_Location=(function(){var self=this,cookie='pelm_gps',_params={'lat':null,'lng':null},_callback=null;self._lookup=function(){if(typeof Modernizr!='undefined'&&Modernizr.geolocation){navigator.geolocation.getCurrentPosition(self._handleLookup,self._handleError);}else{if(window.geoPosition.init()){window.geoPosition.getCurrentPosition(self._handleLookup,self._handleError);}}}
self._handleLookup=function(position){_params.lat=position.coords.latitude;_params.lng=position.coords.longitude;self._save(_params);_callback(_params);}
self._handleError=function(err){if(err.code==1){}
else if(err.code==2){}
else if(err.code==3){}
_callback(false);}
self._save=function(params){_session.save_localstorage(cookie,JSON.stringify(params));}
self.init=function(){}
self.map_lookup=function(){self._lookup();}
self.locate_lookup=function(callback){_callback=callback;self._lookup();}
self.get=function(){if(typeof _session.fld(cookie)=="undefined"){return false;}
var data='';if(typeof JSON==='object'&&typeof JSON.parse==='function'){data=JSON.parse(_session.fld(cookie));}else{data=eval('('+data+')');}
return data;}});return Module.factory('GPS_Location');});;