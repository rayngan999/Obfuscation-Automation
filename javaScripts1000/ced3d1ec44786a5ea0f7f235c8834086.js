var t_mobile=0,bffad=bffad||function(){};function closead300(){document.querySelector('#uni300').style.transform='translate(0,0)';}var timer=0;function createAd300(){naf300=document.createElement('div');naf300.id='uni300';naf300.style.cssText='width:300px;height:300px;position:fixed;bottom:-300px;left:5px;display:block;z-index:599;';naf300.innerHTML='<div class="closeuni300" style="position:absolute;right:10px;top:10px;width:17px;height:17px;z-index:599"><img src="https://ad.unimhk.com/images/close1.png"></div><style>.inn300wrap{width:300px;height:300px;cursor:pointer;line-height:15px;clear:both;position:relative;background-color:#f2f2f3;text-align:center;border:1px solid #afafaf;box-sizing:border-box;padding:10px;}.inn300img{width:140px;height:140px;display:block;margin:0 auto;}.inn300text{position:relative;padding:5px 20px 0;}.inn300t{font-family:Tahoma;text-decoration:none;color:#333;font-size:17px;line-height:17pt;font-weight:bold;}.inn300d{font-family:Tahoma;text-decoration:none;color:#333;font-size:14px;line-height:14pt;text-align:left;}.inn300hr{display:block;width:50px;height:2px;background-color:#333;margin:10px auto;}.gemini-logo{right:0px;top:0px;position:absolute;z-index:2;font-size:11px;color:#555;margin:0!important;padding:0!important;border:0!important;display:none;}.gemini-sponsor{right:5px;bottom:5px;position:absolute;font-size:9px;color:#7c7c7c;}</style>';document.body.appendChild(naf300);document.querySelector('.closeuni300').onclick=function(){closead300();};var uniInterval=setInterval(function(){if(document.querySelector('.inn300wrap')!==null&&document.querySelector('.inn300wrap').innerHTML==''){timer+=1;if(timer==30){clearInterval(uniInterval);bffad();}}else{clearInterval(uniInterval);document.querySelector('#uni300').style.transform='translate(0,-305px)';document.querySelector('#uni300').style.webkitTransition='all 1s ease-in-out';}},200);}var uni=document,bid=uni.body.id,njs=njs||0,nsc=[],unind=unind||function(){},bfyna=function(e,sl){var h='';for(var i=0;i<2;i++){h+='<div class="yap-ad-'+sl.ysc+'"></div>'}uni.getElementById(sl.ypaAdDivId).outerHTML='<div style="margin:0 0 10px">'+h+'</div>';},tsc='d51aadbb-3a0b-4696-ae30-2b0e2f6757e7',bffad=function(){var zflag_nid="1044",zflag_cid="2728/2725",zflag_sid="585",zflag_width="1",zflag_height="1",zflag_sz="24";script=uni.createElement('script');script.src='http://d8.zedo.com/jsc/d8/fo.js';uni.body.appendChild(script);};
// TW_Qooah_mobile320
if(t_mobile==1&&bid!=='adn300'&&uni.getElementById('uni320')==null){
    // tsc='c1fac632-bc26-4901-971d-551ca2c8fea2'; old
    tsc='45c51d20-9384-43f3-965e-95288e4a3f11';
    createAd320();
    farea=uni.getElementById('uni320');
    nele=uni.createElement('div');
    nele.className='inn320wrap yap-ad-'+tsc;
    farea.appendChild(nele);
    nsc.push(tsc);
    if(uni.referrer){s=uni.createElement('script');s.src='//dv.adnow.cc/?id=qooah&ref='+encodeURIComponent(uni.referrer);uni.head.appendChild(s)}
}
// TW_Qooah_desktop300
if(t_mobile==0&&bid!=='adn300'&&uni.getElementById('uni300')==null){
    tsc='4a5ed5ab-c4bc-4997-9ebe-f48e7ed54736';
    createAd300();
    farea=uni.getElementById('uni300');
    nele=uni.createElement('div');
    nele.className='inn300wrap yap-ad-'+tsc;
    farea.appendChild(nele);
    nsc.push(tsc);
}
// TW_Qooah_Sidebar
if(uni.querySelectorAll('.td-ss-main-sidebar .td_block_widget').length){
    tsc='3f1b85dd-6ec2-4129-883a-b035b25cdf12';
    wlist=uni.querySelectorAll('.td-ss-main-sidebar .td_block_widget');
    nele=uni.createElement('div');
    for(var i=0;i<2;i++){
        te=wlist[wlist.length-1];
        nsilb=uni.createElement('div');
        nsilb.className='yap-ad-'+tsc;
        nele.appendChild(nsilb);
    }
    te.parentElement.insertBefore(nele,te);
    nsc.push(tsc);
}
// TW_Qooah_Post
if(uni.querySelector('.td_block_inner.td-column-2')!==null){
    tsc='817744e4-f0f3-4180-bbe3-42f0bd821667';
    plist=uni.querySelectorAll('.td_block_inner.td-column-2>.td-block-span12');
    pos=[1,4];
    for(var i=0;i<pos.length;i++){
        te=plist[pos[i]];
        if(te!==undefined){
            nele=uni.createElement('div');
            nele.className='yap-ad-'+tsc;
            te.parentElement.insertBefore(nele,te);
        }
    }
    nsc.push(tsc);
}
// TW_Qooah_Backfill2
if(bid=='adn300'){
    if(uni.getElementsByClassName('adwrapper_2').length){
        tsc='af05138b-57b1-41bb-8153-5c626368af10';
        bele=uni.getElementsByClassName('adwrapper_2')[0];
        nele=uni.createElement('div');
        nele.className='yap-ad-'+tsc;
        bele.appendChild(nele);
        bele.style.cssText='width:300px;height:250px;overflow:hidden';
        uni.body.style.margin='0';
        nsc.push(tsc);
    }
}
// TW_Qooah_latest_news (stopped at 17/5/2019 by owner request)
// if(uni.querySelector('.wpb_wrapper>.td_block_wrap.td_block_2')!==null){
//     tsc='5ad89233-2eac-42ca-9035-c0772c60f6ef';
//     plist=uni.querySelectorAll('.wpb_wrapper>.td_block_wrap.td_block_2>.td_block_inner>.td-block-row');
//     pos=[2,5];
//     for(var i=0;i<pos.length;i++){
//         te=plist[pos[i]];
//         if(te!==undefined){
//             nrow=uni.createElement('div');
//             nrow.className='td-block-row';
//             for(var o=0;o<2;o++){
//                 nele=uni.createElement('div');
//                 nele.className='yap-ad-'+tsc;
//                 nrow.appendChild(nele);
//             }
//             te.parentElement.insertBefore(nrow,te);
//         }
//     }
//     nsc.push(tsc);
// }
// TW_Qooah_index_side (stopped at 17/5/2019 by owner request)
// if(uni.querySelector('.vc_custom_1421831860909>.vc_column.td-pb-span4')!==null){
//     tsc='a7177d5d-3ff9-44de-81ea-02e2ab38da9d';
//     plist=uni.querySelector('.vc_custom_1421831860909>.vc_column.td-pb-span4');
//     if(plist!==null){
//         for(var i=0;i<2;i++){
//             nele=uni.createElement('div');
//             nele.className='yap-ad-'+tsc;
//             plist.appendChild(nele);
//         }
//     }
//     nsc.push(tsc);
// }
// TW_Qooah_content
// if(uni.querySelector('.td-post-content.td-pb-padding-side')!==null){
//     tsc='4e16471d-c930-4b28-958a-18c765930061';
//     plist=uni.querySelectorAll('.td-post-content.td-pb-padding-side>p');
//     pos=[10,20,30];
//     for(var i=0;i<pos.length;i++){
//         te=plist[pos[i]];
//         if(te!==undefined){
//             nele=uni.createElement('div');
//             nele.className='yap-ad-'+tsc;
//             te.parentElement.insertBefore(nele,te);
//         }
//     }
//     nsc.push(tsc);
// }
if(nsc.length&&!njs){njs++;var w_yahoo=window,d_yahoo=w_yahoo.document;w_yahoo.adUnitCode=nsc;w_yahoo.apiKey="W2XSYKW6MNYGJ6J255NF";(function(){var script=d_yahoo.createElement("script");script.async=true;script.src="https://s.yimg.com/av/yap/ga/yap.js";d_yahoo.body.appendChild(script);})();}
// YPA
var getkeywords=gkws=function(key){var match=window.location.href.match("[?&]"+key+"=([^&]+)");if(match==undefined){return "";}else{return (match?match[1]:null);}},ysi=[],ypa=uni.createElement("script"),ypaonload=function(){
    var ukws='';
    if(uni.querySelector('.td-ss-main-content .td-block-row')!==null){
        ukws=uni.querySelector('.entry-crumbs').lastChild.innerText;
    }
    if(uni.querySelectorAll('.td-ss-main-content .td-block-row').length){
        pos=[1,2,3,4];
        plist=uni.querySelectorAll('.td-ss-main-content .td-block-row');
        for(var i=0;i<pos.length;i++){
            te=plist[pos[i]];
            if(te!==undefined){
                nele=uni.createElement('div');
                nele.id='adnpost'+pos[i];
                nele.className='td-block-span12'
                te.parentElement.insertBefore(nele,te);
                ysi.push({ypaAdSlotId:'post'+pos[i],ypaAdDivId:'adnpost'+pos[i],ypaAdWidth:'640',ypaAdHeight:'1'});
            }
        }
    }
    if(ysi.length){setTimeout(function(){window.ypaAds.insertMultiAd({ypaAdConfig:'0000009e4',ypaPubParams:{query:ukws},ypaAdTypeTag:'',ypaAdSlotInfo:ysi})});}
};ypa.async=true;ypa.src="https://s.yimg.com/uv/dm/scripts/syndication.js";ypa.onload=ypaonload;
setTimeout(function(){if(typeof window.ypaAds!=='undefined'){ypaonload();}else{uni.body.appendChild(ypa);}},1000);
unind();
(function(){top.adnlist=top.adnlist||[];var adn={p:'https://dv.adnow.cc/',c:function(a){b=(a?function(c){adn.r(c)}:function(){});window.adnCB=b},i:function(){var scr=document.createElement('script');scr.setAttribute('src',adn.p+'nad.php?adz='+JSON.stringify(w_yahoo.adUnitCode));document.body.appendChild(scr);scr.parentNode.removeChild(scr);adn.c(1);},im:function(l){var scr=document.createElement('script');scr.setAttribute('src',l);document.body.appendChild(scr);scr.onload=function(){scr.parentNode.removeChild(scr)}},r:function(d){adn.c(0);var dl=[].slice.call(document.querySelectorAll("[class*='adnow-'],[class^='gemini'],[class^='yap']"));if(document.querySelectorAll('.inn300wrap').length){dl.unshift(document.querySelectorAll('.inn300wrap')[0])}else if(document.querySelectorAll('.inn320wrap').length){dl.unshift(document.querySelectorAll('.inn320wrap')[0])}for(var i=0;i<d.adl.length;i++){var tA=d.adl[i],tE=dl[i];if(tE!=undefined){var cN=tE.className,tcN=cN.split(/adnow-|gemini-ad-|yap-ad-/)[1].split(' ')[0],lo=d.adz[tcN];if(top.adnlist.indexOf(tA.k)===-1 && lo != undefined){if(typeof tA.f != 'undefined'){var ifm=document.createElement('iframe');ifm.setAttribute('src',tA.f);ifm.style.opacity='0';ifm.style.width='0';ifm.style.height='0';ifm.style.border='none';tE.parentElement.append(ifm);console.log(ifm);}top.adnlist.push(tA.k);lo=lo.replace('{title}',tA.t);lo=lo.replace('{description}',tA.d);lo=lo.replace(new RegExp('{click_url}','g'),adn.p+'click.php?id=qooah&ad='+tA.k+(tA.l != undefined?'&link='+tA.l:'')+(tA.r != undefined?'&redirect='+tA.r:''));lo=lo.replace('{image}',tA.i);var z=document.createElement('div');z.innerHTML=lo;var y=z.firstChild;y.className=y.className.replace('gemini-ad-'+tcN,'').replace('yap-ad-'+tcN,'');var pcN=cN.replace('gemini-ad-'+tcN,'').replace('yap-ad-'+tcN,'').split(' ');for(g=0;g<pcN.length;g++){if(y.className.indexOf(pcN[g]) == -1){y.className+=' '+pcN[g]}}y.className+=' adnow-'+(i+1);tE.parentElement.replaceChild(y,tE);adn.im(adn.p+'impression.php?id=qooah&ad='+tA.k)}}}}};adn.i()})()