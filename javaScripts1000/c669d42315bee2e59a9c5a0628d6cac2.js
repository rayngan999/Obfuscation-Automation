	//-----------------------------------
	// Start CrossDomainStorageRM library, modified from
	// https://www.nczonline.net/blog/2010/09/07/learning-from-xauth-cross-domain-localstorage/
	//-----------------------------------
	/* Copyright 2010 Nicholas C. Zakas. All rights reserved. BSD Licensed. */
	function CrossDomainStorageRM(origin, path){
		this.origin = origin;
		this.path = path;
		this._iframe = null;
		this._iframeReady = false;
		this._queue = [];
		this._requests = {};
		this._id = 0;
	}

	CrossDomainStorageRM.prototype = {

		//restore constructor
		constructor: CrossDomainStorageRM,

		//public interface methods

		init: function(){

			var that = this;

			if(!this._iframe){
				if(window.postMessage && window.JSON && window.localStorage){
					this._iframe = document.createElement("iframe");
					this._iframe.style.cssText = "position:absolute;width:1px;height:1px;left:-9999px;";
					document.body.appendChild(this._iframe);

					if(window.addEventListener){
						this._iframe.addEventListener("load", function(){ that._iframeLoaded(); }, false);
						window.addEventListener("message", function(event){ that._handleMessage(event); }, false);
					} else if(this._iframe.attachEvent){
						this._iframe.attachEvent("onload", function(){ that._iframeLoaded(); }, false);
						window.attachEvent("onmessage", function(event){ that._handleMessage(event); });
					}
				} else {
					throw new Error("Unsupported browser.");
				}
			}

			this._iframe.src = this.origin + this.path;
		},

		storeValue: function(key, value, callback){
			this._processRequest({ key: key, value: value, id: ++this._id, operation: 'write' }, callback);
		},

		requestValue: function(key, callback){
			this._processRequest({ key: key, id: ++this._id, operation: 'read' }, callback);
		},

		_processRequest: function(request, callback) {
			var data = {
				request: request,
				callback: callback
			};

			if(this._iframeReady){
				this._sendRequest(data);
			} else {
				this._queue.push(data);
			}

			if(!this._iframe){
				this.init();
			}
		},

		_sendRequest: function(data){			
			this._requests[data.request.id] = data;
			this._iframe.contentWindow.postMessage(JSON.stringify(data.request), this.origin);
		},

		_iframeLoaded: function(){
			this._iframeReady = true;

			if(this._queue.length){
				for (var i=0, len=this._queue.length; i < len; i++){
					this._sendRequest(this._queue[i]);
				}
				this._queue = [];
			}
		},

		_handleMessage: function(event){
			if(event.origin === this.origin){
				var d = JSON.parse(event.data);
				if(typeof this._requests[d.id].callback === "function") {
					this._requests[d.id].callback(d);
				}
				delete this._requests[d.id];
			}
		}
	};
	//-----------------------------------
	// End CrossDomainStorageRM library
	//-----------------------------------