window.r7=window.r7||{},window.r7.ads=function(){function n(){var a,t=window.r7.slot.getSlotDefinitions();if(!t)return!1;"intextvideo"===t.sizes?window.r7.intextvideo.load(t):(a=t,googletag.cmd.push(function(){var t=googletag.defineSlot(a.hash,a.sizes).addService(googletag.pubads());"fluid"==a.sizes?t.setTargeting("pos","native"):a.pos&&t.setTargeting("pos",a.pos),a.context&&t.setTargeting("context",a.context);for(var e=0;e<a.others.length;e++){var i=a.others[e];t.setTargeting(i.name,i.value)}window.r7.tailTarget.tailTargetWithGPT(t);var n=t.getSlotElementId(),o=a.script;window.r7.slot.createAdSlot(o,n),googletag.display(t)})),n()}return{load:function(){var e,i=window.r7;e=setInterval(function(){var t=i.adv.isReady();i.tailTarget.isReady()&&t&&(n(),clearInterval(e))},0)}}}(),window.r7=window.r7||{},window.r7.adv=function(){var t="https://adv.r7.com//script/async?href="+window.location.href.split("?")[0];return{load:function(){if(document.querySelector("script[src='"+t+"']"))return!1;window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],googletag.cmd.push(function(){googletag.pubads().enableSingleRequest(),googletag.enableServices()}),window.r7.fif.setSourceURL(t).createFif("window.parent.r7ad=r7ad;")},isReady:function(){return"undefined"!=typeof r7ad}}}(),window.r7=window.r7||{},window.r7.fif=function(){var i,n;return{setSourceURL:function(t){return i=t,this},createFif:function(t){((n=document.createElement("iframe")).frameElement||n).style.cssText="width: 0; height: 0; border: 0",n.src="javascript:false",document.body.appendChild(n);var e=n.contentWindow.document;e.open().write("<body onload=\"var js = document.createElement('script');js.src = '"+i+"';js.onload=function(){ "+t+' };document.body.appendChild(js);">'),e.close()}}}(),window.r7=window.r7||{},window.r7.gpt=function(){var e="https://securepubads.g.doubleclick.net/tag/js/gpt.js";return{load:function(){if(document.querySelector("script[src='"+e+"']")||window.googletag&&googletag.apiReady)return!1;var t=document.createElement("script");t.src=e,t.async=!0,document.body.appendChild(t)}}}(),window.r7=window.r7||{},window.r7.intextvideo=function(){var i,n,o,a,r,d,t=!1,g="video-intext-r7",l=640,c=360,s=20,w=null,u=null,I={};function m(){var t;v(),t=["display: block","height: 0","max-width: "+l+"px","overflow: hidden","text-align: center","padding: 0","margin: 0","float: left"].join(";"),i.style.cssText=t,n=new google.ima.AdDisplayContainer(i),(o=new google.ima.AdsLoader(n)).addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,y,!1),o.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,C,!1);var e=new google.ima.AdsRequest;e.adTagUrl=window.r7.utils.getTagUrl(I),e.linearAdSlotWidth=l,e.linearAdSlotHeight=c,e.nonLinearAdSlotWidth=l,e.nonLinearAdSlotHeight=c/3,o.requestAds(e)}function p(){if(window.r7.utils.isInViewport(i)&&(window.removeEventListener("scroll",u),!t)){t=!0,n.initialize();try{!function(){i.style.float="none",i.style.marginBottom="48px",i.style.marginTop="20px",i.style.paddingTop="28px";var t=0,e=setInterval(function(){if(c<=t)return i.style.height=c+"px",i.style.display="block",clearInterval(e),!1;i.style.height=t+"px",t+=s},0)}(),v(),a.init(l,c,google.ima.ViewMode.NORMAL),a.start()}catch(t){}}}function v(){l=i.clientWidth,c=Math.ceil(.5625*l)}function b(){(r=document.createElement("header")).style.cssText=["display: flex","align-items: center","justify-content: space-between","margin-top: -28px"].join(";");var t,e=document.createElement("span");e.textContent="Publicidade",e.style.color="#95a5a6",t=["border: none","padding: 0","margin: 0","cursor: pointer","height: 20px","width: 20px"].join(";"),(d=document.createElement("img")).src=window.r7.utils.getMuteIconBase64(),d.alt="BotÃ£o para controlar o volume da publicidade",d.setAttribute("data-clicked",!1),d.style.cssText=t,d.onclick=A,r.appendChild(e),r.appendChild(d),i.appendChild(r)}function A(t){t.preventDefault();var e=t.target,i="true"===e.getAttribute("data-clicked");!i&&a?(e.src=window.r7.utils.getSpeakerIconBase64(),a.setVolume(1)):a&&(e.src=window.r7.utils.getMuteIconBase64(),a.setVolume(0)),t.target.setAttribute("data-clicked",!i)}function y(t){(a=t.getAdsManager({})).addEventListener(google.ima.AdEvent.Type.STARTED,e),a.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,C),a.addEventListener(google.ima.AdEvent.Type.COMPLETE,C),a.addEventListener(google.ima.AdEvent.Type.CLICK,C),a.addEventListener(google.ima.AdEvent.Type.SKIPPED,C)}function e(){a&&a.setVolume(0)}function C(){a&&a.destroy(),function(){i.style.marginBottom="0",i.style.paddingTop="0";var t=c,e=setInterval(function(){if(t<=0)return i.style.height="0",i.style.display="none",clearInterval(e),!1;i.style.height=t+"px",t-=s/2},0)}()}return{load:function(t){if(g=(I=t).target||g,i=document.getElementById(g)){!function(){var t="//imasdk.googleapis.com/js/sdkloader/ima3.js";if(!document.querySelector('script[src="'+t+'"]')){var e=document.createElement("script");e.src=t,document.body.appendChild(e)}}();var e=setInterval(function(){window.google&&window.google.ima&&(b(),m(),u=function(){null!==w&&clearTimeout(w),w=setTimeout(p,500)},window.addEventListener("scroll",u),window.addEventListener("resize",function(t){v(),a&&a.resize(l,c,google.ima.ViewMode.NORMAL)}),clearInterval(e))},0)}}}}(),window.r7=window.r7||{},window.r7.slot={createAdSlot:function(t,e){try{var i=document.createElement("div");return i.id=e,t.parentNode.insertBefore(i,t),i}catch(t){}},getSlotDefinitions:function(){var t,e=((t=document.querySelector('script[data-vendor="r7.com"]:not(.already-visited)'))&&t.classList.add("already-visited"),t);if(!e)return!1;var i=e.getAttribute("data-hash")||window.r7ad.hash,n=e.getAttribute("data-sizes");-1===["fluid","intextvideo"].indexOf(n.toLowerCase())&&(n=JSON.parse(n));for(var o=e.getAttribute("data-pos"),a=e.getAttribute("data-context"),r=e.getAttribute("data-nofollow"),d=e.getAttribute("data-target"),g=[],l=0;l<e.attributes.length-1;l++){var c=e.attributes[l];-1!==c.name.indexOf("data-")&&-1===["data-hash","data-sizes","data-vendor","data-pos","data-context","data-nofollow","data-target"].indexOf(c.name)&&g.push({name:c.name.replace("data-",""),value:c.value})}return{sizes:n,pos:o,context:a,others:g,hash:i,nofollow:r,script:e,target:d}}},window.r7=window.r7||{},window.r7.tailTarget=function(){var t=!1,e="https://scs.r7.com/tailtarget/profiles.js";return{load:function(){if(document.querySelector("script[src='"+e+"']"))return!1;var t=["window.parent._ttprofiles=_ttprofiles;","window.parent.r7.tailTarget.setReadyState();"].join("");window.r7.fif.setSourceURL(e).createFif(t)},isReady:function(){return t},setReadyState:function(){t=!0,window._ttprofiles=window._ttprofiles||[],_ttprofiles.profiles=[],_ttprofiles.push(["_setAccount","TT-9964-3"]),_ttprofiles.push(["_enableServices"])},tailTargetWithGPT:function(t){if(!t)return!1;t.setTargeting("age",_ttprofiles.getAge),t.setTargeting("gender",_ttprofiles.getGender),t.setTargeting("cluster",_ttprofiles.getProfiles),t.setTargeting("subjects",_ttprofiles.getSubjects),t.setTargeting("team",_ttprofiles.getTeam),t.setTargeting("sclass",_ttprofiles.getSocialClass),t.setTargeting("msegments",_ttprofiles.getMicrosegments),t.setTargeting("customaud",_ttprofiles.getCustomAudience)},setTargeting:function(){var t=window._ttprofiles||[],e={age:t.getAge,gender:t.getGender,cluster:t.getProfiles,subjects:t.getSubjects,team:t.getTeam,sclass:t.getSocialClass,msegments:t.getMicrosegments,customaud:t.getCustomAudience},i="";for(var n in e)e.hasOwnProperty(n)&&(i+=n+"="+e[n]+"&");return encodeURIComponent(i)}}}(),window.r7=window.r7||{},window.r7.utils={getMuteIconBase64:function(){return"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgdmVyc2lvbj0iMS4wIgogICBpZD0ibGF5ZXIxIgogICB3aWR0aD0iNDAwcHQiCiAgIGhlaWdodD0iNDAwcHQiCiAgIHZpZXdCb3g9IjAgMCA3NSA3NSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4zLjEgcjk4ODYiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik11dGVfSWNvbi5zdmciPjxkZWZzCiAgIGlkPSJkZWZzMzAwNyIgLz48c29kaXBvZGk6bmFtZWR2aWV3CiAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgIG9iamVjdHRvbGVyYW5jZT0iMTAiCiAgIGdyaWR0b2xlcmFuY2U9IjEwIgogICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwIgogICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiCiAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMjgiCiAgIGlkPSJuYW1lZHZpZXczMDA1IgogICBzaG93Z3JpZD0iZmFsc2UiCiAgIHNob3dndWlkZXM9InRydWUiCiAgIGlua3NjYXBlOmd1aWRlLWJib3g9InRydWUiCiAgIGlua3NjYXBlOnpvb209IjAuNjQ5IgogICBpbmtzY2FwZTpjeD0iLTI4Mi40MTk2IgogICBpbmtzY2FwZTpjeT0iMTcxLjgzNDgiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMSIKICAgaW5rc2NhcGU6c25hcC1zbW9vdGgtbm9kZXM9ImZhbHNlIgogICBpbmtzY2FwZTpvYmplY3QtcGF0aHM9ImZhbHNlIj48c29kaXBvZGk6Z3VpZGUKICAgICBvcmllbnRhdGlvbj0iMCwxIgogICAgIHBvc2l0aW9uPSI0Mi40OTE3NzksMzI2Ljg1OTg0IgogICAgIGlkPSJndWlkZTMwMDkiIC8+PHNvZGlwb2RpOmd1aWRlCiAgICAgb3JpZW50YXRpb249IjAsMSIKICAgICBwb3NpdGlvbj0iMTE4LjY0NDA3LDE2NC44NjkwMyIKICAgICBpZD0iZ3VpZGUzMDExIiAvPjxzb2RpcG9kaTpndWlkZQogICAgIG9yaWVudGF0aW9uPSIxLDAiCiAgICAgcG9zaXRpb249IjMyNC4zNDUxNSwxOTQuNTMwMDUiCiAgICAgaWQ9Imd1aWRlMzAwNSIgLz48c29kaXBvZGk6Z3VpZGUKICAgICBvcmllbnRhdGlvbj0iMSwwIgogICAgIHBvc2l0aW9uPSI0NjIuNjM0ODIsMTcwLjY0NzE1IgogICAgIGlkPSJndWlkZTMwMDciIC8+PC9zb2RpcG9kaTpuYW1lZHZpZXc+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTEiPjxyZGY6UkRGPjxjYzpXb3JrCiAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUKICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGUgLz48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGcKICAgaWQ9ImcxIj48cG9seWdvbgogICBpZD0icG9seWdvbjEiCiAgIHBvaW50cz0iMzkuMzg5LDEzLjc2OSAyMi4yMzUsMjguNjA2IDYsMjguNjA2IDYsNDcuNjk5IDIxLjk4OSw0Ny42OTkgMzkuMzg5LDYyLjc1IDM5LjM4OSwxMy43NjkiCiAgIHN0eWxlPSJzdHJva2U6IzExMTExMTtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWpvaW46cm91bmQ7ZmlsbDojMTExMTExOyIgLz4KCjxwYXRoCiAgIGlkPSJwYXRoMzAwMyIKICAgZD0iTSA0OC42NTE3NzIsNTAuMjY5NjQ2IDY5LjM5NTIyMywyNS45NzEwMjQiCiAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxMTExMTE7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQiCiAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiCiAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CjxwYXRoCiAgIGlkPSJwYXRoMzAwMy0xIgogICBkPSJNIDY5LjM5NTIyMyw1MC4yNjk2NDYgNDguNjUxNzcyLDI1Ljk3MTAyNCIKICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzExMTExMTtzdHJva2Utd2lkdGg6NTtzdHJva2UtbGluZWNhcDpyb3VuZCIKICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz48L2c+Cjwvc3ZnPg=="},getSpeakerIconBase64:function(){return"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4wIiAgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCA3NSA3NSI+DQo8cGF0aCBkPSJNMzkuMzg5LDEzLjc2OSBMMjIuMjM1LDI4LjYwNiBMNiwyOC42MDYgTDYsNDcuNjk5IEwyMS45ODksNDcuNjk5IEwzOS4zODksNjIuNzUgTDM5LjM4OSwxMy43Njl6Ig0Kc3R5bGU9InN0cm9rZTojMTExO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lam9pbjpyb3VuZDtmaWxsOiMxMTE7Ig0KLz4NCjxwYXRoIGQ9Ik00OCwyNy42YTE5LjUsMTkuNSAwIDAgMSAwLDIxLjRNNTUuMSwyMC41YTMwLDMwIDAgMCAxIDAsMzUuNk02MS42LDE0YTM4LjgsMzguOCAwIDAgMSAwLDQ4LjYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxMTE7c3Ryb2tlLXdpZHRoOjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQiLz4NCjwvc3ZnPg=="},getTagUrl:function(t){var e,i,n,o=window.location.hostname,a=!isNaN(parseInt(o)),r="localhost"===o,d=-1!==o.indexOf("ir7.com.br");return r||a||d?"https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=":(e=t,i=Math.floor(Date.now()/1e3),n=window.r7.tailTarget.setTargeting(),"https://pubads.g.doubleclick.net/gampad/ads?sz=780x432&iu="+e.hash+"&gdfp_req=1&env=vp&output=xml_vast4&unviewed_position_start=1&url="+document.referrer+"&correlator="+i+"&cust_params=pos%3Dintextvideo%26"+n+"&ad_rule=0")},isInViewport:function(t){if(t){var e=t.getBoundingClientRect(),i=0<e.bottom&&0<e.right,n=e.left<(window.innerWidth||document.documentElement.clientWidth),o=e.top-0<(window.innerHeight||document.documentElement.clientHeight);return i&&n&&o}}},window.r7=window.r7||{},window.r7.alreadyStarted=!1,window.r7.main={start:function(){if(window.r7.alreadyStarted)return!1;window.r7.alreadyStarted=!0,window.r7.gpt.load(),window.r7.tailTarget.load(),window.r7.adv.load(),window.r7.ads.load()}},window.removeEventListener("load",window.r7.main.start),"complete"===document.readyState?window.r7.main.start():window.addEventListener("load",window.r7.main.start);