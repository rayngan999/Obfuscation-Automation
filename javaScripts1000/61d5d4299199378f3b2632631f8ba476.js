$(function(){var observer=new MutationObserver(function(mutations){document.getElementById($('[id^="pum-977505"]')[0].id).style.display="none";if(document.querySelector('#apxzone_WhzFHIOp > iframe')){let element1=document.querySelector('#apxzone_WhzFHIOp > iframe').contentWindow.document.getElementById('[id^="ap_"]');let element1_a_lenght=document.querySelector('#apxzone_WhzFHIOp > iframe').contentWindow.document.getElementsByTagName('a').length;let element1_img_lenght=document.querySelector('#apxzone_WhzFHIOp > iframe').contentWindow.document.getElementsByTagName('img').length;if(element1!=null||element1>1||element1_img_lenght>5){console.log('AD here');document.getElementById($('[id^="pum-977505"]')[0].id).style.display="block";observer.disconnect();}}});observer.observe(document,{attributes:false,childList:true,characterData:false,subtree:true});});