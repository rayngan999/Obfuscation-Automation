(function(t,s,e,r){e.Ajax.prototype.findGlyphicon=function(e){return t(e).closest('.form-item').find('.ajax-progress.glyphicon')};e.Ajax.prototype.glyphiconStart=function(o,s){var e=this.findGlyphicon(o);if(e[0]){e.addClass('glyphicon-spin');if(t.fn.tooltip&&r.bootstrap.tooltip_enabled){e.removeAttr('data-toggle').removeAttr('data-original-title').removeAttr('title').tooltip('destroy');if(s){e.attr('data-toggle','tooltip').attr('title',s).tooltip()}};if(s){e.parent().append('<div class="sr-only message">'+s+'</div>')}};return e};e.Ajax.prototype.glyphiconStop=function(e){var s=this.findGlyphicon(e);if(s[0]){s.removeClass('glyphicon-spin');if(t.fn.tooltip&&r.bootstrap.tooltip_enabled){s.removeAttr('data-toggle').removeAttr('data-original-title').removeAttr('title').tooltip('destroy')}}};e.Ajax.prototype.setProgressIndicatorThrobber=function(){var s=t(this.element),r=this.glyphiconStart(s,this.progress.message);if(r[0]){this.progress.element=r.parent();this.progress.glyphicon=!0;return};if(!this.progress.element){this.progress.element=t(e.theme('ajaxThrobber'))};if(this.progress.message){this.progress.element.after('<div class="message">'+this.progress.message+'</div>')};if(s.is('input')){s.after(this.progress.element)}
else{s.append(this.progress.element)}};var o=e.Ajax.prototype.success;e.Ajax.prototype.success=function(t,e){if(this.progress.element){if(this.progress.glyphicon){this.glyphiconStop(this.progress.element)}
else{this.progress.element.remove()};this.progress.element.parent().find('.message').remove()};return o.apply(this,[t,e])}})(jQuery,this,Drupal,drupalSettings);