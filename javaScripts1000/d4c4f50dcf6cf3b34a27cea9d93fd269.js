(window.webpackJsonp=window.webpackJsonp||[]).push([[118,151],{1264:function(e,t,n){"use strict";n(915)},1265:function(e,t,n){var l=n(16)((function(i){return i[1]}));l.push([e.i,'.lv-kisa-container:before{display:block;content:""}[dir] .lv-kisa-container:before{margin:1.5rem -1.5rem;border-top:1px solid #eae8e4}@media screen and (min-width:48rem){[dir] .lv-kisa-container:before{margin-left:-2rem;margin-right:-2rem}}[dir] .lv-kisa-container__description{margin:0 0 1.5rem}[dir] .lv-kisa-container__short-description{margin:1rem 0 0}[dir] .lv-kisa-container__form .lv-form-container__fields{padding:1.5rem .5rem}[dir] .lv-kisa-container__form .lv-form-container__fieldset{margin-bottom:0}[dir] .lv-kisa-container__form .lv-form-container__fieldset+.lv-form-container__fieldset{margin-top:1rem}.lv-kisa-container__form .lv-form-container__action{flex:1 1 auto}.lv-kisa-container .lv-input-checkbox__label+a{font-size:.875rem;letter-spacing:.025rem;line-height:1.25rem;font-weight:400;color:inherit;text-decoration:none;color:#19110b}[dir] .lv-kisa-container .lv-input-checkbox__label+a{box-shadow:0 1px 0;transition:color .3s cubic-bezier(.39,.575,.565,1);cursor:pointer}.lv-kisa-container .lv-input-checkbox__label+a:lang(ko),.lv-kisa-container .lv-input-checkbox__label+a:lang(zh){font-size:.7875rem}.lv-kisa-container .lv-input-checkbox__label+a:lang(ja){font-size:.7rem;letter-spacing:0;line-height:normal;font-style:normal}.lv-kisa-container .lv-input-checkbox__label+a:lang(ko),.lv-kisa-container .lv-input-checkbox__label+a:lang(th),.lv-kisa-container .lv-input-checkbox__label+a:lang(zh){letter-spacing:0;line-height:normal;font-style:normal}.lv-kisa-container .lv-input-checkbox__label+a:lang(th){word-break:break-word}@media (-moz-touch-enabled:0),(-ms-high-contrast:none),(-ms-hover:hover),(-webkit-hover:hover),(hover:hover) and (pointer:fine),screen and (-ms-high-contrast:active){.lv-kisa-container .lv-input-checkbox__label+a:hover{color:rgba(25,17,11,.6)}}.keyboard-is-used .lv-kisa-container .lv-input-checkbox__label+a:focus{color:rgba(25,17,11,.6)}.lv-kisa-container .lv-input-checkbox__label+a:disabled{color:rgba(25,17,11,.4)}[dir] .lv-kisa-container .lv-input-checkbox__label+a:disabled{cursor:auto}',""]),e.exports=l},1354:function(e,t,n){"use strict";n.r(t);n(8),n(18),n(10),n(29),n(33);var l=n(520),o=n(265),r=n(935),c={components:{FormContainer:l.default,InputCheckbox:r.default,LegalNoticeSection:()=>Promise.resolve().then(n.bind(null,1294))},props:{isPending:{type:Boolean,default:!1},errorMessage:{type:String,default:null}},data:()=>({checkAll:!1,model:{},isSubmitButtonDisabled:!0}),computed:{policies(){return this.$store.state.editorial.policies},policiesDetails(){return this.policies.reduce(((e,t)=>Object.assign(e,{[t.policyId]:!!t.chapters.length})),{})},schema(){return Object(o.b)(this.policies,this)}},watch:{checkAll(e){Object.keys(this.schema.properties).forEach((t=>Object.assign(this.$refs.form.model,{[t]:e})))}},methods:{handleFormUpdate(e){this.isSubmitButtonDisabled=!this.schema.required.every((t=>!0===e[t]))}}},d=(n(1264),n(5)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lv-kisa-container"},[n("div",{staticClass:"lv-kisa-container__wrapper"},[n("div",{staticClass:"lv-kisa-container__description"},[n("span",{staticClass:"lv-kisa-container__title list-label-l"},[e._v(e._s(e.$t("kisa_title")))]),e._v(" "),n("p",{staticClass:"lv-kisa-container__short-description -text-is-light list-label-l"},[e._v("\n        "+e._s(e.$t("kisa_short_desc"))+"\n      ")])]),e._v(" "),n("div",{staticClass:"lv-kisa-container__content list-label-l"},[n("InputCheckbox",{attrs:{id:e.$t("kisa_labelbox_title"),title:e.$t("kisa_labelbox_title"),name:e.$t("kisa_labelbox_title"),required:!1},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}}),e._v(" "),e.schema?n("FormContainer",{key:e.schema.$id,ref:"form",staticClass:"lv-kisa-container__form",attrs:{"form-schema":e.schema,"error-message":e.errorMessage,"is-pending":e.isPending,"is-submit-button-disabled":e.isSubmitButtonDisabled,"has-cancel-button":!0,"submit-button-label":e.$t("kisa_submit_button"),"cancel-button-label":e.$t("global_modify_your_email")},on:{cancel:function(t){return e.$emit("cancel")},submit:function(t){return e.$emit("submit",t)},updated:function(t){var n=t.model;return e.handleFormUpdate(n)}},scopedSlots:e._u([e._l(e.schema.properties,(function(t,l){return{key:"additional-content-"+l,fn:function(){return[e.policiesDetails[l]?n("a",{key:l,staticClass:"lv-kisa-container__disclaimer",attrs:{href:"#"+l,target:"modal"}},[e._v("\n            "+e._s(e.$t(l.replace(/title$/,"t")))+"\n          ")]):e._e()]},proxy:!0}}))],null,!0)},[e._v(" "),n("p",{staticClass:"lv-kisa-container__description -text-is-light list-label-s"},[e._v("\n          "+e._s(e.$t("kisa_free_text_bloc"))+"\n        ")])]):e._e()],1),e._v(" "),n("LegalNoticeSection",{attrs:{"modal-id":"kisa-popin"}})],1)])}),[],!1,null,null,null);t.default=component.exports},574:function(e,t,n){var content=n(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("d9d0f540",content,!0,{sourceMap:!1})},630:function(e,t,n){"use strict";n(574)},631:function(e,t,n){var l=n(16)((function(i){return i[1]}));l.push([e.i,".lv-input-checkbox{position:relative}.lv-input-checkbox input{position:absolute;opacity:0}.keyboard-is-used .lv-input-checkbox input:focus+.field-label>svg{outline:1px dotted}.lv-input-checkbox__label{display:flex}.lv-input-checkbox__label a{text-decoration:none;color:#19110b}[dir] .lv-input-checkbox__label a{box-shadow:0 1px 0;transition:color .3s cubic-bezier(.39,.575,.565,1);cursor:pointer}@media (-moz-touch-enabled:0),(-ms-high-contrast:none),(-ms-hover:hover),(-webkit-hover:hover),(hover:hover) and (pointer:fine),screen and (-ms-high-contrast:active){.lv-input-checkbox__label a:hover{color:rgba(25,17,11,.6)}}.keyboard-is-used .lv-input-checkbox__label a:focus{color:rgba(25,17,11,.6)}.lv-input-checkbox__label a:disabled{color:rgba(25,17,11,.4)}[dir] .lv-input-checkbox__label a:disabled{cursor:auto}[dir=ltr] .lv-input-checkbox__label span+svg{margin:0 0 0 1rem}[dir=rtl] .lv-input-checkbox__label span+svg{margin:0 1rem 0 0}[dir=ltr] .lv-input-checkbox__label+*{margin:0 0 0 2rem}[dir=rtl] .lv-input-checkbox__label+*{margin:0 2rem 0 0}.lv-input-checkbox__icon{flex:0 0 auto;width:1rem;height:1rem}[dir=ltr] .lv-input-checkbox__icon{margin-right:1rem}[dir=rtl] .lv-input-checkbox__icon{margin-left:1rem}",""]),e.exports=l},915:function(e,t,n){var content=n(1265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(17).default)("c1acaf96",content,!0,{sourceMap:!1})},935:function(e,t,n){"use strict";n.r(t);var l={components:{Icon:n(21).default},props:{id:{type:String,default:null},name:{type:String,required:!0},title:{type:String,default:""},required:{type:Boolean,default:!1},value:{type:Boolean,default:!1},describedBy:{type:String,default:void 0}},computed:{checked:{get(){return this.value},set(e){this.$emit("input",e)}}}},o=(n(630),n(5)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lv-input-checkbox"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"},{name:"validate",rawName:"v-validate"}],attrs:{id:e.id,name:e.name,required:e.required,"aria-describedby":e.describedBy,type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var n=e.checked,l=t.target,o=!!l.checked;if(Array.isArray(n)){var r=e._i(n,null);l.checked?r<0&&(e.checked=n.concat([null])):r>-1&&(e.checked=n.slice(0,r).concat(n.slice(r+1)))}else e.checked=o}}}),e._v(" "),n("label",{staticClass:"lv-input-checkbox__label field-label",attrs:{for:e.id}},[n("Icon",{staticClass:"lv-input-checkbox__icon",attrs:{name:e.checked?"controls-checkbox-on":"controls-checkbox-off"}}),e._v(" "),e.title?n("span",{domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),e._t("additional-inner-content")],2),e._v(" "),e._t("additional-content")],2)}),[],!1,null,null,null);t.default=component.exports}}]);