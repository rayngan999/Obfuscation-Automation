(function(e,t,c){t.behaviors.betterExposedFilters={attach:function(t,c){e('.bef-tree input[type=checkbox], .bef-checkboxes input[type=checkbox]').change(function(){i(this,t)}).filter(':checked').closest('.form-item',t).addClass('highlight')}};function i(i,t){$elem=e(i,t);$elem.attr('checked')?$elem.closest('.form-item',t).addClass('highlight'):$elem.closest('.form-item',t).removeClass('highlight')}})(jQuery,Drupal,drupalSettings);