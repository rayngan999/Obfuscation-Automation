
function getByClass(oParent, sClass){
    if(document.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }
    else{
        var aEle = oParent.getElementsByTagName('*');
        var aResult = [];
        var re = new RegExp('\\b'+sClass+'\\b','i');
        for(var i = 0; i < aEle.length; i++){
            if(re.test(aEle[i].className)){
                aResult.push(aEle[i]);
            }
        };
        return aResult;
    };
};
function addClass(obj, sClass){
    var re = new RegExp('\\b'+sClass+'\\b');
    if(re.test(obj.className) == false){
        //å¦ææ²¡ææå 
        if(obj.className){
            obj.className += ' '+sClass;
        }else{
            obj.className = sClass;
        }
    }
};
function removeClass(obj, sClass){
    var re = new RegExp('\\b'+sClass+'\\b','g');
    if(re.test(obj.className)){
        //match å¯¹å­ç¬¦ä¸²æ§è¡æ¥æ¾ï¼å¹¶å°å®èªæ¥æ¾çç»æä½ä¸ºæ°ç»è¿å
        //\S å¹éä»»ä½éç©ºç½å­ç¬¦ãç­ä»·äº [^ \f\n\r\t\v]ã
        var arr = obj.className.replace(re,'').match(/\S+/g);
        if(arr){
            obj.className = arr.join(' ');
        }else{
            obj.className = '';
        };
    }else{
        return;
    }
};
function hasClass(obj, sClass){
    var objClass = obj.className,//è·åclassåå®¹
        objClassList = objClass.split(/\s+/);  //éè¿splitç©ºå­ç¬¦ä¸²è®²Classè½¬æ¢ææ°ç»
    for(var i = 0; i < objClassList.length; i++){
        if(objClassList[i] == sClass){
            return true;
        }else{
            return false;
        };
    };
};
function getStyle(obj, name){
    return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
};
function startMove(obj, json, options){
    options = options || {};
    options.time = options.time || 700;
    options.type = options.type || 'ease-out';
    var start = {};
    var dis = {};
    for(var name in json){
        if(name == 'opacity'){
            start[name] = parseFloat(getStyle(obj, name));
        }else{
            start[name] = parseInt(getStyle(obj, name));
        }
        dis[name] = json[name] - start[name];
    };
    var n = 0;
    var count = parseInt(options.time/30);
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        n++;
        for(var name in json){
            switch(options.type){
                case 'linear':
                    var cur = start[name] + n*dis[name]/count;
                    break;
                case 'ease-in':
                    var a = n/count;
                    var cur = start[name]+(a*a*a)*dis[name];
                    break;
                case 'ease-out':
                    var a = 1 - n/count;
                    var cur = start[name]+(1-a*a*a)*dis[name];
                    break;
            };
            if(name=='opacity')
            {
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+cur*100+')';
            }
            else
            {
                obj.style[name]=cur+'px';
            };
        };
        if(n==count)
        {
            clearInterval(obj.timer);

            options.end && options.end();
        }
    },30);
};

function mTabChange(){
    var oBigImg = document.getElementById('js_m_big');
    var aBigImg = oBigImg.getElementsByTagName('li');
    var oSmallImg = document.getElementById('js_m_small');
    var aSmallImg = oSmallImg.getElementsByTagName('li');
    var oTxt = document.getElementById('js_m_txt');
    var aTxt = oTxt.getElementsByTagName('li');
    var iNow = 0;
    var oPrev = document.getElementById('js_m_list_prev');
    var oNext = document.getElementById('js_m_list_next');
    for(var i = 0; i < aSmallImg.length; i++){
        (function(index){
            aSmallImg[i].onclick = function(){
                mTab(index);
            };
        })(i);
    };
    function mTab(index){
        for(var j = 0; j < aSmallImg.length; j++){
            removeClass(aSmallImg[j],'active');
            aTxt[j].style.display = 'none';
            startMove(aBigImg[j],{'opacity':0},{'time':1000});
            aBigImg[j].style.zIndex = 1;
        };
        addClass(aSmallImg[index], 'active');
        aTxt[index].style.display = 'block';
        startMove(aBigImg[index],{'opacity':1},{'time':1000});
        aBigImg[index].style.zIndex=2;
    };
    function mAutoPlay(){
        iNow++;
        if(iNow == aBigImg.length){
            iNow = 0;
        };
        mTab(iNow);
    }
    var timer = setInterval(mAutoPlay,5000);
    oBigImg.onmouseover = function(){
        clearInterval(timer);
    };
    oBigImg.onmouseout = function(){
        timer = setInterval(mAutoPlay,5000);
    };
    oPrev.onclick = function(){
        iNow--;
        if(iNow < 0){
            iNow = aSmallImg.length-1;
        };
        clearInterval(timer);
        mTab(iNow);
        timer = setInterval(mAutoPlay,5000);
    };
    oNext.onclick = function(){
        iNow++;
        if(iNow == aBigImg.length){
            iNow = 0;
        };
        clearInterval(timer);
        mTab(iNow);
        timer = setInterval(mAutoPlay,5000);
    };
};

