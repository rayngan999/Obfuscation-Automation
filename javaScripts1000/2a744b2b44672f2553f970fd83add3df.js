var isEmbedded = (window.self != window.top)
var pushstate = true;
var globalUnit = "us"; // alternate option: si
var globalHourOffset = moment().utcOffset() / 60;
var globalTime;
var globalHour;
var globalIcon;
var globalIconMarker;
var datePicker;
var map = null;
var retina = window.devicePixelRatio >= 2;
var minZoom = 2;
var maxZoom = 11;
var minZoom3d = 450000;
var defaultZoom3d = 9900000.0;
var ol3d = null, is_3d = false;
var $labelView3d = null,
    labels3d = [],
    globeOccluder;

var tileLayer = null,
    baseLayer = null,
    vectorTileLayer = null,
    markerLayer = null,
    labelLayer = null,
    timeExplicitlySet = false,
    field, lat, lon, zoom, time

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function is_radar_condition(condition) {
  return condition.indexOf("radar") > -1;
}

function assembleBasemapQueryParams() {
  var min = getParameterByName('vmin');
  var max = getParameterByName('vmax');
  var hueShift = getParameterByName('hue-shift');
  var saturation = getParameterByName('saturation');
  var invert = getParameterByName('invert');

  var queryParams = [];
  if (min) {
    queryParams.push("min="+min);
  }
  if (max) {
    queryParams.push("max="+max);
  }

  if (hueShift) {
    queryParams.push("hue-shift="+hueShift);
  }

  if(saturation) {
    queryParams.push("saturation="+saturation);
  }

  if(invert) {
    queryParams.push("invert");
  }

  var queryString = queryParams.join("&");
  return queryString ? "?"+queryString : '';
}

function assembleQueryParams() {
  var min = getParameterByName('min');
  var max = getParameterByName('max');
  var colors = getParameterByName('colors');

  var queryParams = [];
  if (min) {
    queryParams.push("min="+min);
  }
  if (max) {
    queryParams.push("max="+max);
  }

  if (colors) {
    queryParams.push("colors="+colors);
  }

  var queryString = queryParams.join("&");
  return queryString ? "?"+queryString : '';
}

function getLabelField() {
  var conditionSelect = document.getElementById('map_field'),
      selectedOption = conditionSelect.options[conditionSelect.selectedIndex],
      imageField = selectedOption.dataset.imageLayer,
      labelField = selectedOption.dataset.vectorLayer,
      unitSelect = document.getElementById('map_units');

  if (unitSelect.selectedIndex > -1) {
    var unitOption = unitSelect.options[unitSelect.selectedIndex].value;
    labelField = labelField + unitOption;
  }
  return labelField;
}

function imageFormatForField(field) {
  switch(field) {
    case 'radar':
    case 'radar_nws':
    case 'precipitation_intensity_dbz':
    case 'emoji':
      return 'png';

    default:
      return 'jpg';
  }
}

