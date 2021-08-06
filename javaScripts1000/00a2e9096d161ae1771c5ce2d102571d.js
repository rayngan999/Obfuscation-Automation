<script>
//<![CDATA[
window.gon={};gon.global={"distilleryUrl":"https://distillery.pixlee.co/","distilleryAnalyticsUrl":"https://distillery-analytics.pixlee.com/","pixleeBackendServer":"https://app.pixlee.com/","pixleePhotosServer":"https://photos.pixlee.co/","env":"production","distilleryQueryUrl":"getJSON","distilleryPhotoUrl":"getPhoto","s3BucketUrl":"https://s3.amazonaws.com/static.pixlee.com","pusherKey":"906e09124f79a078ebfd"};
//]]>
</script>
  <script src="https://assets.pixlee.com/assets/ajs_anonymous_helper-89cdd17487c2e56e8e168afc94a4d94a190609b59871df52830c936e9c885e26.js"></script>

<script>
  window.onload = function () {
    var postMessageInterval = setInterval(function() {
      if (typeof analytics !== 'undefined' && analytics.getAnonymousId) {
        var message = {
          function: "pixlee_distinct_user_hash",
          data: true,
          value: analytics.getAnonymousId()
        };
        try {
          parent.postMessage(JSON.stringify(message), '*');
        } catch (e) {
          if (document.referrer.indexOf("converse.com") === -1 && navigator.userAgent.indexOf("Opera") === -1) {
            Sentry.captureException(e);
          }
        } finally {
          clearInterval(postMessageInterval);
        }
      }
    }, 300);
  }
</script>