String.prototype.trim = function() {
    return this.replace(/^\s+/g,"").replace(/\s+$/g,"");
}

//é»æ­¢æµè§å¨é»è®¤äºä»¶
function stopDefault( ev ) {
    //é»æ­¢é»è®¤æµè§å¨å¨ä½(W3C)
    if ( ev && ev.preventDefault )
        ev.preventDefault();
    //IEä¸­é»æ­¢å½æ°å¨é»è®¤å¨ä½çæ¹å¼
    else
        window.event.returnValue = false;
    return false;
};
/*æ´»å¨è¯¦æçè¡¨åéªè¯*/
function mCheckForm(){
    var oDiv = document.getElementById('js_m_act_form');
    var aInputTxt = getByClass(oDiv,'js_act_form_txt');
    var oSbm = document.getElementById('js_act_form_sbm');
    var oldValue;
    var oldArrValue = [];
    var iNum = 0;
    var oTel = document.getElementById('js_m_form_tel');
    oTel.onkeyup=function(){
        this.value=this.value.replace(/[^\d]/g,'');
    };
    oTel.onafterpaste=function(){
        this.value=this.value.replace(/\D/g,'')
    };
    for(var i = 0; i < aInputTxt.length; i++){
        oldArrValue.push(aInputTxt[i].value);
        (function(index){
            aInputTxt[index].onfocus = function(){
                oldValue = this.value;
                this.value = '';
                this.style.color = '#333';
                this.style.border = '1px solid #f00';
            };
            aInputTxt[index].onblur = function(){
                if(this.value!=null && this.value.trim().length>0){
                    this.onfocus = null;
                    this.style.border = '1px solid #e8e8e8';
                }else{
                    this.style.color = '#999';
                    this.value = oldValue;
                    this.style.border = '1px solid #e8e8e8';
                };
            };
        })(i);
    };
    oSbm.onclick = function(){
        for(var i = 0; i < aInputTxt.length; i++){
            (function(index){
                if(aInputTxt[index].value == oldArrValue[index]){
                    aInputTxt[index].style.border = '1px solid #f00';
                    return false;
                    stopDefault();
                }
            })(i);
        };
        var rl=/^1[3|4|5|8|7][0-9]\d{8}$/;
        if(!rl.test(oTel.value)){
            //oTel.style.border = '1px solid #f00';
            var mTimer1 = setInterval(function(){
                if(iNum == 5){
                    clearInterval(mTimer1);
                    iNum = 0;
                }else{
                    iNum++;
                };
                if(iNum%2){
                    oTel.style.background = '#f00';
                }else{
                    oTel.style.background = '#FFF';
                }
            },200);
            return false;
            stopDefault();
        }
    };
};
// ä¸å±è®¾è®¡éçè½®æ­å¾ï¼åï¼ä¸æ¬¡ç¨æ¨¡ååå¼åï¼éå¤é è½®å­
function bTabSwitch(){
    var oBigImg = document.getElementById('js_b_big_pic');
    var aBigImg = oBigImg.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var oTxt = document.getElementById('js_b_txt');
    var aTxt = oTxt.getElementsByTagName('ul')[0].getElementsByTagName('li');
    var iNow = 0;
    var oPrev = document.getElementById('js_b_prev');
    var oNext = document.getElementById('js_b_next');
    function mTab(index){
        for(var i = 0; i < aBigImg.length; i++){
            startMove(aBigImg[i],{'opacity':0},{'time':1000});
            removeClass(aTxt[i],'show');
            aBigImg[i].style.zIndex = 1;
        };
        startMove(aBigImg[index],{'opacity':1},{'time':1000});
        addClass(aTxt[index],'show');
        aBigImg[index].style.zIndex = 2;
    };
    function mAutoPlay(index){
        iNow++;
        if(iNow >= aBigImg.length){
            iNow = 0;
        };
        mTab(iNow);
    };
    oPrev.onclick = function(){
        iNow--;
        if(iNow < 0){
            iNow = aBigImg.length-1;
        }
        clearInterval(timer);
        mTab(iNow);
        timer =setInterval(mAutoPlay,5000);
    };
    oNext.onclick = function(){
        iNow++;
        if(iNow == aBigImg.length){
            iNow = 0;
        };
        clearInterval(timer);
        mTab(iNow);
        timer =setInterval(mAutoPlay,5000);
    }
    var timer =setInterval(mAutoPlay,5000);
};

