(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{1046:function(e,t,r){"use strict";r.r(t);var n=r(3),a=(r(14),r(23),r(13),r(42),r(43),r(106),r(15),r(12),r(107),r(625),r(504),r(16),r(521)),o=r(533),s=r(179),l={components:{Autocomplete:a.a,InputDouble:o.a},mixins:[s.a],props:{unique:{type:String,required:!0,default:"search-term-mini"}},data:function(){return{yearsOptions:this.$store.getters.yearsSelect.map((function(e){return{label:e.text.toString(),value:e.value}})),term:null,brand:null,model:null,version:null,years:{from:null,to:null},vehicleType:null,isLoading:!1,brands:[]}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(e.brands||[]).length||0!==(e.$store.state.brands.list||[]).length){t.next=7;break}return t.next=3,e.$getBrands();case 3:e.brands=t.sent,e.$store.dispatch("brands/saveList",e.brands),t.next=8;break;case 7:0===(e.brands||[]).length&&(e.brands=e.$store.state.brands.list);case 8:r=Object.assign({},e.$store.getters["search/getFilters"]),e.years=r.year,e.term=r.term;case 11:case"end":return t.stop()}}),t)})))()},beforeMount:function(){var e=this;this.$root.$on("filterChanged",(function(){if(e.$refs["years-select-internal"]){var t=Object.assign({},e.$store.getters["search/getFilters"]);e.$refs["years-select-internal"].changeAutocompleteValues(t.year),e.$refs[e.unique].setValue(t.term)}}))},methods:{doSearch:function(){this.isLoading=!0,this.$root.$emit("hideSearchMethod");var e={yearFrom:this.years.from,yearTo:this.years.to,term:this.term,brand:this.brand,model:this.model,version:this.version,region:this.$store.state.search.filters.region,city:this.$store.state.search.filters.city,distance:this.$store.state.search.filters.distance,lat:this.$store.state.search.filters.lat,lon:this.$store.state.search.filters.lon};if(null===this.brand&&null!==this.term){var t=this.term.split(" ");if(1===(t=t.filter((function(e){return e}))).length)this.$store.state.brands.list.find((function(r){r.brand_name.split(" ")[0].toLowerCase()===t[0].toLowerCase()&&1===r.category_id&&(e.brand=[r.brand_id],e.term=null,window&&window.localStorage&&window.localStorage.setItem("delayWatchSearch",JSON.stringify(!0)))}))}this.$store.dispatch("search/clear"),this.$store.dispatch("search/saveFilters",e);var r=this.$mountUrl();window.location=window.location.origin+r},selectTerm:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.term=null,!Number.isInteger(e)){r.next=9;break}return r.next=4,t.$getModels([e],"modelo_novo_id");case 4:(n=r.sent).length>0?(n=n[0],t.brand=[n.brand_id],t.model=[n.model_id]):(a=t.brands.filter((function(t){return parseInt(t.brand_id)===parseInt(e)}))).length>0&&(a=a[0],t.brand=[a.brand_id]),t.doSearch(),r.next=10;break;case 9:t.term=e;case 10:case"end":return r.stop()}}),r)})))()},handleEnter:function(e){this.term=e.target.value,this.doSearch()},handleBlur:function(e){this.term=e.target.value},clickEventDouble:function(e,t){var r=e.target.name;if(r){var n="from"===r?"de":"ate",a="".concat(t,"-").concat(n,"-top");this.sendGAEvent("BotÃ£o","Click",a)}}}},i=r(34),u=Object(i.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{role:"search"},on:{submit:function(t){return t.preventDefault(),e.doSearch(t)}}},[r("div",{staticClass:"search-internal"},[r("autocomplete",{ref:e.unique,staticClass:"search-internal-input",attrs:{id:e.unique,"filter-by-anchor":!0,"custom-params":{f:"json"},"on-enter":e.handleEnter,"on-blur":e.handleBlur,"on-select":e.selectTerm,"on-empty-input":e.doSearch,required:!1,min:2,"init-value":e.term,debounce:300,name:"search-term-simple","input-type":"search",role:"searchbox",url:"/api/autocomplete/search",anchor:"id",label:"word",group:"groupby",placeholder:"Digite sua busca...",maxlength:"150"},nativeOn:{click:function(t){return e.sendButtonClickEvent("cam-bus-top")}}}),e._v(" "),r("InputDouble",{ref:"years-select-internal",staticClass:"years",attrs:{options:e.yearsOptions,placeholder:["Ano de","Ano atÃ©"],mask:"####",select:"",ordered:"",strict:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch(t)},click:function(t){return e.clickEventDouble(t,"ano")}},model:{value:e.years,callback:function(t){e.years=t},expression:"years"}}),e._v(" "),r("div",{staticClass:"search-loupe",on:{click:function(t){return t.preventDefault(),e.doSearch(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.doSearch(t)}}},[e.isLoading?r("span",{staticClass:"spinner",staticStyle:{"font-size":"15px",color:"#fff","border-width":".13em"},attrs:{role:"status","aria-label":"Buscando..."}}):r("svg-icon",{attrs:{role:"icon",name:"common/search",title:"Buscar"}})],1)],1)])}),[],!1,null,null,null);t.default=u.exports},504:function(e,t,r){"use strict";var n=r(25),a=r(76),o=r(77),s=r(180),l=r(132),i=r(38),u=r(108).f,c=r(109).f,d=r(46).f,f=r(518).trim,h="Number",m=n.Number,p=m,v=m.prototype,g=o(r(133)(v))==h,b="trim"in String.prototype,y=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,o=(t=b?t.trim():f(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var s,i=t.slice(2),u=0,c=i.length;u<c;u++)if((s=i.charCodeAt(u))<48||s>a)return NaN;return parseInt(i,n)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof m&&(g?i((function(){v.valueOf.call(r)})):o(r)!=h)?s(new p(y(t)),r,m):y(t)};for(var x,k=r(37)?u(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),V=0;k.length>V;V++)a(p,x=k[V])&&!a(m,x)&&d(m,x,c(p,x));m.prototype=v,v.constructor=m,r(49)(n,h,m)}},510:function(e,t,r){var n=r(17),a=r(38),o=r(83),s=/"/g,l=function(e,t,r,n){var a=String(o(e)),l="<"+t;return""!==r&&(l+=" "+r+'="'+String(n).replace(s,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(l),n(n.P+n.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},517:function(e,t,r){"use strict";r(510)("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},518:function(e,t,r){var n=r(17),a=r(83),o=r(38),s=r(519),l="["+s+"]",i=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),c=function(e,t,r){var a={},l=o((function(){return!!s[e]()||"âÂ"!="âÂ"[e]()})),i=a[e]=l?t(d):s[e];r&&(a[r]=i),n(n.P+n.F*l,"String",a)},d=c.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(i,"")),2&t&&(e=e.replace(u,"")),e};e.exports=c},519:function(e,t){e.exports="\t\n\v\f\r Â áá ââââââââââââ¯âã\u2028\u2029\ufeff"},522:function(e,t,r){var n=r(537);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(75).default)("82024da6",n,!0,{sourceMap:!1})},533:function(e,t,r){"use strict";r(32),r(504),r(13),r(42),r(43),r(12),r(266),r(44);var n={name:"InputDouble",components:{Input:function(){return Promise.resolve().then(r.bind(null,514))},Autocomplete:r(521).a},props:{strict:{type:Boolean,required:!1,default:!1},select:{required:!1,type:Boolean,default:!1},options:{required:!1,type:Array,default:null},firstInputType:{type:String,default:"text",required:!1,validator:function(e){return["checkbox","radio","text","search"].includes(e)}},secondInputType:{type:String,default:"text",required:!1,validator:function(e){return["checkbox","radio","text","search"].includes(e)}},placeholder:{type:Array,default:null,required:!1},money:{type:Boolean,default:!1,required:!1},mask:{required:!1,default:null,type:[String,null]},value:{type:Object,default:function(){return{from:null,to:null}},required:!1,validator:function(e){return void 0!==e.from&&void 0!==e.to}},ordered:{type:Boolean,default:!1,required:!1},maxlength:{type:[Number,String],required:!1,default:524288},maskPrefix:{required:!1,default:"",type:String},maskSuffix:{required:!1,default:"",type:String},defaults:{required:!1,default:null,type:Object,validator:function(e){return void 0!==e.from&&void 0!==e.to}}},data:function(){return{opened:!1,modelValues:{from:null,to:null},initFrom:null,initTo:null}},watch:{value:{immediate:!0,handler:function(e){var t=this;this.modelValues=e,this.orderValues(),this.select&&this.$nextTick((function(){t.changeAutocompleteValues(e)}))}}},methods:{getPrimaryData:function(e){return this.filterValue(e,this.options)},getSecondaryData:function(e){return this.filterValue(e,this.options)},filterValue:function(e,t){return e?t.filter((function(t){var r=new RegExp("".concat(e),"ig");return t.value.toString().match(r)})):t},change:function(){this.$emit("input",this.modelValues)},blur:function(){this.orderValues()},autocompleteFromSelect:function(e){this.modelValues.from=e,this.orderValues(),this.change()},autocompleteToSelect:function(e){this.modelValues.to=e,this.orderValues(),this.change()},orderValues:function(){var e=this;if(this.defaults&&(null===this.modelValues.from&&null!==this.modelValues.to&&(this.modelValues.from=this.defaults.from,this.select&&this.$nextTick((function(){e.$refs.auto_from.setValue(e.modelValues.from)}))),null===this.modelValues.to&&null!==this.modelValues.from&&(this.modelValues.to=this.defaults.to,this.select&&this.$nextTick((function(){e.$refs.auto_to.setValue(e.modelValues.to)})))),this.ordered){var t=this.modelValues,r=t.from,n=t.to;parseInt(r)>parseInt(n)&&(this.modelValues={from:n,to:r},this.select&&(this.$refs.auto_from.setValue(this.modelValues.from),this.$refs.auto_to.setValue(this.modelValues.to)))}},changeAutocompleteValues:function(e){this.modelValues=e,this.$refs.auto_from.setValue(e.from),this.$refs.auto_to.setValue(e.to)}}},a=(r(536),r(34)),o=Object(a.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-double"},[r("div",{staticClass:"from"},[e.select?r("Autocomplete",{ref:"auto_from",attrs:{"input-type":e.firstInputType,"on-should-get-data":e.getPrimaryData,options:e.options,placeholder:null!==e.placeholder&&void 0!==e.placeholder[0]?e.placeholder[0]:null,"on-select":e.autocompleteFromSelect,"init-value":e.initFrom,maxlength:e.maxlength,mask:e.mask,strict:e.strict,anchor:"value",label:"label",name:"from",select:"",url:"0"}}):r("Input",{attrs:{money:e.money,placeholder:null!==e.placeholder&&void 0!==e.placeholder[0]?e.placeholder[0]:null,mask:e.mask,maxlength:e.maxlength,"mask-prefix":e.maskPrefix,"mask-suffix":e.maskSuffix,"input-type":e.firstInputType,name:"from"},on:{input:e.change,blur:e.blur},model:{value:e.modelValues.from,callback:function(t){e.$set(e.modelValues,"from",t)},expression:"modelValues.from"}})],1),e._v(" "),r("div",{staticClass:"to"},[e.select?r("Autocomplete",{ref:"auto_to",attrs:{"input-type":e.secondInputType,"on-should-get-data":e.getSecondaryData,options:e.options,placeholder:null!==e.placeholder&&void 0!==e.placeholder[1]?e.placeholder[1]:null,"on-select":e.autocompleteToSelect,"init-value":e.initTo,mask:e.mask,strict:e.strict,anchor:"value",label:"label",name:"to",select:"",url:"0"},on:{input:e.blur}}):r("Input",{attrs:{money:e.money,placeholder:null!==e.placeholder&&void 0!==e.placeholder[1]?e.placeholder[1]:null,maxlength:e.maxlength,mask:e.mask,"mask-prefix":e.maskPrefix,"mask-suffix":e.maskSuffix,"input-type":e.secondInputType,name:"to"},on:{input:e.change,blur:e.blur},model:{value:e.modelValues.to,callback:function(t){e.$set(e.modelValues,"to",t)},expression:"modelValues.to"}})],1)])}),[],!1,null,"3c39940c",null);t.a=o.exports},536:function(e,t,r){"use strict";r(522)},537:function(e,t,r){var n=r(74)(!1);n.push([e.i,".input-double[data-v-3c39940c]{display:flex;flex-flow:row wrap;justify-content:space-between}.input-double .from[data-v-3c39940c],.input-double .to[data-v-3c39940c]{max-width:46%}",""]),e.exports=n},625:function(e,t,r){var n=r(17);n(n.S,"Number",{isInteger:r(626)})},626:function(e,t,r){var n=r(39),a=Math.floor;e.exports=function(e){return!n(e)&&isFinite(e)&&a(e)===e}}}]);
//# sourceMappingURL=66.4f665e5480fb2420411e.js.map