(()=>{var __webpack_modules__={77918:(e,t,n)=>{"use strict";var i=n(8945),a=n(96688),r=n(16743),o=n(3209),l=n(67294),s=n(73935),c=n(8522);class d extends l.Component{render(){return l.createElement(c.g.Provider,{value:this.props.registry},this.props.children)}}var m=n(59638),u=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};class p extends r.ModelClient{fetch(e){return u(this,void 0,void 0,(function*(){if(!e){const t="Fetching model rejected for path: "+e;return Promise.reject(new Error(t))}const t=`${this._apiHost}${e}`;return(0,m.L)()||console.error(`cannot fetch on server ${e}`),fetch(t,{credentials:"include"}).then((e=>u(this,void 0,void 0,(function*(){if(e.status>=200&&e.status<300||e.status>=400&&e.status<500)return e.json();throw new Error(e.toString())})))).catch((e=>u(this,void 0,void 0,(function*(){return Promise.reject(e)}))))}))}}var h=n(50660),g=n(46978),f=n(7521),y=n(43703),v=n(13680),b=n(46410),E=n(51092),w=n(14436);const C={"vw:authService":{typeName:"AuthServiceProvider",version:"^1.0.0"},tracking:{typeName:"TrackingManager",version:"^1.0.0"},"user-location-manager":{typeName:"UserLocationManager",version:"^1.0.0"}};function S(e,t){const n=(0,E.n)(function(e,t){const n=(0,m.L)()?window.vwdata:void 0,i={push(t){n&&!e.disableTrackingEvents&&n.push(t)}};return{breakPoints:[b.u3.b560,b.u3.b960,b.u3.b1280,b.u3.b1600,b.u3.b1920,b.u3.b2560],environmentData:{country:e.countryCode,language:e.languageCode,applicationId:e.trackingApplicationId},provider:i,navigationDataFn:()=>{const e=t.getSingleton(w.Bk).getCurrentPageRootModel();return e?{pageName:e.pageTrackingModel.trackingPageName,pageCategory:e.pageTrackingModel.category}:{}}}}(e,t));return{definition:n,service:C[n.id],env:"client"}}var k=n(67488);const L=()=>{const e=document.querySelector('script[type="x-feature-hub/urls-for-hydration"]');return e&&e.textContent?JSON.parse(e.textContent):[]};n(90208);var x=n(78384);const $=x.default.li.withConfig({displayName:"StyledItemWrapper"})`
    grid-column: ${e=>e.isInLayer?"1/25":"3/23"};

    @media (min-width: ${b.u3.b560}px) {
        grid-column: ${e=>`content-${e.indexRemainder}`};
    }
`,_=x.default.ul.withConfig({displayName:"StyledList"})`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-row-gap: ${e=>e.theme.size.dynamic0270};

    @media (min-width: ${b.u3.b560}px) {
        grid-template-columns: ${e=>e.isInLayer?"\n                [content-0-start content-2-start content-4-start] 11fr [content-0-end content-2-end content-4-end]\n                2fr\n                [content-1-start content-3-start content-5-start] 11fr [content-1-end content-3-end content-5-end]":"\n                1fr\n                [content-0-start content-2-start content-4-start] 10fr [content-0-end content-2-end content-4-end]\n                2fr\n                [content-1-start content-3-start content-5-start] 10fr [content-1-end content-3-end content-5-end]\n                1fr"};
    }

    @media (min-width: ${b.u3.b1280}px) {
        grid-template-columns: ${e=>e.isThreeColumnLayout?e.isInLayer?"\n                    [content-0-start content-3-start] 8fr [content-0-end content-3-end]\n                    1fr\n                    [content-1-start content-4-start] 8fr [content-1-end content-4-end]\n                    1fr\n                    [content-2-start content-5-start] 8fr [content-2-end content-5-end]":"\n                    2fr\n                    [content-0-start content-3-start] 6fr [content-0-end content-3-end]\n                    1fr\n                    [content-1-start content-4-start] 6fr [content-1-end content-4-end]\n                    1fr\n                    [content-2-start content-5-start] 6fr [content-2-end content-5-end]\n                    2fr":e.isInLayer?"\n                    [content-0-start content-2-start content-4-start] 11fr [content-0-end content-2-end content-4-end]\n                    2fr\n                    [content-1-start content-3-start content-5-start] 11fr [content-1-end content-3-end content-5-end]":"\n                    5fr\n                    [content-0-start content-2-start content-4-start] 6fr [content-0-end content-2-end content-4-end]\n                    2fr\n                    [content-1-start content-3-start content-5-start] 6fr [content-1-end content-3-end content-5-end]\n                    5fr"};
    }
`,I=e=>{const{isThreeColumnLayout:t,isInLayer:n}=e,i=l.Children.toArray(e.children);return l.createElement(_,{isThreeColumnLayout:t,isInLayer:n},l.Children.map(i,((e,t)=>l.createElement($,{isInLayer:n,indexRemainder:t%6},e))))};var T=n(84744),N=n(54425),P=n(47277),O=n(22714);const R=(0,T.R)("vwa-ngw18/components/structure/expandCollapseSectionParsys",(function(e){const{hasThreeColumnLayout:t,hasSquaredRatio:n,disableImages:i,isInLayer:a}=e;return l.createElement(I,{isThreeColumnLayout:t,isInLayer:a},(0,O.H)(e).map((e=>l.createElement(P.E,{key:e.key,resourceType:e.model.cqType,path:e.key,extraProps:{hasSquaredRatio:n,disableImages:i}}))),g.C.isInEditor()&&(0,N.d)("vwa-ngw18/components/structure/expandCollapseSectionParsys",e))}));n(50761);var z=n(73154),D=n(32667),A=n(49181),M=n(52745),B=n(69522),F=n(64202),W=n(41979),H=n(67585);const j=x.default.div.withConfig({displayName:"StyledMovingFrameWrap"})`
    ${e=>!e.isLayerContext&&`\n            overflow: hidden;\n            padding-top: ${e.theme.size.static200}; // sadly due Chrome, otherwise causing inner scroll-y issues\n        `}
`,V=x.default.div.withConfig({displayName:"StyledMovingFrame"})`
    position: relative;
    max-width: ${b.u3.b1920}px;

    margin: 0 auto;
    padding-bottom: ${e=>e.theme.size.dynamic0200};

    z-index: ${e=>e.isLayerContext?H.K.layers.movingFrame.z:H.K.main.movingFrame.z};

    // frame
    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: calc(-1 * ${e=>e.theme.size.grid001});
        right: calc(-1 * ${e=>e.theme.size.grid001});
        bottom: 0;

        top: ${.85}em;
        font-size: ${e=>e.theme.textAppearances.copy150.fontSize};
        box-shadow: inset 0 0 0 2px ${e=>e.theme.decoratorColor};
    }
`,q=x.default.div.withConfig({displayName:"StyledLabel"})`
    display: inline-block;
    margin: 0 ${e=>e.theme.size.grid002}
        ${e=>e.theme.size.dynamic0200};
    padding: 0 ${e=>e.theme.size.static150};
    background: ${e=>e.theme.global.backgroundColor};
`,G=e=>{const{children:t,label:n,linkText:i,target:a,url:r}=e,o=i&&r,s=(0,F.ce)(),c=Boolean(s.layerType);return l.createElement(j,{isLayerContext:c},l.createElement(V,{isLayerContext:c},l.createElement(q,null,n&&l.createElement(z.xv,{appearance:z.C2.copy0150,tag:z.rh.span},n),n&&o&&l.createElement(z.xv,{appearance:z.C2.copy0150,tag:z.rh.span}," ","|"," "),o&&l.createElement(z.xv,{appearance:z.C2.copy0150,tag:z.rh.span,bold:!0},l.createElement(W.O,{href:r,target:a},i))),t))};var U=n(2987),X=n(16195);const Y=x.default.div.withConfig({displayName:"StyledSectionGroupHeadingDisclaimerReferences"})`
    padding: ${e=>e.theme.size.dynamic0100}
        ${e=>e.theme.size.grid002} 0
        ${e=>e.theme.size.grid002};

    @media (min-width: ${b.u3.b560}px) {
        padding: ${e=>e.theme.size.dynamic0250}
            ${e=>e.theme.size.grid006} 0
            ${e=>e.theme.size.grid006};
    }
`;function K(e){const{disclaimers:t=[]}=e,n=t&&0!==t.length;return l.createElement(l.Fragment,null,n&&l.createElement(U.c,{name:"sectionDisclaimers"},l.createElement(Y,null,l.createElement(X.r,{disclaimers:t}))))}var Q=n(29821),Z=n(94800),J=n(67152),ee=n(98527),te=n(25944),ne=n(20325);const ie=()=>l.createElement(J.sw,{placeholder:"Type your headline here...",appearance:z.C2.headline400,textAlign:z.H.center,path:"heading"}),ae=l.memo((function(e){const{anchorId:t,contentId:n,contentName:i,contentLabels:a,movingFrameEnabled:r,groupLegalEntity:o,movingFrameLabel:s,movingFrameLinkTarget:c,movingFrameLinkText:d,movingFrameLinkUrl:m}=e,u=g.C.isInEditor()||function(){const{cqItems:t}=e;return!!t&&(t.heading&&!t.heading.empty)}(),p=l.createElement(Z.K,{legalEntity:o},l.createElement(D.W,{gutter:A.X.dynamic0250,wrap:M.Hq.always,stretchContent:!0},l.createElement(Q.a,null,(e=>l.createElement(l.Fragment,null,u&&l.createElement(ie,null),l.createElement(K,{disclaimers:e})))),l.createElement(te.dJ,{path:"itemParsys",parsysType:te.wi.ITEM_PARSYS})));return l.createElement(B.V,{anchorId:t,title:"I112 Item Group",bgColor:B.V.BG_COLOR_SECTION_GROUP},l.createElement(ee.U,{anchorId:t,sectionId:n,contentLabels:a,contentName:i},l.createElement(ne.b.Provider,{value:{sectionGroupAnchorId:t}},r?l.createElement(G,{label:s,linkText:d,url:m,target:c},p):p)))}));function re(e){return(0,O.H)(e).filter((e=>e.model)).map((e=>l.createElement(P.E,{key:e.key,resourceType:e.model.cqType,path:e.key})))}(0,T.R)("vwa-ngw18/components/structure/itemGroup",ae);var oe=n(93096),le=n.n(oe),se=n(38152),ce=n(47501),de=n(60600),me=n(21686),ue=n(85839),pe=n(83504);const he="--s2-one-hub-navigation-top-bar-height",ge=x.default.div.withConfig({displayName:"StyledBreadcrumbsWrapper"})`
    ${(0,ce.xd)(he,!0)}
    margin-top: calc(var(${he}) + ${e=>e.theme.size.dynamic0100});
`;function fe(e){const t=(0,F.Ng)(),n=(0,F.x8)(),i=l.useRef(null),a=(0,F.Y7)().getCurrentPageRootModel(),[r,o]=l.useState(A.X.static750);l.useEffect((()=>{n.setSkipLinkClickHandler("mainContentSkipLink",i)}),[i,n]);const s=()=>{const e=(0,ue.ot)(window.innerWidth)<=b.u3.b960?A.X.static650:A.X.static750;o(e)},c=le()((()=>{s()}),500);l.useEffect((()=>(s(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)})),[]);const{stage:d,breadcrumbs:m,children:u,isSimpleStage:p}=e,h=a?a.pageTrackingModel.templateType:null,f=h===me.W.MODEL_OVERVIEW||h===me.W.FEATURE_APP,y=g.C.isInEditor()||d?void 0:f?r:A.X.dynamic0350;let v;return v=d?l.createElement(D.W,{padding:{top:A.X.dynamic0350},wrap:M.Hq.always},u):l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0350},u),l.createElement(D.W,{padding:{top:y,bottom:A.X.dynamic0350},wrap:M.Hq.always},p&&l.createElement(ge,null,m),l.createElement(pe.u,null),l.createElement(se.H.Provider,{value:{lazyload:!(null==t?void 0:t.disableLazyLoading)}},d),!p&&m,l.createElement(de.Lu,{ref:i},v))}var ye=n(33700),ve=n(81697);const be=ye.zo.div.withConfig({displayName:"OneHubBreadcrumbLinkInnerWrapper"})`
    display: inline-block;
`;be.displayName="OneHubBreadcrumbLinkInnerWrapper";const Ee=ye.zo.span.withConfig({displayName:"OneHubBreadcrumbLinkInnerTitle"})`
    white-space: nowrap;
`;Ee.displayName="OneHubBreadcrumbLinkInnerTitle";const we=e=>{const{title:t,index:n,absoluteUrl:i}=e;return l.createElement(be,null,l.createElement(Ee,{itemProp:"name"},t),l.createElement("meta",{itemProp:"position",content:(n+1).toString()}),l.createElement("meta",{itemProp:"item",content:i}))},Ce="0.25em",Se=ye.zo.ol.withConfig({displayName:"StyledBreadcrumbsWrapper"})`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 ${e=>e.theme.size.grid002};

    @media (min-width: ${b.u3.b1280}px) {
        max-width: 50vw;
    }
`;Se.displayName="StyledBreadcrumbsWrapper";const ke=ye.zo.li.withConfig({displayName:"StyledBreadcrumb"})`
	display: flex;
	align-items: baseline;
	margin-${e=>(0,ve.lp)(e.theme.direction)}:
	${e=>e.theme.size.static150};
	margin-bottom: ${e=>e.theme.size.static150};

	&:not(:first-child):before {
		content: '';
		margin-${e=>(0,ve.lp)(e.theme.direction)}:
		${e=>e.theme.size.static150};

		/* CSS triangle */
		width: 0;
		height: 0;
		border-${e=>(0,ve.rz)(e.theme.direction)}:
		${"0.4em"} solid ${e=>e.theme.interaction.recipe400.default};
		border-top: ${Ce} solid transparent;
		border-bottom: ${Ce} solid transparent;
	}
`;ke.displayName="StyledBreadcrumb";const Le=e=>{const{children:t}=e,n=t.map(((e,t)=>l.createElement(ke,{itemProp:"itemListElement",itemScope:!0,itemType:"http://schema.org/ListItem",key:`breadcrumb_${t}`},e)));return l.createElement(Se,{itemScope:!0,itemType:"http://schema.org/BreadcrumbList"},n)};var xe=n(80955),$e=n(16767);const _e=x.default.nav.withConfig({displayName:"StyledBreadcrumbsWrapper"})`
    padding-top: ${e=>e.isPageWithFeatureApp?0:e.topSpacing?e.topSpacing:e.theme.size.static250};

    padding-bottom: ${e=>e.isPageWithFeatureApp?e.theme.size.dynamic0130:0};

    @media (max-width: ${b.u3.b560-1}px) {
        display: none;
    }
`,Ie=(0,xe.Pi)((e=>{const t=(0,F.TC)(),n=(0,F.V9)(),i=(0,F.WS)(),a=(0,F.Y7)();let r=t.links;const o=t.homeLabel,s=t.ariaLabel,c=r.length,d=a.getCurrentPageRootModel(),m=d?d.pageTrackingModel.templateType:null,u=m===me.W.MODEL_OVERVIEW||m===me.W.FEATURE_APP;if(0===r.length)return null;let p=!1;r[c-1].hidden&&(r=r.slice(0,c-1),p=!0);const h=(e,t,i)=>{const a={url:e,name:t};n.trackNavigationBreadcrumbClick("navigation-breadcrumb",a,i)};return l.createElement(_e,{topSpacing:e.topSpacing,"aria-label":s,isPageWithFeatureApp:u},l.createElement(Le,null,r.map(((e,t)=>{const n=!t&&o||e.title,a=t===c-1,r=i.siteUrl+(e.url.startsWith("/")?e.url:"/"+e.url),s=e.onClick?t=>{t.preventDefault(),e.onClick&&e.onClick()}:void 0,d=l.createElement(we,{title:n,index:t,absoluteUrl:r});return a&&!p?l.createElement(z.xv,{appearance:z.C2.copy0150,bold:!0,key:t},d):l.createElement(z.xv,{appearance:z.C2.copy0150,key:t},l.createElement(W.O,{href:e.url,trackingActionOverride:e.onClick?$e.Z:h,onClick:s,emphasis:"tertiary"},d))}))))}));Ie.displayName="Breadcrumbs";var Te=n(87465);const Ne=x.default.div.withConfig({displayName:"StyledTechnicalDataItem"})`
    flex-grow: 0;
    margin: calc(${e=>e.theme.size.dynamic0100} / 2)
        calc(${e=>e.theme.size.dynamic0150} / 2);
`,Pe=x.default.span.withConfig({displayName:"StyledSecondaryDataWrapper"})`
margin-${e=>(0,ve.rz)(e.theme.direction)}: ${e=>e.unitBeforeValue?"0":e.theme.size.static100};
`,Oe=e=>l.createElement(l.Fragment,null,e.data&&l.createElement(Pe,{unitBeforeValue:e.unitBeforeValue},l.createElement(z.xv,{appearance:z.C2.label0200,bold:!1},e.data)));function Re(e){const{name:t,value:n,suffix:i,unit:a,unitBeforeValue:r}=e,o=l.createElement(Oe,{data:a,unitBeforeValue:r}),s=l.createElement(Oe,{data:i});return l.createElement(x.ThemeContext.Consumer,null,(({direction:e})=>{const i=e===ve.Nm.RTL?r?l.createElement(l.Fragment,null,s,n,o):l.createElement(l.Fragment,null,s,o,n):r?l.createElement(l.Fragment,null,o,n,s):l.createElement(l.Fragment,null,n,o,s);return l.createElement(Ne,null,l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0020},l.createElement(z.xv,{appearance:z.C2.label0200,tag:z.rh.div},t),l.createElement(z.xv,{appearance:z.C2.headline0300,bold:!0,tag:z.rh.div},i)))}))}const ze=x.default.div.withConfig({displayName:"StyledTechnicalDataWrapper"})`
    padding: 0 ${e=>e.theme.size.grid001};
`,De=x.default.div.withConfig({displayName:"StyledTechnicalData"})`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: calc(-1 * (${e=>e.theme.size.dynamic0100} / 2))
        calc(-1 * (${e=>e.theme.size.dynamic0150} / 2));
`,Ae=x.default.div.withConfig({displayName:"StyledButtonContainer"})`
    position: relative;
    margin-top: ${e=>e.theme.size.dynamic0150};
    display: flex;
    justify-content: center;
`,Me=x.default.div.withConfig({displayName:"StyledButtonBackgroundWrapper"})`
    position: relative;
    background: ${e=>e.theme.global.backgroundColor};
    padding: 0 ${e=>e.theme.size.static200};
`,Be=x.default.div.withConfig({displayName:"StyledLine"})`
    ${e=>e.isCentered&&x.css`
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        `};
    height: 2px;
    width: 100%;
    background: ${e=>e.theme.separatorColor};
`;function Fe(e){return l.createElement(Te.Ar,{appearance:Te.O$.full,allowOverflowingContent:!0},l.createElement(D.W,{wrap:M.Hq.always,padding:{left:A.X.grid001,right:A.X.grid001}},l.createElement(ze,null,l.createElement(De,null,e.children)),e.disclaimers&&l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.static200,padding:{left:A.X.grid001,right:A.X.grid001,top:A.X.dynamic0150}},e.disclaimers),l.createElement(Ae,null,l.createElement(Be,{isCentered:!!e.button}),e.button&&l.createElement(Me,null,e.button))))}var We=n(10194),He=n(1413),je=n(35499),Ve=n(42607);const qe=x.default.span.withConfig({displayName:"StyledTextWithSup"})`
    margin-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.unitBeforeValue?e.theme.size.static100:""};
    margin-inline-end: ${e=>e.unitBeforeValue?e.theme.size.static100:""};
`;qe.displayName="StyledTextWithSup";const Ge=x.default.div.withConfig({displayName:"StyledBreadcrumbsWrapper"})`
    ${e=>e.noTechnicalData?`margin-top: calc(-1 * ${e.theme.size.dynamic0130});`:""};
`;function Ue(e){const{disclaimers:t=[],text:n,unitBeforeValue:i}=e,a=(0,He.p)(t);return t&&0!==t.length?l.createElement(x.ThemeContext.Consumer,null,(({direction:e})=>e===ve.Nm.RTL?l.createElement(qe,{unitBeforeValue:i},l.createElement(We.OJ,{disclaimers:a,addSpace:!0}),n):l.createElement(qe,{unitBeforeValue:i},n,l.createElement(We.OJ,{disclaimers:a,addSpace:!0})))):l.createElement(l.Fragment,null,n)}Ge.displayName="StyledBreadcrumbsWrapper";const Xe="vwa-ngw18/components/editorial/sections/carTechnicalDataSection",Ye=((0,T.R)(Xe,(function(e){var t;const{anchorId:n,contentName:i,contentLabels:a,contentId:r,showButton:o,technicalData:s,tagTypeBroken:c}=e,d=(0,je.x)(o,l.createElement(Ve.S,{path:"button"})),m=l.useContext(x.ThemeContext),u=null===(t=(0,F.Y7)().getCurrentPageRootModel())||void 0===t?void 0:t.stageType,p=Boolean(null==u?void 0:u.includes("simpleStageSection")),h=s.length,f=p?null:l.createElement(Ge,{noTechnicalData:!h},l.createElement(Ie,{topSpacing:h?o?m.size.static450:m.size.static510:m.size.static250})),y=l.createElement(B.V,{anchorId:n,title:"S128 Car Technical Data Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:c},l.createElement(ee.U,{anchorId:n,sectionId:r,contentLabels:a,contentName:i},l.createElement(Q.a,{getItemDisclaimers:!0},(e=>l.createElement(Fe,{button:d,disclaimers:l.createElement(X.r,{disclaimers:e})},function(e){const t=[];return e.forEach(((e,n)=>{t.push(l.createElement(Re,{key:n,name:l.createElement(Ue,{text:e.label,disclaimers:e.labelDisclaimers}),value:l.createElement(Ue,{text:e.value,disclaimers:e.valueDisclaimers}),unit:l.createElement(Ue,{text:e.unit,disclaimers:e.unitDisclaimers,unitBeforeValue:e.unitBeforeValue}),suffix:e.unitSuffix,unitBeforeValue:e.unitBeforeValue}))})),t}(s))))),f),v=h?y:f;return g.C.isInEditor()?y:v})),"stageParsys"),Ke=(0,xe.Pi)((function(e){const t=(0,F.Y7)(),n=e.cqItems.stageParsys&&l.createElement(te.dJ,{path:Ye,parsysType:te.wi.STAGE_PARSYS}),i=t.getCurrentPageRootModel(),a=[...(0,O.H)(e.cqItems.stageParsys),...(0,O.H)(e.cqItems.mainParsys)].filter((e=>e.model.cqType===Xe)).length,r=t.getStageType(),o=Boolean(null==r?void 0:r.includes("simpleStageSection")),s=!a||o?l.createElement(Ie,null):void 0;return l.createElement(l.Fragment,null,l.createElement(fe,{stage:n,breadcrumbs:s,isSimpleStage:o},(g.C.isInEditor()||!(re(e.cqItems.mainParsys).length<=0))&&l.createElement(te.dJ,{path:"mainParsys",parsysType:te.wi.MAIN_PARSYS,showPersonalizablePlaceholders:i&&i.personalizablePlaceholders})))}));(0,T.R)("vwa-ngw18/components/structure/pagemain",Ke),(0,T.R)("vwa-ngw18/components/structure/answersoverviewmain",Ke),(0,T.R)("vwa-ngw18/components/structure/answerscategorymain",Ke),(0,T.R)("vwa-ngw18/components/structure/answersmain",Ke),(0,T.R)("vwa-ngw18/components/structure/idhubfamilyentrymain",Ke),(0,T.R)("vwa-ngw18/components/structure/magazineoverviewmain",Ke),(0,T.R)("vwa-ngw18/components/structure/idhubproductexperiencemain",Ke),(0,T.R)("vwa-ngw18/components/structure/magazinecategorymain",Ke),(0,T.R)("vwa-ngw18/components/structure/magazinemain",Ke),(0,T.R)("vwa-ngw18/components/structure/errormain",Ke),(0,T.R)("vwa-ngw18/components/structure/idhubentrymain",Ke),(0,T.R)("vwa-ngw18/components/structure/errormain",Ke);var Qe=n(53159);const Ze=(0,ve.$r)([2,4]),Je={left:Ze,right:Ze},et=()=>l.createElement(D.W,{padding:Je,stretchContent:!0,wrap:M.Hq.always},l.createElement(Qe.$,{placeholder:"Type your headline here...",textAlign:z.H.center,style:"H1",path:"heading"}));class tt extends l.PureComponent{render(){const{anchorId:e,contentId:t,contentName:n,contentLabels:i,movingFrameEnabled:a,groupLegalEntity:r,movingFrameLabel:o,movingFrameLinkTarget:s,movingFrameLinkText:c,movingFrameLinkUrl:d}=this.props,m=g.C.isInEditor()||this.hasHeadline(),u=l.createElement(Te.Ar,{allowOverflowingContent:!0},l.createElement(Z.K,{legalEntity:r},l.createElement(D.W,{gutter:A.X.dynamic0250,wrap:M.Hq.always,stretchContent:!0},l.createElement(Q.a,null,(e=>l.createElement(l.Fragment,null,m&&l.createElement(et,null),l.createElement(K,{disclaimers:e})))),l.createElement(te.dJ,{path:"groupParsys",parsysType:te.wi.SECTION_GROUP_PARSYS}))));return l.createElement(B.V,{anchorId:e,title:"S116 Section Group",bgColor:B.V.BG_COLOR_SECTION_GROUP},l.createElement(ee.U,{anchorId:e,sectionId:t,contentLabels:i,contentName:n},l.createElement(ne.b.Provider,{value:{sectionGroupAnchorId:e,sectionGroupContentId:t}},a?l.createElement(G,{label:o,linkText:c,url:d,target:s},u):u)))}hasHeadline(){const{cqItems:e}=this.props;return!!e&&!!e.heading&&!e.heading.empty}}(0,T.R)("vwa-ngw18/components/structure/sectionGroup",tt);var nt=n(28025),it=n(3514),at=n(605),rt=n(9363);class ot extends l.PureComponent{render(){const{hasCaptionAboveMedia:e}=this.props,t=l.createElement(D.W,{horizontalAlign:M._N.center,padding:{left:A.X.dynamic0150,right:A.X.dynamic0150},wrap:M.Hq.always},l.createElement(J.sw,{path:"caption",textAlign:z.H.center})),n=l.createElement(it.B,{caption:t,captionAboveMedia:e},l.createElement(rt.s,{path:"media"}));return l.createElement(B.V,{title:"I106 Media Single Item",bgColor:B.V.BG_COLOR_ITEM},l.createElement(at.Y,null,l.createElement(D.W,{gutter:A.X.dynamic0020,stretchContent:!0,wrap:M.Hq.always},n)))}}ot.RESOURCE_TYPE="vwa-ngw18/components/editorial/items/mediaSingleItem",ot.CQ_CONTAINER_CLASS=".mediaSingleItem";const lt=(0,T.R)(ot.RESOURCE_TYPE,ot);var st=n(10650);const ct=[ot.RESOURCE_TYPE],dt=[ot.CQ_CONTAINER_CLASS],mt={SMALL:`(min-width: ${b.u3.b560}px) 50vw, 80vw`,MEDIUM:`(min-width: ${b.u3.b560}px) 66vw, 80vw`,LARGE:`(min-width: ${b.u3.b560}px) 80vw, 100vw`,FULL:"100vw"};var ut;!function(e){e[e.Dynamic0100=0]="Dynamic0100"}(ut||(ut={}));const pt=x.default.div.withConfig({displayName:"StyledAuthorParsys"})`
    & > {
        // margin-bottom for all but the last element
        *:not(:last-child) {
            margin-bottom: ${e=>function(e,t){switch(t){case ut.Dynamic0100:return e.size.dynamic0100;default:return}}(e.theme,e.marginBottom)};
        }

        // padding for media elements
        ${dt.join(",")} {
            ${e=>"SMALL"===e.mediaLayout&&`\n                @media (min-width: ${b.u3.b560}px) {\n                    margin-left: ${e.theme.size.grid002};\n                    margin-right: ${e.theme.size.grid002};\n                }\n\n                @media (min-width: ${b.u3.b960}px) {\n                    margin-left: ${e.theme.size.grid006};\n                    margin-right: ${e.theme.size.grid006};\n                }\n            `}
            ${e=>"MEDIUM"===e.mediaLayout&&`\n                @media (min-width: ${b.u3.b560}px) {\n                    margin-left: ${e.theme.size.grid002};\n                    margin-right: ${e.theme.size.grid002};\n                }\n\n                @media (min-width: ${b.u3.b960}px) {\n                    margin-left: ${e.theme.size.grid004};\n                    margin-right: ${e.theme.size.grid004};\n                }\n            `}
            ${e=>"LARGE"===e.mediaLayout&&`\n                @media (min-width: ${b.u3.b560}px) {\n                    margin-left: ${e.theme.size.static0};\n                    margin-right: ${e.theme.size.static0};\n                }\n\n                @media (min-width: ${b.u3.b960}px) {\n                    margin-left: ${e.theme.size.grid002};\n                    margin-right: ${e.theme.size.grid002};\n                }\n            `}
        }

        // padding for non-media elements
        *${dt.map((e=>`:not(${e})`)).join("")} {
            margin-left: ${e=>e.theme.size.grid002};
            margin-right: ${e=>e.theme.size.grid002};

            @media (min-width: ${b.u3.b560}px) {
                margin-left: ${e=>e.theme.size.grid006};
                margin-right: ${e=>e.theme.size.grid006};
            }

            @media (min-width: ${b.u3.b1600}px) {
                margin-left: ${e=>e.theme.size.grid007};
                margin-right: ${e=>e.theme.size.grid007};
            }
        }
    }
`;class ht extends l.Component{render(){return g.C.isInEditor()?l.createElement(pt,{marginBottom:ut.Dynamic0100,mediaLayout:this.props.layout},this.authorChildren):l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always},this.publishChildren)}get authorChildren(){const e=re(this.props),t=(0,N.d)(ht.RESOURCE_TYPE,this.props);return e.push(t),e}get publishChildren(){return(0,O.H)(this.props).map((e=>{const t=ct.indexOf(e.model.cqType)>=0?st.zB.MEDIA:st.zB.TEXT;return l.createElement(st.Gz,{childType:t,layout:this.props.layout,key:e.key},l.createElement(nt.YN.Provider,{value:{sizes:mt[this.props.layout]}},l.createElement(P.E,{resourceType:e.model.cqType,path:e.key})))}))}}ht.RESOURCE_TYPE="vwa-ngw18/components/structure/singleColumnSectionParsys";const gt=(0,T.R)(ht.RESOURCE_TYPE,ht);var ft=n(58795),yt=n(95168);const vt=(0,ve.$r)([2,3,5]),bt=()=>l.createElement(ft.e3,{severity:ft.vR.INFO},l.createElement("div",null,"This message is only shown to users with an unsupported browser version."));class Et extends l.Component{render(){return g.C.isInEditor()?l.createElement(B.V,{title:"Unsupported browser notification",bgColor:B.V.BG_COLOR_SECTION},l.createElement(bt,null),l.createElement(Te.Ar,null,l.createElement(D.W,{stretchContent:!0,wrap:M.Hq.always,padding:{left:vt,right:vt}},l.createElement(Qe.$,{path:"heading"}),l.createElement(yt.s,{path:"copy",useDropCap:!1})))):null}}(0,T.R)("vwa-ngw18/components/structure/unsupportedBrowserNotification",Et),n(24379),n(56646),n(41726);class wt extends l.Component{render(){return l.createElement(fe,null,l.createElement(te.dJ,{parsysType:te.wi.MAIN_PARSYS,path:"mainParsys"}))}}function Ct(){const e=(0,F.Y7)(),t=l.createElement(te.dJ,{path:"stageParsys",parsysType:te.wi.STAGE_PARSYS}),n=e.getCurrentPageRootModel();return l.createElement(fe,{stage:t},l.createElement(te.dJ,{parsysType:te.wi.MAIN_PARSYS,path:"mainParsys",showPersonalizablePlaceholders:n&&n.personalizablePlaceholders}))}(0,T.R)("vwa-ngw18/components/structure/login/loginMain",wt),(0,T.R)("vwa-ngw18/components/structure/answerscategorymain",Ct),(0,T.R)("vwa-ngw18/components/structure/answersmain",Ct),(0,T.R)("vwa-ngw18/components/structure/answersoverviewmain",Ct),(0,T.R)("vwa-ngw18/components/structure/idhubentrymain",(function(){const e=(0,F.Y7)().getCurrentPageRootModel(),t=l.createElement(te.dJ,{path:"stageParsys",parsysType:te.wi.STAGE_PARSYS});return l.createElement(fe,{stage:t},l.createElement(te.dJ,{path:"mainParsys",showPersonalizablePlaceholders:e&&e.personalizablePlaceholders,parsysType:te.wi.MAIN_PARSYS}))})),(0,T.R)("vwa-ngw18/components/structure/idhubfamilyentrymain",Ct),(0,T.R)("vwa-ngw18/components/structure/idhubproductexperiencemain",Ct),(0,T.R)("vwa-ngw18/components/structure/magazinecategorymain",Ct),(0,T.R)("vwa-ngw18/components/structure/magazinemain",Ct),(0,T.R)("vwa-ngw18/components/structure/magazineoverviewmain",Ct);var St=n(17061),kt=n(86119),Lt=n(3353),xt=n(14308),$t=n(79126),_t=n(93346);const It=x.default.div.withConfig({displayName:"StyledLayerFooter"})`
    border-top: ${"2px"} solid
        ${e=>e.theme.border.color.secondary};
    padding-top: ${e=>e.theme.size.dynamic0050};
    padding-bottom: calc(
        ${e=>e.theme.size.dynamic0350} + ${_t.gX}
    );
    margin-top: ${e=>e.theme.size.dynamic0200};
`;function Tt(e){const{disclaimers:t,linkItems:n,bottomNavAriaLabel:i}=e;return l.createElement(It,null,l.createElement($t.LJ,{bottomNavAriaLabel:i,hideCopyright:!0},n),t)}const Nt=x.default.div.withConfig({displayName:"StyledDisclaimersContainer"})`
    padding-top: ${e=>e.theme.size.static500};

    @media (min-width: ${b.u3.b560}px) {
        padding-top: ${e=>e.theme.size.static550};
    }
`;function Pt(e){const t=(0,F.En)(),n=(0,xt.Nh)({pageDisclaimers:e.pageDisclaimers}),{legalAndImprintLinks:i,bottomNavAriaLabel:a}=t,r=i.IMPRINT.links.concat(i.LEGAL.links),o=r&&r.map(xt.Ov),s=l.createElement(Nt,null,n);return l.createElement(U.c,{name:"footer"},l.createElement(Tt,{linkItems:o,disclaimers:s,bottomNavAriaLabel:a}))}var Ot=n(42831);const Rt=x.default.div.withConfig({displayName:"StyledControlsWrapper"})`
    position: ${e=>"fixed"===e.position?"fixed":"absolute"};
    width: ${e=>"fixed"===e.position?(0,Ot.C)(22):"100%"};
    max-width: ${e=>"fixed"===e.position?(0,Ot.G)(22,b.u3.b1920):"100%"};
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${e=>e.theme.size.static200}
        ${e=>e.theme.size.dynamic0050}
        ${e=>e.theme.size.static100};
    pointer-events: none;
    background-color: ${e=>e.theme.global.backgroundColor};

    @media (min-width: ${b.u3.b1280}px) {
        padding: 0;
        transform: translateY(-50%);
        top: ${e=>"layer"===e.position?"50%":"50vh"};
        background-color: unset;
    }
`,zt=x.default.div.withConfig({displayName:"StyledCounterWrapper"})`
    margin: 0 ${e=>e.theme.size.static350};
    text-align: center;
    flex-grow: 1;
    @media (min-width: ${b.u3.b1280}px) {
        display: none;
    }
`,Dt=x.default.div.withConfig({displayName:"StyledPrevButtonWrapper"})`
    display: flex;
    justify-content: flex-start;
    margin-right: ${e=>e.theme.size.static350};
    width: ${e=>e.theme.size.grid008};

    @media (min-width: ${b.u3.b1280}px) {
        width: ${e=>e.theme.size.grid002};
        margin-right: 0;
        justify-content: flex-end;
    }
`,At=x.default.div.withConfig({displayName:"StyledNextButtonWrapper"})`
    display: flex;
    justify-content: flex-end;
    margin-left: ${e=>e.theme.size.static350};
    width: ${e=>e.theme.size.grid008};

    @media (min-width: ${b.u3.b1280}px) {
        margin-left: 0;
        width: ${e=>e.theme.size.grid002};
        justify-content: flex-start;
    }
`;class Mt extends l.PureComponent{constructor(){super(...arguments),this.state={position:"default"},this.handleIntersectionObserver=e=>{e.forEach((()=>this.handleScroll()))},this.handleScroll=()=>{const{position:e}=this.state,t=this.getControlsPosition();e!==t&&this.setState({position:t})},this.getControlsPosition=()=>{const{ioAnchorRef:e,containerRef:t}=this.props,n=s.findDOMNode(e.current),i=s.findDOMNode(t.current);if("undefined"==typeof window||null===n||null===i)return"default";if(n instanceof Element&&i instanceof Element){const e=i.getBoundingClientRect(),t=n.getBoundingClientRect();if(e.height<window.innerHeight)return"layer";if(t.top>=0)return"default"}return"fixed"},this.attachListeners=()=>{this.handleScroll();const{ioAnchorRef:e}=this.props,t=s.findDOMNode(e.current);t instanceof Element&&(this.observer=new IntersectionObserver(this.handleIntersectionObserver,{threshold:1}),this.observer.observe(t)),window.addEventListener("resize",this.handleScroll)}}componentDidMount(){this.attachListeners()}componentWillUnmount(){this.observer&&this.observer.disconnect(),window.removeEventListener("resize",this.handleScroll)}render(){const{prevButton:e,counter:t,nextButton:n}=this.props;return l.createElement(Rt,{position:this.state.position},l.createElement(Dt,null,e),l.createElement(zt,null,t),l.createElement(At,null,n))}}var Bt;!function(e){e[e.left=0]="left",e[e.right=1]="right"}(Bt||(Bt={})),x.default.button.withConfig({displayName:"StyledNavigationButton"})`
    ${(0,ve.sp)()}
    display: flex;
    flex-direction: ${e=>e.navigationButtonDirection===Bt.left?"row":"row-reverse"};
    align-items: center;
    pointer-events: all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;

    @media (min-width: ${b.u3.b1280}px) {
        max-width: ${(0,Ot.C)(2)};
        flex-direction: column;
        align-items: ${e=>e.navigationButtonDirection===Bt.left?"flex-end":"flex-start"};
        white-space: normal;
    }
    @media (min-width: ${b.u3.b1920}px) {
        max-width: ${(0,Ot.G)(2,b.u3.b1920)};
    }

    color: ${e=>e.theme.interaction.recipe450.default};
    :hover {
        color: ${e=>e.theme.interaction.recipe450.hover};
    }
    :active {
        color: ${e=>e.theme.interaction.recipe450.active};
    }
    :focus {
        color: ${e=>e.theme.interaction.recipe450.hover};
    }
    :disabled {
        color: ${e=>e.theme.interaction.recipe450.disabled};
    }
`,x.default.div.withConfig({displayName:"StyledIconWrapper"})`
    ${e=>e.navigationButtonDirection===Bt.left?"margin-right":"margin-left"}: ${e=>e.theme.size.static200};
    @media (min-width: ${b.u3.b1280}px) {
        margin-left: 0;
        margin-right: 0;
        margin-bottom: ${e=>e.theme.size.static150};
    }
`,x.default.div.withConfig({displayName:"StyledCounterWrapper"})`
    display: none;
    @media (min-width: ${b.u3.b1280}px) {
        display: block;
        margin-bottom: ${e=>e.theme.size.static100};
    }
`,x.default.div.withConfig({displayName:"StyledTextWrapper"})`
    display: none;
    @media (min-width: ${b.u3.b560}px) {
        display: block;
    }

    @media (min-width: ${b.u3.b560}px) and (max-width: ${b.u3.b1280}px) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        top: -0.11em;
    }

    @media (min-width: ${b.u3.b1280}px) {
        text-align: right;
    }
`;const Ft=x.default.div.withConfig({displayName:"StyledContentLayerContainer"})`
    position: relative;
    min-height: calc(100vh - ${e=>e.theme.size.dynamic0350});
`,Wt=x.default.div.withConfig({displayName:"StyledCloseButtonContainer"})`
    position: fixed;
    bottom: ${e=>e.theme.size.static400};
    left: 50%;
    transform: translateX(-50%);
    background: ${e=>e.theme.global.backgroundColor};
    border-radius: 500px;
`;Wt.displayName="StyledCloseButtonContainer";const Ht=x.default.div.withConfig({displayName:"StyledIntersectionObserverAnchor"})`
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    opacity: 0;
    pointer-events: none;
`,jt=(0,ve.$r)([0,1]);class Vt extends l.PureComponent{constructor(){super(...arguments),this.containerRef=l.createRef(),this.ioAnchorRef=l.createRef()}render(){const{prevButton:e,nextButton:t,counter:n,children:i,closeButton:a,overline:r,headline:o}=this.props,s={inlineStart:jt},c={inlineStart:{[b.u3.default]:A.X.grid002,[b.u3.b1280]:A.X.grid003},inlineEnd:{[b.u3.default]:A.X.grid002,[b.u3.b960]:A.X.grid003,[b.u3.b1280]:A.X.grid004}};return l.createElement(Ft,{ref:this.containerRef},l.createElement(Ht,{ref:this.ioAnchorRef}),l.createElement(D.W,{padding:Object.assign(Object.assign({},c),{top:A.X.dynamic0270,bottom:A.X.dynamic0350}),wrap:M.Hq.always,gutter:A.X.dynamic0100,stretchContent:!0},l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0020,stretchContent:!0},l.createElement(D.W,{padding:s,stretchContent:!0},r),o),l.createElement(D.W,{padding:s,wrap:M.Hq.always,stretchContent:!0},i)),l.createElement(Mt,{containerRef:this.containerRef,ioAnchorRef:this.ioAnchorRef,prevButton:e,nextButton:t,counter:n}),l.createElement(Wt,null,a))}}const qt=e=>l.createElement(U.c,{name:"closeButton"},l.createElement(St.M,{tag:"button",emphasis:"secondary",icon:l.createElement(kt.x,{variant:"small",ariaHidden:!0}),onClick:e.onClose,type:"button",size:"small"},l.createElement(z.xv,{color:z.d9.inherit,appearance:z.C2.copy100},e.label)));qt.displayName="ContentLayerCloseButton";const Gt=e=>{const t=(0,F.WS)(),{children:n,headline:i,overline:a,closeButton:r,hideFooter:o}=e,s=t.oneHub;return l.createElement(Lt.g,null,(e=>l.createElement(Vt,{headline:i,overline:a,closeButton:r},l.createElement(D.W,{wrap:M.Hq.always,stretchContent:!0},n,!o&&s&&l.createElement(Pt,{pageDisclaimers:e})))))};var Ut=n(52140),Xt=n(10112),Yt=n(7279),Kt=n(65374);const Qt=x.default.button.withConfig({displayName:"StyledMediaElementContainer"})`
    ${ve.sp}
    cursor: pointer;
    width: ${"77px"};
    height: auto;
    margin-right: ${e=>e.theme.size.static100};

    @media (min-width: ${b.u3.b960}px) {
        width: 100%;
        max-width: calc(
            20% - ${e=>e.theme.size.dynamic0020} +
                ${e=>e.theme.size.dynamic0020} / 4
        );
        min-width: calc(
            18% - ${e=>e.theme.size.static100}
        ); /* if more than 5 items, the 6th one will be partially shown */
    }

    padding-bottom: ${"2px"};

    border-bottom: ${"2px"} solid
        ${e=>e.isActive?"black":"transparent"};

    &:focus {
        outline-offset: 1px;
        outline: solid ${"2px"} ${e=>e.theme.focusColor};
    }
`;Qt.displayName="StyledMediaElementContainer";const Zt=x.default.div.withConfig({displayName:"StyledOverlay"})`
    bottom: 0;
    top: 0;
    left: 0px;
    right: 0px;
    position: absolute;
    pointer-events: none;
    background: rgba(${"0,0,0,0.4"});
`;Zt.displayName="StyledOverlay";const Jt=x.default.div.withConfig({displayName:"StyledMediaElementWrapper"})`
    position: relative;
`;function en({isActive:e,children:t,mediaRef:n,paginationData:{id:i,panelId:a,label:r},onClick:o}){return l.createElement(Qt,{onClick:o,role:"tab",id:i,"aria-controls":a,tabIndex:e?0:-1,"aria-selected":e?"true":"false",isActive:e},l.createElement(Jt,{ref:n},t,l.createElement(ve.Wc,null,r),!e&&l.createElement(Zt,null)))}Jt.displayName="StyledMediaElementWrapper";var tn=n(696);const nn=ye.zo.div.withConfig({displayName:"StyledPaginationWrapper"})`
	direction: ltr;

	button:${e=>e.theme.direction!==ve.Nm.RTL?"last-child":"first-child"} {
		@media (min-width: ${b.u3.b960}px) {
			padding-${e=>(0,ve.lp)(e.theme.direction)}: 0;
		}
	}
`,an=ye.zo.button.withConfig({displayName:"StyledButton"})`
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
`,rn=()=>{};class on extends l.Component{constructor(){super(...arguments),this.paginationRef=l.createRef(),this.handleSlideChange=e=>{const{activeItemIndex:t,itemCount:n,onSlideChanged:i,onPaginationClick:a=rn}=this.props;i((t+n+e)%n),a(e)}}render(){const{activeItemIndex:e,itemCount:t}=this.props;return l.createElement(nn,{"aria-hidden":!0,ref:(0,tn.Z)(this.paginationRef),tabIndex:-1},l.createElement(U.c,{name:"previousPage"},l.createElement(an,{onClick:()=>this.handleSlideChange(-1),tabIndex:-1},l.createElement(Ut.s,{variant:"small"}))),l.createElement("span",null,`${e+1} / ${t}`),l.createElement(U.c,{name:"nextPage"},l.createElement(an,{onClick:()=>this.handleSlideChange(1),tabIndex:-1},l.createElement(Xt._,{variant:"small"}))))}}var ln;function sn(e,t){return e||t===ve.Nm.RTL?ln.START:ln.END}!function(e){e.START="start",e.END="end"}(ln||(ln={}));const cn=ye.zo.div.withConfig({displayName:"StyledLayoutWrapper"})`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: ${e=>e.theme.size.dynamic0050} 0 ${e=>e.theme.size.static250} 0;

	// for focus outline space without outline getting cut off
	padding: ${e=>e.theme.size.static150};

	@media (min-width: ${b.u3.b560}px) {
		${e=>(0,ve.tS)(e.theme.direction,e.theme.size.grid004,e.theme.size.grid004)}

		width: calc(100% - ${e=>e.theme.size.grid008});
		flex-direction: column;
	}


	@media (min-width: ${b.u3.b960}px) {
		${e=>(0,ve.tS)(e.theme.direction,e.theme.size.grid002,void 0)}
		align-items: flex-start;
		width: calc(100% - ${e=>e.theme.size.grid002});
		flex-direction: row;
	}

	/* focus-within is not supported on old Edge, but is only a nice extra anyway */

	&:focus-within {
		outline-offset: -1px;
		outline: solid 1px ${e=>e.theme.focusColor};
	}
`,dn=ye.zo.div.withConfig({displayName:"StyledPreviewGallery"})`
    margin: 0;
    display: inline-flex;
    direction: ltr;
    padding: 0 ${e=>e.theme.size.grid002};

    @media (min-width: ${b.u3.b560}px) {
        padding: 0;
    }

    @media (min-width: ${b.u3.b960}px) {
        width: 100%;
        padding: 0;
        justify-content: ${e=>e.alignItems===ln.START?"flex-start":"flex-end"};
    }
`;dn.displayName="StyledPreviewGallery";const mn=ye.zo.div.withConfig({displayName:"StyledScrollWrapper"})`
    flex: 1;
    max-width: 100%;

    &::-webkit-scrollbar {
        display: none; /* hide scroll-bar in chrome */
    }
    scrollbar-width: none; /* hide scroll-bar in firefox */

    // for focus outline space without outline getting cut off
    padding: ${e=>e.theme.size.static100} 0;
    margin: calc(-1 * ${e=>e.theme.size.static100}) 0;

    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    direction: ltr;
    text-align: ${e=>e.alignItems===ln.START?"end":"start"};

    @media (min-width: ${b.u3.b560}px) {
        text-align: center;
    }

    &:focus {
        outline: none;
    }
`;mn.displayName="StyledScrollWrapper";class un extends l.Component{constructor(e){super(e),this.scrollWrapperRef=l.createRef(),this.firstMediaElementRef=l.createRef(),this.previewGalleryRef=l.createRef(),this.animationFrame=null,this.smoothHorizontalScrolling=(e,t)=>{this.animationFrame&&window.cancelAnimationFrame(this.animationFrame);const n=e.scrollWidth-e.getBoundingClientRect().width,i=Math.min(n,Math.max(0,t))-e.scrollLeft;let a,r=0;const o=t=>{a||(a=t);const n=Math.min(1,(t-a)/200),l=Math.round(i*n-r);r+=l,e.scrollLeft+=l,n<1&&(this.animationFrame=window.requestAnimationFrame(o))};Math.abs(i)>0&&(this.animationFrame=window.requestAnimationFrame(o))},this.handleResize=()=>{const e=s.findDOMNode(this.scrollWrapperRef.current),t=s.findDOMNode(this.firstMediaElementRef.current),n=l.Children.count(this.props.children);if(e instanceof HTMLDivElement&&t instanceof HTMLDivElement){const i=e.getBoundingClientRect().width,a=Math.floor(t.getBoundingClientRect().width),r=4*(n-1),o=Math.floor(a*n)+r,l=Math.floor(window.innerWidth),s=l/12;i<o||l<560&&o+s>l?this.setState({showPagination:!0}):this.setState({showPagination:!1})}},this.state={showPagination:!1}}componentDidUpdate(e){const{activeIndex:t}=this.props,n=l.Children.count(this.props.children),i=e.activeIndex;if(t!==i){const e=s.findDOMNode(this.firstMediaElementRef.current),a=s.findDOMNode(this.scrollWrapperRef.current);if(0===i&&1===t||i===n-1&&t===n-2)return;if(i!==t&&e instanceof Element&&a instanceof HTMLDivElement){const r=e.getBoundingClientRect().width+4;let o=r;(n<6||0===i&&t===n-1||i===n-1&&0===t)&&(o=r*n);const l=i<t?1:-1;this.smoothHorizontalScrolling(a,a.scrollLeft+o*l)}}}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}componentDidMount(){window.addEventListener("resize",this.handleResize),this.handleResize()}render(){const{onSlideSelect:e,onPaginationClick:t,activeIndex:n,children:i,paginationData:a,paginationLabel:r}=this.props,{showPagination:o}=this.state,s=l.Children.count(i);return l.createElement(x.ThemeContext.Consumer,null,(c=>{const d=c.direction;return l.createElement(cn,null,l.createElement(mn,{ref:this.scrollWrapperRef,alignItems:sn(s>5,d),tabIndex:-1},l.createElement(Kt.G,{paginationData:a,onSlideSelect:e,activeIndex:n,tabListRef:this.previewGalleryRef},(({tabListKeyDownHandler:e,getTabClickHandler:t})=>l.createElement(dn,{alignItems:sn(s>5,d),"aria-label":r,ref:this.previewGalleryRef,role:"tablist",onKeyDown:e},i.map(((e,i)=>l.createElement(en,{isActive:i===n,onClick:t(i),key:`previewElement_${e.key}`,mediaRef:0===i?this.firstMediaElementRef:void 0,paginationData:a[i]},e))))))),o&&l.createElement(on,{itemCount:s,activeItemIndex:n,onSlideChanged:e,onPaginationClick:t}))}))}}const pn=ye.zo.div.withConfig({displayName:"StyledHighlightGallery"})`
    overflow: hidden;
    width: 100%;
`;pn.displayName="StyledHighlightGallery";const hn="48px",gn=ye.zo.div.withConfig({displayName:"StyledChevronButton"})`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${hn};
    height: ${hn};
    border-radius: 50%;
    color: ${e=>e.theme.interaction.recipe950.default};
    border: 2px solid transparent;
`;gn.displayName="StyledChevronButton";const fn=ye.zo.button.withConfig({displayName:"StyledCarouselButton"})`
	position: absolute;
	top: 50%;
	transform: translate(0, -50%);
	display: flex;
	align-items: center;
	width: auto;
	height: auto;
	cursor: pointer;
	padding: 0 0 0 ${e=>e.theme.size.dynamic0020};
	background: none;
	border: none;
	outline: none;
	z-index: 1;
	${e=>e.alignLeft&&"left: 0;"}
	${e=>e.alignRight&&ye.iv`
            right: 0;
            padding: 0 ${e.theme.size.dynamic0020} 0 0;
            justify-content: flex-end;
        `}
	&:hover > ${gn},
	&:focus > ${gn} {
		background-color: ${e=>e.theme.global.shimColor};
	}

	&:focus > ${gn} {
		border: 2px solid ${e=>e.theme.focusColor};
	}
`;fn.displayName="StyledCarouselButton";const yn=()=>{};class vn extends l.Component{constructor(e){super(e),this.handleCarouselSlideChange=e=>{const{onSlideChange:t=yn}=this.props;t(e),this.setState((t=>Object.assign(Object.assign({},t),{activeItemIndex:e})))},this.renderPagination=e=>{const{previewMediaElements:t,onPaginationClick:n}=this.props;return e.paginationData.length>1?l.createElement(un,Object.assign({},e,{onPaginationClick:n}),t):null},this.renderControls=({paginationData:e,onSlideSelect:t,activeIndex:n})=>{const{navigationLabelNext:i,navigationLabelPrevious:a,onButtonClick:r}=this.props,o=i=>()=>{const a=e.length;return t((n+a+i)%a),null==r?void 0:r(i)};return e.length>1?l.createElement(l.Fragment,null,l.createElement(U.c,{name:"previous"},l.createElement(fn,{alignLeft:!0,onClick:o(-1),"aria-label":a},l.createElement(gn,null,l.createElement(Ut.s,{ariaHidden:!0})))),l.createElement(U.c,{name:"next"},l.createElement(fn,{alignRight:!0,onClick:o(1),"aria-label":i},l.createElement(gn,null,l.createElement(Xt._,{ariaHidden:!0}))))):null},this.state={activeItemIndex:0}}render(){const{children:e,captions:t,carouselId:n,previewAriaLabel:i,getXOfYLabel:a,paginationDefaultItemLabel:r,galleryLabel:o}=this.props,s=this.props.maxHeight?`calc(${this.props.maxHeight} - ${_t.gX})`:void 0,{activeItemIndex:c}=this.state;return l.createElement(pn,null,l.createElement(Yt.a,{carouselId:n,activeSlide:c,onSlideChanged:this.handleCarouselSlideChange,dontShowNextSlide:!0,maxHeight:s,renderPagination:this.renderPagination,renderControls:this.renderControls,captions:t,galleryLabel:o,paginationLabel:i,getXOfYLabel:a,paginationDefaultItemLabel:r},e))}}var bn=n(61283),En=n(60282),wn=n(25389),Cn=n(94001);const Sn=x.default.div.withConfig({displayName:"StyledThumbnailElement"})`
    position: relative;
`;Sn.displayName="StyledThumbnailElement";const kn=x.default.div.withConfig({displayName:"StyledPlayButton"})`
    pointer-events: none;
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    svg {
        fill: ${e=>e.theme.interaction.recipe750.default};
    }
`;function Ln(e){const{aspectRatio:t,containerExporterBaseProps:n,darkDisclaimer:i,mediaType:a,responsiveMediaConfig:r}=e,o={disclaimers:{color:i?"dark":"light"}},s="IMAGE"===a;let c;switch(a){case"ANIMATION":c=n.cqItems.animation;break;case"VIDEO":c=n.cqItems.video;break;case"DEGREE_180":c=n.cqItems.degree180;break;default:c=n.cqItems.image}return l.createElement(U.c,{name:"thumbnail"},l.createElement(Sn,null,l.createElement(wn.Kn,Object.assign({path:n.cqPath,src:s?c.src:c.coverImage,imageAsset:s?c.imageAsset:c.coverImageAsset,aspectRatio:t,altText:c.altText||c.title,containerProps:{matchParent:!0},responsiveMediaConfig:r},o)),!s&&l.createElement(kn,null,l.createElement(Cn.s,{ariaHidden:!0}))))}kn.displayName="StyledPlayButton";var xn,$n=n(2192),_n=n(37772),In=n(92344),Tn=n(79838),Nn=n(30271),Pn=n(26781);!function(e){e.ImageButton_Prev="previous-image-button",e.ImageButton_Next="next-image-button",e.Pagination_Prev="previous-thumbnail-button",e.Pagination_Next="next-thumbnail-button"}(xn||(xn={}));const On=x.default.div.withConfig({displayName:"StyledGalleryWrapper"})`
    @media (min-width: ${b.u3.b960}px) {
        display: ${e=>e.isShown?"block":"none"};
    }
`;On.displayName="StyledGalleryWrapper";const Rn=x.default.div.withConfig({displayName:"StyledAuthorWrapper"})`
    width: ${e=>e.theme.size.grid004};
    height: 100%;
    display: block;

    label {
        margin: 0;
    }
`;Rn.displayName="StyledAuthorWrapper";const zn="r_4_3",Dn="r_10_6",An={ratio:zn},Mn=[{mediaQuery:`(max-width: ${b.u3.b560-1}px)`,aspectRatio:zn},{mediaQuery:`(min-width: ${b.u3.b560}px)`,aspectRatio:Dn}],Bn=e=>l.useCallback(((t,n)=>(0,Nn.T)(e,{slideIndex:String(t),slideAmount:String(n)})),[e]);function Fn(e,t){return e.map(((e,n)=>l.createElement(z.xv,{color:z.d9.inherit,key:`caption_${n}`},l.createElement(J.sw,{path:`${t}/${e.key}/caption`}))))}function Wn(e,t){return e.map(((e,n)=>{const i=e.model.cqItems.media,a=i.cqItems.image,r=a?a.focalPoint:"CENTER_CENTER",o={cqItems:i.cqItems,cqItemsOrder:i.cqItemsOrder,cqType:i.cqType,cqPath:`${t}/${e.key}/media`},s=l.createElement(Ln,{mediaType:i.mediaType,darkDisclaimer:i.darkDisclaimer,containerExporterBaseProps:o,responsiveMediaConfig:Mn});return l.createElement(Tn._,{key:`mediaThumbnail_${n}`,configs:Mn},l.createElement(Pn.r,{focalPoint:$n.N[r]},s))}))}const Hn=(0,xe.Pi)((e=>{const{isShown:t=!0,mediaParsysPath:n,contentName:i,contentLabels:a,previewAriaLabel:r,itemCount:o,itemPosition:s,carouselId:c,slideXOfYLabel:d,galleryLabel:m,goToNextSlideLabel:u,goToPreviousSlideLabel:p,carouselItemLabel:h}=e,[f,y]=l.useState(0),v=function(e){const t=(0,F.V7)().getData(e);return l.useMemo((()=>{if(t){const n=(0,En.D)(t,e);return(0,O.H)(n)}return[]}),[e,t])}(n),{mediaItemsPublish:E}=function(e,t,n){const i=l.useRef(null),a=l.useRef(null);!function(e){l.useEffect((()=>{e&&window.dispatchEvent(new Event("resize"))}),[e])}(t);const r=(o=e.length>1?Dn:zn,[{mediaQuery:`(max-width: ${b.u3.b560-1}px)`,aspectRatio:"r_3_4"},{mediaQuery:`(min-width: ${b.u3.b560}px)`,aspectRatio:o}]);var o;return{previewContainerDesktop:i,previewContainerMobile:a,mediaItemsPublish:l.useMemo((()=>e.map((e=>{const i=l.createElement(rt.s,{path:`${n}/${e.key}/media`,responsiveMediaConfig:r,containerProps:{matchParent:!0}});return l.createElement(Yt.r.Consumer,{key:e.key},(({active:e})=>l.createElement(bn.A,{active:e&&Boolean(t)},l.createElement(Tn._,{configs:r,matchParent:!0},i))))}))),[t,e,n,r])}}(v,t,n),w=function(){const e=(0,F.V9)(),t=(0,F.K5)(),n=(0,F.UV)(),i=(0,F.u0)();return l.useCallback(((a,r,o,l)=>{e.trackSliderElementLoad(a,(0,In.E)(t,n,i.sectionGroupContentId,r,o,l))}),[e,t,n,i.sectionGroupContentId])}(),C=function(){const e=(0,F.V9)(),t=(0,F.K5)(),n=(0,F.UV)(),i=(0,F.u0)();return l.useCallback(((a,r,o,l,s)=>{e.trackButtonClick(r,window.location.pathname,a,(0,In.E)(t,n,i.sectionGroupContentId,o,l,s))}),[e,t,n,i.sectionGroupContentId])}(),S=l.useCallback((e=>{const r=function(e,t){return e>=0&&t.length>e?t[e].key:null}(e,v),l=(0,_n.Z)(`${n}/${r}`,`${i||"highlightGallery"} - media item ${e}`);t&&e!==f&&(w(l,a,o,s),y(e))}),[v,t,f,w,n,i,a,o,s]),k=l.useCallback((e=>{const t=(0,_n.Z)(`${n}/`,`${i||"highlightGallery"} - ${e}`);C(e,t,a,o,s)}),[a,C,i,n,o,s]),L=Bn(d);return l.createElement(at.Y,null,l.createElement(On,{isShown:g.C.isInEditor()||t},g.C.isInEditor()?l.createElement(D.W,{gutter:A.X.dynamic0050,wrap:M.Hq.never},function(e,t){return e.map(((e,n)=>l.createElement(Rn,{key:`${e.key}_${n}`},l.createElement(nt.YN.Provider,{value:An},l.createElement(lt,{path:`${t}/${e.key}`})))))}(v,n)):v.length>0&&l.createElement(U.c,{name:"gallery"},l.createElement(vn,{carouselId:c,previewAriaLabel:r,paginationDefaultItemLabel:h,getXOfYLabel:L,galleryLabel:m,navigationLabelNext:u,navigationLabelPrevious:p,captions:Fn(v,n),previewMediaElements:Wn(v,n),onSlideChange:S,onButtonClick:e=>{const t=1===e?xn.ImageButton_Next:xn.ImageButton_Prev;k(t)},onPaginationClick:e=>{const t=1===e?xn.Pagination_Next:xn.Pagination_Prev;k(t)}},E))))}));var jn=n(42878);const Vn=x.default.div.withConfig({displayName:"StyledFocusTrap"})`
    outline: none;
`,qn={layerType:"CONTENT"};function Gn(e){const{title:t,heading:n,copyParsys:i,mediaParsys:a}=e;return l.createElement(B.V,{title:"Car feature XF"},l.createElement(Te.Ar,null,l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always,padding:{left:A.X.grid004,right:A.X.grid004},stretchContent:!0},t,n,a,i)))}function Un(e){const{title:t,heading:n,copyParsys:i,btnCloseLabel:a,cqPath:r,contentName:o,contentId:s,translations:c}=e,d=l.createElement(qt,{label:a,onClose:function(t){t.preventDefault(),m.closeLayer(e.cqPath)}}),m=(0,F.m2)();return l.createElement(Gt,{headline:n,overline:t,closeButton:d},l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always,stretchContent:!0},l.createElement(Hn,{carouselId:`${s}-carousel`,mediaParsysPath:`${r}/mediaParsys`,contentName:`${o} gallery`,previewAriaLabel:c["carFeature.previewAriaLabel"],slideXOfYLabel:c["carousel.slideXOfYLabel"],galleryLabel:c["carousel.galleryLabel"],goToNextSlideLabel:c["carousel.goToNextSlideLabel"],goToPreviousSlideLabel:c["carousel.goToPreviousSlideLabel"],carouselItemLabel:c["moodGallery.carouselItemLabel"]}),i))}(0,T.R)("vwa-ngw18/components/structure/xfCarFeature",(function(e){const t=l.createElement(Vn,{tabIndex:0},l.createElement(J.sw,{path:"title"})),n=l.createElement(Qe.$,{path:"heading"}),i=l.createElement(te.dJ,{path:"copyParsys",parsysType:te.wi.ITEM_PARSYS}),a=l.createElement(te.dJ,{path:"mediaParsys",parsysType:te.wi.ITEM_PARSYS}),r=g.C.isInEditor()?Gn:Un;return l.createElement(jn.V.Provider,{value:qn},l.createElement(r,Object.assign({},e,{title:t,heading:n,copyParsys:i,mediaParsys:a})))})),n(7934);const Xn={parsysType:te.wi.ITEM_PARSYS},Yn=x.default.div.withConfig({displayName:"StyledFocusTrap"})`
    outline: none;
`,Kn={layerType:"CONTENT"};function Qn(e){const{overline:t,headingElement:n,parsys:i}=e;return l.createElement(B.V,{title:"Content Layer Main"},l.createElement(Te.Ar,null,l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always,padding:{left:A.X.grid002,right:A.X.grid002},stretchContent:!0},t,n,i)))}function Zn(e){const{overline:t,headingElement:n,parsys:i}=e,a=(0,F.m2)(),r=l.createElement(qt,{label:e.btnCloseLabel,onClose:function(t){t.preventDefault(),a.closeLayer(e.cqPath)}});return l.createElement(Gt,{headline:n,overline:t,closeButton:r},i)}(0,T.R)("vwa-ngw18/components/structure/xfContentLayerMain",(function(e){const t=l.createElement(Qe.$,{path:"heading",style:"H1"}),n=l.createElement(te.dJ,Object.assign({path:"contentLayerParsys"},Xn)),i=l.createElement(Yn,{tabIndex:0},l.createElement(z.xv,{bold:!0,appearance:z.C2.headline200},l.createElement(J.sw,{path:"overline"}))),a=g.C.isInEditor()?Qn:Zn;return l.createElement(jn.V.Provider,{value:Kn},l.createElement(a,Object.assign({},e,{headingElement:t,parsys:n,overline:i})))}));var Jn=n(66016);const ei=x.default.div.withConfig({displayName:"StyledInteractionWrapper"})`
    display: flex;
    justify-content: space-between;
    padding-bottom: ${e=>e.theme.size.dynamic0200};
    flex-direction: column;
    height: 100vh;
`;function ti(e){const t=(0,F.WS)(),{children:n,closeButton:i}=e,a=t.oneHub;return l.createElement(Lt.g,null,(e=>l.createElement(D.W,{padding:{left:A.X.grid001,right:A.X.grid001},wrap:M.Hq.always,stretchContent:!0},l.createElement(ei,null,l.createElement(D.W,{wrap:M.Hq.always,shrinkContent:!0},l.createElement(U.c,{name:"closeButton"},i),n),a?l.createElement(Pt,{pageDisclaimers:e}):void 0))))}ei.displayName="StyledInteractionWrapper";const ni={layerType:"INTERACTION"};function ii(e){const{headingElement:t,copyItem:n,linkParsys:i}=e;return l.createElement(B.V,{title:"Interaction Layer Main"},l.createElement(Te.Ar,null,l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always,padding:{left:A.X.grid004,right:A.X.grid004}},t,n,l.createElement(D.W,{gutter:A.X.dynamic0050,wrap:M.Hq.always},i))))}function ai(e){const{headingElement:t,copyItem:n,linkParsys:i,btnCloseLabel:a}=e,r=(0,F.WS)(),o=(0,F.m2)(),s=r.direction===ve.Nm.RTL?Jn.cb.TOP_LEFT:Jn.cb.TOP_RIGHT,c=l.createElement(Jn._n,{key:"close",onClick:function(){o.closeLayer(e.cqPath)},position:s,btnCloseLabel:a});return l.createElement(ti,{closeButton:c},l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0100,padding:{top:A.X.static550,bottom:A.X.dynamic0150}},t,n),i)}(0,T.R)("vwa-ngw18/components/structure/xfInteractionLayerMain",(function(e){const t=l.createElement(Qe.$,{path:"heading"}),n=l.createElement(yt.s,{path:"copy"}),i=l.createElement(te.dJ,{path:"linkParsys",parsysType:te.wi.LINK_PARSYS}),a=g.C.isInEditor()?ii:ai;return l.createElement(jn.V.Provider,{value:ni},l.createElement(a,Object.assign({},e,{headingElement:t,copyItem:n,linkParsys:i})))}));const ri=l.createElement(Qe.$,{path:"heading",hideItemDisclaimers:!0}),oi=l.createElement(yt.s,{path:"copy",appearance:z.C2.copy0250,hideItemDisclaimers:!0}),li=l.createElement(Ve.S,{path:"button"}),si=l.createElement(nt.YN.Provider,{value:{sizes:"100vw",reduceBrightness:!0}},l.createElement(rt.s,{path:"media"})),ci=(0,T.R)("vwa-ngw18/components/structure/xfHomepageSlider",(e=>{const{slideTitle:t}=e,n=l.createElement(B.V,{title:"Homepage Slider XF"},l.createElement(Te.Ar,null,l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always,padding:{left:A.X.grid004,right:A.X.grid004},stretchContent:!0},ri,oi,si,li,t?l.createElement(z.xv,{appearance:z.C2.copy0150},t):void 0))),i=l.createElement(l.Fragment,null);return g.C.isInEditor()?n:i}));var di=n(37205),mi=n(82755);const ui=x.default.div.withConfig({displayName:"StyledTeaserWrapper"})`
    position: relative;
    border: 2px solid ${e=>e.theme.border.color.secondary};
    padding: ${e=>e.theme.size.dynamic0150};
    display: flex;
    flex-wrap: wrap;

    @media (min-width: ${b.u3.b560}px) {
        padding: ${e=>e.theme.size.dynamic0130};
    }
    @media (min-width: ${b.u3.b960}px) {
        padding: ${e=>e.theme.size.dynamic0150};
    }

    width: 100%;
    height: 100%;
`;ui.displayName="StyledTeaserWrapper";const pi=x.default.div.withConfig({displayName:"StyledContentWrapper"})`
    display: grid;
    grid-auto-rows: min-content;
    grid-gap: ${e=>e.theme.size.static350};
    width: 100%;
    padding-bottom: ${e=>e.disclaimersAvailable?e.theme.size.dynamic0100:0};

    @media (min-width: ${b.u3.b960}px) {
        grid-template-columns: ${e=>e.hasSiblings?"auto":"50% 50%"};
    }
`;pi.displayName="StyledContentWrapper";const hi=x.default.div.withConfig({displayName:"StyledTopLine"})`
    position: absolute;
    top: 0;
    ${e=>e.topLineTextPosition}: ${e=>e.theme.size.dynamic0150};
    transform: translateY(-50%);
    background-color: ${e=>e.theme.global.backgroundColor};
    padding: 0 ${e=>e.theme.size.static250};
    margin: 0 -${e=>e.theme.size.static250};
`;hi.displayName="StyledTopLine";const gi=x.default.div.withConfig({displayName:"StyledDisclaimersWrapper"})`
    padding-top: ${e=>e.theme.size.dynamic0100};
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${e=>e.theme.size.static350};
`;gi.displayName="StyledDisclaimersWrapper";const fi=e=>{const{disclaimers:t,headline:n,copy:i,linkList:a,topLine:r,hasSiblings:o=!0,topLineTextPosition:s}=e;return l.createElement(ui,{hasSiblings:o},r?l.createElement(hi,{"data-cy":"topline",topLineTextPosition:s},r):null,l.createElement(pi,{hasSiblings:o,disclaimersAvailable:Boolean(t)},n,i||a?l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.static350},i,a):null),t?l.createElement(gi,null,t):null)};var yi=n(44103);const vi=(0,T.R)("vwa-ngw18/components/editorial/items/linkListItem",(function(){const e=l.createElement(te.dJ,{path:"linkListParsys",parsysType:te.wi.LINK_PARSYS});return l.createElement(at.Y,{getItemDisclaimers:!0},g.C.isInEditor()?l.createElement(mi.C,null,(()=>l.createElement(B.V,{title:"I108 Link List Item",bgColor:B.V.BG_COLOR_ITEM},l.createElement(Te.Ar,null,l.createElement(D.W,{wrap:M.Hq.always,padding:{left:A.X.grid001,right:A.X.grid001}},e))))):l.createElement(U.c,{name:"linkListItem"},e))})),bi=x.default.div.withConfig({displayName:"StyledAuthorWrapper"})`
    max-width: ${e=>e.isExperienceFragment?"50vw":"unset"};
    height: 100%;
`,Ei=(0,T.R)("vwa-ngw18/components/structure/xfTextOnlyTeaser",(e=>{const t=(0,F.pJ)(),n=(0,yi.Sj)(t.pagePath),{topLineText:i,topLineTextPosition:a,hasSiblings:r}=e,o=l.createElement(J.sw,{path:"headline",hideItemDisclaimers:!0,tag:z.rh.h3,appearance:z.C2.headline0300}),s=l.createElement(J.$g,{path:"copy",hideItemDisclaimers:!0}),c=l.createElement(vi,{path:"links"}),d=l.createElement(mi.C,null,(e=>l.createElement(fi,{headline:o,disclaimers:e.length>0?l.createElement(di.e,{disclaimers:e}):null,copy:s,hasSiblings:r,linkList:c,topLine:i,topLineTextPosition:a}))),m=l.createElement(B.V,{title:"Text Only Teaser XF"},l.createElement(bi,{isExperienceFragment:n},d)),u=d;return g.C.isInEditor()?m:u})),wi={1440:7,1024:7,768:5},Ci={1440:12,1024:12,768:16},Si={1440:4,1024:4,768:2},ki={1440:20,1024:18,768:20},Li={1440:{"4:3":{LEFT:{imageStartColumn:1,imageWidthInColumns:6,totalContentColumns:24},RIGHT:{imageStartColumn:20,imageWidthInColumns:6,totalContentColumns:21}},"3:4":{LEFT:{imageStartColumn:1,imageWidthInColumns:5,totalContentColumns:24},RIGHT:{imageStartColumn:19,imageWidthInColumns:5,totalContentColumns:21}},"16:9":{LEFT:{imageStartColumn:1,imageWidthInColumns:8,totalContentColumns:24},RIGHT:{imageStartColumn:16,imageWidthInColumns:8,totalContentColumns:21}},"9:16":{LEFT:{imageStartColumn:1,imageWidthInColumns:6,totalContentColumns:24},RIGHT:{imageStartColumn:16,imageWidthInColumns:6,totalContentColumns:21}},"1:1":{LEFT:{imageStartColumn:1,imageWidthInColumns:6,totalContentColumns:24},RIGHT:{imageStartColumn:12,imageWidthInColumns:6,totalContentColumns:21}}},1024:{"4:3":{LEFT:{imageStartColumn:1,imageWidthInColumns:7,totalContentColumns:24},RIGHT:{imageStartColumn:16,imageWidthInColumns:7,totalContentColumns:21}},"3:4":{LEFT:{imageStartColumn:1,imageWidthInColumns:7,totalContentColumns:24},RIGHT:{imageStartColumn:14,imageWidthInColumns:7,totalContentColumns:21}},"16:9":{LEFT:{imageStartColumn:1,imageWidthInColumns:10,totalContentColumns:24},RIGHT:{imageStartColumn:12,imageWidthInColumns:10,totalContentColumns:21}},"9:16":{LEFT:{imageStartColumn:1,imageWidthInColumns:6,totalContentColumns:24},RIGHT:{imageStartColumn:15,imageWidthInColumns:6,totalContentColumns:21}},"1:1":{LEFT:{imageStartColumn:1,imageWidthInColumns:6,totalContentColumns:24},RIGHT:{imageStartColumn:15,imageWidthInColumns:7,totalContentColumns:21}}},768:{"4:3":{LEFT:{imageStartColumn:1,imageWidthInColumns:5,totalContentColumns:22},RIGHT:{imageStartColumn:17,imageWidthInColumns:5,totalContentColumns:20}},"3:4":{LEFT:{imageStartColumn:3,imageWidthInColumns:6,totalContentColumns:22},RIGHT:{imageStartColumn:17,imageWidthInColumns:5,totalContentColumns:18}},"16:9":{LEFT:{imageStartColumn:2,imageWidthInColumns:7,totalContentColumns:22},RIGHT:{imageStartColumn:17,imageWidthInColumns:7,totalContentColumns:19}},"9:16":{LEFT:{imageStartColumn:4,imageWidthInColumns:5,totalContentColumns:22},RIGHT:{imageStartColumn:17,imageWidthInColumns:5,totalContentColumns:17}},"1:1":{LEFT:{imageStartColumn:3,imageWidthInColumns:6,totalContentColumns:22},RIGHT:{imageStartColumn:17,imageWidthInColumns:6,totalContentColumns:18}}}},xi={1440:{"4:3":{LEFT:{imageStartColumn:5,imageWidthInColumns:4,totalContentColumns:14},RIGHT:{imageStartColumn:17,imageWidthInColumns:4,totalContentColumns:14}},"3:4":{LEFT:{imageStartColumn:6,imageWidthInColumns:3,totalContentColumns:13},RIGHT:{imageStartColumn:17,imageWidthInColumns:3,totalContentColumns:13}},"16:9":{LEFT:{imageStartColumn:4,imageWidthInColumns:5,totalContentColumns:15},RIGHT:{imageStartColumn:17,imageWidthInColumns:5,totalContentColumns:15}},"9:16":{LEFT:{imageStartColumn:6,imageWidthInColumns:3,totalContentColumns:13},RIGHT:{imageStartColumn:17,imageWidthInColumns:3,totalContentColumns:13}},"1:1":{LEFT:{imageStartColumn:5,imageWidthInColumns:4,totalContentColumns:14},RIGHT:{imageStartColumn:17,imageWidthInColumns:4,totalContentColumns:14}}},1024:{"4:3":{LEFT:{imageStartColumn:5,imageWidthInColumns:5,totalContentColumns:14},RIGHT:{imageStartColumn:17,imageWidthInColumns:5,totalContentColumns:14}},"3:4":{LEFT:{imageStartColumn:5,imageWidthInColumns:5,totalContentColumns:14},RIGHT:{imageStartColumn:17,imageWidthInColumns:5,totalContentColumns:14}},"16:9":{LEFT:{imageStartColumn:4,imageWidthInColumns:6,totalContentColumns:15},RIGHT:{imageStartColumn:17,imageWidthInColumns:6,totalContentColumns:15}},"9:16":{LEFT:{imageStartColumn:6,imageWidthInColumns:4,totalContentColumns:13},RIGHT:{imageStartColumn:17,imageWidthInColumns:4,totalContentColumns:13}},"1:1":{LEFT:{imageStartColumn:5,imageWidthInColumns:5,totalContentColumns:14},RIGHT:{imageStartColumn:17,imageWidthInColumns:5,totalContentColumns:14}}},768:{"4:3":{LEFT:{imageStartColumn:3,imageWidthInColumns:6,totalContentColumns:18},RIGHT:{imageStartColumn:17,imageWidthInColumns:6,totalContentColumns:18}},"3:4":{LEFT:{imageStartColumn:3,imageWidthInColumns:6,totalContentColumns:18},RIGHT:{imageStartColumn:17,imageWidthInColumns:5,totalContentColumns:18}},"16:9":{LEFT:{imageStartColumn:2,imageWidthInColumns:7,totalContentColumns:19},RIGHT:{imageStartColumn:17,imageWidthInColumns:7,totalContentColumns:19}},"9:16":{LEFT:{imageStartColumn:4,imageWidthInColumns:5,totalContentColumns:17},RIGHT:{imageStartColumn:17,imageWidthInColumns:5,totalContentColumns:17}},"1:1":{LEFT:{imageStartColumn:3,imageWidthInColumns:6,totalContentColumns:18},RIGHT:{imageStartColumn:17,imageWidthInColumns:6,totalContentColumns:18}}}};var $i;!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}($i||($i={}));const _i=(e,t,n,i)=>{const a=i?Li[n][t][e]:xi[n][t][e];return`calc(100% * (${a.imageWidthInColumns/a.totalContentColumns}))`},Ii=(e,t,n,i)=>{if(i){const i=Li[n][t][e];return e===$i.RIGHT?`0 calc(100% * (${(i.totalContentColumns-ki[n])/i.totalContentColumns}\n\t\t\t\t\t)\n\t\t\t) 0 0`:`0 0 0 calc(100% * (${(Si[n]-i.imageStartColumn)/i.totalContentColumns}\n\t\t\t\t\t)\n\t\t\t)`}{const i=xi[n][t][e];return e===$i.RIGHT?`0 calc(100% * (${(i.totalContentColumns-Ci[n])/i.totalContentColumns}\n\t\t\t\t\t\t)\n\t\t\t\t) 0 0`:`0 0 0 calc(100% * (${(wi[n]-i.imageStartColumn)/i.totalContentColumns}\n\t\t\t\t\t\t)\n\t\t\t\t)`}},Ti=(e,t,n,i)=>{if(i){const i=Li[n][t][e];return e===$i.LEFT?i.totalContentColumns+i.imageStartColumn:i.totalContentColumns+Si[n]}{const i=xi[n][t][e];return e===$i.LEFT?i.totalContentColumns+i.imageStartColumn:i.totalContentColumns+wi[n]}},Ni=(e,t,n,i)=>i?e===$i.LEFT?Li[n][t][e].imageStartColumn:Si[n]:e===$i.LEFT?xi[n][t][e].imageStartColumn:wi[n],Pi=x.default.div.withConfig({displayName:"StyledMediaContainer"})`
    margin-bottom: ${e=>e.theme.size.static400};
    overflow: hidden;
    @media (min-width: 768px) {
        position: relative;
        z-index: 1;
        clear: both;
        float: ${e=>e.alignment===$i.LEFT?"left":"right"};
        margin-top: ${e=>e.theme.size.static400};
        margin-bottom: ${e=>e.theme.size.static400};
        margin-left: ${e=>e.alignment===$i.LEFT?0:e.theme.size.static400};
        margin-right: ${e=>e.alignment===$i.RIGHT?0:e.theme.size.static400};
        width: ${e=>_i(e.alignment,e.aspectRatio,768,e.isFullWidth)};
    }
    @media (min-width: 768px) {
        width: ${e=>_i(e.alignment,e.aspectRatio,1024,e.isFullWidth)};
    }
    @media (min-width: 1440px) {
        width: ${e=>_i(e.alignment,e.aspectRatio,1440,e.isFullWidth)};
    }
`,Oi=x.default.div.withConfig({displayName:"StyledCopyContainer"})`
    padding: ${e=>e.isFullWidth?`${e.theme.size.grid002} 0`:e.theme.size.grid002};
    @media (min-width: 768px) {
        padding: ${e=>Ii(e.alignment,e.aspectRatio,768,e.isFullWidth)};
    }
    @media (min-width: 768px) {
        padding: ${e=>Ii(e.alignment,e.aspectRatio,1024,e.isFullWidth)};
    }
    @media (min-width: 1440px) {
        ${e=>Ii(e.alignment,e.aspectRatio,1440,e.isFullWidth)};
    }
    line-height: ${e=>e.lineHeight}px;
`,Ri=x.default.div.withConfig({displayName:"StyledComponentContainer"})`
    grid-column-start: ${e=>e.isFullWidth?1:2};
    grid-column-end: ${e=>e.isFullWidth?22:12};
    @media (min-width: 768px) {
        grid-column-start: ${e=>Ni(e.alignment,e.aspectRatio,768,e.isFullWidth)};
        grid-column-end: ${e=>Ti(e.alignment,e.aspectRatio,768,e.isFullWidth)};
        &::before {
            content: '';
            display: block;
            height: ${e=>3*e.lineHeight}px;
            width: 0;
            float: left;
        }
    }
    @media (min-width: 768px) {
        grid-column-start: ${e=>Ni(e.alignment,e.aspectRatio,1024,e.isFullWidth)};
        grid-column-end: ${e=>Ti(e.alignment,e.aspectRatio,1024,e.isFullWidth)};
    }
    @media (min-width: 1440px) {
        grid-column-start: ${e=>Ni(e.alignment,e.aspectRatio,1440,e.isFullWidth)};
        grid-column-end: ${e=>Ti(e.alignment,e.aspectRatio,1440,e.isFullWidth)};
    }
`,zi=x.default.div.withConfig({displayName:"StyledCopyInsetMedia"})`
    position: relative;
    z-index: 0;
    height: 100%;
    width: 100%;
    grid-template-rows: 1fr;
    display: grid;
    @media (min-width: 375px) {
        grid-template-columns: repeat(12, 1fr);
    }
    @media (min-width: 768px) {
        grid-template-columns: repeat(24, 1fr);
    }
`;zi.displayName="StyledCopyInsetMedia";const Di=e=>{const{children:t,mediaAlignment:n=$i.LEFT,media:i,lineHeight:a=24,aspectRatio:r,isFullWidth:o=!1}=e;return l.createElement(x.ThemeContext.Consumer,null,(({direction:e})=>{const s=((e,t)=>e!==ve.Nm.RTL?t:t===$i.LEFT?$i.RIGHT:$i.LEFT)(e,n),c=l.createElement(Pi,{lineHeight:a,aspectRatio:r,alignment:s,isFullWidth:o},i),d=l.createElement(Oi,{lineHeight:a,aspectRatio:r,alignment:s,isFullWidth:o},t);return l.createElement(zi,null,l.createElement(Ri,{lineHeight:a,aspectRatio:r,alignment:s,isFullWidth:o},c,d))}))};var Ai=n(36452);const Mi={LEFT:$i.LEFT,RIGHT:$i.RIGHT},Bi={sizes:"(min-width: 768px) 20vw, 90vw"};(0,T.R)("vwa-ngw18/components/editorial/items/copyInsetMediaItem",(function(e){const{alignment:t,cqItems:n,mediaAspectRatio:i}=e,a=g.C.isInEditor()||Boolean(n)&&Boolean(n.headline)&&!n.headline.empty,r=l.createElement(Qe.$,{path:"headline"}),o=l.createElement(nt.YN.Provider,{value:Bi},l.createElement(rt.s,{path:"media"}));return l.createElement(B.V,{title:"I110 Copy Inset Media Item",bgColor:B.V.BG_COLOR_SECTION},l.createElement(at.Y,null,l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0100},a&&r,l.createElement(Di,{aspectRatio:Ai.f[i],media:o,mediaAlignment:Mi[t],isFullWidth:!0},l.createElement(J.$g,{path:"copy"})))))}));var Fi=n(92946),Wi=n(62850),Hi=n(32139),ji=n(82165);const Vi=x.default.div.withConfig({displayName:"StyledExpandableWrapper"})`
    ${e=>e.enabledCollapse&&`\n\t\tposition: relative;\n        z-index: 0;\n\t\tpadding-bottom: 44px;\n\t\toverflow: hidden;\n\t\theight: calc(${e.contentHeight}px + ${e.theme.size.static250});\n\t\ttransition: ${(0,ve.hl)({name:"height",duration:"0.4s"})};\n\n\t\t${e.isCollapsed&&`\n\t\t\t\theight: ${e.visibleArea?e.visibleArea:150}px;\n                [data-content] {\n                    pointer-events: none;\n                }\n\t\t\t`};\n\n\t\t`};
`;Vi.displayName="StyledExpandableWrapper";const qi=x.default.div.withConfig({displayName:"StyledButtonContainer"})`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    padding-bottom: ${4}px;

    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
        height: ${24}px;
    }
`;qi.displayName="StyledButtonContainer";const Gi=x.default.div.withConfig({displayName:"StyledLine"})`
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-top: -${2};

    height: 2px;
    background: ${e=>e.theme.separatorColor};
`;Gi.displayName="StyledLine";const Ui=x.default.div.withConfig({displayName:"StyledOverlay"})`
    position: absolute;
    bottom: ${24}px;
    left: 0;
    right: 0;
    height: ${100}px;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
    pointer-events: none;
    transition: ${(0,ve.hl)({name:"opacity",duration:"0.8s"})};
    opacity: 0;

    ${e=>e.isCollapsed&&"\n\t\t\topacity: 1;\n\t\t"};
`;Ui.displayName="StyledOverlay";const Xi=x.default.span.withConfig({displayName:"StyledButtonInner"})`
    position: relative;
    display: flex;
    align-items: center;

    margin: 0 auto;
    width: ${44}px;
    height: ${44}px;
    border-radius: 50%;
    background: ${e=>e.theme.interaction.recipe400.default};

    color: ${e=>e.theme.interaction.recipe750.default};
    display: flex;
    justify-content: center;

    svg {
        transition: ${(0,ve.hl)({name:"transform",duration:"0.4s"})};
        transform: translate3d(0, 0, 0)
            rotate(${e=>e.chevronRotation}deg);
    }

    // focus
    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: none;
        border: solid 2px ${e=>e.theme.interaction.recipe400.hover};
        border-radius: 50%;
        margin: -${4}px;
    }
`;Xi.displayName="StyledButtonInner";const Yi=x.default.button.withConfig({displayName:"StyledButton"})`
    ${ve.sp};

    position: relative;
    width: 100%;

    &:focus {
        outline: none;
    }

    &:hover ${Xi}, &:focus ${Xi} {
        background: ${e=>e.theme.interaction.recipe400.hover};
    }

    &:focus ${Xi} {
        &:after {
            display: block;
        }
    }
`;Yi.displayName="StyledButton";const Ki=e=>{const{ariaLabelCollapse:t,ariaLabelExpand:n,children:i,visibleArea:a}=e,r=l.useRef(null),[o,s]=l.useState(!0),[c,d]=l.useState(!1),[m,u]=l.useState(0),[p,h]=l.useState(0),g=o?n:t,f=le()((()=>{y()}),500);l.useEffect((()=>(y(),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)})),[]);const y=()=>{if(r){const e=(0,ve.Cr)(r)+44,t=e>150;u(e),d(t)}},v=l.useCallback((()=>{const e=(0,ve.Cr)(r)+44;o?s(!1):(s(!0),u(e)),h((e=>e+180))}),[o]);return l.createElement(Vi,{visibleArea:a,enabledCollapse:c,isCollapsed:o,contentHeight:m,"aria-expanded":c&&!o},c?l.createElement(l.Fragment,null,l.createElement(qi,null,l.createElement(Ui,{isCollapsed:o}),l.createElement(Gi,null),l.createElement(Yi,{"aria-label":g,isCollapsed:o,onClick:v},l.createElement(Xi,{chevronRotation:p},l.createElement(Hi._,{ariaHidden:!0})))),l.createElement(ji.f,{childContainerSelector:"[data-content]",activeChildContainerSelector:`[data-expanded="${!o}"]`},l.createElement("div",{ref:r,"aria-hidden":o,"data-content":!0,"data-expanded":c&&!o?!o:void 0,"data-cy":"collapsableContent"},i))):l.createElement("div",{ref:r,"data-cy":"collapsableContent"},i))},Qi=x.default.div.withConfig({displayName:"StyledMediaWrapper"})`
    width: ${e=>e.hasSquaredRatio&&e.theme.size.grid008};
    padding-bottom: ${e=>e.theme.size.static400};

@media (min-width: ${b.u3.b560}px) {
	width ${e=>e.hasSquaredRatio&&e.theme.size.grid004};
    }
@media (min-width: ${b.u3.b1280}px) {
	width ${e=>e.hasSquaredRatio&&e.theme.size.grid002};
    }
`,Zi=x.default.div.withConfig({displayName:"StyledHeadlineWrapper"})`
    padding-bottom: ${e=>e.theme.size.static150};
`;(0,T.R)("vwa-ngw18/components/editorial/items/expandCollapseItem",(function(e){const{hasSquaredRatio:t,anchorId:n,cqItems:i,validationMessages:a,validationError:r,disableImages:o,buttonExpandedLabel:s,buttonCollapsedLabel:c}=e,d=i.media.cqItems.image,m=d?d.focalPoint:"CENTER_CENTER",u=i.link,p=g.C.isInEditor(),h=g.C.isInEditor()||!i.heading.empty,f=g.C.isInEditor()||!i.copy.empty,y=g.C.isInEditor()||function(e){return e.downloadLink?Boolean(e.documentPath):e.layerLink?Boolean(e.layerPath):Boolean(e.linkUrl)}(u),v=l.createElement(rt.s,{path:"media",containerProps:{matchParent:!0},useParentAspectRatio:!0}),b=l.createElement(z.xv,{bold:!0},l.createElement(J.sw,{path:"heading",tag:z.rh.h3})),E=l.createElement(J.$g,{path:"copy"}),w=l.createElement(Wi.E,{path:"link"}),C=!o&&r&&g.C.isInEditor()&&l.createElement(ft.e3,{severity:ft.vR.ERROR},l.createElement("span",null,a.map(((e,t)=>l.createElement("span",{key:t},e))))),S=l.createElement(D.W,{gutter:A.X.static400,wrap:M.Hq.always},f&&E,y&&w);return l.createElement(l.Fragment,null,C,l.createElement(B.V,{anchorId:n,title:"I132 Expand Collapse Item"},!o&&v&&l.createElement(Qi,{hasSquaredRatio:t},l.createElement(Fi.Po,{ratio:t?Fi.oM["1:1"]:Fi.oM["10:6"]},l.createElement(Pn.r,{focalPoint:$n.N[m]},v))),h&&l.createElement(Zi,null,b),p?S:l.createElement(Ki,{visibleArea:100,ariaLabelExpand:c,ariaLabelCollapse:s},S)))})),(0,T.R)("vwa-ngw18/components/editorial/items/expandCollapseLayerItem",(function(e){const{hasThreeColumnLayout:t,emptyImage:n,hasSquaredRatio:i,disableImages:a}=e;return l.createElement(B.V,{title:"I113 Expand-Collapse Layer Item",bgColor:B.V.BG_COLOR_SECTION},(g.C.isInEditor()||a||!n)&&l.createElement(at.Y,null,l.createElement(R,{path:"expandCollapseSectionParsys",hasThreeColumnLayout:t,hasSquaredRatio:i,disableImages:a,isInLayer:!0})))}));function Ji(){return l.createElement(B.V,{title:"I107 Media Gallery Item",bgColor:B.V.BG_COLOR_ITEM},l.createElement(Te.Ar,null,l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always,padding:{left:A.X.grid002,right:A.X.grid002},stretchContent:!0},l.createElement(te.dJ,{path:"mediaGalleryParsys",parsysType:te.wi.ITEM_PARSYS}))))}function ea(e){const{cqPath:t,contentName:n,contentLabels:i,translations:a,contentId:r}=e;return l.createElement(Hn,{carouselId:`${r}-carousel`,mediaParsysPath:`${t}/mediaGalleryParsys`,contentName:n,contentLabels:i,isShown:!0,previewAriaLabel:a["carFeature.previewAriaLabel"],slideXOfYLabel:a["carousel.slideXOfYLabel"],galleryLabel:a["carousel.galleryLabel"],goToNextSlideLabel:a["carousel.goToNextSlideLabel"],goToPreviousSlideLabel:a["carousel.goToPreviousSlideLabel"],carouselItemLabel:a["moodGallery.carouselItemLabel"]})}(0,T.R)("vwa-ngw18/components/editorial/items/mediaGalleryItem",(function(e){const t=g.C.isInEditor()?Ji:ea;return l.createElement(t,Object.assign({},e))}));var ta=n(19138),na=n(12940);const ia=x.default.blockquote.withConfig({displayName:"StyledStatement"})`
    margin: 0;
    display: flex;
`;ia.displayName="StyledStatement";const aa=x.default.cite.withConfig({displayName:"StyledCite"})`
    display: block;
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
    font-style: normal;
`;aa.displayName="StyledCite";const ra=x.default.div.withConfig({displayName:"StyledSeparator"})`
    border-top: solid ${e=>e.theme.separatorColor} ${"2px"};
`;ra.displayName="StyledSeparator";const oa=x.default.svg.withConfig({displayName:"StyledQuoteIcon"})`
    margin: 0 auto;
    display: block;
    path {
        fill: ${e=>e.theme.text.color.primary};
    }
`;oa.displayName="StyledQuoteIcon";const la=({width:e,type:t})=>l.createElement(oa,{width:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 29 24"},l.createElement("path",{d:"classic"===t?"M12.889 2.662c-1.364.798-2.468 1.486-3.31 2.063-.841.576-1.698 1.338-2.568 2.284-.813.887-1.437 1.82-1.873 2.795-.435.976-.74 2.233-.914 3.77h2.09c1.8 0 3.215.452 4.245 1.354 1.03.902 1.546 2.225 1.546 3.97 0 1.242-.457 2.403-1.372 3.483C9.82 23.46 8.563 24 6.967 24c-2.497 0-4.282-.835-5.356-2.506C.537 19.823 0 17.627 0 14.906c0-1.923.406-3.675 1.22-5.257a18.626 18.626 0 0 1 2.96-4.237 21.482 21.482 0 0 1 3.788-3.238A145.927 145.927 0 0 1 11.321 0l1.568 2.662zm16.111 0c-1.364.798-2.467 1.486-3.31 2.063-.841.576-1.698 1.338-2.568 2.284-.842.917-1.474 1.856-1.895 2.817-.42.961-.718 2.211-.892 3.749h2.09c1.8 0 3.215.45 4.245 1.353 1.031.902 1.546 2.225 1.546 3.97 0 1.242-.457 2.403-1.371 3.483C25.93 23.46 24.675 24 23.078 24c-2.496 0-4.282-.835-5.356-2.506-1.074-1.671-1.61-3.867-1.61-6.588 0-1.923.406-3.675 1.218-5.257a18.626 18.626 0 0 1 2.961-4.237 21.482 21.482 0 0 1 3.789-3.238A145.927 145.927 0 0 1 27.432 0L29 2.662z":"M7.5167.4855,5.0692,18.21H.4934v-.4855L4.1713,0H7.5167Zm10.99,0L16.0591,18.21H11.4833v-.4855L15.1612,0h3.3454Z",fillRule:"evenodd"})),sa=({type:e="classic"})=>l.createElement(l.Fragment,null,l.createElement(ta.L,{min:b.u3.b560},l.createElement(na.E,{columns:1},l.createElement(la,{width:29,type:e}))),l.createElement(ta.L,{max:b.u3.b560},l.createElement(na.E,{columns:2},l.createElement(la,{width:19,type:e})))),ca=l.createElement(l.Fragment,null,l.createElement(ta.L,{min:b.u3.b560},l.createElement(na.E,{columns:1},l.createElement(ra,null))),l.createElement(ta.L,{max:b.u3.b560},l.createElement(na.E,{columns:2},l.createElement(ra,null)))),da=(0,ve.$r)([2,1]),ma=e=>l.createElement(ia,null,l.createElement(x.ThemeContext.Consumer,null,(e=>l.createElement(sa,{type:e.direction===ve.Nm.RTL?"straight":"classic"}))),l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0150,padding:{inlineEnd:da,top:A.X.static100}},l.createElement(l.Fragment,null,e.children),l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.static150},ca,e.cite&&l.createElement(aa,null,e.cite)))),ua=(0,T.R)("vwa-ngw18/components/editorial/items/quoteItem",(function(e){const{validationError:t,validationMessages:n}=e;if(t&&!g.C.isInEditor())return null;const i=l.createElement(J.sw,{path:"statement",appearance:z.C2.headline400}),a=l.createElement(l.Fragment,null,l.createElement(U.c,{name:"quoteAuthorName"},l.createElement(z.xv,{bold:!0},l.createElement(J.sw,{path:"authorName"}))),l.createElement(U.c,{name:"quoteAuthorTitle"},l.createElement(J.sw,{path:"authorTitle"}))),r=t&&g.C.isInEditor()?l.createElement(ft.e3,null,n.map((e=>l.createElement("div",null,e)))):null;return l.createElement(B.V,{title:"I102 Quote Item",bgColor:B.V.BG_COLOR_ITEM},r,l.createElement(at.Y,null,l.createElement(U.c,{name:"quoteItem"},l.createElement(ma,{cite:a},i))))})),pa=x.default.blockquote.withConfig({displayName:"StyledStatement"})`
    display: flex;
    margin: 0;
    ${e=>(e=>{const{theme:t}=e;return`border-${(0,ve.rz)(t.direction)}: solid ${t.separatorColor} 2px;`})(e)}
`,ha=(0,ve.$r)([2,1]),ga=({children:e})=>l.createElement(pa,null,l.createElement(D.W,{padding:{left:ha,right:ha,top:A.X.dynamic0020,bottom:A.X.dynamic0100}},e));(0,T.R)("vwa-ngw18/components/editorial/items/statementItem",(function(e){const{validationError:t,validationMessages:n}=e;if(t&&!g.C.isInEditor())return null;const i=l.createElement(J.sw,{path:"statement",appearance:z.C2.headline400}),a=t&&g.C.isInEditor()?l.createElement(ft.e3,null,n.map(((e,t)=>l.createElement("div",{key:t},e)))):null;return l.createElement(B.V,{title:"I103 Statement Item",bgColor:B.V.BG_COLOR_ITEM},a,l.createElement(at.Y,null,l.createElement(U.c,{name:"statementItem"},l.createElement(ga,null,i))))}));var fa=n(73517),ya=n(44132),va=n(88667),ba=n(19661),Ea=n(7043);const wa=x.default.div.withConfig({displayName:"StyledHeadlineContainer"})`
    padding-left: ${e=>e.theme.size.grid002};
    padding-right: ${e=>e.theme.size.grid002};
`;class Ca extends l.PureComponent{constructor(){super(...arguments),this.updateTableInAuthorCallback=()=>{(0,ba.JM)(this.props.cqPath)}}render(){const{validationMessages:e}=this.props,t=(0,ba.fN)(this.props),n=(0,ba.WN)(t);if(!g.C.isInEditor()&&n<2)return null;const i=(0,Ea.a)(e,n,2);return l.createElement(B.V,{title:"S109 Table Item",bgColor:B.V.BG_COLOR_ITEM},l.createElement(at.Y,null,l.createElement(D.W,{gutter:A.X.dynamic0150,wrap:M.Hq.always,padding:{top:A.X.dynamic0150,bottom:A.X.dynamic0150}},g.C.isInEditor()&&i,this.hasHeadline()&&l.createElement(wa,null,l.createElement(Qe.$,{path:"headline",textAlign:z.H.center})),l.createElement(D.W,{gutter:A.X.dynamic0150,wrap:M.Hq.always},g.C.isInEditor()?l.createElement(fa.W,{path:"tableParsys",columnsCount:n,updateTableInAuthorCallback:this.updateTableInAuthorCallback,narrowColumns:!0}):l.createElement(l.Fragment,null,l.createElement(ya.D,Object.assign({},this.props)),l.createElement(va.h,Object.assign({},this.props)))))))}hasHeadline(){return!!this.props.cqItems&&!!this.props.cqItems.headline&&(g.C.isInEditor()||!this.props.cqItems.headline.empty)}}(0,T.R)("vwa-ngw18/components/editorial/items/tableItem",Ca);var Sa=n(83028),ka=n(81639),La=n(73522);const xa="800px",$a=x.default.div.withConfig({displayName:"StyledBackgroundWrapper"})`
    position: relative;
    min-height: ${e=>e.fixedHeight?xa:"100vh"};

    @media (max-width: ${b.u3.b960}px) {
        min-height: ${e=>e.hasMedia?"auto":"100vh"};
    }
`;$a.displayName="StyledBackgroundWrapper";const _a=x.default.div.withConfig({displayName:"StyledStageContainer"})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: ${e=>e.theme.size.static550};
    min-height: ${e=>e.fixedHeight?xa:e.hasMedia?"auto":"100vh"};

    @media (min-width: ${b.u3.b960}px) {
        min-height: ${e=>e.fixedHeight?xa:(e=>e.hasReadingTimebox?`calc(100vh - ${La.NE} - ${e.theme.textAppearances.copy150.lineHeight} - ${e.theme.size.static300} - ${e.theme.size.static400})`:"100vh")(e)};
    }
`;_a.displayName="StyledStageContainer";const Ia=x.default.div.withConfig({displayName:"StyledAnimationWrapper"})`
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: ${e=>e.theme.size.static400};
`;Ia.displayName="StyledAnimationWrapper";const Ta=x.default.div.withConfig({displayName:"StyledMediaWrapper"})`
	position: relative;
	overflow: hidden;
	height: auto;
	max-width: 100%;
	width: 100%;

	& > * {
		max-width: 100%;
		max-height: 100%;
	}

	padding-top: ${e=>e.theme.size.static500};
	padding-${e=>(0,ve.rz)(e.theme.direction)}: ${e=>e.theme.size.grid002};

	@media (min-width: ${b.u3.b560}px) and (max-width: ${b.u3.b960}px) {
		width: 50%;
		margin-${e=>(0,ve.rz)(e.theme.direction)}: auto;
	}

	@media (min-width: ${b.u3.b960}px) {
		position: ${e=>e.fixedHeight?"relative":"absolute"};
		${e=>(0,ve.lp)(e.theme.direction)}: 0;
		bottom: 0;
		top: 0;
		${e=>(0,ve.rz)(e.theme.direction)}: auto
		max-height: ${e=>e.fixedHeight?xa:"100%"};
		max-width: ${(0,Ot.C)(11)};
		width: ${(0,Ot.C)(11)};
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 0;
	}
`;Ta.displayName="StyledMediaWrapper";const Na=(0,ve.$r)([2,2,3]),Pa=(0,ve.$r)([2,7,8]),Oa=(0,ve.$r)([2,1,2]),Ra=(0,ve.$r)([2,8]),za=(0,ve.$r)([2,1]),Da=(0,ve.$r)([0,1]);function Aa(e){const{copy:t,category:n,heading:i,metaInfo:a,readingTimeBox:r,media:o,fixedHeight:s}=e;return l.createElement(Sa.f,{theme:"inverted"},l.createElement($a,{fixedHeight:s,hasMedia:Boolean(o)},l.createElement(ka.d,null,l.createElement(Te.Ar,{appearance:s||o?Te.O$.half:Te.O$.full},l.createElement(_a,{fixedHeight:s,hasMedia:Boolean(o),hasReadingTimebox:Boolean(r)},l.createElement(D.W,{gutter:A.X.static500,wrap:M.Hq.always,padding:{inlineStart:o?Na:Pa,inlineEnd:o?Oa:Ra}},l.createElement(D.W,{padding:o&&{inlineEnd:za},gutter:A.X.static200,wrap:M.Hq.always},n,i,a),l.createElement(D.W,{padding:o?void 0:{left:Da,right:Da}},t))),s&&o&&l.createElement(Ta,{fixedHeight:!0},o)),r&&l.createElement(Ia,null,r),o&&!s&&l.createElement(Ta,{fixedHeight:s},o))))}var Ma=n(99574),Ba=n(7635),Fa=n(85678),Wa=n(5353),Ha=n(21118),ja=n(84182),Va=n(72083),qa=n(4404),Ga=n(6570);const Ua=(0,x.default)(Wa.wY).withConfig({displayName:"StyledLazyImage"})`
    max-width: 100%;
    max-height: 100%;
`,Xa=(0,T.R)("vwa-ngw18/components/editorial/elements/imageIllustrationElement",(function(e){const{altText:t="",mediaInfo:n,imageAsset:i}=e,a=(0,Ga.o)(),r=(0,F.gq)(),{src:o,srcSet:s,srcSetWebP:c}=(0,ja.f)(r,{originalSrc:e.src,imageAsset:i,transparent:!0},a);return l.createElement(B.V,{title:"ImageIllustrationElementComponent",bgColor:B.V.BG_COLOR_ELEMENT},g.C.isInEditor()&&o&&l.createElement(Ha.W,null,n&&l.createElement(Ha.a,Object.assign({},n))),g.C.isInEditor()&&!o?l.createElement(Va.o,null,l.createElement(qa.XB,null)):l.createElement(nt.YN.Consumer,null,(e=>l.createElement(Ua,{src:o,srcSet:s,"data-srcset-webp":c,sizes:e.sizes,alt:t}))))}));var Ya=n(95844);const Ka=x.default.div.withConfig({displayName:"StyledImageWrapper"})`
    img,
    video,
    svg {
        max-height: ${e=>e.isEditMode?"740px":"100%"};
        max-width: 100%;
        @media (min-width: ${b.u3.b560}px) {
            max-width: ${(0,Ot.C)(11)};
        }
    }
`,Qa=x.default.div.withConfig({displayName:"StyledStageWrapper"})`
    position: relative;
`,Za=e=>l.createElement("div",null,l.createElement(U.c,{name:"categoryElement"},l.createElement(z.xv,{appearance:z.C2.copy150,bold:!0},e.category))),Ja=e=>{const t=l.createElement(l.Fragment,null,l.createElement(U.c,{name:"answersStageReadingTime"},l.createElement("strong",null,e.readingTime," ",e.minWord))," ",e.readWord),n=l.createElement(l.Fragment,null,"â");return l.createElement(Ya.m,{readingTime:e.readingTime>=0?t:n})},er=()=>l.createElement(ft.e3,null,l.createElement("div",null,"Reading Time must be set in page properties in the content meta tab")),tr=((0,T.R)("vwa-ngw18/components/editorial/sections/answersStageSection",(e=>{const t=g.C.isInEditor(),{anchorId:n,contentMetaData:i,contentLabels:a,contentName:r,hasMediaForPublishMode:o,tagTypeBroken:s,contentId:c}=e,d=l.createElement(Qe.$,{path:"heading",order:"H1",style:"H0"}),m=l.createElement(yt.s,{path:"copy"}),u=l.createElement(Ka,{isEditMode:t},l.createElement(nt.YN.Provider,{value:{sizes:"(min-width: 768px) 50vw, 100vw"}},l.createElement(Xa,{path:"imageIllustration"}))),p=l.createElement(U.c,{name:"answersStageMetaInfo"},l.createElement(Fa.C,Object.assign({},i))),h=l.createElement(Aa,{category:l.createElement(Za,{category:i.category}),heading:d,metaInfo:p,copy:m,readingTimeBox:g.C.isInEditor()&&i.readingTime<0?l.createElement(er,null):l.createElement(Ja,{readingTime:i.readingTime,minWord:i.minutesLabel,readWord:i.readLabel}),media:t||o?u:void 0,fixedHeight:t});return l.createElement(B.V,{anchorId:n,title:"S109 Answers Stage",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:s},l.createElement(ee.U,{anchorId:n,sectionId:c,contentLabels:a,contentName:r},l.createElement(Q.a,null,(e=>g.C.isInEditor()?l.createElement(l.Fragment,null,h,l.createElement(Ba.e,{disclaimers:e})):l.createElement(Qa,null,l.createElement(Ma.vw,{disclaimers:e,color:"light",sticky:!0},h))))))})),x.default.div.withConfig({displayName:"StyledBelowSectionDisclaimerReferences"})`
    padding: ${e=>e.theme.size.dynamic0250}
        ${e=>e.theme.size.grid002} 0
        ${e=>e.theme.size.grid002};

    @media (min-width: ${b.u3.b560}px) {
        padding: ${e=>e.theme.size.dynamic0250}
            ${e=>e.theme.size.grid006} 0
            ${e=>e.theme.size.grid006};
    }
`);class nr extends l.PureComponent{constructor(){super(...arguments),this.state={isShown:!0}}render(){const{disclaimers:e=[]}=this.props,t=e&&0!==e.length;return l.createElement(l.Fragment,null,this.state.isShown&&t&&l.createElement(tr,null,l.createElement(U.c,{name:"sectionDisclaimers"},l.createElement(X.r,{disclaimers:e}))))}}const ir={sizes:"(min-width: 768px) 20vw, 90vw"},ar=(0,ve.$r)([2,5]),rr=(0,ve.$r)([2,6]);(0,T.R)("vwa-ngw18/components/editorial/sections/copyInsetMediaSection",(function(e){const{alignment:t,anchorId:n,contentName:i,contentLabels:a,cqItems:r,mediaAspectRatio:o,contentId:s,tagTypeBroken:c}=e,d=g.C.isInEditor()||Boolean(r)&&Boolean(r.headline)&&!r.headline.empty,m=l.createElement(D.W,{padding:{inlineStart:ar,inlineEnd:rr},wrap:M.Hq.always},l.createElement(Qe.$,{path:"headline"})),u=l.createElement(nt.YN.Provider,{value:ir},l.createElement(rt.s,{path:"media"}));return l.createElement(B.V,{anchorId:n,title:"S103 Copy Inset Media Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:c},l.createElement(ee.U,{anchorId:n,sectionId:s,contentLabels:a,contentName:i},l.createElement(Q.a,null,(e=>l.createElement(Te.Ar,{allowOverflowingContent:!0},l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always},d&&m,l.createElement(Di,{aspectRatio:Ai.f[o],media:u,mediaAlignment:Mi[t]},l.createElement(yt.s,{path:"copy"}))),l.createElement(nr,{disclaimers:e}))))))})),n(85059);const or=x.default.div.withConfig({displayName:"StyledColumnsWrapper"})`
    padding: 0 ${e=>e.theme.size.grid001};
    display: flex;
    justify-content: space-between;

    @media (min-width: ${b.u3.b960}px) {
        padding: 0 ${e=>e.theme.size.grid002};
    }
`;or.displayName="StyledColumnsWrapper";const lr=x.default.div.withConfig({displayName:"StyledColumn"})`
    width: 30%;

    & > div:not(:last-child) {
        margin-bottom: ${e=>e.theme.size.dynamic0150};
    }
`;lr.displayName="StyledColumn";const sr=e=>{if(3!==e.items.length&&6!==e.items.length)return null;const t=6===e.items.length;return l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0250},e.headlineElement&&l.createElement(Te.Ar,{allowOverflowingContent:!0},l.createElement(D.W,{padding:{right:A.X.grid006,left:A.X.grid006},stretchContent:!0},e.headlineElement)),l.createElement(Te.Ar,{allowOverflowingContent:!0},l.createElement(or,null,l.createElement(lr,null,e.items[0],t&&e.items[3]),l.createElement(lr,null,e.items[1],t&&e.items[4]),l.createElement(lr,null,e.items[2],t&&e.items[5]))))};function cr(e){return l.useState(e)}function dr(e,t){return e.match(/item_\d+/)&&t.hasOwnProperty(e)}function mr(e,t){const n=(0,F.ts)();if(!e)return{loading:!1,teasers:Object.keys(t).filter((e=>dr(e,t))).map((e=>{const n=t[e];return{personalizable:!1,status:!1,placeholderId:n.placeholderId,contentId:n.contentId}}))};const i=Object.keys(t).filter((e=>dr(e,t))).map((e=>function(e,t){const n=e.getContent(t.originalCqPath,t.mboxId);if(void 0===n)return{personalizable:!1,status:!1,placeholderId:t.placeholderId,contentId:t.contentId};if(n.loaded&&n.resource){const e=n.resource;return{personalizable:!0,status:!0,placeholderId:t.placeholderId,contentId:e?e.contentId:"unknown"}}return n.loaded&&!n.resource?{personalizable:!0,status:!1,placeholderId:t.placeholderId,contentId:t.contentId}:void 0}(n,t[e]))),a=i.filter((e=>void 0!==e));return{loading:a.length<i.length,teasers:a}}var ur=n(12778);const pr=["r_1_1","r_3_4","r_4_3","r_1_1","r_4_3","r_3_4"],hr=["r_1_1","r_4_3","r_3_4","r_1_1","r_3_4","r_4_3"];function gr(e,t){return t?pr[e]:hr[e]}var fr=n(95091);const yr=e=>{const{claim:t,children:n}=e;return 0===l.Children.count(n)?null:l.createElement(Te.Ar,null,l.createElement(D.W,{gutter:A.X.static400,wrap:M.Hq.always},t&&l.createElement(D.W,{padding:{left:A.X.grid002,right:A.X.grid002},wrap:M.Hq.always},t),l.createElement(D.W,{stretchContent:!0},n)))},vr=x.default.div.withConfig({displayName:"StyledMobileWrapper"})`
    display: block;

    @media (min-width: ${b.u3.b560}px) {
        display: none;
    }
`;vr.displayName="StyledMobileWrapper";const br=x.default.div.withConfig({displayName:"StyledTabletWrapper"})`
    display: none;

    @media (min-width: ${b.u3.b560}px) {
        display: block;
    }
`;br.displayName="StyledTabletWrapper";const Er={ratio:"r_1_1",sizes:"100vw"};function wr(e){const{anchorId:t,sectionId:n,contentLabels:i,teaserList:a,contentName:r,heading:o,teaserItems:s,paginationLabels:c,bigImageInFirstRow:d,translations:m}=e,[u,p]=cr(0),h=Bn(m["carousel.slideXOfYLabel"]);return l.createElement(U.c,{name:"editorialTeaserSection"},l.createElement(ee.U,{anchorId:t,sectionId:n,contentLabels:i,teaserList:a,contentName:r},l.createElement(br,null,l.createElement(sr,{headlineElement:o,items:l.Children.map(s,((e,t)=>l.createElement(nt.YN.Provider,{value:{ratio:gr(t,d),sizes:"30vw"}},e)))})),l.createElement(vr,null,l.createElement(nt.YN.Provider,{value:Er},l.createElement(yr,{claim:o},l.createElement(Yt.a,{activeSlide:u,onSlideChanged:p,paginationItemLabels:c,paginationDefaultItemLabel:m["moodGallery.carouselItemLabel"],getXOfYLabel:h,galleryLabel:m["carousel.galleryLabel"],paginationLabel:m["carousel.gallerySlidesLabel"],useDivider:!0,carouselId:`${n}-carousel`},s))))))}const Cr=(0,xe.Pi)((e=>{const{anchorId:t,paginationLabels:n,validationError:i,validationMessages:a,contentId:r,cqItems:o,tagTypeBroken:s,personalizableChildren:c,translations:d}=e,m=mr(c,o);return i&&!g.C.isInEditor()?null:g.C.isInEditor()?l.createElement(Q.a,null,(n=>l.createElement(fr.m,{anchorId:t,emptyLabel:"S108 Editorial Teaser Section",validationMessages:a,validationError:i,tagTypeBroken:s},l.createElement(Te.Ar,null,l.createElement(sr,{headlineElement:fr.t,items:Sr(e)}),l.createElement(Ba.e,{disclaimers:n}))))):l.createElement(Q.a,null,(i=>l.createElement(Te.Ar,null,l.createElement(wr,{anchorId:t,heading:(0,je.x)(!o.heading.empty,fr.t),teaserItems:Sr(e),sectionId:r,teaserList:m,contentLabels:e.contentLabels,contentName:e.contentName,bigImageInFirstRow:e.bigImageInFirstRow,paginationLabels:n,translations:d}),l.createElement(Ba.e,{disclaimers:i}))))}));function Sr(e){const{numberOfValidElements:t,showAdditionalLink:n,showCategoryElement:i,personalizable:a,personalizableChildren:r}=e,o=[];for(let e=0;e<t;e++){const s=`item_${e}`;o.push(l.createElement(ur.K,{path:s,key:s,personalizable:!a&&r,displayType:"DEFAULT",showAbstractElement:!1,showAdditionalLink:n,showCategoryElement:i,itemCount:t,itemPosition:e+1}))}return o}(0,T.R)("vwa-ngw18/components/editorial/sections/editorialTeaserSection",Cr),(0,T.R)("vwa-ngw18/components/editorial/sections/expandCollapseSection",(function(e){const{anchorId:t,contentLabels:n,contentId:i,contentName:a,hasThreeColumnLayout:r,emptyImage:o,hasSquaredRatio:s,disableImages:c}=e;return l.createElement(B.V,{anchorId:t,title:"S132 Expand Collapse Section",bgColor:B.V.BG_COLOR_SECTION},l.createElement(Q.a,null,(e=>l.createElement(ee.U,{anchorId:t,sectionId:i,contentLabels:n,contentName:a},(g.C.isInEditor()||c||!o)&&l.createElement(D.W,{wrap:M.Hq.always},l.createElement(R,{path:"expandCollapseSectionParsys",hasThreeColumnLayout:r,hasSquaredRatio:s,disableImages:c})),l.createElement(Ba.e,{disclaimers:e})))))}));var kr=n(1570),Lr=n(58164),xr=n(52756),$r=n(55238);const _r=(0,T.R)("vwa-ngw18/components/editorial/items/featureAppContentItem",(function(e){return l.createElement(B.V,{title:"Feature App Content",bgColor:B.V.BG_COLOR_ITEM},l.createElement("span",null,"Feature app content of ",l.createElement("b",null,e.name)))})),Ir=(0,xe.Pi)((function(e){const t=(0,F.Tc)(),n=(0,F.wL)(),i=l.useContext(Z.O),[a,r]=l.useState(!1),{consumerId:o,anchorId:s,config:c,contentId:d,contentLabels:m,contentName:u,layout:p,tagTypeBroken:h,content:f}=e,y=(0,Lr.by)(a,(0,xr.U)(c?c.url:""));if(function(e){return Boolean(!g.C.isInEditor()&&void 0!==e)}(y))return null;const v=function(e){return e?{environment:{featureAppId:(0,$r.W)(e)||void 0,featureAppIdAppVersion:e.featureAppVersion||void 0}}:void 0}(c),b=function(e){return g.C.isInEditor()?e+"_"+(new Date).getTime():e}(o),{name:E,validInstanceConfig:w,hideLoadingIndicator:C,url:S,ssrUrl:k,ssrEnabled:L,baseUrl:x,css:$,instanceConfig:_,featureAppSize:I,legalEntity:T}=c||{};return l.createElement(B.V,{anchorId:s,title:"S122 Feature App Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:h},g.C.isInEditor()&&c&&Boolean(c.schema)&&l.createElement(_r,{path:"content",name:c.name}),l.createElement(ee.U,{anchorId:s,sectionId:d,contentLabels:m,additionalTrackingData:v,contentName:u},l.createElement(st.Gz,{childType:st.zB.MEDIA,layout:p},l.createElement(kr.n,{disclaimerLegalEntity:i.legalEntity,featureAppId:b,error:y,sectionId:d,contentLabels:m,featureAppTrackingData:v,globalDisclaimerStore:t,onErrorStateChange:r,logger:n,content:f,featureAppName:E,validInstanceConfig:w,hideLoadingIndicator:C,url:S,ssrUrl:k,ssrEnabled:L,baseUrl:x,css:$,instanceConfig:_,featureAppSize:I,legalEntity:T}))))}));(0,T.R)("vwa-ngw18/components/editorial/sections/featureAppSection",Ir);var Tr=n(5110);const Nr=x.default.div.withConfig({displayName:"StyledWrapper"})`
    display: flex;
    align-items: flex-start;
`,Pr=x.default.div.withConfig({displayName:"IconWrapper"})`
        margin-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.theme.size.dynamic0050};
        margin-inline-end: ${e=>e.theme.size.dynamic0050};
    margin-top: ${e=>`calc((\n        ${e.theme.textAppearances.copy200.lineHeight} - ${e.theme.size.static350}) / 2 ) `};

    svg {
        color: ${e=>e.theme.text.color.primary};
    }
`;(0,T.R)("vwa-ngw18/components/editorial/elements/preBookingListElement",(function(e){const{icon:t}=e,n=l.createElement(Pr,null,(0,Tr.e)(t,"default",{ariaHidden:!0})),i=l.createElement(J.sw,{path:"text"});return l.createElement(Nr,null,n,i)}));const Or=ye.zo.div.withConfig({displayName:"GridLayout"})`
    display: grid;
    margin: 0;
    max-width: ${b.u3.b2560}px;

    grid-template-columns:
        [background-start] repeat(2, 1fr)
        [heading-start media-start copy-start bullets-start buttons-start] repeat(
            20,
            1fr
        )
        [heading-end media-end copy-end bullets-end buttons-end] repeat(2, 1fr)
        [background-end];

    grid-template-rows:
        [heading-start] auto
        [heading-end] ${e=>e.theme.size.dynamic0200}
        [media-start] ${e=>e.theme.size.dynamic0270}
        [background-start] auto
        [media-end] ${e=>e.theme.size.dynamic0100}
        [copy-start] auto
        [copy-end bullets-start] auto
        [bullets-end buttons-start] auto
        [buttons-end] ${e=>e.theme.size.dynamic0270}
        [background-end];

    @media (min-width: ${b.u3.b560}px) {
        grid-template-columns:
            [media-start background-start] repeat(2, 1fr)
            [heading-start buttons-start copy-start] repeat(9, 1fr)
            [heading-end buttons-end copy-end] repeat(2, 1fr)
            [bullets-start] repeat(9, 1fr)
            [bullets-end] repeat(2, 1fr)
            [background-end media-end];

        grid-template-rows:
            [background-start] ${e=>e.theme.size.dynamic0100}
            [media-start] auto
            [media-end] ${e=>e.theme.size.dynamic0100}
            [bullets-start heading-start] auto
            [heading-end copy-start] auto
            [copy-end buttons-start] auto
            [buttons-end bullets-end] ${e=>e.theme.size.dynamic0250}
            [background-end];
    }

    @media (min-width: ${b.u3.b960}px) {
        grid-template-columns:
            [media-start] repeat(1, 1fr)
            [background-start] repeat(2, 1fr)
            [heading-start buttons-start copy-start] repeat(8, 1fr)
            [heading-end buttons-end copy-end] repeat(2, 1fr)
            [bullets-start] repeat(8, 1fr)
            [bullets-end] repeat(2, 1fr)
            [background-end] repeat(1, 1fr)
            [media-end];

        grid-template-rows:
            [background-start] ${e=>e.theme.size.dynamic0100}
            [media-start] auto
            [media-end] ${e=>e.theme.size.dynamic0100}
            [bullets-start heading-start] auto
            [heading-end copy-start] auto
            [copy-end buttons-start] auto
            [buttons-end bullets-end] ${e=>e.theme.size.dynamic0250}
            [background-end];
    }

    @media (min-width: ${b.u3.b1280}px) {
        grid-template-columns:
            repeat(1, 1fr)
            [background-start] repeat(1, 1fr)
            [heading-start copy-start bullets-start buttons-start] repeat(
                6,
                1fr
            )
            [heading-end copy-end bullets-end buttons-end] repeat(1, 1fr)
            [media-start] repeat(13, 1fr)
            [background-end] repeat(1, 1fr)
            [media-end] repeat(1, 1fr);

        grid-template-rows:
            [background-start] ${e=>e.theme.size.dynamic0150}
            [heading-start media-start] auto
            [heading-end] ${e=>e.theme.size.dynamic0130}
            [copy-start] auto
            [copy-end bullets-start] auto
            [bullets-end buttons-start] auto
            [buttons-end] auto
            [media-end] ${e=>e.theme.size.dynamic0270}
            [background-end];
    }
`,Rr=ye.zo.div.withConfig({displayName:"Background"})`
    grid-area: background;
    background-color: ${e=>e.theme.global.backgroundColor};
`,zr=ye.zo.div.withConfig({displayName:"HeadingArea"})`
    grid-area: heading;
    display: none;

    @media (max-width: ${b.u3.b560-1}px) {
        ${e=>e.showMobile&&ye.iv`
                display: initial;
                text-align: center;
            `}
    }

    @media (min-width: ${b.u3.b560}px) {
        ${e=>!e.showMobile&&ye.iv`
                display: initial;
            `}
    }
`,Dr=ye.zo.div.withConfig({displayName:"MediaArea"})`
    grid-area: media;
`,Ar=ye.zo.div.withConfig({displayName:"CopyArea"})`
    grid-area: copy;

    @media (min-width: ${b.u3.b560}px) and (max-width: ${b.u3.b1280-1}px) {
        margin-top: ${e=>e.theme.size.dynamic0100};
        ${e=>e.altTabletLayout&&ye.iv`
                grid-area: bullets;
                margin-top: 0;
            `};
    }
`,Mr=ye.zo.div.withConfig({displayName:"BulletsArea"})`
    grid-area: bullets;
    margin-top: ${e=>e.theme.size.dynamic0130};

    @media (min-width: ${b.u3.b560}px) and (max-width: ${b.u3.b1280-1}px) {
        margin-top: 0;
    }
`,Br=ye.zo.div.withConfig({displayName:"ButtonsArea"})`
    grid-area: buttons;
    align-self: end;

    padding: ${e=>e.theme.size.static200} 0;

    margin-top: ${e=>e.theme.size.dynamic0150};
`,Fr=({media:e,overline:t,headline:n,copy:i,bullets:a,buttons:r,lightMode:o})=>{const s=l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0020,stretchContent:!0},l.createElement(z.xv,{appearance:z.C2.headline200},t),n),c=!a;return l.createElement(Or,null,l.createElement(zr,{showMobile:!0},s),l.createElement(Sa.f,{theme:o?"main":"inverted"},l.createElement(Rr,null),l.createElement(zr,{showMobile:!1},s),l.createElement(Dr,null,e),l.createElement(Ar,{altTabletLayout:c},l.createElement(z.xv,{appearance:z.C2.copy0200},i)),a&&l.createElement(Mr,null,a),r&&l.createElement(Br,null," ",r," ")))},Wr=(0,T.R)("vwa-ngw18/components/editorial/elements/powerTeaserPromoElement/bulletsParsys",te.OF),Hr=(0,T.R)("vwa-ngw18/components/editorial/elements/powerTeaserPromoElement/buttonsParsys",te.OF),jr=[{mediaQuery:`(max-width: ${b.u3.b560-1}px)`,aspectRatio:"r_1_1",sizes:"calc(calc(100vw / 24) * 22)"},{mediaQuery:`(min-width: ${b.u3.b560}px) and (max-width: ${b.u3.b1280-1}px)`,aspectRatio:"r_16_9",sizes:"100vw"},{mediaQuery:`(min-width: ${b.u3.b1280}px)`,aspectRatio:"r_16_9",sizes:"calc(calc(100vw / 24) * 14)"}],Vr={ratio:"r_16_9",sizes:"calc(calc(100vw / 24) * 14)"},qr=(0,T.R)("vwa-ngw18/components/editorial/elements/powerTeaserPromoElement",(e=>{const t=(0,F.Ng)(),n=g.C.isInEditor()||(0,O.H)(e.cqItems.buttonsParsys).length>0,i=g.C.isInEditor()||(0,O.H)(e.cqItems.bulletsParsys).length>0,a=g.C.isInEditor()?l.createElement(nt.YN.Provider,{value:Vr},l.createElement(Tn._,{configs:jr},l.createElement(rt.s,{path:"media",responsiveMediaConfig:jr}))):l.createElement(Tn._,{configs:jr},l.createElement(rt.s,{path:"media",responsiveMediaConfig:jr,useParentAspectRatio:null==t?void 0:t.enablePictureElement})),r=l.createElement(J.sw,{path:"overline"}),o=l.createElement(Qe.$,{path:"heading",order:"H2",style:"H2"}),s=l.createElement(yt.s,{path:"copy"}),c=(0,je.x)(i,l.createElement(Wr,{key:"bullets",path:"bulletsParsys",parsysType:te.wi.ITEM_PARSYS})),d=(0,je.x)(n,l.createElement(Hr,{key:"buttons",path:"buttonsParsys",parsysType:te.wi.INLINE_BUTTON_PARSYS}));return l.createElement(B.V,{title:"Power Teaser Promo Element",bgColor:B.V.BG_COLOR_SECTION},l.createElement(Fr,{media:a,overline:r,headline:o,copy:s,bullets:c,buttons:d,lightMode:e.lightMode}))})),Gr=((0,T.R)("vwa-ngw18/components/editorial/sections/powerTeaserSection",(({anchorId:e,contentId:t,contentLabels:n,tagTypeBroken:i,lightMode:a})=>l.createElement(B.V,{anchorId:e,title:"S129 Power Teaser Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:i},l.createElement(ee.U,{anchorId:e,sectionId:t,contentLabels:n},l.createElement(Q.a,null,(e=>l.createElement(l.Fragment,null,l.createElement(qr,{lightMode:a,path:"powerTeaserPromoElement"}),l.createElement(nr,{disclaimers:e})))))))),(0,ve.$r)([0,2])),Ur=(0,ve.$r)([2,0]),Xr=(0,ve.$r)([2,3]),Yr=(0,ve.$r)([2,4]),Kr=(0,ve.$r)([4,0]),Qr=(0,ve.$r)([4,3]),Zr=e=>l.createElement(D.W,{gutter:A.X.dynamic0150,padding:{inlineStart:Ur,inlineEnd:Gr,bottom:Ur},stretchContent:!0,wrap:M.Hq.always},e.children),Jr=e=>l.createElement(D.W,{gutter:A.X.dynamic0150,padding:{inlineStart:Gr,inlineEnd:Qr,top:Gr},stretchContent:!0,wrap:M.Hq.always},e.children),eo=e=>l.createElement(D.W,{gutter:A.X.dynamic0150,padding:{left:A.X.grid002,right:A.X.grid002,bottom:e.hasPaddingBottom?Ur:void 0},stretchContent:!0,wrap:M.Hq.always},e.children),to=e=>l.createElement(D.W,{gutter:A.X.dynamic0150,padding:{inlineStart:Xr,inlineEnd:Ur,top:e.hasPaddingTop?(0,ve.$r)([0,4]):void 0},stretchContent:!0,wrap:M.Hq.always},e.children),no=e=>l.createElement(D.W,{padding:{inlineStart:Yr,inlineEnd:Ur,top:A.X.dynamic0300,bottom:Kr},stretchContent:!0,wrap:M.Hq.always},e.children),io=e=>l.createElement(D.W,{padding:{inlineStart:Ur,inlineEnd:Yr,top:Kr,bottom:Kr},stretchContent:!0,wrap:M.Hq.always},e.children),ao={[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b560]:[{name:"b",columns:12},{name:"a",columns:12}]},ro={[b.u3.default]:A.X.dynamic0250,[b.u3.b560]:A.X.dynamic0150},oo=e=>{const{headlineElement:t,teaserItems:n,quoteItem:i}=e,a=n.length,r=void 0!==i;return l.createElement(D.W,{gutter:A.X.dynamic0150,wrap:M.Hq.always},e.headlineElement&&l.createElement(D.W,{padding:{right:A.X.grid006,left:A.X.grid006},stretchContent:!0},t),l.createElement(D.W,{gutter:ro,wrap:M.Hq.always,stretchContent:!0},l.createElement(Te.Ar,{allowOverflowingContent:!0,appearance:ao,rowGap:A.X.dynamic0250},a>0&&l.createElement(Zr,null,n[0]),a>1&&l.createElement(Jr,null,n[1])),2===a&&r&&l.createElement(Te.Ar,{appearance:ao},l.createElement(io,null,i),l.createElement("div",null)),a>2&&!r&&l.createElement(Te.Ar,{appearance:ao,rowGap:A.X.dynamic0250,allowOverflowingContent:!0},l.createElement(eo,{hasPaddingBottom:a>3},n[2]),a>3?l.createElement(to,{hasPaddingTop:!0},n[3]):l.createElement("div",null)),a>2&&r&&l.createElement(Te.Ar,{appearance:Te.O$.half,rowGap:A.X.dynamic0250,allowOverflowingContent:!0},l.createElement(no,null,i),l.createElement(eo,null,n[2])),a>3&&r&&l.createElement(Te.Ar,{appearance:Te.O$.half,allowOverflowingContent:!0},l.createElement(to,null,n[3]))))},lo=["r_10_6","r_4_5","r_1_1","r_16_9"];function so(e){switch(e){case 0:return"FIRST_LEVEL_A";case 1:return"FIRST_LEVEL_B";default:return"DEFAULT"}}const co=[{mediaQuery:`(max-width: ${b.u3.b560-1}px)`,sizes:"100vw"},{mediaQuery:`(min-width: ${b.u3.b560}px)`,sizes:"50vw"}],mo=(0,xe.Pi)((function(e){const{anchorId:t,cqItems:n,contentId:i,validationError:a,validationMessages:r,hasQuoteItem:o,contentLabels:s,contentName:c,tagTypeBroken:d,personalizableChildren:m}=e,u=mr(m,n);function p(){const{showAdditionalLink:t,showCategoryElement:n,personalizable:i,personalizableChildren:a,numberOfValidElements:r}=e,o=[];for(let e=0;e<r;e++){const c=`item_${e}`,d=l.createElement(ur.K,{path:c,key:c,personalizable:!i&&a,displayType:so(e),showAbstractElement:!0,showCategoryElement:n,showAdditionalLink:t,itemCount:r,itemPosition:e+1}),m={ratio:(s=e,s>lo.length-1?lo[0]:lo[s])};o.push(l.createElement(nt.YN.Provider,{value:m},l.createElement(Tn._,{configs:co},d)))}var s;return o}if(a&&!g.C.isInEditor())return null;const h=(0,je.x)(o,l.createElement(ua,{path:"quote"})),f=(0,je.x)(g.C.isInEditor()||!n.heading.empty,fr.t);return l.createElement(fr.m,{anchorId:t,emptyLabel:"S113 First Level Teaser Section",validationMessages:g.C.isInEditor()?r:[],validationError:a,tagTypeBroken:d},l.createElement(ee.U,{anchorId:t,sectionId:i,teaserList:u,className:"vwa-cms-first-level-teaser",contentLabels:s,contentName:c},l.createElement(Q.a,null,(e=>l.createElement(U.c,{name:"firstLevelTeaserSection"},l.createElement(l.Fragment,null,l.createElement(oo,{headlineElement:f,teaserItems:p(),quoteItem:h}),l.createElement(Te.Ar,null,l.createElement(Ba.e,{disclaimers:e}))))))))}));(0,T.R)("vwa-ngw18/components/editorial/sections/firstLevelTeaserSection",mo);var uo,po=n(59577);!function(e){e[e.LEFT=0]="LEFT",e[e.RIGHT=1]="RIGHT"}(uo||(uo={}));const ho=(0,ve.$r)([2,1]),go=(e=uo.LEFT)=>e===uo.RIGHT?{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b560]:[{name:"b",columns:11},{name:"a",columns:13}]}:{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b560]:[{name:"a",columns:13},{name:"b",columns:11}]},fo=x.default.div.withConfig({displayName:"MediaWrapper"})`
	@media (min-width: ${b.u3.b1600}px) {
		${e=>`padding-${((e=uo.LEFT,t)=>e===uo.LEFT&&t!==ve.Nm.RTL||e===uo.RIGHT&&t===ve.Nm.RTL?"left":"right")(e.layout,e.theme.direction)}: ${e.theme.size.grid002};`}
`;function yo(e){const{headline:t,copy:n,readingTime:i}=e;return l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always},t,n,i)}function vo(e){const{layout:t,mediaElement:n,category:i,children:a,linkElement:r}=e;return l.createElement(po.C8,null,l.createElement(Te.Ar,{rowGap:A.X.static300,appearance:go(t),allowOverflowingContent:!0},l.createElement(fo,{layout:t,"aria-hidden":"true",tabIndex:-1},n),l.createElement(D.W,{verticalAlign:M.Qj.center,wrap:M.Hq.never,stretchContent:!0},l.createElement(D.W,{gutter:A.X.dynamic0020,wrap:M.Hq.always,padding:{inlineStart:t===uo.RIGHT?A.X.grid002:ho,inlineEnd:t===uo.LEFT?A.X.grid002:ho}},i,l.createElement(D.W,{gutter:A.X.static300,wrap:M.Hq.always},a,r)))))}var bo=n(88257),Eo=n(28972),wo=n(79567),Co=n(17475);const So="FocusTeaserSection",ko=[{mediaQuery:`(max-width: ${b.u3.b560-1}px)`,sizes:"115vw",aspectRatio:"r_4_5"},{mediaQuery:`(min-width: ${b.u3.b560}px)`,sizes:"60vw",aspectRatio:"r_4_3"}],Lo=l.createElement(J.sw,{path:"item_0/abstract",appearance:z.C2.copy200,inheritColor:!0,tag:z.rh.p}),xo=(0,xe.Pi)((function(e){const{anchorId:t,sectionLinkHref:n,sectionLinkTarget:i,sectionLinkIsLayerLink:a,sectionLinkLayerType:r,sectionLayerPath:o,hasImageRight:s,contentId:c,contentName:d,validationError:m,validationMessages:u,contentLabels:p,cqItems:h,tagTypeBroken:f}=e,y=(0,F.Ng)(),v=(0,F.V9)(),[b,E]=l.useState(!1);function w(){E(!b)}const C=(t,n,i,a)=>{e.sectionLinkIsLayerLink?(v.trackTeaserClick(e.teaserPath,e.sectionLayerPath,So,Object.assign(Object.assign({},i),{itemCount:1,itemPosition:1})),v.trackLayerLoad((0,_n.Z)(e.sectionLayerPath,a),i)):v.trackTeaserClick(e.teaserPath,e.sectionLinkHref,So,Object.assign(Object.assign({},i),{itemCount:1,itemPosition:1}))};if(m&&!g.C.isInEditor())return null;const S=h&&h.item_0?h.item_0.contentId:void 0,k=a?o:n,L=l.createElement(Tn._,{configs:ko},l.createElement(wo.S5,{href:k,contentId:S,trackingActionOverride:C,isLayerLink:a,layerProps:{layerType:r},target:i},l.createElement(rt.s,{path:"item_0/media",responsiveMediaConfig:ko,useParentAspectRatio:null==y?void 0:y.enablePictureElement}))),x=function(e){const{showAdditionalLink:t,sectionLinkHref:n,sectionLinkText:i,sectionLinkTarget:a,sectionLinkLayerType:r,sectionLinkIsLayerLink:o,sectionLayerPath:s,cqPath:c,cqItems:d}=e;if(!t||!i)return;const m=Boolean((t||(0,yi.$g)(c))&&i),u=o?s:n;if(!d||!d.item_0)return;const{item_0:p}=d,{trackingModel:h}=p;return(0,je.x)(m,l.createElement(Co.M8,{contentId:(0,_n.Z)(h.originalCqPath,h.contentName),href:u,text:i,target:a,isLayerLink:o,layerType:r}))}(e),$=s?uo.RIGHT:uo.LEFT,_=function(e){const{cqItems:t,showCategoryElement:n}=e;if(!n||!t||!t.item_0)return;const{item_0:i}=t,{categoryLinkHref:a,categoryLinkRichText:r,categoryLinkTarget:o,categoryLayerLink:s,categoryLinkLayerType:c,trackingModel:d}=i;return l.createElement(U.c,{name:"teaserCategory"},l.createElement(mi.C,null,(e=>l.createElement(l.Fragment,null,l.createElement(z.xv,{bold:!0},l.createElement(W.O,{href:a,contentId:(0,_n.Z)(d.originalCqPath,d.contentName),isLayerLink:s,layerProps:{layerType:c||"CONTENT"},target:o},l.createElement(We.xQ,{richtext:r||[],inheritColor:!0,tag:z.rh.span,placeholder:""}))),l.createElement(Eo.$,{disclaimers:e})))))}(e),I=l.createElement(vo,{mediaElement:L,layout:$,linkElement:x,category:_},l.createElement(yo,{headline:function(e){const t=l.createElement(J.sw,{path:"item_0/heading",appearance:z.C2.headline350,inheritColor:!0,tag:z.rh.h3});return e.isLinkElement?l.createElement(wo._D,{href:k,contentId:S,target:i,trackingActionOverride:C,isLayerLink:a,layerProps:{layerType:r}},t):t}({isLinkElement:!x}),copy:Lo}));return g.C.isInEditor()?l.createElement(Q.a,null,(e=>l.createElement(fr.m,{anchorId:t,emptyLabel:"S115 Focus Teaser Section",validationMessages:u,validationError:m,tagTypeBroken:f},l.createElement(bo.P,{anchorId:t},!m&&I),l.createElement(Ba.e,{disclaimers:e})))):l.createElement(Q.a,null,(e=>l.createElement(ee.U,{anchorId:t,sectionId:c,contentLabels:p,contentName:d},l.createElement("div",{onMouseOver:w,onMouseOut:w},l.createElement(U.c,{name:"focusTeaserSection"},I)),l.createElement(Ba.e,{disclaimers:e}))))}));(0,T.R)("vwa-ngw18/components/editorial/sections/focusTeaserSection",xo);const $o=ye.zo.div.withConfig({displayName:"StyledMedia"})`
    overflow: hidden;
    position: ${e=>e.scrollMode};
    top: ${e=>e.mediaDimensions.top}px;
    left: ${e=>e.mediaDimensions.left}px;
    height: ${e=>0===e.mediaDimensions.height?"70vh":e.mediaDimensions.height+"px"};
    width: ${e=>0===e.mediaDimensions.width?"100vw":e.mediaDimensions.width+"px"};
`;$o.displayName="StyledMedia";const _o=ye.zo.div.withConfig({displayName:"StyledMediaWrapper"})`
    overflow: hidden;
`;_o.displayName="StyledMediaWrapper";const Io=ye.zo.div.withConfig({displayName:"StyledButtonWrapper"})`
    padding-top: calc(${e=>e.theme.size.dynamic0020} * 2);
`;Io.displayName="StyledButtonWrapper";const To=ye.zo.div.withConfig({displayName:"StyledCopyDesktop"})`
    display: none;

    @media (min-width: ${b.u3.b560}px) {
        display: initial;
    }
`;To.displayName="StyledCopy";const No=ye.zo.div.withConfig({displayName:"StyledContentWrapper"})`
    position: relative;
    background: radial-gradient(
        circle at ${0}% ${0}%,
        ${e=>e.theme.backgroundGradient.lightColor} 0%,
        ${e=>e.theme.backgroundGradient.darkColor} 100%
    );
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: ${e=>e.theme.size.dynamic0100};
    padding: ${e=>e.theme.size.dynamic0100}
        ${e=>e.theme.size.grid002}
        ${e=>e.theme.size.dynamic0250};
    place-content: center;
    text-align: center;

    @media (min-width: ${b.u3.b560}px) {
        place-content: unset;
        text-align: unset;
    }

    @media (min-width: ${b.u3.b960}px) {
        margin-top: unset;
    }
`;No.displayName="StyledContentWrapper";const Po=ye.zo.div.withConfig({displayName:"StyledExtraContentContainer"})`
    padding: ${e=>e.theme.size.dynamic0100}
        ${e=>e.theme.size.grid002}
        ${e=>e.theme.size.dynamic0200}
        ${e=>e.theme.size.grid002};

    & span {
        color: ${e=>e.theme.text.background.primary};
    }

    @media (min-width: ${b.u3.b560}px) {
        display: none;
    }
`;Po.displayName="StyledExtraContentContainer";const Oo=ye.zo.div.withConfig({displayName:"StyledStickyScrollContainer"})`
    display: grid;
    grid-template-rows: 70vh;
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-columns: repeat(24, 1fr);

    & ${_o} {
        grid-row: 1/2;
        grid-column: 1 / 25;
    }

    & ${No} {
        grid-row: 2 / 3;
        grid-column: 1 / 25;
    }

    & ${Po} {
        grid-row: 3 / 4;
        grid-column: 1 / 25;
        position: relative;
    }

    @media (min-width: ${b.u3.b560}px) {
        & ${No} {
            grid-column: 5 / 21;
        }
    }

    @media (min-width: ${b.u3.b960}px) {
        & ${No} {
            grid-column: 1 / 13;
        }

        & ${Po} {
            grid-row: 2 / 3;
            grid-column: 13 / 25;
        }
    }
`;Oo.displayName="StyledStickyScrollContainer";const Ro={height:0,width:0,left:0,right:0,top:0,bottom:0,x:0,y:0,toJSON:()=>{}};function zo(e){const{copy:t,copyMobile:n,media:i,heading:a,button:r,disclaimersOverlay:o,isServer:s}=e,[c,d]=l.useState("sticky"),[m,u]=l.useState(Ro),p=l.useRef(null),h=l.useRef(null),g=l.useRef(null),f=l.useRef({content:0,media:0}),y=function(){const e=function(){const e="object"==typeof window,t=(0,l.useCallback)((()=>({width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0})),[e]),[n,i]=(0,l.useState)(t());return(0,l.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){i((e=>{const n=t();return e.width!==n.width||e.height!==n.height?n:e}))}}),[t,e]),n}();return(0,l.useMemo)((()=>(e.width||0)<b.u3.b560+1),[e])}();return l.useEffect((()=>{const e=()=>{if(!(null==h?void 0:h.current)||!(null==p?void 0:p.current))return;const e=h.current.getBoundingClientRect();f.current.media=e.height,f.current.content=p.current.getBoundingClientRect().height;const t=JSON.parse(JSON.stringify(e));u(Object.assign(Object.assign({},t),{top:t.top+window.scrollY}))};d("fixed");const t=()=>requestAnimationFrame((()=>(({initialMediaHeight:e,initialContentHeight:t,scrollTopRef:n,topbarHeight:i})=>{const a=e-i,r=e+t-i,o=window.scrollY/r;if(o>(window.scrollY+i)/r)return;const l=o<1?o*a:window.scrollY-t;n.current.style.transform=`translateY(-${l}px)`})({initialMediaHeight:f.current.media,initialContentHeight:f.current.content,scrollTopRef:g,topbarHeight:y?0:52})));return e(),t(),window.addEventListener("resize",e),window.addEventListener("scroll",t,{passive:!0}),()=>{window.removeEventListener("resize",e),window.removeEventListener("scroll",t)}}),[y]),l.createElement(Sa.f,{theme:"image"},l.createElement(Oo,null,l.createElement(_o,{ref:h},l.createElement($o,{mediaDimensions:m,ref:g,scrollMode:c},i)),l.createElement(No,{ref:p},a,l.createElement(To,null,(s||!y)&&t),r&&l.createElement(Io,null,r),o),l.createElement(Po,null,(s||y)&&n)))}var Do=n(91727),Ao=n(92195),Mo=n(64317),Bo=n(61097);function Fo(e){return e||_t.gr}const Wo="700px",Ho="--s2-topbar-height-expanded",jo=ye.iv`calc(${e=>e.theme.size.static200} + var(${Ho}, 0px))`,Vo=ye.zo.div.withConfig({displayName:"StyledStageContainer"})`
    position: relative;
    min-height: ${e=>Fo(e.stageHeight)};

    /* This has no direct connection to the top bar component, it just sets the
	height of how large the expanded top bar for the current breakpoint is into
	a CSS variable. The CSS variable can be accessed inside this component.
	In the future we could possibly refactor this by somehow making these
	variables globally available.*/
    ${(0,ce.xd)(Ho,!0)}
`;Vo.displayName="StyledStageContainer";const qo="fadeAnimation",Go=ye.zo.div.withConfig({displayName:"StyledContentWrapper"})`
    position: relative;
    padding-top: ${jo};
    min-height: ${e=>Fo(e.stageHeight)};

    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    pointer-events: none;

    button,
    a {
        pointer-events: initial;
    }

    transition: ${(0,Bo.hl)({name:"opacity",delay:".1s"})},
        height 0.3s ease-in;
    opacity: 1;

    &.${qo}-exit-active, &.${qo}-exit-done {
        opacity: 0;
    }

    &.${qo}-exit-done {
        visibility: hidden;
    }
`;Go.displayName="StyledContentWrapper";const Uo=ye.zo.div.withConfig({displayName:"StyledBackgroundMediaWrapper"})`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;Uo.displayName="StyledBackgroundMediaWrapper";const Xo=ye.zo.div.withConfig({displayName:"StyledCopyContentWrapper"})`
	margin-${e=>(0,ve.rz)(e.theme.direction)}: ${e=>e.theme.size.grid002};
	margin-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.theme.size.grid002};

	@media (min-width: ${b.u3.b560}px) {
	margin-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.theme.size.grid006};
	}
	@media (min-width: ${b.u3.b960}px) {
	margin-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.theme.size.grid008};
	}
	@media (min-width: ${b.u3.b1280}px) {
	margin-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.theme.size.grid010};
	}
	@media (min-width: ${b.u3.b1920}px) {
	margin-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.theme.size.grid012};
	}
`,Yo=ye.zo.div.withConfig({displayName:"VerticalSpacer"})`
    height: ${e=>e.theme.size.static500};
    margin: 0 auto;

    @media (min-width: ${b.u3.b560}px) {
        height: calc(${e=>Fo(e.stageHeight)} * 0.12);
        max-height: ${e=>e.theme.size.dynamic0350};
    }
`,Ko=ye.zo.div.withConfig({displayName:"MobileViewCopyWrapper"})`
    display: block;
    padding: ${e=>e.theme.size.static350}
        ${e=>e.theme.size.grid002} 0;

    @media (min-width: ${b.u3.b560}px) and (min-height: ${Wo}) {
        display: none;
    }
`;Ko.displayName="MobileViewCopyWrapper";const Qo=ye.zo.div.withConfig({displayName:"DesktopViewCopyWrapper"})`
    display: none;
    padding-top: ${e=>e.theme.size.static500};
    @media (min-width: ${b.u3.b560}px) and (min-height: ${Wo}) {
        display: block;
    }
`;Qo.displayName="DesktopViewCopyWrapper";const Zo=ye.zo.div.withConfig({displayName:"StyledAnimationWrapper"})`
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 0;

    @media (min-width: ${b.u3.b560}px) and (min-height: ${Wo}) {
        padding-bottom: ${e=>e.theme.size.static400};
    }
`;Zo.displayName="StyledAnimationWrapper";const Jo=ye.zo.div.withConfig({displayName:"ButtonContainer"})`
    padding-top: ${e=>e.theme.size.dynamic0150};
`;function el(e){const{copy:t,copyMobile:n,media:i,heading:a,button:r,height:o,isOverlayContentHidden:s,disclaimersOverlay:c}=e;return l.createElement(l.Fragment,null,l.createElement(Sa.f,{theme:"image"},l.createElement(Vo,{stageHeight:o},l.createElement(Uo,null,i),l.createElement(Mo.CSSTransition,{classNames:qo,in:!s,timeout:300},l.createElement(Go,{stageHeight:o},l.createElement(Xo,null,a,t&&l.createElement(Qo,null,t),r&&l.createElement(Jo,null,r)),l.createElement(Yo,{stageHeight:o}),l.createElement(Zo,null,l.createElement(La.qc,null)))),c)),l.createElement(Ko,null,n||t))}Jo.displayName="ButtonContainer";const tl=l.createElement(Qe.$,{path:"heading",hideItemDisclaimers:!0}),nl=l.createElement(yt.s,{path:"copy",appearance:z.C2.copy0250,hideItemDisclaimers:!0}),il=l.createElement(yt.s,{path:"copy",isNotEditable:!0,appearance:z.C2.copy0250,hideItemDisclaimers:!0}),al=l.createElement(Ve.S,{path:"button"}),rl=x.default.div.withConfig({displayName:"StyledAuthorMediaWrapper"})`
    width: 60%;
`,ol=x.default.div.withConfig({displayName:"StyledAuthorWrapper"})`
    display: flex;
    align-items: flex-end;
    width: 100vw;
`,ll=x.default.div.withConfig({displayName:"StyledAuthorContentWrapper"})`
    padding: ${e=>e.theme.size.static300};
    background: radial-gradient(
        circle at ${0}% ${0}%,
        ${e=>e.theme.backgroundGradient.lightColor} 0%,
        ${e=>e.theme.backgroundGradient.darkColor} 100%
    );
    width: 40%;
    min-height: 300px;
    span {
        color: white;
    }
`,sl=[{mediaQuery:"(max-aspect-ratio: 3/4)",sizes:"100vw",aspectRatio:"r_9_16"},{mediaQuery:"(min-aspect-ratio: 3/4) and (max-aspect-ratio: 4/3)",sizes:"100vw",aspectRatio:"r_1_1"},{mediaQuery:"(min-aspect-ratio: 4/3)",sizes:"100vw",aspectRatio:"r_16_9"}],cl=[{mediaQuery:"(max-aspect-ratio: 3/4)",sizes:"100vw",aspectRatio:"r_9_16"},{mediaQuery:"(max-aspect-ratio: 3/4), (min-aspect-ratio: 4/3)",ifTrue:"hide",sizes:"100vw",aspectRatio:"r_1_1"},{mediaQuery:"(min-aspect-ratio: 4/3)",sizes:"100vw",aspectRatio:"r_16_9"}],dl=((0,T.R)("vwa-ngw18/components/editorial/sections/fullscreenStageSection",(e=>{const[t,n]=l.useState(!1),{enableFullscreenStageV2:i,enablePictureElement:a}=(0,F.Ng)(),r=!(0,Do.G)(),{contentLabels:o,contentId:s,contentName:c,cqItems:d,anchorId:m,showButton:u,tagTypeBroken:p}=e,h=a?sl:cl,f=l.createElement(U.c,{name:"fullscreenStageMedia"},l.createElement(Tn._,{configs:h,matchParent:!0},l.createElement(rt.s,{path:"media",containerProps:{matchParent:!0},useParentAspectRatio:!0,enableItemInteractiveDisclaimer:!0,hideItemBasedDisclaimers:!0,responsiveMediaConfig:h}))),y=e=>{if("VIDEO"===e.type){const i=e.data.videoState===Ao.Ws.PLAYING&&!e.startedByIO||e.data.timelineDragInProgress;t!==i&&n(i)}},v={media:l.createElement(rt.s,{path:"media",hideItemBasedDisclaimers:!0,enableItemInteractiveDisclaimer:!0}),heading:tl,copy:nl,copyMobile:il,button:u?al:null,height:"800px"},b=l.createElement(B.V,{anchorId:m,title:"S104 Fullscreen Stage",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:p},l.createElement(Q.a,{getItemDisclaimers:!0},(e=>l.createElement(l.Fragment,null,l.createElement(nt.YN.Provider,{value:{sizes:"100vw",reduceBrightness:!0}},i?l.createElement(ol,null,l.createElement(ll,null,tl,nl,u?al:null),l.createElement(rl,null,l.createElement(rt.s,{path:"media",hideItemBasedDisclaimers:!0,enableItemInteractiveDisclaimer:!0}))):l.createElement(el,Object.assign({},v))),l.createElement(Ba.e,{disclaimers:e,color:"light"}))))),E={media:f,heading:tl,copy:d.copy.empty?null:nl,copyMobile:d.copy.empty?null:il,button:u?al:null,isServer:r},w=l.createElement(ee.U,{sectionId:s,anchorId:m,contentLabels:o,contentName:c},l.createElement(Q.a,{getItemDisclaimers:!0},(e=>l.createElement(l.Fragment,null,l.createElement(nt.YN.Provider,{value:{sizes:"100vw",reduceBrightness:!i,setInteractionData:y}},l.createElement(U.c,{name:"fullscreenStage"},i?l.createElement(zo,Object.assign({},E,{disclaimersOverlay:l.createElement(di.e,{color:"light",disclaimers:e})})):l.createElement(el,Object.assign({},E,{isOverlayContentHidden:t,disclaimersOverlay:l.createElement(Ma.oZ,{disclaimers:e,color:"light",type:"item"})}))))))));return g.C.isInEditor()?b:w})),(0,ve.$r)([2,0])),ml=(0,ve.$r)([2,6,7]),ul=(0,ve.$r)([2,5,6]),pl=(0,ve.$r)([2,8]),hl=x.default.div.withConfig({displayName:"StyledDisclaimerWrapper"})`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;function gl(e){switch(e){case"HEADING_LEFT":return{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b560]:[{name:"a",columns:8},{name:"b",columns:16}],[b.u3.b1600]:[{name:"a",columns:10},{name:"b",columns:14}]};case"HEADING_RIGHT":return{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b560]:[{name:"b",columns:16},{name:"a",columns:8}],[b.u3.b1600]:[{name:"b",columns:14},{name:"a",columns:10}]};case"HEADING_TOP":default:return Te.O$.full}}function fl(e){let t,n;switch(e){case"HEADING_LEFT":t=A.X.grid002,n=dl;break;case"HEADING_RIGHT":t=dl,n=A.X.grid002;break;case"HEADING_TOP":default:t=ul,n=pl}return{inlineStart:t,inlineEnd:n}}function yl(e){let t,n;switch(e){case"HEADING_LEFT":case"HEADING_RIGHT":t=A.X.grid002,n=A.X.grid002;break;case"HEADING_TOP":default:t=ml,n=ml}return{inlineStart:t,inlineEnd:n}}(0,T.R)("vwa-ngw18/components/editorial/sections/headingSection",(function(e){const{anchorId:t,contentLabels:n,cqItems:i,contentId:a,contentName:r,layout:o,tagTypeBroken:s}=e,c=g.C.isInEditor()||!i.headline.empty,d=g.C.isInEditor()||!i.copy.empty;return l.createElement(B.V,{anchorId:t,title:"S101 Heading Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:s},l.createElement(ee.U,{anchorId:t,sectionId:a,contentLabels:n,contentName:r},l.createElement(Q.a,null,(e=>l.createElement(l.Fragment,null,l.createElement(Te.Ar,{appearance:gl(o),rowGap:A.X.dynamic0100,allowOverflowingContent:!0},c&&l.createElement(D.W,{padding:fl(o),wrap:M.Hq.always},l.createElement(Qe.$,{path:"headline"})),l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.static300},d&&l.createElement(D.W,{wrap:M.Hq.always,padding:yl(o)},l.createElement(yt.s,{path:"copy",useDropCap:!1})))),l.createElement(Te.Ar,{allowOverflowingContent:!0},l.createElement(hl,null,"HEADING_TOP"===o?l.createElement(K,{disclaimers:e}):l.createElement(Ba.e,{disclaimers:e}))))))))}));var vl=n(42e3);const bl=x.default.div.withConfig({displayName:"StyledStickyWrapper"})`
    @media (min-width: ${b.u3.b960}px) {
        ${e=>e.enableDesktopLayout&&x.css`
                position: absolute;
                top: 0;
                ${(0,ve.rz)(e.theme.direction)}: 0;
                width: ${e.theme.size.grid014};
                height: 100%;
                display: ${e.isActive?"block":"none"};
                overflow: unset;
            `}
    }
`,El=x.default.div.withConfig({displayName:"StyledCopyItem"})`
    @media (min-width: ${b.u3.b560}px) {
        padding-${e=>(0,ve.rz)(e.theme.direction)}: ${e=>e.theme.size.grid001};
        padding-inline-start: ${e=>e.theme.size.grid001};
    }

    @media (min-width: ${b.u3.b960}px) {
        padding-${e=>(0,ve.rz)(e.theme.direction)}: 0;
        padding-inline-start: 0;
    }
`;El.displayName="StyledCopyItem";const wl="--s2-one-hub-navigation-top-bar-height",Cl=x.default.div.withConfig({displayName:"StyledGalleryWrapper"})`
    display: block;
    margin: ${e=>e.theme.size.dynamic0100}
        calc(-1 * ${e=>e.theme.size.grid002}); /* delete paddings from the gallery on mobile  devices */

    @media (min-width: ${b.u3.b560}px) {
        margin: ${e=>e.theme.size.dynamic0100}
            calc(-1 * ${e=>e.theme.size.grid005}); /* delete paddings from the gallery on mobile  devices */
    }

    @media (min-width: ${b.u3.b960}px) {
        margin: 0;

        ${e=>e.enableDesktopLayout&&x.css`
                width: 100%;
                ${(0,ce.xd)(wl,!1)}
                overflow: unset;
                position: sticky;
                top: var(${wl});
                display: block;
            `}
    }
`;function Sl(e){const{anchorId:t,prevAnchorId:n,nextAnchorId:i,feature:a,path:r,isActive:o,gallery:s}=e,c=l.useRef(null),d=l.createElement(z.xv,{bold:!0},l.createElement(J.sw,{path:`${r}/title`})),m=l.createElement(Qe.$,{path:`${r}/heading`}),u=a.validationError&&g.C.isInEditor()&&l.createElement(ft.e3,null,a.validationMessages.map(((e,t)=>l.createElement("span",{key:t},e))));if(a.validationError&&!g.C.isInEditor())return null;const p=(0,O.H)(a.cqItems.copyParsys),h=!g.C.isInEditor();return l.createElement(l.Fragment,null,u,l.createElement(vl.U,{id:t,prevId:n,nextId:i,isOpen:g.C.isInEditor()||o,headline:d,onClick:()=>{const{handleItemClick:t,itemIdx:n}=e;t(n,c&&c.current&&c.current.innerText&&c.current.innerText.trim()||void 0,c)},hideHeadIcon:!0,showAccordionBorder:!0,hideHeadBorder:!0,expandedItemDisabled:!0,accordionItemRef:c},l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0050},m,l.createElement(bl,{enableDesktopLayout:h,isActive:o},l.createElement(Cl,{enableDesktopLayout:h},s))),l.createElement(D.W,{wrap:M.Hq.always,gutter:A.X.dynamic0100},p.map((e=>l.createElement(El,{key:e.key},l.createElement(P.E,{path:`${r}/copyParsys/${e.key}`,resourceType:e.model.cqType})))))))}Cl.displayName="StyledGalleryWrapper";var kl=n(76057),Ll=n(86411);const xl=x.default.div.withConfig({displayName:"StyledContentWrapper"})`
    position: relative;
`,$l=x.default.div.withConfig({displayName:"StyledAccordionWrapper"})`
    padding: 0 ${e=>e.theme.size.grid002};
    width: 100vw;

    @media (min-width: ${b.u3.b560}px) {
        width: 100%;
        padding: 0 ${e=>e.theme.size.grid005};
    }

    @media (min-width: ${b.u3.b960}px) {
        margin-top: ${e=>`calc(\n            ${e.isInEditor?1:-1} * ${e.theme.size.dynamic0100}\n        )`};
        padding: ${e=>(0,ve.o3)(e.theme.direction,0,e.theme.size.grid002,0,e.theme.size.grid001)};
    }
`;$l.displayName="StyledAccordionWrapper";const _l={[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b960]:[{name:"a",columns:14},{name:"b",columns:10}]},Il=x.default.div.withConfig({displayName:"StyledSectionWrapper"})``,Tl=((0,T.R)("vwa-ngw18/components/editorial/sections/highlightFeatureSection",(e=>{const{anchorId:t,contentLabels:n,validationError:i,validationMessages:a,contentId:r,contentName:o,cqPath:s,translations:c,cqItems:d,tagTypeBroken:u}=e,p=(0,F.V9)(),h=(0,F.K5)(),f=l.useRef(null),[y,v]=l.useState(0),E=l.useRef(null),w=(0,O.H)(e),C=i&&g.C.isInEditor()&&l.createElement(ft.e3,null,a.map(((e,t)=>l.createElement("span",{key:t},e)))),S=e=>d[`item_${e}`],k=e=>{const t=S(e);return`accordion item ${e} (${t?t.contentName:""})`},L=w.map(((e,t)=>{const n=`item_${t}`,i=`${s}/${n}/mediaParsys`,a=t===y;return e.model.validationError&&!g.C.isInEditor()?null:l.createElement("div",{ref:a?f:void 0},l.createElement(Hn,{carouselId:`${n}-carousel`,key:n,isShown:a,mediaParsysPath:i,contentName:k(t),itemCount:w.length,itemPosition:t+1,previewAriaLabel:c["carFeature.previewAriaLabel"],slideXOfYLabel:c["carousel.slideXOfYLabel"],galleryLabel:c["carousel.galleryLabel"],goToNextSlideLabel:c["carousel.goToNextSlideLabel"],goToPreviousSlideLabel:c["carousel.goToPreviousSlideLabel"],carouselItemLabel:c["moodGallery.carouselItemLabel"]}))})).filter((e=>null!==e)),x=(e,t)=>{E&&(v(e),((e,t)=>{const n=(e=>{let t=e;return window&&(window.innerWidth<b.u3.b560?t-=t>=84?52:84:window.innerWidth<b.u3.b960?t-=t>=92?52:92:t=t-100-6),t})((e=>e&&e.current&&Math.round(e.current.getBoundingClientRect().top)||0)(t)+((e,t)=>{var n,i;let a=0;if((null===window||void 0===window?void 0:window.innerWidth)<b.u3.b960&&e>0)for(let r=0;r<e;r++){const e=null===(n=null==t?void 0:t.current)||void 0===n?void 0:n.querySelector(`#highlightfeaturesect_item_${r}`);if(e){const t=getComputedStyle(e),n=t.getPropertyValue("padding-top"),r=t.getPropertyValue("padding-bottom");a=a+(Number(n.replace("px",""))+Number(r.replace("px","")))+((null===(i=e.querySelector("button"))||void 0===i?void 0:i.clientHeight)||0)}}return a})(e,t));(0,kl.ld)({distance:n,animationDuration:350})})(e,E));const i=Object.assign({sectionId:r,contentLabels:n},h);if(e!==y){const n=S(e);n&&p.trackAccordionClick((0,_n.Z)(n.originalCqPath,k(e)),!0,window.location.pathname,t,i)}},$=w.map(((e,n)=>`${t}_item_${n}`));return i&&!g.C.isInEditor()?null:l.createElement(B.V,{anchorId:t,title:"S125 HighLight Feature Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:u},C,l.createElement(ee.U,{anchorId:t,sectionId:r,contentLabels:n,contentName:o},l.createElement(Q.a,null,(e=>l.createElement(Il,{ref:E},l.createElement(xl,null,l.createElement(Te.Ar,{appearance:g.C.isInEditor()?Te.O$.full:_l,allowOverflowingContent:!0},!g.C.isInEditor()&&l.createElement(Ll.A,{activeGalleryIndex:y,galleryRef:f},!(0,m.L)()&&L[y]),l.createElement($l,{isInEditor:g.C.isInEditor()},w.map(((e,t)=>l.createElement(Sl,{path:`${s}/${e.key}`,itemIdx:t,anchorId:$[t],prevAnchorId:t>0?$[t-1]:void 0,nextAnchorId:t<w.length-1?$[t+1]:void 0,feature:e.model,gallery:L[t],handleItemClick:x,isActive:y===t,key:e.key})))))),l.createElement(Ba.e,{disclaimers:e}))))))})),x.default.div.withConfig({displayName:"StyledSeparatorWrapper"})`
    @media (max-width: ${b.u3.b560}px) {
        border-top: 2px solid ${e=>e.theme.separatorColor};
        padding-top: ${e=>e.theme.size.static350};
    }
`),Nl=(0,ve.$r)([2,1]),Pl=(0,ve.$r)([2,3]),Ol=(0,ve.$r)([2,0]),Rl=e=>l.createElement(D.W,{gutter:A.X.dynamic0120,padding:{inlineStart:Nl,inlineEnd:Pl},wrap:M.Hq.always},e.children),zl=e=>l.createElement(D.W,{gutter:A.X.dynamic0150,padding:{inlineStart:Pl,inlineEnd:Ol},wrap:M.Hq.always},e.children),Dl=x.default.div.withConfig({displayName:"StyledHeadlineWrapper"})`
    padding-bottom: ${e=>e.theme.size.dynamic0150};
    text-align: center;
    padding-right: ${e=>e.theme.size.grid001};
    padding-left: ${e=>e.theme.size.grid001};
    @media (min-width: ${b.u3.b560}px) {
        padding-right: ${e=>e.theme.size.grid006};
        padding-left: ${e=>e.theme.size.grid006};
    }
`,Al=e=>{const{headlineElement:t,highlightTeaser:n,sideTeasers:i}=e;return l.createElement(l.Fragment,null,t&&l.createElement(Te.Ar,null,l.createElement(Dl,null,t)),l.createElement(Te.Ar,{appearance:Te.O$.half,rowGap:A.X.static350},l.createElement(zl,null,n),l.createElement(Rl,null,l.Children.map(i,(e=>l.createElement(Tl,null,e))))))},Ml=(0,xe.Pi)((function(e){const{anchorId:t,cqItems:n,validationError:i,validationMessages:a,contentId:r,contentName:o,contentLabels:s,tagTypeBroken:c,personalizableChildren:d}=e;if(i&&!g.C.isInEditor())return null;let m=function(){const{numberOfValidElements:t,showCategoryElement:n,personalizable:i,personalizableChildren:a}=e,r=[];for(let e=0;e<t;e++){const o=`item_${e}`,s=l.createElement(ur.K,{path:o,key:o,personalizable:!i&&a,displayType:Wl(e),showAbstractElement:!1,showCategoryElement:n,itemCount:t,itemPosition:e+1}),c={ratio:Bl(e,t),sizes:Fl(e)};r.push(l.createElement(nt.YN.Provider,{value:c},s))}return r}().slice(0);const u=l.createElement(U.c,{name:"highlightTeaserHighlightItem"},m.shift()||l.createElement(l.Fragment,null));m=m.map((e=>l.createElement(U.c,{name:"highlightTeaserSideItem"},e)));const p=mr(d,n);return g.C.isInEditor()?l.createElement(Q.a,null,(e=>l.createElement(fr.m,{anchorId:t,emptyLabel:"S110 Highlight Teaser Section",validationMessages:a,validationError:i,tagTypeBroken:c},l.createElement("div",{id:t},l.createElement(Te.Ar,null,l.createElement(Al,{headlineElement:fr.t,sideTeasers:m,highlightTeaser:u}),l.createElement(Ba.e,{disclaimers:e})))))):l.createElement(ee.U,{anchorId:t,sectionId:r,teaserList:p,contentLabels:s,contentName:o},l.createElement(Q.a,null,(e=>l.createElement(Te.Ar,null,l.createElement(Al,{headlineElement:(0,je.x)(!n.heading.empty,fr.t),sideTeasers:m,highlightTeaser:u}),l.createElement(Ba.e,{disclaimers:e})))))})),Bl=(e,t)=>t>3&&e>0?"r_4_3":"r_1_1",Fl=e=>0===e?"50vw":"15vw",Wl=e=>{switch(e){case 0:return"DEFAULT";default:return"SMALL"}},Hl=((0,T.R)("vwa-ngw18/components/editorial/sections/highlightTeaserSection",Ml),(0,ve.$r)([2,6]));class jl extends l.Component{render(){const{useDropCap:e,anchorId:t,contentName:n,contentLabels:i,contentId:a,tagTypeBroken:r}=this.props;return l.createElement(B.V,{anchorId:t,title:"S107 Intro Copy Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:r},l.createElement(ee.U,{anchorId:t,sectionId:a,contentLabels:i,contentName:n},l.createElement(Q.a,null,(t=>l.createElement(Te.Ar,{allowOverflowingContent:!0},l.createElement(D.W,{wrap:M.Hq.always,padding:{right:Hl,left:Hl}},l.createElement(yt.s,{path:"copyItem",useDropCap:e})),l.createElement(nr,{disclaimers:t}))))))}}(0,T.R)("vwa-ngw18/components/editorial/sections/introCopySection",jl);const Vl=[4,0,2],ql=Te.O$.half;var Gl;!function(e){e[e.top=0]="top",e[e.bottom=1]="bottom"}(Gl||(Gl={}));const Ul=x.default.div.withConfig({displayName:"StyledMoodGalleryItem"})`
    display: flex;
    padding: ${e=>(e=>{const{padding:t}=e;return t?`0 ${t.right?t.right:"0"} 0 ${t.left?t.left:"0"}`:"0"})(e)};
    height: 100%;
    align-items: ${e=>e.lane===Gl.top?"flex-end":"flex-start"};
`;Ul.displayName="StyledMoodGalleryItem";const Xl=(e,t,n,i)=>{const a=((e,t)=>e<0||e>l.Children.count(t)-1?null:l.Children.toArray(t)[e])(e,t);if(!a)return null;const r=n.itemSpacing[e];return l.createElement(Ul,{key:e,lane:i,padding:r},a)},Yl=(0,x.withTheme)((e=>{const{claim:t,children:n,theme:i}=e;return l.createElement(x.ThemeContext.Consumer,null,(({direction:e})=>{const a=l.Children.count(n),r=((e,t,n)=>{switch(e){case 2:return{topLane:{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b560]:[{name:"a",columns:18},{name:"b",columns:6}]},bottomLane:ql,itemSpacing:[void 0,void 0],topLaneOrder:Vl};case 3:const i=n!==ve.Nm.RTL?{right:t.size.grid003}:{left:t.size.grid003};return{topLane:{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b560]:[{name:"a",columns:16},{name:"b",columns:8}]},bottomLane:Te.O$.half,itemSpacing:[void 0,i,void 0],topLaneOrder:Vl};case 4:const a=n!==ve.Nm.RTL?{right:t.size.grid003}:{left:t.size.grid003},r=n!==ve.Nm.RTL?{left:t.size.grid006}:{right:t.size.grid006};return{topLane:{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b560]:[{name:"a",columns:16},{name:"b",columns:8}]},bottomLane:Te.O$.half,itemSpacing:[void 0,a,void 0,r],topLaneOrder:Vl};case 5:const o=n!==ve.Nm.RTL?{right:t.size.grid003}:{left:t.size.grid003},l=n!==ve.Nm.RTL?{left:t.size.grid004}:{right:t.size.grid004};return{topLane:{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24},{name:"c",columns:24}],[b.u3.b560]:[{name:"a",columns:6},{name:"b",columns:12},{name:"c",columns:6}]},bottomLane:Te.O$.half,itemSpacing:[void 0,o,void 0,l,void 0],topLaneOrder:Vl};default:return console.warn(`It's not possible to create layout with #${e} images.`),null}})(a,i,e);return n&&0!==a&&r?l.createElement(l.Fragment,null,l.createElement(Te.Ar,{appearance:r.topLane},r.topLaneOrder.map((e=>Xl(e,n,r,Gl.top)))),l.createElement(Te.Ar,{appearance:r.bottomLane},l.createElement("div",null,Xl(3,n,r,Gl.bottom),t&&l.createElement(D.W,{padding:{left:A.X.grid002,right:A.X.grid002,top:A.X.dynamic0150},wrap:M.Hq.always},t)),Xl(1,n,r,Gl.bottom))):null}))})),Kl=x.default.div.withConfig({displayName:"StyledMobileWrapper"})`
    display: block;

    @media (min-width: ${b.u3.b1280}px) {
        display: ${e=>e.showMobile?"block":"none"};
    }
`;Kl.displayName="StyledMobileWrapper";const Ql=x.default.div.withConfig({displayName:"StyledTabletWrapper"})`
    display: none;

    @media (min-width: ${b.u3.b1280}px) {
        display: block;
    }
`;Ql.displayName="StyledTabletWrapper";const Zl=x.css`
    .animationElement {
        margin-bottom: -4px;
    }
`,Jl=x.default.div.withConfig({displayName:"StyledMoodGalleryAuthor"})`
    .mediaElement.cq-Editable-dom {
        padding-bottom: 0;
    }

    .imageElement.cq-Editable-dom {
        margin-bottom: 0;
    }

    ${Zl};
`;Jl.displayName="StyledMoodGalleryAuthor",x.default.div.withConfig({displayName:"StyledMoodGallery"})`
    ${Zl};
`.displayName="StyledMoodGallery";const es={1:["100vw"],2:["75vw","50vw"],3:["66vw","37vw","33vw"],4:["66vw","37vw","33vw","25vw"],5:["50vw","37vw","25vw","33vw","25vw"]},ts=x.default.div.withConfig({displayName:"StyledItemWrapper"})`
    width: 100%;
`;function ns(e,t,n,i){const a=[];for(let r=0;r<e;r++)a.push(l.createElement(ts,{key:r},l.createElement(nt.YN.Provider,{value:{ratio:n,sizes:i||es[e][r],setInteractionData:t}},l.createElement(rt.s,{path:`media_${r}`}))));return a}(0,T.R)("vwa-ngw18/components/editorial/sections/moodGallerySection",(function(e){const{anchorId:t,translations:n,contentLabels:i,cqItems:a,contentId:r,contentName:o,tagTypeBroken:s}=e,[c,d]=cr(0),{showMobileView:m,setInteractionData:u}=function(){const[e,t]=l.useState(!1),n=l.useCallback((n=>{if("VIDEO"===n.type){const i=n.data.displayMode===Ao.Fb.FULLSCREEN;e!==i&&t(i)}}),[e]);return{showMobileView:e,setInteractionData:n}}(),p=(0,je.x)(g.C.isInEditor()||!a.heading.empty,l.createElement(Qe.$,{path:"heading",style:"H1"})),h=l.createElement(Yl,{claim:p},ns(e.numberOfElements,u)),f=Bn(n["carousel.slideXOfYLabel"]);return g.C.isInEditor()?l.createElement(Jl,{id:t},l.createElement(B.V,{anchorId:t,title:"S105 Mood Gallery Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:s},h)):l.createElement(Q.a,null,(()=>l.createElement(ee.U,{anchorId:t,sectionId:r,contentLabels:i,contentName:o,className:"vwa-cms-mood-gallery-module"},l.createElement(Ql,null,h),l.createElement(Kl,{showMobile:m},l.createElement(yr,{claim:p},l.createElement(Yt.a,{carouselId:`${r}-carousel`,activeSlide:c,onSlideChanged:d,paginationDefaultItemLabel:n["moodGallery.carouselItemLabel"],getXOfYLabel:f,galleryLabel:n["carousel.galleryLabel"],paginationLabel:n["carousel.gallerySlidesLabel"]},ns(e.numberOfElements,u,"r_3_4","100vw")))))))}));const is=ye.zo.nav.withConfig({displayName:"StyledMagazineNav"})`
    margin: 0 ${e=>e.theme.size.grid003};

    @media (min-width: ${b.u3.b960}px) {
        margin: 0 ${e=>e.theme.size.grid002};
    }
`;is.displayName="StyledMagazineNav";const as=ye.zo.ul.withConfig({displayName:"StyledLinkList"})`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
`;as.displayName="StyledLinkList";const rs=ye.zo.li.withConfig({displayName:"StyledLinkItem"})`
    text-align: center;
    list-style-type: none;
    font-size: ${e=>e.theme.size.static250};
    margin-bottom: ${e=>e.theme.size.static300};
    margin-block-end: ${e=>e.theme.size.static300};
    font-weight: ${e=>e.theme.text.weight.light};
    font-family: ${e=>e.theme.textAppearances.headline350.fontFamily};

    ${e=>e.isCurrent&&`\n            font-weight: ${e.theme.text.weight.bold};\n            color: ${e.theme.text.color.primary};\n        `}

    &:not(:last-of-type) {
        margin-${e=>(0,ve.lp)(e.theme.direction)}: max(${e=>e.theme.size.static300}, var(--size-grid001));
        margin-inline-end: max(${e=>e.theme.size.static300}, var(--size-grid001));
    }

    @media (min-width: ${b.u3.b960}px) {
        font-size: ${e=>e.theme.size.static350};
    }
`;rs.displayName="StyledLinkItem",(0,T.R)("vwa-ngw18/components/editorial/sections/magazineCategoryLinksSection",(function(e){const{anchorId:t,contentName:n,contentLabels:i,contentId:a,tagTypeBroken:r,categoryLinks:o,translations:s,currentPageLink:c,overviewPageLink:d,validationError:m,validationMessages:u,currentStageSectionId:p}=e,h=(0,F.V9)(),f=(0,F.K5)(),y=m&&g.C.isInEditor()&&l.createElement(ft.e3,null,u.map(((e,t)=>l.createElement("span",{key:t},e)))),v=l.useCallback(((e,t,n)=>()=>{const r=[d,...o],l=o.length>6?7:r.length,s=Object.assign({sectionId:p,contentLabels:i,itemCount:l,itemPosition:n},f);h.trackContentTabClick(a,t,e,s)}),[o,d,i,a,f,h,p]),b=s["magazineCategoryLinks.allCategories"];return l.createElement(B.V,{anchorId:t,title:"S133 Magazine Category Links Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:r},y,l.createElement(ee.U,{anchorId:t,sectionId:a,contentLabels:i,contentName:n},d&&l.createElement(is,{"aria-label":s["magazineCategoryLinks.navAriaLabel"]},l.createElement(as,null,l.createElement(U.c,{name:"allCategoriesLink"},l.createElement(rs,{key:d.label,isCurrent:d.internalLink===c.internalLink},l.createElement(W.O,{linkName:b,emphasis:d.internalLink===c.internalLink?"tertiary":"none",href:d.internalLink,trackingActionOverride:v(b,d.internalLink,1)},b))),o.map(((e,t)=>l.createElement(U.c,{name:"categoryLink"},l.createElement(rs,{key:e.label,isCurrent:e.internalLink===c.internalLink},l.createElement(W.O,{linkName:e.label,emphasis:e.internalLink===c.internalLink?"tertiary":"none",href:e.internalLink,trackingActionOverride:v(e.label,e.internalLink,t+2)},e.label))))).slice(0,6)))))}));var os=n(58509);const ls="44px",ss=x.default.div.withConfig({displayName:"StyledFullscreenContainer"})`
    top: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 5000;
    touch-action: pan-x;
`;ss.displayName="StyledFullscreenContainer";const cs=x.default.div.withConfig({displayName:"StyledCloseButtonContainer"})`
    position: absolute;
    margin-top: ${e=>e.theme.size.dynamic0050};
    margin-left: ${e=>e.theme.size.grid001};
    top: 0;
    left: 0;
    z-index: 5001;
    color: white;
`,ds=x.default.button.withConfig({displayName:"StyledButton"})`
    background-color: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
    color: inherit;
    appearance: none;

    // NOTE: larger button for better accessibility
    width: ${ls};
    height: ${ls};

    // NOTE: get rid off inline element space under
    font-size: 0;

    &:hover,
    &:focus {
        color: ${e=>e.theme.interaction.recipe450.hover};
        outline: 0;
    }
`;class ms extends l.Component{constructor(){super(...arguments),this.ref=l.createRef(),this.handleFullscreenCloseClick=e=>{e.preventDefault(),e.stopPropagation();const{onCloseFullscreen:t}=this.props;t()}}componentDidMount(){this.ref.current&&(0,os.Qp)(this.ref.current)}componentWillUnmount(){(0,os.tP)()}render(){const{children:e}=this.props;return l.createElement(ss,{ref:this.ref},e,l.createElement(cs,null,l.createElement(ds,{onTouchEndCapture:this.handleFullscreenCloseClick,onClickCapture:this.handleFullscreenCloseClick},l.createElement(kt.x,{ariaHidden:!0}),l.createElement(z.xv,{appearance:z.C2.copy100,color:z.d9.inherit},"Close"))))}}var us=n(18276);function ps(e){return e||_t.gr}function hs(e){return e||`calc(80vh - ${_t.gX})`}const gs=x.default.div.withConfig({displayName:"StyledStageContainer"})`
    position: relative;
    min-height: ${e=>ps(e.height)};
    @media (max-width: ${b.u3.b960}px) {
        min-height: ${e=>hs(e.height)};
    }
    width: 100vw;
`;gs.displayName="StyledStageContainer";const fs=x.default.div.withConfig({displayName:"StyledFullscreenWrapper"})`
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: ${e=>e.isVisible?"1":"0"};
    transition: ${(0,ve.hl)({name:"opacity"})};
`;fs.displayName="StyledFullscreenWrapper";const ys=x.default.div.withConfig({displayName:"StyledMediaWrapper"})`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;ys.displayName="StyledMediaWrapper";const vs=x.default.div.withConfig({displayName:"StyledContentInner"})`
    height: ${e=>ps(e.height)};
    @media (max-width: ${b.u3.b960}px) {
        height: ${e=>hs(e.height)};
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;vs.displayName="StyledContentInner";const bs=x.default.div.withConfig({displayName:"StyledCopyContentDesktopWrapper"})`
    padding-${e=>(0,ve.rz)(e.theme.direction)}: ${e=>e.theme.size.grid002};
    padding-inline-start: ${e=>e.theme.size.grid002};
    padding-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.theme.size.grid010};
    padding-inline-end: ${e=>e.theme.size.grid010};

    & h1 {
        pointer-events: all;
        display: inline-block;
    }

    @media (min-width: ${b.u3.b1600}px) {
        padding-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.theme.size.grid012};
        padding-inline-end: ${e=>e.theme.size.grid012};
    }
`;bs.displayName="StyledCopyContentDesktopWrapper";const Es=x.default.div.withConfig({displayName:"StyledCopyContentMobileWrapper"})`
    padding: 0 ${e=>e.theme.size.grid002};
`;Es.displayName="StyledCopyContentMobileWrapper";const ws=x.default.div.withConfig({displayName:"StyledBellowStageContentMobileWrapper"})`
    padding: ${e=>e.theme.size.dynamic0200} 0
        ${e=>e.theme.size.dynamic0130};
`;ws.displayName="StyledBellowStageContentMobileWrapper";const Cs=x.default.div.withConfig({displayName:"VerticalLineSpacer"})`
    height: ${e=>e.theme.size.static500};
    max-height: ${e=>e.theme.size.dynamic0350};
    margin: 0 auto;

    @media (min-width: ${b.u3.b560}px) {
        height: 12%;
    }
`,Ss=x.default.div.withConfig({displayName:"StyledAnimationWrapper"})`
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 0;

    @media (min-width: ${b.u3.b560}px) {
        padding-bottom: ${e=>e.theme.size.static400};
    }
`;Ss.displayName="StyledAnimationWrapper";const ks=x.default.div.withConfig({displayName:"FullscreenIconContainer"})`
    position: absolute;
    right: 0;
    padding-right: ${e=>e.theme.size.grid001};
    padding-bottom: ${e=>e.theme.size.grid001};
    pointer-events: all;

    @media (min-width: ${b.u3.b560}px) {
        display: none;
    }

    color: ${e=>e.theme.text.color.primary};
    fill: ${e=>e.theme.text.color.primary};
`,Ls=e=>{const{media:t,heading:n,height:i,overlayHidden:a=!1,disclaimers:r=[],onOpenFullscreen:o=$e.Z}=e;return l.createElement(Ma.vw,{disclaimers:r,color:"light",minBreakpoint:b.u3.b960},l.createElement(Sa.f,{theme:"image"},l.createElement(gs,{height:i},l.createElement(ys,null,t),l.createElement(fs,{isVisible:!a},l.createElement(Te.Ar,null,l.createElement(vs,{height:i},l.createElement(ta.L,{min:b.u3.b960},l.createElement(bs,null,n)),l.createElement(Cs,null),l.createElement(Ss,null,l.createElement(La.qc,null)),l.createElement(ks,null,l.createElement(St.M,{tag:"a",emphasis:"none",onClick:o},l.createElement(us.X,{ariaHidden:!0})))))))),l.createElement(ta.L,{max:b.u3.b960},l.createElement(ws,null,l.createElement(Es,null,n),l.createElement(Ba.e,{disclaimers:r}))))};var xs=n(21977);const $s=l.createElement(Qe.$,{path:"heading",hideItemDisclaimers:!0}),_s={sizes:"100vw",reduceBrightness:!0};function Is(e,t){return l.createElement(nt.YN.Provider,{value:_s},l.createElement(xs.f.Provider,{value:t},l.createElement(rt.s,{path:"media",useParentAspectRatio:!0,hideItemBasedDisclaimers:e,enableItemInteractiveDisclaimer:e,containerProps:{matchParent:!0}})))}function Ts(e){const t=(0,xe.hN)((()=>new xs.F));return l.createElement(B.V,{anchorId:e.anchorId,bgColor:B.V.BG_COLOR_SECTION,title:"S114 Product Experience Stage",tagTypeBroken:e.tagTypeBroken},l.createElement(Q.a,{getItemDisclaimers:!0},(e=>l.createElement(l.Fragment,null,l.createElement(Ls,{media:Is(e.length>0,t),heading:$s,height:"800px"}),l.createElement(Ba.e,{disclaimers:e,color:"light"})))))}const Ns=(0,xe.Pi)((function(e){const{contentLabels:t,contentId:n,anchorId:i,contentName:a}=e,r=(0,xe.hN)((()=>new xs.F)),o=r.dragDirection,s=r.isProgressBarFocused,c=r.isFullscreen,d="none"!==o;return l.createElement(ee.U,{sectionId:n,anchorId:i,contentLabels:t,contentName:a},l.createElement(Q.a,{getItemDisclaimers:!0},(e=>c?l.createElement(ms,{onCloseFullscreen:()=>r.closeFullscreen()},l.createElement(Sa.f,{theme:"image"},Is(e.length>0,r))):l.createElement(Ls,{media:Is(e.length>0,r),heading:$s,overlayHidden:d||s,onOpenFullscreen:()=>r.openFullscreen(),disclaimers:e}))))}));(0,T.R)("vwa-ngw18/components/editorial/sections/productExperienceStageSection",(function(e){return g.C.isInEditor()?l.createElement(Ts,Object.assign({},e)):l.createElement(Ns,Object.assign({},e))}));const Ps={[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24},{name:"c",columns:24}],[b.u3.b560]:[{name:"a",columns:8},{name:"b",columns:8},{name:"c",columns:8}]},Os=x.default.div.withConfig({displayName:"StyledHeadlineWrapper"})`
    margin: auto;
    max-width: ${b.u3.b1920}px;
    padding-right: ${e=>e.theme.size.grid001};
`,Rs=x.default.div.withConfig({displayName:"StyledTeaserItemWrapper"})`
    padding-right: ${e=>e.theme.size.grid001};
    padding-bottom: ${e=>e.theme.size.static500};

    @media (min-width: ${b.u3.b560}px) {
        padding-bottom: ${e=>e.theme.size.dynamic0150};
    }
`,zs=(0,ve.$r)([0,1]),Ds=(0,ve.$r)([1,2]),As=e=>{const{headlineElement:t,teaserItems:n}=e;return l.createElement(D.W,{gutter:A.X.dynamic0250,padding:{inlineStart:Ds,inlineEnd:zs},wrap:M.Hq.always},t&&l.createElement(Os,null,t),l.createElement(Te.Ar,{appearance:Ps,allowOverflowingContent:!0},n.map(((e,t)=>{const n=null===e.key?`second_level_teaser_item_${t}`:e.key;return l.createElement(Rs,{key:n},e)}))))};var Ms=n(74749);const Bs="S123 Second Level Teaser",Fs=x.default.div.withConfig({displayName:"StyledHeadingElementWrapper"})`
    padding-${e=>(0,ve.lp)(e.theme.direction)}: ${e=>e.theme.size.grid002};
    padding-inline-end: ${e=>e.theme.size.grid002};

    @media (min-width: ${b.u3.b560}px) {
        width: ${e=>e.theme.size.grid015};
    }
`,Ws=(0,x.default)(Fs).withConfig({displayName:"StyledCopyItemWrapper"})`
    padding-top: ${e=>e.theme.size.dynamic0100};

    @media (min-width: ${b.u3.b560}px) {
        padding-${e=>(0,ve.rz)(e.theme.direction)}: ${e=>e.theme.size.grid001};
        padding-inline-start: ${e=>e.theme.size.grid001};
    }
`;function Hs(e){const{cqItemsOrder:t,cqItems:n,showCategory:i}=e,a=t.filter((e=>"heading"!==e)).map((e=>({itemId:e,teaser:n[e]}))).filter((e=>Boolean(e.teaser.teaserElementLinkHref))),r=a.map(((e,t)=>l.createElement(Ms.n,{showCategory:i,teaserTrackingName:"Second Level Teaser",showOriginInfo:g.C.isInEditor(),teaserData:{itemCount:a.length,itemPosition:t+1,itemId:e.itemId,teaser:e.teaser}})));return l.createElement(As,{headlineElement:l.createElement(js,Object.assign({},e)),teaserItems:r})}function js(e){const t=g.C.isInEditor()||!e.cqItems.heading.empty,n=g.C.isInEditor()||!e.cqItems.copy.empty;return l.createElement(l.Fragment,null,t&&l.createElement(Fs,null,l.createElement(Qe.$,{path:"heading",order:"H2",style:"H2"})),n&&l.createElement(D.W,{gutter:A.X.static300,wrap:M.Hq.always},l.createElement(Ws,null,l.createElement(yt.s,{path:"copy",useDropCap:!1}))))}function Vs(e){const{anchorId:t,contentLabels:n,contentId:i,contentName:a,tagTypeBroken:r}=e;return l.createElement(Q.a,null,(o=>l.createElement(fr.m,{anchorId:t,emptyLabel:Bs,tagTypeBroken:r},l.createElement(ee.U,{anchorId:t,sectionId:i,contentLabels:n,contentName:a},l.createElement(Hs,Object.assign({},e)),l.createElement(Ba.e,{disclaimers:o})))))}const qs=(0,xe.Pi)((function(e){const{anchorId:t,contentLabels:n,contentId:i,contentName:a}=e;return l.createElement(Q.a,null,(r=>l.createElement(Te.Ar,{allowOverflowingContent:!0},l.createElement(fr.m,{anchorId:t,emptyLabel:Bs},l.createElement(ee.U,{anchorId:t,sectionId:i,contentLabels:n,contentName:a},l.createElement(Hs,Object.assign({},e)),l.createElement(Ba.e,{disclaimers:r}))))))})),Gs=l.memo((e=>g.C.isInEditor()?l.createElement(Vs,Object.assign({},e)):l.createElement(qs,Object.assign({},e))));(0,T.R)("vwa-ngw18/components/editorial/sections/secondLevelTeaserSection",Gs),n(5693);const Us=(0,ve.$r)([2,5,6]),Xs=(0,ve.$r)([2,8]);(0,T.R)("vwa-ngw18/components/editorial/sections/singleColumnSection",(function(e){const{anchorId:t,layout:n,contentId:i,contentName:a,contentLabels:r,tagTypeBroken:o}=e,s=g.C.isInEditor()||!!e.cqItems&&!!e.cqItems.headline&&(g.C.isInEditor()||!e.cqItems.headline.empty),c=()=>l.createElement(D.W,{padding:{inlineStart:Us,inlineEnd:Xs},wrap:M.Hq.always},l.createElement(Qe.$,{path:"headline"}));return l.createElement(B.V,{anchorId:t,title:"S102 Single Column Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:o},l.createElement(ee.U,{anchorId:t,sectionId:i,contentLabels:r,contentName:a},l.createElement(Q.a,null,(e=>l.createElement(Te.Ar,{allowOverflowingContent:!0},l.createElement(D.W,{gutter:A.X.dynamic0100,wrap:M.Hq.always,stretchContent:!0},s&&l.createElement(c,null),l.createElement(gt,{path:"singleColumnSectionParsys",layout:n}),l.createElement(nr,{disclaimers:e})))))))}));const Ys={SMALL_MEDIUM:{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b960]:[{name:"a",columns:8},{name:"b",columns:16}]},MEDIUM_SMALL:{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b960]:[{name:"a",columns:16},{name:"b",columns:8}]},SMALL_SMALL:{[b.u3.default]:[{name:"a",columns:24},{name:"b",columns:24}],[b.u3.b960]:[{name:"a",columns:12},{name:"b",columns:12}]}},Ks={SMALL_MEDIUM:`(min-width: ${b.u3.b560}px) 50vw, (min-width: ${b.u3.b960}px) 25vw, 90vw`,MEDIUM_SMALL:`(min-width: ${b.u3.b560}px) 50vw, (min-width: ${b.u3.b960}px) 50vw, 90vw`,SMALL_SMALL:`(min-width: ${b.u3.b560}px) 50vw, (min-width: ${b.u3.b960}px) 38vw, 90vw`},Qs={SMALL_MEDIUM:`(min-width: ${b.u3.b560}px) 50vw, (min-width: ${b.u3.b960}px) 50vw, 90vw`,MEDIUM_SMALL:`(min-width: ${b.u3.b560}px) 50vw, (min-width: ${b.u3.b960}px) 25vw, 90vw`,SMALL_SMALL:`(min-width: ${b.u3.b560}px) 50vw, (min-width: ${b.u3.b960}px) 38vw, 90vw`},Zs={[b.u3.default]:A.X.grid002,[b.u3.b560]:A.X.grid006,[b.u3.b960]:A.X.static0},Js={[b.u3.default]:A.X.grid002,[b.u3.b560]:A.X.grid006,[b.u3.b960]:A.X.grid001},ec={[b.u3.default]:A.X.grid002,[b.u3.b560]:A.X.grid006,[b.u3.b960]:A.X.grid002},tc={SMALL_MEDIUM:{left:ec,right:Zs},MEDIUM_SMALL:{left:ec,right:ec},SMALL_SMALL:{left:ec,right:Js}},nc={SMALL_MEDIUM:{left:ec,right:ec},MEDIUM_SMALL:{left:Zs,right:ec},SMALL_SMALL:{left:Js,right:ec}};(0,T.R)("vwa-ngw18/components/editorial/sections/twoColumnsSection",(function(e){const{anchorId:t,tagTypeBroken:n,contentLabels:i,contentName:a,layout:r,contentId:o}=e;return l.createElement(B.V,{anchorId:t,title:"S102 Two Columns Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:n},l.createElement(ee.U,{anchorId:t,sectionId:o,contentLabels:i,contentName:a},l.createElement(Q.a,null,(e=>l.createElement(l.Fragment,null,l.createElement(Te.Ar,{allowOverflowingContent:!0,appearance:Ys[r],rowGap:A.X.dynamic0250},l.createElement(D.W,{padding:{inlineStart:tc[r].left,inlineEnd:tc[r].right},stretchContent:!0,wrap:M.Hq.always},l.createElement(U.c,{name:"twoColumnsSection1"},l.createElement(nt.YN.Provider,{value:{sizes:Ks[r]}},l.createElement(te.dJ,{path:"twoColumnsSectionParsys1",parsysType:te.wi.ITEM_PARSYS})))),l.createElement(D.W,{padding:{inlineStart:nc[r].left,inlineEnd:nc[r].right},stretchContent:!0,wrap:M.Hq.always},l.createElement(U.c,{name:"twoColumnsSection2"},l.createElement(nt.YN.Provider,{value:{sizes:Qs[r]}},l.createElement(te.dJ,{path:"twoColumnsSectionParsys2",parsysType:te.wi.ITEM_PARSYS}))))),l.createElement(Ba.e,{disclaimers:e}))))))}));const ic=ye.zo.div.withConfig({displayName:"StyledHeadlineWrapper"})`
    padding-bottom: ${e=>e.theme.size.static150};
`;ic.displayName="StyledHeadlineWrapper";const ac=ye.zo.div.withConfig({displayName:"StyledCopyWrapper"})`
    padding-bottom: ${e=>e.theme.size.static350};
`;ac.displayName="StyledCopyWrapper";const rc=ye.zo.div.withConfig({displayName:"StyledLeftTextWrapper"})`
    padding: ${e=>e.theme.size.dynamic0100}
        ${e=>e.theme.size.grid001} 0;

    @media (min-width: ${b.u3.b1920}px) {
        padding: ${e=>(0,ve.o3)(e.theme.direction,e.theme.size.dynamic0100,0,0,e.theme.size.grid002)};
    }
`;rc.displayName="StyledLeftTextWrapper";const oc=ye.zo.div.withConfig({displayName:"StyledRightTextWrapper"})`
    padding: ${e=>e.theme.size.dynamic0100}
        ${e=>e.theme.size.grid001} 0;
`;oc.displayName="StyledRightTextWrapper";const lc=ye.zo.div.withConfig({displayName:"GridContainer"})`
    display: grid;
    grid-template-rows: auto ${e=>e.theme.size.dynamic0200} auto 1fr; // Most height for last row
    grid-template-columns: repeat(24, 1fr);

    @media (min-width: ${b.u3.b1920}px) {
        grid-template-rows: auto ${e=>e.theme.size.dynamic0300} auto auto auto;
    }
`;lc.displayName="GridContainer";const sc=ye.zo.div.withConfig({displayName:"MainImageArea"})`
    grid-area: 1 / 2 / span 1 / span 13;
    margin-bottom: ${e=>e.theme.size.dynamic0200};

    @media (min-width: ${b.u3.b960}px) {
        grid-area: 1 / 3 / span 1 / span 12;
    }

    @media (min-width: ${b.u3.b1280}px) {
        grid-area: 1 / 4 / span 1 / span 11;
    }

    @media (min-width: ${b.u3.b1920}px) {
        grid-area: 1 / 4 / span 1 / span 10;
        margin-bottom: 0;
    }
`;sc.displayName="MainImageArea";const cc=ye.zo.div.withConfig({displayName:"MainTextArea"})`
	grid-area: 1 / 16 / span 1 / span 8;
	position: relative;
	margin-top: ${e=>e.theme.size.dynamic0130};
	margin-bottom: ${e=>e.theme.size.dynamic0200};

	@media (min-width: ${b.u3.b960}px) {
		grid-area: 1 / 16 / span 1 / span 7;
		margin-top: calc(
			${e=>e.theme.size.dynamic0130} +
				${e=>e.theme.size.dynamic0100}
		);
		// original margin d0130 + margin of blue rectangle d0100
	}

	@media (min-width: ${b.u3.b1280}px) {
		grid-area: 1 / 16 / span 1 / span 6;
	}

	@media (min-width: ${b.u3.b1920}px) {
		grid-area: 2 / 6 / span 3 / span 5;
		margin-top: ${e=>e.theme.size.dynamic0130};
		margin-bottom calc(2*${e=>e.theme.size.dynamic0200});
		// original margin d0200 + margin of the blue rectangle d0200
	}
`;cc.displayName="MainTextArea";const dc=ye.zo.div.withConfig({displayName:"LeftTeaserArea"})`
    grid-area: 2 / 2 / span 3 / span 10;

    @media (min-width: ${b.u3.b960}px) {
        grid-area: 2 / 3 / span 3 / span 9;
    }

    @media (min-width: ${b.u3.b1280}px) {
        grid-area: 2 / 4 / span 3 / span 8;
    }

    @media (min-width: ${b.u3.b1920}px) {
        grid-area: 1 / 15 / span 3 / span 7;
    }
`;dc.displayName="LeftTeaserArea";const mc=ye.zo.div.withConfig({displayName:"RightTeaserUpperArea"})`
    grid-area: 2 / 14 / span 2 / span 10;

    @media (min-width: ${b.u3.b960}px) {
        grid-area: 2 / 14 / span 2 / span 9;
    }

    @media (min-width: ${b.u3.b1280}px) {
        grid-area: 2 / 14 / span 2 / span 8;
    }

    @media (min-width: ${b.u3.b1920}px) {
        grid-area: 4 / 13 / span 1 / span 7;
    }
`;mc.displayName="RightTeaserUpperArea";const uc=ye.zo.div.withConfig({displayName:"RightTeaserBottomArea"})`
    grid-area: 4 / 14 / span 1 / span 10;

    @media (min-width: ${b.u3.b960}px) {
        grid-area: 4 / 14 / span 1 / span 9;
    }

    @media (min-width: ${b.u3.b1280}px) {
        grid-area: 4 / 14 / span 1 / span 8;
    }

    @media (min-width: ${b.u3.b1920}px) {
        display: block;
        grid-area: 5 / 13 / span 1 / span 7;
    }
`;uc.displayName="RightTeaserBottomArea",ye.zo.div.withConfig({displayName:"StyledHideFrom1920"})`
    @media (min-width: ${b.u3.b1920}px) {
        display: none;
    }
`.displayName="StyledHideFrom1920";const pc=ye.zo.div.withConfig({displayName:"DarkRectangle"})`
	position: relative;
	background-color: ${e=>e.theme.global.backgroundColor};
	margin:
		calc(-1*${e=>e.theme.size.static350})
		${e=>e.theme.size.grid002}
		${e=>e.theme.size.dynamic0200}
		0
	}; // NOTE: In RTL design is preserved as in LTR because the mobile carousel should look and work the same as in LTR

	@media (max-width: ${b.u3.b560-1}px) {
		&:before {
			content: '';
			width: 100%;
			height: calc(
				${e=>e.theme.size.grid020} -
					${e=>e.theme.size.static350}
			);
			background-color: white;
			position: absolute;
			left: 0;
		}
	}

	@media (min-width: ${b.u3.b560}px) {
		grid-area: 1 / 3 / span 2 / span 22;
		margin: 0;
		padding: 0;
	}

	@media (min-width: ${b.u3.b960}px) {
		grid-area: 1 / 4 / span 2 / span 20;
		margin-top: ${e=>e.theme.size.dynamic0100};
	}

	@media (min-width: ${b.u3.b1280}px) {
		grid-area: 1 / 5 / span 2 / span 18;
		margin-top: ${e=>e.theme.size.dynamic0100};
	}

	@media (min-width: ${b.u3.b1920}px) {
		grid-area: 1 / 5 / span 4 / span 11;
		margin: ${e=>e.theme.size.dynamic0200} 0;
	}
`;pc.displayName="DarkRectangle";const hc=ye.zo.div.withConfig({displayName:"InsideDarkRectangle"})`
    margin-right: calc(-1 * ${e=>e.theme.size.grid002}); // Always LTR
`;hc.displayName="InsideDarkRectangle";const gc=ye.zo.div.withConfig({displayName:"StyledMobileTextWrapper"})`
    padding: ${e=>e.theme.size.static350};
`;gc.displayName="StyledMobileTextWrapper",ye.zo.div.withConfig({displayName:"StyledBulletPaginationWrapper"})`
	position: absolute;
	top: ${e=>e.theme.size.grid020};
	padding-top: ${e=>e.theme.size.static150};
	padding-${e=>(0,ve.rz)(e.theme.direction)}: ${e=>e.theme.direction!==ve.Nm.RTL?e.theme.size.grid002:e.theme.size.grid004};
	direction: ltr;
`.displayName="StyledBulletPaginationWrapper";const fc=e=>{const{mainCopy:t,mainHeadline:n,mainImage:i,mainMediaInteractionElement:a,mainLink:r,leftImage:o,leftHeadline:s,leftCopy:c,leftLink:d,leftImageAspectRatio:m=Fi.oM["3:2"],rightImage:u,rightHeadline:p,rightCopy:h,rightLink:g,rightImageAspectRatio:f=Fi.oM["3:2"],mobileCarousel:y}=e,v=(e,t)=>l.createElement(Fi.Po,{ratio:t},l.createElement(Pn.r,{focalPoint:{x:"center",y:"center"}},e)),E=v(i,Fi.oM["3:2"]),w=l.createElement(l.Fragment,null,l.createElement(ic,null,n),l.createElement(ac,null,t),a,r),C=l.createElement(l.Fragment,null,v(o,m),l.createElement(rc,null,l.createElement(ic,null,s),l.createElement(ac,null,c),l.createElement(ac,null,d))),S=v(u,f),k=l.createElement(oc,null,l.createElement(ic,null,p),l.createElement(ac,null,h),l.createElement(ac,null,g)),L=e=>l.createElement(Fi.Po,{ratio:Fi.oM["1:1"]},l.createElement(Pn.r,{focalPoint:{x:"center",y:"center"}},e)),x=y([l.createElement(l.Fragment,{key:"mobile-carousel-item-0"},L(i),l.createElement(gc,null,w)),l.createElement(l.Fragment,{key:"mobile-carousel-item-1"},L(o),l.createElement(gc,null,l.createElement(ic,null,s),l.createElement(ac,null,c),d)),l.createElement(l.Fragment,{key:"mobile-carousel-item-2"},L(u),l.createElement(gc,{useRightPadding:!0},l.createElement(ic,null,p),l.createElement(ac,null,h),g))]);return l.createElement(l.Fragment,null,l.createElement(ta.L,{max:b.u3.b560},l.createElement(Sa.f,{theme:"inverted"},l.createElement(pc,null,l.createElement(hc,null,x)))),l.createElement(ta.L,{min:b.u3.b560},l.createElement(lc,null,l.createElement(Sa.f,{theme:"inverted"},l.createElement(pc,null),l.createElement(sc,null,E),l.createElement(cc,null,w)),l.createElement(dc,null,C),l.createElement(mc,null,S),l.createElement(uc,null,k))))};var yc=n(89332),vc=n(67678),bc=n(13856),Ec=n(57898),wc=n(58402);const Cc=x.default.div.withConfig({displayName:"StyledContainer"})`
    display: flex;
`;Cc.displayName="StyledContainer";const Sc=x.default.div.withConfig({displayName:"StyledInteractionElement"})`
    padding: ${e=>e.theme.size.static350};
    padding-top: 0;
    width: 100%;
    z-index: 1; // prevents Flyout from overlapping
`;Sc.displayName="StyledInteractionElement";const kc=(0,xe.Pi)((function({isShown:e,startLabel:t,endLabel:n}){const i=l.useContext(xs.f),[a,r]=l.useState(0),o=(0,F.V9)(),s=(0,wc.h)();if(!e)return null;const c=e=>{i.updateDrag({direction:"none",currentTime:e.value}),0===a&&(o.trackSliderElementLoad("mediaInteractionElement",s),r(a+1))};return l.createElement(Cc,null,l.createElement(z.xv,{appearance:z.C2.copy200,tag:z.rh.span},t),l.createElement(Sc,null,l.createElement(Ec.uP,{valueMin:bc.Gs,valueMax:i.duration,value:i.currentTime,fillProgress:!1,scrubberBaseSize:16,scrubberDraggedSize:20,onDragChange:c,onProgressBarKeyDown:(e,t)=>{const n=((e,t,n,i)=>{const a=t?yc.mN:yc.fg;let r=0;return e===vc.u.ArrowLeft&&(r=n-a,r=r<=0?0:r),e===vc.u.ArrowRight&&(r=n+a,r=r>=i?i:r),r})(e,t,i.currentTime,i.duration);c({value:n})}})),l.createElement(z.xv,{appearance:z.C2.copy200,tag:z.rh.span},n))})),Lc=(0,T.R)("vwa-ngw18/components/editorial/elements/interactionElement",kc),xc=(0,xe.Pi)((function(e){const{contentLabels:t,contentId:n,anchorId:i,contentName:a,tagTypeBroken:r,leftMediaAspectRatio:o,rightMediaAspectRatio:s,translations:c,plainMainHeading:d,plainLeftHeading:m,plainRightHeading:u,showMediaInteractionElement:p}=e,[h,g]=(0,l.useState)(0),f=(0,xe.hN)((()=>new xs.F)),y=l.createElement(xs.f.Provider,{value:f},l.createElement(Lc,{path:"superMediaInteractionElement",isShown:p})),v=l.createElement(Qe.$,{style:"H4",path:"superHeading"}),b=l.createElement(yt.s,{path:"superCopy"}),E=l.createElement(Wi.E,{path:"superLink"}),w=l.createElement(rt.s,{path:"leftMedia",useParentAspectRatio:!0,containerProps:{matchParent:!0}}),C=l.createElement(Qe.$,{style:"H4",path:"leftHeading"}),S=l.createElement(yt.s,{path:"leftCopy"}),k=l.createElement(Wi.E,{path:"leftLink"}),L=l.createElement(rt.s,{path:"rightMedia",useParentAspectRatio:!0,containerProps:{matchParent:!0}}),x=l.createElement(Qe.$,{style:"H4",path:"rightHeading"}),$=l.createElement(yt.s,{path:"rightCopy"}),_=l.createElement(Wi.E,{path:"rightLink"}),I=e=>{g(e)},T=Bn(c["carousel.slideXOfYLabel"]),N=[d,m,u],P=e=>l.createElement(Yt.a,{carouselId:`${n}-carousel`,activeSlide:h,onSlideChanged:I,useWiderSlides:!0,inactiveSlidesOpaque:!0,paginationItemLabels:N,paginationDefaultItemLabel:c["moodGallery.carouselItemLabel"],getXOfYLabel:T,galleryLabel:c["carousel.galleryLabel"],paginationLabel:c["carousel.gallerySlidesLabel"]},e);return l.createElement(B.V,{anchorId:i,title:"S130 Usp Section",bgColor:B.V.BG_COLOR_SECTION,tagTypeBroken:r},l.createElement(ee.U,{sectionId:n,anchorId:i,contentLabels:t,contentName:a},l.createElement(Q.a,null,(e=>{return l.createElement(l.Fragment,null,l.createElement(fc,{mainCopy:b,mainHeadline:v,mainImage:(t=e.length>0,l.createElement(xs.f.Provider,{value:f},l.createElement(rt.s,{path:"superMedia",useParentAspectRatio:!0,containerProps:{matchParent:!0},hideItemBasedDisclaimers:t,enableItemInteractiveDisclaimer:t,interactive:!p}))),mainMediaInteractionElement:y,mainLink:E,leftImage:w,leftHeadline:C,leftCopy:S,leftLink:k,leftImageAspectRatio:Ai.f[o],rightImage:L,rightHeadline:x,rightCopy:$,rightLink:_,rightImageAspectRatio:Ai.f[s],mobileCarousel:P}),l.createElement(Ba.e,{disclaimers:e}));var t}))))})),$c=((0,T.R)("vwa-ngw18/components/editorial/sections/uspSection",xc),(0,xe.Pi)((function(e){const{anchorId:t,validationError:n,validationMessages:i,tagTypeBroken:a,numberOfValidElements:r,personalizable:o,personalizableChildren:s}=e;if(n&&!g.C.isInEditor())return null;const c=[];for(let e=0;e<r;e++){const t=`item_${e}`;c.push(l.createElement(ci,{path:t,key:t,personalizable:!o&&s}))}return g.C.isInEditor()?l.createElement(Q.a,{getItemDisclaimers:!0},(e=>l.createElement(fr.m,{anchorId:t,emptyLabel:"S131 Homepage Stage Slider Section",validationMessages:i,validationError:n,tagTypeBroken:a},l.createElement(Te.Ar,null,l.createElement(bo.P,{anchorId:t},!n&&c),l.createElement(Ba.e,{disclaimers:e}))))):l.createElement(l.Fragment,null)})));(0,T.R)("vwa-ngw18/components/editorial/sections/homepageStageSliderSection",$c),n(72414);const _c=x.default.div.withConfig({displayName:"StyledTeaserItemContainer"})`
    --max-columns: 1;

    @media (min-width: ${b.u3.b560}px) {
        --max-columns: 2;
    }

    @media (min-width: ${b.u3.b960}px) {
        --max-columns: ${e=>e.numberOfColumnsOnDesktop};
    }

    --number-of-column-gaps: var(--max-columns);
    --column-gap: ${e=>e.theme.size.grid001};

    @media (min-width: ${b.u3.b560}px) {
        --number-of-column-gaps: calc(var(--max-columns) - 1);
    }

    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--column-gap);
    padding: 0 ${e=>e.theme.size.grid002};

    & > * {
        width: ${e=>e.theme.size.grid016};
    }

    ${e=>e.numberOfTeaserItems>1&&x.css`
            & > * {
                width: calc(
                    100% / var(--max-columns) -
                        (var(--column-gap) * var(--number-of-column-gaps)) /
                        var(--max-columns)
                );
            }
        `}
`;_c.displayName="StyledTeaserItemContainer";const Ic=x.default.div.withConfig({displayName:"StyledTextOnlyTeaserSection"})`
    display: grid;
    grid-row-gap: ${e=>e.theme.size.dynamic0250};
    justify-items: center;
`;Ic.displayName="StyledTextOnlyTeaserSection";const Tc=e=>e%3==0?3:e<6&&e%2==0?2:3,Nc=e=>{const{headline:t,children:n}=e,i=l.Children.count(n);return l.createElement(Ic,null,t||null,l.createElement(_c,{numberOfTeaserItems:i,numberOfColumnsOnDesktop:Tc(i)},n))},Pc=(0,xe.Pi)((e=>{const{anchorId:t,contentId:n,tagTypeBroken:i,personalizableChildren:a,cqItems:r,validationMessages:o,validationError:s,contentLabels:c,contentName:d}=e,m=mr(a,r),u=l.createElement(Qe.$,{path:"headline",order:"H2",style:"H2"});return g.C.isInEditor()?l.createElement(Q.a,null,(n=>l.createElement(fr.m,{anchorId:t,emptyLabel:"S135 Text Only Teaser Section",validationMessages:o,validationError:s,tagTypeBroken:i},l.createElement(Nc,{headline:u},Oc(e)),l.createElement(Ba.e,{disclaimers:n})))):l.createElement(Q.a,null,(i=>l.createElement(U.c,{name:"textOnlyTeaserSection"},l.createElement(ee.U,{anchorId:t,sectionId:n,contentLabels:c,teaserList:m,contentName:d},l.createElement(Nc,{headline:(0,je.x)(!r.headline.empty,u)},Oc(e)),l.createElement(Ba.e,{disclaimers:i})))))}));function Oc(e){const{numberOfValidElements:t,personalizable:n,personalizableChildren:i,topLineTextPosition:a}=e;return[...Array(t)].map(((e,r)=>{const o=`item_${r}`;return l.createElement(Ei,{path:o,key:o,personalizable:!n&&i,topLineTextPosition:a,hasSiblings:t>1})}))}(0,T.R)("vwa-ngw18/components/editorial/sections/textOnlyTeaserSection",Pc);function Rc(){return e=this,t=void 0,i=function*(){return new Promise(((e,t)=>{(0,m.L)()?"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e):t(new Error("DOM is available only in browser"))}))},new((n=void 0)||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}));var e,t,n,i}var zc=n(90669),Dc=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};const Ac="campaignID";let Mc=class{init(){const e=this.getCampaignParam();e&&this.storeCampaignParam(e)}getCampaignParam(){return new URL(window.location.href).searchParams.get(Ac)}storeCampaignParam(e){this.sessionStorage.set(Ac,e)}};Dc([(0,zc.f3)()],Mc.prototype,"sessionStorage",void 0),Dc([(0,zc.zY)()],Mc.prototype,"init",null),Mc=Dc([(0,zc.ri)("HttpParamCampaignService",{env:"client"})],Mc);var Bc=n(55480);function Fc(){const e=(0,Bc.t)();return{definition:e,service:C[e.id],env:"client"}}var Wc=n(54736),Hc=n(44124),jc=n(96701);function Vc(e,t,n,i,a){const l=new p,s=e.model[":path"];g.C.setIsInEditor(Boolean(e.wcmmode&&"disabled"!==e.wcmmode));const c=(0,f.u)(window.location.pathname);if(null!==c&&c!==e.path){const t=e.model[":children"];t[c]=t[e.path]}const d=r.ModelManager.initialize({modelClient:l,path:s,model:e.model});let m;if(e.spaGlobalConfig.integrator||g.C.isInEditor())m=Promise.resolve(e.asyncConfig);else{const t=void 0===(0,y.Rd)().asyncConfigPromise?fetch(e.spaGlobalConfig.asyncConfigUrl):(0,y.Rd)().asyncConfigPromise;if(!t)throw new Error("cannot configure application");m=t.then((e=>{return t=this,n=void 0,a=function*(){const t=yield e.json();return Promise.resolve(t.spaAsyncConfig)},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{s(a.next(e))}catch(e){r(e)}}function l(e){try{s(a.throw(e))}catch(e){r(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,l)}s((a=a.apply(t,n||[])).next())}));var t,n,i,a}))}Promise.all([m,d]).then((s=>{!function(){const e=r.ModelManager.modelStore.getData;r.ModelManager.modelStore.getData=(t,n)=>{const i=function(e){if(!e)return e;const t=e.match(/(.*)\/jcr:content$/);return t?t[1]:e}(t);return e.call(r.ModelManager.modelStore,i,n)}}(),(0,o.n)(k.s);const c=s[0],d=c.featureServicesConfiguration;if(((e,t)=>{e.addSingleton("SpaAsyncConfig",t),((e,t,n)=>{Object.keys(t).forEach((i=>{const a=i.substring(0,1).toUpperCase()+i.substring(1,i.length);e.addSingleton(a,t[i],{env:n})}))})(e,t)})(t,c),t.addSingleton("ModelManager",r.ModelManager),t.addSingleton("ModelClient",l),d&&d.clientBundleUrl){const r=d.clientBundleUrl;(0,o.Z)(r).then((r=>{const o=r.definitions;let l=function(e){return e.filter((e=>C[e.id])).map((e=>({definition:e,service:C[e.id],env:"client"})))}(o);const s=function(e,t){return e.filter((e=>void 0===t.find((t=>t.definition.id===e.id))))}(o,l);qc(e,c,t,l,s,o.map((e=>e.id)),a,i,n)}))}else qc(e,c,t,[],[],[],a,i,n)}))}function qc(e,t,n,i,a,r,c,m,u){const p=e.spaGlobalConfig.loginModel;i=function(e,t){return e.enabled?t:t.filter((e=>"vw:authService"!==e.definition.id))}(p,i),a=function(e,t){return e.enabled?t:t.filter((e=>"gfa:auth-service"!==e.id))}(p,a),function(e,t,n=[]){[S(e.applicationTrackingData,t),Fc()].forEach((e=>{n.find((t=>t.definition.id===e.definition.id))||n.push(e)}))}(t,n,i),function(e,t){if(e.enabled){const n=function(e){const t=e.legalEntityMapping,n=e.fagMainLegalEntity,i={};return t&&t.forEach((e=>i[e.legalEntity]={fag:e.fag,scopes:e.scopes,mainEntity:e.legalEntity===n})),{legalEntityMapping:i}}(e);t.push((0,Wc.defineAuthServiceConfig)(n))}}(p,a);const g={hydrating:!1};(0,h.Y4)(e.spaGlobalConfig,t,n,o.Z,"client",i,a,r,c,void 0,g);const f=e.spaGlobalConfig.clientsideMockEnabled&&(0,y.Rd)().config.getBoolean("mockEnabled");f&&c.general.warn("mocks are enabled"),n.initSingletons("client",f);const b=n.getSingleton("FeatureHub");!function(e,t){if(e.spaGlobalConfig.clientsideMockEnabled){const e=window.localStorage.getItem("vwa_d6_cms.config.extra_wait_before_render");if(e&&e.match(/^\d+$/)){const n=parseInt(e,10);if(n>0)return t.general.debug("waiting an extra %s ms to hydrate application",n),e=>new Promise((t=>{setTimeout((()=>{(0,Hc.TA)(e),t({})}),n)}))}}return Hc.TA}(e,c)((()=>{const e=document.getElementById(m);if(e){const t={featureAppManager:b.featureAppManager};if(e.innerText.length>0){const i=n.getSingleton("SerializedStateManager"),a=(()=>{const e=document.querySelector('script[type="x-feature-hub/serialized-states"]');return e&&e.textContent||void 0})();a&&i.setSerializedStates(a),Promise.all([...L().map((e=>b.featureAppManager.preloadFeatureApp(e))),Rc()]).then((()=>{c.general.debug("start hydration"),g.hydrating=!0,s.hydrate(l.createElement(d,{registry:n},l.createElement(v.n,{value:t},l.createElement(u,null))),e,(()=>{g.hydrating=!1;const e=n.getSingleton("SpaGlobalConfig").personalizationConfig.timeout,t=window.location.pathname;setTimeout((()=>{window.location.pathname===t&&(jc.W.showDefault(),c.personalization.debug("removing flicker defender"))}),e)}))}))}else s.render(l.createElement(d,{registry:n},l.createElement(v.n,{value:t},l.createElement(u,null))),e)}else c.general.error("cannot find react mount point")}))}function Gc(e){const t=(n=e,(0,y.Rd)()[n]);var n;return t?t.promise:void 0}"undefined"!=typeof window&&performance.mark("startRender"),function(e){return t=this,n=void 0,a=function*(){if(!(0,m.L)())return e(),Promise.resolve();const t=[Gc("polyfillLoaded"),Gc("priorityLoaded"),Gc("priorityExecuted")].filter(Boolean);return Promise.all(t).then(e)},new((i=void 0)||(i=Promise))((function(e,r){function o(e){try{s(a.next(e))}catch(e){r(e)}}function l(e){try{s(a.throw(e))}catch(e){r(e)}}function s(t){var n;t.done?e(t.value):(n=t.value,n instanceof i?n:new i((function(e){e(n)}))).then(o,l)}s((a=a.apply(t,n||[])).next())}));var t,n,i,a}((function(){return e=this,t=void 0,r=function*(){yield Rc();const e=function(){const e=document.getElementById("spaModel");if(!e)throw new Error("cannot find spa model");return JSON.parse(e.innerHTML)}(),{log:t}=(0,y.Rd)();Vc(e,(0,i.tk)(t),a.N,"reactmount",t)},new((n=void 0)||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}));var e,t,n,r}))},58795:(e,t,n)=>{"use strict";n.d(t,{vR:()=>i,e3:()=>p});var i,a=n(79613),r=n(32667),o=n(49181),l=n(52745),s=n(67294),c=n(78384);!function(e){e[e.ERROR=0]="ERROR",e[e.WARNING=1]="WARNING",e[e.INFO=2]="INFO"}(i||(i={}));const d={[i.ERROR]:a.W.color["white-000"],[i.WARNING]:a.W.color["black-000"],[i.INFO]:a.W.color["white-000"]},m={[i.ERROR]:a.W.color["red-100"],[i.WARNING]:a.W.color["yellow-000"],[i.INFO]:a.W.color["blue-200"]},u=c.default.div.withConfig({displayName:"StyledAlertBox"})`
    background-color: ${e=>m[e.severity]};
    color: ${e=>d[e.severity]};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
`;u.displayName="StyledAlertBox";const p=e=>s.createElement(u,{severity:e.severity||i.ERROR},s.createElement(r.W,{padding:o.X.dynamic0100,wrap:l.Hq.always,gutter:o.X.dynamic0020},e.children))},88257:(e,t,n)=>{"use strict";n.d(t,{E:()=>r,P:()=>l});var i=n(67294),a=n(78384);const r=68,o=a.default.div.withConfig({displayName:"StyledAnchorTarget"})`
    // NOTE: Anchor scroll jump vs topbar overlap
    // - "target" is triggered with ID anchor on this element on click
    // - in that case, the invisible element on "before" is moved out of the area in height of topbar
    // - browser scrolls to this offset element
    // - there are no margin issues if used this way
    // - this technique works reliably only on "display: block" elements
    // - any use on inline, inline-block, even flex or tables works differently or not at all in most browsers

    outline: none;

    &:target::before {
        display: block;
        content: '';
        margin-top: -${r}px;
        height: ${r}px;
        visibility: hidden;
    }
`;o.displayName="StyledAnchorTarget";class l extends i.Component{render(){const{anchorId:e,innerRef:t,className:n,children:a,isSection:r}=this.props;return i.createElement(o,{as:r?"section":"div",id:e,ref:t,className:n,tabIndex:-1},a)}}},21118:(e,t,n)=>{"use strict";n.d(t,{W:()=>d,a:()=>m});var i=n(67294),a=n(78384);const r=a.default.div.withConfig({displayName:"StyledMediaInfoBox"})`
    display: block;
    position: absolute;
    box-sizing: border-box;
    width: auto;
    height: initial;
    bottom: auto;
    right: 10px;
    top: 20px;
    left: 10px;
    z-index: 10;
    color: #fff;
    font-size: 10px;
    line-height: 12px;
    text-align: right;
`;r.displayName="StyledMediaInfoBox";const o=a.default.div.withConfig({displayName:"StyledMediaInfo"})`
    display: block;
    margin-top: 5px;
`,l=a.default.div.withConfig({displayName:"StyledMediaInfoInner"})`
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
`,s=a.default.div.withConfig({displayName:"StyledLabel"})`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
`,c=a.default.div.withConfig({displayName:"StyledWarning"})`
    color: salmon;
    font-weight: bold;
    font-size: 12px;
`,d=e=>i.createElement(r,{"data-uitest-role":"mediainfobox"},e.children),m=e=>i.createElement(o,null,i.createElement(l,null,e.label&&i.createElement(s,null,e.label),e.warning&&i.createElement(c,null,"WARNING: ",e.warning),e.info&&i.createElement("div",null,e.info)))},69522:(e,t,n)=>{"use strict";n.d(t,{V:()=>m});var i=n(67294),a=n(78384),r=n(46978),o=n(58795);const l=a.default.div.withConfig({displayName:"StyledWrapper"})`
    position: relative;
    height: 100%;
`,s="20px",c=a.default.div.withConfig({displayName:"StyledContent"})`
    position: relative;
    height: calc(100% - ${s});
`,d=a.default.label.withConfig({displayName:"StyledLabel"})`
    display: block;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: ${s};
    margin-top: 0;
    padding: 3px;
    border-bottom: 2px solid #fff;
    font-size: 10px;
    text-align: center;
    color: #ffffff;
    background-color: ${e=>e.bgColor};
    white-space: nowrap;

    span {
        text-transform: uppercase;
    }
`;d.displayName="StyledLabel";class m extends i.Component{constructor(){super(...arguments),this.alertBox=()=>i.createElement(o.e3,null,i.createElement("div",null,"The content labels of this section are broken. Please save them again."))}render(){const{anchorId:e,title:t="untitled component",bgColor:n=m.BG_COLOR_ELEMENT,tagTypeBroken:a=!1}=this.props;return r.C.isInEditor()?i.createElement(l,null,i.createElement(d,{className:"authoring-label",bgColor:n},i.createElement("span",null,t),e&&i.createElement(i.Fragment,null,"Â - Anchor ID: ",e)),i.createElement(c,null,a&&this.alertBox(),this.props.children)):this.props.children}}m.BG_COLOR_SECTION_GROUP="rgba(51, 9, 99,0.5)",m.BG_COLOR_SECTION="rgba(0,67,122,0.35)",m.BG_COLOR_ITEM="rgba(0,138,201,0.35)",m.BG_COLOR_ELEMENT="rgba(0,0,0,0.15)"},85279:(e,t,n)=>{"use strict";n.d(t,{S:()=>l});var i=n(73154),a=n(67294),r=n(64202),o=n(41979);function l(e){const t=(0,r.V9)(),{link:n}=e;return a.createElement(i.xv,{appearance:i.C2.copy150,tag:i.rh.span},a.createElement(o.O,{href:n.url,target:n.linkWindowTarget,trackingActionOverride:function(){const{url:e,title:i}=n;t.trackFooterLinkClick(e,i)}},n.title))}},22114:(e,t,n)=>{"use strict";n.d(t,{ct:()=>l,Ad:()=>c});var i=n(67294),a=n(78384),r=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};const o=a.default.img.withConfig({displayName:"Image"})`
    display: block;
    width: 100%;
    ${e=>e.reduceBrightness&&"filter: brightness(80%)"};
`;o.displayName="Image";const l=i.forwardRef(((e,t)=>{const{alt:n}=e,a=r(e,["alt"]);return i.createElement(o,Object.assign({alt:"","aria-hidden":!0},a,{ref:t}))}));l.displayName="DecorativeImage";const s=i.forwardRef(((e,t)=>{const{src:n,srcPlaceholder:a,srcSet:l,sizes:s,className:c,alt:d,reduceBrightness:m}=e,u=r(e,["src","srcPlaceholder","srcSet","sizes","className","alt","reduceBrightness"]);return i.createElement(i.Fragment,null,i.createElement("noscript",null,i.createElement(o,Object.assign({alt:d,className:c,sizes:s,src:n,srcSet:l,reduceBrightness:m},u))),i.createElement(o,Object.assign({className:`lazyload ${c||""}`,src:a||"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==","data-src":n,"data-srcset":l,"data-sizes":s,alt:d,ref:t,reduceBrightness:m},u)))}));s.displayName="LazyImage";const c=i.forwardRef(((e,t)=>{const{alt:n,reduceBrightness:a}=e,o=r(e,["alt","reduceBrightness"]);return i.createElement(s,Object.assign({reduceBrightness:a,alt:""},o,{ref:t}))}));c.displayName="DecorativeLazyImage"},66016:(e,t,n)=>{"use strict";n.d(t,{cb:()=>i,_n:()=>h});var i,a,r=n(67294),o=n(78384),l=n(46410),s=n(83028),c=n(17061),d=n(86119),m=n(64317);function u(e,t){switch(t){case i.FLYOUT:return{top:e.size.dynamic0050,right:e.size.dynamic0050};case i.TOP_LEFT:return{top:e.size.dynamic0050,left:e.size.dynamic0050};case i.TOP_RIGHT:return{top:e.size.dynamic0050,right:e.size.dynamic0050}}}!function(e){e.FLYOUT="FLYOUT",e.TOP_LEFT="TOP_LEFT",e.TOP_RIGHT="TOP_RIGHT"}(i||(i={})),function(e){e[e.TextPrimary=0]="TextPrimary",e[e.BackgroundPrimary=1]="BackgroundPrimary"}(a||(a={}));const p=o.default.div.withConfig({displayName:"StyledPositioning"})`
    position: fixed;
    top: ${e=>u(e.theme,e.position).top};
    right: ${e=>u(e.theme,e.position).right};
    left: ${e=>u(e.theme,e.position).left};
    bottom: ${e=>u(e.theme,e.position).bottom};

    @media (max-width: ${l.u3.b560-1}px) {
        ${e=>e.position===i.FLYOUT&&o.css`
                right: auto;
                left: 0;
                padding: 0
                    calc(
                        (
                                ${e.theme.size.grid002} -
                                    ${e.theme.size.static350}
                            ) / 2
                    );
            `}
    }

    @media (min-width: ${l.u3.b560}px) {
        ${e=>e.position===i.FLYOUT&&o.css`
                right: calc(
                    ${e.theme.size.grid009} +
                        ${u(e.theme,e.position).top}
                );
            `}
    }
`,h=({onExited:e,in:t,position:n,theme:a,onClick:o,btnCloseLabel:l})=>r.createElement(m.CSSTransition,{onExited:e,in:t,timeout:0},r.createElement(s.f,{theme:a},r.createElement(p,{position:n||i.TOP_RIGHT},r.createElement(c.M,{tag:"button",onClick:o,ariaLabel:l,emphasis:"tertiary",icon:r.createElement(d.x,{ariaHidden:!0})}))));h.displayName="LayerCloseButton"},57721:(e,t,n)=>{"use strict";n.d(t,{e:()=>b});var i=n(67294),a=n(33700),r=n(32667),o=n(52745),l=n(49181),s=n(17061),c=n(74003),d=n(81697),m=n(93346),u=n(86119),p=n(19139);const h=a.zo.div.attrs((()=>({"data-autofocus-inside":!0}))).withConfig({displayName:"AutoFocusInside"})`
    display: ${e=>e.cssDisplay||"block"};
`,g=a.zo.div.withConfig({displayName:"StyledLightbox"})`
    max-height: calc(
        ${m.gr} - (${e=>e.theme.size.dynamic0250} * 2)
    );
    position: relative;
`;g.displayName="StyledLightbox";const f=a.zo.header.withConfig({displayName:"StyledHeader"})`
    display: flex;
    background: ${e=>e.theme.global.backgroundColor};
    justify-content: space-between;
`,y=a.zo.div.withConfig({displayName:"StyledCTAWrapper"})`
    position: absolute;
    ${e=>(0,d.lp)(e.theme.direction)}: ${e=>e.theme.size.static350};
    top: 25px;
`,v=(0,d.$r)([2,1]),b=e=>{const{heading:t,disclaimer:n,copy:a,primaryButton:d,secondaryButton:m,switchButtonOrder:b,onClose:E,btnCloseLabel:w}=e;return i.createElement(g,null,i.createElement(r.W,null,i.createElement(r.W,{wrap:o.Hq.always,gutter:l.X.dynamic0100,padding:{top:l.X.dynamic0150,bottom:l.X.dynamic0150,left:v,right:v}},i.createElement(f,null,t,i.createElement(y,null,i.createElement(s.M,{icon:i.createElement(u.x,{ariaHidden:!0}),tag:"button",key:"close",onClick:E,emphasis:"tertiary","aria-label":w}))),a,n&&i.createElement(p.iy,null,i.createElement(c.I,{disclaimers:[{text:n}]})),i.createElement(r.W,{gutter:l.X.static300,padding:l.X.dynamic0100,horizontalAlign:o._N.center,shrinkContent:!0},m&&b&&m,i.createElement(h,{cssDisplay:"inline-block"},d),m&&!b&&m))))}},63877:(e,t,n)=>{"use strict";n.d(t,{dl:()=>x,xn:()=>_,jm:()=>I,KV:()=>T,WY:()=>N});var i=n(67294),a=n(78384),r=n(46410),o=n(42831),l=n(32667),s=n(49181),c=n(52745),d=n(73154),m=n(41534),u=n(81697),p=n(80955),h=n(64202),g=n(56646),f=n(41726),y=n(41979);const v=a.default.div.withConfig({displayName:"StyledHeadingWrapper"})`
    padding-right: ${e=>e.theme.size.grid002};

    @media (min-width: ${r.u3.b560}px) {
        padding-right: ${e=>e.theme.size.grid001};
    }
`;v.displayName="StyledHeadingWrapper";const b=a.default.div.withConfig({displayName:"StyledFlyoutContainer"})`
    height: 100vh;
    display: flex;
    flex-direction: column;
    ${e=>e.isLoggedIn&&"justify-content: space-between;"};
`;b.displayName="StyledFlyoutContainer";const E=a.default.div.withConfig({displayName:"StyledUserInfoContainer"})`
    margin-top: ${e=>e.theme.size.dynamic0050};
    margin-left: ${e=>e.theme.size.grid002};
    margin-right: ${e=>e.theme.size.grid002};

    @media (min-width: ${r.u3.b560}px) {
        margin-left: ${e=>e.theme.size.grid001};
        margin-right: ${e=>e.theme.size.grid001};
    }
`;E.displayName="StyledUserInfoContainer";const w=a.default.div.withConfig({displayName:"StyledFooterContainer"})`
    padding-bottom: ${e=>e.theme.size.static400};
    margin-left: ${e=>e.theme.size.grid002};
    margin-right: ${e=>e.theme.size.grid002};

    @media (min-width: ${r.u3.b560}px) {
        margin-left: ${e=>e.theme.size.grid001};
        margin-right: ${e=>e.theme.size.grid001};
    }
`;w.displayName="StyledFooterContainer";const C=a.default.div.withConfig({displayName:"StyledIconWrapper"})`
    color: ${e=>e.theme.interaction.recipe750.default};
    background-color: ${e=>e.theme.separatorColor};
    padding: 10px;
    border-radius: 22px;
    // NOTE: get rid of text size that influences container height
    font-size: 0;
`;C.displayName="StyledIconWrapper";const S=a.default.div.withConfig({displayName:"StyledFooterIconWrapper"})`
    display: inline-block;
    vertical-align: top;
    margin-${e=>(0,u.lp)(e.theme.direction)}: ${e=>e.theme.size.static150};
`;S.displayName="StyledFooterIconWrapper";const k=a.default.div.withConfig({displayName:"StyledEmailWrapper"})`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: ${(0,o.C)(15)};
    @media (min-width: ${r.u3.b560}px) {
        max-width: ${e=>e.theme.size.grid005};
    }
`;k.displayName="StyledEmailWrapper";const L=a.default.div.withConfig({displayName:"StyledScrollWrapper"})`
    margin: auto 0;
`;L.displayName="StyledScrollWrapper";const x=(0,p.Pi)((()=>{const e=(0,h.r0)(),t=(0,h.Xy)();return e.isLoggedIn?i.createElement(g.G,{path:t.flyoutLoggedInPath||""}):i.createElement(f.F,{path:t.flyoutLoggedOutPath||""})}));x.displayName="LoginFlyout";const $=(0,u.$r)([2,1]),_=e=>i.createElement(b,{isLoggedIn:Boolean(e.userInfo||e.footer)},e.userInfo,i.createElement(L,null,i.createElement(l.W,{gutter:s.X.dynamic0150,padding:{top:s.X.static400,left:$,right:$,bottom:s.X.static400},wrap:c.Hq.always},i.createElement(l.W,{gutter:s.X.dynamic0100,wrap:c.Hq.always},i.createElement(v,null,e.heading),e.copy),e.button)),e.footer);_.displayName="LoginFlyout";const I=e=>i.createElement(E,null,i.createElement(l.W,{wrap:c.Hq.never,shrinkContent:!0,horizontalAlign:c._N.spaceBetween,verticalAlign:c.Qj.center},i.createElement(l.W,{wrap:c.Hq.always},i.createElement(d.xv,{appearance:d.C2.copy150,bold:!0},e.name),e.email&&i.createElement(k,null,i.createElement(d.xv,{appearance:d.C2.copy150,color:d.d9.inherit,tag:d.rh.span},e.email))),i.createElement(C,null,i.createElement(m.N,null))));function T(e){return i.createElement(d.xv,{appearance:d.C2.copy150,tag:d.rh.span},i.createElement(y.O,{href:e.href,linkName:e.label,onClick:e.onClick,ignoreExternalLinkLightbox:!0},i.createElement(S,null,e.icon),e.label))}I.displayName="LoginFlyoutUserInfoContainer";const N=e=>i.createElement(w,null,i.createElement(l.W,{wrap:c.Hq.always,gutter:s.X.dynamic0050},e.children));N.displayName="LoginFlyoutFooter"},47277:(e,t,n)=>{"use strict";n.d(t,{E:()=>v});var i=n(80955),a=n(67294),r=n(78384),o=n(64202),l=n(62300),s=n(96701),c=n(5098),d=n(14980),m=n(6543),u=n(5118),p=n(14272),h=n(91727);const g=(0,r.default)(p.a).withConfig({displayName:"StyledPersonalizationIncludeContainer"})`
    display: inline-block;
    width: 100%;
`;g.displayName="StyledPersonalizationIncludeContainer";const f=(0,r.default)(p.a).withConfig({displayName:"StyledPersonalizationIncludeWrapper"})`
    html:not(.js-enabled) & {
        opacity: 1;
    }
    body.${s.U} & {
        opacity: 1;
    }
    display: inline-block;
    width: 100%;
    opacity: ${e=>e.hideDefault?0:1};
    border: ${e=>e.isInVEC?`6px solid ${e.theme.interaction.recipe370.default}`:""};
`;f.displayName="StyledPersonalizationIncludeWrapper";const y=(0,i.Pi)((e=>{const t=(0,o.ts)(),n=(0,o.wL)(),i=(0,h.G)(),{path:r,containerProps:s,extraProps:p,isNotEditable:y,personalizable:v,placeholderId:b,mboxId:E}=e,w=t.getContent(r,E);w&&n.personalization.debug("perso include %s, client=%s, data loaded=%s, resource=%s",e.path,i,w.loaded,w.resource);const C=r;if(i&&w&&w.loaded&&w.resource){n.personalization.info("displaying personalized content for %s",e.path);const{resource:{path:t,resourceType:i}}=w;return a.createElement(l.l.Provider,{value:{isPersonalizable:v,contentId:w.resource.contentId,placeholderId:b,wasPersonalized:!0}},a.createElement(m.U,{path:w.resource.path},a.createElement(g,null,(e=>a.createElement(d.y,{key:t,path:t,resourceType:i,extraProps:p,isNotEditable:y,containerProps:Object.assign(Object.assign({},s),{className:e.className}),defaultContentPath:C})))))}{const t=!i||Boolean(w&&!w.loaded),r=(0,c.P1)(e.path);return w&&n.personalization.debug("hiding default content for %s: %s",e.path,t),a.createElement(l.l.Provider,{value:{isPersonalizable:v,isLoading:t,contentId:b,placeholderId:b,wasPersonalized:!1}},a.createElement(f,{hideDefault:t,isInVEC:i&&(0,u.s)()},(t=>a.createElement(d.y,Object.assign({},e,{containerProps:Object.assign(Object.assign({},s),{className:t.className,id:r}),extraProps:p})))))}}));y.displayName="InternalPersonalizationInclude";const v=e=>{const t=(0,o.V7)(),n=(0,o.dv)(),i=(0,o.oh)(),r=(0,o.Y7)().getCurrentPageRootModel(),l=r?r.aemResourcePath:"/",s=i.value||l,{path:c}=e;if(!c)return null;const u=c.startsWith("/")?c:`${s}/${c}`,p=t.getData(u,!1),h=Boolean(n.enabled&&(e.personalizable||p&&p.personalizable)),g=function(e){return e?e.placeholderId?e.placeholderId:e.contentId||"":""}(p),f=p?p.mboxId:"";return h?a.createElement(y,Object.assign({},e,{path:`${s}/${e.path}`,personalizable:h,placeholderId:g,mboxId:f})):a.createElement(m.U,{path:u},a.createElement(d.y,Object.assign({},e)))};v.displayName="PersonalizationInclude"},32221:(e,t,n)=>{"use strict";n.d(t,{t:()=>l,$l:()=>s,tk:()=>d,hl:()=>u,pJ:()=>h});var i=n(67294),a=n(5353),r=n(64202),o=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};const l=e=>(0,r.xh)()?i.createElement(p,Object.assign({},e)):i.createElement(u,Object.assign({},e)),s=e=>(0,r.xh)()?i.createElement(h,Object.assign({},e)):i.createElement(d,Object.assign({},e)),c=e=>null==e?void 0:e.map(((e,t)=>i.createElement("source",{media:null==e?void 0:e.mediaQuery,srcSet:null==e?void 0:e.srcSet,sizes:null==e?void 0:e.sizes,key:e?`${e.mediaQuery}-${t}`:t}))),d=i.forwardRef(((e,t)=>{const{alt:n,config:r}=e,l=o(e,["alt","config"]);return i.createElement("picture",null,c(r),i.createElement(a.Ee,Object.assign({alt:"","aria-hidden":!0},l,{ref:t})))}));d.displayName="DecorativePicture";const m="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9' />",u=i.forwardRef(((e,t)=>{const{alt:n,className:r,config:o,reduceBrightness:l,sizes:s,src:d,srcPlaceholder:u,srcSet:p}=e;return i.createElement("picture",null,c(o),i.createElement(a.Ee,{className:r,src:u||m,"data-src":d,"data-srcset":p,"data-sizes":s,alt:n,ref:t,reduceBrightness:l}))})),p=i.forwardRef(((e,t)=>{const{alt:n,className:r,config:o,reduceBrightness:l,sizes:s,src:c,srcPlaceholder:d,srcSet:p}=e;return i.createElement(i.Fragment,null,i.createElement("noscript",null,i.createElement(u,Object.assign({},e))),i.createElement("picture",null,null==o?void 0:o.map(((e,t)=>i.createElement("source",{media:null==e?void 0:e.mediaQuery,"data-srcset":null==e?void 0:e.srcSet,"data-sizes":null==e?void 0:e.sizes,key:e?`${e.mediaQuery}-${t}`:t}))),i.createElement(a.Ee,{className:`lazyload ${r||""}`,src:d||m,"data-src":c,"data-srcset":p,"data-sizes":s,alt:n,ref:t,reduceBrightness:l})))}));p.displayName="LazyPicture";const h=i.forwardRef(((e,t)=>{const{alt:n,reduceBrightness:a}=e,r=o(e,["alt","reduceBrightness"]);return i.createElement(p,Object.assign({reduceBrightness:a,alt:"","aria-hidden":!0},r,{ref:t}))}));h.displayName="DecorativeLazyPicture"},79838:(e,t,n)=>{"use strict";n.d(t,{_:()=>u});var i=n(67294),a=n(78384),r=n(64202),o=n(28025),l=n(59638);const s=a.default.div.withConfig({displayName:"StyledResponsiveWrapper"})`
    display: ${e=>"hide"===e.ifTrue?"block":"none"};
    @media ${e=>e.mediaQuery} {
        display: ${e=>"hide"===e.ifTrue?"none":"block"};
    }
    ${e=>e.matchParent?"height: 100%;":void 0}
`;function c(e){return!(0,l.L)()||(window.matchMedia(e.mediaQuery||"").matches?"hide"!==e.ifTrue:"hide"===e.ifTrue)}function d(e){const{configs:t}=e,n=(0,r.kH)(),a=function(e){const t=i.useCallback((()=>e.find(c)),[e]),[n,a]=i.useState(t());return i.useEffect((()=>{function e(){const e=t();e!==n&&a(e)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[n,t]),n}(t);return i.createElement(o.YN.Provider,{value:Object.assign(Object.assign({},n),{ratio:a?a.aspectRatio:n.ratio,sizes:a?a.sizes:n.sizes})},e.children)}function m(e){const t=(0,r.kH)();return i.createElement(i.Fragment,null,e.configs.map((n=>i.createElement(o.YN.Provider,{value:Object.assign(Object.assign({},t),{ratio:n.aspectRatio,sizes:n.sizes}),key:`${n.mediaQuery}-${n.ifTrue}`},i.createElement(s,Object.assign({},n,{matchParent:e.matchParent}),e.children)))))}function u(e){return(0,r.VY)().state.initialRender?i.createElement(m,Object.assign({},e)):i.createElement(d,Object.assign({},e))}},10194:(e,t,n)=>{"use strict";n.d(t,{vj:()=>_,xQ:()=>R,OJ:()=>O});var i=n(67294),a=n(78384),r=n(73154),o=n(81697),l=n(5649),s=n(1413),c=n(46978),d=n(2987),m=n(49410),u=n(41979),p=n(37772),h=n(64202),g=n(97597),f=n(74028);const y=a.default.div.withConfig({displayName:"StyledBullet"})`
	font-weight: bold;
	padding-${e=>(0,o.lp)(e.theme.direction)}: ${e=>e.theme.size.static250};
	vertical-align: middle;
	font-size: ${e=>e.theme.textAppearances.copy200.fontSize};
	line-height: ${e=>e.theme.textAppearances.copy200.lineHeight};
	display: inline-block;
`,v=a.default.div.withConfig({displayName:"ContentWrapper"})`
    display: table-row;
`,b=a.default.ol.withConfig({displayName:"StyledOrderedList"})`
    list-style-type: none;
    counter-reset: orderedlistcounter;

    & > li {
        counter-increment: orderedlistcounter;
    }

    & > li > ${v} > ${y}:before {
        content: counter(orderedlistcounter, decimal-leading-zero);
        word-break: normal;

        &:lang(ko) {
            word-break: keep-all;
        }
    }
`,E=a.default.ul.withConfig({displayName:"StyledUnorderedList"})`
    list-style-type: none;

    & > li > ${v} > ${y}:before {
        content: ' ';
        display: block;
        height: 2px;
        width: 1.125em;
        background-color: ${e=>e.theme.text.color.primary};
    }
`,w=a.default.li.withConfig({displayName:"StyledListItem"})`
    margin-bottom: calc(${e=>e.theme.size.dynamic0020} * 2);
`,C=a.default.div.withConfig({displayName:"TextWrapper"})`
    display: table-cell;
`,S=e=>{const{children:t,component:n}=e,a=i.Children.toArray(t).filter(i.isValidElement);return a.length?i.createElement(n,null,a.map((e=>{const t=null===e.key?void 0:e.key;return i.createElement(w,{key:t},i.createElement(v,null,i.createElement(y,null),i.createElement(C,null,e)))}))):null},k=e=>{const{children:t}=e;return i.createElement(S,{component:b},t)},L=e=>{const{children:t}=e;return i.createElement(S,{component:E},t)},x=a.default.span.withConfig({displayName:"StyledDropCap"})`
    float: ${e=>(0,o.rz)(e.theme.direction)};
    min-width: ${e=>e.theme.size.dynamic0250};
    margin-right: ${e=>e.theme.size.static150};
    margin-top: calc(
        ${e=>e.theme.textAppearances.headline550.fontSize} -
            ${e=>e.theme.textAppearances.headline550.lineHeight}
    );
    text-align: center;
`,$=({children:e})=>i.createElement(x,null,i.createElement(r.xv,{appearance:r.C2.headline550,tag:r.rh.span},e)),_="120px",I=["ol","ul"],T=["br","hr"],N=a.default.sup.withConfig({displayName:"StyledSup"})`
    margin-${e=>(0,o.rz)(e.theme.direction)}: ${e=>e.addSpace?e.theme.size.static100:""}
    margin-inline-start: ${e=>e.addSpace?e.theme.size.static100:""};
    white-space: nowrap;
`;N.displayName="StyledSup";const P=a.default.span.withConfig({displayName:"StyledAuthorRichtext"})`
    min-width: ${_};
`;function O(e){const{disclaimers:t=[],addSpace:n=!1}=e,a=(0,s.p)(t),{disclaimerLabels:r}=(0,h.WS)(),{enablePageInteractiveDisclaimers:o}=(0,h.yR)(),l=t.filter((e=>"T5_INLINE"===e.displayType)),c=o?[]:a.filter((e=>void 0!==e.identifier&&"T2_PAGE_BASED"===e.displayType)),u=a.filter((e=>void 0!==e.identifier&&"T6_OPENABLE"!==e.displayType&&(!o&&"T2_PAGE_BASED"!==e.displayType||o))),p=a.filter((e=>void 0!==e.identifier&&"T6_OPENABLE"===e.displayType&&e.toggleOpen));return i.createElement(i.Fragment,null,c.length>0&&i.createElement(N,{addSpace:n},c.map((e=>e.identifier)).join(s.y)),u.length>0&&u.map((e=>i.createElement(N,{addSpace:n,key:`disclaimer-${e.identifier}`},"â ",i.createElement(g.s,{disclaimer:e,badgeToggleLabel:r.badgeToggleLabel})))),p.length>0&&p.map((e=>i.createElement(N,{addSpace:n},"â ",i.createElement(f.d,{identifier:e.identifier,onClick:e.toggleOpen,ariaLabel:r.badgeToggleLabel+" "+e.identifier},e.identifier)))),l.map(((e,t)=>i.createElement(i.Fragment,{key:e.text},n&&" ",i.createElement(d.c,{name:"richtextInlineDisclaimer"},i.createElement(m.J,{__content_is_html_and_i_know_for_sure_it_is_safe_and_wont_cause_xss_vulnerability:!0},e.text)),t!==l.length-1&&" "))))}function R(e){let t;const n=(0,p.Z)(e.cqPath),{richtext:a,useDropCap:o=!1,appearance:s,tag:h,textAlign:g,bold:f,inheritColor:y,disableFormatting:v}=e;if(t=o,!(a&&0!==a.length||c.C.isInEditor()))return null;const b=a&&0!==a.length?a.map((function e(a,o){switch(a.kind){case"htmlElement":return function(t,n){return-1!==I.indexOf(t.tagName)?function(t,n){const a="ol"===t.tagName?k:L,o=t.children;return i.createElement(a,{key:n},o.map(((t,n)=>t.children?i.createElement(r.xv,{key:n,appearance:r.C2.copy200,color:r.d9.inherit},t.children.map(e)):null)))}(t,n):-1!==T.indexOf(t.tagName)?function(e,t){return i.createElement(e.tagName,{key:t})}(t,n):function(t,n){const a=t.tagName;return i.createElement(a,{key:n},t.children.map(e))}(t,n)}(a,o);case"linkElement":return function(t,a){return i.createElement(r.xv,{tag:r.rh.span,appearance:s,key:a},i.createElement(u.O,{target:t.target,href:t.href,showExternalIcon:!0,isLayerLink:t.layerLink,layerProps:{layerType:t.layerType},contentId:n,emphasis:"tertiary"},t.children.map(e)))}(a,o);case"disclaimer":return i.createElement(O,{disclaimers:a.disclaimers,key:o});case"textNode":return function(e,n){let a,r=e.value;return t&&(t=!1,e.value.length>0&&(a=i.createElement($,{key:"dropCap"},r.charAt(0)),r=r.substring(1))),i.createElement(i.Fragment,{key:n},a,i.createElement(m.J,null,r))}(a,o)}})):e.placeholder||"Type your text here...",E=v?i.createElement(i.Fragment,null,b):i.createElement(l.x,{appearance:s,tag:h,textAlign:g,inheritColor:y,bold:f},b);let w=i.createElement(d.c,{name:"richTextElement"},E);return c.C.isInEditor()&&(w=i.createElement(P,null,w)),w}},37205:(e,t,n)=>{"use strict";n.d(t,{e:()=>c});var i=n(67294),a=n(78384),r=n(2987),o=n(19139),l=n(16195);const s=a.default.div.withConfig({displayName:"StyledBellowItemDisclaimerReferences"})`
    padding-top: ${e=>e.theme.size.dynamic0100};
    padding-bottom: ${e=>e.theme.size.static150};
`;function c(e){const{disclaimers:t=[],color:n}=e,a=t&&0!==t.length;return i.createElement(i.Fragment,null,a&&i.createElement(s,null,i.createElement(r.c,{name:"itemDisclaimers"},i.createElement(o.ys,{color:n||"dark"},i.createElement(l.r,{disclaimers:t})))))}},74028:(e,t,n)=>{"use strict";n.d(t,{d:()=>o});var i=n(67294),a=n(40142),r=n(2987);function o(e){return i.createElement(r.c,{name:`ref-disclaimer-${e.identifier}`},i.createElement("span",null,i.createElement(a.Y,Object.assign({},e),e.children)))}},16195:(e,t,n)=>{"use strict";n.d(t,{r:()=>y});var i=n(67294),a=n(78384),r=n(17061),o=n(74003),l=n(55361),s=n(14308),c=n(76057),d=n(49410),m=n(64202),u=n(78410),p=n(81697),h=n(2987);const g=a.default.span.withConfig({displayName:"StyledCTAWrapper"})`
    padding-${e=>(0,p.rz)(e.theme.direction)}: ${e=>e.theme.size.static100};
    padding-inline-start: ${e=>e.theme.size.static100};

    // NOTE: temporary fix for CTA link focus - if the link gets wrapped into second line,
    // the focus of link is not visible at all (Chrome) or visible just on the text before wraping (Firefox)
    white-space: nowrap;
`;function f(e){const{buttonText:t,disclaimerType:n,identifier:a,text:o,disclaimerWrapperRef:s}=e,[p,f]=i.useState(null),[y,v]=i.useState(0),[b,E]=i.useState(!1),{activeLayerScrollableElement:w}=(0,u.V)(),C=[(0,m.z_)(),(0,m.aP)(),(0,m.hW)()],S=(e,t)=>{E(!0),v(t),f(e)};return i.useEffect((()=>{a&&n&&C.forEach((e=>{e.handleAddedRef(a,n,s,S)}))}),[a,n]),i.createElement(h.c,{name:`disclaimer-text-${e.identifier}`},i.createElement("div",null,i.createElement(d.J,{__content_is_html_and_i_know_for_sure_it_is_safe_and_wont_cause_xss_vulnerability:!0},o),b&&i.createElement(g,null,i.createElement(r.M,{tag:"a",emphasis:"tertiary",href:"#",onClick:e=>(e=>{if(e.preventDefault(),p&&p.current){const e=p.current.querySelector("button");(0,c.GZ)({distance:y,scrollableElement:w,onScrollEnd:()=>null==e?void 0:e.focus()})}E(!1)})(e)},i.createElement(l.a,{variant:"small"}),t))))}const y=({disclaimers:e,withoutLabeledSection:t})=>{const{disclaimerLabels:n}=(0,m.WS)(),a=i.useRef(null),r=i.useMemo((()=>e.slice().sort(s.c9).map((e=>({reference:((e,t=[])=>(e?[`${e}.`].concat(t):t).join(",Â "))(e.identifier,e.namedReference),text:i.createElement(f,{text:e.text,identifier:e.identifier,disclaimerType:e.displayType,buttonText:n.scrollToDisclaimerRefNumberButtonText,disclaimerWrapperRef:a}),key:e.identifier})))),[e,n]);return r.length?t?i.createElement(o.I,{disclaimers:r,ref:a}):i.createElement("section",null,i.createElement(o.I,{disclaimers:r,ref:a})):null}},97597:(e,t,n)=>{"use strict";n.d(t,{s:()=>l});var i=n(67294),a=n(64202),r=n(78410),o=n(74028);const l=(0,n(80955).Pi)((e=>{const{disclaimer:t,badgeToggleLabel:n,badgeVariant:l}=e,s=i.useRef(null);let c,d;const{activeLayerScrollableElement:m}=(0,r.V)(),u=(0,a.z_)(),p=(0,a.aP)(),h=(0,a.hW)();return t.identifier&&[u,p,h].forEach((e=>{const n=e.fullTextDisclaimers.get(t.identifier||"");n&&(c=n,d=e=>n.callback(s,e))})),i.createElement("span",{ref:s},i.createElement(o.d,{identifier:t.identifier,onClick:()=>{if(t.referenceClickHandler)return t.referenceClickHandler(s,null==c?void 0:c.ref,d,m)},ariaLabel:n+" "+t.identifier,variant:l},t.identifier))}))},99574:(e,t,n)=>{"use strict";n.d(t,{oZ:()=>f,vw:()=>y,lH:()=>b});var i=n(67294),a=n(78384),r=n(46410),o=n(19138),l=n(83028),s=n(93346),c=n(2987),d=n(19139),m=n(64202),u=n(16195),p=n(67585);a.default.div.withConfig({displayName:"StyledWrapper"})`
    position: relative;
`.displayName="StyledWrapper";const h=a.default.div.withConfig({displayName:"StyledFullWidthContainer"})`
    display: flex;
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    pointer-events: none;
`;h.displayName="StyledFullWidthContainer";const g=a.default.div.withConfig({displayName:"StyledOverlay"})`
    display: flex;
    flex-flow: column;
    align-self: flex-end;
    position: ${e=>e.sticky?"sticky":"relative"};
    ${e=>e.sticky?"bottom: 0":null};
    max-height: ${e=>e.sticky?`calc(50vh - ${s.gX})`:"50%"};
    width: 100%;

    @media (min-width: ${r.u3.b560}px) {
        margin: 0
            ${e=>"section"===e.type?e.theme.size.grid002:"auto"};
        max-width: ${e=>"section"===e.type?"auto":"80vw"};
    }
    background-color: ${e=>e.theme.global.shimColor};
`;g.displayName="StyledOverlay";const f=e=>{const[t,n]=i.useState(!0),{disclaimers:a=[],color:s="dark",type:p="section",sticky:f,minBreakpoint:y=r.u3.default}=e,v=a&&0!==a.length,{disclaimerLabels:b}=(0,m.WS)();return t&&v?i.createElement(o.L,{min:y},i.createElement(l.f,{theme:"dark"===s?"main":"image"},i.createElement(c.c,{name:"disclaimersContainer"},i.createElement(h,null,t&&a.length>0?i.createElement(g,{type:p,sticky:f},i.createElement(d.kD,{closeDisclaimerLabel:b.closeDisclaimerLabel,onClose:function(e){e.preventDefault(),e.stopPropagation(),t&&n(!1)},focusable:!0},a.map(((e,t)=>{const n="T3_SECTION_BASED"===e.displayType?"section":"item";return i.createElement(c.c,{name:`${n}Disclaimers`,key:t},i.createElement(d.ys,{color:s},i.createElement(u.r,{disclaimers:[e]})))})))):null)))):null},y=i.memo((function(e){return i.createElement(i.Fragment,null,e.children,i.createElement(f,Object.assign({},e)))})),v=a.default.div.withConfig({displayName:"StyledItemOverlayWrapper"})`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: ${p.K.main.overlay.z};
`,b=i.memo((function(e){return i.createElement(v,null,e.children,i.createElement(f,Object.assign({},e,{type:"item"})))}))},7635:(e,t,n)=>{"use strict";n.d(t,{e:()=>c});var i=n(67294),a=n(78384),r=n(46410),o=n(2987),l=n(16195);const s=a.default.div.withConfig({displayName:"StyledDisclaimerReferences"})`
    padding: ${e=>e.theme.size.dynamic0250}
        ${e=>e.theme.size.grid002} 0
        ${e=>e.theme.size.grid002};
    @media (min-width: ${r.u3.b560}px) {
        padding-left: ${e=>e.theme.size.grid003};
        padding-right: ${e=>e.theme.size.grid003};
    }
`;s.displayName="StyledDisclaimerReferences";const c=i.memo((function(e){const{disclaimers:t=[]}=e,n=t&&0!==t.length;return i.createElement(i.Fragment,null,n&&i.createElement(o.c,{name:"sectionDisclaimers"},i.createElement(s,null,i.createElement(l.r,{disclaimers:t}))))}))},28972:(e,t,n)=>{"use strict";n.d(t,{$:()=>l});var i=n(67294),a=n(78384),r=n(16195);const o=a.default.div.withConfig({displayName:"StyledBellowItemDisclaimerReferences"})`
    padding-top: ${e=>e.theme.size.static100};
    padding-bottom: ${e=>e.theme.size.static250};
`;function l(e){const{disclaimers:t=[]}=e,n=t&&0!==t.length;return i.createElement(i.Fragment,null,n&&i.createElement(o,null,i.createElement(r.r,{disclaimers:t})))}},19139:(e,t,n)=>{"use strict";n.d(t,{iy:()=>d,Ft:()=>m,kD:()=>h,ys:()=>y});var i=n(67294),a=n(86119),r=n(78384),o=n(33505),l=n(83028),s=n(2987),c=n(81697);const d=r.default.div.withConfig({displayName:"StyledDisclaimerReference"})`
    color: ${e=>e.theme.text.color.secondary};
    &:not(:last-child) {
        padding-bottom: ${e=>e.theme.size.static300};
    }
`;d.displayName="StyledDisclaimerReference";const m=r.default.div.withConfig({displayName:"StyledLinksChanger"})`
    a {
        position: relative;
        color: ${e=>e.theme.interaction.recipe400.default};
        text-decoration: underline;
        text-underline-offset: 0.2em;
        text-decoration-thickness: 1px;
        pointer-events: auto;
    }

    a:hover,
    a:focus {
        color: ${e=>e.theme.interaction.recipe400.hover};
    }

    a:focus {
        ${e=>(0,o.E)(e)}
    }
`;m.displayName="StyledLinksChanger";const u=r.default.div.withConfig({displayName:"StyledDisclaimersWrapper"})`
    overflow-y: auto;
    padding: ${e=>e.theme.size.static250}
        ${e=>e.theme.size.static250} 0
        ${e=>e.theme.size.static250};
    pointer-events: all;

    &:focus {
        outline: 2px solid ${e=>e.theme.interaction.recipe400.hover};
    }
`;u.displayName="StyledDisclaimersWrapper";const p=r.default.button.withConfig({displayName:"StyledLayerButton"})`
    ${c.sp}

    position: absolute;
    ${e=>(0,c.lp)(e.theme.direction)}: ${e=>e.theme.size.static250};
    top: ${e=>e.theme.size.static250};
    display: flex;
    flex-direction: column;
    color: ${e=>e.theme.text.color.primary};
    pointer-events: all;

    &:focus {
        color: ${e=>e.theme.interaction.recipe400.hover};
        outline: 2px solid ${e=>e.theme.interaction.recipe400.hover};
        outline-offset: 2px;
    }
`;p.displayName="StyledLayerButton";const h=e=>{const{children:t,closeDisclaimerLabel:n,focusable:r,onClose:o}=e;return i.createElement(i.Fragment,null,r?i.createElement(u,{tabIndex:0},t):i.createElement(u,null,t),i.createElement(s.c,{name:"disclaimerOverlayCloseButton"},i.createElement(p,{onClick:o,"aria-label":n},i.createElement(a.x,{ariaHidden:!0}))))},g=r.default.div.withConfig({displayName:"StyledSingleOverlayDisclaimer"})`
    display: flex;
    padding: ${e=>(0,c.o3)(e.theme.direction,0,e.theme.size.static400,e.theme.size.static250,0)};
`;g.displayName="StyledSingleOverlayDisclaimer";const f={text:{color:{secondary:"color.white-000"}}},y=e=>{const{children:t,color:n="light"}=e;return i.createElement(g,null,i.createElement(l.f,{theme:"dark"===n?{}:f},i.createElement(m,null,t)))}},89332:(e,t,n)=>{"use strict";n.d(t,{sA:()=>j,fg:()=>x,mN:()=>$});var i=n(67294),a=n(64317),r=n(78384),o=n(73935),l=n(46410),s=n(83028),c=n(73154),d=n(81697),m=n(58509),u=n(16767);const p=i.createElement("svg",{width:"50",height:"50",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},i.createElement("path",{d:"M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0s25 11.193 25 25-11.193 25-25 25zm5.84-28.507l6.425 3.742a.09.09 0 0 1-.001.115l-6.424 3.746.894 1.396 6.485-3.78.077-.052c.792-.585.937-1.671.324-2.427a1.776 1.776 0 0 0-.323-.308l-.079-.053-6.485-3.776-.893 1.397zm-11.68 7.602l-6.425-3.742a.09.09 0 0 1 0-.115l6.424-3.746-.893-1.396-6.485 3.78-.078.052c-.791.585-.936 1.671-.324 2.427.093.115.202.218.323.308l.08.053 6.484 3.776.893-1.397zM25 48c12.703 0 23-10.297 23-23S37.703 2 25 2 2 12.297 2 25s10.297 23 23 23z"})),h=r.default.div.withConfig({displayName:"StyledDragButton"})`
    @keyframes drag-btn-float {
        from {
            transform: translateX(-${12.5}px);
        }
        to {
            transform: translateX(${12.5}px);
        }
    }
    width: ${50}px;
    height: ${50}px;
    cursor: pointer;
    user-select: none;
    pointer-events: none;
    animation: drag-btn-float 1s ease-in-out infinite alternate;
    fill: ${e=>e.theme.text.color.primary};
`,g=r.default.div.withConfig({displayName:"StyledDragButtonContainer"})`
    width: ${75}px;
    height: ${50}px;
    display: flex;
    justify-content: center;
    align-items: center;
`,f=()=>i.createElement(g,null,i.createElement(h,null,p));function y(e,t){return Boolean(t&&Math.abs(t-e)>10)}function v(e){return"none"!==e}var b=n(96717),E=n(21977),w=n(62985),C=n(57898),S=n(13856),k=n(67678),L=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};const x=.1,$=.5,_=r.default.div.withConfig({displayName:"StyledDraggableVideo"})`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    ${e=>e.matchParent&&"height: 100%"};
    ${e=>e.matchParent&&"width: 100%"};
    ${e=>e.interactive&&`\n        cursor: ${e.isDragged?"grabbing":"grab"};\n        background: ${e.theme.video.background};\n    `}
`;_.displayName="StyledDraggableVideo";const I=r.default.div.withConfig({displayName:"StyledDragButtonContainer"})`
    position: absolute;
    opacity: ${e=>"none"===e.dragDirection?"1":"0"};
    ${e=>"left"===e.dragDirection&&"transform: translateX(-150%)"};
    ${e=>"right"===e.dragDirection&&"transform: translateX(150%)"};
    transition: ${(0,d.hl)({name:"opacity"},{name:"transform"})};
`,T="fadeAnimation",N=r.default.span.withConfig({displayName:"StyledDisclaimerReferences"})`
    ${e=>e.theme.direction===d.Nm.RTL&&`\n    @media (max-width: ${l.u3.b560}px) {\n        margin-bottom: calc(${e.theme.size.static250} + 45px);\n    }`}

    position: absolute;
    ${e=>(0,d.rz)(e.theme.direction)}: 0;
    bottom: 0;
    margin-bottom: ${e=>e.theme.size.static250};
    margin-${e=>(0,d.rz)(e.theme.direction)}:
        ${e=>e.theme.size.static350};
    margin-inline-start: ${e=>e.theme.size.static350};
    display: flex;
    justify-content: center;
    min-width: ${24}px;

    transition: ${(0,d.hl)({name:"opacity"},{name:"transform"})};

    transform: translateY(0);
    ${e=>e.isProgressBarFocused&&`\n            transform: translateY(-${e.theme.size.static535});\n        `}

    opacity: 1;

    &.${T}-exit-active, &.${T}-exit-done {
        opacity: 0;
    }

    &.${T}-exit-done {
        visibility: hidden;
    }
`;N.displayName="StyledDisclaimerReferences";const P=r.default.div.withConfig({displayName:"StyledToolbar"})`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    padding: ${e=>e.theme.size.static350}
        ${e=>e.theme.size.static500};
    background: rgba(0, 0, 0, 0.55);

    transition: ${(0,d.hl)({name:"opacity"},{name:"transform"})};

    opacity: 0;
    // approx 35% - we can't move it more, as triggered focus would scroll a view a bit once the focused elements is out of visible box
    transform: translateY(35%);

    &:focus-within {
        opacity: 1;
        transform: translateY(0);
    }
`,O={x:"center",y:"center"},R={position:"absolute"};let z,D,A,M=!1,B=!1;const F=()=>M=!0,W=()=>M=!1,H=e=>{const t=e.current;return t&&t instanceof HTMLVideoElement?t:null};function j(e){const{animateOnLoad:t,currentTime:n,disclaimers:r={},dragDirection:l,interactive:d=!0,isFullscreen:p,matchParent:h,onDragChanged:g=u.Z,progressBarAriaLabel:j,src:V,title:q}=e,G=e.innerRef,U=i.useRef(null),X=i.useContext(E.f);(0,i.useEffect)((()=>{if(d){const e=te();return e&&(e.addEventListener("touchstart",Y,{passive:!1}),e.addEventListener("touchmove",Q,{passive:!1}),e.addEventListener("touchend",K,{passive:!1})),()=>{const e=te();e&&(e.removeEventListener("touchstart",Y,!1),e.removeEventListener("touchmove",Q,!1),e.removeEventListener("touchend",K,!1)),(0,m.tP)()}}}),[d]),(0,i.useEffect)((()=>{ne()}),[V]),(0,i.useEffect)((()=>{const e=H(U);e&&n!==e.currentTime&&(e.currentTime=n)}),[n]);const Y=e=>{const t=e.changedTouches[0];if(t){const n=t.clientX,i=t.clientY;D={x:n,y:i,time:e.timeStamp},z=n}},K=e=>{e.changedTouches[0]&&J()},Q=e=>{const t=e.changedTouches[0];if(!D)return;if(A||(A=function(e,t){const{clientX:n,clientY:i}=e,a=Math.abs(t.x-n),r=Math.abs(t.y-i);return a>r?"horizontal":r>a?"vertical":void 0}(t,D)),"horizontal"!==A)return;const{clientX:n}=t;y(n,z)&&Z(n)},Z=t=>{const n=H(U),i=te();if(n&&i&&!M&&z){const a=n.duration/n.clientWidth,r=n.currentTime+(z-t)*a;if(n.currentTime=Math.min(Math.max(r,0),Math.trunc(100*n.duration-5)/100),!v(e.dragDirection)){const e=function(e,t){const n=t-e;return n<0?"left":n>0?"right":"none"}(z,t);(0,m.Qp)(i),g({direction:e,currentTime:n.currentTime})}z=t}},J=()=>{const t=H(U);if(!D||!t)return;const{onDragChanged:n=u.Z}=e;n({direction:"none",currentTime:t.currentTime});const i=te();i&&(0,m.tG)(i),z=void 0,D=void 0,A=void 0},ee=n=>L(this,void 0,void 0,(function*(){if(!d||!t)return;n.playbackRate=1.5;const i=n.play();if(i)try{yield i}catch(e){return}B=!0;const{onDragChanged:a=u.Z}=e;a({direction:"right",currentTime:n.currentTime})})),te=()=>{const e=G.current?o.findDOMNode(G.current):null;return e&&e instanceof HTMLDivElement?e:null},ne=()=>L(this,void 0,void 0,(function*(){const e=H(U);e&&(e.load(),e.onloadedmetadata=()=>{const t=(0,w.eB)(e.duration);X.updateDuration(t)},yield ee(e))})),ie=v(l),ae=X.isProgressBarFocused,{staticReferences:re=[],interactiveReferences:oe,openableReferences:le,color:se="dark"}=r,ce=oe||le||re.length>0,de=X.duration>0?`${Math.round(e.currentTime/(X.duration/100))}%`:"0%",me=q?q+" - "+j:j;return i.createElement(s.f,{theme:"image"},i.createElement(_,{ref:G,isDragged:ie,matchParent:h,interactive:d,onMouseDown:d?e=>{z=e.clientX,D={x:e.clientX,y:e.clientY,time:e.timeStamp}}:u.Z,onMouseMove:d?e=>{const{clientX:t}=e;y(t,z)&&Z(t)}:u.Z,onMouseUp:d?()=>{J()}:u.Z},i.createElement(b.$,{focalPoint:O,innerRef:U,src:V,muted:!0,playsInline:!0,preload:"none",disablePointerEvents:!0,reduceBrightness:!ie&&!ae&&d,keepOriginalAspectRatio:p,onTimeUpdate:()=>{const e=H(U);B&&!M&&e&&e.currentTime>=e.duration/2&&(e.pause(),B=!1,g({direction:"none",currentTime:e.currentTime}))},onSeeking:F,onSeeked:W,style:R}),d&&!ae&&i.createElement(I,{dragDirection:l},i.createElement(f,null)),d&&i.createElement(P,null,i.createElement(C.uP,{valueMin:S.Gs,valueMax:X.duration,value:e.currentTime,progressBarAriaLabel:me,onDragChange:t=>{const n=H(U);if(n){n.currentTime=t.value;const{onDragChanged:i=u.Z}=e;i({direction:"none",currentTime:n.currentTime})}},onProgressBarKeyDown:(t,n)=>{const i=H(U),a=n?$:x;let r=0;if(i){t===k.u.ArrowLeft&&(r=e.currentTime-a),t===k.u.ArrowRight&&(r=e.currentTime+a);const n=(0,w.eB)(i.duration),o=r<=0,l=r>=n;i.currentTime=l||o?l?n:0:r;const{onDragChanged:s=u.Z}=e;s({direction:"none",currentTime:i.currentTime})}},onFocus:()=>{const e=H(U);e&&e.scrollIntoView(),X.updateProgressBarFocusState(!0)},onBlur:()=>{X.updateProgressBarFocusState(!1)},horizontalProgressBarValueText:de})),ce&&i.createElement(s.f,{theme:"dark"===se?"main":"image"},i.createElement(a.CSSTransition,{classNames:T,in:!ie,timeout:300},i.createElement(N,{isProgressBarFocused:ae},re.length>0&&i.createElement(c.xv,{appearance:c.C2.copy150,tag:c.rh.span},re),null!=oe?oe:"",null!=le?le:"")))))}},1570:(e,t,n)=>{"use strict";n.d(t,{n:()=>T,W:()=>b});var i=n(23252),a=n(67294),r=n(78384),o=n(64202),l=n(58402);function s(e,t){return"delayed"!==e&&t}var c,d=n(16767),m=n(92830),u=n(33700),p=n(50273),h=n(73154);!function(e){e.SMALL="SMALL",e.MEDIUM="MEDIUM",e.LARGE="LARGE"}(c||(c={}));const g={[c.SMALL]:"10vh",[c.MEDIUM]:"40vh",[c.LARGE]:"70vh"},f={[c.SMALL]:"large",[c.MEDIUM]:"x-large",[c.LARGE]:"x-large"},y=u.zo.div.withConfig({displayName:"LoadingWrapper"})`
    min-height: ${e=>g[e.size]};
    margin: ${e=>e.theme.size.dynamic0250};
    padding: ${e=>e.theme.size.static450};

    display: grid;
    grid-template-rows: max-content max-content;
    justify-items: center;
    align-content: center;
    grid-gap: ${e=>e.theme.size.dynamic0020};

    outline: 1px solid
        ${e=>e.hasBorder?e.theme.interaction.recipe200.default:"transparent"};
`;function v({size:e,visualFeedback:t=!0}){const n=(0,o.WS)();return a.createElement(y,{size:e,hasBorder:t},t&&a.createElement(a.Fragment,null,a.createElement(p.$,{variant:f[e]}),a.createElement(h.xv,{appearance:h.C2.label0200,textAlign:h.H.center,staticSize:!0},n.componentsLoadingLabel)))}var b,E=n(58164),w=n(59638);!function(e){e[e.INVALID_URL=0]="INVALID_URL",e[e.LOAD=1]="LOAD"}(b||(b={}));const C=r.default.div.withConfig({displayName:"LoaderLayout"})`
    position: relative;
`,S=r.default.div.withConfig({displayName:"FeatureAppWrap"})`
    ${e=>e.isHidden&&u.iv`
            // internal content flow should behave like when it's visible
            overflow-y: visible;
            max-height: 100%;
            max-width: 100%;
            display: block;
            position: absolute;

            visibility: hidden;

            // extra high specificity -> overrules children with "visibility: visible"
            &&&&& * {
                visibility: hidden !important;
            }
        `};
`;function k(e){return e.hideLoadingIndicator?a.createElement(a.Fragment,null):a.createElement(C,null,a.createElement(S,{isHidden:!0}),a.createElement(v,{size:I(e.featureAppSize),visualFeedback:!1}))}function L(e){const{featureAppId:t,url:n="",ssrUrl:r="",ssrEnabled:o=!1,baseUrl:l="",css:s=[],instanceConfig:c="",legalEntity:d="",featureAppName:u}=e.props,p=(0,E.Yx)(c,l,n,d);return a.createElement(i.Y,{baseUrl:l,src:n,serverSrc:o?r:void 0,css:s,featureAppId:t,config:p,beforeCreate:e.beforeCreate,onError:m.VB,featureAppName:u},(({featureAppNode:e,error:t})=>t?(0,m.YN)():a.createElement(a.Fragment,null,e)))}function x(e){const{featureAppId:t,sectionId:n,contentLabels:r,featureAppTrackingData:s,hideLoadingIndicator:c=!1,url:d="",ssrUrl:u="",ssrEnabled:p=!1,baseUrl:h="",css:g=[],instanceConfig:f="",featureAppSize:y,legalEntity:v="",featureAppName:b}=e.props,w=(0,E.Yx)(f,h,d,v),C=(0,o.V9)(),S=(0,l.h)(r),k=()=>{C.trackFeatureAppLoad(n||null,S,s)};return a.createElement(i.Y,{baseUrl:h,src:d,serverSrc:p?u:void 0,css:g,featureAppId:t,config:w,beforeCreate:e.beforeCreate,onError:m.VB,key:t,featureAppName:b},(({featureAppNode:e,error:t,loading:n})=>t?(0,m.YN)():a.createElement($,{featureAppSize:y,hideLoadingIndicator:c,loaded:!!e&&!n,featureAppNode:e,trackFeatureAppLoad:k})))}function $(e){const{featureAppNode:t,loaded:n,trackFeatureAppLoad:i,featureAppSize:r,hideLoadingIndicator:l}=e,c=(0,o.wL)().featureapploader,d=a.useRef(!1),m=function({threshold:e=300,delay:t=1e3,loaded:n=!1,logger:i}){const[r,o]=a.useState(n?"completed":"pending"),l=a.useRef(0),c=a.useRef(0);return i.debug("usedDelayedState p-t:%s, d-t:%s, loaded: %s, phase:%s",l.current,c.current,n,r),a.useEffect((()=>{i.debug("useEffect pending timeout:%s, delayed timeout:%s, phase:%s, loaded:%s",l.current,c.current,r,n),s(r,n)&&(i.debug("clear pending timeout ",l.current),window.clearTimeout(l.current)),"pending"===r&&0===l.current&&(l.current=window.setTimeout((()=>{i.debug("execute pending timeout"),o("delayed"),i.debug("after set delayed phase")}),e),i.debug("start pending timeout %s",l.current)),"delayed"===r&&0===c.current&&(i.debug("start delayed timeout"),c.current=window.setTimeout((()=>{i.debug("execute delayed timeout"),o("completed"),i.debug("after set completed phase")}),t))}),[r,t,e,n,i,l,c]),a.useEffect((()=>()=>{window.clearTimeout(l.current),window.clearTimeout(c.current)}),[]),r}({threshold:400,delay:1e3,loaded:n,logger:c}),u=s(m,n);return(0,a.useEffect)((()=>{u&&!d.current&&(i(),d.current=!0)}),[i,d,u]),c.debug("loading phase:%s, node:%s, size:%s, loaded:%s, finished:%s",m,Boolean(t),r,n,u),l?a.createElement(a.Fragment,null,t):a.createElement(C,null,a.createElement(S,{isHidden:!u,"aria-hidden":!u},t),!u&&a.createElement(v,{size:I(r),visualFeedback:"pending"!==m}))}function _(e){const{featureAppId:t,disclaimerLegalEntity:n,featureAppTrackingData:i,globalDisclaimerStore:r,error:l,ssrEnabled:s=!1,instanceConfig:c="",validInstanceConfig:d=!1,content:u}=e,p=(0,o.wL)(),h=(0,o.VY)().state.initialRender;if(c&&!d)return a.createElement(m.Bi,null);const g=(0,E.uc)(l);if(g)return g;if(!(0,w.L)()&&!s)return a.createElement(k,Object.assign({},e));const f=e=>{const a=e.featureServices.tracking;if(a&&(a.contextualEventData={event:i}),r.setScopedDisclaimerManagerToActualPageForFAConsumer(t,n),u){const n=e.featureServices["fa-content-service"];if(n)try{n.content=JSON.parse(u)}catch(e){p.featureApps.error(`cannot get feature app content for ${t}`,e)}}else p.featureApps.debug(`no content for ${t}`)};return!s||(0,w.L)()&&!h?a.createElement(x,{props:e,beforeCreate:f}):a.createElement(L,{props:e,beforeCreate:f})}function I(e){switch(e){case"SMALL":return c.SMALL;case"MEDIUM":return c.MEDIUM;case"LARGE":return c.LARGE;default:return c.SMALL}}class T extends a.Component{constructor(){super(...arguments),this.state={featureAppError:!1}}static getDerivedStateFromError(){return{featureAppError:!0}}componentDidCatch(e,t){this.props.logger.featureApps.error(`Feature app loading failed. error: ${e}, errorInfo: ${t}`)}componentDidUpdate(e,t){const{featureAppError:n}=this.state;if(n!==t.featureAppError){const{onErrorStateChange:e=d.Z}=this.props;e(n)}}render(){return a.createElement(_,Object.assign({},this.props))}}},92830:(e,t,n)=>{"use strict";n.d(t,{VB:()=>l,YN:()=>s,yL:()=>m,Nu:()=>u,Bi:()=>p});var i=n(67294),a=n(46978),r=n(58795),o=n(59638);function l(e){console.error("Error during startup of feature app",e)}function s(){return!(0,o.L)()||a.C.isInEditor()?i.createElement(d,null):null}function c(e){return i.createElement(r.e3,{severity:r.vR.ERROR},i.createElement("span",null,e.children))}function d(){return i.createElement(c,null,"Error during loading of feature application")}function m(){return i.createElement(c,null,"Error occured while loading feature app. On publish instances, nothing will be shown.")}function u(){return i.createElement(c,null,"Please choose a feature app.")}function p(){return i.createElement(c,null,"Feature app configuration has no valid json format.")}},58164:(e,t,n)=>{"use strict";n.d(t,{Yx:()=>m,uc:()=>c,by:()=>d});var i=n(67294),a=n(34078),r=n.n(a),o=n(52756),l=n(1570),s=n(92830);function c(e){switch(e){case l.W.INVALID_URL:return i.createElement(s.Nu,null);case l.W.LOAD:return i.createElement(s.yL,null);default:return}}function d(e,t){let n;return e?n=l.W.LOAD:t||(n=l.W.INVALID_URL),n}function m(e,t,n,i){const a=function(e){try{return JSON.parse(e)}catch(e){return}}(e)||{};return(0,o.U)(n)&&(a.featureAppRootPath=function(e,t){const n=function(e,t){return!e||function(e){return/^https?:\/\//.test(e)}(t)?t:r()(e,t)}(e,t);return n.substring(0,n.lastIndexOf("/"))}(t,n)),i&&!a.legalEntity&&(a.legalEntity=i),a}},86411:(e,t,n)=>{"use strict";n.d(t,{F:()=>s,A:()=>c});var i=n(67294),a=n(33700),r=n(46410),o=n(59638),l=n(91033);const s=a.zo.div.withConfig({displayName:"StyledFakeGalleryWrapper"})`
    width: 100%;
    display: none;

    @media (min-width: ${r.u3.b960}px) {
        min-height: ${e=>e.clientGalleryHeight}px;

        display: block;
        visibility: hidden;
    }
`,c=({activeGalleryIndex:e,children:t,galleryRef:n})=>{const[a,r]=i.useState(0),c=i.useMemo((()=>(0,o.L)()?new l.Z((e=>{e[0]&&r(e[0].contentRect.height)})):void 0),[]);return i.useEffect((()=>{const e=n.current;return e&&(r(e.getBoundingClientRect().height),c.observe(e)),()=>{e&&c.unobserve(e)}}),[e]),i.createElement(s,{clientGalleryHeight:a},t)}},25614:(e,t,n)=>{"use strict";n.d(t,{R:()=>c,c:()=>d});var i=n(73935),a=n(64202),r=n(58402),o=n(16767),l=n(37772),s=n(25801);const c="configure:/";function d(e,t){const n=(0,a.pJ)(),d=(0,a.V9)(),m=(0,a.HQ)(),u=(0,a.m2)(),p=(0,r.h)(),h=function(e){const t=(0,a.m2)(),{href:n,isLayerLink:i}=e;return i&&n?t.createLayerHref(n):n||""}(t),{isLayerLink:g,onClick:f=o.Z,href:y="",contentId:v}=t,b=(0,a.c3)().getSingleton(s.T),E=()=>{const{linkName:n}=t;if(n)return n;const a=i.findDOMNode(e.current);return a?a.innerText.trim():void 0},w=(e=!1)=>{const{trackingActionOverride:n}=t,i=E();n?n(y,i||"",p):e?d.trackLinkClickExternal(y,v,i,p):d.trackLinkClick(y,v,i,p)};if(function(e){return e&&e.startsWith(c)}(y)){const e=b.createNodeNavigation(function(e){return e.substring(c.length)}(y));if(e)return[t=>{t.preventDefault(),e.onClick()},e.href]}return[y&&g?e=>{y&&(u&&y&&u.openLayer(y).then((e=>{(e=>{const{trackingActionOverride:n}=t,i=E();n?n(y,i||"",p,e):(d.trackLinkClick(y,v,i,p),d.trackLayerLoad((0,l.Z)(y,e),p))})(e&&e.model?e.model.trackingModel.contentName:void 0)}))),e.preventDefault(),f(e)}:y&&n.isAppLink(y)?e=>{const{target:i}=t;m.isOpened()&&m.closeLightbox(),w(!1),f(e),"_blank"!==i&&(e.preventDefault(),n.navigate(y))}:e=>{const{target:n="_self",ignoreExternalLinkLightbox:i}=t;m.shouldOpenLightbox(y)&&!i&&(e.preventDefault(),m.openLightbox(y,n)),w(!0),f(e)},h]}},41979:(e,t,n)=>{"use strict";n.d(t,{O:()=>p});var i=n(67294),a=n(17061),r=n(26395),o=n(7217),l=n(43694),s=n(13765),c=n(14986),d=n(64202),m=n(25614);const u=n(78384).default.span.withConfig({displayName:"StyledLinkIconWrapper"})`
    margin-inline-${e=>e.isLeft?"end":"start"}: ${e=>e.theme.size.static100};
`;function p(e){const t=(0,d.pJ)(),n=i.useRef(null),{linkLabels:p}=(0,d.WS)(),[h,g]=(0,m.c)(n,e),{isLayerLink:f,isDownloadLink:y,showExternalIcon:v,children:b,emphasis:E}=e,w=g.split(":")[0],C="mailto"===w,S="tel"===w,k="fax"===w,L=g&&!t.isAppLink(g)&&!f&&!y&&!C&&!S&&!k;return i.createElement(a.M,Object.assign({tag:"a",emphasis:E||"none"},e,{href:g,ref:n,onClick:h}),y&&i.createElement(u,{isLeft:!0},i.createElement(o.U,{variant:"small",title:p.downloadLink})),b,L&&v&&i.createElement(u,null,i.createElement(r.y,{title:p.externalLink})),C&&i.createElement(u,null,i.createElement(l.M,{variant:"small",title:p.mailLink})),S&&i.createElement(u,null,i.createElement(s.L,{variant:"small",title:p.phoneLink})),k&&i.createElement(u,null,i.createElement(c.n,{variant:"small",title:p.faxLink})))}},79567:(e,t,n)=>{"use strict";n.d(t,{UH:()=>k,S5:()=>C,_D:()=>S});var i=n(67294),a=n(73154),r=n(14525),o=n(82755),l=n(28972),s=n(78384),c=n(61097);const d=s.css`
    pointer-events: none;
    cursor: not-allowed;
`,m=s.css`
    outline: 0;
    img {
        transform: scale(1.03);
    }
`,u=s.css`
    :hover,
    :focus {
        ${m};
    }
`,p=s.default.a.withConfig({displayName:"StyledImageLink"})`
    text-decoration: none;
    display: block;
    cursor: pointer;
    ${e=>e.isFocused&&m};
    ${e=>e.disabled?d:u};
    img {
        transition: ${(0,c.hl)({name:"transform",duration:"2.2s"})};
    }
`,h=e=>{const{elementRef:t,href:n,disabled:a,onClick:r,title:o,target:l,rel:s,onMouseOut:c,onMouseOver:d,isFocused:m,children:u}=e;return i.createElement(p,{ref:t,href:n,onClick:!a&&r||void 0,target:l,rel:s,title:o,disabled:a,onMouseOver:d,onMouseOut:c,isFocused:m,tabIndex:-1,"aia-hidden":"true"},u)};var g=n(73935);function f(e){e.preventDefault()}var y=n(2987),v=n(25614),b=n(41979),E=n(10194),w=n(59577);const C=(0,w.eJ)((function(e){const t=i.useRef(null),[n,a]=(0,v.c)(t,e);return function(e,t){const n=t||f;i.useEffect((()=>{const t=e.current?g.findDOMNode(e.current):0;return window.navigator.userAgent.toLowerCase().includes("firefox".toLowerCase())&&t&&t.addEventListener("dragstart",n),function(){t&&t.removeEventListener("dragstart",n)}}),[e,n])}(t),i.createElement(y.c,{name:"imageLink"},i.createElement(h,Object.assign({},e,{href:a,elementRef:t,onClick:n})))}),r.B$.hoverGroupId),S=(0,w.eJ)((function(e){const t=i.useRef(null),[n,a]=(0,v.c)(t,e);return i.createElement(r.Gg,Object.assign({},e,{href:a,elementRef:t,onClick:n}))}),r.B$.hoverGroupId),k=e=>i.createElement(o.C,null,(t=>i.createElement(i.Fragment,null,i.createElement(a.xv,{appearance:a.C2.copy200,bold:!0},i.createElement(b.O,{href:e.href,contentId:e.contentId,isLayerLink:e.isLayerLink,layerProps:{layerType:e.layerType||"CONTENT"},target:e.target},i.createElement(E.xQ,{richtext:e.text||[],inheritColor:!0,tag:a.rh.span,placeholder:""}))),i.createElement(l.$,{disclaimers:t}))))},23982:(e,t,n)=>{"use strict";var i=n(90669),a=n(46517),r=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let o=class{constructor(){this.histories=new Map}getHistoryService(e){let t=this.histories.get(e);return t||(t=(0,a.X)(this.featureHub,e),this.histories.set(e,t)),t}};r([(0,i.f3)()],o.prototype,"featureHub",void 0),o=r([(0,i.ri)("CustomHistoryManager")],o)},20049:()=>{},70463:(e,t,n)=>{"use strict";var i=n(90669),a=n(22188),r=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let o=class{initialize(){this.gfaCartService&&this.gfaCartService.subscribe((e=>{this.cart=e}),{type:"cart"})}};r([a.LO],o.prototype,"cart",void 0),r([(0,i.f3)()],o.prototype,"gfaCartService",void 0),r([(0,i.zY)()],o.prototype,"initialize",null),o=r([(0,i.ri)("CartStore")],o)},66175:(e,t,n)=>{"use strict";var i=n(52090),a=n(90669),r=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};let o=class{constructor(){this.items=[],this.callbacks=[]}initialize(){return r(this,void 0,void 0,(function*(){const e=yield this.get();this.callbacks.forEach((t=>t(e)))}))}add(e,t){return r(this,void 0,void 0,(function*(){this.items.push({id:e,quantity:t,price:{value:{centAmount:0}},type:"line-item"});const n=yield this.get();this.callbacks.forEach((e=>e(n)))}))}addItem(e){return Promise.resolve(void 0)}flush(e){return Promise.resolve(void 0)}get(){return Promise.resolve({lineItems:this.items,state:i.xI.Active,version:1,totalPrice:{type:"",centAmount:0,currencyCode:"EUR"},id:"1"})}getItem(e){return Promise.reject("not implemented")}removeItem(e){return Promise.resolve(void 0)}subscribe(e,t){this.callbacks.push(e)}unsubscribe(e){let t=this.callbacks.indexOf(e);t>-1&&this.callbacks.splice(t,1)}updateItem(e,t){return Promise.resolve(void 0)}};o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}([(0,a.ri)("GfaCartService",{devMode:!0})],o)},85823:(e,t,n)=>{},36416:(e,t,n)=>{"use strict";n.d(t,{v:()=>d});var i=n(67294),a=n(17061),r=n(73154),o=n(57721),l=n(30889),s=n(41979),c=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};function d(e){const{title:t,text:n,disclaimer:d,accept:m,acceptLabel:u,decline:p,declineLabel:h,onClose:g,btnCloseLabel:f}=e,y=i.createElement(a.M,{tag:"button",emphasis:"primary",onClick:m},u),v=i.createElement(a.M,{tag:"button",emphasis:"secondary",onClick:p},h);return i.createElement(o.e,{onClose:g,heading:i.createElement(r.xv,{tag:r.rh.h3,appearance:r.C2.headline350,bold:!0},t),copy:i.createElement(r.xv,{tag:r.rh.p,appearance:r.C2.copy200},n),primaryButton:y,disclaimer:i.createElement(l.Z,{options:{overrides:{h3:e=>{var t=c(e,[]);return i.createElement(r.xv,Object.assign({tag:r.rh.h3},t))},a:e=>{var t=c(e,[]);return i.createElement(s.O,Object.assign({emphasis:"tertiary",target:"_blank"},t))}}}},d),secondaryButton:v,switchButtonOrder:!0,btnCloseLabel:f})}},10148:(e,t,n)=>{"use strict";var i=n(90669),a=n(67294),r=n(22188),o=n(36416),l=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};const c="consent.shown";let d=class{constructor(){this.alreadyShown=!1,this.consentLayer=null,this.closeConsentLayer=()=>{this.consentLayer&&this.consentLayer.close(),this.consentLayer=null}}initialize(){this.alreadyShown=Boolean(this.sessionStorage.get(c)),(0,r.gx)((()=>this.loginStore.isLoggedIn),(()=>s(this,void 0,void 0,(function*(){try{yield this.afterLoginDetermined()}catch(e){this.logger.consent.error("failed to show consent after login",e)}})))),this.loginStore.listenToLogout((()=>s(this,void 0,void 0,(function*(){this.alreadyShown=!1,this.sessionStorage.remove(c)}))))}afterLoginDetermined(){return s(this,void 0,void 0,(function*(){if(this.alreadyShown)return;const e=yield this.idkServiceConnector.getMergeConsentStatus();if(this.isConsentDecided(e))this.logger.consent.debug("consent was decided before %",e.userDecision);else if(this.alreadyShown=!0,this.sessionStorage.set(c,"true"),this.showConsent()){const t=t=>()=>s(this,void 0,void 0,(function*(){const n={documentKey:e.documentKey,version:e.version,locale:e.locale,userDecision:t};this.closeConsentLayer();try{const i=yield this.idkServiceConnector.setMergeConsentStatus(n);t&&this.smartDigitalService.pushConsentAccepted(i,String(e.version))}catch(e){this.logger.consent.error("failed to update merge consent",e)}}));this.consentLayer&&this.closeConsentLayer(),this.consentLayer=this.layerManager.openFocusLayer((n=>a.createElement(o.v,{acceptLabel:this.consentModel.mergeConsentAccept,declineLabel:this.consentModel.mergeConsentDecline,disclaimer:e.disclaimer,text:e.text,title:e.title,accept:t(!0),decline:t(!1),onClose:this.closeConsentLayer,btnCloseLabel:this.consentModel.btnCloseLabel})),{},{onClose:this.closeConsentLayer,userCloseable:!0,size:"A"})}}))}showConsent(){const{showConsentProbability:e}=this.consentConfiguration;return e>0&&100*Math.random()<=e}isConsentDecided(e){return e&&null!==e.userDecision&&void 0!==e.userDecision}};l([(0,i.f3)()],d.prototype,"sessionStorage",void 0),l([(0,i.f3)()],d.prototype,"layerManager",void 0),l([(0,i.f3)()],d.prototype,"consentConfiguration",void 0),l([(0,i.f3)()],d.prototype,"loginStore",void 0),l([(0,i.f3)()],d.prototype,"logger",void 0),l([(0,i.f3)()],d.prototype,"consentModel",void 0),l([(0,i.f3)()],d.prototype,"idkServiceConnector",void 0),l([(0,i.f3)()],d.prototype,"smartDigitalService",void 0),l([(0,i.zY)()],d.prototype,"initialize",null),d=l([(0,i.ri)("ConsentService",{env:"client"})],d)},35224:(e,t,n)=>{"use strict";var i=n(16743),a=n(22188),r=n(60282),o=n(90669),l=n(14436),s=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let c=class{constructor(){this.pageData=a.LO.map({},{deep:!1})}initialize(){const e=this.routerService.pagePath,t=this.modelStore.getData(e);t&&this.pageData.set(e,(0,r.D)(t,e)),this.routerService.listen((()=>{const e=this.routerService.pagePath;this.pageData.get(e)||i.ModelManager.getData(e).then((t=>{this.onLoad(e,t)}))}))}getPage(e){return this.pageData.get(e)}getCurrentPageRootModel(){return(0,l.tl)(this,this.routerService.pagePath||"")}getCurrentPageRootModelAsPromise(){return e=this,t=void 0,i=function*(){const e=this.routerService.pagePath||"";return new Promise(((t,n)=>{(0,a.gx)((()=>void 0!==(0,l.tl)(this,e)),(()=>{const i=(0,l.tl)(this,e);i?t(i):n(`page ${e} was not loaded`)}))}))},new((n=void 0)||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}));var e,t,n,i}getStageType(){const e=(0,l.tl)(this,this.routerService.pagePath||"");if(e){const t=e.stageType,n=e.stagePath,i=`${this.routerService.pagePath}/jcr:content/${l.nB}/${n}`,a=this.modelStore.getData(i),o=this.personalizationStore.getContent(i,a&&a.mboxId);if(!(o&&o.loaded&&o.resource))return t;{const e=o.resource.path,t=this.modelStore.getData(e);if(t){const n=(0,r.D)(t,e),i=n.cqItems[n.cqItemsOrder[0]];return i?i.cqType:void 0}}}}onLoad(e,t){if(this.logger.general.info("update content store after page navigation"),this.pageData.has(e))return;const n=(0,r.D)(t,e);this.pageData.set(e,n)}};s([(0,o.f3)()],c.prototype,"routerService",void 0),s([(0,o.f3)()],c.prototype,"personalizationStore",void 0),s([(0,o.f3)()],c.prototype,"modelStore",void 0),s([(0,o.f3)()],c.prototype,"logger",void 0),s([(0,o.zY)()],c.prototype,"initialize",null),s([a.aD],c.prototype,"onLoad",null),c=s([(0,o.ri)(l.Bk,{env:"client"})],c)},14436:(e,t,n)=>{"use strict";n.d(t,{Bk:()=>i,nB:()=>a,tl:()=>r});const i="ContentStore",a="root",r=(e,t)=>{const n=e.getPage(t);if(n&&n.cqItems&&n.cqItems[a]&&"vwa-ngw18/components/structure/pageroot"===n.cqItems[a].cqType)return n.cqItems[a]}},68650:(e,t,n)=>{"use strict";function i(){return{handleRegisteredDisclaimers:()=>{},handleUnregisterDisclaimers:()=>{},handleAddedRef:()=>{},fullTextDisclaimers:new Map}}n.d(t,{V:()=>i})},23755:(e,t,n)=>{"use strict";n.d(t,{FH:()=>s,BB:()=>d});var i=n(67294),a=n(22188),r=n(80955),o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};const l=(e,t)=>e.identifier===t.identifier&&e.displayType===t.displayType&&e.text===t.text,s=(0,r.Pi)((e=>{const[t,n]=i.useState(!1);i.useEffect((()=>{n(!0)}),[]);const a=e.disclaimerStore.disclaimers;return e.children(t?a.slice():a)}));class c{constructor(e){this.displayTypes=e,this.disclaimers=a.LO.array([]),this.fullTextDisclaimers=a.LO.map({})}handleRegisteredDisclaimers(e){const t=e.filter((e=>(this.displayTypes.length<=0||this.displayTypes.length>0&&this.displayTypes.indexOf(e.displayType)>=0)&&!this.disclaimers.find((t=>l(t,e)))));t.length>0&&t.forEach((e=>{this.disclaimers.push(e)}))}handleUnregisteredDisclaimers(e){e.forEach((e=>{if(this.displayTypes.length<=0||this.displayTypes.length>0&&this.displayTypes.indexOf(e.displayType)>=0){const t=this.disclaimers.find((t=>l(t,e)));t&&this.disclaimers.remove(t)}}))}handleAddedRef(e,t,n){this.fullTextDisclaimers.set(e,{ref:t,callback:n})}}o([a.aD],c.prototype,"handleRegisteredDisclaimers",null),o([a.aD],c.prototype,"handleUnregisteredDisclaimers",null);class d extends i.PureComponent{constructor(e){super(e),this.handleAddedRef=(e,t,n,i)=>{const{disclaimerTypes:a}=this.props;a.indexOf(t)<0||this.store.handleAddedRef(e,n,i)},this.handleRegisteredDisclaimers=e=>{this.store.handleRegisteredDisclaimers(e)},this.handleUnregisterDisclaimers=e=>{this.store.handleUnregisteredDisclaimers(e)},this.typeContextData={handleRegisteredDisclaimers:this.handleRegisteredDisclaimers,handleUnregisterDisclaimers:this.handleUnregisterDisclaimers,handleAddedRef:this.handleAddedRef,fullTextDisclaimers:new Map},this.store=new c(e.disclaimerTypes)}render(){const{ContextType:e}=this.props,t=this.store;return i.createElement(e.Provider,{value:Object.assign(Object.assign({},this.typeContextData),{get fullTextDisclaimers(){return t.fullTextDisclaimers}})},this.props.children(this.store))}}},17527:(e,t,n)=>{"use strict";n.d(t,{OO:()=>y});var i=n(22188),a=n(67294),r=n(78384),o=n(2987),l=n(64202),s=n(19139),c=n(16195);const d=r.default.div.withConfig({displayName:"StyledDisclaimerContainer"})`
    display: flex;
    flex-flow: column;
    position: relative;
    max-height: 100%;
`;function m(e){const{text:t,identifier:n,closeButtonClick:i}=e,{disclaimerLabels:r}=(0,l.WS)();return a.createElement(d,null,a.createElement(s.kD,{closeDisclaimerLabel:r.closeDisclaimerLabel,onClose:i},a.createElement(o.c,{name:"openableDisclaimer"},a.createElement(s.ys,null,a.createElement(c.r,{disclaimers:[{text:t,identifier:n,displayType:"T6_OPENABLE"}]})))))}d.displayName="StyledDisclaimerContainer";var u,p=n(76057);!function(e){e.ABOVE_VIEWPORT="aboveViewport",e.RIGHT_OF_VIEWPORT="rightOfViewport",e.BELOW_VIEWPORT="belowViewport",e.LEFT_OF_VIEWPORT="leftOfViewport",e.IN_VIEWPORT="inViewport"}(u||(u={}));var h=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};const g=e=>({displayType:"global"===e.type?"T1_GLOBAL":"T2_PAGE_BASED",text:e.text,identifier:e.reference,legalEntity:e.legalEntity,namedReference:e.namedReference}),f=e=>({legalEntity:e.legalEntity,legalEntityLabel:e.legalEntityLabel,globalDisclaimers:e.disclaimers.global.map(g),referenceDisclaimers:e.disclaimers.reference.map(g)});class y{constructor(e,t,n){this.openableDisclaimerUniqueNumber=0,this.groupedDisclaimers=i.LO.array([]),this.openableDisclaimers=i.LO.map(new Map),this.activeOpenableDisclaimerKey=null,this.disclaimerManager=e,this.disclaimerManager.subscribe((()=>{this.groupedDisclaimers.replace(this.disclaimerManager.getLegallyGroupedDisclaimers().map(f))})),this.layerManager=t,n.globalDisclaimers.forEach((t=>e.registerGlobalDisclaimer(t.text)))}get footerDisclaimers(){return this.groupedDisclaimers}get openableDisclaimer(){if(this.activeOpenableDisclaimerKey)return this.openableDisclaimers.get(this.activeOpenableDisclaimerKey)}add(e,t){switch(e.displayType){case"T1_GLOBAL":{this.addGlobalDisclaimer(e,t);const n=()=>this.unregister(e,t);return Object.assign(Object.assign({},e),{unregister:n})}case"T2_PAGE_BASED":case"T3_SECTION_BASED":case"T4_ITEM_BASED":return this.addInteractiveDisclaimer(e,t);case"T5_INLINE":{const t=()=>{};return Object.assign(Object.assign({},e),{unregister:t})}case"T6_OPENABLE":return this.addOpenableDisclaimer(e,t);default:throw new Error("unsupported type")}}unregister(e,t){switch(e.displayType){case"T1_GLOBAL":this.unregisterGlobalDisclaimer(e.text,t);break;case"T2_PAGE_BASED":this.unregisterReferenceDisclaimer(e.text,"footer-reference",t);break;case"T3_SECTION_BASED":case"T4_ITEM_BASED":this.unregisterReferenceDisclaimer(e.text,"module-reference",t);break;case"T5_INLINE":return}}addGlobalDisclaimer(e,t){this.disclaimerManager.registerGlobalDisclaimer(e.text,t)}addReferenceDisclaimer(e,t){const n="T2_PAGE_BASED"===e.displayType?"footer-reference":"module-reference",i=this.disclaimerManager.registerReferenceDisclaimer(n,e.text,void 0,t);return Object.assign(Object.assign({},e),{identifier:i,unregister:()=>this.disclaimerManager.unregisterReferenceDisclaimer(n,e.text,void 0,t)})}addInteractiveDisclaimer(e,t){const n=this.addReferenceDisclaimer(e,t),{identifier:i}=n,a=Object.assign(Object.assign({},n),{referenceClickHandler:(e,t,n,a)=>{this.handleInteractiveDisclaimerClick(e,t,n,a,i)}});return Object.assign({},a)}handleInteractiveDisclaimerClick(e,t,n,i=document.documentElement,a){var r;if(!(null==t?void 0:t.current)||!(null==e?void 0:e.current)||!a)return;const o=i.scrollTop,l=o+(((null===(r=t.current.getDisclaimerDimensions(a))||void 0===r?void 0:r.top)||0)-.33*window.innerHeight),s=o+(e.current?((e,t={})=>{const{top:n,right:i,bottom:a,left:r}=e.getBoundingClientRect();return((e,{top:t,right:n,bottom:i,left:a},{customScrollingDistance:r=0})=>({[u.ABOVE_VIEWPORT]:-(Math.abs(t)+r),[u.RIGHT_OF_VIEWPORT]:n-window.innerWidth+r,[u.BELOW_VIEWPORT]:i-window.innerHeight+r,[u.LEFT_OF_VIEWPORT]:-(Math.abs(a)+r),[u.IN_VIEWPORT]:0}[e]))((({top:e,right:t,bottom:n,left:i},a=0)=>e&&e<a?u.ABOVE_VIEWPORT:t&&t>window.innerWidth-a?u.RIGHT_OF_VIEWPORT:n&&n>window.innerHeight-a?u.BELOW_VIEWPORT:i&&i<a?u.LEFT_OF_VIEWPORT:u.IN_VIEWPORT)({top:n,right:i,bottom:a,left:r},t.safeGuardingDistance),{top:n,right:i,bottom:a,left:r},t)})(e.current,{safeGuardingDistance:.15*window.innerHeight,customScrollingDistance:.15*window.innerHeight}):0);(0,p.GZ)({distance:l,scrollableElement:i,onScrollEnd:()=>{var e;return n&&n(s),null===(e=t.current)||void 0===e?void 0:e.focusDisclaimer(a)}})}addOpenableDisclaimer(e,t){const n=this.addReferenceDisclaimer(e,t),{identifier:i,text:a}=n;this.openableDisclaimerUniqueNumber++;const r=`openable-disclaimer-${this.openableDisclaimerUniqueNumber}`,o=Object.assign(Object.assign({},n),{toggleOpen:()=>{this.toggleActiveOpenableDisclaimer(i,a,r)}});return this.openableDisclaimers.set(r,o),Object.assign(Object.assign({},o),{unregister:()=>{this.activeOpenableDisclaimerKey===r&&this.toggleActiveOpenableDisclaimer(i,a,r),o.unregister()}})}toggleActiveOpenableDisclaimer(e,t,n){if(e)if(this.activeOpenableDisclaimerKey===n)this.activeOpenableDisclaimerKey=null,this.disclaimerLayerHandle&&(this.disclaimerLayerHandle.close(),this.disclaimerLayerHandle=void 0);else{this.disclaimerLayerHandle&&(this.disclaimerLayerHandle.close(),this.disclaimerLayerHandle=void 0),this.activeOpenableDisclaimerKey=n;const i={key:n,identifier:e,text:t},r=()=>{const t=this.openableDisclaimer;t&&t.identifier===e&&t.toggleOpen&&t.toggleOpen()},o=e=>a.createElement(m,{text:e.text,identifier:e.identifier,closeButtonClick:r});this.disclaimerLayerHandle=this.layerManager.openDisclaimerLayer(o,i,{userCloseable:!0,onClose:r})}}unregisterReferenceDisclaimer(e,t,n){this.disclaimerManager.unregisterReferenceDisclaimer(t,e,void 0,n)}unregisterGlobalDisclaimer(e,t){this.disclaimerManager.unregisterGlobalDisclaimer(e,t)}}h([i.LO],y.prototype,"groupedDisclaimers",void 0),h([i.LO],y.prototype,"openableDisclaimers",void 0),h([i.LO],y.prototype,"activeOpenableDisclaimerKey",void 0),h([i.Fl],y.prototype,"footerDisclaimers",null),h([i.Fl],y.prototype,"openableDisclaimer",null),h([i.aD],y.prototype,"add",null),h([i.aD],y.prototype,"unregister",null),h([i.aD],y.prototype,"addInteractiveDisclaimer",null),h([i.aD],y.prototype,"handleInteractiveDisclaimerClick",null),h([i.aD],y.prototype,"addOpenableDisclaimer",null),h([i.aD],y.prototype,"toggleActiveOpenableDisclaimer",null),h([i.aD],y.prototype,"unregisterReferenceDisclaimer",null),h([i.aD],y.prototype,"unregisterGlobalDisclaimer",null)},21178:(e,t,n)=>{"use strict";n.d(t,{f:()=>i});const i=n(67294).createContext({})},87244:(e,t,n)=>{"use strict";n.d(t,{l:()=>a});var i=n(22188);class a{constructor(e,t){this.disclaimers={},this._store=e,this.logger=t}get footerDisclaimers(){return this.store.footerDisclaimers}set store(e){const t=this.disclaimers;Object.keys(t).map((e=>t[e])).forEach((t=>{const{references:n,identifier:i}=t,a=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n}(t,["references","identifier"]);this.logger.disclaimer.debug("transfer disclaimer to new store %s",a.text);for(let t=0;t<n;t++)e.add(Object.assign(Object.assign({},a),{identifier:i}))})),this._store=e}get store(){return this._store}add(e,t){const n=this._store.add(e,t);let i=this.disclaimers[e.text];return i?i.references+=1:(i=Object.assign(Object.assign({},e),{references:1,identifier:n.identifier}),this.disclaimers[e.text]=i),Object.assign(Object.assign({},n),{unregister:()=>{}})}}!function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);r>3&&o&&Object.defineProperty(t,n,o)}([i.LO],a.prototype,"_store",void 0)},63886:(e,t,n)=>{"use strict";var i=n(22188),a=n(90669),r=n(43703),o=n(17527),l=n(87244),s=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let c=class{constructor(){this.path="/"}init(){(0,r.Rd)().disclaimer=this,this.layeredStoreMap=new i.vP,this.permanent=new l.l(this.createStore(this.path),this.logger)}setScopedDisclaimerManagerToActualPageForFAConsumer(e,t){t&&this.disclaimerManager.setDefaultLegalForConsumer(e,t),this.disclaimerManager.setDefaultScopeForConsumer(e,this.path)}getOrCreateStore(e){return this.path!==e&&this.switchStore(e),this.permanent.store}get footerDisclaimers(){return this.permanent.store.footerDisclaimers}get openableDisclaimer(){return this.permanent.store.openableDisclaimer}getLayeredStore(e){let t=this.layeredStoreMap.get(e);return t||(t=this.createStore(e),this.layeredStoreMap.set(e,t)),t}switchStore(e){this.path=e,this.permanent.store=this.createStore(e)}createStore(e){return new o.OO(this.disclaimerManager.getScopedDisclaimerManager(e),this.layerManager,this.globalDisclaimerRegistryModel)}};s([i.LO],c.prototype,"path",void 0),s([(0,a.f3)()],c.prototype,"globalDisclaimerRegistryModel",void 0),s([(0,a.f3)()],c.prototype,"disclaimerManager",void 0),s([(0,a.f3)()],c.prototype,"layerManager",void 0),s([(0,a.f3)()],c.prototype,"logger",void 0),s([(0,a.zY)()],c.prototype,"init",null),c=s([(0,a.ri)("GlobalDisclaimerStore")],c)},82755:(e,t,n)=>{"use strict";n.d(t,{a:()=>o,C:()=>l});var i=n(67294),a=n(23755),r=n(68650);const o=i.createContext((0,r.V)()),l=e=>i.createElement(a.BB,{ContextType:o,disclaimerTypes:["T4_ITEM_BASED"]},(t=>i.createElement(a.FH,{disclaimerStore:t,children:e.children})))},3353:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,g:()=>l});var i=n(67294),a=n(23755),r=n(68650);const o=i.createContext((0,r.V)());function l(e){return i.createElement(a.BB,{ContextType:o,disclaimerTypes:["T2_PAGE_BASED"]},(t=>e.children(t.disclaimers)))}},29821:(e,t,n)=>{"use strict";n.d(t,{r:()=>o,a:()=>l});var i=n(67294),a=n(23755),r=n(68650);const o=i.createContext((0,r.V)()),l=e=>{const t=["T3_SECTION_BASED"];return e.getPageDisclaimers&&t.push("T2_PAGE_BASED"),e.getItemDisclaimers&&t.push("T4_ITEM_BASED"),i.createElement(a.BB,{ContextType:o,disclaimerTypes:t},(t=>i.createElement(a.FH,{disclaimerStore:t,children:e.children})))}},1413:(e,t,n)=>{"use strict";n.d(t,{y:()=>s,p:()=>d});var i=n(67294),a=n(64202),r=n(72307),o=n.n(r),l=n(59638);const s=",";function c(e,t,n){return n.map((n=>{if(!e)throw new Error("cannot create disclaimer references because disclaimer store is not available");const i=e.add(n,t);return Object.assign(Object.assign({},n),i)}))}function d(e){const t=(0,a.Td)(),{value:n}=(0,a.a)(),{legalEntity:r}=(0,a.aT)(),{handleRegisteredDisclaimers:s,handleUnregisterDisclaimers:d}=(0,a.z_)(),{handleRegisteredDisclaimers:m,handleUnregisterDisclaimers:u}=(0,a.aP)(),{handleRegisteredDisclaimers:p}=(0,a.hW)(),[h,g]=i.useState((()=>c(n,r,e))),[f,y]=i.useState(e);return!t.hydrating&&(0,l.L)()||(m(h),s(h),p(h)),i.useEffect((()=>{function t(){h.forEach((e=>e.unregister())),d(h),u(h)}if(o()(e,f))m(h),s(h),p(h);else{t();const i=c(n,r,e);m(i),s(i),p(i),g(i),y(e)}return function(){t()}}),[n,e,m,s,p,d,u,r,h,f]),h}},92832:(e,t,n)=>{"use strict";var i=n(67294),a=n(90669),r=n(90208),o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let l=class{constructor(){this.lightboxLayer=null,this.closeLightbox=()=>{this.lightboxLayer&&this.lightboxLayer.close(),this.lightboxLayer=null},this.shouldOpenLightbox=e=>{const t=this.spaGlobalConfig.externalLinkLightboxConfigModel;return!!t.enabled&&(!function(e){return(e.startsWith("/")||e.startsWith("./")||e.startsWith("../"))&&!e.startsWith("//")}(e)&&void 0===t.internalDomainsWhitelist.find((t=>new RegExp(t).test(e))))},this.isOpened=()=>Boolean(this.lightboxLayer&&!this.lightboxLayer.isClosed()),this.renderLightbox=e=>i.createElement(r.z,Object.assign({},e,{path:this.lightboxPath,onClose:this.closeLightbox}))}init(){const e=this.externalLinkLightboxContentModel;this.lightboxPath=this.modelStore.insertGlobalContent("externalLinkLightbox",e)}openLightbox(e,t){this.lightboxLayer&&this.closeLightbox(),this.lightboxLayer=this.layerManager.openFocusLayer(this.renderLightbox,{href:e,target:t},{userCloseable:!0,onClose:this.closeLightbox,size:"A"})}};o([(0,a.f3)()],l.prototype,"externalLinkLightboxContentModel",void 0),o([(0,a.f3)()],l.prototype,"spaGlobalConfig",void 0),o([(0,a.f3)()],l.prototype,"layerManager",void 0),o([(0,a.f3)()],l.prototype,"modelStore",void 0),o([(0,a.zY)()],l.prototype,"init",null),l=o([(0,a.ri)("ExternalLinkLightboxService",{env:"client"})],l)},89214:()=>{},49596:(e,t,n)=>{"use strict";n(67294),n(64202)},38152:(e,t,n)=>{"use strict";n.d(t,{H:()=>i});const i=n(67294).createContext({lazyload:!0})},64202:(e,t,n)=>{"use strict";n.d(t,{c3:()=>v,WS:()=>b,Tc:()=>E,fv:()=>w,p4:()=>C,t1:()=>S,Y7:()=>k,TC:()=>L,x8:()=>x,Rp:()=>$,SV:()=>_,yR:()=>I,V9:()=>T,gq:()=>N,kH:()=>P,m2:()=>O,pJ:()=>R,HQ:()=>z,K5:()=>D,u0:()=>A,a:()=>M,aT:()=>B,QQ:()=>F,r0:()=>W,En:()=>H,E4:()=>j,VF:()=>V,dv:()=>q,oh:()=>G,ts:()=>U,V7:()=>X,VY:()=>Y,Gl:()=>K,z_:()=>Q,hW:()=>Z,Td:()=>J,aP:()=>ee,po:()=>te,Xy:()=>ne,Hr:()=>ie,ce:()=>ae,dB:()=>re,X1:()=>oe,wL:()=>le,xd:()=>se,Ng:()=>ce,UV:()=>de,xh:()=>me});var i=n(67294),a=n(7279),r=n(72195),o=n(8522),l=n(20325),s=n(21178),c=n(82755),d=n(3353),m=n(29821),u=n(38152),p=n(42878),h=n(94800),g=n(28025),f=n(62300),y=n(82414);function v(){const e=i.useContext(o.g);if(!e)throw new Error("Registry is not available!");return e}function b(){return v().getSingleton("SpaGlobalConfig")}function E(){return v().getSingleton("GlobalDisclaimerStore")}function w(){return v().getSingleton("OneHubNavigationStore")}function C(){return v().getSingleton("OneHubNavigationModel")}function S(){return v().getSingleton("OneHubFooterModel")}function k(){return v().getSingleton("ContentStore")}function L(){return v().getSingleton("BreadcrumbStore")}function x(){return v().getSingleton("SkipLinksStore")}function $(){return v().getSingleton("SearchStore")}function _(){return v().getSingleton("SearchLayerService")}function I(){return v().getSingleton("SpaAsyncConfig")}function T(){return v().getSingleton("TrackingService")}function N(){return v().getSingleton("ImageService")}function P(){return i.useContext(g.YN)}function O(){return v().getSingleton("LayerStore")}function R(){return v().getSingleton("RouterService")}function z(){return v().getSingleton("ExternalLinkLightboxService")}function D(){return i.useContext(f.l)}function A(){return i.useContext(l.b)}function M(){return i.useContext(s.f)}function B(){return i.useContext(h.O)}function F(){return v().getSingleton("LoginAlertService")}function W(){return v().getSingleton("LoginStore")}function H(){return v().getSingleton("OneHubFooterModel")}function j(){return v().getSingleton("CustomHistoryManager")}function V(){return v().getSingleton("IntegratorTemplateModel")}function q(){return v().getSingleton("PersonalizationConfig")}function G(){return i.useContext(r.hi)}function U(){return v().getSingleton("PersonalizationStore")}function X(){return v().getSingleton("ModelStore")}function Y(){return v().getSingleton("NavigationService")}function K(){return v().getSingleton("LogoStore")}function Q(){return i.useContext(m.r)}function Z(){return i.useContext(d.H)}function J(){return v().getSingleton("ReactRenderService")}function ee(){return i.useContext(c.a)}function te(){return v().getSingleton("LocaleModel")}function ne(){return v().getSingleton("LoginFlyoutService")}function ie(){return v().getSingleton("TopBarModel")}function ae(){return i.useContext(p.V)}function re(){return v().getSingleton("LayerManager")}function oe(){return v().getSingleton("UserInteractionService")}function le(){return v().getSingleton("Logger")}function se(){return i.useContext(a.r)}function ce(){const{featureToggles:e}=b();return e}function de(){return i.useContext(y.o)}function me(){const e=i.useContext(u.H);return!e||e.lazyload}},62543:(e,t,n)=>{"use strict";var i=n(58509),a=n(22188),r=n(60282),o=n(90669),l=n(50660),s=n(91067),c=n(37772),d=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},m=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};let u=class{constructor(){this.pathMap=a.LO.map({},{deep:!1}),this.handleMap=a.LO.map({},{deep:!1})}initialize(){this.layerManager.subscribe((e=>{"afterRender"===e&&this.disableBodyScrollOnLayer(),"beforeClose"===e&&this.enableBodyScrollOnLayer()})),this.layerHistoryService=(0,s.aE)(this.featureHub),this.layerHistoryService.history.listen((()=>{const e=this.layerHistoryService.history.location.pathname;this.onOpenLayer(e)})),this.handleServerSideRenderedLayer(),(0,a.N7)(this.routerService,"pagePath",(()=>{this.closeAllLayers()}))}createLayerHref(e){const t={pathname:e},n=this.routerService.getLocation(),i=this.layerHistoryService.createNewRootLocationForMultipleConsumers({historyKey:l.hG,location:n},{historyKey:s.WP,location:t});return this.layerHistoryService.rootHistory.createHref(i)}onOpenLayer(e){return m(this,void 0,void 0,(function*(){return"/"===e?(this.closeAllLayers(),Promise.resolve()):new Promise(((t,n)=>{this.loadLayerData(e).then((i=>{i&&i.model?(this.openLayerInternally(i.includePath,i.model),this.logger.layer.info("open content layer: path=%s, includePath=%s",e,i.includePath),t()):(this.logger.layer.warn("couldn't open content layer: path=%s",e),n())})).catch((t=>{this.logger.layer.warn("couldn't open content layer: path=%s, message:%s",e,t.toString()),n(t)}))}))}))}openLayer(e){return m(this,void 0,void 0,(function*(){const t=yield this.loadLayerData(e);return t&&(this.layerHistoryService.history.location.pathname.length<=1?this.layerHistoryService.history.replace(e):t.model&&this.openLayerInternally(t.includePath,t.model)),t}))}onCloseLayerClick(e,t,n){const i=(0,s.xb)(this.layerHistoryService.history.location.pathname,this.openedLayerModel)+"/jcr:content/root/main";e===this.getIncludePath(i)&&this.layerHistoryService.history.replace("/"),this.trackingService.trackLayerCloseClick((0,c.Z)(t,n))}closeLayer(e){this.doCloseLayer(e)}closeAllLayers(){this.handleMap.forEach(((e,t)=>{this.logger.layer.info("close layer: path=%s",t),e.update({forceClose:!0}),e.close(),this.handleMap.delete(t)}))}disableBodyScrollOnLayer(){const e=this.layerManager.getLayers();if(e.length>0){const t=e[e.length-1];t.layer.element&&((0,i.Qp)(t.layer.element),this.logger.layer.info("disable scroll lock %s",t.layer.id))}}enableBodyScrollOnLayer(){const e=this.layerManager.getLayers();if(e.length>0){const t=e[e.length-1];t.layer.element&&((0,i.tG)(t.layer.element),this.logger.layer.info("enable scroll lock %s",t.layer.id))}if(e.length>1){const t=e[e.length-2];t.layer.element&&((0,i.Qp)(t.layer.element),this.logger.layer.info("disable scroll lock %s",t.layer.id))}}loadLayerData(e){return m(this,void 0,void 0,(function*(){if("/"===e)return Promise.resolve(void 0);const t=(e=(0,s.Ii)((0,s.xb)(e,this.openedLayerModel)))+".model.json";let n=this.pathMap.get(e);if(n){this.logger.layer.info("serve existing layer data: path=%s, includePath=%s",e,n);const t=this.getLayerData(n);return Promise.resolve({includePath:n,model:t})}return new Promise(((i,a)=>{this.modelClient.fetch(t).then((t=>{n=this.modelStore.insertGlobalContent(e,t),n=(0,s.Ii)(n),this.pathMap.set(e,n),this.logger.layer.info("new layer data stored: path=%s, includePath=%s",e,n);const a=this.getLayerData(n);i({includePath:n,model:a})})).catch((t=>{this.logger.layer.warn("couldn't fetch new layer data: path=%s, message:%s",e,t.toString()),a(t)}))}))}))}doCloseLayer(e){const t=e?this.handleMap.get(e):void 0;t?(this.logger.layer.info("close layer: path=%s",e),t.close(),this.handleMap.delete(e)):this.logger.layer.warn("couldn't find layer to close: path=%s",e)}getIncludePath(e){if(!e)return;return this.pathMap.get(e)||e}getLayerData(e){if(!e)return;const t=this.modelStore.getData(e,!0);return t?(0,r.D)(t,e):t}handleServerSideRenderedLayer(){if(this.openedLayerModel.contentResource){const e=(0,s.Ii)((0,s.xb)(this.openedLayerModel.path,this.openedLayerModel)),t=this.modelStore.insertGlobalContent(e,this.openedLayerModel.contentResource);this.pathMap.set(e,t);const n=this.getLayerData(t);if(!n)return;this.openLayerInternally(t,n)}else{const e=this.layerHistoryService.history.location.pathname;e&&e.length>1&&this.onOpenLayer(e)}}openLayerInternally(e,t){const n=n=>{n.forceClose||this.onCloseLayerClick(e,t.trackingModel.originalCqPath,t.trackingModel.contentName)};switch(t.layerType){case"CONTENT":{const i=this.layerRenderer.renderContentLayer(e,t.cqType,n);this.handleMap.set(e,i);break}case"INTERACTION":{const i=this.layerRenderer.renderInteractionLayer(e,t.cqType,n);this.handleMap.set(e,i);break}default:return}}};d([(0,o.f3)()],u.prototype,"modelStore",void 0),d([(0,o.f3)()],u.prototype,"layerRenderer",void 0),d([(0,o.f3)()],u.prototype,"openedLayerModel",void 0),d([(0,o.f3)()],u.prototype,"featureHub",void 0),d([(0,o.f3)()],u.prototype,"routerService",void 0),d([(0,o.f3)()],u.prototype,"modelClient",void 0),d([(0,o.f3)()],u.prototype,"layerManager",void 0),d([(0,o.f3)()],u.prototype,"logger",void 0),d([(0,o.f3)()],u.prototype,"trackingService",void 0),d([(0,o.zY)()],u.prototype,"initialize",null),d([a.aD],u.prototype,"onOpenLayer",null),d([a.aD],u.prototype,"closeLayer",null),d([a.aD],u.prototype,"closeAllLayers",null),d([a.aD],u.prototype,"loadLayerData",null),u=d([(0,o.ri)("LayerStore",{env:"client"})],u)},42878:(e,t,n)=>{"use strict";n.d(t,{V:()=>i});const i=n(67294).createContext({})},605:(e,t,n)=>{"use strict";n.d(t,{Y:()=>m});var i=n(67294),a=n(64202),r=n(78384),o=n(2987),l=n(16195);const s=r.default.div.withConfig({displayName:"StyledLayerDisclaimerReferences"})`
    padding: ${e=>e.theme.size.dynamic0200} 0
        ${e=>e.theme.size.dynamic0250};
`;class c extends i.PureComponent{render(){const{disclaimers:e=[]}=this.props;return e&&0!==e.length?i.createElement(o.c,{name:"sectionDisclaimers"},i.createElement(s,null,i.createElement(l.r,{disclaimers:e}))):null}}var d=n(29821);const m=e=>{const{children:t,getItemDisclaimers:n}=e,r=(0,a.ce)();return Boolean(r.layerType)?i.createElement(d.a,{getItemDisclaimers:n},(e=>i.createElement(i.Fragment,null,t,i.createElement(c,{disclaimers:e})))):t}},1113:(e,t,n)=>{"use strict";var i=n(67294),a=n(47277),r=n(90669),o=n(23797),l=n(21178),s=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let c=class{constructor(){this.disclaimerContextValueFactory=new o._,this.renderLayer=(e,t)=>()=>{const n=this.globalDisclaimerStore.getLayeredStore(e),r=this.disclaimerContextValueFactory.create(n);return i.createElement(l.f.Provider,{value:r},i.createElement(a.E,{path:e,resourceType:t}))}}renderInteractionLayer(e,t,n){return this.layerManager.openInteractionLayer(this.renderLayer(e,t),{},{size:"C",shimBackgroundType:"OPAQUE",onClose:n,userCloseable:!0})}renderContentLayer(e,t,n){return this.layerManager.openContentLayer(this.renderLayer(e,t),{},{onClose:n,userCloseable:!0})}};s([(0,r.f3)()],c.prototype,"globalDisclaimerStore",void 0),s([(0,r.f3)()],c.prototype,"layerManager",void 0),c=s([(0,r.ri)("LayerRenderer")],c)},91067:(e,t,n)=>{"use strict";n.d(t,{WP:()=>r,aE:()=>l,Ii:()=>s,xb:()=>c});var i=n(46517),a=n(50660);const r="cms-layer-store",o="/jcr:content/root/main",l=e=>(0,i.X)(e,r),s=e=>e.endsWith(o)?e:`${e}${o}`,c=(e,t)=>`${t.basePath}${e.substring(0,e.length-("."+a.XX).length)}`},94800:(e,t,n)=>{"use strict";n.d(t,{O:()=>a,K:()=>r});var i=n(67294);const a=i.createContext({});class r extends i.PureComponent{constructor(e){super(e)}render(){return i.createElement(a.Provider,{value:this.props},this.props.children)}}},54787:(e,t,n)=>{"use strict";n.d(t,{L:()=>a});const i=["debug","info","warn","error"];class a{constructor(e,t,n){this.level=2,this.initLogLevel=()=>{this.storage&&(this.level=parseInt(this.storage.get("level")||String(this.level),10)),this.setup()},this.currentLevel=e,this.storage=n,this.initLogLevel()}get currentLevel(){return i[this.level]}set currentLevel(e){this.level=i.indexOf(e),this.persist()}log(e,...t){console.log(e,...t)}debug(e,...t){}info(e,...t){}warn(e,...t){}error(e,...t){}trace(e,...t){}levelError(){this.currentLevel="error"}levelWarning(){this.currentLevel="warn"}levelInfo(){this.currentLevel="info"}levelDebug(){this.currentLevel="debug"}isEnabled(e){return this.level<=i.indexOf(e)}persist(){this.setup(),this.storage&&this.storage.set("level",String(this.level))}setup(){i.forEach((e=>{this.bindConsole(e)}))}bindConsole(e){if(e in console)if(this.isEnabled(e))this[e]=console[e].bind(console),"debug"===e&&(this.trace=console.trace.bind(console));else{const t=()=>{};this[e]=t,"debug"===e&&(this.trace=t)}}}},91534:(e,t,n)=>{},61283:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var i=n(67294),a=n(7279);class r extends i.PureComponent{render(){const{active:e,children:t}=this.props;return i.createElement(a.r.Provider,{value:{active:e}},t)}}},21977:(e,t,n)=>{"use strict";n.d(t,{f:()=>l,F:()=>s});var i=n(22188),a=n(67294),r=n(28025),o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};const l=a.createContext(null);class s{constructor(){this.type=r.QW.DEGREE_180,this.videoSrc="",this.isFullscreen=!1,this.dragDirection="none",this.isProgressBarFocused=!1,this.currentTime=0,this.duration=0}updateDrag(e){e&&(this.dragDirection=e.direction,this.currentTime=e.currentTime)}updateProgressBarFocusState(e){this.isProgressBarFocused=e}updateSrc(e){e&&(this.videoSrc=e.scene7Src)}updateDuration(e){this.duration=e}openFullscreen(){this.isFullscreen=!0}closeFullscreen(){this.isFullscreen=!1}}o([i.LO],s.prototype,"videoSrc",void 0),o([i.LO],s.prototype,"isFullscreen",void 0),o([i.LO],s.prototype,"dragDirection",void 0),o([i.LO],s.prototype,"isProgressBarFocused",void 0),o([i.LO],s.prototype,"currentTime",void 0),o([i.LO],s.prototype,"duration",void 0),o([i.aD],s.prototype,"updateDrag",null),o([i.aD],s.prototype,"updateProgressBarFocusState",null),o([i.aD],s.prototype,"updateSrc",null),o([i.aD],s.prototype,"updateDuration",null),o([i.aD],s.prototype,"openFullscreen",null),o([i.aD],s.prototype,"closeFullscreen",null)},28025:(e,t,n)=>{"use strict";n.d(t,{QW:()=>i,YN:()=>r});var i,a=n(67294);!function(e){e[e.VIDEO=0]="VIDEO",e[e.DEGREE_180=1]="DEGREE_180"}(i||(i={}));const r=a.createContext({})},81145:(e,t,n)=>{"use strict";var i=n(16743),a=n(22188),r=n(90669);const o="/__personalized__",l="/global-content";function s(e,t){const n=e.split("/");let i=t;return n.forEach((e=>{i&&i[":items"]&&e.length>0&&(i=i[":items"][e])})),i}let c=class{constructor(){this.personalizedContent={},this.customContent=a.LO.map(),this.globalContent={":items":{},":itemsOrder":[],":type":""}}getData(e,t){if(e.startsWith(l))return s(e.substring(l.length),this.globalContent);if(e.startsWith("/personalized-content")){const t=e.split(o);if(t.length>1){const e=this.personalizedContent[t[0]];if(e)return s(t[1],e)}else console.error("cannot find personalized content")}else if(e.startsWith("/custom-content")){const t=this.getCustomContent(e);if(t)return t}let n=i.ModelManager.modelStore.getData(e,t||!1);return n&&"virtualRootNode"===n[":type"]&&(n=n[":children"][e]),n}getCustomContent(e){const t=e.split("/__custom__");if(t.length>1){const e=this.customContent.get(t[0]);if(e)return s(t[1],e)}else console.error("cannot find custom content")}insertPersonalizedData(e,t,n){const i=`/personalized-content/${n}${e}`,a=t[":items"].root;return this.personalizedContent[i]=a,i+o}insertCustomContent(e,t,n){const i=d(t,e);this.customContent.set(i,n)}getCustomContentPath(e,t){return`${d(t,e)}/__custom__`}insertGlobalContent(e,t){const n=(e=e.replace(/^\/+/,"")).split("/"),i=n.length;let a=this.globalContent;for(let e=0;e<i;e++){const r=n[e];e<i-1?(a[":items"][r]=a[":items"][r]||{":items":{},":itemsOrder":[],":type":""},a=a[":items"][r]):a[":items"][r]=t}return`/global-content/${e}`}};function d(e,t){return`/custom-content${e}/${t}`}c=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}([(0,r.ri)("ModelStore")],c)},71409:(e,t,n)=>{"use strict";n.d(t,{y:()=>i});const i="BreadcrumbStore"},31396:(e,t,n)=>{"use strict";var i=n(22188),a=n(90669),r=n(21686),o=n(71409),l=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let s=class{constructor(){this.faLinks=[]}initialize(){this.breadcrumbService.listen((()=>{this.updateFALinks()})),this.routerService.listen((()=>{this.updateFALinks()}))}convert(e){return{title:e.label,url:e.href,hidden:!1,onClick:e.onClick}}updateFALinks(){const e=this.spaAsyncConfig.featureHubModel.secondaryHistoryKeysForPath[this.routerService.pagePath];this.faLinks=this.breadcrumbService.getBreadcrumbs(e).map((e=>this.convert(e)))}get links(){const e=this.contentStore.getCurrentPageRootModel();if(!e)return[];if(e.pageTrackingModel.templateType===r.W.HOME)return[];const t=e.breadcrumbModel.links;return t.length>0&&this.faLinks.length>0&&t[t.length-1].hidden?t.slice(0,t.length-1).concat(this.faLinks):t.slice().concat(this.faLinks)}get homeLabel(){const e=this.contentStore.getCurrentPageRootModel();return e?e.breadcrumbModel.homeLabel:""}get ariaLabel(){const e=this.contentStore.getCurrentPageRootModel();return e?e.breadcrumbModel.ariaLabel:""}};l([(0,a.f3)()],s.prototype,"breadcrumbService",void 0),l([(0,a.f3)()],s.prototype,"routerService",void 0),l([(0,a.f3)()],s.prototype,"contentStore",void 0),l([(0,a.f3)()],s.prototype,"spaAsyncConfig",void 0),l([i.LO],s.prototype,"faLinks",void 0),l([(0,a.zY)()],s.prototype,"initialize",null),l([i.Fl],s.prototype,"links",null),s=l([(0,a.ri)(o.y,{env:"client"})],s)},72809:(e,t,n)=>{"use strict";var i=n(22188),a=n(54383),r=n(90669),o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let l=class{constructor(){this.skipLinkClickHandlers={},this.skipLinksWrapperLabel=""}init(){this.skipLinksWrapperLabel=this.spaAsyncConfig.skipLinkModel.skipLinksWrapperLabel}get skipLinks(){const e=[];for(const t in this.spaAsyncConfig.skipLinkModel.skipLinks){const n=this.spaAsyncConfig.skipLinkModel.skipLinks[t],i=this.skipLinkClickHandlers[t];e.push(Object.assign(Object.assign({},n),{onClick:i}))}return e}setSkipLinkClickHandler(e,t,n){let i;t&&(i=this.createDefaultClickHandler(t)),this.skipLinkClickHandlers[e]=e=>{e.preventDefault(),i&&i(e),n&&n(e)}}createDefaultClickHandler(e){return()=>{const t=e.current;null!==t&&(t.scrollIntoView(),t.focus())}}};o([(0,r.f3)()],l.prototype,"spaAsyncConfig",void 0),o([i.LO],l.prototype,"skipLinkClickHandlers",void 0),o([(0,r.zY)()],l.prototype,"init",null),o([i.Fl],l.prototype,"skipLinks",null),o([i.aD],l.prototype,"setSkipLinkClickHandler",null),l=o([(0,r.ri)(a.p,{env:"client"})],l)},44546:(e,t,n)=>{"use strict";var i=n(90669),a=n(22188),r=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let o=class{constructor(){this.logoClaim=""}initialize(){this.pageInfoService.subscribe((()=>{this.updateLogo()}))}updateLogo(){if("private"===this.pageInfoService.getPageInfo().logoCategory)this.logoClaim="";else{if("secondary"===this.pageInfoService.getSource())return void(this.logoClaim=this.spaAsyncConfig.featureAppCommercialClaim);const e=function(e){const t=e?e.claim:void 0;if(!t)return;const[n,i]=t.trim().split(" ");if(!n)return;let a=`${n}`;return i&&(a+=` ${i}`),a}(this.contentStore.getCurrentPageRootModel());this.logoClaim=e||""}}};r([(0,i.f3)()],o.prototype,"pageInfoService",void 0),r([(0,i.f3)()],o.prototype,"contentStore",void 0),r([(0,i.f3)()],o.prototype,"spaAsyncConfig",void 0),r([a.LO],o.prototype,"logoClaim",void 0),r([(0,i.zY)()],o.prototype,"initialize",null),o=r([(0,i.ri)("LogoStore")],o)},60355:(e,t,n)=>{"use strict";n.d(t,{t:()=>i});const i="OneHubNavigationStore"},93788:(e,t,n)=>{"use strict";var i=n(22188),a=n(90669),r=n(65021),o=n(60355),l=n(59813),s=n(88132),c=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let d=class{constructor(){this.isTopBarAboveStage=!0,this.lastScrollDirection=s.c.UP,this.navFlyoutTeaserPath="",this.navFlyoutTeaserSecondLevelPath="",this._inPageNavigationItems=i.LO.map({}),this._isInPageNavigationOpen=!1,this._isFlyoutMenuOpen=!1,this._stageHeight=window.innerHeight,this.ticking=!1,this.tempScrollData={position:0,direction:void 0}}initialize(){if(this.navigationService.listen((()=>this.onLoad())),this.oneHubNavigationModel){const{navFlyoutTeaser:e}=this.oneHubNavigationModel;this.navFlyoutTeaserPath=this.modelStore.insertGlobalContent("navFlyoutTeaser",e)}this.routerService.onNavigate((()=>{this.closeFlyoutMenu()}))}get activeInPageNavigationItem(){return this._activeInPageNavigationItemId?this._inPageNavigationItems.get(this._activeInPageNavigationItemId):void 0}get activeInPageNavigationItemTitle(){const e=this.activeInPageNavigationItem;return e?e.title:""}get activeInPageNavigationItemUrl(){const e=this.activeInPageNavigationItem;return e?e.url:"#"}get activeInPageNavigationItemId(){const e=this.activeInPageNavigationItem;return e?e.id:void 0}get activeSectionId(){return this._activeSectionId}get activeSectionGroupId(){return this._activeSectionGroupId}get inPageNavigationItems(){return Array.from(this._inPageNavigationItems.values())}get isFlyoutMenuOpen(){return this._isFlyoutMenuOpen}get isInPageNavigationVisible(){return!this._isFlyoutMenuOpen&&this.lastScrollDirection===s.c.DOWN&&!this.isTopBarAboveStage&&this._inPageNavigationItems.size>0}get isInPageNavigationOpen(){return this._isInPageNavigationOpen}get isInPageNavigationHidden(){return this._inPageNavigationItems.size>0&&!this.isInPageNavigationVisible}get isMenuLabelVisible(){return!this._isFlyoutMenuOpen&&this.lastScrollDirection===s.c.UP||this.isInPageNavigationHidden||!this.isInPageNavigationVisible&&this.lastScrollDirection===s.c.DOWN}updateScrollPositionOnAnimationFrame(){const{scrollY:e}=window;this.ticking||(window.requestAnimationFrame((()=>this.updateScrollPosition(e,this._stageHeight))),this.lockScroll())}setSecondLevelTeaserData(e){this.navFlyoutTeaserSecondLevelPath=this.modelStore.insertGlobalContent("navFlyoutTeaserSecondLevel",e)}updateScrollPosition(e,t){e<0&&(e=0);const n=this.tempScrollData,i=(0,r.o3)(e,n.position,this.lastScrollDirection);n.direction!==i&&(this.tempScrollData=Object.assign(Object.assign({},n),{direction:i})),(0,l.M)(e,n)&&(this.lastScrollDirection=i,this._isInPageNavigationOpen=!1,this.tempScrollData={direction:this.lastScrollDirection,position:e}),this.isTopBarAboveStage=e<t,this.unlockScroll()}openFlyoutMenu(){this._isFlyoutMenuOpen=!0,this._isInPageNavigationOpen=!1}closeFlyoutMenu(){this._isFlyoutMenuOpen=!1,this._isInPageNavigationOpen=!1}openInPageNavigation(){this._isInPageNavigationOpen=!0}closeInPageNavigation(){this._isInPageNavigationOpen=!1}toggleInPageNavigation(){this._isInPageNavigationOpen=!this._isInPageNavigationOpen}setActiveInPageNavigationItem(e,t){this._activeInPageNavigationItemId===e||this._inPageNavigationItems.size<=0||(this.shouldUseSectionGroupNavigationItemId(e,t)?this._activeInPageNavigationItemId=t:(void 0===e||this._inPageNavigationItems.has(e)||(this._activeInPageNavigationItemId=void 0),this._activeInPageNavigationItemId=e,this._isInPageNavigationOpen=!1))}setActiveSection(e,t){this._activeSectionId!==e&&(this._activeSectionId=e),this._activeSectionGroupId!==t&&(this._activeSectionGroupId=t)}lockScroll(){this.ticking=!0}unlockScroll(){this.ticking=!1}setInPageNavigationItems(e){const t=e||[];this._inPageNavigationItems.clear(),t.forEach(((e,t)=>{if(e&&!this._inPageNavigationItems.has(e.anchorId)){const n=(0,l.J)(t,e);this._inPageNavigationItems.set(e.anchorId,n)}}))}onLoad(){if(this.closeFlyoutMenu(),this.contentStore){const e=this.contentStore.getCurrentPageRootModel();e&&this.setInPageNavigationItems(e.inPageNavigationLinks)}}setStageHeight(e=window.innerHeight){this._stageHeight=e}onBackButtonClick(){return this.trackingService.trackLinkClick("","back"),!this.navigationFlyoutAdmin.hasBackButtonSubscription()||!this.navigationFlyoutAdmin.fireOnBackButtonClick().isDefaultPrevented()}shouldUseSectionGroupNavigationItemId(e,t){return void 0!==e&&void 0!==t&&!this._inPageNavigationItems.has(e)&&this._inPageNavigationItems.has(t)}};c([i.LO],d.prototype,"isTopBarAboveStage",void 0),c([i.LO],d.prototype,"lastScrollDirection",void 0),c([i.LO],d.prototype,"navFlyoutTeaserPath",void 0),c([i.LO],d.prototype,"navFlyoutTeaserSecondLevelPath",void 0),c([i.LO],d.prototype,"_isInPageNavigationOpen",void 0),c([i.LO],d.prototype,"_isFlyoutMenuOpen",void 0),c([i.LO],d.prototype,"_activeInPageNavigationItemId",void 0),c([i.LO],d.prototype,"_activeSectionId",void 0),c([i.LO],d.prototype,"_activeSectionGroupId",void 0),c([(0,a.f3)()],d.prototype,"navigationService",void 0),c([(0,a.f3)()],d.prototype,"routerService",void 0),c([(0,a.f3)()],d.prototype,"contentStore",void 0),c([(0,a.f3)()],d.prototype,"modelStore",void 0),c([(0,a.f3)()],d.prototype,"oneHubNavigationModel",void 0),c([(0,a.f3)()],d.prototype,"trackingService",void 0),c([(0,a.f3)()],d.prototype,"navigationFlyoutAdmin",void 0),c([(0,a.zY)()],d.prototype,"initialize",null),c([i.Fl],d.prototype,"activeInPageNavigationItem",null),c([i.Fl],d.prototype,"activeInPageNavigationItemTitle",null),c([i.Fl],d.prototype,"activeInPageNavigationItemUrl",null),c([i.Fl],d.prototype,"activeInPageNavigationItemId",null),c([i.Fl],d.prototype,"activeSectionId",null),c([i.Fl],d.prototype,"activeSectionGroupId",null),c([i.Fl],d.prototype,"inPageNavigationItems",null),c([i.Fl],d.prototype,"isFlyoutMenuOpen",null),c([i.Fl],d.prototype,"isInPageNavigationVisible",null),c([i.Fl],d.prototype,"isInPageNavigationOpen",null),c([i.Fl],d.prototype,"isInPageNavigationHidden",null),c([i.Fl],d.prototype,"isMenuLabelVisible",null),c([i.aD],d.prototype,"updateScrollPositionOnAnimationFrame",null),c([i.aD],d.prototype,"setSecondLevelTeaserData",null),c([i.aD],d.prototype,"updateScrollPosition",null),c([i.aD],d.prototype,"openFlyoutMenu",null),c([i.aD],d.prototype,"closeFlyoutMenu",null),c([i.aD],d.prototype,"openInPageNavigation",null),c([i.aD],d.prototype,"closeInPageNavigation",null),c([i.aD],d.prototype,"toggleInPageNavigation",null),c([i.aD],d.prototype,"setActiveInPageNavigationItem",null),c([i.aD],d.prototype,"setActiveSection",null),c([i.aD],d.prototype,"setInPageNavigationItems",null),c([i.aD],d.prototype,"onLoad",null),c([i.aD.bound],d.prototype,"onBackButtonClick",null),d=c([(0,a.ri)(o.t,{env:"client"})],d)},9562:(e,t,n)=>{"use strict";var i=n(90669);const a="Not ready on server!";var r=n(60355),o=n(88132);let l=class{constructor(){this.activeInPageNavigationItemTitle="",this.activeInPageNavigationItemUrl="#",this.inPageNavigationItems=[],this.isFlyoutMenuOpen=!1,this.isInPageNavigationOpen=!1,this.isInPageNavigationVisible=!1,this.isInPageNavigationHidden=!0,this.isTopBarAboveStage=!0,this.isMenuLabelVisible=!0,this.lastScrollDirection=o.c.UP,this.navFlyoutTeaserPath="",this.navFlyoutTeaserSecondLevelPath=""}closeFlyoutMenu(){throw Error(a)}closeInPageNavigation(){throw Error(a)}setInPageNavigationItems(){throw Error(a)}lockScroll(){throw Error(a)}openFlyoutMenu(){throw Error(a)}openInPageNavigation(){throw Error(a)}setActiveInPageNavigationItem(){throw Error(a)}setActiveSection(){throw Error(a)}toggleInPageNavigation(){throw Error(a)}unlockScroll(){throw Error(a)}updateScrollPosition(){throw Error(a)}updateScrollPositionOnAnimationFrame(){throw Error(a)}onLoad(){throw Error(a)}setStageHeight(){throw Error(a)}setSecondLevelTeaserData(){throw Error(a)}onBackButtonClick(){throw Error(a)}};l=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}([(0,i.ri)(r.t,{env:"server"})],l)},88132:(e,t,n)=>{"use strict";var i;n.d(t,{c:()=>i}),function(e){e.UP="up",e.DOWN="down"}(i||(i={}))},87241:(e,t,n)=>{"use strict";var i=n(90669),a=n(22188),r=n(59638),o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let l=class{initialize(){this.pageInfoService.subscribe((()=>this.logger.navigation.debug(`logo: ${this.pageInfoService.getPageInfo().logoCategory}`))),(0,r.L)()&&this.routerService.listen((()=>{return e=this,t=void 0,i=function*(){this.routerService.pagePath!==this.lastPath&&(this.lastPath=this.routerService.pagePath,yield(0,a.gx)((()=>!!this.contentStore.getCurrentPageRootModel())),this.setPageInfo())},new((n=void 0)||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}));var e,t,n,i})),this.setPageInfo()}setPageInfo(){const e=this.contentStore.getCurrentPageRootModel();if(e){const t=e.claim?"commercial":"private";this.pageInfoService.setPageInfo({logoCategory:t})}}};o([(0,i.f3)()],l.prototype,"contentStore",void 0),o([(0,i.f3)()],l.prototype,"pageInfoService",void 0),o([(0,i.f3)()],l.prototype,"routerService",void 0),o([(0,i.f3)()],l.prototype,"logger",void 0),o([(0,i.zY)()],l.prototype,"initialize",null),l=o([(0,i.ri)("PageInfoManager")],l)},54383:(e,t,n)=>{"use strict";n.d(t,{p:()=>i});const i="SkipLinksStore"},59813:(e,t,n)=>{"use strict";function i(e,t){return{index:e,id:t.anchorId,title:t.inPageNavigationTitle,url:`#${t.anchorId}`}}function a(e,t){return Math.abs(t.position-e)>15}n.d(t,{J:()=>i,M:()=>a})},34632:()=>{},54475:(e,t,n)=>{"use strict";n.d(t,{V:()=>a});var i=n(74343);class a{constructor(e,...t){this.storage=e,this.namespace=t}remove(e){return this.storage.remove((0,i.E)(this.namespace,e))}get(e){return this.storage.get((0,i.E)(this.namespace,e))}set(e,t){this.storage.set((0,i.E)(this.namespace,e),t)}}},76896:(e,t,n)=>{"use strict";var i=n(22188),a=n(90669),r=n(96688),o=n(91914),l=n(5118),s=n(56109),c=n(96701),d=n(5098),m=n(57695),u=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},p=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};const h=e=>{const t=document.createElement("html");t.innerHTML=e.content;const n=t.querySelector(".fragmentModel");if(!n)throw new Error("cannot find fragment model in XF");const i=JSON.parse(n.innerHTML).model[":children"],a=Object.keys(i)[0],r={":path":a};return Object.assign(Object.assign({},i[a]),r)};class g{constructor(){this.loaded=!1,this.pendingContents=[]}reset(){this.loaded=!1,this.pendingContents=[]}}u([i.LO],g.prototype,"loaded",void 0);let f=class{constructor(){this.globalContentMap=i.LO.map({}),this.mboxedContentMap=i.LO.map({}),this.insertMap=i.LO.map({},{deep:!1}),this.loadedPagesMap=new Map,this.onHistoryChange=()=>p(this,void 0,void 0,(function*(){if(!(0,m.aV)(this.spaGlobalConfig.featureToggles))return;const e=this.routerService.pagePath,t=this.spaGlobalConfig.author?this.routerService.pagePath:this.spaGlobalConfig.marketPath+this.routerService.pagePath;try{yield(0,o.G)((()=>p(this,void 0,void 0,(function*(){const[n,i]=yield(0,m.Ae)(this.smartDigitalService,this.logger,t);this.updateProfile(n,i)&&this.clear(),this.isPageLoaded(e)||(yield this.executeGlobalOffer(n,i))})))(),this.personalizationConfig.timeout,"waiting for personalization after navigation")}catch(e){const t=`cannot get personalisation on navigation. cause: \n${e.message}`;this.logger.personalization.error(t),(0,s.o)("ClientPersonalizationNavigationEvent",t)}finally{this.setPageLoaded(e)}}))}init(){return p(this,void 0,void 0,(function*(){if(!this.personalizationConfig.enabled||(0,m.po)(this.spaGlobalConfig.featureToggles))return void this.logger.personalization.debug("no personalization enabled:%s, vec:%s, opt in:%s",this.personalizationConfig.enabled,(0,l.s)(),(0,m.aV)(this.spaGlobalConfig.featureToggles));const e=this.routerService.pagePath||"";this.routerService.listen(this.onHistoryChange);const t=(new Date).getTime();try{const n=yield(0,o.G)(this.personalizationLoader.getData(),this.personalizationConfig.timeout,"getting personalization"),i=(new Date).getTime();this.logger.personalization.info("successfully loaded personalization after %s s",Math.round((i-t)/100)/10),this.currentSegmentProfile=n.segmentProfile,this.currentLocalProfile=n.localProfile,this.processOffers(n.globalOffers,n.mboxedOffers)}catch(e){this.showDefault();const t=`cannot get personalisation on initialisation. cause: \n${e.message}`;this.logger.personalization.error(t),(0,s.o)("ClientPersonalizationInit",t)}finally{this.setPageLoaded(e)}}))}getInserts(e){if(!this.personalizationConfig.enabled||(0,m.po)(this.spaGlobalConfig.featureToggles))return[];const t=this.insertMap.get(e)||[];return this.logger.personalization.debug("found %s inserts for %s ",t?t.length:0,e),t}getContent(e,t,n){if(!this.personalizationConfig.enabled||(0,m.po)(this.spaGlobalConfig.featureToggles))return;let i=this.globalContentMap.get((0,d.P1)(e))||this.mboxedContentMap.get(t);const a=this.isPageLoaded(this.routerService.pagePath);return i||a?!i&&a&&(this.logger.personalization.debug("no personalization for %s ",e),i={loaded:!0}):(i={loaded:!1},this.logger.personalization.debug("pending personalisation %s ",e),this.getPageLoading(e).pendingContents.push((0,d.P1)(e))),i}executeGlobalOffer(e,t){return p(this,void 0,void 0,(function*(){this.logger.personalization.debug("ClientPersonalizationStore.executeGlobalOffer",e,t);const n=yield this.contentStore.getCurrentPageRootModelAsPromise(),[i,a]=yield Promise.all([this.adobeTargetService.getOffer("target-global-mbox",e),this.adobeTargetService.getOffers(n.availableMboxesOnPage,t)]);this.processOffers(i,a)}))}compareProfiles(e,t){return Object.keys(e).some((n=>!t||t[n]!==e[n]))}updateProfile(e,t){const n=this.compareProfiles(e,this.currentSegmentProfile),i=this.compareProfiles(t,this.currentLocalProfile),a=n||i;return this.currentSegmentProfile=e,this.currentLocalProfile=t,a&&this.logger.personalization.debug("profile changed"),a}processOffers(e,t){this.logger.personalization.debug("ClientPersonalizationStore.processOffers: got %s global offers and %s offers for mboxes",e?e.length:0,t?t.length:0),e.forEach((e=>{if(e)switch(e.action){case"setContent":this.handleSetContentOffer(e);break;default:this.logger.personalization.info("unknown action")}})),t.forEach((e=>{e&&e.offers&&e.offers.forEach((t=>{switch(t.type){case"html":this.handleHtmlOffer(t,e.name);break;default:this.logger.personalization.info("unknown type")}}))}))}handleSetContentOffer(e){try{this.logger.personalization.debug("ClientPersonalizationStore.handleSetContentOffer",e);const t=h(e),n=(0,d.rV)(e.selector);if(null===n)return void this.logger.personalization.info("selector is invalid %s",e.selector);const i=this.modelStore.insertPersonalizedData((0,d.Od)(n),t,"global"),a=t[":items"].root;let o=a[":type"],l="";o===r.G&&(l="/main",o=a[":items"].main[":type"]);const s=t.contentId,c=t.cmsVersion;if(c!==this.spaGlobalConfig.cmsVersion)return void this.logger.personalization.warn("personalization won't be inserted for %s due to old cms version (%s) of XF",n.path,c);if(void 0!==n.index){this.logger.personalization.debug("insert personalized content %s at index %s",n.path,n.index);let e=this.insertMap.get(n.path);e||(e=[],this.insertMap.set(n.path,e)),e.push({index:n.index,path:i,resourceType:o})}else{this.logger.personalization.debug("replace personalized content %s",n.path);const e={resource:{path:i+l,resourceType:o,contentId:s},loaded:!0};this.globalContentMap.set((0,d.P1)(n.path),e)}}catch(e){return void this.logger.personalization.error("content is not valid json in offer. Reason:\n %s",e.message)}}handleHtmlOffer(e,t){try{this.logger.personalization.debug("ClientPersonalizationStore.handleHtmlOffer",e,t);const n=h(e),i=n[":items"].root;let a=i[":type"],o="";a===r.G&&(o="/main",a=i[":items"].main[":type"]);const l=this.modelStore.insertPersonalizedData(t,n,"mbox"),s=n.contentId,c=n.cmsVersion;if(c!==this.spaGlobalConfig.cmsVersion)return void this.logger.personalization.warn("won't personalized content %s for mbox %s due to old cms version (%s) of XF",s,t,c);this.logger.personalization.debug("replace personalized content %s for mbox %s",s,t);const d={resource:{path:l+o,resourceType:a,contentId:s},loaded:!0};this.mboxedContentMap.set(t,d)}catch(e){return void this.logger.personalization.error("content is not valid json in html offer. Reason:\n %s",e.message)}}clear(){this.globalContentMap.clear(),this.mboxedContentMap.clear(),this.loadedPagesMap.forEach((e=>e.reset()))}setPageLoaded(e){this.logger.personalization.info("content loaded for %s",e);const t=this.getPageLoading(e);t.loaded||(t.loaded=!0,t.pendingContents=[])}isPageLoaded(e){return this.getPageLoading(e).loaded}getPageLoading(e){const t=function(e){const t=e.split("/jcr:content");return t.length>1&&t[1].length>0?{page:t[0],path:t[1]}:{page:t[0]}}(e).page;let n=this.loadedPagesMap.get(t);return n||(n=new g,this.loadedPagesMap.set(t,n)),n}showDefault(){c.W.showDefault()}};u([(0,a.f3)()],f.prototype,"adobeTargetService",void 0),u([(0,a.f3)()],f.prototype,"personalizationConfig",void 0),u([(0,a.f3)()],f.prototype,"spaGlobalConfig",void 0),u([(0,a.f3)()],f.prototype,"routerService",void 0),u([(0,a.f3)()],f.prototype,"smartDigitalService",void 0),u([(0,a.f3)()],f.prototype,"modelStore",void 0),u([(0,a.f3)()],f.prototype,"personalizationLoader",void 0),u([(0,a.f3)()],f.prototype,"contentStore",void 0),u([(0,a.f3)()],f.prototype,"logger",void 0),u([(0,a.zY)()],f.prototype,"init",null),u([i.aD],f.prototype,"processOffers",null),f=u([(0,a.ri)("PersonalizationStore",{env:"client"})],f)},62300:(e,t,n)=>{"use strict";n.d(t,{l:()=>i});const i=n(67294).createContext({})},56149:()=>{},96701:(e,t,n)=>{"use strict";n.d(t,{U:()=>c,W:()=>d});var i=n(90669),a=n(5118),r=n(56109),o=n(57695),l=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},s=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};const c="js-personalization-show-default";let d=class{static hideDefault(){document.body.classList.remove(c)}static showDefault(){document.body.classList.add(c)}init(){return s(this,void 0,void 0,(function*(){this.logger.personalization.info("loading personalization"),this.logger.personalization.debug("personalisation is enabled = %s",this.personalizationConfig.enabled),this.logger.personalization.debug("personalisation is in vec = %s",(0,a.s)()),this.logger.personalization.debug("personalisation is opt-ed in = %s",(0,o.aV)(this.spaGlobalConfig.featureToggles)),this.personalizationConfig.enabled&&!(0,o.po)(this.spaGlobalConfig.featureToggles)&&(this.logger.personalization.debug("load personalisation"),this.data=new Promise(((e,t)=>s(this,void 0,void 0,(function*(){try{const t=this.spaGlobalConfig.aemResourcePath,[n,i]=yield(0,o.Ae)(this.smartDigitalService,this.logger,t);this.logger.personalization.debug("loaded profile");const[a,r]=yield(0,o.c)(this.adobeTargetService,n,i,this.spaGlobalConfig.initialPersonalizableMboxes,this.logger);this.logger.personalization.debug("loaded %f offers",a.length),e({globalOffers:a,segmentProfile:n,mboxedOffers:r,localProfile:i})}catch(e){const n=`cannot get personalisation on initialisation. cause: \n${"string"==typeof e?e:e.message}`;this.logger.personalization.error(n),(0,r.o)("PriorityPersonalisationLoaderInit",n),t(e)}})))))}))}getData(){return s(this,void 0,void 0,(function*(){return this.data}))}};l([(0,i.f3)()],d.prototype,"adobeTargetService",void 0),l([(0,i.f3)()],d.prototype,"personalizationConfig",void 0),l([(0,i.f3)()],d.prototype,"smartDigitalService",void 0),l([(0,i.f3)()],d.prototype,"spaGlobalConfig",void 0),l([(0,i.f3)()],d.prototype,"logger",void 0),l([(0,i.zY)()],d.prototype,"init",null),d=l([(0,i.ri)("PersonalizationLoader",{env:"priority"})],d)},5098:(e,t,n)=>{"use strict";n.d(t,{Od:()=>i,rV:()=>a,P1:()=>r});const i=e=>"number"==typeof e.index?`${e.path}_${e.index}`:e.path,a=e=>{const t=e.match(/^#vwa_cms_(slot|(insert)_(\d+))_([^ ]+)?/);if(null!==t&&5===t.length){if("slot"===t[1])return{path:t[4].split("\\").join(""),index:void 0};if("insert"===t[2])return{path:t[4].split("\\").join(""),index:parseInt(t[3],10)}}return null},r=(e,t)=>void 0!==t?`vwa_cms_insert_${t}_${e}`:`vwa_cms_slot_${e}`},57695:(e,t,n)=>{"use strict";n.d(t,{Ae:()=>r,c:()=>o,aV:()=>l,po:()=>s});var i=n(5118),a=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};function r(e,t,n){return a(this,void 0,void 0,(function*(){return Promise.all([e.getSegmentProfile().catch((e=>{const n="string"==typeof e?e:e.message;return t.personalization.error("Unable to load segment profile: ",n),{}})),e.getLocalProfile(n).catch((e=>{const n="string"==typeof e?e:e.message;return t.personalization.error("Unable to load 1:1 profile: ",n),{}}))])}))}function o(e,t,n,i,r){return a(this,void 0,void 0,(function*(){return Promise.all([e.getOffer("target-global-mbox",t).catch((e=>{const t="string"==typeof e?e:e.message;return r.personalization.error("Unable to load segment offers: ",t),[]})),e.getOffers(i,n).catch((e=>{const t="string"==typeof e?e:e.message;return r.personalization.error("Unable to load 1:1 offers: ",t),[]}))])}))}function l(e){if(e.enableConsentCheckForPersonalization){const{vwdata:e}=window;return!e||1===e.consent.getPersonalizationStatus()}return!1}function s(e){return!l(e)||(0,i.s)()}},27864:(e,t,n)=>{"use strict";var i=n(22188),a=n(88257),r=n(90669),o=n(76057),l=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let s=class{constructor(){this.state={path:"",rendered:!1,initialRender:!0,pathChanged:!0},this.loading=!1,this.isSmoothScrollRunning=!1,this.onRouteEvent=()=>{this.loading=!this.contentStore.getCurrentPageRootModel();const e=this.routerService.state,t=this.state.rendered&&e.pagePath===this.state.path,n=e.pagePath!==this.state.path;this.state={action:e.action,path:e.pagePath,initialRender:!1,rendered:t,pathChanged:n}},this.defaultNavigationAction=e=>{const t=this.state.initialRender,n=e.newValue.rendered,i="PUSH"===e.newValue.action||"REPLACE"===e.newValue.action,r=!e.oldValue||e.newValue.path!==e.oldValue.path,l=window.location.hash;if(i)if(n&&l&&!t){const e=unescape(l.substr(1)).replace(/[^\w\-\\:\\.]/g,"_"),t=this.findTargetElement(e);if(t){const e=t.getBoundingClientRect().top-a.E;if(r)window.scrollBy(0,e);else{const n=()=>{this.isSmoothScrollRunning=!1,t.focus()};this.isSmoothScrollRunning=!0,(0,o.ld)({distance:e,onScrollEnd:n})}this.logger.navigation.debug("scroll into view %s - %s",l,e)}}else!l&&r&&(this.logger.navigation.debug("scroll to top of new page"),window.scrollTo(0,0))}}init(){this.state={path:this.routerService.pagePath,rendered:!0,initialRender:!0,action:"PUSH",pathChanged:!0},this.routerService.listen(this.onRouteEvent),this.listen(this.defaultNavigationAction)}onRender(e){this.loading=!this.contentStore.getCurrentPageRootModel(),this.state.path!==e&&this.logger.navigation.error("render event changed path to %s from %s",e,this.state.path),!this.state.initialRender&&this.state.rendered||(this.state={path:e,rendered:!0,initialRender:this.state.initialRender,action:this.state.action,pathChanged:this.state.pathChanged})}listen(e){return(0,i.N7)(this,"state",e)}findTargetElement(e){try{const t=document.querySelector("#"+e);return t||this.logger.navigation.warn("no scroll because cannot find element with id %s",e),t}catch(t){this.logger.navigation.warn("no scroll because id isn't properly formatted %s",e)}return null}};l([i.LO],s.prototype,"state",void 0),l([i.LO],s.prototype,"loading",void 0),l([i.LO],s.prototype,"isSmoothScrollRunning",void 0),l([(0,r.f3)()],s.prototype,"routerService",void 0),l([(0,r.f3)()],s.prototype,"contentStore",void 0),l([(0,r.f3)()],s.prototype,"logger",void 0),l([(0,r.zY)()],s.prototype,"init",null),l([i.aD],s.prototype,"onRender",null),l([i.aD],s.prototype,"onRouteEvent",void 0),s=l([(0,r.ri)("NavigationService",{env:"client"})],s)},67155:(e,t,n)=>{"use strict";var i=n(22188),a=n(67294),r=n(56136),o=n(90669),l=n(7521),s=n(96701),c=n(21349),d=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let m=class{constructor(){this.navigationListeners=[],this.state=(0,i.LO)({action:"PUSH",pagePath:(0,l.u)(window.location.pathname)||""})}init(){this.listen(this.onRouteEvent.bind(this))}wrapWithRouter(e){return a.createElement(r.F0,{history:this.showroomNavigationManager.history},e)}getLocation(){return this.showroomNavigationManager.history.location}listen(e){return this.showroomNavigationManager.history.listen(e)}onNavigate(e){this.navigationListeners.push(e)}navigate(e){this.navigationListeners.forEach((e=>e()));const t=this.showroomNavigationManager.history.location;if(e.startsWith("#")){const n={pathname:t.pathname,search:t.search,hash:e};this.showroomNavigationManager.history.push(n)}else try{const t=new URL("http://www.domain.de"+e),n={pathname:t.pathname,search:t.search,hash:t.hash};this.historyService.rootHistory.push(n)}catch(e){return void console.error("cannot navigate because path is not a properly formatted")}}get appRootPath(){return this.spaGlobalConfig.appRootPath}isAppLink(e){return(0,c.v)(e,this.spaGlobalConfig,this.appRootPath)}get pagePath(){return this.state.pagePath}replace(e){this.showroomNavigationManager.history.replace(e)}onRouteEvent(e,t){this.state.action=t;const n=(0,l.u)(e.pathname)||"";this.state.pagePath!==n&&(this.state.pagePath=n),s.W.hideDefault()}};d([(0,o.f3)()],m.prototype,"spaGlobalConfig",void 0),d([(0,o.f3)()],m.prototype,"showroomNavigationManager",void 0),d([(0,o.f3)()],m.prototype,"historyService",void 0),d([(0,o.zY)()],m.prototype,"init",null),d([i.Fl],m.prototype,"pagePath",null),d([i.aD],m.prototype,"onRouteEvent",null),m=d([(0,o.ri)("RouterService",{env:"client"})],m)},92887:()=>{},14232:()=>{},46622:(e,t,n)=>{"use strict";n(67294)},21349:(e,t,n)=>{"use strict";n.d(t,{v:()=>r});var i=n(25614),a=n(84463);function r(e,t,n){return!!e.startsWith(i.R)||!Boolean(t.integratorTemplateModel)&&(e.startsWith(n)||(0,a.E)(e))}},21312:(e,t,n)=>{"use strict";n.d(t,{y:()=>G});var i=n(67294),a=n(73935),r=n(17061),o=n(73154),l=n(86119),s=n(78384),c=n(46410),d=n(32667),m=n(52745),u=n(49181),p=n(52140),h=n(10112),g=n(81697);const f=s.default.div.withConfig({displayName:"StyledInputField"})`
    display: flex;
    border-bottom: solid 1px ${e=>e.theme.border.color.secondary};
    border-color: ${e=>e.isError?e.theme.validation.error:e.isEmpty?e.theme.border.color.secondary:e.theme.border.color.primary};

    &:focus-within {
        border-color: ${e=>e.isError?e.theme.validation.error:e.theme.border.color.primary};
        color: ${e=>e.theme.interaction.recipe300.default};
    }

    ${e=>e.isEmpty&&`color: ${e.theme.interaction.recipe550.default};`};
`,y=s.default.div.withConfig({displayName:"StyledInputWrapper"})`
    width: 100%;
`,v=s.default.input.withConfig({displayName:"StyledInput"})`
    height: 100%;
    min-height: ${e=>e.theme.size.static300};
    width: 100%;

    padding: ${e=>e.theme.size.dynamic0050} 0;

    border: 0;
    border-radius: 0;
    outline: 0;
    background: transparent;

    color: ${e=>e.theme.interaction.recipe300.default};
    font-size: ${e=>e.theme.textAppearances.headline0250.fontSize};
    font-family: ${e=>e.theme.textAppearances.headline0250.fontFamily};
    font-weight: ${e=>e.theme.text.weight.light};

    @media (min-width: ${c.u3.b560}px) {
        font-size: ${e=>e.theme.textAppearances.headline0350.fontSize};
        font-family: ${e=>e.theme.textAppearances.headline0350.fontFamily};
    }

    ::placeholder {
        color: ${e=>e.theme.interaction.recipe200.default};
    }

    &::-ms-clear {
        display: none;
    }
`,b=s.default.button.withConfig({displayName:"StyledButton"})`
	${g.sp}
	padding: 0 ${e=>e.theme.size.dynamic0020};
	@media (min-width: ${c.u3.b560}px) {
		padding: 0 ${e=>e.theme.size.dynamic0050};
	}

	border-color: ${e=>e.isEmpty?e.theme.border.color.secondary:e.theme.border.color.primary};

	color: inherit;
`,E=s.default.div.withConfig({displayName:"StyledErrorText"})`
    padding-top: ${e=>e.theme.size.dynamic0050};
    color: ${e=>e.theme.interaction.recipe360.default};
`;class w extends i.PureComponent{constructor(e){super(e),this.inputRef=i.createRef(),this.state={inputEmpty:!0,submitted:!1}}render(){const{placeholder:e,submitCallback:t,errorMessage:n,submitButtonLabel:r,clearResultsButtonLabel:l}=this.props,{inputEmpty:c,submitted:d}=this.state,m=d?l:r,u=e=>{const t=0===e.target.value.length;this.setState({inputEmpty:t})},w=e=>{e.value="",e.focus(),this.setState({submitted:!1,inputEmpty:!0}),t(!0)};return i.createElement(i.Fragment,null,i.createElement(f,{isEmpty:c,isError:Boolean(n)},i.createElement(y,null,i.createElement(v,{placeholder:e,type:"text",name:"search-input",onChange:e=>u(e),onKeyDown:e=>{this.setState({submitted:!1}),13!==e.keyCode||c||(this.setState({submitted:!0}),t(!1,this.inputRef))},ref:this.inputRef})),i.createElement(b,{isEmpty:c,onClick:()=>{const e=a.findDOMNode(this.inputRef.current);c&&e instanceof HTMLInputElement?e.focus():d&&e instanceof HTMLInputElement?w(e):(this.setState({submitted:!0}),t(!1,this.inputRef))},"aria-label":m},i.createElement(s.ThemeContext.Consumer,null,(({direction:e})=>(e=>d&&e!==g.Nm.RTL||!d&&e===g.Nm.RTL?i.createElement(p.s,{ariaHidden:!0}):i.createElement(h._,{ariaHidden:!0}))(e)))),i.createElement(g.Wc,{"aria-live":"polite"},m)),n&&i.createElement(E,null,i.createElement(o.xv,{color:o.d9.inherit},n)))}}const C=s.default.div.withConfig({displayName:"StyledSearchLayerContainer"})`
    position: relative;
    // full vh - top layer margin
    min-height: calc(100vh - ${e=>e.theme.size.dynamic0350});
    display: flex;
    flex-direction: column;
    z-index: 0; // create isolated stacking context

    padding: 0 ${e=>e.theme.size.grid002}
        ${e=>e.theme.size.dynamic0350};

    @media (min-width: ${c.u3.b560}px) {
        padding-left: ${e=>e.theme.size.grid001};
        padding-right: ${e=>e.theme.size.grid001};
        justify-content: center;
    }

    @media (min-width: ${c.u3.b960}px) {
        padding-left: ${e=>e.theme.size.grid002};
        padding-right: ${e=>e.theme.size.grid002};
    }

    @media (min-width: ${c.u3.b1600}px) {
        padding-left: ${e=>e.theme.size.grid003};
        padding-right: ${e=>e.theme.size.grid003};
    }
`,S=s.default.div.withConfig({displayName:"StyledCloseButtonContainer"})`
    position: fixed;
    bottom: ${e=>e.theme.size.static400};
    left: 50%;
    transform: translateX(-50%);
    background: ${e=>e.theme.global.backgroundColor};
    border-radius: 15px;
`,k=s.default.div.withConfig({displayName:"StyledInputArea"})`
    position: sticky;
    z-index: 1;
    top: 0;
    padding: ${e=>e.theme.size.dynamic0100} 0
        ${e=>e.theme.size.dynamic0130};
    background-color: ${e=>e.theme.global.backgroundColor};
`,L=s.default.a.withConfig({displayName:"FocusTrap"})`
    outline: none;
`;function x(e){const{children:t,closeButton:n,placeholder:a,submitCallback:r,errorMessage:o,submitButtonLabel:l,clearResultsButtonLabel:s}=e;return i.createElement(C,null,(0,g.gn)()?i.createElement(L,{tabIndex:0}):null,i.createElement(k,null,i.createElement(w,{placeholder:a,submitCallback:r,errorMessage:o,submitButtonLabel:l,clearResultsButtonLabel:s})),i.createElement(d.W,{wrap:m.Hq.always,gutter:u.X.dynamic0100,stretchContent:!0},t),i.createElement(S,null,n))}var $=n(64202),_=n(30271),I=n(41979),T=n(33700),N=n(50273),P=n(87465),O=n(5649);const R={[c.u3.b1600]:u.X.grid001},z={[c.u3.b560]:u.X.grid001,[c.u3.b1600]:u.X.grid002},D={left:R,right:R},A={left:z,right:z},M=T.zo.div.withConfig({displayName:"StyledResultWrapper"})`
    width: 100%;
    margin-bottom: ${e=>e.theme.size.dynamic0200};

    @media (min-width: ${c.u3.b560}px) {
        margin-bottom: ${e=>e.theme.size.dynamic0050};
    }
`;M.displayName="StyledResultWrapper";const B=T.zo.div.withConfig({displayName:"StyledTitleWrapper"})`
    margin-bottom: ${e=>e.theme.size.static150};
`;B.displayName="StyledTitleWrapper";const F=T.zo.div.withConfig({displayName:"StyledPathWrapper"})`
    margin-top: ${e=>e.theme.size.dynamic0050};

    @media (min-width: ${c.u3.b560}px) {
        margin-bottom: ${e=>e.theme.size.dynamic0050};
    }
`;F.displayName="StyledPathWrapper";const W=T.zo.div.withConfig({displayName:"StyledSeparator"})`
    @media (min-width: ${c.u3.b560}px) {
        border-top: solid ${e=>e.theme.separatorColor} 2px;
    }
`;W.displayName="StyledSeparator";const H=T.zo.div.withConfig({displayName:"StyledLoadingWrapper"})`
    text-align: center;
    margin: ${e=>e.theme.size.dynamic0200} 0;
`;function j(e){const{title:t,description:n,breadcrumbs:a}=e;return i.createElement(M,null,i.createElement(B,null,t),n,i.createElement(F,null,a),i.createElement(W,null))}H.displayName="StyledLoadingWrapper";const V=e=>{const{results:t,allResultsLabel:n,spinnerTitle:a}=e;if(!t)return i.createElement(H,null,i.createElement(N.$,{variant:"x-large",title:a}));const r=i.createElement(O.x,{tag:o.rh.h2,appearance:o.C2.headline0350},n,":");return i.createElement(P.Ar,{rowGap:u.X.dynamic0130},i.createElement(d.W,{padding:D},r),i.createElement(d.W,{wrap:m.Hq.always,padding:A},t))};V.displayName="SearchResults";const q=e=>i.createElement(r.M,{tag:"button",emphasis:"secondary",icon:i.createElement(l.x,{variant:"small",ariaHidden:!0}),onClick:e.onClick},i.createElement(o.xv,{color:o.d9.inherit,appearance:o.C2.copy0100},e.label));function G(){const e=(0,$.Rp)(),t=(0,$.SV)(),n=(0,$.V9)(),r=(0,$.WS)(),[l,s]=i.useState(),[c,d]=i.useState(),[m,u]=i.useState(""),[p,h]=i.useState(!1),g=e.searchConfig,{allResultsLabel:f,closeButtonLabel:y,placeholder:v,searchErrorMessage:b,submitButtonLabel:E,clearResultsButtonLabel:w}=g,C=l&&l.hits.hit.map((e=>{const t=e.fields.metatag_vw_breadcrumb&&e.fields.metatag_vw_breadcrumb[0].split(";").filter(((e,t)=>t%2==0)).join(" > "),n=e.fields.metatag_og_title,a=e.fields.metatag_description,r=e.fields.id[0],l=i.createElement(O.x,{appearance:o.C2.headline0200},i.createElement(I.O,{href:r,contentId:"search-layer-results-click"},n)),s=i.createElement(o.xv,{appearance:o.C2.copy0150},a),c=i.createElement(o.xv,{appearance:o.C2.copy0100,color:o.d9.secondary},t);return i.createElement(j,{key:e.id,title:l,description:s,breadcrumbs:c})})),S=i.createElement(q,{label:y,onClick:t.closeLightbox}),k=i.useCallback((t=>{return i=this,a=void 0,o=function*(){try{const i=yield e.doSearch(t);s(i);const a=i.hits.hit.length;u((0,_.T)(f,{resultsCount:String(a),searchPhrase:t})),n.trackSearchResultListLoad(t,a)}catch(e){throw s(void 0),h(!0),e}},new((r=void 0)||(r=Promise))((function(e,t){function n(e){try{s(o.next(e))}catch(e){t(e)}}function l(e){try{s(o.throw(e))}catch(e){t(e)}}function s(t){var i;t.done?e(t.value):(i=t.value,i instanceof r?i:new r((function(e){e(i)}))).then(n,l)}s((o=o.apply(i,a||[])).next())}));var i,a,r,o}),[f,n,e]),L=i.useCallback((e=>{n.trackButtonClick(e,window.location.pathname,e)}),[n]),T=i.useCallback(((e,t)=>{let n;if(h(!1),d(void 0),s(void 0),e)n="search-layer-clear-button";else{if(t&&t.current){const e=a.findDOMNode(t.current),n=e&&e instanceof HTMLInputElement?e.value:void 0;n&&(d(n),k(n))}n="search-layer-search-button"}L(n)}),[k,L]);return i.createElement(x,{placeholder:v,closeButton:S,submitCallback:T,errorMessage:p?b:void 0,submitButtonLabel:E,clearResultsButtonLabel:w},!p&&c?i.createElement(V,{allResultsLabel:m,results:C,spinnerTitle:r.componentsLoadingLabel}):void 0)}},3542:(e,t,n)=>{"use strict";var i=n(67294),a=n(90669),r=n(21312),o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let l=class{constructor(){this.searchLayer=null,this.openLightbox=e=>{e.preventDefault(),this.searchLayer&&this.closeLightbox(),this.searchLayer=this.layerManager.openContentLayer(this.renderLightbox,void 0,{userCloseable:!0,onClose:this.onCloseLightbox}),this.trackingService.trackLayerLoad("search-layer-load")},this.onCloseLightbox=()=>{this.trackingService.trackLayerCloseClick("search-layer-close-button")},this.closeLightbox=()=>{this.searchLayer&&this.searchLayer.close(),this.searchLayer=null},this.isOpened=()=>Boolean(this.searchLayer&&!this.searchLayer.isClosed()),this.renderLightbox=()=>i.createElement(r.y,null)}};o([(0,a.f3)()],l.prototype,"layerManager",void 0),o([(0,a.f3)()],l.prototype,"trackingService",void 0),l=o([(0,a.ri)("SearchLayerService")],l)},84179:(e,t,n)=>{"use strict";var i=n(90669),a=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},r=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};let o=class{get searchConfig(){return this.searchModel}get searchEnabled(){return this.searchModel&&this.searchModel.enabled}doSearch(e){return r(this,void 0,void 0,(function*(){const t=this.createSearchURL(encodeURIComponent(e));try{return yield fetch(t,{method:"get"}).then((e=>r(this,void 0,void 0,(function*(){const t=yield e.json();if(!this.verifyResponse(t))throw new Error(`Invalid search engine response: ${JSON.stringify(t)}`);return t}))))}catch(e){throw new Error(`The request for ${t} failed. ${e}`)}}))}verifyResponse(e){if(void 0===e.hits||void 0===e.hits.start||void 0===e.hits.hit||"number"!=typeof e.hits.found||"number"!=typeof e.hits.start||!Array.isArray(e.hits.hit))return!1;const t=e.hits.hit.filter((e=>(e=>e.id&&"string"==typeof e.id&&e.fields&&(e=>{const t=e.metatag_og_title&&Array.isArray(e.metatag_og_title)&&e.metatag_og_title.length>0&&"string"==typeof e.metatag_og_title[0],n=e.id&&Array.isArray(e.id)&&e.id.length>0&&"string"==typeof e.id[0];return t&&n})(e.fields))(e)));return t.length<e.hits.hit.length&&console.warn("There were some search results in invalid format which have been removed"),e.hits.hit=t,!0}createSearchURL(e){const{endpointUrl:t,searchHost:n,searchLanguage:i}=this.searchModel;return`${t}search?q=${e}&fq=(and host:'${n}' metatag_language:'${i}')&size=100`}};a([(0,i.f3)()],o.prototype,"searchModel",void 0),o=a([(0,i.ri)("SearchStore")],o)},19880:(e,t,n)=>{},66985:(e,t,n)=>{"use strict";var i=n(46410),a=n(90669),r=n(59638);var o=n(43703),l=n(37772),s=n(65070),c=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let d=class{constructor(){this.navigationChangeListener=e=>{e.newValue.pathChanged&&e.newValue.rendered&&!e.newValue.initialRender&&this.trackPageLoadNow()},this.sendSingleTracking=e=>{if(!this.hasEventAction(e,s.u.VWBasic_Pageload)&&!this.hasEventAction(e,s.u.VWBasic_Integrator_Pageload)&&this.applicationTrackingData.disableTrackingEvents)return;if(this.testAutomationConfigModel.enabled){const t=(0,o.Rd)();t.trackingEvents||(t.trackingEvents=[]),t.trackingEvents.push(e)}this.log("tracking event "+(e.eventInfo?e.eventInfo.eventAction:"unknown"),e);const t=window.vwdata;t&&"function"==typeof t.push&&t.push(e)},this.hasEventAction=(e,t)=>!!e&&!!e.eventInfo&&e.eventInfo.eventAction===t}init(){this.log("Tracking config data initialize: %s",JSON.stringify(this.applicationTrackingData)),this.navigationService.listen(this.navigationChangeListener),this.trackPageLoadNow()}trackPageLoad(e){if(this.applicationTrackingData.disablePageLoadEvent)return;let t;this.log(`pageload ${e}`);const n=this.contentStore.getCurrentPageRootModel();if(n&&n.errorPage)t=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_Error_Pageload)),{error:{code:n.errorPageCode||void 0,referringUrl:n.referringUrl||void 0}});else{const i=(0,o.Rd)().integratorSpaModel?s.u.VWBasic_Integrator_Pageload:s.u.VWBasic_Pageload;t=Object.assign(Object.assign({},this.collectGeneralData(e,i)),{page:this.createPageData(n)})}this.sendSingleTracking(t)}trackEnterViewport(e,t,n,i){this.log(`entered viewport ${e}`);const a=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_ContentSection_EnterViewport,n,i,t)),{page:this.createPageData(this.contentStore.getCurrentPageRootModel())});this.sendSingleTracking(a)}trackLinkClickExternal(e,t,n,i){this.log(`link click external ${e}`);const a=t||null,r=Object.assign(Object.assign({},this.collectGeneralData(a,s.u.VWBasic_Link_Click,i)),{link:this.createLinkData(e,n||"External Link Click"),page:this.createPageData(this.contentStore.getCurrentPageRootModel())});this.sendSingleTracking(r)}trackLinkClick(e,t,n,i){this.log(`link click ${e}`);const a=t||null,r=Object.assign(Object.assign({},this.collectGeneralData(a,s.u.VWBasic_Link_Click,i)),{link:this.createLinkData(e,n||"Link Click"),page:this.createPageData(this.contentStore.getCurrentPageRootModel())});this.sendSingleTracking(r)}trackQuickAccessLinkClick(e,t,n,i,a){this.log(`quick access link click ${e}`);const r=Object.assign(Object.assign(Object.assign({},this.collectGeneralData(i||null,s.u.VWBasic_QuickAccess_Click,n)),{link:this.createLinkData(e,t||"Quick Access Link Click"),page:this.createPageData(this.contentStore.getCurrentPageRootModel())}),a||{});this.sendSingleTracking(r)}trackFooterLinkClick(e,t){this.log(`footer link click ${e}`);const n=Object.assign(Object.assign({},this.collectGeneralData(null,s.u.VWBasic_FooterLink_Click)),{link:this.createLinkData(e,t||"Footer Link Click")});this.sendSingleTracking(n)}trackButtonClick(e,t,n,i){this.log(`button click ${e}`);const a=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_Button_Click,i)),{link:this.createLinkData(t,n||"Button Click")});this.sendSingleTracking(a)}trackNextBestActionButtonClick(e,t,n,i,a){this.log(`nba button click ${e}`);const r=Object.assign(Object.assign({},this.collectGeneralData(t||null,s.u.VWBasic_NBAButton_Click,i,a)),{link:this.createLinkData(e,n||"NBAB Click"),page:this.createPageData(this.contentStore.getCurrentPageRootModel())});this.sendSingleTracking(r)}trackContentTabClick(e,t,n,i){this.log(`content tab click ${n}`);const a=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_ContentTab_Click,i)),{link:this.createLinkData(t,n),tab:{name:n}});this.sendSingleTracking(a)}trackTeaserClick(e,t,n,i,a){this.log(`teaser click ${e} url ${t}`);let r=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_Teaser_Click,i)),{link:this.createLinkData(t,n||"Teaser Click")});a&&a.name&&(r=Object.assign(Object.assign({},r),{tab:a})),this.sendSingleTracking(r)}trackNavigationTeaserClick(e,t,n,i){this.log(`navigation teaser click ${e} url ${t}`);const a=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_NavigationalTeaser_Click,i)),{link:this.createLinkData(t,n||"Teaser Click")});this.sendSingleTracking(a)}trackVideoEvent(e,t,n,i){this.log(`video event ${e} for ${t}`);const a=Object.assign(Object.assign({},this.collectGeneralData(t,e,i)),{video:n});this.sendSingleTracking(a)}trackVideoMilestoneEvent(e,t,n){this.log(`video milestone event for ${e}`);const i=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VideoPlayer_VideoMilestone_Reached,n)),{video:Object.assign({},t)});this.sendSingleTracking(i)}trackAccordionClick(e,t,n,i,a){this.log(`accordion ${t?"open":"close"} click ${e}`);const r=Object.assign(Object.assign({},this.collectGeneralData(e,t?s.u.VWBasic_AccordionOpen_Click:s.u.VWBasic_AccordionClose_Click,a)),{link:this.createLinkData(n,i||"Accordion Click")});this.sendSingleTracking(r)}trackLoginClick(e,t,n){this.log(`login click ${e}`);const i=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_Login_Click)),{link:this.createLinkData(t,n||"Login Click")});this.sendSingleTracking(i)}trackMainNavigationLogoClick(e){this.log("main navigation logo click");const t="vw-logo",n=this.collectGeneralData(t,s.u.VWBasic_QuickAccess_Click),i=Object.assign(Object.assign({},n),{link:this.createLinkData(e,t)});this.sendSingleTracking(i)}trackMainNavigationClick(e,t,n="Main Navigation Link Click"){this.log(`main navigation item click ${e}`);const i=this.collectGeneralData(e,s.u.VWBasic_MainNavigation_Click),a=Object.assign(Object.assign({},i),{link:this.createLinkData(t,n)});this.sendSingleTracking(a)}trackMainNavigationClose(){this.log("main navigation close");const e=this.collectGeneralData("navigation-flyout",s.u.VWBasic_LayerClose_Click),t=Object.assign({},e);this.sendSingleTracking(t)}trackMainNavigationOpenClick(){this.log("navigation burger icon click");const e=this.collectGeneralData("navigation-open-close-toggle-button",s.u.VWBasic_QuickAccess_Click),t=Object.assign({},e);this.sendSingleTracking(t)}trackMainNavigationOpen(){this.log("main navigation open");const e=Object.assign({},this.collectGeneralData("navigation-flyout",s.u.VWBasic_Layer_Load));this.sendSingleTracking(e)}trackLoginFlyoutOpenClick(e){this.log(`login flyout button click, user is logged in: ${e}`);const t=e?s.u.VWBasic_UserProfileOpen_Click:s.u.VWBasic_QuickAccess_Click,n=this.collectGeneralData("login-flyout-open--button",t);this.sendSingleTracking(n)}trackLoginFlyoutOpen(){this.log("login flyout open");const e=this.collectGeneralData("login-flyout",s.u.VWBasic_Layer_Load),t=Object.assign({},e);this.sendSingleTracking(t)}trackFeatureAppLoad(e,t,n){this.log(`feature app load ${e}`);const i=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_FeatureApp_Load,t,n)),{page:this.createPageData(this.contentStore.getCurrentPageRootModel())});this.sendSingleTracking(i)}trackLayerLoad(e,t){this.log(`layer load ${e}`);const n=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_Layer_Load,t)),{page:this.createPageData(this.contentStore.getCurrentPageRootModel())});this.sendSingleTracking(n)}trackLayerCloseClick(e,t){this.log(`layer close ${e}`);const n=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_LayerClose_Click,t)),{page:this.createPageData(this.contentStore.getCurrentPageRootModel())});this.sendSingleTracking(n)}trackLayerItemClick(e,t){this.log(`layer item click ${e}`);const n=Object.assign({},this.collectGeneralData(e,s.u.VWBasic_LayerItem_Click,t));this.sendSingleTracking(n)}trackSliderElementLoad(e,t){this.log("carousel element (re)load");const n=Object.assign({},this.collectGeneralData(e,s.u.VWBasic_SliderElement_Load,t));this.sendSingleTracking(n)}trackNavigationBarLinkClick(e,t,n){this.log("in-page navigation click");const i=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_NavigationBarLink_Click,n)),{link:t});this.sendSingleTracking(i)}trackNavigationBreadcrumbClick(e,t,n){this.log("navigation breadcrumb click");const i=Object.assign(Object.assign({},this.collectGeneralData(e,s.u.VWBasic_NavigationBreadcrumb_Click,n)),{link:t});this.sendSingleTracking(i)}trackNavigationTopLinkClick(e,t){this.log(`navigation top link click ${e}`);const n=Object.assign(Object.assign({},this.collectGeneralData(null,s.u.VWBasic_NavigationTopLink_Click)),{link:this.createLinkData(e,t),page:this.createPageData(this.contentStore.getCurrentPageRootModel())});this.sendSingleTracking(n)}trackSearchLayerOpenClick(){this.log("search layer open click");const e=this.collectGeneralData("search-layer-open-button",s.u.VWBasic_QuickAccess_Click),t=Object.assign({},e);this.sendSingleTracking(t)}trackSearchResultListLoad(e,t){const n=Object.assign(Object.assign({},this.collectGeneralData("search-layer-results-load",s.u.VWBasic_SearchResultlist_Load)),{search:this.createSearchData(e,t)});this.sendSingleTracking(n)}trackInPageNavigationOpen(){this.log("inpage navigation dropdown open requested");const e=s.u.VWBasic_QuickAccess_Click,t=this.collectGeneralData("in-page-navigation-open-close-toggle-button",e);this.sendSingleTracking(t)}trackInPageNavigationLoad(){this.log("inpage navigation dropdown loaded and opened");const e=s.u.VWBasic_Layer_Load,t=this.collectGeneralData("in-page-navigation-flyout",e);this.sendSingleTracking(t)}trackInPageNavigationClose(){this.log("inpage navigation dropdown closed");const e=s.u.VWBasic_LayerClose_Click,t=this.collectGeneralData("in-page-navigation-open-close-toggle-button",e);this.sendSingleTracking(t)}trackLoginStatusChange(){this.log("user login status changed");const e=s.u.VWBasic_LoginStatus_Change,t=this.collectGeneralData("login-status-change",e);this.sendSingleTracking(t)}trackPageLoadNow(){const e=this.navigationService.state.path,t=this.contentStore.getCurrentPageRootModel(),n=t&&t.pageTrackingModel?t.pageTrackingModel.pageName:null;this.trackPageLoad((0,l.Z)(e,n))}collectGeneralData(e,t,n,i,a){const r=this.contentStore.getCurrentPageRootModel(),{eventInfo:o={},environment:l={},personalization:s={}}=i||{};if(!r)return{};const c=this.createEventInfoData(e,t,r.pageTrackingModel,n,o);return{eventInfo:c,environment:this.createEnvironmentData(this.applicationTrackingData,l),user:this.createUserData(),personalization:this.createPersonalizationData(c.contentId,n,s,a),configuration:r.pageTrackingModel.vehicleData||void 0,content:{ItemCount:n?n.itemCount:void 0,ItemPosition:n?n.itemPosition:void 0}}}createPageData(e){return{publicationDate:e?e.publicationDate:void 0}}createEventInfoData(e,t,n,i={},a){return Object.assign({eventAction:t,brand:n.brand,pageId:`${window.location.host}${window.location.pathname}`,pageName:n.trackingPageName||void 0,contentId:e||void 0,contentLabels:this.getContentLabels(t,n,i)||void 0,pageCategory:n.category||void 0,sectionName:i.sectionId||void 0,templateType:n.templateType||void 0},a)}getContentLabels(e,t,n){let i;switch(e){case s.u.VWBasic_Integrator_Pageload:case s.u.VWBasic_Pageload:i=t.contentLabels;break;default:i=n.contentLabels}return i?JSON.parse(i):null}createEnvironmentData(e,t){return Object.assign({applicationId:e.trackingApplicationId||void 0,applicationIdVersion:this.spaGlobalConfig.cmsVersion||void 0,language:e.languageCode||void 0,country:e.countryCode||void 0},t)}createUserData(){return{loginStatus:this.loginStore.isLogInStatusResolved?this.loginStore.isLoggedIn:void 0,browserResolutionBreakpoint:this.getBreakpoint(),browserResolutionHeight:window.screen.height.toString(),browserResolutionOrientation:(0,r.L)()&&window.matchMedia?window.matchMedia("(orientation: portrait)").matches?"v":"h":"",browserResolutionWidth:window.screen.width.toString()}}createPersonalizationData(e,t,n,i){const a=this.contentStore&&this.contentStore.getCurrentPageRootModel(),r=a&&a.aemResourcePath;if(i)return this.createTeaserPersonalizationData(t,r,i,n,e);if(t&&!t.personalizationPersonalizable)return this.createUnpersonalizablePersonalizationData(t,r,n,e);const o=Boolean(t&&Boolean(t.personalizationPersonalized)),l=t?t.sectionGroupContentId?t.sectionGroupContentId:t.sectionId:void 0,s=t&&Boolean(t.personalizationPersonalizable)&&t.personalizationContentId===e;return Object.assign({status:o,contentId:e,personalizable:s,placeholderId:t&&Boolean(t.personalizationPersonalizable)?t.personalizationPlaceholderId:void 0,aemResourcePath:r,teaserList:i,moduleId:l},n)}createUnpersonalizablePersonalizationData(e,t,n,i){const a=e?e.sectionGroupContentId?e.sectionGroupContentId:e.sectionId:void 0;return Object.assign({status:!1,personalizable:!1,aemResourcePath:t,contentId:i,moduleId:a},n)}createTeaserPersonalizationData(e,t,n,i,a){const r=e?e.sectionGroupContentId?e.sectionGroupContentId:e.sectionId:void 0,o=Boolean(e&&e.personalizationPersonalizable),l=Boolean(e&&e.personalizationPersonalized),s=e&&o?e.personalizationPlaceholderId:void 0,c=o&&!!e&&a===e.personalizationContentId;return o&&(n=n.map((e=>({contentId:e.contentId,personalizable:!1,status:l})))),Object.assign({status:l,personalizable:c,aemResourcePath:t,contentId:a,placeholderId:s,teaserList:n,moduleId:r},i)}createLinkData(e,t){return{url:-1===e.indexOf("javascript:void")?e:void 0,name:t}}createSearchData(e,t){return{SearchTerm:e,NumberOfResults:t}}getBreakpoint(){return window.matchMedia?this.matchMediaQuery(i.u3.b560,i.u3.b960)?String(i.u3.b560):this.matchMediaQuery(i.u3.b960,i.u3.b1280)?String(i.u3.b960):this.matchMediaQuery(i.u3.b1280,i.u3.b1600)?String(i.u3.b1280):this.matchMediaQuery(i.u3.b1600,i.u3.b1920)?String(i.u3.b1600):this.matchMediaQuery(i.u3.b1920,i.u3.b2560)?String(i.u3.b1920):this.matchMediaQuery(i.u3.b2560)?String(i.u3.b2560):"0":""}matchMediaQuery(e,t){return t?window.matchMedia(`screen and (max-width: ${t}px) and (min-width: ${e}px)`).matches:window.matchMedia(`screen and (min-width: ${e}px)`).matches}log(e,...t){this.logger.tracking.info(e,t)}};c([(0,a.f3)()],d.prototype,"applicationTrackingData",void 0),c([(0,a.f3)()],d.prototype,"spaGlobalConfig",void 0),c([(0,a.f3)()],d.prototype,"navigationService",void 0),c([(0,a.f3)()],d.prototype,"contentStore",void 0),c([(0,a.f3)()],d.prototype,"loginStore",void 0),c([(0,a.f3)()],d.prototype,"logger",void 0),c([(0,a.f3)()],d.prototype,"testAutomationConfigModel",void 0),c([(0,a.zY)()],d.prototype,"init",null),d=c([(0,a.ri)("TrackingService",{env:"client"})],d)},65070:(e,t,n)=>{"use strict";var i;n.d(t,{u:()=>i}),function(e){e.VideoPlayer_Fullscreen_Close="VideoPlayer_Fullscreen_Close",e.VideoPlayer_Fullscreen_Open="VideoPlayer_Fullscreen_Open",e.VideoPlayer_Video_Start="VideoPlayer_Video_Start",e.VideoPlayer_VideoMilestone_Reached="VideoPlayer_VideoMilestone_Reached",e.VideoPlayer_VideoPause_Click="VideoPlayer_VideoPause_Click",e.VideoPlayer_VideoPlay_Click="VideoPlayer_VideoPlay_Click",e.VWBasic_AccordionClose_Click="VWBasic_AccordionClose_Click",e.VWBasic_AccordionOpen_Click="VWBasic_AccordionOpen_Click",e.VWBasic_Anchor_Click="VWBasic_Anchor_Click",e.VWBasic_Button_Click="VWBasic_Button_Click",e.VWBasic_ContentSection_EnterViewport="VWBasic_ContentSection_EnterViewport",e.VWBasic_Download_Click="VWBasic_Download_Click",e.VWBasic_Error_Pageload="VWBasic_Error_Pageload",e.VWBasic_FooterLink_Click="VWBasic_FooterLink_Click",e.VWBasic_FeatureApp_Load="VWBasic_FeatureApp_Load",e.VWBasic_Layer_Load="VWBasic_Layer_Load",e.VWBasic_LayerClose_Click="VWBasic_LayerClose_Click",e.VWBasic_LayerItem_Click="VWBasic_LayerItem_Click",e.VWBasic_Link_Click="VWBasic_Link_Click",e.VWBasic_Login_Click="VWBasic_Login_Click",e.VWBasic_LoginStatus_Change="VWBasic_LoginStatus_Change",e.VWBasic_MainNavigation_Click="VWBasic_MainNavigation_Click",e.VWBasic_Pageload="VWBasic_Pageload",e.VWBasic_Integrator_Pageload="VWBasic_Integrator_Pageload",e.VWBasic_QuickAccess_Click="VWBasic_QuickAccess_Click",e.VWBasic_SliderElement_Load="VWBasic_SliderElement_Load",e.VWBasic_SubNavigation_Click="VWBasic_SubNavigation_Click",e.VWBasic_Teaser_Click="VWBasic_Teaser_Click",e.VWBasic_UserProfileOpen_Click="VWBasic_UserProfileOpen_Click",e.VWBasic_NavigationBarLink_Click="VWBasic_NavigationBarLink_Click",e.VWBasic_NavigationBreadcrumb_Click="VWBasic_NavigationBreadcrumb_Click",e.VWBasic_NavigationTopLink_Click="VWBasic_NavigationTopLink_Click",e.VWBasic_NavigationalTeaser_Click="VWBasic_NavigationalTeaser_Click",e.VWBasic_SearchResultlist_Load="VWBasic_SearchResultlist_Load",e.VWBasic_NBAButton_Click="VWBasic_NBAButton_Click",e.VWBasic_ContentTab_Click="VWBasic_ContentTab_Click"}(i||(i={}))},72970:(e,t,n)=>{"use strict";var i=n(63392),a=n(17187),r=n(90669),o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};class l{constructor(e,t){this.legalEntity=e,this.sessionStorage=t,this.eventEmitter=new a.EventEmitter}isAuthenticated(){return Promise.resolve(Boolean(this.sessionStorage.get("login")))}login(e,t){return new Promise((n=>{window.alert(`prompt: ${e}, legal entity: ${this.legalEntity})`),this.sessionStorage.set("login","LOGGED_IN"),this.eventEmitter.emit(i.AuthServiceEvent.SAVE_STATE),window.location.href=t?decodeURIComponent(t):window.location.href,n()}))}logout(e){return this.sessionStorage.set("login",""),this.eventEmitter.emit(i.AuthServiceEvent.LOGOUT),Promise.resolve()}getAccessToken(){throw new Error("Method not implemented.")}getIdToken(){throw new Error("Method not implemented.")}subscribe(e,t){this.eventEmitter.addListener(e,t)}get(e,t,n){throw new Error("Method not implemented.")}put(e,t,n,i){throw new Error("Method not implemented.")}post(e,t,n,i){throw new Error("Method not implemented.")}patch(e,t,n,i){throw new Error("Method not implemented.")}delete(e,t,n,i){throw new Error("Method not implemented.")}}let s=class{register(e){return new l(e,this.sessionStorage)}};o([(0,r.f3)()],s.prototype,"sessionStorage",void 0),s=o([(0,r.ri)("AuthServiceProvider",{devMode:!0})],s)},4313:(e,t,n)=>{"use strict";var i=n(63392),a=n(22188),r=n(90669),o=n(43703),l=n(2188),s=n(18926),c=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},d=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};const m=o.Nl+"loginstore_authproxy_redirect";let u=class{constructor(){this._loginStatus={statusResolved:!1,isLoggedIn:!1,userData:null}}initialize(){return d(this,void 0,void 0,(function*(){const e=this.spaGlobalConfig.loginModel.cmsLegalEntity;if(!this.spaGlobalConfig.loginModel.enabled||!e)return Promise.resolve();try{this.loginHelper.initialize(e)}catch(e){return this.logger.general.error("Error occurred by authservice registration. Caused by: ",e),Promise.resolve()}if(!this.loginHelper.isReady())return Promise.resolve();const t=yield this.loginHelper.isAuthenticated();this.statusRequested(t),t&&this.loadUserData(),window.sessionStorage.getItem(m)&&(window.sessionStorage.removeItem(m),this.loginFlyoutService.openFlyout(),this.trackingService.trackLoginStatusChange()),this.loginHelper.subscribe(i.AuthServiceEvent.SAVE_STATE,this.onSaveState.bind(this)),this.loginHelper.subscribe(i.AuthServiceEvent.LOGOUT,this.onLogout.bind(this))}))}handleLogin(){return d(this,void 0,void 0,(function*(){try{(yield this.loginHelper.isAuthenticated())?this.loadUserData():yield this.loginHelper.login("login",this.getEncodedRedirectUrl())}catch(e){throw new l.l(l.n.unknownError)}}))}handleLogout(){return d(this,void 0,void 0,(function*(){return(yield this.loginHelper.isAuthenticated())?this.loginHelper.logout(this.getEncodedRedirectUrl()):(this.onLogout(),Promise.resolve())}))}get isLogInStatusResolved(){return this._loginStatus.statusResolved}get isLoggedIn(){return this._loginStatus.isLoggedIn}getAuthData(){return d(this,void 0,void 0,(function*(){const e=yield this.loginHelper.getAccessToken();return{accessToken:e,userId:(0,s.A)(e)}}))}get userData(){return this._loginStatus.userData}openProfileTab(){var e;if(!this.spaGlobalConfig.loginModel.profileUrl)return void this.logger.general.error("no profile url configured");const t=new URL(this.spaGlobalConfig.loginModel.profileUrl),n=null===(e=this.userData)||void 0===e?void 0:e.email;n&&t.searchParams.append("login_hint",n),window.open(t.toString(),"_blank")}getUser(){return d(this,void 0,void 0,(function*(){const e=this.getAuthProxyUserApiUrl();return this.loginHelper.getUser(e)}))}listenToLogout(e){this.loginHelper.isReady()&&this.loginHelper.subscribe(i.AuthServiceEvent.LOGOUT,e)}statusRequested(e){return d(this,void 0,void 0,(function*(){this._loginStatus={statusResolved:!0,isLoggedIn:e,userData:null}}))}loadUserData(){return d(this,void 0,void 0,(function*(){const e=yield this.getUser();this._loginStatus={statusResolved:!0,isLoggedIn:!0,userData:e}}))}onLogout(){return d(this,void 0,void 0,(function*(){return this._loginStatus={statusResolved:!0,isLoggedIn:!1,userData:null},this.onSaveState()}))}onSaveState(){return d(this,void 0,void 0,(function*(){return window.sessionStorage.setItem(m,"true"),Promise.resolve()}))}getEncodedRedirectUrl(){let e=window.location.origin+window.location.pathname;return window.location.search&&(e+=encodeURIComponent(window.location.search)),e}getAuthProxyUserApiUrl(){try{const{urlOrigin:e}=this.spaAsyncConfig.serviceConfigs["auth-proxy"],{cmsLegalEntity:t,legalEntityMapping:n}=this.spaGlobalConfig.loginModel,i=n.filter((e=>e.legalEntity===t)).map((e=>e.fag)).filter((e=>e));if(i.length<1)throw new Error("FAG is not provided");return e.endsWith("/")?`${e}${i[0]}/user`:`${e}/${i[0]}/user`}catch(e){throw new l.l(l.n.configError)}}};c([(0,r.f3)()],u.prototype,"spaAsyncConfig",void 0),c([(0,r.f3)()],u.prototype,"spaGlobalConfig",void 0),c([(0,r.f3)()],u.prototype,"loginFlyoutService",void 0),c([(0,r.f3)()],u.prototype,"logger",void 0),c([(0,r.f3)()],u.prototype,"loginHelper",void 0),c([(0,r.f3)()],u.prototype,"trackingService",void 0),c([a.LO],u.prototype,"_loginStatus",void 0),c([(0,r.zY)()],u.prototype,"initialize",null),c([a.aD],u.prototype,"handleLogin",null),c([a.aD],u.prototype,"handleLogout",null),c([a.Fl],u.prototype,"isLogInStatusResolved",null),c([a.Fl],u.prototype,"isLoggedIn",null),u=c([(0,r.ri)("LoginStore",{env:"client"})],u)},83896:()=>{},36699:(e,t,n)=>{"use strict";var i=n(90669),a=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},r=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};let o=class{getMergeConsentStatus(){return r(this,void 0,void 0,(function*(){const e=yield this.loginStore.getAuthData(),{documentKey:t,domain:n}=this.consentConfiguration,{countryCode:i,language:a}=this.localeModel,r=`api/v1/consents/${t}/${e.userId}?locale=${a}-${i}`,o=yield window.fetch(`https://${n}/${r}`,{headers:{Authorization:"Bearer "+e.accessToken}});if(!o.ok){const e=yield o.text();throw new Error("error in merge consent: "+e)}return o.json()}))}setMergeConsentStatus(e){return r(this,void 0,void 0,(function*(){const{userId:t,accessToken:n}=yield this.loginStore.getAuthData(),{domain:i}=this.consentConfiguration,a=yield window.fetch(`https://${i}/api/v1/consents`,{method:"POST",body:JSON.stringify(Object.assign(Object.assign({},e),{userId:t})),headers:{Authorization:"Bearer "+n,"Content-Type":"application/json"}});if(!a.ok){const e=yield a.text();throw new Error("cannot update merge consent: "+e)}return t}))}};a([(0,i.f3)()],o.prototype,"loginStore",void 0),a([(0,i.f3)()],o.prototype,"consentConfiguration",void 0),a([(0,i.f3)()],o.prototype,"localeModel",void 0),o=a([(0,i.ri)("IdkServiceConnector",{env:"client"})],o)},65300:(e,t,n)=>{"use strict";n.d(t,{F:()=>o});var i=n(67294),a=n(24379),r=n(64202);const o=e=>{const t=(0,r.QQ)(),{errorStatus:n,closeButton:o}=e,l=t.contentPaths.get(n);return i.createElement(a.B,{path:l||"",closeButton:o})}},91176:(e,t,n)=>{"use strict";var i=n(67294),a=n(22188),r=n(66016),o=n(90669),l=n(65300),s=n(2188),c=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let d=class{constructor(){this.contentPaths=a.LO.map({}),this.alertLayer=null,this.closeAlert=()=>{this.alertLayer&&this.alertLayer.close(),this.alertLayer=null},this.getRenderFn=(e,t)=>()=>i.createElement(l.F,{errorStatus:e,closeButton:t}),this.getResourceName=e=>{switch(e){case s.n.authenticationFailed:return"errorAuthFailed";case s.n.loginFailed:return"errorLoginFailed";case s.n.popUpBlocked:return"errorPopUpBlocked";default:return"errorUnknownError"}}}openAlert(e,t){if(!this.contentPaths.has(e)){const t=this.getResourceName(e),n=this.loginContentModel[t],i=this.modelStore.insertGlobalContent(t,n);this.contentPaths.set(e,i)}const n=i.createElement(r._n,{key:"close",onClick:this.closeAlert,btnCloseLabel:t,theme:"image"}),a=this.getRenderFn(e,n);this.closeAlert(),this.alertLayer=this.layerManager.openAlert(a,void 0,{id:"vwa-cms-login-alert",userCloseable:!0})}};c([(0,o.f3)()],d.prototype,"layerManager",void 0),c([(0,o.f3)()],d.prototype,"loginContentModel",void 0),c([(0,o.f3)()],d.prototype,"modelStore",void 0),d=c([(0,o.ri)("LoginAlertService")],d)},56870:(e,t,n)=>{"use strict";var i=n(67294),a=n(22188),r=n(66016),o=n(63877),l=n(90669),s=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let c=class{constructor(){this.flyoutLayer=null,this.closeFlyout=()=>{this.flyoutLayer&&this.flyoutLayer.close(),this.flyoutLayer=null},this.getRenderFn=e=>()=>i.createElement(i.Fragment,null,e,i.createElement(o.dl,null))}get isOpened(){return Boolean(this.flyoutLayer&&!this.flyoutLayer.isClosed())}initialize(){const e=this.loginContentModel.flyoutLoggedIn;this.flyoutLoggedInPath=this.modelStore.insertGlobalContent("flyoutLoggedIn",e);const t=this.loginContentModel.flyoutLoggedOut;this.flyoutLoggedOutPath=this.modelStore.insertGlobalContent("flyoutLoggedOut",t)}openFlyout(){if(!this.spaGlobalConfig.loginModel.enabled)return;const e=i.createElement(r._n,{key:"close",onClick:this.closeFlyout,position:r.cb.FLYOUT,btnCloseLabel:this.loginContentModel.flyoutLoggedOut.btnCloseLabel,theme:"image"}),t=this.getRenderFn(e);this.flyoutLayer||(this.flyoutLayer=this.layerManager.openInteractionLayer(t,void 0,{id:"vwa-cms-login-flyout",size:"C",userCloseable:!0,onClose:this.closeFlyout,shimBackgroundType:"OPAQUE"}),this.trackingService.trackLoginFlyoutOpen())}};s([a.LO],c.prototype,"flyoutLoggedInPath",void 0),s([a.LO],c.prototype,"flyoutLoggedOutPath",void 0),s([(0,l.f3)()],c.prototype,"layerManager",void 0),s([(0,l.f3)()],c.prototype,"spaGlobalConfig",void 0),s([(0,l.f3)()],c.prototype,"trackingService",void 0),s([(0,l.f3)()],c.prototype,"loginContentModel",void 0),s([(0,l.f3)()],c.prototype,"modelStore",void 0),s([(0,l.zY)()],c.prototype,"initialize",null),c=s([(0,l.ri)("LoginFlyoutService")],c)},52816:(e,t,n)=>{"use strict";var i=n(90669),a=n(2188),r=n(12432),o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},l=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};let s=class{initialize(e){this.isReady()?this.authService=this.authServiceProvider.register(e):console.error("AuthService was not provided via service bundle!")}isReady(){return!!this.authServiceProvider}getAccessToken(){return l(this,void 0,void 0,(function*(){return this.authService.getAccessToken()}))}logout(e){return this.authService.logout(e)}login(e,t){return this.authService.login(e,t)}subscribe(e,t){return this.authService.subscribe(e,t)}isAuthenticated(){return this.authService.isAuthenticated()}getUser(e){return l(this,void 0,void 0,(function*(){const t=(0,r.e)("csrf_token");if(t)return(yield fetch(e,{credentials:"include",headers:{"X-CSRF-Token":t}})).json();throw new a.l(a.n.authenticationFailed)}))}};o([(0,i.f3)()],s.prototype,"authServiceProvider",void 0),s=o([(0,i.ri)("LoginHelper")],s)},2188:(e,t,n)=>{"use strict";var i;n.d(t,{n:()=>i,l:()=>a}),function(e){e.configError="configError",e.loginFailed="loginFailed",e.authenticationFailed="authenticationFailed",e.popUpBlocked="popUpBlocked",e.unknownError="unknownError"}(i||(i={}));class a extends Error{constructor(e){super(),this.status=e}}},26960:()=>{},66342:(e,t,n)=>{"use strict";var i=n(63392),a=n(90669),r=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};let o=class{constructor(){this.saveStateListeners=[],this.logoutListeners=[]}getAccessToken(){return r(this,void 0,void 0,(function*(){throw new Error("not supported")}))}isReady(){return!0}logout(e){return window.sessionStorage.removeItem("logged in mock"),setTimeout((()=>window.location.reload()),100),this.logoutListeners.forEach((e=>e())),Promise.resolve()}login(e,t){return window.sessionStorage.setItem("logged in mock","true"),setTimeout((()=>window.location.reload()),100),this.saveStateListeners.forEach((e=>e())),Promise.resolve()}subscribe(e,t){e===i.AuthServiceEvent.SAVE_STATE?this.saveStateListeners.push(t):e===i.AuthServiceEvent.LOGOUT&&this.logoutListeners.push(t)}initialize(e){}isAuthenticated(){return Promise.resolve(!!window.sessionStorage.getItem("logged in mock"))}getUser(e){return r(this,void 0,void 0,(function*(){return Promise.resolve({given_name:"Matthias",family_name:"Schrader",email:"mock@email.de"})}))}};o=function(e,t,n,i){var a,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}([(0,a.ri)("LoginHelper",{devMode:!0})],o)},93674:()=>{},18926:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var i=n(46489),a=n.n(i);const r=e=>a()(e).sub},74208:(e,t,n)=>{"use strict";n.d(t,{F:()=>i,b:()=>a});const i={top:66,center:50,bottom:33},a={left:33,center:50,right:66}},79126:(e,t,n)=>{"use strict";n.d(t,{LJ:()=>y,wZ:()=>L,jG:()=>E,$_:()=>T,gO:()=>C});var i=n(67294),a=n(78384),r=n(46410),o=n(87465),l=n(32667),s=n(49181),c=n(52745),d=n(81697);const m=a.default.nav.withConfig({displayName:"StyledBottomNav"})`
    display: flex;
    flex-direction: column;

    @media (min-width: ${r.u3.b560}px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;m.displayName="StyledBottomNav";const u=a.default.div.withConfig({displayName:"StyledBottomNavCopyright"})`
    margin-bottom: ${e=>e.theme.size.static400};
    margin-top: ${e=>e.theme.size.static300};

    @media (min-width: ${r.u3.b560}px) {
        margin-bottom: 0;
        white-space: nowrap;
    }
`;u.displayName="StyledBottomNavCopyright";const p=a.default.div.withConfig({displayName:"StyledBottomNavLangSwitcher"})`
	margin-top: ${e=>e.theme.size.static500};
	order: 1;

	@media (min-width: ${r.u3.b560}px) {
		margin-top: 0;
		padding-${e=>(0,d.rz)(e.theme.direction)}: ${e=>e.theme.size.static500};
		white-space: nowrap;
		}
`;p.displayName="StyledBottomNavLangSwitcher";const h=a.default.div.withConfig({displayName:"StyledCopyrightWrapper"})`
    border-top: solid 1px ${e=>e.theme.border.color.secondary};
    text-align: ${e=>(0,d.rz)(e.theme.direction)};
    width: ${e=>e.theme.size.grid010};
    margin-top: ${e=>e.theme.size.static500};

    @media (min-width: ${r.u3.b560}px) {
        margin-top: ${e=>e.theme.size.static530};
        width: ${e=>e.theme.size.grid005};
    }
`;h.displayName="StyledCopyrightWrapper";const g=a.default.ul.withConfig({displayName:"StyledCustomListContainer"})`
    ${d.zn}

    display: flex;
    flex-wrap: wrap;
`;g.displayName="StyledCustomListContainer";const f=a.default.li.withConfig({displayName:"StyledBottomNavChild"})`
    display: flex;

    :not(:last-child):after {
        content: '|';
        margin: 0 ${e=>e.theme.size.static200};
    }
`;function y(e){const{children:t,copyright:n,hideCopyright:a,langSwitcher:r,marketLogoMedia:o,bottomNavAriaLabel:l}=e;return i.createElement(i.Fragment,null,i.createElement(m,{"aria-label":l},r&&i.createElement(p,null,r),i.createElement(g,{role:"list"},i.Children.map(t,(e=>i.createElement(f,{role:"listItem"},e))))),i.createElement(h,null,o&&i.createElement(C,null,o),!a&&i.createElement(u,null,i.createElement(L,{copyright:n}))))}f.displayName="StyledBottomNavChild";const v=a.default.section.withConfig({displayName:"StyledDisclaimerGroup"})`
    :not(:last-child) {
        margin-bottom: ${e=>e.theme.size.static200};
        @media (min-width: ${r.u3.b560}px) {
            margin-bottom: ${e=>e.theme.size.static550};
        }
    }
`;v.displayName="StyledDisclaimerGroup";const b=a.default.h2.withConfig({displayName:"StyledFooterDisclaimerLabels"})`
    font-size: ${e=>e.theme.textAppearances.copy200.fontSize};
    font-weight: ${e=>e.theme.text.weight.bold};
    color: ${e=>e.theme.text.color.secondary};
    margin-bottom: ${e=>e.theme.size.static200};
`;function E(e){const{referenceDisclaimers:t,globalDisclaimers:n,label:a}=e;return i.createElement(v,{key:a},i.createElement(b,null,a),i.createElement(l.W,{wrap:c.Hq.always,gutter:s.X.static200},t,n))}b.displayName="StyledFooterDisclaimerLabels";const w=a.default.div.withConfig({displayName:"StyledMarketLogo"})`
	margin-top: ${e=>e.theme.size.static250};
	height: ${45}px;

	img {
		width: auto;
		height: 100%;

		@media (min-width: ${r.u3.b560}px) {
			margin-${e=>(0,d.lp)(e.theme.direction)}: auto;
		}
	}
`;function C(e){const{children:t}=e;return i.createElement(w,null,t)}w.displayName="StyledMarketLogo";var S=n(73154);const k=`Â© Volkswagen ${(new Date).getFullYear()}`,L=e=>{const{copyright:t}=e;return i.createElement(S.xv,{appearance:S.C2.copy0100},t||k)},x=a.default.div.withConfig({displayName:"StyledFooterBody"})`
    border-top: solid 2px ${e=>e.theme.border.color.primary};
    padding: ${e=>e.theme.size.static500} 0;

    @media (min-width: ${r.u3.b560}px) {
        padding-top: ${e=>e.theme.size.static550};
        padding-left: ${e=>e.theme.size.grid001};
        padding-right: ${e=>e.theme.size.grid001};
    }
`;x.displayName="StyledFooterBody";const $=a.default.div.withConfig({displayName:"StyledMainNavWrap"})`
    @media (min-width: ${r.u3.b560}px) {
        display: flex;
        justify-content: space-between;
    }
`;$.displayName="StyledMainNavWrap";const _=a.default.div.withConfig({displayName:"StyledFooterDisclaimers"})`
    border-top: solid 2px ${e=>e.theme.border.color.secondary};
    padding: ${e=>e.theme.size.static500} 0
        ${e=>e.theme.size.static200};

    @media (min-width: ${r.u3.b560}px) {
        padding-top: ${e=>e.theme.size.static550};
    }
`;_.displayName="StyledFooterDisclaimers";const I=a.default.footer.withConfig({displayName:"StyledFooter"})`
	${e=>!e.visible&&"display: none;"}

	// necessary for use with layers and Floating Button / NBAB
	${e=>null!=e.zIndex&&`\n\t\tz-index: ${e.zIndex};\n\t\tposition: relative;\n\t`}
`;I.displayName="StyledFooter";const T=e=>{const{mainNav:t,bottomNav:n,disclaimersGlobal:a,disclaimersReferenced:r,disclaimers:d,marketLogo:m,visible:u,isLayerOpen:p,zIndex:h}=e;return i.createElement(I,{visible:u,zIndex:null!=h?h:p?-1:void 0},i.createElement(o.Ar,null,i.createElement(l.W,{padding:{left:s.X.grid002,right:s.X.grid002},wrap:c.Hq.always},i.createElement(x,null,i.createElement($,null,t),n,m),(a||r)&&i.createElement(_,null,i.createElement(l.W,{wrap:c.Hq.always,gutter:s.X.static200},r,a)),d&&i.createElement(_,null,d))))};T.displayName="Footer"},81639:(e,t,n)=>{"use strict";n.d(t,{d:()=>c});var i=n(67294),a=n(78384),r=n(81697);const o={x:75,y:45},l=e=>{const{centerX:t=o.x,centerY:n=o.y}=e;return`\n\t\tradial-gradient(\n\t\t\tcircle at ${e.theme.direction===r.Nm.RTL?100-t:t}% ${n}%,\n\t\t\t${e.theme.backgroundGradient.lightColor} 0%,\n\t\t\t${e.theme.backgroundGradient.darkColor} 100%\n\t\t)\n\t`},s=a.default.div.attrs((e=>({style:{backgroundImage:l(e)}}))).withConfig({displayName:"StyledBackgroundProvider"})`
    width: 100%;
    height: 100%;
    ${e=>e.fixed&&"background-attachment: fixed;"};
`;s.displayName="StyledBackgroundProvider";const c=e=>i.createElement(s,{centerX:e.centerX,centerY:e.centerY,fixed:e.fixed},e.children)},61097:(e,t,n)=>{"use strict";n.d(t,{rA:()=>i,re:()=>a,hl:()=>r,sp:()=>o,iL:()=>l,wG:()=>s});const i="cubic-bezier(0.14, 1.12, 0.67, 0.99)",a=(...e)=>`\n\ttransition: ${e.map((e=>`${e} 0.3s ${i}`)).join(", ")};\n`,r=(...e)=>e.map((e=>{return`${e.name} ${t=e.duration,t?` ${t}`:"0.3s"} ${i}${(e=>e?` ${e}`:"")(e.delay)}`;var t})).join(", "),o=()=>"\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n\tbackground: none;\n\tcursor: pointer;\n",l=()=>"\n\toverflow: hidden;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n",s=()=>"\n\t// NOTE: One of limited options to render visually hidden content, but still accessible even for screenreaders\n\t// https://a11yproject.com/posts/how-to-hide-content/\n\tclip: rect(0 0 0 0);\n\tclip-path: inset(50%);\n\twidth: 1px;\n\theight: 1px;\n\toverflow: hidden;\n\tposition: absolute;\n\twhite-space: nowrap;\n"},81697:(e,t,n)=>{"use strict";n.d(t,{re:()=>s.re,hl:()=>s.hl,wG:()=>s.wG,sp:()=>s.sp,iL:()=>s.iL,_f:()=>c,gn:()=>d,eB:()=>m,Cr:()=>u,$r:()=>p,Nm:()=>h,rz:()=>f,lp:()=>y,o3:()=>v,tS:()=>b,zn:()=>E,G$:()=>w,rs:()=>C,Wc:()=>S});var i=n(73935),a=n(46410),r=n(49181),o=n(33700),l=n(81697),s=n(61097);const c=()=>"object"==typeof window&&"object"==typeof document,d=()=>Boolean(navigator&&navigator.platform)&&/iPad|iPhone|iPod/.test(navigator.platform);function m(){return!!c()&&/Edge/i.test(navigator.userAgent)}function u(e){const t=i.findDOMNode(e.current);return t instanceof Element?t.clientHeight:0}function p(e){const t={};return e.forEach(((e,n)=>{if(null==e)return;const i=function(e){switch(e){case 0:return a.u3.default;case 1:return a.u3.b560;case 2:return a.u3.b1600;default:throw new Error("Invalid breakpoint config")}}(n),o=function(e){if(0===e)return r.X.static0;{const t=`grid${(e>9?"0":"00").concat(e.toString())}`;return r.X[t]}}(e);t[`${i}`]=o})),t}var h,g;function f(e=h.LTR){return e===h.RTL?g.RIGHT:g.LEFT}function y(e=h.LTR){return e===h.RTL?g.LEFT:g.RIGHT}function v(e=h.LTR,t,n,i,a){return`${t} ${e!==h.RTL?n:a} ${i} ${e!==h.RTL?a:n}`}function b(e=h.LTR,t,n){return"\n",[t?`margin-${f(e)}: ${t};`:"",n?`margin-${y(e)}: ${n};`:""].filter(Boolean).join("\n")}!function(e){e.LTR="ltr",e.RTL="rtl"}(h||(h={})),function(e){e.RIGHT="right",e.LEFT="left"}(g||(g={}));const E=()=>"\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style-type: none;\n",w=e=>`\n\n\t&:focus {\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tbox-sizing: border-box;\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\t${f(e.theme.direction)}: 50%;\n\t\t\twidth: calc(100% + 16px);\n\t\t\theight: calc(100% + 16px);\n\t\t\tborder: solid 2px ${e.theme.interaction.recipe400.hover};\n\t\t\ttransform: translate3d(${f(e.theme.direction)===g.LEFT?"-":""}50%, -50%, 0);\n\t\t\t${(0,l.re)("width")};\n\t\t}\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tcolor: ${e.theme.interaction.recipe450.hover};\n\t\t& > div {\n\t\t\tcolor: ${e.theme.interaction.recipe450.hover};\n\t\t}\n\t\toutline: 0;\n\t}\n`,C=({customTabArea:e=44})=>`\n\tposition: relative;\n\n\t&:after {\n\t\tcontent: '';\n\t\tbox-sizing: border-box;\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\tmin-width: max(100%, ${e}px);\n\t\tmin-height: max(100%, ${e}px);\n\t\ttransform: translate(-50%, -50%);\n\t}\n`,S=o.zo.div.withConfig({displayName:"StyledAccessibleLabel"})`
    ${l.wG}
`;S.displayName="StyledAccessibleLabel"},16275:(e,t,n)=>{"use strict";n.d(t,{o:()=>r});var i=n(67294);const a=n(78384).default.li.withConfig({displayName:"StyledLinkSeparator"})`
    display: inline-block;

    :not(:last-child):after {
        content: '|';
        margin: 0 ${e=>e.theme.size.static150};
        color: ${e=>e.theme.text.color.primary};
    }

    & a {
        display: inline-block; /* Needed for Edge v44 */
    }
`,r=e=>i.createElement(i.Fragment,null,i.Children.map(e.children,(e=>i.createElement(a,null,e))))},696:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a}),n(67294);var i=n(73935);function a(e){return t=>{if(e){let n=t;t&&(n=i.findDOMNode(t)),"current"in e?e.current=n:e(n)}}}},93346:(e,t,n)=>{"use strict";n.d(t,{gr:()=>a,gX:()=>r,ap:()=>o});var i=n(67294);const a="var(--100vh, 100vh)",r=`calc(100vh - ${a})`;function o(){const e="object"==typeof window,t=(0,i.useCallback)((()=>e?window.innerHeight:void 0),[e]);(0,i.useEffect)((()=>{if(e)return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){var e;const n=null===(e=getComputedStyle(document.documentElement))||void 0===e?void 0:e.getPropertyValue("--100vh"),i=`${t()}px`;n!==i&&document.documentElement.style.setProperty("--100vh",i)}}),[t,e])}},82165:(e,t,n)=>{"use strict";n.d(t,{f:()=>o});var i=n(67294);const a="data-tabindex-original",r=["a","button","input","textarea","select","details","audio","video","[tabindex]"];class o extends i.Component{constructor(e){super(e),this.observingNode=i.createRef(),this.getFocusableElementSelector=(e="")=>r.map((t=>`${e} ${t}`)).join(","),this.handleTabIndexes=()=>{const{activeChildContainerSelector:e,childContainerSelector:t}=this.props,n=this.observingNode.current,i=null==n?void 0:n.querySelectorAll(this.getFocusableElementSelector(t)),r=null==n?void 0:n.querySelectorAll(this.getFocusableElementSelector(e));i&&i.forEach((e=>{const t=e.getAttribute("tabindex");null!=e.getAttribute(a)&&"-1"===t||e.setAttribute(a,null==t?"none":t),e.setAttribute("tabindex","-1")})),r&&r.forEach((e=>{const t=e.getAttribute(a);"none"===t||null==t?e.removeAttribute("tabindex"):e.setAttribute("tabindex",t),e.removeAttribute(a)}))},this.observeInteractiveContent=e=>{const t=this.getFocusableElementSelector("");e.some((e=>"attributes"===e.type&&"tabindex"===e.attributeName&&e.target instanceof Element&&null!=e.target.getAttribute(a)&&"-1"!==e.target.getAttribute("tabindex")||"childList"===e.type&&Array.from(e.addedNodes).some((e=>e instanceof Element&&e.matches(t)))))&&this.handleTabIndexes()},"undefined"!=typeof window&&"MutationObserver"in window&&(this.contentObserver=new MutationObserver(this.observeInteractiveContent))}componentDidMount(){this.handleTabIndexes();const e=this.observingNode.current;e&&this.contentObserver&&this.contentObserver.observe(e,{attributes:!0,attributeFilter:["tabindex"],childList:!0,subtree:!0})}componentWillUnmount(){var e;return null===(e=this.contentObserver)||void 0===e?void 0:e.disconnect()}componentDidUpdate(e){e.activeChildContainerSelector!==this.props.activeChildContainerSelector&&this.handleTabIndexes()}render(){return i.createElement("div",{ref:this.observingNode},this.props.children)}}},59577:(e,t,n)=>{"use strict";n.d(t,{C8:()=>r,eJ:()=>o});var i=n(67294);const a=i.createContext({activeGroupId:"",setActiveGroupId:()=>{}});class r extends i.PureComponent{constructor(e){super(e),this.setActiveHoverGroup=e=>{this.setState({activeGroupId:e})},this.state={activeGroupId:"",setActiveGroupId:this.setActiveHoverGroup}}render(){const{children:e}=this.props;return i.createElement(a.Provider,{value:this.state},e)}}function o(e,t){const n=n=>i.createElement(a.Consumer,null,(a=>i.createElement(e,Object.assign({},n,{onMouseOver:()=>a.setActiveGroupId(t),onMouseOut:()=>a.setActiveGroupId(""),isFocused:t===a.activeGroupId}))));return n.displayName="HoverGroupTarget",n}},26781:(e,t,n)=>{"use strict";n.d(t,{r:()=>l});var i=n(67294),a=n(78384),r=n(74208);const o=a.default.div.withConfig({displayName:"StyledImageWithFocalPoint"})`
    width: 100%;
    height: 100%;

    img {
        object-fit: cover;
        object-position: ${e=>`${r.b[e.focalPoint.x]}% ${r.F[e.focalPoint.y]}%`};
        height: 100%;
        max-width: 100%;
    }
`;o.displayName="StyledImageWithFocalPoint";const l=e=>i.createElement(o,Object.assign({},e));l.displayName="ImageWithFocalPoint"},7279:(e,t,n)=>{"use strict";n.d(t,{r:()=>L,a:()=>_});var i=n(67294),a=n(73935),r=n(78384),o=n(33700),l=n(46410),s=n(81697),c=n(82165),d=n(65374);const m=o.zo.div.withConfig({displayName:"StyledBulletPaginationWrapper"})`
    direction: ltr;
    padding: ${e=>e.theme.size.static300} 0;
    text-align: center;
`,u=o.zo.button.withConfig({displayName:"StyledBulletButton"})`
    ${s.sp}
    display: inline-block;
    position: relative;
    padding: ${"5px"}; //Spacing around points

    &::before {
        content: '';
        display: block;
        height: ${"4px"}; //Size of the point
        width: ${"4px"}; //Size of the point
        border-radius: 50%;
        background-color: ${e=>e.theme.interaction.recipe450.default};
        transition: transform 0.2s;
        ${e=>e.isActive?"transform: scale(2);":""};
    }

    &:focus {
        outline: none;

        &::before {
            transform: scale(1.6);
            ${e=>e.isActive?"transform: scale(2);":"transform: scale(1.6);"};
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;
            border: solid 2px ${e=>e.theme.focusColor};
            margin: -2px;
        }
    }
`;u.displayName="StyledBulletPagination";class p extends i.Component{constructor(){super(...arguments),this.wrapperRef=i.createRef()}render(){const{paginationData:e,activeIndex:t,paginationLabel:n}=this.props;return i.createElement(d.G,Object.assign({},this.props,{tabListRef:this.wrapperRef}),(({tabListKeyDownHandler:a,getTabClickHandler:r})=>i.createElement(m,{role:"tablist","aria-label":n,onKeyDown:a,ref:this.wrapperRef},e.map((({label:e,id:n,panelId:a},o)=>i.createElement(u,{isActive:o===t,onClick:r(o),key:o,role:"tab",id:n,"aria-controls":a,tabIndex:o===t?0:-1,"aria-selected":o===t?"true":"false"},i.createElement(s.Wc,null,e)))))))}}const h=(e,t=0)=>4.16667*t/e;function g(e,t){return(t?24:e?20:16)+(t?0:1)}const f=e=>console.warn(`Can't set position of non existing slide <${e}>.`),y=(e,t,n=!1,i=!1,a=s.Nm.LTR)=>{const r=e===t-1,o=g(i,n),l=(24-(n?24:i?20:16))/2-(n?0:2);let c=0;if(e>=t)return f(e),y(t-1,t);if(e<0)return f(e),y(0,t);if(a===s.Nm.RTL){const n=100-100/t;return 0===e?n:(c=n-(e*h(t,o)-h(t,l)),r?c+h(t,l):c)}return 0===e?c:(c=e*h(t,o)-h(t,l),c=r?c-h(t,l):c,-c)},v=o.zo.div.withConfig({displayName:"StyledSimpleCarouselWrapper"})`
    // flex necessary to change order visually
    display: flex;
    flex-direction: column;

    position: relative;
    ${e=>e.useDivider&&`border-bottom: 1px solid ${e.theme.border.color.secondary};`}
`,b=o.zo.div.withConfig({displayName:"StyledSimpleCarousel"})`
    overflow: hidden;
    width: 100%;
    max-width: 100vw;
    position: relative;
    order: -1; // visually before pagination;
`;b.displayName="StyledSimpleCarousel";const E=o.zo.div.withConfig({displayName:"StyledCarouselItemFocusWrap"})`
    position: relative;
    height: 100%;

    &:before {
        content: '';
        border: solid 2px ${e=>e.theme.focusColor};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        pointer-events: none;
        display: none;
    }
`,w=o.zo.li.attrs((e=>({style:{opacity:e.dontShowNextSlide||e.active||e.inactiveSlidesOpaque?1:.5}}))).withConfig({displayName:"CarouselItem"})`
    position: relative;
    overflow: hidden;
    width: ${e=>h(e.numberOfSlides,g(e.useWiderSlides,e.dontShowNextSlide))}%;
    padding-right: ${e=>e.dontShowNextSlide?h(e.numberOfSlides,0):h(e.numberOfSlides,1)}%;
    transition: opacity 0.3s cubic-bezier(0.14, 1.12, 0.67, 0.99);
    &:first-child {
        margin-left: ${e=>e.dontShowNextSlide?h(e.numberOfSlides,0):h(e.numberOfSlides,2)}%;
    }

    &:focus {
        outline: none;

        ${E} {
            &:before {
                display: block;
            }
        }
    }
`,C=o.zo.ul.attrs((e=>({style:{transform:`translate3d(${e.position}%, 0, 0)`,transition:e.showTransition?"0.3s cubic-bezier(0.14, 1.12, 0.67, 0.99)":"none"}}))).withConfig({displayName:"CarouselInner"})`
    list-style: none;
    display: flex;
    flex-direction: ${e=>e.theme.direction!==s.Nm.RTL?"row":"row-reverse"};
    margin: 0;
    padding: 0;
    position: relative;
    width: ${e=>100*e.numberOfSlides}%;
    overflow: hidden;
`,S=o.zo.div.withConfig({displayName:"StyledCaptionWrapper"})`
    margin-bottom: ${e=>e.theme.size.static400};
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 ${e=>e.theme.size.static150};
`;S.displayName="StyledCaptionWrapper";const k=o.zo.div.withConfig({displayName:"StyledCaption"})`
    padding: 0 ${e=>e.theme.size.grid003};

    @media (min-width: ${l.u3.b560}px) {
        padding: 0 ${e=>e.theme.size.grid004};
        text-align: center;
    }

    @media (min-width: ${l.u3.b960}px) {
        text-align: ${e=>(0,s.rz)(e.theme.direction)};

        padding: ${e=>(0,s.o3)(e.theme.direction,0,e.theme.size.static150,0,e.theme.size.grid002)};
    }
`;k.displayName="StyledCaption";const L=i.createContext({active:!0});class x extends i.PureComponent{render(){const{active:e,children:t}=this.props;return i.createElement(L.Provider,{value:{active:e}},t)}}class $ extends i.Component{constructor(e){super(e),this.preventDefault=e=>{e.stopImmediatePropagation(),e.returnValue=!1},this.disableScroll=()=>{const e={passive:!1};window.addEventListener("scroll",this.preventDefault,e),window.addEventListener("touchmove",this.preventDefault,e),window.onwheel=this.preventDefault,window.ontouchmove=this.preventDefault},this.enableScroll=()=>{window.removeEventListener("scroll",this.preventDefault,!1),window.removeEventListener("touchmove",this.preventDefault,!1),window.onwheel=null,window.ontouchmove=null},this.handleSlideStart=e=>{this.disableScroll();const{position:t}=this.state,n=e.touches[0];this.start={x:n.pageX,y:n.pageY,position:t,time:Date.now()},this.isScrolling=void 0},this.handleSlideMove=e=>{if(e.touches.length>1||!this.start)return;const{start:t,carousel:n,numberOfSlides:i}=this,{activeSlide:r}=this.props,o=e.touches[0],l=a.findDOMNode(n.current),s=l instanceof Element?l.clientWidth:1,c=t.position||0;let d=o.pageX-t.x;const m=o.pageY-t.y;if(void 0===this.isScrolling&&(this.isScrolling=this.isScrolling||Math.abs(d)<Math.abs(m)),this.isScrolling)return void this.enableScroll();d/=0===r&&d>0||r===i-1&&d<0?Math.abs(d)/s+1:1;const u=d/s*h(i,g(this.props.useWiderSlides,this.props.dontShowNextSlide));this.delta={x:d,y:m,position:u,time:Date.now()};const p=c+u;this.setState((e=>Object.assign(Object.assign({},e),{position:p,isIntermediatePosition:!0})))},this.handleSlideEnd=e=>{this.enableScroll();const{numberOfSlides:t,delta:n,start:i}=this;if(!n||!i||this.isScrolling)return;e.preventDefault(),e.stopPropagation();const{activeSlide:a,onSlideChanged:r,dontShowNextSlide:o,useWiderSlides:l,direction:s}=this.props,{position:c=0}=n,d=Date.now()-i.time,m=Math.abs(c),u=h(t,g(l,o));if(d<250&&m>.1*u||m>u/2){const e=c>0?(p=a)>0?p-1:p:((e,t)=>e<t-1?e+1:e)(a,t);this.setState((n=>Object.assign(Object.assign({},n),{position:y(e,t,o,l,s),isIntermediatePosition:!1}))),r&&a!==e&&r(e)}else Math.abs(n.x)>1&&this.setState((e=>Object.assign(Object.assign({},e),{position:y(a,t,o,l,s),isIntermediatePosition:!1})));var p;this.start=void 0,this.delta=void 0},this.handleCarouselItemClick=(e,t)=>{const{activeSlide:n,onSlideChanged:i}=this.props;e!==n&&i&&!this.isScrolling&&(t.preventDefault(),t.stopPropagation(),i(e))},this.handlePaginationlItemClick=e=>{const{activeSlide:t,onSlideChanged:n}=this.props;e!==t&&n&&!this.isScrolling&&n(e)},this.handleCarouselItemTouchEnd=(e,t)=>{this.delta||this.handleCarouselItemClick(e,t)},this.getPaginationData=()=>{const{paginationItemLabels:e,paginationDefaultItemLabel:t,getXOfYLabel:n}=this.props;return Array(this.numberOfSlides).fill(void 0).map(((a,r)=>({label:i.createElement("span",{key:r},(null==e?void 0:e[r])||t,", ",n(r+1,this.numberOfSlides)),id:this.getTabId(r),panelId:this.getPanelId(r)})))},this.carouselWrapper=i.createRef(),this.carousel=i.createRef(),this.state=$.getDerivedStateFromProps(e)}get numberOfSlides(){return i.Children.count(this.props.children)}static getDerivedStateFromProps(e,t){const n=i.Children.count(e.children);return{position:t&&t.position&&t.isIntermediatePosition?t.position:y(e.activeSlide,n,e.dontShowNextSlide,e.useWiderSlides,e.direction),isIntermediatePosition:!!t&&t.isIntermediatePosition}}getPanelId(e){return`${this.props.carouselId}-panel-${e}`}getTabId(e){return`${this.props.carouselId}-tab-${e}`}getCaptionId(e,t){const{captions:n,carouselId:i}=this.props,a=`${i}-caption-${e}`;return!t||(null==n?void 0:n[e])?a:void 0}render(){const{children:e,activeSlide:t,dontShowNextSlide:n,maxHeight:a,useWiderSlides:r,useDivider:o,inactiveSlidesOpaque:l,renderPagination:s,renderControls:d,captions:m,galleryLabel:u,paginationLabel:h}=this.props,{position:g,isIntermediatePosition:f}=this.state,{numberOfSlides:y}=this,L={paginationData:this.getPaginationData(),paginationLabel:h,activeIndex:t,onSlideSelect:this.handlePaginationlItemClick};return i.createElement(v,{ref:this.carouselWrapper,useDivider:o,role:"group","aria-label":u,"aria-roledescription":"carousel"},s?s(L):i.createElement(p,Object.assign({},L)),i.createElement(b,{ref:this.carousel,onTouchStart:this.handleSlideStart,onTouchMove:this.handleSlideMove,onTouchEndCapture:this.handleSlideEnd,tabIndex:-1},i.createElement(c.f,{childContainerSelector:'[role="tabpanel"]',activeChildContainerSelector:`[role="tabpanel"]:nth-child(${t+1})`},i.createElement(C,{position:g,numberOfSlides:y,showTransition:!f,maxHeight:a},i.Children.map(e,((e,a)=>{const o=a===t;return i.createElement(w,{dontShowNextSlide:n,numberOfSlides:y,active:o,onClickCapture:e=>this.handleCarouselItemClick(a,e),onTouchEndCapture:e=>this.handleCarouselItemTouchEnd(a,e),useWiderSlides:r,inactiveSlidesOpaque:l,tabIndex:o?0:-1,role:"tabpanel",id:this.getPanelId(a),"aria-labelledby":this.getTabId(a),"aria-describedby":this.getCaptionId(a,!0),"aria-hidden":!o},i.createElement(E,null,i.createElement(x,{active:o},e)))})))),d&&d(L)),i.createElement(S,null,null==m?void 0:m.map(((e,n)=>i.createElement(k,{hidden:n!==t,id:this.getCaptionId(n),key:this.getCaptionId(n)},e)))))}}function _(e){return i.createElement(r.ThemeContext.Consumer,null,(t=>i.createElement($,Object.assign({},e,{direction:t.direction}))))}},65374:(e,t,n)=>{"use strict";n.d(t,{G:()=>r});var i=n(67294),a=n(73935);class r extends i.Component{constructor(){super(...arguments),this.focusTab=e=>{const t=a.findDOMNode(this.props.tabListRef.current),n=null==t?void 0:t.children;(null==n?void 0:n[e])&&n[e].focus({preventScroll:!0})},this.getTabClickHandler=e=>t=>{this.props.onSlideSelect(e),this.focusTab(e),t.preventDefault()},this.tabListKeyDownHandler=e=>{const{activeIndex:t,paginationData:n,onSlideSelect:i}=this.props;let a=t;switch(e.key){case"ArrowLeft":a=(n.length+t-1)%n.length;break;case"ArrowRight":a=(t+1)%n.length;break;case"Home":a=0;break;case"End":a=n.length-1}a!==t&&(i(a),this.focusTab(a),e.preventDefault())}}render(){const{children:e}=this.props,{tabListKeyDownHandler:t,getTabClickHandler:n}=this;return i.createElement(i.Fragment,null,e({tabListKeyDownHandler:t,getTabClickHandler:n}))}}},3125:(e,t,n)=>{"use strict";n.d(t,{QU:()=>ne,Yc:()=>me,kR:()=>he,Uk:()=>le,GA:()=>Me,Fr:()=>S,YM:()=>Fe});var i=n(58509),a=n(93096),r=n.n(a),o=n(67294),l=n(73935),s=n(83625),c=n(64317),d=n(78384),m=n(63638),u=n(46410),p=n(73154),h=n(49181),g=n(83028),f=n(32667),y=n(52745),v=n(87465),b=n(86119),E=n(81697),w=n(93346),C=n(16275);const S=o.createContext({activeMenuLvl1Item:"",menuLvl1ListRef:null,menuLvl2ListRef:null,setActiveMenuLvl1Item:()=>{},setActiveMenuLvl2ItemIndex:()=>{}});var k=n(85839);const L=e=>"DIV"===(null==e?void 0:e.nodeName)?e.firstChild:e,x=e=>e&&e.hasChildNodes()?Array.from(e.childNodes).findIndex((e=>document.activeElement===l.findDOMNode(L(e.firstChild)))):-1,$=(e,t)=>{if(e&&t<e.childNodes.length){const n=e.childNodes[t].firstChild;if(!n)return;L(n).focus()}},_=(e,t)=>{if(e&&t<e.childNodes.length){const n=e.childNodes[t].firstChild;if(!n)return;L(n).click()}},I=(e,t)=>!(!e||t<0||t>e.childNodes.length)&&L(e.children[t].firstChild).getAttribute("aria-controls"),T=(e,t,n,i,a,r,o,l)=>{const s=Boolean(n),c=t!==E.Nm.RTL?e.key:"ArrowRight"===e.key?"ArrowLeft":"ArrowLeft"===e.key?"ArrowRight":e.key;s?((e,t,n,i,a)=>{const{menuLvl2Div:r,menuLvl2ItemCount:o,focusedMenuLvl2ItemIndex:l,hasFocusedMenuLvl2ItemSubmenu:s,focusedMenuLvl3Div:c,focusedMenuLvl3ItemCount:d,focusedMenuLvl3ItemIndex:m,secondLevelActive:u}=((e,t)=>{const n=t.current&&t.current.hasChildNodes()?t.current.firstChild:null,i=n&&n.hasChildNodes()?n.childNodes.length:0,a=x(n),r=I(n,a),o=t.current&&t.current.hasChildNodes()?t.current.lastChild:null,l=o&&void 0!==e?o.childNodes[e]:null,s=l?l.childNodes.length:0,c=x(l);return{menuLvl2Div:n,menuLvl2ItemCount:i,focusedMenuLvl2ItemIndex:a,hasFocusedMenuLvl2ItemSubmenu:r,focusedMenuLvl3Div:l,focusedMenuLvl3ItemCount:s,focusedMenuLvl3ItemIndex:c,secondLevelActive:c<0}})(n,i);if(u)switch(t){case"Escape":case"ArrowLeft":a(),e.preventDefault();break;case"ArrowRight":case" ":case"Enter":("ArrowRight"!==t||s)&&_(r,l),e.preventDefault();break;case"ArrowUp":$(r,l<=0?o-1:l-1),e.preventDefault();break;case"ArrowDown":$(r,l<0||l===o-1?0:l+1),e.preventDefault()}else switch(t){case"Escape":case"ArrowLeft":n&&($(r,n),_(r,n)),e.preventDefault();break;case" ":_(c,m),e.preventDefault();break;case"ArrowUp":$(c,0===m?d-1:m-1),e.preventDefault();break;case"ArrowDown":$(c,m===d-1?0:m+1),e.preventDefault()}})(e,c,i,r,o):((e,t,n,i)=>{const a=n.current,r=a?a.childNodes.length:0,o=x(a),l=I(a,o);switch(t){case"Escape":i&&i(),e.preventDefault();break;case"ArrowLeft":e.preventDefault();break;case"ArrowRight":case" ":("ArrowRight"!==t||l)&&_(a,o),e.preventDefault();break;case"ArrowUp":$(a,o<=0?r-1:o-1),e.preventDefault();break;case"ArrowDown":$(a,o<0||o===r-1?0:o+1),e.preventDefault()}})(e,c,a,l)};var N=n(12940),P=n(73135),O=n(4727),R=n(39374);const z=o.forwardRef(((e,t)=>o.createElement(d.ThemeContext.Consumer,null,(({direction:n})=>{const i=n===E.Nm.RTL?o.createElement(O.o,{ariaHidden:!0}):o.createElement(R.X,{ariaHidden:!0});return o.createElement(k.Ag,{onClick:e.onClick,ref:null===t?void 0:t},o.createElement(k.fS,null,i,o.createElement(p.xv,{tag:p.rh.span,appearance:p.C2.label0100},o.createElement(k.F8,null,e.label))))})))),D="flyout-second-level-container-anim",A=d.default.div.withConfig({displayName:"StyledNavigationFlyoutSecondLevel"})`
    position: absolute;
    top: 0;
    ${e=>(0,E.rz)(e.theme.direction)}: 0;
    z-index: 2;
    min-height: ${w.gr};
    width: 100vw;
    background: linear-gradient(
        to ${e=>(0,E.lp)(e.theme.direction)},
        rgba(255, 255, 255, 0) 49%,
        rgba(255, 255, 255, 1) 50%
    );
    pointer-events: none;

    // default position out off screen
    transform: translate3d(
        ${e=>e.theme.direction===E.Nm.RTL?"-":""}100%,
        0,
        0
    );

    // NOTE: anim enter
    &.${D}-enter-active {
        transition: transform 0.5s ${k.dt};
        transform: translate3d(0, 0, 0);
    }

    &.${D}-enter-done {
        transform: translate3d(0, 0, 0);
    }

    // NOTE: anim exit
    &.${D}-exit {
        transition: transform 0.3s ${k.dt};
        transform: translate3d(
            ${e=>e.theme.direction===E.Nm.RTL?"-":""}100%,
            0,
            0
        );
    }
`;A.displayName="StyledNavigationFlyoutSecondLevel";const M=d.default.div.withConfig({displayName:"StyledSecondLevelContainer"})`
    position: absolute;
    left: 0;
    right: 0;
    background: white;
    pointer-events: auto;

    ${e=>(0,k.bF)(e.theme.direction,(0,k.n)(e.sideBarState)?h.X.grid003:h.X.grid007)};
    @media (min-width: ${u.u3.b960}px) {
        ${e=>(0,k.bF)(e.theme.direction,(0,k.n)(e.sideBarState)?h.X.grid001:h.X.grid006)};
        // when opened needs to shift 6 columns to right
    }
    @media (min-width: ${u.u3.b1280}px) {
        ${e=>(0,k.bF)(e.theme.direction,(0,k.n)(e.sideBarState)?h.X.grid001:h.X.grid005)};
        // when opened needs to shift 5 columns to right
    }
    @media (min-width: ${u.u3.b1600}px) {
        ${e=>(0,k.bF)(e.theme.direction,(0,k.n)(e.sideBarState)?h.X.grid001:h.X.grid004)};
        // when opened needs to shift 4 columns to right
    }
    ${(0,m.p)("transform")};
    ${e=>"opened"===e.sideBarState&&"cursor: pointer"};
`;M.displayName="StyledSecondLevelContainer";const B=d.default.div.withConfig({displayName:"StyledSecondLevelTopBar"})`
    padding: ${e=>e.theme.size.dynamic0100}
        ${e=>e.theme.size.grid002};
    height: ${24}px;
    box-sizing: content-box;
`;B.displayName="StyledSecondLevelTopBar";const F=d.default.div.withConfig({displayName:"StyledSecondLevelBody"})`
    padding: 0 ${e=>e.theme.size.grid002};
    height: calc(
        ${w.gr} - ${24}px -
            (2 * ${e=>e.theme.size.dynamic0100})
    );
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
`;F.displayName="StyledSecondLevelBody";const W=d.default.div.withConfig({displayName:"StyledSecondLevelBodyInner"})`
    padding: ${e=>e.theme.size.dynamic0100} 0;
`;W.displayName="StyledSecondLevelBodyInner";const H={text:{},focusOutline:{color:"color.black-900"}};class j extends o.Component{constructor(){super(...arguments),this.backButtonRef=o.createRef(),this.contentAreaRef=o.createRef(),this.focusBackButton=()=>{const e=l.findDOMNode(this.backButtonRef.current);e instanceof HTMLButtonElement&&e.focus()},this.onEntered=()=>{this.focusBackButton();const e=l.findDOMNode(this.contentAreaRef.current);e instanceof HTMLElement&&(0,i.Qp)(e)}}render(){const{children:e,sideBarState:t,activeBreakpoint:n,onBack:i,onClick:a,in:r,backButtonLabel:l}=this.props,d=function(e,t){return t<u.u3.b960||"permanent"===e?21:23}(t,n);return o.createElement(g.f,{theme:"main"},o.createElement(S.Consumer,null,(({activeMenuLvl1Item:n})=>o.createElement(c.CSSTransition,{classNames:D,in:r,timeout:650,onEntered:this.onEntered,unmountOnExit:!0},o.createElement(A,{id:(0,P.iK)(n)},o.createElement(v.Ar,null,o.createElement(M,{sideBarState:t,onClickCapture:a},o.createElement(N.E,{columns:d},o.createElement(s.ZP,{returnFocus:!0,autoFocus:!1,disabled:!r},o.createElement(B,null,o.createElement(g.f,{theme:H},o.createElement(z,{label:l,onClick:i,ref:this.backButtonRef}))),o.createElement(F,{ref:this.contentAreaRef},o.createElement(W,null,e)))))))))))}}var V=n(42831),q=n(52140),G=n(10112);const U=d.default.button.withConfig({displayName:"StyledToggleSideBarButton"})`
	border: none;
	background: transparent;
	outline: none;
	display: flex;
	flex-direction: row;
	justify-content: center;
	cursor: pointer;
	color: ${e=>e.theme.text.color.primary};
	transform: rotateZ(
		${e=>"opened"===e.sideBarState?"-180deg":"0"}
	);
	${e=>(0,m.p)("margin-"+(0,E.rz)(e.theme.direction),{name:"transform",delay:"0.3s",duration:"0.3s"})};

	width: ${(0,V.C)(3)};
	margin-${e=>(0,E.rz)(e.theme.direction)}: ${e=>"opened"===e.sideBarState?e.theme.size.grid005:0};

	@media (min-width: ${u.u3.b960}px) {
		width: ${(0,V.C)(1)};
		margin-${e=>(0,E.rz)(e.theme.direction)}: ${e=>"opened"===e.sideBarState?e.theme.size.grid005:0};
	}
	@media (min-width: ${u.u3.b1280}px) {
		width: ${(0,V.C)(1)};
		margin-${e=>(0,E.rz)(e.theme.direction)}: ${e=>"opened"===e.sideBarState?e.theme.size.grid004:0};
	}
	@media (min-width: ${u.u3.b1600}px) {
		width: ${(0,V.C)(1)};
		margin-${e=>(0,E.rz)(e.theme.direction)}: ${e=>"opened"===e.sideBarState?e.theme.size.grid003:0};
	}
`,X=o.forwardRef(((e,t)=>{const{sideBarState:n,onClick:i}=e;return o.createElement(d.ThemeContext.Consumer,null,(({direction:e})=>{const a=e===E.Nm.RTL?o.createElement(q.s,{variant:"small",ariaHidden:!0}):o.createElement(G._,{variant:"small",ariaHidden:!0});return o.createElement(U,{ref:null===t?void 0:t,sideBarState:n,onClick:i},a)}))}));function Y(){return o.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":"true"},o.createElement("path",{d:"M12,6 C10.8954305,6 10,5.1045695 10,4 C10,2.8954305 10.8954305,2 12,2 C13.1045695,2 14,2.8954305 14,4 C14,5.1045695 13.1045695,6 12,6 Z M12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 Z M12,22 C10.8954305,22 10,21.1045695 10,20 C10,18.8954305 10.8954305,18 12,18 C13.1045695,18 14,18.8954305 14,20 C14,21.1045695 13.1045695,22 12,22 Z",id:"Combined-Shape",fill:"#000000"}))}X.displayName="ToggleSideBarButton";const K="toggle-sidebar-indicator-animation",Q=(e,t)=>{switch(e){case"opened":switch(t){case u.u3.b960:return h.X.grid006;case u.u3.b1280:return h.X.grid005;case u.u3.b1600:return h.X.grid004;default:return h.X.grid007}case"collapsed":switch(t){case u.u3.b960:case u.u3.b1280:case u.u3.b1600:return h.X.grid001;default:return h.X.grid003}default:return h.X.static0}},Z=d.default.button.withConfig({displayName:"StyledToggleSideBarIndicator"})`
    display: ${e=>"none"===e.sideBarState?"none":"flex"};
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    position: absolute;
    top: 50%;
    z-index: 3;
    cursor: pointer;
    opacity: ${e=>e.animatedIn?1:0};
    ${e=>(0,k.bF)(e.theme.direction,Q(e.sideBarState))};
    ${(0,m.p)("transform")};
    &.${K}-enter {
        opacity: 0;
        ${(0,m.p)({name:"opacity",delay:"0.3s"},"transform")};
    }

    &.${K}-enter-active {
        opacity: 1;
    }

    &.${K}-enter-done {
        opacity: 1;
    }

    &.${K}-exit {
        opacity: 0;
    }

    &.${K}-exit-done {
        opacity: 0;
    }

    @media (min-width: ${u.u3.b960}px) {
        width: ${(0,V.C)(1)};
        ${e=>(0,k.bF)(e.theme.direction,Q(e.sideBarState,u.u3.b960))};
    }
    @media (min-width: ${u.u3.b1280}px) {
        width: ${(0,V.C)(1)};
        ${e=>(0,k.bF)(e.theme.direction,Q(e.sideBarState,u.u3.b1280))};
    }
    @media (min-width: ${u.u3.b1600}px) {
        width: ${(0,V.C)(1)};
        ${e=>(0,k.bF)(e.theme.direction,Q(e.sideBarState,u.u3.b1600))};
    }
    svg path {
        fill: ${e=>e.theme.interaction.recipe550.default};
    }
`;Z.displayName="StyledToggleSideBarIndicator";class J extends o.Component{constructor(){super(...arguments),this.state={animatedIn:!1}}render(){const{sideBarState:e,isVisible:t,onClick:n,ariaHidden:i}=this.props,{animatedIn:a}=this.state;return o.createElement(c.CSSTransition,{classNames:K,in:t,timeout:650,onEntered:()=>this.setState({animatedIn:!0}),onExited:()=>this.setState({animatedIn:!1}),appear:!0},o.createElement(Z,{animatedIn:a,sideBarState:e,onClick:n,"aria-hidden":i},o.createElement(Y,null)))}}const ee=d.default.ul.withConfig({displayName:"StyledList"})`
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
`;ee.displayName="StyledList";const te=e=>{const{minimizedView:t,children:n,containerRef:i}=e,a=o.Children.map(n,(e=>o.cloneElement(e,{minimizedView:t}))),r=o.Children.toArray(a).filter(o.isValidElement);if(!r.length)return null;const l=t?p.C2.copy0150:p.C2.headline0300;return o.createElement(p.xv,{appearance:l},o.createElement(ee,{ref:i},r.map((e=>{const t=null===e.key?void 0:e.key;return o.createElement("li",{key:t},e)}))))},ne=({children:e})=>o.createElement(S.Consumer,null,(({activeMenuLvl1Item:t,menuLvl1ListRef:n})=>o.createElement(te,{minimizedView:Boolean(t),containerRef:n},e))),ie=d.css`
    // NOTE: from 1920px - we should have larger font size here
    // - for now hardcoded, but should be part of TextAppearance prop
    // - create a new one more specific for menu, or update "headline0300"?
    // - in design there is "headline0300" for mobile & tablet, "headline0350" for large screen
    @media (min-width: ${u.u3.b1920}px) {
        font-size: 48px;
        line-height: 56px;

        &:after {
            height: 2px;
            margin-bottom: -2px;
        }
    }
`,ae=d.default.a.withConfig({displayName:"StyledMenuLink"})`
    display: inline-block;
    padding: ${e=>e.theme.size.static200}
        ${e=>e.theme.size.static250}; // For proper outline visibility
    box-sizing: border-box;
    margin-left: -${e=>e.theme.size.static250}; // Move the link back after adding 8px in padding
    color: ${e=>e.theme.interaction.recipe400.default};
    transition: color ease-in-out 0.25s;
    text-decoration: none;
    position: relative;

    // NOTE: This part layouts a chevron if the nav flyout lvl 1 has a submenu. Only when submenus are present, this selector is available as well.
    &[aria-controls] {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &:not([aria-controls]):after {
        content: '';
        position: relative;
        top: 4px;
        display: block;
        width: 0;
        height: 1px;
        margin-bottom: -1px;
        background: ${e=>e.theme.interaction.recipe400.hover};
        transform: translate3d(0, 0, 0);

        @media (min-width: ${u.u3.b1600}px) {
            transition: width ease-in-out 0.25s;
        }
    }

    &:hover,
    &:focus {
        color: ${e=>e.theme.interaction.recipe400.hover};
    }

    @media (hover: hover) {
        &:focus {
            outline: 2px solid ${e=>e.theme.focusOutline.color};
            outline-offset: ${e=>e.theme.focusOutline.offset};
        }
    }

    ${e=>e.isActive&&d.css`
            color: ${e.theme.interaction.recipe400.active};

            &:after {
                content: '';
                position: absolute;
                left: ${e=>e.theme.size.static250}; // NOTE: StyledMenuLink x-axis padding
                bottom: 7px;
                height: 1px;
                width: calc(
                    100% - 2 * ${e=>e.theme.size.static250}
                ); // NOTE: StyledMenuLink x-axis padding
                background: ${e=>e.theme.interaction.recipe400.hover};

                @media (min-width: ${u.u3.b1600}px) {
                    transition: width ease-in-out 0.25s;
                }

                @media (min-width: ${u.u3.b1920}px) {
                    height: 2px;
                    bottom: 6px;
                }
            }
        `}

    ${e=>!e.minimizedView&&ie}
`,re=d.default.span.withConfig({displayName:"StyledIconWrapper"})`
	width: ${e=>e.theme.size.static200};
	height: ${e=>e.theme.size.static200};
	margin-${e=>(0,E.rz)(e.theme.direction)}: ${e=>e.minimizedView?e.theme.size.dynamic0050:e.theme.size.grid001};
	color: ${e=>e.theme.interaction.recipe400.default};
	position: relative;
	flex-shrink: 0;

	svg {
		position: absolute;
		transform: rotateZ(${e=>e.theme.direction===E.Nm.RTL?"180deg":"0"});
		fill: ${e=>e.isActive?e.theme.interaction.recipe400.active:""};
	}
`,oe=d.default.span.withConfig({displayName:"StyledTextWrapper"})``,le=e=>{const{children:t,href:n,onClick:i,rel:a,target:r,elementRef:l,title:s,isActive:c,minimizedView:d,ariaExpanded:m,ariaControls:u}=e;return u?o.createElement(ae,{ref:l,href:n,onClick:i,target:r,rel:a,title:s,isActive:c,minimizedView:d,"aria-expanded":m,"aria-controls":u},o.createElement(oe,null,t),o.createElement(re,{isActive:c,minimizedView:d},o.createElement(G._,{variant:"small",ariaHidden:!0}))):o.createElement(ae,{ref:l,href:n,onClick:i,target:r,rel:a,title:s,isActive:c,minimizedView:d},t)},se=d.default.div.withConfig({displayName:"StyledContainer"})`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: ${e=>e.theme.size.dynamic0200};

    @media (min-width: ${u.u3.b960}px) {
        flex-direction: row;
    }
`;se.displayName="StyledContainer";const ce=d.default.div.withConfig({displayName:"StyledNavArea"})`
    margin-bottom: ${e=>e.theme.size.static600};

    @media (min-width: ${u.u3.b960}px) {
        max-width: ${e=>e.theme.size.grid013};
        flex-grow: 1;
        margin: 0;
    }

    @media (min-width: ${u.u3.b1920}px) {
        max-width: ${e=>e.theme.size.grid011};
    }
`;ce.displayName="StyledNavArea";const de=d.default.div.withConfig({displayName:"StyledAsideArea"})`
	flex: 1;

	@media (min-width: ${u.u3.b960}px) {
		width: ${e=>e.theme.size.grid005};
		padding-${e=>(0,E.rz)(e.theme.direction)}: ${e=>e.theme.size.grid001};
		margin-${e=>(0,E.rz)(e.theme.direction)}: ${e=>e.theme.size.grid001};
		border-${e=>(0,E.rz)(e.theme.direction)}: solid 2px ${e=>e.theme.interaction.recipe550.default};
	}
`;de.displayName="StyledAsideArea";const me=e=>{const{children:t,asideArea:n,navigationArea:i}=e;if(t&&(n||i))throw new Error("You should either use both areas, or just children.");return o.createElement(se,null,t||o.createElement(o.Fragment,null,o.createElement(ce,null,i),n&&o.createElement(de,null,n)))},ue=d.default.ul.withConfig({displayName:"StyledList"})`
    margin: 0;
    padding: 0;
    list-style: none;
`;ue.displayName="StyledList";const pe=d.default.li.withConfig({displayName:"StyledItem"})`
    margin: ${e=>e.theme.size.static150} 0;
`;pe.displayName="StyledItem";const he=e=>{const{headline:t,children:n}=e;return n.length?o.createElement(f.W,{wrap:y.Hq.always,gutter:h.X.static200},t?o.createElement(p.xv,{appearance:p.C2.copy0150,bold:!0},t):null,o.createElement(p.xv,{appearance:p.C2.copy0150},o.createElement(ue,null,n.map((e=>{const t=null===e.key?void 0:e.key;return o.createElement(pe,{key:t},e)}))))):null},ge="navAnim",fe=d.default.div.withConfig({displayName:"StyledNavigationFlyoutFirstLevel"})`
    position: absolute;
    top: 0;
    ${e=>(0,E.rz)(e.theme.direction)}: 0;
    z-index: 2;
    width: 100vw;
    height: 100%;
`;fe.displayName="StyledNavigationFlyoutFirstLevel";const ye=d.default.div.withConfig({displayName:"StyledNavigationFlyoutBackground"})`
    position: absolute;
    top: 0;
    ${e=>(0,E.rz)(e.theme.direction)}: 0;
    z-index: -1;
    min-height: ${w.gr};
    width: 100vw;
    background: radial-gradient(
        circle at ${0}% ${0}%,
        ${e=>e.theme.backgroundGradient.lightColor} 0%,
        ${e=>e.theme.backgroundGradient.darkColor} 100%
    );
    transform: translate3d(0, 0, 0);
`;ye.displayName="StyledNavigationFlyoutBackground";const ve=d.default.div.withConfig({displayName:"StyledNavigationFlyoutForeground"})`
    display: flex;
    flex-direction: column;
    height: 100%;
`;ve.displayName="StyledNavigationFlyoutForeground";const be=d.default.ul.withConfig({displayName:"StyledLinkList"})`
    ${E.zn}
    display: flex;
    flex-wrap: wrap;
`;be.displayName="StyledLinkList";const Ee=d.default.div.withConfig({displayName:"StyledTopBar"})`
    padding: 0
        ${e=>"collapsed"===e.sideBarState?0:e.theme.size.grid001};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${e=>(0,m.p)("padding-"+(0,E.rz)(e.theme.direction))};
    transform: translate3d(0, 0, 0);
    ${e=>"collapsed"===e.sideBarState&&`max-width: ${e.theme.size.grid003}`};
    ${e=>"collapsed"===e.sideBarState&&"align-items: center"};
    ${e=>Boolean("collapsed"===e.sideBarState||"opened"===e.sideBarState)&&"flex-direction: column"};

    // >= b960 & opened 2nd level overlay
    @media (min-width: ${u.u3.b960}px) {
        flex-direction: column;
        ${e=>"collapsed"===e.sideBarState&&`max-width: ${e.theme.size.grid001}`};
        ${e=>"collapsed"===e.sideBarState&&"align-items: center"};
    }
`;Ee.displayName="StyledTopBar";const we=d.default.div.withConfig({displayName:"StyledCloseWrap"})`
    ${e=>Boolean("collapsed"===e.sideBarState||"opened"===e.sideBarState)&&`margin-bottom: calc(2 * ${e.theme.size.dynamic0100})`};
    // >= b960 & opened 2nd level overlay
    @media (min-width: ${u.u3.b960}px) {
        margin-bottom: calc(2 * ${e=>e.theme.size.dynamic0100});
    }
`;we.displayName="StyledCloseWrap";const Ce=({isLabelHidden:e=!1,label:t,onClick:n})=>o.createElement(k.Ag,{onClick:e=>n&&n(function(e){return 0===e.clientX&&0===e.clientY}(e))},o.createElement(k.fS,null,o.createElement(b.x,{ariaHidden:!0}),!e&&o.createElement(p.xv,{tag:p.rh.span,appearance:p.C2.label0100,color:p.d9.inherit},o.createElement(k.F8,null,t)))),Se=d.default.div.withConfig({displayName:"StyledNavigationContentArea"})`
    flex-grow: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
`;Se.displayName="StyledNavigationContentArea";const ke=d.default.div.withConfig({displayName:"StyledImprintBar"})`
    flex-shrink: 0;
    width: 100%;
    min-height: ${k.$1}px;
    padding-top: ${e=>e.theme.size.static200};
    padding-bottom: ${e=>e.theme.size.static200};
`;ke.displayName="StyledImprintBar";const Le=d.default.div.withConfig({displayName:"StyledImprintBarInner"})`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;Le.displayName="StyledImprintBarInner";const xe=d.default.div.withConfig({displayName:"StyledImprintLinks"})`
	${e=>!(0,k.n)(e.sideBarState)&&`width: ${e.theme.size.grid007}\n\t\t@media (min-width: ${u.u3.b960}px) {\n\t\t\t\twidth: ${e.theme.size.grid006}\n\t\t}\n\t\t@media (min-width: ${u.u3.b1280}px) {\n\t\t\t\twidth: ${e.theme.size.grid005}\n\t\t}\n\t\t@media (min-width: ${u.u3.b1600}px) {\n\t\t\t\twidth: ${e.theme.size.grid004}\n\t\t}\n\t`};

	@media (min-width: ${u.u3.b960}px) {
		margin-${e=>(0,E.rz)(e.theme.direction)}: ${e=>"collapsed"===e.sideBarState||"permanent"===e.sideBarState||"opened"===e.sideBarState?0:e.theme.size.grid001};
	}
`;xe.displayName="StyledImprintLinks";const $e=d.default.div.withConfig({displayName:"StyledMainNavigationArea"})`
    position: relative;
`;$e.displayName="StyledMainNavigationArea";const _e=(e,t)=>{const n=(0,k.n)(e);return d.css`
		padding-${(0,E.rz)(t)}: ${e=>n?e.theme.size.grid003:e.theme.size.grid001};
		padding-${(0,E.lp)(t)}: ${e=>e.theme.size.grid003};

		@media (min-width: ${u.u3.b960}px) {
			padding-${(0,E.rz)(t)}: ${t=>n?t.theme.size.grid002:"opened"===e||"permanent"===e?t.theme.size.grid001:t.theme.size.grid002};
			padding-${(0,E.lp)(t)}: ${e=>n?e.theme.size.grid002:e.theme.size.grid001};
		}

		@media (min-width: ${u.u3.b1920}px) {
			padding-${(0,E.lp)(t)}: ${e=>e.theme.size.grid002};
		}
	`},Ie=d.default.div.withConfig({displayName:"StyledPromotionalArea"})`
	height: 100%;
	padding: 0 ${e=>e.theme.size.grid003};

	@media (min-width: ${u.u3.b960}px) {
		padding-${e=>(0,E.lp)(e.theme.direction)}: ${e=>e.theme.size.grid002};
		padding-${e=>(0,E.rz)(e.theme.direction)}: ${e=>e.theme.size.grid001};
	}
`;Ie.displayName="StyledPromotionalArea";const Te=d.default.div.withConfig({displayName:"StyledMainNavigationAreaInner"})`
	flex-grow: 1;
	${e=>(0,m.p)("padding-"+(0,E.rz)(e.theme.direction))};
	padding-${e=>(0,E.rz)(e.theme.direction)}: ${e=>(0,k.n)(e.sideBarState)?e.theme.size.grid003:e.theme.size.grid001};
	padding-${e=>(0,E.lp)(e.theme.direction)}: ${e=>(0,k.n)(e.sideBarState)?e.theme.size.grid003:e.theme.size.dynamic0050};

	@media (min-width: ${u.u3.b960}px) {
		padding-${e=>(0,E.rz)(e.theme.direction)}: ${e=>"none"===e.sideBarState?e.theme.size.grid002:e.theme.size.grid001};
		padding-${e=>(0,E.lp)(e.theme.direction)}: ${e=>"none"===e.sideBarState?e.theme.size.grid002:e.theme.size.dynamic0050};
	}
`;Te.displayName="StyledMainNavigationAreaInner";const Ne=d.default.div.withConfig({displayName:"StyledDisclaimerArea"})`
    ${e=>_e(e.sideBarState,e.theme.direction)};
`;Ne.displayName="StyledDisclaimerArea";const Pe=d.default.ul.withConfig({displayName:"StyledAdditionalLinksArea"})`
	${E.zn}
	@media (max-width: ${u.u3.b960-1}px) {
		display: flex;
		flex-wrap: wrap;
		min-height: 21px;
	}
	${e=>_e(e.sideBarState,e.theme.direction)};
`;Pe.displayName="StyledAdditionalLinksArea";const Oe=d.default.div.withConfig({displayName:"StyledPromotionalAreaSeparator"})`
    height: 100%;
    position: absolute;
    width: 2px;
    background: ${e=>e.theme.separatorColor};
    display: none;
    ${e=>(0,E.lp)(e.theme.direction)}: 0;
    top: 0;

    @media (min-width: ${u.u3.b960}px) {
        display: block;
    }
`;Oe.displayName="StyledPromotionalAreaSeparator";const Re=d.default.div.withConfig({displayName:"StyledFlyoutSecondLevelWrapper"})`
    position: absolute;
    z-index: 2;
`;Re.displayName="StyledFlyoutSecondLevelWrapper";const ze=d.default.div.withConfig({displayName:"StyledNavigationFlyout"})`
	position: relative;
	height: ${w.gr};
	overflow: hidden;
	hyphens: auto;
	word-break: break-word;

	// NOTE: anim enter
	&.${ge}-enter {
		${ye} {
			transform: translate3d(${e=>e.theme.direction!==E.Nm.RTL?"-":""}100%,0,0);
		}

		// - also the SVG icon is not centered in the viewbox making the anim not precise (even though not so visible)
		${we} svg {
			position: relative;
			transform: rotate(${e=>e.theme.direction!==E.Nm.RTL?"-":""}180deg);
		}
	}

	&.${ge}-enter-active {
		${ye} {
			transition: transform .5s ${k.zR};
			transform: translate3d(0,0,0);
		}

		${we} svg {
			transition: transform .75s ${k.dt};
			transform: rotate(0);
		}
	}

	@media (max-width: ${u.u3.b960-1}px) {
		&.${ge}-enter {
			${Ee},
			${ke} {
				opacity: 0;
				transform: translate3d(0,0,0);
			}

			${$e},
			${Ie},
			${Ne} {
				opacity: 0;
				transform: translate3d(0,${e=>e.theme.size.static350},0);

			}
		}

		&.${ge}-enter-active {
			${Ee},
			${ke} {
				transition: opacity .5s ${k.dt};
				transition-delay: .1s;
				opacity: 1;
			}

			${$e},
			${Ie},
			${Ne} {
				transition: opacity .5s ${k.dt}, transform .5s ${k.dt};
				transition-delay: .25s;
				opacity: 1;
				transform: translate3d(0,0,0);
			}
		}
	}

	@media (min-width: ${u.u3.b960}px) {
		&.${ge}-enter {
			${Ee},
			${$e},
			${Ne},
			${Pe},
			${ke} {
				opacity: 0;
				transform: translate3d(0,0,0);
			}

			${Oe} {
				height: 0;
			}

			${Ie} {
				opacity: 0;
				transform: translate3d(0,0,0);
			}
		}

		&.${ge}-enter-active {
			${Ee},
			${$e},
			${Ne},
			${Pe},
			${ke} {
				transition: opacity 1.5s ${k.dt};
				transition-delay: .1s;
				opacity: 1;
			}

			${Oe} {
				transition: height .5s ${k.dt};
				transition-delay: .25s;
				height: 100%;
			}

			${Ie} {
				transition: opacity .75s ${k.dt};
				transition-delay: .25s;
				opacity: 1;
			}
		}
	}

	// NOTE: anim exit
	&.${ge}-exit-active {
		${ye} {
			transition: width .3s ${k.dt};
			transition-delay: .15s;
			width: 0;
		}

		// fade out whole content
		${Re},
		${Se},
		${ke} {
			transition: opacity .3s ${k.dt};
			opacity: 0;
		}
	}
`;ze.displayName="StyledNavigationFlyout";const De={default:"color.white-000",hover:"color.blue-100",active:"color.blue-100",disabled:"color.grey-400",checked:"color.white-000"},Ae={separatorColor:"color.grey-300",interaction:{recipe100:De,recipe400:De,recipe450:De,recipe750:De},text:{color:{primary:"color.white-000",secondary:"color.white-000"}},focusOutline:{color:"color.blue-200",offset:"-5px"}},Me="navigation-flyout";class Be extends o.Component{constructor(){super(...arguments),this.topBarRef=o.createRef(),this.mainNavigationAreaInnerRef=o.createRef(),this.promotionalAreaInnerRef=o.createRef(),this.disclaimerAreaRef=o.createRef(),this.firstLevelRef=o.createRef(),this.contentAreaRef=o.createRef(),this.toggleSideBarBtnRef=o.createRef(),this.additionalLinksAreaRef=o.createRef(),this.imprintBarRef=o.createRef(),this.menuLvl1ListRef=o.createRef(),this.menuLvl2ListRef=o.createRef(),this.handleResize=r()((()=>{const e=window.innerHeight,t=window.innerWidth,n=(0,k.ot)(t),i=n<u.u3.b960,a=Boolean(this.state.activeMenuLvl1Item);if(e!==this.state.windowHeight||n!==this.state.activeBreakpoint){const t=(0,E.Cr)(this.contentAreaRef),r=(0,E.Cr)(this.promotionalAreaInnerRef),o=(0,E.Cr)(this.disclaimerAreaRef),l=(0,E.Cr)(this.topBarRef),s=(0,E.Cr)(this.additionalLinksAreaRef),c=(0,k.sJ)("dynamic0100",n),d=(0,k.sJ)("dynamic0150",n),m=(0,E.Cr)(this.mainNavigationAreaInnerRef),u=(0,k.cM)(t,l,m,o,s,r,c,d,i);let p=m+u-5;if(!i&&p<r&&(p=r),u>0||n!==this.state.activeBreakpoint){const t=u>0&&!a?p:void 0;this.setState((i=>Object.assign(Object.assign({},i),{mainNavigationAreaContentHeight:t,windowHeight:e,activeBreakpoint:n,sideBarState:(0,k.XD)(a,n,this.state.sideBarState)})))}}}),100),this.state={mainNavigationAreaContentHeight:void 0,windowHeight:0,activeBreakpoint:0,activeMenuLvl1Item:"",sideBarState:"none"},this.setActiveMenuLvl1Item=e=>{if(e){const{sideBarState:t,activeMenuLvl1Item:n}=this.state;this.setState({activeMenuLvl1Item:e,sideBarState:window.innerWidth>=u.u3.b1920?"permanent":""===n?"collapsed":t})}},this.setActiveMenuLvl2ItemIndex=e=>{e&&(this.activeMenuLvl2ItemIndex=e)},this.handleBackButtonClick=()=>{const{onBackButtonClick:e}=this.props;e&&!e()||(this.setState({activeMenuLvl1Item:"",sideBarState:"none",activeBreakpoint:0}),window.requestAnimationFrame(this.handleResize))},this.handleSecondLevelClick=e=>{"opened"===this.state.sideBarState&&(e.preventDefault(),e.stopPropagation(),this.setState({sideBarState:"collapsed"}))},this.handleFirstLevelClick=e=>{const t=Boolean(this.state.activeMenuLvl1Item);if(!(window.innerWidth<u.u3.b560)&&t&&("collapsed"===this.state.sideBarState&&this.setState({sideBarState:"opened"}),"opened"===this.state.sideBarState)){if(e.target!==l.findDOMNode(this.contentAreaRef.current)&&e.target!==l.findDOMNode(this.toggleSideBarBtnRef.current))return;e.preventDefault(),e.stopPropagation(),this.setState({sideBarState:"collapsed"})}},this.handleToggleSideBar=e=>{const t=Boolean(this.state.activeMenuLvl1Item);window.innerWidth<u.u3.b560||!t||("collapsed"===this.state.sideBarState&&this.setState({sideBarState:"opened"}),"opened"===this.state.sideBarState&&(e.preventDefault(),e.stopPropagation(),this.setState({sideBarState:"collapsed"})))},this.handleKeyDown=(e,t)=>{const{onClose:n}=this.props,{activeMenuLvl1Item:i}=this.state;T(e,t,i,this.activeMenuLvl2ItemIndex,this.menuLvl1ListRef,this.menuLvl2ListRef,this.handleBackButtonClick,(()=>n&&n(!0)))},this.handleCloseButtonClick=e=>{const{onClose:t}=this.props;t&&t(e)}}componentDidMount(){window.addEventListener("resize",this.handleResize),this.handleResize();const e=l.findDOMNode(this.contentAreaRef.current);e instanceof HTMLElement&&(0,i.Qp)(e)}componentWillUnmount(){window.removeEventListener("resize",this.handleResize),(0,i.tP)()}render(){const{mainNavigationAreaContent:e,promotionalAreaContent:t,disclaimerAreaContent:n,imprintLinks:i=[],additionalLinks:a=[],languageSwitcher:r,secondLevelContent:l,backButtonLabel:m,closeButtonLabel:p,in:b,onExited:w,onEnter:L,flyoutRef:x}=this.props,{mainNavigationAreaContentHeight:$,activeBreakpoint:_,activeMenuLvl1Item:I,sideBarState:T}=this.state,N=Boolean(I),P=_<u.u3.b960,O=P||N?i:[...i,...a],R=N?void 0:r,z=N?void 0:$,D=l&&l[I],A=(0,k.es)(T),M=N&&("collapsed"===T||"opened"===T)&&window.innerWidth>u.u3.b560,B=P?h.X.static550:h.X.static600;return o.createElement(d.ThemeContext.Consumer,null,(({direction:i})=>o.createElement(S.Provider,{value:{activeMenuLvl1Item:I,setActiveMenuLvl1Item:this.setActiveMenuLvl1Item,setActiveMenuLvl2ItemIndex:this.setActiveMenuLvl2ItemIndex,menuLvl1ListRef:this.menuLvl1ListRef,menuLvl2ListRef:this.menuLvl2ListRef}},o.createElement(s.ZP,{autoFocus:!1},o.createElement(c.CSSTransition,{classNames:ge,onExited:w,onEnter:L,in:b,timeout:650},o.createElement(ze,{ref:x,onKeyDown:e=>this.handleKeyDown(e,i),tabIndex:-1,id:Me},o.createElement(g.f,{theme:Ae},o.createElement(fe,{ref:this.firstLevelRef,onClick:this.handleFirstLevelClick},o.createElement(ye,null),o.createElement(ve,null,o.createElement(Se,{ref:this.contentAreaRef},o.createElement(f.W,{wrap:y.Hq.always,gutter:h.X.dynamic0100,padding:{top:h.X.dynamic0100}},o.createElement(v.Ar,{allowOverflowingContent:!0},o.createElement(Ee,{ref:this.topBarRef,sideBarState:T},o.createElement(we,{sideBarState:T},o.createElement(Ce,{label:p,isLabelHidden:N,onClick:this.handleCloseButtonClick})))),o.createElement(v.Ar,{allowOverflowingContent:!0,appearance:A,rowGap:B},o.createElement($e,{style:{height:z}},o.createElement(Te,{ref:this.mainNavigationAreaInnerRef,sideBarState:T},e),!N&&t&&o.createElement(Oe,null)),!N&&o.createElement(Ie,{ref:this.promotionalAreaInnerRef},t),o.createElement(f.W,{wrap:y.Hq.always,gutter:h.X.dynamic0150},!N&&n&&o.createElement(Ne,{ref:this.disclaimerAreaRef,sideBarState:T},n),o.createElement(Pe,{ref:this.additionalLinksAreaRef,sideBarState:T},Boolean(P&&!N)&&o.createElement(C.o,null,a)))))),o.createElement(ke,{ref:this.imprintBarRef},o.createElement(v.Ar,{allowOverflowingContent:!0},o.createElement(Le,null,o.createElement(xe,{sideBarState:T},o.createElement(f.W,{padding:(0,k.ZF)(T),horizontalAlign:y._N.spaceBetween,animateChange:["padding-"+(0,E.rz)(i)],wrap:y.Hq.always},o.createElement(be,null,o.createElement(C.o,null,O)),R)),M&&o.createElement(X,{ref:this.toggleSideBarBtnRef,sideBarState:T,onClick:this.handleToggleSideBar}))))))),o.createElement(Re,null,o.createElement(c.TransitionGroup,{appear:!0},N&&o.createElement(j,{backButtonLabel:m,sideBarState:T,activeBreakpoint:_,onBack:this.handleBackButtonClick,onClick:this.handleSecondLevelClick},D))),b&&o.createElement(J,{isVisible:M,sideBarState:T,onClick:this.handleToggleSideBar,ariaHidden:!0})))))))}}const Fe=(0,d.withTheme)(Be)},85839:(e,t,n)=>{"use strict";n.d(t,{dt:()=>s,zR:()=>c,$1:()=>d,n:()=>m,es:()=>u,ZF:()=>p,Ag:()=>h,fS:()=>g,F8:()=>f,ot:()=>y,sJ:()=>b,cM:()=>E,XD:()=>w,bF:()=>C});var i=n(78384),a=n(46410),r=n(49181),o=n(33700),l=n(81697);const s="cubic-bezier(0.14, 1.12, 0.67, 0.99)",c="cubic-bezier(0.14, 1, 0.67, 0.99)",d=75;function m(e){return"none"===e||"collapsed"===e}function u(e){return{[a.u3.default]:[{name:"main-navigation-area",columns:24},{name:"promotional-area",columns:24},{name:"bottom-content-area",columns:24}],[a.u3.b560]:[{name:"main-navigation-area",columns:"none"===e||"collapsed"===e?24:7},{name:"promotional-area",columns:"none"===e||"collapsed"===e?24:17},{name:"bottom-content-area",columns:24}],[a.u3.b960]:[{name:"main-navigation-area",columns:"none"===e?17:6},{name:"promotional-area",columns:"none"===e?7:18},{name:"bottom-content-area",columns:24}],[a.u3.b1280]:[{name:"main-navigation-area",columns:"none"===e?17:5},{name:"promotional-area",columns:"none"===e?7:19},{name:"bottom-content-area",columns:24}],[a.u3.b1600]:[{name:"main-navigation-area",columns:"none"===e?17:4},{name:"promotional-area",columns:"none"===e?7:20},{name:"bottom-content-area",columns:24}]}}const p=e=>({inlineStart:{[a.u3.default]:"opened"===e?r.X.grid001:r.X.grid003,[a.u3.b960]:r.X.grid001},inlineEnd:{[a.u3.default]:"none"===e?r.X.grid003:r.X.dynamic0050,[a.u3.b960]:"none"===e?r.X.grid002:r.X.dynamic0050}}),h=i.default.button.withConfig({displayName:"StyledMenuButton"})`
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    color: ${e=>e.theme.interaction.recipe400.default};

    &:hover,
    &:focus {
        color: ${e=>e.theme.interaction.recipe400.hover};
    }

    &:focus {
        outline: none;
    }

    @media (hover: hover) {
        &:focus {
            outline: 2px solid ${e=>e.theme.focusOutline.color};
            outline-offset: 5px;
        }
    }
`;h.displayName="StyledMenuButton";const g=i.default.div.withConfig({displayName:"StyledButtonInnerWrapper"})`
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: ${e=>e.theme.size.static150};
    align-items: center;
`;g.displayName="StyledButtonInnerWrapper";const f=i.default.span.withConfig({displayName:"StyledMenuButtonText"})`
    // NOTE: correct vertical alignment
    position: relative;
    top: 0.11em;
`;function y(e){return e>=a.u3.b560&&e<a.u3.b960?a.u3.b560:e>=a.u3.b960&&e<a.u3.b1280?a.u3.b960:e>=a.u3.b1280&&e<a.u3.b1600?a.u3.b1280:e>=a.u3.b1600&&e<a.u3.b1920?a.u3.b1600:e>=a.u3.b1920&&e<a.u3.b2560?a.u3.b1920:e>=a.u3.b2560?a.u3.b2560:0}f.displayName="StyledMenuButtonText";const v={dynamic0100:{[a.u3.default]:20,[`${a.u3.b560}`]:24,[`${a.u3.b1600}`]:28},dynamic0150:{[a.u3.default]:28,[`${a.u3.b560}`]:52,[`${a.u3.b1600}`]:64}};function b(e,t){const n=v[e];let i="default";switch(t){case a.u3.b560:case a.u3.b960:case a.u3.b1280:i=a.u3.b560;break;case a.u3.b1600:case a.u3.b1920:case a.u3.b2560:i=a.u3.b1600}return n[i]}function E(e,t,n,i,a,r,o,l,s){return e-t-n-i-a-(s?r:0)-2*o-l*((i?1:0)+(s?1:0)+1)}function w(e,t,n){return t>=a.u3.b1920?e?"permanent":"none":e?"opened"===n?"opened":"collapsed":"none"}function C(e,t){return e===l.Nm.RTL?o.iv`
              transform: translateX(
                  calc(${e=>e.theme.size[t]}*-1)
              );
          `:o.iv`
              transform: translateX(${e=>e.theme.size[t]});
          `}},73135:(e,t,n)=>{"use strict";n.d(t,{iK:()=>I,NU:()=>T,zy:()=>N,G3:()=>P,yV:()=>O,h6:()=>R,mA:()=>z});var i=n(67294),a=n(78384),r=n(46410),o=n(32667),l=n(52745),s=n(73154),c=n(32139),d=n(81697),m=n(3125);const u=a.default.div.withConfig({displayName:"StyledNavigationLevelList"})`
    position: relative;
    padding-bottom: ${e=>e.theme.size.static150};

    @media (min-width: ${r.u3.b560}px) {
        display: flex;
    }
`;u.displayName="StyledNavigationLevelList";const p=a.css`
    :not(:first-child) {
        margin-top: ${e=>e.theme.size.dynamic0100};
    }

    @media (min-width: ${r.u3.b560}px) {
        display: flex;
    }
`,h=a.default.div.withConfig({displayName:"StyledNavigationLevelListItemDiv"})`
    ${p}
`;h.displayName="StyledNavigationLevelListItemDiv";const g=a.default.li.withConfig({displayName:"StyledNavigationLevelListItemLi"})`
    ${p}
`;g.displayName="StyledNavigationLevelListItemLi";const f=a.css`
  @media (min-width: ${r.u3.b560}px) {
  flex: 1;

  :first-child {
    margin-${e=>(0,d.lp)(e.theme.direction)}: ${e=>e.theme.size.grid001};
  }

  ${e=>e.openedSecondLevel&&a.css`
          // NOTE:
          // - opacity to highlight second level menu
          // - 60% min value due accessibility
          opacity: 0.6;
      `}
}`,y=a.default.div.withConfig({displayName:"StyledColumn"})`
    ${f}
`;y.displayName="StyledColumn";const v=a.default.ul.withConfig({displayName:"StyledColumnUl"})`
    ${f}

    // reset ul default styles
	list-style-type: none;
    margin: 0;
    padding: 0;
`;v.displayName="StyledColumnUl";const b=a.default.div.withConfig({displayName:"StyledIconWrapper"})`
	width: ${e=>e.theme.size.static200};
	height: ${e=>e.theme.size.static200};
	margin-${e=>(0,d.rz)(e.theme.direction)}: ${e=>e.theme.size.grid001};
	color: ${e=>e.theme.interaction.recipe400.default};
	position: relative;

	svg {
		transition: transform ${300}ms ease;
		transform: ${e=>e.isOpen?"rotateX(180deg)":"rotateX(0)"};
		position: absolute;
		top: 0;
		left: 0;
		transform-origin: 50% 50%;

		@media (min-width: ${r.u3.b560}px) {
			transform: rotateZ(${e=>e.theme.direction===d.Nm.RTL?"":"-"}90deg);
		}
	}
`,E=a.default.div.withConfig({displayName:"StyledText"})`
    position: relative;
    text-align: ${e=>(0,d.rz)(e.theme.direction)};

    ::after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 1px;
        margin-top: ${e=>e.theme.size.static100};
        background: ${e=>e.theme.interaction.recipe400.checked};
        transition: width ${300}ms ease;
    }

    ${e=>e.isOpen&&"\n\t\t\t::after {\n\t\t\t\twidth: 100%;\n\t\t\t}\n\t\t"};
`,w=a.css`
    display: block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    outline: none;

    @media (hover: hover) {
        &:hover {
            color: ${e=>e.theme.interaction.recipe100.hover};

            ${b} {
                color: ${e=>e.theme.interaction.recipe400.hover};
            }
        }

        &:focus {
            outline: ${2}px solid
                ${e=>e.theme.interaction.recipe400.hover};
            outline-offset: ${5}px;
            color: ${e=>e.theme.interaction.recipe400.hover};

            ${b} {
                color: ${e=>e.theme.interaction.recipe400.hover};
            }
        }
    }

    ${e=>e.isOpen&&a.css`
            @media (hover: hover) {
                color: ${e.theme.interaction.recipe400.checked};

                ${b} {
                    color: ${e.theme.interaction.recipe400.checked};
                }

                &:hover,
                &:focus {
                    color: ${e.theme.interaction.recipe400.checked};

                    ${b} {
                        color: ${e.theme.interaction.recipe400.checked};
                    }
                }
            }
        `};
`,C=a.default.a.withConfig({displayName:"StyledLink"})`
    ${w}
`,S=a.default.button.withConfig({displayName:"StyledButton"})`
    ${w};

    border: 0;
    padding: 0;
    width: 100%;
    background: transparent;
`,k=a.css`
    height: 0;
    overflow: hidden;
    padding: 0 ${e=>e.theme.size.grid001};

    transition: opacity ${300}ms ease;
    opacity: 0;

    // NOTE: visibility to avoid focus until it's opened
    visibility: hidden;

    ${e=>e.isOpen&&a.css`
            visibility: visible;
            height: auto;
            padding-bottom: ${e.theme.size.dynamic0100};
            opacity: 1;
            overflow: visible;
        `};

    & > * {
        margin-top: ${e=>e.theme.size.dynamic0100};
        display: block;
    }

    @media (min-width: ${r.u3.b560}px) {
        padding: 0;

        ${e=>e.isOpen&&a.css`
                padding: 0 ${7}px
                    ${e.theme.size.dynamic0100} 0;
            `};

        & > * {
            :first-child {
                margin-top: 0;
            }
        }
    }
`,L=a.default.div.withConfig({displayName:"StyledSecondLevelListDiv"})`
    ${k}
`;L.displayName="StyledSecondLevelListDiv";const x=a.default.ul.withConfig({displayName:"StyledSecondLevelListUl"})`
    ${k}

    // reset ul default styles
	list-style-type: none;
    margin: 0;
`;function $(e){return`${e}_firstlevel`}function _(e){return`${e}_secondlevel`}function I(e){return _(`navigation-item${e}`)}function T(e){const{id:t,isOpen:n=!1,link:a,title:r,children:d,onClick:m}=e,u=$(t),p=_(t);return i.createElement(h,{id:t},i.createElement(y,null,i.Children.count(d)>0?i.createElement(S,{id:u,isOpen:n,onClick:m,"aria-expanded":n,"aria-controls":p},i.createElement(o.W,{wrap:l.Hq.never,horizontalAlign:l._N.spaceBetween,verticalAlign:l.Qj.center,shrinkContent:!0},i.createElement(E,{isOpen:n},i.createElement(s.xv,{color:s.d9.inherit,appearance:s.C2.headline0250},r)),")}",i.createElement(b,{isOpen:n},i.createElement(c._,{variant:"small",ariaHidden:!0})))):a),i.createElement(y,null,i.createElement(L,{id:p,isOpen:n,"aria-hidden":!n,"aria-labelledby":u},d)))}function N(e){const{id:t,isOpen:n=!1,link:a,title:r,onClick:d}=e,m=$(t),u=_(t),p=Boolean(a);return i.createElement(g,{id:t},p?a:i.createElement(S,{id:m,isOpen:n,onClick:d,"aria-expanded":n,"aria-controls":u,"data-has-submenu":!0},i.createElement(o.W,{wrap:l.Hq.never,horizontalAlign:l._N.spaceBetween,verticalAlign:l.Qj.center,shrinkContent:!0},i.createElement(E,{isOpen:n},i.createElement(s.xv,{color:s.d9.inherit,appearance:s.C2.headline0250},r)),")}",i.createElement(b,{isOpen:n},i.createElement(c._,{variant:"small",ariaHidden:!0})))))}function P(e){const{id:t,isOpen:n=!1,children:a}=e,r=$(t),o=_(t);return i.createElement(x,{id:o,isOpen:n,"aria-hidden":!n,"aria-labelledby":r},a&&i.Children.map(a,(e=>i.createElement("li",null,e))))}function O(e){return i.createElement(u,null,e.children)}function R(e){const{items:t,activeItem:n}=e;return i.createElement(m.Fr.Consumer,null,(({menuLvl2ListRef:e,setActiveMenuLvl2ItemIndex:a})=>(a&&a(n),i.createElement(u,{ref:e},i.createElement(v,{openedSecondLevel:n},t.map((e=>e.level1))),i.createElement(y,null,t.map((e=>e.level2)))))))}function z(e){const{children:t,href:n,onClick:a,itemRef:r}=e;return i.createElement(C,{href:n,onClick:a,ref:r},i.createElement(s.xv,{color:s.d9.inherit,appearance:s.C2.headline0250},t))}x.displayName="StyledSecondLevelListUl"},47501:(e,t,n)=>{"use strict";n.d(t,{PD:()=>R,d:()=>$,wn:()=>V,Pv:()=>_,rx:()=>I,_r:()=>S,xd:()=>y});var i=n(67294),a=n(78384),r=n(46410),o=n(33700),l=n(83028),s=n(87465),c=n(32667),d=n(49181),m=n(52745),u=n(27201),p=n(81697);const h={[r.u3.default]:32,[r.u3.b560]:40,[r.u3.b960]:48,[r.u3.b1920]:56};function g(e){return h[e]}function f(e,t,n){const i=((e,t)=>({[r.u3.default]:{top:e.size.static250,content:e.textAppearances.copy150.lineHeight,bottom:e.size.static200},[r.u3.b560]:{top:e.size.static250,content:e.textAppearances.copy150.lineHeight,bottom:e.size.static200},[r.u3.b960]:{top:e.size.static250,content:e.textAppearances.copy150.lineHeight,bottom:e.size.static200},[r.u3.b1920]:{top:e.size.static350,content:e.textAppearances.copy150.lineHeight,bottom:e.size.static200}}[t]))(e,t);return`calc(${i.top} + ${i.content||"0"} + ${i.bottom} + ${n?`${g(t)}px`:"0px"})`}const y=(e,t)=>o.iv`
    ${n=>[r.u3.default,r.u3.b560,r.u3.b960,r.u3.b1920].map((i=>`\n\t\t\t\t\t@media (min-width: ${i}px) {\n\t\t\t\t\t\t${e}: ${f(n.theme,i,t)};\n\t\t\t\t\t}\n\t\t\t\t`)).join("\n")}
`;var v=n(42831),b=n(73154),E=n(84552),w=n(61097),C=n(3125);const S=a.default.button.withConfig({displayName:"StyledTopBarButton"})`
    ${(0,w.sp)()};
    ${e=>(0,p.G$)(e)};
    ${e=>(0,p.rs)(e)};
    position: relative;

    display: flex;
    align-items: center;
    width: auto;
    height: ${24}px;
    text-align: ${e=>(0,p.rz)(e.theme.direction)};

    // NOTE: get rid off inline element space under
    font-size: 0;

    color: ${e=>e.theme.interaction.recipe450.default};
`,k=a.default.div.withConfig({displayName:"StyledMenuIcon"})`
    display: inline-block;
    ${e=>e.theme.direction===p.Nm.RTL&&"transform: scaleX(-1);"}
`,L=a.default.div.withConfig({displayName:"StyledMenuLabel"})`
	display: inline-block;
	box-sizing: border-box;
	padding-top: 1px; /* vertical align fix */
	padding-${e=>(0,p.rz)(e.theme.direction)}: 10px;
	max-width: calc(${(0,v.C)(6)});
	overflow: hidden;
`,x=a.default.div.withConfig({displayName:"StyledShoppingIconWrapper"})`
    ${e=>e.theme.direction===p.Nm.RTL&&"transform: scaleX(-1);"}
`;function $(e){const{onClick:t,menuLabel:n,ariaLabel:a,buttonRef:r,ariaExpanded:o}=e;return i.createElement(S,{onClick:t,"aria-controls":C.GA,"aria-expanded":o,"aria-label":a,ref:r},i.createElement(k,null,i.createElement(E.v,{ariaHidden:!0})),n&&i.createElement(L,null,i.createElement(b.xv,{appearance:b.C2.copy0150,bold:!0,staticSize:!0,color:b.d9.inherit},n)))}function _(e){const{onClick:t,ariaLabel:n}=e;return i.createElement(S,{onClick:t,"aria-label":n},i.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",role:"img","aria-hidden":"true"},i.createElement("path",{d:"M22.771 21.601l-5.591-5.979a9.06 9.06 0 001.837-5.624 8.723 8.723 0 00-9-9 8.699 8.699 0 00-9 9 8.69 8.69 0 009 9 9.18 9.18 0 005.764-1.944l5.53 5.913zm-12.754-4.603a6.697 6.697 0 01-7-7 6.697 6.697 0 017-7 6.697 6.697 0 017 7 6.697 6.697 0 01-7 7z"})))}function I(e){const{onClick:t,ariaLabel:n}=e;return i.createElement(S,{onClick:t,"aria-label":n},i.createElement(x,null,i.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",role:"img","aria-hidden":"true"},i.createElement("path",{d:"M0,3l2.4,0l3.8,17H20v-2H7.8l-0.7-3h13.4c0.3,0,0.6-0.3,0.7-0.6L23,4.9c0,0,0-0.1,0-0.1C23,4.4,22.7,4,22.3,4H4.7L4,1H0  C0,1,0,3,0,3z M6.7,13L5.1,6h15.6l-1.3,7H6.7z"}),i.createElement("circle",{cx:"9.8",cy:"22.5",r:"1.5"}),i.createElement("circle",{cx:"18.8",cy:"22.5",r:"1.5"}),i.createElement("g",null,i.createElement("polygon",{points:"16,8 16,11 18,11 18,8 16,8  "}),i.createElement("polygon",{points:"12,8 12,11 14,11 14,8 12,8  "}),i.createElement("polygon",{points:"8,8 8,11 10,11 10,8 8,8  "})))))}const T={[r.u3.default]:8,[r.u3.b560]:10,[r.u3.b960]:12,[r.u3.b1920]:14};function N(e){const t=`${function(e){return T[e]}(e)}px`;return`\n\t\tfont-size: ${t};\n\t\tline-height: ${t};\n\t`}const P=a.default.div.withConfig({displayName:"StyledLogoClaimWrapper"})``;P.displayName="StyledLogoClaimWrapper";const O=a.default.div.withConfig({displayName:"StyledLogoClaim"})`
    font-family: vw-head, Helvetica, Arial, sans-serif;
    font-weight: bold;
    color: ${e=>e.theme.interaction.recipe450.default};

    // move text a slightly up
    padding-bottom: 0.2em;

    ${N(r.u3.default)};
    @media (min-width: ${r.u3.b560}px) {
        ${N(r.u3.b560)};
    }
    @media (min-width: ${r.u3.b960}px) {
        ${N(r.u3.b960)};
    }
    @media (min-width: ${r.u3.b1920}px) {
        ${N(r.u3.b1920)};
    }
`;function R(e){const t=(n=e.children)?n.trim().split(" "):[];var n;return i.createElement(P,null,t.map(((e,t)=>i.createElement(O,{key:t},e))))}O.displayName="StyledLogoClaim";const z="--s2-one-hub-navigation-top-bar-height",D=a.css`
    padding-bottom: ${e=>e.theme.size.static200};
    padding-top: ${e=>e.theme.size.static250};
    @media (min-width: ${r.u3.b1920}px) {
        padding-top: ${e=>e.theme.size.static350};
    }
`,A=o.zo.header.withConfig({displayName:"StyledOneHubNavigationTopBar"})`
    width: 100%;
    ${e=>y(z,e.isExpanded)};
    height: ${e=>e.hasCustomHeight?"auto":`var(${z})`};
    transform: translateZ(0);

    ${e=>!e.isEDGE&&"transition: height 0.3s ease-in"};

    color: ${e=>e.theme.interaction.recipe450.default};
    background: ${e=>e.hasTransparentBackground?"linear-gradient(to bottom,rgba(0, 0, 0, 0.5), 30% ,rgba(0, 0, 0, 0))":"rgba(255, 255, 255, .98)"};
`;A.displayName="StyledOneHubNavigationTopBar";const M=o.zo.div.withConfig({displayName:"StyledNavigationTopBarPrimaryContent"})`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${D};
`;M.displayName="StyledNavigationTopBarPrimaryContent";const B=o.zo.div.withConfig({displayName:"StyledLogoLayer"})`
    width: 100%;
    display: flex;
    align-items: center;
    ${e=>!e.isEDGE&&"transition: transform 0.3s ease-in"};
    pointer-events: none;

    position: absolute;
    top: 0;

    ${e=>[r.u3.default,r.u3.b560,r.u3.b960,r.u3.b1920].map((t=>`\n\t\t\t\t\t@media (min-width: ${t}px) {\n\t\t\t\t\t\ttransform: translateY(\n\t\t\t\t\t\t\t${function(e,t,n){return n?`calc(${f(e,t,!1)} - ${g(t)/2}px + 1px)`:`-${g(t)}px`}(e.theme,t,e.isExpanded)}\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t`)).join("\n")}
`;B.displayName="StyledLogoLayer";const F=o.zo.div.withConfig({displayName:"StyledLeftItemsWrapper"})`
	display: flex;
	padding-${e=>(0,p.rz)(e.theme.direction)}: ${e=>e.theme.size.grid001};
	${e=>e.isHidden&&"visibility: hidden"};
`;F.displayName="StyledLeftItemsWrapper";const W=o.zo.div.withConfig({displayName:"StyledLogoWrapper"})`
    pointer-events: auto;
`;W.displayName="StyledLogoWrapper";const H=o.zo.div.withConfig({displayName:"StyledRightItemsWrapper"})`
    @media (max-width: ${r.u3.b560-1}px) {
        max-width: ${e=>e.theme.size.grid019};
    }
`,j=o.zo.div.withConfig({displayName:"StyledScreenReaderOnly"})`
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
`;function V(e){const{isExpanded:t,visibleRightItems:n,hiddenRightItems:a,menuButton:r,hasTransparentBackground:o,logo:h,claim:g,hasCustomContent:f}=e,y=Boolean(o),v=y?"image":"main",b=(0,p.eB)();return i.createElement(l.f,{theme:v},i.createElement(A,{hasCustomHeight:f,isExpanded:t,hasTransparentBackground:y,isEDGE:b,role:"banner"},i.createElement(s.Ar,null,i.createElement(M,null,i.createElement(F,{isHidden:f},r),i.createElement(H,null,i.createElement(c.W,{gutter:d.X.static300,wrap:m.Hq.never,shrinkContent:!0,verticalAlign:m.Qj.center,padding:{inlineEnd:d.X.grid001}},n)),i.createElement(j,null,a))),i.createElement(B,{isExpanded:t,isEDGE:b},i.createElement(u.D,{logo:i.createElement(W,null,h),claim:g}))))}j.displayName="StyledScreenReaderOnly"},95844:(e,t,n)=>{"use strict";n.d(t,{I:()=>s,m:()=>c});var i=n(73154),a=n(67294),r=n(78384),o=n(73522);const l=r.default.div.withConfig({displayName:"StyledReadingTimeBox"})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${e=>e.textAlign};
    flex: 1;
`;var s;l.displayName="StyledReadingTimeBox",function(e){e.center="center",e.right="right",e.left="left"}(s||(s={}));const c=e=>{const{textAlign:t=s.center,noWormyAnimation:n,readingTime:r}=e;return a.createElement(l,{textAlign:t},!n&&a.createElement(o.qc,null),r&&a.createElement(i.xv,{appearance:i.C2.copy150},e.readingTime))};c.displayName="ReadingTimeBox"},5649:(e,t,n)=>{"use strict";n.d(t,{x:()=>l});var i=n(67294),a=n(78384),r=n(73154);const o=a.default.span.withConfig({displayName:"StyledRichtextComponent"})`
    > *:first-child {
        margin-top: 0;
    }

    > *:last-child {
        margin-bottom: 0;
    }

    b,
    strong,
    a {
        font-weight: ${e=>e.theme.text.weight.bold};
    }

    sup,
    sub {
        font-size: ${e=>(e=>{const t=e.appearance&&e.theme.textAppearances[e.appearance];return t&&t.reducedFontSize})(e)};
    }

    hyphens: auto;
    word-break: break-word;

    &:lang(ko) {
        word-break: keep-all;
    }

    // defines typography inside richtext
    p + *,
    h3 + * {
        margin: ${e=>e.theme.size.dynamic0100} 0 0 0;
    }

    * + h3,
    ol + *,
    ul + * {
        margin: ${e=>e.theme.size.dynamic0150} 0 0 0;
    }
`;o.displayName="StyledRichtextComponent";const l=e=>{const{children:t,appearance:n,tag:a,textAlign:l,inheritColor:s,bold:c}=e,d=n||r.C2.copy0200;return i.createElement(r.xv,{tag:a,appearance:d,textAlign:l,color:s?r.d9.inherit:void 0,bold:c},i.createElement(o,{appearance:d},t))};l.displayName="Richtext"},14525:(e,t,n)=>{"use strict";n.d(t,{au:()=>w,qw:()=>C,kv:()=>x,V0:()=>k,D0:()=>E,B$:()=>b,Gg:()=>h});var i=n(67294),a=n(78384),r=n(46410),o=n(32667),l=n(49181),s=n(52745),c=n(92946),d=n(81697),m=n(59577);const u=a.css`
    color: ${e=>e.theme.interaction.recipe100.hover};
    outline: 0;
`,p=a.default.a.withConfig({displayName:"StyledTeaserElementLink"})`
	display: block;
	text-decoration: none;
	cursor: pointer;
	color: ${e=>e.theme.interaction.recipe100.default};
	${e=>e.isFocused&&u};
	:hover{
		${u}
	}
	:focus {
		${u}
		outline: solid 2px ${e=>e.theme.interaction.recipe400.hover};
	}
	${(0,d.re)("color")};
`,h=e=>{const{elementRef:t,href:n,disabled:a,onClick:r,onMouseOver:o,onMouseOut:l,title:s,target:c,rel:d,children:m,isFocused:u}=e;return i.createElement(p,{tabIndex:0,ref:t,href:n,onClick:!a&&r||void 0,onMouseOver:o,onMouseOut:l,target:c,rel:d,title:s,isFocused:u},m)},g=(0,d.$r)([2,0]),f=(0,d.$r)([4,0]),y=a.default.div.withConfig({displayName:"OverflowWrapper"})`
    overflow: hidden;
`;y.displayName="OverflowWrapper";const v=(0,a.default)(y).withConfig({displayName:"StyledImageLinkWrapper"})`
    @media (max-width: ${r.u3.b560}px) {
        display: none;
    }
`;v.displayName="StyledRealLinkWrapper";class b extends i.Component{render(){const{mediaElement:e,copyPadding:t,children:n}=this.props;return i.createElement(m.C8,null,i.createElement(o.W,{gutter:l.X.dynamic0100,wrap:s.Hq.always},i.createElement(y,{"aria-hidden":"true",tabIndex:-1},e),i.createElement(o.W,{gutter:l.X.dynamic0020,wrap:s.Hq.always,padding:t},n)))}}b.hoverGroupId="cms-teaser-element";const E=({mediaElement:e,children:t})=>i.createElement(m.C8,null,i.createElement(o.W,{gutter:l.X.static250,wrap:s.Hq.never,shrinkContent:!0,verticalAlign:s.Qj.center},i.createElement(v,{"aria-hidden":"true",tabIndex:-1},e),i.createElement(o.W,{gutter:l.X.dynamic0020,wrap:s.Hq.always},t)));E.displayName="SmallTeaserElement";const w=e=>i.createElement(b,Object.assign({copyPadding:{inlineEnd:f}},e));w.displayName="FirstLevelATeaserElement";const C=e=>i.createElement(b,Object.assign({copyPadding:{inlineStart:g}},e));C.displayName="FirstLevelBTeaserElement";const S=a.default.div.withConfig({displayName:"StyledSecondLevelTeaserItem"})`
    height: 100%;
    ${e=>!e.hasMedia&&`padding: 0 ${e.theme.size.grid001};\n\t\t\tborder-${(0,d.rz)(e.theme.direction)}: solid ${e.theme.separatorColor} 2px;`}
`,k=e=>{const t=!!e.mediaElement,n=e.mediaElement&&i.createElement(c.Po,{ratio:c.oM["16:9"]},e.mediaElement);return i.createElement(S,{hasMedia:t},i.createElement(b,Object.assign({},e,{mediaElement:n})))};k.displayName="SecondLevelTeaserElement";const L=a.default.div.withConfig({displayName:"StyledMagazineTeaserGridItem"})`
    height: 100%;
    ${e=>!e.hasMedia&&`padding: 0 ${e.theme.size.grid001};\n\t\t\tborder-${(0,d.rz)(e.theme.direction)}: solid ${e.theme.separatorColor} 2px;`}
`,x=e=>{const t=!!e.mediaElement,n=e.mediaElement&&i.createElement(c.Po,{ratio:c.oM["16:9"]},e.mediaElement);return i.createElement(L,{hasMedia:t},i.createElement(b,Object.assign({},e,{mediaElement:n})))};x.displayName="MagazineTeaserGridElement"},13856:(e,t,n)=>{"use strict";n.d(t,{Gs:()=>i,AX:()=>a,WY:()=>r,Nm:()=>o});const i=0,a=.5,r=1,o=.8},67678:(e,t,n)=>{"use strict";var i;n.d(t,{u:()=>i}),function(e){e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft"}(i||(i={}))},57898:(e,t,n)=>{"use strict";n.d(t,{uP:()=>U,wi:()=>X});var i=n(67294),a=n(73935),r=n(78384),o=n(81697),l=n(67678);const s=e=>e.nativeEvent.offsetX/e.currentTarget.clientWidth,c=(e,t)=>{const n=e.clientX;return{clientValue:n,offsetValue:n-t.left}},d=e=>e.clientX,m=e=>e.targetTouches[0].clientX,u=e=>e.clientWidth,p=(e,t)=>e-t,h=(e,t)=>e<t.left,g=(e,t)=>e>t.right,f=e=>{const t=e.currentTarget.getBoundingClientRect(),n=e.targetTouches[0].clientX;return{clientValue:n,offsetValue:n-t.left}},y=e=>(e.currentTarget.getBoundingClientRect().bottom-e.clientY)/e.currentTarget.clientHeight,v=(e,t)=>{const n=e.clientY;return{clientValue:n,offsetValue:t.bottom-n}},b=e=>e.clientY,E=e=>e.targetTouches[0].clientY,w=e=>e.clientHeight,C=(e,t)=>t-e,S=(e,t)=>e>t.bottom,k=(e,t)=>e<t.top,L=e=>{const t=e.currentTarget.getBoundingClientRect(),n=e.targetTouches[0].clientY;return{clientValue:n,offsetValue:t.bottom-n}},x=100,$="24px",_="2px",I=(e=!1,t=!1,n,i)=>{const a=n||12;return e?(i||16)/a:t?1/a:1},T=r.css`
    &:hover {
        --scrubber-btn-size: ${e=>I(e.scrubberIsBeingDragged,e.hideScrubberOnLostHover,e.scrubberBaseSize,e.scrubberDraggedSize)};
    }
`,N=r.default.div.withConfig({displayName:"StyledProgressBar"})`
    :not(:focus-within) {
        --scrubber-btn-size: ${e=>I(e.scrubberIsBeingDragged,e.hideScrubberOnLostHover,e.scrubberBaseSize,e.scrubberDraggedSize)};
    }
    position: relative;
    display: flex;
    align-items: center;
    background: transparent;
    cursor: pointer;
    ${e=>e.hideScrubberOnLostHover&&T};
    touch-action: pan-x;
`,P=(0,r.default)(N).withConfig({displayName:"StyledHorizontalProgressBar"})`
    width: 100%;
    height: ${$};
    justify-content: flex-start;
`;P.displayName="StyledHorizontalProgressBar";const O=(0,r.default)(N).withConfig({displayName:"StyledVerticalProgressBar"})`
    width: ${$};
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
`;O.displayName="StyledVerticalProgressBar";const R=r.default.div.withConfig({displayName:"StyledProgressList"})`
    flex: 1;
    background: ${e=>e.theme.interaction.recipe450.default};
    pointer-events: none;
`;R.displayName="StyledProgressList";const z=(0,r.default)(R).withConfig({displayName:"StyledHorizontalProgressList"})`
    height: ${_};
    display: flex;
    justify-content: flex-start;
`,D=(0,r.default)(R).withConfig({displayName:"StyledVerticalProgressList"})`
    width: ${_};
    display: flex;
    align-items: flex-end;
`,A=r.default.div.withConfig({displayName:"StyledPlayProgress"})`
    position: relative;
    z-index: ${2};
    ${e=>e.fillProgress&&`background: ${e.theme.interaction.recipe450.active};`}
`,M=(0,r.default)(A).attrs((({percentagePosition:e})=>({style:{width:`${e}%`}}))).withConfig({displayName:"StyledHorizontalPlayProgress"})`
    height: 100%;
`,B=(0,r.default)(A).attrs((({percentagePosition:e})=>({style:{height:`${e}%`}}))).withConfig({displayName:"StyledVerticalPlayProgress"})`
    width: 100%;
`,F=r.default.div.withConfig({displayName:"StyledHoverProgress"})`
    position: absolute;
    z-index: ${1};
    display: ${e=>e.visible?"block":"none"};
    pointer-events: none;
    ${e=>e.fillProgress&&`background: ${e.theme.interaction.recipe450.hover};`}
`,W=(0,r.default)(F).attrs((({percentagePosition:e})=>({style:{width:`${e}%`}}))).withConfig({displayName:"StyledHorizontalHoverProgress"})`
    height: ${_};
`,H=(0,r.default)(F).attrs((({percentagePosition:e})=>({style:{height:`${e}%`}}))).withConfig({displayName:"StyledVerticalHoverProgress"})`
    width: ${_};
`,j=(e,t=0)=>"vertical"===e?{bottom:`${t}%`}:{left:`${t}%`},V=r.default.button.attrs((({orientation:e,percentagePosition:t})=>({style:Object.assign({},j(e,t))}))).withConfig({displayName:"StyledScrubberButton"})`
    ${o.sp}
    position: absolute;
    z-index: ${3};
    width: ${e=>e.scrubberBaseSize||12}px;
    height: ${e=>e.scrubberBaseSize||12}px;
    border-radius: 50%;
    transform: ${e=>{return`translate3d(${"vertical"!==(t=e.orientation)?"-50%":"0"}, ${"vertical"===t?"50%":"0"}, 0)`;var t}}
        scale(var(--scrubber-btn-size), var(--scrubber-btn-size));
    transform-origin: center center;
    backface-visibility: hidden;
    ${(0,o.re)("transform")};
    ${e=>(0,o.G$)(e)}
    ${e=>e.fillProgress?`background: ${e.theme.interaction.recipe450.active};`:`background: ${e.theme.interaction.recipe450.default};`}
`,q=r.default.span.withConfig({displayName:"StyledValueText"})`
    ${(0,o.wG)()}
`;class G extends i.Component{constructor(e){super(e),this.handleMouseMove=e=>{const{calcOffsetSizeRatio:t}=this.props,n=100*t(e);this.state.scrubberIsBeingDragged||this.setState({hoverPercentagePosition:n})},this.registerMouseEventListeners=()=>{document.addEventListener("mousemove",this.handleScrubberMouseDrag,!0),document.addEventListener("mouseup",this.handleScrubberMouseUp,!0)},this.removeMouseEventListeners=()=>{document.removeEventListener("mousemove",this.handleScrubberMouseDrag,!0),document.removeEventListener("mouseup",this.handleScrubberMouseUp,!0)},this.registerTouchEventListeners=()=>{document.addEventListener("touchmove",this.handleScrubberTouchDrag,!0),document.addEventListener("touchend",this.handleScrubberTouchEnd,!0)},this.removeTouchEventListeners=()=>{document.removeEventListener("touchmove",this.handleScrubberTouchDrag,!0),document.removeEventListener("touchend",this.handleScrubberTouchEnd,!0)},this.handleProgressBarMouseDown=e=>{e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation();const t=a.findDOMNode(this.progressBarElement.current);if(t instanceof Element){const n=t.getBoundingClientRect(),{clientValue:i,offsetValue:a}=this.props.getProgressBarMouseDownEventData(e,n);this.handleScrubberDragStart(a,i,this.registerMouseEventListeners)}},this.handleProgressBarKeyDown=e=>{var t,n;const{key:i,shiftKey:a}=e;if(i===l.u.ArrowLeft||i===l.u.ArrowRight)return e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),null===(n=(t=this.props).onProgressBarKeyDown)||void 0===n?void 0:n.call(t,i,a)},this.calcValue=e=>{const{valueMin:t,valueMax:n}=this.props;return(n-t)*e},this.calcValueFromPercentage=e=>this.calcValue(e/100),this.getPlayProgressPosition=()=>{const{value:e,valueMax:t}=this.props,{playProgressPercentagePosition:n}=this.state,i=n||e/t*100;return i<=0?0:i>=100?100:i},this.getPlayProgressValue=()=>this.calcValue(this.getPlayProgressPosition()/100),this.handleMouseOut=()=>{this.setState({hoverPercentagePosition:void 0})},this.handleScrubberMouseDrag=e=>{e.preventDefault();const t=this.props.getClientValue(e);this.handleScrubberDrag(t)},this.handleScrubberMouseUp=e=>{e.preventDefault(),e.stopPropagation(),this.handleScrubberDragEnd(this.removeMouseEventListeners)},this.handleProgressBarTouchStart=e=>{e.preventDefault(),e.stopPropagation();const{offsetValue:t,clientValue:n}=this.props.getTouchData(e);this.handleScrubberDragStart(t,n,this.registerTouchEventListeners)},this.handleScrubberTouchDrag=e=>{e.preventDefault(),e.stopPropagation();const t=this.props.getClientTouchValue(e);this.handleScrubberDrag(t)},this.handleScrubberTouchEnd=e=>{e.preventDefault(),e.stopPropagation(),this.handleScrubberDragEnd(this.removeTouchEventListeners)},this.handleScrubberDragStart=(e,t,n)=>{const i=a.findDOMNode(this.progressBarElement.current);if(i instanceof HTMLDivElement&&!this.state.scrubberIsBeingDragged){const a=e/this.props.getProgressBarSize(i)*100;this.setState({scrubberIsBeingDragged:!0,playProgressPercentagePosition:a}),this.capturedClientValue=t,n(),this.props.onDragStart&&this.props.onDragStart({value:this.calcValueFromPercentage(a)}),this.props.onDragChange&&this.props.onDragChange({value:this.calcValueFromPercentage(a)})}},this.handleScrubberDrag=e=>{const t=a.findDOMNode(this.progressBarElement.current);if(t instanceof HTMLDivElement&&this.capturedClientValue&&this.state.scrubberIsBeingDragged){const n=t.getBoundingClientRect(),i=this.getPlayProgressPosition();if(this.props.isBelowMin(e,n)){if(i>0)return this.setState({playProgressPercentagePosition:0}),void(this.props.onDragChange&&this.props.onDragChange({value:this.props.valueMin}));if(0===i)return}if(this.props.isAboveMax(e,n)){if(i<x)return this.setState({playProgressPercentagePosition:x}),void(this.props.onDragChange&&this.props.onDragChange({value:this.props.valueMax}));if(i===x)return}const r=this.props.getProgressBarSize(a.findDOMNode(this.progressBarElement.current)),o=i+this.props.calcDelta(e,this.capturedClientValue)/r*100;o>=0&&o<=x&&i!==o&&(this.setState({playProgressPercentagePosition:o}),this.props.onDragChange&&this.props.onDragChange({value:this.calcValue(o/100)})),this.capturedClientValue=e}},this.handleScrubberDragEnd=e=>{this.state.scrubberIsBeingDragged&&(this.setState({scrubberIsBeingDragged:!1,playProgressPercentagePosition:void 0}),this.capturedClientValue=void 0,this.props.onDragEnd&&this.props.onDragEnd({value:this.getPlayProgressValue()}),e())},this.state={playProgressPercentagePosition:void 0,hoverPercentagePosition:void 0,scrubberIsBeingDragged:!1},this.progressBarElement=i.createRef()}componentWillUnmount(){this.removeMouseEventListeners(),this.removeTouchEventListeners()}render(){const{hoverPercentagePosition:e=0,scrubberIsBeingDragged:t=!1}=this.state,n=this.getPlayProgressPosition();return this.props.children(n,e,t,this.progressBarElement,this.handleMouseMove,this.handleMouseOut,this.handleProgressBarMouseDown,this.handleProgressBarTouchStart,this.handleProgressBarKeyDown)}}class U extends i.PureComponent{constructor(e){super(e),this.state={isProgressBarFocused:!1}}onProgressBarFocus(){var e,t;return this.setState({isProgressBarFocused:!0}),null===(t=(e=this.props).onFocus)||void 0===t?void 0:t.call(e)}onProgressBarBlur(){var e,t;return this.setState({isProgressBarFocused:!1}),null===(t=(e=this.props).onBlur)||void 0===t?void 0:t.call(e)}render(){const{disableHoverEffect:e=!1,fillProgress:t=!0,hideScrubberOnLostHover:n,horizontalProgressBarValueText:a,progressBarAriaLabel:r,scrubberBaseSize:o,scrubberDisabled:l,scrubberDraggedSize:y,value:v,valueMax:b,valueMin:E,onDragChange:w,onDragEnd:C,onDragStart:S,onProgressBarKeyDown:k}=this.props;return i.createElement(G,{value:v,valueMin:E,valueMax:b,onDragChange:w,onDragEnd:C,onDragStart:S,calcOffsetSizeRatio:s,getProgressBarMouseDownEventData:c,getClientValue:d,getClientTouchValue:m,getProgressBarSize:u,isBelowMin:h,isAboveMax:g,getTouchData:f,calcDelta:p,onProgressBarKeyDown:k},((s,c,d,m,u,p,h,g,f)=>i.createElement(P,{hideScrubberOnLostHover:n,ref:m,scrubberIsBeingDragged:d,scrubberBaseSize:o,scrubberDraggedSize:y,onMouseMove:u,onMouseOut:p,onMouseDown:h,onTouchStart:g,onKeyDown:f},i.createElement(z,null,i.createElement(M,{fillProgress:t,percentagePosition:s}),!e&&i.createElement(W,{fillProgress:t,visible:Boolean(c&&c>s),percentagePosition:c})),i.createElement(V,{orientation:"horizontal",role:"slider","aria-label":r,"aria-valuemin":E,"aria-valuemax":b,"aria-valuenow":v,"aria-valuetext":a,fillProgress:t,scrubberBaseSize:o,percentagePosition:s,isBeingDragged:d,disabled:l,onFocus:()=>this.onProgressBarFocus(),onBlur:()=>this.onProgressBarBlur()}),this.state.isProgressBarFocused&&i.createElement(q,{"aria-live":"polite"},a))))}}class X extends i.PureComponent{render(){const{value:e,valueMin:t,valueMax:n,disableHoverEffect:a=!1,onDragChange:r,onDragEnd:o,onDragStart:l,hideScrubberOnLostHover:s,progressBarAriaLabel:c,onVolumeBarKeyDown:d,scrubberDisabled:m}=this.props;return i.createElement(G,{value:e,valueMin:t,valueMax:n,onDragChange:r,onDragEnd:o,onDragStart:l,calcOffsetSizeRatio:y,getProgressBarMouseDownEventData:v,getClientValue:b,getClientTouchValue:E,getProgressBarSize:w,isBelowMin:S,isAboveMax:k,getTouchData:L,calcDelta:C},((e,t,n,r,o,l,u,p)=>i.createElement(O,{scrubberIsBeingDragged:n,ref:r,onMouseMove:o,onMouseOut:l,onMouseDown:u,onTouchStart:p,hideScrubberOnLostHover:s,"aria-label":c,onKeyDown:d},i.createElement(D,null,i.createElement(B,{percentagePosition:e})),i.createElement(V,{disabled:m,orientation:"vertical",percentagePosition:e,isBeingDragged:n}),!a&&i.createElement(H,{visible:Boolean(t&&t>e),percentagePosition:t}))))}}},62985:(e,t,n)=>{"use strict";n.d(t,{KE:()=>r,p_:()=>o,Kh:()=>l,rM:()=>s,Qg:()=>c,oQ:()=>d,eB:()=>m,ZT:()=>u,OR:()=>p,KG:()=>h,gh:()=>g});var i=n(92946),a=n(13856);function r(){return document.fullscreenEnabled?document.fullscreenEnabled:document.mozFullScreenEnabled?document.mozFullScreenEnabled:document.webkitFullscreenEnabled?document.webkitFullscreenEnabled:!!document.msFullscreenEnabled&&document.msFullscreenEnabled}function o(){return document.fullscreenEnabled?"fullscreenchange":document.mozFullScreenEnabled?"mozfullscreenchange":document.webkitFullscreenEnabled?"webkitfullscreenchange":document.msFullscreenEnabled?"msfullscreenchange":"fullscreenchange"}function l(){return void 0!==document.fullscreenElement?"fullscreenElement":void 0!==document.mozFullScreenElement?"mozFullScreenElement":void 0!==document.webkitFullscreenElement?"webkitFullscreenElement":void 0!==document.msFullscreenElement?"msFullscreenElement":"fullscreenElement"}function s(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function c(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}const d=e=>e<0?0:e>1?1:e,m=e=>e?e-.1:0,u=()=>{},p=e=>e?a.Gs:a.WY;function h(e,t){return e?"matchParentHeight":t?"matchParentHeight"===t||"matchParentWidth"===t?t:(0,i.am)(t):void 0}function g(e="dark"){return"dark"===e?"main":"image"}},92195:(e,t,n)=>{"use strict";n.d(t,{Rq:()=>ue,Fb:()=>O,Ws:()=>P});var i=n(83028),a=n(73154),r=n(67294),o=n(64317),l=n(78384),s=n(81697),c=n(696),d=n(13856),m=n(67678),u=n(57898),p=n(24103),h=n(51757),g=n(29204);const f=l.css`
    svg {
        path {
            fill: ${e=>e.theme.interaction.recipe450.default};
        }
        @media (hover: hover) {
            &:hover {
                path {
                    fill: ${e=>e.theme.interaction.recipe450.hover};
                }
            }
        }
    }
`,y="80px",v="24px",b=l.default.button.withConfig({displayName:"StyledSmallControlButton"})`
    ${s.sp}
    ${e=>(0,s.G$)(e)}
	position: relative;

    width: ${v};
    height: ${v};
    cursor: pointer;
    ${f}
`;b.displayName="StyledSmallControlButton";const E=l.default.div.withConfig({displayName:"StyledProgressBarWrapper"})`
	width: ${v};
	height: var(--styled-sound-controls-height);
	opacity: var(--styled-sound-controls-opacity);
	transition: var(--styled-sound-controls-transition);
	position: relative;
	margin-bottom: ${e=>e.theme.size.static200}

	&::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 5px;
		height: calc(100% + 5px);
		width: 100%;
		background: rgba(0, 0, 0, 0.55);
	}
`,w=l.default.div.withConfig({displayName:"StyledSoundControlsWrapper"})`
    height: 22px;
    display: flex;
    align-items: flex-end;
`,C=l.default.div.withConfig({displayName:"StyledSoundControls"})`
    align-self: flex-end;
    --styled-sound-controls-opacity: ${e=>e.hasPermanentFocus?1:0};
    --styled-sound-controls-height: ${e=>e.hasPermanentFocus?y:0};
    --styled-sound-controls-transition: ${e=>e.hasPermanentFocus?(0,s.hl)({name:"height"}):(0,s.hl)({name:"height"},{name:"opacity",delay:"0.3s"})};
    @media (hover: hover) {
        &:hover,
        &:focus-within {
            --styled-sound-controls-opacity: 1;
            --styled-sound-controls-height: ${y};
            --styled-sound-controls-transition: ${(0,s.hl)({name:"height"})};
        }
    }
`,S=l.default.div.withConfig({displayName:"StyledFlexReverseOrderWrapper"})`
    display: flex;
    flex-direction: column-reverse;
`,k=e=>r.createElement(b,{"aria-label":e.title,title:e.title,onClick:t=>{t.preventDefault(),t.stopPropagation(),e.onClick&&e.onClick()},onTouchEnd:t=>{t.preventDefault(),t.stopPropagation(),e.onTouch&&e.onTouch()},disabled:e.disabled},e.children),L=e=>r.createElement(k,{onClick:e.onClick,onTouch:e.onTouch,title:e.title,disabled:e.disabled},r.createElement(p.F,{variant:"default",ariaHidden:!0})),x=e=>r.createElement(k,{onClick:e.onClick,onTouch:e.onTouch,title:e.title,disabled:e.disabled},r.createElement(h.w,{variant:"default",ariaHidden:!0})),$=e=>r.createElement(k,{onClick:e.onClick,onTouch:e.onTouch,title:e.title,disabled:e.disabled},r.createElement(g.f,{variant:"default",ariaHidden:!0})),_=()=>{};class I extends r.PureComponent{constructor(e){super(e),this.capturedVolume=d.Nm,this.handleDragChange=e=>{const{onVolumeChange:t=_}=this.props;t(e.value)},this.handleMaximumSoundButtonClick=()=>{const{value:e,onVolumeChange:t=_}=this.props;this.capturedVolume=(0,s.gn)()?d.WY:e,t(0),this.resetClearingFocus()},this.handleMaximumSoundButtonTouch=()=>{const{hasPermanentFocus:e}=this.state;(0,s.gn)()||e?this.handleMaximumSoundButtonClick():this.setPermanentFocus()},this.handleMinimumSoundButtonClick=()=>{const{onVolumeChange:e=_}=this.props;e((0,s.gn)()?d.WY:this.capturedVolume||0),this.capturedVolume=void 0,this.resetClearingFocus()},this.handleMinimumSoundButtonTouch=()=>{const{hasPermanentFocus:e}=this.state;(0,s.gn)()||e?this.handleMinimumSoundButtonClick():this.setPermanentFocus()},this.handleDragStart=e=>{window.clearTimeout(this.clearFocusTimeout),this.capturedVolume=e.value,this.setState({hasPermanentFocus:!1});const{onDragStart:t=_}=this.props;t()},this.handleDragEnd=()=>{this.resetClearingFocus();const{onDragEnd:e=_}=this.props;e()},this.setPermanentFocus=()=>{this.setState({hasPermanentFocus:!1}),this.resetClearingFocus()},this.resetClearingFocus=()=>{window.clearTimeout(this.clearFocusTimeout),this.clearFocusTimeout=window.setTimeout((()=>{this.setState({hasPermanentFocus:!1})}),2e3);const{onFocusReset:e=_}=this.props;e()},this.handleSoundBarKeyDown=e=>{var t,n;const{key:i}=e;if(i===m.u.ArrowUp||i===m.u.ArrowDown)return e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),null===(n=(t=this.props).onVolumeBarKeyDown)||void 0===n?void 0:n.call(t,i)},this.state={hasPermanentFocus:!1}}componentWillUnmount(){window.clearTimeout(this.clearFocusTimeout)}render(){const{disableButtons:e,value:t,title:n,soundProgressBarAriaLabel:i}=this.props,{hasPermanentFocus:a}=this.state,o=t>d.AX,l=t>0&&t<=d.AX,c=0===t,m=(0,s._f)()&&!(0,s.gn)();return r.createElement(w,null,r.createElement(C,{onClick:e=>e.stopPropagation(),onTouchEnd:e=>e.stopPropagation(),hasPermanentFocus:a,onFocus:this.setPermanentFocus,onBlur:this.resetClearingFocus},r.createElement(S,null,o&&r.createElement(L,{title:n,onClick:this.handleMaximumSoundButtonClick,onTouch:this.handleMaximumSoundButtonTouch,disabled:e}),l&&r.createElement($,{title:n,onClick:this.handleMaximumSoundButtonClick,onTouch:this.handleMaximumSoundButtonTouch,disabled:e}),c&&r.createElement(x,{title:n,onClick:this.handleMinimumSoundButtonClick,onTouch:this.handleMinimumSoundButtonTouch,disabled:e}),r.createElement(E,{hasPermanentFocus:a},m&&r.createElement(u.wi,{value:t,valueMin:d.Gs,valueMax:d.WY,progressBarAriaLabel:i,onDragChange:this.handleDragChange,onDragStart:this.handleDragStart,onDragEnd:this.handleDragEnd,disableHoverEffect:!0,onVolumeBarKeyDown:this.handleSoundBarKeyDown,scrubberDisabled:e})))))}}const T=e=>{const t=Math.floor(e/60),n=Math.round(e%60);return`${(e=>e.toFixed(0))(t)}:${(e=>e<10?`0${e.toFixed(0)}`:e.toFixed(0))(n)}`},N=e=>{const{timeInSeconds:t}=e,n=void 0===t?"--:--":T(t);return r.createElement(a.xv,{appearance:a.C2.copy100},n)};var P,O,R=n(73935),z=n(94001),D=n(76326),A=n(18276),M=n(26608),B=n(72600);!function(e){e[e.NOT_STARTED=0]="NOT_STARTED",e[e.PLAYING=1]="PLAYING",e[e.PAUSED=2]="PAUSED",e[e.ENDED=3]="ENDED"}(P||(P={})),function(e){e[e.NORMAL=0]="NORMAL",e[e.FULLSCREEN=1]="FULLSCREEN"}(O||(O={}));const F=l.css`
    svg {
        path {
            fill: ${e=>e.theme.interaction.recipe450.default};
        }
        @media (hover: hover) {
            &:hover {
                path {
                    fill: ${e=>e.theme.interaction.recipe450.hover};
                }
            }
        }
    }
`,W=l.default.button.withConfig({displayName:"StyledSmallControlButton"})`
    ${s.sp}
    ${e=>(0,s.G$)(e)}

	display: block;
    width: ${e=>e.theme.size.static350};
    height: ${e=>e.theme.size.static350};
    cursor: pointer;
    ${F}
    position: relative;
`;W.displayName="StyledSmallControlButton";const H=l.default.a.withConfig({displayName:"StyledSmallControlLink"})`
    ${e=>(0,s.G$)(e)}

    display: block;
    width: ${e=>e.theme.size.static350};
    height: ${e=>e.theme.size.static350};
    cursor: pointer;
    ${F}
    position: relative;
`;H.displayName="StyledSmallControlLink";const j=l.default.button.withConfig({displayName:"StyledBigControlButton"})`
    ${s.sp}
    ${e=>(0,s.G$)(e)}
	background: rgba(0, 0, 0, 0.55);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${e=>e.theme.size.static450};
    height: ${e=>e.theme.size.static450};
    z-index: 1;
    cursor: pointer;
    ${F}
`;j.displayName="StyledBigControlButton";const V=e=>r.createElement(j,{"data-cy":"videoBigPlayButton",title:e.title,"aria-label":e.title},r.createElement(z.s,{variant:"default"}));class q extends r.PureComponent{constructor(){super(...arguments),this.linkRef=r.createRef(),this.handleButtonClick=e=>{e.preventDefault(),e.stopPropagation(),this.props.onClick&&this.props.onClick()},this.handleMouseClick=e=>{e.stopPropagation()},this.handleKeyboardClick=e=>{const t=R.findDOMNode(this.linkRef.current);t instanceof HTMLAnchorElement&&32===e.keyCode&&(e.preventDefault(),e.stopPropagation(),t.click())},this.handleTouchStart=e=>{if(e.touches.length>0){const t=e.touches.item(0);this.touchY=t.pageY}},this.handleTouchEnd=e=>{if(this.props.onClick&&this.touchY&&e.changedTouches.length>0){const t=e.changedTouches.item(0);Math.abs(t.pageY-this.touchY)<2&&(e.preventDefault(),e.stopPropagation(),this.props.onClick()),this.touchY=void 0}}}render(){const{disabled:e,title:t,dataCy:n,linkReference:i,download:a}=this.props,o=e?-1:0;return i?r.createElement(H,{title:t,onClick:this.handleMouseClick,onKeyDown:this.handleKeyboardClick,"aria-label":t,tabIndex:o,"data-cy":n,href:i,download:a,ref:this.linkRef},this.props.children):r.createElement(W,{title:t,"aria-label":t,onClick:this.handleButtonClick,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,"data-cy":n,disabled:e},this.props.children)}}const G=e=>r.createElement(q,{onClick:e.onClick,dataCy:"videoSmallPlayButton",title:e.title,disabled:e.disabled},r.createElement(z.s,{variant:"default",ariaHidden:!0})),U=e=>r.createElement(q,{onClick:e.onClick,dataCy:"videoPauseButton",title:e.title,disabled:e.disabled},r.createElement(D.d,{variant:"default",ariaHidden:!0})),X=e=>r.createElement(q,{title:e.title,onClick:e.onClick,dataCy:"videoEnableFullScreenButton",disabled:e.disabled},r.createElement(A.X,{variant:"default",ariaHidden:!0})),Y=e=>r.createElement(q,{title:e.title,onClick:e.onClick,dataCy:"videoDisableFullScreenButton",disabled:e.disabled},r.createElement(M.F,{variant:"default",ariaHidden:!0}));function K(e){const{disabled:t,videoState:n,onPauseClick:i,onPlayClick:a,pauseButtonTitle:o,playButtonTitle:l}=e;return n===P.PLAYING?r.createElement(U,{onClick:i,title:o,disabled:t}):r.createElement(G,{onClick:a,title:l,disabled:t})}function Q(e){return e.isInFullScreen?r.createElement(Y,{title:e.disableFullScreenButtonTitle,onClick:e.onToggleFullscreen,disabled:e.disabled}):r.createElement(X,{title:e.enableFullScreenButtonTitle,onClick:e.onToggleFullscreen,disabled:e.disabled})}const Z=e=>r.createElement(q,{title:e.title,disabled:e.disabled,"data-cy":"videoTranscriptButton",download:!0,linkReference:e.linkReference},r.createElement(B.Z,{variant:"default"}));var J=n(62985);const ee=l.default.div.withConfig({displayName:"StyledOverlayBackground"})`
    ${e=>e.isTimelineVisible&&"\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 60px;\n\t\tbackground: rgba(0, 0, 0, 0.55);\n\t\tpointer-events: none;\n\t"};
`;ee.displayName="StyledOverlayBackground";const te=l.default.div.withConfig({displayName:"StyledToolbar"})`
    position: absolute;
    bottom: 0;
    direction: ltr;

    width: 100%;
    height: ${60}px;

    display: flex;
    align-items: center;

    box-sizing: border-box;
    padding: 0 ${e=>e.theme.size.static350};

    ${e=>!e.isTimelineVisible&&`\n\t\twidth: auto;\n\t\theight: ${e.theme.size.static450};\n\t\tbottom: 9px;\n\t\tleft: 9px;\n\t\tbackground: rgba(0, 0, 0, 0.55);\n\t\tborder-radius: 500px;\n\t\tpadding: 0 ${e.theme.size.static150};\n\t`};
`;te.displayName="StyledToolbar";const ne=l.default.div.withConfig({displayName:"StyledToolbarItem"})`
    :not(:last-child) {
        margin-right: ${e=>e.theme.size.static250};
    }
`;ne.displayName="StyledToolbarItem";const ie=l.default.span.withConfig({displayName:"StyledVideoDisclaimerReferences"})`
	position: absolute;
	${e=>(0,s.rz)(e.theme.direction)}: 0;
	bottom: ${e=>e.isToolbarVisible?`calc((60px + ${e.theme.size.static350}))`:e.theme.size.static250};
	transition: ${(0,s.hl)({name:"bottom"})};
	margin-${e=>(0,s.rz)(e.theme.direction)}: ${e=>e.theme.size.static350};
	display: flex;
	justify-content: flex-start;
	min-width: ${60}px;
`;ie.displayName="StyledVideoDisclaimerReferences";const ae="fadeClassName",re=l.default.div.withConfig({displayName:"StyledOverlayContainer"})`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;re.displayName="StyledOverlayContainer";const oe=(0,l.default)(re).withConfig({displayName:"StyledOverlayWithToolbar"})`
    opacity: 0;
    transition: ${(0,s.hl)({name:"opacity"})};

    &.${ae}-enter {
        opacity: 0;
    }

    &.${ae}-enter-done {
        opacity: 1;
    }

    &.${ae}-exit {
        opacity: 0;
    }

    &.${ae}-exit-done {
        opacity: 0;
    }
`;oe.displayName="StyledOverlayWithToolbar";const le=(0,l.default)(re).withConfig({displayName:"StyledOverlayContainerCentered"})`
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
`;le.displayName="StyledOverlayContainerCentered";const se=l.css`
    display: flex;
    justify-content: center;
    align-items: center;

    // NOTE: fixes desktop Safari fullscreen
    width: 100%;
    height: 100%;

    video {
        width: 100%;
    }
`,ce=l.default.div.withConfig({displayName:"StyledVideoPlayer"})`
    overflow: hidden;
    background: ${e=>e.theme.video.background};
    ${e=>"matchParentHeight"===e.aspectRatio&&"height: 100%"};
    ${e=>"matchParentWidth"===e.aspectRatio&&"width: 100%"};

    &:fullscreen {
        ${se}
    }

    :-webkit-full-screen {
        ${se}
    }

    :-moz-full-screen {
        ${se}
    }

    :-ms-fullscreen {
        ${se}
    }
`;ce.displayName="StyledVideoPlayer";const de=l.default.div.withConfig({displayName:"StyledVideoPlayerInner"})`
    position: ${e=>e.isInFullScreen&&e.videoElementHeight&&e.videoElementHeight>window.innerHeight?"":"relative"};
    flex: 1;
    ${e=>"matchParentHeight"===e.aspectRatio&&"height: 100%"};
    ${e=>"matchParentWidth"===e.aspectRatio&&"width: 100%"};
    video {
        display: block;
        max-height: 100%;
        max-width: 100%;
        pointer-events: none;

        &::cue {
            font-size: ${e=>e.theme.textAppearances.copy250.fontSize};
            line-height: ${e=>e.theme.textAppearances.copy250.lineHeight};
            color: ${e=>e.theme.text.color.primary};
            opacity: 1;
            background-color: ${e=>e.theme.text.background.primary};
        }
    }
`;de.displayName="StyledVideoPlayerInner";const me=l.default.div.withConfig({displayName:"StyledAspectRatioContainer"})`
    ${e=>"number"==typeof e.aspectRatio&&l.css`
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: ${100*e.aspectRatio}%;
        `}
    ${e=>"matchParentHeight"===e.aspectRatio&&"height: 100%"};
    ${e=>"matchParentWidth"===e.aspectRatio&&"width: 100%"};
    ${e=>e.aspectRatio&&l.css`
            > * {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        `}
`;me.displayName="StyledAspectRatioContainer";class ue extends r.PureComponent{constructor(e){super(e),this.nextHandleOverlayClickedDisabled=!1,this.startedByIO=!1,this.fireStateChanged=()=>{const{onStateChanged:e}=this.props;e&&e(Object.assign({},this.state),this.startedByIO)},this.handleVideoPlay=()=>{const{videoState:e}=this.state;(e===P.NOT_STARTED||e===P.PAUSED||e===P.ENDED)&&this.setState({videoState:P.PLAYING})},this.handleVideoPause=()=>{const{videoState:e}=this.state;e===P.PLAYING&&this.setState({videoState:P.PAUSED})},this.handleVideoEnded=()=>{const{videoState:e}=this.state;e!==P.PLAYING&&e!==P.PAUSED||this.setState({videoState:P.ENDED})},this.handleVideoTimeUpdateEvent=()=>{const e=this.videoPlayer.current;if(this.isVideoElement(e)){const{duration:t,currentTime:n=0}=e;this.setState({duration:t,currentTime:n})}},this.handleVideoDurationChange=()=>{const e=this.videoPlayer.current;if(this.isVideoElement(e)){const{duration:t}=e;this.setState({duration:t})}},this.handleTimelineDragStarted=()=>{this.setState({timelineDragInProgress:!0}),this.videoPlayer&&(this.videoStateBeforeDrag=this.state.videoState,this.pause())},this.handleTimelineDrag=e=>{const t=this.videoPlayer.current;this.isVideoElement(t)&&(t.currentTime=e.value)},this.handleTimelineDragEnded=()=>{this.setState({timelineDragInProgress:!1}),this.nextHandleOverlayClickedDisabled=!0;const e=this.videoPlayer.current;e&&this.isVideoElement(e)&&e.currentTime<e.duration&&this.videoStateBeforeDrag===P.PLAYING&&this.play(),this.videoStateBeforeDrag=void 0},this.handleVolumeDragStarted=()=>{this.setState({volumeDragInProgress:!0})},this.handleVolumeDragEnded=()=>{window.clearTimeout(this.overlayTimeoutId),this.nextHandleOverlayClickedDisabled=!0,this.setState({volumeDragInProgress:!1}),this.resetOverlayTimeout()},this.handleOverlayClicked=e=>{e.preventDefault(),e.stopPropagation();const{timelineDragInProgress:t,volumeDragInProgress:n}=this.state;if(!t&&!n&&!this.nextHandleOverlayClickedDisabled&&this.videoPlayer)if(this.state.videoState===P.PLAYING){const{onPauseClick:e=J.ZT}=this.props;this.pause(),e()}else{const{onPlayClick:e=J.ZT}=this.props;this.play(),e()}this.nextHandleOverlayClickedDisabled=!1},this.invertOverlayVisibility=()=>{window.clearTimeout(this.overlayTimeoutId);const e=!this.state.showOverlay;this.registeredTouches=void 0,this.setState({showOverlay:e}),e&&this.resetOverlayTimeout()},this.resetOverlayTimeout=()=>{window.clearTimeout(this.overlayTimeoutId),this.overlayTimeoutId=window.setTimeout(this.hideOverlay,2e3)},this.hideOverlay=()=>{const{volumeDragInProgress:e,timelineDragInProgress:t}=this.state;e||t?this.resetOverlayTimeout():this.setState({showOverlay:!1})},this.handleMouseMove=()=>{const{videoState:e}=this.state;(e===P.PLAYING||e===P.NOT_STARTED&&!this.props.showTimeline)&&(window.clearTimeout(this.overlayTimeoutId),this.setState({showOverlay:!0}),this.resetOverlayTimeout())},this.handleTapStart=e=>{this.registeredTouches=Object.assign({},e)},this.handleTapEnd=e=>{const t=this.registeredTouches?this.registeredTouches.changedTouches.item(0):null,n=e.changedTouches.item(0);t&&Math.abs(t.clientX-n.clientX)<2&&Math.abs(t.clientY-n.clientY)<2&&!(e.target instanceof HTMLButtonElement)&&(e.preventDefault(),e.stopPropagation(),this.invertOverlayVisibility())},this.handleFinalStateOverlayTouchStart=e=>{if(e.touches.length>0){const t=e.touches.item(0);this.overlayTouchY=t.pageY}},this.handleFinalStateOverlayTouchEnd=e=>{if(!this.state.timelineDragInProgress&&this.overlayTouchY&&e.changedTouches.length>0){const t=e.changedTouches.item(0);Math.abs(t.pageY-this.overlayTouchY)<2&&(e.preventDefault(),e.stopPropagation(),this.handlePlayBtnClick())}this.overlayTouchY=void 0},this.fullscreenEventListener=()=>{if(document[(0,J.Kh)()]===this.selfRef.current){const{onFullScreenEntered:e=J.ZT}=this.props;this.setState({displayMode:O.FULLSCREEN}),e()}else{const{onFullScreenExited:e=J.ZT}=this.props;this.setState({displayMode:O.NORMAL}),e()}},this.enterFullscreenIOSEventListener=()=>{const{onFullScreenEntered:e=J.ZT}=this.props;this.setState({displayMode:O.FULLSCREEN}),e()},this.exitFullscreenIOSEventListener=()=>{const{onFullScreenExited:e=J.ZT}=this.props;this.setState({displayMode:O.NORMAL}),e()},this.registerFullScreenEventListener=()=>{const e=this.selfRef.current,{showFullscreenBtn:t}=this.props;if(e instanceof HTMLDivElement&&t){const t=(0,J.p_)();if("mozfullscreenchange"===t)document.addEventListener(t,this.fullscreenEventListener);else if((0,s.gn)()&&this.videoPlayer.current){const e=this.videoPlayer.current;e&&(e.addEventListener("webkitbeginfullscreen",this.enterFullscreenIOSEventListener),e.addEventListener("webkitendfullscreen",this.exitFullscreenIOSEventListener))}else e.addEventListener(t,this.fullscreenEventListener)}},this.removeFullScreenEventListener=()=>{const e=this.selfRef.current;if(e instanceof HTMLDivElement){const t=(0,J.p_)();"mozfullscreenchange"===t?document.removeEventListener(t,this.fullscreenEventListener):e.removeEventListener(t,this.fullscreenEventListener)}},this.handleVolumeChange=()=>{const e=this.videoPlayer.current;if(this.isVideoElement(e)){const t=e.muted;this.setState({isMuted:(0,s.gn)()?t:0===e.volume,volume:(0,s.gn)()?(0,J.OR)(t):e.volume}),this.resetOverlayTimeout()}},this.retainFocusOnVideoElement=()=>{this.selfRef.current.focus()},this.handlePlayBtnClick=()=>{const{onPlayClick:e=J.ZT}=this.props;this.play(),e(),this.resetOverlayTimeout(),this.retainFocusOnVideoElement()},this.handlePauseBtnClick=()=>{const{onPauseClick:e=J.ZT}=this.props;this.pause(),e(),this.resetOverlayTimeout()},this.getVideoElementHeight=()=>{const e=this.videoPlayer.current;return e&&this.isVideoElement(e)?e.getBoundingClientRect().height:void 0},this.isOverlayVisible=()=>{var e;const{videoState:t,timelineDragInProgress:n,volumeDragInProgress:i,showOverlay:a,displayMode:r}=this.state,o=null===(e=this.overlayRef.current)||void 0===e?void 0:e.contains(document.activeElement);return n||i||a||o||t===P.PAUSED||r===O.FULLSCREEN&&t===P.ENDED},this.isToolbarVisible=()=>{const{videoState:e,displayMode:t}=this.state;return this.isOverlayVisible()&&(e!==P.ENDED||t===O.FULLSCREEN)},this.shouldDisplayDisclaimers=()=>{const{displayMode:e}=this.state,{disclaimer:t={}}=this.props,{staticReferences:n,interactiveReferences:i,openableReferences:a}=t;return e===O.NORMAL&&(n&&0!==n.length||i||a)},this.handleProgressBarKeyDown=e=>{const t=this.videoPlayer.current;t&&this.isVideoElement(t)&&(t.currentTime+=e===m.u.ArrowRight?1:-1)},this.handleVolumeBarKeyDown=e=>{const t=this.videoPlayer.current;if(t&&this.isVideoElement(t)){let n;n=t.muted&&e===m.u.ArrowUp?d.Nm:t.volume+=e===m.u.ArrowUp?.1:-.1,this.changeVolume(n)}},this.isVideoElement=e=>e instanceof HTMLVideoElement,this.load=()=>{const e=this.videoPlayer.current;this.isVideoElement(e)&&e.load()},this.play=()=>{const e=this.videoPlayer.current;this.isVideoElement(e)&&(this.startedByIO=!1,e.play())},this.playByIO=()=>{const e=this.videoPlayer.current;this.isVideoElement(e)&&(this.startedByIO=!0,e.play())},this.pause=()=>{const e=this.videoPlayer.current;this.isVideoElement(e)&&e.pause()},this.setTime=e=>{const t=this.videoPlayer.current;if(this.isVideoElement(t)){const n=(t.duration||.01)-.01;t.currentTime=Math.max(0,Math.min(n,e))}},this.getTime=()=>{const e=this.videoPlayer.current;if(this.isVideoElement(e))return e.currentTime},this.toggleFullScreen=()=>{return e=this,t=void 0,i=function*(){const e=this.videoPlayer.current,t=this.selfRef.current;if((0,s.gn)()&&this.isVideoElement(e))e.webkitEnterFullscreen();else if(t instanceof HTMLDivElement&&(0,J.KE)()){const{displayMode:e}=this.state;e===O.FULLSCREEN?(0,J.Qg)():(0,J.rM)(t)}this.resetOverlayTimeout()},new((n=void 0)||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}));var e,t,n,i},this.changeVolume=e=>{const t=this.videoPlayer.current;if(this.isVideoElement(t)){const n=(0,J.oQ)(e);t.muted=0===n,t.volume=n,n!==this.state.volume&&this.handleVolumeChange()}},this.state={videoState:P.NOT_STARTED,currentTime:0,duration:void 0,timelineDragInProgress:!1,volumeDragInProgress:!1,showOverlay:!1,displayMode:O.NORMAL,isMuted:!0},this.videoPlayer=r.createRef(),this.selfRef=r.createRef(),this.overlayRef=r.createRef()}static getDerivedStateFromProps(e,t){return t.videoState!==P.NOT_STARTED||e.startUnmuted!==t.isMuted?null:Object.assign(Object.assign({},t),{volume:e.startUnmuted?d.Nm:d.Gs,isMuted:!e.startUnmuted})}getVideoElement(){return this.videoPlayer}componentDidMount(){this.registerFullScreenEventListener()}componentWillUnmount(){this.removeFullScreenEventListener(),window.clearTimeout(this.overlayTimeoutId)}componentDidUpdate(e,t){this.state!==t&&this.fireStateChanged()}render(){const{autoPlay:e,aspectRatio:t,forceOriginalAspectRatio:n,showTimeline:l=!0,showFullscreenBtn:s=!1,videoComponent:m,showSoundControls:p,disclaimer:h={},pauseButtonTitle:g,playButtonTitle:f,soundControlTitle:y,disableFullScreenButtonTitle:v,enableFullScreenButtonTitle:b,downloadTranscriptButtonTitle:E,transcriptFileReference:w,soundProgressBarAriaLabel:C,timeProgressBarAriaLabel:S}=this.props,{videoState:k,currentTime:L,duration:x,displayMode:$,volume:_,isMuted:R}=this.state,{staticReferences:z=[],interactiveReferences:D,openableReferences:A,color:M="dark"}=h,B=x?x-L:void 0,F=k===P.ENDED&&$===O.NORMAL||k===P.NOT_STARTED&&!e,W=(0,J.eB)(x),H=$===O.FULLSCREEN,j=(0,J.KG)(H,t),q=this.isToolbarVisible(),G=k===P.PLAYING,U=z&&0!==z.length,X=T(L);return r.createElement(ce,{ref:(0,c.Z)(this.selfRef),aspectRatio:j,onMouseMove:this.handleMouseMove,onTouchEnd:this.handleTapEnd,onTouchStart:this.handleTapStart,tabIndex:G?0:-1},r.createElement(i.f,{theme:"image"},r.createElement(de,{aspectRatio:j,videoElementHeight:this.getVideoElementHeight(),isInFullScreen:H},r.createElement(me,{aspectRatio:j},r.createElement(m,{innerRef:this.videoPlayer,onPlay:this.handleVideoPlay,onPause:this.handleVideoPause,onEnded:this.handleVideoEnded,onTimeUpdate:this.handleVideoTimeUpdateEvent,onLoadedMetadata:this.handleVideoDurationChange,onDurationChange:this.handleVideoDurationChange,muted:Boolean(R),controls:!1,keepOriginalAspectRatio:n||H})),r.createElement(o.CSSTransition,{classNames:ae,in:q,appear:!0,timeout:300},r.createElement(oe,{onClick:this.handleOverlayClicked},r.createElement(ee,{isTimelineVisible:l}),r.createElement(te,{isVisible:q,ref:this.overlayRef,isTimelineVisible:l},r.createElement(ne,null,r.createElement(K,{pauseButtonTitle:g,playButtonTitle:f,videoState:k,onPlayClick:this.handlePlayBtnClick,onPauseClick:this.handlePauseBtnClick,disabled:F})),l&&r.createElement(r.Fragment,null,r.createElement(ne,{style:{flexGrow:1}},r.createElement(u.uP,{value:L,valueMin:d.Gs,valueMax:W,progressBarAriaLabel:S,onDragStart:this.handleTimelineDragStarted,onDragChange:this.handleTimelineDrag,onDragEnd:this.handleTimelineDragEnded,hideScrubberOnLostHover:!0,onProgressBarKeyDown:this.handleProgressBarKeyDown,scrubberDisabled:F,horizontalProgressBarValueText:X})),r.createElement(ne,null,r.createElement(N,{timeInSeconds:B}))),p&&r.createElement(ne,null,r.createElement(I,{value:_||0,title:y,soundProgressBarAriaLabel:C,onVolumeChange:this.changeVolume,onDragStart:this.handleVolumeDragStarted,onDragEnd:this.handleVolumeDragEnded,onFocusReset:this.resetOverlayTimeout,onVolumeBarKeyDown:this.handleVolumeBarKeyDown,disableButtons:F})),w&&r.createElement(ne,null,r.createElement(Z,{title:E,linkReference:w,disabled:F})),s&&r.createElement(ne,null,r.createElement(Q,{disableFullScreenButtonTitle:v,enableFullScreenButtonTitle:b,isInFullScreen:H,onToggleFullscreen:this.toggleFullScreen,disabled:F}))))),F&&r.createElement(le,{onClick:this.handlePlayBtnClick,onTouchStart:this.handleFinalStateOverlayTouchStart,onTouchEnd:this.handleFinalStateOverlayTouchEnd,isVisible:!0},r.createElement(V,{title:f})),this.shouldDisplayDisclaimers()&&r.createElement(i.f,{theme:(0,J.gh)(M)},r.createElement(ie,{isToolbarVisible:q,"data-cy":"videoDisclaimerReferences"},U&&r.createElement(a.xv,{appearance:a.C2.copy150,tag:a.rh.span},z),null!=D?D:"",null!=A?A:"")))))}}},96717:(e,t,n)=>{"use strict";n.d(t,{$:()=>p});var i=n(67294),a=n(78384),r=n(81697),o=n(696),l=n(74208);function s(e,t){if(t){if("left"===t.x)return 0;if("right"===t.x)return e}return Math.round(e/2)}function c(e,t){if(t){if("top"===t.y)return 0;if("bottom"===t.y)return e}return Math.round(e/2)}const d=a.default.video.withConfig({displayName:"StyledVideo"})`
    ${e=>!e.keepOriginalAspectRatio&&"object-fit: cover"};
    ${e=>{return!e.keepOriginalAspectRatio&&"object-position: "+(t=e.focalPoint,`${l.b[t.x]}% ${l.F[t.y]}%`);var t}};
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    ${e=>e.disablePointerEvents&&"pointer-events: none"};
    ${e=>e.reduceBrightness&&"filter: brightness(80%)"};
    transition: ${(0,r.hl)({name:"filter"})};
`;d.displayName="StyledVideo";const m=a.default.div.withConfig({displayName:"StyledVideoContainer"})`
    width: 100%;
    height: 100%;
`,u=a.default.div.attrs((e=>{const{videoWrapperStyle:t,keepOriginalAspectRatio:n}=e;return n?{}:t?{style:{width:`${t.width}px`,height:`${t.height}px`,marginLeft:t.marginLeft?`${t.marginLeft}px`:void 0,marginTop:t.marginTop?`${t.marginTop}px`:void 0}}:{}})).withConfig({displayName:"StyledVideoWrapper"})`
    display: block;
    box-sizing: content-box;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
`;u.displayName="StyledVideoWrapper";class p extends i.PureComponent{constructor(e){super(e),this.videoContainerRef=i.createRef(),this.resizeTimeout=null,this.setVideoElementObjectFitStyle=()=>{const{keepOriginalAspectRatio:e=!1}=this.props,t=this.videoContainerRef.current,n=this.getVideoElement();if(!(t instanceof HTMLDivElement)||!n||e)return;const{focalPoint:i}=this.props,a=function(e,t,n){const{clientWidth:i,clientHeight:a}=e,r=i/a,{innerWidth:o,innerHeight:l}=t,d=o/l;if(d>r){const e=Math.round(a*d);return{height:a,marginLeft:s(i-e,n),width:e}}{const e=Math.round(i/d);return{height:e,marginTop:c(a-e,n),width:i}}}({clientHeight:(o=t).clientHeight,clientWidth:o.clientWidth},{innerWidth:(r=n).videoWidth,innerHeight:r.videoHeight},i);var r,o;this.setState((e=>Object.assign(Object.assign({},e),{videoWrapperStyle:a})))},this.resizeThrottler=()=>{this.resizeTimeout||(this.resizeTimeout=window.setTimeout((()=>{this.resizeTimeout=null,this.actualResizeHandler()}),66))},this.actualResizeHandler=()=>{this.setVideoElementObjectFitStyle()},this.getVideoElement=()=>this.props.innerRef&&this.props.innerRef.current||null,this.state={}}registerPolyfill(){this.setVideoElementObjectFitStyle(),window.addEventListener("resize",this.resizeThrottler)}componentDidMount(){this.videoContainerRef&&(0,r.eB)()&&this.registerPolyfill()}componentWillUnmount(){window.removeEventListener("resize",this.resizeThrottler),this.resizeTimeout&&window.clearTimeout(this.resizeTimeout)}render(){const e=this.props,{innerRef:t}=e,n=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n}(e,["innerRef"]),{videoWrapperStyle:a}=this.state;return i.createElement(m,{ref:(0,o.Z)(this.videoContainerRef)},i.createElement(u,{videoWrapperStyle:a},i.createElement(d,Object.assign({},n,{ref:(0,o.Z)(t)}))))}}},73522:(e,t,n)=>{"use strict";n.d(t,{NE:()=>l,qc:()=>m});var i=n(46410),a=n(67294),r=n(78384),o=n(61097);const l="30px",s=r.keyframes`
	0% { transform: translateY(-200%); }
	50% { transform: translateY(-100%); }
	100% { transform: translateY(100%); }
`,c=r.default.div.withConfig({displayName:"StyledLineContainer"})`
    position: relative;
    height: ${l};
    width: 2px;
    margin-bottom: ${e=>e.theme.size.static300};
    border-radius: 3px;
    overflow: hidden;

    @media (min-width: ${i.u3.b560}px) {
        height: ${"50px"};
    }
`;c.displayName="StyledLineContainer";const d=r.default.div.withConfig({displayName:"StyledLine"})`
    height: 100%;
    width: 100%;
    background: ${e=>e.theme.text.color.primary};
    border-radius: 3px;
    animation: ${s} 3s ${o.rA} 0s infinite;
`;d.displayName="StyledLine";const m=()=>a.createElement(c,null,a.createElement(d,null));m.displayName="WormyAnimation"},78410:(e,t,n)=>{"use strict";n.d(t,{V:()=>r});var i=n(67294),a=n(61545);function r(){const{layers:e}=(0,a.j)(),[t,n]=i.useState();return i.useEffect((()=>{const t=e.length>0?e[e.length-1].layer.element:void 0;n(t)}),[e]),{activeLayerScrollableElement:t}}},58402:(e,t,n)=>{"use strict";n.d(t,{h:()=>l});var i=n(67294),a=n(62300),r=n(92344),o=n(64202);function l(e,t,n){const l=i.useContext(a.l),s=(0,o.UV)(),c=(0,o.u0)(),d=c?c.sectionGroupContentId:void 0;return i.useMemo((()=>(0,r.E)(l,s,d,e,t,n)),[l,s,e,t,n,d])}},50086:(e,t,n)=>{"use strict";n.d(t,{g:()=>o});var i=n(81697),a=n(64202),r=n(46978);function o(){const e=(0,a.WS)();return r.C.isInEditor()?i.Nm.LTR:e.direction}},6570:(e,t,n)=>{"use strict";n.d(t,{o:()=>a});var i=n(64202);function a(){const{enableSmartImaging:e,forceLiveDomain:t,liveDomain:n}=(0,i.yR)().featureHubModel.featureServices.imageService;return e&&t&&n.length>0}},61545:(e,t,n)=>{"use strict";n.d(t,{j:()=>r});var i=n(67294),a=n(64202);function r(){const e=(0,a.dB)(),[t,n]=i.useState(null),[r,o]=i.useState(e.getLayers());return i.useEffect((()=>(n(e&&e.subscribe((()=>{o(e.getLayers())}))),()=>{t&&t.unsubscribe()})),[]),{layers:r}}},60282:(e,t,n)=>{"use strict";n.d(t,{D:()=>o});var i=n(46978);let a={},r={};const o=(e,t)=>{const n=Object.getOwnPropertyNames(e);a[t]&&!i.C.isInEditor()||(a[t]={});const l=a[t];return n.forEach((n=>{let a=n;if(":items"===a){r[t]&&!i.C.isInEditor()||(r[t]={});const n=r[t];l.cqItems=n,Object.keys(e[a]).forEach((i=>{const a=e[":items"][i];a&&(n[i]=o(a,`${t}/${i}`))}))}else{if(a.startsWith(":")){const e=a.substr(1);a="cq"+e.substr(0,1).toUpperCase()+e.substr(1)}l[a]=e[n]}})),l}},14980:(e,t,n)=>{"use strict";n.d(t,{y:()=>c});var i=n(67294),a=n(64202),r=n(23797),o=n(60282),l=n(72195);const s={};function c(e){const t=(0,a.V7)(),n=(0,a.oh)(),c=i.useRef(new r._).current,d=l.Ai.get(e.resourceType);if(!d)return null;const{path:m,resourceType:u,containerProps:p,extraProps:h,forceReload:g}=e,f=n.value||"/",y=m.match(/^\//)?m:`${f}/${m}`,v=t.getData(y,!1);if(!v)return console.warn(`cannot find data for ${y}`),i.createElement("span",null,"Cannot find Data for ",y);if(e.defaultContentPath){const n=t.getData(e.defaultContentPath,!1);if(n&&n.anchorId){const e=n.anchorId;if("vwa-ngw18/components/structure/parsys"===v[":type"]&&v[":itemsOrder"].length>0){const t=v[":itemsOrder"][0];v[":items"][t].anchorId=e}}}const b=v?(0,o.D)(v,y):s,E=`${u.split("/").pop()}${p&&p.className?` ${p.className}`:""}`,w=c.create(y);return i.createElement(l.hi.Provider,{value:w},i.createElement(d,Object.assign({cqPath:y},b,{extraProps:h,containerProps:Object.assign(Object.assign({},p),{className:E}),forceReload:g})))}},84744:(e,t,n)=>{"use strict";n.d(t,{R:()=>g});var i=n(7445),a=n(67294),r=n(47277),o=n(78384),l=n(46978);const s=o.default.div.withConfig({displayName:"StyledEditableComponent"})`
    // make editable component always match it's parent height
    ${e=>e.matchParent&&"height: 100%"};
    position: relative;

    // overwrites a padding the editor sets, which we don't want
    padding: 0;
`;s.displayName="StyledEditableComponent";class c extends a.Component{render(){const{wrappedComponent:e,containerProps:t}=this.props,n=function(e){const t=Object.assign({},e);return delete t.containerProps,delete t.wrappedComponent,delete t.editConfig,delete t.isNotEditable,t}(this.props);return a.createElement(s,Object.assign({},this.editProps,t),a.createElement(e,Object.assign({},n)),this.useEmptyPlaceholder()&&a.createElement("div",Object.assign({},this.emptyPlaceholderProps)))}get editProps(){const e={};return!l.C.isInEditor()||this.props.isNotEditable||(e["data-cq-data-path"]=this.props.cqPath),e}get emptyPlaceholderProps(){return this.useEmptyPlaceholder()?{"data-emptytext":this.props.editConfig?this.props.editConfig.emptyLabel:void 0,className:"cq-placeholder"}:{}}useEmptyPlaceholder(){return l.C.isInEditor()&&!!this.props.editConfig&&this.props.editConfig.isEmpty(this.props)}}var d=n(72195),m=n(16743),u=n(60282);const p=["cqPath","containerProps","forceReload"];class h extends a.Component{constructor(e){super(e),this.onLoad=e=>{this.setState({model:(0,u.D)(e,this.props.cqPath)})},this.updateData=()=>{m.ModelManager.getData({path:this.props.cqPath,forceReload:this.props.cqForceReload||!1}).then(this.onLoad)},this.state={model:null}}static withModel(e){return t=>{const n=Object.assign(Object.assign({},t),{wrappedComponent:e});return a.createElement(h,n)}}componentWillUnmount(){m.ModelManager.removeListener(this.props.cqPath,this.updateData)}componentDidMount(){m.ModelManager.addListener(this.props.cqPath,this.updateData)}render(){const e=function(e,t){const n=t.extraProps;e=e||t;const i=Object.assign(Object.assign({},e),n);return p.forEach((e=>i[e]=t[e])),delete i.extraProps,i}(this.state.model,this.props);return a.createElement(this.props.wrappedComponent,e)}}const g=(e,t)=>{let n=function(e){return class extends a.Component{render(){return a.createElement(c,Object.assign({},this.props,{wrappedComponent:e}))}}}(t);n=(0,i.withEditorContext)(n);const o=h.withModel(n);return d.Ai.map(e,o),t=>a.createElement(r.E,{path:t.path,resourceType:e,personalizable:t.personalizable,containerProps:t.containerProps,extraProps:t,isNotEditable:t.isNotEditable})}},72195:(e,t,n)=>{"use strict";n.d(t,{hi:()=>a,Ai:()=>r});var i=n(67294);const a=i.createContext({value:"/"});i.Component;const r=new class{constructor(){this.mapping={}}map(e,t){this.mapping[e]=t}get(e){return this.mapping[e]}}},8945:(e,t,n)=>{"use strict";n.d(t,{tk:()=>c,GR:()=>l}),n(28660);var i=n(59638),a=n(43703);class r{static callPostConstruct(e){this.callMethod(e,"postConstructs")}static callMethod(e,t){(Reflect.getMetadata(t,e)||[]).forEach((t=>{const n=e[t.field];"function"==typeof n?n.bind(e)():console.log(t.field+" is not a function on type "+t.type)}),this)}static getAllFieldMetaData(e,t){return"function"==typeof t?this.getAllFieldMetaDataFromPrototype(e,t.prototype):"object"==typeof t?this.getAllFieldMetaDataFromPrototype(e,Object.getPrototypeOf(t)):[]}static getAllFieldMetaDataFromPrototype(e,t){const n=Reflect.getMetadata(e,t)||[],i=Object.getPrototypeOf(t);return i&&i!==t?n.concat(this.getAllFieldMetaDataFromPrototype(e,i)||[]):n}}const o=(e,t)=>(t&&(t.env&&(e=`${e}.${t.env}`),t.devMode&&(e=`${e}.DEV`)),e);let l=new class{constructor(){this.singletonDefinitions={},this.prototypesNeedInjection=[],this.injectedPrototypes=[]}regSingleton(e,t,n){this.injectedPrototypes.push(e.prototype);const i=t;t=o(t,n),this.singletonDefinitions[t]={key:t,name:i,options:n||{},type:()=>new e}}removeSingletonDefinition(e){delete this.singletonDefinitions[e]}regReact(e){this.injectedPrototypes.push(e.prototype)}isPrototypeRegistered(e){return this.injectedPrototypes.indexOf(e)>=0}markAsInjected(e){this.prototypesNeedInjection.push(e)}};(0,i.L)()&&((0,a.Rd)()||(window[a.Nl]={}),l=(0,a.Rd)().metaRegistry||l,(0,a.Rd)().metaRegistry=l);class s{constructor(e){this.singletonInstances={},this.initializedSingletons=[],this.additionalSingletonDefinitions=[],this.logger=e}clearInstances(){this.singletonInstances={},this.initializedSingletons=[]}addSingleton(e,t,n){this.additionalSingletonDefinitions.push({key:o(e,n),type:()=>t,name:e,options:n||{}})}getSingleton(e){return this.singletonInstances[e]}isSingletonInitialized(e){return!!this.singletonInstances[e]}initSingletons(e,t){this.logger.general.debug("start singletons %s",e),this.checkInjection(),Object.keys(l.singletonDefinitions).map((e=>l.singletonDefinitions[e])).filter((e=>!e.options.devMode||t)).map(((e,t)=>Object.assign(Object.assign({},e),{idx:t,additional:!1}))).concat(this.additionalSingletonDefinitions.map(((e,t)=>Object.assign(Object.assign({},e),{idx:t,additional:!0})))).sort(((e,t)=>e.name===t.name?e.options.devMode===t.options.devMode?e.additional===t.additional?t.idx-e.idx:e.additional?-1:1:e.options.devMode?-1:1:e.name.localeCompare(t.name))).forEach((t=>{this.initSingleton(t,e)})),Object.keys(this.singletonInstances).forEach((e=>{const t=this.singletonInstances[e];this.injectSingletons(t,e)})),this.logger.general.debug("end singletons %s",e)}injectSingletons(e,t){null!=e&&"object"==typeof e&&(!t||this.initializedSingletons.indexOf(t)<0)&&(t&&this.initializedSingletons.push(t),(r.getAllFieldMetaData("injects",e)||[]).forEach((t=>{const n=this.getSingleton(t.type);n||console.error(`cannot find ${t.type}. `),e[t.field]=n,this.injectSingletons(n,t.type)}),this),r.callPostConstruct(e))}initSingleton(e,t){if(function(e,t){return(!e.options.env||e.options.env===t)&&("priority"!==t||e.options&&"priority"===e.options.env)}(e,t))try{if(this.logger.general.debug("adding singleton %s, o-env=%s, env=%s, devMode=%s, name=%s",e.name,e.options&&e.options.env?e.options.env:"any",t,Boolean(e.options&&e.options.devMode),e.key),e.name in this.singletonInstances)this.logger.general.info("Singleton with name %s already exists. Registration skipped.",e.name);else{const t=e.type();this.singletonInstances[e.name]=t}}catch(t){console&&console.error("Some error occurred in the init() of "+e.name+". Exception:",t,t.stack?t.stack:"")}else this.logger.general.debug("skip instantiation %s, env=%s",e.name,t)}checkInjection(){const e=l.prototypesNeedInjection.filter((e=>l.injectedPrototypes.indexOf(e)<0));if(e.length>0)throw new Error("need @singleton annotation\n"+e.map((e=>e.constructor&&e.constructor.name?e.constructor.name:"noname")).join("\n"))}}function c(e){if(!(0,i.L)())throw new Error("don't attach registry to global in server");const t=(0,a.Rd)().browserRegistry||new s(e);return(0,a.Rd)().browserRegistry=t,t}},8522:(e,t,n)=>{"use strict";n.d(t,{g:()=>i});const i=n(67294).createContext(null)},90669:(e,t,n)=>{"use strict";n.d(t,{f3:()=>r,zY:()=>o,ri:()=>l});var i=n(8945);function a(e,t){return(n,a)=>{i.GR.markAsInjected(n);const r=Reflect.getOwnMetadata(e,n)||[],o=class{static firstUpperCase(e){return e.substring(0,1).toUpperCase()+e.substring(1)}}.firstUpperCase(a);r.push({field:a,props:t||{},type:o}),Reflect.defineMetadata(e,r,n)}}function r(){return a("injects")}function o(){return a("postConstructs")}function l(e,t){return n=>{i.GR.regSingleton(n,e,t)}}},46517:(e,t,n)=>{"use strict";n.d(t,{X:()=>a});const i="s2:history",a=(e,t)=>e.featureServiceRegistry.bindFeatureServices({dependencies:{featureServices:{[i]:"2.0.0"}}},t).featureServices[i]},25801:(e,t,n)=>{"use strict";n.d(t,{T:()=>a,I:()=>r});var i=n(25781);const a="SingleConfigurationFlowNavigator";function r(){return{definition:i.m,service:{typeName:a,version:"^1.2.0"}}}},67488:(e,t,n)=>{"use strict";n.d(t,{s:()=>m,j:()=>u});var i=n(2310),a=n(57835),r=n(67294),o=n.t(r,2),l=n(73935),s=n.t(l,2),c=n(78384);const d=JSON.parse('{"H":{"@adobe/aio-lib-files":"1.2.0","@adobe/cq-react-editable-components":"1.1.0","@adobe/cq-spa-component-mapping":"1.0.3","@adobe/cq-spa-page-model-manager":"1.0.7","@feature-hub/core":"2.8.1","@feature-hub/history-service":"2.8.1","@feature-hub/logger":"2.8.1","@feature-hub/module-loader-amd":"2.8.1","@feature-hub/module-loader-commonjs":"2.8.1","@feature-hub/react":"2.8.1","@feature-hub/serialized-state-manager":"2.8.1","@loadable/component":"5.15.0","@loadable/server":"5.15.0","@types/jwt-decode":"2.2.1","@types/lodash.isequal":"4.5.5","@volkswagen-onehub/api-key-provider":"1.0.2","@volkswagen-onehub/authservice-config":"0.0.1","@volkswagen-onehub/breadcrumb-service":"2.0.0","@volkswagen-onehub/car-configuration-feature-service":"0.2.6","@volkswagen-onehub/cms-service":"0.0.1","@volkswagen-onehub/cms-utils":"0.0.5","@volkswagen-onehub/components-core":"62.21.5","@volkswagen-onehub/data-version-service":"0.1.7","@volkswagen-onehub/disclaimer-manager":"1.3.0","@volkswagen-onehub/fa-content-service":"0.0.3","@volkswagen-onehub/feature-hub-utils":"1.0.3","@volkswagen-onehub/featureapp-service":"1.5.0","@volkswagen-onehub/filter-service":"1.86.0","@volkswagen-onehub/icons-core":"62.17.11","@volkswagen-onehub/image-service":"1.6.0","@volkswagen-onehub/layer-feature-app":"1.8.2","@volkswagen-onehub/layer-manager":"1.8.2","@volkswagen-onehub/locale-service":"0.1.10","@volkswagen-onehub/navigation-flyout-service":"0.1.1","@volkswagen-onehub/navigation-service":"0.0.36","@volkswagen-onehub/page-info-service":"0.1.1","@volkswagen-onehub/react-render-service":"0.1.1","@volkswagen-onehub/service-config-provider":"0.1.3","@volkswagen-onehub/showroom-navigation":"1.3.0","@volkswagen-onehub/single-configuration-flow-navigator":"2.1.1","@volkswagen-onehub/styled-components-injectglobal-polyfill":"4.1.1","@volkswagen-onehub/tracking-service":"0.1.3","@volkswagen-onehub/user-interaction-service":"0.0.7","@volkswagen-onehub/user-location-manager":"0.31.0","aws-serverless-express":"^3.3.5","bezier-easing":"2.1.0","body-parser":"1.18.3","body-scroll-lock":"^3.1.5","bowser":"1.9.4","build":"0.1.4","express":"4.16.4","fs-extra":"latest","jwt-decode":"2.2.0","lodash.escaperegexp":"4.1.2","lodash.isempty":"4.4.0","lodash.isequal":"4.5.0","lodash.throttle":"^4.1.1","mobx":"5.13.1","mobx-react":"6.1.5","moment":"2.24.0","node-gzip":"1.1.2","react":"16.13.1","react-dom":"16.13.1","react-fast-compare":"2.0.2","react-render-service":"1.3.1","react-reveal":"^1.2.2","react-router":"5.0.1","react-router-dom":"5.2.0","react-transition-group":"^2.5.0","reflect-metadata":"0.1.13","resize-observer-polyfill":"1.5.1","styled-components":"4.4.1","url-join":"^4.0.0","uuid":"3.1.0"}}'),m={react:o,"react-dom":s,"@feature-hub/react":i,"styled-components":c,"@volkswagen-onehub/styled-components-injectglobal-polyfill":a},u=Object.keys(m).reduce(((e,t)=>(e[t]=d.H[t],e)),{})},50660:(e,t,n)=>{"use strict";n.d(t,{ws:()=>ee,XX:()=>ne,CL:()=>ie,hG:()=>te,Y4:()=>ae});var i=n(47637),a=n(80002),r=n(10737),o=n(25801),l=n(91067),s=n(43703),c=n(87003),d=n(21561),m=n(71969),u=n(22897),p=n(51265),h=n(86214),g=n(55238);function f(e,t){const n={},i=e.featureHubModel.featureApps;return Object.keys(i).forEach((e=>{const a=i[e];n[a.name]=function(e,t){const n=e.ssrEnabled&&e.ssrUrl?e.ssrUrl:void 0;let i;try{i=e.instanceConfig?JSON.parse(e.instanceConfig):void 0}catch(n){t.featurehub.error("cannot parse config for %s",e.name)}return{baseUrl:e.baseUrl,src:e.url,serverSrc:n,config:i,css:e.css,name:e.name,trackingId:(0,g.W)(e),anchorId:e.anchorId,legalEntity:e.legalEntity,apiKey:e.featureAppApiKey}}(i[e],t)})),{definition:(0,h.C)(n),service:{typeName:"FeatureAppService",version:"^1.4.0"}}}var y=n(85559),v=n(59638),b=n(53933),E=n(37762),w=n(65322);function C(e,t,n,i,a){const r=e.pathname||"/",o=L(e),l=L(t);if(l.has(n))throw new Error(`Primary consumer tried to set query parameter ${JSON.stringify(n)} which is reserverd for consumer paths.`);const s=o.get(n);let c;!i&&s?(l.set(n,s),c=l.toString()):c=t?t.search:"";let d=t&&t.pathname?t.pathname:"/";if(!i&&r){const e=(0,E.cP)(r),t=e.suffix?(0,E.uX)(e.suffix):{};let n=(0,E.cP)(d).suffix||"";Object.keys(a).forEach((e=>{n=(0,E.hr)(n,a[e],t[a[e]])})),d=(0,E.Ep)({base:e.base,suffix:n})}return{pathname:d,search:c,hash:t?t.hash:void 0}}function S(e,t,n,i,a){let r=e.pathname;if(t){const a=(0,E.cP)(e.pathname||"/");let o=t.pathname;"/"===t.pathname&&(o=void 0);const l=(0,E.hr)(a.suffix||"",n,o,{defaultExtension:i});r=(0,E.Ep)({base:a.base,suffix:l})}const o=L(t),l=function(e,t){const n=`-${t}`,i=new w._;return e.forEach(((e,t)=>{t.endsWith(n)||i.append(t,e)})),i}(L(e),n);o.forEach(((e,t)=>{l.append(t+a,e)}));const{hash:s}=e;return{pathname:r,search:l.toString(),hash:s}}var k=n(74707);function L(e){return new w._(e&&e.search)}function x(e,t){const n=t.filter((t=>t.historyKey===e));if(1===n.length)return n[0]}class ${constructor(e){this.options=e}createNewRootLocationForMultipleConsumers(...e){let t={pathname:"/"},n=x(this.options.primaryConsumerHistoryKey,e);n||(n={historyKey:this.options.primaryConsumerHistoryKey,location:{pathname:"/"}});const i=this.options.getSecondaryConsumerId((0,E.cP)(n.location.pathname||"/").base);return t=C(t,n.location,this.options.consumerPathsQueryParamName,!0,i),Object.keys(i).forEach((n=>{const a=x(n,e),r=i[n];a&&(t=S(t,a.location,r,this.options.secondaryExtension,"-"+r))})),e.filter((e=>![...Object.keys(i),this.options.primaryConsumerHistoryKey].includes(e.historyKey))).forEach((e=>t=(0,b.hw)(t,e.location,e.historyKey,this.options.consumerPathsQueryParamName))),t}getConsumerPathFromRootLocation(e,t){const{consumerPathsQueryParamName:n,primaryConsumerHistoryKey:i}=this.options,a=e.pathname||"/",r=(0,E.cP)(a).base,o=this.options.getSecondaryConsumerId(r),l=o[t],s=t===i,c=L(e);if(s)return function(e,t,n){const i=(0,b.fW)(e),a=(0,E.cP)(e.pathname||"/"),r=new w._,o=Object.keys(n).map((e=>"-"+n[e]));i.forEach(((e,n)=>{o.some((e=>n.endsWith(e)))||n===t||r.append(n,e)}));let l=a.base;if(a.suffix){const e=(0,E.uX)(a.suffix).default;l=(0,E.Ep)({base:l,suffix:e})}const s=r.toString();return k.Ep({pathname:l,search:s,hash:e.hash})}(e,n,o);if(l)return function(e,t,n){const i=new w._,a=new w._(e.search),r=(0,E.cP)(e.pathname||"/");a.forEach(((e,t)=>{if(t.endsWith(n)){const a=t.substring(0,t.length-n.length);i.append(a,e)}}));const o=i.toString();if(r.suffix||o){const e=r.suffix?(0,E.uX)(r.suffix)[t]:"/";return k.Ep({pathname:e,search:o})}return""}(e,l,"-"+l);const d=c.get(n);return d?(0,b.fc)(d,t):void 0}createRootLocation(e,t,n){const{consumerPathsQueryParamName:i,primaryConsumerHistoryKey:a,secondaryExtension:r}=this.options,o=n===a,l=this.getConsumerPathFromRootLocation(e,this.options.primaryConsumerHistoryKey),s=this.options.getSecondaryConsumerId((c=l)?(0,E.cP)(new URL("http://ddd.de"+c).pathname).base:"");var c;const d=s[n];return o?C(e,t,i,function(e,t){if(!t||!t.pathname)return!1;const n=(0,E.cP)(e.pathname||"").base,i=(0,E.cP)(t.pathname).base;return!!t&&n!==i}(e,t),s):d?S(e,t,d,r,"-"+d):(0,b.hw)(e,t,n,i)}}function _(e,t,n,i){const a=((e,t,n)=>new $({consumerPathsQueryParamName:"---",primaryConsumerHistoryKey:e,secondaryExtension:t,getSecondaryConsumerId:n}))(e,t,i);n&&n(a);const r=(0,v.L)()?"browser":"static";return{definition:(0,y.Wq)(a,{mode:r}),service:{typeName:"HistoryService",version:"2.0.0"}}}var I=n(41810);function T(e){const t=e.featureServices.imageService,n=!t.atOffer&&t.author;return{definition:(0,I.B)(Object.assign(Object.assign({},t),{author:n})),service:{typeName:"ImageService",version:"^1.1.1"}}}var N=n(49378),P=n(70974),O=n(11226),R=n(54787),z=n(54475);function D(e,t){return{definition:(0,O.A)(((n,i)=>{const a="hub-"+(i||n);let r=e.getScope(a);if(!r){const n=t?new z.V(t,"log",a):void 0;r=new R.L("warn",a,n),e.addScope(a,r)}return r}))}}var A=n(46873),M=n(46769),B=n(4539),F=n(62325),W=n(95272),H=n(67488),j=n(86454),V=n(46978),q=n(24414),G=n(96464);function U(e,t){return{definition:(0,G.definePageInfoService)(function(e,t){return()=>{let n=(0,v.L)()?window.location.pathname:e||"/";const i=n.match(/([^.]+)\./);return i&&i.length>=1&&(n=i[1]),{secondaryConsumerId:t.featureHubModel.secondaryHistoryKeysForPath[n],primaryConsumerId:ee}}}(t,e),{logoCategory:"private"}),service:{typeName:"PageInfoService",version:"^1.0.0"}}}var X=n(29837);function Y(e){return{definition:(0,X.Q)((()=>e.hydrating)),service:{typeName:"ReactRenderService",version:"^1.0.0"}}}const K=e=>()=>{const t=e.getSingleton("RootLocationTransformer").getConsumerPathFromRootLocation(window.location,te);return t?(0,k.cP)(t):{}};var Q=n(88008),Z=n(72414),J=n(46129);const ee="s2:cms-integrator",te="showroom-navigation",ne="layer",ie="pager";function ae(e,t,n,h,g,y,v,b,E,w,C={hydrating:!1}){const S=new r.Q8;n.addSingleton("NavigationFlyoutAdmin",S);const k=[...y,_(te,"app",(e=>n.addSingleton("RootLocationTransformer",e)),(e=>((e,t)=>{const n=e.match(/([^.]+)\./);n&&n.length>=1&&(e=n[1]);const i=t[e],a={};return i&&(a[i]="app"),a[l.WP]=ne,a[Z.d4]=ie,a})(e,t.featureHubModel.secondaryHistoryKeysForPath))),{definition:B.k,service:{typeName:"SerializedStateManager",version:"^1.0.0"}},(0,o.I)(),(O=t,{definition:(0,u.p)({modelStructureVersion:O.dataVersions.modelStructureVersion,mofaCarDataVersion:O.dataVersions.mofaCarDataVersion,serviceConfigsVersion:O.dataVersions.serviceConfigsVersion}),service:{typeName:"DataVersionService",version:"^1.0.0"}}),{definition:q.faContentServiceDefinition},f(t,E),(I={navigationConfig:Object.assign(Object.assign({},t.showroomNavigationModel.config),{configureAsAnchor:!0}),extension:"",replaceOnSync:!1},{definition:(0,W.A)(I),service:{typeName:"ShowroomNavigationManager",version:"^1.1.0"}}),{definition:(0,m.fE)(),service:{typeName:"CarConfigurationService",version:"^2.0.0"}},($=S,{definition:(0,A.ZX)({"1.0.0":{admin:$}}),service:{typeName:"NavigationFlyoutService",version:"^1.0.0"}}),T(t.featureHubModel),{definition:c.Y,service:{typeName:"BreadcrumbService",version:"^1.0.0"}},{definition:d.d,service:{typeName:"FilterService",version:"^1.0.0"}},{definition:J.apiKeyProviderDefinition},D(E,n.getSingleton("SessionStorage")),U(t,w),Y(C),{definition:(0,Q.m)(),service:{typeName:"UserInteractionService",version:"^1.0.0"}}].concat(function(e={},t={}){return[{definition:(0,F.M)({configs:e}),service:{typeName:"ServiceConfigProvider",version:"^1.0.0"}},{definition:(0,F.K)(Object.assign({gfa:{}},t))}]}(t.serviceConfigs,t.gfaServiceConfigs),function(e,t){const n={language:e.language,countryCode:e.countryCode,currency:e.currency,direction:t};return[{definition:(0,P.WW)(n),service:{typeName:"LocaleService",version:"^1.0.0"}},{definition:(0,P._m)()}]}(t.localeModel,e.direction),(x={primaryConsumerId:te,pages:t.navigablePages,primaryConsumerLocation:K(n)},[{definition:(0,M.s6)(x),service:{typeName:"FeaturehubNavigationService",version:"^1.2.0"}},{definition:(0,M.sc)()}]),(L=e,[{definition:(0,p.Gp)({legalEntityLabels:L.legalEntityLabels,defaultLegalEntity:L.defaultLegalEntity})},{definition:(0,p.MC)(),service:{typeName:"DisclaimerManager",version:"^1.4.0"}},{definition:(0,p.Ch)()}]),[{definition:N.v3,service:{typeName:"LayerManager",version:"^2.5.0"}},{definition:N.C2}]).filter((e=>!e.env||e.env===g));var L,x,$,I,O;const R=[...k.map((e=>e.definition)),...v,(0,j.V)({inEditor:V.C.isInEditor()})],z={};k.forEach((e=>{e.service&&(z[e.definition.id]=e.service.version)}));const G=(0,i.N)(ee,{moduleLoader:h,featureServiceDefinitions:R,featureServiceDependencies:z,providedExternals:H.j,logger:E.featurehub});return(0,s.Rd)().getFeatureService=(e,t)=>{const n=re(G).get(e);if(!n)return;let i;return i=t?n[t]:Object.values(n)[0],i?i().featureService:void 0},(0,s.Rd)().printFeatureHubDescription=()=>{const e=re(G),t=[];e.forEach(((e,n)=>{const i={id:n,versions:Object.keys(e).sort().reverse().join(", "),deployment:b.indexOf(n)>=0?"bundle":"cms"};t.push(i)}));const n={"@volkswagen-onehub/components-core":a.PP};console.group("Feature Services"),console.table(t),console.groupEnd(),console.group("FeatureHub Externals"),console.table(H.j),console.groupEnd(),console.group("CMS Dependencies"),console.table(n),console.groupEnd()},n.addSingleton("FeatureHub",G),k.forEach((e=>{if(e.service){const t=G.featureServices[e.definition.id];n.addSingleton(e.service.typeName,t,{env:e.env})}})),G}function re(e){return e.featureServiceRegistry.sharedFeatureServices}},85678:(e,t,n)=>{"use strict";n.d(t,{C:()=>f});var i=n(67294),a=n(73154),r=n(78384),o=n(46410),l=n(81697);const s=r.default.div.withConfig({displayName:"StyledCustomContainer"})`
    display: flex;
    @media (max-width: ${o.u3.b560}px) {
        flex-direction: column;
    }
`;s.displayName="ArticleMetaInfo.StyledCustomContainer";const c=r.default.div.withConfig({displayName:"StyledCustomChildWrapper"})`
	@media (min-width: ${o.u3.b560}px) {
		padding-${e=>(0,l.rz)(e.theme.direction)}: ${e=>e.theme.size.static200};
		margin-${e=>(0,l.rz)(e.theme.direction)}: ${e=>e.theme.size.static200};
		border-${e=>(0,l.rz)(e.theme.direction)}: 1px solid ${e=>e.theme.text.color.primary};
	}
	@media (max-width: ${o.u3.b560}px) {
		margin-top: ${e=>e.theme.size.static150};
	}
`;c.displayName="ArticleMetaInfo.StyledCustomChildWrapper";const d=e=>{const t=i.Children.toArray(e.children).filter(i.isValidElement);return i.createElement(s,null,i.Children.map(t,((e,t)=>t>0?i.createElement(c,null,e):i.createElement("div",null,e))))};d.displayName="ArticleMetaInfo";var m=n(64202),u=n(2987),p=n(23502);const h=({label:e,text:t})=>i.createElement(a.xv,{tag:a.rh.span,appearance:a.C2.label150},i.createElement(a.xv,{tag:a.rh.span},e),i.createElement(a.xv,{tag:a.rh.span,bold:!0},"Â ",t));h.displayName="ArticleMetaInfo.TextBlockWithLabel";const g=({formattedDate:e})=>i.createElement(u.c,{name:"publishDateElement"},i.createElement(a.xv,{tag:a.rh.span,appearance:a.C2.label150},e));function f(e){const t=(0,m.po)(),{authorNames:n,photographerNames:a,publishDateTS:r,authorLabel:o,photographyLabel:l}=e;return n||a||r?i.createElement(d,null,n&&i.createElement(u.c,{name:"authorElement"},i.createElement(h,{key:"author",text:n,label:o})),a&&i.createElement(u.c,{name:"photographerElement"},i.createElement(h,{key:"photographer",text:a,label:l})),r&&i.createElement(g,{key:"publish-date",formattedDate:i.createElement(p.J,{language:t.language,country:t.countryCode,timestamp:r})})):null}g.displayName="ArticleMetaInfo.PublishDateElement"},42607:(e,t,n)=>{"use strict";n.d(t,{S:()=>v,F:()=>y});var i=n(67294),a=n(17061),r=n(73154),o=n(46978),l=n(5110),s=n(58795),c=n(25614);const d="Button does not have the href attribute configured, it is required!";function m(e){const{children:t,icon:n}=e,m=(0,l.e)(n,"small",{ariaHidden:!0}),u=i.useRef(null),[p,h]=(0,c.c)(u,e),g=!h&&i.createElement(s.e3,{severity:s.vR.WARNING},i.createElement("span",null,d)),f=i.createElement(a.M,{tag:"a",emphasis:"secondary",icon:m,href:h,onClick:p,ref:u},i.createElement(r.xv,{color:r.d9.inherit,appearance:r.C2.copy0100},t));return o.C.isInEditor()?i.createElement(i.Fragment,null,g,f):f}var u=n(2987);function p(e){const{target:t,children:n,title:l,emphasis:m}=e,p=i.useRef(null),[h,g]=(0,c.c)(p,e),f=!g&&i.createElement(s.e3,{severity:s.vR.WARNING},i.createElement("span",null,d)),y=i.createElement(u.c,{name:"buttonElement"},i.createElement(a.M,{tag:"a",ref:p,onClick:h,href:g,target:t,emphasis:m,title:l},i.createElement(u.c,{name:"buttonElementLabel"},i.createElement(r.xv,{color:r.d9.inherit,appearance:r.C2.copy0150,textAlign:r.H.center},n))));return o.C.isInEditor()?i.createElement(i.Fragment,null,f,y):y}var h=n(64202),g=n(84744),f=n(37772);function y(e){const t=(0,h.V9)(),{layerButton:n,layerType:a="CONTENT",buttonStyle:r,buttonUrl:o,buttonTarget:l="_self",buttonLabel:s="Call to Action Button",buttonTitle:c,ignoreExternalLinkLightbox:d,icon:u,onClick:g,trackingActionOverride:y,originalCqPath:v}=e,b=(0,f.Z)(v),E=y||function(e,i,a,r){t.trackButtonClick(b,e,i,a),n&&t.trackLayerLoad((0,f.Z)(e,r),a)};return n?"action"===r?i.createElement(m,{contentId:b,icon:u,href:o,isLayerLink:!0,layerProps:{layerType:a},trackingActionOverride:E,onClick:g,ignoreExternalLinkLightbox:d},s):i.createElement(p,{contentId:b,href:o,emphasis:r,title:c,isLayerLink:!0,layerProps:{layerType:a},trackingActionOverride:E,onClick:g,ignoreExternalLinkLightbox:d},s):"action"===r?i.createElement(m,{contentId:b,icon:u,href:o,trackingActionOverride:E,ignoreExternalLinkLightbox:d},s):i.createElement(p,{contentId:b,href:o,target:l,emphasis:r,title:c,trackingActionOverride:E,ignoreExternalLinkLightbox:d},s)}const v=(0,g.R)("vwa-ngw18/components/editorial/elements/buttonElement",y)},53159:(e,t,n)=>{"use strict";n.d(t,{$:()=>m});var i=n(67294),a=n(73154),r=n(10194);class o extends i.Component{render(){const{order:e="H2",style:t="NONE",emptyLabel:n,bold:a}=this.props;return i.createElement(r.xQ,Object.assign({},this.props,{placeholder:n,tag:this.getTag(e),appearance:this.getAppearance(e,t),bold:a}))}getTag(e){switch(e){case"H1":return a.rh.h1;case"H3":return a.rh.h3;case"H4":return a.rh.h4;case"H2":default:return a.rh.h2}}getAppearance(e,t){switch(t){case"H0":return a.C2.headline450;case"H1":return a.C2.headline400;case"H2":return a.C2.headline350;case"H3":return a.C2.headline300;case"H4":case"H5":case"H6":return a.C2.headline250;case"NONE":default:return this.getAppearance(e,e)}}}var l=n(84744),s=n(37205),c=n(82755);class d extends i.Component{render(){const{hideItemDisclaimers:e}=this.props,t=i.createElement(o,Object.assign({},this.props,{emptyLabel:"Type your headline here..."}));return e?t:i.createElement(c.C,null,(e=>i.createElement(i.Fragment,null,t,i.createElement(s.e,{disclaimers:e}))))}}const m=(0,l.R)("vwa-ngw18/components/editorial/elements/headingElement",d)},25389:(e,t,n)=>{"use strict";n.d(t,{Kn:()=>O});var i=n(67294),a=n(78384),r=n(5353),o=n(92946),l=n(26781),s=n(21118),c=n(69522),d=n(81697),m=n(83028),u=n(73154),p=n(2987);const h=a.default.span.withConfig({displayName:"StyledImageDisclaimerReferences"})`
    position: absolute;
    ${e=>(0,d.rz)(e.theme.direction)}: 0;
    bottom: 0;
    padding: ${e=>e.theme.size.static250};
`;h.displayName="StyledImageDisclaimerReferences";const g=a.default.div.withConfig({displayName:"StyledImageDisclaimerWrapper"})`
    height: 100%;
    width: 100%;
`;function f(e){const{children:t,staticReferences:n=[],interactiveReferences:a,openableReferences:r,color:o="dark"}=e,l=n&&0!==n.length;return i.createElement(g,null,t,i.createElement(m.f,{theme:"dark"===o?"main":"image"},i.createElement(p.c,{name:"imageDisclaimerReferences"},i.createElement(h,null,l&&i.createElement(u.xv,{appearance:u.C2.copy150,tag:u.rh.span},n),null!=a?a:"",null!=r?r:""))))}var y=n(32221),v=n(64202),b=n(84744),E=n(46978),w=n(36452),C=n(2192),S=n(84182),k=n(14272),L=n(72083),x=n(4404),$=n(6570);const _=(0,a.default)(k.a).withConfig({displayName:"NotLoadedImage"})`
    position: relative;
    top: 50%;
    height: auto !important;
    max-height: 50vh;
    transform: translateY(-50%);
`,I=e=>(0,v.xh)()?i.createElement(r.wY,Object.assign({},e)):i.createElement(r.Ee,Object.assign({},e)),T=e=>(0,v.xh)()?i.createElement(r.Ad,Object.assign({},e)):i.createElement(r.ct,Object.assign({},e));function N(e){const{altText:t="",focalPoint:n="CENTER_CENTER",isDecorative:a,disclaimers:o={},reduceBrightness:s,sizes:c,imageAsset:d,aspectRatio:m,encodedImage:u,responsiveMediaConfig:p}=e,h=(0,v.gq)(),[g,b]=i.useState(!e.src),w=e.src,k=(0,v.WS)().adobeTargetExport,N=(0,$.o)(),P=(0,v.Ng)();function O(){b(!0)}const{src:R,srcSet:z,srcSetWebP:D}=(0,S.f)(h,{originalSrc:w,imageAsset:d,focalPoint:n,aspectRatio:m},N),{staticReferences:A=[],interactiveReferences:M,openableReferences:B,color:F="dark"}=o;return i.createElement(f,{staticReferences:A,interactiveReferences:M,openableReferences:B,color:F},E.C.isInEditor()&&!w?i.createElement(L.o,null,i.createElement(x.XB,null)):(null==P?void 0:P.enablePictureElement)&&p?(()=>{const e=null==p?void 0:p.map((e=>{const t=(0,S.f)(h,{originalSrc:w,imageAsset:d,focalPoint:n,aspectRatio:e.aspectRatio},N);return Object.assign(Object.assign({},e),t)}));return i.createElement(_,null,(({className:r})=>{const o={src:R,reduceBrightness:s,className:g?r:"",onError:O,config:e};return i.createElement(l.r,{focalPoint:C.N[n]},E.C.isInEditor()||k?a?i.createElement(y.tk,Object.assign({},o,{src:w})):i.createElement(y.hl,Object.assign({},o,{src:w,alt:t})):a?i.createElement(y.$l,Object.assign({},o,{srcSet:z,"data-srcset-webp":D,sizes:c})):i.createElement(y.t,Object.assign({},o,{srcSet:z,"data-srcset-webp":D,sizes:c,alt:t,srcPlaceholder:null!==u?u:void 0})))}))})():i.createElement(_,null,(({className:e})=>{const o={src:R,reduceBrightness:s,className:g?e:"",onError:O};return i.createElement(l.r,{focalPoint:C.N[n]},E.C.isInEditor()||k?a?i.createElement(r.ct,Object.assign({},o,{src:w})):i.createElement(r.Ee,Object.assign({},o,{src:w,alt:t})):a?i.createElement(T,Object.assign({},o,{srcSet:z,"data-srcset-webp":D,sizes:c})):i.createElement(I,Object.assign({},o,{alt:t,srcSet:z,"data-srcset-webp":D,sizes:c,srcPlaceholder:null!==u?u:void 0})))})))}class P extends i.PureComponent{render(){const{aspectRatio:e}=this.props;return i.createElement(o.Po,{ratio:w.f[e]||o.oM["16:9"]},i.createElement(N,Object.assign({},this.props)))}}const O=(0,b.R)("vwa-ngw18/components/editorial/elements/imageElement",(function(e){const{useParentAspectRatio:t,mediaInfo:n,src:a}=e,{ratio:r,reduceBrightness:o,sizes:l}=(0,v.kH)();return i.createElement(c.V,{title:"Image",bgColor:c.V.BG_COLOR_ELEMENT},E.C.isInEditor()&&a&&i.createElement(s.W,null,n&&i.createElement(s.a,Object.assign({},n))),t?i.createElement(N,Object.assign({},e,{reduceBrightness:o,aspectRatio:r||e.aspectRatio,sizes:l})):i.createElement(P,Object.assign({},e,{reduceBrightness:o,aspectRatio:r||e.aspectRatio,sizes:l})))}))},72083:(e,t,n)=>{"use strict";n.d(t,{o:()=>o});var i=n(79613),a=n(67294);const r=n(78384).default.div.withConfig({displayName:"StyledPlaceholder"})`
    background-color: ${i.W.color["grey-100"]};
    color: ${i.W.color["grey-400"]};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;class o extends a.Component{render(){const{children:e}=this.props;return a.createElement(r,null,e)}}},62850:(e,t,n)=>{"use strict";n.d(t,{g:()=>u,E:()=>p});var i=n(67294),a=n(73154),r=n(58795),o=n(41979),l=n(10194),s=n(84744),c=n(46978),d=n(2987),m=n(37772);class u extends i.PureComponent{render(){const{linkUrl:e,linkTarget:t="_self",linkTitle:n,linkLabelRichtext:s,layerLink:u,layerPath:p,documentPath:h,downloadLink:g,layerType:f="CONTENT",originalCqPath:y,validationMessages:v}=this.props,b=(0,m.Z)(y),E=g||u?u?p:h:e,w=v&&c.C.isInEditor()&&i.createElement(r.e3,{severity:r.vR.WARNING},v.map(((e,t)=>i.createElement("span",{key:t},e))));return i.createElement(a.xv,{appearance:a.C2.copy200,bold:!0},w,i.createElement(d.c,{name:"linkElement"},i.createElement(o.O,{href:E,title:n,target:t,isDownloadLink:g,isLayerLink:u,layerProps:{layerType:f},showExternalIcon:!0,contentId:b,emphasis:"tertiary"},i.createElement(l.xQ,{richtext:s||[],inheritColor:!0,tag:a.rh.span,placeholder:"Type your link label..."}))))}}const p=(0,s.R)("vwa-ngw18/components/editorial/elements/linkElement",u)},9363:(e,t,n)=>{"use strict";n.d(t,{s:()=>me});var i=n(67294),a=n(81697),r=n(69522),o=n(99574),l=n(1413),s=n(84744),c=n(2987),d=n(46978),m=n(25798),u=n(92195),p=n(21118),h=n(73935);var g=n(92946),f=n(26781),y=n(64202),v=n(36452),b=n(2192),E=n(84182),w=n(22114),C=n(32221),S=n(6570);const k=e=>{const t=(0,y.Ng)(),n=(0,y.gq)(),{sizes:a}=(0,y.kH)(),r=(0,S.o)(),o=i.useRef(null),l="CENTER_CENTER",{posterSrc:s,onLoadOrError:c}=e,m=i.useCallback((()=>{c&&c()}),[c]);return i.useEffect((()=>{const e=o.current;e&&(e.complete?m():e.onload=e.onerror=m)}),[m]),s?i.createElement(g.Po,{ratio:e.ratio?v.f[e.ratio]:g.oM["16:9"]},i.createElement(f.r,{focalPoint:b.N[l]},(null==t?void 0:t.enablePictureElement)?(()=>{var t;const{src:a}=(0,E.f)(n,{originalSrc:s,imageAsset:e.posterAsset,focalPoint:l,aspectRatio:e.ratio},r),c=null===(t=e.responsiveMediaConfig)||void 0===t?void 0:t.map((t=>{const i=(0,E.f)(n,{originalSrc:s,imageAsset:e.posterAsset,focalPoint:l,aspectRatio:t.aspectRatio},r);return Object.assign(Object.assign({},t),i)}));return d.C.isInEditor()||!e.posterAsset?i.createElement(C.tk,{src:s,ref:o,config:c}):i.createElement(C.pJ,{src:a,ref:o,config:c})})():(()=>{if(d.C.isInEditor()||!e.posterAsset)return i.createElement(w.ct,{src:s,ref:o});const{src:t,srcSet:c,srcSetWebP:m}=(0,E.f)(n,{originalSrc:s,imageAsset:e.posterAsset,focalPoint:l,aspectRatio:e.ratio},r);return i.createElement(w.Ad,{src:t,ref:o,srcSet:c,"data-srcset-webp":m,sizes:a})})())):null};var L=n(96717);const x=()=>{},$={x:"center",y:"center"},_=e=>{const{videoRenditions:t,ratio:n,coverImageSrc:a,coverImageAsset:r,playsInLoop:o,subtitlesFileReference:l,title:s="",muted:c,onDurationChange:d=x,onCoverImageLoadOrError:u,videoPlayerProxy:p,videoContainerRef:g,responsiveMediaConfig:f}=e;return function(e){const{onPlay:y,innerRef:v,onDurationChange:b,onPause:E,onEnded:w,onTimeUpdate:C,onLoadedMetadata:S,muted:x,keepOriginalAspectRatio:_}=e,I=c||x,T=v.current,N=function(e,t,n,a){const r=n.current&&n.current.isInFullScreen?{width:window.innerWidth,height:window.innerHeight}:(0,m.j3)(a),o=i.useMemo((()=>{if(0===r.width&&0===r.height)return;const n=(0,m.HH)(e,t||"r_16_9",r);return n?n.scene7Src:void 0}),[r,e,t]);return function(e,t){const[n,a]=i.useState(e),r=t.current;let o=0;n!==e&&r&&(o=r.getTime()||0),i.useEffect((()=>{if(r&&r.isInitialized&&n&&e!==n){const e=r.isPlaying;r.pause(),r.load();const t=r.getPlayer();if(t){const n=t.getVideoElement();if(n&&n.current){const t=h.findDOMNode(n.current);t&&t.addEventListener("loadedmetadata",(()=>{r.setTime(o),e&&r.play()}),{once:!0})}}}}),[r,o,e,n]),i.useEffect((()=>{e!==n&&a(e)}),[e,n])}(o,n),o}(t,n,p,g),P=i.useMemo((()=>i.createElement(k,{posterSrc:a,posterAsset:r,ratio:n,onLoadOrError:u,responsiveMediaConfig:f})),[]),[O,R]=i.useState(!T||T.paused&&p.current&&!p.current.isInFullScreen),z=i.useCallback((()=>{y(),R(!1)}),[y]);i.useEffect((()=>{O&&T&&!T.paused&&R(!1)}),[O,T]);const D=i.useCallback((e=>{d(e),b()}),[b]);return i.createElement(i.Fragment,null,i.createElement(L.$,{innerRef:v,focalPoint:$,onPlay:z,onPause:E,onEnded:w,onTimeUpdate:C,onLoadedMetadata:S,onDurationChange:D,muted:I,loop:o,title:s,controls:!1,playsInline:!0,src:N,preload:"metadata",keepOriginalAspectRatio:_},l&&i.createElement("track",{kind:"subtitles",src:l,default:!0})),O&&P)}};var I=n(72083),T=n(4404);const N="r_16_9";function P(e,t,n){const a=(0,y.kH)(),r=n&&n.current&&n.current.isInFullScreen,{ratio:o=t||N,useParentAspectRatio:l=!1}=a;return i.useMemo((()=>l||e||r?"matchParentHeight":o),[e,o,l,r])}function O(e){const{coverImage:t,coverImageMediaInfo:n,disclaimers:a,fileReference:o,matchParent:l,videoMediaInfo:s,authoringLabel:c}=e,d=P(l,e.aspectRatio),m=i.useCallback((()=>i.createElement(L.$,{poster:t,focalPoint:$,src:o})),[t,o]);return i.createElement(r.V,{title:c||"Video Element",bgColor:r.V.BG_COLOR_ELEMENT},i.createElement(p.W,null,n&&i.createElement(p.a,Object.assign({},n)),s&&i.createElement(p.a,Object.assign({},s))),o?i.createElement(u.Rq,{videoComponent:m,aspectRatio:v.f[d]||"matchParentHeight",disclaimer:a}):i.createElement(I.o,null,i.createElement(T.Od,null)))}var R=n(78384),z=n(16767);function D(e){const t=(0,y.kH)(),{setInteractionData:n}=t;return i.useCallback(((t,i)=>{e(t),n&&n({type:"VIDEO",data:t,startedByIO:i})}),[e,n])}const A={create:(e,t)=>new IntersectionObserver(e,t)};class M{constructor(e){this.isInEditor=!1,this.start=()=>{if(!this.isInEditor&&this.mediaState&&this.mediaState.current){this.observer||(this.observer=this.observerFactory.create(this.intersectionObserverCallback,{threshold:this.mediaState.current.threshold}));const e=this.observedElement.current;e&&this.observer.observe(e)}},this.startDelayed=(e,t)=>{this.autoPlayTimeout=window.setTimeout((()=>{this.start(),t&&t()}),e)},this.stop=()=>{clearTimeout(this.autoPlayTimeout),!this.isInEditor&&this.observer&&this.observer.disconnect&&this.observer.disconnect()},this.intersectionObserverCallback=e=>{e.forEach((e=>{const{intersectionRatio:t}=e;this.mediaState&&this.mediaState.current&&this.mediaState.current.handleObserverEvent(t)}))};const{mediaState:t,observedElement:n,inEditor:i,observerFactory:a=A}=e;this.observerFactory=a,this.mediaState=t,this.observedElement=n,this.isInEditor=i}}class B{constructor(e){this.loadRatio=0,this.pauseRatio=1/3,this.playRatio=2/3,this._stoppedByIO=!1,this._startedPlaying=!1,this._startedLoading=!1,this._stoppedByCarousel=!1,this.handleObserverEvent=e=>{this.isInitialized&&(e>this.loadRatio&&this.observerCanLoad&&this.load(),e>this.playRatio&&this.observerCanPlay?this.play():e<this.pauseRatio&&this.observerCanPause&&this.pause())},this.handleCarouselEvent=e=>{this.playerProxy&&this.playerProxy.current&&this.playerProxy.current.isPlaying&&!e&&(this.pause(),this._stoppedByCarousel=!0)},this.load=()=>{this.playerProxy&&this.playerProxy.current&&(this.playerProxy.current.load(),this._startedLoading=!0)},this.play=()=>{this.playerProxy&&this.playerProxy.current&&(this.playerProxy.current.playByIO(),this._stoppedByIO=!1,this._stoppedByCarousel=!1,this._startedPlaying=!0)},this.pause=()=>{this.playerProxy&&this.playerProxy.current&&(this.playerProxy.current.pause(),this._stoppedByIO=!0)};const{autoPlay:t,autoPause:n,playerProxy:i}=e;this.autoPlay=t,this.autoPause=n,this.playerProxy=i}get observerCanLoad(){return!this._startedLoading&&this.autoPlay}get observerCanPlay(){return!this._startedPlaying&&this.autoPlay||this._stoppedByIO||this._stoppedByCarousel}get observerCanPause(){if(this.playerProxy&&this.playerProxy.current){const e=this.playerProxy.current;return e.isPlaying&&this.autoPause&&!e.isInFullScreen}return!1}get isInitialized(){return Boolean(this.playerProxy&&this.playerProxy.current&&this.playerProxy.current.isInitialized)}get threshold(){return[this.loadRatio,this.playRatio,this.pauseRatio]}}class F{constructor(e){this.player=e}get isInitialized(){return Boolean(this.player&&this.player.current)}get isPlaying(){const e=this.getPlayer();return!!e&&e.state.videoState===u.Ws.PLAYING}get isInFullScreen(){const e=this.getPlayer();return!!e&&e.state.displayMode===u.Fb.FULLSCREEN}load(){const e=this.getPlayer();e&&e.load()}play(){const e=this.getPlayer();e&&e.play()}playByIO(){const e=this.getPlayer();e&&e.playByIO()}pause(){const e=this.getPlayer();e&&e.pause()}setTime(e){const t=this.getPlayer();t&&t.setTime(e)}getTime(){const e=this.getPlayer();if(e)return e.getTime()}changeVolume(e){const t=this.getPlayer();t&&t.changeVolume(e)}getPlayer(){return Boolean(this.player&&this.player.current)?this.player.current:null}}function W(e,t,n){const a=i.useRef(null),r=i.useRef(null),o=i.useRef(new F(r)),l=i.useRef(new B({playerProxy:o,autoPlay:e,autoPause:n})),{active:s}=(0,y.xd)();l.current.handleCarouselEvent(s);const c=i.useRef(new M({mediaState:l,observedElement:a,inEditor:d.C.isInEditor()}));i.useEffect((()=>{const n=c.current;return(!t||t&&!e)&&n&&n.start(),function(){n&&n.stop()}}),[c,t,e]);const m=function(e,t){const n=function(e){return i.useCallback((t=>{const n=e.current;n&&(n.style.pointerEvents=t?"all":"none")}),[e])}(e);return i.useMemo((()=>{let e=z.Z;return new Promise((t=>{e=t})).then((()=>{t.current&&t.current.startDelayed(2e3,(()=>{n(!0)}))})),e}),[t,n])}(a,c);return{videoContainerRef:a,videoPlayerRef:r,videoPlayerProxy:o,handleCoverImageLoadOrError:e&&t?m:z.Z}}var H=n(65070);class j{constructor(e,t,n,i,a){this.videoTrackingState=(0,m.gh)(),this.setTrackingService=e=>{this.trackingService=e},this.trackVideoStateChange=e=>{e.videoState!==u.Ws.PLAYING||this.videoTrackingState.playEventFired||this.firePlayTrackingEvent(),e.currentTime>=this.videoTrackingState.nextMilestoneTime&&this.fireMilestoneTrackingEvent(e.currentTime)},this.trackPlayClick=()=>{this.trackingService&&this.trackingService.trackVideoEvent(H.u.VideoPlayer_VideoPlay_Click,this.contentId,this.createGeneralVideoTrackingData(),this.trackingData)},this.trackPauseClick=()=>{this.trackingService&&this.trackingService.trackVideoEvent(H.u.VideoPlayer_VideoPause_Click,this.contentId,this.createGeneralVideoTrackingData(),this.trackingData)},this.trackFullScreenEntered=()=>{this.trackingService&&this.trackingService.trackVideoEvent(H.u.VideoPlayer_Fullscreen_Open,this.contentId,this.createGeneralVideoTrackingData(),this.trackingData)},this.trackFullScreenExited=()=>{this.trackingService&&this.trackingService.trackVideoEvent(H.u.VideoPlayer_Fullscreen_Close,this.contentId,this.createGeneralVideoTrackingData(),this.trackingData)},this.initMilestones=e=>{const{duration:t}=e.currentTarget;if(t!==this.videoTrackingState.duration){const e=(0,m.yT)(t);this.videoTrackingState=Object.assign(Object.assign({},this.videoTrackingState),{milestoneTimes:e,duration:t,nextMilestoneIndex:0,nextMilestoneTime:e[0]})}},this.increaseMilestone=e=>{this.videoTrackingState.nextMilestoneIndex=e+1,this.videoTrackingState.nextMilestoneTime=this.videoTrackingState.milestoneTimes[this.videoTrackingState.nextMilestoneIndex]},this.createGeneralVideoTrackingData=()=>{const{title:e,fileReference:t}=this;return{playerName:"s2-video-player",id:"s2-video-player",platform:"aem",title:e,url:t}},this.firePlayTrackingEvent=()=>{this.trackingService&&this.trackingService.trackVideoEvent(H.u.VideoPlayer_Video_Start,this.contentId,this.createGeneralVideoTrackingData(),this.trackingData),this.videoTrackingState.playEventFired=!0},this.fireMilestoneTrackingEvent=e=>{if(this.trackingService){const t=(0,m.h8)(e,this.videoTrackingState.milestoneTimes);this.trackingService.trackVideoMilestoneEvent(this.contentId,Object.assign(Object.assign({},this.createGeneralVideoTrackingData()),(0,m.VT)(t,this.videoTrackingState)),this.trackingData),this.increaseMilestone(t)}},this.trackingService=a,this.trackingData=i,this.contentId=e,this.title=t,this.fileReference=n}}var V=n(37772),q=n(58402);function G(e){const t=function(e){const t=(0,y.V9)(),n=(0,q.h)(),{originalCqPath:a,contentName:r,title:o,fileReference:l}=e;return i.useRef(new j((0,V.Z)(a,r),o,l,n,t)).current}(e),n=i.useCallback((()=>{t.trackFullScreenEntered()}),[t]),a=i.useCallback((()=>{t.trackFullScreenExited()}),[t]),r=i.useCallback((()=>{t.trackPauseClick()}),[t]),o=i.useCallback((()=>{t.trackPlayClick()}),[t]),l=i.useCallback((e=>{t.initMilestones(e)}),[t]);return{onFullScreenEntered:n,onFullScreenExited:a,onPause:r,onPlay:o,onVideoStateChange:i.useCallback((e=>{t.trackVideoStateChange(e)}),[t]),onMilestoneInit:l}}const U=R.default.div.withConfig({displayName:"StyledAnimationElement"})`
    overflow: hidden;
    position: relative;
    height: 100%;
`;function X(e){const{altText:t,contentName:n,coverImage:a,coverImageAsset:r,disclaimers:o,fileReference:l,originalCqPath:s,playsInLoop:d,showTimeline:m,trackAnimationStart:p,matchParent:h,playButtonTitle:g,pauseButtonTitle:f,videoRenditions:y,transcriptFileReference:b,downloadTranscriptButtonTitle:E,responsiveMediaConfig:w}=e,{videoContainerRef:C,videoPlayerProxy:S,videoPlayerRef:k}=W(!0,!1,!0),L=P(h,e.aspectRatio),x=G({fileReference:l,title:t,contentName:n,originalCqPath:s}),$=D(p?x.onVideoStateChange:z.Z),I=i.useCallback(_({coverImageAsset:r,coverImageSrc:a,muted:!0,playsInLoop:d,ratio:v.f[L]?L:void 0,title:t,videoContainerRef:C,videoPlayerProxy:S,videoRenditions:y,responsiveMediaConfig:w}),[]);return i.createElement(c.c,{name:"animationElement"},i.createElement(U,{ref:C},i.createElement(u.Rq,{aspectRatio:v.f[L]||"matchParentHeight",disclaimer:o,onStateChanged:$,ref:k,showTimeline:m,videoComponent:I,playButtonTitle:g,pauseButtonTitle:f,transcriptFileReference:b,downloadTranscriptButtonTitle:E})))}function Y(e){const{name:t,description:n,duration:a,uploadDate:r,thumbnailUrl:o,contentUrl:l}=e,{enableVideoMicrodata:s}=(0,y.Ng)();return t&&n&&o&&r&&s?i.createElement("div",{itemScope:!0,itemType:"http://schema.org/VideoObject"},i.createElement("meta",{itemProp:"name",content:t}),i.createElement("meta",{itemProp:"description",content:n}),i.createElement("meta",{itemProp:"duration",content:a}),i.createElement("meta",{itemProp:"uploadDate",content:r}),i.createElement("meta",{itemProp:"thumbnailUrl",content:o}),i.createElement("meta",{itemProp:"contentUrl",content:l})):null}const K=i.memo((function(e){return d.C.isInEditor()?i.createElement(O,Object.assign({},e,{authoringLabel:"Animation Element"})):d.C.isInEditor()||e.fileReference?i.createElement(i.Fragment,null,i.createElement(Y,Object.assign({},e.schemaVideoModel)),i.createElement(X,Object.assign({},e))):null}),m._C),Q=(0,s.R)("vwa-ngw18/components/editorial/elements/animationElement",K);var Z=n(80955),J=n(89332),ee=n(21977);const te=(0,Z.Pi)((e=>{const{coverImageMediaInfo:t,disclaimers:n,fileReference:a,interactive:o=!0,matchParent:l,progressBarAriaLabel:s,title:c,videoMediaInfo:u}=e,h=d.C.isInEditor();if(!h&&!a)return null;const g=i.useRef(null),f=i.useContext(ee.f);i.useEffect((function(){const{aspectRatio:t,videoRenditions:n}=e,i=(0,m.j3)(g),a=(0,m.HH)(n,t,i);f.updateSrc(a)}));const y=f,v=y.isFullscreen,b=y.dragDirection,E=y.currentTime,w=y.videoSrc,C=!h&&!v,S=i.createElement(J.sA,{innerRef:g,currentTime:E,isFullscreen:v,src:w,dragDirection:b,onDragChanged:function(e){f.updateDrag(e)},animateOnLoad:C,interactive:!h&&o,disclaimers:n,matchParent:l,title:c,progressBarAriaLabel:s});return h?i.createElement(r.V,{title:"180 Degree Element",bgColor:r.V.BG_COLOR_ELEMENT},i.createElement(p.W,null,t&&i.createElement(p.a,Object.assign({},t)),u&&i.createElement(p.a,Object.assign({},u))),S):S})),ne=(0,s.R)("vwa-ngw18/components/editorial/elements/degree180Element",te),ie=R.default.div.withConfig({displayName:"StyledVideoElement"})`
    overflow: hidden;
    position: relative;
    height: 100%;
`;function ae(e){const{autoPlay:t,contentName:n,disclaimers:a,fileReference:r,matchParent:o,originalCqPath:l,title:s,videoRenditions:d,coverImageAsset:m,coverImage:p,autoPlayDelayed:h,soundControlTitle:g,pauseButtonTitle:f,playButtonTitle:y,disableFullScreenButtonTitle:b,enableFullScreenButtonTitle:E,soundProgressBarAriaLabel:w,timeProgressBarAriaLabel:C,subtitlesFileReference:S,transcriptFileReference:k,downloadTranscriptButtonTitle:L,forceOriginalAspectRatio:x,responsiveMediaConfig:$}=e,{videoContainerRef:I,videoPlayerProxy:T,videoPlayerRef:N,handleCoverImageLoadOrError:O}=W(t,h,!0),R=P(o,e.aspectRatio,T),z=G({fileReference:r,title:s,contentName:n,originalCqPath:l}),A=D(z.onVideoStateChange),{onPlay:M,onPause:B,onFullScreenEntered:F,onFullScreenExited:H,onMilestoneInit:j}=z,V=i.useCallback(_({videoPlayerProxy:T,ratio:v.f[R]?R:void 0,videoContainerRef:I,videoRenditions:d,coverImageAsset:m,coverImageSrc:p,onDurationChange:z?j:void 0,onCoverImageLoadOrError:O,muted:t,subtitlesFileReference:S,responsiveMediaConfig:$}),[]);return i.createElement(c.c,{name:"videoElement"},i.createElement(ie,{ref:I},i.createElement(u.Rq,{aspectRatio:v.f[R]||"matchParentHeight",autoPlay:t,disclaimer:a,onFullScreenEntered:F,onFullScreenExited:H,onPauseClick:B,onPlayClick:M,soundControlTitle:g,pauseButtonTitle:f,playButtonTitle:y,soundProgressBarAriaLabel:w,timeProgressBarAriaLabel:C,disableFullScreenButtonTitle:b,enableFullScreenButtonTitle:E,downloadTranscriptButtonTitle:L,transcriptFileReference:k,onStateChanged:A,ref:N,showFullscreenBtn:!0,showSoundControls:!0,showTimeline:!0,startUnmuted:!t,videoComponent:V,forceOriginalAspectRatio:x})))}const re=i.memo((function(e){return d.C.isInEditor()?i.createElement(O,Object.assign({},e)):d.C.isInEditor()||e.fileReference?i.createElement(i.Fragment,null,i.createElement(Y,Object.assign({},e.schemaVideoModel)),i.createElement(ae,Object.assign({},e))):null}),m._C),oe=(0,s.R)("vwa-ngw18/components/editorial/elements/videoElement",re);var le=n(50086),se=n(74028),ce=n(97597),de=n(25389);const me=(0,s.R)("vwa-ngw18/components/editorial/elements/mediaElement",(function(e){const{darkDisclaimer:t,disclaimers:n=[],enableItemInteractiveDisclaimer:s,hideItemBasedDisclaimers:d,interactive:m,mediaType:u,storeId:p,useParentAspectRatio:h}=e,g=(0,l.p)(n),{enablePageInteractiveDisclaimers:f}=(0,y.yR)(),v=g.filter((e=>void 0!==e.identifier&&"T6_OPENABLE"!==e.displayType&&(f||"T2_PAGE_BASED"!==e.displayType)&&(s||"T4_ITEM_BASED"!==e.displayType))),b=function(e){const t=(0,le.g)(),{disclaimerLabels:n}=(0,y.WS)(),r=e.filter((e=>void 0!==e.identifier&&"T6_OPENABLE"!==e.displayType)).map((e=>i.createElement("span",{"aria-label":n.disclaimerNrReferenceLabel+" "+e.identifier},e.identifier))),o=t===a.Nm.LTR?r:r.reverse(),s=o.length>1?o.reduce(((e,t)=>[e,l.y,t])):o;return[i.createElement(i.Fragment,{key:"disclaimer-non-openable-references"},s),...e.filter((e=>void 0!==e.identifier&&"T6_OPENABLE"===e.displayType)).map((e=>i.createElement(se.d,{identifier:e.identifier,ariaLabel:n.badgeToggleLabel+" "+e.identifier,onClick:e.toggleOpen,variant:"large",key:"disclaimer-openable-reference-"+e.identifier},e.identifier)))]}(g.filter((e=>void 0!==e.identifier&&(!f&&"T2_PAGE_BASED"===e.displayType||!d&&"T4_ITEM_BASED"===e.displayType)))),E=function(e){const{disclaimerLabels:t}=(0,y.WS)();return e.length>0?i.createElement(i.Fragment,null,e.map((e=>i.createElement(ce.s,{disclaimer:e,badgeToggleLabel:t.badgeToggleLabel,badgeVariant:"large",key:`disclaimer-badge-${e.identifier}`})))):void 0}(v),w=function(e){const{disclaimerLabels:t}=(0,y.WS)();return e.length>0?i.createElement(i.Fragment,null,e.map((e=>i.createElement(se.d,{identifier:e.identifier,ariaLabel:t.badgeToggleLabel+" "+e.identifier,onClick:e.toggleOpen,variant:"large"},e.identifier)))):void 0}(g.filter((e=>void 0!==e.identifier&&"T6_OPENABLE"===e.displayType))),C=d?[]:g.filter((e=>"T4_ITEM_BASED"===e.displayType)),S={disclaimers:{color:t?"dark":"light",interactiveReferences:E,openableReferences:w,staticReferences:b}},k={matchParent:h};let L;switch(u){case"ANIMATION":L=i.createElement(Q,Object.assign({},S,{path:"animation",matchParent:h,containerProps:k,responsiveMediaConfig:e.responsiveMediaConfig}));break;case"IMAGE":L=i.createElement(de.Kn,Object.assign({},S,{path:"image",useParentAspectRatio:h,containerProps:k,responsiveMediaConfig:e.responsiveMediaConfig}));break;case"VIDEO":L=i.createElement(oe,Object.assign({},S,{path:"video",matchParent:h,containerProps:k,responsiveMediaConfig:e.responsiveMediaConfig}));break;case"DEGREE_180":L=i.createElement(ne,Object.assign({},S,{storeId:p,path:"degree180",matchParent:h,containerProps:k,interactive:m}))}return i.createElement(r.V,{title:"Media Element",bgColor:r.V.BG_COLOR_ELEMENT},i.createElement(c.c,{name:"mediaElement"},i.createElement(o.lH,{disclaimers:C,color:"light"},L)))}))},67152:(e,t,n)=>{"use strict";n.d(t,{$g:()=>c,sw:()=>d});var i=n(67294),a=n(10194),r=n(37205),o=n(82755),l=n(84744);class s extends i.PureComponent{render(){const{hideItemDisclaimers:e}=this.props,t=i.createElement(a.xQ,Object.assign({},this.props));return e?t:i.createElement(o.C,null,(e=>i.createElement(i.Fragment,null,t,i.createElement(r.e,{disclaimers:e}))))}}const c=(0,l.R)("vwa-ngw18/components/editorial/elements/richtextFullElement",s),d=(0,l.R)("vwa-ngw18/components/editorial/elements/richtextSimpleElement",s)},74749:(e,t,n)=>{"use strict";n.d(t,{n:()=>w});var i=n(46410),a=n(73154),r=n(67294),o=n(78384),l=n(58795),s=n(79838),c=n(79567),d=n(64202),m=n(35499),u=n(37772),p=n(9363),h=n(67152),g=n(12778),f=n(58402),y=n(14525);const v=({origin:e,children:t})=>r.createElement(r.Fragment,null,r.createElement(l.e3,{severity:l.vR.INFO},r.createElement("span",null,"Teaser is created from ",e)),t),b=o.default.div.withConfig({displayName:"StyledTeaserLinkWrapper"})`
    margin-bottom: ${e=>e.theme.size.dynamic0100};
`;b.displayName="StyledTeaserLinkWrapper";const E=[{mediaQuery:`(max-width: ${i.u3.b560-1}px)`,sizes:"95vw",aspectRatio:"r_16_9"},{mediaQuery:`(min-width: ${i.u3.b560}px)`,sizes:"30vw",aspectRatio:"r_16_9"}];function w(e){var t;const n=(0,d.Ng)(),i=(0,d.V9)(),o=null===(t=(0,d.Y7)().getCurrentPageRootModel())||void 0===t?void 0:t.pageTrackingModel.category,{showCategory:l,teaserData:{teaser:{teaserElementLinkHref:w,categoryLinkHref:C,categoryLinkRichText:S,cqType:k,mediaExisting:L,categoryLayerLink:x,teaserLayerLink:$,originalCqPath:_,contentName:I,contentLabels:T},itemId:N,itemCount:P,itemPosition:O},showOriginInfo:R,teaserTrackingName:z,readingTimeElement:D}=e,A=(0,u.Z)(_,I),M=(0,f.h)(T,P,O);function B(){i.trackTeaserClick(A,w,z,M,{name:o})}const F=(0,m.x)(L,r.createElement(c.S5,{href:w,contentId:A,trackingActionOverride:B},r.createElement(s._,{configs:E},r.createElement(p.s,{containerProps:{matchParent:!0},path:`${N}/media`,responsiveMediaConfig:E,useParentAspectRatio:null==n?void 0:n.enablePictureElement})))),W=r.createElement(b,null,r.createElement(c._D,{href:w,contentId:A,isLayerLink:$,trackingActionOverride:B},r.createElement(h.sw,{path:`${N}/heading`,appearance:L?a.C2.headline250:a.C2.headline300,inheritColor:!0}))),H=(0,m.x)(!!S&&l,r.createElement(c.UH,{href:C,contentId:A,text:S||[],isLayerLink:x})),j=D?r.createElement(y.kv,{key:N,mediaElement:F},H,W,D):r.createElement(y.V0,{key:N,mediaElement:F},H,W);return R?r.createElement(v,{origin:k===g.T?"XF":"Stage",key:N},j):j}},12778:(e,t,n)=>{"use strict";n.d(t,{K:()=>b,T:()=>v});var i=n(67294),a=n(14525),r=n(32667),o=n(49181),l=n(52745),s=n(17475),c=n(79567);function d(e){const{teaserElementLinkHref:t,teaserElementLinkTarget:n,teaserLayerLink:r,trackingActionOverride:o,contentId:l}=e;return i.createElement(a.B$,{mediaElement:i.createElement(s.vn,{href:t,contentId:l,target:n,isLayerLink:r,trackingActionOverride:o})},i.createElement(c._D,{href:t,contentId:l,target:n,isLayerLink:r,trackingActionOverride:o},i.createElement(s.io,null)))}var m=n(64202),u=n(84744),p=n(46978),h=n(2987),g=n(35499),f=n(37772),y=n(44103);const v="vwa-ngw18/components/editorial/elements/editorialTeaserElement",b=(0,u.R)(v,(function(e){const t=(0,m.V9)(),{teaserElementLinkHref:n,teaserElementLinkTarget:u,teaserElementLayerPath:v,teaserLinkLayerType:b,teaserLayerLink:E,showCategoryElement:w,categoryLinkHref:C,categoryLinkRichText:S,categoryLinkTarget:k,categoryLayerLink:L,showAbstractElement:x,displayType:$,cqPath:_,showAdditionalLink:I,teaserElementLinkText:T,contentId:N,itemCount:P,itemPosition:O}=e,R=E?v:n,z=(0,g.x)(w,i.createElement(h.c,{name:"editorialTeaserCategory"},i.createElement(c.UH,{href:C,contentId:N,text:S||[],isLayerLink:L,target:k}))),D=(0,g.x)(x,s.PW),A=Boolean((I||(0,y.$g)(_))&&T),M=E?v:n,B=(0,g.x)(A,i.createElement(s.M8,{href:M,contentId:N,text:T,isLayerLink:E,layerType:b,target:u})),F=(e,n,i,a)=>{t.trackTeaserClick(N,R,"EditorialTeaserElement",Object.assign(Object.assign({},i),{itemCount:P,itemPosition:O})),E&&t.trackLayerLoad((0,f.Z)(v,a),i)};function W(e=!1){const t={href:R,contentId:N,layerType:b,target:u,isLayerLink:E,trackingActionOverride:F};return e?i.createElement(s.NN,Object.assign({},t)):i.createElement(s.vn,Object.assign({},t))}function H(t){return i.createElement(s.DH,{emptyLabel:"Editorial Teaser Element",tagTypeBroken:e.tagTypeBroken},t)}function j(e,t){const n="SMALL"===e;return i.createElement(i.Fragment,null,z,i.createElement(r.W,{gutter:o.X.dynamic0100,wrap:l.Hq.always},function(e=!1,t){const n=e?i.createElement(s.io,null):i.createElement(s.JJ,null);return t?n:i.createElement(h.c,{name:"editorialTeaserMainLink"},i.createElement(c._D,{href:R,contentId:N,layerProps:{layerType:b},target:u,isLayerLink:E,trackingActionOverride:F},n))}(n,t),!n&&D))}let V;switch($){case"SMALL":V=i.createElement(h.c,{name:"editorialTeaserElement"},i.createElement(a.D0,{mediaElement:W(!0)},j($,A),B));break;case"FIRST_LEVEL_A":V=i.createElement(h.c,{name:"editorialTeaserElement"},i.createElement(a.au,{mediaElement:W()},j($,A),B));break;case"FIRST_LEVEL_B":V=i.createElement(h.c,{name:"editorialTeaserElement"},i.createElement(a.qw,{mediaElement:W()},j($,A),B));break;case"FLYOUT":V=i.createElement(h.c,{name:"editorialTeaserElement"},i.createElement(d,Object.assign({},e,{teaserElementLinkHref:n,teaserElementLinkTarget:u,teaserLayerLink:E,trackingActionOverride:function(){t.trackNavigationTeaserClick(N,n,"NavigationalTeaser")}})));break;case"DEFAULT":default:V=i.createElement(h.c,{name:"editorialTeaserElement"},i.createElement(a.B$,{mediaElement:W()},j($,A),i.createElement(r.W,{padding:{bottom:o.X.static100}},B)))}return(0,y.$g)(_)?(q=V,i.createElement(s.eV,null,H(q))):p.C.isInEditor()?H(V):V;var q}))},17475:(e,t,n)=>{"use strict";n.d(t,{vn:()=>y,NN:()=>v,eV:()=>b,JJ:()=>E,PW:()=>w,io:()=>C,DH:()=>S,M8:()=>k});var i=n(67294),a=n(19138),r=n(46410),o=n(12940),l=n(87465),s=n(32667),c=n(49181),d=n(73154),m=n(69522),u=n(41979),p=n(79567),h=n(2987),g=n(9363),f=n(67152);const y=e=>i.createElement(p.S5,Object.assign({},e,{layerProps:{layerType:e.layerType||"CONTENT"}}),i.createElement(g.s,{path:"media"})),v=e=>{const t=i.createElement(y,Object.assign({},e));return i.createElement(i.Fragment,null,i.createElement(a.L,{min:r.u3.b560,max:r.u3.b1600},i.createElement(o.E,{columns:4},t)),i.createElement(a.L,{min:r.u3.b1600},i.createElement(o.E,{columns:3},t)))},b=({children:e})=>i.createElement(l.Ar,{appearance:{[r.u3.default]:[{name:"a",columns:24}],[r.u3.b560]:[{name:"a",columns:8}]}},i.createElement(s.W,{padding:{left:c.X.grid001,right:c.X.grid001},stretchContent:!0},e));function E(){return i.createElement("div",{"data-cy":"editorialTeaserElementHeading"},i.createElement(f.sw,{path:"heading",appearance:d.C2.headline300,inheritColor:!0,tag:d.rh.h3}))}const w=i.createElement("div",{"data-cy":"editorialTeaserElementCopy"},i.createElement(f.sw,{path:"abstract",appearance:d.C2.copy0200,inheritColor:!0,tag:d.rh.p}));function C(){return i.createElement("div",{"data-cy":"editorialTeaserElementHeading"},i.createElement(f.sw,{path:"heading",appearance:d.C2.headline250,inheritColor:!0,tag:d.rh.h3}))}const S=e=>i.createElement(m.V,{title:e.emptyLabel,bgColor:m.V.BG_COLOR_ELEMENT,tagTypeBroken:e.tagTypeBroken},e.children),k=e=>i.createElement(d.xv,{appearance:d.C2.copy200,bold:!0},i.createElement(h.c,{name:"additionalTeaserLink"},i.createElement(u.O,{href:e.href,contentId:e.contentId,isLayerLink:e.isLayerLink,layerProps:{layerType:e.layerType||"CONTENT"},target:e.target,showExternalIcon:!0,emphasis:"tertiary"},e.text)))},4404:(e,t,n)=>{"use strict";n.d(t,{XB:()=>a,Od:()=>r});var i=n(67294);const a=()=>i.createElement("svg",{width:"57px",height:"41px",viewBox:"0 0 57 41",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"image_icon",fill:"#001E50",fillRule:"nonzero"},i.createElement("path",{d:"M1.5,35.4300422 L15.5631022,21.2401823 L23.5765298,29.3192008 L40.3217797,11.8997401 L55.5,28.7191457 L55.5,2 C55.5,1.72385763 55.2761424,1.5 55,1.5 L2,1.5 C1.72385763,1.5 1.5,1.72385763 1.5,2 L1.5,35.4300422 Z M1.5,37.4955335 L1.5,39 C1.5,39.2761424 1.72385763,39.5 2,39.5 L55,39.5 C55.2761424,39.5 55.5,39.2761424 55.5,39 L55.5,30.8438942 L55.4432008,30.8951511 L40.2871028,14.1002599 L23.5933363,31.4661645 L15.5635397,23.370643 L1.53270406,37.5279454 L1.5,37.4955335 Z M57,2 L57,39 C57,40.1045695 56.1045695,41 55,41 L2,41 C0.8954305,41 -2.17492691e-13,40.1045695 -2.17492691e-13,39 L-2.10387263e-13,2 C-2.10387263e-13,0.8954305 0.8954305,-1.12881261e-14 2,-1.108522e-14 L55,-1.34927791e-15 C56.1045695,-1.14637179e-15 57,0.8954305 57,2 Z M15.5,17.75 C12.0482203,17.75 9.25,14.9517797 9.25,11.5 C9.25,8.04822031 12.0482203,5.25 15.5,5.25 C18.9517797,5.25 21.75,8.04822031 21.75,11.5 C21.75,14.9517797 18.9517797,17.75 15.5,17.75 Z M15.5,16.25 C18.1233526,16.25 20.25,14.1233526 20.25,11.5 C20.25,8.87664744 18.1233526,6.75 15.5,6.75 C12.8766474,6.75 10.75,8.87664744 10.75,11.5 C10.75,14.1233526 12.8766474,16.25 15.5,16.25 Z"})))),r=()=>i.createElement("svg",{width:"57px",height:"44px",viewBox:"0 0 57 44",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"video_icon",fill:"#001E50",fillRule:"nonzero"},i.createElement("path",{d:"M36.1144506,36.75 C36.4330165,35.7357233 37.3805896,35 38.5,35 C39.6194104,35 40.5669835,35.7357233 40.8855494,36.75 L50.4852313,36.75 C50.8994449,36.75 51.2352313,37.0857864 51.2352313,37.5 C51.2352313,37.9142136 50.8994449,38.25 50.4852313,38.25 L40.8855494,38.25 C40.5669835,39.2642767 39.6194104,40 38.5,40 C37.3805896,40 36.4330165,39.2642767 36.1144506,38.25 L6,38.25 C5.58578644,38.25 5.25,37.9142136 5.25,37.5 C5.25,37.0857864 5.58578644,36.75 6,36.75 L36.1144506,36.75 Z M2,1.5 C1.72385763,1.5 1.5,1.72385763 1.5,2 L1.5,42 C1.5,42.2761424 1.72385763,42.5 2,42.5 L55,42.5 C55.2761424,42.5 55.5,42.2761424 55.5,42 L55.5,2 C55.5,1.72385763 55.2761424,1.5 55,1.5 L2,1.5 Z M2,0 L55,0 C56.1045695,0 57,0.8954305 57,2 L57,42 C57,43.1045695 56.1045695,44 55,44 L2,44 C0.8954305,44 0,43.1045695 0,42 L0,2 C0,0.8954305 0.8954305,0 2,0 Z M24.33,13.412 L24.33,26.588 L35.516,20 L24.33,13.412 Z M24.197,11.979 C24.403,11.979 24.609,12.034 24.797,12.144 L36.403,18.979 C36.783,19.202 37,19.574 37,20 C37,20.426 36.782,20.798 36.402,21.022 L24.797,27.857 C24.61,27.967 24.403,28.022 24.197,28.022 C23.995,28.022 23.793,27.969 23.608,27.863 C23.227,27.645 23,27.25 23,26.807 L23,13.194 C23,12.75 23.227,12.355 23.608,12.138 C23.793,12.032 23.995,11.979 24.197,11.979 Z"}))))},72814:(e,t,n)=>{"use strict";n.d(t,{To:()=>l,__:()=>s,H$:()=>c});var i=n(67294),a=n(78384),r=n(10194),o=n(84744);const l="vwa-ngw18/components/editorial/elements/emptyCellElement";function s(e,t){return t?e.size.grid003:e.size.grid004}const c=a.default.div.withConfig({displayName:"StyledBaseCell"})`
    min-width: ${r.vj};
    width: ${e=>s(e.theme,e.isNarrow)};
    padding: ${e=>e.theme.size.static100};
`;class d extends i.PureComponent{render(){return i.createElement(c,{isNarrow:this.props.isNarrow},"This cell is empty")}}(0,o.R)(l,d)},12643:(e,t,n)=>{"use strict";n.d(t,{T:()=>o});var i=n(67294),a=n(84744),r=n(72814);const o="vwa-ngw18/components/editorial/elements/mergeColumnCellElement";class l extends i.PureComponent{render(){return i.createElement(r.H$,{isNarrow:this.props.isNarrow},"This cell will be merged with previous one")}}(0,a.R)(o,l)},57023:(e,t,n)=>{"use strict";n.d(t,{T:()=>o});var i=n(67294),a=n(84744),r=n(72814);const o="vwa-ngw18/components/editorial/elements/mergeRowCellElement";class l extends i.PureComponent{render(){return i.createElement(r.H$,{isNarrow:this.props.isNarrow},"This cell will be merged with one above")}}(0,a.R)(o,l)},25798:(e,t,n)=>{"use strict";n.d(t,{gh:()=>o,yT:()=>l,h8:()=>s,VT:()=>m,j3:()=>u,HH:()=>p,_C:()=>h});var i=n(92946),a=n(36452);const r=[.1,.25,.5,.75,.9,1],o=()=>({playEventFired:!1,milestoneTimes:[],duration:0,nextMilestoneIndex:-1,nextMilestoneTime:Number.MAX_SAFE_INTEGER}),l=e=>r.map((t=>e*t)),s=(e,t)=>{const n=(i=e,t.reduce(((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e)));var i;return t.indexOf(n)},c=e=>e<10?`0${e.toFixed(0)}`:e.toFixed(0),d=e=>{let t=Math.round(e);const n=Math.floor(t/3600);t-=3600*n;const i=Math.floor(t/60),a=t-60*i;return`${c(n)}:${c(i)}:${c(a)}`},m=(e,t)=>{const{milestoneTimes:n,duration:i}=t,a=n[e],o=((e,t)=>{const n=s(e,t);return-1===n?-1:100*r[n]})(a,n);return{length:d(i),milestone:o,timeplayed:d(a)}};function u(e){const t=e&&e.current&&e.current.getBoundingClientRect();return null!==t?{width:t.width,height:t.height}:{width:0,height:0}}function p(e,t,n){let r=null;if(!e||e.length<=0)return r;if((0!==n.width&&0!==n.height?n.height/n.width:9/16)>=(0,i.am)(a.f[t]||i.oM["16:9"])){const t=n.height;r=e.sort(((e,t)=>e.height-t.height)).reduce(((e,n)=>n.height>t?e:n))}else{const t=n.width;r=e.sort(((e,t)=>e.width-t.width)).reduce(((e,n)=>n.width>t?e:n))}return r}const h=(e,t)=>e.coverImage===t.coverImage&&e.fileReference===t.fileReference&&(!e.disclaimers||!t.disclaimers||e.disclaimers.staticReferences===t.disclaimers.staticReferences&&e.disclaimers.interactiveReferences===t.disclaimers.interactiveReferences&&e.disclaimers.openableReferences===t.disclaimers.openableReferences)},95168:(e,t,n)=>{"use strict";n.d(t,{s:()=>f});var i=n(67294),a=n(78384),r=n(10194);class o extends i.Component{render(){return i.createElement(r.xQ,Object.assign({},this.props))}}var l=n(37205),s=n(64202),c=n(82755),d=n(605),m=n(84744),u=n(2987),p=n(62850);const h=a.default.div.withConfig({displayName:"StyledBodyWrapper"})`
    margin-bottom: ${e=>e.theme.size.static300};
`,g=a.default.div.withConfig({displayName:"StyledLinkContainer"})`
    margin-top: ${e=>e.theme.size.dynamic0100};
`,f=(0,m.R)("vwa-ngw18/components/editorial/items/copyItem",(function(e){const{hideItemDisclaimers:t}=e,n=(0,s.ce)(),a=Boolean(n.layerType),r=i.createElement(i.Fragment,null,i.createElement(o,Object.assign({},e,{placeholder:"Type your text here..."})),function(e){const{linkHref:t,linkTitle:n,linkTarget:a,layerLink:r,layerType:o,layerPath:l,linkTextRichtext:s,originalCqPath:c,cqPath:d}=e;if((r?l:t)&&n)return i.createElement(u.c,{name:"copyAdditionalLink"},i.createElement(g,null,i.createElement(p.g,{layerLink:r,layerType:o,layerPath:l,linkUrl:t,linkLabel:n,linkLabelRichtext:s,linkTitle:n,linkTarget:a,originalCqPath:c,cqPath:d})))}(e));return i.createElement(d.Y,{getItemDisclaimers:!0},i.createElement(u.c,{name:"copyItem"},t||a?i.createElement("div",null,r):i.createElement(c.C,null,(e=>i.createElement(i.Fragment,null,i.createElement(h,null,r),i.createElement(l.e,{disclaimers:e}))))))}))},85059:(e,t,n)=>{"use strict";n.d(t,{WL:()=>te});var i=n(67294),a=n(78384),r=n(46410),o=n(73154),l=n(32667),s=n(49181),c=n(52745),d=n(87465),m=n(33700),u=n(83028),p=n(81697),h=n(47501);const g="--s2-topbar-height-expanded",f=m.iv`calc(${e=>e.theme.size.static200} + var(${g}, 0px))`,y=m.zo.div.withConfig({displayName:"EditorialStageWrapper"})`
    position: relative;
    /* This has no direct connection to the top bar component, it just sets the
	height of how large the expanded top bar for the current breakpoint is into
	a CSS variable. The CSS variable can be accessed inside this component.
	In the future we could possibly refactor this by somehow making these
	variables globally available.*/
    ${(0,h.xd)(g,!0)}
`;y.displayName="EditorialStageWrapper";const v=m.zo.div.withConfig({displayName:"MobileOverlay"})`
    position: relative;
    pointer-events: none;
    min-height: 80vh;
    display: flex;
    align-items: flex-end;

    // NOTE: static550 to keep enough place for video controls
    padding: ${f} ${e=>e.theme.size.grid002}
        ${e=>e.theme.size.static550};

    @media (min-width: ${r.u3.b560}px) {
        display: none;
    }
`;v.displayName="MobileOverlay";const b=m.zo.div.withConfig({displayName:"DesktopOverlay"})`
    display: none;
    @media (min-width: ${r.u3.b560}px) {
        display: block;
    }
`;function E(e,t){return e===p.Nm.RTL?t.reverse():t}b.displayName="DesktopOverlay";const w=m.zo.div.withConfig({displayName:"MediaArea"})`
    min-height: 80vh;
    position: relative;

    @media (min-width: ${r.u3.b560}px) {
        height: ${e=>e.isInEditor?"100%":"100vh"};
        max-height: 100vh;
    }
`,C=m.zo.div.withConfig({displayName:"MetaWrap"})``,S=m.zo.div.withConfig({displayName:"CopyWrap"})``,k=m.zo.div.withConfig({displayName:"ContentArea"})`
	padding: ${e=>e.theme.size.static250} ${e=>e.theme.size.grid002} 0;
	display: flex;
	flex-direction: column;

	${C} + ${S} {
		margin-top: ${e=>e.theme.size.static350}
	}

	@media (min-width: ${r.u3.b560}px) {
		min-height: ${e=>e.isInEditor?"100%":"100vh"};
		padding: ${f} ${e=>e.theme.size.grid002} ${e=>e.theme.size.grid002};

		* + ${C} {
			margin-top: ${e=>e.theme.size.static200};
		}
		* + ${S} {
			margin-top: ${e=>e.theme.size.static450};
		}
	}
`,L=m.zo.div.withConfig({displayName:"ContentBoxWrap"})`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
`,x=m.zo.div.withConfig({displayName:"DesktopReadingTimeBox"})`
    flex: 1;
    display: none;
    @media (min-width: ${r.u3.b560}px) {
        display: initial;
    }
`,$=m.zo.div.withConfig({displayName:"AbsoluteMedia"})`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`,_=e=>{const{media:t,overlay:n,copy:o,metaInfo:l,readingTimeBox:s,disclaimersOverlay:c,isInEditor:m}=e;return i.createElement(y,null,i.createElement(a.ThemeContext.Consumer,null,(e=>{return i.createElement(d.Ar,{appearance:(a=e.direction,{[r.u3.default]:[{name:"media",columns:24},{name:"content",columns:24}],[r.u3.b560]:E(a,[{name:"media",columns:11},{name:"content",columns:13}]),[r.u3.b1600]:E(a,[{name:"media",columns:12},{name:"content",columns:12}])})},i.createElement(w,{isInEditor:m},i.createElement($,null,t),i.createElement(v,null,i.createElement(u.f,{theme:"image"},n)),!m&&c),i.createElement(k,{isInEditor:m},i.createElement(L,null,n&&i.createElement(b,null,n),l&&i.createElement(C,null,l),o&&i.createElement(S,null,o)),s&&i.createElement(x,null,s)));var a})))};var I=n(69522),T=n(79838),N=n(99574),P=n(64202),O=n(29821),R=n(28025),z=n(84744),D=n(46978),A=n(2987),M=n(85678),B=n(53159),F=n(9363),W=n(95168),H=n(98527);const j=a.default.div.withConfig({displayName:"StyledFullScreenContainer"})`
    width: 100%;
    height: 100%;
`;j.displayName="StyledFullScreenContainer";const V=e=>i.createElement(j,null,e.children),q=a.default.div.withConfig({displayName:"StyledEditModeWrapper"})`
    display: flex;
    justify-content: space-between;
`,G=a.default.div.withConfig({displayName:"StyledEditModeImageWrapper"})`
    position: relative;
    min-width: 40vw;
    min-height: 300px;
    max-width: 50vw;
    max-height: 800px;

    & > * {
        height: 100%;
    }

    * {
        max-width: 100%;
        max-height: 100%;
    }
`,U=a.default.div.withConfig({displayName:"StyledEditModeTextWrapper"})`
    padding: 50px;
    display: flex;
    justify-content: center;
    flex: 1;
    flex-direction: column;
    text-align: left;
`,X=a.default.div.withConfig({displayName:"StyledPublishModeMediaOverlay"})`
    /*
     * Reduced brightness would be better done by CSS filter property, but that creates
     * a new z-index context, which messes up the layout on the Z axis. The correct
     * layout is: media in the bottom layer, stage overlay in the middle layer and
     * item/section disclaimers in the upper layer. Hence this workaround.
     */
    @media (max-width: ${r.u3.b560-1}px) {
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: #000;
        opacity: 0.2;
        pointer-events: none;
    }
`,Y=a.default.div.withConfig({displayName:"StyledMediaContainer"})`
    height: 100%;
    > div > div {
        // Sets height 100% on the child of child so the media is visible
        height: 100%;
    }
`,K=i.createElement(o.xv,{appearance:o.C2.headline400},i.createElement(B.$,{path:"heading",hideItemDisclaimers:!0})),Q=()=>i.createElement(W.s,{path:"copy",hideItemDisclaimers:!0}),Z=[{mediaQuery:`(max-width: ${r.u3.b560-1}px), (max-aspect-ratio: 4/3)`,aspectRatio:"r_9_16"},{mediaQuery:"(min-aspect-ratio: 4/3) and (max-aspect-ratio: 21/9)",aspectRatio:"r_1_1"},{mediaQuery:"(min-aspect-ratio: 21/9) and (max-aspect-ratio: 26/9)",aspectRatio:"r_4_3"},{mediaQuery:"(min-aspect-ratio: 26/9)",aspectRatio:"r_16_9"}],J=[{mediaQuery:`(max-width: ${r.u3.b560-1}px), (max-aspect-ratio: 4/3)`,aspectRatio:"r_9_16"},{mediaQuery:"(max-aspect-ratio: 4/3), (min-aspect-ratio: 21/9)",ifTrue:"hide",aspectRatio:"r_1_1"},{mediaQuery:"(min-aspect-ratio: 21/9) and (max-aspect-ratio: 26/9)",aspectRatio:"r_4_3"},{mediaQuery:"(max-aspect-ratio: 26/9)",ifTrue:"hide",aspectRatio:"r_16_9"}],ee=({category:e})=>e?i.createElement(A.c,{name:"categoryElement"},i.createElement(o.xv,{appearance:o.C2.headline200,bold:!0},e)):null,te="vwa-ngw18/components/editorial/sections/editorialStageSection";(0,z.R)(te,(function(e){const t=(0,P.Ng)();return D.C.isInEditor()?(()=>{const{anchorId:t,contentMetaData:n,tagTypeBroken:a}=e;return i.createElement(I.V,{anchorId:t,title:"S106 Editorial Stage",bgColor:I.V.BG_COLOR_SECTION,tagTypeBroken:a},i.createElement(O.a,{getItemDisclaimers:!0},(e=>i.createElement(i.Fragment,null,i.createElement(q,{id:t},i.createElement(G,null,i.createElement(F.s,{path:"media",hideItemBasedDisclaimers:!0,enableItemInteractiveDisclaimer:!0,useParentAspectRatio:!0}),i.createElement(N.oZ,{disclaimers:e,color:"light",type:"item"})),i.createElement(U,null,i.createElement(ee,{category:n.category}),K,i.createElement(M.C,Object.assign({},n)),i.createElement(Q,null)))))))})():(()=>{const{contentMetaData:n,contentLabels:a,contentName:r,contentId:o,anchorId:d,mediaType:m}=e,u="ANIMATION"===m,p=(null==t?void 0:t.enablePictureElement)?Z:J,h=i.createElement(V,null,i.createElement(R.YN.Provider,{value:{sizes:"(min-width: 768px) 50vw, 100vw",useParentAspectRatio:!0}},i.createElement(Y,null,i.createElement(T._,{configs:p,matchParent:!0},i.createElement(F.s,{enableItemInteractiveDisclaimer:!0,hideItemBasedDisclaimers:!0,path:"media",responsiveMediaConfig:p,useParentAspectRatio:!0,containerProps:{matchParent:!0}}))),i.createElement(X,{disableOverlayFilter:u}))),g=i.createElement(l.W,{gutter:s.X.static200,wrap:c.Hq.always},i.createElement(ee,{category:n.category}),K);return i.createElement(H.U,{sectionId:o,anchorId:d,contentLabels:a,contentName:r},i.createElement(O.a,{getItemDisclaimers:!0},(e=>i.createElement(_,{disclaimersOverlay:i.createElement(N.oZ,{disclaimers:e,color:"light",type:"item"}),media:h,overlay:g,metaInfo:i.createElement(M.C,Object.assign({},n)),copy:i.createElement(Q,null)}))))})()}))},98527:(e,t,n)=>{"use strict";n.d(t,{U:()=>u});var i=n(67294),a=n(80955),r=n(88257),o=n(64202),l=n(58402);function s(e,t,n,a){const r=function(){const[e,t]=i.useState(!1);return i.useEffect((()=>{if(!e){const e=()=>t(!0);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}}),[t,e]),e}(),l=(0,o.pJ)().getLocation(),[s,c]=i.useMemo((()=>{const e=l.hash.substring(1);return[0===e.length,!(!a||decodeURIComponent(e)!==a)]}),[]);return i.useCallback((i=>!n&&(r||c||s)&&function(e,t,n){const i=e.intersectionRatio>t,a=function(e,t){const n=t.height/e.height;return Number.isNaN(n)?0:n}(e.rootBounds,e.intersectionRect)>n;return i||a}(i,e,t)),[n,r,e,t,s,c])}var c=n(82414),d=n(83504);const m=(0,a.Pi)((e=>{const{anchorId:t,children:n,className:a,sectionId:c,additionalTrackingData:m,contentLabels:u,teaserList:p}=e,h=i.useRef(null),g=(0,o.VY)().isSmoothScrollRunning,f=p?p.teasers:void 0,y=i.useMemo((()=>({sectionId:c,teaserList:f,contentLabels:u,additionalTrackingData:m})),[c,f,u,m]),v=(0,o.K5)();return function(e,t,n,a,r,c,d,m){const u=s(a,r,d,m),p=function(e){const t=(0,o.V9)(),n=(0,l.h)(e.contentLabels);return i.useCallback((i=>{i.forEach((()=>{t&&t.trackEnterViewport(e.sectionId,e.teaserList,n,e.additionalTrackingData)}))}),[t,e,n])}(t);var h;!function(e,t,n,a,r,o){const l=i.useRef(null),s=i.useRef(!1),c=i.useCallback((e=>{const i=s.current,r=e.length>0&&n(e[0]);if(r&&!i){const n=window.setTimeout((()=>{t(e)}),a);l.current=()=>window.clearTimeout(n)}else!r&&l.current&&(l.current(),l.current=null);s.current=r}),[n,t,a]);i.useEffect((()=>{if(!o)return;const t=new IntersectionObserver(c,{threshold:r});return e.current&&t.observe(e.current),function(){t.disconnect()}}),[c,r,e,o])}(e,(h=p,i.useCallback((e=>{h(e)}),[h])),u,n,i.useMemo((()=>{return e=a,Array(10).fill(0).map(((t,n)=>(n+1)/10*e));var e}),[a]),c)}(h,y,1e3,.299,.499,!((null==v?void 0:v.isPersonalizable)&&(null==v?void 0:v.isLoading)||(null==p?void 0:p.loading)),g,t),function(e,t){const n=function(e){const t=(0,o.fv)(),{sectionGroupAnchorId:n}=(0,o.u0)();return function(i){if(i.length>0){const[a]=i;a.intersectionRatio>0&&e&&t.setActiveInPageNavigationItem(e,n)}}}(t);i.useEffect((()=>{const i=new IntersectionObserver(n,{rootMargin:"0px 0px -75% 0px",threshold:1e-5});return t&&e.current&&i.observe(e.current),function(){i.disconnect()}}),[t,n,e])}(h,t),function(e,t){const n=function(e){const t=(0,o.fv)(),{sectionGroupContentId:n}=(0,o.u0)();return function(i){if(i.length>0){const[a]=i;a.intersectionRatio>0&&e&&t.setActiveSection(e,n)}}}(t);i.useEffect((()=>{const t=new IntersectionObserver(n,{rootMargin:"-66% 0px -33% 0px",threshold:1e-5});return e.current&&t.observe(e.current),function(){t.disconnect()}}),[n,e])}(h,c),i.createElement(i.Fragment,null,i.createElement(d.u,{sectionId:c,sectionRef:h}),i.createElement(r.P,{anchorId:t,innerRef:h,className:a,isSection:!0},n))}));function u(e){const{sectionId:t,contentName:n=""}=e;return i.createElement(c.o.Provider,{value:{sectionId:t,contentName:n}},i.createElement(m,Object.assign({},e)))}},5693:(e,t,n)=>{"use strict";n.d(t,{f:()=>w});var i=n(73154),a=n(67294),r=n(69522),o=n(29821),l=n(78384),s=n(46410),c=n(83028),d=n(87465);const m=l.default.div.withConfig({displayName:"StyledWrapper"})`
    padding-bottom: ${e=>e.theme.size.dynamic0100};
    padding-top: ${e=>e.theme.size.dynamic0250};
    padding-left: ${e=>e.theme.size.grid002};
    padding-right: ${e=>e.theme.size.grid002};

    @media (min-width: ${s.u3.b560}px) {
        padding-left: 0;
        padding-right: 0;
    }

    text-align: center;
`;m.displayName="StyledWrapper";const u=l.default.div.withConfig({displayName:"StyledHeading"})`
    @media (min-width: ${s.u3.b560}px) {
        padding-left: ${e=>e.theme.size.grid005};
        padding-right: ${e=>e.theme.size.grid005};
    }
    margin-bottom: ${e=>e.theme.size.dynamic0100};
`;u.displayName="StyledHeading";const p=l.default.div.withConfig({displayName:"StyledSubHeading"})`
    @media (min-width: ${s.u3.b560}px) {
        padding-left: ${e=>e.theme.size.grid006};
        padding-right: ${e=>e.theme.size.grid006};
    }
    margin-bottom: ${e=>e.theme.size.dynamic0100};
`;p.displayName="StyledSubHeading",l.default.div.withConfig({displayName:"StyledBody"})`
    margin-top: ${e=>e.theme.size.dynamic0150};
`.displayName="StyledBody";const h=e=>{const{heading:t,subheading:n}=e;return a.createElement(c.f,{theme:"main"},a.createElement(d.Ar,null,a.createElement(m,null,a.createElement(u,null,t),a.createElement(p,null,n))))};h.displayName="SimpleStage";var g=n(84744),f=n(53159),y=n(95168),v=n(98527);const b=a.createElement(f.$,{path:"heading",order:"H1"}),E=a.createElement(y.s,{path:"copy",appearance:i.C2.headline300}),w="vwa-ngw18/components/editorial/sections/simpleStageSection";(0,g.R)(w,(function(e){const{contentLabels:t,contentId:n,anchorId:i,contentName:l,tagTypeBroken:s}=e;return a.createElement(r.V,{anchorId:i,title:"S120 Simple Stage",bgColor:r.V.BG_COLOR_SECTION,tagTypeBroken:s},a.createElement(v.U,{sectionId:n,anchorId:i,contentLabels:t,contentName:l},a.createElement(o.a,null,(()=>a.createElement(h,{heading:b,subheading:E})))))}))},72414:(e,t,n)=>{"use strict";n.d(t,{hm:()=>X,d4:()=>q,Yo:()=>H});var i=n(87465),a=n(67294),r=n(7635),o=n(29821),l=n(33700),s=n(46410);const c=({children:e,attributeKey:t="layout",attributeValue:n})=>a.createElement(a.Fragment,null,a.Children.map(e,(e=>a.isValidElement(e)?a.cloneElement(e,{[`data-${t}`]:n}):e))),d="magazine-grid-headline",m=l.zo.div.withConfig({displayName:"StyledMagazineTeaserGridContainer"})`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    grid-row-gap: ${e=>e.theme.size.dynamic0150};
    grid-column-gap: ${e=>e.theme.size.grid001};
    padding: 0 ${e=>e.theme.size.grid001};

    @media (min-width: ${s.u3.b560}px) {
        grid-template-columns: repeat(3, 1fr);
        padding: 0 ${e=>e.theme.size.grid002};
    }

    & [data-${"layout"}=${d}] {
        justify-self: center;

        @media (min-width: ${s.u3.b560}px) {
            grid-column: 1/4;
        }
    }
`,u=e=>{const{teaserItems:t,headlineElement:n}=e;return a.createElement(m,null,n&&a.createElement(c,{attributeValue:d},n),t.map(((e,t)=>{const n=e.key?e.key:`magazine_teaser_grid_item_${t}`;return a.createElement("div",{key:n},e)})))};var p=n(95844),h=n(84744),g=n(46978),f=n(2987),y=n(74749),v=n(98527),b=n(95091),E=n(80955),w=n(59093),C=n(85713),S=n(10285),k=n(50273),L=n(41979),x=n(64202),$=n(78384);const _=$.default.ul.withConfig({displayName:"StyledPageNumberWrapper"})`
    display: flex;
    gap: ${e=>e.theme.size.static300};
    padding: 0 ${e=>e.theme.size.static200};
`,I=$.default.nav.withConfig({displayName:"StyledPagination"})`
    display: inline-flex;
    padding: 0 ${e=>e.theme.size.static200};
    align-items: center;
`;I.displayName="StyledPagination";const T=a.createElement("span",{"aria-hidden":"true"},"..."),N=e=>{const[t,n]=a.useState([]),{currentPageIdx:i,paginationLinks:r,previousPageButton:o,nextPageButton:l,navAriaLabel:s}=e,c=r.length,d=a.useCallback(((e=0)=>c!==4+e),[c]);a.useEffect((()=>{if(c<5&&d())n(r);else{const e=Math.max(i-2,0),t=Math.min(i+2+1,c);n(r.slice(e,t))}}),[i,c,r,d]);const m=i+2+1<c&&d(-1)?a.createElement(a.Fragment,null,i+2<c-2&&T,[...r].pop()):null,u=i>2?a.createElement(a.Fragment,null,[...r].shift(),i>3&&T):null,p=0===i,h=i+1>=c;return 0===t.length?null:a.createElement(I,{role:"navigation","aria-label":s},!p&&o,a.createElement(_,null,u,t,m),!h&&l)};var P=n(50660),O=n(76057),R=n(81697);function z(e){return`${H}${e}`}const D=l.zo.div.withConfig({displayName:"StyledSpinnerWrapper"})`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: middle;
`;D.displayName="StyledSpinnerWrapper";const A=l.zo.div.withConfig({displayName:"StyledPaginationWrapper"})`
    display: flex;
    justify-content: center;
    padding: ${e=>e.theme.size.dynamic0250}
        ${e=>e.theme.size.grid002};
`;A.displayName="StyledPaginationWrapper";const M=l.zo.span.withConfig({displayName:"StyledPageNumberWrapper"})`
    display: inline-block;
    font-weight: ${e=>e.isActive?e.theme.text.weight.bold:e.theme.text.weight.regular};
`;M.displayName="StyledPageNumberWrapper";const B=l.zo.li.withConfig({displayName:"StyledPageLinkFocusWrapper"})`
    list-style: none;

    position: relative;
    z-index: 1;

    & a {
        ${e=>(0,R.G$)(e)}
    }

    & a::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        width: 100%;
        padding: 0.44em 0.73em;
        font-size: ${e=>e.theme.textAppearances.copy200.static.fontSize};
        background-color: ${e=>e.theme.border.color.secondary};
        border-radius: 100px;
        opacity: ${e=>e.isActive?1:0};
        z-index: -1;
    }

    &&& a:focus span {
        background-color: unset;
        color: unset;
    }

    ${e=>e.isActive&&l.iv`
            & a:focus::before {
                padding: 0 1em;
            }
        `}
`;B.displayName="StyledPageLinkFocusWrapper";const F=(0,E.Pi)((e=>{const{preloadedPageIndex:t,currentPageIndex:n,historyService:i,pageCount:r,translations:o}=e,l=a.useRef(null),s=(0,x.c3)().getSingleton("ModelClient"),c=(0,x.pJ)(),d=(0,x.V7)(),m=(0,x.oh)().value||"/jcr:content/",u=m.split("jcr:content")[1],p="pager_"+m,h=t===n?m:d.getCustomContentPath(`${n}`,p),g=d.getData(h);a.useEffect((()=>{const e=`${c.pagePath}/jcr:content${u}.model.json/__${P.CL}/${z(n)}`;g||s.fetch(e).then((e=>{d.insertCustomContent(`${n}`,p,e)}))}),[g,p,u,m,d,c,s,n]);const f=e=>{var t;(0,O.ld)({animationDuration:400,distance:((null===(t=null==l?void 0:l.current)||void 0===t?void 0:t.getBoundingClientRect().top)||0)-100,onScrollEnd:()=>{i.history.push({pathname:0===e?"/":z(e)})}})},y=[...Array(r)].map(((e,t)=>a.createElement(B,{isActive:n===t},a.createElement(L.O,{onClick:()=>f(t),emphasis:"none",key:t,href:"javascript:void(0);",rel:n>t?"prev":n<t?"next":void 0,"aria-label":`${o["magazine.pageLink"]} ${t+1}`,"aria-current":n===t},a.createElement(M,{isActive:n===t},t+1))))),v=a.createElement(C.P,{onClick:()=>f(n+1),href:"javascript:void(0);","aria-label":o["magazine.nextPage"],tag:"a",size:"small"}),b=a.createElement(S.t,{onClick:()=>f(n-1),href:"javascript:void(0);","aria-label":o["magazine.prevPage"],tag:"a",size:"small"});return g?a.createElement("div",{ref:l},a.createElement(X,{path:h,renderPage:!0}),y.length>0&&r>1&&a.createElement(A,null,a.createElement(N,{navAriaLabel:o["magazine.navigation"],paginationLinks:y,currentPageIdx:n,nextPageButton:v,previousPageButton:b}))):a.createElement(D,null,a.createElement(k.$,{variant:"large"}))})),W="S134 Magazine Teaser Grid",H="page_";function j(e){const{cqItems:t,cqItemsOrder:n,showCategory:i}=e,r=t,o=n.filter((e=>"heading"!==e)).map((e=>({itemId:e,teaser:r[e]}))).filter((e=>Boolean(e.teaser.teaserElementLinkHref))),l=o.map(((e,t)=>{const{articleMeta:n}=e.teaser,r=a.createElement(a.Fragment,null,a.createElement(f.c,{name:"magazineTeaserReadingTime"},a.createElement("strong",null,n.readingTime," ",n.minutesLabel))," ",n.readLabel),l=a.createElement(a.Fragment,null,"â"),s=a.createElement(p.m,{textAlign:p.I.left,noWormyAnimation:!0,readingTime:n.readingTime&&n.readingTime>=0?r:l});return a.createElement(f.c,{name:"secondLevelTeaserElement"},a.createElement(y.n,{teaserTrackingName:"Magazine teaser grid",showCategory:i,showOriginInfo:g.C.isInEditor(),readingTimeElement:s,teaserData:{teaser:e.teaser,itemPosition:t+1,itemId:e.itemId,itemCount:o.length}}))}));return a.createElement(u,{teaserItems:l})}function V(e){const{anchorId:t,contentLabels:n,contentId:i,contentName:l,tagTypeBroken:s}=e;return a.createElement(o.a,null,(o=>a.createElement(b.m,{anchorId:t,emptyLabel:W,tagTypeBroken:s},a.createElement(v.U,{anchorId:t,sectionId:i,contentLabels:n,contentName:l},a.createElement(j,Object.assign({},e)),a.createElement(r.e,{disclaimers:o})))))}const q="pager",G=(0,E.Pi)((function(e){const t=(0,x.E4)().getHistoryService(q),{pageCount:n,pageIndex:l,anchorId:s,contentLabels:c,contentId:d,contentName:m,translations:u}=e;return a.createElement(w.F0,{history:t.history},a.createElement(o.a,null,(e=>a.createElement(i.Ar,{allowOverflowingContent:!0},a.createElement(b.m,{anchorId:s,emptyLabel:W},a.createElement(v.U,{anchorId:s,sectionId:d,contentLabels:c,contentName:m},a.createElement(w.AW,{path:"/",exact:!0,render:e=>a.createElement(F,{translations:u,historyService:t,currentPageIndex:0,pageCount:n,preloadedPageIndex:l})}),a.createElement(w.AW,{path:`/${H}:index`,exact:!0,render:e=>{const i=parseInt(e.match.params.index,10);return a.createElement(F,{translations:u,historyService:t,currentPageIndex:i,pageCount:n,preloadedPageIndex:l})}}),a.createElement(r.e,{disclaimers:e})))))))})),U=a.memo((e=>e.renderPage?a.createElement(j,Object.assign({},e)):g.C.isInEditor()?a.createElement(V,Object.assign({},e)):a.createElement(G,Object.assign({},e)))),X=(0,h.R)("vwa-ngw18/components/editorial/sections/magazineTeaserGridSection",U)},42e3:(e,t,n)=>{"use strict";n.d(t,{U:()=>b});var i=n(81697),a=n(67294),r=n(64317),o=n(33700),l=n(46410),s=n(32667),c=n(52745),d=n(32139),m=n(25798);const u="350ms linear",p="animation",h=o.zo.div.withConfig({displayName:"StyledIconWrapper"})`
    margin-${e=>(0,i.rz)(e.theme.direction)}: ${e=>e.theme.size.grid001};
    margin-inline-start: ${e=>e.theme.size.grid001};
    color: ${e=>e.theme.interaction.recipe450.default};

    svg {
        transition: transform ${u};
        display: ${e=>e.isOpen&&e.hideHeadIcon&&"none"};

        transform: ${e=>e.isOpen?"rotateX(180deg)":"rotateX(0)"};
        transform-origin: 50% 50%;
    }
`,g=o.zo.div.withConfig({displayName:"StyledAccordion"})`
    border-bottom: ${e=>e.showAccordionBorder&&`solid 2px ${e.theme.border.color.secondary}`};

    padding-top: ${e=>e.theme.size.dynamic0100};
    padding-bottom: ${e=>e.isOpen?e.hideHeadBorder?0:e.theme.size.dynamic0040:e.theme.size.dynamic0100};

    @media (min-width: ${l.u3.b1600}px) {
        padding-bottom: ${e=>e.isOpen&&e.hideHeadBorder?0:e.theme.size.dynamic0050};
    }
`,f=o.zo.button.withConfig({displayName:"StyledAccordionHead"})`
    padding: 0;
    border: 0;
    border-bottom: ${e=>e.hideHeadBorder?"none":`1px solid ${e.theme.interaction.recipe100.default}`};
    background: none;
    appearance: none;
    text-align: inherit;

    width: 100%;

    cursor: ${e=>e.hideHeadIcon&&e.isOpen?"auto":"pointer"};
    user-select: none;

    :focus {
        outline: 2px solid ${e=>e.theme.focusColor};
        outline-offset: ${e=>e.theme.size.static100};

        ${h} {
            color: ${e=>e.theme.interaction.recipe450.hover};
        }
    }}
`,y=o.zo.div.withConfig({displayName:"StyledAccordionBody"})`
    overflow: visible;
    transition: height ${u}, opacity ${u};

    /* setting default values before animation is applied */
    height: ${e=>e.isOpen?"auto":"0"};
    /* visibility hidden needed so closed content is not focussable */
    visibility: ${e=>e.isOpen?"visible":"hidden"};

    @media (min-width: ${l.u3.b960}px) {
        overflow: ${e=>e.isOpen?"visible":"hidden"};
    }

    &.${p}-enter {
        opacity: 0;
        height: 0;
        visibility: visible;
    }

    &.${p}-enter-active {
        opacity: 1;
        height: ${e=>e.height}px;
        visibility: visible;
    }

    &.${p}-enter-done {
        opacity: 1;
        height: auto;
        visibility: visible;
    }

    &.${p}-exit {
        opacity: 1;
        height: ${e=>e.height}px;
        visibility: visible;
    }

    &.${p}-exit-active {
        opacity: 0;
        height: 0;
        visibility: visible;
    }

    &.${p}-exit-done {
        opacity: 0;
        height: 0;
        visibility: hidden;
    }
`,v=o.zo.div.withConfig({displayName:"StyledAccordionBodyContent"})`
    margin-top: ${e=>e.theme.size.dynamic0020};
    padding-bottom: ${e=>e.theme.size.dynamic0100};
    padding-right: ${e=>!e.hideHeadIcon&&!e.showAccordionBorder&&e.theme.size.grid001};
`,b=e=>{const{accordionItemRef:t,expandedItemDisabled:n,id:i,isOpen:o=!1,headline:l,children:u,onClick:b,showAccordionBorder:E,hideHeadBorder:w,hideHeadIcon:C,prevId:S,nextId:k}=e,L=i+"_head",x=i+"_body",$=a.useRef(null),{height:_}=(0,m.j3)($),I=a.useCallback((e=>{switch(e.key){case"ArrowUp":{const t=S&&document.getElementById(S+"_head");t&&(e.preventDefault(),t.focus());break}case"ArrowDown":{const t=k&&document.getElementById(k+"_head");t&&(e.preventDefault(),t.focus());break}}}),[S,k]);return a.createElement(g,{id:i,showAccordionBorder:E},a.createElement(f,{id:L,tabIndex:0,isOpen:o,onClick:b,onKeyDown:I,"aria-expanded":o,"aria-controls":x,"aria-disabled":o&&n,hideHeadBorder:w,hideHeadIcon:C,ref:t},a.createElement(s.W,{wrap:c.Hq.never,shrinkContent:!0,horizontalAlign:c._N.spaceBetween,verticalAlign:c.Qj.center},l,a.createElement(h,{isOpen:o,hideHeadIcon:C},a.createElement(d._,{ariaHidden:!0})))),a.createElement(r.CSSTransition,{timeout:350,in:o,classNames:p},a.createElement(y,{id:x,isOpen:o,"aria-hidden":!o,"aria-labelledby":L,height:_,role:"region"},a.createElement(v,{ref:$,showAccordionBorder:E},u))))};b.displayName="Accordion"},44132:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f,D:()=>v});var i=n(46410),a=n(79613),r=n(73154),o=n(67294),l=n(78384),s=n(2987),c=n(12643),d=n(57023),m=n(19661),u=n(35499);const p=l.default.table.withConfig({displayName:"StyledTable"})`
    width: 100%;
    empty-cells: show;
    border-collapse: collapse;
    display: table;
    @media (max-width: ${i.u3.b560}px) {
        display: none;
    }
`,h=l.default.td.withConfig({displayName:"StyledTd"})`
    padding-left: ${e=>e.theme.size.static150};
    padding-right: ${e=>e.theme.size.static150};
    padding-top: ${e=>e.theme.size.static200};
    padding-bottom: ${e=>e.theme.size.static250};
    border: 1px solid ${a.W.color["grey-100"]};
    vertical-align: top;

    ${e=>e.isSummary&&l.css`
            span {
                font-weight: bold;
            }
        `};

    ${p} tbody tr &:first-child {
        border-left: 0;
    }

    ${p} tbody tr &:last-child {
        border-right: 0;
    }

    ${p} tbody tr:last-child & {
        border-bottom: 1px solid
            ${e=>"HEADER_CATEGORY_SUM"===e.layout?a.W.color["black-000"]:a.W.color["grey-100"]};
    }
`,g=l.default.th.withConfig({displayName:"StyledTh"})`
    padding-left: ${e=>e.theme.size.static150};
    padding-right: ${e=>e.theme.size.static150};
    padding-top: ${e=>e.theme.size.static200};
    padding-bottom: ${e=>e.theme.size.static250};
    vertical-align: top;

    ${p} tr &:first-child {
        border-left: 0;
    }

    ${p} tr &:last-child {
        border-right: 0;
    }

    ${p} tbody tr &:first-child {
        border-right: 2px solid ${a.W.color["black-000"]};
    }

    ${p} tbody tr & {
        border-bottom: 1px solid ${a.W.color["grey-100"]};
    }

    ${p} thead tr & {
        padding-top: 0;
        border-top: 0;
        border-bottom: 2px solid ${a.W.color["black-000"]};
    }

    ${p} tfoot tr & {
        border-bottom: 0;
        border-top: 2px solid ${a.W.color["black-000"]};
    }

    ${e=>"HEADER_CATEGORY_SUM"===e.layout&&l.css`
            ${p} tbody tr:last-child & {
                border-bottom: 0;
            }
        `}

    ${e=>"CATEGORY"===e.layout&&l.css`
            ${p} tbody tr:first-child & {
                border-top: 1px solid ${a.W.color["grey-100"]};
            }
        `}
`;var f;!function(e){e.headRowType="headRowType",e.bodyRowType="bodyRowType",e.footRowType="footRowType"}(f||(f={}));const y=l.default.col.withConfig({displayName:"StyledCol"})`
    width: ${e=>e.width?`${e.width}%`:`calc(100% / ${e.columnsCount})`};
`;class v extends o.PureComponent{render(){const{layout:e,width1:t,width2:n,width3:i,width4:a,width5:r,width6:l,caption:c}=this.props,d=(0,m.fN)(this.props),v=(0,m.WN)(d),b="CATEGORY"!==e?d.shift():null,E="HEADER_CATEGORY_SUM"===e?d.pop():null,w=[t,n,i,a,r,l],C=[];for(let e=0;e<v;e++)C.push(o.createElement(y,{key:e,columnsCount:v,width:w[e]}));return o.createElement(p,null,(0,u.x)(c,o.createElement(m.a6,null,c)),o.createElement("colgroup",null,C),b&&o.createElement(s.c,{name:"tableHeader"},o.createElement("thead",null,this.renderRows([b],g,f.headRowType))),o.createElement(s.c,{name:"tableBody"},o.createElement("tbody",null,this.renderRows(d,void 0,f.bodyRowType))),E&&o.createElement(s.c,{name:"tableFooter"},o.createElement("tfoot",null,this.renderRows([E],h,f.footRowType))))}renderRows(e,t,n){const{layout:i}=this.props;return e.map(((a,l)=>{const s=(0,m.so)(a);return o.createElement("tr",{key:a.key},s.map(((u,p)=>{const h=(0,m.BE)(this.props,a,u);let y=(0,m.aT)(u,h);const v=(0,m.Sq)(s,p+1),b=(0,m.CO)(e,l+1,p),E=(0,m.DA)(u),w=(0,m.bR)(i,n);if(E===d.T||E===c.T)return null;const C=t||this.getBodyComponentType(p);return C===g&&(y=o.createElement(r.xv,{bold:!0},y)),o.createElement(C,{scope:C===g?w:void 0,isSummary:n===f.footRowType,key:u.key,rowSpan:b,colSpan:v,layout:i},y)})))}))}getBodyComponentType(e){return"HEADER"===this.props.layout?h:0===e?g:h}}},88667:(e,t,n)=>{"use strict";n.d(t,{h:()=>v});var i=n(67294),a=n(78384),r=n(46410),o=n(79613),l=n(73154),s=n(64202),c=n(58402);function d(e){const t=(0,s.V9)(),n=(0,c.h)(),[a,r]=i.useState(e.defaultIsOpen||!1);return e.children(a,(function(){const{contentId:i}=e;r(!a),t.trackAccordionClick(i,!a,window.location.pathname,void 0,n)}))}var m=n(72814),u=n(12643),p=n(57023),h=n(42e3),g=n(19661);const f=a.default.div.withConfig({displayName:"StyledMobileTable"})`
    display: none;
    @media (max-width: ${r.u3.b560}px) {
        display: block;
    }
    padding: 0 ${e=>e.theme.size.grid001};
`,y=a.default.div.withConfig({displayName:"StyledItemWrapper"})`
    border-bottom: ${e=>e.isMerged?0:1}px solid
        ${e=>e.isSumItem?o.W.color["black-000"]:o.W.color["grey-100"]};
    padding: ${e=>e.theme.size.static150}
        ${e=>e.theme.size.grid001}
        ${e=>e.isMerged?0:e.theme.size.static350};

    &:last-child {
        padding-bottom: ${e=>e.theme.size.dynamic0200};
        border-bottom: 0;
    }
`,v=e=>{const{layout:t,priority:n,caption:a}=e,r=(t,n,a,r)=>{const s=t[n],c=(0,g.so)(s),d=c[a];if(!d)return console.error("Invalid table configuration. Each row should have same number of columns."),null;const u=(0,g.so)(s)[0],h=t[n+1];let f=!1,v=!1;if(h){const e=(0,g.so)(h)[a];f=e&&(0,g.DA)(e)===p.T}else"HEADER_CATEGORY_SUM"===e.layout&&(v=!0);if((0,g.DA)(d)===m.To)return null;const b=o(d,t,a,n,c);return i.createElement(y,{key:d.key,isMerged:f,isSumItem:n===t.length-2&&"HEADER_CATEGORY_SUM"===e.layout},"HEADER"!==r&&i.createElement(l.xv,{bold:!0,tag:l.rh.div},(0,g.aT)(u,(0,g.BE)(e,s,u))),v?i.createElement(l.xv,{bold:!0},b):b)},o=(e,t,n,i,a)=>{const r=t[i+1];if(r){const e=(0,g.so)(r)[n];if(e&&(0,g.DA)(e)===p.T)return null}return s(e,t,i,n,a)},s=(t,n,i,a,r)=>{let o=(0,g.aT)(t,(0,g.BE)(e,n[i],t));if(o||(0,g.DA)(t)!==p.T){if(!o&&(0,g.DA)(t)===u.T){let t=a-1;for(;r[t]&&!o;){const a=r[t];o=(0,g.aT)(a,(0,g.BE)(e,n[i],a)),t--}}}else{let t=i-1;for(;n[t]&&!o;){const i=(0,g.so)(n[t])[a];if(!i)break;o=(0,g.aT)(i,(0,g.BE)(e,n[t],i)),t--}}return o};return i.createElement(f,{title:a},"CATEGORY"===t||"HEADER_CATEGORY"===t&&"ROWS"===n?(()=>{const{contentId:n}=e,a=(0,g.fN)(e);return a.map(((r,o)=>{if("HEADER_CATEGORY"===t&&0===o)return null;const c=(0,g.so)(r),p=c[0],f="HEADER_CATEGORY"===t?(0,g.so)(a[0]):[];return c.length!==f.length&&"HEADER_CATEGORY"===t||0===c.length?(console.error("Invalid table configuration. Each row should have same number of columns."),null):i.createElement(d,{defaultIsOpen:0===o||"HEADER_CATEGORY"===t&&1===o,key:`${r.key}_${p.key}`,contentId:n},((n,d)=>i.createElement(h.U,{id:p.key,isOpen:n,onClick:d,expandedItemDisabled:!1,headline:i.createElement(l.xv,{bold:!0},(0,g.aT)(p,(0,g.BE)(e,r,p)))},c.map(((n,r)=>0===r||(0,g.DA)(n)===m.To?null:i.createElement(y,{key:n.key,isMerged:!!c[r+1]&&(0,g.DA)(c[r+1])===u.T},"HEADER_CATEGORY"===t&&i.createElement(l.xv,{bold:!0,tag:l.rh.div},(0,g.aT)(f[r],(0,g.BE)(e,a[0],f[r]))),((e,t,n,i,a)=>{const r=a[n+1];return r&&(0,g.DA)(r)===u.T?null:s(e,t,i,n,a)})(n,a,r,o,c)))))))}))})():(()=>{const{contentId:n}=e,a=[],s=(0,g.fN)(e),c=(0,g.WN)(s);for(let e=0;e<c;e++){if("HEADER"!==t&&0===e)continue;const c=(0,g.so)(s[0])[e],m=[];for(let n=1;n<s.length;n++){const i=r(s,n,e,t);m.push(i)}const u=i.createElement(d,{defaultIsOpen:"HEADER"!==t&&1===e||"HEADER"===t&&0===e,key:`${s[0].key}_${c.key}`,contentId:n},((t,n)=>i.createElement(h.U,{headline:i.createElement(l.xv,{bold:!0},o(c,s,e,0,(0,g.so)(s[0]))),id:c.key,isOpen:t,onClick:n,expandedItemDisabled:!1},m)));a.push(u)}return a})())}},19661:(e,t,n)=>{"use strict";n.d(t,{a6:()=>I,aT:()=>S,DA:()=>C,so:()=>w,Sq:()=>k,BE:()=>$,WN:()=>E,CO:()=>x,fN:()=>b,bR:()=>L,JM:()=>_});var i=n(16743),a=n(67294),r=n(33700),o=n(81697),l=n(22714),s=n(9363),c=n(67152),d=n(84744),m=n(72814);const u="vwa-ngw18/components/editorial/elements/imageCellElement";class p extends a.PureComponent{render(){return a.createElement(m.H$,{isNarrow:this.props.isNarrow},a.createElement(s.s,{path:"mediaElement"}))}}(0,d.R)(u,p);var h=n(12643),g=n(57023);const f="vwa-ngw18/components/editorial/elements/richtextCellElement";class y extends a.PureComponent{render(){return a.createElement(m.H$,{isNarrow:this.props.isNarrow},a.createElement(c.$g,{path:"richtext"}))}}(0,d.R)(f,y);var v=n(44132);const b=e=>{const{cqItems:t}=e,{tableParsys:n}=t;return(0,l.H)(n)},E=e=>{if(0===e.length)return 0;const t=e[0].model;return(0,l.H)(t).length},w=e=>{const{model:t}=e;return(0,l.H)(t)},C=e=>{const{model:t}=e;return t.cqType},S=(e,t)=>{switch(C(e)){case f:return a.createElement(c.$g,{path:`${t}/richtext`});case u:return a.createElement(s.s,{path:`${t}/mediaElement`});default:return null}},k=(e,t)=>{let n=1,i=t;for(;e[i]&&C(e[i])===h.T;)n++,i++;return n},L=(e,t)=>{let n;switch(e){case"CATEGORY":n="row";break;case"HEADER":n="col";break;case"HEADER_CATEGORY":n=t===v.Z.bodyRowType?"row":"col";break;case"HEADER_CATEGORY_SUM":n=t===v.Z.bodyRowType?"row":t===v.Z.headRowType?"col":""}return n},x=(e,t,n)=>{let i=1,a=t;for(;e[a];){const t=w(e[a])[n];if(!t||C(t)!==g.T)break;i++,a++}return i},$=(e,t,n)=>`${e.cqPath}/tableParsys/${t.key}/${n.key}`,_=e=>{i.ModelManager.getData({path:e,forceReload:!0})},I=r.zo.caption.withConfig({displayName:"StyledCaptionForScreenReaders"})`
    ${(0,o.wG)()}
`;I.displayName="StyledCaptionForScreenReaders"},95091:(e,t,n)=>{"use strict";n.d(t,{t:()=>s,m:()=>c});var i=n(67294),a=n(58795),r=n(69522),o=n(53159),l=n(73154);const s=i.createElement(o.$,{path:"heading",textAlign:l.H.center,order:"H2",style:"H2"}),c=e=>i.createElement(r.V,{anchorId:e.anchorId,title:e.emptyLabel,bgColor:r.V.BG_COLOR_SECTION,tagTypeBroken:e.tagTypeBroken},i.createElement("div",{id:e.anchorId},e.validationMessages&&i.createElement(a.e3,{severity:e.validationError?a.vR.ERROR:a.vR.WARNING},e.validationMessages.map(((e,t)=>i.createElement("span",{key:t},e)))),e.children))},10650:(e,t,n)=>{"use strict";n.d(t,{zB:()=>p,Gz:()=>g});var i=n(67294),a=n(32667),r=n(52745),o=n(81697);const l=(0,o.$r)([0,2]),s=(0,o.$r)([2,4]),c=(0,o.$r)([2,6]),d=(0,o.$r)([2,6,7]),m={left:d,right:d},u={SMALL:{left:c,right:c},MEDIUM:{left:s,right:s},LARGE:{left:l,right:l},FULL:{}};var p;!function(e){e[e.MEDIA=0]="MEDIA",e[e.TEXT=1]="TEXT"}(p||(p={}));const h=(e,t)=>{if(e===p.MEDIA){const e=u[t];return Object.keys(e).length>0?e:void 0}return m},g=e=>{const{children:t,childType:n,layout:o="LARGE"}=e;return i.createElement(a.W,{padding:h(n,o),stretchContent:!0,wrap:r.Hq.always},t)}},6543:(e,t,n)=>{"use strict";n.d(t,{U:()=>c});var i=n(44124),a=n(67294),r=n(64202),o=n(74500);function l(e,t){return e?((t=t||[]).push(e[":type"]),e[":items"]&&e[":itemsOrder"]&&e[":itemsOrder"].forEach((n=>{l(e[":items"][n],t)})),t):t||[]}const s=i.ZP.lib({resolved:{},chunkName:()=>"raremodules",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>{return e=void 0,t=void 0,a=function*(){return n.e(340).then(n.bind(n,56505))},new((i=void 0)||(i=Promise))((function(n,r){function o(e){try{s(a.next(e))}catch(e){r(e)}}function l(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}s((a=a.apply(e,t||[])).next())}));var e,t,i,a},requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve:()=>56505});function c(e){return t=l((0,r.V7)().getData(e.path)),o.s.some((e=>t.some((t=>t===e))))?a.createElement(s,{fallback:e.fallback},(()=>e.children)):a.createElement(a.Fragment,null,e.children);var t}},90208:(e,t,n)=>{"use strict";n.d(t,{z:()=>m});var i=n(67294),a=n(69522),r=n(84744),o=n(42607),l=n(53159),s=n(95168),c=n(57721);class d extends i.PureComponent{render(){const{target:e,href:t,primaryButtonLabel:n,showSecondaryButton:r,onClose:d,btnCloseLabel:m}=this.props,u=r?i.createElement(o.S,{path:"secondaryButton"}):void 0;return i.createElement(a.V,{title:"External Link Lightbox",bgColor:a.V.BG_COLOR_ELEMENT},i.createElement(c.e,{onClose:d,heading:i.createElement(l.$,{path:"heading",order:"H3"}),copy:i.createElement(s.s,{path:"copy"}),primaryButton:i.createElement(o.F,{buttonLabel:n,buttonStyle:"primary",buttonTarget:e,buttonTitle:n,buttonUrl:t,ignoreExternalLinkLightbox:!0}),secondaryButton:u,btnCloseLabel:m}))}}const m=(0,r.R)("vwa-ngw18/components/structure/externalLinkLightbox",d)},64826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var i=n(48618),a=n(33700),r=n(62469),o=n(67294),l=n(67585);const s=a.zo.div.withConfig({displayName:"LayersWrapper"})`
    z-index: ${l.K.layers.z};
    position: relative;
`;function c(){return o.createElement(s,null,o.createElement(i.I,{featureAppDefinition:r.Z,featureAppId:"s2:layer"}))}},50761:(e,t,n)=>{"use strict";n.d(t,{u:()=>l});var i=n(67294),a=n(15482),r=n(64202),o=n(46978);function l(){const e=(0,r.Y7)(),t=(0,r.WS)(),n=(0,r.pJ)(),l=e.getCurrentPageRootModel();if(!l)return null;const{headerDataModel:s,featureAppsUrls:c}=l,{pageTitle:d,canonicalUrl:m,referrer:u,robotsIndexFollow:p,alternateHrefs:h,questions:g,organizationJson:f,schemaVehicle:y,schemaNewsArticle:v}=s;return i.createElement(a.ql,null,i.createElement("title",null,d),i.createElement("link",{rel:"canonical",href:m}),h&&h.map((e=>i.createElement("link",{rel:"alternate",href:e.url,hrefLang:e.hrefLang}))),i.createElement("meta",{httpEquiv:"content-type",content:"text/html; charset=UTF-8"}),i.createElement("meta",{name:"viewport",content:"width=device-width"}),i.createElement("meta",{name:"robots",content:"noodp, noydir"}),i.createElement("meta",{name:"robots",content:p}),Boolean(u)&&i.createElement("meta",{name:"referrer",content:u}),function(e){const{keywords:t,description:n,language:a}=e,r=[];return t&&r.push(i.createElement("meta",{key:"keywords",name:"keywords",content:t})),n&&r.push(i.createElement("meta",{key:"description",name:"description",content:n})),a&&r.push(i.createElement("meta",{property:"language",key:"language",content:a})),r}(s),function(e){const{canonicalUrl:t,description:n,ogDescription:a,ogImage:r,ogTitle:o,ogType:l,ogUrl:s,pageTitle:c}=e,d=[i.createElement("meta",{property:"og:title",key:"og:title",content:o||c}),i.createElement("meta",{property:"og:type",key:"og:type",content:l||"website"}),i.createElement("meta",{property:"og:url",key:"og:url",content:s||t})];if(a||n){const e=i.createElement("meta",{property:"og:description",key:"og:description",content:a||n});d.push(e)}if(r){const e=i.createElement("meta",{property:"og:image",key:"og:image",content:r});d.push(e)}return d}(s),function(e){const{description:t,twitterDescription:n,twitterImage:a,twitterTitle:r,twitterCard:o,pageTitle:l}=e,s=a?o||"summary_large_image":"summary",c=[i.createElement("meta",{property:"twitter:title",key:"twitter:title",content:r||l}),i.createElement("meta",{property:"twitter:card",key:"twitter:card",content:s})];if(n||t){const e=i.createElement("meta",{property:"twitter:description",key:"twitter:description",content:n||t});c.push(e)}if(a){const e=i.createElement("meta",{property:"twitter:image",key:"twitter:image",content:a});c.push(e)}return c}(s),function(e,t){const n=[i.createElement("meta",{key:"cq:page_model_url",property:"cq:page_model_url",content:e.pagePath})];if(t.author){const e=i.createElement("meta",{key:"cq:datatype",property:"cq:datatype",content:"JSON"});n.push(e);const t=i.createElement("meta",{key:"cq:wcmmode",property:"cq:wcmmode",content:o.C.isInEditor()?"edit":"preview"});n.push(t)}return n}(n,t),function(e){const{vwGsaTitle:t,ogImage:n,vwBreadcrumb:a}=e,r=[i.createElement("meta",{property:"VW.gsaTitle",key:"VW.gsaTitle",content:t}),i.createElement("meta",{property:"VW.breadcrumb",key:"VW.breadcrumb",content:a})];if(n){const e=i.createElement("meta",{property:"VW.thumbnail",key:"VW.thumbnail",content:n});r.push(e)}return r}(s),function(e,t){const{scene7Url:n}=e,a=[];if(n){const e=i.createElement("link",{key:"scene7",rel:"dns-prefetch",href:n});a.push(e)}return t.length&&t.forEach((e=>{const t=i.createElement("link",{rel:"preload",href:e,key:e});a.push(t)})),a}(t,c),i.createElement("meta",{property:"cq:page_root_url",content:t.appRootPath}),g&&g.length>0&&function(e){return i.createElement("script",{type:"application/ld+json"},`\n                    {\n                        "@context": "https://schema.org",\n                        "@type": "FAQPage",\n                        "mainEntity":\n                            [\n                                ${e.map(((e,t,n)=>`{\n                                        "@type": "Question",\n                                        "name": "${e.name}",\n                                        "acceptedAnswer": {\n                                          "@type": "Answer",\n                                          "text": "${e.text}"\n                                        }}`+(t===n.length-1?"":","))).join("")}\n                            ]\n                    }\n                `)}(g),f&&function(e){return i.createElement("script",{type:"application/ld+json"},`${e}`)}(f),y&&y.name&&y.offers&&y.offers.lowPrice&&y.offers.priceCurrency&&function(e){return i.createElement("script",{type:"application/ld+json"},`${JSON.stringify(e)}`)}(y),v&&v.headline&&v.image&&function(e){return i.createElement("script",{type:"application/ld+json"},`${JSON.stringify(e)}`)}(v))}},96688:(e,t,n)=>{"use strict";n.d(t,{G:()=>B,N:()=>H});var i=n(83028),a=n(97820),r=n(80955),o=n(67294),l=n(56136),s=n(78384),c=n(64202),d=n(21178),m=n(3353),u=n(93346),p=n(61545),h=n(23797),g=n(7521),f=n(44103),y=n(46978),v=n(14980),b=n(6543),E=n(50761);const w=s.default.div.withConfig({displayName:"CenteredText"})`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
`,C=s.default.div.withConfig({displayName:"Loading"})`
    height: 100vh;
    position: relative;
`,S=(0,s.default)(C).withConfig({displayName:"EditorModeLoading"})`
    height: 200px;
`,k="vwa-ngw18/components/structure/pageroot";function L(e){return y.C.isInEditor()?o.createElement(S,null,o.createElement(w,null,e.loadingLabel)):o.createElement(C,null,o.createElement(w,null,e.loadingLabel))}const x=(0,r.Pi)((e=>{const{path:t}=e,n=(0,c.Y7)(),i=function(e){const t=(0,c.VY)();return function(n){null!==n&&t.onRender(e||"")}}(t),a=n.getPage(t),r=o.createElement(L,{loadingLabel:e.loadingLabel});if(a){const e=a.cqItems.root;if(e&&e.cqType===k)return o.createElement(b.U,{path:t,fallback:r},o.createElement(E.u,null),o.createElement(v.y,{key:t,path:`${t}/jcr:content/root/main`,resourceType:e.cqItems.main.cqType}),o.createElement("span",{key:`marker_${t}`,ref:i}));{const n=`${t}/jcr:content/root`,i=e?e.cqType:k;return o.createElement(b.U,{path:n,fallback:r},o.createElement(v.y,{path:n,resourceType:i}))}}return r}));x.displayName="PageLoader";var $=n(13141),_=n(50086),I=n(64826),T=n(79126),N=n(5392),P=n(14308),O=n(22114),R=n(60600),z=n(67585);const D=(0,r.Pi)((e=>{const t=(0,c.VY)(),n=(0,c.En)(),i=(0,P.Nh)({pageDisclaimers:e.disclaimers}),a=(0,c.x8)(),r=o.useRef(null);o.useEffect((()=>{a.setSkipLinkClickHandler("footerSkipLink",r)}),[r,a]);const{copyright:l,legalAndImprintLinks:s,linkGroups:d,thirdPartyLogoSrc:m,thirdPartyLogoAlt:u,bottomNavAriaLabel:p}=n,h=m?o.createElement(O.ct,{src:m,alt:u}):void 0,g=o.createElement(N.Y,null),f=(0,P.xN)(d),y=`Â© ${l}`,v=s.IMPRINT.links.concat(s.LEGAL.links),b=(0,P.Mp)(v,p,y,h,g),E=!t.loading;return o.createElement(R.Lu,{ref:r},o.createElement(T.$_,{visible:E,mainNav:f,bottomNav:b,disclaimers:i,zIndex:z.K.footer.z}))}));function A(e){return e.isOneHub?o.createElement(D,{disclaimers:e.disclaimers||[]}):null}D.displayName="OneHubFooter";const M={useNewBreakpoints:!0},B="vwa-ngw18/components/structure/pageroot",F=s.default.div.withConfig({displayName:"StyledContentWrapper"})``;F.displayName="StyledContentWrapper";const W=s.default.main.withConfig({displayName:"StyledMainContentWrapper"})`
    z-index: ${z.K.main.z};
`;W.displayName="StyledMainContentWrapper";const H=(0,r.Pi)((()=>{const e=(0,c.pJ)(),t=(0,c.Tc)(),n=(0,c.WS)(),r=(0,c.Ng)(),s=(0,c.wL)(),y=(0,c.Y7)().getCurrentPageRootModel(),v=(0,_.g)(),{layers:b}=(0,p.j)();(0,u.ap)();const[E,w]=o.useState(!1);o.useEffect((()=>{w(Boolean(b.length))}),[b]),r.exampleToggleEnabled&&s.general.debug("This is example of feature toggle on FE");const C=o.useRef(new h._).current,S=o.useRef(new h._).current,k=o.useCallback((e=>{const i=(0,g.u)(e.location.pathname);if(null!==i){const e=t.getOrCreateStore(i),a=C.create(e);return o.createElement(d.f.Provider,{value:a},o.createElement(x,{path:i,loadingLabel:n.pageLoadingLabel}))}return o.createElement("span",null,"invalid url")}),[t,C,n]);return o.createElement(i.f,{themeContextOptions:M,direction:v},o.createElement(a.Iy,null,function(){const i=(0,f.Sj)(e.pagePath),a=e.pagePath.startsWith("/conf/vwa-ngw18/settings/wcm"),r=y?y.togglesModel:void 0,s=!r||!r.hideNavigation,c=!r||!r.hideFooter,u=!i&&!a,p=S.create(t.permanent);return e.wrapWithRouter(o.createElement(m.g,null,(e=>o.createElement(d.f.Provider,{value:p},o.createElement(F,null,u&&o.createElement(R.KO,null),u&&s&&o.createElement($.D,{isOneHub:n.oneHub}),o.createElement(W,{isLayerOpen:E},o.createElement(l.AW,{path:"/",component:k}))),u&&o.createElement(o.Fragment,null,c&&o.createElement(A,{isOneHub:n.oneHub,disclaimers:e}),o.createElement(I.Z,null))))))}()))}));H.displayName="PageRoot"},25944:(e,t,n)=>{"use strict";n.d(t,{OF:()=>A,dJ:()=>M,wi:()=>T});var i=n(67294),a=n(64202),r=n(33700),o=n(49181),l=n(32667),s=n(52745),c=n(80955),d=n(58795),m=n(47277),u=n(84744),p=n(46978),h=n(54425),g=n(22714),f=n(5118),y=n(78384),v=n(5098),b=n(14980),E=n(73154);const w=y.default.div.withConfig({displayName:"StyledPersonalizedPlaceholder"})`
    padding: ${e=>e.theme.size.dynamic0100};
    border: 6px solid ${e=>e.theme.interaction.recipe370.default};
`,C=e=>i.createElement(w,{id:e.id},i.createElement(E.xv,null,"Placeholder for personalized modules."));var S=n(6543),k=n(14272),L=n(62300),x=n(37772);const $=(0,y.default)(k.a).withConfig({displayName:"StyledInsertWrapper"})`
    display: inline-block;
    width: 100%;
`;$.displayName="StyledInsertWrapper";const _=(e,t)=>i.createElement(L.l.Provider,{key:e,value:{isPersonalizable:!0,contentId:(0,x.Z)(t.path),placeholderId:(0,x.Z)(e)}},i.createElement(S.U,{path:t.path,key:e},i.createElement($,null,(e=>i.createElement(b.y,{path:t.path,resourceType:t.resourceType,containerProps:{className:e.className}}))))),I=n(23493);var T;!function(e){e[e.LINK_PARSYS=0]="LINK_PARSYS",e[e.ITEM_PARSYS=1]="ITEM_PARSYS",e[e.MAIN_PARSYS=2]="MAIN_PARSYS",e[e.SECTION_PARSYS=3]="SECTION_PARSYS",e[e.SECTION_GROUP_PARSYS=4]="SECTION_GROUP_PARSYS",e[e.STAGE_PARSYS=5]="STAGE_PARSYS",e[e.INLINE_BUTTON_PARSYS=6]="INLINE_BUTTON_PARSYS"}(T||(T={}));const N=r.zo.div.withConfig({displayName:"StyledAuthorParsys"})`
    & > *:not(:last-child) {
        margin-bottom: ${e=>e.theme.size[O(e.parsysType)]};
    }
`;function P(e){switch(e){case T.INLINE_BUTTON_PARSYS:return!0;default:return!1}}function O(e){switch(e){case T.LINK_PARSYS:case T.INLINE_BUTTON_PARSYS:return o.X.dynamic0050;case T.ITEM_PARSYS:return o.X.dynamic0100;case T.STAGE_PARSYS:return o.X.dynamic0130;case T.SECTION_GROUP_PARSYS:return o.X.dynamic0200;case T.MAIN_PARSYS:case T.SECTION_PARSYS:default:return o.X.dynamic0350}}function R(e){const t=(0,g.H)(e);return!t||0===t.length||e.parsysType===T.STAGE_PARSYS&&t[0].model.cqType.toLowerCase().indexOf("stage")<0}function z(e,t){e.current&&t.setStageHeight(e.current.clientHeight-68)}function D(e,t){const[n,r]=i.useState(!1),o=(0,a.ts)(),{showPersonalizablePlaceholders:l}=e;i.useEffect((()=>{l&&(0,f.s)()&&!n&&r(!0)}),[n,l]);let s=function(e,t){return(0,g.H)(e).filter((e=>e.model)).map((e=>"stage"===e.key?i.createElement("div",{ref:t,key:e.key},i.createElement(m.E,{key:e.key,resourceType:e.model.cqType,path:e.key})):i.createElement(m.E,{key:e.key,resourceType:e.model.cqType,path:e.key})))}(e,t);const c=o.getInserts(e.cqPath);if((0,f.s)()&&!n||(d=e.cqPath,u=s,y=c,s=(0,f.s)()?((e,t)=>{const n=e=>i.createElement(C,{key:e,id:e});return e.reduce(((e,i,a)=>(e.push(i,n((0,v.P1)(t,a+1))),e)),[n((0,v.P1)(t,0))])})(u,d):((e,t,n)=>{const i=e.reduce(((e,t)=>(e[t.index]=t,e)),[]);return t.reduce(((e,t,a)=>(e.push(t),i[a+1]&&e.push(_((0,v.P1)(n,a+1),i[a+1])),e)),i[0]?[_((0,v.P1)(n,0),i[0])]:[])})(y,u,d)),!e.componentLength||p.C.isInEditor()&&s.length<e.componentLength){const t=(0,h.d)(e.cqType,e);s.push(t)}var d,u,y;return s}const A=(0,c.Pi)((e=>{const t=i.useRef(null);!function(e,t){const n=(0,a.fv)();i.useEffect((()=>{const i=I(z,100);return t!==T.STAGE_PARSYS||p.C.isInEditor()||(window.addEventListener("resize",i),z(e,n)),function(){window.removeEventListener("resize",i)}}),[t,e,n]),i.useEffect((()=>{t!==T.STAGE_PARSYS||p.C.isInEditor()||z(e,n)}))}(t,e.parsysType);const n=D(e,t);return!p.C.isInEditor()&&R(e)?null:p.C.isInEditor()?i.createElement(i.Fragment,null,function(e){if((e.errorMsgIsEmpty||e.alertMessage)&&R(e)){const t=e.alertMessage||e.errorMsgIsEmpty;return i.createElement(d.e3,null,i.createElement("div",null,t))}return i.createElement(i.Fragment,null)}(e),i.createElement(N,{parsysType:e.parsysType},n)):i.createElement(l.W,{gutter:O(e.parsysType),wrap:P(e.parsysType)?s.Hq.auto:s.Hq.always},n)}));A.displayName="InternalParsys";const M=(0,u.R)("vwa-ngw18/components/structure/parsys",A)},82414:(e,t,n)=>{"use strict";n.d(t,{o:()=>i});const i=n(67294).createContext(null)},20325:(e,t,n)=>{"use strict";n.d(t,{b:()=>i});const i=n(67294).createContext({})},73517:(e,t,n)=>{"use strict";n.d(t,{W:()=>w});var i=n(67294),a=n(78384),r=n(84744),o=n(54425),l=n(22714),s=n(58795),c=n(47277),d=n(46978),m=n(14272),u=n(72814);const p="vwa-ngw18/components/editorial/elements/tableRowElement",h=a.default.div.withConfig({displayName:"StyledTableRow"})`
    display: flex;
    flex-direction: row;
    border: 2px solid ${e=>e.theme.border.color.secondary};
    position: relative;
    ${e=>e.narrowColumns?`margin: 0 ${e.theme.size.grid001}`:null};
`,g=(0,a.default)(m.a).withConfig({displayName:"StyledDndContainer"})`
    width: ${e=>(0,u.__)(e.theme,e.narrowColumns)};
`;class f extends i.PureComponent{componentDidUpdate(e){(0,l.H)(e).length!==(0,l.H)(this.props).length&&this.props.updateTableInAuthorCallback&&this.props.updateTableInAuthorCallback()}render(){const e=(0,l.H)(this.props).map((e=>i.createElement(c.E,{key:e.key,resourceType:e.model.cqType,path:e.key,extraProps:{isNarrow:this.props.narrowColumns}})));return i.createElement(i.Fragment,null,e.length!==this.props.columnsCount&&d.C.isInEditor()&&i.createElement(s.e3,null,i.createElement("span",null,"Each row must have same number of cells as first one")),i.createElement(h,{narrowColumns:this.props.narrowColumns},e,i.createElement(g,{narrowColumns:this.props.narrowColumns},(({className:t})=>e.length<6?(0,o.d)(p,this.props,t):i.createElement(i.Fragment,null)))))}}const y=(0,r.R)(p,f),v="vwa-ngw18/components/structure/tableParsys",b=a.default.div.withConfig({displayName:"StyledTableParsys"})`
    display: flex;
    flex-direction: column;
    border: 2px solid ${e=>e.theme.border.color.secondary};
`;class E extends i.PureComponent{render(){const e=(0,o.d)(v,this.props),t=(0,l.H)(this.props);return i.createElement(b,{childrenCount:t.length},t.map((e=>i.createElement(y,{key:e.key,path:e.key,columnsCount:this.props.columnsCount,updateTableInAuthorCallback:this.props.updateTableInAuthorCallback,narrowColumns:this.props.narrowColumns}))),e)}}const w=(0,r.R)(v,E)},14308:(e,t,n)=>{"use strict";n.d(t,{c9:()=>v,Mp:()=>k,Ov:()=>S,xN:()=>C,Nh:()=>w});var i=n(67294),a=n(85279),r=n(64202),o=n(2987),l=n(16195),s=n(79126),c=n(78384),d=n(46410),m=n(73154),u=n(81697);const p=c.default.nav.withConfig({displayName:"StyledWrapper"})`
	word-break: break-word;
	hyphens: auto;

	@media (min-width: ${d.u3.b560}px) {
		width: ${e=>e.theme.size.grid004};

		:last-child {
			margin-${e=>(0,u.lp)(e.theme.direction)}: calc(-1 * ${e=>e.theme.size.grid001});
		}
	}
`;p.displayName="StyledWrapper";const h=c.default.h4.withConfig({displayName:"StyledHeadline"})`
    /* disable default h4 styles */
    margin: 0;
    margin-bottom: ${e=>e.theme.size.static350};
`;h.displayName="StyledHeadline";const g=c.default.ul.withConfig({displayName:"StyledList"})`
    margin: 0 0 ${e=>e.theme.size.static500};
    padding: 0;
    list-style: none;

    a {
        display: inline-block;
        padding: ${e=>e.theme.size.static100} 0;
    }
`;g.displayName="StyledList";const f=e=>{const{headline:t,children:n,mainNavAriaLabel:a}=e,r=i.Children.toArray(n).filter(i.isValidElement);return r.length?i.createElement(p,{"aria-label":a},Boolean(t)&&i.createElement(h,{"aria-hidden":"true"},i.createElement(m.xv,{appearance:m.C2.headline200,bold:!0},t)),i.createElement(g,{role:"list"},r.map((e=>{const t=null===e.key?void 0:e.key;return i.createElement("li",{key:t},e)})))):null};function y(e,t){return i.createElement(l.r,{disclaimers:e,withoutLabeledSection:t})}function v(e,t){let n=b(e.identifier||void 0,t.identifier||void 0);return 0===n&&(n=b(e.namedReference&&e.namedReference[0]||void 0,t.namedReference&&t.namedReference[0]||void 0)),n}function b(e,t){let n=Number(e),i=Number(t);return isNaN(n)||isNaN(i)?void 0!==e&&void 0!==t?e.localeCompare(t):void 0!==e?1:void 0!==t?-1:0:n-i}function E(e,t,n){const i=[],a=new Map;for(let t=0;t<e.length;t++)a.set(e[t].identifier||e[t].namedReference,e[t]);return t.forEach((e=>{a.has(e.identifier)&&a.get(e.identifier).text===e.text?(i.push(e),a.delete(e.identifier)):n.disclaimer.warn(`Scoped disclaimers doesnt include page disclaimer ${e.identifier}`)})),[...i,...Array.from(a,(([e,t])=>t))]}function w(e){const t=(0,r.Y7)(),n=(0,r.VF)(),a=(0,r.wL)(),l=(0,r.Tc)(),c=(0,r.a)().value;let d=(0,r.ce)().layerType&&c?c.footerDisclaimers:l.footerDisclaimers;const m=t.getCurrentPageRootModel(),u=m?m.mainLegalEntity:void 0;d=d.slice().sort(((e,t)=>function(e,t,n){if(!e.legalEntityLabel&&!t.legalEntityLabel)return 0;if(!e.legalEntityLabel)return-1;if(!t.legalEntityLabel)return 1;if(n){if(e.legalEntity===n)return 1;if(t.legalEntity===n)return-1}return e.legalEntityLabel.localeCompare(t.legalEntityLabel)}(e,t,u))).reverse(),((null==n?void 0:n.hideGlobalDisclaimers)||(null==m?void 0:m.togglesModel.hideGlobalDisclaimers))&&(d=d.filter((e=>Array.isArray(e.referenceDisclaimers)&&e.referenceDisclaimers.length)).map((e=>({legalEntityLabel:e.legalEntityLabel,globalDisclaimers:[],referenceDisclaimers:e.referenceDisclaimers}))));const p=d.filter((e=>e.globalDisclaimers||e.referenceDisclaimers)).map(((t,n)=>i.createElement(s.jG,{key:t.legalEntityLabel||n,label:t.legalEntityLabel||"",globalDisclaimers:y(t.globalDisclaimers,Boolean(t.legalEntityLabel)),referenceDisclaimers:y(E(t.referenceDisclaimers,e.pageDisclaimers,a),Boolean(t.legalEntityLabel))})));return p?i.createElement(o.c,{name:"footerDisclaimers"},i.createElement(i.Fragment,null,p)):null}function C(e){return e.map(((e,t)=>{return n=e.category?e.category:"Â ",a=e.links,r=`col-${t}`,o=e.hideHeadline,i.createElement(f,{key:r,headline:o?"":n,mainNavAriaLabel:n},a.map(S));var n,a,r,o}))}function S(e,t){return i.createElement(a.S,{key:t,link:e})}function k(e,t,n,a,r){const o=e?e.map(S):null;return i.createElement(s.LJ,{copyright:n,marketLogoMedia:a,langSwitcher:r,bottomNavAriaLabel:t},o)}f.displayName="FooterMainNavList"},24379:(e,t,n)=>{"use strict";n.d(t,{B:()=>v});var i=n(67294),a=n(87465),r=n(32667),o=n(49181),l=n(52745),s=n(83028),c=n(81697),d=n(58795),m=n(69522),u=n(84744),p=n(46978),h=n(53159),g=n(95168);const f=(0,c.$r)([2,6]);class y extends i.PureComponent{constructor(){super(...arguments),this.renderAuthor=(e,t)=>{const{errorStatus:n="unknown"}=this.props;return i.createElement(m.V,{title:"Login Error Message",bgColor:m.V.BG_COLOR_ELEMENT},i.createElement(d.e3,{severity:d.vR.WARNING},i.createElement("div",null,`This error message is shown for the error status "${n}"`)),i.createElement(a.Ar,null,i.createElement(r.W,{gutter:o.X.dynamic0100,wrap:l.Hq.always,padding:{left:f,right:f},stretchContent:!0},e,t)))},this.renderPublish=(e,t,n)=>i.createElement(s.f,{theme:"inverted"},i.createElement(r.W,{gutter:o.X.dynamic0100,wrap:l.Hq.always,padding:o.X.dynamic0200,stretchContent:!0},n,e,t))}render(){const e=i.createElement(h.$,{path:"heading"}),t=i.createElement(g.s,{path:"copy"}),{closeButton:n}=this.props;return p.C.isInEditor()?this.renderAuthor(e,t):this.renderPublish(e,t,n)}}const v=(0,u.R)("vwa-ngw18/components/structure/login/errorMessage",y)},56646:(e,t,n)=>{"use strict";n.d(t,{G:()=>_});var i=n(67294),a=n(17061),r=n(87465),o=n(32667),l=n(49181),s=n(52745),c=n(81697),d=n(58795),m=n(69522),u=n(63877),p=n(2188),h=n(84744),g=n(46978),f=n(35499),y=n(37772),v=n(98769),b=n(53159),E=n(95168),w=n(74669),C=n(54481),S=n(64202),k=n(6007),L=n(80955);const x=(0,c.$r)([2,6]),$=(0,L.Pi)((function(e){const t=(0,S.r0)(),n=(0,S.Xy)(),c=(0,S.pJ)(),h=(0,S.QQ)(),L=(0,S.V9)(),$=e.btnNextActionHref,_=e.btnNextActionLabel||k.uj,I=i.createElement(b.$,{path:"heading"}),T=i.createElement(E.s,{path:"copy"}),N=(0,f.x)($,i.createElement(a.M,{tag:"a",href:$,emphasis:"primary",onClick:t=>{const{originalCqPath:i,btnNextActionLabel:a,btnNextActionHref:r}=e;((e,t)=>n=>{t&&e.isAppLink(t)&&(e.navigate(t||""),n.preventDefault())})(c,r)(t),n.closeFlyout(),L.trackButtonClick((0,y.Z)(i,"Login Flyout - Logged In"),r,a)}},_)),P=i=>{return a=this,r=void 0,l=function*(){if(i.preventDefault(),t.isLoggedIn)try{yield t.handleLogout(),n.closeFlyout()}catch(t){h.openAlert(p.n.unknownError,e.btnCloseLabel)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{s(l.next(e))}catch(e){t(e)}}function i(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,i)}s((l=l.apply(a,r||[])).next())}));var a,r,o,l},O=e=>{e.preventDefault(),t.isLoggedIn&&t.openProfileTab()},R=()=>{const{greeting:t,fallbackUserName:n}=e;return`${t} ${n}`.trim()};return g.C.isInEditor()?(z=I,D=T,A=N,i.createElement(m.V,{title:"Login Flyout - Logged In",bgColor:m.V.BG_COLOR_ELEMENT},i.createElement(d.e3,{severity:d.vR.INFO},i.createElement("div",null,k.CX)),i.createElement(r.Ar,null,i.createElement(o.W,{gutter:l.X.dynamic0100,wrap:s.Hq.always,padding:{left:x,right:x},stretchContent:!0},z,D,A,i.createElement("div",null,"Logout i18n label: ",e.btnLogoutLabel),i.createElement("div",null,"Settings i18n label: ",e.btnSettingsLabel))))):((n,a,r)=>{const{btnLogoutLabel:o,btnSettingsLabel:l}=e,s=t.userData,c=s?(t=>{return t.given_name&&t.family_name?`${t.given_name} ${t.family_name}`:t.given_name?`${t.given_name}`:t.family_name?`${t.family_name}`:t.email?(n=t.email,`${e.greeting} ${(0,v.k)(n)}`.trim()):R();var n})(s):R(),d=s?s.email:void 0,m=i.createElement(u.jm,{name:c,email:d}),p=i.createElement(u.WY,null,i.createElement(u.KV,{href:"javascript:void(0)",label:l,icon:i.createElement(w.Z,{ariaHidden:!0}),onClick:O}),i.createElement(u.KV,{href:"javascript:void(0)",label:o,icon:i.createElement(C.R,{ariaHidden:!0}),onClick:P}));return i.createElement(u.xn,{userInfo:m,heading:n,copy:a,button:r,footer:p})})(I,T,N);var z,D,A})),_=(0,h.R)("vwa-ngw18/components/structure/login/flyoutLoggedIn",$)},41726:(e,t,n)=>{"use strict";n.d(t,{F:()=>k});var i=n(67294),a=n(87465),r=n(32667),o=n(49181),l=n(52745),s=n(81697),c=n(58795),d=n(69522),m=n(63877),u=n(64202),p=n(2188),h=n(84744),g=n(46978),f=n(37772),y=n(42607),v=n(53159),b=n(95168),E=n(6007),w=n(80955);const C=(0,s.$r)([2,6]),S=(0,w.Pi)((function(e){const t=(0,u.r0)(),n=(0,u.QQ)(),s=(0,u.V9)(),h=i.createElement(v.$,{path:"heading"}),w=i.createElement(b.s,{path:"copy"}),S=e.btnLoginLabel||E.uj,k=i.createElement(y.F,{buttonLabel:S,buttonStyle:"primary",trackingActionOverride:(t,n)=>s.trackButtonClick((0,f.Z)(e.cqPath),t,n),layerButton:!0,onClick:i=>{return a=this,r=void 0,l=function*(){if(i.preventDefault(),!t.isLoggedIn)try{yield t.handleLogin()}catch(t){const i=function(e){return e instanceof p.l?e.status:p.n.unknownError}(t);n.openAlert(i,e.btnCloseLabel)}},new((o=void 0)||(o=Promise))((function(e,t){function n(e){try{s(l.next(e))}catch(e){t(e)}}function i(e){try{s(l.throw(e))}catch(e){t(e)}}function s(t){var a;t.done?e(t.value):(a=t.value,a instanceof o?a:new o((function(e){e(a)}))).then(n,i)}s((l=l.apply(a,r||[])).next())}));var a,r,o,l},buttonTitle:S,ignoreExternalLinkLightbox:!0});return g.C.isInEditor()?(L=h,x=w,$=k,i.createElement(d.V,{title:"Login Flyout - Logged Out",bgColor:d.V.BG_COLOR_ELEMENT},i.createElement(c.e3,{severity:c.vR.INFO},i.createElement("div",null,E.M8)),i.createElement(a.Ar,null,i.createElement(r.W,{gutter:o.X.dynamic0100,padding:{left:C,right:C},wrap:l.Hq.always,stretchContent:!0},L,x,$)))):((e,t,n)=>i.createElement(m.xn,{heading:e,copy:t,button:n}))(h,w,k);var L,x,$})),k=(0,h.R)("vwa-ngw18/components/structure/login/flyoutLoggedOut",S)},6007:(e,t,n)=>{"use strict";n.d(t,{uj:()=>i,M8:()=>a,CX:()=>r});const i="Next Action Button",a="This content is shown in the login flyout to logged-out users.",r="This content is shown in the login flyout to logged-in users."},7934:(e,t,n)=>{"use strict";n.d(t,{O:()=>f});var i=n(67294),a=n(32667),r=n(52745),o=n(49181),l=n(73154),s=n(81697),c=n(69522),d=n(84744),m=n(67152),u=n(95168);const p=(0,s.$r)([2,3,5]),h={left:p,right:p};class g extends i.PureComponent{render(){return i.createElement(c.V,{title:"Car Feature Category Main"},i.createElement(a.W,{wrap:r.Hq.always,gutter:o.X.static300,padding:this.getContainerPadding(),stretchContent:!0},i.createElement(m.sw,{path:"title",appearance:l.C2.headline350}),i.createElement(u.s,{path:"copy",useDropCap:!1})))}getContainerPadding(){return this.props.isEmbedded?void 0:h}}const f=(0,d.R)("vwa-ngw18/components/structure/xfCarFeatureCategoryMain",g)},13141:(e,t,n)=>{"use strict";n.d(t,{D:()=>pt});var i=n(67294),a=n(80955),r=n(82059),o=n(95909),l=n(64202),s=n(61545),c=n(46978),d=n(35499),m=n(38152),u=n(85059),p=n(5693),h=n(33700),g=n(19696),f=n(98769),y=n(47501);const v=h.zo.span.withConfig({displayName:"StyledSpan"})`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${e=>e.theme.size.static350};
    width: ${e=>e.theme.size.static350};
    font-size: ${10}px;
    font-weight: bold;
    border-radius: 50%;
    border: 2px solid currentColor;
`,b=(0,a.Pi)((()=>{const e=(0,l.WS)(),t=(0,l.Hr)(),n=(0,l.V9)(),{userData:a,isLoggedIn:r}=(0,l.r0)(),o=(0,l.Xy)(),s=(e=>(null==e?void 0:e.given_name)&&(null==e?void 0:e.family_name)?`${e.given_name[0]}${e.family_name[0]}`:(null==e?void 0:e.email)?(0,f.k)(e.email)[0]:void 0)(a);return e.loginModel.enabled?i.createElement(y._r,{onClick:function(e){e.preventDefault(),n.trackLoginFlyoutOpenClick(r),o.openFlyout()},"aria-label":t.loginButtonLabel},r&&s?i.createElement(v,null,s.toUpperCase()):i.createElement(g.Z,{ariaHidden:!0})):null}));var E=n(3125),w=n(85279),C=n(73135),S=n(10194);function k(e){const{id:t,title:n,richTextTitle:a,url:r,hasSecondLevel:o}=e,s=i.useContext(E.Fr),{activeMenuLvl1Item:c}=s,d=c===t,m=function(e){const t=(0,l.pJ)(),n=(0,l.V9)(),a=(0,l.fv)(),r=(0,l.HQ)(),o=i.useContext(E.Fr),{setActiveMenuLvl1Item:s}=o,{id:c,url:d,title:m,teaser:u,hasSecondLevel:p}=e;return function(e){if(n.trackMainNavigationClick(c,d,m),u&&a.setSecondLevelTeaserData(u),p&&s)return e.preventDefault(),void s(c);t.isAppLink(d)?(e.preventDefault(),t.navigate(d)):r.shouldOpenLightbox(d)&&(e.preventDefault(),r.openLightbox(d,"_blank"))}}(e),u=(0,C.iK)(t);return i.createElement(E.Uk,{href:r,onClick:m,title:n,isActive:d,minimizedView:Boolean(c),ariaExpanded:o?d:void 0,ariaControls:o?u:void 0},i.createElement(S.xQ,{richtext:a,disableFormatting:!0}))}function L(e){return Boolean(e&&e.length>0)}var x=n(16195),$=n(19139);function _(e){const{disclaimers:t=[]}=e,n=t&&0!==t.length;return i.createElement(i.Fragment,null,n&&i.createElement($.Ft,null,i.createElement(x.r,{disclaimers:t})))}var I=n(32667),T=n(52745),N=n(49181),P=n(52756),O=n(1570);function R(e){const{id:t,config:n}=e,a=`navigation-flyout-feature-app_${t}`,r=(0,l.Tc)(),o=(0,l.wL)();return i.createElement(O.n,Object.assign({},n,{featureAppId:a,globalDisclaimerStore:r,featureAppTrackingData:{},logger:o,hideLoadingIndicator:!1}))}var z=n(19138),D=n(46410),A=n(65021);function M(e){const t=(0,l.pJ)(),n=(0,l.HQ)(),{url:a,richTextTitle:r,itemRef:o}=e;return i.createElement(C.mA,{href:a,onClick:i=>{const{menuItems:r,onLinkClick:o}=e;r&&r.length>0?i.preventDefault():(o(i),t.isAppLink(a)?(i.preventDefault(),t.navigate(a)):n.shouldOpenLightbox(a)&&(i.preventDefault(),n.openLightbox(a,"_blank")))},itemRef:o},i.createElement(S.xQ,{richtext:r,disableFormatting:!0}))}function B(e,t,n,a){return i.createElement(M,{key:(0,A.c6)(e.title,t),richTextTitle:e.richTextTitle,url:e.url,onLinkClick:n,itemRef:a})}function F(e){const{menuItems:t,openItemIndex:n,onItemClick:a,level2FirstItemRef:r}=e,o=t.map(((t,o)=>({level1:W(t,o,(e=>a(o,t.url,t.title,e)),n===o),level2:i.createElement(C.G3,{id:(0,A.pn)(t.title),key:(0,A.pn)(t.title),isOpen:e.openItemIndex===o},t.menuItems.map(((n,i)=>{const l=e.openItemIndex===o;return B(n,i,(e=>a(i,n.url,`${t.title} : ${n.title}`,e)),l&&0===i?r:void 0)})))})));return i.createElement(C.h6,{items:o,activeItem:n})}function W(e,t,n,a){const r=L(e.menuItems)?void 0:B(e,t,n),o=e.richTextTitle?i.createElement(S.xQ,{richtext:e.richTextTitle,disableFormatting:!0}):e.title;return i.createElement(C.zy,{key:(0,A.pn)(e.title),id:(0,A.pn)(e.title),title:o,link:r,isOpen:a,onClick:n})}function H(e){const{item:t,index:n,onItemClick:a}=e,[r,o]=function(){const[e,t]=i.useState(!1);return[e,function(){t(!e)}]}(),l=t.richTextTitle?i.createElement(S.xQ,{richtext:t.richTextTitle,disableFormatting:!0}):t.title;return i.createElement(C.NU,{key:(0,A.pn)(t.title),id:(0,A.pn)(t.title),title:l,link:B(t,n,(()=>a(n,t.url,t.title))),isOpen:r,onClick:o},t.menuItems&&t.menuItems.map(((e,i)=>B(e,i,(()=>a(n,e.url,`${t.title} : ${e.title}`))))))}function j(e){return i.createElement(C.yV,null,e.menuItems.map(((t,n)=>i.createElement(H,{index:n,item:t,onItemClick:e.onItemClick}))))}function V(e){const{menuItems:t,openItemIndex:n,onItemClick:a,level2FirstItemRef:r}=e;return i.createElement(i.Fragment,null,i.createElement(z.L,{max:D.u3.b560},i.createElement(j,{menuItems:t,onItemClick:a})),i.createElement(z.L,{min:D.u3.b560},i.createElement(F,{menuItems:t,openItemIndex:n,onItemClick:a,level2FirstItemRef:r})))}var q=n(41979);function G(e){const t=(0,l.V9)(),{topLink:n}=e,{url:a,linkWindowTarget:r,title:o}=n;return i.createElement(q.O,{href:a,target:r,trackingActionOverride:function(){t.trackNavigationTopLinkClick(a,o)}},o)}class U extends i.Component{render(){const{teaser:e,topLinks:t,topLinksTitle:n}=this.props,a=t?t.map(((e,t)=>i.createElement(G,{key:t,topLink:e}))):void 0;return i.createElement(I.W,{wrap:T.Hq.always,gutter:N.X.static520},a&&i.createElement(E.kR,{headline:n},a),e)}}var X=n(73154);function Y(e){const{children:t}=e;return i.createElement(X.xv,{tag:X.rh.div,appearance:X.C2.headline0300},t)}var K=n(28025),Q=n(12778);const Z={ratio:"r_4_3",sizes:"(min-width: 960px) 30vw, 90vw"};function J(e){const{path:t}=e;return i.createElement(K.YN.Provider,{value:Z},i.createElement(Q.K,{path:t,displayType:"FLYOUT"}))}const ee=e=>{const t=(0,i.useRef)();return(0,i.useEffect)((()=>{t.current=e})),t.current},te=(0,a.Pi)((function(e){const t=(0,l.fv)(),n=(0,l.V9)(),r=(0,a.hN)((()=>({openItemIndex:void 0,itemOpenedByKeyboard:!1}))),o=(0,i.useRef)(null),{id:s,title:c,richTextTitle:m,menuItems:u,navFlyoutTeaser:p,navFlyoutTopLinksTitle:h,navFlyoutTopLinks:g,navFlyoutFeatureAppConfig:f}=e,{openItemIndex:y,itemOpenedByKeyboard:v}=r,b=ee(void 0===y?-1:y),w=L(g),C=(0,P.U)(c)&&!f;(0,i.useEffect)((()=>{y!==b&&v&&o&&o.current&&o.current.focus()}),[y,b,v]);const k=v?o:void 0,x=f?i.createElement(R,{id:s,config:f}):i.createElement(V,{title:c,menuItems:u,openItemIndex:y,onItemClick:(e,t,i,a)=>{const o=`${c} : ${i}`;n.trackMainNavigationClick(e.toString(),t,o),r.openItemIndex=e===y?void 0:e,r.itemOpenedByKeyboard=e!==y&&!!a&&!a.isTrusted},level2FirstItemRef:k}),$=(0,d.x)(p,i.createElement(J,{key:"navFlyoutTeaserSecondLevel",path:t.navFlyoutTeaserSecondLevelPath})),_=(0,d.x)(w||p,i.createElement(U,{topLinksTitle:h,topLinks:g,teaser:$})),O=(0,d.x)(C,i.createElement(Y,null,i.createElement(S.xQ,{richtext:m,disableFormatting:!0})));return i.createElement(E.Fr.Consumer,null,(({setActiveMenuLvl2ItemIndex:e})=>(e&&e(y),i.createElement(I.W,{wrap:T.Hq.always,gutter:N.X.dynamic0150},O,i.createElement(E.Yc,{navigationArea:x,asideArea:_})))))}));var ne=n(5392),ie=n(29821),ae=n(73935);const re=(0,a.Pi)((function(e){const{in:t,active:n,onClose:a,onExited:r,onEnter:o}=e,s=(0,l.fv)(),c=(0,l.p4)(),m=(0,l.t1)(),u=(0,l.V9)(),p=(0,i.useRef)(null),{backButtonLabel:h,closeButtonLabel:g,overviewPageLinkLabel:f,menuItems:y,navFlyoutTopLinksTitle:v,navFlyoutTopLinks:b,navFlyoutTeaser:w}=c,{legalAndImprintLinks:C={}}=m,S=(0,A.GD)(C),x=(0,A.cF)(C),$=L(b)||w,I=i.createElement(E.QU,null,function(e){return e.map(((e,t)=>i.createElement(k,{key:t.toString(10),id:t.toString(10),url:e.url,title:e.title,richTextTitle:e.richTextTitle,menuItems:e.menuItems,teaser:e.navFlyoutTeaser,hasSecondLevel:(0,A.lc)(e)})))}(y)),T=(0,d.x)(w,i.createElement(J,{key:"navFlyoutTeaser",path:s.navFlyoutTeaserPath})),N=(0,d.x)($,i.createElement(U,{topLinksTitle:v,topLinks:b,teaser:T}));function P(e){u.trackMainNavigationClose(),s.closeFlyoutMenu(),a&&a(e)}function O(){u.trackMainNavigationOpen();const e=(0,ae.findDOMNode)(p.current);e instanceof HTMLDivElement&&e.focus(),o&&o()}return i.createElement(ie.a,null,(e=>i.createElement(E.YM,{backButtonLabel:h,closeButtonLabel:g,mainNavigationAreaContent:I,promotionalAreaContent:N,secondLevelContent:le(y,f),imprintLinks:se(S),additionalLinks:se(x,S.length),onClose:P,in:t,active:n,onExited:r,onEnter:O,languageSwitcher:i.createElement(ne.Y,null),onBackButtonClick:s.onBackButtonClick,disclaimerAreaContent:i.createElement(_,{disclaimers:e}),flyoutRef:p})))}));function oe(e,t){return function(e,t){return Object.assign(Object.assign({},e),{menuItems:e.noFlyoutLink?[...e.menuItems]:[t,...e.menuItems]})}(e,function(e,t){return Object.assign(Object.assign({},e),{menuItems:[],title:e.navFlyoutTitle?e.navFlyoutTitle:t,richTextTitle:[{kind:"textNode",value:e.navFlyoutTitle?e.navFlyoutTitle:t}]})}(e,t))}function le(e,t){const n={};return e.forEach(((e,a)=>{if(!(0,A.lc)(e))return;const r=oe(e,t).menuItems.map((e=>L(e.menuItems)?oe(e,t):e)),o=`${a}`;n[o]=i.createElement(te,{key:o,id:o,title:e.title,richTextTitle:e.richTextTitle,menuItems:r,navFlyoutTopLinksTitle:e.navFlyoutTopLinksTitle,navFlyoutTopLinks:e.navFlyoutTopLinks,navFlyoutTeaser:e.navFlyoutTeaser,navFlyoutFeatureAppConfig:e.navFlyoutFeatureAppConfig})})),n}function se(e,t=0){return e.map(((e,n)=>i.createElement(w.S,{key:(n+t).toString(10),link:e})))}var ce=n(78384),de=n(81697),me=n(19470),ue=n.n(me);const pe=ce.default.a.withConfig({displayName:"StyledBarLink"})`
    display: flex;
    align-items: center;
    height: ${50}px; // 2px spacing to the bottom of bar
    padding-top: ${e=>e.theme.size.static150};

    text-decoration: none;
    color: ${e=>e.theme.interaction.recipe400.default};
    border-bottom: solid 2px transparent;

    &:hover {
        color: ${e=>e.theme.interaction.recipe400.hover};
        border-color: ${e=>e.theme.interaction.recipe400.hover};
    }

    &:focus {
        outline: none;
    }

    &:focus > span {
        outline: solid 2px ${e=>e.theme.interaction.recipe400.hover};
        outline-offset: 4px;
    }

    ${e=>e.isActive&&`\n\t\t\tfont-weight: bold;\n\t\t\tborder-color: ${e.theme.interaction.recipe400.default};\n\t\t`};
`,he=ce.default.li.withConfig({displayName:"StyledListItem"})`
	flex-shrink: 0;
	max-width: 100%;
	margin: 0 calc(${e=>e.theme.size.static450} / 2);

	&:first-child {
		margin-${e=>(0,de.rz)(e.theme.direction)}: 0;
	}
	&:last-child {
		margin-${e=>(0,de.lp)(e.theme.direction)}: 0;
	}
`;class ge extends i.PureComponent{render(){const{children:e,href:t,rel:n,title:a,isActive:r,onClick:o}=this.props;return i.createElement(he,null,i.createElement(pe,{href:t,onClick:o,rel:n,title:a,isActive:r},i.createElement(X.xv,{tag:X.rh.span,appearance:X.C2.copy0150,color:X.d9.inherit,staticSize:!0,bold:r},e)))}}const fe=ce.default.div.withConfig({displayName:"StyledWrap"})`
    position: relative;
    overflow: hidden;
    height: ${52}px;
    margin-bottom: -${e=>e.theme.size.static200};
    margin-top: -${e=>e.theme.size.static250};

    &:before,
    &:after {
        position: absolute;
        top: 0;
        content: '';
        width: ${e=>e.theme.size.static400};
        height: 100%;
        pointer-events: none;
    }

    &:before {
        left: 0;
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.98),
            rgba(255, 255, 255, 0)
        );
    }

    &:after {
        right: 0;
        background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0.98),
            rgba(255, 255, 255, 0)
        );
    }
`,ye=ce.default.div.withConfig({displayName:"StyledScrollWrap"})`
    display: flex;
    flex-direction: column;
    align-items: center;

    &::-webkit-scrollbar {
        width: 0; /* hide scroll-bar in chrome */
    }
    scrollbar-width: none; /* hide scroll-bar in firefox */
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    outline: none;
`,ve=ce.default.ul.withConfig({displayName:"StyledList"})`
    display: flex;
    flex-wrap: nowrap;
    margin: 0 auto; // to stop on a side when overflow happens
    padding: 0 ${e=>e.theme.size.static400};
    list-style: none;
`;function be(e,t,n){const i=e.querySelector(`[href='${t}']`);if(i instanceof HTMLElement){let t=i.offsetLeft;return n===de.Nm.RTL&&(t=e.offsetWidth-t-i.offsetWidth),t}return 0}const Ee=(e,t)=>{if(e&&t<e.length){const n=e[t];n&&n.focus()}},we=(e,t,n,i=!1)=>n!==de.Nm.RTL&&!i||n===de.Nm.RTL&&i?e<0||e===t-1?0:e+1:e<=0?t-1:e-1,Ce=(e,t)=>{if(e&&t<e.length){const n=e[t];if(n)return n.hash}return 0};class Se extends i.PureComponent{constructor(){super(...arguments),this.listRef=i.createRef(),this.isScrolling=!1,this.hasRTLNegativeScroll=!1,this.smoothHorizontalScrolling=(e,t,n)=>{const i=()=>n!==de.Nm.RTL||this.hasRTLNegativeScroll?Math.abs(e.scrollLeft)+e.clientWidth<e.scrollWidth:e.scrollLeft>0;if(!this.isScrolling){const n=window.setInterval((()=>{let a;this.isScrolling=!0,a=this.props.direction!==de.Nm.RTL||this.hasRTLNegativeScroll?Math.abs(e.scrollLeft)<t-32&&i():e.scrollLeft>e.clientWidth-t-64&&i(),a?this.props.direction===de.Nm.RTL?e.scrollLeft-=3:e.scrollLeft+=3:(this.isScrolling=!1,clearInterval(n))}),1)}},this.handleClick=e=>{const t=e.target;if(t){const e=t.parentNode;if("A"===t.tagName||"A"===e.tagName)return;const n=ae.findDOMNode(this.listRef.current);n&&(n.setAttribute("tabindex","0"),n.focus())}},this.handleKeyDown=e=>{const t=ae.findDOMNode(this.listRef.current),n=t?t.getElementsByTagName("A"):0,i=n?n.length:0,a=(r=n)?Array.from(r).findIndex((e=>e&&document.activeElement===ae.findDOMNode(e))):-1;var r;switch(e.key){case" ":if(n&&a>=0){const t=n[a];t&&t.click(),e.preventDefault()}break;case"ArrowLeft":{const r=we(a,i,this.props.direction,!0);Ee(n,r);const o=Ce(n,r);t instanceof HTMLDivElement&&o&&this.scrollToListItemWithoutAnimation(t,o),e.preventDefault();break}case"ArrowRight":{const r=we(a,i,this.props.direction);Ee(n,r);const o=Ce(n,r);t instanceof HTMLDivElement&&o&&this.scrollToListItemWithoutAnimation(t,o),e.preventDefault();break}case"Tab":{const r=e.shiftKey?a<=0?i-1:a-1:a<0||a===i-1?0:a+1,o=Ce(n,r);t instanceof HTMLDivElement&&o&&this.scrollToListItemWithoutAnimation(t,o)}}}}scrollToListItem(e,t){const n=be(e,t,this.props.direction);n>=e.offsetWidth/2&&this.smoothHorizontalScrolling(e,n,this.props.direction)}scrollToListItemWithoutAnimation(e,t){const n=be(e,t,this.props.direction),i=this.props.direction===de.Nm.RTL?-1*n+32:n-32;e.scrollLeft=i}componentDidMount(){const e=ae.findDOMNode(this.listRef.current);e instanceof HTMLDivElement&&(this.hasRTLNegativeScroll=this.props.direction===de.Nm.RTL&&0===e.scrollLeft)}componentDidUpdate(){const{activeItemUrl:e}=this.props,t=ae.findDOMNode(this.listRef.current);t instanceof HTMLDivElement&&e&&this.scrollToListItem(t,e)}render(){const{children:e}=this.props;return i.createElement(ue(),{duration:300,distance:"104px",bottom:!0},i.createElement(fe,null,i.createElement(ye,{ref:this.listRef,onKeyDown:this.handleKeyDown,onClick:this.handleClick},i.createElement(ve,{id:"InPageNavBarList"},e))))}}function ke(e){return i.createElement(ce.ThemeContext.Consumer,null,(({direction:t})=>i.createElement(Se,Object.assign({direction:t},e),e.children)))}var Le=n(58402),xe=n(37772),$e=n(83625),_e=n(64317),Ie=n(32139),Te=n(86119);const Ne=ce.default.a.withConfig({displayName:"StyledDropdownLink"})`
    display: inline-flex;
    text-decoration: none;
    color: ${e=>e.theme.interaction.recipe400.default};

    &:hover,
    &:focus {
        color: ${e=>e.theme.interaction.recipe400.hover};
        border-color: ${e=>e.theme.interaction.recipe400.hover};
    }

    &:focus {
        outline: solid 2px ${e=>e.theme.interaction.recipe400.hover};
        outline-offset: 6px;
    }

    ${e=>e.isActive&&`\n\t\t\tfont-weight: bold;\n\t\t\tborder-bottom: solid 1px ${e.theme.interaction.recipe400.default};\n\t\t`};
`,Pe=ce.default.li.withConfig({displayName:"StyledListItem"})`
    flex-shrink: 0;
    max-width: 100%;
    margin: 0 0 var(--size-dynamic0100);
    &:last-child {
        margin: 0;
    }
`;class Oe extends i.PureComponent{render(){const{children:e,href:t,rel:n,title:a,isActive:r,onClick:o}=this.props;return i.createElement(Pe,null,i.createElement(Ne,{href:t,onClick:o,rel:n,title:a,isActive:r},e))}}const Re="dropdownAnim",ze=ce.default.button.withConfig({displayName:"StyledButton"})`
    ${de.sp};
    ${e=>(0,de.G$)(e)}
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    width: auto;
    max-width: 100%;
    padding: 0 ${e=>e.theme.size.static100};

    color: ${e=>e.theme.interaction.recipe400.default};

    &:hover,
    &:focus {
        color: ${e=>e.theme.interaction.recipe400.hover};
    }

    ${e=>e.isOpen&&`\n\t\t\t&:focus {\n\t\t\t\t&:before {\n\t\t\t\t\twidth: 48px;\n\t\t\t\t\t${(0,de.rz)(e.theme.direction)}: calc(100% - 16px);\n\t\t\t\t}\n\t\t\t}\n\t\t`};
`,De=ce.default.div.withConfig({displayName:"StyledLabel"})`
    ${de.iL};
    opacity: 1;
    transform: translateY(0);
    ${(0,de.re)("opacity","transform")};
    max-width: 21ch; // max characters before the layout breaks at 320px

    ${e=>e.isOpen&&"\n\t\t\topacity: 0;\n\t\t\ttransform: translateY(50%);\n\t\t"};
`,Ae=ce.default.div.withConfig({displayName:"StyledIconHolder"})`
	position: relative;
	width: ${24}px;
	height: ${24}px;
	line-height: 1; // to remove space around the icon - especially for the anim rotate alignment
	background: ${e=>e.theme.global.backgroundColor};
	margin-${e=>(0,de.rz)(e.theme.direction)}: ${e=>e.theme.size.static150};
	flex-shrink: 0;
`,Me=ce.default.div.withConfig({displayName:"StyledIcon"})`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;

    // anim base
    ${(0,de.re)("opacity","transform")};

    // chevron
    :first-child {
        transition: ${(0,de.hl)({name:"opacity",duration:"0.15s"},{name:"transform"})};
    }

    // close
    :last-child {
        opacity: 0;
        transform: rotate(-90deg);
    }
`,Be=ce.default.div.withConfig({displayName:"StyledDropdownWrapper"})`
    max-height: 60vh;
    overflow: hidden;
    height: 0;
    opacity: 0;
    transform: translateY(-${24}px);
    ${(0,de.re)("height","transform","opacity")};
`,Fe=ce.default.ul.withConfig({displayName:"StyledList"})`
	display: flex;
	flex-flow: column;
	text-align: ${e=>(0,de.lp)(e.theme.direction)};
	list-style: none;

	margin: 0;
	padding-top: ${e=>e.isOpen?e.theme.size.static300:""};
	padding-bottom: ${e=>e.isOpen?e.theme.size.static300:""};
	padding-${e=>(0,de.lp)(e.theme.direction)}: calc(${24}px + ${e=>e.theme.size.static200});
	padding-${e=>(0,de.rz)(e.theme.direction)}: ${e=>e.theme.size.static150};
`,We=ce.default.div.withConfig({displayName:"StyledWrap"})`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    // NOTE: anim enter
    &.${Re}-enter-active {
        ${Me} {
            // chevron
            :first-child {
                transform: rotate(90deg);
                opacity: 0;
            }

            // close
            :last-child {
                opacity: 1;
                transform: rotate(0);
            }
        }

        ${Be} {
            height: ${e=>e.dropdownListHeight}px;
            transform: translateY(0);
            opacity: 1;
        }
    }

    &.${Re}-enter-done {
        ${Me} {
            // chevron
            :first-child {
                transform: rotate(90deg);
                opacity: 0;
            }

            // close
            :last-child {
                opacity: 1;
                transform: rotate(0);
            }
        }

        ${Be} {
            height: auto;
            transform: translateY(0);
            opacity: 1;

            // show scrollbar only on anim done
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
    }

    // NOTE: anim exit
    &.${Re}-exit {
        ${Me} {
            // close
            :last-child {
                opacity: 0;
                transition: ${(0,de.hl)({name:"opacity",duration:"0.15s"},{name:"transform"})};
            }
        }

        ${Be} {
            height: ${e=>e.dropdownListHeight}px;
        }
    }

    &.${Re}-exit-active {
        ${Fe} {
            height: 0;
        }
    }
`,He=(e,t)=>{if(e&&t<e.childNodes.length){const n=e.childNodes[t];n&&n.firstChild&&n.firstChild.focus()}};class je extends i.PureComponent{constructor(){super(...arguments),this.dropdownListRef=i.createRef(),this.buttonRef=i.createRef(),this.state={dropdownListHeight:0,isHidden:!0},this.onEnter=()=>{this.setState({isHidden:!1})},this.onExited=()=>{this.setState({isHidden:!0})},this.handleKeyDown=e=>{const{isOpen:t,onClick:n}=this.props,i=this.dropdownListRef.current?this.dropdownListRef.current:0,a=i?i.childNodes.length:0,r=(o=i)&&o.hasChildNodes()?Array.from(o.childNodes).findIndex((e=>{const t=e.firstChild;return document.activeElement===ae.findDOMNode(t)})):-1;var o;switch(e.key){case"Escape":t&&n&&(n(),this.buttonRef.current&&this.buttonRef.current.focus()),e.preventDefault();break;case" ":if(t&&i&&r>=0){const t=i.childNodes[r].firstChild;t&&t.click(),e.preventDefault()}break;case"ArrowUp":t&&(He(i,r<=0?a-1:r-1),e.preventDefault());break;case"ArrowDown":t&&(He(i,r<0||r===a-1?0:r+1),e.preventDefault())}}}componentDidUpdate(){this.setState({dropdownListHeight:(0,de.Cr)(this.dropdownListRef)})}render(){const{activeItemTitle:e,isOpen:t,dropdownButtonLabel:n,isInPageNavHidden:a,onClick:r,children:o}=this.props,{dropdownListHeight:l,isHidden:s}=this.state,c="InPageNavDropdownButton",d="InPageNavDropdownList";return i.createElement($e.ZP,{autoFocus:!1,disabled:a&&t||!t},i.createElement(_e.CSSTransition,{classNames:Re,in:t,timeout:300,onEnter:this.onEnter,onExited:this.onExited},i.createElement(We,{dropdownListHeight:l,onKeyDown:this.handleKeyDown},i.createElement(ze,{id:c,isOpen:t,onClick:r,"aria-expanded":t,"aria-controls":d,"aria-label":n,"aria-haspopup":"listbox",ref:this.buttonRef},i.createElement(De,{isOpen:t},i.createElement(X.xv,{tag:X.rh.span,appearance:X.C2.copy150,color:X.d9.inherit,bold:!0},e)),i.createElement(Ae,null,i.createElement(Me,null,i.createElement(Ie._,{ariaHidden:!0})),i.createElement(Me,null,i.createElement(Te.x,{ariaHidden:!0})))),i.createElement(Be,null,i.createElement(X.xv,{tag:X.rh.span,appearance:X.C2.copy0200,color:X.d9.inherit,staticSize:!0},i.createElement(Fe,{id:d,isOpen:t,"aria-hidden":!t,"aria-labelledby":c,ref:this.dropdownListRef,hidden:t?!t:s},o))))))}}var Ve;!function(e){e[e.Dropdown=0]="Dropdown",e[e.NavBar=1]="NavBar"}(Ve||(Ve={}));const qe=(0,a.Pi)((e=>{const{url:t,id:n,title:a}=e.item,r=(0,l.fv)(),o=(0,l.V9)(),s=(0,Le.h)(),c=(0,l.pJ)(),d=r.activeInPageNavigationItemId,m=n===d;function u(e){e.preventDefault(),r.lockScroll(),r.setActiveInPageNavigationItem(n),window.setTimeout((()=>r.unlockScroll()),50),o.trackNavigationBarLinkClick((0,xe.Z)(t),{name:a,url:t},s),c.navigate(t)}return e.type===Ve.Dropdown?i.createElement(Oe,{href:t,isActive:m,onClick:u},a):i.createElement(ge,{href:t,isActive:m,onClick:u},a)}));qe.displayName="OneHubInPageNavigationLink";const Ge=ce.default.div.withConfig({displayName:"StyledInPageNavDropdownWrap"})`
    @media (min-width: ${D.u3.b560}px) {
        display: none;
    }
    ${e=>e.isInPageNavHidden&&"display: none;"}
`;Ge.displayName="StyledInPageNavDropdownWrap";const Ue=ce.default.div.withConfig({displayName:"StyledInPageNavBarWrap"})`
    width: ${e=>e.theme.size.grid019};
    margin-${e=>(0,de.lp)(e.theme.direction)}:
        ${e=>e.theme.size.grid001};
    margin-inline-end: ${e=>e.theme.size.grid001};

    @media (max-width: ${D.u3.b560-1}px) {
        display: none;
    }

    ${e=>e.isInPageNavHidden&&"display: none;"};

    @media (min-width: ${D.u3.b960}px) {
        width: ${e=>e.theme.size.grid020};
    }
`;Ue.displayName="StyledInPageNavBarWrap";const Xe=(0,a.Pi)((e=>{const{inPageNavigationLabel:t,dropdownButtonLabel:n,dropdownCloseButtonLabel:a}=e,r=(0,l.fv)(),o=(0,l.V9)(),s=r.isInPageNavigationOpen,c=r.isInPageNavigationHidden,d=ee(s),m=r.activeInPageNavigationItemTitle,u=r.activeInPageNavigationItemUrl,p=r.inPageNavigationItems;(0,i.useEffect)((()=>{void 0!==d&&d!==s&&(s?o.trackInPageNavigationLoad():o.trackInPageNavigationClose())}),[s,d,o]);const h=i.createElement(je,{onClick:function(){s||o.trackInPageNavigationOpen(),r.toggleInPageNavigation()},isOpen:s,isInPageNavHidden:c,activeItemTitle:m,dropdownButtonLabel:s?a:n},p.map((e=>i.createElement(qe,{type:Ve.Dropdown,key:e.id,item:e})))),g=i.createElement(ke,{isOpen:s,activeItemTitle:m,activeItemUrl:u},p.map((e=>i.createElement(qe,{type:Ve.NavBar,key:e.id,item:e}))));return i.createElement("nav",{"aria-label":t},i.createElement(Ue,{isInPageNavHidden:c},g),i.createElement(Ge,{isInPageNavHidden:c},h))}));Xe.displayName="OneHubInPageNavigation";var Ye=n(25614);const Ke=ce.default.a.withConfig({displayName:"StyledPlainLink"})`
    text-decoration: none;
`;function Qe(e){const t=i.useRef(null),[n,a]=(0,Ye.c)(t,e);return i.createElement(Ke,Object.assign({},e,{href:a,ref:t,onClick:n}),e.children)}const Ze=ce.default.nav.withConfig({displayName:"StyledNav"})`
    // NOTE: One of limited options to render visually hidden content, but still accessible even for screenreaders
    // https://a11yproject.com/posts/how-to-hide-content/
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
`;function Je(e){return i.createElement("ul",null,function(e){return e.map(((e,t)=>{const n=e.menuItems.length>0;return i.createElement("li",{key:t.toString(10)},i.createElement(Qe,{href:e.url,tabIndex:-1},e.title),n&&Je(e.menuItems))}))}(e))}function et(){const{menuItems:e}=(0,l.p4)();return i.createElement(Ze,{role:"navigation","aria-hidden":"true"},Je(e))}var tt=n(2987),nt=n(99694);const it=ce.default.div.withConfig({displayName:"StyledIconBadgeWrapper"})`
    position: relative;
`;it.displayName="StyledIconBadgeWrapper";const at=ce.default.div.withConfig({displayName:"StyledIconBadge"})`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${16}px;
    min-width: ${16}px;
    width: auto;
    position: absolute;
    top: -8px;
    left: ${e=>e.theme.direction!==de.Nm.RTL?"21px":"2px"}; // design specific values
    line-height: ${16}px;
    border-radius: ${8}px;
    transform: translate(-50%, 0);
    background: ${e=>e.theme.interaction.recipe370.default};
    pointer-events: none;
`;at.displayName="StyledIconBadge";const rt=ce.default.span.withConfig({displayName:"StyledBadgeValue"})`
    font-size: 12px !important; // design request
    font-weight: bold;
    vertical-align: top;
    color: ${e=>e.theme.interaction.recipe950.default};
    padding: ${5}px;
`;function ot(e){const{children:t,badgeValue:n}=e;return i.createElement(i.Fragment,null,n&&0!==n?i.createElement(it,null,t,i.createElement(at,null,i.createElement(rt,null,n))):t)}rt.displayName="StyledBadgeValue";const lt="os:checkout",st=(0,a.Pi)((e=>{const t=(0,l.c3)().getSingleton("FeaturehubNavigationService"),{cart:n}=(0,l.c3)().getSingleton("CartStore"),a=((null==n?void 0:n.lineItems)||[]).length,r=(0,l.Y7)(),o=(0,l.V9)(),{iconLabel:s}=e.config,c=r.getCurrentPageRootModel(),d=c&&c.featurehubPageId===lt,m=t.navigateTo(lt,{});if(m&&!d){const e=e=>{o.trackQuickAccessLinkClick(m.createHref(),s,{sectionId:"top-bar"},"basket",{product:{Quantity:a}}),m.push(),e.preventDefault()};return i.createElement(ot,{badgeValue:a},i.createElement(y.rx,{onClick:e,ariaLabel:s}))}return i.createElement(ot,{badgeValue:a},i.createElement(y.rx,{onClick:()=>{},ariaLabel:s}))}));var ct=n(67585);const dt={lazyload:!1},mt=ce.default.div.withConfig({displayName:"TopBarWrapper"})`
    position: relative;
    z-index: ${ct.K.header.z};
`;const ut=(0,a.Pi)((function(){(function(){const e=(0,l.V9)(),t=(0,l.fv)();i.useEffect((()=>{function n(n){const i=t.isFlyoutMenuOpen;27===n.keyCode&&i&&(e.trackMainNavigationOpenClick(),t.openFlyoutMenu())}return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[t,e])})(),function(){const e=(0,l.fv)();i.useEffect((()=>{function t(){e.updateScrollPositionOnAnimationFrame()}return document.addEventListener("scroll",t),function(){document.removeEventListener("scroll",t)}}),[e])}(),function(){const e=(0,l.fv)();i.useEffect((()=>{e.onLoad()}),[e])}();const e=function(){const e=(0,l.Y7)(),t=(0,l.fv)(),n=(0,l.WS)();if(Boolean(n.integratorTemplateModel))return!n.integratorTemplateModel.whiteTopBar;const i=e.getStageType(),a=t.isTopBarAboveStage;return!(!i||i===u.WL||i===p.f)&&a}(),t=(0,l.WS)(),n=(0,l.yR)(),a=(0,l.V9)(),h=(0,l.fv)(),g=(0,l.SV)(),f=(0,l.Rp)(),v=(0,l.p4)(),E=(0,l.Y7)().getCurrentPageRootModel(),w=(0,l.Hr)(),C=i.useRef(null);let S=!0;const{layers:k}=(0,s.j)(),L=(0,l.Gl)(),{homepage:x}=v,$=function(e){return e?e.logoUrl:void 0}(E),_=L.logoClaim,[I,T]=i.useState(!1),N=i.createElement(nt.T,{variant:"default",title:w.logoTitle,ariaLabel:w.logoTitle}),P=h.isFlyoutMenuOpen,O=h.lastScrollDirection,R=h.isInPageNavigationOpen,z=h.isInPageNavigationHidden,D=h.isTopBarAboveStage,A=h.isMenuLabelVisible;i.useEffect((()=>{T(Boolean(k.length))}),[k]);const M=!P&&!z&&R&&!D,B="up"===O;if((0,i.useEffect)((()=>{!function(e,t){const n=new CustomEvent("menuChanged",{detail:{navigation:{menu:{open:e},logo:{visible:t}}}});document.dispatchEvent(n)}(P,B)}),[P,B]),c.C.isInEditor())return null;const F=(0,d.x)(t.loginModel.enabled,i.createElement(b,{key:"topbar-login-button"})),W=(0,d.x)(t.featureToggles.showShoppingIcon&&n.minicartModel.enabled,i.createElement(st,{config:n.minicartModel,key:"topbar-shopping-icon"})),H=(0,d.x)(f.searchEnabled,i.createElement(y.Pv,{onClick:e=>{a.trackSearchLayerOpenClick(),g.openLightbox(e)},key:"one-hub-search-button",ariaLabel:w.searchLabel})),j=i.createElement(Xe,{key:"one-hub-in-page-navigation",inPageNavigationLabel:w.inPageNavigationLabel,dropdownButtonLabel:w.inPageNavigationButtonLabel,dropdownCloseButtonLabel:w.inPageNavigationCloseButtonLabel}),V=h.isInPageNavigationVisible?[j]:[F,W,H],q=h.isInPageNavigationVisible?[F,W,H]:h.isInPageNavigationHidden?[j]:[],G=i.createElement(y.d,{key:"one-open-menu-btn",onClick:()=>{a.trackMainNavigationOpenClick(),h.openFlyoutMenu()},menuLabel:A?w.menuLabel:void 0,ariaLabel:w.menuLabel,buttonRef:C,ariaExpanded:P}),U=ce.default.span.withConfig({displayName:"StyledLogoWrapper"})`
            position: relative;
            display: inline-block;
            line-height: 0;
            a {
                ${e=>(0,de.G$)(e)}
            }
        `,X=x?i.createElement(U,null,i.createElement(Qe,{href:$,trackingActionOverride:function(){const e=x?x.url:"";a.trackMainNavigationLogoClick(e)}},N)):i.createElement(U,null,N),Y=_?i.createElement(y.PD,null,_):void 0;return i.createElement(mt,{isLayerOpen:I},i.createElement(r.B,{key:"one-bub-top-bar-shim"},M&&i.createElement(o.n4,{onClick:()=>{h.closeInPageNavigation()}})),i.createElement(r.B,{key:"one-hub-top-bar"},i.createElement(tt.c,{name:"topbar"},i.createElement(y.wn,{menuButton:G,logo:X,claim:Y,visibleRightItems:V,hiddenRightItems:q,hasTransparentBackground:e,hasCustomContent:!z&&R,isExpanded:B}))),i.createElement(m.H.Provider,{value:dt},i.createElement(r.B,{key:"one-hub-navigation-flyout"},P&&i.createElement(re,{onClose:function(e){S=e},onExited:()=>function(e,t){t&&setTimeout((()=>{e.current&&e.current.focus()}),0)}(C,S)}))),i.createElement(et,null))}));ut.displayName="OneHubTopBar";class pt extends i.Component{render(){return this.props.isOneHub?i.createElement(ut,null):null}}},5392:(e,t,n)=>{"use strict";n.d(t,{Y:()=>y});var i=n(80955),a=n(67294),r=n(78384),o=n(81697),l=n(16275);const s=r.default.ul.withConfig({displayName:"StyledList"})`
    ${o.zn}
`;function c(e){return a.createElement(s,null,a.createElement(l.o,null,e.children))}const d=r.default.span.withConfig({displayName:"StyledLanguageSwitcherItem"})`
    display: inline-block;

    ${e=>Boolean(e.isActive)&&`font-weight: bold; border-bottom: solid 1px ${e.theme.text.color.primary};`};
`;function m(e){const{children:t,isActive:n,lang:i}=e;return a.createElement(d,{isActive:n,lang:i},t)}var u=n(41979),p=n(64202);const h=r.default.span.withConfig({displayName:"StyledLangLinkWrapper"})``,g=r.default.nav.withConfig({displayName:"StyledNav"})``;function f(e){const{linkHref:t,locale:n,currentLink:i,lang:r}=e,o=n.toUpperCase(),l=`one_hub_language_switch_${n}`,s=Boolean(i&&t===i),c=(0,p.V9)(),d=a.useCallback((()=>{c.trackQuickAccessLinkClick(t,o)}),[c,t,o]);return a.createElement(m,{isActive:s},a.createElement(u.O,Object.assign({},e,{key:l,href:t,ignoreExternalLinkLightbox:!0,trackingActionOverride:d}),r))}const y=(0,i.Pi)((()=>{const e=(0,p.Y7)().getCurrentPageRootModel();return e&&e.languageSwitcherModel?a.createElement(g,{"aria-label":e.languageSwitcherModel.navLabel},a.createElement(c,null,function(e,t){const{languageLinks:n,currentLink:i}=e;return!n||Object.keys(n).length<2?null:Object.keys(n).map((e=>a.createElement(h,{lang:e},a.createElement(t,{lang:n[e].displayLanguage,linkHref:n[e].path,key:e,locale:e,currentLink:i,title:n[e].title,ariaLabel:n[e].title}))))}(e.languageSwitcherModel,f))):null}));y.displayName="OneHubLanguageSwitcher"},60600:(e,t,n)=>{"use strict";n.d(t,{KO:()=>h,Lu:()=>f});var i=n(67294),a=n(80955),r=n(33700),o=n(77250),l=n(17061),s=n(64202),c=n(67585),d=n(47501);const m="--s2-one-hub-navigation-top-bar-height",u=r.zo.nav.withConfig({displayName:"StyledSkiplinkWrapper"})`
    ${(0,d.xd)(m,!0)}
    position: fixed;
    width: 100%;
    top: var(${m});
    left: 0;
    z-index: ${c.K.skipLinks.z};
`,p=r.zo.div.withConfig({displayName:"StyledSkipLinkTargetWrapper"})`
    outline: none;
`,h=(0,a.Pi)((()=>{const{skipLinks:e,skipLinksWrapperLabel:t}=(0,s.x8)();return e.length?i.createElement(u,{role:"navigation","aria-label":t},e.map((e=>i.createElement(g,{label:e.label,enabled:e.enabled,onClick:e.onClick,key:`skip-link-${e.label}`})))):null})),g=({label:e,enabled:t,onClick:n})=>t?i.createElement(o.G,{visible:!1},i.createElement(l.M,{tag:"a",emphasis:"tertiary",onClick:n,href:"#"},e)):null,f=i.forwardRef(((e,t)=>i.createElement(p,{ref:t,tabIndex:-1},e.children)))},65021:(e,t,n)=>{"use strict";n.d(t,{GD:()=>r,cF:()=>o,o3:()=>l,lc:()=>s,c6:()=>c,pn:()=>d});var i=n(88132);function a(e,t){return t.hasOwnProperty(e)?t[e].links:[]}function r(e){return a("IMPRINT",e)}function o(e){return a("LEGAL",e)}function l(e,t,n){let a=n;const r=t-e;return r>=0&&(a=i.c.UP),r<0&&(a=i.c.DOWN),a}function s(e){return!!e&&(Boolean(e.menuItems&&e.menuItems.length>0)||Boolean(e.navFlyoutFeatureAppConfig))}function c(e,t){return`${e}-${t.toString(10)}`}function d(e){return e.split(/\s+/).join("")}},83504:(e,t,n)=>{"use strict";n.d(t,{u:()=>v});var i=n(67294),a=n(80955),r=n(64202),o=n(46978),l=n(78384),s=n(6792),c=n(81697),d=n(2987),m=n(5110),u=n(25614),p=n(67585),h=n(59638),g=n(76057);const f=l.default.div.withConfig({displayName:"StyledNextBestActionButtonWrapper"})`
    ${({isHidden:e})=>e&&"clip: rect(0, 0, 0, 0);"}
    position: fixed;
    ${e=>(0,c.lp)(e.theme.direction)}: ${e=>e.theme.size.dynamic0200};
    bottom: ${e=>e.theme.size.dynamic0200};
    z-index: ${p.K.main.nbab.z};
`;function y({actionId:e,enabled:t,icon:n,inaccessible:a,isHidden:o,label:l,linkType:c,path:p,sectionRef:v,subActions:b,trackingData:E}){var w,C,S,k;const[L,x]=i.useState(!1),$=(0,r.X1)(),_=(0,r.V9)(),I=i.useRef(null),T=(null==E?void 0:E.itemCount)||((null==b?void 0:b.length)||0)+1,N=(null==E?void 0:E.itemPosition)||1,P=null==E?void 0:E.sectionId;(function(e,t){i.useEffect((()=>{if(e&&e.current){const n=()=>{((e,t)=>{var n;(0,h.L)()&&(null==t?void 0:t.current)&&(null===document||void 0===document?void 0:document.activeElement)===e.current&&(0,g.ld)({animationDuration:100,distance:((null===(n=null==t?void 0:t.current)||void 0===n?void 0:n.getBoundingClientRect().top)||0)-window.innerHeight/2-100})})(e,t)},i=()=>{document.removeEventListener("keyup",n),document.addEventListener("keyup",n,!0)};return document.addEventListener("focusin",i,!0),function(){document.removeEventListener("focusin",i),document.removeEventListener("keyup",n)}}}),[e,t])})(I,v),i.useEffect((()=>{o&&x(!1)}),[o]);const O=(e,t)=>{_.trackNextBestActionButtonClick(e||`action:${t}`,t,l,{sectionId:P,itemCount:T,itemPosition:N},null==E?void 0:E.additionalTrackingData)},[R,z]=(0,u.c)(I,{href:p,linkName:l,isLayerLink:"layer"===c,trackingActionOverride:()=>O(p)}),[D,A]=i.useState({});if(i.useEffect((()=>{const t=[];b&&b.filter((e=>"action"===e.linkType&&e.actionId)).forEach((e=>t.push(e.actionId))),"action"===c&&Boolean(e)&&t.push(e),D.handler&&D.handler.forEach(((e,t)=>e.unsubscribe()));const n=new Map;return t.forEach((e=>{const t=$.get(e);t.subscribe((()=>{A({handler:n})})),n.set(e,t)})),A({handler:n}),()=>{D.handler&&D.handler.forEach(((e,t)=>e.unsubscribe()))}}),[e,b]),!t||"action"===c&&!(null===(C=null===(w=D.handler)||void 0===w?void 0:w.get(e))||void 0===C?void 0:C.enabled))return null;const M="action"===c?null===(k=null===(S=D.handler)||void 0===S?void 0:S.get(e))||void 0===k?void 0:k.href:"layer"===c?void 0:z,B={content:l,icon:(0,m.e)(n,"default")||null,tag:M?"a":"button",href:M,onClick:t=>{switch(c){case"action":(t=>{if(D.handler){t.preventDefault();const n=D.handler.get(e);O(null==n?void 0:n.href,e),n&&n.onActivate()}})(t);break;case"subactions":x(!L),O(void 0,"open-sub-nbabs");break;default:R(t)}},ariaLabel:l};return(null==E?void 0:E.itemPosition)?i.createElement(s.m,{action:B,expandContent:!0,fullWidth:!0,tabIndex:a?-1:0}):i.createElement(f,{"aria-hidden":a,isHidden:o},i.createElement(d.c,{name:"NextBestActionButton"},i.createElement(s.m,{subActions:(null==b?void 0:b.length)?(F=b,F.filter((e=>{if("action"!==e.linkType)return!0;const t=$.get(e.actionId);return t&&t.enabled})).map(((e,t)=>i.createElement(y,Object.assign({},e,{key:t,inaccessible:!L,trackingData:Object.assign(Object.assign({},E),{itemCount:T,itemPosition:F.indexOf(e)+2})}))))):void 0,action:B,ref:I,tabIndex:a?-1:0,displaySubActions:L})));var F}const v=(0,a.Pi)((({sectionId:e,sectionRef:t})=>{const n=(0,r.Y7)().getCurrentPageRootModel(),a=(0,r.fv)();if(!n||!n.nextBestActionDataModel)return null;const{sectionModels:l,pageModel:s}=n.nextBestActionDataModel,c=e=>!!e&&e in l;if(e&&!(e in l))return null;const d=e?l[e]:void 0,m=e&&d?d:s,u=c(a.activeSectionGroupId)||c(a.activeSectionId),p=e&&(e===a.activeSectionGroupId||e===a.activeSectionId)||!e&&!u,h=!!e||!u,g=((e,t)=>t&&"trackingData"in t&&t.trackingData?{sectionId:e,additionalTrackingData:{environment:{featureAppId:t.trackingData.featureAppId,featureAppIdAppVersion:t.trackingData.featureAppIdAppVersion}}}:{sectionId:e})(e,d);return!o.C.isInEditor()&&m?i.createElement(y,Object.assign({},m,{trackingData:g,isHidden:!p,inaccessible:!h,sectionRef:t})):null}))},46978:(e,t,n)=>{"use strict";n.d(t,{C:()=>i});const i=new class{constructor(){this.isInEditorValue=!1}setIsInEditor(e){this.isInEditorValue=e}isInEditor(){return this.isInEditorValue}}},74500:(e,t,n)=>{"use strict";n.d(t,{s:()=>a});const i=e=>`vwa-ngw18/components/${e}`,a=[i("editorial/items/accordionItem"),i("editorial/items/carFeatureCategoryItem"),i("editorial/items/glossaryItem"),i("editorial/items/proContraItem"),i("editorial/items/stepByStepItem"),i("editorial/sections/plainHTMLSection"),i("editorial/sections/accordionSection"),i("editorial/sections/countdownSection"),i("editorial/sections/featureClusterSection"),i("editorial/sections/glossarySection"),i("editorial/sections/iframeIntegratorSection"),i("editorial/sections/newsletterSignupSection"),i("editorial/sections/proContraSection"),i("editorial/sections/stepByStepSection"),i("editorial/sections/tableSection")]},2987:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});var i=n(67294),a=n(73935),r=n(64202);class o extends i.Component{componentDidMount(){const{isEnabled:e}=this.props,t=e&&a.findDOMNode(this);t&&t instanceof Element&&t.setAttribute("data-cy",this.props.name)}render(){return this.props.children}}const l=e=>{const{testAutomationConfigModel:t}=(0,r.WS)();return i.createElement(o,Object.assign({},e,{isEnabled:t.enabled}))}},23502:(e,t,n)=>{"use strict";n.d(t,{J:()=>a});var i=n(44124);const a=(0,i.ZP)({resolved:{},chunkName:()=>"formatteddate",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>{return e=void 0,t=void 0,a=function*(){return n.e(478).then(n.bind(n,92520))},new((i=void 0)||(i=Promise))((function(n,r){function o(e){try{s(a.next(e))}catch(e){r(e)}}function l(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,l)}s((a=a.apply(e,t||[])).next())}));var e,t,i,a},requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve:()=>92520})},49410:(e,t,n)=>{"use strict";n.d(t,{J:()=>m});var i=n(67294),a=n(78384),r=n(91658),o=n.n(r),l=n(64202);const s="-webkit-hyphens: manual; -moz-hyphens: manual; -ms-hyphens: manual; hyphens: manual; word-break: normal;",c=a.default.span.withConfig({displayName:"StyledSafeWord"})`
    ${s}
`,d="!-#%-*,-/:-;?-@[-\\]_{}Â¡Â«Â·Â»Â¿Í¾ÎÕ-ÕÖ-ÖÖ¾××××³-×´Ø-ØØ-ØØØ-ØÙª-Ù­ÛÜ-Üß·-ß¹à¥¤-à¥¥à¥°à·´à¹à¹-à¹à¼-à¼à¼º-à¼½à¾à¿-à¿á-áá»á¡-á¨á­-á®á-áá«-á­áµ-á¶á-áá-áá -á á¥-á¥á§-á§á¨-á¨á­-á­ á°»-á°¿á±¾-á±¿â-â§â°-ââ-ââ-ââ½-â¾â-ââ©-âªâ¨-âµâ-ââ¦-â¯â¦-â¦â§-â§â§¼-â§½â³¹-â³¼â³¾-â³¿â¸-â¸®â¸°ã-ãã-ãã-ãã°ã½ã ã»ê-êê³ê¾ê¡´-ê¡·ê£-ê£ê¤®-ê¤¯ê¥ê©-ê©ï´¾-ï´¿ï¸-ï¸ï¸°-ï¹ï¹-ï¹¡ï¹£ï¹¨ï¹ª-ï¹«ï¼-ï¼ï¼-ï¼ï¼-ï¼ï¼-ï¼ï¼-ï¼ ï¼»-ï¼½ï¼¿ï½ï½ï½-ï½¥]|\ud800[\udd00-\udd01\udf9f\udfd0]|\ud802[\udd1f\udd3f\ude50-\ude58]|\ud809[\udc70-\udc73";function m({children:e,__content_is_html_and_i_know_for_sure_it_is_safe_and_wont_cause_xss_vulnerability:t}){const n=(0,l.WS)().safeWords||{},a=i.useMemo((()=>(e=>{const t=e.map(o()).join("|");return new RegExp(`([\\s>${d}]|^)(${t})(?=[\\s<${d}]|$)`,"g")})([...Object.keys(n)])),[n]),r=i.useMemo((()=>e.split(a)),[a,e]);if(!Object.keys(n).length)return t?i.createElement("span",{dangerouslySetInnerHTML:{__html:e}}):i.createElement(i.Fragment,null,e);if(t){const e=r.reduce(((e,t)=>{return Object.prototype.hasOwnProperty.call(n,t)?e+(i=n[t].replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),`<span style="${s}">${i}</span>`):e+t;var i}),"");return i.createElement("span",{dangerouslySetInnerHTML:{__html:e}})}return i.createElement(i.Fragment,null,r.map(((e,t)=>Object.prototype.hasOwnProperty.call(n,e)?i.createElement(c,{key:t},n[e]):e)))}},65322:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>URLSearchParamsPonyfill});const URLSearchParamsPonyfill="undefined"==typeof URLSearchParams&&"undefined"==typeof window?eval("require")("url").URLSearchParams:URLSearchParams},36452:(e,t,n)=>{"use strict";n.d(t,{f:()=>a});var i=n(92946);const a={r_2_3:i.oM["2:3"],r_1_1:i.oM["1:1"],r_16_9:i.oM["16:9"],r_9_16:i.oM["9:16"],r_4_3:i.oM["4:3"],r_3_4:i.oM["3:4"],r_2_1:i.oM["2:1"],r_10_6:i.oM["10:6"],r_3_2:i.oM["3:2"],r_4_5:i.oM["4:5"]}},59638:(e,t,n)=>{"use strict";function i(){return"undefined"!=typeof window&&void 0!==window.document}n.d(t,{L:()=>i})},22714:(e,t,n)=>{"use strict";function i(e){return e&&e.cqItems&&e.cqItemsOrder?e.cqItemsOrder.reduce(((t,n)=>(e.cqItems&&t.push({key:n,model:e.cqItems[n]}),t)),[]):[]}n.d(t,{H:()=>i})},54425:(e,t,n)=>{"use strict";n.d(t,{d:()=>r});var i=n(7445),a=n(67294);function r(e,t,n=""){return a.createElement("div",{key:"__new",className:`${i.Constants.NEW_SECTION_CLASS_NAMES} ${n}`,"data-cq-data-path":`${t.cqPath}/*`})}},23797:(e,t,n)=>{"use strict";n.d(t,{_:()=>i});class i{create(e){return this.cached&&e===this.cached.value||(this.cached={value:e}),this.cached}}},7521:(e,t,n)=>{"use strict";n.d(t,{u:()=>i});const i=e=>{const t=e.match(/^([^.]*)/);return t&&t.length>1?t[1]:null}},35499:(e,t,n)=>{"use strict";function i(e,t){return e?t:void 0}n.d(t,{x:()=>i})},2192:(e,t,n)=>{"use strict";n.d(t,{N:()=>i});const i={TOP_LEFT:{x:"left",y:"top"},TOP_RIGHT:{x:"right",y:"top"},TOP_CENTER:{x:"center",y:"top"},BOTTOM_LEFT:{x:"left",y:"bottom"},BOTTOM_RIGHT:{x:"right",y:"bottom"},BOTTOM_CENTER:{x:"center",y:"bottom"},CENTER_CENTER:{x:"center",y:"center"},CENTER_LEFT:{x:"left",y:"center"},CENTER_RIGHT:{x:"right",y:"center"}}},12432:(e,t,n)=>{"use strict";function i(e){const t=e.length+1;return document.cookie.split(";").map((e=>e.trim())).filter((n=>n.substring(0,t)===`${e}=`)).map((e=>decodeURIComponent(e.substring(t))))[0]||null}n.d(t,{e:()=>i})},43703:(e,t,n)=>{"use strict";n.d(t,{Nl:()=>a,Rd:()=>r});var i=n(59638);const a="vwa_d6_cms";function r(){return(0,i.L)()?window[a]:n.g[a]}},84182:(e,t,n)=>{"use strict";n.d(t,{f:()=>r});var i=n(36452),a=n(2192);function r(e,t,n){let r="",o="",l="";const{originalSrc:s,imageAsset:c,focalPoint:d,aspectRatio:m,transparent:u}=t;if(c&&function(e){var t;return Boolean(null===(t=null==e?void 0:e.scene7MetaData)||void 0===t?void 0:t.validScene7Asset)}(c)){const t={scene7File:c.scene7MetaData.scene7File,metaData:{originalHeight:c.metaData.originalHeight,originalWidth:c.metaData.originalWidth,scene7Domain:c.scene7MetaData.scene7Domain},contentFile:s||""},p={aspectRatio:m?i.f[m]:void 0,focalPoint:d?a.N[d]:void 0,format:u?"png-alpha":"jpg"};r=e.getImageURL(t,800,p),o=e.getImageSrcSet(t,p),n||(l=e.getImageSrcSet(t,Object.assign(Object.assign({},p),{format:u?"webp-alpha":"webp"})))}else r=s;return{src:r,srcSet:o,srcSetWebP:l}}},5110:(e,t,n)=>{"use strict";n.d(t,{e:()=>_});var i=n(67294),a=n(59997),r=n(43858),o=n(89822),l=n(7217),s=n(43694),c=n(77029),d=n(41534),m=n(667),u=n(90104),p=n(15902),h=n(14597),g=n(83059),f=n(3039),y=n(81018),v=n(82589),b=n(77778),E=n(902),w=n(44349),C=n(32128),S=n(73169),k=n(36066),L=n(74670);const x={CALENDAR:a.f,CAR_FRONT:r.I,CONTACT_DEALER:o.l,DOWNLOAD:l.U,MAIL:s.M,SELECTED:c.N,PROFILE:d.N,CLOCK:m.S,CONTACT:u.r,INFO:p.k,PIN:h.l,STAROUTLINE:g.D},$={BROCHURE:f.W,CAR_FRONT:r.I,CALENDAR:a.f,CONFIGURE_CAR:y.B,CONTACT_DEALER:o.l,DOWNLOAD:l.U,FIND_CAR:v.w,FIND_DEALER:b.p,HELP:E.t,MAIL:s.M,OFFERS:w.Y,TESTDRIVE:C.S,SELECTED:c.N,PROFILE:d.N,CLOCK:m.S,CONTACT:u.r,CUSTOMERCENTER:E.t,DATATIMEEXTENSION:S.s,TIMER:k.B,INFO:p.k,PIN:h.l,STAROUTLINE:g.D,CERTIFIEDRETAILER:L.g};function _(e,t="default",n){if(e&&"small"===t&&e in x){const a=x[e];return i.createElement(a,Object.assign({variant:t,key:e},n))}if(e&&"default"===t&&e in $){const a=$[e];return i.createElement(a,Object.assign({variant:t,key:e},n))}}},7043:(e,t,n)=>{"use strict";n.d(t,{a:()=>r});var i=n(58795),a=n(67294);const r=(e,t,n)=>a.createElement(a.Fragment,null,t<n&&a.createElement(i.e3,null,a.createElement("span",null,"It is required to set at least 2 columns, otherwise table will not be displayed.")),Boolean(e.length)&&a.createElement(i.e3,{severity:i.vR.WARNING},e.map(((e,t)=>a.createElement("span",{key:t},e)))))},91914:(e,t,n)=>{"use strict";n.d(t,{G:()=>r});var i=function(e,t,n,i){return new(n||(n=Promise))((function(a,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function l(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((i=i.apply(e,t||[])).next())}))};const a=(e,t)=>i(void 0,void 0,void 0,(function*(){return new Promise(((n,i)=>{const a=setTimeout((()=>{clearTimeout(a),i({timeout:!0,message:`timeout of ${e} ms for ${t}`})}),e,t)}))})),r=(e,t,n)=>i(void 0,void 0,void 0,(function*(){return Promise.race([e,a(t,n)])}))},84463:(e,t,n)=>{"use strict";n.d(t,{E:()=>i});const i=e=>e.startsWith("#")},74343:(e,t,n)=>{"use strict";n.d(t,{E:()=>i});const i=(...e)=>{let t=[];return e.forEach((e=>{Array.isArray(e)?t=t.concat(e):t.push(e)})),t.join(".")}},16767:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=()=>{}},5118:(e,t,n)=>{"use strict";n.d(t,{s:()=>l});var i=n(59638),a=n(43703);const r=()=>Boolean((0,i.L)()&&(0,a.Rd)().config.getBoolean("mock","vec"));let o;const l=(e=!0)=>e&&void 0!==o?o:"undefined"!=typeof window&&"Cypress"in window?(o=r(),o):(o=r()||"undefined"!=typeof window&&window.parent&&window.parent!==window,o)},56109:(e,t,n)=>{"use strict";function i(e,t){const n=window.vwdata;n&&n.reportException({name:e,message:t})}n.d(t,{o:()=>i})},37772:(e,t,n)=>{"use strict";function i(e,t){return e?function(e,t=!1){if(!e)return"";let n=function(e){let t,n,i=0;if(0===e.length)return i.toString();for(t=0;t<e.length;t++)n=e.charCodeAt(t),i=(i<<5)-i+n,i|=0;return i.toString().replace("-","_")}(e)+"/";return e.indexOf("experience-fragments")>=0?n+=e.replace("/content/experience-fragments/","xf/").replace("/static/","/").replace("/personalized/","/").replace("/Importers/","/").replace("/jcr:content/root/","/").replace(".model.json","").replace("?wcmmode=disabled","").replace(/^\/+/,""):n+=e.replace(/.*jcr:content\/root\/main\//,"").replace(/content/,"/").replace(".model.json","").replace("?wcmmode=disabled","").replace(/^\/+/,""),n=a(n,t?149:250),n}(e,!0)+"~"+(t?a(t,100):"n/a"):""}function a(e,t){return e.length>t?e.substr(0,t):e}n.d(t,{Z:()=>i})},76057:(e,t,n)=>{"use strict";n.d(t,{ld:()=>o,GZ:()=>l});var i=n(73431);function a({animationDuration:e,easingFunction:t,movingFunction:n,callbackFunction:i}){const a=Date.now();!function r(){const o=Date.now()-a,l=t(o/e);if(n(l),!(o<e))return null==i?void 0:i();window.requestAnimationFrame(r)}()}const r=n.n(i)()(.42,.01,.22,.99),o=({distance:e,scrollableElement:t=document.documentElement,animationDuration:n=1200,onScrollEnd:i})=>{const o=t.scrollTop;a({animationDuration:n,easingFunction:r,movingFunction:n=>{t.scrollTo&&t.scrollTo(0,o+e*n)},callbackFunction:i})},l=({distance:e,scrollableElement:t=document.documentElement,animationDuration:n=1200,onScrollEnd:i})=>{const o=t.scrollTop;a({animationDuration:n,easingFunction:r,movingFunction:n=>{t.scrollTo&&t.scrollTo(0,o+(e-o)*n)},callbackFunction:i})}},52756:(e,t,n)=>{"use strict";function i(e){return Boolean(e&&""!==e)}n.d(t,{U:()=>i})},98769:(e,t,n)=>{"use strict";function i(e){return e.split("@")[0]}n.d(t,{k:()=>i})},14272:(e,t,n)=>{"use strict";n.d(t,{a:()=>i});const i=e=>{var{children:t}=e;return t(function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n}(e,["children"]))};i.displayName="StyledPropsExtractor"},21686:(e,t,n)=>{"use strict";var i;n.d(t,{W:()=>i}),function(e){e.HOME="Homepage Template",e.EDITORIAL="Editorial Page Template",e.EDITORIAL_OVERVIEW="Editorial Overview Page Template",e.FEATURE_APP="Feature App Template",e.MODEL_OVERVIEW="Model Overview Page Template",e.SHOWROOM="Showroom Page Template"}(i||(i={}))},92344:(e,t,n)=>{"use strict";function i(e,t,n,i,a,r){let o;const l=e&&e.isPersonalizable?{personalizationContentId:e.contentId,personalizationPlaceholderId:e.placeholderId,personalizationPersonalizable:e.isPersonalizable,personalizationPersonalized:e.wasPersonalized}:{},s=t?{sectionId:t.sectionId,contentName:t.contentName}:{},c=i?{contentLabels:i}:{},d=r&&a?{itemPosition:r,itemCount:a}:{};return o=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},l),s),c),d),{sectionGroupContentId:n}),o}n.d(t,{E:()=>i})},55238:(e,t,n)=>{"use strict";function i(e){return e.trackingId||e.name}n.d(t,{W:()=>i})},30271:(e,t,n)=>{"use strict";n.d(t,{T:()=>r});var i=n(43703);const a=e=>new RegExp(`%%${e}`),r=(e,t)=>{let n=e;for(const r in t)if(t[r]){const o=a(r);null===e.match(o)&&(0,i.Rd)().log.layer.warn(`No placeholder found for translation replacement key: ${r} in string: ${e}`),n=n.replace(o,t[r])}return n}},91727:(e,t,n)=>{"use strict";n.d(t,{G:()=>o});var i=n(64202),a=n(67294),r=n(59638);function o(){const e=(0,i.wL)().general,t=(0,i.c3)().getSingleton("ReactRenderService"),[n,o]=a.useState(!t.hydrating&&(0,r.L)());return a.useEffect((()=>o(!0)),[]),e.debug("client-only rendering: %s",n),n}},44103:(e,t,n)=>{"use strict";function i(e){return e.includes("/content/experience-fragments")}function a(e){return i(e)&&e.includes("static/editorial")}n.d(t,{Sj:()=>i,$g:()=>a})},67585:(e,t,n)=>{"use strict";n.d(t,{K:()=>i});const i={skipLinks:{z:3},header:{z:2},main:{z:1,movingFrame:{z:"unset"},overlay:{z:0},nbab:{z:1}},footer:{z:0},layers:{z:3,movingFrame:{z:0}}}}},__webpack_module_cache__={},deferred,leafPrototypes,getProto,inProgress,dataWebpackPrefix;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,t,n,i)=>{if(!t){var a=1/0;for(l=0;l<deferred.length;l++){for(var[t,n,i]=deferred[l],r=!0,o=0;o<t.length;o++)(!1&i||a>=i)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[o])))?t.splice(o--,1):(r=!1,i<a&&(a=i));r&&(deferred.splice(l--,1),e=n())}return e}i=i||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>i;l--)deferred[l]=deferred[l-1];deferred[l]=[t,n,i]},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var n=Object.create(null);__webpack_require__.r(n);var i={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var a=2&t&&e;"object"==typeof a&&!~leafPrototypes.indexOf(a);a=getProto(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,__webpack_require__.d(n,i),n},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((t,n)=>(__webpack_require__.f[n](e,t),t)),[])),__webpack_require__.u=e=>({340:"raremodules",478:"formatteddate"}[e]+"."+{340:"af6bf560caa6f3f37a04",478:"7447ba95ef08d7984f90"}[e]+".bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),inProgress={},dataWebpackPrefix="ngw18-frontend:",__webpack_require__.l=(e,t,n,i)=>{if(inProgress[e])inProgress[e].push(t);else{var a,r;if(void 0!==n)for(var o=document.getElementsByTagName("script"),l=0;l<o.length;l++){var s=o[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==dataWebpackPrefix+n){a=s;break}}a||(r=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack",dataWebpackPrefix+n),a.src=e),inProgress[e]=[t];var c=(t,n)=>{a.onerror=a.onload=null,clearTimeout(d);var i=inProgress[e];if(delete inProgress[e],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(n))),t)return t(n)},d=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),r&&document.head.appendChild(a)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.p="/idhub/etc/clientlibs/vwa-ngw18/ngw18-frontend/",(()=>{var e={736:0};__webpack_require__.f.j=(t,n)=>{var i=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise(((n,a)=>i=e[t]=[n,a]));n.push(i[2]=a);var r=__webpack_require__.p+__webpack_require__.u(t),o=new Error;__webpack_require__.l(r,(n=>{if(__webpack_require__.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",o.name="ChunkLoadError",o.type=a,o.request=r,i[1](o)}}),"chunk-"+t,t)}},__webpack_require__.O.j=t=>0===e[t];var t=(t,n)=>{var i,a,[r,o,l]=n,s=0;for(i in o)__webpack_require__.o(o,i)&&(__webpack_require__.m[i]=o[i]);if(l)var c=l(__webpack_require__);for(t&&t(n);s<r.length;s++)a=r[s],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[r[s]]=0;return __webpack_require__.O(c)},n=self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(23982))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(20049))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(70463))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(66175))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(85823))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(36416))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(10148))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(35224))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(14436))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(68650))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(23755))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(17527))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(21178))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(87244))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(63886))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(82755))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(3353))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(29821))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(1413))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(92832))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(89214))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(49596))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(38152))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(64202))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(62543))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(42878))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(605))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(1113))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(91067))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(94800))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(54787))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(91534))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(61283))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(21977))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(28025))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(81145))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(71409))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(31396))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(72809))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(44546))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(60355))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(93788))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(9562))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(88132))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(87241))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(54383))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(59813))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(34632))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(54475))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(76896))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(62300))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(56149))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(5098))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(57695))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(27864))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(67155))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(92887))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(14232))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(46622))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(21349))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(21312))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(3542))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(84179))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(19880))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(66985))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(65070))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(72970))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(4313))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(83896))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(36699))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(65300))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(91176))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(56870))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(52816))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(2188))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(26960))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(66342))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(93674))),__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(18926)));var __webpack_exports__=__webpack_require__.O(void 0,[287,425,384,935,955,964],(()=>__webpack_require__(77918)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=reactspa.32e6786f645dcf62a009.js.map