//ä¸å±è®¾è®¡è¯¦æéæ·åå¾çå·¦å³åæ¢
function mZxxqTab(){
    var oList = document.getElementById('js_m_zxxq_list');
    var oPrev = document.getElementById('js_m_zxxq_prev');
    var oNext = document.getElementById('js_m_zxxq_next');
    var aList = oList.getElementsByTagName('li');
    var iNow = 0;
    if(aList.length==0){
        oPrev.style.display = 'none';
        oNext.style.display = 'none';
        return;
    }
    var oneWidth = aList[0].offsetWidth+2;

    //å¦ææ·åå°äºå­ä¸ªï¼é£ä¹å·¦å³æé®å°±éè
    if(aList.length<=6){
        oPrev.style.display = 'none';
        oNext.style.display = 'none';
    }else{
        oPrev.style.display = 'none';
        //å¤æ­ç¬¬å ä¸ªLiæHoverï¼å½å¤§äºç¬¬å­ä¸ªçæHoverçæ¶åï¼å°±è®©è¿ä¸ªååç§»å¨ï¼å¨ç¬¬å­ä¸ªçä½ç½®
        for(var i = 0; i < aList.length; i++){
            if(hasClass(aList[i],'hover')){
                if(i>=6 && i<aList.length){
                    oList.style.left = -oneWidth*(i-5)+'px';
                    oPrev.style.display = 'block';
                }
                if(i==aList.length-1){

                    oList.style.left = -oneWidth*(i-5)+'px';
                    oPrev.style.display = 'block';
                    oNext.style.display = 'none';
                }
            };
        };
        //è®¡ç®ulçå®½åº¦
        for(var i = 0; i < aList.length; i++){
            oList.style.width =oneWidth*aList.length+'px';
        };
        oPrev.onclick = function(){
            iNow--;
            if(iNow<=0){
                iNow = 0;
                oPrev.style.display = 'none';
            }
            startMove(oList,{left:-oneWidth*iNow},{time:1000});
            oNext.style.display = 'block';
        }
        oNext.onclick = function(){
            iNow++;
            if(iNow >= aList.length-6){
                oNext.style.display = 'none';
                iNow = aList.length-6;
            }
            startMove(oList,{left:-oneWidth*iNow},{time:1000});
            oPrev.style.display = 'block';
        };
    };
};
//ä¸å±è®¾è®¡è¯¦æéçç¦ç¹å¾ï¼æ²¡æèªå¨æ­æ¾ï¼åªæå³ä¾§çä¸ä¸åæ¢ï¼èä¸ä¸éå¤æ»å¨ï¼ä½æ¯æç¹å»å³ä¾§å°å¾åºå¤§å¾ï¼å¹¶ä¸ä¸é¢çæ°æ®è¦è·çæ¿æ¢,å¤§å¾æ¯ç´æ¥æ¢å°å
function mZxxqTabTop(){
    var oList = document.getElementById('js_m_pic_show');
    var aList = oList.getElementsByTagName('li');
    var oPrev = document.getElementById('js_m_style_up');
    var oNext = document.getElementById('js_m_style_down');
    var iNow = 0;
    var iNum = 0;
    var oBigImg = document.getElementById('js_m_xqxq_big');
    var oneHeight = aList[0].offsetHeight+20;
    var oDataTable = document.getElementById('js_m_xqxq_data');
    var aDataTable = getByClass(oDataTable,'js_m_data_div');
    var oLoadImg = aList[0].getElementsByTagName('img')[0];
    var oStyle = document.getElementById('js_m_xqxq_style');
    var oDiv_info = document.getElementById('oP_info');
    if(oLoadImg.getAttribute('big_pic')!=""){
    	oBigImg.src= oLoadImg.getAttribute('big_pic');
    }
    if(aDataTable.length>0){
        aDataTable[0].style.display = 'block';
        mZxxqData(aDataTable[0].id);
    }
    var oSpan_info = document.createElement('span');
    oSpan_info.className = 'f14px';
    oStyle.innerHTML = 'ã'+oLoadImg.getAttribute('space_name')+'ã';
    oSpan_info.innerHTML = ''+oLoadImg.getAttribute('space_info')+'';
    oDiv_info.appendChild(oSpan_info);
    //è®¡ç®ulçå®½åº¦
    oList.style.height =oneHeight*aList.length+'px';

    for(var i = 0; i < aList.length; i++){
        (function(index){
            aList[i].onclick = function(){
                iNum = index;
                showData(iNum);
            };
        })(i);
    }
    oPrev.onclick = function(){
        iNow--;
        iNum--;
        if(iNow<=0){
            iNow = 0;
        }
        if(iNum<=0){
            iNum =0;
        }
        showData(iNum);
        startMove(oList,{top:-oneHeight*iNow},{time:1000});
    }
    oNext.onclick = function(){
        iNow++;
        iNum ++;
        if(iNow >= aList.length-3){
            iNow = aList.length-3;
        }
        if(iNum >= aList.length-1){
            iNum = aList.length-1;
        }
        showData(iNum);
        startMove(oList,{top:-oneHeight*iNow},{time:1000});
    };
    function showData(iNum){
        var oSmImg = aList[iNum].getElementsByTagName('img')[0];
        var oSrc = oSmImg.getAttribute('big_pic');
        var oType = oSmImg.getAttribute('space_name');
        var oSpace_info = oSmImg.getAttribute('space_info');
        oStyle.innerHTML = 'ã'+oType+'ã';
        oSpan_info.innerHTML = ''+oSpace_info+'';
        oBigImg.src=oSrc;
        var oTableId = oSmImg.getAttribute('table_id');
        for(var j = 0; j < aDataTable.length; j++){
            if(oTableId==aDataTable[j].id){
                aDataTable[j].style.display = 'block';
                mZxxqData(aDataTable[j].id,show);
            }else{
                aDataTable[j].style.display = 'none';
            };
        };
    }
};
//è£ä¿®ç°åºéæä¸é¢çæ°æ®çåæ¢
function mZxxqData(id,show){
    var oNav = document.getElementById(id);
    var aNav = getByClass(oNav,'b_w358px');
    var aCon = getByClass(oNav,'b_list_t_con_div');
    var aTip = getByClass(oNav,'b_tip');
    if(show){
        for(var k = 0; k < aNav.length; k++){
            removeClass(aNav[k],'hover');
            aCon[k].style.display = 'none';
            aTip[k].style.display = 'none';
            addClass(aNav[0],'hover');
            aCon[0].style.display = 'block';
            aTip[0].style.display = 'block';
        }
    }
    for(var i = 0; i < aNav.length; i++){
        (function(index){
            aNav[i].onclick = function(){
                for(var j = 0; j < aNav.length; j++){
                    removeClass(aNav[j],'hover');
                    aCon[j].style.display = 'none';
                    aTip[j].style.display = 'none';
                }
                addClass(aNav[index],'hover');
                aCon[index].style.display = 'block';
                aTip[index].style.display = 'block';
            }
        })(i);
    };
};

