//2021-02-03
var t;function moveMin(a,b){var c=0;function frame(){c+=6;a.style.left=c+'px';b.style.left=c+'px';if(c==300){clearInterval(d);document.getElementById("MinControl").style.right='-30px';document.getElementById("MinControl").style.display="block";document.getElementById("FloatingBanner").style.display="none";moveMinMin(document.getElementById("MinControl"))}};var d=setInterval(frame,1)};function moveMinMin(a){var b=-30;function frame(){b+=1;a.style.right=b+'px';if(b==0){clearInterval(c)}};var c=setInterval(frame,10)};function moveMax(a,b){var c=300;function frame(){c-=6;a.style.left=c+'px';b.style.left=c+'px';if(c==0){clearInterval(d);document.getElementById("MinControl").style.display="none"}};var d=setInterval(frame,1)};function moveMinMax(a){var b=0;function frame(){b-=1;a.style.right=b+'px';if(b==-30){moveMax(document.getElementById("FloatingBanner"),document.getElementById("MaxControl"));clearInterval(c)}};var c=setInterval(frame,10)};function showHideControl(){document.getElementById('MaxControl').onmouseover=function(){document.getElementById('MaxControl').style.display='block'};document.getElementById('MaxControl').onmouseout=function(){document.getElementById('MaxControl').style.display='none'};document.getElementById('FloatingBanner').onmouseover=function(){document.getElementById('MaxControl').style.display='block'};document.getElementById('FloatingBanner').onmouseout=function(){document.getElementById('MaxControl').style.display='none'}};function minPopup(){clearTimeout(t);moveMin(document.getElementById("FloatingBanner"),document.getElementById("MaxControl"));document.getElementById('divPopupAd').style.clip="rect(0px 300px 250px 265px)";try{listenDFP("min","popup","bottom-right",36,250)}catch(err){}};function maxPopup(){clearTimeout(t);document.getElementById("FloatingBanner").style.display="block";document.getElementById("MinControl").style.display="block";moveMinMax(document.getElementById("MinControl"));document.getElementById('divPopupAd').style.clip="auto";try{listenDFP("normal","popup","bottom-right",300,250)}catch(err){}};function closePopup(){document.getElementById("divPopupAd").style.display="none";try{listenDFP("close","popup","bottom-right",0,0)}catch(err){}clearTimeout(t)};window.addEventListener('message',function(a){data=a.data;if(data.func_type=='gaxRemovePopupControl'){document.getElementById("MaxControl").style.visibility="hidden";document.getElementById("MinControl").style.visibility="hidden";console.log('hide AbdFloatingAd');}},false);try{listenDFP("normal","popup","bottom-right",300,250)}catch(err){}