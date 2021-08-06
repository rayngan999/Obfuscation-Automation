jQuery(function ($) {
    "use strict";
    var EVENTER = window.EVENTER || {};
    // Match Height Function
    EVENTER.MH = function () {
        $('.equah').each(function () {
            $(this).find('.equah-item').matchHeight();
        });
    };

    EVENTER.GENERATEQRCODE = function (qrInstance, qrContent, qrSize) {
        qrInstance.qrcode({
            // render method: 'canvas', 'image' or 'div'
            render: 'image',
            // version range somewhere in 1 .. 40
            minVersion: 1,
            maxVersion: 40,
            // error correction level: 'L', 'M', 'Q' or 'H'
            ecLevel: 'L',
            // offset in pixel if drawn onto existing canvas
            left: 0,
            top: 0,
            // size in pixel
            size: qrSize,
            // code color or image element
            fill: '#000',
            // background color or image element, null for transparent background
            background: null,
            // content
            text: qrContent,
            // corner radius relative to module width: 0.0 .. 0.5
            radius: 0,
            // quiet zone in modules
            quiet: 0,
            // modes
            // 0: normal
            // 1: label strip
            // 2: label box
            // 3: image strip
            // 4: image box
            mode: 0,
            mSize: 0.1,
            mPosX: 0.5,
            mPosY: 0.5,
            label: 'no label',
            fontname: 'sans',
            fontcolor: '#000',
            image: null
        });
    };

    EVENTER.GENERATETICKETSREGISTRANTS = function (source) {
        if ($('.eventer-temporary-tickets').length <= 0) return;
        $('.eventer-temporary-tickets').show();
        var qrcode_data = [];
        var nonce_qrcode = $('#eventer-ticket-printable').attr('data-nonce');
        var organizer;
        var backorder = '';
        var ticket_img = null;
        var registrant = $('#eventer-ticket-printable').attr('data-registrant');
        var i = 0;
        var ticket_reverse = null;
        var ticket_front = null;
        var event_id = $('#eventer-ticket-printable').attr('data-eid');
        var registrant_span = [];
        var main_reg = $('#eventer-ticket-printable').attr('data-uemail');
        var reg_pos = $('#eventer-ticket-printable').attr('data-regpos');
        $('.eventer-registrant-show').each(function () {
            registrant_span.push($(this));
        });
        function nextStep() {
            if (i >= registrant_span.length) return;
            var qrcode_merged = {};
            var registrant_listing = registrant_span[i];
            if (i === 0) {
                nonce_qrcode = registrant_listing.parent('.eventer-all-registrants').attr('data-nonce');
                organizer = registrant_listing.parent('.eventer-all-registrants').attr('data-organizer');
                event_id = registrant_listing.parent('.eventer-all-registrants').attr('data-eid');
                registrant = registrant_listing.parent('.eventer-all-registrants').attr('data-registrant');
                main_reg = registrant_listing.parent('.eventer-all-registrants').attr('data-mainreg');
                reg_pos = registrant_listing.parent('.eventer-all-registrants').attr('data-regpos');
                backorder = registrant_listing.parent('.eventer-all-registrants').attr('data-backorder');
                $('#eventer-ticket-printable').find('.eventer-qrcode').removeClass('eventer-on-ticket-qr');
                $('#eventer-ticket-printable').find('.eventer-qrcode').attr('data-qr-content', '');
            }

            var qrcode = registrant_listing.attr('data-qrcode');
            var reg_email = registrant_listing.attr('data-email');
            var reg_name = registrant_listing.attr('data-name');
            var reg_event_name = registrant_listing.attr('data-eventid');
            var reg_event_datetime = registrant_listing.attr('data-datetime');
            var reg_elocation = registrant_listing.attr('data-elocation');
            EVENTER.GENERATEQRCODE(registrant_listing, qrcode, 100);
            var qrcode_src = registrant_listing.find('img');
            var reg_ticket = registrant_listing.attr('data-ticket');
            $('#eventer-ticket-printable').find('h3').html('');
            $('#eventer-ticket-printable').find('.eventer-tickets-booked-info').remove();
            $('#eventer-ticket-printable').find('.eventer-ticket-reg-code').html('');

            $('#eventer-ticket-printable').find('.eventer-qrcode').html('');
            $('#eventer-ticket-printable').find('h3').html(reg_name);
            $('#eventer-ticket-printable').find('.registrant-ticket').html('<br/>' + reg_ticket);
            $('#eventer-ticket-printable').find('.eventer-woo-title').html('<br/>' + reg_event_name);
            $('#eventer-ticket-printable').find('.eventer-woo-datetime').html('<br/>' + reg_event_datetime);
            $('#eventer-ticket-printable').find('.eventer-woo-location').html('<br/>' + reg_elocation);
            $('#eventer-ticket-printable').find('.eventer-ticket-reg-code').html(qrcode);
            $('#eventer-ticket-printable').find('.eventer-qrcode').html(qrcode_src);
            html2canvas($('#eventer-ticket-printable'),
                {
                    onrendered: function (canvas) {
                        ticket_img = canvas.toDataURL("image/png", 1.0);
                        qrcode_merged.src = ticket_img;
                        nextStep();
                    }
                });
            qrcode_merged.code = qrcode;
            qrcode_merged.email = reg_email;
            qrcode_merged.name = reg_name;
            qrcode_merged.ticket = reg_ticket;
            qrcode_data.push(qrcode_merged);
            i++;
        }
        html2canvas($('#eventer-ticket-printable'),
            {
                onrendered: function (canvas) {
                    ticket_front = canvas.toDataURL("image/png", 1.0);
                    nextStep();
                }
            });
        if (source === '') {
            $('<div class="eventer-loader-wrap eventer_custom_loader_tickets"><div class="eventer-loader"></div></div>').appendTo('body');
        }
        else {
            $('.eventer-fe-dashboard').find('.eventer-loader-wrap').show();
        }
        setTimeout(
            function () {
                var request = $.ajax({
                    url: initval.ajax_url,
                    type: "post",
                    dataType: 'json',
                    //async: false,
                    data: {
                        action: 'eventer_generate_ticket_qrcode',
                        qrdata: qrcode_data,
                        backorder: backorder,
                        regpos: reg_pos,
                        source: source,
                        front: ticket_front,
                        mainreg: main_reg,
                        reverse: ticket_reverse,
                        reg: registrant,
                        eid: event_id,
                        nonce: nonce_qrcode,
                        organizer: organizer,
                        //img: img
                    },
                    beforeSend: function (xhr) {

                    },
                });
                request.done(function (response) {
                    if (response === null) {
                        return true;
                    }
                    $('form.eventer-show-download-tickets-form').find('.eventer-woo-tickets').val(response.tickets);
                    $('.eventer-temporary-tickets').remove();
                    $('.eventer_custom_loader_tickets, .eventer-loader-wrap').hide();
                    if ($('body').find('.eventer-fe-dashboard').length > 0) {
                        var download_btn = $('.eventer-dashboard-download-tickets').clone();
                        download_btn = download_btn.show();
                        var all_tickets = '<div class="eventer-fe-booking-records">';
                        for (var ticket_create = 0; ticket_create < response.ticket_arr.length; ticket_create++) {
                            all_tickets += '<img src="' + response.url + '/' + response.ticket_arr[ticket_create] + '">';
                        }
                        all_tickets += '</div>';
                        $('#eventer-dashboard-content-area').empty();
                        $('#eventer-dashboard-content-area').append(all_tickets);
                        $('#eventer-dashboard-content-area').append(download_btn);
                        $('html, body').animate({
                            scrollTop: $("#eventer-dashboard-content-area").offset().top
                        }, 2000);
                    }

                    if (typeof response.event_url !== 'undefined' && response.event_url !== '') {
                        //window.location.href = response.event_url;
                        setTimeout(function () { window.location.href = response.event_url }, 2000);
                    }

                });
                request.fail(function (jqXHR, textStatus, errorThrown) {
                    $('.eventer-temporary-tickets').remove();
                });
            },
            1500);
    };

    $(document).ready(function () {
        EVENTER.MH();
        $(document).on('click', '.eventer-toggle-area-trigger', function (e) {
            var dialog_heading = $(this).attr('data-eventer-dialog-heading');
            if (typeof dialog_heading !== 'undefined' && dialog_heading !== '') {
                $(this).closest('.eventer-modal').find('.eventer-section-wise-heading').text(dialog_heading);
            }
            var targetIn = $(this).attr('data-eventer-toggle-in');
            var targetOut = $(this).attr('data-eventer-toggle-out');
            $(this).parents('.eventer-toggle-area').find(targetOut).slideUp('fast');
            $(this).parents('.eventer-toggle-area').find(targetIn).slideDown('slow');
            e.preventDefault();
        });

        $('.eventer-temporary-tickets').hide();
        $(document).on('click', '.eventer-fe-booking-linkss', function () {
            EVENTER.GENERATETICKETSREGISTRANTS('dashboard');
        });

        $(document).on('click', '.eventer-admin-woo-download-tickets-action', function () {
            $(this).closest('form').submit();
            return false;
        });

        if (initval.reg_now === "1") {
            EVENTER.GENERATETICKETSREGISTRANTS();
        }

        //QR Code Generator
        $('.eventer-on-ticket-qr').each(function () {
            var qrInstance = $(this);
            var qrContent = qrInstance.attr("data-qr-content") ? qrInstance.attr("data-qr-content") : "";
            var qrSize = qrInstance.attr("data-qr-size") ? qrInstance.attr("data-qr-size") : 200;
            EVENTER.GENERATEQRCODE(qrInstance, qrContent, qrSize);
        });
        var d = new Date;
        //alert(d.getFullYear());
        // Eventer CountDown
        $('.eventer-countdown-timer').each(function () {
            var expiryDate = $(this).data('date');
            var countdown_id = $(this).attr('id');

            var target = expiryDate;
            var finished = false,
                availiableExamples = {
                    set15daysFromNow: 15 * 24 * 60 * 60 * 1000,
                    set5minFromNow: 5 * 60 * 1000,
                    set1minFromNow: 1 * 60 * 1000
                };
            function callback(event) {
                var $this = $(this);
                switch (event.type) {
                    case "seconds":
                    case "minutes":
                    case "hours":
                    case "days":
                    case "weeks":
                    case "daysLeft":
                        $this.find('div span#' + event.type).html(event.value);
                        if (finished) {
                            $this.fadeTo(0, 1);
                            finished = false;
                        }
                        break;
                    case "finished":
                        $this.fadeTo('slow', '.5');
                        finished = true;
                        break;
                }
            }
            $('#' + countdown_id).countdown(target, callback);

            /*$('#' + countdown_id).eventer_countdown(expiryDate).on('update.countdown', function (event) {
                $(this).html(event.strftime('' + '<div class="eventer-timer-col"><div><div><span>%D</span> <strong>' + initval.day + '</strong></div></div></div>' + '<div class="eventer-timer-col"><div><div><span>%H</span> <strong>' + initval.hr + '</strong></div></div></div>' + '<div class="eventer-timer-col"><div><div><span>%M</span> <strong>' + initval.min + '</strong></div></div></div>' + '<div class="eventer-timer-col"><div><div><span>%S</span> <strong>' + initval.sec + '</strong></div></div></div>'));*/
            //});
        });

        // Disable click on expandable event details in compact list
        $('.eventer-list-accordion .eventer-event-item-link').on('click', function () {
            $(this).parents('.eventer-event-list-item').find('.eventer-front-expandable-details').slideToggle();
            return false;
        });

        $('.eventer-quick-ticket-info > a').on('click', function (e) {
            e.preventDefault();
        });

        $('.eventer-quick-share > a').on('click', function (e) {
            e.preventDefault();
        });

        $('.eventer-quick-share').on('hover', function (e) {
            if ($(this).hasClass('opened')) {
                $(this).find('ul').delay(1000).animate({ height: '0', opacity: 0 }, "fast", "");
                $(this).removeClass('opened');
                $(this).addClass('closed');
            } else {
                var count = $(this).find('ul li').length;
                var height = count * 45;
                $(this).find('ul').animate({ height: height + 'px', opacity: 1 }, "fast", "");
                $(this).css("overflow", "visible");
                $(this).removeClass('closed');
                $(this).addClass('opened');
            }
        });

        $('.eventer-hidden-content-trigger').on('click', function () {
            $(this).parent('.eventer-hidden-content').toggleClass('eventer-hidden-content-open');
            EVENTER.MH();
            return false;
        });
        
        // Eventer Coupon Module
        $('.eventer-coupon-opener').on('click',function(){
           $(this).parents('.eventer-coupon-module').find('.eventer-coupon-field').slideToggle(); 
        });
        
        // Eventer Map Module

        $(".eventer-event-map-block").each(function () {
            var MAPADD = $(this).find(".eventer-location-address").text();
            var map;
            var geocoder;
            function InitializeMap() {
                var latlng = new google.maps.LatLng(-34.397, 150.644);
                var myOptions =
                {
                    zoom: 12,
                    center: latlng,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    disableDefaultUI: true
                };
                map = new google.maps.Map(document.getElementById("eventer-dyn-map"), myOptions);
            }
            geocoder = new google.maps.Geocoder();
            InitializeMap();
            var address = MAPADD;
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });
                }
                else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
        });

        // Eventer Schedule
        $('.eventer-event-schedule').each(function () {
            $(this).find('ul.eventer-schedule-activity li > a').on('click', function () {
                $(this).parents('.eventer-event-schedule').find('ul.eventer-schedule-activity li .eventer-schedule-content').slideUp('fast');
                $(this).parents('ul.eventer-schedule-activity li').find('.eventer-schedule-content').slideToggle('fast');
                return false;
            });
        });
    });
});
