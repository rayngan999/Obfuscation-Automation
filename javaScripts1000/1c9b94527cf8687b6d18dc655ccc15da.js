jQuery(document).ready(function($){$('.ovrl-button').on('click',function(){img=$(this).parent().find('img');play_button=$(this);play_button.html('<img src="/wp-content/plugins/peta-optimization/images/ajax-loader.gif" />').css({background:'none',padding:'0px',border:'0px','box-shadow':'none'});img.attr('src',$(img).data('gif_url')).one('load',function(){play_button.hide();});});if(!po_is_mobile()){$('.still-png').each(function(){var gif_url=$(this).data('gif_url');if(!po_empty(gif_url))
$(this).attr('src',gif_url)});}});function po_empty(mixed_var){var undef,key,i,len;var emptyValues=[undef,null,false,0,"","0"];for(i=0,len=emptyValues.length;i<len;i++){if(mixed_var===emptyValues[i]){return true;}}
if(typeof mixed_var==="object"){for(key in mixed_var){return false;}
return true;}
return false;}
function po_is_mobile(){if(window.innerWidth<=800){return true;}else{return false;}}