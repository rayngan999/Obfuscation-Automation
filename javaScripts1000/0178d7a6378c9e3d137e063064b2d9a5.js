(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk/components/commonV2/SectionCarousel"],{810:function(t,e,i){"use strict";(function(t){var s=i(2),o=i(0),n=i(964);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(i,!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}o.g.register([{rel:"stylesheet",type:"text/css",href:"public/[WEB_VER]/css/page/commonV2/section-part.css"}]),e.a={name:"SectionCarousel",components:{Slick:function(){return i.e("chunk/components/commonV2/Slick").then(i.bind(null,705))}},provide:function(){return{block_title:this.block_title}},filters:{},props:{block_data:{type:Array,default:function(){return[]},required:!0},block_title:{type:String,default:"",required:!0},block_subtitle:{type:String,default:"",required:!1},block_type:{type:String,default:"",required:!0},block_name:{type:String,default:"",required:!0},num:{type:Number,default:0,required:!0},url:{type:String,default:"",required:!1},responsiveCustomSetting:{type:Array,default:function(){return[]},required:!1},backgroundColor:{type:String,default:"#ffffff",required:!1}},data:function(){return{setting:{adaptiveHeight:!0,arrows:!1,autoplaySpeed:3e3,cssEase:"ease-in",draggable:!1,infinite:!1,"lazy-load":"ondemand",mobileFirst:!0,speed:500},currentDot:0,dotCount:0,pc_min_size:576,mode_type:"",display:!1,style:{visibility:"hidden",opacity:0}}},computed:a({},Object(s.mapGetters)(["PageSetting"]),{ids:function(){return o.s.getRandomString()},responsiveSetting:function(){return n.a},responsive:function(){return this.responsiveSetting["".concat(this.block_type,"_").concat(this.num)]},mergeSetting:function(){var t=a({},this.setting,{responsive:this.responsive});return this.responsiveCustomSetting.length>0?a({},t,{responsive:this.responsiveCustomSetting}):t},disabledArrow:function(){return{left:0===this.currentDot,right:this.currentDot+1===this.dotCount}}}),watch:{PageSetting:{handler:function(t){t.width?t.width<this.pc_min_size?this.mode_type="mobile":this.mode_type="pc":this.mode_type=t.mode_type},immediate:!0},display:{handler:function(t){this.style=t?{visibility:"visible",opacity:1}:{visibility:"hidden",opacity:0}},immediate:!0},block_data:{handler:function(t,e){t!==e&&this.$refs[this.ids]&&this.$refs[this.ids].Slick&&this.$refs[this.ids].reInitSlick()}}},created:function(){},mounted:function(){},updated:function(){},destroyed:function(){},methods:a({},Object(s.mapActions)({}),{},Object(s.mapMutations)({}),{init:function(t,e){this.lazyImg(),this.setSlickListPadding(e),this.display=!0},reInit:function(t,e){this.lazyImg(),this.setSlickListPadding(e),this.display=!0},destroy:function(t,e){this.display=!1},breakpoint:function(t,e,i){this.setSlickListPadding(e)},afterChange:function(t,e,i){},lazyImg:function(){t("body").trigger("lazyImg")},prev:function(){this.disabledArrow.left||(this.clickSectionArrow("left"),this.$refs[this.ids].prev())},next:function(){this.disabledArrow.right||(this.clickSectionArrow("right"),this.$refs[this.ids].next())},setSlickListPadding:function(t){!1===t.options.centerMode&&null!==t.activeBreakpoint&&(0===t.activeBreakpoint?t.$list[0].style.padding="0 8px":t.$list[0].style.padding="")},clickSectionReadMore:function(){var t={};if(this.$route){var e=this.$route.params.activity_id;e&&(t.activity_id=e)}this.block_title&&(t.block_title=this.block_title),o.p.pageAction("viewMore_click",t)},clickSectionArrow:function(t){var e={direction:t};if(this.$route){var i=this.$route.params.activity_id;i&&(e.activity_id=i)}this.block_title&&(e.block_title=this.block_title),o.p.pageAction("arrowButton_click",e)}})}}).call(this,i(1))},811:function(t,e,i){var s=i(966);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(61).default)("06b05b76",s,!0,{})},863:function(t,e,i){"use strict";i.r(e);var s=i(810).a,o=(i(965),i(5)),n=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-part",style:t.style},[i("div",{staticClass:"section-part-header"},[i("div",{staticClass:"section-part-title"},[i("h2",{attrs:{"data-seo":""},domProps:{textContent:t._s(t.block_title)}}),t._v(" "),i("span",{attrs:{"data-type":"desc"},domProps:{textContent:t._s(t.block_subtitle)}})]),t._v(" "),i("div",{staticClass:"section-part-action"},[t.url?[i("div",{staticClass:"section-part-more"},[i("pp-router-link",{staticClass:"read-more",attrs:{to:t.url},nativeOn:{click:function(e){return t.clickSectionReadMore(e)}}},[t._v("\n                        æ¥çæ´å¤\n                    ")])],1)]:t._e(),t._v(" "),"pc"===t.mode_type&&1!==t.dotCount?[i("div",{staticClass:"section-part-control"},[i("div",{staticClass:"section-part-arrow",class:{"arrow-disabled":t.disabledArrow.left},attrs:{"data-arrow":"left",role:"button"},on:{click:t.prev}},[i("i",{staticClass:"icon icon-arrow_left_S"})]),t._v(" "),i("div",{staticClass:"section-part-arrow",class:{"arrow-disabled":t.disabledArrow.right},attrs:{"data-arrow":"right",role:"button"},on:{click:t.next}},[i("i",{staticClass:"icon icon-arrow_right_S"})])])]:t._e()],2)]),t._v(" "),i("div",{staticClass:"section-part-desc",class:{"mb-0":!t.block_subtitle}},[i("span",{domProps:{textContent:t._s(t.block_subtitle)}})]),t._v(" "),i("div",{staticClass:"section-part-content",style:{backgroundColor:t.backgroundColor},attrs:{"data-type":"carousel"}},[i("slick",t._b({ref:t.ids,on:{init:t.init,"re-init":t.reInit,destroy:t.destroy,breakpoint:t.breakpoint,"after-change":t.afterChange,"current-dot":function(e){return t.currentDot=e||0},"dot-count":function(e){return t.dotCount=e||0}}},"slick",t.mergeSetting,!1),[t._t("default")],2)],1)])}),[],!1,null,"8795044a",null);e.default=n.exports},964:function(t,e,i){"use strict";e.a={common_3:[{breakpoint:1200,settings:{slidesToScroll:3,slidesToShow:3}},{breakpoint:992,settings:{slidesToScroll:3,slidesToShow:3}},{breakpoint:768,settings:{slidesToScroll:3,slidesToShow:3}},{breakpoint:576,settings:{slidesToScroll:2,slidesToShow:2}},{breakpoint:0,settings:{centerPadding:"8px",draggable:!0,slidesToScroll:1,slidesToShow:1.1}}],common_4:[{breakpoint:1200,settings:{slidesToScroll:4,slidesToShow:4}},{breakpoint:992,settings:{slidesToScroll:4,slidesToShow:4}},{breakpoint:768,settings:{slidesToScroll:3,slidesToShow:3}},{breakpoint:576,settings:{slidesToScroll:2,slidesToShow:2}},{breakpoint:0,settings:{centerPadding:"8px",draggable:!0,slidesToScroll:1,slidesToShow:1.1}}],common_6:[{breakpoint:1200,settings:{slidesToScroll:6,slidesToShow:6}},{breakpoint:992,settings:{slidesToScroll:5,slidesToShow:5}},{breakpoint:768,settings:{slidesToScroll:4,slidesToShow:4}},{breakpoint:576,settings:{slidesToScroll:3,slidesToShow:3}},{breakpoint:0,settings:{centerPadding:"8px",draggable:!0,slidesToScroll:1,slidesToShow:2.1}}]}},965:function(t,e,i){"use strict";var s=i(811);i.n(s).a},966:function(t,e,i){(t.exports=i(60)(!1)).push([t.i,"[data-v-8795044a] .slick-carousel .slick-track{display:flex;margin-left:unset;margin-right:unset}[data-v-8795044a] .slick-carousel .slick-slide{height:inherit}[data-v-8795044a] .slick-carousel .slick-slide>div:not([class]){height:100%}[data-v-8795044a] .slick-carousel .slick-slide>div:not([class])>[data-topic]{height:100%}\n",""])}}]);