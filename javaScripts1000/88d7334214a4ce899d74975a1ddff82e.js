(function(jwplayer){

	jwplayer().registerPlugin('anotations', '6.0', function(player, config, div) {
	    
	    var anotations = [], container, anchor, controlbar, controlbarHeight, closeButton, pluginPath, enabled = true, mvRegex = new RegExp(/^((https?:\/\/)?(www.)?)myvideo.\w{2}/gim);

	    /**
	     * [between description]
	     *
	     * 
	     * @param  {[type]} min [description]
	     * @param  {[type]} max [description]
	     * @return {[type]}     [description]
	     */
	    Number.prototype.between = function (min, max) {
	    	return this >= min && this <= max;
		};

		this.update = function(data) {

			anotations.filter(function(anotation, key) {
	    		hideAnotation(key);
	    	});
			
			if(data == null) {
				return;
			}

			if(data.length) {
				config.anotations.data = data
				buildAnotations(config.anotations.data, div);
			}
		}

		/**
		 * [setup description]
		 *
		 * 
		 * @param  {[type]} evt [description]
		 * @return {[type]}     [description]
		 */
	    function setup(evt) {
	    	
	    	pluginPath = Object.keys(player.config.plugins).filter(function( key ) {
			  return key.indexOf("anotations.js") > -1;
			})[0];

	    	div.style.pointerEvents = 'none';
	    	div.style.minWidth 		= '100%';
	    	div.style.minHeight		= '88%';
	    	div.style.maxHeight		= '88%';
	    	div.style.overflow		= 'hidden';
	    	
	    	//Get controlbar
	    	controlbar = document.getElementById(player.id + '_controlbar');
	    	
	    	//Prepare anotation elements baes on config data passed
	    	buildAnotations(config.anotations.data, div);
	    	
	    	/**
		     * if successful setup whatch player time update
		     */
		    player.onTime(function(time) {
		    	findAnotation(Math.floor(time.position));
		    });
	    };

	    /**
	     * [findAnotation based on seconds specified in data]
	     *
	     * 
	     * @param  [Number] currentSecond [Current playing second]
	     * @return [Object] 		[Anotation]
	     */
	    function findAnotation(currentSecond) {

	    	anotations.filter(function(anotation, key) {
	    		if(!player.config.plugins[pluginPath].anotations.enabled) {
	    			hideAnotation(key);
	    		} else {
	    			
	    			if(player.config.plugins[pluginPath].anotations.statesHistory.previous === false && player.config.plugins[pluginPath].anotations.statesHistory.current === true) {
	    				anotation.closed = false;
	    			}

	    			if( currentSecond.between(anotation.start, anotation.end) ) {
	    				if( anotation.visible === false && anotation.closed === false) {
	    					showAnotation(key);
	    				}
	    			} else {
	    				if(anotation.visible === true) {
	    					hideAnotation(key);
	    				}
	    			}
	    		}
	    	})
	    }

	    /**
	     * [getControllbarSize description]
	     * @return {[type]} [description]
	     */
	    function getControllbarSize() {
	    	//controll bar height is always 36
	    	//so, there is no need to do some math..
	    	return 36;
	    }

	    function htmlEncode( html ) {
	    	  var div = document.createElement( 'div' ); div.innerHTML = html;  return div.textContent;
		};
	    /**
	     * [buildAnotation description]
	     *
	     * 
	     * @param  {[type]} data [description]
	     * @return {[type]}      [description]
	     */
	    function buildAnotations(data, wrap) {
	    	
	    	controlbar = document.getElementById(player.id + '_controlbar');
	    	
	    	data.forEach(function(value,key) {

	    		container = document.createElement('div');
	    		container.setAttribute('id', 'anotation-' + key);
    			
	    		if(value.url) {
	    			//Create a tag
	    			anchor = document.createElement('a');
	    			//set style attributes
	    			anchor.style.color 			= '#ffffff';
	    			anchor.style.textDecoration = 'none';
	    			anchor.style.fontFamily 	= 'Segoe UI, Helvetica, Ubuntu';
	    			anchor.fontSize 			= 14;
	    			//set href attribute
	    			anchor.setAttribute('href', value.url);
	    			//if anotation url is external link, force new window|tab
	    			if(!mvRegex.test(value.url)) {
	    				anchor.setAttribute('target', '_blank');	
	    			}
	    			
	    			//append text to a tag
	    			anchor.appendChild( document.createTextNode(value.content) );
	    			//Append a tag to container
	    			container.appendChild(anchor);
	    		} else {
	    			//Simple create text container with text inside
	    			container.appendChild( document.createTextNode(value.content) );
	    		}

	    		container.style.color 			= '#ffffff';
	    		container.style.fontSize 		= value.font_size + 'px';
	    		container.style.backgroundColor = '#'+value.bg;
	    		container.style.color 			= value.color;
	    		container.style.height 			= value.height + '%';
	    		container.style.width 			= value.width + '%';
	    		container.style.top 			= value.y+'%';
	    		container.style.left 			= value.x +'%';
	    		container.style.fontFamily		= 'Segoe UI, Helvetica, Ubuntu';
	    		container.style.position		= 'absolute';
	    		container.style.pointerEvents   = 'all';
	    		container.style.padding 		= '10px';

	    		//Create close button
	    		closeButton = document.createElement('span');
	    		closeButton.setAttribute('class', 'anotation-close');
	    		closeButton.setAttribute('id', 'anotation-close-'+key);
	    		closeButton.setAttribute('data-id', key);
	    		closeButton.style.backgroundColor = '#444444';
	    		closeButton.style.display = 'block';
	    		closeButton.style.position = 'absolute';
	    		closeButton.style.right = '-10px';
	    		closeButton.style.top = '-10px';
	    		closeButton.style.width = '25px';
	    		closeButton.style.height = '25px';
	    		closeButton.style.cursor = 'pointer';
	    		closeButton.style.borderRadius = '100px';
	    		closeButton.innerHTML = htmlEncode("&lt;svg id=&quot;Livello_1&quot; style=&quot;enable-background:new 0 0 100 100;pointer-events:none;&quot; version=&quot;1.1&quot; viewBox=&quot;0 0 100 100&quot; xml:space=&quot;preserve&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot;&gt;&lt;path class=&quot;mv-pl-svg-fill&quot; d=&quot;M64.9,66.8c-0.5,0-1-0.2-1.4-0.6L33.7,36.6c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0l29.8,29.7c0.8,0.8,0.8,2,0,2.8 C65.9,66.6,65.4,66.8,64.9,66.8z&quot;/&gt;&lt;path class=&quot;mv-pl-svg-fill&quot; d=&quot;M35.1,66.8c-0.5,0-1-0.2-1.4-0.6c-0.8-0.8-0.8-2,0-2.8l29.8-29.7c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8L36.5,66.3 C36.1,66.6,35.6,66.8,35.1,66.8z&quot;/&gt; &lt;/svg&gt;");
	    		container.style.display = 'none';
	    		container.style.opacity = 0;
	    		
	    		//Attach click event
	    		closeButton.addEventListener("click", function($event) {
	    			anotations[$event.target.getAttribute("data-id")].closed = true;
	    			//Hide/Close anotation
	    			this.parentElement.style.display = 'none';
	    		});

	    		container.appendChild(closeButton);
	    		
	    		wrap.appendChild(container);

	    		anotations.push({
	    			start 	  :	value.start,
	    			end 	  :	value.end,
	    			anotation :	container,
	    			visible	  :	false,
	    			shown     : false,
	    			closed	  : false
	    		});
	    	})
	    }


	    /**
	     * [displayAnotation description]
	     *
	     * 
	     * @param  {[type]} index [description]
	     * @return {[type]}       [description]
	     */
	    function showAnotation(key) {
	    	
	    	anotations[key].visible = true;
	    	anotations[key].shown = true;
	    	anotations[key].anotation.style.display = 'block';
	    	anotations[key].anotation.style.opacity = 1;
	    }

	    /**
	     * [hideAnotation description]
	     *
	     * 
	     * @param  {[type]} index [description]
	     * @return {[type]}       [description]
	     */
	    function hideAnotation(key) {
	    	anotations[key].visible = false;
	    	anotations[key].anotation.style.display = 'none';
	    	anotations[key].anotation.style.opacity = 0;
	    }

	    /**
	     * [playerResized description]
	     *
	     * 
	     * @return {[type]} [description]
	     */
	    function playerResized() {

	    	if(player.getFullscreen() === true) {
	    		div.style.minHeight	= '91%';
	    		div.style.maxHeight	= '91%';
	    	}
	    }

	    /**
	     * [onFullScreen description]
	     *
	     * 
	     * @return {[type]} [description]
	     */
	    function onFullScreen() {
	    	//not needed this event 
	    	//because on resize is fired always even on fullscreen
	    }

	    function onAdPlay() {
	    	anotations.filter(function(anotation, key) {
	    		hideAnotation(key);
	    	})
	    }

	    function onAdComplete() {
	    	
	    }

	    function onAdSkipped() {
	    	
	    }

	    function onComplete() {
	    	anotations.filter(function(anotation, key) {
	    		hideAnotation(key);
	    	});
	    }

	    player.onPause(function(){
	    	anotations.filter(function(anotation, key) {
	    		hideAnotation(key);
	    	});
	    });

	    /**
	     * 
	     */
	    player.onAdSkipped(onAdSkipped);
	    
	    /**
	     * 
	     */
	    player.onAdComplete(onAdComplete);
	    
	    /**
	     * 
	     */
	    player.onAdPlay(onAdPlay);

	    /*	    
		 * Listen to Resize event
	     */
	    player.onResize(playerResized);

	    /**
	     * On Player ready state prepare anotations
	     */
	    player.onReady(setup);

	    
	    player.onComplete(onComplete);
	    //player.onStop(onStop);
    	
	});
})(jwplayer);