function updateMap() {

  var conditionSelect = document.getElementById('map_field'),
      selectedOption = conditionSelect.options[conditionSelect.selectedIndex],
      imageField = selectedOption.dataset.imageLayer,
      labelField = selectedOption.dataset.vectorLayer,
      unitSelect = document.getElementById('map_units'),
      marker = getQueryVariable("marker"),
      coords,
      LeafIcon,
      latlng,
      srcUrl;

  if (unitSelect.selectedIndex > -1) {
    var unitOption = unitSelect.options[unitSelect.selectedIndex].value;
    labelField = labelField + unitOption;
    globalUnit = globalUnitFromFieldUnit(unitOption);
  }

  if(is_radar_condition(imageField)) {
    time = 'now'
  } else {
    time = globalTime
  }

  field = selectedOption.value

  if(tileLayer) map.removeLayer(tileLayer)
  if(baseLayer) map.removeLayer(baseLayer)
  if(vectorTileLayer) map.removeLayer(vectorTileLayer)

  var static_domains = ["https://maps-raw.darksky.net"],
      weather_domains = ["https://maps-raw.darksky.net"],
      queryParams = assembleQueryParams();
  var basemapQueryParams = assembleBasemapQueryParams();

  // Add cache string
  var cacheMin = is_radar_condition(imageField) ? 2 : 20;
  var thisSecond = Math.round(Date.now() / 1000);
  var cacheTime = thisSecond - (thisSecond % (cacheMin*60));

  // Hidden cache-bust option for radar.
  if (field === "radar_uncached") {
    cacheTime = thisSecond;
  }
  queryParams = queryParams ? (queryString + "&" + cacheTime) : ('?' + cacheTime);


  // For the precip fields, we want to add the base layer under
  var bottom_base_layer = ['radar', 'radar_nws', 'emoji', 'precipitation_intensity_dbz', 'snow_depth'].indexOf(imageField) != -1

  if(bottom_base_layer) {
    var opts = {
      urls: static_domains.map(function(d) {return d+'/static/base/{z}/{x}/{y}.png'+basemapQueryParams}),
      attributions: "<a href=\"https://darksky.net/\" target=\"_blank\">Â© Dark Sky</a> "+
                    "<a href=\"http://www.openstreetmap.org/about/\" target=\"_blank\">Â© OpenStreetMap</a> "+
                    "Emoji provided free by <a href=\"http://www.emojione.com/\" target=\"_blank\">EmojiOne</a>"
    }

    if(!is_3d) {
      opts.tilePixelRatio = retina ? 2 : 1
      opts.tileSize = retina ? [128,128] : [256,256]
      opts.maxZoom = 11
    }

    baseLayer = new ol.layer.Tile({
      source: new ol.source.XYZ(opts)
    })
    map.addLayer(baseLayer)
  }

  tileLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      urls: weather_domains.map(function(d) {return d+'/'+time+'/'+imageField+'/{z}/{x}/{y}.'+imageFormatForField(imageField)+queryParams}),
      maxZoom: is_radar_condition(imageField) ? 7 : 12,
    })
  })
  map.addLayer(tileLayer)

  if(!bottom_base_layer) {
    var opts = {
      urls: static_domains.map(function(d) {return d+'/static/overlay/{z}/{x}/{y}.png'}),
      attributions: "<a href=\"https://darksky.net/\" target=\"_blank\">Â© Dark Sky</a> "+
                    "<a href=\"http://www.openstreetmap.org/about/\" target=\"_blank\">Â© OpenStreetMap</a>"
    }

    if(!is_3d) {
      opts.tilePixelRatio = retina ? 2 : 1
      opts.tileSize = retina ? [128,128] : [256,256]
      opts.maxZoom = 11
    }

    baseLayer = new ol.layer.Tile({
      source: new ol.source.XYZ(opts)
    })
    map.addLayer(baseLayer)
  }

  // Set 3d globe background color
  if(is_3d) {
    if(['radar', 'radar_nws', 'precipitation_rate', 'radar_uncached'].indexOf(field) != -1) {
      ol3d.getCesiumScene().backgroundColor = new Cesium.Color(0.97, 0.97, 0.97, 1)
    } else {
      ol3d.getCesiumScene().backgroundColor = new Cesium.Color(0, 0, 0, 1)
    }
  }

  if(!is_3d) {
    var userDefinedLabel = {
      location: getParameterByName("marker"),
      label: getParameterByName("marker-name"),
      hide: getParameterByName("marker-hide-value")
    }
    vectorTileLayer = createLabelLayer(map, weather_domains, time, cacheTime, labelField, userDefinedLabel)
    map.addLayer(vectorTileLayer)
  }

   // new ol.layer.Tile({
   //   map: map,
   //   source: new ol.source.TileDebug({
   //      projection: 'EPSG:3857',
   //      tileGrid: new ol.source.OSM().getTileGrid()
   //    })
   //  })

   $("#embed-popup > p:last-child").trigger("click");

  updateURL()
}

function updateUnits(mapValue, forGen) {
  var $mapUnitsContainer, $mapUnits, $mapUnitsGeneratorContainer, $mapUnitsGenerator, options;

  // Container and unit dropdown for embed generation
  $mapUnitsGeneratorContainer = $("#map-units-generator-container");
  $mapUnitsGenerator = $("#map-units-generator");

  // Container and unit dropdown for main controls
  $mapUnitsContainer = $("#map_units_container");
  $mapUnits = $("#map_units");

  $mapUnitsContainer.show();
  $mapUnitsGeneratorContainer.show();
  $mapUnits.empty();
  $mapUnitsGenerator.empty();

  $("#default-units-generator").show();
  $("#generate-embed").css("margin-top", "0");

  switch (mapValue) {
    case "sea_level_pressure":
      options = "<option value='_hpa'>hPa</option>";
      options += "<option value='_inhg'>inHg</option>";
      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
    break;
    case "apparent_temperature":
    case "temperature":
      if (globalUnit === "us") {
        options = "<option value='_f'>Â°F</option>";
        options += "<option value='_c'>Â°C</option>";
      } else {
        options = "<option value='_c'>Â°C</option>";
        options += "<option value='_f'>Â°F</option>";
      }

      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
    break;
    case "dew_point":
      if (globalUnit === "us") {
        options = "<option value='_f'>Â°F</option>";
        options += "<option value='_c'>Â°C</option>";
      } else {
        options = "<option value='_c'>Â°C</option>";
        options += "<option value='_f'>Â°F</option>";
      }
      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
    break;
    case "wind_speed":
      if (globalUnit === "us") {
        options = "<option value='_mph'>mph</option>";
        options += "<option value='_kmph'>km/h</option>";
      } else {
        options = "<option value='_kmph'>km/h</option>";
        options += "<option value='_mph'>mph</option>";
      }
      options += "<option value='_mps'>m/s</option>";
      options += "<option value='_kn'>kn</option>";

      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
    break;
    case "wind_gust":
      if (globalUnit === "us") {
        options = "<option value='_mph'>mph</option>";
        options += "<option value='_kmph'>km/h</option>";
      } else {
        options = "<option value='_kmph'>km/h</option>";
        options += "<option value='_mph'>mph</option>";
      }
      options += "<option value='_mps'>m/s</option>";
      options += "<option value='_kn'>kn</option>";
      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
    break;
    case "visibility":
      if (globalUnit === "us") {
        options = "<option value='_mi'>mi</option>";
        options += "<option value='_km'>km</option>";
      } else {
        options = "<option value='_km'>km</option>";
        options += "<option value='_mi'>mi</option>";
      }
      options += "<option value='_m'>m</option>";
      options += "<option value='_ft'>ft</option>";

      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
    break;
    case "precipitation_rate":
      options += "<option value='_mmph'>mm/h</option>";
      options += "<option value='_inph'>in/h</option>";
      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
    break;
    case "ozone":
      options += "<option value='_du'>DU</option>"
      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
    break;
    case "snow_depth":
      options += "<option value='_in'>in</option>";
      options += "<option value='_cm'>cm</option>";
      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
      break;
    case "ugly_temperature":
      options = "<option value='_f'>Â°F</option>";
      options += "<option value='_c'>Â°C</option>";
      $mapUnits.append(options);
      $mapUnitsGenerator.append(options);
      break;
    default:
      $mapUnitsContainer.hide();
      $("#default-units-generator").hide();
      $("#generate-embed").css("margin-top", "10px");
    break;
  }
}

