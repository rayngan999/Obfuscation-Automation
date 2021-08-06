(window.webpackJsonpCMSBrowserComponents=window.webpackJsonpCMSBrowserComponents||[]).push([[17],{207:function(t,e,n){var a=n(208),r=n(209),s=n(210);t.exports=function(t){return a(t)||r(t)||s()}},208:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},209:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},210:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},211:function(t,e,n){"use strict";var a=n(207),r=n.n(a),s={props:{name:{type:String,required:!0,default:""},blockName:{type:String,default:"icon"},className:{type:String,default:null},modifiers:{type:Array,default:function(){return[]}},tag:{type:String,default:"span"}},computed:{classNames:function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.iconName,n=t.blockName,a=void 0===n?"icon":n,s=t.modifiers,i=t.className,o=Array.isArray(s)?s.slice():[];return o.push(e.toLowerCase()),[a].concat(r()(o.map((function(t){return"".concat(a,"--").concat(t)}))),[i])}({iconName:this.name,blockName:this.blockName,modifiers:this.modifiers,className:this.className})}}},i=n(2),o=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return this.name?e(this.tag,{tag:"tag",class:this.classNames},[this._t("default")],2):this._e()}),[],!1,null,null,null);e.a=o.exports},394:function(t,e,n){"use strict";n.r(e);var a=n(211),r={components:{IconWrapper:a.a},props:{blockName:{type:String,default:"marko-web-icon"},className:{type:String,default:null},modifiers:{type:Array,default:function(){return[]}},tag:{type:String,default:"span"}}},s=n(2),i=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("icon-wrapper",{attrs:{name:"dash",tag:this.tag,"block-name":this.blockName,"class-name":this.className,modifiers:this.modifiers}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"8",height:"16",viewBox:"0 0 8 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M0 7v2h8V7H0z"}})])])}),[],!1,null,null,null).exports,o={components:{IconWrapper:a.a},props:{blockName:{type:String,default:"marko-web-icon"},className:{type:String,default:null},modifiers:{type:Array,default:function(){return[]}},tag:{type:String,default:"span"}}},l=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("icon-wrapper",{attrs:{name:"plus",tag:this.tag,"block-name":this.blockName,"class-name":this.className,modifiers:this.modifiers}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"}})])])}),[],!1,null,null,null).exports,c={components:{IconWrapper:a.a},props:{blockName:{type:String,default:"marko-web-icon"},className:{type:String,default:null},modifiers:{type:Array,default:function(){return[]}},tag:{type:String,default:"span"}}},u=Object(s.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("icon-wrapper",{attrs:{name:"three-bars",tag:this.tag,"block-name":this.blockName,"class-name":this.className,modifiers:this.modifiers}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"}})])])}),[],!1,null,null,null).exports,p={components:{IconWrapper:a.a},props:{blockName:{type:String,default:"marko-web-icon"},className:{type:String,default:null},modifiers:{type:Array,default:function(){return[]}},tag:{type:String,default:"span"}}},d=function(t){return["dash","plus","three-bars","x"].includes(t)},m={components:{IconDash:i,IconPlus:l,IconThreeBars:u,IconX:Object(s.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("icon-wrapper",{attrs:{name:"x",tag:this.tag,"block-name":this.blockName,"class-name":this.className,modifiers:this.modifiers}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"}})])])}),[],!1,null,null,null).exports},props:{className:{type:String,default:null},initiallyExpanded:{type:Boolean,default:!1},targets:{type:Array,default:function(){return[]}},toggleClass:{type:String,required:!0},iconModifiers:{type:Array,default:function(){return[]}},buttonLabel:{type:String,default:"Toggle Menu"},iconName:{type:String,default:"three-bars",validator:d},expandedIconName:{type:String,default:"x",validator:d}},data:function(){return{expanded:!1}},computed:{icon:function(){return this.expanded?"icon-".concat(this.expandedIconName):"icon-".concat(this.iconName)}},created:function(){this.expanded=this.initiallyExpanded},methods:{toggle:function(){var t=this;this.expanded=!this.expanded;var e=document.querySelectorAll(this.targets.join(","));Array.prototype.forEach.call(e,(function(e){return e.classList.toggle(t.toggleClass)}))}}},f=Object(s.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("button",{class:this.className,attrs:{type:"button","aria-label":this.buttonLabel},on:{click:this.toggle}},[e(this.icon,{tag:"component",attrs:{modifiers:this.iconModifiers}})],1)}),[],!1,null,null,null);e.default=f.exports}}]);
//# sourceMappingURL=theme-menu-toggle-button.cc54a8f3.js.map