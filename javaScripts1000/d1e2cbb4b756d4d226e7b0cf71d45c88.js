ï»¿(function ($) {
	$(function () {
		var selector = "div#errorMessageBox";
		var createDom = function () {
			if ($("div#errorMessageBox").length === 0) {
				var mainDiv =
					'<div class="cc-overlay-message" id="errorMessageBox">' +
					'   <div class="cc-container">' +
					'       <div class="cc-content-box-share">' +
					'           <div class="cc-content-main">' +
					'               <div class="cc-close-overlay cc-button-close">' +
					'                   <div class="cc-svg cc-svg-close-primary-color"><span>Chiudi</span></div>' +
					'               </div>' +
					'               <div class="cc-content-message">' +
					'                   <p class="cc-title"></p>' +
					'                   <p class="cc-text"></p>' +
					'               </div>' +
					'            </div>' +
					'        </div>' +
					'    </div>' +
					'</div>';
				$("body").prepend(mainDiv);
			}
		}
		createDom();

		var show = function () {
			$(selector).fadeIn(200);
		}

		var hide = function () {
		    $(selector).fadeOut(200);
		    if (onCloseCallback != null) {
		        onCloseCallback();
		    }
		}

		var onCloseCallback = null;

		var messageBox = function (title, text, _onCloseCallback) {
			$(".cc-title", selector).text(title);
			$(".cc-text", selector).text(text);
			show();

			onCloseCallback = _onCloseCallback;
		}

		$(selector).on("click", ".cc-close-overlay.cc-button-close", function () {
			hide();
		});

		$(selector).on("click",
			".cc-container",
			function (e) {
				e.stopPropagation();
			});

		$(selector).on("click",
			function () {
				hide();
			});

		window.MessageBox = messageBox;
		window.GenericErrorMessageBox = function() {
			MessageBox("Errore", "Si Ã¨ verificato un errore, si prega di riprovare piÃ¹ tardi. Se il problema persiste scrivere a sistemi.informativi@fitservizi.it");
		}
	});
})(jQueryV2);