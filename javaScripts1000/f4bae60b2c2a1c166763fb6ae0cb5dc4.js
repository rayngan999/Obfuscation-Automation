// (c) by Gemius SA - gemius player tools
// ver. 2.6

function gemius_pending(i) { window[i] = window[i] || function() {var x = window[i+'_pdata'] = window[i+'_pdata'] || []; x[x.length]=arguments;};};
gemius_pending('gemius_hit'); gemius_pending('gemius_event'); gemius_pending('pp_gemius_hit'); gemius_pending('pp_gemius_event');

if (typeof GemiusPlayerVisibility == "undefined") {
	var GemiusPlayerVisibility = {
		isframe : null,
		framevis : null,
		childs : [],
		timerID : null,
		init : function() {
			try {
				GemiusPlayerVisibility.isframe = (top !== self);
				if (window.addEventListener) {
					window.addEventListener("message", GemiusPlayerVisibility._msgreceive, false);
				} else if (window.attachEvent) {
					window.attachEvent("onmessage", GemiusPlayerVisibility._msgreceive);
				}

				if (GemiusPlayerVisibility.isframe) {
					parent.postMessage("__xx_gplayer_vischeck_xx__","*");
				}
			} catch (e) {
			}
		},
		check : function(object) {
			try {
				if (GemiusPlayerVisibility.isframe && GemiusPlayerVisibility.framevis===null) {
					parent.postMessage("__xx_gplayer_vischeck_xx__","*");
					return null;
				} else if (GemiusPlayerVisibility.isframe && GemiusPlayerVisibility.framevis===false) {
					return false;
				} else if (GemiusPlayerVisibility.isframe !== null) {
					var vis = GemiusPlayerVisibility._inScreen(object);
					return vis;
				} else {
					return null;
				}
			} catch (e) {
				return null;
			}
		},
		_msgreceive : function(e) {
			if (typeof e.data=="string" && e.data=="__xx_gplayer_vischeck_xx__") {
				try {
					if (GemiusPlayerVisibility.isframe && GemiusPlayerVisibility.framevis===null) {
						parent.postMessage("__xx_gplayer_vischeck_xx__","*");
					}
					var frames = document.getElementsByTagName('iframe');
					var frame = null;
					try {
						for (var i = 0; i<frames.length; i++) {
							if (frames[i].contentWindow === e.source) {
								frame = frames[i];
								break;
							}
						}
					} catch (e){
					}
					for (var i = 0; i<frames.length; i++) {
						if (frame===null || frames[i]==frame) {
							var found = false;
							for (var j = 0; j<GemiusPlayerVisibility.childs.length; j++) {
								if (frames[i]===GemiusPlayerVisibility.childs[j]['frame']) {
									found = true;
									break;
								}
							}
							if (!found) {
								GemiusPlayerVisibility.childs[GemiusPlayerVisibility.childs.length] = {'frame': frames[i], 'vis': null};
							}
						}
					}
					if (!GemiusPlayerVisibility.timerID) {
						GemiusPlayerVisibility.timerID = setInterval(GemiusPlayerVisibility._notify, 1000);
					}
				} catch (e) {
				}
			} else if  (typeof e.data=="string" && e.data.substr(0,29)=="__xx_gplayer_visibility_xx__/") {
				GemiusPlayerVisibility.framevis = (e.data.substr(29) == "true");
			}
		},
		_notify : function(object) {
			try {
				if (GemiusPlayerVisibility.isframe===false || GemiusPlayerVisibility.framevis!==null) {
					for (var i = 0; i<GemiusPlayerVisibility.childs.length; i++) {
						var vis = ((!GemiusPlayerVisibility.isframe || GemiusPlayerVisibility.framevis) && GemiusPlayerVisibility._inScreen(GemiusPlayerVisibility.childs[i]['frame']));
						if (GemiusPlayerVisibility.childs[i]['vis'] !== vis) {
							var msg = "__xx_gplayer_visibility_xx__/"+((vis)?"true":"false");
							GemiusPlayerVisibility.childs[i]['vis'] = vis;
							GemiusPlayerVisibility.childs[i]['frame'].contentWindow.postMessage(msg,"*");
						}
					}
				}
			} catch (e) {
			}
		},
		_inScreen : function(object) {
			if (!object) {
				return null;
			} else {
				var fskeys = ["webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"];
				var fse = null;
				for (var i=0; i<fskeys.length; i++) {
					if (document[fskeys[i]]) fse = document[fskeys[i]];
				}
				if (fse) {
					return (fse == object || GemiusPlayerVisibility._isChild(fse, object));
				} else if (document.visibilityState != "visible") {
					return false;
				} else {
					var rect = object.getBoundingClientRect();
					var visy = Math.min(window.innerHeight, rect.top+rect.height) - Math.max(rect.top,0);
					var visx = Math.min(window.innerWidth, rect.left+rect.width) - Math.max(rect.left,0);
					var vis = visx>0 && visy>0 && (visx*visy > rect.height*rect.width*0.5 || visx*visy > window.innerHeight*window.innerWidth*0.5);
					return vis;
				}
			}
		},
		_isChild : function(p, c) {
			var node = c.parentNode;
			while (node != null) {
				if (node == p) {
					return true;
				}
				node = node.parentNode;
			}
			return false;
		}
	}

	GemiusPlayerVisibility.init();
}

