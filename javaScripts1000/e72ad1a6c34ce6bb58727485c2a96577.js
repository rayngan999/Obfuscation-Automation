//tealium universal tag - utag.249 ut4.0.202106161934, Copyright 2021 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"heap_uuid":"heap_uuid","qp.utm_source":"utm_source","qp.utm_campaign":"utm_campaign","fast_track_discount_offered":"fast_track_discount_offered","cp.heapID":"heapID"};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
var headtag=document.getElementsByTagName('head')[0];var script=document.createElement('script');script.setAttribute('type','text/javascript');console.log(u.data.heapID);console.log("v2 []:"+u.data['heapID']);script.setAttribute('src','https://s.mrmserve.com/2/896321/clear.js?dt=8963211605820945469000&pd=mkt&ui='+u.data.heapID+'&c1='+u.data.utm_source+'&c2='+u.data.utm_campaign+'&c3='+u.data.fast_track_discount_offered);script.setAttribute('async','true');headtag.appendChild(script);}};utag.o[loader].loader.LOAD(id);})("249","smiledirectclub.main");}catch(error){utag.DB(error);}