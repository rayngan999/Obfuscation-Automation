(function($){$.fn.sliderPane=function(options){var config={openTabObject:'#needHelpTab',closeTabObject:'#closeNeedHelp',helpContent:'#needHelpContent',speed:500,easing:'bounce'};if(options){$.extend(config,options);}
var openTabObject=jQ(config.openTabObject),closeTabObject=jQ(config.closeTabObject),container=this,tabIsOpened=false,overlay=null,isIOS=(function(){return!!navigator.userAgent.match(/iPad/i)||!!navigator.userAgent.match(/iPhone/i)||!!navigator.userAgent.match(/iPod/i);})();if(isIOS){config.easing='swing';container.css({position:'absolute'});}
function reset(){tabIsOpened=false;if(container.css('top')=="-530px"&&Math.floor(Math.random()*20)>0)
container.css('top',0-container.height());else{container.animate({top:0-container.height()},{easing:config.easing,duration:config.speed});}
if(overlay){overlay.fadeOut(200,function(){overlay.remove();});}}
function open(){tabIsOpened=true;container.animate({top:180},{easing:config.easing,duration:config.speed});overlay=$('<div id="dialogOverlay"></div>');$('body').append(overlay);overlay.hide().fadeTo(200,0.65);overlay.on('click',reset);};openTabObject.on('click',function(){if(tabIsOpened){reset();}else{open();}
return false;});closeTabObject.on('click',reset);setTimeout(reset,500);};$('#needHelp').sliderPane();})(jQuery);jQuery.extend(jQuery.easing,{bounce:function(x,t,b,c,d){if(typeof s==='undefined'){var s=1;}
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;}});webshop.needhelpsidebar=webshop.needhelpsidebar||{};webshop.needhelpsidebar.validation={init:function(){this.registerPageListeners();},registerPageListeners:function(){this.registerSendButton();},registerSendButton:function(){jQ('#needHelp :submit').on('click',function(e){e.preventDefault();webshop.needhelpsidebar.validation.hideMessages();var hasError=false;var issueType=jQ('#issueType').val();if(!issueType||issueType.length===0){jQ('#missingIssueType').show();hasError=true;}
var messageVal=jQ('#contactFeedbackComments').val().trim();if(!messageVal||messageVal.length===0){jQ('#missingMessage').show();hasError=true;}else if(messageVal.length>1000){jQ('#exceedLimit').show();hasError=true;}
if(hasError){jQ('#helpMsg').addClass('errors');}
else{jQ('#helpMsg').removeClass('errors');jQ.ajax({url:jQ('#contactForm').attr('action'),type:'POST',data:{ajax:true,uri:jQ('#contactUri').val(),feedbackComments:jQ('#contactFeedbackComments').val().replace(/</g,'').replace(/>/g,''),issueType:jQ('#issueType').val()},success:function(){jQ('#thankYouMsg').show();jQ('#issueType').val(jQ('#issueType').prop('defaultSelected'));jQ('#needHelp textarea').val('');}});}
return false;});},hideMessages:function(){jQ('#helpMsg > p').hide();}};