function enableOrDisableTimeControls(mapField) {
  if(is_radar_condition(mapField)) {
    setGlobalTime(Math.round(Date.now() / 1000))

    $(".hour-dropdown").addClass("disabled")
    $("#datepicker-button").addClass("disabled")
    $(".change-hour-controls").addClass("disabled")

  } else {
    $(".hour-dropdown").removeClass("disabled")
    $("#datepicker-button").removeClass("disabled")
    $(".change-hour-controls").removeClass("disabled")
  }
}

function viewportWidth() {
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth;
  return x;
}

function mapInit() {
  if($labelView3d)
    $labelView3d.remove()

  if(ol3d) {
    ol3d.setEnabled(false)
    ol3d = null
  }

  if(map) {
    map.setTarget(null)
    map = null
  }

  map = new ol.Map({
    target: 'map',
    view: new ol.View({
      center: ol.proj.fromLonLat([lon, lat]),
      zoom: zoom,
      minZoom: minZoom,
      maxZoom: maxZoom
    }),
    loadTilesWhileAnimating: true,
    loadTilesWhileInteracting: true,
    interactions: ol.interaction.defaults({mouseWheelZoom:(!isEmbedded)}) // disable scrollwheel zoom inside the embed
  })

  // 3D Globe?
  if(is_3d) {

    // Add label layer
    $labelView3d = $('<div id="labelView3d"></div>').appendTo($('body'))

    // We have to remove the broke tile layer first
    if(vectorTileLayer) map.removeLayer(vectorTileLayer)

    if(!ol3d) {
      ol3d = new olcs.OLCesium({map: map})
      ol3d.setEnabled(true)
      if(retina) ol3d.setResolutionScale(2)

      ol3d.getCamera().setAltitude(zoom > maxZoom ? Math.max(minZoom3d, zoom) : 9900000.0)

      var scene  = ol3d.getCesiumScene(),
          camera = scene.camera

      scene.skyAtmosphere.show = false
      // scene.screenSpaceCameraController.enableTilt = false
      scene.screenSpaceCameraController.minimumZoomDistance = minZoom3d

      globeOccluder = new Cesium.EllipsoidalOccluder(scene.globe.ellipsoid)

      // Add some listeners for updating labels and the URL
      camera.moveStart.addEventListener(function() {
        scene.postRender.addEventListener(update3dLabels)
      })
      camera.moveEnd.addEventListener(function() {
        scene.postRender.removeEventListener(update3dLabels)
      })
      $(window).resize(update3dLabels)

      camera.moveEnd.addEventListener(load3dLabels)

      var loadOnResizeTimeout = null
      $(window).resize(function() {
        update3dLabels()
        clearTimeout(loadOnResizeTimeout)
        loadOnResizeTimeout = setTimeout(load3dLabels, 500)
      })

      camera.moveEnd.addEventListener(updateURL)
    }
  }

  $('#controls .globe-button span').html(is_3d ? '2D' : '3D')
}

function toggle3dGlobe() {
  is_3d = !is_3d
  mapInit()

  if(is_3d) {
    $('body').addClass('globe')
    ol3d.getCamera().setAltitude(9900000.0)
    ol3d.getCamera().setPosition(ol.proj.transform([lon,lat], 'EPSG:4326', 'EPSG:3857'))
  } else {
    $('body').removeClass('globe')
    var view = map.getView()
    view.setZoom(4)
    view.setCenter(ol.proj.transform([lon,lat], 'EPSG:4326', 'EPSG:3857'))
  }

  firstUpdateURL = false
  updateURL()
  updateMap()
}


