define("fx.Tabs",["jQuery","Log","ui.Widget"],function(t,e,n){var i=new e("fx.Tabs"),s=n({defaultOptions:{nav:".fx-tab-nav li",pane:".fx-tab-pane",effect:"default",active:"active",disabled:"disabled",prev:".fx-prev",next:".fx-next",pageSize:1,step:1,event:"mouseenter",interval:3e3},init:function(){var e=this.element,n=this.options;this.navs=t(n.nav,e),this.prev=t(n.prev,e),this.next=t(n.next,e),this.panes=t(n.pane,e),this.index=-1,this.panes.length&&(this._initEffect(),this.effect&&(this._handleSwitch(),this._handleAutoSwitch(),this.switchTo(n.index||0)))},_initEffect:function(){var t=this.options.effect;"string"==typeof t&&this.element.addClass("fx-tab-effect-"+t),t=this._get("Effect",t),t&&(t="function"==typeof t?{show:t}:t,t.setup&&t.setup(this),this.effect=t)},_handleSwitch:function(){var t=this,e=this.options,n=function(n,i){t.element.on(e.event,n,function(e){e.preventDefault();var n=i.apply(this,arguments);t.switchTo(n)})};n(e.nav,function(){return t.navs.index(this)}),n(e.prev,function(){return t._getPrev()}),n(e.next,function(){return t._getNext()})},_getPrev:function(){var t=this.index-this.options.step;return t=0>t?0:t,this.index>t&&this._validate(t)?t:-1},_getNext:function(){var t=this.index+this.options.step,e=this.panes.length-this.options.pageSize;return t=t>e?e:t,this.index<t&&this._validate(t)?t:-1},switchTo:function(t,e){var n=this,s=this.options,o={lastIndex:this.index,index:t,element:this.element,options:s,navs:this.navs,panes:this.panes};if(this._validate(t)){if(i.info("switch to "+t),this.triggerHandler("before",o)===!1)return void i.info("before return false, break");this.navs.eq(this.index).removeClass(s.active),this.navs.eq(t).addClass(s.active),this.index=t,this.effect.show(o,function(){n._afterSwitch(o),e&&e(),n.trigger("switch",o)})}},_afterSwitch:function(t){var e=this.options,n=this.panes;n.eq(t.lastIndex).removeClass(e.active),n.eq(t.index).addClass(e.active),this.prev.toggleClass(e.disabled,-1===this._getPrev()),this.next.toggleClass(e.disabled,-1===this._getNext())},_validate:function(t){return t=parseInt(t)||0,t>=0&&t<=this.panes.length-this.options.pageSize},_handleAutoSwitch:function(){var t=this.options;if(t.autoSwitch&&!(this.panes.length<=1)){i.info("handle autoswitch");var e=this,n=this._get("AutoSwitch",t.autoSwitch),s=parseInt(t.interval,10),o=!1;this.element.on("mouseenter",function(){o=!0}).on("mouseleave",function(){o=!1});var a=function(){if(o)return void setTimeout(a,s);var t=n(e.index,e.panes.length);e.switchTo(t,function(){setTimeout(a,s)})};setTimeout(a,s)}},_get:function(t,e){return this.getConfigObject(t,e)}});return s.Effect={"default":function(t,e){t.panes.hide(),t.panes.eq(t.index).show(),e()},updown:function(t,e){var n=t.panes.eq(t.index),i=n.parent();contentTop=i.offset().top,nowTop=n.offset().top,i.css("position","relative"),i.stop(!0).animate({top:contentTop-nowTop},t.options.duration,e)},leftright:{setup:function(e){var n=e.panes,i=n.eq(0).width()*(n.length+2),s=n.eq(0).parent();n.each(function(){var e=t(this);e.width(e.width())}),i&&s.addClass("fd-clr").width(i),n.css("float","left")},show:function(t,e){var n=t.panes.eq(t.index),i=n.parent(),s=i.offset().left,o=n.offset().left;i.css("position","relative"),i.stop(!0).animate({left:s-o},t.options.duration,e)}},fade:{setup:function(t){var e=t.panes,n=e.eq(0).parent();n.css("position","relative"),e.css({position:"absolute",left:0,top:0})},show:function(e,n){var i=-1===e.lastIndex?t():e.panes.eq(e.lastIndex),s=e.panes.eq(e.index),o=t.Deferred();e.lastIndex!==e.index&&(e.panes.not(i).css("opacity",0),s.css({"z-index":2}).stop(!0).animate({opacity:1},e.options.duration,function(){o.resolve()}),i.css("z-index",1).stop(!0).animate({opacity:0},e.options.duration,function(){i.css("z-index",""),o.resolve()}),o.done(n))}}},s.AutoSwitch={liner:function(t,e){return t++,t%e},random:function(t,e){for(var n=-1;t===(n=Math.floor(Math.random()*e)););return n}},s});