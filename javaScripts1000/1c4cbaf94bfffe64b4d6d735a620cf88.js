(function(c,b,a){if(a.readyState==="interactive"||a.readyState==="complete"){c(b,a)}else{a.addEventListener("readystatechange",function(){if(a.readyState==="interactive"||a.readyState==="complete"){c(b,a)}})}})(function(f,o){if(f._wklibrloaded_){return}f._wklibrloaded_=true;f._wkliWidgetIdsLU_={};var b,n,l,u="wkliid",r="_wkliid_",e=[];var x={getItem:function(i){if(!i){return null}return decodeURIComponent(o.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(i).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(A,D,z,y,i,B){if(!A||/^(?:expires|max\-age|path|domain|secure)$/i.test(A)){return false}var C="";if(z){switch(z.constructor){case Number:C=z===Infinity?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+z;break;case String:C="; expires="+z;break;case Date:C="; expires="+z.toUTCString();break}}o.cookie=encodeURIComponent(A)+"="+encodeURIComponent(D)+C+(i?"; domain="+i:"")+(y?"; path="+y:"")+(B?"; secure":"");return true},removeItem:function(z,y,i){if(!this.hasItem(z)){return false}o.cookie=encodeURIComponent(z)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(i?"; domain="+i:"")+(y?"; path="+y:"");return true},hasItem:function(i){if(!i||/^(?:expires|max\-age|path|domain|secure)$/i.test(i)){return false}return(new RegExp("(?:^|;\\s*)"+encodeURIComponent(i).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=")).test(o.cookie)},keys:function(){var i=o.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/);for(var z=i.length,y=0;y<z;y++){i[y]=decodeURIComponent(i[y])}return i}};function g(B,z){var y;if(!b||!e||!n||!n[B]){s("Missing iframe");return}if(z&&typeof z==="object"){for(var A in z){if(z.hasOwnProperty(A)){n[B][A]=z[A]}}}if(!k(n[B])){s("Invalid params");return}for(y=0;y<b.length;y++){if(b[y].id===B){e[y].src=p(n[B],l);break}}}function m(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(z){var y=Math.random()*16|0,i=z==="x"?y:(y&3|8);return i.toString(16)})}function a(y,C){var z,i,B,A;if(!y||!y.id){return null}if(typeof f._wkliWidgetIdsLU_[y.id]!=="undefined"){s("Error: the html id <"+y.id+"> is already used");return null}f._wkliWidgetIdsLU_[y.id]=1;B=h(y);if(f.location.search&&f.location.search.match(/nocache/i)){B.cachebuster=Math.round((new Date()).getTime()/1000)}if(!k(B)){z=o.createElement("div");z.appendChild(o.createTextNode("Error 400, Bad Request"));return z}A=p(B,C);i=o.createElement("iframe");i.setAttribute("id",y.id+"-ifrm");i.setAttribute("scrolling","no");i.setAttribute("src","about:blank");i.style.border="0";i.style.overflow="hidden";i.style.display="block";i.style.width="100%";i.style.height="100%";y.appendChild(i);i.setAttribute("src",A);e.push(i)}function k(i){if(!i){return false}if(!i.hasOwnProperty("host")){s("Missing host");return false}if(!i.hasOwnProperty("key")){s("Missing api key");return false}if(!i.hasOwnProperty("slot")){s("Missing slot");return false}return true}function p(z,B){var y="https://"+z.host;var A=u+"="+encodeURIComponent(B);var i=j(z);if(i){A+="&"+i}y+="/widget-loader?"+A;return y}function j(A){if(A){var y,i,z=[];for(y in A){if(A.hasOwnProperty(y)){switch(y){case"campaignContent":i="utm_content";break;case"campaignMedium":i="utm_medium";break;case"campaignName":i="utm_campaign";break;case"campaignSource":i="utm_source";break;case"campaignTerm":i="utm_term";break;default:i=y;break}if(A[y]!==null&&A[y]!==""){z.push(encodeURIComponent(i)+"="+encodeURIComponent(A[y]))}}}return z.join("&")}return null}function h(i){if(!i.dataset){return null}var y=i.id;if(!n){n={}}if(!n[y]){n[y]=i.dataset}return n[y]}function t(){var i=r;var y=x.getItem(i);if(!y){y=m();x.setItem(i,y,null,"/");x.setItem(i,y,(new Date()).setFullYear((new Date()).getFullYear()+1),"/")}return y}function c(){var y;for(y=0;y<e.length;y++){var z=v(e[y]);if(z&&z.postMessage){z.postMessage({type:"weekli_message",content:"focus"},"*")}}}function w(){var y;for(y=0;y<e.length;y++){var z=v(e[y]);if(z&&z.postMessage){z.postMessage({type:"weekli_message",content:"blur"},"*")}}}function v(y){var i=null;if(y&&"postMessage" in y){i=y}else{if(y.contentWindow&&"postMessage" in y.contentWindow){i=y.contentWindow}}return i}function d(y){if(typeof y.data==="object"&&y.data.type==="weekli_message"&&y.data.slot){var i=o.getElementById("weekli-widget-"+y.data.slot);if(i&&(y.data.numberOfBrochures>0||y.data.action==="show_widget")){i.removeAttribute("hidden")}}}function s(i){if(console&&console.log){console.log(i)}}b=o.querySelectorAll(".weekli-widget");if(!b){s("Can't find container with class weekli-widget");return}l=1;var q;for(q=0;q<b.length;++q){a(b[q],l)}if(f.postMessage&&f.addEventListener){f.addEventListener("focus",c);f.addEventListener("blur",w);f.addEventListener("message",d,false)}f.updateWeekliWidget=g},window,document);