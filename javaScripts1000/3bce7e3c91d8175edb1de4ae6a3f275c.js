var sdc = sdc || {};
sdc.formHelpers = sdc.formHelpers || {};

/**
 * $(elem).data('parsley-required') comes from jQuery's cache. Once. Even if the value changes, what .data('..')
 * returns won't. Can't use it here. I believe that this caching behavior is specific to html5 data- attributes.
 */
$.prototype.attrBool = function(attr) {
  var $this = $(this);
  var val = $this.attr('data-' + attr);
  if (val === 'false') return false;
  if (val === '') return true;
  return Boolean(val);
};

sdc.formHelpers.toggleFormSection = function ($section, toShow, toRequire) {
  /**
   * This function didn't used to have distinct 'toShow' & 'toRequire' parameters;
   * used to be 'toActive', which covered both.
   * So if 'toRequire' not explicitly provided, assume that 'toShow' means "show and require".
   *
   * NOTE: this function does *not* change 'data-parsley-required' on anything.
   * It applies 'data-parsley-excluded' as appropriate, which un-requires required fields,
   * but has no effect on fields that weren't required to begin with.
   *
   * ALSO NOTE: in the off-chance that this ever comes up, note that you couldn't use this function to start
   * requiring a bunch of inputs that started with 'data-parsley-required="false"'. Would need to start them
   * with 'data-parsley-required="true"', 'data-parsley-excluded="true"'.
   */
  if (toRequire === undefined) {
    toRequire = toShow;
  }
  var wasShown = ! $section.hasClass('hidden');
  var wasExcluded = $('.form-control', $section).toArray().reduce(function(acc, elem) {
    var required = $(elem).attrBool('parsley-required');
    if (! required) return acc;
    /**
     * If an element is not required, being excluded (or not) changes nothing; it isn't required regardless.
     * So we won't count it toward figuring out the state of the section (required or not).
     */
    var excluded = $(elem).attrBool('parsley-excluded');
    return acc && excluded;
  }, true);
  var wasRequired = ! wasExcluded;
  var toExclude = ! toRequire;


  if (wasShown !== toShow) {
    $section.toggleClass('hidden', ! toShow);
  }

  if (wasRequired !== toRequire) {
    $('.form-control', $section).each(function() {
      var $input = $(this);
      $input.attr('data-parsley-excluded', toExclude);
      $input.parsley().destroy();
      $input.parsley();
    });
  }
};

$(function() {
  sdc.formHelpers.initFieldContainers = function($context) {
    if (! $context) {
      $context = $('body');
    }
    var $fieldContainers = $('.field-container', $context);

    $('input', $fieldContainers).on('input', update);
    $('select', $fieldContainers).on('change', update);
    $('.trimmed-field').on('change', trimField);
    $('[data-toggle="tooltip"]', $fieldContainers).tooltip();

    function init() {
      $('input, select', $fieldContainers).not("input[type='hidden']").each(function() {
        update.call(this);
      });
    }

    function update() {
      var value = this.value || $('option:selected', $(this)).val();
      if (value) {
        $(this).parents('.field-container').addClass('populated');
      } else {
        $(this).parents('.field-container').removeClass('populated');
      }
    }

    function trimField() {
      this.value = this.value.replace(/(^\s*)|(\s*$)/gi, ""); // removes leading and trailing spaces
    }

    init();
  };

  sdc.formHelpers.toggleSectionRequiredIfInput = function($section, toRequire) {
    /**
     * Will require each field in a particular form section upon input into any single field within it.
     * If all input is cleared out (from all inputs in the section), it will no longer be required.
     */
    var $inputs = $section.find('input');
    $inputs.off('input.requireIfInput');
    if (toRequire) {
      $inputs.on('input.requireIfInput', function(e) {
        var thisFieldHasInput = Boolean(e.currentTarget.value.length);
        var thisSectionHasInput = $section.find('input').filter(function() {
          // Exclude inputs with className that includes '-validator', as this is a custom Parsley validator
          // element that always has a value of '***' (such that it be required/unrequired with the rest of the fields).
          return this.className.indexOf('-validator') === -1;
        }).map(function() {
          return Boolean(this.value.length);
        }).toArray().reduce(function(acc, hasInput) {
          return acc || hasInput;
        });
        if (thisFieldHasInput) {
          sdc.formHelpers.toggleFormSection($section, true, true);
        } else if (!thisSectionHasInput) {
          // Parsley's event handler is apparently already queued up behind this & the error message will still be there
          // unless we wait for it to fire.
          setTimeout(sdc.formHelpers.toggleFormSection.bind(null, $section, true, false), 0);
        }
      });
    }
  };

  sdc.formHelpers.initFieldContainers()
});

// export sdc for test modules_utils.spec;
if (! (typeof module !== 'undefined' && typeof module.exports !== 'undefined')) {
  window.sdc = sdc;
} else {
  const exports = module.exports = {};
  exports.sdc = sdc;
}
