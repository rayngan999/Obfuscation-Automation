VIPC.$(function(){var e=VIPC.$,t=VIPC._,n=VIPC.kitCore,i=VIPC.kitUI,a=(n.usopp,n.cookie),o=n.smartStorage;VIPC.kitCore.getUserInfo=function(){var n=6e3,i=!1,a=[],o={nickname:"vipcæ¸¸å®¢",isLogin:!1},r=function(e){e(o)};return VIPC.kitCore.cookie.getItem("uid")&&(r=function(r){o.isLogin?r(o):(a.push(r),i||(i=!0,e.ajax({url:"/i/user/info/v2",type:"post",dataType:"json",timeout:n,cache:!1,success:function(e){t.extend(o,e),o.isLogin=!0,i=!1;for(var n=0;n<a.length;n++)a[n](o);a=[]},error:function(){i=!1;for(var e=0;e<a.length;e++)a[e](o);a=[]}})))}),r}(),VIPC.kitCore.TabBarController=function(t,n){function i(e){var i=t.eq(e);if(0===i.length)return!1;if(!i.hasClass("cur")){t.removeClass("cur").eq(e).addClass("cur"),n.removeClass("cur").eq(e).addClass("cur");var a=i.attr(r);location.replace&&a&&location.replace("#"+a)}}function a(){if(!location.replace)return!1;var n=location.hash.slice(1),a=!1,o=0;return n&&(t.each(function(){var t=e(this),i=t.index();return t.attr(r)===n?(a=!0,o=i,!1):void 0}),!a)?(location.replace(""),!1):void i(o)}function o(n){t.on("click",function(){var t=e(this),a=t.index();i(a),n&&n()}),a()}var r="data-state";return{init:o,show:i}},VIPC.kitCore.appDownloadDialog=function(t){function n(){location.href=e.os.ios?"/redirect?url=https%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fid975428985"+s:e.os.android?"/redirect?url=http%3A%2F%2Fdl2.vipc.cn%2Fvipc_officer_latest.apk"+s:"/download"+s}var a=t.content||"è¯·ä¸è½½å¯å½©ççApp",o=t.noButtonContent||"åæ¶",r=t.yesButtonContent||"ç«å³ä¸è½½",s=t.stats?"?"+e.param(t.stats):"";if(i.dialog)i.dialog({content:a,buttons:{no:{content:o,callback:function(){}},yes:{content:r,callback:n}}});else{var c=confirm(a);c&&n()}},VIPC.kitCore.checkIdentity=function(){{var t="vipc_identity",i=1*new Date+31536e7,a=o.getItem(t);n.cookie.getItem("uid")}return a||e.ajax({url:"/i/user/identity/check",type:"get",dataType:"json",success:function(e){e.verify?o.setItem(t,!0,i):o.setItem(t,!1,i)}}),function(){return o.getItem(t)}}(),function(){var t=e("script.template"),n={};t.each(function(t){var i=e(this),a=i[0].id;n[a]=i.html(),i.remove()}),VIPC.template=n}(),function(){var e=n.SocialShare;n.socialShare=new e({weibo:{appKey:"720641025",relateUid:"5335702987"},qzone:{referer:location.href},weixin:{qr:"/js/qrcode.js"}})}(),function(){var e="vipc_visitDays",t=1*new Date+2592e6,i=new Date,a=i.getFullYear(),r=i.getMonth()+1,s=i.getDate(),c=a+""+(10>r?"0"+r:r)+(10>s?"0"+s:s),l={days:0,update:c};return n.visitDays=l.days,o.getItem(e)?(l=o.getItem(e),n.visitDays=l.days,void(+c>+l.update&&(l.update=c,l.days++,o.setItem(e,l,t),n.visitDays=l.days))):(o.setItem(e,l,t),!1)}(),function(){var e=n.requestParam.fr,t=1*new Date+31536e7;/^[ap]{1}\d+/.test(e)&&(o.setItem("vipc_fr",e,t),a.setItem("vipc_fr",e,new Date(t),"/",location.hostname?"."+location.hostname:".vipc.cn"))}(),function(){function e(){var e="",t=document.referrer,n=/^https?:\/\/([^\/\.]+?\.)*?baidu\.com\//gi,i=/^https?:\/\/([^\/\.]+?\.)*?sogou\.com\//gi,a=/^https?:\/\/([^\/\.]+?\.)*?sm\.cn\//gi,o=/^https?:\/\/([^\/\.]+?\.)*?so\.com\//gi,r=/^https?:\/\/([^\/\.]+?\.)*?google\./gi;if(t)switch(!0){case n.test(t):e="baidu";break;case i.test(t):e="sogou";break;case a.test(t):e="shenma";break;case o.test(t):e="360";break;case r.test(t):e="google"}return e}var t="vipc_se",i=e(),r=1*new Date+31536e7;0===n.visitDays&&i&&(o.setItem(t,i,r),a.setItem(t,i,new Date(r),"/",location.hostname?"."+location.hostname:".vipc.cn"))}(),function(){var e="vipc_clear_vid",t=1*new Date+2592e6;if(o.getItem(e))return!1;var n=document.createElement("iframe");n.style.cssText="display:none; height: 0; width: 0; opacity: 0;",n.onload=function(){o.setItem(e,1,t)},n.src="https://live.vipc.cn/api/other/clear",document.body.appendChild(n)}(),function(){function n(t,n,i,a){var o=0,r=!1,s=t.eq(0).find(".vMod_cardList_item");if(o=n.length-i.length,0===o)t.each(function(){e(this).find(".vMod_cardList").remove(),e(this).append(a)});else if(4>o){for(var c=e(a),l=0;l<n.length;l++){r=!1;for(var d=0;d<i.length;d++)if(i[d]._id===n[l]){r=!0;break}if(!r&&(c.append(s.eq(l).clone()),o--,0===o))break}t.each(function(){e(this).find(".vMod_cardList").remove(),e(this).append(c.clone())})}}function i(e){n(a,d,e.site,l({data:{list:e.site,path:"/site"}})),n(r,u,e.lottery,l({data:{list:e.lottery,path:"/lottery"}}))}var a=e(".customWebsite"),r=e(".customLottery"),s=VIPC.template.tml_vMod_cardList,c=VIPC.kitCore.cookie;if(!c.getItem("uid"))return!1;if(!s)return!1;if(0===a.length&&0===r.length)return!1;var l=t.template(s),d=[],u=[],f=a.eq(0).find(".vMod_cardList_item"),p=r.eq(0).find(".vMod_cardList_item");f.each(function(){d.push(e(this).attr("data-id"))}),p.each(function(){u.push(e(this).attr("data-id"))});var h={};o.getItem("vipc_custom")&&(h=JSON.parse(o.getItem("vipc_custom"))),h.site&&h.lottery?i(h):e.ajax({url:"/i/user/custom",type:"get",dataType:"json",success:function(e){var t=1*new Date+36e5;o.setItem("vipc_custom",JSON.stringify(e),t),i(e)}})}(),function(){function t(e){try{wx.ready(function(){wx.onMenuShareTimeline(h),wx.onMenuShareAppMessage(h)}),wx.config(e)}catch(t){}}function n(){e.ajax({url:"/wcs/config",type:"post",dataType:"json",data:{token:(1*new Date*1024-1024).toString("16")},success:function(n){var i={debug:!1,appId:"wx79f369c88db0ad55",jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","getNetworkType","previewImage"]};i=e.extend(i,n),t(i)}})}var i=/MicroMessenger/i.test(navigator.userAgent);if(!i)return!1;var a=e(".vMod_article_content"),o="è¶³ç¯®çç´æ­ï¼ä¸å¯å½©çç(vipc.cn)";a.length>0&&(o=a.attr("data-about"),0===o.length&&(o=e.trim(a.text())),o.length>40&&(o=o.slice(0,40)+"..."));var r=e('meta[name="weixin-share-title"]'),s=e('meta[name="weixin-share-desc"]'),c=e('meta[name="weixin-share-image"]'),l=e('meta[name="weixin-share-link"]'),d=r.attr("content")||"",u=s.attr("content")||"",f=c.attr("content")||"",p=l.attr("content")||"",h={title:d||e("title").html().replace(/_å¯å½©çç$/,""),desc:u||o,link:p||location.href,imgUrl:f||"https://vipc.cn/img/logo/120x120.png"},v=document.createElement("script");v.onload=function(){n()},v.src="//res.wx.qq.com/open/js/jweixin-1.4.0.js",e("script").eq(0).before(v)}(),function(){var t="vipc_topBar_backBtn",n=e(".vMod_topBar_backBtn"),i=location.href;if(1===history.length&&(o.removeItem(t),n.length>0)){var a=1*new Date+864e5;o.setItem(t,i,a)}o.getItem(t)===i&&n.length>0&&n.each(function(){this.onclick=function(){location.href="/"}})}(),function(){e("body").on("click",".vMod_foldingBox .vMod_foldingBox_header",function(){var t=e(this).parent();t.hasClass("hide")?t.removeClass("hide"):t.addClass("hide")})}(),function(){e("body").on("click",".vMod_foldingBox2 .vMod_foldingBox2_header",function(){var t=e(this).parent();t.hasClass("hide")?t.removeClass("hide"):t.addClass("hide")})}(),function(){e("body").on("click",".vMod_hiddenBox .vMod_hiddenBox_button",function(){var t=e(this).parent();t.hasClass("hide")?t.removeClass("hide"):t.addClass("hide")})}(),function(){var t=e(".vMod_uploadImage");if(0===t.length)return!1;var n=t.find(".vMod_uploadImage_fileInput"),i=t.find(".vMod_uploadImage_preview");if(!FileReader&&!File)return t[0].className="",n[0].className="",i[0].className="",!1;var a=VIPC.kitUI,o={maxSizeError:"ä¸ä¼ çå¾çä¸è½è¶è¿10MBã",typeError:"ç®ååªæ¯æä¸ä¼ .jpgå.pngæ ¼å¼çå¾çã"},r=new FileReader;r.onload=function(n){t.hasClass("default")&&t.removeClass("default");var a=i.width(),o=e('<img style="opacity: 0;" src="'+n.target.result+'" />');i.html(o);var r=o.width(),s=o.height();o.css(r>=s?{left:"50%",width:"auto",height:a+"px",marginLeft:-(r/s*a/2)+"px"}:{top:"50%",width:a+"px",height:"auto",marginTop:-(s/r*a/2)+"px"}),o.css("opacity",1)},n.on("change",function(){var e=n[0];if(e.files.length)if("image/jpeg"===e.files[0].type||"image/png"===e.files[0].type){if(console.log(e.files),e.files[0].size>1e7)return e.value="",a.tips({content:o.maxSizeError,expires:2e3}),!1;r.readAsDataURL(e.files[0])}else e.value="",a.tips({content:o.typeError,expires:2e3})})}(),function(){function n(){d>0&&a.addClass("tips")}if(!VIPC.kitCore.cookie.getItem("uid"))return!1;var i=e(".vHeader"),a=i.find(".vHeader_icons_user");if(0===a.length||i.hasClass("mobileHide"))return!1;var r="/i/user/comment/unread",s="vipc_comment_unread",c=1*new Date+3e5,l=t.isNumber(o.getItem(s)),d=0;a.on("click",function(e){e.preventDefault();var t=a.attr("href");o.setItem(s,0,c),location.href=t}),l?(d=+o.getItem(s),n()):e.ajax({url:r,type:"get",dataType:"json",cache:!1,success:function(e){o.setItem(s,e.count,c),d=e.count,n()}})}(),function(){var t=e(".vHeader_icons_download");return 0===t.length?!1:void(t[0].href=t[0].href+"#auto")}()});