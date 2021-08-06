/* eslint-disable max-len */
/* eslint-disable no-restricted-globals */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
window._tfsc = window._tfsc || {};
_tfsc.staging = (function () {
  if (
    location.host.match(/.*\.kdc\.capitalone\.com/) != null
    || (location.host.match(/.*\.cloud.capitalone.com/) != null
      && location.host.match(/.*prod.*\.cloud.capitalone.com/) == null
      && location.host.match(/quickcheck-canada\.cloud\.capitalone\.com/) == null)
    || location.host.match(/.*\.clouddqtext.capitalone.com/) != null
    || location.host.match(/servicesbeta\.capitalone\.com/) != null
    /* This is to route COS BT chats to EASE */ || location.host.match(/servicesbeta1\.capitalone\.com/) != null
    /* This is to route COS BT chats to EASE */ || location.host.match(/servicesbeta2\.capitalone\.com/) != null
    /* This is to route COS BT chats to EASE */ || location.host.match(/qamain-cdn\.capitalone\.com/) != null
    /* This is to route new COS chats to EASE */ || location.host.match(/paribus-staging\.com/) != null
    /* Paribus domain */ || location.host.match(/apply-cloud-qa\.capitalone\.com/) != null
    /* Bank- Account Opening domain */ || location.host.match(/verified-it\.capitalone\.com/) != null
    /* enrollment/ sign-in/ password reset page */ || location.host.match(/.*\.clouddqt\.capitalone\.com/) != null
    || location.host.match(/.*\.clouddqt\.capitalone\.com/) != null
    || location.host.match(/.*\.aws-card-dqa\.cb4good\.com/) != null
    || location.host.match(/.*\.aws-card-dqa\.capitalonegslbex\.com/) != null
    || location.host.match(/findyourcard-alpha\.capitalone\.ca/) != null
    || location.host.match(/www-qa\.capitalone\.ca/) != null
    || location.host.match(/wwwbeta\.capitalone\.ca/) != null
  ) {
    return [location.host];
  }
  return [];
}());
/* www.capitalone.com is for routing new COS chats to EASE */
_tfsc.production = [
  'myaccounts.capitalone.com',
  'myaccounts-verify.capitalone.com',
  'services.capitalone.com',
  'services1.capitalone.com',
  'services2.capitalone.com',
  'www.capitalone.com',
  'paribus.co',
  'apply.capitalone.com',
  'verified.capitalone.com',
  'applynow.capitalone.ca',
  'applynow-beta.capitalone.ca',
  'dynamic-app-canada-waf-prod-us-west-2.aws-card.capitalonegslbex.com',
  'dynamic-app-canada-waf-prod-us-east-1.aws-card.capitalonegslbex.com',
  'findyourcard-alpha.capitalone.ca',
  'findyourcard-beta.capitalone.ca',
  'findyourcard.capitalone.ca',
  'findyourcard1.capitalone.ca',
  'findyourcard2.capitalone.ca',
  'findyourcard3.capitalone.ca',
  'quickcheck-canada.cloud.capitalone.com',
  'quickcheck-canada-prod.cloud.capitalone.com',
  'quickcheck-canada-prod-east.cloud.capitalone.com',
  'quickcheck-canada-prod-west.cloud.capitalone.com',
  'www.capitalone.ca',
];

_tfsc.STAGING_URL = 'd2j8jkom7xmn9n.cloudfront.net/psp/cap1enterprise-v1-001/247px.js';
_tfsc.PRODUCTION_URL = 'd1af033869koo7.cloudfront.net/psp/cap1enterprise-v1-001/247px.js';
_tfsc.CUSTOM_TRACK_URL = 'd34xv0c5kwdgb0.cloudfront.net/psp/cap1enterprise-v1-001/cpxt.js';
_tfsc.COOKIE_NAME = 'sn.pxpath';

_tfsc.j = b => {
  const e = `${b}=`;
  const a = document.cookie.split(';');
  for (let d = 0; d < a.length; d++) {
    let f = a[d];
    while (f.charAt(0) === ' ') {
      f = f.substring(1, f.length);
    }
    if (f.indexOf(e) === 0) {
      return f.substring(e.length, f.length);
    }
  }
  return null;
};
_tfsc.getPath = () => {
  const d = _tfsc.j(_tfsc.COOKIE_NAME);
  // eslint-disable-next-line max-len
  const e = /^(d1af033869koo7\.cloudfront\.net|d2j8jkom7xmn9n\.cloudfront\.net|sd-qa\.s3\.amazonaws\.com|dev-sd\.s3\.amazonaws\.com|d34xv0c5kwdgb0\.cloudfront\.net)\/.*/i;
  if (d != null && e.test(d)) {
    return d;
  }
  for (let b = 0; b < _tfsc.staging.length; b++) {
    if (location.host === _tfsc.staging[b]) {
      return _tfsc.STAGING_URL;
    }
  }
  for (let a = 0; a < _tfsc.production.length; a++) {
    if (location.host === _tfsc.production[a]) {
      return _tfsc.PRODUCTION_URL;
    }
  }
  const c = encodeURIComponent(window.location.href.substring(0, 100));
  return `${_tfsc.CUSTOM_TRACK_URL}?msg=DOMAIN_CONFIG_NOT_FOUND&pageUrl=${c}`;
};
(function () {
  const c = document.createElement('script');
  c.type = 'text/javascript';
  c.async = true;
  c.src = `${document.location.protocol}//${_tfsc.getPath()}`;
  const a = document.getElementsByTagName('script')[0];
  a.parentNode.insertBefore(c, a);
}());
