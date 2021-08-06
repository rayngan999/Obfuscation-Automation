<!doctype html>
<html>
<body>
<script>
      postMessageToAllAncestorWindows('demand-supply//ds-message')

      function postMessageToAllAncestorWindows (message) {
        var parent = window.parent;
        while (parent !== parent.parent) {
          parent.postMessage(message, '*');
          parent = parent.parent;
        }
        parent.postMessage(message, '*');
      }
    </script>
</body>
</html>
