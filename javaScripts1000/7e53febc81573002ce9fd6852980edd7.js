define([],function(){'use strict';return function(target){return target.extend({isVisible:function(){var msgs=this.messageContainer.errorMessages();for(var i=0;i<msgs.length;i++){if(stripe.isAuthenticationRequired(msgs[i]))
return false;}
return this.isHidden(this.messageContainer.hasMessages());}});};});