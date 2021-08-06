<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <script src="https://ads.everesttech.net/ads/static/local/AMOLibrary.js" charset="utf-8"></script>
    <style media="screen">
      body { margin: 0; padding: 0; }
      iframe { border: none; }
    </style>
  </head>
  <body>
    <script type="text/javascript">

      function loadData() {
        var replaceMacro = function(text, data) {
          var macros = text.match(/\!\{(.*?)\}/g);
          if(macros) {
            macros.forEach(function(macro){
              var macroText = macro.split('!{').join('').split('}').join('');
              for(var key in data) { if(key == macroText) { macroText = data[key]; } }
              text = text.split(macro).join(macroText);
            });
          }
          return text;
        }
        var contentD = [
          {
            "name": "Microsoft",
            "product_url": "https://azure.microsoft.com/",
          }
        ];

        if(contentD && contentD.length) { contentD.forEach(function(data) { amo.registerContent(data); }); }
        amo.registerVariation("layout", "Migration");
        amo.registerVariation("textField1", "['<#000000>Migrate your|on-premises|workloads to the|cloud with|confidence','17.5px',15, 61,'19','350', 'left']");
        // amo.registerVariation("textField2", "['<#505050>Premium apps with |smart features offer |design, writing, and |speaking suggestions','12.2px',16, 68,'14','3 50', 'left']");
        // amo.registerVariation("textField3", "na");
        // amo.registerVariation("textField4", "na");
        // amo.registerVariation("textField5", "na");
        amo.registerVariation("ctaText", "['<#0078D3>Try Azure free','12.3px',0,0,'50','300', 'center']");
        amo.registerVariation("CTAarrowVisible", "[true, 0,0]");
        // amo.registerVariation("ctaArrowVisibleFlag", "!{passthroughfield2}");
        amo.registerVariation("impressionTracker", "../../../../1x1.png?impressionTracker=" + Math.random());
        amo.registerVariation("clickTracker", "../../../../1x1.png?clickTracker=" + Math.random());
        amo.registerVariation("clickURL", "!{product_url}");
        var content = [], cam = {};
        var cam = {
          layout: amo.variation['layout'],
          textField1: amo.variation['textField1'],
          textField2: amo.variation['textField2'],
          textField3: amo.variation['textField3'],
          textField4: amo.variation['textField4'],
          textField5: amo.variation['textField5'],
          cta: amo.variation['ctaText'],
          CTAarrowVisible: amo.variation['CTAarrowVisible'],
          // ctaArrowVisibleFlag: amo.variation['ctaArrowVisibleFlag'],
          impressionTracker: amo.variation['impressionTracker'],
          clickTracker: amo.variation['clickTracker'],
          url: amo.variation['clickURL']
        };
        if(amo.content && amo.content.length) {
          amo.content.forEach(function(data) {
            content.push({
              feedData: data,
              layout: cam.layout,
              textField1: cam.textField1,
              textField2: cam.textField2,
              textField3: cam.textField3,
              textField4: cam.textField4,
              textField5: cam.textField5,
              ctaText: cam.cta,
              CTAarrowVisible: cam.CTAarrowVisible,
              // ctaArrowVisibleFlag: cam.ctaArrowVisibleFlag.toString().toLowerCase() == 'false' ? false : true,
              ctaArrowVisibleFlag: true,
              impressionTracker: cam.impressionTracker,
              clickTracker: cam.clickTracker,
              url: cam.url
            });
          });
          if(content && content.length) {
            content.map(function(data){
              for(var key in data) { data[key] = typeof data[key] == 'string' ? replaceMacro(data[key], data.feedData) : data[key]; }
            });
          }
        }
        window.adData = content[0], window.adClickUrl = adData.url;
        window.layout = adData.layout;
        // document.querySelector('iframe').addEventListener("click", exitHandler.bind(this));
        // function exitHandler() {
        //   // window.open(clickTag);
        //   amo.onDynAdClick(adData.feedData, "CLICK", adClickUrl);
        // }
        var textField1 = adData.textField1 && adData.textField1.toLowerCase() != 'na' ? adData.textField1 : ' ';
        var textField2 = adData.textField2 && adData.textField2.toLowerCase() != 'na' ? adData.textField2 : ' ';
        var textField3 = adData.textField3 && adData.textField3.toLowerCase() != 'na' ? adData.textField3 : ' ';
        var textField4 = adData.textField4 && adData.textField4.toLowerCase() != 'na' ? adData.textField4 : ' ';
        var textField5 = adData.textField5 && adData.textField5.toLowerCase() != 'na' ? adData.textField5 : ' ';
        textField1=textField1.replace('-_-','â');textField2=textField2.replace('-_-','â');textField3=textField3.replace('-_-','â');textField4=textField4.replace('-_-','â');textField5=textField5.replace('-_-','â');
        var ctaText = adData.ctaText && adData.ctaText.toLowerCase() != 'na' ? adData.ctaText : '';
        var CTAarrowVisible = adData.CTAarrowVisible && adData.CTAarrowVisible.toLowerCase() != 'na' ? adData.CTAarrowVisible : '[true, 0, 0]';
        var impressionTracker = adData.impressionTracker && adData.impressionTracker.toLowerCase() != 'na' ? adData.impressionTracker : '';
        var clickTracker = adData.clickTracker && adData.clickTracker.toLowerCase() != 'na' ? adData.clickTracker : '';
        if(impressionTracker) {
          var isn = 'data' in amo && 'isn' in amo.data ? amo.data.isn : '';
          if(isn.length) { impressionTracker = impressionTracker.split('(t_td_isn)').join(isn); }
          for(var i = 1; i<=5; i++) {
              var trackingCode = 'data' in amo && 'data' in amo.data && 'atsParams' in amo.data.data && ('x2_tracking_code_'+i) in amo.data.data.atsParams ? amo.data.data.atsParams['x2_tracking_code_'+i] : '';
              if(trackingCode.length){ impressionTracker = impressionTracker.split('$(t_qp_TC_'+i+')').join(trackingCode); }
          }
        }
        var adUrl = '';
        switch(adData.layout){
          case 'Illustration_AI' :
          case 'Illustration_Hybrid' :
          case 'Illustration_ML' :
          case 'Illustration_Migration' :
          case 'Illustration_OpenSource' :
          case 'Illustration_VM' :
          case 'Lifestyle_Male' :
          case 'Lifestyle_Female' :
          case 'UI_AI' :
          case 'UI_FreeAccount' :
          case 'UI_Hybrid' :
          case 'UI_ML' :
          case 'UI_Migration' :
          case 'UI_OpenSource' :
          case 'UI_VM' : adURL = 'Base/Template_V4_Illustration_300x250.htm';break;
          // case 'Migration' : adURL = 'Migration/Template_V4_Illustration_300x250.htm';break;
          // case 'Open Source' : adURL = 'Open Source/Template_V4_Illustration_300x250.htm';break;
        }
        var iframe = document.createElement('iframe');
        iframe.src = adURL;
        iframe.width = '300';
        iframe.height = '250';
        document.body.appendChild(iframe);
        var bannerData = {
          layout: layout,
          textField1: textField1,
          textField2: textField2,
          textField3: textField3,
          textField4: textField4,
          textField5: textField5,
          ctaText: ctaText,
          CTAarrowVisible: CTAarrowVisible,
          // CTAarrowVisible: [adData.ctaArrowVisibleFlag, 0,0],
          impressionTracker: impressionTracker,
          clickTracker: clickTracker,
        };
        window.getBannerData = function(){ var obj = {}; for(var i in bannerData) { obj[i] = bannerData[i]; } return obj; }
      }
      loadData();
    </script>
  </body>
</html>
