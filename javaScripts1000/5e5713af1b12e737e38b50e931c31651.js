        var spe_url = "https";
        var src = spe_url+'://trail.53kf.com/lib/common/fingerprint2.js';
        var finger_id = '';
        var is_regular = true;
        $('body').append("<scr"+"ipt src='"+src+"''></scr"+"ipt>");
        var kf_comid = "0";
        var cookie = {
            set:function(key,val,time){//è®¾ç½®cookieæ¹æ³
                var date=new Date(); //è·åå½åæ¶é´
                var expiresDays=time;  //å°dateè®¾ç½®ä¸ºnå¤©ä»¥åçæ¶é´
                date.setTime(date.getTime()+expiresDays*24*3600*1000); //æ ¼å¼åä¸ºcookieè¯å«çæ¶é´
                document.cookie=key + "=" + val +";expires="+date.toGMTString();  //è®¾ç½®cookie
            },
            get:function(key){//è·åcookieæ¹æ³
                /*è·åcookieåæ°*/
                var getCookie = document.cookie.replace(/[ ]/g,"");  //è·åcookieï¼å¹¶ä¸å°è·å¾çcookieæ ¼å¼åï¼å»æç©ºæ ¼å­ç¬¦
                var arrCookie = getCookie.split(";")  //å°è·å¾çcookieä»¥"åå·"ä¸ºæ è¯ å°cookieä¿å­å°arrCookieçæ°ç»ä¸­
                
                var tips;  //å£°æåétips
                for(var i=0;i<arrCookie.length;i++){   //ä½¿ç¨forå¾ªç¯æ¥æ¾cookieä¸­çtipsåé
                    var arr=arrCookie[i].split("=");   //å°åæ¡cookieç¨"ç­å·"ä¸ºæ è¯ï¼å°åæ¡cookieä¿å­ä¸ºarræ°ç»
                    if(key==arr[0]){  //å¹éåéåç§°ï¼å¶ä¸­arr[0]æ¯æçcookieåç§°ï¼å¦æè¯¥æ¡åéä¸ºtipsåæ§è¡å¤æ­è¯­å¥ä¸­çèµå¼æä½
                        tips=arr[1];   //å°cookieçå¼èµç»åétips
                        break;   //ç»æ­¢forå¾ªç¯éå
                    }
                }
                return tips;
            },
            delete:function(key){ //å é¤cookieæ¹æ³
                 var date = new Date(); //è·åå½åæ¶é´
                 date.setTime(date.getTime()-10000); //å°dateè®¾ç½®ä¸ºè¿å»çæ¶é´
                 document.cookie = key + "=v; expires =" +date.toGMTString();//è®¾ç½®cookie
            }
        }        
       
        division(kf_comid);
        function division(company_id){
                var com_id = cookie.get('kf_company_ids');//è·åå¯ä¸æ è¯
                if (com_id != undefined){
                    re = com_id.indexOf(company_id);
                    if (re != -1) {
                        return;
                    }
                }
                if(typeof(Fingerprint2) != 'undefined'){
                    var kfp = new Fingerprint2();
                        kfp.get(function(result, components) {
                            finger_id = result;
                        });
                }else{
                    setTimeout(function(){
                        division(company_id);
                    },'500');
                    return;
                }
                if(finger_id != ''){
                   xhr_post(company_id,finger_id);
                }else{
                    setTimeout(function(){
                            division(company_id);
                        },'500')
                }
        }


        function xhr_post(company_id,finger_id){
            var is_regular = true;
            var xhr = new XMLHttpRequest();  
            xhr.open("POST", spe_url+"://trail.53kf.com/code.php?action=division", true);
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            xhr.withCredentials = true; //æ¯æè·¨ååécookies
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if((xhr.status >= 200 && xhr.status<300) || xhr.status == 304){ 
                        //200 è¡¨ç¤ºç¸åºæå 304 è¡¨ç¤ºç¼å­ä¸­å­å¨è¯·æ±çèµæº

                        // å¯¹ååºçä¿¡æ¯åå¨åè°å½æ°éé¢
                        var data = xhr.responseText;
                            data = JSON.parse(data);

                        if (data.status == 1) {//ç¶æç ä¸º1ä¸ºèå®¢æ·
                            cookie.set('kf_company_ids',data.company_ids,30);
                            is_regular = false;
                        }else{
                            console.log(data.message);
                        }
                    }else{

                        return 'request is unsucessful '+xhr.status;

                    }
                }
            }
            xhr.send('company_id='+company_id+'&finger_id='+finger_id);
            return is_regular;           
        }