//é¢çº¦æ¥åè¡¨åéªè¯
function mYYForm(){
	
    var oForm = document.getElementById('js_m_yy_form');
    var aInputTxt = getByClass(oForm,'js_m_yy_txt');
    var oTel = document.getElementById('js_m_yy_tel');
    var oSbm = document.getElementById('js_m_yy_sbm');
    var oldArrValue = [];
    var oldValue;
    var oCheckW = document.getElementById('js_m_yy_ckbox');
    var aCheckBox = oCheckW.getElementsByTagName('input');
    var arrChecked = [];
    $(".check_info").click(function(){
        $(this).prev("label").trigger("click");
    });
    $(".zdy_check").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).siblings("input").val("");
        }else{
            $(this).addClass("active");
            $(this).siblings("input").val( $(this).siblings("input").attr("data-va"));
        }
        arrChecked=[];
//        $(oCheckW).children('.b_tip').css('display','inline-block');
        for(var j = 0; j < aCheckBox.length; j++){
            if(aCheckBox[j].getAttribute('value')!=""){
                arrChecked.push(aCheckBox[j]);
//                $(oCheckW).children('.b_tip').css('display','none');
            }
        };
    });
    var str = window.location.href.split("/").pop();
    var arr = /\d/.exec(str);
    var value =0;
    if(arr&&arr.length>0){
        value = arr[0];
    }
    var $check = $("input[data-va="+value+"]");
    if($check){
        $check[0].value=value;
        $check.siblings(".zdy_check").addClass("active");
    }
    if($(".subscribeForm").length > 0) return;
    oTel.onkeyup=function(){
        this.value=this.value.replace(/[^\d]/g,'');
    };
    oTel.onafterpaste=function(){
        this.value=this.value.replace(/\D/g,'');
    };
    for(var i = 0; i < aInputTxt.length; i++){
        oldArrValue.push(aInputTxt[i].value);
        (function(index){
            aInputTxt[index].onfocus = function(){
                oldValue = this.value;
                this.value = '';
                this.style.color = '#333';
                this.style.border = '1px solid #f00';
            };
            aInputTxt[index].onblur = function(){
                if(this.value!=null && this.value.trim().length>0){
                    this.onfocus = null;
                    this.style.border = '1px solid #e8e8e8';
                    $(this).next('.b_tip').css('display','none');
                    if($(this).attr('name')=='user_name'){
                        var re = new RegExp(/\d+/);
                        if(re.test($(this).val())){
                            $(this).css('border','1px solid #f00');
                            $(this).next('.b_tip').css('display','inline').html('è¯·è¾å¥æ­£ç¡®çå§å');
                            return false;
                            stopDefault();
                        };
                    };
                    if($(this).attr('name')=='city_name'){
                        var re = new RegExp(/\d+/);
                        if(re.test($(this).val())){
                            $(this).css('border','1px solid #f00');
                            $(this).next('.b_tip').css('display','inline').html('è¯·è¾å¥æ­£ç¡®çåå¸');
                            return false;
                            stopDefault();
                        };
                    };
                    if($(this).attr('id')=='js_m_yy_tel'){
                        var rl=/^1[3|4|5|8|7][0-9]\d{8}$/;
                        if(!rl.test($(this).val())){
                            $(this).css('border','1px solid #f00');
                            $(this).next('.b_tip').css('display','inline');
                            return false;
                            stopDefault();
                        };
                    }
                }else{
                    if($(this).next('.b_tip').css('display')=='none'){
                        this.style.color = '#999';
                        this.value = oldValue;
                        this.style.border = '1px solid #e8e8e8';
                    }
                };

            };
        })(i);
    };
    for(var j = 0; j < aCheckBox.length; j++){
        if(aCheckBox[j].getAttribute('value')!=""){
            arrChecked.push(aCheckBox[j]);
        }
        $(aCheckBox[j]).bind('click',function(){
            if($(this)[0].getAttribute('value')!=""){
                arrChecked.push(aCheckBox[j]);
                $(oCheckW).children('.b_tip').css('display','none');
            }else{
                arrChecked.pop(aCheckBox[j]);
            };
        })
    };
    oSbm.onclick = function(){
//        if(arrChecked.length==0){
//            $(oCheckW).children('.b_tip').css('display','inline-block');
//            return false;
//            stopDefault();
//        };
        for(var i = 0; i < aInputTxt.length; i++){
            if(aInputTxt[i].value == oldArrValue[i]){
                aInputTxt[i].style.border = '1px solid #f00';
                $(aInputTxt[i]).next('.b_tip').css('display','inline');
                return false;
                stopDefault();
            }
        };
        var rl=/^1[3|4|5|8|7][0-9]\d{8}$/;
        if(!rl.test(oTel.value)){
            oTel.style.border = '1px solid #f00';
            $(oTel).next('.b_tip').css('display','inline');
            return false;
            stopDefault();

        };

    };
};
function mChief_cart(){
    var oId = document.getElementById('js_fetch_data');
    if(typeof oId == 'undefined')return;
    var $addCart = $('#js_m_order_btn');
    var oIdValue = oId.innerHTML;
    $addCart.bind('click',function(){

        if($(this).hasClass('js_order_add')){
            $.ajax({
                url:"/home/chief/chief_cart_add",
                data:{id:oIdValue},
                type:'get',
                dataType:'json',
                success:function(data){
                    if(data.result == 1){
                        for(var i in data.data){
                            (function(index){
                                if(data.data[index].id==oIdValue){
                                    var html = '<div class="w-dbxx-box fl">'+
                                        '<div class="w-dbxx clearfix">'+
                                        '<div class="little-box-img fl">'+
                                        '<a href="/gongzhang/'+data.data[index].id+'.html">'+
                                        '<img src="'+data.data[index].pic_url+'">'+
                                        '</a>'+
                                        '</div>'+
                                        '<div class="little-box-list fl">'+
                                        '<ul>'+
                                        '<li class="first-li clearfix">'+
                                        '<a chief_id='+data.data[index].id+' href="/gongzhang/'+data.data[index].id+'.html" class="fl">'+data.data[index].name+
                                        '</a>'+
                                        '<a href="javascript:;" class="fr js_m_del_btn" style="display:inline-block">'+
                                        'å é¤'+
                                        '</a>'+
                                        '</li>'+
                                        '<li class="li2-bg">'+
                                        '<span class="star'+data.data[index].level+' active"></span>'+
                                        '</li>'+
                                        '<li>'+
                                        'å·² &nbsp;ç­¾&nbsp;çº¦ï¼<span>'+data.data[index].sum_work+'å</span>'+
                                        '</li>'+
                                        '</ul>'+
                                        '</div>'+
                                        '</div>'+
                                        '</div>';
                                    if($('#w-tc').css('display')=='block'){
                                        $(html).appendTo($('#js_choose_wrap'));
                                    }else{
                                        $('#w-tc').css('display','block');
                                        $(html).appendTo($('#js_choose_wrap'));
                                    }
                                }
                            })(i);
                        };
                        $addCart.removeClass('js_order_add').addClass('js_order_del');
                        /*å¦ææµ®å±å±ç°ï¼å¹¶ä¸è¿æ²¡æç©ºdivçæ¶åæå¥ä¸ä¸ª*/
                        if($('#w-tc').css('display') == 'block' && $('body').find('#m_empty').length ==0){
                            $('#footer').after($('<div id="m_empty" style="width:100%;height:105px;background:#3e4045"></div>'));
                        }
                    }
                    if(data.result==0){
                        alert(data.message);
                        return;
                    }
                    $('#js_m_cart_count').html(data.count);
                }
            });
        }else{
            return;
        };
    });
};
$('body').each(function(){
    $('.js_m_del_btn',this).bind('click',function(){
        var _this = this;
        var _thisId = $(_this).prev('a').attr('chief_id');
        /*ç§»é¤æ¯æä¸ªæ¶é´è¯·æ±çè¿ç¨*/
        $.ajax({
            url:"/home/chief/chief_cart_del",
            data:{id:_thisId},
            type:'get',
            dataType:'json',
            success:function(data){
                if(data.result==2){
                    $(_this).parents('.w-dbxx-box').remove();
                    $('#w-tc').css('display','none');
                    //å¦ææµ®å±éèï¼é£ä¹åºé¨çç©ºdivä¹å°±å¯ä»¥ç§»é¤äº
                    $('#m_empty').remove();
                }
                if(data.result==1){
                    $(_this).parents('.w-dbxx-box').remove();
                    /*å ä¸ºæè¯·æ±æå¡å¨çæ¶é´ï¼æä»¥è®¾ç½®ä¸ªæ¶é´ï¼è®©ä¸ä¸ä¸ªå é¤æä¸ç¹çæ¶é´é´éï¼å¦åä¼åºç°ç¹å é¤å é¤ä¸æçæåµ*/
                    $('.js_m_del_btn').css('cursor','default');
                    setTimeout(function(){
                        $('.js_m_del_btn').css('cursor','pointer');
                    },1000);
                }
                $('#js_m_cart_count').html(data.count);
            }
        });
        var oId = document.getElementById('js_fetch_data');
        if(oId){
            var oIdValue = oId.innerHTML;
            var $addCart = $('#js_m_order_btn');
            if(oIdValue == _thisId){
                $addCart.removeClass('js_order_del').addClass('js_order_add');
            };
        };
    });
});
//å¦ææè´­ç©è½¦çåå¨åºé¨å ä¸ä¸ªç©ºçdivï¼é¿åæ¡ä½footer
(function(){
    /*å¶ä»æ²¡æå å¥é¢çº¦çé¡µé¢å¦ææè¿ä¸ªæµ®å±å¹¶ä¸è¿ä¸ªæµ®å±æ¯å±ç°çé½çæä¸ä¸ªç©ºçdiv*/
    if($('#w-tc').css('display') == 'block' &&  $('body').find('#m_empty').length ==0){
        $('#footer').after($('<div id="m_empty" style="width:100%;height:105px;background:#3e4045"></div>'));

    }else{
        /*å¦åç´æ¥ç§»é¤ï¼ä¸è¿°å·²ç»å¤æ­äºææ²¡æäº*/
        $('#m_empty').remove();
    };
})();
//SEOä¼åæ°å¢tab
function mSeoTab(){
    var oUl = document.getElementById('js_related_area_ul');
    var oBox = document.getElementById('js_related_area_d');
    var aLi = oUl.getElementsByTagName('li');
    var aDiv = getByClass(oBox, 'js_related_item');
    for(var i = 0; i < aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onclick = function(){
            for(var j = 0; j < aLi.length; j++){
                removeClass(aLi[j],'active');
                aDiv[j].style.display = 'none';
            }
            addClass(this,'active');
            aDiv[this.index].style.display = 'block';
        }
    }
}
function mCheckJs(){
    //æ´»å¨è¯¦æè¡¨åçéªè¯
    //var oDiv = document.getElementById('js_m_act_form') ;
    //æ´»å¨åè¡¨é¡µçç¦ç¹å¾
    var oBigImg = document.getElementById('js_m_big') ;
    //ä¸å±è®¾è®¡éé¢çç¦ç¹å¾
    var oMzssj = document.getElementById('js_b_big_pic');
    //è£ä¿®è¯¦æéçæ·åçå·¦å³æ»å¨
    var oZxxq = document.getElementById('js_m_zxxq_list');
    //è£ä¿®è¯¦æéçå¾ççä¸ä¸æ»å¨
    var oZxxqImg = document.getElementById('js_m_pic_show');
    //é¢çº¦è¡¨åéªè¯
    var oYYForm = document.getElementById('js_m_yy_form');
    //å·¥é¿è¯¦æé¡µé¢çº¦å·¥é¿
    var oGzDetai = document.getElementById('js_m_phone_btn');
    /*//éæ©å·¥é¿åçé¢çº¦
     var oYYFormGz = document.getElementById('xlgz-apply');
     if(oYYFormGz){
     mYYForm('xlgz-apply');
     }*/
    //SEOä¼åæ°å¢tab
    var oSeoTab = document.getElementById('js_related_area_ul');
    if(oSeoTab){
        mSeoTab();
    }
    if(oYYForm){
        mYYForm();
    };
    if(oZxxqImg){
        mZxxqTabTop();
    };
    if(oZxxq){
        mZxxqTab();
    };
    /*if(oDiv){
     mCheckForm();
     };*/
    if(oBigImg){
        mTabChange();
    };
    if(oMzssj){
        bTabSwitch();
    };
    if(oGzDetai){
        mChief_cart();
    };
};
mCheckJs();

//ç¹å»è·åéªè¯ç æ¾ç¤ºå¾çéªè¯ç 
$("input.getCode").bind("click", function () {
    var code = $(this).parents(".code");
    code.find(".picYzm").show();
});

//å³é­éªè¯ç æµ®å±
$(document).delegate(".code .close", "click", function () {
    var code = $(this).parents(".code");
    code.find(".picYzm").hide();
});