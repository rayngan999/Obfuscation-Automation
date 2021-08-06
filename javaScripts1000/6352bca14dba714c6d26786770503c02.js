<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Gravitec Page</title>
    <script>
      window.addEventListener("message", (e) => {
        if (e.data.type === "IDENTIFY_EVENT") {
          fetch(
            `https://uapi.gravitec.net/api/sites/followers/identify?appKey=${e.data.appKey}&regID=${e.data.regId}`,
            { credentials: "include" }
          ).then(() => {
            parent.postMessage(
              { type: "IFRAME", message: "wasIdentified" },
              e.data.siteUrl
            );
          });
        }
      });
    </script>
  </head>
  <body></body>
</html>

