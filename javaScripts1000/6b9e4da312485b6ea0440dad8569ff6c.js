/*! SPORT */
var zProperties = {suPath:'/susp',staPath:'https://estaticos-cdn.sport.es',webstaPath:'https://est.sport.es',videoTokenPath:'/susp/xml/token/get',pollGetPath:'/susp/commands/getPoll',pollVotePath:'/susp/services/addPollVote',fbAppId:'339564252820763',gtmId:'GTM-TTM3HX',pwAppCode:'01A6D-0FA8D',pwGcmSenderId:'103067130430',disqusShortname: 'diario-sport',disqusAPIkey: 'muh0GFzaT7mFSzA7QlCKKByNRQiboWW3pg4GnANNwGQOBN0P5lE2eR1IaS2gDiGK',disqusSSO: { name: 'Sport', url: 'https://www.sport.es/susp/register/login.html', logout: 'https://www.sport.es/es/html/logout'}},padLeft=function(a,b,c){for(c="undefined"==typeof c?"0":c+"",a="undefined"==typeof a?"0":a+"";a.length<b;)a=c+a;return a},reverse=function(a){if("undefined"!=typeof a)return a.split("/").reverse().join("")},timestamp=function(){return(new Date).getTime()},urlNoCache=function(a){return a+"?nocache="+timestamp()},zCookies={create:function(a,b,c){var d;if(c){var e=new Date;e.setTime(e.getTime()+60*c*1e3),d="; expires="+e.toGMTString()}else d="";document.cookie=a+"="+b+d+"; path=/"},read:function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""},erase:function(a){zCookies.create(a,"",-1)},areEnabled:function(){var a=!1;return zCookies.create("cookiesenabled","valcookie",1),""!=zCookies.read("cookiesenabled")&&(a=!0,zCookies.erase("cookiesenabled")),a}},JsZetaUser={};JsZetaUser.SULastURL=function(){this.actual_pathname=document.location.href},JsZetaUser.SULastURL.prototype.startsWith=function(a){return 0==this.actual_pathname.indexOf(a)},JsZetaUser.SULastURL.prototype.getLastURL=function(){return this.actual_pathname},JsZetaUser.SULastURL.SUSetLastURL=function(){var a=new JsZetaUser.SULastURL,b=function(){document.location.href=zProperties.suPath+"/register/login.html"};a.startsWith(zProperties.suPath)?b():$.get(zProperties.suPath+"/setLastUrl.jsp",{beforeLoginPathName:a.getLastURL()},b)},JsZetaUser.Profile={Track:function(a){"undefined"!=typeof utag&&utag.link({nombreProceso:"login",pasoProceso:"submit "+a,producto:"",esAsync:"si"})},TrackReg:function(){"undefined"!=typeof utag&&utag.link({nombreProceso:"registro",pasoProceso:"submit",producto:"",esAsync:"si"})},TrackRecP:function(){"undefined"!=typeof utag&&utag.link({nombreProceso:"recuperar contrasena",pasoProceso:"submit",producto:"",esAsync:"si"})},TrackRecPConf:function(){"undefined"!=typeof utag&&utag.link({nombreProceso:"recuperar contrasena",pasoProceso:"confirmar submit",producto:"",esAsync:"si"})},TrackModUser:function(){"undefined"!=typeof utag&&utag.link({nombreProceso:"modificar usuario",pasoProceso:"submit",producto:"",esAsync:"si"})},TrackDown:function(){"undefined"!=typeof utag&&utag.link({nombreProceso:"baja usuario",pasoProceso:"submit",producto:"",esAsync:"si"})},TrackDownForm:function(){"undefined"!=typeof utag&&utag.view({nombreProceso:"baja usuario",pasoProceso:"acceso",producto:"",esAsync:"si"})},TrackDownOk:function(){"undefined"!=typeof utag&&utag.link({nombreProceso:"baja usuario",pasoProceso:"completado",producto:"",esAsync:"si"})},New:function(){"undefined"!=typeof utag&&utag.link({nombreProceso:"registro",pasoProceso:"acceso",producto:"",esAsync:"si"}),document.location.href=zProperties.suPath+"/register/create_user.html"},Edit:function(){"undefined"!=typeof utag&&utag.link({nombreProceso:"modificar usuario",pasoProceso:"acceso",producto:"",esAsync:"si"}),document.location.href=zProperties.suPath+"/register/modify_user.html"},Login:function(){"undefined"!=typeof utag&&utag.view({nombreProceso:"login",pasoProceso:"acceso",producto:"",esAsync:"si"}),JsZetaUser.SULastURL.SUSetLastURL()},RecPwd:function(){"undefined"!=typeof utag&&utag.link({nombreProceso:"recuperar contrasena",pasoProceso:"acceso",producto:"",esAsync:"si"}),document.location.href=zProperties.suPath+"/register/reminder.html"},UserDown:function(){JsZetaUser.Profile.TrackDown(),$("#deleteOK").attr("class","deleteDisabled"),$("#deleteNOK").attr("class","deleteDisabled"),$.ajax({type:"GET",url:zProperties.suPath+"/services/removeUser?CHK_DELETE",cache:!1,data:{timestamp:(new Date).getTime()},dataType:"xml",success:function(){JsZetaUser.Profile.TrackDownOk(),$("#alert").toggle(),$("#userdown").toggle(),$("#deleteOK").removeClass(),$("#deleteNOK").removeClass()},error:function(){$("#deleteOK").removeClass(),$("#deleteNOK").removeClass()}})},UserRecUser:function(a){document.location.href=zProperties.suPath+"/registro/registro_rec_user.jsp?lang="+a},UserRecUserOpc:function(a){"recuser_si"==$("input:radio[name=RECUSEROPTIONID]:checked").val()?document.location.href=zProperties.suPath+"/registro/registro_rec_user_confirm.jsp?lang="+a:JsZetaUser.Profile.New()},LoadUser:function(a){"undefined"!=typeof a&&null!=a&&""!=a&&$(a).find("user").each(function(){var a=$(this).find("nombre").text(),b=$(this).find("apellidos").text(),c=$(this).find("avatar").text(),d="https://est.sport.es/img/userlog.png";null!=c&&""!==c.trim()&&(c=c.trim(),d=zProperties.staPath+c.substring(c.indexOf("/resources"),c.length)),$(function(){var c=$('[data-actas="login-sn"]'),e=$('[data-actas="login-sn"] > div.txt');e.html("<p class='name'>"+a+" "+b+"</p><p class='options'><a href='javascript:JsZetaUser.Profile.Edit()'>Editar</a> / <a href='javascript:JsZetaUser.Profile.Logout()' >Salir</a></p>"),c.attr("class","session-on"),c.append("<figure class='thumb'><a href='javascript:JsZetaUser.Profile.Edit()' data-type='logged'><img src='"+d+"' alt='username'></figure>")})})},getUserSU:function(a){$.ajax({type:"GET",url:zProperties.suPath+"/services/getUser",cache:!1,dataType:"xml",success:function(a){$(a).find("nombre").each(function(){$("div.user > p#login > span").append($(this).text()),$("div.user > a#login").remove(),$("div.user > p#login").show()})}})},Logout:function(){zCookies.erase("dstkn"),$.ajax({type:"GET",url:zProperties.suPath+"/services/logout",success:function(){var a=document.location.pathname,b=a.indexOf(zProperties.suPath);0==b?document.location.href=document.location.href.substring(0,document.location.href.length-(a.length+document.location.search.length-1))+"/":window.location.reload()}})},LogoutNoRedirect:function(){zCookies.erase("dstkn"),$.ajax({type:"GET",url:zProperties.suPath+"/services/logout",cache:!1})},LogoutForceRedirect:function(){zCookies.erase("dstkn"),$.ajax({type:"GET",url:zProperties.suPath+"/services/logout",success:function(){history.go(-1)},error:function(){history.go(-1)}})},checkLoginForm:function(){var a=function(){var a=$("form#registro_mod").attr("action");$("form#registro_mod").attr("action",zProperties.suPath+a),$("form#registro_mod").submit()};if(""!=$("#registro_mod input[name='j_username']").val()&&""!=$("#registro_mod input[name='j_password']").val()){var b=new JsZetaUser.SULastURL;JsZetaUser.Profile.Track("local"),$.get(zProperties.suPath+"/setLastUrl.jsp",{beforeLoginPathName:b.getLastURL()},a)}else alert("Por favor, rellena todos los campos")},checkLoginFormDet:function(){var a=function(){var a=$("form#registro_mod_det").attr("action");$("form#registro_mod_det").attr("action",zProperties.suPath+a),$("form#registro_mod_det").submit()};if(""!=$("#registro_mod_det input[name='j_username']").val()&&""!=$("#registro_mod_det input[name='j_password']").val()){var b=new JsZetaUser.SULastURL;JsZetaUser.Profile.Track("local"),$.get(zProperties.suPath+"/setLastUrl.jsp",{beforeLoginPathName:b.getLastURL()},a)}else alert("Por favor, rellena todos los campos")}};