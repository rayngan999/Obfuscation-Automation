// import AuthConstructor from "./auth_constructor_v3";

function AuthConstructor(type, target, authCtrl, secondaryAuthCtrl) {
  // "type" argument must be: 'login', 'logout', or 'createCustomer' (until/unless something else is added)
  // "target" argument must be a CSS selector string specifying a form, if type is 'login' or 'createCustomer',
  // or a link, if type is 'logout'.
  this._type = type;
  this._authCtrl = authCtrl;
  this._secondaryAuthCtrl = secondaryAuthCtrl;
  this._$target = $(this._authCtrl.parentSelector + " " + target);
  this._endpoint = endpoints.website[this._type + "Url"];
  this._errorTarget = {
    login: ".login-error",
    logout: ".logout-error",
    createCustomer: ".signup-error",
    requestPasswordReset: ".request-password-reset-error",
    authResetPassword: ".auth-reset-password-error",
  }[this._type];
  var eventType = this._type === "logout" ? "click" : "submit";
  this._$target.on(eventType, this._validate.bind(this));
}

AuthConstructor.prototype._validate = function (e) {
  e.preventDefault();
  var parsleyObj = this._$target.parsley();
  valid = false;
  isArray = $.isArray(parsleyObj);
  // since desktop nav now has two versions, parsleyObj might be an array here.
  if (!isArray) {
    valid = parsleyObj.isValid();
  } else {
    valid = parsleyObj.reduce(function (acc, subParsleyObj) {
      return acc && subParsleyObj.isValid();
    }, true);
  }
  if (valid) {
    this._sendAjax();
  }
};

AuthConstructor.prototype._sendAjax = function () {
  $.post(this._endpoint, this._$target.closest("form").serialize())
    .done(
      function (response) {
        var routesToRedirectOnLogout = [
          "patientPortalUrl",
          "checkoutUrl",
          "productLandingUrl",
        ];

        var routesWhereUserIsInCheckoutFlow = [
          "checkoutUrl",
          "productLandingUrl",
        ];
        var redirectOnLogout = routesToRedirectOnLogout.reduce(function (
          acc,
          routeName
        ) {
          return (
            acc || window.location.pathname === endpoints.website[routeName]
          );
        },
        false);

        var userIsInCheckoutFlow = routesWhereUserIsInCheckoutFlow.reduce(
          function (acc, routeName) {
            return (
              acc || window.location.pathname === endpoints.website[routeName]
            );
          },
          false
        );

        if (response.needs_updated_terms === true) {
          this._authCtrl.showTermsAgreement(response);
          return;
        }

        if (response.has_errors) {
          this._authCtrl.clearErrors();
          this._authCtrl.showErrors(this._errorTarget, response);
          return;
        }

        if (this._type === "logout" && response.email) {
          $(
            this._authCtrl.parentSelector +
              ' .login-form input[name="username"]'
          ).val(response.email);
        } else if (this._type !== "logout") {
          // NOTE: Django includes headers to include the new CSRF token on the cookie in its response,
          // which you have access to here (the cookie)
          // so there's no reason to deliberately include the new token
          // in the JSON response instead of just checking the cookie. (not that this way doesn't work).
          updateCSRFs(response.new_csrf_token);
          $(this._authCtrl.parentSelector + " .user-name").text(
            response.full_name
          );
          $(this._authCtrl.parentSelector + " .user-email").text(
            response.email
          );
        }

        if (this._type === "requestPasswordReset") {
          if (response.message) {
            this._authCtrl.clearErrors();
            this._authCtrl.clearMessages();
            this._authCtrl.setMessage(
              ".request-password-reset-success",
              response.message
            );
          }
        } else if (this._type === "login" && response.show_form) {
          this._authCtrl.showThisPreLoginSection(".auth-reset-password");
        } else if (this._type === "login" && !userIsInCheckoutFlow) {
          this._authCtrl.goToNextUrl();
        } else if (this._type === "logout" && redirectOnLogout) {
          this._authCtrl.goToNextUrl();
        } else {
          // make sure the next time user goes to the pre-login auth section, it displays login.
          if (this._type === "createCustomer") {
            this._authCtrl.showThisPreLoginSection(".login");
          }
          var preOrPost = this._type === "logout" ? "pre" : "post";
          this._authCtrl.showPreOrPostLogin(preOrPost);
          if (this._secondaryAuthCtrl) {
            this._secondaryAuthCtrl.showPreOrPostLogin(preOrPost);
          }
        }
      }.bind(this)
    )
    .fail(
      function () {
        this._authCtrl.clearErrors();
        this._authCtrl.clearMessages();
        this._authCtrl.setError(
          this._errorTarget,
          gettext("Error connecting to server.")
        );
      }.bind(this)
    );
};

// export default AuthConstructor;
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = AuthConstructor;
} else {
  window.AuthConstructor = AuthConstructor;
}

// import AuthCtrl from "./auth_ctrl_v3";
function AuthCtrl(parentSelector) {
  this.parentSelector = parentSelector;
  this._mainTitleParent = this.parentSelector + " .main-title";
  this._preLoggedInParent = this.parentSelector + " .pre-login";
  this._postLoggedInParent = this.parentSelector + " .post-login";
  this._preLoggedInDirectChildren = $(
    this._preLoggedInParent + "> *"
  ).toArray();
  this._preLoggedInAdditionalUnhides = {
    ".login": [".go-to-signup"],
    ".signup": [".go-to-login"],
    ".request-password-reset": [".go-back-to-login"],
  };
  this._inputNameList = $(this.parentSelector + " form input")
    .toArray()
    .map(function (elem) {
      return $(elem).attr("name");
    })
    .filter(function (str) {
      return str !== "csrfmiddlewaretoken" && str !== undefined;
    });
}

