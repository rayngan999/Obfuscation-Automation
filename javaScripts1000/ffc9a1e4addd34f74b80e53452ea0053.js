"use strict";
define([
  "jquery",
  "materialize",
  "sessionUtils",
  "apiService",
  "brandsiteConstants",
  "brandsiteUtils",
], function (o, e, t, a, n, brandsiteUtils) {
  function s() {
    var e = {
      last_notification_time: o("#js-notifications-dropdown").data("timestamp"),
    };
    a.postRequest("SETNOTIFICATIONSREAD", e)
      .then(function () {
        o("#js-notifications-count").hide();
      })
      .catch(function (o) {
        console.error(o);
      });
  }
  function i() {
    localStorage.removeItem("userData"),
      localStorage.removeItem("aadhaarStatus"),
      sessionStorage.clear(),
      t.deleteSessionToken(),
      (window.location = "/");
  }
  o(document).ready(function () {
    var mobileUserInfo, EmailID;
    o(() => {
      o(".home-call-us-close").click(() => {
        document.getElementById("js-call-us-send-otp").innerHTML = "Send OTP";
        o("#js-call-us-dialog").css("display", "none");
        o(".call-us-section1").removeClass("hide");
        o(".call-us-section2").addClass("hide");
        o(".call-us-section3").addClass("hide");
        o(".call-us-section4").addClass("hide");
      });
    });

    if (window.location.href.includes("?_ga=")) {
      window.location.href = window.location.href.split("?_ga=")[0];
    }

    if (window.location.href.includes("utirsl")) {
      document.getElementsByClassName("float-icon")[0].classList.add("hide");
      document.getElementsByClassName("float")[0].classList.add("hide");
      document
        .getElementsByClassName("mobile-footer-icon")[0]
        .classList.add("hide");
    }

    o("#js-call-us-button").click(() => {
      if (
        o("#js-home-call-us-name").val() != "" &&
        o("#js-home-call-us-mobile-no").val() != "" &&
        o("#js-home-call-us-email").val() != "" &&
        o("#js-error-for-name").text() == "" &&
        o("#js-error-for-mobile-no").text() == "" &&
        o("#js-error-for-email").text() == ""
      ) {
        o("#js-call-us-button").attr("disabled", true);
        o("#js-call-us-button").addClass("loading-on-disabled");
        let localName = o("#js-home-call-us-name").val();
        if (window.location.href.includes("uti-wealth-builder-fund")) {
          localName = localName + " | wealthbuilder";
        } else if (
          window.location.href.includes("uti-mf-childrens-career-plan")
        ) {
          localName = localName + " | childrenplan";
        } else if (
          window.location.href.includes("uti-mf-smart-tax-saving-solutions")
        ) {
          localName = localName + " | taxsavingsolution";
        } else if (
          window.location.href.includes("uti-retirement-benefit-pension-fund")
        ) {
          localName = localName + " | retirementplanning";
        } else {
          localName = localName + " | homepage";
        }
        let parameter = {
          name: localName,
          email: EmailID ? EmailID : o("#js-home-call-us-email").val(),
          phone: mobileUserInfo
            ? mobileUserInfo
            : o("#js-home-call-us-mobile-no").val(),
          otp: o("#js-home-call-us-enter-otp").val(),
          otp_type: "UtiMFCallMeBack",
        };
        a.postRequest("GENERICVALIDATEOTP", parameter)
          .then(() => {
            o("#js-call-us-button").removeClass("loading-on-disabled");
            o("#js-call-us-button").attr("disabled", true);
            let tempdata = {
              Mobile: parameter.phone,
              Reqtype: "Active",
            };
            a.postRequest("WHATSAPPSENDFORM", tempdata)
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.error(err);
              });
            a.postRequest("CALLMEBACK", parameter)
              .then((data) => {
                document.getElementById("js-call-us-send-otp").innerHTML =
                  "Send OTP";
                // o("#js-call-us-dialog").css("display", "none");
                o("#js-error-for-otp-message").text("");
                o("#js-home-call-us-enter-otp").val("");
                // brandsiteUtils.openModal("", "Request Submitted Successfully");
                o(".call-us-section3").addClass("hide");
                o(".call-us-section4").removeClass("hide");
                o("#js-home-call-us-name").val("");
                o("#js-home-call-us-mobile-no").val("");
                o("#js-home-call-us-email").val("");
              })
              .catch((err) => {
                o("#js-error-for-otp-message").text("");
                o("#js-home-call-us-enter-otp").val("");
                o("#js-home-call-us-name").val("");
                o("#js-home-call-us-mobile-no").val("");
                o("#js-home-call-us-email").val("");
                brandsiteUtils.openModal("", "Something went Wrong");
                o("#js-call-us-button").removeClass("loading-on-disabled");
                o("#js-call-us-button").attr("disabled", true);
                console.error(err);
              });
          })
          .catch(() => {
            o("#js-call-us-button").removeClass("loading-on-disabled");
            o("#js-call-us-button").attr("disabled", true);
            console.error(err);
          });
      } else {
        o("#js-call-us-button").removeClass("loading-on-disabled");
        o("#js-call-us-button").attr("disabled", true);
      }
    });

    o("#callmechat").click(() => {
      o("#js-call-us-dialog").css("display", "block");
    });

    o("#mobile-call-me-back-icon").click(() => {
      o("#js-call-us-dialog").css("display", "block");
    });
    o("#mobile-whatsapp-icon").click(() => {
      window.open("http://wa.me/917208081230/?text=hi", "_blank");
    });
    o("#mobile-phone-icon").click(() => {
      window.location.href = "tel:18002661230";
    });

    o("#js-call-us-validate-pan").on("click", (e) => {
      e.preventDefault();

      let data = {
        PAN: o("#js-home-call-us-pan")[0].value.toUpperCase(),
      };

      o("#js-call-us-validate-pan").addClass("loading-on-disabled");

      o("#js-call-us-validate-pan").attr("disabled", true);

      Promise.all([
        a.postRequest("VALIDATEPAN", data),

        a.postRequest("GETFOLIOFLAG", data),
      ])

        .then((data) => {
          o(".call-us-section1").addClass("hide");

          o(".call-us-section2").removeClass("hide");

          o("#js-call-us-validate-pan").removeClass("loading-on-disabled");

          o("#js-call-us-validate-pan").removeAttr("disabled");

          if (data[0].online) {
            if (data[1].folio_flag == true) {
              KycCheckInlineBlock(
                "",

                "Yay! Looks like youâre an existing investor. Start investing directly",

                "Start investing",

                "/portal/quickInvest" +
                  "?PAN=" +
                  `${o("#js-home-call-us-pan")[0].value.toUpperCase()}`
              );
            } else {
              if (data[0].is_kyc) {
                KycCheckInlineBlock(
                  "",

                  "Yay! Looks like youâre an existing investor. Start investing directly",

                  "Start investing",

                  "/portal/quickInvest" +
                    "?PAN=" +
                    `${o("#js-home-call-us-pan")[0].value.toUpperCase()}`
                );
              } else {
                KycCheckInlineBlock(
                  "",

                  "Your PAN is not KYC compliant. Complete your digital KYC in 2 mins and invest seamlessly",

                  "Start KYC",

                  "/portal/signup" +
                    "?PAN=" +
                    `${o("#js-home-call-us-pan")[0].value.toUpperCase()}`
                );
              }
            }
          } else {
            if (data[1].folio_flag == true) {
              KycCheckInlineBlock(
                "",

                "Yay! Looks like youâre an existing investor. Start investing directly",

                "Start investing",

                "/portal/quickInvest" +
                  "?PAN=" +
                  `${o("#js-home-call-us-pan")[0].value.toUpperCase()}`
              );
            } else {
              if (data[0].is_kyc) {
                KycCheckInlineBlock(
                  "",

                  "Yay! Looks like youâre an existing investor. Start investing directly",

                  "Start investing",

                  "/portal/quickInvest" +
                    "?PAN=" +
                    `${o("#js-home-call-us-pan")[0].value.toUpperCase()}`
                );
              } else {
                KycCheckInlineBlock(
                  "",

                  "Your PAN is not KYC compliant. Complete your digital KYC in 2 mins and invest seamlessly",

                  "Start KYC",

                  "/portal/signup" +
                    "?PAN=" +
                    `${o("#js-home-call-us-pan")[0].value.toUpperCase()}`
                );
              }
            }
          }
        })

        .catch((err) => {
          o("#js-call-us-validate-pan").removeAttr("disabled");

          o("#js-error-for-pan").text(err.data.message);

          console.error(err);
        });
    });

    function KycCheckInlineBlock(
      heading,

      content,

      button1,

      link1,

      button2
    ) {
      const modalBody = document.getElementById("js-custom-alert-dialog");

      modalBody.innerHTML = "";

      let headingElement = document.createElement("div");

      headingElement.id = "js-custom-alert-heading";

      headingElement.style = "font-size: 1.7rem; margin-bottom: 1rem;";

      headingElement.className = "alert-heading center-align";

      headingElement.innerText = heading ? heading : "";

      let contentElement = document.createElement("div");

      contentElement.id = "js-custom-alert-content";

      contentElement.className = "alert-content center-align";

      contentElement.style = "font-size: 1.2rem; margin-bottom: 1rem;";

      contentElement.innerText = content
        ? content
        : "Yay! Looks like youâre an existing investor. Start investing directly";

      let ctaWrapper = document.createElement("div");

      ctaWrapper.className = "alert-cta-wrapper center-align";

      ctaWrapper.style = "display: flex;justify-content: space-evenly;";

      let button1Element = document.createElement("a");

      button1Element.id = "js-custom-alert-cta";

      button1Element.className = "btn white-text primary-blue";

      button1Element.href = link1 ? link1 : "/";

      button1Element.innerText = button1 ? button1 : "Invest now";

      button1Element.style = "width: 12rem; margin-right: 3%; color: #fff";

      button1Element.target = "_self";

      let button2Element = document.createElement("button");

      button2Element.id = "js-custom-alert-cta-2";

      button2Element.className = "btn white-text primary-blue";

      button2Element.innerText = button2 ? button2 : "Call me";

      button2Element.style = "width: 13rem";

      modalBody.appendChild(headingElement);

      modalBody.appendChild(contentElement);

      ctaWrapper.appendChild(button1Element);

      ctaWrapper.appendChild(button2Element);

      modalBody.appendChild(ctaWrapper);
    }

    o("#js-home-call-us-pan").on("keyup", (e) => {
      e.preventDefault();

      let target = e.currentTarget;

      if (target.name == "PAN") {
        var val = e.currentTarget.value;

        var errorText;

        if (val != "") {
          /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/g.test(val)
            ? (o("#js-call-us-validate-pan").removeAttr("disabled"),
              (errorText = ""))
            : (o("#js-call-us-validate-pan").attr("disabled", "true"),
              (errorText = "Enter a valid PAN."));
        } else {
          errorText = "";
        }

        DisplayError("#js-error-for-pan", errorText);
      }
    });

    o(document).on("click", "#js-custom-alert-cta-2", (e) => {
      e.preventDefault();
      document.getElementById("js-custom-alert-dialog").innerHTML = "";
      o(".call-us-section3").removeClass("hide");
      o(".call-us-section2").addClass("hide");
    });

    o(
      "#js-home-call-us-name, #js-home-call-us-mobile-no, #js-home-call-us-email"
    ).on("keyup", (e) => {
      e.preventDefault();
      let target = e.currentTarget;
      switch (target.name) {
        case "Name":
          var regex = new RegExp("^([- a-zA-Z\u00c0-\u024f]{3,})$");
          var val = target.value;
          var errorText;
          regex.test(val)
            ? (errorText = "")
            : (errorText =
                "Enter a valid name (no special characters & numbers, minimum length 3).");
          DisplayError("#js-error-for-name", errorText);
          break;
        case "MobileNo":
          var regex = new RegExp("^[1-9]{1}[0-9]{9}$");
          var val = target.value;
          var errorText;
          mobileUserInfo = false;
          regex.test(val)
            ? (errorText = "")
            : (errorText = "Enter a valid Mobile Number.");
          DisplayError("#js-error-for-mobile-no", errorText);
          break;
        case "Email":
          var regex = new RegExp(
            "^[A-Za-z0-9.-]+@[A-Za-z.-](.)+[A-Za-z]{2,4}$"
          );
          var val = target.value;
          var errorText;
          EmailID = false;
          regex.test(val)
            ? (errorText = "")
            : (errorText = "Enter a valid Email.");
          DisplayError("#js-error-for-email", errorText);
      }
      if (
        o("#js-home-call-us-name").val() != "" &&
        o("#js-home-call-us-mobile-no").val() != "" &&
        o("#js-home-call-us-email").val() != "" &&
        o("#js-error-for-name").text() == "" &&
        o("#js-error-for-mobile-no").text() == "" &&
        o("#js-error-for-email").text() == ""
      ) {
        o("#js-call-us-button").removeAttr("disabled");
      } else {
        o("#js-call-us-button").attr("disabled", true);
      }
    });

    o("#js-call-us-send-otp").click(() => {
      let parameter = {
        name: o("#js-home-call-us-name").val(),
        email: EmailID ? EmailID : o("#js-home-call-us-email").val(),
        phone: mobileUserInfo
          ? mobileUserInfo
          : o("#js-home-call-us-mobile-no").val(),
        otp_type: "UtiMFCallMeBack",
      };
      a.postRequest("GENERICGENRATEOTP", parameter)
        .then((data) => {
          o("#js-call-us-button").removeAttr("disabled");
          o("#js-error-for-otp-message").text(data.message);
          document.getElementById("js-call-us-send-otp").innerHTML =
            "Re-send OTP";
        })
        .catch((err) => {
          o("#js-error-for-otp-message").text("");
          brandsiteUtils.openModal("", err.data.message, "Ok");
        });
    });

    var DisplayError = function (id, errorText) {
      o(id).text(errorText);
      //   errorText == "" ? (forminvalid = false) : (forminvalid = true);
    };

    if (
      o(
        "#js-page-footer > div.container.white-text > div.footer-container.row > div.col.m9.s12 > div > div:nth-child(5) > ul > li:nth-child(5) > a"
      )[0]
    ) {
      if (
        o(
          "#js-page-footer > div.container.white-text > div.footer-container.row > div.col.m9.s12 > div > div:nth-child(5) > ul > li:nth-child(5) > a"
        )[0].href.endsWith("/")
      ) {
        let newUrl = o(
          "#js-page-footer > div.container.white-text > div.footer-container.row > div.col.m9.s12 > div > div:nth-child(5) > ul > li:nth-child(5) > a"
        )[0].href.split("pdf");
        o(
          "#js-page-footer > div.container.white-text > div.footer-container.row > div.col.m9.s12 > div > div:nth-child(5) > ul > li:nth-child(5) > a"
        )[0].href = newUrl[0] + "pdf";
      }
    }

    o("#js-toggleMobileMenu").on("click", function (e) {
      e.stopPropagation();
      var t = o(this),
        a = t.data("targetSectionSelector");
      o(a).hasClass("js-showMenu")
        ? (o(a).removeClass("js-showMenu"),
          o(a).stop().slideDown(),
          o("body").addClass("js-mobileMenuClose"),
          o("body").data("targetSectionSelector", a))
        : (o(a).addClass("js-showMenu"), o(a).stop().slideUp());
    }),
      o(".collapsible").collapsible(),
      o("body").on("click", function () {
        var e = o("body").data("targetSectionSelector");
        o(e).addClass("js-showMenu"), o(e).slideUp();
      }),
      o("#js-mobileNavDropdown").on("click", function (o) {
        o.stopPropagation();
      }),
      (e = localStorage.userData),
      (r = localStorage.userSignature),
      o(".js-login-btn").attr(
        "href",
        r ? n.getUrl("LOGIN") : n.getUrl("SIGNUP")
      ),
      e &&
        ((e = JSON.parse(e)).username &&
          o(".js-username").text(e.username).parent().attr("title", e.username),
        o("#js-notifications-dropdown").addClass("show-loader"),
        a
          .getRequest("GETNOTIFICATIONS")
          .then(function (e) {
            var t;
            e.notifications.length
              ? ((t = ""),
                e.notifications.forEach(function (o) {
                  t +=
                    '<li><span class="notification ' +
                    (o.is_read ? 'read">' : 'unread">') +
                    o.text +
                    "</span></li>";
                }))
              : (t =
                  '<li><span class="notification read">No Notifications</span></li>'),
              e.unread_count
                ? o("#js-notifications-count").text(e.unread_count)
                : o("#js-notifications-count").hide(),
              o("#js-notifications-dropdown")
                .data("timestamp", new Date().toJSON())
                .html(t);
          })
          .catch(function (o) {
            console.error(o);
          })
          .always(function () {
            o("#js-notifications-dropdown").removeClass("show-loader");
          }),
        o("#js-notifications-icon").on("click", s)),
      e && "corporate" === e.role
        ? o("#js-corporate-dropdown").on("click", function () {
            o("#js-corporate-heading").dropdown("close");
          })
        : o("#js-user-dropdown").on("click", function () {
            o("#js-user-heading").dropdown("close");
          }),
      (tokken = t.getSessionToken());
    if (tokken) {
      tokkensplit = tokken.slice(0, 8);
    }
    tokken && tokkensplit != "UTIGUEST"
      ? (e && "corporate" === e.role
          ? o(".js-corporate-logged-in").removeClass("hide")
          : o(".js-logged-in").removeClass("hide"),
        o(".js-logged-out").addClass("hide"))
      : (o(".js-logged-out").removeClass("hide"),
        o(".js-corporate-logged-in").addClass("hide"),
        o(".js-logged-in").addClass("hide")),
      o(".js-logout").on("click", i),
      o(".btn[data-versa-tag]").on("click", function () {
        var e = o(this).data("versaTag");
        versaTagObj.generateRequest(e);
      }),
      o(".modal").modal({
        endingTop: "20%",
      }),
      o("a.header-search-icon-js").on("click", function (o) {
        o.preventDefault();
      });
    var e, r, tokken, tokkensplit;
  });
});
