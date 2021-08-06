(function(w, d, s) {
  try {
    d = w.top.document || d; w = w.top.document ? w.top : w;
  } catch (e) {}
  var ttag = function() {
    var _tt_minSlot = 3,
_tt_slot = window.top.document.querySelectorAll('.the-post .post-content > p');
if (_tt_slot.length < 3) {
	_tt_minSlot = 2;
}
if (_tt_slot.length < 2) {
	_tt_minSlot = 1;
}
    w.teads.ad(99858, {
	"settings": {
		"components": {
			"endScreen": {
				"display": false
			},
			"credits": {
				"display": false
			}
		}
	}
}).page(92155).placement(99858, {"css":"margin: 0px auto 31.35px; max-width: 550px;","format":"inread","slot":{"selector":".the-post .post-content > p","minimum":_tt_minSlot}}).serve();
    w.teads.ad(109969, {
	"settings": {
		"components": {
			"endScreen": {
				"display": false
			},
			"credits": {
				"display": false
			}
		}
	}
}).page(92155).placement(109969, {"css":"margin: 0px auto 31.35px; max-width: 550px;","format":"inread","slot":{"selector":".the-post .post-content > p","minimum":8}}).serve();
  };
  if (w.teads && w.teads.page) { ttag(); }
  else if (!w.teadsscript) {
    var protocol = 'https:';
    s.src = protocol + '//s8t.teads.tv/media/format/v3/teads-format.min.js';
    s.async = true; s.onload = ttag; w.teadsscript = d.getElementsByTagName('head')[0].appendChild(s);
  }
})(window, document, document.createElement('script'));