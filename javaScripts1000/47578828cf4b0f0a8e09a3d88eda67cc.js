(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[187],{55950:function(e,n,t){"use strict";var r=t(67294),o=["styles"];function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}n.Z=function(e){e.styles;var n=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,o);return r.createElement("svg",l({height:"24",viewBox:"0 0 25 24",width:"25",xmlns:"http://www.w3.org/2000/svg"},n),r.createElement("path",{d:"M22 11H6.94L13 5.7l-.79-1.76-8.2 7v2.14l8.2 7L13 18.3 6.94 13H22v-2z",fill:"#1e2337",fillRule:"evenodd"}))}},51392:function(e){"use strict";var n,t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CountryDropdown_viewer",selections:[{alias:null,args:null,concreteType:"Localisation",kind:"LinkedField",name:"localisation",plural:!1,selections:[{alias:null,args:null,concreteType:"Country",kind:"LinkedField",name:"currentCountry",plural:!1,selections:n=[{alias:null,args:null,kind:"ScalarField",name:"code",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Country",kind:"LinkedField",name:"availableCountries",plural:!0,selections:n,storageKey:null}],storageKey:null}],type:"Viewer",abstractKey:null,hash:"045a239e6c15b35aa0cbcf0926abd989"};e.exports=t},49334:function(e){"use strict";e.exports={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RebrandFollowSuggestionsList_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isViewer",storageKey:null},{args:null,kind:"FragmentSpread",name:"RebrandUserCard_user"}],type:"User",abstractKey:null,hash:"67e739ce12e1eb96699180eaec2fd9a8"}},20737:function(e){"use strict";e.exports={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RebrandFollowSuggestionsList_users",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isViewer",storageKey:null},{args:null,kind:"FragmentSpread",name:"RebrandUserCard_user"}],storageKey:null}],storageKey:null}],type:"UserConnectionInterface",abstractKey:"__isUserConnectionInterface",hash:"8d94dd142c6aec6429a5256a2829e6dc"}},32769:function(e){"use strict";e.exports={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RebrandFollowSuggestionsList_viewer",selections:[{args:null,kind:"FragmentSpread",name:"RebrandUserCard_viewer"}],type:"Viewer",abstractKey:null,hash:"aae3b952a75819cd2b027f9c9b186fad"}},93921:function(e){"use strict";var n,t,r,o,l,a,i,s,u,c,d,g,p={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:null,kind:"LocalArgument",name:"hasPosts"}],kind:"Fragment",metadata:null,name:"RebrandFollowSuggestionsPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"},t={kind:"Variable",name:"hasPosts",variableName:"hasPosts"}],kind:"FragmentSpread",name:"RebrandFollowSuggestions_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"RebrandFollowSuggestionsPaginationQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[r={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"me",plural:!1,selections:[r],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promotedFollowSuggestion",plural:!1,selections:[r,o={alias:null,args:null,kind:"ScalarField",name:"isViewer",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},i={alias:null,args:null,concreteType:"FollowersConnection",kind:"LinkedField",name:"followers",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null}],storageKey:null},s={alias:null,args:null,concreteType:"Picture",kind:"LinkedField",name:"picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"urlRoot",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"primaryColor",storageKey:null}],storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"isFollowed",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"isFollowing",storageKey:null}],storageKey:null},{alias:null,args:d=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},t],concreteType:"UserConnection",kind:"LinkedField",name:"followSuggestions",plural:!1,selections:[{alias:null,args:null,concreteType:"UserEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[r,g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"edges",plural:!0,selections:[g,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[o,l,a,i,s,u,c],storageKey:null}],storageKey:null}],type:"UserConnectionInterface",abstractKey:"__isUserConnectionInterface"}],storageKey:null},{alias:null,args:d,filters:["hasPosts"],handle:"connection",key:"FollowSuggestions_followSuggestions",kind:"LinkedHandle",name:"followSuggestions"}],storageKey:null}]},params:{cacheID:"eb73606590468a5a79fa25251871ff07",id:null,metadata:{},name:"RebrandFollowSuggestionsPaginationQuery",operationKind:"query",text:"query RebrandFollowSuggestionsPaginationQuery(\n  $count: Int!\n  $cursor: String\n  $hasPosts: Boolean!\n) {\n  viewer {\n    ...RebrandFollowSuggestions_viewer_1BRxwS\n    id\n  }\n}\n\nfragment Hovercard_user on User {\n  id\n}\n\nfragment RebrandFollowButton_user on User {\n  id\n  isFollowed\n  isFollowing\n  isViewer\n  followers {\n    totalCount\n  }\n  username\n  displayName\n}\n\nfragment RebrandFollowButton_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment RebrandFollowSuggestionsList_user on User {\n  id\n  isViewer\n  ...RebrandUserCard_user\n}\n\nfragment RebrandFollowSuggestionsList_users on UserConnectionInterface {\n  __isUserConnectionInterface: __typename\n  edges {\n    __typename\n    node {\n      id\n      isViewer\n      ...RebrandUserCard_user\n    }\n  }\n}\n\nfragment RebrandFollowSuggestionsList_viewer on Viewer {\n  ...RebrandUserCard_viewer\n}\n\nfragment RebrandFollowSuggestions_viewer_1BRxwS on Viewer {\n  ...RebrandFollowSuggestionsList_viewer\n  promotedFollowSuggestion {\n    ...RebrandFollowSuggestionsList_user\n    id\n  }\n  followSuggestions(first: $count, after: $cursor, hasPosts: $hasPosts) {\n    ...RebrandFollowSuggestionsList_users\n    edges {\n      cursor\n      node {\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment RebrandUserCard_user on User {\n  id\n  displayName\n  username\n  followers {\n    totalCount\n  }\n  picture {\n    ...UGCImage_picture\n  }\n  ...Hovercard_user\n  ...RebrandFollowButton_user\n}\n\nfragment RebrandUserCard_viewer on Viewer {\n  id\n  ...RebrandFollowButton_viewer\n}\n\nfragment UGCImage_picture on Picture {\n  urlRoot\n  primaryColor\n}\n"},hash:"0ad79049e0d8af84c0acb9ace0d60b37"};e.exports=p},76017:function(e){"use strict";var n,t,r,o,l,a,i,s,u,c,d={fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"RebrandFollowSuggestionsQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"RebrandFollowSuggestions_viewer"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"RebrandFollowSuggestionsQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"me",plural:!1,selections:[n],storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promotedFollowSuggestion",plural:!1,selections:[n,t={alias:null,args:null,kind:"ScalarField",name:"isViewer",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"displayName",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},l={alias:null,args:null,concreteType:"FollowersConnection",kind:"LinkedField",name:"followers",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"totalCount",storageKey:null}],storageKey:null},a={alias:null,args:null,concreteType:"Picture",kind:"LinkedField",name:"picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"urlRoot",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"primaryColor",storageKey:null}],storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"isFollowed",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"isFollowing",storageKey:null}],storageKey:null},{alias:null,args:u=[{kind:"Literal",name:"first",value:3},{kind:"Literal",name:"hasPosts",value:!1}],concreteType:"UserConnection",kind:"LinkedField",name:"followSuggestions",plural:!1,selections:[{alias:null,args:null,concreteType:"UserEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[n,c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"edges",plural:!0,selections:[c,{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[t,r,o,l,a,i,s],storageKey:null}],storageKey:null}],type:"UserConnectionInterface",abstractKey:"__isUserConnectionInterface"}],storageKey:"followSuggestions(first:3,hasPosts:false)"},{alias:null,args:u,filters:["hasPosts"],handle:"connection",key:"FollowSuggestions_followSuggestions",kind:"LinkedHandle",name:"followSuggestions"}],storageKey:null}]},params:{cacheID:"3bcf97200425a5631103abc330159b18",id:null,metadata:{},name:"RebrandFollowSuggestionsQuery",operationKind:"query",text:"query RebrandFollowSuggestionsQuery {\n  viewer {\n    ...RebrandFollowSuggestions_viewer\n    id\n  }\n}\n\nfragment Hovercard_user on User {\n  id\n}\n\nfragment RebrandFollowButton_user on User {\n  id\n  isFollowed\n  isFollowing\n  isViewer\n  followers {\n    totalCount\n  }\n  username\n  displayName\n}\n\nfragment RebrandFollowButton_viewer on Viewer {\n  me {\n    id\n  }\n}\n\nfragment RebrandFollowSuggestionsList_user on User {\n  id\n  isViewer\n  ...RebrandUserCard_user\n}\n\nfragment RebrandFollowSuggestionsList_users on UserConnectionInterface {\n  __isUserConnectionInterface: __typename\n  edges {\n    __typename\n    node {\n      id\n      isViewer\n      ...RebrandUserCard_user\n    }\n  }\n}\n\nfragment RebrandFollowSuggestionsList_viewer on Viewer {\n  ...RebrandUserCard_viewer\n}\n\nfragment RebrandFollowSuggestions_viewer on Viewer {\n  ...RebrandFollowSuggestionsList_viewer\n  promotedFollowSuggestion {\n    ...RebrandFollowSuggestionsList_user\n    id\n  }\n  followSuggestions(first: 3, hasPosts: false) {\n    ...RebrandFollowSuggestionsList_users\n    edges {\n      cursor\n      node {\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment RebrandUserCard_user on User {\n  id\n  displayName\n  username\n  followers {\n    totalCount\n  }\n  picture {\n    ...UGCImage_picture\n  }\n  ...Hovercard_user\n  ...RebrandFollowButton_user\n}\n\nfragment RebrandUserCard_viewer on Viewer {\n  id\n  ...RebrandFollowButton_viewer\n}\n\nfragment UGCImage_picture on Picture {\n  urlRoot\n  primaryColor\n}\n"},hash:"37ddf6c31daf7ead0d0d2d606ecfebf4"};e.exports=d},7719:function(e){"use strict";e.exports={argumentDefinitions:[{defaultValue:3,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{defaultValue:!1,kind:"LocalArgument",name:"hasPosts"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:["followSuggestions"]}]},name:"RebrandFollowSuggestions_viewer",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"promotedFollowSuggestion",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"RebrandFollowSuggestionsList_user"}],storageKey:null},{alias:"followSuggestions",args:[{kind:"Variable",name:"hasPosts",variableName:"hasPosts"}],concreteType:"UserConnection",kind:"LinkedField",name:"__FollowSuggestions_followSuggestions_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"UserEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"pageInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hasNextPage",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"endCursor",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"RebrandFollowSuggestionsList_users"}],storageKey:null},{args:null,kind:"FragmentSpread",name:"RebrandFollowSuggestionsList_viewer"}],type:"Viewer",abstractKey:null,hash:"0dc837b1c9bcad4a8f6bbe6a24121551"}},85948:function(e){"use strict";var n,t,r={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"input"}],kind:"Fragment",metadata:null,name:"ignoreFollowingSuggestionMutation",selections:t=[{alias:null,args:[{kind:"Variable",name:"input",variableName:"input"}],concreteType:"IgnoreFollowingSuggestionMutationPayload",kind:"LinkedField",name:"ignoreFollowingSuggestion",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"ignoredFollowingSuggestionId",storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"ignoreFollowingSuggestionMutation",selections:t},params:{cacheID:"297e9a50245569dc68731ad076f0eb3d",id:null,metadata:{},name:"ignoreFollowingSuggestionMutation",operationKind:"mutation",text:"mutation ignoreFollowingSuggestionMutation(\n  $input: IgnoreFollowingSuggestionMutationInput!\n) {\n  ignoreFollowingSuggestion(input: $input) {\n    ignoredFollowingSuggestionId\n  }\n}\n"},hash:"544f40c40a18966d4cefd7b94a1d0e80"};e.exports=r},85167:function(e,n,t){"use strict";t.d(n,{Z:function(){return T}});var r=t(67294),o=t(24910),l=t(46066),a=t(55950),i=t(643),s=t(76330),u=t(35979),c=t(37621),d=t(88887);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){k(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,n){return(w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e,n){return!n||"object"!==g(n)&&"function"!=typeof n?h(e):n}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var S=o.ZP.div.withConfig({displayName:"ResponsiveCarousel__HeaderContainer",componentId:"xo9wut-0"})(["display:flex;align-items:center;justify-content:space-between;",";",""],(0,d.l)("padding-top","s"),(0,d.l)("padding-bottom","s")),F=(0,o.ZP)(a.Z).withConfig({displayName:"ResponsiveCarousel__StyledArrow",componentId:"xo9wut-1"})(["cursor:pointer;"]),_=(0,o.ZP)(s.ay).withConfig({displayName:"ResponsiveCarousel__Title",componentId:"xo9wut-2"})(["color:",";"],u.p3.base80),R=(0,o.ZP)(F).withConfig({displayName:"ResponsiveCarousel__PreviousArrow",componentId:"xo9wut-3"})(["margin-right:","px;"],i.Q4.s),C=(0,o.ZP)(F).withConfig({displayName:"ResponsiveCarousel__NextArrow",componentId:"xo9wut-4"})(["margin-left:","px;transform:rotate(180deg);"],i.Q4.s),P=o.ZP.div.withConfig({displayName:"ResponsiveCarousel__StyledSlide",componentId:"xo9wut-5"})(["padding-left:","px;padding-right:","px;"],(function(e){return e.padding}),(function(e){return e.padding})),O=o.ZP.div.withConfig({displayName:"ResponsiveCarousel__SliderControls",componentId:"xo9wut-6"})(["justify-content:center;display:flex;@media ","{","}@media ","{","}@media ","{","}@media ","{","}"],c.kU.xLarge,(function(e){var n=e.slidesToShow,t=e.slides;if(n.xLarge>=t.length)return"displays: none;"}),c.kU.large,(function(e){var n=e.slidesToShow,t=e.slides;if(n.large>=t.length)return"display: none;"}),c.kU.medium,(function(e){var n=e.slidesToShow,t=e.slides;if(n.medium>=t.length)return"display: none;"}),c.kU.small,(function(e){var n=e.slidesToShow,t=e.slides;if(n.small>=t.length)return"display: none;"})),L=(0,o.ZP)(O).withConfig({displayName:"ResponsiveCarousel__BottomSliderControls",componentId:"xo9wut-7"})(["margin-top:","px;"],i.Q4.m),x=(0,o.ZP)(l.Z).withConfig({displayName:"ResponsiveCarousel__StyledSlider",componentId:"xo9wut-8"})(["*{box-sizing:border-box;}.slick-slider{position:relative !important;display:block !important;box-sizing:border-box !important;-webkit-touch-callout:none !important;-webkit-user-select:none !important;-khtml-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;-ms-touch-action:pan-y !important;touch-action:pan-y !important;-webkit-tap-highlight-color:transparent !important;}.slick-list{position:relative !important;overflow:hidden !important;display:block !important;padding:0 !important;&:focus{outline:none !important;}&.dragging{cursor:pointer !important;cursor:hand !important;}}.slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0) !important;-moz-transform:translate3d(0,0,0) !important;-ms-transform:translate3d(0,0,0) !important;-o-transform:translate3d(0,0,0) !important;transform:translate3d(0,0,0) !important;}.slick-track{position:relative !important;left:0 !important;top:0;display:block !important;margin-left:auto !important;margin-right:auto !important;&::before,&::after{content:'' !important;display:table !important;}&::after{clear:both !important;}.slick-loading &{visibility:hidden !important;}}.slick-slide{float:left !important;height:100% !important;min-height:1px !important;[dir='rtl'] &{float:right !important;}img{display:block !important;}&.slick-loading img{display:none !important;}&.dragging img{pointer-events:none !important;}.slick-initialized &{display:block !important;}.slick-loading &{visibility:hidden !important;}.slick-vertical &{display:block !important;height:auto !important;border:1px solid transparent !important;}}.slick-arrow.slick-hidden{display:none !important;}.slick-list > div{margin-left:0 !important;}.slick-arrow{display:none !important;}"]),K=function(e,n){if(e)return e[n]||e.default},T=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&w(e,n)}(i,e);var n,t,o,l,a=(o=i,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=v(o);if(l){var t=v(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return b(this,e)});function i(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),k(h(n=a.call(this,e)),"moveToPrevious",(function(){var e=n.props.trackCarouselTap;n.sliderRef.current&&(n.sliderRef.current.slickPrev(),e&&e())})),k(h(n),"moveToNext",(function(){var e=n.props.trackCarouselTap;n.sliderRef.current&&(n.sliderRef.current.slickNext(),e&&e())})),n.sliderRef=r.createRef(),n.settings=n.getSettings(e),n}return n=i,(t=[{key:"getSettings",value:function(e){var n,t=e.slidesToShow,r=e.slidesToScroll,o=e.slidesPerRow,l=e.rows,a={autoplay:e.autoplay,autoplaySpeed:5e3,dots:!1,infinite:e.infinite,speed:500,draggable:!1,initialSlide:0,slidesToScroll:r};if(l){var i={default:null==(n=o)?void 0:n.default,xxLarge:K(n,"xxLarge"),xLarge:K(n,"xLarge"),large:K(n,"large"),medium:K(n,"medium"),small:K(n,"small")};return m(m({},a),{},{rows:l,slidesPerRow:i.default,responsive:[{breakpoint:c.hN.xxLarge,settings:{slidesToShow:t.xxLarge||i.default,slidesPerRow:i.xxLarge||i.default}},{breakpoint:c.hN.xLarge,settings:{slidesToShow:t.xLarge,slidesPerRow:i.xLarge}},{breakpoint:c.hN.large,settings:{slidesToShow:t.large,slidesPerRow:i.large}},{breakpoint:c.hN.medium,settings:{slidesToShow:t.medium,slidesPerRow:i.medium}},{breakpoint:c.hN.small,settings:{slidesToShow:t.small,slidesPerRow:i.small}}]})}return m(m({},a),{},{slidesToShow:t.default,responsive:[{breakpoint:c.hN.xxLarge,settings:{slidesToShow:t.xxLarge||t.default}},{breakpoint:c.hN.xLarge,settings:{slidesToShow:t.xLarge}},{breakpoint:c.hN.large,settings:{slidesToShow:t.large}},{breakpoint:c.hN.medium,settings:{slidesToShow:t.medium}},{breakpoint:c.hN.small,settings:{slidesToShow:t.small}}]})}},{key:"render",value:function(){var e=this.props,n=e.slides,t=e.dislayControls,o=e.slidePadding,l=e.controlsPosition,a=e.slidesToShow,i=e.title;return r.createElement(r.Fragment,null,r.createElement(S,null,i&&r.createElement(_,null,i),t&&"top"===l?r.createElement(O,{slidesToShow:a,slides:n},r.createElement("div",{onClick:this.moveToPrevious},r.createElement(R,null)),r.createElement("div",{onClick:this.moveToNext},r.createElement(C,null))):null),r.createElement(x,p({},this.settings,{ref:this.sliderRef}),n.map((function(e,n){return r.createElement(P,{padding:o,key:n},e)}))),t&&"bottom"===l?r.createElement(L,{slidesToShow:a,slides:n},r.createElement("div",{onClick:this.moveToPrevious},r.createElement(R,null)),r.createElement("div",{onClick:this.moveToNext},r.createElement(C,null))):null)}}])&&y(n.prototype,t),i}(r.Component);k(T,"defaultProps",{controlsPosition:"bottom",autoplay:!1,infinite:!0,slidesToScroll:1,dislayControls:!0,slidePadding:12})},22508:function(e,n,t){"use strict";t.d(n,{I:function(){return s}});var r=t(67294),o=t(62575),l=["country"];function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i=r.createContext(null),s=function(e){return(0,o.U)(e,(function(n){return r.createElement(i.Consumer,null,(function(t){return r.createElement(e,a({},n,{country:t}))}))}))};n.Z=function(e){var n=e.country,t=function(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}(e,l);return r.createElement(i.Provider,a({value:n},t))}},39986:function(e,n,t){"use strict";var r,o=t(67294),l=t(94184),a=t.n(l),i=t(46076),s=(t(22578),t(98808)),u=t(18235),c=t(35418),d=t(67575),g=t(92262);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){S(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function y(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function w(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?v(e):n}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var F="country_dropdown_modal",_=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(s,e);var n,t,r,l,i=(r=s,l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=k(r);if(l){var t=k(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return h(this,e)});function s(){var e;y(this,s);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return S(v(e=i.call.apply(i,[this].concat(t))),"getCurrentCountry",(function(){var n=e.props,t=n.viewer.localisation,r=t.availableCountries,o=t.currentCountry,l=n.match.params.country;return l?r.find((function(e){return e&&e.code===l.toUpperCase()})):o})),S(v(e),"state",{currentCountry:e.getCurrentCountry()||null}),S(v(e),"toggleDropdown",(function(){e.props.openModal(F)})),S(v(e),"updateUrl",(function(n){var t=e.props,r=t.urls,o=t.urlName,l=t.slug;if(o&&window.history){var a=l?{slug:l}:{},i=r.makeLocation({urlName:o,params:m(m({},a),{},{country:n.toLowerCase()})}).pathname;window.history.pushState({},null,i)}})),S(v(e),"selectCountry",(function(n){var t=e.props,r=t.onSelectCountry,o=t.closeModal;e.setState({currentCountry:n},(function(){r(n.code),e.updateUrl(n.code),o()}))})),e}return n=s,(t=[{key:"componentDidMount",value:function(){var e=this.state.currentCountry;e&&this.updateUrl(e.code)}},{key:"render",value:function(){var e=this,n=this.props,t=n.viewer.localisation.availableCountries,r=n.modal;if(!t.length)return null;var l=this.state.currentCountry;return o.createElement("div",{className:"has-dropdown title-dropdown",onClick:(0,g.Z)(this.toggleDropdown)},o.createElement("span",{className:a()("dropdown-arrow btn-dropdown-arrow",{flipped:r&&r.id===F})},l?l.name:"Country"),o.createElement(d.Z,{id:F,dismissOnClick:!0},o.createElement("ul",{className:"dropdown dropdown-open anchor-right"},t.map((function(n,t){return n?o.createElement("li",{key:t},o.createElement("span",{className:a()("atom",{selected:l&&l.code===n.code}),onClick:(0,g.Z)((function(){return e.selectCountry(n)}))},n.name)):null})))))}}])&&w(n.prototype,t),s}(o.PureComponent);n.ZP=(0,s.Z)((0,u.Z)({viewer:(void 0!==r||(r=t(51392),r.hash&&"045a239e6c15b35aa0cbcf0926abd989"!==r.hash&&console.error("The definition of 'CountryDropdown_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.")),r)}),c.Z,i.EN)(_)},13166:function(e,n,t){"use strict";t.d(n,{Z:function(){return q}});var r,o,l,a,i=t(67294),s=t(24910),u=t(42823),c=t.n(u),d=t(98808),g=(t(22578),t(32421)),p=t(88065),f=t(50243),m=t(57211),y=t(76330),w=t(35979),b=t(88887),h=(void 0!==r||(r=t(85948)).hash&&"544f40c40a18966d4cefd7b94a1d0e80"!==r.hash&&console.error("The definition of 'ignoreFollowingSuggestionMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."),r),v=t(18235),k=t(53976),S=t(67640),F=t(23501);function _(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var R,C,P,O=(0,v.Z)({users:(void 0!==o||(o=t(20737),o.hash&&"8d94dd142c6aec6429a5256a2829e6dc"!==o.hash&&console.error("The definition of 'RebrandFollowSuggestionsList_users' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.")),o),user:(void 0!==l||(l=t(49334),l.hash&&"67e739ce12e1eb96699180eaec2fd9a8"!==l.hash&&console.error("The definition of 'RebrandFollowSuggestionsList_user' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.")),l),viewer:(void 0!==a||(a=t(32769),a.hash&&"aae3b952a75819cd2b027f9c9b186fad"!==a.hash&&console.error("The definition of 'RebrandFollowSuggestionsList_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.")),a)})((function(e){var n=e.userCount,t=void 0===n?3:n,r=e.users,o=e.user,l=e.viewer,a=e.loading,s=void 0!==a&&a,u=e.onDeleteRow,c=e.onFollowRow;if(s)return i.createElement(F.Z,{count:t,className:"people-to-follow-loading"});if(!r||!r.edges||!r.edges.length)return null;var d,g=(o?[{node:o}].concat((d=r.edges.slice(-2),function(e){if(Array.isArray(e))return _(e)}(d)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(d)||function(e,n){if(e){if("string"==typeof e)return _(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_(e,n):void 0}}(d)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())):r&&r.edges.slice(t>r.edges.length?-1*r.edges.length:r.edges.length-t)).filter(Boolean);return i.createElement("div",null,(0,k.rn)(g,(function(e){return i.createElement(S.Z,{colorScheme:"onLight",user:e.node,hideFollowButton:e.node.isViewer,key:e.node.id,viewer:l,onDelete:u,onFollow:c})})))})),L=t(32006);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return T(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?T(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function j(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function U(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,n){return(E=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function I(e,n){return!n||"object"!==x(n)&&"function"!=typeof n?N(e):n}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Z=s.ZP.div.withConfig({displayName:"RebrandFollowSuggestions__Container",componentId:"sc-1b5gltk-0"})(["",""],(0,b.l)("margin-bottom","l")),A=(0,s.iv)(["animation:"," 2s linear infinite;"],m.r),B=s.ZP.div.withConfig({displayName:"RebrandFollowSuggestions__RefreshIcon",componentId:"sc-1b5gltk-1"})(["cursor:pointer;",";"],(function(e){return e.isLoading&&A})),M=s.ZP.div.withConfig({displayName:"RebrandFollowSuggestions__Header",componentId:"sc-1b5gltk-2"})(["display:flex;justify-content:space-between;align-items:center;"]),Q=(0,s.ZP)(y.ay).withConfig({displayName:"RebrandFollowSuggestions__HeaderText",componentId:"sc-1b5gltk-3"})(["color:",";"],w.V9.lowBlue),H=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&E(e,n)}(a,e);var n,t,r,o,l=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=V(r);if(o){var t=V(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return I(this,e)});function a(){var e;j(this,a);for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return D(N(e=l.call.apply(l,[this].concat(t))),"state",{loading:!1}),D(N(e),"order",[]),D(N(e),"loadMore",(function(){e.setState({loading:!0},(function(){(0,f.A4)(e._getCount(),e.props.relay).finally((function(){setTimeout((function(){e.setState({loading:!1})}),150)}))}))})),D(N(e),"ignoreSuggestion",(function(n){n&&e.props.ignoreFollowingSuggestion({userId:n}).then(e.refreshRows).catch((function(){}))})),D(N(e),"refreshRows",c()(750,(function(){var n=e.props,t=n.relay,r=n.viewer.followSuggestions,o=r?r.edges.length:e._getCount();t.refetchConnection(o)}))),D(N(e),"sortRows",(function(n){return e.order.forEach((function(e,t){var r=n.findIndex((function(n){return n.node.id===e})),o=n.splice(r,1);n.splice.apply(n,[t,0].concat(K(o)))})),e.order=n.map((function(e){return e.node.id})),n})),e}return n=a,(t=[{key:"_getCount",value:function(){return this.props.userCount||3}},{key:"render",value:function(){var e=this.props,n=e.viewer,t=e.loading,r=e.relay;return!n||n&&!n.followSuggestions?null:i.createElement(Z,null,i.createElement(M,null,i.createElement(Q,null,"People to follow"),r.hasMore()&&i.createElement(B,{onClick:this.loadMore,isLoading:this.state.loading},i.createElement(L.Z,null))),i.createElement(O,{users:n.followSuggestions,user:n.promotedFollowSuggestion?n.promotedFollowSuggestion:null,userCount:this._getCount(),loading:t,viewer:n,onDeleteRow:this.ignoreSuggestion,onFollowRow:this.refreshRows,sortRows:this.sortRows}))}}])&&U(n.prototype,t),a}(i.Component),$=(0,d.Z)((0,f.ZP)({viewer:(void 0!==R||(R=t(7719),R.hash&&"0dc837b1c9bcad4a8f6bbe6a24121551"!==R.hash&&console.error("The definition of 'RebrandFollowSuggestions_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.")),R)},{getVariables:function(e,n){var t=n.count,r=n.cursor;return{count:e.userCount||t,cursor:r,hasPosts:!1}},getConnectionFromProps:function(e){var n=e.viewer;return null==n?void 0:n.followSuggestions},query:(void 0!==C||(C=t(93921),C.hash&&"0ad79049e0d8af84c0acb9ace0d60b37"!==C.hash&&console.error("The definition of 'RebrandFollowSuggestionsPaginationQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.")),C)}),(0,p.Z)({ignoreFollowingSuggestion:function(e){var n=e.userId;return{mutation:h,variables:{input:{userId:n}}}}}))(H),q=(0,g.ZP)({query:(void 0!==P||(P=t(76017),P.hash&&"37ddf6c31daf7ead0d0d2d606ecfebf4"!==P.hash&&console.error("The definition of 'RebrandFollowSuggestionsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.")),P)})($)}}]);
//# sourceMappingURL=187.4c2030ca8364ead11aedm.js.map