!function(e,t,n){"use strict";function r(){for(var e=["taobao.com","tmall.com","etao.com"],t=0;t<e.length;t++)if(location.hostname.indexOf(e[t])>=0)return.1;return.1}function o(e,t){return e&&e.getAttribute?e.getAttribute(t)||"":""}function a(){return p=p||t.getElementsByTagName("head")[0],f||(p?f=p.getElementsByTagName("meta"):[])}function i(e){var t,n,r,i=a(),s=i.length;for(t=0;t<s;t++)if(n=i[t],o(n,"name")==e){r=o(n,"content");break}return r}function s(){var e=i("aplus-rate-ahot");return parseFloat(e||"")}function c(){var e=i("aplus-rate-ahot-res");return parseFloat(e||"")}function m(){return!!v.match(/iPad|iPod|iPhone|Android/i)}function d(){return("www.taobao.com"===location.hostname||"www.tmall.com"===location.hostname)&&"/"===location.pathname}function u(e,n){var r=e,o=t.getElementById(r);return o||(o=t.createElement("iframe"),o.setAttribute("frameborder","0"),o.style.cssText="width:0;height:0;border:0;display:none;",o.setAttribute("id",r),o.setAttribute("name",r)),n&&o.setAttribute("src",n),o.parentNode||t.body.appendChild(o),o}var l=1;if(!(e._ap_agp_heat&&l<=e._ap_agp_heat.version)){var p,f,g=e.performance||e.mozPerformance||e.msPerformance||e.webkitPerformance||{_na:1},E=location,h=(location.href,E.hostname,e.navigator),v=(h.appVersion,h&&h.userAgent||""),T=c(),S=s(),R=r(),y=t.getElementById("tb-beacon-aplus"),I=(o(y,"exparams"),parent!==e.self,m(),d(),{RATE:{RESOURCE_TIMING:isNaN(T)?.001:T,PERFORMANCE_TIMING:isNaN(S)?R:S,CDN_TIMING:.2,ENGINSTART:1},THRESHOLD:{RESOURCE_TIMING:50},DEBUG:{RESOURCE_TIMING:location.search.indexOf("agp-debug-resource")>-1,PERFORMANCE_TIMING:location.search.indexOf("agp-debug-perf")>-1,CDN_TIMING:location.search.indexOf("agp-debug-cdn")>-1},ID:{IFRAME:"aplus_iframe_resource_timing",FORM:"aplus_form_resource_timing"}}),_=function(e){return void 0===e||0===e?0:Math.floor(e)},b=(e.attachEvent?function(t){e.attachEvent("onload",t)}:e.addEventListener?function(t){e.addEventListener("load",t,!1)}:function(){},function(){for(var e="",t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";e.length<16;)e+=t.substr(Math.floor(62*Math.random()),1);return e}),N=function(e){var t,n=[];for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+encodeURIComponent(e[t]));return n.join("&")},C=(b(),"BackCompat"==t.compatMode?t.body:t.documentElement,E.protocol),M=C+"//res.mmstat.com/perf.gif?logtype=2&cache=",A="//cdn.cmos.greencompute.org/";if(n&&"object"==typeof n){for(var O in n)I.RATE[O]=n[O];n.BASE_URL&&(M=n.BASE_URL),n.BASE_CDN&&(M=n.BASE_URL)}var B=function(e){this.config=e};B.prototype={startup:function(){this["spm-cnt"]=e.goldlog&&e.goldlog.spm_ab?e.goldlog.spm_ab:null},collectPerformanceTiming:function(){var t=g.timing,n={};if(!t)return n;var r,o,a,i={navigationStart:"ns",unloadEventStart:"ues",unloadEventEnd:"uee",redirectStart:"rds",redirectEnd:"rde",fetchStart:"fs",domainLookupStart:"dls",domainLookupEnd:"dle",connectStart:"cs",connectEnd:"ce",secureConnectionStart:"scs",requestStart:"rqs",responseStart:"rps",responseEnd:"rpe",domLoading:"dl",domInteractive:"di",domContentLoadedEventStart:"dcles",domContentLoadedEventEnd:"dclee",domComplete:"dc",loadEventStart:"les",loadEventEnd:"lee"},s=t.navigationStart;for(r in i)o=t[r],a=i[r],0===o||void 0===o?n[a]="na":"number"==typeof o&&(n[a]=o-s);var c,m;return"number"==typeof t.msFirstPaint?c=t.msFirstPaint:e.chrome&&e.chrome.loadTimes&&(m=e.chrome.loadTimes().firstPaintTime)&&(c=Math.ceil(1e3*m)),"number"==typeof c?c-=s:c="na",n.fp=c,n},collectResourceByNameTiming:function(t){var n=this;if("performance"in e&&"getEntriesByName"in g){var r={},o=g.getEntriesByName(C+A);if(o[0]&&o[0].initiatorType){var a=o[0];r={rs:_(a.redirectStart),re:_(a.redirectEnd),fs:_(a.fetchStart),st:_(a.startTime),dls:_(a.domainLookupStart),dle:_(a.domainLookupEnd),cs:_(a.connectStart),ce:_(a.connectEnd),scs:_(a.secureConnectionStart),resqs:_(a.requestStart),resps:_(a.responseStart),respe:_(a.responseEnd),restype:a.initiatorType,n:a.name,cn:t.node}}setTimeout(function(){n.sendData("//res.mmstat.com/c.gif",r)},0)}},collectResourceTiming:function(){var e=[],t=g.getEntriesByType("resource");for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];r.initiatorType&&e.push({rs:_(r.redirectStart),re:_(r.redirectEnd),fs:_(r.fetchStart),st:_(r.startTime),dls:_(r.domainLookupStart),dle:_(r.domainLookupEnd),cs:_(r.connectStart),ce:_(r.connectEnd),scs:_(r.secureConnectionStart),resqs:_(r.requestStart),resps:_(r.responseStart),respe:_(r.responseEnd),restype:r.initiatorType,n:r.name})}return e},sendPV:function(){},sendCDNTime:function(){},sendResourceTiming:function(){var t=this;if((Math.random()<I.RATE.RESOURCE_TIMING||I.DEBUG.RESOURCE_TIMING)&&"performance"in e&&"getEntriesByType"in g&&g.getEntriesByType("resource")instanceof Array)for(var n="|--|",r=this.collectResourceTiming(),o=this.groupResourceTimingData(r),a=0;a<o.length;a++)!function(r){setTimeout(function(){var a=[e.goldlog?goldlog.pvid:"","total="+o.length,"index="+(r+1),"rescnt="+o[r].groupItem.length,o[r].groupItemString,t["spm-cnt"]?"spm-cnt="+t["spm-cnt"]:"",t.mx?"mx="+t.mx:""].join(n);t.setResourceTimingForm("content",a)},500*(r+1))}(a)},groupResourceTimingData:function(e){for(var t=this,n=[];e.length;)n.push(e.splice(0,I.THRESHOLD.RESOURCE_TIMING));for(var r=0;r<n.length;r++){for(var o=n[r],a="",i="|--|",s="resinfo=",c=0;c<o.length;c++){var m=o[c];a+=s+t.serializeResourceObj(m)+i}n[r]={groupItem:o,groupItemString:a}}return n},serializeResourceObj:function(e){var t,n=[],r="|-|";for(t in e)e.hasOwnProperty(t)&&n.push(t+"="+encodeURIComponent(e[t]));return n.join(r)},setResourceTimingForm:function(e,n){var r,o,a=I.ID.IFRAME+"_"+Math.floor(1e6*Math.random()),i=u(a);r=t.createElement("form"),r.style.display="none",r.target=i.id,r.method="POST",r.action="//res.mmstat.com/1.gif",r.setAttribute("id",I.ID.FORM),o=t.createElement("input"),o.type="hidden",r.appendChild(o);var s=t.createElement("input");s.type="submit",s.value="",r.appendChild(s),t.body.appendChild(r),o=r.getElementsByTagName("input")[0],o.name=e,o.value=n,r.submit(),i.onload=function(){r.parentNode.removeChild(r),i.parentNode.removeChild(i)}},sendData:function(t,n){var r=new Image,o="_img_"+Math.random(),a=t.indexOf("?")==-1?"?":"&";e[o]=r,r.onload=r.onerror=function(){e[o]=null},r.src=t+a+N(n),r=null}};var P=g.setResourceTimingBufferSize||g.webkitSetResourceTimingBufferSize;P&&P.call(g,200),e._ap_agp_heat={version:l},Math.random()<I.RATE.ENGINSTART}}(window,document);