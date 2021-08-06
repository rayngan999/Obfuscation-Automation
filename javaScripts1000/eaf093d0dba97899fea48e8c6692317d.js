// The global function `gettext` is used for extracting translation strings from javascript files.
// It is set by a script that currently gets loaded in e-commerce but not staff portal.
// Certain files like this one rely on it being set.
// If you are in a context where you don't care about translations (like staff portal), then default gettext
if (!window.gettext) {
  // if gettext isn't available, make it a simple identity function
  window.gettext = function (text) {
    return text;
  };
}

// These include custom parsley validators, and a bunch of methods to get parsley & inputmask to cooperate
// (and abstract away what's being done to make that happen).
window.sdc = window.sdc || {};

window.sdc.getCookie = function (name) {
  const match = document.cookie.match(`${name}=([^;]+)`);
  return match ? match[1] : '';
};

(function () {
  const maxLengthAttributes = ['data-parsley-maxlength', 'maxlength'];
  const minLengthAttributes = ['data-parsley-minlength', 'minlength'];

  const consentAge = window.consentAge || 18;
  const guardianConsentAge = window.guardianConsentAge || 18;

  // - so that parsleyfy and the HTML5 max/minlength attributes don't fight against the additional input added by the inputmask;
  // - we'll validate with regular expressions instead.
  $.prototype.turnOffLengthValidators = function () {
    const $this = $(this);
    $.merge(maxLengthAttributes, minLengthAttributes).forEach(attribute => {
      $this.removeAttr(attribute);
    });
    return $this;
  };

  $.prototype.setParsleyRegexError = function (message) {
    const $this = $(this);
    $this.attr('data-parsley-pattern-message', message);
    return $this;
  };

  $.prototype.setParsleyErrorMessage = function (message) {
    const $this = $(this);
    $this.attr('data-parsley-error-message', message);
    return $this;
  };

  // Call this on the form rather than using
  // inputmask's 'removeMaskOnSubmit' option so as to prevent a parsley/inputmask race condition.
  $.prototype.removeInputMasksAfterParsleyValidatesSuccessfully = function () {
    let $this = $(this);
    const $inputs = $this.find('input');
    $this.parsley().on('form:submit', () => {
      $inputs.each(function () {
        $this = $(this);
        if ($this.inputmask) {
          /**
           * If, heaven forbid, we should hit a JS error in between the input mask being removed and the form
           * being submitted, the user will probably re-attempt form submission, but the lack of input mask characters
           * will cause the input to fail regex-based parsley validation.
           * So remove it. If we come back from a backend error, they'll all have been re-applied anyhow.
           */
          $this.removeAttr('data-parsley-pattern');
          if ($this.inputmask('hasMaskedValue')) {
            $this.inputmask('remove');
          }
        }
      });
    });
  };

  function makeInputMask(pattern) {
    return {
      mask: pattern,
      placeholder: '',
      greedy: false,
      showMaskOnHover: false,
    };
  }

  sdc.postalCodeErrorMessage = gettext('Invalid postal code. Please use a format like ') + window.postalCodeExamples;
  sdc.postalCodeRegex = window.postalCodeMatchers ? window.postalCodeMatchers[0] : '';
  sdc.cognitoRegex = /^[\w =+^$*.[\]{}()?"!@#%&/\\,><':;|~`-]+$/;
  sdc.numericInputFields = {
    postalCode: ['AU', 'US', 'NZ'],
  };

  sdc.phoneInputMaskBlacklist = ['NZ', 'IE', 'DE', 'AT', 'KW'];

  // This is for insurance providers only for which libphonenumber has no mask.
  // The current case is www.bupa.com.au, which is a 6 digit number (134 135).
  sdc.insuranceProviderPhoneInputMask = {
    mask: '*99 999',
    placeholder: '',
    definitions: {
      '*': {
        validator: '[0-9+]',
        casing: 'lower',
      },
    },
  };

  sdc.defaultPhoneInputMask = {
    // Default mask is set to allow country codes with more than one digit
    mask: '*999999999*9999',
    placeholder: '',
    definitions: {
      '*': {
        validator: '[0-9+]',
        casing: 'lower',
      },
    },
  };

  //----------------------------------------------
  // Custom fields (sets up parsley and inputmask)
  //----------------------------------------------

  // ------ be sure to call 'removeInputMasksAfterParsleyValidatesSuccessfully' (above)
  // ------ on the form if you use these.

  const customFields = {};

  customFields.postalCode = {
    regex: new RegExp(sdc.postalCodeRegex, 'i'),
    customValidator: 'valid-postal-code',
    extraRegEx: {
      'AT': /^([1-9][0-9]{3}$)/,
      'DE': /^(^\d{5}$)$/,
    }
  };

  customFields.creditCard = {
    inputMask: makeInputMask('9999[-9999][-9999][-9999]'),
    regex: /^\d{4}-\d{4}-\d{4}-\d{2}\d?\d?$/,
  };

  customFields.phone = {
    inputMask: makeInputMask('(999) [999][-9999]'),
    regex: /^\(\d{3}\)\s\d{3}-\d{4}$/,
  };

  customFields.month = {
    inputmask: makeInputMask('9[9/]'),
    regex: /^\d{2}$/,
  };

  customFields.day = {
    inputmask: makeInputMask('9[9/]'),
    regex: /^\d{2}$/,
  };

  customFields.year = {
    inputmask: makeInputMask('9999'),
    regex: /^\d{4}$/,
  };

  customFields.dob = {
    inputMask: makeInputMask('9[9/]9[9/]9999'),
    regex: /^\d{2}\/\d{2}\/\d{4}$/,
  };

  customFields.ssn = {
    inputMask: makeInputMask('99[9-]9[9-]9999'),
    regex: /^\d{3}-\d{2}-\d{4}$/,
  };

  customFields.sepaDebitIbanNumber = {
    inputMask: makeInputMask('AA99 9999 9999 9999 9999 99'),
    regex: /^(DE|de)[0-9]{2} [0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4} [0-9]{2}$/,
  };

  customFields.cognito = {
    inputMask: '',
    regex: sdc.cognitoRegex,
  };

  function setUpNumericKeyboard($this, type) {
    if (type in sdc.numericInputFields) {
      const countryCode = sdc.getCookie('country_code');
      if (sdc.numericInputFields[type].includes(countryCode)) {
        $this.attr('type', 'tel');
      }
    }
  }

  $.prototype.setUpCustomField = function (type, errorMessage) {
    if (typeof sdc.utils !== 'undefined' && sdc.utils.isSamsung()) {
      return;
    }
    if (!customFields[type]) {
      throw `${type} is not currently set up as a custom field.`;
    }
    const $this = $(this);
    setUpNumericKeyboard($this, type);

    const countryCode = sdc.getCookie('country_code') || 'US';
    if (customFields[type]['extraRegEx'] && customFields[type]['extraRegEx'][countryCode] !== undefined) {
      $this
        .attr('data-parsley-' + customFields[type].customValidator , countryCode)
    } else {
      $this
        .attr('data-parsley-pattern', customFields[type].regex)
        .setParsleyRegexError(errorMessage);
    }

    $this
      .turnOffLengthValidators()
      .inputmask(customFields[type].inputMask);
    return $this;
  };

  $.prototype.resetCustomField = function (type, examples, regex) {
    // Used in our tests for form_validation_helpers to clear the custom field
    // and set the error message.
    customFields[type].regex = regex;
    sdc.postalCodeErrorMessage = gettext('Invalid postal code. Please use a format like ') + examples;
    $(this).setUpCustomField(type, sdc.postalCodeErrorMessage);
  };

  $.prototype.setUpPhoneField = function (initialCountryCode) {
    // initialCountryCode sets the flag value we want to display by default on Staff portal
    let countryCode = initialCountryCode || sdc.getCookie('country_code') || 'US';
    const $this = $(this);
    const insurancePhoneInput = $('body').find('#id_insurance_phone');
    const isInsurancePhone = $this.is(insurancePhoneInput);

    // These countries have 6 digit short-code phone numbers we accept on insurance phone fields.
    const insuranceProviderCountries = ['AU'];

    function buildMask(phoneNumber) {
      const formatter = new libphonenumber.AsYouType(countryCode);
      const formattedNumber = formatter.input(phoneNumber.replace(/x\d{0,4}/, ''));
      let templateFormat;
      switch (countryCode) {
        case 'ES':
          templateFormat = 'xxx xxx xxx xxx';
          break;
        default:
          templateFormat = formatter.template;
          break;
      }
      if (templateFormat && countryCode && formattedNumber.length > 2) {
        if (formattedNumber[0] === '+') {
          templateFormat = templateFormat.replace('x', '+');
        }
        templateFormat = templateFormat.replace(/x/g, '9');
        // TODO: this extensions handling breaks multi lenght phone numbers,
        // a better solution should be implemented instead of keeps adding custom templateFormats or adding countries to phoneInputMaskBlacklist
        // libphonenumber's AsYouType doesn't support extensions https://github.com/catamphetamine/libphonenumber-js
        // and the README sugest to implement extensions on a sepparate field:
        //   Google's "As You Type" formatter does not support entering phone number extensions.
        //   If your project requires phone number extensions input then use a separate input field for that.
        // A better UI component could be implemented to support that.
        templateFormat += '[x9999]';
        return makeInputMask(templateFormat);
      }

      return sdc.defaultPhoneInputMask;
    }

    function shouldIgnorePhoneMaskForCountry(ctryCode) {
      return sdc.phoneInputMaskBlacklist.includes(ctryCode.toUpperCase());
    }

    function setNumber(number) {
      let phoneNumber = new libphonenumber.parsePhoneNumberFromString(number);
      phoneNumber.nationalNumber ? $this.val(phoneNumber.nationalNumber) : $this.val(number);
    }

    function updateCountryCode() {
      const newCountryCode = $this.intlTelInput('getSelectedCountryData').iso2;
      if (newCountryCode) {
        countryCode = newCountryCode.toUpperCase();
      } else {
        countryCode = countryCode;
      }
    }

    function applyMask() {
      if (shouldIgnorePhoneMaskForCountry(countryCode)) {
        setNumber($this.val());
        return;
      }

      const mask = insuranceProviderCountries.includes(countryCode) && isInsurancePhone
        ? sdc.insuranceProviderPhoneInputMask : buildMask($this.val());

      $this.inputmask(mask);
    }

    function removeMask() {
      if ($this.inputmask('hasMaskedValue')) {
        $this.inputmask('remove');
      }
    }

    function handleInputChange() {
      updateCountryCode();
      if (shouldIgnorePhoneMaskForCountry(countryCode)) {
        removeMask();
      }
      applyMask();
    }

    function handleCountryChange() {
      updateCountryCode();
      removeMask();
    }

    $this.intlTelInput({
      initialCountry: countryCode,
      separateDialCode: false,
      formatOnDisplay: true,
      nationalMode: true,
      autoPlaceholder: 'off',
      hiddenInput: `${this.attr('name')}_international`,
    });

    function _updateJQueryInputValue() {
      // update jquery input value
      let phoneNumber = new libphonenumber.parsePhoneNumberFromString($this.intlTelInput('getNumber'));
      if (phoneNumber.nationalNumber) $this.val(phoneNumber.nationalNumber);
    };

    $this
      .turnOffLengthValidators()
      .on('countrychange', () => handleCountryChange())
      .on('refreshAddress', (event, data) => setNumber(data.phone))
      .keyup(() => handleInputChange())
      .ready(() => {_updateJQueryInputValue(); handleInputChange();});

    return $this.keyup();
  };

  //--------------------------
  // Custom parsley validators
  //--------------------------

  window.Parsley.addValidator('customerAge', {
    validateString() {
      const $customerDobFields = $('.customer .dob-fields');
      const customerMonth = $('.customer-dob-month').val();
      const customerDay = $('.customer-dob-day').val();
      const customerYear = $('.customer-dob-year').val();
      const zeroPad = function (str) {
        return str.length === 1 ? `0${str}` : str;
      };
      const customerTotalDate = zeroPad(customerMonth) + zeroPad(customerDay) + customerYear;
      let birthday = moment(customerTotalDate, 'MMDDYYYY'),
        age = moment().diff(birthday, 'years');
      if (age < consentAge) {
        $customerDobFields.find('input').addClass('parsley-error').bind('input.clearErrors', function (e) {
          $(this).unbind(e);
          $('.customer-dob-validator').parsley().reset();
        });
        return false;
      }
    },
    messages: {
      en: gettext(`Minimum Customer age is ${consentAge}.`),
      local: gettext(`Minimum Customer age is ${consentAge}.`)
    },
  });

  window.Parsley.addValidator('guardianAge', {
    validateString() {
      const $guardianDobFields = $('.guardian .dob-fields');
      const guardianMonth = $('.guardian-dob-month').val();
      const guardianDay = $('.guardian-dob-day').val();
      const guardianYear = $('.guardian-dob-year').val();
      const zeroPad = function (str) {
        return str.length === 1 ? `0${str}` : str;
      };
      const guardianTotalDate = zeroPad(guardianMonth) + zeroPad(guardianDay) + guardianYear;
      let birthday = moment(guardianTotalDate, 'MMDDYYYY'),
        age = moment().diff(birthday, 'years');
      if (age < guardianConsentAge) {
        $guardianDobFields.find('input').addClass('parsley-error').bind('input.clearErrors', function (e) {
          $(this).unbind(e);
          $('.guardian-dob-validator').parsley().reset();
        });
        return false;
      }
    },
    messages: {
      en: gettext(`Minimum Guardian age is ${guardianConsentAge}.`),
      local: gettext(`Minimum Guardian age is ${guardianConsentAge}.`),
    },
  });

  window.Parsley.addValidator('restrictedRegion', {
    requirementType: 'string',
    validateString(value, requirement) {
      const restrictedRegions = requirement.split(',');
      window.Parsley.addMessage('en', 'restrictedRegion', `We're sorry, but SmileDirectClub is not available in ${regionStates[value]}`);
      return restrictedRegions.reduce((acc, region) => acc && region !== value, true);
    },
  });

  window.Parsley.addValidator('isMonth', value => {
    const month_int = parseInt(value);
    if (month_int < 1 || month_int > 12) {
      window.Parsley.addMessage('en', 'isMonth', gettext('Month must be between 1 and 12.'));
      window.Parsley.addMessage('local', 'isMonth', gettext('Month must be between 1 and 12.'));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('isDay', value => {
    const month_int = parseInt(value);
    if (month_int < 1 || month_int > 31) {
      window.Parsley.addMessage('en', 'isDay', gettext('Date must be between 1 and 31.'));
      window.Parsley.addMessage('local', 'isDay', gettext('Date must be between 1 and 31.'));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('isYear', value => {
    // intended only for DOB validation
    const year_int = parseInt(value);
    const curr_date = new Date();
    const curr_year = curr_date.getFullYear();
    const end_year = curr_year - 12;
    if (year_int < 1900) {
      window.Parsley.addMessage('en', 'isYear', gettext('Year should not be less than 1900.'));
      window.Parsley.addMessage('local', 'isYear', gettext('Year should not be less than 1900.'));
      return false;
    }
    if (year_int > curr_year) {
      window.Parsley.addMessage('en', 'isYear', gettext('Year should not be greater than current year.'));
      window.Parsley.addMessage('local', 'isYear', gettext('Year should not be greater than current year.'));
      return false;
    }
    if (year_int > end_year) {
      window.Parsley.addMessage('en', 'isYear', gettext('Minimum age requirement is 12.'));
      window.Parsley.addMessage('local', 'isYear', gettext('Minimum age requirement is 12.'));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('isRealisticYear', value => {
    // Validates that the entered year is less than 100 years in the past
    const year_int = parseInt(value);
    const curr_date = new Date();
    const curr_year = curr_date.getFullYear();
    const start_year = curr_year - 100; // 100 years ago
    if (year_int <= start_year) {
      window.Parsley.addMessage('en', 'isRealisticYear', gettext('Please enter a valid year.'));
      window.Parsley.addMessage('local', 'isRealisticYear', gettext('Please enter a valid year.'));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('isDate', value => {
    if (!Date.parse(value)) {
      window.Parsley.addMessage('en', 'isDate', gettext('This value should be a valid date.'));
      window.Parsley.addMessage('local', 'isDate', gettext('This value should be a valid date.'));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('isAscii', {
    priority: 500,
    requirementType: 'string',
    validateString(value) {
      // The fllowing RegEx is identical to the Parsley JS email validator. It matches an input string that takes the form of locality@domain.com
      // This email RegEx is designed to only match emails with a valid character set.
      const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-=\?\^_`\|~])+(\.([a-z]|\d|[!#\$%&'\*\+\-=\?\^_`\|~])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d)|(([a-z]|\d)([a-z]|\d|-|\.|_|~)*([a-z]|\d)))\.)+(([a-z])|(([a-z])([a-z]|\d|-|\.|_|~)*([a-z])))$/i;
      let emailMatches;
      const email = value.split('@');
      if (!emailRegex.test(value)) {
        for (let i = 0; i < email.length; i++) {
          // Regex matches characters outside of the stated set, which is a subset of the ascii standard used by silverpop for emails.
          if (!/^[a-zA-Z0-9!#$%^&*_+\-=?.~]*$/.test(email[i])) {
            // Regex same as above but matches characters within the ascii standard.
            emailMatches = email[i].match(/[^a-zA-Z0-9!#$%^&*_+\-=?.~]*/g).join('');
            const message = gettext(`Invalid email ${value}, This field cannot contain the following character(s): ${emailMatches}`);
            window.Parsley.addMessage('en', 'isAscii', message);
            window.Parsley.addMessage('en', 'isAscii', message);
            return false;
          }
          const message = gettext('This is not a valid Email');
          window.Parsley.addMessage('en', 'isAscii', message);
          window.Parsley.addMessage('local', 'isAscii', message);
          return false;
        }
      }
    },
  });

  window.Parsley.addValidator('isLatinOne', {
    requirementType: 'string',
    validateString(value) {
      const message = gettext('Please use only English alphabet, numbers and/or symbols');
      let matches;
      // Regex matches characters outside of the stated set, which is the Latin-1 standard which is a unicode sub-block used by silverpop for names/addresses.
      const testString = /^[a-zA-Z0-9\u0080-\u00ff!#$%^&*_ +\-=?,.~`'/]*$/.test(value);
      // Regex same as above but also matches characters within the Latin-1 subset of the Unicode standard.
      matches = value.match(/[^a-zA-Z0-9\u0080-\u00ff!#$%^&*_ +\-=?,.~`'/]*/g).join('');
      window.Parsley.addMessage('en', 'isLatinOne', message);
      window.Parsley.addMessage('local', 'isLatinOne', message);
      return testString;
    },
  });

  window.Parsley.addValidator('isValidCardNumber', value => {
    if ($.payment.cardType(value) !== null) {
      return $.payment.validateCardNumber(value);
    }
    return true;
  });

  window.Parsley.addValidator('isNotCareCreditCard', value => {
    const careCreditCardPrefixes = ['601918', '524306', '521344'];
    const supportPhoneNumber = document.getElementById('customer_care_phone_number').textContent;
    if (sdc.getCookie('country_code') === 'US' && careCreditCardPrefixes.includes(value.substring(0, 6))) {
      const message = gettext('To ensure that your CareCredit order is processed correctly, please call %s.');
      window.Parsley.addMessage('en', 'isNotCareCreditCard', interpolate(message, [supportPhoneNumber]));
      window.Parsley.addMessage('local', 'isNotCareCreditCard', interpolate(message, [supportPhoneNumber]));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('passIsLong', value => {
    const password_length = value.length;
    if (password_length < 6) {
      window.Parsley.addMessage('en', 'passIsLong', gettext('Passwords must be at least 6 characters in length.'));
      window.Parsley.addMessage('local', 'passIsLong', gettext('Passwords must be at least 6 characters in length.'));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('isPassLengthSane', value => {
    const password_length = value.length;
    if (password_length > 99) {
      window.Parsley.addMessage('en', 'isPassLengthSane', gettext('Passwords must be 99 or fewer characters in length.'));
      window.Parsley.addMessage('local', 'isPassLengthSane', gettext('Passwords must be 99 or fewer characters in length.'));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('containsUpper', value => {
    const password = value;
    let uppers = 0;
    for (let i = 0, len = password.length; i < len; i++) {
      if (/^[A-Z]+$/.test(password[i])) {
        uppers++;
      }
    }
    if (uppers === 0) {
      window.Parsley.addMessage('en', 'containsUpper', gettext('Passwords must contain at least one uppercase letter'));
      window.Parsley.addMessage('local', 'containsUpper', gettext('Passwords must contain at least one uppercase letter'));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('containsLower', password => {
    const hasLower = password.match(/[a-z]+/) !== null;
    if (!hasLower) {
      window.Parsley.addMessage('en', 'containsLower', gettext('Passwords must contain at least one lowercase letter'));
      window.Parsley.addMessage('local', 'containsLower', gettext('Passwords must contain at least one lowercase letter'));
      return false;
    }
    return true;
  });

  window.Parsley.addValidator('isCognitoCompliant', password => {
    const isCognitoCompliant = password.match(sdc.cognitoRegex);
    if (!isCognitoCompliant) {
      window.Parsley.addMessage('en', 'isCognitoCompliant', gettext('Password can only contain letters, numbers, spaces and following special characters: +=^$*.[]{}()?-"!@#%&/\\,><\':;|_~`'));
      window.Parsley.addMessage('local', 'isCognitoCompliant', gettext('Password can only contain letters, numbers, spaces and following special characters: +=^$*.[]{}()?-"!@#%&/\\,><\':;|_~`'));
      return false;
    }
    return true;
  });


  (function () {
    let $cardExpMonthField;
    let $cardExpYearField;
    let $target;
    let cardExpFields;
    let cardExpChangeListenersSet = false;

    // '$target' is this validator element itself
    window.Parsley.addValidator('cardExpiration', (value, requirement) => {
      if (!$cardExpMonthField && !$cardExpYearField) {
        const selectorArray = requirement.split(',');
        $cardExpMonthField = $(selectorArray[0].trim());
        $cardExpYearField = $(selectorArray[1].trim());
        $target = $(selectorArray[2].trim());
        cardExpFields = [$cardExpMonthField, $cardExpYearField];
      }

      if (!cardExpChangeListenersSet) {
        cardExpFields.forEach($field => {
          // - start listening once one/any of these fields has failed.
          // - validate gets called even if it hasn't, but until 'data-parsley-trigger' gets set to something,
          // - it won't actually happen until the first failure.
          $field.on('input', () => {
            $target.parsley().validate();
          });
        });
        cardExpChangeListenersSet = true;
      }

      const validSoFar = cardExpFields.reduce((acc, $field) => acc && $field.parsley().isValid(), true);

      const expMonth = $cardExpMonthField.val();
      const expYear = $cardExpYearField.val();

      if (!validSoFar || (!expMonth && !expYear)) {
        // if any other validators before this one have returned false, this shouldn't do anything (so return true and
        // leave UI alone)
        return true;
      }

      const cardExpirationTime = moment(`${expYear}-${expMonth}`, 'YYYY-MM').endOf('month');
      const now = moment();
      isValid = cardExpirationTime.isAfter(now);
      return setUIAndReturn(isValid);

      function setUIAndReturn(bool) {
        if (bool) {
          cardExpFields.forEach($field => {
            $field.removeClass('parsley-error');
          });
        } else {
          setTimeout(() => {
            cardExpFields.forEach($field => {
              // - If the group validator (invalid expiration date) fails, we want to start validating it *and*
              // - the individual validators. So set 'data-parsley-trigger' to 'input' for each individual field
              // - such that we can validate before an initial failure (only the group has failed so far),
              // - then call validate() to 'restart' the field with this new setting.
              // - similar logic for DOB as well.
              $field.attr('data-parsley-trigger', 'input').parsley().validate();
              $field.addClass('parsley-error');
            });
          }, 0);
        }
        return bool;
      }
    });
  }());

  (function () {
    // - need to pass this validator comma-separated selectors for, in order:
    // - patient DOB month, day & year, followed by the user is guardian checkbox, the validator itself, and finally
    // - the patient is self radio button group (parent of the buttons).
    let $patientAgeMonth;
    let $patientAgeDay;
    let $patientAgeYear;
    let $patientAgeGuardianCheckbox;
    let $patientAgeValidatorElem;
    let $isPatientSelfGroup;
    let patientDOBFields;
    let patientAgeChangeListenerSet = false;

    window.Parsley.addValidator('patientAge', (value, requirement) => {
      if (!$patientAgeMonth) {
        const selectorArray = requirement.split(',');
        $patientAgeMonth = $(selectorArray[0].trim());
        $patientAgeDay = $(selectorArray[1].trim());
        $patientAgeYear = $(selectorArray[2].trim());
        $patientAgeGuardianCheckbox = $(selectorArray[3].trim());
        $patientAgeValidatorElem = $(selectorArray[4].trim());
        $isPatientSelfGroup = $(selectorArray[5].trim());
        patientDOBFields = [$patientAgeMonth, $patientAgeDay, $patientAgeYear];
      }

      if (!patientAgeChangeListenerSet) {
        patientDOBFields.forEach($elem => {
          $elem.on('input', rerunValidation);
        });
        $patientAgeGuardianCheckbox.click(rerunValidation);
        $isPatientSelfGroup.find('input').click(rerunValidation);
        patientAgeChangeListenerSet = true;
      }

      const validSoFar = patientDOBFields.reduce((acc, $field) => acc && $field.parsley().isValid(), true);

      if (!validSoFar) {
        return true;
      }

      const month = $patientAgeMonth.val();
      const day = $patientAgeDay.val();
      const year = $patientAgeYear.val();
      const patientBirthday = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
      if (!patientBirthday.isValid()) {
        return setUIandReturn(false, 'Please input a valid date.');
      }
      const patientAge = moment().diff(patientBirthday, 'years');
      const userIsPatient = $isPatientSelfGroup.find(':checked').val() === 'YES';
      const userIsGuardian = $patientAgeGuardianCheckbox.is(':checked');
      if (userIsPatient && patientAge < consentAge) {
        return setUIandReturn(
          false,
          gettext(
            `If you\'re under ${consentAge}, you cannot register. Please select "this order is for somebody else" to continue.`,
            ),
        );
      }
      if (patientAge < 12) {
        return setUIandReturn(false, gettext('Minimum age requirement is 12.'));
      }
      if (patientAge < consentAge && !userIsGuardian) {
        return setUIandReturn(
          false,
          gettext(
            `If the patient is under ${consentAge}, you need to be the guardian to continue.`,
          ),
        );
      }

      return setUIandReturn(true);


      function setUIandReturn(bool, message) {
        if (bool) {
          patientDOBFields.forEach($field => {
            $field.removeClass('parsley-error');
          });
          $('.parsley-patientAge').text(' ');
        } else {
          setTimeout(() => {
            patientDOBFields.forEach($field => {
              $field.attr('data-parsley-trigger', 'input').parsley().validate();
              $field.addClass('parsley-error');
            });
            if (message) {
              $('.parsley-patientAge').text(message);
            }
          }, 0);
        }
        return bool;
      }

      function rerunValidation() {
        $patientAgeValidatorElem.parsley().validate();
      }
    });
  }());

  // Put this on the 'confirm password' field.
  (function () {
    let $password;
    let $passwordConfirmation;
    let passwordFields;
    let inputListenersSet = false;
    window.Parsley.addValidator('passwordConfirmation', (value, requirement) => {
      if (!$password) {
        const selectorArray = requirement.split(',');
        $password = $(selectorArray[0].trim());
        $passwordConfirmation = $(selectorArray[1].trim());
        passwordFields = [$password, $passwordConfirmation];
      }

      if (!inputListenersSet) {
        $password.on('input', () => {
          $passwordConfirmation.parsley().validate();
        });
        inputListenersSet = true;
      }

      const password = $password.val();
      const confirmPassword = value;
      if (password === confirmPassword) {
        if (password.length > 0 && confirmPassword.length > 0) {
          passwordFields.forEach($elem => {
            $elem.removeClass('parsley-error');
          });
        }
        return true;
      }
      setTimeout(() => {
        passwordFields.forEach($elem => {
          $elem.addClass('parsley-error');
        });
      }, 0);
      return false;
    });
  }());

  // does the opposite of the built-in parsley equalto validator- using this to make sure patient and guardian fields are different
  (function () {
    window.Parsley.addValidator('notequalto', (value, requirement) => {
      const selectorArray = requirement.split(',');
      $patientFirstName = $(selectorArray[0].trim());
      $patientLastName = $(selectorArray[1].trim());
      $guardianFirstName = $(selectorArray[2].trim());
      $guardianLastName = $(selectorArray[3].trim());

      const $guardianFields = [$guardianFirstName, $guardianLastName];

      if ($patientFirstName.val().toLowerCase().trim() + $patientLastName.val().toLowerCase().trim() == $guardianFirstName.val().toLowerCase().trim() + $guardianLastName.val().toLowerCase().trim()) {
        return setUIandReturn(false, 'The guardianâs first and last name cannot be the same as the patient.');
      }
      return setUIandReturn(true);


      function setUIandReturn(bool, message) {
        if (bool) {
          $guardianFields.forEach($field => {
            $field.removeClass('parsley-error');
          });
          $('.parsley-notequalto').text(' ');
        } else {
          setTimeout(() => {
            $guardianFields.forEach($field => {
              $field.attr('data-parsley-trigger', 'input').parsley().validate();
            });
            if (message) {
              $('.parsley-notequalto').text(message);
            }
          }, 0);
        }
        return bool;
      }
    });
  }());

  (function () {
    // Canadian config accepts US postal codes as well.
    const postalCodeConfig = {
      ca: {
        regexPattern: sdc.postalCodeRegex,
        errorMessage: "Must be alphanumeric in 'xxxxx', 'xxxxx-xxxx', 'xxx xxx' or 'xxx-xxx' format.",
      },
      us: {
        regexPattern: sdc.postalCodeRegex,
        errorMessage: "Must be alphanumeric in 'xxxxx' or 'xxxxx-xxxx' format.",
      },
    };

    Parsley.addValidator('postalCode', {
      validateString(value, countryCode) {
        const config = postalCodeConfig[countryCode];
        Parsley.addMessage('en', 'postalCode', config.errorMessage);
        const regExp = new RegExp(config.regexPattern);

        return regExp.test(value);
      },
    });
  }());

  window.Parsley.addValidator('validPostalCode', {
    validateString(value, countryCode) {
      sdc.postalCodeRegex = window.postalCodeMatchers ? window.postalCodeMatchers[0] : '';
      const regExp = new RegExp(sdc.postalCodeRegex);
      const type = 'postalCode';
      if (!customFields[type]) {
        throw `${type} is not currently set up as a custom field.`;
      }
      let errorMessage = '';
      let country = '';
      if (countryCode == 'DE') {
        const extraRegex = new RegExp(customFields[type]['extraRegEx']['AT']);
        if (extraRegex.test(value)) {
          country = gettext('Austria');
          errorMessage = interpolate(
            gettext('<br>This seems to be a valid postal code for %s. Click <div class="country-chooser-link jsCountryChooserButton"><span>here</span></div> to find our service areas in %s.'),
            [country, country],
          );
        }
      }

      if (countryCode == 'AT') {
        const extraRegex = new RegExp(customFields[type]['extraRegEx']['DE']);
        if (extraRegex.test(value)) {
          country = gettext('Germany');
          errorMessage = interpolate(
            gettext('<br>This seems to be a valid postal code for %s. Click <div class="country-chooser-link jsCountryChooserButton"><span>here</span></div> to find our service areas in %s.'),
            [country, country],
          );
        }
      }

      window.Parsley.addMessage('en', 'validPostalCode', sdc.postalCodeErrorMessage + errorMessage);
      window.Parsley.addMessage('local', 'validPostalCode', sdc.postalCodeErrorMessage + errorMessage);

      return regExp.test(value);
    }
  });

  window.Parsley.addValidator('validPhone', {
    validate(value, req, instance) {
      const phoneId = `#${instance.element.id}`;
      const countryCode = $(phoneId).intlTelInput('getSelectedCountryData').iso2;
      const phoneNumber = libphonenumber.parsePhoneNumberFromString(value, countryCode.toUpperCase());
      if (phoneNumber) {
        return phoneNumber.isValid();
      }
      return false;
    },
    messages: {
      en: 'Please enter a valid phone number.',
      local: gettext('Please enter a valid phone number.'),
    },
  });

  window.Parsley.addValidator('validPhoneNoExt', {
    validate(value, req, instance) {
      const countryCode = $(instance.element).intlTelInput('getSelectedCountryData').iso2;
      if (countryCode) {
        const phoneNumber = libphonenumber.parsePhoneNumberFromString(value, countryCode.toUpperCase());
        if (phoneNumber && !('ext' in phoneNumber)) {
          return phoneNumber.isValid();
        }
      }
      return false;
    },
    messages: {
      en: 'Please enter a valid phone number.',
      local: gettext('Please enter a valid phone number.'),
    },
  });
}());
