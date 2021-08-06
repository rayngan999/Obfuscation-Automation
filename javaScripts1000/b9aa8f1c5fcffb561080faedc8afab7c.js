define(['jquery','jquery-json','jquery-cookie','localization/copy'],function($,_jj,_jc,copy){function CreateModulePreference(){var myarr=[];$('.sortable').find('.module').each(function(){myarr[myarr.length]=$(this).attr('id');});var hashtable={};for(i=0;i<=myarr.length-1;i++){var pref=0;if(myarr[i]!='map-view'){pref=$("#"+myarr[i]).find('.collapse').length;}
hashtable[myarr[i]]=pref;}
var page_warpper={};page_warpper[url_page['url']]=hashtable;SavePersonalizedInfo(page_warpper);}
function SavePersonalizedInfo(data){var data_arr={};var sort_cookie=(typeof $.cookie!='undefined')?$.cookie.get('pelm_p',true):null;if(sort_cookie!=null){$.each(sort_cookie,function(key,element){if(key==url_page['url']||key=='z_'+url_page['url']){data_arr[key]=data[url_page['url']];}
else{data_arr[key]=element;data_arr[url_page['url']]=data[url_page['url']];}});}
else{data_arr=data;}
$.cookie.set('pelm_p',JSON.stringify(data_arr),{expires:3650,path:'/',SameSite:Secure,Secure});}
function GetModulePreferences(modulename){var data_arr=[];var data_class=[];var retrn_data=-1;var sort_cookie=(typeof $.cookie!='undefined')?$.cookie.get('pelm_p',true):null;var i=0;if(sort_cookie!=null){$.each(sort_cookie,function(key,element){if(key==url_page['url']){$.each(element,function(key_data,element_data){if(modulename==key_data)
{data_class[i]=element_data;retrn_data=(element_data);}
i++;});}});}
return retrn_data;}
function SetModulePreference(){var data_arr=[];var data_class=[];var sort_cookie=(typeof $.cookie!='undefined')?$.cookie.get('pelm_p',true):null;var i=0;if(sort_cookie!=null){$.each(sort_cookie,function(key,element){if(key==url_page['url']){$.each(element,function(key_data,element_data){data_arr[i]=key_data;data_class[i]=element_data;i++;});}});}
for(j=0;j<=data_arr.length-1;j++){if(j!=data_arr.length){if(data_class[j]==0){$('#'+data_arr[j]+" .tools").find('.collapse').removeClass('showhide hidetext collapse').addClass('showhide hidetext expand').attr('title',copy.expandTooltip);$('#'+data_arr[j]+" .content .sneak-peak").removeClass('content sneak-peak').addClass('content sneak-peak collapsed');if($('#'+data_arr[j]).find('.sneak-peak').length==1){if($('#'+data_arr[j]).find('.sneak-peak').attr('force-min-height')){customMinHeight=$('#'+data_arr[j]).find('.sneak-peak').attr('force-min-height');}else{customMinHeight="67px"}
$('#'+data_arr[j]+" .sneak-peak").attr("style","height: "+customMinHeight);}else{$('#'+data_arr[j]+" .content").attr("style","display: none;");}}
else{$('#'+data_arr[j]+" .tools").find('.expand').removeClass('showhide hidetext expand').addClass('showhide hidetext collapse').attr('title',copy.collapseTooltip);$('#'+data_arr[j]+" .sneak-peak").attr("style","height: "+$('#'+data_arr[j]+" .sneak-peak").attr("full-height"));}
$(".sortable #"+data_arr[j+1]).insertAfter($(".sortable #"+data_arr[j]));}}}
return{bind:SetModulePreference,Update:CreateModulePreference,GetModulePreferences:GetModulePreferences};});;