$('body').css({'background':'#fff url(https://bbcdn.go.cz.bbelements.com/creatives/cdn25894/b10/223/64/b1022364/extra/07_branding_180077_Ulozto_Videobranding_Garmin_Vivoactive.jpg) no-repeat center 54px / 1938px 1211px fixed'});
$('#ad_leader').css({'margin-top':'56px','margin-bottom':'-15px'});
$('#ad_leader_wrapper').css({'height':'200px','width':'1030px'});
$('#wrapper').css({'margin-bottom': '0px', 'margin-top':'0px'});
$('body').prepend('<a href="https://go.cz.bbelements.com/please/redirect/21783/1/1/9/!uwi=1792,uhe=1120,uce=1,ibbid=,impressionId=a730bc07-83bd-4598-b5f2-eb0ae251de70,ibb_device_id=0,ip_co=104,ip_reg=0,b_w=998,b_h=200,tcf2=15,param=1022364/984419_1_?" target="_blank" style="position: fixed;top:0;left: 0;right: 0;bottom: 0;"></a>');
document.write('<div style="position: relative; width:1030px; height:200px; left:0px;"><div id="tmadvideocontent" style="position: fixed; width:1030px; height:200px; margin:0px;"></div></div>\n');

var pxBannerImage	= "https://bbcdn.go.cz.bbelements.com/creatives/cdn25894/b10/223/64/b1022364/extra/1x1.gif"; // adresa obrazku
var pxBannerImageWidth	= 1030;	// sirka banneru
var pxBannerImageHeight	= 200;	// vyska banneru
var pxBannerVideo	= "https://video-cache.tiscali.cz/20/01/70120_alza_leto_s_alzou_garmin_cz_online_5mb-360p.mp4";	// adresa videa v CMS
var pxBannerVideoWidth	= 356;	// sirka videa
var pxBannerVideoHeight	= 200;	// vyska videa
var pxBannerVideoTop	= 0;	// odsazeni horniho okraje videa od horniho okraje banneru
var pxBannerVideoLeft	= 0;	// odsazeni leveho okraje videa od leveho okraje banneru
var pxBannerBgcolor     = 'transparent';
var pxPoster            = 'https://im.tiscali.cz/video/2021/07/29/1309590-alza_leto_s_alzou_garmin_cz_online_5mb-base_16x9.jpg';

/**************************/
/**** DALE NEEDITOVAT ****/
/************************/