var firstUpdateURL = false

function updateURL(optionalQueryParams) {

  if(!window.history || !window.history.pushState)
    return

  if(!firstUpdateURL && !is_3d) {
    firstUpdateURL = true
    setTimeout(function() {
      map.on('moveend', function() {
        if(is_3d) return
        updateURL()
        enableOrDisableZoomControls()
      })
    }, 0)
    return
  }

  var time = globalTime
  var date = new Date(1000*time)
  var date_str = date.getUTCFullYear()+'-'+(date.getUTCMonth()+1)+'-'+date.getUTCDate()
  var mapView = map.getView()
  var center = ol.proj.transform(mapView.getCenter(), 'EPSG:900913', 'EPSG:4326')
  lon = center[0]
  lat = center[1]
  var zoom = is_3d ? Math.round(ol3d.getCamera().getAltitude()) : mapView.getZoom()

  var field = $("#map_field option:selected").val()

  var params = (field || 'temperature_k')

  if(timeExplicitlySet)
    params += ','+date_str+','+date.getUTCHours()

  // Build query string
  var query_params = getAllQueryVariables()

  if(is_3d) {
    query_params['3d'] = true
  } else {
    delete query_params['3d']
  }

  if(optionalQueryParams) {
    for(var prop in optionalQueryParams) {
      if(optionalQueryParams[prop] == null) {
        delete query_params[prop]
      } else {
        query_params[prop] = optionalQueryParams[prop]
      }
    }
  }

  var query_arr = []
  for(var prop in query_params) {
    if(query_params[prop] === true) {
      query_arr.push(prop)
    } else {
      query_arr.push(prop+'='+query_params[prop])
    }
  }

  var query_str = ''
  if(query_arr.length > 0) {
    query_str = '?'+query_arr.join('&')
  }

  params += ','+lat.toFixed(3)+','+lon.toFixed(3)+','+zoom+query_str

  var old_params = window.location.href.split('@')[1]
  if(old_params == params)
    return

  if(pushstate) {
    window.history.pushState(null, null, '/@'+params)
    updateGeneratorLocation(lat.toFixed(3), lon.toFixed(3));
  } else {
    window.location = window.location;
  }



}

function enableOrDisableZoomControls() {

  var zoom = map.getView().getZoom()

  $('.ol-zoom .ol-zoom-in, .ol-zoom .ol-zoom-out').removeClass('disabled')

  if(zoom >= maxZoom) {
    $('.ol-zoom .ol-zoom-in').addClass('disabled')
  } else if (zoom <= minZoom) {
    $('.ol-zoom .ol-zoom-out').addClass('disabled')
  }
}

function parseURL() {

  var params = window.location.href.split('@')[1]
  if(!params)
    return null

  var lat, lon, zoom, field, time, date_str, hour, returnObj = {}

  // Get rid of any trailing params before trying to ',' split in case
  // complex params passed in
  params = params.split('?')[0];
  params = params.split(',')

  field = params[0]

  // Did the URL set a time?
  if(params.length == 6) {
    timeExplicitlySet = true

    date_str = params[1].split('-')
    hour = params[2]
    time = Math.round(Date.UTC(+date_str[0], +date_str[1] - 1, +date_str[2], hour ? +hour : 0) / 1000)

    lat = params[3]
    lon = params[4]
    zoom = params[5]

  } else {
    lat = params[1]
    lon = params[2]
    zoom = params[3]
  }

  return {
    field: field,
    time: time,
    lat: lat ? +lat : null,
    lon: lon ? +lon : null,
    zoom: zoom ? +zoom : null
  }
}

function loadFromURL() {
  var url_params = parseURL()
  var hour

  if(url_params) {
    lat = url_params.lat
    lon = url_params.lon
    zoom = url_params.zoom
    field = url_params.field
    time = url_params.time
  }

  if(!field) field = 'temperature_k'
  if(lat == null) lat = 39.0
  if(lon == null) lon = -95.0
  if(!zoom) zoom = 4
  if(!time) {
    time = Math.round(nowDateRoundedToNearestHour().getTime() / 1000)
  }

  globalTime = time
  globalHour = new Date(1000*globalTime).getHours()

  $("#map_hour option[value='" + globalHour + "']").prop("selected", true)

  var query_params = getAllQueryVariables()
  if(query_params['3d']) {
    is_3d = true
    $('body').addClass('globe')
  }

  updateGeneratorLocation(lat, lon)
  populateSelects()

  if(!map) {
    mapInit()
  } else {
    var view = map.getView()
    view.setCenter(ol.proj.transform([lon,lat], 'EPSG:4326', 'EPSG:3857'))
    view.setZoom(zoom)
  }

  var mapField = document.getElementById("map_field").value;
  updateUnits(mapField);
  enableOrDisableTimeControls(mapField);
  updateMap()
}

