(window.webpackJsonp=window.webpackJsonp||[]).push([[9,11],{104:function(e,t,n){"use strict";n.d(t,"c",(function(){return _.f})),n.d(t,"d",(function(){return _.g})),n.d(t,"b",(function(){return _.d})),n.d(t,"a",(function(){return _.a}));var r=n(2),i=n.n(r),a=n(1),s=n.n(a),o=n(33),c=n(85),u=n(151),f=n.n(u),d=n(157),l=function(e){function t(t){var n;n=e.call(this)||this;var r=t.category,i=t.clientName,a=t.transport;if(!r)throw new Error("required category is missing");if(n.category=r,!i)throw new Error("required clientName is missing");if(n.clientName=i,"function"!=typeof a)throw new Error("Invalid transport: "+a);return n._transport=a,n}f()(t,e);var n=t.prototype;return n.createEventObject=function(e,t,n){return i()({_category_:t,triggered_on:Date.now(),event_namespace:e},n)},n._handleError=function(e){try{this.emit("error",e)}catch(e){}throw e},n.log=function(e,t){var n=this.createEventObject(i()({client:this.clientName},e),this.category,t);this.emit("log",n),this._log(n)},n._log=function(e){var t=this;e&&this._transport(e).catch((function(e){return t._handleError(e)})).catch((function(){}))},t}(n.n(d).a),h=function(e){var t=new l(e);return t.on("log",(function(e){Object(o.a)("[scribe] LOG "+Object(c.b)(e.event_namespace),e)})),t.on("error",(function(e){Object(o.a)("[scribe] ERROR",e)})),t},p=n(47),m=n.n(p),E=n(71),v=function(e){var t={l:JSON.stringify(e)};return e.dnt&&(t.dnt=1),E.a.isBucketed()&&(t.session_id=E.a.getSessionId().session_id),t},j=function(){return function(e){return t=v(e),n="https://syndication.twitter.com/i/jot?"+m.a.stringify(t),new Promise((function(e,t){var r=document.createElement("img");r.addEventListener("load",(function(){return e(r)})),r.addEventListener("error",t),r.src=n}));var t,n}},_=n(58),g=function(){function e(){s()(this,"_data",{context:_.c}),this._scribeClient=h({clientName:_.b,category:"tfw_client_event",transport:j()})}var t=e.prototype;return t.initialize=function(e){this._page=e.page,this._data=i()({},this._data,e.data)},t.scribe=function(e,t,n){this._scribeClient.log(i()({page:this._page,action:e},t),i()({},this._data,n))},e}();t.e=new g},109:function(e,t,n){var r={"./ar.js":[250,0,19],"./bn.js":[251,0,20],"./cs.js":[252,0,21],"./da.js":[253,0,22],"./de.js":[254,0,23],"./el.js":[255,0,24],"./en.js":[256,0,25],"./es.js":[257,0,26],"./fa.js":[258,0,27],"./fi.js":[259,0,28],"./fil.js":[260,0,29],"./fr.js":[261,0,30],"./he.js":[262,0,31],"./hi.js":[263,0,32],"./hu.js":[264,0,33],"./id.js":[265,0,34],"./it.js":[266,0,35],"./ja.js":[267,0,36],"./ko.js":[268,0,37],"./ms.js":[269,0,38],"./nb.js":[270,0,39],"./nl.js":[271,0,40],"./pl.js":[272,0,41],"./pt.js":[273,0,42],"./ro.js":[274,0,43],"./ru.js":[275,0,44],"./sv.js":[276,0,45],"./th.js":[277,0,46],"./tr.js":[278,0,47],"./uk.js":[279,0,48],"./vi.js":[280,0,49],"./zh-Hant.js":[281,0,50],"./zh.js":[282,0,51]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id=109,e.exports=i},17:function(e,t,n){"use strict";var r=n(110),i=n(27),a=n.n(i),s=n(29),o="en",c={ar:!0,fa:!0,he:!0},u=function(e){return Boolean(c[e])},f=function(e){return a.a.locales.indexOf(e)>-1};t.a={isLocaleRTL:u,isSupportedLocale:f,setLocale:function(e){return o=f(e)?e:"en",r.a.setLocale(a.a.getCldrLocale(o)).then((function(){s.a.setPreferredLanguageRTL(u(o)),document&&document.documentElement&&document.documentElement.setAttribute("lang",o)}))},getLocale:function(){return o}}},174:function(e,t,n){var r={"./ar-x-fm.js":[200,0,59],"./ar.js":[201,0,58],"./bg.js":[202,0,60],"./bn.js":[203,0,61],"./ca.js":[204,0,62],"./cs.js":[205,0,63],"./da.js":[206,0,64],"./de.js":[207,0,65],"./el.js":[208,0,66],"./en-GB.js":[209,0,67],"./en-ss.js":[210,0,69],"./en-xx.js":[211,0,70],"./en.js":[212,0,68],"./es.js":[213,0,71],"./eu.js":[214,0,72],"./fa.js":[215,0,73],"./fi.js":[216,0,74],"./fil.js":[217,0,75],"./fr.js":[218,0,76],"./ga.js":[219,0,77],"./gl.js":[220,0,78],"./gu.js":[221,0,79],"./he.js":[222,0,80],"./hi.js":[223,0,81],"./hr.js":[224,0,82],"./hu.js":[225,0,83],"./id.js":[226,0,84],"./it.js":[227,0,85],"./ja.js":[228,0,86],"./kn.js":[229,0,87],"./ko.js":[230,0,88],"./mr.js":[231,0,89],"./ms.js":[232,0,90],"./nb.js":[233,0,91],"./nl.js":[234,0,92],"./pl.js":[235,0,93],"./pt.js":[236,0,94],"./ro.js":[237,0,95],"./ru.js":[238,0,96],"./sk.js":[239,0,97],"./sr.js":[240,0,98],"./sv.js":[241,0,99],"./ta.js":[242,0,100],"./th.js":[243,0,101],"./tr.js":[244,0,102],"./uk.js":[245,0,103],"./ur.js":[246,0,104],"./vi.js":[247,0,105],"./zh-Hant.js":[248,0,106],"./zh.js":[249,0,107]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id=174,e.exports=i},27:function(e,t){var n={ms:"msa",nb:"no",zh:"zh-cn","zh-Hant":"zh-tw"},r={msa:"ms",no:"nb","zh-cn":"zh","zh-tw":"zh-Hant"};e.exports={locales:["en","ar","bn","cs","da","de","el","es","fa","fi","fil","fr","he","hi","hu","id","it","ja","ko","msa","nl","no","pl","pt","ro","ru","sv","th","tr","uk","vi","zh-cn","zh-tw"],getCldrLocale:function(e){return r[e]||e},getTwitterLocale:function(e){return n[e]||e}}},311:function(e,t,n){"use strict";n.r(t);var r,i,a,s,o=n(84),c=n(62),u=n(40),f=n(73),d=n(8),l=n(77),h=n(71),p=n(85),m=n(76),E=n(104),v=n(35),j=new o.a(new c.a({dispatcher:u.b})),_=new o.a(new c.a({dispatcher:u.b,host:"https://syndication.twitter.com"})),g=(i=f.a.parseQueryString(location.search),a=[{key:"id",validate:function(e){return d.a.test(e)},required:!0},{key:"hideThread",accessor:function(e){return e.hideThread},validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},{key:"hideMedia",accessor:function(e){return e.hideCard},validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},d.b,d.c,d.d,d.e,d.f,d.g,d.h,d.j],Object(d.i)(i,a)),T=g.dnt,w=g.embedId,b=g.features,y=g.hideMedia,k=g.hideThread,O=g.id,I=g.lang,N=g.pageData,L=g.sessionId,P=g.theme,R=g.widgetsVersion;h.a.initialize(_,b,L),E.e.initialize({page:E.c.TWEET,data:{client_version:R,dnt:T,widget_id:w,widget_origin:N.origin,widget_frame:N.frame,widget_partner:N.partner,widget_site_screen_name:N.siteScreenName,widget_site_user_id:N.siteUserId,widget_creator_screen_name:N.creatorScreenName,widget_creator_user_id:N.creatorUserId,widget_iframe_version:"803dae2:1626818191152",item_ids:[O],item_details:(r={},r[O]={item_type:p.a.TWEET},r)}}),v.c.initialize({embedId:w,data:{tweet_id:O}}),v.c.send({key:v.b.INITIALIZED,details:{iframe_version:"803dae2:1626818191152"}}),Promise.all([(s=[],window.IntersectionObserver||s.push(n.e(108).then(n.t.bind(null,925,7))),window.ResizeObserver||s.push(n.e(109).then(n.bind(null,926)).then((function(e){window.ResizeObserver=e.default}))),Promise.all(s))]).then((function(){return Object(l.a)(m.a,{lang:I,theme:P},{api:j,hideMedia:y,hideThread:k,id:O,pageData:N})}))},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){0}},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(2),i=n.n(r),a=n(33),s=Object.freeze({CLICK:"click",INITIALIZED:"initialized",LIKE:"like",NO_RESULTS:"no_results",RENDERED:"rendered",RESIZE:"resize",RESULTS:"results",TRIGGER:"trigger"}),o=Object.freeze({INTENT:"intent"}),c=function(){function e(){}var t=e.prototype;return t.initialize=function(e){var t=e.embedId,n=e.data;this._embedId=t,this._data=n||{}},t.send=function(e){var t,n=e.key,r=e.details,s=window.parent;if(s&&s.postMessage){var o="twttr.private."+n,c={jsonrpc:"2.0",method:o,id:this._embedId,params:[i()({},r,{data:this._data})]};Object(a.a)("[rpc] MESSAGE "+o,r),s.postMessage(((t={})["twttr.embed"]=c,t),"*")}},e}();t.c=new c},52:function(e,t,n){"use strict";var r=n(17),i=n(27),a=n.n(i);t.a=function(){var e=r.a.getLocale(),t=a.a.getCldrLocale(e);return n(109)("./"+t+".js")}},58:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u}));var r="tfw",i=Object.freeze({TWEET:"tweet",DDG:"ddg"}),a=Object.freeze({FAKE:"tfw_experiment_1234",MAIN:"main",PARENT:"parent",QUOTE:"quote",PARENT_QUOTE:"parent-quote",HOLDBACK_EXPERIMENT:"tfw_team_holdback_11929",VIDEO_PORTALS_EXPERIMENT:"tfw_video_portals_12356",REPLY_PROMPT_EXPERIMENT:"tfw_reply_prompts_embed_12393"}),s=Object.freeze({AUTHOR:"author",CARD:"card",LIKE_ACTION:"like-action",LOGO:"logo",NEWS_ACTION:"news-action",PERFORMANCE:"performance",PHOTO:"photo",PLACE:"place",PRIVACY_NOTICE:"privacy-notice",PUBLIC_INTEREST_NOTICE:"public-interest-notice",REPLY_PROMPT:"reply-prompt",SHARE_ACTION:"share-action",SOFT_INTERVENTION_PIVOT:"soft-intervention-pivot",TIMESTAMP:"timestamp",TWEET_REPLY_CONTEXT:"tweet-reply-context",TWEET_TEXT_CASHTAG:"tweet-text-cashtag",TWEET_TEXT_HASHTAG:"tweet-text-hashtag",TWEET_TEXT_MEDIA:"tweet-text-media",TWEET_TEXT_MENTION:"tweet-text-mention",TWEET_TEXT_QUOTE:"tweet-text-quote",TWEET_TEXT_URL:"tweet-text-url",VIDEO:"video",WHITESPACE:"whitespace"}),o=(Object.freeze({GIF_PLAYER:"gif_player",VIDEO_PLAYER:"video_player"}),Object.freeze({CLICK_EXTERNAL:"click-external",CLICK_INTERACTIVE:"click-interactive",CLICK_TWITTER:"click-twitter",EXPERIMENT:"experiment",IMPRESSION:"impression",RESULTS:"results",NO_RESULTS:"no-results",SEEN:"seen"})),c="horizon",u={client:r,page:i.TWEET}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),i=n.n(r),a=n(40),s=function(e){var t=e.headers,n=t&&t["content-type"];return"string"==typeof n&&n.indexOf("application/json")>=0&&e.body?JSON.parse(e.body):null},o={host:"https://cdn.syndication.twimg.com"},c=function(){function e(e){this.client=new a.a(i()({},o,e))}var t=e.prototype;return t.dispatch=function(e){return this.client.dispatch(e).then(s)},t.get=function(e,t,n){return this.dispatch({path:"/"+e,method:"GET",params:t,headers:n||{}})},e}()},71:function(e,t,n){"use strict";var r=n(1),i=n.n(r),a=(n(84),function(){function e(){var e=this;i()(this,"store",{features:{}}),i()(this,"get",(function(){return e.store})),i()(this,"getFeatures",(function(){return e.store.features})),i()(this,"getSessionId",(function(){return e.session_id})),i()(this,"isBucketed",(function(){var t=e.getFeatures();return Object.keys(t).some((function(e){return null!==t[e].version}))}))}var t=e.prototype;return t.initialize=function(e,t,n){this.api=e,this.store.features=t,this.session_id={session_id:n}},t.getExperimentData=function(e){var t=this.getFeatures();return t[e]?{experiment_key:e,bucket:t[e].bucket,version:t[e].version}:void 0},e}());t.a=new a},73:function(e,t,n){"use strict";n(33);var r=n(47),i=n.n(r),a=/(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,s=["twitter.com","mobile.twitter.com"];t.a={isStatusUrl:function(e){return"string"==typeof e&&a.test(e)},isTwitterDotComLink:function(e){try{var t=new URL(e).host;return s.indexOf(t)>-1}catch(e){return!1}},parseQueryString:function(e){void 0===e&&(e="");try{return i.a.parse(e.replace(/^\?/,""))}catch(e){if(e instanceof URIError)return{};throw e}}}},76:function(e,t,n){"use strict";var r=n(159),i=n(52),a=Object(r.a)({loader:function(){return Object(i.a)().then((function(){return Promise.all([n.e(4),n.e(56),n.e(17)]).then(n.bind(null,283))}))},renderPlaceholder:function(){return null}});t.a=a},77:function(e,t,n){"use strict";n(0);var r=n(70),i=n(17),a=n(5);n(76);t.a=function(e,t,n){var s=t.lang,o=t.theme;i.a.setLocale(s),a.a.setTheme(o),r.a.registerComponent("App",(function(){return e}));var c=document.getElementById("app")||document.getElementsByTagName("div")[0];return new Promise((function(e,t){r.a.runApplication("App",{callback:e,rootTag:c,initialProps:n})}))}},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return v})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return _})),n.d(t,"h",(function(){return g})),n.d(t,"j",(function(){return T})),n.d(t,"d",(function(){return w})),n.d(t,"g",(function(){return b})),n.d(t,"i",(function(){return l}));var r=n(17),i=n(13),a=n(2),s=n.n(a),o=n(83),c=n.n(o),u=function(e){return!0},f=function(e){return e},d=function(e,t){return e[t]},l=function(e,t){return t.reduce((function(t,n){var r,i=n.key,a=c()(n,["key"]),o=a.accessor,l=void 0===o?d:o,h=a.required,p=void 0!==h&&h,m=a.validate,E=void 0===m?u:m,v=a.transform,j=void 0===v?f:v,_=a.fallback,g=l(e,i);if(void 0!==g&&E(g)){var T,w=j(g);if(void 0!==w)return s()({},t,((T={})[i]=w,T))}if(void 0!==_)return s()({},t,((r={})[i]=_,r));if(p)throw new Error(i+" is a required parameter");return t}),{})},h=/^[a-zA-Z0-9-]+$/,p=/^\d+$/,m=function(e){return e.replace(/[^a-zA-Z0-9-_:/?=@.]/g,"")},E={key:"dnt",validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},v={key:"embedId",validate:function(e){return h.test(e)},fallback:"embed-0"},j={key:"lang",validate:function(e){return r.a.isSupportedLocale(e)},fallback:"en"},_={key:"pageData",accessor:function(e){return l(e,[{key:"origin",validate:function(e){return"string"==typeof e},transform:m,fallback:""},{key:"frame",validate:function(e){return"string"==typeof e},transform:m,fallback:""},{key:"partner",validate:function(e){return"string"==typeof e},transform:m,fallback:""},{key:"siteScreenName",validate:function(e){return"string"==typeof e},transform:m,fallback:""},{key:"siteUserId",validate:function(e){return"string"==typeof e},transform:m,fallback:""},{key:"creatorScreenName",validate:function(e){return"string"==typeof e},transform:m,fallback:""},{key:"creatorUserId",validate:function(e){return"string"==typeof e},transform:m,fallback:""}])}},g={key:"theme",validate:function(e){return[i.e.ThemePaletteNames.light,i.e.ThemePaletteNames.dark].includes(e)},fallback:i.e.ThemePaletteNames.light,transform:function(e){return e===i.e.ThemePaletteNames.dark?i.e.ThemePaletteNames.darker:e}},T={key:"widgetsVersion",accessor:function(e){return e.widgetsVersion},validate:function(e){return"string"==typeof e&&/^([a-zA-Z0-9])+:([0-9])+$/.test(e)},fallback:void 0},w={key:"features",transform:function(e){try{var t=window.atob(e);return JSON.parse(t)}catch(e){return{}}},fallback:{}},b={key:"sessionId",fallback:""}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){this.Tweet=function(e){return{fetch:function(t,n){return e.get("tweet",t,n).then((function(e){return e&&e.id_str?Promise.resolve(e):Promise.reject(new Error("could not parse api response"))}))}}}(e),this.Settings=function(e){return{fetch:function(t,n){return e.get("settings",t,n).then((function(e){return e&&e.features?Promise.resolve(e):Promise.reject(new Error("could not parse api response"))}))}}}(e)}},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=Object.freeze({TWEET:0}),i=function(e){var t=e.client,n=void 0===t?"":t,r=e.page,i=void 0===r?"":r,a=e.section,s=void 0===a?"":a,o=e.component,c=void 0===o?"":o,u=e.element,f=void 0===u?"":u,d=e.action;return n+":"+i+":"+s+":"+c+":"+f+":"+(void 0===d?"":d)}}},[[311,2,1]]]);