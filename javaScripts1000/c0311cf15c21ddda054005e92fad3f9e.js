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
      document.cookie = 'thirdparty=yes; Max-Age=3600; SameSite=None; Secure';
      document.location = 'test.html';
    </script>
  </body>
</html>
