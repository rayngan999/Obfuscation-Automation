
function UIFor(el) {
	var cache = {};
	UIFor = function(el) {
		if(!el) el = $('body').get()[0];
		var id = $.data(el);
		if(cache[id]) return cache[id];
		return (cache[id] = (new UI()).create(el)
				.init().draw());
	};
	return UIFor(el);
}

function UI() {
	this.create = function(domElement) {
    	var children = [], deathHandler;

		this.create = function() {};

        this.draw = function() {
			this.drawn = true;
            return this;
        };
		/* init() is designed to be called only once. Child class implementations of init
		 * will be called once and then re-assigned such that subsequent calls to init
		 * will do nothing. */
        this.init = function() {
			this.init = function() { return this; };
            return this;
        };
        this.de = function() {
        	return domElement;
        };
        this.dispose = function() {};
        this.ce = function() {
        	return this.de();
        };
        this.addChild = function(childObject) {
        	var env = this;
        	if(childObject instanceof Array) {
        		return childObject.each(function(o) {
        			env.addChild(o);
        		});
        	}
            childObject.parent = (function(env) {
            	return function() {
            		return env;
            	};
            })(this);
            childObject.root = function() {
            	var out = this.parent();
            	while(true) {
            		if(!out['parent']) return out;
            		out = out.parent();
            	}
            };
            children[children.length] = childObject;

            this.ce().appendChild(childObject.de());
            return childObject;
        };
        function unb(el) {
        	$(el).unbind();
        	for(var i=0; i < el.childNodes.length; i++) {
        		if(el.childNodes[i].nodeName == '#text')
        			continue;
        		unb(el.childNodes[i]);
        	}
        	return el;
        }

        this.removeChild = function(childObject) {
			childObject = vof(childObject, this);
        	for(var i=0; i < children.length; i++) {
        		if(children[i] == childObject) {
        			this.ce().removeChild(unb(children[i].preDeath().de()));
        			children[i].dispose();
        			children.splice(i, 1);
        		}
        	}
        };
        this.preDeath = function(fn) {
        	if(typeof(fn) === 'undefined') {
        		if(deathHandler) deathHandler();
        		return this;
        	}
        	deathHandler = fn;
        	return this;
        };
        this.indexOf = function(childObject) {
        	if(childObject == this) return -1;
        	for(var i=0; i < children.length; i++)
        		if(children[i] == childObject) return i;
        	return -1;
        };
        this.removeChildren = function(fn) {
        	var more = function() {};
        	while(true) {
	        	try {
	        		var env = this;
	        		this.eachChild(function(ch) {
	        			if(fn && fn(ch) === false) return;
	        			env.removeChild(ch);
	        			throw new more();
	        		});
	        		break;
	        	} catch(e) {
	        		if(!(e instanceof more)) throw e;
	        	}
        	}
        };
        this.eachChild = function(fn) {
        	for(var i=0; i < children.length; i++)
        		if(fn(children[i], i) === false) break;
        };
		this.children = function(a) {
			if(!isdefined(a))
				return children;
			children = a;
			return this;
		};
        this.numChildren = function() {
        	return children.length;
        };
        this.firstChild = function(fn) {
        	if(children.length == 0) return null;
        	if(fn) fn.call(children[0]);
        	return children[0];
        };
        this.childAt = function(index) {
        	return children[index];
        };
        this.redraw = function() { 
			if(!this.drawn) return;
			this.draw();
            for(var i=0; i < children.length; i++)
            	children[i].redraw();
            return this;
        };
        this.op = function(fn) {
        	if(fn) fn.call(this);
        	return this;
        };
        return this;
	};
}

var Canv = (function(Canv) {
	Canv.prototype = new UI();
	return Canv;
})(function() {
	this.create = (function(create) {
		return function(initFn, drawFn) {
			create.apply(this, [document.createElement('div')]);
			this.init = (function(init) {
				return function() {
					this.de().style.position = 'absolute';
					if(initFn) initFn.call(this);
					return init.call(this);
				};
			})(this.init);
			this.draw = (function(sup) {
				return function() {
					if(drawFn) drawFn.call(this);
					return sup.call(this);
				};
			})(this.draw);
			return this;
	   };
	})(this.create);
});

var Canvas = function(initFn, drawFn) {
	return new Canv().create(initFn, drawFn);
};

