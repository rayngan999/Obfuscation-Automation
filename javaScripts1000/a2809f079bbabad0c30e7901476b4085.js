var socialTarget=window.location.toString().toLowerCase();function facebookLikeListener(){sendSocialEvent('Facebook','Like',socialTarget);}
function facebookUnlikeListener(){sendSocialEvent('Facebook','Unlike',socialTarget);}
function facebookSendListener(){sendSocialEvent('Facebook','Send',socialTarget);}
try{if(FB&&FB.Event&&FB.Event.subscribe){FB.Event.subscribe('edge.create',facebookLikeListener);FB.Event.subscribe('edge.remove',facebookUnlikeListener);FB.Event.subscribe('message.send',facebookSendListener);}}
catch(e){}
function twitterListener(){sendSocialEvent('Twitter','Tweet',socialTarget);}
try{if(twttr){twttr.ready(function(twttr){twttr.events.bind('click',twitterListener);});}}
catch(e){}
var excludeFromAddThis=new Array();excludeFromAddThis[0]="facebook_like";excludeFromAddThis[1]="facebook_unlik";excludeFromAddThis[2]="facebook_send";excludeFromAddThis[3]="tweet";function addthisListener(event){var sendEvent=true;var service=event.data.service;for(var i=0;i<excludeFromAddThis.length;i++)
{if(service.search(excludeFromAddThis[i])>-1)
{return false;}}
if(sendEvent==true){sendSocialEvent('addthis',service,socialTarget);}}
try{addthis.addEventListener("addthis.ready",function(event){if(addthis&&addthis.addEventListener){addthis.addEventListener('addthis.menu.share',addthisListener);}
else if(_ate&&_ate.ed&&_ate.ed.addEventListener){_ate.ed.addEventListener('addthis.menu.share',addthisListener);}});}
catch(e){}