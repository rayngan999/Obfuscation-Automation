(window.wpJsonpCambly=window.wpJsonpCambly||[]).push([[18],{1330:function(t,e){var o={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==o.call(t)}},1526:function(t,e){e.read=function(t,e,o,n,i){var l,a,c=8*i-n-1,u=(1<<c)-1,r=u>>1,p=-7,h=o?i-1:0,s=o?-1:1,f=t[e+h];for(h+=s,l=f&(1<<-p)-1,f>>=-p,p+=c;p>0;l=256*l+t[e+h],h+=s,p-=8);for(a=l&(1<<-p)-1,l>>=-p,p+=n;p>0;a=256*a+t[e+h],h+=s,p-=8);if(0===l)l=1-r;else{if(l===u)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,n),l-=r}return(f?-1:1)*a*Math.pow(2,l-n)},e.write=function(t,e,o,n,i,l){var a,c,u,r=8*l-i-1,p=(1<<r)-1,h=p>>1,s=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:l-1,d=n?1:-1,T=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(c=isNaN(e)?1:0,a=p):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),(e+=a+h>=1?s/u:s*Math.pow(2,1-h))*u>=2&&(a++,u/=2),a+h>=p?(c=0,a=p):a+h>=1?(c=(e*u-1)*Math.pow(2,i),a+=h):(c=e*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;t[o+f]=255&c,f+=d,c/=256,i-=8);for(a=a<<i|c,r+=i;r>0;t[o+f]=255&a,f+=d,a/=256,r-=8);t[o+f-d]|=128*T}},157:function(t,e,o){"use strict";t.exports=function(t,e,o,n,i,l,a,c){if(!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var r=[o,n,i,l,a,c],p=0;(u=new Error(e.replace(/%s/g,(function(){return r[p++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},1898:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,i=o(1899),l=(n=i)&&n.__esModule?n:{default:n};e.default=l.default},1899:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=g(o(7)),i=g(o(1046)),l=g(o(16)),a=g(o(55)),c=g(o(12)),u=g(o(53)),r=g(o(13)),p=g(o(14));e.getStyles=B;var h=g(o(58)),s=o(0),f=g(s),d=g(o(1)),T=g(o(235)),m=g(o(1902)),y=g(o(456));g(o(512)),g(o(326));function g(t){return t&&t.__esModule?t:{default:t}}function B(t,e){var o=e.muiTheme,n=o.appBar,i=o.button.iconButtonSize;return{root:{position:"relative",zIndex:o.zIndex.appBar,width:"100%",display:"flex",backgroundColor:n.color,paddingLeft:n.padding,paddingRight:n.padding},title:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",margin:0,paddingTop:0,letterSpacing:0,fontSize:24,fontWeight:n.titleFontWeight,color:n.textColor,height:n.height,lineHeight:n.height+"px"},mainElement:{boxFlex:1,flex:"1"},iconButtonStyle:{marginTop:(n.height-i)/2,marginRight:8,marginLeft:-16},iconButtonIconStyle:{fill:n.textColor,color:n.textColor},flatButton:{color:n.textColor,marginTop:(i-36)/2+1}}}var v=function(t){function e(){var t,o,n,i;(0,c.default)(this,e);for(var l=arguments.length,u=Array(l),p=0;p<l;p++)u[p]=arguments[p];return o=n=(0,r.default)(this,(t=e.__proto__||(0,a.default)(e)).call.apply(t,[this].concat(u))),n.handleTouchTapLeftIconButton=function(t){n.props.onLeftIconButtonTouchTap&&n.props.onLeftIconButtonTouchTap(t)},n.handleTouchTapRightIconButton=function(t){n.props.onRightIconButtonTouchTap&&n.props.onRightIconButtonTouchTap(t)},n.handleTitleTouchTap=function(t){n.props.onTitleTouchTap&&n.props.onTitleTouchTap(t)},i=o,(0,r.default)(n,i)}return(0,p.default)(e,t),(0,u.default)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.props,e=t.title,o=t.titleStyle,a=t.iconStyleLeft,c=t.iconStyleRight,u=(t.onTitleTouchTap,t.showMenuIconButton),r=t.iconElementLeft,p=t.iconElementRight,d=t.iconClassNameLeft,g=t.iconClassNameRight,v=(t.onLeftIconButtonTouchTap,t.onRightIconButtonTouchTap,t.className),I=t.style,w=t.zDepth,S=t.children,M=(0,l.default)(t,["title","titleStyle","iconStyleLeft","iconStyleRight","onTitleTouchTap","showMenuIconButton","iconElementLeft","iconElementRight","iconClassNameLeft","iconClassNameRight","onLeftIconButtonTouchTap","onRightIconButtonTouchTap","className","style","zDepth","children"]),C=this.context.muiTheme.prepareStyles,N=B(this.props,this.context),x=void 0,L=void 0,R="string"==typeof e||e instanceof String?"h1":"div",E=f.default.createElement(R,{onClick:this.handleTitleTouchTap,style:C((0,h.default)(N.title,N.mainElement,o))},e),_=(0,h.default)({},N.iconButtonStyle,a);if(u)if(r){var b={};if("IconButton"===r.type.muiName){var k=r.props.children,z=k&&k.props&&k.props.color?null:N.iconButtonIconStyle;b.iconStyle=(0,h.default)({},z,r.props.iconStyle)}!r.props.onClick&&this.props.onLeftIconButtonTouchTap&&(b.onClick=this.handleTouchTapLeftIconButton),x=f.default.createElement("div",{style:C(_)},(0,i.default)(b).length>0?(0,s.cloneElement)(r,b):r)}else x=f.default.createElement(T.default,{style:_,iconStyle:N.iconButtonIconStyle,iconClassName:d,onClick:this.handleTouchTapLeftIconButton},d?"":f.default.createElement(m.default,{style:(0,h.default)({},N.iconButtonIconStyle)}));var A=(0,h.default)({},N.iconButtonStyle,{marginRight:-16,marginLeft:"auto"},c);if(p){var D={};switch(p.type.muiName){case"IconMenu":case"IconButton":var j=p.props.children,P=j&&j.props&&j.props.color?null:N.iconButtonIconStyle;D.iconStyle=(0,h.default)({},P,p.props.iconStyle);break;case"FlatButton":D.style=(0,h.default)({},N.flatButton,p.props.style)}!p.props.onClick&&this.props.onRightIconButtonTouchTap&&(D.onClick=this.handleTouchTapRightIconButton),L=f.default.createElement("div",{style:C(A)},(0,i.default)(D).length>0?(0,s.cloneElement)(p,D):p)}else g&&(L=f.default.createElement(T.default,{style:A,iconStyle:N.iconButtonIconStyle,iconClassName:g,onClick:this.handleTouchTapRightIconButton}));return f.default.createElement(y.default,(0,n.default)({},M,{rounded:!1,className:v,style:(0,h.default)({},N.root,I),zDepth:w}),x,E,L,S)}}]),e}(s.Component);v.muiName="AppBar",v.defaultProps={showMenuIconButton:!0,title:"",zDepth:1},v.contextTypes={muiTheme:d.default.object.isRequired},v.propTypes={},e.default=v}}]);