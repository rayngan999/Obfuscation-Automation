/*
	This class is the root of the Rexus Manager,
	the code below first checks to see if custom events are supported
	then creates an empty object on the DOM "window" for which all extending
	classes can then be attached to.
*/
!function(){if(this.Rexus)return!1;let t=[],e={};function n(){if("function"!=typeof window.CustomEvent){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("RexusEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}t.prototype=window.Event.prototype,window.CustomEvent=t}}function o(){return Math.random().toString(36).substring(2,8)}n.prototype.tag=function(e){e?e+="-":e="";let n=e+o();for(;u=n,t.indexOf(u)>=0;)n=e+o();var u;return t.push(n),n},n.prototype.register=function(t){if(e[t.key]){let n=e[t.key];Object.assign(n,t.values)}else e[t.key]=t.values},n.prototype.getComponent=function(t){return!!e[t]&&e[t].component},n.prototype.getItem=function(t){return!!e[t]&&e[t]},this.Rexus=this.Rexus?this.Rexus:new n}();