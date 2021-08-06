!function(e,t,n){var a={label:"MENU",duplicate:!0,duration:200,easingOpen:"linear",easingClose:"linear",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",appendTo:"",parentTag:"a",closeOnClick:!1,allowParentLinks:!1,nestedParentLinks:!0,showChildren:!1,removeIds:!0,removeClasses:!1,removeStyles:!1,brand:"",animations:"jquery",init:function(){},beforeOpen:function(){},beforeClose:function(){},afterOpen:function(){},afterClose:function(){}},i="slicknav",s="slicknav",l=40,o=13,r=27,c=37,p=39,d=32,u=38;function m(t,n){this.element=t,this.settings=e.extend({},a,n),this.settings.duplicate||n.hasOwnProperty("removeIds")||(this.settings.removeIds=!1),this._defaults=a,this._name=i,this.init()}m.prototype.init=function(){var n,a,i=this,m=e(this.element),h=this.settings;if(h.duplicate?i.mobileNav=m.clone():i.mobileNav=m,h.removeIds&&(i.mobileNav.removeAttr("id"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("id")})),h.removeClasses&&(i.mobileNav.removeAttr("class"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("class")})),h.removeStyles&&(i.mobileNav.removeAttr("style"),i.mobileNav.find("*").each(function(t,n){e(n).removeAttr("style")})),n=s+"_icon",""===h.label&&(n+=" "+s+"_no-text"),"a"==h.parentTag&&(h.parentTag='a href="#"'),i.mobileNav.attr("class",s+"_nav"),a=e('<div class="'+s+'_menu"></div>'),""!==h.brand){var v=e('<div class="'+s+'_brand"><a href="'+slickNavVars.ng_slicknav.ng_slicksearch+'"><img src="'+h.brand+'" alt="'+slickNavVars.ng_slicknav.ng_slicknav_alt+'" /></a></div>');e(a).append(v)}i.btn=e(["<"+h.parentTag+' aria-haspopup="true" role="button" tabindex="0" class="'+s+"_btn "+s+'_collapsed">','<span class="'+s+'_menutxt">'+h.label+"</span>",'<span class="'+n+'">','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>','<span class="'+s+'_icon-bar"></span>',"</span>","</"+h.parentTag+">"].join("")),e(a).append(i.btn),""!==h.appendTo?e(h.appendTo).append(a):e(h.prependTo).prepend(a),a.append(i.mobileNav);var _=i.mobileNav.find("li");e(_).each(function(){var t=e(this),n={};if(n.children=t.children("ul").attr("role","menu"),t.data("menu",n),n.children.length>0){var a=t.contents(),l=!1,o=[];e(a).each(function(){if(e(this).is("ul"))return!1;o.push(this),e(this).is("a")&&(l=!0)});var r=e("<"+h.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>');if(h.allowParentLinks&&!h.nestedParentLinks&&l)e(o).wrapAll('<span class="'+s+"_parent-link "+s+'_row"/>').parent();else e(o).wrapAll(r).parent().addClass(s+"_row");h.showChildren?t.addClass(s+"_open"):t.addClass(s+"_collapsed"),t.addClass(s+"_parent");var c=e('<span class="'+s+'_arrow">'+(h.showChildren?h.openedSymbol:h.closedSymbol)+"</span>");h.allowParentLinks&&!h.nestedParentLinks&&l&&(c=c.wrap(r).parent()),e(o).last().after(c)}else 0===t.children().length&&t.addClass(s+"_txtnode");t.children("a").attr("role","menuitem").on("click",function(t){h.closeOnClick&&!e(t.target).parent().closest("li").hasClass(s+"_parent")&&e(i.btn).click()}),h.closeOnClick&&h.allowParentLinks&&(t.children("a").children("a").on("click",function(t){e(i.btn).click()}),t.find("."+s+"_parent-link a:not(."+s+"_item)").on("click",function(t){e(i.btn).click()}))}),e(_).each(function(){var t=e(this).data("menu");h.showChildren||i._visibilityToggle(t.children,null,!1,null,!0)}),i._visibilityToggle(i.mobileNav,null,!1,"init",!0),i.mobileNav.attr("role","menu"),e(t).on("mousedown",function(){i._outlines(!1)}),e(t).on("keyup",function(){i._outlines(!0)}),e(i.btn).on("click",function(e){e.preventDefault(),i._menuToggle()}),i.mobileNav.on("click","."+s+"_item",function(t){t.preventDefault(),i._itemClick(e(this))}),e(i.btn).on("keydown",function(t){var n=t||event;switch(n.keyCode){case o:case d:case l:t.preventDefault(),n.keyCode===l&&e(i.btn).hasClass(s+"_open")||i._menuToggle(),e(i.btn).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown","."+s+"_item",function(t){switch((t||event).keyCode){case o:t.preventDefault(),i._itemClick(e(t.target));break;case p:t.preventDefault(),e(t.target).parent().hasClass(s+"_collapsed")&&i._itemClick(e(t.target)),e(t.target).next().find('[role="menuitem"]').first().focus()}}),i.mobileNav.on("keydown",'[role="menuitem"]',function(t){switch((t||event).keyCode){case l:t.preventDefault();var n=(o=(a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible')).index(t.target))+1;a.length<=n&&(n=0),a.eq(n).focus();break;case u:t.preventDefault();var a,o=(a=e(t.target).parent().parent().children().children('[role="menuitem"]:visible')).index(t.target);a.eq(o-1).focus();break;case c:if(t.preventDefault(),e(t.target).parent().parent().parent().hasClass(s+"_open")){var p=e(t.target).parent().parent().prev();p.focus(),i._itemClick(p)}else e(t.target).parent().parent().hasClass(s+"_nav")&&(i._menuToggle(),e(i.btn).focus());break;case r:t.preventDefault(),i._menuToggle(),e(i.btn).focus()}}),h.allowParentLinks&&h.nestedParentLinks&&e("."+s+"_item a").on("click",function(e){e.stopImmediatePropagation()})},m.prototype._menuToggle=function(e){var t=this.btn,n=this.mobileNav;t.hasClass(s+"_collapsed")?(t.removeClass(s+"_collapsed"),t.addClass(s+"_open")):(t.removeClass(s+"_open"),t.addClass(s+"_collapsed")),t.addClass(s+"_animating"),this._visibilityToggle(n,t.parent(),!0,t)},m.prototype._itemClick=function(e){var t=this.settings,n=e.data("menu");n||((n={}).arrow=e.children("."+s+"_arrow"),n.ul=e.next("ul"),n.parent=e.parent(),n.parent.hasClass(s+"_parent-link")&&(n.parent=e.parent().parent(),n.ul=e.parent().next("ul")),e.data("menu",n)),n.parent.hasClass(s+"_collapsed")?(n.arrow.html(t.openedSymbol),n.parent.removeClass(s+"_collapsed"),n.parent.addClass(s+"_open"),n.parent.addClass(s+"_animating"),this._visibilityToggle(n.ul,n.parent,!0,e)):(n.arrow.html(t.closedSymbol),n.parent.addClass(s+"_collapsed"),n.parent.removeClass(s+"_open"),n.parent.addClass(s+"_animating"),this._visibilityToggle(n.ul,n.parent,!0,e))},m.prototype._visibilityToggle=function(t,n,a,i,l){var o=this,r=o.settings,c=o._getActionItems(t),p=0;function d(t,n){e(t).removeClass(s+"_animating"),e(n).removeClass(s+"_animating"),l||r.afterOpen(t)}function u(n,a){t.attr("aria-hidden","true"),c.attr("tabindex","-1"),o._setVisAttr(t,!0),t.hide(),e(n).removeClass(s+"_animating"),e(a).removeClass(s+"_animating"),l?"init"==n&&r.init():r.afterClose(n)}a&&(p=r.duration),t.hasClass(s+"_hidden")?(t.removeClass(s+"_hidden"),l||r.beforeOpen(i),"jquery"===r.animations?t.stop(!0,!0).slideDown(p,r.easingOpen,function(){d(i,n)}):"velocity"===r.animations&&t.velocity("finish").velocity("slideDown",{duration:p,easing:r.easingOpen,complete:function(){d(i,n)}}),t.attr("aria-hidden","false"),c.attr("tabindex","0"),o._setVisAttr(t,!1)):(t.addClass(s+"_hidden"),l||r.beforeClose(i),"jquery"===r.animations?t.stop(!0,!0).slideUp(p,this.settings.easingClose,function(){u(i,n)}):"velocity"===r.animations&&t.velocity("finish").velocity("slideUp",{duration:p,easing:r.easingClose,complete:function(){u(i,n)}}))},m.prototype._setVisAttr=function(t,n){var a=this,i=t.children("li").children("ul").not("."+s+"_hidden");n?i.each(function(){var t=e(this);t.attr("aria-hidden","true"),a._getActionItems(t).attr("tabindex","-1"),a._setVisAttr(t,n)}):i.each(function(){var t=e(this);t.attr("aria-hidden","false"),a._getActionItems(t).attr("tabindex","0"),a._setVisAttr(t,n)})},m.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li"),a=n.find("a");t.links=a.add(n.find("."+s+"_item")),e.data("menu",t)}return t.links},m.prototype._outlines=function(t){t?e("."+s+"_item, ."+s+"_btn").css("outline",""):e("."+s+"_item, ."+s+"_btn").css("outline","none")},m.prototype.toggle=function(){this._menuToggle()},m.prototype.open=function(){this.btn.hasClass(s+"_collapsed")&&this._menuToggle()},m.prototype.close=function(){this.btn.hasClass(s+"_open")&&this._menuToggle()},e.fn[i]=function(t){var n,a=arguments;return void 0===t||"object"==typeof t?this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new m(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?(this.each(function(){var s=e.data(this,"plugin_"+i);s instanceof m&&"function"==typeof s[t]&&(n=s[t].apply(s,Array.prototype.slice.call(a,1)))}),void 0!==n?n:this):void 0}}(jQuery,document,window);