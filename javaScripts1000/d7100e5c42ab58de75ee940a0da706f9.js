var boomiModal=function(){var i,d,t,o,n,a={};return a.center=function(){var o,e;o=Math.max(jQuery(window).height()-d.outerHeight(),0)/2,e=Math.max(jQuery(window).width()-d.outerWidth(),0)/2,d.css({top:o+jQuery(window).scrollTop(),left:e+jQuery(window).scrollLeft()})},a.open=function(o){var e=jQuery.extend({content:"",width:"100%",height:"auto",classes:"",type:"",url:""},o);i.show(),n.show(),a.getContent(e,function(o){t.empty().append(o),d.css({width:e.width,height:e.height}),a.center(),jQuery(window).bind("resize.modal",a.center),d.addClass(e.classes),n.hide(),d.show()})},a.getContent=function(o,e){var i=o.content;if("video"===o.type){if(""===o.url)return;i=a.videoContent(o.url),e(i)}if(""!==o.url&&""===i){var d={action:"boomi_modal_url_request",security:boomiModalObject.nonce,url:o.url};jQuery.post(boomiModalObject.ajaxURL,d,function(o){o.success,e(o.data)})}else e(i)},a.close=function(){d.hide(),i.hide(),t.empty(),jQuery(window).unbind("resize.modal")},a.videoContent=function(o){var e="";return e+='<div class="boomi-modal-video-overlay" id="boomi-modal-video-overlay">',e+='<div class="video-player">',e+='<video width="100%" height="auto" id="boomi-modal-video-player" class="modal-video" controls autoplay loop muted>',e+='<source type="video/mp4" src="'+o+'" />',e+="</video>",e+="</div>",e+="</div>"},i=jQuery('<div id="boomi-modal-overlay"></div>'),d=jQuery('<div id="boomi-modal"></div>'),t=jQuery('<div id="boomi-modal-content" class="boomi-modal-content"></div>'),o=jQuery('<a id="boomi-modal-close" href="#"><span class="dashicons dashicons-dismiss"></span></a>'),n=jQuery('<div id="boomi-modal-spinner"><img src="'+boomiModalObject.url+'images/spinner.svg" /></div>'),d.hide(),i.hide(),n.hide(),d.append(t,o),jQuery(document).ready(function(){jQuery("body").append(i,d,n)}),o.click(function(o){o.preventDefault(),a.close()}),i.click(function(o){o.preventDefault(),a.close()}),a}();