(function ($) {
	$.ajax({
		url: 'https://dp-fit-prod-function.azurewebsites.net/api/v1/content/fastpublish',
		type: 'POST',
		dataType: 'json',
		data: JSON.stringify({"id_sito" : 2, "id_tipo" : 70}),
		contentType: "application/json; charset=utf-8",
		beforeSend: function () {
			//
		},
		success: function (data) {
			var classLive = "";
			var live = false;
			var indexView = 0;
			$.each(data.palinsesto, function (index, element) {				
				var currentTime = new Date()
				var hours = currentTime.getHours()
				var minutes = currentTime.getMinutes()
				var current_time;
				if(hours < 10) {
					current_time = "0" + hours + ":" + minutes + ":00";
				}
				else {
					current_time = hours + ":" + minutes + ":00";
				}
				if(current_time >= element.time && current_time <= element.timeEnd && live == false) {
					live = true;
					classLive = "cc-live";
					$(".cc-content-live-element .cc-title").text(element.title);
				}
				else {
					classLive = "";
				}
				var htmlTmp = '<li>' +
					'<p class="cc-time" data-time-start="' + element.datetimeStart + '" data-time-end="' + element.datetimeEnd + '"></p>' +
					'<p class="cc-title"> ' + element.title + ' </p>' +
				'</li>';
				//var today = new Date();
				//var day = new Date(element.datetimeStart);
				//console.log(day.getDate());
				//if((current_time <= element.time || today.getDate() < ) && indexView < 3) {
				
				var d1 = new Date(element.datetimeStart);	
				var t1 = d1.getTime();
				var d = new Date();
				var n = d.getTime();
				console.log(element.title + ' - ' + String(t1) + ' - ' + String(n));
				if((current_time <= element.time || d1 >= d) && indexView < 3) {
				//if((current_time <= element.time) && indexView < 3) {
					$("#scheduleCarouselv2").append(htmlTmp);
					indexView++;
				}
			});				
			var container = $("#scheduleCarouselv2");
			var timesAvailableElements = container.find('.cc-time');
			for (var i = 0; i < timesAvailableElements.length; i++) {
				var timeAvailableElement = $(timesAvailableElements[i]);
				timeAvailableElement.text(getTimefromElement(timeAvailableElement, "time-start"));
			}
		},
		complete: function () {
			//
		},
		error: function (xhr, ajaxOptions, thrownError) {
			//
		}
	});	
    var convertUtcDateToLocalDate = function(date) {
        var currentDate = new Date(date);
        var offset = -(currentDate.getTimezoneOffset());
        var minutes = currentDate.getMinutes();
        minutes += offset;
        currentDate.setMinutes(minutes);
        return currentDate;
    }	
    function getTimefromElement(timeAvailableElement,dataAttributeName) {
        if (timeAvailableElement === null ||
            timeAvailableElement === 'undefined' ||
            timeAvailableElement.length === 0) {
            return "";
        }
        var specificEventTime = timeAvailableElement.data(dataAttributeName);
        var convertedDate = convertUtcDateToLocalDate(specificEventTime);
        return convertedDate.timeNow();
    }
})(jQueryV2);	