var pxBannerSetup={id:0,banner:{bgcolor:pxBannerBgcolor,width:pxBannerImageWidth,height:pxBannerImageHeight,timeout:1,sound:0,video:{poster:pxPoster,loop:!1,controls:1,onTop:1,width:pxBannerVideoWidth,height:pxBannerVideoHeight,top:pxBannerVideoTop,left:pxBannerVideoLeft,sources:{mp4:pxBannerVideo,webm:pxBannerVideo.replace(".mp4",".webm")}},image:{source:pxBannerImage},link:"https://go.cz.bbelements.com/please/redirect/21783/1/1/9/!uwi=1792,uhe=1120,uce=1,ibbid=,impressionId=a730bc07-83bd-4598-b5f2-eb0ae251de70,ibb_device_id=0,ip_co=104,ip_reg=0,b_w=998,b_h=200,tcf2=15,param=1022364/984419_1_?"}};
pxBannerSetup.name = "pxBanner"+Math.floor(Math.random()*99999999);
var tmadvideobanner = ('<div id="'+pxBannerSetup.name+'"></div>');
$('#tmadvideocontent').append(tmadvideobanner);
window.videoBaseUrl = 'https://elderly.performax.cz/js/tmadvideo/';
window.tmAdVideo = window.tmAdVideo || []; window.tmAdVideo.push(pxBannerSetup);
document.write('<sc'+'ript src="https://elderly.performax.cz/js/tmadvideo/tmadvideo.js" async></scr'+'ipt>');
;(new Image(1,1)).src='https://go.cz.bbelements.com/please/track/beacon/?b=1520033291&dstats=21783|1|1|9|0|241655|984419|2021-08-02|22:57:57|1022364|1|0|50|28|104|0|0|0|119.236.101.168|1792|1120|1|0|2011981224||||0|0&bsh=2279350139&bts=1627937877';
;!function(a,b){function c(a,b){function c(a,c,d){var e=this;e.invalidate=function(){a=f},e.isInvalidated=function(){return a===f},e.getTimestamp=function(){return c},e.getExpires=function(){return new b.time(d)},e.setExpires=function(a){d=a.roundToMidnight().getTime()},e.toString=function(){return"BBID-"+a+"-"+b.formatNumber(c,17)+"-"+b.formatNumber(d,8)}}var d=/BBID-([\d]{2})-([\d]{17})-?(\d{8})?/,e="01",f="10",g=b.date(2018,4,25).addDays(90).roundToMidnight().getTime();return c.parse=function(a){var b=d.exec(a);return b?new c(b[1]===f?f:e,parseInt(b[2],10),b[3]?1e5*parseInt(b[3],10):g):null},c}var d=function(a){var b=(a.location&&"https:"==a.location.protocol?"https:":"http:")+"//";return{bn002:"ibbid",CPEX_KEY:"cpex2ibb",bn003:"BBID-00-00000000000000000",bn004:b+"bbcdn-bbnaut.ibillboard.com/library/bbnaut-lib-latest.min.js",bn005:[],bn006:"bbnaut_debug",OBSOLETE_TIMESTAMP:47e13}},e=function(a,b){return{bn007:function(a,b){if("string"==typeof b)for(var c=a+"=",d=b.split(/[;&]/),e=0;e<d.length;e++){for(var f=d[e];" "==f.charAt(0);)f=f.substring(1,f.length);if(0==f.indexOf(c))return f.substring(c.length,f.length)}},bn008:function(a){b.write('\x3Cscript type="text/javascript" src="'+a+'">\x3C/script>')},bn017:function(a){var c=b.createElement("script");c.type="text/javascript",c.async=!0,c.src=a;var d=b.getElementsByTagName("script")[0];d.parentNode.insertBefore(c,d)},bn009:function(b){a.console&&a.console.info(b)},formatNumber:function(a,b){for(var c=a.toString();c.length<b;)c="0"+c;return c.length>b&&(c=c.substr(0,b)),c},time:function(a){var b=this,c=new Date(a);b.addDays=function(a){return c.setDate(c.getDate()+a),b},b.roundToMidnight=function(){return c.setHours(0,0,0,0),b},b.isInFuture=function(){return c.getTime()>(new Date).getTime()},b.getTime=function(){return c.getTime()}},date:function(a,b,c){return new this.time(new Date(a,b,c).getTime())}}},f=function(a,b,c,d,e){function f(a,b){return e.parse(d.bn007(a,b))}return{bn011:function(){return f(c.bn002,b.cookie)},bn016:function(a){return d.bn007(a,b.cookie)},bn012:function(){try{if(a.localStorage)return e.parse(a.localStorage.getItem(c.bn002))}catch(b){}},bn013:function(){try{if(a.sessionStorage)return e.parse(a.sessionStorage.getItem(c.bn002))}catch(b){}},bn014:function(){try{return f(c.bn002,a.name)}catch(b){}}}},g=function(a,b,c,d){function e(a,b){function c(){return!a.isInvalidated()&&!b.isInvalidated()}function d(){return a.isInvalidated()&&b.isInvalidated()}function e(){return a.isInvalidated()?a:b}function f(){return a.getTimestamp()<b.getTimestamp()?a:b}function g(){return a.getTimestamp()>b.getTimestamp()?a:b}return a?c()?f():d()?g():e():b}function f(a){return a.filter(function(a){return a&&a.getExpires().isInFuture()}).reduce(e,null)}return{bn015:function(){if(!a.bbnautLib||!a.bbnautLib.getId){for(var e=!0,g=0;g<b.bn005.length;++g)if(a.location.host.indexOf(b.bn005[g])>=0){e=!1;break}e&&c.bn017(b.bn004);var h=f([d.bn011(),d.bn012(),d.bn013(),d.bn014()]),i=d.bn016(b.CPEX_KEY);a.bbnautLib=a.bbnautLib||{},a.bbnautLib.prtos=a.bbnautLib.prtos||{},a.bbnautLib.getId=function(){return h?h.toString():null},a.bbnautLib.getCpexProfile=function(){return i},a.bbnautLib.storeSRAProfile=function(b){"function"==typeof a.bbnautLib.storeProfile?a.bbnautLib.storeProfile(b):a.bbnautLib.prtos.srapr=b}}}}},h=d(b),i=e(b,a),j=c(h,i),k=f(b,a,h,i,j),l=g(b,h,i,k);l.bn015()}(document,window);