var Layer = (function() { 
	var bseDepth = 800, depth = bseDepth, layer = 0, stack = [];
	return function(initFn, drawFn) {
		var resize;
		
		function firstModal() {
			var firstVisible;
			for(var i = 0; i < stack.length; i++) {
				if((!firstVisible) && stack[stack.length-1-i].overlay()) {
					$(stack[stack.length-1-i].overlay()).css('visibility', 'visible');
					firstVisible = true;
					continue;
				}
				if(stack[stack.length-i-1].overlay())
					$(stack[stack.length-i-1].overlay()).css('visibility', 'hidden');
			}
			return null;
		}

		return Canvas(function() {
			var env = this;
			layer++;
			$(this.de()).css('z-index', depth+(2*layer));
			if(this.modal()) {
				$('body').get()[0].appendChild((function(de, o) { 
					o.overlay(de);
					$(de)
					.addClass('bsp_overlay')
					.css('z-index', (depth+(2*layer))-1)
					.css('position', 'absolute')
					.css('left', 0).css('top', 0);
					return de;
				})(document.createElement('div'), this));
			}
			firstModal();
			
			resize = function() {
				env.draw();
			};
			$(window).resize(resize)
			.scroll(resize);
			
			if(initFn) initFn.call(this);
		}, function() {
			if(this.overlay()) {
				$(this.overlay()).width($(window).width())
				.height($(window).height())
				.css('left', $(window).scrollLeft())
				.css('top', $(window).scrollTop());
			}

			if(drawFn) drawFn.call(this);
		}).op(function() {
			this.modal = accessor(this, true);
			this.overlay = accessor(this);
			this.dispose = function() {
				layer--;
				if(this.modal()) $('body').get()[0].removeChild(this.overlay());
				stack.splice(index.call(this), 1);
				$(window).unbind('resize', resize).unbind('scroll', resize);
				function index() {
					for(var i=0; i < stack.length; i++) {
						if(stack[i] == this) return i;
					}
				}
				firstModal();
			};
			this.isTopDialog = function() {
				return stack[stack.length-1] == this;	
			};
			stack[stack.length] = this;
			index = stack.length-1;
		});
	};
})();


var Dialog = function(initFn, drawFn) {
	var titleBar, contentCntr, title, width, height, bse, closable = true, dc, 
		firstDraw = true, ctOverflow = 'auto';
		
	return Layer(
		function() {
			var env = this, i = 0;
			$(contentCntr).css('overflow', ctOverflow);
			$(this.de()).addClass('dialog');
			if(dc) for(i=0; i < dc.length; i++) {
				$(this.de()).addClass(dc[i]);
			}
			$(titleBar).html(title||(closable ? '&nbsp;' : ''));
			if(!title) { 
				$(titleBar).addClass('empty');
			}
			if(closable)
				titleBar.appendChild((function(a) {
					$(a).attr('href', '#')
					.addClass('xlink')
					.html((lang.close || "close")+' x')
					.click(function(e) {
						env.parent().removeChild(env);
						e.preventDefault();
					});
					return a;
				})(document.createElement('a')));
				
			if(isdef(width)) {
				$(this.de()).width(width);
				$(contentCntr).width(this.de().offsetWidth);
			}
			if(isdef(height)) {
				$(this.de()).height(height);
				$(contentCntr).height(this.de().offsetHeight - titleBar.offsetHeight);
			}
			
			$(this.de()).css('top',0).css('left',0);

			if(initFn) initFn.call(this);
		},
		function() {
			/* prevents parts of the dialog from being unaccessible esp. w/ low screen resolutions */
			if((!firstDraw) && ((this.de().offsetHeight > $(window).height()) 
					|| (this.de().offsetWidth > $(window).width()))) {
				return;
			}
			if(!firstDraw) return;
			firstDraw = false;
			if(drawFn) { 
				drawFn.call(this);
			} else { 
				if(width) $(this.de()).width(width);
				if(height) $(this.de()).height(height);
				$(this.de())
				.css('left', $(window).scrollLeft() + (($(window).width()/2) - (this.de().offsetWidth/2)))
				.css('top', $(window).scrollTop() + (($(window).height()/2) - (this.de().offsetHeight/2)));
			}
		}
	).op(function() {

		var lyr = this, ct;

		this.de().appendChild((bse = document.createElement('div')));
		$(bse).css('position', 'absolute');
		
		titleBar = document.createElement('div');
		$(titleBar).addClass('title')
			.css('position', 'relative')
			.css('z-index', 2);
		lyr.de().appendChild(titleBar);
		
		contentCntr = document.createElement('div');
		$(contentCntr).css('position', 'relative')
			.css('z-index', 1).css('overflow', 'auto')
			.addClass('content_wrapper');
		lyr.de().appendChild(contentCntr);
		contentCntr.appendChild((function(de, s) {
			s.ce = function() { return de; }
			$(de).addClass('content');
			return de;
		})(document.createElement('div'), this));

		this.dispose = (function(o, sup) {
			var isd = false;
			o.isDisposed = function() {
				return isd;
			}
			return function() {
				sup.call(this);
				isd = true;
				if(this.onDispose())
					this.onDispose()();
			};
		})(this, this.dispose);

		this.onDispose = accessor(this);
		this.redraw = function() {
			firstDraw = true;
			this.draw();
		}

		this.closable = function(x) {
			closable = x;
			return this;
		};
		
		this.draggable = function(x) {
			$(titleBar).css('cursor','move');
			$(this.de()).draggable();
		};
		
		this.title = function(x) {
			title = x;
			return this;
		};
		
		this.width = function(w) {
			width = w;
			return this;
		};
		
		this.height = function(h) {
			height = h;
			return this;
		};
		
		/* controls the overflow property of the content 
		 * container */
		this.contentOverflow = function(o) {
			ctOverflow = o;
			return this;
		};
		
		/* adds the given class to the main .dialog element */
		this.addClass = function(c) {
			if(!dc) dc = [];
			dc[dc.length] = c;
			return this;
		};
	});
};


