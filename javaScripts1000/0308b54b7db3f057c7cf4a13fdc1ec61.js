Cube("datav:/com/slider/1.3.15/template.html",[],function(a){return a.exports=function(){return"<div class=\"slide-box\" style=\"position: relative; overflow: hidden; height: 100%;\">\n  <ul class=\"images-wrap\" style=\"position: absolute; width: <%= animate.direction=='horrible' ? width * images.length * 2 : width %>px; height: <%= animate.direction=='horrible' ? height : height * images.length *2 %>px; padding: 0; margin: 0;\">\n    <% _.forEach(images, function(image, i) { %>\n    <li style=\"width: <%= width %>px; height: <%= height %>px; list-style: none; opacity: <%= (animate.direction === 'horrible' || animate.direction === 'vertical') ? 1 : (i === 0 && animate.direction === 'mosaic' ? 1 : 0) %>; position: <%= (animate.direction=='horrible' || animate.direction=='vertical') ? 'relative' : 'absolute' %>; float: left; text-align: center; overflow: hidden;\">\n      <img class=\"<%- !image.url ? 'no-image' : '' %>\" src=\"<%- !!image.url ? image.url : slideImage.defaultImage %>\" alt=\"<%- image.description %>\" style=\"max-width: <%- width %>px;\" />\n      <p class=\"description\" style=\"text-align: left; position: absolute; left: 0; top: 0; width: 80%; padding: 5px 10px; margin: 0; line-height: 1.2;\"><span style=\"display: table-cell; vertical-align: middle\"><%= image.description %></span></p>\n    </li>\n    <% }); %>\n  </ul>\n  <% if(dot.show === true) { %>\n  <ol class=\"dots-wrap clearfix\" style=\"z-index: 2;position: absolute; left: 50%; -webkit-transform: translate(-50%, 0); -moz-transform: translate(-50%, 0); -ms-transform: translate(-50%, 0); -o-transform: translate(-50%, 0); transform: translate(-50%, 0); padding: 0; margin: 0; bottom: 10px\">\n    <% _.forEach(images, function(image, index) { %>\n    <li style=\"list-style: none; float: left; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px\"></li>\n    <% }); %>\n  </ol>\n  <%} %>\n  <div class=\"pieces\" style=\"position: absolute;width: 100%;height: 100%;\"><canvas style=\"width: 100%; height: 100%;\"></canvas></div>\n</div>\n"},a.exports});;
Cube("datav:/com/slider/1.3.15",["datav:/npm/bcore/0.0.18/event","datav:/npm/jquery/2.1.4","datav:/npm/lodash/4.6.1"],function(a,b,c){var d=c("datav:/npm/bcore/0.0.18/event"),e=c("datav:/npm/jquery/2.1.4"),f=c("datav:/npm/lodash/4.6.1"),g=f.template(c("datav:/com/slider/1.3.15/template.html")());return a.exports=d.extend(function(a,b){this.config={},this.container=e(a),this.apis=b.apis,this._data=null,this.currentIndex=0,this.count=0,this.canvasAnimate=null,this.init(b),this.isInit=!0},{init:function(a){var b=this;this.mergeConfig(a),this.updateStyle(),this.animateTime=new Date,this.container.css({cursor:"pointer"}),this.container.off().on("mouseenter",function(){b.clearAnimates()}).on("mouseleave",function(){b.isInit=!0,b.config.animate.isLoop&&b.initInterval()}).on("click",function(){b.eventEmit()})},eventEmit:function(){this._data.length&&this.emit("click-image",this._data[this.currentIndex])},render:function(a,b){function c(){d.count++,d.count>=m.length&&("opacity"===j.animate.direction&&h.find(".images-wrap li").eq(0).css("opacity",1),d.updateStyle(),d.config.animate.isLoop&&d.initInterval())}a=this.data(a);var d=this,h=this.container,i=this.mergeConfig(b),j=f.assign(i,{images:a}),k=g(j),l=e(k).children(".images-wrap").find("li");this.clearAnimates(),h.html(k),("horrible"===j.animate.direction||"vertical"===j.animate.direction)&&h.find(".images-wrap").append(l[0]).css({left:0,top:0}),e(this.container.find(".images-wrap").find("li")[0]).addClass("current-image");var m=d.config.images;this.count=0,l.each(function(a,b){var d=e(b).find("img")[0];d.complete?c():d.onload=c}),this.isInit=!0,this.currentIndex=0,this.updateDot()},startLoop:function(a){if(a&&void 0!==this._data[a.index]&&a.index!==this.currentIndex){var b=0>a.index-1?0:a.index-1;this.setCurrentIndex(b)}this.clearAnimates(),this.runTimer()},stopLoop:function(){this.clearAnimates()},prev:function(){this.clearAnimates();var a=this.container.find(".images-wrap li").length;this.currentIndex=1>this.currentIndex?"horrible"===this.config.animate.direction||"vertical"===this.config.animate.direction?a-2:a-1:this.currentIndex-1,this.updateDot(),this.startAnimate()},next:function(){this.clearAnimates(),this.currentIndex++,this.updateDot(),this.startAnimate()},runTimer:function(){var a=this,b=a.config,c=b.animate.speed,d=b.animate.interval||16;a.currentIndex++,!a.interval||clearTimeout(a.interval),a.startAnimate(),a.updateDot(),a.interval=setTimeout(this.runTimer.bind(this),c+d||16)},initInterval:function(){var a=this;clearTimeout(this.firstTimeOut),clearTimeout(this.interval),this.isInit?this.firstTimeOut=setTimeout(function(){a.runTimer(),a.isInit=!1},this.config.animate.interval):this.runTimer()},setCurrentIndex:function(a){this.currentIndex=a},startAnimate:function(){var a=this,b=a.container,c=b.find(".images-wrap"),d=a.config.animate,e=d.direction,f=a.currentIndex,g=c.find("li"),h=g.length;return!(1>=h)&&void("opacity"===e?this.moveByOpacity(f,{imagesWrap:c,images:g}):"mosaic"===e?this.renderMosaic(g):("vertical"===e||"horrible"===e)&&this.moveByDirection(f))},moveByDirection:function(a){var b,c=this,d=c.container,f=d.find(".images-wrap"),g=f.find("li"),h=c.config,i=h.width,j=h.height,k=h.animate,l=g.length;b="horrible"==k.direction?{left:-c.currentIndex*i+"px"}:{top:-c.currentIndex*j+"px"},f.animate(b,k.speed,"linear",function(){a>l-2&&(c.setCurrentIndex(0),"horrible"==k.direction?f.css("left",0):f.css("top",0)),e(g[c.currentIndex]).addClass("current-image").siblings().removeClass("current-image")})},moveByOpacity:function(a,b){var c=this;a>=b.images.length&&c.setCurrentIndex(0);var d=b.images.eq(this.currentIndex),e=this.container.find(".current-image"),f=c.config.animate;e.css({"z-index":2}),e.animate({opacity:0},f.speed),d.css({"z-index":1,opacity:1}).addClass("current-image").siblings().removeClass("current-image")},renderMosaic:function(a){function b(a){if(a-K>=J){K=a;for(var d=I;0<d;d--){var f=Math.floor(Math.random()*A.length),g=A.splice(f,1)[0],h=g%o*s,i=parseInt(g/o)*t;if(x.drawImage(e.tempCanvas,h,i,s+2,t+2,h,i,s+2,t+2),!A.length)return z.siblings().css({zIndex:-1,opacity:0}),void y.css({zIndex:2,opacity:1}).addClass("current-image").siblings().removeClass("current-image")}}e.canvasAnimate=c(b,w)}var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame,d=window.cancelAnimationFrame||window.webkitCancelAnimationFrame,e=this,f=e.currentIndex,g=e.config,h=g.width,j=g.height,k=g.slideImage,l=g.images,m=g.animate;f>=l.length&&(f=0,this.setCurrentIndex(f));var n=e.container.find(".pieces"),o=m.cols>=h?h:m.cols,p=m.rows>=j?j:m.rows,q=m.speed,r=o*p,s=Math.ceil(h/o),t=Math.ceil(j/p),u=l[f].url?l[f].url:k.defaultImage,v=k.fillType,w=n.find("canvas")[0],x=w.getContext("2d"),y=a.eq(f),z=e.container.find(".current-image");a.css({zIndex:-1,opacity:0}),z.css({zIndex:0,opacity:1}),w.width=h,w.height=j,x.clearRect(0,0,h,j);for(var A=[],B=0;B<r;B++)A.push(B);var i=y.find("img")[0];this.tempCanvas||(this.tempCanvas=document.createElement("canvas")),this.tempCanvas.width=h,this.tempCanvas.height=j;var C=this.tempCanvas.getContext("2d");C.clearRect(0,0,h,j);var D=i.naturalWidth,E=i.naturalHeight;switch(v){case"cover":C.drawImage(i,0,0,D,E,0,0,h,j);break;case"contain":var F=h*E/D;C.drawImage(i,0,0,D,E,0,(j-F)/2,h,F);break;case"center":var F=E>j?j:E,G=F*D/E;C.drawImage(i,0,0,D,E,(h-G)/2,(j-F)/2,G,F);break;default:C.drawImage(i,0,0,D,E,0,0,D,E);}var H=Math.min(r,10),I=Math.floor(r/H),J=q/H,K=0;this.canvasAnimate=c(b,w)},getImageAlignStyle:function(a){switch(a){case"cover":var b={width:"100%",height:"100%"};break;case"contain":b={maxHeight:"none",width:this.config.width+"px",height:"auto",position:"relative",top:"50%",transform:"translateY(-50%)"};break;case"center":b={maxHeight:this.config.height+"px",width:"auto",height:"auto",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"};break;default:b={width:"auto",height:"auto"};}return{maxHeight:b.maxHeight?b.maxHeight:"",width:b.width,height:b.height,position:b.position?b.position:"",left:b.left?b.left:"",top:b.top?b.top:"",transform:b.transform?b.transform:""}},updateSlideImage:function(a){var b,c=this.container,d=c.find(".images-wrap"),e=d.find("img"),f=e.filter(".no-image");a?(a.defaultImage!==this.config.slideImage.defaultImage&&f.each(function(b,c){c.src=a.defaultImage}),this.config.slideImage=a):a=this.config.slideImage,b=this.getImageAlignStyle(a.fillType),e.css(b)},updateDot:function(a){a?this.config.dot=a:a=this.config.dot;var b=this.container,c=b.find(".dots-wrap"),d=c.find("li"),e=d.length,f=this.currentIndex,g=f>=d.length?f-e:f;a.show?d.show():d.hide(),d.eq(g).css("background",a.current),d.not(d.eq(g)).css("background",a.color)},updateDescription:function(a){a?this.config.description=a:a=this.config.description;var b=a.background,c=this.container,d=c.find(".description");if(!a.show)return void d.hide();var e="linear-gradient("+b.degree+"deg, "+b.startColor+", "+b.endColor+")";"single"==b.style&&(e=b.single),d.css({display:"table",left:a.left,top:a.top,width:a.width+"%",height:a.height+"%",background:e,"text-align":a.align,color:a.color,"font-weight":a.fontWeight})},resize:function(a,b){this.render(null,{width:a,height:b})},data:function(a){return a&&(this._data=a),this._data},mergeConfig:function(a){var b=this.container;return a?(this.config=f.defaultsDeep(a||{},this.config),Object.assign(this.config,{width:b.width(),height:b.height()}),this.config):this.config},updateStyle:function(){this.currentIndex||this.setCurrentIndex(0),this.updateDot(),this.updateDescription(),this.updateSlideImage();var a=this.config;this.container.css({"font-size":a.component.fontSize+"px",fontFamily:"\""+a.component.fontFamily+"\"",color:a.color||"#fff"})},clearAnimates:function(){this.interval&&clearTimeout(this.interval),this.firstTimeOut&&clearTimeout(this.firstTimeOut),this.canvasAnimate&&cancelAnimationFrame(this.canvasAnimate);var a=this.container,b=a.find(".images-wrap");if(b.length){b.finish();var c=b.find("li");if(c.length&&c.finish(),"mosaic"===this.config.animate.direction){var d=a.find(".current-image");a.find(".images-wrap li").css({zIndex:-1,opacity:0}),d.css({zIndex:0,opacity:1})}}},destroy:function(){this.interval&&clearTimeout(this.interval),this.firstTimeOut&&clearTimeout(this.firstTimeOut),this.interval=null,this.animateTime=null,this.currentIndex=null,this.count=null,this.firstTimeOut=null,this._data=null,this.container.off(),this.container&&this.container.empty()}}),a.exports});