function populateSelects() {
  if(field) {
    $('#map_field option[value="'+field+'"]').prop('selected', true)
  }
}

function nowDateRoundedToNearestHour() {
  var date = new Date()
  var h = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600 + date.getMilliseconds() / 3600000
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMilliseconds(0)
  date.setHours(Math.round(h))
  return date
}

function setGlobalTime(time) {
  globalTime = Math.round(time / 3600) * 3600 // Round to nearest hour
  var date = new Date(1000*globalTime)
  datePicker.setDate(date)
  $("#datepicker-button").html(moment(date).format("MMM D").toString())
  document.getElementById('map_hour').value = date.getHours()
}

function changeHour(hours) {
  timeExplicitlySet = true
  setGlobalTime(globalTime + 3600 * hours)
  updateMap()
}

function updateSelectHour(hours) {
  timeExplicitlySet = true
  updateMap()
}

function changeColors() {
  // set window.location to window.location.pathname + customized_query_string (?min=100&max=200&colors=hexval,hexval,hexval)

  var defaultSetColor = document.getElementsByClassName("defaultSpectrum");
  while (defaultSetColor.length > 0) {
    defaultSetColor[0].className = "spectrum";
  }

  var i;
  var queryString = "?";
  var min = document.getElementById("minNum").value;
  var max = document.getElementById("maxNum").value;
  var colors = document.getElementsByClassName("spectrum");
  var mapField = document.getElementById("map_field");
  var map = mapField.options[mapField.selectedIndex].value;
  var spectrumColors = $(".spectrum");
  var embed = getQueryVariable("embed");

  if(min.length > 1) {
    queryString += "min=" + min + "&";
  }

  if(max.length > 1) {
    queryString += "max=" + max + "&";
  }

  queryString += "map=" + map + "&";

  if(colors.length > 0) {
      queryString += "colors=";

      for(i=0; i<colors.length; i++) {
        queryString += $(colors[i]).spectrum("get").toHex() + "FF,";
        // Get color and use toHexString()
      }
  }

  queryString = queryString.substring(0, queryString.length - 1);

  if (embed === "true") {
    var embedQueryString = generateEmbedLink();
    queryString += "&" + embedQueryString;
  }

  // queryString = queryString + "&" + embedQueryString;

  history.pushState({ query: "query"}, "", queryString);

  // window.location = window.location.pathname + queryString;
  updateMap();
}

function addColor(color) {
  if(typeof(color) !== "string") {
    color = "FFFFFF";
  }
  color = color || "FFFFFF";
  var el = document.getElementById("colorPickersContainer");

  var newElement = document.createElement("div");
  newElement.className = "colorContainer";

  var inputElement = document.createElement("input");
  inputElement.className = "spectrum";
  inputElement.id = "newColor";

  var spanElement = document.createElement("span");
  spanElement.className = "deleteColor";
  spanElement.innerHTML = "-";
  spanElement.setAttribute("onClick", "deleteColor(this)");

  newElement.appendChild(inputElement);
  newElement.appendChild(spanElement);
  el.appendChild(newElement);

  $("#newColor").spectrum({
    color: "#" + color,
    showAlpha: true
  });

  document.getElementById("newColor").id = "";
}

function deleteColor(el) {
  el.parentNode.parentNode.removeChild(el.parentNode);
  return false;
}

function showHide() {

  var el = document.getElementById("colorControlsContainer");
  var showHide = document.getElementById("showHide");
  el.style.display = (el.style.display != 'none' ? 'none' : '' );

  if (el.style.display !== "none") {
    el.style.display = "none";
    showHide.textContent = "+";
  } else {
    el.style.display = "";
    showHide.textContent = "-";
  }
}

function showHideGenerator() {
  if($('#map-embed-generator').is(':visible')) {
    $('#map-embed-generator').hide()
  } else {
    $('#map-embed-generator').show()

    setTimeout(function() {
      $(window).on('click', hideGenerator)
      $('#map-embed-generator').on('click', function(e) {
        e.stopPropagation()
      })
    }, 0)
  }
}
function hideGenerator() {
  $('#map-embed-generator').hide()
  $(window).off('click', hideGenerator)
  $('#map-embed-generator').off('click')
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for(var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if(decodeURIComponent(pair[0]) == variable) {
      return pair.length == 1 ? true : decodeURIComponent(pair[1]);
    }
  }
  return;
}

function getAllQueryVariables() {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  var r = {}
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if(!pair[0]) continue;
    r[decodeURIComponent(pair[0])] = pair.length == 1 ? true : decodeURIComponent(pair[1]);
  }
  return r;
}


