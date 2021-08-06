                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}(function $vpfn_MQHcRiwvp5yVyBDl3G918w1$1($){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}




$.fn.responsiveImage=function $vpfn_FF$YNW0rbs6xG8nkqrFZtA6$27(src,src2x){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
this.each(function $vpfn_MQHcRiwvp5yVyBDl3G918w7$18(i,el){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
el.src=src;

if(!src2x){
el.srcset="";
return;
}

el.attributes["data-srcset-set"]="1";
el.srcset=src+" 1x, "+src2x+" 2x";
});
};


if(!('srcset'in document.createElement('img'))){
return;
}


if(!('MutationObserver'in window)){
return;
}

$(document).ready(function $vpfn_MQHcRiwvp5yVyBDl3G918w30$22(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}






$("div.responsive-image img[srcset]").each(function $vpfn_MQHcRiwvp5yVyBDl3G918w37$51(i,el){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var observer=new MutationObserver(function $vpfn_MQHcRiwvp5yVyBDl3G918w38$48(mutations){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
mutations.forEach(function $vpfn_MQHcRiwvp5yVyBDl3G918w39$34(m){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}



if(!m.target.attributes["data-srcset-set"]){
m.target.srcset="";
}

observer.disconnect();
});
});

observer.observe(el,{attributes:true,attributeFilter:["src"]});
});
});

})(jQuery);