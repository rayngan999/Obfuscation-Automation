//tealium universal tag - utag.128 ut4.0.202105080529, Copyright 2021 Tealium.com Inc. All Rights Reserved.
function getSelector(node,maxLen=100){let sel='';try{while(node&&node.nodeType!==9){const part=node.id?'#'+node.id:node.nodeName.toLowerCase()+((node.className&&node.className.length)?'.'+Array.from(node.classList.values()).join('.'):'');if(sel.length+part.length>maxLen-1)return sel||part;sel=sel?part+'>'+sel:part;if(node.id)break;node=node.parentNode;}}catch(err){}
return sel;}
function getLargestLayoutShiftEntry(entries){return entries.reduce((a,b)=>a&&a.value>b.value?a:b);}
function getLargestLayoutShiftSource(sources){return sources.reduce((a,b)=>{return a.node&&a.previousRect.width*a.previousRect.height>b.previousRect.width*b.previousRect.height?a:b;});}
function wasFIDBeforeDCL(fidEntry){const navEntry=performance.getEntriesByType('navigation')[0];return navEntry&&fidEntry.startTime<navEntry.domContentLoadedEventStart;}
function getDebugInfo(name,entries=[]){if(entries.length){if(name==='LCP'){const lastEntry=entries[entries.length-1];return{debug_target:getSelector(lastEntry.element),event_time:lastEntry.startTime,};}else if(name==='FID'){const firstEntry=entries[0];return{debug_target:getSelector(firstEntry.target),debug_event:firstEntry.name,debug_timing:wasFIDBeforeDCL(firstEntry)?'pre_dcl':'post_dcl',event_time:firstEntry.startTime,};}else if(name==='CLS'){const largestEntry=getLargestLayoutShiftEntry(entries);if(largestEntry&&largestEntry.sources){const largestSource=getLargestLayoutShiftSource(largestEntry.sources);if(largestSource){return{debug_target:getSelector(largestSource.node),event_time:Math.round(largestEntry.startTime),currentRect:JSON.stringify(largestEntry.sources[0]['currentRect']),previousRect:JSON.stringify(largestEntry.sources[0]['previousRect'])};}}}}
return{debug_target:'(not set)',};}
function sendToAnalytics(metric){let debugInfo=getDebugInfo(metric.name,metric.entries);console.log('clstest',debugInfo);let oggi=now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();let orientamento=window.innerHeight>window.innerWidth?'Portrait':'Landscape';ga('testFe.send','event',{eventCategory:'CLS-Track-Nodes-TuttoWww-'+oggi,eventAction:debugInfo.debug_target,eventLabel:document.location.href+'|'+debugInfo.event_time+'|'+orientamento+'|'+debugInfo.currentRect+'|'+debugInfo.previousRect,eventValue:Math.round(metric.name==='CLS'?metric.delta*1000:metric.delta),nonInteraction:true,transport:'beacon',});}
var init=function(){var script=document.createElement('script');script.src='https://unpkg.com/web-vitals';script.onload=function(){webVitals.getCLS(sendToAnalytics);}
document.head.appendChild(script);}
var now=new Date();if(now.getHours()==8||now.getHours()==11||now.getHours()==16){console.log('CLS track')
init();}
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("128","mediaset.dig.giallozafferano.it");}catch(error){utag.DB(error);}