/* Get the dropdown value from the query and set it on the page */
function updateMapSetting() {
  var mapSetting = getQueryVariable("map");
  var mapField = document.getElementById("map_field");
  var i;

  if (mapSetting) {
    for(i=0; i<mapField.options.length; i++) {
      if(mapField.options[i].value === mapSetting)
        mapField.options[i].selected = true;
    }
  }
  $("#datepicker-button").html(moment(1000*globalTime).format("MMM D").toString());
}

function setColors() {
  var colorQuery = getQueryVariable("colors");
  if (colorQuery) {
    var colors = getQueryVariable("colors").split(",");
  } else {
    return;
  }

  if (colors.length > 0) {
    var colorContainer = document.getElementById("colorPickersContainer");
    while (colorContainer && colorContainer.firstChild) colorContainer.removeChild(colorContainer.firstChild);

    for(var i=0; i<colors.length; i++) {
      addColor(colors[i].substr(0, 6));
    }
  }
}

function globalUnitFromFieldUnit(value) {
  switch (value) {
    case "_f":
    case "_mph":
    case "_mps":
    case "_mi":
    case "_ft":
    case "_mmph":
    case "_inph":
    case "_inhg":
      return "us";
    default:
      return "si";
  }
}

/* Map Embed Functions */

function updateGeneratorLocation(lat, lon) {
  $("#latitude-generator-text").text(lat);
  $("#longitude-generator-text").text(lon);
}

/* Create the embed window with the iframe code in a popup */
function generateEmbed() {

  var link = generateEmbedLink();

  var date = new Date(1000*globalTime)
  var date_str = date.getUTCFullYear()+'-'+(date.getUTCMonth()+1)+'-'+date.getUTCDate()
  var mapView = map.getView()
  var center = ol.proj.transform(mapView.getCenter(), 'EPSG:900913', 'EPSG:4326')
  var lon = center[0]
  var lat = center[1]
  var zoom = mapView.getZoom()
  var colorParams = assembleQueryParams();
  var completedLink = "https://darksky.net/map-embed/@";

  var params = (field || 'temperature_k')

  $("#embed-popup").remove();

  if(timeExplicitlySet)
    params += ','+date_str+','+date.getUTCHours()

  params += ',' + lat.toFixed(3) + ',' + lon.toFixed(3) + ',' + zoom;

  completedLink += params;

  if(colorParams.length > 0) {
    completedLink += colorParams + "&" + link;
  } else {
    completedLink += ".js?" + link;
  }

  var $popUp = $("<div>", {
    id: "embed-popup"
  });

  var iframeString = "<script src='" + completedLink + "'></script>";

  $pString = $("<p></p>").text(iframeString);

  $popUp.append("<p>Copy the snippet below and paste into your own code.");
  $popUp.append($pString);
  $popUp.append("<p id='got-it'>Got It</p>");
  $popUp.append("<p><a id='terms-link' target='_href' href='https://darksky.net/widgetterms'>Terms and Conditions</a></p>");

  $("body").append($popUp);

  $("#embed-popup").on("click", function(e) {e.stopPropagation()})
  $("#embed-popup > #got-it").on("click", function() {
    $("#embed-popup").remove();
  });
}

function generateWarningMessage() {

  $("#embed-popup").remove();

  var $popUp = $("<div>", {
    id: "embed-popup",
    css: {
      "width": "50%",
      "margin": "0 auto"
    }
  });

  $popUp.append("<p>Sorry, there was an error displaying that location.</p>")
  $popUp.append("<p style='margin-bottom: 10px' id='got-it'>Okay</p>");

  $("body").append($popUp);

  $("#embed-popup").on("click", function(e) {e.stopPropagation()})
  $("#embed-popup > #got-it").on("click", function() {
    $("#embed-popup").remove();
  });

}

function loadEmbedSettings() {
  var timeSettings = getQueryVariable("timeControl");
  var fieldSettings = getQueryVariable("fieldControl");
  var defaultField = getQueryVariable("defaultField");
  var defaultUnits = getQueryVariable("defaultUnits");

  $("#map_field").val(defaultField);
  updateUnits(defaultField);
  enableOrDisableTimeControls(defaultField);
  $("#map_units").val(defaultUnits);

  if (timeSettings === "false" && fieldSettings === "false") {
    $("#controls").hide();
  } else {
    if (timeSettings === "false") {
      $("#datepicker-button, .hour-dropdown, .change-hour-controls").hide();
    }
    if (fieldSettings === "false") {
      $(".map-field-container, #map_units_container").hide();
    }
  }
  updateMap();
}

/* Geocoding / Location Search */

function showHideGenerator() {
  if($('#map-embed-generator').is(':visible')) {
    $('#map-embed-generator').hide()
  } else {
    $('#map-embed-generator').show()

    setTimeout(function() {
      $(window).on('click', hideGenerator)
      $('#map-embed-generator').on('click', function(e) {
        e.stopPropagation()
      })
    }, 0)
  }
}


