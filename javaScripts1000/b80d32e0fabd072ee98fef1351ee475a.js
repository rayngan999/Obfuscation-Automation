define(['lib/maps/control','lib/maps/layer','localization/copy'],function(MapControl,MapLayer,copy){copy=copy.maps;var _tl=templates.info_mini&&templates.info_hover;if(!_tl){MapControl.prototype.loadTemplate(['info_mini','info_hover'].join('/'),'web/maps/infobox');}
MapControl.Regional=function(){var layer=null,poly=null,du=(window.url_countrycode?window.url_countrycode:'')+'/api/maps/regional',m={},ll={zoom:0,lat:0,lng:0},lstnr=null,_unit='',tmplts=['info_mini','info_hover'],iu="",iu_lrg="",_uw=(window.url_countrycode?window.url_countrycode:'')+'/weather/',cntr_pnt=null,to_loc=function(obj){var loc={pc:obj.id,lng:obj.X||'',lat:obj.Y||'',title:obj.name||'',temp:obj.temp,cond:obj.desc,feels:obj.feelslike,feels_avail:obj.feelslike_set,icon:iu.replace('{icon}',obj.icon),icon_lrg:iu_lrg.replace('{icon}',obj.icon),unit:obj.unit,width:50,height:45,textOffset:1}
return loc;},translate=function(data){var d={},marker={},loc={};if(typeof window.JSON!=='undefined'){data=JSON.parse(data);}else if(typeof window.$!=='undefined'){data=$.parseJSON(data);}else{data=eval('('+data+')');}
if(data.length&&typeof data!=='string'){while(d=data.pop()){if(typeof d.id=='undefined'){cntr_pnt=d;layer.setCenterData(cntr_pnt);continue;}
var loc=to_loc(d);loc.placecode=loc.pc;loc.zIndex=1;loc.icon_small=loc.icon;loc.icon=window._config.image_url+'spacer.gif';loc.icon=null;loc.width=1;loc.height=1;loc.zIndex=1;loc.anchor=layer.map.createPoint({x:27,y:-2});loc.htmlContent=Mustache.render(window.templates[tmplts[0]],{temp:loc.temp,unit:loc.unit,location:loc.title,icon:loc.icon_small,icon_lrg:loc.icon_lrg,feels_avail:loc.feels_avail,feels:loc.feels,desc:loc.cond});marker=layer.add(loc);layer.addListener(marker,(function(loc){var h=Mustache.render(window.templates[tmplts[0]],{temp:loc.temp,unit:loc.unit,location:loc.title,icon:loc.icon_small,feels_avail:loc.feels_avail,feels:loc.feels});var g=Mustache.render(window.templates[tmplts[1]],{temp:loc.temp,unit:loc.unit,feels_avail:loc.feels_avail,location:loc.title.replace(/\s/g,'&nbsp;'),feels:loc.feels,icon:loc.icon_lrg});var i,j;if(typeof map.addInfoWindows=='function'){}else if(typeof m.addInfoWindows=='function'){}
var m_id=marker.id+'-'+Math.round((new Date()).getTime()/1000);var hov_off=function(){if(window[m_id]==true)return;marker.m.setOptions({visible:true,htmlContent:h});if(typeof window[m_id]==='undefined'){delete(window[m_id]);}}
layer.addListenerHover(marker,function(){marker.m.setOptions({visible:false,zIndex:0,htmlContent:g});window[m_id]=true;},function(){window[m_id]=false;setTimeout(hov_off,500);});var prod_url;if(typeof _config.maps.regional_product_url!='undefined')
prod_url=_config.maps.regional_product_url;else
prod_url=_uw;return function(){self.track('select city',loc.title);self.notify(copy.redirect_city,copy.wait);self.sess.save_cookie_shrt('map_back',loc.lat+':'+loc.lng,(1/24/60/60)*20);window.location.href=prod_url+loc.pc;};}(loc)));window.maps_dataready=true;}}else{self.notify(copy.zoom_out,copy.zoom_in_current,5000);}},_data=function(opts){var e='';if(_unit=='f'){e='/F';}
__.a(du+"/{0}/{1}/{2}".format(opts.zoom,opts.lat,opts.lng)+e,translate,function(){});},_dist=function(lt,ln,rlat,rlng){var rtheta,sin=Math.sin,cos=Math.cos,acos=Math.acos,R=6371;d=acos(sin(rlat)*sin(lt)+cos(rlat)*cos(lt)*cos(rlng-ln))*R;d=Math.round(d,2);return d;},toR=function(n){return Math.PI*n/180;},curzoom=null,curzoomdir='',curbox=null,_closestBox=function(lat,lng){if(typeof window._bbox=='undefined')return null;var bb=window._bbox,i=bb.length-1,cbx={},_d=null,_dt,latr=toR(lat),lngr=toR(lng);for(;i>=0;i--){_dt=_dist(toR(bb[i].cy),toR(bb[i].cx),latr,lngr);if(_d==null||_dt<_d){_d=_dt;cbx=bb[i];}}
return cbx;},_debug=false,debug=function(o){if(!_debug)return false;console.log(o);},_inLongitude=function(lng,box){var eastBound=lng<box.x2;var westBound=lng>box.x1;var inLong;inLong=eastBound&&westBound;return inLong;},_inLatitude=function(lat,box){var inLat=lat>box.y2&&lat<box.y1;return inLat;},_inBox=function(lat,lng,box){var eastBound=lng<box.x2;var westBound=lng>box.x1;debug('_inBox','info');debug('0: '+lat+','+lng);debug('1a: '+lng+'<'+box.x2+'='+eastBound);debug('1b: '+lng+'>'+box.x1+'='+westBound);var inLong;debug('2: '+box.x1+'<'+box.x2);if(box.x1<box.x2){inLong=eastBound||westBound;}else{inLong=eastBound&&westBound;}
debug('inLong:'+(inLong?'true':'false'));debug('3a: '+lat+'>'+box.y2);debug('3b: '+lat+'<'+box.y1);var inLat=lat>box.y2&&lat<box.y1;debug('inLat:'+(inLat?'true':'false'));return inLat&&inLong;},_boxInBounds=function(box){var _map_box=m.getBoundInfo(),t=null,c1=_inBox(box.y1,box.x1,_map_box.b),c2=_inBox(box.y2,box.x2,_map_box.b);for(prop in box){switch(prop){case'x1':case'x2':t=_inLongitude(box[prop],_map_box.b);break;case'y1':case'y2':t=_inLatitude(box[prop],_map_box.b);break;}
if(t==true){return t;}}
return c1||c2;},_boundsInBox=function(box){var _map_box=m.getBoundInfo(),t=null,c1=_inBox(_map_box.b.y1,_map_box.b.x1,box),c2=_inBox(_map_box.b.y2,_map_box.b.x2,box);for(prop in box){switch(prop){case'x1':case'x2':t=_inLongitude(_map_box.b[prop],box);break;case'y1':case'y2':t=_inLatitude(_map_box.b[prop],box);break;}
if(t==false){return t;}}
return c1&&c2;},_boxdata=function(opts){var e='';if(_unit=='f'){e='/F';}
var _called=0;if(opts.y1==null||opts.x1==null||opts.y2==null||opts.x2==null){return;}
__.a(du+"/{0}/{1}/{2}/{3}/{4}".format(opts.zoom,opts.y1.toFixed(5),opts.x1.toFixed(5),opts.y2.toFixed(5),opts.x2.toFixed(5))+e,function(r){if(!_called){translate(r);}
_called++;},function(){});},_bx=function(bb){window._bbox=bb;},_zone=function(){return true;if(typeof window._bbox==='undefined'){_createbox();return true;}
var b=window._bbox,c=m.getCenter(),r=true;if(c.lat>b.x1&&c.lat<b.x2){if(c.lng>b.y1&&c.lng<b.y2){r=false;}}
return r;},_createbox=function(m){var inf=m.getBoundInfo(),z=m.getZoom(),b=inf.b,m=z/3,d=Math.round(inf.d);if(typeof window._config.fullmap_maptype!=='undefined'&&window._config.fullmap_maptype!==''){if(typeof copy.bounding_box_factor!=='undefined'&&copy.bounding_box_factor!==''){d=d*copy.bounding_box_factor;}
else{d=d*.5;}}
for(p in b){if(b[p]==null){continue;}
m=0;switch(p){case'x1':case'y2':m=d;break;case'x2':case'y1':m=d*-1;break;}
b[p]=b[p]+m;if(Math.abs(b[p])>180){}}
return b;},gc=function(){var nm="pelm_unit=",ca=document.cookie.split(';'),c='',i=ca.length-1,temp;for(;i>=0;i--){c=ca[i];while(c.charAt(0)==' '){c=c.substring(1,c.length);}
if(c.indexOf(nm)==0){temp=c.substring(nm.length,c.length);}}
if(!temp){temp=window._config.tempunit;}
return temp;},_get=function(lat,lng){if(layer!==null){if(layer instanceof MapLayer){}}
if(!self.active){return;}
opts={};if(!lat&&!lng){opts=m.getCenter();}else{opts.lat=lat;opts.lng=lng;}
opts=_box(opts.lat,opts.lng);opts.zoom=Math.round(m.getZoom());if(opts.zoom<3){self.notify(copy.zoom_in,copy.zoom_out_current,5000);self.reset(true);return;}
ll=opts;var bb=layer.boundingBox();var tu=gc();var force_refresh=false;if(tu!==_unit){_unit=tu;force_refresh=true;}
if(bb){bb.zoom=opts.zoom;_dist(opts.lat,opts.lng);var getdata=_closestBox(opts.lat,opts.lng);if(getdata==null&&curbox==null){}
var newzoom=false;if(curzoom==null||curzoom!=bb.zoom){newzoom=true;if(curzoom){curzoomdir+=curzoom<bb.zoom?'d':'u';if(curzoomdir.length==2){if(curzoomdir=='dd'){curbox=null;}
curzoomdir=curzoomdir[1];}
if(Math.abs(curzoom-bb.zoom)>2){curbox=null;}}
curzoom=bb.zoom;}
if(curbox==null){if(getdata){curbox=getdata;}else{curbox=getdata=_createbox(m);}
self.reset(true);var p;for(p in bb){if(typeof curbox[p]!=='undefined'&&curbox[p]!==null){bb[p]=curbox[p];}}
_boxdata(bb);}else{var _inbx=_inBox(opts.lat,opts.lng,curbox);var _inBounds=_boxInBounds(curbox);var _outBounds=_boundsInBox(curbox);if(_inBounds==true||_outBounds==false){_inbx=false;}
if(_inbx==false||newzoom==true||force_refresh==true){self.reset(true);if(_inbx==false){curbox=_createbox(m);}
for(p in bb){if(typeof curbox[p]!=='undefined'){bb[p]=curbox[p];}}
_boxdata(bb);if(getdata){_inbx=_inBox(opts.lat,opts.lng,getdata);if(_inbx==false){}}}else{}}}else{self.reset(true);_data(opts);}},_box=function(lat,lng){return{lat:lat,lng:lng};},self=this;self.getCenterMarker=function(){if(!layer)return;var c=m.getCenter(),p=null;if(window._config.maps.reg_cntr){if(!cntr_pnt){p=layer.closestTo(c.lat,c.lng);}else{p=cntr_pnt.coord;cntr_pnt=null;layer.setCenterData(cntr_pnt);}}else{cntr_pnt=null;p=layer.closestTo(c.lat,c.lng);layer.setCenterData(cntr_pnt);}
if(p){if(typeof p.placecode!=='undefined'){p=p.placecode;}}else{cntr_pnt=null;layer.setCenterData(cntr_pnt);}
return p;}
self.type='marker';self.reset=function(soft){if(!layer)return;layer.clear();if(typeof soft==='undefined'){try{layer.removeListener(lstnr);window._q.remove(self.check);$('#map_canvas').removeClass('regional');}catch(ex){console.warn(ex);}}}
self.refresh=function(){var mv=_zone();if(mv){_get();}}
self.box=function(){var opts={};opts=m.getCenter();opts.zoom=m.getZoom();if(ll==opts){}}
self.check=function(){if(window.moved){_get();}}
self.ic=0;self.init=function(cnf){self.ic+=1;for(var i=tmplts.length-1;i>-1&&!_tl;i--){if(typeof window.templates[tmplts[i]]=='undefined'&&self.ic<=25){setTimeout(function(){self.init(cnf);},50);return;}}
if(window._config.url_weather){_uw='/'+window._config.url_weather+'/';}
$('#map_canvas').addClass('regional');var opts={lat:'',lng:'',zoom:''};lat=null;lng=null;if(typeof cnf.lat!=='undefined'&&typeof cnf.lng!=='undefined'){lat=cnf.lat;lng=cnf.lng;}
if(cnf){if(typeof cnf.data!=='undefined'){du=cnf.data.length?cnf.data:du;}
iu=cnf.icon.length?cnf.icon:du;iu_lrg=cnf.icon.length?cnf.icon:du;}
if(map){m=map;layer=MapLayer.factory('Marker',m);_get(lat,lng);lstnr=m.addMoveListener('2000',self.refresh);}}}
$('.map_current').hover(function(){$(this).toggleClass('active');});return MapControl;});;