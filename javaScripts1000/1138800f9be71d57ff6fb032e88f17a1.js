ï»¿$(function() {
  if (window.CWPageSettings.CWTypes) {
    var CWTypes = window.CWPageSettings.CWTypes;

    var isAdAdmin = $.inArray("adadmin", CWTypes) != -1;
    var isNewsAdmin = $.inArray("newsadmin", CWTypes) != -1;
    var isProducer = $.inArray("producer", CWTypes) != -1;
    var isStats = $.inArray("stats", CWTypes) != -1;
    var isBlueboxViewer = $.inArray("blueboxviewer", CWTypes) != -1;

    if (isAdAdmin || isNewsAdmin || isProducer || isStats || isBlueboxViewer) {
      var jStorageKey_ToolbarPos = "__admin.ToolbarPos";
      var jStorageKey_HideLabels = "__admin.HideLabels";

      // Instantiate and inject the toolbar
      var $tb = $("<div id='toolbar'><span id='leftTriangle' class='toolbarSides'></span><span class='data'></span><span class='buttons'><a class='hide tbButton'>remove bar</a><a class='cycleAds tbButton'>cycle ads</a><a class='labelToggle tbButton'>hide labels</a><a class='openClose tbButton'>more</a></span><span id='rightTriangle' class='toolbarSides'></span></div>");
      var $title = $(".title", $tb);
      var $openClose = $(".openClose", $tb);
      var $hide = $(".hide", $tb);
      var $cycleAds = $(".cycleAds", $tb);
      var $labelToggle = $(".labelToggle", $tb);
      var $data = $(".data", $tb);

      if (!isAdAdmin) {
        $cycleAds.remove();
      }

      $("#container").append($tb);

      var startingTbBottom = $tb.css("bottom");
      
      var expandBar = function() {
        var currentTbBottom = $tb.css("bottom");
        var targetBottom = currentTbBottom == startingTbBottom ? 0 : startingTbBottom;

        $openClose.text(targetBottom == 0 ? "close" : "more");
        $tb.stop().animate({ bottom: targetBottom });

        $.jStorage.set(jStorageKey_ToolbarPos, targetBottom);
      };

      $tb.click(function(evt) {
        if (evt.target == this) {
          var currentTbBottom = $tb.css("bottom");
          if (currentTbBottom != "0px") {
            expandBar();
          }
        }
      });

      $openClose.click(function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        expandBar();
      });

      $hide.click(function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        $tb.fadeOut();
      });

      $cycleAds.click(function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        window.CWCycleAdverts();
      });

      $labelToggle.click(function(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        var toggleText = $labelToggle.text();

        if (toggleText == "hide labels") {
          $(".cwAdminLabel").fadeOut();
          $labelToggle.text("show labels");
          $.jStorage.set(jStorageKey_HideLabels, true);
        } else {
          $(".cwAdminLabel").fadeIn();
          $labelToggle.text("hide labels");
          $.jStorage.set(jStorageKey_HideLabels, false);
        }
      });

      // Toolbar Position
      var tbPos = $.jStorage.get(jStorageKey_ToolbarPos);

      if (tbPos == 0) {
        $tb.css("bottom", "0px");
        $openClose.text("close");
      }

      // Output the OAS settings
      var oas = window.CWPageSettings.OAS;
      $title.text("AS Configuration");

      var hideLabels = $.jStorage.get(jStorageKey_HideLabels);
      if (hideLabels) {
        $labelToggle.text("show labels");
      }

      // Crude string builder
      var sb = [];

      sb.push("<pre>");

      if (isProducer) {

        if (CWPageSettings.TempData.GlobePageID) {
          var pageID = CWPageSettings.TempData.GlobePageID;
          var globeUrl = CWPageSettings.TempData.GlobeUrl;
          sb.push("Globe: <a href='" + globeUrl + "Page/Manage/" + pageID + "'>Open</a>");

          if (CWPageSettings.TempData.GlobeShowPublish) {
            var ts = CWPageSettings.TempData.GlobePageTimestamp;
            sb.push(" | <a href='" + globeUrl + "Page/Publish/" + pageID + "?ts=" + ts + "'>Publish</a><br />");
          }

          sb.push("<br /><br />");
        }

      } // if (isProducer)

      if (isAdAdmin) {
        sb.push("sitepage : " + oas.PageHost + "/" + oas.PagePath + "<br />");
        sb.push("query    : " + oas.Query + "<br />");
        sb.push("listpos  : " + oas.PositionList + "<br />");

        sb.push("<br />");

        sb.push("url      : " + oas.Url + "<br />");

        sb.push("<br />");

        $(".cwAdvert").each(function() {

          var position = this.id.replace("oas_", "");
          var $this = $(this);
          var width = $this.width();
          var height = $this.height();

          sb.push(position + "\t" + width + " x " + height + "<br />");

          var $positionLabel = $("<div class='cwAdminLabel' title='Click to cycle " + position + "'>" + position + " " + width + "x" + height + "</div>");

          $positionLabel.click(function() {
            window.CWCycleAdverts(position);
          });

          if (hideLabels) {
            $positionLabel.hide();
          }

          $this.append($positionLabel);
        });

        sb.push("<br />");
      } // if (isAdAdmin)

      if (isNewsAdmin || isStats) {
        sb.push("Admin tools<br />");
      }

      if (isNewsAdmin) {
        
        if (CWPageSettings.TempData.VersionID) {
          var editUrl = CWPageSettings.TempData.ShakespeareUrl + "/Edit.aspx?VersionID=" + CWPageSettings.TempData.VersionID;
          sb.push("  <a href='" + editUrl + "' target='_new'>Edit in Shakespeare</a><br />");
        }

        $(".cwContentList").each(function() {

          var listCode = this.id.replace("cwcl_", "");
          var $this = $(this);
          var manageUrl = CWPageSettings.TempData.ShakespeareUrl + "/ContentListManagement.aspx?ContentListCode=" + listCode;

          var $listLabel = $("<div class='cwAdminLabel' title='Click to manage " + listCode + "'><a target='_new' href='" + manageUrl + "'>" + listCode + "</a></div>");
          $listLabel.css("right", 0);

          if (hideLabels) {
            $listLabel.hide();
          }

          $this.append($listLabel);
        });
      } // if (isNewsAdmin)

      if (isStats || isBlueboxViewer) {
        if (CWPageSettings.TempData.ReportUrl) {
          sb.push("  <a href='" + CWPageSettings.TempData.ReportUrl + "' target='_new'>This article's readers</a><br />");
        }

        if (CWPageSettings.TempData.ReportDemoUrl) {
          sb.push("  <a href='" + CWPageSettings.TempData.ReportDemoUrl + "' target='_new'>This article's readers (demo)</a><br />");
        }
      } // if (isStats || isBlueboxViewer)

      sb.push("</pre>");

      $data.append(sb.join(''));
    }
  }
});