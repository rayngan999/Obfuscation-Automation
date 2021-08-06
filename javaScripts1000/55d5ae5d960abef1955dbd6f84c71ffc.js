Cube("datav:/npm/dchart-counter/0.2.15/counter",["datav:/npm/jquery/2.1.4","datav:/npm/to-style/1.3.3"],function(a,b,c){var d=c("datav:/npm/jquery/2.1.4"),e=c("datav:/npm/to-style/1.3.3").string;return function(){(function(a){var b,c,f;return f="counter",c={autoStart:!0,duration:1500,countFrom:void 0,countTo:void 0,runOnce:!1,placeholder:void 0,easing:"easeOutQuad",onStart:function(){},onComplete:function(){},numberFormatter:function(a){return Math.round(a)}},b=function(){return function(b,d){this.element=b,this.options=a.extend(!0,{},c,d),this.init()}}(),b.prototype.init=function(){if(null===this.options.countFrom||isNaN(this.options.countFrom)){var a;a=parseInt(this.element.innerHTML),null==a||isNaN(a)||(this.options.countFrom<a?this.options.countTo=a:this.options.countFrom=a)}return(void 0===this.options.countFrom&&(this.options.countFrom=0),void 0===this.options.countTo&&(this.options.countTo=0),null!=this.options.placeholder&&(this.element.innerHTML=this.options.placeholder),this.options.autoStart)?this.start():void 0},b.prototype.restart=function(c){return this.options.countFrom=this.options.countTo,this.options=a.extend(!0,{},this.options,c),new b(this.element,this.options)},b.prototype.start=function(){var a;return this.options.runOnce&&1<=this.runCount()?!1:this.running?void 0:(this.running=!0,this.updateRunCount(),this.options.onStart(),a=this,d({count:this.options.sameDataFlip&&this.options.countFrom===this.options.countTo?0:this.options.countFrom}).animate({count:this.options.countTo},{duration:this.options.duration,easing:this.options.easing,step:function(){var b=a.setNumber(this.count,a.options);return a.options.onSetNumberComplete&&a.options.onSetNumberComplete(),b},complete:function(){return a.setNumber(a.options.countTo,a.options),a.options.onSetNumberComplete&&a.options.onSetNumberComplete(),a.running=!1,a.options.onComplete()}}))},b.prototype.updateRunCount=function(){return a(this.element).data("counterRunCount",(this.runCount()||0)+1)},b.prototype.runCount=function(){return a(this.element).data("counterRunCount")},b.prototype.setNumber=function(a,b){return this.element.innerHTML=this.options.numberFormatter.call(this,a,b)},b.prototype.format=function(a,b){if(a=a.toString(),a.length===b)return a;if(a.length<b){for(var d=[],e=0;e<b;e++)d.push(0);var f=d.join("");return f=f.concat(a),f.slice(-b,f.length)}},b.prototype.createSpan=function(a,b){return"<span class=\""+b+"\" style=\""+e(a)+"\">"+a.content+"</span>"},a.fn.counter=function(c){var d;return d=this,this.each(function(){var d;if(!(d=a(this).data("plugin_"+f)))return a(this).data("plugin_"+f,new b(this,c));if("string"===typeof c)switch(c){case"start":return d.start();}else d.restart(c)})}})(d)}.call(void 0),a.exports=d,a.exports});;
Cube("datav:/npm/dchart-counter/0.2.15/jquery.easing.js",["datav:/npm/jquery/2.1.4"],function(a,b,c){var e=c("datav:/npm/jquery/2.1.4");return e.easing.jswing=e.easing.swing,e.extend(e.easing,{def:"easeOutQuad",swing:function(a,f,g,b,c){return e.easing[e.easing.def](a,f,g,b,c)},easeInQuad:function(a,e,f,b,c){return b*(e/=c)*e+f},easeOutQuad:function(a,e,f,b,g){return-b*(e/=g)*(e-2)+f},easeInOutQuad:function(a,e,f,b,g){return 1>(e/=g/2)?b/2*e*e+f:-b/2*(--e*(e-2)-1)+f},easeInCubic:function(a,e,f,b,c){return b*(e/=c)*e*e+f},easeOutCubic:function(a,e,f,b,c){return b*((e=e/c-1)*e*e+1)+f},easeInOutCubic:function(a,e,f,b,c){return 1>(e/=c/2)?b/2*e*e*e+f:b/2*((e-=2)*e*e+2)+f},easeInQuart:function(a,e,f,b,c){return b*(e/=c)*e*e*e+f},easeOutQuart:function(a,e,f,b,g){return-b*((e=e/g-1)*e*e*e-1)+f},easeInOutQuart:function(a,e,f,b,g){return 1>(e/=g/2)?b/2*e*e*e*e+f:-b/2*((e-=2)*e*e*e-2)+f},easeInQuint:function(a,e,f,b,c){return b*(e/=c)*e*e*e*e+f},easeOutQuint:function(a,e,f,b,c){return b*((e=e/c-1)*e*e*e*e+1)+f},easeInOutQuint:function(a,e,f,b,c){return 1>(e/=c/2)?b/2*e*e*e*e*e+f:b/2*((e-=2)*e*e*e*e+2)+f},easeInSine:function(a,e,f,b,g){return-b*Math.cos(e/g*(Math.PI/2))+b+f},easeOutSine:function(a,e,f,b,c){return b*Math.sin(e/c*(Math.PI/2))+f},easeInOutSine:function(a,e,f,b,g){return-b/2*(Math.cos(Math.PI*e/g)-1)+f},easeInExpo:function(a,e,f,b,c){return 0==e?f:b*Math.pow(2,10*(e/c-1))+f},easeOutExpo:function(a,e,f,b,c){return e==c?f+b:b*(-Math.pow(2,-10*e/c)+1)+f},easeInOutExpo:function(a,e,f,b,c){return 0==e?f:e==c?f+b:1>(e/=c/2)?b/2*Math.pow(2,10*(e-1))+f:b/2*(-Math.pow(2,-10*--e)+2)+f},easeInCirc:function(a,e,f,b,g){return-b*(Math.sqrt(1-(e/=g)*e)-1)+f},easeOutCirc:function(a,e,f,b,c){return b*Math.sqrt(1-(e=e/c-1)*e)+f},easeInOutCirc:function(a,e,f,b,g){return 1>(e/=g/2)?-b/2*(Math.sqrt(1-e*e)-1)+f:b/2*(Math.sqrt(1-(e-=2)*e)+1)+f},easeInElastic:function(e,f,g,b,c){var d=1.70158,h=0,i=b;if(0==f)return g;if(1==(f/=c))return g+b;if(h||(h=.3*c),i<Math.abs(b)){i=b;var d=h/4}else var d=h/(2*Math.PI)*Math.asin(b/i);return-(i*Math.pow(2,10*(f-=1))*Math.sin((f*c-d)*(2*Math.PI)/h))+g},easeOutElastic:function(e,f,g,b,c){var d=1.70158,h=0,i=b;if(0==f)return g;if(1==(f/=c))return g+b;if(h||(h=.3*c),i<Math.abs(b)){i=b;var d=h/4}else var d=h/(2*Math.PI)*Math.asin(b/i);return i*Math.pow(2,-10*f)*Math.sin((f*c-d)*(2*Math.PI)/h)+b+g},easeInOutElastic:function(e,f,g,b,c){var d=1.70158,h=0,i=b;if(0==f)return g;if(2==(f/=c/2))return g+b;if(h||(h=c*(.3*1.5)),i<Math.abs(b)){i=b;var d=h/4}else var d=h/(2*Math.PI)*Math.asin(b/i);return 1>f?-.5*(i*Math.pow(2,10*(f-=1))*Math.sin((f*c-d)*(2*Math.PI)/h))+g:.5*(i*Math.pow(2,-10*(f-=1))*Math.sin((f*c-d)*(2*Math.PI)/h))+b+g},easeInBack:function(a,e,f,b,c,d){return void 0==d&&(d=1.70158),b*(e/=c)*e*((d+1)*e-d)+f},easeOutBack:function(a,e,f,b,c,d){return void 0==d&&(d=1.70158),b*((e=e/c-1)*e*((d+1)*e+d)+1)+f},easeInOutBack:function(a,e,f,b,c,d){return void 0==d&&(d=1.70158),1>(e/=c/2)?b/2*(e*e*(((d*=1.525)+1)*e-d))+f:b/2*((e-=2)*e*(((d*=1.525)+1)*e+d)+2)+f},easeInBounce:function(a,f,g,b,c){return b-e.easing.easeOutBounce(a,c-f,0,b,c)+g},easeOutBounce:function(a,e,f,b,c){return(e/=c)<1/2.75?b*(7.5625*e*e)+f:e<2/2.75?b*(7.5625*(e-=1.5/2.75)*e+.75)+f:e<2.5/2.75?b*(7.5625*(e-=2.25/2.75)*e+.9375)+f:b*(7.5625*(e-=2.625/2.75)*e+.984375)+f},easeInOutBounce:function(a,f,g,b,c){return f<c/2?.5*e.easing.easeInBounce(a,2*f,0,b,c)+g:.5*e.easing.easeOutBounce(a,2*f-c,0,b,c)+.5*b+g}}),a.exports=e,a.exports});;
Cube("datav:/npm/dchart-counter/0.2.15",["datav:/npm/bcore/0.0.9/event","datav:/npm/jquery/2.1.4","datav:/npm/to-style/1.3.3","datav:/npm/lodash/4.6.1"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.9/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/to-style/1.3.3").string;c("datav:/npm/dchart-counter/0.2.15/jquery.easing.js"),c("datav:/npm/dchart-counter/0.2.15/counter");var g=c("datav:/npm/lodash/4.6.1"),h=function(a,b){return"<span class=\""+b+"\" style=\""+f(a)+"\">"+a.content+"</span>"};return a.exports=d.extend(function(a,b){this.config={duration:1e3,digit:null,prefix:{content:"","font-size":56,color:"#ededed","font-weight":"normal","vertical-align":"super"},"separating-chart":!1,suffix:{content:"","font-size":56,color:"#ededed","font-weight":"normal","vertical-align":"super"},rounding:!0,decimal:2,separate:!1,color:"#fff","num-background-color":"#000","background-color":"#000","font-size":56,"font-weight":"normal",display:"inline-block","text-indent":"0.02em","letter-spacing":"0.02em",height:"0.9em","line-height":"1em","margin-right":".2em","border-radius":6,"separating-background":!1,"inner-style":{"text-align":"center"},separatingSymbol:",",decimalSymbol:".",sameDataFlip:!1,animation:!0},e.extend(!0,this.config,b),this.container=e(a),this.apis=b.apis,this._data=0,this.reset()},{createArr:function(a,b){return g.fill(Array(b),a).join("")},numberFormatter:function(a,b){g.isNumber(a)&&0!==a||(a=0),a=b.rounding?Math.round(a):a;var c,d=b.decimalSymbol.split("");1<d.length&&(d=d.splice(0,1),b.decimalSymbol=d.join("")),isNaN(b.decimalSymbol)||(b.decimalSymbol=".");var e=b.separatingSymbol.split("");1<e.length&&(e=e.splice(0,1),b.separatingSymbol=e.join("")),isNaN(b.separatingSymbol)||(b.separatingSymbol=",");var f=(b.rounding?a:a.toFixed(b.decimal)).toString().replace(".",b.decimalSymbol),i=new RegExp("\\"+b.decimalSymbol,"g"),j=f.match(i)?f.match(i).length:0;c=g.isNumber(b.digit)&&0!==b.digit?[b.createArr(0,b.digit+j).concat(f).substr(-(b.digit+j),b.digit+j)]:[f],!b.rounding&&0!==b.digit&&b.decimal>=b.digit&&(b.decimal=b.digit),b["separating-chart"]&&(c=[b.dealSChart(c[0],b)]),b.separate||(b["num-background-color"]="transparent");var k=this.createSpan||h,l=k(b.prefix,"prefix");return c.forEach(function(a){for(var c,d=0;a.length>d;)if(c=a.substr(d++,1),c!=b.separatingSymbol||"-"!=a[d-2]){var e=c==b.separatingSymbol?"number separate-char":"number real-number",f=c!=b.separatingSymbol&&b["fixed-width"]?";width:"+b["fixed-width"]+"px":"",h=b.backgroundImage?";-webkit-background-clip: text; -webkit-text-fill-color: transparent;background-image:"+b.backgroundImage:"";l+=!b["separating-background"]&&isNaN(g.toNumber(c))?"<span class=\""+e+"\" style=\"display:"+b.display+";letter-spacing:"+b["letter-spacing"]+";text-indent:"+b["text-indent"]+";height:"+b.height+";line-height:"+b["line-height"]+";font-size:"+b["font-size"]+"px;font-weight:"+b["font-weight"]+";letter-spacing:"+b["letter-spacing"]+";margin-right:"+b["margin-right"]+";border-radius:"+b["border-radius"]+"px"+h+f+";\">"+c+"</span>":"<span class=\""+e+"\" style=\"background-color:"+b["num-background-color"]+";display:"+b.display+";letter-spacing:"+b["letter-spacing"]+";text-indent:"+b["text-indent"]+";height:"+b.height+";line-height:"+b["line-height"]+";font-size:"+b["font-size"]+"px;font-weight:"+b["font-weight"]+";letter-spacing:"+b["letter-spacing"]+";margin-right:"+b["margin-right"]+";border-radius:"+b["border-radius"]+"px"+h+f+";\">"+c+"</span>"}}),l+=k(b.suffix,"suffix"),l},update:function(a){var b=this,c=this.config;this.container.counter(Object.assign(c,{autoStart:!0,duration:c.duration,countFrom:this._data,countTo:a,placeholder:0,easing:"easeOutCubic",prefix:c.prefix||"",suffix:c.suffix||"",separate:c.separate||!1,numberFormatter:this.numberFormatter,createArr:this.createArr,dealSChart:this.dealSChart,onComplete:function(){b.container.css(e.extend(!0,{color:c.color},c["inner-style"]))},onSetNumberComplete:function(){b.container.find(".prefix").css({"font-family":"\""+c.prefix["font-family"]+"\""}),b.container.find(".suffix").css({"font-family":"\""+c.suffix["font-family"]+"\""})}})),setTimeout(function(){b._data=a},c.duration)},dealSChart:function(a,b){var c=a.split(b.decimalSymbol),d=c[0],e=c[1],f=[];return d=g.chunk(d.split("").reverse(),3),g.each(d,function(a,c){f.unshift(a.reverse().join("")),c!==d.length-1&&f.unshift(b.separatingSymbol)}),e&&f.push(b.decimalSymbol)&&f.push(e),f.join("")},render:function(a,b){var c=e.extend(!0,this.config,b);if(a=g.toNumber(a),!g.isNumber(a))try{a=parseInt(a),g.isNaN(a)&&(a=0)}catch(a){console.log("data error")}c.animation?0===a?this.reset():this.update(a||this._data):this.container[0].innerHTML=this.numberFormatter(a,c),this.container.css("background-color",c["background-color"])},reset:function(){this._data=0;var a=this,b=this.config;this.container.counter(Object.assign(b,{countTo:0,duration:0,prefix:b.prefix||"",suffix:b.suffix||"",separate:b.separate||!1,createArr:this.createArr,dealSChart:this.dealSChart,numberFormatter:this.numberFormatter,onComplete:function(){a.container.css(e.extend(!0,{color:b.color},b["inner-style"]))},onSetNumberComplete:function(){a.container.find(".prefix").css({"font-family":"\""+b.prefix["font-family"]+"\""}),a.container.find(".suffix").css({"font-family":"\""+b.suffix["font-family"]+"\""})}}))}}),a.exports});