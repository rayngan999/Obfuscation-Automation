<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dark Sky Maps</title>
  <!-- <script src="/vendor/jscolor-v2.0.4/jscolor.min.js"></script> -->
  <script src="/vendor/emojione-v2.2.7/emojione.min.js"></script>
  <link href="/vendor/pikaday-v1.4.0/css/pikaday.min.css" rel="stylesheet" type="text/css">
  <link href="/vendor/spectrum-v1.8.0/spectrum.min.css" rel="stylesheet" type="text/css">
  <link href="/css/style.css?version=1.0.0" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet" type="text/css">
  <meta name="description" content="Dark Sky Maps show you the weather forecast around the world at a glance. (And they're pretty, too!) Embed them on your own site today.">
</head>

<body>
  <script>if (window.self != window.top) document.body.className = 'embed'</script>
  <div id="controls">
    <span class="globe-button" onclick="toggle3dGlobe()">
      <span>3D</span>
    </span>


    <span class="search-button">
      <img src="/img/search.png" width="17" height="17" />
    </span>

    <span class="map-field-container custom-dropdown custom-dropdown--small custom-dropdown--white">
      <select id="map_field" class="custom-dropdown__select custom-dropdown__select--white">
        <option data-image-layer="temperature_k" data-vector-layer="temperature" value="temperature" selected="">Temperature</option>
        <option data-image-layer="apparent_temperature_k" data-vector-layer="apparent_temperature" value="apparent_temperature">Feels
          Like Temperature</option>
        <option data-image-layer="cloud_cover" data-vector-layer="cloud_cover" value="cloud_cover">Cloud Cover</option>
        <option data-image-layer="radar" data-vector-layer="radar" value="radar">Precipitation Radar</option>
        <option data-image-layer="precipitation_intensity_dbz" data-vector-layer="precipitation_rate" value="precipitation_rate">Precipitation
          Forecast</option>
        <option data-image-layer="wind_speed_mps" data-vector-layer="wind_speed" value="wind_speed">Wind Speed</option>
        <option data-image-layer="wind_gust_mps" data-vector-layer="wind_gust" value="wind_gust">Wind Gust</option>
        <option data-image-layer="dew_point_k" data-vector-layer="dew_point" value="dew_point">Dew Point</option>
        <option data-image-layer="uv_index" data-vector-layer="uv_index" value="uv_index">UV Index</option>
        <option data-image-layer="sea_level_pressure_pa" data-vector-layer="sea_level_pressure" value="sea_level_pressure">MSL
          Pressure</option>
        <option data-image-layer="ozone_du" data-vector-layer="ozone" value="ozone">Ozone</option>
        <option data-image-layer="emoji" data-vector-layer="emoji" value="emoji">Emoji</option>
      </select>
    </span>

    <span id="map_units_container" class="custom-dropdown custom-dropdown--small custom-dropdown--white">
      <select id="map_units" class="custom-dropdown__select custom-dropdown__select--white">
        <option value="_f">F</option>
        <option value="_c">C</option>
      </select>
    </span>

    <button id="datepicker-button">&nbsp;</button>
    <span class="hour-dropdown custom-dropdown custom-dropdown--small custom-dropdown--white">
      <select id="map_hour" class="custom-dropdown__select custom-dropdown__select--white">
        <option value="0">12AM</option>
        <option value="1">1AM</option>
        <option value="2">2AM</option>
        <option value="3">3AM</option>
        <option value="4">4AM</option>
        <option value="5">5AM</option>
        <option value="6">6AM</option>
        <option value="7">7AM</option>
        <option value="8">8AM</option>
        <option value="9">9AM</option>
        <option value="10">10AM</option>
        <option value="11">11AM</option>
        <option value="12">12PM</option>
        <option value="13">1PM</option>
        <option value="14">2PM</option>
        <option value="15">3PM</option>
        <option value="16">4PM</option>
        <option value="17">5PM</option>
        <option value="18">6PM</option>
        <option value="19">7PM</option>
        <option value="20">8PM</option>
        <option value="21">9PM</option>
        <option value="22">10PM</option>
        <option value="23">11PM</option>
      </select>
    </span>

    <input type="text" style="display: none;" disabled id="datepicker">

    <div class="change-hour-controls">
      <a id="left-arrow" href="javascript:changeHour(-3)"></a>
      <button id="now-button">Now</button>
      <a id="right-arrow" href="javascript:changeHour(3)"></a>
    </div>

    <a href="https://darksky.net" target="_blank" class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
        <path fill="#444" d="M 485 165 C 526 154 568 149 597 147 545 68 512 18 496 0 496 0 493 61 371 210 393 198 438 177 485 165 Z"></path>
        <path fill="#444" d="M 460 868 C 434 800 427 722 427 722 L 387 745 C 387 745 368 680 361 614 354 550 361 486 361 486 L 308 507 C 308 507 304 430 317 356 325 307 340 261 349 236 348 238 346 240 344 242 236 367 144 491 144 644 144 841 303 1000 499 1000 509 1000 519 1000 529 999 513 974 481 923 460 868 Z"></path>
        <path fill="#444" d="M 643 216 C 631 198 620 181 610 166 590 187 561 222 537 259 502 312 482 370 482 370 L 560 346 C 560 346 519 417 499 491 480 555 482 624 482 624 L 536 599 C 536 599 512 688 510 792 508 883 526 965 535 998 714 980 853 829 855 644 856 484 739 359 643 216 Z"></path>
      </svg>
      <span>Dark Sky</span>
    </a>
  </div>

  <div id="location-search" style="display:none">
    <form onsubmit="return locationSearch()">
      <input type="text" name="location" type="search" placeholder="Enter a location" />
      <span class="search-button" onclick="locationSearch()">
        <img src="/img/search.png" width="17" height="17" />
      </span>
    </form>
  </div>

  <div id="map"></div>
  <script src="/vendor/jquery-v3.1.0/jquery.min.js"></script>
  <script src="/vendor/ol-custom.js"></script>
  <script src="/vendor/ol3-cesium-v1.18/Cesium/Cesium.js"></script>
  <script src="/vendor/ol3-cesium-v1.18/ol3cesium.js"></script>
  <script src="/vendor/jquery-ui-v1.12.0/jquery-ui.js"></script>
  <script src="/vendor/moment.js-v2.11.2/moment.min.js"></script>
  <script src="/vendor/pikaday-v1.4.0/pikaday.min.js"></script>
  <script src="/vendor/spectrum-v1.8.0/spectrum.min.js"></script>
  <script src="/vendor/js.cookie.js"></script>
  <script src="/js/vector-tile.js"></script>
  <script src="/js/index.js?version=1.0.0"></script>

</body>

</html>
