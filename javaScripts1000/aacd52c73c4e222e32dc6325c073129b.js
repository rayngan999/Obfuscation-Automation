(self.webpackChunkteapot=self.webpackChunkteapot||[]).push([[678],{1468:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(7294),r=function(e){var t=e.backgroundContentClass,a=e.mobileFriendly,r=e.children;return n.createElement("div",{className:t+" "+(a?"mobile-friendly":"")},r)};r.defaultProps={mobileFriendly:!1,backgroundContentClass:"default-hero-banner"};var l=r},3763:function(e,t,a){"use strict";a.d(t,{Z:function(){return L}});var n=a(7294),r=a(5444),l=a(6978),o=a(107),i=a(228),c=a(6843),s=(0,o.injectIntl)((function(e){var t=e.intl;return n.createElement("div",{id:"covid-banner","data-testid":"covid-banner"},n.createElement(i.Z,{id:"covid-banner-warning",type:"warning"},n.createElement(o.FormattedMessage,{id:"covid.message"})," ",n.createElement(c.Z,{to:t.formatMessage({id:"covid.url"})},n.createElement(o.FormattedMessage,{id:"covid.link"}))))}));s.displayName="CovidBanner";var m=s,d=a(4375),u=a(2018),g=a.n(u),f=a(1312);function p(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(a)return(a=a.call(e)).next.bind(a);if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var E=function e(t){t.style="";for(var a,n=p(t.children);!(a=n()).done;){e(a.value)}},b=function(e,t){return e.parentElement.style.display=t?"block":"none"},h=function(e){n.useLayoutEffect((function(){var t=e.current,a=new MutationObserver((function(e){for(var a,n=p(e);!(a=n()).done;){var r=a.value;"childList"===r.type&&r.addedNodes.length>0?(E(t),b(t,!0)):"childList"===r.type&&r.removedNodes.length>0&&b(t,!1)}}));return a.observe(t,{childList:!0,subtree:!1}),function(){return a.disconnect()}}),[])},k=(0,o.injectIntl)((function(e){var t=e.intl,a=n.useRef(null);return h(a),n.createElement(f.v,{id:"website-navigation"},n.createElement(f.s,{url:"/credit-cards/compare/",className:"cards-link"},n.createElement(o.FormattedMessage,{id:"navheader.link.credit-cards"})),n.createElement(f.s,{url:t.formatMessage({id:"navheader.link.life-and-credit.url"}),className:"service-link",target:"_blank",rel:"noopener noreferrer"},n.createElement(o.FormattedMessage,{id:"navheader.link.life-and-credit.text"})),n.createElement("div",{id:"chat-now-wrapper"},n.createElement("div",{id:"tfsCanadaButton",ref:a})))}));k.displayName="WebHeaderNavigation";var N=k,y=a(6786),M=a(6024),F=a(5414),w=(0,o.injectIntl)((function(e){var t=e.intl,r=n.useState(!1),l=r[0],i=r[1];n.useEffect((function(){return i(!0)}),[]);var c,s;return n.createElement(f.v,{id:"website-actions",align:"right"},l&&n.createElement(F.q,null,n.createElement("script",{type:"text/javascript",src:(c=t.locale,s=!0,a.g.window&&(s=y.VK.includes(a.g.window.location.hostname)),"//display.ugc.bazaarvoice.com/"+(s?"":"bvstaging/")+"static/CapitalOne/Canada/"+c+"_CA/bvapi.js")})),n.createElement(f.s,{url:t.formatMessage({id:"navheader.link.support-centre.url"}),className:"support-centre",target:"_blank",rel:"noopener noreferrer"},n.createElement(o.FormattedMessage,{id:"navheader.link.support-centre.text"})),n.createElement(f.s,{url:"#language-toggle",className:"language-toggle",target:"_self",onClick:function(e){e.preventDefault();var n="fr"===t.locale?"en":"fr";delete a.g.BV,(0,M.wo)(n)}},n.createElement(o.FormattedMessage,{id:"navheader.link.toggle-lang-"+("en"===t.locale?"fr":"en")})),n.createElement(f.s,{url:"/sign-in/",className:"sign-in-link"},n.createElement(o.FormattedMessage,{id:"navheader.link.sign-in"})))}));w.displayName="WebHeaderActions";var C=w,I=(0,o.injectIntl)((function(e){var t=e.intl;return n.createElement(c.Z,{to:"/",className:"homepage-link",title:t.formatMessage({id:"_sc.navheader.logo"})},n.createElement("img",{src:g(),alt:"Capital One",className:"site-logo"}))}));I.displayName="LogoLink";var x=function(){return n.createElement(d.Z,{id:"website-header",showMenuOnMobile:!0,logoLink:n.createElement(I,null),mainContentIdForBypass:"main"},n.createElement(N,null),n.createElement(C,null))},Z=a(3656),j=(0,o.injectIntl)((function(e){var t=e.intl,a=(0,n.useState)(!1),r=a[0],l=a[1],i=(0,n.useState)(!1),c=i[0],s=i[1],m=(0,n.useState)(!1),d=m[0],u=m[1],g=(0,n.useState)(!1),p=g[0],v=g[1];return n.createElement("section",{id:"web-footer-navigation"},n.createElement("div",{id:"footer-navigation-content",className:"container-body"},n.createElement("section",{id:"footer-about-block"},n.createElement("header",{className:r?"opened":"",onClick:function(){return l(!r)},role:"button",tabIndex:"0",onKeyUp:function(){return l(!r)}},n.createElement("div",{id:"footer-about-title",className:"plain-text"},n.createElement(o.FormattedMessage,{id:"navfooter.about.about-us"}))),n.createElement("div",{id:"footer-about-block-content",className:"container-body"+(r?" show":"")},n.createElement(f.v,{id:"footer-about-list",orientation:"vertical"},n.createElement(f.s,{url:"/about/corporate-information/",className:"about-capital-one-link"},n.createElement(o.FormattedMessage,{id:"navfooter.about.about-capitalone"})),n.createElement(f.s,{url:t.formatMessage({id:"navheader.link.life-and-credit.url"}),className:"service-link",target:"_blank",rel:"noopener noreferrer"},n.createElement(o.FormattedMessage,{id:"navheader.link.life-and-credit.text"})),n.createElement(f.s,{url:t.formatMessage({id:"navfooter.about.careers-link"}),className:"careers-link",title:t.formatMessage({id:"navfooter.about.careers-title"}),target:"_blank",rel:"noopener"},n.createElement(o.FormattedMessage,{id:"navfooter.about.careers"}))))),n.createElement("section",{id:"footer-legal-block"},n.createElement("header",{className:c?"opened":"",onClick:function(){return s(!c)},role:"button",tabIndex:"0",onKeyUp:function(){return s(!c)}},n.createElement("div",{id:"footer-legal-title",className:"plain-text"},n.createElement(o.FormattedMessage,{id:"navfooter.legal.legal"}))),n.createElement("div",{id:"footer-legal-block-content",className:"container-body"+(c?" show":"")},n.createElement(f.v,{id:"footer-legal-list",orientation:"vertical"},n.createElement(f.s,{url:"/about/terms-of-use/",className:"terms-link",title:t.formatMessage({id:"navfooter.legal.terms-title"})},n.createElement(o.FormattedMessage,{id:"navfooter.legal.terms"})),n.createElement(f.s,{url:"/privacypolicy/",className:"privacy-link",title:t.formatMessage({id:"navfooter.legal.privacy-title"})},n.createElement(o.FormattedMessage,{id:"navfooter.legal.privacy"})),n.createElement(f.s,{url:"/privacypolicy/#oba",className:"ad-choices-link",native:"true"},n.createElement(o.FormattedMessage,{id:"navfooter.legal.adChoices"}))))),n.createElement("section",{id:"footer-learn-more-block"},n.createElement("header",{className:d?"opened":"",onClick:function(){return u(!d)},role:"button",tabIndex:"0",onKeyUp:function(){return u(!d)}},n.createElement("div",{id:"footer-learn-more-title",className:"plain-text"},n.createElement(o.FormattedMessage,{id:"navfooter.learn.learn-more"}))),n.createElement("div",{id:"footer-learn-more-block-content",className:"container-body"+(d?" show":"")},n.createElement(f.v,{id:"footer-learn-more-list",orientation:"vertical"},n.createElement(f.s,{url:"/contact-us/capitalonecards/",className:"contact-us-link"},n.createElement(o.FormattedMessage,{id:"navfooter.learn.contact-us"})),n.createElement(f.s,{url:t.formatMessage({id:"navheader.link.support-centre.url"}),className:"support-centre",target:"_blank",rel:"noopener noreferrer"},n.createElement(o.FormattedMessage,{id:"navheader.link.support-centre.text"})),n.createElement(f.s,{url:t.formatMessage({id:"navfooter.learn.mail-offer-link"}),className:"mail-offer-link",title:t.formatMessage({id:"navfooter.learn.mail-offer-title"}),target:"_blank",rel:"noopener"},n.createElement(o.FormattedMessage,{id:"navfooter.learn.mail-offer"})),n.createElement(f.s,{url:t.formatMessage({id:"navfooter.learn.cyber-incident-link"}),target:"_blank",rel:"noopener"},n.createElement(o.FormattedMessage,{id:"navfooter.learn.cyber-incident"}))))),n.createElement("section",{id:"footer-online-banking-block"},n.createElement("header",{className:p?"opened":"",onClick:function(){return v(!p)},role:"button",tabIndex:"0",onKeyUp:function(){return v(!p)}},n.createElement("div",{id:"footer-online-banking-title",className:"plain-text"},n.createElement(o.FormattedMessage,{id:"navfooter.online.online-banking"}))),n.createElement("div",{id:"footer-online-banking-block-content",className:"container-body"+(p?" show":"")},n.createElement(f.v,{id:"footer-online-banking-list",orientation:"vertical"},n.createElement(f.s,{url:"/sign-in/",className:"sign-in-link"},n.createElement(o.FormattedMessage,{id:"navfooter.online.sign-in"})))))))}));j.displayName="WebFooterNavigation";var S=j,_=function(){return n.createElement(Z.Z,{id:"website-footer"},n.createElement(S,null))},A=function(e){var t=e.children,a=e.pageName,o=e.className,i=(0,r.useStaticQuery)("3649515864"),c=["contact-capitalonecards-page","home-page","product-details-costco"].includes(a);return n.createElement("div",{className:"page-layout "+o,"data-for":a},c&&n.createElement(m,null),n.createElement(l.Z,null),n.createElement(x,{siteTitle:i.site.siteMetadata.title}),n.createElement("main",{id:"main"},t),n.createElement(_,null))};A.defaultProps={pageName:"",className:""};var L=A},6786:function(e,t,a){"use strict";a.d(t,{VK:function(){return n},wW:function(){return r},V9:function(){return l},Pc:function(){return o},W_:function(){return i}});var n=["capitalone.ca","www.capitalone.ca"],r=["gm","lgm","gsm","atp","acp","costco"],l=["gm","lgm","gsm"],o=["atp","acp","costco"],i=["atp","acp"]},6515:function(e,t,a){"use strict";a.d(t,{T:function(){return l}});var n=a(7294),r=a(107),l=function(e){return n.createElement("sup",null,n.createElement(r.FormattedMessage,{id:"common.superscripts."+e}))}},9624:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),r=a(107),l=a(6843),o=a(1468),i=a(3763),c=a(7074),s=a(5697),m=a.n(s),d=a(1312),u=(0,r.injectIntl)((function(e){var t=e.className;return n.createElement("section",{className:t},n.createElement("header",null,n.createElement("h3",null,n.createElement(r.FormattedMessage,{id:"cards.highlights.title"}))),n.createElement(d.v,{id:"card-highlights",orientation:"vertical",iconsPosition:"top",align:"center"},n.createElement(d.s,{icon:"oi-credit-card outline",url:"/credit-cards/compare/?filter=all",className:"all-cards-link"},n.createElement(r.FormattedMessage,{id:"cards.highlights.see-all"})),n.createElement(d.s,{icon:"oi-gift outline",url:"/credit-cards/compare/?filter=rewards",className:"rewards-cards-link"},n.createElement(r.FormattedMessage,{id:"cards.highlights.get-rewards"})),n.createElement(d.s,{icon:"oi-trophy outline",url:"/credit-cards/compare/?filter=build",className:"build-cards-link"},n.createElement(r.FormattedMessage,{id:"cards.highlights.build-or-rebuild"}))))}));u.propTypes={className:m().string,intl:r.intlShape},u.defaultProps={className:""},u.displayName="CardHighlights";var g=u,f=a(6515),p=(0,r.injectIntl)((function(e){var t=e.intl;return n.createElement(i.Z,{pageName:"home-page"},n.createElement(c.Z,{title:t.formatMessage({id:"pages.home.page-title"}),description:t.formatMessage({id:"pages.home.page-desc"}),lang:t.locale}),n.createElement("div",{className:"home-page-body-wrapper"},n.createElement("div",{className:"page-content-wrapper","data-for":"homepage-hero"},n.createElement(o.Z,{backgroundContentClass:"home-page-hero-banner",mobileFriendly:!0},n.createElement("p",{className:"as-h1"},n.createElement(r.FormattedMessage,{id:"hero.home-page.message",values:{tm:(0,f.T)("tm")}})),n.createElement(l.Z,{to:"/quickcheck/",className:"action button see-cards-button"},n.createElement(r.FormattedMessage,{id:"hero.home-page.cta"})))),n.createElement("div",{className:"home-page-card-highlights"},n.createElement(g,{className:"page-content"})),n.createElement("div",{className:"mail-offer"},n.createElement("p",null,n.createElement(r.FormattedMessage,{id:"pages.home.mail-offer.message",values:{ask:n.createElement("strong",null,n.createElement(r.FormattedMessage,{id:"pages.home.mail-offer.ask"})),cta:n.createElement(l.Z,{to:t.formatMessage({id:"pages.home.mail-offer.cta-link"})},n.createElement(r.FormattedMessage,{id:"pages.home.mail-offer.cta"}))}}))),n.createElement("p",{className:"accessibility"},n.createElement(l.Z,{to:"/contact-us/concerns/"},n.createElement(r.FormattedMessage,{id:"pages.home.accessibility"})))))}))}}]);
//# sourceMappingURL=teapot-component---src-pages-index-js-c13dce067f9737be5ac5-chunk.js.map