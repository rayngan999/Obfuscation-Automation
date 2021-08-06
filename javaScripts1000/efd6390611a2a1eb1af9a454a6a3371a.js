 
		window.setTimeout('isswtid()',300);
		function isswtid(){
			if(null == LR_cid || 'undefined' == typeof LR_cid || '' == LR_cid){
				isswtid();
			}else{
				var headb= document.getElementsByTagName('head')[0];
				var scriptb= document.createElement('script');
				scriptb.type= 'text/javascript';
				scriptb.onload = scriptb.onreadystatechange = function() {
					if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete' ) {
						scriptb.onload = scriptb.onreadystatechange = null;
					}
				}
				scriptb.src = 'http://s.kawaedu.com/Visit/swtcnt?sr_id=CC96CE4356210D436990D60ED05814AB&swtid='+LR_cid;
				headb.appendChild(scriptb);
			}
		}