function toggleSearch(e) {
  e.stopPropagation()

  var $searchEl = $('#location-search')
  if($searchEl.is(':visible')) {
    $searchEl.hide()
  } else {
    $searchEl.show()
    $searchEl.find('input').focus()

    setTimeout(function() {
      $(window).on('click', hideSearch)
      $('#location-search').on('click', function(e) {
        e.stopPropagation()
      })
    }, 0)
  }
}

$('#controls .search-button').on('click', toggleSearch)

function hideSearch() {
  $('#location-search').hide()
  $(window).off('click', hideGenerator)
  $('#location-search').off('click')
}


function locationSearch() {

  var query = $('#location-search input').val()
  if(!query) return

  var domain = "https://darksky.net";

  $.ajax({
    url: domain + '/geo?q='+encodeURIComponent(query),
    method: 'GET',
    dataType: 'JSON',
    crossDomain: true,
    cache: false
  })
  .done(function(r, status) {
    if(status != 'success' || r.latitude === undefined || r.longitude === undefined) {
      // FIXME: better error message
      alert('Cannot find that location!')
      return
    }

    var latitude = r.latitude
    var longitude = r.longitude

    $.ajax({
      url: domain+'/rgeo?hires=1&lat='+latitude+'&lon='+longitude,
      method: 'GET',
      dataType: 'JSON',
      crossDomain: true,
      cache: false
    })
    .done(function(r, status) {
      var name = r.city ||
                 r.name ? r.name.split(',')[0] : 'Your Location'

      var view = map.getView()
      view.setCenter(ol.proj.transform([longitude, latitude], 'EPSG:4326', 'EPSG:3857'))
      view.setZoom(Math.max(view.getZoom(), 7))
      updateURL({
        'marker': latitude.toFixed(3)+','+longitude.toFixed(3),
        'marker-name': name
      })
      updateMap()

      $('#location-search').hide()
    })
    .fail(function(status) {
      generateWarningMessage();
    })
  })
  .fail(function(status) {
    generateWarningMessage();
  })

  return false
}

/* 3D globe label rendering */

function load3dLabels() {

  // If we're high enough, don't request labels
  var altitude = ol3d.getCamera().getAltitude()

  if(altitude > 30000000.0) {
    remove3dLabels()
    return
  }

  // Query for labels
  var rectangle  = ol3d.getCesiumScene().camera.computeViewRectangle(),
      condition  = getLabelField(),
      time       = is_radar_condition(condition) ? 'now' : globalTime,
      domains    = ["https://maps-raw.darksky.net"],
      domain     = domains[Math.floor(Math.random() * domains.length || 0)],
      url        = domain +"/" + time + "/" + condition + "/labels.json?" +
                   "alt=" + altitude +
                   "&north=" + rectangle.north +
                   "&south=" + rectangle.south +
                   "&east=" + rectangle.east +
                   "&west=" + rectangle.west +
                   "&width=" + viewportWidth(),
      fetchLabels = Cesium.GeoJsonDataSource.load(url, {
        markerColor: new Cesium.Color(0,0,0,0)
      });

  fetchLabels.then(function(dataSource) {
    var entities = dataSource.entities.values,
        labels   = [],
        time     = Cesium.JulianDate.fromDate(new Date());

    for (var i=0; i < entities.length; i++) {
      var entity           = entities[i],
          properties       = entity.properties,
          positionProperty = entity.position,
          cartesian        = positionProperty.getValue(time),
          cartographic     = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian);

      properties.cartographic = cartographic;
      labels.push(properties);
    }

    labels3d = labels

    cullHidden3dLabels()
    add3dLabels()
  });
}

function cullHidden3dLabels() {
  var scene = ol3d.getCesiumScene()
  globeOccluder.cameraPosition = scene.camera.position

  var label, loc, pos,
      culled_labels = []

  for(var i = 0; i < labels3d.length; i++) {
    label = labels3d[i]

    loc = Cesium.Cartesian3.fromRadians(label.cartographic.longitude, label.cartographic.latitude)
    pos = Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, loc)

    if(globeOccluder.isPointVisible(loc)) {
      culled_labels.push(label)
    }
  }

  labels3d = culled_labels
}

function remove3dLabels() {
  $labelView3d.empty()
}

function add3dLabels() {
  remove3dLabels()

  var scene = ol3d.getCesiumScene()
  globeOccluder.cameraPosition = scene.camera.position

  var label

  for(var i = 0; i < labels3d.length; i++) {
    label = labels3d[i]
    label.elem = $('<span>').html(label.displayValue).addClass(label.type).css({top:0, left:0}).appendTo($labelView3d)
    label.halfWidth = label.elem.width() / 2
    label.halfHeight = label.elem.height() / 2
    move3dLabel(label, scene)
  }
}

function move3dLabel(label, scene) {
  var loc = Cesium.Cartesian3.fromRadians(label.cartographic.longitude, label.cartographic.latitude),
      pos = Cesium.SceneTransforms.wgs84ToWindowCoordinates(scene, loc),
      translate = 'translate('+(pos.x-label.halfWidth)+'px, '+(pos.y-label.halfHeight)+'px)'

  if(globeOccluder.isPointVisible(loc)) {
    label.elem.show()
  } else {
    label.elem.hide()
  }

  label.elem.css({
    '-ms-transform': translate,
    '-webkit-transform': translate,
    'transform': translate
  })
}

