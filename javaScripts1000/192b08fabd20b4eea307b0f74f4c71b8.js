/* Built on 2021-03-23 16:08:37 */
!function(){var e=function(e,t,i){var n=document.getElementById("header-"+(t.is_desktop?"desktop-":"mobile-")+e+"-toggle");n&&(t.opened=!1,t.menu=document.getElementById(t.id),t.menu_toggler=n,t.toggle=function(n){if(void 0===n||n!==t.opened){if(t.opened)xv.dom.addClass(t.menu,t.hide_class?t.hide_class:"mobile-hide"),t.body_cls_onopen&&xv.dom.removeClass(document.body,t.body_cls_onopen),xv.dom.removeClass(t.menu_toggler,t.icon_cls),"function"==typeof t.onclose_func&&t.onclose_func(t);else{window.xv.menus.closeAll(t.iAllMenuId);for(var s in i)s!==e&&i[s].toggle&&i[s].toggle(!1);xv.dom.removeClass(t.menu,t.hide_class?t.hide_class:"mobile-hide"),xv.dom.addClass(t.menu_toggler,t.icon_cls),t.body_cls_onopen&&xv.dom.addClass(document.body,t.body_cls_onopen),"function"==typeof t.onopen_func&&t.onopen_func(t),t.dontScrollToTop||xv.dom.scrollToTop()}t.opened=!t.opened}},t.iAllMenuId=window.xv.menus.addClose(function(){t.toggle(!1)}),window.xv.mobile.togglers.push(t),n.onclick=function(e){return e||(e=this.originalEvent),e&&("function"==typeof e.preventDefault?e.preventDefault():e.returnValue=!1),t.toggle(),!1})},t={togglers:new Array,menus_init:function(t){for(var i in t)e(i,t[i],t)}};window.xv||(window.xv={}),window.xv.mobile=t}(),function(){window.xv||(window.xv={});var e=function(e){this.sId=e.id,this.$Content=document.createElement("div"),this.setContent(e.c),this.sType=e.t,this.xMsgManager=e.xmm,this.fCallback="undefined"!=typeof e.cf&&e.cf,this.bHasCallbackFunc=!1!==this.fCallback,this.bDeletable=!1,this.sReadId="string"==typeof e.ci?e.ci:"string"==typeof e.ri&&e.ri,this.sDeleteId=!1!==this.sReadId&&"del"+this.sReadId,this.sHash="string"==typeof e.h?e.h:"undefined"!=typeof e.h&&"function"==typeof e.h.toString&&e.h.toString(),this.iCookieExpires="number"==typeof e.ce&&e.ce,this.iLastTimeInView=!1,this.bInPage="boolean"==typeof e.bInPage&&e.bInPage,this.bViewed="boolean"==typeof e.r&&e.r,this.bNotif="boolean"==typeof e.n&&e.n,this.sProfileName="string"==typeof e.p&&e.p,this.bNotifCountOnly=!1,this.bAdded=!1,this.bDeleted=!1,this.bIsPreview=!1,this.tPreviewEnd=!1,this.bLoader="boolean"==typeof e.bLoader&&e.bLoader,this.sLink="string"==typeof e.l&&e.l,this.sLinkTitle="string"==typeof e.lt&&e.lt,this.sImg="string"==typeof e.i&&e.i,this.sImgAlt="string"==typeof e.ia&&e.ia;var t=this;this.isInPage()?($Elem=this.getInPageElem(),$Elem?($DelBtn=$Elem.getElementsByClassName("delete"),$DelBtn&&$DelBtn[0]&&(!1!==this.sDeleteId?(t.bDeletable=!0,xv.dom.addEventListener($DelBtn[0],"click",function(){t["delete"]()})):$DelBtn.parentNode.removeChild($DelBtn)),this.bAdded=!0):this.bNotifCountOnly=!0):document.readyState&&"complete"===document.readyState?this.bHasCallbackFunc?this.setCallbackFunc():this.setTapReduce():xv.dom.addEventListener(window,"load",function(){t.bHasCallbackFunc?t.setCallbackFunc(e.cf):t.setTapReduce()}),!1!==this.iCookieExpires&&!1!==this.sHash&&this.xMsgManager.registerHash(this.sHash,this.iCookieExpires)};e.prototype={oIconClass:{success:"check-circle",error:"close-circle",warning:"warning-circle",question:"question-circle-o",info:"info-circle"},isAdded:function(){return this.bAdded},setAdded:function(e){"boolean"!=typeof e&&(e=!0),this.bAdded=e,this.isNotif()&&(this.bAdded?(this.xMsgManager.addToAddedNotifIds(this.sId),this.isNotifCountOnly()&&(this.bNotifCountOnly=!1),this.bDeletable=!0):this.xMsgManager.removeFromAddedNotifIds(this.sId))},isNotif:function(){return this.bNotif},isNotifCountOnly:function(){return this.bNotifCountOnly},getHash:function(){return this.sHash},hasBeenWatched:function(){if(this.isViewed())return!0;if(!this.isAdded())return!1;if(!xv.dom.isElementInView(this.getRender(),!0,{scroll_marge:5}))return this.iLastTimeInView=!1,!1;if(this.iLastTimeInView>0){if(Date.now()-this.iLastTimeInView>1e3)return!0}else this.iLastTimeInView=Date.now();return!1},isViewed:function(){return this.bViewed},setViewed:function(e){"boolean"!=typeof e&&(e=!0),this.bViewed=e},isPreview:function(){return this.bIsPreview},setPreview:function(e,t){!1!==this.tPreviewEnd&&clearTimeout(this.tPreviewEnd),"boolean"!=typeof e&&(e=!0);var i=this,n=this.getRender(!1,!0);this.xMsgManager.isOpened()?this.removePreview():"function"==typeof $?e?($(n).stop().hide().slideDown(50),this.bIsPreview=!0):$(n).stop().slideUp("slow",function(){i.removePreview(),i.xMsgManager.hasPreview()||"boolean"==typeof t&&!1===t||i.xMsgManager.emptyPreviewContainer()}):(this.bIsPreview=e,this.bIsPreview||i.xMsgManager.hasPreview()||"boolean"==typeof t&&!1===t||i.xMsgManager.emptyPreviewContainer()),e?this.tPreviewEnd=setTimeout(function(){i.setAdded(!1),i.tPreviewEnd=!1,i.setPreview(!1)},3e3):i.xMsgManager.updateMsgContainer()},removePreview:function(){if(!this.isNotif())return!1;this.bIsPreview=!1;var e=this.getRender(!0,!0);if(!e)return!1;"function"==typeof $&&$(e).stop(!0,!0).show();var t=this.xMsgManager.getPreviewMsgContainer();if(e.parentNode!==t)return!1;t.removeChild(e)},isClosable:function(){return this.bDeletable},setAsRead:function(){this.sReadId=!1,this.isNotif()&&"number"==typeof this.xMsgManager.iNotifsUnviewed&&this.xMsgManager.iNotifsUnviewed>0&&(this.xMsgManager.iNotifsUnviewed--,this.xMsgManager.updateToggleBtnBadge())},getReadId:function(){return this.sReadId||!1},getDeleteId:function(){return this.sDeleteId||!1},isUnread:function(){return"string"==typeof this.sReadId},unDelete:function(){this.bDeleted=!1,this.xMsgManager.updateAllRenders()},"delete":function(e,t){var i=this;if(this.isInPage())return void i.xMsgManager.setAsDeleted([i],function(e){e.result&&(i.bDeleted=!0,$Elem=i.getInPageElem(),$Elem&&("function"==typeof $?$($Elem).animate({right:"-10%",opacity:0},"fast",function(){$($Elem).slideUp("fast",function(){$($Elem).remove()})}):$Elem.parentNode.removeChild($Elem)),i.xMsgManager.updateAllRenders())});this.bDeleted=!0;var n=this.getRender(!0);!1!==n&&n.parentNode&&("function"==typeof $&&!0!==t?$(n).animate({right:"-100%"},"fast",function(){$(n).slideUp("fast",function(){"function"==typeof e&&e(),$(n).remove(),i.xMsgManager.updateAllRenders()})}):(n.parentNode.removeChild(n),this.xMsgManager.updateAllRenders(),"function"==typeof e&&e())),this.setAdded(!1)},isDeleted:function(){return this.bDeleted},isLoader:function(){return!!this.bLoader},setContent:function(e){this.$Content.innerHTML=e},getRender:function(e,t){if("undefined"!=typeof this.$Render)return t||this.removePreview(),this.$Render;if(e)return!1;if(this.isInPage())return this.getInPageRender();this.$Render=document.createElement("div"),this.$Render.className="x-message x-message-"+this.sType+(this.bHasCallbackFunc?" has-callback":"")+(this.isViewed()?"":" unviewed"),this.$Render.id=this.sId,this.$DivContent=document.createElement("div"),this.$DivContent.className="content",this.$Render.appendChild(this.$DivContent);var i;if("string"==typeof this.sLink&&this.sLink.length>0?(i=document.createElement("a"),i.setAttribute("href",this.sLink),"string"==typeof this.sLinkTitle&&this.sLinkTitle.length>0&&i.setAttribute("title",this.sLinkTitle),this.$DivContent.appendChild(i)):i=this.$DivContent,"string"==typeof this.sImg&&this.sImg.length>0){var n=document.createElement("img");n.setAttribute("src",this.sImg),n.setAttribute("alt","string"==typeof this.sImgAlt&&this.sImgAlt.length>0?this.sImgAlt:""),i.appendChild(n)}i.appendChild(this.$Content);var s=this.getProfileImgSrc();if("string"==typeof s){var o=document.createElement("span");o.className="bg-icon bg-img",o.style.backgroundImage='url("'+s+'")',this.$Render.appendChild(o)}else{var a=this.getIconClass();if("string"==typeof a){var d=document.createElement("span");d.className="bg-icon icon-f icf-"+a,this.$Render.appendChild(d)}}var r=this.isClosable(),l=document.createElement("a"),g=document.createElement("span");l.className=r?"del":"reduce",l.setAttribute("href","#"),l.setAttribute("title",xv.utils.unescape(xv.i18n.__(r?"misc.delete":"misc.reduce"))),g.className="icon-f icf-"+(r?"close-thin":"angle-down"),l.appendChild(g);var h=this;return r?xv.dom.addEventListener(l,"click",function(){h.xMsgManager.delById(h.sId)}):xv.dom.addEventListener(l,"click",function(){h.xMsgManager.toggleOpening(!1)}),this.$Render.appendChild(l),this.$Render},getInPageRender:function(){this.$Render=document.createElement("div"),this.$Render.className="account-notification unread",this.$Render.id=this.sId;var e=document.createElement("div");e.className="notification x-message-"+this.sType;var t=this.getProfileImgSrc();if("string"==typeof t){var i=document.createElement("span");i.className="bg-icon bg-img",i.style.backgroundImage='url("'+t+'")',e.appendChild(i)}else{var n=this.getIconClass();if("string"==typeof n){var s=document.createElement("span");s.className="bg-icon icon-f icf-white-fill icf-"+n,e.appendChild(s)}}var o=document.createElement("div");o.className="content",o.appendChild(this.$Content),e.appendChild(o),this.$Render.appendChild(e);var a=document.createElement("button");a.setAttribute("type","button"),a.className="delete";var d=document.createElement("span");d.className="icon-f icf-close-thin",a.appendChild(d),this.$Render.appendChild(a);var r=this;return xv.dom.addEventListener(a,"click",function(){r["delete"]()}),this.$Render},updateRender:function(){var e=this.getRender(!0,!0);e&&(this.isViewed()?xv.dom.removeClass(e,"unviewed"):xv.dom.addClass(e,"unviewed"))},getDivContent:function(e,t){return!(!this.getRender(e,t)||!this.$DivContent)&&this.$DivContent},getProfileImgSrc:function(){return"string"==typeof this.sProfileName&&"/profiles-picture/"+this.sProfileName},getIconClass:function(e){return void 0===e&&(e=this.sType),"undefined"!=typeof this.oIconClass[e]&&this.oIconClass[e]},setTapReduce:function(){var e=this.getRender(!1,!0);if(!1!==e){this.touch_started=!1;var t=this;return $(e).on("touchstart",function(){t.touch_started=Date.now()}),$(e).on("touchend",function(e){if(!t.touch_started)return!1;0===$(e.target).closest("a, button").length&&Date.now()-t.touch_started<100&&(e.preventDefault(),t.xMsgManager.toggleOpening(!1)),t.touch_started=!1}),!0}},setCallbackFunc:function(){var e=this.getDivContent();if(!1!==e){var t=this,i=this.getRender();this.bHasCallbackFunc?xv.dom.addClass(i,"has-callback"):xv.dom.removeClass(i,"has-callback"),xv.dom.addEventListener(e,"click",function(){t.execCallbackFunc()})}},execCallbackFunc:function(){var e;if("string"==typeof this.fCallback){if(aArgs=this.fCallback.split("."),0===aArgs.length)return this.fCallback=!1,void(this.bHasCallbackFunc=!1);e=window;for(var t in aArgs){var i=aArgs[t];if("object"!=typeof e[i]&&"function"!=typeof e[i])break;e=e[i]}}else e=this.fCallback=!1;this.fCallback="function"==typeof e&&e,this.bHasCallbackFunc=!1!==this.fCallback,this.bHasCallbackFunc?this.fCallback():this.xMsgManager.toggleOpening(!1)},isInPage:function(){return!!this.bInPage},getInPageElem:function(){return document.getElementById(this.sId)||!1}};var t=function(){if(this.$Container=document.getElementById("page"),this.$Container||(this.$Container=document.body),!this.$Container)return!1;this.bNotificationsInPage="social_notifications"===xv.conf.data.action&&xv.conf.data.notifications.length>0,this.bNotificationSettingsInPage="social_notifications"===xv.conf.data.action,this.oMsgsById={},this.iMsgIdCount=0,this.iLastNewInPageCount=0,this.bToggleBtnAdded=!1,this.bOpened=!1,this.bPartiallyOpened=!1,this.bNotificationsEnabled=!1,this.iVisibilityCheck=!1,this.aToggleCallbacks=[],this.oCookieExpiration={},this.aAddedNotifIds=[],this.aMsgsToDelete=[],this.bMessagesLoadedFromChat=!1,this.iNotifsNotLoaded=!1,this.iNotifsUnviewed=!1,this.iAllMenuId=!1;var e=this;this.bPartiallyOpened||"undefined"==typeof window.xv.menus||"function"!=typeof window.xv.menus.addClose||(this.iAllMenuId=window.xv.menus.addClose(function(){e.bPartiallyOpened||e.toggleOpening(!1,{bUnreadNoUpdate:!0})})),this.$InPageReloadBtn=!1,this.$InPageDeleteAll=!1,this.isInPage()&&(this.$InPageReloadBtn=document.getElementById("account-notifications-reload"),this.$InPageReloadBtn&&xv.dom.addEventListener(this.$InPageReloadBtn,"click",function(){e.addNotifCountsMsgs()}),this.$InPageDeleteAll=document.getElementById("account-notifications-delete-all"),this.$InPageDeleteAll&&xv.dom.addEventListener(this.$InPageDeleteAll,"click",function(){e.delAllClosableNotifs()})),this.isSettingsInPage()&&this.getSettingsBtn()};t.prototype={initXMsg:function(t){if("string"==typeof t)t={c:t};else if("object"!=typeof t)return!1;var i=t.id;if(t.bInPage){var n=document.getElementById("account-notification-"+t.h.toString())||!1;n&&n.id&&(t.id=i=n.id)}"string"==typeof i&&0!==i.length||"string"==typeof i&&0!==i.length||(this.iMsgIdCount++,t.id=i="msg-mngr-"+this.iMsgIdCount),t.xmm=this;var s=new e(t);return s.isNotif()&&("number"==typeof this.iNotifsNotLoaded&&this.iNotifsNotLoaded>0&&this.iNotifsNotLoaded--,(s.isViewed()||!s.isUnread())&&"number"==typeof this.iNotifsUnviewed&&this.iNotifsUnviewed>0&&this.iNotifsUnviewed--),this.oMsgsById[i]=s,this.updateToggleBtn(),this.initUpdateViewedStatusCheck(),this.oMsgsById[i]},initXMsgs:function(e,t){var i=xv.cookies.get("hide_xmsg"),n=[],s=0;if("string"==typeof i)for(n=i.split(","),s=0;s<n.length;s++)"string"==typeof(i=n[s])&&(n[s]=i.split(":")[0]);for(s=0;s<e.length;s++){var o=e[s];"string"==typeof o.h&&-1!==n.indexOf(o.h)&&(o.r=!0),o.bInPage=!!t,this.initXMsg(o)}},addNotifCountsMsgs:function(){this.$InPageReloadBtn&&(this.$InPageReloadBtn.style.display="none");for(var e=this.getAllNotifCount(),t=this.getNotifMsgContainer(),i=0;i<e.length;i++){var n=e[i],s=n.getRender();t.firstElementChild?t.insertBefore(s,t.firstElementChild):t.appendChild(s),n.setAdded()}this.saveAsRead(e)},getById:function(e,t){var i=this.oMsgsById[e];return!(void 0===i||!0===i.isDeleted()&&!0!==t||!0===i.isLoader()&&!0!==t||!this.bNotificationsEnabled&&!0===i.isNotif()&&!1===i.isInPage()&&!0!==t)&&i},getAll:function(e){var t=[];for(var i in this.oMsgsById){var n=this.getById(i,e);n&&t.push(n)}return t},getAllSysMsg:function(e){var t=[];for(var i in this.oMsgsById){var n=this.getById(i,e);!n||n.isNotif()||n.isLoader()||t.push(n)}return t},getAllClosable:function(e){for(var t=this.getAll(e),i=[],n=0;n<t.length;n++){var s=t[n];s.isClosable()&&i.push(s)}return i},getAllClosableNotifs:function(e){for(var t=this.getAll(e),i=[],n=0;n<t.length;n++){var s=t[n];s.isClosable()&&s.isNotif()&&i.push(s)}return i},getAllClosableIds:function(e){for(var t=this.getAllClosable(e),i=[],n=0;n<t.length;n++){var s=t[n];i.push(s.sId)}return i},getAllClosableNotifsIds:function(e){for(var t=this.getAllClosableNotifs(e),i=[],n=0;n<t.length;n++){var s=t[n];i.push(s.sId)}return i},getAllNotif:function(e){for(var t=this.getAll(e),i=[],n=0;n<t.length;n++){var s=t[n];s.isNotif()&&i.push(s)}return i},getAllNotifCount:function(e){for(var t=this.getAll(e),i=[],n=0;n<t.length;n++){var s=t[n];s.isNotifCountOnly()&&i.push(s)}return i},hasClosableMsg:function(e){for(var t=this.getAll(e),i=0;i<t.length;i++){if(t[i].isClosable())return!0}return!1},getByHash:function(e,t){var i=this.getAll(t);e=e.toString();for(var n in i){var s=i[n];if(s.getHash()===e)return s}return!1},delByHash:function(e){var t=this.getByHash(e,!0);t&&t.sId&&this.delById(t.sId)},delById:function(e){this.delByIds([e])},delByIds:function(e,t){for(var i=[],n=0;n<e.length;n++){var s=this.getById(e[n]);s&&((s.isClosable()||s.isInPage())&&i.push(s),this.aMsgsToDelete.push(s))}var o=this;this.startDeletingMsgList(function(){o.saveAsRead(i),o.updateToggleBtn(),o.updateInPage(),"function"==typeof t&&t()})},delAllClosable:function(e){this.delByIds(this.getAllClosableIds(),e)},delAllClosableNotifs:function(e){var t=this;xv.utils.contextual_popup.confirm(xv.i18n.__("chat.delete_all_messages"),function(){t.delByIds(t.getAllClosableNotifsIds(),e)})},startDeletingMsgList:function(e){if(0===this.aMsgsToDelete.length)return void("function"==typeof e&&e());var t=this;this.aMsgsToDelete.pop()["delete"](),setTimeout(function(){t.startDeletingMsgList(e)},40)},updateViewedStatus:function(){if(0===this.countUnviewed(!0))return this.clearUpdateViewedStatusCheck(),!1;var e=this.getAll(),t=[];for(var i in e)!e[i].isViewed()&&e[i].hasBeenWatched()&&t.push(e[i]);t.length>0&&(this.setAllToViewed(t),this.updateAllRenders())},initUpdateViewedStatusCheck:function(){if(this.clearUpdateViewedStatusCheck(),this.isOpened()){var e=this;this.countUnviewed()>0&&(this.iVisibilityCheck=setInterval(function(){e.updateViewedStatus()},500))}},clearUpdateViewedStatusCheck:function(){!1!==this.iVisibilityCheck&&(clearInterval(this.iVisibilityCheck),this.iVisibilityCheck=!1)},setAllToViewed:function(e){"object"!=typeof e&&(e=this.getAll());var t=[];for(var i in e)e[i].isViewed()||e[i].setViewed(),e[i].isUnread()&&t.push(e[i]);this.saveAsRead(t)},saveAsRead:function(e){if(!(e.length<1)){var t="";for(var i in e)oMsg=e[i],oMsg.isUnread()&&(t+="msgid[]="+oMsg.getReadId()+"&",oMsg.setAsRead()),oMsg.setViewed(!0);if(""!==t){var n=xv.utils.createRequestObject();n.withCredentials=!0,n.open("POST","/account/message-closed",!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(t)}}},setAsDeleted:function(e,t){if(!(e.length<1)){var i="send_res=1";for(var n in e)oMsg=e[n],i+="&msgid[]="+oMsg.getDeleteId(),oMsg.setAsRead(),oMsg.setViewed(!0);if("send_res=1"!==i){var s=xv.utils.createRequestObject();s.withCredentials=!0,s.open("POST","/account/message-closed",!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.onreadystatechange=function(){if(4===s.readyState&&200===s.status&&s.response&&"function"==typeof t)try{var e="object"==typeof s.response?s.response:"string"==typeof s.response?JSON.parse(s.response):null;t(e)}catch(i){console.error(i,s)}},s.send(i)}}},showPreview:function(e){if(this.isOpened()||this.isInPage())return!1;var t=this.getById(e),i=this.getMsgContainer(),n=this.getPreviewMsgContainer();if(!t||!t.isNotif())return!1;"function"==typeof window.navigator.vibrate&&window.navigator.vibrate(100),xv.dom.addClass(i,"preview");var s=xv.dom.getChildren(n);s.length>0?n.insertBefore(t.getRender(!1,!0),s[0]):n.appendChild(t.getRender(!1,!0)),t.setPreview(!0)},hasPreview:function(){aMsgs=this.getAll();for(var e in aMsgs)if(aMsgs[e].isPreview())return!0;return!1},emptyPreviewContainer:function(){var e=this.getMsgContainer(),t=this.getAll();xv.dom.removeClass(e,"preview");for(var i in t)t[i].isPreview()&&t[i].removePreview();this.updateMsgContainer()},getLastAddedNotifMsg:function(){return 0!==this.aAddedNotifIds.length&&this.getById(this.aAddedNotifIds[0])},addToAddedNotifIds:function(e){this.removeFromAddedNotifIds(e),this.aAddedNotifIds.unshift(e)},removeFromAddedNotifIds:function(e){for(var t=0;t<this.aAddedNotifIds.length;t++)this.aAddedNotifIds[t]===e&&this.aAddedNotifIds.splice(t,1);return!1},count:function(e,t){if(!0!==e&&!0!==t){var i=this.getAll().length;return isNaN(i)?0:i}var n=this.getAll(),s=0;for(var o in n)(!0===t?!0===n[o].isNotifCountOnly():!0===n[o].isNotif())&&s++;return s},countTotal:function(){var e=this.count();return this.bNotificationsEnabled?"number"==typeof this.iNotifsNotLoaded&&(e+=this.iNotifsNotLoaded):e-=this.count(!0),e},countUnviewed:function(e){var t=this.getAll(),i=0,n=0;for(var s in t){var o=t[s];o.isInPage()||!1!==o.isViewed()||(i++,!0===o.isNotif()&&n++)}return this.bNotificationsEnabled?e||"number"!=typeof this.iNotifsUnviewed||(i+=this.iNotifsUnviewed):i-=n,i},createChatLoader:function(){var e=this.getById("message_spinner_from_chat",!0);if(e)return void(e.isDeleted()&&e.unDelete());this.initXMsg({id:"message_spinner_from_chat",c:'<span class="icon-f icf-spinner icf-anim-pulse"></span>',r:!0,bLoader:!0})},removeChatLoader:function(){var e=this.getById("message_spinner_from_chat",!0);e&&e["delete"](!1,!0)},loadMessagesFromChat:function(){this.bMessagesLoadedFromChat||"function"==typeof window.xv.get_messages_from_chat&&(this.isInPage()||this.createChatLoader(),window.xv.get_messages_from_chat())},getToggleBtn:function(){return this.createToggleBtn(),this.$ToggleBtn},createToggleBtn:function(){if("undefined"==typeof this.$ToggleBtn){var e=document.createElement("button");e.id="x-x-messages-btn",e.setAttribute("type","button");var t=document.createElement("span");t.className="ic",e.appendChild(t);var i=document.createElement("span");i.className="icon-f icf-bell",i.setAttribute("title",xv.utils.unescape(xv.i18n.__("messages.from_site",{"%site%":1===xv.utils.getSiteId()?xv.conf.dyn.is_premium?"Xvideos RED":"Xvideos.com":xv.conf.dyn.is_premium?"XNXX GOLD":"XNXX.com"}))),t.appendChild(i),this.$ToggleBtnBadge=document.createElement("span"),this.$ToggleBtnBadge.className="badge",e.appendChild(this.$ToggleBtnBadge);var n=this;xv.dom.addEventListener(e,"click",function(){n.toggleOpening()}),this.$ToggleBtn=e}},addToggleBtn:function(){if(!0===this.bToggleBtnAdded)return!1;this.$Container.appendChild(this.getToggleBtn()),this.bToggleBtnAdded=!0},removeToggleBtn:function(){if(!0!==this.bToggleBtnAdded)return!1;this.bToggleBtnAdded=!1,this.toggleOpening(!1),this.$Container.removeChild(this.getToggleBtn())},updateToggleBtn:function(){var e=this.countTotal();if(0===e||isNaN(e))return void this.removeToggleBtn();this.addToggleBtn(),this.updateToggleBtnBadge(),this.isOpened()?xv.dom.addClass(this.getToggleBtn(),"opened"):xv.dom.removeClass(this.getToggleBtn(),"opened")},updateToggleBtnBadge:function(){if(!0!==this.bToggleBtnAdded)return!1;var e=this.countUnviewed();this.$ToggleBtnBadge.innerHTML=e,this.$ToggleBtnBadge.style.display=e>0?"inline-block":"none"},setNextToChat:function(){var e=this.getToggleBtn(),t=this.getMsgContainer(),i=this.getMsgMenu();xv.dom.addClass(e,"chat-window-side"),xv.dom.addClass(t,"chat-window-side"),xv.dom.addClass(i,"chat-window-side")},addToggleCallback:function(e){"function"==typeof e&&this.aToggleCallbacks.push(e)},isOpened:function(e){return this.bOpened&&(!0===e||!this.bPartiallyOpened||0===this.count(!0))},toggleOpening:function(e,t){var i=!!t&&!!t.bPartial,n=!!t&&!!t.bUnreadOnly,s=!!t&&!!t.bUnreadNoUpdate;if(this.emptyPreviewContainer(),"boolean"!=typeof e)e=!this.isOpened();else if(e===this.bOpened&&this.bPartiallyOpened===!!i)return;if(!0==!!n){var o=!1,a=this.getAll();for(var d in a){var r=a[d];if(!(r.isViewed()||r.isNotif()&&!0!=!!i)){o=!0;break}}if(!1===o)return}var l=this.getMsgContainer();this.bOpened=e;var g=this;if(this.bOpened)this.bNotificationsInPage||this.loadMessagesFromChat(),this.initUpdateViewedStatusCheck(),this.bPartiallyOpened=!!i,this.updateMsgContainer(),this.bPartiallyOpened||"undefined"==typeof window.xv.menus||"function"!=typeof window.xv.menus.closeAll||window.xv.menus.closeAll(this.iAllMenuId),"function"==typeof $?$(l).slideDown("fast",function(){$(l).addClass("opened"),g.bPartiallyOpened||$("body").addClass("x-messages-opened"),g.updateAllRenders()}):xv.dom.addClass(l,"opened");else{this.isSettingsInPage()||this.toggleSettings(!1),this.clearUpdateViewedStatusCheck();var h=[],c=0,u=Math.round((new Date).getTime()/1e3);for(var f in this.oCookieExpiration)h.push(f+":"+(u+parseInt(this.oCookieExpiration[f]))),c=Math.max(0,this.oCookieExpiration[f]);xv.cookies.setLocal("hide_xmsg",h.join(","),1e3*c,"/"),s||(this.bPartiallyOpened?this.setAllToViewed(this.getAllSysMsg()):this.setAllToViewed()),"function"==typeof $?$(l).slideUp("fast",function(){$(l).removeClass("opened"),$("body").removeClass("x-messages-opened"),g.updateAllRenders()}):xv.dom.removeClass(l,"opened")}for(var d in this.aToggleCallbacks)this.aToggleCallbacks[d](this.bOpened);"function"!=typeof $&&this.updateAllRenders()},getMsgContainer:function(){return this.createMsgContainer(),this.$MsgContainer},getPreviewMsgContainer:function(){return this.createMsgContainer(),this.$PreviewMsgContainer},getSysMsgContainer:function(){return this.createMsgContainer(),this.$SysMsgContainer},getNotifMsgContainer:function(){return this.createMsgContainer(),this.$NotifMsgContainer},createMsgContainer:function(){if("undefined"==typeof this.$MsgContainer){this.$MsgContainer=document.createElement("div"),this.$MsgContainer.id="x-messages",$MsgContainerBack=document.createElement("div"),$MsgContainerBack.id="x-messages-back",this.$MsgContainer.appendChild($MsgContainerBack),this.$MsgContainerScrollable=document.createElement("div"),this.$MsgContainerScrollable.id="x-messages-scrollable",this.$PreviewMsgContainer=document.createElement("div"),this.$PreviewMsgContainer.className="preview-container";var e=this,t=document.createElement("div");t.className="preview-overlay",xv.dom.addEventListener(t,"click",function(){e.toggleOpening(!0)}),this.$PreviewMsgContainer.appendChild(t),this.$MsgContainerScrollable.appendChild(this.$PreviewMsgContainer),this.$SysMsgContainer=document.createElement("div"),this.$MsgContainerScrollable.appendChild(this.$SysMsgContainer),this.isInPage()?this.$NotifMsgContainer=document.getElementById("account-notifications"):(this.$NotifMsgContainer=document.createElement("div"),$NotifTitle=document.createElement("p"),$NotifTitleIcon=document.createElement("span"),$NotifTitle.className="notif-sep",$NotifTitleIcon.className="icon-f icf-bell",$NotifTitle.appendChild($NotifTitleIcon),this.$NotifMsgContainer.appendChild($NotifTitle),this.$MsgContainerScrollable.appendChild(this.$NotifMsgContainer)),this.$MsgContainer.appendChild(this.$MsgContainerScrollable);var i=this.getToggleBtn();this.addToggleBtn(),i.parentNode.insertBefore(this.$MsgContainer,i),xv.dom.addEventListener($MsgContainerBack,"click",function(){e.toggleOpening(!1)}),xv.dom.addEventListener(this.$MsgContainerScrollable,"scroll",function(){e.updateMsgContainerScroll()}),this.updateToggleBtn()}},updateMsgContainer:function(){var e=this.getSysMsgContainer(),t=this.getNotifMsgContainer();if(!this.isOpened(!0))return xv.dom.addClass(e,"hidden"),void(this.isInPage()||xv.dom.addClass(t,"hidden"));xv.dom.removeClass(e,"hidden");var i=this;setTimeout(function(){i.updateMsgContainerScroll()},200);var n=this.getPreviewMsgContainer(),s=this.getAll(),o=this.count(!0);this.isInPage()||(0!==o&&!this.bPartiallyOpened&&this.isOpened()&&this.bNotificationsEnabled?xv.dom.removeClass(t,"hidden"):xv.dom.addClass(t,"hidden")),this.bNotificationsEnabled?xv.dom.removeClass(n,"hidden"):xv.dom.addClass(n,"hidden");var a=!0,d=!1;for(var r in s){var l=s[r];if(!l.isInPage())if(l.isAdded())l.updateRender(),l.isNotif()?d=!0:a=!1;else if(l.isNotif()){if(!this.bPartiallyOpened){var g=this.getLastAddedNotifMsg(),h=l.getRender();g?t.insertBefore(h,g.getRender()):t.appendChild(h),l.setAdded(),d=!0}}else e.appendChild(l.getRender()),l.setAdded(),a=!1}var c=this.getMsgContainer();!0===a&&!0===d?xv.dom.addClass(c,"notif-only"):xv.dom.removeClass(c,"notif-only")},updateMsgContainerScroll:function(){var e=this.getMsgContainer();if(!isNaN(this.$MsgContainerScrollable.scrollHeight)){if(this.$MsgContainerScrollable.scrollHeight<=this.$MsgContainerScrollable.offsetHeight)return xv.dom.removeClass(e,"can-scroll-top"),void xv.dom.removeClass(e,"can-scroll-bottom");if(0===this.$MsgContainerScrollable.scrollTop)return xv.dom.removeClass(e,"can-scroll-top"),void xv.dom.addClass(e,"can-scroll-bottom");xv.dom.addClass(e,"can-scroll-top"),this.$MsgContainerScrollable.offsetHeight+this.$MsgContainerScrollable.scrollTop>=this.$MsgContainerScrollable.scrollHeight?xv.dom.removeClass(e,"can-scroll-bottom"):xv.dom.addClass(e,"can-scroll-bottom")}},updateInPage:function(){if(!this.isInPage())return!1;if(this.$InPageDeleteAll){this.getAllNotif().length>0?"function"==typeof $?$(this.$InPageDeleteAll).is(":visible")||$(this.$InPageDeleteAll).fadeIn():this.$InPageDeleteAll.style.display="inline-block":"function"==typeof $?$(this.$InPageDeleteAll).is(":visible")&&$(this.$InPageDeleteAll).fadeOut():this.$InPageDeleteAll.style.display="none"}var e=this.count(null,!0);if(e!==this.iLastNewInPageCount){if(this.iLastNewInPageCount=e,e<1)return void(this.$InPageReloadBtn&&(this.$InPageReloadBtn.style.display="none"));$NewNotifsCount=document.getElementById("account-notifications-new-count"),xv.dom.addClass($NewNotifsCount,"updated"),setTimeout(function(){xv.dom.removeClass($NewNotifsCount,"updated")},1e3),$NewNotifsCount.innerHTML=e,this.$InPageReloadBtn&&("function"==typeof $?$(this.$InPageReloadBtn).is(":visible")||$(this.$InPageReloadBtn).fadeIn():this.$InPageReloadBtn.style.display="block")}},getMsgMenu:function(){return this.createMsgMenu(),this.$MsgMenu},createMsgMenu:function(){if("undefined"==typeof this.$MsgMenu){this.$MsgMenu=document.createElement("div"),this.$MsgMenu.id="x-messages-menu";var e=this,t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("title",xv.utils.unescape(xv.i18n.__("misc.reduce")));var i=document.createElement("span");i.className="icon-f icf-angle-down",t.appendChild(i),xv.dom.addEventListener(t,"click",function(){e.toggleOpening(!1)}),this.isSettingsInPage()||($SettingsBtn=this.getSettingsBtn(),this.$MsgMenu.appendChild($SettingsBtn),"function"==typeof window.xv.get_messages_from_chat&&($SeeAll=document.createElement("a"),$SeeAll.setAttribute("href","/account/my-notifications"),$SeeAll.className="btn",$SeeAll.innerHTML=xv.i18n.__("misc.see_all"),this.$MsgMenu.appendChild($SeeAll))),this.$MsgMenu.appendChild(t);var n=this.getToggleBtn();this.addToggleBtn(),n.parentNode.insertBefore(this.$MsgMenu,n),this.updateToggleBtn()}},updateMsgMenu:function(){var e=this.getMsgMenu();return this.isOpened(!0)?("function"==typeof $?$(e).hasClass("opened")||$(e).slideDown("fast",function(){$(e).addClass("opened")}):xv.dom.addClass(e,"opened"),this.hasMsgMenuSetting()?xv.dom.addClass(e,"has-settings"):xv.dom.removeClass(e,"has-settings"),this.isOpened()?(xv.dom.removeClass(e,"partially"),void(this.hasClosableMsg()?xv.dom.addClass(e,"has-closable"):xv.dom.removeClass(e,"has-closable"))):(xv.dom.removeClass(e,"has-closable"),void xv.dom.addClass(e,"partially"))):("function"==typeof $?$(e).slideUp("fast",function(){$(e).removeClass("opened")}):xv.dom.removeClass(e,"opened"),void(this.isSettingsInPage()||this.toggleSettings(!1)))},toggleSettings:function(e){if(!1!==e&&"undefined"!=typeof xv&&"undefined"!=typeof xv.settings_btn&&"function"==typeof xv.settings_btn.openChatSettings&&!this.bSettingsOpened)return void xv.settings_btn.openChatSettings();if("boolean"!=typeof e)e=!this.bSettingsOpened;else if(e===this.bSettingsOpened)return;this.bSettingsOpened=e;var t=this.getSettings();this.bSettingsOpened?("function"==typeof $?$(t).slideDown("fast",function(){$(t).addClass("opened")}):xv.dom.addClass(t,"opened"),xv.dom.addClass(this.$SettingsBtn,"opened")):(xv.dom.removeClass(t,"opened"),"function"==typeof $?$(t).slideUp("fast",function(){$(t).removeClass("opened")}):xv.dom.removeClass(t,"opened"),xv.dom.removeClass(this.$SettingsBtn,"opened"))},getSettingsBtn:function(){if("undefined"!=typeof this.$SettingsBtn)return this.$SettingsBtn;if(this.isSettingsInPage()&&($SettingsBtn=document.getElementById("account-notifications-settings"),$SettingsBtn&&(this.$SettingsBtn=$SettingsBtn)),"undefined"==typeof this.$SettingsBtn){this.$SettingsBtn=document.createElement("button"),this.$SettingsBtn.className="settings-btn btn btn-default",this.$SettingsBtn.setAttribute("type","button"),this.$SettingsBtn.setAttribute("title",xv.utils.unescape(xv.i18n.__("misc.settings")));var e=document.createElement("span");e.className="icon-f icf-cog",this.$SettingsBtn.appendChild(e)}var t=this;return xv.dom.addEventListener(this.$SettingsBtn,"click",function(e){e=e||window.event,"function"==typeof e.preventDefault?e.preventDefault():e.returnValue=!1,t.toggleSettings()}),this.$SettingsBtn},getSettings:function(){return this.updateSettings(),this.$Settings},updateSettings:function(){if(this.createSettings(),"undefined"!=typeof this.aSettings&&("undefined"==typeof this.iLastSettingsUpdate||this.iLastSettingsUpdate!==this.aSettings.length)){this.iLastSettingsUpdate=this.aSettings.length;for(var e=0;e<this.aSettings.length;e++){var t=this.aSettings[e];if(!t.bAdded){t.bAdded=!0;var i=document.createElement("button");i.className="btn btn-default",
i.setAttribute("type","button"),i.innerHTML=t.sTitle,xv.dom.addEventListener(i,"click",t.fAction),this.$Settings.appendChild(i)}}}},createSettings:function(){if("undefined"==typeof this.$Settings){this.$Settings=document.createElement("div"),this.$Settings.id="x-messages-menu-settings",this.isSettingsInPage()&&(this.$Settings.className="is-in-page");var e=this,t=document.createElement("button");t.className="close",t.setAttribute("type","button");var i=document.createElement("span");i.className="icon-f icf-close-thin",t.appendChild(i),xv.dom.addEventListener(t,"click",function(){e.toggleSettings(!1)}),this.$Settings.appendChild(t);var n=document.createElement("p");n.className="title";var s=document.createElement("span");s.className="icon-f icf-cog",n.appendChild(s);var o=document.createTextNode(" "+xv.utils.unescape(xv.i18n.__("misc.settings"))+" ");n.appendChild(o),this.$Settings.appendChild(n);var a=!1;if(this.isSettingsInPage()&&($ActionsContainer=document.getElementById("account-notifications-actions"),$ActionsContainer&&($ActionsContainer.append(this.$Settings),a=!0)),!1===a){var d=this.getToggleBtn();this.addToggleBtn(),d.parentNode.insertBefore(this.$Settings,d)}this.updateToggleBtn()}},addAMsgMenuSetting:function(e,t){"undefined"==typeof this.aSettings&&(this.aSettings=[]),this.aSettings.push({sTitle:e,fAction:t,bAdded:!1})},hasMsgMenuSetting:function(){return"undefined"!=typeof this.aSettings&&!this.isSettingsInPage()&&this.aSettings.length>0},isInPage:function(){return!!this.bNotificationsInPage},isSettingsInPage:function(){return!!this.bNotificationSettingsInPage},registerHash:function(e,t){this.oCookieExpiration[e]=t||1296e3},updateAllRenders:function(){this.updateToggleBtn(),this.updateMsgContainer(),this.updateMsgMenu(),this.updateInPage()},setNotificationFeatureEnabled:function(e){this.isInPage()?this.bNotificationsEnabled=!1:this.bNotificationsEnabled=!!e,this.updateAllRenders()}};var i=new t,n={};window.xv.messages={registerOnToggle:function(e){i&&"function"==typeof i.addToggleCallback&&i.addToggleCallback(e)},xmmDelById:function(e){i&&"function"==typeof i.delById&&i.delById(e)},xmmDelByHash:function(e){i&&"function"==typeof i.delByHash&&i.delByHash(e)},updateAjaxTabMessages:function(){var e=document.getElementById("x-ajax-tab-messages");e&&new o(e)},addXMessageSetting:function(e,t){if(!i)return!1;i.addAMsgMenuSetting(e,t)},setMessageNextToChat:function(){i&&(i.setNextToChat(),i.loadMessagesFromChat())},removeChatLoader:function(){if(!i)return!1;i.removeChatLoader()},setNotificationFeatureEnabled:function(e){if(!i)return!1;i.setNotificationFeatureEnabled(e)},addMessageFromChat:function(e,t){if("object"!=typeof e||"object"!=typeof i||"function"!=typeof i.initXMsg)return!1;i.removeChatLoader(),e.n=!0,e.bInPage=i.isInPage();var n=i.initXMsg(e);i.updateAllRenders(),!i.isOpened()&&n&&(t?i.toggleOpening(!0):i.showPreview(n.sId))},setMessagesFromChat:function(e){if(!i)return!1;if(i.removeChatLoader(),"object"==typeof e)for(var t in e)"undefined"!=typeof e[t].h&&i.delByHash(e[t].h),e[t].bInPage=i.isInPage(),i.initXMsg(e[t]);i.bMessagesLoadedFromChat=!0,i.updateAllRenders()},setMessagesCountsFromChat:function(e){if(i.removeChatLoader(),"undefined"==typeof e.count||"undefined"==typeof e.count_unread||!i||void 0!==i&&i.bMessagesLoadedFromChat)return!1;isNaN(parseInt(e.count))||(i.iNotifsNotLoaded=parseInt(e.count)),isNaN(parseInt(e.count_unread))||(i.iNotifsUnviewed=parseInt(e.count_unread)),i.updateToggleBtn(),i.isOpened()&&i.loadMessagesFromChat()},setGenericMessage:function(e,t){if(!i)return!1;i.removeChatLoader(),t&&i.toggleOpening(!0,{bPartial:!0}),"object"==typeof e&&i.initXMsg(e),i.updateAllRenders()},xmmHTMLDelById:function(e){var t=n[e];if(void 0===t||"function"!=typeof t["delete"])return!1;t["delete"]()}},xv.conf&&("undefined"!=typeof xv.conf.dyn.xmsg&&xv.conf.dyn.xmsg.length>0&&(i.initXMsgs(xv.conf.dyn.xmsg),i.toggleOpening(!0,{bPartial:!0,bUnreadOnly:!0})),i.isInPage()&&"undefined"!=typeof xv.conf.data.notifications&&xv.conf.data.notifications.length>0&&i.initXMsgs(xv.conf.data.notifications,!0));var s=function(e){this.$Msg=e;var t=xv.dom.getChildren(this.$Msg),i=this;for(var s in t){var o=t[s];if(xv.dom.hasClass(o,"del")){var a;if(!(a=o.dataset?o.dataset.id:o.getAttribute("id")))return void o.parentNode.removeChild(o);this.sCloseId=a,n[a]=this,xv.dom.addEventListener(o,"click",function(e){e=e||window.event,"function"==typeof e.preventDefault?e.preventDefault():e.returnValue=!1,i["delete"]()})}}};s.prototype={"delete":function(){var e=xv.utils.createRequestObject();e.withCredentials=!0,e.open("POST","/account/message-closed",!0),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send("msgid[]="+this.sCloseId),this.$Msg.parentNode.removeChild(this.$Msg),"undefined"!=typeof n[this.sCloseId]&&delete n[this.sCloseId]}};var o=function(e){this.$Container=e,this.$ContainerInner=xv.dom.getFirstChild(this.$Container);var t=xv.dom.getChildren(this.$ContainerInner);for(var i in t){var n=t[i];xv.dom.hasClass(n,"x-message")&&new s(n)}},a=document.getElementById("x-home-messages");a&&new o(a);var d=document.getElementById("x-red-home-messages");d&&new o(d)}(),function(){var e=!1;window.mobile_cat_list_resize=function(){if(!window.jQuery)return!1!==e&&(clearTimeout(e),e=!1),e=setTimeout(function(){e=!1,window.mobile_cat_list_resize()},500),!1;var t=$("#mobile-cat-list");if(0===t.length)return!1;var i=$(window).height()-t.offset().top-14;t.css("max-height",i)};var t=!1,i=!1;i=function(e){if(!window.jQuery)return!1!==t&&(clearTimeout(t),t=!1),t=setTimeout(function(){t=!1,i(e)},500),!1;var n=$("#xnxx-search-bar-close");n.length>0?n.off("click").on("click",function(){e.toggle(!1)}):$("body").addClass("no-btn-search-close"),window.mobile_cat_list_resize()};var n={};n.menu={id:"mobile-menu",icon_cls:"vertical"},n.search={id:"xnxx-search-bar",icon_cls:"close",dontScrollToTop:!0,body_cls_onopen:"header-mobile-search-opened",onopen_func:i},n["cat-menu"]={id:"side-categories",icon_cls:"vertical",is_desktop:!0,hide_class:"side-cover-hidden"},xv.mobile.menus_init(n)}();