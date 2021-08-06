var _cnx = window._cnx || [];
_cnx.cdnPath = 'https:' === document.location.protocol ? 'https://resource.bizrate.com/static/d053709f' : 'http://resource.bizrate.com/static/d053709f';

function getScript(url, callback) {
  var sc,
    head = document.getElementsByTagName('head')[0] || document.documentElement;
  sc = document.createElement('script');
  sc.type = 'text/javascript';
  sc.id = getUniqueId();
  if (callback !== undefined) {
    if (sc.readyState) {
      sc.onreadystatechange = function () {
        if (sc.readyState == 'loaded' || sc.readyState == 'complete') {
          sc.onreadystatechange = null;
          callback();
        }
      };
    } else {
      sc.onload = function() {
        callback();
      };
    }
  }
  sc.src = url;
  head.appendChild(sc);
};

function getJSONP(url, success) {
  var ud = '_' + (new Date()).getTime(),
    script = document.createElement('script'),
    head = document.getElementsByTagName('head')[0] || document.documentElement;

  window[ud] = function (data) {
    head.removeChild(script);
    success && success(data);
  };

  script.src = url.replace('callback=?', 'callback=' + ud);
  head.appendChild(script);
};

function getUniqueId() {
  var ta = document.createElement('textarea');
  ta.innerHTML = '&#115;&#105;&#109;&#112;&#108;&#121;&#110;&#117;&#116;&#116;&#121;-20170324-' + (new Date()).getTime();
  return ta.innerHTML;
};

var mainURL = _cnx.cdnPath + '/dist/main.js';
var mainCallback = function () {
  var _cnx_old = _cnx;

  SIP.Params.servicePath = 'https://insights.bizrate.com';
  SIP.Params.stffUrl = '//stff.bizrate.com/stff'

  _cnx = SIP.Connexity;

  _cnx.push.apply(window._cnx, _cnx_old);
  _cnx.push(['surveyType', SIP.Params.surveyType]);
  if (!SIP.Params.mid || !SIP.Params.surveyType) { return; }

  window.ripsCallback = function (data) {
    var templateURL = [SIP.Params.servicePath, '/js/invite-template?mid=', SIP.Params.mid, '&surveyType=', SIP.Params.surveyType, '&pageId=', SIP.Params.pageId, '&inviteType=', SIP.Params.inviteType, '&segment=', SIP.Params.segment, '&callback=?'];

    if (data !== undefined) {
      templateURL.push('&ripsToken=' + data['tid']);
    }

    templateURL = templateURL.join('');

    var templateCallback = function (template) {
      template.init();
      SIP.Util.log({templateId: SIP.Params.templateId});
    };

    getJSONP(templateURL, templateCallback);
  }

  if (false){
    SIP.Rips.setDudeURL('https://dude.connexity.net/');
    SIP.Rips.setDudeTimeout(3000);
    SIP.Rips.setDudeFields('GENDER,YOB,CITY,ZIP,RGN');
    SIP.Rips.getUserToken('ripsCallback');
  } else {
    window.ripsCallback();
  }

};

getScript(mainURL, mainCallback);
