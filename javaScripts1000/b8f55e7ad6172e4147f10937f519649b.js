'use strict';$(document).ready(function(){fs.scroll=[];var int_a;if(set.defer){int_a=window.setInterval(function(){var haskey=hasdefer.all;haskey=(set.page.mod=='home')?(haskey&&hasdefer.visible?true:false):haskey;if(haskey){window.clearInterval(int_a);_load();hasdefer.main=true;}
else{}},100);}
else{_load();}})
function _load(){if(set.display)
{set.doc.y=Math.round($(document).height());set.doc.x=Math.round($(document).width());set.win.y=Math.round($(window).height());set.win.x=Math.round($(window).width());display(false);$(window).resize(function(){set.win.y=Math.round($(window).height());set.win.x=Math.round($(window).width());display(true);});}
form_send();form_type();_bootstrap_modal();_toogle();boslink();device_actions();meta_refresh();aspect_ratio();jumpMenu();stats();topGo();_tema_slide();_tema_menu_mobil();_tema_menu_case();_tema_link_load();_tema_subnav();_tema_footer();_tema_sticky();_tema_tab();_tema_ads();_tema_sub_info();_tema_embed_resize();_page_rehber();_page_eczane();_page_album();_page_post();_page_ilan();_page_info();_page_lig();_swip_gallery_fix();}
function display(resize,newDocSize)
{if(newDocSize)doc_update();if(resize)
{waitForFinalEvent(function(){tema(true);},800,"some unique string");}}
function doc_update(){set.doc.y=Math.round($(document).height());set.doc.x=Math.round($(document).width());}
function mediasizemod(resize){var j='ms';j=set.win.x>set.media.ms?'xs':j;j=set.win.x>set.media.xs?'sm':j;j=set.win.x>set.media.sm?'md':j;j=set.win.x>set.media.md?'lg':j;set.user.media=j;}
function _page_album(){if(!exis('page_album'))return false;if($('body').hasClass('foto detay')){$(document).keydown(function(e){if(album.prev!='none'){if(e.keyCode==37){window.location.href=album.prev}}
if(album.next!='none'){if(e.keyCode==39){window.location.href=album.next}}})}}
function _page_eczane(){if(!exis('page_eczane'))return false;$('#eczane-bolge').change(function(){var value=$(this).val();$('.eczane .liste > div').removeClass('on');$('.eczane .liste').removeClass('on');if(value!="all"){$('.eczane .liste .'+value).addClass('on');$('.eczane .liste').addClass('on');}})}
function _page_ilan(){if(!exis('page_ilan'))return false;_bootstrap_modal();$('#field-gun').keyup(function(){if($(this).val()&&$(this).val()>0)
{if(!$('.field-gun').hasClass('on'))$('.field-gun').addClass('on');}
else
{if($('.field-gun').hasClass('on'))$('.field-gun').removeClass('on');}})
$('#field-type').change(function(){var v=$(this).val();if(v)
$('#field-price').attr('placeholder',$('#field-type .'+v).data('price'));else
$('#field-price').attr('placeholder',$('#field-type .bos').data('price'));})
var url=new URL(window.location);var b=url.searchParams.get("b");if(b!=null){$('#bulletin-'+b+' > a')[0].click();}}
function calculateBulletinPrice(src,dst){var days=parseInt($(src).val());var price=0;var discount=0;var result='';$(dst).val('Ãcret hesaplanÄ±yor...');var perDay=$('input[name=per_day]').val();var perWeek=$('input[name=per_week]').val();var perMonth=$('input[name=per_month]').val();if(days<7){price=days*perDay;}else if(days<30){price=days*perWeek;}else if(days>=30){price=days*perMonth;}
$(dst).html('');if(price>0){discount=(days*perDay)-price;discount=discount.toFixed(2);price=price.toFixed(2);result='<span>'+price+'TL</span>';if(discount>0){result+=' '+discount+' TL Ä°NDÄ°RÄ°MLÄ°';}
$(dst).html(result);}else{}}
function priceInputPlaceholder(type){switch(type){case 'eleman':return 'Teklif ettiÄiniz maaÅ ne kadar ?';case 'vasita':return 'AracÄ±nÄ±zÄ± kaÃ§a satÄ±yorsunuz ?';case 'emlak':return 'EmlaÄÄ±nÄ±z iÃ§in teklif ettiÄiniz fiyat nedir ?';default:return 'Teklif ettiÄiniz bir fiyat varsa belirtiniz.';}}
function _page_info(){if(exis('page_ilan_side')){var j=$('.info .side-menu');$('.info .sideOf').click(function(){$(j).removeClass('on')})
$('.info .sideOn').click(function(){$(j).addClass('on')})}
$('#rkm-list > li').on("click",function(){if(!$(this).hasClass('on')){$('#rkm-list .ico i').removeClass('ss-hyphen').addClass('ss-plus');$('#rkm-list > li').removeClass('on');$(this).addClass('on');$(this).find('.ico i').removeClass('ss-plus').addClass('ss-hyphen');}});$('#stat-list > li').on("click",function(){if(!$(this).hasClass('on')){$('#stat-list .on .us > i').removeClass('ss-navigateup').addClass('ss-navigatedown');$('#stat-list > li').removeClass('on');$(this).addClass('on');$(this).find('.us > i').removeClass('ss-navigatedown').addClass('ss-navigateup');}
else{$('#stat-list .on .us > i').removeClass('ss-navigateup').addClass('ss-navigatedown');$('#stat-list > li').removeClass('on');}});$('#stat-list').removeClass('load');}
function _page_lig(){if(!exis('page_lig'))return false;console.log('lig');$('#mask-select-devre').find('.b a').click(function(e){e.preventDefault();var devre=$(this).data('devre');$('#devre-block-one,#devre-block-two').removeClass('on');$('#devre-block-'+devre).addClass('on');})
var j=$('.lig .side-menu');$('.lig .sideOf').click(function(){$(j).removeClass('on')})
$('.lig .sideOn').click(function(){$(j).addClass('on')})}
function _page_post(){if(set.page.cat=="entry"){var a=$('#post-share').offset().top;if(set.win.y<a)$('#post-share').addClass('t-1');}}
function _page_rehber(){if(set.page.sub=='rehber'&&set.page.mod=='indeks'){if(set.theme=='enerjik'&&($('header').hasClass('t-3'))){fs.sticky.rootcss=true;}
if(set.theme=='default'&&($('header').hasClass('t-2')||$('header').hasClass('t-1'))){fs.tmsh.rootClasses=true;}}
$('.rehber .rl-map').on("click",function(){var e=$('.rehber .topic-map');if(!$(e).hasClass('on')){$(e).addClass('on');RemoveScroll(true);on_index(true);}
else{$(e).removeClass('on');RemoveScroll(true);on_index(true);}})
$('.rehber .rl-find').on("click",function(){var e=$('.rehber nav.r-bar');if(!$(e).hasClass('on')){$(e).addClass('on');RemoveScroll(true);on_index(true);}
else{$(e).removeClass('on');RemoveScroll();on_index();}});if(exis('rehber_filtre')){$('#field-il').on('change',function(){var provinceId=$(this).val();$('#field-ilce').html('<option value="">yÃ¼kleniyor...</option>');$.get(window.location,{action:'counties',province_id:provinceId},function(html){$('#field-ilce').html(html);});});}
if(exis('rehber_ivent_map')){$('.ivent-map').click(function(){var j=$('.map-window');if(!$(j).hasClass('on')){zindex('add',$('header'),0)
$(j).addClass('on');}
else{zindex('add',$('header'),8)
$(j).removeClass('on');}
init();});}}
fs.rehberSticky=true;function rehber_sticky(){if(fs.rehberSticky)
{waitForFinalEvent(function(){fs.rehberSticky=false;init();},800,"...");}}
function createUriFromGuideFilter()
{var uri=$('#guide-filter-form').serialize();return uri;}
function gotoCategory(baseUrl)
{var uri=$('#guide-filter-form').serialize();var url=baseUrl+'?'+uri+'#start';window.location=url;return false;}
function _tema_ads(){ad_yan();if(exis('ad_buton_open')){$('.rkm .buton-open').on('click',function(){var ins=$(this).parent();if($(ins).hasClass('f-on')){$(this).children('b').text('ReklamÄ± GÃ¶ster');$(ins).removeClass('f-on');}
else{$(this).children('b').text('ReklamÄ± Kapat');$(ins).addClass('f-on');}});}
if(set.ad.loadchannels){ad_after();}
online_visitors();}
function ad_after(){setTimeout(function(){$.each(set.ad.loadchannels,function(key,value){if(value=='yan_l')ad_yan_after(set);if(value=='yan_r')ad_yan_after(set);});},1000);}
function online_visitors()
{$.get('https://statistics.daktilo.com/stats/visitors?site_id='+site.id,function(json){if(json.error==false){$('footer .block-visitors').show();$('#realtime-visitors').text(json.total);}})}
function _tema_embed_resize()
{setTimeout(function(){$('.embed-case').each(function(){var embedCase=$(this);$(embedCase).find('iframe').each(function(){var frameWidth=$(this).attr('width');var frameHeight=$(this).attr('height');var parentWidth=$(this).parents('.embed-case')[0].offsetWidth;if(frameWidth<frameHeight){var ratio=parentWidth/frameWidth;var newHeight=frameHeight*ratio;$(embedCase).css({height:newHeight+'px'})}});});},1000)}
function _tema_footer(){if(exis('footer_extra_list')){$('footer .extra-list .item').click(function(){$('footer .extra-list .item').removeClass('on');$(this).addClass('on');})}}
var status_tre=false;function _tema_form_mask()
{if(set.media.sm>(set.win.x-1))
{if(status_tre)return false;$('.fmask').addClass('mobil');fmask.mobil=true;status_tre=true;}
else
{if(!status_tre)return false;$('.fmask').removeClass('mobil');fmask.mobil=false;fmask_select_close();RemoveScroll(false);status_tre=false;}}
function _tema_link_load(){if(!exis('link_load'))return false;$('a.link-load,.link-load a').click(function(e){screen(true,'five');})}
fs.casemenu=false;fs.casemenu_js_open_slide=$('#casemenu').hasClass('js-slidedown')?true:false;function _tema_menu_case(){if(!exis('sub_case_menu'))return false;$('#sub-casemenu > a').click(function(){if(set.win.x<set.media.sm)return false;if(!$('html').hasClass('on-casemenu')){$('#item-51').removeClass('ss-navigatedown').addClass('ss-delete');$('#tost-1').addClass('on');htmcss('on-casemenu',true);screen(true,'for');if(fs.casemenu_js_open_slide)$('#casemenu').slideDown('fast');window.setTimeout(function(){fs.casemenu=true;},500)
$(document).keydown(function(e){if(e.keyCode==27)
{_tema_menu_case_close();}})}
else{_tema_menu_case_close();}})
$('#sub-casemenu input.key').blur(function(){var v=$(this).val()
if(v)$(this).addClass('active');})
$('#casemenu').clickoutside(function(){if(fs.casemenu){_tema_menu_case_close();}});}
function _tema_menu_case_close(icon){$('#item-51').removeClass('ss-delete').addClass('ss-navigatedown');$('#tost-1').removeClass('on');htmcss('on-casemenu',false);if(fs.casemenu_js_open_slide)$('#casemenu').slideUp('fast');screen(false,'for');fs.casemenu=false;}
fs.side={'has':false,'typ_as':exis('menu_mobil_as')?true:false,'typ_sh':exis('menu_mobil_sh')?true:false,'span':'#menu-mobil','htm':'#htm','row':'#item-rows','tost':'#tost-2','perde':'#main-perde,#mm-closeout','closeout':'#mm-closeout','close':'#mm-close','f_key':'#mmf-key','f_close':'#mmf-close','f_form':'#mmf-form','f_has':false,'_bar':'#mmf-bar','time':{'one':false,'two':false,'tre':false},'top':0};function _tema_menu_mobil(){if(!exis('menu_mobil'))return false;$(fs.side.row).click(function(){if(!fs.side.has){fs.side.top=$(window).scrollTop();$(fs.side.htm).addClass('on-menu-mobil');$(fs.side.span).addClass('on');$(fs.side.tost).addClass('on');$(fs.side.row).addClass('on');$(fs.side.perde).removeClass('hidden');$(fs.side.span).removeClass('of');RemoveScroll(true);fs.side.has=true;}
else{_tema_menu_mobil_close();}})
var outspan=fs.side.typ_as?fs.side.perde:fs.side.closeout;$(outspan).click(function(){_tema_menu_mobil_close()});$(outspan).bind('touchstart touchend',function(e){_tema_menu_mobil_close();});$(fs.side.f_form).submit(function(event){if($(fs.side.f_key).val()==''){event.preventDefault();return false;}})
if(fs.side.typ_sh){$(fs.side.f_key).focus(function(){$(fs.side.close).addClass('of-load');clearTimeout(fs.side.time.fOn);fs.side.time.fOn=window.setTimeout(function(){$(fs.side.span).addClass('find-on');$(fs.side.close).addClass('of');},200)})
$(fs.side.f_close).click(function(){if(!fs.side.f_has){fs.side.f_has=true;_t_mmf_close();}});$(fs.side.f_key).blur(function(){if(fs.side.f_has)return false;var e=$(this);var v=$(this).val();if(v==''){if(!fs.side.f_has){fs.side.f_has=true;_t_mmf_close();}}else{clearTimeout(fs.side.time.tre);fs.side.time.tre=window.setTimeout(function(){if(!fs.side.f_has){$(e).val('');fs.side.f_has=true;_t_mmf_close();}},3500)}})
$(fs.side.close).click(function(){_tema_menu_mobil_close();});}}
function _t_mmf_close(){$(fs.side.f_key).val('');$(fs.side.span).removeClass('find-on');$(fs.side.close).removeClass('of');clearTimeout(s);var s=window.setTimeout(function(){$(fs.side.close).removeClass('of-load');fs.side.f_has=false;},200)}
function _tema_menu_mobil_close(die){$(fs.side.htm).removeClass('on-menu-mobil');$(fs.side.span).removeClass('on');$(fs.side.tost).removeClass('on');$(fs.side.row).removeClass('on');if(die){$(fs.side.perde).addClass('hidden');$(fs.side.span).removeClass('on');$(fs.side.span).addClass('of');}
else{clearTimeout(fs.side.time.one);fs.side.time.one=window.setTimeout(function(){$(fs.side.perde).addClass('hidden');$(fs.side.span).addClass('of');},300)}
RemoveScroll(false);$(window).scrollTop(fs.side.top);fs.side.has=false;}
fs.tmsh={id:'#_s_head',span:$('header').outerHeight(),last:0,delta:3,rootClasses:false}
function _tema_mobil_stick_header(onscroll,secondcall){var int,s;if(!secondcall){if(fs.scroll.indexOf('mob-head')<0){fs.scroll.push('mob-head');}}
s=$(fs.tmsh.id).data('set')?$(fs.tmsh.id).data('set'):false;s=s&&s.f_back?s.f_back:s;fs.tmsh.span=s.top?s.top:fs.tmsh.span;fs.tmsh.id=s.id?s.id:fs.tmsh.id;if(!mediakur(s.media)){$(fs.tmsh.id).removeClass('hide show');return false;}
if(onscroll){int=setInterval(function(){if(fs.tmsh.last==$(window).scrollTop()){window.clearInterval(int);}
else{_tmsh_run();}},100);}}
function _tmsh_run(){if($('html').hasClass('mobilmenu-on'))return false;var top;top=$(window).scrollTop();if(Math.abs(fs.tmsh.last-top)<=fs.tmsh.delta){return}
if(top>fs.tmsh.last&&top>fs.tmsh.span){$(fs.tmsh.id).removeClass('show');$(fs.tmsh.id).addClass('hide');if(fs.tmsh.rootClasses){$('html').addClass('on-stick-b-head');}}
else{if(top+$(window).height()<$(document).height()){$(fs.tmsh.id).addClass('show');$(fs.tmsh.id).removeClass('hide');}}
if(top<10){$(fs.tmsh.id).removeClass('show');if(fs.tmsh.rootClasses){$('html').removeClass('on-stick-b-head');}}
fs.tmsh.last=top;}
fs.slide={'media':false,'count':0,'span':{},'spanmedia':{},'surum':4,'storage':false};if(localStorage.slide){fs.slide.storage=JSON.parse(localStorage.slide);if(fs.slide.storage.surum!=fs.slide.surum){localStorage.removeItem("slide");fs.slide.storage=false;}}
function _tema_slide(after){if(set.unscript.slide){return false;}
if(!after&&(fs.slide.media==set.user.media))return false;fs.slide.media=set.user.media;if(fs.slide.count>0){var v=fs.slide.span;try{$.each(v,function(key,val){slick_each(val,false);});}catch(error){}}
else{try{$('.slide').each(function(i){slick_each($(this),false);})}catch(error){}}}
function slick_each(e,cache){var data,kur,j,id,active,it;if(cache){j=cache;id=j.id;active=fs.slide.spanmedia[""+id+""]?fs.slide.spanmedia[""+id+""]:false;}
else{fs.slide.count=(fs.slide.count+1);id=$(e).attr('id');it=id.replace("slide-","s-");data=$('#'+id).data('set');active=false;if(data===null){return false;}
j={id:id,dom:{div:'#'+id,list:'#'+it+'-list',dots:data.has_dots?'#'+it+'-dots':false,prev:data.has_ctrl?'#'+it+'-prev':false,next:data.has_ctrl?'#'+it+'-next':false},dots:{over:(typeof(data.dots)!=='undefined'&&data.dots.over)?true:false,link:(typeof(data.dots)!=='undefined'&&data.dots.link)?true:false,css:(typeof(data.dots)!=='undefined')?data.dots.css:''},active:false,slidestoshow:data.slidestoshow?data.slidestoshow:false,responsive:data.responsive?data.responsive:false,adaptive:data.adaptive?true:false,autoplay:data.autoplay?true:false,vertical:data.vertical?true:false,media:data.media?data.media:false,native:data.native?data.native:false,lazyLoad:data.lazyLoad?data.lazyLoad:false,lzy:data.lzy?true:false,blazy:data.blazy?true:false,speed:data.speed?data.speed:300,cssease:data.cssease?data.cssease:'ease',centerMode:data.centerMode?true:false,variableWidth:data.variableWidth?true:false,infinite:data.infinite?true:false,kur:false,section:data.section?data.section:false,}}
j.kur=mediakur(j.media);fs.slide.span[""+id+""]=(j);if(j.kur){if(!active){var slickset={prevArrow:j.dom.prev,nextArrow:j.dom.next,appendDots:j.dom.dots,dotsClass:j.dots.css,vertical:j.vertical?true:false,verticalSwiping:j.vertical?true:false,slidesToShow:j.slidestoshow?j.slidestoshow:1,slidesToScroll:j.slidestoshow?j.slidestoshow:1,autoplay:j.autoplay,responsive:j.responsive?slick_response(j.responsive):false,dots:true,adaptiveHeight:j.adaptive,lazyLoad:j.lazyload,centerMode:j.centerMode,variableWidth:j.variableWidth,infinite:j.infinite}
if(j.dots.link){slickset['customPaging']=function(slider,i){var e=$(j.dom.list).find('.slick-slide[data-slick-index='+i+']'),val=$(e).data('dots')?$(e).data('dots'):(i+1),css=$(e).data('name')?'class="dots-'+$(e).data('name')+'"':'',url=$(e).attr('href')?$(e).attr('href'):$(e).attr('data-href');return '<a href="'+url+'" '+css+' target="_blank">'+val+'</a>';};}
$(j.dom.list).on('init',function(){if(!$(j.dom.div).hasClass('on'))$(j.dom.div).addClass('on');$(j.dom.dots).find('.after').remove();})
$(j.dom.list).slick(slickset);fs.slide.spanmedia[""+id+""]=true;if(data.has_dots){if(j.dots.over){$(j.dom.dots).find('li').on('mouseover',function(){$(j.dom.list).slick('goTo',$(this).index(),true);});}}
if(data.has_ctrl){$(''+j.dom.prev+','+j.dom.next+'').click(function(){$(j.dom.list).addClass('ctrl-on');$(j.dom.list).on('afterChange',function(event,slick,currentSlide){clearTimeout(slide_ctrl_click);var slide_ctrl_click=window.setTimeout(function(){$(j.dom.list).removeClass('ctrl-on');},400)});});}
$(j.dom.list).on('afterChange',function(event,slick,currentSlide){if(j.blazy){bLazy.revalidate();}
slick_track_slide(j.section,currentSlide);});if(j.lzy){var ItemsLzy=$(j.dom.list).find('.lzy');$(j.dom.div).hover(function(){slick_lzy(j.dom.div,ItemsLzy);})
$(j.dom.list).on('afterChange',function(event,slick,currentSlide){slick_lzy(j.dom.div,ItemsLzy);});$(j.dom.div).bind('touchstart touchend',function(e){slick_lzy(j.dom.div,ItemsLzy);});if(cssua.ua.mobile){slick_lzy(j.dom.div,ItemsLzy);};}}}
else{if(active){$(j.dom.list).slick('unslick');fs.slide.spanmedia[""+id+""]=false;}
if(j.native&&j.lzy){if(mediakur(j.native)){slick_native(j);}}}}
function slick_response(i){var j={'4321':[{breakpoint:961,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:420,settings:{slidesToShow:1,slidesToScroll:1}}],'321':[{breakpoint:961,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:530,settings:{slidesToShow:1,slidesToScroll:1}}]}
return j[i];}
function slick_view(j,event,slick,currentSlide){var item=$('#'+j.id).find('.item.slick-active');if(!$(item).hasClass('view-on')){$(item).addClass('view-on');}}
function slick_lzy(span,items,skip){if(!$(span).hasClass('on-lzy')){var y=true;$(items).each(function(i){y=(skip&&i<skip)?false:true;if(y){$(this).attr('src',$(this).data('lzy'));$(this).removeAttr('data-lzy');}});$(span).addClass('on-lzy');}}
function slick_native(j){var slide,list,f
slide=j.dom.div;list=j.dom.list;var f=$(list).find('.item:nth-child(2) .real');$(f).attr('src',$(f).data('lzy'));$(f).removeAttr('data-lzy');var ItemsLzy=$(list).find('.lzy');$(slide).bind('touchstart touchend',function(e){slick_lzy(slide,ItemsLzy,1);});$(list+' > a.item-news').bind('touchstart touchend',function(e){if(!$(this).hasClass('view')){$(this).addClass('view');storeRatings('view',j.section,$(this).data('type'),$(this).data('id'));}});}
function slick_track_slide(section,nth){if(set.page.mod!='home'){return false;}
var a=$('#s-'+section+'-list .slick-track a:nth('+nth+')');if($(a).hasClass('item-news')){var id=$(a).data('id');var type=$(a).data('type');storeRatings('view',section,type,id);}}
slick_rating('manset');slick_rating('surmanset');function slick_rating(section){if(!exis('rating_'+section))return false;$('#slide-'+section).unbind('click').on('click','a',function(event){if($(this).parent('li').length==1){var li=$(this).parent('li');var ul=$(this).parents('ul');var nth=$($(ul).find('li')).index(li);var a=$('#s-'+section+'-list .slick-track a:nth('+nth+')');}else{var a=$(this);}
var id=$(a).data('id');var type=$(a).data('type');storeRatings('click',section,type,id);sendRatings();});}
fs.sticky={media:false,rootcss:false}
function _tema_sticky(resize){if((fs.sticky.media==set.user.media))return false;if(fs.sticky){fs.sticky.media=set.user.media;}
$('.sticky').each(function(){var e,s,delay,top,media,after;e=$(this);s=$(e).data('set');s=s&&s.f_stck?s.f_stck:s;media=s&&s.media?s.media:($(e).data('media')?$(e).data('media'):false);after=s&&s.after?s.after:($(e).data('after')?$(e).data('after'):false);delay=s&&s.delay?s.delay:($(e).data('delay')?$(e).data('delay'):false);top=s&&s.top?s.top:($(e).data('top')?$(e).data('top'):0);var kur=mediakur(media);if(kur){var c=$('footer').height()+140;if(delay){clearTimeout(b);var b=window.setTimeout(function(){$(e).sticky({topSpacing:top?top:0,wrapperClassName:'ws',bottomSpacing:c})
$(e).addClass('on');},delay);}
else{$(e).sticky({topSpacing:top?top:0,wrapperClassName:'ws',bottomSpacing:c});$(e).addClass('on');}
$(e).on('sticky-start',function(){if(after){eval(after+"()");}
if(s.rootcss&&fs.sticky.rootcss){$('html').addClass('stick-'+s.rootcss);}});$(e).on('sticky-end',function(){if(s.rootcss&&fs.sticky.rootcss){$('html').removeClass('stick-'+s.rootcss);}})}
else{if($(e).parent().hasClass('_ws')){$(e).unstick().removeClass('on');}}})}
function _tema_sub_info(){var on=getCookie('info-datapolicy')?true:false;if(!on){$('.sub-info').removeClass('hidden');window.setTimeout(function(){$('.sub-info').addClass('on');},500);setCookie('info-datapolicy',true,60);$('.sub-info.f-data-policy .close').on("click",function(){$('.sub-info').removeClass('on');window.setTimeout(function(){$('.sub-info').remove();},500);})}
else{$('.sub-info').remove();}}
fs.txtZoom=set.TextVarZoom;fs.subnav={scroll:false,last:0,has:true,span:false,name:'entry',exit:false};function _tema_subnav(onscroll,secondcall){var int;if(!secondcall){if(!exis('subnav'))return false;fs.subnav.span=$('.subnav .fix');fs.subnav.name=$(fs.subnav.span).data('nav');fs.subnav.exit=fs.subnav.name=='entry'?($('#top-end-text').offset().top-200):false;var max_zoom=set.TextMaxZoom;var var_zoom=set.TextVarZoom;$('.text-size a').click(function(){var zoom=fs.txtZoom,snc=$(this).hasClass('arti')?(zoom<max_zoom?(zoom+1):zoom):(zoom>0?(zoom-1):zoom);if(zoom==snc)return false;if(snc==0)$('.text-size a.eksi').addClass('end');else $('.text-size a.eksi').removeClass('end');if(snc==max_zoom)$('.text-size a.arti').addClass('end');else $('.text-size a.arti').removeClass('end');if(snc>var_zoom)$('.text-size').addClass('arti').removeClass('eksi');if(snc<var_zoom)$('.text-size').addClass('eksi').removeClass('arti');if(snc==var_zoom)$('.text-size').removeClass('eksi arti');var snc_view=(snc==var_zoom)?'':snc;$('.text-size .two').text(snc_view);fs.txtZoom=snc;$('.word').attr('data-zoom',snc);});if(fs.scroll.indexOf('sub-nav')<0){fs.scroll.push('sub-nav');}}
if(onscroll){var top=$(window).scrollTop();var oran=(top>fs.subnav.exit)?top-fs.subnav.exit:fs.subnav.exit-top;if(oran<300){int=setInterval(function(){if(fs.subnav.last==$(window).scrollTop()){window.clearInterval(int);}
else{subnav_scroll();}},100);}}}
function subnav_scroll(){var top=$(window).scrollTop();if(fs.subnav.name=='entry'){if(top>fs.subnav.exit)subnav_exit();if(top<fs.subnav.exit)subnav_open();}
fs.subnav.last=top;}
function subnav_open(){if(fs.subnav.name=='entry'){$('html').addClass('sub-nav-on');$(fs.subnav.span).addClass('on');$('.rel-subnav').addClass('sn-on');fs.subnav.has=false;}}
function subnav_exit(){if(fs.subnav.name=='entry'){$('html').removeClass('sub-nav-on');$(fs.subnav.span).removeClass('on');$('.rel-subnav').removeClass('sn-on');fs.subnav.has=false;}}
function _tema_tab(){if(!exis('tema_tab'))return false;$('.tab-nav .tab-item').click(function(e){var tabgroup=$(this).data('tab'),tabscript=$(this).data('script')?$(this).data('script'):false,tabindex=$(this).index(),span='.tab-'+tabgroup;console.log(span+' .tab-nav .tab-item');$(span+' .tab-nav .tab-item').removeClass('on');$(this).addClass('on');$(span+' .tab-con > *').removeClass('on');$(span+' .tab-con > *:nth-child('+(tabindex+1)+')').addClass('on');if(tabscript)eval(tabscript+"()");if(set.lazy=='blazy'){bLazy.revalidate();}
e.preventDefault();})}
function htmcss(label,action){if(action)$('html').addClass(label);else $('html').removeClass(label);}
function RemoveScroll(action){if(action)htmcss('no-scroll',true);else htmcss('no-scroll',false)}
function aspect_ratio(){$('.f-ratio').each(function(i){var j=$(this).data('ratio');var o=mediakur(j.media);if(o){var s=$(this).width()/(j.width/j.height);$(this).css("height",s+"px");}
else{$(this).css("height","");}})}
function boslink(){$('a[href="#"]').click(function(e){console.log('# Bos Link')
e.preventDefault();});}
function checkTime(i){if(i<10){i="0"+i};return i;}
function common_scroll_calls(){if(fs.scroll.indexOf('mob-head')>-1){_tema_mobil_stick_header('onscroll','secondcall');}
if(fs.scroll.indexOf('sub-nav')>-1){_tema_subnav('onscroll','secondcall');}
if(fs.scroll.indexOf('topGo')>-1){topGo('onscroll','secondcall');}}
function css_value(first){if(first)$('#code-js').append('<style id="css-value"></style>');$("#css-value").text(':root{--win_x:'+set.win.x+';--win_y:'+set.win.y+';}');}
function device_actions(){$('html').removeClass('no-js');$('.load-hidden').remove();if(cssua.ua.mobile){$('.mob-unset-class').removeAttr('class');$('#ivent-block-yazar').remove();if(mediakur('sm-')){$('.mob-remove').remove();}}
if(cssua.ua.mobile=='iphone'){$('a').removeAttr('target');};}
function exis(key){return fn.indexOf(key)>-1?true:false;}
function getCookie(c_name)
{var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++)
{x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name)
{return unescape(y);}}}
jQuery.fn.getPath=function(){if(this.length!=1)throw 'Requires one element.';var path,node=this;while(node.length){var realNode=node[0],name=realNode.localName;if(!name)break;name=name.toLowerCase();var parent=node.parent();var siblings=parent.children(name);if(siblings.length>1){name+=':eq('+siblings.index(realNode)+')';}
path=name+(path?'>'+path:'');node=parent;}
return path;};function goBack(){window.history.back();}
function gridpreview(){if(!$('grid-test').length)
{$('body').append('<span class="grid-test"><span class="con"><span class="row"><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span><span class="col"><s></s></span></span></span></span>');}
if(!$('.grid-test').hasClass('on'))$('.grid-test').addClass('on');else $('.grid-test').removeClass('on');}
function jumpMenu(){if(!exis('jumpMenu'))return false;$('.jump-menu').on('change',function(){var value=$(this).val();if(value!=''){window.location=$(this).val();}});}
function mediakur(j){var kur=true;if(j){var eksen=j.substr(2,1);var media=j.substr(0,2);var size;if(eksen=='+'){switch(media){case 'ms':size=0;break;case 'xs':size=set.media['ms'];break;case 'sm':size=set.media['xs'];break;case 'md':size=set.media['sm'];break;case 'lg':size=set.media['md'];break;}}
if(eksen=='+'){kur=set.win.x>size?true:false}
if(eksen=='-'){kur=(set.win.x<(set.media[media]+1))?true:false}}
return kur;}
fs.refresh_time=false;fs.refresh=false;fs.refresh_stop=false;var hidden,state,visibilityChange;if(typeof document.hidden!=="undefined"){hidden="hidden";visibilityChange="visibilitychange";state="visibilityState";}else if(typeof document.mozHidden!=="undefined"){hidden="mozHidden";visibilityChange="mozvisibilitychange";state="mozVisibilityState";}else if(typeof document.msHidden!=="undefined"){hidden="msHidden";visibilityChange="msvisibilitychange";state="msVisibilityState";}else if(typeof document.webkitHidden!=="undefined"){hidden="webkitHidden";visibilityChange="webkitvisibilitychange";state="webkitVisibilityState";}
document.addEventListener(visibilityChange,function(){if(document[state]=='visible'){check_refresh();}
if(fs.refresh==false){clearTimeout(fs.refresh_time);}else{meta_refresh();}},false)
function check_refresh()
{if(fs.refresh_stop)return false;fs.refresh=set.page.mod=='home'?true:fs.refresh;fs.refresh=set.page.cat=='yazar'?true:fs.refresh;fs.refresh=set.page.cat=='topic'?true:fs.refresh;fs.refresh=set.page.cat=='media'&&set.page.mod=='indeks'?true:fs.refresh;}
function meta_refresh(){check_refresh();if(!fs.refresh)return false;clearTimeout(fs.refresh_time);fs.refresh_time=window.setTimeout(function(){if(fs.refresh_stop)return false;location.reload();},(set.refresh_time*60)*1000);}
function popup(url,name,width,height,scroll,resize){var sw=window.innerWidth;var sh=window.innerHeight;var w=width;var h=height;var x=(sw-w)/2;var y=(sh-h)/2;window.open(url,name,"left="+x+",top="+y+",width="+w+",height="+h+",scrollbars="+scroll+",resizable="+resize);return false;}
function screen(action,kasa){kasa=!kasa?'one':kasa;if(action)htmcss('screen-'+kasa+'-on',true);else htmcss('screen-'+kasa+'-on',false);}
function scroll_calls(){if(!fs.scroll){return false}
window.onscroll=throttle(300,function(){common_scroll_calls();themes_scroll_calls();});}
function throttle(delay,callback){var previousCall=new Date().getTime();return function(){var time=new Date().getTime();if((time-previousCall)>=delay){previousCall=time;callback.apply(null,arguments);}};}
function scrollableElement(els){for(var i=0,argLength=arguments.length;i<argLength;i++){var el=arguments[i],$scrollElement=$(el);if($scrollElement.scrollTop()>0){return el;}else{$scrollElement.scrollTop(1);var isScrollable=$scrollElement.scrollTop()>0;$scrollElement.scrollTop(0);if(isScrollable){return el;}}}return[];}
$.fn.serializeObject=function()
{var o={};var a=this.serializeArray();$.each(a,function(){if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}
o[this.name].push(this.value||'');}else{o[this.name]=this.value||'';}});return o;}
function setCookie(c_name,value,exdays)
{var exdate=new Date();exdate.setDate(exdate.getDate()+exdays);var c_value=escape(value)+((exdays==null)?"":"; expires="+exdate.toUTCString());document.cookie=c_name+"="+c_value;}
function showValues(giren)
{var fields=giren,cikan=new Array({0:''}),multi=0;jQuery.each(fields,function(i,field){if(str_pos(field.name,'[]',0))
{if(multi==0)
{cikan[0][field.name]=[field.value];}
else
{cikan[0][field.name].push(field.value);}
multi=1;}
else
{cikan[0][field.name]=field.value;multi=0;}});return cikan;}
function startTime(){var today=new Date();var h=today.getHours();var m=today.getMinutes();m=checkTime(m);$('.live-clock').text(h+":"+m);var t=setTimeout(function(){startTime()},500);}
function stats(){if(set.stats&&set.page.cat!='info'){set.stats_data.referrer=document.referrer;set.stats_data.agent=navigator.userAgent;$.post(set.stats_url,set.stats_data,function(response){$('#entry-hit-count').text(response.hits);});}}
function str_pos(haystack,needle,offset)
{var i=(haystack+'').indexOf(needle,(offset||0));return i===-1?false:true;}
function _swip_gallery_fix()
{$('.post-text a.swipe').each(function(i,e){var a=$(e);var img=$(e).find('img');var src=$(img).attr('src');var src_large=$(img).attr('src').replace("/large","");var http=new XMLHttpRequest();http.open('HEAD',src_large,false);http.send();if(http.status!=404){src=src_large}
var size=$(e).data('size').split('x');$(a).attr('href',src);if(!isExistsInItemSwipe(itemswipe[1],src)){itemswipe[1].push({src:src,w:size[0],h:size[1],title:""});}});}
function isExistsInItemSwipe(items,src)
{var found=false
$(items).each(function(index,item){var url_a=new URL(item.src);var url_b=new URL(src);if(url_a.pathname.replace('%20','')==url_b.pathname.replace('%20','')){found=true;}});return found;}
fs.topGo={on:false,no:false,last:false,run:false,top:false,span:false}
function topGo(onscroll,secondcall){var int;var top=$(window).scrollTop();if(!secondcall){if(top>250){$('html').addClass('top-go-on');$('#topGo').addClass('on')
fs.topGo.on=true;}
if(fs.scroll.indexOf('topGo')<0){fs.scroll.push('topGo')}
$('#topGo').on('click',function(e){if(cssua.ua.mobile){$(window).scrollTop(0);topGo_on_scroll();}
else{fs.topGo.span=scrollableElement('html','body');$(fs.topGo.span).animate({scrollTop:0},"fast",function(){topGo_on_scroll();});}});}
if(onscroll){fs.topGo.run=(top>400&&fs.topGo.on==true)?false:true;if(fs.topGo.run){int=setInterval(function(){top=$(window).scrollTop();if(fs.topGo.last==top){window.clearInterval(int);}
else{topGo_on_scroll();}},100);}}}
function topGo_on_scroll(){var top=$(window).scrollTop();if(top>250){if(!fs.topGo.on){clearTimeout(fs.topGo.span);$('html').addClass('top-go-on');$('#topGo').addClass('on').removeClass('of');fs.topGo.on=true;fs.topGo.no=false;}}
else{if(!fs.topGo.no){$('html').removeClass('top-go-on');$('#topGo').addClass('of');clearTimeout(fs.topGo.span);fs.topGo.span=window.setTimeout(function(){$('#topGo').removeClass('on of')},300);fs.topGo.no=true;fs.topGo.on=false}}
fs.topGo.last=top;}
function valid_links(path){var url;var str;url=str_pos(path,'http')?path:false;if(!url){str=set.page.url.substr(-1);url=str=='/'?set.page.url:set.page.url+'/';str=path.substr(0,1);path=str=='/'?path.substr(1):path;url=url+path;}
return url;}
var waitForFinalEvent=(function(){var timers={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId="Don't call this twice without a uniqueId";}
if(timers[uniqueId]){clearTimeout(timers[uniqueId]);}
timers[uniqueId]=setTimeout(callback,ms);};})();function wait_task(name,time){console.log(name);waitForFinalEvent(function(){console.log('run');eval(name+"()");},time,"some unique string");}
function zindex(action,dom,value){if(action=='add')$(dom).css('z-index',value);else $(dom).css('z-index','auto');}
function css_index(e,olay,v){if(olay){$(e).css('z-index',v);}
else{$(e).css('z-index',"");}}
function on_index(has){if(has)$('html').addClass('on-index');else $('html').removeClass('on-index');}
var form={'data':false,'name':false,'submit':false,'fieldError':true,'thisfunction':false,'afterfunction':true,'resultSpan':false,'e':false,'robot':false,'robotOn':false}
function form_send()
{if(!exis('form_send'))return false;$('form.method-ajax').submit(function(event){console.log('form_send');event.preventDefault();var action=$(this).attr('data-action')?$(this).attr('data-action'):$(this).attr('action');form.e=$(this),form.data=$(this).serialize(),form.name=$(this).attr('name'),form.submit=$('#form-'+form.name+' .submit'),form.resultnote=$('#form-'+form.name+' .form-result').hasClass('custom')?false:$('#form-'+form.name+' .form-result .note'),form.script=$(this).data('thisfunction')?true:false;form.field_error=!$(this).data('fielderror')?true:($(this).data('fielderror')=='false'?false:true);form.robot=$('#form-'+form.name+' .robot').length?true:false;form_send_before();if(form.script)eval("form_"+form.name+"_before()");$.post(action,form.data,function(json){form.data=(typeof json=='object')?json:$.parseJSON(json);form_send_after();if(form.script)eval("form_"+form.name+"_after()");});});}
function form_send_after(){var robotPath='#form-'+form.name+' .robot';$('html').removeClass(form.name+'-form-load');$(form.e).removeClass('load');$(form.submit).removeAttr('disabled');$('#form-'+form.name+' .hata').removeClass('hata');if(form.data.result=='error'){$(form.e).addClass('send-on nosent');$('html').addClass(form.name+'-form-nosent');if(form.field_error)
{$.each(form.data.errors,function(key,value){$('#form-'+form.name+' .field-'+key).addClass('hata');$('#form-'+form.name+' #'+key+'-field').addClass('hata');if(form.robot&&key=='robot'){if(form.robotOn){window.setTimeout(function(){$(robotPath).addClass('on')},200);}
else{$(robotPath).addClass('on');}
form.robotOn=true;}})}}
else{$(form.e).addClass('send-on posted');$('html').addClass(form.name+'-form-posted');$(form.e)[0].reset();if(form.robot){grecaptcha.reset();form.robotOn=false;}
if($(form.submit).attr('data-load'))
{$(form.submit).attr('value',$(form.submit).attr('data-value'));}}
if(form.resultnote){$(form.resultnote).text(form.data.message)}}
function form_send_before(){var robotPath='#form-'+form.name+' .robot';$(form.e).removeClass('send-on nosent posted');$(form.e).addClass('load');if(form.robot&&form.robotOn){$(robotPath).addClass('of-before');window.setTimeout(function(){$(robotPath).removeClass('on of-before');},350);}
form_send_before_more()}
function form_send_before_more(){$('html').removeClass(form.name+'-form-nosent');$('html').addClass(form.name+'-form-load');if(form.resultnote){$(form.resultnote).text('LÃ¼tfen Bekleyin')}
$(form.submit).attr('disabled','disabled');$(form.submit).blur();if($(form.submit).attr('data-load'))
{$(form.submit).attr('value',$(form.submit).attr('data-load'));}}
function form_type(){if(exis('f_robot'))
{$('form .robot .robot-close').on("click",function(){$('form .robot.on').addClass('of-before');window.setTimeout(function(){$('form .robot.on').removeClass('on of-before');},350);})}
if(exis('f_mob_date'))
{$('.mod-mob.date input').focus(function(){$(this).parent().addClass('focus');});$('.mod-mob.date input').blur(function(){if($(this).val()==''){$(this).parent().removeClass('focus');}});}
if(exis('f_textarea_focus_open'))
{$('textarea.focus-open').focus(function(){$(this).addClass('on')})
$('textarea.focus-open').blur(function(){if($(this).val()=='')$(this).removeClass('on')})}
if($().datepicker){if(exis('f_picker'))
{$('.datepicker-here').datepicker({onSelect:function(formattedDate,date,inst){var year=date.getFullYear();var month=date.getMonth()+1;var day=date.getDate();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
date=year+'-'+month+'-'+day;$(inst.el).attr('data-picked-date',date);if($(inst.el).hasClass('go')){var url=$(inst.el).data('perma')+'/'+date;window.location=url;}}});}}
var event=(cssua.ua.mobile=='iphone'||cssua.ua.mobile=='ipad')?'blur':'change';if(exis('f_date_go'))
{$('input.date.go').on(event,function(){var date=moment($(this).val()).format('YYYY-MM-DD');var url=$(this).data('url');window.location=set.page.url+url+date})}
if(exis('f_mask_check'))
{$('input.check').click(function(){if($(this).is(':checked'))
{$(this).parent('.mask-check').addClass('on');}
else
{$(this).parent('.mask-check').removeClass('on');}})}
if(exis('f_mask_switch'))
{$('.mask-switch').click(function(){if(!$(this).hasClass('on')){$('#field-'+$(this).data('name')).prop('checked',true);$(this).children('s').text('ON');$(this).addClass('on');}
else{$('#field-'+$(this).data('name')).prop('checked',false);$(this).children('s').text('OFF');$(this).removeClass('on');}})}
if(exis('f_mask_radio'))
{$('input.radio').click(function(){if($(this).is(':checked'))
{name=$(this).attr('name');$('input[name="'+name+'"]').parent().removeClass('on');;$(this).parent().addClass('on');}
else
{$(this).parent().removeClass('on');}})}
if($().mask){if(exis('f_tel'))$("input.mask-tel").mask("0(999) 999 99 99");if(exis('dogum'))$("input.mask-dogum").mask("99.99.9999");}
if($().numeric){if(exis('f_numeric'))$("input.numeric").numeric();}
if(exis('f_uc_first')){$('.uc-first-upper').blur(function(event){var str=$(this).val(),words=str.split(' '),newstr=new Array();$.each(words,function(i,word){newstr[i]=word.substr(0,1).toUpperCase()+word.substr(1).toLowerCase();})
$(this).val(newstr.join(' '));});}
if(exis('f_selectlink')){$('.select-link').change(function(){var url=valid_links($(this).val());window.location.href=url;})}
if(exis('f_combotab')){$('select.ocmbotab').change(function(){var value=$(this).val(),tab=$(this).data('combotab');$($('.combotab-'+tab+' .'+tab)).removeClass('on');$($('.combotab-'+tab+' .'+tab+'[data-value='+value+']')).addClass('on');})}}
function provinceSelected(provinceElement,countyElement){var token=$('input[name=_token]').val();var province_id=$(provinceElement).val();$(countyElement).html("<option>...</option>");$.post(document.location,{request:'counties',_token:token,province_id:province_id},function(html){$(countyElement).html(html);});}
function validate_email(email){var re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}
function _bootstrap_modal(){if(!exis('modal'))return false;$('a.modal-close,.modal-close a, .modal-out-close').unbind().click(function(e){_bootstrap_new_modal({action:'close'});})
$('.modal-switch').unbind().click(function(e){e.preventDefault();var sets=$(this).data('set')?$(this).data('set'):false
if(!$(this).hasClass('ajax'))
{if(set.bootstrap){$('#modal-'+$(this).data('modal')).modal('show');}
else{var _modal=sets?sets.modal:$(this).data('modal');_bootstrap_new_modal({format:sets?sets.format:$(this).data('format'),name:_modal,box:'#modal-'+_modal,action:'open'});}}
else
{var modal='#modal-ajax',datacase=$('#modal-ajax .data'),time=0,buton=$(this);$(modal).addClass('load');if(!$('body').hasClass('modal-open'))
{if(set.bootstrap){$(modal).modal('show');}
else{_bootstrap_new_modal({box:modal,name:'ajax',format:sets?(sets.format?sets.format:false):$(this).data('format')?$(this).data('format'):false,sets:sets,action:'open'});}}
else
{$(datacase).slideUp('fast');time=500;}
var prefix=str_pos($(buton).attr('href'),'http')?'':set.page.url;var prefix='';window.setTimeout(function(){$(datacase).html('');$.get(prefix+$(buton).attr('href'),{ajax:true,modal:true},function(data){$(datacase).html(data);window.setTimeout(function(){$(datacase).slideDown('fast');$(modal).removeClass('load');_bootstrap_modal();boslink();form_type();form_send();_tema_slide(true);},500);})},time);e.preventDefault();}});}
var newmodal={open:false,format:false,box:false,sets:false}
function _bootstrap_new_modal(set){if(set.action=='open')
{if(!newmodal.open){$('body').addClass('modal-open');newmodal.open=true;}
if(newmodal.box!=set.name){$(set.box).addClass('on format-'+set.format);newmodal.format=set.format;newmodal.box=set.name}
$(document).keydown(function(e){if(e.keyCode==27){_bootstrap_new_modal({action:'close'});}})}
if(set.action=='close')
{$('body').removeClass('modal-open');$('.modal').removeClass('on');$('.modal').removeClass('format-'+set.name);if(newmodal.box=='ajax')$('#modal-ajax .data').html('');newmodal.open=false;newmodal.box=false;newmodal.format=false;}}
function ad_yan(){if(!exis('ad_yan'))return false;$('.rkm span.click').on("click",function(){window.open($(this).data('url'),'_blank');});var r,l,s;r=$('.rkm-outer.f-yan .in.sag').outerHeight(true);l=$('.rkm-outer.f-yan .in.sol').outerHeight(true);l=l>0?l:0;r=r>0?r:0;s=l>r?l:r;$('main.wrap > .base').css('min-height',s+'px');}
function ad_yan_after(){ad_yan();if(!exis('ad_yan'))return false;fs.sticky=false;_tema_sticky();}
function _toogle(){$('.tg-click').on("click",function(e){var s=$(this).data('set');$('#tg-'+s.span).toggle("fast");if(s.script)eval('_tg_'+s.script+"()");})}
function _tg_audio(){var src=$('#tg-audio audio').data('src');$('#tg-audio audio').html('<source src="'+src+'" type="audio/mpeg">');}
function _modal_fan(){if($('#modal-fan').length==0){return false;}
var on=getCookie('modal_fan_a')?false:true;if(on){_bootstrap_new_modal({box:'#modal-fan',name:'#modal-fan',format:'fan',action:'open'});setCookie('modal_fan_a',1,3);}}