function GemiusPlayer(playerID, gemiusID, playerData) {
	this.interval = 5 * 60;
	this.updateInterval = 1;
	this.instanceID = (((new Date()).getTime()) + Math.floor(Math.random()*1000)).toString();
	this.playerID = playerID;
	this.gemiusID = gemiusID;
	this.playerData = (playerData || {});
	this.initialized = false;
	this.programs = {};
	this.ads = {};
	this.hitsCounter = 0;
	this.currentProgramID = null;
	this.videoObject = null;
	this.resolution = null;
	this.visible = null;

	this._playerDataKeys = {"currentDomain":"_SPD", "resolution":"_SPR", "volume":"_SPV"};
	this._programDataKeys = {'programType':'_SCTE','programDuration':'_SCD','programTransmission':'_SCTR','programName':'_SCT',
			'series':'_SCS','typology':'_SCTY','premiereDate':'_SCPD','externalPremiereDate':'_SCEPD','quality':'_SCQ',
			'resolution':'_SCR', 'volume':'_SCV', 'programGenre':'_SCG','programPartialName':'_SCPN','programProducer':'_SCPP',
			'programThematicCategory':'_SCTC','programSeason':'_SCSS','transmissionChannel':'_SCTB','transmissionStartTime':'_SCTS',
			'transmissionType':'_SCTT'};
	this._programExtraDataKeys = {'partID':'_SCP'};
	this._adDataKeys = {'adName':'_SAN','adDuration':'_SAD','adTransmission':'_SATR','adType':'_SAT','campaignClassification':'_SAC',
			'quality':'_SAQ', 'resolution':'_SAR', 'volume':'_SAV', 'adFormat':'_SAF'};
	this._adExtraDataKeys = {'adPosition':'_SAP', 'breakSize':'_SBS', 'breakType':'_SBT'};
	this._eventDataKeys = {'listID':'_SL'};
	this._reservedDataKeys = {'autoPlay':true};

	//public methods
	this.setVideoObject = function(video) {
		this.videoObject = video;
	}

	this.newProgram = function(programID, programData) {
		this._init();
		this.programs[programID] = {"state": "new", "started": false, "program_started": false, "last_action_time": null, "data": this._clone(programData), "extradata": {}};
		this._validateParams(this.programs[programID]["data"]);
		this._sendHit(programID, null, "data", "streamcontent", []);
	}

	this.newAd = function(adID, adData) {
		this._init();
		this.ads[adID] = {"state": "new", "started": false, "last_action_time": null, "currentProgramID": null, "currentAdPosition": null, "data": this._clone(adData), "extradata": {}};
		this._validateParams(this.ads[adID]["data"]);
		this._sendHit(null, adID, "data", "streamspot", []);
	}

	this.programEvent = function(programID, offset, eventType, eventData) {
		eventData = eventData || {};
		if (this.programs[programID]) {
			this._updateCustomProgramData(programID, eventData);
			this.hitsCounter = (programID==this.currentProgramID)?(this.hitsCounter+1):1;
			this.currentProgramID = programID;
			if (this.hitsCounter<=2000) {
				if (eventType == "play") {
					this._playProgram(programID, offset, eventData);
				} else if (eventType == "chngQual" || eventType == "chngRes" || eventType == "chngVol") {
					this._changeParam(programID, null, offset, eventType, eventData);
				} else {
					this._event(programID, null, offset, eventType, eventData);
				}
			} else {
				this._stopAll();
			}
		}
	}

	this.adEvent = function(programID, adID, offset, eventType, eventData) {
		eventData = eventData || {};
		if (this.programs[programID] && this.ads[adID]) {
			this._updateCustomAdData(adID, eventData);
			this.hitsCounter = (programID==this.currentProgramID)?(this.hitsCounter+1):1;
			this.currentProgramID = programID;
			if (this.hitsCounter<=2000) {
				if (eventType == "play") {
					this._playAd(programID, adID, offset, eventData);
				} else if (eventType == "chngQual" || eventType == "chngRes" || eventType == "chngVol") {
					this._changeParam(programID, adID, offset, eventType, eventData);
				} else {
					this._event(programID, adID, offset, eventType, eventData);
				}
			} else {
				this._stopAll();
			}
		}
	}

	//private methods
	this._playProgram = function(programID, offset, eventData) {
		this._stopAll();
		var eventCategory = (this.programs[programID]['program_started']==false)?"programstart":(this.programs[programID]["started"]?"play":"start");
		var params = ["_SCO="+offset, "_SED="+this._updateActionTime(this.programs[programID])];
		if (typeof eventData['autoPlay'] != "undefined") params = params.concat(["_ECA=" + (eventData['autoPlay']?1:0)]);
		if (typeof eventData['partID'] != "undefined") this.programs[programID]["extradata"]["partID"] = eventData['partID'];
		else delete this.programs[programID]["extradata"]["partID"];
		if (typeof eventData['volume'] != "undefined") params = params.concat(["_SPVN=" + eventData['volume']]);
		if (typeof eventData['resolution'] != "undefined") params = params.concat(["_SPRN=" + eventData['resolution']]);
		this.programs[programID]["state"] = "play";
		this.programs[programID]["started"] = true;
		this.programs[programID]["program_started"] = true;
		this._sendHit(programID, null, "stream", eventCategory, params);

		if (typeof eventData['volume'] != "undefined") this.playerData['volume'] = eventData['volume'];
		if (typeof eventData['resolution'] != "undefined") this.playerData['resolution'] = eventData['resolution'];

		for (var adID in this.ads) {
			this.ads[adID]["started"] = false;
		}

		for (var pID in this.programs) {
			if (pID != programID) {
				this.programs[pID]["started"] = false;
				this.programs[pID]["program_started"] = false;
			}
		}
	}

	this._playAd = function(programID, adID, offset, eventData) {
		this._stopAll();
		var start = (!this.ads[adID]["started"] || this.ads[adID]["currentProgramID"]!=programID || this.ads[adID]["currentAdPosition"]!=eventData['adPosition']);
		var breakType = this._getBreakType(programID, offset);
		var eventCategory = (start && breakType!="post" && this.programs[programID]['program_started']==false)?"programstart":(start?"start":"play");
		var params = ["_SCO="+offset,"_SED="+this._updateActionTime(this.ads[adID])];
		if (typeof eventData['autoPlay'] != "undefined") params = params.concat(["_ECA=" + (eventData['autoPlay']?1:0)]);
		if (typeof eventData['adPosition'] != "undefined") this.ads[adID]["extradata"]["adPosition"] = eventData['adPosition'];
		else delete this.ads[adID]["extradata"]["adPosition"];
		if (typeof eventData['breakSize'] != "undefined") this.ads[adID]["extradata"]["breakSize"] = eventData['breakSize'];
		else delete this.ads[adID]["extradata"]["breakSize"];
		if (breakType) this.ads[adID]["extradata"]["breakType"] = breakType;
		else delete this.ads[adID]["extradata"]["breakType"];
		if (typeof eventData['volume'] != "undefined") params = params.concat(["_SPVN=" + eventData['volume']]);
		if (typeof eventData['resolution'] != "undefined") params = params.concat(["_SPRN=" + eventData['resolution']]);
		this.ads[adID]["state"] = "play";
		this.ads[adID]["started"] = true;
		this.ads[adID]["currentProgramID"] = programID;
		this.ads[adID]["currentAdPosition"] = eventData['adPosition'];
		if (breakType!="post") this.programs[programID]["program_started"] = true;
		this._sendHit(programID, adID, "stream", eventCategory, params);

		if (typeof eventData['volume'] != "undefined") this.playerData['volume'] = eventData['volume'];
		if (typeof eventData['resolution'] != "undefined") this.playerData['resolution'] = eventData['resolution'];
	}

	this._event = function(programID, adID, offset, eventType, eventData) {
		var evtypes = {"pause":"pause", "stop":"stop", "close":"close", "buffer":"buffering", "break":"break", "seek":"seek", "complete":"complete", "skip":"skip", "next":"next", "prev":"prev"};
		var data = (adID?this.ads[adID]:this.programs[programID]);
		if (evtypes[eventType]) {
			var params = ["_SED="+this._updateActionTime(data)].concat(this._convertEventParams(eventData));
			if (typeof offset != "undefined") params = params.concat(["_SCO="+offset]);
			if (eventType == "stop" || eventType == "complete" || eventType == "close") {
				data["started"] = false;
				if (!adID) this.programs[programID]["program_started"] = false;
			}
			data["state"] = evtypes[eventType];
			this._sendHit(programID, adID, "stream", evtypes[eventType], params);
		}
	}

	this._changeParam = function(programID, adID, offset, eventType, eventData) {
		var data = (adID?this.ads[adID]:this.programs[programID]);
		var params = ["_SED="+this._updateActionTime(data)];
		if (typeof offset != "undefined") params = params.concat(["_SCO="+offset]);
		if (typeof eventData['volume'] != "undefined") params = params.concat(["_SPVN=" + eventData['volume']]);
		if (typeof eventData['resolution'] != "undefined") params = params.concat(["_SPRN=" + eventData['resolution']]);
		if (typeof eventData['quality'] != "undefined") params = params.concat([(adID?"_SAQN=":"_SCQN=") + eventData['quality']]);
		this._sendHit(programID, adID, "stream", "continue", params);

		if (eventData['quality']) data['data']['quality'] = eventData['quality'];
		if (eventData['resolution']) this.playerData['resolution'] = eventData['resolution'];
		if (eventData['volume']) this.playerData['volume'] = eventData['volume'];
	}

	this._getBreakType = function(programID, offset) {
		try {
			var duration = (this.programs[programID]['data']['programDuration'] || 0);
			if (typeof duration != "number") duration = parseInt(duration,10);
			if (typeof offset != "number") offset = parseInt(offset,10);
			if ((duration<=100 && offset<=0) || (duration>100 && offset<5)) return "pre";
			else if (duration>0 && ((duration<=100 && offset>=duration) || (duration>100 && offset>duration-5))) return "post";
			else return "mid";
		} catch (e) {
			return "";
		}
	}

	this._stopAll = function() {
		for (var programID in this.programs) {
			if (this.programs[programID]["state"] == "play") {
				this._event(programID, null, undefined, "pause", {});
			}
		}

		for (var adID in this.ads) {
			if (this.ads[adID]["state"] == "play" && this.programs[this.ads[adID]["currentProgramID"]]) {
				this._event(this.ads[adID]["currentProgramID"], adID, undefined, "pause", {});
			}
		}
	}

	this._update = function() {
		var vis = GemiusPlayerVisibility.check(this.videoObject);
		var res = this._getPlayerSize();
		if (vis !== this.visible || res !== this.resolution) {
			this._continue();
			this.visible = vis;
			this.resolution = res;
		}
	}

	this._getPlayerSize = function() {
		if (!this.videoObject) {
			return null;
		} else {
			try {
				var rect = this.videoObject.getBoundingClientRect();
				return rect.width + "x" + rect.height;
			} catch (e) {
				return null;
			}
		}
	}

	this._continue = function() {
		for (var programID in this.programs) {
			if (this.programs[programID]["state"] == "play") {
				var params = ["_SED="+this._updateActionTime(this.programs[programID])];
				this._sendHit(programID, null, "stream", "continue", params);
			}
		}

		for (var adID in this.ads) {
			if (this.ads[adID]["state"] == "play") {
				var params = ["_SED="+this._updateActionTime(this.ads[adID])];
				this._sendHit(this.ads[adID]["currentProgramID"], adID, "stream", "continue", params);
			}
		}
	}

	this._unload = function() {
		try {
			var delay = false;
			for (var programID in this.programs) {
				if (this.programs[programID]["state"] == "play") {
					var params = ["_SED="+this._updateActionTime(this.programs[programID])];
					this._sendHit(programID, null, "stream", "unload", params);
					delay = true;
				}
			}
			
			for (var adID in this.ads) {
				if (this.ads[adID]["state"] == "play") {
					var params = ["_SED="+this._updateActionTime(this.ads[adID])];
					this._sendHit(this.ads[adID]["currentProgramID"], adID, "stream", "unload", params);
					delay = true;
				}
			}

			if (delay && typeof navigator.sendBeacon != "function") {
				var start = (new Date()).getTime();
				while (start+250>(new Date()).getTime());
			}
		} catch(e) {}
	}

	this._updateActionTime = function(streamData) {
		var duration = 0;
		try {
			if (streamData['state'] == 'play' && streamData['last_action_time']) {
				duration =  Math.round(((new Date()).getTime() - streamData['last_action_time']) / 1000);
				if (duration < 0 || duration > 2*this.interval) {
					duration = 0;
				}
			}
			streamData['last_action_time'] = (new Date()).getTime();
		} catch (e) {}
		return duration;
	}

	this._sendHit = function(programID, adID, eventType, eventCategory, params) {
		var extra = ["_EC="+eventCategory].concat(this._getPlayerParams()).concat(this._getProgramParams(programID)).concat(this._getAdParams(adID)).concat(params);
		gemius_event.apply(window, ['_' + eventType + '_', this.gemiusID].concat(extra));
	}

	this._getProgramParams = function(programID) {
		if (!this.programs[programID]) return [];
		var params = ["_SC="+programID];
		params = params.concat(this._convertParams(this.programs[programID]["data"], this._programDataKeys, true));
		params = params.concat(this._convertParams(this.programs[programID]["extradata"], this._programExtraDataKeys));
		return params;
	}

	this._getAdParams = function(adID) {
		if (!this.ads[adID]) return [];
		var params = ["_SA="+adID];
		params = params.concat(this._convertParams(this.ads[adID]["data"], this._adDataKeys, true));
		params = params.concat(this._convertParams(this.ads[adID]["extradata"], this._adExtraDataKeys));
		return params;
	}

	this._getPlayerParams = function() {
		var params = ["_SPI="+this.instanceID,"_SP="+this.playerID];
		if (this.resolution !== null) params = params.concat(["_SPS="+this.resolution]);
		if (this.visible !== null) params = params.concat(["_SPIS="+(this.visible?"1":"0")]);
		return params.concat(this._convertParams(this.playerData,this._playerDataKeys));
	}

	this._validateParams = function(params) {
		var intTypes = {'programDuration':1, 'adDuration':1};
		var maxLengths = {'programTransmission':20,'adTransmission':20,'programPartialName':64,'programProducer':64,
			'programSeason':64,'transmissionChannel':64,'transmissionStartTime':10};
		if (typeof params != 'undefined') {
			for (var key in params) {
				if (maxLengths[key]) {
					if (typeof params[key] == 'string') {
						params[key] = params[key].substr(0, maxLengths[key]);
					} else {
						delete params[key];
					}
				}
				if (intTypes[key]) {
					params[key] = parseInt(params[key]);
				}
			}
		}
	}

	this._convertEventParams = function(eventData) {
		return this._convertParams(eventData, this._eventDataKeys);
	}

	this._convertParams = function(params, keyMap, allowCustomParams) {
		var res = [];
		if (typeof params != 'undefined') {
			for (var key in params) {
				if (keyMap[key] || allowCustomParams) {
					res[res.length] = (keyMap[key] || key) + "=" + params[key];
				}
			}
		}
		return res;
	}

	this._updateCustomProgramData = function(programID, eventData) {
		for (var key in eventData) {
			if (!(key in this._reservedDataKeys)) {
				this.programs[programID]['data'][key] = eventData[key];
			}
		}
		this._validateParams(this.programs[programID]['data']);
	}

	this._updateCustomAdData = function(adID, eventData) {
		for (var key in eventData) {
			if (!(key in this._reservedDataKeys)) {
				this.ads[adID]['data'][key] = eventData[key];
			}
		}
		this._validateParams(this.ads[adID]['data']);
	}

	this._assignDataKeys = function(target, source) {
		for (var key in source) {
			target[key] = true;
		}
	}

	this._initReservedKeys = function() {
		this._assignDataKeys(this._reservedDataKeys, this._playerDataKeys);
		this._assignDataKeys(this._reservedDataKeys, this._programDataKeys);
		this._assignDataKeys(this._reservedDataKeys, this._programExtraDataKeys);
		this._assignDataKeys(this._reservedDataKeys, this._adDataKeys);
		this._assignDataKeys(this._reservedDataKeys, this._adExtraDataKeys);
		this._assignDataKeys(this._reservedDataKeys, this._eventDataKeys);
		delete this._reservedDataKeys['programDuration'];
		delete this._reservedDataKeys['adDuration'];
	}

	this._addEvent = function(obj,type,fn) {
		if (obj.addEventListener) {
			obj.addEventListener(type, fn, false);
		} else if (obj.attachEvent) {
			obj.attachEvent('on'+type, fn);
		}
	}

	this._init = function() {
		if (!this.initialized) {
			this.initialized = true;
			this._initReservedKeys();
			this._update();
			setInterval(this._wrapFun(this,"_continue"), this.interval * 1000);
			setInterval(this._wrapFun(this,"_update"), this.updateInterval * 1000);
			try {
				if (typeof navigator.sendBeacon == "function") {
					this._addEvent(window.top, 'unload', this._wrapFun(this,"_unload"));
				} else {
					this._addEvent(window.top, 'beforeunload', this._wrapFun(this,"_unload"));
				}
			} catch (e) {
				if (typeof navigator.sendBeacon == "function") {
					this._addEvent(window, 'unload', this._wrapFun(this,"_unload"));
				} else {
					this._addEvent(window, 'beforeunload', this._wrapFun(this,"_unload"));
				}
			}
		}
	}

	this._wrapFun = function(self, method) {
		return function() {
			self[method]();
		}
	}

	this._clone = function(obj) {
		var res = {};
		if (!obj) return res;
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) res[key] = obj[key];
		}
		return res;
	}
}

if (typeof window['gemius_player_data'] != 'undefined') {
	for (var i=0; i<window['gemius_player_data'].length; i++) {
		var data = window['gemius_player_data'][i];
		var obj = data[0], fun = data[1], args = data[2];

		if (fun != "GemiusPlayer") obj[fun].apply(obj,args);
		else {
			var nobj = new function(){return GemiusPlayer.apply(this,args);};
			for (var attrname in nobj) {
				obj[attrname] = nobj[attrname];
			}
		}
	}
	window['gemius_player_data'] = [];
}

(function(d,t) {var ex; try {var gt=d.createElement(t),s=d.getElementsByTagName(t)[0],l='http'+((location.protocol=='https:')?'s':'');
gt.async='true'; gt.defer='true'; gt.src=l+'://gatr.hit.gemius.pl/gemiuslib.js'; s.parentNode.insertBefore(gt,s);} catch (ex) {}}(document,'script'));
