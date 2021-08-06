/*! SPORT */
!function(){zUtils=window.zUtils||{},zUtils.infiniteScroll=function(){var a=[],b=1e3,c=function(a){var b=$(window).scrollTop(),c=$(window).height(),d=a.offset().top,e=a.outerHeight();return{visible:b>d-c/2&&b<d+e-c/2,above:b>=d+e-c/2,beyond:b<=d-c/2}},d=function(a){var b=null;return $('[data-actas="infinite-scroll-'+a.itemsId+'item"]').each(function(){c($(this)).visible&&(b=$(this))}),b},e=function(a){var b=null,d=!1;return $('[data-actas="infinite-scroll-'+a.itemsId+'item"]').each(function(){var a=c($(this));a.visible?b=$(this):a.above&&(d=!0)}),b?null:d?"above":"beyond"},f=function(a,b){a.available&&(a.available=!1,a.lastItem++,window[a.additionalPages].items[a.lastItem]&&window[a.additionalPages].items[a.lastItem].contentUrl&&$.ajax({url:window[a.additionalPages].items[a.lastItem].contentUrl,type:"GET",success:function(c){a.container.on("infinite-scroll-appened","div",function(c){var d=$('[data-actas="infinite-scroll-'+a.itemsId+'item"]').last();a.container.off("infinite-scroll-appened"),d.attr("id","infinite-scroll-"+a.itemsId+"item-"+(a.lastItem+1)),zUtils.followingAds&&zUtils.followingAds.reload(),zUtils.advertising&&zUtils.advertising.reload(),zUtils.socialShare&&zUtils.socialShare.reload(),zUtils.disqusComments&&zUtils.disqusComments.reload(),zUtils.breaking&&zUtils.breaking.reload(),zUtils.ignOpen&&zUtils.ignOpen.reload(),zUtils.lazy&&zUtils.lazy.reload(),zUtils.sliders?zUtils.sliders.reload(function(){zUtils.videos&&zUtils.videos.reload()}):zUtils.videos&&zUtils.videos.reload(),zUtils.horizontalScroll&&zUtils.horizontalScroll.reload(),b&&b(d)}),function(){var b;a.domMain&&(!function(){var b=window[a.additionalPages].items[a.lastItem],d=c.match(/,\s?'conPerson'\s?:\s?'([^']*)'/i),e=c.match(/,\s?'conPub'\s?:\s?'([^']*)'/i),f=c.match(/,\s?'conMod'\s?:\s?'([^']*)'/i),g=c.match(/,\s?'conIdpage'\s?:\s?'([^']*)'/i);d&&(b.analyticsConPerson=d[1]),e&&(b.analyticsConPub=e[1]),f&&(b.analyticsConMod=f[1]),g&&(b.analyticsConIdpage=g[1])}(),b=c.match(/<body[^>]*>[\s\S]*<main[^>]*>([\s\S]*)<\/main>/i),c='<div data-actas="infinite-scroll-'+a.itemsId+'item">'+(b?b[1]:"")+"</div>")}(),function(){var b,d,e;a.adPrefix&&(!function(){b=c.match(/data-infinite-scroll-adslots="([^"]+)"/i),b&&(d=b[1])}(),function(){b=c.match(/data-infinite-scroll-adid="([^"]+)"/i),b&&(e=b[1])}(),c=c.replace(/data-adslot-id=/g,'data-adslot-var="'+d+'" data-adslot-id='),function(){var f="<script>var "+d+"={};";b=c.match(/data-adslot-id="[^"]+"/g),b&&(b.forEach(function(b){var g,h,i=b.match(/data-adslot-id="([^"]+)"/);i&&(g=i[1],i=c.match(d+"."+g+" ?= ?{[^}]*}"),i&&(h=i[0].replace(/path:\s?"([^"]+)"/,'path:"$1"'),h=h.replace(/path:\s?'([^']+)'/,'path:"$1"'),h=h.replace(/targetingValue:\s?"([^"]+)"/,'targetingValue:"$1c"'),h=h.replace(/targetingValue:\s?'([^']+)'/,"targetingValue:'$1-c'"),f+=h+";",c=c.replace('id="'+a.adPrefix+g+'"','id="'+a.adPrefix+g+"-"+e+'"')))}),f+="</script>",c=c.replace(/<div data-infinite-scroll-adslots-start=""><\/div>[\s\S]*<div data-infinite-scroll-adslots-end=""><\/div>/,f))}())}(),$("<div>").append(c.replace(/advertisingShow/g,"advertisingShowBypass")).appendTo(a.container).trigger("infinite-scroll-appened"),a.available=!0},error:function(a,b,c){}}))},g=function(b){a=[],$('[data-actas="infinite-scroll"]').each(function(){var b={container:$(this),byButton:"button"===$(this).data("infinite-scroll-type"),visibleItem:1,available:!0,lastItem:0,disableOn:null,additionalPages:$(this).data("infinite-scroll-pages")?$(this).data("infinite-scroll-pages"):"additionalPages",itemsId:$(this).data("infinite-scroll-name")?$(this).data("infinite-scroll-name")+"-":"",domMain:void 0!==$(this).data("infinite-scroll-dom-main"),domMainHeader:$(this).data("infinite-scroll-dom-main-header")?$(this).data("infinite-scroll-dom-main-header"):"header .bottom",adPrefix:void 0===$(this).data("infinite-scroll-adprefix")?null:$(this).data("infinite-scroll-adprefix"),newAnalytics:void 0!==$(this).data("infinite-scroll-analytics"),lastToEnd:void 0!==$(this).data("infinite-scroll-lasttoend"),firstInPage:!1,lastInPage:!1};void 0!==$(this).data("infinite-scroll-disableon-xs")&&(b.disableOn=767),void 0!==$(this).data("infinite-scroll-disableon-sm")&&(b.disableOn=991),void 0!==$(this).data("infinite-scroll-disableon-md")&&(b.disableOn=1199),"undefined"!=typeof window[b.additionalPages]&&(!function(){window[b.additionalPages].referrers&&window[b.additionalPages].referrers.forEach(function(a){return 0!==a.patterns.length||window[b.additionalPages].items?void a.patterns.forEach(function(c){document.referrer.match(c)&&(a.cookies&&zUtils.zCookies.getCookie(a.cookies[0].name)!==a.cookies[0].value||(window[b.additionalPages].items=a.items))}):void(a.cookies&&zUtils.zCookies.getCookie(a.cookies[0].name)!==a.cookies[0].value||(window[b.additionalPages].items=a.items))})}(),window[b.additionalPages].items&&(null===window[b.additionalPages].items[0].url&&(window[b.additionalPages].items[0].url=window.location.href),null===window[b.additionalPages].items[0].title&&(window[b.additionalPages].items[0].title=document.title),a.push(b),$('[data-actas="infinite-scroll-'+b.itemsId+'item"]',b.container).attr("id","infinite-scroll-"+b.itemsId+"item-1"),function(){var a=b.container.data("infinite-scroll-base"),c=b.container.data("infinite-scroll-content-base"),d=b.container.data("infinite-scroll-button")?$(b.container.data("infinite-scroll-button")):$('[data-actas="infinite-scroll-button"]'),e=$('[data-actas="infinite-scroll-'+b.itemsId+'item"]',b.container),g=function(d){window[b.additionalPages].items.push({url:d.data("infinite-scroll-next-path")?a+d.data("infinite-scroll-next-path"):null,contentUrl:c+d.data("infinite-scroll-next-content-path"),title:d.data("infinite-scroll-next-title")?d.data("infinite-scroll-next-title"):null})},h=function(a){return a.data("infinite-scroll-next-content-path")?void g(a):void d.hide()};b.byButton&&(h(e),d.click(function(c){c.preventDefault(),f(b,function(b){h(b),b.data("infinite-scroll-next-path")&&d.attr("href",a+b.data("infinite-scroll-next-path"))}),"undefined"==typeof utag||"undefined"==typeof utag.link||b.newAnalytics||utag.link({eventCategory:"acciones portadas",eventAction:"cargar mas paginas",eventLabel:"cargar pÃ¡gina "+(b.lastItem+1)})}))}()))}),a.length&&(a[0].firstInPage=!0,a[a.length-1].lastInPage=!0),b&&b()},h=function(a){return!(!a.disableOn||!window.matchMedia("(max-width: "+a.disableOn+"px)").matches)};return{init:function(){zUtils.isEdl()||g(function(c){var g=$(window),i=0,j={up:[],down:[0]};c||$(window).scroll(function(){var c=null;a.forEach(function(a){var b=!1;h(a)||(!function(){var c,f=d(a),g=e(a),h=!1;if(f)c=parseInt(f.attr("id").match(/infinite-scroll-.*item-(.*)/)[1]);else if("beyond"!==g||a.firstInPage||(h=!0),"above"!==g||a.lastInPage||(h=!0),h)c=null;else{if(a.domMain||a.lastToEnd)return;c=1}c!==a.visibleItem&&(a.visibleItem=c,h||(b=!0))}(),function(){var c=a.visibleItem-1;b&&window[a.additionalPages].items[c]&&window[a.additionalPages].items[c].url&&history.replaceState(null,null,window[a.additionalPages].items[c].url)}(),function(){var c=a.visibleItem-1;b&&window[a.additionalPages].items[c]&&window[a.additionalPages].items[c].url&&a.newAnalytics&&(!function(){var b,d=window[a.additionalPages].items[c];"undefined"!=typeof dataLayer&&"undefined"!=typeof dataLayer.push&&(b={event:"virtual-pageview",newPageName:d.url,newPageTitle:d.title,nonInteraction:!0},d.analyticsConPerson&&(b.conPerson=d.analyticsConPerson),d.analyticsConPub&&(b.conPub=d.analyticsConPub),d.analyticsConMod&&(b.conMod=d.analyticsConMod),d.analyticsConIdpage&&(b.conIdpage=d.analyticsConIdpage),a.domMain?b.conType="portada principal scroll":(b.conType="portada scroll",b.conFront="true"),dataLayer.push(b))}(),function(){window[a.additionalPages].items[c].comScore&&setTimeout(function(){window._comscore=window._comscore||[],window._comscore.push({c1:"2",c2:"8731705"}),$("body").append($("<script>").attr("src","https://sb.scorecardresearch.com/beacon.js"))},100)}())}(),function(){var b=a.visibleItem-1,c=!0;b<i&&(c=!1),window[a.additionalPages].items[b]&&window[a.additionalPages].items[b].url&&(a.newAnalytics||(!function(){b!==i&&(a.domMain||"undefined"!=typeof utag&&"undefined"!=typeof utag.view&&utag.view({sendGaAsync:"true",newPageName:window[a.additionalPages].items[b].url}))}(),i=b,function(){a.byButton||j[c?"down":"up"].indexOf(b)===-1&&(a.domMain?"undefined"!=typeof utag&&"undefined"!=typeof utag.view&&"undefined"!=typeof dataLayer[0]&&(j[c?"down":"up"].push(b),utag.view({eventCategory:"scroll "+(c?"noticia":"portada")+" "+(c?"portada":"noticia"),eventAction:"scroll "+(c?"down":"up"),eventLabel:window[a.additionalPages].items[b].url,conType:c?"portada principal":dataLayer[0].conType,conAuthor:c?"":dataLayer[0].conAuthor,conPayment:c?"":dataLayer[0].conPayment,conAgency:c?"":dataLayer[0].conAgency,conSection:c?"":dataLayer[0].conSection,conSubsection:c?"":dataLayer[0].conSubsection,conFront:c?"":dataLayer[0].conFront,conRelArticle:c?"":dataLayer[0].conRelArticle,conRelOpinion:c?"":dataLayer[0].conRelOpinion,conPerson:c?"":dataLayer[0].conPerson,conPub:c?"":dataLayer[0].conPub,conMod:c?"":dataLayer[0].conMod,conIdpage:c?"":dataLayer[0].conIdpage,conWords:c?"":dataLayer[0].conWords,conTags:c?"":dataLayer[0].conTags,multimediaType:c?"":dataLayer[0].multimediaType,newPageName:window[a.additionalPages].items[b].url,sendGaAsync:"true",newPageTitle:window[a.additionalPages].items[b].title})):"undefined"!=typeof utag&&"undefined"!=typeof utag.link&&(j[c?"down":"up"].push(b),utag.link({eventCategory:"acciones noticias",eventAction:"infinite scroll "+(c?"down":"up"),eventLabel:"scroll noticia "+b})))}()))}(),function(){var c=a.visibleItem-1;b&&window[a.additionalPages].items[c]&&window[a.additionalPages].items[c].title&&(document.title=window[a.additionalPages].items[c].title)}(),function(){b&&a.domMain&&(2===parseInt(a.visibleItem)?$(a.domMainHeader).hide():$(a.domMainHeader).show())}(),a.byButton||(c=a))}),function(){c&&g.scrollTop()>c.container.offset().top+c.container.outerHeight()-g.height()-b&&f(c)}()})})},reload:function(){zUtils.isEdl()||g()}}}()}();