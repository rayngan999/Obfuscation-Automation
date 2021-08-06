<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>OB User</title>
  </head>
  <body>
    <script>
      var getQueryParam = function (key, defaultVal) {
        key = key.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

        var regexS, regex, results;
        try {
          regexS = '[\\?&]' + key + '=([^&#]*)';
          regex = new RegExp(regexS, 'i');
          results = regex.exec(decodeURIComponent(window.location.href.replace(/\+/g, ' ')));
          if (results === null) {
            return defaultVal;
          }
          return results[1];
        } catch (ex) {
          return defaultVal;
        }
      };

      var getLsd = function () {
        var computedLsd = window.localStorage ? window.localStorage.getItem('OB:LSU') : null;
        if (window.localStorage && !computedLsd) {
          computedLsd = getQueryParam('lsd', null);
          window.localStorage.setItem('OB:LSU', computedLsd);
        }
        return computedLsd;
      };

      var sendLocalUser = function (computedLsd) {
        if (!computedLsd) return;
        try {
          var msgData = {
            msg: 'OB:LSU',
            data: computedLsd,
          };
          if (window.parent) {
            window.parent.postMessage(JSON.stringify(msgData), '*');
          }
        } catch (e) {
          window.parent.postMessage(JSON.stringify(msgData), '*');
        }
      };

      try {
        var computedLsd = getLsd();
        sendLocalUser(computedLsd);
      } catch (error) {}
    </script>
  </body>
</html>
