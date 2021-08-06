(function () {
	'use strict';

	function init() {
		/**
		 * @namespace Guid
		 */
		return {
			/**
			 * @returns {string} an empty Guid (00000000-0000-0000-0000-000000000000)
			 */
			Empty: function () {
				return "00000000-0000-0000-0000-000000000000";
			},

			/**
			 * @param {string} gid the Guid to test
			 * @returns {boolean} true only if the guid is a non-empty string that does not match {@link Guid.Empty}
			 * @constructor
			 */
			IsEmpty: function (gid) {
				return gid === this.Empty() || typeof (gid) === 'undefined' || gid === null || gid === '';
			},

			/**
			 * @param {string} value The guid to test
			 * @returns {boolean} If the guid is valid or not
			 */
			IsValid: function (value) {
				var rGx = new RegExp("\\b(?:[A-F0-9]{8})(?:-[A-F0-9]{4}){3}-(?:[A-F0-9]{12})\\b");
				return rGx.exec(value) !== null;
			},

			/**
			 * @returns {string} a new Guid
			 */
			New: function () {
				var res = [], hv;
				var rgx = new RegExp("[2345]");
				for (var i = 0; i < 8; i++) {
					hv = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
					if (rgx.exec(i.toString()) !== null) {
						if (i === 3) { hv = "6" + hv.substr(1, 3); }
						res.push("-");
					}
					res.push(hv.toUpperCase());
				}
				
				return res.join('');
			}
		};
	}

	define([], init);
	
})();