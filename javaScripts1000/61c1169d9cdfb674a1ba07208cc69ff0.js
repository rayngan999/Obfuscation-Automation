(function(e,s){'use strict';s.theme.progressBar=function(e){return'<div class="progress-wrapper" aria-live="polite"><div class="message"></div><div id ="'+e+'" class="progress progress-striped active"><div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span class="percentage"></span></div></div><div class="progress-label"></div></div>'};e.extend(s.ProgressBar.prototype,{setProgress:function(s,r,a){if(s>=0&&s<=100){e(this.element).find('.progress-bar').css('width',s+'%').attr('aria-valuenow',s);e(this.element).find('.percentage').html(s+'%')};if(r){r=r.replace(/<br\/>&nbsp;|\s*$/,'');e('.message',this.element).html(r)};if(a){e('.progress-label',this.element).html(a)};if(this.updateCallback){this.updateCallback(s,r,this)}},displayError:function(r){var a=e('<div class="alert alert-block alert-error"><button class="close" data-dismiss="alert">&times;</button><h4>'+s.t('Error message')+'</h4></div>').append(r);e(this.element).before(a).hide();if(this.errorCallback){this.errorCallback(this)}}})})(jQuery,Drupal);