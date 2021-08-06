                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}






(function $vpfn_syVV6B0vZvGs8sSCiJizrw8$1($){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
$(document).ready(
function $vpfn_syVV6B0vZvGs8sSCiJizrw10$8(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}


$('.footer-owner-nation').click(function $vpfn_syVV6B0vZvGs8sSCiJizrw13$44(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.spot.track('FooterFY14Redesign-OwnerNation');
});


$('.footer-refer-a-friend a').click(function $vpfn_syVV6B0vZvGs8sSCiJizrw18$48(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var url=$(this).attr('href');
window.open(url,'_blank','toolbar=1,location=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,width=1000,height=700,top=50,left=50');
vp.spot.track('FooterFY14Redesign-ReferaFriend');
return false;
});

var optInHandler=function $vpfn_TmwueAmgMLotHY0QCuWsKA25$31(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var emailSignUpForm=document.createElement("form");
emailSignUpForm.setAttribute("method","post");
emailSignUpForm.setAttribute("action","/vp/insider_offer_signup.aspx?xnav=TsrItem&signup_source_url=ns%2Fdefault.aspx&pop=4");
emailSignUpForm.setAttribute("target","emailOfferPop");

var hiddenField=document.createElement("input");
hiddenField.setAttribute("type","hidden");
hiddenField.setAttribute("name","email");
hiddenField.setAttribute("value",$('#optInEmail').val());
emailSignUpForm.appendChild(hiddenField);
document.body.appendChild(emailSignUpForm);

window.open('','emailOfferPop','toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500,height=700');

emailSignUpForm.submit();
};

$('#optInEmail').on('keydown',function $vpfn_syVV6B0vZvGs8sSCiJizrw43$43(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(e.which==13)
{
optInHandler();
}
});


$("#emailOptinButton").click(function $vpfn_syVV6B0vZvGs8sSCiJizrw51$41(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e.preventDefault();
optInHandler();
});


$("input[name='vatToggle']:radio").on('change',
function $vpfn_syVV6B0vZvGs8sSCiJizrw58$16(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var vatFlag=$(this).val();
vp.widget.showLoadingBox();

$.ajax({
url:"/tax-inclusivity-switch.aspx?v=cava&t="+vatFlag
}).done(
function $vpfn_syVV6B0vZvGs8sSCiJizrw65$24(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var cookieValue={};
cookieValue["TXI"]=vatFlag;
$.cookies.set({name:"PSC",value:cookieValue,permanent:true});
window.location.reload(true);
}
);
}
);



$('.footer-nav-menu-root').click(
function $vpfn_syVV6B0vZvGs8sSCiJizrw78$16(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var openMenus;
var ua=navigator.userAgent;
if(ua.indexOf("Android")>=0)
{
var androidversion=parseFloat(ua.slice(ua.indexOf("Android")+8));
if(androidversion<4.4){

openMenus=$('.footer-nav-menu-root.footer-nav-open');
if(openMenus.length)
{
openMenus.removeClass('footer-nav-open');
$('.footer-navigation-menu').removeClass('footer-navigation-menu-open');
}
else
{
$(this).addClass('footer-nav-open');
$('.footer-navigation-menu').addClass('footer-navigation-menu-open');
}
return;
}
}

openMenus=$('.footer-navigation-menu.footer-nav-open');
if(openMenus.length)
{
openMenus.removeClass('footer-nav-open');
}

$(this).toggleClass('footer-nav-open');

if($(this).hasClass('footer-nav-open'))
{
vp.spot.track('Footer:Open');
}

}
);
}
);
})(jQuery);
