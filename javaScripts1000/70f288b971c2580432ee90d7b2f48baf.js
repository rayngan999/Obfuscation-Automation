var createLabelLayer = (function() {
  // Polyfill String.startsWith
  if(!String.prototype.startsWith) {
    String.prototype.startsWith = function(prefix) {
      return this.lastIndexOf(prefix, 0) === 0;
    }
  }

  // Weather feature styles
  var UNICODE_LOOKUP = {
    "ð¬" : "1f32c",
    "ð§" : "1f327",
    "ð¨" : "1f328",
    "â" : "2744",
    "dark-sky" : "dark-sky-logo"
  };

  var cyclone_line_style = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(10,79,175,0.7)',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(51,51,68,0.2)'
    })
  });

  function cyclone_point_style(feature, map_view) {
    var storm_type = feature.get("STORMTYPE");
    var image_src = "/img/cyclone/" + storm_type + ".png";
    var zoom = map_view.getZoom();
    var styles = [];

    if(feature.get("current_position")) {
      styles.push(
        new ol.style.Style({
          text: new ol.style.Text({
            text: feature.get("STORMNAME"),
            font: "Bold 12px Helvetica",
            fill: new ol.style.Fill({color: "#334"}),
            stroke: new ol.style.Stroke({color: "rgba(230, 225, 215, 1.0)", width: 2.8}),
            offsetX: 18.0,
            offsetY: 0,
            textAlign: "left"
          })
        }),
        new ol.style.Style({
          image: new ol.style.Icon({
            src: image_src,
            scale: 1.00
          }),
          zIndex: 999
        })
      );
    }
    else {
      if(zoom >= 5) {
        styles.push(
          new ol.style.Style({
            text: new ol.style.Text({
              text: feature.get("DATELBL"),
              font: "Normal 11px Helvetica",
              fill: new ol.style.Fill({color: "#334"}),
              stroke: new ol.style.Stroke({color: "rgba(230, 225, 215, 1.0)", width: 2.8}),
              offsetX: 20.0,
              offsetY: 0,
              textAlign: "left"
            })
          })
        );
      }
      // Make the forecasted position markers smaller at far zoom
      var scale = zoom < 5? 0.50 : 1.00;
      if(zoom >= 4) {
        styles.push(
          new ol.style.Style({
            image: new ol.style.Icon({
              src: image_src,
              scale: scale
            }),
            zIndex: 980
          })
        );
      }
    }
    return styles;
  }

  function cyclone_polygon_style(feature) {
    return new ol.style.Style({
      fill: new ol.style.Fill({
        color: 'rgba(51,51,68,0.2)'
      })
    });
  }

  function cyclone_track_style(feature, layer, map_view) {
    if(layer.startsWith("cyclone-point")) {
      return cyclone_point_style(feature, map_view);
    }
    if(layer.startsWith("cyclone-line")) {
      return cyclone_line_style;
    }
    if(layer.startsWith("cyclone-polygon")) {
      return cyclone_polygon_style(feature);
    }
  }

  var eclipse_path_line_style = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(51,51,68,0.7)',
      width: 1
    })
  });

  var eclipse_path_poly_style = new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(51,51,68,0.2)'
    })
  });

  var eclipse_penumbral_path_line_style = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'rgba(10,79,175,0.7)',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(51,51,68,0.2)'
    })
  });

  function eclipse_style(feature, layer) {
    if (layer === "eclipse-path") {
      return eclipse_path_line_style;
    }
    if (layer === "eclipse-penumbral-path") {
      return eclipse_penumbral_path_line_style;
    }
    if (layer === "eclipse-path-polygon") {
      return eclipse_path_poly_style;
    }
    if (layer === "eclipse-equal-magnitude") {
      return eclipse_path_line_style;
    }
  }

  function emoji_style(feature) {
    var unicode = feature.get("unicode"),
        code_point = UNICODE_LOOKUP[unicode],
        image_src = null;
    if (code_point) {
      image_src = "/img/emoji/"+code_point+".png";
    } else {
      var image_string = emojione.unicodeToImage(unicode);
      var source = /src="(.+)"/.exec(image_string);
      if (!source || !source[1]) {
        return;
      }
      image_src = source[1];
    }
    return new ol.style.Style({
      image: new ol.style.Icon({
        scale: 0.45,
        src: image_src
      })
    });
  }

  function radar_arrow_style(feature, layer) {
    var bearing = feature.get("bearing")+Math.PI;

    return new ol.style.Style({
      image: new ol.style.Icon({
        rotation: bearing,
        scale: 0.5,
        src: "/img/radar-arrow-head.png"
      })
    });
  }

  var radar_line_style = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: "rgba(51,51,68,13px.0)",
      width: 1.0
    })
  });

  function radar_vector_style(feature, layer) {
    if(feature.f == "LineString") {
      return radar_line_style;
    } else {
      return radar_arrow_style(feature, layer);
    }
  }

  function wind_arrow_style(feature, layer) {
    var bearing = feature.get("bearing")+Math.PI;
    return new ol.style.Style({
      image: new ol.style.Icon({
        rotation: bearing,
        scale: 0.5,
        opacity: 0.3,
        src: "/img/wind-arrow-head.png"
      })
    });
  }

  var wind_line_style = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: "rgba(51,51,68,0.3)",
      width: 1
    })
  });

  function wind_vector_style(feature, layer) {
    if(feature.f == "LineString") {
      return wind_line_style;
    } else {
      return wind_arrow_style(feature, layer);
    }
  }

  // Text and location marker feature styles
  function groundhog_style(feature) {
    var cloudiness = feature.get("groundhog_day_prediction");
    var filename = (cloudiness < 25)?
      "groundhog_shadow_icon" :
      "groundhog_no_shadow_icon";
    var src = "/img/groundhog/"+filename+".png";
    return new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 1.5],
        anchorXUnits: "fraction",
        anchorYUnits: "fraction",
        scale: 0.45,
        src: src
      })
    });
  }

  var marker_dot_style = new ol.style.Style({
    text: new ol.style.Text({
      text: 'â¢',
      font: 'Normal 13px Helvetica',
      fill: new ol.style.Fill({color: 'rgba(51,51,68,1.0)'}),
      offsetY: 0.5
    })
  });

  function text_style(feature, layer, map_view, condition, user_defined_label) {
    var styles = [];
    // Figure out the context
    var zoom = map_view.getZoom();
    var is_user_defined = feature.get("user-defined");
    var is_location = layer.startsWith("location");
    var is_marker = !!feature.get("marker");
    var is_base_map = condition.startsWith("precipitation") || condition.startsWith("radar");
    var hide_marker_value = user_defined_label.hide;

    // Set up some defaults
    var font_name = "Helvetica";
    var font_size = layer.startsWith("temperature")? 14: 12;
    var font_color = is_base_map? "#334" : "rgb(255, 252, 248)";
    var offset_x = 0;
    var offset_y = is_location? -font_size / 1.65 : font_size / 1.65;
    var stroke_color = is_base_map? "rgba(230, 225, 215, 1.0)" : "rgba(0, 0, 0, 0.9)";
    var stroke_width = 2.8;
    var text = "" + feature.get("displayValue");
    var text_align = "center";
    var z_index = (condition.startsWith("emoji") && !is_location)? 980 : 999;

    // Skip the value if no marker label was provided (i.e., we just want a dot)
    if(!user_defined_label.label && is_user_defined && !is_marker) {
      return null;
    }

    if(is_user_defined) {
      var value_value = !(condition === "radar" || condition.startsWith("precipitation_rate"));
      font_color = is_base_map? "rgb(255, 250, 220)" : "rgb(255, 255, 150)";
      font_size = zoom > 3 ? 12 : 11;
      stroke_color = "rgba(0, 0, 0, 0.7)";
      stroke_width = 3.25;

      if(is_marker) {
        text = "â";
        text_align = "left";
        offset_x = -4.0;
        offset_y = 0;
      }
      else if(is_location) {
        text_align = "left";
        offset_x = 7.0;
        offset_y = value_value? -6.0 : 0;
      }
      else {
        text_align = "left";
        offset_x = 7.0;
        offset_y = 9.0;
      }
    }

    styles.push(
      new ol.style.Style({
        text: new ol.style.Text({
          text: text,
          font: "Normal " + font_size + "px " + font_name,
          fill: new ol.style.Fill({color: font_color}),
          stroke: new ol.style.Stroke({color: stroke_color, width: stroke_width}),
          offsetX: offset_x,
          offsetY: offset_y,
          textAlign: text_align
        }),
        zIndex: z_index
      })
    );

    if(feature.get("groundhog_day_prediction")){
      styles.push(groundhog_style(feature));
    }

    return styles;
  }

  function style_factory(map, condition, user_defined_label) {
    var map_view = map.getView();
    return function(feature) {
      var layer = feature.get("layer");

      if(layer.startsWith("cyclone")) {
        return cyclone_track_style(feature, layer, map_view);
      }
      if(layer.startsWith("eclipse")) {
        return eclipse_style(feature, layer);
      }
      if(layer === "emoji") {
        return emoji_style(feature);
      }
      if(layer === "radar-field-base") {
        return radar_vector_style(feature, layer);
      }
      if(layer === "wind-field-base") {
        return wind_vector_style(feature, layer);
      }

      // I guess it's text.
      return text_style(feature, layer, map_view, condition, user_defined_label);
    }
  }
  return function(map, domains, time, cache_time, condition, user_defined_label) {
    // Bind the state
    var style = style_factory(map, condition, user_defined_label);
    // Create the vector tile
    return new ol.layer.VectorTile({
      source: new ol.source.VectorTile({
        urls: domains.map(function(d) {
          var query_parameters = "?" + cache_time;
          if(user_defined_label) {
            if(user_defined_label.location) {
              query_parameters += "&marker=" + user_defined_label.location;
            }
            if(user_defined_label.label) {
              query_parameters += "&marker-name=" + user_defined_label.label;
            }
            if(user_defined_label.hide) {
              query_parameters += "&marker-hide-value=" + user_defined_label.hide;
            }
          }
          return d+'/'+time+'/'+condition+'/{z}/{x}/{y}.mvt' + query_parameters;
        }),
        format: new ol.format.MVT(),
        tileGrid: ol.tilegrid.createXYZ({maxZoom: 12}),
        tilePixelRatio: 16
      }),
      style: style
    });
  }
})();
