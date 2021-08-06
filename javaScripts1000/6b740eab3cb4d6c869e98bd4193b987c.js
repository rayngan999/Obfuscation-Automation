!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{KnD4:function(t,i,a){"use strict";a.r(i),a.d(i,"HomePageModule",(function(){return Q}));var s,r,c=a("SVse"),d=a("MNke"),m=a("B8x8"),l=a("il3X"),u=a("aSIx"),h=a("iInd"),p=a("SxV6"),f=a("0mdW"),g=a("nW0q"),b=a("8X4c"),v=a("JoXL"),S=a("nWp2"),y={"@context":"http://schema.org","@type":"Organization",name:"DSW Designer Shoe Warehouse",url:"https://www.dsw.com/en/us/",logo:"https://images.dsw.com/is/image/DSWShoes/2013dsw-logo-header",description:"DSW is the place for shoe lovers! With designer shoes at great prices, aisles are filled with dress shoes, wedges, flats, boots, sandals, athletic shoes, & more (plus kids\u2019 shoes at dsw.com).",contactPoint:[{"@type":"ContactPoint",telephone:"+1-614-237-7100",contactType:"customer service"}]},w={"@context":"https://schema.org","@type":"WebSite",url:"https://www.dsw.com/en/us/",potentialAction:{"@type":"SearchAction",target:"https://www.dsw.com/en/us/browse/{search_term_string}","query-input":"required name=search_term_string"}},I=a("NLRi"),x=a("3Qqf"),P=a("8Y7J"),D=((s=function(){function e(t){n(this,e),this.tealiumService=t}return o(e,[{key:"tealiumViewForHomePage",value:function(){this.tealiumService.view({page_section:I.a.siteName+" Home Page",page_type:"home"})}}]),e}()).\u0275fac=function(e){return new(e||s)(P.Zb(x.a))},s.\u0275prov=P.Lb({token:s,factory:s.\u0275fac}),s),k=a("Xs7L"),A=a("N5ys"),H=a("otH8"),J=a("n65a"),O=a("nezf"),C=a("cUpR"),N=((r=function(){function e(t){n(this,e),this.sanitizer=t}return o(e,[{key:"makeSafe",value:function(e){var t=e?JSON.stringify(e,null,2).replace(/<\/script>/g,"<\\/script>"):"";return this.sanitizer.bypassSecurityTrustHtml('<script type="application/ld+json">'.concat(t,"<\/script>"))}},{key:"sdJson",set:function(e){this.sanitizedSDScript=this.makeSafe(e)}}]),e}()).\u0275fac=function(e){return new(e||r)(P.Pb(C.c))},r.\u0275cmp=P.Jb({type:r,selectors:[["app-structured-data"]],hostVars:1,hostBindings:function(e,t){2&e&&P.Yb("innerHTML",t.sanitizedSDScript,P.Fc)},inputs:{sdJson:"sdJson"},decls:1,vars:1,consts:[[3,"innerHtml"]],template:function(e,t){1&e&&P.Qb(0,"div",0),2&e&&P.nc("innerHtml",t.sanitizedSDScript,P.Fc)},encapsulation:2}),r),L=a("Pm5g"),R=a("RkGb");function z(e,t){1&e&&P.Qb(0,"app-dynamic-content-loader",6),2&e&&P.nc("contentItem",t.$implicit)}function T(e,t){if(1&e){var n=P.Wb();P.Vb(0,"div",4),P.dc("scrolled",(function(){return P.Ec(n),P.gc().onCustomScroll()})),P.Nc(1,z,1,1,"app-dynamic-content-loader",5),P.Ub()}if(2&e){var i=P.gc();P.nc("infiniteScrollDistance",3)("infiniteScrollDisabled",i.hasInfiniteScrollingDisabled),P.Ab(1),P.nc("ngForOf",i.homePageItems)}}function V(e,t){if(1&e&&(P.Vb(0,"div",7),P.Qb(1,"app-product-list",8),P.Ub()),2&e){var n=P.gc();P.Ab(1),P.nc("isRecs",!0)("contentItem",n.rvProductList)}}var W,_,j,E=[{path:"",component:(W=function(){function t(e,i,o,a,s,r,c,d,m){n(this,t),this.endecaDataService=e,this.utilityService=i,this.seoService=o,this.homePageTealiumService=a,this.activatedRoute=s,this.recommendationsService=r,this.storageService=c,this.globalService=d,this.rfkEventsService=m,this.lastIndex=2,this.hasInfiniteScrollingDisabled=!1,this.structuredJSONData=y,this.structuredSearchJSONData=w,this.recommendationsLoaded=!1}return o(t,[{key:"ngOnInit",value:function(){var e=this.globalService.cachedHomePageItems;e?(this.mainContent=e.mainContent,this.lastIndex=e.lastIndex,this.initializeLayout(!0)):this.loadHome(),this.seoService.setPageData()}},{key:"ngAfterViewInit",value:function(){this.homePageTealiumService.tealiumViewForHomePage(),this.rfkEventsService.viewHome(),this.storageService.setSessionItem(k.a.STORAGE_KEYS.PREVIOUS_STATE,"Homepage"),this.loadRecommendations()}},{key:"loadHome",value:function(){var e=this;this.endecaDataService.getHome(this.activatedRoute).subscribe((function(t){e.mainContent=new A.a(t.pageContentItem),e.initializeLayout(!1)}))}},{key:"initializeLayout",value:function(e){this.contentItems=this.mainContent.contentItems,this.utilityService.userAgentIsPrerender()&&(this.lastIndex=this.contentItems.length),this.homePageItems=this.contentItems.slice(0,this.lastIndex),e||(this.globalService.cachedHomePageItems={mainContent:this.mainContent,lastIndex:this.lastIndex})}},{key:"loadRecommendations",value:function(){var e,t,n=this;if(!this.recommendationsLoaded){var i=null===(t=null===(e=this.mainContent)||void 0===e?void 0:e.propertyMap)||void 0===t?void 0:t.get("rfkid");this.recommendationsService.getHomepageRecommendations(i).pipe(Object(p.a)()).subscribe((function(e){n.rvProductList=e.find((function(e){return e.widgetId===S.a.recs_home_rv}))})),this.recommendationsLoaded=!0}}},{key:"onCustomScroll",value:function(){var t;this.contentItems&&this.contentItems.length>this.lastIndex?((t=this.homePageItems).push.apply(t,e(this.contentItems.slice(this.lastIndex,this.lastIndex+2))),this.globalService.cachedHomePageItems.lastIndex=this.lastIndex+=2,this.loadRecommendations()):this.hasInfiniteScrollingDisabled=!0}}]),t}(),W.\u0275fac=function(e){return new(e||W)(P.Pb(H.a),P.Pb(O.a),P.Pb(g.a),P.Pb(D),P.Pb(h.a),P.Pb(J.a),P.Pb(b.a),P.Pb(f.a),P.Pb(v.a))},W.\u0275cmp=P.Jb({type:W,selectors:[["app-home-page"]],decls:5,vars:4,consts:[[1,"home-page"],["infiniteScroll","",3,"infiniteScrollDistance","infiniteScrollDisabled","scrolled",4,"ngIf"],["id","home-recently-viewed",4,"ngIf"],[3,"sdJson"],["infiniteScroll","",3,"infiniteScrollDistance","infiniteScrollDisabled","scrolled"],[3,"contentItem",4,"ngFor","ngForOf"],[3,"contentItem"],["id","home-recently-viewed"],["source","parent","alignment","left",3,"isRecs","contentItem"]],template:function(e,t){1&e&&(P.Vb(0,"div",0),P.Nc(1,T,2,3,"div",1),P.Nc(2,V,2,2,"div",2),P.Qb(3,"app-structured-data",3),P.Qb(4,"app-structured-data",3),P.Ub()),2&e&&(P.Ab(1),P.nc("ngIf",t.homePageItems),P.Ab(1),P.nc("ngIf",t.homePageItems&&t.rvProductList),P.Ab(1),P.nc("sdJson",t.structuredJSONData),P.Ab(1),P.nc("sdJson",t.structuredSearchJSONData))},directives:[c.t,N,d.a,c.s,L.a,R.a],styles:[".home-page{padding:0;margin-left:auto;margin-right:auto;max-width:1600px}@media screen and (min-width:768px){  .home-page{padding:24px}}@media screen and (min-width:960px){  .home-page{padding:32px}}  .home-page section.module{margin-top:24px;padding-bottom:24px;border-bottom:1px solid #ccc}@media screen and (min-width:768px){  .home-page section.module{margin-top:24px;padding-bottom:24px;border-bottom:0}}@media screen and (min-width:960px){  .home-page section.module{max-width:1536px;margin-top:32px;margin-left:auto;margin-right:auto;padding-bottom:32px}}  .home-page section.module--compact{margin-top:0;padding-bottom:0;border-bottom:0}@media screen and (min-width:768px){  .home-page section.module--compact{padding-bottom:64px}}  .home-page section.module--no-border{border-bottom:none}  .home-page section.module:empty{display:none}"]}),W)}],F=((_=function e(){n(this,e)}).\u0275mod=P.Nb({type:_}),_.\u0275inj=P.Mb({factory:function(e){return new(e||_)},imports:[[h.m.forChild(E)],h.m]}),_),M=a("PCNd"),Q=((j=function e(){n(this,e)}).\u0275mod=P.Nb({type:j}),j.\u0275inj=P.Mb({factory:function(e){return new(e||j)},providers:[D],imports:[[c.c,M.a,F,d.b,l.a,m.a,u.a]]}),j)}}])}();