function update3dLabels() {
  var scene = ol3d.getCesiumScene()
  globeOccluder.cameraPosition = scene.camera.position

  for(var i = 0; i < labels3d.length; i++)
    move3dLabel(labels3d[i], scene)
}

function cookie_domain() {
  var host = window.location.hostname.split('.')
  host = host.length > 1 ? host[host.length-2]+'.'+host[host.length-1]
                         : host[0]
  return '.'+host
}

function loadCookies() {
  globalUnit = getQueryVariable('homepageunits') ||
               Cookies.get('units', {domain: cookie_domain()}) ||
               'us'
}


/* Lets go! */

var linkto = getQueryVariable("linkto");
if(linkto == 'maps') {
  $("#controls .logo").attr('href', "https://maps.darksky.net")
  $("#controls .logo span").html('Dark Sky Maps')
  $("#controls .logo").addClass('maps')
}

function addHiddenFields() {
  if(window.location.search.indexOf('hiddenFields') == -1)
    return;

  var $map_field = $('#map_field')

  $map_field.append($('<option data-image-layer="snow_depth_mm" data-vector-layer="snow_accumulation" value="snow_depth">Snow Accumulation</option>'));
  $map_field.append($('<option data-image-layer="precipitation_probability" data-vector-layer="precipitation_probability" value="precipitation_probability">Precipitation Probability</option>'));
  $map_field.append($('<option data-image-layer="radar_nws" data-vector-layer="radar" value="radar_nws">Precipitation Radar (Traditional)</option>'));
  $map_field.append($('<option data-image-layer="radar" data-vector-layer="radar" value="radar_uncached">Uncached Precipitation Radar</option>'));
}

$(window).on('load', function() {

  addHiddenFields()

  var embed = getQueryVariable("embed");

  datePicker = new Pikaday({
      defaultDate: moment(1000*globalTime).format("YYYY-MM-DD").toString(),
      field: document.getElementById("datepicker"),
      trigger: document.getElementById("datepicker-button"),
      onSelect: function(date) {

        // If the calendar date hasn't changed, don't do anything
        var globalDate = new Date(1000*globalTime)
        globalDate.setHours(0)
        if(date.getTime() == globalDate.getTime())
          return

        timeExplicitlySet = true
        setGlobalTime(Math.round(date.getTime() / 1000))
        updateMap()
      },
      minDate: moment().subtract(10, 'days').toDate(),
      maxDate: moment().add(9, 'days').toDate()
  });

  $("#map_hour").on("change", function() {
    timeExplicitlySet = true;
    var date = datePicker.getDate() || new Date(1000*globalTime);
    var hours = +($("#map_hour").val());
    date.setHours(hours);
    setGlobalTime(Math.round(date.getTime() / 1000));
    updateMap();
  })

  $("#map_field").on("change", function() {
    // Change the units dropdown and update map
    // get unit value
    var mapField = document.getElementById("map_field").value;
    updateUnits(mapField, false);
    enableOrDisableTimeControls(mapField);
    updateMap();
  });

  $("#map_units, #map-units-generator").on("change", function() {
    var units = globalUnitFromFieldUnit($('#map_units').val()) || 'us';
    Cookies.set('units', units, {domain: cookie_domain()});
    $("#map-units-generator").val($(this).val());
    ($(this).attr('id') === "map_units") ? $("#map-units-generator").val($(this).val()) : $("#map_units").val($(this).val());
    updateMap();
  });

  $("#now-button").on("click", function() {
    var date = nowDateRoundedToNearestHour();
    setGlobalTime(Math.round(date.getTime() / 1000));
    updateMap();
  });


  /* Event handlers for embed generator */
  $("#time-control-checkbox").on("click", function() {
    if(this.checked) {
      $("#time-control-message").text("Enabled");
    } else {
      $("#time-control-message").text("Disabled");
    }
  });

  $("#change-field-checkbox").on("click", function() {
    if(this.checked) {
      $("#change-field-message").text("Enabled");
    } else {
      $("#change-field-message").text("Disabled");
    }
  });

  $(document).on("click", function() {
    $("#embed-popup").remove();
  });

  // Makes the colors drag and droppable
  $("#colorPickersContainer").sortable();
  $("#colorPickersContainer").disableSelection();

  $(".defaultSpectrum").spectrum({
    showAlpha: true
  });

  loadCookies();
  loadFromURL();
  setColors();
  if (embed === "true") {
    loadEmbedSettings();
  }
  updateMapSetting();
  enableOrDisableZoomControls();

  setTimeout(function() {
    $(window).on('popstate', function(e) {
      pushstate = false;
      loadFromURL();
    })
  }, 0)

});
