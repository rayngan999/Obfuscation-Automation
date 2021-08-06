(function(s,e){e.theme.progressBar=function(s){return'<div id="'+s+'" class="progress" aria-live="polite"><div class="progress__label">&nbsp;</div><div class="progress__track"><div class="progress__bar"></div></div><div class="progress__percentage"></div><div class="progress__description">&nbsp;</div></div>'};e.ProgressBar=function(r,i,t,a){this.id=r;this.method=t||'GET';this.updateCallback=i;this.errorCallback=a;this.element=s(e.theme('progressBar',r))};s.extend(e.ProgressBar.prototype,{setProgress:function(e,r,i){if(e>=0&&e<=100){s(this.element).find('div.progress__bar').css('width',e+'%');s(this.element).find('div.progress__percentage').html(e+'%')};s('div.progress__description',this.element).html(r);s('div.progress__label',this.element).html(i);if(this.updateCallback){this.updateCallback(e,r,this)}},startMonitoring:function(s,e){this.delay=e;this.uri=s;this.sendPing()},stopMonitoring:function(){clearTimeout(this.timer);this.uri=null},sendPing:function(){if(this.timer){clearTimeout(this.timer)};if(this.uri){var r=this,i=this.uri;if(i.indexOf('?')===-1){i+='?'}
else{i+='&'};i+='_format=json';s.ajax({type:this.method,url:i,data:'',dataType:'json',success:function(s){if(s.status===0){r.displayError(s.data);return};r.setProgress(s.percentage,s.message,s.label);r.timer=setTimeout(function(){r.sendPing()},r.delay)},error:function(s){var i=new e.AjaxError(s,r.uri);r.displayError('<pre>'+i.message+'</pre>')}})}},displayError:function(e){var r=s('<div class="messages messages--error"></div>').html(e);s(this.element).before(r).hide();if(this.errorCallback){this.errorCallback(this)}}})})(jQuery,Drupal);