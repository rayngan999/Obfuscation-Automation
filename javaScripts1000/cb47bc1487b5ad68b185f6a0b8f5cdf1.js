// slider kompas play
let dis = '-disabled';
let info = document.querySelector('[data-slider]');
let ul;

let total;
let maxSlide = 3;
let minPos = 0;
let maxPos = maxSlide;
let width_item = -100/maxSlide;
let current = 0;
let item;
if(!!info) {
	
	ul = info.querySelector('ul');
	if(!!ul) {
		item = ul.querySelectorAll('li');
		total = item.length;
		console.log(total);

		initSlider();
	}
}

function initSlider() {
	if(total>3) {
		let left = createArrow(info, minPos, 'left');
		let right = createArrow(info, minPos, 'right');
		left.addEventListener('click', function(e){
			e.preventDefault();
			slideIt(1); // 1 = left
		})
		right.addEventListener('click', function(e){
			e.preventDefault();
			slideIt(2); // 2 = right
		})
	}
}

function createArrow(node, cur, dir) {
	let a = document.createElement('a');
	a.className = 'info-banner-arrow -'+ dir +((cur==0 && dir=='left') ? ' '+dis : '' );
	a.href = '#';

	let span = document.createElement('span');
	span.className = 'icon-arrow icon-arrow-'+ dir;
	a.appendChild(span);

	return node.appendChild(a);
}

function slideIt(dir) {
	let lbtn = info.querySelector('.info-banner-arrow.-left');
	let rbtn = info.querySelector('.info-banner-arrow.-right');
	if(!!lbtn && !!rbtn) {
		lbtn.classList.remove(dis);
		rbtn.classList.remove(dis);
	}
	let translate = 0;
	let prev = 1;

	let diff_right = total - maxPos;
	let diff_left = maxPos - maxSlide;
	
	// left side
	if(dir===prev) {
	
		if(diff_left < maxSlide) {
			if(diff_left==2) {
				delta = -2
			} else {
				delta = -1			
			}
		} else {
			delta = -3
		}
		maxPos += delta;
	} else {
		
		if(diff_right < maxSlide) {
			if(diff_right==2) {
				delta = 2
			} else {
				delta = 1			
			}
		} else {
			delta = 3
		}
		maxPos += delta;
	}
	// console.log("max "+maxPos);
	
	minPos += delta;

	if(minPos<1) {
		lbtn.classList.add(dis);
	}
	if(minPos>=(total-maxSlide)) {
		rbtn.classList.add(dis);
	}
	translate = current + (width_item * delta);
	current = translate;

	ul.style.transition = "transform .4s ease-in-out";
	ul.style.transform = 'translateX(' + translate + '%)';
}