
function speedtest(config)
{this._p={callback:(typeof config=='object'&&typeof config.callback=='function'?config.callback:null),context:(typeof config=='object'&&typeof config.context=='object'?config.context:{}),timeout:(typeof config=='object'&&typeof config.timeout=='number'&&config.timeout>=1000&&config.timeout<=10000?config.timeout:7500),ratio:(typeof config=='object'&&typeof config.ratio=='number'&&config.ratio>=0.5&&config.ratio<=10.0?config.ratio:1.0),socket:null,connected:false,timer:-1,ping:{index:0,count:0,values:[]},rtt:0,download:{start:0,duration:0,values:[]},upload:{start:0,duration:0,values:[],payload:null},};}
speedtest.prototype._callback=function(e)
{try{this._p.callback(e,this._p.context);}catch(e){}}
speedtest.prototype._send=function(data)
{try{this._p.socket.send(data);}catch(e){}}
speedtest.prototype._percentile=function(values,percentile)
{if(values.length>0)
{if(values.length==1)
{return values[0];}
else
{values.sort(function(a,b){return a-b;});percentile=(percentile<0?0:percentile);percentile=(percentile>99?99:percentile);percentile=(percentile/100)*values.length;if(Math.ceil(percentile)!=percentile)
{return values[Math.ceil(percentile)-1];}
else
{return(values[percentile-1]+values[percentile])/2;}}}
return 0;}
speedtest.prototype.callback=function(callback)
{this._p.callback=(typeof callback=='function'?callback:null);return this;}
speedtest.prototype.context=function(context)
{this._p.context=(typeof context=='object'?context:{});return this;}
speedtest.prototype.connect=function(remote)
{if(this._p.socket==null)
{try
{var that=this;this._p.socket=new WebSocket(remote,'speedtest');this._p.timer=setTimeout(function(e)
{if(!that._p.connected)
{try{that._p.socket.close();}catch(e){}}},this._p.timeout);this._p.socket._st=this;this._p.socket.binaryType='arraybuffer';this._p.socket.onopen=function(e)
{clearTimeout(this._st._p.timer);if(!this._st._p.connected)
{this._st._p.connected=true;this._st._callback({type:'connect'});}};this._p.socket.onclose=function(e)
{clearTimeout(this._st._p.timer);if(this._st._p.connected)
{this._st._p.connected=false;this._st._p.socket=null;this._st._callback({type:'close',value:e.code});}
else
{this._st._p.socket=null;this._st._callback({type:'error',value:'connection error ('+e.code+')'});}};this._p.socket.onmessage=function(e)
{if(typeof e.data=='string')
{try
{var message=JSON.parse(e.data);switch(message.method)
{case'config':this._st._callback({type:'config',value:message.params});break;case'ping':if(message.params.index==this._st._p.ping.index+1)
{this._st._p.ping.values.push(Math.max(1,Math.floor(((new Date()).getTime()-message.params.ctime)*this._st._p.ratio)));if(message.params.index<this._st._p.ping.count*2)
{this._st._p.ping.index+=2;this._st.ping(0,message.params.stime);}
this._st._callback({type:'ping',value:this._st._percentile(this._st._p.ping.values,50),last:message.params.index>=(this._st._p.ping.count*2)-2});if(message.params.index>=(this._st._p.ping.count*2)-2)
{this._st._p.rtt=this._st._percentile(this._st._p.ping.values,50);this._st._p.ping.index=0;}}
else
{this._st._p.ping.index=0;}
break;case'upload':if(this._st._p.upload.start!=0)
{var size=message.params.size,delta=Math.max(1,Date.now()-message.params.ctime-this._st._p.rtt),bandwidth=(size*8)/(delta*1000);this._st._p.upload.values.push(bandwidth);if(size<64<<20&&delta<330)
{size*=2;}
if(Date.now()-this._st._p.upload.start>=this._st._p.upload.duration)
{this._st._p.upload.start=0;}
message=JSON.stringify({'ctime':Date.now(),'bandwidth':bandwidth,last:(this._st._p.upload.start==0)});for(var index=0;index<message.length;index++)
{this._st._p.upload.payload[index]=message.charCodeAt(index);}
this._st._send(this._st._p.upload.payload.slice(0,size));this._st._callback({type:'upload',value:this._st._percentile(this._st._p.upload.values,50),max:this._st._percentile(this._st._p.upload.values,80),last:(this._st._p.upload.start==0)});}
break;}}catch(e){}}
else
{if(this._st._p.download.start!=0)
{if(e.data.byteLength>=128)
{var payload=new Uint8Array(e.data.slice(0,128)),message='';if(payload[0]==0x7b)
{for(var index=0;index<payload.byteLength;index++)
{message+=String.fromCharCode(payload[index]);if(payload[index]==0x7d)break;}
message=JSON.parse(message);if(Date.now()-this._st._p.download.start>=this._st._p.download.duration)
{this._st._p.download.start=0;}
this._st._send(JSON.stringify({method:'download',params:{size:e.data.byteLength,stime:message.stime,last:(this._st._p.download.start==0)}}));this._st._p.download.values.push(message.bandwidth);this._st._callback({type:'download',value:this._st._percentile(this._st._p.download.values,50),max:this._st._percentile(this._st._p.download.values,85),last:(this._st._p.download.start==0)});}}}}};}
catch(e)
{this._p.connected=false;this._p.socket=null;this._callback({type:'error',action:'connect',status:1006});}}
else
{this._callback({type:'connect'});}
return this;}
speedtest.prototype.close=function()
{if(this._p.connected)
{try{this._p.socket.close();}catch(e){}}
return this;}
speedtest.prototype.config=function()
{this._send(JSON.stringify({method:'config'}));return this;}
speedtest.prototype.ping=function(count,stime)
{if(this._p.ping.index==0)
{this._p.ping.values=[];this._p.ping.count=count;}
this._send(JSON.stringify({method:'ping',params:{index:this._p.ping.index,count:this._p.ping.count,ctime:(new Date()).getTime(),stime:stime}}));return this;}
speedtest.prototype.download=function(duration)
{if(this._p.download.start==0)
{this._p.download.start=Date.now();this._p.download.duration=duration*1000;this._p.download.values=[];this._send(JSON.stringify({method:'download'}));}
return this;}
speedtest.prototype.upload=function(duration)
{if(this._p.upload.start==0)
{this._p.upload.start=Date.now();this._p.upload.duration=duration*1000;this._p.upload.values=[];this._p.upload.payload=new Uint8Array(64<<20);var message=JSON.stringify({'ctime':Date.now()});for(var index=0;index<message.length;index++)
{this._p.upload.payload[index]=message.charCodeAt(index);}
this._send(this._p.upload.payload.slice(0,256<<10));}
return this;}
if(!Uint8Array.prototype.slice)
{Object.defineProperty(Uint8Array.prototype,'slice',{value:function(begin,end){return new Uint8Array(Array.prototype.slice.call(this,begin,end));}});}
try
{function check(event,context)
{switch(event.type)
{case'connect':endpoints[context.name].ping(12,0);break;case'ping':if(event.last)
{endpoints[context.name].close();}
break;}}
var endpoints={},bootstrap=new speedtest({callback:function(event)
{switch(event.type)
{case'connect':bootstrap.config()
break;case'config':for(var index=0;index<event.value.endpoints.length;index++)
{var endpoint=event.value.endpoints[index];if(endpoint.name==event.value.self)
{bootstrap.context({name:endpoint.name}).callback(check);endpoints[endpoint.name]=bootstrap;}
else
{endpoints[endpoint.name]=new speedtest({context:{name:endpoint.name},callback:check});}
endpoints[endpoint.name].connect('wss://'+endpoint.remote+'/speedtest');}
break;}}});setTimeout(function()
{try
{if(typeof localStorage=='object')
{var last=localStorage.getItem('stlast'),now=Date.now();if(last!=null&&now-last<150000)
{return;}
localStorage.setItem('stlast',now);}
bootstrap.connect('wss://speedtest.dailymotion.com/speedtest');}
catch(e){}},5000+Math.floor(Math.random()*5000));}
catch(e){}