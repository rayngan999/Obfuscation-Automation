                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}












(function $vpfn_5bW63Q_ubUZT0RGy6bk2pw14$1($){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

$.ns("vp.widget");


$(window).load(function $vpfn_5bW63Q_ubUZT0RGy6bk2pw19$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$("body").append("<div class='loading-box-message loading-box-preload'></div>");
});







vp.widget.showLoadingBox=function $vpfn_kNqEMDUuec5Twb_IpZUqCg30$31(sMessage)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!window.__loadingBox)
{
window.__loadingBox=new vp.widget.LoadingBox();
}
window.__loadingBox.show(sMessage);
};






vp.widget.hideLoadingBox=function $vpfn_O2kok0VQYiP4UnxGjBc5ww44$31()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(window.__loadingBox)
{
window.__loadingBox.hide();
}
};







vp.widget.LoadingBox=function $vpfn_6dK53aLGlRjLmkKqhaQBZg58$27()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;





this.message="";





this.skin="";





this.delay=300;





this.manualHide=false;






this.veilOpacity=0;

var _oLoadingBoxElement=null;
var _oLoadingBoxIframe=null;
var _oBackgroundBlock=null;

var _iShowTimer=null;

var _visible=false;






this.show=function $vpfn_cYvvC3uxVGAG5RNfN5i5BQ106$20(sMessage,iWidth)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_iShowTimer)
{
window.clearTimeout(_iShowTimer);
}

_visible=true;

var fnShow=function $vpfn_omWlqvuVoydOjZNlA7AgdQ115$25()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
_show(sMessage);
};

if(this.delay<=0)
{
fnShow();
}
else
{
_iShowTimer=setTimeout(fnShow,this.delay);
}
};


var init=function $vpfn_6ZKi_z4kgG2pdtKlgQcPWw131$19()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!_oLoadingBoxElement)
{

_oLoadingBoxElement=document.createElement("DIV");
$(_oLoadingBoxElement).addClass("loading-box-wrapper").html(
'<div class="loading-box">'+
'<div class="loading-box-inner">'+
'<span class="loading-box-message" id="progressBarMessage"></span>'+
'</div>'+
'</div>'
);
document.body.appendChild(_oLoadingBoxElement);

if(me.skin)
{
$(".loading-box").addClass("loading-box-skin-"+me.skin);
}


_oBackgroundBlock=document.createElement("DIV");
_oBackgroundBlock.setAttribute("unselectable","on");
var $oBackgroundBlock=$(_oBackgroundBlock);
if(me.veilOpacity>0)
{
$oBackgroundBlock.css("opacity",me.veilOpacity);
}
$oBackgroundBlock.addClass("loading-box-veil");


$oBackgroundBlock.on("mousedown",function $vpfn_5bW63Q_ubUZT0RGy6bk2pw162$50(event){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
event.preventDefault();
}).on("mouseup",function $vpfn_5bW63Q_ubUZT0RGy6bk2pw164$33(event){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
event.preventDefault();
}).on("click",function $vpfn_5bW63Q_ubUZT0RGy6bk2pw166$31(event){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
event.preventDefault();
});

document.body.appendChild(_oBackgroundBlock);
}
};


var _show=function $vpfn_dkIblQlldE$utaaQjcxijw175$20(sMessage,iWidth)
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!_visible)
{
return;
}


init();




if(sMessage)
{
me.message=sMessage;
}

var textArea=document.getElementById('progressBarMessage');
if(textArea)
{
textArea.innerHTML=me.message;
}




$(_oLoadingBoxElement).show();
$(_oBackgroundBlock).show();

var $window=$(window);
$window.on("resize",function $vpfn_5bW63Q_ubUZT0RGy6bk2pw207$33(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.redraw();
}).on("scroll",function $vpfn_5bW63Q_ubUZT0RGy6bk2pw209$28(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.redraw();
});

if(!me.manualHide)
{

$window.unload(function $vpfn_5bW63Q_ubUZT0RGy6bk2pw216$31(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.hide();
});

$(document).on("stop",function $vpfn_5bW63Q_ubUZT0RGy6bk2pw220$39(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.hide();
});
}

document.body.style.cursor='progress';

me.redraw();
};




this.hide=function $vpfn_qQbxpO5_C_B1ereAAKTwug233$20()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(_iShowTimer)
{
window.clearTimeout(_iShowTimer);
}

if(_visible)
{
_visible=false;
}

if(_oLoadingBoxElement)
{
$(_oLoadingBoxElement).hide();
$(_oBackgroundBlock).hide();

var $window=$(window);
$window.off("resize",function $vpfn_5bW63Q_ubUZT0RGy6bk2pw251$38(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.redraw();
}).off("scroll",function $vpfn_5bW63Q_ubUZT0RGy6bk2pw253$33(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.redraw();
});
$(document).off("stop",function $vpfn_5bW63Q_ubUZT0RGy6bk2pw256$40(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.hide();
});

document.body.style.cursor='auto';
}
};





this.redraw=function $vpfn_0eeDgBoc2D0bc18Uu056gQ268$22()
{if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var $window=$(window);
var $oLoadingBoxElement=$(_oLoadingBoxElement);
var loadingBoxRect=$oLoadingBoxElement.clientRect();

var iTop=Math.floor(($window.height()-loadingBoxRect.height)/2)+$window.scrollTop();
var iLeft=Math.floor(($window.width()-loadingBoxRect.width)/2)+$window.scrollLeft();

$oLoadingBoxElement.css("top",iTop);
$oLoadingBoxElement.css("left",iLeft);
};
};

})(jQuery);