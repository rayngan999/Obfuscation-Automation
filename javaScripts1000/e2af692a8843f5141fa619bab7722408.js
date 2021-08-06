                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                if(!window.__td){window.__MT=100;window.__ti=0;window.__td=[];window.__td.length=window.__MT;window.__noTrace=false;}



(function $vpfn_vyPqjNGVrPlYBpY3lJXUdg5$1($){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
window.SiteSearch=function $vpfn_9W5haEkJcMqb6ELZP5jngA6$24(searchField,searchForm,suggestionDisplayHandler,isSolrSearchEnabled){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var me=this;
this.suggestionCache={};

this.processSearch=function $vpfn_BG2u0$_1aRw_0FKHsAuLkg10$29(keywords){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var sLocation='/search/'+keywords+'.aspx';
window.location=sLocation;
};

this.getSuggestionResults=function $vpfn_QgPamdR8tGaPe5S_BajX5Q15$36(keywords){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

if(!suggestionDisplayHandler){
return;
}

if(keywords===''){
suggestionDisplayHandler(me,keywords,new Array());
return;
}

if(me.suggestionCache[keywords]){
suggestionDisplayHandler(me,keywords,me.suggestionCache[keywords]);
return;
}

var getSuggestionCallbackHandler=function $vpfn_F1Nny_XExIWM0jMYRSiuAQ31$47(oSuggestions){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
me.suggestionCache[keywords]=oSuggestions;
suggestionDisplayHandler(me,keywords,me.suggestionCache[keywords]);
};

var url;
if(isSolrSearchEnabled){
url='/searchresults/api/autocomplete/'+keywords;

$.ajax({
type:"GET",
contentType:"application/json; charset=utf-8",
url:url
}).done(function $vpfn_vyPqjNGVrPlYBpY3lJXUdg44$24(results){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
getSuggestionCallbackHandler(results);
}).fail(function $vpfn_vyPqjNGVrPlYBpY3lJXUdg46$24(jqXHR,textStatus,errorThrown){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
vp.instrumentation.logError("AutocompleteServiceFailed: "+errorThrown+". text status: "+textStatus);
});

}else{
try{
$.ajaxAsmx({
url:'/Sales/SiteSearch/TypeAheadWebService.asmx',
methodName:'KeywordSuggestionList',
success:getSuggestionCallbackHandler,
error:function $vpfn_vyPqjNGVrPlYBpY3lJXUdg56$27(jqXHR,textStatus,errorThrown){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}vp.instrumentation.logError("TypeAheadWebServiceFailed: "+errorThrown+". text status: "+textStatus);},
data:{sequenceOfCharacters:keywords}
});
}
catch(ex){}
}


};

this.SearchBox=new SearchBox({
searchField:searchField,
searchForm:searchForm,
suggestionHandler:me.getSuggestionResults,
performSearchHandler:me.processSearch
});
};

window.SearchBox=function $vpfn_zr8RvzfqN2h2uElY4iQaXQ74$23(settings){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(!settings){
settings={};
}

var me=this;

this.lastEntry="";

this.currentKeyword=function $vpfn_9VPwfm0j$aQzE7PyHKjGdQ83$30(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(settings.searchField&&settings.searchField.val()!==""){
return me.clean(settings.searchField.val());
}

return"";
};

this.clean=function $vpfn__f2EloMOMQ$vmfTFpTwH7Q91$21(keywords){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}

var searchKeywords=keywords.replace(/\s+/g," ");

var re=new RegExp("[/&!\\?@#\\$%\\^\\*\\(\\){}\[\\]\+=,\\.`~\\\\\\|/:;'\\\"\\<\\>\\s]+","g");
searchKeywords=searchKeywords.replace(re," ");


searchKeywords=searchKeywords.replace(/(^\s*)|(\s*$)/gi,"");


searchKeywords=searchKeywords.replace(/ /gi,"-");


searchKeywords=searchKeywords.replace(/-+/gi,"-");

return searchKeywords;
};

this.processSearch=function $vpfn_BG2u0$_1aRw_0FKHsAuLkg110$29(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var keywords=me.currentKeyword();

if(keywords)
{
settings.performSearchHandler(keywords);
}
};

this.getSuggestionResults=function $vpfn_QgPamdR8tGaPe5S_BajX5Q119$36(keywords,fnSuccessHandler){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
if(window.location.protocol.indexOf("https")!==-1){
return;
}


if(keywords===me.lastEntry){
return;
}

me.lastEntry=keywords;

settings.suggestionHandler(keywords);
};

this.suggestionUpdate=function $vpfn_2mF2opG4RVETnCNxN0yo3g134$32(){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
var keywords=me.currentKeyword();
me.getSuggestionResults(keywords,settings.suggestionDisplayCallback);
};

if(settings.searchForm)
{
$(settings.searchForm).on("submit",function $vpfn_vyPqjNGVrPlYBpY3lJXUdg141$48(e){if(!window.__noTrace){__td[__ti]=arguments;__ti=__ti>=__MT?0:__ti+1;}
e.preventDefault();
me.processSearch();
});
}

$(settings.searchField).keyup(me.suggestionUpdate);
$(settings.searchField).change(me.suggestionUpdate);
};

$(document).ready(function(){

});

})(jQuery);


