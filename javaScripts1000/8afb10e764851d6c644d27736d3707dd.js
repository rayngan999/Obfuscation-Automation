
var
	r7ad = {},
	Bbanner = {},
	initAdv = function(json) {
		var hash, isMobile;
		if (typeof json === 'undefined') {
			hash = '/7542/parceiros/editalconcursosbrasil';
			isMobile = false;
		} else {
			hash = json.hash;
			isMobile = true;
		}	
		(function(params) {
		var
  params = params || null,
  Bbanner = function () {},
  userAgent = navigator.userAgent;

Bbanner.prototype.init = function (params) {
  var that = this, checkGoogleTag, runLoadGAds = params.runLoadGAds || false;
  this.hash = params.hash || '';
  this.adsenseHash = params.adsenseHash || '';
  this.href = params.href || '';
  this.emptyFormats = params.emptyFormats || []; //final Formats
  this.possibleFormats = params.possibleFormats || [];
  this.emptyService = params.emptyService || '';
  this.isMobile = params.isMobile || false;
  this.async = params.async || false;
  this.futureEmptyFormats = [];
  this.futureFilledFormats = [];
  this.cachedFormats = false;
  this.slots = [];

  if (runLoadGAds && typeof Bbanner.prototype.isGAdsLoaded === 'undefined') {
    if (this.async) {
      this.asyncLoadGAds();
    } else {
      this.syncLoadGAds();
    }

    Bbanner.prototype.isGAdsLoaded = true;

    checkGoogleTag = window.setInterval(function () {
      if (window.googletag && googletag.apiReady) {
        window.clearInterval(checkGoogleTag);
        that.interceptGoogletagJSONP();
      }
    }, 60);
  } else {
    return false;
  }
};

Bbanner.prototype.cleanGAdsLoaded = function () {
  delete Bbanner.prototype.isGAdsLoaded;
};

Bbanner.prototype.exists = function (format) { //retrocompatibilidade
  var bannedFormats, existsFormat = true;

  format = format.toLowerCase();

  bannedFormats = {
    'patr_editorial_especial_noticias' : 1,
    'veja_tambem_ticker' : 1,
    'galeria2_thumb' : 1,
    'galeria3_thumb' : 1,
    'galeria4_thumb' : 1,
    'galeria5_thumb' : 1
  };

  if (typeof bannedFormats[format] !== 'undefined') {
    return false;
  }

  if (format === 'tv') {
    if (this.hash !== '/7542/r7home/home' && this.hash !== '/7542/r7_home') {
      existsFormat = false;
    } else {
      existsFormat = true;
    }
  }

  if (format.indexOf('_thumb') !== -1) {
    if (
      this.hash.indexOf('/7542/r7entretenimento/') !== -1 ||
      this.hash.indexOf('/7542/r7esportes/') !== -1 ||
        this.hash === '/7542/foradecontrole/internas' ||
        this.hash === '/7542/r7esportes/londres2012/internas' ||
        this.hash === '/7542/afazenda5/internas' ||
        this.hash === '/7542/programadogugu/internas' ||
        this.hash === '/7542/r7carros/internas' ||
        this.hash === '/7542/r7noticias/educacao/internas' ||
        this.hash === '/7542/r7noticias/r7rio/internas'
    ) {
      existsFormat = true;
    } else {
      existsFormat = false;
    }
  }

  return existsFormat;
};

Bbanner.prototype.syncLoadGAds = function () {
  var
    useSSL = 'https:' === document.location.protocol,
    src = (useSSL ? 'https:' : 'http:') +       '//www.googletagservices.com/tag/js/' +
    (this.isMobile ? 'gpt_mobile.js' : 'gpt.js');
  document.write('<scr' + 'ipt src="' + src + '"><\/scr' + 'ipt>');
};

Bbanner.prototype.asyncLoadGAds = function () {
  window.googletag = window.googletag || {};
  window.googletag.cmd = window.googletag.cmd || [];
  (function() {
    var gads = document.createElement("script");
    gads.async = true;
    gads.type = "text/javascript";
    var useSSL = "https:" == document.location.protocol;
    gads.src = (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
    var node =document.getElementsByTagName("script")[0];
    node.parentNode.insertBefore(gads, node);
  })();
};

Bbanner.prototype.getParamsByFormat = function (format) {
  var
    acceptFormats,
    prepareParams = function (arr) {
      return {
        size: arr[0],
        target: arr[1]
      };
    },
    i, j, editorias = ['videos', 'esportes', 'entretenimento', 'noticias', 'record'];

  acceptFormats = {
    'superbanner': [[728, 90], 'Superbanner'],
    'superbanner_2': [[728, 90], 'Superbanner2'],
    'superbanner_peg': [[728, 90], 'Superbanner_peg'],
    'selo': [[120, 60], 'Selo'],
    'selo1': [[120, 60], 'Selo1'],
    'selo2': [[120, 60], 'Selo2'],
    'tv': [[460, 188], 'MidiaBox'],
    'square_island': [[300, 250], 'Island'],
    'island': [[300, 250], 'Island'],
    'square_island_2': [[300, 250], 'Island2'],
    'square_island_peg': [[300, 250], 'Island_peg'],
    'intextvideo': [[768, 432], 'intextvideo'],
    'skyscraper': [[120, 600], 'Skyscraper'],
    'vertical_banner_1': [[120, 240], 'VerticalBanner1'],
    'vertical_banner_2': [[120, 240], 'VerticalBanner2'],
    'vertical_banner_3': [[120, 240], 'VerticalBanner3'],
    'primeira_posicao_shopping': [[50, 50], 'PPI1'],
    'segunda_posicao_shopping': [[50, 50], 'PPI2'],
    'terceira_posicao_shopping': [[50, 50], 'PPI3'],
    'quarta_posicao_shopping': [[50, 50], 'PPI4'],
    'quinta_posicao_shopping': [[50, 50], 'PPI5'],
    'sexta_posicao_shopping': [[50, 50], 'PPI6'],
    'setima_posicao_shopping': [[50, 50], 'PPI7'],
    'oitava_posicao_shopping': [[50, 50], 'PPI8'],
    'nona_posicao_shopping': [[50, 50], 'PPI9'],
    'decima_posicao_shopping': [[50, 50], 'PPI10'],
    'decima_primeira_posicao_shopping': [[50, 50], 'PPI11'],
    'decima_segunda_posicao_shopping': [[50, 50], 'PPI12'],
    'decima_terceira_posicao_shopping': [[50, 50], 'PPI13'],
    'decima_quarta_posicao_shopping': [[50, 50], 'PPI14'],
    'patr_editorial_destaque_blog': [[100, 30], 'Patrocinioeditorial_destaque_blog'],
    'destaque_baixo_1': [[100, 30],
    'Patrocinioeditorial_destbaixosec_HP1'],
    'destaque_baixo_2': [[100, 30], 'Patrocinioeditorial_destbaixosec_HP2'],
    'destaque_baixo_3': [[100, 30], 'Patrocinioeditorial_destbaixosec_HP3'],
    'patr_editoria_noticias_miolo1': [[100, 30],
    'Patrocinioeditorial_destmiolo_HP1'],
    'patr_editoria_entretenimento_miolo1': [[100, 30],
    'Patrocinioeditorial_destmiolo_HP1'],
    'patr_editoria_esportes_miolo1': [[100, 30],
    'Patrocinioeditorial_destmiolo_HP1'],
    'patr_editoria_noticias_miolo2': [[100, 30], 'Patrocinioeditorial_destmiolo_HP2'],
    'patr_editoria_entretenimento_miolo2': [[100, 30],
    'Patrocinioeditorial_destmiolo_HP2'],
    'patr_editoria_esportes_miolo2': [[100, 30],
    'Patrocinioeditorial_destmiolo_HP2'],
    'destaque_editorial': [[120, 240], 'destaque_editorial'],
    'destaque_publicidade': [[100, 30], 'destaque_publicidade'],
    'banner_sniffer': [[1024, 60], 'Sniffer'],
    'selo_destaque_da_hora1': [[100, 30], 'Patrocinioeditorial_destdahora_HP1'],
    'selo_destaque_da_hora2': [[100, 30],
    'Patrocinioeditorial_destdahora_HP2'],
    'galeria1_thumb': [[[75, 56], [80, 60], [75, 57]], 'galeria1_thumb'],
    'galeria1_imagem': [[[640, 480], [800, 600], [700, 525], [587, 442]], 'galeria1_imagem'],
/*    'galeria2_thumb': [[[75, 56], [80, 60]], 'galeria2_thumb'],
    'galeria2_imagem': [[[640, 480], [800, 600]], 'galeria2_imagem'],
    'galeria3_thumb': [[[75, 56], [80, 60]], 'galeria3_thumb'],
    'galeria3_imagem': [[[640, 480], [800, 600]], 'galeria3_imagem'],
    'galeria4_thumb': [[[75, 56], [80, 60]], 'galeria4_thumb'],
    'galeria4_imagem': [[[640, 480], [800, 600]], 'galeria4_imagem'],*/
    'veja_tambem_ticker': [[728, 31], 'Filete'],
    'filete_1': [[728, 31], 'Filete_1'],
    'filete_2': [[728, 31], 'Filete_2'],
    'filete_3': [[728, 31], 'Filete_3'],
    'links_patrocinados2': [[728, 90], { pos: 'SuperbannerLP', hash: this.adsenseHash }],
    'links_patrocinados': [[300, 250], { pos: 'IslandLP', hash: this.adsenseHash }],
    'banner_interativo': [[300, 166], 'Combo'],
    'header_de_materia': [[[630, 133], [716, 133]], 'HeaderMateria']
  };

  for (i = 1; i <= 9; i = i + 1) {
    for (j = 0; j < editorias.length; j = j + 1) {
      acceptFormats['patr_editoria_' + editorias[j] + '_baixo' + i] = [[100, 30], 'Patrocinioeditorial_destbaixos_HP' + i];
    }
  }

  format = format.toLowerCase();
  return typeof acceptFormats[format] === 'undefined' ? false : prepareParams(acceptFormats[format]);
};

Bbanner.prototype.writeDivContainer = function (id, format) { //used only in async and ie render workarounds
  document.write('<div id="' + id + '" class="r7ad-' + format + '"></div>');
};

Bbanner.prototype.writeDivWithTargetId = function (targetId, uniqueID, format) {
  var targetEl = document.createElement('div');
  targetEl.id = uniqueID;
  targetEl.className = 'r7ad-' + format;
  document.getElementById(targetId).appendChild(targetEl);
};

Bbanner.prototype.writeErrorOnFormat = function (format) {
  document.write('<span style="display:none"><!-- no-accepted-format: ' + format + ' --></span>');
};

Bbanner.prototype.print = function (format, targetId) {
  var
    that,
    adsParams;

  //prevent R7 script injection
  if (this === window) {
    that = window.r7ad;
  } else {
    that = this;
  }

  adsParams = that.getParamsByFormat(format);

  if (!adsParams) {
    that.writeErrorOnFormat(format);
    return false;
  }

  that.printGAds(adsParams.size, adsParams.target, targetId);

  return that;
};

Bbanner.prototype.printAdSense = function (format) {
  this.print(format);
};

Bbanner.prototype.getReference = function (target) {
    var reference = target.pos;
    if (target.context) {
        reference = reference + "|" + target.context;
    }

    return reference;
};

Bbanner.prototype.printGAds = function (size, target, targetId) {
  if (typeof size !== 'object' || size.length < 2 || (typeof target !== 'string' && typeof target !== 'object')) {
    throw new Error("This method requires two or more valid params: size[Array[0] Number|Array, Array[...] Number|Array], target[String|Object]");
  }

  this.cleanCallbacks();

  //console.log('Alvos: ', target);

  var uniqueID = 'r7ad' + parseInt(Math.random() * 10000000, 32),
      isEmptyFormat = false, i, len;

  if (typeof target === 'string') {
    target = { pos: target };
  }

  if (typeof target.pos === 'undefined') {
    throw new Error("Missing the attribute pos in object param");
  }

  for (i = 0, len = this.emptyFormats.length; i < len; i = i + 1) {
    if (this.getReference(target) === this.emptyFormats[i]) {
      isEmptyFormat = true;
      break;
    }
  }

  if (!isEmptyFormat) {
    this.callGoogleTag(uniqueID, size, target, targetId);
  } else {
    this.triggerFail = true;
  }

  /*if (this.emptyFormats.indexOf(target.pos) === -1) {
    this.callGoogleTag(uniqueID, size, target);
  } else {
    this.triggerFail = true;
  }*/

  return this;
};

Bbanner.prototype.callGoogleTag = function (uniqueID, size, target, targetId) {
  //console.log("size :",size);

  var that = this,
      hash = target.hash || this.hash,
      async = this.async,
      slot, targetItem;

  this.actualPos = this.getReference(target);

  window.googletag.cmd.push(function() {
    if (async) {
      window.googletag.pubads().enableAsyncRendering();
    } else {
      window.googletag.pubads().enableSyncRendering();
    }

    slot = window.googletag.defineSlot(
      hash,
      size,
      uniqueID
      );

    slot.addService(window.googletag.pubads());
    that.slots.push(slot);

    for (targetItem in target) {
      if (target.hasOwnProperty(targetItem) && targetItem) {
        //console.log(target[targetItem]);
        slot.setTargeting(targetItem, target[targetItem]);
      }
    }
    // Tags Tail Target
    var _ttprofiles = window._ttprofiles || [];
    window.googletag.pubads().setTargeting("age",_ttprofiles.getAge);
    window.googletag.pubads().setTargeting("gender",_ttprofiles.getGender);
    window.googletag.pubads().setTargeting("cluster",_ttprofiles.getProfiles);
    window.googletag.pubads().setTargeting("subjects",_ttprofiles.getSubjects);
    window.googletag.pubads().setTargeting("team",_ttprofiles.getTeam);

    window.googletag.pubads().setTargeting("sclass", _ttprofiles.getSocialClass);
    window.googletag.pubads().setTargeting("msegments", _ttprofiles.getMicrosegments);
    window.googletag.pubads().setTargeting("customaud", _ttprofiles.getCustomAudience);

    window.googletag.enableServices();
  });

  if (async) {
    if (typeof targetId !== 'undefined') {
      this.writeDivWithTargetId(targetId, uniqueID, target.pos);

    } else {
      this.writeDivContainer(uniqueID, target.pos);
    }
  }

  window.googletag.cmd.push(function() {
    window.googletag.display(uniqueID);
  });

  //delay IE rendering - TODO: remove this block
  if (target.pos === 'MidiaBox' && typeof document.fireEvent !== 'undefined' && !async) {
    this.writeDivContainer(uniqueID, target.pos);
    window.ieAdBuffer[uniqueID] = window.setInterval(function () {
      try {
        document.getElementById(uniqueID).appendChild(document.getElementById('r7adTv'));
        document.getElementById('r7adTv').id = '';
        document.getElementById(uniqueID).style.display = 'block';
        window.clearInterval(window.ieAdBuffer[uniqueID]);
      } catch (e) {}
    }, 100);
  }
};

Bbanner.prototype.interceptGoogletagJSONP = function () {
  window.googletag = window.googletag || {};
  window.googletag.impl = window.googletag.impl || [];
  window.googletag.impl.pubads = window.googletag.impl.pubads || [];

  var that = this,
    _setAdContentsBySlotForSync = window.googletag.impl.pubads.setAdContentsBySlotForSync;

  window.googletag.impl.pubads.setAdContentsBySlotForSync = function (json) {
    that.setAdContentsBySlotForSync(json, _setAdContentsBySlotForSync);
  };
};

Bbanner.prototype.setAdContentsBySlotForSync = function (json, _setAdContentsBySlotForSync) {
  var i, len = this.possibleFormats.length, isPossibleFormat = false;
  if (typeof json[this.hash] !== 'undefined') {
    if (json[this.hash]._empty_ === false) {
      _setAdContentsBySlotForSync(json);
      this.callbackSuccess();

      for (i = 0; i < len; i = i + 1) {
        if (this.actualPos === this.possibleFormats[i]) {
          isPossibleFormat = true;
          break;
        }
      }

      if (isPossibleFormat) {
        this.futureFilledFormats.push(this.actualPos);
      }


    } else {
      this.futureEmptyFormats.push(this.actualPos);
      this.callbackFail();
    }
  } else if (typeof json[this.adsenseHash] !== 'undefined') {
    if (json[this.adsenseHash]._empty_ === false) {
      _setAdContentsBySlotForSync(json);
      this.callbackSuccess();
    } else {
      this.callbackFail();
    }
  }
};

Bbanner.prototype.prepareEmptyService = function () {
  var query,
    buildParams = function (formatsArray, key) {
      var i, len = formatsArray.length, queryParams = '';
      for (i = 0; i < len; i = i + 1) {
        queryParams = queryParams + key + '=' +  formatsArray[i] + '&';
      }

      return queryParams;
    };

  if (document.addEventListener) {
    document.removeEventListener("DOMContentLoaded", this.prepareEmptyService, false);
  } else {
    document.detachEvent("onreadystatechange", this.prepareEmptyService);
  }

  query = buildParams(this.futureEmptyFormats, 'includes') + buildParams(this.futureFilledFormats, 'excludes');

  if ((this.futureEmptyFormats.length + this.futureFilledFormats.length) > 0) {
    this.callEmptyService(this.emptyService + this.hash + '?' + query);
    this.cachedFormats = false;
  } else {
    this.cachedFormats = true;
  }
};

Bbanner.prototype.callEmptyService = function (src) {
  var img = new Image();
  img.src = src;
};


Bbanner.prototype.cleanCallbacks = function () {
  this.callbackSuccess = function () {};
  this.callbackFail = function () {};
  this.triggerFail = false;
};

Bbanner.prototype.success = function (callback) {
  this.callbackSuccess = callback;
  return this;
};

Bbanner.prototype.fail = function (callback) {
  if (this.triggerFail) {
    callback();
    this.triggerFail = false;
  } else {
    this.callbackFail = callback;
  }

  return this;
};

Bbanner.prototype.refresh = function () {
  window.googletag.pubads().refresh();
};

window.Bbanner = Bbanner;//exporting to global context
window.ieAdBuffer = {};

if (params !== null) {
  window.r7ad = new Bbanner();
  window.r7adSense = window.r7ad;
  window.r7ad.init(params, true);

  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
      window.r7ad.prepareEmptyService();
    }, false);
  } else {
    document.attachEvent("onreadystatechange", function () {
      window.r7ad.prepareEmptyService();
    });
  }
}

//normalize Firefox 3.XX iframes rendering
if (userAgent.indexOf('Firefox') !== -1 &&
    userAgent.substr(userAgent.indexOf('Firefox/') + 'Firefox/'.length).split(' ')[0].toString().split('.')[0] === '3') {

  window.onload = function () {
    var iframesReload = document.getElementsByTagName('iframe'), i = 0, len = 0;
    for (i = 0, len = iframesReload.length; i < len; i = i + 1) {
      if (iframesReload[i].src !== '') {
        iframesReload[i].src = iframesReload[i].src;
      }
    }
  };
}

		}({
			hash : hash,
			runLoadGAds: true,
			href : 'https://editalconcursosbrasil.com.br/',
			isMobile : isMobile,
			emptyFormats: [""],
			possibleFormats: [""],
			emptyService : 'https://adv.r7.com/empty',
			adsenseHash : '/7542/adsense',
			async: true
		}));
	};
 
 
initAdv();



//20150608-1518-
//20150608-1523-
//20150608-1526-
//20150609-0910-
//20150609-0919-
//20150609-0941-
//20150618-1610-
//20150618-1729-
//20160516-1412-
//20160517-1947-
//20170720-1405-
//20170720-1410-
//20170727-1401-
//20170727-1507-