<!DOCTYPE html>
<html lang="en">
  <script>
    (function () {
      var pixelId = location.search.match(/pixel_id=([^&$]+)/)[1];
      var date = new Date();
      // set to expire in 30 days
      date.setDate(date.getDate() + 30);
      var object = { pixelId: pixelId, expireDate: date.toISOString() };
      localStorage.setItem('orgPixel', JSON.stringify(object));
    })();
  </script>
</html>
