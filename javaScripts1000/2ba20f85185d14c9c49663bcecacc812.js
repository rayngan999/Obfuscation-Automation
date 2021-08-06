<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="contact form example">
  <title>Contact Form Example</title>
  <link rel="stylesheet" type="text/css" href="//cdn.intergi.com/report_ad/iframe_style.css">
</head>

<body>
  <div id="content">
    <p id="content_head">Report Advertisement</p>

    <p id="content_text">Thank you for your report.  Your input helps us to provide the best ad experience.  Tell us why you are reporting this ad.</p>

    <form id="gform" method="POST"
    action="https://script.google.com/macros/s/AKfycbxxbOtGFwM2GneyhHsQDtNDejbGbB9t7F3JZwhxgET3sQxyhk0/exec">
      <!-- change the form action to your script url -->

      <div class="content_input">
        <input id="category" name="category" type="radio" value="Inappropriate Content"> Inappropriate content<br/>
        <input id="category" name="category" type="radio" value="Autoplay Audio"> Audio does not start muted<br/>
        <input id="category" name="category" type="radio" value="Broken Ad"> Broken ad<br/>
        <input id="category" name="category" type="radio" value="Other"> Other<br/>      
      </div>

      <div class="content_input">
        <label for="message" id="content_comments">Comments (required): </label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>

      <input type="hidden" id="user-agent" name="user-agent" value="">
      <script>
        var ua = navigator.userAgent;
        document.getElementById("user-agent").value = ua;
      </script>

      <input type="hidden" id="url" name="url" value="">
      <script>
        var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location;
        document.getElementById("url").value = url;
      </script>
    </div>

    <div id="submit_button" class="button_box">
      <button id="report" class="button_success">Report Advertisement</button>
    </div>

  </form>

  <!-- Customise the Thankyou Message People See when they submit the form: -->
  <div style="display:none;" id="thankyou_message">
    <p id="thanks">Thanks.</p>
    <p class="content_input">Your report was sent successfully, and we will review the issue.  We appreciate you helping us deliver a better ad experience.</p>
  </div>

  <!-- Submit the Form to Google Using "AJAX" -->
  <script data-cfasync="false" type="text/javascript"
  src="//cdn.intergi.com/report_ad/form-handler.js"></script>
<!-- END -->

</body>
</html>