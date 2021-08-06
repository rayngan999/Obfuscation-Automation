;define('lib/maps/mapping',[],function(){var Mapping=function(){if(!Object.keys){Object.keys=(function(){var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!({toString:null}).propertyIsEnumerable('toString'),dontEnums=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],dontEnumsLength=dontEnums.length;return function(obj){if(typeof obj!=='object'&&typeof obj!=='function'||obj===null)throw new TypeError('Object.keys called on non-object');var result=[];for(var prop in obj){if(hasOwnProperty.call(obj,prop))result.push(prop);}
if(hasDontEnumBug){for(var i=0;i<dontEnumsLength;i++){if(hasOwnProperty.call(obj,dontEnums[i]))result.push(dontEnums[i]);}}
return result;}})();};var args=Array.prototype.slice.call(arguments),callback=args.pop(),modules=(args[0]&&typeof args[0]==="string")?args:args[0],i,nm=Mapping.modules,lib=null,geoOptions={enableHighAccuracy:false,timeout:8000,maximumAge:(6*60*60*1000)},markers=[],tiles=[],polygons=[],vectors=[],layers=[],labels_on='visible',queue={'move':[],'timelapse':[]},handlers=[],handlers_map=[],_cntr={lat:null,lng:null},_bnds={x1:0,y1:0,x2:0,y2:0},_bounds_adjust=function(b,d){var p='',a=0;if(b){for(p in b){a=0;switch(p){case'x1':case'x2':a+=90;case'y1':case'y2':a+=90;if(d){d[p]=a+b[p]}else{b[p]=a+b[p]}
break;}}}
return b;};var ColorConvert=function(){var DEC=10,HEX=16,OCT=8,opacity=255;var is_number=function(n){var r=false,m=null;if(typeof n=='number'&&!isNaN(n)){r=true;}else{m=parseInt(n,HEX);if(typeof m=='number'&&!isNaN(m)){r=true;}
if(!r){m=parseInt(n,OCT);if(typeof m=='number'&&!isNaN(m)){r=true;}}}
return r;}
if(!(this instanceof ColorConvert)){return new ColorConvert();}
var _toDec=function(n,base){var r=null;if(is_number(n)){r=parseInt(n,base);}
return r;}
var octToDec=function(n){return _toDec(n,OCT);}
var hexToDec=function(n){return _toDec(n,HEX);}
var splitString=function(str){var r='',b='',g='';r=str.slice(0,2);g=str.slice(2,4);b=str.slice(4,6);return[r,g,b];}
var expandString=function(str){var l=0,r=null,p=[],t=0;str=str.replace('#','');l=str.length;if(l==6){r=str;}else if(l==3){p=str.split('');t=p.pop();p.push(p[1]);p.unshift(p[0]);p.push(t);p.push(t);r=p.join('');}
return r;}
var stringToObject=function(clr_str){var obj={a:255,r:null,g:null,b:null,hx:''},a=[];if(typeof clr_str=='string'){clr_str=expandString(clr_str);if(clr_str){obj=arrayToObject(splitString(clr_str),obj);obj.hx=clr_str;}}
return obj;}
var arrayToObject=function(a,obj){obj.r=a.shift();obj.g=a.shift();obj.b=a.shift();return obj;}
var objectToString=function(obj){}
this.setOpacity=function(n){if(is_number(n)){n=Math.abs(n);if(n>100){opacity=100;}else if(n<=0){opacity=0;}else{opacity=Math.round(255*(n/100));}}}
this.hexStringToObject=function(str){var o=stringToObject(str);if(o.r!=null){o.r=hexToDec(o.r);o.g=hexToDec(o.g);o.b=hexToDec(o.b);o.a=opacity;}
return o;}}
if(!(this instanceof Mapping)){return new Mapping(modules,callback);}
this.el=null;this.map=null;this.options={zoom:2,apikey:'',type:'road'};this.debugstatus=function(){if(typeof console!='undefined'){console.log('--DEBUG--');console.log('map handlers');console.log(handlers_map);console.log('handlers');console.log(handlers);}}
window.map_debug=this.debugstatus;this.markerOptions={};this.setElement=function(id){var tmp=document.getElementById(id);if(tmp){this.el=tmp;}
return this;}
if(!modules||modules==='*'){modules=[];for(i in Mapping.modules){if(Mapping.modules.hasOwnProperty(i)){modules.push(i);}}}
for(i=0;i<modules.length;i+=1){var t=Mapping.modules[modules[i]](this);if(!lib){if(t.type=='map'){lib=t;if(t.requires){this.requires=t.requires;}}}
delete(t);}
this.create=function(cb){window.map=this.map=lib._create(this.el,this.options);_has_moved();lib._setMapMoveEvent(this.map,function(){window.mapmoved=true;});lib._setMapZoomEvent(this.map,function(){dataLayer.push({'event':'eventTracker','eventCategory':window._config.ga_product,'eventAction':"clicks",'eventLabel':"mapsChangeZoom"});});if(typeof cb==='function'){cb();}
return this;}
this.setOptions=function(options){if(!this.map){Object.deepExtend(this.options,options);}else{lib._setOptions(options,this.map);}
return this;}
this.updateItemOptions=function(item,options){return lib._updateItemOptions(item,options);}
this.setMarkerOptions=function(options){Object.deepExtend(this.markerOptions,options);return this;}
this.refresh=function(){return this;}
this.addMarker=function(options){var tm=null,id=0;if(options.id){id=options.id;delete(options.id);}else{id=markers.length+1;}
Object.deepExtend(options,this.markerOptions);tm=lib._addMarker(options,this.map);if(tm){tm=markers[markers.length]={id:id,m:tm,lat:options.lat,lng:options.lng,setOptions:(function(_this_,_m_){return function(opts){_this_.updateItemOptions(_m_,opts)}})(this,tm)};}
return tm?tm:false;}
this.getMarker=function(id){for(var i=markers.length;i;i--){if(markers[i-1].id==id){return markers[i-1];}}
return false;}
this.createLocation=function(options){return lib._createLocation(options,map);}
this.createPoint=function(options){return lib._createPoint(options,map);}
this.attachMarkerListener=function(marker,callback,type){var h=lib._addMarkerListener(marker.m,callback,type);handlers.push(h);return h;}
this.attachItemListener=function(item,callback,type){var h=lib._addItemListener(item,callback,type);handlers.push(h);return h;}
this.setTileDownloadComplete=function(callback){var h=lib._setTileDownloadComplete(this.map,callback);if(h){handlers.push(h);}
return h;}
this.removeHandler=function(handler){return lib._removeHandler(handler);}
this.removeItem=function(item){return lib._removeItem(item,this.map);}
this.addTile=function(options){var tile=null,update=false
if(options.id){id=options.id;update=true;}else{id=tiles.length+1;if(typeof options=='string'){options={uri:options};}}
Object.deepExtend(options,this.tileOptions);if(!update){tile=lib._addTile(options,this.map);if(tile){tile=tiles[tiles.length]={id:id,m:tile,lat:options.lat,lng:options.lng,meta:options};}}else{tile=lib._updateTile(options.m,options,this.map);}
return tile?tile:false;}
this.createTile=function(options){var tile=null;if(options.id){id=options.id;delete(options.id);}else{id=tiles.length+1;}
Object.deepExtend(options,this.tileOptions);tile=lib._createTile(options,this.map);if(tile){tile=tiles[tiles.length]={id:id,m:tile,lat:options.lat,lng:options.lng};}
return tile?tile:false;}
this.updateTile=function(tile,options){if(tile){lib._updateTile(tile,options,this.map);}
return tile;}
this.getTile=function(id){for(var i=this.tiles.length;i;i--){if(this.tiles[i-1].id==id){return this.tiles[i-1];}}
return false;}
this.baseTileCount=function(){return lib._baseTileCount();}
this.addVector=function(options){var vector=null;if(options.id){id=options.id;delete(options.id);}else{id=vectors.length+1;}
Object.deepExtend(options,this.tileOptions);vector=lib._addVector(options,this.map);if(vector){vectors=vectors[vectors.length]={id:id,m:vector};}
return vector?vector:false;}
this.getVector=function(id){for(var i=vectors.length;i;i--){if(vectors[i-1].id==id){return vectors[i-1];}}
return false;}
this.addPolygon=function(options){var polygon=null;if(options.id){id=options.id;delete(options.id);}else{id=polygons.length+1;}
Object.deepExtend(options,this.tileOptions);polygon=lib._addPolygon(options,this.map);if(polygon){polygons=polygons[polygons.length]={id:id,m:polygon};}
return polygon?polygon:false;}
this.getPolygon=function(id){for(var i=polygons.length;i;i--){if(polygons[i-1].id==id){return polygons[i-1];}}
return false;}
this.addLayer=function(layer){if(typeof layer,name==='function'&&layer.name()==='MapLayer'){}
return false;}
this.addInfoWindow=function(loc,content){if(!loc.lat&&!loc.lng){return this;}
var inf=lib._addInfoWindow(loc,content,this.map);return inf;}
this.addInfoWindows=function(loc,content){if(!loc.lat&&!loc.lng){return this;}
var inf=lib._addInfoWindows(loc,content,this.map);return inf;}
this.hideInfoWindows=function(){lib._hideInfoWindows(this.map);}
this.zoom=function(level){level=level?level:false;return lib._zoom(level,this.map);}
this.getZoom=function(){return this.zoom(false);}
this.toggleLabels=function(){labels_on=labels_on=='visible'?'hidden':'visible';return lib._setOptions({labelOverlay:labels_on},this.map);}
this.moveScreen=function(dir){var bnd=this.getBounds(),cntr=this.getCenter(),diff;switch(dir.toUpperCase()){case'N':diff=bnd.y1-cntr.lat;cntr.lat+=diff*2;break;case'E':diff=cntr.lng-bnd.x2;cntr.lng-=diff*2;break;case'S':diff=cntr.lat-bnd.y2;cntr.lat-=diff*2;break;case'W':diff=bnd.x1-cntr.lng;cntr.lng+=diff*2;break;}
if(diff){this.go(cntr.lat,cntr.lng);}}
this.getBoundInfo=function(dir){var bnd=this.getBounds(),cntr=this.getCenter(),diff=0;if(typeof dir!=='string'){dir='W';}
switch(dir.toUpperCase()){case'N':diff=bnd.y1-cntr.lat;cntr.lat+=diff*2;break;case'E':diff=cntr.lng-bnd.x2;cntr.lng-=diff*2;break;case'S':diff=cntr.lat-bnd.y2;cntr.lat-=diff*2;break;case'W':default:diff=bnd.x1-cntr.lng;cntr.lng+=diff*2;break;}
return{b:bnd,c:cntr,d:diff};}
this.setBounds=function(bnds){_bounds_adjust(bnds,_bnds);return _bnds;}
this.inBounds=function(lat,lng,bnds){var r=false,b={},clc=true;if(!bnds){if(!_bnds){bnds=this.getBounds();}else{b=_bnds;clc=false;}}
if(clc){_bounds_adjust(bnds,b);}
lng=180+lng;lat=90+lat;if(b.x1<lng&&lng<b.x2){if(b.y1>lat&&lat>b.y2){r=true;}}
return r;}
this.go=function(){var args=Array.prototype.slice.call(arguments);args.push(this.map);lib._go.apply(null,args);}
this.center=function(){lib._center(this.map,arguments);return this;}
this.clear=function(){var h=null;lib._clear(this.map);while(h=handlers.pop()){lib._removeHandler(h);}
return this;}
this.clearAll=function(){var h=null;this.clear();while(h=handlers_map.pop()){lib._removeHandler(h);}}
var _moved=function(callback,interval){if(window.mapmoved){callback();window.mapmoved=false;}
window.setTimeout(function(){_moved(callback,interval);},interval);}
var _move_cb={};var _has_moved=function(){if(window.mapmoved){for(f in _move_cb){_move_cb[f]();}
window.mapmoved=false;}
window.setTimeout(_has_moved,250);}
this.addMoveListener=function(){var args=Array.prototype.slice.call(arguments),cb=args.shift();while(typeof cb!=='function'&&args.length!==0){cb=args.shift();}
var n=Object.keys(_move_cb).length,x=n+1;if(typeof cb=='function'){_move_cb[n]=cb;}
return(Object.keys(_move_cb).length==x)?n:false;}
this.removeMoveListener=function(i){var n=Object.keys(_move_cb).length,x=n-1;if(typeof _move_cb[i]=='function'){delete(_move_cb[i]);}
return(Object.keys(_move_cb).length==x);}
this.getBounds=this.getBounding=function(){return lib._getBounds(this.map);}
this.getCenter=function(){var cntr=lib._getCenter(this.map);return cntr;}
this.getDirection=function(){var dr=false,bnd=this.getCenter(),cntr=_cntr,_dirs=0;dr=_dirs;return dr;}
this.getLat=function(){var p=this.getCenter();return p.lat;}
this.getLong=this.getLng=function(){var p=this.getCenter();return p.lng;}
this.offset=function(lat,lng,x,y){var pt;pt=lib._locationToPixel(lat,lng,this.map);if(pt){pt.x+=x;pt.y-=y;pt=lib._pixelToLocation(x,y,this.map);if(pt.lat&&pt.lng){lat=pt.lat;lng=pt.lng;}}
return{lat:lat,lng:lng};}
this.locationToPixel=function(lat,lng,ref){return lib._locationToPixel(lat,lng,this.map,ref);}
this.pixelToLocation=function(x,y,ref){return lib._pixelToLocation(x,y,this.map,ref);}
this.changeLat=function(miles){var earth_radius=3960.0,degrees_to_radians=Math.PI/180.0,radians_to_degrees=180.0/Math.PI;return(miles/earth_radius)*radians_to_degrees;}
this.changeLng=function(miles,lat){var earth_radius=3960.0,degrees_to_radians=Math.PI/180.0,radians_to_degrees=180.0/Math.PI,r;r=earth_radius*Math.cos(lat*degrees_to_radians);return(miles/earth_radius)*radians_to_degrees;}
this.getHeight=function(){return lib._getHeight(this.map);}
this.getWidth=function(){return lib._getWidth(this.map);}
this.type=function(type){return lib._type(type?type:null,this.map);}
this.ready=function(callback){if(!lib._ready()){setTimeout(function(){},50);}else{if(typeof callback=='function'){callback();}}
return this;}
this.createColor=function(color,alpha){return lib._createColor(color,alpha);}
this.traffic=function(){return lib._traffic(this.map);}
this.activateTrafficLayer=function(){if(!this.trafficLayer){this.trafficLayer=new google.maps.TrafficLayer();}
if(this.map){this.trafficLayer.setMap(this.map)}}
this.deactivateTrafficLayer=function(){if(this.trafficLayer){this.trafficLayer.setMap(null)}}
var subs={}
this.listen=function(evt,cb){if(typeof evt!=='string'||typeof cb!=='function'){return;}
if(typeof subs[evt]==='undefined'){subs[evt]=[];}
subs[evt].push(cb)}
this.fire=function(evt,d){if(typeof evt!=='string'){return;}
if(typeof subs[evt]!=='undefined'){var i=subs[evt].length-1;for(i;i>=0;i--){subs[evt][i](d);}}}
lib._clr=new ColorConvert();lib.do_options_match=function(options,defaults,optionsMapper,propertyMatcher){var prop,p,d=defaults;for(prop in options){if(options.hasOwnProperty(prop)){if(optionsMapper[prop]){if(propertyMatcher[prop]){p=propertyMatcher[prop];if(p[options[prop]]){options[prop]=p[options[prop]];}else{options[prop]=p.dflt;}}
options[optionsMapper[prop]]=options[prop];}}}
Object.deepExtend(d,options);return d;}
this.webglfromLatLngToPoint=function(latLng){var siny=Math.min(Math.max(Math.sin(latLng.lat()*(Math.PI/180)),-.9999),.9999);return{x:128+latLng.lng()*(256/360),y:128+0.5*Math.log((1+siny)/(1-siny))*-(256/(2*Math.PI))};}
this.webglfromPointToLatLng=function(point){return{lat:(2*Math.atan(Math.exp((point.y-128)/-(256/(2*Math.PI))))-
Math.PI/2)/(Math.PI/180),lng:(point.x-128)/(256/360)};}
this.webglgetTileAtLatLng=function(latLng,zoom){var t=Math.pow(2,zoom),s=256/t,p=this.webglfromLatLngToPoint(latLng);return{x:Math.floor(p.x/s),y:Math.floor(p.y/s),z:zoom};}
this.webglgetTileBounds=function(tile,zoom){tile=this.normalizeTile(tile,zoom);var t=Math.pow(2,zoom),s=256/t,sw={x:tile.x*s,y:(tile.y*s)+s},ne={x:tile.x*s+s,y:(tile.y*s)};return{sw:this.webglfromPointToLatLng(sw),ne:this.webglfromPointToLatLng(ne)}}
this.webglTileToQuadKey=function(tilex,tiley,zoom){var quad={num:"",sw:0.0,ne:0.0,nw:0.0,se:0.0,mesh:0,vertices:0,latlngs:0,xyArray:0,velarray:0,newLatlngs:0};var tile={x:tilex,y:tiley}
var ti=this.webglgetTileBounds(tile,zoom);quad.sw=ti.sw;quad.ne=ti.ne;quad.nw=new google.maps.LatLng(quad.ne.lat,quad.sw.lng);quad.se=new google.maps.LatLng(quad.sw.lat,quad.ne.lng);quad.mesh=0;quad.vertices=0;quad.xyArray=0;quad.velarray=0;quad.newLatlngs=[];for(var i=zoom;i>0;i--){var mask=1<<(i-1);var cell=0;if((tilex&mask)!=0)
cell++;if((tiley&mask)!=0)
cell+=2;quad.num+=cell;}
return quad;}
this.QuadKeyToTile=function(quadKey){var tileX=0;var tileY=0;var zoom=quadKey.length;for(var i=zoom;i>0;i--){var mask=1<<(i-1);switch(quadKey[zoom-i]){case'0':break;case'1':tileX|=mask;break;case'2':tileY|=mask;break;case'3':tileX|=mask;tileY|=mask;break;}}
var tile={x:tileX,y:tileY};return tile;}
this.normalizeTile=function(tile,zoom){var t=Math.pow(2,zoom);tile.x=((tile.x%t)+t)%t;tile.y=((tile.y%t)+t)%t;return tile;}
this.webglQuadKeyToLatLong=function(quadkey){var x=0;var y=0;var zoomLevel=quadkey.length;for(var i=0;i<quadkey.length;i++)
{var factor=Math.pow(2,zoomLevel-i-1);switch(quadkey.charAt(i))
{case'0':break;case'1':x+=factor;break;case'2':y+=factor;break;case'3':x+=factor;y+=factor;break;}}
var pixelX=(x*256)+128;var pixelY=(y*256)+128;var res={latitude:0.0,longitude:0.0};res.longitude=pixelX*360/(256*Math.pow(2,zoomLevel))-180;res.latitude=Math.asin((Math.exp((0.5-pixelY/256/Math.pow(2,zoomLevel))*4*Math.PI)-1)/(Math.exp((0.5-pixelY/256/Math.pow(2,zoomLevel))*4*Math.PI)+1))*180/Math.PI;return res;}
this.webglClip=function(n,minValue,maxValue){return Math.min(Math.max(n,minValue),maxValue);}
this.webglMapSize=function(levelOfDetail){return 256<<levelOfDetail;}
this.LatLongToPixelXY=function(latitude,longitude,levelOfDetail){latitude=webglClip(latitude,MinLatitude,MaxLatitude);longitude=webglClip(longitude,MinLongitude,MaxLongitude);x=(longitude+180)/360;sinLatitude=Math.sin(latitude*Math.PI/180);y=0.5-Math.log((1+sinLatitude)/(1-sinLatitude))/(4*Math.PI);mapSize=webglMapSize(levelOfDetail);var res={pixelX:0,pixelY:0};res.pixelX=(webglClip(x*mapSize+0.5,0,mapSize-1))|0;res.pixelY=(webglClip(y*mapSize+0.5,0,mapSize-1))|0;return res;}
this.PixelXYToLatLong=function(pixelX,pixelY,levelOfDetail){var mapSize=webglMapSize(levelOfDetail);var x=(webglClip(pixelX,0,mapSize-1)/mapSize)-0.5;var y=0.5-(webglClip(pixelY,0,mapSize-1)/mapSize);return{lat:90-360*Math.Atan(Math.Exp(-y*2*Math.PI))/Math.PI,lng:360*x};}
try{callback.apply(this);}catch(ex){}};Mapping.prototype={_name:"Mapping",version:"0.3",name:function(){return this._name;}};Mapping.modules={};return Mapping;});;define('lib/animation',[],function(){(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];}
if(!window.requestAnimationFrame)
window.requestAnimationFrame=function(callback,element){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};if(!window.cancelAnimationFrame)
window.cancelAnimationFrame=function(id){clearTimeout(id);};}());var Animation=function(){var frames=0,loopbehaviour,framerate=0,framespeed=100,opacity=1,state=0,states=['stop','play','error'],status=0,statuses=['stop','pause','play','error'],lookAhead=3,_intervalId=null,_frame=0,_frame_prev=0,_frames=[],_direction=1,_playing=false,hooks={play:[],stop:[],next:[],prev:[],move:[],reset:[],draw:[],init:[],postdraw:[],loop:[],start:[]},noop=function(){},_state=function(s){if(s>=0&&s<=states.length-1){state=s;}
return state;},_status=function(s){if(s>=0&&s<=status.length-1){status=s;}
return status;},_setStatus=function(state){return true;var si=statuses.indexOf(state),st=-1,rt='na',rts=-1;if(si==-1){si=0;}
if(si>=0){si=_status(si);rt=statuses[si];rts=rt;if(rts=='pause'){rts=statuses.indexOf('play');rts=statuses[rts];}
st=states.indexOf(rt)}
return rt;},_updateFrameSpeed=function(fr){var s=1000;if(typeof fr!=='number'||isNaN(fr)||fr<=0){framerate=1;}else if(fr>=0){framerate=fr;}
framespeed=Math.round(s/framerate);},_run_hooks=function(event,params){var i=0,args=params!==null?params:null;if(typeof hooks[event]!=='undefined'){i=hooks[event].length-1;for(;i>=0;i--){hooks[event][i](args);}}},_init=function(options){if(typeof options!=='undefined'){if(typeof options.framerate!=='undefined'){framerate=options.framerate;_updateFrameSpeed();}
if(typeof options.buffer!=='undefined'){lookAhead=options.buffer;}
if(typeof options.loop!=='undefined'){loopbehaviour=options.loop;}
if(typeof options.frames!=='undefined'){_frames=options.frames;}else{}}},frame_start=null,_runInterval=function(){var progress,timestamp=+new Date();if(frame_start===null){frame_start=timestamp;}
progress=timestamp-frame_start;if(progress<framespeed){_intervalId=requestAnimationFrame(_runInterval);}else{_nextFrame();frame_start=null;_intervalId=requestAnimationFrame(_runInterval);}
return _intervalId;},_stopInterval=function(id){window.cancelAnimationFrame(id);},intfired=false,__play=function(){_play(true);},_play_to=null,_play=function(x){if(_intervalId===null){intfired=false;_intervalId=_runInterval(_nextFrame,framespeed);if(_play_to){clearTimeout(_play_to);}
if(!x){_play_to=setTimeout(__play,framespeed+1);}}
if(_play_to){clearTimeout(_play_to);}
_playing=true;_setStatus('play');},_stop=function(pause){intfired=true;_playing=false;if(_intervalId!=null){_stopInterval(_intervalId);_intervalId=null;}
_setStatus(pause?'pause':'stop');},_goToFrame=function(n){if(n>0&&(n<_frames.length||_frames.length==1)){_frame=n;_redraw();}},_reset=function(){_stop();_frame=0;_redraw();},_nextFrame=function(){if(intfired==false){intfired=true;}
var looped=false;if(_frame===0){_run_hooks('start',_frame);}
_frame_prev=_frame-1;_frame+=_direction;if(_frames.length>1&&(_frame>=_frames.length||_frame<0)){switch(loopbehaviour){case'stop':_stop();_frame-=_direction;break;case'bounce':_direction*=-1;_frame=_frame+(2*_direction);break;case'loop':default:_frame=_frames.length-(_direction*_frame);break;}
looped=true;}
_run_hooks(_direction>0?'next':'prev',_frame);_redraw();if(looped){_run_hooks('loop',_frame);}},_redraw=function(){_run_hooks('draw',_frame);_run_hooks('postdraw',_frame_prev);},_reverse=function(){_direction*=-1;};if(!(this instanceof Animation)){return new Animation();}
this.play=function(n){if(n>=0){_frame=n;_run_hooks('start');}
_play();_run_hooks('play');}
this.stop=function(n){_stop();if(typeof n==='number'){_goToFrame(n);}
_run_hooks('stop');};this.pause=function(n){_stop(true);if(typeof n==='number'){_goToFrame(n);}
_run_hooks('stop');};this.reset=function(){_reset();_run_hooks('reset');};this.goToFrame=function(n){var wasplaying=_playing;if(wasplaying==true){_stop();}
_goToFrame(n);if(wasplaying==true){_play();_run_hooks('play');}};this.next=function(n){_next(n);};this.prev=function(n){_prev(n);};this.reverse=function(){_reverse();}
this.init=function(options){_init(options);_run_hooks('init');}
this.info=function(){return[_frame,_frames.length,(_direction>1?true:false)]}
this.setOptions=function(o){if(o.framerate){_updateFrameSpeed(o.framerate);if(_intervalId!=null){_stop();_play();}}}
this.getFramerate=function(){return Math.round(1000/framespeed);}
this.is_playing=function(){return _playing;}
this.status=function(){return _setStatus();}
this.on=function(event,callback){if(typeof callback==='function'&&typeof hooks[event]!=='undefined'){hooks[event].push(callback);}}
this.off=function(event,callback){if(typeof callback==='function'&&typeof hooks[event]!=='undefined'){for(var i=hooks[event].length-1,j=[];i>=0;i--){if(hooks[event][i]==callback){hooks[event].splice(i,1);j.push(i);}}}}}
Animation.prototype={_name:"Animation",version:"0.2.1",name:function(){return this._name;}};return Animation;});;define('lib/maps/control',[],function(){var MapControl=function(){var layers=[],mv_lstnr=[];this.map=null;this.removeMoveListener=function(id){if(this.map==null)return null;lsn=this.map.removeMoveListener(id),i=-1,n=mv_lstnr.length,x=n-1,j=0;if(lsn){if(typeof mv_lstnr.indexOf=='function'){i=mv_lstnr.indexOf(id);}else{for(;j<n;j++){if(mv_lstnr[j]==id){i=j;break;}}}
if(i>=0){mv_lstnr.splice(i);}}
return mv_lstnr.length==x;}
this.addMoveListener=function(cb){if(this.map==null)return null;var lsn=this.map.addMoveListener(cb);if(lsn!==false){mv_lstnr.push(lsn);}
return lsn;}}
MapControl.prototype={_name:"MapControl",version:'0.2',name:function(){return this._name;},map:null,setMap:function(o){if(o._name==="Mapping"){this.map=map=o;}else if(typeof o.map!=='undefined'&&o.map._name==="Mapping"){this.map=map=o.map;}},type:'',notification:function(){return;},notify:function(title,message,time){if(title&&message){MapControl.prototype.notification(title,message,time);}},id:null,loadTemplate:function(){},track:function(){},sess:{save_cookie_shrt:function(){}}}
MapControl.factory=function(type,map){var constr=type,newitem;if(typeof MapControl[constr]!=="function"){throw{name:"Error",message:constr+" doesn't exist"};}
if(typeof MapControl[constr].prototype.to_s!=="function"){MapControl[constr].prototype=new MapControl();}
newitem=new MapControl[constr]();newitem.active=false;newitem.id=constr;if(map){newitem.setMap(map);}
return newitem;};if(typeof window._Module=='function'){MapControl.prototype.loadTemplate=window._Module.prototype.template_manager.load;}
return MapControl;});;define('lib/maps/layer',['lib/animation'],function(Animation){if(typeof Function.prototype.curry!=='function'){Function.prototype.curry=function(){var fn=this,args=Array.prototype.slice.call(arguments);return function(){return fn.apply(this,args.concat(Array.prototype.slice.call(arguments)));};};}
function MapLayer(){var listeners=[],mv_lstnr=[];this.type='default';this.items=[];this.options={};this.setOptions=function(opt){}
this.removeListener=function(handle){this.map.removeHandler(handle);}
this.addListener=function(item,callback,type){var l=this.map.attachItemListener(item,callback,type);if(l){listeners.push(l);}}
this.addListenerHover=function(item,callback_on,callback_off){this.addListener(item,callback_on,'mouseover');this.addListener(item,callback_off,'mouseout');}
this.addListenerHoverMobile=function(item,callback_on,callback_off){this.addListener(item,callback_on,'click');}
this.removeMoveListener=function(id){if(this.map==null)return null;lsn=this.map.removeMoveListener(id),i=-1,n=mv_lstnr.length,x=n-1,j=0;if(lsn){if(typeof mv_lstnr.indexOf=='function'){i=mv_lstnr.indexOf(id);}else{for(;j<n;j++){if(mv_lstnr[j]==id){i=j;break;}}}
if(i>=0){mv_lstnr.splice(i);}}
return mv_lstnr.length==x;}
this.addMoveListener=function(cb){if(this.map==null)return null;var lsn=this.map.addMoveListener(cb);if(lsn!==false){mv_lstnr.push(lsn);}
return lsn;}
this.tilecount=function(){return this.map.baseTileCount();}}
MapLayer.prototype={_name:"MapLayer",version:'0.1',name:function(){return this._name;},map:null,to_s:function(){str=this.type;return str;},locate:function(item){if(this.map){if(typeof console!='undefined'){}}},setMap:function(o){if(o._name==="Mapping"){this.map=o;}},clear:function(){var x=null;if(map){for(x=this.items.length-1;x>=0;x--){this.remove(this.items[x]);}}
this.items=[];},boundingBox:function(){var bb={};if(map){bb=this.map.getBounding();}
return bb;},createbox:function(m){var inf=this.map.getBoundInfo(),z=this.map.getZoom(),b=inf.b,m=z/3,d=Math.round(inf.d)*2;for(p in b){m=0;switch(p){case'x1':case'y2':m=d;break;case'x2':case'y1':m=d*-1;break;}
b[p]=b[p]+m;}
return b;},getZoom:function(){var z=false;if(map){z=map.getZoom();}
return z;},isLayer:function(m){var r=false;if(typeof m.prototype!=="undefined"&&typeof m.prototype.name!=="undefined"){if(m.name()==this.name()){r=true;}}
return r;},extend:function(base){if(!this.isLayer(base)){base=MapLayer.factory(base,map);}
for(prop in base){if(base.hasOwnProperty(prop)){this[prop]=base[prop];}}},_click:function(cb,cbs,e){var noop=function(){},cbx=cbs||noop,cbd=cb||noop;if(window.map_dbl_clk==true){cbd(e);window.map_dbl_clk=false;}else{window.map_dbl_clk=true;}
setTimeout(function(){if(window.map_dbl_clk){cbx(e);}
window.map_dbl_clk=false;},250);},dblclick:function(cb,e,cbs){var cbx=cbs||function(){};MapLayer.prototype._click(cb,cbx,e);},sglclick:function(cb,e){MapLayer.prototype._click(null,cb,e);},remove:function(item){var itm=null;if(this.items.length>0){itm=item||this.items.pop();if(itm.m){this.map.removeItem(itm.m);}
this.map.removeItem(itm);}}};MapLayer.factory=function(type,map){var constr=type,newitem;if(typeof MapLayer[constr]!=="function"){throw{name:"Error",message:constr+" doesn't exist"};}
if(typeof MapLayer[constr].prototype.to_s!=="function"){MapLayer[constr].prototype=new MapLayer();}
newitem=new MapLayer[constr]();if(map){newitem.setMap(map);}
return newitem;};MapLayer.Marker=function(){var listeners=[];var cntr_pnt=null;this.type='marker';this.options={};this.add=function(loc){var l=this.items.push(this.map.addMarker(loc)),idx=0;idx=l-1;if(typeof loc.placecode!=='undefined'){this.items[idx].placecode=loc.placecode;}
if(typeof loc.alt!=='undefined'){this.items[idx].alt=loc.alt;}
this.items[idx].latr=Math.PI*this.items[idx].lat/180;this.items[idx].lngr=Math.PI*this.items[idx].lng/180;return this.items[idx];}
this.addListener=function(marker,callback,type){var l=this.map.attachMarkerListener(marker,callback,type);if(l){listeners.push(l);}}
this.addListenerHover=function(marker,callback_on,callback_off){this.addListener(marker,callback_on,'mouseover');this.addListener(marker,callback_off,'mouseout');}
this.clear=function(){while(this.items.length>=1){this.remove();}}
function dist(lat_a,lng_a,lat_b,lng_b){var rtheta,sin=Math.sin,cos=Math.cos,acos=Math.acos,R=6371;var d=acos(sin(lat_b)*sin(lat_a)+cos(lat_b)*cos(lat_a)*cos(lng_b-lng_a))*R;d=Math.round(d,2);return d;}
window._calc_geo_dist=dist;window._calc_deg_rad=function(l){return Math.PI*l/180;}
this.dist=function(lt,ln){var rtheta;d=acos(sin(rlat)*sin(lt)+cos(rlat)*cos(lt)*cos(rlng-ln))*R;d=Math.round(d,2);return d;}
function _sort(a,b){if(a['d']==b['d'])return 0;return a['d']<b['d']?-1:1;}
this.setCenterData=function(marker){cntr_pnt=marker;}
this.closestTo=function(lat,lng){if(cntr_pnt){return cntr_pnt;}
var places=[],res=null;places=this.items.slice();if(places){var i=places.length-1;lat=Math.PI*lat/180;lng=Math.PI*lng/180;for(;i>=0;i--){places[i]['d']=dist(lat,lng,places[i].latr,places[i].lngr);}
places.sort(_sort);res=places.shift();places=[];}
return res;}
this.setOptions=function(opts){}};MapLayer.StoredMarker=function(){var self=this;self.type='marker';self.extend('Marker');}
MapLayer.ClusteredMarker=function(){var self=this,_options={gridSize:30,clusterPlacementType:null,layerOffset:null},ClusterPlacementTypes={MeanAverage:0,GridCenter:1,FirstLocation:2},_numXCells=1,_numYCells=1,calculateClusteredLatlong=function(cluster,key){switch(_options.clusterPlacementType){case ClusterPlacementTypes.MeanAverage:var lat=0,lon=0;var i=cluster.length-1;if(i>=0){do{lat+=cluster[i].lat;lon+=cluster[i].lng;}
while(i--);}
return{lat:lat/cluster.length,lng:lon/cluster.length,n:cluster.length};case ClusterPlacementTypes.GridCenter:var x=((key%_numXCells)+0.5)*_options.gridSize+_options.layerOffset.x;var y=(Math.floor(key/_numXCells)+0.5)*_options.gridSize+_options.layerOffset.y;var loc=self.map.pixelToLocation(x,y,'control');loc.n=cluster.length
return loc;default:case ClusterPlacementTypes.FirstLocation:cluster[0].n=cluster.length;return cluster[0];}},_grid=MapLayer.factory('Grid');_options.clusterPlacementType=ClusterPlacementTypes.MeanAverage;self.setGridsize=function(n){if(n>0){_options.gridSize=n;}}
self.type='marker';self.extend('Marker');_options.layerOffset=self.map.createPoint({x:0,y:0});self.cluster=function(_data,_single,_cluster,no_cluster){var data=[];if(no_cluster){no_cluster=true;}else{no_cluster=false;}
var mapWidth=self.map.getWidth();var mapHeight=self.map.getHeight();_numXCells=parseInt(Math.ceil(mapWidth/_options.gridSize));_numYCells=parseInt(Math.ceil(mapHeight/_options.gridSize));var i=_data.length-1,pixel,k,j,key,pin;var gridCells=new Array(_numXCells*_numYCells);if(no_cluster){do{_single(_data[i]);}while(i--);i=-1;}
if(i>=0){do{pixel=self.map.locationToPixel(_data[i].lat,_data[i].lng,'control');if(pixel!=null&&pixel.x<=mapWidth&&pixel.y<=mapHeight&&pixel.x>=0&&pixel.y>=0){k=Math.floor(pixel.x/_options.gridSize);j=Math.floor(pixel.y/_options.gridSize);key=k+j*_numXCells;if(gridCells[key]==null){gridCells[key]=[];}
gridCells[key].push(_data[i]);_data[i].GridKey=key;}
else{_data[i].GridKey=-1;}}
while(i--);}
i=gridCells.length-1;if(i>=0){do{if(gridCells[i]!=null){switch(gridCells[i].length){case 1:pin=_single(gridCells[i][0]);break;default:var latlong=calculateClusteredLatlong(gridCells[i],i);pin=_cluster(latlong,latlong);break;}}}
while(i--);}
return data;}}
MapLayer.Tile=function(){this.type='tile';this.add=function(loc){var lastitem,addOrUpdate='add';if(loc.id){this.map.addTile(loc);lastitem=loc.id;addOrUpdate='update';}else{this.items.push(this.map.addTile(loc));lastitem=this.items[this.items.length-1];lastitem=lastitem.id;}
return lastitem;}
this.remove=function(tile){var itm=null;if(tile){this.map.removeItem(tile.m);}else if(this.items.length>1){itm=this.items[this.items.length-2];if(itm.m){this.map.removeItem(itm.m);}}}
this.update=function(loc,options){this.map.updateTile(loc,options);}
this.removeAt=function(n){var itm;if(n&&n<=this.items.length){itm=this.items[n];if(itm&&typeof itm.m!=='undefined'){this.map.removeItem(itm.m);}}}
this.hideAt=function(n){var itm;if(n&&n<=this.items.length){itm=this.items[n];if(itm&&typeof itm.m!=='undefined'){itm.opacity=0;this.update(itm);}}}
this.getItem=function(n){if(n<0){n=this.items.length+n;}
return typeof this.items[n]!=='undefined'?this.items[n]:null;}
this.getLastItem=function(){return typeof this.items[this.items.length-1]!=='undefined'?this.items[this.items.length-1]:null;}
this.getItems=function(n){return this.items[this.items.length-(n?n:1)];}
this.count=function(){return this.items.length;}
this.addListener=function(callback){this.map.addMapMoveListener(callback);}};MapLayer.AnimatedTile=function(){var self=this,base=MapLayer.factory('Tile'),anim=Animation(),ie_a=false,_wait=0,_max_wait=5,_frames={},_fl=0,_buffer=0,_toload=0,_tl_cb=[],bslen=0,_opts={buffer:0,framerate:40,loop:'loop',frames:0,opacity:100},_opacity=100,_opc_chg=false,_tile_frame=0,_i_={},_frame=0,_setFrames=function(fr){_frames={};_fl=[];if(typeof fr.length!=='undefined'){for(var i=fr.length-1;i>=0;i--){_frames[fr[i]]=[];_fl.push(fr[i]);}}else{for(p in fr){_frames[p]=[];_fl.push(p);}}
if(_fl&&_fl.length){anim.init({frames:_fl});}},_types=[],cache={},grids={},_baseUrl='',_grds_=null,_grdz_={'n':0},_gridcheck=function(_full){_grds_=self.tilecount();return _grds_;},_gridlayercheck=function(){var i=-1,l=[],lyr=null,j=0,r=true;for(lyr in grids){i++;l[i]=0;for(gs in grids[lyr]){l[i]++;}}
if(l.length>1){for(j=i-1;j>=0;i--,j--){if(l[i]!=l[j]){r=false;break;}}}
return r;},_verifyGrid=function(d){if(prepping==true){return true;}
var lyr=null,c=0;for(lyr in grids){c++;}
return c==self.items.length;},_checkGrid=function(c){var grids_bkp=grids;grids={};_grdz_={'n':0};var a_e=document.getElementById('map_canvas'),imgs=a_e.getElementsByTagName('img'),i=imgs.length-1,s='',p=[],id='',grd='',m=0,pmt=0;for(;i>=0;i--){s=imgs[i].src;if(s&&s.match(_baseUrl)){p=s.split('/');pmt=p.length-3;if(isNaN(p[pmt])===true){id=p[pmt];}else{id=p[pmt-2]+'_'+p[pmt-1];}
if(id){grd=p[pmt+2].split('.')[0];if(!grids[id]){grids[id]={}}
if(!grids[id][grd]){grids[id][grd]=imgs[i];if(!_grdz_[grd]){if(!isNaN(parseFloat(grd))&&isFinite(grd)){_grdz_[grd]=grd;_grdz_.n++;}else{_grdz_.n--;}}
m++;}}}}
var lyr=null,cnt=0;for(lyr in grids){cnt+=1;}
for(lyr in grids_bkp){cnt-=1;}
if(cnt!==0){return false;grids=grids_bkp;}
return true;},_dec_load=function(){_toload--;},_re_load_img=function(x){},_imgCb=function(){},_createCache=function(layer_id,overwrite){var _img={},i=_fl.length-1,ts,_zts;if(!cache[layer_id]){cache[layer_id]={};}
for(grd in grids[layer_id]){if(!cache[layer_id][grd]){cache[layer_id][grd]={};}
for(;i>=0;i--){ts=_fl[i];_type=_types.indexOf(layer_id);if(!cache[layer_id][grd][ts]){cache[layer_id][grd][ts]={};}else{continue;}
_img=new Image();_img.className='tile_'+layer_id;_zts=_frames[ts][_type];var _src=_imgCb(_zts,layer_id,grd);if(i<=_buffer){_img.src=_src;}else{_img['data-img']=_src;_toload++;}
cache[layer_id][grd][ts]=_img;}
i=_fl.length-1;}
_buffer=100;},_setCheckin=function(){check_n_frames=10*anim.getFramerate();if(check_n_frames>50){check_n_frames=50;}},check_n_frames=50,n_frames=0,v_frames=0,frmhnd_prep=true,failure_check=true,_frame_handle_prep=function(){frmhnd_prep=true;},_framehandle=function(n){_frame=n;var ts=_fl[n],opc=_opacity/100,l_o=0;if(!ts){return;}
var _e=0;for(layer in cache){l_o=1;_e=0;for(grid in grids[layer]){if(!cache[layer][grid]||!cache[layer][grid][ts]||cache[layer][grid][ts].src.length<bslen){_e+=1;var _type=_types.indexOf(layer),_zts=_frames[ts][_type];if(grids[layer]&&!grids[layer][grid]){n_frames++;continue;}
grids[layer][grid].src=_imgCb(_zts,layer,grid);if(grids[layer][grid].src.length>bslen&&grids[layer][grid].src){if(!cache[layer][grid]){cache[layer][grid]={};}
if(!cache[layer][grid][ts]){cache[layer][grid][ts]=new Image();}
cache[layer][grid][ts].src=grids[layer][grid].src;}}else{if(grids[layer]&&!grids[layer][grid]){n_frames++;continue;}
grids[layer][grid].src=cache[layer][grid][ts].src;}
if(l_o){l_o--;if(ie_a){try{grids[layer][grid].parentNode.style['-ms-filter']="progid:DXImageTransform.Microsoft.Alpha(Opacity="+_opacity+")";grids[layer][grid].parentNode.style.filter="alpha(opacity="+_opacity+")";}catch(ex){}}else{if(layer=='eurrad_type'||layer=='euro_nowcast_type'){if(_opacity<=50){oValue=0.50;}else{oValue=0.20;};radOpacity=(_opacity/100)+oValue;grids[layer][grid].parentNode.style.opacity=radOpacity;}
else{grids[layer][grid].parentNode.style.opacity=_opacity/100;}}}}}
_opc_chg=false;if(check_n_frames<=n_frames){if(!confidence_check(-1)){if(prepping==false){_prep();}}
n_frames=0;}else{if(v_frames!==Math.floor(n_frames/10)||(v_frames==0&&n_frames==1)){v_frames=Math.floor(n_frames/10);if(!_verifyGrid()&&!prepping){grid_failure+=2;;if(grid_failure>=2){was_playing=anim.is_playing()
if(_failure_cb()==-1){self.clearr();return;}
grid_failure=0;}}}}
if(n_frames%5===0){_setCheckin();}
n_frames+=1;},_stop_frame=function(n){if(typeof _fl[n]!=='undefined'&&n!=_tile_frame){_tile_frame=n;}
n_frames=0;},_move_to=null,_move_check=function(){if(!confidence_check()){if(_move_to){clearTimeout(_move_to);}
_move_to=setTimeout(_move_check,100);}else{clearTimeout(_move_to);}
return _move_to;},_move=function(n,d){d=d?-1:1;var m=_fl.length-1,m_=m;if(!n&&n!==0){n=1;}
if(n!==-1){n=n*d;if(_fl[_frame+n]){m_=m=_frame+n;}}else if(d==-1){m=1;m_=m-1;}
_loadframe(m);anim.stop(m);_stop_frame(m_);if(_toload){setTimeout(function(){self.reloadFrame();},500);for(var i=_tl_cb.length-1;i>=0;i--){_tl_cb[i]();}}else{}
_move_check();},_loadframe=function(n){var reload=false;_toload=0;if(n==-1){for(lyr in cache){for(grd in cache[lyr]){for(ts in cache[lyr][grd]){if(cache[lyr][grd][ts]['data-img']){cache[lyr][grd][ts].onload=_dec_load;cache[lyr][grd][ts].onerror=_re_load_img;cache[lyr][grd][ts].onabort=_re_load_img;_toload++;cache[lyr][grd][ts].src=cache[lyr][grd][ts]['data-img'];cache[lyr][grd][ts]['data-img']=null;}}}}}else{var ts=_fl[n],grs=0;for(lyr in cache){for(grd in cache[lyr]){grs++;if(cache[lyr][grd][ts]&&cache[lyr][grd][ts]['data-img']){cache[lyr][grd][ts].onload=_dec_load;cache[lyr][grd][ts].onerror=_re_load_img;cache[lyr][grd][ts].onabort=_re_load_img;_toload++;cache[lyr][grd][ts].src=cache[lyr][grd][ts]['data-img'];cache[lyr][grd][ts]['data-img']=null;}else{break;}}
if(!grs){}}}
if(reload){}};this.resetFrames=function(){}
this.cleanCache=function(){for(lyr in cache){for(grd in cache[lyr]){for(ts in cache[lyr][grd]){cache[lyr][grd][ts]=null;}}}
cache={};}
this.clearr=function(){_cache={};grids={};_fl=[];if(this.items){for(var i=this.items.length-1;i>=0;i--){if(this.items[i]){this.remove(this.items[i]);}}}
anim.off('draw',_framehandle);self.clear();}
this.tileUrl=function(cb){if(typeof cb=='function'){_imgCb=cb;}}
this.setBaseUrl=function(url){if(url&&typeof url=='string'){_baseUrl=url;bslen=_baseUrl.length;}};var height=document.documentElement.clientHeight;var viz=function(elem){var rects=elem.getClientRects(),v=false;var on_top=function(r){var x=(r.left+r.right)/2,y=(r.top+r.bottom)/2;return document.elementFromPoint(x,y)===elem||document.elementFromPoint(r.left,r.top)===elem||document.elementFromPoint(r.right,r.top)===elem||document.elementFromPoint(x,r.top+10)===elem;};for(var i=0,l=rects.length;i<l;i++){var r=rects[i],in_viewport=false;in_viewport=r.top>0?r.top<=height:(r.bottom>0&&r.bottom<=height);if(in_viewport){v=true;break;}}
return v;}
var i_c=0,i_c_c=0,spc=0,spi=0;var image_check=function(byteskip){if(!byteskip){byteskip=false;}byteskip=false;i_c++;spc=0;spi=0;var bytes=0,lc=0;if(i_c>50){i_c=0;}
for(lyr in cache){lc++;for(grd in cache[lyr]){if(cache[lyr][grd][ts]){spi++;if(cache[lyr][grd][ts].src.match('spacer.gif')){spc++;bytes+=256;continue;}
if(!cache[lyr][grd][ts].width){if(!cache[lyr][grd][ts].src){var _type=_types.indexOf(lyr),_zts=_frames[ts][_type];cache[lyr][grd][ts]=new Image();cache[lyr][grd][ts].src=_imgCb(_zts,lyr,grd);}
return false;}else{if(cache[lyr][grd][ts].width!==256){}
bytes+=cache[lyr][grd][ts].width;}}}}
if(bytes){var _d_=new Date;if((_gridcheck()).n!==((bytes/256)/lc)){i_c_c+=6;if(i_c_c>5){return true;}
return false;}else if(!spi||((spi/2)<spc)){i_c_c++;return false;}}
i_c=0;i_c_c=0;return true;}
var reset_img_fails=function(){img_fails=0;}
var failure_check_reset=function(){failure_check=true;confidence_count=0;confidence_play_count=0;n_frames=0;}
var confidence_count=0,grid_failure=0,img_fails=0;var confidence_play_count=0;var confidence_level=5;var confidence_check=function(_cnt){if(confidence_count>=confidence_level||confidence_play_count>=3){confidence_count=0;confidence_play_count=0;if(_cnt==-1){n_frames+=10;return false;}
n_frames+=50;return true;}
var gc=_gridcheck();var g='';if(!_cnt){confidence_count+=1;}else{if(_cnt!==-1){confidence_play_count+=1;}}
if(!_verifyGrid()){grid_failure+=1;if(grid_failure>=2){was_playing=anim.is_playing()
if(_failure_cb()==-1){self.clearr();return;}
grid_failure=0;}
n_frames+=10;return false;}
if(!image_check()){img_fails+=1;if(!_cnt){confidence_count+=0.5;}else{if(_cnt!==-1){confidence_play_count+=0.5;}}
n_frames+=10;return false;}
var res=gc.n==_grdz_.n;if(res){for(g in gc){if(!_grdz_[g]){res=false;break;}}}
if(res){if(!_gridlayercheck()){res=false;}}
if(res){for(layer in grids){for(grid in grids[layer]){try{if(!viz(grids[layer][grid])){res=false;break;}}catch(ex){res=false;break;}}
if(!res){break;}}}
if(!res){n_frames+=10;}
return res;},_reset_counts=function(){prepping=false;},_prep_to=null,_prep=function(leave_cache){prepping=true;if(!confidence_check()){_checkGrid();if(_prep_to){clearTimeout(_prep_to);}
_prep_to=setTimeout(function(){_prep(leave_cache)},100)}else{if(_prep_to){clearTimeout(_prep_to);_prep_to=null;}
cache={};caching=true;for(type in _types){_createCache(_types[type],leave_cache);}
caching=false;confidence_count=0;confidence_play_count=0;if(typeof leave_cache=='function'){leave_cache();}
prepping=false;}},prepping=false,caching=false,_failure_cb=function(){},was_playing=false;this.setFailureCB=function(fn){if(typeof fn=='function'){_failure_cb=fn;}}
this.recover=function(cb){if(was_playing){if(typeof cb=='function'){cb();}}
was_playing=false;}
this.is_prep=function(){return prepping;}
this.prep=function(cb){if(prepping==false){_prep(cb);}
return prepping;};this.hasFrames=function(){var i=0;for(p in _frames){i++;}
return i;}
this.frameCount=function(){return _fl.length;}
this.setTypes=function(s){if(s&&typeof s.length!=='undefined'){_types=s;}}
this.addLayerTimestep=function(tile_index,timestep,value){if(typeof _frames[timestep]=='undefined'){_frames[timestep]=[];}
_frames[timestep][tile_index]=value;}
this.echo=function(){console.log('_frames: ');console.log(_frames);}
for(prop in base){if(base.hasOwnProperty(prop)){this[prop]=base[prop];}}
this.frameexists=function(n){var r=null;if(typeof _fl[n]!=='undefined'){r=_fl[n];}
return r;}
this.framelength=_fl;this.setBuffer=function(callback){if(typeof callback==='function'){anim.on('init',callback);anim.on('next',callback);anim.on('prev',callback);}}
this.getAll=function(){return this.items;}
this.setTile=function(){}
this.setTimesteps=function(ts){if(ts){_setFrames(ts);}}
this.nextFrame=function(callback){;if(typeof callback==='function'){anim.on('draw',callback);}}
this.cleanup=function(callback){if(typeof callback==='function'){anim.on('postdraw',callback);}}
this.endloop=function(callback){if(typeof callback==='function'){anim.on('start',callback);}}
this.init=function(options){if(document.getElementsByTagName('html')[0].className.match(/lt-ie9/)){ie_a=true;}
_setFrames({});_opc_chg=true;this.framelength=_opts.frames.length;anim.init(_opts);if(_opts.frames){_setFrames(_opts.frames);}
anim.on('draw',_framehandle);_buffer=_opts.buffer;if(options){if(typeof options.buffer=='number'){_buffer=options.buffer;}else{}}
this.map.setTileDownloadComplete(function(){self.gotoFrame(_frame);});}
this.setOptions=function(opt){anim.setOptions(opt);}
this.setOpacity=function(pct){if(typeof pct=='number'){if(pct>=1||pct<=100){_opacity=pct;_opc_chg=true;for(layer in cache){for(grid in grids[layer]){grids[layer][grid].parentNode.style.opacity=_opacity/100;switch(layer){case'euro_satir':satOpacity=_opacity/100;grids[layer][grid].parentNode.style.opacity=satOpacity;break;case'eurrad_type':if(_opacity<=50){oValue=0.50;}else{oValue=0.20;};radOpacity=(_opacity/100)+oValue;grids[layer][grid].parentNode.style.opacity=radOpacity;break;case'euro_nowcast':satOpacity=_opacity/100;console.warn(layer,satOpacity);grids[layer][grid].parentNode.style.opacity=satOpacity;break;}
break;}}}}}
this.getOpacity=function(){return _opacity;}
this.animationOptions=function(options){if(options){_opts=Object.deepExtend(_opts,options);}
return _opts;}
var _play_t=null;var _play=function(n){var _ps=false;if(!confidence_check(true)&&confidence_play_count<=2){if(_play_t){clearTimeout(_play_t);}
_play_t=setTimeout(function(){_play(n)},200)}
else{if(_play_t){clearTimeout(_play_t);}
anim.play(n>=0?n:0);_wait=0;_ps=true;}
return _ps;}
var _status=function(){}
this.play=function(n){_status();return _play(n)?true:false}
this.stop=function(n){_status();anim.stop(n);_stop_frame(n);}
this.pause=function(n){_status();anim.pause(n);_stop_frame(n);}
this.gotoFrame=function(n,was_playing){_loadframe(n);var was_playing=was_playing||anim.is_playing()
this.stop(n);if(_toload){var s=this;setTimeout(function(){s.reloadFrame(was_playing);},500);for(var i=_tl_cb.length-1;i>=0;i--){_tl_cb[i]();}}else{if(was_playing){self.play();}}}
this.reloadFrame=function(was_playing){if(was_playing==-1){_frame=1;was_playing=false;}else if(was_playing=='E'){_frame=_fl.length-1;was_playing=false;}else if(was_playing=='M'){_frame=(_fl.length/2)-1;was_playing=false;}
self.gotoFrame(_frame,was_playing);}
this.next=function(n){_move(n,false);}
this.prev=function(n){_move(n,true);}
this.last=function(){this.next(-1);}
this.first=function(){this.prev(-1);}
this.onTileLoad=function(cb){if(typeof cb=='function'){_tl_cb.push(cb);}}
this.removeTileLoad=function(cb){if(typeof cb=='function'){for(var i=_tl_cb.length-1;i>=0;i--){if(_tl_cb[i]==cb){_tl_cb.splice(i,1);}}}}
var _hud=null;this.setHud=function(fn){if(typeof fn=='object'&&typeof fn.toggle=='function'){_hud=fn;}}
this.hud=function(){if(_hud){_hud.toggle();}}
this.malfunction=function(type,method){var _r;switch(type){case'grid':switch(method){case'chk':case'check':_r=_gridlayercheck();break;case'cnt':case'count':var cnt=0,lyr=null;for(lyr in grids){for(gs in grids[lyr]){cnt++;}}
_r=cnt;break;break;case'clear':grids={};case'rem':var cnt=0,l=[],lyr=null,gs=null,frm=[];for(lyr in grids){l.push(lyr);cnt++;}
if(cnt>1){cnt=Math.floor(Math.random()*(cnt));}
lyr=l[cnt];cnt=0;for(gs in grids[lyr]){frm.push(gs);cnt++;}
if(cnt>1){cnt=Math.floor(Math.random()*(cnt));}
console.warn('Removing Grid: '+lyr+' , '+frm[cnt]);delete(grids[lyr][frm[cnt]]);_r=grids;break;case'remove':var cnt=0,l=[],lyr=null,gs=null,frm=[];for(lyr in grids){l.push(lyr);cnt++;}
if(cnt>1){cnt=Math.floor(Math.random()*(cnt));}
lyr=l[cnt];cnt=0;for(gs in grids[lyr]){frm.push(gs);cnt++;}
if(cnt>1){cnt=Math.floor(Math.random()*(cnt));}
console.warn('Removing Grid: '+lyr+' , '+frm[cnt]);grids[lyr][frm[cnt]]=null;case'get':default:_r=grids;break;}
break;case'cache':switch(method){case'cnt':case'count':var cnt=0,lyr=null;for(lyr in cache){for(gs in cache[lyr]){cnt++;}}
_r=cnt;break;break;case'clear':cache={};case'rstep':var cnt=0,l=[],lyr=null,gs=null,ts=null,frm=[],tss=[];for(lyr in cache){l.push(lyr);cnt++;}
if(cnt>1){cnt=Math.floor(Math.random()*(cnt));}
lyr=l[cnt];cnt=0;for(gs in cache[lyr]){frm.push(gs);cnt++;}
if(cnt>1){cnt=Math.floor(Math.random()*(cnt));}
frm=frm[cnt];for(ts in cache[lyr][frm]){tss.push(ts);cnt++;}
if(cnt>1){cnt=Math.floor(Math.random()*(cnt));}
console.warn('Removing Cache: '+lyr+' , '+frm+' , '+tss[cnt]);cache[lyr][frm][tss[cnt]]=null;_r=cache;break;case'remove':var cnt=0,l=[],lyr=null,gs=null,frm=[];for(lyr in cache){l.push(lyr);cnt++;}
if(cnt>1){cnt=Math.floor(Math.random()*(cnt));}
lyr=l[cnt];cnt=0;for(gs in cache[lyr]){frm.push(gs);cnt++;}
if(cnt>1){cnt=Math.floor(Math.random()*(cnt));}
console.warn('Removing Cache: '+lyr+' , '+frm[cnt]);cache[lyr][frm[cnt]]=null;case'get':default:_r=cache;break;}
break;case'anim':var framerate=null,opac=null;switch(method){case'play':self.play();_r=method;break;case'stop':self.stop();_r=method;break;case'pause':self.pause();_r=method;break;case'next':self.next();_r=method;break;case'prev':self.prev();_r=method;break;case'first':self.first();_r=method;break;case'last':self.last();_r=method;break;case'solid':opac=100;case'semi':if(!opac){opac=50};case'clear':if(!opac){opac=10};self.setOpacity(opac);_r='opacity:'+method;break;case'crawl':framerate=1;case'slow':if(!framerate){framerate=2};case'fast':if(!framerate){framerate=10}
case'med':if(!framerate){framerate=5}
if(framerate){self.setOptions({framerate:framerate});}
_r='speed:'+method;}
break;case'misc':switch(method){case'prep':self.prep();_r=method;break;case'check':_r=confidence_check(-1);break;case'icheck':_r=image_check();break;case'vg':;_r=_verifyGrid(true);break;case'hud':self.hud();_r=method;break;}
break;case'hud':{switch(method){case'frame':_hud.update('frame',_frame);_r=method;break;case'speed':_hud.update('speed',_frame);_r=method;break;case'opac':_hud.update('opac',_frame);_r=method;break;}}}
return _r;}}
MapLayer.AnimatedTileOverlay=function(){var self=this,base=MapLayer.factory('Tile'),_frame=0,_frames={},_fl=[],_types=[],cache={},_opc_chg=false,ie_a=false,_dr=1,_opts={buffer:0,framerate:40,loop:'loop',frames:0,opacity:100},_opc=100,anim=Animation(),pubsub=(function(){var evt={},l=function(ev,fn){if(typeof ev=='string'&&typeof fn=='function'){if(!evt[ev]){evt[ev]=[];}
evt[ev].push(fn);}},f=function(ev,d){if(typeof ev=='string'){if(evt[ev]){var p=evt[ev],pl=p.length-1,c=0;for(;pl>=c;c++){p[c](d);}}}}
return{listen:l,fire:f};})(),_eId=(function(){return'animT'+(+new Date())+'_';})(),_setFrames=function(fr){_frames={};cache={};_grid={};_fl=[];if(typeof fr.length!=='undefined'){for(var i=fr.length-1;i>=0;i--){_frames[fr[i]]=[];_fl.push(fr[i]);}}else{for(p in fr){_frames[p]=[];_fl.push(p);}}
if(_fl&&_fl.length){anim.init({frames:_fl});}},_update_opacity=function(){var o=_opc/100,st="#"+_base_id+" .map_anim_frame { opacity:"+o+"; -ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity="+_opc+")\";}";if(!ie_a){_els['opacity'].innerHTML=st;}else{_els['opacity'].styleSheet.cssText=st;}},_update_showhide=function(frame){var _c='even',_rc='odd',_fr='_frame';if(frame%2){_c='odd';_rc='even';}
_base_elm.className=_base_elm.className.replace(' '+_c+_fr,'');_base_elm.className=_base_elm.className.replace(' '+_rc+_fr,'')+' '+_c+_fr;},_set_showhide=function(){var st="#"+_base_id+" .odd_frame_image,#"+_base_id+" .even_frame_image { display: none; } #"+_base_id+".odd_frame .odd_frame_image,#"+_base_id+".even_frame .even_frame_image { display: block; }";if(!ie_a){_els['showhide'].innerHTML=st;}else{_els['showhide'].styleSheet.cssText=st;}
_update_showhide(0);},frlst=false,_framehandle=function(n){_frame=n;if(frlst){pubsub.fire('nextFrame'+(n%2?'even':'odd'),n);}
pubsub.fire('nextFrame'+(n%2?'odd':'even'),n);frlst=false;},_base_elm,_base_id='',_els={'opacity':'style','showhide':'style'},_createElms=function(){var elm,head=document.getElementsByTagName('head')[0],frag=document.createDocumentFragment();for(elm in _els){_els[elm]=document.createElement(_els[elm]);_els[elm].id=_eId+elm;frag.appendChild(_els[elm]);}
head.appendChild(frag);window._x_=_els;},_opacity=function(pct){if(pct>=0&&typeof pct=='number'){_opc=Math.abs(pct);pubsub.fire('opacity');}
return _opc;},_play=function(n){anim.play(n>=0?n:0);return n;},noop=function(){},_quadKey=function(x,y,z){var quadKey=[];for(var i=z;i>0;i--){var digit='0';var mask=1<<(i-1);if((x&mask)!=0){digit++;}
if((y&mask)!=0){digit++;digit++;}
quadKey.push(digit);}
return quadKey.join('');},_move=function(n,d){frlst=n==-1?true:false;d=d?-1:1;if(!frlst){frlst=_dr==d?false:true;}
_dr=d;var m=_fl.length-1,m_=m;if(!n&&n!==0){n=1;}
if(n!==-1){n=n*d;if(_fl[_frame+n]){m_=m=_frame+n;}}else if(d==-1){m=1;m_=m-1;}
anim.stop(m);},_checkGrid=function(){},_createCache=function(layer_id,overwrite){var _img={},i=_fl.length-1,ts,_zts;if(!cache[layer_id]){cache[layer_id]={};}
var x=2;for(grd in _grid){if(!cache[layer_id][grd]){cache[layer_id][grd]={};}
if(x<=0&&overwrite==false){break;}
x--;for(;i>=0;i--){ts=_fl[i];_type=_types.indexOf(layer_id);if(!cache[layer_id][grd][ts]){cache[layer_id][grd][ts]={};}
_img=new Image();_img.className='tile_'+layer_id;_zts=_frames[ts][_type];var _src=_imgCb(_zts,layer_id,grd);if(i<=_buffer){if(!_src.match(/spacer\.gif/)){_img.src=_src;}}else{_img['data-img']=_src;_toload++;}
cache[layer_id][grd][ts]=_img;}
i=_fl.length-1;}
_buffer=100;},_grid={},prepping=false,_prep=function(full_cache){prepping=true;var leave_cache=full_cache==true?true:false;caching=true;for(type in _types){_createCache(_types[type],leave_cache);}
caching=false;prepping=false}
for(prop in base){if(base.hasOwnProperty(prop)){this[prop]=base[prop];}}
this.parent_add=this.add;this.add=function(loc){loc.dual=true;loc.tileCB=pubsub;return this.parent_add(loc);}
this.parent_remove=this.remove;this.remove=function(tile){if(typeof tile.m.length=='number'){for(var i=tile.m.length-1;i>=0;i--){tile.m[i].pos=tile.m.pos[i];this.parent_remove({m:tile.m[i]});}}
cache={};}
this.generateQuadImage=function(image_src,coords,zoom){var f=null,qk='';if(typeof image_src=='string'&&image_src.match('{quadkey}')){qk=_quadKey(coords.x,coords.y,zoom);if(!_grid[qk]){_grid[qk]=qk;}
f=image_src.replace('{quadkey}',qk);}
return f;}
this.direction=function(){return _dr;}
this.frame=function(){return _frame;}
this.timestep=function(n){if(n){if(n<0){n=_fl.length-1;}else if(n>=_fl.length){n=0;}}
return _fl[(n>=0?n:false)||_frame];}
this.frameexists=function(n){var r=null;if(typeof _fl[n]!=='undefined'){r=_fl[n];}
return r;}
this.setOpacity=function(o){return _opacity(o)};this.getOpacity=function(){return _opacity()};this.setOptions=function(opt){anim.setOptions(opt);}
this.removeTileLoad=noop;this.nextFrame=function(callback){;if(typeof callback==='function'){anim.on('draw',callback);}}
this.cleanCache=noop;this.setTypes=function(s){if(s&&typeof s.length!=='undefined'){_types=s;}}
this.is_prep=function(){return prepping;};this.prep=function(cb){if(prepping==false){_prep(cb);}
return prepping;};this.onTileLoad=noop;this.setTimesteps=function(ts){if(ts){_setFrames(ts);}}
this.setFailureCB=noop;this.addLayerTimestep=function(tile_index,timestep,value){if(typeof _frames[timestep]=='undefined'){_frames[timestep]=[];}
_frames[timestep][tile_index]=value;}
this.getLayerTimestep=function(tile_index,timestep,no_zero){var r=0;if(_frames[timestep]){r=_frames[timestep][tile_index];}
return r;}
var _stop_frame=noop;this.frameCount=function(){return _fl.length;}
this.tileUrl=function(cb){if(typeof cb=='function'){_imgCb=cb;}}
this.setBaseUrl=function(url){if(url&&typeof url=='string'){_baseUrl=url;bslen=_baseUrl.length;}};this.hasFrames=function(){var i=0,p;for(p in _frames){i++;}
return i;}
this.animationOptions=function(options){if(options){_opts=Object.deepExtend(_opts,options);}
return _opts;}
this.play=function(n){this.prep(true);return _play(n)?true:false;}
this.stop=function(n){anim.stop(n);_stop_frame(n);}
this.pause=function(n){anim.pause(n);_stop_frame(n);}
this.next=function(n){_move(n,false);}
this.prev=function(n){_move(n,true);}
this.last=function(){this.next(-1);}
this.first=function(){this.prev(-1);}
this.init=function(options){if(document.getElementsByTagName('html')[0].className.match(/lt-ie9/)){ie_a=true;}
_base_elm=this.map.el;_base_id=_base_elm.id;_createElms();pubsub.listen('opacity',_update_opacity);pubsub.listen('nextFrameodd',_update_showhide);pubsub.listen('nextFrameeven',_update_showhide);this.framelength=_opts.frames.length;anim.init(_opts);if(_opts.frames){_setFrames(_opts.frames);}
anim.on('draw',_framehandle);_buffer=_opts.buffer;if(options){if(typeof options.buffer=='number'){_buffer=options.buffer;}else{}}
_set_showhide();pubsub.fire('opacity');}
this.gotoFrame=function(n,was_playing){anim.stop(n);}}
MapLayer.Shape=function(){var self=this;self.type='none';self.setColors=function(loc){var _f=0,_fa=100,_s=0,_sa=100,_sw=1;if(typeof loc.fillColor!=='undefined'){_f=loc.fillColor;}
if(typeof loc.fillOpacity!=='undefined'){_fa=loc.fillOpacity;}else if(typeof loc.fillNone!=='undefined'&&loc.fillNone==true){_fa=0;loc.visible=false;}
if(typeof loc.strokeColor!=='undefined'){_s=loc.strokeColor;}
if(typeof loc.strokeOpacity!=='undefined'){_sa=loc.strokeOpacity;}else if(typeof loc.strokeNone!=='undefined'&&loc.strokeNone==true){_sa=0;}
if(typeof loc.strokeThickness!=='undefined'){_sw=loc.strokeThickness;}else if(typeof loc.strokeNone!=='undefined'&&loc.strokeNone==true){_sw=1;}
if(_f!==null){loc.fillColor=this.map.createColor(_f,_fa);}
if(_s!==null){loc.strokeColor=this.map.createColor(_s,_sa);}
if(_sw!==null){loc.strokeThickness=_sw;}
return loc;}}
MapLayer.Polygon=function(){var _strokeColor='',_fillColor='',self=this;self.extend('Shape');self.type='polygon';self.setDefaults=function(){}
self.add=function(loc){loc=self.setColors(loc);self.items.push(self.map.addPolygon(loc));return self.items[self.items.length-1];}};MapLayer.Vector=function(){var self=this;self.extend('Shape');self.type='vector';self.add=function(loc){loc=self.setColors(loc);if(loc.c==1){}
self.items.push(self.map.addVector(loc));return self.items[self.items.length-1];}};MapLayer.Grid=function(){var self=this;self.extend('Shape');self.type='vector';self.add=function(loc){loc=self.setColors(loc);if(loc.c==1){}
self.items.push(self.map.addVector(loc));return self.items[self.items.length-1];}
self.generate=function(x,y){var bnds=self.map.getBoundInfo(),y1=bnds.b.y1,y2=bnds.b.y2,x1=bnds.b.x1,x2=bnds.b.x2,dx=x1-x2,dy=y1-y2,sx=dx/x,sy=dy/y,a=0,b=0,loc=[];for(a;a<x;a++){b=x1-(sx*a);loc=[{lng:b,lat:y1},{lng:b,lat:y2}];loc.strokeThickness=1;loc.strokeColor='#F00';b=self.add(loc);}
for(a=0;a<y;a++){b=y1-(sy*a);loc=[{lng:x1,lat:b},{lng:x2,lat:b}];loc.strokeThickness=1;loc.strokeColor='#F00';b=self.add(loc);}};};String.prototype.format=function(){var args=arguments;return this.replace(/{(\d+)}/g,function(match,number){return typeof args[number]!='undefined'?args[number]:match;});};return MapLayer;});;define('lib/maps/google',['lib/maps/mapping','async!//maps.google.com/maps/api/js?v=3.27'],function(Mapping){Function.prototype.curry=function(){var fn=this,args=Array.prototype.slice.call(arguments);return function(){return fn.apply(this,args.concat(Array.prototype.slice.call(arguments)));};};function noop(){};Mapping.modules.google=function(){this.version='1';this.mapversion='3';this.type='map';var api_sensor=(window._config.platform!='web')?'false':'true';this.requires=['//maps.google.com/maps/api/js'];var _m_=null,gm=google.maps,_proj,_options={zoom:1,mapTypeId:gm.MapTypeId.ROADMAP,panControl:false,zoomControl:true,mapTypeControl:false,scaleControl:true,streetViewControl:false},_mOptions={},optionsMap={clientid:'credentials'},optionsMarkerMap={},propMatch={type:{}},infoWindowOptions={},infoWindow=null,infoWindows=[];if(location.search.match("pof")){_options['gestureHandling']="greedy";}
if(window._config.map_home=='uk'&&window._config.map_homepage==true){_options['mapTypeControl']=false;$(".gmnoprint:nth-child(2)").css("margin-top","100px");}
var determineOffset=function(elm){var valueT=elm.offsetTop||0;var valueL=elm.offsetLeft||0;var el=elm.offsetParent;while(el){if(el.tagName=='BODY'){break;}
var pos=null,style=null;if(window.getComputedStyle){style=window.getComputedStyle(el,null);}else{style=el.currentStyle;}
pos=style.position
if(pos=='relative'||pos=='absolute'){break;}
valueT+=el.offsetTop||0;valueL+=el.offsetLeft||0;el=el.offsetParent;}
return{top:valueT,left:valueL};},canvas_offset=null,ref_point=null;this._ready=function(){if(typeof google!='undefined'){if(typeof(google.maps!='undefined')){return true;}}
return false;}
var pixelCoords=function(lat,lng,zoom){var x=(lng+180)/360,sinLatitude=Math.sin(lat*Math.PI/180),y=0.5-Math.log((1+sinLatitude)/(1-sinLatitude))/(4*Math.PI);mapSize=MapSize(zoom);pixelX=Clip(x*mapSize+0.5,0,mapSize-1);pixelY=Clip(y*mapSize+0.5,0,mapSize-1);return[pixelX,pixelY];},MapSize=function(levelOfDetail){return 256<<levelOfDetail;},Clip=function(n,minValue,maxValue)
{return Math.min(Math.max(n,minValue),maxValue);}
window.pixelTest=function(lat,lng,zoom){if(!lat||!lng||!zoom){zoom=9;lng=-101.970527546;lat=59.2192336478;}
var _projection=_m_.getProjection();var p=_projection.fromLatLngToPoint(new gm.LatLng(lat,lng));return p;}
var tileCoords=function(px,py){var tX=Math.floor(px/256),tY=Math.floor(py/256);return[tX,tY];}
var generateQuadImage=function(image_src,coords,zoom){var f=null;if(typeof image_src=='string'&&image_src.match('{quadkey}')){f=image_src.replace('{quadkey}',_quadKey(coords.x,coords.y,map.getZoom()));}
return f;}
var TileLayer=function(tileSize,tile_uri){this.tileSize=tileSize;if(typeof tile_uri=='function'){this.generateTile=tile_uri;}}
TileLayer.prototype.getTile=function(coord,zoom,ownerDocument){var image=ownerDocument.createElement('img');image.src=this.generateTile(coord,zoom);return image;}
this._create=function(elm,options){options=this.do_options_match(options,_options,optionsMap,propMatch);options=this.do_options_match(options,_options,optionsMap,propMatch);var latlng=new google.maps.LatLng(-34.397,150.644);if(options.lat&&options.lng){latlng=new google.maps.LatLng(options.lat,options.lng);}
_options.center=latlng;_options.mapTypeId=gm.MapTypeId.ROADMAP;if(window.location.pathname=='/'&&navigator.userAgent.match(/(iPod|iPhone|iPad);.*CPU.*OS 7_0/i)){_options.panControl=false;_options.scaleControl=false;_options.zoomControl=false;_options.draggable=false;_options.scrollwheel=false;}
_options.zoomControlOptions={position:google.maps.ControlPosition.LEFT_CENTER}
var mp=new gm.Map(elm,_options);canvas_offset=determineOffset(elm);if(canvas_offset){ref_point=new gm.Point(canvas_offset.top,canvas_offset.left)}
_m_=mp;_proj=mp.getProjection();return mp;}
this._createColor=function(color,alpha){if(alpha>1){alpha=alpha/100;}
var args=Array.prototype.slice.apply(arguments),clr='',c=null;if(args.length&&args.length<=2){if(args[1]){this._clr.setOpacity(alpha);}
c=this._clr.hexStringToObject(args[0]);}
clr=c.hx;return'#'+clr;}
this._setOptions=function(opts,map){opts=this.do_options_match(opts,_options,optionsMap,propMatch);gm.setOptions(opts);}
this._clear=function(map){}
var show_once=false;this._locationToPixel=function(lat,lng,map,ref){ref=false;if(!_proj){_proj=map.getProjection();}
var _projection=_proj;var p=_projection.fromLatLngToPoint(new gm.LatLng(lat,lng),ref_point);if(!show_once){var _pt=(function(latLng,map){var topRight=_proj.fromLatLngToPoint(map.getBounds().getNorthEast());var bottomLeft=_proj.fromLatLngToPoint(map.getBounds().getSouthWest());var scale=Math.pow(2,map.getZoom());var worldPoint=_proj.fromLatLngToPoint(latLng);return new google.maps.Point((worldPoint.x-bottomLeft.x)*scale,(worldPoint.y-topRight.y)*scale);})(new gm.LatLng(lat,lng),map);}
return{x:_pt.x,y:_pt.y};};this._pixelToLocation=function(x,y,map,ref){ref=true;if(!_proj){_proj=map.getProjection();}
var _projection=_proj;_projection=_m_.getProjection();var pt=new gm.Point(x,y);var p=_projection.fromPointToLatLng(pt,ref);return{lat:p.ob,lng:p.pb};};this._getWidth=function(map){return map.width;}
this._getHeight=function(map){return map.height;}
this._addMarker=function(opts,map){if(opts.htmlContent){return new htmlMarker(opts,map);}
if(opts.text){return new labelMarker(opts,map);}
if(opts.lat&&opts.lng){_loc=new gm.LatLng(opts.lat,opts.lng);}
if(opts.text){opts.title=opts.text;}
opts.position=_loc;opts.map=map;return new gm.Marker(opts);}
this._addMarkerListener=function(point,callback,type){if(!type){type='click';}
if(typeof point.maker_type=='function'){var evnt=null;if(point.div){evnt=gm.event.addDomListener(point,type,callback);}else if(typeof point.addEvent=='function'){evnt=point.addEvent(type,callback);}
return evnt}
return gm.event.addListener(point,type,callback);}
this._createPoint=function(loc,map){return new gm.Point(loc.x,loc.y)}
this._addItemListener=function(item,callback,type){if(!type){type='click';}
return new gm.event.addListener(item,type,callback);}
this._addInfoWindow=function(marker,content,map){var _iopts={};if(content){_iopts.content=content.html;}
Object.deepExtend(_iopts,infoWindowOptions);if(infoWindow){infoWindow.close();}
_iopts.closeBoxURL="";infoWindow=new gm.InfoBox(_iopts);infoWindow.setContent(content.html);return infoWindow;}
this._addInfoWindows=function(marker,content,map){var _iopts=marker||{},last=0;;if(content){_iopts.content=content.html;}
if(!(_iopts.lat&&_iopts.lng)){_iopts.lng=window._config.lng;_iopts.lat=window._config.lat;}
Object.deepExtend(_iopts,infoWindowOptions);_iopts.closeBoxURL="";_iopts.visible=true;var inf=new InfoBox(_iopts);last=infoWindows.push(inf);inf.setContent(content.html);return infoWindows[last-1];}
this._hideInfoWindows=function(map){for(var i=infoWindows.length-1;i>=0;i--){infoWindows[i].close();}}
this._addTile=function(options,map){if(!options.name){options.name='test';}
var tile=this._createTile(options);if(tile){if(typeof tile.length=='number'){tile[0]._type='overlay_tile';tile[1]._type='overlay_tile';tile.pos=[map.overlayMapTypes.push(tile[0]),map.overlayMapTypes.push(tile[1])];}else{tile._type='overlay_tile';tile.pos=map.overlayMapTypes.push(tile);}}
return tile;}
var _quadKey=function(x,y,z){var quadKey=[];for(var i=z;i>0;i--){var digit='0';var mask=1<<(i-1);if((x&mask)!=0){digit++;}
if((y&mask)!=0){digit++;digit++;}
quadKey.push(digit);}
return quadKey.join('');},PixelXYToTileXY=function(pixelX,pixelY){tileX=pixelX/256;tileY=pixelY/256;return[tileX,tileY];}
this._createTile=function(options){var tile=null;if(typeof options.uri!='function'){if(options.uri.match('{quadkey}')){options.uri=generateQuadImage.curry(options.uri);if(typeof options.uri!='function'){return null;}}else{return null;}}
var uri=options.uri;var tile;if(options.dual){tile=[new DualTileOverlay(new google.maps.Size(256,256),'odd_frame_image',uri,options.tileCB,options.uriB),new DualTileOverlay(new google.maps.Size(256,256),'even_frame_image',uri,options.tileCB,options.uriB)];}else{tile=new TileLayer(new gm.Size(256,256),uri);}
return tile;}
this._setTileDownloadComplete=function(map,callback){return gm.event.addListener(map,'tilesloaded',callback);}
this._baseTileCount=function(){return{n:0};}
this._removeHandler=function(id){var r=null;if(id){try{r=gm.event.removeListener(id);}catch(ex){}}
return r;}
this._removeItem=function(item,map){if(item._type&&item._type=='overlay_tile'){map.overlayMapTypes.removeAt(item.pos-1,item);}else{if(item&&typeof item.setMap=='function'){item.setMap(null);;}else{}}}
this._updateItemOptions=function(item,options){if(item){if(typeof item.setOptions=='function'){item.setOptions(options);}}}
this._addPolygon=function(opts,map){var _locs=[],_vector=null;if(opts.length){while(opt=opts.pop()){if(opt.lat&&opt.lng){_locs.push(new google.maps.LatLng(opt.lat,opt.lng));}}
if(_locs.length){opts.paths=_locs;if(opts.fillOpacity>0){opts.fillOpacity=opts.fillOpacity/100;}
if(opts.strokeOpacity>0){opts.strokeOpacity=opts.strokeOpacity/100;}
_vector=new google.maps.Polygon(opts);}}
if(_vector){_vector.setMap(map);}
return _vector;}
this._addVector=function(opts,map){var _locs=[],_vector=null;if(opts.length){_locs=new google.maps.MVCArray();while(opt=opts.pop()){if(opt.lat&&opt.lng){_locs.push(new google.maps.LatLng(opt.lat,opt.lng));}}
opts.path=_locs;if(opts.strokeOpacity>0){opts.strokeOpacity=opts.strokeOpacity/100;}
if(opts.strokeThickness>0){opts.strokeWeight=opts.strokeThickness;}
_vector=new google.maps.Polyline(opts);}
if(_vector){_vector.setMap(map);}
return _vector;}
this._zoom=function(lvl,map){if(lvl){map.setOptions({zoom:parseInt(lvl),animate:false});}
return map.getZoom();}
this._go=function(){var args=Array.prototype.slice.call(arguments),settings={};map=args.pop();map.panTo(new gm.LatLng(args[0],args[1]));if(args[2]){map.setZoom(args[2]);}}
this._center=function(map){}
this._getCenter=function(map){var o=map.getCenter();return{lat:o.lat(),lng:o.lng()};}
this._setMapMoveEvent=function(map,callback){gm.event.addListener(map,'idle',callback);}
this._setMapZoomEvent=function(map,callback){var clearMapZoomThrottler=function(){clearTimeout(window.mapZoomThrottler);delete window.mapZoomThrottler;}
var createMapZoomThrottler=function(){clearMapZoomThrottler();window.mapZoomThrottler=setTimeout(function(){callback();clearMapZoomThrottler();},200);}
gm.event.addListener(map,'zoom_changed',createMapZoomThrottler);}
this._getBounds=function(map){var b=map.getBounds();if(!b){return{x1:null,y1:null,x2:null,y2:null}}
return{x1:b.getSouthWest().lng(),y1:b.getNorthEast().lat(),x2:b.getNorthEast().lng(),y2:b.getSouthWest().lat()}}
this._staticUrl=function(marker){return window.location.href;}
return this;}
if(typeof Object.deepExtend=='undefined'){Object.deepExtend=function(destination,source){for(var property in source){if(source[property]&&source[property].constructor&&source[property].constructor===Object){destination[property]=destination[property]||{};arguments.callee(destination[property],source[property]);}else{destination[property]=source[property];}}
return destination;};}
var DualTileOverlayCount=0;var DualTileOverlay=function(tileSize,n,tile_uri,cb,tile_uri_buff){this.tileSize=tileSize;this.className=n;this.generateBackground=tile_uri;this.getTileCB=cb;this.buffer=null;this.overlays=DualTileOverlayCount++;if(tile_uri_buff){this.buffer=tile_uri_buff;}}
DualTileOverlay.prototype.getTile=function(coord,zoom,ownerDocument){var div=ownerDocument.createElement('div');div.id='dto'+coord.x+'_'+coord.y+this.overlays;div.innerHTML='<div style="width:'+this.tileSize.width+'px;height:'+this.tileSize.height+'px;"></div>';div.style.width=this.tileSize.width+'px';div.style.height=this.tileSize.height+'px';div.className=this.className;var ut;if(this.className=='even_frame_image'){ut=this.generateBackground.curry(div,coord,zoom);}else{ut=this.buffer.curry(div,coord,zoom);}
ut();this.getTileCB.listen('nextFrame'+(this.className=='even_frame_image'?'odd':'even'),ut);div.className+=' map_anim_frame';return div;};DualTileOverlay.prototype.releaseTile=function(tile){}
var htmlMarker=function(bounds,map){this.content='';this.div=null;this.addEvents={};this.lstnr=[];if(bounds.lat&&bounds.lng){this.bounds=bounds;this.bounds.LatLng=new google.maps.LatLng(bounds.lat,bounds.lng);this.bounds.getLatLng=(function(ll){return function(){return ll;};})(this.bounds.LatLng)
this.bounds.getSouthWest=this.bounds.getNorthEast=this.bounds.getLatLng;if(bounds.htmlContent){this.content=bounds.htmlContent;}
if(bounds.anchor){this.offset=bounds.anchor;}}else{this.bounds=bounds;}
this.addEvent=function(type,callback){if(typeof this.addEvents[type]!=='object'){this.addEvents[type]=[];}
return this.addEvents[type].push(callback);}
this.setMap(map);}
htmlMarker.prototype=new google.maps.OverlayView();htmlMarker.prototype.maker_type=function(){return'htmlMarker';}
htmlMarker.prototype.onAdd=function(){var div=document.createElement('DIV');div.className='cust_marker';div.innerHTML=this.content;this.getPanes().floatShadow.appendChild(div);div.appendChild(document.createElement('DIV'));this.div=div;}
htmlMarker.prototype.getElement=function(){return this.div;}
htmlMarker.prototype.onRemove=function(){this.div.parentNode.removeChild(this.div);var lt;while(lt=this.lstnr.pop()){google.maps.event.removeListener(lt);}}
htmlMarker.prototype.draw=function(){var overlayProjection=this.getProjection();var sw=overlayProjection.fromLatLngToDivPixel(this.bounds.getSouthWest());var ne=overlayProjection.fromLatLngToDivPixel(this.bounds.getNorthEast());var div=this.div;div.style.left=sw.x-this.offset.x+'px';div.style.top=ne.y-this.offset.y+'px';div.style.position='absolute';if(this.addEvents){for(evt in this.addEvents){for(var i=evt.length-1;i>=0;i--){var f=this.addEvents[evt][i];try{this.lstnr.push(google.maps.event.addDomListener(div,evt,f));}catch(ex){}}}}}
var labelMarker=function(bounds,map){this.content='';this.div=null;this.addEvents={};this.lstnr=[];this.offset={x:0,y:0};this.size={w:0,h:0};this.textColor='#FFF';if(bounds.lat&&bounds.lng){this.bounds=bounds;this.bounds.LatLng=new google.maps.LatLng(bounds.lat,bounds.lng);this.bounds.getLatLng=(function(ll){return function(){return ll;};})(this.bounds.LatLng)
this.bounds.getSouthWest=this.bounds.getNorthEast=this.bounds.getLatLng;if(bounds.text){this.content=bounds.text;}
if(bounds.anchor){this.offset=bounds.anchor;}
if(bounds.width){this.size.w=bounds.width;}
if(bounds.height){this.size.h=bounds.height;}
if(bounds.icon){this.bg=bounds.icon;}
if(bounds.color){this.textColor=bounds.color;}}else{this.bounds=bounds;}
this.setMap(map);this.getElement=function(){return this.elm;}
this.addEvent=function(type,callback){if(typeof this.addEvents[type]!=='object'){this.addEvents[type]=[];}
return this.addEvents[type].push(callback);}}
labelMarker.prototype=new google.maps.OverlayView();labelMarker.prototype.maker_type=function(){return'labelMarker';}
labelMarker.prototype.onAdd=function(){var div=document.createElement('DIV'),idiv=document.createElement('DIV');div.className='label_marker';idiv.innerHTML=this.content;idiv.style.width='100%';idiv.style.height='100%';idiv.style.paddingTop='6px';idiv.style.verticalAlign='middle';this.getPanes().floatShadow.appendChild(div);div.appendChild(idiv);this.div=div;this.elm=(function(d){var el=d;return function(){return el;};})(div);}
labelMarker.prototype.onRemove=function(){this.div.parentNode.removeChild(this.div);var lt;while(lt=this.lstnr.pop()){google.maps.event.removeListener(lt);}}
labelMarker.prototype.draw=function(){var overlayProjection=this.getProjection();var sw=overlayProjection.fromLatLngToDivPixel(this.bounds.getSouthWest());var ne=overlayProjection.fromLatLngToDivPixel(this.bounds.getNorthEast());var div=this.div;div.style.left=sw.x-this.size.w-this.offset.x+'px';div.style.top=ne.y-this.size.h-this.offset.y+'px';div.style.position='absolute';div.style.background='url('+this.bg+') no-repeat scroll 0 0 transparent';div.style.color=this.textColor;div.style.textAlign='center';div.style.width=this.size.w+'px';div.style.height=this.size.h+'px';div.style.zIndex=10;if(this.addEvents){for(evt in this.addEvents){for(var i=evt.length-1;i>=0;i--){var f=this.addEvents[evt][i];this.lstnr.push(google.maps.event.addDomListener(div,evt,f));}}}}
function LabelledMarker(map,opt_markers,opt_options){this.extend(MarkerClusterer,google.maps.OverlayView);this.map_=map;this.markers_=[];this.clusters_=[];this.sizes=[53,56,66,78,90];this.styles_=[];this.ready_=false;var options=opt_options||{};this.styles_=options['styles']||[];this.imagePath_=options['icon'];this.setupStyles_();this.setMap(map);var that=this;if(opt_markers&&(opt_markers.length||Object.keys(opt_markers).length)){this.addMarkers(opt_markers,false);}}
function InfoBox(opt_opts){opt_opts=opt_opts||{};google.maps.OverlayView.apply(this,arguments);this.content_=opt_opts.content||"";this.disableAutoPan_=opt_opts.disableAutoPan||false;this.maxWidth_=opt_opts.maxWidth||0;this.pixelOffset_=opt_opts.pixelOffset||new google.maps.Size(0,0);this.position_=opt_opts.position||new google.maps.LatLng(0,0);this.zIndex_=opt_opts.zIndex||null;this.boxClass_=opt_opts.boxClass||"infoBox";this.boxStyle_=opt_opts.boxStyle||{};this.closeBoxMargin_=opt_opts.closeBoxMargin||"2px";this.closeBoxURL_=opt_opts.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif";if(opt_opts.closeBoxURL===""){this.closeBoxURL_="";}
this.infoBoxClearance_=opt_opts.infoBoxClearance||new google.maps.Size(1,1);this.isHidden_=opt_opts.isHidden||false;this.alignBottom_=opt_opts.alignBottom||false;this.pane_=opt_opts.pane||"floatPane";this.enableEventPropagation_=opt_opts.enableEventPropagation||false;this.div_=null;this.closeListener_=null;this.eventListener1_=null;this.eventListener2_=null;this.eventListener3_=null;this.moveListener_=null;this.contextListener_=null;this.fixedWidthSet_=null;}
InfoBox.prototype=new google.maps.OverlayView();InfoBox.prototype.createInfoBoxDiv_=function(){var bw;var me=this;var cancelHandler=function(e){e.cancelBubble=true;if(e.stopPropagation){e.stopPropagation();}};var ignoreHandler=function(e){e.returnValue=false;if(e.preventDefault){e.preventDefault();}
if(!me.enableEventPropagation_){cancelHandler(e);}};if(!this.div_){this.div_=document.createElement("div");this.setBoxStyle_();if(typeof this.content_.nodeType==="undefined"){this.div_.innerHTML=this.getCloseBoxImg_()+this.content_;}else{this.div_.innerHTML=this.getCloseBoxImg_();this.div_.appendChild(this.content_);}
this.getPanes()[this.pane_].appendChild(this.div_);this.addClickHandler_();if(this.div_.style.width){this.fixedWidthSet_=true;}else{if(this.maxWidth_!==0&&this.div_.offsetWidth>this.maxWidth_){this.div_.style.width=this.maxWidth_;this.div_.style.overflow="auto";this.fixedWidthSet_=true;}else{bw=this.getBoxWidths_();this.div_.style.width=(this.div_.offsetWidth-bw.left-bw.right)+"px";this.fixedWidthSet_=false;}}
this.panBox_(this.disableAutoPan_);if(!this.enableEventPropagation_){this.eventListener1_=google.maps.event.addDomListener(this.div_,"mousedown",cancelHandler);this.eventListener2_=google.maps.event.addDomListener(this.div_,"click",cancelHandler);this.eventListener3_=google.maps.event.addDomListener(this.div_,"dblclick",cancelHandler);this.eventListener4_=google.maps.event.addDomListener(this.div_,"mouseover",function(e){this.style.cursor="default";});}
this.contextListener_=google.maps.event.addDomListener(this.div_,"contextmenu",ignoreHandler);google.maps.event.trigger(this,"domready");}};InfoBox.prototype.getCloseBoxImg_=function(){var img="";if(this.closeBoxURL_!==""){img="<img";img+=" src='"+this.closeBoxURL_+"'";img+=" align=right";img+=" style='";img+=" position: relative;";img+=" cursor: pointer;";img+=" margin: "+this.closeBoxMargin_+";";img+="'>";}
return img;};InfoBox.prototype.addClickHandler_=function(){var closeBox;if(this.closeBoxURL_!==""){closeBox=this.div_.firstChild;this.closeListener_=google.maps.event.addDomListener(closeBox,'click',this.getCloseClickHandler_());}else{this.closeListener_=null;}};InfoBox.prototype.getCloseClickHandler_=function(){var me=this;return function(e){e.cancelBubble=true;if(e.stopPropagation){e.stopPropagation();}
me.close();google.maps.event.trigger(me,"closeclick");};};InfoBox.prototype.panBox_=function(disablePan){var map;var bounds;var xOffset=0,yOffset=0;if(!disablePan){map=this.getMap();if(map instanceof google.maps.Map){if(!map.getBounds().contains(this.position_)){map.setCenter(this.position_);}
bounds=map.getBounds();var mapDiv=map.getDiv();var mapWidth=mapDiv.offsetWidth;var mapHeight=mapDiv.offsetHeight;var iwOffsetX=this.pixelOffset_.width;var iwOffsetY=this.pixelOffset_.height;var iwWidth=this.div_.offsetWidth;var iwHeight=this.div_.offsetHeight;var padX=this.infoBoxClearance_.width;var padY=this.infoBoxClearance_.height;var pixPosition=this.getProjection().fromLatLngToContainerPixel(this.position_);if(pixPosition.x<(-iwOffsetX+padX)){xOffset=pixPosition.x+iwOffsetX-padX;}else if((pixPosition.x+iwWidth+iwOffsetX+padX)>mapWidth){xOffset=pixPosition.x+iwWidth+iwOffsetX+padX-mapWidth;}
if(this.alignBottom_){if(pixPosition.y<(-iwOffsetY+padY+iwHeight)){yOffset=pixPosition.y+iwOffsetY-padY-iwHeight;}else if((pixPosition.y+iwOffsetY+padY)>mapHeight){yOffset=pixPosition.y+iwOffsetY+padY-mapHeight;}}else{if(pixPosition.y<(-iwOffsetY+padY)){yOffset=pixPosition.y+iwOffsetY-padY;}else if((pixPosition.y+iwHeight+iwOffsetY+padY)>mapHeight){yOffset=pixPosition.y+iwHeight+iwOffsetY+padY-mapHeight;}}
if(!(xOffset===0&&yOffset===0)){var c=map.getCenter();map.panBy(xOffset,yOffset);}}}};InfoBox.prototype.setBoxStyle_=function(){var i,boxStyle;if(this.div_){this.div_.className=this.boxClass_;this.div_.style.cssText="";boxStyle=this.boxStyle_;for(i in boxStyle){if(boxStyle.hasOwnProperty(i)){this.div_.style[i]=boxStyle[i];}}
if(typeof this.div_.style.opacity!=="undefined"&&this.div_.style.opacity!==""){this.div_.style.filter="alpha(opacity="+(this.div_.style.opacity*100)+")";}
this.div_.style.position="absolute";this.div_.style.visibility='hidden';if(this.zIndex_!==null){this.div_.style.zIndex=this.zIndex_;}}};InfoBox.prototype.getBoxWidths_=function(){var computedStyle;var bw={top:0,bottom:0,left:0,right:0};var box=this.div_;if(document.defaultView&&document.defaultView.getComputedStyle){computedStyle=box.ownerDocument.defaultView.getComputedStyle(box,"");if(computedStyle){bw.top=parseInt(computedStyle.borderTopWidth,10)||0;bw.bottom=parseInt(computedStyle.borderBottomWidth,10)||0;bw.left=parseInt(computedStyle.borderLeftWidth,10)||0;bw.right=parseInt(computedStyle.borderRightWidth,10)||0;}}else if(document.documentElement.currentStyle){if(box.currentStyle){bw.top=parseInt(box.currentStyle.borderTopWidth,10)||0;bw.bottom=parseInt(box.currentStyle.borderBottomWidth,10)||0;bw.left=parseInt(box.currentStyle.borderLeftWidth,10)||0;bw.right=parseInt(box.currentStyle.borderRightWidth,10)||0;}}
return bw;};InfoBox.prototype.onRemove=function(){if(this.div_){this.div_.parentNode.removeChild(this.div_);this.div_=null;}};InfoBox.prototype.draw=function(){this.createInfoBoxDiv_();var pixPosition=this.getProjection().fromLatLngToDivPixel(this.position_);this.div_.style.left=(pixPosition.x+this.pixelOffset_.width)+"px";if(this.alignBottom_){this.div_.style.bottom=-(pixPosition.y+this.pixelOffset_.height)+"px";}else{this.div_.style.top=(pixPosition.y+this.pixelOffset_.height)+"px";}
if(this.isHidden_){this.div_.style.visibility='hidden';}else{this.div_.style.visibility="visible";}};InfoBox.prototype.setOptions=function(opt_opts){if(typeof opt_opts.boxClass!=="undefined"){this.boxClass_=opt_opts.boxClass;this.setBoxStyle_();}
if(typeof opt_opts.boxStyle!=="undefined"){this.boxStyle_=opt_opts.boxStyle;this.setBoxStyle_();}
if(typeof opt_opts.content!=="undefined"){this.setContent(opt_opts.content);}
if(typeof opt_opts.disableAutoPan!=="undefined"){this.disableAutoPan_=opt_opts.disableAutoPan;}
if(typeof opt_opts.maxWidth!=="undefined"){this.maxWidth_=opt_opts.maxWidth;}
if(typeof opt_opts.pixelOffset!=="undefined"){this.pixelOffset_=opt_opts.pixelOffset;}
if(typeof opt_opts.alignBottom!=="undefined"){this.alignBottom_=opt_opts.alignBottom;}
if(typeof opt_opts.position!=="undefined"){this.setPosition(opt_opts.position);}
if(typeof opt_opts.zIndex!=="undefined"){this.setZIndex(opt_opts.zIndex);}
if(typeof opt_opts.closeBoxMargin!=="undefined"){this.closeBoxMargin_=opt_opts.closeBoxMargin;}
if(typeof opt_opts.closeBoxURL!=="undefined"){this.closeBoxURL_=opt_opts.closeBoxURL;}
if(typeof opt_opts.infoBoxClearance!=="undefined"){this.infoBoxClearance_=opt_opts.infoBoxClearance;}
if(typeof opt_opts.isHidden!=="undefined"){this.isHidden_=opt_opts.isHidden;}
if(typeof opt_opts.enableEventPropagation!=="undefined"){this.enableEventPropagation_=opt_opts.enableEventPropagation;}
if(this.div_){this.draw();}};InfoBox.prototype.setContent=function(content){this.content_=content;if(this.div_){if(this.closeListener_){google.maps.event.removeListener(this.closeListener_);this.closeListener_=null;}
if(!this.fixedWidthSet_){this.div_.style.width="";}
if(typeof content.nodeType==="undefined"){this.div_.innerHTML=this.getCloseBoxImg_()+content;}else{this.div_.innerHTML=this.getCloseBoxImg_();this.div_.appendChild(content);}
if(!this.fixedWidthSet_){this.div_.style.width=this.div_.offsetWidth+"px";if(typeof content.nodeType==="undefined"){this.div_.innerHTML=this.getCloseBoxImg_()+content;}else{this.div_.innerHTML=this.getCloseBoxImg_();this.div_.appendChild(content);}}
this.addClickHandler_();}
google.maps.event.trigger(this,"content_changed");};InfoBox.prototype.setPosition=function(latlng){this.position_=latlng;if(this.div_){this.draw();}
google.maps.event.trigger(this,"position_changed");};InfoBox.prototype.setZIndex=function(index){this.zIndex_=index;if(this.div_){this.div_.style.zIndex=index;}
google.maps.event.trigger(this,"zindex_changed");};InfoBox.prototype.getContent=function(){return this.content_;};InfoBox.prototype.getPosition=function(){return this.position_;};InfoBox.prototype.getZIndex=function(){return this.zIndex_;};InfoBox.prototype.show=function(){this.isHidden_=false;if(this.div_){this.div_.style.visibility="visible";}};InfoBox.prototype.hide=function(){this.isHidden_=true;if(this.div_){this.div_.style.visibility="hidden";}};InfoBox.prototype.open=function(map,anchor){var me=this;if(anchor){this.position_=anchor.getPosition();this.moveListener_=google.maps.event.addListener(anchor,"position_changed",function(){me.setPosition(this.getPosition());});}
this.setMap(map);if(this.div_){this.panBox_();}};InfoBox.prototype.close=function(){if(this.closeListener_){google.maps.event.removeListener(this.closeListener_);this.closeListener_=null;}
if(this.eventListener1_){google.maps.event.removeListener(this.eventListener1_);google.maps.event.removeListener(this.eventListener2_);google.maps.event.removeListener(this.eventListener3_);google.maps.event.removeListener(this.eventListener4_);this.eventListener1_=null;this.eventListener2_=null;this.eventListener3_=null;this.eventListener4_=null;}
if(this.moveListener_){google.maps.event.removeListener(this.moveListener_);this.moveListener_=null;}
if(this.contextListener_){google.maps.event.removeListener(this.contextListener_);this.contextListener_=null;}
this.setMap(null);};Mapping.prototype.activeLib='google';return Mapping;});;define('lib/maps/map.js',['lib/maps/google','lib/maps/layer','lib/maps/control'],function(){});;require(['lib/maps/map.js'],function(m){var n=m;if(typeof m=='undefined'){return null;};if(typeof m.pop=='function'){n=m.pop();while(n){n.init();n=m.pop();}}else{n.init();}});