AuthCtrl.prototype._copyInput = function (target) {
  var counterparts = {
    ".login": ".signup",
    ".signup": ".login",
    ".request-password-reset": ".login",
  };
  // if the destination doesn't require input to be copied to it, return.
  if (!counterparts[target]) return;
  ["username", "password"].forEach(
    function (inputName) {
      var originElem = $(
        this.parentSelector +
          " " +
          counterparts[target] +
          ' input[name="' +
          inputName +
          '"]'
      );
      var destinationElem = $(
        this.parentSelector + " " + target + ' input[name="' + inputName + '"]'
      );
      // if this particular field does not exist on both the origin and destination, return (for this iteration);
      // this means method will only copy fields common to both elements
      if (!originElem[0] || !destinationElem[0]) return;
      destinationElem.val(originElem.val());
    }.bind(this)
  );
};

AuthCtrl.prototype.showThisPreLoginSection = function (target) {
  this.clearErrors();
  this.clearMessages();
  var $target = $(this.parentSelector + " " + target);
  var $targetTitle = $(this.parentSelector + " " + target + "-title");

  if ($targetTitle) {
    $(this._mainTitleParent).children(":not(.hidden)").addClass("hidden");
    $targetTitle.removeClass("hidden");
  }

  this._preLoggedInDirectChildren.forEach(function (elem) {
    $(elem).addClass("hidden");
  });
  $target.removeClass("hidden");

  if (this._preLoggedInAdditionalUnhides[target]) {
    this._preLoggedInAdditionalUnhides[target].forEach(
      function (selector) {
        $(this.parentSelector + " " + selector).removeClass("hidden");
      }.bind(this)
    );
  }
  this._copyInput(target);
  // we might not actually *be* on the auth page (may be the popover on another page), so check for it before animating
  var $topOfAuthPage = $("#top-of-form");
  if ($topOfAuthPage.length) {
    $("html, body").animate(
      { scrollTop: $("#top-of-form").offset().top - 50 },
      200
    );
  }
};

AuthCtrl.prototype.showPreOrPostLogin = function (which) {
  if (which === "pre") {
    $(this._preLoggedInParent).removeClass("hidden");
    $(this._postLoggedInParent).addClass("hidden");
  } else {
    $(this._preLoggedInParent).addClass("hidden");
    $(this._postLoggedInParent).removeClass("hidden");
  }
};

AuthCtrl.prototype.showErrors = function (defaultTarget, responseObject) {
  if (responseObject["has_errors"]) {
    delete responseObject["has_errors"];
  }
  for (var key in responseObject) {
    responseObject[key].forEach(
      function (errorMsg) {
        // will only display backend validation errors that are non-field ('__all__') or pertain to one of the form fields.
        // IE, "role_to_patient" is done entirely on the backend; validation errors for it, if any should happen for whatever reason,
        // wouldn't be displayed.
        if (this._inputNameList.indexOf(key) !== -1) {
          this.setError('input[name="' + key + '"]', errorMsg);
        } else if (key === "__all__") {
          this.setError(defaultTarget, errorMsg);
        }
      }.bind(this)
    );
  }
};

AuthCtrl.prototype.clearErrors = function () {
  $(this.parentSelector + " .parsley-errors-list.filled").remove();
};

AuthCtrl.prototype.clearMessages = function () {
  $(this.parentSelector + " .message").remove();
};

AuthCtrl.prototype.setError = function (target, message) {
  var $field = $(this.parentSelector + " " + target);
  $field.removeClass("parsley-success");
  $field.addClass("parsley-error");
  $field.after(
    '<ul class="parsley-errors-list filled"><li>' + message + "</li></ul>"
  );
};

AuthCtrl.prototype.setMessage = function (target, message) {
  $message = $('<p class="message">' + message + "</p>")
    .hide()
    .fadeIn(200);
  $(this.parentSelector + " " + target).after($message);
};

AuthCtrl.prototype.goToNextUrl = function () {
  var nextUrl = $(".next.url").text().trim();
  window.location.href = nextUrl;
};

AuthCtrl.prototype.behaveLikeRadioButtons = function (target) {
  var $target = $(target);
  var groupName = $target.attr("name");
  $(this.parentSelector + ' input[name="' + groupName + '"]')
    .toArray()
    .forEach(function (elem) {
      $(elem).prop("checked", false);
    });
  $target.prop("checked", true);
};

AuthCtrl.prototype.showTermsAgreement = function (responseObject) {
  $("#updated-terms-modal").modal("show");
};

// export default AuthCtrl;
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = AuthCtrl;
} else {
  window.AuthCtrl = AuthCtrl;
}

// autoInit

// $(document).ready(() => {
window.authentication = window.authentication || {};
authentication.offcanvasNav = { ctrl: new AuthCtrl("nav#offcanvas-navbar") };
authentication.desktopNavbar = { ctrl: new AuthCtrl(".v3-navbar") };
new AuthConstructor(
  "logout",
  ".logout-form a",
  authentication.desktopNavbar.ctrl,
  authentication.offcanvasNav.ctrl
);
new AuthConstructor(
  "logout",
  ".logout-form a",
  authentication.offcanvasNav.ctrl,
  authentication.desktopNavbar.ctrl
);
// });
