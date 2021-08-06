const data_csrftoken = window.SDC.getCookie("csrftoken");
const data_url_from = window.bannerContextOriginURL;
let bannerContextRequestURL = window.bannerContext.url;
if (bannerContextRequestURL) {
  if (ENVIRONMENT === "local") {
    bannerContextRequestURL =
      "http://www.localsdc.com:8000" + bannerContextRequestURL;
  }
  if (ENVIRONMENT == "prod") {
    bannerContextRequestURL =
      window.location.origin + bannerContextRequestURL;
      // "https://smiledirectclub.com" + bannerContextRequestURL;
  }
  if (
    ENVIRONMENT === "qa1" ||
    ENVIRONMENT === "qa2" ||
    ENVIRONMENT === "qa3" ||
    ENVIRONMENT === "qa4" ||
    ENVIRONMENT === "qa5" ||
    ENVIRONMENT === "qa6" ||
    ENVIRONMENT === "staging" ||
    ENVIRONMENT === "hotstage"
  ) {
    bannerContextRequestURL =
      "https://" +
      ENVIRONMENT +
      ".smiledirectclub.com" +
      bannerContextRequestURL;
  }
}

$.ajax({
  method: "GET",
  url: bannerContextRequestURL,
  dataType: "json",
  data: { url_from: data_url_from, csrfmiddlewaretoken: data_csrftoken },
})
  .always(function () {
    // console.log("************************** NEW sending bannerContext request");
  })
  .done(function (data) {
    handleBannerContent(data);
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    console.log("ERROR", jqXHR, textStatus, errorThrown);
  });

const $siteBanner = $(".sdc-dynamic-banner"),
  $siteBanner_closeBtn = $(".sdc-dynamic-banner__close-btn");

function handleBannerContent(data) {
  // console.log("bannerContext request successful", data);
  if (data.banner_text_content_t) {
    $(".sdc-dynamic-banner__content").html(data.banner_text_content_t);
    $siteBanner.removeClass("sdc-dynamic-banner--invisible");
    $siteBanner_closeBtn.on("click", function () {
      $siteBanner.slideUp();
    });
  }
}
