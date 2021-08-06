$(document).ready(function() {
  var $postalCode = $('.buy-now-postal-code');
  var $username = $('.buy-now-email');
  var $getStartedBtn = $('#get-started-btn');
  var $buyNowForm = $('#buy-now-form');
  var validateUrl = endpoints.api.validatePostalCode;
  var postalCodeExamples = window.postalCodeExamples;

  $getStartedBtn.on('click', function (e) {
    e.preventDefault();
    $postalCode.parsley().reset();
    if ($username.length) {
      $username.parsley().reset();
      var isValidUsername = false;
    }
    var isValidPostalCode = false;
    if ($buyNowForm.parsley().validate()) {
      $.get(validateUrl + '?postal_code=' + $postalCode.val().replace(/ /g, ''), function (data) {
        if (data.is_valid) {
          isValidPostalCode = true;
        } else {
          $postalCode.parsley().addError('invalidPostalCode', {
            message: gettext('Invalid postal code. Please use a format like ') + postalCodeExamples,
          });
        }
      }).done(function (response) {
        if ($username.length && $username.val()) {
          $.post(endpoints.api.checkExistEmail, { 'username': $username.val() }, function (data) {
            if (data.is_valid) {
              isValidUsername = true;
            } else {
              $username.parsley().addError('invalidUsername', {
                message: data.message
              });
            }
          }).done(function (response) {
            if (isValidUsername && isValidPostalCode) {
              $buyNowForm.trigger( 'submit' );
            }
          });
        } else if (isValidPostalCode) {
          $buyNowForm.trigger( 'submit' );
        }
      });
    }
  });

  window.PersistingAttributesDataManager.assign($buyNowForm.get(0), {
    afterSet: function() {
      // Call field-specific functions after value is set to avoid conflicts
      $postalCode.setUpCustomField('postalCode', sdc.postalCodeErrorMessage);
    },
  });
});