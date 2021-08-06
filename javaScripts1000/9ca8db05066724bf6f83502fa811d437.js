/*
 jQuery capslockstate plugin v1.2.1
 https://github.com/nosilleg/capslockstate-jquery-plugin/

 Copyright 2012 Jason Ellison
 Released under the MIT license
 https://github.com/nosilleg/capslockstate-jquery-plugin/blob/master/MIT-LICENSE.txt

 Date: Sun Feb 3 2013 21:34:00 GMT
*/
(function(c){var a="unknown",f={init:function(g){c.extend({},g);var f=!0===/MacPPC|MacIntel/.test(window.navigator.platform),d={isCapslockOn:function(b){var e=!1;b.shiftKey?e=b.shiftKey:b.modifiers&&(e=!!(b.modifiers&4));b=String.fromCharCode(b.which);b.toUpperCase()!==b.toLowerCase()&&(b.toUpperCase()===b?!0===f&&e||(a=!e):b.toLowerCase()===b&&(a=e));return a},isCapslockKey:function(b){20===b.which&&"unknown"!==a&&(a=!a);return a},hasStateChange:function(b,a){b!==a&&(c("body").trigger("capsChanged"),
!0===a?c("body").trigger("capsOn"):!1===a?c("body").trigger("capsOff"):"unknown"===a&&c("body").trigger("capsUnknown"))}};c("body").bind("keypress.capslockstate",function(b){var c=a;a=d.isCapslockOn(b);d.hasStateChange(c,a)});c("body").bind("keydown.capslockstate",function(b){var c=a;a=d.isCapslockKey(b);d.hasStateChange(c,a)});c(window).bind("focus.capslockstate",function(){var b=a;a="unknown";d.hasStateChange(b,a)});d.hasStateChange(null,"unknown");return this.each(function(){})},state:function(){return a},
destroy:function(){return this.each(function(){c("body").unbind(".capslockstate");c(window).unbind(".capslockstate")})}};jQuery.fn.capslockstate=function(a){if(f[a])return f[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)c.error("Method "+a+" does not exist on jQuery.capslockstate");else return f.init.apply(this,arguments)}})(jQuery);