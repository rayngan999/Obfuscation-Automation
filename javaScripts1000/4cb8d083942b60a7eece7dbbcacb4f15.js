(function() {
	window['optimizely'] = window['optimizely'] || [];
	
	String.prototype.cleanseForDFP = function (){
		var dfpReservedRegex = /\"|\'|#|,|\*|\.|\(|\)|=|\+|<|>|\[|\]|!|~|;|\^/g;
		return this.replace(dfpReservedRegex, "").toLowerCase();
	};

	try{
		var activeExperiments = window['optimizely'].data.state.activeExperiments;
		var abTestValues = [];
		for(var i = 0; i < activeExperiments.length; i++){
			var ex = activeExperiments[i];
			var experimentName = window['optimizely'].data.experiments[ex].name;
			var variationId = window['optimizely'].data.state.variationMap[ex];
			
			abTestValues.push(experimentName.cleanseForDFP() + " | " + variationId);
		}
		
		window['optimizely']['dfpValues'] = abTestValues;
	}catch(e){
		console.log("Error with 'optimizely' window object:\n" + e);
	}
	
})();

var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
	if(window['optimizely'] && window['optimizely'].hasOwnProperty('dfpValues')){
		googletag.cmd.push(function() {
									googletag.pubads().setTargeting('abtest', window['optimizely']['dfpValues']);
								});
	}
})();