!function(){XenForo.Tinhte_XenTag_TagPreview=function($a){if(!$a.data('previewurl')){var href=$a.attr('href');if(!href){return;}
var previewUrl=href;if(previewUrl.indexOf('?')===-1){previewUrl+='?';}else{previewUrl+='&';}
previewUrl+='preview=1';$a.data('previewurl',previewUrl);}
XenForo.create('XenForo.PreviewTooltip',$a);};XenForo.register('.tagList a.tag','XenForo.Tinhte_XenTag_TagPreview');XenForo.register('a.tagCloudTag','XenForo.Tinhte_XenTag_TagPreview');XenForo.register('a.Tinhte_XenTag_TagLink','XenForo.Tinhte_XenTag_TagPreview');}();