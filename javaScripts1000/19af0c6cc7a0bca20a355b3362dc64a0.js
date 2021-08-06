<!doctype html>
<html>
<head>
<title>Stripe Internal Communication Channel</title>
<script>
if ('postMessage' in window) {
  var stripeTrack = function(type) {
    var timestamp = Math.round(new Date().getTime() / 1000);
    var report = (new Image()).src = "https://q.stripe.com?event=stripejs-error&type=" +
      encodeURIComponent(type) +
      "&timestamp=" + timestamp +
      "&payment_user_agent=channel.html";
  };

  if (window.parent === window) {
    stripeTrack('ChannelParentError');
    window.Stripe = {earlyError: true};
  }
  else {
    window.onload = function() {
      var matches = window.location.search.match(/(\?|&)stripe_xdm_e=([^&]+)/);
      if (matches && matches.length >= 3) {
        var outerdomain = decodeURIComponent(matches[2]);
        try {
          window.parent.postMessage('stripe:ack', outerdomain);
        }
        catch(e) {
          stripeTrack('ChannelAckError-' + e.toString());
        }
      }
      else {
        stripeTrack('ChannelUrlError');
      }
    }
  }
}
</script>
</head>
<body>
<script src="https://js.stripe.com/v2/"></script>
</body>
</html>
