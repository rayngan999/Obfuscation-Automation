(self.sitewideWebpack=self.sitewideWebpack||[]).push([[5827],{23646:function(e,t,r){var n=r(67228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(23646),a=r(46860),i=r(60379),o=r(98206);e.exports=function(e){return n(e)||a(e)||i(e)||o()},e.exports.default=e.exports,e.exports.__esModule=!0},53742:function(e,t,r){"use strict";r.r(t),r.d(t,{I18nProvider:function(){return x},useLocalize:function(){return j},withLocalize:function(){return O}}),r(63804);var n=r(28481),a=r(83518),i=r(8679),o=r.n(i),u=r(27361),l=r.n(u),c=r(96156),s=r(70917),d=r(22122),f=(0,a.createContext)("useLocalize called without I18nProvider"),p=(0,n.Z)(f,2),g=p[0],v=p[1],m=function(e,t){return l()(e,t,t)};function y(e,t,r,n){var a=r.count;return void 0===a||function(e,t){return{"en-US":[1],"en-CA":[1],"fr-CA":[0,1]}[t].includes(e)}(a,n)?m(e,t):m(e,"".concat(t,"_plural"))}function b(e,t){return function(e){for(var t,r=new RegExp("{{(.+?)}}","g"),n=[];t=r.exec(e);)n.push(t);return n}(e).reduce((function(e,r){var a=(0,n.Z)(r,2),i=a[0],o=a[1],u=m(t,o);return e.replace(i,u)}),e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var w={"en-US":"USD","en-CA":"CAN","fr-CA":"CAN"};function x(e){var t,r,n=e.translations,a=e.locale,i=e.children,o=function(e){return e.replace("_","-")}(a),u=null!==(t=null===(r=n[o])||void 0===r?void 0:r.translation)&&void 0!==t?t:{},l=function(e,t){return function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return b(y(e,r,n,t),n)}}(u,o),d=function(e){return function(t,r){var n=w[e];return new Intl.NumberFormat(e,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({style:"currency",currency:n},r)).format(t)}}(o);return(0,s.jsx)(v.Provider,{value:{locale:o,translations:u,localize:l,formatCurrency:d}},i)}var j=function(){var e=g();return{localize:e.localize,formatCurrency:e.formatCurrency}};function O(e){function t(t){var r=j();return(0,s.jsx)(e,(0,d.Z)({},r,t))}return t.displayName="WithLocalize(".concat((0,a.getDisplayName)(e),")"),o()(t,e)}},55543:function(e,t,r){"use strict";var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(59713)),i=(n(r(63804)),n(r(45697))),o=r(80018),u=n(r(53304)),l=r(70917);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=o.styled.div((function(e){var t=e.theme,r=(0,o.getFont)("primary")({theme:t,crossBrand:!1}),n={color:t.color.gray60,overflow:"hidden",textOverflow:"ellipsis",lineHeight:"1.2",fontWeight:"400",whiteSpace:"normal",marginTop:"0.5rem",position:"relative"},a=(0,o.forBrands)(t,{gap:function(){return"left"},gapfs:function(){return"left"},at:function(){return"left"},default:function(){return"center"}});return s(s(s({},r),n),{},{textAlign:a,display:"flex",alignItems:"center"})})),f=function(e){var t=e.ratings,r=e.product,n=e.tabIndex,a=t.minRating,i=t.showReviewCount;if(r.Rating&&parseInt(r.Rating,10)>=parseInt(a,10)){var o=parseFloat(r.Rating,10);return(0,l.jsx)(d,null,(0,l.jsx)(u.default,{reviewCount:i?r.ReviewCount:0,starRating:o,tabIndex:n}))}return null},p=f;t.default=p,f.propTypes={product:i.default.shape({Rating:i.default.string.isRequired,ReviewCount:i.default.string.isRequired}).isRequired,productTextStyles:i.default.shape({productPrice:i.default.object,productSalePrice:i.default.object,productTitle:i.default.object}),ratings:i.default.shape({minRating:i.default.number,reviewCountColor:i.default.string,showRating:i.default.bool,showReviewCount:i.default.bool})},f.defaultProps={product:{Rating:"0",ReviewCount:"0"},data:{ratings:{minRating:0,reviewCountColor:"#000000",showRating:!1,showReviewCount:!1},productTextStyles:{productPrice:{},productSalePrice:{},productTitle:{}}}}},88037:function(e,t,r){"use strict";var n=r(95318),a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(59713)),o=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(63804)),u=n(r(45697)),l=n(r(50643)),c=r(57888),s=r(56648),d=n(r(9148)),f=n(r(55543)),p=r(70917);function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=("undefined"==typeof __USE_I18N__?r(57058):r(53742)).useLocalize,b=function(e){var t,r,n,a=e.pageType,i=void 0===a?"home":a,u=e.data,c=e.product,g=e.cnt,v=e.isLarge,b=u.priceNowText,h=u.priceWasText,w=u.priceOffText,x=u.productTextStyles,j=void 0===x?{}:x,O=y(),P=O.localize,_=O.formatCurrency,R=function(e){return e&&e.length>0?_(e):""},S=null!==(t=e.data.tid)&&void 0!==t?t:"".concat(i,"_").concat(u.scheme),C="".concat(c.DetailURL,"&mlink=5001,1,").concat(S,"_").concat(g,"&clink=1"),k=(0,o.useContext)(s.BreakpointContext).smallerThan,T=100;u.gridLayout.productPerRow?T=100/(u.gridLayout.productPerRow||1):null!==(r=u.gridLayout)&&void 0!==r&&null!==(n=r.productsPerRow)&&void 0!==n&&n.mobile&&u.gridLayout.productsPerRow.desktop&&(T=k("large")?100/(u.gridLayout.productsPerRow.mobile||1):100/(u.gridLayout.productsPerRow.desktop||1));var I,M=function(e,t,r){if("marketingImage"!==t)return e.productCardStyles.style||{};var n=e.marketingOptionalImage.style||{};return n=n.image||{},(n=r?n.desktop:n.mobile)||{}}(u,g,v),N=u.productCardImageStyles,z=function(){var e;return!N||!N.style||0===Object.entries(null!==(e=N.style)&&void 0!==e?e:{}).length},F=z()?{}:u.productCardImageStyles.style;"grid"===u.layout?(M=m(m({},M),{},{width:"".concat(T,"%")}),I=z()?m(m({},M),{},{width:"100%"}):m(m({},F),{},{width:"100%"})):I=!z()&&F||M;var L=u.ratings,D=void 0===L?{}:L;return(0,p.jsx)("div",{className:"productCard",css:["display:inline-block;vertical-align:block;",M,"",""]},(0,p.jsx)("div",{className:"certona_productCard_inner"},(0,p.jsx)(l.default,{to:C},(0,p.jsx)("div",null,(0,p.jsx)("img",{alt:c.ProductName,css:I,src:c.ImageURL}),(0,p.jsx)("div",{className:"sds_font--primary certona_prod_txt",dangerouslySetInnerHTML:{__html:c.ProductName.replace(/(&#\d*;?)/g,"")},style:(0,d.default)(j,"productTitle")}),u.priceFlag?function(){var e,t,r,n=c.CurrentPrice,a=c.OriginalPrice,i=(e=n,t=parseFloat(a),r=parseFloat(e),!isNaN(t)&&!isNaN(r)&&r<t);if(c.CurrentPrice.length>0&&c.OriginalPrice.length>0&&i){var o=function(e,t){var r=parseFloat(t),n=parseFloat(e);if(!isNaN(r)&&!isNaN(n)){var a=100*(r-n)/r;return Math.round(a)}return""}(c.CurrentPrice,c.OriginalPrice),l=c.OriginalPrice?"".concat(h||P("marketing.recommendations.price.was")," ").concat(c.OriginalPrice):"";return(0,p.jsx)("div",{className:"sds_font--primary certona_prod_txt"},(0,p.jsx)("div",{"aria-label":l,className:"certona_prod_original-price",style:(0,d.default)(j,"productPrice",u.strikeThroughOriginalPriceFlag)},R(c.OriginalPrice||"")),u.showPercentage&&o>0?(0,p.jsx)("span",{className:"certona_prod_percentage",style:(0,d.default)(j,"productPercentage")},"Â ",o,"%"," ",w||P("marketing.recommendations.price.off")):null,c.CurrentPrice&&(0,p.jsx)("div",{className:"certona_prod_sale-price",style:(0,d.default)(j,"productSalePrice")},b||P("marketing.recommendations.price.now")," ",R(c.CurrentPrice||"")))}return c.OriginalPrice.length>0?(0,p.jsx)("div",{className:"sds_font--primary certona_prod_txt certona_prod_original-price"},(0,p.jsx)("div",{style:(0,d.default)(j,"productPrice")},R(c.OriginalPrice||""))):null}():null,u.showMarketingFlag&&c.MarketingFlag?(0,p.jsx)("div",{className:"sds_font--primary certona_prod_txt certona_prod_txt--marketing-flag"},(0,p.jsx)("p",{css:(0,d.default)("productMarketingFlag"),dangerouslySetInnerHTML:{__html:c.MarketingFlag},style:(0,d.default)(j,"productMarketingFlag")})):null,D.showRating?(0,p.jsx)(f.default,{product:c,ratings:D,tabIndex:-1}):null))))};b.propTypes={cnt:u.default.number,data:u.default.shape({gridLayout:u.default.shape({productsPerRow:u.default.shape({desktop:u.default.number,mobile:u.default.number})}),priceFlag:u.default.bool,priceNowText:u.default.string,priceOffText:u.default.string,priceWasText:u.default.string,productCardImageStyles:u.default.shape({style:u.default.object}),productTextStyles:u.default.shape({productPrice:u.default.object,productSalePrice:u.default.object,productTitle:u.default.object}),ratings:u.default.shape({minRating:u.default.number,reviewCountColor:u.default.string,showRating:u.default.bool,showReviewCount:u.default.bool}),scheme:u.default.string.isRequired,showMarketingFlag:u.default.bool,showPercentage:u.default.bool,strikeThroughOriginalPriceFlag:u.default.bool,tid:u.default.string}),isLarge:u.default.bool.isRequired,product:u.default.shape({CurrentPrice:u.default.string.isRequired,DetailURL:u.default.string.isRequired,ImageURL:u.default.string.isRequired,MarketingFlag:u.default.string,OriginalPrice:u.default.string.isRequired,ProductName:u.default.string.isRequired}).isRequired},b.defaultProps={cnt:0,product:{MarketingFlag:null},data:{ratings:{minRating:0,reviewCountColor:"#000000",showRating:!1,showReviewCount:!1},showMarketingFlag:!1,showPercentage:!1,priceFlag:!1,priceNowText:"",priceOffText:"",priceWasText:"",strikeThroughOriginalPriceFlag:!1,productTextStyles:{productPrice:{},productSalePrice:{},productTitle:{}},gridLayout:{productsPerRow:{desktop:1,mobile:1}},tid:void 0,productCardImageStyles:{style:{}}}};var h=(0,c.withAppState)((function(e){return{brandName:e.brandName,pageType:e.pageType}}))(b);t.default=h},25827:function(e,t,r){"use strict";var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.mapRecommendations=void 0;var a=n(r(67154)),i=(n(r(63804)),n(r(88037))),o=r(70917);t.mapRecommendations=function(e,t){var r,n=e;return e.item?n=Object.values(e.item):null!==(r=e[0])&&void 0!==r&&r.item&&(n=e[0].item),n.map((function(e,r){return function(e,r){return(0,o.jsx)(i.default,(0,a.default)({key:e.ID,cnt:r,product:e},t))}(e,r)}))}},9148:function(e,t,r){"use strict";var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(82492));t.default=function(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n?{textDecoration:"line-through"}:{};return null!=e&&null!==(r=e[t])&&void 0!==r&&r.style?(0,a.default)({},i,e[t].style):(0,a.default)({},i,{})}},50643:function(e,t,r){"use strict";var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BrandLink=t.Link=void 0;var a=n(r(67154)),i=n(r(6479)),o=n(r(63804)),u=r(80018),l=r(70917),c=u.styled.a(),s=o.default.forwardRef((function(e,t){var r=e.to,n=void 0===r?"#":r,o=e.target,u=void 0===o?"_self":o,s=e.children,d=(0,i.default)(e,["to","target","children"]);return(0,l.jsx)(c,(0,a.default)({ref:t,href:n,target:u},d),s)}));t.Link=s;var d=(0,u.styled)(s)((function(e){var t=e.theme,r=e.crossBrand,n=t.color;return{color:(0,u.forBrands)(t,{gap:n.b2,gapfs:n.b2,on:n.b1,br:n.g1,brfs:n.g1,at:n.g1,crossBrand:t.crossBrand.color.b1},r)}}));t.BrandLink=d;var f=s;t.default=f},29174:function(e,t,r){"use strict";var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.FiveStarsIcon=void 0;var a=n(r(319)),i=(n(r(63804)),r(38946)),o=r(80018),u=r(70917);t.FiveStarsIcon=function(e){var t=e.color,r=e.totalWidth,n=Math.round(r/5*.93),l=o.styled.figure({width:r,margin:0,padding:0,display:"flex",flexDirection:"row",position:"relative",alignItems:"center",justifyContent:"space-between",span:{width:"".concat(n,"px"),margin:0}});return(0,u.jsx)(l,null,(0,a.default)(Array(5)).map((function(){return(0,u.jsx)(i.StarIcon,{key:"star".concat(5*Math.random()),fillColor:t,size:{height:"auto",width:"".concat(n,"px")}})})))}},18583:function(e,t,r){"use strict";var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(28655)),i=r(80018),o=r(98775);function u(){var e=(0,a.default)(["\n  color: ",";\n  ",";\n  ",";\n  margin-left: ",";\n  margin-top: ",";\n"]);return u=function(){return e},e}var l=i.styled.div(u(),(function(e){var t=e.customTextColor,r=e.theme;return t||r.crossBrand.color.g2}),(0,i.getFont)("primary"),(function(e){var t=e.starSize;return"font-size: ".concat((0,o.setFontSize)(t))}),(function(e){return!e.stackText&&"0"}),(function(e){var t=e.theme,r=e.crossBrand;return(0,i.forBrands)(t,{at:"-4px",br:"-2px",brfs:"-2px",gap:"0",gapfs:"0",on:"0"},r)}));t.default=l},4729:function(e,t,r){"use strict";var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(r(63804));var a=r(80018),i=r(98775),o=r(29174),u=r(70917),l=function(e){var t=e.color;return(0,a.forBrands)(e,{default:t.bk,gap:t.b2,gapfs:t.b2,on:t.b1})};t.default=function(e){var t=e.starSize,r=e.width,n=(0,a.useTheme)(),c=a.styled.div({overflow:"hidden",position:"absolute",width:r});return(0,u.jsx)(c,null,(0,u.jsx)(o.FiveStarsIcon,{color:l(n),totalWidth:(0,i.setWidth)(t)}))}},21559:function(e,t,r){"use strict";var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(r(63804));var a=r(80018),i=r(29174),o=r(98775),u=r(70917);t.default=function(e){var t=e.starSize,r=a.styled.div({position:"absolute",width:"100%"});return(0,u.jsx)(r,null,(0,u.jsx)(i.FiveStarsIcon,{color:"#CCC",totalWidth:(0,o.setWidth)(t)}))}},53304:function(e,t,r){"use strict";var n=r(95318);Object.defineProperty(t,"__esModule",{value:!0});var a={ReviewRatings:!0,RatingImageBg:!0,RatingImage:!0,RatingCount:!0};Object.defineProperty(t,"RatingImageBg",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"RatingImage",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"RatingCount",{enumerable:!0,get:function(){return d.default}}),t.default=t.ReviewRatings=void 0;var i=n(r(67154)),o=n(r(28655)),u=(n(r(63804)),r(80018)),l=r(98775);Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(a,e)||e in t&&t[e]===l[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))}));var c=n(r(21559)),s=n(r(4729)),d=n(r(18583)),f=r(5324),p=r(70917);function g(){var e=(0,o.default)(["\n  position: relative;\n  height: 19.2px;\n  margin-right: 0.8125em;\n  ","\n"]);return g=function(){return e},e}function v(){var e=(0,o.default)(["\n  display: flex;\n  align-items: ",";\n  flex-direction: ",";\n  flex-flow: wrap;\n  width: ",";\n"]);return v=function(){return e},e}var m=("undefined"==typeof __USE_I18N__?r(57058):r(53742)).useLocalize,y=u.styled.div(v(),(function(e){var t=e.stackText,r=e.textAlign;return t?r:"center"}),(function(e){return e.stackText&&"column"}),(function(e){var t=e.stackText,r=e.starSize;return t&&r?"".concat((0,l.setWidth)(r),"px"):"unset"})),b=u.styled.div(g(),(function(e){var t=e.starSize;return"width: ".concat((0,l.setWidth)(t),"px")})),h=function(e){var t=e.className,r=e.reviewCount,n=e.starRating,a=void 0===n?0:n,o=e.starSize,g=void 0===o?f.StarSize.small:o,v=e.crossBrand,h=void 0!==v&&v,w=e.stackText,x=e.onClick,j=e.showAvgRatingTxt,O=void 0!==j&&j,P=e.tabIndex,_=void 0===P?0:P,R=e.textAlign,S=void 0===R?"flex-end":R,C=e.customTextColor,k=e.showNumberOnly,T=void 0!==k&&k,I=m().localize,M=I("fui.ReviewRatings.ariaLabel",{reviewCount:r,starRating:a}),N=I("fui.ReviewRatings.ariaLabelNoReviews"),z=0===r?N:M,F=I("fui.ReviewRatings.pluralLabel",{reviewCount:r}),L=I("fui.ReviewRatings.singularLabel",{reviewCount:r}),D=1===r?L:F,W=O?"(".concat(null==a?void 0:a.toFixed(1),") "):"",B=T?"".concat(r):D;return(0,p.jsx)(y,(0,i.default)({className:t},x&&{css:(0,u.css)(":hover { cursor: pointer; }"),role:"button",onClick:x,onKeyDown:function(e){"Enter"!==e.key&&" "!==e.key||x&&x(e)}},{stackText:w,starSize:g,tabIndex:_,textAlign:S}),(0,p.jsx)(b,{"aria-label":z,starSize:g},(0,p.jsx)(c.default,{starSize:g}),(0,p.jsx)(s.default,{crossBrand:h,starSize:g,width:(0,l.starRatingToWidth)(a)})),(null!=r?r:0)>0&&(0,p.jsx)(d.default,{crossBrand:h,customTextColor:C,stackText:w,starSize:g},W+B))};t.ReviewRatings=h;var w=h;t.default=w},5324:function(e,t){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.StarSize=void 0,t.StarSize=r,function(e){e.small="small",e.medium="medium",e.large="large"}(r||(t.StarSize=r={}))},98775:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.starRatingToWidth=t.setFontSize=t.setWidth=void 0;var n=r(5324);t.setWidth=function(e){switch(e){case n.StarSize.medium:return 114;case n.StarSize.large:return 177;default:return 93}},t.setFontSize=function(e){switch(e){case n.StarSize.medium:return"0.875em";case n.StarSize.large:return"1.125em";default:return"0.8125em"}},t.starRatingToWidth=function(e){return"".concat(Math.round(10*(e<0?0:e>5?5:e))/10*100/5,"%")}}}]);