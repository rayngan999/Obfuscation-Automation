let ps_floater_globals = {"id":"7f795319-520a-4ffd-9f7e-ad70494b4377","domain_name":"examresults.net","ad_code":"https:\/\/googleads.g.doubleclick.net\/pagead\/ads?client=ca-video-pub-6070398767421094&slotname=Adsolut_ExamresultsNet_PreRoll_2&ad_type=video&description_url=https%3A%2F%2Fwww.examresults.net%2F&max_ad_duration=30000&videoad_start_delay=0&vpmute=0&vpa=0","midroll":"https:\/\/googleads.g.doubleclick.net\/pagead\/ads?client=ca-video-pub-6070398767421094&slotname=Adsolut_ExamresultsNet_MidRoll_2&ad_type=video&description_url=https%3A%2F%2Fwww.examresults.net%2F&max_ad_duration=30000&videoad_start_delay=null&vpmute=0&vpa=0","show_mobile":true,"position":"right","videos_array":["43"],"player_height":"225","player_width":"400","analytics":"UA-129597169-43","xmlFile":"https:\/\/floater.playstream.media\/domain\/7f795319-520a-4ffd-9f7e-ad70494b4377.xml"};

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

let floater_context = window.self !== window.top ? window.parent.document : document;
let floater_styles = document.createElement("link");
floater_styles.type = "text/css";
floater_styles.rel = "stylesheet";
floater_styles.href = "https://floater.playstream.media/css/floater.css";
floater_context.getElementsByTagName("head")[0].appendChild(floater_styles);

let outStream_floater = document.createElement("script");
outStream_floater.type = "text/javascript";
outStream_floater.src = "https://floater.playstream.media/js/floater/floater.js";
outStream_floater.addEventListener("load", function (e) {
    setTimeout(function () {
        if (inIframe) {
            new parent.PlayStream(ps_floater_globals);
        }
        else {
            PlayStream(ps_floater_globals);
        }
    }, 1000);
});
floater_context.getElementsByTagName("head")[0].appendChild(outStream_floater);


if (typeof ga !== "function") {
    let floater_analyticsPs = document.createElement("script");
    floater_analyticsPs.type = "text/javascript";
    floater_analyticsPs.src = "//www.google-analytics.com/analytics.js";
    floater_analyticsPs.addEventListener("load", function (e) {
        let floater_analytics = document.createElement("script");
        floater_analytics.type = "text/javascript";
        floater_analytics.text = "ga('create', '" + ps_floater_globals.analytics + "', 'auto', 'floater_ps_Tracker');";
        floater_context.getElementsByTagName("head")[0].appendChild(floater_analytics);
    });
    floater_context.getElementsByTagName("head")[0].appendChild(floater_analyticsPs);
} else {
    let floater_analytics = document.createElement("script");
    floater_analytics.type = "text/javascript";
    floater_analytics.text = "ga('create', '" + ps_floater_globals.analytics + "', 'auto', 'floater_ps_Tracker')";
    floater_context.getElementsByTagName("head")[0].appendChild(floater_analytics);
}
