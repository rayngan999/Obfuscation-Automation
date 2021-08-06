var bsDoc=new function(){return{write:function(el,string){var wrapper=document.createElement('div');wrapper.innerHTML=string;bsDoc.insertNode(el,wrapper,'after');},insertNode:function(parent,obj,insert){obj.childNodes.forEach(function(node){var nn=bsDoc.createNode(parent,node,insert);if(insert==='after'){parent=nn;}});},createNode:function(parent,node,insert){var newNode=null;switch(node.nodeType){case 1:newNode=document.createElement(node.tagName);if(node.tagName.toLowerCase()==="script"){newNode.async=node.async;}
Array.prototype.slice.call(node.attributes).forEach(function(item){newNode.setAttribute(item.name,item.value);});bsDoc.insertNode(newNode,node);break;case 2:break;case 3:newNode=document.createTextNode(node.textContent);break;case 8:newNode=document.createComment(node.textContent);break;default:newNode=node;break;}
if(insert==='after'){bsDoc.insertAfter(newNode,parent);}else{parent.appendChild(newNode);}
return newNode;},getCurrentScript:function(){return document.currentScript||(function(){var s=document.getElementsByTagName('script');return s[s.length-1]})();},insertAfter:function(n,b){var a=b.nextSibling;try{a?a.parentNode.insertBefore(n,a):b.parentNode.appendChild(n);}
catch(err){var pa=document.querySelector('.banner-top')
if(pa)pa.appendChild(n)}}}}
function removeUnicodeSpace(str){var s=str;s=s.toLowerCase();s=s.replace(/"|'/g,"");s=s.replace(/Ã |Ã¡|áº¡|áº£|Ã£|Ã¢|áº§|áº¥|áº­|áº©|áº«|Ä|áº±|áº¯|áº·|áº³|áºµ/g,"a");s=s.replace(/Ã¨|Ã©|áº¹|áº»|áº½|Ãª|á»|áº¿|á»|á»|á»/g,"e");s=s.replace(/Ã¬|Ã­|á»|á»|Ä©/g,"i");s=s.replace(/Ã²|Ã³|á»|á»|Ãµ|Ã´|á»|á»|á»|á»|á»|Æ¡|á»|á»|á»£|á»|á»¡/g,"o");s=s.replace(/Ã¹|Ãº|á»¥|á»§|Å©|Æ°|á»«|á»©|á»±|á»­|á»¯/g,"u");s=s.replace(/á»³|Ã½|á»µ|á»·|á»¹/g,"y");s=s.replace(/Ä/g,"d");s=s.replace(/\s+/gi,"-");s=s.replace(/^\-+|\-+$/g,"");return s;}
function bsAdLoad(bsWrapAd,bsScript){if(!bsWrapAd){console.log('Get placement is empty')
return}
if(!bsScript){console.log('Get script tag is empty')
return}
if(window['bsWrapAd']){for(var i in window['bsWrapAd']){if(window['bsWrapAd'][i]===bsWrapAd){console.log('Stop load')
return;}}}
console.log(bsScript)
var __tags=document.querySelectorAll('meta[property="article:tag"]');var __tag=[];for(var i=0;i<__tags.length;i++){var content=__tags[i].getAttribute('content');__tag.push(removeUnicodeSpace(content))}
var __path=window.location.pathname.split('/');var __cat=__path.length>1?__path[1]:'';var __url=__path[__path.length-1];var __dess=document.querySelector('meta[name="description"]');var __des=__dess?removeUnicodeSpace(__dess.getAttribute('content')):'';var __imgs=document.querySelectorAll('img[alt]');var __img=[];for(var j=0;j<__imgs.length;j++){if(__imgs[j].clientWidth>320){var alt=__imgs[j].getAttribute('alt');if(alt)__img.push(removeUnicodeSpace(alt))}
if(__img.length===2)break;}
window['bsAD'+bsWrapAd]='<div style="display:flex;flex: 1 0 30%;min-width: 30%;justify-content:center;"><ins class="6cba2533" data-key="'+bsWrapAd+'" data-cp-cat="'+__cat+'" data-cp-url="'+__url+'" data-cp-tag="'+__tag+'" data-cp-description="'+__des+'" data-cp-img1="'+__img[0]+'" data-cp-img2="'+__img[1]+'"></ins><script async defer src="https://blueadss.com/8127e7bf.js"></'+'script></div>';bsDoc.write(bsScript,window['bsAD'+bsWrapAd]);setTimeout(function(){var elWrap=document.querySelector('[data-key="'+bsWrapAd+'"]');if(elWrap)elWrap.style.flex='0 0 100%';},2000)
window['bsWrapAd'].push(bsWrapAd)}
try{var ts=new Date().getTime();window['bsTS'+ts]=bsWrapAds[0];bsWrapAds.shift();window['bsWrapAd']=window['bsWrapAd']||[];bsAdLoad(window['bsTS'+ts],bsDoc.getCurrentScript());}
catch(err){console.log(err)}