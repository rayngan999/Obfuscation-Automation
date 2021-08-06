'use strict';
/* global Raven */
(function (d, elementId, attrName) {
  var e = d.getElementById(elementId);
  var value = e && e.attributes[attrName] && e.attributes[attrName].value;
  if (value) {
    window.onerror = function (
      msg,
      url,
      lineNo,
      columnNo,
      error) {
      if (window.console && window.console.error) {
        console.error([
          'Note the following JS Error is supressed.\n',
          '- msg: ' + msg,
          '- url: ' + url,
          '- lineNo: ' + lineNo,
          '- columnNo: ' + columnNo,
          '- error: ' + error
        ].join('\n'));
      }
      return true; // Stop sending JS error to user
    };

    Raven.config(value).install();
  } else {
    window.Raven = {};
    window.Raven.captureBreadcrumb = function (data) {
      if (window.console && window.console.info) {
        console.info(data);
      }
    };
  }
})(document, 'stackla-sentry', 'data-dsn');
