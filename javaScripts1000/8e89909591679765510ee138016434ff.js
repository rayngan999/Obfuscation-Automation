// For license information, see `https://assets.adobedtm.com/d4d114c60e50/f3fbfbe0e7ca/c564afbd822e/RC5e5d1b9fe0a942c38190dc2199529941-file.js`.
!function(){var e,t,n,o,u=window,s="adobePrivacy:Privacy",a="OptanonChoice",i=new Date,r={domain:_satellite._getDomain(),path:"/",samesite:"Lax",expires:(i.setFullYear(i.getFullYear()+1),i)};t=function(){o||(o=!0,n=function(){var e,t,n,o,s,a,i,r={},d=u.OneTrust.GetDomainData().Groups;for(o=0,s=d.length;o<s;o++)if((e=d[o])&&(t=e.Hosts))for(a=0,i=t.length;a<i;a++)(n=t[a])&&(r[n.HostName]={groupId:e.CustomGroupId,hostId:n.HostId,displayName:n.displayName});_satellite.oneTrustList=r,_satellite.oneTrustIsHostEnabled=function(e){var t,n=window.OnetrustActiveGroups;return!(!(t=r[e])||-1===n.indexOf(","+t.hostId+","))},_satellite.groupEnabled=function(e){var t=window.OnetrustActiveGroups;return!(!t||-1===t.indexOf(e))},_satellite.track("initTrackConsent")},_satellite._poll(n,[function(){return u.OneTrust}],{timeout:1e4,interval:100}))},e=function(e){u._satellite.customConsent=!0,"complete"===document.readyState?t(e):u.addEventListener("load",function(){t(e)},!0)},u.adobePrivacy&&(u.adobePrivacy.hasUserProvidedCustomConsent&&u.adobePrivacy.hasUserProvidedCustomConsent()||u.adobePrivacy.hasUserProvidedConsent&&u.adobePrivacy.hasUserProvidedConsent())?e("oneTrust"):(u.addEventListener(s+"Consent",function(){_satellite.cookie.set(a,1,r),e("oneTrust")}),u.addEventListener(s+"Custom",function(){_satellite.cookie.set(a,3,r),e("oneTrust")}),u.addEventListener(s+"Reject",function(){_satellite.cookie.set(a,2,r)}))}();