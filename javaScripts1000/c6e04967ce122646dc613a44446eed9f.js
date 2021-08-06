(function(){
     var view = {};
     view.host = 'http://lxbjs.baidu.com';
     function G(id) {
         return document.getElementById(id);
     }
     function get(url, callback) {
    	 jQuery.getJSON(url + "&callback=?",callback);
     }
     function validateTel(str) {
         var res = true;
         if (str.charAt(0) == '1') {
             res = /^1[3458]\d{9}$/.test(str);
         }
         else {
             res = /^0\d{9,11}$/.test(str);
         }
         return res;
     };
     function telCB() {
         if (view.btn.disabled) {
             return;
         }
         var vtel = view.vtel.value;
         if (!validateTel(vtel)) {
             alert('è¯·æ¨è¾å¥æ­£ç¡®çå·ç ï¼ææºå·ç è¯·ç´æ¥è¾å¥ï¼åº§æºè¯·å åºå·', true);
             return false;
         }
         var form = G('lxb-data-form');
         var url = view.host + '/cb/call';
         url += '?vtel=' + vtel;
         url += '&uid=' + (form.uid ? form.uid.value : '');
         url += '&tk=' + form.tk.value;
         url += '&t=' + (new Date()).getTime();
         view.btn.value = 'æ­£å¨å¼å«...';
         view.btn.disabled = true;
         get(url, function (dataObj) {
         	alert(dataObj.msg);
             if(0 == dataObj.status){
                 view.btn.disabled = false;
                 view.btn.value = 'åè´¹çµè¯';
             }
         });
         if (view.storeTel && window.localStorage) {
             localStorage.setItem('tel', value);
         }
     }
     function getTk (telId,btnId,storeTel) {
    	 
    	view.storeTel = storeTel;
     	view.vtel = G(telId);
     	if(!view.vtel){
     		alert('å¨é¡µé¢ä¸­æ¾ä¸å°è¾å¥æ¡' + telId);
     		return;
     	}
     	view.btn = G(btnId);
     	if(!view.btn){
     		alert('å¨é¡µé¢ä¸­æ¾ä¸å°æé®' + btnId);
     		return;
     	}
        view.btn.onclick = telCB;
     	var url = view.host + '/cb/user/check';
         url += '?f=4&uid=' + (G('lxb-data-form').uid ? G('lxb-data-form').uid.value : '');
         url += '&r=' + (document.referer ? document.referer : location.href);
         url += '&t=' + (new Date()).getTime();
         get(url, function (dataObj) {
             if(0 == dataObj.status){
             	G('tk').value=dataObj.data.tk;
             }else{
            	 //alert("è·åtokenå¤±è´¥");
            	 view.btn.disabled = true;
             }
         });
         if (window.addEventListener) {
         	view.btn.addEventListener(
                 'touchstart', 
                 function () {
                 	view.btn.onclick = blank;
                 }, 
                 false
             );
         	view.btn.addEventListener('touchend', telCB, false);
         }

         if (view.storeTel && window.localStorage) {
             var tel = localStorage.getItem('tel');
             if (tel) {
             	view.vtel.value = tel;
             }
         }
     }
     // namespace
     if(!window.lxbcb){window['lxbcb']={};}
     window['lxbcb']['getTk'] = getTk;
 })();