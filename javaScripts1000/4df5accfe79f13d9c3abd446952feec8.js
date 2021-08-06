/**
 * User: parmer
 * Date: 11/3/2015
 */
(function (init) {
	define(['jquery'], init);
})(function($) {
	function BubbleField(inputContainer, config) {
		this.container = $(inputContainer);
		this.input = this.container.find('input');
		this.regex = config.regex;
		this.bubbleContainer = $('<div></div>').addClass('bubble-list').insertBefore(this.input);
		this.values = [];

		if (!this.container.hasClass('bubble-text-field')) {
			this.container.addClass('bubble-text-field');
		}
		this.container.data('bubble-error', '');

		// Listeners
		this.input.on('keypress', $.proxy(this.keypress, this));
		this.input.on('focus blur', $.proxy(this.blur, this));
		this.container.on('click', '[data-bubble-remove]', $.proxy(this.deleteBubble, this));
		this.container.on('bubble.delete', $.proxy(this.clear, this));
	}

	BubbleField.prototype.DELIM_REGEX = /[;, ]/;
	BubbleField.prototype.DELIM_CODES = [' ', ',', ';'];

	BubbleField.prototype.updateBubbles = function() {
		var bubbles = '';
		this.container.data('list-val', this.values.join(','));

		// Create a bubble for each value in the list
		for (var i = 0; i < this.values.length; i++) {
			// We could have used handlebars, but since this is such a simple template, I decided to just do it manually.
			bubbles += '<span class="bubble">' + this.values[i] + '<span class="delete icon-remove" data-bubble-remove="' + this.values[i] + '"></span></span>';
		}

		this.bubbleContainer.html(bubbles);
	};

	BubbleField.prototype.deleteBubble = function(event) {
		var valueToDelete = $(event.currentTarget).data('bubble-remove');

		this.values = $.grep(this.values, function(value) {
			return value != valueToDelete;
		});

		this.updateBubbles();
	};

	BubbleField.prototype.clear = function(event) {
		this.values = [];
		this.updateBubbles();
	};

	BubbleField.prototype.blur = function(event) {
		if (event.type === 'focus' && !this.container.hasClass('focus')) {
			this.container.addClass('focus');
		}
		else if (event.type === 'blur') {
			this.container.removeClass('focus');
			this.readEmails();
		}

	};

	BubbleField.prototype.readEmails = function() {
		var errorVals = [];
		var currVals = this.input.val().split(this.DELIM_REGEX);

		for (var i = 0; i < currVals.length; i++) {
			if (this.regex.test(currVals[i])) {
				if (this.values.indexOf(currVals[i]) == -1) {
					this.values.push(currVals[i]);
				}
			}
			else {
				errorVals.push(currVals[i]);
			}
		}

		this.input.val(errorVals.join(' '));
		this.updateBubbles();
	};

	BubbleField.prototype.keypress = function (event) {
		var codeAsString = String.fromCharCode(event.keyCode);
		var indexOfCode = this.DELIM_CODES.indexOf(codeAsString);

		if (indexOfCode > -1) {
			this.readEmails();
		}
	};

	$.fn.extend({
		bubbleField: function(options) {
			var config = {
				regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/
			};

			if (options && typeof options === 'string') {
				if (options === 'val') {
					var values = this.data('list-val');
					return values ? values.split(',') : [];
				}
				else if (options === 'clear') {
					this.trigger('bubble.delete');
				}
				else {
					return this.data('bubble-error');
				}
			}
			else if (!options || typeof options === 'object') {
				$.extend(config, options);

				return this.each(function () {
					this['bubbleObject'] = new BubbleField(this, config);
				});
			}
			else {
				return this;
			}
		}
	});
});