function initFeatureBox(element,autoNextDelay) {
	if (autoNextDelay == undefined) {
		autoNextDelay = 10000;
	}
	return new FeatureBox(element,autoNextDelay);
}

function FeatureBox(element,d) {
	var self = this;
	var items = new Array();
	var p = element;
	var cur, cur_item, bAnim, nextTitle, autoNextTimeout=0;
	var browser = getBrowser();
	var anim = {};
	var autoNextDelay=d;
	
	var anim_step = function(state,n,d) {
		var diff = anim.to - anim.from;
		var r = anim.to;
		if (state >= 1) {
			r = anim.from + diff;
		} else {
			if (anim.easing == "swing") {
				r = ((-Math.cos(state*Math.PI)/2) + 0.5);
				r = r * diff + anim.from;
			} else if (anim.easing == "easeOutExpo") {
				if (n==d) {
					r = 1;
				} else {
					r = 1 * (-Math.pow(2, -10 * n/d) + 1);
				}
				r = anim.from + diff * r;
			} else {
				r = anim.from + diff * state;
			}
		}
		
		setStyleValue(anim.obj.target,"opacity",r);
		if (anim.obj.img) {
			setStyleValue(anim.obj.img,"opacity",r);
		}
		
	};
	
	var anim_step2 = function(state,n,d) {
		var xdiff = anim.to_left - anim.from_left;
		var x = anim.to_left;
		
		if (state >= 1) {
			x = anim.from_left + xdiff;
		} else {
			if (anim.easing == "swing") {
				r = ((-Math.cos(state*Math.PI)/2) + 0.5);
				x = r * xdiff + anim.from_left;
			} else if (anim.easing == "easeOutExpo") {
				if (n==d) {
					r = 1;
				} else {
					r = 1 * (-Math.pow(2, -10 * n/d) + 1);
				}
				x = anim.from_left + xdiff * r;
			} else {
				x = anim.from_left + xdiff * state;
			}
		}
		
		setStyleValue(anim.obj.img,"left",x+"px");
	};
	
	var anim_complete = function(state) {
		anim.state++;
		if (anim.state > 1) {
			bAnim = false;
		} else {
			setStyleValue(anim.obj.target,"display","none");
			if (browser == "msie" && anim.obj.img) {
				setStyleValue(anim.obj.img,"display","none");
			}
			anim.from=0;
			anim.to=1;
			anim.obj=anim.toShow;
			anim.from_left = 200;
			anim.to_left = 0;
			
			setStyleValue(anim.obj.target,"display","block");
			setStyleValue(anim.obj.target,"opacity",0);
			if (anim.obj.img) {
				setStyleValue(anim.obj.img,"display","block");
				setStyleValue(anim.obj.img,"opacity",0);
			}
			
			if (anim.obj.img) {
				setStyleValue(anim.obj.img,"left",anim.from_left);
			}
			
			new Animation(anim.duration, anim_step, anim_complete);
			new Animation(300, anim_step2);
		}
	};
	
	
	var show = function(item) {
		
		var toHide = cur;
		var toShow = item;
		
		if (toHide.target && toShow.target) {
			anim.toHide = toHide;
			anim.toShow = toShow;
			
			anim.obj = toHide;
			anim.state = 0;
			anim.from = 1;
			anim.to = 0;
			anim.duration = 600;
			anim.easing = "swing";
			
			bAnim = true;
			new Animation(anim.duration, anim_step, anim_complete);
		}
	};
	
	var getNextItem = function() {
		var item;
		for (var i=0,n=items.length;i<n;i++) {
			if (cur.id == items[i].id) {
				i++;
				if (i >= n) {
					i=0;
				}
				item = items[i];
				break;
			}
		}
		return item;
	};
	
	var showNextTitle = function() {
		var item = getNextItem();
		
		nextTitle.innerHTML = item.link.title;
	};
	
	var item_onClick = function() {
		var item;
		if (bAnim) return false;
		if (cur.link.id == this.id) return false;
		
		for (var i=0,n=items.length;i<n;i++) {
			if (this.id == items[i].id) {
				item = items[i];
				break;
			}
		}
		if (item) {
			cancelAutoNext();
			show(item);
			removeClass(cur.link,"active");
			cur = item;
			addClass(cur.link,"active");
			showNextTitle();
			initAutoNext();
		}
		
		return false;
	};
	
	var cancelAutoNext = function() {
		if (autoNextTimeout != 0) {
			window.clearTimeout(autoNextTimeout);
		}
		autoNextTimeout = 0;
	};
	var initAutoNext = function() {
		cancelAutoNext();
		autoNextTimeout = window.setTimeout(function() {
			var item = getNextItem();
			item_onClick.apply(item.link);
		},autoNextDelay);
	};
	
	var init = function() {
		var nav_holder = (searchChilds(p,"feature_nav"))[0];
		//var nav_label = (searchChilds(nav_holder,"next_label"))[0];
		nextTitle = (searchChilds(nav_holder,"next_title"))[0];
		
		var nav = (searchChilds(nav_holder,"nav"))[0];
		a = searchChildsByTagName(nav,"A");
		
		for (var i=0,n=a.length,j=0 ; i < n ; i++) {
			var link = a[i];
			var obj = document.getElementById((link.href.split("#",2))[1]);
			
			if (obj) {
				items[j] = {};
				items[j].link = link;
				items[j].target = obj;
				
				if (!link.id) {
					link.id = "featureBox_link_" + j;
				}
				items[j].id = link.id;
				
				items[j].img = (searchChilds(obj, "item_image"))[0] || null;
				
				j++;
			}

		}
		
		for(var i=0,n=items.length;i<n;i++) {
			var display,opacity;
			if (i==0) {
				cur = items[i];
				addClass(items[i].link,"active");
				display="block";
				opacity=0.99;
			} else {
				display="none";
				opacity=0;
			}
			
			setStyleValue(items[i].target,"display",display);
			setStyleValue(items[i].target,"opacity",opacity);
			if (items[i].img) {
				setStyleValue(items[i].img,"display",display);
				setStyleValue(items[i].img,"opacity",opacity);
			}
			
			var item = items[i];
			items[i].link.onclick = item_onClick;
		}
		
	}
	
	init();
	showNextTitle();
	initAutoNext();
}