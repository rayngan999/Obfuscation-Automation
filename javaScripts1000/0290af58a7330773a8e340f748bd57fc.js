'use strict';

window.pnsw = function() {
  function _options(options) {
  return {
    method: 'POST',
    credentials: 'include',
    mode: 'no-cors',
    body: JSON.stringify(options)
  };
}

  function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    };
    return outputArray;
  }

  function hexString(buffer) {
    const byteArray = new Uint8Array(buffer);
    const hexCodes = [...byteArray].map(value => {
      const hexCode = value.toString(16);
      const paddedHexCode = hexCode.padStart(2, '0');
      return paddedHexCode;
    });
    return hexCodes.join('');
  }

  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  function setCookie(name, value, options) {
    options = options || {};
    var expires = options.expires;
    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires * 1000);
      expires = options.expires = d;
    };
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    };
    value = encodeURIComponent(value);
    var updatedCookie = name + "=" + value;
    for (var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      };
    };
    document.cookie = updatedCookie;
  };

  function getUTM(params) {
    let utms = {};
    for (const key of params.keys()) {
      if (['utm_campaign', 'utm_source', 'utm_medium', 'utm_content', 'utm_term'].includes(key)) {
        utms[key] = params.get(key);
      }
    }
    return utms;
  };

  function toBool(value) {
    var falseValues = ['false', 0, undefined, '0', 'no', 'null', null];
    if (typeof value === 'string' || value instanceof String) {
      value = value.toLowerCase();
    }
    return !falseValues.includes(value, falseValues)
  }

  

  const pnVersionI = '0.0.12';
  const pnUserId = document.currentScript.getAttribute('data-user-id');
  const pnBaseUrl = document.currentScript.src.split('/')[2];
  const pnPKey = document.currentScript.getAttribute('data-key') || 'BCNxh9SgAvFVqh-trBibxfBpKwn0blbgQQPal0xQ6gVYQbsDrmuJdwUym08ZHHIv5k_EQG9_Wij-C_L13ambaMo';
  const pnAppKey = urlBase64ToUint8Array(pnPKey);
  const pnStatUrl = `https://${pnBaseUrl}/pn/stats_init/?v=${pnVersionI}`;
  const pnUrlParams = new URLSearchParams(window.location.search);
  const pnManualStart = toBool(document.currentScript.getAttribute('data-manual-start'));
  let isRequestPermission = false;

  function pnSubscribe(manualStart) {
    if (pnUserId && 'serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.register(`/pnsw.js?url=${pnBaseUrl}&cache=${Math.trunc(+new Date / 1000000)}`, {updateViaCache: 'none'})
        .then(registration => {
          return registration.pushManager.getSubscription()
            .then(subscription => {
              if (subscription) {
                const currentAppKey = new Uint8Array(subscription.options.applicationServerKey);
                if (pnAppKey.toString() == currentAppKey.toString()) {
                  return subscription;
                } else {
                  subscription.unsubscribe()
                  .then(successful => {
                    fetch(pnStatUrl+'&t', _options(Object.assign({action: 'transfer'}, getUTM(pnUrlParams))));
                    document.dispatchEvent(new CustomEvent('pnsw:subs:resubscribe'));
                  });
                }
              } else if (manualStart) {
                  return;
              } else {
                if (Notification.permission == 'default') {
                  isRequestPermission = true;
                  fetch(pnStatUrl+'&r', _options(Object.assign({action: 'request'}, getUTM(pnUrlParams))));
                  document.dispatchEvent(new CustomEvent('pnsw:subs:request'));
                }
              }
              return registration.pushManager.subscribe({
                userVisibleOnly: true, applicationServerKey: pnAppKey
              })
            })
            .then(subscription => {
              if (!subscription) {
                return;
              }
              if (isRequestPermission) {
                fetch(pnStatUrl+'&g', _options(Object.assign({'action': 'grant'}, getUTM(pnUrlParams))));
                document.dispatchEvent(new CustomEvent('pnsw:subs:granted'));
              }
              const data = subscription.toJSON().keys.auth;
              crypto.subtle.digest('SHA-256', new TextEncoder().encode(data))
                .then(hash => {
                  const pnHash = hexString(hash);
                  if (getCookie('pn_hash') != pnHash) {
                    const url = `https://${pnBaseUrl}/pn/add/${pnUserId}/`;
                    const options = {
                      method: 'POST',
                      credentials: 'include',
                      body: JSON.stringify(
                        Object.assign({subscription: subscription, appKey: pnPKey}, getUTM(pnUrlParams))
                      )
                    };
                    fetch(url, options)
                      .then(response => {
                        response.json()
                          .then(data => {
                            setCookie('pn_hash', pnHash, {path:'/', expires: 60*60*24*356});
                          }).catch(error => {});
                      })
                  }
                })
            })
        })
        .catch(error => {
          if (
            isRequestPermission && (
              Notification.permission == 'denied' || (
                Notification.permission == 'default' && error.message.includes('permission denied')
              )
            )
          ) {
            fetch(pnStatUrl+'&d', _options(Object.assign({'action': 'deny'}, getUTM(pnUrlParams))));
            document.dispatchEvent(new CustomEvent('pnsw:subs:denied'));
          }
        })
    }
  }

  pnSubscribe(pnManualStart);

  return {
    subscribe: function() {
      pnSubscribe(false);
    }
  };
}();
