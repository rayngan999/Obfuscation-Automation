<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Cookie</title>
  </head>
  <body>
    <script>
      if (window.parent) {
        if (/thirdparty=yes/.test(document.cookie)) {
          window.parent.postMessage('OB:3PC-true', '*');
        } else {
          window.parent.postMessage('OB:3PC-false', '*');
        }
        document.cookie = 'thirdparty=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }
    </script>
  </body>
</html>
