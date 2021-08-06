
try{// create a test node off the browser screen to calculate high contrast mode
var testNode = document.createElement("div");
testNode.className = "highContrastTestNode";
document.body.appendChild(testNode);
// look at the computed style for the test node
var styles = null;
try {
	styles = document.defaultView.getComputedStyle(testNode, "");
} catch(e) {
	styles = testNode.currentStyle;
}
var testImg = styles.backgroundImage;
if ((styles.borderTopColor == styles.borderRightColor) || (testImg != null && (testImg == "none" || testImg == "url(invalid-url:)" ))) {
	document.getElementsByTagName("body")[0].className+=" lotusImagesOff";
}
document.body.removeChild(testNode);

}catch(e){console.log("Module 'wp_one_ui_30': ",e);}
try{(function(){
if(!i$.isIE){
i$.addOnLoad(function(){
var _1=document.createElement("div");
var _2=ibmCfg.themeConfig.themeWebAppBaseURI;
_1.style.cssText="border:1px solid;border-color:red green;position:absolute;height:5px;top:-999px;background-image:url(\""+_2+"/icons/blank.gif\");";
document.body.appendChild(_1);
var _3=null;
try{
_3=document.defaultView.getComputedStyle(_1,"");
}
catch(e){
_3=_1.currentStyle;
}
var _4=_3.backgroundImage;
if((_3.borderTopColor==_3.borderRightColor)||(_4!=null&&(_4=="none"||_4=="url(invalid-url:)"))){
document.getElementsByTagName("body")[0].className+=" wpthemeImagesOff";
}
document.body.removeChild(_1);
});
}
})();


}catch(e){console.log("Module 'wp_theme_high_contrast': ",e);}
try{(function(){
var _1=false;
if(typeof wptheme==="undefined"||!wptheme){
wptheme={};
}
i$.mash(wptheme,{togglePageMode:function(){
return i$.modules.loadDeferred().then(function(){
var _2=i$.fromPath("com.ibm.mashups"),_3=_2?com.ibm.mashups.builder.model.Factory.getRuntimeModel():null,_4=_2?com.ibm.mashups.enabler.user.Factory.getUserModel():null,_5=document.getElementsByTagName("body")[0],_6=function(_7){
if(_2){
com.ibm.mashups.services.ServiceManager.getService("eventService").broadcastEvent("com.ibm.mashups.builder.changePageMode",_7);
_3.getCurrentPage().setPageMode(_7);
}
i$.fireEvent("wptheme/contextMenu/invalidate/all");
};
if((!_2&&!i$.hasClass(_5,"edit-mode"))||(_2&&_4.getAnonymousMode()!=com.ibm.mashups.enabler.user.AnonymousMode.ANONYMOUS&&_3.getCurrentPage().getPageMode()!="edit")){
_6("edit");
i$.addClass(_5,"edit-mode");
if(!_1){
if(!i$.isIE&&!i$.isOpera&&_2){
window.onbeforeunload=function(){
if(com.ibm.mashups.builder.model.Factory.getRuntimeModel().getCurrentPage().isDirty()){
return com.ibm.mm.builder.coreWidgetsStrings.I_PAGE_SAVE_WARNING;
}
};
}
_1=true;
}
}else{
_6("view");
i$.removeClass(_5,"edit-mode");
}
},function(_8){
console.log("Error going into edit mode. Most likely a session timeout. Refreshing. "+_8);
window.location.reload();
});
},mobileGoToSearch:function(id,_9,_a,_b,_c,_d,_e){
var _f=document.getElementById(_c);
var _10=document.getElementById("wpthemeSearchBoxInput");
if(i$.hasClass(_f,_9)){
wptheme.toggleMobileNav(id,_9,_a,_b,_c,_d,_e);
if(_10){
setTimeout(function(){
_10.focus();
},550);
}
}else{
if(_10){
_10.focus();
}
}
},mobileNavResizeBinding:null,mobileNavSideLastExpanded:[],mobileNavSideExpanded:[],mobileNavSideTogglingRoot:false,resizeMobileNavSide:function(e){
var _11=document.getElementsByTagName("header")[0];
var _12,id;
_12=document.getElementById("wpthemeNavRoot");
if(_12){
_12.style.top=_11.offsetHeight+"px";
_12.style.height=(window.innerHeight-_11.offsetHeight)+"px";
}
for(var i=0;i<wptheme.mobileNavSideExpanded.length;i++){
id=wptheme.mobileNavSideExpanded[i];
id=id.substr(0,id.length-4)+"Subnav";
_12=document.getElementById(id);
if(_12){
_12.style.top=_11.offsetHeight+"px";
_12.style.height=(window.innerHeight-_11.offsetHeight)+"px";
}
}
},animateMobileNavSidePanel:function(_13,_14,_15){
var _16=_13.offsetLeft;
if(ibmCfg.themeConfig.isRTL){
_16=parseInt(_13.style.right);
}
if(this.mobileNavSideTogglingRoot&&_14<_16){
_14=-_13.offsetWidth;
}
var _17=0;
var _18=Math.ceil(Math.abs(_14-_16)/5);
if(_16==_14){
_18=0;
}else{
if(_16>_14){
_18=-_18;
}
}
if(_18>0&&!this.mobileNavSideTogglingRoot){
if(ibmCfg.themeConfig.isRTL){
_13.style.clip="rect(0px,0px,"+_13.offsetHeight+"px,0px)";
}else{
_13.style.clip="rect(0px,"+_13.offsetWidth+"px,"+_13.offsetHeight+"px,"+_13.offsetWidth+"px)";
}
}
var _19=setInterval(function(){
if(_18>0&&_16+_18>_14){
_18=_14-_16;
}
if(_18<0&&_16+_18<_14){
_18=-(_16-_14);
}
if(_18<0&&!wptheme.mobileNavSideTogglingRoot){
if(ibmCfg.themeConfig.isRTL){
_13.style.clip="rect(0px,"+(_13.offsetWidth-(_17-=_18))+"px,"+_13.offsetHeight+"px,0px)";
}else{
_13.style.clip="rect(0px,"+_13.offsetWidth+"px,"+_13.offsetHeight+"px,"+(_17-=_18)+"px)";
}
}
if(_18>0&&!wptheme.mobileNavSideTogglingRoot){
if(ibmCfg.themeConfig.isRTL){
_13.style.clip="rect(0px,"+(_17+=_18)+"px,"+_13.offsetHeight+"px,0px)";
}else{
_13.style.clip="rect(0px,"+_13.offsetWidth+"px,"+_13.offsetHeight+"px,"+(_13.offsetWidth-(_17+=_18))+"px)";
}
}
if(ibmCfg.themeConfig.isRTL){
_13.style.right=(_16+=_18)+"px";
}else{
_13.style.left=(_16+=_18)+"px";
}
if(_18>0&&_16>=_14||_18<0&&_16<=_14||_18==0){
clearInterval(_19);
_13.style.clip="";
if(_15){
_15.call();
}
}
},1);
},toggleMobileNav:function(id,_1a,_1b,_1c,_1d,_1e,_1f){
var _20=document.getElementById(id);
var _21=document.getElementById("wpthemeNavRootLink");
var _22=document.getElementById(id+"Link");
var _23=document.getElementById(id+"Access");
var _24=document.getElementById(id+"Subnav");
var _25=document.getElementsByTagName("header")[0];
var _26=document.getElementById("layoutContainers");
if(_20){
if(_1f==0){
if(i$.hasClass(_21,"wpthemeNavOpened")){
i$.removeClass(_21,"wpthemeNavOpened");
}else{
i$.addClass(_21,"wpthemeNavOpened");
}
}
if(i$.hasClass(_20,_1a)){
if(id==_1d&&_1e){
this.mobileNavSideTogglingRoot=true;
_20.style.top=_25.offsetHeight+"px";
_20.style.height=(window.innerHeight-_20.offsetTop)+"px";
if(ibmCfg.themeConfig.isRTL){
_20.style.right=(-_20.offsetWidth)+"px";
}else{
_20.style.left=(-_20.offsetWidth)+"px";
}
this.mobileNavResizeBinding=i$.bindDomEvt(window,"resize",this.resizeMobileNavSide);
}
i$.removeClass(_20,_1a);
_20.setAttribute("aria-expanded","true");
_22.setAttribute("aria-label",_1c);
_22.title=_23.innerHTML=_1c;
if(id==_1d&&_1e){
_25.style.position="fixed";
_25.style.width="100%";
_26.style.paddingTop=_25.offsetHeight+10+"px";
_25.style.zIndex="9998";
_25.style.top="0px";
this.animateMobileNavSidePanel(_20,0,function(){
if(wptheme.mobileNavSideLastExpanded.length==0){
wptheme.mobileNavSideTogglingRoot=false;
}
});
}
if(_1e){
if(id==_1d){
for(var i=0;i<this.mobileNavSideLastExpanded.length;i++){
document.getElementById(this.mobileNavSideLastExpanded[i]).onclick.call();
}
}else{
this.mobileNavSideExpanded.push(id+"Link");
_22.parentNode.parentNode.parentNode.onclick=_22.onclick;
}
}
if(_24&&_1e){
var _27=document.getElementById(_1d);
var _28=_27.parentNode;
if(_24.parentNode!=_28){
_24=_24.parentNode.removeChild(_24);
_28.appendChild(_24);
}
var _29=Math.min((_1f*70),Math.floor(window.innerWidth-_24.offsetWidth)-1);
_24.style.top=_27.offsetTop+"px";
_24.style.height=(window.innerHeight-_24.offsetTop)+"px";
if(this.mobileNavSideTogglingRoot){
if(ibmCfg.themeConfig.isRTL){
_24.style.right=(-_24.offsetWidth)+"px";
}else{
_24.style.left=(-_24.offsetWidth)+"px";
}
}else{
if(ibmCfg.themeConfig.isRTL){
_24.style.right=(_29-_24.offsetWidth)+"px";
}else{
_24.style.left=(_29-_24.offsetWidth)+"px";
}
}
i$.removeClass(_24,_1a);
this.animateMobileNavSidePanel(_24,_29,function(){
if(wptheme.mobileNavSideTogglingRoot&&id+"Link"==wptheme.mobileNavSideLastExpanded[wptheme.mobileNavSideLastExpanded.length-1]){
wptheme.mobileNavSideTogglingRoot=false;
}
});
}
}else{
if(_1e){
if(id==_1d){
this.mobileNavSideTogglingRoot=true;
this.mobileNavSideLastExpanded=this.mobileNavSideExpanded.slice(0);
for(var i=this.mobileNavSideExpanded.length-1;i>=0;i--){
document.getElementById(this.mobileNavSideExpanded[i]).onclick.call();
}
}else{
var _2a=id+"Link";
var i=-1;
for(var j=this.mobileNavSideExpanded.length-1;j>=0;j--){
if(this.mobileNavSideExpanded[j]==_2a){
i=j;
break;
}
}
if(i!=-1){
var _2b;
for(var j=this.mobileNavSideExpanded.length-1;j>=i;j--){
_2b=this.mobileNavSideExpanded.pop();
if(_2a!=_2b){
document.getElementById(_2b).onclick.call();
}
}
}
_22.parentNode.parentNode.parentNode.onclick=null;
}
}
if(_24&&_1e){
var _29=_24.offsetLeft;
if(ibmCfg.themeConfig.isRTL){
_29=parseInt(_24.style.right);
}
this.animateMobileNavSidePanel(_24,_29-_24.offsetWidth,function(){
i$.addClass(_24,_1a);
if(_24.parentNode!=_20){
_24=_24.parentNode.removeChild(_24);
_20.appendChild(_24);
}
});
}
if(id==_1d&&_1e){
_25.style.position="static";
_26.style.paddingTop="";
_25.style.width="auto";
_25.style.zIndex="auto";
this.animateMobileNavSidePanel(_20,-_20.offsetWidth,function(){
i$.addClass(_20,_1a);
_20.setAttribute("aria-expanded","false");
_22.setAttribute("aria-label",_1b);
_22.title=_23.innerHTML=_1b;
wptheme.mobileNavSideTogglingRoot=false;
});
i$.unbindDomEvt(this.mobileNavResizeBinding);
this.mobileNavResizeBinding=null;
}else{
i$.addClass(_20,_1a);
_20.setAttribute("aria-expanded","false");
_22.setAttribute("aria-label",_1b);
_22.title=_23.innerHTML=_1b;
}
}
}
},toggleMobileTopNav:function(_2c,_2d){
var _2e=document.getElementById("wpthemeTopNavToggleBtn");
var _2f=document.getElementById("wpthemeTopNavToggleBtnAccess");
var _30=document.getElementsByTagName("header")[0];
var _31=_30.children[0];
if(i$.hasClass(_2e,"wpthemeTopNavOpened")){
_31.style.display="none";
i$.removeClass(_2e,"wpthemeTopNavOpened");
_2e.setAttribute("aria-label",_2c);
_2e.title=_2f.innerHTML=_2c;
}else{
_31.style.display="block";
i$.addClass(_2e,"wpthemeTopNavOpened");
_2e.setAttribute("aria-label",_2d);
_2e.title=_2f.innerHTML=_2d;
}
this.resizeMobileNavSide();
}});
var _32=document.getElementById("wpthemeHelpLink");
var _33=document.getElementById("wpthemeHelpOnClick");
var _34=document.getElementById("wpthemeHelpAnchor");
if(!(_32===null&&_33===null)&&_34!=null){
if(_32!=null){
var _35=_32.innerHTML;
_34.onclick=function(){
window.open(_35,"wpthemeHelp","width=800,height=600");
};
}else{
if(_33!=null){
var _36=_33.innerHTML;
_34.onclick=function(){
eval(_36);
};
}
}
}
})();


}catch(e){console.log("Module 'wp_theme_edit': ",e);}
try{(function(){
var _1=ibmCfg.portalConfig.contentHandlerURI+((ibmCfg.portalConfig.contentHandlerURI.indexOf("?")<0)?"?":"&")+"uri=menu:${id}";
var _2=false;
var _3=function(){
return i$.hasClass(document.getElementsByTagName("body")[0],"edit-mode");
};
if(typeof wptheme==="undefined"||!wptheme){
wptheme={};
}
i$.mash(wptheme,{getWindowIDFromSkin:function(_4){
while((_4=_4.parentNode)!=null){
if(i$.hasClass(_4,"component-control")){
var m=_4&&(_4.className||"").match(/id-([\S]+)/);
return m&&m[1];
}
}
return null;
},getPortletState:function(_5){
var _6=i$.byId("portletState");
if(_6){
if(!_6._cache){
_6._cache=i$.fromJson(_6.innerHTML);
_6._cache._defaults={"windowState":"normal","portletMode":"view"};
}
if(_6._cache[_5]){
return _6._cache[_5];
}else{
return _6._cache._defaults;
}
}
return {};
},isValidOp:function(_7){
if(_7.visibility===false){
return false;
}
var _8=_7.metadata||{};
switch(_7.id){
case "ibm.portal.operations.changePortletMode":
return wptheme.getPortletState(_8.wid).portletMode!=_8.portletMode;
case "ibm.portal.operations.changeWindowState":
return wptheme.getPortletState(_8.wid).windowState!=_8.windowState;
default:
}
return true;
},operation:{changeToHelpMode:function(_9){
var _a=window.location.href;
if(_9.actionUrl){
if(_9.actionUrl.indexOf("?")==0){
var _b=_a.indexOf("#");
if(_b!=-1){
var _c=_a.substring(0,_b);
var _d=_a.substring(_b);
_a=_c+(_c.indexOf("?")==-1?"?":"&")+_9.actionUrl.substring(1);
_a+=_d;
}else{
_a+=(_a.indexOf("?")==-1?"?":"&")+_9.actionUrl.substring(1);
}
}else{
_a=_9.actionUrl;
}
}
window.open(_a,"","resizable=yes,scrollbars=yes,menubar=no,toolbar=no,status=no,width=800,height=600,screenX=10,screenY=10,top=10,left=10");
}},canImpersonate:function(){
return ibmCfg.portalConfig.canImpersonate;
},contextMenu:{cache:{},css:{focus:"wpthemeMenuFocus",disabled:"wpthemeMenuDisabled",show:"wpthemeMenuShow",error:"wpthemeMenuError",menuTemplate:"wpthemeTemplateMenu",submenuTemplate:"wpthemeTemplateSubmenu",loadingTemplate:"wpthemeTemplateLoading"},init:function(_e,_f,_10){
_e._contextMenu=_e._contextMenu||{};
_e._contextMenu.id=_e._contextMenu.id||Math.round(Math.random()*1000000000);
_e.setAttribute("id",_e._contextMenu.id);
_e._contextMenu.menuId=_f;
_e._contextMenu.jsonQuery=_10;
var _11=_e._contextMenu;
var _12=function(_13){
if(_13.displayMenu){
i$.fireEvent("wptheme/contextMenu/close/all");
if(!_11._submenu){
i$.fireEvent("wptheme/contextMenu/close/all");
wptheme.contextMenu._updateAbsolutePosition(i$.byId(_11.id));
}
var _14=wptheme.contextMenu._adjustScreenPositionStart();
i$.addClass((_11.shadowNode)?_11.shadowNode:i$.byId(_11.id),wptheme.contextMenu.css.show);
wptheme.contextMenu._adjustScreenPositionEnd(_14);
var _15=i$.byId(_11.id)._firstSelectable;
if(_15){
_15.focus();
i$.byId(_11.id)._currentSelected=_15;
}
i$.addListener("wptheme/contextMenu/close/all",function(){
var _16=i$.byId(_11.id);
});
}
};
wptheme.contextMenu._initialize(_e).then(_12,_12);
_e=null;
},initSubmenu:function(_17,_18,_19){
_17._contextMenu=_17._contextMenu||{};
_17._contextMenu._submenu=true;
_17._contextMenu._menuitemTemplate=_19._menuitemTemplate;
_17._contextMenu._subMenuTemplate=_19._subMenuTemplate;
_17._contextMenu._loadingTemplate=_19._loadingTemplate;
wptheme.contextMenu.init(_17,_18,_19.jsonQuery);
},_findFocusNode:function(_1a){
var _1b,i,_1c;
var _1d=function(_1e,_1f){
var l=_1e.childNodes.length;
for(i=0;i<l;i++){
if(_1b){
break;
}
_1c=_1e.childNodes[i];
if(i$.hasClass(_1c,wptheme.contextMenu.css.focus)){
_1b=_1c;
break;
}
if(_1c.childNodes){
i=_1d(_1c,i);
}
}
return _1f;
};
if(i$.hasClass(_1a,wptheme.contextMenu.css.focus)){
return _1a;
}
_1d(_1a);
return _1b;
},_findNodes:function(_20){
var _21,_22,_23,i,_24;
var _25=function(_26,_27){
for(i=_26.childNodes.length-1;i>=0;i--){
_24=_26.childNodes[i];
if(i$.hasClass(_24,wptheme.contextMenu.css.menuTemplate)){
_21=_24;
continue;
}
if(i$.hasClass(_24,wptheme.contextMenu.css.submenuTemplate)){
_22=_24;
continue;
}
if(i$.hasClass(_24,wptheme.contextMenu.css.loadingTemplate)){
_23=_24;
continue;
}
if(_24.childNodes){
i=_25(_24,i);
}
}
return _27;
};
_25(_20);
return {"menu":_21,"submenu":_22,"loading":_23};
},_findNextNodeByKeyCode:function(_28,_29){
var _2a=_28.parentNode;
var _2b,_2c,_2d,i,j;
var l=_2a.childNodes.length;
for(i=0;i<l;i++){
if(_2a.childNodes[i]==_28){
break;
}
}
for(j=i+1;j<l;j++){
_2b=_2a.childNodes[j];
_2c=_2b.textContent||_2b.innerText;
if(_2b._menuitem.type!="Header"&&_2b._menuitem.type!="Separator"&&_2c&&_2c.charAt(0).toUpperCase().charCodeAt(0)==_29){
_2d=_2a.childNodes[j];
return _2d;
}
}
for(j=0;j<i;j++){
_2b=_2a.childNodes[j];
_2c=_2b.textContent||_2b.innerText;
if(_2b._menuitem.type!="Header"&&_2b._menuitem.type!="Separator"&&_2c&&_2c.charAt(0).toUpperCase().charCodeAt(0)==_29){
_2d=_2a.childNodes[j];
return _2d;
}
}
return null;
},_invalidateCallback:function(){
wptheme.contextMenu.cache={};
},_initialize:function(_2e){
var _2f=true;
var _30=_2e._contextMenu;
if(wptheme.contextMenu.cache[_30.id]||_30._inProgress){
return i$.promise.resolved({displayMenu:_2f});
}
_30._inProgress=true;
i$.addListener("wptheme/contextMenu/invalidate/all",wptheme.contextMenu._invalidateCallback);
var _31,_32,tmp=i$.createDom("div");
if(_30._submenu){
tmp.innerHTML=_30._subMenuTemplate.replace(/\$\{submenu-id\}/g,_30.id+"_menu");
_2e.appendChild(tmp.firstChild);
_31=i$.byId(_30.id+"_menu");
_32=i$.createDom("div");
_32.innerHTML=_30._loadingTemplate;
}else{
var _33=wptheme.contextMenu._findNodes((_30.shadowNode)?_30.shadowNode:_2e);
_31=_33.menu;
if(!_30._menuitemTemplate){
_30._menuitemTemplate=i$.trim(_31.innerHTML);
}
if(!_30._loadingTemplate){
_32=i$.createDom("div");
_32.appendChild(_33.loading);
_30._loadingTemplate=i$.trim(_32.innerHTML);
_32=null;
}
_32=i$.createDom("div");
_32.innerHTML=_30._loadingTemplate;
tmp.appendChild(_33.submenu.cloneNode(true));
if(!_30._subMenuTemplate){
_30._subMenuTemplate=i$.trim(tmp.innerHTML);
}
}
while(_31.firstChild){
_31.removeChild(_31.firstChild);
}
_31.appendChild(_32);
var _34;
if(_30._submenu){
_34=_30.shadowNode;
}else{
if(_30.shadowNode){
_34=_30.shadowNode;
}else{
_34=wptheme.contextMenu._transformIntoAbsolutePosition(_2e);
}
}
i$.addClass((_34)?_34:_2e,wptheme.contextMenu.css.show);
i$.bindDomEvt((_34)?_34:_2e,"onmouseleave",function(){
if(_30._inProgress){
_2f=false;
}
var _35=i$.byId(_30.id);
i$.removeClass((_30.shadowNode)?_30.shadowNode:_35,wptheme.contextMenu.css.show);
if(!_30.activeAction){
var _36=_35._currentSelected;
if(_36){
_36.blur();
}
var _37=wptheme.contextMenu._findFocusNode(_35);
((_37)?_37:_35).focus();
}
});
return wptheme.contextMenu._load(_30).then(function(_38){
var _39=wptheme.contextMenu._parseData(_38).then(function(_3a){
_3a=wptheme.contextMenu._filterMenu(_3a);
if(!_3a||_3a.length==0){
var tmp=i$.createDom("div");
tmp.innerHTML=wptheme.contextMenu._fromTemplate(_30._menuitemTemplate,wptheme.contextMenu.css.error,wptheme.contextMenu.nls.NO_ITEMS_0);
while(_31.firstChild){
_31.removeChild(_31.firstChild);
}
_31.appendChild(tmp);
}else{
wptheme.contextMenu._buildMenu(_30,_31,_3a);
}
_30._inProgress=false;
wptheme.contextMenu.cache[_30.id]=true;
return {displayMenu:_2f};
});
return _39;
},function(){
var tmp=i$.createDom("div");
tmp.innerHTML=wptheme.contextMenu._fromTemplate(_30._menuitemTemplate,wptheme.contextMenu.css.error,wptheme.contextMenu.nls.ERROR_LOADING_0);
while(_31.firstChild){
_31.removeChild(_31.firstChild);
}
_31.appendChild(tmp);
_30._inProgress=false;
wptheme.contextMenu.cache[_30.id]=true;
return {displayMenu:_2f};
});
},_load:function(_3b){
var _3c=_1.replace(/\$\{id\}/g,_3b.menuId);
if(_3b.jsonQuery){
_3c+=(_3c.indexOf("?")==-1?"?":"&")+i$.toQuery(_3b.jsonQuery);
}
return i$.xhrGet({url:_3c,headers:{"X-IBM-XHR":"true"},responseType:"json"}).then(function(_3d){
return _3d.data;
},function(_3e){
var _3f=_3e.xhr.getResponseHeader("Content-Type")||"";
if((_3f.indexOf("text/html")==0)||(_3e.xhr.status==401)){
window.setTimeout(function(){
document.location.reload();
},0);
}
console.log("Error trying to load the context menu feed for '"+_3b.menuId+"': "+_3e);
return null;
});
},_parseData:function(_40){
var _41=[];
i$.each(_40,function(_42){
var _43=i$.fromPath("moduleInfo.deferred",false,_42)?i$.modules.loadDeferred():i$.promise.resolved(true);
_41.push(_43.then(function(){
var _44=wptheme.contextMenu._checkFunction(_42,_42.visibilityFn,_42,(typeof _42.visibility!="undefined")?_42.visibility:true);
var _45=wptheme.contextMenu._checkFunction(_42,_42.enableFn,_42,(typeof _42.enabled!="undefined")?_42.enabled:true);
return i$.whenAll(_44,_45).then(function(_46){
_42._visible=_46[0];
_42._enabled=_46[1];
return _42;
});
}));
});
return i$.whenAll.apply(i$,_41);
},_filterMenu:function(_47){
var _48=[],_49,_4a={"type":"Separator"};
for(var i=_47.length-1;i>=0;i--){
_49=_47[i];
if(!_49._visible){
continue;
}
if(_49.type=="Separator"){
if(_4a.type=="Separator"){
continue;
}
}else{
if(_49.type=="Header"){
if((_4a.type=="Separator")||(_4a.type=="Header")){
continue;
}
}
}
_4a=_49;
_48.unshift(_49);
}
while(_48.length>0&&_48[0].type=="Separator"){
_48=_48.slice(1);
}
return _48;
},_buildMenu:function(_4b,_4c,_4d){
var _4e=document.createDocumentFragment(),tmp=i$.createDom("div"),_4f,_50,_51,_52,_53,_54;
for(var i=0,l=_4d.length;i<l;i++){
_4f=_4d[i];
tmp.innerHTML=wptheme.contextMenu._fromTemplate(_4b._menuitemTemplate,_4f);
while(_50=tmp.firstChild){
if(_50.nodeType==1){
if(_4f.type=="Submenu"){
_50._menuitem=_4f;
_50._jsonData=_4b;
i$.bindDomEvt(_50,"onmouseover",wptheme.contextMenu._applySubmenu);
}else{
if(_4f._enabled){
if(!_53){
_53=_50;
}
_54=_50;
_50.links={previous:_51,next:null,sub:null};
if(_51){
_51.links.next=_50;
}
if(!_52&&_4f.type!="Header"){
_52=_50;
}
_50._menuitem=_4f;
_51=_50;
i$.bindDomEvt(_50,"onclick",function(evt){
wptheme.contextMenu._stopEventPropagation(evt);
wptheme.contextMenu._applyAction(evt);
setTimeout(function(){
var _55=i$.byId(_4b.id);
i$.removeClass((_4b.shadowNode)?_4b.shadowNode:_55,wptheme.contextMenu.css.show);
},0);
});
i$.bindDomEvt(_50,"onkeydown",function(evt){
return wptheme.contextMenu._applyKeyAction(evt);
});
i$.bindDomEvt(_50,"onmouseover",function(evt){
return wptheme.contextMenu._applyFocusAction(evt);
});
}
}
if((_4f.title)&&(i$.isRTL(_4f.title.lang))){
i$.addClass(_50,"rtl");
_50.setAttribute("dir","RTL");
}
if(_4f.markupId){
_50.setAttribute("id",_4f.markupId);
}
}
_4e.appendChild(_50);
}
}
_53.links.previous=_54;
_54.links.next=_53;
while(_4c.firstChild){
_4c.removeChild(_4c.firstChild);
}
_4c.appendChild(_4e);
i$.byId(_4b.id)._firstSelectable=_52;
i$.byId(_4b.id)._currentSelected=null;
},_fromTemplate:function(_56,_57,_58){
var _59,_5a,_5b;
if(typeof (_57)=="string"){
_59=_57;
_5a=_58;
_5b="";
}else{
_59="type"+_57.type;
if(_57.itemClass){
_59+=" "+_57.itemClass;
}
if(!_57._enabled){
_59+=" "+wptheme.contextMenu.css.disabled;
}
_5a=(_57.title)?_57.title.value:"";
_5b=((_57.description)?_57.description.value:"");
}
return _56.replace(/\$\{title\}/g,_5a).replace(/"\$\{css-class\}"/g,"\""+(_59)+"\"").replace(/\$\{css-class\}/g,"\""+(_59)+"\"").replace(/"\$\{description\}"/g,"\""+_5b+"\"").replace(/\$\{description\}/g,"\""+_5b+"\"");
},_checkFunction:function(_5c,fn,arg,_5d){
if(fn){
if(!_5c.fromPath){
_5c.fromPath={};
}
var _5e=_5c.fromPath[fn]||i$.fromPath(fn);
_5c.fromPath[fn]=_5e;
if(i$.isFunction(_5e)){
try{
return _5e(arg);
}
catch(exc){
console.log("error executing function "+fn+" - "+exc);
}
}
}
return i$.promise.resolved(_5d);
},_stopEventPropagation:function(evt){
if(evt){
if(evt.stopPropagation){
evt.stopPropagation();
}else{
evt.cancelBubble=true;
}
}
},_applyKeyAction:function(evt){
var _5f=evt.target||evt.srcElement;
var _60=_5f;
var _61=null;
while(!_61){
_60=_60.parentNode;
if(_60._contextMenu){
_61=_60;
}
}
var _62=_61._contextMenu;
switch(evt.keyCode){
case 13:
wptheme.contextMenu._stopEventPropagation(evt);
var _63=i$.byId(_62.id);
i$.removeClass((_62.shadowNode)?_62.shadowNode:_63,wptheme.contextMenu.css.show);
var _64=wptheme.contextMenu._findFocusNode(_63);
window.setTimeout(function(){
((_64)?_64:_61).focus();
window.setTimeout(function(){
wptheme.contextMenu._applyAction(evt);
},0);
},0);
return false;
case 9:
case 27:
var _63=i$.byId(_62.id);
i$.removeClass((_62.shadowNode)?_62.shadowNode:_63,wptheme.contextMenu.css.show);
var _64=wptheme.contextMenu._findFocusNode(_63);
((_64)?_64:_61).focus();
break;
case 40:
wptheme.contextMenu._moveFocus(evt,_62,_5f,"next");
return false;
case 38:
wptheme.contextMenu._moveFocus(evt,_62,_5f,"previous");
return false;
}
var _64=wptheme.contextMenu._findNextNodeByKeyCode(_5f,evt.keyCode);
if(_64){
_64.focus();
return false;
}
return true;
},_moveFocus:function(evt,_65,_66,_67){
var _68=_66.links[_67];
if(_68&&(_68._menuitem.type=="Header"||_68._menuitem.type=="Separator")){
var _69=false;
var _6a=null;
while(!_6a&&!_69){
_68=_68.links[_67];
if(!_68){
_69=true;
}else{
if(_68._menuitem.type!="Header"&&_68._menuitem.type!="Separator"){
_6a=_68;
}
}
}
_68=_6a;
}
if(_68){
var _6b=i$.byId(_65.id)._currentSelected;
if(_6b){
_6b.blur();
}
i$.byId(_65.id)._currentSelected=_68;
_68.focus();
}
if(evt.preventDefault){
evt.preventDefault();
}
},_applyFocusAction:function(evt){
var _6c=evt.target||evt.srcElement;
var _6d=_6c;
var _6e=null;
var _6f=_6c._menuitem;
while(!_6e){
_6d=_6d.parentNode;
if(_6d._contextMenu){
_6e=_6d;
}
if(!_6f){
_6c=_6c.parentNode;
_6f=_6c._menuitem;
}
}
var _70=_6e._contextMenu;
var _71=i$.byId(_70.id)._currentSelected;
if(_71!=_6c){
if(_71){
_71.blur();
i$.byId(_70.id)._currentSelected=null;
}
if(_6f.type!="Header"&&_6f.type!="Separator"){
i$.byId(_70.id)._currentSelected=_6c;
_6c.focus();
}
}
return false;
},_applyAction:function(evt){
var _72=evt.target||evt.srcElement;
var _73=_72;
var _74=null;
var _75=_72._menuitem;
while(!_74){
_73=_73.parentNode;
if(_73._contextMenu){
_74=_73;
}
if(!_75){
_72=_72.parentNode;
_75=_72._menuitem;
}
}
var _76=_74._contextMenu;
_76.activeAction=true;
var p=wptheme.contextMenu._checkFunction(_75,_75.actionFn,_75,_75.actionUrl);
if(p){
p.then(function(_77){
if(_77&&i$.isString(_77)){
var _78=_75.actionHttpMethod||"GET";
if(_78!="GET"){
var _79=i$.createDom("form");
_79.setAttribute("action",_77);
_78=_78.toLowerCase();
switch(_78){
case "get":
_79.setAttribute("method","GET");
break;
case "delete":
case "put":
var _7a=i$.createDom("input",{"type":"hidden","name":"x-method-override","value":_78.toUpperCase()});
_79.appendChild(_7a);
case "post":
_79.setAttribute("method","POST");
_79.setAttribute("enctype","multipart/form-data");
break;
default:
}
i$.byId("wpthemeComplementaryContent").appendChild(_79);
_79.submit();
}else{
if(i$.isIE){
var _7b=i$.createDom("a");
_7b.setAttribute("style","display:none");
_7b.setAttribute("href",_77);
i$.byId("wpthemeComplementaryContent").appendChild(_7b);
_7b.click();
}else{
window.location.href=_77;
}
}
}
});
}
},_applySubmenu:function(evt){
var _7c=evt.target||evt.srcElement;
if(!_7c._jsonData){
_7c=_7c.parentNode;
}
if(_7c._jsonData){
_7c.setAttribute("id",_7c._jsonData.id+"_"+_7c._menuitem.id);
wptheme.contextMenu.initSubmenu(_7c,_7c._menuitem.id,_7c._jsonData);
}
},_transformIntoAbsolutePosition:function(_7d){
var _7e=_7d.childNodes,_7f,i=0,_80=false;
while(_7f=_7e[i++]){
if(i$.hasClass(_7f,"wpthemeMenuRight")){
_80=true;
break;
}else{
if(i$.hasClass(_7f,"wpthemeMenuLeft")){
break;
}
}
}
var _81=i$.createDom("div");
_81.className=_7d.className;
_81.appendChild(_7f);
i$.byId("wpthemeComplementaryContent").appendChild(_81);
_81._contextMenu=_7d._contextMenu;
_7d._contextMenu.shadowNode=_81;
_7d._contextMenu._menuIsRight=_80;
var _82=i$.createDom("span");
_81.appendChild(_82);
i$.addClass(_82,"wpthemeMenuOverlay");
_7d._contextMenu.overlayNode=_82;
_7d._contextMenu.menuNode=_7f;
wptheme.contextMenu._updateAbsolutePosition(_7d);
return _81;
},_updateAbsolutePosition:function(_83){
var _84=_83._contextMenu._menuIsRight;
var _85=_83._contextMenu.menuNode;
var _86=_83._contextMenu.overlayNode;
var _87=wptheme.contextMenu._findPos(_83);
var _88=2;
_86.style.left=(_87[0]-_88)+"px";
_86.style.top=(_87[1]-_88)+"px";
_86.style.width=(_83.offsetWidth+(2*_88))+"px";
_86.style.height=(_83.offsetHeight+(2*_88))+"px";
var dir=document.getElementsByTagName("html")[0].getAttribute("dir");
if(dir!=null){
dir=dir.toLowerCase();
}else{
dir="";
}
if(!(dir=="rtl")){
_85.style.left=((_84)?_87[0]+_83.offsetWidth:_87[0])+"px";
}else{
_85.style.left=((_84)?_87[0]+_83.offsetWidth-_83.scrollWidth:_87[0])+"px";
}
_85.style.top=_87[1]+"px";
},_adjustScreenPositionStart:function(){
return document.documentElement.scrollHeight;
},_adjustScreenPositionEnd:function(_89){
var _8a=document.documentElement.scrollHeight;
if(_89!=_8a){
document.documentElement.scrollTop=document.documentElement.scrollHeight;
}
},_findPos:function(obj){
var _8b=curtop=0;
if(obj.offsetParent){
do{
_8b+=obj.offsetLeft;
curtop+=obj.offsetTop;
}while(obj=obj.offsetParent);
return [_8b,curtop];
}
}}});
})();


}catch(e){console.log("Module 'wp_theme_menus': ",e);}
try{(function(){
    i$.merge({
	"NO_ITEMS_0":"No items to display",
	"ERROR_LOADING_0":"Error happened while loading the menu."
},i$.fromPath("wptheme.contextMenu.nls",true));
})();

}catch(e){console.log("Module 'wp_theme_menus': ",e);}
try{/** Licensed Materials - Property of IBM, 5724-U69, (C) Copyright IBM Corp. 2009, 2010 - All Rights reserved.  **/
(function(){if(ibmToolbarConfig.inManagedPages){var _1=false;var _2=i$.byId("utb-project-info");var _3=i$.byId("utb-project-btn");if(_2&&_3){var _4=function(_5){if(!_1){i$.removeClass(_3,"utb-select");i$.addClass(_3,"utb-loading");_1=i$.modules.loadDeferred().then(function(){i$.removeClass(_3,"utb-loading");i$.addClass(_3,"utb-select");i$.unbindDomEvt(_5);ibmToolbarConfig.openProjectMenu();},function(_6){if(_6[0].xhr.status==401){document.location.reload();}});}};var _7=i$.bindDomEvt(_2,"onkeydown",function(e){if(e.keyCode==13){_4(_7);}});var _8=i$.bindDomEvt(_2,"onclick",function(){_4(_8);});}}})();

}catch(e){console.log("Module 'wp_project_menu': ",e);}
try{(function(){
    i$.merge({
	"WARNING_0":"Warning",
	"DELETE_0":"Delete",
	"INFO_0":"Information",
	"MESSAGES_AVAILABLE_1":"${0} messages are available for review",
	"SHOW_DETAILS_0":"Show Details",
	"ERROR_0":"Error",
	"HIDE_DETAILS_0":"Hide Details"
},i$.fromPath("wptheme.statusBar.nls",true));
})();
}catch(e){console.log("Module 'wp_status_bar': ",e);}
try{(function(){
if(typeof com==="undefined"||!com){
com={};
}
if(typeof com.ibm==="undefined"||!com.ibm){
com.ibm={};
}
if(typeof com.ibm.widgets==="undefined"||!com.ibm.widgets){
com.ibm.widgets={};
}
if(typeof com.ibm.widgets.StatusType==="undefined"||!com.ibm.widgets.StatusType){
com.ibm.widgets.StatusType=function(id,_1,_2,_3){
this._id=id;
this._styleClass=_1;
this._iconPath=_2;
this._iconAlt=_3;
};
}
if(typeof com.ibm.widgets.StatusMessage==="undefined"||!com.ibm.widgets.StatusMessage){
com.ibm.widgets.StatusMessage=function(_4,_5,_6){
this._type=_4;
this._message=_5;
if(!i$.isString(_5)&&_5.message&&i$.isString(_5.message)){
this._message=_5.message;
}
this._details=_6;
};
}
if(typeof com.ibm.widgets.StatusBarV2==="undefined"||!com.ibm.widgets.StatusBarV2){
com.ibm.widgets.StatusBarV2=function(_7){
this.uid=_7;
this.showDetails=false;
this._messages=[];
this._connections=[];
this._numMessages=0;
this._baseURL=window.location.protocol+"//"+window.location.host;
this.blankGifIcon="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
this._statusTypesMap={"error":new com.ibm.widgets.StatusType(0,"wpthemeError",this.blankGifIcon,wptheme.statusBar.nls.ERROR_0),"warning":new com.ibm.widgets.StatusType(1,"wpthemeWarning",this.blankGifIcon,wptheme.statusBar.nls.WARNING_0),"info":new com.ibm.widgets.StatusType(2,"wpthemeInfo",this.blankGifIcon,wptheme.statusBar.nls.INFO_0)};
i$.addListener("/portal/status",i$.scope(this,this.addMessage));
i$.addListener("/message/status",i$.scope(this,this.addMessage));
i$.addListener("/portal/status/clear",i$.scope(this,this.clearMessage));
i$.addListener("/message/status/clear",i$.scope(this,this.clearMessage));
if(typeof (ibmCfg)!="undefined"&&ibmCfg.portalConfig){
this.isBidi=ibmCfg.portalConfig.isRTL;
}else{
if(typeof (ibmPortalConfig)!="undefined"){
this.isBidi=ibmPortalConfig.isRTL;
}else{
if(typeof (ibmConfig)!="undefined"){
this.isBidi=ibmConfig.isBidi;
}
}
}
i$.addOnUnload(i$.scope(this,this._onWindowUnload));
this.containerNode=i$.byId("wpthemeStatusBarContainer");
};
}
i$.augment(com.ibm.widgets.StatusBarV2,{_onWindowUnload:function(){
i$.forEach(this._connections,function(_8){
i$.unbindDomEvt(_8);
});
this._connections=null;
this.clear();
this._messages=null;
},_getStatusContainer:function(){
return this.containerNode;
},_escapeHTML:function(_9){
if(_9.replace){
return _9.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;");
}
return _9;
},setShowDetails:function(_a){
this.showDetails=_a;
},toggleShowDetails:function(){
this.setShowDetails(!this.showDetails);
this.render();
},clear:function(){
var _b=this._getStatusContainer();
if(!!_b){
_b.innerHTML="";
_b.setAttribute("role","");
_b.setAttribute("wairole","");
}
this._messages.length=0;
},clearMessage:function(_c){
if(_c.uid&&_c.uid!=this.uid){
return;
}
var _d=_c.message;
if(typeof _d==="undefined"||_d===null){
this.clear();
}else{
for(var i=this._messages.length-1;i>=0;i--){
if(this._messages[i]._type==_d._type&&this._messages[i]._message==_d._message&&this._messages[i]._details==_d._details){
this._messages.splice(i,1);
}
}
if(this._messages.length==0){
this.clear();
}else{
if(this._messages.length<100){
this.render(this._getStatusContainer());
}
}
}
},addMessage:function(_e){
if(_e.uid&&_e.uid!=this.uid){
return;
}
var _f=_e.message;
this._messages.push(_f);
if(this._messages.length<100){
this.render(this._getStatusContainer());
}
},render:function(_10){
if(_10==null){
_10=this._getStatusContainer();
}
_10.innerHTML="";
if(this._messages.length>1){
this.renderHeader(_10);
}else{
if(this._messages.length==1){
this.renderMessage(_10,this._messages[0],this.showDetails,0);
}
}
if(this.showDetails&&this._messages.length>1){
for(x in this._messages){
this.renderMessage(_10,this._messages[x],this.showDetails,x);
}
}
},renderHeader:function(_11){
if(this._messages.length>1){
var _12=2;
for(var i=0;i<this._messages.length;i++){
_12=Math.min(_12,this._statusTypesMap[this._messages[i]._type]._id);
}
var _13="info";
for(x in this._statusTypesMap){
if(this._statusTypesMap[x]._id==_12){
_13=x;
break;
}
}
var _14=new com.ibm.widgets.StatusMessage(_13,wptheme.statusBar.nls.MESSAGES_AVAILABLE_1.replace("${0}",this._messages.length),"");
this.renderMessage(_11,_14,this.showDetails,-1);
}
},renderMessage:function(_15,_16,_17,_18){
var _19=this._statusTypesMap[_16._type];
var _1a=document.createElement("div");
_1a.className="wpthemeMessage "+_19._styleClass;
if(this._messages.length>1&&_18>=0){
_1a.className+=" wpthemeMoreMsg";
}
var _1b=document.createElement("img");
_1b.className="wpthemeMsgIcon "+(_19._styleClass=="wpthemeError"?"wpthemeMsgIconError":_19._styleClass=="wpthemeWarning"?"wpthemeMsgIconWarning":"wpthemeMsgIconInfo");
_1b.src=_19._iconPath;
_1b.alt=_1b.title=_19._iconAlt;
_1a.appendChild(_1b);
var _1c=document.createElement("span");
_1c.className="wpthemeAltText";
_1c.innerHTML=this._escapeHTML(_19._iconAlt+":");
_1a.appendChild(_1c);
var _1d=document.createElement("div");
_1d.className="wpthemeMessageBody";
_1d.innerHTML=this._escapeHTML(_16._message);
_1a.appendChild(_1d);
if((this._messages.length>1&&_18<0)||(this._messages.length==1)){
if(_16._details&&_16._details.length>0||_18<0){
var _1e=document.createElement("a");
_1e.href="javascript:void(0)";
_1e.className="wpthemeHideShow";
_1e.role="button";
this._connections.push(i$.bindDomEvt(_1e,"onclick",i$.scope(this,this.toggleShowDetails)));
var _1f=document.createElement("img");
_1f.className="wpthemeMsgIcon16";
_1f.src=ibmCfg.themeConfig.modulesWebAppBaseURI+"/themes/html/dynamicSpots/icons/blank.gif";
_1e.appendChild(_1f);
var _20=document.createElement("span");
_20.className="wpthemeAltText";
_1e.appendChild(_20);
}else{
_17=false;
}
var _21=document.createElement("a");
_21.href="javascript:void(0);";
_21.className="wpthemeDelete";
_21.role="button";
_21.title=wptheme.statusBar.nls.DELETE_0;
this._connections.push(i$.bindDomEvt(_21,"onclick",i$.scope(this,this.clear)));
var _22=document.createElement("img");
_22.alt=wptheme.statusBar.nls.DELETE_0;
_22.src=ibmCfg.themeConfig.modulesWebAppBaseURI+"/themes/html/dynamicSpots/icons/blank.gif";
_21.appendChild(_22);
var _23=document.createElement("span");
_23.className="wpthemeAltText";
_23.innerHTML=this._escapeHTML(wptheme.statusBar.nls.DELETE_0);
_21.appendChild(_23);
if(_16._details&&_16._details.length>0||_18<0){
if(_17){
_1e.title=wptheme.statusBar.nls.HIDE_DETAILS_0;
_1f.className+=" wpthemeMsgIconHide";
_1f.alt=wptheme.statusBar.nls.HIDE_DETAILS_0;
_20.innerHTML=this._escapeHTML(wptheme.statusBar.nls.HIDE_DETAILS_0);
}else{
_1e.title=wptheme.statusBar.nls.SHOW_DETAILS_0;
_1f.className+=" wpthemeMsgIconShow";
_1f.alt=wptheme.statusBar.nls.SHOW_DETAILS_0;
_20.innerHTML=this._escapeHTML(wptheme.statusBar.nls.SHOW_DETAILS_0);
}
_1a.appendChild(_1e);
}
_1a.appendChild(_21);
}
var _24=document.createElement("div");
_24.className="wpthemeClear";
_1a.appendChild(_24);
if(_16._details&&_16._details.length>0&&_17&&_18>=0){
var _25=document.createElement("div");
_25.className="wpthemeDetails";
_25.appendChild(document.createTextNode(_16._details));
_1a.appendChild(_25);
}
_15.appendChild(_1a);
_15.setAttribute("role","alert");
_15.setAttribute("wairole","alert");
}});
if(typeof wpstatusbar==="undefined"||!wpstatusbar){
wpstatusbar=new com.ibm.widgets.StatusBarV2("ibmStatusBox");
}
var _26=i$.getCookie("ibm.portal.operations.error");
if(_26){
var _27=i$.fromJson(decodeURIComponent(_26));
var _28="error";
if(_27.errorType){
_28=_27.errorType;
}else{
if(_27.errorCode){
if(_27.errorCode=="400"){
_28="error";
}
}
}
i$.fireEvent("/portal/status",[{message:new com.ibm.widgets.StatusMessage(_28,_27.errorMessage?_27.errorMessage:"",_27.errorDetails?_27.errorDetails:""),uid:"ibmStatusBox"}]);
i$.deleteCookie("ibm.portal.operations.error");
}
i$.addOnLoad(function(){
if("localStorage" in window&&window["localStorage"]!==null){
if(localStorage["com.ibm.wp.toolbar.msg.msg"]!=null){
i$.fireEvent("/message/status",[{message:new com.ibm.widgets.StatusMessage(localStorage["com.ibm.wp.toolbar.msg.type"],localStorage["com.ibm.wp.toolbar.msg.msg"],""),uid:"ibmStatusBox"}]);
localStorage.removeItem("com.ibm.wp.toolbar.msg.type");
localStorage.removeItem("com.ibm.wp.toolbar.msg.msg");
}
}
});
})();


}catch(e){console.log("Module 'wp_status_bar': ",e);}
try{(function(){
if(typeof ic4_wai_integration!="undefined"&&ic4_wai_integration===true){
if(typeof waiHideSecondaryNav!="undefined"&&waiHideSecondaryNav===true){
document.getElementById("wpthemeSecondaryBanner").style.display="none";
document.getElementById("wpthemeMainContent").style.display="none";
}
document.getElementById("wptheme_banner").removeAttribute("role");
document.getElementById("wptheme_contentinfo").removeAttribute("role");
if(dojo!="undefined"){
djConfig.locale=dojo.locale;
dojo.addOnLoad(function(){
document.getElementById("logoutlink").onclick=null;
});
}
if(typeof appName!="undefined"&&appName==="profile"){
ibmConfig.proxyURL=svcHrefProfiles+"/ajaxProxy/";
ibmConfig["com.ibm.mashups.proxy.url"]=svcHrefProfiles+"/ajaxProxy";
djConfig.baseUrl=(needProxy?(ibmConfig.proxyURL+encodeURIComponent(baseProtocol)+"/"+encodeURIComponent(baseHost)):(baseProtocol+"://"+baseHost))+basePath+"/web/dojo/";
djConfig.proxy=applicationContext+"/ajaxProxy";
}
if(typeof i$!="undefined"&&i$.isRTL){
document.body.className=document.body.className.replace("lotusImagesOff","");
document.body.className+=" wptheme_ic4_wai_rtl";
}
}
})();


}catch(e){console.log("Module 'wp_ic4_wai_resources': ",e);}
try{(function(){
if(!i$.isIE){
i$.addOnLoad(function(){
var _1=document.getElementsByTagName("SECTION");
for(var i=0;i<_1.length;i++){
if(i$.hasClass(_1[i],"a11yRegionTarget")){
var _2=_1[i];
var _3=null;
var _4=_2.getElementsByTagName("SPAN");
for(var j=0;j<_4.length;j++){
if(i$.hasClass(_4[j],"a11yRegionLabel")){
_3=_4[j];
}
}
if(_3){
var _5=_3;
var _6=_2;
var _7=null;
while((_6=_6.parentNode)!=null){
if(i$.hasClass(_6,"component-control")){
var m=_6&&(_6.className||"").match(/id-([\S]+)/);
_7=m&&m[1];
break;
}
}
if(_7){
var _8="wpRegionId"+_7;
_5.setAttribute("id",_8);
_2.setAttribute("aria-labelledby",_8);
}
}
}
}
});
}
})();


}catch(e){console.log("Module 'wp_theme_skin_region': ",e);}