// For license information, see `https://assets.adobedtm.com/aaa144e582c6/03f800b52437/c8d0f3596000/RC1ff711427377437b9b50960439f9463e-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/aaa144e582c6/03f800b52437/c8d0f3596000/RC1ff711427377437b9b50960439f9463e-source.min.js', "if(!window.mobileApp){if(null==_satellite.cookie.get(\"run_fs_for_user\")){var fs_value=Math.floor(20*Math.random())+1<=14;_satellite.cookie.set(\"run_fs_for_user\",fs_value,1)}var orgId;if(\"production\"===_satellite.buildInfo.environment&&(orgId=_satellite.getVar(\"Fullstory_Org_ID\")),orgId&&\"true\"==_satellite.cookie.get(\"run_fs_for_user\")&&(window._fs_debug=!1,window._fs_host=\"fullstory.com\",window._fs_org=orgId,window._fs_namespace=\"FS\",window._fs_script=\"edge.fullstory.com/s/fs.js\",function(e,t,n,o,i,s,a,r){n in e?e.console&&e.console.log&&e.console.log('FullStory namespace conflict. Please set window[\"_fs_namespace\"].'):((a=e[n]=function(e,t,n){a.q?a.q.push([e,t,n]):a._api(e,t,n)}).q=[],(s=t.createElement(o)).async=1,s.crossOrigin=\"anonymous\",s.src=\"https://\"+_fs_script,(r=t.getElementsByTagName(o)[0]).parentNode.insertBefore(s,r),a.identify=function(e,t,n){a(i,{uid:e},n),t&&a(i,t,n)},a.setUserVars=function(e,t){a(i,e,t)},a.event=function(e,t,n){a(\"event\",{n:e,p:t},n)},a.shutdown=function(){a(\"rec\",!1)},a.restart=function(){a(\"rec\",!0)},a.log=function(e,t){a(\"log\",[e,t])},a.consent=function(e){a(\"consent\",!arguments.length||e)},a.identifyAccount=function(e,t){s=\"account\",(t=t||{}).acctId=e,a(s,t)},a.clearUserCookie=function(){},a._w={},r=\"XMLHttpRequest\",a._w[r]=e[r],r=\"fetch\",a._w[r]=e[r],e[r]&&(e[r]=function(){return a._w[r].apply(this,arguments)}))}(window,document,window._fs_namespace,\"script\",\"user\"),window.FS)){window._fs_ready=function(){window.fsSessionUrl=FS.getCurrentSessionURL(),\"undefined\"!=typeof window.newrelic&&\"undefined\"!=typeof window.newrelic.setCustomAttribute&&newrelic.setCustomAttribute(\"fullStorySessionUrl\",window.fsSessionUrl)},_satellite.getVar(\"Visitor_Account_ID\")&&FS.identify(_satellite.getVar(\"Visitor_Account_ID\"),{email:_satellite.getVar(\"Visitor_MD5_Email\")}),FS.setUserVars({adobeCloudId:_satellite.getVar(\"Adobe_ECID\")});var akamaiCookieValue=s.cookieRead(_satellite.getVar(\"Akamai_Cookie_Name\"));FS.event(\"Akamai String\",{akamai_cookie_value_str:s.cookieRead(_satellite.getVar(\"Akamai_Cookie_Name\"))}),FS.event(\"Bucket\",{shop:\"shop.saksfifthavenue.com\"===window.location.host}),window.addEventListener(\"MDigital_Submit_Feedback\",function(e){FS.event(\"Feedback Submitted\",{nps_score:e.detail.Content[0].value})}),window.addEventListener(\"error\",function(e){FS.event(\"Application Error\",{name:e.name,message:e.message,stack:e.stack})}),window.addEventListener(\"unhandledrejection\",function(e){FS.event(\"Application Error\",{name:e.reason,message:e.reason})})}}");