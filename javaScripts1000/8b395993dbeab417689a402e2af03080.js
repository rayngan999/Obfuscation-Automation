Cube("datav:/com/counter/1.3.19/iconfont.css", [], function(m){m.exports="@font-face{font-family:fanpaiqi;src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/fanpaiqi.eot);src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/fanpaiqi.eot) format('embedded-opentype'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/fanpaiqi.woff) format('woff'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/fanpaiqi.ttf) format('truetype')}@font-face{font-family:HighlandGothicFLF;src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/HighlandGothicFLF.eot);src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/HighlandGothicFLF.eot) format('embedded-opentype'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/HighlandGothicFLF.woff) format('woff'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/HighlandGothicFLF.ttf) format('truetype')}@font-face{font-family:Acens;src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Acens.eot);src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Acens.eot) format('embedded-opentype'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Acens.woff) format('woff'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Acens.ttf) format('truetype')}@font-face{font-family:DIN;src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DINAlternate.eot);src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DINAlternate.eot) format('embedded-opentype'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DINAlternate.woff) format('woff'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DINAlternate.ttf) format('truetype')}@font-face{font-family:Petitinho;src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Petitinho.eot);src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Petitinho.eot) format('embedded-opentype'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Petitinho.woff) format('woff'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Petitinho.ttf) format('truetype')}@font-face{font-family:DS-Digital;src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DS-Digital.eot);src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DS-Digital.eot) format('embedded-opentype'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DS-Digital.woff) format('woff'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DS-Digital.ttf) format('truetype')}@font-face{font-family:DS-Digital;src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DS-Digital.eot);src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DS-Digital.eot) format('embedded-opentype'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DS-Digital.woff) format('woff'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/DS-Digital.ttf) format('truetype')}@font-face{font-family:Prisma;src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Prisma.eot);src:url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Prisma.eot) format('embedded-opentype'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Prisma.woff) format('woff'),url(//datav.oss-cn-hangzhou.aliyuncs.com/uploads/fonts/Prisma.ttf) format('truetype')}";return m.exports});;
Cube("datav:/com/counter/1.3.19",["datav:/npm/bcore/0.0.9/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1","datav:/npm/dchart-counter/0.2.15"],function(a,b,c){function d(a){var b={digit:a.numbers.digit,duration:a.numbers.duration,prefix:{content:a.prefix.content,"font-size":a.prefix.textStyle.fontSize,"font-weight":a.prefix.textStyle.fontWeight,color:a.prefix.textStyle.color,"font-family":a.prefix.textStyle.fontFamily},suffix:{content:a.suffix.content,"font-size":a.suffix.textStyle.fontSize,"font-weight":a.suffix.textStyle.fontWeight,color:a.suffix.textStyle.color,"font-family":a.suffix.textStyle.fontFamily},rounding:a.numbers.rounding,decimal:a.numbers.decimal,separate:!0,color:a.numbers.textStyle.color,"num-background-color":a.numbers.backgroundColor,"background-color":"rgba(0,0,0,0)","font-size":a.numbers.textStyle.fontSize,"font-weight":a.numbers.textStyle.fontWeight,"margin-right":a.numbers.marginRight+"em","separating-chart":a.numbers.separatingChart,height:"auto","line-height":"normal","border-radius":a.numbers.backgroundRadius||0===a.numbers.backgroundRadius?a.numbers.backgroundRadius:6,"separating-background":!!a.numbers.separatingBackground&&a.numbers.separatingBackground,"fixed-width":a.numbers.fixedWidth?a.numbers.fixedWidth:0,separatingSymbol:a.numbers.separatingSymbol?a.numbers.separatingSymbol:",",decimalSymbol:a.numbers.decimalSymbol?a.numbers.decimalSymbol:".",animation:!g.has(a.numbers,"animation")||a.numbers.animation,sameDataFlip:!!a.numbers.sameDataFlip&&a.numbers.sameDataFlip,backgroundImage:a.numbers.textStyle.backgroundImage};return b}c("datav:/com/counter/1.3.19/iconfont.css","");var e=c("datav:/npm/bcore/0.0.9/event"),f=c("datav:/npm/jquery/2.1.4"),g=c("datav:/npm/lodash/4.6.1"),h=c("datav:/npm/dchart-counter/0.2.15");return a.exports=e.extend(function(a,b){this.config={theme:{bg:["#000","#f9f9f9"],font:["#eee","#252525"],colors:["#444547","#A0AAB3"]}},this.container=f(a).css({display:"flex","align-items":"center"}),this.init(b)},{initLayout:function(){},initColors:function(){},init:function(a){this.apis=a.apis;var b=this.mergeConfig(a);this.initLayout(),this.flip=new h(this.container[0],d(b)||{}),this.updateStyle()},mergeConfig:function(a){return a?(this.config.theme=g.defaultsDeep(a.theme||{},this.config.theme),this.config=g.defaultsDeep(a||{},this.config),this.initColors(this.config),this.config):this.config},updateStyle:function(){var a=this.config;this.container.css({"white-space":"nowrap","justify-content":a.global.align.justifyContent,"align-items":a.global.align.alignItems,"font-family":"\""+a.global.textStyle.fontFamily+"\""})},data:function(a){var b=!0;return a&&a[0]&&"undefined"!==typeof a[0].value?this.config.numbers.increment&&this._data&&g.toNumber(a[0].value)<g.toNumber(this._data[0].value)?b=!1:this.config.numbers.rounding&&this._data&&Math.round(a[0].value)===Math.round(this._data[0].value)?(b=!1,this._data=a):this._data&&this._data[0]&&a[0].value===this._data[0].value?b=!1:this._data=a:b=!1,this.dataChange=b,this._data},forceUpdate:function(a){var b=g.get(a,"[0].value")||0;this._data[0].value=b,this.flip.render(b,d(this.config)||{}),this.updateStyle(),this.emit("counter-change",{value:b})},render:function(a,b){a=this.data(a),b&&this.mergeConfig(b);var c=this.config;this.flip.render(a&&a[0].value,d(c)||{}),this.updateStyle(),this.dataChange&&a[0]&&(this.emit("counter-change",a[0]),c.interaction.callbackId&&""!==c.interaction.callbackId&&this.emit("global_var",c.interaction.callbackId,a[0][c.interaction.callbackId]))},resize:function(){this.initLayout(),this.updateStyle()}}),a.exports});