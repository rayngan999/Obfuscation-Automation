// Auto Loader Module
// ==================
//
// A Singleton that will load modules defined by DOM elements. A the element
// must have the data-load attribute that contains a space separated list of
// modules to load.
//
//     <div data-load="jquery hyper-drive jetpack starwars/boba-fett">
//     </div>

/*global define */

define('autoload', ['jquery', 'require'], function ($, require) {
  'use strict';

  function AutoLoad(element) {
    this.element = element || document;
  }

  // AutoLoad.prototype.check
  // ------------------------
  //
  // Check the DOM for any elements that have not been loaded then
  // automatically load them.

  AutoLoad.prototype.check = function () {
    var self = this,
      $elements = $(this.element).find('[data-load]');

    $elements.each(function () {
      var $this = $(this),
        modules = $.trim($this.data('load'));

      if (!$this.data('loaded') && modules.length) {
        self.load(modules.split(/\s+/));
        $this.data('loaded', true);
      }
    });
  };

  // AutoLoad.prototype.check
  // ------------------------
  //
  // Check the DOM when an event fires. This is necessary because this module
  // relies on dirty-checking. `event` is a space separated list of event
  // names.
  //
  // To load modules on DOM ready:
  //
  //     autoload.when('ready');

  AutoLoad.prototype.when = function (event) {
    $(this.element).on(event, $.proxy(this.check, this));
  };

  // Autoload.prototype.load
  // -----------------------
  //
  // A wrapper for require. Allows for easy mocking in the test cases.

  AutoLoad.prototype.load = function (modules) {
    require(modules);
  };

  return new AutoLoad();
});