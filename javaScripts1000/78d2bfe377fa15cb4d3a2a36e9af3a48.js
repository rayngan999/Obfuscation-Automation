                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                







(function($){
var _skins={};


$.registerDropDownMenuSkin=function(name,skin){
_skins[name]=skin;
};






function highlightMenuItem($item,enabled){
var classToAdd=enabled?'hover':'nohover';
var classToRemove=enabled?'nohover':'hover';

if(!$item.hasClass(classToAdd)){
$item.addClass(classToAdd).removeClass(classToRemove);
}
}




function findUntilInternal(elem,fnIsMatch,results){
if(elem.nodeType!==1){
return;
}

if(fnIsMatch.call(elem,elem,results)===false){
return;
}

for(var i=0,len=elem.childNodes.length;i<len;i++){
findUntilInternal(elem.childNodes[i],fnIsMatch,results);
}
}


function findUntil($elem,fnIsMatch){
var results=[];

$elem.each(function(){
findUntilInternal(this,fnIsMatch,results);
});

return $(results);
}

var _defaults={

showOnHover:true,



linksWithSubmenusEnabled:false,


navigateOnHoverPress:true,


selected:null,


beforeShowPanel:null,


beforeHidePanel:null,


showPanelComplete:null,


hidePanelComplete:null,


animationShow:null,


animationHide:null,



position:null,


skin:'basic'
};

var Panel=function MenuPanel(menu,panel,item){
$.proxyAll(this,'onPress','onPointerOver','onPointerOut','showComplete','hideComplete');
var me=this;

this.menu=menu;
this.options=this.menu.options;
this.$panel=$(panel);
this.$item=item?$(item):this.$panel.closest('.menu-item');
this.$parentPanel=this.$item.closest('.menu-panel');
this.isTopLevel=this.$parentPanel.length===0;

this.parent=null;
this.children=[];


this.isOpen=false;


this.transitioning=false;


if(this.$panel.length>0){
this.$panel.data('PanelInstance',this);
}

this.$item

.addClass('menu-item-with-submenu')

.on('press',this.onPress);


if(this.options.showOnHover){
var delayOver=200;

if(this.isTopLevel&&this.menu.siblings.length>0){
delayOver=function(){
for(var i=0;i<me.menu.siblings.length;i++){
var menu=me.menu.siblings[i];
for(var j=0;j<menu.rootMenu.children.length;j++){
var panel=menu.rootMenu.children[j];
if(panel.isTopLevel&&panel.isOpen){
return 0;
}
}
}

return 200;
};
}


this.$item.hoverDelay(this.onPointerOver,this.onPointerOut,{
delayOver:delayOver,
delayOut:500
});
}


if(this.isTopLevel){
this.$item.on('pointerout',function(e){
if(!me.isOpen){

if(e.relatedTarget){
if($(this).has(e.relatedTarget).length>0&&!$(this).is(e.relatedTarget)){
return;
}
}

highlightMenuItem(me.$item,false);
}
});
}


if(this.$panel.length>0){


this.$panel.on('click',function(e){

var $clickedMenuItem=$(e.target).closest('.menu-item',me.$panel);



if($clickedMenuItem&&!$clickedMenuItem.hasClass('menu-item-with-submenu')){
var ev=me.getEvent('selected',e);
ev.$selectedItem=$clickedMenuItem;
ev.selectedItem=$clickedMenuItem[0];

if(me.options.selected){
me.options.selected.call(me,ev,this);
}


if(ev.isDefaultPrevented()){
e.stopPropagation();
return;
}


if(!e.isDefaultPrevented()){
return;
}


me.menu.hideAllPanels(e);
}

e.stopPropagation();
});






if(!this.options.linksWithSubmenusEnabled){
this.getLinksWithSubmenus().on('click',function(event){

event.preventDefault();



event.stopPropagation();
});
}
}
};

Panel.prototype.getLinksWithSubmenus=function PanelGetLinksWithSubmenus(){
return findUntil(this.$item,function(elem,results){



if($(elem).hasClass('menu-panel')){
return false;
}


if(elem.tagName=='A'){
results.push(elem);
}

return true;
});
};



Panel.prototype.resolveParent=function PanelResolveParent(){
this.parent=this.$parentPanel.data('PanelInstance')||this.menu.rootMenu;
this.parent.children.push(this);
};


Panel.prototype.getEvent=function PanelGetEvent(type,e){
return $.Event(type||'DropDownMenuPanelEvent',{
$panel:this.$panel,
panel:this,
$parentPanel:this.$parentPanel,
parentPanel:this.$parentPanel[0],
$item:this.$item,
item:this.$item[0],
level:this.getLevel(),
innerEvent:e
});
};


Panel.prototype.getLevel=function PanelGetLevel(){
if(!this._level){
this._level=-1;
var current=this.parent;
while(current){
current=current.parent;
this._level++;
}
}

return this._level;
};


Panel.prototype.getSiblings=function PanelGetSiblings(){
var me=this;

if(!this._siblings){
var _siblings=[];

if(this.parent){
$.each(this.parent.children,function(i,child){
if(child!==me){
_siblings.push(child);
}
});
}

this._siblings=_siblings;
}

return this._siblings;
};


Panel.prototype.shouldShowSubmenuOnHover=function(){
if(!this.isTopLevel){
return true;
}




return this.menu.clickHoverActivated||this.options.showOnHover;
};





Panel.prototype.onPointerOver=function(event){

if(this.isTopLevel){
highlightMenuItem(this.$item,true);
}

if(!this.shouldShowSubmenuOnHover()){
return;
}

this.show(event);
};

Panel.prototype.onPointerOut=function(event){
if(this.isTopLevel&&!this.options.showOnHover){
return;
}

if(!this.shouldShowSubmenuOnHover()){
return;
}

this.hide(event);
};


Panel.prototype.show=function PanelShow(e){
if(this.transitioning||this.isOpen){
return;
}

if(this.$panel.length>0){
var customEvent=this.getEvent('beforeShowPanel',e);

if(this.options.beforeShowPanel){
this.options.beforeShowPanel.call(this,customEvent);
}


if(customEvent.isDefaultPrevented()){
return;
}
}


$(document).trigger('ui.element.open',this);


$.each(this.getSiblings(),function(i,sibling){
sibling.hide(e);
});

hideOtherMenus(this.menu,e);


highlightMenuItem(this.$item,true);

if(this.$panel.length===0){
return;
}

this.transitioning=true;



if(this.options.position){
this.options.position.call(this,this.getEvent('position',e));
}


if(this.options.animationShow){
this.options.animationShow.call(this,this.getEvent('animationShow',e),this.showComplete);
}else{
this.$panel.show();
this.showComplete();
}
};

Panel.prototype.showComplete=function PanelShowComplete(event){
this.isOpen=true;
this.transitioning=false;

if(this.options.showPanelComplete){
this.options.showPanelComplete.call(this,this.getEvent(event));
}
};

Panel.prototype.hide=function PanelHide(e){
if(!this.isOpen||this.transitioning){
return;
}

if(this.$panel.length>0){
var ev=this.getEvent(e);

if(this.options.beforeHidePanel){
this.options.beforeHidePanel.call(this,ev);
}


if(ev.isDefaultPrevented()){
return;
}
}

highlightMenuItem(this.$item,false);

if(this.$panel.length===0){
return;
}

this.transitioning=true;

$.each(this.children,function(i,childPanel){
childPanel.hide(e);
});

if(this.options.animationHide){
this.options.animationHide.call(this,this.getEvent(e),this.hideComplete);
}else{
this.$panel.hide();
this.hideComplete();
}
};

Panel.prototype.hideComplete=function PanelHideComplete(event){
this.isOpen=false;
this.transitioning=false;

if(this.options.hidePanelComplete){
this.options.hidePanelComplete.call(this,this.getEvent(event));
}
};

Panel.prototype.onPress=function(e){





e.stopPropagation();



if(this.$panel.length===0||e.pointerType==='mouse'){
return;
}


if(this.$panel.length>0){
var $closestPanel=$(e.target).closest('.menu-panel');
if($closestPanel.length>0&&$closestPanel[0]===this.$panel[0]){


return;
}
}




if(!this.options.navigateOnHoverPress||!this.isOpen)
{
e.preventDefault();
e.preventClick();
}

if(this.transitioning){
return;
}

if(this.isTopLevel){
this.menu.clickHoverActivated=true;
}

this[this.isOpen?'hide':'show'](e);

if(this.isTopLevel){
this.menu.ignoreDocumentClick=+(new Date());
}
};


Panel.prototype.forceHide=function(event){
this.menu.clickHoverActivated=false;
this.hide(event);
};









var Menu=function($topLevelItems,options){
var me=this;

this.options=options;



this.$topLevelItems=$topLevelItems.addClass('menu-item-top');


this.panels=[];


this.siblings=this.options.siblings.map(function(i,sibling){
return $(sibling).data('dropDownMenu');
});


this.rootMenu={
parent:null,
children:[]
};



this.clickHoverActivated=false;



this.ignoreDocumentClick=false;


this.$topLevelItems.find('.menu-panel').each(function(i,panelElement){
me.panels.push(new Panel(me,panelElement));
});


this.$topLevelItems.not('.menu-item-with-submenu').each(function(i,panelElement){
me.panels.push(new Panel(me,null,panelElement));
});


$.each(this.panels,function(i,panel){
panel.resolveParent();
});







this.$topLevelItems.find('.menu-item').hoverDelay(
function(){
highlightMenuItem($(this),true);
},
function(){
highlightMenuItem($(this),false);
}
)
.each(function(){
highlightMenuItem($(this),false);
});


$(document).on('click',$.proxy(this.onDocumentClick,this));
};


Menu.prototype.hideAllPanels=function(event){
this.ignoreDocumentClick=+(new Date());

$.each(this.rootMenu.children,function(i,child){
child.forceHide(event);
});
};




Menu.prototype.onDocumentClick=function documentClickHandler(e){

if(this.ignoreDocumentClick){



var timeDiff=+(new Date())-this.ignoreDocumentClick;

this.ignoreDocumentClick=false;

if(timeDiff<200){
return;
}
}

this.hideAllPanels(e);
};




$.fn.dropDownMenu=function(options){
if(this.length===0){
return this;
}


var _skin=_skins[options.skin];
if(!_skin){
throw new Error('Invalid dropDownMenu skin: '+options.skin);
}


var o=$.extend({},_defaults,_skin||{},options);


if(!o.showOnHover){
o.linksWithSubmenusEnabled=false;
}


var selection=$(this);


this.each(function(){

var $topLevelItems=findUntil($(this),function(elem,results){
if($(elem).hasClass('menu-item')){
results.push(elem);
return false;
}

return true;
});

var menu=new Menu(
$topLevelItems,
$.extend({},o,{
siblings:selection.not(this)
})
);

$(this).data('dropDownMenu',menu);
_menus.push(menu);
});


return this;
};

var _menus=[];


function hideOtherMenus(ignoreMenu,e){
$.each(_menus,function(i,menu){
if(!ignoreMenu||ignoreMenu!==menu){
menu.hideAllPanels(e);
}
});
}
})(jQuery);
