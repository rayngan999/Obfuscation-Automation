webpackJsonp([1548,79,1443],{2408:function(t,e,i){var r;!function(n){"use strict";function s(){function t(e){var i=this;if(!(i instanceof t))return e===b?s():new t(e);e instanceof t?(i.s=e.s,i.e=e.e,i.c=e.c.slice()):a(i,e),i.constructor=t}return t.prototype=y,t.DP=c,t.RM=f,t.NE=h,t.PE=m,t.version="5.2.2",t}function a(t,e){var i,r,n;if(0===e&&1/e<0)e="-0";else if(!w.test(e+=""))throw Error(v+"number");for(t.s="-"==e.charAt(0)?(e=e.slice(1),-1):1,(i=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(i<0&&(i=r),i+=+e.slice(r+1),e=e.substring(0,r)):i<0&&(i=e.length),n=e.length,r=0;r<n&&"0"==e.charAt(r);)++r;if(r==n)t.c=[t.e=0];else{for(;n>0&&"0"==e.charAt(--n););for(t.e=i-r-1,t.c=[],i=0;r<=n;)t.c[i++]=+e.charAt(r++)}return t}function l(t,e,i,r){var n=t.c,s=t.e+e+1;if(s<n.length){if(1===i)r=n[s]>=5;else if(2===i)r=n[s]>5||5==n[s]&&(r||s<0||n[s+1]!==b||1&n[s-1]);else if(3===i)r=r||!!n[0];else if(r=!1,0!==i)throw Error(_);if(s<1)n.length=1,r?(t.e=-e,n[0]=1):n[0]=t.e=0;else{if(n.length=s--,r)for(;++n[s]>9;)n[s]=0,s--||(++t.e,n.unshift(1));for(s=n.length;!n[--s];)n.pop()}}else if(i<0||i>3||i!==~~i)throw Error(_);return t}function o(t,e,i,r){var n,s,a=t.constructor,o=!t.c[0];if(i!==b){if(i!==~~i||i<(3==e)||i>d)throw Error(3==e?v+"precision":g);for(t=new a(t),i=r-t.e,t.c.length>++r&&l(t,i,a.RM),2==e&&(r=t.e+i+1);t.c.length<r;)t.c.push(0)}if(n=t.e,s=t.c.join(""),i=s.length,2!=e&&(1==e||3==e&&r<=n||n<=a.NE||n>=a.PE))s=s.charAt(0)+(i>1?"."+s.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)s="0"+s;s="0."+s}else if(n>0)if(++n>i)for(n-=i;n--;)s+="0";else n<i&&(s=s.slice(0,n)+"."+s.slice(n));else i>1&&(s=s.charAt(0)+"."+s.slice(1));return t.s<0&&(!o||4==e)?"-"+s:s}var u,c=20,f=1,d=1e6,h=-7,m=21,p="[big.js] ",v=p+"Invalid ",g=v+"decimal places",_=v+"rounding mode",y={},b=void 0,w=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;y.abs=function(){var t=new this.constructor(this);return t.s=1,t},y.cmp=function(t){var e,i=this,r=i.c,n=(t=new i.constructor(t)).c,s=i.s,a=t.s,l=i.e,o=t.e;if(!r[0]||!n[0])return r[0]?s:n[0]?-a:0;if(s!=a)return s;if(e=s<0,l!=o)return l>o^e?1:-1;for(a=(l=r.length)<(o=n.length)?l:o,s=-1;++s<a;)if(r[s]!=n[s])return r[s]>n[s]^e?1:-1;return l==o?0:l>o^e?1:-1},y.div=function(t){var e=this,i=e.constructor,r=e.c,n=(t=new i(t)).c,s=e.s==t.s?1:-1,a=i.DP;if(a!==~~a||a<0||a>d)throw Error(g);if(!n[0])throw Error("[big.js] Division by zero");if(!r[0])return new i(0*s);var o,u,c,f,h,m=n.slice(),p=o=n.length,v=r.length,_=r.slice(0,o),y=_.length,w=t,x=w.c=[],k=0,C=a+(w.e=e.e-t.e)+1;for(w.s=s,s=C<0?0:C,m.unshift(0);y++<o;)_.push(0);do{for(c=0;c<10;c++){if(o!=(y=_.length))f=o>y?1:-1;else for(h=-1,f=0;++h<o;)if(n[h]!=_[h]){f=n[h]>_[h]?1:-1;break}if(!(f<0))break;for(u=y==o?n:m;y;){if(_[--y]<u[y]){for(h=y;h&&!_[--h];)_[h]=9;--_[h],_[y]+=10}_[y]-=u[y]}for(;!_[0];)_.shift()}x[k++]=f?c:++c,_[0]&&f?_[y]=r[p]||0:_=[r[p]]}while((p++<v||_[0]!==b)&&s--);return x[0]||1==k||(x.shift(),w.e--),k>C&&l(w,a,i.RM,_[0]!==b),w},y.eq=function(t){return!this.cmp(t)},y.gt=function(t){return this.cmp(t)>0},y.gte=function(t){return this.cmp(t)>-1},y.lt=function(t){return this.cmp(t)<0},y.lte=function(t){return this.cmp(t)<1},y.minus=y.sub=function(t){var e,i,r,n,s=this,a=s.constructor,l=s.s,o=(t=new a(t)).s;if(l!=o)return t.s=-o,s.plus(t);var u=s.c.slice(),c=s.e,f=t.c,d=t.e;if(!u[0]||!f[0])return f[0]?(t.s=-o,t):new a(u[0]?s:0);if(l=c-d){for((n=l<0)?(l=-l,r=u):(d=c,r=f),r.reverse(),o=l;o--;)r.push(0);r.reverse()}else for(i=((n=u.length<f.length)?u:f).length,l=o=0;o<i;o++)if(u[o]!=f[o]){n=u[o]<f[o];break}if(n&&(r=u,u=f,f=r,t.s=-t.s),(o=(i=f.length)-(e=u.length))>0)for(;o--;)u[e++]=0;for(o=e;i>l;){if(u[--i]<f[i]){for(e=i;e&&!u[--e];)u[e]=9;--u[e],u[i]+=10}u[i]-=f[i]}for(;0===u[--o];)u.pop();for(;0===u[0];)u.shift(),--d;return u[0]||(t.s=1,u=[d=0]),t.c=u,t.e=d,t},y.mod=function(t){var e,i=this,r=i.constructor,n=i.s,s=(t=new r(t)).s;if(!t.c[0])throw Error("[big.js] Division by zero");return i.s=t.s=1,e=1==t.cmp(i),i.s=n,t.s=s,e?new r(i):(n=r.DP,s=r.RM,r.DP=r.RM=0,i=i.div(t),r.DP=n,r.RM=s,this.minus(i.times(t)))},y.plus=y.add=function(t){var e,i=this,r=i.constructor,n=i.s,s=(t=new r(t)).s;if(n!=s)return t.s=-s,i.minus(t);var a=i.e,l=i.c,o=t.e,u=t.c;if(!l[0]||!u[0])return u[0]?t:new r(l[0]?i:0*n);if(l=l.slice(),n=a-o){for(n>0?(o=a,e=u):(n=-n,e=l),e.reverse();n--;)e.push(0);e.reverse()}for(l.length-u.length<0&&(e=u,u=l,l=e),n=u.length,s=0;n;l[n]%=10)s=(l[--n]=l[n]+u[n]+s)/10|0;for(s&&(l.unshift(s),++o),n=l.length;0===l[--n];)l.pop();return t.c=l,t.e=o,t},y.pow=function(t){var e=this,i=new e.constructor(1),r=i,n=t<0;if(t!==~~t||t<-1e6||t>1e6)throw Error(v+"exponent");for(n&&(t=-t);1&t&&(r=r.times(e)),t>>=1;)e=e.times(e);return n?i.div(r):r},y.round=function(t,e){var i=this.constructor;if(t===b)t=0;else if(t!==~~t||t<-d||t>d)throw Error(g);return l(new i(this),t,e===b?i.RM:e)},y.sqrt=function(){var t,e,i,r=this,n=r.constructor,s=r.s,a=r.e,o=new n(.5);if(!r.c[0])return new n(r);if(s<0)throw Error(p+"No square root");s=Math.sqrt(r+""),0===s||s===1/0?(e=r.c.join(""),e.length+a&1||(e+="0"),s=Math.sqrt(e),a=((a+1)/2|0)-(a<0||1&a),t=new n((s==1/0?"1e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+a)):t=new n(s),a=t.e+(n.DP+=4);do{i=t,t=o.times(i.plus(r.div(i)))}while(i.c.slice(0,a).join("")!==t.c.slice(0,a).join(""));return l(t,n.DP-=4,n.RM)},y.times=y.mul=function(t){var e,i=this,r=i.constructor,n=i.c,s=(t=new r(t)).c,a=n.length,l=s.length,o=i.e,u=t.e;if(t.s=i.s==t.s?1:-1,!n[0]||!s[0])return new r(0*t.s);for(t.e=o+u,a<l&&(e=n,n=s,s=e,u=a,a=l,l=u),e=new Array(u=a+l);u--;)e[u]=0;for(o=l;o--;){for(l=0,u=a+o;u>o;)l=e[u]+s[o]*n[u-o-1]+l,e[u--]=l%10,l=l/10|0;e[u]=(e[u]+l)%10}for(l?++t.e:e.shift(),o=e.length;!e[--o];)e.pop();return t.c=e,t},y.toExponential=function(t){return o(this,1,t,t)},y.toFixed=function(t){return o(this,2,t,this.e+t)},y.toPrecision=function(t){return o(this,3,t,t-1)},y.toString=function(){return o(this)},y.valueOf=y.toJSON=function(){return o(this,4)},u=s(),u.default=u.Big=u,void 0!==(r=function(){return u}.call(e,i,e,t))&&(t.exports=r)}()},2418:function(t,e,i){var r=i(2419);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(1249)("62b764d8",r,!0,{})},2419:function(t,e,i){e=t.exports=i(1248)(!1),e.push([t.i,".-dit-value{display:inline-block;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}",""])},2443:function(t,e,i){"use strict";var r=i(25),n=i.n(r),s=i(132),a=i.n(s),l=i(251),o=i.n(l),u=i(105),c=i.n(u),f=i(26),d=i.n(f),h=i(776),m=i.n(h),p=i(31),v=!1,g=function(){function t(e,i){a()(this,t),this.itemId=e,this.itemType=m()(i,!0),this.api=p.a,this.token={},this.cache={},this.useMap=!0,this.baseApiUrl=v?"/ru/"+this.itemType+"/"+this.itemId+"/monitoring/":"/chart/"+this.itemType+"/"+this.itemId+"/"}return o()(t,[{key:"reset",value:function(t,e){return this.itemId=t,this.itemType=m()(e,!0),this.clearCache(),this}},{key:"clearCache",value:function(){return this.cache=[],this}},{key:"mapDates",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return this.useMap?t.map(function(t){return t[0]=d()(t[0]).valueOf(),t}):t}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(v||!e.cacheKey)return this.request(t,e);var i=e.cacheKey;return this.cache[i]||(this.cache[i]=this.request(t,e)),this.cache[i]}},{key:"request",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.method=i.method||"get",i.url=this.baseApiUrl+t,v||(i.baseURL="/"),new n.a(function(t,r){e.api(i).then(function(i){return t(e.mapDates(i.data.data))},function(t){return r(c.a.isCancel(t)?{cancel:!0,message:t.message}:t)})})}},{key:"_cancelPrev",value:function(t){return v?this:(this.token[t]&&this.token[t].cancel("Request canceled!"),this.token[t]=c.a.CancelToken.source(),this)}},{key:"_getDailyChart",value:function(t){var e=t.field,i=void 0===e?"return":e,r=t.type,n={cacheKey:""+i+(r||""),params:{type:r}};return this.get(i+"/daily.json",n)}},{key:"_getHourlyChart",value:function(t){var e=t.field,i=void 0===e?"return":e,r=t.type,n=t.start,s=t.end;this._cancelPrev(""+i+(r||""));var a={params:{type:r}};return n&&d()(n).isValid()&&(a.params.start=n),s&&d()(s).isValid()&&(a.params.end=s),this.get(i+"/hourly.json",a)}},{key:"_getServerChart",value:function(t){var e=t.field,i=void 0===e?"return":e,r=t.mode,n=void 0===r?"daily":r,s=t.type,a=void 0===s?"value":s,l=t.start,o=t.end,u={params:{cache:15320898e5}};return l&&d()(l).isValid()&&(u.params.start=l),o&&d()(o).isValid()&&(u.params.end=o),this.get(n+"_"+i+"_"+a+".json",u)}},{key:"getChart",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return v?this._getServerChart(t):"hourly"===t.mode?this._getHourlyChart(t):this._getDailyChart(t)}},{key:"getMonitoringChart",value:function(t){return this.get(t+".json",{cacheKey:t+":monitoring"})}}],[{key:"create",value:function(e,i){return new t(e,i)}}]),t}();e.a=g},2687:function(t,e,i){var r=i(2688);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(1249)("57c906f6",r,!0,{})},2688:function(t,e,i){e=t.exports=i(1248)(!1),e.push([t.i,".-pamm-widget-selected-item{-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.-pamm-widget-selected-item,.-pamm-widget-selected-item__toolbar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.-pamm-widget-selected-item__toolbar{-webkit-box-flex:10;-ms-flex-positive:10;flex-grow:10}@media only screen and (min-width:768px) and (max-width:1135px){[dir] .-pamm-widget-selected-item__toolbar{margin-bottom:16px}}.-pamm-widget-selected-item__info{-webkit-box-flex:1;-ms-flex:1 0;flex:1 0}[dir=ltr] .-pamm-widget-selected-item__info{border-left:1px solid rgba(0,0,0,.12);padding-left:16px}[dir=rtl] .-pamm-widget-selected-item__info{border-right:1px solid rgba(0,0,0,.12);padding-right:16px}[dir=ltr] .-pamm-widget-selected-item__info:first-child{border-left:none;padding-left:0}[dir=rtl] .-pamm-widget-selected-item__info:first-child{border-right:none;padding-right:0}.-pamm-widget-selected-item__info-title{font-size:12px;color:rgba(59,60,60,.6)}.-pamm-widget-selected-item__info-value{font-size:18px;color:rgba(59,60,60,.85)}@media only screen and (min-width:768px) and (max-width:1135px){.-pamm-widget-selected-item__button{position:absolute;top:72px;z-index:11}}.-pamm-widget-selected-item__chart.-loader{width:100%;height:auto}",""])},3994:function(t,e,i){"use strict";function r(t){i(2687)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(25),s=i.n(n),a=i(2443),l=i(40),o=i(856),u={name:"PammWidgetSelectedItem",props:{item:{type:Object,required:!0},itemType:{type:String,required:!0,default:"pamm"},disabled:{type:Boolean,default:!1},url:{type:String}},components:{FormattedNumber:l.default,InvestLink:function(){return i.e(1438).then(i.bind(null,3992))},WidgetChart:function(){return i.e(1574).then(i.bind(null,3995))}},data:function(){return{chartData:[],isLoading:!1}},computed:{blocks:function(){return"portfolio"===this.itemType?[{title:this.$t("block_invest.param.return-overall"),value:this.item.returnOverall,default:"â",after:""},{title:this.$t("block_invest.param.investors"),value:this.item.numberOfActiveInvestors,default:"â",decimals:0},{title:this.$t("block_invest.param.equity-short"),value:this.item.equity,default:"â",decimals:0,after:" "+this.item.currency}]:[{title:this.$t("block_invest.param.return-month"),value:this.item.returnMonth,default:"â",after:""},{title:this.$t("block_invest.param.return-overall"),value:this.item.returnOverall,default:"â",after:""},{title:this.$t("block_invest.param.equity-short"),value:this.item.equity,default:"â",decimals:0,after:" "+this.item.currency}]}},methods:{fetchChartData:function(){var t=this;return this.item.id?(this.isLoading=!0,a.a.create(this.item.id,this.itemType).getChart().then(o.getLastMonthData).catch(function(){return[]}).then(function(e){t.chartData=e}).finally(function(){t.isLoading=!1})):(this.chartData=[],s.a.resolve())}},watch:{item:{immediate:!0,handler:function(){this.fetchChartData()}}}},c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"-pamm-widget-selected-item"},[i("div",{staticClass:"-pamm-widget-selected-item__toolbar"},t._l(t.blocks,function(e){return i("div",{staticClass:"-pamm-widget-selected-item__info"},[i("div",{staticClass:"-pamm-widget-selected-item__info-title"},[t._v("\n        "+t._s(e.title)+"\n      ")]),i("div",{staticClass:"-pamm-widget-selected-item__info-value"},[i("formatted-number",t._b({},"formatted-number",e,!1))],1)])}),0),t.url&&"default"!==t.url?i("a",{staticClass:"-btn -pamm-widget-selected-item__button",attrs:{href:t.url},domProps:{textContent:t._s(t.$t("block_pamm-rating.invest"))}}):t.disabled?t._e():i("invest-link",{staticClass:"-btn -pamm-widget-selected-item__button",attrs:{itemId:t.item.id||0,itemType:t.itemType,disabled:!t.item.id},domProps:{textContent:t._s(t.$t("block_pamm-rating.invest"))}}),i("widget-chart",{staticClass:"-pamm-widget-selected-item__chart",attrs:{name:t.item.name||t.item.id,chartData:t.chartData,loading:t.isLoading||!t.item.id}})],1)},f=[],d={render:c,staticRenderFns:f},h=d,m=i(128),p=r,v=m(u,h,!1,p,null,null);e.default=v.exports},40:function(t,e,i){"use strict";function r(t){i(2418)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(2408),s=i.n(n),a={DOWN:0,UP:3},l={name:"InvestFormattedNumber",props:{value:{},separator:{type:String,default:void 0},before:{type:String,default:""},after:{type:String,default:""},decimals:{type:Number,default:1},fractionSize:{type:String,default:"0.75em"},sign:{type:Boolean,default:!1},currency:{type:String,default:""},colorize:{type:Boolean,default:!1},default:{default:void 0}},computed:{defaultValue:function(){return"number"!=typeof this.value||isNaN(this.value)?void 0!==this.default?this.default:"string"==typeof this.value?this.value:null:null},colorClass:function(){return this.colorize?this.value<0?"text-red":this.value>0?"text-green":null:null},valueSign:function(){return this.value<0?"â":this.sign&&this.value>0?"+":null},valueParts:function(){try{var t=new s.a(this.value),e=t.s>0?a.DOWN:a.UP,i=t.abs().round(this.decimals,e).toFixed(this.decimals).split("."),r=this.$config.languages.formats.numbers[this.$locale].thousands_sep;return{int:i[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1"+r),fract:i[1]}}catch(t){return{int:"0",fract:"0"}}},valueSeparator:function(){return this.decimals?void 0!==this.separator?this.separator:this.$config.languages.formats.numbers[this.$locale].dec_point:""},inputStyle:function(){return"rtl"===this.$direction?{direction:"ltr"}:null}}},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.defaultValue?i("span",{staticClass:"-dit-value -dit-value_default"},[i("span",{staticClass:"-dit-value"},[t._v(t._s(t.defaultValue))])]):i("span",{staticClass:"-dit-value",class:t.colorClass,style:t.inputStyle},[t.before?i("span",{staticClass:"-dit-value__before"},[t._v(t._s(t.before))]):t._e(),t.valueSign?i("span",{staticClass:"-dit-value__sign"},[t._v(t._s(t.valueSign))]):t._e(),t.currency?i("span",{staticClass:"-dit-value__currency"},[t._v(t._s(t.currency))]):t._e(),i("span",{staticClass:"-dit-value__value"},[t._v(t._s(t.valueParts.int))]),t.valueSeparator?i("span",{staticClass:"-dit-value__separator"},[t._v(t._s(t.valueSeparator))]):t._e(),i("span",{staticClass:"-dit-value__fraction",style:{fontSize:t.fractionSize}},[t._v(t._s(t.valueParts.fract))]),t.after?i("span",{staticClass:"-dit-value__after"},[t._v(t._s(t.after))]):t._e()])},u=[],c={render:o,staticRenderFns:u},f=c,d=i(128),h=r,m=d(l,f,!1,h,null,null);e.default=m.exports},856:function(t,e,i){"use strict";function r(t){return t&&t.length?t.length>120?t.slice(t.length-120):t:[]}function n(t){return t&&t.length?t.length>30?t.slice(t.length-30):t:[]}function s(t){return t.map(function(t){return t[0]=l()(t[0]).valueOf(),t})}Object.defineProperty(e,"__esModule",{value:!0}),e.getLastWeekData=r,e.getLastMonthData=n,e.mapChartDates=s;var a=i(26),l=i.n(a)}});