var _dgx_cache = {};

function showDialog(params) {
	var i, classes, dgx = Dialog(
		function() {
			if (isdef(params.htmlID)) {
				if (!isdef(_dgx_cache[params.htmlID])) {
					_dgx_cache[params.htmlID] = $('#'+params.htmlID);
					_dgx_cache[params.htmlID].parent()[0].removeChild(_dgx_cache[params.htmlID][0]);
				}
				$(this.ce())[0].appendChild(_dgx_cache[params.htmlID][0]);
				_dgx_cache[params.htmlID].show();
			}
			else {
				$(this.ce()).html(params.html);
			}
			if(typeof params.init == 'function') {
				params.init.call(this);
			}
		},
		function() {
			if (params.centered) { 
				$(this.de())
				.css('left', $(window).scrollLeft() + (($(window).width()/2) - (this.de().offsetWidth/2)))
				.css('top', $(window).scrollTop() + (($(window).height()/2) - (this.de().offsetHeight/2)));
			}
			else {
				var top = isdef(params.top) ? params.top : 72;
				var left = isdef(params.left) ? params.left : ($(window).width()/2) - (this.de().offsetWidth/2);
				$(this.de())
				.css('left', $(window).scrollLeft() + left)
				.css('top', $(window).scrollTop() + top);
			}
		}
	);
	
	if(params.onDispose) {
		dgx.onDispose(params.onDispose);
	}
	
	/* classes can be a string or an array of class names to be applied 
	 * to the dialog. */
	if(isdef(params.classes)) {
		if(typeof(params.classes) == 'string')
			classes = [params.classes];
		for(i=0; i < classes.length; i++) {
			dgx.addClass(classes[i]);
		}
	}
	
	if(isdef(params.width)) {
		dgx.width(params.width);
	}
	
	if(isdef(params.height)) {
		dgx.height(params.height);
	}
	
	if (isdef(params.modal)) {
		dgx.modal(params.modal);
	}
	else {
		dgx.modal(true);
	}
	
	if(isdef(params.closable)) {
		dgx.closable(params.closable);
	}
	
	if (isdef(params.title)) {
		dgx.title(params.title);
	}
	
	if (isdef(params.draggable)) {
		dgx.draggable(params.draggable);
	}
	
	if(isdef(params.contentOverflow)) {
		dgx.contentOverflow(params.contentOverflow);
	}
	
	return UIFor().addChild(dgx).init().draw();
}

function hideDialog(dgx) {
	if (dgx !== null) {
		dgx.parent().removeChild(dgx);
	}
}