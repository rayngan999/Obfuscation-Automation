/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.9.1
*/
!function(o){"object"==typeof module&&"object"==typeof module.exports?o(require("jquery"),window,document):o(jQuery,window,document)}(function(o,t,i,e){var s=[],l=function(){return s.length?s[s.length-1]:null},n=function(){var o,t=!1;for(o=s.length-1;o>=0;o--)s[o].$blocker&&(s[o].$blocker.toggleClass("eventer-modal-current",!t).toggleClass("behind",t),t=!0)};o.emodal=function(t,i){var e,n;if(this.$body=o("body"),this.options=o.extend({},o.emodal.defaults,i),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),this.$blocker=null,this.options.closeExisting)for(;o.emodal.isActive();)o.emodal.close();if(s.push(this),t.is("a"))if(n=t.attr("href"),this.anchor=t,/^#/.test(n)){if(this.$elm=o(n),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=o("<div>"),this.$body.append(this.$elm),e=function(o,t){t.elm.remove()},this.showSpinner(),t.trigger(o.emodal.AJAX_SEND),o.get(n).done(function(i){if(o.emodal.isActive()){t.trigger(o.emodal.AJAX_SUCCESS);var s=l();s.$elm.empty().append(i).on(o.emodal.CLOSE,e),s.hideSpinner(),s.open(),t.trigger(o.emodal.AJAX_COMPLETE)}}).fail(function(){t.trigger(o.emodal.AJAX_FAIL);var i=l();i.hideSpinner(),s.pop(),t.trigger(o.emodal.AJAX_COMPLETE)});else this.$elm=t,this.anchor=t,this.$body.append(this.$elm),this.open()},o.emodal.prototype={constructor:o.emodal,open:function(){var t=this;this.block(),this.anchor.blur(),this.options.doFade?setTimeout(function(){t.show()},this.options.fadeDuration*this.options.fadeDelay):this.show(),o(i).off("keydown.emodal").on("keydown.emodal",function(o){var t=l();27===o.which&&t.options.escapeClose&&t.close()}),this.options.clickClose&&this.$blocker.click(function(t){t.target===this&&o.emodal.close()})},close:function(){s.pop(),this.unblock(),this.hide(),o.emodal.isActive()||o(i).off("keydown.emodal")},block:function(){this.$elm.trigger(o.emodal.BEFORE_BLOCK,[this._ctx()]),this.$body.css("overflow","hidden"),this.$blocker=o('<div class="'+this.options.blockerClass+' eventer-modal-blocker eventer-modal-current"></div>').appendTo(this.$body),n(),this.options.doFade&&this.$blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(o.emodal.BLOCK,[this._ctx()])},unblock:function(t){!t&&this.options.doFade?this.$blocker.fadeOut(this.options.fadeDuration,this.unblock.bind(this,!0)):(this.$blocker.children().appendTo(this.$body),this.$blocker.remove(),this.$blocker=null,n(),o.emodal.isActive()||this.$body.css("overflow",""))},show:function(){this.$elm.trigger(o.emodal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=o('<a href="#eventer-modal-close" rel="emodal:close" class="eventer-modal-close '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker),this.options.doFade?this.$elm.css({opacity:0,display:"inline-block"}).animate({opacity:1},this.options.fadeDuration):this.$elm.css("display","inline-block"),this.$elm.trigger(o.emodal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(o.emodal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove();var t=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){t.$elm.trigger(o.emodal.AFTER_CLOSE,[t._ctx()])}):this.$elm.hide(0,function(){t.$elm.trigger(o.emodal.AFTER_CLOSE,[t._ctx()])}),this.$elm.trigger(o.emodal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||o('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,$elm:this.$elm,$blocker:this.$blocker,options:this.options}}},o.emodal.close=function(t){if(o.emodal.isActive()){t&&t.preventDefault();var i=l();return i.close(),i.$elm}},o.emodal.isActive=function(){return s.length>0},o.emodal.getCurrent=l,o.emodal.defaults={closeExisting:!0,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"eventer-modal-wrap",blockerClass:"eventer-modal",spinnerHtml:'<div class="eventer-loader-wrap"><div class="eventer-loader"></div></div>',showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},o.emodal.BEFORE_BLOCK="emodal:before-block",o.emodal.BLOCK="emodal:block",o.emodal.BEFORE_OPEN="emodal:before-open",o.emodal.OPEN="emodal:open",o.emodal.BEFORE_CLOSE="emodal:before-close",o.emodal.CLOSE="emodal:close",o.emodal.AFTER_CLOSE="emodal:after-close",o.emodal.AJAX_SEND="emodal:ajax:send",o.emodal.AJAX_SUCCESS="emodal:ajax:success",o.emodal.AJAX_FAIL="emodal:ajax:fail",o.emodal.AJAX_COMPLETE="emodal:ajax:complete",o.fn.emodal=function(t){return 1===this.length&&new o.emodal(this,t),this},o(i).on("click.emodal",'a[rel~="emodal:close"]',o.emodal.close),o(i).on("click.emodal",'a[rel~="emodal:open"]',function(t){t.preventDefault(),o(this).emodal()})});